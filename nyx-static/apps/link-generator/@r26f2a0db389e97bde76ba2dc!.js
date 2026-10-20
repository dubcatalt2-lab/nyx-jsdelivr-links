const __a155843825f3459c40a70430c7a06f35f247364a3f76b013e39abecb5b10456e = new Set([
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
      __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
      __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
    ) => {
      const __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f = indexedDB.open(
        "\u006e\u0079\u0078\u002e\u006c\u0069\u006e\u006b\u002d\u0070\u0075\u0062\u006c\u0069\u0073\u0068\u002d\u006a\u006f\u0062\u0073",
        1,
      );
      ((__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.onupgradeneeded = () =>
        __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.result.createObjectStore(
          "\u0072\u0065\u0063\u006f\u0072\u0064\u0073",
        )),
        (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.onerror = () =>
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede(
            __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.error,
          )),
        (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.onsuccess = () => {
          const __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede =
            __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.result;
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28({
            read: () =>
              new Promise(
                (
                  __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
                  __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
                ) => {
                  const __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 =
                    __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede
                      .transaction("\u0072\u0065\u0063\u006f\u0072\u0064\u0073")
                      .objectStore("\u0072\u0065\u0063\u006f\u0072\u0064\u0073")
                      .get("\u006a\u006f\u0062");
                  ((__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.onsuccess =
                    () =>
                      __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28(
                        __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.result ||
                          null,
                      )),
                    (__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.onerror =
                      () =>
                        __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f(
                          __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.error,
                        )));
                },
              ),
            save: (
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
              __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
            ) =>
              new Promise(
                (
                  __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0,
                  __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579,
                ) => {
                  const __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45 =
                      __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.transaction(
                        "\u0072\u0065\u0063\u006f\u0072\u0064\u0073",
                        "\u0072\u0065\u0061\u0064\u0077\u0072\u0069\u0074\u0065",
                      ),
                    __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d =
                      __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.objectStore(
                        "\u0072\u0065\u0063\u006f\u0072\u0064\u0073",
                      );
                  (__67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d.put(
                    __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
                    "\u006a\u006f\u0062",
                  ),
                    __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f &&
                      __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d.put(
                        __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.links,
                        "\u0062\u0061\u0074\u0063\u0068\u003a" +
                          __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.id,
                      ),
                    (__dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.oncomplete =
                      __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0),
                    (__dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.onerror =
                      () =>
                        __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579(
                          __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.error,
                        )),
                    (__dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.onabort =
                      () =>
                        __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579(
                          __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.error ||
                            new Error("\u0050\u0072\u006f\u0067\u0072\u0065\u0073\u0073\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0073\u0061\u0076\u0065\u0064\u002e"),
                        )));
                },
              ),
            links: (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) =>
              new Promise(
                (
                  __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
                  __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0,
                ) => {
                  const __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 =
                      __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.transaction(
                        "\u0072\u0065\u0063\u006f\u0072\u0064\u0073",
                      ),
                    __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45 =
                      __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.objectStore(
                        "\u0072\u0065\u0063\u006f\u0072\u0064\u0073",
                      ),
                    __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d = [];
                  (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.batches.forEach(
                    (
                      __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
                      __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
                    ) => {
                      const __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f =
                        __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.get(
                          "\u0062\u0061\u0074\u0063\u0068\u003a" +
                            __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
                        );
                      __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.onsuccess =
                        () => {
                          __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d[
                            __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede
                          ] =
                            (
                              __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.result ||
                              []
                            ).join("\u000a") + "\u000a";
                        };
                    },
                  ),
                    (__64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.oncomplete =
                      () =>
                        __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f(
                          __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d,
                        )),
                    (__64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.onerror =
                      () =>
                        __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0(
                          __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.error,
                        )));
                },
              ),
            clear: () =>
              new Promise(
                (
                  __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
                  __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
                ) => {
                  const __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 =
                    __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.transaction(
                      "\u0072\u0065\u0063\u006f\u0072\u0064\u0073",
                      "\u0072\u0065\u0061\u0064\u0077\u0072\u0069\u0074\u0065",
                    );
                  (__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0
                    .objectStore("\u0072\u0065\u0063\u006f\u0072\u0064\u0073")
                    .clear(),
                    (__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.oncomplete =
                      __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28),
                    (__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.onerror =
                      () =>
                        __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f(
                          __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.error,
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
    store: __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
    access: __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
    request: __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f = fetch,
    update: __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 = () => {},
    now: __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 = Date.now,
    sleep: __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45 = (
      __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
    ) =>
      new Promise((__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede) =>
        setTimeout(
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
        ),
      ),
    uuid: __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d = () =>
      crypto.randomUUID(),
  }) {
    (Object.assign(this, {
      store: __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
      access: __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
      request: __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
      update: __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0,
      now: __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579,
      sleep: __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45,
      uuid: __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d,
    }),
      (this.paused = !1));
  }
  pause() {
    this.paused = !0;
  }
  async create(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) {
    if (await this.store.read())
      throw new Error("\u0041\u0020\u0073\u0061\u0076\u0065\u0064\u0020\u006a\u006f\u0062\u0020\u0061\u006c\u0072\u0065\u0061\u0064\u0079\u0020\u0065\u0078\u0069\u0073\u0074\u0073\u002e\u0020\u0052\u0065\u0073\u0075\u006d\u0065\u0020\u0069\u0074\u0020\u006f\u0072\u0020\u0063\u006c\u0065\u0061\u0072\u0020\u0069\u0074\u0073\u0020\u0073\u0061\u0076\u0065\u0064\u0020\u0070\u0072\u006f\u0067\u0072\u0065\u0073\u0073\u0020\u0066\u0069\u0072\u0073\u0074\u002e");
    if (
      !Number.isSafeInteger(
        __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.total,
      ) ||
      __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.total < 1 ||
      __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.total > 1e5 ||
      !__a155843825f3459c40a70430c7a06f35f247364a3f76b013e39abecb5b10456e.has(
        __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.host,
      )
    )
      throw new Error("\u0043\u0068\u006f\u006f\u0073\u0065\u0020\u0075\u0070\u0020\u0074\u006f\u0020\u0031\u0030\u0030\u002c\u0030\u0030\u0030\u0020\u006c\u0069\u006e\u006b\u0073\u0020\u0061\u006e\u0064\u0020\u0061\u0020\u0073\u0075\u0070\u0070\u006f\u0072\u0074\u0065\u0064\u0020\u0043\u0044\u004e\u002e");
    const __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede = await this.access();
    if (!__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.uid)
      throw new Error("\u0053\u0069\u0067\u006e\u0020\u0069\u006e\u0020\u0074\u006f\u0020\u0079\u006f\u0075\u0072\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0061\u0062\u006f\u0076\u0065\u0020\u0062\u0065\u0066\u006f\u0072\u0065\u0020\u0073\u0074\u0061\u0072\u0074\u0069\u006e\u0067\u0020\u0061\u0020\u006c\u0061\u0072\u0067\u0065\u0020\u006a\u006f\u0062\u002e");
    const __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f = {
      id: this.uuid(),
      uid: __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.uid,
      label: __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.label,
      host: __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.host,
      total: __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.total,
      completed: 0,
      batches: [],
      pending: null,
      nextAt: 0,
    };
    return (
      await this.store.save(__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f),
      __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f
    );
  }
  async run() {
    let __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 =
      await this.store.read();
    if (!__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28)
      throw new Error("\u0054\u0068\u0065\u0072\u0065\u0020\u0069\u0073\u0020\u006e\u006f\u0020\u0073\u0061\u0076\u0065\u0064\u0020\u006a\u006f\u0062\u0020\u0074\u006f\u0020\u0072\u0065\u0073\u0075\u006d\u0065\u002e");
    this.paused = !1;
    let __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede = 0;
    for (
      ;
      !this.paused &&
      __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.completed <
        __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.total;

    ) {
      if (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.nextAt > this.now()) {
        (this.update(
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
          "\u0057\u0061\u0069\u0074\u0069\u006e\u0067\u0020\u0075\u006e\u0074\u0069\u006c\u0020" +
            new Date(
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.nextAt,
            ).toLocaleTimeString() +
            "\u002e\u0020\u0059\u006f\u0075\u0020\u0063\u0061\u006e\u0020\u0070\u0061\u0075\u0073\u0065\u0020\u0061\u006e\u0064\u0020\u0072\u0065\u0074\u0075\u0072\u006e\u0020\u006c\u0061\u0074\u0065\u0072\u002e",
        ),
          await this.sleep(
            Math.min(
              1e3,
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.nextAt -
                this.now(),
            ),
          ));
        continue;
      }
      const __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f =
        await this.access();
      if (
        __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.uid !==
        __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.uid
      )
        throw new Error("\u0053\u0069\u0067\u006e\u0020\u0069\u006e\u0020\u0074\u006f\u0020\u0074\u0068\u0065\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0074\u0068\u0061\u0074\u0020\u0073\u0074\u0061\u0072\u0074\u0065\u0064\u0020\u0074\u0068\u0069\u0073\u0020\u006a\u006f\u0062\u002e");
      if (this.paused) break;
      let __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0,
        __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579;
      (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.pending ||
        ((__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.pending = {
          id: this.uuid(),
          amount: Math.min(
            __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.limit,
            1e3,
            __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.total -
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.completed,
          ),
          method: __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.method,
        }),
        await this.store.save(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28)),
        this.update(
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
          "\u0050\u0075\u0062\u006c\u0069\u0073\u0068\u0069\u006e\u0067\u0020\u0074\u0068\u0065\u0020\u006e\u0065\u0078\u0074\u0020" +
            __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.pending.amount.toLocaleString() +
            "\u0020\u006c\u0069\u006e\u006b\u0073\u2026",
        ));
      try {
        ((__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 = await this.request(
          "\u002f\u0061\u0070\u0069\u002f\u006c\u0069\u006e\u006b\u002d\u0067\u0065\u006e\u0065\u0072\u0061\u0074\u006f\u0072",
          {
            method: "\u0050\u004f\u0053\u0054",
            headers: {
              "\u0043\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0054\u0079\u0070\u0065": "\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u006a\u0073\u006f\u006e",
              Accept: "\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u006a\u0073\u006f\u006e",
              Authorization:
                "\u0042\u0065\u0061\u0072\u0065\u0072\u0020" +
                __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.token,
            },
            signal: AbortSignal.timeout(12e4),
            body: JSON.stringify({
              provider: "\u006a\u0073\u0064\u0065\u006c\u0069\u0076\u0072",
              method:
                __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.pending.method,
              label: __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.label,
              amount:
                __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.pending.amount,
              batchRequestId:
                __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.pending.id,
            }),
          },
        )),
          (__64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 =
            await __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.json()));
      } catch {
        if (
          (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede++,
          (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.nextAt =
            this.now() +
            Math.min(
              9e5,
              6e4 * 2 ** (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede - 1),
            )),
          await this.store.save(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28),
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede >= 5)
        )
          throw new Error(
            "\u0043\u006f\u006e\u006e\u0065\u0063\u0074\u0069\u006f\u006e\u0020\u006b\u0065\u0070\u0074\u0020\u0066\u0061\u0069\u006c\u0069\u006e\u0067\u002e\u0020\u0050\u0072\u006f\u0067\u0072\u0065\u0073\u0073\u0020\u0069\u0073\u0020\u0073\u0061\u0076\u0065\u0064\u003b\u0020\u0072\u0065\u0073\u0075\u006d\u0065\u0020\u006c\u0061\u0074\u0065\u0072\u0020\u0074\u006f\u0020\u0063\u0068\u0065\u0063\u006b\u0020\u0074\u0068\u0065\u0020\u0073\u0061\u006d\u0065\u0020\u0062\u0061\u0074\u0063\u0068\u002e",
          );
        continue;
      }
      if (!__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.ok) {
        if (
          429 === __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.status &&
          "\u0053\u0054\u0041\u0054\u0049\u0043\u005f\u0050\u0041\u0043\u004b\u0041\u0047\u0045\u005f\u0050\u0052\u0045\u0050\u0041\u0052\u0049\u004e\u0047" ===
            __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.code
        ) {
          ((__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.nextAt =
            this.now() +
            1e3 *
              Math.max(
                10,
                Number(
                  __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.headers.get(
                    "\u0052\u0065\u0074\u0072\u0079\u002d\u0041\u0066\u0074\u0065\u0072",
                  ),
                ) || 10,
              )),
            await this.store.save(
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
            ),
            this.update(
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
              __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.error,
            ));
          continue;
        }
        if (
          429 === __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.status ||
          __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.status >= 500
        ) {
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede++;
          const __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f =
              __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.headers.get(
                "\u0052\u0065\u0074\u0072\u0079\u002d\u0041\u0066\u0074\u0065\u0072",
              ),
            __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 =
              Number(__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f) ||
              Math.max(
                0,
                (Date.parse(__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f) -
                  this.now()) /
                  1e3,
              ) ||
              60;
          if (
            ((__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.nextAt =
              this.now() +
              Math.max(
                1e3 * __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579,
                Math.min(
                  9e5,
                  6e4 *
                    2 ** (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede - 1),
                ),
              )),
            await this.store.save(
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
            ),
            __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede >= 5)
          )
            throw new Error("\u0050\u0075\u0062\u006c\u0069\u0073\u0068\u0069\u006e\u0067\u0020\u0069\u0073\u0020\u0073\u0074\u0069\u006c\u006c\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u002e\u0020\u0050\u0072\u006f\u0067\u0072\u0065\u0073\u0073\u0020\u0069\u0073\u0020\u0073\u0061\u0076\u0065\u0064\u003b\u0020\u0072\u0065\u0073\u0075\u006d\u0065\u0020\u006c\u0061\u0074\u0065\u0072\u002e");
          continue;
        }
        throw new Error(
          __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.error ||
            "\u0050\u0075\u0062\u006c\u0069\u0073\u0068\u0069\u006e\u0067\u0020\u0073\u0074\u006f\u0070\u0070\u0065\u0064\u002e\u0020\u0059\u006f\u0075\u0072\u0020\u0063\u006f\u006d\u0070\u006c\u0065\u0074\u0065\u0064\u0020\u006c\u0069\u006e\u006b\u0073\u0020\u0061\u0072\u0065\u0020\u0073\u0061\u0076\u0065\u0064\u002e",
        );
      }
      const __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45 = (
        __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.links || []
      ).map((__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede) => {
        const __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f = new URL(
          "\u0073\u0074\u0072\u0069\u006e\u0067" == typeof __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede
            ? __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede
            : __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.url,
        );
        if (
          "\u0068\u0074\u0074\u0070\u0073\u003a" !==
            __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.protocol ||
          !__a155843825f3459c40a70430c7a06f35f247364a3f76b013e39abecb5b10456e.has(
            __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.hostname,
          ) ||
          !__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.pathname.startsWith(
            "\u002f\u0067\u0068\u002f",
          )
        )
          throw new Error("\u0050\u0075\u0062\u006c\u0069\u0073\u0068\u0065\u0072\u0020\u0072\u0065\u0074\u0075\u0072\u006e\u0065\u0064\u0020\u0061\u006e\u0020\u0075\u006e\u0065\u0078\u0070\u0065\u0063\u0074\u0065\u0064\u0020\u006c\u0069\u006e\u006b\u002e\u0020\u0050\u0072\u006f\u0067\u0072\u0065\u0073\u0073\u0020\u0069\u0073\u0020\u0073\u0061\u0076\u0065\u0064\u002e");
        return (
          (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.hostname =
            __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.host),
          __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.href
        );
      });
      if (
        __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.length !==
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.pending.amount ||
        new Set(__dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45).size !==
          __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.length
      )
        throw new Error("\u0054\u0068\u0065\u0020\u0062\u0061\u0074\u0063\u0068\u0020\u0072\u0065\u0073\u0075\u006c\u0074\u0020\u0077\u0061\u0073\u0020\u0069\u006e\u0063\u006f\u006d\u0070\u006c\u0065\u0074\u0065\u002e\u0020\u0052\u0065\u0073\u0075\u006d\u0065\u0020\u0074\u006f\u0020\u0063\u0068\u0065\u0063\u006b\u0020\u0074\u0068\u0065\u0020\u0073\u0061\u006d\u0065\u0020\u0062\u0061\u0074\u0063\u0068\u002e");
      const __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d = {
          id: __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.pending.id,
          links: __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45,
        },
        __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd = {
          ...__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
          batches: [
            ...__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.batches,
            __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d.id,
          ],
          completed:
            __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.completed +
            __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.length,
          pending: null,
          nextAt: Math.max(
            this.now() + 3e4,
            Number(
              __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.premiumCooldown
                ?.cooldownUntil,
            ) || 0,
          ),
        };
      (await this.store.save(
        __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd,
        __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d,
      ),
        (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 =
          __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd),
        (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede = 0),
        this.update(
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
          "\u0053\u0061\u0076\u0065\u0064\u0020" +
            __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.completed.toLocaleString() +
            "\u0020\u0070\u0075\u0062\u006c\u0069\u0073\u0068\u0065\u0064\u0020\u006c\u0069\u006e\u006b\u0073\u002e",
        ));
    }
    return (
      this.update(
        __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
        __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.completed ===
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.total
          ? "\u0043\u006f\u006d\u0070\u006c\u0065\u0074\u0065\u002e\u0020\u0059\u006f\u0075\u0072\u0020\u006c\u0069\u006e\u006b\u0073\u0020\u0061\u0072\u0065\u0020\u0072\u0065\u0061\u0064\u0079\u0020\u0074\u006f\u0020\u0064\u006f\u0077\u006e\u006c\u006f\u0061\u0064\u002e"
          : "\u0050\u0061\u0075\u0073\u0065\u0064\u002e\u0020\u0050\u0072\u006f\u0067\u0072\u0065\u0073\u0073\u0020\u0069\u0073\u0020\u0073\u0061\u0076\u0065\u0064\u0020\u006f\u006e\u0020\u0074\u0068\u0069\u0073\u0020\u0064\u0065\u0076\u0069\u0063\u0065\u002e",
      ),
      __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28
    );
  }
}

export async function attachBulkJobs({
  access: __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
}) {
  const __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede =
      document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0062\u0075\u006c\u006b\u002d\u006a\u006f\u0062\u005d"),
    __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f =
      __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.querySelector(
        "\u005b\u0064\u0061\u0074\u0061\u002d\u006a\u006f\u0062\u002d\u0073\u0074\u0061\u0074\u0075\u0073\u005d",
      ),
    __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 =
      __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.querySelector("\u0070\u0072\u006f\u0067\u0072\u0065\u0073\u0073"),
    __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 =
      __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.querySelector(
        "\u005b\u0064\u0061\u0074\u0061\u002d\u006a\u006f\u0062\u002d\u0072\u0065\u0073\u0075\u006d\u0065\u005d",
      ),
    __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45 =
      __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.querySelector(
        "\u005b\u0064\u0061\u0074\u0061\u002d\u006a\u006f\u0062\u002d\u0070\u0061\u0075\u0073\u0065\u005d",
      ),
    __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d =
      __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.querySelector(
        "\u005b\u0064\u0061\u0074\u0061\u002d\u006a\u006f\u0062\u002d\u0064\u006f\u0077\u006e\u006c\u006f\u0061\u0064\u005d",
      ),
    __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd =
      __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.querySelector(
        "\u005b\u0064\u0061\u0074\u0061\u002d\u006a\u006f\u0062\u002d\u0063\u006c\u0065\u0061\u0072\u005d",
      );
  if (!navigator.locks || !globalThis.indexedDB)
    throw new Error("\u004c\u0061\u0072\u0067\u0065\u0020\u006a\u006f\u0062\u0073\u0020\u006e\u0065\u0065\u0064\u0020\u0061\u0020\u0062\u0072\u006f\u0077\u0073\u0065\u0072\u0020\u0077\u0069\u0074\u0068\u0020\u006c\u006f\u0063\u0061\u006c\u0020\u0073\u0074\u006f\u0072\u0061\u0067\u0065\u0020\u0061\u006e\u0064\u0020\u0057\u0065\u0062\u0020\u004c\u006f\u0063\u006b\u0073\u0020\u0073\u0075\u0070\u0070\u006f\u0072\u0074\u002e");
  const __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2 = await openJobStore();
  let __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5 = !1;
  const __37c128880588460342b5be1dfd5b157c42bb28e5b510992c66566aee844f1b65 = (
      __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
      __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2,
    ) => {
      ((__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.hidden = !1),
        (__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.max =
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28?.total || 1),
        (__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.value =
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28?.completed || 0),
        (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.textContent =
          (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28
            ? __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.completed.toLocaleString() +
              "\u0020\u002f\u0020" +
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.total.toLocaleString() +
              "\u0020\u2014\u0020"
            : "") + __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2),
        (__64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.disabled =
          __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5 ||
          !__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 ||
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.completed ===
            __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.total),
        (__dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.disabled =
          !__b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5),
        (__23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd.disabled =
          __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5 ||
          !__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28),
        (__67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d.disabled =
          !__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28?.completed));
    },
    __8cd6a5f96d374ab369b22c8a8b780947702a58489eb9a8703a86c1c2ea05444e = new BulkJob({
      store: __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2,
      access: __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
      update: __37c128880588460342b5be1dfd5b157c42bb28e5b510992c66566aee844f1b65,
    }),
    __2ab10d5388db42e8f0abfc33148c89ee0a82b07c32da0dc2d7dd5801c6063bed = async (
      __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
    ) =>
      navigator.locks
        .request(
          "\u006e\u0079\u0078\u002d\u006c\u0069\u006e\u006b\u002d\u0070\u0075\u0062\u006c\u0069\u0073\u0068\u002d\u006a\u006f\u0062",
          {
            ifAvailable: !0,
          },
          async (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede) => {
            if (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede)
              try {
                ((__b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5 = !0),
                  __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 &&
                    (await __8cd6a5f96d374ab369b22c8a8b780947702a58489eb9a8703a86c1c2ea05444e.create(
                      __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
                    )),
                  await __8cd6a5f96d374ab369b22c8a8b780947702a58489eb9a8703a86c1c2ea05444e.run());
              } catch (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f) {
                __37c128880588460342b5be1dfd5b157c42bb28e5b510992c66566aee844f1b65(
                  await __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2.read(),
                  __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.message +
                    "\u0020\u004e\u006f\u0020\u0066\u0075\u0072\u0074\u0068\u0065\u0072\u0020\u0062\u0061\u0074\u0063\u0068\u0065\u0073\u0020\u0077\u0069\u006c\u006c\u0020\u0062\u0065\u0020\u0073\u0065\u006e\u0074\u002e",
                );
              } finally {
                __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5 = !1;
                const __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 =
                  await __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2.read();
                ((__64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.disabled =
                  !__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 ||
                  __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.completed ===
                    __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.total),
                  (__dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.disabled =
                    !0),
                  (__23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd.disabled =
                    !__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28));
              }
            else
              __37c128880588460342b5be1dfd5b157c42bb28e5b510992c66566aee844f1b65(
                await __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2.read(),
                "\u0054\u0068\u0069\u0073\u0020\u006a\u006f\u0062\u0020\u0069\u0073\u0020\u0061\u006c\u0072\u0065\u0061\u0064\u0079\u0020\u0072\u0075\u006e\u006e\u0069\u006e\u0067\u0020\u0069\u006e\u0020\u0061\u006e\u006f\u0074\u0068\u0065\u0072\u0020\u0074\u0061\u0062\u002e",
              );
          },
        )
        .catch((__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) => {
          ((__b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5 = !1),
            (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.hidden = !1),
            (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.textContent =
              "\u0043\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0061\u0063\u0063\u0065\u0073\u0073\u0020\u0073\u0061\u0076\u0065\u0064\u0020\u0070\u0072\u006f\u0067\u0072\u0065\u0073\u0073\u003a\u0020" +
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.message),
            (__dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.disabled = !0));
        });
  (__64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.addEventListener(
    "\u0063\u006c\u0069\u0063\u006b",
    () => {
      __2ab10d5388db42e8f0abfc33148c89ee0a82b07c32da0dc2d7dd5801c6063bed();
    },
  ),
    __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.addEventListener(
      "\u0063\u006c\u0069\u0063\u006b",
      () => {
        (__8cd6a5f96d374ab369b22c8a8b780947702a58489eb9a8703a86c1c2ea05444e.pause(),
          (__dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.disabled = !0),
          (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.textContent =
            "\u0050\u0061\u0075\u0073\u0069\u006e\u0067\u0020\u0061\u0066\u0074\u0065\u0072\u0020\u0074\u0068\u0065\u0020\u0063\u0075\u0072\u0072\u0065\u006e\u0074\u0020\u0072\u0065\u0071\u0075\u0065\u0073\u0074\u0020\u0066\u0069\u006e\u0069\u0073\u0068\u0065\u0073\u2026"));
      },
    ),
    __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d.addEventListener(
      "\u0063\u006c\u0069\u0063\u006b",
      async () => {
        try {
          const __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 =
              await __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2.read(),
            __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede =
              await __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2.links(
                __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
              ),
            __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f =
              URL.createObjectURL(
                new Blob(__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede, {
                  type: "\u0074\u0065\u0078\u0074\u002f\u0070\u006c\u0061\u0069\u006e\u003b\u0063\u0068\u0061\u0072\u0073\u0065\u0074\u003d\u0075\u0074\u0066\u002d\u0038",
                }),
              ),
            __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 =
              document.createElement("\u0061");
          ((__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.href =
            __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f),
            (__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.download =
              "\u006e\u0079\u0078\u002d\u006c\u0069\u006e\u006b\u0073\u002d" +
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.completed +
              "\u002e\u0074\u0078\u0074"),
            document.body.appendChild(
              __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0,
            ),
            __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.click(),
            __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.remove(),
            setTimeout(
              () =>
                URL.revokeObjectURL(
                  __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
                ),
              1e3,
            ));
        } catch (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) {
          __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.textContent =
            "\u0043\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0064\u006f\u0077\u006e\u006c\u006f\u0061\u0064\u003a\u0020" +
            __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.message;
        }
      },
    ),
    __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd.addEventListener(
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
            async (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) => {
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 &&
                (await __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2.clear(),
                __37c128880588460342b5be1dfd5b157c42bb28e5b510992c66566aee844f1b65(
                  null,
                  "\u0053\u0061\u0076\u0065\u0064\u0020\u006a\u006f\u0062\u0020\u0063\u006c\u0065\u0061\u0072\u0065\u0064\u002e",
                ));
            },
          );
      },
    ));
  const __27ff7ae7a0ee6aae0a2624d293c9390d38bd96930112429ed2ba8f10cadd27e9 =
    await __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2.read();
  return (
    __27ff7ae7a0ee6aae0a2624d293c9390d38bd96930112429ed2ba8f10cadd27e9 &&
      __37c128880588460342b5be1dfd5b157c42bb28e5b510992c66566aee844f1b65(
        __27ff7ae7a0ee6aae0a2624d293c9390d38bd96930112429ed2ba8f10cadd27e9,
        "\u0053\u0061\u0076\u0065\u0064\u0020\u006a\u006f\u0062\u0020\u0066\u006f\u0075\u006e\u0064\u002e\u0020\u0053\u0069\u0067\u006e\u0020\u0069\u006e\u0020\u0074\u006f\u0020\u0074\u0068\u0065\u0020\u0073\u0061\u006d\u0065\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0061\u006e\u0064\u0020\u0063\u0068\u006f\u006f\u0073\u0065\u0020\u0052\u0065\u0073\u0075\u006d\u0065\u002e",
      ),
    {
      start: (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) =>
        __2ab10d5388db42e8f0abfc33148c89ee0a82b07c32da0dc2d7dd5801c6063bed(
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
        ),
    }
  );
}
