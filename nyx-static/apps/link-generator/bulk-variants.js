const __f8f7f4ff1a9dd023879b7d0252f7c538008857fe668d3560172c681d430d379a = 5e6,
  __97f84cea9e85a38d457105263bc44a36e03bf7b4eeee72a45a863d659b815c95 = 1e5,
  __7adc8a108f49bb9e72d90034b7dab933347a43cfe4b709c5f4f4b6a123a913b0 = 1e4;

export function prepareAliasBase(
  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
) {
  let __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c;
  try {
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = new URL(
      String(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 || "").trim(),
    );
  } catch {
    throw new Error("\u004e\u0037\u0058\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0064\u0065\u0074\u0065\u0072\u006d\u0069\u006e\u0065\u0020\u0074\u0068\u0065\u0020\u0061\u0064\u0064\u0072\u0065\u0073\u0073\u0020\u0066\u006f\u0072\u0020\u0074\u0068\u0065\u0073\u0065\u0020\u006c\u0069\u006e\u006b\u0073\u002e");
  }
  if (
    !["\u0068\u0074\u0074\u0070\u003a", "\u0068\u0074\u0074\u0070\u0073\u003a"].includes(
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.protocol,
    ) ||
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.username ||
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.password
  )
    throw new Error("\u004e\u0037\u0058\u0020\u006c\u0069\u006e\u006b\u0073\u0020\u0072\u0065\u0071\u0075\u0069\u0072\u0065\u0020\u0061\u0020\u0070\u0075\u0062\u006c\u0069\u0063\u0020\u0068\u0074\u0074\u0070\u003a\u002f\u002f\u0020\u006f\u0072\u0020\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0020\u0061\u0064\u0064\u0072\u0065\u0073\u0073\u002e");
  const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = String(
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 || "",
  ).trim();
  if (
    !/^[A-Za-z0-9_-]{8,24}$/.test(
      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
    )
  )
    throw new Error("\u004e\u0037\u0058\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0063\u0072\u0065\u0061\u0074\u0065\u0020\u0061\u0020\u0073\u0061\u0066\u0065\u0020\u006c\u0069\u006e\u006b\u0020\u0067\u0072\u006f\u0075\u0070\u002e");
  return (
    (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.pathname = "\u002f\u006c\u002f"),
    (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.search = ""),
    (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.hash = ""),
    Object.freeze({
      prefix: `${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.href}${__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03}-`,
      suffix: "",
    })
  );
}

export function buildAliasUrl(
  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
) {
  return `${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.prefix}${encodeURIComponent(String(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5))}${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.suffix}`;
}

function __6fdb1cdd3480858511f28f066f464b00cabdfd60142469feb5679e9dfe212712(
  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
) {
  let __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = 0;
  for (
    let __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = 1;
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c <=
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96;
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c *= 10
  )
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 +=
      (Math.min(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        10 * __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c - 1,
      ) -
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c +
        1) *
      String(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c).length;
  return __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5;
}

export function estimatedLinkBytes(
  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = "\u0073\u0065\u0071\u0075\u0065\u006e\u0074\u0069\u0061\u006c",
) {
  const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = Number(
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
  );
  if (
    !Number.isSafeInteger(__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03) ||
    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 < 1 ||
    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 >
      __f8f7f4ff1a9dd023879b7d0252f7c538008857fe668d3560172c681d430d379a
  )
    throw new Error(
      `Choose between 1 and ${__f8f7f4ff1a9dd023879b7d0252f7c538008857fe668d3560172c681d430d379a.toLocaleString()} links.`,
    );
  return (
    new TextEncoder().encode(
      `${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.prefix}${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.suffix}\n`,
    ).length *
      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 +
    ("\u0075\u0075\u0069\u0064" === __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
      ? 36 * __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03
      : "\u0072\u0061\u006e\u0064\u006f\u006d" === __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
        ? 16 * __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03
        : __6fdb1cdd3480858511f28f066f464b00cabdfd60142469feb5679e9dfe212712(
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
          ))
  );
}

function __c63e87f8d0bec5658b9479dce135480a8377b1533477901cde0afae7908509b9(
  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = 16,
) {
  const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = new Uint8Array(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  );
  crypto.getRandomValues(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5);
  let __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = "";
  for (const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 of __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5)
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c +=
      "\u0041\u0042\u0043\u0044\u0045\u0046\u0047\u0048\u004a\u004b\u004c\u004d\u004e\u0050\u0051\u0052\u0053\u0054\u0055\u0056\u0057\u0058\u0059\u005a\u0032\u0033\u0034\u0035\u0036\u0037\u0038\u0039\u0061\u0062\u0063\u0064\u0065\u0066\u0067\u0068\u0069\u006a\u006b\u006d\u006e\u006f\u0070\u0071\u0072\u0073\u0074\u0075\u0076\u0077\u0078\u0079\u007a"[
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 % 57
      ];
  return __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c;
}

function __eda139361f28a839a752ca42e5496dac1c69027fa788aa52a3add34529106dac(
  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
) {
  return "\u0075\u0075\u0069\u0064" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
    ? "\u0066\u0075\u006e\u0063\u0074\u0069\u006f\u006e" == typeof crypto.randomUUID
      ? crypto.randomUUID()
      : `${__c63e87f8d0bec5658b9479dce135480a8377b1533477901cde0afae7908509b9(16)}-${__c63e87f8d0bec5658b9479dce135480a8377b1533477901cde0afae7908509b9(16)}`
    : "\u0072\u0061\u006e\u0064\u006f\u006d" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
      ? __c63e87f8d0bec5658b9479dce135480a8377b1533477901cde0afae7908509b9()
      : String(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5);
}

function __753004cf9999edc0ae6bde97b9bb66b8cc6c57219b48183ed482c6a181e4342e(
  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
) {
  const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = [
    "\u0042",
    "\u004b\u0042",
    "\u004d\u0042",
    "\u0047\u0042",
  ];
  let __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = Math.max(
      0,
      Number(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) || 0,
    ),
    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = 0;
  for (
    ;
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c >= 1024 &&
    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 <
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.length - 1;

  )
    ((__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c /= 1024),
      (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 += 1));
  return `${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c >= 100 || 0 === __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 ? Math.round(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c) : __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.toFixed(1)} ${__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5[__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03]}`;
}

function __ec1cfa279894e5887474febeb70fc63e18bb8546efac1883dcf41edbe15cfb1f(
  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
) {
  const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = URL.createObjectURL(
      new Blob(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96, {
        type: "\u0074\u0065\u0078\u0074\u002f\u0070\u006c\u0061\u0069\u006e\u003b\u0063\u0068\u0061\u0072\u0073\u0065\u0074\u003d\u0075\u0074\u0066\u002d\u0038",
      }),
    ),
    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
      document.createElement("\u0061");
  ((__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.href =
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c),
    (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.download =
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5),
    (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.rel = "\u006e\u006f\u006f\u0070\u0065\u006e\u0065\u0072"),
    (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.hidden = !0),
    document.body.append(__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03),
    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.click(),
    setTimeout(() => {
      (URL.revokeObjectURL(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c),
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.remove());
    }, 6e4));
}

function __29ff3916d47f853da75ba27d5b4b537d5374d4adb2464420a130d00ec3c440fe() {
  const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
    document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0062\u0075\u006c\u006b\u002d\u0076\u0061\u0072\u0069\u0061\u006e\u0074\u0073\u005d");
  if (!__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) return;
  const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.querySelector(
        "\u005b\u0064\u0061\u0074\u0061\u002d\u0062\u0075\u006c\u006b\u002d\u0076\u0061\u0072\u0069\u0061\u006e\u0074\u0073\u002d\u0066\u006f\u0072\u006d\u005d",
      ),
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.querySelector(
        "\u005b\u0064\u0061\u0074\u0061\u002d\u0062\u0075\u006c\u006b\u002d\u0063\u006f\u0075\u006e\u0074\u005d",
      ),
    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.querySelector(
        "\u005b\u0064\u0061\u0074\u0061\u002d\u0062\u0075\u006c\u006b\u002d\u006d\u006f\u0064\u0065\u005d",
      ),
    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.querySelector(
        "\u005b\u0064\u0061\u0074\u0061\u002d\u0062\u0075\u006c\u006b\u002d\u0061\u006c\u0069\u0061\u0073\u002d\u0065\u0078\u0061\u006d\u0070\u006c\u0065\u005d",
      ),
    __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.querySelector(
        "\u005b\u0064\u0061\u0074\u0061\u002d\u0062\u0075\u006c\u006b\u002d\u0067\u0065\u006e\u0065\u0072\u0061\u0074\u0065\u005d",
      ),
    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.querySelector(
        "\u005b\u0064\u0061\u0074\u0061\u002d\u0062\u0075\u006c\u006b\u002d\u0063\u0061\u006e\u0063\u0065\u006c\u005d",
      ),
    __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 =
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.querySelector(
        "\u005b\u0064\u0061\u0074\u0061\u002d\u0062\u0075\u006c\u006b\u002d\u0065\u0073\u0074\u0069\u006d\u0061\u0074\u0065\u005d",
      ),
    __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 =
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.querySelector(
        "\u005b\u0064\u0061\u0074\u0061\u002d\u0062\u0075\u006c\u006b\u002d\u0070\u0072\u006f\u0067\u0072\u0065\u0073\u0073\u005d",
      ),
    __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f =
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.querySelector(
        "\u005b\u0064\u0061\u0074\u0061\u002d\u0062\u0075\u006c\u006b\u002d\u0070\u0072\u006f\u0067\u0072\u0065\u0073\u0073\u002d\u0062\u0061\u0072\u005d",
      ),
    __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 =
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.querySelector(
        "\u005b\u0064\u0061\u0074\u0061\u002d\u0062\u0075\u006c\u006b\u002d\u0070\u0072\u006f\u0067\u0072\u0065\u0073\u0073\u002d\u0074\u0065\u0078\u0074\u005d",
      ),
    __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1 =
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.querySelector(
        "\u005b\u0064\u0061\u0074\u0061\u002d\u0062\u0075\u006c\u006b\u002d\u0070\u0072\u0065\u0076\u0069\u0065\u0077\u005d",
      ),
    __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 =
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.querySelector(
        "\u005b\u0064\u0061\u0074\u0061\u002d\u0062\u0075\u006c\u006b\u002d\u0070\u0072\u0065\u0076\u0069\u0065\u0077\u002d\u0063\u006f\u0075\u006e\u0074\u005d",
      ),
    __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe =
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.querySelector(
        "\u005b\u0064\u0061\u0074\u0061\u002d\u0062\u0075\u006c\u006b\u002d\u0070\u0072\u0065\u0076\u0069\u0065\u0077\u002d\u006c\u0069\u006e\u0065\u0073\u005d",
      );
  let __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a = null;
  const __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d = (
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = 0,
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = "",
    ) => {
      ((__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.hidden = !1),
        (__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.className =
          "\u0062\u0075\u006c\u006b\u002d\u0076\u0061\u0072\u0069\u0061\u006e\u0074\u0073\u002d\u0070\u0072\u006f\u0067\u0072\u0065\u0073\u0073" +
          (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
            ? ` ${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c}`
            : "")),
        (__16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f.style.width = `${Math.max(0, Math.min(100, 100 * __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5))}%`),
        (__467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239.textContent =
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96));
    },
    __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161 = () => {
      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.textContent = `${location.origin}/l/NyxLinkGroup-...`;
      try {
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.textContent = `Estimated download: ${__753004cf9999edc0ae6bde97b9bb66b8cc6c57219b48183ed482c6a181e4342e(estimatedLinkBytes(prepareAliasBase(location.origin, "\u004e\u0079\u0078\u004c\u0069\u006e\u006b\u0047\u0072\u006f\u0075\u0070"), Number(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.value), __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.value))}`;
      } catch (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.textContent =
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.message;
      }
    };
  ([
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
  ].forEach((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.addEventListener(
      "\u0069\u006e\u0070\u0075\u0074",
      __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161,
    ),
  ),
    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.addEventListener(
      "\u0063\u0068\u0061\u006e\u0067\u0065",
      __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161,
    ),
    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.addEventListener(
      "\u0063\u006c\u0069\u0063\u006b",
      () => {
        __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a &&
          (__1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a.cancelled = !0);
      },
    ),
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.addEventListener(
      "\u0073\u0075\u0062\u006d\u0069\u0074",
      async (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
        if (
          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.preventDefault(),
          __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a)
        )
          return;
        let __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713;
        try {
          if (
            ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = prepareAliasBase(
              location.origin,
              __c63e87f8d0bec5658b9479dce135480a8377b1533477901cde0afae7908509b9(12),
            )),
            (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = Number(
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.value,
            )),
            estimatedLinkBytes(
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.value,
            ),
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 >
              __97f84cea9e85a38d457105263bc44a36e03bf7b4eeee72a45a863d659b815c95 &&
              "\u0066\u0075\u006e\u0063\u0074\u0069\u006f\u006e" != typeof window.showSaveFilePicker)
          )
            throw new Error(
              `This browser can safely download up to ${__97f84cea9e85a38d457105263bc44a36e03bf7b4eeee72a45a863d659b815c95.toLocaleString()} links at once. Use Chrome or Edge for larger streamed files.`,
            );
        } catch (__fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797) {
          return void __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d(
            __fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797.message,
            0,
            "\u0065\u0072\u0072\u006f\u0072",
          );
        }
        const __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = {
          cancelled: !1,
        };
        ((__1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a =
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2),
          (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.disabled = !0),
          (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.hidden = !1),
          (__28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1.hidden = !0),
          __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d(
            "\u0043\u0068\u006f\u006f\u0073\u0065\u0020\u0077\u0068\u0065\u0072\u0065\u0020\u0074\u006f\u0020\u0073\u0061\u0076\u0065\u0020\u0074\u0068\u0065\u0020\u006c\u0069\u0073\u0074\u2026",
            0,
          ));
        let __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 = null;
        const __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f = [],
          __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 = [],
          __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161 = [];
        let __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34 = 0;
        const __d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21 =
            performance.now(),
          __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c = `nyx-path-links-${__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713}.txt`;
        try {
          if (
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 >
            __97f84cea9e85a38d457105263bc44a36e03bf7b4eeee72a45a863d659b815c95
          ) {
            const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
              await window.showSaveFilePicker({
                suggestedName: __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c,
                types: [
                  {
                    description: "\u0054\u0065\u0078\u0074\u0020\u0066\u0069\u006c\u0065",
                    accept: {
                      "\u0074\u0065\u0078\u0074\u002f\u0070\u006c\u0061\u0069\u006e": ["\u002e\u0074\u0078\u0074"],
                    },
                  },
                ],
              });
            __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 =
              await __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.createWritable();
          }
          for (
            let __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = 1;
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c <=
              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 &&
            !__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.cancelled;
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c +=
              __7adc8a108f49bb9e72d90034b7dab933347a43cfe4b709c5f4f4b6a123a913b0
          ) {
            const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = Math.min(
                __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c +
                  __7adc8a108f49bb9e72d90034b7dab933347a43cfe4b709c5f4f4b6a123a913b0 -
                  1,
              ),
              __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a = [];
            for (
              let __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c;
              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 <=
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96;
              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 += 1
            ) {
              const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
                buildAliasUrl(
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                  __eda139361f28a839a752ca42e5496dac1c69027fa788aa52a3add34529106dac(
                    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.value,
                    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
                  ),
                );
              (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.push(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              ),
                __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239.length < 5 &&
                  __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239.push(
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                  ),
                __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.push(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                ),
                __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.length > 5 &&
                  __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.shift());
            }
            const __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc = `${__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.join("\u000a")}\n`;
            (__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238
              ? await __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.write(
                  __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
                )
              : __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f.push(
                  __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
                ),
              (__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34 =
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96));
            const __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = Math.max(
              0.01,
              (performance.now() -
                __d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21) /
                1e3,
            );
            (__94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d(
              `Generated ${__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.toLocaleString()} of ${__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.toLocaleString()} \xb7 ${Math.round(__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34 / __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2).toLocaleString()} links/sec`,
              __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34 /
                __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
            ),
              await new Promise(
                (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                  setTimeout(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96, 0),
              ));
          }
          if (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.cancelled)
            return (
              __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 &&
                (await __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.abort()),
              void __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d(
                "\u0047\u0065\u006e\u0065\u0072\u0061\u0074\u0069\u006f\u006e\u0020\u0063\u0061\u006e\u0063\u0065\u006c\u006c\u0065\u0064\u002e\u0020\u004e\u006f\u0020\u0063\u006f\u006d\u0070\u006c\u0065\u0074\u0065\u0064\u0020\u0066\u0069\u006c\u0065\u0020\u0077\u0061\u0073\u0020\u0073\u0061\u0076\u0065\u0064\u002e",
                __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34 /
                  __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
                "\u0065\u0072\u0072\u006f\u0072",
              )
            );
          __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238
            ? await __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.close()
            : __ec1cfa279894e5887474febeb70fc63e18bb8546efac1883dcf41edbe15cfb1f(
                __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f,
                __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c,
              );
          const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
            __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34 > 10
              ? [
                  ...__467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239,
                  "\u2026",
                  ...__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161,
                ]
              : [
                  ...__467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239,
                  ...__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161.slice(
                    Math.max(
                      0,
                      __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239.length - 5,
                    ),
                  ),
                ];
          ((__8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe.textContent = [
            ...new Set(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
          ].join("\u000a")),
            (__32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6.textContent = `${__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.toLocaleString()} links`),
            (__28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1.hidden = !1),
            __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d(
              `${__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34.toLocaleString()} different N7X links saved to ${__568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c}.`,
              1,
              "\u0063\u006f\u006d\u0070\u006c\u0065\u0074\u0065",
            ));
        } catch (__fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797) {
          (__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 &&
            (await __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238
              .abort()
              .catch(() => {})),
            __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d(
              "\u0041\u0062\u006f\u0072\u0074\u0045\u0072\u0072\u006f\u0072" ===
                __fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797?.name
                ? "\u0053\u0061\u0076\u0065\u0020\u0063\u0061\u006e\u0063\u0065\u006c\u006c\u0065\u0064\u002e"
                : __fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797?.message ||
                    "\u0054\u0068\u0065\u0020\u006c\u0069\u006e\u006b\u0020\u006c\u0069\u0073\u0074\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0063\u0072\u0065\u0061\u0074\u0065\u0064\u002e",
              __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34 /
                __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
              "\u0065\u0072\u0072\u006f\u0072",
            ));
        } finally {
          ((__1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a = null),
            (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.disabled = !1),
            (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.hidden = !0));
        }
      },
    ),
    __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161());
}

"\u0075\u006e\u0064\u0065\u0066\u0069\u006e\u0065\u0064" != typeof document &&
  __29ff3916d47f853da75ba27d5b4b537d5374d4adb2464420a130d00ec3c440fe();

export { __f8f7f4ff1a9dd023879b7d0252f7c538008857fe668d3560172c681d430d379a as MAX_LINKS };
