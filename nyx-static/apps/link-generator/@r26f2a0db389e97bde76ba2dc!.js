const __1e43b581d9e81ebe211439176828c4a6394bed84c420ce03a2fc765a408e1ee2 = new Set([
  "\u0063\u0064\u006e\u002e\u006a\u0073\u0064\u0065\u006c\u0069\u0076\u0072\u002e\u006e\u0065\u0074",
  "\u0067\u0063\u006f\u0072\u0065\u002e\u006a\u0073\u0064\u0065\u006c\u0069\u0076\u0072\u002e\u006e\u0065\u0074",
  "\u0066\u0061\u0073\u0074\u006c\u0079\u002e\u006a\u0073\u0064\u0065\u006c\u0069\u0076\u0072\u002e\u006e\u0065\u0074",
  "\u0071\u0075\u0061\u006e\u0074\u0069\u006c\u002e\u006a\u0073\u0064\u0065\u006c\u0069\u0076\u0072\u002e\u006e\u0065\u0074",
  "\u006f\u0072\u0069\u0067\u0069\u006e\u0066\u0061\u0073\u0074\u006c\u0079\u002e\u006a\u0073\u0064\u0065\u006c\u0069\u0076\u0072\u002e\u006e\u0065\u0074",
  "\u0074\u0065\u0073\u0074\u0069\u006e\u0067\u0063\u0066\u002e\u006a\u0073\u0064\u0065\u006c\u0069\u0076\u0072\u002e\u006e\u0065\u0074",
  "\u006a\u0073\u0064\u0065\u006c\u0069\u0076\u0072\u002e\u0062\u002d\u0063\u0064\u006e\u002e\u006e\u0065\u0074",
  "\u0065\u0073\u006d\u002e\u0073\u0068",
  "\u0072\u0061\u0077\u002e\u0065\u0073\u006d\u002e\u0073\u0068",
]);

export const MAX_JOB_LINKS = 1e5;

export function openJobStore() {
  return new Promise(
    (
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
    ) => {
      const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = indexedDB.open(
        "\u006e\u0079\u0078\u002e\u006c\u0069\u006e\u006b\u002d\u0070\u0075\u0062\u006c\u0069\u0073\u0068\u002d\u006a\u006f\u0062\u0073",
        1,
      );
      ((__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.onupgradeneeded = () =>
        __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.result.createObjectStore(
          "\u0072\u0065\u0063\u006f\u0072\u0064\u0073",
        )),
        (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.onerror = () =>
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53(
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.error,
          )),
        (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.onsuccess = () => {
          const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.result;
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f({
            read: () =>
              new Promise(
                (
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
                ) => {
                  const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
                      .transaction("\u0072\u0065\u0063\u006f\u0072\u0064\u0073")
                      .objectStore("\u0072\u0065\u0063\u006f\u0072\u0064\u0073")
                      .get("\u006a\u006f\u0062");
                  ((__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.onsuccess =
                    () =>
                      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(
                        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.result ||
                          null,
                      )),
                    (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.onerror =
                      () =>
                        __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708(
                          __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.error,
                        )));
                },
              ),
            save: (
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
              __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
            ) =>
              new Promise(
                (
                  __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
                  __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
                ) => {
                  const __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 =
                      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.transaction(
                        "\u0072\u0065\u0063\u006f\u0072\u0064\u0073",
                        "\u0072\u0065\u0061\u0064\u0077\u0072\u0069\u0074\u0065",
                      ),
                    __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 =
                      __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.objectStore(
                        "\u0072\u0065\u0063\u006f\u0072\u0064\u0073",
                      );
                  (__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.put(
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                    "\u006a\u006f\u0062",
                  ),
                    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 &&
                      __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.put(
                        __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.links,
                        "\u0062\u0061\u0074\u0063\u0068\u003a" +
                          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.id,
                      ),
                    (__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.oncomplete =
                      __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c),
                    (__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.onerror =
                      () =>
                        __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477(
                          __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.error,
                        )),
                    (__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.onabort =
                      () =>
                        __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477(
                          __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.error ||
                            new Error("\u0050\u0072\u006f\u0067\u0072\u0065\u0073\u0073\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0073\u0061\u0076\u0065\u0064\u002e"),
                        )));
                },
              ),
            links: (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
              new Promise(
                (
                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
                  __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
                ) => {
                  const __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 =
                      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.transaction(
                        "\u0072\u0065\u0063\u006f\u0072\u0064\u0073",
                      ),
                    __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 =
                      __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.objectStore(
                        "\u0072\u0065\u0063\u006f\u0072\u0064\u0073",
                      ),
                    __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 = [];
                  (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.batches.forEach(
                    (
                      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                    ) => {
                      const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
                        __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.get(
                          "\u0062\u0061\u0074\u0063\u0068\u003a" +
                            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                        );
                      __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.onsuccess =
                        () => {
                          __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7[
                            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
                          ] =
                            (
                              __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.result ||
                              []
                            ).join("\u000a") + "\u000a";
                        };
                    },
                  ),
                    (__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.oncomplete =
                      () =>
                        __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708(
                          __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7,
                        )),
                    (__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.onerror =
                      () =>
                        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c(
                          __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.error,
                        )));
                },
              ),
            clear: () =>
              new Promise(
                (
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
                ) => {
                  const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.transaction(
                      "\u0072\u0065\u0063\u006f\u0072\u0064\u0073",
                      "\u0072\u0065\u0061\u0064\u0077\u0072\u0069\u0074\u0065",
                    );
                  (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c
                    .objectStore("\u0072\u0065\u0063\u006f\u0072\u0064\u0073")
                    .clear(),
                    (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.oncomplete =
                      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f),
                    (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.onerror =
                      () =>
                        __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708(
                          __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.error,
                        )));
                },
              ),
          });
        }));
    },
  );
}

export class BulkJob {
  constructor({
    store: __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
    access: __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
    request: __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = fetch,
    update: __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c = () => {},
    now: __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 = Date.now,
    sleep: __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 = (
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
    ) =>
      new Promise((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) =>
        setTimeout(
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
        ),
      ),
    uuid: __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 = () =>
      crypto.randomUUID(),
  }) {
    (Object.assign(this, {
      store: __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
      access: __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
      request: __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
      update: __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
      now: __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
      sleep: __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766,
      uuid: __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7,
    }),
      (this.paused = !1));
  }
  pause() {
    this.paused = !0;
  }
  async create(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) {
    if (await this.store.read())
      throw new Error("\u0041\u0020\u0073\u0061\u0076\u0065\u0064\u0020\u006a\u006f\u0062\u0020\u0061\u006c\u0072\u0065\u0061\u0064\u0079\u0020\u0065\u0078\u0069\u0073\u0074\u0073\u002e\u0020\u0052\u0065\u0073\u0075\u006d\u0065\u0020\u0069\u0074\u0020\u006f\u0072\u0020\u0063\u006c\u0065\u0061\u0072\u0020\u0069\u0074\u0073\u0020\u0073\u0061\u0076\u0065\u0064\u0020\u0070\u0072\u006f\u0067\u0072\u0065\u0073\u0073\u0020\u0066\u0069\u0072\u0073\u0074\u002e");
    if (
      !Number.isSafeInteger(
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.total,
      ) ||
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.total < 1 ||
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.total > 1e5 ||
      !__1e43b581d9e81ebe211439176828c4a6394bed84c420ce03a2fc765a408e1ee2.has(
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.host,
      )
    )
      throw new Error("\u0043\u0068\u006f\u006f\u0073\u0065\u0020\u0075\u0070\u0020\u0074\u006f\u0020\u0031\u0030\u0030\u002c\u0030\u0030\u0030\u0020\u006c\u0069\u006e\u006b\u0073\u0020\u0061\u006e\u0064\u0020\u0061\u0020\u0073\u0075\u0070\u0070\u006f\u0072\u0074\u0065\u0064\u0020\u0043\u0044\u004e\u002e");
    const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = await this.access();
    if (!__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.uid)
      throw new Error("\u0053\u0069\u0067\u006e\u0020\u0069\u006e\u0020\u0074\u006f\u0020\u0079\u006f\u0075\u0072\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0061\u0062\u006f\u0076\u0065\u0020\u0062\u0065\u0066\u006f\u0072\u0065\u0020\u0073\u0074\u0061\u0072\u0074\u0069\u006e\u0067\u0020\u0061\u0020\u006c\u0061\u0072\u0067\u0065\u0020\u006a\u006f\u0062\u002e");
    const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = {
      id: this.uuid(),
      uid: __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.uid,
      label: __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.label,
      host: __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.host,
      total: __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.total,
      completed: 0,
      batches: [],
      pending: null,
      nextAt: 0,
    };
    return (
      await this.store.save(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708),
      __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708
    );
  }
  async run() {
    let __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
      await this.store.read();
    if (!__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f)
      throw new Error("\u0054\u0068\u0065\u0072\u0065\u0020\u0069\u0073\u0020\u006e\u006f\u0020\u0073\u0061\u0076\u0065\u0064\u0020\u006a\u006f\u0062\u0020\u0074\u006f\u0020\u0072\u0065\u0073\u0075\u006d\u0065\u002e");
    this.paused = !1;
    let __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = 0;
    for (
      ;
      !this.paused &&
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.completed <
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.total;

    ) {
      if (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.nextAt > this.now()) {
        (this.update(
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
          "\u0057\u0061\u0069\u0074\u0069\u006e\u0067\u0020\u0075\u006e\u0074\u0069\u006c\u0020" +
            new Date(
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.nextAt,
            ).toLocaleTimeString() +
            "\u002e\u0020\u0059\u006f\u0075\u0020\u0063\u0061\u006e\u0020\u0070\u0061\u0075\u0073\u0065\u0020\u0061\u006e\u0064\u0020\u0072\u0065\u0074\u0075\u0072\u006e\u0020\u006c\u0061\u0074\u0065\u0072\u002e",
        ),
          await this.sleep(
            Math.min(
              1e3,
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.nextAt -
                this.now(),
            ),
          ));
        continue;
      }
      const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
        await this.access();
      if (
        __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.uid !==
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.uid
      )
        throw new Error("\u0053\u0069\u0067\u006e\u0020\u0069\u006e\u0020\u0074\u006f\u0020\u0074\u0068\u0065\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0074\u0068\u0061\u0074\u0020\u0073\u0074\u0061\u0072\u0074\u0065\u0064\u0020\u0074\u0068\u0069\u0073\u0020\u006a\u006f\u0062\u002e");
      if (this.paused) break;
      let __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
        __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477;
      (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.pending ||
        ((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.pending = {
          id: this.uuid(),
          amount: Math.min(
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.limit,
            1e3,
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.total -
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.completed,
          ),
          method: __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.method,
        }),
        await this.store.save(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f)),
        this.update(
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
          "\u0050\u0075\u0062\u006c\u0069\u0073\u0068\u0069\u006e\u0067\u0020\u0074\u0068\u0065\u0020\u006e\u0065\u0078\u0074\u0020" +
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.pending.amount.toLocaleString() +
            "\u0020\u006c\u0069\u006e\u006b\u0073\u2026",
        ));
      try {
        ((__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c = await this.request(
          "\u002f\u0061\u0070\u0069\u002f\u006c\u0069\u006e\u006b\u002d\u0067\u0065\u006e\u0065\u0072\u0061\u0074\u006f\u0072",
          {
            method: "\u0050\u004f\u0053\u0054",
            headers: {
              "\u0043\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0054\u0079\u0070\u0065": "\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u006a\u0073\u006f\u006e",
              Accept: "\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u006a\u0073\u006f\u006e",
              Authorization:
                "\u0042\u0065\u0061\u0072\u0065\u0072\u0020" +
                __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.token,
            },
            signal: AbortSignal.timeout(12e4),
            body: JSON.stringify({
              provider: "\u006a\u0073\u0064\u0065\u006c\u0069\u0076\u0072",
              method:
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.pending.method,
              label: __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.label,
              amount:
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.pending.amount,
              batchRequestId:
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.pending.id,
            }),
          },
        )),
          (__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 =
            await __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.json()));
      } catch {
        if (
          (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53++,
          (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.nextAt =
            this.now() +
            Math.min(
              9e5,
              6e4 * 2 ** (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 - 1),
            )),
          await this.store.save(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f),
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 >= 5)
        )
          throw new Error(
            "\u0043\u006f\u006e\u006e\u0065\u0063\u0074\u0069\u006f\u006e\u0020\u006b\u0065\u0070\u0074\u0020\u0066\u0061\u0069\u006c\u0069\u006e\u0067\u002e\u0020\u0050\u0072\u006f\u0067\u0072\u0065\u0073\u0073\u0020\u0069\u0073\u0020\u0073\u0061\u0076\u0065\u0064\u003b\u0020\u0072\u0065\u0073\u0075\u006d\u0065\u0020\u006c\u0061\u0074\u0065\u0072\u0020\u0074\u006f\u0020\u0063\u0068\u0065\u0063\u006b\u0020\u0074\u0068\u0065\u0020\u0073\u0061\u006d\u0065\u0020\u0062\u0061\u0074\u0063\u0068\u002e",
          );
        continue;
      }
      if (!__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.ok) {
        if (
          429 === __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.status &&
          "\u0053\u0054\u0041\u0054\u0049\u0043\u005f\u0050\u0041\u0043\u004b\u0041\u0047\u0045\u005f\u0050\u0052\u0045\u0050\u0041\u0052\u0049\u004e\u0047" ===
            __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.code
        ) {
          ((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.nextAt =
            this.now() +
            1e3 *
              Math.max(
                10,
                Number(
                  __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.headers.get(
                    "\u0052\u0065\u0074\u0072\u0079\u002d\u0041\u0066\u0074\u0065\u0072",
                  ),
                ) || 10,
              )),
            await this.store.save(
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
            ),
            this.update(
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
              __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.error,
            ));
          continue;
        }
        if (
          429 === __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.status ||
          __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.status >= 500
        ) {
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53++;
          const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
              __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.headers.get(
                "\u0052\u0065\u0074\u0072\u0079\u002d\u0041\u0066\u0074\u0065\u0072",
              ),
            __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 =
              Number(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708) ||
              Math.max(
                0,
                (Date.parse(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708) -
                  this.now()) /
                  1e3,
              ) ||
              60;
          if (
            ((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.nextAt =
              this.now() +
              Math.max(
                1e3 * __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
                Math.min(
                  9e5,
                  6e4 *
                    2 ** (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 - 1),
                ),
              )),
            await this.store.save(
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
            ),
            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 >= 5)
          )
            throw new Error("\u0050\u0075\u0062\u006c\u0069\u0073\u0068\u0069\u006e\u0067\u0020\u0069\u0073\u0020\u0073\u0074\u0069\u006c\u006c\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u002e\u0020\u0050\u0072\u006f\u0067\u0072\u0065\u0073\u0073\u0020\u0069\u0073\u0020\u0073\u0061\u0076\u0065\u0064\u003b\u0020\u0072\u0065\u0073\u0075\u006d\u0065\u0020\u006c\u0061\u0074\u0065\u0072\u002e");
          continue;
        }
        throw new Error(
          __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.error ||
            "\u0050\u0075\u0062\u006c\u0069\u0073\u0068\u0069\u006e\u0067\u0020\u0073\u0074\u006f\u0070\u0070\u0065\u0064\u002e\u0020\u0059\u006f\u0075\u0072\u0020\u0063\u006f\u006d\u0070\u006c\u0065\u0074\u0065\u0064\u0020\u006c\u0069\u006e\u006b\u0073\u0020\u0061\u0072\u0065\u0020\u0073\u0061\u0076\u0065\u0064\u002e",
        );
      }
      const __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 = (
        __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.links || []
      ).map((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) => {
        const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = new URL(
          "\u0073\u0074\u0072\u0069\u006e\u0067" == typeof __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
            ? __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
            : __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.url,
        );
        if (
          "\u0068\u0074\u0074\u0070\u0073\u003a" !==
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.protocol ||
          !__1e43b581d9e81ebe211439176828c4a6394bed84c420ce03a2fc765a408e1ee2.has(
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.hostname,
          ) ||
          !__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.pathname.startsWith(
            "\u002f\u0067\u0068\u002f",
          )
        )
          throw new Error("\u0050\u0075\u0062\u006c\u0069\u0073\u0068\u0065\u0072\u0020\u0072\u0065\u0074\u0075\u0072\u006e\u0065\u0064\u0020\u0061\u006e\u0020\u0075\u006e\u0065\u0078\u0070\u0065\u0063\u0074\u0065\u0064\u0020\u006c\u0069\u006e\u006b\u002e\u0020\u0050\u0072\u006f\u0067\u0072\u0065\u0073\u0073\u0020\u0069\u0073\u0020\u0073\u0061\u0076\u0065\u0064\u002e");
        return (
          (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.hostname =
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.host),
          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.href
        );
      });
      if (
        __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.length !==
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.pending.amount ||
        new Set(__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766).size !==
          __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.length
      )
        throw new Error("\u0054\u0068\u0065\u0020\u0062\u0061\u0074\u0063\u0068\u0020\u0072\u0065\u0073\u0075\u006c\u0074\u0020\u0077\u0061\u0073\u0020\u0069\u006e\u0063\u006f\u006d\u0070\u006c\u0065\u0074\u0065\u002e\u0020\u0052\u0065\u0073\u0075\u006d\u0065\u0020\u0074\u006f\u0020\u0063\u0068\u0065\u0063\u006b\u0020\u0074\u0068\u0065\u0020\u0073\u0061\u006d\u0065\u0020\u0062\u0061\u0074\u0063\u0068\u002e");
      const __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 = {
          id: __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.pending.id,
          links: __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766,
        },
        __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 = {
          ...__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
          batches: [
            ...__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.batches,
            __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.id,
          ],
          completed:
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.completed +
            __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.length,
          pending: null,
          nextAt: Math.max(
            this.now() + 3e4,
            Number(
              __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.premiumCooldown
                ?.cooldownUntil,
            ) || 0,
          ),
        };
      (await this.store.save(
        __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061,
        __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7,
      ),
        (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
          __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061),
        (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = 0),
        this.update(
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
          "\u0053\u0061\u0076\u0065\u0064\u0020" +
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.completed.toLocaleString() +
            "\u0020\u0070\u0075\u0062\u006c\u0069\u0073\u0068\u0065\u0064\u0020\u006c\u0069\u006e\u006b\u0073\u002e",
        ));
    }
    return (
      this.update(
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.completed ===
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.total
          ? "\u0043\u006f\u006d\u0070\u006c\u0065\u0074\u0065\u002e\u0020\u0059\u006f\u0075\u0072\u0020\u006c\u0069\u006e\u006b\u0073\u0020\u0061\u0072\u0065\u0020\u0072\u0065\u0061\u0064\u0079\u0020\u0074\u006f\u0020\u0064\u006f\u0077\u006e\u006c\u006f\u0061\u0064\u002e"
          : "\u0050\u0061\u0075\u0073\u0065\u0064\u002e\u0020\u0050\u0072\u006f\u0067\u0072\u0065\u0073\u0073\u0020\u0069\u0073\u0020\u0073\u0061\u0076\u0065\u0064\u0020\u006f\u006e\u0020\u0074\u0068\u0069\u0073\u0020\u0064\u0065\u0076\u0069\u0063\u0065\u002e",
      ),
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f
    );
  }
}

export async function attachBulkJobs({
  access: __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
}) {
  const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
      document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0062\u0075\u006c\u006b\u002d\u006a\u006f\u0062\u005d"),
    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.querySelector(
        "\u005b\u0064\u0061\u0074\u0061\u002d\u006a\u006f\u0062\u002d\u0073\u0074\u0061\u0074\u0075\u0073\u005d",
      ),
    __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.querySelector("\u0070\u0072\u006f\u0067\u0072\u0065\u0073\u0073"),
    __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 =
      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.querySelector(
        "\u005b\u0064\u0061\u0074\u0061\u002d\u006a\u006f\u0062\u002d\u0072\u0065\u0073\u0075\u006d\u0065\u005d",
      ),
    __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 =
      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.querySelector(
        "\u005b\u0064\u0061\u0074\u0061\u002d\u006a\u006f\u0062\u002d\u0070\u0061\u0075\u0073\u0065\u005d",
      ),
    __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 =
      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.querySelector(
        "\u005b\u0064\u0061\u0074\u0061\u002d\u006a\u006f\u0062\u002d\u0064\u006f\u0077\u006e\u006c\u006f\u0061\u0064\u005d",
      ),
    __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 =
      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.querySelector(
        "\u005b\u0064\u0061\u0074\u0061\u002d\u006a\u006f\u0062\u002d\u0063\u006c\u0065\u0061\u0072\u005d",
      );
  if (!navigator.locks || !globalThis.indexedDB)
    throw new Error("\u004c\u0061\u0072\u0067\u0065\u0020\u006a\u006f\u0062\u0073\u0020\u006e\u0065\u0065\u0064\u0020\u0061\u0020\u0062\u0072\u006f\u0077\u0073\u0065\u0072\u0020\u0077\u0069\u0074\u0068\u0020\u006c\u006f\u0063\u0061\u006c\u0020\u0073\u0074\u006f\u0072\u0061\u0067\u0065\u0020\u0061\u006e\u0064\u0020\u0057\u0065\u0062\u0020\u004c\u006f\u0063\u006b\u0073\u0020\u0073\u0075\u0070\u0070\u006f\u0072\u0074\u002e");
  const __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 = await openJobStore();
  let __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e = !1;
  const __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22 = (
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
      __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106,
    ) => {
      ((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.hidden = !1),
        (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.max =
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f?.total || 1),
        (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.value =
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f?.completed || 0),
        (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.textContent =
          (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f
            ? __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.completed.toLocaleString() +
              "\u0020\u002f\u0020" +
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.total.toLocaleString() +
              "\u0020\u2014\u0020"
            : "") + __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106),
        (__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.disabled =
          __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e ||
          !__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f ||
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.completed ===
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.total),
        (__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.disabled =
          !__195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e),
        (__bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061.disabled =
          __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e ||
          !__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f),
        (__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.disabled =
          !__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f?.completed));
    },
    __0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba = new BulkJob({
      store: __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106,
      access: __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
      update: __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22,
    }),
    __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e = async (
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
    ) =>
      navigator.locks
        .request(
          "\u006e\u0079\u0078\u002d\u006c\u0069\u006e\u006b\u002d\u0070\u0075\u0062\u006c\u0069\u0073\u0068\u002d\u006a\u006f\u0062",
          {
            ifAvailable: !0,
          },
          async (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) => {
            if (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53)
              try {
                ((__195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e = !0),
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f &&
                    (await __0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba.create(
                      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                    )),
                  await __0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba.run());
              } catch (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708) {
                __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22(
                  await __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106.read(),
                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.message +
                    "\u0020\u004e\u006f\u0020\u0066\u0075\u0072\u0074\u0068\u0065\u0072\u0020\u0062\u0061\u0074\u0063\u0068\u0065\u0073\u0020\u0077\u0069\u006c\u006c\u0020\u0062\u0065\u0020\u0073\u0065\u006e\u0074\u002e",
                );
              } finally {
                __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e = !1;
                const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
                  await __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106.read();
                ((__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.disabled =
                  !__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f ||
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.completed ===
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.total),
                  (__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.disabled =
                    !0),
                  (__bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061.disabled =
                    !__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f));
              }
            else
              __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22(
                await __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106.read(),
                "\u0054\u0068\u0069\u0073\u0020\u006a\u006f\u0062\u0020\u0069\u0073\u0020\u0061\u006c\u0072\u0065\u0061\u0064\u0079\u0020\u0072\u0075\u006e\u006e\u0069\u006e\u0067\u0020\u0069\u006e\u0020\u0061\u006e\u006f\u0074\u0068\u0065\u0072\u0020\u0074\u0061\u0062\u002e",
              );
          },
        )
        .catch((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => {
          ((__195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e = !1),
            (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.hidden = !1),
            (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.textContent =
              "\u0043\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0061\u0063\u0063\u0065\u0073\u0073\u0020\u0073\u0061\u0076\u0065\u0064\u0020\u0070\u0072\u006f\u0067\u0072\u0065\u0073\u0073\u003a\u0020" +
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.message),
            (__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.disabled = !0));
        });
  (__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.addEventListener(
    "\u0063\u006c\u0069\u0063\u006b",
    () => {
      __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e();
    },
  ),
    __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.addEventListener(
      "\u0063\u006c\u0069\u0063\u006b",
      () => {
        (__0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba.pause(),
          (__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.disabled = !0),
          (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.textContent =
            "\u0050\u0061\u0075\u0073\u0069\u006e\u0067\u0020\u0061\u0066\u0074\u0065\u0072\u0020\u0074\u0068\u0065\u0020\u0063\u0075\u0072\u0072\u0065\u006e\u0074\u0020\u0072\u0065\u0071\u0075\u0065\u0073\u0074\u0020\u0066\u0069\u006e\u0069\u0073\u0068\u0065\u0073\u2026"));
      },
    ),
    __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.addEventListener(
      "\u0063\u006c\u0069\u0063\u006b",
      async () => {
        try {
          const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
              await __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106.read(),
            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
              await __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106.links(
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
              ),
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
              URL.createObjectURL(
                new Blob(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53, {
                  type: "\u0074\u0065\u0078\u0074\u002f\u0070\u006c\u0061\u0069\u006e\u003b\u0063\u0068\u0061\u0072\u0073\u0065\u0074\u003d\u0075\u0074\u0066\u002d\u0038",
                }),
              ),
            __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
              document.createElement("\u0061");
          ((__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.href =
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708),
            (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.download =
              "\u006e\u0079\u0078\u002d\u006c\u0069\u006e\u006b\u0073\u002d" +
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.completed +
              "\u002e\u0074\u0078\u0074"),
            document.body.appendChild(
              __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
            ),
            __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.click(),
            __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.remove(),
            setTimeout(
              () =>
                URL.revokeObjectURL(
                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
                ),
              1e3,
            ));
        } catch (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) {
          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.textContent =
            "\u0043\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0064\u006f\u0077\u006e\u006c\u006f\u0061\u0064\u003a\u0020" +
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.message;
        }
      },
    ),
    __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061.addEventListener(
      "\u0063\u006c\u0069\u0063\u006b",
      () => {
        confirm(
          "\u0043\u006c\u0065\u0061\u0072\u0020\u0074\u0068\u0069\u0073\u0020\u0073\u0061\u0076\u0065\u0064\u0020\u006a\u006f\u0062\u0020\u0061\u006e\u0064\u0020\u0069\u0074\u0073\u0020\u006c\u006f\u0063\u0061\u006c\u0020\u006c\u0069\u006e\u006b\u0020\u006c\u0069\u0073\u0074\u003f\u0020\u0050\u0075\u0062\u006c\u0069\u0073\u0068\u0065\u0064\u0020\u0066\u0069\u006c\u0065\u0073\u0020\u0077\u0069\u006c\u006c\u0020\u0073\u0074\u0061\u0079\u0020\u006f\u006e\u006c\u0069\u006e\u0065\u002e\u0020\u0044\u006f\u0077\u006e\u006c\u006f\u0061\u0064\u0020\u0079\u006f\u0075\u0072\u0020\u006c\u0069\u006e\u006b\u0073\u0020\u0066\u0069\u0072\u0073\u0074\u002e",
        ) &&
          navigator.locks.request(
            "\u006e\u0079\u0078\u002d\u006c\u0069\u006e\u006b\u002d\u0070\u0075\u0062\u006c\u0069\u0073\u0068\u002d\u006a\u006f\u0062",
            {
              ifAvailable: !0,
            },
            async (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => {
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f &&
                (await __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106.clear(),
                __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22(
                  null,
                  "\u0053\u0061\u0076\u0065\u0064\u0020\u006a\u006f\u0062\u0020\u0063\u006c\u0065\u0061\u0072\u0065\u0064\u002e",
                ));
            },
          );
      },
    ));
  const __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265 =
    await __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106.read();
  return (
    __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265 &&
      __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22(
        __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265,
        "\u0053\u0061\u0076\u0065\u0064\u0020\u006a\u006f\u0062\u0020\u0066\u006f\u0075\u006e\u0064\u002e\u0020\u0053\u0069\u0067\u006e\u0020\u0069\u006e\u0020\u0074\u006f\u0020\u0074\u0068\u0065\u0020\u0073\u0061\u006d\u0065\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0061\u006e\u0064\u0020\u0063\u0068\u006f\u006f\u0073\u0065\u0020\u0052\u0065\u0073\u0075\u006d\u0065\u002e",
      ),
    {
      start: (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
        __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e(
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
        ),
    }
  );
}
