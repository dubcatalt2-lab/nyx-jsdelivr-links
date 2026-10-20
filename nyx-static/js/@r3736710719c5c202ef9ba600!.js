globalThis.NyxDuckImageViewport = function (
  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
) {
  if (!__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f?.frame) return;
  let __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708;
  try {
    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.frame.contentDocument;
  } catch {
    return;
  }
  if (
    !__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708?.documentElement ||
    "\u0074\u0072\u0075\u0065" ===
      __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.documentElement.dataset
        .n7xDuckImageViewport
  )
    return;
  const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c = () => {
    try {
      const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = String(
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.frame.contentWindow
          ?.location?.href || "",
      );
      return (
        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53(
          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
        ) ||
        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53(
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.sourceUrl ||
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.url ||
            "",
        ) ||
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.sourceUrl ||
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.url ||
        ""
      );
    } catch {
      return (
        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53(
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.sourceUrl ||
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.url ||
            "",
        ) ||
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.sourceUrl ||
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.url ||
        ""
      );
    }
  };
  let __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477;
  try {
    __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 = new URL(
      __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c(),
      location.href,
    );
  } catch {
    return;
  }
  if (
    "\u0064\u0075\u0063\u006b\u0064\u0075\u0063\u006b\u0067\u006f\u002e\u0063\u006f\u006d" !==
    __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.hostname
      .replace(/^www\./i, "")
      .toLowerCase()
  )
    return;
  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.documentElement.dataset.n7xDuckImageViewport =
    "\u0074\u0072\u0075\u0065";
  const __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 = (
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
    ) => {
      const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = String(
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f || "",
        ).trim(),
        __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.match(
            /https?%3a%2f%2f/i,
          );
      if (!__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708) return "";
      const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
          0 === __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.index,
        __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 =
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.includes("\u002f\u0034\u006f\u0074\u0069\u0067\u002f");
      if (
        !__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c &&
        !__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477
      )
        return "";
      let __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 =
        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.slice(
          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.index,
        );
      const __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 =
        __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.search(
          /[?&]%24(?:rfp|io|tf|pf|iframe)=/i,
        );
      __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 > 0 &&
        (__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 =
          __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.slice(
            0,
            __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7,
          ));
      let __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 =
        __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766;
      for (
        let __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 = 0;
        __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 < 2 &&
        /%[0-9a-f]{2}/i.test(__bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061);
        __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106++
      )
        try {
          __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 = decodeURIComponent(
            __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061,
          );
        } catch {
          break;
        }
      return /^https?:\/\//i.test(
        __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061,
      )
        ? __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061
        : "";
    },
    __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 = () => {
      __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708
        .querySelectorAll("\u0069\u006d\u0067\u002c\u0073\u006f\u0075\u0072\u0063\u0065")
        .forEach((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => {
          const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.getAttribute(
                "\u0073\u0072\u0063",
              ) || "",
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
              __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766(
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
              );
          (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 &&
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 !==
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 &&
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.setAttribute(
              "\u0073\u0072\u0063",
              __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
            ),
            ["\u0064\u0061\u0074\u0061\u002d\u0073\u0072\u0063", "\u0064\u0061\u0074\u0061\u002d\u006f\u0072\u0069\u0067\u0069\u006e\u0061\u006c", "\u0064\u0061\u0074\u0061\u002d\u006c\u0061\u007a\u0079\u002d\u0073\u0072\u0063", "\u0064\u0061\u0074\u0061\u002d\u0069\u006d\u0061\u0067\u0065\u002d\u0075\u0072\u006c"].forEach(
              (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708) => {
                const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.getAttribute(
                      __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
                    ) || "",
                  __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 =
                    __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766(
                      __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
                    );
                __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 &&
                  __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 !==
                    __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c &&
                  (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.setAttribute(
                    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
                    __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
                  ),
                  "\u0049\u004d\u0047" !==
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.tagName ||
                    (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 &&
                      !__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766(
                        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                      )) ||
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.setAttribute(
                      "\u0073\u0072\u0063",
                      __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
                    ));
              },
            ));
          const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.getAttribute(
                "\u0073\u0072\u0063\u0073\u0065\u0074",
              ) || "",
            __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 =
              __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c
                .split("\u002c")[0]
                ?.trim()
                .split(/\s+/)[0] || "",
            __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 =
              __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766(
                __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
              );
          __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 &&
            (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.removeAttribute(
              "\u0073\u0072\u0063\u0073\u0065\u0074",
            ),
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.setAttribute(
              "\u0073\u0072\u0063",
              __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7,
            ));
        });
    },
    __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 = () => {
      const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.frame.contentWindow;
      if (
        !__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 ||
        !__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.frame.getClientRects()
          .length
      )
        return;
      let __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477;
      try {
        __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 = new URL(
          __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c(),
        );
      } catch {
        return;
      }
      if (
        "\u0069\u006d\u0061\u0067\u0065\u0073" !==
          __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.searchParams.get(
            "\u0069\u0061",
          ) &&
        "\u0069\u006d\u0061\u0067\u0065\u0073" !==
          __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.searchParams.get("\u0069\u0061\u0078")
      )
        return;
      const __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 =
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.innerHeight,
        __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 =
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.innerWidth;
      for (const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f of __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.images) {
        if (
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.closest(
            "\u0068\u0065\u0061\u0064\u0065\u0072\u002c\u006e\u0061\u0076\u002c\u0061\u0073\u0069\u0064\u0065\u002c\u005b\u0072\u006f\u006c\u0065\u003d\u0022\u0064\u0069\u0061\u006c\u006f\u0067\u0022\u005d\u002c\u005b\u0063\u006c\u0061\u0073\u0073\u002a\u003d\u0022\u006d\u006f\u0064\u0061\u006c\u0022\u0020\u0069\u005d\u002c\u005b\u0063\u006c\u0061\u0073\u0073\u002a\u003d\u0022\u0061\u006e\u006f\u006d\u0061\u006c\u0079\u0022\u0020\u0069\u005d",
          )
        )
          continue;
        const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.getBoundingClientRect();
        if (
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.width < 50 ||
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.height < 50 ||
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.bottom <
            -__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 ||
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.top >
            3 * __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 ||
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.right < 0 ||
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.left >
            __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7
        )
          continue;
        "\u006c\u0061\u007a\u0079" ===
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.getAttribute(
            "\u006c\u006f\u0061\u0064\u0069\u006e\u0067",
          ) &&
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.setAttribute(
            "\u006c\u006f\u0061\u0064\u0069\u006e\u0067",
            "\u0065\u0061\u0067\u0065\u0072",
          );
        const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.getAttribute("\u0073\u0072\u0063") ||
          "";
        if (
          (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 &&
            "\u0061\u0062\u006f\u0075\u0074\u003a\u0062\u006c\u0061\u006e\u006b" !== __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 &&
            !(
              /^data:image\//i.test(
                __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
              ) &&
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.complete &&
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.naturalWidth <= 1
            )) ||
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.getAttribute("\u0073\u0072\u0063\u0073\u0065\u0074")
        )
          continue;
        const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.getAttribute(
            "\u0064\u0061\u0074\u0061\u002d\u0073\u0072\u0063",
          ) ||
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.getAttribute(
            "\u0064\u0061\u0074\u0061\u002d\u006f\u0072\u0069\u0067\u0069\u006e\u0061\u006c",
          ) ||
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.getAttribute(
            "\u0064\u0061\u0074\u0061\u002d\u006c\u0061\u007a\u0079\u002d\u0073\u0072\u0063",
          );
        if (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c)
          try {
            const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = new URL(
              __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
              __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
            );
            ["\u0068\u0074\u0074\u0070\u003a", "\u0068\u0074\u0074\u0070\u0073\u003a"].includes(
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.protocol,
            ) &&
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.setAttribute(
                "\u0073\u0072\u0063",
                __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
              );
          } catch {}
      }
    },
    __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 = () => {
      const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f = [
        "\u0041\u0049\u0020\u0069\u006d\u0061\u0067\u0065\u0073",
        "\u0041\u006c\u006c\u0020\u0073\u0069\u007a\u0065\u0073",
        "\u0041\u006c\u006c\u0020\u0063\u006f\u006c\u006f\u0072\u0073",
        "\u0041\u006c\u006c\u0020\u0074\u0079\u0070\u0065\u0073",
        "\u0041\u006c\u006c\u0020\u006c\u0061\u0079\u006f\u0075\u0074\u0073",
        "\u004c\u0069\u0063\u0065\u006e\u0073\u0065\u0073",
      ];
      __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708
        .querySelectorAll("\u006e\u0061\u0076")
        .forEach((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) => {
          const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c = String(
            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.innerText ||
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.textContent ||
              "",
          )
            .replace(/\s+/g, "\u0020")
            .trim();
          if (
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.filter(
              (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
                __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.includes(
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                ),
            ).length < 3
          )
            return;
          const __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 = [
            ...__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.querySelectorAll(
              "\u0075\u006c",
            ),
          ].find((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => {
            const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.getBoundingClientRect?.();
            return (
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 &&
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.width >= 300 &&
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.height >= 20 &&
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.height <= 96
            );
          });
          if (!__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477) return;
          const __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 =
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.getBoundingClientRect?.(),
            __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 =
              __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.getBoundingClientRect?.();
          if (
            !__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 ||
            !__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 ||
            __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.height <=
              __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.height + 120
          )
            return;
          const __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 = Math.ceil(
            Math.max(
              40,
              __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.height + 16,
            ),
          );
          (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.style.setProperty(
            "\u0068\u0065\u0069\u0067\u0068\u0074",
            `${__bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061}px`,
            "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
          ),
            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.style.setProperty(
              "\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074",
              "\u0030",
              "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
            ),
            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.style.setProperty(
              "\u006d\u0061\u0078\u002d\u0068\u0065\u0069\u0067\u0068\u0074",
              `${__bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061}px`,
              "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
            ),
            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.style.setProperty(
              "\u006f\u0076\u0065\u0072\u0066\u006c\u006f\u0077",
              "\u0076\u0069\u0073\u0069\u0062\u006c\u0065",
              "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
            ));
          const __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 =
            __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.parentElement;
          if (
            __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 &&
            __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 !==
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
          ) {
            const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f = Math.ceil(
              Math.max(
                32,
                __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.height,
              ),
            );
            (__78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106.style.setProperty(
              "\u0068\u0065\u0069\u0067\u0068\u0074",
              `${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f}px`,
              "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
            ),
              __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106.style.setProperty(
                "\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074",
                "\u0030",
                "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
              ),
              __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106.style.setProperty(
                "\u006d\u0061\u0078\u002d\u0068\u0065\u0069\u0067\u0068\u0074",
                `${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f}px`,
                "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
              ),
              __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106.style.setProperty(
                "\u006f\u0076\u0065\u0072\u0066\u006c\u006f\u0077",
                "\u0076\u0069\u0073\u0069\u0062\u006c\u0065",
                "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
              ),
              (__78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106.dataset.n7xDuckImageFilterWrapperFixed =
                "\u0074\u0072\u0075\u0065"));
          }
          ((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.dataset.n7xDuckImageFilterFixed =
            "\u0074\u0072\u0075\u0065"),
            (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.documentElement.dataset.n7xDuckImageFilterFixed =
              "\u0074\u0072\u0075\u0065"));
        });
    },
    __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e = () => {
      const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.frame.contentWindow;
      if (
        !__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 ||
        !__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.body
      )
        return;
      const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c = String(
        __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.body.innerText || "",
      );
      if (
        !/AI images/i.test(__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c) ||
        !/All sizes/i.test(__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c) ||
        !/All layouts/i.test(__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c)
      )
        return (
          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708
            .querySelectorAll("\u005b\u0064\u0061\u0074\u0061\u002d\u006e\u0037\u0078\u002d\u0064\u0075\u0063\u006b\u002d\u006d\u0061\u0069\u006e\u006c\u0069\u006e\u0065\u002d\u0068\u0069\u0064\u0064\u0065\u006e\u003d\u0022\u0074\u0072\u0075\u0065\u0022\u005d")
            .forEach((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => {
              (["\u0064\u0069\u0073\u0070\u006c\u0061\u0079", "\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074", "\u0068\u0065\u0069\u0067\u0068\u0074", "\u006d\u0061\u0072\u0067\u0069\u006e", "\u0070\u0061\u0064\u0064\u0069\u006e\u0067"].forEach(
                (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) =>
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.style.removeProperty(
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                  ),
              ),
                delete __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.dataset
                  .n7xDuckMainlineHidden);
            }),
          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708
            .querySelectorAll("\u005b\u0064\u0061\u0074\u0061\u002d\u006e\u0037\u0078\u002d\u0064\u0075\u0063\u006b\u002d\u0069\u006d\u0061\u0067\u0065\u002d\u0067\u0061\u0070\u002d\u0066\u0069\u0078\u0065\u0064\u003d\u0022\u0074\u0072\u0075\u0065\u0022\u005d")
            .forEach((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => {
              (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.style.removeProperty(
                "\u006d\u0061\u0072\u0067\u0069\u006e\u002d\u0074\u006f\u0070",
              ),
                delete __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.dataset
                  .n7xDuckImageGapFixed);
            }),
          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708
            .querySelectorAll("\u005b\u0064\u0061\u0074\u0061\u002d\u006e\u0037\u0078\u002d\u0064\u0075\u0063\u006b\u002d\u0069\u006d\u0061\u0067\u0065\u002d\u0066\u0069\u006c\u0074\u0065\u0072\u002d\u0066\u0069\u0078\u0065\u0064\u003d\u0022\u0074\u0072\u0075\u0065\u0022\u005d")
            .forEach((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => {
              (["\u0068\u0065\u0069\u0067\u0068\u0074", "\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074", "\u006d\u0061\u0078\u002d\u0068\u0065\u0069\u0067\u0068\u0074", "\u006f\u0076\u0065\u0072\u0066\u006c\u006f\u0077"].forEach(
                (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) =>
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.style.removeProperty(
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                  ),
              ),
                delete __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.dataset
                  .n7xDuckImageFilterFixed);
            }),
          void __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708
            .querySelectorAll("\u005b\u0064\u0061\u0074\u0061\u002d\u006e\u0037\u0078\u002d\u0064\u0075\u0063\u006b\u002d\u0069\u006d\u0061\u0067\u0065\u002d\u0066\u0069\u006c\u0074\u0065\u0072\u002d\u0077\u0072\u0061\u0070\u0070\u0065\u0072\u002d\u0066\u0069\u0078\u0065\u0064\u003d\u0022\u0074\u0072\u0075\u0065\u0022\u005d")
            .forEach((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => {
              (["\u0068\u0065\u0069\u0067\u0068\u0074", "\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074", "\u006d\u0061\u0078\u002d\u0068\u0065\u0069\u0067\u0068\u0074", "\u006f\u0076\u0065\u0072\u0066\u006c\u006f\u0077"].forEach(
                (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) =>
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.style.removeProperty(
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                  ),
              ),
                delete __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.dataset
                  .n7xDuckImageFilterWrapperFixed);
            })
        );
      const __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 =
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.scrollY ||
          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.scrollingElement
            ?.scrollTop ||
          0,
        __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 = [
          ...__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.images,
        ]
          .filter((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => {
            if (
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.closest?.(
                "\u0068\u0065\u0061\u0064\u0065\u0072\u002c\u006e\u0061\u0076\u002c\u0061\u0073\u0069\u0064\u0065\u002c\u005b\u0072\u006f\u006c\u0065\u003d\u0022\u0064\u0069\u0061\u006c\u006f\u0067\u0022\u005d\u002c\u005b\u0063\u006c\u0061\u0073\u0073\u002a\u003d\u0022\u006d\u006f\u0064\u0061\u006c\u0022\u0020\u0069\u005d\u002c\u005b\u0063\u006c\u0061\u0073\u0073\u002a\u003d\u0022\u0061\u006e\u006f\u006d\u0061\u006c\u0079\u0022\u0020\u0069\u005d",
              )
            )
              return !1;
            const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.getBoundingClientRect?.();
            return (
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 &&
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.width >= 100 &&
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.height >= 70
            );
          })
          .sort(
            (
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
            ) => {
              const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.getBoundingClientRect(),
                __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.getBoundingClientRect();
              return (
                __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.top -
                  __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.top ||
                __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.left -
                  __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.left
              );
            },
          );
      if (__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.length < 4) return;
      const __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 =
        __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.slice(
          0,
          Math.min(12, __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.length),
        );
      __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708
        .querySelectorAll("\u005b\u0064\u0061\u0074\u0061\u002d\u0074\u0065\u0073\u0074\u0069\u0064\u003d\u0022\u006d\u0061\u0069\u006e\u006c\u0069\u006e\u0065\u0022\u005d\u002c\u002e\u0072\u0065\u0073\u0075\u006c\u0074\u0073\u002d\u002d\u006d\u0061\u0069\u006e")
        .forEach((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => {
          __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.some(
            (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) =>
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.contains(
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
              ),
          ) ||
            (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.style.setProperty(
              "\u0064\u0069\u0073\u0070\u006c\u0061\u0079",
              "\u006e\u006f\u006e\u0065",
              "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
            ),
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.style.setProperty(
              "\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074",
              "\u0030",
              "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
            ),
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.style.setProperty(
              "\u0068\u0065\u0069\u0067\u0068\u0074",
              "\u0030",
              "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
            ),
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.style.setProperty(
              "\u006d\u0061\u0072\u0067\u0069\u006e",
              "\u0030",
              "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
            ),
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.style.setProperty(
              "\u0070\u0061\u0064\u0064\u0069\u006e\u0067",
              "\u0030",
              "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
            ),
            (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.dataset.n7xDuckMainlineHidden =
              "\u0074\u0072\u0075\u0065"));
        });
      let __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 = 0;
      __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708
        .querySelectorAll("\u0064\u0069\u0076\u002c\u006e\u0061\u0076\u002c\u0073\u0065\u0063\u0074\u0069\u006f\u006e")
        .forEach((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => {
          const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = String(
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.innerText || "",
          )
            .replace(/\s+/g, "\u0020")
            .trim();
          if (
            ["\u0041\u0049\u0020\u0069\u006d\u0061\u0067\u0065\u0073", "\u0041\u006c\u006c\u0020\u0073\u0069\u007a\u0065\u0073", "\u0041\u006c\u006c\u0020\u0063\u006f\u006c\u006f\u0072\u0073", "\u0041\u006c\u006c\u0020\u0074\u0079\u0070\u0065\u0073", "\u0041\u006c\u006c\u0020\u006c\u0061\u0079\u006f\u0075\u0074\u0073", "\u004c\u0069\u0063\u0065\u006e\u0073\u0065\u0073"].filter(
              (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.includes(
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                ),
            ).length < 3
          )
            return;
          const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.getBoundingClientRect?.();
          !__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 ||
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.width < 300 ||
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.height <= 0 ||
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.height > 120 ||
            (__bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 = Math.max(
              __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061,
              __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.bottom +
                __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
            ));
        });
      const __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 = Math.max(
        110,
        __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061
          ? __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 + 12
          : 0,
      );
      let __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e =
        __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7[0].parentElement;
      for (
        ;
        __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e &&
        !__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.every(
          (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
            __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e.contains(
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
            ),
        );

      )
        __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e =
          __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e.parentElement;
      if (
        !__195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e ||
        __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e ===
          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.body ||
        __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e ===
          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.documentElement
      )
        return;
      for (
        ;
        __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e.parentElement &&
        __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e.parentElement !==
          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.body &&
        __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e.parentElement !==
          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.documentElement;

      ) {
        const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
          __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e.parentElement;
        if (
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.querySelector(
            "\u005b\u0064\u0061\u0074\u0061\u002d\u0074\u0065\u0073\u0074\u0069\u0064\u003d\u0022\u0068\u0065\u0061\u0064\u0065\u0072\u0022\u005d\u002c\u0066\u006f\u0072\u006d\u005b\u0064\u0061\u0074\u0061\u002d\u0074\u0065\u0073\u0074\u0069\u0064\u003d\u0022\u0073\u0065\u0061\u0072\u0063\u0068\u002d\u0066\u006f\u0072\u006d\u0022\u005d",
          )
        )
          break;
        const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.getBoundingClientRect?.();
        if (
          !__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 ||
          (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53?.top || 0) +
            __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 <
            __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 + 180
        )
          break;
        __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e =
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f;
      }
      if (
        "\u0074\u0072\u0075\u0065" ===
        __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e.dataset
          .n7xDuckImageGapFixed
      )
        return;
      const __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22 =
        __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e.getBoundingClientRect?.();
      if (!__d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22) return;
      const __0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba = Math.round(
        __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22.top +
          __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 -
          __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106,
      );
      if (__0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba < 220) return;
      const __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e =
        Number.parseFloat(
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.getComputedStyle(
            __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e,
          ).marginTop,
        ) || 0;
      (__195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e.style.setProperty(
        "\u006d\u0061\u0072\u0067\u0069\u006e\u002d\u0074\u006f\u0070",
        __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e -
          __0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba +
          "\u0070\u0078",
        "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
      ),
        (__195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e.dataset.n7xDuckImageGapFixed =
          "\u0074\u0072\u0075\u0065"),
        (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.documentElement.dataset.n7xDuckImageGapFixed =
          "\u0074\u0072\u0075\u0065"));
    };
  let __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22 = !1;
  const __0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba = () => {
    __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22 ||
      ((__d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22 = !0),
      requestAnimationFrame(() => {
        ((__d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22 = !1),
          __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106(),
          __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7(),
          __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e(),
          __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061());
      }));
  };
  try {
    new MutationObserver(
      __0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba,
    ).observe(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.documentElement, {
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
  let __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e = !1;
  const __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265 = () => {
    __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e ||
      ((__6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e = !0),
      requestAnimationFrame(() => {
        ((__6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e = !1),
          __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061());
      }));
  };
  (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.addEventListener(
    "\u006c\u006f\u0061\u0064",
    __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265,
    !0,
  ),
    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.addEventListener(
      "\u0073\u0063\u0072\u006f\u006c\u006c",
      __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265,
      {
        capture: !0,
        passive: !0,
      },
    ),
    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.defaultView?.addEventListener(
      "\u0072\u0065\u0073\u0069\u007a\u0065",
      __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265,
      {
        passive: !0,
      },
    ),
    __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106(),
    __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7(),
    __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e(),
    __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061(),
    [250, 700, 1400, 2600, 4200].forEach(
      (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
        setTimeout(() => {
          (__78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106(),
            __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7(),
            __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e(),
            __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061());
        }, __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f),
    ));
};
