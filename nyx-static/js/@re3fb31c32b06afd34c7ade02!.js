(() => {
  const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
    document.documentElement;
  try {
    if (
      window.parent !== window &&
      parent.location.origin === location.origin &&
      ("\u0074\u0075\u0074\u0073\u0069" === window.frameElement?.dataset.appShell ||
        "\u0074\u0075\u0074\u0073\u0069" === parent.document.documentElement.dataset.appShell)
    ) {
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.dataset.appShell = "\u0074\u0075\u0074\u0073\u0069";
      const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = () =>
        document
          .querySelectorAll("\u006c\u0069\u006e\u006b\u005b\u0072\u0065\u006c\u003d\u0022\u0073\u0074\u0079\u006c\u0065\u0073\u0068\u0065\u0065\u0074\u0022\u005d")
          .forEach((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
            "\u002f\u0061\u0070\u0070\u0073\u002f\u006f\u0062\u0073\u0069\u0064\u0069\u0061\u006e\u002e\u0063\u0073\u0073" ===
              new URL(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.href,
                location.href,
              ).pathname &&
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.remove();
          });
      (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5(),
        new MutationObserver(
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        ).observe(document.head, {
          childList: !0,
        }));
    }
  } catch {}
  const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
    document.createElement("\u0073\u0074\u0079\u006c\u0065");
  let __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c;
  ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.textContent =
    "\u0068\u0074\u006d\u006c\u005b\u0064\u0061\u0074\u0061\u002d\u0061\u0070\u0070\u002d\u0070\u0072\u0065\u0073\u0065\u006e\u0074\u0061\u0074\u0069\u006f\u006e\u003d\u0022\u0070\u0065\u006e\u0064\u0069\u006e\u0067\u0022\u005d\u0020\u0062\u006f\u0064\u0079\u007b\u0076\u0069\u0073\u0069\u0062\u0069\u006c\u0069\u0074\u0079\u003a\u0068\u0069\u0064\u0064\u0065\u006e\u0021\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074\u007d"),
    document.head.append(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5),
    (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.dataset.appPresentation =
      "\u0070\u0065\u006e\u0064\u0069\u006e\u0067"));
  const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = () => {
    (clearTimeout(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c),
      delete __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.dataset
        .appPresentation,
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.remove());
  };
  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = setTimeout(
    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
    8e3,
  );
  const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = () => {
    try {
      window.frameElement?.dispatchEvent(new Event("\u006e\u0079\u0078\u003a\u0061\u0070\u0070\u002d\u0064\u006f\u006d\u002d\u0072\u0065\u0061\u0064\u0079"));
    } catch {}
    const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = [
      ...document.querySelectorAll("\u0023\u0074\u0075\u0074\u0073\u0069\u002d\u0065\u006d\u0062\u0065\u0064\u0064\u0065\u0064\u002d\u0073\u0074\u0079\u006c\u0065"),
    ].filter(
      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
        !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.disabled &&
        !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.sheet,
    );
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.length
      ? Promise.all(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.map(
            (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
              new Promise((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) => {
                const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = () => {
                  (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.removeEventListener(
                    "\u006c\u006f\u0061\u0064",
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                  ),
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.removeEventListener(
                      "\u0065\u0072\u0072\u006f\u0072",
                      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                    ),
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5());
                };
                (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.addEventListener(
                  "\u006c\u006f\u0061\u0064",
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                  {
                    once: !0,
                  },
                ),
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.addEventListener(
                    "\u0065\u0072\u0072\u006f\u0072",
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                    {
                      once: !0,
                    },
                  ),
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.sheet &&
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c());
              }),
          ),
        ).then(__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03)
      : __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03();
  };
  "\u006c\u006f\u0061\u0064\u0069\u006e\u0067" === document.readyState
    ? document.addEventListener(
        "\u0044\u004f\u004d\u0043\u006f\u006e\u0074\u0065\u006e\u0074\u004c\u006f\u0061\u0064\u0065\u0064",
        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
        {
          once: !0,
        },
      )
    : __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713();
})();
