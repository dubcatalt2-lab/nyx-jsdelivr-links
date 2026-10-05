(() => {
  "use strict";
  window.NyxNativePlayer = Object.freeze({
    Player: class {
      constructor(t, e) {
        this.isNative = !0, this.options = e, this.controller = new AbortController, this.current = 0, 
        this.lastProgress = Date.now(), this.lastTime = 0, this.recoveries = 0, this.video = document.createElement("video"), 
        this.video.playsInline = !0, this.video.preload = "auto", this.video.style.cssText = "width:100%;height:100%;object-fit:contain", 
        this.node = document.getElementById(t), this.node.replaceChildren(this.video);
        const i = (t, i) => {
          this.controller.signal.aborted || e.events?.[t]?.({
            target: this,
            data: i
          });
        };
        this.video.addEventListener("playing", () => i("onStateChange", 1)), this.video.addEventListener("pause", () => i("onStateChange", 2)), 
        this.video.addEventListener("ended", () => i("onStateChange", 0)), this.video.addEventListener("waiting", () => this.setBuffering(!0)), 
        this.video.addEventListener("playing", () => {
          this.renewing = !1, this.setBuffering(!1);
        }), this.video.addEventListener("canplay", () => {
          this.renewing = !1, this.setBuffering(!1);
        }), this.video.addEventListener("seeking", () => {
          this.video.readyState < 3 && this.setBuffering(!0);
        }), this.video.addEventListener("stalled", () => {
          !this.video.paused && this.video.readyState < 3 && this.setBuffering(!0);
        }), this.video.addEventListener("emptied", () => {
          this.renewing && this.setBuffering(!0);
        }), this.video.addEventListener("pause", () => {
          this.renewing || this.setBuffering(!1);
        }), this.video.addEventListener("ended", () => this.setBuffering(!1)), this.video.addEventListener("error", () => i("onError", 900)), 
        this.video.addEventListener("loadedmetadata", () => i("onReady"), {
          once: !0
        }), this.watchdog = setInterval(() => this.checkProgress(), 2e3), this.video.addEventListener("timeupdate", () => {
          this.captionsEnabled && this.updateCaptions();
        }), this.video.addEventListener("seeked", () => {
          this.lastTime = this.video.currentTime, this.lastProgress = Date.now(), this.captionsEnabled && this.updateCaptions(!0);
        }), this.prepare().catch(t => this.fail(t.message));
      }
      setBuffering(t) {
        this.controller.signal.aborted || this.buffering === t || (this.buffering = t, this.options.events?.onBuffering?.({
          target: this,
          data: t
        }));
      }
      wait(t) {
        return new Promise((e, i) => {
          const s = this.controller.signal, a = () => {
            clearTimeout(o), i(new DOMException("Aborted", "AbortError"));
          }, o = setTimeout(() => {
            s.removeEventListener("abort", a), e();
          }, t);
          s.addEventListener("abort", a, {
            once: !0
          }), s.aborted && a();
        });
      }
      async json(t, e = {}) {
        const i = Date.now() + 6e4;
        for (let s = 0; ;s++) {
          this.controller.signal.throwIfAborted();
          const a = new AbortController, o = () => a.abort(), r = setTimeout(o, Math.max(1, Math.min(3e4, i - Date.now())));
          let n, h;
          this.controller.signal.addEventListener("abort", o, {
            once: !0
          }), this.controller.signal.aborted && o();
          try {
            n = await fetch(t, {
              ...e,
              credentials: "same-origin",
              signal: a.signal
            }), h = await n.json();
          } finally {
            clearTimeout(r), this.controller.signal.removeEventListener("abort", o);
          }
          if (n.ok) return h;
          if (!(429 === n.status && "busy" === h.code && s < 4 && Date.now() + 3e3 < i)) throw new Error(h.error || "Native playback unavailable.");
          await this.wait(3e3);
        }
      }
      async prepare() {
        const t = encodeURIComponent(this.options.videoId), e = await this.json(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxtube/native/formats/${t}`);
        if (this.qualities = (e.formats || []).map(t => Number(t.height)).filter(t => [ 360, 480, 720 ].includes(t)), 
        !this.qualities.length) throw new Error("No supported native stream.");
        this.quality = this.qualities.includes(this.options.quality) ? this.options.quality : Math.max(...this.qualities);
        let i = await this.json(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxtube/native/prepare/${t}/${this.quality}?mode=hls`, {
          method: "POST"
        });
        const s = Date.now() + 6e4;
        for (;"preparing" === i.state && Date.now() < s; ) await this.wait(1500), i = await this.json(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxtube/native/jobs/${t}/${this.quality}`);
        if ("ready" === i.state && "hls" === i.kind && /^\/api\/nyxtube\/native\/hls\/[a-f0-9]{32}\/master\.m3u8$/.test(i.url || "")) return this.loadHls(i.url);
        if ("ready" !== i.state || !new RegExp(`^/api/nyxtube/native/media/${this.options.videoId}-(360|480|720)\\.mp4$`).test(i.url || "")) throw new Error("The video could not be prepared.");
        this.video.src = i.url;
      }
      loadHls(t, e = this.options.startTime || 0) {
        this.hlsUrl = t, this.lastProgress = Date.now();
        const i = window.Hls;
        if (i?.isSupported()) {
          this.hls?.destroy();
          const s = {
            maxNumRetry: 2,
            retryDelayMs: 1e3,
            maxRetryDelayMs: 8e3,
            shouldRetry: (t, e, i, s, a) => a || 429 === s?.code && e < t.maxNumRetry
          }, a = {
            default: {
              maxTimeToFirstByteMs: 65e3,
              maxLoadTimeMs: 7e4,
              timeoutRetry: {
                ...s,
                maxNumRetry: 1
              },
              errorRetry: s
            }
          }, o = this.hls = new i({
            startPosition: e,
            maxBufferLength: 12,
            maxMaxBufferLength: 24,
            maxBufferSize: 8388608,
            backBufferLength: 12,
            fragLoadPolicy: a,
            manifestLoadPolicy: a,
            playlistLoadPolicy: a
          });
          o.on(i.Events.ERROR, (t, e) => {
            if (!this.controller.signal.aborted) if (e.fatal) {
              if (410 === e.response?.code && (!this.renewedAt || Date.now() - this.renewedAt > 6e4)) {
                this.renewedAt = Date.now();
                const t = this.video.currentTime, e = this.video.paused;
                return this.renewing = !0, this.setBuffering(!0), o.destroy(), this.hls = null, 
                void this.json(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxtube/native/prepare/${encodeURIComponent(this.options.videoId)}/${this.quality}?mode=hls`, {
                  method: "POST"
                }).then(i => {
                  if (!/^\/api\/nyxtube\/native\/hls\/[a-f0-9]{32}\/master\.m3u8$/.test(i.url || "")) throw new Error("The video session could not be renewed.");
                  this.loadHls(i.url, t), e || this.playVideo();
                }).catch(t => this.fail(t.message));
              }
              if (e.type === i.ErrorTypes.MEDIA_ERROR && this.recoveries++ < 1) return this.lastProgress = Date.now(), 
              void o.recoverMediaError();
              this.fail(e.type === i.ErrorTypes.NETWORK_ERROR ? "The video connection could not recover." : "This video could not be decoded.");
            } else e.details !== i.ErrorDetails?.BUFFER_STALLED_ERROR || this.video.paused || this.setBuffering(!0);
          }), o.loadSource(t), o.attachMedia(this.video);
        } else {
          if (!this.video.canPlayType("application/vnd.apple.mpegurl")) throw new Error("This browser does not support segmented video playback.");
          this.video.src = t;
        }
      }
      checkProgress() {
        if (this.controller.signal.aborted || this.failed) return;
        const t = this.video.currentTime;
        return !this.video.paused && Math.abs(t - this.lastTime) > .1 || this.video.ended || this.video.paused && this.video.readyState >= 2 && !this.renewing ? (this.lastTime = t, 
        void (this.lastProgress = Date.now())) : Date.now() - this.lastProgress < 9e4 ? void 0 : this.hls && this.recoveries++ < 1 ? (this.lastProgress = Date.now(), 
        this.hls.stopLoad(), this.hls.startLoad(t), void this.setBuffering(!0)) : void this.fail("Video loading stopped making progress. Try a lower quality or the embedded player.");
      }
      fail(t) {
        this.controller.signal.aborted || this.failed || (this.failed = !0, this.failure = t, 
        this.setBuffering(!1), clearInterval(this.watchdog), this.hls?.stopLoad(), this.options.events?.onError?.({
          target: this,
          data: 900
        }));
      }
      async setCaptions(t) {
        this.captionsEnabled = t, this.captionTrack && (this.captionTrack.mode = t ? "showing" : "disabled"), 
        t && await this.updateCaptions(!0);
      }
      async updateCaptions(t = !1) {
        const e = this.getCurrentTime();
        if (!(this.controller.signal.aborted || !this.captionsEnabled || this.captionLoading || !t && e >= this.captionStart && e < this.captionUntil)) {
          this.captionLoading = !0;
          try {
            const t = await this.json(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyxtube/captions/${encodeURIComponent(this.options.videoId)}?at=${Math.floor(e)}`);
            if (this.controller.signal.aborted) return;
            if (!t.available) throw new Error(t.message || "Captions are unavailable for this video.");
            this.captionTrack || (this.captionTrack = this.video.addTextTrack("captions", t.language || "Captions", t.languageCode || "")), 
            this.captionTrack.mode = "hidden";
            for (const e of Array.from(this.captionTrack.cues || [])) this.captionTrack.removeCue(e);
            for (const e of (t.segments || []).slice(0, 1e3)) {
              const t = Number(e.startSeconds), i = t + Number(e.durationSeconds);
              if (!Number.isFinite(t) || !Number.isFinite(i) || i <= t) continue;
              const s = String(e.text || "").slice(0, 500).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
              this.captionTrack.addCue(new VTTCue(t, i, s));
            }
            if (this.captionStart = Number(t.start) || 0, this.captionUntil = Number(t.until), 
            !Number.isFinite(this.captionUntil) || this.captionUntil <= e) throw new Error("The caption timing response was invalid.");
            this.captionTrack.mode = this.captionsEnabled ? "showing" : "disabled";
          } catch (i) {
            this.controller.signal.aborted || (this.captionsEnabled = !1, this.captionTrack && (this.captionTrack.mode = "disabled"), 
            this.options.events?.onCaptionError?.({
              target: this,
              message: i.message
            }));
          } finally {
            this.captionLoading = !1, this.captionsEnabled && !this.controller.signal.aborted && (this.getCurrentTime() < this.captionStart || this.getCurrentTime() >= this.captionUntil) && this.updateCaptions(!0);
          }
        }
      }
      playVideo() {
        this.video.play().catch(() => {
          this.controller.signal.aborted || this.options.events?.onStateChange?.({
            target: this,
            data: 2
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
        return Number.isFinite(this.video.duration) ? this.video.duration : this.options.expectedDuration || 0;
      }
      getAvailablePlaybackRates() {
        return [ .5, .75, 1, 1.25, 1.5, 2 ];
      }
      getPlaybackRate() {
        return this.video.playbackRate;
      }
      setPlaybackRate(t) {
        this.video.playbackRate = t;
      }
      getVolume() {
        return 100 * this.video.volume;
      }
      setVolume(t) {
        this.video.volume = Math.max(0, Math.min(1, t / 100));
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
      seekTo(t) {
        this.video.currentTime = Math.max(0, Math.min(this.getDuration(), t));
      }
      destroy() {
        clearInterval(this.watchdog), this.captionsEnabled = !1, this.controller.abort(), 
        this.hls?.destroy(), this.video.pause(), this.video.removeAttribute("src"), this.video.load(), 
        this.node.replaceChildren();
      }
    },
    PlayerState: {
      ENDED: 0,
      PLAYING: 1,
      PAUSED: 2
    }
  });
})();
