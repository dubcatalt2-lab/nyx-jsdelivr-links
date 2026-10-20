(() => {
  "use strict";
  window.NyxNativePlayer = Object.freeze({
    Player: class {
      constructor(
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
      ) {
        ((this.isNative = !0),
          (this.options = __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53),
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
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
          )),
          this.node.replaceChildren(this.video));
        const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = (
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
        ) => {
          this.controller.signal.aborted ||
            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.events?.[
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f
            ]?.({
              target: this,
              data: __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
            });
        };
        (this.video.addEventListener("\u0070\u006c\u0061\u0079\u0069\u006e\u0067", () =>
          __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708("\u006f\u006e\u0053\u0074\u0061\u0074\u0065\u0043\u0068\u0061\u006e\u0067\u0065", 1),
        ),
          this.video.addEventListener("\u0070\u0061\u0075\u0073\u0065", () =>
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708("\u006f\u006e\u0053\u0074\u0061\u0074\u0065\u0043\u0068\u0061\u006e\u0067\u0065", 2),
          ),
          this.video.addEventListener("\u0065\u006e\u0064\u0065\u0064", () =>
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708("\u006f\u006e\u0053\u0074\u0061\u0074\u0065\u0043\u0068\u0061\u006e\u0067\u0065", 0),
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
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708("\u006f\u006e\u0045\u0072\u0072\u006f\u0072", 900),
          ),
          this.video.addEventListener(
            "\u006c\u006f\u0061\u0064\u0065\u0064\u006d\u0065\u0074\u0061\u0064\u0061\u0074\u0061",
            () => __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708("\u006f\u006e\u0052\u0065\u0061\u0064\u0079"),
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
            (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
              this.fail(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.message),
          ));
      }
      setBuffering(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) {
        this.controller.signal.aborted ||
          this.buffering === __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f ||
          ((this.buffering = __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f),
          this.options.events?.onBuffering?.({
            target: this,
            data: __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
          }));
      }
      wait(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) {
        return new Promise(
          (
            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
          ) => {
            const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
                this.controller.signal,
              __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 = () => {
                (clearTimeout(__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766),
                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708(
                    new DOMException("\u0041\u0062\u006f\u0072\u0074\u0065\u0064", "\u0041\u0062\u006f\u0072\u0074\u0045\u0072\u0072\u006f\u0072"),
                  ));
              },
              __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 = setTimeout(
                () => {
                  (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.removeEventListener(
                    "\u0061\u0062\u006f\u0072\u0074",
                    __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
                  ),
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53());
                },
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
              );
            (__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.addEventListener(
              "\u0061\u0062\u006f\u0072\u0074",
              __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
              {
                once: !0,
              },
            ),
              __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.aborted &&
                __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477());
          },
        );
      }
      async json(
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = {},
      ) {
        const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = Date.now() + 6e4;
        for (
          let __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c = 0;
          ;
          __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c++
        ) {
          this.controller.signal.throwIfAborted();
          const __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 =
              new AbortController(),
            __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 = () =>
              __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.abort(),
            __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 = setTimeout(
              __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766,
              Math.max(
                1,
                Math.min(
                  3e4,
                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 - Date.now(),
                ),
              ),
            );
          let __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061,
            __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106;
          (this.controller.signal.addEventListener(
            "\u0061\u0062\u006f\u0072\u0074",
            __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766,
            {
              once: !0,
            },
          ),
            this.controller.signal.aborted &&
              __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766());
          try {
            ((__bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 = await fetch(
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
              {
                ...__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                credentials: "\u0073\u0061\u006d\u0065\u002d\u006f\u0072\u0069\u0067\u0069\u006e",
                signal: __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.signal,
              },
            )),
              (__78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 =
                await __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061.json()));
          } finally {
            (clearTimeout(__22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7),
              this.controller.signal.removeEventListener(
                "\u0061\u0062\u006f\u0072\u0074",
                __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766,
              ));
          }
          if (__bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061.ok)
            return __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106;
          if (
            !(
              429 === __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061.status &&
              "\u0062\u0075\u0073\u0079" === __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106.code &&
              __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c < 4 &&
              Date.now() + 3e3 < __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708
            )
          )
            throw new Error(
              __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106.error ||
                "\u004e\u0061\u0074\u0069\u0076\u0065\u0020\u0070\u006c\u0061\u0079\u0062\u0061\u0063\u006b\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u002e",
            );
          await this.wait(3e3);
        }
      }
      async prepare() {
        const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
            encodeURIComponent(this.options.videoId),
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = await this.json(
            `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxtube/native/formats/${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f}`,
          );
        if (
          ((this.qualities = (
            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.formats || []
          )
            .map((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
              Number(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.height),
            )
            .filter((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
              [360, 480, 720].includes(
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
              ),
            )),
          !this.qualities.length)
        )
          throw new Error("\u004e\u006f\u0020\u0073\u0075\u0070\u0070\u006f\u0072\u0074\u0065\u0064\u0020\u006e\u0061\u0074\u0069\u0076\u0065\u0020\u0073\u0074\u0072\u0065\u0061\u006d\u002e");
        this.quality = this.qualities.includes(this.options.quality)
          ? this.options.quality
          : Math.max(...this.qualities);
        let __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = await this.json(
          `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxtube/native/prepare/${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f}/${this.quality}?mode=hls`,
          {
            method: "\u0050\u004f\u0053\u0054",
          },
        );
        const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c = Date.now() + 6e4;
        for (
          ;
          "\u0070\u0072\u0065\u0070\u0061\u0072\u0069\u006e\u0067" ===
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.state &&
          Date.now() < __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c;

        )
          (await this.wait(1500),
            (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = await this.json(
              `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxtube/native/jobs/${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f}/${this.quality}`,
            )));
        if (
          "\u0072\u0065\u0061\u0064\u0079" === __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.state &&
          "\u0068\u006c\u0073" === __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.kind &&
          /^\/api\/nyxtube\/native\/hls\/[a-f0-9]{32}\/master\.m3u8$/.test(
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.url || "",
          )
        )
          return this.loadHls(
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.url,
          );
        if (
          "\u0072\u0065\u0061\u0064\u0079" !== __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.state ||
          !new RegExp(
            `^/api/nyxtube/native/media/${this.options.videoId}-(360|480|720)\\.mp4$`,
          ).test(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.url || "")
        )
          throw new Error("\u0054\u0068\u0065\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0070\u0072\u0065\u0070\u0061\u0072\u0065\u0064\u002e");
        this.video.src = __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.url;
      }
      loadHls(
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = this.options
          .startTime || 0,
      ) {
        ((this.hlsUrl = __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f),
          (this.lastProgress = Date.now()));
        const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = window.Hls;
        if (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708?.isSupported()) {
          this.hls?.destroy();
          const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c = {
              maxNumRetry: 2,
              retryDelayMs: 1e3,
              maxRetryDelayMs: 8e3,
              shouldRetry: (
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
                __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
                __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
              ) =>
                __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 ||
                (429 === __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c?.code &&
                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 <
                    __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.maxNumRetry),
            },
            __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 = {
              default: {
                maxTimeToFirstByteMs: 65e3,
                maxLoadTimeMs: 7e4,
                timeoutRetry: {
                  ...__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
                  maxNumRetry: 1,
                },
                errorRetry: __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
              },
            },
            __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 = (this.hls =
              new __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708({
                startPosition: __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                maxBufferLength: 12,
                maxMaxBufferLength: 24,
                maxBufferSize: 8388608,
                backBufferLength: 12,
                fragLoadPolicy: __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
                manifestLoadPolicy:
                  __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
                playlistLoadPolicy:
                  __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
              }));
          (__f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.on(
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.Events.ERROR,
            (
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
            ) => {
              if (!this.controller.signal.aborted)
                if (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.fatal) {
                  if (
                    410 ===
                      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.response
                        ?.code &&
                    (!this.renewedAt || Date.now() - this.renewedAt > 6e4)
                  ) {
                    this.renewedAt = Date.now();
                    const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
                        this.video.currentTime,
                      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
                        this.video.paused;
                    return (
                      (this.renewing = !0),
                      this.setBuffering(!0),
                      __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.destroy(),
                      (this.hls = null),
                      void this.json(
                        `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxtube/native/prepare/${encodeURIComponent(this.options.videoId)}/${this.quality}?mode=hls`,
                        {
                          method: "\u0050\u004f\u0053\u0054",
                        },
                      )
                        .then(
                          (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708) => {
                            if (
                              !/^\/api\/nyxtube\/native\/hls\/[a-f0-9]{32}\/master\.m3u8$/.test(
                                __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.url ||
                                  "",
                              )
                            )
                              throw new Error("\u0054\u0068\u0065\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0073\u0065\u0073\u0073\u0069\u006f\u006e\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0072\u0065\u006e\u0065\u0077\u0065\u0064\u002e");
                            (this.loadHls(
                              __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.url,
                              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                            ),
                              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 ||
                                this.playVideo());
                          },
                        )
                        .catch(
                          (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
                            this.fail(
                              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.message,
                            ),
                        )
                    );
                  }
                  if (
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.type ===
                      __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.ErrorTypes
                        .MEDIA_ERROR &&
                    this.recoveries++ < 1
                  )
                    return (
                      (this.lastProgress = Date.now()),
                      void __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.recoverMediaError()
                    );
                  this.fail(
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.type ===
                      __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.ErrorTypes
                        .NETWORK_ERROR
                      ? "\u0054\u0068\u0065\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0063\u006f\u006e\u006e\u0065\u0063\u0074\u0069\u006f\u006e\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0072\u0065\u0063\u006f\u0076\u0065\u0072\u002e"
                      : "\u0054\u0068\u0069\u0073\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0064\u0065\u0063\u006f\u0064\u0065\u0064\u002e",
                  );
                } else
                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.details !==
                    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.ErrorDetails
                      ?.BUFFER_STALLED_ERROR ||
                    this.video.paused ||
                    this.setBuffering(!0);
            },
          ),
            __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.loadSource(
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
            ),
            __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766.attachMedia(
              this.video,
            ));
        } else {
          if (!this.video.canPlayType("\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u0076\u006e\u0064\u002e\u0061\u0070\u0070\u006c\u0065\u002e\u006d\u0070\u0065\u0067\u0075\u0072\u006c"))
            throw new Error("\u0054\u0068\u0069\u0073\u0020\u0062\u0072\u006f\u0077\u0073\u0065\u0072\u0020\u0064\u006f\u0065\u0073\u0020\u006e\u006f\u0074\u0020\u0073\u0075\u0070\u0070\u006f\u0072\u0074\u0020\u0073\u0065\u0067\u006d\u0065\u006e\u0074\u0065\u0064\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0070\u006c\u0061\u0079\u0062\u0061\u0063\u006b\u002e");
          this.video.src = __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f;
        }
      }
      checkProgress() {
        if (this.controller.signal.aborted || this.failed) return;
        const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
          this.video.currentTime;
        return (!this.video.paused &&
          Math.abs(
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f - this.lastTime,
          ) > 0.1) ||
          this.video.ended ||
          (this.video.paused && this.video.readyState >= 2 && !this.renewing)
          ? ((this.lastTime = __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f),
            void (this.lastProgress = Date.now()))
          : Date.now() - this.lastProgress < 9e4
            ? void 0
            : this.hls && this.recoveries++ < 1
              ? ((this.lastProgress = Date.now()),
                this.hls.stopLoad(),
                this.hls.startLoad(
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                ),
                void this.setBuffering(!0))
              : void this.fail(
                  "\u0056\u0069\u0064\u0065\u006f\u0020\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u0020\u0073\u0074\u006f\u0070\u0070\u0065\u0064\u0020\u006d\u0061\u006b\u0069\u006e\u0067\u0020\u0070\u0072\u006f\u0067\u0072\u0065\u0073\u0073\u002e\u0020\u0054\u0072\u0079\u0020\u0061\u0020\u006c\u006f\u0077\u0065\u0072\u0020\u0071\u0075\u0061\u006c\u0069\u0074\u0079\u0020\u006f\u0072\u0020\u0074\u0068\u0065\u0020\u0065\u006d\u0062\u0065\u0064\u0064\u0065\u0064\u0020\u0070\u006c\u0061\u0079\u0065\u0072\u002e",
                );
      }
      fail(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) {
        this.controller.signal.aborted ||
          this.failed ||
          ((this.failed = !0),
          (this.failure = __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f),
          this.setBuffering(!1),
          clearInterval(this.watchdog),
          this.hls?.stopLoad(),
          this.options.events?.onError?.({
            target: this,
            data: 900,
          }));
      }
      async setCaptions(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) {
        ((this.captionsEnabled =
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f),
          this.captionTrack &&
            (this.captionTrack.mode =
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f
                ? "\u0073\u0068\u006f\u0077\u0069\u006e\u0067"
                : "\u0064\u0069\u0073\u0061\u0062\u006c\u0065\u0064"),
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f &&
            (await this.updateCaptions(!0)));
      }
      async updateCaptions(
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f = !1,
      ) {
        const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
          this.getCurrentTime();
        if (
          !(
            this.controller.signal.aborted ||
            !this.captionsEnabled ||
            this.captionLoading ||
            (!__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f &&
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 >=
                this.captionStart &&
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 <
                this.captionUntil)
          )
        ) {
          this.captionLoading = !0;
          try {
            const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
              await this.json(
                `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxtube/captions/${encodeURIComponent(this.options.videoId)}?at=${Math.floor(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53)}`,
              );
            if (this.controller.signal.aborted) return;
            if (!__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.available)
              throw new Error(
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.message ||
                  "\u0043\u0061\u0070\u0074\u0069\u006f\u006e\u0073\u0020\u0061\u0072\u0065\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u0020\u0066\u006f\u0072\u0020\u0074\u0068\u0069\u0073\u0020\u0076\u0069\u0064\u0065\u006f\u002e",
              );
            (this.captionTrack ||
              (this.captionTrack = this.video.addTextTrack(
                "\u0063\u0061\u0070\u0074\u0069\u006f\u006e\u0073",
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.language ||
                  "\u0043\u0061\u0070\u0074\u0069\u006f\u006e\u0073",
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.languageCode ||
                  "",
              )),
              (this.captionTrack.mode = "\u0068\u0069\u0064\u0064\u0065\u006e"));
            for (const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 of Array.from(
              this.captionTrack.cues || [],
            ))
              this.captionTrack.removeCue(
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
              );
            for (const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 of (
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.segments || []
            ).slice(0, 1e3)) {
              const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f = Number(
                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.startSeconds,
                ),
                __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 =
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f +
                  Number(
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.durationSeconds,
                  );
              if (
                !Number.isFinite(
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                ) ||
                !Number.isFinite(
                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
                ) ||
                __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 <=
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f
              )
                continue;
              const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c = String(
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.text || "",
              )
                .slice(0, 500)
                .replace(/&/g, "\u0026\u0061\u006d\u0070\u003b")
                .replace(/</g, "\u0026\u006c\u0074\u003b")
                .replace(/>/g, "\u0026\u0067\u0074\u003b");
              this.captionTrack.addCue(
                new VTTCue(
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
                  __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
                ),
              );
            }
            if (
              ((this.captionStart =
                Number(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.start) ||
                0),
              (this.captionUntil = Number(
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.until,
              )),
              !Number.isFinite(this.captionUntil) ||
                this.captionUntil <=
                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53)
            )
              throw new Error("\u0054\u0068\u0065\u0020\u0063\u0061\u0070\u0074\u0069\u006f\u006e\u0020\u0074\u0069\u006d\u0069\u006e\u0067\u0020\u0072\u0065\u0073\u0070\u006f\u006e\u0073\u0065\u0020\u0077\u0061\u0073\u0020\u0069\u006e\u0076\u0061\u006c\u0069\u0064\u002e");
            this.captionTrack.mode = this.captionsEnabled ? "\u0073\u0068\u006f\u0077\u0069\u006e\u0067" : "\u0064\u0069\u0073\u0061\u0062\u006c\u0065\u0064";
          } catch (__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708) {
            this.controller.signal.aborted ||
              ((this.captionsEnabled = !1),
              this.captionTrack && (this.captionTrack.mode = "\u0064\u0069\u0073\u0061\u0062\u006c\u0065\u0064"),
              this.options.events?.onCaptionError?.({
                target: this,
                message: __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.message,
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
      setPlaybackRate(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) {
        this.video.playbackRate =
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f;
      }
      getVolume() {
        return 100 * this.video.volume;
      }
      setVolume(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) {
        this.video.volume = Math.max(
          0,
          Math.min(1, __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f / 100),
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
      seekTo(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) {
        this.video.currentTime = Math.max(
          0,
          Math.min(
            this.getDuration(),
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
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
