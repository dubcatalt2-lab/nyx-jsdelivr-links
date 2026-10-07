!function(_e8bfafaa167b, _d0bf92ca7eb0) {
  "\x6f\x62\x6a\x65\x63\x74" == typeof exports && "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof module ? _d0bf92ca7eb0(exports) : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof define && define.amd ? define([ "\x65\x78\x70\x6f\x72\x74\x73" ], _d0bf92ca7eb0) : _d0bf92ca7eb0((_e8bfafaa167b = "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof globalThis ? globalThis : _e8bfafaa167b || self).\u{42}\u{61}\u{72}\u{65}\u{4d}\u{75}\u{78} = {});
}(this, function(_e8bfafaa167b) {
  "use strict";
  const _d0bf92ca7eb0 = globalThis.fetch, _df03456cae9e = globalThis.SharedWorker, _c101eff41d77 = globalThis.localStorage, _59192821b622 = globalThis.navigator.serviceWorker, _46d44ce3c139 = MessagePort.prototype.postMessage, _e42eb7e507f6 = {
    prototype: {
      send: WebSocket.prototype.send
    },
    CLOSED: WebSocket.CLOSED,
    CLOSING: WebSocket.CLOSING,
    CONNECTING: WebSocket.CONNECTING,
    OPEN: WebSocket.OPEN
  };
  async function c() {
    const _e8bfafaa167b = (await self.clients.matchAll({
      type: "\x77\x69\x6e\x64\x6f\x77",
      includeUncontrolled: !0
    })).map(async _e8bfafaa167b => {
      const _d0bf92ca7eb0 = await function(_e8bfafaa167b) {
        let _d0bf92ca7eb0 = new MessageChannel;
        return new Promise(_df03456cae9e => {
          _e8bfafaa167b.postMessage({
            type: "\x67\x65\x74\x50\x6f\x72\x74",
            port: _d0bf92ca7eb0.port2
          }, [ _d0bf92ca7eb0.port2 ]), _d0bf92ca7eb0.port1.onmessage = _e8bfafaa167b => {
            _df03456cae9e(_e8bfafaa167b.data);
          };
        });
      }(_e8bfafaa167b);
      return await i(_d0bf92ca7eb0), _d0bf92ca7eb0;
    }), _d0bf92ca7eb0 = Promise.race([ Promise.any(_e8bfafaa167b), new Promise((_e8bfafaa167b, _d0bf92ca7eb0) => setTimeout(_d0bf92ca7eb0, 1e3, new TypeError("\x74\x69\x6d\x65\x6f\x75\x74"))) ]);
    try {
      return await _d0bf92ca7eb0;
    } catch (_e8bfafaa167b) {
      if (_e8bfafaa167b instanceof AggregateError) throw console.error("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x61\x73\x20\x61\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e"), 
      new Error("\x41\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e", {
        cause: _e8bfafaa167b
      });
      return console.warn("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x77\x69\x74\x68\x69\x6e\x20\x31\x73\x2c\x20\x72\x65\x74\x72\x79\x69\x6e\x67"), 
      await c();
    }
  }
  function i(_e8bfafaa167b) {
    const _d0bf92ca7eb0 = new MessageChannel, _df03456cae9e = new Promise((_e8bfafaa167b, _df03456cae9e) => {
      _d0bf92ca7eb0.port1.onmessage = _d0bf92ca7eb0 => {
        "\x70\x6f\x6e\x67" === _d0bf92ca7eb0.data.type && _e8bfafaa167b();
      }, setTimeout(_df03456cae9e, 1500);
    });
    return _46d44ce3c139.call(_e8bfafaa167b, {
      message: {
        type: "\x70\x69\x6e\x67"
      },
      port: _d0bf92ca7eb0.port2
    }, [ _d0bf92ca7eb0.port2 ]), _df03456cae9e;
  }
  function l(_e8bfafaa167b, _d0bf92ca7eb0) {
    const _c101eff41d77 = new _df03456cae9e(_e8bfafaa167b, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
    return _d0bf92ca7eb0 && _59192821b622.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", _d0bf92ca7eb0 => {
      if ("\x67\x65\x74\x50\x6f\x72\x74" === _d0bf92ca7eb0.data.type && _d0bf92ca7eb0.data.port) {
        console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x72\x65\x63\x69\x65\x76\x65\x64\x20\x72\x65\x71\x75\x65\x73\x74\x20\x66\x6f\x72\x20\x70\x6f\x72\x74\x20\x66\x72\x6f\x6d\x20\x73\x77");
        const _c101eff41d77 = new _df03456cae9e(_e8bfafaa167b, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
        _46d44ce3c139.call(_d0bf92ca7eb0.data.port, _c101eff41d77.port, [ _c101eff41d77.port ]);
      }
    }), _c101eff41d77.port;
  }
  let _bcfa2b7a1f1d = null;
  function d() {
    if (null === _bcfa2b7a1f1d) {
      const _e8bfafaa167b = new MessageChannel, _d0bf92ca7eb0 = new ReadableStream;
      let _df03456cae9e;
      try {
        _46d44ce3c139.call(_e8bfafaa167b.port1, _d0bf92ca7eb0, [ _d0bf92ca7eb0 ]), _df03456cae9e = !0;
      } catch (_e8bfafaa167b) {
        _df03456cae9e = !1;
      }
      return _bcfa2b7a1f1d = _df03456cae9e, _df03456cae9e;
    }
    return _bcfa2b7a1f1d;
  }
  class p {
    channel;
    port;
    workerPath;
    constructor(_e8bfafaa167b) {
      this.channel = new BroadcastChannel("\x62\x61\x72\x65\x2d\x6d\x75\x78"), _e8bfafaa167b instanceof MessagePort || _e8bfafaa167b instanceof Promise ? this.port = _e8bfafaa167b : this.createChannel(_e8bfafaa167b, !0);
    }
    createChannel(_e8bfafaa167b, _d0bf92ca7eb0) {
      if (self.clients) this.port = c(), this.channel.onmessage = _e8bfafaa167b => {
        "\x72\x65\x66\x72\x65\x73\x68\x50\x6f\x72\x74" === _e8bfafaa167b.data.type && (this.port = c());
      }; else if (_e8bfafaa167b && SharedWorker) {
        if (!_e8bfafaa167b.startsWith("\x2f") && !_e8bfafaa167b.includes("\x3a")) throw new Error("\x49\x6e\x76\x61\x6c\x69\x64\x20\x55\x52\x4c\x2e\x20\x4d\x75\x73\x74\x20\x62\x65\x20\x61\x62\x73\x6f\x6c\x75\x74\x65\x20\x6f\x72\x20\x73\x74\x61\x72\x74\x20\x61\x74\x20\x74\x68\x65\x20\x72\x6f\x6f\x74\x2e");
        this.port = l(_e8bfafaa167b, _d0bf92ca7eb0), console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x73\x65\x74\x74\x69\x6e\x67\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x20\x74\x6f", _e8bfafaa167b), 
        _c101eff41d77["\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"] = _e8bfafaa167b;
      } else {
        if (!SharedWorker) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x63\x68\x61\x6e\x6e\x65\x6c\x20\x74\x6f\x20\x74\x68\x65\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x2e");
        {
          const _e8bfafaa167b = _c101eff41d77["\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"];
          if (console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x67\x6f\x74\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x3a", _e8bfafaa167b), !_e8bfafaa167b) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x20\x77\x6f\x72\x6b\x65\x72\x50\x61\x74\x68\x20\x66\x72\x6f\x6d\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x2e");
          this.port = l(_e8bfafaa167b, _d0bf92ca7eb0);
        }
      }
    }
    async sendMessage(_e8bfafaa167b, _d0bf92ca7eb0) {
      this.port instanceof Promise && (this.port = await this.port);
      try {
        await i(this.port);
      } catch {
        return console.warn("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x70\x69\x6e\x67\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x66\x72\x6f\x6d\x20\x74\x68\x65\x20\x77\x6f\x72\x6b\x65\x72\x20\x77\x69\x74\x68\x69\x6e\x20\x31\x2e\x35\x73\x2e\x20\x41\x73\x73\x75\x6d\x69\x6e\x67\x20\x70\x6f\x72\x74\x20\x69\x73\x20\x64\x65\x61\x64\x2e"), 
        this.createChannel(), await this.sendMessage(_e8bfafaa167b, _d0bf92ca7eb0);
      }
      const _df03456cae9e = new MessageChannel, _c101eff41d77 = [ _df03456cae9e.port2, ..._d0bf92ca7eb0 || [] ], _59192821b622 = new Promise((_e8bfafaa167b, _d0bf92ca7eb0) => {
        _df03456cae9e.port1.onmessage = _df03456cae9e => {
          const _c101eff41d77 = _df03456cae9e.data;
          "\x65\x72\x72\x6f\x72" === _c101eff41d77.type ? _d0bf92ca7eb0(_c101eff41d77.error) : _e8bfafaa167b(_c101eff41d77);
        };
      });
      return _46d44ce3c139.call(this.port, {
        message: _e8bfafaa167b,
        port: _df03456cae9e.port2
      }, _c101eff41d77), await _59192821b622;
    }
  }
  class u extends EventTarget {
    protocols;
    url;
    readyState=_e42eb7e507f6.CONNECTING;
    channel;
    constructor(_e8bfafaa167b, _d0bf92ca7eb0 = [], _df03456cae9e, _c101eff41d77) {
      super(), this.protocols = _d0bf92ca7eb0, this.url = _e8bfafaa167b.toString(), this.protocols = _d0bf92ca7eb0;
      const s = _e8bfafaa167b => {
        this.protocols = _e8bfafaa167b, this.readyState = _e42eb7e507f6.OPEN;
        const _d0bf92ca7eb0 = new Event("\x6f\x70\x65\x6e");
        this.dispatchEvent(_d0bf92ca7eb0);
      }, o = async _e8bfafaa167b => {
        const _d0bf92ca7eb0 = new MessageEvent("\x6d\x65\x73\x73\x61\x67\x65", {
          data: _e8bfafaa167b
        });
        this.dispatchEvent(_d0bf92ca7eb0);
      }, c = (_e8bfafaa167b, _d0bf92ca7eb0) => {
        this.readyState = _e42eb7e507f6.CLOSED;
        const _df03456cae9e = new CloseEvent("\x63\x6c\x6f\x73\x65", {
          code: _e8bfafaa167b,
          reason: _d0bf92ca7eb0
        });
        this.dispatchEvent(_df03456cae9e);
      }, i = () => {
        this.readyState = _e42eb7e507f6.CLOSED;
        const _e8bfafaa167b = new Event("\x65\x72\x72\x6f\x72");
        this.dispatchEvent(_e8bfafaa167b);
      };
      this.channel = new MessageChannel, this.channel.port1.onmessage = _e8bfafaa167b => {
        "\x6f\x70\x65\x6e" === _e8bfafaa167b.data.type ? s(_e8bfafaa167b.data.args[0]) : "\x6d\x65\x73\x73\x61\x67\x65" === _e8bfafaa167b.data.type ? o(_e8bfafaa167b.data.args[0]) : "\x63\x6c\x6f\x73\x65" === _e8bfafaa167b.data.type ? c(_e8bfafaa167b.data.args[0], _e8bfafaa167b.data.args[1]) : "\x65\x72\x72\x6f\x72" === _e8bfafaa167b.data.type && i();
      }, _df03456cae9e.sendMessage({
        type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74",
        websocket: {
          url: _e8bfafaa167b.toString(),
          protocols: _d0bf92ca7eb0,
          requestHeaders: _c101eff41d77,
          channel: this.channel.port2
        }
      }, [ this.channel.port2 ]);
    }
    send(..._e8bfafaa167b) {
      if (this.readyState === _e42eb7e507f6.CONNECTING) throw new DOMException("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x65\x78\x65\x63\x75\x74\x65\x20\x27\x73\x65\x6e\x64\x27\x20\x6f\x6e\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x53\x74\x69\x6c\x6c\x20\x69\x6e\x20\x43\x4f\x4e\x4e\x45\x43\x54\x49\x4e\x47\x20\x73\x74\x61\x74\x65\x2e");
      let _d0bf92ca7eb0 = _e8bfafaa167b[0];
      _d0bf92ca7eb0.buffer && (_d0bf92ca7eb0 = _d0bf92ca7eb0.buffer.slice(_d0bf92ca7eb0.byteOffset, _d0bf92ca7eb0.byteOffset + _d0bf92ca7eb0.byteLength)), 
      _46d44ce3c139.call(this.channel.port1, {
        type: "\x64\x61\x74\x61",
        data: _d0bf92ca7eb0
      }, _d0bf92ca7eb0 instanceof ArrayBuffer ? [ _d0bf92ca7eb0 ] : []);
    }
    close(_e8bfafaa167b, _d0bf92ca7eb0) {
      _46d44ce3c139.call(this.channel.port1, {
        type: "\x63\x6c\x6f\x73\x65",
        closeCode: _e8bfafaa167b,
        closeReason: _d0bf92ca7eb0
      });
    }
  }
  function w(_e8bfafaa167b, _d0bf92ca7eb0, _df03456cae9e) {
    console.error(`\x65\x72\x72\x6f\x72\x20\x77\x68\x69\x6c\x65\x20\x70\x72\x6f\x63\x65\x73\x73\x69\x6e\x67\x20\x27${_df03456cae9e}\x27\x3a\x20`, _d0bf92ca7eb0), _e8bfafaa167b.postMessage({
      type: "\x65\x72\x72\x6f\x72",
      error: _d0bf92ca7eb0
    });
  }
  function f(_e8bfafaa167b) {
    for (let _d0bf92ca7eb0 = 0; _d0bf92ca7eb0 < _e8bfafaa167b.length; _d0bf92ca7eb0++) {
      const _df03456cae9e = _e8bfafaa167b[_d0bf92ca7eb0];
      if (!"\x21\x23\x24\x25\x26\x27\x2a\x2b\x2d\x2e\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x5e\x5f\x60\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x7c\x7e".includes(_df03456cae9e)) return !1;
    }
    return !0;
  }
  const _a03ac4f0040e = [ "\x77\x73\x3a", "\x77\x73\x73\x3a" ], _2793759adca3 = [ 101, 204, 205, 304 ], _9b358f28a3fd = [ 301, 302, 303, 307, 308 ];
  class m {
    worker;
    constructor(_e8bfafaa167b) {
      this.worker = new p(_e8bfafaa167b);
    }
    createWebSocket(_e8bfafaa167b, _d0bf92ca7eb0 = [], _df03456cae9e, _c101eff41d77) {
      try {
        _e8bfafaa167b = new URL(_e8bfafaa167b);
      } catch (_d0bf92ca7eb0) {
        throw new DOMException(`\x46\x61\x69\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x20\x27${_e8bfafaa167b}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
      }
      if (!_a03ac4f0040e.includes(_e8bfafaa167b.protocol)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x27\x73\x20\x73\x63\x68\x65\x6d\x65\x20\x6d\x75\x73\x74\x20\x62\x65\x20\x65\x69\x74\x68\x65\x72\x20\x27\x77\x73\x27\x20\x6f\x72\x20\x27\x77\x73\x73\x27\x2e\x20\x27${_e8bfafaa167b.protocol}\x27\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x6c\x6c\x6f\x77\x65\x64\x2e`);
      Array.isArray(_d0bf92ca7eb0) || (_d0bf92ca7eb0 = [ _d0bf92ca7eb0 ]), _d0bf92ca7eb0 = _d0bf92ca7eb0.map(String);
      for (const _e8bfafaa167b of _d0bf92ca7eb0) if (!f(_e8bfafaa167b)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x73\x75\x62\x70\x72\x6f\x74\x6f\x63\x6f\x6c\x20\x27${_e8bfafaa167b}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
      _c101eff41d77 = _c101eff41d77 || {};
      return new u(_e8bfafaa167b, _d0bf92ca7eb0, this.worker, _c101eff41d77);
    }
    async fetch(_e8bfafaa167b, _df03456cae9e) {
      const _c101eff41d77 = new Request(_e8bfafaa167b, _df03456cae9e), _59192821b622 = _df03456cae9e?.headers || _c101eff41d77.headers, _46d44ce3c139 = _59192821b622 instanceof Headers ? Object.fromEntries(_59192821b622) : _59192821b622, _e42eb7e507f6 = _c101eff41d77.body;
      let _bcfa2b7a1f1d = new URL(_c101eff41d77.url);
      if (_bcfa2b7a1f1d.protocol.startsWith("\x62\x6c\x6f\x62\x3a")) {
        const _e8bfafaa167b = await _d0bf92ca7eb0(_bcfa2b7a1f1d), _df03456cae9e = new Response(_e8bfafaa167b.body, _e8bfafaa167b);
        return _df03456cae9e.rawHeaders = Object.fromEntries(_e8bfafaa167b.headers), _df03456cae9e.rawResponse = {
          body: _e8bfafaa167b.body,
          headers: Object.fromEntries(_e8bfafaa167b.headers),
          status: _e8bfafaa167b.status,
          statusText: _e8bfafaa167b.statusText
        }, _df03456cae9e.finalURL = _bcfa2b7a1f1d.toString(), _df03456cae9e;
      }
      for (let _e8bfafaa167b = 0; ;_e8bfafaa167b++) {
        let _d0bf92ca7eb0 = (await this.worker.sendMessage({
          type: "\x66\x65\x74\x63\x68",
          fetch: {
            remote: _bcfa2b7a1f1d.toString(),
            method: _c101eff41d77.method,
            headers: _46d44ce3c139,
            body: _e42eb7e507f6 || void 0
          }
        }, _e42eb7e507f6 ? [ _e42eb7e507f6 ] : [])).fetch, _59192821b622 = new Response(_2793759adca3.includes(_d0bf92ca7eb0.status) ? void 0 : _d0bf92ca7eb0.body, {
          headers: new Headers(_d0bf92ca7eb0.headers),
          status: _d0bf92ca7eb0.status,
          statusText: _d0bf92ca7eb0.statusText
        });
        _59192821b622.rawHeaders = _d0bf92ca7eb0.headers, _59192821b622.rawResponse = _d0bf92ca7eb0, 
        _59192821b622.finalURL = _bcfa2b7a1f1d.toString();
        const _a03ac4f0040e = _df03456cae9e?.redirect || _c101eff41d77.redirect;
        if (!_9b358f28a3fd.includes(_59192821b622.status)) return _59192821b622;
        switch (_a03ac4f0040e) {
         case "\x66\x6f\x6c\x6c\x6f\x77":
          {
            const _d0bf92ca7eb0 = _59192821b622.headers.get("\x6c\x6f\x63\x61\x74\x69\x6f\x6e");
            if (20 > _e8bfafaa167b && null !== _d0bf92ca7eb0) {
              _bcfa2b7a1f1d = new URL(_d0bf92ca7eb0, _bcfa2b7a1f1d);
              continue;
            }
            throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");
          }

         case "\x65\x72\x72\x6f\x72":
          throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");

         case "\x6d\x61\x6e\x75\x61\x6c":
          return _59192821b622;
        }
      }
    }
  }
  console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x72\x75\x6e\x6e\x69\x6e\x67\x20\x76\x32\x2e\x31\x2e\x39\x20\x28\x62\x75\x69\x6c\x64\x20\x64\x63\x39\x64\x63\x36\x65\x29"), _e8bfafaa167b.BareClient = m, 
  _e8bfafaa167b.\u{42}\u{61}\u{72}\u{65}\u{4d}\u{75}\u{78}\u{43}\u{6f}\u{6e}\u{6e}\u{65}\u{63}\u{74}\u{69}\u{6f}\u{6e} = class {
    worker;
    constructor(_e8bfafaa167b) {
      this.worker = new p(_e8bfafaa167b);
    }
    async getTransport() {
      return (await this.worker.sendMessage({
        type: "\x67\x65\x74"
      })).name;
    }
    async setTransport(_e8bfafaa167b, _d0bf92ca7eb0, _df03456cae9e) {
      await this.setManualTransport(`\x0a\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x7b\x20\x64\x65\x66\x61\x75\x6c\x74\x3a\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x7d\x20\x3d\x20\x61\x77\x61\x69\x74\x20\x69\x6d\x70\x6f\x72\x74\x28\x22${_e8bfafaa167b}\x22\x29\x3b\x0a\x09\x09\x09\x72\x65\x74\x75\x72\x6e\x20\x5b\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2c\x20\x22${_e8bfafaa167b}\x22\x5d\x3b\x0a\x09\x09`, _d0bf92ca7eb0, _df03456cae9e);
    }
    async setManualTransport(_e8bfafaa167b, _d0bf92ca7eb0, _df03456cae9e) {
      if ("\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65" === _e8bfafaa167b) throw new Error("\x55\x73\x65\x20\x73\x65\x74\x52\x65\x6d\x6f\x74\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2e");
      await this.worker.sendMessage({
        type: "\x73\x65\x74",
        client: {
          function: _e8bfafaa167b,
          args: _d0bf92ca7eb0
        }
      }, _df03456cae9e);
    }
    async setRemoteTransport(_e8bfafaa167b, _d0bf92ca7eb0) {
      const _df03456cae9e = new MessageChannel;
      _df03456cae9e.port1.onmessage = async _d0bf92ca7eb0 => {
        const _df03456cae9e = _d0bf92ca7eb0.data.port, _c101eff41d77 = _d0bf92ca7eb0.data.message;
        if ("\x66\x65\x74\x63\x68" === _c101eff41d77.type) try {
          _e8bfafaa167b.ready || await _e8bfafaa167b.init(), await async function(_e8bfafaa167b, _d0bf92ca7eb0, _df03456cae9e) {
            const _c101eff41d77 = await _df03456cae9e.request(new URL(_e8bfafaa167b.fetch.remote), _e8bfafaa167b.fetch.method, _e8bfafaa167b.fetch.body, _e8bfafaa167b.fetch.headers, null);
            if (!d() && _c101eff41d77.body instanceof ReadableStream) {
              const _e8bfafaa167b = new Response(_c101eff41d77.body);
              _c101eff41d77.body = await _e8bfafaa167b.arrayBuffer();
            }
            _c101eff41d77.body instanceof ReadableStream || _c101eff41d77.body instanceof ArrayBuffer ? _46d44ce3c139.call(_d0bf92ca7eb0, {
              type: "\x66\x65\x74\x63\x68",
              fetch: _c101eff41d77
            }, [ _c101eff41d77.body ]) : _46d44ce3c139.call(_d0bf92ca7eb0, {
              type: "\x66\x65\x74\x63\x68",
              fetch: _c101eff41d77
            });
          }(_c101eff41d77, _df03456cae9e, _e8bfafaa167b);
        } catch (_e8bfafaa167b) {
          w(_df03456cae9e, _e8bfafaa167b, "\x66\x65\x74\x63\x68");
        } else if ("\x77\x65\x62\x73\x6f\x63\x6b\x65\x74" === _c101eff41d77.type) try {
          _e8bfafaa167b.ready || await _e8bfafaa167b.init(), await async function(_e8bfafaa167b, _d0bf92ca7eb0, _df03456cae9e) {
            const [_c101eff41d77, _59192821b622] = _df03456cae9e.connect(new URL(_e8bfafaa167b.websocket.url), _e8bfafaa167b.websocket.protocols, _e8bfafaa167b.websocket.requestHeaders, _d0bf92ca7eb0 => {
              _46d44ce3c139.call(_e8bfafaa167b.websocket.channel, {
                type: "\x6f\x70\x65\x6e",
                args: [ _d0bf92ca7eb0 ]
              });
            }, _d0bf92ca7eb0 => {
              _d0bf92ca7eb0 instanceof ArrayBuffer ? _46d44ce3c139.call(_e8bfafaa167b.websocket.channel, {
                type: "\x6d\x65\x73\x73\x61\x67\x65",
                args: [ _d0bf92ca7eb0 ]
              }, [ _d0bf92ca7eb0 ]) : _46d44ce3c139.call(_e8bfafaa167b.websocket.channel, {
                type: "\x6d\x65\x73\x73\x61\x67\x65",
                args: [ _d0bf92ca7eb0 ]
              });
            }, (_d0bf92ca7eb0, _df03456cae9e) => {
              _46d44ce3c139.call(_e8bfafaa167b.websocket.channel, {
                type: "\x63\x6c\x6f\x73\x65",
                args: [ _d0bf92ca7eb0, _df03456cae9e ]
              });
            }, _d0bf92ca7eb0 => {
              _46d44ce3c139.call(_e8bfafaa167b.websocket.channel, {
                type: "\x65\x72\x72\x6f\x72",
                args: [ _d0bf92ca7eb0 ]
              });
            });
            _e8bfafaa167b.websocket.channel.onmessage = _e8bfafaa167b => {
              "\x64\x61\x74\x61" === _e8bfafaa167b.data.type ? _c101eff41d77(_e8bfafaa167b.data.data) : "\x63\x6c\x6f\x73\x65" === _e8bfafaa167b.data.type && _59192821b622(_e8bfafaa167b.data.closeCode, _e8bfafaa167b.data.closeReason);
            }, _46d44ce3c139.call(_d0bf92ca7eb0, {
              type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74"
            });
          }(_c101eff41d77, _df03456cae9e, _e8bfafaa167b);
        } catch (_e8bfafaa167b) {
          w(_df03456cae9e, _e8bfafaa167b, "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74");
        }
      }, await this.worker.sendMessage({
        type: "\x73\x65\x74",
        client: {
          function: "\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65",
          args: [ _df03456cae9e.port2, _d0bf92ca7eb0 ]
        }
      }, [ _df03456cae9e.port2 ]);
    }
    getInnerPort() {
      return this.worker.port;
    }
  }, _e8bfafaa167b.BareWebSocket = u, _e8bfafaa167b.WebSocketFields = _e42eb7e507f6, 
  _e8bfafaa167b.WorkerConnection = p, _e8bfafaa167b.\u{62}\u{72}\u{6f}\u{77}\u{73}\u{65}\u{72}\u{53}\u{75}\u{70}\u{70}\u{6f}\u{72}\u{74}\u{73}\u{54}\u{72}\u{61}\u{6e}\u{73}\u{66}\u{65}\u{72}\u{72}\u{69}\u{6e}\u{67}\u{53}\u{74}\u{72}\u{65}\u{61}\u{6d}\u{73} = d, 
  _e8bfafaa167b.default = m, _e8bfafaa167b.maxRedirects = 20, _e8bfafaa167b.validProtocol = f, 
  Object.defineProperty(_e8bfafaa167b, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
    value: !0
  });
});
