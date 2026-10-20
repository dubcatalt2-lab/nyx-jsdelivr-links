import { measureFetch as __4aae2f1f458fa6b3a0a3270cd9bc99f741ef0d26ea6eaf1fb9ce892455a20844 } from "\u002e\u002f\u0040\u0072\u0036\u0061\u0032\u0034\u0039\u0036\u0039\u0036\u0062\u0035\u0039\u0064\u0037\u0036\u0032\u0032\u0063\u0064\u0066\u0064\u0066\u0064\u0030\u0038\u0021\u002e\u006a\u0073";

export function setupDropEmbed({
  user: __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 = () => null,
  signup: __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede = () => {},
} = {}) {
  ((window.fetch = __4aae2f1f458fa6b3a0a3270cd9bc99f741ef0d26ea6eaf1fb9ce892455a20844(
    window.fetch.bind(window),
    (
      __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
      __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
    ) =>
      parent.postMessage(
        {
          type: "\u0064\u0072\u006f\u0070\u003a\u0061\u0063\u0074\u0069\u0076\u0069\u0074\u0079",
          kind: __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
          bytes: __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
        },
        location.origin,
      ),
  )),
    document.documentElement.classList.add("\u0064\u0072\u006f\u0070\u002d\u0061\u0069"),
    (document.documentElement.dataset.theme = "\u0064\u0061\u0072\u006b"),
    (document.title = "\u0044\u0072\u006f\u0070\u0020\u0041\u0049"),
    (document.getElementById("\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u004b\u0065\u0079\u004c\u0061\u0062\u0065\u006c").value = "\u0044\u0072\u006f\u0070"));
  const __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f =
    document.createElement("\u006c\u0069\u006e\u006b");
  ((__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.rel = "\u0073\u0074\u0079\u006c\u0065\u0073\u0068\u0065\u0065\u0074"),
    (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.href = "\u002f\u0061\u0070\u0070\u0073\u002f\u0064\u0072\u006f\u0070\u002f\u0061\u0069\u002e\u0063\u0073\u0073"),
    document.head.append(__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f));
  const __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 =
    document.querySelector("\u002e\u0062\u0072\u0061\u006e\u0064");
  ((__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.textContent = "\u0041\u0049\u0020\u0063\u0068\u0061\u0074\u0073"),
    __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.removeAttribute("\u0068\u0072\u0065\u0066"),
    __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.setAttribute(
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
      (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) => {
        if (
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.origin !==
            location.origin ||
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.source !== parent ||
          "\u0064\u0072\u006f\u0070\u003a\u0063\u006f\u006d\u006d\u0061\u006e\u0064" !==
            __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.data?.type
        )
          return;
        const __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f =
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.data.action;
        ("\u0073\u0069\u0067\u006e\u0075\u0070" === __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f &&
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede(),
          "\u006b\u0065\u0079\u0073" === __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f &&
            document.getElementById("\u0061\u0070\u0069\u004b\u0065\u0079\u0073").click(),
          "\u0073\u0069\u0067\u006e\u0069\u006e" === __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f &&
            document.getElementById("\u0061\u0063\u0063\u006f\u0075\u006e\u0074").textContent.includes("\u0053\u0069\u0067\u006e\u0020\u0069\u006e") &&
            document.getElementById("\u0061\u0063\u0063\u006f\u0075\u006e\u0074").click(),
          "\u0073\u0069\u0067\u006e\u006f\u0075\u0074" === __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f &&
            document.getElementById("\u0061\u0063\u0063\u006f\u0075\u006e\u0074").textContent.includes("\u0053\u0069\u0067\u006e\u0020\u006f\u0075\u0074") &&
            document.getElementById("\u0061\u0063\u0063\u006f\u0075\u006e\u0074").click());
      },
    ),
    addEventListener(
      "\u006d\u0065\u0073\u0073\u0061\u0067\u0065",
      async (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede) => {
        if (
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.origin !==
            location.origin ||
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.source !== parent ||
          "\u0064\u0072\u006f\u0070\u003a\u0067\u0061\u006d\u0065\u002d\u0061\u0063\u0063\u006f\u0075\u006e\u0074" !==
            __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.data?.type
        )
          return;
        const __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f =
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.data.request;
        if (
          !["\u006e\u0079\u0078\u003a\u0063\u006c\u006f\u0075\u0064\u002d\u0067\u0061\u006d\u0065\u002d\u006c\u006f\u0061\u0064", "\u006e\u0079\u0078\u003a\u0063\u006c\u006f\u0075\u0064\u002d\u0067\u0061\u006d\u0065\u002d\u0073\u0061\u0076\u0065", "\u006e\u0079\u0078\u003a\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u002d\u0074\u006f\u006b\u0065\u006e\u002d\u0072\u0065\u0071\u0075\u0065\u0073\u0074"].includes(
            __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f?.type,
          )
        )
          return;
        const __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 = {
          type:
            "\u006e\u0079\u0078\u003a\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u002d\u0074\u006f\u006b\u0065\u006e\u002d\u0072\u0065\u0071\u0075\u0065\u0073\u0074" ===
            __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.type
              ? "\u006e\u0079\u0078\u003a\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u002d\u0074\u006f\u006b\u0065\u006e\u002d\u0072\u0065\u0073\u0070\u006f\u006e\u0073\u0065"
              : "\u006e\u0079\u0078\u003a\u0063\u006c\u006f\u0075\u0064\u002d\u0067\u0061\u006d\u0065\u002d\u0072\u0065\u0073\u0075\u006c\u0074",
          requestId: __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.requestId,
        };
        try {
          const __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede =
            await __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28()?.getIdToken();
          if (
            "\u006e\u0079\u0078\u003a\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u002d\u0074\u006f\u006b\u0065\u006e\u002d\u0072\u0065\u0071\u0075\u0065\u0073\u0074" ===
            __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.type
          )
            __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.token =
              __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede || "";
          else if (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede) {
            const __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 =
                "\u006e\u0079\u0078\u003a\u0063\u006c\u006f\u0075\u0064\u002d\u0067\u0061\u006d\u0065\u002d\u0073\u0061\u0076\u0065" ===
                __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.type,
              __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 = await fetch(
                "\u002f\u0061\u0070\u0069\u002f\u0061\u0063\u0063\u006f\u0075\u006e\u0074\u002f\u0063\u006c\u006f\u0075\u0064\u002d\u0067\u0061\u006d\u0065\u0073\u002f" +
                  encodeURIComponent(
                    String(
                      __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.gameKey ||
                        "",
                    ),
                  ),
                {
                  method: __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28
                    ? "\u0050\u0055\u0054"
                    : "\u0047\u0045\u0054",
                  headers: {
                    Authorization:
                      "\u0042\u0065\u0061\u0072\u0065\u0072\u0020" +
                      __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
                    "\u0043\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0054\u0079\u0070\u0065": "\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u006a\u0073\u006f\u006e",
                  },
                  ...(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28
                    ? {
                        body: JSON.stringify({
                          storage:
                            __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.storage,
                          removed:
                            __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.removed,
                        }),
                      }
                    : {}),
                },
              ),
              __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45 =
                await __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.json();
            if (!__64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.ok)
              throw Error(
                __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.error ||
                  "\u0043\u006c\u006f\u0075\u0064\u0020\u0073\u0061\u0076\u0065\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u002e",
              );
            Object.assign(
              __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0,
              __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45,
            );
          } else __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.storage = {};
        } catch (__64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579) {
          __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.error =
            __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.message;
        }
        parent.postMessage(
          {
            type: "\u0064\u0072\u006f\u0070\u003a\u0067\u0061\u006d\u0065\u002d\u0072\u0065\u0073\u0075\u006c\u0074",
            result: __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0,
          },
          location.origin,
        );
      },
    ),
    addEventListener(
      "\u006d\u0065\u0073\u0073\u0061\u0067\u0065",
      async (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede) => {
        if (
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.origin !==
            location.origin ||
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.source !== parent ||
          "\u0064\u0072\u006f\u0070\u003a\u0073\u0065\u0073\u0073\u0069\u006f\u006e\u002d\u0074\u006f\u006b\u0065\u006e" !==
            __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.data?.type
        )
          return;
        let __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f = "";
        try {
          __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f =
            (await __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28()?.getIdToken()) ||
            "";
        } catch {}
        parent.postMessage(
          {
            type: "\u0064\u0072\u006f\u0070\u003a\u0073\u0065\u0073\u0073\u0069\u006f\u006e\u002d\u0074\u006f\u006b\u0065\u006e\u002d\u0072\u0065\u0073\u0075\u006c\u0074",
            requestId:
              __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.data.requestId,
            token: __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
          },
          location.origin,
        );
      },
    ));
  const __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 =
    document.createElement("\u0062\u0075\u0074\u0074\u006f\u006e");
  ((__64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.id = "\u0064\u0072\u006f\u0070\u0048\u0069\u0073\u0074\u006f\u0072\u0079"),
    (__64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.type = "\u0062\u0075\u0074\u0074\u006f\u006e"),
    (__64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.title = "\u0043\u0068\u0061\u0074\u0020\u0068\u0069\u0073\u0074\u006f\u0072\u0079"),
    __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.setAttribute(
      "\u0061\u0072\u0069\u0061\u002d\u006c\u0061\u0062\u0065\u006c",
      "\u0043\u0068\u0061\u0074\u0020\u0068\u0069\u0073\u0074\u006f\u0072\u0079",
    ),
    (__64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.innerHTML =
      "\u003c\u0073\u0076\u0067\u0020\u0076\u0069\u0065\u0077\u0042\u006f\u0078\u003d\u0022\u0030\u0020\u0030\u0020\u0032\u0034\u0020\u0032\u0034\u0022\u0020\u0061\u0072\u0069\u0061\u002d\u0068\u0069\u0064\u0064\u0065\u006e\u003d\u0022\u0074\u0072\u0075\u0065\u0022\u003e\u003c\u0070\u0061\u0074\u0068\u0020\u0064\u003d\u0022\u004d\u0034\u0020\u0034\u0068\u0031\u0036\u0076\u0031\u0032\u0048\u0039\u006c\u002d\u0035\u0020\u0034\u007a\u0022\u002f\u003e\u003c\u002f\u0073\u0076\u0067\u003e"),
    document
      .querySelector("\u002e\u0063\u0068\u0061\u0074\u002d\u0074\u006f\u006f\u006c\u0062\u0061\u0072")
      .prepend(__64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579),
    (__64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.onclick = () => {
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
