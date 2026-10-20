(() => {
  const __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 =
      document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0074\u0061\u0072\u0067\u0065\u0074\u002d\u0069\u0070\u005d"),
    __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede =
      document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0063\u006f\u0070\u0079\u002d\u0069\u0070\u005d"),
    __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f =
      document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0064\u006f\u006d\u0061\u0069\u006e\u002d\u0066\u006f\u0072\u006d\u005d"),
    __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 =
      document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0073\u0075\u0062\u006d\u0069\u0074\u005d"),
    __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 =
      document.querySelector("\u005b\u0064\u0061\u0074\u0061\u002d\u0073\u0074\u0061\u0074\u0075\u0073\u005d"),
    __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45 =
      "\u0074\u0075\u0074\u0073\u0069" === document.body.dataset.site ? "\u0074\u0075\u0074\u0073\u0069" : "\u006e\u0079\u0078",
    __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d =
      "\u0074\u0075\u0074\u0073\u0069" === __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45
        ? "\u0054\u0075\u0074\u0073\u0069"
        : "\u004e\u0037\u0058";
  let __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd = "";
  function __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2(
    __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
    __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede = "",
  ) {
    ((__64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.hidden = !1),
      (__64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.className =
        "\u0073\u0074\u0061\u0074\u0075\u0073" +
        (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede
          ? ` ${__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede}`
          : "")),
      (__64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.textContent =
        __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28));
  }
  async function __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5(
    __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
  ) {
    const __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede =
      await __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.text();
    try {
      return __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede
        ? JSON.parse(__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede)
        : {};
    } catch {
      throw new Error(
        `${__67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d} returned an unexpected ${__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.status} response.`,
      );
    }
  }
  (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.addEventListener(
    "\u0063\u006c\u0069\u0063\u006b",
    async () => {
      if (__23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd)
        try {
          (await navigator.clipboard.writeText(
            __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd,
          ),
            (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.textContent =
              "\u0043\u006f\u0070\u0069\u0065\u0064"),
            setTimeout(() => {
              __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.textContent =
                "\u0043\u006f\u0070\u0079";
            }, 1400));
        } catch {
          __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2(
            `Copy this address: ${__23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd}`,
          );
        }
    },
  ),
    __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.addEventListener(
      "\u0073\u0075\u0062\u006d\u0069\u0074",
      async (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) => {
        (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.preventDefault(),
          (__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.disabled = !0));
        const __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede =
          __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.textContent;
        ((__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.textContent =
          "\u0056\u0065\u0072\u0069\u0066\u0079\u0069\u006e\u0067\u2026"),
          (__64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.hidden = !0));
        try {
          const __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 = await fetch(
              "\u002f\u0061\u0070\u0069\u002f\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0068\u006f\u0073\u0074\u006e\u0061\u006d\u0065\u0073",
              {
                method: "\u0050\u004f\u0053\u0054",
                credentials: "\u0073\u0061\u006d\u0065\u002d\u006f\u0072\u0069\u0067\u0069\u006e",
                headers: {
                  "\u0043\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0054\u0079\u0070\u0065": "\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u006a\u0073\u006f\u006e",
                },
                body: JSON.stringify({
                  hostname:
                    __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.elements
                      .hostname.value,
                  site: __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45,
                }),
              },
            ),
            __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede =
              await __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5(
                __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
              );
          if (!__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.ok)
            throw new Error(
              __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.error ||
                `Domain verification failed (${__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.status}).`,
            );
          ((__64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.hidden = !1),
            (__64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.className =
              "\u0073\u0074\u0061\u0074\u0075\u0073\u0020\u0073\u0075\u0063\u0063\u0065\u0073\u0073"),
            __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.replaceChildren(
              document.createTextNode(
                `${__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.message} `,
              ),
            ));
          const __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 =
            document.createElement("\u0061");
          ((__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.href =
            __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.url),
            (__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.textContent = `Open ${__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.hostname}`),
            __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.append(
              __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0,
            ));
        } catch (__23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd) {
          __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2(
            __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd.message ||
              `${__67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d} could not connect that domain.`,
            "\u0065\u0072\u0072\u006f\u0072",
          );
        } finally {
          ((__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.disabled = !1),
            (__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.textContent =
              __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede));
        }
      },
    ),
    (async function () {
      try {
        const __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f = await fetch(
            "\u002f\u0061\u0070\u0069\u002f\u0063\u0075\u0073\u0074\u006f\u006d\u002d\u0068\u006f\u0073\u0074\u006e\u0061\u006d\u0065\u0073\u002f\u0063\u006f\u006e\u0066\u0069\u0067",
            {
              credentials: "\u0073\u0061\u006d\u0065\u002d\u006f\u0072\u0069\u0067\u0069\u006e",
              cache: "\u006e\u006f\u002d\u0073\u0074\u006f\u0072\u0065",
            },
          ),
          __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 =
            await __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5(
              __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
            );
        ((__23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd = String(
          __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.targetIps?.[0] || "",
        )),
          (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.textContent =
            __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd || "\u004e\u006f\u0074\u0020\u0063\u006f\u006e\u0066\u0069\u0067\u0075\u0072\u0065\u0064"),
          (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.disabled =
            !__23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd),
          (__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.disabled =
            !__64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.enabled),
          __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.enabled ||
            __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2(
              `Custom-domain connection is not enabled on this ${__67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d} server yet.`,
              "\u0065\u0072\u0072\u006f\u0072",
            ));
      } catch (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f) {
        ((__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.textContent =
          "\u0055\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065"),
          (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.disabled = !0),
          (__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.disabled = !0),
          __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2(
            __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.message ||
              `${__67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d} could not load the domain configuration.`,
            "\u0065\u0072\u0072\u006f\u0072",
          ));
      }
    })());
})();
