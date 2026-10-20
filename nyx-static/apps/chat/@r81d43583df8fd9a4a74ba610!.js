class __62516b3d67659acde2ed095c5e65043f9a756eddaa7c07346c546771330b5378 extends AudioWorkletProcessor {
  constructor() {
    (super(),
      (this.frame = new Int16Array(1600)),
      (this.index = 0),
      (this.phase = 0),
      (this.sum = 0),
      (this.count = 0));
  }
  process(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 =
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96[0]?.[0];
    if (!__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) return !0;
    for (const __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c of __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5)
      ((this.sum += __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c),
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
  __62516b3d67659acde2ed095c5e65043f9a756eddaa7c07346c546771330b5378,
);
