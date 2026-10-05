window.NyxVoiceRelay = class {
  constructor({stream: t, audioContext: e, exchange: s, accept: i, muted: n, deafened: a, status: c, denied: o}) {
    Object.assign(this, {
      stream: t,
      audioContext: e,
      exchange: s,
      accept: i,
      muted: n,
      deafened: a,
      status: c,
      denied: o
    }), this.pending = [], this.sequence = 0, this.playheads = new Map, this.sources = new Set, 
    this.closed = !1;
  }
  async start() {
    this.context = this.audioContext || new (window.AudioContext || window.webkitAudioContext), 
    this.gain = this.context.createGain(), this.gain.connect(this.context.destination), 
    await this.context.resume(), this.context._nyxVoiceCaptureModule || (this.context._nyxVoiceCaptureModule = this.context.audioWorklet.addModule("./voice-capture.js?v=20260923-voice-relay-v1").catch(t => {
      throw delete this.context._nyxVoiceCaptureModule, t;
    })), await this.context._nyxVoiceCaptureModule, this.closed || (this.input = this.context.createMediaStreamSource(this.stream), 
    this.capture = new AudioWorkletNode(this.context, "nyx-voice-capture"), this.silent = this.context.createGain(), 
    this.silent.gain.value = 0, this.input.connect(this.capture), this.capture.connect(this.silent), 
    this.silent.connect(this.context.destination), this.capture.port.onmessage = t => {
      if (this.closed || this.muted()) return void (this.pending = []);
      const e = new Int16Array(t.data), s = new Uint8Array(3200), i = new DataView(s.buffer);
      for (let a = 0; a < e.length; a++) i.setInt16(2 * a, e[a], !0);
      const n = btoa(String.fromCharCode(...s));
      this.pending.push({
        seq: this.sequence++,
        data: n
      }), this.pending.length > 4 && this.pending.shift();
    }, this.tick());
  }
  async tick() {
    if (this.closed) return;
    let t = 120;
    try {
      const t = await this.exchange(this.muted() ? this.pending = [] : this.pending.splice(0, 4));
      if (this.closed) return;
      this.status("http" === t.transport ? "Voice via HTTP" : "Voice via chat connection"), 
      this.gain.gain.value = this.deafened() ? 0 : 1;
      for (const e of t.frames || []) this.play(e);
    } catch (e) {
      if (this.closed) return;
      if ([ 401, 403, 409 ].includes(e.status)) return this.close(), void this.denied();
      this.pending = [], t = 1e3, this.status(403 === e.status || 401 === e.status || 409 === e.status ? "Voice disconnected \u2014 rejoin the channel" : "Voice reconnecting\u2026");
    }
    this.closed || (this.timer = setTimeout(() => {
      this.tick();
    }, t));
  }
  play(t) {
    if (this.deafened() || !this.accept(t) || "string" != typeof t.data || 4268 !== t.data.length) return;
    const e = `${t.fromUid}:${t.fromSessionId}`, s = this.playheads.get(e);
    if (s && t.seq <= s.seq) return;
    const i = Uint8Array.from(atob(t.data), t => t.charCodeAt(0));
    if (3200 !== i.length) return;
    const n = this.context.createBuffer(1, 1600, 16e3), a = n.getChannelData(0), c = new DataView(i.buffer);
    for (let d = 0; d < 1600; d++) a[d] = c.getInt16(2 * d, !0) / 32768;
    const o = this.context.currentTime, h = Math.max(o + .04, s?.at || 0);
    if (h > o + .5) return;
    const r = this.context.createBufferSource();
    r.buffer = n, r.connect(this.gain), this.sources.add(r), r.onended = () => {
      this.sources.delete(r), r.disconnect();
    }, r.start(h), this.playheads.set(e, {
      seq: t.seq,
      at: h + .1
    }), this.playheads.size > 16 && this.playheads.delete(this.playheads.keys().next().value);
  }
  silence() {
    if (this.pending = [], this.gain && (this.gain.gain.value = this.deafened() ? 0 : 1), 
    this.deafened()) {
      for (const t of this.sources) try {
        t.stop();
      } catch {}
      this.sources.clear(), this.playheads.clear();
    }
  }
  close() {
    this.closed = !0, clearTimeout(this.timer), this.pending = [], this.capture && (this.capture.port.onmessage = null, 
    this.capture.port.close(), this.capture.disconnect()), this.input?.disconnect(), 
    this.silent?.disconnect(), this.gain?.disconnect();
    for (const t of this.sources) try {
      t.stop();
    } catch {}
    this.sources.clear(), this.playheads.clear(), this.audioContext || this.context?.close().catch(() => {});
  }
};
