class VoiceCapture extends AudioWorkletProcessor {
  constructor() {
    super(), this.frame = new Int16Array(1600), this.index = 0, this.phase = 0, this.sum = 0, 
    this.count = 0;
  }
  process(_0x78411b_0) {
    const _0x78411b_1 = _0x78411b_0[0]?.[0];
    if (!_0x78411b_1) return !0;
    for (const _0x78411b_2 of _0x78411b_1) this.sum += _0x78411b_2, this.count++, this.phase += 16e3, 
    this.phase >= sampleRate && (this.phase -= sampleRate, this.frame[this.index++] = Math.round(32767 * Math.max(-1, Math.min(1, this.sum / this.count))), 
    this.sum = 0, this.count = 0, 1600 === this.index && (this.port.postMessage(this.frame.buffer, [ this.frame.buffer ]), 
    this.frame = new Int16Array(1600), this.index = 0));
    return !0;
  }
}

registerProcessor("\x6e\x79\x78\x2d\x76\x6f\x69\x63\x65\x2d\x63\x61\x70\x74\x75\x72\x65", VoiceCapture);
