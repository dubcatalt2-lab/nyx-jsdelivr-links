const __86276bb98e50d28950c3c851a0ee89fc423275e17606de8c85b3b69072b54934 = new Map(),
  __f311af61d70afe319a350bf0ed5cf72e8c37bd8e8e0e6d8c44cbc64b2d6daa89 = new Set();

"\u0075\u006e\u0064\u0065\u0066\u0069\u006e\u0065\u0064" != typeof navigator &&
  navigator.serviceWorker &&
  navigator.serviceWorker.addEventListener(
    "\u006d\u0065\u0073\u0073\u0061\u0067\u0065",
    (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => {
      if (
        !__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.data
          ?.$controller$swrevive ||
        !__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.source?.scriptURL
      )
        return;
      const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.source;
      if (
        "\u0075\u006e\u0064\u0065\u0066\u0069\u006e\u0065\u0064" != typeof ServiceWorker &&
        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 instanceof
          ServiceWorker &&
        ["\u0061\u0063\u0074\u0069\u0076\u0061\u0074\u0069\u006e\u0067", "\u0061\u0063\u0074\u0069\u0076\u0061\u0074\u0065\u0064"].includes(
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.state,
        )
      )
        for (const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 of __f311af61d70afe319a350bf0ed5cf72e8c37bd8e8e0e6d8c44cbc64b2d6daa89) {
          const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.serviceWorkerController;
          if (
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f &&
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f !==
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
          )
            try {
              const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c = new URL(
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.scriptURL,
                ),
                __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 = new URL(
                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.scriptURL,
                );
              if (
                __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.origin !==
                  __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.origin ||
                __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.pathname !==
                  __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.pathname
              )
                continue;
              ((__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.serviceWorkerController =
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53),
                (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.guardServiceWorkerRevive =
                  !1));
            } catch {}
        }
    },
  );

export function trackProxyController(
  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
) {
  return (
    __f311af61d70afe319a350bf0ed5cf72e8c37bd8e8e0e6d8c44cbc64b2d6daa89.add(
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
    ),
    () =>
      __f311af61d70afe319a350bf0ed5cf72e8c37bd8e8e0e6d8c44cbc64b2d6daa89.delete(
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
      )
  );
}

export function loadProxyScript(
  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
  { timeoutMs: __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = 2e4 } = {},
) {
  if (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53())
    return Promise.resolve();
  const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c = new URL(
    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
    location.href,
  ).href;
  if (
    __86276bb98e50d28950c3c851a0ee89fc423275e17606de8c85b3b69072b54934.has(
      __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
    )
  )
    return __86276bb98e50d28950c3c851a0ee89fc423275e17606de8c85b3b69072b54934.get(
      __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
    );
  const __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 = () =>
      new Promise(
        (
          __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
          __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
        ) => {
          if (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53())
            return __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c();
          const __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 =
            document.createElement("\u0073\u0063\u0072\u0069\u0070\u0074");
          ((__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.src =
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f),
            (__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.async = !1));
          const __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 = (
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
            ) => {
              (clearTimeout(__bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061),
                (__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.onload = null),
                (__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.onerror = null),
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f
                  ? (__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.remove(),
                    __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477(
                      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                    ))
                  : __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c());
            },
            __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 = setTimeout(
              () =>
                __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7(
                  new Error("\u0054\u0068\u0065\u0020\u0062\u0072\u006f\u0077\u0073\u0065\u0072\u0020\u0065\u006e\u0067\u0069\u006e\u0065\u0020\u0074\u006f\u006f\u006b\u0020\u0074\u006f\u006f\u0020\u006c\u006f\u006e\u0067\u0020\u0074\u006f\u0020\u006c\u006f\u0061\u0064\u002e\u0020\u0050\u006c\u0065\u0061\u0073\u0065\u0020\u0072\u0065\u0074\u0072\u0079\u002e"),
                ),
              __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
            );
          ((__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.onload = () =>
            __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7(
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53()
                ? null
                : new Error("\u0054\u0068\u0065\u0020\u0062\u0072\u006f\u0077\u0073\u0065\u0072\u0020\u0065\u006e\u0067\u0069\u006e\u0065\u0020\u0072\u0065\u0074\u0075\u0072\u006e\u0065\u0064\u0020\u0061\u006e\u0020\u0069\u006e\u0063\u006f\u006d\u0070\u006c\u0065\u0074\u0065\u0020\u0073\u0063\u0072\u0069\u0070\u0074\u002e"),
            )),
            (__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.onerror = () =>
              __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7(
                Object.assign(new Error("\u0054\u0068\u0065\u0020\u0062\u0072\u006f\u0077\u0073\u0065\u0072\u0020\u0065\u006e\u0067\u0069\u006e\u0065\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u006c\u006f\u0061\u0064\u002e\u0020\u0050\u006c\u0065\u0061\u0073\u0065\u0020\u0072\u0065\u0074\u0072\u0079\u002e"), {
                  retryable: !0,
                }),
              )),
            document.head.append(
              __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766,
            ));
        },
      ),
    __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 =
      __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477()
        .catch((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => {
          if (!__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.retryable)
            throw __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f;
          return __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477();
        })
        .finally(() => {
          __86276bb98e50d28950c3c851a0ee89fc423275e17606de8c85b3b69072b54934.get(
            __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
          ) === __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 &&
            __86276bb98e50d28950c3c851a0ee89fc423275e17606de8c85b3b69072b54934.delete(
              __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
            );
        });
  return (
    __86276bb98e50d28950c3c851a0ee89fc423275e17606de8c85b3b69072b54934.set(
      __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
      __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766,
    ),
    __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766
  );
}

export function waitForProxyController(
  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = 2e4,
) {
  let __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708;
  return Promise.race([
    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.wait(),
    new Promise(
      (
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
      ) => {
        __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = setTimeout(
          () =>
            __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c(
              new Error("\u0054\u0068\u0065\u0020\u0062\u0072\u006f\u0077\u0073\u0065\u0072\u0020\u0063\u006f\u006e\u0074\u0072\u006f\u006c\u006c\u0065\u0072\u0020\u0074\u006f\u006f\u006b\u0020\u0074\u006f\u006f\u0020\u006c\u006f\u006e\u0067\u0020\u0074\u006f\u0020\u0073\u0074\u0061\u0072\u0074\u002e\u0020\u0050\u006c\u0065\u0061\u0073\u0065\u0020\u0072\u0065\u0074\u0072\u0079\u002e"),
            ),
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
        );
      },
    ),
  ]).finally(() =>
    clearTimeout(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708),
  );
}
