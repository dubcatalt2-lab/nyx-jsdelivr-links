(() => {
  const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = document.currentScript,
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.dataset.provider;
  if (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) {
    const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = new URLSearchParams(
        location.search,
      ).get("\u0067\u0061\u006d\u0065"),
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = new Set(),
      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = (
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
      ) => {
        !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ||
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.has(
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
          ) ||
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.size >= 2 ||
          (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.add(
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
          ),
          fetch("\u002f\u0061\u0070\u0069\u002f\u0067\u0061\u006d\u0065\u0073\u002f\u0072\u0065\u0070\u006f\u0072\u0074\u0073", {
            method: "\u0050\u004f\u0053\u0054",
            headers: {
              "\u0043\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0054\u0079\u0070\u0065": "\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u006a\u0073\u006f\u006e",
            },
            body: JSON.stringify({
              provider: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
              game: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              reason: __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
            }),
            keepalive: !0,
          }).catch(() => {}));
      };
    return (
      (window.nyxReportGameFailure =
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03),
      void addEventListener(
        "\u006d\u0065\u0073\u0073\u0061\u0067\u0065",
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
          const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
            document.querySelector("\u0023\u0071\u0063\u0062\u0031\u0039\u0036\u0066\u0036\u0031\u0037\u0064\u0066\u0031\u002c\u0023\u0067\u0061\u006d\u0065\u0046\u0072\u0061\u006d\u0065\u002c\u0023\u0067\u0061\u006d\u0065");
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.source ===
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5?.contentWindow &&
            "\u006e\u0079\u0078\u003a\u0067\u0061\u006d\u0065\u002d\u0068\u0065\u0061\u006c\u0074\u0068" ===
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.data?.type &&
            ["\u006e\u006f\u002d\u0072\u0065\u006e\u0064\u0065\u0072", "\u0072\u0065\u0073\u006f\u0075\u0072\u0063\u0065\u002d\u0065\u0072\u0072\u006f\u0072"].includes(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.data.reason,
            ) &&
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.data.reason,
            );
        },
      )
    );
  }
  let __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = !1,
    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = !1,
    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = 0,
    __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a = performance.now();
  const __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc = [],
    __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = () => {
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = !0;
      for (const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 of __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc)
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96();
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.length = 0;
    };
  for (const [
    __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f,
    __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239,
  ] of [
    ["\u0043\u0061\u006e\u0076\u0061\u0073\u0052\u0065\u006e\u0064\u0065\u0072\u0069\u006e\u0067\u0043\u006f\u006e\u0074\u0065\u0078\u0074\u0032\u0044", ["\u0064\u0072\u0061\u0077\u0049\u006d\u0061\u0067\u0065", "\u0066\u0069\u006c\u006c\u0054\u0065\u0078\u0074", "\u0073\u0074\u0072\u006f\u006b\u0065", "\u0070\u0075\u0074\u0049\u006d\u0061\u0067\u0065\u0044\u0061\u0074\u0061"]],
    ["\u0057\u0065\u0062\u0047\u004c\u0052\u0065\u006e\u0064\u0065\u0072\u0069\u006e\u0067\u0043\u006f\u006e\u0074\u0065\u0078\u0074", ["\u0064\u0072\u0061\u0077\u0041\u0072\u0072\u0061\u0079\u0073", "\u0064\u0072\u0061\u0077\u0045\u006c\u0065\u006d\u0065\u006e\u0074\u0073"]],
    [
      "\u0057\u0065\u0062\u0047\u004c\u0032\u0052\u0065\u006e\u0064\u0065\u0072\u0069\u006e\u0067\u0043\u006f\u006e\u0074\u0065\u0078\u0074",
      ["\u0064\u0072\u0061\u0077\u0041\u0072\u0072\u0061\u0079\u0073", "\u0064\u0072\u0061\u0077\u0045\u006c\u0065\u006d\u0065\u006e\u0074\u0073", "\u0064\u0072\u0061\u0077\u0041\u0072\u0072\u0061\u0079\u0073\u0049\u006e\u0073\u0074\u0061\u006e\u0063\u0065\u0064", "\u0064\u0072\u0061\u0077\u0045\u006c\u0065\u006d\u0065\u006e\u0074\u0073\u0049\u006e\u0073\u0074\u0061\u006e\u0063\u0065\u0064"],
    ],
  ]) {
    const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
      globalThis[__16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f]?.prototype;
    if (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96)
      for (const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 of __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239) {
        const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96[
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
          ];
        if ("\u0066\u0075\u006e\u0063\u0074\u0069\u006f\u006e" != typeof __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c)
          continue;
        const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = function (
          ...__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
        ) {
          const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = Reflect.apply(
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
            this,
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          );
          return (
            __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2(),
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
          );
        };
        try {
          ((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96[
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
          ] = __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03),
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.push(() => {
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96[
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
              ] === __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 &&
                (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96[
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
                ] = __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c);
            }));
        } catch {}
      }
  }
  (addEventListener(
    "\u0065\u0072\u0072\u006f\u0072",
    (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
      ("\u0053\u0043\u0052\u0049\u0050\u0054" !==
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target?.tagName &&
        "\u004c\u0049\u004e\u004b" !==
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target?.tagName) ||
        (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = !0);
    },
    !0,
  ),
    addEventListener("\u0075\u006e\u0068\u0061\u006e\u0064\u006c\u0065\u0064\u0072\u0065\u006a\u0065\u0063\u0074\u0069\u006f\u006e", () => {
      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = !0;
    }));
  const __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 = setInterval(() => {
    const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = performance.now();
    if (
      (document.hidden ||
        (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 += Math.min(
          5e3,
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 -
            __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
        )),
      (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c)
    )
      return void clearInterval(__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238);
    if (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 < 6e4) return;
    clearInterval(__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238);
    for (const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c of __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc)
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c();
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = [
        ...document.querySelectorAll("\u0063\u0061\u006e\u0076\u0061\u0073"),
      ].some(
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.width > 40 &&
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.height > 40,
      ),
      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = (
        document.body?.innerText || ""
      ).trim();
    (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 ||
      (!__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 &&
        !document.querySelector("\u0069\u0066\u0072\u0061\u006d\u0065\u002c\u006f\u0062\u006a\u0065\u0063\u0074\u002c\u0065\u006d\u0062\u0065\u0064\u002c\u0072\u0075\u0066\u0066\u006c\u0065\u002d\u0070\u006c\u0061\u0079\u0065\u0072"))) &&
      parent.postMessage(
        {
          type: "\u006e\u0079\u0078\u003a\u0067\u0061\u006d\u0065\u002d\u0068\u0065\u0061\u006c\u0074\u0068",
          reason: __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03
            ? "\u0072\u0065\u0073\u006f\u0075\u0072\u0063\u0065\u002d\u0065\u0072\u0072\u006f\u0072"
            : "\u006e\u006f\u002d\u0072\u0065\u006e\u0064\u0065\u0072",
        },
        "\u002a",
      );
  }, 5e3);
  addEventListener(
    "\u0070\u0061\u0067\u0065\u0068\u0069\u0064\u0065",
    () => {
      clearInterval(__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238);
      for (const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 of __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc)
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96();
    },
    {
      once: !0,
    },
  );
})();
