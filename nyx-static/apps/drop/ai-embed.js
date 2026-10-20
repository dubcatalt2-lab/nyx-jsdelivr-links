import { measureFetch as __486e69198427b55a46896094b43b16ada4888f82b3310bcd5c9b1441df89ba23 } from "\u002e\u002f\u0040\u0072\u0036\u0061\u0032\u0034\u0039\u0036\u0039\u0036\u0062\u0035\u0039\u0064\u0037\u0036\u0032\u0032\u0063\u0064\u0066\u0064\u0066\u0064\u0030\u0038\u0021\u002e\u006a\u0073";

export function setupDropEmbed({
  user: __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f = () => null,
  signup: __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = () => {},
} = {}) {
  ((window.fetch = __486e69198427b55a46896094b43b16ada4888f82b3310bcd5c9b1441df89ba23(
    window.fetch.bind(window),
    (
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
    ) =>
      parent.postMessage(
        {
          type: "\u0064\u0072\u006f\u0070\u003a\u0061\u0063\u0074\u0069\u0076\u0069\u0074\u0079",
          kind: __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
          bytes: __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
        },
        location.origin,
      ),
  )),
    document.documentElement.classList.add("\u0064\u0072\u006f\u0070\u002d\u0061\u0069"),
    (document.documentElement.dataset.theme = "\u0064\u0061\u0072\u006b"),
    (document.title = "\u0044\u0072\u006f\u0070\u0020\u0041\u0049"),
    (document.getElementById("\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u004b\u0065\u0079\u004c\u0061\u0062\u0065\u006c").value = "\u0044\u0072\u006f\u0070"));
  const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
    document.createElement("\u006c\u0069\u006e\u006b");
  ((__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.rel = "\u0073\u0074\u0079\u006c\u0065\u0073\u0068\u0065\u0065\u0074"),
    (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.href = "\u002f\u0061\u0070\u0070\u0073\u002f\u0064\u0072\u006f\u0070\u002f\u0061\u0069\u002e\u0063\u0073\u0073"),
    document.head.append(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708));
  const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
    document.querySelector("\u002e\u0062\u0072\u0061\u006e\u0064");
  ((__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.textContent = "\u0041\u0049\u0020\u0063\u0068\u0061\u0074\u0073"),
    __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.removeAttribute("\u0068\u0072\u0065\u0066"),
    __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.setAttribute(
      "\u0061\u0072\u0069\u0061\u002d\u006c\u0061\u0062\u0065\u006c",
      "\u0044\u0072\u006f\u0070\u0020\u0041\u0049\u0020\u0063\u0068\u0061\u0074\u0073",
    ),
    (document.getElementById("\u0075\u0073\u0065\u0043\u0072\u0065\u0061\u0074\u0065\u0064\u004b\u0065\u0079").textContent = "\u0055\u0073\u0065\u0020\u0069\u006e\u0020\u0044\u0072\u006f\u0070"),
    (document.querySelector("\u006c\u0069\u006e\u006b\u005b\u0072\u0065\u006c\u003d\u0022\u0069\u0063\u006f\u006e\u0022\u005d").href = "\u002f\u0061\u0070\u0070\u0073\u002f\u0064\u0072\u006f\u0070\u002f\u006c\u006f\u0067\u006f\u002e\u0073\u0076\u0067"),
    (document.querySelector("\u002e\u0066\u006f\u006f\u0074\u006e\u006f\u0074\u0065").textContent = ""),
    new MutationObserver(() => {
      "\u0064\u0061\u0072\u006b" !== document.documentElement.dataset.theme &&
        (document.documentElement.dataset.theme = "\u0064\u0061\u0072\u006b");
    }).observe(document.documentElement, {
      attributes: !0,
      attributeFilter: ["\u0064\u0061\u0074\u0061\u002d\u0074\u0068\u0065\u006d\u0065"],
    }),
    addEventListener(
      "\u006d\u0065\u0073\u0073\u0061\u0067\u0065",
      (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => {
        if (
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.origin !==
            location.origin ||
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.source !== parent ||
          "\u0064\u0072\u006f\u0070\u003a\u0063\u006f\u006d\u006d\u0061\u006e\u0064" !==
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.data?.type
        )
          return;
        const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.data.action;
        ("\u0073\u0069\u0067\u006e\u0075\u0070" === __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 &&
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53(),
          "\u006b\u0065\u0079\u0073" === __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 &&
            document.getElementById("\u0061\u0070\u0069\u004b\u0065\u0079\u0073").click(),
          "\u0073\u0069\u0067\u006e\u0069\u006e" === __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 &&
            document.getElementById("\u0061\u0063\u0063\u006f\u0075\u006e\u0074").textContent.includes("\u0053\u0069\u0067\u006e\u0020\u0069\u006e") &&
            document.getElementById("\u0061\u0063\u0063\u006f\u0075\u006e\u0074").click(),
          "\u0073\u0069\u0067\u006e\u006f\u0075\u0074" === __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 &&
            document.getElementById("\u0061\u0063\u0063\u006f\u0075\u006e\u0074").textContent.includes("\u0053\u0069\u0067\u006e\u0020\u006f\u0075\u0074") &&
            document.getElementById("\u0061\u0063\u0063\u006f\u0075\u006e\u0074").click());
      },
    ),
    addEventListener(
      "\u006d\u0065\u0073\u0073\u0061\u0067\u0065",
      async (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) => {
        if (
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.origin !==
            location.origin ||
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.source !== parent ||
          "\u0064\u0072\u006f\u0070\u003a\u0067\u0061\u006d\u0065\u002d\u0061\u0063\u0063\u006f\u0075\u006e\u0074" !==
            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.data?.type
        )
          return;
        const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.data.request;
        if (
          !["\u006e\u0079\u0078\u003a\u0063\u006c\u006f\u0075\u0064\u002d\u0067\u0061\u006d\u0065\u002d\u006c\u006f\u0061\u0064", "\u006e\u0079\u0078\u003a\u0063\u006c\u006f\u0075\u0064\u002d\u0067\u0061\u006d\u0065\u002d\u0073\u0061\u0076\u0065", "\u006e\u0079\u0078\u003a\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u002d\u0074\u006f\u006b\u0065\u006e\u002d\u0072\u0065\u0071\u0075\u0065\u0073\u0074"].includes(
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708?.type,
          )
        )
          return;
        const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c = {
          type:
            "\u006e\u0079\u0078\u003a\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u002d\u0074\u006f\u006b\u0065\u006e\u002d\u0072\u0065\u0071\u0075\u0065\u0073\u0074" ===
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.type
              ? "\u006e\u0079\u0078\u003a\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u002d\u0074\u006f\u006b\u0065\u006e\u002d\u0072\u0065\u0073\u0070\u006f\u006e\u0073\u0065"
              : "\u006e\u0079\u0078\u003a\u0063\u006c\u006f\u0075\u0064\u002d\u0067\u0061\u006d\u0065\u002d\u0072\u0065\u0073\u0075\u006c\u0074",
          requestId: __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.requestId,
        };
        try {
          const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
            await __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f()?.getIdToken();
          if (
            "\u006e\u0079\u0078\u003a\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u002d\u0074\u006f\u006b\u0065\u006e\u002d\u0072\u0065\u0071\u0075\u0065\u0073\u0074" ===
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.type
          )
            __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.token =
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 || "";
          else if (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) {
            const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
                "\u006e\u0079\u0078\u003a\u0063\u006c\u006f\u0075\u0064\u002d\u0067\u0061\u006d\u0065\u002d\u0073\u0061\u0076\u0065" ===
                __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.type,
              __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 = await fetch(
                "\u002f\u0061\u0070\u0069\u002f\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u002f\u0063\u006c\u006f\u0075\u0064\u002d\u0067\u0061\u006d\u0065\u0073\u002f" +
                  encodeURIComponent(
                    String(
                      __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.gameKey ||
                        "",
                    ),
                  ),
                {
                  method: __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f
                    ? "\u0050\u0055\u0054"
                    : "\u0047\u0045\u0054",
                  headers: {
                    Authorization:
                      "\u0042\u0065\u0061\u0072\u0065\u0072\u0020" +
                      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                    "\u0043\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0054\u0079\u0070\u0065": "\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u006a\u0073\u006f\u006e",
                  },
                  ...(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f
                    ? {
                        body: JSON.stringify({
                          storage:
                            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.storage,
                          removed:
                            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.removed,
                        }),
                      }
                    : {}),
                },
              ),
              __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 =
                await __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.json();
            if (!__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.ok)
              throw Error(
                __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.error ||
                  "\u0043\u006c\u006f\u0075\u0064\u0020\u0073\u0061\u0076\u0065\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u002e",
              );
            Object.assign(
              __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
              __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766,
            );
          } else __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.storage = {};
        } catch (__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477) {
          __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.error =
            __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.message;
        }
        parent.postMessage(
          {
            type: "\u0064\u0072\u006f\u0070\u003a\u0067\u0061\u006d\u0065\u002d\u0072\u0065\u0073\u0075\u006c\u0074",
            result: __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
          },
          location.origin,
        );
      },
    ),
    addEventListener(
      "\u006d\u0065\u0073\u0073\u0061\u0067\u0065",
      async (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) => {
        if (
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.origin !==
            location.origin ||
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.source !== parent ||
          "\u0064\u0072\u006f\u0070\u003a\u0073\u0065\u0073\u0073\u0069\u006f\u006e\u002d\u0074\u006f\u006b\u0065\u006e" !==
            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.data?.type
        )
          return;
        let __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = "";
        try {
          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
            (await __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f()?.getIdToken()) ||
            "";
        } catch {}
        parent.postMessage(
          {
            type: "\u0064\u0072\u006f\u0070\u003a\u0073\u0065\u0073\u0073\u0069\u006f\u006e\u002d\u0074\u006f\u006b\u0065\u006e\u002d\u0072\u0065\u0073\u0075\u006c\u0074",
            requestId:
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.data.requestId,
            token: __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
          },
          location.origin,
        );
      },
    ));
  const __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 =
    document.createElement("\u0062\u0075\u0074\u0074\u006f\u006e");
  ((__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.id = "\u0064\u0072\u006f\u0070\u0048\u0069\u0073\u0074\u006f\u0072\u0079"),
    (__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.type = "\u0062\u0075\u0074\u0074\u006f\u006e"),
    (__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.title = "\u0043\u0068\u0061\u0074\u0020\u0068\u0069\u0073\u0074\u006f\u0072\u0079"),
    __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.setAttribute(
      "\u0061\u0072\u0069\u0061\u002d\u006c\u0061\u0062\u0065\u006c",
      "\u0043\u0068\u0061\u0074\u0020\u0068\u0069\u0073\u0074\u006f\u0072\u0079",
    ),
    (__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.innerHTML =
      "\u003c\u0073\u0076\u0067\u0020\u0076\u0069\u0065\u0077\u0042\u006f\u0078\u003d\u0022\u0030\u0020\u0030\u0020\u0032\u0034\u0020\u0032\u0034\u0022\u0020\u0061\u0072\u0069\u0061\u002d\u0068\u0069\u0064\u0064\u0065\u006e\u003d\u0022\u0074\u0072\u0075\u0065\u0022\u003e\u003c\u0070\u0061\u0074\u0068\u0020\u0064\u003d\u0022\u004d\u0034\u0020\u0034\u0068\u0031\u0036\u0076\u0031\u0032\u0048\u0039\u006c\u002d\u0035\u0020\u0034\u007a\u0022\u002f\u003e\u003c\u002f\u0073\u0076\u0067\u003e"),
    document
      .querySelector("\u002e\u0063\u0068\u0061\u0074\u002d\u0074\u006f\u006f\u006c\u0062\u0061\u0072")
      .prepend(__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477),
    (__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.onclick = () => {
      (document.body.classList.remove("\u0073\u0069\u0064\u0065\u0062\u0061\u0072\u002d\u0063\u006f\u006c\u006c\u0061\u0070\u0073\u0065\u0064"),
        document.body.classList.toggle("\u0068\u0069\u0073\u0074\u006f\u0072\u0079\u002d\u006f\u0070\u0065\u006e"));
    }),
    (document.getElementById("\u0063\u006f\u006c\u006c\u0061\u0070\u0073\u0065\u0043\u0068\u0061\u0074\u0073").onclick = () =>
      document.body.classList.remove("\u0068\u0069\u0073\u0074\u006f\u0072\u0079\u002d\u006f\u0070\u0065\u006e")),
    parent.postMessage(
      {
        type: "\u0064\u0072\u006f\u0070\u003a\u0072\u0065\u0061\u0064\u0079",
      },
      location.origin,
    ));
}
