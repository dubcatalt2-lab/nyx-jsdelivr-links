window.NyxVoiceRelay = class {
  constructor({
    stream: __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
    audioContext: __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
    exchange: __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
    accept: __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
    muted: __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
    deafened: __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766,
    status: __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7,
    denied: __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061,
  }) {
    (Object.assign(this, {
      stream: __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
      audioContext: __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
      exchange: __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
      accept: __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c,
      muted: __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
      deafened: __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766,
      status: __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7,
      denied: __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061,
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
          .catch((__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) => {
            throw (
              delete this.context._nyxVoiceCaptureModule,
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f
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
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f,
        ) => {
          if (this.closed || this.muted()) return void (this.pending = []);
          const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = new Int16Array(
              __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.data,
            ),
            __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = new Uint8Array(
              3200,
            ),
            __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c = new DataView(
              __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.buffer,
            );
          for (
            let __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 = 0;
            __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 <
            __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.length;
            __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766++
          )
            __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.setInt16(
              2 * __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766,
              __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53[
                __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766
              ],
              !0,
            );
          const __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 = btoa(
            String.fromCharCode(
              ...__72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708,
            ),
          );
          (this.pending.push({
            seq: this.sequence++,
            data: __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477,
          }),
            this.pending.length > 4 && this.pending.shift());
        }),
        this.tick()));
  }
  async tick() {
    if (this.closed) return;
    let __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f = 120;
    try {
      const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f =
        await this.exchange(this.muted() ? (this.pending = []) : this.pending.splice(0, 4));
      if (this.closed) return;
      (this.status(
        "\u0068\u0074\u0074\u0070" === __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.transport
          ? "\u0056\u006f\u0069\u0063\u0065\u0020\u0076\u0069\u0061\u0020\u0048\u0054\u0054\u0050"
          : "\u0056\u006f\u0069\u0063\u0065\u0020\u0076\u0069\u0061\u0020\u0063\u0068\u0061\u0074\u0020\u0063\u006f\u006e\u006e\u0065\u0063\u0074\u0069\u006f\u006e",
      ),
        (this.gain.gain.value = this.deafened() ? 0 : 1));
      for (const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 of __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.frames ||
        [])
        this.play(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53);
    } catch (__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53) {
      if (this.closed) return;
      if (
        [401, 403, 409].includes(
          __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.status,
        )
      )
        return (this.close(), void this.denied());
      ((this.pending = []),
        (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f = 1e3),
        this.status(
          403 === __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.status ||
            401 === __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.status ||
            409 === __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53.status
            ? "\u0056\u006f\u0069\u0063\u0065\u0020\u0064\u0069\u0073\u0063\u006f\u006e\u006e\u0065\u0063\u0074\u0065\u0064\u0020\u2014\u0020\u0072\u0065\u006a\u006f\u0069\u006e\u0020\u0074\u0068\u0065\u0020\u0063\u0068\u0061\u006e\u006e\u0065\u006c"
            : "\u0056\u006f\u0069\u0063\u0065\u0020\u0072\u0065\u0063\u006f\u006e\u006e\u0065\u0063\u0074\u0069\u006e\u0067\u2026",
        ));
    }
    this.closed ||
      (this.timer = setTimeout(() => {
        this.tick();
      }, __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f));
  }
  play(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) {
    if (
      this.deafened() ||
      !this.accept(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) ||
      "\u0073\u0074\u0072\u0069\u006e\u0067" != typeof __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.data ||
      4268 !== __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.data.length
    )
      return;
    const __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53 = `${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.fromUid}:${__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.fromSessionId}`,
      __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 = this.playheads.get(
        __af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53,
      );
    if (
      __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708 &&
      __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.seq <=
        __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708.seq
    )
      return;
    const __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c = Uint8Array.from(
      atob(__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.data),
      (__3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f) =>
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.charCodeAt(0),
    );
    if (3200 !== __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.length) return;
    const __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477 =
        this.context.createBuffer(1, 1600, 16e3),
      __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766 =
        __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477.getChannelData(0),
      __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7 = new DataView(
        __fd94be3de23310062da37b678c91d5e96bad6b26833c0d9b39c4b74b9caf7c0c.buffer,
      );
    for (
      let __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22 = 0;
      __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22 < 1600;
      __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22++
    )
      __f99bdc34d32739ef3662be82186109fd746156c2f535dee2694150c284892766[
        __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22
      ] =
        __22c239fbc1e4eeef1877df3a130f05d8427fced4710f905846a60962e68d11b7.getInt16(
          2 * __d4c8b1c79e16b03c6f5e435e41c684cb411ca847ac2c7391a10c4243f0c44c22,
          !0,
        ) / 32768;
    const __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 =
        this.context.currentTime,
      __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 = Math.max(
        __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 + 0.04,
        __72eb16f4a7239131d5e3d33c1ec288fdae2793881ef94b459d14601e5286d708?.at || 0,
      );
    if (
      __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 >
      __bfdbd7d577d05fec84a9e12b90237ceac40d6054230b5fee0489b9f0cb653061 + 0.5
    )
      return;
    const __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e =
      this.context.createBufferSource();
    ((__195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e.buffer =
      __bab969bd3ce538579b5e1d7fd61e9cffe5fb4a63d157d64f9e8b39b1ff5c9477),
      __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e.connect(this.gain),
      this.sources.add(__195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e),
      (__195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e.onended = () => {
        (this.sources.delete(__195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e),
          __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e.disconnect());
      }),
      __195933d5304e67fc303baeabe6be18e3c2ac1ca646479600f2b3f20799e3770e.start(
        __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106,
      ),
      this.playheads.set(__af197fc1d1f3f80b7a12289c3d46927a3cc1f9e80ef5c2f3f19200529c558b53, {
        seq: __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.seq,
        at: __78b4105d72b193566e65cfcb85f32a43a7f5416106fb44c79a8f6e425b505106 + 0.1,
      }),
      this.playheads.size > 16 && this.playheads.delete(this.playheads.keys().next().value));
  }
  silence() {
    if (
      ((this.pending = []),
      this.gain && (this.gain.gain.value = this.deafened() ? 0 : 1),
      this.deafened())
    ) {
      for (const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f of this.sources)
        try {
          __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.stop();
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
    for (const __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f of this.sources)
      try {
        __3cb627a3c5a1c308e59b8bf7cd21c5379e97f175a635288112485a6d2187c03f.stop();
      } catch {}
    (this.sources.clear(),
      this.playheads.clear(),
      this.audioContext || this.context?.close().catch(() => {}));
  }
};
