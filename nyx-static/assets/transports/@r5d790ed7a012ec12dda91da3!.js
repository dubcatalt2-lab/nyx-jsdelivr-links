export function preserveTransferErrors(
  __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca,
) {
  const __0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5 =
    __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca.stream_response;
  __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca.stream_response = function (
    __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca,
    __2e1e997bc6c4c71e9151247e236d27079b33e948dd1ee92a5d9b94dc388bc1cc,
    __9e2c9aada984ffb203e26a97eb1028c4f909a2a2cb420a6290715ee7a120b8ed,
    __533d9d596e6b9a737190902e74059c15e03447c0855ec779aa13c88849e8f703,
  ) {
    let __6e98a2430c5b48f301db21efcb319b8d3cdae0e25e188a9468df77a4c7d42904;
    const __1e70e681a3dc8081d6e9e81a1fe19c2523d58c0237a2b4a84851bdccc92cccf1 = new Promise(
      (__0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca) => {
        __6e98a2430c5b48f301db21efcb319b8d3cdae0e25e188a9468df77a4c7d42904 =
          __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca;
      },
    );
    return __0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5.call(
      this,
      __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca,
      (__0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca) => {
        const __0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5 =
          __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca.getReader();
        __2e1e997bc6c4c71e9151247e236d27079b33e948dd1ee92a5d9b94dc388bc1cc(
          new ReadableStream(
            {
              async pull(__0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca) {
                try {
                  const __2e1e997bc6c4c71e9151247e236d27079b33e948dd1ee92a5d9b94dc388bc1cc =
                    await __0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5.read();
                  if (!__2e1e997bc6c4c71e9151247e236d27079b33e948dd1ee92a5d9b94dc388bc1cc.done)
                    return void __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca.enqueue(
                      __2e1e997bc6c4c71e9151247e236d27079b33e948dd1ee92a5d9b94dc388bc1cc.value,
                    );
                  const __9e2c9aada984ffb203e26a97eb1028c4f909a2a2cb420a6290715ee7a120b8ed =
                    await __1e70e681a3dc8081d6e9e81a1fe19c2523d58c0237a2b4a84851bdccc92cccf1;
                  if (
                    -1 === __9e2c9aada984ffb203e26a97eb1028c4f909a2a2cb420a6290715ee7a120b8ed ||
                    __533d9d596e6b9a737190902e74059c15e03447c0855ec779aa13c88849e8f703?.aborted
                  )
                    throw (
                      __533d9d596e6b9a737190902e74059c15e03447c0855ec779aa13c88849e8f703?.reason ||
                      new DOMException("\u0054\u0068\u0065\u0020\u006f\u0070\u0065\u0072\u0061\u0074\u0069\u006f\u006e\u0020\u0077\u0061\u0073\u0020\u0061\u0062\u006f\u0072\u0074\u0065\u0064\u002e", "\u0041\u0062\u006f\u0072\u0074\u0045\u0072\u0072\u006f\u0072")
                    );
                  if (0 !== __9e2c9aada984ffb203e26a97eb1028c4f909a2a2cb420a6290715ee7a120b8ed)
                    throw new TypeError(
                      `Request failed with error code ${__9e2c9aada984ffb203e26a97eb1028c4f909a2a2cb420a6290715ee7a120b8ed}: incomplete libcurl transfer`,
                    );
                  __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca.close();
                } catch (__0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5) {
                  __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca.error(
                    __0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5,
                  );
                }
              },
              cancel: (__0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca) =>
                __0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5.cancel(
                  __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca,
                ),
            },
            { highWaterMark: 0 },
          ),
        );
      },
      (__0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca) => {
        (__6e98a2430c5b48f301db21efcb319b8d3cdae0e25e188a9468df77a4c7d42904(
          __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca,
        ),
          __9e2c9aada984ffb203e26a97eb1028c4f909a2a2cb420a6290715ee7a120b8ed(
            __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca,
          ));
      },
      __533d9d596e6b9a737190902e74059c15e03447c0855ec779aa13c88849e8f703,
    );
  };
}
export const bufferLimit = 33554432;
const __26a7319af33c39afe3496e2a43e0c3a631da998ff8dfb992af5f6ec44908048c = (
    __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca,
  ) =>
    /\berror code (?:18|52|56|92)\b/i.test(
      String(
        __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca?.message ||
          __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca,
      ),
    ),
  __be224767d751077bd8fa6da5fd80749f19e70536efe5496cfeb89cc9abc2f5ed = (
    __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca,
  ) =>
    __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca.some(
      ([
        __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca,
        __0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5,
      ]) =>
        "\u0063\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0074\u0079\u0070\u0065" ===
          __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca.toLowerCase() &&
        /^(?:(?:text|application)\/(?:x-)?(?:javascript|ecmascript)|(?:text|application)\/(?:[\w.+-]+\+)?json|text\/html|application\/xhtml\+xml)$/i.test(
          String(__0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5)
            .split("\u003b")[0]
            .trim(),
        ),
    );
async function __07f1f8944964d5a32a59c5ab10cfe6dffde5849b57a045eb54a7dc1c4acb02c1(
  __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca,
  __0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5,
) {
  const __2e1e997bc6c4c71e9151247e236d27079b33e948dd1ee92a5d9b94dc388bc1cc =
      __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca.getReader(),
    __9e2c9aada984ffb203e26a97eb1028c4f909a2a2cb420a6290715ee7a120b8ed = [];
  let __533d9d596e6b9a737190902e74059c15e03447c0855ec779aa13c88849e8f703 = 0;
  const __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45 = () => {
    ((__0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5.bytes -=
      __533d9d596e6b9a737190902e74059c15e03447c0855ec779aa13c88849e8f703),
      (__533d9d596e6b9a737190902e74059c15e03447c0855ec779aa13c88849e8f703 = 0),
      (__9e2c9aada984ffb203e26a97eb1028c4f909a2a2cb420a6290715ee7a120b8ed.length = 0));
  };
  try {
    for (;;) {
      const __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca =
        await __2e1e997bc6c4c71e9151247e236d27079b33e948dd1ee92a5d9b94dc388bc1cc.read();
      if (__0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca.done) {
        const __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca = new Blob(
          __9e2c9aada984ffb203e26a97eb1028c4f909a2a2cb420a6290715ee7a120b8ed,
        ).stream();
        return (
          __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45(),
          __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca
        );
      }
      if (
        __533d9d596e6b9a737190902e74059c15e03447c0855ec779aa13c88849e8f703 +
          __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca.value.byteLength >
          16777216 ||
        __0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5.bytes +
          __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca.value.byteLength >
          33554432
      ) {
        let __6e98a2430c5b48f301db21efcb319b8d3cdae0e25e188a9468df77a4c7d42904 =
          __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca.value;
        return new ReadableStream(
          {
            async pull(__0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca) {
              try {
                if (__9e2c9aada984ffb203e26a97eb1028c4f909a2a2cb420a6290715ee7a120b8ed.length) {
                  const __2e1e997bc6c4c71e9151247e236d27079b33e948dd1ee92a5d9b94dc388bc1cc =
                    __9e2c9aada984ffb203e26a97eb1028c4f909a2a2cb420a6290715ee7a120b8ed.shift();
                  return (
                    (__533d9d596e6b9a737190902e74059c15e03447c0855ec779aa13c88849e8f703 -=
                      __2e1e997bc6c4c71e9151247e236d27079b33e948dd1ee92a5d9b94dc388bc1cc.byteLength),
                    (__0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5.bytes -=
                      __2e1e997bc6c4c71e9151247e236d27079b33e948dd1ee92a5d9b94dc388bc1cc.byteLength),
                    void __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca.enqueue(
                      __2e1e997bc6c4c71e9151247e236d27079b33e948dd1ee92a5d9b94dc388bc1cc,
                    )
                  );
                }
                if (__6e98a2430c5b48f301db21efcb319b8d3cdae0e25e188a9468df77a4c7d42904)
                  return (
                    __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca.enqueue(
                      __6e98a2430c5b48f301db21efcb319b8d3cdae0e25e188a9468df77a4c7d42904,
                    ),
                    void (__6e98a2430c5b48f301db21efcb319b8d3cdae0e25e188a9468df77a4c7d42904 = null)
                  );
                const __1e70e681a3dc8081d6e9e81a1fe19c2523d58c0237a2b4a84851bdccc92cccf1 =
                  await __2e1e997bc6c4c71e9151247e236d27079b33e948dd1ee92a5d9b94dc388bc1cc.read();
                __1e70e681a3dc8081d6e9e81a1fe19c2523d58c0237a2b4a84851bdccc92cccf1.done
                  ? __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca.close()
                  : __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca.enqueue(
                      __1e70e681a3dc8081d6e9e81a1fe19c2523d58c0237a2b4a84851bdccc92cccf1.value,
                    );
              } catch (__0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5) {
                (__dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45(),
                  __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca.error(
                    __0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5,
                  ));
              }
            },
            cancel: (__0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca) => (
              __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45(),
              (__6e98a2430c5b48f301db21efcb319b8d3cdae0e25e188a9468df77a4c7d42904 = null),
              __2e1e997bc6c4c71e9151247e236d27079b33e948dd1ee92a5d9b94dc388bc1cc.cancel(
                __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca,
              )
            ),
          },
          { highWaterMark: 0 },
        );
      }
      (__9e2c9aada984ffb203e26a97eb1028c4f909a2a2cb420a6290715ee7a120b8ed.push(
        __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca.value,
      ),
        (__533d9d596e6b9a737190902e74059c15e03447c0855ec779aa13c88849e8f703 +=
          __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca.value.byteLength),
        (__0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5.bytes +=
          __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca.value.byteLength));
    }
  } catch (__0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca) {
    throw (
      __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45(),
      __2e1e997bc6c4c71e9151247e236d27079b33e948dd1ee92a5d9b94dc388bc1cc
        .cancel(__0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca)
        .catch(() => {}),
      __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca
    );
  }
}
export async function requestWithTransferRetry(
  __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca,
  {
    method: __0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5,
    body: __2e1e997bc6c4c71e9151247e236d27079b33e948dd1ee92a5d9b94dc388bc1cc,
    signal: __9e2c9aada984ffb203e26a97eb1028c4f909a2a2cb420a6290715ee7a120b8ed,
    budget: __533d9d596e6b9a737190902e74059c15e03447c0855ec779aa13c88849e8f703,
  },
) {
  const __6e98a2430c5b48f301db21efcb319b8d3cdae0e25e188a9468df77a4c7d42904 =
    /^(?:GET|HEAD)$/i.test(
      __0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5 || "\u0047\u0045\u0054",
    ) && null == __2e1e997bc6c4c71e9151247e236d27079b33e948dd1ee92a5d9b94dc388bc1cc;
  for (
    let __0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5 = 0;
    ;
    __0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5++
  ) {
    __9e2c9aada984ffb203e26a97eb1028c4f909a2a2cb420a6290715ee7a120b8ed?.throwIfAborted();
    try {
      const __0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5 =
        await __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca();
      return __6e98a2430c5b48f301db21efcb319b8d3cdae0e25e188a9468df77a4c7d42904 &&
        __0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5.body?.getReader &&
        __be224767d751077bd8fa6da5fd80749f19e70536efe5496cfeb89cc9abc2f5ed(
          __0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5.headers,
        )
        ? {
            ...__0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5,
            body: await __07f1f8944964d5a32a59c5ab10cfe6dffde5849b57a045eb54a7dc1c4acb02c1(
              __0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5.body,
              __533d9d596e6b9a737190902e74059c15e03447c0855ec779aa13c88849e8f703,
            ),
          }
        : __0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5;
    } catch (__0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca) {
      if (
        !__6e98a2430c5b48f301db21efcb319b8d3cdae0e25e188a9468df77a4c7d42904 ||
        __0b7551ec157c233b5561e40f51c93532d3c2da71405d1a9658ffd3c6ac3121a5 >= 1 ||
        __9e2c9aada984ffb203e26a97eb1028c4f909a2a2cb420a6290715ee7a120b8ed?.aborted ||
        !__26a7319af33c39afe3496e2a43e0c3a631da998ff8dfb992af5f6ec44908048c(
          __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca,
        )
      )
        throw __0e94ac3183ef0b7998ea7f7d3e3e1b5aca6b2ccd83fdbb9c5b3cf7934172afca;
    }
  }
}
