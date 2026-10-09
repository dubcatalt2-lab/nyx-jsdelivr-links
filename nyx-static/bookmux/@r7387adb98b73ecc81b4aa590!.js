!function(_843f0f6f3367, _d70e968698ba) {
  "\x6f\x62\x6a\x65\x63\x74" == typeof exports && "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof module ? _d70e968698ba(exports) : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof define && define.amd ? define([ "\x65\x78\x70\x6f\x72\x74\x73" ], _d70e968698ba) : _d70e968698ba((_843f0f6f3367 = "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof globalThis ? globalThis : _843f0f6f3367 || self).Bookmux = {});
}(this, function(_843f0f6f3367) {
  "use strict";
  const _d70e968698ba = globalThis.fetch, _62e630f949cf = globalThis.SharedWorker, _47e5b2aeeb8e = globalThis.localStorage, _e320c33c5686 = globalThis.navigator.serviceWorker, _0f517ed41868 = MessagePort.prototype.postMessage, _bd5f6b65b3c2 = {
    prototype: {
      send: WebSocket.prototype.send
    },
    CLOSED: WebSocket.CLOSED,
    CLOSING: WebSocket.CLOSING,
    CONNECTING: WebSocket.CONNECTING,
    OPEN: WebSocket.OPEN
  };
  async function c() {
    const _843f0f6f3367 = (await self.clients.matchAll({
      type: "\x77\x69\x6e\x64\x6f\x77",
      includeUncontrolled: !0
    })).map(async _843f0f6f3367 => {
      const _d70e968698ba = await function(_843f0f6f3367) {
        let _d70e968698ba = new MessageChannel;
        return new Promise(_62e630f949cf => {
          _843f0f6f3367.postMessage({
            type: "\x67\x65\x74\x50\x6f\x72\x74",
            port: _d70e968698ba.port2
          }, [ _d70e968698ba.port2 ]), _d70e968698ba.port1.onmessage = _843f0f6f3367 => {
            _62e630f949cf(_843f0f6f3367.data);
          };
        });
      }(_843f0f6f3367);
      return await i(_d70e968698ba), _d70e968698ba;
    }), _d70e968698ba = Promise.race([ Promise.any(_843f0f6f3367), new Promise((_843f0f6f3367, _d70e968698ba) => setTimeout(_d70e968698ba, 1e3, new TypeError("\x74\x69\x6d\x65\x6f\x75\x74"))) ]);
    try {
      return await _d70e968698ba;
    } catch (_843f0f6f3367) {
      if (_843f0f6f3367 instanceof AggregateError) throw console.error("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x61\x73\x20\x61\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e"), 
      new Error("\x41\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e", {
        cause: _843f0f6f3367
      });
      return console.warn("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x77\x69\x74\x68\x69\x6e\x20\x31\x73\x2c\x20\x72\x65\x74\x72\x79\x69\x6e\x67"), 
      await c();
    }
  }
  function i(_843f0f6f3367) {
    const _d70e968698ba = new MessageChannel, _62e630f949cf = new Promise((_843f0f6f3367, _62e630f949cf) => {
      _d70e968698ba.port1.onmessage = _d70e968698ba => {
        "\x70\x6f\x6e\x67" === _d70e968698ba.data.type && _843f0f6f3367();
      }, setTimeout(_62e630f949cf, 1500);
    });
    return _0f517ed41868.call(_843f0f6f3367, {
      message: {
        type: "\x70\x69\x6e\x67"
      },
      port: _d70e968698ba.port2
    }, [ _d70e968698ba.port2 ]), _62e630f949cf;
  }
  function l(_843f0f6f3367, _d70e968698ba) {
    const _47e5b2aeeb8e = new _62e630f949cf(_843f0f6f3367, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
    return _d70e968698ba && _e320c33c5686.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", _d70e968698ba => {
      if ("\x67\x65\x74\x50\x6f\x72\x74" === _d70e968698ba.data.type && _d70e968698ba.data.port) {
        console.debug("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x72\x65\x63\x69\x65\x76\x65\x64\x20\x72\x65\x71\x75\x65\x73\x74\x20\x66\x6f\x72\x20\x70\x6f\x72\x74\x20\x66\x72\x6f\x6d\x20\x73\x77");
        const _47e5b2aeeb8e = new _62e630f949cf(_843f0f6f3367, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
        _0f517ed41868.call(_d70e968698ba.data.port, _47e5b2aeeb8e.port, [ _47e5b2aeeb8e.port ]);
      }
    }), _47e5b2aeeb8e.port;
  }
  let _f0cdc100d5de = null;
  function d() {
    if (null === _f0cdc100d5de) {
      const _843f0f6f3367 = new MessageChannel, _d70e968698ba = new ReadableStream;
      let _62e630f949cf;
      try {
        _0f517ed41868.call(_843f0f6f3367.port1, _d70e968698ba, [ _d70e968698ba ]), _62e630f949cf = !0;
      } catch (_843f0f6f3367) {
        _62e630f949cf = !1;
      }
      return _f0cdc100d5de = _62e630f949cf, _62e630f949cf;
    }
    return _f0cdc100d5de;
  }
  class p {
    channel;
    port;
    workerPath;
    constructor(_843f0f6f3367) {
      this.channel = new BroadcastChannel("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78"), _843f0f6f3367 instanceof MessagePort || _843f0f6f3367 instanceof Promise ? this.port = _843f0f6f3367 : this.createChannel(_843f0f6f3367, !0);
    }
    createChannel(_843f0f6f3367, _d70e968698ba) {
      if (self.clients) this.port = c(), this.channel.onmessage = _843f0f6f3367 => {
        "\x72\x65\x66\x72\x65\x73\x68\x50\x6f\x72\x74" === _843f0f6f3367.data.type && (this.port = c());
      }; else if (_843f0f6f3367 && SharedWorker) {
        if (!_843f0f6f3367.startsWith("\x2f") && !_843f0f6f3367.includes("\x3a")) throw new Error("\x49\x6e\x76\x61\x6c\x69\x64\x20\x55\x52\x4c\x2e\x20\x4d\x75\x73\x74\x20\x62\x65\x20\x61\x62\x73\x6f\x6c\x75\x74\x65\x20\x6f\x72\x20\x73\x74\x61\x72\x74\x20\x61\x74\x20\x74\x68\x65\x20\x72\x6f\x6f\x74\x2e");
        this.port = l(_843f0f6f3367, _d70e968698ba), console.debug("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x73\x65\x74\x74\x69\x6e\x67\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x20\x74\x6f", _843f0f6f3367), 
        _47e5b2aeeb8e["\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"] = _843f0f6f3367;
      } else {
        if (!SharedWorker) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x63\x68\x61\x6e\x6e\x65\x6c\x20\x74\x6f\x20\x74\x68\x65\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x2e");
        {
          const _843f0f6f3367 = _47e5b2aeeb8e["\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"];
          if (console.debug("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x67\x6f\x74\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x3a", _843f0f6f3367), !_843f0f6f3367) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x20\x77\x6f\x72\x6b\x65\x72\x50\x61\x74\x68\x20\x66\x72\x6f\x6d\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x2e");
          this.port = l(_843f0f6f3367, _d70e968698ba);
        }
      }
    }
    async sendMessage(_843f0f6f3367, _d70e968698ba) {
      this.port instanceof Promise && (this.port = await this.port);
      try {
        await i(this.port);
      } catch {
        return console.warn("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x70\x69\x6e\x67\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x66\x72\x6f\x6d\x20\x74\x68\x65\x20\x77\x6f\x72\x6b\x65\x72\x20\x77\x69\x74\x68\x69\x6e\x20\x31\x2e\x35\x73\x2e\x20\x41\x73\x73\x75\x6d\x69\x6e\x67\x20\x70\x6f\x72\x74\x20\x69\x73\x20\x64\x65\x61\x64\x2e"), 
        this.createChannel(), await this.sendMessage(_843f0f6f3367, _d70e968698ba);
      }
      const _62e630f949cf = new MessageChannel, _47e5b2aeeb8e = [ _62e630f949cf.port2, ..._d70e968698ba || [] ], _e320c33c5686 = new Promise((_843f0f6f3367, _d70e968698ba) => {
        _62e630f949cf.port1.onmessage = _62e630f949cf => {
          const _47e5b2aeeb8e = _62e630f949cf.data;
          "\x65\x72\x72\x6f\x72" === _47e5b2aeeb8e.type ? _d70e968698ba(_47e5b2aeeb8e.error) : _843f0f6f3367(_47e5b2aeeb8e);
        };
      });
      return _0f517ed41868.call(this.port, {
        message: _843f0f6f3367,
        port: _62e630f949cf.port2
      }, _47e5b2aeeb8e), await _e320c33c5686;
    }
  }
  class u extends EventTarget {
    protocols;
    url;
    readyState=_bd5f6b65b3c2.CONNECTING;
    channel;
    constructor(_843f0f6f3367, _d70e968698ba = [], _62e630f949cf, _47e5b2aeeb8e) {
      super(), this.protocols = _d70e968698ba, this.url = _843f0f6f3367.toString(), this.protocols = _d70e968698ba;
      const s = _843f0f6f3367 => {
        this.protocols = _843f0f6f3367, this.readyState = _bd5f6b65b3c2.OPEN;
        const _d70e968698ba = new Event("\x6f\x70\x65\x6e");
        this.dispatchEvent(_d70e968698ba);
      }, o = async _843f0f6f3367 => {
        const _d70e968698ba = new MessageEvent("\x6d\x65\x73\x73\x61\x67\x65", {
          data: _843f0f6f3367
        });
        this.dispatchEvent(_d70e968698ba);
      }, c = (_843f0f6f3367, _d70e968698ba) => {
        this.readyState = _bd5f6b65b3c2.CLOSED;
        const _62e630f949cf = new CloseEvent("\x63\x6c\x6f\x73\x65", {
          code: _843f0f6f3367,
          reason: _d70e968698ba
        });
        this.dispatchEvent(_62e630f949cf);
      }, i = () => {
        this.readyState = _bd5f6b65b3c2.CLOSED;
        const _843f0f6f3367 = new Event("\x65\x72\x72\x6f\x72");
        this.dispatchEvent(_843f0f6f3367);
      };
      this.channel = new MessageChannel, this.channel.port1.onmessage = _843f0f6f3367 => {
        "\x6f\x70\x65\x6e" === _843f0f6f3367.data.type ? s(_843f0f6f3367.data.args[0]) : "\x6d\x65\x73\x73\x61\x67\x65" === _843f0f6f3367.data.type ? o(_843f0f6f3367.data.args[0]) : "\x63\x6c\x6f\x73\x65" === _843f0f6f3367.data.type ? c(_843f0f6f3367.data.args[0], _843f0f6f3367.data.args[1]) : "\x65\x72\x72\x6f\x72" === _843f0f6f3367.data.type && i();
      }, _62e630f949cf.sendMessage({
        type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74",
        websocket: {
          url: _843f0f6f3367.toString(),
          protocols: _d70e968698ba,
          requestHeaders: _47e5b2aeeb8e,
          channel: this.channel.port2
        }
      }, [ this.channel.port2 ]);
    }
    send(..._843f0f6f3367) {
      if (this.readyState === _bd5f6b65b3c2.CONNECTING) throw new DOMException("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x65\x78\x65\x63\x75\x74\x65\x20\x27\x73\x65\x6e\x64\x27\x20\x6f\x6e\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x53\x74\x69\x6c\x6c\x20\x69\x6e\x20\x43\x4f\x4e\x4e\x45\x43\x54\x49\x4e\x47\x20\x73\x74\x61\x74\x65\x2e");
      let _d70e968698ba = _843f0f6f3367[0];
      _d70e968698ba.buffer && (_d70e968698ba = _d70e968698ba.buffer.slice(_d70e968698ba.byteOffset, _d70e968698ba.byteOffset + _d70e968698ba.byteLength)), 
      _0f517ed41868.call(this.channel.port1, {
        type: "\x64\x61\x74\x61",
        data: _d70e968698ba
      }, _d70e968698ba instanceof ArrayBuffer ? [ _d70e968698ba ] : []);
    }
    close(_843f0f6f3367, _d70e968698ba) {
      _0f517ed41868.call(this.channel.port1, {
        type: "\x63\x6c\x6f\x73\x65",
        closeCode: _843f0f6f3367,
        closeReason: _d70e968698ba
      });
    }
  }
  function w(_843f0f6f3367, _d70e968698ba, _62e630f949cf) {
    console.error(`\x65\x72\x72\x6f\x72\x20\x77\x68\x69\x6c\x65\x20\x70\x72\x6f\x63\x65\x73\x73\x69\x6e\x67\x20\x27${_62e630f949cf}\x27\x3a\x20`, _d70e968698ba), _843f0f6f3367.postMessage({
      type: "\x65\x72\x72\x6f\x72",
      error: _d70e968698ba
    });
  }
  function f(_843f0f6f3367) {
    for (let _d70e968698ba = 0; _d70e968698ba < _843f0f6f3367.length; _d70e968698ba++) {
      const _62e630f949cf = _843f0f6f3367[_d70e968698ba];
      if (!"\x21\x23\x24\x25\x26\x27\x2a\x2b\x2d\x2e\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x5e\x5f\x60\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x7c\x7e".includes(_62e630f949cf)) return !1;
    }
    return !0;
  }
  const _2334883171ed = [ "\x77\x73\x3a", "\x77\x73\x73\x3a" ], _5f19facd94d0 = [ 101, 204, 205, 304 ], _e2f95e5ef2cd = [ 301, 302, 303, 307, 308 ];
  class m {
    worker;
    constructor(_843f0f6f3367) {
      this.worker = new p(_843f0f6f3367);
    }
    createWebSocket(_843f0f6f3367, _d70e968698ba = [], _62e630f949cf, _47e5b2aeeb8e) {
      try {
        _843f0f6f3367 = new URL(_843f0f6f3367);
      } catch (_d70e968698ba) {
        throw new DOMException(`\x46\x61\x69\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x20\x27${_843f0f6f3367}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
      }
      if (!_2334883171ed.includes(_843f0f6f3367.protocol)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x27\x73\x20\x73\x63\x68\x65\x6d\x65\x20\x6d\x75\x73\x74\x20\x62\x65\x20\x65\x69\x74\x68\x65\x72\x20\x27\x77\x73\x27\x20\x6f\x72\x20\x27\x77\x73\x73\x27\x2e\x20\x27${_843f0f6f3367.protocol}\x27\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x6c\x6c\x6f\x77\x65\x64\x2e`);
      Array.isArray(_d70e968698ba) || (_d70e968698ba = [ _d70e968698ba ]), _d70e968698ba = _d70e968698ba.map(String);
      for (const _843f0f6f3367 of _d70e968698ba) if (!f(_843f0f6f3367)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x73\x75\x62\x70\x72\x6f\x74\x6f\x63\x6f\x6c\x20\x27${_843f0f6f3367}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
      _47e5b2aeeb8e = _47e5b2aeeb8e || {};
      return new u(_843f0f6f3367, _d70e968698ba, this.worker, _47e5b2aeeb8e);
    }
    async fetch(_843f0f6f3367, _62e630f949cf) {
      const _47e5b2aeeb8e = new Request(_843f0f6f3367, _62e630f949cf), _e320c33c5686 = _62e630f949cf?.headers || _47e5b2aeeb8e.headers, _0f517ed41868 = _e320c33c5686 instanceof Headers ? Object.fromEntries(_e320c33c5686) : _e320c33c5686, _bd5f6b65b3c2 = _47e5b2aeeb8e.body;
      let _f0cdc100d5de = new URL(_47e5b2aeeb8e.url);
      if (_f0cdc100d5de.protocol.startsWith("\x62\x6c\x6f\x62\x3a")) {
        const _843f0f6f3367 = await _d70e968698ba(_f0cdc100d5de), _62e630f949cf = new Response(_843f0f6f3367.body, _843f0f6f3367);
        return _62e630f949cf.rawHeaders = Object.fromEntries(_843f0f6f3367.headers), _62e630f949cf.rawResponse = {
          body: _843f0f6f3367.body,
          headers: Object.fromEntries(_843f0f6f3367.headers),
          status: _843f0f6f3367.status,
          statusText: _843f0f6f3367.statusText
        }, _62e630f949cf.finalURL = _f0cdc100d5de.toString(), _62e630f949cf;
      }
      for (let _843f0f6f3367 = 0; ;_843f0f6f3367++) {
        let _d70e968698ba = (await this.worker.sendMessage({
          type: "\x66\x65\x74\x63\x68",
          fetch: {
            remote: _f0cdc100d5de.toString(),
            method: _47e5b2aeeb8e.method,
            headers: _0f517ed41868,
            body: _bd5f6b65b3c2 || void 0
          }
        }, _bd5f6b65b3c2 ? [ _bd5f6b65b3c2 ] : [])).fetch, _e320c33c5686 = new Response(_5f19facd94d0.includes(_d70e968698ba.status) ? void 0 : _d70e968698ba.body, {
          headers: new Headers(_d70e968698ba.headers),
          status: _d70e968698ba.status,
          statusText: _d70e968698ba.statusText
        });
        _e320c33c5686.rawHeaders = _d70e968698ba.headers, _e320c33c5686.rawResponse = _d70e968698ba, 
        _e320c33c5686.finalURL = _f0cdc100d5de.toString();
        const _2334883171ed = _62e630f949cf?.redirect || _47e5b2aeeb8e.redirect;
        if (!_e2f95e5ef2cd.includes(_e320c33c5686.status)) return _e320c33c5686;
        switch (_2334883171ed) {
         case "\x66\x6f\x6c\x6c\x6f\x77":
          {
            const _d70e968698ba = _e320c33c5686.headers.get("\x6c\x6f\x63\x61\x74\x69\x6f\x6e");
            if (20 > _843f0f6f3367 && null !== _d70e968698ba) {
              _f0cdc100d5de = new URL(_d70e968698ba, _f0cdc100d5de);
              continue;
            }
            throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");
          }

         case "\x65\x72\x72\x6f\x72":
          throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");

         case "\x6d\x61\x6e\x75\x61\x6c":
          return _e320c33c5686;
        }
      }
    }
  }
  console.debug("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x72\x75\x6e\x6e\x69\x6e\x67\x20\x76\x32\x2e\x31\x2e\x39\x20\x28\x62\x75\x69\x6c\x64\x20\x64\x63\x39\x64\x63\x36\x65\x29"), _843f0f6f3367.BareClient = m, 
  _843f0f6f3367.BookmuxConnection = class {
    worker;
    constructor(_843f0f6f3367) {
      this.worker = new p(_843f0f6f3367);
    }
    async getTransport() {
      return (await this.worker.sendMessage({
        type: "\x67\x65\x74"
      })).name;
    }
    async setTransport(_843f0f6f3367, _d70e968698ba, _62e630f949cf) {
      await this.setManualTransport(`\x0a\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x7b\x20\x64\x65\x66\x61\x75\x6c\x74\x3a\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x7d\x20\x3d\x20\x61\x77\x61\x69\x74\x20\x69\x6d\x70\x6f\x72\x74\x28\x22${_843f0f6f3367}\x22\x29\x3b\x0a\x09\x09\x09\x72\x65\x74\x75\x72\x6e\x20\x5b\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2c\x20\x22${_843f0f6f3367}\x22\x5d\x3b\x0a\x09\x09`, _d70e968698ba, _62e630f949cf);
    }
    async setManualTransport(_843f0f6f3367, _d70e968698ba, _62e630f949cf) {
      if ("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65" === _843f0f6f3367) throw new Error("\x55\x73\x65\x20\x73\x65\x74\x52\x65\x6d\x6f\x74\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2e");
      await this.worker.sendMessage({
        type: "\x73\x65\x74",
        client: {
          function: _843f0f6f3367,
          args: _d70e968698ba
        }
      }, _62e630f949cf);
    }
    async setRemoteTransport(_843f0f6f3367, _d70e968698ba) {
      const _62e630f949cf = new MessageChannel;
      _62e630f949cf.port1.onmessage = async _d70e968698ba => {
        const _62e630f949cf = _d70e968698ba.data.port, _47e5b2aeeb8e = _d70e968698ba.data.message;
        if ("\x66\x65\x74\x63\x68" === _47e5b2aeeb8e.type) try {
          _843f0f6f3367.ready || await _843f0f6f3367.init(), await async function(_843f0f6f3367, _d70e968698ba, _62e630f949cf) {
            const _47e5b2aeeb8e = await _62e630f949cf.request(new URL(_843f0f6f3367.fetch.remote), _843f0f6f3367.fetch.method, _843f0f6f3367.fetch.body, _843f0f6f3367.fetch.headers, null);
            if (!d() && _47e5b2aeeb8e.body instanceof ReadableStream) {
              const _843f0f6f3367 = new Response(_47e5b2aeeb8e.body);
              _47e5b2aeeb8e.body = await _843f0f6f3367.arrayBuffer();
            }
            _47e5b2aeeb8e.body instanceof ReadableStream || _47e5b2aeeb8e.body instanceof ArrayBuffer ? _0f517ed41868.call(_d70e968698ba, {
              type: "\x66\x65\x74\x63\x68",
              fetch: _47e5b2aeeb8e
            }, [ _47e5b2aeeb8e.body ]) : _0f517ed41868.call(_d70e968698ba, {
              type: "\x66\x65\x74\x63\x68",
              fetch: _47e5b2aeeb8e
            });
          }(_47e5b2aeeb8e, _62e630f949cf, _843f0f6f3367);
        } catch (_843f0f6f3367) {
          w(_62e630f949cf, _843f0f6f3367, "\x66\x65\x74\x63\x68");
        } else if ("\x77\x65\x62\x73\x6f\x63\x6b\x65\x74" === _47e5b2aeeb8e.type) try {
          _843f0f6f3367.ready || await _843f0f6f3367.init(), await async function(_843f0f6f3367, _d70e968698ba, _62e630f949cf) {
            const [_47e5b2aeeb8e, _e320c33c5686] = _62e630f949cf.connect(new URL(_843f0f6f3367.websocket.url), _843f0f6f3367.websocket.protocols, _843f0f6f3367.websocket.requestHeaders, _d70e968698ba => {
              _0f517ed41868.call(_843f0f6f3367.websocket.channel, {
                type: "\x6f\x70\x65\x6e",
                args: [ _d70e968698ba ]
              });
            }, _d70e968698ba => {
              _d70e968698ba instanceof ArrayBuffer ? _0f517ed41868.call(_843f0f6f3367.websocket.channel, {
                type: "\x6d\x65\x73\x73\x61\x67\x65",
                args: [ _d70e968698ba ]
              }, [ _d70e968698ba ]) : _0f517ed41868.call(_843f0f6f3367.websocket.channel, {
                type: "\x6d\x65\x73\x73\x61\x67\x65",
                args: [ _d70e968698ba ]
              });
            }, (_d70e968698ba, _62e630f949cf) => {
              _0f517ed41868.call(_843f0f6f3367.websocket.channel, {
                type: "\x63\x6c\x6f\x73\x65",
                args: [ _d70e968698ba, _62e630f949cf ]
              });
            }, _d70e968698ba => {
              _0f517ed41868.call(_843f0f6f3367.websocket.channel, {
                type: "\x65\x72\x72\x6f\x72",
                args: [ _d70e968698ba ]
              });
            });
            _843f0f6f3367.websocket.channel.onmessage = _843f0f6f3367 => {
              "\x64\x61\x74\x61" === _843f0f6f3367.data.type ? _47e5b2aeeb8e(_843f0f6f3367.data.data) : "\x63\x6c\x6f\x73\x65" === _843f0f6f3367.data.type && _e320c33c5686(_843f0f6f3367.data.closeCode, _843f0f6f3367.data.closeReason);
            }, _0f517ed41868.call(_d70e968698ba, {
              type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74"
            });
          }(_47e5b2aeeb8e, _62e630f949cf, _843f0f6f3367);
        } catch (_843f0f6f3367) {
          w(_62e630f949cf, _843f0f6f3367, "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74");
        }
      }, await this.worker.sendMessage({
        type: "\x73\x65\x74",
        client: {
          function: "\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65",
          args: [ _62e630f949cf.port2, _d70e968698ba ]
        }
      }, [ _62e630f949cf.port2 ]);
    }
    getInnerPort() {
      return this.worker.port;
    }
  }, _843f0f6f3367.BareWebSocket = u, _843f0f6f3367.WebSocketFields = _bd5f6b65b3c2, 
  _843f0f6f3367.WorkerConnection = p, _843f0f6f3367.\u{62}\u{72}\u{6f}\u{77}\u{73}\u{65}\u{72}\u{53}\u{75}\u{70}\u{70}\u{6f}\u{72}\u{74}\u{73}\u{54}\u{72}\u{61}\u{6e}\u{73}\u{66}\u{65}\u{72}\u{72}\u{69}\u{6e}\u{67}\u{53}\u{74}\u{72}\u{65}\u{61}\u{6d}\u{73} = d, 
  _843f0f6f3367.default = m, _843f0f6f3367.maxRedirects = 20, _843f0f6f3367.validProtocol = f, 
  Object.defineProperty(_843f0f6f3367, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
    value: !0
  });
});
