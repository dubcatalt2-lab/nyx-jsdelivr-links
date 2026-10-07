!function(_5995852ff2b8, _5b8d834290ae) {
  "\x6f\x62\x6a\x65\x63\x74" == typeof exports && "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof module ? _5b8d834290ae(exports) : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof define && define.amd ? define([ "\x65\x78\x70\x6f\x72\x74\x73" ], _5b8d834290ae) : _5b8d834290ae((_5995852ff2b8 = "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof globalThis ? globalThis : _5995852ff2b8 || self).BareMux = {});
}(this, function(_5995852ff2b8) {
  "use strict";
  const _5b8d834290ae = globalThis.fetch, _2f149434b242 = globalThis.SharedWorker, _7cb27c4fcb51 = globalThis.localStorage, _f620f4b69795 = globalThis.navigator.serviceWorker, _c6b8f6894827 = MessagePort.prototype.postMessage, _4f199c724125 = {
    prototype: {
      send: WebSocket.prototype.send
    },
    CLOSED: WebSocket.CLOSED,
    CLOSING: WebSocket.CLOSING,
    CONNECTING: WebSocket.CONNECTING,
    OPEN: WebSocket.OPEN
  };
  async function c() {
    const _5995852ff2b8 = (await self.clients.matchAll({
      type: "\x77\x69\x6e\x64\x6f\x77",
      includeUncontrolled: !0
    })).map(async _5995852ff2b8 => {
      const _5b8d834290ae = await function(_5995852ff2b8) {
        let _5b8d834290ae = new MessageChannel;
        return new Promise(_2f149434b242 => {
          _5995852ff2b8.postMessage({
            type: "\x67\x65\x74\x50\x6f\x72\x74",
            port: _5b8d834290ae.port2
          }, [ _5b8d834290ae.port2 ]), _5b8d834290ae.port1.onmessage = _5995852ff2b8 => {
            _2f149434b242(_5995852ff2b8.data);
          };
        });
      }(_5995852ff2b8);
      return await i(_5b8d834290ae), _5b8d834290ae;
    }), _5b8d834290ae = Promise.race([ Promise.any(_5995852ff2b8), new Promise((_5995852ff2b8, _5b8d834290ae) => setTimeout(_5b8d834290ae, 1e3, new TypeError("\x74\x69\x6d\x65\x6f\x75\x74"))) ]);
    try {
      return await _5b8d834290ae;
    } catch (_5995852ff2b8) {
      if (_5995852ff2b8 instanceof AggregateError) throw console.error("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x61\x73\x20\x61\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e"), 
      new Error("\x41\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e", {
        cause: _5995852ff2b8
      });
      return console.warn("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x77\x69\x74\x68\x69\x6e\x20\x31\x73\x2c\x20\x72\x65\x74\x72\x79\x69\x6e\x67"), 
      await c();
    }
  }
  function i(_5995852ff2b8) {
    const _5b8d834290ae = new MessageChannel, _2f149434b242 = new Promise((_5995852ff2b8, _2f149434b242) => {
      _5b8d834290ae.port1.onmessage = _5b8d834290ae => {
        "\x70\x6f\x6e\x67" === _5b8d834290ae.data.type && _5995852ff2b8();
      }, setTimeout(_2f149434b242, 1500);
    });
    return _c6b8f6894827.call(_5995852ff2b8, {
      message: {
        type: "\x70\x69\x6e\x67"
      },
      port: _5b8d834290ae.port2
    }, [ _5b8d834290ae.port2 ]), _2f149434b242;
  }
  function l(_5995852ff2b8, _5b8d834290ae) {
    const _7cb27c4fcb51 = new _2f149434b242(_5995852ff2b8, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
    return _5b8d834290ae && _f620f4b69795.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", _5b8d834290ae => {
      if ("\x67\x65\x74\x50\x6f\x72\x74" === _5b8d834290ae.data.type && _5b8d834290ae.data.port) {
        console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x72\x65\x63\x69\x65\x76\x65\x64\x20\x72\x65\x71\x75\x65\x73\x74\x20\x66\x6f\x72\x20\x70\x6f\x72\x74\x20\x66\x72\x6f\x6d\x20\x73\x77");
        const _7cb27c4fcb51 = new _2f149434b242(_5995852ff2b8, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
        _c6b8f6894827.call(_5b8d834290ae.data.port, _7cb27c4fcb51.port, [ _7cb27c4fcb51.port ]);
      }
    }), _7cb27c4fcb51.port;
  }
  let _12fb538101aa = null;
  function d() {
    if (null === _12fb538101aa) {
      const _5995852ff2b8 = new MessageChannel, _5b8d834290ae = new ReadableStream;
      let _2f149434b242;
      try {
        _c6b8f6894827.call(_5995852ff2b8.port1, _5b8d834290ae, [ _5b8d834290ae ]), _2f149434b242 = !0;
      } catch (_5995852ff2b8) {
        _2f149434b242 = !1;
      }
      return _12fb538101aa = _2f149434b242, _2f149434b242;
    }
    return _12fb538101aa;
  }
  class p {
    channel;
    port;
    workerPath;
    constructor(_5995852ff2b8) {
      this.channel = new BroadcastChannel("\x62\x61\x72\x65\x2d\x6d\x75\x78"), _5995852ff2b8 instanceof MessagePort || _5995852ff2b8 instanceof Promise ? this.port = _5995852ff2b8 : this.createChannel(_5995852ff2b8, !0);
    }
    createChannel(_5995852ff2b8, _5b8d834290ae) {
      if (self.clients) this.port = c(), this.channel.onmessage = _5995852ff2b8 => {
        "\x72\x65\x66\x72\x65\x73\x68\x50\x6f\x72\x74" === _5995852ff2b8.data.type && (this.port = c());
      }; else if (_5995852ff2b8 && SharedWorker) {
        if (!_5995852ff2b8.startsWith("\x2f") && !_5995852ff2b8.includes("\x3a")) throw new Error("\x49\x6e\x76\x61\x6c\x69\x64\x20\x55\x52\x4c\x2e\x20\x4d\x75\x73\x74\x20\x62\x65\x20\x61\x62\x73\x6f\x6c\x75\x74\x65\x20\x6f\x72\x20\x73\x74\x61\x72\x74\x20\x61\x74\x20\x74\x68\x65\x20\x72\x6f\x6f\x74\x2e");
        this.port = l(_5995852ff2b8, _5b8d834290ae), console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x73\x65\x74\x74\x69\x6e\x67\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x20\x74\x6f", _5995852ff2b8), 
        _7cb27c4fcb51["\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"] = _5995852ff2b8;
      } else {
        if (!SharedWorker) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x63\x68\x61\x6e\x6e\x65\x6c\x20\x74\x6f\x20\x74\x68\x65\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x2e");
        {
          const _5995852ff2b8 = _7cb27c4fcb51["\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"];
          if (console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x67\x6f\x74\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x3a", _5995852ff2b8), !_5995852ff2b8) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x20\x77\x6f\x72\x6b\x65\x72\x50\x61\x74\x68\x20\x66\x72\x6f\x6d\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x2e");
          this.port = l(_5995852ff2b8, _5b8d834290ae);
        }
      }
    }
    async sendMessage(_5995852ff2b8, _5b8d834290ae) {
      this.port instanceof Promise && (this.port = await this.port);
      try {
        await i(this.port);
      } catch {
        return console.warn("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x70\x69\x6e\x67\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x66\x72\x6f\x6d\x20\x74\x68\x65\x20\x77\x6f\x72\x6b\x65\x72\x20\x77\x69\x74\x68\x69\x6e\x20\x31\x2e\x35\x73\x2e\x20\x41\x73\x73\x75\x6d\x69\x6e\x67\x20\x70\x6f\x72\x74\x20\x69\x73\x20\x64\x65\x61\x64\x2e"), 
        this.createChannel(), await this.sendMessage(_5995852ff2b8, _5b8d834290ae);
      }
      const _2f149434b242 = new MessageChannel, _7cb27c4fcb51 = [ _2f149434b242.port2, ..._5b8d834290ae || [] ], _f620f4b69795 = new Promise((_5995852ff2b8, _5b8d834290ae) => {
        _2f149434b242.port1.onmessage = _2f149434b242 => {
          const _7cb27c4fcb51 = _2f149434b242.data;
          "\x65\x72\x72\x6f\x72" === _7cb27c4fcb51.type ? _5b8d834290ae(_7cb27c4fcb51.error) : _5995852ff2b8(_7cb27c4fcb51);
        };
      });
      return _c6b8f6894827.call(this.port, {
        message: _5995852ff2b8,
        port: _2f149434b242.port2
      }, _7cb27c4fcb51), await _f620f4b69795;
    }
  }
  class u extends EventTarget {
    protocols;
    url;
    readyState=_4f199c724125.CONNECTING;
    channel;
    constructor(_5995852ff2b8, _5b8d834290ae = [], _2f149434b242, _7cb27c4fcb51) {
      super(), this.protocols = _5b8d834290ae, this.url = _5995852ff2b8.toString(), this.protocols = _5b8d834290ae;
      const s = _5995852ff2b8 => {
        this.protocols = _5995852ff2b8, this.readyState = _4f199c724125.OPEN;
        const _5b8d834290ae = new Event("\x6f\x70\x65\x6e");
        this.dispatchEvent(_5b8d834290ae);
      }, o = async _5995852ff2b8 => {
        const _5b8d834290ae = new MessageEvent("\x6d\x65\x73\x73\x61\x67\x65", {
          data: _5995852ff2b8
        });
        this.dispatchEvent(_5b8d834290ae);
      }, c = (_5995852ff2b8, _5b8d834290ae) => {
        this.readyState = _4f199c724125.CLOSED;
        const _2f149434b242 = new CloseEvent("\x63\x6c\x6f\x73\x65", {
          code: _5995852ff2b8,
          reason: _5b8d834290ae
        });
        this.dispatchEvent(_2f149434b242);
      }, i = () => {
        this.readyState = _4f199c724125.CLOSED;
        const _5995852ff2b8 = new Event("\x65\x72\x72\x6f\x72");
        this.dispatchEvent(_5995852ff2b8);
      };
      this.channel = new MessageChannel, this.channel.port1.onmessage = _5995852ff2b8 => {
        "\x6f\x70\x65\x6e" === _5995852ff2b8.data.type ? s(_5995852ff2b8.data.args[0]) : "\x6d\x65\x73\x73\x61\x67\x65" === _5995852ff2b8.data.type ? o(_5995852ff2b8.data.args[0]) : "\x63\x6c\x6f\x73\x65" === _5995852ff2b8.data.type ? c(_5995852ff2b8.data.args[0], _5995852ff2b8.data.args[1]) : "\x65\x72\x72\x6f\x72" === _5995852ff2b8.data.type && i();
      }, _2f149434b242.sendMessage({
        type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74",
        websocket: {
          url: _5995852ff2b8.toString(),
          protocols: _5b8d834290ae,
          requestHeaders: _7cb27c4fcb51,
          channel: this.channel.port2
        }
      }, [ this.channel.port2 ]);
    }
    send(..._5995852ff2b8) {
      if (this.readyState === _4f199c724125.CONNECTING) throw new DOMException("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x65\x78\x65\x63\x75\x74\x65\x20\x27\x73\x65\x6e\x64\x27\x20\x6f\x6e\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x53\x74\x69\x6c\x6c\x20\x69\x6e\x20\x43\x4f\x4e\x4e\x45\x43\x54\x49\x4e\x47\x20\x73\x74\x61\x74\x65\x2e");
      let _5b8d834290ae = _5995852ff2b8[0];
      _5b8d834290ae.buffer && (_5b8d834290ae = _5b8d834290ae.buffer.slice(_5b8d834290ae.byteOffset, _5b8d834290ae.byteOffset + _5b8d834290ae.byteLength)), 
      _c6b8f6894827.call(this.channel.port1, {
        type: "\x64\x61\x74\x61",
        data: _5b8d834290ae
      }, _5b8d834290ae instanceof ArrayBuffer ? [ _5b8d834290ae ] : []);
    }
    close(_5995852ff2b8, _5b8d834290ae) {
      _c6b8f6894827.call(this.channel.port1, {
        type: "\x63\x6c\x6f\x73\x65",
        closeCode: _5995852ff2b8,
        closeReason: _5b8d834290ae
      });
    }
  }
  function w(_5995852ff2b8, _5b8d834290ae, _2f149434b242) {
    console.error(`\x65\x72\x72\x6f\x72\x20\x77\x68\x69\x6c\x65\x20\x70\x72\x6f\x63\x65\x73\x73\x69\x6e\x67\x20\x27${_2f149434b242}\x27\x3a\x20`, _5b8d834290ae), _5995852ff2b8.postMessage({
      type: "\x65\x72\x72\x6f\x72",
      error: _5b8d834290ae
    });
  }
  function f(_5995852ff2b8) {
    for (let _5b8d834290ae = 0; _5b8d834290ae < _5995852ff2b8.length; _5b8d834290ae++) {
      const _2f149434b242 = _5995852ff2b8[_5b8d834290ae];
      if (!"\x21\x23\x24\x25\x26\x27\x2a\x2b\x2d\x2e\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x5e\x5f\x60\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x7c\x7e".includes(_2f149434b242)) return !1;
    }
    return !0;
  }
  const _946d8fab26c3 = [ "\x77\x73\x3a", "\x77\x73\x73\x3a" ], _3846db1e0671 = [ 101, 204, 205, 304 ], _d954d90da060 = [ 301, 302, 303, 307, 308 ];
  class m {
    worker;
    constructor(_5995852ff2b8) {
      this.worker = new p(_5995852ff2b8);
    }
    createWebSocket(_5995852ff2b8, _5b8d834290ae = [], _2f149434b242, _7cb27c4fcb51) {
      try {
        _5995852ff2b8 = new URL(_5995852ff2b8);
      } catch (_5b8d834290ae) {
        throw new DOMException(`\x46\x61\x69\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x20\x27${_5995852ff2b8}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
      }
      if (!_946d8fab26c3.includes(_5995852ff2b8.protocol)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x27\x73\x20\x73\x63\x68\x65\x6d\x65\x20\x6d\x75\x73\x74\x20\x62\x65\x20\x65\x69\x74\x68\x65\x72\x20\x27\x77\x73\x27\x20\x6f\x72\x20\x27\x77\x73\x73\x27\x2e\x20\x27${_5995852ff2b8.protocol}\x27\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x6c\x6c\x6f\x77\x65\x64\x2e`);
      Array.isArray(_5b8d834290ae) || (_5b8d834290ae = [ _5b8d834290ae ]), _5b8d834290ae = _5b8d834290ae.map(String);
      for (const _5995852ff2b8 of _5b8d834290ae) if (!f(_5995852ff2b8)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x73\x75\x62\x70\x72\x6f\x74\x6f\x63\x6f\x6c\x20\x27${_5995852ff2b8}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
      _7cb27c4fcb51 = _7cb27c4fcb51 || {};
      return new u(_5995852ff2b8, _5b8d834290ae, this.worker, _7cb27c4fcb51);
    }
    async fetch(_5995852ff2b8, _2f149434b242) {
      const _7cb27c4fcb51 = new Request(_5995852ff2b8, _2f149434b242), _f620f4b69795 = _2f149434b242?.headers || _7cb27c4fcb51.headers, _c6b8f6894827 = _f620f4b69795 instanceof Headers ? Object.fromEntries(_f620f4b69795) : _f620f4b69795, _4f199c724125 = _7cb27c4fcb51.body;
      let _12fb538101aa = new URL(_7cb27c4fcb51.url);
      if (_12fb538101aa.protocol.startsWith("\x62\x6c\x6f\x62\x3a")) {
        const _5995852ff2b8 = await _5b8d834290ae(_12fb538101aa), _2f149434b242 = new Response(_5995852ff2b8.body, _5995852ff2b8);
        return _2f149434b242.rawHeaders = Object.fromEntries(_5995852ff2b8.headers), _2f149434b242.rawResponse = {
          body: _5995852ff2b8.body,
          headers: Object.fromEntries(_5995852ff2b8.headers),
          status: _5995852ff2b8.status,
          statusText: _5995852ff2b8.statusText
        }, _2f149434b242.finalURL = _12fb538101aa.toString(), _2f149434b242;
      }
      for (let _5995852ff2b8 = 0; ;_5995852ff2b8++) {
        let _5b8d834290ae = (await this.worker.sendMessage({
          type: "\x66\x65\x74\x63\x68",
          fetch: {
            remote: _12fb538101aa.toString(),
            method: _7cb27c4fcb51.method,
            headers: _c6b8f6894827,
            body: _4f199c724125 || void 0
          }
        }, _4f199c724125 ? [ _4f199c724125 ] : [])).fetch, _f620f4b69795 = new Response(_3846db1e0671.includes(_5b8d834290ae.status) ? void 0 : _5b8d834290ae.body, {
          headers: new Headers(_5b8d834290ae.headers),
          status: _5b8d834290ae.status,
          statusText: _5b8d834290ae.statusText
        });
        _f620f4b69795.rawHeaders = _5b8d834290ae.headers, _f620f4b69795.rawResponse = _5b8d834290ae, 
        _f620f4b69795.finalURL = _12fb538101aa.toString();
        const _946d8fab26c3 = _2f149434b242?.redirect || _7cb27c4fcb51.redirect;
        if (!_d954d90da060.includes(_f620f4b69795.status)) return _f620f4b69795;
        switch (_946d8fab26c3) {
         case "\x66\x6f\x6c\x6c\x6f\x77":
          {
            const _5b8d834290ae = _f620f4b69795.headers.get("\x6c\x6f\x63\x61\x74\x69\x6f\x6e");
            if (20 > _5995852ff2b8 && null !== _5b8d834290ae) {
              _12fb538101aa = new URL(_5b8d834290ae, _12fb538101aa);
              continue;
            }
            throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");
          }

         case "\x65\x72\x72\x6f\x72":
          throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");

         case "\x6d\x61\x6e\x75\x61\x6c":
          return _f620f4b69795;
        }
      }
    }
  }
  console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x72\x75\x6e\x6e\x69\x6e\x67\x20\x76\x32\x2e\x31\x2e\x39\x20\x28\x62\x75\x69\x6c\x64\x20\x64\x63\x39\x64\x63\x36\x65\x29"), _5995852ff2b8.BareClient = m, 
  _5995852ff2b8.BareMuxConnection = class {
    worker;
    constructor(_5995852ff2b8) {
      this.worker = new p(_5995852ff2b8);
    }
    async getTransport() {
      return (await this.worker.sendMessage({
        type: "\x67\x65\x74"
      })).name;
    }
    async setTransport(_5995852ff2b8, _5b8d834290ae, _2f149434b242) {
      await this.setManualTransport(`\x0a\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x7b\x20\x64\x65\x66\x61\x75\x6c\x74\x3a\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x7d\x20\x3d\x20\x61\x77\x61\x69\x74\x20\x69\x6d\x70\x6f\x72\x74\x28\x22${_5995852ff2b8}\x22\x29\x3b\x0a\x09\x09\x09\x72\x65\x74\x75\x72\x6e\x20\x5b\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2c\x20\x22${_5995852ff2b8}\x22\x5d\x3b\x0a\x09\x09`, _5b8d834290ae, _2f149434b242);
    }
    async setManualTransport(_5995852ff2b8, _5b8d834290ae, _2f149434b242) {
      if ("\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65" === _5995852ff2b8) throw new Error("\x55\x73\x65\x20\x73\x65\x74\x52\x65\x6d\x6f\x74\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2e");
      await this.worker.sendMessage({
        type: "\x73\x65\x74",
        client: {
          function: _5995852ff2b8,
          args: _5b8d834290ae
        }
      }, _2f149434b242);
    }
    async setRemoteTransport(_5995852ff2b8, _5b8d834290ae) {
      const _2f149434b242 = new MessageChannel;
      _2f149434b242.port1.onmessage = async _5b8d834290ae => {
        const _2f149434b242 = _5b8d834290ae.data.port, _7cb27c4fcb51 = _5b8d834290ae.data.message;
        if ("\x66\x65\x74\x63\x68" === _7cb27c4fcb51.type) try {
          _5995852ff2b8.ready || await _5995852ff2b8.init(), await async function(_5995852ff2b8, _5b8d834290ae, _2f149434b242) {
            const _7cb27c4fcb51 = await _2f149434b242.request(new URL(_5995852ff2b8.fetch.remote), _5995852ff2b8.fetch.method, _5995852ff2b8.fetch.body, _5995852ff2b8.fetch.headers, null);
            if (!d() && _7cb27c4fcb51.body instanceof ReadableStream) {
              const _5995852ff2b8 = new Response(_7cb27c4fcb51.body);
              _7cb27c4fcb51.body = await _5995852ff2b8.arrayBuffer();
            }
            _7cb27c4fcb51.body instanceof ReadableStream || _7cb27c4fcb51.body instanceof ArrayBuffer ? _c6b8f6894827.call(_5b8d834290ae, {
              type: "\x66\x65\x74\x63\x68",
              fetch: _7cb27c4fcb51
            }, [ _7cb27c4fcb51.body ]) : _c6b8f6894827.call(_5b8d834290ae, {
              type: "\x66\x65\x74\x63\x68",
              fetch: _7cb27c4fcb51
            });
          }(_7cb27c4fcb51, _2f149434b242, _5995852ff2b8);
        } catch (_5995852ff2b8) {
          w(_2f149434b242, _5995852ff2b8, "\x66\x65\x74\x63\x68");
        } else if ("\x77\x65\x62\x73\x6f\x63\x6b\x65\x74" === _7cb27c4fcb51.type) try {
          _5995852ff2b8.ready || await _5995852ff2b8.init(), await async function(_5995852ff2b8, _5b8d834290ae, _2f149434b242) {
            const [_7cb27c4fcb51, _f620f4b69795] = _2f149434b242.connect(new URL(_5995852ff2b8.websocket.url), _5995852ff2b8.websocket.protocols, _5995852ff2b8.websocket.requestHeaders, _5b8d834290ae => {
              _c6b8f6894827.call(_5995852ff2b8.websocket.channel, {
                type: "\x6f\x70\x65\x6e",
                args: [ _5b8d834290ae ]
              });
            }, _5b8d834290ae => {
              _5b8d834290ae instanceof ArrayBuffer ? _c6b8f6894827.call(_5995852ff2b8.websocket.channel, {
                type: "\x6d\x65\x73\x73\x61\x67\x65",
                args: [ _5b8d834290ae ]
              }, [ _5b8d834290ae ]) : _c6b8f6894827.call(_5995852ff2b8.websocket.channel, {
                type: "\x6d\x65\x73\x73\x61\x67\x65",
                args: [ _5b8d834290ae ]
              });
            }, (_5b8d834290ae, _2f149434b242) => {
              _c6b8f6894827.call(_5995852ff2b8.websocket.channel, {
                type: "\x63\x6c\x6f\x73\x65",
                args: [ _5b8d834290ae, _2f149434b242 ]
              });
            }, _5b8d834290ae => {
              _c6b8f6894827.call(_5995852ff2b8.websocket.channel, {
                type: "\x65\x72\x72\x6f\x72",
                args: [ _5b8d834290ae ]
              });
            });
            _5995852ff2b8.websocket.channel.onmessage = _5995852ff2b8 => {
              "\x64\x61\x74\x61" === _5995852ff2b8.data.type ? _7cb27c4fcb51(_5995852ff2b8.data.data) : "\x63\x6c\x6f\x73\x65" === _5995852ff2b8.data.type && _f620f4b69795(_5995852ff2b8.data.closeCode, _5995852ff2b8.data.closeReason);
            }, _c6b8f6894827.call(_5b8d834290ae, {
              type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74"
            });
          }(_7cb27c4fcb51, _2f149434b242, _5995852ff2b8);
        } catch (_5995852ff2b8) {
          w(_2f149434b242, _5995852ff2b8, "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74");
        }
      }, await this.worker.sendMessage({
        type: "\x73\x65\x74",
        client: {
          function: "\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65",
          args: [ _2f149434b242.port2, _5b8d834290ae ]
        }
      }, [ _2f149434b242.port2 ]);
    }
    getInnerPort() {
      return this.worker.port;
    }
  }, _5995852ff2b8.BareWebSocket = u, _5995852ff2b8.WebSocketFields = _4f199c724125, 
  _5995852ff2b8.WorkerConnection = p, _5995852ff2b8.browserSupportsTransferringStreams = d, 
  _5995852ff2b8.default = m, _5995852ff2b8.maxRedirects = 20, _5995852ff2b8.validProtocol = f, 
  Object.defineProperty(_5995852ff2b8, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
    value: !0
  });
});
