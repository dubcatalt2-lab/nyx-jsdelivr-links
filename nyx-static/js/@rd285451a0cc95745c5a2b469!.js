import { publisherBaseMode as op, publisherHostAllowed as ip } from "./@r3e5de20a40d352293b198b87!.js";

export const adcoinsPeriod = 6e5;

export const adcoinsBreak = 18e4;

export const adcoinsKey = "nyx.adcoins.v1";

export function advanceAdcoins(e, n, t, o) {
  const i = t >= n && t - n <= 5e3, a = e => Number.isFinite(e) ? Math.max(0, e) : 0, r = {
    progress: Math.min(6e5, a(e?.progress)),
    freeUntil: a(e?.freeUntil),
    lastEnd: a(e?.lastEnd)
  };
  return r.freeUntil > t || (r.freeUntil && (n = Math.max(n, r.freeUntil), r.freeUntil = 0), 
  o && i && (r.progress += Math.max(0, t - Math.max(n, r.lastEnd)), r.lastEnd = Math.max(r.lastEnd, t), 
  r.progress >= 6e5 && (r.progress = 0, r.freeUntil = t + 18e4))), r;
}

export function startAdcoins() {
  if (!ip() || window.parent !== window || window.__nyxAdcoinsStarted) return;
  window.__nyxAdcoinsStarted = !0;
  let e = Date.now(), n = !document.hidden, t = !1, o = {}, i = !1;
  const a = document.createElement("style");
  a.textContent = '.nyx-adcoins{position:absolute;bottom:48px;left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:8px;max-width:calc(100% - 32px);padding:8px 12px;border:1px solid #ffffff14;border-radius:14px;background:var(--obsidian-surface,#151515);color:var(--obsidian-muted,#aaa);font-family:inherit;font-size:12px;line-height:1.4;white-space:nowrap;pointer-events:none}.nyx-adcoins svg{width:16px;height:16px;flex:none}.nyx-adcoins[hidden]{display:none}.nyx-adcoins[data-free="true"]{color:var(--obsidian-text,#eee)}', 
  document.head.append(a);
  const r = () => [ "standard", "adkid" ].includes(op()) && document.body.classList.contains("browser-shell");
  function s() {
    const e = Date.now(), n = o.freeUntil > e;
    window.__nyxAdcoinsFreeUntil = o.freeUntil || 0, n !== i && (i = n, window.dispatchEvent(new Event("nyx:publisher-change")), 
    document.querySelectorAll("iframe.view").forEach(e => {
      try {
        e.contentWindow?.postMessage({
          type: "nyx:publisher-change"
        }, location.origin);
      } catch {}
    }));
    const t = Math.ceil((n ? o.freeUntil - e : 6e5 - (o.progress || 0)) / 1e3), a = Math.floor(t / 60) + ":" + String(t % 60).padStart(2, "0");
    for (const o of document.querySelectorAll(".browser-home.nyx-minimal-home")) {
      let e = o.querySelector(".nyx-adcoins");
      if (!e && r() && (e = document.createElement("div"), e.className = "nyx-adcoins", 
      e.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m8 13 3 3 5-7"/></svg><span></span>', 
      e.title = "Every 10 minutes with Nyx visible earns a 3-minute ad break. Shared across tabs in this browser.", 
      o.append(e)), !e) continue;
      e.hidden = !r(), e.dataset.free = String(n);
      const t = n ? "Adcoins \xb7 Ad-free for " + a : "Adcoins \xb7 Ad break in " + a;
      e.lastElementChild.textContent !== t && (e.lastElementChild.textContent = t);
    }
  }
  function d() {
    try {
      return JSON.parse(localStorage.getItem(adcoinsKey) || "{}");
    } catch {
      return {};
    }
  }
  function c() {
    const i = Date.now(), a = e, c = n && t;
    e = i, n = !document.hidden, t = r();
    const l = () => {
      o = advanceAdcoins(d(), a, i, c);
      try {
        localStorage.setItem(adcoinsKey, JSON.stringify(o));
      } catch {}
      s();
    };
    navigator.locks ? navigator.locks.request(adcoinsKey, l).catch(() => {}) : l();
  }
  window.addEventListener("storage", e => {
    e.key === adcoinsKey && (o = d(), s());
  }), document.addEventListener("visibilitychange", c), window.addEventListener("nyx:publisher-change", c), 
  window.addEventListener("pageshow", c), window.addEventListener("pagehide", c), 
  setInterval(c, 1e3), o = d(), s(), c();
}
