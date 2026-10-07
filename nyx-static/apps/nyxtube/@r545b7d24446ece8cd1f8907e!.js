(() => {
  "use strict";
  window.NyxNativePlayer = Object.freeze({
    Player: class {
      constructor(_0xdb56b3_0, _0xdb56b3_1) {
        this.isNative = !0, this.options = _0xdb56b3_1, this.controller = new AbortController, 
        this.current = 0, this.lastProgress = Date.now(), this.lastTime = 0, this.recoveries = 0, 
        this.video = document.createElement("\x76\x69\x64\x65\x6f"), this.video.playsInline = !0, this.video.preload = "\x61\x75\x74\x6f", 
        this.video.style.cssText = "\x77\x69\x64\x74\x68\x3a\x31\x30\x30\x25\x3b\x68\x65\x69\x67\x68\x74\x3a\x31\x30\x30\x25\x3b\x6f\x62\x6a\x65\x63\x74\x2d\x66\x69\x74\x3a\x63\x6f\x6e\x74\x61\x69\x6e", this.node = document.getElementById(_0xdb56b3_0), 
        this.node.replaceChildren(this.video);
        const _0xdb56b3_2 = (_0xdb56b3_0, _0xdb56b3_2) => {
          this.controller.signal.aborted || _0xdb56b3_1.events?.[_0xdb56b3_0]?.({
            target: this,
            data: _0xdb56b3_2
          });
        };
        this.video.addEventListener("\x70\x6c\x61\x79\x69\x6e\x67", () => _0xdb56b3_2("\x6f\x6e\x53\x74\x61\x74\x65\x43\x68\x61\x6e\x67\x65", 1)), this.video.addEventListener("\x70\x61\x75\x73\x65", () => _0xdb56b3_2("\x6f\x6e\x53\x74\x61\x74\x65\x43\x68\x61\x6e\x67\x65", 2)), 
        this.video.addEventListener("\x65\x6e\x64\x65\x64", () => _0xdb56b3_2("\x6f\x6e\x53\x74\x61\x74\x65\x43\x68\x61\x6e\x67\x65", 0)), this.video.addEventListener("\x77\x61\x69\x74\x69\x6e\x67", () => this.setBuffering(!0)), 
        this.video.addEventListener("\x70\x6c\x61\x79\x69\x6e\x67", () => {
          this.renewing = !1, this.setBuffering(!1);
        }), this.video.addEventListener("\x63\x61\x6e\x70\x6c\x61\x79", () => {
          this.renewing = !1, this.setBuffering(!1);
        }), this.video.addEventListener("\x73\x65\x65\x6b\x69\x6e\x67", () => {
          this.video.readyState < 3 && this.setBuffering(!0);
        }), this.video.addEventListener("\x73\x74\x61\x6c\x6c\x65\x64", () => {
          !this.video.paused && this.video.readyState < 3 && this.setBuffering(!0);
        }), this.video.addEventListener("\x65\x6d\x70\x74\x69\x65\x64", () => {
          this.renewing && this.setBuffering(!0);
        }), this.video.addEventListener("\x70\x61\x75\x73\x65", () => {
          this.renewing || this.setBuffering(!1);
        }), this.video.addEventListener("\x65\x6e\x64\x65\x64", () => this.setBuffering(!1)), this.video.addEventListener("\x65\x72\x72\x6f\x72", () => _0xdb56b3_2("\x6f\x6e\x45\x72\x72\x6f\x72", 900)), 
        this.video.addEventListener("\x6c\x6f\x61\x64\x65\x64\x6d\x65\x74\x61\x64\x61\x74\x61", () => _0xdb56b3_2("\x6f\x6e\x52\x65\x61\x64\x79"), {
          once: !0
        }), this.watchdog = setInterval(() => this.checkProgress(), 2e3), this.video.addEventListener("\x74\x69\x6d\x65\x75\x70\x64\x61\x74\x65", () => {
          this.captionsEnabled && this.updateCaptions();
        }), this.video.addEventListener("\x73\x65\x65\x6b\x65\x64", () => {
          this.lastTime = this.video.currentTime, this.lastProgress = Date.now(), this.captionsEnabled && this.updateCaptions(!0);
        }), this.prepare().catch(_0xdb56b3_0 => this.fail(_0xdb56b3_0.message));
      }
      setBuffering(_0xdb56b3_0) {
        this.controller.signal.aborted || this.buffering === _0xdb56b3_0 || (this.buffering = _0xdb56b3_0, 
        this.options.events?.onBuffering?.({
          target: this,
          data: _0xdb56b3_0
        }));
      }
      wait(_0xdb56b3_0) {
        return new Promise((_0xdb56b3_1, _0xdb56b3_2) => {
          const _0xdb56b3_3 = this.controller.signal, _0xdb56b3_4 = () => {
            clearTimeout(_0xdb56b3_5), _0xdb56b3_2(new DOMException("\x41\x62\x6f\x72\x74\x65\x64", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72"));
          }, _0xdb56b3_5 = setTimeout(() => {
            _0xdb56b3_3.removeEventListener("\x61\x62\x6f\x72\x74", _0xdb56b3_4), _0xdb56b3_1();
          }, _0xdb56b3_0);
          _0xdb56b3_3.addEventListener("\x61\x62\x6f\x72\x74", _0xdb56b3_4, {
            once: !0
          }), _0xdb56b3_3.aborted && _0xdb56b3_4();
        });
      }
      async json(_0xdb56b3_0, _0xdb56b3_1 = {}) {
        const _0xdb56b3_2 = Date.now() + 6e4;
        for (let _0xdb56b3_3 = 0; ;_0xdb56b3_3++) {
          this.controller.signal.throwIfAborted();
          const _0xdb56b3_4 = new AbortController, _0xdb56b3_5 = () => _0xdb56b3_4.abort(), _0xdb56b3_6 = setTimeout(_0xdb56b3_5, Math.max(1, Math.min(3e4, _0xdb56b3_2 - Date.now())));
          let _0xdb56b3_7, _0xdb56b3_8;
          this.controller.signal.addEventListener("\x61\x62\x6f\x72\x74", _0xdb56b3_5, {
            once: !0
          }), this.controller.signal.aborted && _0xdb56b3_5();
          try {
            _0xdb56b3_7 = await fetch(_0xdb56b3_0, {
              ..._0xdb56b3_1,
              credentials: "\x73\x61\x6d\x65\x2d\x6f\x72\x69\x67\x69\x6e",
              signal: _0xdb56b3_4.signal
            }), _0xdb56b3_8 = await _0xdb56b3_7.json();
          } finally {
            clearTimeout(_0xdb56b3_6), this.controller.signal.removeEventListener("\x61\x62\x6f\x72\x74", _0xdb56b3_5);
          }
          if (_0xdb56b3_7.ok) return _0xdb56b3_8;
          if (!(429 === _0xdb56b3_7.status && "\x62\x75\x73\x79" === _0xdb56b3_8.code && _0xdb56b3_3 < 4 && Date.now() + 3e3 < _0xdb56b3_2)) throw new Error(_0xdb56b3_8.error || "\x4e\x61\x74\x69\x76\x65\x20\x70\x6c\x61\x79\x62\x61\x63\x6b\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x2e");
          await this.wait(3e3);
        }
      }
      async prepare() {
        const _0xdb56b3_0 = encodeURIComponent(this.options.videoId), _0xdb56b3_1 = await this.json(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6e\x79\x78\x74\x75\x62\x65\x2f\x6e\x61\x74\x69\x76\x65\x2f\x66\x6f\x72\x6d\x61\x74\x73\x2f${_0xdb56b3_0}`);
        if (this.qualities = (_0xdb56b3_1.formats || []).map(_0xdb56b3_0 => Number(_0xdb56b3_0.height)).filter(_0xdb56b3_0 => [ 360, 480, 720 ].includes(_0xdb56b3_0)), 
        !this.qualities.length) throw new Error("\x4e\x6f\x20\x73\x75\x70\x70\x6f\x72\x74\x65\x64\x20\x6e\x61\x74\x69\x76\x65\x20\x73\x74\x72\x65\x61\x6d\x2e");
        this.quality = this.qualities.includes(this.options.quality) ? this.options.quality : Math.max(...this.qualities);
        let _0xdb56b3_2 = await this.json(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6e\x79\x78\x74\x75\x62\x65\x2f\x6e\x61\x74\x69\x76\x65\x2f\x70\x72\x65\x70\x61\x72\x65\x2f${_0xdb56b3_0}\x2f${this.quality}\x3f\x6d\x6f\x64\x65\x3d\x68\x6c\x73`, {
          method: "\x50\x4f\x53\x54"
        });
        const _0xdb56b3_3 = Date.now() + 6e4;
        for (;"\x70\x72\x65\x70\x61\x72\x69\x6e\x67" === _0xdb56b3_2.state && Date.now() < _0xdb56b3_3; ) await this.wait(1500), 
        _0xdb56b3_2 = await this.json(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6e\x79\x78\x74\x75\x62\x65\x2f\x6e\x61\x74\x69\x76\x65\x2f\x6a\x6f\x62\x73\x2f${_0xdb56b3_0}\x2f${this.quality}`);
        if ("\x72\x65\x61\x64\x79" === _0xdb56b3_2.state && "\x68\x6c\x73" === _0xdb56b3_2.kind && /^\/api\/nyxtube\/native\/hls\/[a-f0-9]{32}\/master\.m3u8$/.test(_0xdb56b3_2.url || "")) return this.loadHls(_0xdb56b3_2.url);
        if ("\x72\x65\x61\x64\x79" !== _0xdb56b3_2.state || !new RegExp(`\x5e\x2f\x61\x70\x69\x2f\x6e\x79\x78\x74\x75\x62\x65\x2f\x6e\x61\x74\x69\x76\x65\x2f\x6d\x65\x64\x69\x61\x2f${this.options.videoId}\x2d\x28\x33\x36\x30\x7c\x34\x38\x30\x7c\x37\x32\x30\x29\x5c\x2e\x6d\x70\x34\x24`).test(_0xdb56b3_2.url || "")) throw new Error("\x54\x68\x65\x20\x76\x69\x64\x65\x6f\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x62\x65\x20\x70\x72\x65\x70\x61\x72\x65\x64\x2e");
        this.video.src = _0xdb56b3_2.url;
      }
      loadHls(_0xdb56b3_0, _0xdb56b3_1 = this.options.startTime || 0) {
        this.hlsUrl = _0xdb56b3_0, this.lastProgress = Date.now();
        const _0xdb56b3_2 = window.Hls;
        if (_0xdb56b3_2?.isSupported()) {
          this.hls?.destroy();
          const _0xdb56b3_3 = {
            maxNumRetry: 2,
            retryDelayMs: 1e3,
            maxRetryDelayMs: 8e3,
            shouldRetry: (_0xdb56b3_0, _0xdb56b3_1, _0xdb56b3_2, _0xdb56b3_3, _0xdb56b3_4) => _0xdb56b3_4 || 429 === _0xdb56b3_3?.code && _0xdb56b3_1 < _0xdb56b3_0.maxNumRetry
          }, _0xdb56b3_4 = {
            default: {
              maxTimeToFirstByteMs: 65e3,
              maxLoadTimeMs: 7e4,
              timeoutRetry: {
                ..._0xdb56b3_3,
                maxNumRetry: 1
              },
              errorRetry: _0xdb56b3_3
            }
          }, _0xdb56b3_5 = this.hls = new _0xdb56b3_2({
            startPosition: _0xdb56b3_1,
            maxBufferLength: 12,
            maxMaxBufferLength: 24,
            maxBufferSize: 8388608,
            backBufferLength: 12,
            fragLoadPolicy: _0xdb56b3_4,
            manifestLoadPolicy: _0xdb56b3_4,
            playlistLoadPolicy: _0xdb56b3_4
          });
          _0xdb56b3_5.on(_0xdb56b3_2.Events.ERROR, (_0xdb56b3_0, _0xdb56b3_1) => {
            if (!this.controller.signal.aborted) if (_0xdb56b3_1.fatal) {
              if (410 === _0xdb56b3_1.response?.code && (!this.renewedAt || Date.now() - this.renewedAt > 6e4)) {
                this.renewedAt = Date.now();
                const _0xdb56b3_0 = this.video.currentTime, _0xdb56b3_1 = this.video.paused;
                return this.renewing = !0, this.setBuffering(!0), _0xdb56b3_5.destroy(), this.hls = null, 
                void this.json(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6e\x79\x78\x74\x75\x62\x65\x2f\x6e\x61\x74\x69\x76\x65\x2f\x70\x72\x65\x70\x61\x72\x65\x2f${encodeURIComponent(this.options.videoId)}\x2f${this.quality}\x3f\x6d\x6f\x64\x65\x3d\x68\x6c\x73`, {
                  method: "\x50\x4f\x53\x54"
                }).then(_0xdb56b3_2 => {
                  if (!/^\/api\/nyxtube\/native\/hls\/[a-f0-9]{32}\/master\.m3u8$/.test(_0xdb56b3_2.url || "")) throw new Error("\x54\x68\x65\x20\x76\x69\x64\x65\x6f\x20\x73\x65\x73\x73\x69\x6f\x6e\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x62\x65\x20\x72\x65\x6e\x65\x77\x65\x64\x2e");
                  this.loadHls(_0xdb56b3_2.url, _0xdb56b3_0), _0xdb56b3_1 || this.playVideo();
                }).catch(_0xdb56b3_0 => this.fail(_0xdb56b3_0.message));
              }
              if (_0xdb56b3_1.type === _0xdb56b3_2.ErrorTypes.MEDIA_ERROR && this.recoveries++ < 1) return this.lastProgress = Date.now(), 
              void _0xdb56b3_5.recoverMediaError();
              this.fail(_0xdb56b3_1.type === _0xdb56b3_2.ErrorTypes.NETWORK_ERROR ? "\x54\x68\x65\x20\x76\x69\x64\x65\x6f\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x72\x65\x63\x6f\x76\x65\x72\x2e" : "\x54\x68\x69\x73\x20\x76\x69\x64\x65\x6f\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x62\x65\x20\x64\x65\x63\x6f\x64\x65\x64\x2e");
            } else _0xdb56b3_1.details !== _0xdb56b3_2.ErrorDetails?.BUFFER_STALLED_ERROR || this.video.paused || this.setBuffering(!0);
          }), _0xdb56b3_5.loadSource(_0xdb56b3_0), _0xdb56b3_5.attachMedia(this.video);
        } else {
          if (!this.video.canPlayType("\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x76\x6e\x64\x2e\x61\x70\x70\x6c\x65\x2e\x6d\x70\x65\x67\x75\x72\x6c")) throw new Error("\x54\x68\x69\x73\x20\x62\x72\x6f\x77\x73\x65\x72\x20\x64\x6f\x65\x73\x20\x6e\x6f\x74\x20\x73\x75\x70\x70\x6f\x72\x74\x20\x73\x65\x67\x6d\x65\x6e\x74\x65\x64\x20\x76\x69\x64\x65\x6f\x20\x70\x6c\x61\x79\x62\x61\x63\x6b\x2e");
          this.video.src = _0xdb56b3_0;
        }
      }
      checkProgress() {
        if (this.controller.signal.aborted || this.failed) return;
        const _0xdb56b3_0 = this.video.currentTime;
        return !this.video.paused && Math.abs(_0xdb56b3_0 - this.lastTime) > .1 || this.video.ended || this.video.paused && this.video.readyState >= 2 && !this.renewing ? (this.lastTime = _0xdb56b3_0, 
        void (this.lastProgress = Date.now())) : Date.now() - this.lastProgress < 9e4 ? void 0 : this.hls && this.recoveries++ < 1 ? (this.lastProgress = Date.now(), 
        this.hls.stopLoad(), this.hls.startLoad(_0xdb56b3_0), void this.setBuffering(!0)) : void this.fail("\x56\x69\x64\x65\x6f\x20\x6c\x6f\x61\x64\x69\x6e\x67\x20\x73\x74\x6f\x70\x70\x65\x64\x20\x6d\x61\x6b\x69\x6e\x67\x20\x70\x72\x6f\x67\x72\x65\x73\x73\x2e\x20\x54\x72\x79\x20\x61\x20\x6c\x6f\x77\x65\x72\x20\x71\x75\x61\x6c\x69\x74\x79\x20\x6f\x72\x20\x74\x68\x65\x20\x65\x6d\x62\x65\x64\x64\x65\x64\x20\x70\x6c\x61\x79\x65\x72\x2e");
      }
      fail(_0xdb56b3_0) {
        this.controller.signal.aborted || this.failed || (this.failed = !0, this.failure = _0xdb56b3_0, 
        this.setBuffering(!1), clearInterval(this.watchdog), this.hls?.stopLoad(), this.options.events?.onError?.({
          target: this,
          data: 900
        }));
      }
      async setCaptions(_0xdb56b3_0) {
        this.captionsEnabled = _0xdb56b3_0, this.captionTrack && (this.captionTrack.mode = _0xdb56b3_0 ? "\x73\x68\x6f\x77\x69\x6e\x67" : "\x64\x69\x73\x61\x62\x6c\x65\x64"), 
        _0xdb56b3_0 && await this.updateCaptions(!0);
      }
      async updateCaptions(_0xdb56b3_0 = !1) {
        const _0xdb56b3_1 = this.getCurrentTime();
        if (!(this.controller.signal.aborted || !this.captionsEnabled || this.captionLoading || !_0xdb56b3_0 && _0xdb56b3_1 >= this.captionStart && _0xdb56b3_1 < this.captionUntil)) {
          this.captionLoading = !0;
          try {
            const _0xdb56b3_0 = await this.json(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6e\x79\x78\x74\x75\x62\x65\x2f\x63\x61\x70\x74\x69\x6f\x6e\x73\x2f${encodeURIComponent(this.options.videoId)}\x3f\x61\x74\x3d${Math.floor(_0xdb56b3_1)}`);
            if (this.controller.signal.aborted) return;
            if (!_0xdb56b3_0.available) throw new Error(_0xdb56b3_0.message || "\x43\x61\x70\x74\x69\x6f\x6e\x73\x20\x61\x72\x65\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x20\x66\x6f\x72\x20\x74\x68\x69\x73\x20\x76\x69\x64\x65\x6f\x2e");
            this.captionTrack || (this.captionTrack = this.video.addTextTrack("\x63\x61\x70\x74\x69\x6f\x6e\x73", _0xdb56b3_0.language || "\x43\x61\x70\x74\x69\x6f\x6e\x73", _0xdb56b3_0.languageCode || "")), 
            this.captionTrack.mode = "\x68\x69\x64\x64\x65\x6e";
            for (const _0xdb56b3_1 of Array.from(this.captionTrack.cues || [])) this.captionTrack.removeCue(_0xdb56b3_1);
            for (const _0xdb56b3_1 of (_0xdb56b3_0.segments || []).slice(0, 1e3)) {
              const _0xdb56b3_0 = Number(_0xdb56b3_1.startSeconds), _0xdb56b3_2 = _0xdb56b3_0 + Number(_0xdb56b3_1.durationSeconds);
              if (!Number.isFinite(_0xdb56b3_0) || !Number.isFinite(_0xdb56b3_2) || _0xdb56b3_2 <= _0xdb56b3_0) continue;
              const _0xdb56b3_3 = String(_0xdb56b3_1.text || "").slice(0, 500).replace(/&/g, "\x26\x61\x6d\x70\x3b").replace(/</g, "\x26\x6c\x74\x3b").replace(/>/g, "\x26\x67\x74\x3b");
              this.captionTrack.addCue(new VTTCue(_0xdb56b3_0, _0xdb56b3_2, _0xdb56b3_3));
            }
            if (this.captionStart = Number(_0xdb56b3_0.start) || 0, this.captionUntil = Number(_0xdb56b3_0.until), 
            !Number.isFinite(this.captionUntil) || this.captionUntil <= _0xdb56b3_1) throw new Error("\x54\x68\x65\x20\x63\x61\x70\x74\x69\x6f\x6e\x20\x74\x69\x6d\x69\x6e\x67\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x77\x61\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e");
            this.captionTrack.mode = this.captionsEnabled ? "\x73\x68\x6f\x77\x69\x6e\x67" : "\x64\x69\x73\x61\x62\x6c\x65\x64";
          } catch (_0xdb56b3_2) {
            this.controller.signal.aborted || (this.captionsEnabled = !1, this.captionTrack && (this.captionTrack.mode = "\x64\x69\x73\x61\x62\x6c\x65\x64"), 
            this.options.events?.onCaptionError?.({
              target: this,
              message: _0xdb56b3_2.message
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
      setPlaybackRate(_0xdb56b3_0) {
        this.video.playbackRate = _0xdb56b3_0;
      }
      getVolume() {
        return 100 * this.video.volume;
      }
      setVolume(_0xdb56b3_0) {
        this.video.volume = Math.max(0, Math.min(1, _0xdb56b3_0 / 100));
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
      seekTo(_0xdb56b3_0) {
        this.video.currentTime = Math.max(0, Math.min(this.getDuration(), _0xdb56b3_0));
      }
      destroy() {
        clearInterval(this.watchdog), this.captionsEnabled = !1, this.controller.abort(), 
        this.hls?.destroy(), this.video.pause(), this.video.removeAttribute("\x73\x72\x63"), this.video.load(), 
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
