!function(_d744eea0de1a, _00693ec0ad36) {
  "\x6f\x62\x6a\x65\x63\x74" == typeof exports && "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof module ? _00693ec0ad36(exports) : "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof define && define.amd ? define([ "\x65\x78\x70\x6f\x72\x74\x73" ], _00693ec0ad36) : _00693ec0ad36((_d744eea0de1a = "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof globalThis ? globalThis : _d744eea0de1a || self).Bookmux = {});
}(this, function(_d744eea0de1a) {
  "use strict";
  const _00693ec0ad36 = globalThis.fetch, _099a276c3cae = globalThis.SharedWorker, _f383f1e26bb8 = globalThis.localStorage, _3d25c3aaccff = globalThis.navigator.serviceWorker, _abde61462424 = MessagePort.prototype.postMessage, _af71a146069b = {
    prototype: {
      send: WebSocket.prototype.send
    },
    CLOSED: WebSocket.CLOSED,
    CLOSING: WebSocket.CLOSING,
    CONNECTING: WebSocket.CONNECTING,
    OPEN: WebSocket.OPEN
  };
  async function c() {
    const _d744eea0de1a = (await self.clients.matchAll({
      type: "\x77\x69\x6e\x64\x6f\x77",
      includeUncontrolled: !0
    })).map(async _d744eea0de1a => {
      const _00693ec0ad36 = await function(_d744eea0de1a) {
        let _00693ec0ad36 = new MessageChannel;
        return new Promise(_099a276c3cae => {
          _d744eea0de1a.postMessage({
            type: "\x67\x65\x74\x50\x6f\x72\x74",
            port: _00693ec0ad36.port2
          }, [ _00693ec0ad36.port2 ]), _00693ec0ad36.port1.onmessage = _d744eea0de1a => {
            _099a276c3cae(_d744eea0de1a.data);
          };
        });
      }(_d744eea0de1a);
      return await i(_00693ec0ad36), _00693ec0ad36;
    }), _00693ec0ad36 = Promise.race([ Promise.any(_d744eea0de1a), new Promise((_d744eea0de1a, _00693ec0ad36) => setTimeout(_00693ec0ad36, 1e3, new TypeError("\x74\x69\x6d\x65\x6f\x75\x74"))) ]);
    try {
      return await _00693ec0ad36;
    } catch (_d744eea0de1a) {
      if (_d744eea0de1a instanceof AggregateError) throw console.error("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x61\x73\x20\x61\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e"), 
      new Error("\x41\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e", {
        cause: _d744eea0de1a
      });
      return console.warn("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x77\x69\x74\x68\x69\x6e\x20\x31\x73\x2c\x20\x72\x65\x74\x72\x79\x69\x6e\x67"), 
      await c();
    }
  }
  function i(_d744eea0de1a) {
    const _00693ec0ad36 = new MessageChannel, _099a276c3cae = new Promise((_d744eea0de1a, _099a276c3cae) => {
      _00693ec0ad36.port1.onmessage = _00693ec0ad36 => {
        "\x70\x6f\x6e\x67" === _00693ec0ad36.data.type && _d744eea0de1a();
      }, setTimeout(_099a276c3cae, 1500);
    });
    return _abde61462424.call(_d744eea0de1a, {
      message: {
        type: "\x70\x69\x6e\x67"
      },
      port: _00693ec0ad36.port2
    }, [ _00693ec0ad36.port2 ]), _099a276c3cae;
  }
  function l(_d744eea0de1a, _00693ec0ad36) {
    const _f383f1e26bb8 = new _099a276c3cae(_d744eea0de1a, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
    return _00693ec0ad36 && _3d25c3aaccff.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", _00693ec0ad36 => {
      if ("\x67\x65\x74\x50\x6f\x72\x74" === _00693ec0ad36.data.type && _00693ec0ad36.data.port) {
        console.debug("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x72\x65\x63\x69\x65\x76\x65\x64\x20\x72\x65\x71\x75\x65\x73\x74\x20\x66\x6f\x72\x20\x70\x6f\x72\x74\x20\x66\x72\x6f\x6d\x20\x73\x77");
        const _f383f1e26bb8 = new _099a276c3cae(_d744eea0de1a, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
        _abde61462424.call(_00693ec0ad36.data.port, _f383f1e26bb8.port, [ _f383f1e26bb8.port ]);
      }
    }), _f383f1e26bb8.port;
  }
  let _ef817d4230ac = null;
  function d() {
    if (null === _ef817d4230ac) {
      const _d744eea0de1a = new MessageChannel, _00693ec0ad36 = new ReadableStream;
      let _099a276c3cae;
      try {
        _abde61462424.call(_d744eea0de1a.port1, _00693ec0ad36, [ _00693ec0ad36 ]), _099a276c3cae = !0;
      } catch (_d744eea0de1a) {
        _099a276c3cae = !1;
      }
      return _ef817d4230ac = _099a276c3cae, _099a276c3cae;
    }
    return _ef817d4230ac;
  }
  class p {
    channel;
    port;
    workerPath;
    constructor(_d744eea0de1a) {
      this.channel = new BroadcastChannel("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78"), _d744eea0de1a instanceof MessagePort || _d744eea0de1a instanceof Promise ? this.port = _d744eea0de1a : this.createChannel(_d744eea0de1a, !0);
    }
    createChannel(_d744eea0de1a, _00693ec0ad36) {
      if (self.clients) this.port = c(), this.channel.onmessage = _d744eea0de1a => {
        "\x72\x65\x66\x72\x65\x73\x68\x50\x6f\x72\x74" === _d744eea0de1a.data.type && (this.port = c());
      }; else if (_d744eea0de1a && SharedWorker) {
        if (!_d744eea0de1a.startsWith("\x2f") && !_d744eea0de1a.includes("\x3a")) throw new Error("\x49\x6e\x76\x61\x6c\x69\x64\x20\x55\x52\x4c\x2e\x20\x4d\x75\x73\x74\x20\x62\x65\x20\x61\x62\x73\x6f\x6c\x75\x74\x65\x20\x6f\x72\x20\x73\x74\x61\x72\x74\x20\x61\x74\x20\x74\x68\x65\x20\x72\x6f\x6f\x74\x2e");
        this.port = l(_d744eea0de1a, _00693ec0ad36), console.debug("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x73\x65\x74\x74\x69\x6e\x67\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x20\x74\x6f", _d744eea0de1a), 
        _f383f1e26bb8["\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"] = _d744eea0de1a;
      } else {
        if (!SharedWorker) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x63\x68\x61\x6e\x6e\x65\x6c\x20\x74\x6f\x20\x74\x68\x65\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x2e");
        {
          const _d744eea0de1a = _f383f1e26bb8["\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"];
          if (console.debug("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x67\x6f\x74\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x3a", _d744eea0de1a), !_d744eea0de1a) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x20\x77\x6f\x72\x6b\x65\x72\x50\x61\x74\x68\x20\x66\x72\x6f\x6d\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x2e");
          this.port = l(_d744eea0de1a, _00693ec0ad36);
        }
      }
    }
    async sendMessage(_d744eea0de1a, _00693ec0ad36) {
      this.port instanceof Promise && (this.port = await this.port);
      try {
        await i(this.port);
      } catch {
        return console.warn("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x70\x69\x6e\x67\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x66\x72\x6f\x6d\x20\x74\x68\x65\x20\x77\x6f\x72\x6b\x65\x72\x20\x77\x69\x74\x68\x69\x6e\x20\x31\x2e\x35\x73\x2e\x20\x41\x73\x73\x75\x6d\x69\x6e\x67\x20\x70\x6f\x72\x74\x20\x69\x73\x20\x64\x65\x61\x64\x2e"), 
        this.createChannel(), await this.sendMessage(_d744eea0de1a, _00693ec0ad36);
      }
      const _099a276c3cae = new MessageChannel, _f383f1e26bb8 = [ _099a276c3cae.port2, ..._00693ec0ad36 || [] ], _3d25c3aaccff = new Promise((_d744eea0de1a, _00693ec0ad36) => {
        _099a276c3cae.port1.onmessage = _099a276c3cae => {
          const _f383f1e26bb8 = _099a276c3cae.data;
          "\x65\x72\x72\x6f\x72" === _f383f1e26bb8.type ? _00693ec0ad36(_f383f1e26bb8.error) : _d744eea0de1a(_f383f1e26bb8);
        };
      });
      return _abde61462424.call(this.port, {
        message: _d744eea0de1a,
        port: _099a276c3cae.port2
      }, _f383f1e26bb8), await _3d25c3aaccff;
    }
  }
  class u extends EventTarget {
    protocols;
    url;
    readyState=_af71a146069b.CONNECTING;
    channel;
    constructor(_d744eea0de1a, _00693ec0ad36 = [], _099a276c3cae, _f383f1e26bb8) {
      super(), this.protocols = _00693ec0ad36, this.url = _d744eea0de1a.toString(), this.protocols = _00693ec0ad36;
      const s = _d744eea0de1a => {
        this.protocols = _d744eea0de1a, this.readyState = _af71a146069b.OPEN;
        const _00693ec0ad36 = new Event("\x6f\x70\x65\x6e");
        this.dispatchEvent(_00693ec0ad36);
      }, o = async _d744eea0de1a => {
        const _00693ec0ad36 = new MessageEvent("\x6d\x65\x73\x73\x61\x67\x65", {
          data: _d744eea0de1a
        });
        this.dispatchEvent(_00693ec0ad36);
      }, c = (_d744eea0de1a, _00693ec0ad36) => {
        this.readyState = _af71a146069b.CLOSED;
        const _099a276c3cae = new CloseEvent("\x63\x6c\x6f\x73\x65", {
          code: _d744eea0de1a,
          reason: _00693ec0ad36
        });
        this.dispatchEvent(_099a276c3cae);
      }, i = () => {
        this.readyState = _af71a146069b.CLOSED;
        const _d744eea0de1a = new Event("\x65\x72\x72\x6f\x72");
        this.dispatchEvent(_d744eea0de1a);
      };
      this.channel = new MessageChannel, this.channel.port1.onmessage = _d744eea0de1a => {
        "\x6f\x70\x65\x6e" === _d744eea0de1a.data.type ? s(_d744eea0de1a.data.args[0]) : "\x6d\x65\x73\x73\x61\x67\x65" === _d744eea0de1a.data.type ? o(_d744eea0de1a.data.args[0]) : "\x63\x6c\x6f\x73\x65" === _d744eea0de1a.data.type ? c(_d744eea0de1a.data.args[0], _d744eea0de1a.data.args[1]) : "\x65\x72\x72\x6f\x72" === _d744eea0de1a.data.type && i();
      }, _099a276c3cae.sendMessage({
        type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74",
        websocket: {
          url: _d744eea0de1a.toString(),
          protocols: _00693ec0ad36,
          requestHeaders: _f383f1e26bb8,
          channel: this.channel.port2
        }
      }, [ this.channel.port2 ]);
    }
    send(..._d744eea0de1a) {
      if (this.readyState === _af71a146069b.CONNECTING) throw new DOMException("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x65\x78\x65\x63\x75\x74\x65\x20\x27\x73\x65\x6e\x64\x27\x20\x6f\x6e\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x53\x74\x69\x6c\x6c\x20\x69\x6e\x20\x43\x4f\x4e\x4e\x45\x43\x54\x49\x4e\x47\x20\x73\x74\x61\x74\x65\x2e");
      let _00693ec0ad36 = _d744eea0de1a[0];
      _00693ec0ad36.buffer && (_00693ec0ad36 = _00693ec0ad36.buffer.slice(_00693ec0ad36.byteOffset, _00693ec0ad36.byteOffset + _00693ec0ad36.byteLength)), 
      _abde61462424.call(this.channel.port1, {
        type: "\x64\x61\x74\x61",
        data: _00693ec0ad36
      }, _00693ec0ad36 instanceof ArrayBuffer ? [ _00693ec0ad36 ] : []);
    }
    close(_d744eea0de1a, _00693ec0ad36) {
      _abde61462424.call(this.channel.port1, {
        type: "\x63\x6c\x6f\x73\x65",
        closeCode: _d744eea0de1a,
        closeReason: _00693ec0ad36
      });
    }
  }
  function w(_d744eea0de1a, _00693ec0ad36, _099a276c3cae) {
    console.error(`\x65\x72\x72\x6f\x72\x20\x77\x68\x69\x6c\x65\x20\x70\x72\x6f\x63\x65\x73\x73\x69\x6e\x67\x20\x27${_099a276c3cae}\x27\x3a\x20`, _00693ec0ad36), _d744eea0de1a.postMessage({
      type: "\x65\x72\x72\x6f\x72",
      error: _00693ec0ad36
    });
  }
  function f(_d744eea0de1a) {
    for (let _00693ec0ad36 = 0; _00693ec0ad36 < _d744eea0de1a.length; _00693ec0ad36++) {
      const _099a276c3cae = _d744eea0de1a[_00693ec0ad36];
      if (!"\x21\x23\x24\x25\x26\x27\x2a\x2b\x2d\x2e\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x5e\x5f\x60\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x7c\x7e".includes(_099a276c3cae)) return !1;
    }
    return !0;
  }
  const _c4848e86c712 = [ "\x77\x73\x3a", "\x77\x73\x73\x3a" ], _2186115bcf63 = [ 101, 204, 205, 304 ], _9f3a4422615c = [ 301, 302, 303, 307, 308 ];
  class m {
    worker;
    constructor(_d744eea0de1a) {
      this.worker = new p(_d744eea0de1a);
    }
    createWebSocket(_d744eea0de1a, _00693ec0ad36 = [], _099a276c3cae, _f383f1e26bb8) {
      try {
        _d744eea0de1a = new URL(_d744eea0de1a);
      } catch (_00693ec0ad36) {
        throw new DOMException(`\x46\x61\x69\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x20\x27${_d744eea0de1a}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
      }
      if (!_c4848e86c712.includes(_d744eea0de1a.protocol)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x27\x73\x20\x73\x63\x68\x65\x6d\x65\x20\x6d\x75\x73\x74\x20\x62\x65\x20\x65\x69\x74\x68\x65\x72\x20\x27\x77\x73\x27\x20\x6f\x72\x20\x27\x77\x73\x73\x27\x2e\x20\x27${_d744eea0de1a.protocol}\x27\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x6c\x6c\x6f\x77\x65\x64\x2e`);
      Array.isArray(_00693ec0ad36) || (_00693ec0ad36 = [ _00693ec0ad36 ]), _00693ec0ad36 = _00693ec0ad36.map(String);
      for (const _d744eea0de1a of _00693ec0ad36) if (!f(_d744eea0de1a)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x73\x75\x62\x70\x72\x6f\x74\x6f\x63\x6f\x6c\x20\x27${_d744eea0de1a}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
      _f383f1e26bb8 = _f383f1e26bb8 || {};
      return new u(_d744eea0de1a, _00693ec0ad36, this.worker, _f383f1e26bb8);
    }
    async fetch(_d744eea0de1a, _099a276c3cae) {
      const _f383f1e26bb8 = new Request(_d744eea0de1a, _099a276c3cae), _3d25c3aaccff = _099a276c3cae?.headers || _f383f1e26bb8.headers, _abde61462424 = _3d25c3aaccff instanceof Headers ? Object.fromEntries(_3d25c3aaccff) : _3d25c3aaccff, _af71a146069b = _f383f1e26bb8.body;
      let _ef817d4230ac = new URL(_f383f1e26bb8.url);
      if (_ef817d4230ac.protocol.startsWith("\x62\x6c\x6f\x62\x3a")) {
        const _d744eea0de1a = await _00693ec0ad36(_ef817d4230ac), _099a276c3cae = new Response(_d744eea0de1a.body, _d744eea0de1a);
        return _099a276c3cae.rawHeaders = Object.fromEntries(_d744eea0de1a.headers), _099a276c3cae.rawResponse = {
          body: _d744eea0de1a.body,
          headers: Object.fromEntries(_d744eea0de1a.headers),
          status: _d744eea0de1a.status,
          statusText: _d744eea0de1a.statusText
        }, _099a276c3cae.finalURL = _ef817d4230ac.toString(), _099a276c3cae;
      }
      for (let _d744eea0de1a = 0; ;_d744eea0de1a++) {
        let _00693ec0ad36 = (await this.worker.sendMessage({
          type: "\x66\x65\x74\x63\x68",
          fetch: {
            remote: _ef817d4230ac.toString(),
            method: _f383f1e26bb8.method,
            headers: _abde61462424,
            body: _af71a146069b || void 0
          }
        }, _af71a146069b ? [ _af71a146069b ] : [])).fetch, _3d25c3aaccff = new Response(_2186115bcf63.includes(_00693ec0ad36.status) ? void 0 : _00693ec0ad36.body, {
          headers: new Headers(_00693ec0ad36.headers),
          status: _00693ec0ad36.status,
          statusText: _00693ec0ad36.statusText
        });
        _3d25c3aaccff.rawHeaders = _00693ec0ad36.headers, _3d25c3aaccff.rawResponse = _00693ec0ad36, 
        _3d25c3aaccff.finalURL = _ef817d4230ac.toString();
        const _c4848e86c712 = _099a276c3cae?.redirect || _f383f1e26bb8.redirect;
        if (!_9f3a4422615c.includes(_3d25c3aaccff.status)) return _3d25c3aaccff;
        switch (_c4848e86c712) {
         case "\x66\x6f\x6c\x6c\x6f\x77":
          {
            const _00693ec0ad36 = _3d25c3aaccff.headers.get("\x6c\x6f\x63\x61\x74\x69\x6f\x6e");
            if (20 > _d744eea0de1a && null !== _00693ec0ad36) {
              _ef817d4230ac = new URL(_00693ec0ad36, _ef817d4230ac);
              continue;
            }
            throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");
          }

         case "\x65\x72\x72\x6f\x72":
          throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");

         case "\x6d\x61\x6e\x75\x61\x6c":
          return _3d25c3aaccff;
        }
      }
    }
  }
  console.debug("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x72\x75\x6e\x6e\x69\x6e\x67\x20\x76\x32\x2e\x31\x2e\x39\x20\x28\x62\x75\x69\x6c\x64\x20\x64\x63\x39\x64\x63\x36\x65\x29"), _d744eea0de1a.BareClient = m, 
  _d744eea0de1a.BookmuxConnection = class {
    worker;
    constructor(_d744eea0de1a) {
      this.worker = new p(_d744eea0de1a);
    }
    async getTransport() {
      return (await this.worker.sendMessage({
        type: "\x67\x65\x74"
      })).name;
    }
    async setTransport(_d744eea0de1a, _00693ec0ad36, _099a276c3cae) {
      await this.setManualTransport(`\x0a\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x7b\x20\x64\x65\x66\x61\x75\x6c\x74\x3a\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x7d\x20\x3d\x20\x61\x77\x61\x69\x74\x20\x69\x6d\x70\x6f\x72\x74\x28\x22${_d744eea0de1a}\x22\x29\x3b\x0a\x09\x09\x09\x72\x65\x74\x75\x72\x6e\x20\x5b\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2c\x20\x22${_d744eea0de1a}\x22\x5d\x3b\x0a\x09\x09`, _00693ec0ad36, _099a276c3cae);
    }
    async setManualTransport(_d744eea0de1a, _00693ec0ad36, _099a276c3cae) {
      if ("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65" === _d744eea0de1a) throw new Error("\x55\x73\x65\x20\x73\x65\x74\x52\x65\x6d\x6f\x74\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2e");
      await this.worker.sendMessage({
        type: "\x73\x65\x74",
        client: {
          function: _d744eea0de1a,
          args: _00693ec0ad36
        }
      }, _099a276c3cae);
    }
    async setRemoteTransport(_d744eea0de1a, _00693ec0ad36) {
      const _099a276c3cae = new MessageChannel;
      _099a276c3cae.port1.onmessage = async _00693ec0ad36 => {
        const _099a276c3cae = _00693ec0ad36.data.port, _f383f1e26bb8 = _00693ec0ad36.data.message;
        if ("\x66\x65\x74\x63\x68" === _f383f1e26bb8.type) try {
          _d744eea0de1a.ready || await _d744eea0de1a.init(), await async function(_d744eea0de1a, _00693ec0ad36, _099a276c3cae) {
            const _f383f1e26bb8 = await _099a276c3cae.request(new URL(_d744eea0de1a.fetch.remote), _d744eea0de1a.fetch.method, _d744eea0de1a.fetch.body, _d744eea0de1a.fetch.headers, null);
            if (!d() && _f383f1e26bb8.body instanceof ReadableStream) {
              const _d744eea0de1a = new Response(_f383f1e26bb8.body);
              _f383f1e26bb8.body = await _d744eea0de1a.arrayBuffer();
            }
            _f383f1e26bb8.body instanceof ReadableStream || _f383f1e26bb8.body instanceof ArrayBuffer ? _abde61462424.call(_00693ec0ad36, {
              type: "\x66\x65\x74\x63\x68",
              fetch: _f383f1e26bb8
            }, [ _f383f1e26bb8.body ]) : _abde61462424.call(_00693ec0ad36, {
              type: "\x66\x65\x74\x63\x68",
              fetch: _f383f1e26bb8
            });
          }(_f383f1e26bb8, _099a276c3cae, _d744eea0de1a);
        } catch (_d744eea0de1a) {
          w(_099a276c3cae, _d744eea0de1a, "\x66\x65\x74\x63\x68");
        } else if ("\x77\x65\x62\x73\x6f\x63\x6b\x65\x74" === _f383f1e26bb8.type) try {
          _d744eea0de1a.ready || await _d744eea0de1a.init(), await async function(_d744eea0de1a, _00693ec0ad36, _099a276c3cae) {
            const [_f383f1e26bb8, _3d25c3aaccff] = _099a276c3cae.connect(new URL(_d744eea0de1a.websocket.url), _d744eea0de1a.websocket.protocols, _d744eea0de1a.websocket.requestHeaders, _00693ec0ad36 => {
              _abde61462424.call(_d744eea0de1a.websocket.channel, {
                type: "\x6f\x70\x65\x6e",
                args: [ _00693ec0ad36 ]
              });
            }, _00693ec0ad36 => {
              _00693ec0ad36 instanceof ArrayBuffer ? _abde61462424.call(_d744eea0de1a.websocket.channel, {
                type: "\x6d\x65\x73\x73\x61\x67\x65",
                args: [ _00693ec0ad36 ]
              }, [ _00693ec0ad36 ]) : _abde61462424.call(_d744eea0de1a.websocket.channel, {
                type: "\x6d\x65\x73\x73\x61\x67\x65",
                args: [ _00693ec0ad36 ]
              });
            }, (_00693ec0ad36, _099a276c3cae) => {
              _abde61462424.call(_d744eea0de1a.websocket.channel, {
                type: "\x63\x6c\x6f\x73\x65",
                args: [ _00693ec0ad36, _099a276c3cae ]
              });
            }, _00693ec0ad36 => {
              _abde61462424.call(_d744eea0de1a.websocket.channel, {
                type: "\x65\x72\x72\x6f\x72",
                args: [ _00693ec0ad36 ]
              });
            });
            _d744eea0de1a.websocket.channel.onmessage = _d744eea0de1a => {
              "\x64\x61\x74\x61" === _d744eea0de1a.data.type ? _f383f1e26bb8(_d744eea0de1a.data.data) : "\x63\x6c\x6f\x73\x65" === _d744eea0de1a.data.type && _3d25c3aaccff(_d744eea0de1a.data.closeCode, _d744eea0de1a.data.closeReason);
            }, _abde61462424.call(_00693ec0ad36, {
              type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74"
            });
          }(_f383f1e26bb8, _099a276c3cae, _d744eea0de1a);
        } catch (_d744eea0de1a) {
          w(_099a276c3cae, _d744eea0de1a, "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74");
        }
      }, await this.worker.sendMessage({
        type: "\x73\x65\x74",
        client: {
          function: "\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65",
          args: [ _099a276c3cae.port2, _00693ec0ad36 ]
        }
      }, [ _099a276c3cae.port2 ]);
    }
    getInnerPort() {
      return this.worker.port;
    }
  }, _d744eea0de1a.BareWebSocket = u, _d744eea0de1a.WebSocketFields = _af71a146069b, 
  _d744eea0de1a.WorkerConnection = p, _d744eea0de1a.\u{62}\u{72}\u{6f}\u{77}\u{73}\u{65}\u{72}\u{53}\u{75}\u{70}\u{70}\u{6f}\u{72}\u{74}\u{73}\u{54}\u{72}\u{61}\u{6e}\u{73}\u{66}\u{65}\u{72}\u{72}\u{69}\u{6e}\u{67}\u{53}\u{74}\u{72}\u{65}\u{61}\u{6d}\u{73} = d, 
  _d744eea0de1a.default = m, _d744eea0de1a.maxRedirects = 20, _d744eea0de1a.validProtocol = f, 
  Object.defineProperty(_d744eea0de1a, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
    value: !0
  });
});
