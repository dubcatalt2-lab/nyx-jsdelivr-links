window.NyxVoiceRelay = class {
  constructor({stream: _0x5105ac_0, audioContext: _0x5105ac_1, exchange: _0x5105ac_2, accept: _0x5105ac_3, muted: _0x5105ac_4, deafened: _0x5105ac_5, status: _0x5105ac_6, denied: _0x5105ac_7}) {
    Object.assign(this, {
      stream: _0x5105ac_0,
      audioContext: _0x5105ac_1,
      exchange: _0x5105ac_2,
      accept: _0x5105ac_3,
      muted: _0x5105ac_4,
      deafened: _0x5105ac_5,
      status: _0x5105ac_6,
      denied: _0x5105ac_7
    }), this.pending = [], this.sequence = 0, this.playheads = new Map, this.sources = new Set, 
    this.closed = !1;
  }
  async start() {
    this.context = this.audioContext || new (window.AudioContext || window.webkitAudioContext), 
    this.gain = this.context.createGain(), this.gain.connect(this.context.destination), 
    await this.context.resume(), this.context._nyxVoiceCaptureModule || (this.context._nyxVoiceCaptureModule = this.context.audioWorklet.addModule("\x2e\x2f\x76\x6f\x69\x63\x65\x2d\x63\x61\x70\x74\x75\x72\x65\x2e\x6a\x73\x3f\x76\x3d\x32\x30\x32\x36\x30\x39\x32\x33\x2d\x76\x6f\x69\x63\x65\x2d\x72\x65\x6c\x61\x79\x2d\x76\x31").catch(_0x5105ac_0 => {
      throw delete this.context._nyxVoiceCaptureModule, _0x5105ac_0;
    })), await this.context._nyxVoiceCaptureModule, this.closed || (this.input = this.context.createMediaStreamSource(this.stream), 
    this.capture = new AudioWorkletNode(this.context, "\x6e\x79\x78\x2d\x76\x6f\x69\x63\x65\x2d\x63\x61\x70\x74\x75\x72\x65"), this.silent = this.context.createGain(), 
    this.silent.gain.value = 0, this.input.connect(this.capture), this.capture.connect(this.silent), 
    this.silent.connect(this.context.destination), this.capture.port.onmessage = _0x5105ac_0 => {
      if (this.closed || this.muted()) return void (this.pending = []);
      const _0x5105ac_1 = new Int16Array(_0x5105ac_0.data), _0x5105ac_2 = new Uint8Array(3200), _0x5105ac_3 = new DataView(_0x5105ac_2.buffer);
      for (let _0x5105ac_5 = 0; _0x5105ac_5 < _0x5105ac_1.length; _0x5105ac_5++) _0x5105ac_3.setInt16(2 * _0x5105ac_5, _0x5105ac_1[_0x5105ac_5], !0);
      const _0x5105ac_4 = btoa(String.fromCharCode(..._0x5105ac_2));
      this.pending.push({
        seq: this.sequence++,
        data: _0x5105ac_4
      }), this.pending.length > 4 && this.pending.shift();
    }, this.tick());
  }
  async tick() {
    if (this.closed) return;
    let _0x5105ac_0 = 120;
    try {
      const _0x5105ac_0 = await this.exchange(this.muted() ? this.pending = [] : this.pending.splice(0, 4));
      if (this.closed) return;
      this.status("\x68\x74\x74\x70" === _0x5105ac_0.transport ? "\x56\x6f\x69\x63\x65\x20\x76\x69\x61\x20\x48\x54\x54\x50" : "\x56\x6f\x69\x63\x65\x20\x76\x69\x61\x20\x63\x68\x61\x74\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e"), 
      this.gain.gain.value = this.deafened() ? 0 : 1;
      for (const _0x5105ac_1 of _0x5105ac_0.frames || []) this.play(_0x5105ac_1);
    } catch (_0x5105ac_1) {
      if (this.closed) return;
      if ([ 401, 403, 409 ].includes(_0x5105ac_1.status)) return this.close(), void this.denied();
      this.pending = [], _0x5105ac_0 = 1e3, this.status(403 === _0x5105ac_1.status || 401 === _0x5105ac_1.status || 409 === _0x5105ac_1.status ? "\x56\x6f\x69\x63\x65\x20\x64\x69\x73\x63\x6f\x6e\x6e\x65\x63\x74\x65\x64\x20\u2014\x20\x72\x65\x6a\x6f\x69\x6e\x20\x74\x68\x65\x20\x63\x68\x61\x6e\x6e\x65\x6c" : "\x56\x6f\x69\x63\x65\x20\x72\x65\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6e\x67\u2026");
    }
    this.closed || (this.timer = setTimeout(() => {
      this.tick();
    }, _0x5105ac_0));
  }
  play(_0x5105ac_0) {
    if (this.deafened() || !this.accept(_0x5105ac_0) || "\x73\x74\x72\x69\x6e\x67" != typeof _0x5105ac_0.data || 4268 !== _0x5105ac_0.data.length) return;
    const _0x5105ac_1 = `${_0x5105ac_0.fromUid}\x3a${_0x5105ac_0.fromSessionId}`, _0x5105ac_2 = this.playheads.get(_0x5105ac_1);
    if (_0x5105ac_2 && _0x5105ac_0.seq <= _0x5105ac_2.seq) return;
    const _0x5105ac_3 = Uint8Array.from(atob(_0x5105ac_0.data), _0x5105ac_0 => _0x5105ac_0.charCodeAt(0));
    if (3200 !== _0x5105ac_3.length) return;
    const _0x5105ac_4 = this.context.createBuffer(1, 1600, 16e3), _0x5105ac_5 = _0x5105ac_4.getChannelData(0), _0x5105ac_6 = new DataView(_0x5105ac_3.buffer);
    for (let _0x5105ac_a = 0; _0x5105ac_a < 1600; _0x5105ac_a++) _0x5105ac_5[_0x5105ac_a] = _0x5105ac_6.getInt16(2 * _0x5105ac_a, !0) / 32768;
    const _0x5105ac_7 = this.context.currentTime, _0x5105ac_8 = Math.max(_0x5105ac_7 + .04, _0x5105ac_2?.at || 0);
    if (_0x5105ac_8 > _0x5105ac_7 + .5) return;
    const _0x5105ac_9 = this.context.createBufferSource();
    _0x5105ac_9.buffer = _0x5105ac_4, _0x5105ac_9.connect(this.gain), this.sources.add(_0x5105ac_9), 
    _0x5105ac_9.onended = () => {
      this.sources.delete(_0x5105ac_9), _0x5105ac_9.disconnect();
    }, _0x5105ac_9.start(_0x5105ac_8), this.playheads.set(_0x5105ac_1, {
      seq: _0x5105ac_0.seq,
      at: _0x5105ac_8 + .1
    }), this.playheads.size > 16 && this.playheads.delete(this.playheads.keys().next().value);
  }
  silence() {
    if (this.pending = [], this.gain && (this.gain.gain.value = this.deafened() ? 0 : 1), 
    this.deafened()) {
      for (const _0x5105ac_0 of this.sources) try {
        _0x5105ac_0.stop();
      } catch {}
      this.sources.clear(), this.playheads.clear();
    }
  }
  close() {
    this.closed = !0, clearTimeout(this.timer), this.pending = [], this.capture && (this.capture.port.onmessage = null, 
    this.capture.port.close(), this.capture.disconnect()), this.input?.disconnect(), 
    this.silent?.disconnect(), this.gain?.disconnect();
    for (const _0x5105ac_0 of this.sources) try {
      _0x5105ac_0.stop();
    } catch {}
    this.sources.clear(), this.playheads.clear(), this.audioContext || this.context?.close().catch(() => {});
  }
};
