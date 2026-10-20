export const gameCdnHosts = new Set([
  "\u0063\u0064\u006e\u002e\u006a\u0073\u0064\u0065\u006c\u0069\u0076\u0072\u002e\u006e\u0065\u0074",
  "\u0072\u0061\u0077\u002e\u0067\u0069\u0074\u0068\u0075\u0062\u0075\u0073\u0065\u0072\u0063\u006f\u006e\u0074\u0065\u006e\u0074\u002e\u0063\u006f\u006d",
  "\u0072\u0061\u0077\u0063\u0064\u006e\u002e\u0067\u0069\u0074\u0068\u0061\u0063\u006b\u002e\u0063\u006f\u006d",
  "\u0072\u0061\u0077\u002e\u0067\u0069\u0074\u0068\u0061\u0063\u006b\u002e\u0063\u006f\u006d",
]);

export function repairGameResourcePath(
  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
) {
  return (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
      .replace(/\/genizy\/google-class(?=@|\/)/g, "\u002f\u0074\u0061\u0073\u006b\u006d\u0061\u0073\u0074\u0065\u0072\u0037\u0037\u0033\u002f\u0067\u006f\u006f\u0067\u006c\u0065\u002d\u0063\u006c\u0061\u0073\u0073")
      .replace(
        /\/gh\/genizy\/ovo-3-dimension@[^/]+\//g,
        "\u002f\u0067\u0068\u002f\u0062\u0075\u0062\u0062\u006c\u0066\u0061\u006e\u002f\u006f\u0076\u006f\u002d\u0033\u002d\u0064\u0069\u006d\u0065\u006e\u0073\u0069\u006f\u006e\u0040\u0031\u0030\u0032\u0031\u0037\u0039\u0062\u0066\u0034\u0032\u0034\u0032\u0066\u0064\u0032\u0033\u0037\u0063\u0034\u0036\u0063\u0035\u0035\u0035\u0062\u0061\u0031\u0035\u0034\u0063\u0032\u0066\u0033\u0032\u0035\u0064\u0033\u0035\u0031\u0063\u002f",
      )).replace(
    /(\/web-ports\/fear-and-hunger-2@[^/]+\/(?:js\/plugins|data)\/)([^/]+\.(?:js|json))$/i,
    (
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
    ) =>
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 +
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.toLowerCase(),
  );
}

export function normalizeGameCdnUrl(
  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
) {
  try {
    const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = new URL(
      String(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
    );
    return !["\u0068\u0074\u0074\u0070\u003a", "\u0068\u0074\u0074\u0070\u0073\u003a"].includes(
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.protocol,
    ) ||
      !gameCdnHosts.has(
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.hostname,
      ) ||
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.username ||
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.password ||
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.port
      ? null
      : ("\u0063\u0064\u006e\u002e\u006a\u0073\u0064\u0065\u006c\u0069\u0076\u0072\u002e\u006e\u0065\u0074" ===
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.hostname &&
          /^\/(?!gh\/|npm\/|combine\/)[\w.-]+\/[\w.-]+@[^/]+\//.test(
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.pathname,
          ) &&
          (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.pathname =
            "\u002f\u0067\u0068" + __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.pathname),
        (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.pathname =
          repairGameResourcePath(
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.pathname,
          )),
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c);
  } catch {
    return null;
  }
}

export function gameResourceUrl(
  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
) {
  const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = normalizeGameCdnUrl(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
  );
  return __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03
    ? `${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c}/gn-math-resource/${__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.protocol.slice(0, -1)}/${__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.host}${__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.pathname}${__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.search}${__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.hash}`
    : String(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96);
}

export function gameResourceTarget(
  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
) {
  try {
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = new URL(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        "\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u006e\u0079\u0078\u002e\u0069\u006e\u0076\u0061\u006c\u0069\u0064",
      ),
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.pathname.match(
          /^\/gn-math-resource\/(https?)\/([^/]+)(\/.*)$/,
        );
    return __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
      ? normalizeGameCdnUrl(
          `${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c[1]}://${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c[2]}${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c[3]}${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.search}`,
        )
      : null;
  } catch {
    return null;
  }
}
