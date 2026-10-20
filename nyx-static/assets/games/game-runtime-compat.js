(() => {
  try {
    globalThis.caches;
  } catch {
    const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = {
      match: async () => {},
      matchAll: async () => [],
      put: async () => {},
      delete: async () => !1,
      keys: async () => [],
    };
    Object.defineProperty(globalThis, "\u0063\u0061\u0063\u0068\u0065\u0073", {
      configurable: !0,
      value: {
        open: async () => __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
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
  let __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = !1;
  try {
    navigator.serviceWorker;
  } catch {
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = !0;
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = () =>
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
          register: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
          addEventListener() {},
          removeEventListener() {},
        },
      });
    } catch {}
  }
  const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = new WeakSet();
  function __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c() {
    const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
      globalThis.createUnityInstance;
    if (
      "\u0066\u0075\u006e\u0063\u0074\u0069\u006f\u006e" != typeof __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ||
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.has(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      )
    )
      return;
    const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = function (
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
      ...__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03
    ) {
      const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = {
        ...__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
      };
      return (
        (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.streamingAssetsUrl =
          new URL(
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.streamingAssetsUrl ||
              "\u0053\u0074\u0072\u0065\u0061\u006d\u0069\u006e\u0067\u0041\u0073\u0073\u0065\u0074\u0073",
            document.baseURI,
          ).href),
        "\u006e\u0075\u006c\u006c" === globalThis.origin &&
          (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.cacheControl = () =>
            "\u006e\u006f\u002d\u0073\u0074\u006f\u0072\u0065"),
        Reflect.apply(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96, this, [
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
          ...__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
        ])
      );
    };
    (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.add(
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
    ),
      (globalThis.createUnityInstance =
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c));
  }
  if (
    (document.addEventListener?.(
      "\u006c\u006f\u0061\u0064",
      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
        "\u0053\u0043\u0052\u0049\u0050\u0054" ===
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target?.tagName &&
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c();
      },
      !0,
    ),
    document.addEventListener?.(
      "\u0044\u004f\u004d\u0043\u006f\u006e\u0074\u0065\u006e\u0074\u004c\u006f\u0061\u0064\u0065\u0064",
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
    ),
    !globalThis.ytgame)
  ) {
    const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = new Set(),
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = () => {},
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = async () => {},
      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = () =>
        "\u006e\u0079\u0078\u002e\u0070\u006c\u0061\u0079\u0061\u0062\u006c\u0065\u002e\u0073\u0061\u0076\u0065\u003a" + document.baseURI;
    globalThis.ytgame = {
      IN_PLAYABLES_ENV: !1,
      SDK_VERSION: "\u006e\u0079\u0078\u002d\u0073\u0074\u0061\u006e\u0064\u0061\u006c\u006f\u006e\u0065\u002d\u0031",
      game: {
        firstFrameReady: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        gameReady: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        gameLoaded: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        loadData: async () => {
          try {
            return (
              localStorage.getItem(
                __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03(),
              ) || ""
            );
          } catch {
            return "";
          }
        },
        saveData: async (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
          try {
            localStorage.setItem(
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03(),
              String(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
            );
          } catch {}
        },
        sendScore: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
      },
      system: {
        getLanguage: async () => navigator.language || "\u0065\u006e",
        isAudioEnabled: () => !0,
        isMuted: () => !1,
        onAudioEnabledChange: (
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        ) => (
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.add(
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
          ),
          () =>
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.delete(
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
            )
        ),
        onPause: () => __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        onResume: () => __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
      },
      engagement: {
        sendScore: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
      },
      health: {
        logError: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        logWarning: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
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
  let __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = !1;
  Object.defineProperty(globalThis, "\u0052\u0075\u006e\u0074\u0069\u006d\u0065\u0049\u006e\u0074\u0065\u0072\u0066\u0061\u0063\u0065", {
    configurable: !0,
    get: () => __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
    set(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) {
      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
        "\u0066\u0075\u006e\u0063\u0074\u0069\u006f\u006e" == typeof __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
          ? new Proxy(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5, {
              construct(
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
              ) {
                !(function () {
                  if (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713) return;
                  __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = !0;
                  const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                      globalThis.cancelAnimationFrame.bind(globalThis),
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                      globalThis.requestAnimationFrame.bind(globalThis);
                  let __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03;
                  globalThis.cancelAnimationFrame = (
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                  ) =>
                    "\u0066\u0075\u006e\u0063\u0074\u0069\u006f\u006e" ==
                    typeof __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
                      ? __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c(
                          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                        )
                      : __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5(
                          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                        );
                  try {
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ||
                      (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                        navigator.serviceWorker);
                  } catch {}
                  if (!__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03)
                    try {
                      Object.defineProperty(globalThis, "\u0043\u0033\u005f\u0052\u0065\u0067\u0069\u0073\u0074\u0065\u0072\u0053\u0057", {
                        configurable: !0,
                        get: () => () => {},
                        set: () => {},
                      });
                    } catch {}
                })();
                const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c[0];
                return (
                  __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a &&
                    "\u006f\u0062\u006a\u0065\u0063\u0074" ==
                      typeof __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a &&
                    (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = [
                      {
                        ...__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
                        baseUrl:
                          __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.baseUrl ||
                          document.baseURI,
                        ...("\u006e\u0075\u006c\u006c" === globalThis.origin
                          ? {
                              useWorker: !1,
                            }
                          : {}),
                      },
                      ...__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.slice(
                        1,
                      ),
                    ]),
                  Reflect.construct(
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                  )
                );
              },
            })
          : __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5;
    },
  });
})();
