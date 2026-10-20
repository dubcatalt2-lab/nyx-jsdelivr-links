const __0a4f12ca887379a86abae211dd15e69fa38fc075e901ac6b61336f4b4fcb3641 = new Map(),
  __fc5cc5e931406b60f5ca48b71f802dad6b8eefb8cb40fe0b702c309bd2fa542e = new Set();

"\u0075\u006e\u0064\u0065\u0066\u0069\u006e\u0065\u0064" != typeof navigator &&
  navigator.serviceWorker &&
  navigator.serviceWorker.addEventListener(
    "\u006d\u0065\u0073\u0073\u0061\u0067\u0065",
    (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) => {
      if (
        !__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.data
          ?.$controller$swrevive ||
        !__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.source?.scriptURL
      )
        return;
      const __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede =
        __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.source;
      if (
        "\u0075\u006e\u0064\u0065\u0066\u0069\u006e\u0065\u0064" != typeof ServiceWorker &&
        __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede instanceof
          ServiceWorker &&
        ["\u0061\u0063\u0074\u0069\u0076\u0061\u0074\u0069\u006e\u0067", "\u0061\u0063\u0074\u0069\u0076\u0061\u0074\u0065\u0064"].includes(
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.state,
        )
      )
        for (const __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f of __fc5cc5e931406b60f5ca48b71f802dad6b8eefb8cb40fe0b702c309bd2fa542e) {
          const __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 =
            __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.serviceWorkerController;
          if (
            __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 &&
            __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 !==
              __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede
          )
            try {
              const __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 = new URL(
                  __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.scriptURL,
                ),
                __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 = new URL(
                  __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.scriptURL,
                );
              if (
                __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.origin !==
                  __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.origin ||
                __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.pathname !==
                  __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.pathname
              )
                continue;
              ((__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.serviceWorkerController =
                __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede),
                (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.guardServiceWorkerRevive =
                  !1));
            } catch {}
        }
    },
  );

export function trackProxyController(
  __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
) {
  return (
    __fc5cc5e931406b60f5ca48b71f802dad6b8eefb8cb40fe0b702c309bd2fa542e.add(
      __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
    ),
    () =>
      __fc5cc5e931406b60f5ca48b71f802dad6b8eefb8cb40fe0b702c309bd2fa542e.delete(
        __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
      )
  );
}

export function loadProxyScript(
  __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
  __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
  { timeoutMs: __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f = 2e4 } = {},
) {
  if (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede())
    return Promise.resolve();
  const __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 = new URL(
    __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
    location.href,
  ).href;
  if (
    __0a4f12ca887379a86abae211dd15e69fa38fc075e901ac6b61336f4b4fcb3641.has(
      __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0,
    )
  )
    return __0a4f12ca887379a86abae211dd15e69fa38fc075e901ac6b61336f4b4fcb3641.get(
      __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0,
    );
  const __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 = () =>
      new Promise(
        (
          __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0,
          __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579,
        ) => {
          if (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede())
            return __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0();
          const __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45 =
            document.createElement("\u0073\u0063\u0072\u0069\u0070\u0074");
          ((__dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.src =
            __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28),
            (__dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.async = !1));
          const __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d = (
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
            ) => {
              (clearTimeout(__23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd),
                (__dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.onload = null),
                (__dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.onerror = null),
                __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28
                  ? (__dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.remove(),
                    __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579(
                      __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
                    ))
                  : __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0());
            },
            __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd = setTimeout(
              () =>
                __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d(
                  new Error("\u0054\u0068\u0065\u0020\u0062\u0072\u006f\u0077\u0073\u0065\u0072\u0020\u0065\u006e\u0067\u0069\u006e\u0065\u0020\u0074\u006f\u006f\u006b\u0020\u0074\u006f\u006f\u0020\u006c\u006f\u006e\u0067\u0020\u0074\u006f\u0020\u006c\u006f\u0061\u0064\u002e\u0020\u0050\u006c\u0065\u0061\u0073\u0065\u0020\u0072\u0065\u0074\u0072\u0079\u002e"),
                ),
              __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
            );
          ((__dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.onload = () =>
            __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d(
              __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede()
                ? null
                : new Error("\u0054\u0068\u0065\u0020\u0062\u0072\u006f\u0077\u0073\u0065\u0072\u0020\u0065\u006e\u0067\u0069\u006e\u0065\u0020\u0072\u0065\u0074\u0075\u0072\u006e\u0065\u0064\u0020\u0061\u006e\u0020\u0069\u006e\u0063\u006f\u006d\u0070\u006c\u0065\u0074\u0065\u0020\u0073\u0063\u0072\u0069\u0070\u0074\u002e"),
            )),
            (__dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.onerror = () =>
              __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d(
                Object.assign(new Error("\u0054\u0068\u0065\u0020\u0062\u0072\u006f\u0077\u0073\u0065\u0072\u0020\u0065\u006e\u0067\u0069\u006e\u0065\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u006c\u006f\u0061\u0064\u002e\u0020\u0050\u006c\u0065\u0061\u0073\u0065\u0020\u0072\u0065\u0074\u0072\u0079\u002e"), {
                  retryable: !0,
                }),
              )),
            document.head.append(
              __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45,
            ));
        },
      ),
    __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45 =
      __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579()
        .catch((__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) => {
          if (!__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.retryable)
            throw __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28;
          return __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579();
        })
        .finally(() => {
          __0a4f12ca887379a86abae211dd15e69fa38fc075e901ac6b61336f4b4fcb3641.get(
            __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0,
          ) === __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45 &&
            __0a4f12ca887379a86abae211dd15e69fa38fc075e901ac6b61336f4b4fcb3641.delete(
              __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0,
            );
        });
  return (
    __0a4f12ca887379a86abae211dd15e69fa38fc075e901ac6b61336f4b4fcb3641.set(
      __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0,
      __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45,
    ),
    __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45
  );
}

export function waitForProxyController(
  __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
  __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede = 2e4,
) {
  let __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f;
  return Promise.race([
    __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.wait(),
    new Promise(
      (
        __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
        __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0,
      ) => {
        __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f = setTimeout(
          () =>
            __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0(
              new Error("\u0054\u0068\u0065\u0020\u0062\u0072\u006f\u0077\u0073\u0065\u0072\u0020\u0063\u006f\u006e\u0074\u0072\u006f\u006c\u006c\u0065\u0072\u0020\u0074\u006f\u006f\u006b\u0020\u0074\u006f\u006f\u0020\u006c\u006f\u006e\u0067\u0020\u0074\u006f\u0020\u0073\u0074\u0061\u0072\u0074\u002e\u0020\u0050\u006c\u0065\u0061\u0073\u0065\u0020\u0072\u0065\u0074\u0072\u0079\u002e"),
            ),
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
        );
      },
    ),
  ]).finally(() =>
    clearTimeout(__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f),
  );
}
