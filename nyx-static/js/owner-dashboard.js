(() => {
  "use strict";
  const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f = (
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
    ) =>
      String(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f ?? "").replace(
        /[&<>"']/g,
        (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
          ({
            "\u0026": "\u0026\u0061\u006d\u0070\u003b",
            "\u003c": "\u0026\u006c\u0074\u003b",
            "\u003e": "\u0026\u0067\u0074\u003b",
            "\u0022": "\u0026\u0071\u0075\u006f\u0074\u003b",
            "\u0027": "\u0026\u0023\u0033\u0039\u003b",
          })[__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f],
      ),
    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = Object.freeze({
      owner: "\u004f\u0077\u006e\u0065\u0072",
      co_owner: "\u0043\u006f\u002d\u006f\u0077\u006e\u0065\u0072",
      admin: "\u0041\u0064\u006d\u0069\u006e",
      manager: "\u004d\u0061\u006e\u0061\u0067\u0065\u0072",
      developer: "\u0044\u0065\u0076\u0065\u006c\u006f\u0070\u0065\u0072",
      moderator: "\u004d\u006f\u0064\u0065\u0072\u0061\u0074\u006f\u0072",
      support: "\u0053\u0075\u0070\u0070\u006f\u0072\u0074",
      tester: "\u0054\u0065\u0073\u0074\u0065\u0072",
      contributor: "\u0043\u006f\u006e\u0074\u0072\u0069\u0062\u0075\u0074\u006f\u0072",
      member: "\u004d\u0065\u006d\u0062\u0065\u0072",
      guest: "\u0047\u0075\u0065\u0073\u0074",
    }),
    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = Object.freeze({
      co_owner: "\u006f\u0077\u006e\u0065\u0072",
      manager: "\u0061\u0064\u006d\u0069\u006e",
      support: "\u006d\u006f\u0064\u0065\u0072\u0061\u0074\u006f\u0072",
      tester: "\u0064\u0065\u0076\u0065\u006c\u006f\u0070\u0065\u0072",
      contributor: "\u0064\u0065\u0076\u0065\u006c\u006f\u0070\u0065\u0072",
      guest: "\u006d\u0065\u006d\u0062\u0065\u0072",
    }),
    __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c = Object.freeze([
      "\u006d\u0065\u006d\u0062\u0065\u0072",
      "\u0063\u006f\u006e\u0074\u0072\u0069\u0062\u0075\u0074\u006f\u0072",
      "\u0074\u0065\u0073\u0074\u0065\u0072",
      "\u0073\u0075\u0070\u0070\u006f\u0072\u0074",
      "\u006d\u006f\u0064\u0065\u0072\u0061\u0074\u006f\u0072",
      "\u0064\u0065\u0076\u0065\u006c\u006f\u0070\u0065\u0072",
      "\u006d\u0061\u006e\u0061\u0067\u0065\u0072",
      "\u0061\u0064\u006d\u0069\u006e",
      "\u0063\u006f\u005f\u006f\u0077\u006e\u0065\u0072",
      "\u006f\u0077\u006e\u0065\u0072",
    ]),
    __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 = (
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
    ) =>
      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53[
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f
      ] || "\u004d\u0065\u006d\u0062\u0065\u0072",
    __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 = (
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
    ) =>
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f?.customRole?.label ||
      __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477(
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f?.role,
      ),
    __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 = (
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
    ) =>
      /^#[0-9a-f]{6}$/i.test(
        String(
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f?.customRole?.color ||
            "",
        ),
      )
        ? __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.customRole.color
        : "",
    __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 = (
      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
    ) =>
      `<img class="n7x-owner-role-icon" src="/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/assets/icons/roles/${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708[__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53] || __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53)}.png" alt="" aria-hidden="true">`,
    __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 = (
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
    ) =>
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f
        ?.querySelectorAll?.("\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0072\u006f\u006c\u0065\u002d\u006f\u0070\u0074\u0069\u006f\u006e\u005d")
        .forEach((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => {
          const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.dataset
              .ownerRoleOption ===
            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53;
          (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.classList.toggle(
            "\u0061\u0063\u0074\u0069\u0076\u0065",
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
          ),
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.setAttribute(
              "\u0061\u0072\u0069\u0061\u002d\u0063\u0068\u0065\u0063\u006b\u0065\u0064",
              String(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708),
            ));
        }),
    __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e = (
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
    ) =>
      ({
        none: "\u004e\u006f\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074",
        free: "\u0046\u0072\u0065\u0065",
        premium: "\u0050\u0072\u0065\u006d\u0069\u0075\u006d",
        trialing: "\u0054\u0072\u0069\u0061\u006c",
        past_due: "\u0050\u0061\u0073\u0074\u0020\u0064\u0075\u0065",
        canceled: "\u0043\u0061\u006e\u0063\u0065\u006c\u0065\u0064",
      })[__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f] || "\u0046\u0072\u0065\u0065",
    __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22 = (
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
    ) =>
      String(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f || "")
        .replaceAll("\u005f", "\u0020")
        .replace(/\b\w/g, (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.toUpperCase(),
        ),
    __0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba = (
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
    ) => {
      const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = new Date(
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f || "",
      );
      return Number.isNaN(
        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.getTime(),
      )
        ? "\u004e\u0065\u0076\u0065\u0072"
        : new Intl.DateTimeFormat(void 0, {
            dateStyle: "\u006d\u0065\u0064\u0069\u0075\u006d",
            timeStyle: "\u0073\u0068\u006f\u0072\u0074",
          }).format(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53);
    },
    __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e = (
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
    ) => {
      const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = Date.parse(
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f || "",
      );
      if (!__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) return "\u004e\u0065\u0076\u0065\u0072";
      const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = Math.round(
          (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 - Date.now()) / 1e3,
        ),
        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
          new Intl.RelativeTimeFormat(void 0, {
            numeric: "\u0061\u0075\u0074\u006f",
          });
      if (Math.abs(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708) < 60)
        return __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.format(
          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
          "\u0073\u0065\u0063\u006f\u006e\u0064",
        );
      const __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 = Math.round(
        __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 / 60,
      );
      if (Math.abs(__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477) < 60)
        return __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.format(
          __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
          "\u006d\u0069\u006e\u0075\u0074\u0065",
        );
      const __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 = Math.round(
        __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 / 60,
      );
      return Math.abs(__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766) < 24
        ? __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.format(
            __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766,
            "\u0068\u006f\u0075\u0072",
          )
        : __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.format(
            Math.round(__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 / 24),
            "\u0064\u0061\u0079",
          );
    },
    __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265 = (
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
    ) => {
      const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = String(
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f || "",
      ).toLowerCase();
      return /(sign.?in|login|session|online)/.test(
        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
      )
        ? "\u006f\u006e\u006c\u0069\u006e\u0065"
        : /(sign.?up|create|invite|register)/.test(
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
            )
          ? "\u0073\u0069\u0067\u006e\u0075\u0070"
          : /(premium|subscription|payment|revenue|billing)/.test(
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
              )
            ? "\u0070\u0072\u0065\u006d\u0069\u0075\u006d"
            : /(user|account|profile|role)/.test(
                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                )
              ? "\u0075\u0073\u0065\u0072\u0073"
              : "\u0061\u0063\u0074\u0069\u0076\u0069\u0074\u0079";
    },
    __fcacda08e2d45e2c799c7376996c1a442e687015e3b968de16e67d8f572af52f = 1125e4,
    __b1f802c665f7bebd541821d1b764ada73ffb4fa83e79200016911a5f9dfb544c = new Map(),
    __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544 = new Map();
  function __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d(
    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
  ) {
    const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = String(
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f || "",
    ).trim();
    return /^\/api\/profile-media\/[A-Za-z0-9_-]{8,128}\/(?:avatar|banner)\/[A-Za-z0-9_-]{12,80}$/.test(
      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
    )
      ? __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
      : "";
  }
  function __2a7a4197494d8323fea0f175ba188cc62025fc3fcf0d33594407f5566e01d6cc(
    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = "",
    __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c = "",
  ) {
    const __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 =
      __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d(
        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
      );
    return __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477
      ? `<img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-owner-profile-media="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477)}" data-owner-media-fallback="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c)}" alt="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708)}">`
      : __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
        ? `<img src="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53)}" alt="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708)}">`
        : __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(
            __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
          );
  }
  async function __3c22b3f87a34fd589b28089a6e1fe9407580da47a00ca8a13ab4e306192fb487(
    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
  ) {
    const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = [
      ...(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f?.querySelectorAll?.(
        "\u0069\u006d\u0067\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0070\u0072\u006f\u0066\u0069\u006c\u0065\u002d\u006d\u0065\u0064\u0069\u0061\u005d",
      ) || []),
    ];
    await Promise.all(
      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.map(
        async (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => {
          const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = String(
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.dataset
              .ownerMediaFallback || "",
          );
          try {
            const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
              await (async function (
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
              ) {
                const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
                  __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d(
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                  );
                if (!__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53)
                  return null;
                if (
                  __b1f802c665f7bebd541821d1b764ada73ffb4fa83e79200016911a5f9dfb544c.has(
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                  )
                )
                  return __b1f802c665f7bebd541821d1b764ada73ffb4fa83e79200016911a5f9dfb544c.get(
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                  );
                if (
                  __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.has(
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                  )
                )
                  return __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.get(
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                  );
                const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
                  (async () => {
                    const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
                        await fetch(
                          `${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53}/manifest`,
                          {
                            cache: "\u0066\u006f\u0072\u0063\u0065\u002d\u0063\u0061\u0063\u0068\u0065",
                          },
                        ),
                      __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
                        await __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f
                          .json()
                          .catch(() => ({})),
                      __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c = String(
                        __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.mime ||
                          "",
                      ).toLowerCase(),
                      __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 = Number(
                        __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.totalChunks ||
                          0,
                      );
                    if (
                      !__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.ok ||
                      !/^image\/(?:gif|png|jpeg|webp)$/.test(
                        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
                      ) ||
                      !Number.isInteger(
                        __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
                      ) ||
                      __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 < 1 ||
                      __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 > 32
                    )
                      throw new Error("\u0054\u0068\u0061\u0074\u0020\u0073\u0061\u0076\u0065\u0064\u0020\u0070\u0072\u006f\u0066\u0069\u006c\u0065\u0020\u0069\u006d\u0061\u0067\u0065\u0020\u0069\u0073\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u002e");
                    const __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 = (
                        await Promise.all(
                          Array.from(
                            {
                              length:
                                __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
                            },
                            async (
                              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                              __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
                            ) => {
                              const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
                                  await fetch(
                                    `${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53}/chunks/${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708}`,
                                    {
                                      cache: "\u0066\u006f\u0072\u0063\u0065\u002d\u0063\u0061\u0063\u0068\u0065",
                                    },
                                  ),
                                __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 =
                                  (
                                    await __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.text()
                                  ).trim();
                              if (
                                !__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.ok ||
                                !__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 ||
                                !/^[a-z0-9+/=]+$/i.test(
                                  __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
                                )
                              )
                                throw new Error("\u0054\u0068\u0061\u0074\u0020\u0073\u0061\u0076\u0065\u0064\u0020\u0070\u0072\u006f\u0066\u0069\u006c\u0065\u0020\u0069\u006d\u0061\u0067\u0065\u0020\u0069\u0073\u0020\u0069\u006e\u0063\u006f\u006d\u0070\u006c\u0065\u0074\u0065\u002e");
                              return __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477;
                            },
                          ),
                        )
                      ).map(
                        (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => {
                          const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
                              atob(
                                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                              ),
                            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
                              new Uint8Array(
                                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.length,
                              );
                          for (
                            let __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c = 0;
                            __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c <
                            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.length;
                            __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c += 1
                          )
                            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708[
                              __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c
                            ] =
                              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.charCodeAt(
                                __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
                              );
                          return __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708;
                        },
                      ),
                      __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 = new Blob(
                        __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766,
                        {
                          type: __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
                        },
                      );
                    if (
                      Number(
                        __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.byteLength ||
                          0,
                      ) > 0 &&
                      __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.size !==
                        Number(
                          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.byteLength,
                        )
                    )
                      throw new Error("\u0054\u0068\u0061\u0074\u0020\u0073\u0061\u0076\u0065\u0064\u0020\u0070\u0072\u006f\u0066\u0069\u006c\u0065\u0020\u0069\u006d\u0061\u0067\u0065\u0020\u0064\u0069\u0064\u0020\u006e\u006f\u0074\u0020\u0070\u0061\u0073\u0073\u0020\u0069\u0074\u0073\u0020\u0073\u0069\u007a\u0065\u0020\u0063\u0068\u0065\u0063\u006b\u002e");
                    const __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 = {
                      url: URL.createObjectURL(
                        __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7,
                      ),
                      mime: __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
                      size: __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.size,
                    };
                    return (
                      __b1f802c665f7bebd541821d1b764ada73ffb4fa83e79200016911a5f9dfb544c.set(
                        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                        __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061,
                      ),
                      __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061
                    );
                  })().finally(() =>
                    __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.delete(
                      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                    ),
                  );
                return (
                  __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.set(
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
                  ),
                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708
                );
              })(
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.dataset
                  .ownerProfileMedia,
              );
            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 &&
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.isConnected &&
              (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.src =
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.url);
          } catch {
            if (!__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.isConnected)
              return;
            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
              ? __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.replaceWith(
                  document.createTextNode(
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                  ),
                )
              : __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.remove();
          }
        },
      ),
    );
  }
  let __34168c7d57200d99fd97b1ec555dbf09aa9a16d1cadcc54b0e6b2db76e926d02 = null;
  function __f2e5429bdd2ce4cd74b00d064941e11cca8a1f7f3d979f1aa03955b7bbd1e125() {
    (__34168c7d57200d99fd97b1ec555dbf09aa9a16d1cadcc54b0e6b2db76e926d02?.destroy?.(),
      (__34168c7d57200d99fd97b1ec555dbf09aa9a16d1cadcc54b0e6b2db76e926d02 = null));
  }
  function __c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4(
    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
  ) {
    return `<svg viewBox="0 0 24 24" aria-hidden="true">${
      {
        users:
          "\u003c\u0070\u0061\u0074\u0068\u0020\u0064\u003d\u0022\u004d\u0031\u0036\u0020\u0032\u0031\u0076\u002d\u0032\u0061\u0034\u0020\u0034\u0020\u0030\u0020\u0030\u0020\u0030\u002d\u0034\u002d\u0034\u0048\u0036\u0061\u0034\u0020\u0034\u0020\u0030\u0020\u0030\u0020\u0030\u002d\u0034\u0020\u0034\u0076\u0032\u0022\u002f\u003e\u003c\u0063\u0069\u0072\u0063\u006c\u0065\u0020\u0063\u0078\u003d\u0022\u0039\u0022\u0020\u0063\u0079\u003d\u0022\u0037\u0022\u0020\u0072\u003d\u0022\u0034\u0022\u002f\u003e\u003c\u0070\u0061\u0074\u0068\u0020\u0064\u003d\u0022\u004d\u0032\u0032\u0020\u0032\u0031\u0076\u002d\u0032\u0061\u0034\u0020\u0034\u0020\u0030\u0020\u0030\u0020\u0030\u002d\u0033\u002d\u0033\u002e\u0038\u0037\u004d\u0031\u0036\u0020\u0033\u002e\u0031\u0033\u0061\u0034\u0020\u0034\u0020\u0030\u0020\u0030\u0020\u0031\u0020\u0030\u0020\u0037\u002e\u0037\u0035\u0022\u002f\u003e",
        active: "\u003c\u0070\u0061\u0074\u0068\u0020\u0064\u003d\u0022\u004d\u0033\u0020\u0031\u0032\u0068\u0034\u006c\u0032\u002e\u0035\u002d\u0037\u0020\u0035\u0020\u0031\u0034\u0020\u0032\u002e\u0035\u002d\u0037\u0068\u0034\u0022\u002f\u003e",
        online: "\u003c\u0063\u0069\u0072\u0063\u006c\u0065\u0020\u0063\u0078\u003d\u0022\u0031\u0032\u0022\u0020\u0063\u0079\u003d\u0022\u0031\u0032\u0022\u0020\u0072\u003d\u0022\u0039\u0022\u002f\u003e\u003c\u0063\u0069\u0072\u0063\u006c\u0065\u0020\u0063\u0078\u003d\u0022\u0031\u0032\u0022\u0020\u0063\u0079\u003d\u0022\u0031\u0032\u0022\u0020\u0072\u003d\u0022\u0033\u0022\u002f\u003e",
        signup:
          "\u003c\u0070\u0061\u0074\u0068\u0020\u0064\u003d\u0022\u004d\u0031\u0035\u0020\u0032\u0031\u0076\u002d\u0032\u0061\u0034\u0020\u0034\u0020\u0030\u0020\u0030\u0020\u0030\u002d\u0034\u002d\u0034\u0048\u0035\u0061\u0034\u0020\u0034\u0020\u0030\u0020\u0030\u0020\u0030\u002d\u0034\u0020\u0034\u0076\u0032\u0022\u002f\u003e\u003c\u0063\u0069\u0072\u0063\u006c\u0065\u0020\u0063\u0078\u003d\u0022\u0038\u0022\u0020\u0063\u0079\u003d\u0022\u0037\u0022\u0020\u0072\u003d\u0022\u0034\u0022\u002f\u003e\u003c\u0070\u0061\u0074\u0068\u0020\u0064\u003d\u0022\u004d\u0031\u0039\u0020\u0038\u0076\u0036\u004d\u0031\u0036\u0020\u0031\u0031\u0068\u0036\u0022\u002f\u003e",
        premium: "\u003c\u0070\u0061\u0074\u0068\u0020\u0064\u003d\u0022\u006d\u0031\u0032\u0020\u0033\u0020\u0033\u0020\u0036\u0020\u0036\u0020\u002e\u0039\u002d\u0034\u002e\u0035\u0020\u0034\u002e\u0034\u0020\u0031\u002e\u0031\u0020\u0036\u002e\u0032\u002d\u0035\u002e\u0036\u002d\u0033\u002d\u0035\u002e\u0036\u0020\u0033\u0020\u0031\u002e\u0031\u002d\u0036\u002e\u0032\u004c\u0033\u0020\u0039\u002e\u0039\u0020\u0039\u0020\u0039\u006c\u0033\u002d\u0036\u005a\u0022\u002f\u003e",
        revenue:
          "\u003c\u0063\u0069\u0072\u0063\u006c\u0065\u0020\u0063\u0078\u003d\u0022\u0031\u0032\u0022\u0020\u0063\u0079\u003d\u0022\u0031\u0032\u0022\u0020\u0072\u003d\u0022\u0039\u0022\u002f\u003e\u003c\u0070\u0061\u0074\u0068\u0020\u0064\u003d\u0022\u004d\u0031\u0036\u0020\u0038\u0068\u002d\u0036\u0061\u0032\u0020\u0032\u0020\u0030\u0020\u0031\u0020\u0030\u0020\u0030\u0020\u0034\u0068\u0034\u0061\u0032\u0020\u0032\u0020\u0030\u0020\u0031\u0020\u0031\u0020\u0030\u0020\u0034\u0048\u0038\u004d\u0031\u0032\u0020\u0035\u0076\u0031\u0034\u0022\u002f\u003e",
        search: "\u003c\u0063\u0069\u0072\u0063\u006c\u0065\u0020\u0063\u0078\u003d\u0022\u0031\u0031\u0022\u0020\u0063\u0079\u003d\u0022\u0031\u0031\u0022\u0020\u0072\u003d\u0022\u0037\u0022\u002f\u003e\u003c\u0070\u0061\u0074\u0068\u0020\u0064\u003d\u0022\u006d\u0032\u0030\u0020\u0032\u0030\u002d\u0034\u002d\u0034\u0022\u002f\u003e",
        refresh: "\u003c\u0070\u0061\u0074\u0068\u0020\u0064\u003d\u0022\u004d\u0032\u0030\u0020\u0031\u0031\u0061\u0038\u0020\u0038\u0020\u0030\u0020\u0031\u0020\u0030\u002d\u0032\u002e\u0033\u0035\u0020\u0035\u002e\u0036\u0035\u0022\u002f\u003e\u003c\u0070\u0061\u0074\u0068\u0020\u0064\u003d\u0022\u004d\u0032\u0030\u0020\u0034\u0076\u0037\u0068\u002d\u0037\u0022\u002f\u003e",
        download: "\u003c\u0070\u0061\u0074\u0068\u0020\u0064\u003d\u0022\u004d\u0031\u0032\u0020\u0033\u0076\u0031\u0032\u006d\u002d\u0035\u002d\u0035\u0020\u0035\u0020\u0035\u0020\u0035\u002d\u0035\u0022\u002f\u003e\u003c\u0070\u0061\u0074\u0068\u0020\u0064\u003d\u0022\u004d\u0035\u0020\u0032\u0031\u0068\u0031\u0034\u0022\u002f\u003e",
        close: "\u003c\u0070\u0061\u0074\u0068\u0020\u0064\u003d\u0022\u006d\u0036\u0020\u0036\u0020\u0031\u0032\u0020\u0031\u0032\u004d\u0031\u0038\u0020\u0036\u0020\u0036\u0020\u0031\u0038\u0022\u002f\u003e",
        chevron: "\u003c\u0070\u0061\u0074\u0068\u0020\u0064\u003d\u0022\u006d\u0039\u0020\u0031\u0038\u0020\u0036\u002d\u0036\u002d\u0036\u002d\u0036\u0022\u002f\u003e",
        activity: "\u003c\u0070\u0061\u0074\u0068\u0020\u0064\u003d\u0022\u004d\u0031\u0032\u0020\u0038\u0076\u0035\u006c\u0033\u0020\u0032\u0022\u002f\u003e\u003c\u0063\u0069\u0072\u0063\u006c\u0065\u0020\u0063\u0078\u003d\u0022\u0031\u0032\u0022\u0020\u0063\u0079\u003d\u0022\u0031\u0032\u0022\u0020\u0072\u003d\u0022\u0039\u0022\u002f\u003e",
        shield:
          "\u003c\u0070\u0061\u0074\u0068\u0020\u0064\u003d\u0022\u004d\u0031\u0032\u0020\u0033\u0020\u0034\u002e\u0035\u0020\u0036\u0076\u0035\u0063\u0030\u0020\u0034\u002e\u0037\u0020\u0033\u002e\u0031\u0020\u0038\u002e\u0039\u0020\u0037\u002e\u0035\u0020\u0031\u0030\u0020\u0034\u002e\u0034\u002d\u0031\u002e\u0031\u0020\u0037\u002e\u0035\u002d\u0035\u002e\u0033\u0020\u0037\u002e\u0035\u002d\u0031\u0030\u0056\u0036\u004c\u0031\u0032\u0020\u0033\u005a\u0022\u002f\u003e\u003c\u0070\u0061\u0074\u0068\u0020\u0064\u003d\u0022\u006d\u0039\u0020\u0031\u0032\u0020\u0032\u0020\u0032\u0020\u0034\u002d\u0034\u0022\u002f\u003e",
        key: "\u003c\u0063\u0069\u0072\u0063\u006c\u0065\u0020\u0063\u0078\u003d\u0022\u0038\u0022\u0020\u0063\u0079\u003d\u0022\u0031\u0035\u0022\u0020\u0072\u003d\u0022\u0034\u0022\u002f\u003e\u003c\u0070\u0061\u0074\u0068\u0020\u0064\u003d\u0022\u006d\u0031\u0031\u0020\u0031\u0032\u0020\u0038\u002d\u0038\u004d\u0031\u0035\u0020\u0038\u006c\u0033\u0020\u0033\u004d\u0031\u0038\u0020\u0035\u006c\u0032\u0020\u0032\u0022\u002f\u003e",
        mail: "\u003c\u0072\u0065\u0063\u0074\u0020\u0078\u003d\u0022\u0033\u0022\u0020\u0079\u003d\u0022\u0035\u0022\u0020\u0077\u0069\u0064\u0074\u0068\u003d\u0022\u0031\u0038\u0022\u0020\u0068\u0065\u0069\u0067\u0068\u0074\u003d\u0022\u0031\u0034\u0022\u0020\u0072\u0078\u003d\u0022\u0032\u0022\u002f\u003e\u003c\u0070\u0061\u0074\u0068\u0020\u0064\u003d\u0022\u006d\u0033\u0020\u0037\u0020\u0039\u0020\u0036\u0020\u0039\u002d\u0036\u0022\u002f\u003e",
        check: "\u003c\u0070\u0061\u0074\u0068\u0020\u0064\u003d\u0022\u006d\u0035\u0020\u0031\u0032\u0020\u0034\u0020\u0034\u004c\u0031\u0039\u0020\u0036\u0022\u002f\u003e",
        userOff:
          "\u003c\u0070\u0061\u0074\u0068\u0020\u0064\u003d\u0022\u004d\u0031\u0036\u0020\u0032\u0031\u0076\u002d\u0032\u0061\u0034\u0020\u0034\u0020\u0030\u0020\u0030\u0020\u0030\u002d\u0034\u002d\u0034\u0048\u0037\u0061\u0034\u0020\u0034\u0020\u0030\u0020\u0030\u0020\u0030\u002d\u0034\u0020\u0034\u0076\u0032\u004d\u0039\u002e\u0035\u0020\u0031\u0031\u0061\u0034\u0020\u0034\u0020\u0030\u0020\u0030\u0020\u0030\u0020\u0032\u002e\u0039\u002d\u0036\u002e\u0038\u004d\u0033\u0020\u0033\u006c\u0031\u0038\u0020\u0031\u0038\u0022\u002f\u003e",
        userCheck:
          "\u003c\u0070\u0061\u0074\u0068\u0020\u0064\u003d\u0022\u004d\u0031\u0035\u0020\u0032\u0031\u0076\u002d\u0032\u0061\u0034\u0020\u0034\u0020\u0030\u0020\u0030\u0020\u0030\u002d\u0034\u002d\u0034\u0048\u0035\u0061\u0034\u0020\u0034\u0020\u0030\u0020\u0030\u0020\u0030\u002d\u0034\u0020\u0034\u0076\u0032\u004d\u0038\u0020\u0031\u0031\u0061\u0034\u0020\u0034\u0020\u0030\u0020\u0031\u0020\u0030\u0020\u0030\u002d\u0038\u004d\u0031\u0036\u0020\u0031\u0031\u006c\u0032\u0020\u0032\u0020\u0034\u002d\u0034\u0022\u002f\u003e",
        ban: "\u003c\u0063\u0069\u0072\u0063\u006c\u0065\u0020\u0063\u0078\u003d\u0022\u0031\u0032\u0022\u0020\u0063\u0079\u003d\u0022\u0031\u0032\u0022\u0020\u0072\u003d\u0022\u0039\u0022\u002f\u003e\u003c\u0070\u0061\u0074\u0068\u0020\u0064\u003d\u0022\u006d\u0036\u0020\u0036\u0020\u0031\u0032\u0020\u0031\u0032\u0022\u002f\u003e",
        trash: "\u003c\u0070\u0061\u0074\u0068\u0020\u0064\u003d\u0022\u004d\u0034\u0020\u0037\u0068\u0031\u0036\u004d\u0039\u0020\u0037\u0056\u0034\u0068\u0036\u0076\u0033\u004d\u0031\u0038\u0020\u0037\u006c\u002d\u0031\u0020\u0031\u0034\u0048\u0037\u004c\u0036\u0020\u0037\u004d\u0031\u0030\u0020\u0031\u0031\u0076\u0036\u004d\u0031\u0034\u0020\u0031\u0031\u0076\u0036\u0022\u002f\u003e",
        save: "\u003c\u0070\u0061\u0074\u0068\u0020\u0064\u003d\u0022\u004d\u0035\u0020\u0033\u0068\u0031\u0032\u006c\u0032\u0020\u0032\u0076\u0031\u0036\u0048\u0035\u007a\u0022\u002f\u003e\u003c\u0070\u0061\u0074\u0068\u0020\u0064\u003d\u0022\u004d\u0038\u0020\u0033\u0076\u0036\u0068\u0038\u0056\u0033\u004d\u0038\u0020\u0032\u0031\u0076\u002d\u0037\u0068\u0038\u0076\u0037\u0022\u002f\u003e",
        apps: "\u003c\u0072\u0065\u0063\u0074\u0020\u0078\u003d\u0022\u0033\u0022\u0020\u0079\u003d\u0022\u0033\u0022\u0020\u0077\u0069\u0064\u0074\u0068\u003d\u0022\u0037\u0022\u0020\u0068\u0065\u0069\u0067\u0068\u0074\u003d\u0022\u0037\u0022\u0020\u0072\u0078\u003d\u0022\u0031\u0022\u002f\u003e\u003c\u0072\u0065\u0063\u0074\u0020\u0078\u003d\u0022\u0031\u0034\u0022\u0020\u0079\u003d\u0022\u0033\u0022\u0020\u0077\u0069\u0064\u0074\u0068\u003d\u0022\u0037\u0022\u0020\u0068\u0065\u0069\u0067\u0068\u0074\u003d\u0022\u0037\u0022\u0020\u0072\u0078\u003d\u0022\u0031\u0022\u002f\u003e\u003c\u0072\u0065\u0063\u0074\u0020\u0078\u003d\u0022\u0033\u0022\u0020\u0079\u003d\u0022\u0031\u0034\u0022\u0020\u0077\u0069\u0064\u0074\u0068\u003d\u0022\u0037\u0022\u0020\u0068\u0065\u0069\u0067\u0068\u0074\u003d\u0022\u0037\u0022\u0020\u0072\u0078\u003d\u0022\u0031\u0022\u002f\u003e\u003c\u0072\u0065\u0063\u0074\u0020\u0078\u003d\u0022\u0031\u0034\u0022\u0020\u0079\u003d\u0022\u0031\u0034\u0022\u0020\u0077\u0069\u0064\u0074\u0068\u003d\u0022\u0037\u0022\u0020\u0068\u0065\u0069\u0067\u0068\u0074\u003d\u0022\u0037\u0022\u0020\u0072\u0078\u003d\u0022\u0031\u0022\u002f\u003e",
      }[__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f] || ""
    }</svg>`;
  }
  globalThis.NyxOwnerDashboard = Object.freeze({
    open: (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) => (
      __f2e5429bdd2ce4cd74b00d064941e11cca8a1f7f3d979f1aa03955b7bbd1e125(),
      (__34168c7d57200d99fd97b1ec555dbf09aa9a16d1cadcc54b0e6b2db76e926d02 = (function ({
        getToken: __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
        toast: __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
        onPresence: __b1f802c665f7bebd541821d1b764ada73ffb4fa83e79200016911a5f9dfb544c,
      } = {}) {
        if ("\u0066\u0075\u006e\u0063\u0074\u0069\u006f\u006e" != typeof __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53)
          throw new Error("\u004f\u0077\u006e\u0065\u0072\u0020\u0061\u0075\u0074\u0068\u0065\u006e\u0074\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u0020\u0069\u0073\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u002e");
        const __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544 = {
            page: 1,
            pageSize: 25,
            search: "",
            role: "\u0061\u006c\u006c",
            subscription: "\u0061\u006c\u006c",
            status: "\u0061\u006c\u006c",
            segment: "\u0061\u006c\u006c",
            sort: "\u006c\u0061\u0073\u0074\u0041\u0063\u0074\u0069\u0076\u0065\u0041\u0074",
            direction: "\u0064\u0065\u0073\u0063",
            data: null,
            access: null,
            loading: !1,
            controller: null,
            searchTimer: 0,
            selectedUser: null,
            selectedCapabilities: null,
            ipBans: [],
            ipBanClientIp: "",
            customRoles: [],
            customRolePlacements: [],
            customRolePermissions: [],
            customRoleEditorId: "",
            globalApps: [],
          },
          __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d =
            document.createElement("\u0073\u0065\u0063\u0074\u0069\u006f\u006e");
        ((__da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.className =
          "\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0061\u0073\u0068\u0062\u006f\u0061\u0072\u0064\u002d\u006f\u0076\u0065\u0072\u006c\u0061\u0079\u0020\u006f\u0077\u006e\u0065\u0072\u002d\u006f\u0072\u0067\u0061\u006e\u0069\u007a\u0065\u0064"),
          __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.setAttribute(
            "\u0072\u006f\u006c\u0065",
            "\u0064\u0069\u0061\u006c\u006f\u0067",
          ),
          __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.setAttribute(
            "\u0061\u0072\u0069\u0061\u002d\u006d\u006f\u0064\u0061\u006c",
            "\u0074\u0072\u0075\u0065",
          ),
          __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.setAttribute(
            "\u0061\u0072\u0069\u0061\u002d\u006c\u0061\u0062\u0065\u006c\u006c\u0065\u0064\u0062\u0079",
            "\u006e\u0037\u0078\u004f\u0077\u006e\u0065\u0072\u0044\u0061\u0073\u0068\u0062\u006f\u0061\u0072\u0064\u0054\u0069\u0074\u006c\u0065",
          ),
          (__da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.innerHTML = `\n      <main class="n7x-owner-dashboard">\n        <header class="n7x-owner-header">\n          <div><span class="n7x-owner-eyebrow">${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0073\u0068\u0069\u0065\u006c\u0064")}N7X ADMINISTRATION</span><h1 id="n7xOwnerDashboardTitle">Owner Dashboard</h1><p data-owner-access-copy>Loading your role permissions\u2026</p></div>\n          <div class="n7x-owner-header-actions">\n            <button type="button" data-owner-refresh>${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0072\u0065\u0066\u0072\u0065\u0073\u0068")}<span>Refresh</span></button>\n            <button class="n7x-owner-close" type="button" data-owner-close aria-label="Close owner dashboard">${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0063\u006c\u006f\u0073\u0065")}</button>\n          </div>\n        </header>\n        <nav class="n7x-owner-nav" aria-label="Dashboard sections">${[
            ["\u006f\u0076\u0065\u0072\u0076\u0069\u0065\u0077", "\u004f\u0076\u0065\u0072\u0076\u0069\u0065\u0077"],
            ["\u0075\u0073\u0065\u0072\u0073", "\u0055\u0073\u0065\u0072\u0073"],
            ["\u0073\u0065\u0072\u0076\u0069\u0063\u0065\u0073", "\u0053\u0065\u0072\u0076\u0069\u0063\u0065\u0073"],
            ["\u0061\u0063\u0074\u0069\u0076\u0069\u0074\u0079", "\u0041\u0063\u0074\u0069\u0076\u0069\u0074\u0079"],
          ]
            .map(
              ([
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
              ]) =>
                `<button type="button" data-owner-section="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f}" aria-pressed="${"\u006f\u0076\u0065\u0072\u0076\u0069\u0065\u0077" === __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f}" aria-controls="n7x-owner-section-${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f}">${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53}</button>`,
            )
            .join(
              "",
            )}</nav>\n        <section class="n7x-owner-section" data-owner-panel="overview" id="n7x-owner-section-overview" aria-label="Overview">\n          <div class="n7x-owner-section-heading"><h2>At a glance</h2><p>Choose a metric to view matching accounts.</p></div>\n          <section class="n7x-owner-metrics" data-owner-metrics aria-label="Account metrics"></section>\n          <section class="n7x-owner-traffic" data-owner-traffic hidden aria-label="Server traffic"></section>\n        </section>\n        <section class="n7x-owner-section" data-owner-panel="services" id="n7x-owner-section-services" aria-label="Services" hidden>\n          <div class="n7x-owner-section-heading"><h2>Services</h2><p>Balances, playback health, and game reports.</p></div>\n          <div class="n7x-owner-service-grid">\n            <section class="n7x-owner-tube-status" data-owner-ai-status hidden aria-live="polite"></section>\n            <section class="n7x-owner-tube-status" data-owner-tube-status hidden aria-live="polite"></section>\n            <section class="n7x-owner-tube-status" data-owner-game-reports hidden></section>\n          </div>\n        </section>\n        <section class="n7x-owner-workspace n7x-owner-section" data-owner-panel="users" id="n7x-owner-section-users" aria-label="Users" hidden>\n          <div class="n7x-owner-users-panel">\n            <header class="n7x-owner-panel-head">\n              <div><h2>${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0075\u0073\u0065\u0072\u0073")}Users</h2><span data-owner-user-count>Loading accounts\u2026</span></div>\n              <div class="n7x-owner-quick-actions">\n                <button type="button" data-owner-online-only>${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u006f\u006e\u006c\u0069\u006e\u0065")}Online users</button>\n                <button type="button" data-owner-export>${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0064\u006f\u0077\u006e\u006c\u006f\u0061\u0064")}Export page</button>\n                <button type="button" data-owner-global-apps hidden>${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0061\u0070\u0070\u0073")}Manage apps</button><button type="button" data-owner-studyready hidden>${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0061\u0070\u0070\u0073")}StudyReady</button>\n                <button type="button" data-owner-custom-roles hidden>${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0075\u0073\u0065\u0072\u0073")}Custom roles</button>\n                <button type="button" data-owner-ip-bans hidden>${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0073\u0068\u0069\u0065\u006c\u0064")}IP bans</button>\n              </div>\n            </header>\n            <form class="n7x-owner-filters" data-owner-filters>\n              <label class="n7x-owner-search">${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0073\u0065\u0061\u0072\u0063\u0068")}<input type="search" name="search" placeholder="Search name, username, email, or UID" autocomplete="off"></label>\n              <select name="role" aria-label="Filter by role"><option value="all">All roles</option><option value="guest">Guest</option><option value="owner">Owner</option><option value="co_owner">Co-owner</option><option value="admin">Admin</option><option value="manager">Manager</option><option value="developer">Developer</option><option value="moderator">Moderator</option><option value="support">Support</option><option value="tester">Tester</option><option value="contributor">Contributor</option><option value="member">Member</option></select>\n              <select name="subscription" aria-label="Filter by subscription"><option value="all">All subscriptions</option><option value="none">No account</option><option value="free">Free</option><option value="premium">Premium</option><option value="trialing">Trial</option><option value="past_due">Past due</option><option value="canceled">Canceled</option></select>\n              <select name="status" aria-label="Filter by account status"><option value="all">All accounts</option><option value="enabled">Enabled</option><option value="disabled">Disabled</option><option value="online">Online now</option><option value="offline">Offline</option></select>\n            </form>\n            <div class="n7x-owner-table-wrap" data-owner-table aria-live="polite"></div>\n            <footer class="n7x-owner-pagination" data-owner-pagination></footer>\n          </div>\n        </section>\n        <section class="n7x-owner-section" data-owner-panel="activity" id="n7x-owner-section-activity" aria-label="Activity" hidden>\n          <aside class="n7x-owner-activity-panel">\n            <header><div><h2>${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0061\u0063\u0074\u0069\u0076\u0069\u0074\u0079")}Activity logs</h2><span>Security and account events</span></div></header>\n            <div class="n7x-owner-activity-list" data-owner-activity></div>\n          </aside>\n        </section>\n      </main>\n      <aside class="n7x-owner-user-drawer" data-owner-user-drawer hidden></aside>\n      <section class="n7x-owner-confirm" data-owner-confirm hidden></section>\n      <div class="n7x-owner-toasts" data-owner-toasts aria-live="polite"></div>`),
          document.body.appendChild(
            __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d,
          ),
          requestAnimationFrame(() =>
            __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.classList.add(
              "\u0073\u0068\u006f\u0077",
            ),
          ));
        const __f2e5429bdd2ce4cd74b00d064941e11cca8a1f7f3d979f1aa03955b7bbd1e125 =
            __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.querySelector(
              "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u006d\u0065\u0074\u0072\u0069\u0063\u0073\u005d",
            ),
          __ba6eb875a7e89361f0de035163d6ce786417e0fb5b2f10611696ddf4ba3a3d04 =
            __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.querySelector(
              "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0074\u0061\u0062\u006c\u0065\u005d",
            ),
          __bcf751aebeabec4b332852f23d7c45ad6561bc8cb9ea5c88776985439bed6c6b =
            __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.querySelector(
              "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0070\u0061\u0067\u0069\u006e\u0061\u0074\u0069\u006f\u006e\u005d",
            ),
          __05ee36660b117e5e52942669e0936e5d17a4d69ad10ac56aca85f26a4b423b95 =
            __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.querySelector(
              "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0061\u0063\u0074\u0069\u0076\u0069\u0074\u0079\u005d",
            ),
          __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2 =
            __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.querySelector(
              "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0075\u0073\u0065\u0072\u002d\u0064\u0072\u0061\u0077\u0065\u0072\u005d",
            ),
          __ad9ad1be7ee30eec85277bc3e45643b93f1e672f37edcd784ad8a56fd9b91303 =
            __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.querySelector(
              "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u006f\u006e\u0066\u0069\u0072\u006d\u005d",
            ),
          __70b7492fd2afd801b49aa54e66cb092c2877957e19d82afc2d22bf34f272c5f0 = (function (
            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
          ) {
            let __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c = !1,
              __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 = !0,
              __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 = !1,
              __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 = null,
              __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 = 60,
              __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 = null,
              __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e = null;
            const __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22 =
                new Intl.NumberFormat(),
              __0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba =
                new Intl.DateTimeFormat([], {
                  hour: "\u006e\u0075\u006d\u0065\u0072\u0069\u0063",
                  minute: "\u0032\u002d\u0064\u0069\u0067\u0069\u0074",
                }),
              __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e =
                new Intl.DateTimeFormat([], {
                  month: "\u0073\u0068\u006f\u0072\u0074",
                  day: "\u006e\u0075\u006d\u0065\u0072\u0069\u0063",
                  hour: "\u006e\u0075\u006d\u0065\u0072\u0069\u0063",
                  minute: "\u0032\u002d\u0064\u0069\u0067\u0069\u0074",
                }),
              __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265 = (
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
              ) =>
                __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22.format(
                  Number(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f || 0),
                ),
              __fcacda08e2d45e2c799c7376996c1a442e687015e3b968de16e67d8f572af52f = (
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
              ) =>
                __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e.format(
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                );
            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.innerHTML = `<header class="n7x-traffic-heading"><div><span class="n7x-traffic-eyebrow">LIVE ACTIVITY</span><h2>Traffic</h2><p>Requests per minute &middot; all sites on this VPS</p></div><div class="n7x-traffic-ranges" aria-label="Traffic time range">${[
              [60, "\u0031\u0020\u0068\u006f\u0075\u0072"],
              [360, "\u0036\u0020\u0068\u006f\u0075\u0072\u0073"],
              [1440, "\u0032\u0034\u0020\u0068\u006f\u0075\u0072\u0073"],
            ]
              .map(
                ([
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                ]) =>
                  `<button type="button" data-traffic-range="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f}" aria-pressed="${60 === __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f}">${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53}</button>`,
              )
              .join(
                "",
              )}</div></header>\n      <div class="n7x-traffic-stats" data-traffic-stats></div>\n      <div class="n7x-traffic-chart" data-traffic-chart></div>\n      <div class="n7x-traffic-inspector" hidden><input type="range" min="0" max="59" value="59" data-traffic-minute aria-label="Inspect traffic minute"><output data-traffic-detail></output></div>\n      <footer class="n7x-traffic-footer"><span data-traffic-status role="status">Loading traffic...</span><span>Times in ${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(Intl.DateTimeFormat().resolvedOptions().timeZone)}. CDN-only hits and WebSocket stream traffic are excluded. Gaps mean no measurement.</span></footer>`;
            const __b1f802c665f7bebd541821d1b764ada73ffb4fa83e79200016911a5f9dfb544c =
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.querySelector(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u0074\u0072\u0061\u0066\u0066\u0069\u0063\u002d\u0073\u0074\u0061\u0074\u0075\u0073\u005d",
                ),
              __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544 =
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.querySelector(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u0074\u0072\u0061\u0066\u0066\u0069\u0063\u002d\u0063\u0068\u0061\u0072\u0074\u005d",
                ),
              __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d =
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.querySelector(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u0074\u0072\u0061\u0066\u0066\u0069\u0063\u002d\u006d\u0069\u006e\u0075\u0074\u0065\u005d",
                ),
              __2a7a4197494d8323fea0f175ba188cc62025fc3fcf0d33594407f5566e01d6cc =
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.querySelector(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u0074\u0072\u0061\u0066\u0066\u0069\u0063\u002d\u0064\u0065\u0074\u0061\u0069\u006c\u005d",
                );
            let __3c22b3f87a34fd589b28089a6e1fe9407580da47a00ca8a13ab4e306192fb487 = [],
              __34168c7d57200d99fd97b1ec555dbf09aa9a16d1cadcc54b0e6b2db76e926d02 = 1040;
            const __f2e5429bdd2ce4cd74b00d064941e11cca8a1f7f3d979f1aa03955b7bbd1e125 = (
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
            ) =>
              46 +
              (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f /
                Math.max(
                  1,
                  __3c22b3f87a34fd589b28089a6e1fe9407580da47a00ca8a13ab4e306192fb487.length - 1,
                )) *
                (__34168c7d57200d99fd97b1ec555dbf09aa9a16d1cadcc54b0e6b2db76e926d02 - 64);
            let __c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4 = 1;
            const __ba6eb875a7e89361f0de035163d6ce786417e0fb5b2f10611696ddf4ba3a3d04 = (
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
            ) =>
              230 -
              ((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f || 0) /
                __c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4) *
                190;
            let __bcf751aebeabec4b332852f23d7c45ad6561bc8cb9ea5c88776985439bed6c6b = null,
              __05ee36660b117e5e52942669e0936e5d17a4d69ad10ac56aca85f26a4b423b95 = null,
              __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2 = -1,
              __ad9ad1be7ee30eec85277bc3e45643b93f1e672f37edcd784ad8a56fd9b91303 = 0,
              __70b7492fd2afd801b49aa54e66cb092c2877957e19d82afc2d22bf34f272c5f0 = null;
            function __6d22a32ba0cc8ebd5fdef651fde57b13c6fe6f4d25c11937d9f218d9f96ae615(
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
            ) {
              if (!__3c22b3f87a34fd589b28089a6e1fe9407580da47a00ca8a13ab4e306192fb487.length)
                return;
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f = Math.max(
                0,
                Math.min(
                  __3c22b3f87a34fd589b28089a6e1fe9407580da47a00ca8a13ab4e306192fb487.length - 1,
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                ),
              );
              const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = Math.round(
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                ),
                __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
                  __3c22b3f87a34fd589b28089a6e1fe9407580da47a00ca8a13ab4e306192fb487[
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
                  ];
              if (
                ((__195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e =
                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.at),
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 !==
                  __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2)
              ) {
                ((__058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2 =
                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53),
                  (__da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.value =
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53));
                const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f = `${__fcacda08e2d45e2c799c7376996c1a442e687015e3b968de16e67d8f572af52f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.at)} \xb7 ${null === __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.requests ? "\u004e\u006f\u0020\u006d\u0065\u0061\u0073\u0075\u0072\u0065\u006d\u0065\u006e\u0074" : `${__6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.requests)} requests \xb7 ${__6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.errors)} server errors${null != __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.onlinePeak ? ` \xb7 ${__6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.onlinePeak)} people online` : ""}${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.partial ? "\u0020\u00b7\u0020\u0050\u0061\u0072\u0074\u0069\u0061\u006c\u0020\u006d\u0069\u006e\u0075\u0074\u0065" : ""}`}`;
                (__da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.setAttribute(
                  "\u0061\u0072\u0069\u0061\u002d\u0076\u0061\u006c\u0075\u0065\u0074\u0065\u0078\u0074",
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                ),
                  (__2a7a4197494d8323fea0f175ba188cc62025fc3fcf0d33594407f5566e01d6cc.textContent =
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f));
              }
              const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
                  __f2e5429bdd2ce4cd74b00d064941e11cca8a1f7f3d979f1aa03955b7bbd1e125(
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                  ),
                __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 = Math.floor(
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                ),
                __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 = Math.ceil(
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                ),
                __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 =
                  __3c22b3f87a34fd589b28089a6e1fe9407580da47a00ca8a13ab4e306192fb487[
                    __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477
                  ].requests,
                __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 =
                  __3c22b3f87a34fd589b28089a6e1fe9407580da47a00ca8a13ab4e306192fb487[
                    __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766
                  ].requests;
              (__bcf751aebeabec4b332852f23d7c45ad6561bc8cb9ea5c88776985439bed6c6b?.setAttribute(
                "\u0078\u0031",
                __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
              ),
                __bcf751aebeabec4b332852f23d7c45ad6561bc8cb9ea5c88776985439bed6c6b?.setAttribute(
                  "\u0078\u0032",
                  __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
                ),
                __05ee36660b117e5e52942669e0936e5d17a4d69ad10ac56aca85f26a4b423b95?.setAttribute(
                  "\u0063\u0078",
                  __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
                ),
                __05ee36660b117e5e52942669e0936e5d17a4d69ad10ac56aca85f26a4b423b95?.setAttribute(
                  "\u0063\u0079",
                  __ba6eb875a7e89361f0de035163d6ce786417e0fb5b2f10611696ddf4ba3a3d04(
                    __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 +
                      (__bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 -
                        __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7) *
                        (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f -
                          __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477),
                  ),
                ),
                __05ee36660b117e5e52942669e0936e5d17a4d69ad10ac56aca85f26a4b423b95?.setAttribute(
                  "\u006f\u0070\u0061\u0063\u0069\u0074\u0079",
                  null === __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 ||
                    null === __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061
                    ? "\u0030"
                    : "\u0031",
                ));
            }
            function __fbc53bfbe963d655ef9e75540634d95a0e7633a0eb7492033434599de806060e() {
              if (
                null === __70b7492fd2afd801b49aa54e66cb092c2877957e19d82afc2d22bf34f272c5f0 ||
                !__78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 ||
                !__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c ||
                !__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 ||
                __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766
              )
                return;
              const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
                __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.getBoundingClientRect();
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.width &&
                __6d22a32ba0cc8ebd5fdef651fde57b13c6fe6f4d25c11937d9f218d9f96ae615(
                  ((((__70b7492fd2afd801b49aa54e66cb092c2877957e19d82afc2d22bf34f272c5f0 -
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.left) /
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.width) *
                    __34168c7d57200d99fd97b1ec555dbf09aa9a16d1cadcc54b0e6b2db76e926d02 -
                    46) /
                    (__34168c7d57200d99fd97b1ec555dbf09aa9a16d1cadcc54b0e6b2db76e926d02 - 64)) *
                    (__3c22b3f87a34fd589b28089a6e1fe9407580da47a00ca8a13ab4e306192fb487.length - 1),
                );
            }
            function __39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd() {
              (cancelAnimationFrame(
                __ad9ad1be7ee30eec85277bc3e45643b93f1e672f37edcd784ad8a56fd9b91303,
              ),
                (__ad9ad1be7ee30eec85277bc3e45643b93f1e672f37edcd784ad8a56fd9b91303 = 0),
                (__70b7492fd2afd801b49aa54e66cb092c2877957e19d82afc2d22bf34f272c5f0 = null));
            }
            function __0c823f772d95246c7bf82dc76d301b8902c775f0af8b8524cc7e4f76694c2a56() {
              __34168c7d57200d99fd97b1ec555dbf09aa9a16d1cadcc54b0e6b2db76e926d02 = Math.max(
                300,
                __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.clientWidth,
              );
              const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
                  __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106.points.findIndex(
                    (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
                      null !==
                      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.requests,
                  ),
                __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
                  (__3c22b3f87a34fd589b28089a6e1fe9407580da47a00ca8a13ab4e306192fb487 =
                    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 < 0
                      ? __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106.points
                      : __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106.points.slice(
                          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
                        )),
                __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 =
                  __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106.totals,
                __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 =
                  __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106.peak;
              __c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4 = Math.max(
                1,
                Math.ceil(
                  1.15 *
                    (__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766?.requests ||
                      1),
                ),
              );
              const __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 = [
                [
                  "\u0052\u0065\u0071\u0075\u0065\u0073\u0074\u0073",
                  __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265(
                    __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.requests,
                  ),
                  "\u0049\u006e\u0020\u0073\u0065\u006c\u0065\u0063\u0074\u0065\u0064\u0020\u0077\u0069\u006e\u0064\u006f\u0077",
                ],
                [
                  "\u0050\u0065\u0061\u006b\u0020\u002f\u0020\u006d\u0069\u006e",
                  __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265(
                    __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766?.requests,
                  ),
                  __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766
                    ? __fcacda08e2d45e2c799c7376996c1a442e687015e3b968de16e67d8f572af52f(
                        __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.at,
                      ) +
                      (__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.partial
                        ? "\u0020\u00b7\u0020\u0070\u0061\u0072\u0074\u0069\u0061\u006c"
                        : "")
                    : "\u004e\u006f\u0020\u006d\u0065\u0061\u0073\u0075\u0072\u0065\u006d\u0065\u006e\u0074",
                ],
                [
                  "\u0050\u0065\u0061\u006b\u0020\u006f\u006e\u006c\u0069\u006e\u0065",
                  __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106.peakOnline
                    ? __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265(
                        __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106
                          .peakOnline.count,
                      )
                    : "\u2014",
                  __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106.peakOnline
                    ? __fcacda08e2d45e2c799c7376996c1a442e687015e3b968de16e67d8f572af52f(
                        __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106
                          .peakOnline.at,
                      ) + "\u0020\u00b7\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0073\u0020\u0061\u006e\u0064\u0020\u0067\u0075\u0065\u0073\u0074\u0073"
                    : "\u0043\u006f\u006c\u006c\u0065\u0063\u0074\u0069\u006e\u0067\u0020\u006f\u006e\u006c\u0069\u006e\u0065\u0020\u0068\u0069\u0073\u0074\u006f\u0072\u0079",
                ],
                [
                  "\u0053\u0065\u0072\u0076\u0065\u0072\u0020\u0065\u0072\u0072\u006f\u0072\u0073",
                  __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265(
                    __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.errors,
                  ),
                  `${__6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265(__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.aborted)} interrupted requests`,
                ],
                [
                  "\u0041\u0076\u0067\u002e\u0020\u0072\u0065\u0073\u0070\u006f\u006e\u0073\u0065",
                  null ===
                  __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.averageMs
                    ? "\u2014"
                    : __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265(
                        __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.averageMs,
                      ) + "\u0020\u006d\u0073",
                  "\u0043\u006f\u006d\u0070\u006c\u0065\u0074\u0065\u0064\u0020\u0048\u0054\u0054\u0050\u0020\u0072\u0065\u0073\u0070\u006f\u006e\u0073\u0065\u0073",
                ],
              ];
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.querySelector(
                "\u005b\u0064\u0061\u0074\u0061\u002d\u0074\u0072\u0061\u0066\u0066\u0069\u0063\u002d\u0073\u0074\u0061\u0074\u0073\u005d",
              ).innerHTML = __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7
                .map(
                  ([
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
                    __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
                  ]) =>
                    `<div><span>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53)}</span><strong>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708)}</strong><small>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c)}</small></div>`,
                )
                .join("");
              let __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 = "",
                __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22 = "",
                __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e = [];
              const __2a7a4197494d8323fea0f175ba188cc62025fc3fcf0d33594407f5566e01d6cc = () => {
                if (!__6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e.length)
                  return;
                const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
                  __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e
                    .map(
                      (
                        [
                          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                        ],
                        __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
                      ) =>
                        `${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 ? "\u004c" : "\u004d"}${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.toFixed(2)} ${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.toFixed(2)}`,
                    )
                    .join("\u0020");
                ((__bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 +=
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f + "\u0020"),
                  (__d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22 += `${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f} L${__6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e.at(-1)[0]} 230 L${__6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e[0][0]} 230 Z `),
                  (__6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e = []));
              };
              (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.forEach(
                (
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                ) => {
                  null ===
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.requests
                    ? __2a7a4197494d8323fea0f175ba188cc62025fc3fcf0d33594407f5566e01d6cc()
                    : __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e.push([
                        __f2e5429bdd2ce4cd74b00d064941e11cca8a1f7f3d979f1aa03955b7bbd1e125(
                          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                        ),
                        __ba6eb875a7e89361f0de035163d6ce786417e0fb5b2f10611696ddf4ba3a3d04(
                          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.requests,
                        ),
                      ]);
                },
              ),
                __2a7a4197494d8323fea0f175ba188cc62025fc3fcf0d33594407f5566e01d6cc());
              const __ad9ad1be7ee30eec85277bc3e45643b93f1e672f37edcd784ad8a56fd9b91303 = [0, 0.5, 1]
                  .map(
                    (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
                      `<line x1="46" x2="${__34168c7d57200d99fd97b1ec555dbf09aa9a16d1cadcc54b0e6b2db76e926d02 - 18}" y1="${230 - 190 * __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f}" y2="${230 - 190 * __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f}" class="n7x-traffic-grid"/><text x="36" y="${234 - 190 * __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f}" text-anchor="end">${__6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265(Math.round(__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4 * __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f))}</text>`,
                  )
                  .join(""),
                __70b7492fd2afd801b49aa54e66cb092c2877957e19d82afc2d22bf34f272c5f0 = [
                  0,
                  Math.floor(
                    (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.length -
                      1) /
                      2,
                  ),
                  __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.length - 1,
                ]
                  .map((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) => {
                    return `<text x="${__f2e5429bdd2ce4cd74b00d064941e11cca8a1f7f3d979f1aa03955b7bbd1e125(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53)}" y="260" text-anchor="${0 === __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 ? "\u0073\u0074\u0061\u0072\u0074" : __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 === __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.length - 1 ? "\u0065\u006e\u0064" : "\u006d\u0069\u0064\u0064\u006c\u0065"}">${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(
                      ((__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
                        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c[
                          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
                        ].at),
                      __0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba.format(
                        __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
                      )),
                    )}</text>`;
                    var __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708;
                  })
                  .join("");
              ((__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.innerHTML = `<svg viewBox="0 0 ${__34168c7d57200d99fd97b1ec555dbf09aa9a16d1cadcc54b0e6b2db76e926d02} 275" preserveAspectRatio="none" role="img" aria-label="Requests per minute. Peak ${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265(__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766?.requests))}${__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 ? "\u0020\u0061\u0074\u0020" + __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__fcacda08e2d45e2c799c7376996c1a442e687015e3b968de16e67d8f572af52f(__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.at)) : ""}. Use the slider below to inspect a minute.">${__ad9ad1be7ee30eec85277bc3e45643b93f1e672f37edcd784ad8a56fd9b91303}<path d="${__d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22}" class="n7x-traffic-area"/><path d="${__bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061}" class="n7x-traffic-line"/>${__70b7492fd2afd801b49aa54e66cb092c2877957e19d82afc2d22bf34f272c5f0}<line data-traffic-cursor y1="30" y2="230" class="n7x-traffic-cursor"/><circle data-traffic-dot r="4" class="n7x-traffic-dot"/></svg>`),
                (__bcf751aebeabec4b332852f23d7c45ad6561bc8cb9ea5c88776985439bed6c6b =
                  __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.querySelector(
                    "\u005b\u0064\u0061\u0074\u0061\u002d\u0074\u0072\u0061\u0066\u0066\u0069\u0063\u002d\u0063\u0075\u0072\u0073\u006f\u0072\u005d",
                  )),
                (__05ee36660b117e5e52942669e0936e5d17a4d69ad10ac56aca85f26a4b423b95 =
                  __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.querySelector(
                    "\u005b\u0064\u0061\u0074\u0061\u002d\u0074\u0072\u0061\u0066\u0066\u0069\u0063\u002d\u0064\u006f\u0074\u005d",
                  )),
                (__058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2 = -1),
                (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.querySelector(
                  "\u002e\u006e\u0037\u0078\u002d\u0074\u0072\u0061\u0066\u0066\u0069\u0063\u002d\u0069\u006e\u0073\u0070\u0065\u0063\u0074\u006f\u0072",
                ).hidden = !1),
                (__da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.max =
                  __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.length - 1));
              let __39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd =
                null === __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e
                  ? -1
                  : __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.findIndex(
                      (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
                        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.at ===
                        __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e,
                    );
              (__39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd < 0 &&
                (__39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd =
                  __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766
                    ? __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.findIndex(
                        (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
                          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.at ===
                          __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.at,
                      )
                    : __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.length -
                      1),
                __6d22a32ba0cc8ebd5fdef651fde57b13c6fe6f4d25c11937d9f218d9f96ae615(
                  __39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd,
                ),
                __fbc53bfbe963d655ef9e75540634d95a0e7633a0eb7492033434599de806060e(),
                (__b1f802c665f7bebd541821d1b764ada73ffb4fa83e79200016911a5f9dfb544c.textContent = `Recorded from ${__fcacda08e2d45e2c799c7376996c1a442e687015e3b968de16e67d8f572af52f(__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c[0].at)} \xb7 updated ${new Date(__78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106.generatedAt).toLocaleTimeString()} \xb7 refreshes every 10s \xb7 current minute incomplete`),
                (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.dataset.trafficState =
                  "\u0072\u0065\u0061\u0064\u0079"));
            }
            async function __9f14cf239d210677b549719b00bd34c2dd1d76e12d1d8883e1924f06c38a9efd() {
              if (
                !__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c ||
                !__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 ||
                __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 ||
                document.hidden ||
                __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7
              )
                return;
              const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
                new AbortController();
              __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 =
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f;
              const __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e = setTimeout(
                () => __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.abort(),
                12e3,
              );
              try {
                const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
                  await __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708(
                    `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/traffic?minutes=${__bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061}`,
                    {
                      signal:
                        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.signal,
                    },
                  );
                if (
                  __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 ||
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.signal
                    .aborted ||
                  !__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c
                )
                  return;
                if (
                  !Array.isArray(
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.points,
                  ) ||
                  !__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.points
                    .length ||
                  !__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.totals
                )
                  throw new Error("\u0049\u006e\u0076\u0061\u006c\u0069\u0064\u0020\u0074\u0072\u0061\u0066\u0066\u0069\u0063\u0020\u0072\u0065\u0073\u0070\u006f\u006e\u0073\u0065");
                ((__78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 =
                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53),
                  __0c823f772d95246c7bf82dc76d301b8902c775f0af8b8524cc7e4f76694c2a56());
              } catch {
                !__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 &&
                  __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c &&
                  __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 ===
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f &&
                  ((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.dataset.trafficState =
                    "\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065"),
                  (__b1f802c665f7bebd541821d1b764ada73ffb4fa83e79200016911a5f9dfb544c.textContent =
                    __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106
                      ? `Update unavailable. Showing data from ${__fcacda08e2d45e2c799c7376996c1a442e687015e3b968de16e67d8f572af52f(__78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106.generatedAt)}; retrying automatically.`
                      : "\u0054\u0072\u0061\u0066\u0066\u0069\u0063\u0020\u0069\u0073\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u002e\u0020\u0052\u0065\u0074\u0072\u0079\u0069\u006e\u0067\u0020\u0061\u0075\u0074\u006f\u006d\u0061\u0074\u0069\u0063\u0061\u006c\u006c\u0079\u002e"));
              } finally {
                (clearTimeout(__195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e),
                  __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 ===
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f &&
                    (__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 = null));
              }
            }
            (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.addEventListener(
              "\u0063\u006c\u0069\u0063\u006b",
              (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => {
                const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.target.closest(
                    "\u005b\u0064\u0061\u0074\u0061\u002d\u0074\u0072\u0061\u0066\u0066\u0069\u0063\u002d\u0072\u0061\u006e\u0067\u0065\u005d",
                  );
                __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 &&
                  (__39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd(),
                  (__bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 = Number(
                    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.dataset
                      .trafficRange,
                  )),
                  (__195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e = null),
                  __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7?.abort(),
                  (__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 = null),
                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
                    .querySelectorAll("\u005b\u0064\u0061\u0074\u0061\u002d\u0074\u0072\u0061\u0066\u0066\u0069\u0063\u002d\u0072\u0061\u006e\u0067\u0065\u005d")
                    .forEach((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
                      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.setAttribute(
                        "\u0061\u0072\u0069\u0061\u002d\u0070\u0072\u0065\u0073\u0073\u0065\u0064",
                        String(
                          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f ===
                            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
                        ),
                      ),
                    ),
                  (__b1f802c665f7bebd541821d1b764ada73ffb4fa83e79200016911a5f9dfb544c.textContent =
                    "\u0055\u0070\u0064\u0061\u0074\u0069\u006e\u0067\u0020\u0074\u0069\u006d\u0065\u0020\u0072\u0061\u006e\u0067\u0065\u002e\u002e\u002e"),
                  __9f14cf239d210677b549719b00bd34c2dd1d76e12d1d8883e1924f06c38a9efd());
              },
            ),
              __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.addEventListener(
                "\u0070\u006f\u0069\u006e\u0074\u0065\u0072\u006d\u006f\u0076\u0065",
                (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => {
                  ((__70b7492fd2afd801b49aa54e66cb092c2877957e19d82afc2d22bf34f272c5f0 =
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.clientX),
                    __ad9ad1be7ee30eec85277bc3e45643b93f1e672f37edcd784ad8a56fd9b91303 ||
                      (__ad9ad1be7ee30eec85277bc3e45643b93f1e672f37edcd784ad8a56fd9b91303 =
                        requestAnimationFrame(() => {
                          ((__ad9ad1be7ee30eec85277bc3e45643b93f1e672f37edcd784ad8a56fd9b91303 = 0),
                            __fbc53bfbe963d655ef9e75540634d95a0e7633a0eb7492033434599de806060e());
                        })));
                },
              ),
              __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.addEventListener(
                "\u0070\u006f\u0069\u006e\u0074\u0065\u0072\u006c\u0065\u0061\u0076\u0065",
                __39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd,
              ),
              __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.addEventListener(
                "\u0070\u006f\u0069\u006e\u0074\u0065\u0072\u0063\u0061\u006e\u0063\u0065\u006c",
                __39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd,
              ),
              __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.addEventListener(
                "\u0069\u006e\u0070\u0075\u0074",
                () => {
                  (__39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd(),
                    __6d22a32ba0cc8ebd5fdef651fde57b13c6fe6f4d25c11937d9f218d9f96ae615(
                      Number(
                        __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.value,
                      ),
                    ));
                },
              ));
            const __cf1b93ea463342e3a13a0a23bc9901831ecc2986044c6e1893501c3c2d62081f = setInterval(
                () => {
                  __9f14cf239d210677b549719b00bd34c2dd1d76e12d1d8883e1924f06c38a9efd();
                },
                1e4,
              ),
              __f5c72256354a3168063a3100e77d44f1c07609b9a22894f6224e07aac3980975 =
                new ResizeObserver(() => {
                  __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 &&
                    __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c &&
                    __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 &&
                    __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.clientWidth >
                      0 &&
                    Math.abs(
                      Math.max(
                        300,
                        __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.clientWidth,
                      ) - __34168c7d57200d99fd97b1ec555dbf09aa9a16d1cadcc54b0e6b2db76e926d02,
                    ) > 1 &&
                    __0c823f772d95246c7bf82dc76d301b8902c775f0af8b8524cc7e4f76694c2a56();
                });
            return (
              __f5c72256354a3168063a3100e77d44f1c07609b9a22894f6224e07aac3980975.observe(
                __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544,
              ),
              {
                enable(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) {
                  ((__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f),
                    (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.hidden =
                      !__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f),
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f
                      ? __9f14cf239d210677b549719b00bd34c2dd1d76e12d1d8883e1924f06c38a9efd()
                      : (__39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd(),
                        __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7?.abort(),
                        (__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 = null),
                        (__78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 = null),
                        __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.replaceChildren(),
                        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
                          .querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0074\u0072\u0061\u0066\u0066\u0069\u0063\u002d\u0073\u0074\u0061\u0074\u0073\u005d")
                          .replaceChildren(),
                        (__2a7a4197494d8323fea0f175ba188cc62025fc3fcf0d33594407f5566e01d6cc.textContent =
                          "")));
                },
                activate(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) {
                  ((__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 =
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f),
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f
                      ? __9f14cf239d210677b549719b00bd34c2dd1d76e12d1d8883e1924f06c38a9efd()
                      : (__39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd(),
                        __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7?.abort(),
                        (__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 =
                          null)));
                },
                destroy() {
                  ((__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 = !0),
                    __39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd(),
                    clearInterval(
                      __cf1b93ea463342e3a13a0a23bc9901831ecc2986044c6e1893501c3c2d62081f,
                    ),
                    __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7?.abort(),
                    __f5c72256354a3168063a3100e77d44f1c07609b9a22894f6224e07aac3980975.disconnect());
                },
              }
            );
          })(
            __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.querySelector(
              "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0074\u0072\u0061\u0066\u0066\u0069\u0063\u005d",
            ),
            __0c823f772d95246c7bf82dc76d301b8902c775f0af8b8524cc7e4f76694c2a56,
          );
        let __6d22a32ba0cc8ebd5fdef651fde57b13c6fe6f4d25c11937d9f218d9f96ae615 = "\u006f\u0076\u0065\u0072\u0076\u0069\u0065\u0077";
        function __fbc53bfbe963d655ef9e75540634d95a0e7633a0eb7492033434599de806060e(
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
        ) {
          ["\u006f\u0076\u0065\u0072\u0076\u0069\u0065\u0077", "\u0075\u0073\u0065\u0072\u0073", "\u0073\u0065\u0072\u0076\u0069\u0063\u0065\u0073", "\u0061\u0063\u0074\u0069\u0076\u0069\u0074\u0079"].includes(
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
          ) &&
            ((__6d22a32ba0cc8ebd5fdef651fde57b13c6fe6f4d25c11937d9f218d9f96ae615 =
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f),
            __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d
              .querySelectorAll("\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0070\u0061\u006e\u0065\u006c\u005d")
              .forEach(
                (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) =>
                  (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.hidden =
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.dataset
                      .ownerPanel !==
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f),
              ),
            __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d
              .querySelectorAll("\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0073\u0065\u0063\u0074\u0069\u006f\u006e\u005d")
              .forEach((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) =>
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.setAttribute(
                  "\u0061\u0072\u0069\u0061\u002d\u0070\u0072\u0065\u0073\u0073\u0065\u0064",
                  String(
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.dataset
                      .ownerSection ===
                      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                  ),
                ),
              ),
            __70b7492fd2afd801b49aa54e66cb092c2877957e19d82afc2d22bf34f272c5f0.activate(
              "\u006f\u0076\u0065\u0072\u0076\u0069\u0065\u0077" === __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
            ));
        }
        function __39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd(
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = "\u0073\u0075\u0063\u0063\u0065\u0073\u0073",
        ) {
          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708?.(
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
          );
          const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
            document.createElement("\u0064\u0069\u0076");
          ((__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.className = `n7x-owner-toast n7x-owner-toast-${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53}`),
            (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.textContent =
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f),
            __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d
              .querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0074\u006f\u0061\u0073\u0074\u0073\u005d")
              .appendChild(__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c),
            requestAnimationFrame(() =>
              __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.classList.add(
                "\u0073\u0068\u006f\u0077",
              ),
            ),
            setTimeout(() => {
              (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.classList.remove(
                "\u0073\u0068\u006f\u0077",
              ),
                setTimeout(
                  () => __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.remove(),
                  180,
                ));
            }, 3200));
        }
        async function __0c823f772d95246c7bf82dc76d301b8902c775f0af8b8524cc7e4f76694c2a56(
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = {},
        ) {
          const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
            await __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53();
          if (!__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c)
            throw new Error("\u0059\u006f\u0075\u0072\u0020\u0073\u0074\u0061\u0066\u0066\u0020\u0073\u0065\u0073\u0073\u0069\u006f\u006e\u0020\u0068\u0061\u0073\u0020\u0065\u0078\u0070\u0069\u0072\u0065\u0064\u002e\u0020\u0053\u0069\u0067\u006e\u0020\u0069\u006e\u0020\u0061\u0067\u0061\u0069\u006e\u002e");
          const __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 = await fetch(
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
              {
                ...__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
                headers: {
                  Accept: "\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u006a\u0073\u006f\u006e",
                  Authorization: `Bearer ${__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c}`,
                  ...(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.body
                    ? {
                        "\u0043\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0054\u0079\u0070\u0065": "\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u006a\u0073\u006f\u006e",
                      }
                    : {}),
                  ...(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.headers ||
                    {}),
                },
                cache: "\u006e\u006f\u002d\u0073\u0074\u006f\u0072\u0065",
              },
            ),
            __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 =
              await __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477
                .json()
                .catch(() => ({}));
          if (!__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.ok) {
            const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f = new Error(
              __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.error ||
                "\u0054\u0068\u0065\u0020\u006f\u0077\u006e\u0065\u0072\u0020\u0072\u0065\u0071\u0075\u0065\u0073\u0074\u0020\u0066\u0061\u0069\u006c\u0065\u0064\u002e",
            );
            throw (
              (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.status =
                __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.status),
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f
            );
          }
          return __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766;
        }
        (__0c823f772d95246c7bf82dc76d301b8902c775f0af8b8524cc7e4f76694c2a56(
          "\u002f\u0061\u0070\u0069\u002f\u0070\u0072\u0069\u0076\u0061\u0074\u0065\u002d\u0072\u0065\u006d\u006f\u0074\u0065\u002f\u0061\u0063\u0063\u0065\u0073\u0073",
        )
          .then((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => {
            if (
              !__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.enabled ||
              !__da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.isConnected
            )
              return;
            const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
              document.createElement("\u0062\u0075\u0074\u0074\u006f\u006e");
            ((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.type = "\u0062\u0075\u0074\u0074\u006f\u006e"),
              (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.textContent =
                "\u0052\u0065\u006d\u006f\u0074\u0065\u0020\u0064\u0065\u0073\u006b\u0074\u006f\u0070"),
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.addEventListener(
                "\u0063\u006c\u0069\u0063\u006b",
                async () => {
                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.disabled = !0;
                  try {
                    (await __0c823f772d95246c7bf82dc76d301b8902c775f0af8b8524cc7e4f76694c2a56(
                      "\u002f\u0061\u0070\u0069\u002f\u0070\u0072\u0069\u0076\u0061\u0074\u0065\u002d\u0072\u0065\u006d\u006f\u0074\u0065\u002f\u0073\u0065\u0073\u0073\u0069\u006f\u006e",
                      {
                        method: "\u0050\u004f\u0053\u0054",
                      },
                    ),
                      window.location.assign("\u002f\u0061\u0070\u0070\u0073\u002f\u0072\u0065\u006d\u006f\u0074\u0065\u002f"));
                  } catch {
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.textContent =
                      "\u0052\u0065\u006d\u006f\u0074\u0065\u0020\u0061\u0063\u0063\u0065\u0073\u0073\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065";
                  } finally {
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.disabled =
                      !1;
                  }
                },
              ),
              __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d
                .querySelector("\u002e\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0068\u0065\u0061\u0064\u0065\u0072\u002d\u0061\u0063\u0074\u0069\u006f\u006e\u0073")
                .prepend(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53));
          })
          .catch(() => {}),
          __0c823f772d95246c7bf82dc76d301b8902c775f0af8b8524cc7e4f76694c2a56("\u002f\u0061\u0070\u0069\u002f\u006e\u0079\u0078\u0063\u006c\u006f\u0075\u0064\u002f\u0061\u0063\u0063\u0065\u0073\u0073")
            .then((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => {
              if (
                !__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.allowed ||
                !__da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.isConnected
              )
                return;
              const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
                document.createElement("\u0062\u0075\u0074\u0074\u006f\u006e");
              ((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.type = "\u0062\u0075\u0074\u0074\u006f\u006e"),
                (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.textContent =
                  "\u004e\u0037\u0058\u0043\u004c\u0030\u0055\u0044"),
                (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.dataset.nyxcloudAccess =
                  "\u006f\u0077\u006e\u0065\u0072"),
                (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.title =
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.online
                    ? "\u004f\u0070\u0065\u006e\u0020\u0079\u006f\u0075\u0072\u0020\u0056\u004d"
                    : "\u004f\u0070\u0065\u006e\u0020\u004e\u0037\u0058\u0043\u004c\u0030\u0055\u0044\u0020\u0028\u0056\u004d\u0020\u0063\u0075\u0072\u0072\u0065\u006e\u0074\u006c\u0079\u0020\u006f\u0066\u0066\u006c\u0069\u006e\u0065\u0029"),
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.addEventListener(
                  "\u0063\u006c\u0069\u0063\u006b",
                  async () => {
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.disabled =
                      !0;
                    try {
                      (await __0c823f772d95246c7bf82dc76d301b8902c775f0af8b8524cc7e4f76694c2a56(
                        "\u002f\u0061\u0070\u0069\u002f\u006e\u0079\u0078\u0063\u006c\u006f\u0075\u0064\u002f\u0073\u0065\u0073\u0073\u0069\u006f\u006e",
                        {
                          method: "\u0050\u004f\u0053\u0054",
                        },
                      ),
                        window.location.assign("\u002f\u0061\u0070\u0070\u0073\u002f\u006e\u0079\u0078\u0063\u006c\u006f\u0075\u0064\u002f"));
                    } catch {
                      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.textContent =
                        "\u004e\u0037\u0058\u0043\u004c\u0030\u0055\u0044\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065";
                    } finally {
                      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.disabled =
                        !1;
                    }
                  },
                ),
                __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d
                  .querySelector("\u002e\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0068\u0065\u0061\u0064\u0065\u0072\u002d\u0061\u0063\u0074\u0069\u006f\u006e\u0073")
                  .append(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53));
            })
            .catch(() => {}));
        const __9f14cf239d210677b549719b00bd34c2dd1d76e12d1d8883e1924f06c38a9efd =
          __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.querySelector(
            "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0061\u0069\u002d\u0073\u0074\u0061\u0074\u0075\u0073\u005d",
          );
        function __cf1b93ea463342e3a13a0a23bc9901831ecc2986044c6e1893501c3c2d62081f(
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
        ) {
          const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
              document.createElement("\u0064\u0065\u0074\u0061\u0069\u006c\u0073"),
            __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 =
              document.createElement("\u0073\u0075\u006d\u006d\u0061\u0072\u0079"),
            __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 =
              document.createElement("\u0064\u0069\u0076"),
            __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 =
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.querySelector(
                "\u0073\u0074\u0072\u006f\u006e\u0067",
              );
          for (
            __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7
              ? __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.append(
                  __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7,
                )
              : (__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.textContent =
                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708),
              __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.className =
                "\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0073\u0074\u0061\u0074\u0075\u0073\u002d\u0062\u006f\u0064\u0079";
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.firstChild;

          )
            __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.append(
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.firstChild,
            );
          __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.append(
            __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
            __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766,
          );
          try {
            __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.open =
              "\u0063\u006f\u006c\u006c\u0061\u0070\u0073\u0065\u0064" !==
              localStorage.getItem(
                "\u006e\u0079\u0078\u002e\u006f\u0077\u006e\u0065\u0072\u002e\u0073\u0074\u0061\u0074\u0075\u0073\u002e" +
                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
              );
          } catch {
            __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.open = !0;
          }
          (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.addEventListener(
            "\u0074\u006f\u0067\u0067\u006c\u0065",
            () => {
              try {
                localStorage.setItem(
                  "\u006e\u0079\u0078\u002e\u006f\u0077\u006e\u0065\u0072\u002e\u0073\u0074\u0061\u0074\u0075\u0073\u002e" +
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                  __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.open
                    ? "\u0065\u0078\u0070\u0061\u006e\u0064\u0065\u0064"
                    : "\u0063\u006f\u006c\u006c\u0061\u0070\u0073\u0065\u0064",
                );
              } catch {}
            },
          ),
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.replaceChildren(
              __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
            ));
        }
        let __f5c72256354a3168063a3100e77d44f1c07609b9a22894f6224e07aac3980975 = !1;
        async function __d162db62d66e0854e2ec8b53621eb159fceb6492dae007dfbd8fe9064c3b5c32() {
          if (
            __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.isConnected &&
            __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.access?.founder &&
            !__f5c72256354a3168063a3100e77d44f1c07609b9a22894f6224e07aac3980975
          ) {
            __f5c72256354a3168063a3100e77d44f1c07609b9a22894f6224e07aac3980975 = !0;
            try {
              const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
                await __0c823f772d95246c7bf82dc76d301b8902c775f0af8b8524cc7e4f76694c2a56(
                  "\u002f\u0061\u0070\u0069\u002f\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0061\u0073\u0068\u0062\u006f\u0061\u0072\u0064\u002f\u0061\u0069\u002d\u0073\u0074\u0061\u0074\u0075\u0073",
                );
              if (
                !__da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.isConnected ||
                !__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.access?.founder
              )
                return;
              __9f14cf239d210677b549719b00bd34c2dd1d76e12d1d8883e1924f06c38a9efd.hidden = !1;
              const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = (
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                ) =>
                  Number(
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                  ).toFixed(2),
                __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c = {
                  ok: "\u004f\u0070\u0065\u006e\u0052\u006f\u0075\u0074\u0065\u0072\u0020\u0062\u0061\u006c\u0061\u006e\u0063\u0065",
                  low: "\u004c\u006f\u0077\u0020\u004f\u0070\u0065\u006e\u0052\u006f\u0075\u0074\u0065\u0072\u0020\u0061\u006c\u006c\u006f\u0077\u0061\u006e\u0063\u0065",
                  paused: "\u0053\u0068\u0061\u0072\u0065\u0064\u0020\u0041\u0049\u0020\u0062\u0061\u006c\u0061\u006e\u0063\u0065\u0020\u0063\u0075\u0074\u006f\u0066\u0066\u0020\u0072\u0065\u0061\u0063\u0068\u0065\u0064",
                  unknown: "\u004f\u0070\u0065\u006e\u0052\u006f\u0075\u0074\u0065\u0072\u0020\u0062\u0061\u006c\u0061\u006e\u0063\u0065\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0063\u0068\u0065\u0063\u006b\u0065\u0064",
                },
                __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 =
                  "\u006c\u006f\u0077" ===
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.state ||
                  "\u0070\u0061\u0075\u0073\u0065\u0064" ===
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.state;
              ((__9f14cf239d210677b549719b00bd34c2dd1d76e12d1d8883e1924f06c38a9efd.dataset.aiState =
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.state),
                (__9f14cf239d210677b549719b00bd34c2dd1d76e12d1d8883e1924f06c38a9efd.style.borderColor =
                  __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477
                    ? "\u0023\u0064\u0039\u0061\u0064\u0035\u0035"
                    : ""),
                (__9f14cf239d210677b549719b00bd34c2dd1d76e12d1d8883e1924f06c38a9efd.innerHTML = `<div><strong>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c[__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.state] || __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.unknown)}${"\u0075\u006e\u006b\u006e\u006f\u0077\u006e" !== __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.state ? ` <span>$${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.balanceUsd)}</span>` : ""}</strong><p>${"\u0075\u006e\u006b\u006e\u006f\u0077\u006e" === __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.state ? "\u0042\u0061\u006c\u0061\u006e\u0063\u0065\u0020\u0069\u0073\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u002e\u0020\u0053\u0068\u0061\u0072\u0065\u0064\u0020\u0041\u0049\u0020\u0070\u0061\u0075\u0073\u0065\u0073\u0020\u0069\u0066\u0020\u0069\u0074\u0073\u0020\u0062\u0061\u006c\u0061\u006e\u0063\u0065\u0020\u0063\u0068\u0065\u0063\u006b\u0020\u0066\u0061\u0069\u006c\u0073\u002e" : `Account balance: $${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.balanceUsd)} &middot; N7X key allowance: ${null === __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.keyRemainingUsd ? "\u004e\u006f\u0020\u006b\u0065\u0079\u0020\u006c\u0069\u006d\u0069\u0074" : `$${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.keyRemainingUsd)}`} &middot; Daily site cap: $${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.dailyCapUsd)}`}</p>${__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 ? `<p>${"\u0070\u0061\u0075\u0073\u0065\u0064" === __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.state ? "\u0054\u0068\u0065\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0062\u0061\u006c\u0061\u006e\u0063\u0065\u0020\u006f\u0072\u0020\u006b\u0065\u0079\u0020\u0061\u006c\u006c\u006f\u0077\u0061\u006e\u0063\u0065\u0020\u0068\u0061\u0073\u0020\u0072\u0065\u0061\u0063\u0068\u0065\u0064\u0020\u0074\u0068\u0065\u0020\u0024\u0030\u002e\u0031\u0030\u0020\u0063\u0075\u0074\u006f\u0066\u0066\u002e" : "\u0054\u0068\u0065\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0062\u0061\u006c\u0061\u006e\u0063\u0065\u0020\u006f\u0072\u0020\u004e\u0037\u0058\u0020\u006b\u0065\u0079\u0020\u0061\u006c\u006c\u006f\u0077\u0061\u006e\u0063\u0065\u0020\u0069\u0073\u0020\u0062\u0065\u006c\u006f\u0077\u0020\u0024\u0030\u002e\u0035\u0030\u002e"} Add credits or review the key limit in OpenRouter. Daily usage limits still apply.</p>` : ""}<small>Checked ${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.checkedAt))}</small><p><a href="/api#owner" target="_blank" rel="noopener">Manage AI API keys and token balances</a></p></div>`));
            } catch {
              __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.isConnected &&
                __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.access
                  ?.founder &&
                ((__9f14cf239d210677b549719b00bd34c2dd1d76e12d1d8883e1924f06c38a9efd.hidden = !1),
                (__9f14cf239d210677b549719b00bd34c2dd1d76e12d1d8883e1924f06c38a9efd.dataset.aiState =
                  "\u0075\u006e\u006b\u006e\u006f\u0077\u006e"),
                (__9f14cf239d210677b549719b00bd34c2dd1d76e12d1d8883e1924f06c38a9efd.textContent =
                  "\u004f\u0070\u0065\u006e\u0052\u006f\u0075\u0074\u0065\u0072\u0020\u0062\u0061\u006c\u0061\u006e\u0063\u0065\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0063\u0068\u0065\u0063\u006b\u0065\u0064\u002e\u0020\u0052\u0065\u0066\u0072\u0065\u0073\u0068\u0020\u0074\u006f\u0020\u0074\u0072\u0079\u0020\u0061\u0067\u0061\u0069\u006e\u002e"));
            } finally {
              (__9f14cf239d210677b549719b00bd34c2dd1d76e12d1d8883e1924f06c38a9efd.hidden ||
                __cf1b93ea463342e3a13a0a23bc9901831ecc2986044c6e1893501c3c2d62081f(
                  __9f14cf239d210677b549719b00bd34c2dd1d76e12d1d8883e1924f06c38a9efd,
                  "\u0061\u0069",
                  "\u004f\u0070\u0065\u006e\u0052\u006f\u0075\u0074\u0065\u0072\u0020\u0062\u0061\u006c\u0061\u006e\u0063\u0065",
                ),
                (__f5c72256354a3168063a3100e77d44f1c07609b9a22894f6224e07aac3980975 = !1));
            }
          }
        }
        const __2b795d265b8e66061093b926dc59cf2190acf00ec71598bc2b9db2943d0adee2 = setInterval(
          () => {
            document.hidden || __d162db62d66e0854e2ec8b53621eb159fceb6492dae007dfbd8fe9064c3b5c32();
          },
          6e4,
        );
        let __78d74f6871941f1db8411151862e5550043a4dac066e24837b8ee652cdcb3787 = !1,
          __b184edeaedbf94d47fc73e19fbe9fb5a61c2e1889df5f13a525dd40d4e6cf8f3 = null;
        const __7d99e8cb6e92e18dde66925e0f3156ccfe0a558218064c54fb00950379a922a9 =
          __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.querySelector(
            "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0074\u0075\u0062\u0065\u002d\u0073\u0074\u0061\u0074\u0075\u0073\u005d",
          );
        function __28a16dd34b8cc1f45f2c87d1d50d39ce01e94933d532a23b1b3429cdab0675d9(
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
        ) {
          __b184edeaedbf94d47fc73e19fbe9fb5a61c2e1889df5f13a525dd40d4e6cf8f3 =
            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53;
          const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.enabled
                ? "\u0063\u0068\u0061\u006c\u006c\u0065\u006e\u0067\u0065" ===
                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.lastError
                  ? "\u0059\u006f\u0075\u0054\u0075\u0062\u0065\u0020\u0076\u0065\u0072\u0069\u0066\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u0020\u0072\u0065\u0071\u0075\u0069\u0072\u0065\u0064"
                  : {
                      working: "\u004c\u0061\u0073\u0074\u0020\u0073\u0074\u0072\u0065\u0061\u006d\u0020\u0063\u0068\u0065\u0063\u006b\u0020\u0070\u0061\u0073\u0073\u0065\u0064",
                      login_required: "\u004c\u006f\u0067\u0069\u006e\u0020\u006e\u0065\u0065\u0064\u0073\u0020\u0072\u0065\u0066\u0072\u0065\u0073\u0068\u0069\u006e\u0067",
                      trouble: "\u0053\u0065\u0072\u0076\u0069\u0063\u0065\u0020\u0074\u0072\u006f\u0075\u0062\u006c\u0065",
                      setup_required: "\u0053\u0065\u0074\u0075\u0070\u0020\u0072\u0065\u0071\u0075\u0069\u0072\u0065\u0064",
                      unchecked: "\u004e\u006f\u0074\u0020\u0063\u0068\u0065\u0063\u006b\u0065\u0064\u0020\u0079\u0065\u0074",
                    }[__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.state] ||
                    "\u0053\u0065\u0072\u0076\u0069\u0063\u0065\u0020\u0074\u0072\u006f\u0075\u0062\u006c\u0065"
                : "\u004e\u006f\u0074\u0020\u0065\u006e\u0061\u0062\u006c\u0065\u0064",
            __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.enabled
                ? "\u0063\u0068\u0061\u006c\u006c\u0065\u006e\u0067\u0065" ===
                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.lastError
                  ? "\u0059\u006f\u0075\u0054\u0075\u0062\u0065\u0020\u0072\u0065\u0071\u0075\u0065\u0073\u0074\u0065\u0064\u0020\u0076\u0065\u0072\u0069\u0066\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u0020\u0066\u0072\u006f\u006d\u0020\u0074\u0068\u0065\u0020\u0073\u0065\u0072\u0076\u0065\u0072\u002e\u0020\u0054\u0068\u0069\u0073\u0020\u0064\u006f\u0065\u0073\u0020\u006e\u006f\u0074\u0020\u0070\u0072\u006f\u0076\u0065\u0020\u0074\u0068\u0065\u0020\u0063\u006f\u006f\u006b\u0069\u0065\u0073\u0020\u0065\u0078\u0070\u0069\u0072\u0065\u0064\u002e\u0020\u0052\u0065\u0066\u0072\u0065\u0073\u0068\u0069\u006e\u0067\u0020\u0074\u0068\u0069\u0073\u0020\u0070\u0061\u0067\u0065\u0020\u0064\u006f\u0065\u0073\u0020\u006e\u006f\u0074\u0020\u0072\u0065\u006e\u0065\u0077\u0020\u0074\u0068\u0065\u0020\u0073\u0065\u0072\u0076\u0065\u0072\u0020\u0073\u0065\u0073\u0073\u0069\u006f\u006e\u002e"
                  : "\u006c\u006f\u0067\u0069\u006e\u005f\u0072\u0065\u0071\u0075\u0069\u0072\u0065\u0064" ===
                      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.state
                    ? "\u0059\u006f\u0075\u0054\u0075\u0062\u0065\u0020\u0072\u0065\u006a\u0065\u0063\u0074\u0065\u0064\u0020\u0074\u0068\u0065\u0020\u0073\u0065\u0072\u0076\u0065\u0072\u0020\u006c\u006f\u0067\u0069\u006e\u002e\u0020\u0052\u0065\u0066\u0072\u0065\u0073\u0068\u0069\u006e\u0067\u0020\u0074\u0068\u0069\u0073\u0020\u0070\u0061\u0067\u0065\u0020\u0064\u006f\u0065\u0073\u0020\u006e\u006f\u0074\u0020\u0072\u0065\u006e\u0065\u0077\u0020\u0069\u0074\u002e\u0020\u0041\u0066\u0074\u0065\u0072\u0020\u0072\u0065\u0070\u006c\u0061\u0063\u0069\u006e\u0067\u0020\u0074\u0068\u0065\u0020\u0070\u0072\u0069\u0076\u0061\u0074\u0065\u0020\u0063\u006f\u006f\u006b\u0069\u0065\u0020\u0066\u0069\u006c\u0065\u002c\u0020\u0077\u0061\u0069\u0074\u0020\u0066\u006f\u0072\u0020\u0074\u0068\u0065\u0020\u0072\u0065\u0074\u0072\u0079\u0020\u0063\u006f\u006f\u006c\u0064\u006f\u0077\u006e\u0020\u0061\u006e\u0064\u0020\u0075\u0073\u0065\u0020\u0043\u0068\u0065\u0063\u006b\u0020\u006e\u006f\u0077\u002e"
                    : "\u0074\u0072\u006f\u0075\u0062\u006c\u0065" ===
                        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.state
                      ? "\u0041\u0020\u0072\u0065\u0063\u0065\u006e\u0074\u0020\u0072\u0065\u0071\u0075\u0065\u0073\u0074\u0020\u0066\u0061\u0069\u006c\u0065\u0064\u002e\u0020\u0054\u0068\u0069\u0073\u0020\u0064\u006f\u0065\u0073\u0020\u006e\u006f\u0074\u0020\u006e\u0065\u0063\u0065\u0073\u0073\u0061\u0072\u0069\u006c\u0079\u0020\u006d\u0065\u0061\u006e\u0020\u0074\u0068\u0065\u0020\u006c\u006f\u0067\u0069\u006e\u0020\u0065\u0078\u0070\u0069\u0072\u0065\u0064\u002e"
                      : "\u0073\u0065\u0074\u0075\u0070\u005f\u0072\u0065\u0071\u0075\u0069\u0072\u0065\u0064" ===
                          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.state
                        ? "\u0043\u0068\u0065\u0063\u006b\u0020\u0074\u0068\u0065\u0020\u0070\u0072\u0069\u0076\u0061\u0074\u0065\u0020\u006c\u006f\u0067\u0069\u006e\u0020\u0066\u0069\u006c\u0065\u0020\u0061\u006e\u0064\u0020\u0072\u0065\u0071\u0075\u0069\u0072\u0065\u0064\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0074\u006f\u006f\u006c\u0073\u0020\u006f\u006e\u0020\u0074\u0068\u0065\u0020\u0073\u0065\u0072\u0076\u0065\u0072\u002e"
                        : "\u0053\u0074\u0061\u0074\u0075\u0073\u0020\u0063\u006f\u006d\u0065\u0073\u0020\u0066\u0072\u006f\u006d\u0020\u0072\u0065\u0061\u006c\u0020\u0073\u0074\u0072\u0065\u0061\u006d\u0020\u0063\u0068\u0065\u0063\u006b\u0073\u0020\u0061\u006e\u0064\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0070\u0072\u0065\u0070\u0061\u0072\u0061\u0074\u0069\u006f\u006e\u0073\u002e\u0020\u0041\u0020\u0073\u0069\u006e\u0067\u006c\u0065\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0064\u006f\u0065\u0073\u0020\u006e\u006f\u0074\u0020\u006d\u0061\u0072\u006b\u0020\u0074\u0068\u0065\u0020\u006c\u006f\u0067\u0069\u006e\u0020\u0065\u0078\u0070\u0069\u0072\u0065\u0064\u002e"
                : "\u004e\u0061\u0074\u0069\u0076\u0065\u0020\u0070\u006c\u0061\u0079\u0062\u0061\u0063\u006b\u0020\u0069\u0073\u0020\u0077\u0061\u0069\u0074\u0069\u006e\u0067\u0020\u0066\u006f\u0072\u0020\u0073\u0065\u0072\u0076\u0065\u0072\u0020\u0073\u0065\u0074\u0075\u0070\u002e\u0020\u0059\u006f\u0075\u0054\u0075\u0062\u0065\u0020\u0070\u006c\u0061\u0079\u0062\u0061\u0063\u006b\u0020\u0072\u0065\u006d\u0061\u0069\u006e\u0073\u0020\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u002e";
          ((__7d99e8cb6e92e18dde66925e0f3156ccfe0a558218064c54fb00950379a922a9.innerHTML = `<div><strong>N7X7UB3 <span data-owner-tube-state="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.state)}">${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708)}</span></strong><p>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c)}</p><small>Last success: ${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.lastSuccess))} &middot; Last check: ${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.lastChecked))}</small><small>Cache: ${(Number(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.cacheBytes || 0) / 1073741824).toFixed(2)} / ${(Number(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.cacheLimitBytes || 0) / 1073741824).toFixed(0)} GB &middot; Preparing: ${Number(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.activeJobs || 0)} / ${Number(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.maxJobs || 1)} &middot; Up to 720p</small></div><button type="button" data-owner-tube-check ${!__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.enabled || __78d74f6871941f1db8411151862e5550043a4dac066e24837b8ee652cdcb3787 ? "\u0064\u0069\u0073\u0061\u0062\u006c\u0065\u0064" : ""}>${__78d74f6871941f1db8411151862e5550043a4dac066e24837b8ee652cdcb3787 ? "\u0043\u0068\u0065\u0063\u006b\u0069\u006e\u0067\u002e\u002e\u002e" : "\u0043\u0068\u0065\u0063\u006b\u0020\u006e\u006f\u0077"}</button>`),
            __cf1b93ea463342e3a13a0a23bc9901831ecc2986044c6e1893501c3c2d62081f(
              __7d99e8cb6e92e18dde66925e0f3156ccfe0a558218064c54fb00950379a922a9,
              "\u0074\u0075\u0062\u0065",
              "\u004e\u0037\u0058\u0037\u0055\u0042\u0033",
            ));
        }
        async function __9484356c21ee76b374b5049f3308a6a43cb70aca681123ad6982a932dbc9f9cf(
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f = !1,
        ) {
          if (
            __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.isConnected &&
            __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.access?.founder &&
            !__78d74f6871941f1db8411151862e5550043a4dac066e24837b8ee652cdcb3787
          ) {
            ((__7d99e8cb6e92e18dde66925e0f3156ccfe0a558218064c54fb00950379a922a9.hidden = !1),
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f &&
                ((__78d74f6871941f1db8411151862e5550043a4dac066e24837b8ee652cdcb3787 = !0),
                __b184edeaedbf94d47fc73e19fbe9fb5a61c2e1889df5f13a525dd40d4e6cf8f3 &&
                  __28a16dd34b8cc1f45f2c87d1d50d39ce01e94933d532a23b1b3429cdab0675d9(
                    __b184edeaedbf94d47fc73e19fbe9fb5a61c2e1889df5f13a525dd40d4e6cf8f3,
                  )));
            try {
              const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
                await __0c823f772d95246c7bf82dc76d301b8902c775f0af8b8524cc7e4f76694c2a56(
                  "\u002f\u0061\u0070\u0069\u002f\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0061\u0073\u0068\u0062\u006f\u0061\u0072\u0064\u002f\u006e\u0079\u0078\u0074\u0075\u0062\u0065" +
                    (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f
                      ? "\u002f\u0063\u0068\u0065\u0063\u006b"
                      : ""),
                  {
                    method: __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f
                      ? "\u0050\u004f\u0053\u0054"
                      : "\u0047\u0045\u0054",
                  },
                );
              if (
                !__da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.isConnected ||
                !__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.access?.founder
              )
                return;
              ((__78d74f6871941f1db8411151862e5550043a4dac066e24837b8ee652cdcb3787 = !1),
                __28a16dd34b8cc1f45f2c87d1d50d39ce01e94933d532a23b1b3429cdab0675d9(
                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                ));
            } catch (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) {
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f
                ? __39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd(
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.message ||
                      "\u0054\u0068\u0065\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0063\u0068\u0065\u0063\u006b\u0020\u0066\u0061\u0069\u006c\u0065\u0064\u002e",
                    "\u0065\u0072\u0072\u006f\u0072",
                  )
                : ((__7d99e8cb6e92e18dde66925e0f3156ccfe0a558218064c54fb00950379a922a9.innerHTML =
                    "\u003c\u0070\u003e\u004e\u0037\u0058\u0037\u0055\u0042\u0033\u0020\u0073\u0074\u0061\u0074\u0075\u0073\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u006c\u006f\u0061\u0064\u0065\u0064\u002e\u0020\u0052\u0065\u0066\u0072\u0065\u0073\u0068\u0020\u0074\u0068\u0065\u0020\u0064\u0061\u0073\u0068\u0062\u006f\u0061\u0072\u0064\u0020\u0074\u006f\u0020\u0072\u0065\u0074\u0072\u0079\u002e\u003c\u002f\u0070\u003e"),
                  __cf1b93ea463342e3a13a0a23bc9901831ecc2986044c6e1893501c3c2d62081f(
                    __7d99e8cb6e92e18dde66925e0f3156ccfe0a558218064c54fb00950379a922a9,
                    "\u0074\u0075\u0062\u0065",
                    "\u004e\u0037\u0058\u0037\u0055\u0042\u0033",
                  ));
            } finally {
              __78d74f6871941f1db8411151862e5550043a4dac066e24837b8ee652cdcb3787 = !1;
              const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
                __7d99e8cb6e92e18dde66925e0f3156ccfe0a558218064c54fb00950379a922a9.querySelector(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0074\u0075\u0062\u0065\u002d\u0063\u0068\u0065\u0063\u006b\u005d",
                );
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f &&
                ((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.disabled =
                  !__b184edeaedbf94d47fc73e19fbe9fb5a61c2e1889df5f13a525dd40d4e6cf8f3?.enabled),
                (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.textContent =
                  "\u0043\u0068\u0065\u0063\u006b\u0020\u006e\u006f\u0077"));
            }
          }
        }
        const __c467ac2c7adff7b534fd738cab2036bdeef9981ed15027b829c1f576f8eb8fb9 = setInterval(
          () => {
            document.hidden || __9484356c21ee76b374b5049f3308a6a43cb70aca681123ad6982a932dbc9f9cf();
          },
          6e4,
        );
        async function __3cca2ce1237f8b1a2a4c833ff7467c567f535ca6dab40efb4ab74bff235842c4(
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
          __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c = () => {},
        ) {
          const __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 = String(
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 || "",
          ).match(/^data:(image\/(?:gif|png|jpeg|webp));base64,([a-z0-9+/=]+)$/i);
          if (!__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477)
            throw new Error(
              `The selected ${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53} could not be prepared.`,
            );
          if (
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.length >
            __fcacda08e2d45e2c799c7376996c1a442e687015e3b968de16e67d8f572af52f
          )
            throw new Error("\u0043\u0068\u006f\u006f\u0073\u0065\u0020\u0061\u006e\u0020\u0069\u006d\u0061\u0067\u0065\u0020\u0073\u006d\u0061\u006c\u006c\u0065\u0072\u0020\u0074\u0068\u0061\u006e\u0020\u0038\u0020\u004d\u0042\u002e");
          const __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 =
              __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477[2],
            __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 = [];
          for (
            let __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22 = 0;
            __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22 <
            __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.length;
            __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22 += 42e4
          )
            __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.push(
              __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.slice(
                __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22,
                __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22 + 42e4,
              ),
            );
          if (
            !__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.length ||
            __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.length > 32
          )
            throw new Error("\u0054\u0068\u0061\u0074\u0020\u0069\u006d\u0061\u0067\u0065\u0020\u0069\u0073\u0020\u0074\u006f\u006f\u0020\u006c\u0061\u0072\u0067\u0065\u0020\u0074\u006f\u0020\u0075\u0070\u006c\u006f\u0061\u0064\u002e");
          const __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 = (
              globalThis.crypto?.randomUUID?.() ||
              `${Date.now()}-${Math.random().toString(36).slice(2)}`
            ).replace(/[^a-z0-9_-]/gi, ""),
            __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 = `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/users/${encodeURIComponent(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f)}/profile-media/${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53}/${__bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061}`;
          for (
            let __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22 = 0;
            __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22 <
            __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.length;
            __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22 += 1
          )
            (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c(
              Math.round(
                (__d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22 /
                  __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.length) *
                  90,
              ),
            ),
              await __0c823f772d95246c7bf82dc76d301b8902c775f0af8b8524cc7e4f76694c2a56(
                `${__78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106}/${__d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22}`,
                {
                  method: "\u0050\u0055\u0054",
                  body: JSON.stringify({
                    mime: __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477[1].toLowerCase(),
                    totalChunks:
                      __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.length,
                    chunk:
                      __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7[
                        __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22
                      ],
                  }),
                },
              ));
          const __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e =
            await __0c823f772d95246c7bf82dc76d301b8902c775f0af8b8524cc7e4f76694c2a56(
              `${__78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106}/complete`,
              {
                method: "\u0050\u004f\u0053\u0054",
                body: "\u007b\u007d",
              },
            );
          if (!__195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e.url)
            throw new Error(
              `The ${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53} image could not be completed.`,
            );
          return (
            __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c(100),
            __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e.url
          );
        }
        function __0dc7a36794699d66fd283721637876e91e1e84cedac0a0ff0701273b2b70ed7c() {
          ((__f2e5429bdd2ce4cd74b00d064941e11cca8a1f7f3d979f1aa03955b7bbd1e125.innerHTML =
            Array.from(
              {
                length: 6,
              },
              () =>
                "\u003c\u0061\u0072\u0074\u0069\u0063\u006c\u0065\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u006d\u0065\u0074\u0072\u0069\u0063\u0020\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u0022\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u0064\u0069\u0076\u003e\u003c\u0073\u0070\u0061\u006e\u003e\u003c\u002f\u0073\u0070\u0061\u006e\u003e\u003c\u0073\u0074\u0072\u006f\u006e\u0067\u003e\u003c\u002f\u0073\u0074\u0072\u006f\u006e\u0067\u003e\u003c\u002f\u0064\u0069\u0076\u003e\u003c\u002f\u0061\u0072\u0074\u0069\u0063\u006c\u0065\u003e",
            ).join("")),
            (__ba6eb875a7e89361f0de035163d6ce786417e0fb5b2f10611696ddf4ba3a3d04.innerHTML =
              "\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0074\u0061\u0062\u006c\u0065\u002d\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u0022\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u002f\u0064\u0069\u0076\u003e"),
            (__05ee36660b117e5e52942669e0936e5d17a4d69ad10ac56aca85f26a4b423b95.innerHTML =
              "\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0061\u0063\u0074\u0069\u0076\u0069\u0074\u0079\u002d\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u0022\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u002f\u0064\u0069\u0076\u003e"));
        }
        function __2187ea4a1f7d7fd6c563752f3672fbb0d1829d808bf709bbf29f6364acc1003b(
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
        ) {
          const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
            __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.sort ===
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f;
          return `<button type="button" data-owner-sort="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f}" class="${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 ? "\u0061\u0063\u0074\u0069\u0076\u0065" : ""}">${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53}${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 ? `<span aria-label="${"\u0061\u0073\u0063" === __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.direction ? "\u0061\u0073\u0063\u0065\u006e\u0064\u0069\u006e\u0067" : "\u0064\u0065\u0073\u0063\u0065\u006e\u0064\u0069\u006e\u0067"}">${"\u0061\u0073\u0063" === __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.direction ? "\u2191" : "\u2193"}</span>` : ""}</button>`;
        }
        function __fa1f7d35842fe865fe85c52fb1cf70c4a661adf454a66284fb639ab404cf7d3c() {
          const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
              __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.ipBans || [],
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
              __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.ipBanClientIp
                ? ` Your current IP is ${__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.ipBanClientIp}; N7X will not let you block it from this session.`
                : "";
          __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.innerHTML = `<header><div><span>${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0073\u0068\u0069\u0065\u006c\u0064")}</span><h2>Network access</h2><p>IP bans apply to N7X server and function requests.</p></div><button type="button" data-owner-drawer-close aria-label="Close IP bans">${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0063\u006c\u006f\u0073\u0065")}</button></header>\n        <div class="n7x-owner-drawer-scroll n7x-owner-ip-ban-drawer">\n          <section class="n7x-owner-detail-section"><h3>Block an IP address</h3><p class="n7x-owner-action-note">Use a full IPv4 or IPv6 address. This does not configure Cloudflare's edge firewall.${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708)}</p><form class="n7x-owner-ip-ban-form" data-owner-ip-ban-form><label>IP address<input name="ip" inputmode="text" autocomplete="off" maxlength="45" required placeholder="203.0.113.10 or 2001:db8::10"></label><label>Reason <input name="reason" maxlength="160" autocomplete="off" placeholder="Optional internal note"></label><div class="n7x-owner-detail-actions"><button type="submit">${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0073\u0068\u0069\u0065\u006c\u0064")}Block IP</button></div></form></section>\n          <section class="n7x-owner-detail-section"><h3>Blocked IP addresses</h3>${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.length ? `<div class="n7x-owner-ip-ban-list">${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.map((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) => `<article><div><strong>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.ip)}</strong><span>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.reason || "\u004e\u006f\u0020\u0072\u0065\u0061\u0073\u006f\u006e\u0020\u0072\u0065\u0063\u006f\u0072\u0064\u0065\u0064")}</span><small>Blocked ${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.createdAt))}${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.createdBy ? ` by ${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.createdBy)}` : ""}</small></div><button class="danger" type="button" data-owner-unban="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.id)}">${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0072\u0065\u0066\u0072\u0065\u0073\u0068")}Unblock</button></article>`).join("")}</div>` : "\u003c\u0070\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0061\u0063\u0074\u0069\u006f\u006e\u002d\u006e\u006f\u0074\u0065\u0022\u003e\u004e\u006f\u0020\u0049\u0050\u0020\u0061\u0064\u0064\u0072\u0065\u0073\u0073\u0065\u0073\u0020\u0061\u0072\u0065\u0020\u0062\u006c\u006f\u0063\u006b\u0065\u0064\u002e\u003c\u002f\u0070\u003e"}</section>\n        </div>`;
        }
        async function __97f4a27849e10a317bc6a074a4c0b8abf3a5538b9c2b6fab100c1e9f1ef483d8({
          preserveLoading: __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = !1,
        } = {}) {
          (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.controller?.abort(),
            (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.controller =
              new AbortController()),
            (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.loading = !0),
            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 ||
              __0dc7a36794699d66fd283721637876e91e1e84cedac0a0ff0701273b2b70ed7c());
          const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
            new URLSearchParams({
              page: __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.page,
              pageSize: __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.pageSize,
              search: __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.search,
              role: __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.role,
              subscription:
                __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.subscription,
              status: __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.status,
              segment: __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.segment,
              sort: __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.sort,
              direction:
                __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.direction,
            });
          try {
            const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
              await __0c823f772d95246c7bf82dc76d301b8902c775f0af8b8524cc7e4f76694c2a56(
                `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard?${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708}`,
                {
                  signal:
                    __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.controller
                      .signal,
                },
              );
            ((__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.data =
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53),
              __b1f802c665f7bebd541821d1b764ada73ffb4fa83e79200016911a5f9dfb544c?.(
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.metrics
                  ?.onlineUsers,
              ),
              (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.access =
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.access ||
                __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.access),
              __70b7492fd2afd801b49aa54e66cb092c2877957e19d82afc2d22bf34f272c5f0.enable(
                Boolean(
                  __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.access
                    ?.founder,
                ),
              ),
              (__da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.querySelector(
                "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0073\u0065\u0063\u0074\u0069\u006f\u006e\u003d\u0022\u0073\u0065\u0072\u0076\u0069\u0063\u0065\u0073\u0022\u005d",
              ).hidden =
                !__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.access
                  ?.founder),
              (__da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.querySelector(
                "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0067\u0061\u006d\u0065\u002d\u0072\u0065\u0070\u006f\u0072\u0074\u0073\u005d",
              ).hidden =
                !__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.access
                  ?.founder),
              __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.access?.founder ||
                "\u0073\u0065\u0072\u0076\u0069\u0063\u0065\u0073" !== __6d22a32ba0cc8ebd5fdef651fde57b13c6fe6f4d25c11937d9f218d9f96ae615 ||
                __fbc53bfbe963d655ef9e75540634d95a0e7633a0eb7492033434599de806060e("\u006f\u0076\u0065\u0072\u0076\u0069\u0065\u0077"),
              (__7d99e8cb6e92e18dde66925e0f3156ccfe0a558218064c54fb00950379a922a9.hidden =
                !__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.access
                  ?.founder),
              __7d99e8cb6e92e18dde66925e0f3156ccfe0a558218064c54fb00950379a922a9.hidden ||
                __9484356c21ee76b374b5049f3308a6a43cb70aca681123ad6982a932dbc9f9cf(),
              (__9f14cf239d210677b549719b00bd34c2dd1d76e12d1d8883e1924f06c38a9efd.hidden =
                !__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.access
                  ?.founder),
              __9f14cf239d210677b549719b00bd34c2dd1d76e12d1d8883e1924f06c38a9efd.hidden ||
                (__d162db62d66e0854e2ec8b53621eb159fceb6492dae007dfbd8fe9064c3b5c32(),
                (async function () {
                  const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
                    __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.querySelector(
                      "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0067\u0061\u006d\u0065\u002d\u0072\u0065\u0070\u006f\u0072\u0074\u0073\u005d",
                    );
                  if (
                    __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.isConnected &&
                    __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.access
                      ?.founder
                  ) {
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.hidden = !1;
                    try {
                      const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
                        await __0c823f772d95246c7bf82dc76d301b8902c775f0af8b8524cc7e4f76694c2a56(
                          "\u002f\u0061\u0070\u0069\u002f\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0061\u0073\u0068\u0062\u006f\u0061\u0072\u0064\u002f\u0067\u0061\u006d\u0065\u002d\u0072\u0065\u0070\u006f\u0072\u0074\u0073",
                        );
                      if (
                        !__da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.isConnected
                      )
                        return;
                      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.innerHTML =
                        "\u003c\u0064\u0069\u0076\u003e\u003c\u0073\u0074\u0072\u006f\u006e\u0067\u003e\u0047\u0061\u006d\u0065\u0020\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u0020\u0072\u0065\u0070\u006f\u0072\u0074\u0073\u003c\u002f\u0073\u0074\u0072\u006f\u006e\u0067\u003e\u003c\u0070\u003e\u0041\u0075\u0074\u006f\u006d\u0061\u0074\u0069\u0063\u0020\u0073\u0069\u0067\u006e\u0061\u006c\u0073\u0020\u0066\u0072\u006f\u006d\u0020\u0062\u0072\u006f\u0077\u0073\u0065\u0072\u0073\u003b\u0020\u0072\u0065\u0070\u006f\u0072\u0074\u0073\u0020\u006d\u0061\u0079\u0020\u0069\u006e\u0063\u006c\u0075\u0064\u0065\u0020\u0073\u006c\u006f\u0077\u0020\u006c\u006f\u0061\u0064\u0073\u002e\u0020\u004c\u0061\u0073\u0074\u0020\u0073\u0065\u0076\u0065\u006e\u0020\u0064\u0061\u0079\u0073\u002e\u003c\u002f\u0070\u003e" +
                        ((
                          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.reports ||
                          []
                        )
                          .slice(0, 50)
                          .map(
                            (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) =>
                              `<p><strong>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.title)}</strong> &middot; ${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.provider)} &middot; ${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.brand)} &middot; ${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.reason)} &middot; ${Number(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.count) || 1} reports<br><small>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.lastSeen))}</small></p>`,
                          )
                          .join("") || "\u003c\u0070\u003e\u004e\u006f\u0020\u0072\u0065\u0063\u0065\u006e\u0074\u0020\u0066\u0061\u0069\u006c\u0075\u0072\u0065\u0073\u0020\u0072\u0065\u0070\u006f\u0072\u0074\u0065\u0064\u002e\u003c\u002f\u0070\u003e") +
                        "\u003c\u002f\u0064\u0069\u0076\u003e";
                    } catch {
                      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.textContent =
                        "\u0047\u0061\u006d\u0065\u0020\u0072\u0065\u0070\u006f\u0072\u0074\u0073\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u006c\u006f\u0061\u0064\u0065\u0064\u002e\u0020\u0052\u0065\u0066\u0072\u0065\u0073\u0068\u0020\u0074\u006f\u0020\u0072\u0065\u0074\u0072\u0079\u002e";
                    }
                    __cf1b93ea463342e3a13a0a23bc9901831ecc2986044c6e1893501c3c2d62081f(
                      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                      "\u0067\u0061\u006d\u0065\u002d\u0072\u0065\u0070\u006f\u0072\u0074\u0073",
                      "\u0047\u0061\u006d\u0065\u0020\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u0020\u0072\u0065\u0070\u006f\u0072\u0074\u0073",
                    );
                  }
                })()),
              (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.customRoles =
                Array.isArray(
                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.customRoles,
                )
                  ? __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.customRoles
                  : __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.customRoles));
            const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
              __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.querySelector(
                "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0069\u0070\u002d\u0062\u0061\u006e\u0073\u005d",
              );
            __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c &&
              (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.hidden =
                !__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.access?.permissions?.includes(
                  "\u006e\u0065\u0074\u0077\u006f\u0072\u006b\u003a\u0062\u0061\u006e\u0073",
                ));
            const __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 =
              __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.querySelector(
                "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0072\u006f\u006c\u0065\u0073\u005d",
              );
            __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 &&
              (__78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106.hidden =
                !__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.access
                  ?.founder);
            const __fcacda08e2d45e2c799c7376996c1a442e687015e3b968de16e67d8f572af52f =
              __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.querySelector(
                "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0067\u006c\u006f\u0062\u0061\u006c\u002d\u0061\u0070\u0070\u0073\u005d",
              );
            (__fcacda08e2d45e2c799c7376996c1a442e687015e3b968de16e67d8f572af52f &&
              (__fcacda08e2d45e2c799c7376996c1a442e687015e3b968de16e67d8f572af52f.hidden =
                !__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.access
                  ?.founder),
              (__da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.querySelector(
                "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0073\u0074\u0075\u0064\u0079\u0072\u0065\u0061\u0064\u0079\u005d",
              ).hidden =
                !__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.access
                  ?.founder));
            const __34168c7d57200d99fd97b1ec555dbf09aa9a16d1cadcc54b0e6b2db76e926d02 =
              __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.querySelector(
                "\u005b\u006e\u0061\u006d\u0065\u003d\u0022\u0072\u006f\u006c\u0065\u0022\u005d",
              );
            __34168c7d57200d99fd97b1ec555dbf09aa9a16d1cadcc54b0e6b2db76e926d02 &&
              (__34168c7d57200d99fd97b1ec555dbf09aa9a16d1cadcc54b0e6b2db76e926d02
                .querySelectorAll("\u006f\u0070\u0074\u0069\u006f\u006e\u005b\u0064\u0061\u0074\u0061\u002d\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0072\u006f\u006c\u0065\u005d")
                .forEach((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.remove(),
                ),
              __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.customRoles.forEach(
                (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) =>
                  __34168c7d57200d99fd97b1ec555dbf09aa9a16d1cadcc54b0e6b2db76e926d02.insertAdjacentHTML(
                    "\u0062\u0065\u0066\u006f\u0072\u0065\u0065\u006e\u0064",
                    `<option data-custom-role value="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.id)}">${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.label)}</option>`,
                  ),
              ),
              (__34168c7d57200d99fd97b1ec555dbf09aa9a16d1cadcc54b0e6b2db76e926d02.value =
                __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.role));
            const __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2 =
              __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.querySelector(
                "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0061\u0063\u0063\u0065\u0073\u0073\u002d\u0063\u006f\u0070\u0079\u005d",
              );
            (__058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2 &&
              __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.access &&
              (__058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.textContent = `${__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.access.roleLabel || __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477(__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.access.role)} access \xb7 controls are limited to this role's permissions.`),
              (function (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = {}) {
                const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = [
                  [
                    "\u0075\u0073\u0065\u0072\u0073",
                    "\u0054\u006f\u0074\u0061\u006c\u0020\u0075\u0073\u0065\u0072\u0073",
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.totalUsers ??
                      0,
                    "\u0061\u006c\u006c",
                  ],
                  [
                    "\u0061\u0063\u0074\u0069\u0076\u0065",
                    "\u0041\u0063\u0074\u0069\u0076\u0065\u0020\u0074\u006f\u0064\u0061\u0079",
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.activeToday ??
                      0,
                    "\u0061\u0063\u0074\u0069\u0076\u0065\u005f\u0074\u006f\u0064\u0061\u0079",
                  ],
                  [
                    "\u006f\u006e\u006c\u0069\u006e\u0065",
                    "\u004f\u006e\u006c\u0069\u006e\u0065\u0020\u006e\u006f\u0077",
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.onlineUsers ??
                      0,
                    "\u006f\u006e\u006c\u0069\u006e\u0065",
                  ],
                  [
                    "\u0073\u0069\u0067\u006e\u0075\u0070",
                    "\u004e\u0065\u0077\u0020\u0073\u0069\u0067\u006e\u0075\u0070\u0073\u0020\u00b7\u0020\u0037\u0064",
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.newSignups ??
                      0,
                    "\u006e\u0065\u0077\u005f\u0037\u0064",
                  ],
                  [
                    "\u0070\u0072\u0065\u006d\u0069\u0075\u006d",
                    "\u0050\u0072\u0065\u006d\u0069\u0075\u006d",
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.premiumSubscribers ??
                      0,
                    "\u0070\u0072\u0065\u006d\u0069\u0075\u006d",
                  ],
                  [
                    "\u0072\u0065\u0076\u0065\u006e\u0075\u0065",
                    "\u004d\u006f\u006e\u0074\u0068\u006c\u0079\u0020\u0072\u0065\u0076\u0065\u006e\u0075\u0065",
                    ((__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
                      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.monthlyRevenueCents),
                    new Intl.NumberFormat(void 0, {
                      style: "\u0063\u0075\u0072\u0072\u0065\u006e\u0063\u0079",
                      currency: "\u0055\u0053\u0044",
                    }).format(
                      (Number(__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c) ||
                        0) / 100,
                    )),
                    "\u0072\u0065\u0076\u0065\u006e\u0075\u0065",
                  ],
                ];
                var __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c;
                __f2e5429bdd2ce4cd74b00d064941e11cca8a1f7f3d979f1aa03955b7bbd1e125.innerHTML =
                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708
                    .map(
                      ([
                        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                        __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
                        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
                        __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
                      ]) => {
                        const __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 =
                          __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.segment ===
                          __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477;
                        return `<button class="n7x-owner-metric${__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 ? "\u0020\u0061\u0063\u0074\u0069\u0076\u0065" : ""}" type="button" data-owner-segment="${__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477}" aria-pressed="${__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766}" aria-label="Show ${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708)}">${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53)}<div><span>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708)}</span><strong>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c)}</strong></div></button>`;
                      },
                    )
                    .join("");
              })(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.metrics),
              (function (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) {
                const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.users || [],
                  __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.pagination ||
                    {},
                  __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 = Number(
                    __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.accounts ??
                      __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.scanned ??
                      0,
                  ),
                  __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 = Number(
                    __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.guests || 0,
                  );
                ((__da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.querySelector(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0075\u0073\u0065\u0072\u002d\u0063\u006f\u0075\u006e\u0074\u005d",
                ).textContent =
                  `${Number(__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.total || 0).toLocaleString()} matching \xb7 ${__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.toLocaleString()} accounts \xb7 ${__78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106.toLocaleString()} guest${1 === __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 ? "" : "\u0073"} online${__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.truncated ? "\u0020\u0028\u0073\u0063\u0061\u006e\u0020\u0063\u0061\u0070\u0070\u0065\u0064\u0029" : ""}`),
                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.length
                    ? (__ba6eb875a7e89361f0de035163d6ce786417e0fb5b2f10611696ddf4ba3a3d04.innerHTML = `<table class="n7x-owner-table">\n          <thead><tr><th>${__2187ea4a1f7d7fd6c563752f3672fbb0d1829d808bf709bbf29f6364acc1003b("\u0064\u0069\u0073\u0070\u006c\u0061\u0079\u004e\u0061\u006d\u0065", "\u0055\u0073\u0065\u0072")}</th><th>${__2187ea4a1f7d7fd6c563752f3672fbb0d1829d808bf709bbf29f6364acc1003b("\u0072\u006f\u006c\u0065", "\u0052\u006f\u006c\u0065")}</th><th>${__2187ea4a1f7d7fd6c563752f3672fbb0d1829d808bf709bbf29f6364acc1003b("\u0073\u0075\u0062\u0073\u0063\u0072\u0069\u0070\u0074\u0069\u006f\u006e\u0053\u0074\u0061\u0074\u0075\u0073", "\u0053\u0075\u0062\u0073\u0063\u0072\u0069\u0070\u0074\u0069\u006f\u006e")}</th><th>${__2187ea4a1f7d7fd6c563752f3672fbb0d1829d808bf709bbf29f6364acc1003b("\u006c\u0061\u0073\u0074\u0053\u0069\u0067\u006e\u0049\u006e\u0041\u0074", "\u004c\u0061\u0073\u0074\u0020\u0073\u0069\u0067\u006e\u002d\u0069\u006e")}</th><th>${__2187ea4a1f7d7fd6c563752f3672fbb0d1829d808bf709bbf29f6364acc1003b("\u006c\u0061\u0073\u0074\u0041\u0063\u0074\u0069\u0076\u0065\u0041\u0074", "\u004c\u0061\u0073\u0074\u0020\u0061\u0063\u0074\u0069\u0076\u0065")}</th><th>Email verified</th><th>${__2187ea4a1f7d7fd6c563752f3672fbb0d1829d808bf709bbf29f6364acc1003b("\u0073\u0074\u0061\u0074\u0075\u0073", "\u0053\u0074\u0061\u0074\u0075\u0073")}</th><th><span class="sr-only">Actions</span></th></tr></thead>\n          <tbody>${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708
                        .map(
                          (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) => {
                            const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
                                Boolean(
                                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.guest,
                                ),
                              __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
                                !__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 &&
                                !0 ===
                                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.canReviewSearchHistory;
                            return `<tr data-owner-user-row="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.uid)}"${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 ? "\u0020\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0067\u0075\u0065\u0073\u0074\u002d\u0072\u006f\u0077\u003d\u0022\u0074\u0072\u0075\u0065\u0022" : ""}>\n            <td><div class="n7x-owner-user-entry"><button class="n7x-owner-user-cell" type="button" data-owner-view-user="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.uid)}"><span class="n7x-owner-avatar">${__2a7a4197494d8323fea0f175ba188cc62025fc3fcf0d33594407f5566e01d6cc(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.photoUrl, "", (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.displayName || "\u003f").slice(0, 1).toUpperCase())}<i class="${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.online ? "\u006f\u006e\u006c\u0069\u006e\u0065" : ""}"></i></span><span><span class="n7x-owner-user-name-row"><strong>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.displayName)}</strong><span class="n7x-owner-presence-state ${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.online ? "\u006f\u006e\u006c\u0069\u006e\u0065" : "\u006f\u0066\u0066\u006c\u0069\u006e\u0065"}"><i></i>${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.online ? "\u004f\u006e\u006c\u0069\u006e\u0065" : "\u004f\u0066\u0066\u006c\u0069\u006e\u0065"}</span></span><small>@${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.username)} \xb7 ${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.email || (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 ? "\u004e\u006f\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074" : "\u004e\u006f\u0020\u0065\u006d\u0061\u0069\u006c"))}</small><span class="n7x-owner-mobile-access"><span class="n7x-owner-badge role-${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.role)}${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.customRole ? "\u0020\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0072\u006f\u006c\u0065" : ""}"${__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) ? ` style="--owner-custom-role:${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53))}"` : ""}>${__bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.role)}<span class="n7x-minecraft-text">${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53))}</span></span><span class="n7x-owner-badge subscription-${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.subscriptionStatus)}">${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.subscriptionStatus))}</span></span></span></button>${__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c ? `<button class="n7x-owner-search-shield" type="button" data-owner-search-history="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.uid)}" aria-label="Review search history for ${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.displayName)}" title="Review search history">${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0073\u0068\u0069\u0065\u006c\u0064")}</button>` : ""}</div></td>\n            <td><span class="n7x-owner-badge role-${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.role)}${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.customRole ? "\u0020\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0072\u006f\u006c\u0065" : ""}"${__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) ? ` style="--owner-custom-role:${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53))}"` : ""}>${__bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.role)}<span class="n7x-minecraft-text">${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53))}</span></span></td>\n            <td><span class="n7x-owner-badge subscription-${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.subscriptionStatus)}">${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.subscriptionStatus))}</span></td>\n            <td><span title="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 ? "\u004e\u006f\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074" : __0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.lastSignInAt))}">${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 ? "\u004e\u006f\u0074\u0020\u0073\u0069\u0067\u006e\u0065\u0064\u0020\u0069\u006e" : __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.lastSignInAt))}</span></td>\n            <td><span title="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.lastActiveAt))}">${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.lastActiveAt))}</span></td>\n            <td><span class="n7x-owner-verified ${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.deliverableEmail && __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.emailVerified ? "\u0076\u0065\u0072\u0069\u0066\u0069\u0065\u0064" : ""}">${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 ? "\u0047\u0075\u0065\u0073\u0074" : __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.deliverableEmail ? (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.emailVerified ? "\u0056\u0065\u0072\u0069\u0066\u0069\u0065\u0064" : "\u0055\u006e\u0076\u0065\u0072\u0069\u0066\u0069\u0065\u0064") : "\u004e\u002f\u0041"}</span></td>\n            <td><span class="n7x-owner-account-state ${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 ? "\u0067\u0075\u0065\u0073\u0074" : __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.disabled ? "\u0064\u0069\u0073\u0061\u0062\u006c\u0065\u0064" : "\u0065\u006e\u0061\u0062\u006c\u0065\u0064"}"><i></i>${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 ? "\u0047\u0075\u0065\u0073\u0074" : __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.disabled ? "\u0044\u0069\u0073\u0061\u0062\u006c\u0065\u0064" : "\u0045\u006e\u0061\u0062\u006c\u0065\u0064"}</span></td>\n            <td><button class="n7x-owner-row-action" type="button" data-owner-view-user="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.uid)}" aria-label="View ${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.displayName)}">${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0063\u0068\u0065\u0076\u0072\u006f\u006e")}</button></td>\n          </tr>`;
                          },
                        )
                        .join("")}</tbody></table>`)
                    : (__ba6eb875a7e89361f0de035163d6ce786417e0fb5b2f10611696ddf4ba3a3d04.innerHTML =
                        "\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0065\u006d\u0070\u0074\u0079\u0022\u003e\u003c\u0073\u0074\u0072\u006f\u006e\u0067\u003e\u004e\u006f\u0020\u0075\u0073\u0065\u0072\u0073\u0020\u0066\u006f\u0075\u006e\u0064\u003c\u002f\u0073\u0074\u0072\u006f\u006e\u0067\u003e\u003c\u0073\u0070\u0061\u006e\u003e\u0054\u0072\u0079\u0020\u0063\u0068\u0061\u006e\u0067\u0069\u006e\u0067\u0020\u0074\u0068\u0065\u0020\u0073\u0065\u0061\u0072\u0063\u0068\u0020\u006f\u0072\u0020\u0066\u0069\u006c\u0074\u0065\u0072\u0073\u002e\u003c\u002f\u0073\u0070\u0061\u006e\u003e\u003c\u002f\u0064\u0069\u0076\u003e"),
                  (__bcf751aebeabec4b332852f23d7c45ad6561bc8cb9ea5c88776985439bed6c6b.innerHTML = `<span>Page ${__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.page || 1} of ${__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.pages || 1}</span><div><label>Rows <select data-owner-page-size><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select></label><button type="button" data-owner-page="${Math.max(1, (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.page || 1) - 1)}" ${(__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.page || 1) <= 1 ? "\u0064\u0069\u0073\u0061\u0062\u006c\u0065\u0064" : ""}>Previous</button><button type="button" data-owner-page="${Math.min(__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.pages || 1, (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.page || 1) + 1)}" ${(__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.page || 1) >= (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.pages || 1) ? "\u0064\u0069\u0073\u0061\u0062\u006c\u0065\u0064" : ""}>Next</button></div>`),
                  (__bcf751aebeabec4b332852f23d7c45ad6561bc8cb9ea5c88776985439bed6c6b.querySelector(
                    "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0070\u0061\u0067\u0065\u002d\u0073\u0069\u007a\u0065\u005d",
                  ).value = String(
                    __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.pageSize,
                  )),
                  __3c22b3f87a34fd589b28089a6e1fe9407580da47a00ca8a13ab4e306192fb487(
                    __ba6eb875a7e89361f0de035163d6ce786417e0fb5b2f10611696ddf4ba3a3d04,
                  ));
              })(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53),
              (function (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = []) {
                if (
                  __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.access &&
                  !__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.access.permissions?.includes(
                    "\u0061\u0075\u0064\u0069\u0074\u003a\u0076\u0069\u0065\u0077",
                  )
                )
                  return void (__05ee36660b117e5e52942669e0936e5d17a4d69ad10ac56aca85f26a4b423b95.innerHTML =
                    "\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0065\u006d\u0070\u0074\u0079\u0020\u0063\u006f\u006d\u0070\u0061\u0063\u0074\u0022\u003e\u003c\u0073\u0074\u0072\u006f\u006e\u0067\u003e\u0041\u0063\u0074\u0069\u0076\u0069\u0074\u0079\u0020\u0069\u0073\u0020\u0070\u0072\u006f\u0074\u0065\u0063\u0074\u0065\u0064\u003c\u002f\u0073\u0074\u0072\u006f\u006e\u0067\u003e\u003c\u0073\u0070\u0061\u006e\u003e\u0059\u006f\u0075\u0072\u0020\u0061\u0073\u0073\u0069\u0067\u006e\u0065\u0064\u0020\u0072\u006f\u006c\u0065\u0020\u0063\u0061\u006e\u0020\u006d\u0061\u006e\u0061\u0067\u0065\u0020\u0069\u0074\u0073\u0020\u0070\u0065\u0072\u006d\u0069\u0074\u0074\u0065\u0064\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0074\u0061\u0073\u006b\u0073\u0020\u0077\u0069\u0074\u0068\u006f\u0075\u0074\u0020\u0076\u0069\u0065\u0077\u0069\u006e\u0067\u0020\u0074\u0068\u0065\u0020\u0066\u0075\u006c\u006c\u0020\u0061\u0075\u0064\u0069\u0074\u0020\u006c\u006f\u0067\u002e\u003c\u002f\u0073\u0070\u0061\u006e\u003e\u003c\u002f\u0064\u0069\u0076\u003e");
                if (!__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.length)
                  return void (__05ee36660b117e5e52942669e0936e5d17a4d69ad10ac56aca85f26a4b423b95.innerHTML =
                    "\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0065\u006d\u0070\u0074\u0079\u0020\u0063\u006f\u006d\u0070\u0061\u0063\u0074\u0022\u003e\u003c\u0073\u0074\u0072\u006f\u006e\u0067\u003e\u004e\u006f\u0020\u0061\u0063\u0074\u0069\u0076\u0069\u0074\u0079\u0020\u0079\u0065\u0074\u003c\u002f\u0073\u0074\u0072\u006f\u006e\u0067\u003e\u003c\u0073\u0070\u0061\u006e\u003e\u004f\u0077\u006e\u0065\u0072\u0020\u0061\u006e\u0064\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0065\u0076\u0065\u006e\u0074\u0073\u0020\u0077\u0069\u006c\u006c\u0020\u0061\u0070\u0070\u0065\u0061\u0072\u0020\u0068\u0065\u0072\u0065\u002e\u003c\u002f\u0073\u0070\u0061\u006e\u003e\u003c\u002f\u0064\u0069\u0076\u003e");
                const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.reduce(
                    (
                      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                    ) => {
                      const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = ((
                          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                        ) => {
                          const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
                            new Date(
                              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f ||
                                "",
                            );
                          if (
                            Number.isNaN(
                              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.getTime(),
                            )
                          )
                            return "\u0052\u0065\u0063\u0065\u006e\u0074";
                          const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
                              new Date(),
                            __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
                              new Date(
                                __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.getFullYear(),
                                __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.getMonth(),
                                __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.getDate(),
                              ).getTime(),
                            __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 =
                              new Date(
                                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.getFullYear(),
                                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.getMonth(),
                                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.getDate(),
                              ).getTime(),
                            __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 =
                              Math.round(
                                (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c -
                                  __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477) /
                                  864e5,
                              );
                          return 0 ===
                            __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766
                            ? "\u0054\u006f\u0064\u0061\u0079"
                            : 1 ===
                                __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766
                              ? "\u0059\u0065\u0073\u0074\u0065\u0072\u0064\u0061\u0079"
                              : new Intl.DateTimeFormat(void 0, {
                                  month: "\u0073\u0068\u006f\u0072\u0074",
                                  day: "\u006e\u0075\u006d\u0065\u0072\u0069\u0063",
                                }).format(
                                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                                );
                        })(
                          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.createdAt,
                        ),
                        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
                          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.find(
                            (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
                              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.label ===
                              __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
                          );
                      return (
                        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c
                          ? __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.events.push(
                              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                            )
                          : __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.push(
                              {
                                label:
                                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
                                events: [
                                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                                ],
                              },
                            ),
                        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f
                      );
                    },
                    [],
                  );
                __05ee36660b117e5e52942669e0936e5d17a4d69ad10ac56aca85f26a4b423b95.innerHTML =
                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708
                    .map(
                      (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) =>
                        `<section class="n7x-owner-activity-group"><header><strong>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.label)}</strong><span>${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.events.length} event${1 === __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.events.length ? "" : "\u0073"}</span></header>${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.events.map((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) => `<article class="n7x-owner-activity-item" data-owner-activity-type="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.action))}"><i class="n7x-owner-activity-dot">${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4(__6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.action))}</i><div><strong>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.action))}</strong><p>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.targetEmail || __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.actorEmail || __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.targetUid || "\u0053\u0079\u0073\u0074\u0065\u006d\u0020\u0065\u0076\u0065\u006e\u0074")}</p><span title="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.createdAt))}">${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.createdAt))}${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.actorEmail && __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.actorEmail !== __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.targetEmail ? ` \xb7 by ${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.actorEmail)}` : ""}</span></div></article>`).join("")}</section>`,
                    )
                    .join("");
              })(
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.recentActivity,
              ));
          } catch (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c) {
            "\u0041\u0062\u006f\u0072\u0074\u0045\u0072\u0072\u006f\u0072" !==
              __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.name &&
              (function (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) {
                (__fbc53bfbe963d655ef9e75540634d95a0e7633a0eb7492033434599de806060e("\u0075\u0073\u0065\u0072\u0073"),
                  __70b7492fd2afd801b49aa54e66cb092c2877957e19d82afc2d22bf34f272c5f0.enable(!1),
                  (__ba6eb875a7e89361f0de035163d6ce786417e0fb5b2f10611696ddf4ba3a3d04.innerHTML = `<div class="n7x-owner-error"><strong>Dashboard could not load</strong><span>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.message || "\u0054\u0072\u0079\u0020\u0061\u0067\u0061\u0069\u006e\u002e")}</span><button type="button" data-owner-refresh>Try again</button></div>`),
                  (__f2e5429bdd2ce4cd74b00d064941e11cca8a1f7f3d979f1aa03955b7bbd1e125.innerHTML =
                    ""),
                  (__05ee36660b117e5e52942669e0936e5d17a4d69ad10ac56aca85f26a4b423b95.innerHTML =
                    ""));
              })(__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c);
          } finally {
            __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.loading = !1;
          }
        }
        function __fd9ee09ca3154d8acbc8a5fb3e4bff4461c5df8cfb24f1993fb6b35fed9e447e(
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
          __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c = "",
        ) {
          return `<div class="n7x-owner-detail-value ${__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c}"><span>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53)}</span><strong>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 || "\u004e\u006f\u0074\u0020\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065")}</strong></div>`;
        }
        function __1706c147bd8ead491de48b9738e6537e36d04ed7843e503f86011a36f4ae7181(
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
        ) {
          return /^#[0-9a-f]{6}$/i.test(
            String(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f || ""),
          )
            ? String(
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
              ).toLowerCase()
            : __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53;
        }
        function __88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
        ) {
          return __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f ===
            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
            ? "\u0020\u0073\u0065\u006c\u0065\u0063\u0074\u0065\u0064"
            : "";
        }
        async function __58ef4531c4cc49e5f3d6039ac41edf2a3d3e8c7c66ca150029bb295e4762de60(
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
        ) {
          ((__058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.hidden = !1),
            __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.classList.remove(
              "\u0073\u0068\u006f\u0077",
            ));
          const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = (
            __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.data?.users || []
          ).find(
            (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.uid ===
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 &&
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.guest,
          );
          if (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708) {
            ((__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.selectedUser =
              __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708),
              (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.selectedCapabilities =
                {}));
            const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = Boolean(
                __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.access?.permissions?.includes(
                  "\u006e\u0065\u0074\u0077\u006f\u0072\u006b\u003a\u0062\u0061\u006e\u0073",
                ),
              ),
              __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
                  ? `${__fd9ee09ca3154d8acbc8a5fb3e4bff4461c5df8cfb24f1993fb6b35fed9e447e("\u004c\u0061\u0073\u0074\u0020\u0073\u0065\u0065\u006e\u0020\u0049\u0050", __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.lastSeenIp || "\u004e\u006f\u0074\u0020\u0072\u0065\u0063\u006f\u0072\u0064\u0065\u0064\u0020\u0079\u0065\u0074", "\u0069\u0070\u002d\u0061\u0064\u0064\u0072\u0065\u0073\u0073")}${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.lastSeenIp ? __fd9ee09ca3154d8acbc8a5fb3e4bff4461c5df8cfb24f1993fb6b35fed9e447e("\u0049\u0050\u0020\u006c\u0061\u0073\u0074\u0020\u0073\u0065\u0065\u006e", __0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.lastSeenIpAt)) : ""}`
                  : "",
              __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 =
                __2a7a4197494d8323fea0f175ba188cc62025fc3fcf0d33594407f5566e01d6cc(
                  "",
                  "",
                  (
                    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.displayName ||
                    "\u0047"
                  )
                    .slice(0, 1)
                    .toUpperCase(),
                );
            return (
              (__058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.innerHTML = `<header><div class="n7x-owner-detail-avatar">${__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477}<i class="online"></i></div><div><span>${__bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061("\u0067\u0075\u0065\u0073\u0074")}Guest session</span><h2>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.displayName)}</h2><p class="n7x-owner-drawer-identity">@${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.username)} <span class="n7x-owner-presence-state online"><i></i>Online</span></p></div><button type="button" data-owner-drawer-close aria-label="Close guest details">${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0063\u006c\u006f\u0073\u0065")}</button></header>\n          <div class="n7x-owner-drawer-scroll">\n            <section class="n7x-owner-detail-grid">${__fd9ee09ca3154d8acbc8a5fb3e4bff4461c5df8cfb24f1993fb6b35fed9e447e("\u0049\u0064\u0065\u006e\u0074\u0069\u0074\u0079", __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.displayName)}${__fd9ee09ca3154d8acbc8a5fb3e4bff4461c5df8cfb24f1993fb6b35fed9e447e("\u0047\u0075\u0065\u0073\u0074\u0020\u0049\u0044", `@${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.username}`)}${__fd9ee09ca3154d8acbc8a5fb3e4bff4461c5df8cfb24f1993fb6b35fed9e447e("\u0041\u0063\u0063\u006f\u0075\u006e\u0074", "\u004e\u006f\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0063\u0072\u0065\u0061\u0074\u0065\u0064")}${__fd9ee09ca3154d8acbc8a5fb3e4bff4461c5df8cfb24f1993fb6b35fed9e447e("\u0050\u0072\u0065\u0073\u0065\u006e\u0063\u0065", "\u004f\u006e\u006c\u0069\u006e\u0065\u0020\u006e\u006f\u0077")}${__fd9ee09ca3154d8acbc8a5fb3e4bff4461c5df8cfb24f1993fb6b35fed9e447e("\u0046\u0069\u0072\u0073\u0074\u0020\u0073\u0065\u0065\u006e", __0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.createdAt))}${__fd9ee09ca3154d8acbc8a5fb3e4bff4461c5df8cfb24f1993fb6b35fed9e447e("\u004c\u0061\u0073\u0074\u0020\u0061\u0063\u0074\u0069\u0076\u0065", __0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.lastActiveAt))}${__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c}</section>\n            <section class="n7x-owner-detail-section"><h3>Guest visitor</h3><p class="n7x-owner-action-note">N7X uses the username saved by this browser's startup wizard. If the visitor skipped it, N7X assigns a stable random guest name instead.${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 ? "\u0020\u0054\u0068\u0065\u0020\u006c\u0061\u0073\u0074\u002d\u0073\u0065\u0065\u006e\u0020\u0049\u0050\u0020\u0069\u0073\u0020\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u0020\u006f\u006e\u006c\u0079\u0020\u0074\u006f\u0020\u0073\u0074\u0061\u0066\u0066\u0020\u0077\u0068\u006f\u0020\u0063\u0061\u006e\u0020\u006d\u0061\u006e\u0061\u0067\u0065\u0020\u006e\u0065\u0074\u0077\u006f\u0072\u006b\u0020\u0062\u0061\u006e\u0073\u003b\u0020\u0073\u0068\u0061\u0072\u0065\u0064\u0020\u006f\u0072\u0020\u0063\u0068\u0061\u006e\u0067\u0069\u006e\u0067\u0020\u0049\u0050\u0073\u0020\u006d\u0061\u0079\u0020\u0072\u0065\u0070\u0072\u0065\u0073\u0065\u006e\u0074\u0020\u006d\u006f\u0072\u0065\u0020\u0074\u0068\u0061\u006e\u0020\u006f\u006e\u0065\u0020\u0070\u0065\u0072\u0073\u006f\u006e\u002e" : ""} Account, role, subscription, profile, and account-management controls become available only after the visitor signs in or creates an account.</p></section>\n          </div>`),
              void requestAnimationFrame(() =>
                __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.classList.add(
                  "\u0073\u0068\u006f\u0077",
                ),
              )
            );
          }
          ((__058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.innerHTML =
            "\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0072\u0061\u0077\u0065\u0072\u002d\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u0022\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u002f\u0064\u0069\u0076\u003e"),
            requestAnimationFrame(() =>
              __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.classList.add(
                "\u0073\u0068\u006f\u0077",
              ),
            ));
          try {
            const {
              user: __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
              access: __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7,
              capabilities: __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265 = {},
            } = await __0c823f772d95246c7bf82dc76d301b8902c775f0af8b8524cc7e4f76694c2a56(
              `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/users/${encodeURIComponent(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53)}`,
            );
            ((__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.selectedUser =
              __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708),
              (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.selectedCapabilities =
                __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265),
              (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.access =
                __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 ||
                __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.access));
            const __fcacda08e2d45e2c799c7376996c1a442e687015e3b968de16e67d8f572af52f =
                __2a7a4197494d8323fea0f175ba188cc62025fc3fcf0d33594407f5566e01d6cc(
                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.photoUrl,
                  "",
                  (
                    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.displayName ||
                    "\u003f"
                  )
                    .slice(0, 1)
                    .toUpperCase(),
                ),
              __b1f802c665f7bebd541821d1b764ada73ffb4fa83e79200016911a5f9dfb544c =
                __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7?.assignableRoles ||
                [],
              __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d =
                __b1f802c665f7bebd541821d1b764ada73ffb4fa83e79200016911a5f9dfb544c
                  .map(
                    (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) =>
                      `<option value="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53)}"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.role, __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53)}>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53))}</option>`,
                  )
                  .join(""),
              __34168c7d57200d99fd97b1ec555dbf09aa9a16d1cadcc54b0e6b2db76e926d02 =
                __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7?.founder
                  ? __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.customRoles
                      .map(
                        (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) =>
                          `<option value="custom:${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.id)}"${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.customRole?.id === __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.id ? "\u0020\u0073\u0065\u006c\u0065\u0063\u0074\u0065\u0064" : ""}>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.label)} \xb7 ${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.baseRole))} placement</option>`,
                      )
                      .join("")
                  : "",
              __f2e5429bdd2ce4cd74b00d064941e11cca8a1f7f3d979f1aa03955b7bbd1e125 =
                __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.customRole
                  ? `custom:${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.customRole.id}`
                  : __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.role,
              __ba6eb875a7e89361f0de035163d6ce786417e0fb5b2f10611696ddf4ba3a3d04 =
                __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.customRole ||
                __b1f802c665f7bebd541821d1b764ada73ffb4fa83e79200016911a5f9dfb544c.includes(
                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.role,
                )
                  ? ""
                  : `<option value="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.role)}" selected disabled>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.role))}</option>`,
              __bcf751aebeabec4b332852f23d7c45ad6561bc8cb9ea5c88776985439bed6c6b =
                __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265.canSetRole ||
                __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265.canSetSubscription
                  ? `<section class="n7x-owner-detail-section"><h3>Access</h3>\n          ${
                      __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265.canSetRole
                        ? `<label>Current role<select data-owner-detail-role>${__da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d}${__34168c7d57200d99fd97b1ec555dbf09aa9a16d1cadcc54b0e6b2db76e926d02}${__ba6eb875a7e89361f0de035163d6ce786417e0fb5b2f10611696ddf4ba3a3d04}</select></label>${((
                            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = [],
                          ) => {
                            const __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 =
                                new Set(
                                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
                                ),
                              __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 =
                                __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.filter(
                                  (
                                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                                  ) =>
                                    __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.has(
                                      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                                    ) ||
                                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f ===
                                      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                                );
                            return `<div class="n7x-owner-role-options" role="radiogroup" aria-label="Account role">${__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.map((__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708) => `<button class="role-${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708)}${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 === __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 ? "\u0020\u0061\u0063\u0074\u0069\u0076\u0065" : ""}" type="button" role="radio" aria-checked="${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 === __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708}" data-owner-role-option="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708)}" ${__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.has(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708) ? "" : "\u0064\u0069\u0073\u0061\u0062\u006c\u0065\u0064"}>${__bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708)}<span>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708))}</span></button>`).join("")}${"\u006f\u0077\u006e\u0065\u0072" !== __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 || __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.includes("\u006f\u0077\u006e\u0065\u0072") ? "" : `<button class="role-owner active" type="button" role="radio" aria-checked="true" disabled>${__bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061("\u006f\u0077\u006e\u0065\u0072")}<span>Owner</span></button>`}</div>`;
                          })(
                            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.role,
                            __b1f802c665f7bebd541821d1b764ada73ffb4fa83e79200016911a5f9dfb544c,
                          )}`
                        : `<p class="n7x-owner-action-note">Role: ${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708))}</p>`
                    }\n          ${__6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265.canSetSubscription ? `<label>Subscription<select data-owner-detail-subscription><option value="free">Free</option><option value="premium">Premium</option><option value="trialing">Trial</option><option value="past_due">Past due</option><option value="canceled">Canceled</option></select></label><p class="n7x-owner-premium-note">Premium and Trial accounts receive Premium benefits automatically when they sign in. They do not need a Premium access code.</p><label>Monthly revenue <input data-owner-detail-revenue type="number" min="0" step="0.01" value="${((__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.monthlyRevenueCents || 0) / 100).toFixed(2)}"></label>` : `<p class="n7x-owner-action-note">Subscription: ${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.subscriptionStatus))}</p>`}\n          <div class="n7x-owner-detail-actions"><button type="button" data-owner-save-access>${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0073\u0061\u0076\u0065")}Save access</button></div></section>`
                  : "",
              __05ee36660b117e5e52942669e0936e5d17a4d69ad10ac56aca85f26a4b423b95 = [
                __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265.canSetPassword
                  ? `<button type="button" data-owner-user-action="set_password">${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u006b\u0065\u0079")}Set custom password</button>`
                  : "",
                __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265.canResetPassword
                  ? `<button type="button" data-owner-user-action="create_password_reset_link">${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u006b\u0065\u0079")}Create reset link</button>`
                  : "",
                __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265.canResetPassword
                  ? `<button type="button" data-owner-user-action="send_password_reset" ${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.deliverableEmail ? "" : "\u0064\u0069\u0073\u0061\u0062\u006c\u0065\u0064"}>${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u006d\u0061\u0069\u006c")}Email reset link</button>`
                  : "",
                __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265.canVerifyEmail
                  ? `<button type="button" data-owner-user-action="verify_email" ${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.emailVerified || !__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.deliverableEmail ? "\u0064\u0069\u0073\u0061\u0062\u006c\u0065\u0064" : ""}>${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0063\u0068\u0065\u0063\u006b")}Verify email</button>`
                  : "",
                __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265.canManageAiAccess
                  ? `<button type="button" data-owner-user-action="ai_trust" ${"\u0074\u0072\u0075\u0073\u0074\u0065\u0064" === __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.aiAccess ? "\u0064\u0069\u0073\u0061\u0062\u006c\u0065\u0064" : ""}>${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0063\u0068\u0065\u0063\u006b")}Approve AI allowance</button><button type="button" data-owner-user-action="ai_restrict" ${"\u0072\u0065\u0073\u0074\u0072\u0069\u0063\u0074\u0065\u0064" === __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.aiAccess ? "\u0064\u0069\u0073\u0061\u0062\u006c\u0065\u0064" : ""}>${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0075\u0073\u0065\u0072\u004f\u0066\u0066")}Restrict shared AI</button><button type="button" data-owner-user-action="ai_reset" ${"\u0061\u0075\u0074\u006f\u006d\u0061\u0074\u0069\u0063" === __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.aiAccess ? "\u0064\u0069\u0073\u0061\u0062\u006c\u0065\u0064" : ""}>${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0072\u0065\u0066\u0072\u0065\u0073\u0068")}Automatic AI access</button>`
                  : "",
                __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265.canDisableAccount
                  ? `<button type="button" data-owner-user-action="${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.disabled ? "\u0065\u006e\u0061\u0062\u006c\u0065" : "\u0064\u0069\u0073\u0061\u0062\u006c\u0065"}">${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.disabled ? "\u0075\u0073\u0065\u0072\u0043\u0068\u0065\u0063\u006b" : "\u0075\u0073\u0065\u0072\u004f\u0066\u0066")}${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.disabled ? "\u0052\u0065\u002d\u0065\u006e\u0061\u0062\u006c\u0065\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074" : "\u0044\u0069\u0073\u0061\u0062\u006c\u0065\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074"}</button>`
                  : "",
                __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265.canDisableAccount &&
                !__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.disabled
                  ? `<button class="danger" type="button" data-owner-user-action="ban">${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0062\u0061\u006e")}Ban account</button>`
                  : "",
                __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265.canDisableAccount &&
                __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265.canManageNetworkBans &&
                !__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.disabled &&
                __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.lastSeenIp
                  ? `<button class="danger" type="button" data-owner-user-action="disable_with_ip_ban">${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0062\u0061\u006e")}Disable + block IP</button>`
                  : "",
                __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265.canDeleteAccount
                  ? `<button class="danger" type="button" data-owner-user-action="delete">${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0074\u0072\u0061\u0073\u0068")}Delete account</button>`
                  : "",
              ]
                .filter(Boolean)
                .join(""),
              __ad9ad1be7ee30eec85277bc3e45643b93f1e672f37edcd784ad8a56fd9b91303 =
                __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265.canManageNetworkBans
                  ? __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.lastSeenIp
                    ? `<p class="n7x-owner-action-note">Last seen IP: ${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.lastSeenIp)} \xb7 ${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.lastSeenIpAt))}. IP addresses can be shared or change over time.</p>`
                    : "\u003c\u0070\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0061\u0063\u0074\u0069\u006f\u006e\u002d\u006e\u006f\u0074\u0065\u0022\u003e\u004e\u006f\u0020\u0049\u0050\u0020\u0068\u0061\u0073\u0020\u0062\u0065\u0065\u006e\u0020\u0072\u0065\u0063\u006f\u0072\u0064\u0065\u0064\u0020\u0066\u006f\u0072\u0020\u0074\u0068\u0069\u0073\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0079\u0065\u0074\u002e\u0020\u004e\u0037\u0058\u0020\u0072\u0065\u0063\u006f\u0072\u0064\u0073\u0020\u006f\u006e\u0065\u0020\u0061\u0066\u0074\u0065\u0072\u0020\u0069\u0074\u0073\u0020\u006e\u0065\u0078\u0074\u0020\u0061\u0075\u0074\u0068\u0065\u006e\u0074\u0069\u0063\u0061\u0074\u0065\u0064\u0020\u0061\u0063\u0074\u0069\u0076\u0069\u0074\u0079\u002e\u003c\u002f\u0070\u003e"
                  : "",
              __70b7492fd2afd801b49aa54e66cb092c2877957e19d82afc2d22bf34f272c5f0 =
                __05ee36660b117e5e52942669e0936e5d17a4d69ad10ac56aca85f26a4b423b95
                  ? `<section class="n7x-owner-detail-section"><h3>Account actions</h3>${!__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.deliverableEmail && __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265.canResetPassword ? "\u003c\u0070\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0061\u0063\u0074\u0069\u006f\u006e\u002d\u006e\u006f\u0074\u0065\u0022\u003e\u0054\u0068\u0069\u0073\u0020\u0075\u0073\u0065\u0072\u006e\u0061\u006d\u0065\u002d\u006f\u006e\u006c\u0079\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0068\u0061\u0073\u0020\u006e\u006f\u0020\u0069\u006e\u0062\u006f\u0078\u002e\u0020\u0043\u0072\u0065\u0061\u0074\u0065\u0020\u0061\u0020\u0073\u0065\u0063\u0075\u0072\u0065\u0020\u0072\u0065\u0073\u0065\u0074\u0020\u006c\u0069\u006e\u006b\u0020\u0061\u006e\u0064\u0020\u0067\u0069\u0076\u0065\u0020\u0069\u0074\u0020\u0064\u0069\u0072\u0065\u0063\u0074\u006c\u0079\u0020\u0074\u006f\u0020\u0074\u0068\u0065\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u006f\u0077\u006e\u0065\u0072\u002e\u003c\u002f\u0070\u003e" : ""}${__ad9ad1be7ee30eec85277bc3e45643b93f1e672f37edcd784ad8a56fd9b91303}<div class="n7x-owner-action-grid">${__05ee36660b117e5e52942669e0936e5d17a4d69ad10ac56aca85f26a4b423b95}</div></section>`
                  : "",
              __6d22a32ba0cc8ebd5fdef651fde57b13c6fe6f4d25c11937d9f218d9f96ae615 =
                __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265.canViewAudit
                  ? `<section class="n7x-owner-detail-section"><h3>Recent user activity</h3><div class="n7x-owner-user-activity">${(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.recentActivity || []).length ? __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.recentActivity.map((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) => `<p><strong>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.action))}</strong><span>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.createdAt))}</span></p>`).join("") : "\u003c\u0073\u0070\u0061\u006e\u003e\u004e\u006f\u0020\u0072\u0065\u0063\u006f\u0072\u0064\u0065\u0064\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0061\u0063\u0074\u0069\u006f\u006e\u0073\u002e\u003c\u002f\u0073\u0070\u0061\u006e\u003e"}</div></section>`
                  : "";
            __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.innerHTML = `<header><div class="n7x-owner-detail-avatar">${__fcacda08e2d45e2c799c7376996c1a442e687015e3b968de16e67d8f572af52f}<i class="${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.online ? "\u006f\u006e\u006c\u0069\u006e\u0065" : ""}"></i></div><div><span>${__bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.role)}<span class="n7x-minecraft-text">${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708))}</span> account</span><h2>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.displayName)}</h2><p class="n7x-owner-drawer-identity">@${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.username)} <span class="n7x-owner-presence-state ${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.online ? "\u006f\u006e\u006c\u0069\u006e\u0065" : "\u006f\u0066\u0066\u006c\u0069\u006e\u0065"}"><i></i>${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.online ? "\u004f\u006e\u006c\u0069\u006e\u0065" : "\u004f\u0066\u0066\u006c\u0069\u006e\u0065"}</span></p></div><button type="button" data-owner-drawer-close aria-label="Close user details">${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0063\u006c\u006f\u0073\u0065")}</button></header>\n          <div class="n7x-owner-drawer-scroll">\n            <section class="n7x-owner-detail-grid">${__fd9ee09ca3154d8acbc8a5fb3e4bff4461c5df8cfb24f1993fb6b35fed9e447e("\u0045\u006d\u0061\u0069\u006c", __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.deliverableEmail ? __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.email : "\u004e\u006f\u0020\u0065\u006d\u0061\u0069\u006c\u0020\u0061\u0064\u0064\u0065\u0064")}${__fd9ee09ca3154d8acbc8a5fb3e4bff4461c5df8cfb24f1993fb6b35fed9e447e("\u0046\u0069\u0072\u0065\u0062\u0061\u0073\u0065\u0020\u0055\u0049\u0044", __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.uid, "\u0075\u0069\u0064")}${__fd9ee09ca3154d8acbc8a5fb3e4bff4461c5df8cfb24f1993fb6b35fed9e447e("\u0050\u0072\u0065\u0073\u0065\u006e\u0063\u0065", __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.online ? "\u004f\u006e\u006c\u0069\u006e\u0065\u0020\u006e\u006f\u0077" : "\u004f\u0066\u0066\u006c\u0069\u006e\u0065")}${__fd9ee09ca3154d8acbc8a5fb3e4bff4461c5df8cfb24f1993fb6b35fed9e447e("\u004c\u0061\u0073\u0074\u0020\u0073\u0069\u0067\u006e\u002d\u0069\u006e", __0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.lastSignInAt))}${__fd9ee09ca3154d8acbc8a5fb3e4bff4461c5df8cfb24f1993fb6b35fed9e447e("\u004c\u0061\u0073\u0074\u0020\u0061\u0063\u0074\u0069\u0076\u0065", __0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.lastActiveAt))}${__6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265.canManageNetworkBans ? __fd9ee09ca3154d8acbc8a5fb3e4bff4461c5df8cfb24f1993fb6b35fed9e447e("\u004c\u0061\u0073\u0074\u0020\u0073\u0065\u0065\u006e\u0020\u0049\u0050", __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.lastSeenIp || "\u004e\u006f\u0074\u0020\u0072\u0065\u0063\u006f\u0072\u0064\u0065\u0064\u0020\u0079\u0065\u0074", "\u0069\u0070\u002d\u0061\u0064\u0064\u0072\u0065\u0073\u0073") : ""}${__6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265.canManageNetworkBans && __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.lastSeenIp ? __fd9ee09ca3154d8acbc8a5fb3e4bff4461c5df8cfb24f1993fb6b35fed9e447e("\u0049\u0050\u0020\u006c\u0061\u0073\u0074\u0020\u0073\u0065\u0065\u006e", __0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.lastSeenIpAt)) : ""}${__fd9ee09ca3154d8acbc8a5fb3e4bff4461c5df8cfb24f1993fb6b35fed9e447e("\u0045\u006d\u0061\u0069\u006c\u0020\u0076\u0065\u0072\u0069\u0066\u0069\u0065\u0064", __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.deliverableEmail ? (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.emailVerified ? "\u0056\u0065\u0072\u0069\u0066\u0069\u0065\u0064" : "\u004e\u006f\u0074\u0020\u0076\u0065\u0072\u0069\u0066\u0069\u0065\u0064") : "\u004e\u006f\u0074\u0020\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0062\u006c\u0065\u0020\u00b7\u0020\u0075\u0073\u0065\u0072\u006e\u0061\u006d\u0065\u002d\u006f\u006e\u006c\u0079")}</section>\n            <section class="n7x-owner-detail-section n7x-owner-profile-management"><h3>Public profile</h3>${(function (
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
            ) {
              const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.profile || {},
                __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
                  __1706c147bd8ead491de48b9738e6537e36d04ed7843e503f86011a36f4ae7181(
                    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.accentPrimary,
                    "\u0023\u0035\u0038\u0036\u0035\u0066\u0032",
                  ),
                __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 =
                  __1706c147bd8ead491de48b9738e6537e36d04ed7843e503f86011a36f4ae7181(
                    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.accentSecondary,
                    "\u0023\u0038\u0065\u0061\u0031\u0066\u0066",
                  ),
                __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 =
                  __1706c147bd8ead491de48b9738e6537e36d04ed7843e503f86011a36f4ae7181(
                    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.bannerColor,
                    __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766,
                  ),
                __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 =
                  __1706c147bd8ead491de48b9738e6537e36d04ed7843e503f86011a36f4ae7181(
                    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.displayNameColorPrimary,
                    "\u0023\u0066\u0066\u0066\u0066\u0066\u0066",
                  ),
                __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e =
                  __1706c147bd8ead491de48b9738e6537e36d04ed7843e503f86011a36f4ae7181(
                    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.displayNameColorSecondary,
                    __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766,
                  ),
                __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22 =
                  __1706c147bd8ead491de48b9738e6537e36d04ed7843e503f86011a36f4ae7181(
                    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.customEffectColorPrimary,
                    "\u0023\u0066\u0066\u0066\u0066\u0066\u0066",
                  ),
                __0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba =
                  __1706c147bd8ead491de48b9738e6537e36d04ed7843e503f86011a36f4ae7181(
                    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.customEffectColorSecondary,
                    __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766,
                  ),
                __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e = String(
                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.profileEffect ||
                    "\u006e\u006f\u006e\u0065",
                ).toLowerCase(),
                __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265 = String(
                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.avatarDecoration ||
                    "\u006e\u006f\u006e\u0065",
                ).toLowerCase(),
                __fcacda08e2d45e2c799c7376996c1a442e687015e3b968de16e67d8f572af52f = String(
                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.displayNameFont ||
                    "\u0067\u0067\u002d\u0073\u0061\u006e\u0073",
                ).toLowerCase(),
                __b1f802c665f7bebd541821d1b764ada73ffb4fa83e79200016911a5f9dfb544c = String(
                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.displayNameEffect ||
                    "\u0073\u006f\u006c\u0069\u0064",
                ).toLowerCase(),
                __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544 = Math.max(
                  2,
                  Math.min(
                    18,
                    Number(
                      __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.customEffectSpeed,
                    ) || 7,
                  ),
                ),
                __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d = Math.max(
                  20,
                  Math.min(
                    100,
                    Number(
                      __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.customEffectIntensity,
                    ) || 70,
                  ),
                ),
                __3c22b3f87a34fd589b28089a6e1fe9407580da47a00ca8a13ab4e306192fb487 =
                  __2a7a4197494d8323fea0f175ba188cc62025fc3fcf0d33594407f5566e01d6cc(
                    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.avatarUrl,
                    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.displayName ||
                      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.displayName,
                    (
                      __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.displayName ||
                      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.displayName ||
                      "\u003f"
                    )
                      .slice(0, 1)
                      .toUpperCase(),
                  ),
                __34168c7d57200d99fd97b1ec555dbf09aa9a16d1cadcc54b0e6b2db76e926d02 =
                  __2a7a4197494d8323fea0f175ba188cc62025fc3fcf0d33594407f5566e01d6cc(
                    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.bannerUrl,
                    "",
                  );
              return `<article class="n7x-owner-public-profile n7x-owner-effect-${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e)}" style="--profile-primary:${__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c};--profile-secondary:${__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766};--profile-banner:${__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7};--profile-name-primary:${__78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106};--profile-name-secondary:${__195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e};--profile-custom-primary:${__d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22};--profile-custom-secondary:${__0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba};--profile-effect-speed:${__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544}s;--profile-effect-opacity:${__da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d / 100}">\n        <i class="n7x-owner-public-effect" aria-hidden="true"></i>\n        <div class="n7x-owner-public-banner">${__34168c7d57200d99fd97b1ec555dbf09aa9a16d1cadcc54b0e6b2db76e926d02}</div>\n        <div class="n7x-owner-public-avatar n7x-owner-decoration-${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265)}">${__3c22b3f87a34fd589b28089a6e1fe9407580da47a00ca8a13ab4e306192fb487}<em aria-hidden="true"></em><i class="${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.online ? "\u006f\u006e\u006c\u0069\u006e\u0065" : ""}"></i></div>\n        <div class="n7x-owner-public-body">\n          <strong class="n7x-owner-name-font-${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__fcacda08e2d45e2c799c7376996c1a442e687015e3b968de16e67d8f572af52f)} n7x-owner-name-effect-${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__b1f802c665f7bebd541821d1b764ada73ffb4fa83e79200016911a5f9dfb544c)}">${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.displayName || __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.displayName)}</strong>\n          <span>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.handle || `@${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.username}`)}</span>\n          ${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.customStatus ? `<p class="status">${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.customStatus)}</p>` : ""}\n          <div><b>About me</b><p>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.bio || "\u004e\u006f\u0020\u0062\u0069\u006f\u0020\u0079\u0065\u0074\u002e")}</p></div>\n          <small>${__bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.role)}${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.role))} \xb7 ${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.online ? "\u004f\u006e\u006c\u0069\u006e\u0065" : "\u004f\u0066\u0066\u006c\u0069\u006e\u0065"}</small>\n        </div>\n      </article>`;
            })(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708)}${
              __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265.canEditProfile
                ? `<details><summary>Edit this profile</summary>${(function (
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                  ) {
                    const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
                        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.profile ||
                        {},
                      __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
                        /^https?:\/\//i.test(
                          String(
                            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.avatarUrl ||
                              "",
                          ),
                        )
                          ? __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.avatarUrl
                          : "",
                      __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 =
                        /^https?:\/\//i.test(
                          String(
                            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.bannerUrl ||
                              "",
                          ),
                        )
                          ? __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.bannerUrl
                          : "",
                      __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 =
                        __2a7a4197494d8323fea0f175ba188cc62025fc3fcf0d33594407f5566e01d6cc(
                          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.avatarUrl,
                          "\u0043\u0075\u0072\u0072\u0065\u006e\u0074\u0020\u0061\u0076\u0061\u0074\u0061\u0072",
                          (
                            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.displayName ||
                            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.displayName ||
                            "\u003f"
                          )
                            .slice(0, 1)
                            .toUpperCase(),
                        ),
                      __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 =
                        __2a7a4197494d8323fea0f175ba188cc62025fc3fcf0d33594407f5566e01d6cc(
                          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.bannerUrl,
                          "\u0043\u0075\u0072\u0072\u0065\u006e\u0074\u0020\u0062\u0061\u006e\u006e\u0065\u0072",
                        ),
                      __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 = `n7x-owner-avatar-${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.uid)}`,
                      __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 = `n7x-owner-banner-${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.uid)}`;
                    return `<form class="n7x-owner-profile-editor" data-owner-profile-form>\n        <div class="n7x-owner-media-editors">\n          <article class="n7x-owner-media-editor">\n            <div class="n7x-owner-media-preview avatar" data-owner-media-preview="avatar">${__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766}</div>\n            <div><strong>Profile avatar</strong><span data-owner-media-name="avatar">PNG, JPG, WebP, or animated GIF \xb7 8 MB max</span></div>\n            <label class="n7x-owner-media-button" for="${__bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061}">Choose avatar</label>\n            <input class="n7x-owner-media-input" id="${__bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061}" name="avatarFile" type="file" accept="image/png,image/jpeg,image/webp,image/gif">\n          </article>\n          <article class="n7x-owner-media-editor banner">\n            <div class="n7x-owner-media-preview banner" data-owner-media-preview="banner" style="--owner-banner-preview:${__1706c147bd8ead491de48b9738e6537e36d04ed7843e503f86011a36f4ae7181(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.bannerColor, "\u0023\u0038\u0065\u0061\u0031\u0066\u0066")}">${__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7}</div>\n            <div><strong>Profile banner</strong><span data-owner-media-name="banner">PNG, JPG, WebP, or animated GIF \xb7 8 MB max</span></div>\n            <label class="n7x-owner-media-button" for="${__78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106}">Choose banner</label>\n            <input class="n7x-owner-media-input" id="${__78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106}" name="bannerFile" type="file" accept="image/png,image/jpeg,image/webp,image/gif">\n          </article>\n        </div>\n        <p class="n7x-owner-media-error" data-owner-media-error role="alert"></p>\n        <div class="n7x-owner-profile-fields">\n          <label>Display name<input name="displayName" maxlength="48" required value="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.displayName || __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.displayName)}"></label>\n          <label>Username<span class="n7x-owner-prefixed-input"><i>@</i><input name="handle" maxlength="32" required value="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(String(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.handle || __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.username).replace(/^@/, ""))}"></span></label>\n          <label class="wide">About me<textarea name="bio" maxlength="280" rows="4">${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.bio || "")}</textarea></label>\n          <label class="wide">Custom status<input name="customStatus" maxlength="80" value="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.customStatus || "")}"></label>\n          <label>Status<select name="status"><option value="online"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.status, "\u006f\u006e\u006c\u0069\u006e\u0065")}>Online</option><option value="idle"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.status, "\u0069\u0064\u006c\u0065")}>Idle</option><option value="dnd"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.status, "\u0064\u006e\u0064")}>Do not disturb</option><option value="offline"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.status, "\u006f\u0066\u0066\u006c\u0069\u006e\u0065")}>Offline</option></select></label>\n          <label>Name style<select name="displayNameFont"><option value="gg-sans"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.displayNameFont, "\u0067\u0067\u002d\u0073\u0061\u006e\u0073")}>Default</option><option value="headline"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.displayNameFont, "\u0068\u0065\u0061\u0064\u006c\u0069\u006e\u0065")}>Headline</option><option value="rounded"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.displayNameFont, "\u0072\u006f\u0075\u006e\u0064\u0065\u0064")}>Rounded</option><option value="wide"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.displayNameFont, "\u0077\u0069\u0064\u0065")}>Wide</option><option value="slab"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.displayNameFont, "\u0073\u006c\u0061\u0062")}>Slab</option><option value="condensed"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.displayNameFont, "\u0063\u006f\u006e\u0064\u0065\u006e\u0073\u0065\u0064")}>Condensed</option><option value="mono-block"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.displayNameFont, "\u006d\u006f\u006e\u006f\u002d\u0062\u006c\u006f\u0063\u006b")}>Mono block</option><option value="tempo"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.displayNameFont, "\u0074\u0065\u006d\u0070\u006f")}>Tempo</option><option value="sakura"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.displayNameFont, "\u0073\u0061\u006b\u0075\u0072\u0061")}>Sakura</option><option value="jellybean"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.displayNameFont, "\u006a\u0065\u006c\u006c\u0079\u0062\u0065\u0061\u006e")}>Jellybean</option><option value="modern"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.displayNameFont, "\u006d\u006f\u0064\u0065\u0072\u006e")}>Modern</option><option value="medieval"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.displayNameFont, "\u006d\u0065\u0064\u0069\u0065\u0076\u0061\u006c")}>Medieval</option><option value="eight-bit"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.displayNameFont, "\u0065\u0069\u0067\u0068\u0074\u002d\u0062\u0069\u0074")}>Eight bit</option><option value="vampyre"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.displayNameFont, "\u0076\u0061\u006d\u0070\u0079\u0072\u0065")}>Vampyre</option></select></label>\n          <label>Primary color<input name="accentPrimary" type="color" value="${__1706c147bd8ead491de48b9738e6537e36d04ed7843e503f86011a36f4ae7181(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.accentPrimary, "\u0023\u0035\u0038\u0036\u0035\u0066\u0032")}"></label>\n          <label>Accent color<input name="accentSecondary" type="color" value="${__1706c147bd8ead491de48b9738e6537e36d04ed7843e503f86011a36f4ae7181(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.accentSecondary, "\u0023\u0038\u0065\u0061\u0031\u0066\u0066")}"></label>\n          <label>Banner fallback<input name="bannerColor" type="color" value="${__1706c147bd8ead491de48b9738e6537e36d04ed7843e503f86011a36f4ae7181(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.bannerColor, "\u0023\u0038\u0065\u0061\u0031\u0066\u0066")}"></label>\n          <label>Name effect<select name="displayNameEffect"><option value="solid"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.displayNameEffect, "\u0073\u006f\u006c\u0069\u0064")}>Solid</option><option value="gradient"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.displayNameEffect, "\u0067\u0072\u0061\u0064\u0069\u0065\u006e\u0074")}>Gradient</option><option value="neon"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.displayNameEffect, "\u006e\u0065\u006f\u006e")}>Neon</option><option value="toon"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.displayNameEffect, "\u0074\u006f\u006f\u006e")}>Toon</option><option value="pop"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.displayNameEffect, "\u0070\u006f\u0070")}>Pop</option></select></label>\n          <label>Profile effect<select name="profileEffect"><option value="none"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.profileEffect, "\u006e\u006f\u006e\u0065")}>None</option><option value="glow"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.profileEffect, "\u0067\u006c\u006f\u0077")}>Glow</option><option value="sparkle"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.profileEffect, "\u0073\u0070\u0061\u0072\u006b\u006c\u0065")}>Sparkle</option><option value="aurora"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.profileEffect, "\u0061\u0075\u0072\u006f\u0072\u0061")}>Aurora</option><option value="holographic"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.profileEffect, "\u0068\u006f\u006c\u006f\u0067\u0072\u0061\u0070\u0068\u0069\u0063")}>Holographic</option><option value="fireflies"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.profileEffect, "\u0066\u0069\u0072\u0065\u0066\u006c\u0069\u0065\u0073")}>Fireflies</option><option value="cosmic-dust"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.profileEffect, "\u0063\u006f\u0073\u006d\u0069\u0063\u002d\u0064\u0075\u0073\u0074")}>Cosmic dust</option><option value="electric-storm"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.profileEffect, "\u0065\u006c\u0065\u0063\u0074\u0072\u0069\u0063\u002d\u0073\u0074\u006f\u0072\u006d")}>Electric storm</option><option value="meteor-shower"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.profileEffect, "\u006d\u0065\u0074\u0065\u006f\u0072\u002d\u0073\u0068\u006f\u0077\u0065\u0072")}>Meteor shower</option><option value="cyber-grid"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.profileEffect, "\u0063\u0079\u0062\u0065\u0072\u002d\u0067\u0072\u0069\u0064")}>Cyber grid</option><option value="plasma"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.profileEffect, "\u0070\u006c\u0061\u0073\u006d\u0061")}>Plasma</option><option value="snowfall"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.profileEffect, "\u0073\u006e\u006f\u0077\u0066\u0061\u006c\u006c")}>Snowfall</option><option value="embers"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.profileEffect, "\u0065\u006d\u0062\u0065\u0072\u0073")}>Embers</option><option value="bubbles"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.profileEffect, "\u0062\u0075\u0062\u0062\u006c\u0065\u0073")}>Bubbles</option><option value="custom"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.profileEffect, "\u0063\u0075\u0073\u0074\u006f\u006d")}>Custom</option></select></label>\n          <label>Avatar decoration<select name="avatarDecoration"><option value="none"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.avatarDecoration, "\u006e\u006f\u006e\u0065")}>None</option><option value="starfall"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.avatarDecoration, "\u0073\u0074\u0061\u0072\u0066\u0061\u006c\u006c")}>Starfall</option><option value="orbit"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.avatarDecoration, "\u006f\u0072\u0062\u0069\u0074")}>Orbit</option><option value="laurel"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.avatarDecoration, "\u006c\u0061\u0075\u0072\u0065\u006c")}>Laurel</option><option value="neon-wings"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.avatarDecoration, "\u006e\u0065\u006f\u006e\u002d\u0077\u0069\u006e\u0067\u0073")}>Neon wings</option></select></label>\n          <label class="wide">Avatar URL (optional)<input name="avatarUrl" type="url" placeholder="Leave blank to keep the current image" value="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c)}"></label>\n          <label class="wide">Banner URL (optional)<input name="bannerUrl" type="url" placeholder="Leave blank to keep the current image" value="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477)}"></label>\n        </div>\n        <div class="n7x-owner-media-removal">\n          <label><input name="removeAvatar" type="checkbox"> Remove current avatar</label>\n          <label><input name="removeBanner" type="checkbox"> Remove current banner</label>\n        </div>\n        <p>File uploads preserve animated GIFs. A selected file takes priority over its URL field, and blank fields keep the current media unchanged.</p>\n        <div class="n7x-owner-detail-actions"><button type="submit">Save profile</button></div>\n      </form>`;
                  })(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708)}</details>`
                : ""
            }</section>\n            ${__bcf751aebeabec4b332852f23d7c45ad6561bc8cb9ea5c88776985439bed6c6b}\n            ${
              __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265.canSetAiLimit
                ? (function (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) {
                    return `<section class="n7x-owner-detail-section"><h3>AI models and limits</h3><p>Allow grants this model to this account. Block removes access. Default follows the account plan. Blank limits add no extra message cap; shared token, spending and rate limits still apply.</p><div class="n7x-owner-ai-rules">${(
                      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.aiAssignableModels ||
                      []
                    )
                      .map((__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708) => {
                        const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c = (
                          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.aiModelRules ||
                          []
                        ).find(
                          (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
                            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.model ===
                            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
                        ) || {
                          access: "\u0064\u0065\u0066\u0061\u0075\u006c\u0074",
                          messages: null,
                          periodDays: 4,
                        };
                        return `<details data-ai-model="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708)}"><summary>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708)} <small>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.access)}${null !== __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.messages ? "\u0020\u002f\u0020" + __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.messages + "\u0020\u006d\u0065\u0073\u0073\u0061\u0067\u0065\u0073" : ""}</small></summary><div class="n7x-owner-ai-rule-fields"><label>Access<select data-ai-rule-access>${["\u0064\u0065\u0066\u0061\u0075\u006c\u0074", "\u0061\u006c\u006c\u006f\u0077", "\u0064\u0065\u006e\u0079"].map((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => `<option value="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f}"${__88b8d9347b055b5458a42674b5b9a8d5aa3996a709512b69047b4f9d3ed4e9fb(__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.access, __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f)}>${"\u0064\u0065\u006e\u0079" === __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f ? "\u0042\u006c\u006f\u0063\u006b" : "\u0061\u006c\u006c\u006f\u0077" === __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f ? "\u0041\u006c\u006c\u006f\u0077" : "\u0044\u0065\u0066\u0061\u0075\u006c\u0074"}</option>`).join("")}</select></label><label>Messages per period<input data-ai-rule-messages type="number" min="0" max="100000" step="1" placeholder="No extra cap" value="${__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.messages ?? ""}"></label><label>Reset every (days)<input data-ai-rule-days type="number" min="1" max="30" step="1" value="${__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.periodDays}"></label></div></details>`;
                      })
                      .join(
                        "",
                      )}</div><div class="n7x-owner-detail-actions"><button type="button" data-owner-save-ai-models>Save AI access</button><button type="button" data-owner-ai-activity>View usage and chat history</button></div><div data-owner-ai-activity-result aria-live="polite"></div></section>`;
                  })(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708)
                : ""
            }\n            ${__70b7492fd2afd801b49aa54e66cb092c2877957e19d82afc2d22bf34f272c5f0}\n            ${__6d22a32ba0cc8ebd5fdef651fde57b13c6fe6f4d25c11937d9f218d9f96ae615}\n          </div>`;
            const __fbc53bfbe963d655ef9e75540634d95a0e7633a0eb7492033434599de806060e =
                __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.querySelector(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0065\u0074\u0061\u0069\u006c\u002d\u0072\u006f\u006c\u0065\u005d",
                ),
              __39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd =
                __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.querySelector(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0065\u0074\u0061\u0069\u006c\u002d\u0073\u0075\u0062\u0073\u0063\u0072\u0069\u0070\u0074\u0069\u006f\u006e\u005d",
                ),
              __9f14cf239d210677b549719b00bd34c2dd1d76e12d1d8883e1924f06c38a9efd =
                __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.querySelector(
                  "\u005b\u006e\u0061\u006d\u0065\u003d\u0022\u0070\u0072\u006f\u0066\u0069\u006c\u0065\u0045\u0066\u0066\u0065\u0063\u0074\u0022\u005d",
                );
            (__9f14cf239d210677b549719b00bd34c2dd1d76e12d1d8883e1924f06c38a9efd
              ?.querySelector("\u005b\u0076\u0061\u006c\u0075\u0065\u003d\u0022\u0063\u0075\u0073\u0074\u006f\u006d\u0022\u005d")
              ?.insertAdjacentHTML(
                "\u0062\u0065\u0066\u006f\u0072\u0065\u0062\u0065\u0067\u0069\u006e",
                "\u003c\u006f\u0070\u0074\u0069\u006f\u006e\u0020\u0076\u0061\u006c\u0075\u0065\u003d\u0022\u0073\u0074\u0061\u0072\u006c\u0069\u0067\u0068\u0074\u002d\u0072\u0069\u0062\u0062\u006f\u006e\u0022\u003e\u0053\u0074\u0061\u0072\u006c\u0069\u0067\u0068\u0074\u0020\u0072\u0069\u0062\u0062\u006f\u006e\u003c\u002f\u006f\u0070\u0074\u0069\u006f\u006e\u003e\u003c\u006f\u0070\u0074\u0069\u006f\u006e\u0020\u0076\u0061\u006c\u0075\u0065\u003d\u0022\u0063\u0068\u0065\u0072\u0072\u0079\u002d\u0062\u006c\u006f\u006f\u006d\u0022\u003e\u0043\u0068\u0065\u0072\u0072\u0079\u0020\u0062\u006c\u006f\u006f\u006d\u003c\u002f\u006f\u0070\u0074\u0069\u006f\u006e\u003e\u003c\u006f\u0070\u0074\u0069\u006f\u006e\u0020\u0076\u0061\u006c\u0075\u0065\u003d\u0022\u006f\u0063\u0065\u0061\u006e\u002d\u0063\u0061\u0075\u0073\u0074\u0069\u0063\u0073\u0022\u003e\u004f\u0063\u0065\u0061\u006e\u0020\u0063\u0061\u0075\u0073\u0074\u0069\u0063\u0073\u003c\u002f\u006f\u0070\u0074\u0069\u006f\u006e\u003e",
              ),
              __9f14cf239d210677b549719b00bd34c2dd1d76e12d1d8883e1924f06c38a9efd &&
                (__9f14cf239d210677b549719b00bd34c2dd1d76e12d1d8883e1924f06c38a9efd.value =
                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.profile
                    ?.profileEffect || "\u006e\u006f\u006e\u0065"));
            const __cf1b93ea463342e3a13a0a23bc9901831ecc2986044c6e1893501c3c2d62081f =
              __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.querySelector(
                "\u005b\u006e\u0061\u006d\u0065\u003d\u0022\u0061\u0076\u0061\u0074\u0061\u0072\u0044\u0065\u0063\u006f\u0072\u0061\u0074\u0069\u006f\u006e\u0022\u005d",
              );
            (__cf1b93ea463342e3a13a0a23bc9901831ecc2986044c6e1893501c3c2d62081f?.insertAdjacentHTML(
              "\u0062\u0065\u0066\u006f\u0072\u0065\u0065\u006e\u0064",
              "\u003c\u006f\u0070\u0074\u0069\u006f\u006e\u0020\u0076\u0061\u006c\u0075\u0065\u003d\u0022\u0063\u0072\u0079\u0073\u0074\u0061\u006c\u002d\u0063\u0072\u006f\u0077\u006e\u0022\u003e\u0043\u0072\u0079\u0073\u0074\u0061\u006c\u0020\u0063\u0072\u006f\u0077\u006e\u003c\u002f\u006f\u0070\u0074\u0069\u006f\u006e\u003e\u003c\u006f\u0070\u0074\u0069\u006f\u006e\u0020\u0076\u0061\u006c\u0075\u0065\u003d\u0022\u006c\u0075\u006e\u0061\u0072\u002d\u0068\u0061\u006c\u006f\u0022\u003e\u004c\u0075\u006e\u0061\u0072\u0020\u0068\u0061\u006c\u006f\u003c\u002f\u006f\u0070\u0074\u0069\u006f\u006e\u003e\u003c\u006f\u0070\u0074\u0069\u006f\u006e\u0020\u0076\u0061\u006c\u0075\u0065\u003d\u0022\u0072\u006f\u0073\u0065\u002d\u0076\u0069\u006e\u0065\u0073\u0022\u003e\u0052\u006f\u0073\u0065\u0020\u0076\u0069\u006e\u0065\u0073\u003c\u002f\u006f\u0070\u0074\u0069\u006f\u006e\u003e",
            ),
              __cf1b93ea463342e3a13a0a23bc9901831ecc2986044c6e1893501c3c2d62081f &&
                (__cf1b93ea463342e3a13a0a23bc9901831ecc2986044c6e1893501c3c2d62081f.value =
                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.profile
                    ?.avatarDecoration || "\u006e\u006f\u006e\u0065"),
              __fbc53bfbe963d655ef9e75540634d95a0e7633a0eb7492033434599de806060e &&
                (__fbc53bfbe963d655ef9e75540634d95a0e7633a0eb7492033434599de806060e.value =
                  __f2e5429bdd2ce4cd74b00d064941e11cca8a1f7f3d979f1aa03955b7bbd1e125),
              __39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd &&
                (__39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd.value =
                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.subscriptionStatus),
              __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106(
                __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2,
                __f2e5429bdd2ce4cd74b00d064941e11cca8a1f7f3d979f1aa03955b7bbd1e125,
              ),
              __3c22b3f87a34fd589b28089a6e1fe9407580da47a00ca8a13ab4e306192fb487(
                __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2,
              ));
          } catch (__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7) {
            __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.innerHTML = `<div class="n7x-owner-error"><strong>User details could not load</strong><span>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.message)}</span><button type="button" data-owner-drawer-close>Close</button></div>`;
          }
        }
        let __fe36b4e094a87a33fef9573e325b2e4d89c175849be80a625e63a0551e74edcb = {
          domains: [],
          targetIps: [],
        };
        function __1c0ceb40e691d29a288afd2dab5906bc8b79e4fc7bdb5278134fafc74925a9df() {
          __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.innerHTML = `<header class="n7x-owner-global-app-header"><div><span>${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0061\u0070\u0070\u0073")}</span><div><h2>StudyReady domains</h2><p>Manage the learning site on your domains.</p></div></div><button type="button" data-owner-drawer-close aria-label="Close StudyReady">${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0063\u006c\u006f\u0073\u0065")}</button></header><div class="n7x-owner-drawer-scroll n7x-owner-global-app-drawer"><section class="n7x-owner-detail-section"><p><a href="/studyready" target="_blank" rel="noopener">Preview StudyReady</a> &middot; <a href="/textbook.pdf" target="_blank" rel="noopener">Textbook PDF</a></p><p>N7X stays available at <a href="/nyx" target="_blank" rel="noopener">/nyx</a>. These domains show the same learning pages to every visitor.</p><h3>Add or update a domain</h3><form class="n7x-owner-global-app-form" data-owner-studyready-form><label>Domain<input name="hostname" required maxlength="253" placeholder="learn.example.com"></label><label>Page title<input name="title" required maxlength="80" value="StudyReady"></label><button type="submit">Save domain</button></form><p class="n7x-owner-action-note">Point the domain's A record to ${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__fe36b4e094a87a33fef9573e325b2e4d89c175849be80a625e63a0551e74edcb.targetIps.join("\u0020\u006f\u0072\u0020") || "\u0079\u006f\u0075\u0072\u0020\u0056\u0050\u0053\u0020\u0061\u0064\u0064\u0072\u0065\u0073\u0073")}. New domains need working DNS before HTTPS can be issued. Existing sites at the same hostname will use StudyReady as their homepage.</p></section><section class="n7x-owner-detail-section"><h3>Configured domains</h3>${__fe36b4e094a87a33fef9573e325b2e4d89c175849be80a625e63a0551e74edcb.domains.map((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) => `<article class="n7x-owner-detail-section"><strong>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.hostname)}</strong><p>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.title)}</p><div class="n7x-owner-detail-actions"><a href="https://${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.hostname)}/" target="_blank" rel="noopener">Open site</a><button type="button" data-studyready-edit="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.hostname)}">Edit title</button><button type="button" data-studyready-check="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.hostname)}">Check DNS</button><button class="danger" type="button" data-studyready-remove="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.hostname)}">Remove</button></div></article>`).join("") || "\u003c\u0070\u003e\u004e\u006f\u0020\u0064\u006f\u006d\u0061\u0069\u006e\u0073\u0020\u0063\u006f\u006e\u0066\u0069\u0067\u0075\u0072\u0065\u0064\u002e\u003c\u002f\u0070\u003e"}<p data-studyready-status role="status"></p></section><section class="n7x-owner-detail-section"><h3>Category reviews</h3><p>Publishing lessons does not automatically change a filter category. Lightspeed review tools require administrator access.</p><a href="https://help.lightspeedsystems.com/s/article/kb-4019650636-lightspeed-filter---policies---verifying-access-and-troubleshooting" target="_blank" rel="noopener">Access Checker instructions</a></section></div>`;
        }
        async function __139d0c36df75e828404adb387dd8307cea5aee360143dbdd52f4747904ca3cb5(
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
        ) {
          if (
            "\u0072\u0065\u006d\u006f\u0076\u0065" !== __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 ||
            confirm(
              `Remove StudyReady from ${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708}? Its homepage will return to the site's existing routing.`,
            )
          ) {
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.disabled = !0;
            try {
              const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
                await __0c823f772d95246c7bf82dc76d301b8902c775f0af8b8524cc7e4f76694c2a56(
                  `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/studyready/${encodeURIComponent(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708)}${"\u0063\u0068\u0065\u0063\u006b" === __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 ? "\u002f\u0063\u0068\u0065\u0063\u006b" : ""}`,
                  {
                    method:
                      "\u0063\u0068\u0065\u0063\u006b" === __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
                        ? "\u0050\u004f\u0053\u0054"
                        : "\u0044\u0045\u004c\u0045\u0054\u0045",
                  },
                );
              "\u0063\u0068\u0065\u0063\u006b" === __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
                ? (__058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.querySelector(
                    "\u005b\u0064\u0061\u0074\u0061\u002d\u0073\u0074\u0075\u0064\u0079\u0072\u0065\u0061\u0064\u0079\u002d\u0073\u0074\u0061\u0074\u0075\u0073\u005d",
                  ).textContent =
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.matches
                      ? `${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708} resolves to this VPS. HTTPS is prepared on its first visit.`
                      : `${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708} currently resolves to ${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.resolvedIps.join("\u002c\u0020") || "\u006e\u006f\u0020\u0061\u0064\u0064\u0072\u0065\u0073\u0073\u0065\u0073"}. Set its A record to ${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.targetIps.join("\u0020\u006f\u0072\u0020")}. A CDN-proxied record may hide the origin IP.`)
                : ((__fe36b4e094a87a33fef9573e325b2e4d89c175849be80a625e63a0551e74edcb =
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f),
                  __1c0ceb40e691d29a288afd2dab5906bc8b79e4fc7bdb5278134fafc74925a9df(),
                  __39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd(
                    "\u0053\u0074\u0075\u0064\u0079\u0052\u0065\u0061\u0064\u0079\u0020\u0064\u006f\u006d\u0061\u0069\u006e\u0020\u0072\u0065\u006d\u006f\u0076\u0065\u0064\u002e",
                  ));
            } catch (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c) {
              __39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd(
                __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.message,
                "\u0065\u0072\u0072\u006f\u0072",
              );
            } finally {
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.isConnected &&
                (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.disabled = !1);
            }
          }
        }
        function __ccaf0d5941a22e9e19c48f49b8721d5a2130b5e0026971cb57941491d03af598() {
          window.dispatchEvent(
            new CustomEvent("\u006e\u0079\u0078\u003a\u0067\u006c\u006f\u0062\u0061\u006c\u002d\u0061\u0070\u0070\u0073\u002d\u0063\u0068\u0061\u006e\u0067\u0065\u0064", {
              detail: {
                apps: __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.globalApps,
              },
            }),
          );
        }
        function __f6947d40444e82d1cd5b78592433ba74ec6a2969ac1b948ac26f875a3403355b() {
          __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.innerHTML = `<header class="n7x-owner-global-app-header"><div><span>${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0061\u0070\u0070\u0073")}</span><div><h2>Apps for everyone</h2><p>Add or remove apps from every user's Apps page.</p></div></div><button type="button" data-owner-drawer-close aria-label="Close global apps">${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0063\u006c\u006f\u0073\u0065")}</button></header>\n        <div class="n7x-owner-drawer-scroll n7x-owner-global-app-drawer">\n          <section class="n7x-owner-detail-section"><h3>Add an app</h3><form class="n7x-owner-global-app-form" data-owner-global-app-form><label>Name<input name="name" minlength="2" maxlength="48" autocomplete="off" required placeholder="Example app"></label><label>URL or N7X path<input name="url" maxlength="2048" autocomplete="off" spellcheck="false" required placeholder="https://example.com/ or /apps/example/"></label><div class="n7x-owner-detail-actions"><button type="submit">${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0061\u0070\u0070\u0073")}<span>Add for everyone</span></button></div></form></section>\n          <section class="n7x-owner-detail-section"><div class="n7x-owner-global-app-heading"><div><h3>Published apps</h3><p class="n7x-owner-action-note">Changes appear in open N7X sessions within one minute.</p></div><span>${__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.globalApps.length}</span></div>${__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.globalApps.length ? `<div class="n7x-owner-global-app-list">${__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.globalApps.map((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) => `<article><span class="n7x-owner-global-app-icon">${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0061\u0070\u0070\u0073")}</span><div><strong>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.name)}</strong><small>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.url)}</small></div><button class="danger" type="button" data-owner-global-app-delete="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.id)}" aria-label="Remove ${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.name)}">${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0074\u0072\u0061\u0073\u0068")}Remove</button></article>`).join("")}</div>` : "\u003c\u0070\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0061\u0063\u0074\u0069\u006f\u006e\u002d\u006e\u006f\u0074\u0065\u0022\u003e\u004e\u006f\u0020\u0061\u0070\u0070\u0073\u0020\u0061\u0072\u0065\u0020\u0063\u0075\u0072\u0072\u0065\u006e\u0074\u006c\u0079\u0020\u0070\u0075\u0062\u006c\u0069\u0073\u0068\u0065\u0064\u002e\u003c\u002f\u0070\u003e"}</section>\n        </div>`;
        }
        function __0803fce5607de8f9aec2878f5ba0f32b7e9c3c3eba55e9fc82b06f35460a27ba(
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = "\u006d\u0065\u006d\u0062\u0065\u0072",
        ) {
          return (
            __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.customRolePlacements
              .length
              ? __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.customRolePlacements
              : __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.map(
                  (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => ({
                    id: __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                    label: __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477(
                      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                    ),
                  }),
                )
          )
            .map(
              (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708) =>
                `<option value="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.id)}"${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.id === __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 ? "\u0020\u0073\u0065\u006c\u0065\u0063\u0074\u0065\u0064" : ""}>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.label)} placement</option>`,
            )
            .join("");
        }
        function __9fe1e449deca2ea2b34cce0f2ac849ddc905ef8021d39e85cae9141c2b0ac1c6(
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = [],
        ) {
          const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = new Set(
            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
          );
          return `<details class="n7x-owner-custom-role-permission-editor"><summary>${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.size} permission${1 === __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.size ? "" : "\u0073"} selected</summary><fieldset class="n7x-owner-custom-role-permissions"><legend>Permissions</legend>${__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.customRolePermissions.map((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) => `<label><input type="checkbox" name="permissions" value="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.id)}"${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.has(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.id) ? "\u0020\u0063\u0068\u0065\u0063\u006b\u0065\u0064" : ""}><span>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.label)}</span><small>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.id)}</small></label>`).join("")}</fieldset></details>`;
        }
        function __507bbf268e7d93e1b09f6134c2081132d3810d5aa2eaf2f6a789f089c664f731(
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = "\u0023\u0038\u0065\u0061\u0031\u0066\u0066",
        ) {
          const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
            /^#[0-9a-f]{6}$/i.test(
              String(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 || ""),
            )
              ? String(
                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                ).toLowerCase()
              : "\u0023\u0038\u0065\u0061\u0031\u0066\u0066";
          return `<label class="n7x-owner-custom-role-field n7x-owner-custom-role-color-field">Color / code<span class="n7x-owner-custom-role-color-control"><input class="n7x-owner-custom-role-color-picker" data-owner-custom-role-color-picker type="color" value="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708)}" aria-label="Choose role color"><input name="color" type="text" value="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708)}" maxlength="7" pattern="(?:#[0-9A-Fa-f]{6}|&amp;[0-9A-Fa-f])" title="Use a six-digit hex color or a Minecraft code from &amp;0 through &amp;f" placeholder="&amp;d or #ff55ff" required></span><small>Pick a color or enter #RRGGBB / &amp;0\u2013&amp;f.</small></label>`;
        }
        function __5b731fefb7a6d8d28de59aeb5d4426e4461fac3640efd176c605b2ebb37e3935() {
          const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
              __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.customRoleEditorId,
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = `<form class="n7x-owner-custom-role-form n7x-owner-custom-role-editor" data-owner-custom-role-create><label class="n7x-owner-custom-role-field">Name<input name="label" maxlength="64" minlength="2" required placeholder="Night Watch"></label><label class="n7x-owner-custom-role-field">Role ID<input name="id" maxlength="32" pattern="[a-z0-9][a-z0-9-]{1,31}" placeholder="night-watch"></label>${__507bbf268e7d93e1b09f6134c2081132d3810d5aa2eaf2f6a789f089c664f731()}<label class="n7x-owner-custom-role-field">Placement<select name="baseRole">${__0803fce5607de8f9aec2878f5ba0f32b7e9c3c3eba55e9fc82b06f35460a27ba("\u006d\u0065\u006d\u0062\u0065\u0072")}</select></label>${__9fe1e449deca2ea2b34cce0f2ac849ddc905ef8021d39e85cae9141c2b0ac1c6([])}<div class="n7x-owner-custom-role-editor-actions"><button class="n7x-owner-custom-role-save" type="submit">${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0073\u0061\u0076\u0065")}<span>Create role</span></button><button class="n7x-owner-custom-role-cancel" type="button" data-owner-custom-role-cancel>Cancel</button></div></form>`;
          __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.innerHTML = `<header class="n7x-owner-custom-role-header"><div><span>${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0075\u0073\u0065\u0072\u0073")}</span><div><h2>Custom roles</h2><p>Colors, hierarchy, permissions, and assignments.</p></div></div><button type="button" data-owner-drawer-close aria-label="Close custom roles">${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0063\u006c\u006f\u0073\u0065")}</button></header>\n        <div class="n7x-owner-drawer-scroll n7x-owner-custom-role-drawer">\n          <section class="n7x-owner-detail-section n7x-owner-custom-role-section"><div class="n7x-owner-custom-role-toolbar"><div><h3>Configured roles</h3><p class="n7x-owner-action-note">Placement controls hierarchy; selected permissions control access.</p></div><button type="button" data-owner-custom-role-new>${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0075\u0073\u0065\u0072\u0073")}New role</button></div>${"\u006e\u0065\u0077" === __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 ? __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 : ""}${__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.customRoles.length ? `<div class="n7x-owner-custom-role-list">${__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.customRoles.map((__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708) => `<article class="n7x-owner-custom-role-item${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 === __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.id ? "\u0020\u0065\u0064\u0069\u0074\u0069\u006e\u0067" : ""}"><div class="n7x-owner-custom-role-row"><span class="n7x-owner-custom-role-dot" style="--owner-custom-role:${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.color)}"></span><span class="n7x-owner-custom-role-copy"><strong class="n7x-minecraft-text">${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.label)}</strong><small>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.id)}</small></span><span class="n7x-owner-custom-role-placement">${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.baseRole))}</span><span class="n7x-owner-custom-role-permission-count">${Number(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.permissions?.length || 0)} perms</span><button type="button" data-owner-custom-role-edit="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.id)}">Edit</button><button class="danger" type="button" data-owner-custom-role-delete="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.id)}" aria-label="Delete ${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.label)}">${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0074\u0072\u0061\u0073\u0068")}</button></div>${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 === __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.id ? ((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) => `<form class="n7x-owner-custom-role-editor" data-owner-custom-role-update="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.id)}"><label class="n7x-owner-custom-role-field">Name<input name="label" maxlength="64" minlength="2" required value="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.label)}"></label>${__507bbf268e7d93e1b09f6134c2081132d3810d5aa2eaf2f6a789f089c664f731(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.color)}<label class="n7x-owner-custom-role-field">Placement<select name="baseRole">${__0803fce5607de8f9aec2878f5ba0f32b7e9c3c3eba55e9fc82b06f35460a27ba(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.baseRole)}</select></label>${__9fe1e449deca2ea2b34cce0f2ac849ddc905ef8021d39e85cae9141c2b0ac1c6(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.permissions)}<div class="n7x-owner-custom-role-editor-actions"><button class="n7x-owner-custom-role-save" type="submit">${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0073\u0061\u0076\u0065")}<span>Save changes</span></button><button class="n7x-owner-custom-role-cancel" type="button" data-owner-custom-role-cancel>Cancel</button></div></form>`)(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708) : ""}</article>`).join("")}</div>` : "\u003c\u0070\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0061\u0063\u0074\u0069\u006f\u006e\u002d\u006e\u006f\u0074\u0065\u0022\u003e\u004e\u006f\u0020\u0063\u0075\u0073\u0074\u006f\u006d\u0020\u0072\u006f\u006c\u0065\u0073\u0020\u0068\u0061\u0076\u0065\u0020\u0062\u0065\u0065\u006e\u0020\u0063\u0072\u0065\u0061\u0074\u0065\u0064\u0020\u0079\u0065\u0074\u002e\u003c\u002f\u0070\u003e"}</section>\n        </div>`;
        }
        async function __5d1d7d018b007814f4953961a21fac0fd460ab60aed329b0ab736ae968586f2f(
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
        ) {
          if (
            !__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 ||
            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.guest
          )
            return;
          ((__058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.hidden = !1),
            __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.classList.remove(
              "\u0073\u0068\u006f\u0077",
            ),
            (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.selectedUser =
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53));
          const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
            __2a7a4197494d8323fea0f175ba188cc62025fc3fcf0d33594407f5566e01d6cc(
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.photoUrl,
              "",
              (
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.displayName ||
                "\u003f"
              )
                .slice(0, 1)
                .toUpperCase(),
            );
          ((__058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.innerHTML = `<header><div class="n7x-owner-detail-avatar">${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708}<i class="${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.online ? "\u006f\u006e\u006c\u0069\u006e\u0065" : ""}"></i></div><div><span>${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0073\u0068\u0069\u0065\u006c\u0064")}Search review</span><h2>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.displayName)}</h2><p class="n7x-owner-drawer-identity">@${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.username)}</p></div><button type="button" data-owner-drawer-close aria-label="Close search history">${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0063\u006c\u006f\u0073\u0065")}</button></header>\n        <div class="n7x-owner-drawer-scroll"><section class="n7x-owner-detail-section n7x-owner-flagged-searches"><div class="n7x-owner-search-history-heading"><h3>Search history</h3><button type="button" data-owner-clear-search-history="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.uid)}" hidden>${__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4("\u0074\u0072\u0061\u0073\u0068")}Clear history</button></div><p class="n7x-owner-action-note">Searches made through N7X while this account is signed in are retained for 30 days. Policy-classified searches are highlighted, but a match is a moderation signal rather than proof.</p><div class="n7x-owner-flagged-search-list"><div class="n7x-owner-drawer-loading"><i></i><i></i><i></i></div></div></section></div>`),
            requestAnimationFrame(() =>
              __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.classList.add(
                "\u0073\u0068\u006f\u0077",
              ),
            ),
            __3c22b3f87a34fd589b28089a6e1fe9407580da47a00ca8a13ab4e306192fb487(
              __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2,
            ));
          const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
            __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.querySelector(
              "\u002e\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0066\u006c\u0061\u0067\u0067\u0065\u0064\u002d\u0073\u0065\u0061\u0072\u0063\u0068\u002d\u006c\u0069\u0073\u0074",
            );
          try {
            const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
              await __0c823f772d95246c7bf82dc76d301b8902c775f0af8b8524cc7e4f76694c2a56(
                `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/chat/moderation/search-history?uid=${encodeURIComponent(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.uid)}`,
              );
            if (
              !__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c?.isConnected ||
              __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.selectedUser
                ?.uid !== __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.uid
            )
              return;
            const __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 =
                Array.isArray(
                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.searches,
                )
                  ? __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.searches
                  : [],
              __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 =
                __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.querySelector(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u006c\u0065\u0061\u0072\u002d\u0073\u0065\u0061\u0072\u0063\u0068\u002d\u0068\u0069\u0073\u0074\u006f\u0072\u0079\u005d",
                );
            (__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 &&
              (__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.hidden = !(
                __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.canClear &&
                __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.length
              )),
              (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.innerHTML =
                __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.length
                  ? __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477
                      .map(
                        (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) =>
                          `<article class="${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.flagged ? "\u0070\u006f\u006c\u0069\u0063\u0079" : ""}"><header><strong>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.category || "\u0053\u0074\u0061\u006e\u0064\u0061\u0072\u0064\u0020\u0073\u0065\u0061\u0072\u0063\u0068")}</strong><time datetime="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.createdAt)}" title="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.createdAt))}">${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.createdAt))}</time></header><p>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.query)}</p></article>`,
                      )
                      .join("")
                  : "\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0065\u006d\u0070\u0074\u0079\u0020\u0063\u006f\u006d\u0070\u0061\u0063\u0074\u0022\u003e\u003c\u0073\u0074\u0072\u006f\u006e\u0067\u003e\u004e\u006f\u0020\u0072\u0065\u0074\u0061\u0069\u006e\u0065\u0064\u0020\u0073\u0065\u0061\u0072\u0063\u0068\u0065\u0073\u003c\u002f\u0073\u0074\u0072\u006f\u006e\u0067\u003e\u003c\u0073\u0070\u0061\u006e\u003e\u0054\u0068\u0069\u0073\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0068\u0061\u0073\u0020\u006e\u006f\u0020\u004e\u0037\u0058\u0020\u0073\u0065\u0061\u0072\u0063\u0068\u0065\u0073\u0020\u0066\u0072\u006f\u006d\u0020\u0074\u0068\u0065\u0020\u006c\u0061\u0073\u0074\u0020\u0033\u0030\u0020\u0064\u0061\u0079\u0073\u002e\u003c\u002f\u0073\u0070\u0061\u006e\u003e\u003c\u002f\u0064\u0069\u0076\u003e"));
          } catch (__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477) {
            if (!__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c?.isConnected)
              return;
            __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.innerHTML = `<div class="n7x-owner-error"><strong>Search history could not load</strong><span>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.message)}</span></div>`;
          }
        }
        function __752decce652a288d6baba3be790f4c1f0413c77a30cc7398903b11a897276a39() {
          (__058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.classList.remove(
            "\u0073\u0068\u006f\u0077",
          ),
            setTimeout(() => {
              ((__058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.hidden = !0),
                (__058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.innerHTML =
                  ""));
            }, 180),
            (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.selectedUser =
              null),
            (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.selectedCapabilities =
              null));
        }
        function __84f04fd0e6e0172a413b78d039cd02a70c6cd830268407a3b9cadf417fe4d094({
          title: __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
          message: __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
          confirmLabel:
            __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c = "\u0043\u006f\u006e\u0074\u0069\u006e\u0075\u0065",
          danger: __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 = !1,
          requireText: __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 = "",
        }) {
          return new Promise(
            (__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7) => {
              ((__ad9ad1be7ee30eec85277bc3e45643b93f1e672f37edcd784ad8a56fd9b91303.hidden = !1),
                (__ad9ad1be7ee30eec85277bc3e45643b93f1e672f37edcd784ad8a56fd9b91303.innerHTML = `<form><h2>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53)}</h2><p>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708)}</p>${__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 ? `<label>Type <strong>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766)}</strong> to confirm<input name="confirmation" autocomplete="off"></label>` : ""}<div><button type="button" data-owner-confirm-cancel>Cancel</button><button class="${__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 ? "\u0064\u0061\u006e\u0067\u0065\u0072" : ""}" type="submit" ${__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 ? "\u0064\u0069\u0073\u0061\u0062\u006c\u0065\u0064" : ""}>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c)}</button></div></form>`));
              const __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 =
                  __ad9ad1be7ee30eec85277bc3e45643b93f1e672f37edcd784ad8a56fd9b91303.querySelector(
                    "\u0066\u006f\u0072\u006d",
                  ),
                __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 =
                  __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061.elements
                    .confirmation,
                __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e =
                  __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061.querySelector(
                    "\u005b\u0074\u0079\u0070\u0065\u003d\u0022\u0073\u0075\u0062\u006d\u0069\u0074\u0022\u005d",
                  ),
                __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22 = (
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                ) => {
                  ((__ad9ad1be7ee30eec85277bc3e45643b93f1e672f37edcd784ad8a56fd9b91303.hidden = !0),
                    (__ad9ad1be7ee30eec85277bc3e45643b93f1e672f37edcd784ad8a56fd9b91303.innerHTML =
                      ""),
                    __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7(
                      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                    ));
                };
              (__78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106?.addEventListener(
                "\u0069\u006e\u0070\u0075\u0074",
                () => {
                  __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e.disabled =
                    __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106.value.trim() !==
                    __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766;
                },
              ),
                __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061.addEventListener(
                  "\u0073\u0075\u0062\u006d\u0069\u0074",
                  (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => {
                    (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.preventDefault(),
                      __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22(!0));
                  },
                ),
                __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061
                  .querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u006f\u006e\u0066\u0069\u0072\u006d\u002d\u0063\u0061\u006e\u0063\u0065\u006c\u005d")
                  .addEventListener("\u0063\u006c\u0069\u0063\u006b", () =>
                    __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22(!1),
                  ),
                setTimeout(
                  () =>
                    (
                      __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 ||
                      __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061.querySelector(
                        "\u0062\u0075\u0074\u0074\u006f\u006e",
                      )
                    )?.focus(),
                  0,
                ));
            },
          );
        }
        function __00338e13209d51350b8ae38787506634ca965af7e2f0626a42fa8c5e53a92079({
          title: __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
          message: __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
          confirmLabel: __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
          requireText: __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 = "",
        }) {
          return new Promise(
            (__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766) => {
              ((__ad9ad1be7ee30eec85277bc3e45643b93f1e672f37edcd784ad8a56fd9b91303.hidden = !1),
                (__ad9ad1be7ee30eec85277bc3e45643b93f1e672f37edcd784ad8a56fd9b91303.innerHTML = `<form><h2>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53)}</h2><p>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708)}</p><label>Message shown to this member<textarea name="memberMessage" maxlength="500" rows="4" placeholder="Explain what happened and what they should do next." required></textarea><small>Required \xb7 500 characters maximum \xb7 do not include private staff notes</small></label>${__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 ? `<label>Type <strong>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477)}</strong> to confirm<input name="confirmation" autocomplete="off"></label>` : ""}<div><button type="button" data-owner-confirm-cancel>Cancel</button><button class="danger" type="submit" disabled>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c)}</button></div></form>`));
              const __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 =
                  __ad9ad1be7ee30eec85277bc3e45643b93f1e672f37edcd784ad8a56fd9b91303.querySelector(
                    "\u0066\u006f\u0072\u006d",
                  ),
                __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 =
                  __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.elements
                    .memberMessage,
                __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 =
                  __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.elements
                    .confirmation,
                __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e =
                  __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.querySelector(
                    "\u005b\u0074\u0079\u0070\u0065\u003d\u0022\u0073\u0075\u0062\u006d\u0069\u0074\u0022\u005d",
                  ),
                __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22 = () => {
                  __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e.disabled =
                    !__bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061.value.trim() ||
                    Boolean(
                      __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 &&
                        __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106?.value.trim() !==
                          __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
                    );
                },
                __0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba = (
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                ) => {
                  ((__ad9ad1be7ee30eec85277bc3e45643b93f1e672f37edcd784ad8a56fd9b91303.hidden = !0),
                    (__ad9ad1be7ee30eec85277bc3e45643b93f1e672f37edcd784ad8a56fd9b91303.innerHTML =
                      ""),
                    __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766(
                      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                    ));
                };
              (__bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061.addEventListener(
                "\u0069\u006e\u0070\u0075\u0074",
                __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22,
              ),
                __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106?.addEventListener(
                  "\u0069\u006e\u0070\u0075\u0074",
                  __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22,
                ),
                __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.addEventListener(
                  "\u0073\u0075\u0062\u006d\u0069\u0074",
                  (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => {
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.preventDefault();
                    const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
                      __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061.value.trim();
                    !__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 ||
                      (__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 &&
                        __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106?.value.trim() !==
                          __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477) ||
                      __0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba(
                        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                      );
                  },
                ),
                __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7
                  .querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u006f\u006e\u0066\u0069\u0072\u006d\u002d\u0063\u0061\u006e\u0063\u0065\u006c\u005d")
                  .addEventListener("\u0063\u006c\u0069\u0063\u006b", () =>
                    __0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba(null),
                  ),
                setTimeout(
                  () => __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061.focus(),
                  0,
                ));
            },
          );
        }
        async function __5153aa00a74bf12c35c76278300738de3f9841e1a03f4737f4ec40521faa850c(
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = {},
        ) {
          const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
            __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.selectedUser;
          if (!__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c) return;
          const __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 = {
            enable: [
              "\u0052\u0065\u002d\u0065\u006e\u0061\u0062\u006c\u0065\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u003f",
              `${__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.email || __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.displayName} will be able to sign in again.`,
              "\u0052\u0065\u002d\u0065\u006e\u0061\u0062\u006c\u0065",
              !1,
            ],
            verify_email: [
              "\u0056\u0065\u0072\u0069\u0066\u0079\u0020\u0074\u0068\u0069\u0073\u0020\u0065\u006d\u0061\u0069\u006c\u003f",
              `Mark ${__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.email} as verified in Firebase Authentication.`,
              "\u0056\u0065\u0072\u0069\u0066\u0079",
              !1,
            ],
            ai_trust: [
              "\u0041\u0070\u0070\u0072\u006f\u0076\u0065\u0020\u0041\u0049\u0020\u0061\u006c\u006c\u006f\u0077\u0061\u006e\u0063\u0065\u003f",
              "\u0054\u0068\u0069\u0073\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0077\u0069\u006c\u006c\u0020\u0075\u0073\u0065\u0020\u0074\u0068\u0065\u0020\u0065\u0073\u0074\u0061\u0062\u006c\u0069\u0073\u0068\u0065\u0064\u002d\u0075\u0073\u0065\u0072\u0020\u0061\u006c\u006c\u006f\u0077\u0061\u006e\u0063\u0065\u002e\u0020\u0044\u0061\u0069\u006c\u0079\u0020\u006c\u0069\u006d\u0069\u0074\u0073\u0020\u0073\u0074\u0069\u006c\u006c\u0020\u0061\u0070\u0070\u006c\u0079\u002e",
              "\u0041\u0070\u0070\u0072\u006f\u0076\u0065",
              !1,
            ],
            ai_restrict: [
              "\u0052\u0065\u0073\u0074\u0072\u0069\u0063\u0074\u0020\u0073\u0068\u0061\u0072\u0065\u0064\u0020\u0041\u0049\u003f",
              "\u0054\u0068\u0069\u0073\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0077\u0069\u006c\u006c\u0020\u006c\u006f\u0073\u0065\u0020\u0073\u0068\u0061\u0072\u0065\u0064\u0020\u0041\u0049\u0020\u0061\u0063\u0063\u0065\u0073\u0073\u002e\u0020\u004f\u0074\u0068\u0065\u0072\u0020\u004e\u0037\u0058\u0020\u0066\u0065\u0061\u0074\u0075\u0072\u0065\u0073\u0020\u0072\u0065\u006d\u0061\u0069\u006e\u0020\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u002e",
              "\u0052\u0065\u0073\u0074\u0072\u0069\u0063\u0074",
              !1,
            ],
            ai_reset: [
              "\u0055\u0073\u0065\u0020\u0061\u0075\u0074\u006f\u006d\u0061\u0074\u0069\u0063\u0020\u0041\u0049\u0020\u0061\u0063\u0063\u0065\u0073\u0073\u003f",
              "\u0054\u0068\u0069\u0073\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0027\u0073\u0020\u0073\u0068\u0061\u0072\u0065\u0064\u0020\u0041\u0049\u0020\u0061\u0063\u0063\u0065\u0073\u0073\u0020\u0077\u0069\u006c\u006c\u0020\u0066\u006f\u006c\u006c\u006f\u0077\u0020\u0069\u0074\u0073\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0068\u0069\u0073\u0074\u006f\u0072\u0079\u0020\u0061\u006e\u0064\u0020\u0073\u0075\u0062\u0073\u0063\u0072\u0069\u0070\u0074\u0069\u006f\u006e\u0020\u0061\u0067\u0061\u0069\u006e\u002e",
              "\u0052\u0065\u0073\u0065\u0074",
              !1,
            ],
            create_password_reset_link: [
              "\u0043\u0072\u0065\u0061\u0074\u0065\u0020\u0061\u0020\u0070\u0061\u0073\u0073\u0077\u006f\u0072\u0064\u0020\u0072\u0065\u0073\u0065\u0074\u0020\u006c\u0069\u006e\u006b\u003f",
              "\u0054\u0068\u0065\u0020\u0063\u0075\u0072\u0072\u0065\u006e\u0074\u0020\u0070\u0061\u0073\u0073\u0077\u006f\u0072\u0064\u0020\u0077\u0069\u006c\u006c\u0020\u0072\u0065\u006d\u0061\u0069\u006e\u0020\u0070\u0072\u0069\u0076\u0061\u0074\u0065\u002e\u0020\u0047\u0069\u0076\u0065\u0020\u0074\u0068\u0065\u0020\u0067\u0065\u006e\u0065\u0072\u0061\u0074\u0065\u0064\u0020\u006f\u006e\u0065\u002d\u0074\u0069\u006d\u0065\u0020\u006c\u0069\u006e\u006b\u0020\u006f\u006e\u006c\u0079\u0020\u0074\u006f\u0020\u0074\u0068\u0065\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u006f\u0077\u006e\u0065\u0072\u002e",
              "\u0043\u0072\u0065\u0061\u0074\u0065\u0020\u006c\u0069\u006e\u006b",
              !1,
            ],
            send_password_reset: [
              "\u0053\u0065\u006e\u0064\u0020\u0070\u0061\u0073\u0073\u0077\u006f\u0072\u0064\u0020\u0072\u0065\u0073\u0065\u0074\u003f",
              `Firebase will email a password-reset link to ${__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.email}.`,
              "\u0053\u0065\u006e\u0064\u0020\u0065\u006d\u0061\u0069\u006c",
              !1,
            ],
          };
          if (
            "\u0073\u0065\u0074\u005f\u0070\u0061\u0073\u0073\u0077\u006f\u0072\u0064" === __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
          ) {
            const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
              await (function (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) {
                return new Promise(
                  (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708) => {
                    ((__ad9ad1be7ee30eec85277bc3e45643b93f1e672f37edcd784ad8a56fd9b91303.hidden =
                      !1),
                      (__ad9ad1be7ee30eec85277bc3e45643b93f1e672f37edcd784ad8a56fd9b91303.innerHTML = `<form><h2>Set custom password</h2><p>Set a new password for ${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.displayName || __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.handle || __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.uid)}. Their old password will stop working. Give the new password to them privately; no email is required.</p><label>New password<input name="newPassword" type="password" autocomplete="new-password" minlength="8" maxlength="256" required></label><label>Confirm password<input name="confirmPassword" type="password" autocomplete="new-password" minlength="8" maxlength="256" required></label><small data-password-error role="alert"></small><div><button type="button" data-owner-confirm-cancel>Cancel</button><button type="submit">Set password</button></div></form>`));
                    const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
                        __ad9ad1be7ee30eec85277bc3e45643b93f1e672f37edcd784ad8a56fd9b91303.querySelector(
                          "\u0066\u006f\u0072\u006d",
                        ),
                      __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 =
                        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.elements
                          .newPassword,
                      __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 =
                        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.elements
                          .confirmPassword,
                      __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 = (
                        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                      ) => {
                        ((__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.value =
                          ""),
                          (__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.value =
                            ""),
                          (__ad9ad1be7ee30eec85277bc3e45643b93f1e672f37edcd784ad8a56fd9b91303.hidden =
                            !0),
                          (__ad9ad1be7ee30eec85277bc3e45643b93f1e672f37edcd784ad8a56fd9b91303.innerHTML =
                            ""),
                          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708(
                            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                          ));
                      };
                    (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.addEventListener(
                      "\u0073\u0075\u0062\u006d\u0069\u0074",
                      (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => {
                        (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.preventDefault(),
                          __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.reportValidity() &&
                            (__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.value ===
                            __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.value
                              ? __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7(
                                  __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.value,
                                )
                              : (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.querySelector(
                                  "\u005b\u0064\u0061\u0074\u0061\u002d\u0070\u0061\u0073\u0073\u0077\u006f\u0072\u0064\u002d\u0065\u0072\u0072\u006f\u0072\u005d",
                                ).textContent = "\u0050\u0061\u0073\u0073\u0077\u006f\u0072\u0064\u0073\u0020\u006d\u0075\u0073\u0074\u0020\u006d\u0061\u0074\u0063\u0068\u002e")));
                      },
                    ),
                      __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c
                        .querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u006f\u006e\u0066\u0069\u0072\u006d\u002d\u0063\u0061\u006e\u0063\u0065\u006c\u005d")
                        .addEventListener("\u0063\u006c\u0069\u0063\u006b", () =>
                          __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7(null),
                        ),
                      __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.focus());
                  },
                );
              })(__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c);
            if (null === __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) return;
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = {
              password: __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
            };
          } else if (
            "\u0064\u0065\u006c\u0065\u0074\u0065" === __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
          ) {
            const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
                __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.email ||
                __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.uid,
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
                await __00338e13209d51350b8ae38787506634ca965af7e2f0626a42fa8c5e53a92079({
                  title: "\u0050\u0065\u0072\u006d\u0061\u006e\u0065\u006e\u0074\u006c\u0079\u0020\u0064\u0065\u006c\u0065\u0074\u0065\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u003f",
                  message:
                    "\u0054\u0068\u0069\u0073\u0020\u0072\u0065\u006d\u006f\u0076\u0065\u0073\u0020\u0074\u0068\u0065\u0020\u0046\u0069\u0072\u0065\u0062\u0061\u0073\u0065\u0020\u0041\u0075\u0074\u0068\u0065\u006e\u0074\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0061\u006e\u0064\u0020\u0069\u0074\u0073\u0020\u004e\u0037\u0058\u0020\u0070\u0072\u006f\u0066\u0069\u006c\u0065\u0020\u0064\u0061\u0074\u0061\u002e\u0020\u0041\u0075\u0064\u0069\u0074\u0020\u0068\u0069\u0073\u0074\u006f\u0072\u0079\u0020\u0069\u0073\u0020\u0072\u0065\u0074\u0061\u0069\u006e\u0065\u0064\u002c\u0020\u0061\u006e\u0064\u0020\u0074\u0068\u0065\u0020\u006d\u0065\u006d\u0062\u0065\u0072\u0020\u0077\u0069\u006c\u006c\u0020\u0073\u0065\u0065\u0020\u0079\u006f\u0075\u0072\u0020\u006d\u0065\u0073\u0073\u0061\u0067\u0065\u0020\u0069\u0066\u0020\u0074\u0068\u0065\u0079\u0020\u0074\u0072\u0079\u0020\u0074\u006f\u0020\u0075\u0073\u0065\u0020\u0074\u0068\u0069\u0073\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0061\u0067\u0061\u0069\u006e\u002e",
                  confirmLabel: "\u0044\u0065\u006c\u0065\u0074\u0065\u0020\u0070\u0065\u0072\u006d\u0061\u006e\u0065\u006e\u0074\u006c\u0079",
                  requireText: __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                });
            if (null === __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) return;
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = {
              ...__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
              reason: __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
            };
          } else if (
            "\u0064\u0069\u0073\u0061\u0062\u006c\u0065" === __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 ||
            "\u0062\u0061\u006e" === __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 ||
            "\u0064\u0069\u0073\u0061\u0062\u006c\u0065\u005f\u0077\u0069\u0074\u0068\u005f\u0069\u0070\u005f\u0062\u0061\u006e" ===
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
          ) {
            const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
              await __00338e13209d51350b8ae38787506634ca965af7e2f0626a42fa8c5e53a92079({
                title:
                  "\u0064\u0069\u0073\u0061\u0062\u006c\u0065" === __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
                    ? "\u0044\u0069\u0073\u0061\u0062\u006c\u0065\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u003f"
                    : "\u0062\u0061\u006e" === __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
                      ? "\u0042\u0061\u006e\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u003f"
                      : "\u0044\u0069\u0073\u0061\u0062\u006c\u0065\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0061\u006e\u0064\u0020\u0062\u006c\u006f\u0063\u006b\u0020\u0069\u0074\u0073\u0020\u0049\u0050\u003f",
                message:
                  "\u0064\u0069\u0073\u0061\u0062\u006c\u0065" === __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
                    ? `${__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.email || __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.displayName} will immediately lose access until re-enabled.`
                    : "\u0062\u0061\u006e" === __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
                      ? `${__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.email || __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.displayName} will immediately lose access and see this as an account ban until re-enabled.`
                      : `${__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.email || __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.displayName} will lose access, and ${__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.lastSeenIp} will be blocked from N7X server requests. Shared or changing IPs can affect other people.`,
                confirmLabel:
                  "\u0064\u0069\u0073\u0061\u0062\u006c\u0065" === __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
                    ? "\u0044\u0069\u0073\u0061\u0062\u006c\u0065"
                    : "\u0062\u0061\u006e" === __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
                      ? "\u0042\u0061\u006e\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074"
                      : "\u0044\u0069\u0073\u0061\u0062\u006c\u0065\u0020\u0061\u006e\u0064\u0020\u0062\u006c\u006f\u0063\u006b",
              });
            if (null === __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) return;
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = {
              ...__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
              reason: __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
            };
          } else if (
            __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477[
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
            ]
          ) {
            const [
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
              __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
              __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
              __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766,
            ] =
              __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477[
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
              ];
            if (
              !(await __84f04fd0e6e0172a413b78d039cd02a70c6cd830268407a3b9cadf417fe4d094({
                title: __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                message: __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
                confirmLabel: __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
                danger: __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766,
              }))
            )
              return;
          }
          try {
            const __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 =
              await __0c823f772d95246c7bf82dc76d301b8902c775f0af8b8524cc7e4f76694c2a56(
                `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/users/${encodeURIComponent(__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.uid)}`,
                {
                  method: "\u0050\u0041\u0054\u0043\u0048",
                  body: JSON.stringify({
                    action: __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                    ...__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
                  }),
                },
              );
            (__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.deleted
              ? (__39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd(
                  "\u0041\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0064\u0065\u006c\u0065\u0074\u0065\u0064\u002e",
                ),
                __752decce652a288d6baba3be790f4c1f0413c77a30cc7398903b11a897276a39())
              : __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.resetLink
                ? ((function (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) {
                    ((__ad9ad1be7ee30eec85277bc3e45643b93f1e672f37edcd784ad8a56fd9b91303.hidden =
                      !1),
                      (__ad9ad1be7ee30eec85277bc3e45643b93f1e672f37edcd784ad8a56fd9b91303.innerHTML = `<form><h2>Password reset link</h2><p>Give this one-time Firebase link directly to the account owner. N7X never reveals or stores their password.</p><label>Reset link<input name="resetLink" value="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53)}" readonly></label><div><button type="button" data-owner-reset-close>Close</button><button type="button" data-owner-reset-copy>Copy link</button></div></form>`));
                    const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
                      __ad9ad1be7ee30eec85277bc3e45643b93f1e672f37edcd784ad8a56fd9b91303.querySelector(
                        "\u005b\u006e\u0061\u006d\u0065\u003d\u0022\u0072\u0065\u0073\u0065\u0074\u004c\u0069\u006e\u006b\u0022\u005d",
                      );
                    (__ad9ad1be7ee30eec85277bc3e45643b93f1e672f37edcd784ad8a56fd9b91303
                      .querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0072\u0065\u0073\u0065\u0074\u002d\u0063\u006c\u006f\u0073\u0065\u005d")
                      .addEventListener("\u0063\u006c\u0069\u0063\u006b", () => {
                        ((__ad9ad1be7ee30eec85277bc3e45643b93f1e672f37edcd784ad8a56fd9b91303.hidden =
                          !0),
                          (__ad9ad1be7ee30eec85277bc3e45643b93f1e672f37edcd784ad8a56fd9b91303.innerHTML =
                            ""));
                      }),
                      __ad9ad1be7ee30eec85277bc3e45643b93f1e672f37edcd784ad8a56fd9b91303
                        .querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0072\u0065\u0073\u0065\u0074\u002d\u0063\u006f\u0070\u0079\u005d")
                        .addEventListener("\u0063\u006c\u0069\u0063\u006b", async () => {
                          try {
                            (await navigator.clipboard.writeText(
                              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                            ),
                              __39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd(
                                "\u0050\u0061\u0073\u0073\u0077\u006f\u0072\u0064\u0020\u0072\u0065\u0073\u0065\u0074\u0020\u006c\u0069\u006e\u006b\u0020\u0063\u006f\u0070\u0069\u0065\u0064\u002e",
                              ));
                          } catch {
                            (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.focus(),
                              __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.select(),
                              __39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd(
                                "\u0053\u0065\u006c\u0065\u0063\u0074\u0020\u0061\u006e\u0064\u0020\u0063\u006f\u0070\u0079\u0020\u0074\u0068\u0065\u0020\u0072\u0065\u0073\u0065\u0074\u0020\u006c\u0069\u006e\u006b\u002e",
                                "\u0065\u0072\u0072\u006f\u0072",
                              ));
                          }
                        }),
                      setTimeout(() => {
                        (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.focus(),
                          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.select());
                      }, 0));
                  })(__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.resetLink),
                  __39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd(
                    "\u0053\u0065\u0063\u0075\u0072\u0065\u0020\u0070\u0061\u0073\u0073\u0077\u006f\u0072\u0064\u0020\u0072\u0065\u0073\u0065\u0074\u0020\u006c\u0069\u006e\u006b\u0020\u0063\u0072\u0065\u0061\u0074\u0065\u0064\u002e",
                  ))
                : ((__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.selectedUser =
                    __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.user),
                  (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.selectedCapabilities =
                    __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.capabilities ||
                    __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.selectedCapabilities),
                  (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.access =
                    __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.access ||
                    __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.access),
                  __39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd(
                    "\u0073\u0065\u0074\u005f\u0070\u0061\u0073\u0073\u0077\u006f\u0072\u0064" ===
                      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
                      ? "\u0050\u0061\u0073\u0073\u0077\u006f\u0072\u0064\u0020\u0075\u0070\u0064\u0061\u0074\u0065\u0064\u002e\u0020\u0053\u0068\u0061\u0072\u0065\u0020\u0069\u0074\u0020\u0070\u0072\u0069\u0076\u0061\u0074\u0065\u006c\u0079\u0020\u0077\u0069\u0074\u0068\u0020\u0074\u0068\u0065\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u006f\u0077\u006e\u0065\u0072\u002e"
                      : "\u0073\u0065\u006e\u0064\u005f\u0070\u0061\u0073\u0073\u0077\u006f\u0072\u0064\u005f\u0072\u0065\u0073\u0065\u0074" ===
                          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
                        ? "\u0050\u0061\u0073\u0073\u0077\u006f\u0072\u0064\u0020\u0072\u0065\u0073\u0065\u0074\u0020\u0065\u006d\u0061\u0069\u006c\u0020\u0073\u0065\u006e\u0074\u002e"
                        : "\u0041\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0075\u0070\u0064\u0061\u0074\u0065\u0064\u002e",
                  ),
                  await __58ef4531c4cc49e5f3d6039ac41edf2a3d3e8c7c66ca150029bb295e4762de60(
                    __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.uid,
                  )),
              await __97f4a27849e10a317bc6a074a4c0b8abf3a5538b9c2b6fab100c1e9f1ef483d8({
                preserveLoading: !0,
              }));
          } catch (__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766) {
            __39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd(
              __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.message ||
                "\u0054\u0068\u0065\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0061\u0063\u0074\u0069\u006f\u006e\u0020\u0066\u0061\u0069\u006c\u0065\u0064\u002e",
              "\u0065\u0072\u0072\u006f\u0072",
            );
          } finally {
            delete __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.password;
          }
        }
        function __ad6da31f1595d094f869f658d1c0ac1a040ae12898b9085d133e0698ac7313a9(
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
        ) {
          "\u0045\u0073\u0063\u0061\u0070\u0065" === __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.key &&
            (__ad9ad1be7ee30eec85277bc3e45643b93f1e672f37edcd784ad8a56fd9b91303.hidden
              ? __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.hidden
                ? __8c4078d444da7dbfe0d1ede609257cc377791bd12f67285990dcdec41ee07d79()
                : __752decce652a288d6baba3be790f4c1f0413c77a30cc7398903b11a897276a39()
              : (
                  __ad9ad1be7ee30eec85277bc3e45643b93f1e672f37edcd784ad8a56fd9b91303.querySelector(
                    "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u006f\u006e\u0066\u0069\u0072\u006d\u002d\u0063\u0061\u006e\u0063\u0065\u006c\u005d",
                  ) ||
                  __ad9ad1be7ee30eec85277bc3e45643b93f1e672f37edcd784ad8a56fd9b91303.querySelector(
                    "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0072\u0065\u0073\u0065\u0074\u002d\u0063\u006c\u006f\u0073\u0065\u005d",
                  )
                )?.click());
        }
        function __8c4078d444da7dbfe0d1ede609257cc377791bd12f67285990dcdec41ee07d79() {
          (__70b7492fd2afd801b49aa54e66cb092c2877957e19d82afc2d22bf34f272c5f0.destroy(),
            clearInterval(__c467ac2c7adff7b534fd738cab2036bdeef9981ed15027b829c1f576f8eb8fb9),
            clearInterval(__2b795d265b8e66061093b926dc59cf2190acf00ec71598bc2b9db2943d0adee2),
            __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.controller?.abort(),
            clearTimeout(
              __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.searchTimer,
            ),
            __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.classList.remove(
              "\u0073\u0068\u006f\u0077",
            ),
            document.removeEventListener(
              "\u006b\u0065\u0079\u0064\u006f\u0077\u006e",
              __ad6da31f1595d094f869f658d1c0ac1a040ae12898b9085d133e0698ac7313a9,
            ),
            window.removeEventListener(
              "\u006e\u0079\u0078\u003a\u0070\u0072\u0065\u0073\u0065\u006e\u0063\u0065",
              __a365aee34ed4bd2674934e1eedf8ef6bf3f6eca02a87cbbb56d689c22e20348f,
            ),
            setTimeout(
              () => __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.remove(),
              180,
            ),
            __34168c7d57200d99fd97b1ec555dbf09aa9a16d1cadcc54b0e6b2db76e926d02?.overlay ===
              __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d &&
              (__34168c7d57200d99fd97b1ec555dbf09aa9a16d1cadcc54b0e6b2db76e926d02 = null));
        }
        function __a365aee34ed4bd2674934e1eedf8ef6bf3f6eca02a87cbbb56d689c22e20348f(
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
        ) {
          const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.detail?.online;
          if (
            !Number.isSafeInteger(
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
            ) ||
            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 < 0 ||
            !__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.data?.metrics
          )
            return;
          __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.data.metrics.onlineUsers =
            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53;
          const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
            __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.querySelector(
              "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0073\u0065\u0067\u006d\u0065\u006e\u0074\u003d\u0022\u006f\u006e\u006c\u0069\u006e\u0065\u0022\u005d\u0020\u0073\u0074\u0072\u006f\u006e\u0067",
            );
          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 &&
            (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.textContent =
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.toLocaleString());
        }
        return (
          __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.addEventListener(
            "\u0063\u006c\u0069\u0063\u006b",
            function (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) {
              const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0073\u0065\u0063\u0074\u0069\u006f\u006e\u005d",
                );
              if (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708)
                return __fbc53bfbe963d655ef9e75540634d95a0e7633a0eb7492033434599de806060e(
                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.dataset
                    .ownerSection,
                );
              if (
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0073\u0074\u0075\u0064\u0079\u0072\u0065\u0061\u0064\u0079\u005d",
                )
              )
                return void (async function () {
                  ((__058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.hidden = !1),
                    __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.classList.add(
                      "\u0073\u0068\u006f\u0077",
                    ),
                    (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.selectedUser =
                      null),
                    (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.selectedCapabilities =
                      null),
                    (__058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.innerHTML =
                      "\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0072\u0061\u0077\u0065\u0072\u002d\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u0022\u003e\u004c\u006f\u0061\u0064\u0069\u006e\u0067\u0020\u0053\u0074\u0075\u0064\u0079\u0052\u0065\u0061\u0064\u0079\u002e\u002e\u002e\u003c\u002f\u0064\u0069\u0076\u003e"));
                  try {
                    ((__fe36b4e094a87a33fef9573e325b2e4d89c175849be80a625e63a0551e74edcb =
                      await __0c823f772d95246c7bf82dc76d301b8902c775f0af8b8524cc7e4f76694c2a56(
                        "\u002f\u0061\u0070\u0069\u002f\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0061\u0073\u0068\u0062\u006f\u0061\u0072\u0064\u002f\u0073\u0074\u0075\u0064\u0079\u0072\u0065\u0061\u0064\u0079",
                      )),
                      __1c0ceb40e691d29a288afd2dab5906bc8b79e4fc7bdb5278134fafc74925a9df());
                  } catch (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) {
                    __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.innerHTML = `<div class="n7x-owner-error"><strong>StudyReady could not load</strong><span>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.message)}</span><button type="button" data-owner-drawer-close>Close</button></div>`;
                  }
                })();
              const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u0073\u0074\u0075\u0064\u0079\u0072\u0065\u0061\u0064\u0079\u002d\u0065\u0064\u0069\u0074\u005d",
                );
              if (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c) {
                const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
                    __fe36b4e094a87a33fef9573e325b2e4d89c175849be80a625e63a0551e74edcb.domains.find(
                      (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
                        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.hostname ===
                        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.dataset
                          .studyreadyEdit,
                    ),
                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
                    __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.querySelector(
                      "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0073\u0074\u0075\u0064\u0079\u0072\u0065\u0061\u0064\u0079\u002d\u0066\u006f\u0072\u006d\u005d",
                    );
                return (
                  (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.elements.hostname.value =
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.hostname),
                  (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.elements.title.value =
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.title),
                  void __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.elements.title.focus()
                );
              }
              const __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 =
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u0073\u0074\u0075\u0064\u0079\u0072\u0065\u0061\u0064\u0079\u002d\u0063\u0068\u0065\u0063\u006b\u005d",
                );
              if (__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766)
                return void __139d0c36df75e828404adb387dd8307cea5aee360143dbdd52f4747904ca3cb5(
                  __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766,
                  "\u0063\u0068\u0065\u0063\u006b",
                  __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.dataset
                    .studyreadyCheck,
                );
              const __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 =
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u0073\u0074\u0075\u0064\u0079\u0072\u0065\u0061\u0064\u0079\u002d\u0072\u0065\u006d\u006f\u0076\u0065\u005d",
                );
              if (__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7)
                return void __139d0c36df75e828404adb387dd8307cea5aee360143dbdd52f4747904ca3cb5(
                  __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7,
                  "\u0072\u0065\u006d\u006f\u0076\u0065",
                  __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.dataset
                    .studyreadyRemove,
                );
              if (
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0074\u0075\u0062\u0065\u002d\u0063\u0068\u0065\u0063\u006b\u005d",
                )
              )
                return void __9484356c21ee76b374b5049f3308a6a43cb70aca681123ad6982a932dbc9f9cf(!0);
              if (
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.target ===
                  __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d ||
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u006c\u006f\u0073\u0065\u005d",
                )
              )
                return __8c4078d444da7dbfe0d1ede609257cc377791bd12f67285990dcdec41ee07d79();
              if (
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0072\u0065\u0066\u0072\u0065\u0073\u0068\u005d",
                )
              )
                return void __97f4a27849e10a317bc6a074a4c0b8abf3a5538b9c2b6fab100c1e9f1ef483d8();
              if (
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0065\u0078\u0070\u006f\u0072\u0074\u005d",
                )
              )
                return (function () {
                  const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
                    __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.data
                      ?.users || [];
                  if (!__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.length)
                    return __39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd(
                      "\u0054\u0068\u0065\u0072\u0065\u0020\u0061\u0072\u0065\u0020\u006e\u006f\u0020\u0075\u0073\u0065\u0072\u0073\u0020\u006f\u006e\u0020\u0074\u0068\u0069\u0073\u0020\u0070\u0061\u0067\u0065\u0020\u0074\u006f\u0020\u0065\u0078\u0070\u006f\u0072\u0074\u002e",
                      "\u0065\u0072\u0072\u006f\u0072",
                    );
                  const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = [
                      "\u0075\u0069\u0064",
                      "\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0054\u0079\u0070\u0065",
                      "\u0064\u0069\u0073\u0070\u006c\u0061\u0079\u004e\u0061\u006d\u0065",
                      "\u0075\u0073\u0065\u0072\u006e\u0061\u006d\u0065",
                      "\u0065\u006d\u0061\u0069\u006c",
                      "\u0072\u006f\u006c\u0065",
                      "\u0073\u0075\u0062\u0073\u0063\u0072\u0069\u0070\u0074\u0069\u006f\u006e\u0053\u0074\u0061\u0074\u0075\u0073",
                      "\u006c\u0061\u0073\u0074\u0053\u0069\u0067\u006e\u0049\u006e\u0041\u0074",
                      "\u006c\u0061\u0073\u0074\u0041\u0063\u0074\u0069\u0076\u0065\u0041\u0074",
                      "\u0065\u006d\u0061\u0069\u006c\u0056\u0065\u0072\u0069\u0066\u0069\u0065\u0064",
                      "\u0064\u0069\u0073\u0061\u0062\u006c\u0065\u0064",
                    ],
                    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = [
                      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.join("\u002c"),
                      ...__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.map(
                        (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
                          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
                            .map(
                              (
                                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                              ) => {
                                return (
                                  (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
                                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f[
                                      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
                                    ]),
                                  `"${String(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 ?? "").replaceAll("\u0022", "\u0022\u0022")}"`
                                );
                                var __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708;
                              },
                            )
                            .join("\u002c"),
                      ),
                    ].join("\u000d\u000a"),
                    __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
                      URL.createObjectURL(
                        new Blob(
                          [__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708],
                          {
                            type: "\u0074\u0065\u0078\u0074\u002f\u0063\u0073\u0076\u003b\u0063\u0068\u0061\u0072\u0073\u0065\u0074\u003d\u0075\u0074\u0066\u002d\u0038",
                          },
                        ),
                      ),
                    __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 =
                      document.createElement("\u0061");
                  ((__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.href =
                    __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c),
                    (__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.download = `n7x-users-page-${__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.page}.csv`),
                    __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.click(),
                    setTimeout(
                      () =>
                        URL.revokeObjectURL(
                          __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
                        ),
                      1e3,
                    ),
                    __39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd(
                      "\u0055\u0073\u0065\u0072\u0020\u0070\u0061\u0067\u0065\u0020\u0065\u0078\u0070\u006f\u0072\u0074\u0065\u0064\u002e",
                    ));
                })();
              if (
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0067\u006c\u006f\u0062\u0061\u006c\u002d\u0061\u0070\u0070\u0073\u005d",
                )
              )
                return void (async function () {
                  ((__058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.hidden = !1),
                    __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.classList.remove(
                      "\u0073\u0068\u006f\u0077",
                    ),
                    (__058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.innerHTML =
                      "\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0072\u0061\u0077\u0065\u0072\u002d\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u0022\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u002f\u0064\u0069\u0076\u003e"),
                    requestAnimationFrame(() =>
                      __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.classList.add(
                        "\u0073\u0068\u006f\u0077",
                      ),
                    ),
                    (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.selectedUser =
                      null),
                    (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.selectedCapabilities =
                      null));
                  try {
                    const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
                      await __0c823f772d95246c7bf82dc76d301b8902c775f0af8b8524cc7e4f76694c2a56(
                        "\u002f\u0061\u0070\u0069\u002f\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0061\u0073\u0068\u0062\u006f\u0061\u0072\u0064\u002f\u0061\u0070\u0070\u0073",
                      );
                    ((__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.globalApps =
                      Array.isArray(
                        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.apps,
                      )
                        ? __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.apps
                        : []),
                      (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.access =
                        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.access ||
                        __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.access),
                      __f6947d40444e82d1cd5b78592433ba74ec6a2969ac1b948ac26f875a3403355b());
                  } catch (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) {
                    __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.innerHTML = `<div class="n7x-owner-error"><strong>Apps could not load</strong><span>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.message)}</span><button type="button" data-owner-drawer-close>Close</button></div>`;
                  }
                })();
              if (
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0072\u006f\u006c\u0065\u0073\u005d",
                )
              )
                return void (async function () {
                  ((__058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.hidden = !1),
                    __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.classList.remove(
                      "\u0073\u0068\u006f\u0077",
                    ),
                    (__058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.innerHTML =
                      "\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0072\u0061\u0077\u0065\u0072\u002d\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u0022\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u002f\u0064\u0069\u0076\u003e"),
                    requestAnimationFrame(() =>
                      __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.classList.add(
                        "\u0073\u0068\u006f\u0077",
                      ),
                    ),
                    (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.selectedUser =
                      null),
                    (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.selectedCapabilities =
                      null));
                  try {
                    const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
                      await __0c823f772d95246c7bf82dc76d301b8902c775f0af8b8524cc7e4f76694c2a56(
                        "\u002f\u0061\u0070\u0069\u002f\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0061\u0073\u0068\u0062\u006f\u0061\u0072\u0064\u002f\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0072\u006f\u006c\u0065\u0073",
                      );
                    ((__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.customRoles =
                      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.roles ||
                      []),
                      (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.customRolePlacements =
                        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.placements ||
                        []),
                      (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.customRolePermissions =
                        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.permissions ||
                        []),
                      (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.access =
                        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.access ||
                        __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.access),
                      __5b731fefb7a6d8d28de59aeb5d4426e4461fac3640efd176c605b2ebb37e3935());
                  } catch (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) {
                    __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.innerHTML = `<div class="n7x-owner-error"><strong>Custom roles could not load</strong><span>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.message)}</span><button type="button" data-owner-drawer-close>Close</button></div>`;
                  }
                })();
              if (
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0069\u0070\u002d\u0062\u0061\u006e\u0073\u005d",
                )
              )
                return void (async function () {
                  ((__058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.hidden = !1),
                    __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.classList.remove(
                      "\u0073\u0068\u006f\u0077",
                    ),
                    (__058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.innerHTML =
                      "\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0072\u0061\u0077\u0065\u0072\u002d\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u0022\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u002f\u0064\u0069\u0076\u003e"),
                    requestAnimationFrame(() =>
                      __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.classList.add(
                        "\u0073\u0068\u006f\u0077",
                      ),
                    ),
                    (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.selectedUser =
                      null),
                    (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.selectedCapabilities =
                      null));
                  try {
                    const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
                      await __0c823f772d95246c7bf82dc76d301b8902c775f0af8b8524cc7e4f76694c2a56(
                        "\u002f\u0061\u0070\u0069\u002f\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0061\u0073\u0068\u0062\u006f\u0061\u0072\u0064\u002f\u0069\u0070\u002d\u0062\u0061\u006e\u0073",
                      );
                    ((__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.ipBans =
                      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.bans ||
                      []),
                      (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.ipBanClientIp =
                        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.clientIp ||
                        ""),
                      (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.access =
                        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.access ||
                        __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.access),
                      __fa1f7d35842fe865fe85c52fb1cf70c4a661adf454a66284fb639ab404cf7d3c());
                  } catch (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) {
                    __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.innerHTML = `<div class="n7x-owner-error"><strong>IP bans could not load</strong><span>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.message)}</span><button type="button" data-owner-drawer-close>Close</button></div>`;
                  }
                })();
              if (
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0072\u006f\u006c\u0065\u002d\u006e\u0065\u0077\u005d",
                )
              )
                return (
                  (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.customRoleEditorId =
                    "\u006e\u0065\u0077"),
                  __5b731fefb7a6d8d28de59aeb5d4426e4461fac3640efd176c605b2ebb37e3935(),
                  void __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2
                    .querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0072\u006f\u006c\u0065\u002d\u0063\u0072\u0065\u0061\u0074\u0065\u005d\u0020\u0069\u006e\u0070\u0075\u0074\u005b\u006e\u0061\u006d\u0065\u003d\u0022\u006c\u0061\u0062\u0065\u006c\u0022\u005d")
                    ?.focus()
                );
              const __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 =
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0072\u006f\u006c\u0065\u002d\u0065\u0064\u0069\u0074\u005d",
                )?.dataset.ownerCustomRoleEdit;
              if (__bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061)
                return (
                  (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.customRoleEditorId =
                    __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061),
                  __5b731fefb7a6d8d28de59aeb5d4426e4461fac3640efd176c605b2ebb37e3935(),
                  void __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2
                    .querySelector(
                      `[data-owner-custom-role-update="${CSS.escape(__bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061)}"] input[name="label"]`,
                    )
                    ?.focus()
                );
              if (
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0072\u006f\u006c\u0065\u002d\u0063\u0061\u006e\u0063\u0065\u006c\u005d",
                )
              )
                return (
                  (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.customRoleEditorId =
                    ""),
                  void __5b731fefb7a6d8d28de59aeb5d4426e4461fac3640efd176c605b2ebb37e3935()
                );
              const __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e =
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0072\u006f\u006c\u0065\u002d\u0064\u0065\u006c\u0065\u0074\u0065\u005d",
                )?.dataset.ownerCustomRoleDelete;
              if (__195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e)
                return void (async function (
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                ) {
                  const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
                    __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.customRoles.find(
                      (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) =>
                        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.id ===
                        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                    );
                  if (
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 &&
                    (await __84f04fd0e6e0172a413b78d039cd02a70c6cd830268407a3b9cadf417fe4d094({
                      title: "\u0044\u0065\u006c\u0065\u0074\u0065\u0020\u0074\u0068\u0069\u0073\u0020\u0063\u0075\u0073\u0074\u006f\u006d\u0020\u0072\u006f\u006c\u0065\u003f",
                      message: `${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.label} will be removed from every assigned account. Those accounts will return to their previous built-in role.`,
                      confirmLabel: "\u0044\u0065\u006c\u0065\u0074\u0065\u0020\u0072\u006f\u006c\u0065",
                      requireText:
                        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.label,
                      danger: !0,
                    }))
                  )
                    try {
                      (await __0c823f772d95246c7bf82dc76d301b8902c775f0af8b8524cc7e4f76694c2a56(
                        `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/custom-roles/${encodeURIComponent(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f)}`,
                        {
                          method: "\u0044\u0045\u004c\u0045\u0054\u0045",
                        },
                      ),
                        (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.customRoles =
                          __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.customRoles.filter(
                            (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) =>
                              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.id !==
                              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                          )),
                        __5b731fefb7a6d8d28de59aeb5d4426e4461fac3640efd176c605b2ebb37e3935(),
                        __39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd(
                          "\u0043\u0075\u0073\u0074\u006f\u006d\u0020\u0072\u006f\u006c\u0065\u0020\u0064\u0065\u006c\u0065\u0074\u0065\u0064\u002e",
                        ),
                        await __97f4a27849e10a317bc6a074a4c0b8abf3a5538b9c2b6fab100c1e9f1ef483d8({
                          preserveLoading: !0,
                        }));
                    } catch (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708) {
                      __39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd(
                        __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.message ||
                          "\u0054\u0068\u0065\u0020\u0063\u0075\u0073\u0074\u006f\u006d\u0020\u0072\u006f\u006c\u0065\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0064\u0065\u006c\u0065\u0074\u0065\u0064\u002e",
                        "\u0065\u0072\u0072\u006f\u0072",
                      );
                    }
                })(__195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e);
              const __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22 =
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0067\u006c\u006f\u0062\u0061\u006c\u002d\u0061\u0070\u0070\u002d\u0064\u0065\u006c\u0065\u0074\u0065\u005d",
                )?.dataset.ownerGlobalAppDelete;
              if (__d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22)
                return void (async function (
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                ) {
                  const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
                    __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.globalApps.find(
                      (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) =>
                        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.id ===
                        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                    );
                  if (
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 &&
                    (await __84f04fd0e6e0172a413b78d039cd02a70c6cd830268407a3b9cadf417fe4d094({
                      title: "\u0052\u0065\u006d\u006f\u0076\u0065\u0020\u0074\u0068\u0069\u0073\u0020\u0061\u0070\u0070\u0020\u0066\u006f\u0072\u0020\u0065\u0076\u0065\u0072\u0079\u006f\u006e\u0065\u003f",
                      message: `${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.name} will disappear from the N7X app catalog for every user.`,
                      confirmLabel: "\u0052\u0065\u006d\u006f\u0076\u0065\u0020\u0061\u0070\u0070",
                      danger: !0,
                    }))
                  )
                    try {
                      const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
                        await __0c823f772d95246c7bf82dc76d301b8902c775f0af8b8524cc7e4f76694c2a56(
                          `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/apps/${encodeURIComponent(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f)}`,
                          {
                            method: "\u0044\u0045\u004c\u0045\u0054\u0045",
                          },
                        );
                      ((__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.globalApps =
                        Array.isArray(
                          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.apps,
                        )
                          ? __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.apps
                          : __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.globalApps.filter(
                              (
                                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                              ) =>
                                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.id !==
                                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                            )),
                        __f6947d40444e82d1cd5b78592433ba74ec6a2969ac1b948ac26f875a3403355b(),
                        __ccaf0d5941a22e9e19c48f49b8721d5a2130b5e0026971cb57941491d03af598(),
                        __39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd(
                          "\u0041\u0070\u0070\u0020\u0072\u0065\u006d\u006f\u0076\u0065\u0064\u0020\u0066\u006f\u0072\u0020\u0065\u0076\u0065\u0072\u0079\u006f\u006e\u0065\u002e",
                        ));
                    } catch (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708) {
                      __39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd(
                        __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.message ||
                          "\u0054\u0068\u0065\u0020\u0061\u0070\u0070\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0072\u0065\u006d\u006f\u0076\u0065\u0064\u002e",
                        "\u0065\u0072\u0072\u006f\u0072",
                      );
                    }
                })(__d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22);
              const __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e =
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0075\u006e\u0062\u0061\u006e\u005d",
                )?.dataset.ownerUnban;
              if (__6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e)
                return void (async function (
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                ) {
                  const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
                    __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.ipBans.find(
                      (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) =>
                        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.id ===
                        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                    );
                  if (
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 &&
                    (await __84f04fd0e6e0172a413b78d039cd02a70c6cd830268407a3b9cadf417fe4d094({
                      title: "\u0055\u006e\u0062\u006c\u006f\u0063\u006b\u0020\u0074\u0068\u0069\u0073\u0020\u0049\u0050\u0020\u0061\u0064\u0064\u0072\u0065\u0073\u0073\u003f",
                      message: `${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.ip} will regain access to N7X server requests.`,
                      confirmLabel: "\u0055\u006e\u0062\u006c\u006f\u0063\u006b",
                      requireText:
                        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.ip,
                    }))
                  )
                    try {
                      (await __0c823f772d95246c7bf82dc76d301b8902c775f0af8b8524cc7e4f76694c2a56(
                        `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/ip-bans/${encodeURIComponent(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f)}`,
                        {
                          method: "\u0044\u0045\u004c\u0045\u0054\u0045",
                        },
                      ),
                        (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.ipBans =
                          __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.ipBans.filter(
                            (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) =>
                              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.id !==
                              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                          )),
                        __fa1f7d35842fe865fe85c52fb1cf70c4a661adf454a66284fb639ab404cf7d3c(),
                        __39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd(
                          "\u0049\u0050\u0020\u0061\u0064\u0064\u0072\u0065\u0073\u0073\u0020\u0075\u006e\u0062\u006c\u006f\u0063\u006b\u0065\u0064\u002e",
                        ),
                        await __97f4a27849e10a317bc6a074a4c0b8abf3a5538b9c2b6fab100c1e9f1ef483d8({
                          preserveLoading: !0,
                        }));
                    } catch (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708) {
                      __39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd(
                        __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.message ||
                          "\u0054\u0068\u0065\u0020\u0049\u0050\u0020\u0061\u0064\u0064\u0072\u0065\u0073\u0073\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0075\u006e\u0062\u006c\u006f\u0063\u006b\u0065\u0064\u002e",
                        "\u0065\u0072\u0072\u006f\u0072",
                      );
                    }
                })(__6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e);
              const __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265 =
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0073\u0065\u0067\u006d\u0065\u006e\u0074\u005d",
                )?.dataset.ownerSegment;
              if (__6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265) {
                (__fbc53bfbe963d655ef9e75540634d95a0e7633a0eb7492033434599de806060e("\u0075\u0073\u0065\u0072\u0073"),
                  (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.segment =
                    __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265),
                  (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.search = ""),
                  (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.role = "\u0061\u006c\u006c"),
                  (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.subscription =
                    "\u0061\u006c\u006c"),
                  (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.status =
                    "\u0061\u006c\u006c"),
                  (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.page = 1));
                const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
                  __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.querySelector(
                    "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0066\u0069\u006c\u0074\u0065\u0072\u0073\u005d",
                  );
                return (
                  (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.elements.search.value =
                    ""),
                  (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.elements.role.value =
                    "\u0061\u006c\u006c"),
                  (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.elements.subscription.value =
                    "\u0061\u006c\u006c"),
                  (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.elements.status.value =
                    "\u0061\u006c\u006c"),
                  void __97f4a27849e10a317bc6a074a4c0b8abf3a5538b9c2b6fab100c1e9f1ef483d8()
                );
              }
              if (
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u006f\u006e\u006c\u0069\u006e\u0065\u002d\u006f\u006e\u006c\u0079\u005d",
                )
              )
                return (
                  (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.segment = ""),
                  (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.status =
                    "\u006f\u006e\u006c\u0069\u006e\u0065" ===
                    __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.status
                      ? "\u0061\u006c\u006c"
                      : "\u006f\u006e\u006c\u0069\u006e\u0065"),
                  (__da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.querySelector(
                    "\u005b\u006e\u0061\u006d\u0065\u003d\u0022\u0073\u0074\u0061\u0074\u0075\u0073\u0022\u005d",
                  ).value =
                    __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.status),
                  (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.page = 1),
                  void __97f4a27849e10a317bc6a074a4c0b8abf3a5538b9c2b6fab100c1e9f1ef483d8()
                );
              const __fcacda08e2d45e2c799c7376996c1a442e687015e3b968de16e67d8f572af52f =
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0073\u006f\u0072\u0074\u005d",
                )?.dataset.ownerSort;
              if (__fcacda08e2d45e2c799c7376996c1a442e687015e3b968de16e67d8f572af52f)
                return (
                  __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.sort ===
                  __fcacda08e2d45e2c799c7376996c1a442e687015e3b968de16e67d8f572af52f
                    ? (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.direction =
                        "\u0061\u0073\u0063" ===
                        __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.direction
                          ? "\u0064\u0065\u0073\u0063"
                          : "\u0061\u0073\u0063")
                    : ((__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.sort =
                        __fcacda08e2d45e2c799c7376996c1a442e687015e3b968de16e67d8f572af52f),
                      (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.direction =
                        "\u0061\u0073\u0063")),
                  void __97f4a27849e10a317bc6a074a4c0b8abf3a5538b9c2b6fab100c1e9f1ef483d8({
                    preserveLoading: !0,
                  })
                );
              const __b1f802c665f7bebd541821d1b764ada73ffb4fa83e79200016911a5f9dfb544c =
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0070\u0061\u0067\u0065\u005d",
                )?.dataset.ownerPage;
              if (__b1f802c665f7bebd541821d1b764ada73ffb4fa83e79200016911a5f9dfb544c)
                return (
                  (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.page =
                    Number(__b1f802c665f7bebd541821d1b764ada73ffb4fa83e79200016911a5f9dfb544c) ||
                    1),
                  void __97f4a27849e10a317bc6a074a4c0b8abf3a5538b9c2b6fab100c1e9f1ef483d8({
                    preserveLoading: !0,
                  })
                );
              const __2a7a4197494d8323fea0f175ba188cc62025fc3fcf0d33594407f5566e01d6cc =
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0073\u0065\u0061\u0072\u0063\u0068\u002d\u0068\u0069\u0073\u0074\u006f\u0072\u0079\u005d",
                )?.dataset.ownerSearchHistory;
              if (__2a7a4197494d8323fea0f175ba188cc62025fc3fcf0d33594407f5566e01d6cc) {
                const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f = (
                  __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.data?.users ||
                  []
                ).find(
                  (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.uid ===
                    __2a7a4197494d8323fea0f175ba188cc62025fc3fcf0d33594407f5566e01d6cc,
                );
                if (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f)
                  return void __5d1d7d018b007814f4953961a21fac0fd460ab60aed329b0ab736ae968586f2f(
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                  );
              }
              const __3c22b3f87a34fd589b28089a6e1fe9407580da47a00ca8a13ab4e306192fb487 =
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u006c\u0065\u0061\u0072\u002d\u0073\u0065\u0061\u0072\u0063\u0068\u002d\u0068\u0069\u0073\u0074\u006f\u0072\u0079\u005d",
                )?.dataset.ownerClearSearchHistory;
              if (
                __3c22b3f87a34fd589b28089a6e1fe9407580da47a00ca8a13ab4e306192fb487 &&
                __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.selectedUser
                  ?.uid === __3c22b3f87a34fd589b28089a6e1fe9407580da47a00ca8a13ab4e306192fb487
              )
                return void (async function (
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                ) {
                  if (
                    !__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f ||
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.guest
                  )
                    return;
                  if (
                    !(await __84f04fd0e6e0172a413b78d039cd02a70c6cd830268407a3b9cadf417fe4d094({
                      title: "\u0043\u006c\u0065\u0061\u0072\u0020\u0074\u0068\u0069\u0073\u0020\u0073\u0065\u0061\u0072\u0063\u0068\u0020\u0068\u0069\u0073\u0074\u006f\u0072\u0079\u003f",
                      message: `All retained N7X searches for ${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.displayName} will be permanently deleted. This cannot be undone.`,
                      confirmLabel: "\u0043\u006c\u0065\u0061\u0072\u0020\u0068\u0069\u0073\u0074\u006f\u0072\u0079",
                      danger: !0,
                    }))
                  )
                    return;
                  const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
                    __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.querySelector(
                      "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u006c\u0065\u0061\u0072\u002d\u0073\u0065\u0061\u0072\u0063\u0068\u002d\u0068\u0069\u0073\u0074\u006f\u0072\u0079\u005d",
                    );
                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 &&
                    (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.disabled =
                      !0);
                  try {
                    const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
                      await __0c823f772d95246c7bf82dc76d301b8902c775f0af8b8524cc7e4f76694c2a56(
                        `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/chat/moderation/search-history?uid=${encodeURIComponent(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.uid)}`,
                        {
                          method: "\u0044\u0045\u004c\u0045\u0054\u0045",
                        },
                      );
                    (__39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd(
                      `${Number(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.deletedCount || 0).toLocaleString()} search${1 === Number(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.deletedCount || 0) ? "" : "\u0065\u0073"} cleared.`,
                    ),
                      await __5d1d7d018b007814f4953961a21fac0fd460ab60aed329b0ab736ae968586f2f(
                        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                      ));
                  } catch (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708) {
                    (__39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd(
                      __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.message ||
                        "\u0053\u0065\u0061\u0072\u0063\u0068\u0020\u0068\u0069\u0073\u0074\u006f\u0072\u0079\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0063\u006c\u0065\u0061\u0072\u0065\u0064\u002e",
                      "\u0065\u0072\u0072\u006f\u0072",
                    ),
                      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53?.isConnected &&
                        (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.disabled =
                          !1));
                  }
                })(__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.selectedUser);
              const __34168c7d57200d99fd97b1ec555dbf09aa9a16d1cadcc54b0e6b2db76e926d02 =
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0076\u0069\u0065\u0077\u002d\u0075\u0073\u0065\u0072\u005d",
                )?.dataset.ownerViewUser;
              if (__34168c7d57200d99fd97b1ec555dbf09aa9a16d1cadcc54b0e6b2db76e926d02)
                return void __58ef4531c4cc49e5f3d6039ac41edf2a3d3e8c7c66ca150029bb295e4762de60(
                  __34168c7d57200d99fd97b1ec555dbf09aa9a16d1cadcc54b0e6b2db76e926d02,
                );
              if (
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0072\u0061\u0077\u0065\u0072\u002d\u0063\u006c\u006f\u0073\u0065\u005d",
                )
              )
                return __752decce652a288d6baba3be790f4c1f0413c77a30cc7398903b11a897276a39();
              const __f2e5429bdd2ce4cd74b00d064941e11cca8a1f7f3d979f1aa03955b7bbd1e125 =
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0072\u006f\u006c\u0065\u002d\u006f\u0070\u0074\u0069\u006f\u006e\u005d",
                )?.dataset.ownerRoleOption;
              if (__f2e5429bdd2ce4cd74b00d064941e11cca8a1f7f3d979f1aa03955b7bbd1e125) {
                const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
                  __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.querySelector(
                    "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0065\u0074\u0061\u0069\u006c\u002d\u0072\u006f\u006c\u0065\u005d",
                  );
                if (
                  !__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f ||
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.disabled
                )
                  return;
                return (
                  (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.value =
                    __f2e5429bdd2ce4cd74b00d064941e11cca8a1f7f3d979f1aa03955b7bbd1e125),
                  void __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106(
                    __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2,
                    __f2e5429bdd2ce4cd74b00d064941e11cca8a1f7f3d979f1aa03955b7bbd1e125,
                  )
                );
              }
              const __c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4 =
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0061\u0069\u002d\u0061\u0063\u0074\u0069\u0076\u0069\u0074\u0079\u005d",
                );
              if (__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4)
                return void (async function (
                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                ) {
                  const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
                      __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544
                        .selectedUser?.uid,
                    __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
                      __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.querySelector(
                        "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0061\u0069\u002d\u0061\u0063\u0074\u0069\u0076\u0069\u0074\u0079\u002d\u0072\u0065\u0073\u0075\u006c\u0074\u005d",
                      );
                  if (
                    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 &&
                    __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c
                  ) {
                    ((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.disabled =
                      !0),
                      (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.textContent =
                        "\u004c\u006f\u0061\u0064\u0069\u006e\u0067\u0020\u0041\u0049\u0020\u0061\u0063\u0074\u0069\u0076\u0069\u0074\u0079\u002e\u002e\u002e"));
                    try {
                      const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
                        await __0c823f772d95246c7bf82dc76d301b8902c775f0af8b8524cc7e4f76694c2a56(
                          `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/users/${encodeURIComponent(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708)}/ai`,
                        );
                      if (
                        __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544
                          .selectedUser?.uid !==
                          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 ||
                        !__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.isConnected
                      )
                        return;
                      __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.innerHTML = `<h3>Usage</h3><p>Shared allowance today: ${Number(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.today?.requests) || 0} requests, ${Number(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.today?.tokens) || 0} tokens charged or reserved.</p><p>Completed provider calls recorded since this feature was enabled. Missing token reports are listed separately.</p>${
                        Object.entries(
                          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.models ||
                            {},
                        )
                          .map(
                            ([
                              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                              __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
                            ]) =>
                              `<p><strong>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53)}</strong><br>${Number(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.requests) || 0} calls &middot; ${Number(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.input) || 0} input tokens &middot; ${Number(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.output) || 0} output tokens${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.unknownUsage ? "\u0020\u0026\u006d\u0069\u0064\u0064\u006f\u0074\u003b\u0020" + Number(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.unknownUsage) + "\u0020\u0063\u0061\u006c\u006c\u0073\u0020\u0077\u0069\u0074\u0068\u006f\u0075\u0074\u0020\u0074\u006f\u006b\u0065\u006e\u0020\u0072\u0065\u0070\u006f\u0072\u0074\u0073" : ""}</p>`,
                          )
                          .join("") || "\u003c\u0070\u003e\u004e\u006f\u0020\u0072\u0065\u0063\u006f\u0072\u0064\u0065\u0064\u0020\u0075\u0073\u0061\u0067\u0065\u0020\u0079\u0065\u0074\u002e\u003c\u002f\u0070\u003e"
                      }${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.pool ? `<p>Shared pool: ${Number(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.pool.used) || 0} tokens used &middot; resets ${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.pool.resetAt))}</p>` : ""}${(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.limits || []).map((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) => `<p>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.model)}: ${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.used} / ${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.messages ?? "\u006e\u006f\u0020\u0065\u0078\u0074\u0072\u0061\u0020\u0063\u0061\u0070"} messages &middot; ${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.resetAt ? "\u0072\u0065\u0073\u0065\u0074\u0073\u0020" + __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.resetAt)) : "\u0070\u0065\u0072\u0069\u006f\u0064\u0020\u0073\u0074\u0061\u0072\u0074\u0073\u0020\u006f\u006e\u0020\u0066\u0069\u0072\u0073\u0074\u0020\u0075\u0073\u0065"}</p>`).join("")}<h3>Recent chat history</h3><p>Up to 50 recent text exchanges. Older device-only chats, temporary chats, images and attachments are not available here. Long messages may be shortened.</p>${(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.entries || []).map((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) => `<details class="n7x-owner-ai-exchange"><summary>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.at))} &middot; ${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.model)}</summary><h4>User</h4><pre>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.prompt)}</pre><h4>Assistant</h4><pre>${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.answer || "\u0028\u004e\u006f\u0020\u0074\u0065\u0078\u0074\u0020\u0072\u0065\u0070\u006c\u0079\u0029")}</pre>${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.truncated ? "\u003c\u0070\u003e\u004c\u006f\u006e\u0067\u0020\u0074\u0065\u0078\u0074\u0020\u0073\u0068\u006f\u0072\u0074\u0065\u006e\u0065\u0064\u002e\u003c\u002f\u0070\u003e" : ""}</details>`).join("") || "\u003c\u0070\u003e\u004e\u006f\u0020\u0073\u0061\u0076\u0065\u0064\u0020\u0065\u0078\u0063\u0068\u0061\u006e\u0067\u0065\u0073\u0020\u0079\u0065\u0074\u002e\u003c\u002f\u0070\u003e"}`;
                    } catch (__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477) {
                      __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.textContent =
                        __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.message;
                    } finally {
                      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.isConnected &&
                        (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.disabled =
                          !1);
                    }
                  }
                })(__c9fd338634ef2079a0aa80dc433bae1d2472ec2f77f3d93d8ac8baff8581e9d4);
              if (
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0073\u0061\u0076\u0065\u002d\u0061\u0069\u002d\u006d\u006f\u0064\u0065\u006c\u0073\u005d",
                )
              ) {
                const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f = [
                  ...__058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.querySelectorAll(
                    "\u005b\u0064\u0061\u0074\u0061\u002d\u0061\u0069\u002d\u006d\u006f\u0064\u0065\u006c\u005d",
                  ),
                ]
                  .map((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => ({
                    model:
                      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.dataset
                        .aiModel,
                    access:
                      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.querySelector(
                        "\u005b\u0064\u0061\u0074\u0061\u002d\u0061\u0069\u002d\u0072\u0075\u006c\u0065\u002d\u0061\u0063\u0063\u0065\u0073\u0073\u005d",
                      ).value,
                    messages:
                      "" ===
                      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f
                        .querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0061\u0069\u002d\u0072\u0075\u006c\u0065\u002d\u006d\u0065\u0073\u0073\u0061\u0067\u0065\u0073\u005d")
                        .value.trim()
                        ? null
                        : Number(
                            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.querySelector(
                              "\u005b\u0064\u0061\u0074\u0061\u002d\u0061\u0069\u002d\u0072\u0075\u006c\u0065\u002d\u006d\u0065\u0073\u0073\u0061\u0067\u0065\u0073\u005d",
                            ).value,
                          ),
                    periodDays: Number(
                      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.querySelector(
                        "\u005b\u0064\u0061\u0074\u0061\u002d\u0061\u0069\u002d\u0072\u0075\u006c\u0065\u002d\u0064\u0061\u0079\u0073\u005d",
                      ).value,
                    ),
                  }))
                  .filter(
                    (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
                      "\u0064\u0065\u0066\u0061\u0075\u006c\u0074" !==
                        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.access ||
                      null !==
                        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.messages,
                  );
                return __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.some(
                  (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
                    (null !==
                      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.messages &&
                      (!Number.isSafeInteger(
                        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.messages,
                      ) ||
                        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.messages <
                          0 ||
                        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.messages >
                          1e5)) ||
                    !Number.isInteger(
                      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.periodDays,
                    ) ||
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.periodDays <
                      1 ||
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.periodDays >
                      30,
                )
                  ? __39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd(
                      "\u0055\u0073\u0065\u0020\u0077\u0068\u006f\u006c\u0065\u0020\u006e\u0075\u006d\u0062\u0065\u0072\u0073\u003a\u0020\u0030\u002d\u0031\u0030\u0030\u0030\u0030\u0030\u0020\u006d\u0065\u0073\u0073\u0061\u0067\u0065\u0073\u0020\u0061\u006e\u0064\u0020\u0031\u002d\u0033\u0030\u0020\u0072\u0065\u0073\u0065\u0074\u0020\u0064\u0061\u0079\u0073\u002e",
                      "\u0065\u0072\u0072\u006f\u0072",
                    )
                  : void __5153aa00a74bf12c35c76278300738de3f9841e1a03f4737f4ec40521faa850c(
                      "\u0073\u0065\u0074\u005f\u0061\u0069\u005f\u006d\u006f\u0064\u0065\u006c\u0073",
                      {
                        modelRules:
                          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                      },
                    );
              }
              if (
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0073\u0061\u0076\u0065\u002d\u0061\u0069\u002d\u006c\u0069\u006d\u0069\u0074\u005d",
                )
              ) {
                const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
                  Object.fromEntries(
                    ["\u006c\u0075\u006e\u0061", "\u0067\u0065\u006d\u0069\u006e\u0069"].map(
                      (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => [
                        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                        Number(
                          __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.querySelector(
                            `[data-owner-ai-limit="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f}"]`,
                          ).value,
                        ),
                      ],
                    ),
                  );
                return Object.values(
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                ).some(
                  (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
                    !Number.isSafeInteger(
                      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                    ) ||
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f < 0 ||
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f > 1e7,
                )
                  ? __39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd(
                      "\u0045\u006e\u0074\u0065\u0072\u0020\u0076\u0061\u006c\u0069\u0064\u0020\u0074\u006f\u006b\u0065\u006e\u0020\u006c\u0069\u006d\u0069\u0074\u0073\u002e",
                      "\u0065\u0072\u0072\u006f\u0072",
                    )
                  : void __5153aa00a74bf12c35c76278300738de3f9841e1a03f4737f4ec40521faa850c(
                      "\u0073\u0065\u0074\u005f\u0061\u0069\u005f\u006c\u0069\u006d\u0069\u0074",
                      {
                        monthlyModelLimits:
                          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                      },
                    );
              }
              const __ba6eb875a7e89361f0de035163d6ce786417e0fb5b2f10611696ddf4ba3a3d04 =
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0075\u0073\u0065\u0072\u002d\u0061\u0063\u0074\u0069\u006f\u006e\u005d",
                )?.dataset.ownerUserAction;
              if (__ba6eb875a7e89361f0de035163d6ce786417e0fb5b2f10611696ddf4ba3a3d04)
                __5153aa00a74bf12c35c76278300738de3f9841e1a03f4737f4ec40521faa850c(
                  __ba6eb875a7e89361f0de035163d6ce786417e0fb5b2f10611696ddf4ba3a3d04,
                );
              else if (
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0073\u0061\u0076\u0065\u002d\u0061\u0063\u0063\u0065\u0073\u0073\u005d",
                )
              ) {
                const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
                    __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.querySelector(
                      "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0065\u0074\u0061\u0069\u006c\u002d\u0072\u006f\u006c\u0065\u005d",
                    ),
                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
                    __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.querySelector(
                      "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0065\u0074\u0061\u0069\u006c\u002d\u0073\u0075\u0062\u0073\u0063\u0072\u0069\u0070\u0074\u0069\u006f\u006e\u005d",
                    ),
                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
                    __058c0a87f701ec624c8791e7595e5ea4d29bcaa256e789edc4f767a3acf885b2.querySelector(
                      "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0065\u0074\u0061\u0069\u006c\u002d\u0072\u0065\u0076\u0065\u006e\u0075\u0065\u005d",
                    ),
                  __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f?.value ||
                    (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.selectedUser
                      ?.customRole
                      ? `custom:${__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.selectedUser.customRole.id}`
                      : __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544
                          .selectedUser?.role),
                  __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 =
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53?.value ||
                    __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.selectedUser
                      ?.subscriptionStatus,
                  __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 =
                    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708
                      ? Math.round(
                          100 *
                            (Number(
                              __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.value,
                            ) || 0),
                        )
                      : __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544
                          .selectedUser?.monthlyRevenueCents,
                  __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 =
                    __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.selectedUser
                      ?.customRole
                      ? `custom:${__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.selectedUser.customRole.id}`
                      : __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544
                          .selectedUser?.role,
                  __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 = Boolean(
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f &&
                      __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c !==
                        __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061,
                  ),
                  __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e = Boolean(
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 &&
                      (__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 !==
                        __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544
                          .selectedUser?.subscriptionStatus ||
                        __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 !==
                          __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544
                            .selectedUser?.monthlyRevenueCents),
                  );
                return void (async () => {
                  if (__78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106) {
                    const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
                        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.startsWith(
                          "\u0063\u0075\u0073\u0074\u006f\u006d\u003a",
                        )
                          ? __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.customRoles.find(
                              (
                                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                              ) =>
                                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.id ===
                                __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.slice(
                                  7,
                                ),
                            )
                          : null,
                      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
                        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f?.label ||
                        __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477(
                          __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
                        );
                    if (
                      !(await __84f04fd0e6e0172a413b78d039cd02a70c6cd830268407a3b9cadf417fe4d094({
                        title: "\u0043\u0068\u0061\u006e\u0067\u0065\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0072\u006f\u006c\u0065\u003f",
                        message: `${__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.selectedUser.email || __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.selectedUser.displayName} will become ${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53}.`,
                        confirmLabel: "\u0043\u0068\u0061\u006e\u0067\u0065\u0020\u0072\u006f\u006c\u0065",
                      }))
                    )
                      return;
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f
                      ? (await __0c823f772d95246c7bf82dc76d301b8902c775f0af8b8524cc7e4f76694c2a56(
                          `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/custom-roles/${encodeURIComponent(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.id)}/assign`,
                          {
                            method: "\u0050\u004f\u0053\u0054",
                            body: JSON.stringify({
                              uid: __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544
                                .selectedUser.uid,
                            }),
                          },
                        ),
                        __39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd(
                          `${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.label} assigned.`,
                        ),
                        await __58ef4531c4cc49e5f3d6039ac41edf2a3d3e8c7c66ca150029bb295e4762de60(
                          __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544
                            .selectedUser.uid,
                        ),
                        await __97f4a27849e10a317bc6a074a4c0b8abf3a5538b9c2b6fab100c1e9f1ef483d8({
                          preserveLoading: !0,
                        }))
                      : await __5153aa00a74bf12c35c76278300738de3f9841e1a03f4737f4ec40521faa850c(
                          "\u0073\u0065\u0074\u005f\u0072\u006f\u006c\u0065",
                          {
                            role: __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
                          },
                        );
                  }
                  (__195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e &&
                    (await __5153aa00a74bf12c35c76278300738de3f9841e1a03f4737f4ec40521faa850c(
                      "\u0073\u0065\u0074\u005f\u0073\u0075\u0062\u0073\u0063\u0072\u0069\u0070\u0074\u0069\u006f\u006e",
                      {
                        subscriptionStatus:
                          __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766,
                        monthlyRevenueCents:
                          __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7,
                      },
                    )),
                    __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 ||
                      __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e ||
                      __39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd(
                        "\u004e\u006f\u0020\u0061\u0063\u0063\u0065\u0073\u0073\u0020\u0063\u0068\u0061\u006e\u0067\u0065\u0073\u0020\u0074\u006f\u0020\u0073\u0061\u0076\u0065\u002e",
                        "\u0065\u0072\u0072\u006f\u0072",
                      ));
                })();
              }
            },
          ),
          __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.addEventListener(
            "\u0063\u0068\u0061\u006e\u0067\u0065",
            function (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) {
              if (
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.target.matches(
                  "\u002e\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u006d\u0065\u0064\u0069\u0061\u002d\u0069\u006e\u0070\u0075\u0074",
                )
              ) {
                const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.target,
                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.closest(
                      "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0070\u0072\u006f\u0066\u0069\u006c\u0065\u002d\u0066\u006f\u0072\u006d\u005d",
                    ),
                  __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
                    "\u0061\u0076\u0061\u0074\u0061\u0072\u0046\u0069\u006c\u0065" ===
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.name
                      ? "\u0061\u0076\u0061\u0074\u0061\u0072"
                      : "\u0062\u0061\u006e\u006e\u0065\u0072",
                  __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 =
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.files?.[0],
                  __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 =
                    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708?.querySelector(
                      `[data-owner-media-name="${__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c}"]`,
                    ),
                  __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 =
                    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708?.querySelector(
                      `[data-owner-media-preview="${__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c}"]`,
                    ),
                  __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 =
                    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708?.querySelector(
                      "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u006d\u0065\u0064\u0069\u0061\u002d\u0065\u0072\u0072\u006f\u0072\u005d",
                    );
                if (
                  ((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53._nyxOwnerDataUrl =
                    ""),
                  (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53._nyxOwnerMediaError =
                    null),
                  !__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477)
                )
                  return;
                (__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 &&
                  (__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.textContent = `Preparing ${__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.name}...`),
                  __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 &&
                    (__bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061.textContent =
                      ""));
                const __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 =
                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708?.querySelector(
                    `[name="remove${__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c[0].toUpperCase()}${__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.slice(1)}"]`,
                  );
                __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 &&
                  (__78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106.checked = !1);
                const __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e =
                  (async function (
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
                  ) {
                    if (
                      !__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f ||
                      !/^image\/(?:png|jpe?g|webp|gif)$/i.test(
                        String(
                          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.type ||
                            "",
                        ),
                      )
                    )
                      throw new Error("\u0043\u0068\u006f\u006f\u0073\u0065\u0020\u0061\u0020\u0050\u004e\u0047\u002c\u0020\u004a\u0050\u0047\u002c\u0020\u0057\u0065\u0062\u0050\u002c\u0020\u006f\u0072\u0020\u0047\u0049\u0046\u0020\u0069\u006d\u0061\u0067\u0065\u002e");
                    if (
                      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.size >
                      8388608
                    )
                      throw new Error("\u0043\u0068\u006f\u006f\u0073\u0065\u0020\u0061\u006e\u0020\u0069\u006d\u0061\u0067\u0065\u0020\u0073\u006d\u0061\u006c\u006c\u0065\u0072\u0020\u0074\u0068\u0061\u006e\u0020\u0038\u0020\u004d\u0042\u002e");
                    if (
                      /^image\/gif$/i.test(
                        String(
                          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.type ||
                            "",
                        ),
                      )
                    ) {
                      const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
                        await __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f
                          .slice(0, 6)
                          .text();
                      if (
                        !/^GIF8[79]a$/.test(
                          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                        )
                      )
                        throw new Error("\u0054\u0068\u0061\u0074\u0020\u0066\u0069\u006c\u0065\u0020\u0069\u0073\u0020\u006e\u006f\u0074\u0020\u0061\u0020\u0076\u0061\u006c\u0069\u0064\u0020\u0047\u0049\u0046\u002e");
                      const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
                        await (function (
                          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                        ) {
                          return new Promise(
                            (
                              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                              __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
                            ) => {
                              const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
                                new FileReader();
                              ((__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.onload =
                                () =>
                                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53(
                                    String(
                                      __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.result ||
                                        "",
                                    ),
                                  )),
                                (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.onerror =
                                  () =>
                                    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708(
                                      new Error("\u0054\u0068\u0061\u0074\u0020\u0047\u0049\u0046\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u006f\u0070\u0065\u006e\u0065\u0064\u002e"),
                                    )),
                                __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.readAsDataURL(
                                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                                ));
                            },
                          );
                        })(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f);
                      if (
                        !/^data:image\/gif;base64,/i.test(
                          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
                        ) ||
                        __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.length >
                          __fcacda08e2d45e2c799c7376996c1a442e687015e3b968de16e67d8f572af52f
                      )
                        throw new Error("\u0043\u0068\u006f\u006f\u0073\u0065\u0020\u0061\u0020\u0076\u0061\u006c\u0069\u0064\u0020\u0047\u0049\u0046\u0020\u0073\u006d\u0061\u006c\u006c\u0065\u0072\u0020\u0074\u0068\u0061\u006e\u0020\u0038\u0020\u004d\u0042\u002e");
                      return __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708;
                    }
                    const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
                      URL.createObjectURL(
                        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                      );
                    try {
                      const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
                        await new Promise(
                          (
                            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                          ) => {
                            const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
                              new Image();
                            ((__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.onload =
                              () =>
                                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f(
                                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
                                )),
                              (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.onerror =
                                () =>
                                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53(
                                    new Error("\u0054\u0068\u0061\u0074\u0020\u0069\u006d\u0061\u0067\u0065\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u006f\u0070\u0065\u006e\u0065\u0064\u002e"),
                                  )),
                              (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.src =
                                __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c));
                          },
                        );
                      let __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 =
                        Math.min(
                          1,
                          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 /
                            Math.max(
                              1,
                              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.naturalWidth,
                            ),
                          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 /
                            Math.max(
                              1,
                              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.naturalHeight,
                            ),
                        );
                      for (
                        let __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = 0;
                        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 < 4;
                        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 += 1
                      ) {
                        const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
                          document.createElement("\u0063\u0061\u006e\u0076\u0061\u0073");
                        ((__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.width =
                          Math.max(
                            1,
                            Math.round(
                              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.naturalWidth *
                                __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
                            ),
                          )),
                          (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.height =
                            Math.max(
                              1,
                              Math.round(
                                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.naturalHeight *
                                  __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
                              ),
                            )),
                          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708
                            .getContext("\u0032\u0064")
                            .drawImage(
                              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                              0,
                              0,
                              __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.width,
                              __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.height,
                            ));
                        const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
                          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.toDataURL(
                            "\u0069\u006d\u0061\u0067\u0065\u002f\u0077\u0065\u0062\u0070",
                            Math.max(
                              0.52,
                              0.86 -
                                0.1 *
                                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                            ),
                          );
                        if (
                          __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.length <=
                          85e4
                        )
                          return __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c;
                        __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 *= 0.72;
                      }
                      throw new Error("\u0054\u0068\u0061\u0074\u0020\u0069\u006d\u0061\u0067\u0065\u0020\u0069\u0073\u0020\u0074\u006f\u006f\u0020\u0064\u0065\u0074\u0061\u0069\u006c\u0065\u0064\u0020\u0074\u006f\u0020\u0073\u0061\u0076\u0065\u002e\u0020\u0054\u0072\u0079\u0020\u0061\u0020\u0073\u006d\u0061\u006c\u006c\u0065\u0072\u0020\u0069\u006d\u0061\u0067\u0065\u002e");
                    } finally {
                      URL.revokeObjectURL(
                        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
                      );
                    }
                  })(
                    __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
                    "\u0061\u0076\u0061\u0074\u0061\u0072" === __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c
                      ? 512
                      : 1200,
                    "\u0061\u0076\u0061\u0074\u0061\u0072" === __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c
                      ? 512
                      : 480,
                  );
                return (
                  (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53._nyxOwnerPreparation =
                    __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e),
                  void __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e
                    .then((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => {
                      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53._nyxOwnerPreparation ===
                        __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e &&
                        ((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53._nyxOwnerDataUrl =
                          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f),
                        __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 &&
                          (__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.textContent =
                            __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.name),
                        __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 &&
                          (__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.innerHTML = `<img src="${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f}" alt="Selected ${__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c}">`));
                    })
                    .catch((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => {
                      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53._nyxOwnerPreparation ===
                        __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e &&
                        ((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53._nyxOwnerMediaError =
                          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f),
                        (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.value =
                          ""),
                        __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 &&
                          (__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.textContent =
                            "\u0043\u0068\u006f\u006f\u0073\u0065\u0020\u0061\u0020\u0064\u0069\u0066\u0066\u0065\u0072\u0065\u006e\u0074\u0020\u0069\u006d\u0061\u0067\u0065"),
                        __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 &&
                          (__bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061.textContent =
                            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.message ||
                            "\u0054\u0068\u0061\u0074\u0020\u0069\u006d\u0061\u0067\u0065\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0075\u0073\u0065\u0064\u002e"));
                    })
                    .finally(() => {
                      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53._nyxOwnerPreparation ===
                        __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e &&
                        (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53._nyxOwnerPreparation =
                          null);
                    })
                );
              }
              if (
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.target.matches(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0070\u0061\u0067\u0065\u002d\u0073\u0069\u007a\u0065\u005d",
                )
              )
                return (
                  (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.pageSize =
                    Number(
                      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.target
                        .value,
                    ) || 25),
                  (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.page = 1),
                  void __97f4a27849e10a317bc6a074a4c0b8abf3a5538b9c2b6fab100c1e9f1ef483d8()
                );
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.target.closest(
                "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0066\u0069\u006c\u0074\u0065\u0072\u0073\u005d",
              ) &&
                ("\u0072\u006f\u006c\u0065" ===
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.target.name &&
                  (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.role =
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.target.value),
                "\u0073\u0075\u0062\u0073\u0063\u0072\u0069\u0070\u0074\u0069\u006f\u006e" ===
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.target.name &&
                  (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.subscription =
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.target.value),
                "\u0073\u0074\u0061\u0074\u0075\u0073" ===
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.target.name &&
                  (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.status =
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.target.value),
                "\u0073\u0065\u0061\u0072\u0063\u0068" !==
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.target.name &&
                  ((__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.segment =
                    ""),
                  (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.page = 1),
                  __97f4a27849e10a317bc6a074a4c0b8abf3a5538b9c2b6fab100c1e9f1ef483d8()));
            },
          ),
          __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.addEventListener(
            "\u0069\u006e\u0070\u0075\u0074",
            function (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) {
              (!(function (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) {
                const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.target.closest(
                      "\u005b\u006e\u0061\u006d\u0065\u003d\u0022\u0063\u006f\u006c\u006f\u0072\u0022\u005d\u002c\u0020\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0072\u006f\u006c\u0065\u002d\u0063\u006f\u006c\u006f\u0072\u002d\u0070\u0069\u0063\u006b\u0065\u0072\u005d",
                    ),
                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53?.closest(
                      "\u002e\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0072\u006f\u006c\u0065\u002d\u0063\u006f\u006c\u006f\u0072\u002d\u0063\u006f\u006e\u0074\u0072\u006f\u006c",
                    );
                if (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708) {
                  const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f = {
                      0: "\u0023\u0030\u0030\u0030\u0030\u0030\u0030",
                      1: "\u0023\u0030\u0030\u0030\u0030\u0061\u0061",
                      2: "\u0023\u0030\u0030\u0061\u0061\u0030\u0030",
                      3: "\u0023\u0030\u0030\u0061\u0061\u0061\u0061",
                      4: "\u0023\u0061\u0061\u0030\u0030\u0030\u0030",
                      5: "\u0023\u0061\u0061\u0030\u0030\u0061\u0061",
                      6: "\u0023\u0066\u0066\u0061\u0061\u0030\u0030",
                      7: "\u0023\u0061\u0061\u0061\u0061\u0061\u0061",
                      8: "\u0023\u0035\u0035\u0035\u0035\u0035\u0035",
                      9: "\u0023\u0035\u0035\u0035\u0035\u0066\u0066",
                      a: "\u0023\u0035\u0035\u0066\u0066\u0035\u0035",
                      b: "\u0023\u0035\u0035\u0066\u0066\u0066\u0066",
                      c: "\u0023\u0066\u0066\u0035\u0035\u0035\u0035",
                      d: "\u0023\u0066\u0066\u0035\u0035\u0066\u0066",
                      e: "\u0023\u0066\u0066\u0066\u0066\u0035\u0035",
                      f: "\u0023\u0066\u0066\u0066\u0066\u0066\u0066",
                    },
                    __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
                      __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.querySelector(
                        "\u005b\u006e\u0061\u006d\u0065\u003d\u0022\u0063\u006f\u006c\u006f\u0072\u0022\u005d",
                      ),
                    __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 =
                      __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.querySelector(
                        "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0072\u006f\u006c\u0065\u002d\u0063\u006f\u006c\u006f\u0072\u002d\u0070\u0069\u0063\u006b\u0065\u0072\u005d",
                      );
                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 ===
                    __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 &&
                    __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c &&
                    (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.value =
                      __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.value);
                  const __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 = String(
                      __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c?.value ||
                        "",
                    )
                      .trim()
                      .toLowerCase(),
                    __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 =
                      /^#[0-9a-f]{6}$/.test(
                        __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766,
                      )
                        ? __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766
                        : __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f[
                            __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.match(
                              /^&([0-9a-f])$/,
                            )?.[1]
                          ];
                  __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 &&
                    __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 &&
                    __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.value !==
                      __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 &&
                    (__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.value =
                      __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7);
                }
              })(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f),
                "\u0073\u0065\u0061\u0072\u0063\u0068" ===
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.target.name &&
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.target.closest(
                    "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0066\u0069\u006c\u0074\u0065\u0072\u0073\u005d",
                  ) &&
                  (clearTimeout(
                    __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.searchTimer,
                  ),
                  (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.searchTimer =
                    setTimeout(() => {
                      ((__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.segment =
                        ""),
                        (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.search =
                          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.target.value.trim()),
                        (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.page = 1),
                        __97f4a27849e10a317bc6a074a4c0b8abf3a5538b9c2b6fab100c1e9f1ef483d8());
                    }, 280))));
            },
          ),
          __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d.addEventListener(
            "\u0073\u0075\u0062\u006d\u0069\u0074",
            function (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) {
              const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0073\u0074\u0075\u0064\u0079\u0072\u0065\u0061\u0064\u0079\u002d\u0066\u006f\u0072\u006d\u005d",
                );
              if (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) {
                if (
                  (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.preventDefault(),
                  !__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.reportValidity())
                )
                  return;
                const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.querySelector(
                    "\u005b\u0074\u0079\u0070\u0065\u003d\u0073\u0075\u0062\u006d\u0069\u0074\u005d",
                  );
                __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.disabled = !0;
                const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
                  new FormData(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53);
                return void __0c823f772d95246c7bf82dc76d301b8902c775f0af8b8524cc7e4f76694c2a56(
                  "\u002f\u0061\u0070\u0069\u002f\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0061\u0073\u0068\u0062\u006f\u0061\u0072\u0064\u002f\u0073\u0074\u0075\u0064\u0079\u0072\u0065\u0061\u0064\u0079",
                  {
                    method: "\u0050\u004f\u0053\u0054",
                    body: JSON.stringify({
                      hostname:
                        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.get(
                          "\u0068\u006f\u0073\u0074\u006e\u0061\u006d\u0065",
                        ),
                      title:
                        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.get(
                          "\u0074\u0069\u0074\u006c\u0065",
                        ),
                    }),
                  },
                )
                  .then((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => {
                    ((__fe36b4e094a87a33fef9573e325b2e4d89c175849be80a625e63a0551e74edcb =
                      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f),
                      __1c0ceb40e691d29a288afd2dab5906bc8b79e4fc7bdb5278134fafc74925a9df(),
                      __39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd(
                        "\u0053\u0074\u0075\u0064\u0079\u0052\u0065\u0061\u0064\u0079\u0020\u0064\u006f\u006d\u0061\u0069\u006e\u0020\u0073\u0061\u0076\u0065\u0064\u002e",
                      ));
                  })
                  .catch((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
                    __39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd(
                      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.message,
                      "\u0065\u0072\u0072\u006f\u0072",
                    ),
                  )
                  .finally(() => {
                    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.isConnected &&
                      (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.disabled =
                        !1);
                  });
              }
              const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0067\u006c\u006f\u0062\u0061\u006c\u002d\u0061\u0070\u0070\u002d\u0066\u006f\u0072\u006d\u005d",
                );
              if (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708) {
                if (
                  (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.preventDefault(),
                  !__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.reportValidity())
                )
                  return;
                const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.querySelector(
                    "\u005b\u0074\u0079\u0070\u0065\u003d\u0022\u0073\u0075\u0062\u006d\u0069\u0074\u0022\u005d",
                  );
                return (
                  (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.disabled =
                    !0),
                  void (async () => {
                    try {
                      const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
                          new FormData(
                            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
                          ),
                        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
                          await __0c823f772d95246c7bf82dc76d301b8902c775f0af8b8524cc7e4f76694c2a56(
                            "\u002f\u0061\u0070\u0069\u002f\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0061\u0073\u0068\u0062\u006f\u0061\u0072\u0064\u002f\u0061\u0070\u0070\u0073",
                            {
                              method: "\u0050\u004f\u0053\u0054",
                              body: JSON.stringify({
                                name: __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.get(
                                  "\u006e\u0061\u006d\u0065",
                                ),
                                url: __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.get(
                                  "\u0075\u0072\u006c",
                                ),
                              }),
                            },
                          );
                      ((__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.globalApps =
                        Array.isArray(
                          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.apps,
                        )
                          ? __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.apps
                          : [
                              ...__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.globalApps,
                              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.app,
                            ]),
                        __f6947d40444e82d1cd5b78592433ba74ec6a2969ac1b948ac26f875a3403355b(),
                        __ccaf0d5941a22e9e19c48f49b8721d5a2130b5e0026971cb57941491d03af598(),
                        __39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd(
                          "\u0041\u0070\u0070\u0020\u0061\u0064\u0064\u0065\u0064\u0020\u0066\u006f\u0072\u0020\u0065\u0076\u0065\u0072\u0079\u006f\u006e\u0065\u002e",
                        ));
                    } catch (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) {
                      __39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd(
                        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.message ||
                          "\u0054\u0068\u0065\u0020\u0061\u0070\u0070\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0061\u0064\u0064\u0065\u0064\u002e",
                        "\u0065\u0072\u0072\u006f\u0072",
                      );
                    }
                  })().finally(() => {
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.isConnected &&
                      (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.disabled =
                        !1);
                  })
                );
              }
              const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0072\u006f\u006c\u0065\u002d\u0063\u0072\u0065\u0061\u0074\u0065\u005d\u002c\u0020\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0072\u006f\u006c\u0065\u002d\u0075\u0070\u0064\u0061\u0074\u0065\u005d",
                );
              if (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c) {
                if (
                  (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.preventDefault(),
                  !__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.reportValidity())
                )
                  return;
                const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
                    new FormData(
                      __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
                    ),
                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
                    __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.dataset
                      .ownerCustomRoleUpdate || "",
                  __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 = {
                    label:
                      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.get(
                        "\u006c\u0061\u0062\u0065\u006c",
                      ),
                    color:
                      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.get(
                        "\u0063\u006f\u006c\u006f\u0072",
                      ),
                    baseRole:
                      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.get(
                        "\u0062\u0061\u0073\u0065\u0052\u006f\u006c\u0065",
                      ),
                    permissions:
                      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.getAll(
                        "\u0070\u0065\u0072\u006d\u0069\u0073\u0073\u0069\u006f\u006e\u0073",
                      ),
                  };
                __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 ||
                  (__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.id =
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.get("\u0069\u0064"));
                const __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 =
                  __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.querySelector(
                    "\u005b\u0074\u0079\u0070\u0065\u003d\u0022\u0073\u0075\u0062\u006d\u0069\u0074\u0022\u005d",
                  );
                return (
                  (__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.disabled =
                    !0),
                  void (async () => {
                    try {
                      const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
                        await __0c823f772d95246c7bf82dc76d301b8902c775f0af8b8524cc7e4f76694c2a56(
                          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708
                            ? `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/custom-roles/${encodeURIComponent(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708)}`
                            : "\u002f\u0061\u0070\u0069\u002f\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0061\u0073\u0068\u0062\u006f\u0061\u0072\u0064\u002f\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0072\u006f\u006c\u0065\u0073",
                          {
                            method:
                              __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708
                                ? "\u0050\u0041\u0054\u0043\u0048"
                                : "\u0050\u004f\u0053\u0054",
                            body: JSON.stringify(
                              __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
                            ),
                          },
                        );
                      ((__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.customRoles =
                        __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708
                          ? __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.customRoles.map(
                              (
                                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                              ) =>
                                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.id ===
                                __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708
                                  ? __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.role
                                  : __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                            )
                          : [
                              ...__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.customRoles,
                              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.role,
                            ]),
                        __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.customRoles.sort(
                          (
                            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                          ) =>
                            Number(
                              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.rank ||
                                0,
                            ) -
                              Number(
                                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.rank ||
                                  0,
                              ) ||
                            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.label.localeCompare(
                              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.label,
                            ),
                        ),
                        (__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.customRoleEditorId =
                          ""),
                        __5b731fefb7a6d8d28de59aeb5d4426e4461fac3640efd176c605b2ebb37e3935(),
                        __39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd(
                          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708
                            ? "\u0043\u0075\u0073\u0074\u006f\u006d\u0020\u0072\u006f\u006c\u0065\u0020\u0075\u0070\u0064\u0061\u0074\u0065\u0064\u002e"
                            : "\u0043\u0075\u0073\u0074\u006f\u006d\u0020\u0072\u006f\u006c\u0065\u0020\u0063\u0072\u0065\u0061\u0074\u0065\u0064\u002e",
                        ),
                        await __97f4a27849e10a317bc6a074a4c0b8abf3a5538b9c2b6fab100c1e9f1ef483d8({
                          preserveLoading: !0,
                        }));
                    } catch (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) {
                      __39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd(
                        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.message ||
                          "\u0054\u0068\u0065\u0020\u0063\u0075\u0073\u0074\u006f\u006d\u0020\u0072\u006f\u006c\u0065\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0073\u0061\u0076\u0065\u0064\u002e",
                        "\u0065\u0072\u0072\u006f\u0072",
                      );
                    }
                  })().finally(() => {
                    __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.isConnected &&
                      (__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.disabled =
                        !1);
                  })
                );
              }
              const __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 =
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0069\u0070\u002d\u0062\u0061\u006e\u002d\u0066\u006f\u0072\u006d\u005d",
                );
              if (__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477) {
                if (
                  (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.preventDefault(),
                  !__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.reportValidity())
                )
                  return;
                const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
                  __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.querySelector(
                    "\u005b\u0074\u0079\u0070\u0065\u003d\u0022\u0073\u0075\u0062\u006d\u0069\u0074\u0022\u005d",
                  );
                return (
                  (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.disabled =
                    !0),
                  void (async () => {
                    try {
                      const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
                          new FormData(
                            __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
                          ),
                        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
                          await __0c823f772d95246c7bf82dc76d301b8902c775f0af8b8524cc7e4f76694c2a56(
                            "\u002f\u0061\u0070\u0069\u002f\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0061\u0073\u0068\u0062\u006f\u0061\u0072\u0064\u002f\u0069\u0070\u002d\u0062\u0061\u006e\u0073",
                            {
                              method: "\u0050\u004f\u0053\u0054",
                              body: JSON.stringify({
                                ip: __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.get(
                                  "\u0069\u0070",
                                ),
                                reason:
                                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.get(
                                    "\u0072\u0065\u0061\u0073\u006f\u006e",
                                  ),
                              }),
                            },
                          );
                      ((__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.ipBans =
                        [
                          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.ban,
                          ...__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544.ipBans.filter(
                            (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
                              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.id !==
                              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.ban
                                .id,
                          ),
                        ]),
                        __fa1f7d35842fe865fe85c52fb1cf70c4a661adf454a66284fb639ab404cf7d3c(),
                        __39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd(
                          "\u0049\u0050\u0020\u0061\u0064\u0064\u0072\u0065\u0073\u0073\u0020\u0062\u006c\u006f\u0063\u006b\u0065\u0064\u002e",
                        ),
                        await __97f4a27849e10a317bc6a074a4c0b8abf3a5538b9c2b6fab100c1e9f1ef483d8({
                          preserveLoading: !0,
                        }));
                    } catch (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) {
                      __39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd(
                        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.message ||
                          "\u0054\u0068\u0065\u0020\u0049\u0050\u0020\u0061\u0064\u0064\u0072\u0065\u0073\u0073\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0062\u006c\u006f\u0063\u006b\u0065\u0064\u002e",
                        "\u0065\u0072\u0072\u006f\u0072",
                      );
                    }
                  })().finally(() => {
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.isConnected &&
                      (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.disabled =
                        !1);
                  })
                );
              }
              const __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 =
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0070\u0072\u006f\u0066\u0069\u006c\u0065\u002d\u0066\u006f\u0072\u006d\u005d",
                );
              if (!__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766) return;
              if (
                (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.preventDefault(),
                !__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.reportValidity())
              )
                return;
              const __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 =
                __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.querySelector(
                  "\u005b\u0074\u0079\u0070\u0065\u003d\u0022\u0073\u0075\u0062\u006d\u0069\u0074\u0022\u005d",
                );
              __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.disabled = !0;
              const __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 =
                __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.textContent;
              (async () => {
                try {
                  const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f = [
                      ...__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.querySelectorAll(
                        "\u002e\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u006d\u0065\u0064\u0069\u0061\u002d\u0069\u006e\u0070\u0075\u0074",
                      ),
                    ],
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
                      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f
                        .map(
                          (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
                            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f._nyxOwnerPreparation,
                        )
                        .filter(Boolean);
                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.length &&
                    ((__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.textContent =
                      "\u0050\u0072\u0065\u0070\u0061\u0072\u0069\u006e\u0067\u0020\u006d\u0065\u0064\u0069\u0061\u2026"),
                    await Promise.all(
                      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                    ));
                  const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.find(
                      (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
                        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f._nyxOwnerMediaError,
                    )?._nyxOwnerMediaError;
                  if (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708)
                    throw __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708;
                  const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
                      new FormData(
                        __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766,
                      ),
                    __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 = {
                      displayName:
                        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.get(
                          "\u0064\u0069\u0073\u0070\u006c\u0061\u0079\u004e\u0061\u006d\u0065",
                        ),
                      handle:
                        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.get(
                          "\u0068\u0061\u006e\u0064\u006c\u0065",
                        ),
                      bio: __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.get(
                        "\u0062\u0069\u006f",
                      ),
                      customStatus:
                        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.get(
                          "\u0063\u0075\u0073\u0074\u006f\u006d\u0053\u0074\u0061\u0074\u0075\u0073",
                        ),
                      status:
                        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.get(
                          "\u0073\u0074\u0061\u0074\u0075\u0073",
                        ),
                      accentPrimary:
                        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.get(
                          "\u0061\u0063\u0063\u0065\u006e\u0074\u0050\u0072\u0069\u006d\u0061\u0072\u0079",
                        ),
                      accentSecondary:
                        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.get(
                          "\u0061\u0063\u0063\u0065\u006e\u0074\u0053\u0065\u0063\u006f\u006e\u0064\u0061\u0072\u0079",
                        ),
                      bannerColor:
                        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.get(
                          "\u0062\u0061\u006e\u006e\u0065\u0072\u0043\u006f\u006c\u006f\u0072",
                        ),
                      displayNameFont:
                        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.get(
                          "\u0064\u0069\u0073\u0070\u006c\u0061\u0079\u004e\u0061\u006d\u0065\u0046\u006f\u006e\u0074",
                        ),
                      displayNameEffect:
                        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.get(
                          "\u0064\u0069\u0073\u0070\u006c\u0061\u0079\u004e\u0061\u006d\u0065\u0045\u0066\u0066\u0065\u0063\u0074",
                        ),
                      profileEffect:
                        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.get(
                          "\u0070\u0072\u006f\u0066\u0069\u006c\u0065\u0045\u0066\u0066\u0065\u0063\u0074",
                        ),
                      avatarDecoration:
                        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.get(
                          "\u0061\u0076\u0061\u0074\u0061\u0072\u0044\u0065\u0063\u006f\u0072\u0061\u0074\u0069\u006f\u006e",
                        ),
                    },
                    __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 = {
                      avatar:
                        "\u006f\u006e" ===
                        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.get(
                          "\u0072\u0065\u006d\u006f\u0076\u0065\u0041\u0076\u0061\u0074\u0061\u0072",
                        ),
                      banner:
                        "\u006f\u006e" ===
                        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.get(
                          "\u0072\u0065\u006d\u006f\u0076\u0065\u0042\u0061\u006e\u006e\u0065\u0072",
                        ),
                    };
                  for (const __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 of [
                    "\u0061\u0076\u0061\u0074\u0061\u0072",
                    "\u0062\u0061\u006e\u006e\u0065\u0072",
                  ]) {
                    const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
                        __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.querySelector(
                          `[name="${__78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106}File"]`,
                        ),
                      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = String(
                        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.get(
                          `${__78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106}Url`,
                        ) || "",
                      ).trim();
                    if (
                      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f?.files?.[0]
                    ) {
                      if (
                        !__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f._nyxOwnerDataUrl
                      )
                        throw new Error(
                          `The selected ${__78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106} is not ready. Choose it again.`,
                        );
                      ((__bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061[
                        __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106
                      ] = !1),
                        (__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.textContent = `Uploading ${__78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106}\u2026`),
                        (__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477[
                          `${__78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106}Url`
                        ] =
                          await __3cca2ce1237f8b1a2a4c833ff7467c567f535ca6dab40efb4ab74bff235842c4(
                            __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544
                              .selectedUser.uid,
                            __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106,
                            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f._nyxOwnerDataUrl,
                            (
                              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                            ) => {
                              __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.textContent = `Uploading ${__78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106} ${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f}%`;
                            },
                          )));
                    } else
                      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 &&
                        (__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477[
                          `${__78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106}Url`
                        ] = __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53);
                  }
                  ((__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.textContent =
                    "\u0053\u0061\u0076\u0069\u006e\u0067\u2026"),
                    await __5153aa00a74bf12c35c76278300738de3f9841e1a03f4737f4ec40521faa850c(
                      "\u0073\u0065\u0074\u005f\u0070\u0072\u006f\u0066\u0069\u006c\u0065",
                      {
                        profile: __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
                        removeAvatar:
                          __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061.avatar,
                        removeBanner:
                          __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061.banner,
                      },
                    ));
                } catch (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) {
                  const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
                    __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.querySelector(
                      "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u006d\u0065\u0064\u0069\u0061\u002d\u0065\u0072\u0072\u006f\u0072\u005d",
                    );
                  (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 &&
                    (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.textContent =
                      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.message ||
                      "\u0050\u0072\u006f\u0066\u0069\u006c\u0065\u0020\u006d\u0065\u0064\u0069\u0061\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0073\u0061\u0076\u0065\u0064\u002e"),
                    __39991a9888da904fa132b0197b7f911610d921a7bd6838740c38b8c0f8a94bfd(
                      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.message ||
                        "\u0050\u0072\u006f\u0066\u0069\u006c\u0065\u0020\u006d\u0065\u0064\u0069\u0061\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0073\u0061\u0076\u0065\u0064\u002e",
                      "\u0065\u0072\u0072\u006f\u0072",
                    ));
                }
              })().finally(() => {
                __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.isConnected &&
                  ((__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.disabled =
                    !1),
                  (__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.textContent =
                    __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061));
              });
            },
          ),
          window.addEventListener(
            "\u006e\u0079\u0078\u003a\u0070\u0072\u0065\u0073\u0065\u006e\u0063\u0065",
            __a365aee34ed4bd2674934e1eedf8ef6bf3f6eca02a87cbbb56d689c22e20348f,
          ),
          document.addEventListener(
            "\u006b\u0065\u0079\u0064\u006f\u0077\u006e",
            __ad6da31f1595d094f869f658d1c0ac1a040ae12898b9085d133e0698ac7313a9,
          ),
          __0dc7a36794699d66fd283721637876e91e1e84cedac0a0ff0701273b2b70ed7c(),
          __97f4a27849e10a317bc6a074a4c0b8abf3a5538b9c2b6fab100c1e9f1ef483d8(),
          {
            overlay: __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d,
            destroy: __8c4078d444da7dbfe0d1ede609257cc377791bd12f67285990dcdec41ee07d79,
            refresh: __97f4a27849e10a317bc6a074a4c0b8abf3a5538b9c2b6fab100c1e9f1ef483d8,
          }
        );
      })(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53)),
      __34168c7d57200d99fd97b1ec555dbf09aa9a16d1cadcc54b0e6b2db76e926d02
    ),
    close: __f2e5429bdd2ce4cd74b00d064941e11cca8a1f7f3d979f1aa03955b7bbd1e125,
  });
})();
