import { measureFetch as __b66636d73568f95ee2630b81b72a615bf9765be1be3bf82a5a8cf7580ab56691 } from "\u002e\u002f\u0040\u0072\u0036\u0061\u0032\u0034\u0039\u0036\u0039\u0036\u0062\u0035\u0039\u0064\u0037\u0036\u0032\u0032\u0063\u0064\u0066\u0064\u0066\u0064\u0030\u0038\u0021\u002e\u006a\u0073";

export function setupDropEmbed({
  user: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = () => null,
  signup: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = () => {},
} = {}) {
  ((window.fetch = __b66636d73568f95ee2630b81b72a615bf9765be1be3bf82a5a8cf7580ab56691(
    window.fetch.bind(window),
    (
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
    ) =>
      parent.postMessage(
        {
          type: "\u0064\u0072\u006f\u0070\u003a\u0061\u0063\u0074\u0069\u0076\u0069\u0074\u0079",
          kind: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          bytes: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
        },
        location.origin,
      ),
  )),
    document.documentElement.classList.add("\u0064\u0072\u006f\u0070\u002d\u0061\u0069"),
    (document.documentElement.dataset.theme = "\u0064\u0061\u0072\u006b"),
    (document.title = "\u0044\u0072\u006f\u0070\u0020\u0041\u0049"),
    (document.getElementById("\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u004b\u0065\u0079\u004c\u0061\u0062\u0065\u006c").value = "\u0044\u0072\u006f\u0070"));
  const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
    document.createElement("\u006c\u0069\u006e\u006b");
  ((__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.rel = "\u0073\u0074\u0079\u006c\u0065\u0073\u0068\u0065\u0065\u0074"),
    (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.href = "\u002f\u0061\u0070\u0070\u0073\u002f\u0064\u0072\u006f\u0070\u002f\u0061\u0069\u002e\u0063\u0073\u0073"),
    document.head.append(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c));
  const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
    document.querySelector("\u002e\u0062\u0072\u0061\u006e\u0064");
  ((__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.textContent = "\u0041\u0049\u0020\u0063\u0068\u0061\u0074\u0073"),
    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.removeAttribute("\u0068\u0072\u0065\u0066"),
    __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.setAttribute(
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
      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
        if (
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.origin !==
            location.origin ||
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.source !== parent ||
          "\u0064\u0072\u006f\u0070\u003a\u0063\u006f\u006d\u006d\u0061\u006e\u0064" !==
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.data?.type
        )
          return;
        const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.data.action;
        ("\u0073\u0069\u0067\u006e\u0075\u0070" === __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c &&
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5(),
          "\u006b\u0065\u0079\u0073" === __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c &&
            document.getElementById("\u0061\u0070\u0069\u004b\u0065\u0079\u0073").click(),
          "\u0073\u0069\u0067\u006e\u0069\u006e" === __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c &&
            document.getElementById("\u0061\u0063\u0063\u006f\u0075\u006e\u0074").textContent.includes("\u0053\u0069\u0067\u006e\u0020\u0069\u006e") &&
            document.getElementById("\u0061\u0063\u0063\u006f\u0075\u006e\u0074").click(),
          "\u0073\u0069\u0067\u006e\u006f\u0075\u0074" === __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c &&
            document.getElementById("\u0061\u0063\u0063\u006f\u0075\u006e\u0074").textContent.includes("\u0053\u0069\u0067\u006e\u0020\u006f\u0075\u0074") &&
            document.getElementById("\u0061\u0063\u0063\u006f\u0075\u006e\u0074").click());
      },
    ),
    addEventListener(
      "\u006d\u0065\u0073\u0073\u0061\u0067\u0065",
      async (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) => {
        if (
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.origin !==
            location.origin ||
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.source !== parent ||
          "\u0064\u0072\u006f\u0070\u003a\u0067\u0061\u006d\u0065\u002d\u0061\u0063\u0063\u006f\u0075\u006e\u0074" !==
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.data?.type
        )
          return;
        const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.data.request;
        if (
          !["\u006e\u0079\u0078\u003a\u0063\u006c\u006f\u0075\u0064\u002d\u0067\u0061\u006d\u0065\u002d\u006c\u006f\u0061\u0064", "\u006e\u0079\u0078\u003a\u0063\u006c\u006f\u0075\u0064\u002d\u0067\u0061\u006d\u0065\u002d\u0073\u0061\u0076\u0065", "\u006e\u0079\u0078\u003a\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u002d\u0074\u006f\u006b\u0065\u006e\u002d\u0072\u0065\u0071\u0075\u0065\u0073\u0074"].includes(
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c?.type,
          )
        )
          return;
        const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = {
          type:
            "\u006e\u0079\u0078\u003a\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u002d\u0074\u006f\u006b\u0065\u006e\u002d\u0072\u0065\u0071\u0075\u0065\u0073\u0074" ===
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.type
              ? "\u006e\u0079\u0078\u003a\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u002d\u0074\u006f\u006b\u0065\u006e\u002d\u0072\u0065\u0073\u0070\u006f\u006e\u0073\u0065"
              : "\u006e\u0079\u0078\u003a\u0063\u006c\u006f\u0075\u0064\u002d\u0067\u0061\u006d\u0065\u002d\u0072\u0065\u0073\u0075\u006c\u0074",
          requestId: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.requestId,
        };
        try {
          const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
            await __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96()?.getIdToken();
          if (
            "\u006e\u0079\u0078\u003a\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u002d\u0074\u006f\u006b\u0065\u006e\u002d\u0072\u0065\u0071\u0075\u0065\u0073\u0074" ===
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.type
          )
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.token =
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 || "";
          else if (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) {
            const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
                "\u006e\u0079\u0078\u003a\u0063\u006c\u006f\u0075\u0064\u002d\u0067\u0061\u006d\u0065\u002d\u0073\u0061\u0076\u0065" ===
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.type,
              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = await fetch(
                "\u002f\u0061\u0070\u0069\u002f\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u002f\u0063\u006c\u006f\u0075\u0064\u002d\u0067\u0061\u006d\u0065\u0073\u002f" +
                  encodeURIComponent(
                    String(
                      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.gameKey ||
                        "",
                    ),
                  ),
                {
                  method: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
                    ? "\u0050\u0055\u0054"
                    : "\u0047\u0045\u0054",
                  headers: {
                    Authorization:
                      "\u0042\u0065\u0061\u0072\u0065\u0072\u0020" +
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                    "\u0043\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0054\u0079\u0070\u0065": "\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u006a\u0073\u006f\u006e",
                  },
                  ...(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
                    ? {
                        body: JSON.stringify({
                          storage:
                            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.storage,
                          removed:
                            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.removed,
                        }),
                      }
                    : {}),
                },
              ),
              __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
                await __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.json();
            if (!__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.ok)
              throw Error(
                __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.error ||
                  "\u0043\u006c\u006f\u0075\u0064\u0020\u0073\u0061\u0076\u0065\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u002e",
              );
            Object.assign(
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
              __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
            );
          } else __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.storage = {};
        } catch (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713) {
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.error =
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.message;
        }
        parent.postMessage(
          {
            type: "\u0064\u0072\u006f\u0070\u003a\u0067\u0061\u006d\u0065\u002d\u0072\u0065\u0073\u0075\u006c\u0074",
            result: __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
          },
          location.origin,
        );
      },
    ),
    addEventListener(
      "\u006d\u0065\u0073\u0073\u0061\u0067\u0065",
      async (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) => {
        if (
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.origin !==
            location.origin ||
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.source !== parent ||
          "\u0064\u0072\u006f\u0070\u003a\u0073\u0065\u0073\u0073\u0069\u006f\u006e\u002d\u0074\u006f\u006b\u0065\u006e" !==
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.data?.type
        )
          return;
        let __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = "";
        try {
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
            (await __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96()?.getIdToken()) ||
            "";
        } catch {}
        parent.postMessage(
          {
            type: "\u0064\u0072\u006f\u0070\u003a\u0073\u0065\u0073\u0073\u0069\u006f\u006e\u002d\u0074\u006f\u006b\u0065\u006e\u002d\u0072\u0065\u0073\u0075\u006c\u0074",
            requestId:
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.data.requestId,
            token: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
          },
          location.origin,
        );
      },
    ));
  const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
    document.createElement("\u0062\u0075\u0074\u0074\u006f\u006e");
  ((__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.id = "\u0064\u0072\u006f\u0070\u0048\u0069\u0073\u0074\u006f\u0072\u0079"),
    (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.type = "\u0062\u0075\u0074\u0074\u006f\u006e"),
    (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.title = "\u0043\u0068\u0061\u0074\u0020\u0068\u0069\u0073\u0074\u006f\u0072\u0079"),
    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.setAttribute(
      "\u0061\u0072\u0069\u0061\u002d\u006c\u0061\u0062\u0065\u006c",
      "\u0043\u0068\u0061\u0074\u0020\u0068\u0069\u0073\u0074\u006f\u0072\u0079",
    ),
    (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.innerHTML =
      "\u003c\u0073\u0076\u0067\u0020\u0076\u0069\u0065\u0077\u0042\u006f\u0078\u003d\u0022\u0030\u0020\u0030\u0020\u0032\u0034\u0020\u0032\u0034\u0022\u0020\u0061\u0072\u0069\u0061\u002d\u0068\u0069\u0064\u0064\u0065\u006e\u003d\u0022\u0074\u0072\u0075\u0065\u0022\u003e\u003c\u0070\u0061\u0074\u0068\u0020\u0064\u003d\u0022\u004d\u0034\u0020\u0034\u0068\u0031\u0036\u0076\u0031\u0032\u0048\u0039\u006c\u002d\u0035\u0020\u0034\u007a\u0022\u002f\u003e\u003c\u002f\u0073\u0076\u0067\u003e"),
    document
      .querySelector("\u002e\u0063\u0068\u0061\u0074\u002d\u0074\u006f\u006f\u006c\u0062\u0061\u0072")
      .prepend(__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713),
    (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.onclick = () => {
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
