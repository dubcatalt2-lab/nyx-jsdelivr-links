const eo = new Set([ "cdn.jsdelivr.net", "gcore.jsdelivr.net", "fastly.jsdelivr.net", "quantil.jsdelivr.net", "originfastly.jsdelivr.net", "testingcf.jsdelivr.net", "jsdelivr.b-cdn.net", "esm.sh", "raw.esm.sh" ]);

export const MAX_JOB_LINKS = 1e5;

export function openJobStore() {
  return new Promise((e, t) => {
    const o = indexedDB.open("nyx.link-publish-jobs", 1);
    o.onupgradeneeded = () => o.result.createObjectStore("records"), o.onerror = () => t(o.error), 
    o.onsuccess = () => {
      const t = o.result;
      e({
        read: () => new Promise((e, o) => {
          const s = t.transaction("records").objectStore("records").get("job");
          s.onsuccess = () => e(s.result || null), s.onerror = () => o(s.error);
        }),
        save: (e, o) => new Promise((s, r) => {
          const a = t.transaction("records", "readwrite"), n = a.objectStore("records");
          n.put(e, "job"), o && n.put(o.links, "batch:" + o.id), a.oncomplete = s, a.onerror = () => r(a.error), 
          a.onabort = () => r(a.error || new Error("Progress could not be saved."));
        }),
        links: e => new Promise((o, s) => {
          const r = t.transaction("records"), a = r.objectStore("records"), n = [];
          e.batches.forEach((e, t) => {
            const o = a.get("batch:" + e);
            o.onsuccess = () => {
              n[t] = (o.result || []).join("\n") + "\n";
            };
          }), r.oncomplete = () => o(n), r.onerror = () => s(r.error);
        }),
        clear: () => new Promise((e, o) => {
          const s = t.transaction("records", "readwrite");
          s.objectStore("records").clear(), s.oncomplete = e, s.onerror = () => o(s.error);
        })
      });
    };
  });
}

export class BulkJob {
  constructor({store: e, access: t, request: o = fetch, update: s = () => {}, now: r = Date.now, sleep: a = e => new Promise(t => setTimeout(t, e)), uuid: n = () => crypto.randomUUID()}) {
    Object.assign(this, {
      store: e,
      access: t,
      request: o,
      update: s,
      now: r,
      sleep: a,
      uuid: n
    }), this.paused = !1;
  }
  pause() {
    this.paused = !0;
  }
  async create(e) {
    if (await this.store.read()) throw new Error("A saved job already exists. Resume it or clear its saved progress first.");
    if (!Number.isSafeInteger(e.total) || e.total < 1 || e.total > 1e5 || !eo.has(e.host)) throw new Error("Choose up to 100,000 links and a supported CDN.");
    const t = await this.access();
    if (!t.uid) throw new Error("Sign in to your account above before starting a large job.");
    const o = {
      id: this.uuid(),
      uid: t.uid,
      label: e.label,
      host: e.host,
      total: e.total,
      completed: 0,
      batches: [],
      pending: null,
      nextAt: 0
    };
    return await this.store.save(o), o;
  }
  async run() {
    let e = await this.store.read();
    if (!e) throw new Error("There is no saved job to resume.");
    this.paused = !1;
    let t = 0;
    for (;!this.paused && e.completed < e.total; ) {
      if (e.nextAt > this.now()) {
        this.update(e, "Waiting until " + new Date(e.nextAt).toLocaleTimeString() + ". You can pause and return later."), 
        await this.sleep(Math.min(1e3, e.nextAt - this.now()));
        continue;
      }
      const o = await this.access();
      if (o.uid !== e.uid) throw new Error("Sign in to the account that started this job.");
      if (this.paused) break;
      let s, r;
      e.pending || (e.pending = {
        id: this.uuid(),
        amount: Math.min(o.limit, 1e3, e.total - e.completed),
        method: o.method
      }, await this.store.save(e)), this.update(e, "Publishing the next " + e.pending.amount.toLocaleString() + " links\u2026");
      try {
        s = await this.request("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/link-generator", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + o.token
          },
          signal: AbortSignal.timeout(12e4),
          body: JSON.stringify({
            provider: "jsdelivr",
            method: e.pending.method,
            label: e.label,
            amount: e.pending.amount,
            batchRequestId: e.pending.id
          })
        }), r = await s.json();
      } catch {
        if (t++, e.nextAt = this.now() + Math.min(9e5, 6e4 * 2 ** (t - 1)), await this.store.save(e), 
        t >= 5) throw new Error("Connection kept failing. Progress is saved; resume later to check the same batch.");
        continue;
      }
      if (!s.ok) {
        if (429 === s.status && "STATIC_PACKAGE_PREPARING" === r.code) {
          e.nextAt = this.now() + 1e3 * Math.max(10, Number(s.headers.get("Retry-After")) || 10), 
          await this.store.save(e), this.update(e, r.error);
          continue;
        }
        if (429 === s.status || s.status >= 500) {
          t++;
          const o = s.headers.get("Retry-After"), r = Number(o) || Math.max(0, (Date.parse(o) - this.now()) / 1e3) || 60;
          if (e.nextAt = this.now() + Math.max(1e3 * r, Math.min(9e5, 6e4 * 2 ** (t - 1))), 
          await this.store.save(e), t >= 5) throw new Error("Publishing is still unavailable. Progress is saved; resume later.");
          continue;
        }
        throw new Error(r.error || "Publishing stopped. Your completed links are saved.");
      }
      const a = (r.links || []).map(t => {
        const o = new URL("string" == typeof t ? t : t.url);
        if ("https:" !== o.protocol || !eo.has(o.hostname) || !o.pathname.startsWith("/gh/")) throw new Error("Publisher returned an unexpected link. Progress is saved.");
        return o.hostname = e.host, o.href;
      });
      if (a.length !== e.pending.amount || new Set(a).size !== a.length) throw new Error("The batch result was incomplete. Resume to check the same batch.");
      const n = {
        id: e.pending.id,
        links: a
      }, i = {
        ...e,
        batches: [ ...e.batches, n.id ],
        completed: e.completed + a.length,
        pending: null,
        nextAt: Math.max(this.now() + 3e4, Number(r.premiumCooldown?.cooldownUntil) || 0)
      };
      await this.store.save(i, n), e = i, t = 0, this.update(e, "Saved " + e.completed.toLocaleString() + " published links.");
    }
    return this.update(e, e.completed === e.total ? "Complete. Your links are ready to download." : "Paused. Progress is saved on this device."), 
    e;
  }
}

export async function attachBulkJobs({access: e}) {
  const t = document.querySelector("[data-bulk-job]"), o = t.querySelector("[data-job-status]"), s = t.querySelector("progress"), r = t.querySelector("[data-job-resume]"), a = t.querySelector("[data-job-pause]"), n = t.querySelector("[data-job-download]"), i = t.querySelector("[data-job-clear]");
  if (!navigator.locks || !globalThis.indexedDB) throw new Error("Large jobs need a browser with local storage and Web Locks support.");
  const l = await openJobStore();
  let c = !1;
  const d = (e, l) => {
    t.hidden = !1, s.max = e?.total || 1, s.value = e?.completed || 0, o.textContent = (e ? e.completed.toLocaleString() + " / " + e.total.toLocaleString() + " \u2014 " : "") + l, 
    r.disabled = c || !e || e.completed === e.total, a.disabled = !c, i.disabled = c || !e, 
    n.disabled = !e?.completed;
  }, u = new BulkJob({
    store: l,
    access: e,
    update: d
  }), h = async e => navigator.locks.request("nyx-link-publish-job", {
    ifAvailable: !0
  }, async t => {
    if (t) try {
      c = !0, e && await u.create(e), await u.run();
    } catch (o) {
      d(await l.read(), o.message + " No further batches will be sent.");
    } finally {
      c = !1;
      const e = await l.read();
      r.disabled = !e || e.completed === e.total, a.disabled = !0, i.disabled = !e;
    } else d(await l.read(), "This job is already running in another tab.");
  }).catch(e => {
    c = !1, t.hidden = !1, o.textContent = "Could not access saved progress: " + e.message, 
    a.disabled = !0;
  });
  r.addEventListener("click", () => {
    h();
  }), a.addEventListener("click", () => {
    u.pause(), a.disabled = !0, o.textContent = "Pausing after the current request finishes\u2026";
  }), n.addEventListener("click", async () => {
    try {
      const e = await l.read(), t = await l.links(e), o = URL.createObjectURL(new Blob(t, {
        type: "text/plain;charset=utf-8"
      })), s = document.createElement("a");
      s.href = o, s.download = "nyx-links-" + e.completed + ".txt", document.body.appendChild(s), 
      s.click(), s.remove(), setTimeout(() => URL.revokeObjectURL(o), 1e3);
    } catch (e) {
      o.textContent = "Could not download: " + e.message;
    }
  }), i.addEventListener("click", () => {
    confirm("Clear this saved job and its local link list? Published files will stay online. Download your links first.") && navigator.locks.request("nyx-link-publish-job", {
      ifAvailable: !0
    }, async e => {
      e && (await l.clear(), d(null, "Saved job cleared."));
    });
  });
  const p = await l.read();
  return p && d(p, "Saved job found. Sign in to the same account and choose Resume."), 
  {
    start: e => h(e)
  };
}
