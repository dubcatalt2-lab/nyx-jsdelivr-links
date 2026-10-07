!function(_7bcd542fa320, _1ba4b19f22b9) {
  "\x6f\x62\x6a\x65\x63\x74" == typeof exports && "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof module ? _1ba4b19f22b9(exports) : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof define && define.amd ? define([ "\x65\x78\x70\x6f\x72\x74\x73" ], _1ba4b19f22b9) : _1ba4b19f22b9((_7bcd542fa320 = "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof globalThis ? globalThis : _7bcd542fa320 || self).\u{42}\u{61}\u{72}\u{65}\u{4d}\u{75}\u{78} = {});
}(this, function(_7bcd542fa320) {
  "use strict";
  const _1ba4b19f22b9 = globalThis.fetch, _1c60282b51db = globalThis.SharedWorker, _3883a58e7410 = globalThis.localStorage, _e797f45c9574 = globalThis.navigator.serviceWorker, _98137bcda6f3 = MessagePort.prototype.postMessage, _98bad7a47f6e = {
    prototype: {
      send: WebSocket.prototype.send
    },
    CLOSED: WebSocket.CLOSED,
    CLOSING: WebSocket.CLOSING,
    CONNECTING: WebSocket.CONNECTING,
    OPEN: WebSocket.OPEN
  };
  async function c() {
    const _7bcd542fa320 = (await self.clients.matchAll({
      type: "\x77\x69\x6e\x64\x6f\x77",
      includeUncontrolled: !0
    })).map(async _7bcd542fa320 => {
      const _1ba4b19f22b9 = await function(_7bcd542fa320) {
        let _1ba4b19f22b9 = new MessageChannel;
        return new Promise(_1c60282b51db => {
          _7bcd542fa320.postMessage({
            type: "\x67\x65\x74\x50\x6f\x72\x74",
            port: _1ba4b19f22b9.port2
          }, [ _1ba4b19f22b9.port2 ]), _1ba4b19f22b9.port1.onmessage = _7bcd542fa320 => {
            _1c60282b51db(_7bcd542fa320.data);
          };
        });
      }(_7bcd542fa320);
      return await i(_1ba4b19f22b9), _1ba4b19f22b9;
    }), _1ba4b19f22b9 = Promise.race([ Promise.any(_7bcd542fa320), new Promise((_7bcd542fa320, _1ba4b19f22b9) => setTimeout(_1ba4b19f22b9, 1e3, new TypeError("\x74\x69\x6d\x65\x6f\x75\x74"))) ]);
    try {
      return await _1ba4b19f22b9;
    } catch (_7bcd542fa320) {
      if (_7bcd542fa320 instanceof AggregateError) throw console.error("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x61\x73\x20\x61\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e"), 
      new Error("\x41\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e", {
        cause: _7bcd542fa320
      });
      return console.warn("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x77\x69\x74\x68\x69\x6e\x20\x31\x73\x2c\x20\x72\x65\x74\x72\x79\x69\x6e\x67"), 
      await c();
    }
  }
  function i(_7bcd542fa320) {
    const _1ba4b19f22b9 = new MessageChannel, _1c60282b51db = new Promise((_7bcd542fa320, _1c60282b51db) => {
      _1ba4b19f22b9.port1.onmessage = _1ba4b19f22b9 => {
        "\x70\x6f\x6e\x67" === _1ba4b19f22b9.data.type && _7bcd542fa320();
      }, setTimeout(_1c60282b51db, 1500);
    });
    return _98137bcda6f3.call(_7bcd542fa320, {
      message: {
        type: "\x70\x69\x6e\x67"
      },
      port: _1ba4b19f22b9.port2
    }, [ _1ba4b19f22b9.port2 ]), _1c60282b51db;
  }
  function l(_7bcd542fa320, _1ba4b19f22b9) {
    const _3883a58e7410 = new _1c60282b51db(_7bcd542fa320, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
    return _1ba4b19f22b9 && _e797f45c9574.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", _1ba4b19f22b9 => {
      if ("\x67\x65\x74\x50\x6f\x72\x74" === _1ba4b19f22b9.data.type && _1ba4b19f22b9.data.port) {
        console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x72\x65\x63\x69\x65\x76\x65\x64\x20\x72\x65\x71\x75\x65\x73\x74\x20\x66\x6f\x72\x20\x70\x6f\x72\x74\x20\x66\x72\x6f\x6d\x20\x73\x77");
        const _3883a58e7410 = new _1c60282b51db(_7bcd542fa320, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
        _98137bcda6f3.call(_1ba4b19f22b9.data.port, _3883a58e7410.port, [ _3883a58e7410.port ]);
      }
    }), _3883a58e7410.port;
  }
  let _9986bd7ce69b = null;
  function d() {
    if (null === _9986bd7ce69b) {
      const _7bcd542fa320 = new MessageChannel, _1ba4b19f22b9 = new ReadableStream;
      let _1c60282b51db;
      try {
        _98137bcda6f3.call(_7bcd542fa320.port1, _1ba4b19f22b9, [ _1ba4b19f22b9 ]), _1c60282b51db = !0;
      } catch (_7bcd542fa320) {
        _1c60282b51db = !1;
      }
      return _9986bd7ce69b = _1c60282b51db, _1c60282b51db;
    }
    return _9986bd7ce69b;
  }
  class p {
    channel;
    port;
    workerPath;
    constructor(_7bcd542fa320) {
      this.channel = new BroadcastChannel("\x62\x61\x72\x65\x2d\x6d\x75\x78"), _7bcd542fa320 instanceof MessagePort || _7bcd542fa320 instanceof Promise ? this.port = _7bcd542fa320 : this.createChannel(_7bcd542fa320, !0);
    }
    createChannel(_7bcd542fa320, _1ba4b19f22b9) {
      if (self.clients) this.port = c(), this.channel.onmessage = _7bcd542fa320 => {
        "\x72\x65\x66\x72\x65\x73\x68\x50\x6f\x72\x74" === _7bcd542fa320.data.type && (this.port = c());
      }; else if (_7bcd542fa320 && SharedWorker) {
        if (!_7bcd542fa320.startsWith("\x2f") && !_7bcd542fa320.includes("\x3a")) throw new Error("\x49\x6e\x76\x61\x6c\x69\x64\x20\x55\x52\x4c\x2e\x20\x4d\x75\x73\x74\x20\x62\x65\x20\x61\x62\x73\x6f\x6c\x75\x74\x65\x20\x6f\x72\x20\x73\x74\x61\x72\x74\x20\x61\x74\x20\x74\x68\x65\x20\x72\x6f\x6f\x74\x2e");
        this.port = l(_7bcd542fa320, _1ba4b19f22b9), console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x73\x65\x74\x74\x69\x6e\x67\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x20\x74\x6f", _7bcd542fa320), 
        _3883a58e7410["\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"] = _7bcd542fa320;
      } else {
        if (!SharedWorker) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x63\x68\x61\x6e\x6e\x65\x6c\x20\x74\x6f\x20\x74\x68\x65\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x2e");
        {
          const _7bcd542fa320 = _3883a58e7410["\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"];
          if (console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x67\x6f\x74\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x3a", _7bcd542fa320), !_7bcd542fa320) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x20\x77\x6f\x72\x6b\x65\x72\x50\x61\x74\x68\x20\x66\x72\x6f\x6d\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x2e");
          this.port = l(_7bcd542fa320, _1ba4b19f22b9);
        }
      }
    }
    async sendMessage(_7bcd542fa320, _1ba4b19f22b9) {
      this.port instanceof Promise && (this.port = await this.port);
      try {
        await i(this.port);
      } catch {
        return console.warn("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x70\x69\x6e\x67\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x66\x72\x6f\x6d\x20\x74\x68\x65\x20\x77\x6f\x72\x6b\x65\x72\x20\x77\x69\x74\x68\x69\x6e\x20\x31\x2e\x35\x73\x2e\x20\x41\x73\x73\x75\x6d\x69\x6e\x67\x20\x70\x6f\x72\x74\x20\x69\x73\x20\x64\x65\x61\x64\x2e"), 
        this.createChannel(), await this.sendMessage(_7bcd542fa320, _1ba4b19f22b9);
      }
      const _1c60282b51db = new MessageChannel, _3883a58e7410 = [ _1c60282b51db.port2, ..._1ba4b19f22b9 || [] ], _e797f45c9574 = new Promise((_7bcd542fa320, _1ba4b19f22b9) => {
        _1c60282b51db.port1.onmessage = _1c60282b51db => {
          const _3883a58e7410 = _1c60282b51db.data;
          "\x65\x72\x72\x6f\x72" === _3883a58e7410.type ? _1ba4b19f22b9(_3883a58e7410.error) : _7bcd542fa320(_3883a58e7410);
        };
      });
      return _98137bcda6f3.call(this.port, {
        message: _7bcd542fa320,
        port: _1c60282b51db.port2
      }, _3883a58e7410), await _e797f45c9574;
    }
  }
  class u extends EventTarget {
    protocols;
    url;
    readyState=_98bad7a47f6e.CONNECTING;
    channel;
    constructor(_7bcd542fa320, _1ba4b19f22b9 = [], _1c60282b51db, _3883a58e7410) {
      super(), this.protocols = _1ba4b19f22b9, this.url = _7bcd542fa320.toString(), this.protocols = _1ba4b19f22b9;
      const s = _7bcd542fa320 => {
        this.protocols = _7bcd542fa320, this.readyState = _98bad7a47f6e.OPEN;
        const _1ba4b19f22b9 = new Event("\x6f\x70\x65\x6e");
        this.dispatchEvent(_1ba4b19f22b9);
      }, o = async _7bcd542fa320 => {
        const _1ba4b19f22b9 = new MessageEvent("\x6d\x65\x73\x73\x61\x67\x65", {
          data: _7bcd542fa320
        });
        this.dispatchEvent(_1ba4b19f22b9);
      }, c = (_7bcd542fa320, _1ba4b19f22b9) => {
        this.readyState = _98bad7a47f6e.CLOSED;
        const _1c60282b51db = new CloseEvent("\x63\x6c\x6f\x73\x65", {
          code: _7bcd542fa320,
          reason: _1ba4b19f22b9
        });
        this.dispatchEvent(_1c60282b51db);
      }, i = () => {
        this.readyState = _98bad7a47f6e.CLOSED;
        const _7bcd542fa320 = new Event("\x65\x72\x72\x6f\x72");
        this.dispatchEvent(_7bcd542fa320);
      };
      this.channel = new MessageChannel, this.channel.port1.onmessage = _7bcd542fa320 => {
        "\x6f\x70\x65\x6e" === _7bcd542fa320.data.type ? s(_7bcd542fa320.data.args[0]) : "\x6d\x65\x73\x73\x61\x67\x65" === _7bcd542fa320.data.type ? o(_7bcd542fa320.data.args[0]) : "\x63\x6c\x6f\x73\x65" === _7bcd542fa320.data.type ? c(_7bcd542fa320.data.args[0], _7bcd542fa320.data.args[1]) : "\x65\x72\x72\x6f\x72" === _7bcd542fa320.data.type && i();
      }, _1c60282b51db.sendMessage({
        type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74",
        websocket: {
          url: _7bcd542fa320.toString(),
          protocols: _1ba4b19f22b9,
          requestHeaders: _3883a58e7410,
          channel: this.channel.port2
        }
      }, [ this.channel.port2 ]);
    }
    send(..._7bcd542fa320) {
      if (this.readyState === _98bad7a47f6e.CONNECTING) throw new DOMException("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x65\x78\x65\x63\x75\x74\x65\x20\x27\x73\x65\x6e\x64\x27\x20\x6f\x6e\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x53\x74\x69\x6c\x6c\x20\x69\x6e\x20\x43\x4f\x4e\x4e\x45\x43\x54\x49\x4e\x47\x20\x73\x74\x61\x74\x65\x2e");
      let _1ba4b19f22b9 = _7bcd542fa320[0];
      _1ba4b19f22b9.buffer && (_1ba4b19f22b9 = _1ba4b19f22b9.buffer.slice(_1ba4b19f22b9.byteOffset, _1ba4b19f22b9.byteOffset + _1ba4b19f22b9.byteLength)), 
      _98137bcda6f3.call(this.channel.port1, {
        type: "\x64\x61\x74\x61",
        data: _1ba4b19f22b9
      }, _1ba4b19f22b9 instanceof ArrayBuffer ? [ _1ba4b19f22b9 ] : []);
    }
    close(_7bcd542fa320, _1ba4b19f22b9) {
      _98137bcda6f3.call(this.channel.port1, {
        type: "\x63\x6c\x6f\x73\x65",
        closeCode: _7bcd542fa320,
        closeReason: _1ba4b19f22b9
      });
    }
  }
  function w(_7bcd542fa320, _1ba4b19f22b9, _1c60282b51db) {
    console.error(`\x65\x72\x72\x6f\x72\x20\x77\x68\x69\x6c\x65\x20\x70\x72\x6f\x63\x65\x73\x73\x69\x6e\x67\x20\x27${_1c60282b51db}\x27\x3a\x20`, _1ba4b19f22b9), _7bcd542fa320.postMessage({
      type: "\x65\x72\x72\x6f\x72",
      error: _1ba4b19f22b9
    });
  }
  function f(_7bcd542fa320) {
    for (let _1ba4b19f22b9 = 0; _1ba4b19f22b9 < _7bcd542fa320.length; _1ba4b19f22b9++) {
      const _1c60282b51db = _7bcd542fa320[_1ba4b19f22b9];
      if (!"\x21\x23\x24\x25\x26\x27\x2a\x2b\x2d\x2e\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x5e\x5f\x60\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x7c\x7e".includes(_1c60282b51db)) return !1;
    }
    return !0;
  }
  const _9e426a55530e = [ "\x77\x73\x3a", "\x77\x73\x73\x3a" ], _260c3db30103 = [ 101, 204, 205, 304 ], _15223e88e131 = [ 301, 302, 303, 307, 308 ];
  class m {
    worker;
    constructor(_7bcd542fa320) {
      this.worker = new p(_7bcd542fa320);
    }
    createWebSocket(_7bcd542fa320, _1ba4b19f22b9 = [], _1c60282b51db, _3883a58e7410) {
      try {
        _7bcd542fa320 = new URL(_7bcd542fa320);
      } catch (_1ba4b19f22b9) {
        throw new DOMException(`\x46\x61\x69\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x20\x27${_7bcd542fa320}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
      }
      if (!_9e426a55530e.includes(_7bcd542fa320.protocol)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x27\x73\x20\x73\x63\x68\x65\x6d\x65\x20\x6d\x75\x73\x74\x20\x62\x65\x20\x65\x69\x74\x68\x65\x72\x20\x27\x77\x73\x27\x20\x6f\x72\x20\x27\x77\x73\x73\x27\x2e\x20\x27${_7bcd542fa320.protocol}\x27\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x6c\x6c\x6f\x77\x65\x64\x2e`);
      Array.isArray(_1ba4b19f22b9) || (_1ba4b19f22b9 = [ _1ba4b19f22b9 ]), _1ba4b19f22b9 = _1ba4b19f22b9.map(String);
      for (const _7bcd542fa320 of _1ba4b19f22b9) if (!f(_7bcd542fa320)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x73\x75\x62\x70\x72\x6f\x74\x6f\x63\x6f\x6c\x20\x27${_7bcd542fa320}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
      _3883a58e7410 = _3883a58e7410 || {};
      return new u(_7bcd542fa320, _1ba4b19f22b9, this.worker, _3883a58e7410);
    }
    async fetch(_7bcd542fa320, _1c60282b51db) {
      const _3883a58e7410 = new Request(_7bcd542fa320, _1c60282b51db), _e797f45c9574 = _1c60282b51db?.headers || _3883a58e7410.headers, _98137bcda6f3 = _e797f45c9574 instanceof Headers ? Object.fromEntries(_e797f45c9574) : _e797f45c9574, _98bad7a47f6e = _3883a58e7410.body;
      let _9986bd7ce69b = new URL(_3883a58e7410.url);
      if (_9986bd7ce69b.protocol.startsWith("\x62\x6c\x6f\x62\x3a")) {
        const _7bcd542fa320 = await _1ba4b19f22b9(_9986bd7ce69b), _1c60282b51db = new Response(_7bcd542fa320.body, _7bcd542fa320);
        return _1c60282b51db.rawHeaders = Object.fromEntries(_7bcd542fa320.headers), _1c60282b51db.rawResponse = {
          body: _7bcd542fa320.body,
          headers: Object.fromEntries(_7bcd542fa320.headers),
          status: _7bcd542fa320.status,
          statusText: _7bcd542fa320.statusText
        }, _1c60282b51db.finalURL = _9986bd7ce69b.toString(), _1c60282b51db;
      }
      for (let _7bcd542fa320 = 0; ;_7bcd542fa320++) {
        let _1ba4b19f22b9 = (await this.worker.sendMessage({
          type: "\x66\x65\x74\x63\x68",
          fetch: {
            remote: _9986bd7ce69b.toString(),
            method: _3883a58e7410.method,
            headers: _98137bcda6f3,
            body: _98bad7a47f6e || void 0
          }
        }, _98bad7a47f6e ? [ _98bad7a47f6e ] : [])).fetch, _e797f45c9574 = new Response(_260c3db30103.includes(_1ba4b19f22b9.status) ? void 0 : _1ba4b19f22b9.body, {
          headers: new Headers(_1ba4b19f22b9.headers),
          status: _1ba4b19f22b9.status,
          statusText: _1ba4b19f22b9.statusText
        });
        _e797f45c9574.rawHeaders = _1ba4b19f22b9.headers, _e797f45c9574.rawResponse = _1ba4b19f22b9, 
        _e797f45c9574.finalURL = _9986bd7ce69b.toString();
        const _9e426a55530e = _1c60282b51db?.redirect || _3883a58e7410.redirect;
        if (!_15223e88e131.includes(_e797f45c9574.status)) return _e797f45c9574;
        switch (_9e426a55530e) {
         case "\x66\x6f\x6c\x6c\x6f\x77":
          {
            const _1ba4b19f22b9 = _e797f45c9574.headers.get("\x6c\x6f\x63\x61\x74\x69\x6f\x6e");
            if (20 > _7bcd542fa320 && null !== _1ba4b19f22b9) {
              _9986bd7ce69b = new URL(_1ba4b19f22b9, _9986bd7ce69b);
              continue;
            }
            throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");
          }

         case "\x65\x72\x72\x6f\x72":
          throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");

         case "\x6d\x61\x6e\x75\x61\x6c":
          return _e797f45c9574;
        }
      }
    }
  }
  console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x72\x75\x6e\x6e\x69\x6e\x67\x20\x76\x32\x2e\x31\x2e\x39\x20\x28\x62\x75\x69\x6c\x64\x20\x64\x63\x39\x64\x63\x36\x65\x29"), _7bcd542fa320.BareClient = m, 
  _7bcd542fa320.\u{42}\u{61}\u{72}\u{65}\u{4d}\u{75}\u{78}\u{43}\u{6f}\u{6e}\u{6e}\u{65}\u{63}\u{74}\u{69}\u{6f}\u{6e} = class {
    worker;
    constructor(_7bcd542fa320) {
      this.worker = new p(_7bcd542fa320);
    }
    async getTransport() {
      return (await this.worker.sendMessage({
        type: "\x67\x65\x74"
      })).name;
    }
    async setTransport(_7bcd542fa320, _1ba4b19f22b9, _1c60282b51db) {
      await this.setManualTransport(`\x0a\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x7b\x20\x64\x65\x66\x61\x75\x6c\x74\x3a\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x7d\x20\x3d\x20\x61\x77\x61\x69\x74\x20\x69\x6d\x70\x6f\x72\x74\x28\x22${_7bcd542fa320}\x22\x29\x3b\x0a\x09\x09\x09\x72\x65\x74\x75\x72\x6e\x20\x5b\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2c\x20\x22${_7bcd542fa320}\x22\x5d\x3b\x0a\x09\x09`, _1ba4b19f22b9, _1c60282b51db);
    }
    async setManualTransport(_7bcd542fa320, _1ba4b19f22b9, _1c60282b51db) {
      if ("\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65" === _7bcd542fa320) throw new Error("\x55\x73\x65\x20\x73\x65\x74\x52\x65\x6d\x6f\x74\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2e");
      await this.worker.sendMessage({
        type: "\x73\x65\x74",
        client: {
          function: _7bcd542fa320,
          args: _1ba4b19f22b9
        }
      }, _1c60282b51db);
    }
    async setRemoteTransport(_7bcd542fa320, _1ba4b19f22b9) {
      const _1c60282b51db = new MessageChannel;
      _1c60282b51db.port1.onmessage = async _1ba4b19f22b9 => {
        const _1c60282b51db = _1ba4b19f22b9.data.port, _3883a58e7410 = _1ba4b19f22b9.data.message;
        if ("\x66\x65\x74\x63\x68" === _3883a58e7410.type) try {
          _7bcd542fa320.ready || await _7bcd542fa320.init(), await async function(_7bcd542fa320, _1ba4b19f22b9, _1c60282b51db) {
            const _3883a58e7410 = await _1c60282b51db.request(new URL(_7bcd542fa320.fetch.remote), _7bcd542fa320.fetch.method, _7bcd542fa320.fetch.body, _7bcd542fa320.fetch.headers, null);
            if (!d() && _3883a58e7410.body instanceof ReadableStream) {
              const _7bcd542fa320 = new Response(_3883a58e7410.body);
              _3883a58e7410.body = await _7bcd542fa320.arrayBuffer();
            }
            _3883a58e7410.body instanceof ReadableStream || _3883a58e7410.body instanceof ArrayBuffer ? _98137bcda6f3.call(_1ba4b19f22b9, {
              type: "\x66\x65\x74\x63\x68",
              fetch: _3883a58e7410
            }, [ _3883a58e7410.body ]) : _98137bcda6f3.call(_1ba4b19f22b9, {
              type: "\x66\x65\x74\x63\x68",
              fetch: _3883a58e7410
            });
          }(_3883a58e7410, _1c60282b51db, _7bcd542fa320);
        } catch (_7bcd542fa320) {
          w(_1c60282b51db, _7bcd542fa320, "\x66\x65\x74\x63\x68");
        } else if ("\x77\x65\x62\x73\x6f\x63\x6b\x65\x74" === _3883a58e7410.type) try {
          _7bcd542fa320.ready || await _7bcd542fa320.init(), await async function(_7bcd542fa320, _1ba4b19f22b9, _1c60282b51db) {
            const [_3883a58e7410, _e797f45c9574] = _1c60282b51db.connect(new URL(_7bcd542fa320.websocket.url), _7bcd542fa320.websocket.protocols, _7bcd542fa320.websocket.requestHeaders, _1ba4b19f22b9 => {
              _98137bcda6f3.call(_7bcd542fa320.websocket.channel, {
                type: "\x6f\x70\x65\x6e",
                args: [ _1ba4b19f22b9 ]
              });
            }, _1ba4b19f22b9 => {
              _1ba4b19f22b9 instanceof ArrayBuffer ? _98137bcda6f3.call(_7bcd542fa320.websocket.channel, {
                type: "\x6d\x65\x73\x73\x61\x67\x65",
                args: [ _1ba4b19f22b9 ]
              }, [ _1ba4b19f22b9 ]) : _98137bcda6f3.call(_7bcd542fa320.websocket.channel, {
                type: "\x6d\x65\x73\x73\x61\x67\x65",
                args: [ _1ba4b19f22b9 ]
              });
            }, (_1ba4b19f22b9, _1c60282b51db) => {
              _98137bcda6f3.call(_7bcd542fa320.websocket.channel, {
                type: "\x63\x6c\x6f\x73\x65",
                args: [ _1ba4b19f22b9, _1c60282b51db ]
              });
            }, _1ba4b19f22b9 => {
              _98137bcda6f3.call(_7bcd542fa320.websocket.channel, {
                type: "\x65\x72\x72\x6f\x72",
                args: [ _1ba4b19f22b9 ]
              });
            });
            _7bcd542fa320.websocket.channel.onmessage = _7bcd542fa320 => {
              "\x64\x61\x74\x61" === _7bcd542fa320.data.type ? _3883a58e7410(_7bcd542fa320.data.data) : "\x63\x6c\x6f\x73\x65" === _7bcd542fa320.data.type && _e797f45c9574(_7bcd542fa320.data.closeCode, _7bcd542fa320.data.closeReason);
            }, _98137bcda6f3.call(_1ba4b19f22b9, {
              type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74"
            });
          }(_3883a58e7410, _1c60282b51db, _7bcd542fa320);
        } catch (_7bcd542fa320) {
          w(_1c60282b51db, _7bcd542fa320, "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74");
        }
      }, await this.worker.sendMessage({
        type: "\x73\x65\x74",
        client: {
          function: "\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65",
          args: [ _1c60282b51db.port2, _1ba4b19f22b9 ]
        }
      }, [ _1c60282b51db.port2 ]);
    }
    getInnerPort() {
      return this.worker.port;
    }
  }, _7bcd542fa320.BareWebSocket = u, _7bcd542fa320.WebSocketFields = _98bad7a47f6e, 
  _7bcd542fa320.WorkerConnection = p, _7bcd542fa320.\u{62}\u{72}\u{6f}\u{77}\u{73}\u{65}\u{72}\u{53}\u{75}\u{70}\u{70}\u{6f}\u{72}\u{74}\u{73}\u{54}\u{72}\u{61}\u{6e}\u{73}\u{66}\u{65}\u{72}\u{72}\u{69}\u{6e}\u{67}\u{53}\u{74}\u{72}\u{65}\u{61}\u{6d}\u{73} = d, 
  _7bcd542fa320.default = m, _7bcd542fa320.maxRedirects = 20, _7bcd542fa320.validProtocol = f, 
  Object.defineProperty(_7bcd542fa320, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
    value: !0
  });
});
