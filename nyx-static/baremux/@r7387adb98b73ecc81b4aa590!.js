!function(_a9a1d7f1a590, _3fabe7240b7d) {
  "\x6f\x62\x6a\x65\x63\x74" == typeof exports && "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof module ? _3fabe7240b7d(exports) : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof define && define.amd ? define([ "\x65\x78\x70\x6f\x72\x74\x73" ], _3fabe7240b7d) : _3fabe7240b7d((_a9a1d7f1a590 = "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof globalThis ? globalThis : _a9a1d7f1a590 || self).\u{42}\u{61}\u{72}\u{65}\u{4d}\u{75}\u{78} = {});
}(this, function(_a9a1d7f1a590) {
  "use strict";
  const _3fabe7240b7d = globalThis.fetch, _ab9ec385e261 = globalThis.SharedWorker, _5b7279ca6f1f = globalThis.localStorage, _3fd44a3ee28b = globalThis.navigator.serviceWorker, _930ad879a3e5 = MessagePort.prototype.postMessage, _f4ce78dec56a = {
    prototype: {
      send: WebSocket.prototype.send
    },
    CLOSED: WebSocket.CLOSED,
    CLOSING: WebSocket.CLOSING,
    CONNECTING: WebSocket.CONNECTING,
    OPEN: WebSocket.OPEN
  };
  async function c() {
    const _a9a1d7f1a590 = (await self.clients.matchAll({
      type: "\x77\x69\x6e\x64\x6f\x77",
      includeUncontrolled: !0
    })).map(async _a9a1d7f1a590 => {
      const _3fabe7240b7d = await function(_a9a1d7f1a590) {
        let _3fabe7240b7d = new MessageChannel;
        return new Promise(_ab9ec385e261 => {
          _a9a1d7f1a590.postMessage({
            type: "\x67\x65\x74\x50\x6f\x72\x74",
            port: _3fabe7240b7d.port2
          }, [ _3fabe7240b7d.port2 ]), _3fabe7240b7d.port1.onmessage = _a9a1d7f1a590 => {
            _ab9ec385e261(_a9a1d7f1a590.data);
          };
        });
      }(_a9a1d7f1a590);
      return await i(_3fabe7240b7d), _3fabe7240b7d;
    }), _3fabe7240b7d = Promise.race([ Promise.any(_a9a1d7f1a590), new Promise((_a9a1d7f1a590, _3fabe7240b7d) => setTimeout(_3fabe7240b7d, 1e3, new TypeError("\x74\x69\x6d\x65\x6f\x75\x74"))) ]);
    try {
      return await _3fabe7240b7d;
    } catch (_a9a1d7f1a590) {
      if (_a9a1d7f1a590 instanceof AggregateError) throw console.error("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x61\x73\x20\x61\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e"), 
      new Error("\x41\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e", {
        cause: _a9a1d7f1a590
      });
      return console.warn("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x77\x69\x74\x68\x69\x6e\x20\x31\x73\x2c\x20\x72\x65\x74\x72\x79\x69\x6e\x67"), 
      await c();
    }
  }
  function i(_a9a1d7f1a590) {
    const _3fabe7240b7d = new MessageChannel, _ab9ec385e261 = new Promise((_a9a1d7f1a590, _ab9ec385e261) => {
      _3fabe7240b7d.port1.onmessage = _3fabe7240b7d => {
        "\x70\x6f\x6e\x67" === _3fabe7240b7d.data.type && _a9a1d7f1a590();
      }, setTimeout(_ab9ec385e261, 1500);
    });
    return _930ad879a3e5.call(_a9a1d7f1a590, {
      message: {
        type: "\x70\x69\x6e\x67"
      },
      port: _3fabe7240b7d.port2
    }, [ _3fabe7240b7d.port2 ]), _ab9ec385e261;
  }
  function l(_a9a1d7f1a590, _3fabe7240b7d) {
    const _5b7279ca6f1f = new _ab9ec385e261(_a9a1d7f1a590, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
    return _3fabe7240b7d && _3fd44a3ee28b.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", _3fabe7240b7d => {
      if ("\x67\x65\x74\x50\x6f\x72\x74" === _3fabe7240b7d.data.type && _3fabe7240b7d.data.port) {
        console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x72\x65\x63\x69\x65\x76\x65\x64\x20\x72\x65\x71\x75\x65\x73\x74\x20\x66\x6f\x72\x20\x70\x6f\x72\x74\x20\x66\x72\x6f\x6d\x20\x73\x77");
        const _5b7279ca6f1f = new _ab9ec385e261(_a9a1d7f1a590, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
        _930ad879a3e5.call(_3fabe7240b7d.data.port, _5b7279ca6f1f.port, [ _5b7279ca6f1f.port ]);
      }
    }), _5b7279ca6f1f.port;
  }
  let _fcc0beae370b = null;
  function d() {
    if (null === _fcc0beae370b) {
      const _a9a1d7f1a590 = new MessageChannel, _3fabe7240b7d = new ReadableStream;
      let _ab9ec385e261;
      try {
        _930ad879a3e5.call(_a9a1d7f1a590.port1, _3fabe7240b7d, [ _3fabe7240b7d ]), _ab9ec385e261 = !0;
      } catch (_a9a1d7f1a590) {
        _ab9ec385e261 = !1;
      }
      return _fcc0beae370b = _ab9ec385e261, _ab9ec385e261;
    }
    return _fcc0beae370b;
  }
  class p {
    channel;
    port;
    workerPath;
    constructor(_a9a1d7f1a590) {
      this.channel = new BroadcastChannel("\x62\x61\x72\x65\x2d\x6d\x75\x78"), _a9a1d7f1a590 instanceof MessagePort || _a9a1d7f1a590 instanceof Promise ? this.port = _a9a1d7f1a590 : this.createChannel(_a9a1d7f1a590, !0);
    }
    createChannel(_a9a1d7f1a590, _3fabe7240b7d) {
      if (self.clients) this.port = c(), this.channel.onmessage = _a9a1d7f1a590 => {
        "\x72\x65\x66\x72\x65\x73\x68\x50\x6f\x72\x74" === _a9a1d7f1a590.data.type && (this.port = c());
      }; else if (_a9a1d7f1a590 && SharedWorker) {
        if (!_a9a1d7f1a590.startsWith("\x2f") && !_a9a1d7f1a590.includes("\x3a")) throw new Error("\x49\x6e\x76\x61\x6c\x69\x64\x20\x55\x52\x4c\x2e\x20\x4d\x75\x73\x74\x20\x62\x65\x20\x61\x62\x73\x6f\x6c\x75\x74\x65\x20\x6f\x72\x20\x73\x74\x61\x72\x74\x20\x61\x74\x20\x74\x68\x65\x20\x72\x6f\x6f\x74\x2e");
        this.port = l(_a9a1d7f1a590, _3fabe7240b7d), console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x73\x65\x74\x74\x69\x6e\x67\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x20\x74\x6f", _a9a1d7f1a590), 
        _5b7279ca6f1f["\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"] = _a9a1d7f1a590;
      } else {
        if (!SharedWorker) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x63\x68\x61\x6e\x6e\x65\x6c\x20\x74\x6f\x20\x74\x68\x65\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x2e");
        {
          const _a9a1d7f1a590 = _5b7279ca6f1f["\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"];
          if (console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x67\x6f\x74\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x3a", _a9a1d7f1a590), !_a9a1d7f1a590) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x20\x77\x6f\x72\x6b\x65\x72\x50\x61\x74\x68\x20\x66\x72\x6f\x6d\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x2e");
          this.port = l(_a9a1d7f1a590, _3fabe7240b7d);
        }
      }
    }
    async sendMessage(_a9a1d7f1a590, _3fabe7240b7d) {
      this.port instanceof Promise && (this.port = await this.port);
      try {
        await i(this.port);
      } catch {
        return console.warn("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x70\x69\x6e\x67\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x66\x72\x6f\x6d\x20\x74\x68\x65\x20\x77\x6f\x72\x6b\x65\x72\x20\x77\x69\x74\x68\x69\x6e\x20\x31\x2e\x35\x73\x2e\x20\x41\x73\x73\x75\x6d\x69\x6e\x67\x20\x70\x6f\x72\x74\x20\x69\x73\x20\x64\x65\x61\x64\x2e"), 
        this.createChannel(), await this.sendMessage(_a9a1d7f1a590, _3fabe7240b7d);
      }
      const _ab9ec385e261 = new MessageChannel, _5b7279ca6f1f = [ _ab9ec385e261.port2, ..._3fabe7240b7d || [] ], _3fd44a3ee28b = new Promise((_a9a1d7f1a590, _3fabe7240b7d) => {
        _ab9ec385e261.port1.onmessage = _ab9ec385e261 => {
          const _5b7279ca6f1f = _ab9ec385e261.data;
          "\x65\x72\x72\x6f\x72" === _5b7279ca6f1f.type ? _3fabe7240b7d(_5b7279ca6f1f.error) : _a9a1d7f1a590(_5b7279ca6f1f);
        };
      });
      return _930ad879a3e5.call(this.port, {
        message: _a9a1d7f1a590,
        port: _ab9ec385e261.port2
      }, _5b7279ca6f1f), await _3fd44a3ee28b;
    }
  }
  class u extends EventTarget {
    protocols;
    url;
    readyState=_f4ce78dec56a.CONNECTING;
    channel;
    constructor(_a9a1d7f1a590, _3fabe7240b7d = [], _ab9ec385e261, _5b7279ca6f1f) {
      super(), this.protocols = _3fabe7240b7d, this.url = _a9a1d7f1a590.toString(), this.protocols = _3fabe7240b7d;
      const s = _a9a1d7f1a590 => {
        this.protocols = _a9a1d7f1a590, this.readyState = _f4ce78dec56a.OPEN;
        const _3fabe7240b7d = new Event("\x6f\x70\x65\x6e");
        this.dispatchEvent(_3fabe7240b7d);
      }, o = async _a9a1d7f1a590 => {
        const _3fabe7240b7d = new MessageEvent("\x6d\x65\x73\x73\x61\x67\x65", {
          data: _a9a1d7f1a590
        });
        this.dispatchEvent(_3fabe7240b7d);
      }, c = (_a9a1d7f1a590, _3fabe7240b7d) => {
        this.readyState = _f4ce78dec56a.CLOSED;
        const _ab9ec385e261 = new CloseEvent("\x63\x6c\x6f\x73\x65", {
          code: _a9a1d7f1a590,
          reason: _3fabe7240b7d
        });
        this.dispatchEvent(_ab9ec385e261);
      }, i = () => {
        this.readyState = _f4ce78dec56a.CLOSED;
        const _a9a1d7f1a590 = new Event("\x65\x72\x72\x6f\x72");
        this.dispatchEvent(_a9a1d7f1a590);
      };
      this.channel = new MessageChannel, this.channel.port1.onmessage = _a9a1d7f1a590 => {
        "\x6f\x70\x65\x6e" === _a9a1d7f1a590.data.type ? s(_a9a1d7f1a590.data.args[0]) : "\x6d\x65\x73\x73\x61\x67\x65" === _a9a1d7f1a590.data.type ? o(_a9a1d7f1a590.data.args[0]) : "\x63\x6c\x6f\x73\x65" === _a9a1d7f1a590.data.type ? c(_a9a1d7f1a590.data.args[0], _a9a1d7f1a590.data.args[1]) : "\x65\x72\x72\x6f\x72" === _a9a1d7f1a590.data.type && i();
      }, _ab9ec385e261.sendMessage({
        type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74",
        websocket: {
          url: _a9a1d7f1a590.toString(),
          protocols: _3fabe7240b7d,
          requestHeaders: _5b7279ca6f1f,
          channel: this.channel.port2
        }
      }, [ this.channel.port2 ]);
    }
    send(..._a9a1d7f1a590) {
      if (this.readyState === _f4ce78dec56a.CONNECTING) throw new DOMException("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x65\x78\x65\x63\x75\x74\x65\x20\x27\x73\x65\x6e\x64\x27\x20\x6f\x6e\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x53\x74\x69\x6c\x6c\x20\x69\x6e\x20\x43\x4f\x4e\x4e\x45\x43\x54\x49\x4e\x47\x20\x73\x74\x61\x74\x65\x2e");
      let _3fabe7240b7d = _a9a1d7f1a590[0];
      _3fabe7240b7d.buffer && (_3fabe7240b7d = _3fabe7240b7d.buffer.slice(_3fabe7240b7d.byteOffset, _3fabe7240b7d.byteOffset + _3fabe7240b7d.byteLength)), 
      _930ad879a3e5.call(this.channel.port1, {
        type: "\x64\x61\x74\x61",
        data: _3fabe7240b7d
      }, _3fabe7240b7d instanceof ArrayBuffer ? [ _3fabe7240b7d ] : []);
    }
    close(_a9a1d7f1a590, _3fabe7240b7d) {
      _930ad879a3e5.call(this.channel.port1, {
        type: "\x63\x6c\x6f\x73\x65",
        closeCode: _a9a1d7f1a590,
        closeReason: _3fabe7240b7d
      });
    }
  }
  function w(_a9a1d7f1a590, _3fabe7240b7d, _ab9ec385e261) {
    console.error(`\x65\x72\x72\x6f\x72\x20\x77\x68\x69\x6c\x65\x20\x70\x72\x6f\x63\x65\x73\x73\x69\x6e\x67\x20\x27${_ab9ec385e261}\x27\x3a\x20`, _3fabe7240b7d), _a9a1d7f1a590.postMessage({
      type: "\x65\x72\x72\x6f\x72",
      error: _3fabe7240b7d
    });
  }
  function f(_a9a1d7f1a590) {
    for (let _3fabe7240b7d = 0; _3fabe7240b7d < _a9a1d7f1a590.length; _3fabe7240b7d++) {
      const _ab9ec385e261 = _a9a1d7f1a590[_3fabe7240b7d];
      if (!"\x21\x23\x24\x25\x26\x27\x2a\x2b\x2d\x2e\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x5e\x5f\x60\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x7c\x7e".includes(_ab9ec385e261)) return !1;
    }
    return !0;
  }
  const _2416500ce74f = [ "\x77\x73\x3a", "\x77\x73\x73\x3a" ], _79dc17b59c38 = [ 101, 204, 205, 304 ], _4cb4e31f6fcd = [ 301, 302, 303, 307, 308 ];
  class m {
    worker;
    constructor(_a9a1d7f1a590) {
      this.worker = new p(_a9a1d7f1a590);
    }
    createWebSocket(_a9a1d7f1a590, _3fabe7240b7d = [], _ab9ec385e261, _5b7279ca6f1f) {
      try {
        _a9a1d7f1a590 = new URL(_a9a1d7f1a590);
      } catch (_3fabe7240b7d) {
        throw new DOMException(`\x46\x61\x69\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x20\x27${_a9a1d7f1a590}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
      }
      if (!_2416500ce74f.includes(_a9a1d7f1a590.protocol)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x27\x73\x20\x73\x63\x68\x65\x6d\x65\x20\x6d\x75\x73\x74\x20\x62\x65\x20\x65\x69\x74\x68\x65\x72\x20\x27\x77\x73\x27\x20\x6f\x72\x20\x27\x77\x73\x73\x27\x2e\x20\x27${_a9a1d7f1a590.protocol}\x27\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x6c\x6c\x6f\x77\x65\x64\x2e`);
      Array.isArray(_3fabe7240b7d) || (_3fabe7240b7d = [ _3fabe7240b7d ]), _3fabe7240b7d = _3fabe7240b7d.map(String);
      for (const _a9a1d7f1a590 of _3fabe7240b7d) if (!f(_a9a1d7f1a590)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x73\x75\x62\x70\x72\x6f\x74\x6f\x63\x6f\x6c\x20\x27${_a9a1d7f1a590}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
      _5b7279ca6f1f = _5b7279ca6f1f || {};
      return new u(_a9a1d7f1a590, _3fabe7240b7d, this.worker, _5b7279ca6f1f);
    }
    async fetch(_a9a1d7f1a590, _ab9ec385e261) {
      const _5b7279ca6f1f = new Request(_a9a1d7f1a590, _ab9ec385e261), _3fd44a3ee28b = _ab9ec385e261?.headers || _5b7279ca6f1f.headers, _930ad879a3e5 = _3fd44a3ee28b instanceof Headers ? Object.fromEntries(_3fd44a3ee28b) : _3fd44a3ee28b, _f4ce78dec56a = _5b7279ca6f1f.body;
      let _fcc0beae370b = new URL(_5b7279ca6f1f.url);
      if (_fcc0beae370b.protocol.startsWith("\x62\x6c\x6f\x62\x3a")) {
        const _a9a1d7f1a590 = await _3fabe7240b7d(_fcc0beae370b), _ab9ec385e261 = new Response(_a9a1d7f1a590.body, _a9a1d7f1a590);
        return _ab9ec385e261.rawHeaders = Object.fromEntries(_a9a1d7f1a590.headers), _ab9ec385e261.rawResponse = {
          body: _a9a1d7f1a590.body,
          headers: Object.fromEntries(_a9a1d7f1a590.headers),
          status: _a9a1d7f1a590.status,
          statusText: _a9a1d7f1a590.statusText
        }, _ab9ec385e261.finalURL = _fcc0beae370b.toString(), _ab9ec385e261;
      }
      for (let _a9a1d7f1a590 = 0; ;_a9a1d7f1a590++) {
        let _3fabe7240b7d = (await this.worker.sendMessage({
          type: "\x66\x65\x74\x63\x68",
          fetch: {
            remote: _fcc0beae370b.toString(),
            method: _5b7279ca6f1f.method,
            headers: _930ad879a3e5,
            body: _f4ce78dec56a || void 0
          }
        }, _f4ce78dec56a ? [ _f4ce78dec56a ] : [])).fetch, _3fd44a3ee28b = new Response(_79dc17b59c38.includes(_3fabe7240b7d.status) ? void 0 : _3fabe7240b7d.body, {
          headers: new Headers(_3fabe7240b7d.headers),
          status: _3fabe7240b7d.status,
          statusText: _3fabe7240b7d.statusText
        });
        _3fd44a3ee28b.rawHeaders = _3fabe7240b7d.headers, _3fd44a3ee28b.rawResponse = _3fabe7240b7d, 
        _3fd44a3ee28b.finalURL = _fcc0beae370b.toString();
        const _2416500ce74f = _ab9ec385e261?.redirect || _5b7279ca6f1f.redirect;
        if (!_4cb4e31f6fcd.includes(_3fd44a3ee28b.status)) return _3fd44a3ee28b;
        switch (_2416500ce74f) {
         case "\x66\x6f\x6c\x6c\x6f\x77":
          {
            const _3fabe7240b7d = _3fd44a3ee28b.headers.get("\x6c\x6f\x63\x61\x74\x69\x6f\x6e");
            if (20 > _a9a1d7f1a590 && null !== _3fabe7240b7d) {
              _fcc0beae370b = new URL(_3fabe7240b7d, _fcc0beae370b);
              continue;
            }
            throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");
          }

         case "\x65\x72\x72\x6f\x72":
          throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");

         case "\x6d\x61\x6e\x75\x61\x6c":
          return _3fd44a3ee28b;
        }
      }
    }
  }
  console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x72\x75\x6e\x6e\x69\x6e\x67\x20\x76\x32\x2e\x31\x2e\x39\x20\x28\x62\x75\x69\x6c\x64\x20\x64\x63\x39\x64\x63\x36\x65\x29"), _a9a1d7f1a590.BareClient = m, 
  _a9a1d7f1a590.\u{42}\u{61}\u{72}\u{65}\u{4d}\u{75}\u{78}\u{43}\u{6f}\u{6e}\u{6e}\u{65}\u{63}\u{74}\u{69}\u{6f}\u{6e} = class {
    worker;
    constructor(_a9a1d7f1a590) {
      this.worker = new p(_a9a1d7f1a590);
    }
    async getTransport() {
      return (await this.worker.sendMessage({
        type: "\x67\x65\x74"
      })).name;
    }
    async setTransport(_a9a1d7f1a590, _3fabe7240b7d, _ab9ec385e261) {
      await this.setManualTransport(`\x0a\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x7b\x20\x64\x65\x66\x61\x75\x6c\x74\x3a\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x7d\x20\x3d\x20\x61\x77\x61\x69\x74\x20\x69\x6d\x70\x6f\x72\x74\x28\x22${_a9a1d7f1a590}\x22\x29\x3b\x0a\x09\x09\x09\x72\x65\x74\x75\x72\x6e\x20\x5b\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2c\x20\x22${_a9a1d7f1a590}\x22\x5d\x3b\x0a\x09\x09`, _3fabe7240b7d, _ab9ec385e261);
    }
    async setManualTransport(_a9a1d7f1a590, _3fabe7240b7d, _ab9ec385e261) {
      if ("\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65" === _a9a1d7f1a590) throw new Error("\x55\x73\x65\x20\x73\x65\x74\x52\x65\x6d\x6f\x74\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2e");
      await this.worker.sendMessage({
        type: "\x73\x65\x74",
        client: {
          function: _a9a1d7f1a590,
          args: _3fabe7240b7d
        }
      }, _ab9ec385e261);
    }
    async setRemoteTransport(_a9a1d7f1a590, _3fabe7240b7d) {
      const _ab9ec385e261 = new MessageChannel;
      _ab9ec385e261.port1.onmessage = async _3fabe7240b7d => {
        const _ab9ec385e261 = _3fabe7240b7d.data.port, _5b7279ca6f1f = _3fabe7240b7d.data.message;
        if ("\x66\x65\x74\x63\x68" === _5b7279ca6f1f.type) try {
          _a9a1d7f1a590.ready || await _a9a1d7f1a590.init(), await async function(_a9a1d7f1a590, _3fabe7240b7d, _ab9ec385e261) {
            const _5b7279ca6f1f = await _ab9ec385e261.request(new URL(_a9a1d7f1a590.fetch.remote), _a9a1d7f1a590.fetch.method, _a9a1d7f1a590.fetch.body, _a9a1d7f1a590.fetch.headers, null);
            if (!d() && _5b7279ca6f1f.body instanceof ReadableStream) {
              const _a9a1d7f1a590 = new Response(_5b7279ca6f1f.body);
              _5b7279ca6f1f.body = await _a9a1d7f1a590.arrayBuffer();
            }
            _5b7279ca6f1f.body instanceof ReadableStream || _5b7279ca6f1f.body instanceof ArrayBuffer ? _930ad879a3e5.call(_3fabe7240b7d, {
              type: "\x66\x65\x74\x63\x68",
              fetch: _5b7279ca6f1f
            }, [ _5b7279ca6f1f.body ]) : _930ad879a3e5.call(_3fabe7240b7d, {
              type: "\x66\x65\x74\x63\x68",
              fetch: _5b7279ca6f1f
            });
          }(_5b7279ca6f1f, _ab9ec385e261, _a9a1d7f1a590);
        } catch (_a9a1d7f1a590) {
          w(_ab9ec385e261, _a9a1d7f1a590, "\x66\x65\x74\x63\x68");
        } else if ("\x77\x65\x62\x73\x6f\x63\x6b\x65\x74" === _5b7279ca6f1f.type) try {
          _a9a1d7f1a590.ready || await _a9a1d7f1a590.init(), await async function(_a9a1d7f1a590, _3fabe7240b7d, _ab9ec385e261) {
            const [_5b7279ca6f1f, _3fd44a3ee28b] = _ab9ec385e261.connect(new URL(_a9a1d7f1a590.websocket.url), _a9a1d7f1a590.websocket.protocols, _a9a1d7f1a590.websocket.requestHeaders, _3fabe7240b7d => {
              _930ad879a3e5.call(_a9a1d7f1a590.websocket.channel, {
                type: "\x6f\x70\x65\x6e",
                args: [ _3fabe7240b7d ]
              });
            }, _3fabe7240b7d => {
              _3fabe7240b7d instanceof ArrayBuffer ? _930ad879a3e5.call(_a9a1d7f1a590.websocket.channel, {
                type: "\x6d\x65\x73\x73\x61\x67\x65",
                args: [ _3fabe7240b7d ]
              }, [ _3fabe7240b7d ]) : _930ad879a3e5.call(_a9a1d7f1a590.websocket.channel, {
                type: "\x6d\x65\x73\x73\x61\x67\x65",
                args: [ _3fabe7240b7d ]
              });
            }, (_3fabe7240b7d, _ab9ec385e261) => {
              _930ad879a3e5.call(_a9a1d7f1a590.websocket.channel, {
                type: "\x63\x6c\x6f\x73\x65",
                args: [ _3fabe7240b7d, _ab9ec385e261 ]
              });
            }, _3fabe7240b7d => {
              _930ad879a3e5.call(_a9a1d7f1a590.websocket.channel, {
                type: "\x65\x72\x72\x6f\x72",
                args: [ _3fabe7240b7d ]
              });
            });
            _a9a1d7f1a590.websocket.channel.onmessage = _a9a1d7f1a590 => {
              "\x64\x61\x74\x61" === _a9a1d7f1a590.data.type ? _5b7279ca6f1f(_a9a1d7f1a590.data.data) : "\x63\x6c\x6f\x73\x65" === _a9a1d7f1a590.data.type && _3fd44a3ee28b(_a9a1d7f1a590.data.closeCode, _a9a1d7f1a590.data.closeReason);
            }, _930ad879a3e5.call(_3fabe7240b7d, {
              type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74"
            });
          }(_5b7279ca6f1f, _ab9ec385e261, _a9a1d7f1a590);
        } catch (_a9a1d7f1a590) {
          w(_ab9ec385e261, _a9a1d7f1a590, "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74");
        }
      }, await this.worker.sendMessage({
        type: "\x73\x65\x74",
        client: {
          function: "\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65",
          args: [ _ab9ec385e261.port2, _3fabe7240b7d ]
        }
      }, [ _ab9ec385e261.port2 ]);
    }
    getInnerPort() {
      return this.worker.port;
    }
  }, _a9a1d7f1a590.BareWebSocket = u, _a9a1d7f1a590.WebSocketFields = _f4ce78dec56a, 
  _a9a1d7f1a590.WorkerConnection = p, _a9a1d7f1a590.\u{62}\u{72}\u{6f}\u{77}\u{73}\u{65}\u{72}\u{53}\u{75}\u{70}\u{70}\u{6f}\u{72}\u{74}\u{73}\u{54}\u{72}\u{61}\u{6e}\u{73}\u{66}\u{65}\u{72}\u{72}\u{69}\u{6e}\u{67}\u{53}\u{74}\u{72}\u{65}\u{61}\u{6d}\u{73} = d, 
  _a9a1d7f1a590.default = m, _a9a1d7f1a590.maxRedirects = 20, _a9a1d7f1a590.validProtocol = f, 
  Object.defineProperty(_a9a1d7f1a590, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
    value: !0
  });
});
