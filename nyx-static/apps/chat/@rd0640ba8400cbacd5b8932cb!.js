window.NyxVoiceRelay = class {
  constructor({
    stream: __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
    audioContext: __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
    exchange: __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
    accept: __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0,
    muted: __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579,
    deafened: __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45,
    status: __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d,
    denied: __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd,
  }) {
    (Object.assign(this, {
      stream: __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
      audioContext: __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
      exchange: __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
      accept: __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0,
      muted: __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579,
      deafened: __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45,
      status: __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d,
      denied: __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd,
    }),
      (this.pending = []),
      (this.sequence = 0),
      (this.playheads = new Map()),
      (this.sources = new Set()),
      (this.closed = !1));
  }
  async start() {
    ((this.context = this.audioContext || new (window.AudioContext || window.webkitAudioContext)()),
      (this.gain = this.context.createGain()),
      this.gain.connect(this.context.destination),
      await this.context.resume(),
      this.context._nyxVoiceCaptureModule ||
        (this.context._nyxVoiceCaptureModule = this.context.audioWorklet
          .addModule("\u002e\u002f\u0076\u006f\u0069\u0063\u0065\u002d\u0063\u0061\u0070\u0074\u0075\u0072\u0065\u002e\u006a\u0073\u003f\u0076\u003d\u0032\u0030\u0032\u0036\u0030\u0039\u0032\u0033\u002d\u0076\u006f\u0069\u0063\u0065\u002d\u0072\u0065\u006c\u0061\u0079\u002d\u0076\u0031")
          .catch((__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) => {
            throw (
              delete this.context._nyxVoiceCaptureModule,
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28
            );
          })),
      await this.context._nyxVoiceCaptureModule,
      this.closed ||
        ((this.input = this.context.createMediaStreamSource(this.stream)),
        (this.capture = new AudioWorkletNode(this.context, "\u006e\u0079\u0078\u002d\u0076\u006f\u0069\u0063\u0065\u002d\u0063\u0061\u0070\u0074\u0075\u0072\u0065")),
        (this.silent = this.context.createGain()),
        (this.silent.gain.value = 0),
        this.input.connect(this.capture),
        this.capture.connect(this.silent),
        this.silent.connect(this.context.destination),
        (this.capture.port.onmessage = (
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28,
        ) => {
          if (this.closed || this.muted()) return void (this.pending = []);
          const __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede = new Int16Array(
              __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.data,
            ),
            __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f = new Uint8Array(
              3200,
            ),
            __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 = new DataView(
              __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.buffer,
            );
          for (
            let __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45 = 0;
            __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45 <
            __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.length;
            __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45++
          )
            __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.setInt16(
              2 * __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45,
              __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede[
                __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45
              ],
              !0,
            );
          const __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 = btoa(
            String.fromCharCode(
              ...__8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f,
            ),
          );
          (this.pending.push({
            seq: this.sequence++,
            data: __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579,
          }),
            this.pending.length > 4 && this.pending.shift());
        }),
        this.tick()));
  }
  async tick() {
    if (this.closed) return;
    let __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 = 120;
    try {
      const __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 =
        await this.exchange(this.muted() ? (this.pending = []) : this.pending.splice(0, 4));
      if (this.closed) return;
      (this.status(
        "\u0068\u0074\u0074\u0070" === __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.transport
          ? "\u0056\u006f\u0069\u0063\u0065\u0020\u0076\u0069\u0061\u0020\u0048\u0054\u0054\u0050"
          : "\u0056\u006f\u0069\u0063\u0065\u0020\u0076\u0069\u0061\u0020\u0063\u0068\u0061\u0074\u0020\u0063\u006f\u006e\u006e\u0065\u0063\u0074\u0069\u006f\u006e",
      ),
        (this.gain.gain.value = this.deafened() ? 0 : 1));
      for (const __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede of __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.frames ||
        [])
        this.play(__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede);
    } catch (__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede) {
      if (this.closed) return;
      if (
        [401, 403, 409].includes(
          __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.status,
        )
      )
        return (this.close(), void this.denied());
      ((this.pending = []),
        (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 = 1e3),
        this.status(
          403 === __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.status ||
            401 === __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.status ||
            409 === __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede.status
            ? "\u0056\u006f\u0069\u0063\u0065\u0020\u0064\u0069\u0073\u0063\u006f\u006e\u006e\u0065\u0063\u0074\u0065\u0064\u0020\u2014\u0020\u0072\u0065\u006a\u006f\u0069\u006e\u0020\u0074\u0068\u0065\u0020\u0063\u0068\u0061\u006e\u006e\u0065\u006c"
            : "\u0056\u006f\u0069\u0063\u0065\u0020\u0072\u0065\u0063\u006f\u006e\u006e\u0065\u0063\u0074\u0069\u006e\u0067\u2026",
        ));
    }
    this.closed ||
      (this.timer = setTimeout(() => {
        this.tick();
      }, __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28));
  }
  play(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) {
    if (
      this.deafened() ||
      !this.accept(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) ||
      "\u0073\u0074\u0072\u0069\u006e\u0067" != typeof __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.data ||
      4268 !== __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.data.length
    )
      return;
    const __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede = `${__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.fromUid}:${__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.fromSessionId}`,
      __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f = this.playheads.get(
        __4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede,
      );
    if (
      __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f &&
      __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.seq <=
        __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f.seq
    )
      return;
    const __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0 = Uint8Array.from(
      atob(__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.data),
      (__e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28) =>
        __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.charCodeAt(0),
    );
    if (3200 !== __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.length) return;
    const __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579 =
        this.context.createBuffer(1, 1600, 16e3),
      __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45 =
        __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579.getChannelData(0),
      __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d = new DataView(
        __48a1ccc20710b1d8d49b6ce5e8ade380cb14b8793bb656c2d82397358af21ee0.buffer,
      );
    for (
      let __37c128880588460342b5be1dfd5b157c42bb28e5b510992c66566aee844f1b65 = 0;
      __37c128880588460342b5be1dfd5b157c42bb28e5b510992c66566aee844f1b65 < 1600;
      __37c128880588460342b5be1dfd5b157c42bb28e5b510992c66566aee844f1b65++
    )
      __dd3415bf681ff69d3510f8e6d39dd1381a095cf340a5dd37249e8df797e01b45[
        __37c128880588460342b5be1dfd5b157c42bb28e5b510992c66566aee844f1b65
      ] =
        __67711e8b1ef6f2192fc59039c6dc2e25167f773d807b2e16e0feb1a35d50408d.getInt16(
          2 * __37c128880588460342b5be1dfd5b157c42bb28e5b510992c66566aee844f1b65,
          !0,
        ) / 32768;
    const __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd =
        this.context.currentTime,
      __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2 = Math.max(
        __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd + 0.04,
        __8416330e42df068833b56c5ac8e9737d861c245e1799ee7609f3d0cee8f1c36f?.at || 0,
      );
    if (
      __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2 >
      __23a7f849fce2e518dd65ea22688a9d72f9ab8ead538339cc1a997826f76fe9dd + 0.5
    )
      return;
    const __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5 =
      this.context.createBufferSource();
    ((__b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5.buffer =
      __64cc36e759b540a378028f969acc599334838e48c7db9cd9782c140bdb4b0579),
      __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5.connect(this.gain),
      this.sources.add(__b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5),
      (__b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5.onended = () => {
        (this.sources.delete(__b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5),
          __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5.disconnect());
      }),
      __b16bccb347dc9c0d0015a5c0688050c73aafac976dfd513b3b37833e0f570bf5.start(
        __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2,
      ),
      this.playheads.set(__4ed4af0993ed6106700e01a769d5837177e6fb9e606e255b7f3e659d4b07eede, {
        seq: __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.seq,
        at: __7a5da2f0da2b619fe5913e06623633eef79ef7e49bdea8097b59055de96151a2 + 0.1,
      }),
      this.playheads.size > 16 && this.playheads.delete(this.playheads.keys().next().value));
  }
  silence() {
    if (
      ((this.pending = []),
      this.gain && (this.gain.gain.value = this.deafened() ? 0 : 1),
      this.deafened())
    ) {
      for (const __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 of this.sources)
        try {
          __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.stop();
        } catch {}
      (this.sources.clear(), this.playheads.clear());
    }
  }
  close() {
    ((this.closed = !0),
      clearTimeout(this.timer),
      (this.pending = []),
      this.capture &&
        ((this.capture.port.onmessage = null),
        this.capture.port.close(),
        this.capture.disconnect()),
      this.input?.disconnect(),
      this.silent?.disconnect(),
      this.gain?.disconnect());
    for (const __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28 of this.sources)
      try {
        __e867a82f2f37641d35758a6d44e57a5730b804da56d4c014e81051e20c8c3a28.stop();
      } catch {}
    (this.sources.clear(),
      this.playheads.clear(),
      this.audioContext || this.context?.close().catch(() => {}));
  }
};
