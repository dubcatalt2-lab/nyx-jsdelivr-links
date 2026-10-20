const __59c5aaa817eed94a8e5faeb6485c619f38f3e61c75d9a21316015a31931041e1 = new Set([
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
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
    ) => {
      const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = indexedDB.open(
        "\u006e\u0079\u0078\u002e\u006c\u0069\u006e\u006b\u002d\u0070\u0075\u0062\u006c\u0069\u0073\u0068\u002d\u006a\u006f\u0062\u0073",
        1,
      );
      ((__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.onupgradeneeded = () =>
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.result.createObjectStore(
          "\u0072\u0065\u0063\u006f\u0072\u0064\u0073",
        )),
        (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.onerror = () =>
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5(
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.error,
          )),
        (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.onsuccess = () => {
          const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.result;
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96({
            read: () =>
              new Promise(
                (
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                ) => {
                  const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
                      .transaction("\u0072\u0065\u0063\u006f\u0072\u0064\u0073")
                      .objectStore("\u0072\u0065\u0063\u006f\u0072\u0064\u0073")
                      .get("\u006a\u006f\u0062");
                  ((__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.onsuccess =
                    () =>
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(
                        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.result ||
                          null,
                      )),
                    (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.onerror =
                      () =>
                        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c(
                          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.error,
                        )));
                },
              ),
            save: (
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
            ) =>
              new Promise(
                (
                  __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                  __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
                ) => {
                  const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.transaction(
                        "\u0072\u0065\u0063\u006f\u0072\u0064\u0073",
                        "\u0072\u0065\u0061\u0064\u0077\u0072\u0069\u0074\u0065",
                      ),
                    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
                      __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.objectStore(
                        "\u0072\u0065\u0063\u006f\u0072\u0064\u0073",
                      );
                  (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.put(
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                    "\u006a\u006f\u0062",
                  ),
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c &&
                      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.put(
                        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.links,
                        "\u0062\u0061\u0074\u0063\u0068\u003a" +
                          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.id,
                      ),
                    (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.oncomplete =
                      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03),
                    (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.onerror =
                      () =>
                        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
                          __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.error,
                        )),
                    (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.onabort =
                      () =>
                        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
                          __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.error ||
                            new Error("\u0050\u0072\u006f\u0067\u0072\u0065\u0073\u0073\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0073\u0061\u0076\u0065\u0064\u002e"),
                        )));
                },
              ),
            links: (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
              new Promise(
                (
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                  __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                ) => {
                  const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.transaction(
                        "\u0072\u0065\u0063\u006f\u0072\u0064\u0073",
                      ),
                    __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
                      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.objectStore(
                        "\u0072\u0065\u0063\u006f\u0072\u0064\u0073",
                      ),
                    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc = [];
                  (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.batches.forEach(
                    (
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                    ) => {
                      const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                        __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.get(
                          "\u0062\u0061\u0074\u0063\u0068\u003a" +
                            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                        );
                      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.onsuccess =
                        () => {
                          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc[
                            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
                          ] =
                            (
                              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.result ||
                              []
                            ).join("\u000a") + "\u000a";
                        };
                    },
                  ),
                    (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.oncomplete =
                      () =>
                        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c(
                          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
                        )),
                    (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.onerror =
                      () =>
                        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03(
                          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.error,
                        )));
                },
              ),
            clear: () =>
              new Promise(
                (
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                ) => {
                  const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.transaction(
                      "\u0072\u0065\u0063\u006f\u0072\u0064\u0073",
                      "\u0072\u0065\u0061\u0064\u0077\u0072\u0069\u0074\u0065",
                    );
                  (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03
                    .objectStore("\u0072\u0065\u0063\u006f\u0072\u0064\u0073")
                    .clear(),
                    (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.oncomplete =
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
                    (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.onerror =
                      () =>
                        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c(
                          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.error,
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
    store: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    access: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
    request: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = fetch,
    update: __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = () => {},
    now: __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = Date.now,
    sleep: __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a = (
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    ) =>
      new Promise((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) =>
        setTimeout(
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        ),
      ),
    uuid: __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc = () =>
      crypto.randomUUID(),
  }) {
    (Object.assign(this, {
      store: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      access: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
      request: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
      update: __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
      now: __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
      sleep: __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
      uuid: __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
    }),
      (this.paused = !1));
  }
  pause() {
    this.paused = !0;
  }
  async create(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
    if (await this.store.read())
      throw new Error("\u0041\u0020\u0073\u0061\u0076\u0065\u0064\u0020\u006a\u006f\u0062\u0020\u0061\u006c\u0072\u0065\u0061\u0064\u0079\u0020\u0065\u0078\u0069\u0073\u0074\u0073\u002e\u0020\u0052\u0065\u0073\u0075\u006d\u0065\u0020\u0069\u0074\u0020\u006f\u0072\u0020\u0063\u006c\u0065\u0061\u0072\u0020\u0069\u0074\u0073\u0020\u0073\u0061\u0076\u0065\u0064\u0020\u0070\u0072\u006f\u0067\u0072\u0065\u0073\u0073\u0020\u0066\u0069\u0072\u0073\u0074\u002e");
    if (
      !Number.isSafeInteger(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.total,
      ) ||
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.total < 1 ||
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.total > 1e5 ||
      !__59c5aaa817eed94a8e5faeb6485c619f38f3e61c75d9a21316015a31931041e1.has(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.host,
      )
    )
      throw new Error("\u0043\u0068\u006f\u006f\u0073\u0065\u0020\u0075\u0070\u0020\u0074\u006f\u0020\u0031\u0030\u0030\u002c\u0030\u0030\u0030\u0020\u006c\u0069\u006e\u006b\u0073\u0020\u0061\u006e\u0064\u0020\u0061\u0020\u0073\u0075\u0070\u0070\u006f\u0072\u0074\u0065\u0064\u0020\u0043\u0044\u004e\u002e");
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = await this.access();
    if (!__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.uid)
      throw new Error("\u0053\u0069\u0067\u006e\u0020\u0069\u006e\u0020\u0074\u006f\u0020\u0079\u006f\u0075\u0072\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0061\u0062\u006f\u0076\u0065\u0020\u0062\u0065\u0066\u006f\u0072\u0065\u0020\u0073\u0074\u0061\u0072\u0074\u0069\u006e\u0067\u0020\u0061\u0020\u006c\u0061\u0072\u0067\u0065\u0020\u006a\u006f\u0062\u002e");
    const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = {
      id: this.uuid(),
      uid: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.uid,
      label: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.label,
      host: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.host,
      total: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.total,
      completed: 0,
      batches: [],
      pending: null,
      nextAt: 0,
    };
    return (
      await this.store.save(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c),
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
    );
  }
  async run() {
    let __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
      await this.store.read();
    if (!__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96)
      throw new Error("\u0054\u0068\u0065\u0072\u0065\u0020\u0069\u0073\u0020\u006e\u006f\u0020\u0073\u0061\u0076\u0065\u0064\u0020\u006a\u006f\u0062\u0020\u0074\u006f\u0020\u0072\u0065\u0073\u0075\u006d\u0065\u002e");
    this.paused = !1;
    let __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = 0;
    for (
      ;
      !this.paused &&
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.completed <
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.total;

    ) {
      if (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.nextAt > this.now()) {
        (this.update(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          "\u0057\u0061\u0069\u0074\u0069\u006e\u0067\u0020\u0075\u006e\u0074\u0069\u006c\u0020" +
            new Date(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.nextAt,
            ).toLocaleTimeString() +
            "\u002e\u0020\u0059\u006f\u0075\u0020\u0063\u0061\u006e\u0020\u0070\u0061\u0075\u0073\u0065\u0020\u0061\u006e\u0064\u0020\u0072\u0065\u0074\u0075\u0072\u006e\u0020\u006c\u0061\u0074\u0065\u0072\u002e",
        ),
          await this.sleep(
            Math.min(
              1e3,
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.nextAt -
                this.now(),
            ),
          ));
        continue;
      }
      const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
        await this.access();
      if (
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.uid !==
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.uid
      )
        throw new Error("\u0053\u0069\u0067\u006e\u0020\u0069\u006e\u0020\u0074\u006f\u0020\u0074\u0068\u0065\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0074\u0068\u0061\u0074\u0020\u0073\u0074\u0061\u0072\u0074\u0065\u0064\u0020\u0074\u0068\u0069\u0073\u0020\u006a\u006f\u0062\u002e");
      if (this.paused) break;
      let __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713;
      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.pending ||
        ((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.pending = {
          id: this.uuid(),
          amount: Math.min(
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.limit,
            1e3,
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.total -
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.completed,
          ),
          method: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.method,
        }),
        await this.store.save(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96)),
        this.update(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          "\u0050\u0075\u0062\u006c\u0069\u0073\u0068\u0069\u006e\u0067\u0020\u0074\u0068\u0065\u0020\u006e\u0065\u0078\u0074\u0020" +
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.pending.amount.toLocaleString() +
            "\u0020\u006c\u0069\u006e\u006b\u0073\u2026",
        ));
      try {
        ((__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = await this.request(
          "\u002f\u0061\u0070\u0069\u002f\u006c\u0069\u006e\u006b\u002d\u0067\u0065\u006e\u0065\u0072\u0061\u0074\u006f\u0072",
          {
            method: "\u0050\u004f\u0053\u0054",
            headers: {
              "\u0043\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0054\u0079\u0070\u0065": "\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u006a\u0073\u006f\u006e",
              Accept: "\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u006a\u0073\u006f\u006e",
              Authorization:
                "\u0042\u0065\u0061\u0072\u0065\u0072\u0020" +
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.token,
            },
            signal: AbortSignal.timeout(12e4),
            body: JSON.stringify({
              provider: "\u006a\u0073\u0064\u0065\u006c\u0069\u0076\u0072",
              method:
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.pending.method,
              label: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.label,
              amount:
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.pending.amount,
              batchRequestId:
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.pending.id,
            }),
          },
        )),
          (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
            await __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.json()));
      } catch {
        if (
          (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5++,
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.nextAt =
            this.now() +
            Math.min(
              9e5,
              6e4 * 2 ** (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 - 1),
            )),
          await this.store.save(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 >= 5)
        )
          throw new Error(
            "\u0043\u006f\u006e\u006e\u0065\u0063\u0074\u0069\u006f\u006e\u0020\u006b\u0065\u0070\u0074\u0020\u0066\u0061\u0069\u006c\u0069\u006e\u0067\u002e\u0020\u0050\u0072\u006f\u0067\u0072\u0065\u0073\u0073\u0020\u0069\u0073\u0020\u0073\u0061\u0076\u0065\u0064\u003b\u0020\u0072\u0065\u0073\u0075\u006d\u0065\u0020\u006c\u0061\u0074\u0065\u0072\u0020\u0074\u006f\u0020\u0063\u0068\u0065\u0063\u006b\u0020\u0074\u0068\u0065\u0020\u0073\u0061\u006d\u0065\u0020\u0062\u0061\u0074\u0063\u0068\u002e",
          );
        continue;
      }
      if (!__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.ok) {
        if (
          429 === __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.status &&
          "\u0053\u0054\u0041\u0054\u0049\u0043\u005f\u0050\u0041\u0043\u004b\u0041\u0047\u0045\u005f\u0050\u0052\u0045\u0050\u0041\u0052\u0049\u004e\u0047" ===
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.code
        ) {
          ((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.nextAt =
            this.now() +
            1e3 *
              Math.max(
                10,
                Number(
                  __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.headers.get(
                    "\u0052\u0065\u0074\u0072\u0079\u002d\u0041\u0066\u0074\u0065\u0072",
                  ),
                ) || 10,
              )),
            await this.store.save(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
            ),
            this.update(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.error,
            ));
          continue;
        }
        if (
          429 === __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.status ||
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.status >= 500
        ) {
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5++;
          const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.headers.get(
                "\u0052\u0065\u0074\u0072\u0079\u002d\u0041\u0066\u0074\u0065\u0072",
              ),
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
              Number(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c) ||
              Math.max(
                0,
                (Date.parse(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c) -
                  this.now()) /
                  1e3,
              ) ||
              60;
          if (
            ((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.nextAt =
              this.now() +
              Math.max(
                1e3 * __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
                Math.min(
                  9e5,
                  6e4 *
                    2 ** (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 - 1),
                ),
              )),
            await this.store.save(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
            ),
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 >= 5)
          )
            throw new Error("\u0050\u0075\u0062\u006c\u0069\u0073\u0068\u0069\u006e\u0067\u0020\u0069\u0073\u0020\u0073\u0074\u0069\u006c\u006c\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u002e\u0020\u0050\u0072\u006f\u0067\u0072\u0065\u0073\u0073\u0020\u0069\u0073\u0020\u0073\u0061\u0076\u0065\u0064\u003b\u0020\u0072\u0065\u0073\u0075\u006d\u0065\u0020\u006c\u0061\u0074\u0065\u0072\u002e");
          continue;
        }
        throw new Error(
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.error ||
            "\u0050\u0075\u0062\u006c\u0069\u0073\u0068\u0069\u006e\u0067\u0020\u0073\u0074\u006f\u0070\u0070\u0065\u0064\u002e\u0020\u0059\u006f\u0075\u0072\u0020\u0063\u006f\u006d\u0070\u006c\u0065\u0074\u0065\u0064\u0020\u006c\u0069\u006e\u006b\u0073\u0020\u0061\u0072\u0065\u0020\u0073\u0061\u0076\u0065\u0064\u002e",
        );
      }
      const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a = (
        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.links || []
      ).map((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) => {
        const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = new URL(
          "\u0073\u0074\u0072\u0069\u006e\u0067" == typeof __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
            ? __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
            : __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.url,
        );
        if (
          "\u0068\u0074\u0074\u0070\u0073\u003a" !==
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.protocol ||
          !__59c5aaa817eed94a8e5faeb6485c619f38f3e61c75d9a21316015a31931041e1.has(
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.hostname,
          ) ||
          !__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.pathname.startsWith(
            "\u002f\u0067\u0068\u002f",
          )
        )
          throw new Error("\u0050\u0075\u0062\u006c\u0069\u0073\u0068\u0065\u0072\u0020\u0072\u0065\u0074\u0075\u0072\u006e\u0065\u0064\u0020\u0061\u006e\u0020\u0075\u006e\u0065\u0078\u0070\u0065\u0063\u0074\u0065\u0064\u0020\u006c\u0069\u006e\u006b\u002e\u0020\u0050\u0072\u006f\u0067\u0072\u0065\u0073\u0073\u0020\u0069\u0073\u0020\u0073\u0061\u0076\u0065\u0064\u002e");
        return (
          (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.hostname =
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.host),
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.href
        );
      });
      if (
        __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.length !==
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.pending.amount ||
        new Set(__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a).size !==
          __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.length
      )
        throw new Error("\u0054\u0068\u0065\u0020\u0062\u0061\u0074\u0063\u0068\u0020\u0072\u0065\u0073\u0075\u006c\u0074\u0020\u0077\u0061\u0073\u0020\u0069\u006e\u0063\u006f\u006d\u0070\u006c\u0065\u0074\u0065\u002e\u0020\u0052\u0065\u0073\u0075\u006d\u0065\u0020\u0074\u006f\u0020\u0063\u0068\u0065\u0063\u006b\u0020\u0074\u0068\u0065\u0020\u0073\u0061\u006d\u0065\u0020\u0062\u0061\u0074\u0063\u0068\u002e");
      const __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc = {
          id: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.pending.id,
          links: __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
        },
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = {
          ...__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          batches: [
            ...__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.batches,
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.id,
          ],
          completed:
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.completed +
            __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.length,
          pending: null,
          nextAt: Math.max(
            this.now() + 3e4,
            Number(
              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.premiumCooldown
                ?.cooldownUntil,
            ) || 0,
          ),
        };
      (await this.store.save(
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2,
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
      ),
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2),
        (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = 0),
        this.update(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          "\u0053\u0061\u0076\u0065\u0064\u0020" +
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.completed.toLocaleString() +
            "\u0020\u0070\u0075\u0062\u006c\u0069\u0073\u0068\u0065\u0064\u0020\u006c\u0069\u006e\u006b\u0073\u002e",
        ));
    }
    return (
      this.update(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.completed ===
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.total
          ? "\u0043\u006f\u006d\u0070\u006c\u0065\u0074\u0065\u002e\u0020\u0059\u006f\u0075\u0072\u0020\u006c\u0069\u006e\u006b\u0073\u0020\u0061\u0072\u0065\u0020\u0072\u0065\u0061\u0064\u0079\u0020\u0074\u006f\u0020\u0064\u006f\u0077\u006e\u006c\u006f\u0061\u0064\u002e"
          : "\u0050\u0061\u0075\u0073\u0065\u0064\u002e\u0020\u0050\u0072\u006f\u0067\u0072\u0065\u0073\u0073\u0020\u0069\u0073\u0020\u0073\u0061\u0076\u0065\u0064\u0020\u006f\u006e\u0020\u0074\u0068\u0069\u0073\u0020\u0064\u0065\u0076\u0069\u0063\u0065\u002e",
      ),
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
    );
  }
}

export async function attachBulkJobs({
  access: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
}) {
  const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
      document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0062\u0075\u006c\u006b\u002d\u006a\u006f\u0062\u005d"),
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.querySelector(
        "\u005b\u0064\u0061\u0074\u0061\u002d\u006a\u006f\u0062\u002d\u0073\u0074\u0061\u0074\u0075\u0073\u005d",
      ),
    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.querySelector("\u0070\u0072\u006f\u0067\u0072\u0065\u0073\u0073"),
    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.querySelector(
        "\u005b\u0064\u0061\u0074\u0061\u002d\u006a\u006f\u0062\u002d\u0072\u0065\u0073\u0075\u006d\u0065\u005d",
      ),
    __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.querySelector(
        "\u005b\u0064\u0061\u0074\u0061\u002d\u006a\u006f\u0062\u002d\u0070\u0061\u0075\u0073\u0065\u005d",
      ),
    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.querySelector(
        "\u005b\u0064\u0061\u0074\u0061\u002d\u006a\u006f\u0062\u002d\u0064\u006f\u0077\u006e\u006c\u006f\u0061\u0064\u005d",
      ),
    __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 =
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.querySelector(
        "\u005b\u0064\u0061\u0074\u0061\u002d\u006a\u006f\u0062\u002d\u0063\u006c\u0065\u0061\u0072\u005d",
      );
  if (!navigator.locks || !globalThis.indexedDB)
    throw new Error("\u004c\u0061\u0072\u0067\u0065\u0020\u006a\u006f\u0062\u0073\u0020\u006e\u0065\u0065\u0064\u0020\u0061\u0020\u0062\u0072\u006f\u0077\u0073\u0065\u0072\u0020\u0077\u0069\u0074\u0068\u0020\u006c\u006f\u0063\u0061\u006c\u0020\u0073\u0074\u006f\u0072\u0061\u0067\u0065\u0020\u0061\u006e\u0064\u0020\u0057\u0065\u0062\u0020\u004c\u006f\u0063\u006b\u0073\u0020\u0073\u0075\u0070\u0070\u006f\u0072\u0074\u002e");
  const __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 = await openJobStore();
  let __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f = !1;
  const __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 = (
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238,
    ) => {
      ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.hidden = !1),
        (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.max =
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.total || 1),
        (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.value =
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.completed || 0),
        (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.textContent =
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
            ? __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.completed.toLocaleString() +
              "\u0020\u002f\u0020" +
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.total.toLocaleString() +
              "\u0020\u2014\u0020"
            : "") + __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238),
        (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.disabled =
          __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f ||
          !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ||
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.completed ===
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.total),
        (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.disabled =
          !__16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f),
        (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.disabled =
          __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f ||
          !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
        (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.disabled =
          !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.completed));
    },
    __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1 = new BulkJob({
      store: __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238,
      access: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      update: __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239,
    }),
    __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 = async (
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    ) =>
      navigator.locks
        .request(
          "\u006e\u0079\u0078\u002d\u006c\u0069\u006e\u006b\u002d\u0070\u0075\u0062\u006c\u0069\u0073\u0068\u002d\u006a\u006f\u0062",
          {
            ifAvailable: !0,
          },
          async (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) => {
            if (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5)
              try {
                ((__16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f = !0),
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
                    (await __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1.create(
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                    )),
                  await __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1.run());
              } catch (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c) {
                __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(
                  await __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.read(),
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.message +
                    "\u0020\u004e\u006f\u0020\u0066\u0075\u0072\u0074\u0068\u0065\u0072\u0020\u0062\u0061\u0074\u0063\u0068\u0065\u0073\u0020\u0077\u0069\u006c\u006c\u0020\u0062\u0065\u0020\u0073\u0065\u006e\u0074\u002e",
                );
              } finally {
                __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f = !1;
                const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
                  await __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.read();
                ((__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.disabled =
                  !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ||
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.completed ===
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.total),
                  (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.disabled =
                    !0),
                  (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.disabled =
                    !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96));
              }
            else
              __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(
                await __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.read(),
                "\u0054\u0068\u0069\u0073\u0020\u006a\u006f\u0062\u0020\u0069\u0073\u0020\u0061\u006c\u0072\u0065\u0061\u0064\u0079\u0020\u0072\u0075\u006e\u006e\u0069\u006e\u0067\u0020\u0069\u006e\u0020\u0061\u006e\u006f\u0074\u0068\u0065\u0072\u0020\u0074\u0061\u0062\u002e",
              );
          },
        )
        .catch((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
          ((__16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f = !1),
            (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.hidden = !1),
            (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.textContent =
              "\u0043\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0061\u0063\u0063\u0065\u0073\u0073\u0020\u0073\u0061\u0076\u0065\u0064\u0020\u0070\u0072\u006f\u0067\u0072\u0065\u0073\u0073\u003a\u0020" +
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.message),
            (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.disabled = !0));
        });
  (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.addEventListener(
    "\u0063\u006c\u0069\u0063\u006b",
    () => {
      __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6();
    },
  ),
    __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.addEventListener(
      "\u0063\u006c\u0069\u0063\u006b",
      () => {
        (__28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1.pause(),
          (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.disabled = !0),
          (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.textContent =
            "\u0050\u0061\u0075\u0073\u0069\u006e\u0067\u0020\u0061\u0066\u0074\u0065\u0072\u0020\u0074\u0068\u0065\u0020\u0063\u0075\u0072\u0072\u0065\u006e\u0074\u0020\u0072\u0065\u0071\u0075\u0065\u0073\u0074\u0020\u0066\u0069\u006e\u0069\u0073\u0068\u0065\u0073\u2026"));
      },
    ),
    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.addEventListener(
      "\u0063\u006c\u0069\u0063\u006b",
      async () => {
        try {
          const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
              await __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.read(),
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
              await __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.links(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              ),
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
              URL.createObjectURL(
                new Blob(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5, {
                  type: "\u0074\u0065\u0078\u0074\u002f\u0070\u006c\u0061\u0069\u006e\u003b\u0063\u0068\u0061\u0072\u0073\u0065\u0074\u003d\u0075\u0074\u0066\u002d\u0038",
                }),
              ),
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
              document.createElement("\u0061");
          ((__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.href =
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c),
            (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.download =
              "\u006e\u0079\u0078\u002d\u006c\u0069\u006e\u006b\u0073\u002d" +
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.completed +
              "\u002e\u0074\u0078\u0074"),
            document.body.appendChild(
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
            ),
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.click(),
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.remove(),
            setTimeout(
              () =>
                URL.revokeObjectURL(
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                ),
              1e3,
            ));
        } catch (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.textContent =
            "\u0043\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0064\u006f\u0077\u006e\u006c\u006f\u0061\u0064\u003a\u0020" +
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.message;
        }
      },
    ),
    __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.addEventListener(
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
            async (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
                (await __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.clear(),
                __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(
                  null,
                  "\u0053\u0061\u0076\u0065\u0064\u0020\u006a\u006f\u0062\u0020\u0063\u006c\u0065\u0061\u0072\u0065\u0064\u002e",
                ));
            },
          );
      },
    ));
  const __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe =
    await __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.read();
  return (
    __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe &&
      __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(
        __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe,
        "\u0053\u0061\u0076\u0065\u0064\u0020\u006a\u006f\u0062\u0020\u0066\u006f\u0075\u006e\u0064\u002e\u0020\u0053\u0069\u0067\u006e\u0020\u0069\u006e\u0020\u0074\u006f\u0020\u0074\u0068\u0065\u0020\u0073\u0061\u006d\u0065\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0061\u006e\u0064\u0020\u0063\u0068\u006f\u006f\u0073\u0065\u0020\u0052\u0065\u0073\u0075\u006d\u0065\u002e",
      ),
    {
      start: (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
        __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        ),
    }
  );
}
