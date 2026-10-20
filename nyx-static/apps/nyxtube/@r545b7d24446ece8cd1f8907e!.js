(() => {
  "use strict";
  window.NyxNativePlayer = Object.freeze({
    Player: class {
      constructor(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
      ) {
        ((this.isNative = !0),
          (this.options = __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5),
          (this.controller = new AbortController()),
          (this.current = 0),
          (this.lastProgress = Date.now()),
          (this.lastTime = 0),
          (this.recoveries = 0),
          (this.video = document.createElement("\u0076\u0069\u0064\u0065\u006f")),
          (this.video.playsInline = !0),
          (this.video.preload = "\u0061\u0075\u0074\u006f"),
          (this.video.style.cssText = "\u0077\u0069\u0064\u0074\u0068\u003a\u0031\u0030\u0030\u0025\u003b\u0068\u0065\u0069\u0067\u0068\u0074\u003a\u0031\u0030\u0030\u0025\u003b\u006f\u0062\u006a\u0065\u0063\u0074\u002d\u0066\u0069\u0074\u003a\u0063\u006f\u006e\u0074\u0061\u0069\u006e"),
          (this.node = document.getElementById(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          )),
          this.node.replaceChildren(this.video));
        const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = (
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
        ) => {
          this.controller.signal.aborted ||
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.events?.[
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
            ]?.({
              target: this,
              data: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
            });
        };
        (this.video.addEventListener("\u0070\u006c\u0061\u0079\u0069\u006e\u0067", () =>
          __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c("\u006f\u006e\u0053\u0074\u0061\u0074\u0065\u0043\u0068\u0061\u006e\u0067\u0065", 1),
        ),
          this.video.addEventListener("\u0070\u0061\u0075\u0073\u0065", () =>
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c("\u006f\u006e\u0053\u0074\u0061\u0074\u0065\u0043\u0068\u0061\u006e\u0067\u0065", 2),
          ),
          this.video.addEventListener("\u0065\u006e\u0064\u0065\u0064", () =>
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c("\u006f\u006e\u0053\u0074\u0061\u0074\u0065\u0043\u0068\u0061\u006e\u0067\u0065", 0),
          ),
          this.video.addEventListener("\u0077\u0061\u0069\u0074\u0069\u006e\u0067", () => this.setBuffering(!0)),
          this.video.addEventListener("\u0070\u006c\u0061\u0079\u0069\u006e\u0067", () => {
            ((this.renewing = !1), this.setBuffering(!1));
          }),
          this.video.addEventListener("\u0063\u0061\u006e\u0070\u006c\u0061\u0079", () => {
            ((this.renewing = !1), this.setBuffering(!1));
          }),
          this.video.addEventListener("\u0073\u0065\u0065\u006b\u0069\u006e\u0067", () => {
            this.video.readyState < 3 && this.setBuffering(!0);
          }),
          this.video.addEventListener("\u0073\u0074\u0061\u006c\u006c\u0065\u0064", () => {
            !this.video.paused && this.video.readyState < 3 && this.setBuffering(!0);
          }),
          this.video.addEventListener("\u0065\u006d\u0070\u0074\u0069\u0065\u0064", () => {
            this.renewing && this.setBuffering(!0);
          }),
          this.video.addEventListener("\u0070\u0061\u0075\u0073\u0065", () => {
            this.renewing || this.setBuffering(!1);
          }),
          this.video.addEventListener("\u0065\u006e\u0064\u0065\u0064", () => this.setBuffering(!1)),
          this.video.addEventListener("\u0065\u0072\u0072\u006f\u0072", () =>
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c("\u006f\u006e\u0045\u0072\u0072\u006f\u0072", 900),
          ),
          this.video.addEventListener(
            "\u006c\u006f\u0061\u0064\u0065\u0064\u006d\u0065\u0074\u0061\u0064\u0061\u0074\u0061",
            () => __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c("\u006f\u006e\u0052\u0065\u0061\u0064\u0079"),
            {
              once: !0,
            },
          ),
          (this.watchdog = setInterval(() => this.checkProgress(), 2e3)),
          this.video.addEventListener("\u0074\u0069\u006d\u0065\u0075\u0070\u0064\u0061\u0074\u0065", () => {
            this.captionsEnabled && this.updateCaptions();
          }),
          this.video.addEventListener("\u0073\u0065\u0065\u006b\u0065\u0064", () => {
            ((this.lastTime = this.video.currentTime),
              (this.lastProgress = Date.now()),
              this.captionsEnabled && this.updateCaptions(!0));
          }),
          this.prepare().catch(
            (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
              this.fail(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.message),
          ));
      }
      setBuffering(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
        this.controller.signal.aborted ||
          this.buffering === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 ||
          ((this.buffering = __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
          this.options.events?.onBuffering?.({
            target: this,
            data: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          }));
      }
      wait(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
        return new Promise(
          (
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
          ) => {
            const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
                this.controller.signal,
              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = () => {
                (clearTimeout(__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a),
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c(
                    new DOMException("\u0041\u0062\u006f\u0072\u0074\u0065\u0064", "\u0041\u0062\u006f\u0072\u0074\u0045\u0072\u0072\u006f\u0072"),
                  ));
              },
              __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a = setTimeout(
                () => {
                  (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.removeEventListener(
                    "\u0061\u0062\u006f\u0072\u0074",
                    __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
                  ),
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5());
                },
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              );
            (__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.addEventListener(
              "\u0061\u0062\u006f\u0072\u0074",
              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
              {
                once: !0,
              },
            ),
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.aborted &&
                __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713());
          },
        );
      }
      async json(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = {},
      ) {
        const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = Date.now() + 6e4;
        for (
          let __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = 0;
          ;
          __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03++
        ) {
          this.controller.signal.throwIfAborted();
          const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
              new AbortController(),
            __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a = () =>
              __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.abort(),
            __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc = setTimeout(
              __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
              Math.max(
                1,
                Math.min(
                  3e4,
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c - Date.now(),
                ),
              ),
            );
          let __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2,
            __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238;
          (this.controller.signal.addEventListener(
            "\u0061\u0062\u006f\u0072\u0074",
            __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
            {
              once: !0,
            },
          ),
            this.controller.signal.aborted &&
              __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a());
          try {
            ((__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 = await fetch(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              {
                ...__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                credentials: "\u0073\u0061\u006d\u0065\u002d\u006f\u0072\u0069\u0067\u0069\u006e",
                signal: __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.signal,
              },
            )),
              (__9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 =
                await __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.json()));
          } finally {
            (clearTimeout(__158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc),
              this.controller.signal.removeEventListener(
                "\u0061\u0062\u006f\u0072\u0074",
                __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
              ));
          }
          if (__da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.ok)
            return __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238;
          if (
            !(
              429 === __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2.status &&
              "\u0062\u0075\u0073\u0079" === __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.code &&
              __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 < 4 &&
              Date.now() + 3e3 < __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c
            )
          )
            throw new Error(
              __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238.error ||
                "\u004e\u0061\u0074\u0069\u0076\u0065\u0020\u0070\u006c\u0061\u0079\u0062\u0061\u0063\u006b\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u002e",
            );
          await this.wait(3e3);
        }
      }
      async prepare() {
        const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
            encodeURIComponent(this.options.videoId),
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = await this.json(
            `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxtube/native/formats/${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96}`,
          );
        if (
          ((this.qualities = (
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.formats || []
          )
            .map((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
              Number(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.height),
            )
            .filter((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
              [360, 480, 720].includes(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              ),
            )),
          !this.qualities.length)
        )
          throw new Error("\u004e\u006f\u0020\u0073\u0075\u0070\u0070\u006f\u0072\u0074\u0065\u0064\u0020\u006e\u0061\u0074\u0069\u0076\u0065\u0020\u0073\u0074\u0072\u0065\u0061\u006d\u002e");
        this.quality = this.qualities.includes(this.options.quality)
          ? this.options.quality
          : Math.max(...this.qualities);
        let __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = await this.json(
          `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxtube/native/prepare/${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96}/${this.quality}?mode=hls`,
          {
            method: "\u0050\u004f\u0053\u0054",
          },
        );
        const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = Date.now() + 6e4;
        for (
          ;
          "\u0070\u0072\u0065\u0070\u0061\u0072\u0069\u006e\u0067" ===
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.state &&
          Date.now() < __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03;

        )
          (await this.wait(1500),
            (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = await this.json(
              `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxtube/native/jobs/${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96}/${this.quality}`,
            )));
        if (
          "\u0072\u0065\u0061\u0064\u0079" === __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.state &&
          "\u0068\u006c\u0073" === __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.kind &&
          /^\/api\/nyxtube\/native\/hls\/[a-f0-9]{32}\/master\.m3u8$/.test(
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.url || "",
          )
        )
          return this.loadHls(
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.url,
          );
        if (
          "\u0072\u0065\u0061\u0064\u0079" !== __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.state ||
          !new RegExp(
            `^/api/nyxtube/native/media/${this.options.videoId}-(360|480|720)\\.mp4$`,
          ).test(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.url || "")
        )
          throw new Error("\u0054\u0068\u0065\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0070\u0072\u0065\u0070\u0061\u0072\u0065\u0064\u002e");
        this.video.src = __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.url;
      }
      loadHls(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = this.options
          .startTime || 0,
      ) {
        ((this.hlsUrl = __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
          (this.lastProgress = Date.now()));
        const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = window.Hls;
        if (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c?.isSupported()) {
          this.hls?.destroy();
          const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = {
              maxNumRetry: 2,
              retryDelayMs: 1e3,
              maxRetryDelayMs: 8e3,
              shouldRetry: (
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
              ) =>
                __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 ||
                (429 === __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03?.code &&
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 <
                    __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.maxNumRetry),
            },
            __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = {
              default: {
                maxTimeToFirstByteMs: 65e3,
                maxLoadTimeMs: 7e4,
                timeoutRetry: {
                  ...__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                  maxNumRetry: 1,
                },
                errorRetry: __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
              },
            },
            __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a = (this.hls =
              new __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c({
                startPosition: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                maxBufferLength: 12,
                maxMaxBufferLength: 24,
                maxBufferSize: 8388608,
                backBufferLength: 12,
                fragLoadPolicy: __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
                manifestLoadPolicy:
                  __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
                playlistLoadPolicy:
                  __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
              }));
          (__13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.on(
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.Events.ERROR,
            (
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
            ) => {
              if (!this.controller.signal.aborted)
                if (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.fatal) {
                  if (
                    410 ===
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.response
                        ?.code &&
                    (!this.renewedAt || Date.now() - this.renewedAt > 6e4)
                  ) {
                    this.renewedAt = Date.now();
                    const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
                        this.video.currentTime,
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
                        this.video.paused;
                    return (
                      (this.renewing = !0),
                      this.setBuffering(!0),
                      __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.destroy(),
                      (this.hls = null),
                      void this.json(
                        `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxtube/native/prepare/${encodeURIComponent(this.options.videoId)}/${this.quality}?mode=hls`,
                        {
                          method: "\u0050\u004f\u0053\u0054",
                        },
                      )
                        .then(
                          (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c) => {
                            if (
                              !/^\/api\/nyxtube\/native\/hls\/[a-f0-9]{32}\/master\.m3u8$/.test(
                                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.url ||
                                  "",
                              )
                            )
                              throw new Error("\u0054\u0068\u0065\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0073\u0065\u0073\u0073\u0069\u006f\u006e\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0072\u0065\u006e\u0065\u0077\u0065\u0064\u002e");
                            (this.loadHls(
                              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.url,
                              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                            ),
                              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 ||
                                this.playVideo());
                          },
                        )
                        .catch(
                          (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
                            this.fail(
                              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.message,
                            ),
                        )
                    );
                  }
                  if (
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.type ===
                      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.ErrorTypes
                        .MEDIA_ERROR &&
                    this.recoveries++ < 1
                  )
                    return (
                      (this.lastProgress = Date.now()),
                      void __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.recoverMediaError()
                    );
                  this.fail(
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.type ===
                      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.ErrorTypes
                        .NETWORK_ERROR
                      ? "\u0054\u0068\u0065\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0063\u006f\u006e\u006e\u0065\u0063\u0074\u0069\u006f\u006e\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0072\u0065\u0063\u006f\u0076\u0065\u0072\u002e"
                      : "\u0054\u0068\u0069\u0073\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0064\u0065\u0063\u006f\u0064\u0065\u0064\u002e",
                  );
                } else
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.details !==
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.ErrorDetails
                      ?.BUFFER_STALLED_ERROR ||
                    this.video.paused ||
                    this.setBuffering(!0);
            },
          ),
            __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.loadSource(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
            ),
            __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a.attachMedia(
              this.video,
            ));
        } else {
          if (!this.video.canPlayType("\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u0076\u006e\u0064\u002e\u0061\u0070\u0070\u006c\u0065\u002e\u006d\u0070\u0065\u0067\u0075\u0072\u006c"))
            throw new Error("\u0054\u0068\u0069\u0073\u0020\u0062\u0072\u006f\u0077\u0073\u0065\u0072\u0020\u0064\u006f\u0065\u0073\u0020\u006e\u006f\u0074\u0020\u0073\u0075\u0070\u0070\u006f\u0072\u0074\u0020\u0073\u0065\u0067\u006d\u0065\u006e\u0074\u0065\u0064\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0070\u006c\u0061\u0079\u0062\u0061\u0063\u006b\u002e");
          this.video.src = __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96;
        }
      }
      checkProgress() {
        if (this.controller.signal.aborted || this.failed) return;
        const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
          this.video.currentTime;
        return (!this.video.paused &&
          Math.abs(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 - this.lastTime,
          ) > 0.1) ||
          this.video.ended ||
          (this.video.paused && this.video.readyState >= 2 && !this.renewing)
          ? ((this.lastTime = __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
            void (this.lastProgress = Date.now()))
          : Date.now() - this.lastProgress < 9e4
            ? void 0
            : this.hls && this.recoveries++ < 1
              ? ((this.lastProgress = Date.now()),
                this.hls.stopLoad(),
                this.hls.startLoad(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                ),
                void this.setBuffering(!0))
              : void this.fail(
                  "\u0056\u0069\u0064\u0065\u006f\u0020\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u0020\u0073\u0074\u006f\u0070\u0070\u0065\u0064\u0020\u006d\u0061\u006b\u0069\u006e\u0067\u0020\u0070\u0072\u006f\u0067\u0072\u0065\u0073\u0073\u002e\u0020\u0054\u0072\u0079\u0020\u0061\u0020\u006c\u006f\u0077\u0065\u0072\u0020\u0071\u0075\u0061\u006c\u0069\u0074\u0079\u0020\u006f\u0072\u0020\u0074\u0068\u0065\u0020\u0065\u006d\u0062\u0065\u0064\u0064\u0065\u0064\u0020\u0070\u006c\u0061\u0079\u0065\u0072\u002e",
                );
      }
      fail(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
        this.controller.signal.aborted ||
          this.failed ||
          ((this.failed = !0),
          (this.failure = __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
          this.setBuffering(!1),
          clearInterval(this.watchdog),
          this.hls?.stopLoad(),
          this.options.events?.onError?.({
            target: this,
            data: 900,
          }));
      }
      async setCaptions(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
        ((this.captionsEnabled =
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
          this.captionTrack &&
            (this.captionTrack.mode =
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
                ? "\u0073\u0068\u006f\u0077\u0069\u006e\u0067"
                : "\u0064\u0069\u0073\u0061\u0062\u006c\u0065\u0064"),
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
            (await this.updateCaptions(!0)));
      }
      async updateCaptions(
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = !1,
      ) {
        const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
          this.getCurrentTime();
        if (
          !(
            this.controller.signal.aborted ||
            !this.captionsEnabled ||
            this.captionLoading ||
            (!__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 >=
                this.captionStart &&
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 <
                this.captionUntil)
          )
        ) {
          this.captionLoading = !0;
          try {
            const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
              await this.json(
                `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxtube/captions/${encodeURIComponent(this.options.videoId)}?at=${Math.floor(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5)}`,
              );
            if (this.controller.signal.aborted) return;
            if (!__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.available)
              throw new Error(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.message ||
                  "\u0043\u0061\u0070\u0074\u0069\u006f\u006e\u0073\u0020\u0061\u0072\u0065\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u0020\u0066\u006f\u0072\u0020\u0074\u0068\u0069\u0073\u0020\u0076\u0069\u0064\u0065\u006f\u002e",
              );
            (this.captionTrack ||
              (this.captionTrack = this.video.addTextTrack(
                "\u0063\u0061\u0070\u0074\u0069\u006f\u006e\u0073",
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.language ||
                  "\u0043\u0061\u0070\u0074\u0069\u006f\u006e\u0073",
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.languageCode ||
                  "",
              )),
              (this.captionTrack.mode = "\u0068\u0069\u0064\u0064\u0065\u006e"));
            for (const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 of Array.from(
              this.captionTrack.cues || [],
            ))
              this.captionTrack.removeCue(
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
              );
            for (const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 of (
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.segments || []
            ).slice(0, 1e3)) {
              const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = Number(
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.startSeconds,
                ),
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c =
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 +
                  Number(
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.durationSeconds,
                  );
              if (
                !Number.isFinite(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                ) ||
                !Number.isFinite(
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                ) ||
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c <=
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
              )
                continue;
              const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = String(
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.text || "",
              )
                .slice(0, 500)
                .replace(/&/g, "\u0026\u0061\u006d\u0070\u003b")
                .replace(/</g, "\u0026\u006c\u0074\u003b")
                .replace(/>/g, "\u0026\u0067\u0074\u003b");
              this.captionTrack.addCue(
                new VTTCue(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
                  __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
                ),
              );
            }
            if (
              ((this.captionStart =
                Number(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.start) ||
                0),
              (this.captionUntil = Number(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.until,
              )),
              !Number.isFinite(this.captionUntil) ||
                this.captionUntil <=
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5)
            )
              throw new Error("\u0054\u0068\u0065\u0020\u0063\u0061\u0070\u0074\u0069\u006f\u006e\u0020\u0074\u0069\u006d\u0069\u006e\u0067\u0020\u0072\u0065\u0073\u0070\u006f\u006e\u0073\u0065\u0020\u0077\u0061\u0073\u0020\u0069\u006e\u0076\u0061\u006c\u0069\u0064\u002e");
            this.captionTrack.mode = this.captionsEnabled ? "\u0073\u0068\u006f\u0077\u0069\u006e\u0067" : "\u0064\u0069\u0073\u0061\u0062\u006c\u0065\u0064";
          } catch (__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c) {
            this.controller.signal.aborted ||
              ((this.captionsEnabled = !1),
              this.captionTrack && (this.captionTrack.mode = "\u0064\u0069\u0073\u0061\u0062\u006c\u0065\u0064"),
              this.options.events?.onCaptionError?.({
                target: this,
                message: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.message,
              }));
          } finally {
            ((this.captionLoading = !1),
              this.captionsEnabled &&
                !this.controller.signal.aborted &&
                (this.getCurrentTime() < this.captionStart ||
                  this.getCurrentTime() >= this.captionUntil) &&
                this.updateCaptions(!0));
          }
        }
      }
      playVideo() {
        this.video.play().catch(() => {
          this.controller.signal.aborted ||
            this.options.events?.onStateChange?.({
              target: this,
              data: 2,
            });
        });
      }
      pauseVideo() {
        this.video.pause();
      }
      getPlayerState() {
        return this.video.ended ? 0 : this.video.paused ? 2 : 1;
      }
      getCurrentTime() {
        return this.video.currentTime || 0;
      }
      getDuration() {
        return Number.isFinite(this.video.duration)
          ? this.video.duration
          : this.options.expectedDuration || 0;
      }
      getAvailablePlaybackRates() {
        return [0.5, 0.75, 1, 1.25, 1.5, 2];
      }
      getPlaybackRate() {
        return this.video.playbackRate;
      }
      setPlaybackRate(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
        this.video.playbackRate =
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96;
      }
      getVolume() {
        return 100 * this.video.volume;
      }
      setVolume(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
        this.video.volume = Math.max(
          0,
          Math.min(1, __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 / 100),
        );
      }
      mute() {
        this.video.muted = !0;
      }
      unMute() {
        this.video.muted = !1;
      }
      isMuted() {
        return this.video.muted;
      }
      seekTo(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
        this.video.currentTime = Math.max(
          0,
          Math.min(
            this.getDuration(),
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
          ),
        );
      }
      destroy() {
        (clearInterval(this.watchdog),
          (this.captionsEnabled = !1),
          this.controller.abort(),
          this.hls?.destroy(),
          this.video.pause(),
          this.video.removeAttribute("\u0073\u0072\u0063"),
          this.video.load(),
          this.node.replaceChildren());
      }
    },
    PlayerState: {
      ENDED: 0,
      PLAYING: 1,
      PAUSED: 2,
    },
  });
})();
