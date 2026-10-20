export function headerEntries(__7adc85a91ec681dd3ca6bad46dfb6e64776cfe491115af305a4109f8969d1b06) {
  return __7adc85a91ec681dd3ca6bad46dfb6e64776cfe491115af305a4109f8969d1b06
    ? __7adc85a91ec681dd3ca6bad46dfb6e64776cfe491115af305a4109f8969d1b06 instanceof Headers
      ? [...__7adc85a91ec681dd3ca6bad46dfb6e64776cfe491115af305a4109f8969d1b06.entries()]
      : "\u0066\u0075\u006e\u0063\u0074\u0069\u006f\u006e" ==
          typeof __7adc85a91ec681dd3ca6bad46dfb6e64776cfe491115af305a4109f8969d1b06[Symbol.iterator]
        ? [...__7adc85a91ec681dd3ca6bad46dfb6e64776cfe491115af305a4109f8969d1b06].flatMap(
            ([
              __7adc85a91ec681dd3ca6bad46dfb6e64776cfe491115af305a4109f8969d1b06,
              __1c2f27c3565f1ba45429ffcfe65295e86f7f1ec56942424636fa519f3e416249,
            ]) =>
              Array.isArray(__1c2f27c3565f1ba45429ffcfe65295e86f7f1ec56942424636fa519f3e416249)
                ? __1c2f27c3565f1ba45429ffcfe65295e86f7f1ec56942424636fa519f3e416249.map(
                    (__1c2f27c3565f1ba45429ffcfe65295e86f7f1ec56942424636fa519f3e416249) => [
                      String(__7adc85a91ec681dd3ca6bad46dfb6e64776cfe491115af305a4109f8969d1b06),
                      String(__1c2f27c3565f1ba45429ffcfe65295e86f7f1ec56942424636fa519f3e416249),
                    ],
                  )
                : null == __1c2f27c3565f1ba45429ffcfe65295e86f7f1ec56942424636fa519f3e416249
                  ? []
                  : [
                      [
                        String(__7adc85a91ec681dd3ca6bad46dfb6e64776cfe491115af305a4109f8969d1b06),
                        String(__1c2f27c3565f1ba45429ffcfe65295e86f7f1ec56942424636fa519f3e416249),
                      ],
                    ],
          )
        : "\u006f\u0062\u006a\u0065\u0063\u0074" == typeof __7adc85a91ec681dd3ca6bad46dfb6e64776cfe491115af305a4109f8969d1b06
          ? Object.entries(
              __7adc85a91ec681dd3ca6bad46dfb6e64776cfe491115af305a4109f8969d1b06,
            ).flatMap(
              ([
                __7adc85a91ec681dd3ca6bad46dfb6e64776cfe491115af305a4109f8969d1b06,
                __1c2f27c3565f1ba45429ffcfe65295e86f7f1ec56942424636fa519f3e416249,
              ]) =>
                Array.isArray(__1c2f27c3565f1ba45429ffcfe65295e86f7f1ec56942424636fa519f3e416249)
                  ? __1c2f27c3565f1ba45429ffcfe65295e86f7f1ec56942424636fa519f3e416249.map(
                      (__1c2f27c3565f1ba45429ffcfe65295e86f7f1ec56942424636fa519f3e416249) => [
                        __7adc85a91ec681dd3ca6bad46dfb6e64776cfe491115af305a4109f8969d1b06,
                        String(__1c2f27c3565f1ba45429ffcfe65295e86f7f1ec56942424636fa519f3e416249),
                      ],
                    )
                  : null == __1c2f27c3565f1ba45429ffcfe65295e86f7f1ec56942424636fa519f3e416249
                    ? []
                    : [
                        [
                          __7adc85a91ec681dd3ca6bad46dfb6e64776cfe491115af305a4109f8969d1b06,
                          String(
                            __1c2f27c3565f1ba45429ffcfe65295e86f7f1ec56942424636fa519f3e416249,
                          ),
                        ],
                      ],
            )
          : []
    : [];
}
export function headerRecord(__7adc85a91ec681dd3ca6bad46dfb6e64776cfe491115af305a4109f8969d1b06) {
  const __1c2f27c3565f1ba45429ffcfe65295e86f7f1ec56942424636fa519f3e416249 = {};
  for (const [
    __dec0756bcd6ea7e337fd7120b3dfbccb4a685ac12453d65e31ce69246f229868,
    __e66d2a57ea2ba7b90958fd0a292b9cdee0569683e71e9e9ffc843180a5bef962,
  ] of headerEntries(__7adc85a91ec681dd3ca6bad46dfb6e64776cfe491115af305a4109f8969d1b06)) {
    const __7adc85a91ec681dd3ca6bad46dfb6e64776cfe491115af305a4109f8969d1b06 = String(
      __dec0756bcd6ea7e337fd7120b3dfbccb4a685ac12453d65e31ce69246f229868,
    ).toLowerCase();
    void 0 ===
    __1c2f27c3565f1ba45429ffcfe65295e86f7f1ec56942424636fa519f3e416249[
      __7adc85a91ec681dd3ca6bad46dfb6e64776cfe491115af305a4109f8969d1b06
    ]
      ? (__1c2f27c3565f1ba45429ffcfe65295e86f7f1ec56942424636fa519f3e416249[
          __7adc85a91ec681dd3ca6bad46dfb6e64776cfe491115af305a4109f8969d1b06
        ] = __e66d2a57ea2ba7b90958fd0a292b9cdee0569683e71e9e9ffc843180a5bef962)
      : Array.isArray(
            __1c2f27c3565f1ba45429ffcfe65295e86f7f1ec56942424636fa519f3e416249[
              __7adc85a91ec681dd3ca6bad46dfb6e64776cfe491115af305a4109f8969d1b06
            ],
          )
        ? __1c2f27c3565f1ba45429ffcfe65295e86f7f1ec56942424636fa519f3e416249[
            __7adc85a91ec681dd3ca6bad46dfb6e64776cfe491115af305a4109f8969d1b06
          ].push(__e66d2a57ea2ba7b90958fd0a292b9cdee0569683e71e9e9ffc843180a5bef962)
        : (__1c2f27c3565f1ba45429ffcfe65295e86f7f1ec56942424636fa519f3e416249[
            __7adc85a91ec681dd3ca6bad46dfb6e64776cfe491115af305a4109f8969d1b06
          ] = [
            __1c2f27c3565f1ba45429ffcfe65295e86f7f1ec56942424636fa519f3e416249[
              __7adc85a91ec681dd3ca6bad46dfb6e64776cfe491115af305a4109f8969d1b06
            ],
            __e66d2a57ea2ba7b90958fd0a292b9cdee0569683e71e9e9ffc843180a5bef962,
          ]);
  }
  return __1c2f27c3565f1ba45429ffcfe65295e86f7f1ec56942424636fa519f3e416249;
}
