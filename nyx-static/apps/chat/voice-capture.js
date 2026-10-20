class __f30a64b6753469f00d5228d49cc24130f57def1fa2dbb71a12f39a895ad2c900 extends AudioWorkletProcessor {
  constructor() {
    (super(),
      (this.frame = new Int16Array(1600)),
      (this.index = 0),
      (this.phase = 0),
      (this.sum = 0),
      (this.count = 0));
  }
  process(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) {
    const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 =
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f[0]?.[0];
    if (!__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) return !0;
    for (const __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 of __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53)
      ((this.sum += __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708),
        this.count++,
        (this.phase += 16e3),
        this.phase >= sampleRate &&
          ((this.phase -= sampleRate),
          (this.frame[this.index++] = Math.round(
            32767 * Math.max(-1, Math.min(1, this.sum / this.count)),
          )),
          (this.sum = 0),
          (this.count = 0),
          1600 === this.index &&
            (this.port.postMessage(this.frame.buffer, [this.frame.buffer]),
            (this.frame = new Int16Array(1600)),
            (this.index = 0))));
    return !0;
  }
}

registerProcessor(
  "\u006e\u0079\u0078\u002d\u0076\u006f\u0069\u0063\u0065\u002d\u0063\u0061\u0070\u0074\u0075\u0072\u0065",
  __f30a64b6753469f00d5228d49cc24130f57def1fa2dbb71a12f39a895ad2c900,
);
