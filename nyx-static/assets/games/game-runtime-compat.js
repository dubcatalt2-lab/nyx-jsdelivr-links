(() => {
  try {
    globalThis.caches;
  } catch {
    const _0x657395_0 = {
      match: async () => {},
      matchAll: async () => [],
      put: async () => {},
      delete: async () => !1,
      keys: async () => []
    };
    Object.defineProperty(globalThis, "\x63\x61\x63\x68\x65\x73", {
      configurable: !0,
      value: {
        open: async () => _0x657395_0,
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
    Object.defineProperty(globalThis, "\x69\x6e\x64\x65\x78\x65\x64\x44\x42", {
      configurable: !0,
      value: void 0
    });
  }
  "\x6e\x75\x6c\x6c" === globalThis.origin && (globalThis.EJS_disableDatabases = !0);
  let _0x657395_0 = !1;
  try {
    navigator.serviceWorker;
  } catch {
    _0x657395_0 = !0;
    const _0x657395_1 = () => Promise.reject(new DOMException("\x4f\x66\x66\x6c\x69\x6e\x65\x20\x73\x65\x72\x76\x69\x63\x65\x20\x77\x6f\x72\x6b\x65\x72\x73\x20\x61\x72\x65\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x20\x69\x6e\x20\x74\x68\x69\x73\x20\x67\x61\x6d\x65\x20\x73\x61\x6e\x64\x62\x6f\x78\x2e", "\x4e\x6f\x74\x53\x75\x70\x70\x6f\x72\x74\x65\x64\x45\x72\x72\x6f\x72"));
    try {
      Object.defineProperty(navigator, "\x73\x65\x72\x76\x69\x63\x65\x57\x6f\x72\x6b\x65\x72", {
        configurable: !0,
        value: {
          controller: null,
          getRegistration: async () => {},
          getRegistrations: async () => [],
          register: _0x657395_1,
          addEventListener() {},
          removeEventListener() {}
        }
      });
    } catch {}
  }
  const _0x657395_1 = new WeakSet;
  function _0x657395_2() {
    const _0x657395_0 = globalThis.createUnityInstance;
    if ("\x66\x75\x6e\x63\x74\x69\x6f\x6e" != typeof _0x657395_0 || _0x657395_1.has(_0x657395_0)) return;
    const _0x657395_2 = function(_0x657395_1, _0x657395_2, ..._0x657395_3) {
      const _0x657395_4 = {
        ..._0x657395_2
      };
      return _0x657395_4.streamingAssetsUrl = new URL(_0x657395_4.streamingAssetsUrl || "\x53\x74\x72\x65\x61\x6d\x69\x6e\x67\x41\x73\x73\x65\x74\x73", document.baseURI).href, 
      "\x6e\x75\x6c\x6c" === globalThis.origin && (_0x657395_4.cacheControl = () => "\x6e\x6f\x2d\x73\x74\x6f\x72\x65"), Reflect.apply(_0x657395_0, this, [ _0x657395_1, _0x657395_4, ..._0x657395_3 ]);
    };
    _0x657395_1.add(_0x657395_2), globalThis.createUnityInstance = _0x657395_2;
  }
  if (document.addEventListener?.("\x6c\x6f\x61\x64", _0x657395_0 => {
    "\x53\x43\x52\x49\x50\x54" === _0x657395_0.target?.tagName && _0x657395_2();
  }, !0), document.addEventListener?.("\x44\x4f\x4d\x43\x6f\x6e\x74\x65\x6e\x74\x4c\x6f\x61\x64\x65\x64", _0x657395_2), !globalThis.ytgame) {
    const _0x657395_0 = new Set, _0x657395_1 = () => {}, _0x657395_2 = async () => {}, _0x657395_3 = () => "\x6e\x79\x78\x2e\x70\x6c\x61\x79\x61\x62\x6c\x65\x2e\x73\x61\x76\x65\x3a" + document.baseURI;
    globalThis.ytgame = {
      IN_PLAYABLES_ENV: !1,
      SDK_VERSION: "\x6e\x79\x78\x2d\x73\x74\x61\x6e\x64\x61\x6c\x6f\x6e\x65\x2d\x31",
      game: {
        firstFrameReady: _0x657395_1,
        gameReady: _0x657395_1,
        gameLoaded: _0x657395_1,
        loadData: async () => {
          try {
            return localStorage.getItem(_0x657395_3()) || "";
          } catch {
            return "";
          }
        },
        saveData: async _0x657395_0 => {
          try {
            localStorage.setItem(_0x657395_3(), String(_0x657395_0));
          } catch {}
        },
        sendScore: _0x657395_2
      },
      system: {
        getLanguage: async () => navigator.language || "\x65\x6e",
        isAudioEnabled: () => !0,
        isMuted: () => !1,
        onAudioEnabledChange: _0x657395_1 => (_0x657395_0.add(_0x657395_1), () => _0x657395_0.delete(_0x657395_1)),
        onPause: () => _0x657395_1,
        onResume: () => _0x657395_1
      },
      engagement: {
        sendScore: _0x657395_2
      },
      health: {
        logError: _0x657395_1,
        logWarning: _0x657395_1
      },
      ads: {
        AdResult: {
          UNKNOWN: "\x75\x6e\x6b\x6e\x6f\x77\x6e",
          SHOWED: "\x73\x68\x6f\x77\x65\x64",
          REJECTED: "\x72\x65\x6a\x65\x63\x74\x65\x64"
        },
        isAdAvailable: () => !1,
        requestAd: async () => "\x72\x65\x6a\x65\x63\x74\x65\x64"
      }
    };
  }
  if (globalThis.__nyxConstructBase) return;
  globalThis.__nyxConstructBase = !0;
  let _0x657395_3, _0x657395_4 = !1;
  Object.defineProperty(globalThis, "\x52\x75\x6e\x74\x69\x6d\x65\x49\x6e\x74\x65\x72\x66\x61\x63\x65", {
    configurable: !0,
    get: () => _0x657395_3,
    set(_0x657395_1) {
      _0x657395_3 = "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _0x657395_1 ? new Proxy(_0x657395_1, {
        construct(_0x657395_1, _0x657395_2, _0x657395_3) {
          !function() {
            if (_0x657395_4) return;
            _0x657395_4 = !0;
            const _0x657395_1 = globalThis.cancelAnimationFrame.bind(globalThis), _0x657395_2 = globalThis.requestAnimationFrame.bind(globalThis);
            let _0x657395_3;
            globalThis.cancelAnimationFrame = _0x657395_0 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _0x657395_0 ? _0x657395_2(_0x657395_0) : _0x657395_1(_0x657395_0);
            try {
              _0x657395_0 || (_0x657395_3 = navigator.serviceWorker);
            } catch {}
            if (!_0x657395_3) try {
              Object.defineProperty(globalThis, "\x43\x33\x5f\x52\x65\x67\x69\x73\x74\x65\x72\x53\x57", {
                configurable: !0,
                get: () => () => {},
                set: () => {}
              });
            } catch {}
          }();
          const _0x657395_5 = _0x657395_2[0];
          return _0x657395_5 && "\x6f\x62\x6a\x65\x63\x74" == typeof _0x657395_5 && (_0x657395_2 = [ {
            ..._0x657395_5,
            baseUrl: _0x657395_5.baseUrl || document.baseURI,
            ..."\x6e\x75\x6c\x6c" === globalThis.origin ? {
              useWorker: !1
            } : {}
          }, ..._0x657395_2.slice(1) ]), Reflect.construct(_0x657395_1, _0x657395_2, _0x657395_3);
        }
      }) : _0x657395_1;
    }
  });
})();
