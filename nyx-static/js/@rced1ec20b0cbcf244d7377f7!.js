const __9424b58569d5ac344830f11e289b7923b433273ecad0b18a974a395a48c05a66 = new Map(),
  __694620ea59cb7ccdebd2fb831e68be95af1a3283290f03c587ff8ea5df98d1f8 = new Set();

"\u0075\u006e\u0064\u0065\u0066\u0069\u006e\u0065\u0064" != typeof navigator &&
  navigator.serviceWorker &&
  navigator.serviceWorker.addEventListener(
    "\u006d\u0065\u0073\u0073\u0061\u0067\u0065",
    (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
      if (
        !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.data
          ?.$controller$swrevive ||
        !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.source?.scriptURL
      )
        return;
      const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.source;
      if (
        "\u0075\u006e\u0064\u0065\u0066\u0069\u006e\u0065\u0064" != typeof ServiceWorker &&
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 instanceof
          ServiceWorker &&
        ["\u0061\u0063\u0074\u0069\u0076\u0061\u0074\u0069\u006e\u0067", "\u0061\u0063\u0074\u0069\u0076\u0061\u0074\u0065\u0064"].includes(
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.state,
        )
      )
        for (const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c of __694620ea59cb7ccdebd2fb831e68be95af1a3283290f03c587ff8ea5df98d1f8) {
          const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.serviceWorkerController;
          if (
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 !==
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
          )
            try {
              const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = new URL(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.scriptURL,
                ),
                __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = new URL(
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.scriptURL,
                );
              if (
                __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.origin !==
                  __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.origin ||
                __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.pathname !==
                  __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.pathname
              )
                continue;
              ((__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.serviceWorkerController =
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5),
                (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.guardServiceWorkerRevive =
                  !1));
            } catch {}
        }
    },
  );

export function trackProxyController(
  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
) {
  return (
    __694620ea59cb7ccdebd2fb831e68be95af1a3283290f03c587ff8ea5df98d1f8.add(
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    ),
    () =>
      __694620ea59cb7ccdebd2fb831e68be95af1a3283290f03c587ff8ea5df98d1f8.delete(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      )
  );
}

export function loadProxyScript(
  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
  { timeoutMs: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = 2e4 } = {},
) {
  if (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5())
    return Promise.resolve();
  const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = new URL(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    location.href,
  ).href;
  if (
    __9424b58569d5ac344830f11e289b7923b433273ecad0b18a974a395a48c05a66.has(
      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
    )
  )
    return __9424b58569d5ac344830f11e289b7923b433273ecad0b18a974a395a48c05a66.get(
      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
    );
  const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = () =>
      new Promise(
        (
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
        ) => {
          if (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5())
            return __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03();
          const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
            document.createElement("\u0073\u0063\u0072\u0069\u0070\u0074");
          ((__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.src =
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
            (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.async = !1));
          const __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc = (
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
            ) => {
              (clearTimeout(__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2),
                (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.onload = null),
                (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.onerror = null),
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
                  ? (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.remove(),
                    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                    ))
                  : __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03());
            },
            __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = setTimeout(
              () =>
                __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc(
                  new Error("\u0054\u0068\u0065\u0020\u0062\u0072\u006f\u0077\u0073\u0065\u0072\u0020\u0065\u006e\u0067\u0069\u006e\u0065\u0020\u0074\u006f\u006f\u006b\u0020\u0074\u006f\u006f\u0020\u006c\u006f\u006e\u0067\u0020\u0074\u006f\u0020\u006c\u006f\u0061\u0064\u002e\u0020\u0050\u006c\u0065\u0061\u0073\u0065\u0020\u0072\u0065\u0074\u0072\u0079\u002e"),
                ),
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
            );
          ((__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.onload = () =>
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc(
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5()
                ? null
                : new Error("\u0054\u0068\u0065\u0020\u0062\u0072\u006f\u0077\u0073\u0065\u0072\u0020\u0065\u006e\u0067\u0069\u006e\u0065\u0020\u0072\u0065\u0074\u0075\u0072\u006e\u0065\u0064\u0020\u0061\u006e\u0020\u0069\u006e\u0063\u006f\u006d\u0070\u006c\u0065\u0074\u0065\u0020\u0073\u0063\u0072\u0069\u0070\u0074\u002e"),
            )),
            (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.onerror = () =>
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc(
                Object.assign(new Error("\u0054\u0068\u0065\u0020\u0062\u0072\u006f\u0077\u0073\u0065\u0072\u0020\u0065\u006e\u0067\u0069\u006e\u0065\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u006c\u006f\u0061\u0064\u002e\u0020\u0050\u006c\u0065\u0061\u0073\u0065\u0020\u0072\u0065\u0074\u0072\u0079\u002e"), {
                  retryable: !0,
                }),
              )),
            document.head.append(
              __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
            ));
        },
      ),
    __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713()
        .catch((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
          if (!__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.retryable)
            throw __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96;
          return __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713();
        })
        .finally(() => {
          __9424b58569d5ac344830f11e289b7923b433273ecad0b18a974a395a48c05a66.get(
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
          ) === __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a &&
            __9424b58569d5ac344830f11e289b7923b433273ecad0b18a974a395a48c05a66.delete(
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
            );
        });
  return (
    __9424b58569d5ac344830f11e289b7923b433273ecad0b18a974a395a48c05a66.set(
      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
      __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
    ),
    __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a
  );
}

export function waitForProxyController(
  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = 2e4,
) {
  let __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c;
  return Promise.race([
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.wait(),
    new Promise(
      (
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
      ) => {
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = setTimeout(
          () =>
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03(
              new Error("\u0054\u0068\u0065\u0020\u0062\u0072\u006f\u0077\u0073\u0065\u0072\u0020\u0063\u006f\u006e\u0074\u0072\u006f\u006c\u006c\u0065\u0072\u0020\u0074\u006f\u006f\u006b\u0020\u0074\u006f\u006f\u0020\u006c\u006f\u006e\u0067\u0020\u0074\u006f\u0020\u0073\u0074\u0061\u0072\u0074\u002e\u0020\u0050\u006c\u0065\u0061\u0073\u0065\u0020\u0072\u0065\u0074\u0072\u0079\u002e"),
            ),
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        );
      },
    ),
  ]).finally(() =>
    clearTimeout(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c),
  );
}
