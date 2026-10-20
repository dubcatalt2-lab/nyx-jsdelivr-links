(() => {
  "use strict";
  const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f = "\u002f\u0061\u0070\u0069\u002f\u0063\u006c\u006f\u0075\u0064\u002d\u0067\u0061\u006d\u0069\u006e\u0067",
    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = {
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
    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = {
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
    __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c = (
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
    ) =>
      new Promise((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) =>
        setTimeout(
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
        ),
      );
  function __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477(
    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = "",
  ) {
    ((__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.notice.textContent =
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f),
      (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.notice.className =
        "\u006e\u006f\u0074\u0069\u0063\u0065" +
        (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
          ? ` ${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53}`
          : "")));
  }
  function __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766(
    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = "",
  ) {
    ((__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.provider.querySelector(
      "\u0062",
    ).textContent = __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f),
      (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.provider.className =
        "\u0070\u0072\u006f\u0076\u0069\u0064\u0065\u0072\u002d\u0073\u0074\u0061\u0074\u0065" +
        (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
          ? ` ${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53}`
          : "")));
  }
  async function __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7(
    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f = !1,
  ) {
    if (
      !__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f &&
      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.token &&
      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.tokenExpiresAt >
        Date.now() + 3e4
    )
      return __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.token;
    const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
      await (async function () {
        if (window.parent === window) return null;
        const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f = `cloud-${Date.now()}-${Math.random().toString(36).slice(2)}`;
        return new Promise((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) => {
          let __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = !1;
          const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c = (
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
            ) => {
              __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 ||
                ((__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = !0),
                clearTimeout(__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766),
                window.removeEventListener(
                  "\u006d\u0065\u0073\u0073\u0061\u0067\u0065",
                  __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
                ),
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53(
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                ));
            },
            __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 = (
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
            ) => {
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.source ===
                window.parent &&
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.origin ===
                  location.origin &&
                "\u006e\u0079\u0078\u003a\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u002d\u0074\u006f\u006b\u0065\u006e\u002d\u0072\u0065\u0073\u0070\u006f\u006e\u0073\u0065" ===
                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.data?.type &&
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.data
                  ?.requestId ===
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f &&
                __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c({
                  available: !0,
                  token: String(
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.data.token ||
                      "",
                  ),
                });
            },
            __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 = setTimeout(
              () => __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c(null),
              2500,
            );
          (window.addEventListener(
            "\u006d\u0065\u0073\u0073\u0061\u0067\u0065",
            __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
          ),
            window.parent.postMessage(
              {
                type: "\u006e\u0079\u0078\u003a\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u002d\u0074\u006f\u006b\u0065\u006e\u002d\u0072\u0065\u0071\u0075\u0065\u0073\u0074",
                requestId: __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
              },
              location.origin,
            ));
        });
      })();
    if (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708?.available)
      return (
        (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.parentAuth = !0),
        (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.token =
          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.token),
        (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.tokenExpiresAt =
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.token
            ? Date.now() + 27e5
            : 0),
        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.token
      );
    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.parentAuth = !1;
    const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
      await (async function () {
        if (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.directAuthPromise)
          return __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.directAuthPromise;
        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.directAuthPromise =
          (async () => {
            const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
              await __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106(
                "\u002f\u0061\u0070\u0069\u002f\u0066\u006f\u0075\u006e\u0064\u0065\u0072\u002d\u0070\u0072\u006f\u0066\u0069\u006c\u0065\u002f\u0061\u0075\u0074\u0068\u002d\u0063\u006f\u006e\u0066\u0069\u0067",
                {
                  cache: "\u006e\u006f\u002d\u0073\u0074\u006f\u0072\u0065",
                },
                !1,
              );
            if (!__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f?.enabled)
              return null;
            const [
                {
                  initializeApp: __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                  getApps: __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
                },
                {
                  getAuth: __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
                  setPersistence:
                    __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
                  browserLocalPersistence:
                    __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766,
                },
              ] = await Promise.all([
                import("\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0077\u0077\u0077\u002e\u0067\u0073\u0074\u0061\u0074\u0069\u0063\u002e\u0063\u006f\u006d\u002f\u0066\u0069\u0072\u0065\u0062\u0061\u0073\u0065\u006a\u0073\u002f\u0031\u0031\u002e\u0031\u0030\u002e\u0030\u002f\u0066\u0069\u0072\u0065\u0062\u0061\u0073\u0065\u002d\u0061\u0070\u0070\u002e\u006a\u0073"),
                import("\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0077\u0077\u0077\u002e\u0067\u0073\u0074\u0061\u0074\u0069\u0063\u002e\u0063\u006f\u006d\u002f\u0066\u0069\u0072\u0065\u0062\u0061\u0073\u0065\u006a\u0073\u002f\u0031\u0031\u002e\u0031\u0030\u002e\u0030\u002f\u0066\u0069\u0072\u0065\u0062\u0061\u0073\u0065\u002d\u0061\u0075\u0074\u0068\u002e\u006a\u0073"),
              ]),
              __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 =
                __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c(
                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708().find(
                    (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
                      "\u006e\u0079\u0078\u002d\u0066\u006f\u0075\u006e\u0064\u0065\u0072\u002d\u006f\u0077\u006e\u0065\u0072" ===
                      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.name,
                  ) ||
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53(
                      {
                        apiKey:
                          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.apiKey,
                        authDomain: `${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.projectId}.firebaseapp.com`,
                        projectId:
                          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.projectId,
                      },
                      "\u006e\u0079\u0078\u002d\u0066\u006f\u0075\u006e\u0064\u0065\u0072\u002d\u006f\u0077\u006e\u0065\u0072",
                    ),
                );
            try {
              await __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477(
                __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7,
                __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766,
              );
            } catch {}
            return (
              "\u0066\u0075\u006e\u0063\u0074\u0069\u006f\u006e" ==
                typeof __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.authStateReady &&
                (await __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.authStateReady()),
              __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7
            );
          })();
        try {
          return await __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.directAuthPromise;
        } catch (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) {
          throw (
            (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.directAuthPromise =
              null),
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f
          );
        }
      })();
    return (
      (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.token =
        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c?.currentUser
          ? await __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.currentUser.getIdToken(
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
            )
          : ""),
      (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.tokenExpiresAt =
        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.token
          ? Date.now() + 27e5
          : 0),
      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.token
    );
  }
  function __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061(
    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = "\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067\u0020\u0072\u0065\u0063\u0065\u0069\u0076\u0065\u0064\u0020\u0061\u006e\u0020\u0069\u006e\u0076\u0061\u006c\u0069\u0064\u0020\u0070\u0072\u006f\u0076\u0069\u0064\u0065\u0072\u0020\u0072\u0065\u0073\u0070\u006f\u006e\u0073\u0065\u002e\u0020\u0054\u0072\u0079\u0020\u0061\u0067\u0061\u0069\u006e\u0020\u0069\u006e\u0020\u0061\u0020\u006d\u006f\u006d\u0065\u006e\u0074\u002e",
  ) {
    const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = String(
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f || "",
    ).trim();
    return !__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 ||
      /<!doctype\s+html|<html\b|<body\b|cloudflare|unexpected token.+json|not valid json/i.test(
        __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
      ) ||
      /<[a-z][\s\S]*>/i.test(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708)
      ? __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
      : __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708
          .replace(/\s+/g, "\u0020")
          .slice(0, 240);
  }
  async function __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106(
    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = {},
    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = !0,
    __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c = !0,
  ) {
    const __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 = new Headers(
      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.headers || {},
    );
    if (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708) {
      const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
        await __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7(
          !__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
        );
      if (!__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) {
        const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f = new Error(
          "\u0053\u0069\u0067\u006e\u0020\u0069\u006e\u0020\u0074\u006f\u0020\u0075\u0073\u0065\u0020\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067\u002e",
        );
        throw (
          (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.status = 401),
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f
        );
      }
      __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.set(
        "\u0041\u0075\u0074\u0068\u006f\u0072\u0069\u007a\u0061\u0074\u0069\u006f\u006e",
        `Bearer ${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f}`,
      );
    }
    const __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 = await fetch(
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
      {
        ...__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
        headers: __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
      },
    );
    let __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e = null;
    if (
      (
        __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.headers.get(
          "\u0063\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0074\u0079\u0070\u0065",
        ) || ""
      ).includes("\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u006a\u0073\u006f\u006e")
    )
      try {
        __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e =
          await __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.json();
      } catch {
        __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e = {
          error: __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061(
            "",
            `Cloud Gaming returned an unreadable response (${__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.status}). Try again in a moment.`,
          ),
        };
      }
    else
      __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e = {
        error: __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061(
          await __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.text(),
          `Cloud Gaming returned an invalid response (${__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.status}). Try again in a moment.`,
        ),
      };
    if (!__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.ok) {
      if (
        401 === __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.status &&
        __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 &&
        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c
      )
        return __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106(
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
          !0,
          !1,
        );
      const __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 = new Error(
        __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061(
          __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e?.error,
          `Cloud Gaming is temporarily unavailable (${__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.status}). Try again in a moment.`,
        ),
      );
      throw (
        (__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.status =
          __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.status),
        __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477
      );
    }
    return __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e;
  }
  function __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e(
    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
    __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
  ) {
    const __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 =
      document.createElement("\u0061\u0072\u0074\u0069\u0063\u006c\u0065");
    __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.className = "\u0067\u0061\u006d\u0065\u002d\u0063\u0061\u0072\u0064";
    const __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 =
      document.createElement("\u0064\u0069\u0076");
    __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.className = "\u0067\u0061\u006d\u0065\u002d\u0061\u0072\u0074";
    const __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 = (function (
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
    ) {
      try {
        const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = new URL(
          String(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f || ""),
          location.href,
        );
        return "\u0068\u0074\u0074\u0070\u0073\u003a" ===
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.protocol
          ? __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.href
          : "";
      } catch {
        return "";
      }
    })(
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.image ||
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.cover,
    );
    if (__bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061) {
      const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
        document.createElement("\u0069\u006d\u0067");
      ((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.src =
        __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061),
        (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.alt = ""),
        (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.loading =
          __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c < 18
            ? "\u0065\u0061\u0067\u0065\u0072"
            : "\u006c\u0061\u007a\u0079"),
        (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.decoding = "\u0061\u0073\u0079\u006e\u0063"),
        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c < 8 &&
          (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.fetchPriority =
            "\u0068\u0069\u0067\u0068"),
        (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.referrerPolicy =
          "\u0073\u0061\u006d\u0065\u002d\u006f\u0072\u0069\u0067\u0069\u006e"),
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.addEventListener(
          "\u0065\u0072\u0072\u006f\u0072",
          () => __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.remove(),
          {
            once: !0,
          },
        ),
        __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.append(
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
        ));
    }
    const __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 =
      document.createElement("\u0064\u0069\u0076");
    __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106.className = "\u0067\u0061\u006d\u0065\u002d\u0063\u006f\u0070\u0079";
    const __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e =
      document.createElement("\u0068\u0033");
    ((__195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e.textContent =
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.name),
      (__195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e.title =
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.name));
    const __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d =
      document.createElement("\u0064\u0069\u0076");
    ((__da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.className = "\u0074\u0061\u0067\u0073"),
      (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.tags || [])
        .slice(0, 3)
        .forEach((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => {
          const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
            document.createElement("\u0073\u0070\u0061\u006e");
          ((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.textContent =
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f),
            __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.append(
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
            ));
        }));
    const __2a7a4197494d8323fea0f175ba188cc62025fc3fcf0d33594407f5566e01d6cc =
      document.createElement("\u0062\u0075\u0074\u0074\u006f\u006e");
    return (
      (__2a7a4197494d8323fea0f175ba188cc62025fc3fcf0d33594407f5566e01d6cc.type = "\u0062\u0075\u0074\u0074\u006f\u006e"),
      (__2a7a4197494d8323fea0f175ba188cc62025fc3fcf0d33594407f5566e01d6cc.className = "\u0070\u006c\u0061\u0079"),
      (__2a7a4197494d8323fea0f175ba188cc62025fc3fcf0d33594407f5566e01d6cc.textContent = "\u0050\u006c\u0061\u0079"),
      (__2a7a4197494d8323fea0f175ba188cc62025fc3fcf0d33594407f5566e01d6cc.disabled =
        !__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.configured ||
        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.launching ||
        Date.now() < __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.retryUntil),
      __2a7a4197494d8323fea0f175ba188cc62025fc3fcf0d33594407f5566e01d6cc.addEventListener(
        "\u0063\u006c\u0069\u0063\u006b",
        () => {
          !(async function (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) {
            if (
              !(
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.launching ||
                Date.now() <
                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.retryUntil
              ) &&
              __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544()
            ) {
              ((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.launching = !0),
                (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.cancelled = !1),
                (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.launchTimedOut =
                  !1),
                (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.launchController =
                  new AbortController()),
                clearTimeout(
                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.launchDeadlineTimer,
                ),
                (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.launchDeadlineTimer =
                  setTimeout(() => {
                    ((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.launchTimedOut =
                      !0),
                      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.launchController?.abort());
                  }, 15e4)),
                __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22(),
                (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.launchLayer.hidden =
                  !1),
                __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e(!0),
                (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.launchTitle.textContent =
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.name),
                __0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba("\u0073\u0074\u0061\u0072\u0074\u0069\u006e\u0067"));
              try {
                const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
                  await __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265(
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                  );
                if (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.cancelled)
                  return;
                if (
                  ("\u0071\u0075\u0065\u0075\u0065" ===
                    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708?.status &&
                    (await __fcacda08e2d45e2c799c7376996c1a442e687015e3b968de16e67d8f572af52f()),
                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.cancelled)
                )
                  return;
                if (!__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.session?.id)
                  throw new Error("\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067\u0020\u0064\u0069\u0064\u0020\u006e\u006f\u0074\u0020\u0063\u0072\u0065\u0061\u0074\u0065\u0020\u0061\u0020\u0073\u0065\u0073\u0073\u0069\u006f\u006e\u002e");
                await __b1f802c665f7bebd541821d1b764ada73ffb4fa83e79200016911a5f9dfb544c();
              } catch (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c) {
                (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.cancelled ||
                  (__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477(
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.launchTimedOut
                      ? "\u0054\u0068\u0065\u0020\u0070\u0072\u006f\u0076\u0069\u0064\u0065\u0072\u0020\u0074\u006f\u006f\u006b\u0020\u0074\u006f\u006f\u0020\u006c\u006f\u006e\u0067\u0020\u0074\u006f\u0020\u0070\u0072\u0065\u0070\u0061\u0072\u0065\u0020\u0074\u0068\u0069\u0073\u0020\u0067\u0061\u006d\u0065\u002e\u0020\u0054\u0072\u0079\u0020\u0061\u0067\u0061\u0069\u006e\u0020\u0069\u006e\u0020\u0061\u0020\u006d\u006f\u006d\u0065\u006e\u0074\u002e"
                      : "\u0041\u0062\u006f\u0072\u0074\u0045\u0072\u0072\u006f\u0072" ===
                          __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c?.name
                        ? "\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0066\u0069\u006e\u0069\u0073\u0068\u0020\u0070\u0072\u0065\u0070\u0061\u0072\u0069\u006e\u0067\u0020\u0074\u0068\u0069\u0073\u0020\u0067\u0061\u006d\u0065\u002e"
                        : __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.message ||
                          "\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u006c\u0061\u0075\u006e\u0063\u0068\u0020\u0074\u0068\u0069\u0073\u0020\u0067\u0061\u006d\u0065\u002e",
                    "\u0065\u0072\u0072\u006f\u0072",
                  ),
                  __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.retryUntil &&
                    (function (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) {
                      ((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.retryUntil =
                        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f),
                        clearInterval(
                          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.retryTimer,
                        ));
                      const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
                        () => {
                          const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
                            Math.max(
                              0,
                              Math.ceil(
                                (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.retryUntil -
                                  Date.now()) /
                                  1e3,
                              ),
                            );
                          if (!__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f)
                            return (
                              clearInterval(
                                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.retryTimer,
                              ),
                              (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.retryTimer =
                                null),
                              (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.retryUntil = 0),
                              __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477(
                                "\u0059\u006f\u0075\u0020\u0063\u0061\u006e\u0020\u0074\u0072\u0079\u0020\u006c\u0061\u0075\u006e\u0063\u0068\u0069\u006e\u0067\u0020\u0061\u0020\u0067\u0061\u006d\u0065\u0020\u0061\u0067\u0061\u0069\u006e\u002e",
                                "\u0072\u0065\u0061\u0064\u0079",
                              ),
                              void __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22()
                            );
                          __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477(
                            `Please wait ${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f} seconds before trying again.`,
                            "\u0065\u0072\u0072\u006f\u0072",
                          );
                        };
                      (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708(),
                        (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.retryTimer =
                          setInterval(
                            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
                            1e3,
                          )),
                        __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22());
                    })(
                      __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.retryUntil,
                    )),
                  await __34168c7d57200d99fd97b1ec555dbf09aa9a16d1cadcc54b0e6b2db76e926d02(!1));
              } finally {
                (clearTimeout(
                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.launchDeadlineTimer,
                ),
                  (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.launchDeadlineTimer =
                    null),
                  (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.launchController =
                    null),
                  (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.launching =
                    !1),
                  (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.launchLayer.hidden =
                    !0),
                  __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22());
              }
            }
          })(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f);
        },
      ),
      __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106.append(
        __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e,
        __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d,
        __2a7a4197494d8323fea0f175ba188cc62025fc3fcf0d33594407f5566e01d6cc,
      ),
      __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.append(
        __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7,
        __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106,
      ),
      __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766
    );
  }
  function __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22() {
    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.network.disabled =
      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.launching;
    const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
        __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.search.value
          .trim()
          .toLowerCase(),
      __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
        __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.tag.value.toLowerCase();
    ((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.filtered =
      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.games.filter(
        (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) =>
          (!__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f ||
            `${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.name} ${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.description} ${(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.tags || []).join("\u0020")}`
              .toLowerCase()
              .includes(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f)) &&
          (!__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c ||
            (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.tags || []).some(
              (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.toLowerCase() ===
                __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
            )),
      )),
      __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.grid.replaceChildren(
        ...__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.filtered.map(
          __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e,
        ),
      ),
      (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.empty.hidden =
        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.filtered.length > 0));
  }
  function __0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba(
    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
  ) {
    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.launchProgress.style.width = `${
      {
        creating_account: 18,
        account_ready: 40,
        requesting_game: 58,
        queue: 70,
        finished_queue: 88,
      }[__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f] || 12
    }%`;
    const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c = {
      creating_account: "\u0050\u0072\u0065\u0070\u0061\u0072\u0069\u006e\u0067\u0020\u0061\u0020\u0070\u0072\u006f\u0076\u0069\u0064\u0065\u0072\u0020\u0073\u0065\u0073\u0073\u0069\u006f\u006e\u2026",
      account_ready: "\u0050\u0072\u006f\u0076\u0069\u0064\u0065\u0072\u0020\u0073\u0065\u0073\u0073\u0069\u006f\u006e\u0020\u0072\u0065\u0061\u0064\u0079\u002e",
      requesting_game: "\u0052\u0065\u0071\u0075\u0065\u0073\u0074\u0069\u006e\u0067\u0020\u0061\u0020\u0067\u0061\u006d\u0065\u0020\u0073\u0065\u0072\u0076\u0065\u0072\u2026",
      queue: `Waiting for a game server${Number.isFinite(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) ? ` \xb7 position ${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53}` : ""}.`,
      finished_queue: "\u0047\u0061\u006d\u0065\u0020\u0073\u0065\u0072\u0076\u0065\u0072\u0020\u0061\u0063\u0071\u0075\u0069\u0072\u0065\u0064\u002e\u0020\u0053\u0074\u0061\u0072\u0074\u0069\u006e\u0067\u0020\u0073\u0074\u0072\u0065\u0061\u006d\u2026",
    };
    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.launchStatus.textContent =
      __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c[
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f
      ] || "\u0043\u006f\u006e\u006e\u0065\u0063\u0074\u0069\u006e\u0067\u0020\u0074\u006f\u0020\u0074\u0068\u0065\u0020\u0063\u006c\u006f\u0075\u0064\u0020\u0070\u0072\u006f\u0076\u0069\u0064\u0065\u0072\u2026";
  }
  function __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e(
    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
  ) {
    (document.documentElement.classList.toggle(
      "\u0063\u006c\u006f\u0075\u0064\u002d\u0073\u0065\u0073\u0073\u0069\u006f\u006e\u002d\u0061\u0063\u0074\u0069\u0076\u0065",
      Boolean(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f),
    ),
      window.parent !== window &&
        window.parent.postMessage(
          {
            type: "\u006e\u0079\u0078\u003a\u0063\u006c\u006f\u0075\u0064\u002d\u0070\u006c\u0061\u0079\u0065\u0072",
            active: Boolean(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f),
          },
          location.origin,
        ));
  }
  async function __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265(
    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
    __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c = !0,
  ) {
    const __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 = new Headers({
        "\u0043\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0054\u0079\u0070\u0065": "\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u006a\u0073\u006f\u006e",
      }),
      __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 =
        await __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7(
          !__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
        );
    if (!__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766)
      throw new Error("\u0053\u0069\u0067\u006e\u0020\u0069\u006e\u0020\u0074\u006f\u0020\u0075\u0073\u0065\u0020\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067\u002e");
    __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.set(
      "\u0041\u0075\u0074\u0068\u006f\u0072\u0069\u007a\u0061\u0074\u0069\u006f\u006e",
      `Bearer ${__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766}`,
    );
    const __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 = await fetch(
      `${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f}/sessions`,
      {
        method: "\u0050\u004f\u0053\u0054",
        headers: __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
        body: JSON.stringify({
          gameKey: __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.key,
        }),
        signal:
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.launchController
            ?.signal,
      },
    );
    if (
      401 === __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106.status &&
      __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c
    )
      return __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265(
        __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
        !1,
      );
    if (!__78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106.ok) {
      let __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f = {};
      try {
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
          await __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106.json();
      } catch {}
      const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = new Error(
        __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061(
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.error,
          `Cloud Gaming is temporarily unavailable (${__78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106.status}). Try again in a moment.`,
        ),
      );
      if (429 === __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106.status) {
        const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
            __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106.headers.get(
              "\u0052\u0065\u0074\u0072\u0079\u002d\u0041\u0066\u0074\u0065\u0072",
            ),
          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = Number(
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
          ),
          __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f &&
            Number.isFinite(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708)
              ? Date.now() +
                1e3 *
                  Math.max(0, __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708)
              : Date.parse(
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f || "",
                );
        Number.isFinite(__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c) &&
          __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c > Date.now() &&
          (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.retryUntil =
            __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c);
      }
      throw __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53;
    }
    if (!__78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106.body)
      throw new Error("\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067\u0020\u0064\u0069\u0064\u0020\u006e\u006f\u0074\u0020\u0072\u0065\u0074\u0075\u0072\u006e\u0020\u0073\u0065\u0073\u0073\u0069\u006f\u006e\u0020\u0070\u0072\u006f\u0067\u0072\u0065\u0073\u0073\u002e");
    const __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e =
        __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106.body.getReader(),
      __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22 = new TextDecoder();
    let __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e = "",
      __fcacda08e2d45e2c799c7376996c1a442e687015e3b968de16e67d8f572af52f = null;
    for (;;) {
      const {
        done: __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
        value: __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
      } = await __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e.read();
      __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e +=
        __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22.decode(
          __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c || new Uint8Array(),
          {
            stream: !__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
          },
        );
      const __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 =
        __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e.split(/\r?\n/);
      __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e =
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f
          ? ""
          : __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.pop() || "";
      for (const __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 of __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477) {
        if (!__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.trim()) continue;
        let __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f;
        try {
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f = JSON.parse(
            __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766,
          );
        } catch {
          continue;
        }
        if (
          (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.id &&
            (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.session = {
              id: __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.id,
              gameKey: __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.key,
              gameName: __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.name,
              state:
                "\u0071\u0075\u0065\u0075\u0065" ===
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.status
                  ? "\u0071\u0075\u0065\u0075\u0065\u0064"
                  : "\u0072\u0065\u0061\u0064\u0079",
            }),
          __0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba(
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.status,
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.queuePosition,
          ),
          (__fcacda08e2d45e2c799c7376996c1a442e687015e3b968de16e67d8f572af52f =
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f),
          "\u0065\u0072\u0072\u006f\u0072" === __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.status)
        )
          throw new Error(
            __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061(
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.error,
              "\u0054\u0068\u0065\u0020\u0063\u006c\u006f\u0075\u0064\u0020\u0070\u0072\u006f\u0076\u0069\u0064\u0065\u0072\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0070\u0072\u0065\u0070\u0061\u0072\u0065\u0020\u0074\u0068\u0069\u0073\u0020\u0067\u0061\u006d\u0065\u002e\u0020\u0054\u0072\u0079\u0020\u0061\u0067\u0061\u0069\u006e\u0020\u0069\u006e\u0020\u0061\u0020\u006d\u006f\u006d\u0065\u006e\u0074\u002e",
            ),
          );
      }
      if (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) break;
    }
    return __fcacda08e2d45e2c799c7376996c1a442e687015e3b968de16e67d8f572af52f;
  }
  async function __fcacda08e2d45e2c799c7376996c1a442e687015e3b968de16e67d8f572af52f() {
    for (
      ;
      !__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.cancelled &&
      "\u0071\u0075\u0065\u0075\u0065\u0064" ===
        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.session?.state;

    ) {
      if (
        (await __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c(4e3),
        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.cancelled)
      )
        return;
      const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
        await __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106(
          `${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f}/sessions/${encodeURIComponent(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.session.id)}/queue`,
        );
      if (
        ((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.session =
          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.session ||
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.session),
        __0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba(
          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.status,
          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.queuePosition,
        ),
        "\u0066\u0069\u006e\u0069\u0073\u0068\u0065\u0064\u005f\u0071\u0075\u0065\u0075\u0065" ===
          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.status ||
          "\u0072\u0065\u0061\u0064\u0079" ===
            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.session.state)
      )
        return;
    }
    if (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.cancelled)
      throw new Error("\u004c\u0061\u0075\u006e\u0063\u0068\u0020\u0063\u0061\u006e\u0063\u0065\u006c\u006c\u0065\u0064\u002e");
  }
  async function __b1f802c665f7bebd541821d1b764ada73ffb4fa83e79200016911a5f9dfb544c() {
    const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
      await __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106(
        `${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f}/sessions/${encodeURIComponent(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.session.id)}/start`,
        {
          method: "\u0050\u004f\u0053\u0054",
        },
      );
    if (
      ((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.session =
        __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.session),
      !__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.session?.embedUrl)
    )
      throw new Error("\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067\u0020\u0064\u0069\u0064\u0020\u006e\u006f\u0074\u0020\u0072\u0065\u0074\u0075\u0072\u006e\u0020\u0061\u0020\u0070\u006c\u0061\u0079\u0065\u0072\u0020\u0061\u0064\u0064\u0072\u0065\u0073\u0073\u002e");
    __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d();
  }
  function __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544() {
    let __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f;
    try {
      if ("\u0066\u0075\u006e\u0063\u0074\u0069\u006f\u006e" != typeof RTCPeerConnection) throw new Error();
      return (
        (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f = new RTCPeerConnection(
          {
            iceServers: [],
          },
        )),
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.createDataChannel(
          "\u0073\u0075\u0070\u0070\u006f\u0072\u0074\u002d\u0063\u0068\u0065\u0063\u006b",
        ),
        !0
      );
    } catch {
      return (
        __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477(
          "\u0057\u0065\u0062\u0052\u0054\u0043\u0020\u0069\u0073\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u0020\u0069\u006e\u0020\u0074\u0068\u0069\u0073\u0020\u0062\u0072\u006f\u0077\u0073\u0065\u0072\u002e\u0020\u0043\u006c\u006f\u0075\u0064\u0020\u0073\u0074\u0072\u0065\u0061\u006d\u0069\u006e\u0067\u0020\u006e\u0065\u0065\u0064\u0073\u0020\u0069\u0074\u002e\u0020\u0054\u0072\u0079\u0020\u0042\u0072\u006f\u0077\u0073\u0065\u0072\u0020\u0067\u0061\u006d\u0065\u0073\u002c\u0020\u0061\u006e\u006f\u0074\u0068\u0065\u0072\u0020\u0062\u0072\u006f\u0077\u0073\u0065\u0072\u002c\u0020\u006f\u0072\u0020\u0061\u0073\u006b\u0020\u0079\u006f\u0075\u0072\u0020\u0064\u0065\u0076\u0069\u0063\u0065\u0020\u0061\u0064\u006d\u0069\u006e\u0069\u0073\u0074\u0072\u0061\u0074\u006f\u0072\u0020\u0074\u006f\u0020\u0065\u006e\u0061\u0062\u006c\u0065\u0020\u0069\u0074\u002e",
          "\u0065\u0072\u0072\u006f\u0072",
        ),
        !1
      );
    } finally {
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f?.close();
    }
  }
  function __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d() {
    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.playerTitle.textContent =
      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.session.gameName ||
      "\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067";
    const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f = new URL(
      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.session.embedUrl,
      location.href,
    );
    ("\u0072\u0065\u0073\u0074\u0072\u0069\u0063\u0074\u0065\u0064" ===
    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.network.value
      ? __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.searchParams.set(
          "\u006e\u0065\u0074\u0077\u006f\u0072\u006b",
          "\u0072\u0065\u0073\u0074\u0072\u0069\u0063\u0074\u0065\u0064",
        )
      : __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.searchParams.delete(
          "\u006e\u0065\u0074\u0077\u006f\u0072\u006b",
        ),
      (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.player.src =
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.href),
      (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.playerLayer.hidden = !1),
      (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.launchLayer.hidden = !0),
      __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e(!0),
      (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.pingFailures = 0),
      clearInterval(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.pingTimer),
      (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.pingTimer = setInterval(
        () => {
          __3c22b3f87a34fd589b28089a6e1fe9407580da47a00ca8a13ab4e306192fb487();
        },
        15e3,
      )),
      clearInterval(
        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.elapsedTimer,
      ),
      (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.elapsedTimer =
        setInterval(__2a7a4197494d8323fea0f175ba188cc62025fc3fcf0d33594407f5566e01d6cc, 1e3)),
      __2a7a4197494d8323fea0f175ba188cc62025fc3fcf0d33594407f5566e01d6cc(),
      __3c22b3f87a34fd589b28089a6e1fe9407580da47a00ca8a13ab4e306192fb487());
  }
  function __2a7a4197494d8323fea0f175ba188cc62025fc3fcf0d33594407f5566e01d6cc() {
    if (!__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.session?.startedAtMs)
      return void (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.playerTime.textContent =
        "\u0043\u006f\u006e\u006e\u0065\u0063\u0074\u0065\u0064");
    const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f = Math.max(
        0,
        Math.floor(
          (Date.now() -
            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.session
              .startedAtMs) /
            1e3,
        ),
      ),
      __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c = Math.max(
        0,
        Number(
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.session.maxSeconds ||
            0,
        ),
      );
    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.playerTime.textContent =
      __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c
        ? `${Math.floor(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f / 60)}:${String(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f % 60).padStart(2, "\u0030")} / ${Math.floor(__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c / 60)}:${String(__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c % 60).padStart(2, "\u0030")}`
        : `${Math.floor(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f / 60)}:${String(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f % 60).padStart(2, "\u0030")}`;
  }
  async function __3c22b3f87a34fd589b28089a6e1fe9407580da47a00ca8a13ab4e306192fb487() {
    if (
      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.session?.id &&
      "\u0061\u0063\u0074\u0069\u0076\u0065" === __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.session.state
    )
      try {
        const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
          await __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106(
            `${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f}/sessions/${encodeURIComponent(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.session.id)}/ping`,
            {
              method: "\u0050\u004f\u0053\u0054",
            },
          );
        ((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.pingFailures = 0),
          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.sessionTimeLimitSeconds &&
            ((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.session.maxSeconds =
              __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.sessionTimeLimitSeconds),
            (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.session.startedAtMs =
              Date.now() -
              1e3 *
                __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.sessionTimeUsedSeconds),
            __2a7a4197494d8323fea0f175ba188cc62025fc3fcf0d33594407f5566e01d6cc()));
      } catch (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708) {
        ((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.pingFailures += 1),
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.pingFailures >= 2 &&
            __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477(
              __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.message ||
                "\u0054\u0068\u0065\u0020\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067\u0020\u0073\u0065\u0073\u0073\u0069\u006f\u006e\u0020\u006c\u006f\u0073\u0074\u0020\u0069\u0074\u0073\u0020\u006b\u0065\u0065\u0070\u0061\u006c\u0069\u0076\u0065\u002e",
              "\u0065\u0072\u0072\u006f\u0072",
            ));
      }
  }
  async function __34168c7d57200d99fd97b1ec555dbf09aa9a16d1cadcc54b0e6b2db76e926d02(
    __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c = !0,
  ) {
    const __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 =
      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.session;
    if (
      ((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.cancelled = !0),
      clearTimeout(
        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.launchDeadlineTimer,
      ),
      (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.launchDeadlineTimer =
        null),
      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.launchController?.abort(),
      (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.session = null),
      clearInterval(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.pingTimer),
      clearInterval(
        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.elapsedTimer,
      ),
      (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.pingTimer = null),
      (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.elapsedTimer = null),
      __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.player.removeAttribute(
        "\u0073\u0072\u0063",
      ),
      (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.playerLayer.hidden = !0),
      __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e(!1),
      __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766?.id)
    )
      try {
        await __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106(
          `${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f}/sessions/${encodeURIComponent(__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.id)}`,
          {
            method: "\u0044\u0045\u004c\u0045\u0054\u0045",
          },
        );
      } catch {}
    __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c &&
      __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477(
        "\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067\u0020\u0073\u0065\u0073\u0073\u0069\u006f\u006e\u0020\u0065\u006e\u0064\u0065\u0064\u002e",
        "\u0072\u0065\u0061\u0064\u0079",
      );
  }
  async function __f2e5429bdd2ce4cd74b00d064941e11cca8a1f7f3d979f1aa03955b7bbd1e125() {
    try {
      __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.network.value =
        "\u0072\u0065\u0073\u0074\u0072\u0069\u0063\u0074\u0065\u0064" === localStorage.getItem("\u006e\u0079\u0078\u002d\u0063\u006c\u006f\u0075\u0064\u002d\u006e\u0065\u0074\u0077\u006f\u0072\u006b") ? "\u0072\u0065\u0073\u0074\u0072\u0069\u0063\u0074\u0065\u0064" : "\u0061\u0075\u0074\u006f";
    } catch {}
    (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.network.addEventListener(
      "\u0063\u0068\u0061\u006e\u0067\u0065",
      () => {
        try {
          localStorage.setItem(
            "\u006e\u0079\u0078\u002d\u0063\u006c\u006f\u0075\u0064\u002d\u006e\u0065\u0074\u0077\u006f\u0072\u006b",
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.network.value,
          );
        } catch {}
      },
    ),
      __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.search.addEventListener(
        "\u0069\u006e\u0070\u0075\u0074",
        __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22,
      ),
      __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.tag.addEventListener(
        "\u0063\u0068\u0061\u006e\u0067\u0065",
        __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22,
      ),
      __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.cancel.addEventListener(
        "\u0063\u006c\u0069\u0063\u006b",
        () => {
          __34168c7d57200d99fd97b1ec555dbf09aa9a16d1cadcc54b0e6b2db76e926d02(!1);
        },
      ),
      __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.close.addEventListener(
        "\u0063\u006c\u0069\u0063\u006b",
        () => {
          __34168c7d57200d99fd97b1ec555dbf09aa9a16d1cadcc54b0e6b2db76e926d02();
        },
      ),
      __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.fullscreen.addEventListener(
        "\u0063\u006c\u0069\u0063\u006b",
        () =>
          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.playerLayer.requestFullscreen?.(),
      ),
      document.addEventListener("\u0076\u0069\u0073\u0069\u0062\u0069\u006c\u0069\u0074\u0079\u0063\u0068\u0061\u006e\u0067\u0065", () => {
        document.hidden || __3c22b3f87a34fd589b28089a6e1fe9407580da47a00ca8a13ab4e306192fb487();
      }),
      addEventListener("\u006f\u006e\u006c\u0069\u006e\u0065", () => {
        __3c22b3f87a34fd589b28089a6e1fe9407580da47a00ca8a13ab4e306192fb487();
      }),
      addEventListener(
        "\u006d\u0065\u0073\u0073\u0061\u0067\u0065",
        (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => {
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.origin ===
            location.origin &&
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.source ===
              __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.player
                .contentWindow &&
            "\u006e\u0079\u0078\u003a\u0063\u006c\u006f\u0075\u0064\u002d\u0070\u006c\u0061\u0079\u0065\u0072\u002d\u0065\u0072\u0072\u006f\u0072" ===
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.data?.type &&
            (__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477(
              __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061(
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.data.message,
                "\u0054\u0068\u0065\u0020\u0063\u006c\u006f\u0075\u0064\u0020\u0073\u0074\u0072\u0065\u0061\u006d\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0070\u006c\u0061\u0079\u0020\u006f\u006e\u0020\u0074\u0068\u0069\u0073\u0020\u0064\u0065\u0076\u0069\u0063\u0065\u002e",
              ),
              "\u0065\u0072\u0072\u006f\u0072",
            ),
            __34168c7d57200d99fd97b1ec555dbf09aa9a16d1cadcc54b0e6b2db76e926d02(!1));
        },
      ),
      document
        .querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0068\u006f\u006d\u0065\u005d")
        .addEventListener(
          "\u0063\u006c\u0069\u0063\u006b",
          (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => {
            window.parent !== window &&
              (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.preventDefault(),
              window.parent.postMessage(
                {
                  type: "\u006e\u0079\u0078\u003a\u0067\u006f\u002d\u0068\u006f\u006d\u0065",
                },
                location.origin,
              ));
          },
        ));
    try {
      const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
        await __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106(
          `${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f}/status`,
          {},
          !1,
        );
      if (!0 === __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.maintenance)
        return (
          (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.configured = !1),
          __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766(
            "\u0053\u0074\u0072\u0061\u0074\u0075\u0073\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065",
            "\u0065\u0072\u0072\u006f\u0072",
          ),
          __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477(
            "\u0053\u0074\u0072\u0061\u0074\u0075\u0073\u0020\u0069\u0073\u0020\u0063\u0075\u0072\u0072\u0065\u006e\u0074\u006c\u0079\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u002e\u0020\u004c\u0075\u006e\u0061\u0020\u0069\u0073\u0020\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u0020\u0061\u0062\u006f\u0076\u0065\u002e",
            "\u0065\u0072\u0072\u006f\u0072",
          ),
          (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.network.disabled =
            !0),
          (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.search.disabled = !0),
          void (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.tag.disabled =
            !0)
        );
      if (!__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544())
        return void __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766(
          "\u0053\u0074\u0072\u0065\u0061\u006d\u0069\u006e\u0067\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065",
          "\u0065\u0072\u0072\u006f\u0072",
        );
      if (
        ((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.configured =
          !0 === __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.configured),
        __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766(
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.configured
            ? "\u0053\u0074\u0072\u0061\u0074\u0075\u0073\u0020\u0072\u0065\u0061\u0064\u0079"
            : "\u0053\u0065\u0074\u0075\u0070\u0020\u0072\u0065\u0071\u0075\u0069\u0072\u0065\u0064",
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.configured
            ? "\u0072\u0065\u0061\u0064\u0079"
            : "\u0065\u0072\u0072\u006f\u0072",
        ),
        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.configured ||
          __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477(
            __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.setupMessage ||
              "\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067\u0020\u006e\u0065\u0065\u0064\u0073\u0020\u0061\u0020\u0063\u006f\u006e\u0066\u0069\u0067\u0075\u0072\u0065\u0064\u0020\u0070\u0072\u006f\u0076\u0069\u0064\u0065\u0072\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u002e\u0020\u0041\u0073\u006b\u0020\u0074\u0068\u0065\u0020\u006f\u0077\u006e\u0065\u0072\u0020\u0074\u006f\u0020\u0066\u0069\u006e\u0069\u0073\u0068\u0020\u0073\u0065\u0074\u0075\u0070\u002e",
            "\u0065\u0072\u0072\u006f\u0072",
          ),
        !(await __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7()))
      )
        throw new Error("\u0053\u0069\u0067\u006e\u0020\u0069\u006e\u0020\u0074\u006f\u0020\u0076\u0069\u0065\u0077\u0020\u0061\u006e\u0064\u0020\u006c\u0061\u0075\u006e\u0063\u0068\u0020\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067\u0020\u0074\u0069\u0074\u006c\u0065\u0073\u002e");
      const __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 =
        await __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106(
          `${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f}/catalog`,
        );
      ((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.games = Array.isArray(
        __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061.games,
      )
        ? __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061.games
        : []),
        (function () {
          const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f = [
            ...new Set(
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.games.flatMap(
                (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.tags || [],
              ),
            ),
          ].sort(
            (
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
            ) =>
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.localeCompare(
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
              ),
          );
          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.tag.replaceChildren(
            new Option("\u0041\u006c\u006c\u0020\u0063\u0061\u0074\u0065\u0067\u006f\u0072\u0069\u0065\u0073", ""),
            ...__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.map(
              (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
                new Option(
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                ),
            ),
          );
        })(),
        __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22(),
        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.configured &&
          __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477(
            `${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.games.length} games available.`,
            "\u0072\u0065\u0061\u0064\u0079",
          ),
        await (async function () {
          const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
            await __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106(
              `${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f}/session`,
            );
          if (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.session)
            if (
              ((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.session =
                __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.session),
              "\u0061\u0063\u0074\u0069\u0076\u0065" ===
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.session.state &&
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.session.embedUrl)
            )
              __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d();
            else if (
              "\u0071\u0075\u0065\u0075\u0065\u0064" ===
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.session.state
            ) {
              ((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.launching = !0),
                (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.launchLayer.hidden =
                  !1),
                __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e(!0),
                (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.launchTitle.textContent =
                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.session
                    .gameName || "\u0043\u006c\u006f\u0075\u0064\u0020\u0067\u0061\u006d\u0065"));
              try {
                (await __fcacda08e2d45e2c799c7376996c1a442e687015e3b968de16e67d8f572af52f(),
                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.cancelled ||
                    (await __b1f802c665f7bebd541821d1b764ada73ffb4fa83e79200016911a5f9dfb544c()));
              } finally {
                ((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.launching =
                  !1),
                  (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.launchLayer.hidden =
                    !0),
                  __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22());
              }
            } else if (
              "\u0072\u0065\u0061\u0064\u0079" ===
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.session.state
            ) {
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.launching = !0;
              try {
                await __b1f802c665f7bebd541821d1b764ada73ffb4fa83e79200016911a5f9dfb544c();
              } finally {
                ((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.launching =
                  !1),
                  __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22());
              }
            }
        })());
    } catch (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c) {
      (__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477(
        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.message ||
          "\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067\u0020\u0069\u0073\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u002e",
        "\u0065\u0072\u0072\u006f\u0072",
      ),
        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.games.length ||
          (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.empty.hidden = !1));
    }
  }
  const __c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4 =
    document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u006c\u0075\u006e\u0061\u002d\u0064\u0069\u0061\u006c\u006f\u0067\u005d");
  __c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4?.open
    ? __c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4.addEventListener(
        "\u0063\u006c\u006f\u0073\u0065",
        () => {
          __f2e5429bdd2ce4cd74b00d064941e11cca8a1f7f3d979f1aa03955b7bbd1e125();
        },
        {
          once: !0,
        },
      )
    : __f2e5429bdd2ce4cd74b00d064941e11cca8a1f7f3d979f1aa03955b7bbd1e125();
})();
