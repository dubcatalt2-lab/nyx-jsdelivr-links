(() => {
  const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
      document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0074\u0061\u0072\u0067\u0065\u0074\u002d\u0069\u0070\u005d"),
    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
      document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0063\u006f\u0070\u0079\u002d\u0069\u0070\u005d"),
    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
      document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0064\u006f\u006d\u0061\u0069\u006e\u002d\u0066\u006f\u0072\u006d\u005d"),
    __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
      document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0073\u0075\u0062\u006d\u0069\u0074\u005d"),
    __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 =
      document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0073\u0074\u0061\u0074\u0075\u0073\u005d"),
    __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 =
      "\u0074\u0075\u0074\u0073\u0069" === document.body.dataset.site ? "\u0074\u0075\u0074\u0073\u0069" : "\u006e\u0079\u0078",
    __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 =
      "\u0074\u0075\u0074\u0073\u0069" === __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766
        ? "\u0054\u0075\u0074\u0073\u0069"
        : "\u004e\u0037\u0058";
  let __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 = "";
  function __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106(
    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = "",
  ) {
    ((__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.hidden = !1),
      (__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.className =
        "\u0073\u0074\u0061\u0074\u0075\u0073" +
        (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
          ? ` ${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53}`
          : "")),
      (__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.textContent =
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f));
  }
  async function __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e(
    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
  ) {
    const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
      await __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.text();
    try {
      return __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
        ? JSON.parse(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53)
        : {};
    } catch {
      throw new Error(
        `${__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7} returned an unexpected ${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.status} response.`,
      );
    }
  }
  (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.addEventListener(
    "\u0063\u006c\u0069\u0063\u006b",
    async () => {
      if (__bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061)
        try {
          (await navigator.clipboard.writeText(
            __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061,
          ),
            (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.textContent =
              "\u0043\u006f\u0070\u0069\u0065\u0064"),
            setTimeout(() => {
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.textContent =
                "\u0043\u006f\u0070\u0079";
            }, 1400));
        } catch {
          __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106(
            `Copy this address: ${__bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061}`,
          );
        }
    },
  ),
    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.addEventListener(
      "\u0073\u0075\u0062\u006d\u0069\u0074",
      async (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => {
        (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.preventDefault(),
          (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.disabled = !0));
        const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
          __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.textContent;
        ((__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.textContent =
          "\u0056\u0065\u0072\u0069\u0066\u0079\u0069\u006e\u0067\u2026"),
          (__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.hidden = !0));
        try {
          const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f = await fetch(
              "\u002f\u0061\u0070\u0069\u002f\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0068\u006f\u0073\u0074\u006e\u0061\u006d\u0065\u0073",
              {
                method: "\u0050\u004f\u0053\u0054",
                credentials: "\u0073\u0061\u006d\u0065\u002d\u006f\u0072\u0069\u0067\u0069\u006e",
                headers: {
                  "\u0043\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0054\u0079\u0070\u0065": "\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u006a\u0073\u006f\u006e",
                },
                body: JSON.stringify({
                  hostname:
                    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.elements
                      .hostname.value,
                  site: __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766,
                }),
              },
            ),
            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
              await __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e(
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
              );
          if (!__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.ok)
            throw new Error(
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.error ||
                `Domain verification failed (${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.status}).`,
            );
          ((__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.hidden = !1),
            (__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.className =
              "\u0073\u0074\u0061\u0074\u0075\u0073\u0020\u0073\u0075\u0063\u0063\u0065\u0073\u0073"),
            __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.replaceChildren(
              document.createTextNode(
                `${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.message} `,
              ),
            ));
          const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
            document.createElement("\u0061");
          ((__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.href =
            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.url),
            (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.textContent = `Open ${__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.hostname}`),
            __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.append(
              __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
            ));
        } catch (__bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061) {
          __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106(
            __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061.message ||
              `${__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7} could not connect that domain.`,
            "\u0065\u0072\u0072\u006f\u0072",
          );
        } finally {
          ((__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.disabled = !1),
            (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.textContent =
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53));
        }
      },
    ),
    (async function () {
      try {
        const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = await fetch(
            "\u002f\u0061\u0070\u0069\u002f\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0068\u006f\u0073\u0074\u006e\u0061\u006d\u0065\u0073\u002f\u0063\u006f\u006e\u0066\u0069\u0067",
            {
              credentials: "\u0073\u0061\u006d\u0065\u002d\u006f\u0072\u0069\u0067\u0069\u006e",
              cache: "\u006e\u006f\u002d\u0073\u0074\u006f\u0072\u0065",
            },
          ),
          __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 =
            await __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e(
              __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
            );
        ((__bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 = String(
          __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.targetIps?.[0] || "",
        )),
          (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.textContent =
            __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 || "\u004e\u006f\u0074\u0020\u0063\u006f\u006e\u0066\u0069\u0067\u0075\u0072\u0065\u0064"),
          (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.disabled =
            !__bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061),
          (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.disabled =
            !__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.enabled),
          __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.enabled ||
            __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106(
              `Custom-domain connection is not enabled on this ${__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7} server yet.`,
              "\u0065\u0072\u0072\u006f\u0072",
            ));
      } catch (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708) {
        ((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.textContent =
          "\u0055\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065"),
          (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.disabled = !0),
          (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.disabled = !0),
          __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106(
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.message ||
              `${__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7} could not load the domain configuration.`,
            "\u0065\u0072\u0072\u006f\u0072",
          ));
      }
    })());
})();
