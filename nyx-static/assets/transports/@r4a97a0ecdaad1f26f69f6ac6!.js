export function headerEntries(__0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca) {
  return __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca
    ? __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca instanceof Headers
      ? [...__0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca.entries()]
      : "\u0066\u0075\u006e\u0063\u0074\u0069\u006f\u006e" ==
          typeof __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca[Symbol.iterator]
        ? [...__0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca].flatMap(
            ([
              __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca,
              __0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5,
            ]) =>
              Array.isArray(__0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5)
                ? __0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5.map(
                    (__0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5) => [
                      String(__0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca),
                      String(__0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5),
                    ],
                  )
                : null == __0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5
                  ? []
                  : [
                      [
                        String(__0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca),
                        String(__0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5),
                      ],
                    ],
          )
        : "\u006f\u0062\u006a\u0065\u0063\u0074" == typeof __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca
          ? Object.entries(
              __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca,
            ).flatMap(
              ([
                __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca,
                __0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5,
              ]) =>
                Array.isArray(__0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5)
                  ? __0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5.map(
                      (__0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5) => [
                        __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca,
                        String(__0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5),
                      ],
                    )
                  : null == __0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5
                    ? []
                    : [
                        [
                          __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca,
                          String(
                            __0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5,
                          ),
                        ],
                      ],
            )
          : []
    : [];
}
export function headerRecord(__0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca) {
  const __0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5 = {};
  for (const [
    __2e1e997bc6c4c71e9151247e236d27079b33e948dd1ee92a5d9b94dc388bc1cc,
    __9e2c9aada984ffb203e26a97eb1028c4f909a2a2cb420a6290715ee7a120b8ed,
  ] of headerEntries(__0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca)) {
    const __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca = String(
      __2e1e997bc6c4c71e9151247e236d27079b33e948dd1ee92a5d9b94dc388bc1cc,
    ).toLowerCase();
    void 0 ===
    __0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5[
      __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca
    ]
      ? (__0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5[
          __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca
        ] = __9e2c9aada984ffb203e26a97eb1028c4f909a2a2cb420a6290715ee7a120b8ed)
      : Array.isArray(
            __0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5[
              __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca
            ],
          )
        ? __0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5[
            __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca
          ].push(__9e2c9aada984ffb203e26a97eb1028c4f909a2a2cb420a6290715ee7a120b8ed)
        : (__0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5[
            __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca
          ] = [
            __0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5[
              __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca
            ],
            __9e2c9aada984ffb203e26a97eb1028c4f909a2a2cb420a6290715ee7a120b8ed,
          ]);
  }
  return __0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5;
}
