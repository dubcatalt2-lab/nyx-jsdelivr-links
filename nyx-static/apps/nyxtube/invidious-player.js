(() => {
  "use strict";
  window.NyxInvidiousPlayer = function (
    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    {
      id: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
      loop: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = !1,
      restore: __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = {},
      onLoading: __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = () => {},
      onFailure: __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a = () => {},
    },
  ) {
    const __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc =
      document.createElement("\u0076\u0069\u0064\u0065\u006f");
    ((__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.controls = !0),
      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.playsInline = !0),
      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.loop =
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c),
      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.preload = "\u0061\u0075\u0074\u006f"),
      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.style.cssText =
        "\u0077\u0069\u0064\u0074\u0068\u003a\u0031\u0030\u0030\u0025\u003b\u0068\u0065\u0069\u0067\u0068\u0074\u003a\u0031\u0030\u0030\u0025\u003b\u006f\u0062\u006a\u0065\u0063\u0074\u002d\u0066\u0069\u0074\u003a\u0063\u006f\u006e\u0074\u0061\u0069\u006e\u003b\u0062\u0061\u0063\u006b\u0067\u0072\u006f\u0075\u006e\u0064\u003a\u0023\u0030\u0062\u0030\u0063\u0030\u0066"),
      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.muted =
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.muted ??
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c),
      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.volume = Math.max(
        0,
        Math.min(
          1,
          (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.volume ?? 100) / 100,
        ),
      )));
    let __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 =
      __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.rate || 1;
    ((__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.defaultPlaybackRate =
      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2),
      (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.playbackRate =
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2),
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.replaceChildren(
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
      ));
    let __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 = !1,
      __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f = 0,
      __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 = null,
      __28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1 = 0,
      __32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 = 0,
      __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe =
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.time || 0,
      __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a =
        !0 === __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.paused,
      __94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d = !1,
      __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161 = !1;
    function __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34() {
      (clearTimeout(__32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6),
        (__32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 = 0));
    }
    function __d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21() {
      (__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34(),
        __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 ||
          __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a ||
          (__32ea501e962bffeb234b654e1d46776b2c68023e510307abe2c49afb9a086ab6 = setTimeout(
            () => __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c(),
            15e3,
          )));
    }
    function __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c() {
      if (
        !__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 &&
        !__94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d
      ) {
        if (
          (__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34(),
          (__8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe = Math.max(
            __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe,
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.currentTime || 0,
          )),
          (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 =
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.playbackRate),
          __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f >= 2)
        ) {
          const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = {
            time: __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe,
            paused: __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a,
            muted: __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.muted,
            volume: 100 * __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.volume,
            rate: __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2,
          };
          return (
            __51e241f4e1ab21052e5631abbf6ddcfbf931e3f1ce73d61a5a8454c170b94eba(),
            void __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
            )
          );
        }
        ((__94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d = !0),
          __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239?.abort(),
          __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
            __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe <= 0,
          ),
          (__28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1 = setTimeout(
            () => {
              ((__94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d = !1),
                __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f++,
                __fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797());
            },
            __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f ? 3e3 : 1e3,
          )));
      }
    }
    async function __fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797() {
      if (__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238) return;
      ((__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161 = !1),
        __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239?.abort());
      const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
          (__467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 =
            new AbortController()),
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = setTimeout(
          () => __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.abort(),
          12e3,
        );
      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
        __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe <= 0,
      );
      try {
        const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = await fetch(
            `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxtube/invidious-playback?id=${encodeURIComponent(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5)}${__16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f ? "\u0026\u0072\u0065\u0066\u0072\u0065\u0073\u0068\u003d\u0031" : ""}`,
            {
              cache: "\u006e\u006f\u002d\u0073\u0074\u006f\u0072\u0065",
              signal: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.signal,
            },
          ),
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
            await __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.json();
        if (!__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.ok)
          throw Error("\u0056\u0069\u0064\u0065\u006f\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065");
        const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = new URL(
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.url,
        );
        if (
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.id !==
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 ||
          "\u0076\u0069\u0064\u0065\u006f\u002f\u006d\u0070\u0034" !== __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.type ||
          "\u0068\u0074\u0074\u0070\u0073\u003a" !== __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.protocol
        )
          throw Error("\u0049\u006e\u0076\u0061\u006c\u0069\u0064\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0072\u0065\u0073\u0070\u006f\u006e\u0073\u0065");
        if (
          __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 ||
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 !==
            __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239
        )
          return;
        ((__8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161 = !0),
          (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.src =
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.href),
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.load(),
          __d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21());
      } catch {
        __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 ||
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 !==
            __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 ||
          __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c();
      } finally {
        clearTimeout(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c);
      }
    }
    function __51e241f4e1ab21052e5631abbf6ddcfbf931e3f1ce73d61a5a8454c170b94eba() {
      __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 ||
        ((__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 = !0),
        __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239?.abort(),
        clearTimeout(__28af712034e8a12b1681c622dad14582e4900bad3911588374a3e05dc9c4dce1),
        __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34(),
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.pause(),
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.removeAttribute("\u0073\u0072\u0063"),
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.load(),
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.remove());
    }
    return (
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.addEventListener(
        "\u006c\u006f\u0061\u0064\u0065\u0064\u006d\u0065\u0074\u0061\u0064\u0061\u0074\u0061",
        () => {
          ((__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.defaultPlaybackRate =
            __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2),
            (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.playbackRate =
              __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2),
            __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe > 0 &&
              (__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.currentTime =
                Math.min(
                  __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe,
                  Math.max(
                    0,
                    __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.duration -
                      0.1,
                  ),
                )),
            __1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a
              ? (__ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34(),
                __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(!1))
              : __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc
                  .play()
                  .catch((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
                    "\u004e\u006f\u0074\u0041\u006c\u006c\u006f\u0077\u0065\u0064\u0045\u0072\u0072\u006f\u0072" ===
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.name &&
                      ((__1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a = !0),
                      __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34(),
                      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(!1));
                  }));
        },
      ),
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.addEventListener(
        "\u0070\u006c\u0061\u0079\u0069\u006e\u0067",
        () => {
          ((__1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a = !1),
            __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34(),
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(!1));
        },
      ),
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.addEventListener(
        "\u0074\u0069\u006d\u0065\u0075\u0070\u0064\u0061\u0074\u0065",
        () => {
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.readyState >= 2 &&
            !__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.paused &&
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.currentTime !==
              __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe &&
            ((__8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe =
              __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.currentTime),
            __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34(),
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(!1));
        },
      ),
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.addEventListener(
        "\u0077\u0061\u0069\u0074\u0069\u006e\u0067",
        () => {
          __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161 &&
            !__94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d &&
            (__a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(
              __8c129a690c54759743dbe10199ff84dba78a71166b7578894a86397202e76fbe <= 0,
            ),
            __d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21());
        },
      ),
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.addEventListener(
        "\u0073\u0074\u0061\u006c\u006c\u0065\u0064",
        () => {
          __8731ad81e0dfc10f516c3d1c553a4e9d6846a8879d9e55508db0eb752e1c3161 &&
            !__94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d &&
            __d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21();
        },
      ),
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.addEventListener(
        "\u0070\u0061\u0075\u0073\u0065",
        () => {
          !__94fa1bf2d0b27d416773088da72486699918b1118bd830a4abe5dfe4358ca83d &&
            !__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.error &&
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.readyState >= 2 &&
            ((__1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a = !0),
            __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34(),
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713(!1));
        },
      ),
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.addEventListener(
        "\u0070\u006c\u0061\u0079",
        () => {
          ((__1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a = !1),
            __d77232581c49de4a7d46222b56ca22bbbd91b41ee7b42b30ecedaeb6a9056c21());
        },
      ),
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.addEventListener(
        "\u0065\u0072\u0072\u006f\u0072",
        __568349eb8790eee553ee6205ccfbc57fee4230eb58a0bc54dc6c9e27907d399c,
      ),
      __fb7ed6c6b39f0062edb2e559bb1821590015a5caed2f42844790f226efa72797(),
      {
        isInvidious: !0,
        video: __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
        destroy: __51e241f4e1ab21052e5631abbf6ddcfbf931e3f1ce73d61a5a8454c170b94eba,
        pauseVideo() {
          ((__1abed76559fe355e402d9a356611083f5485bd8bf6ebba9d4675a4f889308e7a = !0),
            __ada0928cb902732e90891a30afeb6b63bf5b7897133afdf8ebc801ce8c8cac34(),
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.pause());
        },
        getCurrentTime: () =>
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.currentTime,
        getVolume: () =>
          100 * __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.volume,
        getPlaybackRate: () =>
          __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.playbackRate,
        isMuted: () => __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.muted,
      }
    );
  };
})();
