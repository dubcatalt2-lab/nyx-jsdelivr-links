(() => {
  "use strict";
  if (globalThis.__nyxGameAdProtection) return;
  const t = Object.freeze([ "adnxs.com", "ads.emulatorjs.org", "adsrvr.org", "adsterra.com", "adtrafficquality.google", "amazon-adsystem.com", "cdn.r9x.in", "clickadu.com", "criteo.com", "doubleclick.net", "exoclick.com", "gamemonetize.com", "googleadservices.com", "googlesyndication.com", "hilltopads.net", "html5.api.gamedistribution.com", "imasdk.googleapis.com", "mgid.com", "monetag.com", "onclickads.net", "openx.net", "outbrain.com", "pagead2.googlesyndication.com", "playwire.com", "popads.net", "popcash.net", "propellerads.com", "pubmatic.com", "rubiconproject.com", "sdk.poki.com", "taboola.com", "trafficjunky.com", "venatusmedia.com" ]), e = /(?:^|\/)(?:ads?|ad[-_.]?(?:loader|manager|script)|jump[_-]gamemonetize|poki-(?:master-loader|sdk))\.(?:js|mjs)(?:$|\/)/i, o = /\/ad-campaigns\//i, a = [ ".adsbygoogle", "[data-ad-client]", "[data-ad-slot]", '[id^="google_ads"]', '[id*="google_ads"]', '[id^="ad-container"]', '[class~="ad-container"]', '[class~="ad-banner"]', '[class~="ad-wrapper"]', '[class~="ad-overlay"]', '[class~="advertisement"]', '[aria-label="Advertisement"]' ].join(","), n = new WeakSet, r = new WeakSet, i = new WeakSet;
  function c(t, e) {
    "SCRIPT" === t?.tagName && /(?:\/poki-sdk(?:-core[^/]*)?\.js|\/sdk\.poki\.com\/)/i.test(String(e)) && r.add(t);
  }
  function s(a) {
    const n = function(t) {
      const e = String(t || "").trim();
      if (!e || /^(?:about|blob|data|javascript):/i.test(e)) return null;
      try {
        return new URL(e, document.baseURI || location.href);
      } catch {
        return null;
      }
    }(a);
    if (!n) return !1;
    const r = n.hostname.toLowerCase();
    return !!t.some(t => function(t, e) {
      return t === e || t.endsWith(`.${e}`);
    }(r, t)) || !("serve.app.playsaurus.com" !== r || !o.test(n.pathname)) || e.test(n.pathname);
  }
  function d(t) {
    return t?.getAttribute?.("src") || t?.getAttribute?.("href") || t?.getAttribute?.("data-src") || t?.getAttribute?.("data") || "";
  }
  function l(t) {
    const e = String(t?.tagName || "").toUpperCase();
    return "IMG" === e ? "data:image/gif;base64,R0lGODlhAQABAAAAACw=" : "SCRIPT" === e ? "data:text/javascript," : "LINK" === e ? "data:text/css," : "about:blank";
  }
  function p(t) {
    if (!t || t.nodeType !== Node.ELEMENT_NODE) return !1;
    let e = n.has(t);
    try {
      e ||= t.matches(a) || s(d(t));
    } catch {}
    if (!e) return !1;
    n.add(t), r.has(t) && !i.has(t) && (i.add(t), queueMicrotask(() => t.dispatchEvent(new Event("load"))));
    try {
      t.remove();
    } catch {}
    return !0;
  }
  function m(t) {
    if (t && (t.nodeType !== Node.ELEMENT_NODE || !p(t))) try {
      t.querySelectorAll?.(a)?.forEach(p), t.querySelectorAll?.("[src],[href],[data-src],[data]")?.forEach(t => {
        s(d(t)) && p(t);
      });
    } catch {}
  }
  const u = Element.prototype.setAttribute;
  Element.prototype.setAttribute = function(t, e) {
    const o = String(t || "").toLowerCase();
    if ([ "src", "href", "data-src", "data" ].includes(o) && s(e)) {
      if (c(this, e), n.add(this), "SCRIPT" === String(this.tagName || "").toUpperCase()) try {
        u.call(this, "type", "application/x-nyx-blocked");
      } catch {}
      return u.call(this, o, l(this));
    }
    return u.call(this, t, e);
  }, [ [ HTMLScriptElement, "src" ], [ HTMLIFrameElement, "src" ], [ HTMLImageElement, "src" ], [ HTMLLinkElement, "href" ], [ HTMLSourceElement, "src" ], [ HTMLMediaElement, "src" ], [ HTMLEmbedElement, "src" ], [ HTMLObjectElement, "data" ] ].forEach(([t, e]) => function(t, e) {
    try {
      const o = Object.getOwnPropertyDescriptor(t?.prototype, e);
      if (!o?.set || !o.get) return;
      Object.defineProperty(t.prototype, e, {
        configurable: !0,
        enumerable: o.enumerable,
        get() {
          return o.get.call(this);
        },
        set(t) {
          if (s(t)) {
            if (c(this, t), n.add(this), "SCRIPT" === String(this.tagName || "").toUpperCase()) try {
              u.call(this, "type", "application/x-nyx-blocked");
            } catch {}
            return o.set.call(this, l(this));
          }
          return o.set.call(this, t);
        }
      });
    } catch {}
  }(t, e));
  const h = Node.prototype.appendChild;
  Node.prototype.appendChild = function(t) {
    return m(t), t?.nodeType === Node.ELEMENT_NODE && p(t) ? t : h.call(this, t);
  };
  const g = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function(t, e) {
    return m(t), t?.nodeType === Node.ELEMENT_NODE && p(t) ? t : g.call(this, t, e);
  };
  const y = Node.prototype.replaceChild;
  Node.prototype.replaceChild = function(t, e) {
    return m(t), t?.nodeType === Node.ELEMENT_NODE && p(t) ? e : y.call(this, t, e);
  };
  try {
    const t = globalThis.fetch?.bind(globalThis);
    t && (globalThis.fetch = (e, o) => s(e instanceof Request ? e.url : e) ? Promise.resolve(new Response(null, {
      status: 204,
      statusText: "No Content"
    })) : t(e, o));
  } catch {}
  try {
    const t = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(e, o, ...a) {
      return t.call(this, e, s(o) ? "data:," : o, ...a);
    };
  } catch {}
  try {
    if (navigator.sendBeacon) {
      const t = navigator.sendBeacon.bind(navigator);
      navigator.sendBeacon = (e, o) => s(e) || t(e, o);
    }
  } catch {}
  function f(t) {
    try {
      const e = globalThis[t];
      if ("function" != typeof e) return;
      const o = function(t, o) {
        return new e(s(t) ? "data:text/javascript," : t, o);
      };
      o.prototype = e.prototype, Object.setPrototypeOf(o, e), globalThis[t] = o;
    } catch {}
  }
  f("Worker"), f("SharedWorker");
  const b = t => Promise.resolve(t);
  function E() {
    try {
      const t = globalThis.GD_OPTIONS?.onEvent;
      "function" == typeof t && t({
        name: "SDK_READY"
      });
    } catch {}
  }
  globalThis.PokiSDK || (globalThis.PokiSDK = {
    init: () => b(),
    initWithVideoHB: () => b(),
    commercialBreak: () => b(),
    rewardedBreak: () => b(!0),
    displayAd: () => {},
    gameplayStart: () => {},
    gameplayStop: () => {},
    gameLoadingStart: () => {},
    gameLoadingFinished: () => {},
    gameLoadingProgress: () => {},
    happyTime: () => {},
    setDebug: () => {},
    getURLParam: () => null,
    getLanguage: () => navigator.language || "en"
  }), globalThis.gdsdk || (globalThis.gdsdk = {
    showAd: () => b(),
    preloadAd: () => b(),
    openConsole: () => {},
    isAdblockEnabled: !0
  });
  try {
    const t = document.createElement("style");
    t.id = "nyx-game-ad-protection-style", t.textContent = `${a}{display:none!important;visibility:hidden!important;pointer-events:none!important;width:0!important;height:0!important;min-width:0!important;min-height:0!important}`, 
    (document.head || document.documentElement).appendChild(t);
  } catch {}
  try {
    new MutationObserver(t => {
      for (const e of t) "childList" === e.type ? e.addedNodes.forEach(m) : m(e.target);
    }).observe(document.documentElement, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: [ "src", "href", "data-src", "data", "class", "id" ]
    });
  } catch {}
  globalThis.__nyxGameAdProtection = Object.freeze({
    isBlockedResource: s
  }), m(document), queueMicrotask(E), document.addEventListener("DOMContentLoaded", () => {
    m(document), E();
  }, {
    once: !0
  });
})();
