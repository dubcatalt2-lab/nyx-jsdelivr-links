globalThis.NyxDuckImageViewport = function (
  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
) {
  if (!__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.frame) return;
  let __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c;
  try {
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.frame.contentDocument;
  } catch {
    return;
  }
  if (
    !__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c?.documentElement ||
    "\u0074\u0072\u0075\u0065" ===
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.documentElement.dataset
        .n7xDuckImageViewport
  )
    return;
  const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = () => {
    try {
      const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = String(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.frame.contentWindow
          ?.location?.href || "",
      );
      return (
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5(
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
        ) ||
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.sourceUrl ||
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.url ||
            "",
        ) ||
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.sourceUrl ||
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.url ||
        ""
      );
    } catch {
      return (
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.sourceUrl ||
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.url ||
            "",
        ) ||
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.sourceUrl ||
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.url ||
        ""
      );
    }
  };
  let __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713;
  try {
    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = new URL(
      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03(),
      location.href,
    );
  } catch {
    return;
  }
  if (
    "\u0064\u0075\u0063\u006b\u0064\u0075\u0063\u006b\u0067\u006f\u002e\u0063\u006f\u006d" !==
    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.hostname
      .replace(/^www\./i, "")
      .toLowerCase()
  )
    return;
  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.documentElement.dataset.n7xDuckImageViewport =
    "\u0074\u0072\u0075\u0065";
  const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a = (
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    ) => {
      const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = String(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 || "",
        ).trim(),
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.match(
            /https?%3a%2f%2f/i,
          );
      if (!__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c) return "";
      const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
          0 === __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.index,
        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.includes("\u002f\u0034\u006f\u0074\u0069\u0067\u002f");
      if (
        !__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 &&
        !__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713
      )
        return "";
      let __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.slice(
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.index,
        );
      const __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
        __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.search(
          /[?&]%24(?:rfp|io|tf|pf|iframe)=/i,
        );
      let __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2;
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc > 0 &&
        (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
          __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.slice(
            0,
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
          ));
      try {
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = decodeURIComponent(
          __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
        );
      } catch {
        return "";
      }
      return /^https?:\/\//i.test(
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2,
      )
        ? __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2
        : "";
    },
    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc = () => {
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
        .querySelectorAll("\u0069\u006d\u0067\u002c\u0073\u006f\u0075\u0072\u0063\u0065")
        .forEach((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
          const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.getAttribute(
                "\u0073\u0072\u0063",
              ) || "",
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
              __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a(
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
              );
          (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c &&
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c !==
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.setAttribute(
              "\u0073\u0072\u0063",
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
            ),
            ["\u0064\u0061\u0074\u0061\u002d\u0073\u0072\u0063", "\u0064\u0061\u0074\u0061\u002d\u006f\u0072\u0069\u0067\u0069\u006e\u0061\u006c", "\u0064\u0061\u0074\u0061\u002d\u006c\u0061\u007a\u0079\u002d\u0073\u0072\u0063", "\u0064\u0061\u0074\u0061\u002d\u0069\u006d\u0061\u0067\u0065\u002d\u0075\u0072\u006c"].forEach(
              (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c) => {
                const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.getAttribute(
                      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                    ) || "",
                  __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
                    __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a(
                      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                    );
                __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 &&
                  __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 !==
                    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 &&
                  (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.setAttribute(
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
                  ),
                  "\u0049\u004d\u0047" !==
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.tagName ||
                    (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
                      !__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a(
                        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                      )) ||
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.setAttribute(
                      "\u0073\u0072\u0063",
                      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
                    ));
              },
            ));
          const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.getAttribute(
                "\u0073\u0072\u0063\u0073\u0065\u0074",
              ) || "",
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03
                .split("\u002c")[0]
                ?.trim()
                .split(/\s+/)[0] || "",
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
              __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a(
                __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
              );
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc &&
            (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.removeAttribute(
              "\u0073\u0072\u0063\u0073\u0065\u0074",
            ),
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.setAttribute(
              "\u0073\u0072\u0063",
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
            ));
        });
    },
    __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = () => {
      const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.frame.contentWindow;
      if (
        !__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 ||
        !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.frame.getClientRects()
          .length
      )
        return;
      let __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713;
      try {
        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = new URL(
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03(),
        );
      } catch {
        return;
      }
      if (
        "\u0069\u006d\u0061\u0067\u0065\u0073" !==
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.searchParams.get(
            "\u0069\u0061",
          ) &&
        "\u0069\u006d\u0061\u0067\u0065\u0073" !==
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.searchParams.get("\u0069\u0061\u0078")
      )
        return;
      const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.innerHeight,
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.innerWidth;
      for (const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 of __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.images) {
        if (
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.closest(
            "\u0068\u0065\u0061\u0064\u0065\u0072\u002c\u006e\u0061\u0076\u002c\u0061\u0073\u0069\u0064\u0065\u002c\u005b\u0072\u006f\u006c\u0065\u003d\u0022\u0064\u0069\u0061\u006c\u006f\u0067\u0022\u005d\u002c\u005b\u0063\u006c\u0061\u0073\u0073\u002a\u003d\u0022\u006d\u006f\u0064\u0061\u006c\u0022\u0020\u0069\u005d\u002c\u005b\u0063\u006c\u0061\u0073\u0073\u002a\u003d\u0022\u0061\u006e\u006f\u006d\u0061\u006c\u0079\u0022\u0020\u0069\u005d",
          )
        )
          continue;
        const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.getBoundingClientRect();
        if (
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.width < 50 ||
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.height < 50 ||
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.bottom <
            -__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a ||
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.top >
            3 * __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a ||
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.right < 0 ||
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.left >
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc
        )
          continue;
        "\u006c\u0061\u007a\u0079" ===
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.getAttribute(
            "\u006c\u006f\u0061\u0064\u0069\u006e\u0067",
          ) &&
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.setAttribute(
            "\u006c\u006f\u0061\u0064\u0069\u006e\u0067",
            "\u0065\u0061\u0067\u0065\u0072",
          );
        const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.getAttribute("\u0073\u0072\u0063") ||
          "";
        if (
          (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c &&
            "\u0061\u0062\u006f\u0075\u0074\u003a\u0062\u006c\u0061\u006e\u006b" !== __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c &&
            !(
              /^data:image\//i.test(
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
              ) &&
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.complete &&
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.naturalWidth <= 1
            )) ||
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.getAttribute("\u0073\u0072\u0063\u0073\u0065\u0074")
        )
          continue;
        const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.getAttribute(
            "\u0064\u0061\u0074\u0061\u002d\u0073\u0072\u0063",
          ) ||
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.getAttribute(
            "\u0064\u0061\u0074\u0061\u002d\u006f\u0072\u0069\u0067\u0069\u006e\u0061\u006c",
          ) ||
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.getAttribute(
            "\u0064\u0061\u0074\u0061\u002d\u006c\u0061\u007a\u0079\u002d\u0073\u0072\u0063",
          );
        if (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03)
          try {
            const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = new URL(
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
            );
            ["\u0068\u0074\u0074\u0070\u003a", "\u0068\u0074\u0074\u0070\u0073\u003a"].includes(
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.protocol,
            ) &&
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.setAttribute(
                "\u0073\u0072\u0063",
                __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
              );
          } catch {}
      }
    },
    __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 = () => {
      const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = [
        "\u0041\u0049\u0020\u0069\u006d\u0061\u0067\u0065\u0073",
        "\u0041\u006c\u006c\u0020\u0073\u0069\u007a\u0065\u0073",
        "\u0041\u006c\u006c\u0020\u0063\u006f\u006c\u006f\u0072\u0073",
        "\u0041\u006c\u006c\u0020\u0074\u0079\u0070\u0065\u0073",
        "\u0041\u006c\u006c\u0020\u006c\u0061\u0079\u006f\u0075\u0074\u0073",
        "\u004c\u0069\u0063\u0065\u006e\u0073\u0065\u0073",
      ];
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
        .querySelectorAll("\u006e\u0061\u0076")
        .forEach((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) => {
          const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = String(
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.innerText ||
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.textContent ||
              "",
          )
            .replace(/\s+/g, "\u0020")
            .trim();
          if (
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.filter(
              (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.includes(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                ),
            ).length < 3
          )
            return;
          const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = [
            ...__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.querySelectorAll(
              "\u0075\u006c",
            ),
          ].find((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
            const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.getBoundingClientRect?.();
            return (
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.width >= 300 &&
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.height >= 20 &&
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.height <= 96
            );
          });
          if (!__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713) return;
          const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.getBoundingClientRect?.(),
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.getBoundingClientRect?.();
          if (
            !__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a ||
            !__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc ||
            __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.height <=
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.height + 120
          )
            return;
          const __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = Math.ceil(
            Math.max(
              40,
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.height + 16,
            ),
          );
          (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.style.setProperty(
            "\u0068\u0065\u0069\u0067\u0068\u0074",
            `${__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2}px`,
            "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
          ),
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.style.setProperty(
              "\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074",
              "\u0030",
              "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
            ),
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.style.setProperty(
              "\u006d\u0061\u0078\u002d\u0068\u0065\u0069\u0067\u0068\u0074",
              `${__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2}px`,
              "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
            ),
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.style.setProperty(
              "\u006f\u0076\u0065\u0072\u0066\u006c\u006f\u0077",
              "\u0076\u0069\u0073\u0069\u0062\u006c\u0065",
              "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
            ));
          const __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 =
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.parentElement;
          if (
            __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 &&
            __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 !==
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
          ) {
            const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = Math.ceil(
              Math.max(
                32,
                __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.height,
              ),
            );
            (__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.style.setProperty(
              "\u0068\u0065\u0069\u0067\u0068\u0074",
              `${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96}px`,
              "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
            ),
              __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.style.setProperty(
                "\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074",
                "\u0030",
                "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
              ),
              __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.style.setProperty(
                "\u006d\u0061\u0078\u002d\u0068\u0065\u0069\u0067\u0068\u0074",
                `${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96}px`,
                "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
              ),
              __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.style.setProperty(
                "\u006f\u0076\u0065\u0072\u0066\u006c\u006f\u0077",
                "\u0076\u0069\u0073\u0069\u0062\u006c\u0065",
                "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
              ),
              (__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.dataset.n7xDuckImageFilterWrapperFixed =
                "\u0074\u0072\u0075\u0065"));
          }
          ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.dataset.n7xDuckImageFilterFixed =
            "\u0074\u0072\u0075\u0065"),
            (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.documentElement.dataset.n7xDuckImageFilterFixed =
              "\u0074\u0072\u0075\u0065"));
        });
    },
    __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f = () => {
      const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.frame.contentWindow;
      if (
        !__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 ||
        !__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.body
      )
        return;
      const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = String(
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.body.innerText || "",
      );
      if (
        !/AI images/i.test(__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03) ||
        !/All sizes/i.test(__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03) ||
        !/All layouts/i.test(__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03)
      )
        return (
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
            .querySelectorAll("\u005b\u0064\u0061\u0074\u0061\u002d\u006e\u0037\u0078\u002d\u0064\u0075\u0063\u006b\u002d\u006d\u0061\u0069\u006e\u006c\u0069\u006e\u0065\u002d\u0068\u0069\u0064\u0064\u0065\u006e\u003d\u0022\u0074\u0072\u0075\u0065\u0022\u005d")
            .forEach((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
              (["\u0064\u0069\u0073\u0070\u006c\u0061\u0079", "\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074", "\u0068\u0065\u0069\u0067\u0068\u0074", "\u006d\u0061\u0072\u0067\u0069\u006e", "\u0070\u0061\u0064\u0064\u0069\u006e\u0067"].forEach(
                (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) =>
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.style.removeProperty(
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                  ),
              ),
                delete __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.dataset
                  .n7xDuckMainlineHidden);
            }),
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
            .querySelectorAll("\u005b\u0064\u0061\u0074\u0061\u002d\u006e\u0037\u0078\u002d\u0064\u0075\u0063\u006b\u002d\u0069\u006d\u0061\u0067\u0065\u002d\u0067\u0061\u0070\u002d\u0066\u0069\u0078\u0065\u0064\u003d\u0022\u0074\u0072\u0075\u0065\u0022\u005d")
            .forEach((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
              (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.style.removeProperty(
                "\u006d\u0061\u0072\u0067\u0069\u006e\u002d\u0074\u006f\u0070",
              ),
                delete __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.dataset
                  .n7xDuckImageGapFixed);
            }),
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
            .querySelectorAll("\u005b\u0064\u0061\u0074\u0061\u002d\u006e\u0037\u0078\u002d\u0064\u0075\u0063\u006b\u002d\u0069\u006d\u0061\u0067\u0065\u002d\u0066\u0069\u006c\u0074\u0065\u0072\u002d\u0066\u0069\u0078\u0065\u0064\u003d\u0022\u0074\u0072\u0075\u0065\u0022\u005d")
            .forEach((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
              (["\u0068\u0065\u0069\u0067\u0068\u0074", "\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074", "\u006d\u0061\u0078\u002d\u0068\u0065\u0069\u0067\u0068\u0074", "\u006f\u0076\u0065\u0072\u0066\u006c\u006f\u0077"].forEach(
                (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) =>
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.style.removeProperty(
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                  ),
              ),
                delete __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.dataset
                  .n7xDuckImageFilterFixed);
            }),
          void __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
            .querySelectorAll("\u005b\u0064\u0061\u0074\u0061\u002d\u006e\u0037\u0078\u002d\u0064\u0075\u0063\u006b\u002d\u0069\u006d\u0061\u0067\u0065\u002d\u0066\u0069\u006c\u0074\u0065\u0072\u002d\u0077\u0072\u0061\u0070\u0070\u0065\u0072\u002d\u0066\u0069\u0078\u0065\u0064\u003d\u0022\u0074\u0072\u0075\u0065\u0022\u005d")
            .forEach((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
              (["\u0068\u0065\u0069\u0067\u0068\u0074", "\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074", "\u006d\u0061\u0078\u002d\u0068\u0065\u0069\u0067\u0068\u0074", "\u006f\u0076\u0065\u0072\u0066\u006c\u006f\u0077"].forEach(
                (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) =>
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.style.removeProperty(
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                  ),
              ),
                delete __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.dataset
                  .n7xDuckImageFilterWrapperFixed);
            })
        );
      const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.scrollY ||
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.scrollingElement
            ?.scrollTop ||
          0,
        __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a = [
          ...__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.images,
        ]
          .filter((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
            if (
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.closest?.(
                "\u0068\u0065\u0061\u0064\u0065\u0072\u002c\u006e\u0061\u0076\u002c\u0061\u0073\u0069\u0064\u0065\u002c\u005b\u0072\u006f\u006c\u0065\u003d\u0022\u0064\u0069\u0061\u006c\u006f\u0067\u0022\u005d\u002c\u005b\u0063\u006c\u0061\u0073\u0073\u002a\u003d\u0022\u006d\u006f\u0064\u0061\u006c\u0022\u0020\u0069\u005d\u002c\u005b\u0063\u006c\u0061\u0073\u0073\u002a\u003d\u0022\u0061\u006e\u006f\u006d\u0061\u006c\u0079\u0022\u0020\u0069\u005d",
              )
            )
              return !1;
            const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.getBoundingClientRect?.();
            return (
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.width >= 100 &&
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.height >= 70
            );
          })
          .sort(
            (
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
            ) => {
              const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.getBoundingClientRect(),
                __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.getBoundingClientRect();
              return (
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.top -
                  __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.top ||
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.left -
                  __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.left
              );
            },
          );
      if (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.length < 4) return;
      const __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
        __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.slice(
          0,
          Math.min(12, __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.length),
        );
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
        .querySelectorAll("\u005b\u0064\u0061\u0074\u0061\u002d\u0074\u0065\u0073\u0074\u0069\u0064\u003d\u0022\u006d\u0061\u0069\u006e\u006c\u0069\u006e\u0065\u0022\u005d\u002c\u002e\u0072\u0065\u0073\u0075\u006c\u0074\u0073\u002d\u002d\u006d\u0061\u0069\u006e")
        .forEach((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.some(
            (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) =>
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.contains(
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
              ),
          ) ||
            (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.style.setProperty(
              "\u0064\u0069\u0073\u0070\u006c\u0061\u0079",
              "\u006e\u006f\u006e\u0065",
              "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
            ),
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.style.setProperty(
              "\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074",
              "\u0030",
              "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
            ),
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.style.setProperty(
              "\u0068\u0065\u0069\u0067\u0068\u0074",
              "\u0030",
              "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
            ),
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.style.setProperty(
              "\u006d\u0061\u0072\u0067\u0069\u006e",
              "\u0030",
              "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
            ),
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.style.setProperty(
              "\u0070\u0061\u0064\u0064\u0069\u006e\u0067",
              "\u0030",
              "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
            ),
            (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.dataset.n7xDuckMainlineHidden =
              "\u0074\u0072\u0075\u0065"));
        });
      let __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = 0;
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
        .querySelectorAll("\u0064\u0069\u0076\u002c\u006e\u0061\u0076\u002c\u0073\u0065\u0063\u0074\u0069\u006f\u006e")
        .forEach((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
          const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = String(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.innerText || "",
          )
            .replace(/\s+/g, "\u0020")
            .trim();
          if (
            ["\u0041\u0049\u0020\u0069\u006d\u0061\u0067\u0065\u0073", "\u0041\u006c\u006c\u0020\u0073\u0069\u007a\u0065\u0073", "\u0041\u006c\u006c\u0020\u0063\u006f\u006c\u006f\u0072\u0073", "\u0041\u006c\u006c\u0020\u0074\u0079\u0070\u0065\u0073", "\u0041\u006c\u006c\u0020\u006c\u0061\u0079\u006f\u0075\u0074\u0073", "\u004c\u0069\u0063\u0065\u006e\u0073\u0065\u0073"].filter(
              (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.includes(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                ),
            ).length < 3
          )
            return;
          const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.getBoundingClientRect?.();
          !__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c ||
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.width < 300 ||
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.height <= 0 ||
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.height > 120 ||
            (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = Math.max(
              __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2,
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.bottom +
                __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
            ));
        });
      const __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 = Math.max(
        110,
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2
          ? __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 + 12
          : 0,
      );
      let __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f =
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc[0].parentElement;
      for (
        ;
        __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f &&
        !__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.every(
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
            __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f.contains(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
            ),
        );

      )
        __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f =
          __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f.parentElement;
      if (
        !__16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f ||
        __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f ===
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.body ||
        __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f ===
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.documentElement
      )
        return;
      for (
        ;
        __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f.parentElement &&
        __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f.parentElement !==
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.body &&
        __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f.parentElement !==
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.documentElement;

      ) {
        const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
          __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f.parentElement;
        if (
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.querySelector(
            "\u005b\u0064\u0061\u0074\u0061\u002d\u0074\u0065\u0073\u0074\u0069\u0064\u003d\u0022\u0068\u0065\u0061\u0064\u0065\u0072\u0022\u005d\u002c\u0066\u006f\u0072\u006d\u005b\u0064\u0061\u0074\u0061\u002d\u0074\u0065\u0073\u0074\u0069\u0064\u003d\u0022\u0073\u0065\u0061\u0072\u0063\u0068\u002d\u0066\u006f\u0072\u006d\u0022\u005d",
          )
        )
          break;
        const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.getBoundingClientRect?.();
        if (
          !__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 ||
          (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5?.top || 0) +
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 <
            __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 + 180
        )
          break;
        __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f =
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96;
      }
      if (
        "\u0074\u0072\u0075\u0065" ===
        __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f.dataset
          .n7xDuckImageGapFixed
      )
        return;
      const __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 =
        __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f.getBoundingClientRect?.();
      if (!__467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239) return;
      const __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1 = Math.round(
        __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239.top +
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 -
          __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238,
      );
      if (__28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1 < 220) return;
      const __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 =
        Number.parseFloat(
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.getComputedStyle(
            __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f,
          ).marginTop,
        ) || 0;
      (__16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f.style.setProperty(
        "\u006d\u0061\u0072\u0067\u0069\u006e\u002d\u0074\u006f\u0070",
        __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 -
          __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1 +
          "\u0070\u0078",
        "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
      ),
        (__16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f.dataset.n7xDuckImageGapFixed =
          "\u0074\u0072\u0075\u0065"),
        (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.documentElement.dataset.n7xDuckImageGapFixed =
          "\u0074\u0072\u0075\u0065"));
    };
  let __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 = !1;
  const __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1 = () => {
    __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 ||
      ((__467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 = !0),
      requestAnimationFrame(() => {
        ((__467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 = !1),
          __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238(),
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc(),
          __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f(),
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2());
      }));
  };
  try {
    new MutationObserver(
      __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1,
    ).observe(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.documentElement, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: [
        "\u0073\u0072\u0063",
        "\u0073\u0072\u0063\u0073\u0065\u0074",
        "\u006c\u006f\u0061\u0064\u0069\u006e\u0067",
        "\u0064\u0061\u0074\u0061\u002d\u0073\u0072\u0063",
        "\u0064\u0061\u0074\u0061\u002d\u006f\u0072\u0069\u0067\u0069\u006e\u0061\u006c",
        "\u0064\u0061\u0074\u0061\u002d\u006c\u0061\u007a\u0079\u002d\u0073\u0072\u0063",
        "\u0064\u0061\u0074\u0061\u002d\u0069\u006d\u0061\u0067\u0065\u002d\u0075\u0072\u006c",
      ],
    });
  } catch {}
  let __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 = !1;
  const __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe = () => {
    __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 ||
      ((__32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 = !0),
      requestAnimationFrame(() => {
        ((__32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 = !1),
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2());
      }));
  };
  (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.addEventListener(
    "\u006c\u006f\u0061\u0064",
    __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe,
    !0,
  ),
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.addEventListener(
      "\u0073\u0063\u0072\u006f\u006c\u006c",
      __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe,
      {
        capture: !0,
        passive: !0,
      },
    ),
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.defaultView?.addEventListener(
      "\u0072\u0065\u0073\u0069\u007a\u0065",
      __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe,
      {
        passive: !0,
      },
    ),
    __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238(),
    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc(),
    __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f(),
    __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2(),
    [250, 700, 1400, 2600, 4200].forEach(
      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
        setTimeout(() => {
          (__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238(),
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc(),
            __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f(),
            __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2());
        }, __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
    ));
};
