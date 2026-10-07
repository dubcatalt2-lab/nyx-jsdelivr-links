(() => {
  "use strict";
  const _0xfb2f40_0 = Object.freeze({
    UNSTARTED: -1,
    ENDED: 0,
    PLAYING: 1,
    PAUSED: 2,
    BUFFERING: 3,
    CUED: 5
  });
  window.NyxTubePlayerCore = Object.freeze({
    PlayerState: _0xfb2f40_0,
    createDirectYoutubeApi: function({optimisticState: _0xfb2f40_1 = !0} = {}) {
      return Object.freeze({
        Player: class {
          constructor(_0xfb2f40_1, _0xfb2f40_2) {
            this.config = _0xfb2f40_2, this.container = document.getElementById(_0xfb2f40_1), 
            this.stage = this.container?.closest("\x2e\x77\x61\x74\x63\x68\x2d\x70\x6c\x61\x79\x65\x72\x2c\x2e\x73\x68\x6f\x72\x74\x2d\x63\x61\x72\x64") || null, this.state = _0xfb2f40_0.UNSTARTED, 
            this.currentTime = 0, this.total = Number(_0xfb2f40_2.expectedDuration) || 0, this.muted = Boolean(_0xfb2f40_2.playerVars?.mute), 
            this.volume = 100, this.playbackRate = 1, this.destroyed = !1, this.handleMessage = _0xfb2f40_0 => this.receive(_0xfb2f40_0), 
            this.iframe = document.createElement("\x69\x66\x72\x61\x6d\x65"), this.iframe.dataset.directYoutube = "\x74\x72\x75\x65", 
            this.iframe.title = "\x59\x6f\x75\x54\x75\x62\x65\x20\x76\x69\x64\x65\x6f\x20\x70\x6c\x61\x79\x65\x72", this.iframe.allow = "\x61\x75\x74\x6f\x70\x6c\x61\x79\x3b\x20\x65\x6e\x63\x72\x79\x70\x74\x65\x64\x2d\x6d\x65\x64\x69\x61\x3b\x20\x70\x69\x63\x74\x75\x72\x65\x2d\x69\x6e\x2d\x70\x69\x63\x74\x75\x72\x65\x3b\x20\x66\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e", 
            this.iframe.allowFullscreen = !0, this.iframe.referrerPolicy = "\x73\x74\x72\x69\x63\x74\x2d\x6f\x72\x69\x67\x69\x6e\x2d\x77\x68\x65\x6e\x2d\x63\x72\x6f\x73\x73\x2d\x6f\x72\x69\x67\x69\x6e";
            const _0xfb2f40_3 = new URLSearchParams({
              ...Object.fromEntries(Object.entries(_0xfb2f40_2.playerVars || {}).map(([_0xfb2f40_0, _0xfb2f40_1]) => [ _0xfb2f40_0, String(_0xfb2f40_1) ])),
              controls: String(_0xfb2f40_2.playerVars?.controls ?? 1),
              enablejsapi: "\x31",
              origin: location.origin,
              widget_referrer: location.href
            });
            this.iframe.src = `${_0xfb2f40_2.host || "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x79\x6f\x75\x74\x75\x62\x65\x2d\x6e\x6f\x63\x6f\x6f\x6b\x69\x65\x2e\x63\x6f\x6d"}\x2f\x65\x6d\x62\x65\x64\x2f${encodeURIComponent(_0xfb2f40_2.videoId)}\x3f${_0xfb2f40_3}`, 
            addEventListener("\x6d\x65\x73\x73\x61\x67\x65", this.handleMessage), this.iframe.addEventListener("\x6c\x6f\x61\x64", () => {
              this.destroyed || (this.stage?.classList.add("\x64\x69\x72\x65\x63\x74\x2d\x70\x6c\x61\x79\x65\x72"), this.post({
                event: "\x6c\x69\x73\x74\x65\x6e\x69\x6e\x67",
                id: _0xfb2f40_1
              }), this.command("\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69\x73\x74\x65\x6e\x65\x72", [ "\x6f\x6e\x53\x74\x61\x74\x65\x43\x68\x61\x6e\x67\x65" ]), this.command("\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69\x73\x74\x65\x6e\x65\x72", [ "\x6f\x6e\x45\x72\x72\x6f\x72" ]), 
              _0xfb2f40_2.events?.onReady?.({
                target: this
              }));
            }, {
              once: !0
            }), this.container?.replaceChildren(this.iframe);
          }
          post(_0xfb2f40_0) {
            this.iframe?.contentWindow?.postMessage(JSON.stringify(_0xfb2f40_0), "\x2a");
          }
          command(_0xfb2f40_0, _0xfb2f40_1 = []) {
            this.post({
              event: "\x63\x6f\x6d\x6d\x61\x6e\x64",
              func: _0xfb2f40_0,
              args: _0xfb2f40_1
            });
          }
          emitState(_0xfb2f40_0) {
            Number.isFinite(_0xfb2f40_0) && this.state !== _0xfb2f40_0 && (this.state = _0xfb2f40_0, 
            this.config.events?.onStateChange?.({
              target: this,
              data: _0xfb2f40_0
            }));
          }
          receive(_0xfb2f40_0) {
            if (_0xfb2f40_0.source !== this.iframe?.contentWindow || !/^https:\/\/(?:www\.)?(?:youtube\.com|youtube-nocookie\.com)$/.test(_0xfb2f40_0.origin)) return;
            let _0xfb2f40_1 = _0xfb2f40_0.data;
            if ("\x73\x74\x72\x69\x6e\x67" == typeof _0xfb2f40_1) try {
              _0xfb2f40_1 = JSON.parse(_0xfb2f40_1);
            } catch {
              return;
            }
            _0xfb2f40_1 && "\x6f\x62\x6a\x65\x63\x74" == typeof _0xfb2f40_1 && ("\x6f\x6e\x53\x74\x61\x74\x65\x43\x68\x61\x6e\x67\x65" === _0xfb2f40_1.event && this.emitState(Number(_0xfb2f40_1.info)), 
            "\x6f\x6e\x45\x72\x72\x6f\x72" === _0xfb2f40_1.event && this.config.events?.onError?.({
              target: this,
              data: _0xfb2f40_1.info
            }), "\x69\x6e\x66\x6f\x44\x65\x6c\x69\x76\x65\x72\x79" === _0xfb2f40_1.event && _0xfb2f40_1.info && "\x6f\x62\x6a\x65\x63\x74" == typeof _0xfb2f40_1.info && (Number.isFinite(Number(_0xfb2f40_1.info.currentTime)) && (this.currentTime = Number(_0xfb2f40_1.info.currentTime)), 
            Number.isFinite(Number(_0xfb2f40_1.info.duration)) && Number(_0xfb2f40_1.info.duration) > 0 && (this.total = Number(_0xfb2f40_1.info.duration)), 
            Number.isFinite(Number(_0xfb2f40_1.info.playerState)) && this.emitState(Number(_0xfb2f40_1.info.playerState)), 
            "\x62\x6f\x6f\x6c\x65\x61\x6e" == typeof _0xfb2f40_1.info.muted && (this.muted = _0xfb2f40_1.info.muted), 
            Number.isFinite(Number(_0xfb2f40_1.info.volume)) && (this.volume = Number(_0xfb2f40_1.info.volume)), 
            Number.isFinite(Number(_0xfb2f40_1.info.playbackRate)) && Number(_0xfb2f40_1.info.playbackRate) > 0 && (this.playbackRate = Number(_0xfb2f40_1.info.playbackRate))));
          }
          playVideo() {
            this.command("\x70\x6c\x61\x79\x56\x69\x64\x65\x6f"), _0xfb2f40_1 && this.emitState(_0xfb2f40_0.PLAYING);
          }
          pauseVideo() {
            this.command("\x70\x61\x75\x73\x65\x56\x69\x64\x65\x6f"), _0xfb2f40_1 && this.emitState(_0xfb2f40_0.PAUSED);
          }
          stopVideo() {
            this.command("\x73\x74\x6f\x70\x56\x69\x64\x65\x6f"), _0xfb2f40_1 && this.emitState(_0xfb2f40_0.PAUSED);
          }
          loadVideoById(_0xfb2f40_1) {
            this.currentTime = 0, this.total = 0, this.state = _0xfb2f40_0.UNSTARTED, this.command("\x6c\x6f\x61\x64\x56\x69\x64\x65\x6f\x42\x79\x49\x64", [ String(_0xfb2f40_1 || "") ]);
          }
          seekTo(_0xfb2f40_0) {
            this.currentTime = Math.max(0, Number(_0xfb2f40_0) || 0), this.command("\x73\x65\x65\x6b\x54\x6f", [ this.currentTime, !0 ]);
          }
          mute() {
            this.muted = !0, this.command("\x6d\x75\x74\x65");
          }
          unMute() {
            this.muted = !1, this.command("\x75\x6e\x4d\x75\x74\x65");
          }
          isMuted() {
            return this.muted;
          }
          setVolume(_0xfb2f40_0) {
            this.volume = Math.max(0, Math.min(100, Number(_0xfb2f40_0) || 0)), this.command("\x73\x65\x74\x56\x6f\x6c\x75\x6d\x65", [ this.volume ]);
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
          setPlaybackRate(_0xfb2f40_0) {
            this.playbackRate = Math.max(.25, Math.min(2, Number(_0xfb2f40_0) || 1)), this.command("\x73\x65\x74\x50\x6c\x61\x79\x62\x61\x63\x6b\x52\x61\x74\x65", [ this.playbackRate ]);
          }
          loadModule(_0xfb2f40_0) {
            this.command("\x6c\x6f\x61\x64\x4d\x6f\x64\x75\x6c\x65", [ _0xfb2f40_0 ]);
          }
          unloadModule(_0xfb2f40_0) {
            this.command("\x75\x6e\x6c\x6f\x61\x64\x4d\x6f\x64\x75\x6c\x65", [ _0xfb2f40_0 ]);
          }
          destroy() {
            this.destroyed = !0, removeEventListener("\x6d\x65\x73\x73\x61\x67\x65", this.handleMessage), this.stage?.classList.remove("\x64\x69\x72\x65\x63\x74\x2d\x70\x6c\x61\x79\x65\x72"), 
            this.iframe?.remove();
          }
        },
        PlayerState: _0xfb2f40_0
      });
    }
  });
})();
