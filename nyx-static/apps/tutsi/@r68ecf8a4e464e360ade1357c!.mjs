import { httpRelayUrl as λb6b847fcfeb2 } from "./@r694ba82e944178de68f9bf8d!.mjs";

export function normalizeRelay(λb6b847fcfeb2, λ7b0dc4ced5ff = globalThis.location?.protocol || "https:") {
  try {
    const λa9298d22f587 = new URL(λb6b847fcfeb2);
    return ![ "ws:", "wss:" ].includes(λa9298d22f587.protocol) || λa9298d22f587.username || λa9298d22f587.password || λa9298d22f587.hash || "https:" === λ7b0dc4ced5ff && "wss:" !== λa9298d22f587.protocol ? "" : λa9298d22f587.href;
  } catch {
    return "";
  }
}

export function relayCandidates(λb6b847fcfeb2, λ7b0dc4ced5ff = globalThis.__NYX_RUNTIME_CONFIG__ || {}, λa9298d22f587 = location) {
  const λ77949fff3c19 = `${"https:" === λa9298d22f587.protocol ? "wss:" : "ws:"}//${λa9298d22f587.host}/resources/live/`, λ3795368fd326 = normalizeRelay(λb6b847fcfeb2.relay, λa9298d22f587.protocol) || normalizeRelay(λ7b0dc4ced5ff.wispUrl, λa9298d22f587.protocol) || λ77949fff3c19;
  return !1 === λb6b847fcfeb2.autoRelay ? [ λ3795368fd326 ] : [ ...new Set([ λ3795368fd326, λ77949fff3c19, ...Array.isArray(λ7b0dc4ced5ff.wispUrls) ? λ7b0dc4ced5ff.wispUrls : [], "wss://copium-wisp-9529463.onrender.com/wisp/" ].map(λb6b847fcfeb2 => normalizeRelay(λb6b847fcfeb2, λa9298d22f587.protocol)).filter(Boolean)) ].slice(0, 6);
}

export function transportCandidates(λ7b0dc4ced5ff, λa9298d22f587 = globalThis.__NYX_RUNTIME_CONFIG__ || {}, λ77949fff3c19 = location) {
  const λ3795368fd326 = λb6b847fcfeb2(λ77949fff3c19), λ296b13cec42d = relayCandidates(λ7b0dc4ced5ff, λa9298d22f587, λ77949fff3c19);
  return !1 === λ7b0dc4ced5ff.httpBridge ? relayCandidates(λ7b0dc4ced5ff.relay === λ3795368fd326 ? {
    ...λ7b0dc4ced5ff,
    relay: ""
  } : λ7b0dc4ced5ff, λa9298d22f587.wispUrl === λ3795368fd326 ? {
    ...λa9298d22f587,
    wispUrl: ""
  } : λa9298d22f587, λ77949fff3c19).filter(λb6b847fcfeb2 => λb6b847fcfeb2 !== λ3795368fd326) : λ7b0dc4ced5ff.relay && λ7b0dc4ced5ff.relay !== λ3795368fd326 ? [ ...new Set([ ...λ296b13cec42d, ...!1 === λ7b0dc4ced5ff.autoRelay ? [] : [ λ3795368fd326 ] ]) ] : [ ...new Set([ λ3795368fd326, ...!1 === λ7b0dc4ced5ff.autoRelay ? [] : λ296b13cec42d ]) ];
}

export function probeWisp(λb6b847fcfeb2, {timeout: λ7b0dc4ced5ff = 7e3, Socket: λa9298d22f587 = WebSocket} = {}) {
  return new Promise(λ77949fff3c19 => {
    let λ3795368fd326, λ296b13cec42d = !1;
    const n = λb6b847fcfeb2 => {
      if (!λ296b13cec42d) {
        if (λ296b13cec42d = !0, clearTimeout(λ55662205a210), λ3795368fd326) {
          λ3795368fd326.onmessage = λ3795368fd326.onerror = λ3795368fd326.onclose = null;
          try {
            λ3795368fd326.close();
          } catch {}
        }
        λ77949fff3c19(λb6b847fcfeb2);
      }
    }, λ55662205a210 = setTimeout(() => n(!1), λ7b0dc4ced5ff);
    try {
      λ3795368fd326 = new λa9298d22f587(λb6b847fcfeb2), λ3795368fd326.binaryType = "arraybuffer", 
      λ3795368fd326.onmessage = λb6b847fcfeb2 => {
        if (!(λb6b847fcfeb2.data instanceof ArrayBuffer)) return;
        const λ7b0dc4ced5ff = new Uint8Array(λb6b847fcfeb2.data);
        λ7b0dc4ced5ff.length >= 9 && 3 === λ7b0dc4ced5ff[0] && 0 === new DataView(λb6b847fcfeb2.data).getUint32(1, !0) && n(!0);
      }, λ3795368fd326.onerror = λ3795368fd326.onclose = () => n(!1);
    } catch {
      n(!1);
    }
  });
}

export class RelayTransport {
  constructor({urls: λb6b847fcfeb2, createClient: λ7b0dc4ced5ff, probe: λa9298d22f587 = probeWisp, onStatus: λ77949fff3c19 = () => {}, storage: λ3795368fd326 = globalThis.sessionStorage, monitorMs: λ296b13cec42d = 3e4, requestTimeoutMs: λ55662205a210 = 2e4, rank: λ12537929f373 = async λb6b847fcfeb2 => λb6b847fcfeb2, online: λf51e33c07b04 = () => !1 !== globalThis.navigator?.onLine, visible: λ0e393832c8d0 = () => !globalThis.document?.hidden}) {
    Object.assign(this, {
      urls: λb6b847fcfeb2,
      createClient: λ7b0dc4ced5ff,
      probe: λa9298d22f587,
      onStatus: λ77949fff3c19,
      storage: λ3795368fd326,
      monitorMs: λ296b13cec42d,
      requestTimeoutMs: λ55662205a210,
      rank: λ12537929f373,
      online: λf51e33c07b04,
      visible: λ0e393832c8d0
    }), this.ready = !1, this.closed = !1, this.url = "", this.client = null, this.switching = null, 
    this.failures = 0, this.retired = [];
  }
  async init() {
    await this.select(), this.ready = !0, this.schedule();
  }
  async select(λb6b847fcfeb2 = "") {
    if (this.closed) throw new Error("Relay connection closed.");
    if (this.switching) return this.switching;
    if (!this.online()) throw new Error("You are offline. Reconnect to Wi-Fi and try again.");
    let λ7b0dc4ced5ff = "";
    try {
      λ7b0dc4ced5ff = this.storage?.getItem("tutsi.workingRelay:" + this.urls.join("|")) || "";
    } catch {}
    const λa9298d22f587 = [ ...new Set([ this.url, λ7b0dc4ced5ff, ...this.urls ]) ].filter(λ7b0dc4ced5ff => this.urls.includes(λ7b0dc4ced5ff) && λ7b0dc4ced5ff !== λb6b847fcfeb2);
    this.switching = (async () => {
      let λ7b0dc4ced5ff;
      const λ77949fff3c19 = await Promise.race([ Promise.resolve().then(() => this.rank(λa9298d22f587)).catch(() => λa9298d22f587), new Promise(λb6b847fcfeb2 => {
        λ7b0dc4ced5ff = setTimeout(() => λb6b847fcfeb2(λa9298d22f587), 300);
      }) ]).finally(() => clearTimeout(λ7b0dc4ced5ff));
      for (const λ7b0dc4ced5ff of λ77949fff3c19) {
        if (this.closed) throw new Error("Relay connection closed.");
        if (this.onStatus({
          state: "checking",
          url: λ7b0dc4ced5ff
        }), !await this.probe(λ7b0dc4ced5ff)) continue;
        let λa9298d22f587;
        try {
          λa9298d22f587 = await this.createClient(λ7b0dc4ced5ff);
        } catch {
          continue;
        }
        if (this.closed) throw λa9298d22f587.close?.(), new Error("Relay connection closed.");
        for (this.client && this.retired.push(this.client); this.retired.length > 2; ) try {
          this.retired.shift()?.close?.();
        } catch {}
        this.client = λa9298d22f587, this.url = λ7b0dc4ced5ff, this.failures = 0;
        try {
          this.storage?.setItem("tutsi.workingRelay:" + this.urls.join("|"), λ7b0dc4ced5ff);
        } catch {}
        return void this.onStatus({
          state: λb6b847fcfeb2 ? "switched" : "connected",
          url: λ7b0dc4ced5ff
        });
      }
      throw this.onStatus({
        state: "unavailable",
        url: ""
      }), new Error("No configured Wisp relay is reachable from this device. Try again or change the relay in Settings.");
    })();
    try {
      return await this.switching;
    } finally {
      this.switching = null;
    }
  }
  async recover(λb6b847fcfeb2, λ7b0dc4ced5ff = !1, λa9298d22f587 = !1) {
    return !(this.closed || !this.online() || this.client === λb6b847fcfeb2 && (this.switching ? (await this.switching, 
    this.client === λb6b847fcfeb2) : !λ7b0dc4ced5ff && await this.probe(this.url) || this.client === λb6b847fcfeb2 && (await this.select(λa9298d22f587 ? "" : this.url), 
    this.client === λb6b847fcfeb2)));
  }
  async attempt(λb6b847fcfeb2, λ7b0dc4ced5ff) {
    const λa9298d22f587 = λ7b0dc4ced5ff[4], λ77949fff3c19 = new AbortController;
    if (λa9298d22f587?.aborted) throw λa9298d22f587.reason || new DOMException("Cancelled", "AbortError");
    let λ3795368fd326, λ296b13cec42d = !1, λ55662205a210 = !1;
    const λ12537929f373 = λa9298d22f587 ? AbortSignal.any([ λa9298d22f587, λ77949fff3c19.signal ]) : λ77949fff3c19.signal, λf51e33c07b04 = Promise.resolve().then(() => λb6b847fcfeb2.request(...λ7b0dc4ced5ff.slice(0, 4), λ12537929f373));
    λf51e33c07b04.then(λb6b847fcfeb2 => {
      λ55662205a210 && λ12537929f373.aborted && λb6b847fcfeb2?.body?.cancel?.().catch(() => {});
    }, () => {});
    const λ0e393832c8d0 = new Promise((λb6b847fcfeb2, λ7b0dc4ced5ff) => {
      const i = () => λ7b0dc4ced5ff(λ296b13cec42d ? Object.assign(new Error("Relay request timed out"), {
        name: "TimeoutError"
      }) : λ12537929f373.reason);
      λ12537929f373.addEventListener("abort", i, {
        once: !0
      }), λ3795368fd326 = setTimeout(() => {
        λ296b13cec42d = !0, λ77949fff3c19.abort();
      }, this.requestTimeoutMs), λf51e33c07b04.finally(() => λ12537929f373.removeEventListener("abort", i)).catch(() => {});
    });
    try {
      return await Promise.race([ λf51e33c07b04, λ0e393832c8d0 ]);
    } finally {
      λ55662205a210 = !0, clearTimeout(λ3795368fd326);
    }
  }
  async request(...λb6b847fcfeb2) {
    if (this.closed) throw new Error("Relay connection closed.");
    this.ready || await this.init();
    const λ7b0dc4ced5ff = this.client;
    try {
      return await this.attempt(λ7b0dc4ced5ff, λb6b847fcfeb2);
    } catch (λa9298d22f587) {
      if (λb6b847fcfeb2[4]?.aborted || "AbortError" === λa9298d22f587?.name) throw λa9298d22f587;
      const λ77949fff3c19 = "TimeoutError" === λa9298d22f587?.name || /timed?\s*out|timeout|ETIMEDOUT|ECONNRESET|network|socket|wisp|hyper.*(?:error|client)|muxtaskended|connection.*(?:closed|reset|lost|failed)|unexpected.*(?:eof|cutoff)|transport.*(?:closed|failed)/i.test(String(λa9298d22f587?.message || λa9298d22f587 || ""));
      let λ3795368fd326 = !1;
      try {
        λ3795368fd326 = await this.recover(λ7b0dc4ced5ff, λ77949fff3c19, λ77949fff3c19);
      } catch {}
      if (λ3795368fd326 && /^(GET|HEAD)$/i.test(String(λb6b847fcfeb2[1] || "GET")) && !λb6b847fcfeb2[4]?.aborted && !this.closed && this.online()) return this.attempt(this.client, λb6b847fcfeb2);
      throw λa9298d22f587;
    }
  }
  connect(...λb6b847fcfeb2) {
    const λ7b0dc4ced5ff = this.client, λa9298d22f587 = λb6b847fcfeb2[6];
    λb6b847fcfeb2[6] = (...λb6b847fcfeb2) => {
      this.recover(λ7b0dc4ced5ff).catch(() => {}), λa9298d22f587?.(...λb6b847fcfeb2);
    };
    try {
      return λ7b0dc4ced5ff.connect(...λb6b847fcfeb2);
    } catch (λb6b847fcfeb2) {
      throw this.recover(λ7b0dc4ced5ff).catch(() => {}), λb6b847fcfeb2;
    }
  }
  async check() {
    if (this.closed || !this.client || !this.online() || !this.visible()) return;
    const λb6b847fcfeb2 = this.client, λ7b0dc4ced5ff = this.url, λa9298d22f587 = await this.probe(λ7b0dc4ced5ff);
    this.closed || λb6b847fcfeb2 !== this.client || (this.failures = λa9298d22f587 ? 0 : this.failures + 1, 
    this.failures >= 2 && await this.recover(λb6b847fcfeb2, !0).catch(() => {}));
  }
  schedule() {
    !this.closed && this.monitorMs && (this.timer = setTimeout(async () => {
      await this.check(), this.schedule();
    }, this.monitorMs));
  }
  close() {
    this.closed = !0, clearTimeout(this.timer);
    for (const λb6b847fcfeb2 of [ this.client, ...this.retired ]) try {
      λb6b847fcfeb2?.close?.();
    } catch {}
    this.retired = [];
  }
}

const λ7b0dc4ced5ff = new Map;

export async function rankForBlocker(λb6b847fcfeb2, λa9298d22f587, {fetcher: λ77949fff3c19 = fetch, onHint: λ3795368fd326 = () => {}} = {}) {
  if (!/^[a-z0-9_-]{1,64}$/.test(λa9298d22f587 || "")) return λb6b847fcfeb2;
  const λ296b13cec42d = await Promise.all(λb6b847fcfeb2.map(async λb6b847fcfeb2 => {
    const λ3795368fd326 = new URL(λb6b847fcfeb2).hostname;
    if ("localhost" === λ3795368fd326 || λ3795368fd326.endsWith(".local") || /^[\d.]+$/.test(λ3795368fd326) || λ3795368fd326.includes(":")) return {
      url: λb6b847fcfeb2,
      blocked: null
    };
    const λ296b13cec42d = λa9298d22f587 + ":" + λ3795368fd326, λ55662205a210 = λ7b0dc4ced5ff.get(λ296b13cec42d);
    if (λ55662205a210 && λ55662205a210.until > Date.now()) return {
      url: λb6b847fcfeb2,
      blocked: λ55662205a210.blocked
    };
    let λ12537929f373 = null;
    const λf51e33c07b04 = new AbortController, λ0e393832c8d0 = setTimeout(() => λf51e33c07b04.abort(), 4e3);
    try {
      const λb6b847fcfeb2 = await λ77949fff3c19("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/link-checker/check", {
        method: "POST",
        signal: λf51e33c07b04.signal,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          url: "https://" + λ3795368fd326 + "/",
          vendor: λa9298d22f587
        })
      });
      if (λb6b847fcfeb2.ok) {
        const λ7b0dc4ced5ff = await λb6b847fcfeb2.json(), λ77949fff3c19 = λ7b0dc4ced5ff?.vendors?.[λa9298d22f587];
        λ77949fff3c19?.error || "boolean" != typeof λ77949fff3c19?.blocked || (λ12537929f373 = λ77949fff3c19.blocked);
      }
    } catch {} finally {
      clearTimeout(λ0e393832c8d0);
    }
    return λ7b0dc4ced5ff.set(λ296b13cec42d, {
      blocked: λ12537929f373,
      until: Date.now() + (null === λ12537929f373 ? 3e4 : 6e5)
    }), λ7b0dc4ced5ff.size > 100 && λ7b0dc4ced5ff.delete(λ7b0dc4ced5ff.keys().next().value), 
    {
      url: λb6b847fcfeb2,
      blocked: λ12537929f373
    };
  }));
  return λ3795368fd326({
    vendor: λa9298d22f587,
    results: λ296b13cec42d
  }), λ296b13cec42d.sort((λb6b847fcfeb2, λ7b0dc4ced5ff) => Number(!0 === λb6b847fcfeb2.blocked) - Number(!0 === λ7b0dc4ced5ff.blocked)).map(λb6b847fcfeb2 => λb6b847fcfeb2.url);
}
