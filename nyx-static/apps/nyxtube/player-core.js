(() => {
  "use strict";
  const e = Object.freeze({
    UNSTARTED: -1,
    ENDED: 0,
    PLAYING: 1,
    PAUSED: 2,
    BUFFERING: 3,
    CUED: 5
  });
  window.NyxTubePlayerCore = Object.freeze({
    PlayerState: e,
    createDirectYoutubeApi: function({optimisticState: t = !0} = {}) {
      return Object.freeze({
        Player: class {
          constructor(t, i) {
            this.config = i, this.container = document.getElementById(t), this.stage = this.container?.closest(".watch-player,.short-card") || null, 
            this.state = e.UNSTARTED, this.currentTime = 0, this.total = Number(i.expectedDuration) || 0, 
            this.muted = Boolean(i.playerVars?.mute), this.volume = 100, this.playbackRate = 1, 
            this.destroyed = !1, this.handleMessage = e => this.receive(e), this.iframe = document.createElement("iframe"), 
            this.iframe.dataset.directYoutube = "true", this.iframe.title = "YouTube video player", 
            this.iframe.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen", 
            this.iframe.allowFullscreen = !0, this.iframe.referrerPolicy = "strict-origin-when-cross-origin";
            const a = new URLSearchParams({
              ...Object.fromEntries(Object.entries(i.playerVars || {}).map(([e, t]) => [ e, String(t) ])),
              controls: String(i.playerVars?.controls ?? 1),
              enablejsapi: "1",
              origin: location.origin,
              widget_referrer: location.href
            });
            this.iframe.src = `${i.host || "https://www.youtube-nocookie.com"}/embed/${encodeURIComponent(i.videoId)}?${a}`, 
            addEventListener("message", this.handleMessage), this.iframe.addEventListener("load", () => {
              this.destroyed || (this.stage?.classList.add("direct-player"), this.post({
                event: "listening",
                id: t
              }), this.command("addEventListener", [ "onStateChange" ]), this.command("addEventListener", [ "onError" ]), 
              i.events?.onReady?.({
                target: this
              }));
            }, {
              once: !0
            }), this.container?.replaceChildren(this.iframe);
          }
          post(e) {
            this.iframe?.contentWindow?.postMessage(JSON.stringify(e), "*");
          }
          command(e, t = []) {
            this.post({
              event: "command",
              func: e,
              args: t
            });
          }
          emitState(e) {
            Number.isFinite(e) && this.state !== e && (this.state = e, this.config.events?.onStateChange?.({
              target: this,
              data: e
            }));
          }
          receive(e) {
            if (e.source !== this.iframe?.contentWindow || !/^https:\/\/(?:www\.)?(?:youtube\.com|youtube-nocookie\.com)$/.test(e.origin)) return;
            let t = e.data;
            if ("string" == typeof t) try {
              t = JSON.parse(t);
            } catch {
              return;
            }
            t && "object" == typeof t && ("onStateChange" === t.event && this.emitState(Number(t.info)), 
            "onError" === t.event && this.config.events?.onError?.({
              target: this,
              data: t.info
            }), "infoDelivery" === t.event && t.info && "object" == typeof t.info && (Number.isFinite(Number(t.info.currentTime)) && (this.currentTime = Number(t.info.currentTime)), 
            Number.isFinite(Number(t.info.duration)) && Number(t.info.duration) > 0 && (this.total = Number(t.info.duration)), 
            Number.isFinite(Number(t.info.playerState)) && this.emitState(Number(t.info.playerState)), 
            "boolean" == typeof t.info.muted && (this.muted = t.info.muted), Number.isFinite(Number(t.info.volume)) && (this.volume = Number(t.info.volume)), 
            Number.isFinite(Number(t.info.playbackRate)) && Number(t.info.playbackRate) > 0 && (this.playbackRate = Number(t.info.playbackRate))));
          }
          playVideo() {
            this.command("playVideo"), t && this.emitState(e.PLAYING);
          }
          pauseVideo() {
            this.command("pauseVideo"), t && this.emitState(e.PAUSED);
          }
          stopVideo() {
            this.command("stopVideo"), t && this.emitState(e.PAUSED);
          }
          loadVideoById(t) {
            this.currentTime = 0, this.total = 0, this.state = e.UNSTARTED, this.command("loadVideoById", [ String(t || "") ]);
          }
          seekTo(e) {
            this.currentTime = Math.max(0, Number(e) || 0), this.command("seekTo", [ this.currentTime, !0 ]);
          }
          mute() {
            this.muted = !0, this.command("mute");
          }
          unMute() {
            this.muted = !1, this.command("unMute");
          }
          isMuted() {
            return this.muted;
          }
          setVolume(e) {
            this.volume = Math.max(0, Math.min(100, Number(e) || 0)), this.command("setVolume", [ this.volume ]);
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
            return [ .25, .5, 1, 1.5, 2 ];
          }
          getPlaybackRate() {
            return this.playbackRate;
          }
          setPlaybackRate(e) {
            this.playbackRate = Math.max(.25, Math.min(2, Number(e) || 1)), this.command("setPlaybackRate", [ this.playbackRate ]);
          }
          loadModule(e) {
            this.command("loadModule", [ e ]);
          }
          unloadModule(e) {
            this.command("unloadModule", [ e ]);
          }
          destroy() {
            this.destroyed = !0, removeEventListener("message", this.handleMessage), this.stage?.classList.remove("direct-player"), 
            this.iframe?.remove();
          }
        },
        PlayerState: e
      });
    }
  });
})();
