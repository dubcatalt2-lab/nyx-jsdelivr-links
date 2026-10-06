import { publisherHostAllowed as ip, publisherMode as qm } from "./@r3e5de20a40d352293b198b87!.js";

import { createPublisherFrame as ap } from "./@r376fcb03ee64aa4978c0a3e0!.js";

export function startSocialSponsor() {
  if (!ip()) return;
  let e, o, n = !1, t = !1;
  const r = document.createElement("style");
  function i() {
    e?.destroy(), e = null, o?.remove(), o = null;
  }
  function s() {
    if ("adkid" !== qm()) return i(), void (n = !1);
    if (document.hidden || t || n || !document.body.classList.contains("browser-shell")) return;
    n = !0, o = document.createElement("aside"), o.className = "nyx-social-sponsor", 
    o.setAttribute("aria-label", "Sponsored placement"), o.innerHTML = '<header><span>Advertisement</span><button type="button" aria-label="Close advertisement"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 6 12 12M6 18 18 6"/></svg></button></header>', 
    o.querySelector("button").addEventListener("click", () => {
      t = !0, i();
    }), e = ap({
      path: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/apps/sponsor/social.html",
      width: 360,
      height: 300,
      onReady: () => {
        o && (o.dataset.ready = "true");
      },
      onUnavailable: i
    });
    const r = document.createElement("div");
    r.className = "nyx-social-creative", r.append(e.element), o.append(r), document.body.append(o);
  }
  r.textContent = "@media(min-width:1200px){.nyx-social-sponsor{right:128px!important}}.nyx-social-sponsor{position:fixed;right:16px;bottom:16px;z-index:1200;width:min(360px,calc(100vw - 32px));border:1px solid #444;border-radius:12px;overflow:hidden;background:#161616;color:#ddd;box-shadow:0 8px 32px #0006;font:11px system-ui}.nyx-social-sponsor:not([data-ready]){visibility:hidden}.nyx-social-sponsor header{display:flex;align-items:center;justify-content:space-between;padding:6px 10px}.nyx-social-sponsor button{border:0;background:transparent;color:inherit;cursor:pointer;width:28px;height:28px}.nyx-social-sponsor svg{width:16px;height:16px}.nyx-social-sponsor iframe{display:block;border:0;width:100%;height:300px}", 
  r.textContent += ".nyx-social-creative{height:300px;overflow:hidden}body:has(.browser-window.browser-blank .browser-home:not(.hidden)) .nyx-social-sponsor{width:min(270px,calc(100vw - 32px))}body:has(.browser-window.browser-blank .browser-home:not(.hidden)) .nyx-social-creative{height:225px}body:has(.browser-window.browser-blank .browser-home:not(.hidden)) .nyx-social-sponsor iframe{width:133.333333%;transform:scale(.75);transform-origin:top left}", 
  document.head.append(r), window.addEventListener("nyx:publisher-change", s), document.addEventListener("visibilitychange", s), 
  s();
}
