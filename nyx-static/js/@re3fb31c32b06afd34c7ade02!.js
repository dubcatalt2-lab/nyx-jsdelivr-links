(() => {
  const __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 =
    document.documentElement;
  try {
    if (
      window.parent !== window &&
      parent.location.origin === location.origin &&
      ("\u0074\u0075\u0074\u0073\u0069" === window.frameElement?.dataset.appShell ||
        "\u0074\u0075\u0074\u0073\u0069" === parent.document.documentElement.dataset.appShell)
    ) {
      __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.dataset.appShell = "\u0074\u0075\u0074\u0073\u0069";
      const __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede = () =>
        document
          .querySelectorAll("\u006c\u0069\u006e\u006b\u005b\u0072\u0065\u006c\u003d\u0022\u0073\u0074\u0079\u006c\u0065\u0073\u0068\u0065\u0065\u0074\u0022\u005d")
          .forEach((__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) => {
            "\u002f\u0061\u0070\u0070\u0073\u002f\u006f\u0062\u0073\u0069\u0064\u0069\u0061\u006e\u002e\u0063\u0073\u0073" ===
              new URL(
                __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.href,
                location.href,
              ).pathname &&
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.remove();
          });
      (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede(),
        new MutationObserver(
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
        ).observe(document.head, {
          childList: !0,
        }));
    }
  } catch {}
  const __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede =
    document.createElement("\u0073\u0074\u0079\u006c\u0065");
  let __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f;
  ((__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.textContent =
    "\u0068\u0074\u006d\u006c\u005b\u0064\u0061\u0074\u0061\u002d\u0061\u0070\u0070\u002d\u0070\u0072\u0065\u0073\u0065\u006e\u0074\u0061\u0074\u0069\u006f\u006e\u003d\u0022\u0070\u0065\u006e\u0064\u0069\u006e\u0067\u0022\u005d\u0020\u0062\u006f\u0064\u0079\u007b\u0076\u0069\u0073\u0069\u0062\u0069\u006c\u0069\u0074\u0079\u003a\u0068\u0069\u0064\u0064\u0065\u006e\u0021\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074\u007d"),
    document.head.append(__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede),
    (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.dataset.appPresentation =
      "\u0070\u0065\u006e\u0064\u0069\u006e\u0067"));
  const __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 = () => {
    (clearTimeout(__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f),
      delete __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.dataset
        .appPresentation,
      __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.remove());
  };
  __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f = setTimeout(
    __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0,
    8e3,
  );
  const __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 = () => {
    try {
      window.frameElement?.dispatchEvent(new Event("\u006e\u0079\u0078\u003a\u0061\u0070\u0070\u002d\u0064\u006f\u006d\u002d\u0072\u0065\u0061\u0064\u0079"));
    } catch {}
    const __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 = [
      ...document.querySelectorAll("\u0023\u0074\u0075\u0074\u0073\u0069\u002d\u0065\u006d\u0062\u0065\u0064\u0064\u0065\u0064\u002d\u0073\u0074\u0079\u006c\u0065"),
    ].filter(
      (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) =>
        !__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.disabled &&
        !__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.sheet,
    );
    __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.length
      ? Promise.all(
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.map(
            (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) =>
              new Promise((__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede) => {
                const __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f = () => {
                  (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.removeEventListener(
                    "\u006c\u006f\u0061\u0064",
                    __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
                  ),
                    __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.removeEventListener(
                      "\u0065\u0072\u0072\u006f\u0072",
                      __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
                    ),
                    __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede());
                };
                (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.addEventListener(
                  "\u006c\u006f\u0061\u0064",
                  __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
                  {
                    once: !0,
                  },
                ),
                  __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.addEventListener(
                    "\u0065\u0072\u0072\u006f\u0072",
                    __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
                    {
                      once: !0,
                    },
                  ),
                  __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.sheet &&
                    __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f());
              }),
          ),
        ).then(__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0)
      : __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0();
  };
  "\u006c\u006f\u0061\u0064\u0069\u006e\u0067" === document.readyState
    ? document.addEventListener(
        "\u0044\u004f\u004d\u0043\u006f\u006e\u0074\u0065\u006e\u0074\u004c\u006f\u0061\u0064\u0065\u0064",
        __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579,
        {
          once: !0,
        },
      )
    : __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579();
})();
