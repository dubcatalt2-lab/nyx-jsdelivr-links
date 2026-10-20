(() => {
  const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
    document.documentElement;
  try {
    if (
      window.parent !== window &&
      parent.location.origin === location.origin &&
      ("\u0074\u0075\u0074\u0073\u0069" === window.frameElement?.dataset.appShell ||
        "\u0074\u0075\u0074\u0073\u0069" === parent.document.documentElement.dataset.appShell)
    ) {
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.dataset.appShell = "\u0074\u0075\u0074\u0073\u0069";
      const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = () =>
        document
          .querySelectorAll("\u006c\u0069\u006e\u006b\u005b\u0072\u0065\u006c\u003d\u0022\u0073\u0074\u0079\u006c\u0065\u0073\u0068\u0065\u0065\u0074\u0022\u005d")
          .forEach((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => {
            "\u002f\u0061\u0070\u0070\u0073\u002f\u006f\u0062\u0073\u0069\u0064\u0069\u0061\u006e\u002e\u0063\u0073\u0073" ===
              new URL(
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.href,
                location.href,
              ).pathname &&
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.remove();
          });
      (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53(),
        new MutationObserver(
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
        ).observe(document.head, {
          childList: !0,
        }));
    }
  } catch {}
  const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
    document.createElement("\u0073\u0074\u0079\u006c\u0065");
  let __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708;
  ((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.textContent =
    "\u0068\u0074\u006d\u006c\u005b\u0064\u0061\u0074\u0061\u002d\u0061\u0070\u0070\u002d\u0070\u0072\u0065\u0073\u0065\u006e\u0074\u0061\u0074\u0069\u006f\u006e\u003d\u0022\u0070\u0065\u006e\u0064\u0069\u006e\u0067\u0022\u005d\u0020\u0062\u006f\u0064\u0079\u007b\u0076\u0069\u0073\u0069\u0062\u0069\u006c\u0069\u0074\u0079\u003a\u0068\u0069\u0064\u0064\u0065\u006e\u0021\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074\u007d"),
    document.head.append(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53),
    (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.dataset.appPresentation =
      "\u0070\u0065\u006e\u0064\u0069\u006e\u0067"));
  const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c = () => {
    (clearTimeout(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708),
      delete __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.dataset
        .appPresentation,
      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.remove());
  };
  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = setTimeout(
    __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
    8e3,
  );
  const __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 = () => {
    try {
      window.frameElement?.dispatchEvent(new Event("\u006e\u0079\u0078\u003a\u0061\u0070\u0070\u002d\u0064\u006f\u006d\u002d\u0072\u0065\u0061\u0064\u0079"));
    } catch {}
    const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f = [
      ...document.querySelectorAll("\u0023\u0074\u0075\u0074\u0073\u0069\u002d\u0065\u006d\u0062\u0065\u0064\u0064\u0065\u0064\u002d\u0073\u0074\u0079\u006c\u0065"),
    ].filter(
      (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
        !__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.disabled &&
        !__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.sheet,
    );
    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.length
      ? Promise.all(
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.map(
            (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
              new Promise((__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) => {
                const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = () => {
                  (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.removeEventListener(
                    "\u006c\u006f\u0061\u0064",
                    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
                  ),
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.removeEventListener(
                      "\u0065\u0072\u0072\u006f\u0072",
                      __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
                    ),
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53());
                };
                (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.addEventListener(
                  "\u006c\u006f\u0061\u0064",
                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
                  {
                    once: !0,
                  },
                ),
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.addEventListener(
                    "\u0065\u0072\u0072\u006f\u0072",
                    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
                    {
                      once: !0,
                    },
                  ),
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.sheet &&
                    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708());
              }),
          ),
        ).then(__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c)
      : __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c();
  };
  "\u006c\u006f\u0061\u0064\u0069\u006e\u0067" === document.readyState
    ? document.addEventListener(
        "\u0044\u004f\u004d\u0043\u006f\u006e\u0074\u0065\u006e\u0074\u004c\u006f\u0061\u0064\u0065\u0064",
        __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
        {
          once: !0,
        },
      )
    : __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477();
})();
