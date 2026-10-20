(() => {
  try {
    globalThis.caches;
  } catch {
    const __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 = {
      match: async () => {},
      matchAll: async () => [],
      put: async () => {},
      delete: async () => !1,
      keys: async () => [],
    };
    Object.defineProperty(globalThis, "\u0063\u0061\u0063\u0068\u0065\u0073", {
      configurable: !0,
      value: {
        open: async () => __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
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
  let __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 = !1;
  try {
    navigator.serviceWorker;
  } catch {
    __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 = !0;
    const __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede = () =>
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
          register: __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
          addEventListener() {},
          removeEventListener() {},
        },
      });
    } catch {}
  }
  const __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede = new WeakSet();
  function __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f() {
    const __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 =
      globalThis.createUnityInstance;
    if (
      "\u0066\u0075\u006e\u0063\u0074\u0069\u006f\u006e" != typeof __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 ||
      __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.has(
        __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
      )
    )
      return;
    const __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f = function (
      __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
      __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
      ...__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0
    ) {
      const __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 = {
        ...__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
      };
      return (
        (__64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.streamingAssetsUrl =
          new URL(
            __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.streamingAssetsUrl ||
              "\u0053\u0074\u0072\u0065\u0061\u006d\u0069\u006e\u0067\u0041\u0073\u0073\u0065\u0074\u0073",
            document.baseURI,
          ).href),
        "\u006e\u0075\u006c\u006c" === globalThis.origin &&
          (__64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.cacheControl = () =>
            "\u006e\u006f\u002d\u0073\u0074\u006f\u0072\u0065"),
        Reflect.apply(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28, this, [
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
          __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579,
          ...__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0,
        ])
      );
    };
    (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.add(
      __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
    ),
      (globalThis.createUnityInstance =
        __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f));
  }
  if (
    (document.addEventListener?.(
      "\u006c\u006f\u0061\u0064",
      (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) => {
        "\u0053\u0043\u0052\u0049\u0050\u0054" ===
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.target?.tagName &&
          __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f();
      },
      !0,
    ),
    document.addEventListener?.(
      "\u0044\u004f\u004d\u0043\u006f\u006e\u0074\u0065\u006e\u0074\u004c\u006f\u0061\u0064\u0065\u0064",
      __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
    ),
    !globalThis.ytgame)
  ) {
    const __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 = new Set(),
      __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede = () => {},
      __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f = async () => {},
      __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 = () =>
        "\u006e\u0079\u0078\u002e\u0070\u006c\u0061\u0079\u0061\u0062\u006c\u0065\u002e\u0073\u0061\u0076\u0065\u003a" + document.baseURI;
    globalThis.ytgame = {
      IN_PLAYABLES_ENV: !1,
      SDK_VERSION: "\u006e\u0079\u0078\u002d\u0073\u0074\u0061\u006e\u0064\u0061\u006c\u006f\u006e\u0065\u002d\u0031",
      game: {
        firstFrameReady: __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
        gameReady: __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
        gameLoaded: __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
        loadData: async () => {
          try {
            return (
              localStorage.getItem(
                __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0(),
              ) || ""
            );
          } catch {
            return "";
          }
        },
        saveData: async (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) => {
          try {
            localStorage.setItem(
              __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0(),
              String(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28),
            );
          } catch {}
        },
        sendScore: __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
      },
      system: {
        getLanguage: async () => navigator.language || "\u0065\u006e",
        isAudioEnabled: () => !0,
        isMuted: () => !1,
        onAudioEnabledChange: (
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
        ) => (
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.add(
            __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
          ),
          () =>
            __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.delete(
              __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
            )
        ),
        onPause: () => __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
        onResume: () => __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
      },
      engagement: {
        sendScore: __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
      },
      health: {
        logError: __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
        logWarning: __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
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
  let __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0,
    __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 = !1;
  Object.defineProperty(globalThis, "\u0052\u0075\u006e\u0074\u0069\u006d\u0065\u0049\u006e\u0074\u0065\u0072\u0066\u0061\u0063\u0065", {
    configurable: !0,
    get: () => __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0,
    set(__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede) {
      __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 =
        "\u0066\u0075\u006e\u0063\u0074\u0069\u006f\u006e" == typeof __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede
          ? new Proxy(__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede, {
              construct(
                __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
                __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
                __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0,
              ) {
                !(function () {
                  if (__64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579) return;
                  __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 = !0;
                  const __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede =
                      globalThis.cancelAnimationFrame.bind(globalThis),
                    __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f =
                      globalThis.requestAnimationFrame.bind(globalThis);
                  let __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0;
                  globalThis.cancelAnimationFrame = (
                    __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
                  ) =>
                    "\u0066\u0075\u006e\u0063\u0074\u0069\u006f\u006e" ==
                    typeof __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28
                      ? __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f(
                          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
                        )
                      : __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede(
                          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
                        );
                  try {
                    __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 ||
                      (__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 =
                        navigator.serviceWorker);
                  } catch {}
                  if (!__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0)
                    try {
                      Object.defineProperty(globalThis, "\u0043\u0033\u005f\u0052\u0065\u0067\u0069\u0073\u0074\u0065\u0072\u0053\u0057", {
                        configurable: !0,
                        get: () => () => {},
                        set: () => {},
                      });
                    } catch {}
                })();
                const __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45 =
                  __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f[0];
                return (
                  __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45 &&
                    "\u006f\u0062\u006a\u0065\u0063\u0074" ==
                      typeof __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45 &&
                    (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f = [
                      {
                        ...__dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45,
                        baseUrl:
                          __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.baseUrl ||
                          document.baseURI,
                        ...("\u006e\u0075\u006c\u006c" === globalThis.origin
                          ? {
                              useWorker: !1,
                            }
                          : {}),
                      },
                      ...__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.slice(
                        1,
                      ),
                    ]),
                  Reflect.construct(
                    __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
                    __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
                    __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0,
                  )
                );
              },
            })
          : __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede;
    },
  });
})();
