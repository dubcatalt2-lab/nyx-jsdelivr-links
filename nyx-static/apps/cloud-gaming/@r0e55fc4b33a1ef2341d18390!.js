(() => {
  "use strict";
  const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = "\u002f\u0061\u0070\u0069\u002f\u0063\u006c\u006f\u0075\u0064\u002d\u0067\u0061\u006d\u0069\u006e\u0067",
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = {
      games: [],
      filtered: [],
      configured: !1,
      token: "",
      tokenExpiresAt: 0,
      directAuthPromise: null,
      parentAuth: !1,
      session: null,
      launching: !1,
      cancelled: !1,
      launchController: null,
      launchDeadlineTimer: null,
      launchTimedOut: !1,
      retryUntil: 0,
      retryTimer: null,
      pingTimer: null,
      elapsedTimer: null,
      pingFailures: 0,
    },
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = {
      network: document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u006e\u0065\u0074\u0077\u006f\u0072\u006b\u002d\u006d\u006f\u0064\u0065\u005d"),
      provider: document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0070\u0072\u006f\u0076\u0069\u0064\u0065\u0072\u002d\u0073\u0074\u0061\u0074\u0065\u005d"),
      notice: document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u006e\u006f\u0074\u0069\u0063\u0065\u005d"),
      grid: document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0067\u0072\u0069\u0064\u005d"),
      empty: document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0065\u006d\u0070\u0074\u0079\u005d"),
      search: document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0073\u0065\u0061\u0072\u0063\u0068\u005d"),
      tag: document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0074\u0061\u0067\u005d"),
      launchLayer: document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u006c\u0061\u0075\u006e\u0063\u0068\u002d\u006c\u0061\u0079\u0065\u0072\u005d"),
      launchTitle: document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u006c\u0061\u0075\u006e\u0063\u0068\u002d\u0074\u0069\u0074\u006c\u0065\u005d"),
      launchStatus: document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u006c\u0061\u0075\u006e\u0063\u0068\u002d\u0073\u0074\u0061\u0074\u0075\u0073\u005d"),
      launchProgress: document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u006c\u0061\u0075\u006e\u0063\u0068\u002d\u0070\u0072\u006f\u0067\u0072\u0065\u0073\u0073\u005d"),
      cancel: document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0063\u0061\u006e\u0063\u0065\u006c\u005d"),
      playerLayer: document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0070\u006c\u0061\u0079\u0065\u0072\u002d\u006c\u0061\u0079\u0065\u0072\u005d"),
      player: document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0070\u006c\u0061\u0079\u0065\u0072\u005d"),
      playerTitle: document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0070\u006c\u0061\u0079\u0065\u0072\u002d\u0074\u0069\u0074\u006c\u0065\u005d"),
      playerTime: document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0070\u006c\u0061\u0079\u0065\u0072\u002d\u0074\u0069\u006d\u0065\u005d"),
      fullscreen: document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0066\u0075\u006c\u006c\u0073\u0063\u0072\u0065\u0065\u006e\u005d"),
      close: document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0063\u006c\u006f\u0073\u0065\u005d"),
    },
    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = (
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    ) =>
      new Promise((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) =>
        setTimeout(
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        ),
      );
  function __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = "",
  ) {
    ((__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.notice.textContent =
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
      (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.notice.className =
        "\u006e\u006f\u0074\u0069\u0063\u0065" +
        (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
          ? ` ${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5}`
          : "")));
  }
  function __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = "",
  ) {
    ((__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.provider.querySelector(
      "\u0062",
    ).textContent = __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
      (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.provider.className =
        "\u0070\u0072\u006f\u0076\u0069\u0064\u0065\u0072\u002d\u0073\u0074\u0061\u0074\u0065" +
        (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
          ? ` ${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5}`
          : "")));
  }
  async function __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = !1,
  ) {
    if (
      !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.token &&
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.tokenExpiresAt >
        Date.now() + 3e4
    )
      return __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.token;
    const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
      await (async function () {
        if (window.parent === window) return null;
        const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = `cloud-${Date.now()}-${Math.random().toString(36).slice(2)}`;
        return new Promise((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) => {
          let __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = !1;
          const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = (
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
            ) => {
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c ||
                ((__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = !0),
                clearTimeout(__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a),
                window.removeEventListener(
                  "\u006d\u0065\u0073\u0073\u0061\u0067\u0065",
                  __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
                ),
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                ));
            },
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = (
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
            ) => {
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.source ===
                window.parent &&
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.origin ===
                  location.origin &&
                "\u006e\u0079\u0078\u003a\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u002d\u0074\u006f\u006b\u0065\u006e\u002d\u0072\u0065\u0073\u0070\u006f\u006e\u0073\u0065" ===
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.data?.type &&
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.data
                  ?.requestId ===
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
                __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03({
                  available: !0,
                  token: String(
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.data.token ||
                      "",
                  ),
                });
            },
            __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a = setTimeout(
              () => __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03(null),
              2500,
            );
          (window.addEventListener(
            "\u006d\u0065\u0073\u0073\u0061\u0067\u0065",
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
          ),
            window.parent.postMessage(
              {
                type: "\u006e\u0079\u0078\u003a\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u002d\u0074\u006f\u006b\u0065\u006e\u002d\u0072\u0065\u0071\u0075\u0065\u0073\u0074",
                requestId: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              },
              location.origin,
            ));
        });
      })();
    if (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c?.available)
      return (
        (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.parentAuth = !0),
        (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.token =
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.token),
        (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.tokenExpiresAt =
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.token
            ? Date.now() + 27e5
            : 0),
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.token
      );
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.parentAuth = !1;
    const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
      await (async function () {
        if (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.directAuthPromise)
          return __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.directAuthPromise;
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.directAuthPromise =
          (async () => {
            const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
              await __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238(
                "\u002f\u0061\u0070\u0069\u002f\u0066\u006f\u0075\u006e\u0064\u0065\u0072\u002d\u0070\u0072\u006f\u0066\u0069\u006c\u0065\u002f\u0061\u0075\u0074\u0068\u002d\u0063\u006f\u006e\u0066\u0069\u0067",
                {
                  cache: "\u006e\u006f\u002d\u0073\u0074\u006f\u0072\u0065",
                },
                !1,
              );
            if (!__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.enabled)
              return null;
            const [
                {
                  initializeApp: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                  getApps: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                },
                {
                  getAuth: __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                  setPersistence:
                    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
                  browserLocalPersistence:
                    __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
                },
              ] = await Promise.all([
                import("\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0077\u0077\u0077\u002e\u0067\u0073\u0074\u0061\u0074\u0069\u0063\u002e\u0063\u006f\u006d\u002f\u0066\u0069\u0072\u0065\u0062\u0061\u0073\u0065\u006a\u0073\u002f\u0031\u0031\u002e\u0031\u0030\u002e\u0030\u002f\u0066\u0069\u0072\u0065\u0062\u0061\u0073\u0065\u002d\u0061\u0070\u0070\u002e\u006a\u0073"),
                import("\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0077\u0077\u0077\u002e\u0067\u0073\u0074\u0061\u0074\u0069\u0063\u002e\u0063\u006f\u006d\u002f\u0066\u0069\u0072\u0065\u0062\u0061\u0073\u0065\u006a\u0073\u002f\u0031\u0031\u002e\u0031\u0030\u002e\u0030\u002f\u0066\u0069\u0072\u0065\u0062\u0061\u0073\u0065\u002d\u0061\u0075\u0074\u0068\u002e\u006a\u0073"),
              ]),
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
                __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03(
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c().find(
                    (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                      "\u006e\u0079\u0078\u002d\u0066\u006f\u0075\u006e\u0064\u0065\u0072\u002d\u006f\u0077\u006e\u0065\u0072" ===
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.name,
                  ) ||
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5(
                      {
                        apiKey:
                          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.apiKey,
                        authDomain: `${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.projectId}.firebaseapp.com`,
                        projectId:
                          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.projectId,
                      },
                      "\u006e\u0079\u0078\u002d\u0066\u006f\u0075\u006e\u0064\u0065\u0072\u002d\u006f\u0077\u006e\u0065\u0072",
                    ),
                );
            try {
              await __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
                __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
                __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
              );
            } catch {}
            return (
              "\u0066\u0075\u006e\u0063\u0074\u0069\u006f\u006e" ==
                typeof __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.authStateReady &&
                (await __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.authStateReady()),
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc
            );
          })();
        try {
          return await __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.directAuthPromise;
        } catch (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
          throw (
            (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.directAuthPromise =
              null),
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
          );
        }
      })();
    return (
      (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.token =
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03?.currentUser
          ? await __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.currentUser.getIdToken(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
            )
          : ""),
      (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.tokenExpiresAt =
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.token
          ? Date.now() + 27e5
          : 0),
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.token
    );
  }
  function __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = "\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067\u0020\u0072\u0065\u0063\u0065\u0069\u0076\u0065\u0064\u0020\u0061\u006e\u0020\u0069\u006e\u0076\u0061\u006c\u0069\u0064\u0020\u0070\u0072\u006f\u0076\u0069\u0064\u0065\u0072\u0020\u0072\u0065\u0073\u0070\u006f\u006e\u0073\u0065\u002e\u0020\u0054\u0072\u0079\u0020\u0061\u0067\u0061\u0069\u006e\u0020\u0069\u006e\u0020\u0061\u0020\u006d\u006f\u006d\u0065\u006e\u0074\u002e",
  ) {
    const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = String(
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 || "",
    ).trim();
    return !__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c ||
      /<!doctype\s+html|<html\b|<body\b|cloudflare|unexpected token.+json|not valid json/i.test(
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
      ) ||
      /<[a-z][\s\S]*>/i.test(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c)
      ? __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
      : __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
          .replace(/\s+/g, "\u0020")
          .slice(0, 240);
  }
  async function __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = {},
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = !0,
    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = !0,
  ) {
    const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = new Headers(
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.headers || {},
    );
    if (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c) {
      const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
        await __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc(
          !__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
        );
      if (!__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
        const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = new Error(
          "\u0053\u0069\u0067\u006e\u0020\u0069\u006e\u0020\u0074\u006f\u0020\u0075\u0073\u0065\u0020\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067\u002e",
        );
        throw (
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.status = 401),
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
        );
      }
      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.set(
        "\u0041\u0075\u0074\u0068\u006f\u0072\u0069\u007a\u0061\u0074\u0069\u006f\u006e",
        `Bearer ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96}`,
      );
    }
    const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a = await fetch(
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      {
        ...__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        headers: __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
      },
    );
    let __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f = null;
    if (
      (
        __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.headers.get(
          "\u0063\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0074\u0079\u0070\u0065",
        ) || ""
      ).includes("\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u006a\u0073\u006f\u006e")
    )
      try {
        __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f =
          await __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.json();
      } catch {
        __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f = {
          error: __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2(
            "",
            `Cloud Gaming returned an unreadable response (${__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.status}). Try again in a moment.`,
          ),
        };
      }
    else
      __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f = {
        error: __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2(
          await __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.text(),
          `Cloud Gaming returned an invalid response (${__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.status}). Try again in a moment.`,
        ),
      };
    if (!__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.ok) {
      if (
        401 === __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.status &&
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c &&
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03
      )
        return __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
          !0,
          !1,
        );
      const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = new Error(
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2(
          __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f?.error,
          `Cloud Gaming is temporarily unavailable (${__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.status}). Try again in a moment.`,
        ),
      );
      throw (
        (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.status =
          __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.status),
        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713
      );
    }
    return __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f;
  }
  function __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
  ) {
    const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
      document.createElement("\u0061\u0072\u0074\u0069\u0063\u006c\u0065");
    __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.className = "\u0067\u0061\u006d\u0065\u002d\u0063\u0061\u0072\u0064";
    const __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
      document.createElement("\u0064\u0069\u0076");
    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.className = "\u0067\u0061\u006d\u0065\u002d\u0061\u0072\u0074";
    const __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = (function (
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    ) {
      try {
        const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = new URL(
          String(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 || ""),
          location.href,
        );
        return "\u0068\u0074\u0074\u0070\u0073\u003a" ===
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.protocol
          ? __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.href
          : "";
      } catch {
        return "";
      }
    })(
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.image ||
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.cover,
    );
    if (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2) {
      const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
        document.createElement("\u0069\u006d\u0067");
      ((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.src =
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2),
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.alt = ""),
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.loading =
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 < 18
            ? "\u0065\u0061\u0067\u0065\u0072"
            : "\u006c\u0061\u007a\u0079"),
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.decoding = "\u0061\u0073\u0079\u006e\u0063"),
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 < 8 &&
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.fetchPriority =
            "\u0068\u0069\u0067\u0068"),
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.referrerPolicy =
          "\u0073\u0061\u006d\u0065\u002d\u006f\u0072\u0069\u0067\u0069\u006e"),
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.addEventListener(
          "\u0065\u0072\u0072\u006f\u0072",
          () => __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.remove(),
          {
            once: !0,
          },
        ),
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.append(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        ));
    }
    const __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 =
      document.createElement("\u0064\u0069\u0076");
    __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.className = "\u0067\u0061\u006d\u0065\u002d\u0063\u006f\u0070\u0079";
    const __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f =
      document.createElement("\u0068\u0033");
    ((__16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f.textContent =
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.name),
      (__16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f.title =
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.name));
    const __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34 =
      document.createElement("\u0064\u0069\u0076");
    ((__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.className = "\u0074\u0061\u0067\u0073"),
      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.tags || [])
        .slice(0, 3)
        .forEach((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
          const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
            document.createElement("\u0073\u0070\u0061\u006e");
          ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.textContent =
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
            __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.append(
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
            ));
        }));
    const __d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21 =
      document.createElement("\u0062\u0075\u0074\u0074\u006f\u006e");
    return (
      (__d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21.type = "\u0062\u0075\u0074\u0074\u006f\u006e"),
      (__d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21.className = "\u0070\u006c\u0061\u0079"),
      (__d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21.textContent = "\u0050\u006c\u0061\u0079"),
      (__d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21.disabled =
        !__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.configured ||
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.launching ||
        Date.now() < __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.retryUntil),
      __d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21.addEventListener(
        "\u0063\u006c\u0069\u0063\u006b",
        () => {
          !(async function (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
            if (
              !(
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.launching ||
                Date.now() <
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.retryUntil
              ) &&
              __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161()
            ) {
              ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.launching = !0),
                (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.cancelled = !1),
                (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.launchTimedOut =
                  !1),
                (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.launchController =
                  new AbortController()),
                clearTimeout(
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.launchDeadlineTimer,
                ),
                (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.launchDeadlineTimer =
                  setTimeout(() => {
                    ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.launchTimedOut =
                      !0),
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.launchController?.abort());
                  }, 15e4)),
                __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(),
                (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.launchLayer.hidden =
                  !1),
                __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6(!0),
                (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.launchTitle.textContent =
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.name),
                __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1("\u0073\u0074\u0061\u0072\u0074\u0069\u006e\u0067"));
              try {
                const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                  await __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe(
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                  );
                if (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.cancelled)
                  return;
                if (
                  ("\u0071\u0075\u0065\u0075\u0065" ===
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c?.status &&
                    (await __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a()),
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.cancelled)
                )
                  return;
                if (!__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.session?.id)
                  throw new Error("\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067\u0020\u0064\u0069\u0064\u0020\u006e\u006f\u0074\u0020\u0063\u0072\u0065\u0061\u0074\u0065\u0020\u0061\u0020\u0073\u0065\u0073\u0073\u0069\u006f\u006e\u002e");
                await __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d();
              } catch (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03) {
                (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.cancelled ||
                  (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.launchTimedOut
                      ? "\u0054\u0068\u0065\u0020\u0070\u0072\u006f\u0076\u0069\u0064\u0065\u0072\u0020\u0074\u006f\u006f\u006b\u0020\u0074\u006f\u006f\u0020\u006c\u006f\u006e\u0067\u0020\u0074\u006f\u0020\u0070\u0072\u0065\u0070\u0061\u0072\u0065\u0020\u0074\u0068\u0069\u0073\u0020\u0067\u0061\u006d\u0065\u002e\u0020\u0054\u0072\u0079\u0020\u0061\u0067\u0061\u0069\u006e\u0020\u0069\u006e\u0020\u0061\u0020\u006d\u006f\u006d\u0065\u006e\u0074\u002e"
                      : "\u0041\u0062\u006f\u0072\u0074\u0045\u0072\u0072\u006f\u0072" ===
                          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03?.name
                        ? "\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0066\u0069\u006e\u0069\u0073\u0068\u0020\u0070\u0072\u0065\u0070\u0061\u0072\u0069\u006e\u0067\u0020\u0074\u0068\u0069\u0073\u0020\u0067\u0061\u006d\u0065\u002e"
                        : __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.message ||
                          "\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u006c\u0061\u0075\u006e\u0063\u0068\u0020\u0074\u0068\u0069\u0073\u0020\u0067\u0061\u006d\u0065\u002e",
                    "\u0065\u0072\u0072\u006f\u0072",
                  ),
                  __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.retryUntil &&
                    (function (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
                      ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.retryUntil =
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
                        clearInterval(
                          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.retryTimer,
                        ));
                      const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                        () => {
                          const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
                            Math.max(
                              0,
                              Math.ceil(
                                (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.retryUntil -
                                  Date.now()) /
                                  1e3,
                              ),
                            );
                          if (!__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96)
                            return (
                              clearInterval(
                                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.retryTimer,
                              ),
                              (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.retryTimer =
                                null),
                              (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.retryUntil = 0),
                              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
                                "\u0059\u006f\u0075\u0020\u0063\u0061\u006e\u0020\u0074\u0072\u0079\u0020\u006c\u0061\u0075\u006e\u0063\u0068\u0069\u006e\u0067\u0020\u0061\u0020\u0067\u0061\u006d\u0065\u0020\u0061\u0067\u0061\u0069\u006e\u002e",
                                "\u0072\u0065\u0061\u0064\u0079",
                              ),
                              void __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239()
                            );
                          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
                            `Please wait ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96} seconds before trying again.`,
                            "\u0065\u0072\u0072\u006f\u0072",
                          );
                        };
                      (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c(),
                        (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.retryTimer =
                          setInterval(
                            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                            1e3,
                          )),
                        __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239());
                    })(
                      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.retryUntil,
                    )),
                  await __fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797(!1));
              } finally {
                (clearTimeout(
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.launchDeadlineTimer,
                ),
                  (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.launchDeadlineTimer =
                    null),
                  (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.launchController =
                    null),
                  (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.launching =
                    !1),
                  (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.launchLayer.hidden =
                    !0),
                  __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239());
              }
            }
          })(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96);
        },
      ),
      __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.append(
        __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f,
        __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34,
        __d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21,
      ),
      __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.append(
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
        __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238,
      ),
      __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a
    );
  }
  function __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239() {
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.network.disabled =
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.launching;
    const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.search.value
          .trim()
          .toLowerCase(),
      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.tag.value.toLowerCase();
    ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.filtered =
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.games.filter(
        (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) =>
          (!__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ||
            `${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.name} ${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.description} ${(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.tags || []).join("\u0020")}`
              .toLowerCase()
              .includes(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96)) &&
          (!__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 ||
            (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.tags || []).some(
              (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.toLowerCase() ===
                __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
            )),
      )),
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.grid.replaceChildren(
        ...__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.filtered.map(
          __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f,
        ),
      ),
      (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.empty.hidden =
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.filtered.length > 0));
  }
  function __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
  ) {
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.launchProgress.style.width = `${
      {
        creating_account: 18,
        account_ready: 40,
        requesting_game: 58,
        queue: 70,
        finished_queue: 88,
      }[__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96] || 12
    }%`;
    const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = {
      creating_account: "\u0050\u0072\u0065\u0070\u0061\u0072\u0069\u006e\u0067\u0020\u0061\u0020\u0070\u0072\u006f\u0076\u0069\u0064\u0065\u0072\u0020\u0073\u0065\u0073\u0073\u0069\u006f\u006e\u2026",
      account_ready: "\u0050\u0072\u006f\u0076\u0069\u0064\u0065\u0072\u0020\u0073\u0065\u0073\u0073\u0069\u006f\u006e\u0020\u0072\u0065\u0061\u0064\u0079\u002e",
      requesting_game: "\u0052\u0065\u0071\u0075\u0065\u0073\u0074\u0069\u006e\u0067\u0020\u0061\u0020\u0067\u0061\u006d\u0065\u0020\u0073\u0065\u0072\u0076\u0065\u0072\u2026",
      queue: `Waiting for a game server${Number.isFinite(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) ? ` \xb7 position ${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5}` : ""}.`,
      finished_queue: "\u0047\u0061\u006d\u0065\u0020\u0073\u0065\u0072\u0076\u0065\u0072\u0020\u0061\u0063\u0071\u0075\u0069\u0072\u0065\u0064\u002e\u0020\u0053\u0074\u0061\u0072\u0074\u0069\u006e\u0067\u0020\u0073\u0074\u0072\u0065\u0061\u006d\u2026",
    };
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.launchStatus.textContent =
      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03[
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
      ] || "\u0043\u006f\u006e\u006e\u0065\u0063\u0074\u0069\u006e\u0067\u0020\u0074\u006f\u0020\u0074\u0068\u0065\u0020\u0063\u006c\u006f\u0075\u0064\u0020\u0070\u0072\u006f\u0076\u0069\u0064\u0065\u0072\u2026";
  }
  function __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    (document.documentElement.classList.toggle(
      "\u0063\u006c\u006f\u0075\u0064\u002d\u0073\u0065\u0073\u0073\u0069\u006f\u006e\u002d\u0061\u0063\u0074\u0069\u0076\u0065",
      Boolean(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
    ),
      window.parent !== window &&
        window.parent.postMessage(
          {
            type: "\u006e\u0079\u0078\u003a\u0063\u006c\u006f\u0075\u0064\u002d\u0070\u006c\u0061\u0079\u0065\u0072",
            active: Boolean(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
          },
          location.origin,
        ));
  }
  async function __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe(
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = !0,
  ) {
    const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = new Headers({
        "\u0043\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0054\u0079\u0070\u0065": "\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u006a\u0073\u006f\u006e",
      }),
      __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
        await __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc(
          !__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
        );
    if (!__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a)
      throw new Error("\u0053\u0069\u0067\u006e\u0020\u0069\u006e\u0020\u0074\u006f\u0020\u0075\u0073\u0065\u0020\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067\u002e");
    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.set(
      "\u0041\u0075\u0074\u0068\u006f\u0072\u0069\u007a\u0061\u0074\u0069\u006f\u006e",
      `Bearer ${__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a}`,
    );
    const __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 = await fetch(
      `${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96}/sessions`,
      {
        method: "\u0050\u004f\u0053\u0054",
        headers: __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
        body: JSON.stringify({
          gameKey: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.key,
        }),
        signal:
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.launchController
            ?.signal,
      },
    );
    if (
      401 === __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.status &&
      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03
    )
      return __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe(
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
        !1,
      );
    if (!__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.ok) {
      let __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = {};
      try {
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
          await __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.json();
      } catch {}
      const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = new Error(
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.error,
          `Cloud Gaming is temporarily unavailable (${__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.status}). Try again in a moment.`,
        ),
      );
      if (429 === __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.status) {
        const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
            __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.headers.get(
              "\u0052\u0065\u0074\u0072\u0079\u002d\u0041\u0066\u0074\u0065\u0072",
            ),
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = Number(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          ),
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
            Number.isFinite(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c)
              ? Date.now() +
                1e3 *
                  Math.max(0, __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c)
              : Date.parse(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 || "",
                );
        Number.isFinite(__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03) &&
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 > Date.now() &&
          (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.retryUntil =
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03);
      }
      throw __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5;
    }
    if (!__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.body)
      throw new Error("\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067\u0020\u0064\u0069\u0064\u0020\u006e\u006f\u0074\u0020\u0072\u0065\u0074\u0075\u0072\u006e\u0020\u0073\u0065\u0073\u0073\u0069\u006f\u006e\u0020\u0070\u0072\u006f\u0067\u0072\u0065\u0073\u0073\u002e");
    const __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f =
        __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.body.getReader(),
      __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 = new TextDecoder();
    let __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 = "",
      __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a = null;
    for (;;) {
      const {
        done: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        value: __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
      } = await __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f.read();
      __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 +=
        __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239.decode(
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 || new Uint8Array(),
          {
            stream: !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          },
        );
      const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
        __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6.split(/\r?\n/);
      __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 =
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
          ? ""
          : __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.pop() || "";
      for (const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a of __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713) {
        if (!__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.trim()) continue;
        let __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96;
        try {
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = JSON.parse(
            __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
          );
        } catch {
          continue;
        }
        if (
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id &&
            (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.session = {
              id: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
              gameKey: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.key,
              gameName: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.name,
              state:
                "\u0071\u0075\u0065\u0075\u0065" ===
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.status
                  ? "\u0071\u0075\u0065\u0075\u0065\u0064"
                  : "\u0072\u0065\u0061\u0064\u0079",
            }),
          __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.status,
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.queuePosition,
          ),
          (__1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a =
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
          "\u0065\u0072\u0072\u006f\u0072" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.status)
        )
          throw new Error(
            __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.error,
              "\u0054\u0068\u0065\u0020\u0063\u006c\u006f\u0075\u0064\u0020\u0070\u0072\u006f\u0076\u0069\u0064\u0065\u0072\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0070\u0072\u0065\u0070\u0061\u0072\u0065\u0020\u0074\u0068\u0069\u0073\u0020\u0067\u0061\u006d\u0065\u002e\u0020\u0054\u0072\u0079\u0020\u0061\u0067\u0061\u0069\u006e\u0020\u0069\u006e\u0020\u0061\u0020\u006d\u006f\u006d\u0065\u006e\u0074\u002e",
            ),
          );
      }
      if (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) break;
    }
    return __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a;
  }
  async function __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a() {
    for (
      ;
      !__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.cancelled &&
      "\u0071\u0075\u0065\u0075\u0065\u0064" ===
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.session?.state;

    ) {
      if (
        (await __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03(4e3),
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.cancelled)
      )
        return;
      const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
        await __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238(
          `${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96}/sessions/${encodeURIComponent(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.session.id)}/queue`,
        );
      if (
        ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.session =
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.session ||
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.session),
        __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1(
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.status,
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.queuePosition,
        ),
        "\u0066\u0069\u006e\u0069\u0073\u0068\u0065\u0064\u005f\u0071\u0075\u0065\u0075\u0065" ===
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.status ||
          "\u0072\u0065\u0061\u0064\u0079" ===
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.session.state)
      )
        return;
    }
    if (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.cancelled)
      throw new Error("\u004c\u0061\u0075\u006e\u0063\u0068\u0020\u0063\u0061\u006e\u0063\u0065\u006c\u006c\u0065\u0064\u002e");
  }
  async function __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d() {
    const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
      await __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238(
        `${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96}/sessions/${encodeURIComponent(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.session.id)}/start`,
        {
          method: "\u0050\u004f\u0053\u0054",
        },
      );
    if (
      ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.session =
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.session),
      !__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.session?.embedUrl)
    )
      throw new Error("\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067\u0020\u0064\u0069\u0064\u0020\u006e\u006f\u0074\u0020\u0072\u0065\u0074\u0075\u0072\u006e\u0020\u0061\u0020\u0070\u006c\u0061\u0079\u0065\u0072\u0020\u0061\u0064\u0064\u0072\u0065\u0073\u0073\u002e");
    __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34();
  }
  function __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161() {
    let __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96;
    try {
      if ("\u0066\u0075\u006e\u0063\u0074\u0069\u006f\u006e" != typeof RTCPeerConnection) throw new Error();
      return (
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = new RTCPeerConnection(
          {
            iceServers: [],
          },
        )),
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.createDataChannel(
          "\u0073\u0075\u0070\u0070\u006f\u0072\u0074\u002d\u0063\u0068\u0065\u0063\u006b",
        ),
        !0
      );
    } catch {
      return (
        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
          "\u0057\u0065\u0062\u0052\u0054\u0043\u0020\u0069\u0073\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u0020\u0069\u006e\u0020\u0074\u0068\u0069\u0073\u0020\u0062\u0072\u006f\u0077\u0073\u0065\u0072\u002e\u0020\u0043\u006c\u006f\u0075\u0064\u0020\u0073\u0074\u0072\u0065\u0061\u006d\u0069\u006e\u0067\u0020\u006e\u0065\u0065\u0064\u0073\u0020\u0069\u0074\u002e\u0020\u0054\u0072\u0079\u0020\u0042\u0072\u006f\u0077\u0073\u0065\u0072\u0020\u0067\u0061\u006d\u0065\u0073\u002c\u0020\u0061\u006e\u006f\u0074\u0068\u0065\u0072\u0020\u0062\u0072\u006f\u0077\u0073\u0065\u0072\u002c\u0020\u006f\u0072\u0020\u0061\u0073\u006b\u0020\u0079\u006f\u0075\u0072\u0020\u0064\u0065\u0076\u0069\u0063\u0065\u0020\u0061\u0064\u006d\u0069\u006e\u0069\u0073\u0074\u0072\u0061\u0074\u006f\u0072\u0020\u0074\u006f\u0020\u0065\u006e\u0061\u0062\u006c\u0065\u0020\u0069\u0074\u002e",
          "\u0065\u0072\u0072\u006f\u0072",
        ),
        !1
      );
    } finally {
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.close();
    }
  }
  function __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34() {
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.playerTitle.textContent =
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.session.gameName ||
      "\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067";
    const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = new URL(
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.session.embedUrl,
      location.href,
    );
    ("\u0072\u0065\u0073\u0074\u0072\u0069\u0063\u0074\u0065\u0064" ===
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.network.value
      ? __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.searchParams.set(
          "\u006e\u0065\u0074\u0077\u006f\u0072\u006b",
          "\u0072\u0065\u0073\u0074\u0072\u0069\u0063\u0074\u0065\u0064",
        )
      : __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.searchParams.delete(
          "\u006e\u0065\u0074\u0077\u006f\u0072\u006b",
        ),
      (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.player.src =
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.href),
      (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.playerLayer.hidden = !1),
      (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.launchLayer.hidden = !0),
      __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6(!0),
      (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.pingFailures = 0),
      clearInterval(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.pingTimer),
      (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.pingTimer = setInterval(
        () => {
          __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c();
        },
        15e3,
      )),
      clearInterval(
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.elapsedTimer,
      ),
      (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.elapsedTimer =
        setInterval(__d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21, 1e3)),
      __d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21(),
      __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c());
  }
  function __d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21() {
    if (!__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.session?.startedAtMs)
      return void (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.playerTime.textContent =
        "\u0043\u006f\u006e\u006e\u0065\u0063\u0074\u0065\u0064");
    const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = Math.max(
        0,
        Math.floor(
          (Date.now() -
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.session
              .startedAtMs) /
            1e3,
        ),
      ),
      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = Math.max(
        0,
        Number(
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.session.maxSeconds ||
            0,
        ),
      );
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.playerTime.textContent =
      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03
        ? `${Math.floor(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 / 60)}:${String(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 % 60).padStart(2, "\u0030")} / ${Math.floor(__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 / 60)}:${String(__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 % 60).padStart(2, "\u0030")}`
        : `${Math.floor(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 / 60)}:${String(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 % 60).padStart(2, "\u0030")}`;
  }
  async function __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c() {
    if (
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.session?.id &&
      "\u0061\u0063\u0074\u0069\u0076\u0065" === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.session.state
    )
      try {
        const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
          await __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238(
            `${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96}/sessions/${encodeURIComponent(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.session.id)}/ping`,
            {
              method: "\u0050\u004f\u0053\u0054",
            },
          );
        ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.pingFailures = 0),
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.sessionTimeLimitSeconds &&
            ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.session.maxSeconds =
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.sessionTimeLimitSeconds),
            (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.session.startedAtMs =
              Date.now() -
              1e3 *
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.sessionTimeUsedSeconds),
            __d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21()));
      } catch (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c) {
        ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.pingFailures += 1),
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.pingFailures >= 2 &&
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.message ||
                "\u0054\u0068\u0065\u0020\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067\u0020\u0073\u0065\u0073\u0073\u0069\u006f\u006e\u0020\u006c\u006f\u0073\u0074\u0020\u0069\u0074\u0073\u0020\u006b\u0065\u0065\u0070\u0061\u006c\u0069\u0076\u0065\u002e",
              "\u0065\u0072\u0072\u006f\u0072",
            ));
      }
  }
  async function __fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797(
    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = !0,
  ) {
    const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.session;
    if (
      ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.cancelled = !0),
      clearTimeout(
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.launchDeadlineTimer,
      ),
      (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.launchDeadlineTimer =
        null),
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.launchController?.abort(),
      (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.session = null),
      clearInterval(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.pingTimer),
      clearInterval(
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.elapsedTimer,
      ),
      (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.pingTimer = null),
      (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.elapsedTimer = null),
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.player.removeAttribute(
        "\u0073\u0072\u0063",
      ),
      (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.playerLayer.hidden = !0),
      __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6(!1),
      __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a?.id)
    )
      try {
        await __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238(
          `${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96}/sessions/${encodeURIComponent(__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.id)}`,
          {
            method: "\u0044\u0045\u004c\u0045\u0054\u0045",
          },
        );
      } catch {}
    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 &&
      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
        "\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067\u0020\u0073\u0065\u0073\u0073\u0069\u006f\u006e\u0020\u0065\u006e\u0064\u0065\u0064\u002e",
        "\u0072\u0065\u0061\u0064\u0079",
      );
  }
  async function __51e241f4e1ab21052e5631abbf6ddcfbf931e3f1ce73d61a5a8454c170b94eba() {
    try {
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.network.value =
        "\u0072\u0065\u0073\u0074\u0072\u0069\u0063\u0074\u0065\u0064" === localStorage.getItem("\u006e\u0079\u0078\u002d\u0063\u006c\u006f\u0075\u0064\u002d\u006e\u0065\u0074\u0077\u006f\u0072\u006b") ? "\u0072\u0065\u0073\u0074\u0072\u0069\u0063\u0074\u0065\u0064" : "\u0061\u0075\u0074\u006f";
    } catch {}
    (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.network.addEventListener(
      "\u0063\u0068\u0061\u006e\u0067\u0065",
      () => {
        try {
          localStorage.setItem(
            "\u006e\u0079\u0078\u002d\u0063\u006c\u006f\u0075\u0064\u002d\u006e\u0065\u0074\u0077\u006f\u0072\u006b",
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.network.value,
          );
        } catch {}
      },
    ),
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.search.addEventListener(
        "\u0069\u006e\u0070\u0075\u0074",
        __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239,
      ),
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.tag.addEventListener(
        "\u0063\u0068\u0061\u006e\u0067\u0065",
        __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239,
      ),
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.cancel.addEventListener(
        "\u0063\u006c\u0069\u0063\u006b",
        () => {
          __fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797(!1);
        },
      ),
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.close.addEventListener(
        "\u0063\u006c\u0069\u0063\u006b",
        () => {
          __fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797();
        },
      ),
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.fullscreen.addEventListener(
        "\u0063\u006c\u0069\u0063\u006b",
        () =>
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.playerLayer.requestFullscreen?.(),
      ),
      document.addEventListener("\u0076\u0069\u0073\u0069\u0062\u0069\u006c\u0069\u0074\u0079\u0063\u0068\u0061\u006e\u0067\u0065", () => {
        document.hidden || __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c();
      }),
      addEventListener("\u006f\u006e\u006c\u0069\u006e\u0065", () => {
        __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c();
      }),
      addEventListener(
        "\u006d\u0065\u0073\u0073\u0061\u0067\u0065",
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.origin ===
            location.origin &&
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.source ===
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.player
                .contentWindow &&
            "\u006e\u0079\u0078\u003a\u0063\u006c\u006f\u0075\u0064\u002d\u0070\u006c\u0061\u0079\u0065\u0072\u002d\u0065\u0072\u0072\u006f\u0072" ===
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.data?.type &&
            (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
              __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.data.message,
                "\u0054\u0068\u0065\u0020\u0063\u006c\u006f\u0075\u0064\u0020\u0073\u0074\u0072\u0065\u0061\u006d\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0070\u006c\u0061\u0079\u0020\u006f\u006e\u0020\u0074\u0068\u0069\u0073\u0020\u0064\u0065\u0076\u0069\u0063\u0065\u002e",
              ),
              "\u0065\u0072\u0072\u006f\u0072",
            ),
            __fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797(!1));
        },
      ),
      document
        .querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0068\u006f\u006d\u0065\u005d")
        .addEventListener(
          "\u0063\u006c\u0069\u0063\u006b",
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
            window.parent !== window &&
              (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.preventDefault(),
              window.parent.postMessage(
                {
                  type: "\u006e\u0079\u0078\u003a\u0067\u006f\u002d\u0068\u006f\u006d\u0065",
                },
                location.origin,
              ));
          },
        ));
    try {
      const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
        await __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238(
          `${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96}/status`,
          {},
          !1,
        );
      if (!0 === __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.maintenance)
        return (
          (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.configured = !1),
          __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a(
            "\u0053\u0074\u0072\u0061\u0074\u0075\u0073\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065",
            "\u0065\u0072\u0072\u006f\u0072",
          ),
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
            "\u0053\u0074\u0072\u0061\u0074\u0075\u0073\u0020\u0069\u0073\u0020\u0063\u0075\u0072\u0072\u0065\u006e\u0074\u006c\u0079\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u002e\u0020\u004c\u0075\u006e\u0061\u0020\u0069\u0073\u0020\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u0020\u0061\u0062\u006f\u0076\u0065\u002e",
            "\u0065\u0072\u0072\u006f\u0072",
          ),
          (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.network.disabled =
            !0),
          (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.search.disabled = !0),
          void (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.tag.disabled =
            !0)
        );
      if (!__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161())
        return void __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a(
          "\u0053\u0074\u0072\u0065\u0061\u006d\u0069\u006e\u0067\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065",
          "\u0065\u0072\u0072\u006f\u0072",
        );
      if (
        ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.configured =
          !0 === __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.configured),
        __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a(
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.configured
            ? "\u0053\u0074\u0072\u0061\u0074\u0075\u0073\u0020\u0072\u0065\u0061\u0064\u0079"
            : "\u0053\u0065\u0074\u0075\u0070\u0020\u0072\u0065\u0071\u0075\u0069\u0072\u0065\u0064",
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.configured
            ? "\u0072\u0065\u0061\u0064\u0079"
            : "\u0065\u0072\u0072\u006f\u0072",
        ),
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.configured ||
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.setupMessage ||
              "\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067\u0020\u006e\u0065\u0065\u0064\u0073\u0020\u0061\u0020\u0063\u006f\u006e\u0066\u0069\u0067\u0075\u0072\u0065\u0064\u0020\u0070\u0072\u006f\u0076\u0069\u0064\u0065\u0072\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u002e\u0020\u0041\u0073\u006b\u0020\u0074\u0068\u0065\u0020\u006f\u0077\u006e\u0065\u0072\u0020\u0074\u006f\u0020\u0066\u0069\u006e\u0069\u0073\u0068\u0020\u0073\u0065\u0074\u0075\u0070\u002e",
            "\u0065\u0072\u0072\u006f\u0072",
          ),
        !(await __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc()))
      )
        throw new Error("\u0053\u0069\u0067\u006e\u0020\u0069\u006e\u0020\u0074\u006f\u0020\u0076\u0069\u0065\u0077\u0020\u0061\u006e\u0064\u0020\u006c\u0061\u0075\u006e\u0063\u0068\u0020\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067\u0020\u0074\u0069\u0074\u006c\u0065\u0073\u002e");
      const __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 =
        await __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238(
          `${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96}/catalog`,
        );
      ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.games = Array.isArray(
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.games,
      )
        ? __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.games
        : []),
        (function () {
          const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = [
            ...new Set(
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.games.flatMap(
                (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.tags || [],
              ),
            ),
          ].sort(
            (
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
            ) =>
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.localeCompare(
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
              ),
          );
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.tag.replaceChildren(
            new Option("\u0041\u006c\u006c\u0020\u0063\u0061\u0074\u0065\u0067\u006f\u0072\u0069\u0065\u0073", ""),
            ...__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.map(
              (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                new Option(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                ),
            ),
          );
        })(),
        __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(),
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.configured &&
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
            `${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.games.length} games available.`,
            "\u0072\u0065\u0061\u0064\u0079",
          ),
        await (async function () {
          const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
            await __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238(
              `${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96}/session`,
            );
          if (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.session)
            if (
              ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.session =
                __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.session),
              "\u0061\u0063\u0074\u0069\u0076\u0065" ===
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.session.state &&
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.session.embedUrl)
            )
              __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34();
            else if (
              "\u0071\u0075\u0065\u0075\u0065\u0064" ===
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.session.state
            ) {
              ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.launching = !0),
                (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.launchLayer.hidden =
                  !1),
                __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6(!0),
                (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.launchTitle.textContent =
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.session
                    .gameName || "\u0043\u006c\u006f\u0075\u0064\u0020\u0067\u0061\u006d\u0065"));
              try {
                (await __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a(),
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.cancelled ||
                    (await __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d()));
              } finally {
                ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.launching =
                  !1),
                  (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.launchLayer.hidden =
                    !0),
                  __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239());
              }
            } else if (
              "\u0072\u0065\u0061\u0064\u0079" ===
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.session.state
            ) {
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.launching = !0;
              try {
                await __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d();
              } finally {
                ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.launching =
                  !1),
                  __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239());
              }
            }
        })());
    } catch (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03) {
      (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.message ||
          "\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067\u0020\u0069\u0073\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u002e",
        "\u0065\u0072\u0072\u006f\u0072",
      ),
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.games.length ||
          (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.empty.hidden = !1));
    }
  }
  const __319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed =
    document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u006c\u0075\u006e\u0061\u002d\u0064\u0069\u0061\u006c\u006f\u0067\u005d");
  __319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed?.open
    ? __319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed.addEventListener(
        "\u0063\u006c\u006f\u0073\u0065",
        () => {
          __51e241f4e1ab21052e5631abbf6ddcfbf931e3f1ce73d61a5a8454c170b94eba();
        },
        {
          once: !0,
        },
      )
    : __51e241f4e1ab21052e5631abbf6ddcfbf931e3f1ce73d61a5a8454c170b94eba();
})();
