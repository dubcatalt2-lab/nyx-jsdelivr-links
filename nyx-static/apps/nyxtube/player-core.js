(() => {
  "use strict";
  const __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 = Object.freeze({
    UNSTARTED: -1,
    ENDED: 0,
    PLAYING: 1,
    PAUSED: 2,
    BUFFERING: 3,
    CUED: 5,
  });
  window.NyxTubePlayerCore = Object.freeze({
    PlayerState: __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
    createDirectYoutubeApi: function ({
      optimisticState: __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede = !0,
    } = {}) {
      return Object.freeze({
        Player: class {
          constructor(
            __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
            __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
          ) {
            ((this.config = __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f),
              (this.container = document.getElementById(
                __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
              )),
              (this.stage = this.container?.closest("\u002e\u0077\u0061\u0074\u0063\u0068\u002d\u0070\u006c\u0061\u0079\u0065\u0072\u002c\u002e\u0073\u0068\u006f\u0072\u0074\u002d\u0063\u0061\u0072\u0064") || null),
              (this.state =
                __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.UNSTARTED),
              (this.currentTime = 0),
              (this.total =
                Number(
                  __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.expectedDuration,
                ) || 0),
              (this.muted = Boolean(
                __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.playerVars?.mute,
              )),
              (this.volume = 100),
              (this.playbackRate = 1),
              (this.destroyed = !1),
              (this.handleMessage = (
                __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
              ) =>
                this.receive(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28)),
              (this.iframe = document.createElement("\u0069\u0066\u0072\u0061\u006d\u0065")),
              (this.iframe.dataset.directYoutube = "\u0074\u0072\u0075\u0065"),
              (this.iframe.title = "\u0059\u006f\u0075\u0054\u0075\u0062\u0065\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0070\u006c\u0061\u0079\u0065\u0072"),
              (this.iframe.allow = "\u0061\u0075\u0074\u006f\u0070\u006c\u0061\u0079\u003b\u0020\u0065\u006e\u0063\u0072\u0079\u0070\u0074\u0065\u0064\u002d\u006d\u0065\u0064\u0069\u0061\u003b\u0020\u0070\u0069\u0063\u0074\u0075\u0072\u0065\u002d\u0069\u006e\u002d\u0070\u0069\u0063\u0074\u0075\u0072\u0065\u003b\u0020\u0066\u0075\u006c\u006c\u0073\u0063\u0072\u0065\u0065\u006e"),
              (this.iframe.allowFullscreen = !0),
              (this.iframe.referrerPolicy = "\u0073\u0074\u0072\u0069\u0063\u0074\u002d\u006f\u0072\u0069\u0067\u0069\u006e\u002d\u0077\u0068\u0065\u006e\u002d\u0063\u0072\u006f\u0073\u0073\u002d\u006f\u0072\u0069\u0067\u0069\u006e"));
            const __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 =
              new URLSearchParams({
                ...Object.fromEntries(
                  Object.entries(
                    __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.playerVars ||
                      {},
                  ).map(
                    ([
                      __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
                      __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
                    ]) => [
                      __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
                      String(__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede),
                    ],
                  ),
                ),
                controls: String(
                  __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.playerVars
                    ?.controls ?? 1,
                ),
                enablejsapi: "\u0031",
                origin: location.origin,
                widget_referrer: location.href,
              });
            ((this.iframe.src = `${__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.host || "\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0077\u0077\u0077\u002e\u0079\u006f\u0075\u0074\u0075\u0062\u0065\u002d\u006e\u006f\u0063\u006f\u006f\u006b\u0069\u0065\u002e\u0063\u006f\u006d"}/embed/${encodeURIComponent(__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.videoId)}?${__48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0}`),
              addEventListener("\u006d\u0065\u0073\u0073\u0061\u0067\u0065", this.handleMessage),
              this.iframe.addEventListener(
                "\u006c\u006f\u0061\u0064",
                () => {
                  this.destroyed ||
                    (this.stage?.classList.add("\u0064\u0069\u0072\u0065\u0063\u0074\u002d\u0070\u006c\u0061\u0079\u0065\u0072"),
                    this.post({
                      event: "\u006c\u0069\u0073\u0074\u0065\u006e\u0069\u006e\u0067",
                      id: __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
                    }),
                    this.command("\u0061\u0064\u0064\u0045\u0076\u0065\u006e\u0074\u004c\u0069\u0073\u0074\u0065\u006e\u0065\u0072", ["\u006f\u006e\u0053\u0074\u0061\u0074\u0065\u0043\u0068\u0061\u006e\u0067\u0065"]),
                    this.command("\u0061\u0064\u0064\u0045\u0076\u0065\u006e\u0074\u004c\u0069\u0073\u0074\u0065\u006e\u0065\u0072", ["\u006f\u006e\u0045\u0072\u0072\u006f\u0072"]),
                    __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.events?.onReady?.(
                      {
                        target: this,
                      },
                    ));
                },
                {
                  once: !0,
                },
              ),
              this.container?.replaceChildren(this.iframe));
          }
          post(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) {
            this.iframe?.contentWindow?.postMessage(
              JSON.stringify(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28),
              "\u002a",
            );
          }
          command(
            __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
            __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede = [],
          ) {
            this.post({
              event: "\u0063\u006f\u006d\u006d\u0061\u006e\u0064",
              func: __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
              args: __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
            });
          }
          emitState(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) {
            Number.isFinite(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) &&
              this.state !== __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 &&
              ((this.state = __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28),
              this.config.events?.onStateChange?.({
                target: this,
                data: __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
              }));
          }
          receive(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) {
            if (
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.source !==
                this.iframe?.contentWindow ||
              !/^https:\/\/(?:www\.)?(?:youtube\.com|youtube-nocookie\.com)$/.test(
                __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.origin,
              )
            )
              return;
            let __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede =
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.data;
            if (
              "\u0073\u0074\u0072\u0069\u006e\u0067" == typeof __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede
            )
              try {
                __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede = JSON.parse(
                  __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
                );
              } catch {
                return;
              }
            __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede &&
              "\u006f\u0062\u006a\u0065\u0063\u0074" ==
                typeof __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede &&
              ("\u006f\u006e\u0053\u0074\u0061\u0074\u0065\u0043\u0068\u0061\u006e\u0067\u0065" ===
                __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.event &&
                this.emitState(
                  Number(__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.info),
                ),
              "\u006f\u006e\u0045\u0072\u0072\u006f\u0072" ===
                __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.event &&
                this.config.events?.onError?.({
                  target: this,
                  data: __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.info,
                }),
              "\u0069\u006e\u0066\u006f\u0044\u0065\u006c\u0069\u0076\u0065\u0072\u0079" ===
                __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.event &&
                __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.info &&
                "\u006f\u0062\u006a\u0065\u0063\u0074" ==
                  typeof __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.info &&
                (Number.isFinite(
                  Number(
                    __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.info
                      .currentTime,
                  ),
                ) &&
                  (this.currentTime = Number(
                    __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.info
                      .currentTime,
                  )),
                Number.isFinite(
                  Number(
                    __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.info
                      .duration,
                  ),
                ) &&
                  Number(
                    __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.info
                      .duration,
                  ) > 0 &&
                  (this.total = Number(
                    __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.info
                      .duration,
                  )),
                Number.isFinite(
                  Number(
                    __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.info
                      .playerState,
                  ),
                ) &&
                  this.emitState(
                    Number(
                      __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.info
                        .playerState,
                    ),
                  ),
                "\u0062\u006f\u006f\u006c\u0065\u0061\u006e" ==
                  typeof __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.info
                    .muted &&
                  (this.muted =
                    __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.info.muted),
                Number.isFinite(
                  Number(
                    __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.info.volume,
                  ),
                ) &&
                  (this.volume = Number(
                    __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.info.volume,
                  )),
                Number.isFinite(
                  Number(
                    __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.info
                      .playbackRate,
                  ),
                ) &&
                  Number(
                    __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.info
                      .playbackRate,
                  ) > 0 &&
                  (this.playbackRate = Number(
                    __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.info
                      .playbackRate,
                  ))));
          }
          playVideo() {
            (this.command("\u0070\u006c\u0061\u0079\u0056\u0069\u0064\u0065\u006f"),
              __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede &&
                this.emitState(
                  __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.PLAYING,
                ));
          }
          pauseVideo() {
            (this.command("\u0070\u0061\u0075\u0073\u0065\u0056\u0069\u0064\u0065\u006f"),
              __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede &&
                this.emitState(
                  __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.PAUSED,
                ));
          }
          stopVideo() {
            (this.command("\u0073\u0074\u006f\u0070\u0056\u0069\u0064\u0065\u006f"),
              __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede &&
                this.emitState(
                  __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.PAUSED,
                ));
          }
          loadVideoById(__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede) {
            ((this.currentTime = 0),
              (this.total = 0),
              (this.state =
                __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.UNSTARTED),
              this.command("\u006c\u006f\u0061\u0064\u0056\u0069\u0064\u0065\u006f\u0042\u0079\u0049\u0064", [
                String(__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede || ""),
              ]));
          }
          seekTo(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) {
            ((this.currentTime = Math.max(
              0,
              Number(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) || 0,
            )),
              this.command("\u0073\u0065\u0065\u006b\u0054\u006f", [this.currentTime, !0]));
          }
          mute() {
            ((this.muted = !0), this.command("\u006d\u0075\u0074\u0065"));
          }
          unMute() {
            ((this.muted = !1), this.command("\u0075\u006e\u004d\u0075\u0074\u0065"));
          }
          isMuted() {
            return this.muted;
          }
          setVolume(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) {
            ((this.volume = Math.max(
              0,
              Math.min(
                100,
                Number(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) || 0,
              ),
            )),
              this.command("\u0073\u0065\u0074\u0056\u006f\u006c\u0075\u006d\u0065", [this.volume]));
          }
          getVolume() {
            return this.volume;
          }
          getPlayerState() {
            return this.state;
          }
          getCurrentTime() {
            return this.currentTime;
          }
          getDuration() {
            return this.total;
          }
          getAvailablePlaybackRates() {
            return [0.25, 0.5, 1, 1.5, 2];
          }
          getPlaybackRate() {
            return this.playbackRate;
          }
          setPlaybackRate(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) {
            ((this.playbackRate = Math.max(
              0.25,
              Math.min(
                2,
                Number(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) || 1,
              ),
            )),
              this.command("\u0073\u0065\u0074\u0050\u006c\u0061\u0079\u0062\u0061\u0063\u006b\u0052\u0061\u0074\u0065", [this.playbackRate]));
          }
          loadModule(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) {
            this.command("\u006c\u006f\u0061\u0064\u004d\u006f\u0064\u0075\u006c\u0065", [
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
            ]);
          }
          unloadModule(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) {
            this.command("\u0075\u006e\u006c\u006f\u0061\u0064\u004d\u006f\u0064\u0075\u006c\u0065", [
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
            ]);
          }
          destroy() {
            ((this.destroyed = !0),
              removeEventListener("\u006d\u0065\u0073\u0073\u0061\u0067\u0065", this.handleMessage),
              this.stage?.classList.remove("\u0064\u0069\u0072\u0065\u0063\u0074\u002d\u0070\u006c\u0061\u0079\u0065\u0072"),
              this.iframe?.remove());
          }
        },
        PlayerState: __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
      });
    },
  });
})();
