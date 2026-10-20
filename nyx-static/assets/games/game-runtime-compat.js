(() => {
  try {
    globalThis.caches;
  } catch {
    const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f = {
      match: async () => {},
      matchAll: async () => [],
      put: async () => {},
      delete: async () => !1,
      keys: async () => [],
    };
    Object.defineProperty(globalThis, "\u0063\u0061\u0063\u0068\u0065\u0073", {
      configurable: !0,
      value: {
        open: async () => __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
        match: async () => {},
        has: async () => !1,
        delete: async () => !1,
        keys: async () => [],
      },
    });
  }
  try {
    globalThis.indexedDB;
  } catch {
    Object.defineProperty(globalThis, "\u0069\u006e\u0064\u0065\u0078\u0065\u0064\u0044\u0042", {
      configurable: !0,
      value: void 0,
    });
  }
  "\u006e\u0075\u006c\u006c" === globalThis.origin && (globalThis.EJS_disableDatabases = !0);
  let __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f = !1;
  try {
    navigator.serviceWorker;
  } catch {
    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f = !0;
    const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = () =>
      Promise.reject(
        new DOMException(
          "\u004f\u0066\u0066\u006c\u0069\u006e\u0065\u0020\u0073\u0065\u0072\u0076\u0069\u0063\u0065\u0020\u0077\u006f\u0072\u006b\u0065\u0072\u0073\u0020\u0061\u0072\u0065\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u0020\u0069\u006e\u0020\u0074\u0068\u0069\u0073\u0020\u0067\u0061\u006d\u0065\u0020\u0073\u0061\u006e\u0064\u0062\u006f\u0078\u002e",
          "\u004e\u006f\u0074\u0053\u0075\u0070\u0070\u006f\u0072\u0074\u0065\u0064\u0045\u0072\u0072\u006f\u0072",
        ),
      );
    try {
      Object.defineProperty(navigator, "\u0073\u0065\u0072\u0076\u0069\u0063\u0065\u0057\u006f\u0072\u006b\u0065\u0072", {
        configurable: !0,
        value: {
          controller: null,
          getRegistration: async () => {},
          getRegistrations: async () => [],
          register: __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
          addEventListener() {},
          removeEventListener() {},
        },
      });
    } catch {}
  }
  const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = new WeakSet();
  function __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708() {
    const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
      globalThis.createUnityInstance;
    if (
      "\u0066\u0075\u006e\u0063\u0074\u0069\u006f\u006e" != typeof __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f ||
      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.has(
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
      )
    )
      return;
    const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = function (
      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
      __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
      ...__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c
    ) {
      const __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 = {
        ...__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
      };
      return (
        (__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.streamingAssetsUrl =
          new URL(
            __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.streamingAssetsUrl ||
              "\u0053\u0074\u0072\u0065\u0061\u006d\u0069\u006e\u0067\u0041\u0073\u0073\u0065\u0074\u0073",
            document.baseURI,
          ).href),
        "\u006e\u0075\u006c\u006c" === globalThis.origin &&
          (__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.cacheControl = () =>
            "\u006e\u006f\u002d\u0073\u0074\u006f\u0072\u0065"),
        Reflect.apply(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f, this, [
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
          __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
          ...__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
        ])
      );
    };
    (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.add(
      __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
    ),
      (globalThis.createUnityInstance =
        __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708));
  }
  if (
    (document.addEventListener?.(
      "\u006c\u006f\u0061\u0064",
      (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => {
        "\u0053\u0043\u0052\u0049\u0050\u0054" ===
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.target?.tagName &&
          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708();
      },
      !0,
    ),
    document.addEventListener?.(
      "\u0044\u004f\u004d\u0043\u006f\u006e\u0074\u0065\u006e\u0074\u004c\u006f\u0061\u0064\u0065\u0064",
      __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
    ),
    !globalThis.ytgame)
  ) {
    const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f = new Set(),
      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = () => {},
      __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = async () => {},
      __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c = () =>
        "\u006e\u0079\u0078\u002e\u0070\u006c\u0061\u0079\u0061\u0062\u006c\u0065\u002e\u0073\u0061\u0076\u0065\u003a" + document.baseURI;
    globalThis.ytgame = {
      IN_PLAYABLES_ENV: !1,
      SDK_VERSION: "\u006e\u0079\u0078\u002d\u0073\u0074\u0061\u006e\u0064\u0061\u006c\u006f\u006e\u0065\u002d\u0031",
      game: {
        firstFrameReady: __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
        gameReady: __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
        gameLoaded: __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
        loadData: async () => {
          try {
            return (
              localStorage.getItem(
                __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c(),
              ) || ""
            );
          } catch {
            return "";
          }
        },
        saveData: async (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => {
          try {
            localStorage.setItem(
              __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c(),
              String(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f),
            );
          } catch {}
        },
        sendScore: __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
      },
      system: {
        getLanguage: async () => navigator.language || "\u0065\u006e",
        isAudioEnabled: () => !0,
        isMuted: () => !1,
        onAudioEnabledChange: (
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
        ) => (
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.add(
            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
          ),
          () =>
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.delete(
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
            )
        ),
        onPause: () => __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
        onResume: () => __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
      },
      engagement: {
        sendScore: __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
      },
      health: {
        logError: __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
        logWarning: __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
      },
      ads: {
        AdResult: {
          UNKNOWN: "\u0075\u006e\u006b\u006e\u006f\u0077\u006e",
          SHOWED: "\u0073\u0068\u006f\u0077\u0065\u0064",
          REJECTED: "\u0072\u0065\u006a\u0065\u0063\u0074\u0065\u0064",
        },
        isAdAvailable: () => !1,
        requestAd: async () => "\u0072\u0065\u006a\u0065\u0063\u0074\u0065\u0064",
      },
    };
  }
  if (globalThis.__nyxConstructBase) return;
  globalThis.__nyxConstructBase = !0;
  let __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
    __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 = !1;
  Object.defineProperty(globalThis, "\u0052\u0075\u006e\u0074\u0069\u006d\u0065\u0049\u006e\u0074\u0065\u0072\u0066\u0061\u0063\u0065", {
    configurable: !0,
    get: () => __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
    set(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) {
      __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
        "\u0066\u0075\u006e\u0063\u0074\u0069\u006f\u006e" == typeof __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
          ? new Proxy(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53, {
              construct(
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
                __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
              ) {
                !(function () {
                  if (__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477) return;
                  __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 = !0;
                  const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
                      globalThis.cancelAnimationFrame.bind(globalThis),
                    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
                      globalThis.requestAnimationFrame.bind(globalThis);
                  let __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c;
                  globalThis.cancelAnimationFrame = (
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                  ) =>
                    "\u0066\u0075\u006e\u0063\u0074\u0069\u006f\u006e" ==
                    typeof __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f
                      ? __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708(
                          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                        )
                      : __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53(
                          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                        );
                  try {
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f ||
                      (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
                        navigator.serviceWorker);
                  } catch {}
                  if (!__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c)
                    try {
                      Object.defineProperty(globalThis, "\u0043\u0033\u005f\u0052\u0065\u0067\u0069\u0073\u0074\u0065\u0072\u0053\u0057", {
                        configurable: !0,
                        get: () => () => {},
                        set: () => {},
                      });
                    } catch {}
                })();
                const __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 =
                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708[0];
                return (
                  __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 &&
                    "\u006f\u0062\u006a\u0065\u0063\u0074" ==
                      typeof __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 &&
                    (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = [
                      {
                        ...__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766,
                        baseUrl:
                          __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.baseUrl ||
                          document.baseURI,
                        ...("\u006e\u0075\u006c\u006c" === globalThis.origin
                          ? {
                              useWorker: !1,
                            }
                          : {}),
                      },
                      ...__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.slice(
                        1,
                      ),
                    ]),
                  Reflect.construct(
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
                    __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
                  )
                );
              },
            })
          : __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53;
    },
  });
})();
