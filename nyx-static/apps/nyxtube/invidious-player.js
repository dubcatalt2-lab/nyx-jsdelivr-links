(() => {
  "use strict";
  window.NyxInvidiousPlayer = function (
    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
    {
      id: __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
      loop: __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = !1,
      restore: __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c = {},
      onLoading: __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 = () => {},
      onFailure: __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 = () => {},
    },
  ) {
    const __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 =
      document.createElement("\u0076\u0069\u0064\u0065\u006f");
    ((__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.controls = !0),
      (__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.playsInline = !0),
      (__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.loop =
        __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708),
      (__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.preload = "\u0061\u0075\u0074\u006f"),
      (__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.style.cssText =
        "\u0077\u0069\u0064\u0074\u0068\u003a\u0031\u0030\u0030\u0025\u003b\u0068\u0065\u0069\u0067\u0068\u0074\u003a\u0031\u0030\u0030\u0025\u003b\u006f\u0062\u006a\u0065\u0063\u0074\u002d\u0066\u0069\u0074\u003a\u0063\u006f\u006e\u0074\u0061\u0069\u006e\u003b\u0062\u0061\u0063\u006b\u0067\u0072\u006f\u0075\u006e\u0064\u003a\u0023\u0030\u0062\u0030\u0063\u0030\u0066"),
      (__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.muted =
        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.muted ??
        __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708),
      (__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.volume = Math.max(
        0,
        Math.min(
          1,
          (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.volume ?? 100) / 100,
        ),
      )));
    let __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 =
      __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.rate || 1;
    ((__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.defaultPlaybackRate =
      __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061),
      (__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.playbackRate =
        __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061),
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.replaceChildren(
        __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7,
      ));
    let __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 = !1,
      __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e = 0,
      __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22 = null,
      __0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba = 0,
      __6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e = 0,
      __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265 =
        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.time || 0,
      __fcacda08e2d45e2c799c7376996c1a442e687015e3b968de16e67d8f572af52f =
        !0 === __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.paused,
      __b1f802c665f7bebd541821d1b764ada73ffb4fa83e79200016911a5f9dfb544c = !1,
      __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544 = !1;
    function __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d() {
      (clearTimeout(__6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e),
        (__6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e = 0));
    }
    function __2a7a4197494d8323fea0f175ba188cc62025fc3fcf0d33594407f5566e01d6cc() {
      (__da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d(),
        __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 ||
          __fcacda08e2d45e2c799c7376996c1a442e687015e3b968de16e67d8f572af52f ||
          (__6edcfb7eb4ac860e2c4448fe12cb9a4f406c55759b8f43b3c17bb02c3a1f3f6e = setTimeout(
            () => __3c22b3f87a34fd589b28089a6e1fe9407580da47a00ca8a13ab4e306192fb487(),
            15e3,
          )));
    }
    function __3c22b3f87a34fd589b28089a6e1fe9407580da47a00ca8a13ab4e306192fb487() {
      if (
        !__78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 &&
        !__b1f802c665f7bebd541821d1b764ada73ffb4fa83e79200016911a5f9dfb544c
      ) {
        if (
          (__da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d(),
          (__6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265 = Math.max(
            __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265,
            __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.currentTime || 0,
          )),
          (__bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 =
            __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.playbackRate),
          __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e >= 2)
        ) {
          const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f = {
            time: __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265,
            paused: __fcacda08e2d45e2c799c7376996c1a442e687015e3b968de16e67d8f572af52f,
            muted: __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.muted,
            volume: 100 * __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.volume,
            rate: __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061,
          };
          return (
            __f2e5429bdd2ce4cd74b00d064941e11cca8a1f7f3d979f1aa03955b7bbd1e125(),
            void __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766(
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
            )
          );
        }
        ((__b1f802c665f7bebd541821d1b764ada73ffb4fa83e79200016911a5f9dfb544c = !0),
          __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22?.abort(),
          __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477(
            __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265 <= 0,
          ),
          (__0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba = setTimeout(
            () => {
              ((__b1f802c665f7bebd541821d1b764ada73ffb4fa83e79200016911a5f9dfb544c = !1),
                __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e++,
                __34168c7d57200d99fd97b1ec555dbf09aa9a16d1cadcc54b0e6b2db76e926d02());
            },
            __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e ? 3e3 : 1e3,
          )));
      }
    }
    async function __34168c7d57200d99fd97b1ec555dbf09aa9a16d1cadcc54b0e6b2db76e926d02() {
      if (__78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106) return;
      ((__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544 = !1),
        __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22?.abort());
      const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
          (__d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22 =
            new AbortController()),
        __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = setTimeout(
          () => __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.abort(),
          12e3,
        );
      __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477(
        __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265 <= 0,
      );
      try {
        const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = await fetch(
            `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxtube/invidious-playback?id=${encodeURIComponent(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53)}${__195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e ? "\u0026\u0072\u0065\u0066\u0072\u0065\u0073\u0068\u003d\u0031" : ""}`,
            {
              cache: "\u006e\u006f\u002d\u0073\u0074\u006f\u0072\u0065",
              signal: __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.signal,
            },
          ),
          __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
            await __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.json();
        if (!__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.ok)
          throw Error("\u0056\u0069\u0064\u0065\u006f\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065");
        const __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 = new URL(
          __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.url,
        );
        if (
          __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.id !==
            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 ||
          "\u0076\u0069\u0064\u0065\u006f\u002f\u006d\u0070\u0034" !== __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.type ||
          "\u0068\u0074\u0074\u0070\u0073\u003a" !== __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.protocol
        )
          throw Error("\u0049\u006e\u0076\u0061\u006c\u0069\u0064\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0072\u0065\u0073\u0070\u006f\u006e\u0073\u0065");
        if (
          __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 ||
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f !==
            __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22
        )
          return;
        ((__1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544 = !0),
          (__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.src =
            __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.href),
          __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.load(),
          __2a7a4197494d8323fea0f175ba188cc62025fc3fcf0d33594407f5566e01d6cc());
      } catch {
        __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 ||
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f !==
            __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22 ||
          __3c22b3f87a34fd589b28089a6e1fe9407580da47a00ca8a13ab4e306192fb487();
      } finally {
        clearTimeout(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708);
      }
    }
    function __f2e5429bdd2ce4cd74b00d064941e11cca8a1f7f3d979f1aa03955b7bbd1e125() {
      __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 ||
        ((__78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 = !0),
        __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22?.abort(),
        clearTimeout(__0b011ff138d5e94525c15908327ece3f2bcd6734cf742f10784003722f2551ba),
        __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d(),
        __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.pause(),
        __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.removeAttribute("\u0073\u0072\u0063"),
        __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.load(),
        __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.remove());
    }
    return (
      __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.addEventListener(
        "\u006c\u006f\u0061\u0064\u0065\u0064\u006d\u0065\u0074\u0061\u0064\u0061\u0074\u0061",
        () => {
          ((__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.defaultPlaybackRate =
            __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061),
            (__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.playbackRate =
              __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061),
            __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265 > 0 &&
              (__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.currentTime =
                Math.min(
                  __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265,
                  Math.max(
                    0,
                    __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.duration -
                      0.1,
                  ),
                )),
            __fcacda08e2d45e2c799c7376996c1a442e687015e3b968de16e67d8f572af52f
              ? (__da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d(),
                __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477(!1))
              : __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7
                  .play()
                  .catch((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => {
                    "\u004e\u006f\u0074\u0041\u006c\u006c\u006f\u0077\u0065\u0064\u0045\u0072\u0072\u006f\u0072" ===
                      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.name &&
                      ((__fcacda08e2d45e2c799c7376996c1a442e687015e3b968de16e67d8f572af52f = !0),
                      __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d(),
                      __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477(!1));
                  }));
        },
      ),
      __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.addEventListener(
        "\u0070\u006c\u0061\u0079\u0069\u006e\u0067",
        () => {
          ((__fcacda08e2d45e2c799c7376996c1a442e687015e3b968de16e67d8f572af52f = !1),
            __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d(),
            __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477(!1));
        },
      ),
      __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.addEventListener(
        "\u0074\u0069\u006d\u0065\u0075\u0070\u0064\u0061\u0074\u0065",
        () => {
          __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.readyState >= 2 &&
            !__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.paused &&
            __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.currentTime !==
              __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265 &&
            ((__6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265 =
              __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.currentTime),
            __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d(),
            __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477(!1));
        },
      ),
      __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.addEventListener(
        "\u0077\u0061\u0069\u0074\u0069\u006e\u0067",
        () => {
          __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544 &&
            !__b1f802c665f7bebd541821d1b764ada73ffb4fa83e79200016911a5f9dfb544c &&
            (__bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477(
              __6fb87b06a3ea75b83d46b38a99a227f281530a7440f9242d527ce13d84108265 <= 0,
            ),
            __2a7a4197494d8323fea0f175ba188cc62025fc3fcf0d33594407f5566e01d6cc());
        },
      ),
      __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.addEventListener(
        "\u0073\u0074\u0061\u006c\u006c\u0065\u0064",
        () => {
          __1aea4df1be7d10dcf15640e33530f74a85fdc91b6a6b20272c33474d39940544 &&
            !__b1f802c665f7bebd541821d1b764ada73ffb4fa83e79200016911a5f9dfb544c &&
            __2a7a4197494d8323fea0f175ba188cc62025fc3fcf0d33594407f5566e01d6cc();
        },
      ),
      __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.addEventListener(
        "\u0070\u0061\u0075\u0073\u0065",
        () => {
          !__b1f802c665f7bebd541821d1b764ada73ffb4fa83e79200016911a5f9dfb544c &&
            !__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.error &&
            __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.readyState >= 2 &&
            ((__fcacda08e2d45e2c799c7376996c1a442e687015e3b968de16e67d8f572af52f = !0),
            __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d(),
            __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477(!1));
        },
      ),
      __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.addEventListener(
        "\u0070\u006c\u0061\u0079",
        () => {
          ((__fcacda08e2d45e2c799c7376996c1a442e687015e3b968de16e67d8f572af52f = !1),
            __2a7a4197494d8323fea0f175ba188cc62025fc3fcf0d33594407f5566e01d6cc());
        },
      ),
      __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.addEventListener(
        "\u0065\u0072\u0072\u006f\u0072",
        __3c22b3f87a34fd589b28089a6e1fe9407580da47a00ca8a13ab4e306192fb487,
      ),
      __34168c7d57200d99fd97b1ec555dbf09aa9a16d1cadcc54b0e6b2db76e926d02(),
      {
        isInvidious: !0,
        video: __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7,
        destroy: __f2e5429bdd2ce4cd74b00d064941e11cca8a1f7f3d979f1aa03955b7bbd1e125,
        pauseVideo() {
          ((__fcacda08e2d45e2c799c7376996c1a442e687015e3b968de16e67d8f572af52f = !0),
            __da9d2ce610c276307ddba64662c3e4fa10dbb4a90c5e916492110fd4cf099c2d(),
            __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.pause());
        },
        getCurrentTime: () =>
          __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.currentTime,
        getVolume: () =>
          100 * __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.volume,
        getPlaybackRate: () =>
          __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.playbackRate,
        isMuted: () => __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.muted,
      }
    );
  };
})();
