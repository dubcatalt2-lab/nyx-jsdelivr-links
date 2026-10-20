window.dropStartupReady = new Promise(
  (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) => {
    const __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede =
      document.getElementById("\u0073\u0074\u0075\u0064\u0079\u0072\u0065\u0061\u0064\u0079\u002d\u0073\u0074\u0061\u0072\u0074\u0075\u0070");
    let __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
      __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 = !1,
      __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 = !1;
    const __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45 =
        new AbortController(),
      __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d = new WeakSet(),
      __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd = () => {
        __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 ||
          __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 ||
          ((__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 = !0),
          clearTimeout(__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f),
          clearTimeout(__2ab10d5388db42e8f0abfc33148c89ee0a82b07c32da0dc2d7dd5801c6063bed),
          __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.abort(),
          clearInterval(__8cd6a5f96d374ab369b22c8a8b780947702a58489eb9a8703a86c1c2ea05444e),
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede?.remove(),
          (document.title = "\u0044\u0072\u006f\u0070"),
          document.documentElement.classList.remove("\u0073\u0074\u0061\u0072\u0074\u0075\u0070\u002d\u0063\u006f\u0076\u0065\u0072\u0065\u0064"),
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28());
      },
      __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2 = (
        __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
      ) => {
        !__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.isTrusted ||
          __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 ||
          __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 ||
          ((__64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 = !0),
          clearTimeout(__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f),
          clearTimeout(__2ab10d5388db42e8f0abfc33148c89ee0a82b07c32da0dc2d7dd5801c6063bed),
          __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.abort(),
          clearInterval(__8cd6a5f96d374ab369b22c8a8b780947702a58489eb9a8703a86c1c2ea05444e),
          (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.dataset.staying =
            "\u0074\u0072\u0075\u0065"));
      },
      __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5 = () => {
        if (
          !__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 &&
          !__64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579
        )
          try {
            const __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 =
              __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.contentDocument;
            if (
              !__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 ||
              __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d.has(
                __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
              )
            )
              return;
            __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d.add(
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
            );
            for (const __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede of [
              "\u0070\u006f\u0069\u006e\u0074\u0065\u0072\u0064\u006f\u0077\u006e",
              "\u006b\u0065\u0079\u0064\u006f\u0077\u006e",
              "\u0077\u0068\u0065\u0065\u006c",
              "\u0074\u006f\u0075\u0063\u0068\u0073\u0074\u0061\u0072\u0074",
            ])
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.addEventListener(
                __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
                __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2,
                {
                  capture: !0,
                  passive: !0,
                  signal: __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.signal,
                },
              );
          } catch {}
      },
      __37c128880588460342b5be1dfd5b157c42bb28e5b510992c66566aee844f1b65 = () => {
        __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 ||
          __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 ||
          (__b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5(),
          __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f ||
            (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f = setTimeout(
              __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd,
              3e3,
            )));
      },
      __8cd6a5f96d374ab369b22c8a8b780947702a58489eb9a8703a86c1c2ea05444e = setInterval(
        __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5,
        25,
      );
    __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5();
    const __2ab10d5388db42e8f0abfc33148c89ee0a82b07c32da0dc2d7dd5801c6063bed = setTimeout(
      __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd,
      8e3,
    );
    (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede?.addEventListener(
      "\u006c\u006f\u0061\u0064",
      __37c128880588460342b5be1dfd5b157c42bb28e5b510992c66566aee844f1b65,
      {
        once: !0,
      },
    ),
      __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede?.addEventListener(
        "\u0065\u0072\u0072\u006f\u0072",
        __37c128880588460342b5be1dfd5b157c42bb28e5b510992c66566aee844f1b65,
        {
          once: !0,
        },
      ));
    try {
      (!__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede ||
        ("\u0063\u006f\u006d\u0070\u006c\u0065\u0074\u0065" ===
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.contentDocument
            ?.readyState &&
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.contentWindow.location.pathname.endsWith(
            "\u002f\u0073\u0074\u0075\u0064\u0079\u0072\u0065\u0061\u0064\u0079\u002f\u0069\u006e\u0064\u0065\u0078\u002e\u0068\u0074\u006d\u006c",
          ))) &&
        __37c128880588460342b5be1dfd5b157c42bb28e5b510992c66566aee844f1b65();
    } catch {
      __37c128880588460342b5be1dfd5b157c42bb28e5b510992c66566aee844f1b65();
    }
  },
);
