(() => {
  "use strict";
  const __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 = "\u002f\u0061\u0070\u0069\u002f\u0063\u006c\u006f\u0075\u0064\u002d\u0067\u0061\u006d\u0069\u006e\u0067",
    __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede = {
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
    __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f = {
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
    __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 = (
      __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
    ) =>
      new Promise((__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede) =>
        setTimeout(
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
        ),
      );
  function __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579(
    __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
    __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede = "",
  ) {
    ((__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.notice.textContent =
      __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28),
      (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.notice.className =
        "\u006e\u006f\u0074\u0069\u0063\u0065" +
        (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede
          ? ` ${__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede}`
          : "")));
  }
  function __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45(
    __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
    __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede = "",
  ) {
    ((__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.provider.querySelector(
      "\u0062",
    ).textContent = __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28),
      (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.provider.className =
        "\u0070\u0072\u006f\u0076\u0069\u0064\u0065\u0072\u002d\u0073\u0074\u0061\u0074\u0065" +
        (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede
          ? ` ${__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede}`
          : "")));
  }
  async function __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d(
    __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 = !1,
  ) {
    if (
      !__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 &&
      __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.token &&
      __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.tokenExpiresAt >
        Date.now() + 3e4
    )
      return __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.token;
    const __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f =
      await (async function () {
        if (window.parent === window) return null;
        const __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 = `cloud-${Date.now()}-${Math.random().toString(36).slice(2)}`;
        return new Promise((__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede) => {
          let __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f = !1;
          const __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 = (
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
            ) => {
              __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f ||
                ((__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f = !0),
                clearTimeout(__dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45),
                window.removeEventListener(
                  "\u006d\u0065\u0073\u0073\u0061\u0067\u0065",
                  __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579,
                ),
                __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede(
                  __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
                ));
            },
            __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 = (
              __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
            ) => {
              __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.source ===
                window.parent &&
                __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.origin ===
                  location.origin &&
                "\u006e\u0079\u0078\u003a\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u002d\u0074\u006f\u006b\u0065\u006e\u002d\u0072\u0065\u0073\u0070\u006f\u006e\u0073\u0065" ===
                  __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.data?.type &&
                __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.data
                  ?.requestId ===
                  __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 &&
                __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0({
                  available: !0,
                  token: String(
                    __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.data.token ||
                      "",
                  ),
                });
            },
            __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45 = setTimeout(
              () => __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0(null),
              2500,
            );
          (window.addEventListener(
            "\u006d\u0065\u0073\u0073\u0061\u0067\u0065",
            __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579,
          ),
            window.parent.postMessage(
              {
                type: "\u006e\u0079\u0078\u003a\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u002d\u0074\u006f\u006b\u0065\u006e\u002d\u0072\u0065\u0071\u0075\u0065\u0073\u0074",
                requestId: __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
              },
              location.origin,
            ));
        });
      })();
    if (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f?.available)
      return (
        (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.parentAuth = !0),
        (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.token =
          __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.token),
        (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.tokenExpiresAt =
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.token
            ? Date.now() + 27e5
            : 0),
        __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.token
      );
    __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.parentAuth = !1;
    const __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 =
      await (async function () {
        if (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.directAuthPromise)
          return __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.directAuthPromise;
        __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.directAuthPromise =
          (async () => {
            const __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 =
              await __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2(
                "\u002f\u0061\u0070\u0069\u002f\u0066\u006f\u0075\u006e\u0064\u0065\u0072\u002d\u0070\u0072\u006f\u0066\u0069\u006c\u0065\u002f\u0061\u0075\u0074\u0068\u002d\u0063\u006f\u006e\u0066\u0069\u0067",
                {
                  cache: "\u006e\u006f\u002d\u0073\u0074\u006f\u0072\u0065",
                },
                !1,
              );
            if (!__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28?.enabled)
              return null;
            const [
                {
                  initializeApp: __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
                  getApps: __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
                },
                {
                  getAuth: __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0,
                  setPersistence:
                    __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579,
                  browserLocalPersistence:
                    __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45,
                },
              ] = await Promise.all([
                import("\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0077\u0077\u0077\u002e\u0067\u0073\u0074\u0061\u0074\u0069\u0063\u002e\u0063\u006f\u006d\u002f\u0066\u0069\u0072\u0065\u0062\u0061\u0073\u0065\u006a\u0073\u002f\u0031\u0031\u002e\u0031\u0030\u002e\u0030\u002f\u0066\u0069\u0072\u0065\u0062\u0061\u0073\u0065\u002d\u0061\u0070\u0070\u002e\u006a\u0073"),
                import("\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0077\u0077\u0077\u002e\u0067\u0073\u0074\u0061\u0074\u0069\u0063\u002e\u0063\u006f\u006d\u002f\u0066\u0069\u0072\u0065\u0062\u0061\u0073\u0065\u006a\u0073\u002f\u0031\u0031\u002e\u0031\u0030\u002e\u0030\u002f\u0066\u0069\u0072\u0065\u0062\u0061\u0073\u0065\u002d\u0061\u0075\u0074\u0068\u002e\u006a\u0073"),
              ]),
              __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d =
                __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0(
                  __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f().find(
                    (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) =>
                      "\u006e\u0079\u0078\u002d\u0066\u006f\u0075\u006e\u0064\u0065\u0072\u002d\u006f\u0077\u006e\u0065\u0072" ===
                      __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.name,
                  ) ||
                    __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede(
                      {
                        apiKey:
                          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.apiKey,
                        authDomain: `${__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.projectId}.firebaseapp.com`,
                        projectId:
                          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.projectId,
                      },
                      "\u006e\u0079\u0078\u002d\u0066\u006f\u0075\u006e\u0064\u0065\u0072\u002d\u006f\u0077\u006e\u0065\u0072",
                    ),
                );
            try {
              await __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579(
                __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d,
                __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45,
              );
            } catch {}
            return (
              "\u0066\u0075\u006e\u0063\u0074\u0069\u006f\u006e" ==
                typeof __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d.authStateReady &&
                (await __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d.authStateReady()),
              __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d
            );
          })();
        try {
          return await __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.directAuthPromise;
        } catch (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) {
          throw (
            (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.directAuthPromise =
              null),
            __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28
          );
        }
      })();
    return (
      (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.token =
        __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0?.currentUser
          ? await __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.currentUser.getIdToken(
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
            )
          : ""),
      (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.tokenExpiresAt =
        __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.token
          ? Date.now() + 27e5
          : 0),
      __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.token
    );
  }
  function __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd(
    __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
    __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede = "\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067\u0020\u0072\u0065\u0063\u0065\u0069\u0076\u0065\u0064\u0020\u0061\u006e\u0020\u0069\u006e\u0076\u0061\u006c\u0069\u0064\u0020\u0070\u0072\u006f\u0076\u0069\u0064\u0065\u0072\u0020\u0072\u0065\u0073\u0070\u006f\u006e\u0073\u0065\u002e\u0020\u0054\u0072\u0079\u0020\u0061\u0067\u0061\u0069\u006e\u0020\u0069\u006e\u0020\u0061\u0020\u006d\u006f\u006d\u0065\u006e\u0074\u002e",
  ) {
    const __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f = String(
      __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 || "",
    ).trim();
    return !__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f ||
      /<!doctype\s+html|<html\b|<body\b|cloudflare|unexpected token.+json|not valid json/i.test(
        __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
      ) ||
      /<[a-z][\s\S]*>/i.test(__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f)
      ? __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede
      : __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f
          .replace(/\s+/g, "\u0020")
          .slice(0, 240);
  }
  async function __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2(
    __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
    __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede = {},
    __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f = !0,
    __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 = !0,
  ) {
    const __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 = new Headers(
      __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.headers || {},
    );
    if (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f) {
      const __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 =
        await __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d(
          !__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0,
        );
      if (!__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) {
        const __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 = new Error(
          "\u0053\u0069\u0067\u006e\u0020\u0069\u006e\u0020\u0074\u006f\u0020\u0075\u0073\u0065\u0020\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067\u002e",
        );
        throw (
          (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.status = 401),
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28
        );
      }
      __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.set(
        "\u0041\u0075\u0074\u0068\u006f\u0072\u0069\u007a\u0061\u0074\u0069\u006f\u006e",
        `Bearer ${__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28}`,
      );
    }
    const __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45 = await fetch(
      __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
      {
        ...__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
        headers: __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579,
      },
    );
    let __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5 = null;
    if (
      (
        __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.headers.get(
          "\u0063\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0074\u0079\u0070\u0065",
        ) || ""
      ).includes("\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u006a\u0073\u006f\u006e")
    )
      try {
        __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5 =
          await __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.json();
      } catch {
        __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5 = {
          error: __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd(
            "",
            `Cloud Gaming returned an unreadable response (${__dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.status}). Try again in a moment.`,
          ),
        };
      }
    else
      __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5 = {
        error: __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd(
          await __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.text(),
          `Cloud Gaming returned an invalid response (${__dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.status}). Try again in a moment.`,
        ),
      };
    if (!__dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.ok) {
      if (
        401 === __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.status &&
        __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f &&
        __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0
      )
        return __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2(
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
          !0,
          !1,
        );
      const __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 = new Error(
        __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd(
          __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5?.error,
          `Cloud Gaming is temporarily unavailable (${__dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.status}). Try again in a moment.`,
        ),
      );
      throw (
        (__64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.status =
          __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.status),
        __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579
      );
    }
    return __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5;
  }
  function __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5(
    __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
    __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0,
  ) {
    const __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45 =
      document.createElement("\u0061\u0072\u0074\u0069\u0063\u006c\u0065");
    __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.className = "\u0067\u0061\u006d\u0065\u002d\u0063\u0061\u0072\u0064";
    const __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d =
      document.createElement("\u0064\u0069\u0076");
    __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d.className = "\u0067\u0061\u006d\u0065\u002d\u0061\u0072\u0074";
    const __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd = (function (
      __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
    ) {
      try {
        const __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede = new URL(
          String(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 || ""),
          location.href,
        );
        return "\u0068\u0074\u0074\u0070\u0073\u003a" ===
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.protocol
          ? __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.href
          : "";
      } catch {
        return "";
      }
    })(
      __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.image ||
        __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.cover,
    );
    if (__23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd) {
      const __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 =
        document.createElement("\u0069\u006d\u0067");
      ((__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.src =
        __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd),
        (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.alt = ""),
        (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.loading =
          __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 < 18
            ? "\u0065\u0061\u0067\u0065\u0072"
            : "\u006c\u0061\u007a\u0079"),
        (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.decoding = "\u0061\u0073\u0079\u006e\u0063"),
        __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 < 8 &&
          (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.fetchPriority =
            "\u0068\u0069\u0067\u0068"),
        (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.referrerPolicy =
          "\u0073\u0061\u006d\u0065\u002d\u006f\u0072\u0069\u0067\u0069\u006e"),
        __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.addEventListener(
          "\u0065\u0072\u0072\u006f\u0072",
          () => __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.remove(),
          {
            once: !0,
          },
        ),
        __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d.append(
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
        ));
    }
    const __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2 =
      document.createElement("\u0064\u0069\u0076");
    __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2.className = "\u0067\u0061\u006d\u0065\u002d\u0063\u006f\u0070\u0079";
    const __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5 =
      document.createElement("\u0068\u0033");
    ((__b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5.textContent =
      __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.name),
      (__b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5.title =
        __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.name));
    const __9eac1509c6163c112a6215e9ce9abea4282b8296ba01c2e48e80f13fce188307 =
      document.createElement("\u0064\u0069\u0076");
    ((__9eac1509c6163c112a6215e9ce9abea4282b8296ba01c2e48e80f13fce188307.className = "\u0074\u0061\u0067\u0073"),
      (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.tags || [])
        .slice(0, 3)
        .forEach((__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) => {
          const __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede =
            document.createElement("\u0073\u0070\u0061\u006e");
          ((__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.textContent =
            __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28),
            __9eac1509c6163c112a6215e9ce9abea4282b8296ba01c2e48e80f13fce188307.append(
              __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
            ));
        }));
    const __48a3184232b3390568cee50f4492a0f7d69d1bac2788bd6b569baf9f97e67d82 =
      document.createElement("\u0062\u0075\u0074\u0074\u006f\u006e");
    return (
      (__48a3184232b3390568cee50f4492a0f7d69d1bac2788bd6b569baf9f97e67d82.type = "\u0062\u0075\u0074\u0074\u006f\u006e"),
      (__48a3184232b3390568cee50f4492a0f7d69d1bac2788bd6b569baf9f97e67d82.className = "\u0070\u006c\u0061\u0079"),
      (__48a3184232b3390568cee50f4492a0f7d69d1bac2788bd6b569baf9f97e67d82.textContent = "\u0050\u006c\u0061\u0079"),
      (__48a3184232b3390568cee50f4492a0f7d69d1bac2788bd6b569baf9f97e67d82.disabled =
        !__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.configured ||
        __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.launching ||
        Date.now() < __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.retryUntil),
      __48a3184232b3390568cee50f4492a0f7d69d1bac2788bd6b569baf9f97e67d82.addEventListener(
        "\u0063\u006c\u0069\u0063\u006b",
        () => {
          !(async function (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) {
            if (
              !(
                __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.launching ||
                Date.now() <
                  __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.retryUntil
              ) &&
              __0e95c1e2a4416eb466289a93401a57e8100de689d601d61c4b544f3779888293()
            ) {
              ((__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.launching = !0),
                (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.cancelled = !1),
                (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.launchTimedOut =
                  !1),
                (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.launchController =
                  new AbortController()),
                clearTimeout(
                  __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.launchDeadlineTimer,
                ),
                (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.launchDeadlineTimer =
                  setTimeout(() => {
                    ((__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.launchTimedOut =
                      !0),
                      __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.launchController?.abort());
                  }, 15e4)),
                __37c128880588460342b5be1dfd5b157c42bb28e5b510992c66566aee844f1b65(),
                (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.launchLayer.hidden =
                  !1),
                __2ab10d5388db42e8f0abfc33148c89ee0a82b07c32da0dc2d7dd5801c6063bed(!0),
                (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.launchTitle.textContent =
                  __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.name),
                __8cd6a5f96d374ab369b22c8a8b780947702a58489eb9a8703a86c1c2ea05444e("\u0073\u0074\u0061\u0072\u0074\u0069\u006e\u0067"));
              try {
                const __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f =
                  await __27ff7ae7a0ee6aae0a2624d293c9390d38bd96930112429ed2ba8f10cadd27e9(
                    __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
                  );
                if (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.cancelled)
                  return;
                if (
                  ("\u0071\u0075\u0065\u0075\u0065" ===
                    __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f?.status &&
                    (await __dbbf6a5b3009b7149c20a0f4980b5d83541a3d9aae15afe5b0b5e66e49dc03e9()),
                  __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.cancelled)
                )
                  return;
                if (!__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.session?.id)
                  throw new Error("\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067\u0020\u0064\u0069\u0064\u0020\u006e\u006f\u0074\u0020\u0063\u0072\u0065\u0061\u0074\u0065\u0020\u0061\u0020\u0073\u0065\u0073\u0073\u0069\u006f\u006e\u002e");
                await __289ac9873a0e5aeac01a8a2c9ceb867345006445f6b22e158030343b05608d38();
              } catch (__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0) {
                (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.cancelled ||
                  (__64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579(
                    __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.launchTimedOut
                      ? "\u0054\u0068\u0065\u0020\u0070\u0072\u006f\u0076\u0069\u0064\u0065\u0072\u0020\u0074\u006f\u006f\u006b\u0020\u0074\u006f\u006f\u0020\u006c\u006f\u006e\u0067\u0020\u0074\u006f\u0020\u0070\u0072\u0065\u0070\u0061\u0072\u0065\u0020\u0074\u0068\u0069\u0073\u0020\u0067\u0061\u006d\u0065\u002e\u0020\u0054\u0072\u0079\u0020\u0061\u0067\u0061\u0069\u006e\u0020\u0069\u006e\u0020\u0061\u0020\u006d\u006f\u006d\u0065\u006e\u0074\u002e"
                      : "\u0041\u0062\u006f\u0072\u0074\u0045\u0072\u0072\u006f\u0072" ===
                          __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0?.name
                        ? "\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0066\u0069\u006e\u0069\u0073\u0068\u0020\u0070\u0072\u0065\u0070\u0061\u0072\u0069\u006e\u0067\u0020\u0074\u0068\u0069\u0073\u0020\u0067\u0061\u006d\u0065\u002e"
                        : __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.message ||
                          "\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u006c\u0061\u0075\u006e\u0063\u0068\u0020\u0074\u0068\u0069\u0073\u0020\u0067\u0061\u006d\u0065\u002e",
                    "\u0065\u0072\u0072\u006f\u0072",
                  ),
                  __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.retryUntil &&
                    (function (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) {
                      ((__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.retryUntil =
                        __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28),
                        clearInterval(
                          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.retryTimer,
                        ));
                      const __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f =
                        () => {
                          const __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 =
                            Math.max(
                              0,
                              Math.ceil(
                                (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.retryUntil -
                                  Date.now()) /
                                  1e3,
                              ),
                            );
                          if (!__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28)
                            return (
                              clearInterval(
                                __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.retryTimer,
                              ),
                              (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.retryTimer =
                                null),
                              (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.retryUntil = 0),
                              __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579(
                                "\u0059\u006f\u0075\u0020\u0063\u0061\u006e\u0020\u0074\u0072\u0079\u0020\u006c\u0061\u0075\u006e\u0063\u0068\u0069\u006e\u0067\u0020\u0061\u0020\u0067\u0061\u006d\u0065\u0020\u0061\u0067\u0061\u0069\u006e\u002e",
                                "\u0072\u0065\u0061\u0064\u0079",
                              ),
                              void __37c128880588460342b5be1dfd5b157c42bb28e5b510992c66566aee844f1b65()
                            );
                          __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579(
                            `Please wait ${__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28} seconds before trying again.`,
                            "\u0065\u0072\u0072\u006f\u0072",
                          );
                        };
                      (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f(),
                        (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.retryTimer =
                          setInterval(
                            __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
                            1e3,
                          )),
                        __37c128880588460342b5be1dfd5b157c42bb28e5b510992c66566aee844f1b65());
                    })(
                      __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.retryUntil,
                    )),
                  await __b4f126a7885d0e1010ad41feb9730c2eff62aad001a871f9097e6e81898382f8(!1));
              } finally {
                (clearTimeout(
                  __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.launchDeadlineTimer,
                ),
                  (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.launchDeadlineTimer =
                    null),
                  (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.launchController =
                    null),
                  (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.launching =
                    !1),
                  (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.launchLayer.hidden =
                    !0),
                  __37c128880588460342b5be1dfd5b157c42bb28e5b510992c66566aee844f1b65());
              }
            }
          })(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28);
        },
      ),
      __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2.append(
        __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5,
        __9eac1509c6163c112a6215e9ce9abea4282b8296ba01c2e48e80f13fce188307,
        __48a3184232b3390568cee50f4492a0f7d69d1bac2788bd6b569baf9f97e67d82,
      ),
      __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.append(
        __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d,
        __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2,
      ),
      __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45
    );
  }
  function __37c128880588460342b5be1dfd5b157c42bb28e5b510992c66566aee844f1b65() {
    __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.network.disabled =
      __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.launching;
    const __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 =
        __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.search.value
          .trim()
          .toLowerCase(),
      __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 =
        __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.tag.value.toLowerCase();
    ((__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.filtered =
      __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.games.filter(
        (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede) =>
          (!__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 ||
            `${__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.name} ${__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.description} ${(__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.tags || []).join("\u0020")}`
              .toLowerCase()
              .includes(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28)) &&
          (!__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 ||
            (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.tags || []).some(
              (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) =>
                __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.toLowerCase() ===
                __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0,
            )),
      )),
      __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.grid.replaceChildren(
        ...__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.filtered.map(
          __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5,
        ),
      ),
      (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.empty.hidden =
        __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.filtered.length > 0));
  }
  function __8cd6a5f96d374ab369b22c8a8b780947702a58489eb9a8703a86c1c2ea05444e(
    __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
    __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
  ) {
    __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.launchProgress.style.width = `${
      {
        creating_account: 18,
        account_ready: 40,
        requesting_game: 58,
        queue: 70,
        finished_queue: 88,
      }[__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28] || 12
    }%`;
    const __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 = {
      creating_account: "\u0050\u0072\u0065\u0070\u0061\u0072\u0069\u006e\u0067\u0020\u0061\u0020\u0070\u0072\u006f\u0076\u0069\u0064\u0065\u0072\u0020\u0073\u0065\u0073\u0073\u0069\u006f\u006e\u2026",
      account_ready: "\u0050\u0072\u006f\u0076\u0069\u0064\u0065\u0072\u0020\u0073\u0065\u0073\u0073\u0069\u006f\u006e\u0020\u0072\u0065\u0061\u0064\u0079\u002e",
      requesting_game: "\u0052\u0065\u0071\u0075\u0065\u0073\u0074\u0069\u006e\u0067\u0020\u0061\u0020\u0067\u0061\u006d\u0065\u0020\u0073\u0065\u0072\u0076\u0065\u0072\u2026",
      queue: `Waiting for a game server${Number.isFinite(__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede) ? ` \xb7 position ${__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede}` : ""}.`,
      finished_queue: "\u0047\u0061\u006d\u0065\u0020\u0073\u0065\u0072\u0076\u0065\u0072\u0020\u0061\u0063\u0071\u0075\u0069\u0072\u0065\u0064\u002e\u0020\u0053\u0074\u0061\u0072\u0074\u0069\u006e\u0067\u0020\u0073\u0074\u0072\u0065\u0061\u006d\u2026",
    };
    __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.launchStatus.textContent =
      __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0[
        __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28
      ] || "\u0043\u006f\u006e\u006e\u0065\u0063\u0074\u0069\u006e\u0067\u0020\u0074\u006f\u0020\u0074\u0068\u0065\u0020\u0063\u006c\u006f\u0075\u0064\u0020\u0070\u0072\u006f\u0076\u0069\u0064\u0065\u0072\u2026";
  }
  function __2ab10d5388db42e8f0abfc33148c89ee0a82b07c32da0dc2d7dd5801c6063bed(
    __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
  ) {
    (document.documentElement.classList.toggle(
      "\u0063\u006c\u006f\u0075\u0064\u002d\u0073\u0065\u0073\u0073\u0069\u006f\u006e\u002d\u0061\u0063\u0074\u0069\u0076\u0065",
      Boolean(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28),
    ),
      window.parent !== window &&
        window.parent.postMessage(
          {
            type: "\u006e\u0079\u0078\u003a\u0063\u006c\u006f\u0075\u0064\u002d\u0070\u006c\u0061\u0079\u0065\u0072",
            active: Boolean(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28),
          },
          location.origin,
        ));
  }
  async function __27ff7ae7a0ee6aae0a2624d293c9390d38bd96930112429ed2ba8f10cadd27e9(
    __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
    __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 = !0,
  ) {
    const __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 = new Headers({
        "\u0043\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0054\u0079\u0070\u0065": "\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u006a\u0073\u006f\u006e",
      }),
      __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45 =
        await __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d(
          !__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0,
        );
    if (!__dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45)
      throw new Error("\u0053\u0069\u0067\u006e\u0020\u0069\u006e\u0020\u0074\u006f\u0020\u0075\u0073\u0065\u0020\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067\u002e");
    __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.set(
      "\u0041\u0075\u0074\u0068\u006f\u0072\u0069\u007a\u0061\u0074\u0069\u006f\u006e",
      `Bearer ${__dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45}`,
    );
    const __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2 = await fetch(
      `${__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28}/sessions`,
      {
        method: "\u0050\u004f\u0053\u0054",
        headers: __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579,
        body: JSON.stringify({
          gameKey: __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.key,
        }),
        signal:
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.launchController
            ?.signal,
      },
    );
    if (
      401 === __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2.status &&
      __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0
    )
      return __27ff7ae7a0ee6aae0a2624d293c9390d38bd96930112429ed2ba8f10cadd27e9(
        __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
        !1,
      );
    if (!__7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2.ok) {
      let __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 = {};
      try {
        __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 =
          await __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2.json();
      } catch {}
      const __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede = new Error(
        __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd(
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.error,
          `Cloud Gaming is temporarily unavailable (${__7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2.status}). Try again in a moment.`,
        ),
      );
      if (429 === __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2.status) {
        const __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 =
            __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2.headers.get(
              "\u0052\u0065\u0074\u0072\u0079\u002d\u0041\u0066\u0074\u0065\u0072",
            ),
          __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f = Number(
            __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
          ),
          __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 =
            __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 &&
            Number.isFinite(__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f)
              ? Date.now() +
                1e3 *
                  Math.max(0, __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f)
              : Date.parse(
                  __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 || "",
                );
        Number.isFinite(__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0) &&
          __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 > Date.now() &&
          (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.retryUntil =
            __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0);
      }
      throw __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede;
    }
    if (!__7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2.body)
      throw new Error("\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067\u0020\u0064\u0069\u0064\u0020\u006e\u006f\u0074\u0020\u0072\u0065\u0074\u0075\u0072\u006e\u0020\u0073\u0065\u0073\u0073\u0069\u006f\u006e\u0020\u0070\u0072\u006f\u0067\u0072\u0065\u0073\u0073\u002e");
    const __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5 =
        __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2.body.getReader(),
      __37c128880588460342b5be1dfd5b157c42bb28e5b510992c66566aee844f1b65 = new TextDecoder();
    let __2ab10d5388db42e8f0abfc33148c89ee0a82b07c32da0dc2d7dd5801c6063bed = "",
      __dbbf6a5b3009b7149c20a0f4980b5d83541a3d9aae15afe5b0b5e66e49dc03e9 = null;
    for (;;) {
      const {
        done: __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
        value: __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0,
      } = await __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5.read();
      __2ab10d5388db42e8f0abfc33148c89ee0a82b07c32da0dc2d7dd5801c6063bed +=
        __37c128880588460342b5be1dfd5b157c42bb28e5b510992c66566aee844f1b65.decode(
          __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 || new Uint8Array(),
          {
            stream: !__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
          },
        );
      const __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 =
        __2ab10d5388db42e8f0abfc33148c89ee0a82b07c32da0dc2d7dd5801c6063bed.split(/\r?\n/);
      __2ab10d5388db42e8f0abfc33148c89ee0a82b07c32da0dc2d7dd5801c6063bed =
        __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28
          ? ""
          : __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.pop() || "";
      for (const __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45 of __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579) {
        if (!__dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.trim()) continue;
        let __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28;
        try {
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 = JSON.parse(
            __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45,
          );
        } catch {
          continue;
        }
        if (
          (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.id &&
            (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.session = {
              id: __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.id,
              gameKey: __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.key,
              gameName: __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.name,
              state:
                "\u0071\u0075\u0065\u0075\u0065" ===
                __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.status
                  ? "\u0071\u0075\u0065\u0075\u0065\u0064"
                  : "\u0072\u0065\u0061\u0064\u0079",
            }),
          __8cd6a5f96d374ab369b22c8a8b780947702a58489eb9a8703a86c1c2ea05444e(
            __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.status,
            __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.queuePosition,
          ),
          (__dbbf6a5b3009b7149c20a0f4980b5d83541a3d9aae15afe5b0b5e66e49dc03e9 =
            __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28),
          "\u0065\u0072\u0072\u006f\u0072" === __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.status)
        )
          throw new Error(
            __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd(
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.error,
              "\u0054\u0068\u0065\u0020\u0063\u006c\u006f\u0075\u0064\u0020\u0070\u0072\u006f\u0076\u0069\u0064\u0065\u0072\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0070\u0072\u0065\u0070\u0061\u0072\u0065\u0020\u0074\u0068\u0069\u0073\u0020\u0067\u0061\u006d\u0065\u002e\u0020\u0054\u0072\u0079\u0020\u0061\u0067\u0061\u0069\u006e\u0020\u0069\u006e\u0020\u0061\u0020\u006d\u006f\u006d\u0065\u006e\u0074\u002e",
            ),
          );
      }
      if (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) break;
    }
    return __dbbf6a5b3009b7149c20a0f4980b5d83541a3d9aae15afe5b0b5e66e49dc03e9;
  }
  async function __dbbf6a5b3009b7149c20a0f4980b5d83541a3d9aae15afe5b0b5e66e49dc03e9() {
    for (
      ;
      !__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.cancelled &&
      "\u0071\u0075\u0065\u0075\u0065\u0064" ===
        __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.session?.state;

    ) {
      if (
        (await __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0(4e3),
        __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.cancelled)
      )
        return;
      const __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f =
        await __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2(
          `${__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28}/sessions/${encodeURIComponent(__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.session.id)}/queue`,
        );
      if (
        ((__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.session =
          __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.session ||
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.session),
        __8cd6a5f96d374ab369b22c8a8b780947702a58489eb9a8703a86c1c2ea05444e(
          __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.status,
          __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.queuePosition,
        ),
        "\u0066\u0069\u006e\u0069\u0073\u0068\u0065\u0064\u005f\u0071\u0075\u0065\u0075\u0065" ===
          __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.status ||
          "\u0072\u0065\u0061\u0064\u0079" ===
            __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.session.state)
      )
        return;
    }
    if (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.cancelled)
      throw new Error("\u004c\u0061\u0075\u006e\u0063\u0068\u0020\u0063\u0061\u006e\u0063\u0065\u006c\u006c\u0065\u0064\u002e");
  }
  async function __289ac9873a0e5aeac01a8a2c9ceb867345006445f6b22e158030343b05608d38() {
    const __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f =
      await __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2(
        `${__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28}/sessions/${encodeURIComponent(__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.session.id)}/start`,
        {
          method: "\u0050\u004f\u0053\u0054",
        },
      );
    if (
      ((__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.session =
        __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.session),
      !__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.session?.embedUrl)
    )
      throw new Error("\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067\u0020\u0064\u0069\u0064\u0020\u006e\u006f\u0074\u0020\u0072\u0065\u0074\u0075\u0072\u006e\u0020\u0061\u0020\u0070\u006c\u0061\u0079\u0065\u0072\u0020\u0061\u0064\u0064\u0072\u0065\u0073\u0073\u002e");
    __9eac1509c6163c112a6215e9ce9abea4282b8296ba01c2e48e80f13fce188307();
  }
  function __0e95c1e2a4416eb466289a93401a57e8100de689d601d61c4b544f3779888293() {
    let __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28;
    try {
      if ("\u0066\u0075\u006e\u0063\u0074\u0069\u006f\u006e" != typeof RTCPeerConnection) throw new Error();
      return (
        (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 = new RTCPeerConnection(
          {
            iceServers: [],
          },
        )),
        __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.createDataChannel(
          "\u0073\u0075\u0070\u0070\u006f\u0072\u0074\u002d\u0063\u0068\u0065\u0063\u006b",
        ),
        !0
      );
    } catch {
      return (
        __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579(
          "\u0057\u0065\u0062\u0052\u0054\u0043\u0020\u0069\u0073\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u0020\u0069\u006e\u0020\u0074\u0068\u0069\u0073\u0020\u0062\u0072\u006f\u0077\u0073\u0065\u0072\u002e\u0020\u0043\u006c\u006f\u0075\u0064\u0020\u0073\u0074\u0072\u0065\u0061\u006d\u0069\u006e\u0067\u0020\u006e\u0065\u0065\u0064\u0073\u0020\u0069\u0074\u002e\u0020\u0054\u0072\u0079\u0020\u0042\u0072\u006f\u0077\u0073\u0065\u0072\u0020\u0067\u0061\u006d\u0065\u0073\u002c\u0020\u0061\u006e\u006f\u0074\u0068\u0065\u0072\u0020\u0062\u0072\u006f\u0077\u0073\u0065\u0072\u002c\u0020\u006f\u0072\u0020\u0061\u0073\u006b\u0020\u0079\u006f\u0075\u0072\u0020\u0064\u0065\u0076\u0069\u0063\u0065\u0020\u0061\u0064\u006d\u0069\u006e\u0069\u0073\u0074\u0072\u0061\u0074\u006f\u0072\u0020\u0074\u006f\u0020\u0065\u006e\u0061\u0062\u006c\u0065\u0020\u0069\u0074\u002e",
          "\u0065\u0072\u0072\u006f\u0072",
        ),
        !1
      );
    } finally {
      __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28?.close();
    }
  }
  function __9eac1509c6163c112a6215e9ce9abea4282b8296ba01c2e48e80f13fce188307() {
    __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.playerTitle.textContent =
      __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.session.gameName ||
      "\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067";
    const __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 = new URL(
      __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.session.embedUrl,
      location.href,
    );
    ("\u0072\u0065\u0073\u0074\u0072\u0069\u0063\u0074\u0065\u0064" ===
    __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.network.value
      ? __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.searchParams.set(
          "\u006e\u0065\u0074\u0077\u006f\u0072\u006b",
          "\u0072\u0065\u0073\u0074\u0072\u0069\u0063\u0074\u0065\u0064",
        )
      : __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.searchParams.delete(
          "\u006e\u0065\u0074\u0077\u006f\u0072\u006b",
        ),
      (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.player.src =
        __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.href),
      (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.playerLayer.hidden = !1),
      (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.launchLayer.hidden = !0),
      __2ab10d5388db42e8f0abfc33148c89ee0a82b07c32da0dc2d7dd5801c6063bed(!0),
      (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.pingFailures = 0),
      clearInterval(__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.pingTimer),
      (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.pingTimer = setInterval(
        () => {
          __d41ac4a1318dcfb1397f84d77e098e1886bb2c40b9fca54bc3223ce4547fafd4();
        },
        15e3,
      )),
      clearInterval(
        __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.elapsedTimer,
      ),
      (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.elapsedTimer =
        setInterval(__48a3184232b3390568cee50f4492a0f7d69d1bac2788bd6b569baf9f97e67d82, 1e3)),
      __48a3184232b3390568cee50f4492a0f7d69d1bac2788bd6b569baf9f97e67d82(),
      __d41ac4a1318dcfb1397f84d77e098e1886bb2c40b9fca54bc3223ce4547fafd4());
  }
  function __48a3184232b3390568cee50f4492a0f7d69d1bac2788bd6b569baf9f97e67d82() {
    if (!__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.session?.startedAtMs)
      return void (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.playerTime.textContent =
        "\u0043\u006f\u006e\u006e\u0065\u0063\u0074\u0065\u0064");
    const __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 = Math.max(
        0,
        Math.floor(
          (Date.now() -
            __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.session
              .startedAtMs) /
            1e3,
        ),
      ),
      __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 = Math.max(
        0,
        Number(
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.session.maxSeconds ||
            0,
        ),
      );
    __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.playerTime.textContent =
      __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0
        ? `${Math.floor(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 / 60)}:${String(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 % 60).padStart(2, "\u0030")} / ${Math.floor(__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 / 60)}:${String(__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 % 60).padStart(2, "\u0030")}`
        : `${Math.floor(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 / 60)}:${String(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 % 60).padStart(2, "\u0030")}`;
  }
  async function __d41ac4a1318dcfb1397f84d77e098e1886bb2c40b9fca54bc3223ce4547fafd4() {
    if (
      __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.session?.id &&
      "\u0061\u0063\u0074\u0069\u0076\u0065" === __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.session.state
    )
      try {
        const __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f =
          await __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2(
            `${__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28}/sessions/${encodeURIComponent(__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.session.id)}/ping`,
            {
              method: "\u0050\u004f\u0053\u0054",
            },
          );
        ((__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.pingFailures = 0),
          __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.sessionTimeLimitSeconds &&
            ((__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.session.maxSeconds =
              __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.sessionTimeLimitSeconds),
            (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.session.startedAtMs =
              Date.now() -
              1e3 *
                __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.sessionTimeUsedSeconds),
            __48a3184232b3390568cee50f4492a0f7d69d1bac2788bd6b569baf9f97e67d82()));
      } catch (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f) {
        ((__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.pingFailures += 1),
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.pingFailures >= 2 &&
            __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579(
              __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.message ||
                "\u0054\u0068\u0065\u0020\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067\u0020\u0073\u0065\u0073\u0073\u0069\u006f\u006e\u0020\u006c\u006f\u0073\u0074\u0020\u0069\u0074\u0073\u0020\u006b\u0065\u0065\u0070\u0061\u006c\u0069\u0076\u0065\u002e",
              "\u0065\u0072\u0072\u006f\u0072",
            ));
      }
  }
  async function __b4f126a7885d0e1010ad41feb9730c2eff62aad001a871f9097e6e81898382f8(
    __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 = !0,
  ) {
    const __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45 =
      __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.session;
    if (
      ((__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.cancelled = !0),
      clearTimeout(
        __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.launchDeadlineTimer,
      ),
      (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.launchDeadlineTimer =
        null),
      __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.launchController?.abort(),
      (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.session = null),
      clearInterval(__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.pingTimer),
      clearInterval(
        __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.elapsedTimer,
      ),
      (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.pingTimer = null),
      (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.elapsedTimer = null),
      __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.player.removeAttribute(
        "\u0073\u0072\u0063",
      ),
      (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.playerLayer.hidden = !0),
      __2ab10d5388db42e8f0abfc33148c89ee0a82b07c32da0dc2d7dd5801c6063bed(!1),
      __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45?.id)
    )
      try {
        await __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2(
          `${__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28}/sessions/${encodeURIComponent(__dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.id)}`,
          {
            method: "\u0044\u0045\u004c\u0045\u0054\u0045",
          },
        );
      } catch {}
    __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 &&
      __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579(
        "\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067\u0020\u0073\u0065\u0073\u0073\u0069\u006f\u006e\u0020\u0065\u006e\u0064\u0065\u0064\u002e",
        "\u0072\u0065\u0061\u0064\u0079",
      );
  }
  async function __6d004aff1b051fb8f241e0ba760d89cc228429294a9b93213de05a32fb2c1cbd() {
    try {
      __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.network.value =
        "\u0072\u0065\u0073\u0074\u0072\u0069\u0063\u0074\u0065\u0064" === localStorage.getItem("\u006e\u0079\u0078\u002d\u0063\u006c\u006f\u0075\u0064\u002d\u006e\u0065\u0074\u0077\u006f\u0072\u006b") ? "\u0072\u0065\u0073\u0074\u0072\u0069\u0063\u0074\u0065\u0064" : "\u0061\u0075\u0074\u006f";
    } catch {}
    (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.network.addEventListener(
      "\u0063\u0068\u0061\u006e\u0067\u0065",
      () => {
        try {
          localStorage.setItem(
            "\u006e\u0079\u0078\u002d\u0063\u006c\u006f\u0075\u0064\u002d\u006e\u0065\u0074\u0077\u006f\u0072\u006b",
            __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.network.value,
          );
        } catch {}
      },
    ),
      __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.search.addEventListener(
        "\u0069\u006e\u0070\u0075\u0074",
        __37c128880588460342b5be1dfd5b157c42bb28e5b510992c66566aee844f1b65,
      ),
      __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.tag.addEventListener(
        "\u0063\u0068\u0061\u006e\u0067\u0065",
        __37c128880588460342b5be1dfd5b157c42bb28e5b510992c66566aee844f1b65,
      ),
      __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.cancel.addEventListener(
        "\u0063\u006c\u0069\u0063\u006b",
        () => {
          __b4f126a7885d0e1010ad41feb9730c2eff62aad001a871f9097e6e81898382f8(!1);
        },
      ),
      __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.close.addEventListener(
        "\u0063\u006c\u0069\u0063\u006b",
        () => {
          __b4f126a7885d0e1010ad41feb9730c2eff62aad001a871f9097e6e81898382f8();
        },
      ),
      __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.fullscreen.addEventListener(
        "\u0063\u006c\u0069\u0063\u006b",
        () =>
          __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.playerLayer.requestFullscreen?.(),
      ),
      document.addEventListener("\u0076\u0069\u0073\u0069\u0062\u0069\u006c\u0069\u0074\u0079\u0063\u0068\u0061\u006e\u0067\u0065", () => {
        document.hidden || __d41ac4a1318dcfb1397f84d77e098e1886bb2c40b9fca54bc3223ce4547fafd4();
      }),
      addEventListener("\u006f\u006e\u006c\u0069\u006e\u0065", () => {
        __d41ac4a1318dcfb1397f84d77e098e1886bb2c40b9fca54bc3223ce4547fafd4();
      }),
      addEventListener(
        "\u006d\u0065\u0073\u0073\u0061\u0067\u0065",
        (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) => {
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.origin ===
            location.origin &&
            __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.source ===
              __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.player
                .contentWindow &&
            "\u006e\u0079\u0078\u003a\u0063\u006c\u006f\u0075\u0064\u002d\u0070\u006c\u0061\u0079\u0065\u0072\u002d\u0065\u0072\u0072\u006f\u0072" ===
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.data?.type &&
            (__64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579(
              __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd(
                __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.data.message,
                "\u0054\u0068\u0065\u0020\u0063\u006c\u006f\u0075\u0064\u0020\u0073\u0074\u0072\u0065\u0061\u006d\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0070\u006c\u0061\u0079\u0020\u006f\u006e\u0020\u0074\u0068\u0069\u0073\u0020\u0064\u0065\u0076\u0069\u0063\u0065\u002e",
              ),
              "\u0065\u0072\u0072\u006f\u0072",
            ),
            __b4f126a7885d0e1010ad41feb9730c2eff62aad001a871f9097e6e81898382f8(!1));
        },
      ),
      document
        .querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0068\u006f\u006d\u0065\u005d")
        .addEventListener(
          "\u0063\u006c\u0069\u0063\u006b",
          (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) => {
            window.parent !== window &&
              (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.preventDefault(),
              window.parent.postMessage(
                {
                  type: "\u006e\u0079\u0078\u003a\u0067\u006f\u002d\u0068\u006f\u006d\u0065",
                },
                location.origin,
              ));
          },
        ));
    try {
      const __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 =
        await __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2(
          `${__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28}/status`,
          {},
          !1,
        );
      if (!0 === __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.maintenance)
        return (
          (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.configured = !1),
          __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45(
            "\u0053\u0074\u0072\u0061\u0074\u0075\u0073\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065",
            "\u0065\u0072\u0072\u006f\u0072",
          ),
          __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579(
            "\u0053\u0074\u0072\u0061\u0074\u0075\u0073\u0020\u0069\u0073\u0020\u0063\u0075\u0072\u0072\u0065\u006e\u0074\u006c\u0079\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u002e\u0020\u004c\u0075\u006e\u0061\u0020\u0069\u0073\u0020\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u0020\u0061\u0062\u006f\u0076\u0065\u002e",
            "\u0065\u0072\u0072\u006f\u0072",
          ),
          (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.network.disabled =
            !0),
          (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.search.disabled = !0),
          void (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.tag.disabled =
            !0)
        );
      if (!__0e95c1e2a4416eb466289a93401a57e8100de689d601d61c4b544f3779888293())
        return void __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45(
          "\u0053\u0074\u0072\u0065\u0061\u006d\u0069\u006e\u0067\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065",
          "\u0065\u0072\u0072\u006f\u0072",
        );
      if (
        ((__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.configured =
          !0 === __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.configured),
        __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45(
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.configured
            ? "\u0053\u0074\u0072\u0061\u0074\u0075\u0073\u0020\u0072\u0065\u0061\u0064\u0079"
            : "\u0053\u0065\u0074\u0075\u0070\u0020\u0072\u0065\u0071\u0075\u0069\u0072\u0065\u0064",
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.configured
            ? "\u0072\u0065\u0061\u0064\u0079"
            : "\u0065\u0072\u0072\u006f\u0072",
        ),
        __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.configured ||
          __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579(
            __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.setupMessage ||
              "\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067\u0020\u006e\u0065\u0065\u0064\u0073\u0020\u0061\u0020\u0063\u006f\u006e\u0066\u0069\u0067\u0075\u0072\u0065\u0064\u0020\u0070\u0072\u006f\u0076\u0069\u0064\u0065\u0072\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u002e\u0020\u0041\u0073\u006b\u0020\u0074\u0068\u0065\u0020\u006f\u0077\u006e\u0065\u0072\u0020\u0074\u006f\u0020\u0066\u0069\u006e\u0069\u0073\u0068\u0020\u0073\u0065\u0074\u0075\u0070\u002e",
            "\u0065\u0072\u0072\u006f\u0072",
          ),
        !(await __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d()))
      )
        throw new Error("\u0053\u0069\u0067\u006e\u0020\u0069\u006e\u0020\u0074\u006f\u0020\u0076\u0069\u0065\u0077\u0020\u0061\u006e\u0064\u0020\u006c\u0061\u0075\u006e\u0063\u0068\u0020\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067\u0020\u0074\u0069\u0074\u006c\u0065\u0073\u002e");
      const __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd =
        await __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2(
          `${__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28}/catalog`,
        );
      ((__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.games = Array.isArray(
        __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd.games,
      )
        ? __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd.games
        : []),
        (function () {
          const __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 = [
            ...new Set(
              __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.games.flatMap(
                (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) =>
                  __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.tags || [],
              ),
            ),
          ].sort(
            (
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
              __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
            ) =>
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.localeCompare(
                __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
              ),
          );
          __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.tag.replaceChildren(
            new Option("\u0041\u006c\u006c\u0020\u0063\u0061\u0074\u0065\u0067\u006f\u0072\u0069\u0065\u0073", ""),
            ...__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.map(
              (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) =>
                new Option(
                  __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
                  __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
                ),
            ),
          );
        })(),
        __37c128880588460342b5be1dfd5b157c42bb28e5b510992c66566aee844f1b65(),
        __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.configured &&
          __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579(
            `${__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.games.length} games available.`,
            "\u0072\u0065\u0061\u0064\u0079",
          ),
        await (async function () {
          const __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 =
            await __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2(
              `${__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28}/session`,
            );
          if (__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.session)
            if (
              ((__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.session =
                __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.session),
              "\u0061\u0063\u0074\u0069\u0076\u0065" ===
                __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.session.state &&
                __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.session.embedUrl)
            )
              __9eac1509c6163c112a6215e9ce9abea4282b8296ba01c2e48e80f13fce188307();
            else if (
              "\u0071\u0075\u0065\u0075\u0065\u0064" ===
              __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.session.state
            ) {
              ((__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.launching = !0),
                (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.launchLayer.hidden =
                  !1),
                __2ab10d5388db42e8f0abfc33148c89ee0a82b07c32da0dc2d7dd5801c6063bed(!0),
                (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.launchTitle.textContent =
                  __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.session
                    .gameName || "\u0043\u006c\u006f\u0075\u0064\u0020\u0067\u0061\u006d\u0065"));
              try {
                (await __dbbf6a5b3009b7149c20a0f4980b5d83541a3d9aae15afe5b0b5e66e49dc03e9(),
                  __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.cancelled ||
                    (await __289ac9873a0e5aeac01a8a2c9ceb867345006445f6b22e158030343b05608d38()));
              } finally {
                ((__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.launching =
                  !1),
                  (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.launchLayer.hidden =
                    !0),
                  __37c128880588460342b5be1dfd5b157c42bb28e5b510992c66566aee844f1b65());
              }
            } else if (
              "\u0072\u0065\u0061\u0064\u0079" ===
              __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.session.state
            ) {
              __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.launching = !0;
              try {
                await __289ac9873a0e5aeac01a8a2c9ceb867345006445f6b22e158030343b05608d38();
              } finally {
                ((__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.launching =
                  !1),
                  __37c128880588460342b5be1dfd5b157c42bb28e5b510992c66566aee844f1b65());
              }
            }
        })());
    } catch (__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0) {
      (__64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579(
        __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.message ||
          "\u0043\u006c\u006f\u0075\u0064\u0020\u0047\u0061\u006d\u0069\u006e\u0067\u0020\u0069\u0073\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u002e",
        "\u0065\u0072\u0072\u006f\u0072",
      ),
        __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.games.length ||
          (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.empty.hidden = !1));
    }
  }
  const __2d5a249cc6a99ccd36d05acb8fa6dad0eaeb7edceac73f437293e800d420edee =
    document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u006c\u0075\u006e\u0061\u002d\u0064\u0069\u0061\u006c\u006f\u0067\u005d");
  __2d5a249cc6a99ccd36d05acb8fa6dad0eaeb7edceac73f437293e800d420edee?.open
    ? __2d5a249cc6a99ccd36d05acb8fa6dad0eaeb7edceac73f437293e800d420edee.addEventListener(
        "\u0063\u006c\u006f\u0073\u0065",
        () => {
          __6d004aff1b051fb8f241e0ba760d89cc228429294a9b93213de05a32fb2c1cbd();
        },
        {
          once: !0,
        },
      )
    : __6d004aff1b051fb8f241e0ba760d89cc228429294a9b93213de05a32fb2c1cbd();
})();
