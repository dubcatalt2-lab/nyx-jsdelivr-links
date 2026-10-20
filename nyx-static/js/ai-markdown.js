(() => {
  "use strict";
  function __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(
    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
  ) {
    return String(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f ?? "").replace(
      /[&<>"']/g,
      (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
        ({
          "\u0026": "\u0026\u0061\u006d\u0070\u003b",
          "\u003c": "\u0026\u006c\u0074\u003b",
          "\u003e": "\u0026\u0067\u0074\u003b",
          "\u0022": "\u0026\u0071\u0075\u006f\u0074\u003b",
          "\u0027": "\u0026\u0023\u0033\u0039\u003b",
        })[__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f],
    );
  }
  function __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53(
    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = !1,
  ) {
    const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c = String(
      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 ?? "",
    ).trim();
    if (!__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c) return "";
    try {
      if (window.katex?.renderToString)
        return window.katex.renderToString(
          __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
          {
            displayMode: Boolean(
              __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
            ),
            throwOnError: !1,
            strict: "\u0069\u0067\u006e\u006f\u0072\u0065",
            trust: !1,
            output: "\u0068\u0074\u006d\u006c\u0041\u006e\u0064\u004d\u0061\u0074\u0068\u006d\u006c",
          },
        );
    } catch (__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477) {
      console.warn(
        "\u004e\u0037\u0058\u0020\u0041\u0049\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0072\u0065\u006e\u0064\u0065\u0072\u0020\u006d\u0061\u0074\u0068\u003a",
        __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
      );
    }
    return `<span class="ai-math-fallback">${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(
      __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c
        .replace(/\\text\{([^{}]*)\}/g, "\u0024\u0031")
        .replace(/\\[,;:!]/g, "\u0020")
        .replace(/\\(?:quad|qquad)\b/g, "\u0020")
        .replace(/\\(?:times|cdot)/g, "\u0020\u00d7\u0020")
        .replace(/\\leq?/g, "\u2264")
        .replace(/\\geq?/g, "\u2265")
        .replace(/\\neq/g, "\u2260")
        .replace(/\\pm/g, "\u00b1")
        .replace(/[{}]/g, ""),
    )}</span>`;
  }
  function __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708(
    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
  ) {
    const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c = [];
    let __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 = String(
      __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 ?? "",
    ).replace(
      /`([^`\n]+)`/g,
      (
        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
        __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
      ) => {
        const __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 = `@@NYX_INLINE_${__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.length}@@`;
        return (
          __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.push(
            `<code>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708)}</code>`,
          ),
          __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477
        );
      },
    );
    const __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 = [];
    ((__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 =
      __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.replace(
        /\\+\[([^\n]*?)\\+\]|\\+\(([^\n]*?)\\+\)/g,
        (
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
          __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
        ) => {
          const __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 = `@@NYX_MATH_${__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.length}@@`;
          return (
            __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.push(
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53(
                __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 ??
                  __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
                void 0 !== __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
              ),
            ),
            __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477
          );
        },
      )),
      (__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 =
        __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.replace(
          /(?<!\\)\$([^\s$](?:[^$\n]*?[^\s$])?)\$(?!\d)/g,
          (
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
          ) => {
            const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c = `@@NYX_MATH_${__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.length}@@`;
            return (
              __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.push(
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53(
                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
                  !1,
                ),
              ),
              __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c
            );
          },
        )));
    let __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 =
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(
        __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
      );
    return (
      (__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 =
        __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.replace(
          /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/gi,
          "\u003c\u0061\u0020\u0068\u0072\u0065\u0066\u003d\u0022\u0024\u0032\u0022\u0020\u0074\u0061\u0072\u0067\u0065\u0074\u003d\u0022\u005f\u0062\u006c\u0061\u006e\u006b\u0022\u0020\u0072\u0065\u006c\u003d\u0022\u006e\u006f\u006f\u0070\u0065\u006e\u0065\u0072\u0020\u006e\u006f\u0072\u0065\u0066\u0065\u0072\u0072\u0065\u0072\u0022\u003e\u0024\u0031\u003c\u002f\u0061\u003e",
        )),
      (__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 =
        __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.replace(
          /\*\*([^*\n]+)\*\*/g,
          "\u003c\u0073\u0074\u0072\u006f\u006e\u0067\u003e\u0024\u0031\u003c\u002f\u0073\u0074\u0072\u006f\u006e\u0067\u003e",
        )),
      (__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 =
        __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.replace(
          /__([^_\n]+)__/g,
          "\u003c\u0073\u0074\u0072\u006f\u006e\u0067\u003e\u0024\u0031\u003c\u002f\u0073\u0074\u0072\u006f\u006e\u0067\u003e",
        )),
      (__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 =
        __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.replace(
          /~~([^~\n]+)~~/g,
          "\u003c\u0073\u003e\u0024\u0031\u003c\u002f\u0073\u003e",
        )),
      (__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 =
        __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.replace(
          /(^|[^*])\*([^*\n]+)\*/g,
          "\u0024\u0031\u003c\u0065\u006d\u003e\u0024\u0032\u003c\u002f\u0065\u006d\u003e",
        )),
      __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.forEach(
        (
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
        ) => {
          __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 =
            __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.replace(
              `@@NYX_MATH_${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53}@@`,
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
            );
        },
      ),
      __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.forEach(
        (
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
        ) => {
          __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 =
            __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.replace(
              `@@NYX_INLINE_${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53}@@`,
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
            );
        },
      ),
      __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7
    );
  }
  function __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c(
    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
  ) {
    return String(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f)
      .trim()
      .replace(/^\||\|$/g, "")
      .split("\u007c")
      .map((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.trim(),
      );
  }
  function __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477(
    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
  ) {
    const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
      __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c(
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
      );
    return (
      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.length > 1 &&
      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.every(
        (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
          /^:?-{3,}:?$/.test(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f),
      )
    );
  }
  function __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766(
    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
  ) {
    const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = String(
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f ?? "",
    ).trim();
    return /^\\+\[$/.test(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53)
      ? "\u0062\u0072\u0061\u0063\u006b\u0065\u0074"
      : "\u0024\u0024" === __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
        ? "\u0064\u006f\u006c\u006c\u0061\u0072"
        : "";
  }
  function __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7(
    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
  ) {
    const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = String(
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f ?? "",
    ).trim();
    return "\u0062\u0072\u0061\u0063\u006b\u0065\u0074" === __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
      ? /^\\+\]$/.test(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708)
      : "\u0024\u0024" === __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708;
  }
  function __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061(
    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
  ) {
    const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = String(
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f ?? "",
      ).trim(),
      __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.match(
          /^\\+\[([\s\S]*?)\\+\]$/,
        );
    if (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708)
      return __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708[1];
    const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.match(
        /^\$\$([\s\S]*?)\$\$$/,
      );
    return __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c
      ? __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c[1]
      : null;
  }
  function __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106(
    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
  ) {
    const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f[
        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
      ] || "";
    return (
      Boolean(
        __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766(
          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
        ),
      ) ||
      null !==
        __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061(
          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
        ) ||
      __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7(
        __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
        "\u0062\u0072\u0061\u0063\u006b\u0065\u0074",
      ) ||
      /^```/.test(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708) ||
      /^#{1,3}\s+/.test(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708) ||
      /^>\s?/.test(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708) ||
      /^\s*[-*+]\s+/.test(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708) ||
      /^\s*\d+[.)]\s+/.test(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708) ||
      /^\s*(?:---+|___+)\s*$/.test(
        __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
      ) ||
      __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.includes("\u0009") ||
      (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.includes("\u007c") &&
        __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477(
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f[
            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 + 1
          ] || "",
        ))
    );
  }
  window.NyxMarkdown = {
    render: function (__195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e) {
      const __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22 = String(
          __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e ?? "",
        )
          .replace(/\r\n?/g, "\u000a")
          .split("\u000a"),
        __0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba = [];
      for (
        let __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e = 0;
        __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e <
        __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22.length;

      ) {
        const __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e =
          __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22[
            __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e
          ];
        if (!__195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e.trim()) {
          __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e += 1;
          continue;
        }
        const __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265 =
          __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e.match(
            /^```([^\s`]*)\s*$/,
          );
        if (__6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265) {
          const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = (
              __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265[1] || "\u0063\u006f\u0064\u0065"
            ).slice(0, 24),
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = [];
          for (
            __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e += 1;
            __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e <
              __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22.length &&
            !/^```\s*$/.test(
              __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22[
                __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e
              ],
            );

          )
            (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.push(
              __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22[
                __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e
              ],
            ),
              (__6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e += 1));
          (__6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e <
            __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22.length &&
            (__6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e += 1),
            __0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba.push(
              `<div class="ai-code-block"><div class="ai-code-head"><span>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53)}</span><button class="ai-code-copy" type="button" data-copy-code aria-label="Copy code"><svg aria-hidden="true" viewBox="0 0 24 24"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M15 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3"/></svg><span>Copy</span></button></div><pre><code>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.join("\u000a"))}</code></pre></div>`,
            ));
          continue;
        }
        const __fcacda08e2d45e2c799c7376996c1a442e687015e3b968de16e67d8f572af52f =
          __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766(
            __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e,
          );
        if (__fcacda08e2d45e2c799c7376996c1a442e687015e3b968de16e67d8f572af52f) {
          let __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
            __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e + 1;
          for (
            ;
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f <
              __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22.length &&
            !__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7(
              __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22[
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f
              ],
              __fcacda08e2d45e2c799c7376996c1a442e687015e3b968de16e67d8f572af52f,
            );

          )
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f += 1;
          if (
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f <
            __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22.length
          ) {
            (__0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba.push(
              `<div class="ai-math-block">${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53(__d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22.slice(__6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e + 1, __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f).join("\u000a"), !0)}</div>`,
            ),
              (__6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e =
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f + 1));
            continue;
          }
          let __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
            __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e + 1;
          for (
            ;
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 <
              __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22.length &&
            __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22[
              __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708
            ].trim();

          )
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 += 1;
          const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
            __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22
              .slice(
                __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e + 1,
                __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
              )
              .join("\u000a");
          (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.trim() &&
            __0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba.push(
              `<div class="ai-math-block">${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53(__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c, !0)}</div>`,
            ),
            (__6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e =
              __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708));
          continue;
        }
        const __b1f802c665f7bebd541821d1b764ada73ffb4fa83e79200016911a5f9dfb544c =
          __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061(
            __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e,
          );
        if (null !== __b1f802c665f7bebd541821d1b764ada73ffb4fa83e79200016911a5f9dfb544c) {
          (__0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba.push(
            `<div class="ai-math-block">${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53(__b1f802c665f7bebd541821d1b764ada73ffb4fa83e79200016911a5f9dfb544c, !0)}</div>`,
          ),
            (__6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e += 1));
          continue;
        }
        if (
          __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7(
            __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e,
            "\u0062\u0072\u0061\u0063\u006b\u0065\u0074",
          )
        ) {
          __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e += 1;
          continue;
        }
        if (__195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e.includes("\u0009")) {
          const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f = [];
          for (
            ;
            __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e <
              __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22.length &&
            __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22[
              __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e
            ].includes("\u0009") &&
            __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22[
              __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e
            ].trim();

          )
            (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.push(
              __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22[
                __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e
              ]
                .split(/\t+/)
                .map((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.trim(),
                ),
            ),
              (__6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e += 1));
          const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = Math.max(
            0,
            ...__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.map(
              (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.length,
            ),
          );
          if (
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.length > 1 &&
            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 > 1
          ) {
            const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.shift();
            __0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba.push(
              `<div class="ai-table-wrap"><table><thead><tr>${Array.from(
                {
                  length: __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                },
                (
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                ) =>
                  `<th>${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708(__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c[__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53] || "")}</th>`,
              ).join(
                "",
              )}</tr></thead><tbody>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f
                .map(
                  (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
                    `<tr>${Array.from(
                      {
                        length: __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                      },
                      (
                        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
                      ) =>
                        `<td>${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f[__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c] || "")}</td>`,
                    ).join("")}</tr>`,
                )
                .join("")}</tbody></table></div>`,
            );
            continue;
          }
          __0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba.push(
            `<p>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.flat().map(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708).join("\u003c\u0062\u0072\u003e")}</p>`,
          );
          continue;
        }
        if (
          __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e.includes("\u007c") &&
          __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477(
            __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22[
              __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e + 1
            ] || "",
          )
        ) {
          const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
            __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c(
              __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e,
            );
          __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e += 2;
          const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = [];
          for (
            ;
            __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e <
              __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22.length &&
            __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22[
              __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e
            ].includes("\u007c") &&
            __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22[
              __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e
            ].trim();

          )
            (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.push(
              __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c(
                __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22[
                  __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e
                ],
              ),
            ),
              (__6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e += 1));
          __0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba.push(
            `<div class="ai-table-wrap"><table><thead><tr>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.map((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => `<th>${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f)}</th>`).join("")}</tr></thead><tbody>${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.map((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) => `<tr>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.map((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f, __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c) => `<td>${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53[__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c] || "")}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`,
          );
          continue;
        }
        const __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544 =
          __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e.match(
            /^(#{1,3})\s+(.+)$/,
          );
        if (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544) {
          const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
            __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544[1].length;
          (__0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba.push(
            `<h${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f}>${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708(__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544[2])}</h${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f}>`,
          ),
            (__6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e += 1));
          continue;
        }
        if (/^>\s?/.test(__195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e)) {
          const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f = [];
          for (
            ;
            __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e <
              __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22.length &&
            /^>\s?/.test(
              __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22[
                __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e
              ],
            );

          )
            (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.push(
              __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22[
                __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e
              ].replace(/^>\s?/, ""),
            ),
              (__6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e += 1));
          __0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba.push(
            `<blockquote>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.map(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708).join("\u003c\u0062\u0072\u003e")}</blockquote>`,
          );
          continue;
        }
        const __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d =
            /^\s*[-*+]\s+/.test(__195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e),
          __2a7a4197494d8323fea0f175ba188cc62025fc3fcf0d33594407f5566e01d6cc =
            /^\s*\d+[.)]\s+/.test(
              __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e,
            );
        if (
          __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d ||
          __2a7a4197494d8323fea0f175ba188cc62025fc3fcf0d33594407f5566e01d6cc
        ) {
          const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f = [],
            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
              __2a7a4197494d8323fea0f175ba188cc62025fc3fcf0d33594407f5566e01d6cc
                ? /^\s*\d+[.)]\s+/
                : /^\s*[-*+]\s+/;
          for (
            ;
            __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e <
              __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22.length &&
            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.test(
              __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22[
                __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e
              ],
            );

          )
            (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.push(
              __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22[
                __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e
              ].replace(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53, ""),
            ),
              (__6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e += 1));
          const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
            __2a7a4197494d8323fea0f175ba188cc62025fc3fcf0d33594407f5566e01d6cc ? "\u006f\u006c" : "\u0075\u006c";
          __0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba.push(
            `<${__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c}>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.map((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => `<li>${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f)}</li>`).join("")}</${__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c}>`,
          );
          continue;
        }
        if (
          /^\s*(?:---+|___+)\s*$/.test(
            __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e,
          )
        ) {
          (__0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba.push("\u003c\u0068\u0072\u003e"),
            (__6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e += 1));
          continue;
        }
        const __3c22b3f87a34fd589b28089a6e1fe9407580da47a00ca8a13ab4e306192fb487 = [
          __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e,
        ];
        for (
          __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e += 1;
          __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e <
            __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22.length &&
          __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22[
            __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e
          ].trim() &&
          !__78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106(
            __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22,
            __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e,
          );

        )
          (__3c22b3f87a34fd589b28089a6e1fe9407580da47a00ca8a13ab4e306192fb487.push(
            __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22[
              __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e
            ],
          ),
            (__6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e += 1));
        __0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba.push(
          `<p>${__3c22b3f87a34fd589b28089a6e1fe9407580da47a00ca8a13ab4e306192fb487.map(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708).join("\u003c\u0062\u0072\u003e")}</p>`,
        );
      }
      return __0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba.join("");
    },
  };
})();
