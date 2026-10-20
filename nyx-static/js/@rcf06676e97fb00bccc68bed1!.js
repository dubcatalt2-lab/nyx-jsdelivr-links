(() => {
  let __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f = "",
    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = "",
    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = null,
    __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c = 0;
  const __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 = "\u006e\u0079\u0078\u002e\u006c\u0061\u0073\u0074\u0057\u006f\u0072\u006b\u0069\u006e\u0067\u0052\u0065\u006c\u0061\u0079";
  function __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766(
    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
  ) {
    return new Promise((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) => {
      let __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
        __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 = !1;
      const __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 = (
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
      ) => {
        if (!__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477) {
          if (
            ((__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 = !0),
            clearTimeout(__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c),
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708)
          ) {
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.onmessage =
              __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.onerror =
              __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.onclose =
                null;
            try {
              __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.close();
            } catch {}
          }
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53(
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
          );
        }
      };
      __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c = setTimeout(
        () => __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766(!1),
        1e4,
      );
      try {
        ((__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = new WebSocket(
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
        )),
          (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.binaryType =
            "\u0061\u0072\u0072\u0061\u0079\u0062\u0075\u0066\u0066\u0065\u0072"),
          (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.onmessage = (
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
          ) => {
            if (
              !(
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.data instanceof
                ArrayBuffer
              )
            )
              return;
            const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
              new Uint8Array(
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.data,
              );
            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.length >= 9 &&
              3 === __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53[0] &&
              0 ===
                new DataView(
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.data,
                ).getUint32(1, !0) &&
              __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766(!0);
          }),
          (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.onerror =
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.onclose =
              () => __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766(!1)));
      } catch {
        __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766(!1);
      }
    });
  }
  function __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7(
    __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
  ) {
    const __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 = JSON.stringify(
      __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
    );
    __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 !==
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f &&
      ((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
        __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766),
      (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = ""),
      (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = null),
      __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c++);
  }
  window.NyxRelaySelection = {
    current: function (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) {
      return (
        __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7(
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
        ),
        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 ||
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f[0] ||
          ""
      );
    },
    choose: async function (
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
      __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 = "",
    ) {
      if (
        (__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7(
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
        ),
        __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708)
      )
        return __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708;
      if (
        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 &&
        !__bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061
      )
        return __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53;
      const __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 =
        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c;
      let __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e = "";
      try {
        __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e =
          localStorage.getItem(
            __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
          ) || "";
      } catch {}
      const __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22 = [
        ...new Set([
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
          __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e,
          ...__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
        ]),
      ].filter(
        (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) =>
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.includes(
            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
          ) &&
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 !==
            __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061,
      );
      (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.includes(
        __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061,
      ) &&
        __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22.push(
          __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061,
        ),
        (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = (async () => {
          for (const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f of __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22) {
            const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
              await __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766(
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
              );
            if (
              __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 !==
              __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c
            )
              return "";
            if (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708) {
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f;
              try {
                localStorage.setItem(
                  __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                );
              } catch {}
              return __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f;
            }
          }
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = "";
          try {
            localStorage.removeItem(
              __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
            );
          } catch {}
          return "";
        })()));
      try {
        return await __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708;
      } finally {
        __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 ===
          __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c &&
          (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = null);
      }
    },
    probe: __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766,
  };
})();
