import { createPublisherFrame as ap } from "./@r376fcb03ee64aa4978c0a3e0!.js";

import { publisherConfig as _m, publisherHostAllowed as ip, publisherMode as qm } from "./@r3e5de20a40d352293b198b87!.js";

export function createGameSponsors(e) {
  if (!ip() || !e || !globalThis.IntersectionObserver) return null;
  const t = [], n = new WeakMap, a = new WeakMap, s = new IntersectionObserver(e => {
    for (const t of e) n.set(t.target, t.isIntersecting), d(t.target);
  }, {
    threshold: .1
  });
  function d(e) {
    if ([ "off", "pending" ].includes(qm()) || e.hidden || e.dataset.dismissed || !n.get(e) || e.dataset.loaded || document.hidden) return;
    e.dataset.loaded = "true";
    const t = ap({
      path: e.dataset.native ? "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/apps/sponsor/native.html" : _m.bannerPath,
      width: e.dataset.native ? 720 : _m.bannerWidth,
      height: e.dataset.native ? 320 : _m.bannerHeight,
      dynamicHeight: !!e.dataset.native,
      onReady: () => {
        e.dataset.ready = "true";
      },
      onUnavailable: () => {
        e.dataset.failed = "true", e.hidden = !0;
      }
    });
    a.set(e, t), e.append(t.element);
  }
  for (let o = 0; o < 3; o++) {
    const n = document.createElement("aside");
    n.className = "nyx-sponsor-slot", 2 === o && (n.classList.add("nyx-sponsor-native"), 
    n.dataset.native = "true"), n.setAttribute("aria-label", "Sponsored placement"), 
    n.hidden = !0;
    const d = document.createElement("span");
    d.textContent = "Advertisement";
    const r = document.createElement("header"), i = document.createElement("button");
    i.type = "button", i.setAttribute("aria-label", 2 === o ? "Close native advertisement" : `Close banner advertisement ${o + 1}`), 
    i.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 6 12 12M6 18 18 6"/></svg>', 
    i.addEventListener("click", () => {
      n.dataset.dismissed = "true", n.hidden = !0, a.get(n)?.destroy(), a.delete(n);
    }), r.append(d, i), n.append(r), t.push(n), e.append(n), s.observe(n);
  }
  let r = 0;
  function i() {
    for (let n = 0; n < t.length; n++) {
      const s = t[n];
      s.hidden = !!s.dataset.dismissed || r < 2 || [ "off", "pending" ].includes(qm()) || e.clientWidth < (s.dataset.native ? 280 : _m.bannerWidth) || "true" === s.dataset.failed, 
      [ "off", "pending" ].includes(qm()) && (a.get(s)?.destroy(), delete s.dataset.loaded, 
      delete s.dataset.ready), d(s);
    }
  }
  return new ResizeObserver(i).observe(e), document.addEventListener("visibilitychange", i), 
  window.addEventListener("message", e => {
    "nyx:publisher-change" !== e.data?.type || e.source !== parent || e.origin !== location.origin || i();
  }), {
    render(n, a) {
      r = n.length;
      for (const t of e.querySelectorAll(":scope > .game-card")) t.remove();
      const s = Math.max(1, Math.ceil(n.length / 3));
      for (let d = 0; d < n.length; d += s) {
        const r = document.createDocumentFragment();
        for (const e of n.slice(d, d + s)) r.append(a(e));
        e.insertBefore(r, t[d / s] || null);
      }
      i();
    }
  };
}
