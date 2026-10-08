!function(_8d27f5da77ac, _12020017ae40) {
  "\x6f\x62\x6a\x65\x63\x74" == typeof exports && "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof module ? _12020017ae40(exports) : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof define && define.amd ? define([ "\x65\x78\x70\x6f\x72\x74\x73" ], _12020017ae40) : _12020017ae40((_8d27f5da77ac = "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof globalThis ? globalThis : _8d27f5da77ac || self).\u{42}\u{61}\u{72}\u{65}\u{4d}\u{75}\u{78} = {});
}(this, function(_8d27f5da77ac) {
  "use strict";
  const _12020017ae40 = globalThis.fetch, _2291ec243b3f = globalThis.SharedWorker, _02889a1e5c63 = globalThis.localStorage, _6668885f03a8 = globalThis.navigator.serviceWorker, _a98304979ba2 = MessagePort.prototype.postMessage, _c8d38abf8303 = {
    prototype: {
      send: WebSocket.prototype.send
    },
    CLOSED: WebSocket.CLOSED,
    CLOSING: WebSocket.CLOSING,
    CONNECTING: WebSocket.CONNECTING,
    OPEN: WebSocket.OPEN
  };
  async function c() {
    const _8d27f5da77ac = (await self.clients.matchAll({
      type: "\x77\x69\x6e\x64\x6f\x77",
      includeUncontrolled: !0
    })).map(async _8d27f5da77ac => {
      const _12020017ae40 = await function(_8d27f5da77ac) {
        let _12020017ae40 = new MessageChannel;
        return new Promise(_2291ec243b3f => {
          _8d27f5da77ac.postMessage({
            type: "\x67\x65\x74\x50\x6f\x72\x74",
            port: _12020017ae40.port2
          }, [ _12020017ae40.port2 ]), _12020017ae40.port1.onmessage = _8d27f5da77ac => {
            _2291ec243b3f(_8d27f5da77ac.data);
          };
        });
      }(_8d27f5da77ac);
      return await i(_12020017ae40), _12020017ae40;
    }), _12020017ae40 = Promise.race([ Promise.any(_8d27f5da77ac), new Promise((_8d27f5da77ac, _12020017ae40) => setTimeout(_12020017ae40, 1e3, new TypeError("\x74\x69\x6d\x65\x6f\x75\x74"))) ]);
    try {
      return await _12020017ae40;
    } catch (_8d27f5da77ac) {
      if (_8d27f5da77ac instanceof AggregateError) throw console.error("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x61\x73\x20\x61\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e"), 
      new Error("\x41\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e", {
        cause: _8d27f5da77ac
      });
      return console.warn("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x77\x69\x74\x68\x69\x6e\x20\x31\x73\x2c\x20\x72\x65\x74\x72\x79\x69\x6e\x67"), 
      await c();
    }
  }
  function i(_8d27f5da77ac) {
    const _12020017ae40 = new MessageChannel, _2291ec243b3f = new Promise((_8d27f5da77ac, _2291ec243b3f) => {
      _12020017ae40.port1.onmessage = _12020017ae40 => {
        "\x70\x6f\x6e\x67" === _12020017ae40.data.type && _8d27f5da77ac();
      }, setTimeout(_2291ec243b3f, 1500);
    });
    return _a98304979ba2.call(_8d27f5da77ac, {
      message: {
        type: "\x70\x69\x6e\x67"
      },
      port: _12020017ae40.port2
    }, [ _12020017ae40.port2 ]), _2291ec243b3f;
  }
  function l(_8d27f5da77ac, _12020017ae40) {
    const _02889a1e5c63 = new _2291ec243b3f(_8d27f5da77ac, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
    return _12020017ae40 && _6668885f03a8.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", _12020017ae40 => {
      if ("\x67\x65\x74\x50\x6f\x72\x74" === _12020017ae40.data.type && _12020017ae40.data.port) {
        console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x72\x65\x63\x69\x65\x76\x65\x64\x20\x72\x65\x71\x75\x65\x73\x74\x20\x66\x6f\x72\x20\x70\x6f\x72\x74\x20\x66\x72\x6f\x6d\x20\x73\x77");
        const _02889a1e5c63 = new _2291ec243b3f(_8d27f5da77ac, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
        _a98304979ba2.call(_12020017ae40.data.port, _02889a1e5c63.port, [ _02889a1e5c63.port ]);
      }
    }), _02889a1e5c63.port;
  }
  let _08feb09f32d3 = null;
  function d() {
    if (null === _08feb09f32d3) {
      const _8d27f5da77ac = new MessageChannel, _12020017ae40 = new ReadableStream;
      let _2291ec243b3f;
      try {
        _a98304979ba2.call(_8d27f5da77ac.port1, _12020017ae40, [ _12020017ae40 ]), _2291ec243b3f = !0;
      } catch (_8d27f5da77ac) {
        _2291ec243b3f = !1;
      }
      return _08feb09f32d3 = _2291ec243b3f, _2291ec243b3f;
    }
    return _08feb09f32d3;
  }
  class p {
    channel;
    port;
    workerPath;
    constructor(_8d27f5da77ac) {
      this.channel = new BroadcastChannel("\x62\x61\x72\x65\x2d\x6d\x75\x78"), _8d27f5da77ac instanceof MessagePort || _8d27f5da77ac instanceof Promise ? this.port = _8d27f5da77ac : this.createChannel(_8d27f5da77ac, !0);
    }
    createChannel(_8d27f5da77ac, _12020017ae40) {
      if (self.clients) this.port = c(), this.channel.onmessage = _8d27f5da77ac => {
        "\x72\x65\x66\x72\x65\x73\x68\x50\x6f\x72\x74" === _8d27f5da77ac.data.type && (this.port = c());
      }; else if (_8d27f5da77ac && SharedWorker) {
        if (!_8d27f5da77ac.startsWith("\x2f") && !_8d27f5da77ac.includes("\x3a")) throw new Error("\x49\x6e\x76\x61\x6c\x69\x64\x20\x55\x52\x4c\x2e\x20\x4d\x75\x73\x74\x20\x62\x65\x20\x61\x62\x73\x6f\x6c\x75\x74\x65\x20\x6f\x72\x20\x73\x74\x61\x72\x74\x20\x61\x74\x20\x74\x68\x65\x20\x72\x6f\x6f\x74\x2e");
        this.port = l(_8d27f5da77ac, _12020017ae40), console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x73\x65\x74\x74\x69\x6e\x67\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x20\x74\x6f", _8d27f5da77ac), 
        _02889a1e5c63["\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"] = _8d27f5da77ac;
      } else {
        if (!SharedWorker) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x63\x68\x61\x6e\x6e\x65\x6c\x20\x74\x6f\x20\x74\x68\x65\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x2e");
        {
          const _8d27f5da77ac = _02889a1e5c63["\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"];
          if (console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x67\x6f\x74\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x3a", _8d27f5da77ac), !_8d27f5da77ac) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x20\x77\x6f\x72\x6b\x65\x72\x50\x61\x74\x68\x20\x66\x72\x6f\x6d\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x2e");
          this.port = l(_8d27f5da77ac, _12020017ae40);
        }
      }
    }
    async sendMessage(_8d27f5da77ac, _12020017ae40) {
      this.port instanceof Promise && (this.port = await this.port);
      try {
        await i(this.port);
      } catch {
        return console.warn("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x70\x69\x6e\x67\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x66\x72\x6f\x6d\x20\x74\x68\x65\x20\x77\x6f\x72\x6b\x65\x72\x20\x77\x69\x74\x68\x69\x6e\x20\x31\x2e\x35\x73\x2e\x20\x41\x73\x73\x75\x6d\x69\x6e\x67\x20\x70\x6f\x72\x74\x20\x69\x73\x20\x64\x65\x61\x64\x2e"), 
        this.createChannel(), await this.sendMessage(_8d27f5da77ac, _12020017ae40);
      }
      const _2291ec243b3f = new MessageChannel, _02889a1e5c63 = [ _2291ec243b3f.port2, ..._12020017ae40 || [] ], _6668885f03a8 = new Promise((_8d27f5da77ac, _12020017ae40) => {
        _2291ec243b3f.port1.onmessage = _2291ec243b3f => {
          const _02889a1e5c63 = _2291ec243b3f.data;
          "\x65\x72\x72\x6f\x72" === _02889a1e5c63.type ? _12020017ae40(_02889a1e5c63.error) : _8d27f5da77ac(_02889a1e5c63);
        };
      });
      return _a98304979ba2.call(this.port, {
        message: _8d27f5da77ac,
        port: _2291ec243b3f.port2
      }, _02889a1e5c63), await _6668885f03a8;
    }
  }
  class u extends EventTarget {
    protocols;
    url;
    readyState=_c8d38abf8303.CONNECTING;
    channel;
    constructor(_8d27f5da77ac, _12020017ae40 = [], _2291ec243b3f, _02889a1e5c63) {
      super(), this.protocols = _12020017ae40, this.url = _8d27f5da77ac.toString(), this.protocols = _12020017ae40;
      const s = _8d27f5da77ac => {
        this.protocols = _8d27f5da77ac, this.readyState = _c8d38abf8303.OPEN;
        const _12020017ae40 = new Event("\x6f\x70\x65\x6e");
        this.dispatchEvent(_12020017ae40);
      }, o = async _8d27f5da77ac => {
        const _12020017ae40 = new MessageEvent("\x6d\x65\x73\x73\x61\x67\x65", {
          data: _8d27f5da77ac
        });
        this.dispatchEvent(_12020017ae40);
      }, c = (_8d27f5da77ac, _12020017ae40) => {
        this.readyState = _c8d38abf8303.CLOSED;
        const _2291ec243b3f = new CloseEvent("\x63\x6c\x6f\x73\x65", {
          code: _8d27f5da77ac,
          reason: _12020017ae40
        });
        this.dispatchEvent(_2291ec243b3f);
      }, i = () => {
        this.readyState = _c8d38abf8303.CLOSED;
        const _8d27f5da77ac = new Event("\x65\x72\x72\x6f\x72");
        this.dispatchEvent(_8d27f5da77ac);
      };
      this.channel = new MessageChannel, this.channel.port1.onmessage = _8d27f5da77ac => {
        "\x6f\x70\x65\x6e" === _8d27f5da77ac.data.type ? s(_8d27f5da77ac.data.args[0]) : "\x6d\x65\x73\x73\x61\x67\x65" === _8d27f5da77ac.data.type ? o(_8d27f5da77ac.data.args[0]) : "\x63\x6c\x6f\x73\x65" === _8d27f5da77ac.data.type ? c(_8d27f5da77ac.data.args[0], _8d27f5da77ac.data.args[1]) : "\x65\x72\x72\x6f\x72" === _8d27f5da77ac.data.type && i();
      }, _2291ec243b3f.sendMessage({
        type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74",
        websocket: {
          url: _8d27f5da77ac.toString(),
          protocols: _12020017ae40,
          requestHeaders: _02889a1e5c63,
          channel: this.channel.port2
        }
      }, [ this.channel.port2 ]);
    }
    send(..._8d27f5da77ac) {
      if (this.readyState === _c8d38abf8303.CONNECTING) throw new DOMException("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x65\x78\x65\x63\x75\x74\x65\x20\x27\x73\x65\x6e\x64\x27\x20\x6f\x6e\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x53\x74\x69\x6c\x6c\x20\x69\x6e\x20\x43\x4f\x4e\x4e\x45\x43\x54\x49\x4e\x47\x20\x73\x74\x61\x74\x65\x2e");
      let _12020017ae40 = _8d27f5da77ac[0];
      _12020017ae40.buffer && (_12020017ae40 = _12020017ae40.buffer.slice(_12020017ae40.byteOffset, _12020017ae40.byteOffset + _12020017ae40.byteLength)), 
      _a98304979ba2.call(this.channel.port1, {
        type: "\x64\x61\x74\x61",
        data: _12020017ae40
      }, _12020017ae40 instanceof ArrayBuffer ? [ _12020017ae40 ] : []);
    }
    close(_8d27f5da77ac, _12020017ae40) {
      _a98304979ba2.call(this.channel.port1, {
        type: "\x63\x6c\x6f\x73\x65",
        closeCode: _8d27f5da77ac,
        closeReason: _12020017ae40
      });
    }
  }
  function w(_8d27f5da77ac, _12020017ae40, _2291ec243b3f) {
    console.error(`\x65\x72\x72\x6f\x72\x20\x77\x68\x69\x6c\x65\x20\x70\x72\x6f\x63\x65\x73\x73\x69\x6e\x67\x20\x27${_2291ec243b3f}\x27\x3a\x20`, _12020017ae40), _8d27f5da77ac.postMessage({
      type: "\x65\x72\x72\x6f\x72",
      error: _12020017ae40
    });
  }
  function f(_8d27f5da77ac) {
    for (let _12020017ae40 = 0; _12020017ae40 < _8d27f5da77ac.length; _12020017ae40++) {
      const _2291ec243b3f = _8d27f5da77ac[_12020017ae40];
      if (!"\x21\x23\x24\x25\x26\x27\x2a\x2b\x2d\x2e\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x5e\x5f\x60\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x7c\x7e".includes(_2291ec243b3f)) return !1;
    }
    return !0;
  }
  const _c64b534c8f39 = [ "\x77\x73\x3a", "\x77\x73\x73\x3a" ], _0fccb3cee072 = [ 101, 204, 205, 304 ], _7cad99196ef1 = [ 301, 302, 303, 307, 308 ];
  class m {
    worker;
    constructor(_8d27f5da77ac) {
      this.worker = new p(_8d27f5da77ac);
    }
    createWebSocket(_8d27f5da77ac, _12020017ae40 = [], _2291ec243b3f, _02889a1e5c63) {
      try {
        _8d27f5da77ac = new URL(_8d27f5da77ac);
      } catch (_12020017ae40) {
        throw new DOMException(`\x46\x61\x69\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x20\x27${_8d27f5da77ac}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
      }
      if (!_c64b534c8f39.includes(_8d27f5da77ac.protocol)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x27\x73\x20\x73\x63\x68\x65\x6d\x65\x20\x6d\x75\x73\x74\x20\x62\x65\x20\x65\x69\x74\x68\x65\x72\x20\x27\x77\x73\x27\x20\x6f\x72\x20\x27\x77\x73\x73\x27\x2e\x20\x27${_8d27f5da77ac.protocol}\x27\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x6c\x6c\x6f\x77\x65\x64\x2e`);
      Array.isArray(_12020017ae40) || (_12020017ae40 = [ _12020017ae40 ]), _12020017ae40 = _12020017ae40.map(String);
      for (const _8d27f5da77ac of _12020017ae40) if (!f(_8d27f5da77ac)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x73\x75\x62\x70\x72\x6f\x74\x6f\x63\x6f\x6c\x20\x27${_8d27f5da77ac}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
      _02889a1e5c63 = _02889a1e5c63 || {};
      return new u(_8d27f5da77ac, _12020017ae40, this.worker, _02889a1e5c63);
    }
    async fetch(_8d27f5da77ac, _2291ec243b3f) {
      const _02889a1e5c63 = new Request(_8d27f5da77ac, _2291ec243b3f), _6668885f03a8 = _2291ec243b3f?.headers || _02889a1e5c63.headers, _a98304979ba2 = _6668885f03a8 instanceof Headers ? Object.fromEntries(_6668885f03a8) : _6668885f03a8, _c8d38abf8303 = _02889a1e5c63.body;
      let _08feb09f32d3 = new URL(_02889a1e5c63.url);
      if (_08feb09f32d3.protocol.startsWith("\x62\x6c\x6f\x62\x3a")) {
        const _8d27f5da77ac = await _12020017ae40(_08feb09f32d3), _2291ec243b3f = new Response(_8d27f5da77ac.body, _8d27f5da77ac);
        return _2291ec243b3f.rawHeaders = Object.fromEntries(_8d27f5da77ac.headers), _2291ec243b3f.rawResponse = {
          body: _8d27f5da77ac.body,
          headers: Object.fromEntries(_8d27f5da77ac.headers),
          status: _8d27f5da77ac.status,
          statusText: _8d27f5da77ac.statusText
        }, _2291ec243b3f.finalURL = _08feb09f32d3.toString(), _2291ec243b3f;
      }
      for (let _8d27f5da77ac = 0; ;_8d27f5da77ac++) {
        let _12020017ae40 = (await this.worker.sendMessage({
          type: "\x66\x65\x74\x63\x68",
          fetch: {
            remote: _08feb09f32d3.toString(),
            method: _02889a1e5c63.method,
            headers: _a98304979ba2,
            body: _c8d38abf8303 || void 0
          }
        }, _c8d38abf8303 ? [ _c8d38abf8303 ] : [])).fetch, _6668885f03a8 = new Response(_0fccb3cee072.includes(_12020017ae40.status) ? void 0 : _12020017ae40.body, {
          headers: new Headers(_12020017ae40.headers),
          status: _12020017ae40.status,
          statusText: _12020017ae40.statusText
        });
        _6668885f03a8.rawHeaders = _12020017ae40.headers, _6668885f03a8.rawResponse = _12020017ae40, 
        _6668885f03a8.finalURL = _08feb09f32d3.toString();
        const _c64b534c8f39 = _2291ec243b3f?.redirect || _02889a1e5c63.redirect;
        if (!_7cad99196ef1.includes(_6668885f03a8.status)) return _6668885f03a8;
        switch (_c64b534c8f39) {
         case "\x66\x6f\x6c\x6c\x6f\x77":
          {
            const _12020017ae40 = _6668885f03a8.headers.get("\x6c\x6f\x63\x61\x74\x69\x6f\x6e");
            if (20 > _8d27f5da77ac && null !== _12020017ae40) {
              _08feb09f32d3 = new URL(_12020017ae40, _08feb09f32d3);
              continue;
            }
            throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");
          }

         case "\x65\x72\x72\x6f\x72":
          throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");

         case "\x6d\x61\x6e\x75\x61\x6c":
          return _6668885f03a8;
        }
      }
    }
  }
  console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x72\x75\x6e\x6e\x69\x6e\x67\x20\x76\x32\x2e\x31\x2e\x39\x20\x28\x62\x75\x69\x6c\x64\x20\x64\x63\x39\x64\x63\x36\x65\x29"), _8d27f5da77ac.BareClient = m, 
  _8d27f5da77ac.\u{42}\u{61}\u{72}\u{65}\u{4d}\u{75}\u{78}\u{43}\u{6f}\u{6e}\u{6e}\u{65}\u{63}\u{74}\u{69}\u{6f}\u{6e} = class {
    worker;
    constructor(_8d27f5da77ac) {
      this.worker = new p(_8d27f5da77ac);
    }
    async getTransport() {
      return (await this.worker.sendMessage({
        type: "\x67\x65\x74"
      })).name;
    }
    async setTransport(_8d27f5da77ac, _12020017ae40, _2291ec243b3f) {
      await this.setManualTransport(`\x0a\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x7b\x20\x64\x65\x66\x61\x75\x6c\x74\x3a\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x7d\x20\x3d\x20\x61\x77\x61\x69\x74\x20\x69\x6d\x70\x6f\x72\x74\x28\x22${_8d27f5da77ac}\x22\x29\x3b\x0a\x09\x09\x09\x72\x65\x74\x75\x72\x6e\x20\x5b\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2c\x20\x22${_8d27f5da77ac}\x22\x5d\x3b\x0a\x09\x09`, _12020017ae40, _2291ec243b3f);
    }
    async setManualTransport(_8d27f5da77ac, _12020017ae40, _2291ec243b3f) {
      if ("\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65" === _8d27f5da77ac) throw new Error("\x55\x73\x65\x20\x73\x65\x74\x52\x65\x6d\x6f\x74\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2e");
      await this.worker.sendMessage({
        type: "\x73\x65\x74",
        client: {
          function: _8d27f5da77ac,
          args: _12020017ae40
        }
      }, _2291ec243b3f);
    }
    async setRemoteTransport(_8d27f5da77ac, _12020017ae40) {
      const _2291ec243b3f = new MessageChannel;
      _2291ec243b3f.port1.onmessage = async _12020017ae40 => {
        const _2291ec243b3f = _12020017ae40.data.port, _02889a1e5c63 = _12020017ae40.data.message;
        if ("\x66\x65\x74\x63\x68" === _02889a1e5c63.type) try {
          _8d27f5da77ac.ready || await _8d27f5da77ac.init(), await async function(_8d27f5da77ac, _12020017ae40, _2291ec243b3f) {
            const _02889a1e5c63 = await _2291ec243b3f.request(new URL(_8d27f5da77ac.fetch.remote), _8d27f5da77ac.fetch.method, _8d27f5da77ac.fetch.body, _8d27f5da77ac.fetch.headers, null);
            if (!d() && _02889a1e5c63.body instanceof ReadableStream) {
              const _8d27f5da77ac = new Response(_02889a1e5c63.body);
              _02889a1e5c63.body = await _8d27f5da77ac.arrayBuffer();
            }
            _02889a1e5c63.body instanceof ReadableStream || _02889a1e5c63.body instanceof ArrayBuffer ? _a98304979ba2.call(_12020017ae40, {
              type: "\x66\x65\x74\x63\x68",
              fetch: _02889a1e5c63
            }, [ _02889a1e5c63.body ]) : _a98304979ba2.call(_12020017ae40, {
              type: "\x66\x65\x74\x63\x68",
              fetch: _02889a1e5c63
            });
          }(_02889a1e5c63, _2291ec243b3f, _8d27f5da77ac);
        } catch (_8d27f5da77ac) {
          w(_2291ec243b3f, _8d27f5da77ac, "\x66\x65\x74\x63\x68");
        } else if ("\x77\x65\x62\x73\x6f\x63\x6b\x65\x74" === _02889a1e5c63.type) try {
          _8d27f5da77ac.ready || await _8d27f5da77ac.init(), await async function(_8d27f5da77ac, _12020017ae40, _2291ec243b3f) {
            const [_02889a1e5c63, _6668885f03a8] = _2291ec243b3f.connect(new URL(_8d27f5da77ac.websocket.url), _8d27f5da77ac.websocket.protocols, _8d27f5da77ac.websocket.requestHeaders, _12020017ae40 => {
              _a98304979ba2.call(_8d27f5da77ac.websocket.channel, {
                type: "\x6f\x70\x65\x6e",
                args: [ _12020017ae40 ]
              });
            }, _12020017ae40 => {
              _12020017ae40 instanceof ArrayBuffer ? _a98304979ba2.call(_8d27f5da77ac.websocket.channel, {
                type: "\x6d\x65\x73\x73\x61\x67\x65",
                args: [ _12020017ae40 ]
              }, [ _12020017ae40 ]) : _a98304979ba2.call(_8d27f5da77ac.websocket.channel, {
                type: "\x6d\x65\x73\x73\x61\x67\x65",
                args: [ _12020017ae40 ]
              });
            }, (_12020017ae40, _2291ec243b3f) => {
              _a98304979ba2.call(_8d27f5da77ac.websocket.channel, {
                type: "\x63\x6c\x6f\x73\x65",
                args: [ _12020017ae40, _2291ec243b3f ]
              });
            }, _12020017ae40 => {
              _a98304979ba2.call(_8d27f5da77ac.websocket.channel, {
                type: "\x65\x72\x72\x6f\x72",
                args: [ _12020017ae40 ]
              });
            });
            _8d27f5da77ac.websocket.channel.onmessage = _8d27f5da77ac => {
              "\x64\x61\x74\x61" === _8d27f5da77ac.data.type ? _02889a1e5c63(_8d27f5da77ac.data.data) : "\x63\x6c\x6f\x73\x65" === _8d27f5da77ac.data.type && _6668885f03a8(_8d27f5da77ac.data.closeCode, _8d27f5da77ac.data.closeReason);
            }, _a98304979ba2.call(_12020017ae40, {
              type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74"
            });
          }(_02889a1e5c63, _2291ec243b3f, _8d27f5da77ac);
        } catch (_8d27f5da77ac) {
          w(_2291ec243b3f, _8d27f5da77ac, "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74");
        }
      }, await this.worker.sendMessage({
        type: "\x73\x65\x74",
        client: {
          function: "\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65",
          args: [ _2291ec243b3f.port2, _12020017ae40 ]
        }
      }, [ _2291ec243b3f.port2 ]);
    }
    getInnerPort() {
      return this.worker.port;
    }
  }, _8d27f5da77ac.BareWebSocket = u, _8d27f5da77ac.WebSocketFields = _c8d38abf8303, 
  _8d27f5da77ac.WorkerConnection = p, _8d27f5da77ac.\u{62}\u{72}\u{6f}\u{77}\u{73}\u{65}\u{72}\u{53}\u{75}\u{70}\u{70}\u{6f}\u{72}\u{74}\u{73}\u{54}\u{72}\u{61}\u{6e}\u{73}\u{66}\u{65}\u{72}\u{72}\u{69}\u{6e}\u{67}\u{53}\u{74}\u{72}\u{65}\u{61}\u{6d}\u{73} = d, 
  _8d27f5da77ac.default = m, _8d27f5da77ac.maxRedirects = 20, _8d27f5da77ac.validProtocol = f, 
  Object.defineProperty(_8d27f5da77ac, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
    value: !0
  });
});
