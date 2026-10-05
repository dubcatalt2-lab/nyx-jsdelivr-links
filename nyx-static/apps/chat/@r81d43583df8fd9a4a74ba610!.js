class ss extends AudioWorkletProcessor {
  constructor() {
    super(), this.frame = new Int16Array(1600), this.index = 0, this.phase = 0, this.sum = 0, 
    this.count = 0;
  }
  process(s) {
    const t = s[0]?.[0];
    if (!t) return !0;
    for (const e of t) this.sum += e, this.count++, this.phase += 16e3, this.phase >= sampleRate && (this.phase -= sampleRate, 
    this.frame[this.index++] = Math.round(32767 * Math.max(-1, Math.min(1, this.sum / this.count))), 
    this.sum = 0, this.count = 0, 1600 === this.index && (this.port.postMessage(this.frame.buffer, [ this.frame.buffer ]), 
    this.frame = new Int16Array(1600), this.index = 0));
    return !0;
  }
}

registerProcessor("nyx-voice-capture", ss);
