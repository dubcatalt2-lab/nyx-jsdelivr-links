import { startHomeSponsors as jm } from "./@rfacb13d1d9407bea5cffcdef!.js";

import { startSocialSponsor as Km } from "./@r61e8aed30649d2ba6fc770d1!.js";

import { startAdcoins as Om } from "./@rd285451a0cc95745c5a2b469!.js";

import { publisherConfig as _m, publisherHostAllowed as ip, publisherMode as qm, popupPolicy as Dm } from "./@r3e5de20a40d352293b198b87!.js";

const Jm = "nyx.publisher.home.v1", Wm = "nyx.publisher.home";

function Um(e) {
  if (document.hidden || !document.body.classList.contains("browser-shell") || document.body.classList.contains("nyx-loading-active")) return null;
  const t = e?.closest?.(".browser-home.nyx-minimal-home:not(.hidden)");
  return t?.isConnected && t.getClientRects().length && t.closest(".browser-window.browser-blank") ? "visible" !== getComputedStyle(t).visibility ? null : t : null;
}

function zm(e, t) {
  if ("adkid" !== qm()) return t ? null : Um(e);
  if (document.hidden || !document.body.classList.contains("browser-shell") || document.body.classList.contains("nyx-loading-active")) return null;
  const n = t || e;
  return n?.isConnected && n.getClientRects().length && "visible" === getComputedStyle(n).visibility ? t && !Hm(t) ? null : n : null;
}

function Hm(e) {
  try {
    const t = new URL(e.contentWindow.location.href);
    return e.matches("iframe.view") && t.origin === location.origin && (/^\/apps\/(?!sponsor\/)/.test(t.pathname) || /^\/assets\/games\/(?:index\.html)?$/.test(t.pathname));
  } catch {
    return !1;
  }
}

if (_m.homeLink && ip() && navigator.locks) {
  function Qm(e, t) {
    if (!e.isTrusted || 0 !== e.button || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
    if (e.target?.closest?.('a,button,textarea,select,[contenteditable="true"],.nyx-home-sponsor,.nyx-social-sponsor')) return;
    const n = zm(e.target, t);
    n && navigator.locks.request(Wm, {
      ifAvailable: !0
    }, o => {
      if (o && zm(e.target, t) === n && navigator.userActivation?.isActive) try {
        const e = Dm();
        if (!e) return;
        const t = Date.now(), n = localStorage.getItem(Jm), o = null === n ? [] : JSON.parse(n);
        if (!Array.isArray(o) || o.some(e => !Number.isFinite(e) || e < 0)) return;
        const i = o.filter(n => t - n < e.period);
        if (i.length >= e.limit || i.some(n => t - n < e.spacing)) return;
        const r = window.__nyxNativeOpen;
        if ("function" != typeof r) return;
        const s = o.filter(e => t - e < _m.homePeriodMs);
        localStorage.setItem(Jm, JSON.stringify([ ...s, t ]));
        const c = r("about:blank", "_blank");
        if (!c) return void (null === n ? localStorage.removeItem(Jm) : localStorage.setItem(Jm, n));
        try {
          c.opener = null;
          const e = c.document.createElement("meta");
          e.name = "referrer", e.content = "no-referrer", c.document.head.append(e), c.location.replace(_m.homeLink);
        } catch {
          c.close();
        }
      } catch {}
    }).catch(() => {});
  }
  document.addEventListener("click", e => Qm(e), {
    capture: !0
  });
  const Xm = new WeakSet;
  function Vm(e) {
    if (!Hm(e)) return;
    const t = e.contentDocument;
    t && !Xm.has(t) && (Xm.add(t), t.addEventListener("click", t => Qm(t, e), {
      capture: !0
    }));
  }
  document.addEventListener("load", e => {
    e.target?.matches?.("iframe.view") && Vm(e.target);
  }, {
    capture: !0
  }), document.querySelectorAll("iframe.view").forEach(Vm);
}

Om(), jm(), Km();
