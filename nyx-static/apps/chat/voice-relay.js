window.NyxVoiceRelay = class {
  constructor({
    stream: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
    audioContext: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
    exchange: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
    accept: __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
    muted: __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
    deafened: __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
    status: __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
    denied: __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2,
  }) {
    (Object.assign(this, {
      stream: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
      audioContext: __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
      exchange: __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
      accept: __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03,
      muted: __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
      deafened: __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
      status: __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc,
      denied: __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2,
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
          .catch((__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) => {
            throw (
              delete this.context._nyxVoiceCaptureModule,
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96
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
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96,
        ) => {
          if (this.closed || this.muted()) return void (this.pending = []);
          const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = new Int16Array(
              __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.data,
            ),
            __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = new Uint8Array(
              3200,
            ),
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = new DataView(
              __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.buffer,
            );
          for (
            let __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a = 0;
            __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a <
            __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.length;
            __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a++
          )
            __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.setInt16(
              2 * __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a,
              __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5[
                __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a
              ],
              !0,
            );
          const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 = btoa(
            String.fromCharCode(
              ...__60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c,
            ),
          );
          (this.pending.push({
            seq: this.sequence++,
            data: __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713,
          }),
            this.pending.length > 4 && this.pending.shift());
        }),
        this.tick()));
  }
  async tick() {
    if (this.closed) return;
    let __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = 120;
    try {
      const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 =
        await this.exchange(this.muted() ? (this.pending = []) : this.pending.splice(0, 4));
      if (this.closed) return;
      (this.status(
        "\u0068\u0074\u0074\u0070" === __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.transport
          ? "\u0056\u006f\u0069\u0063\u0065\u0020\u0076\u0069\u0061\u0020\u0048\u0054\u0054\u0050"
          : "\u0056\u006f\u0069\u0063\u0065\u0020\u0076\u0069\u0061\u0020\u0063\u0068\u0061\u0074\u0020\u0063\u006f\u006e\u006e\u0065\u0063\u0074\u0069\u006f\u006e",
      ),
        (this.gain.gain.value = this.deafened() ? 0 : 1));
      for (const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 of __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.frames ||
        [])
        this.play(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5);
    } catch (__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5) {
      if (this.closed) return;
      if (
        [401, 403, 409].includes(
          __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.status,
        )
      )
        return (this.close(), void this.denied());
      ((this.pending = []),
        (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 = 1e3),
        this.status(
          403 === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.status ||
            401 === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.status ||
            409 === __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5.status
            ? "\u0056\u006f\u0069\u0063\u0065\u0020\u0064\u0069\u0073\u0063\u006f\u006e\u006e\u0065\u0063\u0074\u0065\u0064\u0020\u2014\u0020\u0072\u0065\u006a\u006f\u0069\u006e\u0020\u0074\u0068\u0065\u0020\u0063\u0068\u0061\u006e\u006e\u0065\u006c"
            : "\u0056\u006f\u0069\u0063\u0065\u0020\u0072\u0065\u0063\u006f\u006e\u006e\u0065\u0063\u0074\u0069\u006e\u0067\u2026",
        ));
    }
    this.closed ||
      (this.timer = setTimeout(() => {
        this.tick();
      }, __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96));
  }
  play(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) {
    if (
      this.deafened() ||
      !this.accept(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) ||
      "\u0073\u0074\u0072\u0069\u006e\u0067" != typeof __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.data ||
      4268 !== __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.data.length
    )
      return;
    const __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5 = `${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.fromUid}:${__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.fromSessionId}`,
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c = this.playheads.get(
        __49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5,
      );
    if (
      __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c &&
      __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.seq <=
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c.seq
    )
      return;
    const __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03 = Uint8Array.from(
      atob(__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.data),
      (__36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96) =>
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.charCodeAt(0),
    );
    if (3200 !== __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.length) return;
    const __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713 =
        this.context.createBuffer(1, 1600, 16e3),
      __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a =
        __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713.getChannelData(0),
      __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc = new DataView(
        __32ebf74c1a408f3d2c8873db931f0d8243b80c30aec9632e9840e4501bdbeb03.buffer,
      );
    for (
      let __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 = 0;
      __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239 < 1600;
      __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239++
    )
      __13795770954b8a681f9048418bcc4f93554d6d92f2bb7770a7709d8cc2d0f87a[
        __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239
      ] =
        __158e0bd6d678cff89b23dafaa46fbabfba531f042706486a09e48c7cac9ea8fc.getInt16(
          2 * __467e9e1c37da5efb8639ead876790124aa8ee9b42b5f7e0ec38b3b2a12aa4239,
          !0,
        ) / 32768;
    const __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 =
        this.context.currentTime,
      __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 = Math.max(
        __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 + 0.04,
        __60e6e637b7b963d634fdfd50df3a066e4a57f83857541db66fe8be28eb2fcd7c?.at || 0,
      );
    if (
      __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 >
      __da22d558ffc7beaebd4dccdeb2aa108eeecad0bd95e878106e4e41a785d60ee2 + 0.5
    )
      return;
    const __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f =
      this.context.createBufferSource();
    ((__16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f.buffer =
      __a725252ec43dce1a31487d6ec610ab6a9c69bd553a25619ea0cdf7e9e04cd713),
      __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f.connect(this.gain),
      this.sources.add(__16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f),
      (__16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f.onended = () => {
        (this.sources.delete(__16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f),
          __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f.disconnect());
      }),
      __16ce36443f8abd1a5f32e6f2b0fe67530069d12a74af4ce959921c772863f30f.start(
        __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238,
      ),
      this.playheads.set(__49b93de3d0d74953b0f2bcaa351bad16553ef6084284335ae10ea62972bf2fc5, {
        seq: __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.seq,
        at: __9d0e07cd702e6d276679ef0fc087fb77ade5212b41061e0ba9cfc26ab56a2238 + 0.1,
      }),
      this.playheads.size > 16 && this.playheads.delete(this.playheads.keys().next().value));
  }
  silence() {
    if (
      ((this.pending = []),
      this.gain && (this.gain.gain.value = this.deafened() ? 0 : 1),
      this.deafened())
    ) {
      for (const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 of this.sources)
        try {
          __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.stop();
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
    for (const __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96 of this.sources)
      try {
        __36f5e6ef47df95b66bef1238924acdec148863ee52a72d004a636e896f7d8b96.stop();
      } catch {}
    (this.sources.clear(),
      this.playheads.clear(),
      this.audioContext || this.context?.close().catch(() => {}));
  }
};
