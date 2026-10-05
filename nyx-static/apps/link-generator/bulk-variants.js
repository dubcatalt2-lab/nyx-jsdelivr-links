const er = 5e6, tr = 1e5, rr = 1e4;

export function prepareAliasBase(e, t) {
  let r;
  try {
    r = new URL(String(e || "").trim());
  } catch {
    throw new Error("Nyx could not determine the address for these links.");
  }
  if (![ "http:", "https:" ].includes(r.protocol) || r.username || r.password) throw new Error("Nyx links require a public http:// or https:// address.");
  const n = String(t || "").trim();
  if (!/^[A-Za-z0-9_-]{8,24}$/.test(n)) throw new Error("Nyx could not create a safe link group.");
  return r.pathname = "/l/", r.search = "", r.hash = "", Object.freeze({
    prefix: `${r.href}${n}-`,
    suffix: ""
  });
}

export function buildAliasUrl(e, t) {
  return `${e.prefix}${encodeURIComponent(String(t))}${e.suffix}`;
}

function nr(e) {
  let t = 0;
  for (let r = 1; r <= e; r *= 10) t += (Math.min(e, 10 * r - 1) - r + 1) * String(r).length;
  return t;
}

export function estimatedLinkBytes(e, t, r = "sequential") {
  const n = Number(t);
  if (!Number.isSafeInteger(n) || n < 1 || n > er) throw new Error(`Choose between 1 and ${er.toLocaleString()} links.`);
  return (new TextEncoder).encode(`${e.prefix}${e.suffix}\n`).length * n + ("uuid" === r ? 36 * n : "random" === r ? 16 * n : nr(n));
}

function or(e = 16) {
  const t = new Uint8Array(e);
  crypto.getRandomValues(t);
  let r = "";
  for (const n of t) r += "ABCDEFGHJKLMNPQRSTUVWXYZ23456789abcdefghijkmnopqrstuvwxyz"[n % 57];
  return r;
}

function ar(e, t) {
  return "uuid" === e ? "function" == typeof crypto.randomUUID ? crypto.randomUUID() : `${or(16)}-${or(16)}` : "random" === e ? or() : String(t);
}

function ir(e) {
  const t = [ "B", "KB", "MB", "GB" ];
  let r = Math.max(0, Number(e) || 0), n = 0;
  for (;r >= 1024 && n < t.length - 1; ) r /= 1024, n += 1;
  return `${r >= 100 || 0 === n ? Math.round(r) : r.toFixed(1)} ${t[n]}`;
}

function lr(e, t) {
  const r = URL.createObjectURL(new Blob(e, {
    type: "text/plain;charset=utf-8"
  })), n = document.createElement("a");
  n.href = r, n.download = t, n.rel = "noopener", n.hidden = !0, document.body.append(n), 
  n.click(), setTimeout(() => {
    URL.revokeObjectURL(r), n.remove();
  }, 6e4);
}

function cr() {
  const e = document.querySelector("[data-bulk-variants]");
  if (!e) return;
  const t = e.querySelector("[data-bulk-variants-form]"), r = e.querySelector("[data-bulk-count]"), n = e.querySelector("[data-bulk-mode]"), o = e.querySelector("[data-bulk-alias-example]"), a = e.querySelector("[data-bulk-generate]"), i = e.querySelector("[data-bulk-cancel]"), l = e.querySelector("[data-bulk-estimate]"), c = e.querySelector("[data-bulk-progress]"), s = e.querySelector("[data-bulk-progress-bar]"), u = e.querySelector("[data-bulk-progress-text]"), d = e.querySelector("[data-bulk-preview]"), h = e.querySelector("[data-bulk-preview-count]"), f = e.querySelector("[data-bulk-preview-lines]");
  let p = null;
  const m = (e, t = 0, r = "") => {
    c.hidden = !1, c.className = "bulk-variants-progress" + (r ? ` ${r}` : ""), s.style.width = `${Math.max(0, Math.min(100, 100 * t))}%`, 
    u.textContent = e;
  }, w = () => {
    o.textContent = `${location.origin}/l/NyxLinkGroup-...`;
    try {
      l.textContent = `Estimated download: ${ir(estimatedLinkBytes(prepareAliasBase(location.origin, "NyxLinkGroup"), Number(r.value), n.value))}`;
    } catch (e) {
      l.textContent = e.message;
    }
  };
  [ r, n ].forEach(e => e.addEventListener("input", w)), n.addEventListener("change", w), 
  i.addEventListener("click", () => {
    p && (p.cancelled = !0);
  }), t.addEventListener("submit", async e => {
    if (e.preventDefault(), p) return;
    let t, o;
    try {
      if (t = prepareAliasBase(location.origin, or(12)), o = Number(r.value), estimatedLinkBytes(t, o, n.value), 
      o > tr && "function" != typeof window.showSaveFilePicker) throw new Error(`This browser can safely download up to ${tr.toLocaleString()} links at once. Use Chrome or Edge for larger streamed files.`);
    } catch (x) {
      return void m(x.message, 0, "error");
    }
    const l = {
      cancelled: !1
    };
    p = l, a.disabled = !0, i.hidden = !1, d.hidden = !0, m("Choose where to save the list\u2026", 0);
    let c = null;
    const s = [], u = [], w = [];
    let y = 0;
    const b = performance.now(), g = `nyx-path-links-${o}.txt`;
    try {
      if (o > tr) {
        const e = await window.showSaveFilePicker({
          suggestedName: g,
          types: [ {
            description: "Text file",
            accept: {
              "text/plain": [ ".txt" ]
            }
          } ]
        });
        c = await e.createWritable();
      }
      for (let r = 1; r <= o && !l.cancelled; r += rr) {
        const e = Math.min(o, r + rr - 1), a = [];
        for (let o = r; o <= e; o += 1) {
          const e = buildAliasUrl(t, ar(n.value, o));
          a.push(e), u.length < 5 && u.push(e), w.push(e), w.length > 5 && w.shift();
        }
        const i = `${a.join("\n")}\n`;
        c ? await c.write(i) : s.push(i), y = e;
        const l = Math.max(.01, (performance.now() - b) / 1e3);
        m(`Generated ${y.toLocaleString()} of ${o.toLocaleString()} \xb7 ${Math.round(y / l).toLocaleString()} links/sec`, y / o), 
        await new Promise(e => setTimeout(e, 0));
      }
      if (l.cancelled) return c && await c.abort(), void m("Generation cancelled. No completed file was saved.", y / o, "error");
      c ? await c.close() : lr(s, g);
      const e = y > 10 ? [ ...u, "\u2026", ...w ] : [ ...u, ...w.slice(Math.max(0, u.length - 5)) ];
      f.textContent = [ ...new Set(e) ].join("\n"), h.textContent = `${y.toLocaleString()} links`, 
      d.hidden = !1, m(`${y.toLocaleString()} different Nyx links saved to ${g}.`, 1, "complete");
    } catch (x) {
      c && await c.abort().catch(() => {}), m("AbortError" === x?.name ? "Save cancelled." : x?.message || "The link list could not be created.", y / o, "error");
    } finally {
      p = null, a.disabled = !1, i.hidden = !0;
    }
  }), w();
}

"undefined" != typeof document && cr();

export { er as MAX_LINKS };
