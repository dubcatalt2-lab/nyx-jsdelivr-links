(() => {
  "use strict";
  const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
      document.body.classList.contains("\u0064\u0072\u006f\u0070\u002d\u0074\u0075\u0062\u0065"),
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = (
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
    ) =>
      !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ||
      (!__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5?.isShort &&
        !/\/shorts\//i.test(
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5?.sourceUrl || "",
        )),
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = (
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    ) =>
      (Array.isArray(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96)
        ? __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
        : []
      ).filter(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5),
    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = (
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    ) => document.querySelector(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = (
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    ) => [
      ...document.querySelectorAll(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      ),
    ],
    __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a = Object.fromEntries(
      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713("\u005b\u0064\u0061\u0074\u0061\u002d\u0076\u0069\u0065\u0077\u005d").map(
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => [
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.dataset.view,
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        ],
      ),
    ),
    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc = {
      nativeAvailable: !1,
      invidiousEmbedOrigin: "",
      watchGeneration: 0,
      preferredPlayer: "\u006e\u0061\u0074\u0069\u0076\u0065",
      view: "\u0068\u006f\u006d\u0065",
      videos: [],
      catalog: [],
      shorts: [],
      shortIndex: 0,
      watchPlayer: null,
      shortPlayer: null,
      watchTimer: 0,
      shortTimer: 0,
      watchVideo: null,
      watchCaptions: !1,
      shortCaptions: !1,
      shortMuted: !0,
      channel: null,
      watchTrail: [],
      failedVideoIds: new Set(),
      failedShortIds: new Set(),
      watchRecoveryTimer: 0,
      watchSpaceTimer: 0,
      watchSpacePressed: !1,
      watchSpaceHeld: !1,
      watchSpaceWasPlaying: !1,
      watchSpacePreviousRate: 1,
      watchSpaceRateChanged: !1,
      watchCommunityRequestId: 0,
      profile: {
        uid: "",
        signedIn: !1,
        displayName: "\u0050\u0072\u006f\u0066\u0069\u006c\u0065",
        avatarUrl: "",
      },
      profileRequestId: "",
      profileRetryTimer: 0,
      profileRetryCount: 0,
      profileResolved: !1,
    },
    __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = Object.fromEntries(
      [
        "\u006e\u006f\u0074\u0069\u0063\u0065",
        "\u0073\u0065\u0061\u0072\u0063\u0068\u002d\u0066\u006f\u0072\u006d",
        "\u0073\u0065\u0061\u0072\u0063\u0068\u002d\u0069\u006e\u0070\u0075\u0074",
        "\u0066\u0065\u0065\u0064\u002d\u0074\u0069\u0074\u006c\u0065",
        "\u0072\u0065\u0073\u0075\u006c\u0074\u002d\u0063\u006f\u0075\u006e\u0074",
        "\u0076\u0069\u0064\u0065\u006f\u002d\u0067\u0072\u0069\u0064",
        "\u0077\u0061\u0074\u0063\u0068\u002d\u0073\u0074\u0061\u0067\u0065",
        "\u0077\u0061\u0074\u0063\u0068\u002d\u0070\u006c\u0061\u0079\u0065\u0072",
        "\u0077\u0061\u0074\u0063\u0068\u002d\u006c\u006f\u0061\u0064\u0069\u006e\u0067",
        "\u0077\u0061\u0074\u0063\u0068\u002d\u0063\u0065\u006e\u0074\u0065\u0072\u002d\u0070\u006c\u0061\u0079",
        "\u0077\u0061\u0074\u0063\u0068\u002d\u0074\u006f\u0067\u0067\u006c\u0065",
        "\u0077\u0061\u0074\u0063\u0068\u002d\u0074\u0069\u006d\u0065",
        "\u0077\u0061\u0074\u0063\u0068\u002d\u006d\u0075\u0074\u0065",
        "\u0077\u0061\u0074\u0063\u0068\u002d\u0063\u0061\u0070\u0074\u0069\u006f\u006e\u0073",
        "\u0077\u0061\u0074\u0063\u0068\u002d\u0063\u0061\u0070\u0074\u0069\u006f\u006e\u002d\u006f\u0070\u0074\u0069\u006f\u006e",
        "\u0077\u0061\u0074\u0063\u0068\u002d\u0066\u0075\u006c\u006c\u0073\u0063\u0072\u0065\u0065\u006e",
        "\u0077\u0061\u0074\u0063\u0068\u002d\u0070\u0072\u006f\u0067\u0072\u0065\u0073\u0073",
        "\u0077\u0061\u0074\u0063\u0068\u002d\u0074\u0069\u0074\u006c\u0065",
        "\u0077\u0061\u0074\u0063\u0068\u002d\u0063\u0072\u0065\u0061\u0074\u006f\u0072",
        "\u0077\u0061\u0074\u0063\u0068\u002d\u0076\u0069\u0064\u0065\u006f\u002d\u006d\u0065\u0074\u0061",
        "\u0077\u0061\u0074\u0063\u0068\u002d\u0063\u0068\u0061\u006e\u006e\u0065\u006c\u002d\u006d\u0061\u0072\u006b",
        "\u0077\u0061\u0074\u0063\u0068\u002d\u0073\u006f\u0075\u0072\u0063\u0065",
        "\u0077\u0061\u0074\u0063\u0068\u002d\u0064\u0065\u0073\u0063\u0072\u0069\u0070\u0074\u0069\u006f\u006e",
        "\u0077\u0061\u0074\u0063\u0068\u002d\u0072\u0065\u006c\u0061\u0074\u0065\u0064",
        "\u0073\u0068\u006f\u0072\u0074\u002d\u0073\u0074\u0061\u0067\u0065",
        "\u0073\u0068\u006f\u0072\u0074\u002d\u0070\u006c\u0061\u0079\u0065\u0072",
        "\u0073\u0068\u006f\u0072\u0074\u002d\u006c\u006f\u0061\u0064\u0069\u006e\u0067",
        "\u0073\u0068\u006f\u0072\u0074\u002d\u0063\u0065\u006e\u0074\u0065\u0072\u002d\u0070\u006c\u0061\u0079",
        "\u0073\u0068\u006f\u0072\u0074\u002d\u006d\u0075\u0074\u0065",
        "\u0073\u0068\u006f\u0072\u0074\u002d\u0063\u0061\u0070\u0074\u0069\u006f\u006e\u0073",
        "\u0073\u0068\u006f\u0072\u0074\u002d\u0066\u0075\u006c\u006c\u0073\u0063\u0072\u0065\u0065\u006e",
        "\u0073\u0068\u006f\u0072\u0074\u002d\u0070\u0072\u006f\u0067\u0072\u0065\u0073\u0073",
        "\u0073\u0068\u006f\u0072\u0074\u002d\u0074\u0069\u0074\u006c\u0065",
        "\u0073\u0068\u006f\u0072\u0074\u002d\u0063\u0072\u0065\u0061\u0074\u006f\u0072",
        "\u0070\u0072\u006f\u0066\u0069\u006c\u0065\u002d\u0062\u0075\u0074\u0074\u006f\u006e",
        "\u0070\u0072\u006f\u0066\u0069\u006c\u0065\u002d\u0061\u0076\u0061\u0074\u0061\u0072",
        "\u0073\u0068\u006f\u0072\u0074\u002d\u0073\u0065\u0061\u0072\u0063\u0068\u002d\u0066\u006f\u0072\u006d",
        "\u0073\u0068\u006f\u0072\u0074\u002d\u0073\u0065\u0061\u0072\u0063\u0068\u002d\u0069\u006e\u0070\u0075\u0074",
        "\u0073\u0068\u006f\u0072\u0074\u002d\u0066\u0065\u0065\u0064\u002d\u006c\u0061\u0062\u0065\u006c",
        "\u0073\u0068\u006f\u0072\u0074\u002d\u0070\u0072\u0065\u0066\u0065\u0072\u0065\u006e\u0063\u0065\u0073\u002d\u0073\u0074\u0061\u0074\u0075\u0073",
        "\u0073\u0068\u006f\u0072\u0074\u002d\u0068\u0069\u0064\u0065\u002d\u0063\u0068\u0061\u006e\u006e\u0065\u006c",
        "\u0073\u0068\u006f\u0072\u0074\u002d\u0064\u0069\u0073\u006c\u0069\u006b\u0065",
        "\u0073\u0068\u006f\u0072\u0074\u002d\u0072\u0065\u0073\u0065\u0074",
        "\u0073\u0068\u006f\u0072\u0074\u002d\u0068\u0065\u0061\u0072\u0074",
        "\u0073\u0068\u006f\u0072\u0074\u002d\u006d\u0065\u006e\u0075",
        "\u0073\u0068\u006f\u0072\u0074\u002d\u0065\u006d\u0070\u0074\u0079",
        "\u0073\u0068\u006f\u0072\u0074\u002d\u0065\u006d\u0070\u0074\u0079\u002d\u0074\u0069\u0074\u006c\u0065",
        "\u0073\u0068\u006f\u0072\u0074\u002d\u0072\u0065\u0074\u0072\u0079",
        "\u0077\u0061\u0074\u0063\u0068\u002d\u0071\u0075\u0061\u006c\u0069\u0074\u0079",
        "\u0077\u0061\u0074\u0063\u0068\u002d\u0065\u006e\u0067\u0069\u006e\u0065",
        "\u0077\u0061\u0074\u0063\u0068\u002d\u0073\u0065\u0074\u0074\u0069\u006e\u0067\u0073",
        "\u0077\u0061\u0074\u0063\u0068\u002d\u0073\u0065\u0074\u0074\u0069\u006e\u0067\u0073\u002d\u006d\u0065\u006e\u0075",
        "\u0077\u0061\u0074\u0063\u0068\u002d\u0073\u0070\u0065\u0065\u0064",
        "\u0077\u0061\u0074\u0063\u0068\u002d\u0076\u006f\u006c\u0075\u006d\u0065",
        "\u0077\u0061\u0074\u0063\u0068\u002d\u0073\u0065\u0074\u0074\u0069\u006e\u0067\u0073\u002d\u0063\u0061\u0070\u0074\u0069\u006f\u006e\u0073",
        "\u0077\u0061\u0074\u0063\u0068\u002d\u0072\u0065\u0077\u0069\u006e\u0064",
        "\u0077\u0061\u0074\u0063\u0068\u002d\u0066\u006f\u0072\u0077\u0061\u0072\u0064",
        "\u0077\u0061\u0074\u0063\u0068\u002d\u0073\u0070\u0065\u0065\u0064\u002d\u0069\u006e\u0064\u0069\u0063\u0061\u0074\u006f\u0072",
        "\u0077\u0061\u0074\u0063\u0068\u002d\u0076\u0069\u0065\u0077\u0073",
        "\u0077\u0061\u0074\u0063\u0068\u002d\u006c\u0069\u006b\u0065\u0073",
        "\u0077\u0061\u0074\u0063\u0068\u002d\u0063\u006f\u006d\u006d\u0065\u006e\u0074\u0073\u002d\u0063\u006f\u0075\u006e\u0074",
        "\u0077\u0061\u0074\u0063\u0068\u002d\u0074\u0061\u0062\u002d\u0063\u006f\u006d\u006d\u0065\u006e\u0074\u0073\u002d\u0063\u006f\u0075\u006e\u0074",
        "\u0077\u0061\u0074\u0063\u0068\u002d\u0063\u006f\u006d\u006d\u0065\u006e\u0074\u0073\u002d\u0073\u0074\u0061\u0074\u0075\u0073",
        "\u0077\u0061\u0074\u0063\u0068\u002d\u0063\u006f\u006d\u006d\u0065\u006e\u0074\u0073",
        "\u0077\u0061\u0074\u0063\u0068\u002d\u0074\u0072\u0061\u006e\u0073\u0063\u0072\u0069\u0070\u0074\u002d\u0073\u0074\u0061\u0074\u0075\u0073",
        "\u0077\u0061\u0074\u0063\u0068\u002d\u0074\u0072\u0061\u006e\u0073\u0063\u0072\u0069\u0070\u0074",
        "\u0063\u0068\u0061\u006e\u006e\u0065\u006c\u002d\u0062\u0061\u0063\u006b",
        "\u0063\u0068\u0061\u006e\u006e\u0065\u006c\u002d\u0070\u0072\u006f\u0066\u0069\u006c\u0065",
        "\u0063\u0068\u0061\u006e\u006e\u0065\u006c\u002d\u0061\u0076\u0061\u0074\u0061\u0072",
        "\u0063\u0068\u0061\u006e\u006e\u0065\u006c\u002d\u0074\u0069\u0074\u006c\u0065",
        "\u0063\u0068\u0061\u006e\u006e\u0065\u006c\u002d\u0068\u0061\u006e\u0064\u006c\u0065",
        "\u0063\u0068\u0061\u006e\u006e\u0065\u006c\u002d\u0064\u0065\u0073\u0063\u0072\u0069\u0070\u0074\u0069\u006f\u006e",
        "\u0063\u0068\u0061\u006e\u006e\u0065\u006c\u002d\u0073\u0075\u0062\u0073\u0063\u0072\u0069\u0062\u0065\u0072\u0073",
        "\u0063\u0068\u0061\u006e\u006e\u0065\u006c\u002d\u0076\u0069\u0064\u0065\u006f\u0073",
        "\u0063\u0068\u0061\u006e\u006e\u0065\u006c\u002d\u0073\u0074\u0061\u0074\u0075\u0073",
      ].map((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => [
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.replace(
          /-([a-z])/g,
          (
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
          ) => __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.toUpperCase(),
        ),
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03(
          `[data-${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96}]`,
        ),
      ]),
    );
  function __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238() {
    if ("\u0074\u0075\u0074\u0073\u0069" === document.documentElement.dataset.appShell) return;
    if (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) return;
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
        document.documentElement,
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = [
        "\u0064\u0065\u0066\u0061\u0075\u006c\u0074",
        "\u006d\u0069\u0064\u006e\u0069\u0067\u0068\u0074",
        "\u0072\u0075\u0062\u0079",
        "\u0065\u006d\u0065\u0072\u0061\u006c\u0064",
        "\u0073\u0061\u006b\u0075\u0072\u0061",
        "\u0066\u0072\u0065\u0073\u0068",
        "\u0068\u0061\u006c\u006c\u006f\u0077\u0065\u0065\u006e",
        "\u0063\u0075\u0073\u0074\u006f\u006d",
      ];
    try {
      const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
          localStorage.getItem("\u006e\u0079\u0078\u002e\u0074\u0068\u0065\u006d\u0065") || "\u0064\u0065\u0066\u0061\u0075\u006c\u0074",
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.includes(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          )
            ? __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
            : "\u0064\u0065\u0066\u0061\u0075\u006c\u0074";
      ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.dataset.n7xTheme =
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03),
        (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.dataset.n7xAppearance =
          "\u006c\u0069\u0067\u0068\u0074" === localStorage.getItem("\u006e\u0079\u0078\u002e\u0061\u0070\u0070\u0065\u0061\u0072\u0061\u006e\u0063\u0065") ? "\u006c\u0069\u0067\u0068\u0074" : "\u0064\u0061\u0072\u006b"),
        document.body.classList.remove(
          ...__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.map(
            (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
              `theme-${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96}`,
          ),
        ),
        document.body.classList.add(
          `theme-${__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03}`,
        ));
      const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
        localStorage.getItem("\u006e\u0079\u0078\u002e\u0063\u0075\u0073\u0074\u006f\u006d\u0054\u0068\u0065\u006d\u0065\u0043\u006f\u006c\u006f\u0072");
      "\u0063\u0075\u0073\u0074\u006f\u006d" === __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 &&
      /^#[a-f0-9]{6}$/i.test(
        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 || "",
      )
        ? __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.style.setProperty(
            "\u002d\u002d\u006e\u0037\u0078\u002d\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0062\u0061\u0073\u0065",
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
          )
        : __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.style.removeProperty(
            "\u002d\u002d\u006e\u0037\u0078\u002d\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0062\u0061\u0073\u0065",
          );
    } catch {}
  }
  ((__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchBackup =
    document.createElement("\u0062\u0075\u0074\u0074\u006f\u006e")),
    (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchBackup.type =
      "\u0062\u0075\u0074\u0074\u006f\u006e"),
    (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchBackup.textContent =
      "\u0049\u006e\u0076\u0069\u0064\u0069\u006f\u0075\u0073"),
    (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchBackup.dataset.watchBackup =
      ""),
    (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchBackup.hidden = !0),
    (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchBackup.title =
      "\u0055\u0073\u0065\u0020\u0074\u0068\u0065\u0020\u0049\u006e\u0076\u0069\u0064\u0069\u006f\u0075\u0073\u0020\u0070\u006c\u0061\u0079\u0065\u0072"),
    __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchEngine.after(
      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchBackup,
    ),
    addEventListener(
      "\u0073\u0074\u006f\u0072\u0061\u0067\u0065",
      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
        ["\u006e\u0079\u0078\u002e\u0074\u0068\u0065\u006d\u0065", "\u006e\u0079\u0078\u002e\u0061\u0070\u0070\u0065\u0061\u0072\u0061\u006e\u0063\u0065", "\u006e\u0079\u0078\u002e\u0063\u0075\u0073\u0074\u006f\u006d\u0054\u0068\u0065\u006d\u0065\u0043\u006f\u006c\u006f\u0072"].includes(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.key,
        ) && __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238();
      },
    ),
    addEventListener(
      "\u006d\u0065\u0073\u0073\u0061\u0067\u0065",
      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.source === parent &&
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.origin ===
            location.origin &&
          "\u006e\u0079\u0078\u003a\u0074\u0068\u0065\u006d\u0065\u002d\u0073\u0079\u006e\u0063" ===
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.data?.type &&
          __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238();
      },
    ));
  const __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f = (
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) =>
    `<svg aria-hidden="true"><use href="#${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96}"></use></svg>`;
  function __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = "",
  ) {
    (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
      console.info(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.notice.textContent = ""),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.notice.hidden = !0));
  }
  async function __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
  ) {
    const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = await fetch(
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      {
        credentials: "\u0073\u0061\u006d\u0065\u002d\u006f\u0072\u0069\u0067\u0069\u006e",
        headers: {
          Accept: "\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u006a\u0073\u006f\u006e",
        },
        signal: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
      },
    );
    let __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = null;
    try {
      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
        await __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.json();
    } catch {}
    if (!__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.ok)
      throw Object.assign(
        new Error(
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03?.error ||
            `Request failed (${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.status})`,
        ),
        {
          status: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.status,
        },
      );
    return __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03;
  }
  function __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = Math.max(
        0,
        Math.floor(Number(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) || 0),
      ),
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = Math.floor(
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 / 3600,
      ),
      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = Math.floor(
        (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 % 3600) / 60,
      ),
      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 % 60;
    return __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
      ? `${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c}:${String(__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03).padStart(2, "\u0030")}:${String(__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713).padStart(2, "\u0030")}`
      : `${__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03}:${String(__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713).padStart(2, "\u0030")}`;
  }
  function __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
      Number(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) || 0;
    return __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 >= 1e9
      ? `${(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 / 1e9).toFixed(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 >= 1e10 ? 0 : 1)}B views`
      : __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 >= 1e6
        ? `${(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 / 1e6).toFixed(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 >= 1e7 ? 0 : 1)}M views`
        : __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 >= 1e3
          ? `${(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 / 1e3).toFixed(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 >= 1e4 ? 0 : 1)}K views`
          : __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
            ? `${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.toLocaleString()} views`
            : "\u0059\u006f\u0075\u0054\u0075\u0062\u0065";
  }
  function __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = new Date(
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 || "",
    );
    return Number.isNaN(
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.getTime(),
    )
      ? ""
      : __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.toLocaleDateString(
          void 0,
          {
            year: "\u006e\u0075\u006d\u0065\u0072\u0069\u0063",
            month: "\u0073\u0068\u006f\u0072\u0074",
            day: "\u006e\u0075\u006d\u0065\u0072\u0069\u0063",
          },
        );
  }
  const __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d = (
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) =>
    null == __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
      ? "\u0055\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065"
      : Math.max(
          0,
          Number(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) || 0,
        ).toLocaleString();
  function __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161() {
    (clearTimeout(
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.profileRetryTimer,
    ),
      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.profileResolved = !1),
      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.profileRequestId = `nyxtube-profile-${Date.now()}-${Math.random().toString(16).slice(2)}`),
      parent.postMessage(
        {
          type: "\u006e\u0079\u0078\u003a\u006e\u0079\u0078\u0074\u0075\u0062\u0065\u002d\u0070\u0072\u006f\u0066\u0069\u006c\u0065\u002d\u0072\u0065\u0071\u0075\u0065\u0073\u0074",
          requestId:
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.profileRequestId,
        },
        location.origin,
      ),
      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.profileRetryTimer =
        setTimeout(() => {
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.profileResolved ||
            0 !==
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.profileRetryCount++ ||
            __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161();
        }, 700)));
  }
  function __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34() {
    __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.videoGrid.replaceChildren(
      ...Array.from(
        {
          length: 8,
        },
        () => {
          const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
            document.createElement("\u0061\u0072\u0074\u0069\u0063\u006c\u0065");
          return (
            (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.className =
              "\u0076\u0069\u0064\u0065\u006f\u002d\u0063\u0061\u0072\u0064\u0020\u0073\u006b\u0065\u006c\u0065\u0074\u006f\u006e"),
            (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.innerHTML =
              "\u003c\u0064\u0069\u0076\u0020\u0063\u006c\u0061\u0073\u0073\u003d\u0022\u0076\u0069\u0064\u0065\u006f\u002d\u0063\u006f\u0076\u0065\u0072\u0022\u003e\u003c\u002f\u0064\u0069\u0076\u003e\u003c\u0062\u003e\u003c\u002f\u0062\u003e\u003c\u0069\u003e\u003c\u002f\u0069\u003e"),
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
          );
        },
      ),
    );
  }
  function __d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.videos =
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      );
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = new Map(
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.catalog.map(
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => [
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        ],
      ),
    );
    if (
      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.videos.forEach(
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.id &&
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.set(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
            );
        },
      ),
      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.catalog = [
        ...__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.values(),
      ].slice(-60)),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.resultCount.textContent = `${__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.videos.length} video${1 === __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.videos.length ? "" : "\u0073"}`),
      !__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.videos.length)
    ) {
      const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
        document.createElement("\u0070");
      return (
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.className =
          "\u0065\u006d\u0070\u0074\u0079\u002d\u0067\u0072\u0069\u0064"),
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.textContent =
          "\u004e\u006f\u0020\u0070\u006c\u0061\u0079\u0061\u0062\u006c\u0065\u0020\u0076\u0069\u0064\u0065\u006f\u0073\u0020\u0077\u0065\u0072\u0065\u0020\u0066\u006f\u0075\u006e\u0064\u002e"),
        void __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.videoGrid.replaceChildren(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        )
      );
    }
    __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.videoGrid.replaceChildren(
      ...__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.videos.map(
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
          const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
            document.createElement("\u0061\u0072\u0074\u0069\u0063\u006c\u0065");
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.className =
            "\u0076\u0069\u0064\u0065\u006f\u002d\u0063\u0061\u0072\u0064";
          const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
            document.createElement("\u0062\u0075\u0074\u0074\u006f\u006e");
          ((__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.className =
            "\u0076\u0069\u0064\u0065\u006f\u002d\u0063\u006f\u0076\u0065\u0072"),
            (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.type = "\u0062\u0075\u0074\u0074\u006f\u006e"),
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.setAttribute(
              "\u0061\u0072\u0069\u0061\u002d\u006c\u0061\u0062\u0065\u006c",
              `Play ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.title || "\u0076\u0069\u0064\u0065\u006f"}`,
            ));
          const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
            document.createElement("\u0069\u006d\u0067");
          ((__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.alt = ""),
            (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.loading = "\u006c\u0061\u007a\u0079"),
            (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.referrerPolicy =
              "\u006e\u006f\u002d\u0072\u0065\u0066\u0065\u0072\u0072\u0065\u0072"),
            (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.src =
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.thumbnail || ""),
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.addEventListener(
              "\u0065\u0072\u0072\u006f\u0072",
              () => __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.remove(),
            ));
          const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
            document.createElement("\u0073\u0070\u0061\u006e");
          ((__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.className =
            "\u0066\u0061\u006c\u006c\u0062\u0061\u0063\u006b"),
            (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.innerHTML =
              __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f("\u0069\u0063\u006f\u006e\u002d\u0070\u006c\u0061\u0079")));
          const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
            document.createElement("\u0073\u0070\u0061\u006e");
          ((__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.className =
            "\u0064\u0075\u0072\u0061\u0074\u0069\u006f\u006e"),
            (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.textContent =
              __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.durationSeconds,
              )),
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.append(
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
              __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
            ),
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.addEventListener(
              "\u0063\u006c\u0069\u0063\u006b",
              () =>
                __eee561f91b58ee873b5a76df4fe070031bb64d02e0803f54276f6fdbb14b2b43(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                ),
            ));
          const __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
            document.createElement("\u0064\u0069\u0076");
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.className =
            "\u0063\u0061\u0072\u0064\u002d\u0063\u006f\u0070\u0079";
          const __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 =
            document.createElement("\u0073\u0074\u0072\u006f\u006e\u0067");
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.textContent =
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.title ||
            "\u0055\u006e\u0074\u0069\u0074\u006c\u0065\u0064\u0020\u0076\u0069\u0064\u0065\u006f";
          const __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 =
            document.createElement("\u0073\u0070\u0061\u006e");
          return (
            (__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.textContent = `${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.creator || "\u0059\u006f\u0075\u0054\u0075\u0062\u0065"} \xb7 ${__8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.viewCount)}`),
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.append(
              __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2,
              __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238,
            ),
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.append(
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
            ),
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
          );
        },
      ),
    );
  }
  let __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c = 0,
    __fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797 = null;
  async function __51e241f4e1ab21052e5631abbf6ddcfbf931e3f1ce73d61a5a8454c170b94eba(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = "",
  ) {
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
      ++__568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c;
    (__fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797?.abort(),
      (__fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797 = new AbortController()));
    const { signal: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c } =
      __fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797;
    (__467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(),
      __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34(),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.resultCount.textContent =
        "\u004c\u006f\u0061\u0064\u0069\u006e\u0067\u002e\u002e\u002e"),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.feedTitle.textContent =
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
          ? `Results for \u201c${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96}\u201d`
          : "\u0044\u0069\u0073\u0063\u006f\u0076\u0065\u0072\u0020\u0076\u0069\u0064\u0065\u006f\u0073"),
      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.videoGrid.setAttribute(
        "\u0061\u0072\u0069\u0061\u002d\u0062\u0075\u0073\u0079",
        "\u0074\u0072\u0075\u0065",
      ));
    try {
      const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
            ? `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxtube/search?q=${encodeURIComponent(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96)}&limit=20`
            : "\u002f\u0061\u0070\u0069\u002f\u006e\u0079\u0078\u0074\u0075\u0062\u0065\u002f\u0066\u0065\u0065\u0064\u003f\u006c\u0069\u006d\u0069\u0074\u003d\u0032\u0030",
        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
          await __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1(
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
          );
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 ===
        __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c &&
        __d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21(
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713?.videos,
        );
    } catch (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03) {
      if (
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.aborted ||
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 !==
          __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c
      )
        return;
      (__d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21([]),
        __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.message ||
            "\u0056\u0069\u0064\u0065\u006f\u0073\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u006c\u006f\u0061\u0064\u0065\u0064\u002e",
        ));
    } finally {
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 ===
        __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c &&
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.videoGrid.setAttribute(
          "\u0061\u0072\u0069\u0061\u002d\u0062\u0075\u0073\u0079",
          "\u0066\u0061\u006c\u0073\u0065",
        );
    }
  }
  function __319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed(
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
  ) {
    (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
      "\u0073\u0068\u006f\u0072\u0074\u0073" === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
      (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = "\u0068\u006f\u006d\u0065"),
      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.view =
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5),
      (document.body.dataset.tubeView =
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5),
      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortMenu &&
        (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortMenu.open = !1),
      Object.entries(__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a).forEach(
        ([
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
        ]) => {
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.hidden =
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 !==
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5;
        },
      ),
      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
        "\u005b\u0064\u0061\u0074\u0061\u002d\u0076\u0069\u0065\u0077\u002d\u0062\u0075\u0074\u0074\u006f\u006e\u005d",
      ).forEach((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.classList.toggle(
          "\u0061\u0063\u0074\u0069\u0076\u0065",
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.dataset.viewButton ===
            ("\u0077\u0061\u0074\u0063\u0068" === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
              ? "\u0068\u006f\u006d\u0065"
              : __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5),
        ),
      ),
      "\u0077\u0061\u0074\u0063\u0068" !== __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
        __72a91b917bacdbcddd40e0b0aed73d716d3df7426f358b72f02cb51e3ea8899d(),
      "\u0073\u0068\u006f\u0072\u0074\u0073" !== __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
        __342b0ab9499804405c03233753667f1eb72349e426fecd4a9fb2da0673b0d0c4(),
      scrollTo({
        top: 0,
        behavior:
          "\u0073\u0068\u006f\u0072\u0074\u0073" === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
            ? "\u0069\u006e\u0073\u0074\u0061\u006e\u0074"
            : "\u0073\u006d\u006f\u006f\u0074\u0068",
      }));
  }
  const __0e2b163757570b367b08da8bb23888480477d7ff7407c183459e03cb93ece46b =
    window.NyxTubePlayerCore.createDirectYoutubeApi({
      optimisticState: !0,
    });
  let __e3c7b38e84c27c3e546e6e603229d78351eaa60fabff2a12958e3b3f35427d4e;
  function __f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb() {
    return window.YT?.Player
      ? Promise.resolve(window.YT)
      : __e3c7b38e84c27c3e546e6e603229d78351eaa60fabff2a12958e3b3f35427d4e ||
          ((__e3c7b38e84c27c3e546e6e603229d78351eaa60fabff2a12958e3b3f35427d4e = new Promise(
            (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
              const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                window.onYouTubeIframeAPIReady;
              let __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = !1;
              const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = (
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                ) => {
                  __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 ||
                    ((__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = !0),
                    clearTimeout(
                      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
                    ),
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96(
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                    ));
                },
                __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a = () => {
                  (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c?.remove(),
                    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
                      __0e2b163757570b367b08da8bb23888480477d7ff7407c183459e03cb93ece46b,
                    ));
                },
                __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc = setTimeout(
                  __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
                  5e3,
                );
              ((window.onYouTubeIframeAPIReady = () => {
                (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5?.(),
                  __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
                    window.YT?.Player
                      ? window.YT
                      : __0e2b163757570b367b08da8bb23888480477d7ff7407c183459e03cb93ece46b,
                  ));
              }),
                (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                  document.createElement("\u0073\u0063\u0072\u0069\u0070\u0074")),
                (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.src =
                  "\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0077\u0077\u0077\u002e\u0079\u006f\u0075\u0074\u0075\u0062\u0065\u002e\u0063\u006f\u006d\u002f\u0069\u0066\u0072\u0061\u006d\u0065\u005f\u0061\u0070\u0069"),
                (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.async = !0),
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.addEventListener(
                  "\u0065\u0072\u0072\u006f\u0072",
                  __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
                  {
                    once: !0,
                  },
                ),
                document.head.append(
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                ));
            },
          )),
          __e3c7b38e84c27c3e546e6e603229d78351eaa60fabff2a12958e3b3f35427d4e);
  }
  function __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = !1,
  ) {
    return {
      width: "\u0031\u0030\u0030\u0025",
      height: "\u0031\u0030\u0030\u0025",
      videoId: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      host: "\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0077\u0077\u0077\u002e\u0079\u006f\u0075\u0074\u0075\u0062\u0065\u002d\u006e\u006f\u0063\u006f\u006f\u006b\u0069\u0065\u002e\u0063\u006f\u006d",
      playerVars: {
        autoplay: 1,
        controls: 0,
        disablekb: 1,
        enablejsapi: 1,
        fs: 0,
        modestbranding: 1,
        playsinline: 1,
        rel: 0,
        origin: location.origin,
        ...(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
          ? {
              mute: 1,
            }
          : {}),
      },
    };
  }
  const __c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c = (
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) =>
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
    "\u0066\u0075\u006e\u0063\u0074\u0069\u006f\u006e" ==
      typeof __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.getPlayerState;
  function __26b5b17a3f16601a1a0082d03dcd66a84af474199e7739e8e1653580cef84d82() {
    ((__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchSettingsMenu.hidden =
      !0),
      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchSettings.setAttribute(
        "\u0061\u0072\u0069\u0061\u002d\u0065\u0078\u0070\u0061\u006e\u0064\u0065\u0064",
        "\u0066\u0061\u006c\u0073\u0065",
      ));
  }
  async function __8d22331976a8113666a0908c81e73aa73428cab2801e9b29ace9b37721493fda() {
    const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = String(
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchVideo?.channelId ||
        "",
    ).trim();
    if (
      /^UC[A-Za-z0-9_-]{22}$/.test(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      )
    ) {
      (__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0063\u0068\u0061\u006e\u006e\u0065\u006c"),
        (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.channelStatus.textContent =
          "\u004c\u006f\u0061\u0064\u0069\u006e\u0067\u0020\u0070\u0072\u006f\u0066\u0069\u006c\u0065\u002e\u002e\u002e"),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.channelVideos.replaceChildren());
      try {
        const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
          await __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1(
            `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxtube/channel?id=${encodeURIComponent(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96)}`,
          );
        if (
          "\u0063\u0068\u0061\u006e\u006e\u0065\u006c" !== __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.view ||
          String(
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchVideo
              ?.channelId || "",
          ) !== __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
        )
          return;
        const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5?.channel || {};
        ((__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.channelTitle.textContent =
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.title ||
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchVideo?.creator ||
          "\u0059\u006f\u0075\u0054\u0075\u0062\u0065\u0020\u0063\u0068\u0061\u006e\u006e\u0065\u006c"),
          (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.channelHandle.textContent =
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.handle || "\u0059\u006f\u0075\u0054\u0075\u0062\u0065"),
          (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.channelDescription.textContent =
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.description ||
            "\u0054\u0068\u0069\u0073\u0020\u0063\u0072\u0065\u0061\u0074\u006f\u0072\u0020\u0068\u0061\u0073\u0020\u006e\u006f\u0074\u0020\u0073\u0068\u0061\u0072\u0065\u0064\u0020\u0061\u0020\u0063\u0068\u0061\u006e\u006e\u0065\u006c\u0020\u0064\u0065\u0073\u0063\u0072\u0069\u0070\u0074\u0069\u006f\u006e\u002e"),
          (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.channelSubscribers.textContent =
            __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d(
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.subscriberCount,
            )),
          (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.channelVideos.textContent =
            __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d(
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.videoCount,
            )));
        const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = String(
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.avatarUrl ||
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchVideo
              ?.channelAvatar ||
            "",
        ).trim();
        if (
          (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.channelAvatar.replaceChildren(),
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713)
        ) {
          const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
            document.createElement("\u0069\u006d\u0067");
          ((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.alt = ""),
            (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.src =
              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713),
            (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.referrerPolicy =
              "\u006e\u006f\u002d\u0072\u0065\u0066\u0065\u0072\u0072\u0065\u0072"),
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.addEventListener(
              "\u0065\u0072\u0072\u006f\u0072",
              () => {
                __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.channelAvatar.textContent =
                  __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.channelTitle.textContent
                    .slice(0, 1)
                    .toUpperCase();
              },
              {
                once: !0,
              },
            ),
            __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.channelAvatar.append(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
            ));
        } else
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.channelAvatar.textContent =
            __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.channelTitle.textContent
              .slice(0, 1)
              .toUpperCase();
        const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c(
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5?.videos,
          );
        ((__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.channelStatus.textContent =
          __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.length
            ? `${__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.length} recent videos`
            : "\u004e\u006f\u0020\u0070\u0075\u0062\u006c\u0069\u0063\u0020\u0076\u0069\u0064\u0065\u006f\u0073\u0020\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065"),
          (function (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
            ((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              )),
              __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.channelVideos.replaceChildren(
                ...__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.map(
                  (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
                    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                      document.createElement("\u0061\u0072\u0074\u0069\u0063\u006c\u0065");
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.className =
                      "\u0076\u0069\u0064\u0065\u006f\u002d\u0063\u0061\u0072\u0064";
                    const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                      document.createElement("\u0062\u0075\u0074\u0074\u006f\u006e");
                    ((__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.className =
                      "\u0076\u0069\u0064\u0065\u006f\u002d\u0063\u006f\u0076\u0065\u0072"),
                      (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.type =
                        "\u0062\u0075\u0074\u0074\u006f\u006e"),
                      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.setAttribute(
                        "\u0061\u0072\u0069\u0061\u002d\u006c\u0061\u0062\u0065\u006c",
                        `Play ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.title || "\u0076\u0069\u0064\u0065\u006f"}`,
                      ));
                    const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                      document.createElement("\u0069\u006d\u0067");
                    ((__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.alt = ""),
                      (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.loading =
                        "\u006c\u0061\u007a\u0079"),
                      (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.referrerPolicy =
                        "\u006e\u006f\u002d\u0072\u0065\u0066\u0065\u0072\u0072\u0065\u0072"),
                      (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.src =
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.thumbnail ||
                        ""),
                      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.addEventListener(
                        "\u0065\u0072\u0072\u006f\u0072",
                        () =>
                          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.remove(),
                      ));
                    const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
                      document.createElement("\u0073\u0070\u0061\u006e");
                    ((__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.className =
                      "\u0066\u0061\u006c\u006c\u0062\u0061\u0063\u006b"),
                      (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.innerHTML =
                        __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f(
                          "\u0069\u0063\u006f\u006e\u002d\u0070\u006c\u0061\u0079",
                        )));
                    const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
                      document.createElement("\u0073\u0070\u0061\u006e");
                    ((__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.className =
                      "\u0064\u0075\u0072\u0061\u0074\u0069\u006f\u006e"),
                      (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.textContent =
                        __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6(
                          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.durationSeconds,
                        )),
                      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.append(
                        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
                        __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
                      ),
                      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.addEventListener(
                        "\u0063\u006c\u0069\u0063\u006b",
                        () =>
                          __eee561f91b58ee873b5a76df4fe070031bb64d02e0803f54276f6fdbb14b2b43(
                            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                          ),
                      ));
                    const __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
                      document.createElement("\u0064\u0069\u0076");
                    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.className =
                      "\u0063\u0061\u0072\u0064\u002d\u0063\u006f\u0070\u0079";
                    const __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 =
                      document.createElement("\u0073\u0074\u0072\u006f\u006e\u0067");
                    __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.textContent =
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.title ||
                      "\u0055\u006e\u0074\u0069\u0074\u006c\u0065\u0064\u0020\u0076\u0069\u0064\u0065\u006f";
                    const __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 =
                      document.createElement("\u0073\u0070\u0061\u006e");
                    return (
                      (__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.textContent = `${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.creator || "\u0059\u006f\u0075\u0054\u0075\u0062\u0065"} \xb7 ${__8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.viewCount)}`),
                      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.append(
                        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2,
                        __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238,
                      ),
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.append(
                        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
                      ),
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
                    );
                  },
                ),
              ));
          })(__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a));
      } catch (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) {
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.channelStatus.textContent =
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.message ||
          "\u0054\u0068\u0069\u0073\u0020\u0063\u0068\u0061\u006e\u006e\u0065\u006c\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u006c\u006f\u0061\u0064\u0065\u0064\u0020\u0072\u0069\u0067\u0068\u0074\u0020\u006e\u006f\u0077\u002e";
      }
    }
  }
  async function __eee561f91b58ee873b5a76df4fe070031bb64d02e0803f54276f6fdbb14b2b43(
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
    {
      recoveryMessage: __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = "",
    } = {},
  ) {
    if (!__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c?.id) return;
    if (
      !__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5(
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
      )
    )
      return (
        __319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0068\u006f\u006d\u0065"),
        void __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(
          "\u0054\u0068\u0069\u0073\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0069\u0073\u0020\u006e\u006f\u0074\u0020\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u0020\u0069\u006e\u0020\u0044\u0072\u006f\u0070\u0054\u0075\u0062\u0065\u002e",
        )
      );
    (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchVideo &&
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchVideo.id !==
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.id &&
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchTrail.push(
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchVideo,
      ),
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchTrail.length > 50 &&
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchTrail.shift(),
      __72a91b917bacdbcddd40e0b0aed73d716d3df7426f358b72f02cb51e3ea8899d());
    const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchGeneration;
    let __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a = !1;
    if (
      ((__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchVideo =
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c),
      __319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0077\u0061\u0074\u0063\u0068"),
      __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
      ),
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.detailsPending)
    ) {
      ((__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchTitle.textContent =
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.title ||
        "\u004c\u006f\u0061\u0064\u0069\u006e\u0067\u0020\u0076\u0069\u0064\u0065\u006f"),
        (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchDescription.textContent =
          "\u004c\u006f\u0061\u0064\u0069\u006e\u0067\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0064\u0065\u0074\u0061\u0069\u006c\u0073\u002e\u002e\u002e"),
        (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchLoading.hidden =
          !1),
        (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchLoading.querySelector(
          "\u0073\u0074\u0072\u006f\u006e\u0067",
        ).textContent = "\u004c\u006f\u0061\u0064\u0069\u006e\u0067\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0064\u0065\u0074\u0061\u0069\u006c\u0073\u002e\u002e\u002e"),
        (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchViews.textContent =
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchLikes.textContent =
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchCommentsCount.textContent =
            "\u004c\u006f\u0061\u0064\u0069\u006e\u0067\u002e\u002e\u002e"),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchComments.replaceChildren(),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchTranscript.replaceChildren(),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchRelated.replaceChildren());
      try {
        const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
          await __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1(
            `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxtube/video?id=${encodeURIComponent(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.id)}`,
          );
        if (
          "\u0077\u0061\u0074\u0063\u0068" !== __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.view ||
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchGeneration !==
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713
        )
          return;
        const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.videos?.[0];
        if (
          !__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 ||
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.id !==
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.id
        )
          throw new Error("\u0054\u0068\u0061\u0074\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0069\u0073\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u0020\u006f\u0072\u0020\u0072\u0065\u0073\u0074\u0072\u0069\u0063\u0074\u0065\u0064\u002e");
        if (
          !__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5(
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
          )
        )
          return (
            __319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0068\u006f\u006d\u0065"),
            void __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(
              "\u0054\u0068\u0069\u0073\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0069\u0073\u0020\u006e\u006f\u0074\u0020\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u0020\u0069\u006e\u0020\u0044\u0072\u006f\u0070\u0054\u0075\u0062\u0065\u002e",
            )
          );
        ((__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03),
          (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.catalog =
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.catalog.map(
              (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id ===
                __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.id
                  ? __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03
                  : __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
            )));
      } catch (__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238) {
        if (
          "\u0077\u0061\u0074\u0063\u0068" !== __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.view ||
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchGeneration !==
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713
        )
          return;
        if (
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ||
          !(
            __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.status >= 500 ||
            __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 instanceof TypeError
          )
        )
          return (
            (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchLoading.hidden =
              !0),
            void __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(
              __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.message ||
                "\u0056\u0069\u0064\u0065\u006f\u0020\u0064\u0065\u0074\u0061\u0069\u006c\u0073\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u006c\u006f\u0061\u0064\u0065\u0064\u002e",
            )
          );
        ((__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
          !__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.nativeAvailable &&
          Boolean(
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.invidiousEmbedOrigin,
          )),
          (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
            "\u0056\u0069\u0064\u0065\u006f\u0020\u0064\u0065\u0074\u0061\u0069\u006c\u0073\u0020\u0061\u0072\u0065\u0020\u0074\u0065\u006d\u0070\u006f\u0072\u0061\u0072\u0069\u006c\u0079\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u002e\u0020\u0054\u0072\u0079\u0069\u006e\u0067\u0020\u0070\u006c\u0061\u0079\u0062\u0061\u0063\u006b\u002e"));
      }
    }
    (__3e4c1d9f3f3cfdbff7c2a891a8b2f7642dd9345ff1939b5e342a606f29c606e2({
      cancel: !0,
    }),
      clearTimeout(
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchRecoveryTimer,
      ),
      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchRecoveryTimer = 0),
      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchVideo =
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c),
      __319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0077\u0061\u0074\u0063\u0068"),
      __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
      ),
      __26b5b17a3f16601a1a0082d03dcd66a84af474199e7739e8e1653580cef84d82(),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchTitle.textContent =
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.title ||
        "\u0055\u006e\u0074\u0069\u0074\u006c\u0065\u0064\u0020\u0076\u0069\u0064\u0065\u006f"),
      (function (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
        const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
            String(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.creator ||
                "\u0059\u006f\u0075\u0054\u0075\u0062\u0065",
            ).trim() || "\u0059\u006f\u0075\u0054\u0075\u0062\u0065",
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = (function (
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchVideo,
          ) {
            const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = String(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.channelId || "",
            ).trim();
            return /^UC[A-Za-z0-9_-]{22}$/.test(
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
            )
              ? `https://www.youtube.com/channel/${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5}`
              : "";
          })(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96);
        ((__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchCreator.textContent =
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5),
          (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchVideoMeta.textContent =
            [
              __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.viewCount,
              ),
              __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.publishedAt,
              ),
            ]
              .filter(Boolean)
              .join("\u0020\u00b7\u0020")),
          (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchCreator.disabled =
            !__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c),
          (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchChannelMark.disabled =
            !__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c),
          (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchCreator.title =
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
              ? `Open ${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5}'s channel`
              : "\u0043\u0068\u0061\u006e\u006e\u0065\u006c\u0020\u0070\u0061\u0067\u0065\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065"),
          (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchChannelMark.title =
            __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchCreator.title),
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchCreator.setAttribute(
            "\u0061\u0072\u0069\u0061\u002d\u006c\u0061\u0062\u0065\u006c",
            __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchCreator.title,
          ),
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchChannelMark.setAttribute(
            "\u0061\u0072\u0069\u0061\u002d\u006c\u0061\u0062\u0065\u006c",
            __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchCreator.title,
          ));
        const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = () => {
            (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchChannelMark.replaceChildren(),
              (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchChannelMark.textContent =
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
                  .slice(0, 1)
                  .toUpperCase() || "\u0059"));
          },
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = String(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.channelAvatar || "",
          ).trim();
        if (!__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713)
          return void __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03();
        const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
          document.createElement("\u0069\u006d\u0067");
        ((__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.alt = ""),
          (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.loading = "\u0065\u0061\u0067\u0065\u0072"),
          (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.referrerPolicy =
            "\u006e\u006f\u002d\u0072\u0065\u0066\u0065\u0072\u0072\u0065\u0072"),
          (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.src =
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713),
          __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.addEventListener(
            "\u0065\u0072\u0072\u006f\u0072",
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
            {
              once: !0,
            },
          ),
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchChannelMark.replaceChildren(
            __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
          ));
      })(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchDescription.textContent =
        String(
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.description ||
            "\u004e\u006f\u0020\u0064\u0065\u0073\u0063\u0072\u0069\u0070\u0074\u0069\u006f\u006e\u0020\u0077\u0061\u0073\u0020\u0070\u0072\u006f\u0076\u0069\u0064\u0065\u0064\u0020\u0066\u006f\u0072\u0020\u0074\u0068\u0069\u0073\u0020\u0076\u0069\u0064\u0065\u006f\u002e",
        )),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchViews.textContent =
        __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d(
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.viewCount,
        )),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchLikes.textContent =
        __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d(
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.likeCount,
        )),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchCommentsCount.textContent =
        __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d(
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.commentCount,
        )),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchTabCommentsCount.textContent =
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.commentCount
          ? `(${__94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.commentCount)})`
          : ""),
      __e89c06b9c8c138ab668108b5f84a303333ad66d3886346a0eb785642be515763("\u0064\u0065\u0073\u0063\u0072\u0069\u0070\u0074\u0069\u006f\u006e"),
      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchComments.replaceChildren(),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchCommentsStatus.hidden =
        !1),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchCommentsStatus.textContent =
        "\u004c\u006f\u0061\u0064\u0069\u006e\u0067\u0020\u0063\u006f\u006d\u006d\u0065\u006e\u0074\u0073\u002e\u002e\u002e"),
      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchTranscript.replaceChildren(),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchTranscriptStatus.hidden =
        !1),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchTranscriptStatus.textContent =
        "\u004c\u006f\u0061\u0064\u0069\u006e\u0067\u0020\u0074\u0072\u0061\u006e\u0073\u0063\u0072\u0069\u0070\u0074\u002e\u002e\u002e"),
      (async function (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
        const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
          ++__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchCommunityRequestId;
        try {
          const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
            await __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1(
              `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxtube/community?id=${encodeURIComponent(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id)}`,
            );
          if (
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 !==
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchCommunityRequestId ||
            "\u0077\u0061\u0074\u0063\u0068" !== __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.view ||
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchVideo?.id !==
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id
          )
            return;
          (__b1beae86029a4f3a21d0d992ca0d2036eaaaae8e45994cac42b42d390c73e329(
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.comments,
          ),
            __3024b81c189fd2c8b2a9d40c5083c0a67b5bc98a00d6e0dc336123d41b1a0c7f(
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.transcript,
            ));
        } catch (__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238) {
          if (
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 !==
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchCommunityRequestId ||
            "\u0077\u0061\u0074\u0063\u0068" !== __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.view ||
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchVideo?.id !==
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id
          )
            return;
          (__b1beae86029a4f3a21d0d992ca0d2036eaaaae8e45994cac42b42d390c73e329({
            available: !1,
            message:
              __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.message ||
              "\u0043\u006f\u006d\u006d\u0065\u006e\u0074\u0073\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u006c\u006f\u0061\u0064\u0065\u0064\u0020\u0072\u0069\u0067\u0068\u0074\u0020\u006e\u006f\u0077\u002e",
          }),
            __3024b81c189fd2c8b2a9d40c5083c0a67b5bc98a00d6e0dc336123d41b1a0c7f({
              available: !1,
              message: "\u0054\u0068\u0065\u0020\u0070\u0075\u0062\u006c\u0069\u0063\u0020\u0074\u0072\u0061\u006e\u0073\u0063\u0072\u0069\u0070\u0074\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u006c\u006f\u0061\u0064\u0065\u0064\u0020\u0072\u0069\u0067\u0068\u0074\u0020\u006e\u006f\u0077\u002e",
            }));
        }
      })(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c),
      (function (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
        const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
          __fee7105fc4d51af0577a7b27c6ef4e0cf85c90de87e72e9d1a6579f318300a72(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          );
        if (!__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.length) {
          const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
            document.createElement("\u0070");
          return (
            (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.className =
              "\u0072\u0065\u006c\u0061\u0074\u0065\u0064\u002d\u0065\u006d\u0070\u0074\u0079"),
            (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.textContent =
              "\u004d\u006f\u0072\u0065\u0020\u0076\u0069\u0064\u0065\u006f\u0073\u0020\u0077\u0069\u006c\u006c\u0020\u0061\u0070\u0070\u0065\u0061\u0072\u0020\u0068\u0065\u0072\u0065\u0020\u0061\u0073\u0020\u0079\u006f\u0075\u0020\u0062\u0072\u006f\u0077\u0073\u0065\u002e"),
            void __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchRelated.replaceChildren(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
            )
          );
        }
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchRelated.replaceChildren(
          ...__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.map(
            (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
              const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                document.createElement("\u0062\u0075\u0074\u0074\u006f\u006e");
              ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.type = "\u0062\u0075\u0074\u0074\u006f\u006e"),
                (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.className =
                  "\u0072\u0065\u006c\u0061\u0074\u0065\u0064\u002d\u0063\u0061\u0072\u0064"));
              const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                document.createElement("\u0069\u006d\u0067");
              ((__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.alt = ""),
                (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.loading =
                  "\u006c\u0061\u007a\u0079"),
                (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.referrerPolicy =
                  "\u006e\u006f\u002d\u0072\u0065\u0066\u0065\u0072\u0072\u0065\u0072"),
                (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.src =
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.thumbnail ||
                  ""),
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.addEventListener(
                  "\u0065\u0072\u0072\u006f\u0072",
                  () => __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.remove(),
                ));
              const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                document.createElement("\u0073\u0070\u0061\u006e");
              ((__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.className =
                "\u0072\u0065\u006c\u0061\u0074\u0065\u0064\u002d\u0064\u0075\u0072\u0061\u0074\u0069\u006f\u006e"),
                (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.textContent =
                  __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6(
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.durationSeconds,
                  )));
              const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
                document.createElement("\u0073\u0070\u0061\u006e");
              ((__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.className =
                "\u0072\u0065\u006c\u0061\u0074\u0065\u0064\u002d\u0074\u0068\u0075\u006d\u0062"),
                __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.append(
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                  __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                ));
              const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
                document.createElement("\u0073\u0070\u0061\u006e");
              __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.className =
                "\u0072\u0065\u006c\u0061\u0074\u0065\u0064\u002d\u0063\u006f\u0070\u0079";
              const __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
                document.createElement("\u0073\u0074\u0072\u006f\u006e\u0067");
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.textContent =
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.title ||
                "\u0055\u006e\u0074\u0069\u0074\u006c\u0065\u0064\u0020\u0076\u0069\u0064\u0065\u006f";
              const __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 =
                document.createElement("\u0073\u006d\u0061\u006c\u006c");
              return (
                (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.textContent = `${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.creator || "\u0059\u006f\u0075\u0054\u0075\u0062\u0065"} \xb7 ${__8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.viewCount)}`),
                __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.append(
                  __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
                  __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2,
                ),
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.append(
                  __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
                  __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
                ),
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.addEventListener(
                  "\u0063\u006c\u0069\u0063\u006b",
                  () =>
                    __eee561f91b58ee873b5a76df4fe070031bb64d02e0803f54276f6fdbb14b2b43(
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                    ),
                ),
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
              );
            },
          ),
        );
      })(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchSource.href =
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.sourceUrl ||
        `https://www.youtube.com/watch?v=${encodeURIComponent(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.id)}`),
      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchCaptions = !1),
      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchCaptions.setAttribute(
        "\u0061\u0072\u0069\u0061\u002d\u0070\u0072\u0065\u0073\u0073\u0065\u0064",
        "\u0066\u0061\u006c\u0073\u0065",
      ),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchCaptionOption.querySelector(
        "\u0073\u0070\u0061\u006e",
      ).textContent = "\u004f\u0066\u0066"),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchLoading.hidden = !1),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchCenterPlay.hidden =
        !0),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchProgress.value =
        "\u0030"),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchTime.textContent = `0:00 / ${__32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.durationSeconds)}`),
      __5a2fa72065e6201b186de750f00e9aef5fdba5eabe9611c30108d7e663e502b7(
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
        !1,
        !1,
        null,
        __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a ? "\u0069\u006e\u0076\u0069\u0064\u0069\u006f\u0075\u0073" : "",
      ).catch((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
        ((__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchLoading.hidden =
          !0),
          __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.message ||
              "\u0054\u0068\u0065\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0070\u006c\u0061\u0079\u0065\u0072\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0073\u0074\u0061\u0072\u0074\u0065\u0064\u002e",
          ));
      }));
  }
  function __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6(
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = !1,
  ) {
    ((__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchEngine.value =
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
        ? "\u0069\u006e\u0076\u0069\u0064\u0069\u006f\u0075\u0073"
        : __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
          ? "\u006e\u0061\u0074\u0069\u0076\u0065"
          : "\u0079\u006f\u0075\u0074\u0075\u0062\u0065"),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchEngine.hidden =
        !__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.nativeAvailable &&
        !__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c),
      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchBackup.setAttribute(
        "\u0061\u0072\u0069\u0061\u002d\u0070\u0072\u0065\u0073\u0073\u0065\u0064",
        String(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c),
      ),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchEngine.textContent =
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
          ? "\u0053\u0077\u0069\u0074\u0063\u0068\u0020\u0074\u006f\u0020\u0065\u006d\u0062\u0065\u0064\u0064\u0065\u0064"
          : __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.nativeAvailable
            ? __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
              ? "\u0053\u0077\u0069\u0074\u0063\u0068\u0020\u0074\u006f\u0020\u0044\u0072\u006f\u0070\u0054\u0075\u0062\u0065"
              : "\u0053\u0077\u0069\u0074\u0063\u0068\u0020\u0074\u006f\u0020\u004e\u0037\u0058\u0037\u0055\u0042\u0033"
            : "\u0053\u0077\u0069\u0074\u0063\u0068\u0020\u0074\u006f\u0020\u0059\u006f\u0075\u0054\u0075\u0062\u0065"));
  }
  async function __5a2fa72065e6201b186de750f00e9aef5fdba5eabe9611c30108d7e663e502b7(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = !1,
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = !1,
    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = null,
    __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a = "",
    __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 = !1,
  ) {
    __3e4c1d9f3f3cfdbff7c2a891a8b2f7642dd9345ff1939b5e342a606f29c606e2({
      cancel: !0,
    });
    const __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1 =
        ++__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchGeneration,
      __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe = Boolean(
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.invidiousEmbedOrigin &&
          !__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
          ("\u0069\u006e\u0076\u0069\u0064\u0069\u006f\u0075\u0073" === __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a ||
            (!__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c &&
              "\u0069\u006e\u0076\u0069\u0064\u0069\u006f\u0075\u0073" ===
                __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.preferredPlayer)),
      ),
      __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a =
        !__8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe &&
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.nativeAvailable &&
        "\u006e\u0061\u0074\u0069\u0076\u0065" ===
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.preferredPlayer &&
        !__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
        !__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c;
    if (
      (__9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6(
        __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a,
        __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe,
      ),
      clearInterval(__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchTimer),
      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchTimer = 0),
      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchStage.classList.toggle(
        "\u0069\u006e\u0076\u0069\u0064\u0069\u006f\u0075\u0073\u002d\u0070\u006c\u0061\u0079\u0065\u0072",
        __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe,
      ),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchQuality.closest(
        "\u006c\u0061\u0062\u0065\u006c",
      ).hidden = __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchCaptionOption.hidden =
        __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe),
      (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03(
        "\u005b\u0064\u0061\u0074\u0061\u002d\u0073\u0068\u006f\u0072\u0074\u0063\u0075\u0074\u002d\u0068\u0065\u006c\u0070\u002d\u006f\u0070\u0065\u006e\u005d",
      ).hidden = __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe),
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer?.destroy?.(),
      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer = null),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchLoading.hidden = !1),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchLoading.querySelector(
        "\u0073\u0074\u0072\u006f\u006e\u0067",
      ).textContent = __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a
        ? "\u0050\u0072\u0065\u0070\u0061\u0072\u0069\u006e\u0067\u0020\u0076\u0069\u0064\u0065\u006f\u002e\u002e\u002e"
        : "\u004c\u006f\u0061\u0064\u0069\u006e\u0067\u0020\u0076\u0069\u0064\u0065\u006f"),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchQuality.disabled =
        !0),
      __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe)
    ) {
      if (
        !/^[A-Za-z0-9_-]{11}$/.test(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
        )
      )
        throw new Error("\u0043\u0068\u006f\u006f\u0073\u0065\u0020\u0061\u0020\u0076\u0061\u006c\u0069\u0064\u0020\u0076\u0069\u0064\u0065\u006f\u002e");
      if (
        window.NyxInvidiousPlayer &&
        !__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238
      )
        return (
          (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer =
            window.NyxInvidiousPlayer(
              __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchPlayer,
              {
                id: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
                restore: __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 || {},
                onLoading: (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
                  __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1 ===
                    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchGeneration &&
                    (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchLoading.hidden =
                      !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96);
                },
                onFailure: (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) => {
                  __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1 ===
                    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchGeneration &&
                    "\u0077\u0061\u0074\u0063\u0068" ===
                      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.view &&
                    __5a2fa72065e6201b186de750f00e9aef5fdba5eabe9611c30108d7e663e502b7(
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                      !1,
                      !0,
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                      "\u0069\u006e\u0076\u0069\u0064\u0069\u006f\u0075\u0073",
                      !0,
                    );
                },
              },
            )),
          void (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchCenterPlay.hidden =
            !0)
        );
      const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = new URL(
          "\u002f\u0065\u006d\u0062\u0065\u0064\u002f" + __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.invidiousEmbedOrigin,
        ),
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = {
          local: "\u0074\u0072\u0075\u0065",
          autoplay: __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713?.paused
            ? "\u0030"
            : "\u0031",
          quality: "\u0064\u0061\u0073\u0068",
          controls: "\u0031",
          continue: "\u0030",
          hl: "\u0065\u006e\u002d\u0055\u0053",
          start: String(
            Math.max(
              0,
              Number(__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713?.time) || 0,
            ),
          ),
          volume: String(
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713?.muted
              ? 0
              : Math.max(
                  0,
                  Math.min(
                    100,
                    Number(
                      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713?.volume ??
                        100,
                    ),
                  ),
                ),
          ),
          speed: String(
            Math.max(
              0.25,
              Math.min(
                2,
                Number(__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713?.rate) ||
                  1,
              ),
            ),
          ),
        };
      for (const [
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
      ] of Object.entries(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c))
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.searchParams.set(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
        );
      const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
        document.createElement("\u0069\u0066\u0072\u0061\u006d\u0065");
      return (
        (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.title =
          "\u0049\u006e\u0076\u0069\u0064\u0069\u006f\u0075\u0073\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0070\u006c\u0061\u0079\u0065\u0072"),
        (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.src =
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.href),
        (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.allow =
          "\u0061\u0075\u0074\u006f\u0070\u006c\u0061\u0079\u003b\u0020\u0066\u0075\u006c\u006c\u0073\u0063\u0072\u0065\u0065\u006e\u003b\u0020\u0070\u0069\u0063\u0074\u0075\u0072\u0065\u002d\u0069\u006e\u002d\u0070\u0069\u0063\u0074\u0075\u0072\u0065"),
        (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.allowFullscreen = !0),
        (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.referrerPolicy =
          "\u0073\u0074\u0072\u0069\u0063\u0074\u002d\u006f\u0072\u0069\u0067\u0069\u006e\u002d\u0077\u0068\u0065\u006e\u002d\u0063\u0072\u006f\u0073\u0073\u002d\u006f\u0072\u0069\u0067\u0069\u006e"),
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.addEventListener(
          "\u006c\u006f\u0061\u0064",
          () => {
            __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1 ===
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchGeneration &&
              (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchLoading.hidden =
                !0);
          },
          {
            once: !0,
          },
        ),
        (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer = {
          isInvidious: !0,
          destroy: () =>
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.remove(),
        }),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchPlayer.replaceChildren(
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
        ),
        void (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchCenterPlay.hidden =
          !0)
      );
    }
    const __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d =
      __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a
        ? window.NyxNativePlayer
        : __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
          ? __0e2b163757570b367b08da8bb23888480477d7ff7407c183459e03cb93ece46b
          : await __f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb();
    if (
      __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1 !==
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchGeneration
    )
      return;
    if (
      "\u0077\u0061\u0074\u0063\u0068" !== __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.view ||
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchVideo?.id !==
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id
    )
      return;
    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer?.destroy?.();
    const __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161 =
      __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
      );
    ((__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.expectedDuration =
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.durationSeconds),
      (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.quality =
        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713?.quality),
      (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.startTime =
        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713?.time),
      (__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.events = {
        onCaptionError: (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
          __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1 ===
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchGeneration &&
            ((__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchCaptions =
              !1),
            __cbe3e169b82a066efb87cecf43ee78a46c91fe23c1c18420de9d26beb1a60ea4(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target,
              !1,
              __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchCaptions,
              __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchCaptionOption,
            ),
            (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchSettingsCaptions.value =
              "\u006f\u0066\u0066"),
            __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.message,
            ));
        },
        onBuffering: (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
          __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1 ===
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchGeneration &&
            ((__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchLoading.hidden =
              !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.data),
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.data
              ? ((__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchLoading.querySelector(
                  "\u0073\u0074\u0072\u006f\u006e\u0067",
                ).textContent = "\u004c\u006f\u0061\u0064\u0069\u006e\u0067\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0063\u0068\u0075\u006e\u006b\u0073\u002e\u002e\u002e"),
                (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchCenterPlay.hidden =
                  !0))
              : (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchCenterPlay.hidden =
                  2 !==
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target.getPlayerState()));
        },
        onReady: (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) => {
          __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1 ===
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchGeneration &&
            ((__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchLoading.hidden =
              !__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.isNative ||
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.video
                .readyState >= 3),
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 &&
              (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.seekTo(
                __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.time,
              ),
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.setVolume?.(
                __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.volume,
              ),
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.setPlaybackRate?.(
                __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.rate,
              ),
              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.muted &&
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.mute()),
            (function (
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
            ) {
              let __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = [];
              try {
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.getAvailablePlaybackRates?.() ||
                  [];
              } catch {
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = [];
              }
              ((__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = [
                ...new Set(
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
                    .map(Number)
                    .filter(
                      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                        Number.isFinite(
                          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                        ) && __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 > 0,
                    ),
                ),
              ].sort(
                (
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                ) =>
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 -
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
              )),
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.length ||
                  (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = [1]),
                __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchSpeed.replaceChildren(
                  ...__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.map(
                    (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
                      const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                        document.createElement("\u006f\u0070\u0074\u0069\u006f\u006e");
                      return (
                        (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.value =
                          String(
                            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                          )),
                        (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.textContent =
                          1 === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
                            ? "\u004e\u006f\u0072\u006d\u0061\u006c"
                            : `${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96}x`),
                        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
                      );
                    },
                  ),
                ));
              let __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = 1;
              try {
                __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
                  Number(
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.getPlaybackRate?.(),
                  ) || 1;
              } catch {
                __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = 1;
              }
              __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchSpeed.value =
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.includes(
                  __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
                )
                  ? String(__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713)
                  : String(
                      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.includes(1)
                        ? 1
                        : __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c[0],
                    );
              try {
                __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchVolume.value =
                  String(
                    Math.max(
                      0,
                      Math.min(
                        100,
                        Number(
                          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.getVolume?.() ??
                            100,
                        ),
                      ),
                    ),
                  );
              } catch {
                __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchVolume.value =
                  "\u0031\u0030\u0030";
              }
              ((__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchSettingsCaptions.disabled =
                !__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5?.captions),
                (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchCaptions.disabled =
                  !__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5?.captions),
                (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchCaptionOption.disabled =
                  !__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5?.captions),
                __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchQuality.replaceChildren(
                  ...(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.isNative
                    ? __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.qualities
                    : ["\u0061\u0075\u0074\u006f"]
                  ).map((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
                    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                      document.createElement("\u006f\u0070\u0074\u0069\u006f\u006e");
                    return (
                      (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.value =
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
                      (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.textContent =
                        "\u0061\u0075\u0074\u006f" ===
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
                          ? "\u0041\u0075\u0074\u006f"
                          : `${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96}p`),
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
                    );
                  }),
                ),
                (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchQuality.disabled =
                  !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.isNative),
                (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchQuality.value =
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.isNative
                    ? String(
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.quality,
                      )
                    : "\u0061\u0075\u0074\u006f"),
                (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchQuality.title =
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.isNative
                    ? "\u0050\u006c\u0061\u0079\u0062\u0061\u0063\u006b\u0020\u0071\u0075\u0061\u006c\u0069\u0074\u0079"
                    : "\u0059\u006f\u0075\u0054\u0075\u0062\u0065\u0020\u0073\u0065\u006c\u0065\u0063\u0074\u0073\u0020\u0070\u006c\u0061\u0079\u0062\u0061\u0063\u006b\u0020\u0071\u0075\u0061\u006c\u0069\u0074\u0079\u0020\u0061\u0075\u0074\u006f\u006d\u0061\u0074\u0069\u0063\u0061\u006c\u006c\u0079"),
                __9e67bd6d2c58c818774bdf2b58306d9429f686ca64b2f6656ad6058ef07bfee6(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.isNative,
                ),
                (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03(
                  "\u005b\u0064\u0061\u0074\u0061\u002d\u0077\u0061\u0074\u0063\u0068\u002d\u0073\u0065\u0074\u0074\u0069\u006e\u0067\u0073\u002d\u0071\u0075\u0061\u006c\u0069\u0074\u0079\u005d",
                ).textContent =
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.isNative
                    ? `${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.quality}p`
                    : "\u0041\u0075\u0074\u006f"),
                (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchSettingsCaptions.title =
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5?.captions
                    ? ""
                    : "\u0043\u0061\u0070\u0074\u0069\u006f\u006e\u0073\u0020\u0061\u0072\u0065\u0020\u006e\u006f\u0074\u0020\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u0020\u0066\u006f\u0072\u0020\u0074\u0068\u0069\u0073\u0020\u0076\u0069\u0064\u0065\u006f"),
                (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchSettingsCaptions.value =
                  __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchCaptions &&
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5?.captions
                    ? "\u006f\u006e"
                    : "\u006f\u0066\u0066"));
            })(
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target,
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
            ),
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchCaptions &&
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.captions &&
              __cbe3e169b82a066efb87cecf43ee78a46c91fe23c1c18420de9d26beb1a60ea4(
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target,
                !0,
                __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchCaptions,
                __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchCaptionOption,
              ),
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713?.paused
              ? (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.pauseVideo(),
                (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchCenterPlay.hidden =
                  !1))
              : __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.playVideo(),
            __d2aab0836d3c8a8d85c1c08050ef020cbdd6d0e9d50ae0173328a5d5cd612701(),
            clearInterval(
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchTimer,
            ),
            (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchTimer =
              setInterval(() => {
                if (
                  !__c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c(
                    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer,
                  )
                )
                  return;
                const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
                  __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchStage.contains(
                    document.activeElement,
                  ) &&
                  document.activeElement !==
                    __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchStage &&
                  document.activeElement?.matches("\u003a\u0066\u006f\u0063\u0075\u0073\u002d\u0076\u0069\u0073\u0069\u0062\u006c\u0065");
                1 !==
                  __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer.getPlayerState() ||
                __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer
                  .buffering ||
                !__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchLoading
                  .hidden ||
                !__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2
                  .watchSettingsMenu.hidden ||
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ||
                __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchStage.querySelector(
                  "\u002e\u0077\u0061\u0074\u0063\u0068\u002d\u0063\u006f\u006e\u0074\u0072\u006f\u006c\u0073\u0020\u003a\u0061\u0063\u0074\u0069\u0076\u0065",
                ) ||
                __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchSpacePressed
                  ? __d2aab0836d3c8a8d85c1c08050ef020cbdd6d0e9d50ae0173328a5d5cd612701()
                  : __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchStage.classList.toggle(
                      "\u0063\u006f\u006e\u0074\u0072\u006f\u006c\u0073\u002d\u0069\u0064\u006c\u0065",
                      Date.now() -
                        __b769cfef6d38d8b555019ba9dbf653f1b85fbdc3ec8f99db5a9368ed7a200661 >=
                        3e3,
                    );
                const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                    Number(
                      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer.getCurrentTime?.(),
                    ) || 0,
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                    Number(
                      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer.getDuration?.(),
                    ) ||
                    Number(
                      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchVideo
                        ?.durationSeconds,
                    ) ||
                    0;
                ((__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchTime.textContent = `${__32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5)} / ${__32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c)}`),
                  (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchProgress.value =
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
                      ? String(
                          Math.round(
                            (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 /
                              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c) *
                              1e3,
                          ),
                        )
                      : "\u0030"));
              }, 250)));
        },
        onStateChange: (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
          if (
            __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1 !==
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchGeneration
          )
            return;
          const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.data ===
              __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d.PlayerState
                .PLAYING,
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.data ===
              __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d.PlayerState.PAUSED;
          (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
            (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchLoading.hidden =
              !0),
            (function (
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
            ) {
              ((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.innerHTML =
                __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f(
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
                    ? "\u0069\u0063\u006f\u006e\u002d\u0070\u0061\u0075\u0073\u0065"
                    : "\u0069\u0063\u006f\u006e\u002d\u0070\u006c\u0061\u0079",
                )),
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.setAttribute(
                  "\u0061\u0072\u0069\u0061\u002d\u006c\u0061\u0062\u0065\u006c",
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
                    ? "\u0050\u0061\u0075\u0073\u0065"
                    : "\u0050\u006c\u0061\u0079",
                ));
            })(
              __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchToggle,
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
            ),
            (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchCenterPlay.hidden =
              !__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c ||
              Boolean(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target.buffering,
              )));
        },
        onError: (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) => {
          __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1 ===
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchGeneration &&
            "\u0077\u0061\u0074\u0063\u0068" === __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.view &&
            (__1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a
              ? (__467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(
                  __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.invidiousEmbedOrigin
                    ? "\u004f\u0070\u0065\u006e\u0069\u006e\u0067\u0020\u0074\u0068\u0065\u0020\u0049\u006e\u0076\u0069\u0064\u0069\u006f\u0075\u0073\u0020\u0070\u006c\u0061\u0079\u0065\u0072\u002e\u0020\u0055\u0073\u0065\u0020\u0074\u0068\u0065\u0020\u0063\u006f\u006e\u0074\u0072\u006f\u006c\u0073\u0020\u0069\u006e\u0073\u0069\u0064\u0065\u0020\u0074\u0068\u0065\u0020\u0076\u0069\u0064\u0065\u006f\u002e"
                    : "\u004e\u0061\u0074\u0069\u0076\u0065\u0020\u0070\u006c\u0061\u0079\u0062\u0061\u0063\u006b\u0020\u0069\u0073\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u002e\u0020\u004f\u0070\u0065\u006e\u0069\u006e\u0067\u0020\u0074\u0068\u0065\u0020\u0059\u006f\u0075\u0054\u0075\u0062\u0065\u0020\u0070\u006c\u0061\u0079\u0065\u0072\u002e",
                ),
                __5a2fa72065e6201b186de750f00e9aef5fdba5eabe9611c30108d7e663e502b7(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                  !1,
                  !0,
                  {
                    time:
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.getCurrentTime() ||
                      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713?.time ||
                      0,
                    volume:
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.getVolume(),
                    rate: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.getPlaybackRate(),
                    muted:
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.isMuted(),
                    paused:
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target.getCurrentTime() >
                      0
                        ? __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.target
                            .video.paused
                        : (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713?.paused ??
                          !1),
                  },
                  __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.invidiousEmbedOrigin
                    ? "\u0069\u006e\u0076\u0069\u0064\u0069\u006f\u0075\u0073"
                    : "",
                ).catch(() =>
                  __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(
                    "\u0054\u0068\u0065\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0070\u006c\u0061\u0079\u0065\u0072\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0073\u0074\u0061\u0072\u0074\u002e",
                  ),
                ))
              : (function (
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                ) {
                  if (
                    "\u0077\u0061\u0074\u0063\u0068" !==
                      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.view ||
                    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchVideo
                      ?.id !== __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id
                  )
                    return;
                  if (
                    (__3e4c1d9f3f3cfdbff7c2a891a8b2f7642dd9345ff1939b5e342a606f29c606e2({
                      cancel: !0,
                    }),
                    (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchLoading.hidden =
                      !0),
                    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.invidiousEmbedOrigin &&
                      (5 === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 ||
                        153 === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5))
                  )
                    return (
                      __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(
                        "\u004f\u0070\u0065\u006e\u0069\u006e\u0067\u0020\u0074\u0068\u0065\u0020\u0049\u006e\u0076\u0069\u0064\u0069\u006f\u0075\u0073\u0020\u0070\u006c\u0061\u0079\u0065\u0072\u002e\u0020\u0055\u0073\u0065\u0020\u0074\u0068\u0065\u0020\u0063\u006f\u006e\u0074\u0072\u006f\u006c\u0073\u0020\u0069\u006e\u0073\u0069\u0064\u0065\u0020\u0074\u0068\u0065\u0020\u0076\u0069\u0064\u0065\u006f\u002e",
                      ),
                      void __5a2fa72065e6201b186de750f00e9aef5fdba5eabe9611c30108d7e663e502b7(
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                        !1,
                        !0,
                        null,
                        "\u0069\u006e\u0076\u0069\u0064\u0069\u006f\u0075\u0073",
                      ).catch(
                        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                          __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(
                            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.message,
                          ),
                      )
                    );
                  if (
                    !__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c &&
                    (5 === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 ||
                      153 === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5)
                  )
                    return (
                      __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(
                        "\u0052\u0065\u0074\u0072\u0079\u0069\u006e\u0067\u0020\u0074\u0068\u0069\u0073\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0077\u0069\u0074\u0068\u0020\u0074\u0068\u0065\u0020\u0043\u0068\u0072\u006f\u006d\u0065\u0062\u006f\u006f\u006b\u002d\u0063\u006f\u006d\u0070\u0061\u0074\u0069\u0062\u006c\u0065\u0020\u0070\u006c\u0061\u0079\u0065\u0072\u002e\u002e\u002e",
                      ),
                      void __5a2fa72065e6201b186de750f00e9aef5fdba5eabe9611c30108d7e663e502b7(
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                        !0,
                      ).catch(
                        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                          __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(
                            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.message ||
                              "\u0054\u0068\u0065\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0070\u006c\u0061\u0079\u0065\u0072\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0072\u0065\u0073\u0074\u0061\u0072\u0074\u0065\u0064\u002e",
                          ),
                      )
                    );
                  __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.failedVideoIds.add(
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
                  );
                  const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                    __fee7105fc4d51af0577a7b27c6ef4e0cf85c90de87e72e9d1a6579f318300a72(
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                      1,
                    )[0];
                  if (!__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03)
                    return void __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(
                      "\u0059\u006f\u0075\u0054\u0075\u0062\u0065\u0020\u0073\u0061\u0079\u0073\u0020\u0074\u0068\u0069\u0073\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0069\u0073\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u0020\u006f\u0072\u0020\u0072\u0065\u0073\u0074\u0072\u0069\u0063\u0074\u0065\u0064\u0020\u006f\u006e\u0020\u0074\u0068\u0069\u0073\u0020\u0043\u0068\u0072\u006f\u006d\u0065\u0062\u006f\u006f\u006b\u002e\u0020\u0043\u0068\u006f\u006f\u0073\u0065\u0020\u0061\u006e\u006f\u0074\u0068\u0065\u0072\u0020\u0076\u0069\u0064\u0065\u006f\u002e",
                    );
                  const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
                    "\u0054\u0068\u0061\u0074\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0069\u0073\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u0020\u006f\u0072\u0020\u0072\u0065\u0073\u0074\u0072\u0069\u0063\u0074\u0065\u0064\u0020\u006f\u006e\u0020\u0074\u0068\u0069\u0073\u0020\u0043\u0068\u0072\u006f\u006d\u0065\u0062\u006f\u006f\u006b\u002e\u0020\u004c\u006f\u0061\u0064\u0069\u006e\u0067\u0020\u0061\u006e\u006f\u0074\u0068\u0065\u0072\u0020\u0070\u006c\u0061\u0079\u0061\u0062\u006c\u0065\u0020\u0076\u0069\u0064\u0065\u006f\u002e\u002e\u002e";
                  (__467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(
                    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
                  ),
                    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer?.destroy?.(),
                    (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer =
                      null),
                    __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchPlayer.replaceChildren(),
                    (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchRecoveryTimer =
                      setTimeout(
                        () =>
                          __eee561f91b58ee873b5a76df4fe070031bb64d02e0803f54276f6fdbb14b2b43(
                            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                            {
                              recoveryMessage:
                                __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
                            },
                          ),
                        500,
                      )));
                })(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                  Number(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5?.data),
                  __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d ===
                    __0e2b163757570b367b08da8bb23888480477d7ff7407c183459e03cb93ece46b,
                ));
        },
      }),
      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer =
        new __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d.Player(
          (function (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.replaceChildren();
            const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
              document.createElement("\u0064\u0069\u0076");
            return (
              (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.id = `nyxtube-watch-${Date.now()}`),
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.append(
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
              ),
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.id
            );
          })(__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchPlayer),
          __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161,
        )));
  }
  function __fee7105fc4d51af0577a7b27c6ef4e0cf85c90de87e72e9d1a6579f318300a72(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = 10,
  ) {
    const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = new Set();
    return [
      ...__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.catalog,
      ...__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shorts,
    ]
      .filter(
        (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c) =>
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5(
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
          ) &&
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c?.id &&
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.id !==
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id &&
          !__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.failedVideoIds.has(
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.id,
          ) &&
          !__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.has(
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.id,
          ) &&
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.add(
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.id,
          ),
      )
      .sort(
        (
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
        ) =>
          __ed46735a7066924b61d2076cc7666ca73533276eec44191d16b834970c65bf6d(
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          ) -
          __ed46735a7066924b61d2076cc7666ca73533276eec44191d16b834970c65bf6d(
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          ),
      )
      .slice(0, __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c);
  }
  function __e89c06b9c8c138ab668108b5f84a303333ad66d3886346a0eb785642be515763(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
      "\u005b\u0064\u0061\u0074\u0061\u002d\u0077\u0061\u0074\u0063\u0068\u002d\u0069\u006e\u0066\u006f\u002d\u0074\u0061\u0062\u005d",
    ).forEach((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) => {
      const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.dataset.watchInfoTab ===
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96;
      (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.classList.toggle(
        "\u0061\u0063\u0074\u0069\u0076\u0065",
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
      ),
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.setAttribute(
          "\u0061\u0072\u0069\u0061\u002d\u0073\u0065\u006c\u0065\u0063\u0074\u0065\u0064",
          String(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c),
        ));
    }),
      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
        "\u005b\u0064\u0061\u0074\u0061\u002d\u0077\u0061\u0074\u0063\u0068\u002d\u0069\u006e\u0066\u006f\u002d\u0070\u0061\u006e\u0065\u006c\u005d",
      ).forEach((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) => {
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.hidden =
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.dataset
            .watchInfoPanel !== __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96;
      }));
  }
  function __b1beae86029a4f3a21d0d992ca0d2036eaaaae8e45994cac42b42d390c73e329(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = {},
  ) {
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = Array.isArray(
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.comments,
    )
      ? __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.comments
      : [];
    (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchComments.replaceChildren(
      ...__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.map(
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
          const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
            document.createElement("\u0061\u0072\u0074\u0069\u0063\u006c\u0065");
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.className =
            "\u0077\u0061\u0074\u0063\u0068\u002d\u0063\u006f\u006d\u006d\u0065\u006e\u0074";
          const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
            document.createElement("\u0073\u0070\u0061\u006e");
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.className =
            "\u0063\u006f\u006d\u006d\u0065\u006e\u0074\u002d\u0061\u0076\u0061\u0074\u0061\u0072";
          const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = () => {
            (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.replaceChildren(),
              (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.textContent =
                String(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.author || "\u0059",
                )
                  .trim()
                  .slice(0, 1)
                  .toUpperCase() || "\u0059"));
          };
          if (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.avatarUrl) {
            const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
              document.createElement("\u0069\u006d\u0067");
            ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.alt = ""),
              (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.loading = "\u006c\u0061\u007a\u0079"),
              (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.referrerPolicy =
                "\u006e\u006f\u002d\u0072\u0065\u0066\u0065\u0072\u0072\u0065\u0072"),
              (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.src =
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.avatarUrl),
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.addEventListener(
                "\u0065\u0072\u0072\u006f\u0072",
                __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                {
                  once: !0,
                },
              ),
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.append(
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
              ));
          } else __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03();
          const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
            document.createElement("\u0064\u0069\u0076");
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.className =
            "\u0063\u006f\u006d\u006d\u0065\u006e\u0074\u002d\u0063\u006f\u006e\u0074\u0065\u006e\u0074";
          const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
            document.createElement("\u0064\u0069\u0076");
          __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.className =
            "\u0063\u006f\u006d\u006d\u0065\u006e\u0074\u002d\u0068\u0065\u0061\u0064\u0065\u0072";
          const __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
            document.createElement("\u0073\u0074\u0072\u006f\u006e\u0067");
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.textContent =
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.author ||
            "\u0059\u006f\u0075\u0054\u0075\u0062\u0065\u0020\u0076\u0069\u0065\u0077\u0065\u0072";
          const __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 =
            document.createElement("\u0074\u0069\u006d\u0065");
          ((__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.textContent =
            __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.publishedAt,
            )),
            __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.append(
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
              __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2,
            ));
          const __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 =
            document.createElement("\u0070");
          __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.textContent = String(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.text || "",
          );
          const __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f =
              document.createElement("\u0073\u006d\u0061\u006c\u006c"),
            __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 = [];
          return (
            Number(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.likeCount) >
              0 &&
              __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239.push(
                `${__94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.likeCount)} like${1 === Number(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.likeCount) ? "" : "\u0073"}`,
              ),
            Number(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.replyCount) >
              0 &&
              __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239.push(
                `${__94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.replyCount)} repl${1 === Number(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.replyCount) ? "\u0079" : "\u0069\u0065\u0073"}`,
              ),
            (__16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f.textContent =
              __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239.join("\u0020\u00b7\u0020")),
            (__16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f.hidden =
              !__467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239.length),
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.append(
              __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
              __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238,
              __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f,
            ),
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.append(
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
            ),
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
          );
        },
      ),
    ),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchCommentsStatus.hidden =
        Boolean(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.available &&
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.length,
        )),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchCommentsStatus.textContent =
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.available
          ? "\u004e\u006f\u0020\u0063\u006f\u006d\u006d\u0065\u006e\u0074\u0073\u0020\u0079\u0065\u0074\u002e"
          : String(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.message ||
                "\u0043\u006f\u006d\u006d\u0065\u006e\u0074\u0073\u0020\u0061\u0072\u0065\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u0020\u0066\u006f\u0072\u0020\u0074\u0068\u0069\u0073\u0020\u0076\u0069\u0064\u0065\u006f\u002e",
            )));
  }
  function __3024b81c189fd2c8b2a9d40c5083c0a67b5bc98a00d6e0dc336123d41b1a0c7f(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = {},
  ) {
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = Array.isArray(
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.segments,
    )
      ? __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.segments
      : [];
    (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchTranscript.replaceChildren(
      ...__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.map(
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
          const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
            document.createElement("\u0062\u0075\u0074\u0074\u006f\u006e");
          ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.type = "\u0062\u0075\u0074\u0074\u006f\u006e"),
            (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.className =
              "\u0074\u0072\u0061\u006e\u0073\u0063\u0072\u0069\u0070\u0074\u002d\u006c\u0069\u006e\u0065"));
          const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
            document.createElement("\u0074\u0069\u006d\u0065");
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.textContent =
            __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.startSeconds,
            );
          const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
            document.createElement("\u0073\u0070\u0061\u006e");
          return (
            (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.textContent =
              String(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.text || "",
              )),
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.append(
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
            ),
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.addEventListener(
              "\u0063\u006c\u0069\u0063\u006b",
              () => {
                __c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c(
                  __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer,
                ) &&
                  __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer.seekTo(
                    Math.max(
                      0,
                      Number(
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.startSeconds,
                      ) || 0,
                    ),
                    !0,
                  );
              },
            ),
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
          );
        },
      ),
    ),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchTranscriptStatus.hidden =
        !1),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchTranscriptStatus.textContent =
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.available
          ? `${String(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.language || "\u0054\u0072\u0061\u006e\u0073\u0063\u0072\u0069\u0070\u0074")} \xb7 ${__94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.length)} lines`
          : String(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.message ||
                "\u0041\u0020\u0070\u0075\u0062\u006c\u0069\u0063\u0020\u0074\u0072\u0061\u006e\u0073\u0063\u0072\u0069\u0070\u0074\u0020\u0069\u0073\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u0020\u0066\u006f\u0072\u0020\u0074\u0068\u0069\u0073\u0020\u0076\u0069\u0064\u0065\u006f\u002e",
            )));
  }
  function __ed46735a7066924b61d2076cc7666ca73533276eec44191d16b834970c65bf6d(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
  ) {
    const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
        String(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.creator || "",
        ).toLowerCase() ===
        String(
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.creator || "",
        ).toLowerCase()
          ? 20
          : 0,
      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = new Set(
        String(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.title || "")
          .toLowerCase()
          .match(/[a-z0-9]{4,}/g) || [],
      );
    return (
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c +
      (
        String(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.title || "")
          .toLowerCase()
          .match(/[a-z0-9]{4,}/g) || []
      ).filter((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.has(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        ),
      ).length
    );
  }
  let __b769cfef6d38d8b555019ba9dbf653f1b85fbdc3ec8f99db5a9368ed7a200661 = Date.now();
  function __d2aab0836d3c8a8d85c1c08050ef020cbdd6d0e9d50ae0173328a5d5cd612701() {
    ((__b769cfef6d38d8b555019ba9dbf653f1b85fbdc3ec8f99db5a9368ed7a200661 = Date.now()),
      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchStage.classList.remove(
        "\u0063\u006f\u006e\u0074\u0072\u006f\u006c\u0073\u002d\u0069\u0064\u006c\u0065",
      ));
  }
  for (const __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b of [
    "\u0070\u006f\u0069\u006e\u0074\u0065\u0072\u006d\u006f\u0076\u0065",
    "\u0070\u006f\u0069\u006e\u0074\u0065\u0072\u0064\u006f\u0077\u006e",
    "\u006b\u0065\u0079\u0064\u006f\u0077\u006e",
    "\u0066\u006f\u0063\u0075\u0073\u0069\u006e",
  ])
    __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchStage.addEventListener(
      __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b,
      __d2aab0836d3c8a8d85c1c08050ef020cbdd6d0e9d50ae0173328a5d5cd612701,
    );
  function __72a91b917bacdbcddd40e0b0aed73d716d3df7426f358b72f02cb51e3ea8899d() {
    (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchStage.classList.remove(
      "\u006d\u0069\u006e\u0069\u002d\u0070\u006c\u0061\u0079\u0065\u0072",
      "\u0069\u006e\u0076\u0069\u0064\u0069\u006f\u0075\u0073\u002d\u0070\u006c\u0061\u0079\u0065\u0072",
    ),
      __d2aab0836d3c8a8d85c1c08050ef020cbdd6d0e9d50ae0173328a5d5cd612701(),
      ++__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchGeneration,
      clearInterval(__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchTimer),
      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchTimer = 0),
      clearTimeout(
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchRecoveryTimer,
      ),
      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchRecoveryTimer = 0),
      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchCommunityRequestId += 1),
      __3e4c1d9f3f3cfdbff7c2a891a8b2f7642dd9345ff1939b5e342a606f29c606e2({
        cancel: !0,
      }),
      __26b5b17a3f16601a1a0082d03dcd66a84af474199e7739e8e1653580cef84d82(),
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer?.destroy?.(),
      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer = null),
      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchPlayer.replaceChildren());
  }
  function __18ea2355b700bc3da376566033246086363e448236dec54f8a83a790ea161960() {
    __c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c(
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer,
    ) &&
      (1 ===
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer.getPlayerState()
        ? __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer.pauseVideo()
        : __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer.playVideo());
  }
  function __99a0af1660cfe58affc3ff899430bd5f7454d63db4b4a7a04e0a92268413e998() {
    if (
      !__c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c(
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer,
      )
    )
      return;
    const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = Boolean(
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer.isMuted?.(),
    );
    (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
      ? __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer.unMute()
      : __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer.mute(),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchMute.innerHTML =
        __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
            ? "\u0069\u0063\u006f\u006e\u002d\u0076\u006f\u006c\u0075\u006d\u0065"
            : "\u0069\u0063\u006f\u006e\u002d\u006d\u0075\u0074\u0065\u0064",
        )),
      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchMute.setAttribute(
        "\u0061\u0072\u0069\u0061\u002d\u006c\u0061\u0062\u0065\u006c",
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ? "\u004d\u0075\u0074\u0065" : "\u0055\u006e\u006d\u0075\u0074\u0065",
      ));
  }
  function __9d433778c84bb56320ac2926429ccbbc9e33af617b171cf71422a4a874f28af1(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    if (
      !__c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c(
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer,
      )
    )
      return;
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
        Number(
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer.getCurrentTime?.(),
        ) || 0,
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
        Number(
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer.getDuration?.(),
        ) ||
        Number(
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchVideo
            ?.durationSeconds,
        ) ||
        0;
    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer.seekTo(
      Math.max(
        0,
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
          ? Math.min(
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 +
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
            )
          : __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 +
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      ),
      !0,
    );
  }
  function __153775183a87af39b37d038f0f2d9a41fb6f191283bb242f26b279c138ab61ea(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = "\u006b\u0065\u0079\u0062\u006f\u0061\u0072\u0064",
  ) {
    !__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchSpacePressed &&
      __c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c(
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer,
      ) &&
      ((__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchHoldSource =
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchSpacePressed = !0),
      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchSpaceHeld = !1),
      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchSpaceWasPlaying =
        1 ===
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer.getPlayerState()),
      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchSpaceRateChanged =
        !1),
      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchSpaceTimer =
        setTimeout(() => {
          if (
            ((__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchSpaceTimer = 0),
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchSpacePressed &&
              "\u0077\u0061\u0074\u0063\u0068" === __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.view &&
              __c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c(
                __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer,
              ))
          ) {
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchSpaceHeld = !0;
            try {
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchSpacePreviousRate =
                Number(
                  __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer.getPlaybackRate?.(),
                ) || 1;
            } catch {
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchSpacePreviousRate = 1;
            }
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchSpaceWasPlaying ||
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer.playVideo();
            try {
              "\u0066\u0075\u006e\u0063\u0074\u0069\u006f\u006e" ==
                typeof __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc
                  .watchPlayer.setPlaybackRate &&
                (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer.setPlaybackRate(
                  2,
                ),
                (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchSpaceRateChanged =
                  !0),
                (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchSpeedIndicator.hidden =
                  !1));
            } catch {
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchSpaceRateChanged =
                !1;
            }
          }
        }, 350)));
  }
  function __3e4c1d9f3f3cfdbff7c2a891a8b2f7642dd9345ff1939b5e342a606f29c606e2({
    cancel: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = !1,
  } = {}) {
    if (
      !__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchSpacePressed &&
      !__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchSpaceTimer
    )
      return;
    (clearTimeout(
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchSpaceTimer,
    ),
      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchSpaceTimer = 0));
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchSpaceHeld;
    if (
      ((__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchSpacePressed = !1),
      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchSpaceHeld = !1),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchSpeedIndicator.hidden =
        !0),
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5)
    ) {
      if (
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchSpaceRateChanged &&
        __c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c(
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer,
        )
      )
        try {
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer.setPlaybackRate?.(
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchSpacePreviousRate,
          );
        } catch {}
      !__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchSpaceWasPlaying &&
        __c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c(
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer,
        ) &&
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer.pauseVideo();
    } else
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ||
        "\u0077\u0061\u0074\u0063\u0068" !== __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.view ||
        __18ea2355b700bc3da376566033246086363e448236dec54f8a83a790ea161960();
    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchSpaceRateChanged = !1;
  }
  function __cbe3e169b82a066efb87cecf43ee78a46c91fe23c1c18420de9d26beb1a60ea4(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
  ) {
    if (
      !__c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      )
    )
      return !1;
    if (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.isNative)
      return (
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.setCaptions(
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        ),
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.setAttribute(
          "\u0061\u0072\u0069\u0061\u002d\u0070\u0072\u0065\u0073\u0073\u0065\u0064",
          String(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5),
        ),
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 &&
          (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.querySelector(
            "\u0073\u0070\u0061\u006e",
          ).textContent = __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
            ? "\u004f\u006e"
            : "\u004f\u0066\u0066"),
        !0
      );
    try {
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
        ? __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.loadModule?.(
            "\u0063\u0061\u0070\u0074\u0069\u006f\u006e\u0073",
          )
        : __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.unloadModule?.(
            "\u0063\u0061\u0070\u0074\u0069\u006f\u006e\u0073",
          );
    } catch {
      return !1;
    }
    return (
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.setAttribute(
        "\u0061\u0072\u0069\u0061\u002d\u0070\u0072\u0065\u0073\u0073\u0065\u0064",
        String(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5),
      ),
      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 &&
        (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.querySelector(
          "\u0073\u0070\u0061\u006e",
        ).textContent = __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
          ? "\u004f\u006e"
          : "\u004f\u0066\u0066"),
      !0
    );
  }
  function __a1966e2585746c7ebc63b861729ff89ab0d7f7629da72c73cf99b96ee03569f3(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchCaptions;
    ((__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchCaptions = Boolean(
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    )),
      __cbe3e169b82a066efb87cecf43ee78a46c91fe23c1c18420de9d26beb1a60ea4(
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer,
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchCaptions,
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchCaptions,
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchCaptionOption,
      ) ||
        (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchCaptions =
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchSettingsCaptions.value =
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchCaptions
          ? "\u006f\u006e"
          : "\u006f\u0066\u0066"));
  }
  function __eeec32ecce69bf87a9c1e4365b9269e4b204338d020b7994a786b662b2349454(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.requestFullscreen ||
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.webkitRequestFullscreen;
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
        .call(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96)
        .catch?.(() => {});
  }
  let __ee3d9515c09e714138b80a54a85f68ec8856f651c5192183a3ad6d1bab431d90 = 1,
    __ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417 = !0,
    __75b9960186525ac5ab965efcdf7d072a44d9c0e2ac9c36c91c0dfeac448fa6e5 = null,
    __037421764e2f5e073ebcd4a8e7220f715740a5cbe2e9ed2d93431a54ae8de6ec = 0,
    __5285a5bbd045fe6fc6ebb94cc24c149a1dcccd7cfeb2f5de9c7a211dad268afa = "",
    __7db994cf70023f7fa1ee37d64774e922da1a209d4cfac7b44a0d185f968b0a3b = 0,
    __d6e8ffff761bb3491b619880e5d917d6df582d5c67b95c1869c0a525aa0a908c = "",
    __96269fbafcaf1e59a066bbe22f9ec441fbf0ff3e38084b904ada564b445561a8 = "",
    __a27fb158ddcbc635df4f915211d5c8e5d6a8c04827fe1281526c34bc41e8fb8b = "\u0064\u0069\u0073\u0063\u006f\u0076\u0065\u0072",
    __98e34204ec1ca6b1775902c926bc767b7ad3918ad6edaa9782e93aed4f2bfc13 = 0,
    __ee07b2c1f5ae5a68cf1a38fc099e028ffbe3e7bdd9c0223fa1ec952465f7acbf = null,
    __34e3a593d4cfcfa83223ee3c74b7c8a0109cc4a95b5017b64b39376d978be837 = null;
  const __a03f49e95f91224af5b136a0e23dcb87a6dadeb3f9d7f2a0a1bc0a0ffa3f7f6a =
    ("\u0074\u0075\u0074\u0073\u0069" === document.documentElement.dataset.appShell ? "\u0074\u0075\u0074\u0073\u0069" : "\u006e\u0079\u0078") +
    "\u002e\u0073\u0068\u006f\u0072\u0074\u0073\u002d\u0070\u0072\u0065\u0066\u0065\u0072\u0065\u006e\u0063\u0065\u0073\u002e\u0076\u0031";
  let __66e401afb5509cbf5c4bb5624e18bcf319933c46cb9b07bc6c7f86affaa05b78 = new Set(),
    __3abefec312ee58c7fe62ed56861d8dd221822df7f4adf805e11d7b6e7cea0012 = new Set(),
    __8e04d8c4780a41135c77f04bcb15f46b8963c2621ff8ab409d683183f5eef2d5 = new Map();
  try {
    const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = JSON.parse(
      localStorage.getItem(__a03f49e95f91224af5b136a0e23dcb87a6dadeb3f9d7f2a0a1bc0a0ffa3f7f6a) ||
        "\u007b\u007d",
    );
    ((__66e401afb5509cbf5c4bb5624e18bcf319933c46cb9b07bc6c7f86affaa05b78 = new Set(
      (Array.isArray(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.videos)
        ? __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.videos
        : []
      )
        .filter((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
          /^[A-Za-z0-9_-]{11}$/.test(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          ),
        )
        .slice(-500),
    )),
      (__3abefec312ee58c7fe62ed56861d8dd221822df7f4adf805e11d7b6e7cea0012 = new Set(
        (Array.isArray(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.channels)
          ? __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.channels
          : []
        )
          .filter((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
            /^UC[A-Za-z0-9_-]{22}$/.test(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
            ),
          )
          .slice(-100),
      )),
      (__8e04d8c4780a41135c77f04bcb15f46b8963c2621ff8ab409d683183f5eef2d5 = new Map(
        (Array.isArray(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.likes)
          ? __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.likes
          : []
        )
          .filter(
            (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
              /^[A-Za-z0-9_-]{11}$/.test(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
              ) &&
              /^UC[A-Za-z0-9_-]{22}$/.test(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.channelId,
              ),
          )
          .slice(-500)
          .map((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => [
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
            {
              id: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
              channelId:
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.channelId,
            },
          ]),
      )));
  } catch {}
  const __386438b87474d2f2a7f9bcafb4095c3f466d499afdc8b7dc19046a9c96d5b10e = (
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) =>
    !__66e401afb5509cbf5c4bb5624e18bcf319933c46cb9b07bc6c7f86affaa05b78.has(
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
    ) &&
    !__3abefec312ee58c7fe62ed56861d8dd221822df7f4adf805e11d7b6e7cea0012.has(
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.channelId,
    );
  function __3c2959d287db485aed16e708f7fdaff1019aeded6f9f9b016e6d19d5627c9211() {
    const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = new Map();
    let __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = 0;
    for (const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c of __8e04d8c4780a41135c77f04bcb15f46b8963c2621ff8ab409d683183f5eef2d5.values()) {
      if (
        !__386438b87474d2f2a7f9bcafb4095c3f466d499afdc8b7dc19046a9c96d5b10e(
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
        )
      )
        continue;
      const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.get(
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.channelId,
        ) || {
          count: 0,
          order: 0,
        };
      (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.count++,
        (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.order =
          ++__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5),
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.set(
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.channelId,
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
        ));
    }
    return [...__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96]
      .sort(
        (
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        ) =>
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5[1].count -
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96[1].count ||
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5[1].order -
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96[1].order,
      )
      .slice(0, 2)
      .map(
        ([__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96]) =>
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      );
  }
  function __8a634624ecf034ed097cd5e7c1a9e014c7efed1bf92024f2b4af50aa6eb48c94(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc
      .shorts[__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortIndex],
  ) {
    if (!__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortHeart) return;
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = Boolean(
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
        __8e04d8c4780a41135c77f04bcb15f46b8963c2621ff8ab409d683183f5eef2d5.has(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
        ),
    );
    ((__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortHeart.disabled =
      !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.channelId),
      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortHeart.setAttribute(
        "\u0061\u0072\u0069\u0061\u002d\u0070\u0072\u0065\u0073\u0073\u0065\u0064",
        String(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5),
      ),
      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortHeart.setAttribute(
        "\u0061\u0072\u0069\u0061\u002d\u006c\u0061\u0062\u0065\u006c",
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
          ? "\u0055\u006e\u006c\u0069\u006b\u0065\u0020\u0074\u0068\u0069\u0073\u0020\u0053\u0068\u006f\u0072\u0074"
          : "\u004c\u0069\u006b\u0065\u0020\u0074\u0068\u0069\u0073\u0020\u0053\u0068\u006f\u0072\u0074",
      ),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortHeart.querySelector(
        "\u0073\u0070\u0061\u006e",
      ).textContent = __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
        ? "\u004c\u0069\u006b\u0065\u0064"
        : "\u004c\u0069\u006b\u0065"));
  }
  function __8846e27b07ac021b6c32fc8bdc0c411f01ff3e6d19c3048355784ff30aa3c433() {
    if (
      !__96269fbafcaf1e59a066bbe22f9ec441fbf0ff3e38084b904ada564b445561a8 &&
      "\u0064\u0069\u0073\u0063\u006f\u0076\u0065\u0072" === __a27fb158ddcbc635df4f915211d5c8e5d6a8c04827fe1281526c34bc41e8fb8b
    ) {
      (__7db994cf70023f7fa1ee37d64774e922da1a209d4cfac7b44a0d185f968b0a3b++,
        __98e34204ec1ca6b1775902c926bc767b7ad3918ad6edaa9782e93aed4f2bfc13++,
        __ee07b2c1f5ae5a68cf1a38fc099e028ffbe3e7bdd9c0223fa1ec952465f7acbf?.abort(),
        (__75b9960186525ac5ab965efcdf7d072a44d9c0e2ac9c36c91c0dfeac448fa6e5 = null),
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shorts.splice(
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortIndex + 1,
        ),
        __ba14105c51bb0f53ea6c93b0e81a448b1f1c675a13c2b275c94ab1333860fa3c.clear());
      for (const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 of __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shorts)
        __ba14105c51bb0f53ea6c93b0e81a448b1f1c675a13c2b275c94ab1333860fa3c.add(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
        );
      ((__ee3d9515c09e714138b80a54a85f68ec8856f651c5192183a3ad6d1bab431d90 = 1),
        (__d6e8ffff761bb3491b619880e5d917d6df582d5c67b95c1869c0a525aa0a908c = ""),
        (__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417 = !0),
        (__037421764e2f5e073ebcd4a8e7220f715740a5cbe2e9ed2d93431a54ae8de6ec = 0),
        (__5285a5bbd045fe6fc6ebb94cc24c149a1dcccd7cfeb2f5de9c7a211dad268afa = ""),
        __00608ea01db0bfd231b71dae9747f95df1bb6ae442fb96e53df2e709c0f4f7b4());
    }
  }
  function __93536d44227c5b08b5ca3329b461f40f0176e5a265c69f35f5e7eaaaf25baabb(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    ((__66e401afb5509cbf5c4bb5624e18bcf319933c46cb9b07bc6c7f86affaa05b78 = new Set(
      [...__66e401afb5509cbf5c4bb5624e18bcf319933c46cb9b07bc6c7f86affaa05b78].slice(-500),
    )),
      (__3abefec312ee58c7fe62ed56861d8dd221822df7f4adf805e11d7b6e7cea0012 = new Set(
        [...__3abefec312ee58c7fe62ed56861d8dd221822df7f4adf805e11d7b6e7cea0012].slice(-100),
      )),
      (__8e04d8c4780a41135c77f04bcb15f46b8963c2621ff8ab409d683183f5eef2d5 = new Map(
        [...__8e04d8c4780a41135c77f04bcb15f46b8963c2621ff8ab409d683183f5eef2d5].slice(-500),
      )));
    try {
      (localStorage.setItem(
        __a03f49e95f91224af5b136a0e23dcb87a6dadeb3f9d7f2a0a1bc0a0ffa3f7f6a,
        JSON.stringify({
          videos: [...__66e401afb5509cbf5c4bb5624e18bcf319933c46cb9b07bc6c7f86affaa05b78],
          channels: [...__3abefec312ee58c7fe62ed56861d8dd221822df7f4adf805e11d7b6e7cea0012],
          likes: [...__8e04d8c4780a41135c77f04bcb15f46b8963c2621ff8ab409d683183f5eef2d5.values()],
        }),
      ),
        (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortPreferencesStatus.textContent =
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 +
          "\u0020\u0053\u0061\u0076\u0065\u0064\u0020\u0069\u006e\u0020\u0074\u0068\u0069\u0073\u0020\u0062\u0072\u006f\u0077\u0073\u0065\u0072\u002e"));
    } catch {
      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortPreferencesStatus.textContent =
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 +
        "\u0020\u0053\u0061\u0076\u0065\u0064\u0020\u0066\u006f\u0072\u0020\u0074\u0068\u0069\u0073\u0020\u0073\u0065\u0073\u0073\u0069\u006f\u006e\u0020\u006f\u006e\u006c\u0079\u002e";
    }
  }
  function __0159afb719a78ed8c8a3938ee144c930b121f1fd74d588b30e9186af4a2f89d7(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = "",
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = "\u0064\u0069\u0073\u0063\u006f\u0076\u0065\u0072",
  ) {
    (__98e34204ec1ca6b1775902c926bc767b7ad3918ad6edaa9782e93aed4f2bfc13++,
      __ee07b2c1f5ae5a68cf1a38fc099e028ffbe3e7bdd9c0223fa1ec952465f7acbf?.abort(),
      (__75b9960186525ac5ab965efcdf7d072a44d9c0e2ac9c36c91c0dfeac448fa6e5 = null),
      !__34e3a593d4cfcfa83223ee3c74b7c8a0109cc4a95b5017b64b39376d978be837 &&
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortPlayer &&
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shorts[
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortIndex
        ] &&
        (__34e3a593d4cfcfa83223ee3c74b7c8a0109cc4a95b5017b64b39376d978be837 = {
          videos: __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shorts,
          index: __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortIndex,
          query: __96269fbafcaf1e59a066bbe22f9ec441fbf0ff3e38084b904ada564b445561a8,
          topic: __a27fb158ddcbc635df4f915211d5c8e5d6a8c04827fe1281526c34bc41e8fb8b,
          page: __ee3d9515c09e714138b80a54a85f68ec8856f651c5192183a3ad6d1bab431d90,
          cursor: __d6e8ffff761bb3491b619880e5d917d6df582d5c67b95c1869c0a525aa0a908c,
          hasMore: __ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417,
          seen: [...__ba14105c51bb0f53ea6c93b0e81a448b1f1c675a13c2b275c94ab1333860fa3c],
        }),
      __34e3a593d4cfcfa83223ee3c74b7c8a0109cc4a95b5017b64b39376d978be837 ||
        __342b0ab9499804405c03233753667f1eb72349e426fecd4a9fb2da0673b0d0c4(),
      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shorts = []),
      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortIndex = 0),
      __ba14105c51bb0f53ea6c93b0e81a448b1f1c675a13c2b275c94ab1333860fa3c.clear(),
      (__ee3d9515c09e714138b80a54a85f68ec8856f651c5192183a3ad6d1bab431d90 = 1),
      (__d6e8ffff761bb3491b619880e5d917d6df582d5c67b95c1869c0a525aa0a908c = ""),
      (__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417 = !0),
      (__037421764e2f5e073ebcd4a8e7220f715740a5cbe2e9ed2d93431a54ae8de6ec = 0),
      (__5285a5bbd045fe6fc6ebb94cc24c149a1dcccd7cfeb2f5de9c7a211dad268afa = ""),
      (__96269fbafcaf1e59a066bbe22f9ec441fbf0ff3e38084b904ada564b445561a8 =
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
      (__a27fb158ddcbc635df4f915211d5c8e5d6a8c04827fe1281526c34bc41e8fb8b =
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortSearchInput.value =
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
      __34e3a593d4cfcfa83223ee3c74b7c8a0109cc4a95b5017b64b39376d978be837 ||
        ((__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortTitle.textContent =
          ""),
        (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortCreator.textContent =
          "")),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortDislike.disabled =
        !0),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortHideChannel.disabled =
        !0),
      __8a634624ecf034ed097cd5e7c1a9e014c7efed1bf92024f2b4af50aa6eb48c94(),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortFeedLabel.textContent =
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
          ? `Results for \u201c${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96}\u201d`
          : {
              discover: "\u0046\u006f\u0072\u0020\u0079\u006f\u0075",
              science: "\u0053\u0063\u0069\u0065\u006e\u0063\u0065",
              nature: "\u004e\u0061\u0074\u0075\u0072\u0065",
              gaming: "\u0047\u0061\u006d\u0069\u006e\u0067",
              sports: "\u0053\u0070\u006f\u0072\u0074\u0073",
            }[__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5]),
      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
        "\u005b\u0064\u0061\u0074\u0061\u002d\u0073\u0068\u006f\u0072\u0074\u002d\u0074\u006f\u0070\u0069\u0063\u005d",
      ).forEach((__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c) =>
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.setAttribute(
          "\u0061\u0072\u0069\u0061\u002d\u0070\u0072\u0065\u0073\u0073\u0065\u0064",
          String(
            !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.dataset
                .shortTopic === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
          ),
        ),
      ),
      __7afa888e62ebfbac2e6002ec2d80426c0fd84774cdd464eebc432bfd97f1d538());
  }
  async function __17637b72fc4733887b3a19c85d5d3c70864a8f76b0495e06a14055b0d0c65db6(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = !1,
  ) {
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shorts[
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortIndex
      ];
    if (
      !__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 ||
      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
        !__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.channelId)
    )
      return;
    if (
      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
        ? __3abefec312ee58c7fe62ed56861d8dd221822df7f4adf805e11d7b6e7cea0012.add(
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.channelId,
          )
        : __66e401afb5509cbf5c4bb5624e18bcf319933c46cb9b07bc6c7f86affaa05b78.add(
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.id,
          ),
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96)
    )
      for (const [
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
      ] of __8e04d8c4780a41135c77f04bcb15f46b8963c2621ff8ab409d683183f5eef2d5)
        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.channelId ===
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.channelId &&
          __8e04d8c4780a41135c77f04bcb15f46b8963c2621ff8ab409d683183f5eef2d5.delete(
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
          );
    else
      __8e04d8c4780a41135c77f04bcb15f46b8963c2621ff8ab409d683183f5eef2d5.delete(
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.id,
      );
    (__93536d44227c5b08b5ca3329b461f40f0176e5a265c69f35f5e7eaaaf25baabb(
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
        ? `Hidden ${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.creator || "\u0074\u0068\u0069\u0073\u0020\u0063\u0068\u0061\u006e\u006e\u0065\u006c"}.`
        : "\u0054\u0068\u0069\u0073\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0069\u0073\u0020\u0068\u0069\u0064\u0064\u0065\u006e\u002e",
    ),
      __342b0ab9499804405c03233753667f1eb72349e426fecd4a9fb2da0673b0d0c4());
    const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shorts
        .slice(0, __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortIndex)
        .filter(__386438b87474d2f2a7f9bcafb4095c3f466d499afdc8b7dc19046a9c96d5b10e).length;
    ((__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shorts =
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shorts.filter(
        __386438b87474d2f2a7f9bcafb4095c3f466d499afdc8b7dc19046a9c96d5b10e,
      )),
      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortIndex = Math.min(
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
        Math.max(
          0,
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shorts.length - 1,
        ),
      )),
      __8846e27b07ac021b6c32fc8bdc0c411f01ff3e6d19c3048355784ff30aa3c433(),
      await __7afa888e62ebfbac2e6002ec2d80426c0fd84774cdd464eebc432bfd97f1d538());
  }
  const __ba14105c51bb0f53ea6c93b0e81a448b1f1c675a13c2b275c94ab1333860fa3c = new Set();
  function __00608ea01db0bfd231b71dae9747f95df1bb6ae442fb96e53df2e709c0f4f7b4(
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = 6,
  ) {
    if (__75b9960186525ac5ab965efcdf7d072a44d9c0e2ac9c36c91c0dfeac448fa6e5)
      return __75b9960186525ac5ab965efcdf7d072a44d9c0e2ac9c36c91c0dfeac448fa6e5;
    if (
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ||
      !__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417 ||
      Date.now() < __037421764e2f5e073ebcd4a8e7220f715740a5cbe2e9ed2d93431a54ae8de6ec
    )
      return Promise.resolve();
    const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
        __98e34204ec1ca6b1775902c926bc767b7ad3918ad6edaa9782e93aed4f2bfc13,
      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = new AbortController();
    __ee07b2c1f5ae5a68cf1a38fc099e028ffbe3e7bdd9c0223fa1ec952465f7acbf =
      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03;
    const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = (async () => {
      for (
        let __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = 0;
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 < 3 &&
        __ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417 &&
        "\u0073\u0068\u006f\u0072\u0074\u0073" === __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.view &&
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shorts.length -
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortIndex -
          1 <
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5;
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96++
      ) {
        const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
          new URLSearchParams({
            limit: "\u0032\u0034",
            page: String(__ee3d9515c09e714138b80a54a85f68ec8856f651c5192183a3ad6d1bab431d90),
            topic: __a27fb158ddcbc635df4f915211d5c8e5d6a8c04827fe1281526c34bc41e8fb8b,
          });
        if (__96269fbafcaf1e59a066bbe22f9ec441fbf0ff3e38084b904ada564b445561a8)
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.set(
            "\u0071",
            __96269fbafcaf1e59a066bbe22f9ec441fbf0ff3e38084b904ada564b445561a8,
          );
        else if (
          "\u0064\u0069\u0073\u0063\u006f\u0076\u0065\u0072" === __a27fb158ddcbc635df4f915211d5c8e5d6a8c04827fe1281526c34bc41e8fb8b
        ) {
          const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
            __3c2959d287db485aed16e708f7fdaff1019aeded6f9f9b016e6d19d5627c9211();
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.length &&
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.set(
              "\u0063\u0072\u0065\u0061\u0074\u006f\u0072\u0073",
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.join("\u002c"),
            );
        }
        __d6e8ffff761bb3491b619880e5d917d6df582d5c67b95c1869c0a525aa0a908c &&
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.set(
            "\u0063\u0075\u0072\u0073\u006f\u0072",
            __d6e8ffff761bb3491b619880e5d917d6df582d5c67b95c1869c0a525aa0a908c,
          );
        const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
          await __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1(
            `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxtube/shorts?${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96}`,
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.signal,
          );
        if (
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c !==
          __98e34204ec1ca6b1775902c926bc767b7ad3918ad6edaa9782e93aed4f2bfc13
        )
          return;
        for (const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c of __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5?.videos ||
          [])
          /^[A-Za-z0-9_-]{11}$/.test(
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c?.id || "",
          ) &&
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.isShort &&
            !__ba14105c51bb0f53ea6c93b0e81a448b1f1c675a13c2b275c94ab1333860fa3c.has(
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.id,
            ) &&
            (__ba14105c51bb0f53ea6c93b0e81a448b1f1c675a13c2b275c94ab1333860fa3c.add(
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.id,
            ),
            __386438b87474d2f2a7f9bcafb4095c3f466d499afdc8b7dc19046a9c96d5b10e(
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
            ) &&
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shorts.push(
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
              ));
        const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5?.nextPage,
          __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
            "\u0073\u0074\u0072\u0069\u006e\u0067" ==
            typeof __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5?.nextCursor
              ? __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.nextCursor
              : "";
        ((__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417 =
          Boolean(
            __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a &&
              __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a !==
                __d6e8ffff761bb3491b619880e5d917d6df582d5c67b95c1869c0a525aa0a908c,
          ) ||
          (Number.isInteger(__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713) &&
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 >
              __ee3d9515c09e714138b80a54a85f68ec8856f651c5192183a3ad6d1bab431d90 &&
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 <= 100)),
          (__d6e8ffff761bb3491b619880e5d917d6df582d5c67b95c1869c0a525aa0a908c =
            __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a),
          Number.isInteger(__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713) &&
            (__ee3d9515c09e714138b80a54a85f68ec8856f651c5192183a3ad6d1bab431d90 =
              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713),
          (__5285a5bbd045fe6fc6ebb94cc24c149a1dcccd7cfeb2f5de9c7a211dad268afa = ""));
        const __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = Math.min(
          Math.max(
            0,
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shorts.length - 240,
          ),
          Math.max(
            0,
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortIndex - 50,
          ),
        );
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 &&
          (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shorts.splice(
            0,
            __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2,
          ),
          (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortIndex -=
            __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2));
      }
    })()
      .catch((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c ===
          __98e34204ec1ca6b1775902c926bc767b7ad3918ad6edaa9782e93aed4f2bfc13 &&
          "\u0041\u0062\u006f\u0072\u0074\u0045\u0072\u0072\u006f\u0072" !==
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.name &&
          ((__037421764e2f5e073ebcd4a8e7220f715740a5cbe2e9ed2d93431a54ae8de6ec = Date.now() + 15e3),
          (__5285a5bbd045fe6fc6ebb94cc24c149a1dcccd7cfeb2f5de9c7a211dad268afa =
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.message ||
            "\u004d\u006f\u0072\u0065\u0020\u0053\u0068\u006f\u0072\u0074\u0073\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u006c\u006f\u0061\u0064\u002e"));
      })
      .finally(() => {
        __75b9960186525ac5ab965efcdf7d072a44d9c0e2ac9c36c91c0dfeac448fa6e5 ===
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 &&
          (__75b9960186525ac5ab965efcdf7d072a44d9c0e2ac9c36c91c0dfeac448fa6e5 = null);
      });
    return (
      (__75b9960186525ac5ab965efcdf7d072a44d9c0e2ac9c36c91c0dfeac448fa6e5 =
        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713),
      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713
    );
  }
  async function __7afa888e62ebfbac2e6002ec2d80426c0fd84774cdd464eebc432bfd97f1d538() {
    if (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) return;
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
      __98e34204ec1ca6b1775902c926bc767b7ad3918ad6edaa9782e93aed4f2bfc13;
    (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortMenu &&
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortMenu.open = !1),
      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortEmpty &&
        (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortEmpty.hidden = !0),
      (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.shorts.dataset.feedLoading =
        "\u0074\u0072\u0075\u0065"),
      __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortLoading.hidden =
        Boolean(__34e3a593d4cfcfa83223ee3c74b7c8a0109cc4a95b5017b64b39376d978be837)));
    try {
      if (
        (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shorts.length ||
          (await __00608ea01db0bfd231b71dae9747f95df1bb6ae442fb96e53df2e709c0f4f7b4(1)),
        "\u0073\u0068\u006f\u0072\u0074\u0073" !== __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.view ||
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 !==
            __98e34204ec1ca6b1775902c926bc767b7ad3918ad6edaa9782e93aed4f2bfc13)
      )
        return;
      if (!__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shorts.length)
        throw (
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortDislike?.setAttribute(
            "\u0064\u0069\u0073\u0061\u0062\u006c\u0065\u0064",
            "",
          ),
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortHideChannel?.setAttribute(
            "\u0064\u0069\u0073\u0061\u0062\u006c\u0065\u0064",
            "",
          ),
          __8a634624ecf034ed097cd5e7c1a9e014c7efed1bf92024f2b4af50aa6eb48c94(),
          new Error(
            __5285a5bbd045fe6fc6ebb94cc24c149a1dcccd7cfeb2f5de9c7a211dad268afa ||
              "\u004e\u006f\u0020\u006d\u0061\u0074\u0063\u0068\u0069\u006e\u0067\u0020\u0053\u0068\u006f\u0072\u0074\u0073\u002e\u0020\u0054\u0072\u0079\u0020\u0061\u006e\u006f\u0074\u0068\u0065\u0072\u0020\u0073\u0065\u0061\u0072\u0063\u0068\u0020\u006f\u0072\u0020\u0074\u006f\u0070\u0069\u0063\u002c\u0020\u006f\u0072\u0020\u0072\u0065\u0073\u0065\u0074\u0020\u0079\u006f\u0075\u0072\u0020\u0070\u0072\u0065\u0066\u0065\u0072\u0065\u006e\u0063\u0065\u0073\u002e",
          )
        );
      (__34e3a593d4cfcfa83223ee3c74b7c8a0109cc4a95b5017b64b39376d978be837 &&
        (__342b0ab9499804405c03233753667f1eb72349e426fecd4a9fb2da0673b0d0c4(),
        (__34e3a593d4cfcfa83223ee3c74b7c8a0109cc4a95b5017b64b39376d978be837 = null)),
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.failedShortIds.clear(),
        __fd19848ac69360eadd3ad8ebfb82354628baec31764b5277d32eb7b6f79b622c.clear(),
        await __a7c6cc0301f7847a9751a2f91004be6fbb9ecafe2819015e092a436c3f7692af(
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortIndex,
        ));
    } catch (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c) {
      if (
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 !==
          __98e34204ec1ca6b1775902c926bc767b7ad3918ad6edaa9782e93aed4f2bfc13 ||
        "\u0073\u0068\u006f\u0072\u0074\u0073" !== __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.view
      )
        return;
      if (
        ((__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortLoading.hidden =
          !0),
        __34e3a593d4cfcfa83223ee3c74b7c8a0109cc4a95b5017b64b39376d978be837)
      ) {
        const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
          __34e3a593d4cfcfa83223ee3c74b7c8a0109cc4a95b5017b64b39376d978be837;
        ((__34e3a593d4cfcfa83223ee3c74b7c8a0109cc4a95b5017b64b39376d978be837 = null),
          (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shorts =
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.videos),
          (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortIndex =
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.index),
          (__96269fbafcaf1e59a066bbe22f9ec441fbf0ff3e38084b904ada564b445561a8 =
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.query),
          (__a27fb158ddcbc635df4f915211d5c8e5d6a8c04827fe1281526c34bc41e8fb8b =
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.topic),
          (__ee3d9515c09e714138b80a54a85f68ec8856f651c5192183a3ad6d1bab431d90 =
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.page),
          (__d6e8ffff761bb3491b619880e5d917d6df582d5c67b95c1869c0a525aa0a908c =
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.cursor),
          (__ce0ac17ff9342f93f13c5bee6e4eb1680bcaa932c4e1275f998475af8cc03417 =
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.hasMore),
          (__037421764e2f5e073ebcd4a8e7220f715740a5cbe2e9ed2d93431a54ae8de6ec = 0),
          __ba14105c51bb0f53ea6c93b0e81a448b1f1c675a13c2b275c94ab1333860fa3c.clear());
        for (const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 of __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.seen)
          __ba14105c51bb0f53ea6c93b0e81a448b1f1c675a13c2b275c94ab1333860fa3c.add(
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
          );
        (__8a634624ecf034ed097cd5e7c1a9e014c7efed1bf92024f2b4af50aa6eb48c94(),
          (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortDislike.disabled =
            !1),
          (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortHideChannel.disabled =
            !__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shorts[
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortIndex
            ]?.channelId),
          __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(
            __5285a5bbd045fe6fc6ebb94cc24c149a1dcccd7cfeb2f5de9c7a211dad268afa
              ? "\u0053\u0065\u0061\u0072\u0063\u0068\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u002e\u0020\u0059\u006f\u0075\u0072\u0020\u0063\u0075\u0072\u0072\u0065\u006e\u0074\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0069\u0073\u0020\u0073\u0074\u0069\u006c\u006c\u0020\u0070\u006c\u0061\u0079\u0069\u006e\u0067\u002e"
              : "\u004e\u006f\u0020\u006d\u0061\u0074\u0063\u0068\u0069\u006e\u0067\u0020\u0053\u0068\u006f\u0072\u0074\u0073\u002e",
          ));
      } else
        (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortEmpty &&
          ((__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortEmpty.hidden =
            !1),
          (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortEmptyTitle.textContent =
            __5285a5bbd045fe6fc6ebb94cc24c149a1dcccd7cfeb2f5de9c7a211dad268afa
              ? "\u0053\u0068\u006f\u0072\u0074\u0073\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u006c\u006f\u0061\u0064"
              : "\u004e\u006f\u0020\u0053\u0068\u006f\u0072\u0074\u0073\u0020\u0066\u006f\u0075\u006e\u0064")),
          __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.message ||
              "\u0053\u0068\u006f\u0072\u0074\u0073\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u006c\u006f\u0061\u0064\u0065\u0064\u002e",
          ));
    } finally {
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 ===
        __98e34204ec1ca6b1775902c926bc767b7ad3918ad6edaa9782e93aed4f2bfc13 &&
        delete __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.shorts.dataset
          .feedLoading;
    }
  }
  let __972032759913c8d0b85613dfa8b33ba1f950c0a22bd240024f6a566a8885a74f = 0,
    __800b423fb67fba61b04a9759cd74b02c49005295eb1e7ac6ecbc5489a9b58a85 = 0;
  const __fd19848ac69360eadd3ad8ebfb82354628baec31764b5277d32eb7b6f79b622c = new Set();
  function __ec6f929063e7763e20b0604293efc58dedf979bc87e0ee0a8143fd85b1b4682d() {
    (clearTimeout(__800b423fb67fba61b04a9759cd74b02c49005295eb1e7ac6ecbc5489a9b58a85),
      (__800b423fb67fba61b04a9759cd74b02c49005295eb1e7ac6ecbc5489a9b58a85 = 0));
  }
  const __46d18b7d900224138364f734f03bee4c2597d91b3a6d5526a280ee4f28f7143f = new Map(),
    __e79b5c4ac2a428dff3df1ef1b27389af0b0e96faff06f40c634cb40a206196c9 = new Map();
  let __9424b58569d5ac344830f11e289b7923b433273ecad0b18a974a395a48c05a66 = 0;
  function __62516b3d67659acde2ed095c5e65043f9a756eddaa7c07346c546771330b5378(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    if (
      __e79b5c4ac2a428dff3df1ef1b27389af0b0e96faff06f40c634cb40a206196c9.has(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
      )
    )
      return __e79b5c4ac2a428dff3df1ef1b27389af0b0e96faff06f40c634cb40a206196c9.get(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
      );
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = {
      id: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
      player: null,
      node: null,
      ready: !1,
      removed: !1,
      failed: !1,
    };
    return (
      __e79b5c4ac2a428dff3df1ef1b27389af0b0e96faff06f40c634cb40a206196c9.set(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
      ),
      (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.promise = (async () => {
        const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = await (function (
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          ) {
            if (!__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.detailsPending)
              return Promise.resolve(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              );
            if (
              !__46d18b7d900224138364f734f03bee4c2597d91b3a6d5526a280ee4f28f7143f.has(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
              )
            ) {
              __46d18b7d900224138364f734f03bee4c2597d91b3a6d5526a280ee4f28f7143f.size >= 32 &&
                __46d18b7d900224138364f734f03bee4c2597d91b3a6d5526a280ee4f28f7143f.delete(
                  __46d18b7d900224138364f734f03bee4c2597d91b3a6d5526a280ee4f28f7143f.keys().next()
                    .value,
                );
              const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1(
                  `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxtube/video?id=${encodeURIComponent(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id)}`,
                )
                  .then((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) => {
                    const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
                        ?.videos?.[0];
                    if (
                      !__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c ||
                      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.id !==
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id ||
                      !__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.isShort
                    )
                      throw Error("\u0053\u0068\u006f\u0072\u0074\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065");
                    return __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c;
                  })
                  .catch((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) => {
                    throw (
                      __46d18b7d900224138364f734f03bee4c2597d91b3a6d5526a280ee4f28f7143f.delete(
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
                      ),
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
                    );
                  });
              __46d18b7d900224138364f734f03bee4c2597d91b3a6d5526a280ee4f28f7143f.set(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
              );
            }
            return __46d18b7d900224138364f734f03bee4c2597d91b3a6d5526a280ee4f28f7143f.get(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
            );
          })(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
            await __f98273bdd4f6aa8fe92846dd62114be9a2e8af9cfe2333d4d3afa8f5b5b280eb();
        if (
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.removed ||
          "\u0073\u0068\u006f\u0072\u0074\u0073" !== __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.view
        )
          return;
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.detail =
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c;
        const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
          (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.node =
            document.createElement("\u0064\u0069\u0076"));
        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.id =
          "\u006e\u0037\u0078\u0074\u0075\u0062\u0065\u002d\u0070\u0072\u0065\u0070\u0061\u0072\u0065\u0064\u002d\u0073\u0068\u006f\u0072\u0074\u002d" +
          ++__9424b58569d5ac344830f11e289b7923b433273ecad0b18a974a395a48c05a66;
        const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
          document.createElement("\u0064\u0069\u0076");
        ((__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.id =
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.id + "\u002d\u0070\u006c\u0061\u0079\u0065\u0072"),
          (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.style.cssText =
            "\u0077\u0069\u0064\u0074\u0068\u003a\u0031\u0030\u0030\u0025\u003b\u0068\u0065\u0069\u0067\u0068\u0074\u003a\u0031\u0030\u0030\u0025"),
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.append(
            __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
          ),
          (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.style.cssText =
            "\u0070\u006f\u0073\u0069\u0074\u0069\u006f\u006e\u003a\u0061\u0062\u0073\u006f\u006c\u0075\u0074\u0065\u003b\u0069\u006e\u0073\u0065\u0074\u003a\u0030\u003b\u0076\u0069\u0073\u0069\u0062\u0069\u006c\u0069\u0074\u0079\u003a\u0068\u0069\u0064\u0064\u0065\u006e\u003b\u0070\u006f\u0069\u006e\u0074\u0065\u0072\u002d\u0065\u0076\u0065\u006e\u0074\u0073\u003a\u006e\u006f\u006e\u0065"),
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.setAttribute(
            "\u0061\u0072\u0069\u0061\u002d\u0068\u0069\u0064\u0064\u0065\u006e",
            "\u0074\u0072\u0075\u0065",
          ),
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortPlayer.append(
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
          ));
        const __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 =
          __0844e51813e461cb8444ef70439d9076b1017e51042816bb8850f562d8037a87(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
            !0,
          );
        return (
          (__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.playerVars.autoplay = 0),
          (__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.expectedDuration =
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.durationSeconds),
          (__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.events = {
            onReady: (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.removed ||
                ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.ready = !0),
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target.mute(),
                __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortPlayer ===
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target &&
                  (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target.playVideo(),
                  __d68adf22249c19c5f205dee53d2c460d41f306f66aa7aea30c6d65e18a3590c5()));
            },
            onStateChange: (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.removed ||
                __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortPlayer !==
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target ||
                ((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.data !==
                  __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.PlayerState
                    .PLAYING &&
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.data !==
                    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.PlayerState
                      .PAUSED) ||
                  (__ec6f929063e7763e20b0604293efc58dedf979bc87e0ee0a8143fd85b1b4682d(),
                  (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortLoading.hidden =
                    !0),
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.data ===
                    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.PlayerState
                      .PLAYING &&
                    __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239()),
                (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortCenterPlay.hidden =
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.data !==
                  __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.PlayerState
                    .PAUSED),
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.data ===
                  __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.PlayerState
                    .ENDED &&
                  __a7c6cc0301f7847a9751a2f91004be6fbb9ecafe2819015e092a436c3f7692af(
                    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortIndex +
                      1,
                  ));
            },
            onAutoplayBlocked: () => {
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.removed ||
                __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortPlayer !==
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.player ||
                (__ec6f929063e7763e20b0604293efc58dedf979bc87e0ee0a8143fd85b1b4682d(),
                (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortLoading.hidden =
                  !0),
                (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortCenterPlay.hidden =
                  !1));
            },
            onError: () => {
              ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.failed = !0),
                __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortPlayer ===
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.player &&
                  __3ee99e203c628e02698648ca1623c313036d654af0b70898a868f82e8cb6e5e5(
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                  ));
            },
          }),
          (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.player =
            new __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.Player(
              __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.id,
              __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238,
            )),
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
        );
      })().catch(() => {
        ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.failed = !0),
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shorts[
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortIndex
          ]?.id === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.id &&
            "\u0073\u0068\u006f\u0072\u0074\u0073" === __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.view &&
            __3ee99e203c628e02698648ca1623c313036d654af0b70898a868f82e8cb6e5e5(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
            ));
      })),
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
    );
  }
  function __b66636d73568f95ee2630b81b72a615bf9765be1be3bf82a5a8cf7580ab56691(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = !1,
    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = null,
  ) {
    (__ec6f929063e7763e20b0604293efc58dedf979bc87e0ee0a8143fd85b1b4682d(),
      clearInterval(__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortTimer),
      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortTimer = 0));
    for (const __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc of __e79b5c4ac2a428dff3df1ef1b27389af0b0e96faff06f40c634cb40a206196c9.values())
      ((__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.removed = !0),
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.player?.destroy?.(),
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.node?.remove());
    if (
      (__e79b5c4ac2a428dff3df1ef1b27389af0b0e96faff06f40c634cb40a206196c9.clear(),
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortPlayer?.destroy?.(),
      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortStage.classList.add(
        "\u0069\u006e\u0076\u0069\u0064\u0069\u006f\u0075\u0073\u002d\u0070\u006c\u0061\u0079\u0065\u0072",
      ),
      !/^[A-Za-z0-9_-]{11}$/.test(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
      ))
    )
      throw new Error("\u0043\u0068\u006f\u006f\u0073\u0065\u0020\u0061\u0020\u0076\u0061\u006c\u0069\u0064\u0020\u0053\u0068\u006f\u0072\u0074\u002e");
    if (
      window.NyxInvidiousPlayer &&
      !__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
    )
      return (
        (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortPlayer =
          window.NyxInvidiousPlayer(
            __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortPlayer,
            {
              id: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
              loop: !0,
              onLoading: (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 ===
                  __972032759913c8d0b85613dfa8b33ba1f950c0a22bd240024f6a566a8885a74f &&
                  "\u0073\u0068\u006f\u0072\u0074\u0073" ===
                    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.view &&
                  (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortLoading.hidden =
                    !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96);
              },
              onFailure: (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c) => {
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 ===
                  __972032759913c8d0b85613dfa8b33ba1f950c0a22bd240024f6a566a8885a74f &&
                  "\u0073\u0068\u006f\u0072\u0074\u0073" ===
                    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.view &&
                  __b66636d73568f95ee2630b81b72a615bf9765be1be3bf82a5a8cf7580ab56691(
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                    !0,
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                  );
              },
            },
          )),
        void __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239()
      );
    const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = new URL(
      "\u002f\u0065\u006d\u0062\u0065\u0064\u002f" + __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.invidiousEmbedOrigin,
    );
    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.search = new URLSearchParams(
      {
        local: "\u0074\u0072\u0075\u0065",
        autoplay: __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03?.paused
          ? "\u0030"
          : "\u0031",
        quality: "\u0064\u0061\u0073\u0068",
        controls: "\u0031",
        volume: String(
          !1 === __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03?.muted
            ? __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.volume
            : 0,
        ),
        start: String(
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03?.time || 0,
        ),
        speed: String(
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03?.rate || 1,
        ),
        loop: "\u0031",
        continue: "\u0030",
        hl: "\u0065\u006e\u002d\u0055\u0053",
      },
    ).toString();
    const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
      document.createElement("\u0069\u0066\u0072\u0061\u006d\u0065");
    ((__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.title =
      "\u0049\u006e\u0076\u0069\u0064\u0069\u006f\u0075\u0073\u0020\u0053\u0068\u006f\u0072\u0074\u0020\u0070\u006c\u0061\u0079\u0065\u0072"),
      (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.src =
        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.href),
      (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.allow =
        "\u0061\u0075\u0074\u006f\u0070\u006c\u0061\u0079\u003b\u0020\u0066\u0075\u006c\u006c\u0073\u0063\u0072\u0065\u0065\u006e\u003b\u0020\u0070\u0069\u0063\u0074\u0075\u0072\u0065\u002d\u0069\u006e\u002d\u0070\u0069\u0063\u0074\u0075\u0072\u0065"),
      (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.allowFullscreen = !0),
      (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.referrerPolicy =
        "\u0073\u0074\u0072\u0069\u0063\u0074\u002d\u006f\u0072\u0069\u0067\u0069\u006e\u002d\u0077\u0068\u0065\u006e\u002d\u0063\u0072\u006f\u0073\u0073\u002d\u006f\u0072\u0069\u0067\u0069\u006e"),
      __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.addEventListener(
        "\u006c\u006f\u0061\u0064",
        () => {
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 ===
            __972032759913c8d0b85613dfa8b33ba1f950c0a22bd240024f6a566a8885a74f &&
            "\u0073\u0068\u006f\u0072\u0074\u0073" === __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.view &&
            (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortLoading.hidden =
              !0);
        },
        {
          once: !0,
        },
      ),
      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortPlayer = {
        isInvidious: !0,
        destroy: () => __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.remove(),
      }),
      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortPlayer.replaceChildren(
        __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
      ),
      __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239());
  }
  async function __a7c6cc0301f7847a9751a2f91004be6fbb9ecafe2819015e092a436c3f7692af(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    if (!__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shorts.length) return;
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
      ++__7db994cf70023f7fa1ee37d64774e922da1a209d4cfac7b44a0d185f968b0a3b;
    if (
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 >=
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shorts.length
    ) {
      const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 -
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortIndex;
      if (
        (__467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(
          "\u004c\u006f\u0061\u0064\u0069\u006e\u0067\u0020\u006d\u006f\u0072\u0065\u0020\u0053\u0068\u006f\u0072\u0074\u0073\u002e\u002e\u002e",
        ),
        await __00608ea01db0bfd231b71dae9747f95df1bb6ae442fb96e53df2e709c0f4f7b4(1),
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 !==
          __7db994cf70023f7fa1ee37d64774e922da1a209d4cfac7b44a0d185f968b0a3b ||
          "\u0073\u0068\u006f\u0072\u0074\u0073" !== __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.view)
      )
        return;
      if (
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortIndex +
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c) >=
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shorts.length
      )
        return void __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(
          __5285a5bbd045fe6fc6ebb94cc24c149a1dcccd7cfeb2f5de9c7a211dad268afa ||
            "\u004e\u006f\u0020\u006d\u006f\u0072\u0065\u0020\u0053\u0068\u006f\u0072\u0074\u0073\u0020\u0061\u0072\u0065\u0020\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u0020\u0072\u0069\u0067\u0068\u0074\u0020\u006e\u006f\u0077\u002e",
        );
    }
    if (
      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = Math.max(
        0,
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      )) === __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortIndex &&
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortPlayer
    )
      return;
    const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
      ++__972032759913c8d0b85613dfa8b33ba1f950c0a22bd240024f6a566a8885a74f;
    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortIndex =
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96;
    const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shorts[
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortIndex
      ];
    if (
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortEmpty &&
        (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortEmpty.hidden = !0),
      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortMenu &&
        (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortMenu.open = !1),
      __8a634624ecf034ed097cd5e7c1a9e014c7efed1bf92024f2b4af50aa6eb48c94(
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
      ),
      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortDislike &&
        (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortDislike.disabled =
          !1),
      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortHideChannel &&
        ((__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortHideChannel.disabled =
          !__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.channelId),
        (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortHideChannel.title =
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.creator
            ? `Hide ${__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.creator}`
            : "\u0048\u0069\u0064\u0065\u0020\u0063\u0068\u0061\u006e\u006e\u0065\u006c")),
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortPlayer?.pauseVideo?.(),
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortPlayer?.isInvidious &&
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortPlayer.destroy(),
      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortPlayer = null),
      (function (
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
      ) {
        (__ec6f929063e7763e20b0604293efc58dedf979bc87e0ee0a8143fd85b1b4682d(),
          (__800b423fb67fba61b04a9759cd74b02c49005295eb1e7ac6ecbc5489a9b58a85 = setTimeout(() => {
            if (
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 !==
                __972032759913c8d0b85613dfa8b33ba1f950c0a22bd240024f6a566a8885a74f ||
              "\u0073\u0068\u006f\u0072\u0074\u0073" !== __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.view
            )
              return;
            const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
              __e79b5c4ac2a428dff3df1ef1b27389af0b0e96faff06f40c634cb40a206196c9.get(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
              );
            __fd19848ac69360eadd3ad8ebfb82354628baec31764b5277d32eb7b6f79b622c.has(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
            )
              ? __3ee99e203c628e02698648ca1623c313036d654af0b70898a868f82e8cb6e5e5(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                )
              : (__fd19848ac69360eadd3ad8ebfb82354628baec31764b5277d32eb7b6f79b622c.add(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
                ),
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c &&
                  ((__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.removed =
                    !0),
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.player?.destroy?.(),
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.node?.remove(),
                  __e79b5c4ac2a428dff3df1ef1b27389af0b0e96faff06f40c634cb40a206196c9.delete(
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
                  )),
                (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortPlayer =
                  null),
                __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(
                  "\u0054\u0068\u0069\u0073\u0020\u0053\u0068\u006f\u0072\u0074\u0020\u0069\u0073\u0020\u0074\u0061\u006b\u0069\u006e\u0067\u0020\u006c\u006f\u006e\u0067\u0065\u0072\u0020\u0074\u006f\u0020\u006c\u006f\u0061\u0064\u002e\u0020\u0052\u0065\u0074\u0072\u0079\u0069\u006e\u0067\u002e\u002e\u002e",
                ),
                __a7c6cc0301f7847a9751a2f91004be6fbb9ecafe2819015e092a436c3f7692af(
                  __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortIndex,
                ));
          }, 12e3)));
      })(
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
      ),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortTitle.textContent =
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.title ||
        "\u0055\u006e\u0074\u0069\u0074\u006c\u0065\u0064\u0020\u0053\u0068\u006f\u0072\u0074"),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortCreator.textContent =
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.creator || "\u0059\u006f\u0075\u0054\u0075\u0062\u0065"),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortLoading.hidden = !1),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortCenterPlay.hidden =
        !0),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortProgress.style.width =
        "\u0030"),
      __00608ea01db0bfd231b71dae9747f95df1bb6ae442fb96e53df2e709c0f4f7b4(),
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.invidiousEmbedOrigin)
    )
      return void __b66636d73568f95ee2630b81b72a615bf9765be1be3bf82a5a8cf7580ab56691(
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
      );
    __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortStage.classList.remove(
      "\u0069\u006e\u0076\u0069\u0064\u0069\u006f\u0075\u0073\u002d\u0070\u006c\u0061\u0079\u0065\u0072",
    );
    for (const __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc of __e79b5c4ac2a428dff3df1ef1b27389af0b0e96faff06f40c634cb40a206196c9.values())
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.node &&
        ((__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.node.style.visibility =
          "\u0068\u0069\u0064\u0064\u0065\u006e"),
        (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.node.style.pointerEvents =
          "\u006e\u006f\u006e\u0065"),
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.node.setAttribute(
          "\u0061\u0072\u0069\u0061\u002d\u0068\u0069\u0064\u0064\u0065\u006e",
          "\u0074\u0072\u0075\u0065",
        ));
    const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = new Set(
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shorts
        .slice(
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortIndex,
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortIndex + 4,
        )
        .map(
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
        ),
    );
    for (const [
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2,
    ] of __e79b5c4ac2a428dff3df1ef1b27389af0b0e96faff06f40c634cb40a206196c9)
      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.has(
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
      ) ||
        ((__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.removed = !0),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.player?.destroy?.(),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.node?.remove(),
        __e79b5c4ac2a428dff3df1ef1b27389af0b0e96faff06f40c634cb40a206196c9.delete(
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
        ));
    const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
      __62516b3d67659acde2ed095c5e65043f9a756eddaa7c07346c546771330b5378(
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
      );
    if (
      (await __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.promise,
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c ===
        __972032759913c8d0b85613dfa8b33ba1f950c0a22bd240024f6a566a8885a74f &&
        "\u0073\u0068\u006f\u0072\u0074\u0073" === __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.view)
    ) {
      if (
        __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.failed ||
        !__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.player
      )
        return __3ee99e203c628e02698648ca1623c313036d654af0b70898a868f82e8cb6e5e5(
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
        );
      ((__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortPlayer =
        __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.player),
        (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.node.style.visibility =
          "\u0076\u0069\u0073\u0069\u0062\u006c\u0065"),
        (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.node.style.pointerEvents =
          "\u0061\u0075\u0074\u006f"),
        __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.node.setAttribute(
          "\u0061\u0072\u0069\u0061\u002d\u0068\u0069\u0064\u0064\u0065\u006e",
          "\u0066\u0061\u006c\u0073\u0065",
        ),
        (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortMuted = !0),
        (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortMute.innerHTML =
          __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f("\u0069\u0063\u006f\u006e\u002d\u006d\u0075\u0074\u0065\u0064")),
        __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.ready &&
          (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.player.mute(),
          __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.player.playVideo(),
          __d68adf22249c19c5f205dee53d2c460d41f306f66aa7aea30c6d65e18a3590c5()));
      for (const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 of __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shorts.slice(
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortIndex + 1,
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortIndex + 4,
      ))
        __62516b3d67659acde2ed095c5e65043f9a756eddaa7c07346c546771330b5378(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        );
    }
  }
  function __3ee99e203c628e02698648ca1623c313036d654af0b70898a868f82e8cb6e5e5(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    if (
      "\u0073\u0068\u006f\u0072\u0074\u0073" !== __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.view ||
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shorts[
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortIndex
      ]?.id !== __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id
    )
      return;
    (__ec6f929063e7763e20b0604293efc58dedf979bc87e0ee0a8143fd85b1b4682d(),
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.failedShortIds.add(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
      ));
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shorts.findIndex(
        (
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        ) =>
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 !==
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortIndex &&
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.id &&
          !__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.failedShortIds.has(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
          ),
      );
    if (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 < 0)
      return (
        (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortLoading.hidden =
          !0),
        __342b0ab9499804405c03233753667f1eb72349e426fecd4a9fb2da0673b0d0c4(),
        void __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(
          "\u0054\u0068\u0065\u0073\u0065\u0020\u0053\u0068\u006f\u0072\u0074\u0073\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0073\u0074\u0061\u0072\u0074\u002e\u0020\u0054\u0072\u0079\u0020\u0061\u0067\u0061\u0069\u006e\u0020\u006c\u0061\u0074\u0065\u0072\u0020\u006f\u0072\u0020\u0063\u0068\u0065\u0063\u006b\u0020\u0079\u006f\u0075\u0072\u0020\u0063\u006f\u006e\u006e\u0065\u0063\u0074\u0069\u006f\u006e\u002e",
        )
      );
    (__467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(
      "\u0054\u0068\u0069\u0073\u0020\u0053\u0068\u006f\u0072\u0074\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0073\u0074\u0061\u0072\u0074\u002e\u0020\u0054\u0072\u0079\u0069\u006e\u0067\u0020\u0061\u006e\u006f\u0074\u0068\u0065\u0072\u002e\u002e\u002e",
    ),
      __a7c6cc0301f7847a9751a2f91004be6fbb9ecafe2819015e092a436c3f7692af(
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
      ));
  }
  function __d68adf22249c19c5f205dee53d2c460d41f306f66aa7aea30c6d65e18a3590c5() {
    (clearInterval(__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortTimer),
      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortTimer = setInterval(
        () => {
          if (
            !__c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c(
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortPlayer,
            )
          )
            return;
          const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
              Number(
                __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortPlayer.getCurrentTime?.(),
              ) || 0,
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
              Number(
                __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortPlayer.getDuration?.(),
              ) || 0;
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortProgress.style.width =
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
              ? `${Math.min(100, (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 / __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) * 100)}%`
              : "\u0030";
        },
        250,
      )));
  }
  function __342b0ab9499804405c03233753667f1eb72349e426fecd4a9fb2da0673b0d0c4() {
    if (!__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
      ((__34e3a593d4cfcfa83223ee3c74b7c8a0109cc4a95b5017b64b39376d978be837 = null),
        __7db994cf70023f7fa1ee37d64774e922da1a209d4cfac7b44a0d185f968b0a3b++,
        __39053f711d861234a1caa9142d12d9d933153846f62df2e5ffb2f8e72a90586e(!0),
        __972032759913c8d0b85613dfa8b33ba1f950c0a22bd240024f6a566a8885a74f++,
        __ec6f929063e7763e20b0604293efc58dedf979bc87e0ee0a8143fd85b1b4682d(),
        clearInterval(
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortTimer,
        ),
        (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortTimer = 0));
      for (const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 of __e79b5c4ac2a428dff3df1ef1b27389af0b0e96faff06f40c634cb40a206196c9.values())
        ((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.removed = !0),
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.player?.destroy?.(),
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.node?.remove());
      (__e79b5c4ac2a428dff3df1ef1b27389af0b0e96faff06f40c634cb40a206196c9.clear(),
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortPlayer?.destroy?.(),
        (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortPlayer = null),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortPlayer.replaceChildren(),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortStage.classList.remove(
          "\u0069\u006e\u0076\u0069\u0064\u0069\u006f\u0075\u0073\u002d\u0070\u006c\u0061\u0079\u0065\u0072",
        ));
    }
  }
  function __873b86a00f690ff2f7422c1a8cd3a4eb9b66caaebb072c9bdd29b047f36257ec() {
    __c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c(
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortPlayer,
    ) &&
      (1 ===
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortPlayer.getPlayerState()
        ? __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortPlayer.pauseVideo()
        : __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortPlayer.playVideo());
  }
  function __5fa76d0d2f081800ac60da3da120f16407885e6c32ef3606c11a12335ba111df() {
    __c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c(
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortPlayer,
    ) &&
      ((__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortMuted =
        !__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortMuted),
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortMuted
        ? __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortPlayer.mute()
        : __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortPlayer.unMute(),
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortMute.innerHTML =
        __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f(
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortMuted
            ? "\u0069\u0063\u006f\u006e\u002d\u006d\u0075\u0074\u0065\u0064"
            : "\u0069\u0063\u006f\u006e\u002d\u0076\u006f\u006c\u0075\u006d\u0065",
        )));
  }
  const __5ea342d1cfd9f6ec81afd2a89f838fcf564e58109239eebedf1a0061880697ca = (
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) => (
    __39053f711d861234a1caa9142d12d9d933153846f62df2e5ffb2f8e72a90586e(!0),
    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shorts.length &&
      __a7c6cc0301f7847a9751a2f91004be6fbb9ecafe2819015e092a436c3f7692af(
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortIndex +
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      )
  );
  let __259662ca3c6d31818950d16cdb4d6a741cf5409a367d0e1b56988004b7d0d6ec = null,
    __37e8ce9abe97de314046d2ca5959938599ed734a941539567c7fca16b4943890 = 0;
  function __fac5552d8ca9e8594b4ade43fe88eed003bb5afad2fda9d44bc9fca79f780be0(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    if (
      __259662ca3c6d31818950d16cdb4d6a741cf5409a367d0e1b56988004b7d0d6ec ||
      !__c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c(
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortPlayer,
      )
    )
      return;
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortPlayer;
    __259662ca3c6d31818950d16cdb4d6a741cf5409a367d0e1b56988004b7d0d6ec = {
      source: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      player: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
      rate:
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.getPlaybackRate?.() || 1,
      paused:
        1 !== __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.getPlayerState(),
      held: !1,
    };
    const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
      __259662ca3c6d31818950d16cdb4d6a741cf5409a367d0e1b56988004b7d0d6ec;
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.timer = setTimeout(() => {
      __259662ca3c6d31818950d16cdb4d6a741cf5409a367d0e1b56988004b7d0d6ec ===
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c &&
        ((__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.held = !0),
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.setPlaybackRate?.(2),
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.playVideo?.(),
        (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortStage.dataset.speedHold =
          "\u0074\u0072\u0075\u0065"));
    }, 350);
  }
  function __39053f711d861234a1caa9142d12d9d933153846f62df2e5ffb2f8e72a90586e(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = !1,
  ) {
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
      __259662ca3c6d31818950d16cdb4d6a741cf5409a367d0e1b56988004b7d0d6ec;
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
      ((__259662ca3c6d31818950d16cdb4d6a741cf5409a367d0e1b56988004b7d0d6ec = null),
      clearTimeout(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.timer),
      delete __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortStage.dataset
        .speedHold,
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.held
        ? (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.player.setPlaybackRate?.(
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.rate,
          ),
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.paused &&
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.player.pauseVideo?.(),
          (__37e8ce9abe97de314046d2ca5959938599ed734a941539567c7fca16b4943890 =
            performance.now() + 500))
        : __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ||
          "\u006b\u0065\u0079\u0062\u006f\u0061\u0072\u0064" !==
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.source ||
          __873b86a00f690ff2f7422c1a8cd3a4eb9b66caaebb072c9bdd29b047f36257ec());
  }
  function __075a7a22426f3b139059015149c24b9a3c4fa332fb5dadd86d9fc08a540ce684(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    if (
      !__c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c(
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer,
      )
    )
      return;
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
      Number(
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer.getDuration?.(),
      ) || 0;
    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer.seekTo(
      Math.max(
        0,
        Math.min(
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        ),
      ),
      !0,
    );
  }
  function __cf6fdcea7f349c77dc5d548287454d806a7f9a58ad99fdf8faa4f7b1caaab4fa(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = !1,
  ) {
    if (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
      const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchTrail.pop();
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
        ((__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchVideo = null),
        __eee561f91b58ee873b5a76df4fe070031bb64d02e0803f54276f6fdbb14b2b43(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        ));
    } else {
      const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
        __fee7105fc4d51af0577a7b27c6ef4e0cf85c90de87e72e9d1a6579f318300a72(
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchVideo || {},
          1,
        )[0];
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
        __eee561f91b58ee873b5a76df4fe070031bb64d02e0803f54276f6fdbb14b2b43(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        );
    }
  }
  function __d4328b3c079cae4765d909537fb4faf59c803748f8b68cadb684080155074109() {
    (__39053f711d861234a1caa9142d12d9d933153846f62df2e5ffb2f8e72a90586e(!0),
      __3e4c1d9f3f3cfdbff7c2a891a8b2f7642dd9345ff1939b5e342a606f29c606e2({
        cancel: !0,
      }));
    const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03("\u005b\u0064\u0061\u0074\u0061\u002d\u0073\u0068\u006f\u0072\u0074\u0063\u0075\u0074\u002d\u0068\u0065\u006c\u0070\u005d");
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.open ||
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.showModal();
  }
  const __32c0adec94c3015860750ea941aa1b3e171dc246edcd75680e487051000d20eb = (
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) =>
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 instanceof Element &&
    Boolean(
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.closest(
        "\u0069\u006e\u0070\u0075\u0074\u002c\u0074\u0065\u0078\u0074\u0061\u0072\u0065\u0061\u002c\u0073\u0065\u006c\u0065\u0063\u0074\u002c\u0062\u0075\u0074\u0074\u006f\u006e\u002c\u0061\u002c\u0073\u0075\u006d\u006d\u0061\u0072\u0079\u002c\u005b\u0063\u006f\u006e\u0074\u0065\u006e\u0074\u0065\u0064\u0069\u0074\u0061\u0062\u006c\u0065\u005d",
      ),
    );
  (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
    addEventListener(
      "\u006d\u0065\u0073\u0073\u0061\u0067\u0065",
      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.origin ===
          location.origin &&
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.source === parent &&
          "\u0064\u0072\u006f\u0070\u003a\u0074\u0075\u0062\u0065\u002d\u0070\u0061\u0075\u0073\u0065" ===
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.data?.type &&
          (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer
            ?.isInvidious
            ? (__72a91b917bacdbcddd40e0b0aed73d716d3df7426f358b72f02cb51e3ea8899d(),
              __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(
                "\u0050\u0072\u0065\u0073\u0073\u0020\u0049\u006e\u0076\u0069\u0064\u0069\u006f\u0075\u0073\u0020\u0074\u006f\u0020\u0072\u0065\u006f\u0070\u0065\u006e\u0020\u0074\u0068\u0065\u0020\u0076\u0069\u0064\u0065\u006f\u002e",
              ))
            : __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer?.pauseVideo?.());
      },
    ),
    __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238(),
    (function () {
      (addEventListener(
        "\u006d\u0065\u0073\u0073\u0061\u0067\u0065",
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.origin ===
            location.origin &&
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.source === parent &&
            "\u006e\u0079\u0078\u003a\u006e\u0079\u0078\u0074\u0075\u0062\u0065\u002d\u0070\u0072\u006f\u0066\u0069\u006c\u0065" ===
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.data?.type &&
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.data.requestId ===
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.profileRequestId &&
            (function (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = {}) {
              (clearTimeout(
                __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.profileRetryTimer,
              ),
                (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.profileRetryTimer = 0),
                (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.profileResolved =
                  !0));
              const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                String(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.displayName ||
                    "\u0050\u0072\u006f\u0066\u0069\u006c\u0065",
                ).trim() || "\u0050\u0072\u006f\u0066\u0069\u006c\u0065";
              ((__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.profile = {
                uid: String(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.uid || "",
                ),
                signedIn: Boolean(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.signedIn,
                ),
                displayName: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                avatarUrl: String(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.avatarUrl ||
                    "",
                ),
              }),
                (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.profileButton.title =
                  __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.profile
                    .signedIn
                    ? `Open ${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5}'s profile`
                    : "\u0053\u0069\u0067\u006e\u0020\u0069\u006e\u0020\u006f\u0072\u0020\u0063\u0072\u0065\u0061\u0074\u0065\u0020\u0061\u0020\u0070\u0072\u006f\u0066\u0069\u006c\u0065"),
                __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.profileButton.setAttribute(
                  "\u0061\u0072\u0069\u0061\u002d\u006c\u0061\u0062\u0065\u006c",
                  __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.profileButton
                    .title,
                ));
              const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = () => {
                if (
                  (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.profileAvatar.replaceChildren(),
                  __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.profile
                    .signedIn)
                ) {
                  const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
                    document.createElement("\u0073\u0070\u0061\u006e");
                  ((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.textContent =
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
                      .slice(0, 1)
                      .toUpperCase() || "\u004e"),
                    __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.profileAvatar.append(
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                    ));
                } else
                  __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.profileAvatar.innerHTML =
                    __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f("\u0069\u0063\u006f\u006e\u002d\u0075\u0073\u0065\u0072");
              };
              if (
                !__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.profile
                  .avatarUrl
              )
                return void __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c();
              const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                document.createElement("\u0069\u006d\u0067");
              ((__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.alt = ""),
                (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.loading =
                  "\u0065\u0061\u0067\u0065\u0072"),
                (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.src =
                  __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.profile.avatarUrl),
                __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.addEventListener(
                  "\u0065\u0072\u0072\u006f\u0072",
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                  {
                    once: !0,
                  },
                ),
                __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.profileAvatar.replaceChildren(
                  __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                ));
            })(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.data.profile);
        },
      ),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.profileButton.addEventListener(
          "\u0063\u006c\u0069\u0063\u006b",
          () =>
            parent.postMessage(
              {
                type: "\u006e\u0079\u0078\u003a\u006e\u0079\u0078\u0074\u0075\u0062\u0065\u002d\u006f\u0070\u0065\u006e\u002d\u0070\u0072\u006f\u0066\u0069\u006c\u0065",
                uid: __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.profile.uid,
              },
              location.origin,
            ),
        ),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchChannelMark.addEventListener(
          "\u0063\u006c\u0069\u0063\u006b",
          __8d22331976a8113666a0908c81e73aa73428cab2801e9b29ace9b37721493fda,
        ),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchCreator.addEventListener(
          "\u0063\u006c\u0069\u0063\u006b",
          __8d22331976a8113666a0908c81e73aa73428cab2801e9b29ace9b37721493fda,
        ),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.channelBack.addEventListener(
          "\u0063\u006c\u0069\u0063\u006b",
          () =>
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchVideo &&
            __eee561f91b58ee873b5a76df4fe070031bb64d02e0803f54276f6fdbb14b2b43(
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchVideo,
            ),
        ),
        document.addEventListener("\u0076\u0069\u0073\u0069\u0062\u0069\u006c\u0069\u0074\u0079\u0063\u0068\u0061\u006e\u0067\u0065", () => {
          document.hidden
            ? (__3e4c1d9f3f3cfdbff7c2a891a8b2f7642dd9345ff1939b5e342a606f29c606e2({
                cancel: !0,
              }),
              __39053f711d861234a1caa9142d12d9d933153846f62df2e5ffb2f8e72a90586e(!0))
            : __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161();
        }),
        addEventListener("\u0062\u006c\u0075\u0072", () => {
          (__3e4c1d9f3f3cfdbff7c2a891a8b2f7642dd9345ff1939b5e342a606f29c606e2({
            cancel: !0,
          }),
            __39053f711d861234a1caa9142d12d9d933153846f62df2e5ffb2f8e72a90586e(!0));
        }),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.searchForm.addEventListener(
          "\u0073\u0075\u0062\u006d\u0069\u0074",
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.preventDefault();
            const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
              __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.searchInput.value.trim();
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
              __51e241f4e1ab21052e5631abbf6ddcfbf931e3f1ce73d61a5a8454c170b94eba(
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
              );
          },
        ),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortSearchForm?.addEventListener(
          "\u0073\u0075\u0062\u006d\u0069\u0074",
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.preventDefault();
            const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
              __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortSearchInput.value.trim();
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.length >= 2 &&
              __0159afb719a78ed8c8a3938ee144c930b121f1fd74d588b30e9186af4a2f89d7(
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
              );
          },
        ),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortRetry?.addEventListener(
          "\u0063\u006c\u0069\u0063\u006b",
          () =>
            __0159afb719a78ed8c8a3938ee144c930b121f1fd74d588b30e9186af4a2f89d7(
              __96269fbafcaf1e59a066bbe22f9ec441fbf0ff3e38084b904ada564b445561a8,
              __a27fb158ddcbc635df4f915211d5c8e5d6a8c04827fe1281526c34bc41e8fb8b,
            ),
        ),
        document.addEventListener(
          "\u0070\u006f\u0069\u006e\u0074\u0065\u0072\u0064\u006f\u0077\u006e",
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
            __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortMenu?.open &&
              !__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortMenu.contains(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target,
              ) &&
              (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortMenu.open =
                !1);
          },
        ),
        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
          "\u005b\u0064\u0061\u0074\u0061\u002d\u0073\u0068\u006f\u0072\u0074\u002d\u0074\u006f\u0070\u0069\u0063\u005d",
        ).forEach((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.addEventListener(
            "\u0063\u006c\u0069\u0063\u006b",
            () =>
              __0159afb719a78ed8c8a3938ee144c930b121f1fd74d588b30e9186af4a2f89d7(
                "",
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.dataset
                  .shortTopic,
              ),
          ),
        ),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortDislike?.addEventListener(
          "\u0063\u006c\u0069\u0063\u006b",
          () => {
            __17637b72fc4733887b3a19c85d5d3c70864a8f76b0495e06a14055b0d0c65db6();
          },
        ),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortHideChannel?.addEventListener(
          "\u0063\u006c\u0069\u0063\u006b",
          () => {
            __17637b72fc4733887b3a19c85d5d3c70864a8f76b0495e06a14055b0d0c65db6(!0);
          },
        ),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortHeart?.addEventListener(
          "\u0063\u006c\u0069\u0063\u006b",
          () => {
            const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shorts[
                __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortIndex
              ];
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.channelId &&
              (__8e04d8c4780a41135c77f04bcb15f46b8963c2621ff8ab409d683183f5eef2d5.has(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
              )
                ? (__8e04d8c4780a41135c77f04bcb15f46b8963c2621ff8ab409d683183f5eef2d5.delete(
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
                  ),
                  __93536d44227c5b08b5ca3329b461f40f0176e5a265c69f35f5e7eaaaf25baabb(
                    "\u004c\u0069\u006b\u0065\u0020\u0072\u0065\u006d\u006f\u0076\u0065\u0064\u002e\u0020\u0059\u006f\u0075\u0072\u0020\u0046\u006f\u0072\u0020\u0079\u006f\u0075\u0020\u0066\u0065\u0065\u0064\u0020\u0068\u0061\u0073\u0020\u0062\u0065\u0065\u006e\u0020\u0061\u0064\u006a\u0075\u0073\u0074\u0065\u0064\u002e",
                  ))
                : (__8e04d8c4780a41135c77f04bcb15f46b8963c2621ff8ab409d683183f5eef2d5.set(
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
                    {
                      id: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.id,
                      channelId:
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.channelId,
                    },
                  ),
                  __93536d44227c5b08b5ca3329b461f40f0176e5a265c69f35f5e7eaaaf25baabb(
                    `Liked. For you will show more from ${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.creator || "\u0074\u0068\u0069\u0073\u0020\u0063\u0072\u0065\u0061\u0074\u006f\u0072"}.`,
                  )),
              __8a634624ecf034ed097cd5e7c1a9e014c7efed1bf92024f2b4af50aa6eb48c94(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              ),
              __8846e27b07ac021b6c32fc8bdc0c411f01ff3e6d19c3048355784ff30aa3c433());
          },
        ),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortReset?.addEventListener(
          "\u0063\u006c\u0069\u0063\u006b",
          () => {
            (__66e401afb5509cbf5c4bb5624e18bcf319933c46cb9b07bc6c7f86affaa05b78.clear(),
              __3abefec312ee58c7fe62ed56861d8dd221822df7f4adf805e11d7b6e7cea0012.clear(),
              __8e04d8c4780a41135c77f04bcb15f46b8963c2621ff8ab409d683183f5eef2d5.clear(),
              __93536d44227c5b08b5ca3329b461f40f0176e5a265c69f35f5e7eaaaf25baabb(
                "\u004c\u0069\u006b\u0065\u0073\u0020\u0061\u006e\u0064\u0020\u0068\u0069\u0064\u0064\u0065\u006e\u0020\u0076\u0069\u0064\u0065\u006f\u0073\u002f\u0063\u0068\u0061\u006e\u006e\u0065\u006c\u0073\u0020\u0063\u006c\u0065\u0061\u0072\u0065\u0064\u002e",
              ),
              __0159afb719a78ed8c8a3938ee144c930b121f1fd74d588b30e9186af4a2f89d7());
          },
        ),
        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713("\u005b\u0064\u0061\u0074\u0061\u002d\u0074\u006f\u0070\u0069\u0063\u005d").forEach(
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.addEventListener(
              "\u0063\u006c\u0069\u0063\u006b",
              () => {
                ((__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.searchInput.value =
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.dataset.topic),
                  __51e241f4e1ab21052e5631abbf6ddcfbf931e3f1ce73d61a5a8454c170b94eba(
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.dataset
                      .topic,
                  ));
              },
            ),
        ),
        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
          "\u005b\u0064\u0061\u0074\u0061\u002d\u0076\u0069\u0065\u0077\u002d\u0062\u0075\u0074\u0074\u006f\u006e\u005d",
        ).forEach((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.addEventListener(
            "\u0063\u006c\u0069\u0063\u006b",
            () => {
              (__319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.dataset
                  .viewButton,
              ),
                "\u0073\u0068\u006f\u0072\u0074\u0073" ===
                  __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.view &&
                  __7afa888e62ebfbac2e6002ec2d80426c0fd84774cdd464eebc432bfd97f1d538());
            },
          ),
        ),
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03(
          "\u005b\u0064\u0061\u0074\u0061\u002d\u0062\u0061\u0063\u006b\u005d",
        ).addEventListener("\u0063\u006c\u0069\u0063\u006b", () => {
          "\u0077\u0061\u0074\u0063\u0068" === __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.view
            ? __319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0068\u006f\u006d\u0065")
            : __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b.length > 1
              ? __f23292d28723020ece6b2d8df28f3dbb5373858014185d90f070a8319897eb4b.back()
              : (location.href = "\u002f");
        }),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchToggle.addEventListener(
          "\u0063\u006c\u0069\u0063\u006b",
          __18ea2355b700bc3da376566033246086363e448236dec54f8a83a790ea161960,
        ),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchCenterPlay.addEventListener(
          "\u0063\u006c\u0069\u0063\u006b",
          __18ea2355b700bc3da376566033246086363e448236dec54f8a83a790ea161960,
        ),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchMute.addEventListener(
          "\u0063\u006c\u0069\u0063\u006b",
          __99a0af1660cfe58affc3ff899430bd5f7454d63db4b4a7a04e0a92268413e998,
        ));
      const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = (
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      ) => {
        if (!__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchVideo) return;
        __3e4c1d9f3f3cfdbff7c2a891a8b2f7642dd9345ff1939b5e342a606f29c606e2({
          cancel: !0,
        });
        const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer,
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = {
            quality: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
            time:
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5?.getCurrentTime?.() ||
              0,
            paused:
              2 ===
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5?.getPlayerState?.(),
            volume:
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5?.getVolume?.() ??
              100,
            rate:
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5?.getPlaybackRate?.() ||
              1,
            muted:
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5?.isMuted?.() || !1,
          };
        __5a2fa72065e6201b186de750f00e9aef5fdba5eabe9611c30108d7e663e502b7(
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchVideo,
          !1,
          !1,
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
        ).catch(() =>
          __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(
            "\u0054\u0068\u0065\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0070\u006c\u0061\u0079\u0065\u0072\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0073\u0074\u0061\u0072\u0074\u002e",
          ),
        );
      };
      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchStage.addEventListener(
        "\u0070\u006f\u0069\u006e\u0074\u0065\u0072\u0064\u006f\u0077\u006e",
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
          0 === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.button &&
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.isPrimary &&
            "\u0077\u0061\u0074\u0063\u0068" === __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.view &&
            !__32c0adec94c3015860750ea941aa1b3e171dc246edcd75680e487051000d20eb(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target,
            ) &&
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target.closest(
              "\u005b\u0064\u0061\u0074\u0061\u002d\u0077\u0061\u0074\u0063\u0068\u002d\u0070\u006c\u0061\u0079\u0065\u0072\u005d\u002c\u005b\u0064\u0061\u0074\u0061\u002d\u0077\u0061\u0074\u0063\u0068\u002d\u0067\u0065\u0073\u0074\u0075\u0072\u0065\u005d",
            ) &&
            (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchSpacePressed ||
              (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.preventDefault(),
              __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchStage.focus({
                preventScroll: !0,
              }),
              (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPointerId =
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.pointerId),
              __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchStage.setPointerCapture(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.pointerId,
              ),
              __153775183a87af39b37d038f0f2d9a41fb6f191283bb242f26b279c138ab61ea("\u0070\u006f\u0069\u006e\u0074\u0065\u0072")));
        },
      );
      const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = (
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = !1,
      ) => {
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.pointerId ===
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPointerId &&
          ((__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPointerId =
            null),
          "\u0070\u006f\u0069\u006e\u0074\u0065\u0072" ===
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchHoldSource &&
            __3e4c1d9f3f3cfdbff7c2a891a8b2f7642dd9345ff1939b5e342a606f29c606e2({
              cancel: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
            }),
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchStage.hasPointerCapture(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.pointerId,
          ) &&
            __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchStage.releasePointerCapture(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.pointerId,
            ));
      };
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchStage.addEventListener(
        "\u0070\u006f\u0069\u006e\u0074\u0065\u0072\u0075\u0070",
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          ),
      ),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchStage.addEventListener(
          "\u0070\u006f\u0069\u006e\u0074\u0065\u0072\u0063\u0061\u006e\u0063\u0065\u006c",
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              !0,
            ),
        ),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchStage.addEventListener(
          "\u006c\u006f\u0073\u0074\u0070\u006f\u0069\u006e\u0074\u0065\u0072\u0063\u0061\u0070\u0074\u0075\u0072\u0065",
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              !0,
            ),
        ),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchQuality.addEventListener(
          "\u0063\u0068\u0061\u006e\u0067\u0065",
          () =>
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5(
              Number(
                __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchQuality
                  .value,
              ),
            ),
        ),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchEngine.addEventListener(
          "\u0063\u006c\u0069\u0063\u006b",
          () => {
            ((__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.preferredPlayer =
              "\u006e\u0061\u0074\u0069\u0076\u0065" !==
                __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchEngine
                  .value &&
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.nativeAvailable
                ? "\u006e\u0061\u0074\u0069\u0076\u0065"
                : "\u0079\u006f\u0075\u0074\u0075\u0062\u0065"),
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5());
          },
        ),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchBackup.addEventListener(
          "\u0063\u006c\u0069\u0063\u006b",
          () => {
            ((__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.preferredPlayer =
              "\u0069\u006e\u0076\u0069\u0064\u0069\u006f\u0075\u0073"),
              __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(
                "\u0055\u0073\u0065\u0020\u0074\u0068\u0065\u0020\u0063\u006f\u006e\u0074\u0072\u006f\u006c\u0073\u0020\u0069\u006e\u0073\u0069\u0064\u0065\u0020\u0074\u0068\u0065\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0066\u006f\u0072\u0020\u0070\u006c\u0061\u0079\u0062\u0061\u0063\u006b\u002c\u0020\u0071\u0075\u0061\u006c\u0069\u0074\u0079\u0020\u0061\u006e\u0064\u0020\u0066\u0075\u006c\u006c\u0073\u0063\u0072\u0065\u0065\u006e\u002e",
              ),
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5());
          },
        ),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchProgress.addEventListener(
          "\u0069\u006e\u0070\u0075\u0074",
          () => {
            __c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c(
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer,
            ) &&
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer.seekTo(
                ((__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer.getDuration?.() ||
                  0) *
                  Number(
                    __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchProgress
                      .value,
                  )) /
                  1e3,
                !0,
              );
          },
        ));
      const __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 = () =>
        __a1966e2585746c7ebc63b861729ff89ab0d7f7629da72c73cf99b96ee03569f3(
          !__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchCaptions,
        );
      (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchCaptions.addEventListener(
        "\u0063\u006c\u0069\u0063\u006b",
        __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238,
      ),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchCaptionOption.addEventListener(
          "\u0063\u006c\u0069\u0063\u006b",
          __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238,
        ),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchFullscreen.addEventListener(
          "\u0063\u006c\u0069\u0063\u006b",
          () =>
            __eeec32ecce69bf87a9c1e4365b9269e4b204338d020b7994a786b662b2349454(
              __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchStage,
            ),
        ),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchSettings.addEventListener(
          "\u0063\u006c\u0069\u0063\u006b",
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.stopPropagation();
            const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
              __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchSettingsMenu
                .hidden;
            (__26b5b17a3f16601a1a0082d03dcd66a84af474199e7739e8e1653580cef84d82(),
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
                ((__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchSettingsMenu.hidden =
                  !1),
                __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchSettings.setAttribute(
                  "\u0061\u0072\u0069\u0061\u002d\u0065\u0078\u0070\u0061\u006e\u0064\u0065\u0064",
                  "\u0074\u0072\u0075\u0065",
                ),
                __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchSpeed.focus(
                  {
                    preventScroll: !0,
                  },
                )));
          },
        ),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchSettingsMenu.addEventListener(
          "\u0063\u006c\u0069\u0063\u006b",
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.stopPropagation(),
        ),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchSpeed.addEventListener(
          "\u0063\u0068\u0061\u006e\u0067\u0065",
          () => {
            try {
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer?.setPlaybackRate?.(
                Number(
                  __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchSpeed
                    .value,
                ) || 1,
              );
            } catch {}
          },
        ),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchVolume.addEventListener(
          "\u0069\u006e\u0070\u0075\u0074",
          () => {
            try {
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer?.setVolume?.(
                Number(
                  __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchVolume
                    .value,
                ) || 0,
              );
            } catch {}
          },
        ),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchSettingsCaptions.addEventListener(
          "\u0063\u0068\u0061\u006e\u0067\u0065",
          () =>
            __a1966e2585746c7ebc63b861729ff89ab0d7f7629da72c73cf99b96ee03569f3(
              "\u006f\u006e" ===
                __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2
                  .watchSettingsCaptions.value,
            ),
        ),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchRewind.addEventListener(
          "\u0063\u006c\u0069\u0063\u006b",
          () => __9d433778c84bb56320ac2926429ccbbc9e33af617b171cf71422a4a874f28af1(-10),
        ),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchForward.addEventListener(
          "\u0063\u006c\u0069\u0063\u006b",
          () => __9d433778c84bb56320ac2926429ccbbc9e33af617b171cf71422a4a874f28af1(10),
        ),
        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
          "\u005b\u0064\u0061\u0074\u0061\u002d\u0077\u0061\u0074\u0063\u0068\u002d\u0069\u006e\u0066\u006f\u002d\u0074\u0061\u0062\u005d",
        ).forEach((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.addEventListener(
            "\u0063\u006c\u0069\u0063\u006b",
            () =>
              __e89c06b9c8c138ab668108b5f84a303333ad66d3886346a0eb785642be515763(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.dataset
                  .watchInfoTab,
              ),
          ),
        ),
        document.addEventListener(
          "\u0063\u006c\u0069\u0063\u006b",
          __26b5b17a3f16601a1a0082d03dcd66a84af474199e7739e8e1653580cef84d82,
        ));
      let __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1 = 0,
        __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 = 0,
        __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe = -1 / 0,
        __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a = null,
        __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d = 0;
      const __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34 = (
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      ) => {
        __39053f711d861234a1caa9142d12d9d933153846f62df2e5ffb2f8e72a90586e(!0);
        const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
          performance.now();
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 -
          __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe <
          450 ||
          ((__8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe =
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5),
          __5ea342d1cfd9f6ec81afd2a89f838fcf564e58109239eebedf1a0061880697ca(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          ));
      };
      (document.addEventListener(
        "\u0077\u0068\u0065\u0065\u006c",
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
          if (
            "\u0073\u0068\u006f\u0072\u0074\u0073" !== __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.view ||
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.ctrlKey ||
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target.closest?.(
              "\u0069\u006e\u0070\u0075\u0074\u002c\u0074\u0065\u0078\u0074\u0061\u0072\u0065\u0061\u002c\u0073\u0065\u006c\u0065\u0063\u0074\u002c\u005b\u0063\u006f\u006e\u0074\u0065\u006e\u0074\u0065\u0064\u0069\u0074\u0061\u0062\u006c\u0065\u005d",
            ) ||
            Math.abs(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.deltaX) >
              Math.abs(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.deltaY)
          )
            return;
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.preventDefault();
          const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
            performance.now();
          ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 -
            __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 >
            180 ||
            Math.sign(__28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1) !==
              Math.sign(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.deltaY,
              )) &&
            (__28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1 = 0),
            (__32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 =
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5),
            (__28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1 +=
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.deltaY *
              (1 === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.deltaMode
                ? 16
                : 2 === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.deltaMode
                  ? innerHeight
                  : 1)),
            Math.abs(__28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1) >= 40 &&
              (__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34(
                Math.sign(__28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1),
              ),
              (__28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1 = 0)));
        },
        {
          passive: !1,
        },
      ),
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ||
          (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortStage.addEventListener(
            "\u0070\u006f\u0069\u006e\u0074\u0065\u0072\u0064\u006f\u0077\u006e",
            (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
              (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.isPrimary &&
                0 === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.button &&
                !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target.closest(
                  "\u0062\u0075\u0074\u0074\u006f\u006e\u002c\u0061\u002c\u0069\u006e\u0070\u0075\u0074",
                ) &&
                (__fac5552d8ca9e8594b4ade43fe88eed003bb5afad2fda9d44bc9fca79f780be0("\u0070\u006f\u0069\u006e\u0074\u0065\u0072"),
                __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortStage.setPointerCapture(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.pointerId,
                )),
                "\u0074\u006f\u0075\u0063\u0068" !==
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.pointerType ||
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target.closest(
                    "\u0062\u0075\u0074\u0074\u006f\u006e\u002c\u0061\u002c\u0069\u006e\u0070\u0075\u0074",
                  ) ||
                  ((__1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a = {
                    id: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.pointerId,
                    x: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.clientX,
                    y: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.clientY,
                  }),
                  __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortStage.setPointerCapture(
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.pointerId,
                  )));
            },
          ),
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortStage.addEventListener(
            "\u0070\u006f\u0069\u006e\u0074\u0065\u0072\u0075\u0070",
            (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
              if (
                (__39053f711d861234a1caa9142d12d9d933153846f62df2e5ffb2f8e72a90586e(),
                !__1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a ||
                  __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a.id !==
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.pointerId)
              )
                return;
              const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.clientX -
                  __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a.x,
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.clientY -
                  __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a.y;
              ((__1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a = null),
                Math.abs(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c) >=
                  50 &&
                  Math.abs(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c) >
                    Math.abs(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) &&
                  ((__94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d =
                    performance.now() + 350),
                  __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34(
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c < 0 ? 1 : -1,
                  )));
            },
          ),
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortStage.addEventListener(
            "\u0070\u006f\u0069\u006e\u0074\u0065\u0072\u0063\u0061\u006e\u0063\u0065\u006c",
            () => {
              ((__1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a = null),
                __39053f711d861234a1caa9142d12d9d933153846f62df2e5ffb2f8e72a90586e(!0));
            },
          ),
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortStage.addEventListener(
            "\u006c\u006f\u0073\u0074\u0070\u006f\u0069\u006e\u0074\u0065\u0072\u0063\u0061\u0070\u0074\u0075\u0072\u0065",
            () => __39053f711d861234a1caa9142d12d9d933153846f62df2e5ffb2f8e72a90586e(!0),
          ),
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortStage.addEventListener(
            "\u0070\u006f\u0069\u006e\u0074\u0065\u0072\u006d\u006f\u0076\u0065",
            (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
              __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a &&
                Math.abs(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.clientY -
                    __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a.y,
                ) > 15 &&
                __39053f711d861234a1caa9142d12d9d933153846f62df2e5ffb2f8e72a90586e(!0);
            },
          ),
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortCenterPlay.addEventListener(
            "\u0063\u006c\u0069\u0063\u006b",
            __873b86a00f690ff2f7422c1a8cd3a4eb9b66caaebb072c9bdd29b047f36257ec,
          ),
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortStage.addEventListener(
            "\u0063\u006c\u0069\u0063\u006b",
            (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
              performance.now() >=
                Math.max(
                  __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d,
                  __37e8ce9abe97de314046d2ca5959938599ed734a941539567c7fca16b4943890,
                ) &&
                !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target.closest(
                  "\u0062\u0075\u0074\u0074\u006f\u006e\u002c\u0061",
                ) &&
                __873b86a00f690ff2f7422c1a8cd3a4eb9b66caaebb072c9bdd29b047f36257ec();
            },
          ),
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortMute.addEventListener(
            "\u0063\u006c\u0069\u0063\u006b",
            __5fa76d0d2f081800ac60da3da120f16407885e6c32ef3606c11a12335ba111df,
          ),
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortCaptions.addEventListener(
            "\u0063\u006c\u0069\u0063\u006b",
            () => {
              ((__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortCaptions =
                !__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortCaptions),
                __cbe3e169b82a066efb87cecf43ee78a46c91fe23c1c18420de9d26beb1a60ea4(
                  __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortPlayer,
                  __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortCaptions,
                  __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortCaptions,
                ) ||
                  (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortCaptions =
                    !__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.shortCaptions));
            },
          ),
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortFullscreen.addEventListener(
            "\u0063\u006c\u0069\u0063\u006b",
            () =>
              __eeec32ecce69bf87a9c1e4365b9269e4b204338d020b7994a786b662b2349454(
                __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortStage,
              ),
          ),
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03(
            "\u005b\u0064\u0061\u0074\u0061\u002d\u0073\u0068\u006f\u0072\u0074\u002d\u0070\u0072\u0065\u0076\u0069\u006f\u0075\u0073\u005d",
          ).addEventListener("\u0063\u006c\u0069\u0063\u006b", () =>
            __5ea342d1cfd9f6ec81afd2a89f838fcf564e58109239eebedf1a0061880697ca(-1),
          ),
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03(
            "\u005b\u0064\u0061\u0074\u0061\u002d\u0073\u0068\u006f\u0072\u0074\u002d\u006e\u0065\u0078\u0074\u005d",
          ).addEventListener("\u0063\u006c\u0069\u0063\u006b", () =>
            __5ea342d1cfd9f6ec81afd2a89f838fcf564e58109239eebedf1a0061880697ca(1),
          )),
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03(
          "\u005b\u0064\u0061\u0074\u0061\u002d\u0073\u0068\u006f\u0072\u0074\u0063\u0075\u0074\u002d\u0068\u0065\u006c\u0070\u002d\u0063\u006c\u006f\u0073\u0065\u005d",
        ).addEventListener("\u0063\u006c\u0069\u0063\u006b", () => {
          (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03(
            "\u005b\u0064\u0061\u0074\u0061\u002d\u0073\u0068\u006f\u0072\u0074\u0063\u0075\u0074\u002d\u0068\u0065\u006c\u0070\u005d",
          ).close(),
            __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchStage.focus());
        }),
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03(
          "\u005b\u0064\u0061\u0074\u0061\u002d\u0073\u0068\u006f\u0072\u0074\u0063\u0075\u0074\u002d\u0068\u0065\u006c\u0070\u002d\u006f\u0070\u0065\u006e\u005d",
        ).addEventListener(
          "\u0063\u006c\u0069\u0063\u006b",
          __d4328b3c079cae4765d909537fb4faf59c803748f8b68cadb684080155074109,
        ),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchStage.addEventListener(
          "\u0064\u0062\u006c\u0063\u006c\u0069\u0063\u006b",
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target.closest(
              "\u005b\u0064\u0061\u0074\u0061\u002d\u0077\u0061\u0074\u0063\u0068\u002d\u0067\u0065\u0073\u0074\u0075\u0072\u0065\u005d",
            ) &&
              (__3e4c1d9f3f3cfdbff7c2a891a8b2f7642dd9345ff1939b5e342a606f29c606e2({
                cancel: !0,
              }),
              __eeec32ecce69bf87a9c1e4365b9269e4b204338d020b7994a786b662b2349454(
                __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchStage,
              ));
          },
        ),
        document.addEventListener(
          "\u006b\u0065\u0079\u0064\u006f\u0077\u006e",
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
            if (
              "\u0045\u0073\u0063\u0061\u0070\u0065" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.key &&
              __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortMenu?.open
            )
              return (
                (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortMenu.open =
                  !1),
                void __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortMenu
                  .querySelector("\u0073\u0075\u006d\u006d\u0061\u0072\u0079")
                  .focus()
              );
            if (
              !__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03(
                "\u005b\u0064\u0061\u0074\u0061\u002d\u0073\u0068\u006f\u0072\u0074\u0063\u0075\u0074\u002d\u0068\u0065\u006c\u0070\u005d",
              ).open
            ) {
              if (
                "\u003f" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.key &&
                !__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target.closest?.(
                  "\u0069\u006e\u0070\u0075\u0074\u002c\u0074\u0065\u0078\u0074\u0061\u0072\u0065\u0061\u002c\u0073\u0065\u006c\u0065\u0063\u0074\u002c\u005b\u0063\u006f\u006e\u0074\u0065\u006e\u0074\u0065\u0064\u0069\u0074\u0061\u0062\u006c\u0065\u005d",
                )
              )
                return (
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.preventDefault(),
                  void __d4328b3c079cae4765d909537fb4faf59c803748f8b68cadb684080155074109()
                );
              if (
                "\u002f" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.key &&
                !__32c0adec94c3015860750ea941aa1b3e171dc246edcd75680e487051000d20eb(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target,
                )
              )
                return (
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.preventDefault(),
                  void ("\u0073\u0068\u006f\u0072\u0074\u0073" ===
                    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.view &&
                  __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortSearchInput
                    ? __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortSearchInput.focus()
                    : ("\u0068\u006f\u006d\u0065" !==
                        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.view &&
                        __319f80850c42e29cbd29939346a38fd897fb9b0b977ebd81d739b6d8eade3eed("\u0068\u006f\u006d\u0065"),
                      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.searchInput.focus()))
                );
              if (
                "\u0045\u0073\u0063\u0061\u0070\u0065" ===
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.key &&
                __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchStage.classList.contains(
                  "\u006d\u0069\u006e\u0069\u002d\u0070\u006c\u0061\u0079\u0065\u0072",
                )
              )
                __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchStage.classList.remove(
                  "\u006d\u0069\u006e\u0069\u002d\u0070\u006c\u0061\u0079\u0065\u0072",
                );
              else {
                if (
                  "\u0077\u0061\u0074\u0063\u0068" ===
                    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.view &&
                  !__32c0adec94c3015860750ea941aa1b3e171dc246edcd75680e487051000d20eb(
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target,
                  ) &&
                  (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.ctrlKey ||
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.altKey) &&
                  ["\u0041\u0072\u0072\u006f\u0077\u004c\u0065\u0066\u0074", "\u0041\u0072\u0072\u006f\u0077\u0052\u0069\u0067\u0068\u0074"].includes(
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code,
                  )
                )
                  return (
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.preventDefault(),
                    void (function (
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                    ) {
                      const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = [
                          ...String(
                            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc
                              .watchVideo?.description || "",
                          ).matchAll(/(?:^|\n)\s*((?:\d+:)?\d{1,2}:\d{2})\s+/g),
                        ]
                          .map(
                            (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96[1]
                                .split("\u003a")
                                .reduce(
                                  (
                                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                                  ) =>
                                    60 *
                                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 +
                                    Number(
                                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                                    ),
                                  0,
                                ),
                          )
                          .sort(
                            (
                              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                            ) =>
                              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 -
                              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                          ),
                        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer?.getCurrentTime?.() ||
                          0,
                        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 > 0
                            ? __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.find(
                                (
                                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                                ) =>
                                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 >
                                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c +
                                    1,
                              )
                            : __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
                                .filter(
                                  (
                                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                                  ) =>
                                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 <
                                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c -
                                      2,
                                )
                                .at(-1);
                      void 0 !==
                        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 &&
                        __075a7a22426f3b139059015149c24b9a3c4fa332fb5dadd86d9fc08a540ce684(
                          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                        );
                    })(
                      "\u0041\u0072\u0072\u006f\u0077\u0052\u0069\u0067\u0068\u0074" ===
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code
                        ? 1
                        : -1,
                    )
                  );
                if (
                  "\u0045\u0073\u0063\u0061\u0070\u0065" ===
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.key &&
                  !__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2
                    .watchSettingsMenu.hidden
                )
                  return (
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.preventDefault(),
                    __26b5b17a3f16601a1a0082d03dcd66a84af474199e7739e8e1653580cef84d82(),
                    void __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchSettings.focus()
                  );
                if (
                  !(
                    __32c0adec94c3015860750ea941aa1b3e171dc246edcd75680e487051000d20eb(
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.target,
                    ) ||
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.ctrlKey ||
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.metaKey ||
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.altKey
                  )
                )
                  if (
                    "\u0077\u0061\u0074\u0063\u0068" ===
                    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.view
                  ) {
                    if (
                      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer
                        ?.isInvidious
                    )
                      return;
                    if (
                      ([
                        "\u0053\u0070\u0061\u0063\u0065",
                        "\u004b\u0065\u0079\u004b",
                        "\u004b\u0065\u0079\u004a",
                        "\u004b\u0065\u0079\u004c",
                        "\u0041\u0072\u0072\u006f\u0077\u004c\u0065\u0066\u0074",
                        "\u0041\u0072\u0072\u006f\u0077\u0052\u0069\u0067\u0068\u0074",
                        "\u004b\u0065\u0079\u004d",
                        "\u004b\u0065\u0079\u0043",
                        "\u004b\u0065\u0079\u0046",
                        "\u0041\u0072\u0072\u006f\u0077\u0055\u0070",
                        "\u0041\u0072\u0072\u006f\u0077\u0044\u006f\u0077\u006e",
                        "\u0048\u006f\u006d\u0065",
                        "\u0045\u006e\u0064",
                        "\u0043\u006f\u006d\u006d\u0061",
                        "\u0050\u0065\u0072\u0069\u006f\u0064",
                        "\u004b\u0065\u0079\u0049",
                        "\u004b\u0065\u0079\u0054",
                        "\u004d\u0065\u0064\u0069\u0061\u0050\u006c\u0061\u0079\u0050\u0061\u0075\u0073\u0065",
                        "\u004d\u0065\u0064\u0069\u0061\u0053\u0074\u006f\u0070",
                        "\u004d\u0065\u0064\u0069\u0061\u0054\u0072\u0061\u0063\u006b\u004e\u0065\u0078\u0074",
                        "\u004d\u0065\u0064\u0069\u0061\u0054\u0072\u0061\u0063\u006b\u0050\u0072\u0065\u0076\u0069\u006f\u0075\u0073",
                        ...Array.from(
                          {
                            length: 10,
                          },
                          (
                            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                          ) =>
                            "\u0044\u0069\u0067\u0069\u0074" +
                            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                        ),
                      ].includes(
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code,
                      ) &&
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.preventDefault(),
                      "\u0053\u0070\u0061\u0063\u0065" ===
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code)
                    )
                      return void __153775183a87af39b37d038f0f2d9a41fb6f191283bb242f26b279c138ab61ea();
                    if (
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.repeat &&
                      !["\u0041\u0072\u0072\u006f\u0077\u004c\u0065\u0066\u0074", "\u0041\u0072\u0072\u006f\u0077\u0052\u0069\u0067\u0068\u0074", "\u0041\u0072\u0072\u006f\u0077\u0055\u0070", "\u0041\u0072\u0072\u006f\u0077\u0044\u006f\u0077\u006e", "\u004b\u0065\u0079\u004a", "\u004b\u0065\u0079\u004c"].includes(
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code,
                      )
                    )
                      return;
                    if (
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.shiftKey &&
                      ["\u004b\u0065\u0079\u004e", "\u004b\u0065\u0079\u0050"].includes(
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code,
                      )
                    )
                      return (
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.preventDefault(),
                        void __cf6fdcea7f349c77dc5d548287454d806a7f9a58ad99fdf8faa4f7b1caaab4fa(
                          "\u004b\u0065\u0079\u0050" ===
                            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code,
                        )
                      );
                    if (
                      ("\u004d\u0065\u0064\u0069\u0061\u0054\u0072\u0061\u0063\u006b\u004e\u0065\u0078\u0074" ===
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code &&
                        __cf6fdcea7f349c77dc5d548287454d806a7f9a58ad99fdf8faa4f7b1caaab4fa(),
                      "\u004d\u0065\u0064\u0069\u0061\u0054\u0072\u0061\u0063\u006b\u0050\u0072\u0065\u0076\u0069\u006f\u0075\u0073" ===
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code &&
                        __cf6fdcea7f349c77dc5d548287454d806a7f9a58ad99fdf8faa4f7b1caaab4fa(!0),
                      "\u004d\u0065\u0064\u0069\u0061\u0053\u0074\u006f\u0070" ===
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code &&
                        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer?.pauseVideo?.(),
                      "\u004d\u0065\u0064\u0069\u0061\u0050\u006c\u0061\u0079\u0050\u0061\u0075\u0073\u0065" ===
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code &&
                        __18ea2355b700bc3da376566033246086363e448236dec54f8a83a790ea161960(),
                      "\u004b\u0065\u0079\u0049" ===
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code &&
                        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchStage.classList.toggle(
                          "\u006d\u0069\u006e\u0069\u002d\u0070\u006c\u0061\u0079\u0065\u0072",
                        ),
                      "\u004b\u0065\u0079\u0054" ===
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code &&
                        __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.watch.classList.toggle(
                          "\u0074\u0068\u0065\u0061\u0074\u0065\u0072\u002d\u006d\u006f\u0064\u0065",
                        ),
                      ("\u0048\u006f\u006d\u0065" !==
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code &&
                        "\u0044\u0069\u0067\u0069\u0074\u0030" !==
                          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code) ||
                        __075a7a22426f3b139059015149c24b9a3c4fa332fb5dadd86d9fc08a540ce684(0),
                      "\u0045\u006e\u0064" ===
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code &&
                        __075a7a22426f3b139059015149c24b9a3c4fa332fb5dadd86d9fc08a540ce684(
                          (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer?.getDuration?.() ||
                            0) - 0.1,
                        ),
                      /^Digit[1-9]$/.test(
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code,
                      ) &&
                        __075a7a22426f3b139059015149c24b9a3c4fa332fb5dadd86d9fc08a540ce684(
                          ((__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer?.getDuration?.() ||
                            0) *
                            Number(
                              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code.slice(
                                -1,
                              ),
                            )) /
                            10,
                        ),
                      ["\u0041\u0072\u0072\u006f\u0077\u0055\u0070", "\u0041\u0072\u0072\u006f\u0077\u0044\u006f\u0077\u006e"].includes(
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code,
                      ) &&
                        __c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c(
                          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer,
                        ))
                    ) {
                      const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                        Math.max(
                          0,
                          Math.min(
                            100,
                            (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer.getVolume?.() ??
                              100) +
                              ("\u0041\u0072\u0072\u006f\u0077\u0055\u0070" ===
                              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code
                                ? 5
                                : -5),
                          ),
                        );
                      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer.setVolume?.(
                        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                      ),
                        (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchVolume.value =
                          String(
                            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                          )));
                    }
                    ("\u003e" ===
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.key ||
                    "\u003c" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.key
                      ? (function (
                          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                        ) {
                          const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer;
                          if (
                            !__c63698884bb20bdfd8886e031590de0b7bde9f67cd1cd51c30a56ab57214763c(
                              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                            )
                          )
                            return;
                          __3e4c1d9f3f3cfdbff7c2a891a8b2f7642dd9345ff1939b5e342a606f29c606e2({
                            cancel: !0,
                          });
                          const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                              (
                                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.getAvailablePlaybackRates?.() || [
                                  0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2,
                                ]
                              )
                                .map(Number)
                                .sort(
                                  (
                                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                                  ) =>
                                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 -
                                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                                ),
                            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                              Number(
                                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.getPlaybackRate?.(),
                              ) || 1,
                            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
                              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 > 0
                                ? __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.find(
                                    (
                                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                                    ) =>
                                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 >
                                      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 +
                                        0.01,
                                  )
                                : __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
                                    .filter(
                                      (
                                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                                      ) =>
                                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 <
                                        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 -
                                          0.01,
                                    )
                                    .at(-1);
                          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 &&
                            (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.setPlaybackRate?.(
                              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
                            ),
                            (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchSpeed.value =
                              String(
                                __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
                              )));
                        })(
                          "\u003e" ===
                            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.key
                            ? 1
                            : -1,
                        )
                      : ["\u0050\u0065\u0072\u0069\u006f\u0064", "\u0043\u006f\u006d\u006d\u0061"].includes(
                          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code,
                        ) &&
                        2 ===
                          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchPlayer?.getPlayerState?.() &&
                        __9d433778c84bb56320ac2926429ccbbc9e33af617b171cf71422a4a874f28af1(
                          ("\u0050\u0065\u0072\u0069\u006f\u0064" ===
                          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code
                            ? 1
                            : -1) /
                            (Number(
                              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc
                                .watchVideo?.fps,
                            ) || 30),
                        ),
                      "\u004b\u0065\u0079\u004b" ===
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code &&
                        __18ea2355b700bc3da376566033246086363e448236dec54f8a83a790ea161960(),
                      "\u004b\u0065\u0079\u004a" ===
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code &&
                        __9d433778c84bb56320ac2926429ccbbc9e33af617b171cf71422a4a874f28af1(-10),
                      "\u004b\u0065\u0079\u004c" ===
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code &&
                        __9d433778c84bb56320ac2926429ccbbc9e33af617b171cf71422a4a874f28af1(10),
                      "\u0041\u0072\u0072\u006f\u0077\u004c\u0065\u0066\u0074" ===
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code &&
                        __9d433778c84bb56320ac2926429ccbbc9e33af617b171cf71422a4a874f28af1(-5),
                      "\u0041\u0072\u0072\u006f\u0077\u0052\u0069\u0067\u0068\u0074" ===
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code &&
                        __9d433778c84bb56320ac2926429ccbbc9e33af617b171cf71422a4a874f28af1(5),
                      "\u004b\u0065\u0079\u004d" ===
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code &&
                        __99a0af1660cfe58affc3ff899430bd5f7454d63db4b4a7a04e0a92268413e998(),
                      "\u004b\u0065\u0079\u0043" !==
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code ||
                        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2
                          .watchSettingsCaptions.disabled ||
                        __a1966e2585746c7ebc63b861729ff89ab0d7f7629da72c73cf99b96ee03569f3(
                          !__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchCaptions,
                        ),
                      "\u004b\u0065\u0079\u0046" ===
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code &&
                        __eeec32ecce69bf87a9c1e4365b9269e4b204338d020b7994a786b662b2349454(
                          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchStage,
                        ));
                  } else if (
                    "\u0073\u0068\u006f\u0072\u0074\u0073" ===
                    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.view
                  ) {
                    if (
                      (["\u0053\u0070\u0061\u0063\u0065", "\u004b\u0065\u0079\u004b", "\u004b\u0065\u0079\u0043", "\u0041\u0072\u0072\u006f\u0077\u0055\u0070", "\u0041\u0072\u0072\u006f\u0077\u0044\u006f\u0077\u006e", "\u004b\u0065\u0079\u004d", "\u004b\u0065\u0079\u0046"].includes(
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code,
                      ) &&
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.preventDefault(),
                      "\u0053\u0070\u0061\u0063\u0065" ===
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code)
                    )
                      return void __fac5552d8ca9e8594b4ade43fe88eed003bb5afad2fda9d44bc9fca79f780be0(
                        "\u006b\u0065\u0079\u0062\u006f\u0061\u0072\u0064",
                      );
                    if (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.repeat)
                      return;
                    ("\u004b\u0065\u0079\u0043" ===
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code &&
                      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortCaptions.click(),
                      "\u004b\u0065\u0079\u004b" ===
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code &&
                        __873b86a00f690ff2f7422c1a8cd3a4eb9b66caaebb072c9bdd29b047f36257ec(),
                      "\u0041\u0072\u0072\u006f\u0077\u0055\u0070" ===
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code &&
                        __5ea342d1cfd9f6ec81afd2a89f838fcf564e58109239eebedf1a0061880697ca(-1),
                      "\u0041\u0072\u0072\u006f\u0077\u0044\u006f\u0077\u006e" ===
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code &&
                        __5ea342d1cfd9f6ec81afd2a89f838fcf564e58109239eebedf1a0061880697ca(1),
                      "\u004b\u0065\u0079\u004d" ===
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code &&
                        __5fa76d0d2f081800ac60da3da120f16407885e6c32ef3606c11a12335ba111df(),
                      "\u004b\u0065\u0079\u0046" ===
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code &&
                        __eeec32ecce69bf87a9c1e4365b9269e4b204338d020b7994a786b662b2349454(
                          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.shortStage,
                        ));
                  }
              }
            }
          },
        ),
        document.addEventListener(
          "\u006b\u0065\u0079\u0075\u0070",
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
            if (
              "\u0053\u0070\u0061\u0063\u0065" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code &&
              "\u006b\u0065\u0079\u0062\u006f\u0061\u0072\u0064" ===
                __259662ca3c6d31818950d16cdb4d6a741cf5409a367d0e1b56988004b7d0d6ec?.source
            )
              return (
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.preventDefault(),
                void __39053f711d861234a1caa9142d12d9d933153846f62df2e5ffb2f8e72a90586e()
              );
            "\u0053\u0070\u0061\u0063\u0065" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.code &&
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchSpacePressed &&
              "\u006b\u0065\u0079\u0062\u006f\u0061\u0072\u0064" ===
                __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.watchHoldSource &&
              (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.preventDefault(),
              __3e4c1d9f3f3cfdbff7c2a891a8b2f7642dd9345ff1939b5e342a606f29c606e2());
          },
        ));
    })(),
    __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34(),
    __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161(),
    __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1("\u002f\u0061\u0070\u0069\u002f\u006e\u0079\u0078\u0074\u0075\u0062\u0065\u002f\u0073\u0074\u0061\u0074\u0075\u0073")
      .then((__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c) => {
        if (!__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c?.configured)
          throw new Error("\u004e\u0037\u0058\u0037\u0055\u0042\u0033\u0020\u0069\u0073\u0020\u006e\u006f\u0074\u0020\u0063\u006f\u006e\u0066\u0069\u0067\u0075\u0072\u0065\u0064\u0020\u0079\u0065\u0074\u002e");
        try {
          const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = new URL(
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.invidiousEmbedOrigin,
          );
          "\u0068\u0074\u0074\u0070\u0073\u003a" !==
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.protocol ||
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.username ||
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.password ||
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.port ||
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.href !==
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.origin + "\u002f" ||
            (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.invidiousEmbedOrigin =
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.origin);
        } catch {}
        return (
          (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchBackup.hidden =
            !__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.invidiousEmbedOrigin),
          (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.nativeAvailable =
            !0 ===
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.nativeAvailable),
          (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.watchEngine.hidden =
            !__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.nativeAvailable),
          (async function () {
            const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = String(
              new URLSearchParams(location.search).get("\u0076\u0069\u0064\u0065\u006f") || "",
            ).trim();
            if (
              !/^[A-Za-z0-9_-]{11}$/.test(
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
              )
            )
              return __51e241f4e1ab21052e5631abbf6ddcfbf931e3f1ce73d61a5a8454c170b94eba();
            let __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03;
            try {
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                await __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1(
                  `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxtube/video?id=${encodeURIComponent(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c)}`,
                );
            } catch (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a) {
              if (
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ||
                !(
                  __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.status >=
                    500 ||
                  __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a instanceof
                    TypeError
                )
              )
                throw __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a;
              const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = {
                id: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                title: "\u0059\u006f\u0075\u0054\u0075\u0062\u0065\u0020\u0076\u0069\u0064\u0065\u006f",
                sourceUrl: `https://www.youtube.com/watch?v=${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c}`,
              };
              return (
                (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.catalog = [
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                ]),
                __eee561f91b58ee873b5a76df4fe070031bb64d02e0803f54276f6fdbb14b2b43(
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                  {
                    recoveryMessage: "\u0056\u0069\u0064\u0065\u006f\u0020\u0064\u0065\u0074\u0061\u0069\u006c\u0073\u0020\u0061\u0072\u0065\u0020\u0074\u0065\u006d\u0070\u006f\u0072\u0061\u0072\u0069\u006c\u0079\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u002e\u0020\u0054\u0072\u0079\u0069\u006e\u0067\u0020\u0070\u006c\u0061\u0079\u0062\u0061\u0063\u006b\u002e",
                  },
                )
              );
            }
            const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
              Array.isArray(
                __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03?.videos,
              )
                ? __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.videos[0]
                : null;
            if (!__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713?.id)
              throw new Error("\u0054\u0068\u0061\u0074\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u006c\u006f\u0061\u0064\u0065\u0064\u0020\u0069\u006e\u0020\u004e\u0037\u0058\u0037\u0055\u0042\u0033\u002e");
            if (
              !__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5(
                __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
              )
            )
              return (
                await __51e241f4e1ab21052e5631abbf6ddcfbf931e3f1ce73d61a5a8454c170b94eba(),
                void __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(
                  "\u0054\u0068\u0069\u0073\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0069\u0073\u0020\u006e\u006f\u0074\u0020\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u0020\u0069\u006e\u0020\u0044\u0072\u006f\u0070\u0054\u0075\u0062\u0065\u002e",
                )
              );
            ((__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.catalog = [
              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
            ]),
              __eee561f91b58ee873b5a76df4fe070031bb64d02e0803f54276f6fdbb14b2b43(
                __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
              ));
          })()
        );
      })
      .catch((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
        (__d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21([]),
          __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.message ||
              "\u004e\u0037\u0058\u0037\u0055\u0042\u0033\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0073\u0074\u0061\u0072\u0074\u0065\u0064\u002e",
          ));
      }));
})();
