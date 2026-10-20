(() => {
  "use strict";
  const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = Object.freeze({
    UNSTARTED: -1,
    ENDED: 0,
    PLAYING: 1,
    PAUSED: 2,
    BUFFERING: 3,
    CUED: 5,
  });
  window.NyxTubePlayerCore = Object.freeze({
    PlayerState: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    createDirectYoutubeApi: function ({
      optimisticState: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = !0,
    } = {}) {
      return Object.freeze({
        Player: class {
          constructor(
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
          ) {
            ((this.config = __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c),
              (this.container = document.getElementById(
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
              )),
              (this.stage = this.container?.closest("\u002e\u0077\u0061\u0074\u0063\u0068\u002d\u0070\u006c\u0061\u0079\u0065\u0072\u002c\u002e\u0073\u0068\u006f\u0072\u0074\u002d\u0063\u0061\u0072\u0064") || null),
              (this.state =
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.UNSTARTED),
              (this.currentTime = 0),
              (this.total =
                Number(
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.expectedDuration,
                ) || 0),
              (this.muted = Boolean(
                __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.playerVars?.mute,
              )),
              (this.volume = 100),
              (this.playbackRate = 1),
              (this.destroyed = !1),
              (this.handleMessage = (
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              ) =>
                this.receive(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96)),
              (this.iframe = document.createElement("\u0069\u0066\u0072\u0061\u006d\u0065")),
              (this.iframe.dataset.directYoutube = "\u0074\u0072\u0075\u0065"),
              (this.iframe.title = "\u0059\u006f\u0075\u0054\u0075\u0062\u0065\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0070\u006c\u0061\u0079\u0065\u0072"),
              (this.iframe.allow = "\u0061\u0075\u0074\u006f\u0070\u006c\u0061\u0079\u003b\u0020\u0065\u006e\u0063\u0072\u0079\u0070\u0074\u0065\u0064\u002d\u006d\u0065\u0064\u0069\u0061\u003b\u0020\u0070\u0069\u0063\u0074\u0075\u0072\u0065\u002d\u0069\u006e\u002d\u0070\u0069\u0063\u0074\u0075\u0072\u0065\u003b\u0020\u0066\u0075\u006c\u006c\u0073\u0063\u0072\u0065\u0065\u006e"),
              (this.iframe.allowFullscreen = !0),
              (this.iframe.referrerPolicy = "\u0073\u0074\u0072\u0069\u0063\u0074\u002d\u006f\u0072\u0069\u0067\u0069\u006e\u002d\u0077\u0068\u0065\u006e\u002d\u0063\u0072\u006f\u0073\u0073\u002d\u006f\u0072\u0069\u0067\u0069\u006e"));
            const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 =
              new URLSearchParams({
                ...Object.fromEntries(
                  Object.entries(
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.playerVars ||
                      {},
                  ).map(
                    ([
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                    ]) => [
                      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
                      String(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5),
                    ],
                  ),
                ),
                controls: String(
                  __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.playerVars
                    ?.controls ?? 1,
                ),
                enablejsapi: "\u0031",
                origin: location.origin,
                widget_referrer: location.href,
              });
            ((this.iframe.src = `${__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.host || "\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0077\u0077\u0077\u002e\u0079\u006f\u0075\u0074\u0075\u0062\u0065\u002d\u006e\u006f\u0063\u006f\u006f\u006b\u0069\u0065\u002e\u0063\u006f\u006d"}/embed/${encodeURIComponent(__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.videoId)}?${__32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03}`),
              addEventListener("\u006d\u0065\u0073\u0073\u0061\u0067\u0065", this.handleMessage),
              this.iframe.addEventListener(
                "\u006c\u006f\u0061\u0064",
                () => {
                  this.destroyed ||
                    (this.stage?.classList.add("\u0064\u0069\u0072\u0065\u0063\u0074\u002d\u0070\u006c\u0061\u0079\u0065\u0072"),
                    this.post({
                      event: "\u006c\u0069\u0073\u0074\u0065\u006e\u0069\u006e\u0067",
                      id: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                    }),
                    this.command("\u0061\u0064\u0064\u0045\u0076\u0065\u006e\u0074\u004c\u0069\u0073\u0074\u0065\u006e\u0065\u0072", ["\u006f\u006e\u0053\u0074\u0061\u0074\u0065\u0043\u0068\u0061\u006e\u0067\u0065"]),
                    this.command("\u0061\u0064\u0064\u0045\u0076\u0065\u006e\u0074\u004c\u0069\u0073\u0074\u0065\u006e\u0065\u0072", ["\u006f\u006e\u0045\u0072\u0072\u006f\u0072"]),
                    __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.events?.onReady?.(
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
          post(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
            this.iframe?.contentWindow?.postMessage(
              JSON.stringify(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
              "\u002a",
            );
          }
          command(
            __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = [],
          ) {
            this.post({
              event: "\u0063\u006f\u006d\u006d\u0061\u006e\u0064",
              func: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              args: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
            });
          }
          emitState(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
            Number.isFinite(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) &&
              this.state !== __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 &&
              ((this.state = __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96),
              this.config.events?.onStateChange?.({
                target: this,
                data: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
              }));
          }
          receive(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
            if (
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.source !==
                this.iframe?.contentWindow ||
              !/^https:\/\/(?:www\.)?(?:youtube\.com|youtube-nocookie\.com)$/.test(
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.origin,
              )
            )
              return;
            let __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.data;
            if (
              "\u0073\u0074\u0072\u0069\u006e\u0067" == typeof __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5
            )
              try {
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = JSON.parse(
                  __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
                );
              } catch {
                return;
              }
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
              "\u006f\u0062\u006a\u0065\u0063\u0074" ==
                typeof __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
              ("\u006f\u006e\u0053\u0074\u0061\u0074\u0065\u0043\u0068\u0061\u006e\u0067\u0065" ===
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.event &&
                this.emitState(
                  Number(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.info),
                ),
              "\u006f\u006e\u0045\u0072\u0072\u006f\u0072" ===
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.event &&
                this.config.events?.onError?.({
                  target: this,
                  data: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.info,
                }),
              "\u0069\u006e\u0066\u006f\u0044\u0065\u006c\u0069\u0076\u0065\u0072\u0079" ===
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.event &&
                __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.info &&
                "\u006f\u0062\u006a\u0065\u0063\u0074" ==
                  typeof __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.info &&
                (Number.isFinite(
                  Number(
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.info
                      .currentTime,
                  ),
                ) &&
                  (this.currentTime = Number(
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.info
                      .currentTime,
                  )),
                Number.isFinite(
                  Number(
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.info
                      .duration,
                  ),
                ) &&
                  Number(
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.info
                      .duration,
                  ) > 0 &&
                  (this.total = Number(
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.info
                      .duration,
                  )),
                Number.isFinite(
                  Number(
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.info
                      .playerState,
                  ),
                ) &&
                  this.emitState(
                    Number(
                      __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.info
                        .playerState,
                    ),
                  ),
                "\u0062\u006f\u006f\u006c\u0065\u0061\u006e" ==
                  typeof __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.info
                    .muted &&
                  (this.muted =
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.info.muted),
                Number.isFinite(
                  Number(
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.info.volume,
                  ),
                ) &&
                  (this.volume = Number(
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.info.volume,
                  )),
                Number.isFinite(
                  Number(
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.info
                      .playbackRate,
                  ),
                ) &&
                  Number(
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.info
                      .playbackRate,
                  ) > 0 &&
                  (this.playbackRate = Number(
                    __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.info
                      .playbackRate,
                  ))));
          }
          playVideo() {
            (this.command("\u0070\u006c\u0061\u0079\u0056\u0069\u0064\u0065\u006f"),
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
                this.emitState(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.PLAYING,
                ));
          }
          pauseVideo() {
            (this.command("\u0070\u0061\u0075\u0073\u0065\u0056\u0069\u0064\u0065\u006f"),
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
                this.emitState(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.PAUSED,
                ));
          }
          stopVideo() {
            (this.command("\u0073\u0074\u006f\u0070\u0056\u0069\u0064\u0065\u006f"),
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 &&
                this.emitState(
                  __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.PAUSED,
                ));
          }
          loadVideoById(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) {
            ((this.currentTime = 0),
              (this.total = 0),
              (this.state =
                __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.UNSTARTED),
              this.command("\u006c\u006f\u0061\u0064\u0056\u0069\u0064\u0065\u006f\u0042\u0079\u0049\u0064", [
                String(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 || ""),
              ]));
          }
          seekTo(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
            ((this.currentTime = Math.max(
              0,
              Number(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) || 0,
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
          setVolume(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
            ((this.volume = Math.max(
              0,
              Math.min(
                100,
                Number(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) || 0,
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
          setPlaybackRate(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
            ((this.playbackRate = Math.max(
              0.25,
              Math.min(
                2,
                Number(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) || 1,
              ),
            )),
              this.command("\u0073\u0065\u0074\u0050\u006c\u0061\u0079\u0062\u0061\u0063\u006b\u0052\u0061\u0074\u0065", [this.playbackRate]));
          }
          loadModule(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
            this.command("\u006c\u006f\u0061\u0064\u004d\u006f\u0064\u0075\u006c\u0065", [
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
            ]);
          }
          unloadModule(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
            this.command("\u0075\u006e\u006c\u006f\u0061\u0064\u004d\u006f\u0064\u0075\u006c\u0065", [
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
            ]);
          }
          destroy() {
            ((this.destroyed = !0),
              removeEventListener("\u006d\u0065\u0073\u0073\u0061\u0067\u0065", this.handleMessage),
              this.stage?.classList.remove("\u0064\u0069\u0072\u0065\u0063\u0074\u002d\u0070\u006c\u0061\u0079\u0065\u0072"),
              this.iframe?.remove());
          }
        },
        PlayerState: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      });
    },
  });
})();
