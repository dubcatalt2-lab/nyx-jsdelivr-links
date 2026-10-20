(() => {
  "use strict";
  const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = (
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    ) =>
      String(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ?? "").replace(
        /[&<>"']/g,
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
          ({
            "\u0026": "\u0026\u0061\u006d\u0070\u003b",
            "\u003c": "\u0026\u006c\u0074\u003b",
            "\u003e": "\u0026\u0067\u0074\u003b",
            "\u0022": "\u0026\u0071\u0075\u006f\u0074\u003b",
            "\u0027": "\u0026\u0023\u0033\u0039\u003b",
          })[__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96],
      ),
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = Object.freeze({
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
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = Object.freeze({
      co_owner: "\u006f\u0077\u006e\u0065\u0072",
      manager: "\u0061\u0064\u006d\u0069\u006e",
      support: "\u006d\u006f\u0064\u0065\u0072\u0061\u0074\u006f\u0072",
      tester: "\u0064\u0065\u0076\u0065\u006c\u006f\u0070\u0065\u0072",
      contributor: "\u0064\u0065\u0076\u0065\u006c\u006f\u0070\u0065\u0072",
      guest: "\u006d\u0065\u006d\u0062\u0065\u0072",
    }),
    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = Object.freeze([
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
    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = (
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    ) =>
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5[
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
      ] || "\u004d\u0065\u006d\u0062\u0065\u0072",
    __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a = (
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    ) =>
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.customRole?.label ||
      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.role,
      ),
    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc = (
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    ) =>
      /^#[0-9a-f]{6}$/i.test(
        String(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.customRole?.color ||
            "",
        ),
      )
        ? __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.customRole.color
        : "",
    __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = (
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
    ) =>
      `<img class="n7x-owner-role-icon" src="/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/assets/icons/roles/${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c[__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5] || __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5)}.png" alt="" aria-hidden="true">`,
    __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 = (
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
    ) =>
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
        ?.querySelectorAll?.("\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0072\u006f\u006c\u0065\u002d\u006f\u0070\u0074\u0069\u006f\u006e\u005d")
        .forEach((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
          const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.dataset
              .ownerRoleOption ===
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5;
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.classList.toggle(
            "\u0061\u0063\u0074\u0069\u0076\u0065",
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
          ),
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.setAttribute(
              "\u0061\u0072\u0069\u0061\u002d\u0063\u0068\u0065\u0063\u006b\u0065\u0064",
              String(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c),
            ));
        }),
    __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f = (
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    ) =>
      ({
        none: "\u004e\u006f\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074",
        free: "\u0046\u0072\u0065\u0065",
        premium: "\u0050\u0072\u0065\u006d\u0069\u0075\u006d",
        trialing: "\u0054\u0072\u0069\u0061\u006c",
        past_due: "\u0050\u0061\u0073\u0074\u0020\u0064\u0075\u0065",
        canceled: "\u0043\u0061\u006e\u0063\u0065\u006c\u0065\u0064",
      })[__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96] || "\u0046\u0072\u0065\u0065",
    __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 = (
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    ) =>
      String(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 || "")
        .replaceAll("\u005f", "\u0020")
        .replace(/\b\w/g, (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.toUpperCase(),
        ),
    __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1 = (
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    ) => {
      const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = new Date(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 || "",
      );
      return Number.isNaN(
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.getTime(),
      )
        ? "\u004e\u0065\u0076\u0065\u0072"
        : new Intl.DateTimeFormat(void 0, {
            dateStyle: "\u006d\u0065\u0064\u0069\u0075\u006d",
            timeStyle: "\u0073\u0068\u006f\u0072\u0074",
          }).format(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5);
    },
    __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 = (
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    ) => {
      const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = Date.parse(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 || "",
      );
      if (!__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) return "\u004e\u0065\u0076\u0065\u0072";
      const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = Math.round(
          (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 - Date.now()) / 1e3,
        ),
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
          new Intl.RelativeTimeFormat(void 0, {
            numeric: "\u0061\u0075\u0074\u006f",
          });
      if (Math.abs(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c) < 60)
        return __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.format(
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
          "\u0073\u0065\u0063\u006f\u006e\u0064",
        );
      const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = Math.round(
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c / 60,
      );
      if (Math.abs(__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713) < 60)
        return __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.format(
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
          "\u006d\u0069\u006e\u0075\u0074\u0065",
        );
      const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a = Math.round(
        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 / 60,
      );
      return Math.abs(__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a) < 24
        ? __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.format(
            __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
            "\u0068\u006f\u0075\u0072",
          )
        : __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.format(
            Math.round(__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a / 24),
            "\u0064\u0061\u0079",
          );
    },
    __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe = (
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    ) => {
      const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = String(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 || "",
      ).toLowerCase();
      return /(sign.?in|login|session|online)/.test(
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
      )
        ? "\u006f\u006e\u006c\u0069\u006e\u0065"
        : /(sign.?up|create|invite|register)/.test(
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
            )
          ? "\u0073\u0069\u0067\u006e\u0075\u0070"
          : /(premium|subscription|payment|revenue|billing)/.test(
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
              )
            ? "\u0070\u0072\u0065\u006d\u0069\u0075\u006d"
            : /(user|account|profile|role)/.test(
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                )
              ? "\u0075\u0073\u0065\u0072\u0073"
              : "\u0061\u0063\u0074\u0069\u0076\u0069\u0074\u0079";
    },
    __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a = 1125e4,
    __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d = new Map(),
    __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161 = new Map();
  function __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = String(
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 || "",
    ).trim();
    return /^\/api\/profile-media\/[A-Za-z0-9_-]{8,128}\/(?:avatar|banner)\/[A-Za-z0-9_-]{12,80}$/.test(
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
    )
      ? __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
      : "";
  }
  function __d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21(
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = "",
    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = "",
  ) {
    const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
      __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34(
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
      );
    return __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713
      ? `<img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-owner-profile-media="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713)}" data-owner-media-fallback="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03)}" alt="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c)}">`
      : __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
        ? `<img src="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5)}" alt="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c)}">`
        : __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
          );
  }
  async function __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = [
      ...(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.querySelectorAll?.(
        "\u0069\u006d\u0067\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0070\u0072\u006f\u0066\u0069\u006c\u0065\u002d\u006d\u0065\u0064\u0069\u0061\u005d",
      ) || []),
    ];
    await Promise.all(
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.map(
        async (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
          const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = String(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.dataset
              .ownerMediaFallback || "",
          );
          try {
            const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
              await (async function (
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              ) {
                const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                  __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34(
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                  );
                if (!__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5)
                  return null;
                if (
                  __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d.has(
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                  )
                )
                  return __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d.get(
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                  );
                if (
                  __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.has(
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                  )
                )
                  return __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.get(
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                  );
                const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                  (async () => {
                    const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
                        await fetch(
                          `${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5}/manifest`,
                          {
                            cache: "\u0066\u006f\u0072\u0063\u0065\u002d\u0063\u0061\u0063\u0068\u0065",
                          },
                        ),
                      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                        await __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
                          .json()
                          .catch(() => ({})),
                      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = String(
                        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.mime ||
                          "",
                      ).toLowerCase(),
                      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = Number(
                        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.totalChunks ||
                          0,
                      );
                    if (
                      !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.ok ||
                      !/^image\/(?:gif|png|jpeg|webp)$/.test(
                        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                      ) ||
                      !Number.isInteger(
                        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
                      ) ||
                      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 < 1 ||
                      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 > 32
                    )
                      throw new Error("\u0054\u0068\u0061\u0074\u0020\u0073\u0061\u0076\u0065\u0064\u0020\u0070\u0072\u006f\u0066\u0069\u006c\u0065\u0020\u0069\u006d\u0061\u0067\u0065\u0020\u0069\u0073\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u002e");
                    const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a = (
                        await Promise.all(
                          Array.from(
                            {
                              length:
                                __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
                            },
                            async (
                              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                            ) => {
                              const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                                  await fetch(
                                    `${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5}/chunks/${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c}`,
                                    {
                                      cache: "\u0066\u006f\u0072\u0063\u0065\u002d\u0063\u0061\u0063\u0068\u0065",
                                    },
                                  ),
                                __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
                                  (
                                    await __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.text()
                                  ).trim();
                              if (
                                !__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.ok ||
                                !__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 ||
                                !/^[a-z0-9+/=]+$/i.test(
                                  __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
                                )
                              )
                                throw new Error("\u0054\u0068\u0061\u0074\u0020\u0073\u0061\u0076\u0065\u0064\u0020\u0070\u0072\u006f\u0066\u0069\u006c\u0065\u0020\u0069\u006d\u0061\u0067\u0065\u0020\u0069\u0073\u0020\u0069\u006e\u0063\u006f\u006d\u0070\u006c\u0065\u0074\u0065\u002e");
                              return __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713;
                            },
                          ),
                        )
                      ).map(
                        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
                          const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                              atob(
                                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                              ),
                            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                              new Uint8Array(
                                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.length,
                              );
                          for (
                            let __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = 0;
                            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 <
                            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.length;
                            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 += 1
                          )
                            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c[
                              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03
                            ] =
                              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.charCodeAt(
                                __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                              );
                          return __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c;
                        },
                      ),
                      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc = new Blob(
                        __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
                        {
                          type: __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                        },
                      );
                    if (
                      Number(
                        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.byteLength ||
                          0,
                      ) > 0 &&
                      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.size !==
                        Number(
                          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.byteLength,
                        )
                    )
                      throw new Error("\u0054\u0068\u0061\u0074\u0020\u0073\u0061\u0076\u0065\u0064\u0020\u0070\u0072\u006f\u0066\u0069\u006c\u0065\u0020\u0069\u006d\u0061\u0067\u0065\u0020\u0064\u0069\u0064\u0020\u006e\u006f\u0074\u0020\u0070\u0061\u0073\u0073\u0020\u0069\u0074\u0073\u0020\u0073\u0069\u007a\u0065\u0020\u0063\u0068\u0065\u0063\u006b\u002e");
                    const __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = {
                      url: URL.createObjectURL(
                        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
                      ),
                      mime: __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                      size: __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.size,
                    };
                    return (
                      __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d.set(
                        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2,
                      ),
                      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2
                    );
                  })().finally(() =>
                    __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.delete(
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                    ),
                  );
                return (
                  __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.set(
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                  ),
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
                );
              })(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.dataset
                  .ownerProfileMedia,
              );
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.isConnected &&
              (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.src =
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.url);
          } catch {
            if (!__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.isConnected)
              return;
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
              ? __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.replaceWith(
                  document.createTextNode(
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                  ),
                )
              : __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.remove();
          }
        },
      ),
    );
  }
  let __fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797 = null;
  function __51e241f4e1ab21052e5631abbf6ddcfbf931e3f1ce73d61a5a8454c170b94eba() {
    (__fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797?.destroy?.(),
      (__fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797 = null));
  }
  function __319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
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
      }[__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96] || ""
    }</svg>`;
  }
  globalThis.NyxOwnerDashboard = Object.freeze({
    open: (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) => (
      __51e241f4e1ab21052e5631abbf6ddcfbf931e3f1ce73d61a5a8454c170b94eba(),
      (__fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797 = (function ({
        getToken: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        toast: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
        onPresence: __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d,
      } = {}) {
        if ("\u0066\u0075\u006e\u0063\u0074\u0069\u006f\u006e" != typeof __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5)
          throw new Error("\u004f\u0077\u006e\u0065\u0072\u0020\u0061\u0075\u0074\u0068\u0065\u006e\u0074\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u0020\u0069\u0073\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u002e");
        const __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161 = {
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
          __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34 =
            document.createElement("\u0073\u0065\u0063\u0074\u0069\u006f\u006e");
        ((__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.className =
          "\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0061\u0073\u0068\u0062\u006f\u0061\u0072\u0064\u002d\u006f\u0076\u0065\u0072\u006c\u0061\u0079\u0020\u006f\u0077\u006e\u0065\u0072\u002d\u006f\u0072\u0067\u0061\u006e\u0069\u007a\u0065\u0064"),
          __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.setAttribute(
            "\u0072\u006f\u006c\u0065",
            "\u0064\u0069\u0061\u006c\u006f\u0067",
          ),
          __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.setAttribute(
            "\u0061\u0072\u0069\u0061\u002d\u006d\u006f\u0064\u0061\u006c",
            "\u0074\u0072\u0075\u0065",
          ),
          __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.setAttribute(
            "\u0061\u0072\u0069\u0061\u002d\u006c\u0061\u0062\u0065\u006c\u006c\u0065\u0064\u0062\u0079",
            "\u006e\u0037\u0078\u004f\u0077\u006e\u0065\u0072\u0044\u0061\u0073\u0068\u0062\u006f\u0061\u0072\u0064\u0054\u0069\u0074\u006c\u0065",
          ),
          (__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.innerHTML = `\n      <main class="n7x-owner-dashboard">\n        <header class="n7x-owner-header">\n          <div><span class="n7x-owner-eyebrow">${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0073\u0068\u0069\u0065\u006c\u0064")}N7X ADMINISTRATION</span><h1 id="n7xOwnerDashboardTitle">Owner Dashboard</h1><p data-owner-access-copy>Loading your role permissions\u2026</p></div>\n          <div class="n7x-owner-header-actions">\n            <button type="button" data-owner-refresh>${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0072\u0065\u0066\u0072\u0065\u0073\u0068")}<span>Refresh</span></button>\n            <button class="n7x-owner-close" type="button" data-owner-close aria-label="Close owner dashboard">${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0063\u006c\u006f\u0073\u0065")}</button>\n          </div>\n        </header>\n        <nav class="n7x-owner-nav" aria-label="Dashboard sections">${[
            ["\u006f\u0076\u0065\u0072\u0076\u0069\u0065\u0077", "\u004f\u0076\u0065\u0072\u0076\u0069\u0065\u0077"],
            ["\u0075\u0073\u0065\u0072\u0073", "\u0055\u0073\u0065\u0072\u0073"],
            ["\u0073\u0065\u0072\u0076\u0069\u0063\u0065\u0073", "\u0053\u0065\u0072\u0076\u0069\u0063\u0065\u0073"],
            ["\u0061\u0063\u0074\u0069\u0076\u0069\u0074\u0079", "\u0041\u0063\u0074\u0069\u0076\u0069\u0074\u0079"],
          ]
            .map(
              ([
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
              ]) =>
                `<button type="button" data-owner-section="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96}" aria-pressed="${"\u006f\u0076\u0065\u0072\u0076\u0069\u0065\u0077" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96}" aria-controls="n7x-owner-section-${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96}">${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5}</button>`,
            )
            .join(
              "",
            )}</nav>\n        <section class="n7x-owner-section" data-owner-panel="overview" id="n7x-owner-section-overview" aria-label="Overview">\n          <div class="n7x-owner-section-heading"><h2>At a glance</h2><p>Choose a metric to view matching accounts.</p></div>\n          <section class="n7x-owner-metrics" data-owner-metrics aria-label="Account metrics"></section>\n          <section class="n7x-owner-traffic" data-owner-traffic hidden aria-label="Server traffic"></section>\n        </section>\n        <section class="n7x-owner-section" data-owner-panel="services" id="n7x-owner-section-services" aria-label="Services" hidden>\n          <div class="n7x-owner-section-heading"><h2>Services</h2><p>Balances, playback health, and game reports.</p></div>\n          <div class="n7x-owner-service-grid">\n            <section class="n7x-owner-tube-status" data-owner-ai-status hidden aria-live="polite"></section>\n            <section class="n7x-owner-tube-status" data-owner-tube-status hidden aria-live="polite"></section>\n            <section class="n7x-owner-tube-status" data-owner-game-reports hidden></section>\n          </div>\n        </section>\n        <section class="n7x-owner-workspace n7x-owner-section" data-owner-panel="users" id="n7x-owner-section-users" aria-label="Users" hidden>\n          <div class="n7x-owner-users-panel">\n            <header class="n7x-owner-panel-head">\n              <div><h2>${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0075\u0073\u0065\u0072\u0073")}Users</h2><span data-owner-user-count>Loading accounts\u2026</span></div>\n              <div class="n7x-owner-quick-actions">\n                <button type="button" data-owner-online-only>${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u006f\u006e\u006c\u0069\u006e\u0065")}Online users</button>\n                <button type="button" data-owner-export>${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0064\u006f\u0077\u006e\u006c\u006f\u0061\u0064")}Export page</button>\n                <button type="button" data-owner-global-apps hidden>${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0061\u0070\u0070\u0073")}Manage apps</button><button type="button" data-owner-studyready hidden>${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0061\u0070\u0070\u0073")}StudyReady</button>\n                <button type="button" data-owner-custom-roles hidden>${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0075\u0073\u0065\u0072\u0073")}Custom roles</button>\n                <button type="button" data-owner-ip-bans hidden>${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0073\u0068\u0069\u0065\u006c\u0064")}IP bans</button>\n              </div>\n            </header>\n            <form class="n7x-owner-filters" data-owner-filters>\n              <label class="n7x-owner-search">${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0073\u0065\u0061\u0072\u0063\u0068")}<input type="search" name="search" placeholder="Search name, username, email, or UID" autocomplete="off"></label>\n              <select name="role" aria-label="Filter by role"><option value="all">All roles</option><option value="guest">Guest</option><option value="owner">Owner</option><option value="co_owner">Co-owner</option><option value="admin">Admin</option><option value="manager">Manager</option><option value="developer">Developer</option><option value="moderator">Moderator</option><option value="support">Support</option><option value="tester">Tester</option><option value="contributor">Contributor</option><option value="member">Member</option></select>\n              <select name="subscription" aria-label="Filter by subscription"><option value="all">All subscriptions</option><option value="none">No account</option><option value="free">Free</option><option value="premium">Premium</option><option value="trialing">Trial</option><option value="past_due">Past due</option><option value="canceled">Canceled</option></select>\n              <select name="status" aria-label="Filter by account status"><option value="all">All accounts</option><option value="enabled">Enabled</option><option value="disabled">Disabled</option><option value="online">Online now</option><option value="offline">Offline</option></select>\n            </form>\n            <div class="n7x-owner-table-wrap" data-owner-table aria-live="polite"></div>\n            <footer class="n7x-owner-pagination" data-owner-pagination></footer>\n          </div>\n        </section>\n        <section class="n7x-owner-section" data-owner-panel="activity" id="n7x-owner-section-activity" aria-label="Activity" hidden>\n          <aside class="n7x-owner-activity-panel">\n            <header><div><h2>${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0061\u0063\u0074\u0069\u0076\u0069\u0074\u0079")}Activity logs</h2><span>Security and account events</span></div></header>\n            <div class="n7x-owner-activity-list" data-owner-activity></div>\n          </aside>\n        </section>\n      </main>\n      <aside class="n7x-owner-user-drawer" data-owner-user-drawer hidden></aside>\n      <section class="n7x-owner-confirm" data-owner-confirm hidden></section>\n      <div class="n7x-owner-toasts" data-owner-toasts aria-live="polite"></div>`),
          document.body.appendChild(
            __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34,
          ),
          requestAnimationFrame(() =>
            __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.classList.add(
              "\u0073\u0068\u006f\u0077",
            ),
          ));
        const __51e241f4e1ab21052e5631abbf6ddcfbf931e3f1ce73d61a5a8454c170b94eba =
            __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.querySelector(
              "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u006d\u0065\u0074\u0072\u0069\u0063\u0073\u005d",
            ),
          __0e2b163757570b367b08da8bb23888480477d7ff7407c183459e03cb93ece46b =
            __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.querySelector(
              "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0074\u0061\u0062\u006c\u0065\u005d",
            ),
          __e3c7b38e84c27c3e546e6e603229d78351eaa60fabff2a12958e3b3f35427d4e =
            __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.querySelector(
              "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0070\u0061\u0067\u0069\u006e\u0061\u0074\u0069\u006f\u006e\u005d",
            ),
          __f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb =
            __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.querySelector(
              "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0061\u0063\u0074\u0069\u0076\u0069\u0074\u0079\u005d",
            ),
          __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87 =
            __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.querySelector(
              "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0075\u0073\u0065\u0072\u002d\u0064\u0072\u0061\u0077\u0065\u0072\u005d",
            ),
          __c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c =
            __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.querySelector(
              "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u006f\u006e\u0066\u0069\u0072\u006d\u005d",
            ),
          __26b5b17a3f16601a1a0082d03dcd66a84af474199e7739e8e1653580cef84d82 = (function (
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
          ) {
            let __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = !1,
              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = !0,
              __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a = !1,
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc = null,
              __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = 60,
              __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 = null,
              __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f = null;
            const __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 =
                new Intl.NumberFormat(),
              __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1 =
                new Intl.DateTimeFormat([], {
                  hour: "\u006e\u0075\u006d\u0065\u0072\u0069\u0063",
                  minute: "\u0032\u002d\u0064\u0069\u0067\u0069\u0074",
                }),
              __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 =
                new Intl.DateTimeFormat([], {
                  month: "\u0073\u0068\u006f\u0072\u0074",
                  day: "\u006e\u0075\u006d\u0065\u0072\u0069\u0063",
                  hour: "\u006e\u0075\u006d\u0065\u0072\u0069\u0063",
                  minute: "\u0032\u002d\u0064\u0069\u0067\u0069\u0074",
                }),
              __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe = (
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              ) =>
                __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239.format(
                  Number(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 || 0),
                ),
              __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a = (
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              ) =>
                __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6.format(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                );
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.innerHTML = `<header class="n7x-traffic-heading"><div><span class="n7x-traffic-eyebrow">LIVE ACTIVITY</span><h2>Traffic</h2><p>Requests per minute &middot; all sites on this VPS</p></div><div class="n7x-traffic-ranges" aria-label="Traffic time range">${[
              [60, "\u0031\u0020\u0068\u006f\u0075\u0072"],
              [360, "\u0036\u0020\u0068\u006f\u0075\u0072\u0073"],
              [1440, "\u0032\u0034\u0020\u0068\u006f\u0075\u0072\u0073"],
            ]
              .map(
                ([
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                ]) =>
                  `<button type="button" data-traffic-range="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96}" aria-pressed="${60 === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96}">${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5}</button>`,
              )
              .join(
                "",
              )}</div></header>\n      <div class="n7x-traffic-stats" data-traffic-stats></div>\n      <div class="n7x-traffic-chart" data-traffic-chart></div>\n      <div class="n7x-traffic-inspector" hidden><input type="range" min="0" max="59" value="59" data-traffic-minute aria-label="Inspect traffic minute"><output data-traffic-detail></output></div>\n      <footer class="n7x-traffic-footer"><span data-traffic-status role="status">Loading traffic...</span><span>Times in ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(Intl.DateTimeFormat().resolvedOptions().timeZone)}. CDN-only hits and WebSocket stream traffic are excluded. Gaps mean no measurement.</span></footer>`;
            const __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d =
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.querySelector(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u0074\u0072\u0061\u0066\u0066\u0069\u0063\u002d\u0073\u0074\u0061\u0074\u0075\u0073\u005d",
                ),
              __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161 =
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.querySelector(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u0074\u0072\u0061\u0066\u0066\u0069\u0063\u002d\u0063\u0068\u0061\u0072\u0074\u005d",
                ),
              __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34 =
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.querySelector(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u0074\u0072\u0061\u0066\u0066\u0069\u0063\u002d\u006d\u0069\u006e\u0075\u0074\u0065\u005d",
                ),
              __d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21 =
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.querySelector(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u0074\u0072\u0061\u0066\u0066\u0069\u0063\u002d\u0064\u0065\u0074\u0061\u0069\u006c\u005d",
                );
            let __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c = [],
              __fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797 = 1040;
            const __51e241f4e1ab21052e5631abbf6ddcfbf931e3f1ce73d61a5a8454c170b94eba = (
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
            ) =>
              46 +
              (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 /
                Math.max(
                  1,
                  __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c.length - 1,
                )) *
                (__fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797 - 64);
            let __319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed = 1;
            const __0e2b163757570b367b08da8bb23888480477d7ff7407c183459e03cb93ece46b = (
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
            ) =>
              230 -
              ((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 || 0) /
                __319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed) *
                190;
            let __e3c7b38e84c27c3e546e6e603229d78351eaa60fabff2a12958e3b3f35427d4e = null,
              __f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb = null,
              __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87 = -1,
              __c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c = 0,
              __26b5b17a3f16601a1a0082d03dcd66a84af474199e7739e8e1653580cef84d82 = null;
            function __8d22331976a8113666a0908c81e73aa73428cab2801e9b29ace9b37721493fda(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
            ) {
              if (!__568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c.length)
                return;
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = Math.max(
                0,
                Math.min(
                  __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c.length - 1,
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                ),
              );
              const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = Math.round(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                ),
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                  __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c[
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
                  ];
              if (
                ((__16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f =
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.at),
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 !==
                  __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87)
              ) {
                ((__0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87 =
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5),
                  (__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.value =
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5));
                const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = `${__1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.at)} \xb7 ${null === __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.requests ? "\u004e\u006f\u0020\u006d\u0065\u0061\u0073\u0075\u0072\u0065\u006d\u0065\u006e\u0074" : `${__8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.requests)} requests \xb7 ${__8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.errors)} server errors${null != __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.onlinePeak ? ` \xb7 ${__8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.onlinePeak)} people online` : ""}${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.partial ? "\u0020\u00b7\u0020\u0050\u0061\u0072\u0074\u0069\u0061\u006c\u0020\u006d\u0069\u006e\u0075\u0074\u0065" : ""}`}`;
                (__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.setAttribute(
                  "\u0061\u0072\u0069\u0061\u002d\u0076\u0061\u006c\u0075\u0065\u0074\u0065\u0078\u0074",
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                ),
                  (__d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21.textContent =
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96));
              }
              const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                  __51e241f4e1ab21052e5631abbf6ddcfbf931e3f1ce73d61a5a8454c170b94eba(
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                  ),
                __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = Math.floor(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                ),
                __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a = Math.ceil(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                ),
                __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
                  __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c[
                    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713
                  ].requests,
                __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 =
                  __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c[
                    __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a
                  ].requests;
              (__e3c7b38e84c27c3e546e6e603229d78351eaa60fabff2a12958e3b3f35427d4e?.setAttribute(
                "\u0078\u0031",
                __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
              ),
                __e3c7b38e84c27c3e546e6e603229d78351eaa60fabff2a12958e3b3f35427d4e?.setAttribute(
                  "\u0078\u0032",
                  __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                ),
                __f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb?.setAttribute(
                  "\u0063\u0078",
                  __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                ),
                __f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb?.setAttribute(
                  "\u0063\u0079",
                  __0e2b163757570b367b08da8bb23888480477d7ff7407c183459e03cb93ece46b(
                    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc +
                      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 -
                        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc) *
                        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 -
                          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713),
                  ),
                ),
                __f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb?.setAttribute(
                  "\u006f\u0070\u0061\u0063\u0069\u0074\u0079",
                  null === __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc ||
                    null === __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2
                    ? "\u0030"
                    : "\u0031",
                ));
            }
            function __eee561f91b58ee873b5a76df4fe070031bb64d02e0803f54276f6fdbb14b2b43() {
              if (
                null === __26b5b17a3f16601a1a0082d03dcd66a84af474199e7739e8e1653580cef84d82 ||
                !__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 ||
                !__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 ||
                !__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 ||
                __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a
              )
                return;
              const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
                __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.getBoundingClientRect();
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.width &&
                __8d22331976a8113666a0908c81e73aa73428cab2801e9b29ace9b37721493fda(
                  ((((__26b5b17a3f16601a1a0082d03dcd66a84af474199e7739e8e1653580cef84d82 -
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.left) /
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.width) *
                    __fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797 -
                    46) /
                    (__fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797 - 64)) *
                    (__568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c.length - 1),
                );
            }
            function __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b() {
              (cancelAnimationFrame(
                __c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c,
              ),
                (__c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c = 0),
                (__26b5b17a3f16601a1a0082d03dcd66a84af474199e7739e8e1653580cef84d82 = null));
            }
            function __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6() {
              __fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797 = Math.max(
                300,
                __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.clientWidth,
              );
              const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                  __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.points.findIndex(
                    (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                      null !==
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.requests,
                  ),
                __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                  (__568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c =
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c < 0
                      ? __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.points
                      : __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.points.slice(
                          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                        )),
                __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
                  __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.totals,
                __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
                  __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.peak;
              __319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed = Math.max(
                1,
                Math.ceil(
                  1.15 *
                    (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a?.requests ||
                      1),
                ),
              );
              const __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc = [
                [
                  "\u0052\u0065\u0071\u0075\u0065\u0073\u0074\u0073",
                  __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe(
                    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.requests,
                  ),
                  "\u0049\u006e\u0020\u0073\u0065\u006c\u0065\u0063\u0074\u0065\u0064\u0020\u0077\u0069\u006e\u0064\u006f\u0077",
                ],
                [
                  "\u0050\u0065\u0061\u006b\u0020\u002f\u0020\u006d\u0069\u006e",
                  __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe(
                    __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a?.requests,
                  ),
                  __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a
                    ? __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a(
                        __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.at,
                      ) +
                      (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.partial
                        ? "\u0020\u00b7\u0020\u0070\u0061\u0072\u0074\u0069\u0061\u006c"
                        : "")
                    : "\u004e\u006f\u0020\u006d\u0065\u0061\u0073\u0075\u0072\u0065\u006d\u0065\u006e\u0074",
                ],
                [
                  "\u0050\u0065\u0061\u006b\u0020\u006f\u006e\u006c\u0069\u006e\u0065",
                  __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.peakOnline
                    ? __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe(
                        __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238
                          .peakOnline.count,
                      )
                    : "\u2014",
                  __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.peakOnline
                    ? __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a(
                        __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238
                          .peakOnline.at,
                      ) + "\u0020\u00b7\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0073\u0020\u0061\u006e\u0064\u0020\u0067\u0075\u0065\u0073\u0074\u0073"
                    : "\u0043\u006f\u006c\u006c\u0065\u0063\u0074\u0069\u006e\u0067\u0020\u006f\u006e\u006c\u0069\u006e\u0065\u0020\u0068\u0069\u0073\u0074\u006f\u0072\u0079",
                ],
                [
                  "\u0053\u0065\u0072\u0076\u0065\u0072\u0020\u0065\u0072\u0072\u006f\u0072\u0073",
                  __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe(
                    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.errors,
                  ),
                  `${__8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe(__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.aborted)} interrupted requests`,
                ],
                [
                  "\u0041\u0076\u0067\u002e\u0020\u0072\u0065\u0073\u0070\u006f\u006e\u0073\u0065",
                  null ===
                  __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.averageMs
                    ? "\u2014"
                    : __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe(
                        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.averageMs,
                      ) + "\u0020\u006d\u0073",
                  "\u0043\u006f\u006d\u0070\u006c\u0065\u0074\u0065\u0064\u0020\u0048\u0054\u0054\u0050\u0020\u0072\u0065\u0073\u0070\u006f\u006e\u0073\u0065\u0073",
                ],
              ];
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.querySelector(
                "\u005b\u0064\u0061\u0074\u0061\u002d\u0074\u0072\u0061\u0066\u0066\u0069\u0063\u002d\u0073\u0074\u0061\u0074\u0073\u005d",
              ).innerHTML = __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc
                .map(
                  ([
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                  ]) =>
                    `<div><span>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5)}</span><strong>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c)}</strong><small>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03)}</small></div>`,
                )
                .join("");
              let __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = "",
                __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 = "",
                __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 = [];
              const __d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21 = () => {
                if (!__32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6.length)
                  return;
                const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
                  __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6
                    .map(
                      (
                        [
                          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                        ],
                        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                      ) =>
                        `${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c ? "\u004c" : "\u004d"}${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.toFixed(2)} ${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.toFixed(2)}`,
                    )
                    .join("\u0020");
                ((__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 +=
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 + "\u0020"),
                  (__467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 += `${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96} L${__32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6.at(-1)[0]} 230 L${__32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6[0][0]} 230 Z `),
                  (__32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 = []));
              };
              (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.forEach(
                (
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                ) => {
                  null ===
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.requests
                    ? __d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21()
                    : __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6.push([
                        __51e241f4e1ab21052e5631abbf6ddcfbf931e3f1ce73d61a5a8454c170b94eba(
                          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                        ),
                        __0e2b163757570b367b08da8bb23888480477d7ff7407c183459e03cb93ece46b(
                          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.requests,
                        ),
                      ]);
                },
              ),
                __d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21());
              const __c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c = [0, 0.5, 1]
                  .map(
                    (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                      `<line x1="46" x2="${__fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797 - 18}" y1="${230 - 190 * __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96}" y2="${230 - 190 * __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96}" class="n7x-traffic-grid"/><text x="36" y="${234 - 190 * __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96}" text-anchor="end">${__8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe(Math.round(__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed * __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96))}</text>`,
                  )
                  .join(""),
                __26b5b17a3f16601a1a0082d03dcd66a84af474199e7739e8e1653580cef84d82 = [
                  0,
                  Math.floor(
                    (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.length -
                      1) /
                      2,
                  ),
                  __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.length - 1,
                ]
                  .map((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) => {
                    return `<text x="${__51e241f4e1ab21052e5631abbf6ddcfbf931e3f1ce73d61a5a8454c170b94eba(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5)}" y="260" text-anchor="${0 === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 ? "\u0073\u0074\u0061\u0072\u0074" : __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 === __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.length - 1 ? "\u0065\u006e\u0064" : "\u006d\u0069\u0064\u0064\u006c\u0065"}">${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(
                      ((__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03[
                          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
                        ].at),
                      __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1.format(
                        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                      )),
                    )}</text>`;
                    var __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c;
                  })
                  .join("");
              ((__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.innerHTML = `<svg viewBox="0 0 ${__fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797} 275" preserveAspectRatio="none" role="img" aria-label="Requests per minute. Peak ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe(__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a?.requests))}${__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a ? "\u0020\u0061\u0074\u0020" + __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a(__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.at)) : ""}. Use the slider below to inspect a minute.">${__c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c}<path d="${__467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239}" class="n7x-traffic-area"/><path d="${__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2}" class="n7x-traffic-line"/>${__26b5b17a3f16601a1a0082d03dcd66a84af474199e7739e8e1653580cef84d82}<line data-traffic-cursor y1="30" y2="230" class="n7x-traffic-cursor"/><circle data-traffic-dot r="4" class="n7x-traffic-dot"/></svg>`),
                (__e3c7b38e84c27c3e546e6e603229d78351eaa60fabff2a12958e3b3f35427d4e =
                  __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.querySelector(
                    "\u005b\u0064\u0061\u0074\u0061\u002d\u0074\u0072\u0061\u0066\u0066\u0069\u0063\u002d\u0063\u0075\u0072\u0073\u006f\u0072\u005d",
                  )),
                (__f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb =
                  __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.querySelector(
                    "\u005b\u0064\u0061\u0074\u0061\u002d\u0074\u0072\u0061\u0066\u0066\u0069\u0063\u002d\u0064\u006f\u0074\u005d",
                  )),
                (__0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87 = -1),
                (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.querySelector(
                  "\u002e\u006e\u0037\u0078\u002d\u0074\u0072\u0061\u0066\u0066\u0069\u0063\u002d\u0069\u006e\u0073\u0070\u0065\u0063\u0074\u006f\u0072",
                ).hidden = !1),
                (__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.max =
                  __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.length - 1));
              let __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b =
                null === __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f
                  ? -1
                  : __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.findIndex(
                      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.at ===
                        __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f,
                    );
              (__f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b < 0 &&
                (__f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b =
                  __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a
                    ? __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.findIndex(
                        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.at ===
                          __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.at,
                      )
                    : __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.length -
                      1),
                __8d22331976a8113666a0908c81e73aa73428cab2801e9b29ace9b37721493fda(
                  __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b,
                ),
                __eee561f91b58ee873b5a76df4fe070031bb64d02e0803f54276f6fdbb14b2b43(),
                (__94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d.textContent = `Recorded from ${__1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a(__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03[0].at)} \xb7 updated ${new Date(__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.generatedAt).toLocaleTimeString()} \xb7 refreshes every 10s \xb7 current minute incomplete`),
                (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.dataset.trafficState =
                  "\u0072\u0065\u0061\u0064\u0079"));
            }
            async function __5a2fa72065e6201b186de750f00e9aef5fdba5eabe9611c30108d7e663e502b7() {
              if (
                !__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 ||
                !__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 ||
                __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a ||
                document.hidden ||
                __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc
              )
                return;
              const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
                new AbortController();
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96;
              const __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f = setTimeout(
                () => __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.abort(),
                12e3,
              );
              try {
                const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                  await __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c(
                    `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/traffic?minutes=${__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2}`,
                    {
                      signal:
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.signal,
                    },
                  );
                if (
                  __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a ||
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.signal
                    .aborted ||
                  !__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03
                )
                  return;
                if (
                  !Array.isArray(
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.points,
                  ) ||
                  !__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.points
                    .length ||
                  !__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.totals
                )
                  throw new Error("\u0049\u006e\u0076\u0061\u006c\u0069\u0064\u0020\u0074\u0072\u0061\u0066\u0066\u0069\u0063\u0020\u0072\u0065\u0073\u0070\u006f\u006e\u0073\u0065");
                ((__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 =
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5),
                  __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6());
              } catch {
                !__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a &&
                  __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 &&
                  __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc ===
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
                  ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.dataset.trafficState =
                    "\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065"),
                  (__94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d.textContent =
                    __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238
                      ? `Update unavailable. Showing data from ${__1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a(__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.generatedAt)}; retrying automatically.`
                      : "\u0054\u0072\u0061\u0066\u0066\u0069\u0063\u0020\u0069\u0073\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u002e\u0020\u0052\u0065\u0074\u0072\u0079\u0069\u006e\u0067\u0020\u0061\u0075\u0074\u006f\u006d\u0061\u0074\u0069\u0063\u0061\u006c\u006c\u0079\u002e"));
              } finally {
                (clearTimeout(__16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f),
                  __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc ===
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
                    (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc = null));
              }
            }
            (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.addEventListener(
              "\u0063\u006c\u0069\u0063\u006b",
              (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
                const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target.closest(
                    "\u005b\u0064\u0061\u0074\u0061\u002d\u0074\u0072\u0061\u0066\u0066\u0069\u0063\u002d\u0072\u0061\u006e\u0067\u0065\u005d",
                  );
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c &&
                  (__f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b(),
                  (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = Number(
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.dataset
                      .trafficRange,
                  )),
                  (__16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f = null),
                  __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc?.abort(),
                  (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc = null),
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
                    .querySelectorAll("\u005b\u0064\u0061\u0074\u0061\u002d\u0074\u0072\u0061\u0066\u0066\u0069\u0063\u002d\u0072\u0061\u006e\u0067\u0065\u005d")
                    .forEach((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.setAttribute(
                        "\u0061\u0072\u0069\u0061\u002d\u0070\u0072\u0065\u0073\u0073\u0065\u0064",
                        String(
                          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ===
                            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                        ),
                      ),
                    ),
                  (__94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d.textContent =
                    "\u0055\u0070\u0064\u0061\u0074\u0069\u006e\u0067\u0020\u0074\u0069\u006d\u0065\u0020\u0072\u0061\u006e\u0067\u0065\u002e\u002e\u002e"),
                  __5a2fa72065e6201b186de750f00e9aef5fdba5eabe9611c30108d7e663e502b7());
              },
            ),
              __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.addEventListener(
                "\u0070\u006f\u0069\u006e\u0074\u0065\u0072\u006d\u006f\u0076\u0065",
                (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
                  ((__26b5b17a3f16601a1a0082d03dcd66a84af474199e7739e8e1653580cef84d82 =
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.clientX),
                    __c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c ||
                      (__c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c =
                        requestAnimationFrame(() => {
                          ((__c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c = 0),
                            __eee561f91b58ee873b5a76df4fe070031bb64d02e0803f54276f6fdbb14b2b43());
                        })));
                },
              ),
              __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.addEventListener(
                "\u0070\u006f\u0069\u006e\u0074\u0065\u0072\u006c\u0065\u0061\u0076\u0065",
                __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b,
              ),
              __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.addEventListener(
                "\u0070\u006f\u0069\u006e\u0074\u0065\u0072\u0063\u0061\u006e\u0063\u0065\u006c",
                __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b,
              ),
              __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.addEventListener(
                "\u0069\u006e\u0070\u0075\u0074",
                () => {
                  (__f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b(),
                    __8d22331976a8113666a0908c81e73aa73428cab2801e9b29ace9b37721493fda(
                      Number(
                        __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.value,
                      ),
                    ));
                },
              ));
            const __fee7105fc4d51af0577a7b27c6ef4e0cf85c90de87e72e9d1a6579f318300a72 = setInterval(
                () => {
                  __5a2fa72065e6201b186de750f00e9aef5fdba5eabe9611c30108d7e663e502b7();
                },
                1e4,
              ),
              __e89c06b9c8c138ab668108b5f84a303333ad66d3886346a0eb785642be515763 =
                new ResizeObserver(() => {
                  __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 &&
                    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 &&
                    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 &&
                    __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.clientWidth >
                      0 &&
                    Math.abs(
                      Math.max(
                        300,
                        __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.clientWidth,
                      ) - __fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797,
                    ) > 1 &&
                    __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6();
                });
            return (
              __e89c06b9c8c138ab668108b5f84a303333ad66d3886346a0eb785642be515763.observe(
                __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161,
              ),
              {
                enable(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
                  ((__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
                    (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.hidden =
                      !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
                      ? __5a2fa72065e6201b186de750f00e9aef5fdba5eabe9611c30108d7e663e502b7()
                      : (__f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b(),
                        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc?.abort(),
                        (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc = null),
                        (__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 = null),
                        __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.replaceChildren(),
                        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
                          .querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0074\u0072\u0061\u0066\u0066\u0069\u0063\u002d\u0073\u0074\u0061\u0074\u0073\u005d")
                          .replaceChildren(),
                        (__d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21.textContent =
                          "")));
                },
                activate(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
                  ((__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
                      ? __5a2fa72065e6201b186de750f00e9aef5fdba5eabe9611c30108d7e663e502b7()
                      : (__f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b(),
                        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc?.abort(),
                        (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
                          null)));
                },
                destroy() {
                  ((__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a = !0),
                    __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b(),
                    clearInterval(
                      __fee7105fc4d51af0577a7b27c6ef4e0cf85c90de87e72e9d1a6579f318300a72,
                    ),
                    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc?.abort(),
                    __e89c06b9c8c138ab668108b5f84a303333ad66d3886346a0eb785642be515763.disconnect());
                },
              }
            );
          })(
            __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.querySelector(
              "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0074\u0072\u0061\u0066\u0066\u0069\u0063\u005d",
            ),
            __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6,
          );
        let __8d22331976a8113666a0908c81e73aa73428cab2801e9b29ace9b37721493fda = "\u006f\u0076\u0065\u0072\u0076\u0069\u0065\u0077";
        function __eee561f91b58ee873b5a76df4fe070031bb64d02e0803f54276f6fdbb14b2b43(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        ) {
          ["\u006f\u0076\u0065\u0072\u0076\u0069\u0065\u0077", "\u0075\u0073\u0065\u0072\u0073", "\u0073\u0065\u0072\u0076\u0069\u0063\u0065\u0073", "\u0061\u0063\u0074\u0069\u0076\u0069\u0074\u0079"].includes(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          ) &&
            ((__8d22331976a8113666a0908c81e73aa73428cab2801e9b29ace9b37721493fda =
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
            __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34
              .querySelectorAll("\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0070\u0061\u006e\u0065\u006c\u005d")
              .forEach(
                (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) =>
                  (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.hidden =
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.dataset
                      .ownerPanel !==
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
              ),
            __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34
              .querySelectorAll("\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0073\u0065\u0063\u0074\u0069\u006f\u006e\u005d")
              .forEach((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) =>
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.setAttribute(
                  "\u0061\u0072\u0069\u0061\u002d\u0070\u0072\u0065\u0073\u0073\u0065\u0064",
                  String(
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.dataset
                      .ownerSection ===
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                  ),
                ),
              ),
            __26b5b17a3f16601a1a0082d03dcd66a84af474199e7739e8e1653580cef84d82.activate(
              "\u006f\u0076\u0065\u0072\u0076\u0069\u0065\u0077" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
            ));
        }
        function __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = "\u0073\u0075\u0063\u0063\u0065\u0073\u0073",
        ) {
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c?.(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          );
          const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
            document.createElement("\u0064\u0069\u0076");
          ((__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.className = `n7x-owner-toast n7x-owner-toast-${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5}`),
            (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.textContent =
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
            __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34
              .querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0074\u006f\u0061\u0073\u0074\u0073\u005d")
              .appendChild(__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03),
            requestAnimationFrame(() =>
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.classList.add(
                "\u0073\u0068\u006f\u0077",
              ),
            ),
            setTimeout(() => {
              (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.classList.remove(
                "\u0073\u0068\u006f\u0077",
              ),
                setTimeout(
                  () => __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.remove(),
                  180,
                ));
            }, 3200));
        }
        async function __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = {},
        ) {
          const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
            await __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5();
          if (!__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03)
            throw new Error("\u0059\u006f\u0075\u0072\u0020\u0073\u0074\u0061\u0066\u0066\u0020\u0073\u0065\u0073\u0073\u0069\u006f\u006e\u0020\u0068\u0061\u0073\u0020\u0065\u0078\u0070\u0069\u0072\u0065\u0064\u002e\u0020\u0053\u0069\u0067\u006e\u0020\u0069\u006e\u0020\u0061\u0067\u0061\u0069\u006e\u002e");
          const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = await fetch(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              {
                ...__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                headers: {
                  Accept: "\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u006a\u0073\u006f\u006e",
                  Authorization: `Bearer ${__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03}`,
                  ...(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.body
                    ? {
                        "\u0043\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0054\u0079\u0070\u0065": "\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u006a\u0073\u006f\u006e",
                      }
                    : {}),
                  ...(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.headers ||
                    {}),
                },
                cache: "\u006e\u006f\u002d\u0073\u0074\u006f\u0072\u0065",
              },
            ),
            __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
              await __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713
                .json()
                .catch(() => ({}));
          if (!__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.ok) {
            const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = new Error(
              __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.error ||
                "\u0054\u0068\u0065\u0020\u006f\u0077\u006e\u0065\u0072\u0020\u0072\u0065\u0071\u0075\u0065\u0073\u0074\u0020\u0066\u0061\u0069\u006c\u0065\u0064\u002e",
            );
            throw (
              (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.status =
                __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.status),
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
            );
          }
          return __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a;
        }
        const __5a2fa72065e6201b186de750f00e9aef5fdba5eabe9611c30108d7e663e502b7 =
          __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.querySelector(
            "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0061\u0069\u002d\u0073\u0074\u0061\u0074\u0075\u0073\u005d",
          );
        function __fee7105fc4d51af0577a7b27c6ef4e0cf85c90de87e72e9d1a6579f318300a72(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
        ) {
          const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
              document.createElement("\u0064\u0065\u0074\u0061\u0069\u006c\u0073"),
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
              document.createElement("\u0073\u0075\u006d\u006d\u0061\u0072\u0079"),
            __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
              document.createElement("\u0064\u0069\u0076"),
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.querySelector(
                "\u0073\u0074\u0072\u006f\u006e\u0067",
              );
          for (
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc
              ? __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.append(
                  __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
                )
              : (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.textContent =
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c),
              __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.className =
                "\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0073\u0074\u0061\u0074\u0075\u0073\u002d\u0062\u006f\u0064\u0079";
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.firstChild;

          )
            __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.append(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.firstChild,
            );
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.append(
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
            __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
          );
          try {
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.open =
              "\u0063\u006f\u006c\u006c\u0061\u0070\u0073\u0065\u0064" !==
              localStorage.getItem(
                "\u006e\u0079\u0078\u002e\u006f\u0077\u006e\u0065\u0072\u002e\u0073\u0074\u0061\u0074\u0075\u0073\u002e" +
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
              );
          } catch {
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.open = !0;
          }
          (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.addEventListener(
            "\u0074\u006f\u0067\u0067\u006c\u0065",
            () => {
              try {
                localStorage.setItem(
                  "\u006e\u0079\u0078\u002e\u006f\u0077\u006e\u0065\u0072\u002e\u0073\u0074\u0061\u0074\u0075\u0073\u002e" +
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                  __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.open
                    ? "\u0065\u0078\u0070\u0061\u006e\u0064\u0065\u0064"
                    : "\u0063\u006f\u006c\u006c\u0061\u0070\u0073\u0065\u0064",
                );
              } catch {}
            },
          ),
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.replaceChildren(
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
            ));
        }
        let __e89c06b9c8c138ab668108b5f84a303333ad66d3886346a0eb785642be515763 = !1;
        async function __b1beae86029a4f3a21d0d992ca0d2036eaaaae8e45994cac42b42d390c73e329() {
          if (
            __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.isConnected &&
            __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.access?.founder &&
            !__e89c06b9c8c138ab668108b5f84a303333ad66d3886346a0eb785642be515763
          ) {
            __e89c06b9c8c138ab668108b5f84a303333ad66d3886346a0eb785642be515763 = !0;
            try {
              const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                await __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6(
                  "\u002f\u0061\u0070\u0069\u002f\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0061\u0073\u0068\u0062\u006f\u0061\u0072\u0064\u002f\u0061\u0069\u002d\u0073\u0074\u0061\u0074\u0075\u0073",
                );
              if (
                !__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.isConnected ||
                !__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.access?.founder
              )
                return;
              __5a2fa72065e6201b186de750f00e9aef5fdba5eabe9611c30108d7e663e502b7.hidden = !1;
              const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = (
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                ) =>
                  Number(
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                  ).toFixed(2),
                __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = {
                  ok: "\u004f\u0070\u0065\u006e\u0052\u006f\u0075\u0074\u0065\u0072\u0020\u0062\u0061\u006c\u0061\u006e\u0063\u0065",
                  low: "\u004c\u006f\u0077\u0020\u004f\u0070\u0065\u006e\u0052\u006f\u0075\u0074\u0065\u0072\u0020\u0061\u006c\u006c\u006f\u0077\u0061\u006e\u0063\u0065",
                  paused: "\u0053\u0068\u0061\u0072\u0065\u0064\u0020\u0041\u0049\u0020\u0062\u0061\u006c\u0061\u006e\u0063\u0065\u0020\u0063\u0075\u0074\u006f\u0066\u0066\u0020\u0072\u0065\u0061\u0063\u0068\u0065\u0064",
                  unknown: "\u004f\u0070\u0065\u006e\u0052\u006f\u0075\u0074\u0065\u0072\u0020\u0062\u0061\u006c\u0061\u006e\u0063\u0065\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0063\u0068\u0065\u0063\u006b\u0065\u0064",
                },
                __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
                  "\u006c\u006f\u0077" ===
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.state ||
                  "\u0070\u0061\u0075\u0073\u0065\u0064" ===
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.state;
              ((__5a2fa72065e6201b186de750f00e9aef5fdba5eabe9611c30108d7e663e502b7.dataset.aiState =
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.state),
                (__5a2fa72065e6201b186de750f00e9aef5fdba5eabe9611c30108d7e663e502b7.style.borderColor =
                  __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713
                    ? "\u0023\u0064\u0039\u0061\u0064\u0035\u0035"
                    : ""),
                (__5a2fa72065e6201b186de750f00e9aef5fdba5eabe9611c30108d7e663e502b7.innerHTML = `<div><strong>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03[__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.state] || __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.unknown)}${"\u0075\u006e\u006b\u006e\u006f\u0077\u006e" !== __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.state ? ` <span>$${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.balanceUsd)}</span>` : ""}</strong><p>${"\u0075\u006e\u006b\u006e\u006f\u0077\u006e" === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.state ? "\u0042\u0061\u006c\u0061\u006e\u0063\u0065\u0020\u0069\u0073\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u002e\u0020\u0053\u0068\u0061\u0072\u0065\u0064\u0020\u0041\u0049\u0020\u0070\u0061\u0075\u0073\u0065\u0073\u0020\u0069\u0066\u0020\u0069\u0074\u0073\u0020\u0062\u0061\u006c\u0061\u006e\u0063\u0065\u0020\u0063\u0068\u0065\u0063\u006b\u0020\u0066\u0061\u0069\u006c\u0073\u002e" : `Account balance: $${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.balanceUsd)} &middot; N7X key allowance: ${null === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.keyRemainingUsd ? "\u004e\u006f\u0020\u006b\u0065\u0079\u0020\u006c\u0069\u006d\u0069\u0074" : `$${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.keyRemainingUsd)}`} &middot; Daily site cap: $${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.dailyCapUsd)}`}</p>${__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 ? `<p>${"\u0070\u0061\u0075\u0073\u0065\u0064" === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.state ? "\u0054\u0068\u0065\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0062\u0061\u006c\u0061\u006e\u0063\u0065\u0020\u006f\u0072\u0020\u006b\u0065\u0079\u0020\u0061\u006c\u006c\u006f\u0077\u0061\u006e\u0063\u0065\u0020\u0068\u0061\u0073\u0020\u0072\u0065\u0061\u0063\u0068\u0065\u0064\u0020\u0074\u0068\u0065\u0020\u0024\u0030\u002e\u0031\u0030\u0020\u0063\u0075\u0074\u006f\u0066\u0066\u002e" : "\u0054\u0068\u0065\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0062\u0061\u006c\u0061\u006e\u0063\u0065\u0020\u006f\u0072\u0020\u004e\u0037\u0058\u0020\u006b\u0065\u0079\u0020\u0061\u006c\u006c\u006f\u0077\u0061\u006e\u0063\u0065\u0020\u0069\u0073\u0020\u0062\u0065\u006c\u006f\u0077\u0020\u0024\u0030\u002e\u0035\u0030\u002e"} Add credits or review the key limit in OpenRouter. Daily usage limits still apply.</p>` : ""}<small>Checked ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.checkedAt))}</small><p><a href="/api#owner" target="_blank" rel="noopener">Manage AI API keys and token balances</a></p></div>`));
            } catch {
              __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.isConnected &&
                __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.access
                  ?.founder &&
                ((__5a2fa72065e6201b186de750f00e9aef5fdba5eabe9611c30108d7e663e502b7.hidden = !1),
                (__5a2fa72065e6201b186de750f00e9aef5fdba5eabe9611c30108d7e663e502b7.dataset.aiState =
                  "\u0075\u006e\u006b\u006e\u006f\u0077\u006e"),
                (__5a2fa72065e6201b186de750f00e9aef5fdba5eabe9611c30108d7e663e502b7.textContent =
                  "\u004f\u0070\u0065\u006e\u0052\u006f\u0075\u0074\u0065\u0072\u0020\u0062\u0061\u006c\u0061\u006e\u0063\u0065\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0063\u0068\u0065\u0063\u006b\u0065\u0064\u002e\u0020\u0052\u0065\u0066\u0072\u0065\u0073\u0068\u0020\u0074\u006f\u0020\u0074\u0072\u0079\u0020\u0061\u0067\u0061\u0069\u006e\u002e"));
            } finally {
              (__5a2fa72065e6201b186de750f00e9aef5fdba5eabe9611c30108d7e663e502b7.hidden ||
                __fee7105fc4d51af0577a7b27c6ef4e0cf85c90de87e72e9d1a6579f318300a72(
                  __5a2fa72065e6201b186de750f00e9aef5fdba5eabe9611c30108d7e663e502b7,
                  "\u0061\u0069",
                  "\u004f\u0070\u0065\u006e\u0052\u006f\u0075\u0074\u0065\u0072\u0020\u0062\u0061\u006c\u0061\u006e\u0063\u0065",
                ),
                (__e89c06b9c8c138ab668108b5f84a303333ad66d3886346a0eb785642be515763 = !1));
            }
          }
        }
        const __3024b81c189fd2c8b2a9d40c5083c0a67b5bc98a00d6e0dc336123d41b1a0c7f = setInterval(
          () => {
            document.hidden || __b1beae86029a4f3a21d0d992ca0d2036eaaaae8e45994cac42b42d390c73e329();
          },
          6e4,
        );
        let __ed46735a7066924b61d2076cc7666ca73533276eec44191d16b834970c65bf6d = !1,
          __b769cfef6d38d8b555019ba9dbf653f1b85fbdc3ec8f99db5a9368ed7a200661 = null;
        const __d2aab0836d3c8a8d85c1c08050ef020cbdd6d0e9d50ae0173328a5d5cd612701 =
          __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.querySelector(
            "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0074\u0075\u0062\u0065\u002d\u0073\u0074\u0061\u0074\u0075\u0073\u005d",
          );
        function __72a91b917bacdbcddd40e0b0aed73d716d3df7426f358b72f02cb51e3ea8899d(
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        ) {
          __b769cfef6d38d8b555019ba9dbf653f1b85fbdc3ec8f99db5a9368ed7a200661 =
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5;
          const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.enabled
                ? "\u0063\u0068\u0061\u006c\u006c\u0065\u006e\u0067\u0065" ===
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.lastError
                  ? "\u0059\u006f\u0075\u0054\u0075\u0062\u0065\u0020\u0076\u0065\u0072\u0069\u0066\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u0020\u0072\u0065\u0071\u0075\u0069\u0072\u0065\u0064"
                  : {
                      working: "\u004c\u0061\u0073\u0074\u0020\u0073\u0074\u0072\u0065\u0061\u006d\u0020\u0063\u0068\u0065\u0063\u006b\u0020\u0070\u0061\u0073\u0073\u0065\u0064",
                      login_required: "\u004c\u006f\u0067\u0069\u006e\u0020\u006e\u0065\u0065\u0064\u0073\u0020\u0072\u0065\u0066\u0072\u0065\u0073\u0068\u0069\u006e\u0067",
                      trouble: "\u0053\u0065\u0072\u0076\u0069\u0063\u0065\u0020\u0074\u0072\u006f\u0075\u0062\u006c\u0065",
                      setup_required: "\u0053\u0065\u0074\u0075\u0070\u0020\u0072\u0065\u0071\u0075\u0069\u0072\u0065\u0064",
                      unchecked: "\u004e\u006f\u0074\u0020\u0063\u0068\u0065\u0063\u006b\u0065\u0064\u0020\u0079\u0065\u0074",
                    }[__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.state] ||
                    "\u0053\u0065\u0072\u0076\u0069\u0063\u0065\u0020\u0074\u0072\u006f\u0075\u0062\u006c\u0065"
                : "\u004e\u006f\u0074\u0020\u0065\u006e\u0061\u0062\u006c\u0065\u0064",
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.enabled
                ? "\u0063\u0068\u0061\u006c\u006c\u0065\u006e\u0067\u0065" ===
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.lastError
                  ? "\u0059\u006f\u0075\u0054\u0075\u0062\u0065\u0020\u0072\u0065\u0071\u0075\u0065\u0073\u0074\u0065\u0064\u0020\u0076\u0065\u0072\u0069\u0066\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u0020\u0066\u0072\u006f\u006d\u0020\u0074\u0068\u0065\u0020\u0073\u0065\u0072\u0076\u0065\u0072\u002e\u0020\u0054\u0068\u0069\u0073\u0020\u0064\u006f\u0065\u0073\u0020\u006e\u006f\u0074\u0020\u0070\u0072\u006f\u0076\u0065\u0020\u0074\u0068\u0065\u0020\u0063\u006f\u006f\u006b\u0069\u0065\u0073\u0020\u0065\u0078\u0070\u0069\u0072\u0065\u0064\u002e\u0020\u0052\u0065\u0066\u0072\u0065\u0073\u0068\u0069\u006e\u0067\u0020\u0074\u0068\u0069\u0073\u0020\u0070\u0061\u0067\u0065\u0020\u0064\u006f\u0065\u0073\u0020\u006e\u006f\u0074\u0020\u0072\u0065\u006e\u0065\u0077\u0020\u0074\u0068\u0065\u0020\u0073\u0065\u0072\u0076\u0065\u0072\u0020\u0073\u0065\u0073\u0073\u0069\u006f\u006e\u002e"
                  : "\u006c\u006f\u0067\u0069\u006e\u005f\u0072\u0065\u0071\u0075\u0069\u0072\u0065\u0064" ===
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.state
                    ? "\u0059\u006f\u0075\u0054\u0075\u0062\u0065\u0020\u0072\u0065\u006a\u0065\u0063\u0074\u0065\u0064\u0020\u0074\u0068\u0065\u0020\u0073\u0065\u0072\u0076\u0065\u0072\u0020\u006c\u006f\u0067\u0069\u006e\u002e\u0020\u0052\u0065\u0066\u0072\u0065\u0073\u0068\u0069\u006e\u0067\u0020\u0074\u0068\u0069\u0073\u0020\u0070\u0061\u0067\u0065\u0020\u0064\u006f\u0065\u0073\u0020\u006e\u006f\u0074\u0020\u0072\u0065\u006e\u0065\u0077\u0020\u0069\u0074\u002e\u0020\u0041\u0066\u0074\u0065\u0072\u0020\u0072\u0065\u0070\u006c\u0061\u0063\u0069\u006e\u0067\u0020\u0074\u0068\u0065\u0020\u0070\u0072\u0069\u0076\u0061\u0074\u0065\u0020\u0063\u006f\u006f\u006b\u0069\u0065\u0020\u0066\u0069\u006c\u0065\u002c\u0020\u0077\u0061\u0069\u0074\u0020\u0066\u006f\u0072\u0020\u0074\u0068\u0065\u0020\u0072\u0065\u0074\u0072\u0079\u0020\u0063\u006f\u006f\u006c\u0064\u006f\u0077\u006e\u0020\u0061\u006e\u0064\u0020\u0075\u0073\u0065\u0020\u0043\u0068\u0065\u0063\u006b\u0020\u006e\u006f\u0077\u002e"
                    : "\u0074\u0072\u006f\u0075\u0062\u006c\u0065" ===
                        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.state
                      ? "\u0041\u0020\u0072\u0065\u0063\u0065\u006e\u0074\u0020\u0072\u0065\u0071\u0075\u0065\u0073\u0074\u0020\u0066\u0061\u0069\u006c\u0065\u0064\u002e\u0020\u0054\u0068\u0069\u0073\u0020\u0064\u006f\u0065\u0073\u0020\u006e\u006f\u0074\u0020\u006e\u0065\u0063\u0065\u0073\u0073\u0061\u0072\u0069\u006c\u0079\u0020\u006d\u0065\u0061\u006e\u0020\u0074\u0068\u0065\u0020\u006c\u006f\u0067\u0069\u006e\u0020\u0065\u0078\u0070\u0069\u0072\u0065\u0064\u002e"
                      : "\u0073\u0065\u0074\u0075\u0070\u005f\u0072\u0065\u0071\u0075\u0069\u0072\u0065\u0064" ===
                          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.state
                        ? "\u0043\u0068\u0065\u0063\u006b\u0020\u0074\u0068\u0065\u0020\u0070\u0072\u0069\u0076\u0061\u0074\u0065\u0020\u006c\u006f\u0067\u0069\u006e\u0020\u0066\u0069\u006c\u0065\u0020\u0061\u006e\u0064\u0020\u0072\u0065\u0071\u0075\u0069\u0072\u0065\u0064\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0074\u006f\u006f\u006c\u0073\u0020\u006f\u006e\u0020\u0074\u0068\u0065\u0020\u0073\u0065\u0072\u0076\u0065\u0072\u002e"
                        : "\u0053\u0074\u0061\u0074\u0075\u0073\u0020\u0063\u006f\u006d\u0065\u0073\u0020\u0066\u0072\u006f\u006d\u0020\u0072\u0065\u0061\u006c\u0020\u0073\u0074\u0072\u0065\u0061\u006d\u0020\u0063\u0068\u0065\u0063\u006b\u0073\u0020\u0061\u006e\u0064\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0070\u0072\u0065\u0070\u0061\u0072\u0061\u0074\u0069\u006f\u006e\u0073\u002e\u0020\u0041\u0020\u0073\u0069\u006e\u0067\u006c\u0065\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0064\u006f\u0065\u0073\u0020\u006e\u006f\u0074\u0020\u006d\u0061\u0072\u006b\u0020\u0074\u0068\u0065\u0020\u006c\u006f\u0067\u0069\u006e\u0020\u0065\u0078\u0070\u0069\u0072\u0065\u0064\u002e"
                : "\u004e\u0061\u0074\u0069\u0076\u0065\u0020\u0070\u006c\u0061\u0079\u0062\u0061\u0063\u006b\u0020\u0069\u0073\u0020\u0077\u0061\u0069\u0074\u0069\u006e\u0067\u0020\u0066\u006f\u0072\u0020\u0073\u0065\u0072\u0076\u0065\u0072\u0020\u0073\u0065\u0074\u0075\u0070\u002e\u0020\u0059\u006f\u0075\u0054\u0075\u0062\u0065\u0020\u0070\u006c\u0061\u0079\u0062\u0061\u0063\u006b\u0020\u0072\u0065\u006d\u0061\u0069\u006e\u0073\u0020\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u002e";
          ((__d2aab0836d3c8a8d85c1c08050ef020cbdd6d0e9d50ae0173328a5d5cd612701.innerHTML = `<div><strong>N7X7UB3 <span data-owner-tube-state="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.state)}">${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c)}</span></strong><p>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03)}</p><small>Last success: ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.lastSuccess))} &middot; Last check: ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.lastChecked))}</small><small>Cache: ${(Number(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.cacheBytes || 0) / 1073741824).toFixed(2)} / ${(Number(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.cacheLimitBytes || 0) / 1073741824).toFixed(0)} GB &middot; Preparing: ${Number(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.activeJobs || 0)} / ${Number(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.maxJobs || 1)} &middot; Up to 720p</small></div><button type="button" data-owner-tube-check ${!__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.enabled || __ed46735a7066924b61d2076cc7666ca73533276eec44191d16b834970c65bf6d ? "\u0064\u0069\u0073\u0061\u0062\u006c\u0065\u0064" : ""}>${__ed46735a7066924b61d2076cc7666ca73533276eec44191d16b834970c65bf6d ? "\u0043\u0068\u0065\u0063\u006b\u0069\u006e\u0067\u002e\u002e\u002e" : "\u0043\u0068\u0065\u0063\u006b\u0020\u006e\u006f\u0077"}</button>`),
            __fee7105fc4d51af0577a7b27c6ef4e0cf85c90de87e72e9d1a6579f318300a72(
              __d2aab0836d3c8a8d85c1c08050ef020cbdd6d0e9d50ae0173328a5d5cd612701,
              "\u0074\u0075\u0062\u0065",
              "\u004e\u0037\u0058\u0037\u0055\u0042\u0033",
            ));
        }
        async function __18ea2355b700bc3da376566033246086363e448236dec54f8a83a790ea161960(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = !1,
        ) {
          if (
            __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.isConnected &&
            __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.access?.founder &&
            !__ed46735a7066924b61d2076cc7666ca73533276eec44191d16b834970c65bf6d
          ) {
            ((__d2aab0836d3c8a8d85c1c08050ef020cbdd6d0e9d50ae0173328a5d5cd612701.hidden = !1),
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
                ((__ed46735a7066924b61d2076cc7666ca73533276eec44191d16b834970c65bf6d = !0),
                __b769cfef6d38d8b555019ba9dbf653f1b85fbdc3ec8f99db5a9368ed7a200661 &&
                  __72a91b917bacdbcddd40e0b0aed73d716d3df7426f358b72f02cb51e3ea8899d(
                    __b769cfef6d38d8b555019ba9dbf653f1b85fbdc3ec8f99db5a9368ed7a200661,
                  )));
            try {
              const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                await __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6(
                  "\u002f\u0061\u0070\u0069\u002f\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0061\u0073\u0068\u0062\u006f\u0061\u0072\u0064\u002f\u006e\u0079\u0078\u0074\u0075\u0062\u0065" +
                    (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
                      ? "\u002f\u0063\u0068\u0065\u0063\u006b"
                      : ""),
                  {
                    method: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
                      ? "\u0050\u004f\u0053\u0054"
                      : "\u0047\u0045\u0054",
                  },
                );
              if (
                !__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.isConnected ||
                !__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.access?.founder
              )
                return;
              ((__ed46735a7066924b61d2076cc7666ca73533276eec44191d16b834970c65bf6d = !1),
                __72a91b917bacdbcddd40e0b0aed73d716d3df7426f358b72f02cb51e3ea8899d(
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                ));
            } catch (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) {
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
                ? __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b(
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.message ||
                      "\u0054\u0068\u0065\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0063\u0068\u0065\u0063\u006b\u0020\u0066\u0061\u0069\u006c\u0065\u0064\u002e",
                    "\u0065\u0072\u0072\u006f\u0072",
                  )
                : ((__d2aab0836d3c8a8d85c1c08050ef020cbdd6d0e9d50ae0173328a5d5cd612701.innerHTML =
                    "\u003c\u0070\u003e\u004e\u0037\u0058\u0037\u0055\u0042\u0033\u0020\u0073\u0074\u0061\u0074\u0075\u0073\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u006c\u006f\u0061\u0064\u0065\u0064\u002e\u0020\u0052\u0065\u0066\u0072\u0065\u0073\u0068\u0020\u0074\u0068\u0065\u0020\u0064\u0061\u0073\u0068\u0062\u006f\u0061\u0072\u0064\u0020\u0074\u006f\u0020\u0072\u0065\u0074\u0072\u0079\u002e\u003c\u002f\u0070\u003e"),
                  __fee7105fc4d51af0577a7b27c6ef4e0cf85c90de87e72e9d1a6579f318300a72(
                    __d2aab0836d3c8a8d85c1c08050ef020cbdd6d0e9d50ae0173328a5d5cd612701,
                    "\u0074\u0075\u0062\u0065",
                    "\u004e\u0037\u0058\u0037\u0055\u0042\u0033",
                  ));
            } finally {
              __ed46735a7066924b61d2076cc7666ca73533276eec44191d16b834970c65bf6d = !1;
              const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
                __d2aab0836d3c8a8d85c1c08050ef020cbdd6d0e9d50ae0173328a5d5cd612701.querySelector(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0074\u0075\u0062\u0065\u002d\u0063\u0068\u0065\u0063\u006b\u005d",
                );
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
                ((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.disabled =
                  !__b769cfef6d38d8b555019ba9dbf653f1b85fbdc3ec8f99db5a9368ed7a200661?.enabled),
                (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.textContent =
                  "\u0043\u0068\u0065\u0063\u006b\u0020\u006e\u006f\u0077"));
            }
          }
        }
        const __99a0af1660cfe58affc3ff899430bd5f7454d63db4b4a7a04e0a92268413e998 = setInterval(
          () => {
            document.hidden || __18ea2355b700bc3da376566033246086363e448236dec54f8a83a790ea161960();
          },
          6e4,
        );
        async function __9d433778c84bb56320ac2926429ccbbc9e33af617b171cf71422a4a874f28af1(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = () => {},
        ) {
          const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = String(
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c || "",
          ).match(/^data:(image\/(?:gif|png|jpeg|webp));base64,([a-z0-9+/=]+)$/i);
          if (!__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713)
            throw new Error(
              `The selected ${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5} could not be prepared.`,
            );
          if (
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.length >
            __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a
          )
            throw new Error("\u0043\u0068\u006f\u006f\u0073\u0065\u0020\u0061\u006e\u0020\u0069\u006d\u0061\u0067\u0065\u0020\u0073\u006d\u0061\u006c\u006c\u0065\u0072\u0020\u0074\u0068\u0061\u006e\u0020\u0038\u0020\u004d\u0042\u002e");
          const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713[2],
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc = [];
          for (
            let __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 = 0;
            __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 <
            __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.length;
            __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 += 42e4
          )
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.push(
              __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.slice(
                __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239,
                __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 + 42e4,
              ),
            );
          if (
            !__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.length ||
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.length > 32
          )
            throw new Error("\u0054\u0068\u0061\u0074\u0020\u0069\u006d\u0061\u0067\u0065\u0020\u0069\u0073\u0020\u0074\u006f\u006f\u0020\u006c\u0061\u0072\u0067\u0065\u0020\u0074\u006f\u0020\u0075\u0070\u006c\u006f\u0061\u0064\u002e");
          const __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = (
              globalThis.crypto?.randomUUID?.() ||
              `${Date.now()}-${Math.random().toString(36).slice(2)}`
            ).replace(/[^a-z0-9_-]/gi, ""),
            __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 = `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/users/${encodeURIComponent(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96)}/profile-media/${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5}/${__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2}`;
          for (
            let __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 = 0;
            __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 <
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.length;
            __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 += 1
          )
            (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03(
              Math.round(
                (__467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 /
                  __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.length) *
                  90,
              ),
            ),
              await __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6(
                `${__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238}/${__467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239}`,
                {
                  method: "\u0050\u0055\u0054",
                  body: JSON.stringify({
                    mime: __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713[1].toLowerCase(),
                    totalChunks:
                      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.length,
                    chunk:
                      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc[
                        __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239
                      ],
                  }),
                },
              ));
          const __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f =
            await __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6(
              `${__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238}/complete`,
              {
                method: "\u0050\u004f\u0053\u0054",
                body: "\u007b\u007d",
              },
            );
          if (!__16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f.url)
            throw new Error(
              `The ${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5} image could not be completed.`,
            );
          return (
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03(100),
            __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f.url
          );
        }
        function __153775183a87af39b37d038f0f2d9a41fb6f191283bb242f26b279c138ab61ea() {
          ((__51e241f4e1ab21052e5631abbf6ddcfbf931e3f1ce73d61a5a8454c170b94eba.innerHTML =
            Array.from(
              {
                length: 6,
              },
              () =>
                "\u003c\u0061\u0072\u0074\u0069\u0063\u006c\u0065\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u006d\u0065\u0074\u0072\u0069\u0063\u0020\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u0022\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u0064\u0069\u0076\u003e\u003c\u0073\u0070\u0061\u006e\u003e\u003c\u002f\u0073\u0070\u0061\u006e\u003e\u003c\u0073\u0074\u0072\u006f\u006e\u0067\u003e\u003c\u002f\u0073\u0074\u0072\u006f\u006e\u0067\u003e\u003c\u002f\u0064\u0069\u0076\u003e\u003c\u002f\u0061\u0072\u0074\u0069\u0063\u006c\u0065\u003e",
            ).join("")),
            (__0e2b163757570b367b08da8bb23888480477d7ff7407c183459e03cb93ece46b.innerHTML =
              "\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0074\u0061\u0062\u006c\u0065\u002d\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u0022\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u002f\u0064\u0069\u0076\u003e"),
            (__f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb.innerHTML =
              "\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0061\u0063\u0074\u0069\u0076\u0069\u0074\u0079\u002d\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u0022\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u002f\u0064\u0069\u0076\u003e"));
        }
        function __3e4c1d9f3f3cfdbff7c2a891a8b2f7642dd9345ff1939b5e342a606f29c606e2(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        ) {
          const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
            __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.sort ===
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96;
          return `<button type="button" data-owner-sort="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96}" class="${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c ? "\u0061\u0063\u0074\u0069\u0076\u0065" : ""}">${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5}${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c ? `<span aria-label="${"\u0061\u0073\u0063" === __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.direction ? "\u0061\u0073\u0063\u0065\u006e\u0064\u0069\u006e\u0067" : "\u0064\u0065\u0073\u0063\u0065\u006e\u0064\u0069\u006e\u0067"}">${"\u0061\u0073\u0063" === __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.direction ? "\u2191" : "\u2193"}</span>` : ""}</button>`;
        }
        function __cbe3e169b82a066efb87cecf43ee78a46c91fe23c1c18420de9d26beb1a60ea4() {
          const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
              __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.ipBans || [],
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
              __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.ipBanClientIp
                ? ` Your current IP is ${__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.ipBanClientIp}; N7X will not let you block it from this session.`
                : "";
          __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.innerHTML = `<header><div><span>${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0073\u0068\u0069\u0065\u006c\u0064")}</span><h2>Network access</h2><p>IP bans apply to N7X server and function requests.</p></div><button type="button" data-owner-drawer-close aria-label="Close IP bans">${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0063\u006c\u006f\u0073\u0065")}</button></header>\n        <div class="n7x-owner-drawer-scroll n7x-owner-ip-ban-drawer">\n          <section class="n7x-owner-detail-section"><h3>Block an IP address</h3><p class="n7x-owner-action-note">Use a full IPv4 or IPv6 address. This does not configure Cloudflare's edge firewall.${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c)}</p><form class="n7x-owner-ip-ban-form" data-owner-ip-ban-form><label>IP address<input name="ip" inputmode="text" autocomplete="off" maxlength="45" required placeholder="203.0.113.10 or 2001:db8::10"></label><label>Reason <input name="reason" maxlength="160" autocomplete="off" placeholder="Optional internal note"></label><div class="n7x-owner-detail-actions"><button type="submit">${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0073\u0068\u0069\u0065\u006c\u0064")}Block IP</button></div></form></section>\n          <section class="n7x-owner-detail-section"><h3>Blocked IP addresses</h3>${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.length ? `<div class="n7x-owner-ip-ban-list">${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.map((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) => `<article><div><strong>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.ip)}</strong><span>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.reason || "\u004e\u006f\u0020\u0072\u0065\u0061\u0073\u006f\u006e\u0020\u0072\u0065\u0063\u006f\u0072\u0064\u0065\u0064")}</span><small>Blocked ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.createdAt))}${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.createdBy ? ` by ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.createdBy)}` : ""}</small></div><button class="danger" type="button" data-owner-unban="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.id)}">${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0072\u0065\u0066\u0072\u0065\u0073\u0068")}Unblock</button></article>`).join("")}</div>` : "\u003c\u0070\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0061\u0063\u0074\u0069\u006f\u006e\u002d\u006e\u006f\u0074\u0065\u0022\u003e\u004e\u006f\u0020\u0049\u0050\u0020\u0061\u0064\u0064\u0072\u0065\u0073\u0073\u0065\u0073\u0020\u0061\u0072\u0065\u0020\u0062\u006c\u006f\u0063\u006b\u0065\u0064\u002e\u003c\u002f\u0070\u003e"}</section>\n        </div>`;
        }
        async function __a1966e2585746c7ebc63b861729ff89ab0d7f7629da72c73cf99b96ee03569f3({
          preserveLoading: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = !1,
        } = {}) {
          (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.controller?.abort(),
            (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.controller =
              new AbortController()),
            (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.loading = !0),
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 ||
              __153775183a87af39b37d038f0f2d9a41fb6f191283bb242f26b279c138ab61ea());
          const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
            new URLSearchParams({
              page: __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.page,
              pageSize: __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.pageSize,
              search: __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.search,
              role: __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.role,
              subscription:
                __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.subscription,
              status: __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.status,
              segment: __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.segment,
              sort: __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.sort,
              direction:
                __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.direction,
            });
          try {
            const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
              await __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6(
                `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard?${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c}`,
                {
                  signal:
                    __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.controller
                      .signal,
                },
              );
            ((__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.data =
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5),
              __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d?.(
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.metrics
                  ?.onlineUsers,
              ),
              (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.access =
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.access ||
                __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.access),
              __26b5b17a3f16601a1a0082d03dcd66a84af474199e7739e8e1653580cef84d82.enable(
                Boolean(
                  __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.access
                    ?.founder,
                ),
              ),
              (__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.querySelector(
                "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0073\u0065\u0063\u0074\u0069\u006f\u006e\u003d\u0022\u0073\u0065\u0072\u0076\u0069\u0063\u0065\u0073\u0022\u005d",
              ).hidden =
                !__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.access
                  ?.founder),
              (__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.querySelector(
                "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0067\u0061\u006d\u0065\u002d\u0072\u0065\u0070\u006f\u0072\u0074\u0073\u005d",
              ).hidden =
                !__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.access
                  ?.founder),
              __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.access?.founder ||
                "\u0073\u0065\u0072\u0076\u0069\u0063\u0065\u0073" !== __8d22331976a8113666a0908c81e73aa73428cab2801e9b29ace9b37721493fda ||
                __eee561f91b58ee873b5a76df4fe070031bb64d02e0803f54276f6fdbb14b2b43("\u006f\u0076\u0065\u0072\u0076\u0069\u0065\u0077"),
              (__d2aab0836d3c8a8d85c1c08050ef020cbdd6d0e9d50ae0173328a5d5cd612701.hidden =
                !__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.access
                  ?.founder),
              __d2aab0836d3c8a8d85c1c08050ef020cbdd6d0e9d50ae0173328a5d5cd612701.hidden ||
                __18ea2355b700bc3da376566033246086363e448236dec54f8a83a790ea161960(),
              (__5a2fa72065e6201b186de750f00e9aef5fdba5eabe9611c30108d7e663e502b7.hidden =
                !__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.access
                  ?.founder),
              __5a2fa72065e6201b186de750f00e9aef5fdba5eabe9611c30108d7e663e502b7.hidden ||
                (__b1beae86029a4f3a21d0d992ca0d2036eaaaae8e45994cac42b42d390c73e329(),
                (async function () {
                  const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                    __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.querySelector(
                      "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0067\u0061\u006d\u0065\u002d\u0072\u0065\u0070\u006f\u0072\u0074\u0073\u005d",
                    );
                  if (
                    __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.isConnected &&
                    __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.access
                      ?.founder
                  ) {
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.hidden = !1;
                    try {
                      const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                        await __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6(
                          "\u002f\u0061\u0070\u0069\u002f\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0061\u0073\u0068\u0062\u006f\u0061\u0072\u0064\u002f\u0067\u0061\u006d\u0065\u002d\u0072\u0065\u0070\u006f\u0072\u0074\u0073",
                        );
                      if (
                        !__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.isConnected
                      )
                        return;
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.innerHTML =
                        "\u003c\u0064\u0069\u0076\u003e\u003c\u0073\u0074\u0072\u006f\u006e\u0067\u003e\u0047\u0061\u006d\u0065\u0020\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u0020\u0072\u0065\u0070\u006f\u0072\u0074\u0073\u003c\u002f\u0073\u0074\u0072\u006f\u006e\u0067\u003e\u003c\u0070\u003e\u0041\u0075\u0074\u006f\u006d\u0061\u0074\u0069\u0063\u0020\u0073\u0069\u0067\u006e\u0061\u006c\u0073\u0020\u0066\u0072\u006f\u006d\u0020\u0062\u0072\u006f\u0077\u0073\u0065\u0072\u0073\u003b\u0020\u0072\u0065\u0070\u006f\u0072\u0074\u0073\u0020\u006d\u0061\u0079\u0020\u0069\u006e\u0063\u006c\u0075\u0064\u0065\u0020\u0073\u006c\u006f\u0077\u0020\u006c\u006f\u0061\u0064\u0073\u002e\u0020\u004c\u0061\u0073\u0074\u0020\u0073\u0065\u0076\u0065\u006e\u0020\u0064\u0061\u0079\u0073\u002e\u003c\u002f\u0070\u003e" +
                        ((
                          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.reports ||
                          []
                        )
                          .slice(0, 50)
                          .map(
                            (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) =>
                              `<p><strong>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.title)}</strong> &middot; ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.provider)} &middot; ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.brand)} &middot; ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.reason)} &middot; ${Number(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.count) || 1} reports<br><small>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.lastSeen))}</small></p>`,
                          )
                          .join("") || "\u003c\u0070\u003e\u004e\u006f\u0020\u0072\u0065\u0063\u0065\u006e\u0074\u0020\u0066\u0061\u0069\u006c\u0075\u0072\u0065\u0073\u0020\u0072\u0065\u0070\u006f\u0072\u0074\u0065\u0064\u002e\u003c\u002f\u0070\u003e") +
                        "\u003c\u002f\u0064\u0069\u0076\u003e";
                    } catch {
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.textContent =
                        "\u0047\u0061\u006d\u0065\u0020\u0072\u0065\u0070\u006f\u0072\u0074\u0073\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u006c\u006f\u0061\u0064\u0065\u0064\u002e\u0020\u0052\u0065\u0066\u0072\u0065\u0073\u0068\u0020\u0074\u006f\u0020\u0072\u0065\u0074\u0072\u0079\u002e";
                    }
                    __fee7105fc4d51af0577a7b27c6ef4e0cf85c90de87e72e9d1a6579f318300a72(
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                      "\u0067\u0061\u006d\u0065\u002d\u0072\u0065\u0070\u006f\u0072\u0074\u0073",
                      "\u0047\u0061\u006d\u0065\u0020\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u0020\u0072\u0065\u0070\u006f\u0072\u0074\u0073",
                    );
                  }
                })()),
              (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.customRoles =
                Array.isArray(
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.customRoles,
                )
                  ? __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.customRoles
                  : __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.customRoles));
            const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
              __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.querySelector(
                "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0069\u0070\u002d\u0062\u0061\u006e\u0073\u005d",
              );
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 &&
              (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.hidden =
                !__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.access?.permissions?.includes(
                  "\u006e\u0065\u0074\u0077\u006f\u0072\u006b\u003a\u0062\u0061\u006e\u0073",
                ));
            const __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 =
              __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.querySelector(
                "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0072\u006f\u006c\u0065\u0073\u005d",
              );
            __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 &&
              (__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.hidden =
                !__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.access
                  ?.founder);
            const __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a =
              __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.querySelector(
                "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0067\u006c\u006f\u0062\u0061\u006c\u002d\u0061\u0070\u0070\u0073\u005d",
              );
            (__1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a &&
              (__1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a.hidden =
                !__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.access
                  ?.founder),
              (__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.querySelector(
                "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0073\u0074\u0075\u0064\u0079\u0072\u0065\u0061\u0064\u0079\u005d",
              ).hidden =
                !__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.access
                  ?.founder));
            const __fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797 =
              __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.querySelector(
                "\u005b\u006e\u0061\u006d\u0065\u003d\u0022\u0072\u006f\u006c\u0065\u0022\u005d",
              );
            __fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797 &&
              (__fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797
                .querySelectorAll("\u006f\u0070\u0074\u0069\u006f\u006e\u005b\u0064\u0061\u0074\u0061\u002d\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0072\u006f\u006c\u0065\u005d")
                .forEach((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.remove(),
                ),
              __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.customRoles.forEach(
                (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) =>
                  __fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797.insertAdjacentHTML(
                    "\u0062\u0065\u0066\u006f\u0072\u0065\u0065\u006e\u0064",
                    `<option data-custom-role value="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.id)}">${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.label)}</option>`,
                  ),
              ),
              (__fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797.value =
                __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.role));
            const __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87 =
              __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.querySelector(
                "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0061\u0063\u0063\u0065\u0073\u0073\u002d\u0063\u006f\u0070\u0079\u005d",
              );
            (__0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87 &&
              __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.access &&
              (__0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.textContent = `${__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.access.roleLabel || __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.access.role)} access \xb7 controls are limited to this role's permissions.`),
              (function (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = {}) {
                const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = [
                  [
                    "\u0075\u0073\u0065\u0072\u0073",
                    "\u0054\u006f\u0074\u0061\u006c\u0020\u0075\u0073\u0065\u0072\u0073",
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.totalUsers ??
                      0,
                    "\u0061\u006c\u006c",
                  ],
                  [
                    "\u0061\u0063\u0074\u0069\u0076\u0065",
                    "\u0041\u0063\u0074\u0069\u0076\u0065\u0020\u0074\u006f\u0064\u0061\u0079",
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.activeToday ??
                      0,
                    "\u0061\u0063\u0074\u0069\u0076\u0065\u005f\u0074\u006f\u0064\u0061\u0079",
                  ],
                  [
                    "\u006f\u006e\u006c\u0069\u006e\u0065",
                    "\u004f\u006e\u006c\u0069\u006e\u0065\u0020\u006e\u006f\u0077",
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.onlineUsers ??
                      0,
                    "\u006f\u006e\u006c\u0069\u006e\u0065",
                  ],
                  [
                    "\u0073\u0069\u0067\u006e\u0075\u0070",
                    "\u004e\u0065\u0077\u0020\u0073\u0069\u0067\u006e\u0075\u0070\u0073\u0020\u00b7\u0020\u0037\u0064",
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.newSignups ??
                      0,
                    "\u006e\u0065\u0077\u005f\u0037\u0064",
                  ],
                  [
                    "\u0070\u0072\u0065\u006d\u0069\u0075\u006d",
                    "\u0050\u0072\u0065\u006d\u0069\u0075\u006d",
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.premiumSubscribers ??
                      0,
                    "\u0070\u0072\u0065\u006d\u0069\u0075\u006d",
                  ],
                  [
                    "\u0072\u0065\u0076\u0065\u006e\u0075\u0065",
                    "\u004d\u006f\u006e\u0074\u0068\u006c\u0079\u0020\u0072\u0065\u0076\u0065\u006e\u0075\u0065",
                    ((__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.monthlyRevenueCents),
                    new Intl.NumberFormat(void 0, {
                      style: "\u0063\u0075\u0072\u0072\u0065\u006e\u0063\u0079",
                      currency: "\u0055\u0053\u0044",
                    }).format(
                      (Number(__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03) ||
                        0) / 100,
                    )),
                    "\u0072\u0065\u0076\u0065\u006e\u0075\u0065",
                  ],
                ];
                var __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03;
                __51e241f4e1ab21052e5631abbf6ddcfbf931e3f1ce73d61a5a8454c170b94eba.innerHTML =
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
                    .map(
                      ([
                        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
                      ]) => {
                        const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
                          __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.segment ===
                          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713;
                        return `<button class="n7x-owner-metric${__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a ? "\u0020\u0061\u0063\u0074\u0069\u0076\u0065" : ""}" type="button" data-owner-segment="${__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713}" aria-pressed="${__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a}" aria-label="Show ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c)}">${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5)}<div><span>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c)}</span><strong>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03)}</strong></div></button>`;
                      },
                    )
                    .join("");
              })(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.metrics),
              (function (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) {
                const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.users || [],
                  __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.pagination ||
                    {},
                  __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = Number(
                    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.accounts ??
                      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.scanned ??
                      0,
                  ),
                  __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 = Number(
                    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.guests || 0,
                  );
                ((__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.querySelector(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0075\u0073\u0065\u0072\u002d\u0063\u006f\u0075\u006e\u0074\u005d",
                ).textContent =
                  `${Number(__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.total || 0).toLocaleString()} matching \xb7 ${__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.toLocaleString()} accounts \xb7 ${__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.toLocaleString()} guest${1 === __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 ? "" : "\u0073"} online${__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.truncated ? "\u0020\u0028\u0073\u0063\u0061\u006e\u0020\u0063\u0061\u0070\u0070\u0065\u0064\u0029" : ""}`),
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.length
                    ? (__0e2b163757570b367b08da8bb23888480477d7ff7407c183459e03cb93ece46b.innerHTML = `<table class="n7x-owner-table">\n          <thead><tr><th>${__3e4c1d9f3f3cfdbff7c2a891a8b2f7642dd9345ff1939b5e342a606f29c606e2("\u0064\u0069\u0073\u0070\u006c\u0061\u0079\u004e\u0061\u006d\u0065", "\u0055\u0073\u0065\u0072")}</th><th>${__3e4c1d9f3f3cfdbff7c2a891a8b2f7642dd9345ff1939b5e342a606f29c606e2("\u0072\u006f\u006c\u0065", "\u0052\u006f\u006c\u0065")}</th><th>${__3e4c1d9f3f3cfdbff7c2a891a8b2f7642dd9345ff1939b5e342a606f29c606e2("\u0073\u0075\u0062\u0073\u0063\u0072\u0069\u0070\u0074\u0069\u006f\u006e\u0053\u0074\u0061\u0074\u0075\u0073", "\u0053\u0075\u0062\u0073\u0063\u0072\u0069\u0070\u0074\u0069\u006f\u006e")}</th><th>${__3e4c1d9f3f3cfdbff7c2a891a8b2f7642dd9345ff1939b5e342a606f29c606e2("\u006c\u0061\u0073\u0074\u0053\u0069\u0067\u006e\u0049\u006e\u0041\u0074", "\u004c\u0061\u0073\u0074\u0020\u0073\u0069\u0067\u006e\u002d\u0069\u006e")}</th><th>${__3e4c1d9f3f3cfdbff7c2a891a8b2f7642dd9345ff1939b5e342a606f29c606e2("\u006c\u0061\u0073\u0074\u0041\u0063\u0074\u0069\u0076\u0065\u0041\u0074", "\u004c\u0061\u0073\u0074\u0020\u0061\u0063\u0074\u0069\u0076\u0065")}</th><th>Email verified</th><th>${__3e4c1d9f3f3cfdbff7c2a891a8b2f7642dd9345ff1939b5e342a606f29c606e2("\u0073\u0074\u0061\u0074\u0075\u0073", "\u0053\u0074\u0061\u0074\u0075\u0073")}</th><th><span class="sr-only">Actions</span></th></tr></thead>\n          <tbody>${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
                        .map(
                          (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) => {
                            const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                                Boolean(
                                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.guest,
                                ),
                              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                                !__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c &&
                                !0 ===
                                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.canReviewSearchHistory;
                            return `<tr data-owner-user-row="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.uid)}"${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c ? "\u0020\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0067\u0075\u0065\u0073\u0074\u002d\u0072\u006f\u0077\u003d\u0022\u0074\u0072\u0075\u0065\u0022" : ""}>\n            <td><div class="n7x-owner-user-entry"><button class="n7x-owner-user-cell" type="button" data-owner-view-user="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.uid)}"><span class="n7x-owner-avatar">${__d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.photoUrl, "", (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.displayName || "\u003f").slice(0, 1).toUpperCase())}<i class="${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.online ? "\u006f\u006e\u006c\u0069\u006e\u0065" : ""}"></i></span><span><span class="n7x-owner-user-name-row"><strong>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.displayName)}</strong><span class="n7x-owner-presence-state ${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.online ? "\u006f\u006e\u006c\u0069\u006e\u0065" : "\u006f\u0066\u0066\u006c\u0069\u006e\u0065"}"><i></i>${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.online ? "\u004f\u006e\u006c\u0069\u006e\u0065" : "\u004f\u0066\u0066\u006c\u0069\u006e\u0065"}</span></span><small>@${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.username)} \xb7 ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.email || (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c ? "\u004e\u006f\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074" : "\u004e\u006f\u0020\u0065\u006d\u0061\u0069\u006c"))}</small><span class="n7x-owner-mobile-access"><span class="n7x-owner-badge role-${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.role)}${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.customRole ? "\u0020\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0072\u006f\u006c\u0065" : ""}"${__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) ? ` style="--owner-custom-role:${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5))}"` : ""}>${__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.role)}<span class="n7x-minecraft-text">${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5))}</span></span><span class="n7x-owner-badge subscription-${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.subscriptionStatus)}">${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.subscriptionStatus))}</span></span></span></button>${__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 ? `<button class="n7x-owner-search-shield" type="button" data-owner-search-history="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.uid)}" aria-label="Review search history for ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.displayName)}" title="Review search history">${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0073\u0068\u0069\u0065\u006c\u0064")}</button>` : ""}</div></td>\n            <td><span class="n7x-owner-badge role-${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.role)}${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.customRole ? "\u0020\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0072\u006f\u006c\u0065" : ""}"${__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) ? ` style="--owner-custom-role:${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5))}"` : ""}>${__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.role)}<span class="n7x-minecraft-text">${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5))}</span></span></td>\n            <td><span class="n7x-owner-badge subscription-${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.subscriptionStatus)}">${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.subscriptionStatus))}</span></td>\n            <td><span title="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c ? "\u004e\u006f\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074" : __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.lastSignInAt))}">${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c ? "\u004e\u006f\u0074\u0020\u0073\u0069\u0067\u006e\u0065\u0064\u0020\u0069\u006e" : __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.lastSignInAt))}</span></td>\n            <td><span title="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.lastActiveAt))}">${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.lastActiveAt))}</span></td>\n            <td><span class="n7x-owner-verified ${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.deliverableEmail && __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.emailVerified ? "\u0076\u0065\u0072\u0069\u0066\u0069\u0065\u0064" : ""}">${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c ? "\u0047\u0075\u0065\u0073\u0074" : __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.deliverableEmail ? (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.emailVerified ? "\u0056\u0065\u0072\u0069\u0066\u0069\u0065\u0064" : "\u0055\u006e\u0076\u0065\u0072\u0069\u0066\u0069\u0065\u0064") : "\u004e\u002f\u0041"}</span></td>\n            <td><span class="n7x-owner-account-state ${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c ? "\u0067\u0075\u0065\u0073\u0074" : __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.disabled ? "\u0064\u0069\u0073\u0061\u0062\u006c\u0065\u0064" : "\u0065\u006e\u0061\u0062\u006c\u0065\u0064"}"><i></i>${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c ? "\u0047\u0075\u0065\u0073\u0074" : __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.disabled ? "\u0044\u0069\u0073\u0061\u0062\u006c\u0065\u0064" : "\u0045\u006e\u0061\u0062\u006c\u0065\u0064"}</span></td>\n            <td><button class="n7x-owner-row-action" type="button" data-owner-view-user="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.uid)}" aria-label="View ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.displayName)}">${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0063\u0068\u0065\u0076\u0072\u006f\u006e")}</button></td>\n          </tr>`;
                          },
                        )
                        .join("")}</tbody></table>`)
                    : (__0e2b163757570b367b08da8bb23888480477d7ff7407c183459e03cb93ece46b.innerHTML =
                        "\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0065\u006d\u0070\u0074\u0079\u0022\u003e\u003c\u0073\u0074\u0072\u006f\u006e\u0067\u003e\u004e\u006f\u0020\u0075\u0073\u0065\u0072\u0073\u0020\u0066\u006f\u0075\u006e\u0064\u003c\u002f\u0073\u0074\u0072\u006f\u006e\u0067\u003e\u003c\u0073\u0070\u0061\u006e\u003e\u0054\u0072\u0079\u0020\u0063\u0068\u0061\u006e\u0067\u0069\u006e\u0067\u0020\u0074\u0068\u0065\u0020\u0073\u0065\u0061\u0072\u0063\u0068\u0020\u006f\u0072\u0020\u0066\u0069\u006c\u0074\u0065\u0072\u0073\u002e\u003c\u002f\u0073\u0070\u0061\u006e\u003e\u003c\u002f\u0064\u0069\u0076\u003e"),
                  (__e3c7b38e84c27c3e546e6e603229d78351eaa60fabff2a12958e3b3f35427d4e.innerHTML = `<span>Page ${__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.page || 1} of ${__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.pages || 1}</span><div><label>Rows <select data-owner-page-size><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select></label><button type="button" data-owner-page="${Math.max(1, (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.page || 1) - 1)}" ${(__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.page || 1) <= 1 ? "\u0064\u0069\u0073\u0061\u0062\u006c\u0065\u0064" : ""}>Previous</button><button type="button" data-owner-page="${Math.min(__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.pages || 1, (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.page || 1) + 1)}" ${(__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.page || 1) >= (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.pages || 1) ? "\u0064\u0069\u0073\u0061\u0062\u006c\u0065\u0064" : ""}>Next</button></div>`),
                  (__e3c7b38e84c27c3e546e6e603229d78351eaa60fabff2a12958e3b3f35427d4e.querySelector(
                    "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0070\u0061\u0067\u0065\u002d\u0073\u0069\u007a\u0065\u005d",
                  ).value = String(
                    __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.pageSize,
                  )),
                  __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c(
                    __0e2b163757570b367b08da8bb23888480477d7ff7407c183459e03cb93ece46b,
                  ));
              })(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5),
              (function (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = []) {
                if (
                  __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.access &&
                  !__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.access.permissions?.includes(
                    "\u0061\u0075\u0064\u0069\u0074\u003a\u0076\u0069\u0065\u0077",
                  )
                )
                  return void (__f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb.innerHTML =
                    "\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0065\u006d\u0070\u0074\u0079\u0020\u0063\u006f\u006d\u0070\u0061\u0063\u0074\u0022\u003e\u003c\u0073\u0074\u0072\u006f\u006e\u0067\u003e\u0041\u0063\u0074\u0069\u0076\u0069\u0074\u0079\u0020\u0069\u0073\u0020\u0070\u0072\u006f\u0074\u0065\u0063\u0074\u0065\u0064\u003c\u002f\u0073\u0074\u0072\u006f\u006e\u0067\u003e\u003c\u0073\u0070\u0061\u006e\u003e\u0059\u006f\u0075\u0072\u0020\u0061\u0073\u0073\u0069\u0067\u006e\u0065\u0064\u0020\u0072\u006f\u006c\u0065\u0020\u0063\u0061\u006e\u0020\u006d\u0061\u006e\u0061\u0067\u0065\u0020\u0069\u0074\u0073\u0020\u0070\u0065\u0072\u006d\u0069\u0074\u0074\u0065\u0064\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0074\u0061\u0073\u006b\u0073\u0020\u0077\u0069\u0074\u0068\u006f\u0075\u0074\u0020\u0076\u0069\u0065\u0077\u0069\u006e\u0067\u0020\u0074\u0068\u0065\u0020\u0066\u0075\u006c\u006c\u0020\u0061\u0075\u0064\u0069\u0074\u0020\u006c\u006f\u0067\u002e\u003c\u002f\u0073\u0070\u0061\u006e\u003e\u003c\u002f\u0064\u0069\u0076\u003e");
                if (!__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.length)
                  return void (__f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb.innerHTML =
                    "\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0065\u006d\u0070\u0074\u0079\u0020\u0063\u006f\u006d\u0070\u0061\u0063\u0074\u0022\u003e\u003c\u0073\u0074\u0072\u006f\u006e\u0067\u003e\u004e\u006f\u0020\u0061\u0063\u0074\u0069\u0076\u0069\u0074\u0079\u0020\u0079\u0065\u0074\u003c\u002f\u0073\u0074\u0072\u006f\u006e\u0067\u003e\u003c\u0073\u0070\u0061\u006e\u003e\u004f\u0077\u006e\u0065\u0072\u0020\u0061\u006e\u0064\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0065\u0076\u0065\u006e\u0074\u0073\u0020\u0077\u0069\u006c\u006c\u0020\u0061\u0070\u0070\u0065\u0061\u0072\u0020\u0068\u0065\u0072\u0065\u002e\u003c\u002f\u0073\u0070\u0061\u006e\u003e\u003c\u002f\u0064\u0069\u0076\u003e");
                const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.reduce(
                    (
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                    ) => {
                      const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = ((
                          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                        ) => {
                          const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                            new Date(
                              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ||
                                "",
                            );
                          if (
                            Number.isNaN(
                              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.getTime(),
                            )
                          )
                            return "\u0052\u0065\u0063\u0065\u006e\u0074";
                          const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                              new Date(),
                            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                              new Date(
                                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.getFullYear(),
                                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.getMonth(),
                                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.getDate(),
                              ).getTime(),
                            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
                              new Date(
                                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.getFullYear(),
                                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.getMonth(),
                                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.getDate(),
                              ).getTime(),
                            __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
                              Math.round(
                                (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 -
                                  __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713) /
                                  864e5,
                              );
                          return 0 ===
                            __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a
                            ? "\u0054\u006f\u0064\u0061\u0079"
                            : 1 ===
                                __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a
                              ? "\u0059\u0065\u0073\u0074\u0065\u0072\u0064\u0061\u0079"
                              : new Intl.DateTimeFormat(void 0, {
                                  month: "\u0073\u0068\u006f\u0072\u0074",
                                  day: "\u006e\u0075\u006d\u0065\u0072\u0069\u0063",
                                }).format(
                                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                                );
                        })(
                          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.createdAt,
                        ),
                        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.find(
                            (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.label ===
                              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                          );
                      return (
                        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03
                          ? __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.events.push(
                              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                            )
                          : __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.push(
                              {
                                label:
                                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                                events: [
                                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                                ],
                              },
                            ),
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
                      );
                    },
                    [],
                  );
                __f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb.innerHTML =
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
                    .map(
                      (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) =>
                        `<section class="n7x-owner-activity-group"><header><strong>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.label)}</strong><span>${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.events.length} event${1 === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.events.length ? "" : "\u0073"}</span></header>${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.events.map((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) => `<article class="n7x-owner-activity-item" data-owner-activity-type="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.action))}"><i class="n7x-owner-activity-dot">${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed(__8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.action))}</i><div><strong>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.action))}</strong><p>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.targetEmail || __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.actorEmail || __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.targetUid || "\u0053\u0079\u0073\u0074\u0065\u006d\u0020\u0065\u0076\u0065\u006e\u0074")}</p><span title="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.createdAt))}">${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.createdAt))}${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.actorEmail && __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.actorEmail !== __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.targetEmail ? ` \xb7 by ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.actorEmail)}` : ""}</span></div></article>`).join("")}</section>`,
                    )
                    .join("");
              })(
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.recentActivity,
              ));
          } catch (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03) {
            "\u0041\u0062\u006f\u0072\u0074\u0045\u0072\u0072\u006f\u0072" !==
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.name &&
              (function (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) {
                (__eee561f91b58ee873b5a76df4fe070031bb64d02e0803f54276f6fdbb14b2b43("\u0075\u0073\u0065\u0072\u0073"),
                  __26b5b17a3f16601a1a0082d03dcd66a84af474199e7739e8e1653580cef84d82.enable(!1),
                  (__0e2b163757570b367b08da8bb23888480477d7ff7407c183459e03cb93ece46b.innerHTML = `<div class="n7x-owner-error"><strong>Dashboard could not load</strong><span>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.message || "\u0054\u0072\u0079\u0020\u0061\u0067\u0061\u0069\u006e\u002e")}</span><button type="button" data-owner-refresh>Try again</button></div>`),
                  (__51e241f4e1ab21052e5631abbf6ddcfbf931e3f1ce73d61a5a8454c170b94eba.innerHTML =
                    ""),
                  (__f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb.innerHTML =
                    ""));
              })(__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03);
          } finally {
            __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.loading = !1;
          }
        }
        function __eeec32ecce69bf87a9c1e4365b9269e4b204338d020b7994a786b662b2349454(
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = "",
        ) {
          return `<div class="n7x-owner-detail-value ${__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03}"><span>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5)}</span><strong>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c || "\u004e\u006f\u0074\u0020\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065")}</strong></div>`;
        }
        function __ee3d9515c09e714138b80a54a85f68ec8856f651c5192183a3ad6d1bab431d90(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        ) {
          return /^#[0-9a-f]{6}$/i.test(
            String(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 || ""),
          )
            ? String(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              ).toLowerCase()
            : __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5;
        }
        function __ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        ) {
          return __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ===
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
            ? "\u0020\u0073\u0065\u006c\u0065\u0063\u0074\u0065\u0064"
            : "";
        }
        async function __75b9960186525ac5ab965efcdf7d072a44d9c0e2ac9c36c91c0dfeac448fa6e5(
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        ) {
          ((__0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.hidden = !1),
            __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.classList.remove(
              "\u0073\u0068\u006f\u0077",
            ));
          const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = (
            __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.data?.users || []
          ).find(
            (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.uid ===
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.guest,
          );
          if (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c) {
            ((__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.selectedUser =
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c),
              (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.selectedCapabilities =
                {}));
            const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = Boolean(
                __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.access?.permissions?.includes(
                  "\u006e\u0065\u0074\u0077\u006f\u0072\u006b\u003a\u0062\u0061\u006e\u0073",
                ),
              ),
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
                  ? `${__eeec32ecce69bf87a9c1e4365b9269e4b204338d020b7994a786b662b2349454("\u004c\u0061\u0073\u0074\u0020\u0073\u0065\u0065\u006e\u0020\u0049\u0050", __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.lastSeenIp || "\u004e\u006f\u0074\u0020\u0072\u0065\u0063\u006f\u0072\u0064\u0065\u0064\u0020\u0079\u0065\u0074", "\u0069\u0070\u002d\u0061\u0064\u0064\u0072\u0065\u0073\u0073")}${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.lastSeenIp ? __eeec32ecce69bf87a9c1e4365b9269e4b204338d020b7994a786b662b2349454("\u0049\u0050\u0020\u006c\u0061\u0073\u0074\u0020\u0073\u0065\u0065\u006e", __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.lastSeenIpAt)) : ""}`
                  : "",
              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
                __d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21(
                  "",
                  "",
                  (
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.displayName ||
                    "\u0047"
                  )
                    .slice(0, 1)
                    .toUpperCase(),
                );
            return (
              (__0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.innerHTML = `<header><div class="n7x-owner-detail-avatar">${__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713}<i class="online"></i></div><div><span>${__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2("\u0067\u0075\u0065\u0073\u0074")}Guest session</span><h2>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.displayName)}</h2><p class="n7x-owner-drawer-identity">@${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.username)} <span class="n7x-owner-presence-state online"><i></i>Online</span></p></div><button type="button" data-owner-drawer-close aria-label="Close guest details">${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0063\u006c\u006f\u0073\u0065")}</button></header>\n          <div class="n7x-owner-drawer-scroll">\n            <section class="n7x-owner-detail-grid">${__eeec32ecce69bf87a9c1e4365b9269e4b204338d020b7994a786b662b2349454("\u0049\u0064\u0065\u006e\u0074\u0069\u0074\u0079", __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.displayName)}${__eeec32ecce69bf87a9c1e4365b9269e4b204338d020b7994a786b662b2349454("\u0047\u0075\u0065\u0073\u0074\u0020\u0049\u0044", `@${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.username}`)}${__eeec32ecce69bf87a9c1e4365b9269e4b204338d020b7994a786b662b2349454("\u0041\u0063\u0063\u006f\u0075\u006e\u0074", "\u004e\u006f\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0063\u0072\u0065\u0061\u0074\u0065\u0064")}${__eeec32ecce69bf87a9c1e4365b9269e4b204338d020b7994a786b662b2349454("\u0050\u0072\u0065\u0073\u0065\u006e\u0063\u0065", "\u004f\u006e\u006c\u0069\u006e\u0065\u0020\u006e\u006f\u0077")}${__eeec32ecce69bf87a9c1e4365b9269e4b204338d020b7994a786b662b2349454("\u0046\u0069\u0072\u0073\u0074\u0020\u0073\u0065\u0065\u006e", __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.createdAt))}${__eeec32ecce69bf87a9c1e4365b9269e4b204338d020b7994a786b662b2349454("\u004c\u0061\u0073\u0074\u0020\u0061\u0063\u0074\u0069\u0076\u0065", __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.lastActiveAt))}${__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03}</section>\n            <section class="n7x-owner-detail-section"><h3>Guest visitor</h3><p class="n7x-owner-action-note">N7X uses the username saved by this browser's startup wizard. If the visitor skipped it, N7X assigns a stable random guest name instead.${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 ? "\u0020\u0054\u0068\u0065\u0020\u006c\u0061\u0073\u0074\u002d\u0073\u0065\u0065\u006e\u0020\u0049\u0050\u0020\u0069\u0073\u0020\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u0020\u006f\u006e\u006c\u0079\u0020\u0074\u006f\u0020\u0073\u0074\u0061\u0066\u0066\u0020\u0077\u0068\u006f\u0020\u0063\u0061\u006e\u0020\u006d\u0061\u006e\u0061\u0067\u0065\u0020\u006e\u0065\u0074\u0077\u006f\u0072\u006b\u0020\u0062\u0061\u006e\u0073\u003b\u0020\u0073\u0068\u0061\u0072\u0065\u0064\u0020\u006f\u0072\u0020\u0063\u0068\u0061\u006e\u0067\u0069\u006e\u0067\u0020\u0049\u0050\u0073\u0020\u006d\u0061\u0079\u0020\u0072\u0065\u0070\u0072\u0065\u0073\u0065\u006e\u0074\u0020\u006d\u006f\u0072\u0065\u0020\u0074\u0068\u0061\u006e\u0020\u006f\u006e\u0065\u0020\u0070\u0065\u0072\u0073\u006f\u006e\u002e" : ""} Account, role, subscription, profile, and account-management controls become available only after the visitor signs in or creates an account.</p></section>\n          </div>`),
              void requestAnimationFrame(() =>
                __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.classList.add(
                  "\u0073\u0068\u006f\u0077",
                ),
              )
            );
          }
          ((__0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.innerHTML =
            "\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0072\u0061\u0077\u0065\u0072\u002d\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u0022\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u002f\u0064\u0069\u0076\u003e"),
            requestAnimationFrame(() =>
              __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.classList.add(
                "\u0073\u0068\u006f\u0077",
              ),
            ));
          try {
            const {
              user: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
              access: __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
              capabilities: __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe = {},
            } = await __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6(
              `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/users/${encodeURIComponent(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5)}`,
            );
            ((__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.selectedUser =
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c),
              (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.selectedCapabilities =
                __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe),
              (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.access =
                __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc ||
                __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.access));
            const __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a =
                __d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21(
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.photoUrl,
                  "",
                  (
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.displayName ||
                    "\u003f"
                  )
                    .slice(0, 1)
                    .toUpperCase(),
                ),
              __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d =
                __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc?.assignableRoles ||
                [],
              __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34 =
                __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d
                  .map(
                    (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) =>
                      `<option value="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5)}"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.role, __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5)}>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5))}</option>`,
                  )
                  .join(""),
              __fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797 =
                __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc?.founder
                  ? __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.customRoles
                      .map(
                        (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) =>
                          `<option value="custom:${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.id)}"${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.customRole?.id === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.id ? "\u0020\u0073\u0065\u006c\u0065\u0063\u0074\u0065\u0064" : ""}>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.label)} \xb7 ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.baseRole))} placement</option>`,
                      )
                      .join("")
                  : "",
              __51e241f4e1ab21052e5631abbf6ddcfbf931e3f1ce73d61a5a8454c170b94eba =
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.customRole
                  ? `custom:${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.customRole.id}`
                  : __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.role,
              __0e2b163757570b367b08da8bb23888480477d7ff7407c183459e03cb93ece46b =
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.customRole ||
                __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d.includes(
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.role,
                )
                  ? ""
                  : `<option value="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.role)}" selected disabled>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.role))}</option>`,
              __e3c7b38e84c27c3e546e6e603229d78351eaa60fabff2a12958e3b3f35427d4e =
                __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe.canSetRole ||
                __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe.canSetSubscription
                  ? `<section class="n7x-owner-detail-section"><h3>Access</h3>\n          ${
                      __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe.canSetRole
                        ? `<label>Current role<select data-owner-detail-role>${__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34}${__fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797}${__0e2b163757570b367b08da8bb23888480477d7ff7407c183459e03cb93ece46b}</select></label>${((
                            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = [],
                          ) => {
                            const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
                                new Set(
                                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                                ),
                              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
                                __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.filter(
                                  (
                                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                                  ) =>
                                    __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.has(
                                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                                    ) ||
                                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ===
                                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                                );
                            return `<div class="n7x-owner-role-options" role="radiogroup" aria-label="Account role">${__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.map((__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c) => `<button class="role-${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c)}${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 === __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c ? "\u0020\u0061\u0063\u0074\u0069\u0076\u0065" : ""}" type="button" role="radio" aria-checked="${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 === __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c}" data-owner-role-option="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c)}" ${__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.has(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c) ? "" : "\u0064\u0069\u0073\u0061\u0062\u006c\u0065\u0064"}>${__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c)}<span>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c))}</span></button>`).join("")}${"\u006f\u0077\u006e\u0065\u0072" !== __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 || __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.includes("\u006f\u0077\u006e\u0065\u0072") ? "" : `<button class="role-owner active" type="button" role="radio" aria-checked="true" disabled>${__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2("\u006f\u0077\u006e\u0065\u0072")}<span>Owner</span></button>`}</div>`;
                          })(
                            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.role,
                            __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d,
                          )}`
                        : `<p class="n7x-owner-action-note">Role: ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c))}</p>`
                    }\n          ${__8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe.canSetSubscription ? `<label>Subscription<select data-owner-detail-subscription><option value="free">Free</option><option value="premium">Premium</option><option value="trialing">Trial</option><option value="past_due">Past due</option><option value="canceled">Canceled</option></select></label><p class="n7x-owner-premium-note">Premium and Trial accounts receive Premium benefits automatically when they sign in. They do not need a Premium access code.</p><label>Monthly revenue <input data-owner-detail-revenue type="number" min="0" step="0.01" value="${((__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.monthlyRevenueCents || 0) / 100).toFixed(2)}"></label>` : `<p class="n7x-owner-action-note">Subscription: ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.subscriptionStatus))}</p>`}\n          <div class="n7x-owner-detail-actions"><button type="button" data-owner-save-access>${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0073\u0061\u0076\u0065")}Save access</button></div></section>`
                  : "",
              __f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb = [
                __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe.canSetPassword
                  ? `<button type="button" data-owner-user-action="set_password">${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u006b\u0065\u0079")}Set custom password</button>`
                  : "",
                __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe.canResetPassword
                  ? `<button type="button" data-owner-user-action="create_password_reset_link">${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u006b\u0065\u0079")}Create reset link</button>`
                  : "",
                __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe.canResetPassword
                  ? `<button type="button" data-owner-user-action="send_password_reset" ${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.deliverableEmail ? "" : "\u0064\u0069\u0073\u0061\u0062\u006c\u0065\u0064"}>${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u006d\u0061\u0069\u006c")}Email reset link</button>`
                  : "",
                __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe.canVerifyEmail
                  ? `<button type="button" data-owner-user-action="verify_email" ${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.emailVerified || !__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.deliverableEmail ? "\u0064\u0069\u0073\u0061\u0062\u006c\u0065\u0064" : ""}>${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0063\u0068\u0065\u0063\u006b")}Verify email</button>`
                  : "",
                __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe.canManageAiAccess
                  ? `<button type="button" data-owner-user-action="ai_trust" ${"\u0074\u0072\u0075\u0073\u0074\u0065\u0064" === __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.aiAccess ? "\u0064\u0069\u0073\u0061\u0062\u006c\u0065\u0064" : ""}>${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0063\u0068\u0065\u0063\u006b")}Approve AI allowance</button><button type="button" data-owner-user-action="ai_restrict" ${"\u0072\u0065\u0073\u0074\u0072\u0069\u0063\u0074\u0065\u0064" === __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.aiAccess ? "\u0064\u0069\u0073\u0061\u0062\u006c\u0065\u0064" : ""}>${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0075\u0073\u0065\u0072\u004f\u0066\u0066")}Restrict shared AI</button><button type="button" data-owner-user-action="ai_reset" ${"\u0061\u0075\u0074\u006f\u006d\u0061\u0074\u0069\u0063" === __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.aiAccess ? "\u0064\u0069\u0073\u0061\u0062\u006c\u0065\u0064" : ""}>${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0072\u0065\u0066\u0072\u0065\u0073\u0068")}Automatic AI access</button>`
                  : "",
                __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe.canDisableAccount
                  ? `<button type="button" data-owner-user-action="${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.disabled ? "\u0065\u006e\u0061\u0062\u006c\u0065" : "\u0064\u0069\u0073\u0061\u0062\u006c\u0065"}">${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.disabled ? "\u0075\u0073\u0065\u0072\u0043\u0068\u0065\u0063\u006b" : "\u0075\u0073\u0065\u0072\u004f\u0066\u0066")}${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.disabled ? "\u0052\u0065\u002d\u0065\u006e\u0061\u0062\u006c\u0065\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074" : "\u0044\u0069\u0073\u0061\u0062\u006c\u0065\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074"}</button>`
                  : "",
                __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe.canDisableAccount &&
                !__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.disabled
                  ? `<button class="danger" type="button" data-owner-user-action="ban">${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0062\u0061\u006e")}Ban account</button>`
                  : "",
                __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe.canDisableAccount &&
                __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe.canManageNetworkBans &&
                !__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.disabled &&
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.lastSeenIp
                  ? `<button class="danger" type="button" data-owner-user-action="disable_with_ip_ban">${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0062\u0061\u006e")}Disable + block IP</button>`
                  : "",
                __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe.canDeleteAccount
                  ? `<button class="danger" type="button" data-owner-user-action="delete">${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0074\u0072\u0061\u0073\u0068")}Delete account</button>`
                  : "",
              ]
                .filter(Boolean)
                .join(""),
              __c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c =
                __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe.canManageNetworkBans
                  ? __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.lastSeenIp
                    ? `<p class="n7x-owner-action-note">Last seen IP: ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.lastSeenIp)} \xb7 ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.lastSeenIpAt))}. IP addresses can be shared or change over time.</p>`
                    : "\u003c\u0070\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0061\u0063\u0074\u0069\u006f\u006e\u002d\u006e\u006f\u0074\u0065\u0022\u003e\u004e\u006f\u0020\u0049\u0050\u0020\u0068\u0061\u0073\u0020\u0062\u0065\u0065\u006e\u0020\u0072\u0065\u0063\u006f\u0072\u0064\u0065\u0064\u0020\u0066\u006f\u0072\u0020\u0074\u0068\u0069\u0073\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0079\u0065\u0074\u002e\u0020\u004e\u0037\u0058\u0020\u0072\u0065\u0063\u006f\u0072\u0064\u0073\u0020\u006f\u006e\u0065\u0020\u0061\u0066\u0074\u0065\u0072\u0020\u0069\u0074\u0073\u0020\u006e\u0065\u0078\u0074\u0020\u0061\u0075\u0074\u0068\u0065\u006e\u0074\u0069\u0063\u0061\u0074\u0065\u0064\u0020\u0061\u0063\u0074\u0069\u0076\u0069\u0074\u0079\u002e\u003c\u002f\u0070\u003e"
                  : "",
              __26b5b17a3f16601a1a0082d03dcd66a84af474199e7739e8e1653580cef84d82 =
                __f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb
                  ? `<section class="n7x-owner-detail-section"><h3>Account actions</h3>${!__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.deliverableEmail && __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe.canResetPassword ? "\u003c\u0070\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0061\u0063\u0074\u0069\u006f\u006e\u002d\u006e\u006f\u0074\u0065\u0022\u003e\u0054\u0068\u0069\u0073\u0020\u0075\u0073\u0065\u0072\u006e\u0061\u006d\u0065\u002d\u006f\u006e\u006c\u0079\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0068\u0061\u0073\u0020\u006e\u006f\u0020\u0069\u006e\u0062\u006f\u0078\u002e\u0020\u0043\u0072\u0065\u0061\u0074\u0065\u0020\u0061\u0020\u0073\u0065\u0063\u0075\u0072\u0065\u0020\u0072\u0065\u0073\u0065\u0074\u0020\u006c\u0069\u006e\u006b\u0020\u0061\u006e\u0064\u0020\u0067\u0069\u0076\u0065\u0020\u0069\u0074\u0020\u0064\u0069\u0072\u0065\u0063\u0074\u006c\u0079\u0020\u0074\u006f\u0020\u0074\u0068\u0065\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u006f\u0077\u006e\u0065\u0072\u002e\u003c\u002f\u0070\u003e" : ""}${__c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c}<div class="n7x-owner-action-grid">${__f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb}</div></section>`
                  : "",
              __8d22331976a8113666a0908c81e73aa73428cab2801e9b29ace9b37721493fda =
                __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe.canViewAudit
                  ? `<section class="n7x-owner-detail-section"><h3>Recent user activity</h3><div class="n7x-owner-user-activity">${(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.recentActivity || []).length ? __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.recentActivity.map((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) => `<p><strong>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.action))}</strong><span>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.createdAt))}</span></p>`).join("") : "\u003c\u0073\u0070\u0061\u006e\u003e\u004e\u006f\u0020\u0072\u0065\u0063\u006f\u0072\u0064\u0065\u0064\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0061\u0063\u0074\u0069\u006f\u006e\u0073\u002e\u003c\u002f\u0073\u0070\u0061\u006e\u003e"}</div></section>`
                  : "";
            __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.innerHTML = `<header><div class="n7x-owner-detail-avatar">${__1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a}<i class="${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.online ? "\u006f\u006e\u006c\u0069\u006e\u0065" : ""}"></i></div><div><span>${__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.role)}<span class="n7x-minecraft-text">${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c))}</span> account</span><h2>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.displayName)}</h2><p class="n7x-owner-drawer-identity">@${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.username)} <span class="n7x-owner-presence-state ${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.online ? "\u006f\u006e\u006c\u0069\u006e\u0065" : "\u006f\u0066\u0066\u006c\u0069\u006e\u0065"}"><i></i>${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.online ? "\u004f\u006e\u006c\u0069\u006e\u0065" : "\u004f\u0066\u0066\u006c\u0069\u006e\u0065"}</span></p></div><button type="button" data-owner-drawer-close aria-label="Close user details">${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0063\u006c\u006f\u0073\u0065")}</button></header>\n          <div class="n7x-owner-drawer-scroll">\n            <section class="n7x-owner-detail-grid">${__eeec32ecce69bf87a9c1e4365b9269e4b204338d020b7994a786b662b2349454("\u0045\u006d\u0061\u0069\u006c", __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.deliverableEmail ? __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.email : "\u004e\u006f\u0020\u0065\u006d\u0061\u0069\u006c\u0020\u0061\u0064\u0064\u0065\u0064")}${__eeec32ecce69bf87a9c1e4365b9269e4b204338d020b7994a786b662b2349454("\u0046\u0069\u0072\u0065\u0062\u0061\u0073\u0065\u0020\u0055\u0049\u0044", __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.uid, "\u0075\u0069\u0064")}${__eeec32ecce69bf87a9c1e4365b9269e4b204338d020b7994a786b662b2349454("\u0050\u0072\u0065\u0073\u0065\u006e\u0063\u0065", __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.online ? "\u004f\u006e\u006c\u0069\u006e\u0065\u0020\u006e\u006f\u0077" : "\u004f\u0066\u0066\u006c\u0069\u006e\u0065")}${__eeec32ecce69bf87a9c1e4365b9269e4b204338d020b7994a786b662b2349454("\u004c\u0061\u0073\u0074\u0020\u0073\u0069\u0067\u006e\u002d\u0069\u006e", __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.lastSignInAt))}${__eeec32ecce69bf87a9c1e4365b9269e4b204338d020b7994a786b662b2349454("\u004c\u0061\u0073\u0074\u0020\u0061\u0063\u0074\u0069\u0076\u0065", __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.lastActiveAt))}${__8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe.canManageNetworkBans ? __eeec32ecce69bf87a9c1e4365b9269e4b204338d020b7994a786b662b2349454("\u004c\u0061\u0073\u0074\u0020\u0073\u0065\u0065\u006e\u0020\u0049\u0050", __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.lastSeenIp || "\u004e\u006f\u0074\u0020\u0072\u0065\u0063\u006f\u0072\u0064\u0065\u0064\u0020\u0079\u0065\u0074", "\u0069\u0070\u002d\u0061\u0064\u0064\u0072\u0065\u0073\u0073") : ""}${__8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe.canManageNetworkBans && __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.lastSeenIp ? __eeec32ecce69bf87a9c1e4365b9269e4b204338d020b7994a786b662b2349454("\u0049\u0050\u0020\u006c\u0061\u0073\u0074\u0020\u0073\u0065\u0065\u006e", __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.lastSeenIpAt)) : ""}${__eeec32ecce69bf87a9c1e4365b9269e4b204338d020b7994a786b662b2349454("\u0045\u006d\u0061\u0069\u006c\u0020\u0076\u0065\u0072\u0069\u0066\u0069\u0065\u0064", __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.deliverableEmail ? (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.emailVerified ? "\u0056\u0065\u0072\u0069\u0066\u0069\u0065\u0064" : "\u004e\u006f\u0074\u0020\u0076\u0065\u0072\u0069\u0066\u0069\u0065\u0064") : "\u004e\u006f\u0074\u0020\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0062\u006c\u0065\u0020\u00b7\u0020\u0075\u0073\u0065\u0072\u006e\u0061\u006d\u0065\u002d\u006f\u006e\u006c\u0079")}</section>\n            <section class="n7x-owner-detail-section n7x-owner-profile-management"><h3>Public profile</h3>${(function (
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
            ) {
              const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.profile || {},
                __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                  __ee3d9515c09e714138b80a54a85f68ec8856f651c5192183a3ad6d1bab431d90(
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.accentPrimary,
                    "\u0023\u0035\u0038\u0036\u0035\u0066\u0032",
                  ),
                __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
                  __ee3d9515c09e714138b80a54a85f68ec8856f651c5192183a3ad6d1bab431d90(
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.accentSecondary,
                    "\u0023\u0038\u0065\u0061\u0031\u0066\u0066",
                  ),
                __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
                  __ee3d9515c09e714138b80a54a85f68ec8856f651c5192183a3ad6d1bab431d90(
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.bannerColor,
                    __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
                  ),
                __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 =
                  __ee3d9515c09e714138b80a54a85f68ec8856f651c5192183a3ad6d1bab431d90(
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.displayNameColorPrimary,
                    "\u0023\u0066\u0066\u0066\u0066\u0066\u0066",
                  ),
                __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f =
                  __ee3d9515c09e714138b80a54a85f68ec8856f651c5192183a3ad6d1bab431d90(
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.displayNameColorSecondary,
                    __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
                  ),
                __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 =
                  __ee3d9515c09e714138b80a54a85f68ec8856f651c5192183a3ad6d1bab431d90(
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.customEffectColorPrimary,
                    "\u0023\u0066\u0066\u0066\u0066\u0066\u0066",
                  ),
                __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1 =
                  __ee3d9515c09e714138b80a54a85f68ec8856f651c5192183a3ad6d1bab431d90(
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.customEffectColorSecondary,
                    __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
                  ),
                __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 = String(
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.profileEffect ||
                    "\u006e\u006f\u006e\u0065",
                ).toLowerCase(),
                __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe = String(
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.avatarDecoration ||
                    "\u006e\u006f\u006e\u0065",
                ).toLowerCase(),
                __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a = String(
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.displayNameFont ||
                    "\u0067\u0067\u002d\u0073\u0061\u006e\u0073",
                ).toLowerCase(),
                __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d = String(
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.displayNameEffect ||
                    "\u0073\u006f\u006c\u0069\u0064",
                ).toLowerCase(),
                __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161 = Math.max(
                  2,
                  Math.min(
                    18,
                    Number(
                      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.customEffectSpeed,
                    ) || 7,
                  ),
                ),
                __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34 = Math.max(
                  20,
                  Math.min(
                    100,
                    Number(
                      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.customEffectIntensity,
                    ) || 70,
                  ),
                ),
                __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c =
                  __d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21(
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.avatarUrl,
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.displayName ||
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.displayName,
                    (
                      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.displayName ||
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.displayName ||
                      "\u003f"
                    )
                      .slice(0, 1)
                      .toUpperCase(),
                  ),
                __fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797 =
                  __d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21(
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.bannerUrl,
                    "",
                  );
              return `<article class="n7x-owner-public-profile n7x-owner-effect-${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6)}" style="--profile-primary:${__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03};--profile-secondary:${__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a};--profile-banner:${__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc};--profile-name-primary:${__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238};--profile-name-secondary:${__16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f};--profile-custom-primary:${__467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239};--profile-custom-secondary:${__28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1};--profile-effect-speed:${__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161}s;--profile-effect-opacity:${__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34 / 100}">\n        <i class="n7x-owner-public-effect" aria-hidden="true"></i>\n        <div class="n7x-owner-public-banner">${__fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797}</div>\n        <div class="n7x-owner-public-avatar n7x-owner-decoration-${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe)}">${__568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c}<em aria-hidden="true"></em><i class="${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.online ? "\u006f\u006e\u006c\u0069\u006e\u0065" : ""}"></i></div>\n        <div class="n7x-owner-public-body">\n          <strong class="n7x-owner-name-font-${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a)} n7x-owner-name-effect-${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d)}">${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.displayName || __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.displayName)}</strong>\n          <span>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.handle || `@${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.username}`)}</span>\n          ${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.customStatus ? `<p class="status">${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.customStatus)}</p>` : ""}\n          <div><b>About me</b><p>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.bio || "\u004e\u006f\u0020\u0062\u0069\u006f\u0020\u0079\u0065\u0074\u002e")}</p></div>\n          <small>${__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.role)}${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.role))} \xb7 ${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.online ? "\u004f\u006e\u006c\u0069\u006e\u0065" : "\u004f\u0066\u0066\u006c\u0069\u006e\u0065"}</small>\n        </div>\n      </article>`;
            })(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c)}${
              __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe.canEditProfile
                ? `<details><summary>Edit this profile</summary>${(function (
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                  ) {
                    const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.profile ||
                        {},
                      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                        /^https?:\/\//i.test(
                          String(
                            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.avatarUrl ||
                              "",
                          ),
                        )
                          ? __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.avatarUrl
                          : "",
                      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
                        /^https?:\/\//i.test(
                          String(
                            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.bannerUrl ||
                              "",
                          ),
                        )
                          ? __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.bannerUrl
                          : "",
                      __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
                        __d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21(
                          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.avatarUrl,
                          "\u0043\u0075\u0072\u0072\u0065\u006e\u0074\u0020\u0061\u0076\u0061\u0074\u0061\u0072",
                          (
                            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.displayName ||
                            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.displayName ||
                            "\u003f"
                          )
                            .slice(0, 1)
                            .toUpperCase(),
                        ),
                      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
                        __d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21(
                          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.bannerUrl,
                          "\u0043\u0075\u0072\u0072\u0065\u006e\u0074\u0020\u0062\u0061\u006e\u006e\u0065\u0072",
                        ),
                      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = `n7x-owner-avatar-${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.uid)}`,
                      __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 = `n7x-owner-banner-${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.uid)}`;
                    return `<form class="n7x-owner-profile-editor" data-owner-profile-form>\n        <div class="n7x-owner-media-editors">\n          <article class="n7x-owner-media-editor">\n            <div class="n7x-owner-media-preview avatar" data-owner-media-preview="avatar">${__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a}</div>\n            <div><strong>Profile avatar</strong><span data-owner-media-name="avatar">PNG, JPG, WebP, or animated GIF \xb7 8 MB max</span></div>\n            <label class="n7x-owner-media-button" for="${__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2}">Choose avatar</label>\n            <input class="n7x-owner-media-input" id="${__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2}" name="avatarFile" type="file" accept="image/png,image/jpeg,image/webp,image/gif">\n          </article>\n          <article class="n7x-owner-media-editor banner">\n            <div class="n7x-owner-media-preview banner" data-owner-media-preview="banner" style="--owner-banner-preview:${__ee3d9515c09e714138b80a54a85f68ec8856f651c5192183a3ad6d1bab431d90(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.bannerColor, "\u0023\u0038\u0065\u0061\u0031\u0066\u0066")}">${__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc}</div>\n            <div><strong>Profile banner</strong><span data-owner-media-name="banner">PNG, JPG, WebP, or animated GIF \xb7 8 MB max</span></div>\n            <label class="n7x-owner-media-button" for="${__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238}">Choose banner</label>\n            <input class="n7x-owner-media-input" id="${__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238}" name="bannerFile" type="file" accept="image/png,image/jpeg,image/webp,image/gif">\n          </article>\n        </div>\n        <p class="n7x-owner-media-error" data-owner-media-error role="alert"></p>\n        <div class="n7x-owner-profile-fields">\n          <label>Display name<input name="displayName" maxlength="48" required value="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.displayName || __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.displayName)}"></label>\n          <label>Username<span class="n7x-owner-prefixed-input"><i>@</i><input name="handle" maxlength="32" required value="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(String(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.handle || __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.username).replace(/^@/, ""))}"></span></label>\n          <label class="wide">About me<textarea name="bio" maxlength="280" rows="4">${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.bio || "")}</textarea></label>\n          <label class="wide">Custom status<input name="customStatus" maxlength="80" value="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.customStatus || "")}"></label>\n          <label>Status<select name="status"><option value="online"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.status, "\u006f\u006e\u006c\u0069\u006e\u0065")}>Online</option><option value="idle"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.status, "\u0069\u0064\u006c\u0065")}>Idle</option><option value="dnd"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.status, "\u0064\u006e\u0064")}>Do not disturb</option><option value="offline"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.status, "\u006f\u0066\u0066\u006c\u0069\u006e\u0065")}>Offline</option></select></label>\n          <label>Name style<select name="displayNameFont"><option value="gg-sans"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.displayNameFont, "\u0067\u0067\u002d\u0073\u0061\u006e\u0073")}>Default</option><option value="headline"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.displayNameFont, "\u0068\u0065\u0061\u0064\u006c\u0069\u006e\u0065")}>Headline</option><option value="rounded"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.displayNameFont, "\u0072\u006f\u0075\u006e\u0064\u0065\u0064")}>Rounded</option><option value="wide"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.displayNameFont, "\u0077\u0069\u0064\u0065")}>Wide</option><option value="slab"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.displayNameFont, "\u0073\u006c\u0061\u0062")}>Slab</option><option value="condensed"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.displayNameFont, "\u0063\u006f\u006e\u0064\u0065\u006e\u0073\u0065\u0064")}>Condensed</option><option value="mono-block"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.displayNameFont, "\u006d\u006f\u006e\u006f\u002d\u0062\u006c\u006f\u0063\u006b")}>Mono block</option><option value="tempo"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.displayNameFont, "\u0074\u0065\u006d\u0070\u006f")}>Tempo</option><option value="sakura"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.displayNameFont, "\u0073\u0061\u006b\u0075\u0072\u0061")}>Sakura</option><option value="jellybean"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.displayNameFont, "\u006a\u0065\u006c\u006c\u0079\u0062\u0065\u0061\u006e")}>Jellybean</option><option value="modern"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.displayNameFont, "\u006d\u006f\u0064\u0065\u0072\u006e")}>Modern</option><option value="medieval"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.displayNameFont, "\u006d\u0065\u0064\u0069\u0065\u0076\u0061\u006c")}>Medieval</option><option value="eight-bit"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.displayNameFont, "\u0065\u0069\u0067\u0068\u0074\u002d\u0062\u0069\u0074")}>Eight bit</option><option value="vampyre"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.displayNameFont, "\u0076\u0061\u006d\u0070\u0079\u0072\u0065")}>Vampyre</option></select></label>\n          <label>Primary color<input name="accentPrimary" type="color" value="${__ee3d9515c09e714138b80a54a85f68ec8856f651c5192183a3ad6d1bab431d90(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.accentPrimary, "\u0023\u0035\u0038\u0036\u0035\u0066\u0032")}"></label>\n          <label>Accent color<input name="accentSecondary" type="color" value="${__ee3d9515c09e714138b80a54a85f68ec8856f651c5192183a3ad6d1bab431d90(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.accentSecondary, "\u0023\u0038\u0065\u0061\u0031\u0066\u0066")}"></label>\n          <label>Banner fallback<input name="bannerColor" type="color" value="${__ee3d9515c09e714138b80a54a85f68ec8856f651c5192183a3ad6d1bab431d90(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.bannerColor, "\u0023\u0038\u0065\u0061\u0031\u0066\u0066")}"></label>\n          <label>Name effect<select name="displayNameEffect"><option value="solid"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.displayNameEffect, "\u0073\u006f\u006c\u0069\u0064")}>Solid</option><option value="gradient"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.displayNameEffect, "\u0067\u0072\u0061\u0064\u0069\u0065\u006e\u0074")}>Gradient</option><option value="neon"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.displayNameEffect, "\u006e\u0065\u006f\u006e")}>Neon</option><option value="toon"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.displayNameEffect, "\u0074\u006f\u006f\u006e")}>Toon</option><option value="pop"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.displayNameEffect, "\u0070\u006f\u0070")}>Pop</option></select></label>\n          <label>Profile effect<select name="profileEffect"><option value="none"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.profileEffect, "\u006e\u006f\u006e\u0065")}>None</option><option value="glow"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.profileEffect, "\u0067\u006c\u006f\u0077")}>Glow</option><option value="sparkle"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.profileEffect, "\u0073\u0070\u0061\u0072\u006b\u006c\u0065")}>Sparkle</option><option value="aurora"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.profileEffect, "\u0061\u0075\u0072\u006f\u0072\u0061")}>Aurora</option><option value="holographic"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.profileEffect, "\u0068\u006f\u006c\u006f\u0067\u0072\u0061\u0070\u0068\u0069\u0063")}>Holographic</option><option value="fireflies"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.profileEffect, "\u0066\u0069\u0072\u0065\u0066\u006c\u0069\u0065\u0073")}>Fireflies</option><option value="cosmic-dust"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.profileEffect, "\u0063\u006f\u0073\u006d\u0069\u0063\u002d\u0064\u0075\u0073\u0074")}>Cosmic dust</option><option value="electric-storm"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.profileEffect, "\u0065\u006c\u0065\u0063\u0074\u0072\u0069\u0063\u002d\u0073\u0074\u006f\u0072\u006d")}>Electric storm</option><option value="meteor-shower"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.profileEffect, "\u006d\u0065\u0074\u0065\u006f\u0072\u002d\u0073\u0068\u006f\u0077\u0065\u0072")}>Meteor shower</option><option value="cyber-grid"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.profileEffect, "\u0063\u0079\u0062\u0065\u0072\u002d\u0067\u0072\u0069\u0064")}>Cyber grid</option><option value="plasma"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.profileEffect, "\u0070\u006c\u0061\u0073\u006d\u0061")}>Plasma</option><option value="snowfall"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.profileEffect, "\u0073\u006e\u006f\u0077\u0066\u0061\u006c\u006c")}>Snowfall</option><option value="embers"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.profileEffect, "\u0065\u006d\u0062\u0065\u0072\u0073")}>Embers</option><option value="bubbles"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.profileEffect, "\u0062\u0075\u0062\u0062\u006c\u0065\u0073")}>Bubbles</option><option value="custom"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.profileEffect, "\u0063\u0075\u0073\u0074\u006f\u006d")}>Custom</option></select></label>\n          <label>Avatar decoration<select name="avatarDecoration"><option value="none"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.avatarDecoration, "\u006e\u006f\u006e\u0065")}>None</option><option value="starfall"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.avatarDecoration, "\u0073\u0074\u0061\u0072\u0066\u0061\u006c\u006c")}>Starfall</option><option value="orbit"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.avatarDecoration, "\u006f\u0072\u0062\u0069\u0074")}>Orbit</option><option value="laurel"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.avatarDecoration, "\u006c\u0061\u0075\u0072\u0065\u006c")}>Laurel</option><option value="neon-wings"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.avatarDecoration, "\u006e\u0065\u006f\u006e\u002d\u0077\u0069\u006e\u0067\u0073")}>Neon wings</option></select></label>\n          <label class="wide">Avatar URL (optional)<input name="avatarUrl" type="url" placeholder="Leave blank to keep the current image" value="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03)}"></label>\n          <label class="wide">Banner URL (optional)<input name="bannerUrl" type="url" placeholder="Leave blank to keep the current image" value="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713)}"></label>\n        </div>\n        <div class="n7x-owner-media-removal">\n          <label><input name="removeAvatar" type="checkbox"> Remove current avatar</label>\n          <label><input name="removeBanner" type="checkbox"> Remove current banner</label>\n        </div>\n        <p>File uploads preserve animated GIFs. A selected file takes priority over its URL field, and blank fields keep the current media unchanged.</p>\n        <div class="n7x-owner-detail-actions"><button type="submit">Save profile</button></div>\n      </form>`;
                  })(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c)}</details>`
                : ""
            }</section>\n            ${__e3c7b38e84c27c3e546e6e603229d78351eaa60fabff2a12958e3b3f35427d4e}\n            ${
              __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe.canSetAiLimit
                ? (function (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) {
                    return `<section class="n7x-owner-detail-section"><h3>AI models and limits</h3><p>Allow grants this model to this account. Block removes access. Default follows the account plan. Blank limits add no extra message cap; shared token, spending and rate limits still apply.</p><div class="n7x-owner-ai-rules">${(
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.aiAssignableModels ||
                      []
                    )
                      .map((__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c) => {
                        const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = (
                          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.aiModelRules ||
                          []
                        ).find(
                          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.model ===
                            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                        ) || {
                          access: "\u0064\u0065\u0066\u0061\u0075\u006c\u0074",
                          messages: null,
                          periodDays: 4,
                        };
                        return `<details data-ai-model="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c)}"><summary>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c)} <small>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.access)}${null !== __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.messages ? "\u0020\u002f\u0020" + __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.messages + "\u0020\u006d\u0065\u0073\u0073\u0061\u0067\u0065\u0073" : ""}</small></summary><div class="n7x-owner-ai-rule-fields"><label>Access<select data-ai-rule-access>${["\u0064\u0065\u0066\u0061\u0075\u006c\u0074", "\u0061\u006c\u006c\u006f\u0077", "\u0064\u0065\u006e\u0079"].map((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => `<option value="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96}"${__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417(__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.access, __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96)}>${"\u0064\u0065\u006e\u0079" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ? "\u0042\u006c\u006f\u0063\u006b" : "\u0061\u006c\u006c\u006f\u0077" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ? "\u0041\u006c\u006c\u006f\u0077" : "\u0044\u0065\u0066\u0061\u0075\u006c\u0074"}</option>`).join("")}</select></label><label>Messages per period<input data-ai-rule-messages type="number" min="0" max="100000" step="1" placeholder="No extra cap" value="${__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.messages ?? ""}"></label><label>Reset every (days)<input data-ai-rule-days type="number" min="1" max="30" step="1" value="${__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.periodDays}"></label></div></details>`;
                      })
                      .join(
                        "",
                      )}</div><div class="n7x-owner-detail-actions"><button type="button" data-owner-save-ai-models>Save AI access</button><button type="button" data-owner-ai-activity>View usage and chat history</button></div><div data-owner-ai-activity-result aria-live="polite"></div></section>`;
                  })(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c)
                : ""
            }\n            ${__26b5b17a3f16601a1a0082d03dcd66a84af474199e7739e8e1653580cef84d82}\n            ${__8d22331976a8113666a0908c81e73aa73428cab2801e9b29ace9b37721493fda}\n          </div>`;
            const __eee561f91b58ee873b5a76df4fe070031bb64d02e0803f54276f6fdbb14b2b43 =
                __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.querySelector(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0065\u0074\u0061\u0069\u006c\u002d\u0072\u006f\u006c\u0065\u005d",
                ),
              __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b =
                __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.querySelector(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0065\u0074\u0061\u0069\u006c\u002d\u0073\u0075\u0062\u0073\u0063\u0072\u0069\u0070\u0074\u0069\u006f\u006e\u005d",
                ),
              __5a2fa72065e6201b186de750f00e9aef5fdba5eabe9611c30108d7e663e502b7 =
                __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.querySelector(
                  "\u005b\u006e\u0061\u006d\u0065\u003d\u0022\u0070\u0072\u006f\u0066\u0069\u006c\u0065\u0045\u0066\u0066\u0065\u0063\u0074\u0022\u005d",
                );
            (__5a2fa72065e6201b186de750f00e9aef5fdba5eabe9611c30108d7e663e502b7
              ?.querySelector("\u005b\u0076\u0061\u006c\u0075\u0065\u003d\u0022\u0063\u0075\u0073\u0074\u006f\u006d\u0022\u005d")
              ?.insertAdjacentHTML(
                "\u0062\u0065\u0066\u006f\u0072\u0065\u0062\u0065\u0067\u0069\u006e",
                "\u003c\u006f\u0070\u0074\u0069\u006f\u006e\u0020\u0076\u0061\u006c\u0075\u0065\u003d\u0022\u0073\u0074\u0061\u0072\u006c\u0069\u0067\u0068\u0074\u002d\u0072\u0069\u0062\u0062\u006f\u006e\u0022\u003e\u0053\u0074\u0061\u0072\u006c\u0069\u0067\u0068\u0074\u0020\u0072\u0069\u0062\u0062\u006f\u006e\u003c\u002f\u006f\u0070\u0074\u0069\u006f\u006e\u003e\u003c\u006f\u0070\u0074\u0069\u006f\u006e\u0020\u0076\u0061\u006c\u0075\u0065\u003d\u0022\u0063\u0068\u0065\u0072\u0072\u0079\u002d\u0062\u006c\u006f\u006f\u006d\u0022\u003e\u0043\u0068\u0065\u0072\u0072\u0079\u0020\u0062\u006c\u006f\u006f\u006d\u003c\u002f\u006f\u0070\u0074\u0069\u006f\u006e\u003e\u003c\u006f\u0070\u0074\u0069\u006f\u006e\u0020\u0076\u0061\u006c\u0075\u0065\u003d\u0022\u006f\u0063\u0065\u0061\u006e\u002d\u0063\u0061\u0075\u0073\u0074\u0069\u0063\u0073\u0022\u003e\u004f\u0063\u0065\u0061\u006e\u0020\u0063\u0061\u0075\u0073\u0074\u0069\u0063\u0073\u003c\u002f\u006f\u0070\u0074\u0069\u006f\u006e\u003e",
              ),
              __5a2fa72065e6201b186de750f00e9aef5fdba5eabe9611c30108d7e663e502b7 &&
                (__5a2fa72065e6201b186de750f00e9aef5fdba5eabe9611c30108d7e663e502b7.value =
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.profile
                    ?.profileEffect || "\u006e\u006f\u006e\u0065"));
            const __fee7105fc4d51af0577a7b27c6ef4e0cf85c90de87e72e9d1a6579f318300a72 =
              __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.querySelector(
                "\u005b\u006e\u0061\u006d\u0065\u003d\u0022\u0061\u0076\u0061\u0074\u0061\u0072\u0044\u0065\u0063\u006f\u0072\u0061\u0074\u0069\u006f\u006e\u0022\u005d",
              );
            (__fee7105fc4d51af0577a7b27c6ef4e0cf85c90de87e72e9d1a6579f318300a72?.insertAdjacentHTML(
              "\u0062\u0065\u0066\u006f\u0072\u0065\u0065\u006e\u0064",
              "\u003c\u006f\u0070\u0074\u0069\u006f\u006e\u0020\u0076\u0061\u006c\u0075\u0065\u003d\u0022\u0063\u0072\u0079\u0073\u0074\u0061\u006c\u002d\u0063\u0072\u006f\u0077\u006e\u0022\u003e\u0043\u0072\u0079\u0073\u0074\u0061\u006c\u0020\u0063\u0072\u006f\u0077\u006e\u003c\u002f\u006f\u0070\u0074\u0069\u006f\u006e\u003e\u003c\u006f\u0070\u0074\u0069\u006f\u006e\u0020\u0076\u0061\u006c\u0075\u0065\u003d\u0022\u006c\u0075\u006e\u0061\u0072\u002d\u0068\u0061\u006c\u006f\u0022\u003e\u004c\u0075\u006e\u0061\u0072\u0020\u0068\u0061\u006c\u006f\u003c\u002f\u006f\u0070\u0074\u0069\u006f\u006e\u003e\u003c\u006f\u0070\u0074\u0069\u006f\u006e\u0020\u0076\u0061\u006c\u0075\u0065\u003d\u0022\u0072\u006f\u0073\u0065\u002d\u0076\u0069\u006e\u0065\u0073\u0022\u003e\u0052\u006f\u0073\u0065\u0020\u0076\u0069\u006e\u0065\u0073\u003c\u002f\u006f\u0070\u0074\u0069\u006f\u006e\u003e",
            ),
              __fee7105fc4d51af0577a7b27c6ef4e0cf85c90de87e72e9d1a6579f318300a72 &&
                (__fee7105fc4d51af0577a7b27c6ef4e0cf85c90de87e72e9d1a6579f318300a72.value =
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.profile
                    ?.avatarDecoration || "\u006e\u006f\u006e\u0065"),
              __eee561f91b58ee873b5a76df4fe070031bb64d02e0803f54276f6fdbb14b2b43 &&
                (__eee561f91b58ee873b5a76df4fe070031bb64d02e0803f54276f6fdbb14b2b43.value =
                  __51e241f4e1ab21052e5631abbf6ddcfbf931e3f1ce73d61a5a8454c170b94eba),
              __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b &&
                (__f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b.value =
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.subscriptionStatus),
              __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238(
                __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87,
                __51e241f4e1ab21052e5631abbf6ddcfbf931e3f1ce73d61a5a8454c170b94eba,
              ),
              __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c(
                __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87,
              ));
          } catch (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc) {
            __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.innerHTML = `<div class="n7x-owner-error"><strong>User details could not load</strong><span>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.message)}</span><button type="button" data-owner-drawer-close>Close</button></div>`;
          }
        }
        let __037421764e2f5e073ebcd4a8e7220f715740a5cbe2e9ed2d93431a54ae8de6ec = {
          domains: [],
          targetIps: [],
        };
        function __5285a5bbd045fe6fc6ebb94cc24c149a1dcccd7cfeb2f5de9c7a211dad268afa() {
          __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.innerHTML = `<header class="n7x-owner-global-app-header"><div><span>${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0061\u0070\u0070\u0073")}</span><div><h2>StudyReady domains</h2><p>Manage the learning site on your domains.</p></div></div><button type="button" data-owner-drawer-close aria-label="Close StudyReady">${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0063\u006c\u006f\u0073\u0065")}</button></header><div class="n7x-owner-drawer-scroll n7x-owner-global-app-drawer"><section class="n7x-owner-detail-section"><p><a href="/studyready" target="_blank" rel="noopener">Preview StudyReady</a> &middot; <a href="/textbook.pdf" target="_blank" rel="noopener">Textbook PDF</a></p><p>N7X stays available at <a href="/nyx" target="_blank" rel="noopener">/nyx</a>. These domains show the same learning pages to every visitor.</p><h3>Add or update a domain</h3><form class="n7x-owner-global-app-form" data-owner-studyready-form><label>Domain<input name="hostname" required maxlength="253" placeholder="learn.example.com"></label><label>Page title<input name="title" required maxlength="80" value="StudyReady"></label><button type="submit">Save domain</button></form><p class="n7x-owner-action-note">Point the domain's A record to ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__037421764e2f5e073ebcd4a8e7220f715740a5cbe2e9ed2d93431a54ae8de6ec.targetIps.join("\u0020\u006f\u0072\u0020") || "\u0079\u006f\u0075\u0072\u0020\u0056\u0050\u0053\u0020\u0061\u0064\u0064\u0072\u0065\u0073\u0073")}. New domains need working DNS before HTTPS can be issued. Existing sites at the same hostname will use StudyReady as their homepage.</p></section><section class="n7x-owner-detail-section"><h3>Configured domains</h3>${__037421764e2f5e073ebcd4a8e7220f715740a5cbe2e9ed2d93431a54ae8de6ec.domains.map((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) => `<article class="n7x-owner-detail-section"><strong>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.hostname)}</strong><p>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.title)}</p><div class="n7x-owner-detail-actions"><a href="https://${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.hostname)}/" target="_blank" rel="noopener">Open site</a><button type="button" data-studyready-edit="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.hostname)}">Edit title</button><button type="button" data-studyready-check="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.hostname)}">Check DNS</button><button class="danger" type="button" data-studyready-remove="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.hostname)}">Remove</button></div></article>`).join("") || "\u003c\u0070\u003e\u004e\u006f\u0020\u0064\u006f\u006d\u0061\u0069\u006e\u0073\u0020\u0063\u006f\u006e\u0066\u0069\u0067\u0075\u0072\u0065\u0064\u002e\u003c\u002f\u0070\u003e"}<p data-studyready-status role="status"></p></section><section class="n7x-owner-detail-section"><h3>Category reviews</h3><p>Publishing lessons does not automatically change a filter category. Lightspeed review tools require administrator access.</p><a href="https://help.lightspeedsystems.com/s/article/kb-4019650636-lightspeed-filter---policies---verifying-access-and-troubleshooting" target="_blank" rel="noopener">Access Checker instructions</a></section></div>`;
        }
        async function __7db994cf70023f7fa1ee37d64774e922da1a209d4cfac7b44a0d185f968b0a3b(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
        ) {
          if (
            "\u0072\u0065\u006d\u006f\u0076\u0065" !== __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 ||
            confirm(
              `Remove StudyReady from ${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c}? Its homepage will return to the site's existing routing.`,
            )
          ) {
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.disabled = !0;
            try {
              const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
                await __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6(
                  `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/studyready/${encodeURIComponent(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c)}${"\u0063\u0068\u0065\u0063\u006b" === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 ? "\u002f\u0063\u0068\u0065\u0063\u006b" : ""}`,
                  {
                    method:
                      "\u0063\u0068\u0065\u0063\u006b" === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
                        ? "\u0050\u004f\u0053\u0054"
                        : "\u0044\u0045\u004c\u0045\u0054\u0045",
                  },
                );
              "\u0063\u0068\u0065\u0063\u006b" === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
                ? (__0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.querySelector(
                    "\u005b\u0064\u0061\u0074\u0061\u002d\u0073\u0074\u0075\u0064\u0079\u0072\u0065\u0061\u0064\u0079\u002d\u0073\u0074\u0061\u0074\u0075\u0073\u005d",
                  ).textContent =
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.matches
                      ? `${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c} resolves to this VPS. HTTPS is prepared on its first visit.`
                      : `${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c} currently resolves to ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.resolvedIps.join("\u002c\u0020") || "\u006e\u006f\u0020\u0061\u0064\u0064\u0072\u0065\u0073\u0073\u0065\u0073"}. Set its A record to ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.targetIps.join("\u0020\u006f\u0072\u0020")}. A CDN-proxied record may hide the origin IP.`)
                : ((__037421764e2f5e073ebcd4a8e7220f715740a5cbe2e9ed2d93431a54ae8de6ec =
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
                  __5285a5bbd045fe6fc6ebb94cc24c149a1dcccd7cfeb2f5de9c7a211dad268afa(),
                  __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b(
                    "\u0053\u0074\u0075\u0064\u0079\u0052\u0065\u0061\u0064\u0079\u0020\u0064\u006f\u006d\u0061\u0069\u006e\u0020\u0072\u0065\u006d\u006f\u0076\u0065\u0064\u002e",
                  ));
            } catch (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03) {
              __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b(
                __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.message,
                "\u0065\u0072\u0072\u006f\u0072",
              );
            } finally {
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.isConnected &&
                (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.disabled = !1);
            }
          }
        }
        function __d6e8ffff761bb3491b619880e5d917d6df582d5c67b95c1869c0a525aa0a908c() {
          window.dispatchEvent(
            new CustomEvent("\u006e\u0079\u0078\u003a\u0067\u006c\u006f\u0062\u0061\u006c\u002d\u0061\u0070\u0070\u0073\u002d\u0063\u0068\u0061\u006e\u0067\u0065\u0064", {
              detail: {
                apps: __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.globalApps,
              },
            }),
          );
        }
        function __96269fbafcaf1e59a066bbe22f9ec441fbf0ff3e38084b904ada564b445561a8() {
          __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.innerHTML = `<header class="n7x-owner-global-app-header"><div><span>${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0061\u0070\u0070\u0073")}</span><div><h2>Apps for everyone</h2><p>Add or remove apps from every user's Apps page.</p></div></div><button type="button" data-owner-drawer-close aria-label="Close global apps">${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0063\u006c\u006f\u0073\u0065")}</button></header>\n        <div class="n7x-owner-drawer-scroll n7x-owner-global-app-drawer">\n          <section class="n7x-owner-detail-section"><h3>Add an app</h3><form class="n7x-owner-global-app-form" data-owner-global-app-form><label>Name<input name="name" minlength="2" maxlength="48" autocomplete="off" required placeholder="Example app"></label><label>URL or N7X path<input name="url" maxlength="2048" autocomplete="off" spellcheck="false" required placeholder="https://example.com/ or /apps/example/"></label><div class="n7x-owner-detail-actions"><button type="submit">${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0061\u0070\u0070\u0073")}<span>Add for everyone</span></button></div></form></section>\n          <section class="n7x-owner-detail-section"><div class="n7x-owner-global-app-heading"><div><h3>Published apps</h3><p class="n7x-owner-action-note">Changes appear in open N7X sessions within one minute.</p></div><span>${__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.globalApps.length}</span></div>${__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.globalApps.length ? `<div class="n7x-owner-global-app-list">${__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.globalApps.map((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) => `<article><span class="n7x-owner-global-app-icon">${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0061\u0070\u0070\u0073")}</span><div><strong>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.name)}</strong><small>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.url)}</small></div><button class="danger" type="button" data-owner-global-app-delete="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.id)}" aria-label="Remove ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.name)}">${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0074\u0072\u0061\u0073\u0068")}Remove</button></article>`).join("")}</div>` : "\u003c\u0070\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0061\u0063\u0074\u0069\u006f\u006e\u002d\u006e\u006f\u0074\u0065\u0022\u003e\u004e\u006f\u0020\u0061\u0070\u0070\u0073\u0020\u0061\u0072\u0065\u0020\u0063\u0075\u0072\u0072\u0065\u006e\u0074\u006c\u0079\u0020\u0070\u0075\u0062\u006c\u0069\u0073\u0068\u0065\u0064\u002e\u003c\u002f\u0070\u003e"}</section>\n        </div>`;
        }
        function __a27fb158ddcbc635df4f915211d5c8e5d6a8c04827fe1281526c34bc41e8fb8b(
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = "\u006d\u0065\u006d\u0062\u0065\u0072",
        ) {
          return (
            __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.customRolePlacements
              .length
              ? __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.customRolePlacements
              : __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.map(
                  (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => ({
                    id: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                    label: __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                    ),
                  }),
                )
          )
            .map(
              (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c) =>
                `<option value="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.id)}"${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.id === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 ? "\u0020\u0073\u0065\u006c\u0065\u0063\u0074\u0065\u0064" : ""}>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.label)} placement</option>`,
            )
            .join("");
        }
        function __98e34204ec1ca6b1775902c926bc767b7ad3918ad6edaa9782e93aed4f2bfc13(
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = [],
        ) {
          const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = new Set(
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
          );
          return `<details class="n7x-owner-custom-role-permission-editor"><summary>${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.size} permission${1 === __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.size ? "" : "\u0073"} selected</summary><fieldset class="n7x-owner-custom-role-permissions"><legend>Permissions</legend>${__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.customRolePermissions.map((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) => `<label><input type="checkbox" name="permissions" value="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.id)}"${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.has(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.id) ? "\u0020\u0063\u0068\u0065\u0063\u006b\u0065\u0064" : ""}><span>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.label)}</span><small>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.id)}</small></label>`).join("")}</fieldset></details>`;
        }
        function __ee07b2c1f5ae5a68cf1a38fc099e028ffbe3e7bdd9c0223fa1ec952465f7acbf(
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = "\u0023\u0038\u0065\u0061\u0031\u0066\u0066",
        ) {
          const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
            /^#[0-9a-f]{6}$/i.test(
              String(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 || ""),
            )
              ? String(
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                ).toLowerCase()
              : "\u0023\u0038\u0065\u0061\u0031\u0066\u0066";
          return `<label class="n7x-owner-custom-role-field n7x-owner-custom-role-color-field">Color / code<span class="n7x-owner-custom-role-color-control"><input class="n7x-owner-custom-role-color-picker" data-owner-custom-role-color-picker type="color" value="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c)}" aria-label="Choose role color"><input name="color" type="text" value="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c)}" maxlength="7" pattern="(?:#[0-9A-Fa-f]{6}|&amp;[0-9A-Fa-f])" title="Use a six-digit hex color or a Minecraft code from &amp;0 through &amp;f" placeholder="&amp;d or #ff55ff" required></span><small>Pick a color or enter #RRGGBB / &amp;0\u2013&amp;f.</small></label>`;
        }
        function __34e3a593d4cfcfa83223ee3c74b7c8a0109cc4a95b5017b64b39376d978be837() {
          const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
              __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.customRoleEditorId,
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = `<form class="n7x-owner-custom-role-form n7x-owner-custom-role-editor" data-owner-custom-role-create><label class="n7x-owner-custom-role-field">Name<input name="label" maxlength="64" minlength="2" required placeholder="Night Watch"></label><label class="n7x-owner-custom-role-field">Role ID<input name="id" maxlength="32" pattern="[a-z0-9][a-z0-9-]{1,31}" placeholder="night-watch"></label>${__ee07b2c1f5ae5a68cf1a38fc099e028ffbe3e7bdd9c0223fa1ec952465f7acbf()}<label class="n7x-owner-custom-role-field">Placement<select name="baseRole">${__a27fb158ddcbc635df4f915211d5c8e5d6a8c04827fe1281526c34bc41e8fb8b("\u006d\u0065\u006d\u0062\u0065\u0072")}</select></label>${__98e34204ec1ca6b1775902c926bc767b7ad3918ad6edaa9782e93aed4f2bfc13([])}<div class="n7x-owner-custom-role-editor-actions"><button class="n7x-owner-custom-role-save" type="submit">${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0073\u0061\u0076\u0065")}<span>Create role</span></button><button class="n7x-owner-custom-role-cancel" type="button" data-owner-custom-role-cancel>Cancel</button></div></form>`;
          __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.innerHTML = `<header class="n7x-owner-custom-role-header"><div><span>${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0075\u0073\u0065\u0072\u0073")}</span><div><h2>Custom roles</h2><p>Colors, hierarchy, permissions, and assignments.</p></div></div><button type="button" data-owner-drawer-close aria-label="Close custom roles">${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0063\u006c\u006f\u0073\u0065")}</button></header>\n        <div class="n7x-owner-drawer-scroll n7x-owner-custom-role-drawer">\n          <section class="n7x-owner-detail-section n7x-owner-custom-role-section"><div class="n7x-owner-custom-role-toolbar"><div><h3>Configured roles</h3><p class="n7x-owner-action-note">Placement controls hierarchy; selected permissions control access.</p></div><button type="button" data-owner-custom-role-new>${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0075\u0073\u0065\u0072\u0073")}New role</button></div>${"\u006e\u0065\u0077" === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 ? __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c : ""}${__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.customRoles.length ? `<div class="n7x-owner-custom-role-list">${__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.customRoles.map((__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c) => `<article class="n7x-owner-custom-role-item${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 === __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.id ? "\u0020\u0065\u0064\u0069\u0074\u0069\u006e\u0067" : ""}"><div class="n7x-owner-custom-role-row"><span class="n7x-owner-custom-role-dot" style="--owner-custom-role:${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.color)}"></span><span class="n7x-owner-custom-role-copy"><strong class="n7x-minecraft-text">${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.label)}</strong><small>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.id)}</small></span><span class="n7x-owner-custom-role-placement">${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.baseRole))}</span><span class="n7x-owner-custom-role-permission-count">${Number(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.permissions?.length || 0)} perms</span><button type="button" data-owner-custom-role-edit="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.id)}">Edit</button><button class="danger" type="button" data-owner-custom-role-delete="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.id)}" aria-label="Delete ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.label)}">${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0074\u0072\u0061\u0073\u0068")}</button></div>${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 === __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.id ? ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) => `<form class="n7x-owner-custom-role-editor" data-owner-custom-role-update="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.id)}"><label class="n7x-owner-custom-role-field">Name<input name="label" maxlength="64" minlength="2" required value="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.label)}"></label>${__ee07b2c1f5ae5a68cf1a38fc099e028ffbe3e7bdd9c0223fa1ec952465f7acbf(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.color)}<label class="n7x-owner-custom-role-field">Placement<select name="baseRole">${__a27fb158ddcbc635df4f915211d5c8e5d6a8c04827fe1281526c34bc41e8fb8b(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.baseRole)}</select></label>${__98e34204ec1ca6b1775902c926bc767b7ad3918ad6edaa9782e93aed4f2bfc13(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.permissions)}<div class="n7x-owner-custom-role-editor-actions"><button class="n7x-owner-custom-role-save" type="submit">${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0073\u0061\u0076\u0065")}<span>Save changes</span></button><button class="n7x-owner-custom-role-cancel" type="button" data-owner-custom-role-cancel>Cancel</button></div></form>`)(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c) : ""}</article>`).join("")}</div>` : "\u003c\u0070\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0061\u0063\u0074\u0069\u006f\u006e\u002d\u006e\u006f\u0074\u0065\u0022\u003e\u004e\u006f\u0020\u0063\u0075\u0073\u0074\u006f\u006d\u0020\u0072\u006f\u006c\u0065\u0073\u0020\u0068\u0061\u0076\u0065\u0020\u0062\u0065\u0065\u006e\u0020\u0063\u0072\u0065\u0061\u0074\u0065\u0064\u0020\u0079\u0065\u0074\u002e\u003c\u002f\u0070\u003e"}</section>\n        </div>`;
        }
        async function __a03f49e95f91224af5b136a0e23dcb87a6dadeb3f9d7f2a0a1bc0a0ffa3f7f6a(
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        ) {
          if (
            !__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 ||
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.guest
          )
            return;
          ((__0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.hidden = !1),
            __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.classList.remove(
              "\u0073\u0068\u006f\u0077",
            ),
            (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.selectedUser =
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5));
          const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
            __d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21(
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.photoUrl,
              "",
              (
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.displayName ||
                "\u003f"
              )
                .slice(0, 1)
                .toUpperCase(),
            );
          ((__0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.innerHTML = `<header><div class="n7x-owner-detail-avatar">${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c}<i class="${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.online ? "\u006f\u006e\u006c\u0069\u006e\u0065" : ""}"></i></div><div><span>${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0073\u0068\u0069\u0065\u006c\u0064")}Search review</span><h2>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.displayName)}</h2><p class="n7x-owner-drawer-identity">@${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.username)}</p></div><button type="button" data-owner-drawer-close aria-label="Close search history">${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0063\u006c\u006f\u0073\u0065")}</button></header>\n        <div class="n7x-owner-drawer-scroll"><section class="n7x-owner-detail-section n7x-owner-flagged-searches"><div class="n7x-owner-search-history-heading"><h3>Search history</h3><button type="button" data-owner-clear-search-history="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.uid)}" hidden>${__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0074\u0072\u0061\u0073\u0068")}Clear history</button></div><p class="n7x-owner-action-note">Searches made through N7X while this account is signed in are retained for 30 days. Policy-classified searches are highlighted, but a match is a moderation signal rather than proof.</p><div class="n7x-owner-flagged-search-list"><div class="n7x-owner-drawer-loading"><i></i><i></i><i></i></div></div></section></div>`),
            requestAnimationFrame(() =>
              __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.classList.add(
                "\u0073\u0068\u006f\u0077",
              ),
            ),
            __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c(
              __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87,
            ));
          const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
            __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.querySelector(
              "\u002e\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0066\u006c\u0061\u0067\u0067\u0065\u0064\u002d\u0073\u0065\u0061\u0072\u0063\u0068\u002d\u006c\u0069\u0073\u0074",
            );
          try {
            const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
              await __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6(
                `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/chat/moderation/search-history?uid=${encodeURIComponent(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.uid)}`,
              );
            if (
              !__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03?.isConnected ||
              __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.selectedUser
                ?.uid !== __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.uid
            )
              return;
            const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
                Array.isArray(
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.searches,
                )
                  ? __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.searches
                  : [],
              __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
                __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.querySelector(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u006c\u0065\u0061\u0072\u002d\u0073\u0065\u0061\u0072\u0063\u0068\u002d\u0068\u0069\u0073\u0074\u006f\u0072\u0079\u005d",
                );
            (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a &&
              (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.hidden = !(
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.canClear &&
                __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.length
              )),
              (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.innerHTML =
                __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.length
                  ? __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713
                      .map(
                        (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) =>
                          `<article class="${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.flagged ? "\u0070\u006f\u006c\u0069\u0063\u0079" : ""}"><header><strong>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.category || "\u0053\u0074\u0061\u006e\u0064\u0061\u0072\u0064\u0020\u0073\u0065\u0061\u0072\u0063\u0068")}</strong><time datetime="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.createdAt)}" title="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.createdAt))}">${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.createdAt))}</time></header><p>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.query)}</p></article>`,
                      )
                      .join("")
                  : "\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0065\u006d\u0070\u0074\u0079\u0020\u0063\u006f\u006d\u0070\u0061\u0063\u0074\u0022\u003e\u003c\u0073\u0074\u0072\u006f\u006e\u0067\u003e\u004e\u006f\u0020\u0072\u0065\u0074\u0061\u0069\u006e\u0065\u0064\u0020\u0073\u0065\u0061\u0072\u0063\u0068\u0065\u0073\u003c\u002f\u0073\u0074\u0072\u006f\u006e\u0067\u003e\u003c\u0073\u0070\u0061\u006e\u003e\u0054\u0068\u0069\u0073\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0068\u0061\u0073\u0020\u006e\u006f\u0020\u004e\u0037\u0058\u0020\u0073\u0065\u0061\u0072\u0063\u0068\u0065\u0073\u0020\u0066\u0072\u006f\u006d\u0020\u0074\u0068\u0065\u0020\u006c\u0061\u0073\u0074\u0020\u0033\u0030\u0020\u0064\u0061\u0079\u0073\u002e\u003c\u002f\u0073\u0070\u0061\u006e\u003e\u003c\u002f\u0064\u0069\u0076\u003e"));
          } catch (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713) {
            if (!__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03?.isConnected)
              return;
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.innerHTML = `<div class="n7x-owner-error"><strong>Search history could not load</strong><span>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.message)}</span></div>`;
          }
        }
        function __66e401afb5509cbf5c4bb5624e18bcf319933c46cb9b07bc6c7f86affaa05b78() {
          (__0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.classList.remove(
            "\u0073\u0068\u006f\u0077",
          ),
            setTimeout(() => {
              ((__0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.hidden = !0),
                (__0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.innerHTML =
                  ""));
            }, 180),
            (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.selectedUser =
              null),
            (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.selectedCapabilities =
              null));
        }
        function __3abefec312ee58c7fe62ed56861d8dd221822df7f4adf805e11d7b6e7cea0012({
          title: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
          message: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
          confirmLabel:
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = "\u0043\u006f\u006e\u0074\u0069\u006e\u0075\u0065",
          danger: __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = !1,
          requireText: __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a = "",
        }) {
          return new Promise(
            (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc) => {
              ((__c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c.hidden = !1),
                (__c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c.innerHTML = `<form><h2>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5)}</h2><p>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c)}</p>${__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a ? `<label>Type <strong>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a)}</strong> to confirm<input name="confirmation" autocomplete="off"></label>` : ""}<div><button type="button" data-owner-confirm-cancel>Cancel</button><button class="${__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 ? "\u0064\u0061\u006e\u0067\u0065\u0072" : ""}" type="submit" ${__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a ? "\u0064\u0069\u0073\u0061\u0062\u006c\u0065\u0064" : ""}>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03)}</button></div></form>`));
              const __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 =
                  __c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c.querySelector(
                    "\u0066\u006f\u0072\u006d",
                  ),
                __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 =
                  __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.elements
                    .confirmation,
                __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f =
                  __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.querySelector(
                    "\u005b\u0074\u0079\u0070\u0065\u003d\u0022\u0073\u0075\u0062\u006d\u0069\u0074\u0022\u005d",
                  ),
                __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 = (
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                ) => {
                  ((__c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c.hidden = !0),
                    (__c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c.innerHTML =
                      ""),
                    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc(
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                    ));
                };
              (__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238?.addEventListener(
                "\u0069\u006e\u0070\u0075\u0074",
                () => {
                  __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f.disabled =
                    __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.value.trim() !==
                    __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a;
                },
              ),
                __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.addEventListener(
                  "\u0073\u0075\u0062\u006d\u0069\u0074",
                  (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
                    (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.preventDefault(),
                      __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(!0));
                  },
                ),
                __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2
                  .querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u006f\u006e\u0066\u0069\u0072\u006d\u002d\u0063\u0061\u006e\u0063\u0065\u006c\u005d")
                  .addEventListener("\u0063\u006c\u0069\u0063\u006b", () =>
                    __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(!1),
                  ),
                setTimeout(
                  () =>
                    (
                      __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 ||
                      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.querySelector(
                        "\u0062\u0075\u0074\u0074\u006f\u006e",
                      )
                    )?.focus(),
                  0,
                ));
            },
          );
        }
        function __8e04d8c4780a41135c77f04bcb15f46b8963c2621ff8ab409d683183f5eef2d5({
          title: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
          message: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
          confirmLabel: __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
          requireText: __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = "",
        }) {
          return new Promise(
            (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a) => {
              ((__c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c.hidden = !1),
                (__c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c.innerHTML = `<form><h2>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5)}</h2><p>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c)}</p><label>Message shown to this member<textarea name="memberMessage" maxlength="500" rows="4" placeholder="Explain what happened and what they should do next." required></textarea><small>Required \xb7 500 characters maximum \xb7 do not include private staff notes</small></label>${__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 ? `<label>Type <strong>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713)}</strong> to confirm<input name="confirmation" autocomplete="off"></label>` : ""}<div><button type="button" data-owner-confirm-cancel>Cancel</button><button class="danger" type="submit" disabled>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03)}</button></div></form>`));
              const __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
                  __c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c.querySelector(
                    "\u0066\u006f\u0072\u006d",
                  ),
                __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 =
                  __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.elements
                    .memberMessage,
                __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 =
                  __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.elements
                    .confirmation,
                __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f =
                  __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.querySelector(
                    "\u005b\u0074\u0079\u0070\u0065\u003d\u0022\u0073\u0075\u0062\u006d\u0069\u0074\u0022\u005d",
                  ),
                __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 = () => {
                  __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f.disabled =
                    !__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.value.trim() ||
                    Boolean(
                      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 &&
                        __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238?.value.trim() !==
                          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
                    );
                },
                __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1 = (
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                ) => {
                  ((__c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c.hidden = !0),
                    (__c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c.innerHTML =
                      ""),
                    __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a(
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                    ));
                };
              (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.addEventListener(
                "\u0069\u006e\u0070\u0075\u0074",
                __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239,
              ),
                __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238?.addEventListener(
                  "\u0069\u006e\u0070\u0075\u0074",
                  __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239,
                ),
                __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.addEventListener(
                  "\u0073\u0075\u0062\u006d\u0069\u0074",
                  (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.preventDefault();
                    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.value.trim();
                    !__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 ||
                      (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 &&
                        __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238?.value.trim() !==
                          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713) ||
                      __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1(
                        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                      );
                  },
                ),
                __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc
                  .querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u006f\u006e\u0066\u0069\u0072\u006d\u002d\u0063\u0061\u006e\u0063\u0065\u006c\u005d")
                  .addEventListener("\u0063\u006c\u0069\u0063\u006b", () =>
                    __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1(null),
                  ),
                setTimeout(
                  () => __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.focus(),
                  0,
                ));
            },
          );
        }
        async function __386438b87474d2f2a7f9bcafb4095c3f466d499afdc8b7dc19046a9c96d5b10e(
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = {},
        ) {
          const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
            __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.selectedUser;
          if (!__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03) return;
          const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = {
            enable: [
              "\u0052\u0065\u002d\u0065\u006e\u0061\u0062\u006c\u0065\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u003f",
              `${__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.email || __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.displayName} will be able to sign in again.`,
              "\u0052\u0065\u002d\u0065\u006e\u0061\u0062\u006c\u0065",
              !1,
            ],
            verify_email: [
              "\u0056\u0065\u0072\u0069\u0066\u0079\u0020\u0074\u0068\u0069\u0073\u0020\u0065\u006d\u0061\u0069\u006c\u003f",
              `Mark ${__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.email} as verified in Firebase Authentication.`,
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
              `Firebase will email a password-reset link to ${__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.email}.`,
              "\u0053\u0065\u006e\u0064\u0020\u0065\u006d\u0061\u0069\u006c",
              !1,
            ],
          };
          if (
            "\u0073\u0065\u0074\u005f\u0070\u0061\u0073\u0073\u0077\u006f\u0072\u0064" === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
          ) {
            const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
              await (function (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) {
                return new Promise(
                  (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c) => {
                    ((__c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c.hidden =
                      !1),
                      (__c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c.innerHTML = `<form><h2>Set custom password</h2><p>Set a new password for ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.displayName || __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.handle || __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.uid)}. Their old password will stop working. Give the new password to them privately; no email is required.</p><label>New password<input name="newPassword" type="password" autocomplete="new-password" minlength="8" maxlength="256" required></label><label>Confirm password<input name="confirmPassword" type="password" autocomplete="new-password" minlength="8" maxlength="256" required></label><small data-password-error role="alert"></small><div><button type="button" data-owner-confirm-cancel>Cancel</button><button type="submit">Set password</button></div></form>`));
                    const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                        __c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c.querySelector(
                          "\u0066\u006f\u0072\u006d",
                        ),
                      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
                        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.elements
                          .newPassword,
                      __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
                        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.elements
                          .confirmPassword,
                      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc = (
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                      ) => {
                        ((__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.value =
                          ""),
                          (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.value =
                            ""),
                          (__c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c.hidden =
                            !0),
                          (__c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c.innerHTML =
                            ""),
                          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c(
                            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                          ));
                      };
                    (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.addEventListener(
                      "\u0073\u0075\u0062\u006d\u0069\u0074",
                      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
                        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.preventDefault(),
                          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.reportValidity() &&
                            (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.value ===
                            __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.value
                              ? __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc(
                                  __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.value,
                                )
                              : (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.querySelector(
                                  "\u005b\u0064\u0061\u0074\u0061\u002d\u0070\u0061\u0073\u0073\u0077\u006f\u0072\u0064\u002d\u0065\u0072\u0072\u006f\u0072\u005d",
                                ).textContent = "\u0050\u0061\u0073\u0073\u0077\u006f\u0072\u0064\u0073\u0020\u006d\u0075\u0073\u0074\u0020\u006d\u0061\u0074\u0063\u0068\u002e")));
                      },
                    ),
                      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03
                        .querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u006f\u006e\u0066\u0069\u0072\u006d\u002d\u0063\u0061\u006e\u0063\u0065\u006c\u005d")
                        .addEventListener("\u0063\u006c\u0069\u0063\u006b", () =>
                          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc(null),
                        ),
                      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.focus());
                  },
                );
              })(__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03);
            if (null === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) return;
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = {
              password: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
            };
          } else if (
            "\u0064\u0065\u006c\u0065\u0074\u0065" === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
          ) {
            const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
                __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.email ||
                __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.uid,
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                await __8e04d8c4780a41135c77f04bcb15f46b8963c2621ff8ab409d683183f5eef2d5({
                  title: "\u0050\u0065\u0072\u006d\u0061\u006e\u0065\u006e\u0074\u006c\u0079\u0020\u0064\u0065\u006c\u0065\u0074\u0065\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u003f",
                  message:
                    "\u0054\u0068\u0069\u0073\u0020\u0072\u0065\u006d\u006f\u0076\u0065\u0073\u0020\u0074\u0068\u0065\u0020\u0046\u0069\u0072\u0065\u0062\u0061\u0073\u0065\u0020\u0041\u0075\u0074\u0068\u0065\u006e\u0074\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0061\u006e\u0064\u0020\u0069\u0074\u0073\u0020\u004e\u0037\u0058\u0020\u0070\u0072\u006f\u0066\u0069\u006c\u0065\u0020\u0064\u0061\u0074\u0061\u002e\u0020\u0041\u0075\u0064\u0069\u0074\u0020\u0068\u0069\u0073\u0074\u006f\u0072\u0079\u0020\u0069\u0073\u0020\u0072\u0065\u0074\u0061\u0069\u006e\u0065\u0064\u002c\u0020\u0061\u006e\u0064\u0020\u0074\u0068\u0065\u0020\u006d\u0065\u006d\u0062\u0065\u0072\u0020\u0077\u0069\u006c\u006c\u0020\u0073\u0065\u0065\u0020\u0079\u006f\u0075\u0072\u0020\u006d\u0065\u0073\u0073\u0061\u0067\u0065\u0020\u0069\u0066\u0020\u0074\u0068\u0065\u0079\u0020\u0074\u0072\u0079\u0020\u0074\u006f\u0020\u0075\u0073\u0065\u0020\u0074\u0068\u0069\u0073\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0061\u0067\u0061\u0069\u006e\u002e",
                  confirmLabel: "\u0044\u0065\u006c\u0065\u0074\u0065\u0020\u0070\u0065\u0072\u006d\u0061\u006e\u0065\u006e\u0074\u006c\u0079",
                  requireText: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                });
            if (null === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) return;
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = {
              ...__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
              reason: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
            };
          } else if (
            "\u0064\u0069\u0073\u0061\u0062\u006c\u0065" === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 ||
            "\u0062\u0061\u006e" === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 ||
            "\u0064\u0069\u0073\u0061\u0062\u006c\u0065\u005f\u0077\u0069\u0074\u0068\u005f\u0069\u0070\u005f\u0062\u0061\u006e" ===
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
          ) {
            const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
              await __8e04d8c4780a41135c77f04bcb15f46b8963c2621ff8ab409d683183f5eef2d5({
                title:
                  "\u0064\u0069\u0073\u0061\u0062\u006c\u0065" === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
                    ? "\u0044\u0069\u0073\u0061\u0062\u006c\u0065\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u003f"
                    : "\u0062\u0061\u006e" === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
                      ? "\u0042\u0061\u006e\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u003f"
                      : "\u0044\u0069\u0073\u0061\u0062\u006c\u0065\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0061\u006e\u0064\u0020\u0062\u006c\u006f\u0063\u006b\u0020\u0069\u0074\u0073\u0020\u0049\u0050\u003f",
                message:
                  "\u0064\u0069\u0073\u0061\u0062\u006c\u0065" === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
                    ? `${__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.email || __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.displayName} will immediately lose access until re-enabled.`
                    : "\u0062\u0061\u006e" === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
                      ? `${__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.email || __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.displayName} will immediately lose access and see this as an account ban until re-enabled.`
                      : `${__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.email || __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.displayName} will lose access, and ${__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.lastSeenIp} will be blocked from N7X server requests. Shared or changing IPs can affect other people.`,
                confirmLabel:
                  "\u0064\u0069\u0073\u0061\u0062\u006c\u0065" === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
                    ? "\u0044\u0069\u0073\u0061\u0062\u006c\u0065"
                    : "\u0062\u0061\u006e" === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
                      ? "\u0042\u0061\u006e\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074"
                      : "\u0044\u0069\u0073\u0061\u0062\u006c\u0065\u0020\u0061\u006e\u0064\u0020\u0062\u006c\u006f\u0063\u006b",
              });
            if (null === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) return;
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = {
              ...__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
              reason: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
            };
          } else if (
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713[
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
            ]
          ) {
            const [
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
              __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
            ] =
              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713[
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
              ];
            if (
              !(await __3abefec312ee58c7fe62ed56861d8dd221822df7f4adf805e11d7b6e7cea0012({
                title: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                message: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                confirmLabel: __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                danger: __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
              }))
            )
              return;
          }
          try {
            const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
              await __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6(
                `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/users/${encodeURIComponent(__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.uid)}`,
                {
                  method: "\u0050\u0041\u0054\u0043\u0048",
                  body: JSON.stringify({
                    action: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                    ...__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                  }),
                },
              );
            (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.deleted
              ? (__f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b(
                  "\u0041\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0064\u0065\u006c\u0065\u0074\u0065\u0064\u002e",
                ),
                __66e401afb5509cbf5c4bb5624e18bcf319933c46cb9b07bc6c7f86affaa05b78())
              : __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.resetLink
                ? ((function (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) {
                    ((__c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c.hidden =
                      !1),
                      (__c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c.innerHTML = `<form><h2>Password reset link</h2><p>Give this one-time Firebase link directly to the account owner. N7X never reveals or stores their password.</p><label>Reset link<input name="resetLink" value="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5)}" readonly></label><div><button type="button" data-owner-reset-close>Close</button><button type="button" data-owner-reset-copy>Copy link</button></div></form>`));
                    const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                      __c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c.querySelector(
                        "\u005b\u006e\u0061\u006d\u0065\u003d\u0022\u0072\u0065\u0073\u0065\u0074\u004c\u0069\u006e\u006b\u0022\u005d",
                      );
                    (__c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c
                      .querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0072\u0065\u0073\u0065\u0074\u002d\u0063\u006c\u006f\u0073\u0065\u005d")
                      .addEventListener("\u0063\u006c\u0069\u0063\u006b", () => {
                        ((__c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c.hidden =
                          !0),
                          (__c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c.innerHTML =
                            ""));
                      }),
                      __c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c
                        .querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0072\u0065\u0073\u0065\u0074\u002d\u0063\u006f\u0070\u0079\u005d")
                        .addEventListener("\u0063\u006c\u0069\u0063\u006b", async () => {
                          try {
                            (await navigator.clipboard.writeText(
                              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                            ),
                              __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b(
                                "\u0050\u0061\u0073\u0073\u0077\u006f\u0072\u0064\u0020\u0072\u0065\u0073\u0065\u0074\u0020\u006c\u0069\u006e\u006b\u0020\u0063\u006f\u0070\u0069\u0065\u0064\u002e",
                              ));
                          } catch {
                            (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.focus(),
                              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.select(),
                              __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b(
                                "\u0053\u0065\u006c\u0065\u0063\u0074\u0020\u0061\u006e\u0064\u0020\u0063\u006f\u0070\u0079\u0020\u0074\u0068\u0065\u0020\u0072\u0065\u0073\u0065\u0074\u0020\u006c\u0069\u006e\u006b\u002e",
                                "\u0065\u0072\u0072\u006f\u0072",
                              ));
                          }
                        }),
                      setTimeout(() => {
                        (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.focus(),
                          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.select());
                      }, 0));
                  })(__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.resetLink),
                  __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b(
                    "\u0053\u0065\u0063\u0075\u0072\u0065\u0020\u0070\u0061\u0073\u0073\u0077\u006f\u0072\u0064\u0020\u0072\u0065\u0073\u0065\u0074\u0020\u006c\u0069\u006e\u006b\u0020\u0063\u0072\u0065\u0061\u0074\u0065\u0064\u002e",
                  ))
                : ((__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.selectedUser =
                    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.user),
                  (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.selectedCapabilities =
                    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.capabilities ||
                    __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.selectedCapabilities),
                  (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.access =
                    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.access ||
                    __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.access),
                  __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b(
                    "\u0073\u0065\u0074\u005f\u0070\u0061\u0073\u0073\u0077\u006f\u0072\u0064" ===
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
                      ? "\u0050\u0061\u0073\u0073\u0077\u006f\u0072\u0064\u0020\u0075\u0070\u0064\u0061\u0074\u0065\u0064\u002e\u0020\u0053\u0068\u0061\u0072\u0065\u0020\u0069\u0074\u0020\u0070\u0072\u0069\u0076\u0061\u0074\u0065\u006c\u0079\u0020\u0077\u0069\u0074\u0068\u0020\u0074\u0068\u0065\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u006f\u0077\u006e\u0065\u0072\u002e"
                      : "\u0073\u0065\u006e\u0064\u005f\u0070\u0061\u0073\u0073\u0077\u006f\u0072\u0064\u005f\u0072\u0065\u0073\u0065\u0074" ===
                          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
                        ? "\u0050\u0061\u0073\u0073\u0077\u006f\u0072\u0064\u0020\u0072\u0065\u0073\u0065\u0074\u0020\u0065\u006d\u0061\u0069\u006c\u0020\u0073\u0065\u006e\u0074\u002e"
                        : "\u0041\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0075\u0070\u0064\u0061\u0074\u0065\u0064\u002e",
                  ),
                  await __75b9960186525ac5ab965efcdf7d072a44d9c0e2ac9c36c91c0dfeac448fa6e5(
                    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.uid,
                  )),
              await __a1966e2585746c7ebc63b861729ff89ab0d7f7629da72c73cf99b96ee03569f3({
                preserveLoading: !0,
              }));
          } catch (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a) {
            __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b(
              __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.message ||
                "\u0054\u0068\u0065\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0061\u0063\u0074\u0069\u006f\u006e\u0020\u0066\u0061\u0069\u006c\u0065\u0064\u002e",
              "\u0065\u0072\u0072\u006f\u0072",
            );
          } finally {
            delete __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.password;
          }
        }
        function __3c2959d287db485aed16e708f7fdaff1019aeded6f9f9b016e6d19d5627c9211(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        ) {
          "\u0045\u0073\u0063\u0061\u0070\u0065" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.key &&
            (__c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c.hidden
              ? __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.hidden
                ? __8a634624ecf034ed097cd5e7c1a9e014c7efed1bf92024f2b4af50aa6eb48c94()
                : __66e401afb5509cbf5c4bb5624e18bcf319933c46cb9b07bc6c7f86affaa05b78()
              : (
                  __c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c.querySelector(
                    "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u006f\u006e\u0066\u0069\u0072\u006d\u002d\u0063\u0061\u006e\u0063\u0065\u006c\u005d",
                  ) ||
                  __c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c.querySelector(
                    "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0072\u0065\u0073\u0065\u0074\u002d\u0063\u006c\u006f\u0073\u0065\u005d",
                  )
                )?.click());
        }
        function __8a634624ecf034ed097cd5e7c1a9e014c7efed1bf92024f2b4af50aa6eb48c94() {
          (__26b5b17a3f16601a1a0082d03dcd66a84af474199e7739e8e1653580cef84d82.destroy(),
            clearInterval(__99a0af1660cfe58affc3ff899430bd5f7454d63db4b4a7a04e0a92268413e998),
            clearInterval(__3024b81c189fd2c8b2a9d40c5083c0a67b5bc98a00d6e0dc336123d41b1a0c7f),
            __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.controller?.abort(),
            clearTimeout(
              __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.searchTimer,
            ),
            __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.classList.remove(
              "\u0073\u0068\u006f\u0077",
            ),
            document.removeEventListener(
              "\u006b\u0065\u0079\u0064\u006f\u0077\u006e",
              __3c2959d287db485aed16e708f7fdaff1019aeded6f9f9b016e6d19d5627c9211,
            ),
            window.removeEventListener(
              "\u006e\u0079\u0078\u003a\u0070\u0072\u0065\u0073\u0065\u006e\u0063\u0065",
              __8846e27b07ac021b6c32fc8bdc0c411f01ff3e6d19c3048355784ff30aa3c433,
            ),
            setTimeout(
              () => __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.remove(),
              180,
            ),
            __fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797?.overlay ===
              __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34 &&
              (__fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797 = null));
        }
        function __8846e27b07ac021b6c32fc8bdc0c411f01ff3e6d19c3048355784ff30aa3c433(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        ) {
          const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.detail?.online;
          if (
            !Number.isSafeInteger(
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
            ) ||
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 < 0 ||
            !__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.data?.metrics
          )
            return;
          __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.data.metrics.onlineUsers =
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5;
          const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
            __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.querySelector(
              "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0073\u0065\u0067\u006d\u0065\u006e\u0074\u003d\u0022\u006f\u006e\u006c\u0069\u006e\u0065\u0022\u005d\u0020\u0073\u0074\u0072\u006f\u006e\u0067",
            );
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c &&
            (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.textContent =
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.toLocaleString());
        }
        return (
          __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.addEventListener(
            "\u0063\u006c\u0069\u0063\u006b",
            function (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) {
              const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0073\u0065\u0063\u0074\u0069\u006f\u006e\u005d",
                );
              if (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c)
                return __eee561f91b58ee873b5a76df4fe070031bb64d02e0803f54276f6fdbb14b2b43(
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.dataset
                    .ownerSection,
                );
              if (
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0073\u0074\u0075\u0064\u0079\u0072\u0065\u0061\u0064\u0079\u005d",
                )
              )
                return void (async function () {
                  ((__0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.hidden = !1),
                    __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.classList.add(
                      "\u0073\u0068\u006f\u0077",
                    ),
                    (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.selectedUser =
                      null),
                    (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.selectedCapabilities =
                      null),
                    (__0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.innerHTML =
                      "\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0072\u0061\u0077\u0065\u0072\u002d\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u0022\u003e\u004c\u006f\u0061\u0064\u0069\u006e\u0067\u0020\u0053\u0074\u0075\u0064\u0079\u0052\u0065\u0061\u0064\u0079\u002e\u002e\u002e\u003c\u002f\u0064\u0069\u0076\u003e"));
                  try {
                    ((__037421764e2f5e073ebcd4a8e7220f715740a5cbe2e9ed2d93431a54ae8de6ec =
                      await __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6(
                        "\u002f\u0061\u0070\u0069\u002f\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0061\u0073\u0068\u0062\u006f\u0061\u0072\u0064\u002f\u0073\u0074\u0075\u0064\u0079\u0072\u0065\u0061\u0064\u0079",
                      )),
                      __5285a5bbd045fe6fc6ebb94cc24c149a1dcccd7cfeb2f5de9c7a211dad268afa());
                  } catch (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) {
                    __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.innerHTML = `<div class="n7x-owner-error"><strong>StudyReady could not load</strong><span>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.message)}</span><button type="button" data-owner-drawer-close>Close</button></div>`;
                  }
                })();
              const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u0073\u0074\u0075\u0064\u0079\u0072\u0065\u0061\u0064\u0079\u002d\u0065\u0064\u0069\u0074\u005d",
                );
              if (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03) {
                const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
                    __037421764e2f5e073ebcd4a8e7220f715740a5cbe2e9ed2d93431a54ae8de6ec.domains.find(
                      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.hostname ===
                        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.dataset
                          .studyreadyEdit,
                    ),
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                    __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.querySelector(
                      "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0073\u0074\u0075\u0064\u0079\u0072\u0065\u0061\u0064\u0079\u002d\u0066\u006f\u0072\u006d\u005d",
                    );
                return (
                  (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.elements.hostname.value =
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.hostname),
                  (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.elements.title.value =
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.title),
                  void __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.elements.title.focus()
                );
              }
              const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u0073\u0074\u0075\u0064\u0079\u0072\u0065\u0061\u0064\u0079\u002d\u0063\u0068\u0065\u0063\u006b\u005d",
                );
              if (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a)
                return void __7db994cf70023f7fa1ee37d64774e922da1a209d4cfac7b44a0d185f968b0a3b(
                  __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
                  "\u0063\u0068\u0065\u0063\u006b",
                  __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.dataset
                    .studyreadyCheck,
                );
              const __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u0073\u0074\u0075\u0064\u0079\u0072\u0065\u0061\u0064\u0079\u002d\u0072\u0065\u006d\u006f\u0076\u0065\u005d",
                );
              if (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc)
                return void __7db994cf70023f7fa1ee37d64774e922da1a209d4cfac7b44a0d185f968b0a3b(
                  __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
                  "\u0072\u0065\u006d\u006f\u0076\u0065",
                  __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.dataset
                    .studyreadyRemove,
                );
              if (
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0074\u0075\u0062\u0065\u002d\u0063\u0068\u0065\u0063\u006b\u005d",
                )
              )
                return void __18ea2355b700bc3da376566033246086363e448236dec54f8a83a790ea161960(!0);
              if (
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target ===
                  __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34 ||
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u006c\u006f\u0073\u0065\u005d",
                )
              )
                return __8a634624ecf034ed097cd5e7c1a9e014c7efed1bf92024f2b4af50aa6eb48c94();
              if (
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0072\u0065\u0066\u0072\u0065\u0073\u0068\u005d",
                )
              )
                return void __a1966e2585746c7ebc63b861729ff89ab0d7f7629da72c73cf99b96ee03569f3();
              if (
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0065\u0078\u0070\u006f\u0072\u0074\u005d",
                )
              )
                return (function () {
                  const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
                    __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.data
                      ?.users || [];
                  if (!__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.length)
                    return __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b(
                      "\u0054\u0068\u0065\u0072\u0065\u0020\u0061\u0072\u0065\u0020\u006e\u006f\u0020\u0075\u0073\u0065\u0072\u0073\u0020\u006f\u006e\u0020\u0074\u0068\u0069\u0073\u0020\u0070\u0061\u0067\u0065\u0020\u0074\u006f\u0020\u0065\u0078\u0070\u006f\u0072\u0074\u002e",
                      "\u0065\u0072\u0072\u006f\u0072",
                    );
                  const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = [
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
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = [
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.join("\u002c"),
                      ...__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.map(
                        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
                            .map(
                              (
                                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                              ) => {
                                return (
                                  (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96[
                                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
                                    ]),
                                  `"${String(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c ?? "").replaceAll("\u0022", "\u0022\u0022")}"`
                                );
                                var __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c;
                              },
                            )
                            .join("\u002c"),
                      ),
                    ].join("\u000d\u000a"),
                    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                      URL.createObjectURL(
                        new Blob(
                          [__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c],
                          {
                            type: "\u0074\u0065\u0078\u0074\u002f\u0063\u0073\u0076\u003b\u0063\u0068\u0061\u0072\u0073\u0065\u0074\u003d\u0075\u0074\u0066\u002d\u0038",
                          },
                        ),
                      ),
                    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
                      document.createElement("\u0061");
                  ((__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.href =
                    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03),
                    (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.download = `n7x-users-page-${__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.page}.csv`),
                    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.click(),
                    setTimeout(
                      () =>
                        URL.revokeObjectURL(
                          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                        ),
                      1e3,
                    ),
                    __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b(
                      "\u0055\u0073\u0065\u0072\u0020\u0070\u0061\u0067\u0065\u0020\u0065\u0078\u0070\u006f\u0072\u0074\u0065\u0064\u002e",
                    ));
                })();
              if (
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0067\u006c\u006f\u0062\u0061\u006c\u002d\u0061\u0070\u0070\u0073\u005d",
                )
              )
                return void (async function () {
                  ((__0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.hidden = !1),
                    __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.classList.remove(
                      "\u0073\u0068\u006f\u0077",
                    ),
                    (__0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.innerHTML =
                      "\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0072\u0061\u0077\u0065\u0072\u002d\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u0022\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u002f\u0064\u0069\u0076\u003e"),
                    requestAnimationFrame(() =>
                      __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.classList.add(
                        "\u0073\u0068\u006f\u0077",
                      ),
                    ),
                    (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.selectedUser =
                      null),
                    (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.selectedCapabilities =
                      null));
                  try {
                    const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
                      await __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6(
                        "\u002f\u0061\u0070\u0069\u002f\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0061\u0073\u0068\u0062\u006f\u0061\u0072\u0064\u002f\u0061\u0070\u0070\u0073",
                      );
                    ((__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.globalApps =
                      Array.isArray(
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.apps,
                      )
                        ? __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.apps
                        : []),
                      (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.access =
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.access ||
                        __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.access),
                      __96269fbafcaf1e59a066bbe22f9ec441fbf0ff3e38084b904ada564b445561a8());
                  } catch (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) {
                    __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.innerHTML = `<div class="n7x-owner-error"><strong>Apps could not load</strong><span>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.message)}</span><button type="button" data-owner-drawer-close>Close</button></div>`;
                  }
                })();
              if (
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0072\u006f\u006c\u0065\u0073\u005d",
                )
              )
                return void (async function () {
                  ((__0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.hidden = !1),
                    __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.classList.remove(
                      "\u0073\u0068\u006f\u0077",
                    ),
                    (__0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.innerHTML =
                      "\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0072\u0061\u0077\u0065\u0072\u002d\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u0022\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u002f\u0064\u0069\u0076\u003e"),
                    requestAnimationFrame(() =>
                      __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.classList.add(
                        "\u0073\u0068\u006f\u0077",
                      ),
                    ),
                    (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.selectedUser =
                      null),
                    (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.selectedCapabilities =
                      null));
                  try {
                    const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
                      await __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6(
                        "\u002f\u0061\u0070\u0069\u002f\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0061\u0073\u0068\u0062\u006f\u0061\u0072\u0064\u002f\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0072\u006f\u006c\u0065\u0073",
                      );
                    ((__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.customRoles =
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.roles ||
                      []),
                      (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.customRolePlacements =
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.placements ||
                        []),
                      (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.customRolePermissions =
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.permissions ||
                        []),
                      (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.access =
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.access ||
                        __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.access),
                      __34e3a593d4cfcfa83223ee3c74b7c8a0109cc4a95b5017b64b39376d978be837());
                  } catch (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) {
                    __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.innerHTML = `<div class="n7x-owner-error"><strong>Custom roles could not load</strong><span>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.message)}</span><button type="button" data-owner-drawer-close>Close</button></div>`;
                  }
                })();
              if (
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0069\u0070\u002d\u0062\u0061\u006e\u0073\u005d",
                )
              )
                return void (async function () {
                  ((__0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.hidden = !1),
                    __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.classList.remove(
                      "\u0073\u0068\u006f\u0077",
                    ),
                    (__0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.innerHTML =
                      "\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0072\u0061\u0077\u0065\u0072\u002d\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u0022\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e\u003c\u002f\u0064\u0069\u0076\u003e"),
                    requestAnimationFrame(() =>
                      __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.classList.add(
                        "\u0073\u0068\u006f\u0077",
                      ),
                    ),
                    (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.selectedUser =
                      null),
                    (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.selectedCapabilities =
                      null));
                  try {
                    const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
                      await __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6(
                        "\u002f\u0061\u0070\u0069\u002f\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0061\u0073\u0068\u0062\u006f\u0061\u0072\u0064\u002f\u0069\u0070\u002d\u0062\u0061\u006e\u0073",
                      );
                    ((__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.ipBans =
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.bans ||
                      []),
                      (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.ipBanClientIp =
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.clientIp ||
                        ""),
                      (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.access =
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.access ||
                        __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.access),
                      __cbe3e169b82a066efb87cecf43ee78a46c91fe23c1c18420de9d26beb1a60ea4());
                  } catch (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) {
                    __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.innerHTML = `<div class="n7x-owner-error"><strong>IP bans could not load</strong><span>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.message)}</span><button type="button" data-owner-drawer-close>Close</button></div>`;
                  }
                })();
              if (
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0072\u006f\u006c\u0065\u002d\u006e\u0065\u0077\u005d",
                )
              )
                return (
                  (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.customRoleEditorId =
                    "\u006e\u0065\u0077"),
                  __34e3a593d4cfcfa83223ee3c74b7c8a0109cc4a95b5017b64b39376d978be837(),
                  void __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87
                    .querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0072\u006f\u006c\u0065\u002d\u0063\u0072\u0065\u0061\u0074\u0065\u005d\u0020\u0069\u006e\u0070\u0075\u0074\u005b\u006e\u0061\u006d\u0065\u003d\u0022\u006c\u0061\u0062\u0065\u006c\u0022\u005d")
                    ?.focus()
                );
              const __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 =
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0072\u006f\u006c\u0065\u002d\u0065\u0064\u0069\u0074\u005d",
                )?.dataset.ownerCustomRoleEdit;
              if (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2)
                return (
                  (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.customRoleEditorId =
                    __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2),
                  __34e3a593d4cfcfa83223ee3c74b7c8a0109cc4a95b5017b64b39376d978be837(),
                  void __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87
                    .querySelector(
                      `[data-owner-custom-role-update="${CSS.escape(__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2)}"] input[name="label"]`,
                    )
                    ?.focus()
                );
              if (
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0072\u006f\u006c\u0065\u002d\u0063\u0061\u006e\u0063\u0065\u006c\u005d",
                )
              )
                return (
                  (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.customRoleEditorId =
                    ""),
                  void __34e3a593d4cfcfa83223ee3c74b7c8a0109cc4a95b5017b64b39376d978be837()
                );
              const __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f =
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0072\u006f\u006c\u0065\u002d\u0064\u0065\u006c\u0065\u0074\u0065\u005d",
                )?.dataset.ownerCustomRoleDelete;
              if (__16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f)
                return void (async function (
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                ) {
                  const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                    __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.customRoles.find(
                      (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) =>
                        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.id ===
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                    );
                  if (
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
                    (await __3abefec312ee58c7fe62ed56861d8dd221822df7f4adf805e11d7b6e7cea0012({
                      title: "\u0044\u0065\u006c\u0065\u0074\u0065\u0020\u0074\u0068\u0069\u0073\u0020\u0063\u0075\u0073\u0074\u006f\u006d\u0020\u0072\u006f\u006c\u0065\u003f",
                      message: `${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.label} will be removed from every assigned account. Those accounts will return to their previous built-in role.`,
                      confirmLabel: "\u0044\u0065\u006c\u0065\u0074\u0065\u0020\u0072\u006f\u006c\u0065",
                      requireText:
                        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.label,
                      danger: !0,
                    }))
                  )
                    try {
                      (await __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6(
                        `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/custom-roles/${encodeURIComponent(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96)}`,
                        {
                          method: "\u0044\u0045\u004c\u0045\u0054\u0045",
                        },
                      ),
                        (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.customRoles =
                          __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.customRoles.filter(
                            (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) =>
                              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.id !==
                              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                          )),
                        __34e3a593d4cfcfa83223ee3c74b7c8a0109cc4a95b5017b64b39376d978be837(),
                        __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b(
                          "\u0043\u0075\u0073\u0074\u006f\u006d\u0020\u0072\u006f\u006c\u0065\u0020\u0064\u0065\u006c\u0065\u0074\u0065\u0064\u002e",
                        ),
                        await __a1966e2585746c7ebc63b861729ff89ab0d7f7629da72c73cf99b96ee03569f3({
                          preserveLoading: !0,
                        }));
                    } catch (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c) {
                      __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b(
                        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.message ||
                          "\u0054\u0068\u0065\u0020\u0063\u0075\u0073\u0074\u006f\u006d\u0020\u0072\u006f\u006c\u0065\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0064\u0065\u006c\u0065\u0074\u0065\u0064\u002e",
                        "\u0065\u0072\u0072\u006f\u0072",
                      );
                    }
                })(__16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f);
              const __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 =
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0067\u006c\u006f\u0062\u0061\u006c\u002d\u0061\u0070\u0070\u002d\u0064\u0065\u006c\u0065\u0074\u0065\u005d",
                )?.dataset.ownerGlobalAppDelete;
              if (__467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239)
                return void (async function (
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                ) {
                  const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                    __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.globalApps.find(
                      (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) =>
                        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.id ===
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                    );
                  if (
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
                    (await __3abefec312ee58c7fe62ed56861d8dd221822df7f4adf805e11d7b6e7cea0012({
                      title: "\u0052\u0065\u006d\u006f\u0076\u0065\u0020\u0074\u0068\u0069\u0073\u0020\u0061\u0070\u0070\u0020\u0066\u006f\u0072\u0020\u0065\u0076\u0065\u0072\u0079\u006f\u006e\u0065\u003f",
                      message: `${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.name} will disappear from the N7X app catalog for every user.`,
                      confirmLabel: "\u0052\u0065\u006d\u006f\u0076\u0065\u0020\u0061\u0070\u0070",
                      danger: !0,
                    }))
                  )
                    try {
                      const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                        await __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6(
                          `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/apps/${encodeURIComponent(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96)}`,
                          {
                            method: "\u0044\u0045\u004c\u0045\u0054\u0045",
                          },
                        );
                      ((__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.globalApps =
                        Array.isArray(
                          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.apps,
                        )
                          ? __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.apps
                          : __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.globalApps.filter(
                              (
                                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                              ) =>
                                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.id !==
                                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                            )),
                        __96269fbafcaf1e59a066bbe22f9ec441fbf0ff3e38084b904ada564b445561a8(),
                        __d6e8ffff761bb3491b619880e5d917d6df582d5c67b95c1869c0a525aa0a908c(),
                        __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b(
                          "\u0041\u0070\u0070\u0020\u0072\u0065\u006d\u006f\u0076\u0065\u0064\u0020\u0066\u006f\u0072\u0020\u0065\u0076\u0065\u0072\u0079\u006f\u006e\u0065\u002e",
                        ));
                    } catch (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c) {
                      __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b(
                        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.message ||
                          "\u0054\u0068\u0065\u0020\u0061\u0070\u0070\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0072\u0065\u006d\u006f\u0076\u0065\u0064\u002e",
                        "\u0065\u0072\u0072\u006f\u0072",
                      );
                    }
                })(__467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239);
              const __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 =
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0075\u006e\u0062\u0061\u006e\u005d",
                )?.dataset.ownerUnban;
              if (__32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6)
                return void (async function (
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                ) {
                  const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                    __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.ipBans.find(
                      (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) =>
                        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.id ===
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                    );
                  if (
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
                    (await __3abefec312ee58c7fe62ed56861d8dd221822df7f4adf805e11d7b6e7cea0012({
                      title: "\u0055\u006e\u0062\u006c\u006f\u0063\u006b\u0020\u0074\u0068\u0069\u0073\u0020\u0049\u0050\u0020\u0061\u0064\u0064\u0072\u0065\u0073\u0073\u003f",
                      message: `${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.ip} will regain access to N7X server requests.`,
                      confirmLabel: "\u0055\u006e\u0062\u006c\u006f\u0063\u006b",
                      requireText:
                        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.ip,
                    }))
                  )
                    try {
                      (await __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6(
                        `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/ip-bans/${encodeURIComponent(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96)}`,
                        {
                          method: "\u0044\u0045\u004c\u0045\u0054\u0045",
                        },
                      ),
                        (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.ipBans =
                          __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.ipBans.filter(
                            (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) =>
                              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.id !==
                              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                          )),
                        __cbe3e169b82a066efb87cecf43ee78a46c91fe23c1c18420de9d26beb1a60ea4(),
                        __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b(
                          "\u0049\u0050\u0020\u0061\u0064\u0064\u0072\u0065\u0073\u0073\u0020\u0075\u006e\u0062\u006c\u006f\u0063\u006b\u0065\u0064\u002e",
                        ),
                        await __a1966e2585746c7ebc63b861729ff89ab0d7f7629da72c73cf99b96ee03569f3({
                          preserveLoading: !0,
                        }));
                    } catch (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c) {
                      __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b(
                        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.message ||
                          "\u0054\u0068\u0065\u0020\u0049\u0050\u0020\u0061\u0064\u0064\u0072\u0065\u0073\u0073\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0075\u006e\u0062\u006c\u006f\u0063\u006b\u0065\u0064\u002e",
                        "\u0065\u0072\u0072\u006f\u0072",
                      );
                    }
                })(__32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6);
              const __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe =
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0073\u0065\u0067\u006d\u0065\u006e\u0074\u005d",
                )?.dataset.ownerSegment;
              if (__8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe) {
                (__eee561f91b58ee873b5a76df4fe070031bb64d02e0803f54276f6fdbb14b2b43("\u0075\u0073\u0065\u0072\u0073"),
                  (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.segment =
                    __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe),
                  (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.search = ""),
                  (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.role = "\u0061\u006c\u006c"),
                  (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.subscription =
                    "\u0061\u006c\u006c"),
                  (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.status =
                    "\u0061\u006c\u006c"),
                  (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.page = 1));
                const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
                  __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.querySelector(
                    "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0066\u0069\u006c\u0074\u0065\u0072\u0073\u005d",
                  );
                return (
                  (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.elements.search.value =
                    ""),
                  (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.elements.role.value =
                    "\u0061\u006c\u006c"),
                  (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.elements.subscription.value =
                    "\u0061\u006c\u006c"),
                  (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.elements.status.value =
                    "\u0061\u006c\u006c"),
                  void __a1966e2585746c7ebc63b861729ff89ab0d7f7629da72c73cf99b96ee03569f3()
                );
              }
              if (
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u006f\u006e\u006c\u0069\u006e\u0065\u002d\u006f\u006e\u006c\u0079\u005d",
                )
              )
                return (
                  (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.segment = ""),
                  (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.status =
                    "\u006f\u006e\u006c\u0069\u006e\u0065" ===
                    __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.status
                      ? "\u0061\u006c\u006c"
                      : "\u006f\u006e\u006c\u0069\u006e\u0065"),
                  (__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.querySelector(
                    "\u005b\u006e\u0061\u006d\u0065\u003d\u0022\u0073\u0074\u0061\u0074\u0075\u0073\u0022\u005d",
                  ).value =
                    __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.status),
                  (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.page = 1),
                  void __a1966e2585746c7ebc63b861729ff89ab0d7f7629da72c73cf99b96ee03569f3()
                );
              const __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a =
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0073\u006f\u0072\u0074\u005d",
                )?.dataset.ownerSort;
              if (__1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a)
                return (
                  __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.sort ===
                  __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a
                    ? (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.direction =
                        "\u0061\u0073\u0063" ===
                        __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.direction
                          ? "\u0064\u0065\u0073\u0063"
                          : "\u0061\u0073\u0063")
                    : ((__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.sort =
                        __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a),
                      (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.direction =
                        "\u0061\u0073\u0063")),
                  void __a1966e2585746c7ebc63b861729ff89ab0d7f7629da72c73cf99b96ee03569f3({
                    preserveLoading: !0,
                  })
                );
              const __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d =
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0070\u0061\u0067\u0065\u005d",
                )?.dataset.ownerPage;
              if (__94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d)
                return (
                  (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.page =
                    Number(__94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d) ||
                    1),
                  void __a1966e2585746c7ebc63b861729ff89ab0d7f7629da72c73cf99b96ee03569f3({
                    preserveLoading: !0,
                  })
                );
              const __d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21 =
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0073\u0065\u0061\u0072\u0063\u0068\u002d\u0068\u0069\u0073\u0074\u006f\u0072\u0079\u005d",
                )?.dataset.ownerSearchHistory;
              if (__d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21) {
                const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = (
                  __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.data?.users ||
                  []
                ).find(
                  (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.uid ===
                    __d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21,
                );
                if (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96)
                  return void __a03f49e95f91224af5b136a0e23dcb87a6dadeb3f9d7f2a0a1bc0a0ffa3f7f6a(
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                  );
              }
              const __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c =
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u006c\u0065\u0061\u0072\u002d\u0073\u0065\u0061\u0072\u0063\u0068\u002d\u0068\u0069\u0073\u0074\u006f\u0072\u0079\u005d",
                )?.dataset.ownerClearSearchHistory;
              if (
                __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c &&
                __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.selectedUser
                  ?.uid === __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c
              )
                return void (async function (
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                ) {
                  if (
                    !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ||
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.guest
                  )
                    return;
                  if (
                    !(await __3abefec312ee58c7fe62ed56861d8dd221822df7f4adf805e11d7b6e7cea0012({
                      title: "\u0043\u006c\u0065\u0061\u0072\u0020\u0074\u0068\u0069\u0073\u0020\u0073\u0065\u0061\u0072\u0063\u0068\u0020\u0068\u0069\u0073\u0074\u006f\u0072\u0079\u003f",
                      message: `All retained N7X searches for ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.displayName} will be permanently deleted. This cannot be undone.`,
                      confirmLabel: "\u0043\u006c\u0065\u0061\u0072\u0020\u0068\u0069\u0073\u0074\u006f\u0072\u0079",
                      danger: !0,
                    }))
                  )
                    return;
                  const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                    __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.querySelector(
                      "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u006c\u0065\u0061\u0072\u002d\u0073\u0065\u0061\u0072\u0063\u0068\u002d\u0068\u0069\u0073\u0074\u006f\u0072\u0079\u005d",
                    );
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
                    (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.disabled =
                      !0);
                  try {
                    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                      await __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6(
                        `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/chat/moderation/search-history?uid=${encodeURIComponent(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.uid)}`,
                        {
                          method: "\u0044\u0045\u004c\u0045\u0054\u0045",
                        },
                      );
                    (__f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b(
                      `${Number(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.deletedCount || 0).toLocaleString()} search${1 === Number(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.deletedCount || 0) ? "" : "\u0065\u0073"} cleared.`,
                    ),
                      await __a03f49e95f91224af5b136a0e23dcb87a6dadeb3f9d7f2a0a1bc0a0ffa3f7f6a(
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                      ));
                  } catch (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c) {
                    (__f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b(
                      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.message ||
                        "\u0053\u0065\u0061\u0072\u0063\u0068\u0020\u0068\u0069\u0073\u0074\u006f\u0072\u0079\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0063\u006c\u0065\u0061\u0072\u0065\u0064\u002e",
                      "\u0065\u0072\u0072\u006f\u0072",
                    ),
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5?.isConnected &&
                        (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.disabled =
                          !1));
                  }
                })(__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.selectedUser);
              const __fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797 =
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0076\u0069\u0065\u0077\u002d\u0075\u0073\u0065\u0072\u005d",
                )?.dataset.ownerViewUser;
              if (__fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797)
                return void __75b9960186525ac5ab965efcdf7d072a44d9c0e2ac9c36c91c0dfeac448fa6e5(
                  __fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797,
                );
              if (
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0072\u0061\u0077\u0065\u0072\u002d\u0063\u006c\u006f\u0073\u0065\u005d",
                )
              )
                return __66e401afb5509cbf5c4bb5624e18bcf319933c46cb9b07bc6c7f86affaa05b78();
              const __51e241f4e1ab21052e5631abbf6ddcfbf931e3f1ce73d61a5a8454c170b94eba =
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0072\u006f\u006c\u0065\u002d\u006f\u0070\u0074\u0069\u006f\u006e\u005d",
                )?.dataset.ownerRoleOption;
              if (__51e241f4e1ab21052e5631abbf6ddcfbf931e3f1ce73d61a5a8454c170b94eba) {
                const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
                  __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.querySelector(
                    "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0065\u0074\u0061\u0069\u006c\u002d\u0072\u006f\u006c\u0065\u005d",
                  );
                if (
                  !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ||
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.disabled
                )
                  return;
                return (
                  (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.value =
                    __51e241f4e1ab21052e5631abbf6ddcfbf931e3f1ce73d61a5a8454c170b94eba),
                  void __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238(
                    __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87,
                    __51e241f4e1ab21052e5631abbf6ddcfbf931e3f1ce73d61a5a8454c170b94eba,
                  )
                );
              }
              const __319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed =
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0061\u0069\u002d\u0061\u0063\u0074\u0069\u0076\u0069\u0074\u0079\u005d",
                );
              if (__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed)
                return void (async function (
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                ) {
                  const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                      __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161
                        .selectedUser?.uid,
                    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                      __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.querySelector(
                        "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0061\u0069\u002d\u0061\u0063\u0074\u0069\u0076\u0069\u0074\u0079\u002d\u0072\u0065\u0073\u0075\u006c\u0074\u005d",
                      );
                  if (
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c &&
                    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03
                  ) {
                    ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.disabled =
                      !0),
                      (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.textContent =
                        "\u004c\u006f\u0061\u0064\u0069\u006e\u0067\u0020\u0041\u0049\u0020\u0061\u0063\u0074\u0069\u0076\u0069\u0074\u0079\u002e\u002e\u002e"));
                    try {
                      const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                        await __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6(
                          `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/users/${encodeURIComponent(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c)}/ai`,
                        );
                      if (
                        __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161
                          .selectedUser?.uid !==
                          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c ||
                        !__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.isConnected
                      )
                        return;
                      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.innerHTML = `<h3>Usage</h3><p>Shared allowance today: ${Number(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.today?.requests) || 0} requests, ${Number(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.today?.tokens) || 0} tokens charged or reserved.</p><p>Completed provider calls recorded since this feature was enabled. Missing token reports are listed separately.</p>${
                        Object.entries(
                          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.models ||
                            {},
                        )
                          .map(
                            ([
                              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                            ]) =>
                              `<p><strong>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5)}</strong><br>${Number(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.requests) || 0} calls &middot; ${Number(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.input) || 0} input tokens &middot; ${Number(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.output) || 0} output tokens${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.unknownUsage ? "\u0020\u0026\u006d\u0069\u0064\u0064\u006f\u0074\u003b\u0020" + Number(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.unknownUsage) + "\u0020\u0063\u0061\u006c\u006c\u0073\u0020\u0077\u0069\u0074\u0068\u006f\u0075\u0074\u0020\u0074\u006f\u006b\u0065\u006e\u0020\u0072\u0065\u0070\u006f\u0072\u0074\u0073" : ""}</p>`,
                          )
                          .join("") || "\u003c\u0070\u003e\u004e\u006f\u0020\u0072\u0065\u0063\u006f\u0072\u0064\u0065\u0064\u0020\u0075\u0073\u0061\u0067\u0065\u0020\u0079\u0065\u0074\u002e\u003c\u002f\u0070\u003e"
                      }${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.pool ? `<p>Shared pool: ${Number(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.pool.used) || 0} tokens used &middot; resets ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.pool.resetAt))}</p>` : ""}${(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.limits || []).map((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) => `<p>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.model)}: ${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.used} / ${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.messages ?? "\u006e\u006f\u0020\u0065\u0078\u0074\u0072\u0061\u0020\u0063\u0061\u0070"} messages &middot; ${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.resetAt ? "\u0072\u0065\u0073\u0065\u0074\u0073\u0020" + __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.resetAt)) : "\u0070\u0065\u0072\u0069\u006f\u0064\u0020\u0073\u0074\u0061\u0072\u0074\u0073\u0020\u006f\u006e\u0020\u0066\u0069\u0072\u0073\u0074\u0020\u0075\u0073\u0065"}</p>`).join("")}<h3>Recent chat history</h3><p>Up to 50 recent text exchanges. Older device-only chats, temporary chats, images and attachments are not available here. Long messages may be shortened.</p>${(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.entries || []).map((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) => `<details class="n7x-owner-ai-exchange"><summary>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.at))} &middot; ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.model)}</summary><h4>User</h4><pre>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.prompt)}</pre><h4>Assistant</h4><pre>${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.answer || "\u0028\u004e\u006f\u0020\u0074\u0065\u0078\u0074\u0020\u0072\u0065\u0070\u006c\u0079\u0029")}</pre>${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.truncated ? "\u003c\u0070\u003e\u004c\u006f\u006e\u0067\u0020\u0074\u0065\u0078\u0074\u0020\u0073\u0068\u006f\u0072\u0074\u0065\u006e\u0065\u0064\u002e\u003c\u002f\u0070\u003e" : ""}</details>`).join("") || "\u003c\u0070\u003e\u004e\u006f\u0020\u0073\u0061\u0076\u0065\u0064\u0020\u0065\u0078\u0063\u0068\u0061\u006e\u0067\u0065\u0073\u0020\u0079\u0065\u0074\u002e\u003c\u002f\u0070\u003e"}`;
                    } catch (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713) {
                      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.textContent =
                        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.message;
                    } finally {
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.isConnected &&
                        (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.disabled =
                          !1);
                    }
                  }
                })(__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed);
              if (
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0073\u0061\u0076\u0065\u002d\u0061\u0069\u002d\u006d\u006f\u0064\u0065\u006c\u0073\u005d",
                )
              ) {
                const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = [
                  ...__0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.querySelectorAll(
                    "\u005b\u0064\u0061\u0074\u0061\u002d\u0061\u0069\u002d\u006d\u006f\u0064\u0065\u006c\u005d",
                  ),
                ]
                  .map((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => ({
                    model:
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.dataset
                        .aiModel,
                    access:
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.querySelector(
                        "\u005b\u0064\u0061\u0074\u0061\u002d\u0061\u0069\u002d\u0072\u0075\u006c\u0065\u002d\u0061\u0063\u0063\u0065\u0073\u0073\u005d",
                      ).value,
                    messages:
                      "" ===
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
                        .querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0061\u0069\u002d\u0072\u0075\u006c\u0065\u002d\u006d\u0065\u0073\u0073\u0061\u0067\u0065\u0073\u005d")
                        .value.trim()
                        ? null
                        : Number(
                            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.querySelector(
                              "\u005b\u0064\u0061\u0074\u0061\u002d\u0061\u0069\u002d\u0072\u0075\u006c\u0065\u002d\u006d\u0065\u0073\u0073\u0061\u0067\u0065\u0073\u005d",
                            ).value,
                          ),
                    periodDays: Number(
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.querySelector(
                        "\u005b\u0064\u0061\u0074\u0061\u002d\u0061\u0069\u002d\u0072\u0075\u006c\u0065\u002d\u0064\u0061\u0079\u0073\u005d",
                      ).value,
                    ),
                  }))
                  .filter(
                    (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                      "\u0064\u0065\u0066\u0061\u0075\u006c\u0074" !==
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.access ||
                      null !==
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.messages,
                  );
                return __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.some(
                  (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                    (null !==
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.messages &&
                      (!Number.isSafeInteger(
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.messages,
                      ) ||
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.messages <
                          0 ||
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.messages >
                          1e5)) ||
                    !Number.isInteger(
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.periodDays,
                    ) ||
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.periodDays <
                      1 ||
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.periodDays >
                      30,
                )
                  ? __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b(
                      "\u0055\u0073\u0065\u0020\u0077\u0068\u006f\u006c\u0065\u0020\u006e\u0075\u006d\u0062\u0065\u0072\u0073\u003a\u0020\u0030\u002d\u0031\u0030\u0030\u0030\u0030\u0030\u0020\u006d\u0065\u0073\u0073\u0061\u0067\u0065\u0073\u0020\u0061\u006e\u0064\u0020\u0031\u002d\u0033\u0030\u0020\u0072\u0065\u0073\u0065\u0074\u0020\u0064\u0061\u0079\u0073\u002e",
                      "\u0065\u0072\u0072\u006f\u0072",
                    )
                  : void __386438b87474d2f2a7f9bcafb4095c3f466d499afdc8b7dc19046a9c96d5b10e(
                      "\u0073\u0065\u0074\u005f\u0061\u0069\u005f\u006d\u006f\u0064\u0065\u006c\u0073",
                      {
                        modelRules:
                          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                      },
                    );
              }
              if (
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0073\u0061\u0076\u0065\u002d\u0061\u0069\u002d\u006c\u0069\u006d\u0069\u0074\u005d",
                )
              ) {
                const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
                  Object.fromEntries(
                    ["\u006c\u0075\u006e\u0061", "\u0067\u0065\u006d\u0069\u006e\u0069"].map(
                      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => [
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                        Number(
                          __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.querySelector(
                            `[data-owner-ai-limit="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96}"]`,
                          ).value,
                        ),
                      ],
                    ),
                  );
                return Object.values(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                ).some(
                  (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                    !Number.isSafeInteger(
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                    ) ||
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 < 0 ||
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 > 1e7,
                )
                  ? __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b(
                      "\u0045\u006e\u0074\u0065\u0072\u0020\u0076\u0061\u006c\u0069\u0064\u0020\u0074\u006f\u006b\u0065\u006e\u0020\u006c\u0069\u006d\u0069\u0074\u0073\u002e",
                      "\u0065\u0072\u0072\u006f\u0072",
                    )
                  : void __386438b87474d2f2a7f9bcafb4095c3f466d499afdc8b7dc19046a9c96d5b10e(
                      "\u0073\u0065\u0074\u005f\u0061\u0069\u005f\u006c\u0069\u006d\u0069\u0074",
                      {
                        monthlyModelLimits:
                          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                      },
                    );
              }
              const __0e2b163757570b367b08da8bb23888480477d7ff7407c183459e03cb93ece46b =
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0075\u0073\u0065\u0072\u002d\u0061\u0063\u0074\u0069\u006f\u006e\u005d",
                )?.dataset.ownerUserAction;
              if (__0e2b163757570b367b08da8bb23888480477d7ff7407c183459e03cb93ece46b)
                __386438b87474d2f2a7f9bcafb4095c3f466d499afdc8b7dc19046a9c96d5b10e(
                  __0e2b163757570b367b08da8bb23888480477d7ff7407c183459e03cb93ece46b,
                );
              else if (
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0073\u0061\u0076\u0065\u002d\u0061\u0063\u0063\u0065\u0073\u0073\u005d",
                )
              ) {
                const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
                    __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.querySelector(
                      "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0065\u0074\u0061\u0069\u006c\u002d\u0072\u006f\u006c\u0065\u005d",
                    ),
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                    __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.querySelector(
                      "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0065\u0074\u0061\u0069\u006c\u002d\u0073\u0075\u0062\u0073\u0063\u0072\u0069\u0070\u0074\u0069\u006f\u006e\u005d",
                    ),
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                    __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87.querySelector(
                      "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0065\u0074\u0061\u0069\u006c\u002d\u0072\u0065\u0076\u0065\u006e\u0075\u0065\u005d",
                    ),
                  __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.value ||
                    (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.selectedUser
                      ?.customRole
                      ? `custom:${__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.selectedUser.customRole.id}`
                      : __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161
                          .selectedUser?.role),
                  __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5?.value ||
                    __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.selectedUser
                      ?.subscriptionStatus,
                  __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
                      ? Math.round(
                          100 *
                            (Number(
                              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.value,
                            ) || 0),
                        )
                      : __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161
                          .selectedUser?.monthlyRevenueCents,
                  __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 =
                    __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.selectedUser
                      ?.customRole
                      ? `custom:${__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.selectedUser.customRole.id}`
                      : __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161
                          .selectedUser?.role,
                  __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 = Boolean(
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
                      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 !==
                        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2,
                  ),
                  __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f = Boolean(
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
                      (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a !==
                        __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161
                          .selectedUser?.subscriptionStatus ||
                        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc !==
                          __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161
                            .selectedUser?.monthlyRevenueCents),
                  );
                return void (async () => {
                  if (__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238) {
                    const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
                        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.startsWith(
                          "\u0063\u0075\u0073\u0074\u006f\u006d\u003a",
                        )
                          ? __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.customRoles.find(
                              (
                                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                              ) =>
                                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id ===
                                __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.slice(
                                  7,
                                ),
                            )
                          : null,
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.label ||
                        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
                          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                        );
                    if (
                      !(await __3abefec312ee58c7fe62ed56861d8dd221822df7f4adf805e11d7b6e7cea0012({
                        title: "\u0043\u0068\u0061\u006e\u0067\u0065\u0020\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0020\u0072\u006f\u006c\u0065\u003f",
                        message: `${__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.selectedUser.email || __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.selectedUser.displayName} will become ${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5}.`,
                        confirmLabel: "\u0043\u0068\u0061\u006e\u0067\u0065\u0020\u0072\u006f\u006c\u0065",
                      }))
                    )
                      return;
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
                      ? (await __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6(
                          `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/custom-roles/${encodeURIComponent(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id)}/assign`,
                          {
                            method: "\u0050\u004f\u0053\u0054",
                            body: JSON.stringify({
                              uid: __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161
                                .selectedUser.uid,
                            }),
                          },
                        ),
                        __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b(
                          `${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.label} assigned.`,
                        ),
                        await __75b9960186525ac5ab965efcdf7d072a44d9c0e2ac9c36c91c0dfeac448fa6e5(
                          __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161
                            .selectedUser.uid,
                        ),
                        await __a1966e2585746c7ebc63b861729ff89ab0d7f7629da72c73cf99b96ee03569f3({
                          preserveLoading: !0,
                        }))
                      : await __386438b87474d2f2a7f9bcafb4095c3f466d499afdc8b7dc19046a9c96d5b10e(
                          "\u0073\u0065\u0074\u005f\u0072\u006f\u006c\u0065",
                          {
                            role: __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                          },
                        );
                  }
                  (__16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f &&
                    (await __386438b87474d2f2a7f9bcafb4095c3f466d499afdc8b7dc19046a9c96d5b10e(
                      "\u0073\u0065\u0074\u005f\u0073\u0075\u0062\u0073\u0063\u0072\u0069\u0070\u0074\u0069\u006f\u006e",
                      {
                        subscriptionStatus:
                          __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
                        monthlyRevenueCents:
                          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
                      },
                    )),
                    __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 ||
                      __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f ||
                      __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b(
                        "\u004e\u006f\u0020\u0061\u0063\u0063\u0065\u0073\u0073\u0020\u0063\u0068\u0061\u006e\u0067\u0065\u0073\u0020\u0074\u006f\u0020\u0073\u0061\u0076\u0065\u002e",
                        "\u0065\u0072\u0072\u006f\u0072",
                      ));
                })();
              }
            },
          ),
          __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.addEventListener(
            "\u0063\u0068\u0061\u006e\u0067\u0065",
            function (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
              if (
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target.matches(
                  "\u002e\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u006d\u0065\u0064\u0069\u0061\u002d\u0069\u006e\u0070\u0075\u0074",
                )
              ) {
                const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target,
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.closest(
                      "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0070\u0072\u006f\u0066\u0069\u006c\u0065\u002d\u0066\u006f\u0072\u006d\u005d",
                    ),
                  __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                    "\u0061\u0076\u0061\u0074\u0061\u0072\u0046\u0069\u006c\u0065" ===
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.name
                      ? "\u0061\u0076\u0061\u0074\u0061\u0072"
                      : "\u0062\u0061\u006e\u006e\u0065\u0072",
                  __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.files?.[0],
                  __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c?.querySelector(
                      `[data-owner-media-name="${__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03}"]`,
                    ),
                  __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c?.querySelector(
                      `[data-owner-media-preview="${__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03}"]`,
                    ),
                  __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 =
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c?.querySelector(
                      "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u006d\u0065\u0064\u0069\u0061\u002d\u0065\u0072\u0072\u006f\u0072\u005d",
                    );
                if (
                  ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5._nyxOwnerDataUrl =
                    ""),
                  (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5._nyxOwnerMediaError =
                    null),
                  !__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713)
                )
                  return;
                (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a &&
                  (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.textContent = `Preparing ${__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.name}...`),
                  __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 &&
                    (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.textContent =
                      ""));
                const __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 =
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c?.querySelector(
                    `[name="remove${__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03[0].toUpperCase()}${__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.slice(1)}"]`,
                  );
                __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 &&
                  (__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.checked = !1);
                const __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f =
                  (async function (
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                  ) {
                    if (
                      !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ||
                      !/^image\/(?:png|jpe?g|webp|gif)$/i.test(
                        String(
                          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.type ||
                            "",
                        ),
                      )
                    )
                      throw new Error("\u0043\u0068\u006f\u006f\u0073\u0065\u0020\u0061\u0020\u0050\u004e\u0047\u002c\u0020\u004a\u0050\u0047\u002c\u0020\u0057\u0065\u0062\u0050\u002c\u0020\u006f\u0072\u0020\u0047\u0049\u0046\u0020\u0069\u006d\u0061\u0067\u0065\u002e");
                    if (
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.size >
                      8388608
                    )
                      throw new Error("\u0043\u0068\u006f\u006f\u0073\u0065\u0020\u0061\u006e\u0020\u0069\u006d\u0061\u0067\u0065\u0020\u0073\u006d\u0061\u006c\u006c\u0065\u0072\u0020\u0074\u0068\u0061\u006e\u0020\u0038\u0020\u004d\u0042\u002e");
                    if (
                      /^image\/gif$/i.test(
                        String(
                          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.type ||
                            "",
                        ),
                      )
                    ) {
                      const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                        await __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
                          .slice(0, 6)
                          .text();
                      if (
                        !/^GIF8[79]a$/.test(
                          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                        )
                      )
                        throw new Error("\u0054\u0068\u0061\u0074\u0020\u0066\u0069\u006c\u0065\u0020\u0069\u0073\u0020\u006e\u006f\u0074\u0020\u0061\u0020\u0076\u0061\u006c\u0069\u0064\u0020\u0047\u0049\u0046\u002e");
                      const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                        await (function (
                          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                        ) {
                          return new Promise(
                            (
                              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                            ) => {
                              const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                                new FileReader();
                              ((__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.onload =
                                () =>
                                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5(
                                    String(
                                      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.result ||
                                        "",
                                    ),
                                  )),
                                (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.onerror =
                                  () =>
                                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c(
                                      new Error("\u0054\u0068\u0061\u0074\u0020\u0047\u0049\u0046\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u006f\u0070\u0065\u006e\u0065\u0064\u002e"),
                                    )),
                                __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.readAsDataURL(
                                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                                ));
                            },
                          );
                        })(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96);
                      if (
                        !/^data:image\/gif;base64,/i.test(
                          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                        ) ||
                        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.length >
                          __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a
                      )
                        throw new Error("\u0043\u0068\u006f\u006f\u0073\u0065\u0020\u0061\u0020\u0076\u0061\u006c\u0069\u0064\u0020\u0047\u0049\u0046\u0020\u0073\u006d\u0061\u006c\u006c\u0065\u0072\u0020\u0074\u0068\u0061\u006e\u0020\u0038\u0020\u004d\u0042\u002e");
                      return __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c;
                    }
                    const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                      URL.createObjectURL(
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                      );
                    try {
                      const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
                        await new Promise(
                          (
                            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                          ) => {
                            const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                              new Image();
                            ((__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.onload =
                              () =>
                                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(
                                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                                )),
                              (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.onerror =
                                () =>
                                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5(
                                    new Error("\u0054\u0068\u0061\u0074\u0020\u0069\u006d\u0061\u0067\u0065\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u006f\u0070\u0065\u006e\u0065\u0064\u002e"),
                                  )),
                              (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.src =
                                __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03));
                          },
                        );
                      let __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
                        Math.min(
                          1,
                          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 /
                            Math.max(
                              1,
                              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.naturalWidth,
                            ),
                          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c /
                            Math.max(
                              1,
                              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.naturalHeight,
                            ),
                        );
                      for (
                        let __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = 0;
                        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 < 4;
                        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 += 1
                      ) {
                        const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                          document.createElement("\u0063\u0061\u006e\u0076\u0061\u0073");
                        ((__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.width =
                          Math.max(
                            1,
                            Math.round(
                              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.naturalWidth *
                                __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
                            ),
                          )),
                          (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.height =
                            Math.max(
                              1,
                              Math.round(
                                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.naturalHeight *
                                  __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
                              ),
                            )),
                          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
                            .getContext("\u0032\u0064")
                            .drawImage(
                              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                              0,
                              0,
                              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.width,
                              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.height,
                            ));
                        const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.toDataURL(
                            "\u0069\u006d\u0061\u0067\u0065\u002f\u0077\u0065\u0062\u0070",
                            Math.max(
                              0.52,
                              0.86 -
                                0.1 *
                                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                            ),
                          );
                        if (
                          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.length <=
                          85e4
                        )
                          return __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03;
                        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 *= 0.72;
                      }
                      throw new Error("\u0054\u0068\u0061\u0074\u0020\u0069\u006d\u0061\u0067\u0065\u0020\u0069\u0073\u0020\u0074\u006f\u006f\u0020\u0064\u0065\u0074\u0061\u0069\u006c\u0065\u0064\u0020\u0074\u006f\u0020\u0073\u0061\u0076\u0065\u002e\u0020\u0054\u0072\u0079\u0020\u0061\u0020\u0073\u006d\u0061\u006c\u006c\u0065\u0072\u0020\u0069\u006d\u0061\u0067\u0065\u002e");
                    } finally {
                      URL.revokeObjectURL(
                        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                      );
                    }
                  })(
                    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
                    "\u0061\u0076\u0061\u0074\u0061\u0072" === __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03
                      ? 512
                      : 1200,
                    "\u0061\u0076\u0061\u0074\u0061\u0072" === __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03
                      ? 512
                      : 480,
                  );
                return (
                  (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5._nyxOwnerPreparation =
                    __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f),
                  void __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f
                    .then((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5._nyxOwnerPreparation ===
                        __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f &&
                        ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5._nyxOwnerDataUrl =
                          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
                        __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a &&
                          (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.textContent =
                            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.name),
                        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc &&
                          (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.innerHTML = `<img src="${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96}" alt="Selected ${__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03}">`));
                    })
                    .catch((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5._nyxOwnerPreparation ===
                        __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f &&
                        ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5._nyxOwnerMediaError =
                          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
                        (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.value =
                          ""),
                        __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a &&
                          (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.textContent =
                            "\u0043\u0068\u006f\u006f\u0073\u0065\u0020\u0061\u0020\u0064\u0069\u0066\u0066\u0065\u0072\u0065\u006e\u0074\u0020\u0069\u006d\u0061\u0067\u0065"),
                        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 &&
                          (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.textContent =
                            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.message ||
                            "\u0054\u0068\u0061\u0074\u0020\u0069\u006d\u0061\u0067\u0065\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0075\u0073\u0065\u0064\u002e"));
                    })
                    .finally(() => {
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5._nyxOwnerPreparation ===
                        __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f &&
                        (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5._nyxOwnerPreparation =
                          null);
                    })
                );
              }
              if (
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target.matches(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0070\u0061\u0067\u0065\u002d\u0073\u0069\u007a\u0065\u005d",
                )
              )
                return (
                  (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.pageSize =
                    Number(
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target
                        .value,
                    ) || 25),
                  (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.page = 1),
                  void __a1966e2585746c7ebc63b861729ff89ab0d7f7629da72c73cf99b96ee03569f3()
                );
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target.closest(
                "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0066\u0069\u006c\u0074\u0065\u0072\u0073\u005d",
              ) &&
                ("\u0072\u006f\u006c\u0065" ===
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target.name &&
                  (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.role =
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target.value),
                "\u0073\u0075\u0062\u0073\u0063\u0072\u0069\u0070\u0074\u0069\u006f\u006e" ===
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target.name &&
                  (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.subscription =
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target.value),
                "\u0073\u0074\u0061\u0074\u0075\u0073" ===
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target.name &&
                  (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.status =
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target.value),
                "\u0073\u0065\u0061\u0072\u0063\u0068" !==
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target.name &&
                  ((__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.segment =
                    ""),
                  (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.page = 1),
                  __a1966e2585746c7ebc63b861729ff89ab0d7f7629da72c73cf99b96ee03569f3()));
            },
          ),
          __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.addEventListener(
            "\u0069\u006e\u0070\u0075\u0074",
            function (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
              (!(function (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
                const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target.closest(
                      "\u005b\u006e\u0061\u006d\u0065\u003d\u0022\u0063\u006f\u006c\u006f\u0072\u0022\u005d\u002c\u0020\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0072\u006f\u006c\u0065\u002d\u0063\u006f\u006c\u006f\u0072\u002d\u0070\u0069\u0063\u006b\u0065\u0072\u005d",
                    ),
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5?.closest(
                      "\u002e\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0072\u006f\u006c\u0065\u002d\u0063\u006f\u006c\u006f\u0072\u002d\u0063\u006f\u006e\u0074\u0072\u006f\u006c",
                    );
                if (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c) {
                  const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = {
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
                    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.querySelector(
                        "\u005b\u006e\u0061\u006d\u0065\u003d\u0022\u0063\u006f\u006c\u006f\u0072\u0022\u005d",
                      ),
                    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
                      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.querySelector(
                        "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0072\u006f\u006c\u0065\u002d\u0063\u006f\u006c\u006f\u0072\u002d\u0070\u0069\u0063\u006b\u0065\u0072\u005d",
                      );
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 ===
                    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 &&
                    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 &&
                    (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.value =
                      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.value);
                  const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a = String(
                      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03?.value ||
                        "",
                    )
                      .trim()
                      .toLowerCase(),
                    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
                      /^#[0-9a-f]{6}$/.test(
                        __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
                      )
                        ? __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a
                        : __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96[
                            __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.match(
                              /^&([0-9a-f])$/,
                            )?.[1]
                          ];
                  __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc &&
                    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 &&
                    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.value !==
                      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc &&
                    (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.value =
                      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc);
                }
              })(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
                "\u0073\u0065\u0061\u0072\u0063\u0068" ===
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target.name &&
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target.closest(
                    "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0066\u0069\u006c\u0074\u0065\u0072\u0073\u005d",
                  ) &&
                  (clearTimeout(
                    __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.searchTimer,
                  ),
                  (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.searchTimer =
                    setTimeout(() => {
                      ((__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.segment =
                        ""),
                        (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.search =
                          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target.value.trim()),
                        (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.page = 1),
                        __a1966e2585746c7ebc63b861729ff89ab0d7f7629da72c73cf99b96ee03569f3());
                    }, 280))));
            },
          ),
          __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.addEventListener(
            "\u0073\u0075\u0062\u006d\u0069\u0074",
            function (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
              const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0073\u0074\u0075\u0064\u0079\u0072\u0065\u0061\u0064\u0079\u002d\u0066\u006f\u0072\u006d\u005d",
                );
              if (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) {
                if (
                  (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.preventDefault(),
                  !__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.reportValidity())
                )
                  return;
                const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.querySelector(
                    "\u005b\u0074\u0079\u0070\u0065\u003d\u0073\u0075\u0062\u006d\u0069\u0074\u005d",
                  );
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.disabled = !0;
                const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                  new FormData(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5);
                return void __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6(
                  "\u002f\u0061\u0070\u0069\u002f\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0061\u0073\u0068\u0062\u006f\u0061\u0072\u0064\u002f\u0073\u0074\u0075\u0064\u0079\u0072\u0065\u0061\u0064\u0079",
                  {
                    method: "\u0050\u004f\u0053\u0054",
                    body: JSON.stringify({
                      hostname:
                        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.get(
                          "\u0068\u006f\u0073\u0074\u006e\u0061\u006d\u0065",
                        ),
                      title:
                        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.get(
                          "\u0074\u0069\u0074\u006c\u0065",
                        ),
                    }),
                  },
                )
                  .then((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
                    ((__037421764e2f5e073ebcd4a8e7220f715740a5cbe2e9ed2d93431a54ae8de6ec =
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
                      __5285a5bbd045fe6fc6ebb94cc24c149a1dcccd7cfeb2f5de9c7a211dad268afa(),
                      __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b(
                        "\u0053\u0074\u0075\u0064\u0079\u0052\u0065\u0061\u0064\u0079\u0020\u0064\u006f\u006d\u0061\u0069\u006e\u0020\u0073\u0061\u0076\u0065\u0064\u002e",
                      ));
                  })
                  .catch((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                    __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b(
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.message,
                      "\u0065\u0072\u0072\u006f\u0072",
                    ),
                  )
                  .finally(() => {
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.isConnected &&
                      (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.disabled =
                        !1);
                  });
              }
              const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0067\u006c\u006f\u0062\u0061\u006c\u002d\u0061\u0070\u0070\u002d\u0066\u006f\u0072\u006d\u005d",
                );
              if (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c) {
                if (
                  (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.preventDefault(),
                  !__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.reportValidity())
                )
                  return;
                const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.querySelector(
                    "\u005b\u0074\u0079\u0070\u0065\u003d\u0022\u0073\u0075\u0062\u006d\u0069\u0074\u0022\u005d",
                  );
                return (
                  (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.disabled =
                    !0),
                  void (async () => {
                    try {
                      const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
                          new FormData(
                            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                          ),
                        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                          await __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6(
                            "\u002f\u0061\u0070\u0069\u002f\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0061\u0073\u0068\u0062\u006f\u0061\u0072\u0064\u002f\u0061\u0070\u0070\u0073",
                            {
                              method: "\u0050\u004f\u0053\u0054",
                              body: JSON.stringify({
                                name: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.get(
                                  "\u006e\u0061\u006d\u0065",
                                ),
                                url: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.get(
                                  "\u0075\u0072\u006c",
                                ),
                              }),
                            },
                          );
                      ((__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.globalApps =
                        Array.isArray(
                          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.apps,
                        )
                          ? __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.apps
                          : [
                              ...__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.globalApps,
                              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.app,
                            ]),
                        __96269fbafcaf1e59a066bbe22f9ec441fbf0ff3e38084b904ada564b445561a8(),
                        __d6e8ffff761bb3491b619880e5d917d6df582d5c67b95c1869c0a525aa0a908c(),
                        __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b(
                          "\u0041\u0070\u0070\u0020\u0061\u0064\u0064\u0065\u0064\u0020\u0066\u006f\u0072\u0020\u0065\u0076\u0065\u0072\u0079\u006f\u006e\u0065\u002e",
                        ));
                    } catch (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
                      __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b(
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.message ||
                          "\u0054\u0068\u0065\u0020\u0061\u0070\u0070\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0061\u0064\u0064\u0065\u0064\u002e",
                        "\u0065\u0072\u0072\u006f\u0072",
                      );
                    }
                  })().finally(() => {
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.isConnected &&
                      (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.disabled =
                        !1);
                  })
                );
              }
              const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0072\u006f\u006c\u0065\u002d\u0063\u0072\u0065\u0061\u0074\u0065\u005d\u002c\u0020\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0072\u006f\u006c\u0065\u002d\u0075\u0070\u0064\u0061\u0074\u0065\u005d",
                );
              if (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03) {
                if (
                  (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.preventDefault(),
                  !__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.reportValidity())
                )
                  return;
                const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                    new FormData(
                      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                    ),
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.dataset
                      .ownerCustomRoleUpdate || "",
                  __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = {
                    label:
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.get(
                        "\u006c\u0061\u0062\u0065\u006c",
                      ),
                    color:
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.get(
                        "\u0063\u006f\u006c\u006f\u0072",
                      ),
                    baseRole:
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.get(
                        "\u0062\u0061\u0073\u0065\u0052\u006f\u006c\u0065",
                      ),
                    permissions:
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.getAll(
                        "\u0070\u0065\u0072\u006d\u0069\u0073\u0073\u0069\u006f\u006e\u0073",
                      ),
                  };
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c ||
                  (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.id =
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.get("\u0069\u0064"));
                const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
                  __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.querySelector(
                    "\u005b\u0074\u0079\u0070\u0065\u003d\u0022\u0073\u0075\u0062\u006d\u0069\u0074\u0022\u005d",
                  );
                return (
                  (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.disabled =
                    !0),
                  void (async () => {
                    try {
                      const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
                        await __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6(
                          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
                            ? `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/owner-dashboard/custom-roles/${encodeURIComponent(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c)}`
                            : "\u002f\u0061\u0070\u0069\u002f\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0061\u0073\u0068\u0062\u006f\u0061\u0072\u0064\u002f\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0072\u006f\u006c\u0065\u0073",
                          {
                            method:
                              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
                                ? "\u0050\u0041\u0054\u0043\u0048"
                                : "\u0050\u004f\u0053\u0054",
                            body: JSON.stringify(
                              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
                            ),
                          },
                        );
                      ((__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.customRoles =
                        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
                          ? __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.customRoles.map(
                              (
                                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                              ) =>
                                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.id ===
                                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
                                  ? __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.role
                                  : __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                            )
                          : [
                              ...__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.customRoles,
                              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.role,
                            ]),
                        __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.customRoles.sort(
                          (
                            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                          ) =>
                            Number(
                              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.rank ||
                                0,
                            ) -
                              Number(
                                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.rank ||
                                  0,
                              ) ||
                            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.label.localeCompare(
                              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.label,
                            ),
                        ),
                        (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.customRoleEditorId =
                          ""),
                        __34e3a593d4cfcfa83223ee3c74b7c8a0109cc4a95b5017b64b39376d978be837(),
                        __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b(
                          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
                            ? "\u0043\u0075\u0073\u0074\u006f\u006d\u0020\u0072\u006f\u006c\u0065\u0020\u0075\u0070\u0064\u0061\u0074\u0065\u0064\u002e"
                            : "\u0043\u0075\u0073\u0074\u006f\u006d\u0020\u0072\u006f\u006c\u0065\u0020\u0063\u0072\u0065\u0061\u0074\u0065\u0064\u002e",
                        ),
                        await __a1966e2585746c7ebc63b861729ff89ab0d7f7629da72c73cf99b96ee03569f3({
                          preserveLoading: !0,
                        }));
                    } catch (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
                      __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b(
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.message ||
                          "\u0054\u0068\u0065\u0020\u0063\u0075\u0073\u0074\u006f\u006d\u0020\u0072\u006f\u006c\u0065\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0073\u0061\u0076\u0065\u0064\u002e",
                        "\u0065\u0072\u0072\u006f\u0072",
                      );
                    }
                  })().finally(() => {
                    __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.isConnected &&
                      (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.disabled =
                        !1);
                  })
                );
              }
              const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0069\u0070\u002d\u0062\u0061\u006e\u002d\u0066\u006f\u0072\u006d\u005d",
                );
              if (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713) {
                if (
                  (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.preventDefault(),
                  !__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.reportValidity())
                )
                  return;
                const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                  __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.querySelector(
                    "\u005b\u0074\u0079\u0070\u0065\u003d\u0022\u0073\u0075\u0062\u006d\u0069\u0074\u0022\u005d",
                  );
                return (
                  (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.disabled =
                    !0),
                  void (async () => {
                    try {
                      const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
                          new FormData(
                            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
                          ),
                        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                          await __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6(
                            "\u002f\u0061\u0070\u0069\u002f\u006f\u0077\u006e\u0065\u0072\u002d\u0064\u0061\u0073\u0068\u0062\u006f\u0061\u0072\u0064\u002f\u0069\u0070\u002d\u0062\u0061\u006e\u0073",
                            {
                              method: "\u0050\u004f\u0053\u0054",
                              body: JSON.stringify({
                                ip: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.get(
                                  "\u0069\u0070",
                                ),
                                reason:
                                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.get(
                                    "\u0072\u0065\u0061\u0073\u006f\u006e",
                                  ),
                              }),
                            },
                          );
                      ((__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.ipBans =
                        [
                          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.ban,
                          ...__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.ipBans.filter(
                            (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id !==
                              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.ban
                                .id,
                          ),
                        ]),
                        __cbe3e169b82a066efb87cecf43ee78a46c91fe23c1c18420de9d26beb1a60ea4(),
                        __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b(
                          "\u0049\u0050\u0020\u0061\u0064\u0064\u0072\u0065\u0073\u0073\u0020\u0062\u006c\u006f\u0063\u006b\u0065\u0064\u002e",
                        ),
                        await __a1966e2585746c7ebc63b861729ff89ab0d7f7629da72c73cf99b96ee03569f3({
                          preserveLoading: !0,
                        }));
                    } catch (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
                      __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b(
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.message ||
                          "\u0054\u0068\u0065\u0020\u0049\u0050\u0020\u0061\u0064\u0064\u0072\u0065\u0073\u0073\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0062\u006c\u006f\u0063\u006b\u0065\u0064\u002e",
                        "\u0065\u0072\u0072\u006f\u0072",
                      );
                    }
                  })().finally(() => {
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.isConnected &&
                      (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.disabled =
                        !1);
                  })
                );
              }
              const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target.closest(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u0070\u0072\u006f\u0066\u0069\u006c\u0065\u002d\u0066\u006f\u0072\u006d\u005d",
                );
              if (!__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a) return;
              if (
                (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.preventDefault(),
                !__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.reportValidity())
              )
                return;
              const __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
                __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.querySelector(
                  "\u005b\u0074\u0079\u0070\u0065\u003d\u0022\u0073\u0075\u0062\u006d\u0069\u0074\u0022\u005d",
                );
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.disabled = !0;
              const __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 =
                __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.textContent;
              (async () => {
                try {
                  const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = [
                      ...__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.querySelectorAll(
                        "\u002e\u006e\u0037\u0078\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u006d\u0065\u0064\u0069\u0061\u002d\u0069\u006e\u0070\u0075\u0074",
                      ),
                    ],
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
                        .map(
                          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96._nyxOwnerPreparation,
                        )
                        .filter(Boolean);
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.length &&
                    ((__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.textContent =
                      "\u0050\u0072\u0065\u0070\u0061\u0072\u0069\u006e\u0067\u0020\u006d\u0065\u0064\u0069\u0061\u2026"),
                    await Promise.all(
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                    ));
                  const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.find(
                      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96._nyxOwnerMediaError,
                    )?._nyxOwnerMediaError;
                  if (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c)
                    throw __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c;
                  const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                      new FormData(
                        __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
                      ),
                    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = {
                      displayName:
                        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.get(
                          "\u0064\u0069\u0073\u0070\u006c\u0061\u0079\u004e\u0061\u006d\u0065",
                        ),
                      handle:
                        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.get(
                          "\u0068\u0061\u006e\u0064\u006c\u0065",
                        ),
                      bio: __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.get(
                        "\u0062\u0069\u006f",
                      ),
                      customStatus:
                        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.get(
                          "\u0063\u0075\u0073\u0074\u006f\u006d\u0053\u0074\u0061\u0074\u0075\u0073",
                        ),
                      status:
                        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.get(
                          "\u0073\u0074\u0061\u0074\u0075\u0073",
                        ),
                      accentPrimary:
                        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.get(
                          "\u0061\u0063\u0063\u0065\u006e\u0074\u0050\u0072\u0069\u006d\u0061\u0072\u0079",
                        ),
                      accentSecondary:
                        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.get(
                          "\u0061\u0063\u0063\u0065\u006e\u0074\u0053\u0065\u0063\u006f\u006e\u0064\u0061\u0072\u0079",
                        ),
                      bannerColor:
                        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.get(
                          "\u0062\u0061\u006e\u006e\u0065\u0072\u0043\u006f\u006c\u006f\u0072",
                        ),
                      displayNameFont:
                        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.get(
                          "\u0064\u0069\u0073\u0070\u006c\u0061\u0079\u004e\u0061\u006d\u0065\u0046\u006f\u006e\u0074",
                        ),
                      displayNameEffect:
                        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.get(
                          "\u0064\u0069\u0073\u0070\u006c\u0061\u0079\u004e\u0061\u006d\u0065\u0045\u0066\u0066\u0065\u0063\u0074",
                        ),
                      profileEffect:
                        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.get(
                          "\u0070\u0072\u006f\u0066\u0069\u006c\u0065\u0045\u0066\u0066\u0065\u0063\u0074",
                        ),
                      avatarDecoration:
                        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.get(
                          "\u0061\u0076\u0061\u0074\u0061\u0072\u0044\u0065\u0063\u006f\u0072\u0061\u0074\u0069\u006f\u006e",
                        ),
                    },
                    __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = {
                      avatar:
                        "\u006f\u006e" ===
                        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.get(
                          "\u0072\u0065\u006d\u006f\u0076\u0065\u0041\u0076\u0061\u0074\u0061\u0072",
                        ),
                      banner:
                        "\u006f\u006e" ===
                        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.get(
                          "\u0072\u0065\u006d\u006f\u0076\u0065\u0042\u0061\u006e\u006e\u0065\u0072",
                        ),
                    };
                  for (const __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 of [
                    "\u0061\u0076\u0061\u0074\u0061\u0072",
                    "\u0062\u0061\u006e\u006e\u0065\u0072",
                  ]) {
                    const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
                        __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.querySelector(
                          `[name="${__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238}File"]`,
                        ),
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = String(
                        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.get(
                          `${__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238}Url`,
                        ) || "",
                      ).trim();
                    if (
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.files?.[0]
                    ) {
                      if (
                        !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96._nyxOwnerDataUrl
                      )
                        throw new Error(
                          `The selected ${__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238} is not ready. Choose it again.`,
                        );
                      ((__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2[
                        __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238
                      ] = !1),
                        (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.textContent = `Uploading ${__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238}\u2026`),
                        (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713[
                          `${__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238}Url`
                        ] =
                          await __9d433778c84bb56320ac2926429ccbbc9e33af617b171cf71422a4a874f28af1(
                            __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161
                              .selectedUser.uid,
                            __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238,
                            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96._nyxOwnerDataUrl,
                            (
                              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                            ) => {
                              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.textContent = `Uploading ${__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238} ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96}%`;
                            },
                          )));
                    } else
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
                        (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713[
                          `${__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238}Url`
                        ] = __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5);
                  }
                  ((__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.textContent =
                    "\u0053\u0061\u0076\u0069\u006e\u0067\u2026"),
                    await __386438b87474d2f2a7f9bcafb4095c3f466d499afdc8b7dc19046a9c96d5b10e(
                      "\u0073\u0065\u0074\u005f\u0070\u0072\u006f\u0066\u0069\u006c\u0065",
                      {
                        profile: __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
                        removeAvatar:
                          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.avatar,
                        removeBanner:
                          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.banner,
                      },
                    ));
                } catch (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
                  const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                    __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.querySelector(
                      "\u005b\u0064\u0061\u0074\u0061\u002d\u006f\u0077\u006e\u0065\u0072\u002d\u006d\u0065\u0064\u0069\u0061\u002d\u0065\u0072\u0072\u006f\u0072\u005d",
                    );
                  (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
                    (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.textContent =
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.message ||
                      "\u0050\u0072\u006f\u0066\u0069\u006c\u0065\u0020\u006d\u0065\u0064\u0069\u0061\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0073\u0061\u0076\u0065\u0064\u002e"),
                    __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b(
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.message ||
                        "\u0050\u0072\u006f\u0066\u0069\u006c\u0065\u0020\u006d\u0065\u0064\u0069\u0061\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0073\u0061\u0076\u0065\u0064\u002e",
                      "\u0065\u0072\u0072\u006f\u0072",
                    ));
                }
              })().finally(() => {
                __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.isConnected &&
                  ((__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.disabled =
                    !1),
                  (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.textContent =
                    __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2));
              });
            },
          ),
          window.addEventListener(
            "\u006e\u0079\u0078\u003a\u0070\u0072\u0065\u0073\u0065\u006e\u0063\u0065",
            __8846e27b07ac021b6c32fc8bdc0c411f01ff3e6d19c3048355784ff30aa3c433,
          ),
          document.addEventListener(
            "\u006b\u0065\u0079\u0064\u006f\u0077\u006e",
            __3c2959d287db485aed16e708f7fdaff1019aeded6f9f9b016e6d19d5627c9211,
          ),
          __153775183a87af39b37d038f0f2d9a41fb6f191283bb242f26b279c138ab61ea(),
          __a1966e2585746c7ebc63b861729ff89ab0d7f7629da72c73cf99b96ee03569f3(),
          {
            overlay: __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34,
            destroy: __8a634624ecf034ed097cd5e7c1a9e014c7efed1bf92024f2b4af50aa6eb48c94,
            refresh: __a1966e2585746c7ebc63b861729ff89ab0d7f7629da72c73cf99b96ee03569f3,
          }
        );
      })(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5)),
      __fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797
    ),
    close: __51e241f4e1ab21052e5631abbf6ddcfbf931e3f1ce73d61a5a8454c170b94eba,
  });
})();
