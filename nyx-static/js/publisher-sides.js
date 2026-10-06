import { publisherConfig as _m, publisherHostAllowed as ip, publisherMode as qm } from "./@r3e5de20a40d352293b198b87!.js";

import { createPublisherFrame as ap } from "./@r376fcb03ee64aa4978c0a3e0!.js";

export function startHomeSponsors() {
  if (!ip() || 2 !== _m.homeBanners.length) return;
  const e = new Map;
  let t, n = !1, o = 0, s = !1;
  const i = new Set, r = document.createElement("style");
  function a(e) {
    for (const t of e.slots) t.frame.destroy(), t.host.remove();
    e.slots = [];
  }
  function d() {
    n = !1, o && Date.now() >= o && (s = !0);
    const r = qm(), l = !s && ![ "off", "pending" ].includes(r);
    "adkid" !== r || t ? "adkid" !== r && t && (t.remove(), t = null) : (t = document.createElement("div"), 
    t.className = "nyx-adkid-sponsors", document.body.append(t));
    const p = [ ...document.querySelectorAll(".browser-home.nyx-minimal-home") ];
    if (t) {
      const e = document.querySelector(".browser-window");
      e && (t.style.left = Math.max(0, e.getBoundingClientRect().left) + "px"), p.push(t);
    }
    for (const n of p) {
      e.has(n) || e.set(n, {
        slots: [],
        attempted: !1
      });
      const s = e.get(n), p = n.getBoundingClientRect(), m = l && ("adkid" !== r || n === t), c = m && !document.hidden && !n.classList.contains("hidden") && (n === t || n.closest(".browser-window.browser-blank")) && p.width >= 900 && p.height >= 520 && "hidden" !== getComputedStyle(n).visibility && !document.body.classList.contains("nyx-loading-active");
      if (m) {
        for (const e of s.slots) e.host.hidden = !c || e.failed;
        c && !s.attempted && (s.attempted = !0, _m.homeBanners.forEach((t, r) => {
          if (i.has(r)) return;
          const a = document.createElement("aside");
          a.className = "nyx-home-sponsor", a.dataset.side = r ? "right" : "left", a.setAttribute("aria-label", "Sponsored placement");
          const l = document.createElement("header"), p = document.createElement("span");
          p.textContent = "Ad", p.setAttribute("aria-label", "Advertisement");
          const m = document.createElement("button");
          m.type = "button", m.setAttribute("aria-label", `Close ${r ? "right" : "left"} advertisement`), 
          m.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 6 12 12M6 18 18 6"/></svg>', 
          m.addEventListener("click", () => {
            i.add(r);
            for (const t of e.values()) t.slots = t.slots.filter(e => e.index !== r || (e.frame.destroy(), 
            e.host.remove(), !1));
          }), l.append(p, m), a.append(l);
          const c = {
            host: a,
            index: r,
            failed: !1
          };
          c.frame = ap({
            ...t,
            onReady: () => {
              a.dataset.ready = "true", o || (o = Date.now() + 3e5, setTimeout(d, 3e5));
            },
            onUnavailable: () => {
              c.failed = !0, a.hidden = !0;
            }
          });
          const h = document.createElement("div");
          h.className = "nyx-home-creative", h.append(c.frame.element), a.append(h), s.slots.push(c), 
          n.append(a);
        }));
      } else a(s), s.attempted = !1;
    }
    for (const [t, n] of e) t.isConnected || (a(n), e.delete(t));
  }
  function l() {
    n || (n = !0, requestAnimationFrame(d));
  }
  r.textContent = '.nyx-home-sponsor{position:absolute;bottom:24px;width:64px;z-index:3;color:var(--obsidian-muted,#aaa);font:10px/1.4 system-ui;text-align:center}.nyx-home-sponsor[data-side="left"]{left:24px}.nyx-home-sponsor[data-side="right"]{right:24px}.nyx-home-sponsor>span{display:block;margin-bottom:8px}.nyx-home-sponsor .nyx-home-creative{width:64px;height:240px;overflow:hidden}.nyx-home-sponsor iframe{transform:scale(.4);transform-origin:top left;display:block;width:160px;height:600px;border:0;background:transparent}.nyx-home-sponsor:not([data-ready]){visibility:hidden}.nyx-home-sponsor[hidden]{display:none!important}', 
  document.head.append(r), r.textContent += ".nyx-home-sponsor header{display:flex;align-items:center;justify-content:space-between;gap:4px;margin-bottom:4px;font-size:8px}.nyx-home-sponsor button{display:grid;place-items:center;flex:none;width:24px;height:24px;border:1px solid #ffffff30;border-radius:6px;background:#151515;color:#eee;cursor:pointer}.nyx-home-sponsor button svg{width:12px;height:12px}", 
  r.textContent += ".nyx-adkid-sponsors{position:fixed;inset:100px 0 0 76px;z-index:1100;pointer-events:none}.nyx-adkid-sponsors .nyx-home-sponsor{pointer-events:auto}", 
  new MutationObserver(l).observe(document.body, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: [ "class" ]
  }), window.addEventListener("resize", l), window.addEventListener("nyx:publisher-change", l), 
  document.addEventListener("visibilitychange", l), d();
}
