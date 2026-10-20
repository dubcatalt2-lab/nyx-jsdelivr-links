(() => {
  let __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 = "",
    __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede = "",
    __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f = null,
    __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 = 0;
  const __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 = "\u006e\u0079\u0078\u002e\u006c\u0061\u0073\u0074\u0057\u006f\u0072\u006b\u0069\u006e\u0067\u0052\u0065\u006c\u0061\u0079";
  function __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45(
    __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
  ) {
    return new Promise((__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede) => {
      let __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
        __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0,
        __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 = !1;
      const __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45 = (
        __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
      ) => {
        if (!__64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579) {
          if (
            ((__64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 = !0),
            clearTimeout(__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0),
            __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f)
          ) {
            __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.onmessage =
              __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.onerror =
              __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.onclose =
                null;
            try {
              __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.close();
            } catch {}
          }
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede(
            __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
          );
        }
      };
      __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 = setTimeout(
        () => __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45(!1),
        1e4,
      );
      try {
        ((__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f = new WebSocket(
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
        )),
          (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.binaryType =
            "\u0061\u0072\u0072\u0061\u0079\u0062\u0075\u0066\u0066\u0065\u0072"),
          (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.onmessage = (
            __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
          ) => {
            if (
              !(
                __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.data instanceof
                ArrayBuffer
              )
            )
              return;
            const __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede =
              new Uint8Array(
                __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.data,
              );
            __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.length >= 9 &&
              3 === __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede[0] &&
              0 ===
                new DataView(
                  __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.data,
                ).getUint32(1, !0) &&
              __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45(!0);
          }),
          (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.onerror =
            __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.onclose =
              () => __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45(!1)));
      } catch {
        __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45(!1);
      }
    });
  }
  function __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d(
    __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579,
  ) {
    const __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45 = JSON.stringify(
      __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579,
    );
    __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45 !==
      __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 &&
      ((__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 =
        __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45),
      (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede = ""),
      (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f = null),
      __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0++);
  }
  window.NyxRelaySelection = {
    current: function (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) {
      return (
        __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d(
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
        ),
        __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede ||
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28[0] ||
          ""
      );
    },
    choose: async function (
      __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
      __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd = "",
    ) {
      if (
        (__67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d(
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
        ),
        __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f)
      )
        return __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f;
      if (
        __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede &&
        !__23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd
      )
        return __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede;
      const __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2 =
        __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0;
      let __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5 = "";
      try {
        __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5 =
          localStorage.getItem(
            __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579,
          ) || "";
      } catch {}
      const __37c128880588460342b5be1dfd5b157c42bb28e5b510992c66566aee844f1b65 = [
        ...new Set([
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
          __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5,
          ...__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
        ]),
      ].filter(
        (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede) =>
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.includes(
            __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
          ) &&
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede !==
            __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd,
      );
      (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.includes(
        __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd,
      ) &&
        __37c128880588460342b5be1dfd5b157c42bb28e5b510992c66566aee844f1b65.push(
          __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd,
        ),
        (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f = (async () => {
          for (const __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 of __37c128880588460342b5be1dfd5b157c42bb28e5b510992c66566aee844f1b65) {
            const __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f =
              await __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45(
                __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
              );
            if (
              __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2 !==
              __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0
            )
              return "";
            if (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f) {
              __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede =
                __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28;
              try {
                localStorage.setItem(
                  __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579,
                  __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
                );
              } catch {}
              return __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28;
            }
          }
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede = "";
          try {
            localStorage.removeItem(
              __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579,
            );
          } catch {}
          return "";
        })()));
      try {
        return await __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f;
      } finally {
        __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2 ===
          __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 &&
          (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f = null);
      }
    },
    probe: __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45,
  };
})();
