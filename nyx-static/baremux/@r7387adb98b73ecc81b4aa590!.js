!function(_dcb3297864ee, _4ca4e472de0e) {
  "\x6f\x62\x6a\x65\x63\x74" == typeof exports && "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof module ? _4ca4e472de0e(exports) : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof define && define.amd ? define([ "\x65\x78\x70\x6f\x72\x74\x73" ], _4ca4e472de0e) : _4ca4e472de0e((_dcb3297864ee = "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof globalThis ? globalThis : _dcb3297864ee || self).\u{42}\u{61}\u{72}\u{65}\u{4d}\u{75}\u{78} = {});
}(this, function(_dcb3297864ee) {
  "use strict";
  const _4ca4e472de0e = globalThis.fetch, _4d4da911060f = globalThis.SharedWorker, _fae8a32e0c6a = globalThis.localStorage, _bab1ce14ce2b = globalThis.navigator.serviceWorker, _1e66b709a996 = MessagePort.prototype.postMessage, _4410fe4d0782 = {
    prototype: {
      send: WebSocket.prototype.send
    },
    CLOSED: WebSocket.CLOSED,
    CLOSING: WebSocket.CLOSING,
    CONNECTING: WebSocket.CONNECTING,
    OPEN: WebSocket.OPEN
  };
  async function c() {
    const _dcb3297864ee = (await self.clients.matchAll({
      type: "\x77\x69\x6e\x64\x6f\x77",
      includeUncontrolled: !0
    })).map(async _dcb3297864ee => {
      const _4ca4e472de0e = await function(_dcb3297864ee) {
        let _4ca4e472de0e = new MessageChannel;
        return new Promise(_4d4da911060f => {
          _dcb3297864ee.postMessage({
            type: "\x67\x65\x74\x50\x6f\x72\x74",
            port: _4ca4e472de0e.port2
          }, [ _4ca4e472de0e.port2 ]), _4ca4e472de0e.port1.onmessage = _dcb3297864ee => {
            _4d4da911060f(_dcb3297864ee.data);
          };
        });
      }(_dcb3297864ee);
      return await i(_4ca4e472de0e), _4ca4e472de0e;
    }), _4ca4e472de0e = Promise.race([ Promise.any(_dcb3297864ee), new Promise((_dcb3297864ee, _4ca4e472de0e) => setTimeout(_4ca4e472de0e, 1e3, new TypeError("\x74\x69\x6d\x65\x6f\x75\x74"))) ]);
    try {
      return await _4ca4e472de0e;
    } catch (_dcb3297864ee) {
      if (_dcb3297864ee instanceof AggregateError) throw console.error("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x61\x73\x20\x61\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e"), 
      new Error("\x41\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e", {
        cause: _dcb3297864ee
      });
      return console.warn("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x77\x69\x74\x68\x69\x6e\x20\x31\x73\x2c\x20\x72\x65\x74\x72\x79\x69\x6e\x67"), 
      await c();
    }
  }
  function i(_dcb3297864ee) {
    const _4ca4e472de0e = new MessageChannel, _4d4da911060f = new Promise((_dcb3297864ee, _4d4da911060f) => {
      _4ca4e472de0e.port1.onmessage = _4ca4e472de0e => {
        "\x70\x6f\x6e\x67" === _4ca4e472de0e.data.type && _dcb3297864ee();
      }, setTimeout(_4d4da911060f, 1500);
    });
    return _1e66b709a996.call(_dcb3297864ee, {
      message: {
        type: "\x70\x69\x6e\x67"
      },
      port: _4ca4e472de0e.port2
    }, [ _4ca4e472de0e.port2 ]), _4d4da911060f;
  }
  function l(_dcb3297864ee, _4ca4e472de0e) {
    const _fae8a32e0c6a = new _4d4da911060f(_dcb3297864ee, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
    return _4ca4e472de0e && _bab1ce14ce2b.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", _4ca4e472de0e => {
      if ("\x67\x65\x74\x50\x6f\x72\x74" === _4ca4e472de0e.data.type && _4ca4e472de0e.data.port) {
        console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x72\x65\x63\x69\x65\x76\x65\x64\x20\x72\x65\x71\x75\x65\x73\x74\x20\x66\x6f\x72\x20\x70\x6f\x72\x74\x20\x66\x72\x6f\x6d\x20\x73\x77");
        const _fae8a32e0c6a = new _4d4da911060f(_dcb3297864ee, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
        _1e66b709a996.call(_4ca4e472de0e.data.port, _fae8a32e0c6a.port, [ _fae8a32e0c6a.port ]);
      }
    }), _fae8a32e0c6a.port;
  }
  let _80a1f16d015c = null;
  function d() {
    if (null === _80a1f16d015c) {
      const _dcb3297864ee = new MessageChannel, _4ca4e472de0e = new ReadableStream;
      let _4d4da911060f;
      try {
        _1e66b709a996.call(_dcb3297864ee.port1, _4ca4e472de0e, [ _4ca4e472de0e ]), _4d4da911060f = !0;
      } catch (_dcb3297864ee) {
        _4d4da911060f = !1;
      }
      return _80a1f16d015c = _4d4da911060f, _4d4da911060f;
    }
    return _80a1f16d015c;
  }
  class p {
    channel;
    port;
    workerPath;
    constructor(_dcb3297864ee) {
      this.channel = new BroadcastChannel("\x62\x61\x72\x65\x2d\x6d\x75\x78"), _dcb3297864ee instanceof MessagePort || _dcb3297864ee instanceof Promise ? this.port = _dcb3297864ee : this.createChannel(_dcb3297864ee, !0);
    }
    createChannel(_dcb3297864ee, _4ca4e472de0e) {
      if (self.clients) this.port = c(), this.channel.onmessage = _dcb3297864ee => {
        "\x72\x65\x66\x72\x65\x73\x68\x50\x6f\x72\x74" === _dcb3297864ee.data.type && (this.port = c());
      }; else if (_dcb3297864ee && SharedWorker) {
        if (!_dcb3297864ee.startsWith("\x2f") && !_dcb3297864ee.includes("\x3a")) throw new Error("\x49\x6e\x76\x61\x6c\x69\x64\x20\x55\x52\x4c\x2e\x20\x4d\x75\x73\x74\x20\x62\x65\x20\x61\x62\x73\x6f\x6c\x75\x74\x65\x20\x6f\x72\x20\x73\x74\x61\x72\x74\x20\x61\x74\x20\x74\x68\x65\x20\x72\x6f\x6f\x74\x2e");
        this.port = l(_dcb3297864ee, _4ca4e472de0e), console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x73\x65\x74\x74\x69\x6e\x67\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x20\x74\x6f", _dcb3297864ee), 
        _fae8a32e0c6a["\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"] = _dcb3297864ee;
      } else {
        if (!SharedWorker) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x63\x68\x61\x6e\x6e\x65\x6c\x20\x74\x6f\x20\x74\x68\x65\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x2e");
        {
          const _dcb3297864ee = _fae8a32e0c6a["\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"];
          if (console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x67\x6f\x74\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x3a", _dcb3297864ee), !_dcb3297864ee) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x20\x77\x6f\x72\x6b\x65\x72\x50\x61\x74\x68\x20\x66\x72\x6f\x6d\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x2e");
          this.port = l(_dcb3297864ee, _4ca4e472de0e);
        }
      }
    }
    async sendMessage(_dcb3297864ee, _4ca4e472de0e) {
      this.port instanceof Promise && (this.port = await this.port);
      try {
        await i(this.port);
      } catch {
        return console.warn("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x70\x69\x6e\x67\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x66\x72\x6f\x6d\x20\x74\x68\x65\x20\x77\x6f\x72\x6b\x65\x72\x20\x77\x69\x74\x68\x69\x6e\x20\x31\x2e\x35\x73\x2e\x20\x41\x73\x73\x75\x6d\x69\x6e\x67\x20\x70\x6f\x72\x74\x20\x69\x73\x20\x64\x65\x61\x64\x2e"), 
        this.createChannel(), await this.sendMessage(_dcb3297864ee, _4ca4e472de0e);
      }
      const _4d4da911060f = new MessageChannel, _fae8a32e0c6a = [ _4d4da911060f.port2, ..._4ca4e472de0e || [] ], _bab1ce14ce2b = new Promise((_dcb3297864ee, _4ca4e472de0e) => {
        _4d4da911060f.port1.onmessage = _4d4da911060f => {
          const _fae8a32e0c6a = _4d4da911060f.data;
          "\x65\x72\x72\x6f\x72" === _fae8a32e0c6a.type ? _4ca4e472de0e(_fae8a32e0c6a.error) : _dcb3297864ee(_fae8a32e0c6a);
        };
      });
      return _1e66b709a996.call(this.port, {
        message: _dcb3297864ee,
        port: _4d4da911060f.port2
      }, _fae8a32e0c6a), await _bab1ce14ce2b;
    }
  }
  class u extends EventTarget {
    protocols;
    url;
    readyState=_4410fe4d0782.CONNECTING;
    channel;
    constructor(_dcb3297864ee, _4ca4e472de0e = [], _4d4da911060f, _fae8a32e0c6a) {
      super(), this.protocols = _4ca4e472de0e, this.url = _dcb3297864ee.toString(), this.protocols = _4ca4e472de0e;
      const s = _dcb3297864ee => {
        this.protocols = _dcb3297864ee, this.readyState = _4410fe4d0782.OPEN;
        const _4ca4e472de0e = new Event("\x6f\x70\x65\x6e");
        this.dispatchEvent(_4ca4e472de0e);
      }, o = async _dcb3297864ee => {
        const _4ca4e472de0e = new MessageEvent("\x6d\x65\x73\x73\x61\x67\x65", {
          data: _dcb3297864ee
        });
        this.dispatchEvent(_4ca4e472de0e);
      }, c = (_dcb3297864ee, _4ca4e472de0e) => {
        this.readyState = _4410fe4d0782.CLOSED;
        const _4d4da911060f = new CloseEvent("\x63\x6c\x6f\x73\x65", {
          code: _dcb3297864ee,
          reason: _4ca4e472de0e
        });
        this.dispatchEvent(_4d4da911060f);
      }, i = () => {
        this.readyState = _4410fe4d0782.CLOSED;
        const _dcb3297864ee = new Event("\x65\x72\x72\x6f\x72");
        this.dispatchEvent(_dcb3297864ee);
      };
      this.channel = new MessageChannel, this.channel.port1.onmessage = _dcb3297864ee => {
        "\x6f\x70\x65\x6e" === _dcb3297864ee.data.type ? s(_dcb3297864ee.data.args[0]) : "\x6d\x65\x73\x73\x61\x67\x65" === _dcb3297864ee.data.type ? o(_dcb3297864ee.data.args[0]) : "\x63\x6c\x6f\x73\x65" === _dcb3297864ee.data.type ? c(_dcb3297864ee.data.args[0], _dcb3297864ee.data.args[1]) : "\x65\x72\x72\x6f\x72" === _dcb3297864ee.data.type && i();
      }, _4d4da911060f.sendMessage({
        type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74",
        websocket: {
          url: _dcb3297864ee.toString(),
          protocols: _4ca4e472de0e,
          requestHeaders: _fae8a32e0c6a,
          channel: this.channel.port2
        }
      }, [ this.channel.port2 ]);
    }
    send(..._dcb3297864ee) {
      if (this.readyState === _4410fe4d0782.CONNECTING) throw new DOMException("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x65\x78\x65\x63\x75\x74\x65\x20\x27\x73\x65\x6e\x64\x27\x20\x6f\x6e\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x53\x74\x69\x6c\x6c\x20\x69\x6e\x20\x43\x4f\x4e\x4e\x45\x43\x54\x49\x4e\x47\x20\x73\x74\x61\x74\x65\x2e");
      let _4ca4e472de0e = _dcb3297864ee[0];
      _4ca4e472de0e.buffer && (_4ca4e472de0e = _4ca4e472de0e.buffer.slice(_4ca4e472de0e.byteOffset, _4ca4e472de0e.byteOffset + _4ca4e472de0e.byteLength)), 
      _1e66b709a996.call(this.channel.port1, {
        type: "\x64\x61\x74\x61",
        data: _4ca4e472de0e
      }, _4ca4e472de0e instanceof ArrayBuffer ? [ _4ca4e472de0e ] : []);
    }
    close(_dcb3297864ee, _4ca4e472de0e) {
      _1e66b709a996.call(this.channel.port1, {
        type: "\x63\x6c\x6f\x73\x65",
        closeCode: _dcb3297864ee,
        closeReason: _4ca4e472de0e
      });
    }
  }
  function w(_dcb3297864ee, _4ca4e472de0e, _4d4da911060f) {
    console.error(`\x65\x72\x72\x6f\x72\x20\x77\x68\x69\x6c\x65\x20\x70\x72\x6f\x63\x65\x73\x73\x69\x6e\x67\x20\x27${_4d4da911060f}\x27\x3a\x20`, _4ca4e472de0e), _dcb3297864ee.postMessage({
      type: "\x65\x72\x72\x6f\x72",
      error: _4ca4e472de0e
    });
  }
  function f(_dcb3297864ee) {
    for (let _4ca4e472de0e = 0; _4ca4e472de0e < _dcb3297864ee.length; _4ca4e472de0e++) {
      const _4d4da911060f = _dcb3297864ee[_4ca4e472de0e];
      if (!"\x21\x23\x24\x25\x26\x27\x2a\x2b\x2d\x2e\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x5e\x5f\x60\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x7c\x7e".includes(_4d4da911060f)) return !1;
    }
    return !0;
  }
  const _72642c721f4c = [ "\x77\x73\x3a", "\x77\x73\x73\x3a" ], _5b10422809bc = [ 101, 204, 205, 304 ], _0394d1e4ce36 = [ 301, 302, 303, 307, 308 ];
  class m {
    worker;
    constructor(_dcb3297864ee) {
      this.worker = new p(_dcb3297864ee);
    }
    createWebSocket(_dcb3297864ee, _4ca4e472de0e = [], _4d4da911060f, _fae8a32e0c6a) {
      try {
        _dcb3297864ee = new URL(_dcb3297864ee);
      } catch (_4ca4e472de0e) {
        throw new DOMException(`\x46\x61\x69\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x20\x27${_dcb3297864ee}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
      }
      if (!_72642c721f4c.includes(_dcb3297864ee.protocol)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x27\x73\x20\x73\x63\x68\x65\x6d\x65\x20\x6d\x75\x73\x74\x20\x62\x65\x20\x65\x69\x74\x68\x65\x72\x20\x27\x77\x73\x27\x20\x6f\x72\x20\x27\x77\x73\x73\x27\x2e\x20\x27${_dcb3297864ee.protocol}\x27\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x6c\x6c\x6f\x77\x65\x64\x2e`);
      Array.isArray(_4ca4e472de0e) || (_4ca4e472de0e = [ _4ca4e472de0e ]), _4ca4e472de0e = _4ca4e472de0e.map(String);
      for (const _dcb3297864ee of _4ca4e472de0e) if (!f(_dcb3297864ee)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x73\x75\x62\x70\x72\x6f\x74\x6f\x63\x6f\x6c\x20\x27${_dcb3297864ee}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
      _fae8a32e0c6a = _fae8a32e0c6a || {};
      return new u(_dcb3297864ee, _4ca4e472de0e, this.worker, _fae8a32e0c6a);
    }
    async fetch(_dcb3297864ee, _4d4da911060f) {
      const _fae8a32e0c6a = new Request(_dcb3297864ee, _4d4da911060f), _bab1ce14ce2b = _4d4da911060f?.headers || _fae8a32e0c6a.headers, _1e66b709a996 = _bab1ce14ce2b instanceof Headers ? Object.fromEntries(_bab1ce14ce2b) : _bab1ce14ce2b, _4410fe4d0782 = _fae8a32e0c6a.body;
      let _80a1f16d015c = new URL(_fae8a32e0c6a.url);
      if (_80a1f16d015c.protocol.startsWith("\x62\x6c\x6f\x62\x3a")) {
        const _dcb3297864ee = await _4ca4e472de0e(_80a1f16d015c), _4d4da911060f = new Response(_dcb3297864ee.body, _dcb3297864ee);
        return _4d4da911060f.rawHeaders = Object.fromEntries(_dcb3297864ee.headers), _4d4da911060f.rawResponse = {
          body: _dcb3297864ee.body,
          headers: Object.fromEntries(_dcb3297864ee.headers),
          status: _dcb3297864ee.status,
          statusText: _dcb3297864ee.statusText
        }, _4d4da911060f.finalURL = _80a1f16d015c.toString(), _4d4da911060f;
      }
      for (let _dcb3297864ee = 0; ;_dcb3297864ee++) {
        let _4ca4e472de0e = (await this.worker.sendMessage({
          type: "\x66\x65\x74\x63\x68",
          fetch: {
            remote: _80a1f16d015c.toString(),
            method: _fae8a32e0c6a.method,
            headers: _1e66b709a996,
            body: _4410fe4d0782 || void 0
          }
        }, _4410fe4d0782 ? [ _4410fe4d0782 ] : [])).fetch, _bab1ce14ce2b = new Response(_5b10422809bc.includes(_4ca4e472de0e.status) ? void 0 : _4ca4e472de0e.body, {
          headers: new Headers(_4ca4e472de0e.headers),
          status: _4ca4e472de0e.status,
          statusText: _4ca4e472de0e.statusText
        });
        _bab1ce14ce2b.rawHeaders = _4ca4e472de0e.headers, _bab1ce14ce2b.rawResponse = _4ca4e472de0e, 
        _bab1ce14ce2b.finalURL = _80a1f16d015c.toString();
        const _72642c721f4c = _4d4da911060f?.redirect || _fae8a32e0c6a.redirect;
        if (!_0394d1e4ce36.includes(_bab1ce14ce2b.status)) return _bab1ce14ce2b;
        switch (_72642c721f4c) {
         case "\x66\x6f\x6c\x6c\x6f\x77":
          {
            const _4ca4e472de0e = _bab1ce14ce2b.headers.get("\x6c\x6f\x63\x61\x74\x69\x6f\x6e");
            if (20 > _dcb3297864ee && null !== _4ca4e472de0e) {
              _80a1f16d015c = new URL(_4ca4e472de0e, _80a1f16d015c);
              continue;
            }
            throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");
          }

         case "\x65\x72\x72\x6f\x72":
          throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");

         case "\x6d\x61\x6e\x75\x61\x6c":
          return _bab1ce14ce2b;
        }
      }
    }
  }
  console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x72\x75\x6e\x6e\x69\x6e\x67\x20\x76\x32\x2e\x31\x2e\x39\x20\x28\x62\x75\x69\x6c\x64\x20\x64\x63\x39\x64\x63\x36\x65\x29"), _dcb3297864ee.BareClient = m, 
  _dcb3297864ee.\u{42}\u{61}\u{72}\u{65}\u{4d}\u{75}\u{78}\u{43}\u{6f}\u{6e}\u{6e}\u{65}\u{63}\u{74}\u{69}\u{6f}\u{6e} = class {
    worker;
    constructor(_dcb3297864ee) {
      this.worker = new p(_dcb3297864ee);
    }
    async getTransport() {
      return (await this.worker.sendMessage({
        type: "\x67\x65\x74"
      })).name;
    }
    async setTransport(_dcb3297864ee, _4ca4e472de0e, _4d4da911060f) {
      await this.setManualTransport(`\x0a\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x7b\x20\x64\x65\x66\x61\x75\x6c\x74\x3a\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x7d\x20\x3d\x20\x61\x77\x61\x69\x74\x20\x69\x6d\x70\x6f\x72\x74\x28\x22${_dcb3297864ee}\x22\x29\x3b\x0a\x09\x09\x09\x72\x65\x74\x75\x72\x6e\x20\x5b\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2c\x20\x22${_dcb3297864ee}\x22\x5d\x3b\x0a\x09\x09`, _4ca4e472de0e, _4d4da911060f);
    }
    async setManualTransport(_dcb3297864ee, _4ca4e472de0e, _4d4da911060f) {
      if ("\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65" === _dcb3297864ee) throw new Error("\x55\x73\x65\x20\x73\x65\x74\x52\x65\x6d\x6f\x74\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2e");
      await this.worker.sendMessage({
        type: "\x73\x65\x74",
        client: {
          function: _dcb3297864ee,
          args: _4ca4e472de0e
        }
      }, _4d4da911060f);
    }
    async setRemoteTransport(_dcb3297864ee, _4ca4e472de0e) {
      const _4d4da911060f = new MessageChannel;
      _4d4da911060f.port1.onmessage = async _4ca4e472de0e => {
        const _4d4da911060f = _4ca4e472de0e.data.port, _fae8a32e0c6a = _4ca4e472de0e.data.message;
        if ("\x66\x65\x74\x63\x68" === _fae8a32e0c6a.type) try {
          _dcb3297864ee.ready || await _dcb3297864ee.init(), await async function(_dcb3297864ee, _4ca4e472de0e, _4d4da911060f) {
            const _fae8a32e0c6a = await _4d4da911060f.request(new URL(_dcb3297864ee.fetch.remote), _dcb3297864ee.fetch.method, _dcb3297864ee.fetch.body, _dcb3297864ee.fetch.headers, null);
            if (!d() && _fae8a32e0c6a.body instanceof ReadableStream) {
              const _dcb3297864ee = new Response(_fae8a32e0c6a.body);
              _fae8a32e0c6a.body = await _dcb3297864ee.arrayBuffer();
            }
            _fae8a32e0c6a.body instanceof ReadableStream || _fae8a32e0c6a.body instanceof ArrayBuffer ? _1e66b709a996.call(_4ca4e472de0e, {
              type: "\x66\x65\x74\x63\x68",
              fetch: _fae8a32e0c6a
            }, [ _fae8a32e0c6a.body ]) : _1e66b709a996.call(_4ca4e472de0e, {
              type: "\x66\x65\x74\x63\x68",
              fetch: _fae8a32e0c6a
            });
          }(_fae8a32e0c6a, _4d4da911060f, _dcb3297864ee);
        } catch (_dcb3297864ee) {
          w(_4d4da911060f, _dcb3297864ee, "\x66\x65\x74\x63\x68");
        } else if ("\x77\x65\x62\x73\x6f\x63\x6b\x65\x74" === _fae8a32e0c6a.type) try {
          _dcb3297864ee.ready || await _dcb3297864ee.init(), await async function(_dcb3297864ee, _4ca4e472de0e, _4d4da911060f) {
            const [_fae8a32e0c6a, _bab1ce14ce2b] = _4d4da911060f.connect(new URL(_dcb3297864ee.websocket.url), _dcb3297864ee.websocket.protocols, _dcb3297864ee.websocket.requestHeaders, _4ca4e472de0e => {
              _1e66b709a996.call(_dcb3297864ee.websocket.channel, {
                type: "\x6f\x70\x65\x6e",
                args: [ _4ca4e472de0e ]
              });
            }, _4ca4e472de0e => {
              _4ca4e472de0e instanceof ArrayBuffer ? _1e66b709a996.call(_dcb3297864ee.websocket.channel, {
                type: "\x6d\x65\x73\x73\x61\x67\x65",
                args: [ _4ca4e472de0e ]
              }, [ _4ca4e472de0e ]) : _1e66b709a996.call(_dcb3297864ee.websocket.channel, {
                type: "\x6d\x65\x73\x73\x61\x67\x65",
                args: [ _4ca4e472de0e ]
              });
            }, (_4ca4e472de0e, _4d4da911060f) => {
              _1e66b709a996.call(_dcb3297864ee.websocket.channel, {
                type: "\x63\x6c\x6f\x73\x65",
                args: [ _4ca4e472de0e, _4d4da911060f ]
              });
            }, _4ca4e472de0e => {
              _1e66b709a996.call(_dcb3297864ee.websocket.channel, {
                type: "\x65\x72\x72\x6f\x72",
                args: [ _4ca4e472de0e ]
              });
            });
            _dcb3297864ee.websocket.channel.onmessage = _dcb3297864ee => {
              "\x64\x61\x74\x61" === _dcb3297864ee.data.type ? _fae8a32e0c6a(_dcb3297864ee.data.data) : "\x63\x6c\x6f\x73\x65" === _dcb3297864ee.data.type && _bab1ce14ce2b(_dcb3297864ee.data.closeCode, _dcb3297864ee.data.closeReason);
            }, _1e66b709a996.call(_4ca4e472de0e, {
              type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74"
            });
          }(_fae8a32e0c6a, _4d4da911060f, _dcb3297864ee);
        } catch (_dcb3297864ee) {
          w(_4d4da911060f, _dcb3297864ee, "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74");
        }
      }, await this.worker.sendMessage({
        type: "\x73\x65\x74",
        client: {
          function: "\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65",
          args: [ _4d4da911060f.port2, _4ca4e472de0e ]
        }
      }, [ _4d4da911060f.port2 ]);
    }
    getInnerPort() {
      return this.worker.port;
    }
  }, _dcb3297864ee.BareWebSocket = u, _dcb3297864ee.WebSocketFields = _4410fe4d0782, 
  _dcb3297864ee.WorkerConnection = p, _dcb3297864ee.\u{62}\u{72}\u{6f}\u{77}\u{73}\u{65}\u{72}\u{53}\u{75}\u{70}\u{70}\u{6f}\u{72}\u{74}\u{73}\u{54}\u{72}\u{61}\u{6e}\u{73}\u{66}\u{65}\u{72}\u{72}\u{69}\u{6e}\u{67}\u{53}\u{74}\u{72}\u{65}\u{61}\u{6d}\u{73} = d, 
  _dcb3297864ee.default = m, _dcb3297864ee.maxRedirects = 20, _dcb3297864ee.validProtocol = f, 
  Object.defineProperty(_dcb3297864ee, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
    value: !0
  });
});
