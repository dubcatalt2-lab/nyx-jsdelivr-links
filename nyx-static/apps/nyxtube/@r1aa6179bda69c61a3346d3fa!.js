(() => {
  "use strict";
  const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f = Object.freeze({
    UNSTARTED: -1,
    ENDED: 0,
    PLAYING: 1,
    PAUSED: 2,
    BUFFERING: 3,
    CUED: 5,
  });
  window.NyxTubePlayerCore = Object.freeze({
    PlayerState: __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
    createDirectYoutubeApi: function ({
      optimisticState: __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = !0,
    } = {}) {
      return Object.freeze({
        Player: class {
          constructor(
            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
          ) {
            ((this.config = __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708),
              (this.container = document.getElementById(
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
              )),
              (this.stage = this.container?.closest("\u002e\u0077\u0061\u0074\u0063\u0068\u002d\u0070\u006c\u0061\u0079\u0065\u0072\u002c\u002e\u0073\u0068\u006f\u0072\u0074\u002d\u0063\u0061\u0072\u0064") || null),
              (this.state =
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.UNSTARTED),
              (this.currentTime = 0),
              (this.total =
                Number(
                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.expectedDuration,
                ) || 0),
              (this.muted = Boolean(
                __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.playerVars?.mute,
              )),
              (this.volume = 100),
              (this.playbackRate = 1),
              (this.destroyed = !1),
              (this.handleMessage = (
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
              ) =>
                this.receive(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f)),
              (this.iframe = document.createElement("\u0069\u0066\u0072\u0061\u006d\u0065")),
              (this.iframe.dataset.directYoutube = "\u0074\u0072\u0075\u0065"),
              (this.iframe.title = "\u0059\u006f\u0075\u0054\u0075\u0062\u0065\u0020\u0076\u0069\u0064\u0065\u006f\u0020\u0070\u006c\u0061\u0079\u0065\u0072"),
              (this.iframe.allow = "\u0061\u0075\u0074\u006f\u0070\u006c\u0061\u0079\u003b\u0020\u0065\u006e\u0063\u0072\u0079\u0070\u0074\u0065\u0064\u002d\u006d\u0065\u0064\u0069\u0061\u003b\u0020\u0070\u0069\u0063\u0074\u0075\u0072\u0065\u002d\u0069\u006e\u002d\u0070\u0069\u0063\u0074\u0075\u0072\u0065\u003b\u0020\u0066\u0075\u006c\u006c\u0073\u0063\u0072\u0065\u0065\u006e"),
              (this.iframe.allowFullscreen = !0),
              (this.iframe.referrerPolicy = "\u0073\u0074\u0072\u0069\u0063\u0074\u002d\u006f\u0072\u0069\u0067\u0069\u006e\u002d\u0077\u0068\u0065\u006e\u002d\u0063\u0072\u006f\u0073\u0073\u002d\u006f\u0072\u0069\u0067\u0069\u006e"));
            const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c =
              new URLSearchParams({
                ...Object.fromEntries(
                  Object.entries(
                    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.playerVars ||
                      {},
                  ).map(
                    ([
                      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                    ]) => [
                      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
                      String(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53),
                    ],
                  ),
                ),
                controls: String(
                  __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.playerVars
                    ?.controls ?? 1,
                ),
                enablejsapi: "\u0031",
                origin: location.origin,
                widget_referrer: location.href,
              });
            ((this.iframe.src = `${__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.host || "\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0077\u0077\u0077\u002e\u0079\u006f\u0075\u0074\u0075\u0062\u0065\u002d\u006e\u006f\u0063\u006f\u006f\u006b\u0069\u0065\u002e\u0063\u006f\u006d"}/embed/${encodeURIComponent(__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.videoId)}?${__fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c}`),
              addEventListener("\u006d\u0065\u0073\u0073\u0061\u0067\u0065", this.handleMessage),
              this.iframe.addEventListener(
                "\u006c\u006f\u0061\u0064",
                () => {
                  this.destroyed ||
                    (this.stage?.classList.add("\u0064\u0069\u0072\u0065\u0063\u0074\u002d\u0070\u006c\u0061\u0079\u0065\u0072"),
                    this.post({
                      event: "\u006c\u0069\u0073\u0074\u0065\u006e\u0069\u006e\u0067",
                      id: __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                    }),
                    this.command("\u0061\u0064\u0064\u0045\u0076\u0065\u006e\u0074\u004c\u0069\u0073\u0074\u0065\u006e\u0065\u0072", ["\u006f\u006e\u0053\u0074\u0061\u0074\u0065\u0043\u0068\u0061\u006e\u0067\u0065"]),
                    this.command("\u0061\u0064\u0064\u0045\u0076\u0065\u006e\u0074\u004c\u0069\u0073\u0074\u0065\u006e\u0065\u0072", ["\u006f\u006e\u0045\u0072\u0072\u006f\u0072"]),
                    __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.events?.onReady?.(
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
          post(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) {
            this.iframe?.contentWindow?.postMessage(
              JSON.stringify(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f),
              "\u002a",
            );
          }
          command(
            __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = [],
          ) {
            this.post({
              event: "\u0063\u006f\u006d\u006d\u0061\u006e\u0064",
              func: __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
              args: __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
            });
          }
          emitState(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) {
            Number.isFinite(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) &&
              this.state !== __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f &&
              ((this.state = __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f),
              this.config.events?.onStateChange?.({
                target: this,
                data: __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
              }));
          }
          receive(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) {
            if (
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.source !==
                this.iframe?.contentWindow ||
              !/^https:\/\/(?:www\.)?(?:youtube\.com|youtube-nocookie\.com)$/.test(
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.origin,
              )
            )
              return;
            let __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.data;
            if (
              "\u0073\u0074\u0072\u0069\u006e\u0067" == typeof __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53
            )
              try {
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = JSON.parse(
                  __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
                );
              } catch {
                return;
              }
            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 &&
              "\u006f\u0062\u006a\u0065\u0063\u0074" ==
                typeof __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 &&
              ("\u006f\u006e\u0053\u0074\u0061\u0074\u0065\u0043\u0068\u0061\u006e\u0067\u0065" ===
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.event &&
                this.emitState(
                  Number(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.info),
                ),
              "\u006f\u006e\u0045\u0072\u0072\u006f\u0072" ===
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.event &&
                this.config.events?.onError?.({
                  target: this,
                  data: __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.info,
                }),
              "\u0069\u006e\u0066\u006f\u0044\u0065\u006c\u0069\u0076\u0065\u0072\u0079" ===
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.event &&
                __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.info &&
                "\u006f\u0062\u006a\u0065\u0063\u0074" ==
                  typeof __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.info &&
                (Number.isFinite(
                  Number(
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.info
                      .currentTime,
                  ),
                ) &&
                  (this.currentTime = Number(
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.info
                      .currentTime,
                  )),
                Number.isFinite(
                  Number(
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.info
                      .duration,
                  ),
                ) &&
                  Number(
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.info
                      .duration,
                  ) > 0 &&
                  (this.total = Number(
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.info
                      .duration,
                  )),
                Number.isFinite(
                  Number(
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.info
                      .playerState,
                  ),
                ) &&
                  this.emitState(
                    Number(
                      __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.info
                        .playerState,
                    ),
                  ),
                "\u0062\u006f\u006f\u006c\u0065\u0061\u006e" ==
                  typeof __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.info
                    .muted &&
                  (this.muted =
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.info.muted),
                Number.isFinite(
                  Number(
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.info.volume,
                  ),
                ) &&
                  (this.volume = Number(
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.info.volume,
                  )),
                Number.isFinite(
                  Number(
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.info
                      .playbackRate,
                  ),
                ) &&
                  Number(
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.info
                      .playbackRate,
                  ) > 0 &&
                  (this.playbackRate = Number(
                    __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.info
                      .playbackRate,
                  ))));
          }
          playVideo() {
            (this.command("\u0070\u006c\u0061\u0079\u0056\u0069\u0064\u0065\u006f"),
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 &&
                this.emitState(
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.PLAYING,
                ));
          }
          pauseVideo() {
            (this.command("\u0070\u0061\u0075\u0073\u0065\u0056\u0069\u0064\u0065\u006f"),
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 &&
                this.emitState(
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.PAUSED,
                ));
          }
          stopVideo() {
            (this.command("\u0073\u0074\u006f\u0070\u0056\u0069\u0064\u0065\u006f"),
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 &&
                this.emitState(
                  __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.PAUSED,
                ));
          }
          loadVideoById(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) {
            ((this.currentTime = 0),
              (this.total = 0),
              (this.state =
                __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.UNSTARTED),
              this.command("\u006c\u006f\u0061\u0064\u0056\u0069\u0064\u0065\u006f\u0042\u0079\u0049\u0064", [
                String(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 || ""),
              ]));
          }
          seekTo(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) {
            ((this.currentTime = Math.max(
              0,
              Number(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) || 0,
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
          setVolume(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) {
            ((this.volume = Math.max(
              0,
              Math.min(
                100,
                Number(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) || 0,
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
          setPlaybackRate(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) {
            ((this.playbackRate = Math.max(
              0.25,
              Math.min(
                2,
                Number(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) || 1,
              ),
            )),
              this.command("\u0073\u0065\u0074\u0050\u006c\u0061\u0079\u0062\u0061\u0063\u006b\u0052\u0061\u0074\u0065", [this.playbackRate]));
          }
          loadModule(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) {
            this.command("\u006c\u006f\u0061\u0064\u004d\u006f\u0064\u0075\u006c\u0065", [
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
            ]);
          }
          unloadModule(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) {
            this.command("\u0075\u006e\u006c\u006f\u0061\u0064\u004d\u006f\u0064\u0075\u006c\u0065", [
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
            ]);
          }
          destroy() {
            ((this.destroyed = !0),
              removeEventListener("\u006d\u0065\u0073\u0073\u0061\u0067\u0065", this.handleMessage),
              this.stage?.classList.remove("\u0064\u0069\u0072\u0065\u0063\u0074\u002d\u0070\u006c\u0061\u0079\u0065\u0072"),
              this.iframe?.remove());
          }
        },
        PlayerState: __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
      });
    },
  });
})();
