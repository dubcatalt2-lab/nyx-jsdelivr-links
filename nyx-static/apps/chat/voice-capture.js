class __a8c370478751dfd3ddc4a822fddfb4a54d5406714a223ce1b46ef2246e2d596f extends AudioWorkletProcessor {
  constructor() {
    (super(),
      (this.frame = new Int16Array(1600)),
      (this.index = 0),
      (this.phase = 0),
      (this.sum = 0),
      (this.count = 0));
  }
  process(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) {
    const __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede =
      __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28[0]?.[0];
    if (!__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede) return !0;
    for (const __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f of __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede)
      ((this.sum += __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f),
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
  __a8c370478751dfd3ddc4a822fddfb4a54d5406714a223ce1b46ef2246e2d596f,
);
