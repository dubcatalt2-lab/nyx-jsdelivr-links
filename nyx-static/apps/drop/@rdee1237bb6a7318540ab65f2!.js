import "\u002f\u006a\u0073\u002f\u0040\u0072\u0063\u0062\u0033\u0064\u0061\u0035\u0034\u0034\u0036\u0066\u0038\u0066\u0031\u0063\u0064\u0033\u0037\u0035\u0033\u0036\u0036\u0063\u0063\u0038\u0021\u002e\u006a\u0073";

export function setupDropPresence({
  frame: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ensureAccount: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
  notice: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
}) {
  const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
      document.getElementById("\u006f\u006e\u006c\u0069\u006e\u0065\u0043\u006f\u0075\u006e\u0074\u0065\u0072"),
    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
      document.getElementById("\u006f\u006e\u006c\u0069\u006e\u0065\u0043\u006f\u0075\u006e\u0074"),
    __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a = new Map();
  let __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc = !1,
    __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = !1,
    __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 = 0,
    __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f = !1,
    __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 = "";
  try {
    ((__467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 =
      localStorage.getItem("\u006e\u0079\u0078\u002e\u0070\u0072\u0065\u0073\u0065\u006e\u0063\u0065\u0053\u0065\u0073\u0073\u0069\u006f\u006e") || ""),
      /^[a-zA-Z0-9_-]{16,128}$/.test(
        __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239,
      ) ||
        ((__467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 = crypto.randomUUID()),
        localStorage.setItem(
          "\u006e\u0079\u0078\u002e\u0070\u0072\u0065\u0073\u0065\u006e\u0063\u0065\u0053\u0065\u0073\u0073\u0069\u006f\u006e",
          __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239,
        )));
  } catch {
    __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 = crypto.randomUUID();
  }
  function __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 =
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96;
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
      document.getElementById("\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u0052\u006f\u006c\u0065");
    ((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.textContent =
      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2
        ? "\u004f\u0077\u006e\u0065\u0072\u0020\u003f\u0020\u0046\u0075\u006c\u006c\u0020\u0061\u0063\u0063\u0065\u0073\u0073"
        : __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc
          ? "\u004d\u0065\u006d\u0062\u0065\u0072\u0020\u003f\u0020\u0053\u0074\u0061\u006e\u0064\u0061\u0072\u0064\u0020\u0061\u0063\u0063\u0065\u0073\u0073"
          : "\u0047\u0075\u0065\u0073\u0074"),
      (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.dataset.role =
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2
          ? "\u006f\u0077\u006e\u0065\u0072"
          : __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc
            ? "\u006d\u0065\u006d\u0062\u0065\u0072"
            : "\u0067\u0075\u0065\u0073\u0074"),
      (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.disabled =
        !__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2),
      (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.title =
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2
          ? "\u004f\u0070\u0065\u006e\u0020\u004f\u0077\u006e\u0065\u0072\u0020\u0044\u0061\u0073\u0068\u0062\u006f\u0061\u0072\u0064"
          : "\u0043\u0075\u0072\u0072\u0065\u006e\u0074\u0020\u0075\u0073\u0065\u0072\u0073\u0020\u006f\u006e\u006c\u0069\u006e\u0065"),
      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.setAttribute(
        "\u0061\u0072\u0069\u0061\u002d\u006c\u0061\u0062\u0065\u006c",
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2
          ? "\u004f\u0070\u0065\u006e\u0020\u004f\u0077\u006e\u0065\u0072\u0020\u0044\u0061\u0073\u0068\u0062\u006f\u0061\u0072\u0064"
          : "\u0043\u0075\u0072\u0072\u0065\u006e\u0074\u0020\u0075\u0073\u0065\u0072\u0073\u0020\u006f\u006e\u006c\u0069\u006e\u0065",
      ));
  }
  function __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6() {
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5();
    const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = crypto.randomUUID();
    return new Promise((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) => {
      const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = setTimeout(() => {
        (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.delete(
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
        ),
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5(""));
      }, 4e3);
      (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.set(
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
          (clearTimeout(__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03),
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
            ));
        },
      ),
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.contentWindow?.postMessage(
          {
            type: "\u0064\u0072\u006f\u0070\u003a\u0073\u0065\u0073\u0073\u0069\u006f\u006e\u002d\u0074\u006f\u006b\u0065\u006e",
            requestId: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
          },
          location.origin,
        ));
    });
  }
  async function __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe() {
    const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
      ++__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238;
    __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1(!1);
    try {
      const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
        await __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6();
      if (!__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) return;
      const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = await fetch(
          "\u002f\u0061\u0070\u0069\u002f\u0066\u006f\u0075\u006e\u0064\u0065\u0072\u002d\u0070\u0072\u006f\u0066\u0069\u006c\u0065\u002f\u006f\u0077\u006e\u0065\u0072",
          {
            headers: {
              Authorization:
                "\u0042\u0065\u0061\u0072\u0065\u0072\u0020" + __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
            },
            cache: "\u006e\u006f\u002d\u0073\u0074\u006f\u0072\u0065",
            signal: AbortSignal.timeout(8e3),
          },
        ),
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.ok
            ? await __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.json()
            : {};
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ===
        __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 &&
        __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1(
          !0 === __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.founder &&
            !0 === __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.dashboard,
        );
    } catch {
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ===
        __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 &&
        __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1(!1);
    }
  }
  async function __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a() {
    if (!__16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f && !document.hidden) {
      __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f = !0;
      try {
        const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
            await __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6(),
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = await fetch(
            "\u002f\u0061\u0070\u0069\u002f\u0070\u0072\u0065\u0073\u0065\u006e\u0063\u0065",
            {
              method: "\u0050\u004f\u0053\u0054",
              headers: {
                "\u0043\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0054\u0079\u0070\u0065": "\u0074\u0065\u0078\u0074\u002f\u0070\u006c\u0061\u0069\u006e\u003b\u0063\u0068\u0061\u0072\u0073\u0065\u0074\u003d\u0055\u0054\u0046\u002d\u0038",
                ...(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
                  ? {
                      Authorization:
                        "\u0042\u0065\u0061\u0072\u0065\u0072\u0020" +
                        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                    }
                  : {}),
              },
              body: JSON.stringify({
                sessionId: __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239,
              }),
              cache: "\u006e\u006f\u002d\u0073\u0074\u006f\u0072\u0065",
              signal: AbortSignal.timeout(8e3),
            },
          );
        if (!__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.ok) throw Error();
        const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
          await __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.json();
        if (
          !Number.isFinite(
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.online,
          ) ||
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.online < 0
        )
          throw Error();
        ((__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.textContent =
          Math.floor(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.online) +
          "\u0020\u006f\u006e\u006c\u0069\u006e\u0065"),
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.classList.remove(
            "\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065",
          ));
      } catch {
        ((__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.textContent =
          "\u004f\u006e\u006c\u0069\u006e\u0065\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065"),
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.classList.add(
            "\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065",
          ));
      } finally {
        __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f = !1;
      }
    }
  }
  (addEventListener(
    "\u006d\u0065\u0073\u0073\u0061\u0067\u0065",
    (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) => {
      if (
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.origin !==
          location.origin ||
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.source !==
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.contentWindow
      )
        return;
      const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.data;
      if (
        "\u0064\u0072\u006f\u0070\u003a\u0073\u0065\u0073\u0073\u0069\u006f\u006e\u002d\u0074\u006f\u006b\u0065\u006e\u002d\u0072\u0065\u0073\u0075\u006c\u0074" ===
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c?.type
      ) {
        const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
          __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.get(
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.requestId,
          );
        (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.delete(
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.requestId,
        ),
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96?.(
            "\u0073\u0074\u0072\u0069\u006e\u0067" ==
              typeof __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.token
              ? __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.token
              : "",
          ));
      }
      ("\u0064\u0072\u006f\u0070\u003a\u0061\u0063\u0063\u006f\u0075\u006e\u0074" ===
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c?.type &&
        ((__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
          !0 === __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.signedIn),
        __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238++,
        __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1(!1),
        globalThis.NyxOwnerDashboard?.close(),
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.signedIn &&
          __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe(),
        __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a()),
        "\u0064\u0072\u006f\u0070\u003a\u0072\u0065\u0061\u0064\u0079" === __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c?.type &&
          (__8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe(),
          __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a()));
    },
  ),
    (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.onclick = async () => {
      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 &&
        (await __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe(),
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2
          ? globalThis.NyxOwnerDashboard.open({
              getToken: __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6,
              toast: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
            })
          : __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c(
              "\u004f\u0077\u006e\u0065\u0072\u0020\u0061\u0063\u0063\u0065\u0073\u0073\u0020\u0069\u0073\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u002e",
            ));
    }),
    document.addEventListener("\u0076\u0069\u0073\u0069\u0062\u0069\u006c\u0069\u0074\u0079\u0063\u0068\u0061\u006e\u0067\u0065", () => {
      document.hidden ||
        (__1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a(),
        __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe());
    }),
    addEventListener("\u006f\u006e\u006c\u0069\u006e\u0065", __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a),
    __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1(!1),
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5(),
    __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a(),
    setInterval(__1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a, 15e3));
}
