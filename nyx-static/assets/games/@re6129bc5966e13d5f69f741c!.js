(() => {
  try {
    globalThis.caches;
  } catch {
    const e = {
      match: async () => {},
      matchAll: async () => [],
      put: async () => {},
      delete: async () => !1,
      keys: async () => []
    };
    Object.defineProperty(globalThis, "caches", {
      configurable: !0,
      value: {
        open: async () => e,
        match: async () => {},
        has: async () => !1,
        delete: async () => !1,
        keys: async () => []
      }
    });
  }
  try {
    globalThis.indexedDB;
  } catch {
    Object.defineProperty(globalThis, "indexedDB", {
      configurable: !0,
      value: void 0
    });
  }
  "null" === globalThis.origin && (globalThis.EJS_disableDatabases = !0);
  let e = !1;
  try {
    navigator.serviceWorker;
  } catch {
    e = !0;
    const t = () => Promise.reject(new DOMException("Offline service workers are unavailable in this game sandbox.", "NotSupportedError"));
    try {
      Object.defineProperty(navigator, "serviceWorker", {
        configurable: !0,
        value: {
          controller: null,
          getRegistration: async () => {},
          getRegistrations: async () => [],
          register: t,
          addEventListener() {},
          removeEventListener() {}
        }
      });
    } catch {}
  }
  const t = new WeakSet;
  function a() {
    const e = globalThis.createUnityInstance;
    if ("function" != typeof e || t.has(e)) return;
    const a = function(t, a, ...n) {
      const s = {
        ...a
      };
      return s.streamingAssetsUrl = new URL(s.streamingAssetsUrl || "StreamingAssets", document.baseURI).href, 
      "null" === globalThis.origin && (s.cacheControl = () => "no-store"), Reflect.apply(e, this, [ t, s, ...n ]);
    };
    t.add(a), globalThis.createUnityInstance = a;
  }
  if (document.addEventListener?.("load", e => {
    "SCRIPT" === e.target?.tagName && a();
  }, !0), document.addEventListener?.("DOMContentLoaded", a), !globalThis.ytgame) {
    const e = new Set, t = () => {}, a = async () => {}, n = () => "nyx.playable.save:" + document.baseURI;
    globalThis.ytgame = {
      IN_PLAYABLES_ENV: !1,
      SDK_VERSION: "nyx-standalone-1",
      game: {
        firstFrameReady: t,
        gameReady: t,
        gameLoaded: t,
        loadData: async () => {
          try {
            return localStorage.getItem(n()) || "";
          } catch {
            return "";
          }
        },
        saveData: async e => {
          try {
            localStorage.setItem(n(), String(e));
          } catch {}
        },
        sendScore: a
      },
      system: {
        getLanguage: async () => navigator.language || "en",
        isAudioEnabled: () => !0,
        isMuted: () => !1,
        onAudioEnabledChange: t => (e.add(t), () => e.delete(t)),
        onPause: () => t,
        onResume: () => t
      },
      engagement: {
        sendScore: a
      },
      health: {
        logError: t,
        logWarning: t
      },
      ads: {
        AdResult: {
          UNKNOWN: "unknown",
          SHOWED: "showed",
          REJECTED: "rejected"
        },
        isAdAvailable: () => !1,
        requestAd: async () => "rejected"
      }
    };
  }
  if (globalThis.__nyxConstructBase) return;
  globalThis.__nyxConstructBase = !0;
  let n, s = !1;
  Object.defineProperty(globalThis, "RuntimeInterface", {
    configurable: !0,
    get: () => n,
    set(t) {
      n = "function" == typeof t ? new Proxy(t, {
        construct(t, a, n) {
          !function() {
            if (s) return;
            s = !0;
            const t = globalThis.cancelAnimationFrame.bind(globalThis), a = globalThis.requestAnimationFrame.bind(globalThis);
            let n;
            globalThis.cancelAnimationFrame = e => "function" == typeof e ? a(e) : t(e);
            try {
              e || (n = navigator.serviceWorker);
            } catch {}
            if (!n) try {
              Object.defineProperty(globalThis, "C3_RegisterSW", {
                configurable: !0,
                get: () => () => {},
                set: () => {}
              });
            } catch {}
          }();
          const o = a[0];
          return o && "object" == typeof o && (a = [ {
            ...o,
            baseUrl: o.baseUrl || document.baseURI,
            ..."null" === globalThis.origin ? {
              useWorker: !1
            } : {}
          }, ...a.slice(1) ]), Reflect.construct(t, a, n);
        }
      }) : t;
    }
  });
})();
