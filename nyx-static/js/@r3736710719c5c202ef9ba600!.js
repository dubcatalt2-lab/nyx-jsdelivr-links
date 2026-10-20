globalThis.NyxDuckImageViewport = function (
  __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
  __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
) {
  if (!__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28?.frame) return;
  let __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f;
  try {
    __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f =
      __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.frame.contentDocument;
  } catch {
    return;
  }
  if (
    !__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f?.documentElement ||
    "\u0074\u0072\u0075\u0065" ===
      __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.documentElement.dataset
        .n7xDuckImageViewport
  )
    return;
  const __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 = () => {
    try {
      const __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f = String(
        __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.frame.contentWindow
          ?.location?.href || "",
      );
      return (
        __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede(
          __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
        ) ||
        __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede(
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.sourceUrl ||
            __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.url ||
            "",
        ) ||
        __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.sourceUrl ||
        __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.url ||
        ""
      );
    } catch {
      return (
        __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede(
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.sourceUrl ||
            __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.url ||
            "",
        ) ||
        __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.sourceUrl ||
        __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.url ||
        ""
      );
    }
  };
  let __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579;
  try {
    __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 = new URL(
      __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0(),
      location.href,
    );
  } catch {
    return;
  }
  if (
    "\u0064\u0075\u0063\u006b\u0064\u0075\u0063\u006b\u0067\u006f\u002e\u0063\u006f\u006d" !==
    __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.hostname
      .replace(/^www\./i, "")
      .toLowerCase()
  )
    return;
  __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.documentElement.dataset.n7xDuckImageViewport =
    "\u0074\u0072\u0075\u0065";
  const __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45 = (
      __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
    ) => {
      const __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede = String(
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 || "",
        ).trim(),
        __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f =
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.match(
            /https?%3a%2f%2f/i,
          );
      if (!__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f) return "";
      const __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 =
          0 === __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.index,
        __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 =
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.includes("\u002f\u0034\u006f\u0074\u0069\u0067\u002f");
      if (
        !__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 &&
        !__64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579
      )
        return "";
      let __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45 =
        __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.slice(
          __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.index,
        );
      const __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d =
        __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.search(
          /[?&]%24(?:rfp|io|tf|pf|iframe)=/i,
        );
      __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d > 0 &&
        (__dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45 =
          __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.slice(
            0,
            __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d,
          ));
      let __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd =
        __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45;
      for (
        let __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2 = 0;
        __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2 < 2 &&
        /%[0-9a-f]{2}/i.test(__23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd);
        __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2++
      )
        try {
          __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd = decodeURIComponent(
            __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd,
          );
        } catch {
          break;
        }
      return /^https?:\/\//i.test(
        __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd,
      )
        ? __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd
        : "";
    },
    __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d = () => {
      __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f
        .querySelectorAll("\u0069\u006d\u0067\u002c\u0073\u006f\u0075\u0072\u0063\u0065")
        .forEach((__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) => {
          const __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede =
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.getAttribute(
                "\u0073\u0072\u0063",
              ) || "",
            __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f =
              __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45(
                __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
              );
          (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f &&
            __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f !==
              __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede &&
            __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.setAttribute(
              "\u0073\u0072\u0063",
              __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
            ),
            ["\u0064\u0061\u0074\u0061\u002d\u0073\u0072\u0063", "\u0064\u0061\u0074\u0061\u002d\u006f\u0072\u0069\u0067\u0069\u006e\u0061\u006c", "\u0064\u0061\u0074\u0061\u002d\u006c\u0061\u007a\u0079\u002d\u0073\u0072\u0063", "\u0064\u0061\u0074\u0061\u002d\u0069\u006d\u0061\u0067\u0065\u002d\u0075\u0072\u006c"].forEach(
              (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f) => {
                const __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 =
                    __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.getAttribute(
                      __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
                    ) || "",
                  __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 =
                    __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45(
                      __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0,
                    );
                __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 &&
                  __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 !==
                    __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 &&
                  (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.setAttribute(
                    __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
                    __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579,
                  ),
                  "\u0049\u004d\u0047" !==
                    __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.tagName ||
                    (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede &&
                      !__dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45(
                        __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
                      )) ||
                    __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.setAttribute(
                      "\u0073\u0072\u0063",
                      __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579,
                    ));
              },
            ));
          const __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 =
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.getAttribute(
                "\u0073\u0072\u0063\u0073\u0065\u0074",
              ) || "",
            __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 =
              __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0
                .split("\u002c")[0]
                ?.trim()
                .split(/\s+/)[0] || "",
            __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d =
              __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45(
                __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579,
              );
          __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d &&
            (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.removeAttribute(
              "\u0073\u0072\u0063\u0073\u0065\u0074",
            ),
            __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.setAttribute(
              "\u0073\u0072\u0063",
              __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d,
            ));
        });
    },
    __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd = () => {
      const __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede =
        __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.frame.contentWindow;
      if (
        !__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede ||
        !__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.frame.getClientRects()
          .length
      )
        return;
      let __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579;
      try {
        __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 = new URL(
          __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0(),
        );
      } catch {
        return;
      }
      if (
        "\u0069\u006d\u0061\u0067\u0065\u0073" !==
          __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.searchParams.get(
            "\u0069\u0061",
          ) &&
        "\u0069\u006d\u0061\u0067\u0065\u0073" !==
          __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.searchParams.get("\u0069\u0061\u0078")
      )
        return;
      const __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45 =
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.innerHeight,
        __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d =
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.innerWidth;
      for (const __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 of __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.images) {
        if (
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.closest(
            "\u0068\u0065\u0061\u0064\u0065\u0072\u002c\u006e\u0061\u0076\u002c\u0061\u0073\u0069\u0064\u0065\u002c\u005b\u0072\u006f\u006c\u0065\u003d\u0022\u0064\u0069\u0061\u006c\u006f\u0067\u0022\u005d\u002c\u005b\u0063\u006c\u0061\u0073\u0073\u002a\u003d\u0022\u006d\u006f\u0064\u0061\u006c\u0022\u0020\u0069\u005d\u002c\u005b\u0063\u006c\u0061\u0073\u0073\u002a\u003d\u0022\u0061\u006e\u006f\u006d\u0061\u006c\u0079\u0022\u0020\u0069\u005d",
          )
        )
          continue;
        const __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede =
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.getBoundingClientRect();
        if (
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.width < 50 ||
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.height < 50 ||
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.bottom <
            -__dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45 ||
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.top >
            3 * __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45 ||
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.right < 0 ||
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.left >
            __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d
        )
          continue;
        "\u006c\u0061\u007a\u0079" ===
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.getAttribute(
            "\u006c\u006f\u0061\u0064\u0069\u006e\u0067",
          ) &&
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.setAttribute(
            "\u006c\u006f\u0061\u0064\u0069\u006e\u0067",
            "\u0065\u0061\u0067\u0065\u0072",
          );
        const __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f =
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.getAttribute("\u0073\u0072\u0063") ||
          "";
        if (
          (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f &&
            "\u0061\u0062\u006f\u0075\u0074\u003a\u0062\u006c\u0061\u006e\u006b" !== __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f &&
            !(
              /^data:image\//i.test(
                __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
              ) &&
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.complete &&
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.naturalWidth <= 1
            )) ||
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.getAttribute("\u0073\u0072\u0063\u0073\u0065\u0074")
        )
          continue;
        const __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 =
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.getAttribute(
            "\u0064\u0061\u0074\u0061\u002d\u0073\u0072\u0063",
          ) ||
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.getAttribute(
            "\u0064\u0061\u0074\u0061\u002d\u006f\u0072\u0069\u0067\u0069\u006e\u0061\u006c",
          ) ||
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.getAttribute(
            "\u0064\u0061\u0074\u0061\u002d\u006c\u0061\u007a\u0079\u002d\u0073\u0072\u0063",
          );
        if (__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0)
          try {
            const __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede = new URL(
              __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0,
              __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579,
            );
            ["\u0068\u0074\u0074\u0070\u003a", "\u0068\u0074\u0074\u0070\u0073\u003a"].includes(
              __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.protocol,
            ) &&
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.setAttribute(
                "\u0073\u0072\u0063",
                __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0,
              );
          } catch {}
      }
    },
    __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2 = () => {
      const __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 = [
        "\u0041\u0049\u0020\u0069\u006d\u0061\u0067\u0065\u0073",
        "\u0041\u006c\u006c\u0020\u0073\u0069\u007a\u0065\u0073",
        "\u0041\u006c\u006c\u0020\u0063\u006f\u006c\u006f\u0072\u0073",
        "\u0041\u006c\u006c\u0020\u0074\u0079\u0070\u0065\u0073",
        "\u0041\u006c\u006c\u0020\u006c\u0061\u0079\u006f\u0075\u0074\u0073",
        "\u004c\u0069\u0063\u0065\u006e\u0073\u0065\u0073",
      ];
      __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f
        .querySelectorAll("\u006e\u0061\u0076")
        .forEach((__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede) => {
          const __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 = String(
            __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.innerText ||
              __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.textContent ||
              "",
          )
            .replace(/\s+/g, "\u0020")
            .trim();
          if (
            __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.filter(
              (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) =>
                __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.includes(
                  __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
                ),
            ).length < 3
          )
            return;
          const __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 = [
            ...__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.querySelectorAll(
              "\u0075\u006c",
            ),
          ].find((__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) => {
            const __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede =
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.getBoundingClientRect?.();
            return (
              __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede &&
              __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.width >= 300 &&
              __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.height >= 20 &&
              __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.height <= 96
            );
          });
          if (!__64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579) return;
          const __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45 =
              __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.getBoundingClientRect?.(),
            __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d =
              __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.getBoundingClientRect?.();
          if (
            !__dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45 ||
            !__67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d ||
            __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.height <=
              __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d.height + 120
          )
            return;
          const __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd = Math.ceil(
            Math.max(
              40,
              __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d.height + 16,
            ),
          );
          (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.style.setProperty(
            "\u0068\u0065\u0069\u0067\u0068\u0074",
            `${__23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd}px`,
            "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
          ),
            __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.style.setProperty(
              "\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074",
              "\u0030",
              "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
            ),
            __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.style.setProperty(
              "\u006d\u0061\u0078\u002d\u0068\u0065\u0069\u0067\u0068\u0074",
              `${__23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd}px`,
              "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
            ),
            __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.style.setProperty(
              "\u006f\u0076\u0065\u0072\u0066\u006c\u006f\u0077",
              "\u0076\u0069\u0073\u0069\u0062\u006c\u0065",
              "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
            ));
          const __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2 =
            __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.parentElement;
          if (
            __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2 &&
            __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2 !==
              __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede
          ) {
            const __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 = Math.ceil(
              Math.max(
                32,
                __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d.height,
              ),
            );
            (__7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2.style.setProperty(
              "\u0068\u0065\u0069\u0067\u0068\u0074",
              `${__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28}px`,
              "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
            ),
              __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2.style.setProperty(
                "\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074",
                "\u0030",
                "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
              ),
              __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2.style.setProperty(
                "\u006d\u0061\u0078\u002d\u0068\u0065\u0069\u0067\u0068\u0074",
                `${__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28}px`,
                "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
              ),
              __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2.style.setProperty(
                "\u006f\u0076\u0065\u0072\u0066\u006c\u006f\u0077",
                "\u0076\u0069\u0073\u0069\u0062\u006c\u0065",
                "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
              ),
              (__7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2.dataset.n7xDuckImageFilterWrapperFixed =
                "\u0074\u0072\u0075\u0065"));
          }
          ((__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.dataset.n7xDuckImageFilterFixed =
            "\u0074\u0072\u0075\u0065"),
            (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.documentElement.dataset.n7xDuckImageFilterFixed =
              "\u0074\u0072\u0075\u0065"));
        });
    },
    __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5 = () => {
      const __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede =
        __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.frame.contentWindow;
      if (
        !__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede ||
        !__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.body
      )
        return;
      const __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 = String(
        __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.body.innerText || "",
      );
      if (
        !/AI images/i.test(__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0) ||
        !/All sizes/i.test(__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0) ||
        !/All layouts/i.test(__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0)
      )
        return (
          __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f
            .querySelectorAll("\u005b\u0064\u0061\u0074\u0061\u002d\u006e\u0037\u0078\u002d\u0064\u0075\u0063\u006b\u002d\u006d\u0061\u0069\u006e\u006c\u0069\u006e\u0065\u002d\u0068\u0069\u0064\u0064\u0065\u006e\u003d\u0022\u0074\u0072\u0075\u0065\u0022\u005d")
            .forEach((__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) => {
              (["\u0064\u0069\u0073\u0070\u006c\u0061\u0079", "\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074", "\u0068\u0065\u0069\u0067\u0068\u0074", "\u006d\u0061\u0072\u0067\u0069\u006e", "\u0070\u0061\u0064\u0064\u0069\u006e\u0067"].forEach(
                (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede) =>
                  __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.style.removeProperty(
                    __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
                  ),
              ),
                delete __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.dataset
                  .n7xDuckMainlineHidden);
            }),
          __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f
            .querySelectorAll("\u005b\u0064\u0061\u0074\u0061\u002d\u006e\u0037\u0078\u002d\u0064\u0075\u0063\u006b\u002d\u0069\u006d\u0061\u0067\u0065\u002d\u0067\u0061\u0070\u002d\u0066\u0069\u0078\u0065\u0064\u003d\u0022\u0074\u0072\u0075\u0065\u0022\u005d")
            .forEach((__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) => {
              (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.style.removeProperty(
                "\u006d\u0061\u0072\u0067\u0069\u006e\u002d\u0074\u006f\u0070",
              ),
                delete __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.dataset
                  .n7xDuckImageGapFixed);
            }),
          __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f
            .querySelectorAll("\u005b\u0064\u0061\u0074\u0061\u002d\u006e\u0037\u0078\u002d\u0064\u0075\u0063\u006b\u002d\u0069\u006d\u0061\u0067\u0065\u002d\u0066\u0069\u006c\u0074\u0065\u0072\u002d\u0066\u0069\u0078\u0065\u0064\u003d\u0022\u0074\u0072\u0075\u0065\u0022\u005d")
            .forEach((__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) => {
              (["\u0068\u0065\u0069\u0067\u0068\u0074", "\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074", "\u006d\u0061\u0078\u002d\u0068\u0065\u0069\u0067\u0068\u0074", "\u006f\u0076\u0065\u0072\u0066\u006c\u006f\u0077"].forEach(
                (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede) =>
                  __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.style.removeProperty(
                    __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
                  ),
              ),
                delete __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.dataset
                  .n7xDuckImageFilterFixed);
            }),
          void __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f
            .querySelectorAll("\u005b\u0064\u0061\u0074\u0061\u002d\u006e\u0037\u0078\u002d\u0064\u0075\u0063\u006b\u002d\u0069\u006d\u0061\u0067\u0065\u002d\u0066\u0069\u006c\u0074\u0065\u0072\u002d\u0077\u0072\u0061\u0070\u0070\u0065\u0072\u002d\u0066\u0069\u0078\u0065\u0064\u003d\u0022\u0074\u0072\u0075\u0065\u0022\u005d")
            .forEach((__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) => {
              (["\u0068\u0065\u0069\u0067\u0068\u0074", "\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074", "\u006d\u0061\u0078\u002d\u0068\u0065\u0069\u0067\u0068\u0074", "\u006f\u0076\u0065\u0072\u0066\u006c\u006f\u0077"].forEach(
                (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede) =>
                  __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.style.removeProperty(
                    __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
                  ),
              ),
                delete __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.dataset
                  .n7xDuckImageFilterWrapperFixed);
            })
        );
      const __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 =
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.scrollY ||
          __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.scrollingElement
            ?.scrollTop ||
          0,
        __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45 = [
          ...__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.images,
        ]
          .filter((__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) => {
            if (
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.closest?.(
                "\u0068\u0065\u0061\u0064\u0065\u0072\u002c\u006e\u0061\u0076\u002c\u0061\u0073\u0069\u0064\u0065\u002c\u005b\u0072\u006f\u006c\u0065\u003d\u0022\u0064\u0069\u0061\u006c\u006f\u0067\u0022\u005d\u002c\u005b\u0063\u006c\u0061\u0073\u0073\u002a\u003d\u0022\u006d\u006f\u0064\u0061\u006c\u0022\u0020\u0069\u005d\u002c\u005b\u0063\u006c\u0061\u0073\u0073\u002a\u003d\u0022\u0061\u006e\u006f\u006d\u0061\u006c\u0079\u0022\u0020\u0069\u005d",
              )
            )
              return !1;
            const __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede =
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.getBoundingClientRect?.();
            return (
              __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede &&
              __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.width >= 100 &&
              __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.height >= 70
            );
          })
          .sort(
            (
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
              __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
            ) => {
              const __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f =
                  __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.getBoundingClientRect(),
                __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 =
                  __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.getBoundingClientRect();
              return (
                __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.top -
                  __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.top ||
                __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.left -
                  __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.left
              );
            },
          );
      if (__dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.length < 4) return;
      const __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d =
        __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.slice(
          0,
          Math.min(12, __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.length),
        );
      __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f
        .querySelectorAll("\u005b\u0064\u0061\u0074\u0061\u002d\u0074\u0065\u0073\u0074\u0069\u0064\u003d\u0022\u006d\u0061\u0069\u006e\u006c\u0069\u006e\u0065\u0022\u005d\u002c\u002e\u0072\u0065\u0073\u0075\u006c\u0074\u0073\u002d\u002d\u006d\u0061\u0069\u006e")
        .forEach((__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) => {
          __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d.some(
            (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede) =>
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.contains(
                __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
              ),
          ) ||
            (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.style.setProperty(
              "\u0064\u0069\u0073\u0070\u006c\u0061\u0079",
              "\u006e\u006f\u006e\u0065",
              "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
            ),
            __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.style.setProperty(
              "\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074",
              "\u0030",
              "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
            ),
            __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.style.setProperty(
              "\u0068\u0065\u0069\u0067\u0068\u0074",
              "\u0030",
              "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
            ),
            __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.style.setProperty(
              "\u006d\u0061\u0072\u0067\u0069\u006e",
              "\u0030",
              "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
            ),
            __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.style.setProperty(
              "\u0070\u0061\u0064\u0064\u0069\u006e\u0067",
              "\u0030",
              "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
            ),
            (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.dataset.n7xDuckMainlineHidden =
              "\u0074\u0072\u0075\u0065"));
        });
      let __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd = 0;
      __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f
        .querySelectorAll("\u0064\u0069\u0076\u002c\u006e\u0061\u0076\u002c\u0073\u0065\u0063\u0074\u0069\u006f\u006e")
        .forEach((__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) => {
          const __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede = String(
            __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.innerText || "",
          )
            .replace(/\s+/g, "\u0020")
            .trim();
          if (
            ["\u0041\u0049\u0020\u0069\u006d\u0061\u0067\u0065\u0073", "\u0041\u006c\u006c\u0020\u0073\u0069\u007a\u0065\u0073", "\u0041\u006c\u006c\u0020\u0063\u006f\u006c\u006f\u0072\u0073", "\u0041\u006c\u006c\u0020\u0074\u0079\u0070\u0065\u0073", "\u0041\u006c\u006c\u0020\u006c\u0061\u0079\u006f\u0075\u0074\u0073", "\u004c\u0069\u0063\u0065\u006e\u0073\u0065\u0073"].filter(
              (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) =>
                __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.includes(
                  __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
                ),
            ).length < 3
          )
            return;
          const __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f =
            __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.getBoundingClientRect?.();
          !__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f ||
            __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.width < 300 ||
            __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.height <= 0 ||
            __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.height > 120 ||
            (__23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd = Math.max(
              __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd,
              __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.bottom +
                __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579,
            ));
        });
      const __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2 = Math.max(
        110,
        __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd
          ? __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd + 12
          : 0,
      );
      let __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5 =
        __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d[0].parentElement;
      for (
        ;
        __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5 &&
        !__67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d.every(
          (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) =>
            __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5.contains(
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
            ),
        );

      )
        __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5 =
          __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5.parentElement;
      if (
        !__b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5 ||
        __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5 ===
          __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.body ||
        __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5 ===
          __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.documentElement
      )
        return;
      for (
        ;
        __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5.parentElement &&
        __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5.parentElement !==
          __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.body &&
        __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5.parentElement !==
          __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.documentElement;

      ) {
        const __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 =
          __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5.parentElement;
        if (
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.querySelector(
            "\u005b\u0064\u0061\u0074\u0061\u002d\u0074\u0065\u0073\u0074\u0069\u0064\u003d\u0022\u0068\u0065\u0061\u0064\u0065\u0072\u0022\u005d\u002c\u0066\u006f\u0072\u006d\u005b\u0064\u0061\u0074\u0061\u002d\u0074\u0065\u0073\u0074\u0069\u0064\u003d\u0022\u0073\u0065\u0061\u0072\u0063\u0068\u002d\u0066\u006f\u0072\u006d\u0022\u005d",
          )
        )
          break;
        const __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede =
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.getBoundingClientRect?.();
        if (
          !__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede ||
          (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede?.top || 0) +
            __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 <
            __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2 + 180
        )
          break;
        __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5 =
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28;
      }
      if (
        "\u0074\u0072\u0075\u0065" ===
        __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5.dataset
          .n7xDuckImageGapFixed
      )
        return;
      const __37c128880588460342b5be1dfd5b157c42bb28e5b510992c66566aee844f1b65 =
        __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5.getBoundingClientRect?.();
      if (!__37c128880588460342b5be1dfd5b157c42bb28e5b510992c66566aee844f1b65) return;
      const __8cd6a5f96d374ab369b22c8a8b780947702a58489eb9a8703a86c1c2ea05444e = Math.round(
        __37c128880588460342b5be1dfd5b157c42bb28e5b510992c66566aee844f1b65.top +
          __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 -
          __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2,
      );
      if (__8cd6a5f96d374ab369b22c8a8b780947702a58489eb9a8703a86c1c2ea05444e < 220) return;
      const __2ab10d5388db42e8f0abfc33148c89ee0a82b07c32da0dc2d7dd5801c6063bed =
        Number.parseFloat(
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.getComputedStyle(
            __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5,
          ).marginTop,
        ) || 0;
      (__b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5.style.setProperty(
        "\u006d\u0061\u0072\u0067\u0069\u006e\u002d\u0074\u006f\u0070",
        __2ab10d5388db42e8f0abfc33148c89ee0a82b07c32da0dc2d7dd5801c6063bed -
          __8cd6a5f96d374ab369b22c8a8b780947702a58489eb9a8703a86c1c2ea05444e +
          "\u0070\u0078",
        "\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074",
      ),
        (__b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5.dataset.n7xDuckImageGapFixed =
          "\u0074\u0072\u0075\u0065"),
        (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.documentElement.dataset.n7xDuckImageGapFixed =
          "\u0074\u0072\u0075\u0065"));
    };
  let __37c128880588460342b5be1dfd5b157c42bb28e5b510992c66566aee844f1b65 = !1;
  const __8cd6a5f96d374ab369b22c8a8b780947702a58489eb9a8703a86c1c2ea05444e = () => {
    __37c128880588460342b5be1dfd5b157c42bb28e5b510992c66566aee844f1b65 ||
      ((__37c128880588460342b5be1dfd5b157c42bb28e5b510992c66566aee844f1b65 = !0),
      requestAnimationFrame(() => {
        ((__37c128880588460342b5be1dfd5b157c42bb28e5b510992c66566aee844f1b65 = !1),
          __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2(),
          __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d(),
          __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5(),
          __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd());
      }));
  };
  try {
    new MutationObserver(
      __8cd6a5f96d374ab369b22c8a8b780947702a58489eb9a8703a86c1c2ea05444e,
    ).observe(__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.documentElement, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: [
        "\u0073\u0072\u0063",
        "\u0073\u0072\u0063\u0073\u0065\u0074",
        "\u006c\u006f\u0061\u0064\u0069\u006e\u0067",
        "\u0064\u0061\u0074\u0061\u002d\u0073\u0072\u0063",
        "\u0064\u0061\u0074\u0061\u002d\u006f\u0072\u0069\u0067\u0069\u006e\u0061\u006c",
        "\u0064\u0061\u0074\u0061\u002d\u006c\u0061\u007a\u0079\u002d\u0073\u0072\u0063",
        "\u0064\u0061\u0074\u0061\u002d\u0069\u006d\u0061\u0067\u0065\u002d\u0075\u0072\u006c",
      ],
    });
  } catch {}
  let __2ab10d5388db42e8f0abfc33148c89ee0a82b07c32da0dc2d7dd5801c6063bed = !1;
  const __27ff7ae7a0ee6aae0a2624d293c9390d38bd96930112429ed2ba8f10cadd27e9 = () => {
    __2ab10d5388db42e8f0abfc33148c89ee0a82b07c32da0dc2d7dd5801c6063bed ||
      ((__2ab10d5388db42e8f0abfc33148c89ee0a82b07c32da0dc2d7dd5801c6063bed = !0),
      requestAnimationFrame(() => {
        ((__2ab10d5388db42e8f0abfc33148c89ee0a82b07c32da0dc2d7dd5801c6063bed = !1),
          __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd());
      }));
  };
  (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.addEventListener(
    "\u006c\u006f\u0061\u0064",
    __27ff7ae7a0ee6aae0a2624d293c9390d38bd96930112429ed2ba8f10cadd27e9,
    !0,
  ),
    __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.addEventListener(
      "\u0073\u0063\u0072\u006f\u006c\u006c",
      __27ff7ae7a0ee6aae0a2624d293c9390d38bd96930112429ed2ba8f10cadd27e9,
      {
        capture: !0,
        passive: !0,
      },
    ),
    __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.defaultView?.addEventListener(
      "\u0072\u0065\u0073\u0069\u007a\u0065",
      __27ff7ae7a0ee6aae0a2624d293c9390d38bd96930112429ed2ba8f10cadd27e9,
      {
        passive: !0,
      },
    ),
    __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2(),
    __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d(),
    __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5(),
    __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd(),
    [250, 700, 1400, 2600, 4200].forEach(
      (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) =>
        setTimeout(() => {
          (__7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2(),
            __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d(),
            __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5(),
            __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd());
        }, __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28),
    ));
};
