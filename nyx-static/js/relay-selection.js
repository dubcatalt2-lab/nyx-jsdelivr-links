(() => {
  let __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = "",
    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = "",
    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = null,
    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = 0;
  const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = "\u006e\u0079\u0078\u002e\u006c\u0061\u0073\u0074\u0057\u006f\u0072\u006b\u0069\u006e\u0067\u0052\u0065\u006c\u0061\u0079";
  function __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a(
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
  ) {
    return new Promise((__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) => {
      let __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = !1;
      const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a = (
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      ) => {
        if (!__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713) {
          if (
            ((__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = !0),
            clearTimeout(__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03),
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c)
          ) {
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.onmessage =
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.onerror =
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.onclose =
                null;
            try {
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.close();
            } catch {}
          }
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          );
        }
      };
      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = setTimeout(
        () => __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a(!1),
        1e4,
      );
      try {
        ((__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = new WebSocket(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        )),
          (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.binaryType =
            "\u0061\u0072\u0072\u0061\u0079\u0062\u0075\u0066\u0066\u0065\u0072"),
          (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.onmessage = (
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          ) => {
            if (
              !(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.data instanceof
                ArrayBuffer
              )
            )
              return;
            const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
              new Uint8Array(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.data,
              );
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.length >= 9 &&
              3 === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5[0] &&
              0 ===
                new DataView(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.data,
                ).getUint32(1, !0) &&
              __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a(!0);
          }),
          (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.onerror =
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.onclose =
              () => __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a(!1)));
      } catch {
        __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a(!1);
      }
    });
  }
  function __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc(
    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
  ) {
    const __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a = JSON.stringify(
      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
    );
    __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a !==
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
      ((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
        __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a),
      (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = ""),
      (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = null),
      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03++);
  }
  window.NyxRelaySelection = {
    current: function (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
      return (
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        ),
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 ||
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96[0] ||
          ""
      );
    },
    choose: async function (
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = "",
    ) {
      if (
        (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc(
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        ),
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c)
      )
        return __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c;
      if (
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
        !__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2
      )
        return __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5;
      const __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 =
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03;
      let __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f = "";
      try {
        __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f =
          localStorage.getItem(
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
          ) || "";
      } catch {}
      const __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 = [
        ...new Set([
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
          __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f,
          ...__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        ]),
      ].filter(
        (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) =>
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.includes(
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
          ) &&
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 !==
            __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2,
      );
      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.includes(
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2,
      ) &&
        __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239.push(
          __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2,
        ),
        (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = (async () => {
          for (const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 of __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239) {
            const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
              await __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              );
            if (
              __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 !==
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03
            )
              return "";
            if (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c) {
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96;
              try {
                localStorage.setItem(
                  __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                );
              } catch {}
              return __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96;
            }
          }
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = "";
          try {
            localStorage.removeItem(
              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
            );
          } catch {}
          return "";
        })()));
      try {
        return await __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c;
      } finally {
        __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 ===
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 &&
          (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = null);
      }
    },
    probe: __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
  };
})();
