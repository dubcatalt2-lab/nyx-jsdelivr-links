!function(_a649b6b33c42, _9dff4f5be31a) {
  "\x6f\x62\x6a\x65\x63\x74" == typeof exports && "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof module ? _9dff4f5be31a(exports) : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof define && define.amd ? define([ "\x65\x78\x70\x6f\x72\x74\x73" ], _9dff4f5be31a) : _9dff4f5be31a((_a649b6b33c42 = "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof globalThis ? globalThis : _a649b6b33c42 || self).Bookmux = {});
}(this, function(_a649b6b33c42) {
  "use strict";
  const _9dff4f5be31a = globalThis.fetch, _6fb41bd045c5 = globalThis.SharedWorker, _1168cbe09a33 = globalThis.localStorage, _c6e68ca74fc3 = globalThis.navigator.serviceWorker, _f04ba7d8cd43 = MessagePort.prototype.postMessage, _fde0d6fdcc16 = {
    prototype: {
      send: WebSocket.prototype.send
    },
    CLOSED: WebSocket.CLOSED,
    CLOSING: WebSocket.CLOSING,
    CONNECTING: WebSocket.CONNECTING,
    OPEN: WebSocket.OPEN
  };
  async function c() {
    const _a649b6b33c42 = (await self.clients.matchAll({
      type: "\x77\x69\x6e\x64\x6f\x77",
      includeUncontrolled: !0
    })).map(async _a649b6b33c42 => {
      const _9dff4f5be31a = await function(_a649b6b33c42) {
        let _9dff4f5be31a = new MessageChannel;
        return new Promise(_6fb41bd045c5 => {
          _a649b6b33c42.postMessage({
            type: "\x67\x65\x74\x50\x6f\x72\x74",
            port: _9dff4f5be31a.port2
          }, [ _9dff4f5be31a.port2 ]), _9dff4f5be31a.port1.onmessage = _a649b6b33c42 => {
            _6fb41bd045c5(_a649b6b33c42.data);
          };
        });
      }(_a649b6b33c42);
      return await i(_9dff4f5be31a), _9dff4f5be31a;
    }), _9dff4f5be31a = Promise.race([ Promise.any(_a649b6b33c42), new Promise((_a649b6b33c42, _9dff4f5be31a) => setTimeout(_9dff4f5be31a, 1e3, new TypeError("\x74\x69\x6d\x65\x6f\x75\x74"))) ]);
    try {
      return await _9dff4f5be31a;
    } catch (_a649b6b33c42) {
      if (_a649b6b33c42 instanceof AggregateError) throw console.error("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x61\x73\x20\x61\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e"), 
      new Error("\x41\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e", {
        cause: _a649b6b33c42
      });
      return console.warn("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x77\x69\x74\x68\x69\x6e\x20\x31\x73\x2c\x20\x72\x65\x74\x72\x79\x69\x6e\x67"), 
      await c();
    }
  }
  function i(_a649b6b33c42) {
    const _9dff4f5be31a = new MessageChannel, _6fb41bd045c5 = new Promise((_a649b6b33c42, _6fb41bd045c5) => {
      _9dff4f5be31a.port1.onmessage = _9dff4f5be31a => {
        "\x70\x6f\x6e\x67" === _9dff4f5be31a.data.type && _a649b6b33c42();
      }, setTimeout(_6fb41bd045c5, 1500);
    });
    return _f04ba7d8cd43.call(_a649b6b33c42, {
      message: {
        type: "\x70\x69\x6e\x67"
      },
      port: _9dff4f5be31a.port2
    }, [ _9dff4f5be31a.port2 ]), _6fb41bd045c5;
  }
  function l(_a649b6b33c42, _9dff4f5be31a) {
    const _1168cbe09a33 = new _6fb41bd045c5(_a649b6b33c42, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
    return _9dff4f5be31a && _c6e68ca74fc3.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", _9dff4f5be31a => {
      if ("\x67\x65\x74\x50\x6f\x72\x74" === _9dff4f5be31a.data.type && _9dff4f5be31a.data.port) {
        console.debug("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x72\x65\x63\x69\x65\x76\x65\x64\x20\x72\x65\x71\x75\x65\x73\x74\x20\x66\x6f\x72\x20\x70\x6f\x72\x74\x20\x66\x72\x6f\x6d\x20\x73\x77");
        const _1168cbe09a33 = new _6fb41bd045c5(_a649b6b33c42, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
        _f04ba7d8cd43.call(_9dff4f5be31a.data.port, _1168cbe09a33.port, [ _1168cbe09a33.port ]);
      }
    }), _1168cbe09a33.port;
  }
  let _f76a0938c990 = null;
  function d() {
    if (null === _f76a0938c990) {
      const _a649b6b33c42 = new MessageChannel, _9dff4f5be31a = new ReadableStream;
      let _6fb41bd045c5;
      try {
        _f04ba7d8cd43.call(_a649b6b33c42.port1, _9dff4f5be31a, [ _9dff4f5be31a ]), _6fb41bd045c5 = !0;
      } catch (_a649b6b33c42) {
        _6fb41bd045c5 = !1;
      }
      return _f76a0938c990 = _6fb41bd045c5, _6fb41bd045c5;
    }
    return _f76a0938c990;
  }
  class p {
    channel;
    port;
    workerPath;
    constructor(_a649b6b33c42) {
      this.channel = new BroadcastChannel("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78"), _a649b6b33c42 instanceof MessagePort || _a649b6b33c42 instanceof Promise ? this.port = _a649b6b33c42 : this.createChannel(_a649b6b33c42, !0);
    }
    createChannel(_a649b6b33c42, _9dff4f5be31a) {
      if (self.clients) this.port = c(), this.channel.onmessage = _a649b6b33c42 => {
        "\x72\x65\x66\x72\x65\x73\x68\x50\x6f\x72\x74" === _a649b6b33c42.data.type && (this.port = c());
      }; else if (_a649b6b33c42 && SharedWorker) {
        if (!_a649b6b33c42.startsWith("\x2f") && !_a649b6b33c42.includes("\x3a")) throw new Error("\x49\x6e\x76\x61\x6c\x69\x64\x20\x55\x52\x4c\x2e\x20\x4d\x75\x73\x74\x20\x62\x65\x20\x61\x62\x73\x6f\x6c\x75\x74\x65\x20\x6f\x72\x20\x73\x74\x61\x72\x74\x20\x61\x74\x20\x74\x68\x65\x20\x72\x6f\x6f\x74\x2e");
        this.port = l(_a649b6b33c42, _9dff4f5be31a), console.debug("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x73\x65\x74\x74\x69\x6e\x67\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x20\x74\x6f", _a649b6b33c42), 
        _1168cbe09a33["\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"] = _a649b6b33c42;
      } else {
        if (!SharedWorker) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x63\x68\x61\x6e\x6e\x65\x6c\x20\x74\x6f\x20\x74\x68\x65\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x2e");
        {
          const _a649b6b33c42 = _1168cbe09a33["\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"];
          if (console.debug("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x67\x6f\x74\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x3a", _a649b6b33c42), !_a649b6b33c42) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x20\x77\x6f\x72\x6b\x65\x72\x50\x61\x74\x68\x20\x66\x72\x6f\x6d\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x2e");
          this.port = l(_a649b6b33c42, _9dff4f5be31a);
        }
      }
    }
    async sendMessage(_a649b6b33c42, _9dff4f5be31a) {
      this.port instanceof Promise && (this.port = await this.port);
      try {
        await i(this.port);
      } catch {
        return console.warn("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x70\x69\x6e\x67\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x66\x72\x6f\x6d\x20\x74\x68\x65\x20\x77\x6f\x72\x6b\x65\x72\x20\x77\x69\x74\x68\x69\x6e\x20\x31\x2e\x35\x73\x2e\x20\x41\x73\x73\x75\x6d\x69\x6e\x67\x20\x70\x6f\x72\x74\x20\x69\x73\x20\x64\x65\x61\x64\x2e"), 
        this.createChannel(), await this.sendMessage(_a649b6b33c42, _9dff4f5be31a);
      }
      const _6fb41bd045c5 = new MessageChannel, _1168cbe09a33 = [ _6fb41bd045c5.port2, ..._9dff4f5be31a || [] ], _c6e68ca74fc3 = new Promise((_a649b6b33c42, _9dff4f5be31a) => {
        _6fb41bd045c5.port1.onmessage = _6fb41bd045c5 => {
          const _1168cbe09a33 = _6fb41bd045c5.data;
          "\x65\x72\x72\x6f\x72" === _1168cbe09a33.type ? _9dff4f5be31a(_1168cbe09a33.error) : _a649b6b33c42(_1168cbe09a33);
        };
      });
      return _f04ba7d8cd43.call(this.port, {
        message: _a649b6b33c42,
        port: _6fb41bd045c5.port2
      }, _1168cbe09a33), await _c6e68ca74fc3;
    }
  }
  class u extends EventTarget {
    protocols;
    url;
    readyState=_fde0d6fdcc16.CONNECTING;
    channel;
    constructor(_a649b6b33c42, _9dff4f5be31a = [], _6fb41bd045c5, _1168cbe09a33) {
      super(), this.protocols = _9dff4f5be31a, this.url = _a649b6b33c42.toString(), this.protocols = _9dff4f5be31a;
      const s = _a649b6b33c42 => {
        this.protocols = _a649b6b33c42, this.readyState = _fde0d6fdcc16.OPEN;
        const _9dff4f5be31a = new Event("\x6f\x70\x65\x6e");
        this.dispatchEvent(_9dff4f5be31a);
      }, o = async _a649b6b33c42 => {
        const _9dff4f5be31a = new MessageEvent("\x6d\x65\x73\x73\x61\x67\x65", {
          data: _a649b6b33c42
        });
        this.dispatchEvent(_9dff4f5be31a);
      }, c = (_a649b6b33c42, _9dff4f5be31a) => {
        this.readyState = _fde0d6fdcc16.CLOSED;
        const _6fb41bd045c5 = new CloseEvent("\x63\x6c\x6f\x73\x65", {
          code: _a649b6b33c42,
          reason: _9dff4f5be31a
        });
        this.dispatchEvent(_6fb41bd045c5);
      }, i = () => {
        this.readyState = _fde0d6fdcc16.CLOSED;
        const _a649b6b33c42 = new Event("\x65\x72\x72\x6f\x72");
        this.dispatchEvent(_a649b6b33c42);
      };
      this.channel = new MessageChannel, this.channel.port1.onmessage = _a649b6b33c42 => {
        "\x6f\x70\x65\x6e" === _a649b6b33c42.data.type ? s(_a649b6b33c42.data.args[0]) : "\x6d\x65\x73\x73\x61\x67\x65" === _a649b6b33c42.data.type ? o(_a649b6b33c42.data.args[0]) : "\x63\x6c\x6f\x73\x65" === _a649b6b33c42.data.type ? c(_a649b6b33c42.data.args[0], _a649b6b33c42.data.args[1]) : "\x65\x72\x72\x6f\x72" === _a649b6b33c42.data.type && i();
      }, _6fb41bd045c5.sendMessage({
        type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74",
        websocket: {
          url: _a649b6b33c42.toString(),
          protocols: _9dff4f5be31a,
          requestHeaders: _1168cbe09a33,
          channel: this.channel.port2
        }
      }, [ this.channel.port2 ]);
    }
    send(..._a649b6b33c42) {
      if (this.readyState === _fde0d6fdcc16.CONNECTING) throw new DOMException("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x65\x78\x65\x63\x75\x74\x65\x20\x27\x73\x65\x6e\x64\x27\x20\x6f\x6e\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x53\x74\x69\x6c\x6c\x20\x69\x6e\x20\x43\x4f\x4e\x4e\x45\x43\x54\x49\x4e\x47\x20\x73\x74\x61\x74\x65\x2e");
      let _9dff4f5be31a = _a649b6b33c42[0];
      _9dff4f5be31a.buffer && (_9dff4f5be31a = _9dff4f5be31a.buffer.slice(_9dff4f5be31a.byteOffset, _9dff4f5be31a.byteOffset + _9dff4f5be31a.byteLength)), 
      _f04ba7d8cd43.call(this.channel.port1, {
        type: "\x64\x61\x74\x61",
        data: _9dff4f5be31a
      }, _9dff4f5be31a instanceof ArrayBuffer ? [ _9dff4f5be31a ] : []);
    }
    close(_a649b6b33c42, _9dff4f5be31a) {
      _f04ba7d8cd43.call(this.channel.port1, {
        type: "\x63\x6c\x6f\x73\x65",
        closeCode: _a649b6b33c42,
        closeReason: _9dff4f5be31a
      });
    }
  }
  function w(_a649b6b33c42, _9dff4f5be31a, _6fb41bd045c5) {
    console.error(`\x65\x72\x72\x6f\x72\x20\x77\x68\x69\x6c\x65\x20\x70\x72\x6f\x63\x65\x73\x73\x69\x6e\x67\x20\x27${_6fb41bd045c5}\x27\x3a\x20`, _9dff4f5be31a), _a649b6b33c42.postMessage({
      type: "\x65\x72\x72\x6f\x72",
      error: _9dff4f5be31a
    });
  }
  function f(_a649b6b33c42) {
    for (let _9dff4f5be31a = 0; _9dff4f5be31a < _a649b6b33c42.length; _9dff4f5be31a++) {
      const _6fb41bd045c5 = _a649b6b33c42[_9dff4f5be31a];
      if (!"\x21\x23\x24\x25\x26\x27\x2a\x2b\x2d\x2e\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x5e\x5f\x60\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x7c\x7e".includes(_6fb41bd045c5)) return !1;
    }
    return !0;
  }
  const _ea2cbe596a49 = [ "\x77\x73\x3a", "\x77\x73\x73\x3a" ], _e42c71783ad4 = [ 101, 204, 205, 304 ], _472bfa6df2de = [ 301, 302, 303, 307, 308 ];
  class m {
    worker;
    constructor(_a649b6b33c42) {
      this.worker = new p(_a649b6b33c42);
    }
    createWebSocket(_a649b6b33c42, _9dff4f5be31a = [], _6fb41bd045c5, _1168cbe09a33) {
      try {
        _a649b6b33c42 = new URL(_a649b6b33c42);
      } catch (_9dff4f5be31a) {
        throw new DOMException(`\x46\x61\x69\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x20\x27${_a649b6b33c42}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
      }
      if (!_ea2cbe596a49.includes(_a649b6b33c42.protocol)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x27\x73\x20\x73\x63\x68\x65\x6d\x65\x20\x6d\x75\x73\x74\x20\x62\x65\x20\x65\x69\x74\x68\x65\x72\x20\x27\x77\x73\x27\x20\x6f\x72\x20\x27\x77\x73\x73\x27\x2e\x20\x27${_a649b6b33c42.protocol}\x27\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x6c\x6c\x6f\x77\x65\x64\x2e`);
      Array.isArray(_9dff4f5be31a) || (_9dff4f5be31a = [ _9dff4f5be31a ]), _9dff4f5be31a = _9dff4f5be31a.map(String);
      for (const _a649b6b33c42 of _9dff4f5be31a) if (!f(_a649b6b33c42)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x73\x75\x62\x70\x72\x6f\x74\x6f\x63\x6f\x6c\x20\x27${_a649b6b33c42}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
      _1168cbe09a33 = _1168cbe09a33 || {};
      return new u(_a649b6b33c42, _9dff4f5be31a, this.worker, _1168cbe09a33);
    }
    async fetch(_a649b6b33c42, _6fb41bd045c5) {
      const _1168cbe09a33 = new Request(_a649b6b33c42, _6fb41bd045c5), _c6e68ca74fc3 = _6fb41bd045c5?.headers || _1168cbe09a33.headers, _f04ba7d8cd43 = _c6e68ca74fc3 instanceof Headers ? Object.fromEntries(_c6e68ca74fc3) : _c6e68ca74fc3, _fde0d6fdcc16 = _1168cbe09a33.body;
      let _f76a0938c990 = new URL(_1168cbe09a33.url);
      if (_f76a0938c990.protocol.startsWith("\x62\x6c\x6f\x62\x3a")) {
        const _a649b6b33c42 = await _9dff4f5be31a(_f76a0938c990), _6fb41bd045c5 = new Response(_a649b6b33c42.body, _a649b6b33c42);
        return _6fb41bd045c5.rawHeaders = Object.fromEntries(_a649b6b33c42.headers), _6fb41bd045c5.rawResponse = {
          body: _a649b6b33c42.body,
          headers: Object.fromEntries(_a649b6b33c42.headers),
          status: _a649b6b33c42.status,
          statusText: _a649b6b33c42.statusText
        }, _6fb41bd045c5.finalURL = _f76a0938c990.toString(), _6fb41bd045c5;
      }
      for (let _a649b6b33c42 = 0; ;_a649b6b33c42++) {
        let _9dff4f5be31a = (await this.worker.sendMessage({
          type: "\x66\x65\x74\x63\x68",
          fetch: {
            remote: _f76a0938c990.toString(),
            method: _1168cbe09a33.method,
            headers: _f04ba7d8cd43,
            body: _fde0d6fdcc16 || void 0
          }
        }, _fde0d6fdcc16 ? [ _fde0d6fdcc16 ] : [])).fetch, _c6e68ca74fc3 = new Response(_e42c71783ad4.includes(_9dff4f5be31a.status) ? void 0 : _9dff4f5be31a.body, {
          headers: new Headers(_9dff4f5be31a.headers),
          status: _9dff4f5be31a.status,
          statusText: _9dff4f5be31a.statusText
        });
        _c6e68ca74fc3.rawHeaders = _9dff4f5be31a.headers, _c6e68ca74fc3.rawResponse = _9dff4f5be31a, 
        _c6e68ca74fc3.finalURL = _f76a0938c990.toString();
        const _ea2cbe596a49 = _6fb41bd045c5?.redirect || _1168cbe09a33.redirect;
        if (!_472bfa6df2de.includes(_c6e68ca74fc3.status)) return _c6e68ca74fc3;
        switch (_ea2cbe596a49) {
         case "\x66\x6f\x6c\x6c\x6f\x77":
          {
            const _9dff4f5be31a = _c6e68ca74fc3.headers.get("\x6c\x6f\x63\x61\x74\x69\x6f\x6e");
            if (20 > _a649b6b33c42 && null !== _9dff4f5be31a) {
              _f76a0938c990 = new URL(_9dff4f5be31a, _f76a0938c990);
              continue;
            }
            throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");
          }

         case "\x65\x72\x72\x6f\x72":
          throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");

         case "\x6d\x61\x6e\x75\x61\x6c":
          return _c6e68ca74fc3;
        }
      }
    }
  }
  console.debug("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x72\x75\x6e\x6e\x69\x6e\x67\x20\x76\x32\x2e\x31\x2e\x39\x20\x28\x62\x75\x69\x6c\x64\x20\x64\x63\x39\x64\x63\x36\x65\x29"), _a649b6b33c42.BareClient = m, 
  _a649b6b33c42.BookmuxConnection = class {
    worker;
    constructor(_a649b6b33c42) {
      this.worker = new p(_a649b6b33c42);
    }
    async getTransport() {
      return (await this.worker.sendMessage({
        type: "\x67\x65\x74"
      })).name;
    }
    async setTransport(_a649b6b33c42, _9dff4f5be31a, _6fb41bd045c5) {
      await this.setManualTransport(`\x0a\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x7b\x20\x64\x65\x66\x61\x75\x6c\x74\x3a\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x7d\x20\x3d\x20\x61\x77\x61\x69\x74\x20\x69\x6d\x70\x6f\x72\x74\x28\x22${_a649b6b33c42}\x22\x29\x3b\x0a\x09\x09\x09\x72\x65\x74\x75\x72\x6e\x20\x5b\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2c\x20\x22${_a649b6b33c42}\x22\x5d\x3b\x0a\x09\x09`, _9dff4f5be31a, _6fb41bd045c5);
    }
    async setManualTransport(_a649b6b33c42, _9dff4f5be31a, _6fb41bd045c5) {
      if ("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65" === _a649b6b33c42) throw new Error("\x55\x73\x65\x20\x73\x65\x74\x52\x65\x6d\x6f\x74\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2e");
      await this.worker.sendMessage({
        type: "\x73\x65\x74",
        client: {
          function: _a649b6b33c42,
          args: _9dff4f5be31a
        }
      }, _6fb41bd045c5);
    }
    async setRemoteTransport(_a649b6b33c42, _9dff4f5be31a) {
      const _6fb41bd045c5 = new MessageChannel;
      _6fb41bd045c5.port1.onmessage = async _9dff4f5be31a => {
        const _6fb41bd045c5 = _9dff4f5be31a.data.port, _1168cbe09a33 = _9dff4f5be31a.data.message;
        if ("\x66\x65\x74\x63\x68" === _1168cbe09a33.type) try {
          _a649b6b33c42.ready || await _a649b6b33c42.init(), await async function(_a649b6b33c42, _9dff4f5be31a, _6fb41bd045c5) {
            const _1168cbe09a33 = await _6fb41bd045c5.request(new URL(_a649b6b33c42.fetch.remote), _a649b6b33c42.fetch.method, _a649b6b33c42.fetch.body, _a649b6b33c42.fetch.headers, null);
            if (!d() && _1168cbe09a33.body instanceof ReadableStream) {
              const _a649b6b33c42 = new Response(_1168cbe09a33.body);
              _1168cbe09a33.body = await _a649b6b33c42.arrayBuffer();
            }
            _1168cbe09a33.body instanceof ReadableStream || _1168cbe09a33.body instanceof ArrayBuffer ? _f04ba7d8cd43.call(_9dff4f5be31a, {
              type: "\x66\x65\x74\x63\x68",
              fetch: _1168cbe09a33
            }, [ _1168cbe09a33.body ]) : _f04ba7d8cd43.call(_9dff4f5be31a, {
              type: "\x66\x65\x74\x63\x68",
              fetch: _1168cbe09a33
            });
          }(_1168cbe09a33, _6fb41bd045c5, _a649b6b33c42);
        } catch (_a649b6b33c42) {
          w(_6fb41bd045c5, _a649b6b33c42, "\x66\x65\x74\x63\x68");
        } else if ("\x77\x65\x62\x73\x6f\x63\x6b\x65\x74" === _1168cbe09a33.type) try {
          _a649b6b33c42.ready || await _a649b6b33c42.init(), await async function(_a649b6b33c42, _9dff4f5be31a, _6fb41bd045c5) {
            const [_1168cbe09a33, _c6e68ca74fc3] = _6fb41bd045c5.connect(new URL(_a649b6b33c42.websocket.url), _a649b6b33c42.websocket.protocols, _a649b6b33c42.websocket.requestHeaders, _9dff4f5be31a => {
              _f04ba7d8cd43.call(_a649b6b33c42.websocket.channel, {
                type: "\x6f\x70\x65\x6e",
                args: [ _9dff4f5be31a ]
              });
            }, _9dff4f5be31a => {
              _9dff4f5be31a instanceof ArrayBuffer ? _f04ba7d8cd43.call(_a649b6b33c42.websocket.channel, {
                type: "\x6d\x65\x73\x73\x61\x67\x65",
                args: [ _9dff4f5be31a ]
              }, [ _9dff4f5be31a ]) : _f04ba7d8cd43.call(_a649b6b33c42.websocket.channel, {
                type: "\x6d\x65\x73\x73\x61\x67\x65",
                args: [ _9dff4f5be31a ]
              });
            }, (_9dff4f5be31a, _6fb41bd045c5) => {
              _f04ba7d8cd43.call(_a649b6b33c42.websocket.channel, {
                type: "\x63\x6c\x6f\x73\x65",
                args: [ _9dff4f5be31a, _6fb41bd045c5 ]
              });
            }, _9dff4f5be31a => {
              _f04ba7d8cd43.call(_a649b6b33c42.websocket.channel, {
                type: "\x65\x72\x72\x6f\x72",
                args: [ _9dff4f5be31a ]
              });
            });
            _a649b6b33c42.websocket.channel.onmessage = _a649b6b33c42 => {
              "\x64\x61\x74\x61" === _a649b6b33c42.data.type ? _1168cbe09a33(_a649b6b33c42.data.data) : "\x63\x6c\x6f\x73\x65" === _a649b6b33c42.data.type && _c6e68ca74fc3(_a649b6b33c42.data.closeCode, _a649b6b33c42.data.closeReason);
            }, _f04ba7d8cd43.call(_9dff4f5be31a, {
              type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74"
            });
          }(_1168cbe09a33, _6fb41bd045c5, _a649b6b33c42);
        } catch (_a649b6b33c42) {
          w(_6fb41bd045c5, _a649b6b33c42, "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74");
        }
      }, await this.worker.sendMessage({
        type: "\x73\x65\x74",
        client: {
          function: "\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65",
          args: [ _6fb41bd045c5.port2, _9dff4f5be31a ]
        }
      }, [ _6fb41bd045c5.port2 ]);
    }
    getInnerPort() {
      return this.worker.port;
    }
  }, _a649b6b33c42.BareWebSocket = u, _a649b6b33c42.WebSocketFields = _fde0d6fdcc16, 
  _a649b6b33c42.WorkerConnection = p, _a649b6b33c42.\u{62}\u{72}\u{6f}\u{77}\u{73}\u{65}\u{72}\u{53}\u{75}\u{70}\u{70}\u{6f}\u{72}\u{74}\u{73}\u{54}\u{72}\u{61}\u{6e}\u{73}\u{66}\u{65}\u{72}\u{72}\u{69}\u{6e}\u{67}\u{53}\u{74}\u{72}\u{65}\u{61}\u{6d}\u{73} = d, 
  _a649b6b33c42.default = m, _a649b6b33c42.maxRedirects = 20, _a649b6b33c42.validProtocol = f, 
  Object.defineProperty(_a649b6b33c42, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
    value: !0
  });
});
