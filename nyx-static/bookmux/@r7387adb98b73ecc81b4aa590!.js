!function(_d0624869a805, _48373b7c2141) {
  "\x6f\x62\x6a\x65\x63\x74" == typeof exports && "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof module ? _48373b7c2141(exports) : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof define && define.amd ? define([ "\x65\x78\x70\x6f\x72\x74\x73" ], _48373b7c2141) : _48373b7c2141((_d0624869a805 = "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof globalThis ? globalThis : _d0624869a805 || self).Bookmux = {});
}(this, function(_d0624869a805) {
  "use strict";
  const _48373b7c2141 = globalThis.fetch, _4a7d9198c026 = globalThis.SharedWorker, _ebb22c947c55 = globalThis.localStorage, _59c722e46184 = globalThis.navigator.serviceWorker, _ab243cd3ab48 = MessagePort.prototype.postMessage, _f3c90e5feddd = {
    prototype: {
      send: WebSocket.prototype.send
    },
    CLOSED: WebSocket.CLOSED,
    CLOSING: WebSocket.CLOSING,
    CONNECTING: WebSocket.CONNECTING,
    OPEN: WebSocket.OPEN
  };
  async function c() {
    const _d0624869a805 = (await self.clients.matchAll({
      type: "\x77\x69\x6e\x64\x6f\x77",
      includeUncontrolled: !0
    })).map(async _d0624869a805 => {
      const _48373b7c2141 = await function(_d0624869a805) {
        let _48373b7c2141 = new MessageChannel;
        return new Promise(_4a7d9198c026 => {
          _d0624869a805.postMessage({
            type: "\x67\x65\x74\x50\x6f\x72\x74",
            port: _48373b7c2141.port2
          }, [ _48373b7c2141.port2 ]), _48373b7c2141.port1.onmessage = _d0624869a805 => {
            _4a7d9198c026(_d0624869a805.data);
          };
        });
      }(_d0624869a805);
      return await i(_48373b7c2141), _48373b7c2141;
    }), _48373b7c2141 = Promise.race([ Promise.any(_d0624869a805), new Promise((_d0624869a805, _48373b7c2141) => setTimeout(_48373b7c2141, 1e3, new TypeError("\x74\x69\x6d\x65\x6f\x75\x74"))) ]);
    try {
      return await _48373b7c2141;
    } catch (_d0624869a805) {
      if (_d0624869a805 instanceof AggregateError) throw console.error("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x61\x73\x20\x61\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e"), 
      new Error("\x41\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e", {
        cause: _d0624869a805
      });
      return console.warn("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x77\x69\x74\x68\x69\x6e\x20\x31\x73\x2c\x20\x72\x65\x74\x72\x79\x69\x6e\x67"), 
      await c();
    }
  }
  function i(_d0624869a805) {
    const _48373b7c2141 = new MessageChannel, _4a7d9198c026 = new Promise((_d0624869a805, _4a7d9198c026) => {
      _48373b7c2141.port1.onmessage = _48373b7c2141 => {
        "\x70\x6f\x6e\x67" === _48373b7c2141.data.type && _d0624869a805();
      }, setTimeout(_4a7d9198c026, 1500);
    });
    return _ab243cd3ab48.call(_d0624869a805, {
      message: {
        type: "\x70\x69\x6e\x67"
      },
      port: _48373b7c2141.port2
    }, [ _48373b7c2141.port2 ]), _4a7d9198c026;
  }
  function l(_d0624869a805, _48373b7c2141) {
    const _ebb22c947c55 = new _4a7d9198c026(_d0624869a805, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
    return _48373b7c2141 && _59c722e46184.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", _48373b7c2141 => {
      if ("\x67\x65\x74\x50\x6f\x72\x74" === _48373b7c2141.data.type && _48373b7c2141.data.port) {
        console.debug("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x72\x65\x63\x69\x65\x76\x65\x64\x20\x72\x65\x71\x75\x65\x73\x74\x20\x66\x6f\x72\x20\x70\x6f\x72\x74\x20\x66\x72\x6f\x6d\x20\x73\x77");
        const _ebb22c947c55 = new _4a7d9198c026(_d0624869a805, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
        _ab243cd3ab48.call(_48373b7c2141.data.port, _ebb22c947c55.port, [ _ebb22c947c55.port ]);
      }
    }), _ebb22c947c55.port;
  }
  let _e28824611675 = null;
  function d() {
    if (null === _e28824611675) {
      const _d0624869a805 = new MessageChannel, _48373b7c2141 = new ReadableStream;
      let _4a7d9198c026;
      try {
        _ab243cd3ab48.call(_d0624869a805.port1, _48373b7c2141, [ _48373b7c2141 ]), _4a7d9198c026 = !0;
      } catch (_d0624869a805) {
        _4a7d9198c026 = !1;
      }
      return _e28824611675 = _4a7d9198c026, _4a7d9198c026;
    }
    return _e28824611675;
  }
  class p {
    channel;
    port;
    workerPath;
    constructor(_d0624869a805) {
      this.channel = new BroadcastChannel("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78"), _d0624869a805 instanceof MessagePort || _d0624869a805 instanceof Promise ? this.port = _d0624869a805 : this.createChannel(_d0624869a805, !0);
    }
    createChannel(_d0624869a805, _48373b7c2141) {
      if (self.clients) this.port = c(), this.channel.onmessage = _d0624869a805 => {
        "\x72\x65\x66\x72\x65\x73\x68\x50\x6f\x72\x74" === _d0624869a805.data.type && (this.port = c());
      }; else if (_d0624869a805 && SharedWorker) {
        if (!_d0624869a805.startsWith("\x2f") && !_d0624869a805.includes("\x3a")) throw new Error("\x49\x6e\x76\x61\x6c\x69\x64\x20\x55\x52\x4c\x2e\x20\x4d\x75\x73\x74\x20\x62\x65\x20\x61\x62\x73\x6f\x6c\x75\x74\x65\x20\x6f\x72\x20\x73\x74\x61\x72\x74\x20\x61\x74\x20\x74\x68\x65\x20\x72\x6f\x6f\x74\x2e");
        this.port = l(_d0624869a805, _48373b7c2141), console.debug("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x73\x65\x74\x74\x69\x6e\x67\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x20\x74\x6f", _d0624869a805), 
        _ebb22c947c55["\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"] = _d0624869a805;
      } else {
        if (!SharedWorker) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x63\x68\x61\x6e\x6e\x65\x6c\x20\x74\x6f\x20\x74\x68\x65\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x2e");
        {
          const _d0624869a805 = _ebb22c947c55["\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"];
          if (console.debug("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x67\x6f\x74\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x3a", _d0624869a805), !_d0624869a805) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x20\x77\x6f\x72\x6b\x65\x72\x50\x61\x74\x68\x20\x66\x72\x6f\x6d\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x2e");
          this.port = l(_d0624869a805, _48373b7c2141);
        }
      }
    }
    async sendMessage(_d0624869a805, _48373b7c2141) {
      this.port instanceof Promise && (this.port = await this.port);
      try {
        await i(this.port);
      } catch {
        return console.warn("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x70\x69\x6e\x67\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x66\x72\x6f\x6d\x20\x74\x68\x65\x20\x77\x6f\x72\x6b\x65\x72\x20\x77\x69\x74\x68\x69\x6e\x20\x31\x2e\x35\x73\x2e\x20\x41\x73\x73\x75\x6d\x69\x6e\x67\x20\x70\x6f\x72\x74\x20\x69\x73\x20\x64\x65\x61\x64\x2e"), 
        this.createChannel(), await this.sendMessage(_d0624869a805, _48373b7c2141);
      }
      const _4a7d9198c026 = new MessageChannel, _ebb22c947c55 = [ _4a7d9198c026.port2, ..._48373b7c2141 || [] ], _59c722e46184 = new Promise((_d0624869a805, _48373b7c2141) => {
        _4a7d9198c026.port1.onmessage = _4a7d9198c026 => {
          const _ebb22c947c55 = _4a7d9198c026.data;
          "\x65\x72\x72\x6f\x72" === _ebb22c947c55.type ? _48373b7c2141(_ebb22c947c55.error) : _d0624869a805(_ebb22c947c55);
        };
      });
      return _ab243cd3ab48.call(this.port, {
        message: _d0624869a805,
        port: _4a7d9198c026.port2
      }, _ebb22c947c55), await _59c722e46184;
    }
  }
  class u extends EventTarget {
    protocols;
    url;
    readyState=_f3c90e5feddd.CONNECTING;
    channel;
    constructor(_d0624869a805, _48373b7c2141 = [], _4a7d9198c026, _ebb22c947c55) {
      super(), this.protocols = _48373b7c2141, this.url = _d0624869a805.toString(), this.protocols = _48373b7c2141;
      const s = _d0624869a805 => {
        this.protocols = _d0624869a805, this.readyState = _f3c90e5feddd.OPEN;
        const _48373b7c2141 = new Event("\x6f\x70\x65\x6e");
        this.dispatchEvent(_48373b7c2141);
      }, o = async _d0624869a805 => {
        const _48373b7c2141 = new MessageEvent("\x6d\x65\x73\x73\x61\x67\x65", {
          data: _d0624869a805
        });
        this.dispatchEvent(_48373b7c2141);
      }, c = (_d0624869a805, _48373b7c2141) => {
        this.readyState = _f3c90e5feddd.CLOSED;
        const _4a7d9198c026 = new CloseEvent("\x63\x6c\x6f\x73\x65", {
          code: _d0624869a805,
          reason: _48373b7c2141
        });
        this.dispatchEvent(_4a7d9198c026);
      }, i = () => {
        this.readyState = _f3c90e5feddd.CLOSED;
        const _d0624869a805 = new Event("\x65\x72\x72\x6f\x72");
        this.dispatchEvent(_d0624869a805);
      };
      this.channel = new MessageChannel, this.channel.port1.onmessage = _d0624869a805 => {
        "\x6f\x70\x65\x6e" === _d0624869a805.data.type ? s(_d0624869a805.data.args[0]) : "\x6d\x65\x73\x73\x61\x67\x65" === _d0624869a805.data.type ? o(_d0624869a805.data.args[0]) : "\x63\x6c\x6f\x73\x65" === _d0624869a805.data.type ? c(_d0624869a805.data.args[0], _d0624869a805.data.args[1]) : "\x65\x72\x72\x6f\x72" === _d0624869a805.data.type && i();
      }, _4a7d9198c026.sendMessage({
        type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74",
        websocket: {
          url: _d0624869a805.toString(),
          protocols: _48373b7c2141,
          requestHeaders: _ebb22c947c55,
          channel: this.channel.port2
        }
      }, [ this.channel.port2 ]);
    }
    send(..._d0624869a805) {
      if (this.readyState === _f3c90e5feddd.CONNECTING) throw new DOMException("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x65\x78\x65\x63\x75\x74\x65\x20\x27\x73\x65\x6e\x64\x27\x20\x6f\x6e\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x53\x74\x69\x6c\x6c\x20\x69\x6e\x20\x43\x4f\x4e\x4e\x45\x43\x54\x49\x4e\x47\x20\x73\x74\x61\x74\x65\x2e");
      let _48373b7c2141 = _d0624869a805[0];
      _48373b7c2141.buffer && (_48373b7c2141 = _48373b7c2141.buffer.slice(_48373b7c2141.byteOffset, _48373b7c2141.byteOffset + _48373b7c2141.byteLength)), 
      _ab243cd3ab48.call(this.channel.port1, {
        type: "\x64\x61\x74\x61",
        data: _48373b7c2141
      }, _48373b7c2141 instanceof ArrayBuffer ? [ _48373b7c2141 ] : []);
    }
    close(_d0624869a805, _48373b7c2141) {
      _ab243cd3ab48.call(this.channel.port1, {
        type: "\x63\x6c\x6f\x73\x65",
        closeCode: _d0624869a805,
        closeReason: _48373b7c2141
      });
    }
  }
  function w(_d0624869a805, _48373b7c2141, _4a7d9198c026) {
    console.error(`\x65\x72\x72\x6f\x72\x20\x77\x68\x69\x6c\x65\x20\x70\x72\x6f\x63\x65\x73\x73\x69\x6e\x67\x20\x27${_4a7d9198c026}\x27\x3a\x20`, _48373b7c2141), _d0624869a805.postMessage({
      type: "\x65\x72\x72\x6f\x72",
      error: _48373b7c2141
    });
  }
  function f(_d0624869a805) {
    for (let _48373b7c2141 = 0; _48373b7c2141 < _d0624869a805.length; _48373b7c2141++) {
      const _4a7d9198c026 = _d0624869a805[_48373b7c2141];
      if (!"\x21\x23\x24\x25\x26\x27\x2a\x2b\x2d\x2e\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x5e\x5f\x60\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x7c\x7e".includes(_4a7d9198c026)) return !1;
    }
    return !0;
  }
  const _af1b1e191e1b = [ "\x77\x73\x3a", "\x77\x73\x73\x3a" ], _11a8eb0c76d8 = [ 101, 204, 205, 304 ], _126766dd6527 = [ 301, 302, 303, 307, 308 ];
  class m {
    worker;
    constructor(_d0624869a805) {
      this.worker = new p(_d0624869a805);
    }
    createWebSocket(_d0624869a805, _48373b7c2141 = [], _4a7d9198c026, _ebb22c947c55) {
      try {
        _d0624869a805 = new URL(_d0624869a805);
      } catch (_48373b7c2141) {
        throw new DOMException(`\x46\x61\x69\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x20\x27${_d0624869a805}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
      }
      if (!_af1b1e191e1b.includes(_d0624869a805.protocol)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x27\x73\x20\x73\x63\x68\x65\x6d\x65\x20\x6d\x75\x73\x74\x20\x62\x65\x20\x65\x69\x74\x68\x65\x72\x20\x27\x77\x73\x27\x20\x6f\x72\x20\x27\x77\x73\x73\x27\x2e\x20\x27${_d0624869a805.protocol}\x27\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x6c\x6c\x6f\x77\x65\x64\x2e`);
      Array.isArray(_48373b7c2141) || (_48373b7c2141 = [ _48373b7c2141 ]), _48373b7c2141 = _48373b7c2141.map(String);
      for (const _d0624869a805 of _48373b7c2141) if (!f(_d0624869a805)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x73\x75\x62\x70\x72\x6f\x74\x6f\x63\x6f\x6c\x20\x27${_d0624869a805}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
      _ebb22c947c55 = _ebb22c947c55 || {};
      return new u(_d0624869a805, _48373b7c2141, this.worker, _ebb22c947c55);
    }
    async fetch(_d0624869a805, _4a7d9198c026) {
      const _ebb22c947c55 = new Request(_d0624869a805, _4a7d9198c026), _59c722e46184 = _4a7d9198c026?.headers || _ebb22c947c55.headers, _ab243cd3ab48 = _59c722e46184 instanceof Headers ? Object.fromEntries(_59c722e46184) : _59c722e46184, _f3c90e5feddd = _ebb22c947c55.body;
      let _e28824611675 = new URL(_ebb22c947c55.url);
      if (_e28824611675.protocol.startsWith("\x62\x6c\x6f\x62\x3a")) {
        const _d0624869a805 = await _48373b7c2141(_e28824611675), _4a7d9198c026 = new Response(_d0624869a805.body, _d0624869a805);
        return _4a7d9198c026.rawHeaders = Object.fromEntries(_d0624869a805.headers), _4a7d9198c026.rawResponse = {
          body: _d0624869a805.body,
          headers: Object.fromEntries(_d0624869a805.headers),
          status: _d0624869a805.status,
          statusText: _d0624869a805.statusText
        }, _4a7d9198c026.finalURL = _e28824611675.toString(), _4a7d9198c026;
      }
      for (let _d0624869a805 = 0; ;_d0624869a805++) {
        let _48373b7c2141 = (await this.worker.sendMessage({
          type: "\x66\x65\x74\x63\x68",
          fetch: {
            remote: _e28824611675.toString(),
            method: _ebb22c947c55.method,
            headers: _ab243cd3ab48,
            body: _f3c90e5feddd || void 0
          }
        }, _f3c90e5feddd ? [ _f3c90e5feddd ] : [])).fetch, _59c722e46184 = new Response(_11a8eb0c76d8.includes(_48373b7c2141.status) ? void 0 : _48373b7c2141.body, {
          headers: new Headers(_48373b7c2141.headers),
          status: _48373b7c2141.status,
          statusText: _48373b7c2141.statusText
        });
        _59c722e46184.rawHeaders = _48373b7c2141.headers, _59c722e46184.rawResponse = _48373b7c2141, 
        _59c722e46184.finalURL = _e28824611675.toString();
        const _af1b1e191e1b = _4a7d9198c026?.redirect || _ebb22c947c55.redirect;
        if (!_126766dd6527.includes(_59c722e46184.status)) return _59c722e46184;
        switch (_af1b1e191e1b) {
         case "\x66\x6f\x6c\x6c\x6f\x77":
          {
            const _48373b7c2141 = _59c722e46184.headers.get("\x6c\x6f\x63\x61\x74\x69\x6f\x6e");
            if (20 > _d0624869a805 && null !== _48373b7c2141) {
              _e28824611675 = new URL(_48373b7c2141, _e28824611675);
              continue;
            }
            throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");
          }

         case "\x65\x72\x72\x6f\x72":
          throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");

         case "\x6d\x61\x6e\x75\x61\x6c":
          return _59c722e46184;
        }
      }
    }
  }
  console.debug("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x72\x75\x6e\x6e\x69\x6e\x67\x20\x76\x32\x2e\x31\x2e\x39\x20\x28\x62\x75\x69\x6c\x64\x20\x64\x63\x39\x64\x63\x36\x65\x29"), _d0624869a805.BareClient = m, 
  _d0624869a805.BookmuxConnection = class {
    worker;
    constructor(_d0624869a805) {
      this.worker = new p(_d0624869a805);
    }
    async getTransport() {
      return (await this.worker.sendMessage({
        type: "\x67\x65\x74"
      })).name;
    }
    async setTransport(_d0624869a805, _48373b7c2141, _4a7d9198c026) {
      await this.setManualTransport(`\x0a\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x7b\x20\x64\x65\x66\x61\x75\x6c\x74\x3a\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x7d\x20\x3d\x20\x61\x77\x61\x69\x74\x20\x69\x6d\x70\x6f\x72\x74\x28\x22${_d0624869a805}\x22\x29\x3b\x0a\x09\x09\x09\x72\x65\x74\x75\x72\x6e\x20\x5b\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2c\x20\x22${_d0624869a805}\x22\x5d\x3b\x0a\x09\x09`, _48373b7c2141, _4a7d9198c026);
    }
    async setManualTransport(_d0624869a805, _48373b7c2141, _4a7d9198c026) {
      if ("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65" === _d0624869a805) throw new Error("\x55\x73\x65\x20\x73\x65\x74\x52\x65\x6d\x6f\x74\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2e");
      await this.worker.sendMessage({
        type: "\x73\x65\x74",
        client: {
          function: _d0624869a805,
          args: _48373b7c2141
        }
      }, _4a7d9198c026);
    }
    async setRemoteTransport(_d0624869a805, _48373b7c2141) {
      const _4a7d9198c026 = new MessageChannel;
      _4a7d9198c026.port1.onmessage = async _48373b7c2141 => {
        const _4a7d9198c026 = _48373b7c2141.data.port, _ebb22c947c55 = _48373b7c2141.data.message;
        if ("\x66\x65\x74\x63\x68" === _ebb22c947c55.type) try {
          _d0624869a805.ready || await _d0624869a805.init(), await async function(_d0624869a805, _48373b7c2141, _4a7d9198c026) {
            const _ebb22c947c55 = await _4a7d9198c026.request(new URL(_d0624869a805.fetch.remote), _d0624869a805.fetch.method, _d0624869a805.fetch.body, _d0624869a805.fetch.headers, null);
            if (!d() && _ebb22c947c55.body instanceof ReadableStream) {
              const _d0624869a805 = new Response(_ebb22c947c55.body);
              _ebb22c947c55.body = await _d0624869a805.arrayBuffer();
            }
            _ebb22c947c55.body instanceof ReadableStream || _ebb22c947c55.body instanceof ArrayBuffer ? _ab243cd3ab48.call(_48373b7c2141, {
              type: "\x66\x65\x74\x63\x68",
              fetch: _ebb22c947c55
            }, [ _ebb22c947c55.body ]) : _ab243cd3ab48.call(_48373b7c2141, {
              type: "\x66\x65\x74\x63\x68",
              fetch: _ebb22c947c55
            });
          }(_ebb22c947c55, _4a7d9198c026, _d0624869a805);
        } catch (_d0624869a805) {
          w(_4a7d9198c026, _d0624869a805, "\x66\x65\x74\x63\x68");
        } else if ("\x77\x65\x62\x73\x6f\x63\x6b\x65\x74" === _ebb22c947c55.type) try {
          _d0624869a805.ready || await _d0624869a805.init(), await async function(_d0624869a805, _48373b7c2141, _4a7d9198c026) {
            const [_ebb22c947c55, _59c722e46184] = _4a7d9198c026.connect(new URL(_d0624869a805.websocket.url), _d0624869a805.websocket.protocols, _d0624869a805.websocket.requestHeaders, _48373b7c2141 => {
              _ab243cd3ab48.call(_d0624869a805.websocket.channel, {
                type: "\x6f\x70\x65\x6e",
                args: [ _48373b7c2141 ]
              });
            }, _48373b7c2141 => {
              _48373b7c2141 instanceof ArrayBuffer ? _ab243cd3ab48.call(_d0624869a805.websocket.channel, {
                type: "\x6d\x65\x73\x73\x61\x67\x65",
                args: [ _48373b7c2141 ]
              }, [ _48373b7c2141 ]) : _ab243cd3ab48.call(_d0624869a805.websocket.channel, {
                type: "\x6d\x65\x73\x73\x61\x67\x65",
                args: [ _48373b7c2141 ]
              });
            }, (_48373b7c2141, _4a7d9198c026) => {
              _ab243cd3ab48.call(_d0624869a805.websocket.channel, {
                type: "\x63\x6c\x6f\x73\x65",
                args: [ _48373b7c2141, _4a7d9198c026 ]
              });
            }, _48373b7c2141 => {
              _ab243cd3ab48.call(_d0624869a805.websocket.channel, {
                type: "\x65\x72\x72\x6f\x72",
                args: [ _48373b7c2141 ]
              });
            });
            _d0624869a805.websocket.channel.onmessage = _d0624869a805 => {
              "\x64\x61\x74\x61" === _d0624869a805.data.type ? _ebb22c947c55(_d0624869a805.data.data) : "\x63\x6c\x6f\x73\x65" === _d0624869a805.data.type && _59c722e46184(_d0624869a805.data.closeCode, _d0624869a805.data.closeReason);
            }, _ab243cd3ab48.call(_48373b7c2141, {
              type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74"
            });
          }(_ebb22c947c55, _4a7d9198c026, _d0624869a805);
        } catch (_d0624869a805) {
          w(_4a7d9198c026, _d0624869a805, "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74");
        }
      }, await this.worker.sendMessage({
        type: "\x73\x65\x74",
        client: {
          function: "\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65",
          args: [ _4a7d9198c026.port2, _48373b7c2141 ]
        }
      }, [ _4a7d9198c026.port2 ]);
    }
    getInnerPort() {
      return this.worker.port;
    }
  }, _d0624869a805.BareWebSocket = u, _d0624869a805.WebSocketFields = _f3c90e5feddd, 
  _d0624869a805.WorkerConnection = p, _d0624869a805.\u{62}\u{72}\u{6f}\u{77}\u{73}\u{65}\u{72}\u{53}\u{75}\u{70}\u{70}\u{6f}\u{72}\u{74}\u{73}\u{54}\u{72}\u{61}\u{6e}\u{73}\u{66}\u{65}\u{72}\u{72}\u{69}\u{6e}\u{67}\u{53}\u{74}\u{72}\u{65}\u{61}\u{6d}\u{73} = d, 
  _d0624869a805.default = m, _d0624869a805.maxRedirects = 20, _d0624869a805.validProtocol = f, 
  Object.defineProperty(_d0624869a805, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
    value: !0
  });
});
