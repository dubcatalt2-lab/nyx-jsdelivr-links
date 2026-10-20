(() => {
  const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
      document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0074\u0061\u0072\u0067\u0065\u0074\u002d\u0069\u0070\u005d"),
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
      document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0063\u006f\u0070\u0079\u002d\u0069\u0070\u005d"),
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
      document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0064\u006f\u006d\u0061\u0069\u006e\u002d\u0066\u006f\u0072\u006d\u005d"),
    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
      document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0073\u0075\u0062\u006d\u0069\u0074\u005d"),
    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
      document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0073\u0074\u0061\u0074\u0075\u0073\u005d"),
    __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
      "\u0074\u0075\u0074\u0073\u0069" === document.body.dataset.site ? "\u0074\u0075\u0074\u0073\u0069" : "\u006e\u0079\u0078",
    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
      "\u0074\u0075\u0074\u0073\u0069" === __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a
        ? "\u0054\u0075\u0074\u0073\u0069"
        : "\u004e\u0037\u0058";
  let __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = "";
  function __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = "",
  ) {
    ((__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.hidden = !1),
      (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.className =
        "\u0073\u0074\u0061\u0074\u0075\u0073" +
        (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
          ? ` ${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5}`
          : "")),
      (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.textContent =
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96));
  }
  async function __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
      await __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.text();
    try {
      return __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
        ? JSON.parse(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5)
        : {};
    } catch {
      throw new Error(
        `${__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc} returned an unexpected ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.status} response.`,
      );
    }
  }
  (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.addEventListener(
    "\u0063\u006c\u0069\u0063\u006b",
    async () => {
      if (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2)
        try {
          (await navigator.clipboard.writeText(
            __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2,
          ),
            (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.textContent =
              "\u0043\u006f\u0070\u0069\u0065\u0064"),
            setTimeout(() => {
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.textContent =
                "\u0043\u006f\u0070\u0079";
            }, 1400));
        } catch {
          __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238(
            `Copy this address: ${__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2}`,
          );
        }
    },
  ),
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.addEventListener(
      "\u0073\u0075\u0062\u006d\u0069\u0074",
      async (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.preventDefault(),
          (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.disabled = !0));
        const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.textContent;
        ((__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.textContent =
          "\u0056\u0065\u0072\u0069\u0066\u0079\u0069\u006e\u0067\u2026"),
          (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.hidden = !0));
        try {
          const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = await fetch(
              "\u002f\u0061\u0070\u0069\u002f\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0068\u006f\u0073\u0074\u006e\u0061\u006d\u0065\u0073",
              {
                method: "\u0050\u004f\u0053\u0054",
                credentials: "\u0073\u0061\u006d\u0065\u002d\u006f\u0072\u0069\u0067\u0069\u006e",
                headers: {
                  "\u0043\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0054\u0079\u0070\u0065": "\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u006a\u0073\u006f\u006e",
                },
                body: JSON.stringify({
                  hostname:
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.elements
                      .hostname.value,
                  site: __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
                }),
              },
            ),
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
              await __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              );
          if (!__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.ok)
            throw new Error(
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.error ||
                `Domain verification failed (${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.status}).`,
            );
          ((__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.hidden = !1),
            (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.className =
              "\u0073\u0074\u0061\u0074\u0075\u0073\u0020\u0073\u0075\u0063\u0063\u0065\u0073\u0073"),
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.replaceChildren(
              document.createTextNode(
                `${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.message} `,
              ),
            ));
          const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
            document.createElement("\u0061");
          ((__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.href =
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.url),
            (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.textContent = `Open ${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.hostname}`),
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.append(
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
            ));
        } catch (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2) {
          __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238(
            __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.message ||
              `${__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc} could not connect that domain.`,
            "\u0065\u0072\u0072\u006f\u0072",
          );
        } finally {
          ((__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.disabled = !1),
            (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.textContent =
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5));
        }
      },
    ),
    (async function () {
      try {
        const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = await fetch(
            "\u002f\u0061\u0070\u0069\u002f\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0068\u006f\u0073\u0074\u006e\u0061\u006d\u0065\u0073\u002f\u0063\u006f\u006e\u0066\u0069\u0067",
            {
              credentials: "\u0073\u0061\u006d\u0065\u002d\u006f\u0072\u0069\u0067\u0069\u006e",
              cache: "\u006e\u006f\u002d\u0073\u0074\u006f\u0072\u0065",
            },
          ),
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
            await __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f(
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
            );
        ((__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = String(
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.targetIps?.[0] || "",
        )),
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.textContent =
            __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 || "\u004e\u006f\u0074\u0020\u0063\u006f\u006e\u0066\u0069\u0067\u0075\u0072\u0065\u0064"),
          (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.disabled =
            !__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2),
          (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.disabled =
            !__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.enabled),
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.enabled ||
            __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238(
              `Custom-domain connection is not enabled on this ${__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc} server yet.`,
              "\u0065\u0072\u0072\u006f\u0072",
            ));
      } catch (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c) {
        ((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.textContent =
          "\u0055\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065"),
          (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.disabled = !0),
          (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.disabled = !0),
          __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238(
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.message ||
              `${__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc} could not load the domain configuration.`,
            "\u0065\u0072\u0072\u006f\u0072",
          ));
      }
    })());
})();
