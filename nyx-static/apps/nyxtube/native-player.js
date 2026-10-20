(() => {
  "use strict";
  window.NyxNativePlayer = Object.freeze({
    Player: class {
      constructor(
        __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
        __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
      ) {
        ((this.isNative = !0),
          (this.options = __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede),
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
            __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
          )),
          this.node.replaceChildren(this.video));
        const __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f = (
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
          __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
        ) => {
          this.controller.signal.aborted ||
            __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.events?.[
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28
            ]?.({
              target: this,
              data: __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
            });
        };
        (this.video.addEventListener("\u0070\u006c\u0061\u0079\u0069\u006e\u0067", () =>
          __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f("\u006f\u006e\u0053\u0074\u0061\u0074\u0065\u0043\u0068\u0061\u006e\u0067\u0065", 1),
        ),
          this.video.addEventListener("\u0070\u0061\u0075\u0073\u0065", () =>
            __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f("\u006f\u006e\u0053\u0074\u0061\u0074\u0065\u0043\u0068\u0061\u006e\u0067\u0065", 2),
          ),
          this.video.addEventListener("\u0065\u006e\u0064\u0065\u0064", () =>
            __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f("\u006f\u006e\u0053\u0074\u0061\u0074\u0065\u0043\u0068\u0061\u006e\u0067\u0065", 0),
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
            __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f("\u006f\u006e\u0045\u0072\u0072\u006f\u0072", 900),
          ),
          this.video.addEventListener(
            "\u006c\u006f\u0061\u0064\u0065\u0064\u006d\u0065\u0074\u0061\u0064\u0061\u0074\u0061",
            () => __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f("\u006f\u006e\u0052\u0065\u0061\u0064\u0079"),
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
            (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) =>
              this.fail(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.message),
          ));
      }
      setBuffering(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) {
        this.controller.signal.aborted ||
          this.buffering === __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 ||
          ((this.buffering = __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28),
          this.options.events?.onBuffering?.({
            target: this,
            data: __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
          }));
      }
      wait(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) {
        return new Promise(
          (
            __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
            __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
          ) => {
            const __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 =
                this.controller.signal,
              __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 = () => {
                (clearTimeout(__dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45),
                  __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f(
                    new DOMException("\u0041\u0062\u006f\u0072\u0074\u0065\u0064", "\u0041\u0062\u006f\u0072\u0074\u0045\u0072\u0072\u006f\u0072"),
                  ));
              },
              __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45 = setTimeout(
                () => {
                  (__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.removeEventListener(
                    "\u0061\u0062\u006f\u0072\u0074",
                    __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579,
                  ),
                    __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede());
                },
                __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
              );
            (__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.addEventListener(
              "\u0061\u0062\u006f\u0072\u0074",
              __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579,
              {
                once: !0,
              },
            ),
              __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.aborted &&
                __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579());
          },
        );
      }
      async json(
        __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
        __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede = {},
      ) {
        const __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f = Date.now() + 6e4;
        for (
          let __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 = 0;
          ;
          __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0++
        ) {
          this.controller.signal.throwIfAborted();
          const __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 =
              new AbortController(),
            __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45 = () =>
              __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.abort(),
            __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d = setTimeout(
              __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45,
              Math.max(
                1,
                Math.min(
                  3e4,
                  __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f - Date.now(),
                ),
              ),
            );
          let __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd,
            __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2;
          (this.controller.signal.addEventListener(
            "\u0061\u0062\u006f\u0072\u0074",
            __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45,
            {
              once: !0,
            },
          ),
            this.controller.signal.aborted &&
              __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45());
          try {
            ((__23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd = await fetch(
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
              {
                ...__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
                credentials: "\u0073\u0061\u006d\u0065\u002d\u006f\u0072\u0069\u0067\u0069\u006e",
                signal: __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.signal,
              },
            )),
              (__7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2 =
                await __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd.json()));
          } finally {
            (clearTimeout(__67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d),
              this.controller.signal.removeEventListener(
                "\u0061\u0062\u006f\u0072\u0074",
                __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45,
              ));
          }
          if (__23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd.ok)
            return __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2;
          if (
            !(
              429 === __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd.status &&
              "\u0062\u0075\u0073\u0079" === __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2.code &&
              __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 < 4 &&
              Date.now() + 3e3 < __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f
            )
          )
            throw new Error(
              __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2.error ||
                "\u004e\u0061\u0074\u0069\u0076\u0065\u0020\u0070\u006c\u0061\u0079\u0062\u0061\u0063\u006b\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u002e",
            );
          await this.wait(3e3);
        }
      }
      async prepare() {
        const __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 =
            encodeURIComponent(this.options.videoId),
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede = await this.json(
            `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxtube/native/formats/${__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28}`,
          );
        if (
          ((this.qualities = (
            __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.formats || []
          )
            .map((__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) =>
              Number(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.height),
            )
            .filter((__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) =>
              [360, 480, 720].includes(
                __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
              ),
            )),
          !this.qualities.length)
        )
          throw new Error("\u004e\u006f\u0020\u0073\u0075\u0070\u0070\u006f\u0072\u0074\u0065\u0064\u0020\u006e\u0061\u0074\u0069\u0076\u0065\u0020\u0073\u0074\u0072\u0065\u0061\u006d\u002e");
        this.quality = this.qualities.includes(this.options.quality)
          ? this.options.quality
          : Math.max(...this.qualities);
        let __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f = await this.json(
          `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxtube/native/prepare/${__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28}/${this.quality}?mode=hls`,
          {
            method: "\u0050\u004f\u0053\u0054",
          },
        );
        const __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 = Date.now() + 6e4;
        for (
          ;
          "\u0070\u0072\u0065\u0070\u0061\u0072\u0069\u006e\u0067" ===
            __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.state &&
          Date.now() < __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0;

        )
          (await this.wait(1500),
            (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f = await this.json(
              `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxtube/native/jobs/${__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28}/${this.quality}`,
            )));
        if (
          "\u0072\u0065\u0061\u0064\u0079" === __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.state &&
          "\u0068\u006c\u0073" === __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.kind &&
          /^\/api\/nyxtube\/native\/hls\/[a-f0-9]{32}\/master\.m3u8$/.test(
            __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.url || "",
          )
        )
          return this.loadHls(
            __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.url,
          );
        if (
          "\u0072\u0065\u0061\u0064\u0079" !== __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.state ||
          !new RegExp(
            `^/api/nyxtube/native/media/${this.options.videoId}-(360|480|720)\\.mp4$`,
          ).test(__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.url || "")
        )
          throw new Error("\u0054\u0068\u0065\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0070\u0072\u0065\u0070\u0061\u0072\u0065\u0064\u002e");
        this.video.src = __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.url;
      }
      loadHls(
        __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
        __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede = this.options
          .startTime || 0,
      ) {
        ((this.hlsUrl = __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28),
          (this.lastProgress = Date.now()));
        const __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f = window.Hls;
        if (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f?.isSupported()) {
          this.hls?.destroy();
          const __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 = {
              maxNumRetry: 2,
              retryDelayMs: 1e3,
              maxRetryDelayMs: 8e3,
              shouldRetry: (
                __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
                __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
                __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
                __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0,
                __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579,
              ) =>
                __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 ||
                (429 === __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0?.code &&
                  __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede <
                    __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.maxNumRetry),
            },
            __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 = {
              default: {
                maxTimeToFirstByteMs: 65e3,
                maxLoadTimeMs: 7e4,
                timeoutRetry: {
                  ...__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0,
                  maxNumRetry: 1,
                },
                errorRetry: __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0,
              },
            },
            __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45 = (this.hls =
              new __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f({
                startPosition: __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
                maxBufferLength: 12,
                maxMaxBufferLength: 24,
                maxBufferSize: 8388608,
                backBufferLength: 12,
                fragLoadPolicy: __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579,
                manifestLoadPolicy:
                  __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579,
                playlistLoadPolicy:
                  __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579,
              }));
          (__dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.on(
            __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.Events.ERROR,
            (
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
              __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
            ) => {
              if (!this.controller.signal.aborted)
                if (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.fatal) {
                  if (
                    410 ===
                      __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.response
                        ?.code &&
                    (!this.renewedAt || Date.now() - this.renewedAt > 6e4)
                  ) {
                    this.renewedAt = Date.now();
                    const __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 =
                        this.video.currentTime,
                      __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede =
                        this.video.paused;
                    return (
                      (this.renewing = !0),
                      this.setBuffering(!0),
                      __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.destroy(),
                      (this.hls = null),
                      void this.json(
                        `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxtube/native/prepare/${encodeURIComponent(this.options.videoId)}/${this.quality}?mode=hls`,
                        {
                          method: "\u0050\u004f\u0053\u0054",
                        },
                      )
                        .then(
                          (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f) => {
                            if (
                              !/^\/api\/nyxtube\/native\/hls\/[a-f0-9]{32}\/master\.m3u8$/.test(
                                __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.url ||
                                  "",
                              )
                            )
                              throw new Error("\u0054\u0068\u0065\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0073\u0065\u0073\u0073\u0069\u006f\u006e\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0072\u0065\u006e\u0065\u0077\u0065\u0064\u002e");
                            (this.loadHls(
                              __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.url,
                              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
                            ),
                              __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede ||
                                this.playVideo());
                          },
                        )
                        .catch(
                          (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) =>
                            this.fail(
                              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.message,
                            ),
                        )
                    );
                  }
                  if (
                    __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.type ===
                      __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.ErrorTypes
                        .MEDIA_ERROR &&
                    this.recoveries++ < 1
                  )
                    return (
                      (this.lastProgress = Date.now()),
                      void __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.recoverMediaError()
                    );
                  this.fail(
                    __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.type ===
                      __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.ErrorTypes
                        .NETWORK_ERROR
                      ? "\u0054\u0068\u0065\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0063\u006f\u006e\u006e\u0065\u0063\u0074\u0069\u006f\u006e\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0072\u0065\u0063\u006f\u0076\u0065\u0072\u002e"
                      : "\u0054\u0068\u0069\u0073\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0063\u006f\u0075\u006c\u0064\u0020\u006e\u006f\u0074\u0020\u0062\u0065\u0020\u0064\u0065\u0063\u006f\u0064\u0065\u0064\u002e",
                  );
                } else
                  __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.details !==
                    __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.ErrorDetails
                      ?.BUFFER_STALLED_ERROR ||
                    this.video.paused ||
                    this.setBuffering(!0);
            },
          ),
            __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.loadSource(
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
            ),
            __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45.attachMedia(
              this.video,
            ));
        } else {
          if (!this.video.canPlayType("\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u0076\u006e\u0064\u002e\u0061\u0070\u0070\u006c\u0065\u002e\u006d\u0070\u0065\u0067\u0075\u0072\u006c"))
            throw new Error("\u0054\u0068\u0069\u0073\u0020\u0062\u0072\u006f\u0077\u0073\u0065\u0072\u0020\u0064\u006f\u0065\u0073\u0020\u006e\u006f\u0074\u0020\u0073\u0075\u0070\u0070\u006f\u0072\u0074\u0020\u0073\u0065\u0067\u006d\u0065\u006e\u0074\u0065\u0064\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0070\u006c\u0061\u0079\u0062\u0061\u0063\u006b\u002e");
          this.video.src = __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28;
        }
      }
      checkProgress() {
        if (this.controller.signal.aborted || this.failed) return;
        const __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 =
          this.video.currentTime;
        return (!this.video.paused &&
          Math.abs(
            __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 - this.lastTime,
          ) > 0.1) ||
          this.video.ended ||
          (this.video.paused && this.video.readyState >= 2 && !this.renewing)
          ? ((this.lastTime = __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28),
            void (this.lastProgress = Date.now()))
          : Date.now() - this.lastProgress < 9e4
            ? void 0
            : this.hls && this.recoveries++ < 1
              ? ((this.lastProgress = Date.now()),
                this.hls.stopLoad(),
                this.hls.startLoad(
                  __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
                ),
                void this.setBuffering(!0))
              : void this.fail(
                  "\u0056\u0069\u0064\u0065\u006f\u0020\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u0020\u0073\u0074\u006f\u0070\u0070\u0065\u0064\u0020\u006d\u0061\u006b\u0069\u006e\u0067\u0020\u0070\u0072\u006f\u0067\u0072\u0065\u0073\u0073\u002e\u0020\u0054\u0072\u0079\u0020\u0061\u0020\u006c\u006f\u0077\u0065\u0072\u0020\u0071\u0075\u0061\u006c\u0069\u0074\u0079\u0020\u006f\u0072\u0020\u0074\u0068\u0065\u0020\u0065\u006d\u0062\u0065\u0064\u0064\u0065\u0064\u0020\u0070\u006c\u0061\u0079\u0065\u0072\u002e",
                );
      }
      fail(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) {
        this.controller.signal.aborted ||
          this.failed ||
          ((this.failed = !0),
          (this.failure = __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28),
          this.setBuffering(!1),
          clearInterval(this.watchdog),
          this.hls?.stopLoad(),
          this.options.events?.onError?.({
            target: this,
            data: 900,
          }));
      }
      async setCaptions(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) {
        ((this.captionsEnabled =
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28),
          this.captionTrack &&
            (this.captionTrack.mode =
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28
                ? "\u0073\u0068\u006f\u0077\u0069\u006e\u0067"
                : "\u0064\u0069\u0073\u0061\u0062\u006c\u0065\u0064"),
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 &&
            (await this.updateCaptions(!0)));
      }
      async updateCaptions(
        __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 = !1,
      ) {
        const __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede =
          this.getCurrentTime();
        if (
          !(
            this.controller.signal.aborted ||
            !this.captionsEnabled ||
            this.captionLoading ||
            (!__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 &&
              __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede >=
                this.captionStart &&
              __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede <
                this.captionUntil)
          )
        ) {
          this.captionLoading = !0;
          try {
            const __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 =
              await this.json(
                `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxtube/captions/${encodeURIComponent(this.options.videoId)}?at=${Math.floor(__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede)}`,
              );
            if (this.controller.signal.aborted) return;
            if (!__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.available)
              throw new Error(
                __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.message ||
                  "\u0043\u0061\u0070\u0074\u0069\u006f\u006e\u0073\u0020\u0061\u0072\u0065\u0020\u0075\u006e\u0061\u0076\u0061\u0069\u006c\u0061\u0062\u006c\u0065\u0020\u0066\u006f\u0072\u0020\u0074\u0068\u0069\u0073\u0020\u0076\u0069\u0064\u0065\u006f\u002e",
              );
            (this.captionTrack ||
              (this.captionTrack = this.video.addTextTrack(
                "\u0063\u0061\u0070\u0074\u0069\u006f\u006e\u0073",
                __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.language ||
                  "\u0043\u0061\u0070\u0074\u0069\u006f\u006e\u0073",
                __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.languageCode ||
                  "",
              )),
              (this.captionTrack.mode = "\u0068\u0069\u0064\u0064\u0065\u006e"));
            for (const __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede of Array.from(
              this.captionTrack.cues || [],
            ))
              this.captionTrack.removeCue(
                __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
              );
            for (const __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede of (
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.segments || []
            ).slice(0, 1e3)) {
              const __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 = Number(
                  __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.startSeconds,
                ),
                __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f =
                  __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 +
                  Number(
                    __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.durationSeconds,
                  );
              if (
                !Number.isFinite(
                  __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
                ) ||
                !Number.isFinite(
                  __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
                ) ||
                __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f <=
                  __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28
              )
                continue;
              const __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 = String(
                __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.text || "",
              )
                .slice(0, 500)
                .replace(/&/g, "\u0026\u0061\u006d\u0070\u003b")
                .replace(/</g, "\u0026\u006c\u0074\u003b")
                .replace(/>/g, "\u0026\u0067\u0074\u003b");
              this.captionTrack.addCue(
                new VTTCue(
                  __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
                  __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
                  __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0,
                ),
              );
            }
            if (
              ((this.captionStart =
                Number(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.start) ||
                0),
              (this.captionUntil = Number(
                __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.until,
              )),
              !Number.isFinite(this.captionUntil) ||
                this.captionUntil <=
                  __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede)
            )
              throw new Error("\u0054\u0068\u0065\u0020\u0063\u0061\u0070\u0074\u0069\u006f\u006e\u0020\u0074\u0069\u006d\u0069\u006e\u0067\u0020\u0072\u0065\u0073\u0070\u006f\u006e\u0073\u0065\u0020\u0077\u0061\u0073\u0020\u0069\u006e\u0076\u0061\u006c\u0069\u0064\u002e");
            this.captionTrack.mode = this.captionsEnabled ? "\u0073\u0068\u006f\u0077\u0069\u006e\u0067" : "\u0064\u0069\u0073\u0061\u0062\u006c\u0065\u0064";
          } catch (__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f) {
            this.controller.signal.aborted ||
              ((this.captionsEnabled = !1),
              this.captionTrack && (this.captionTrack.mode = "\u0064\u0069\u0073\u0061\u0062\u006c\u0065\u0064"),
              this.options.events?.onCaptionError?.({
                target: this,
                message: __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.message,
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
      setPlaybackRate(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) {
        this.video.playbackRate =
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28;
      }
      getVolume() {
        return 100 * this.video.volume;
      }
      setVolume(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) {
        this.video.volume = Math.max(
          0,
          Math.min(1, __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 / 100),
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
      seekTo(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) {
        this.video.currentTime = Math.max(
          0,
          Math.min(
            this.getDuration(),
            __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
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
