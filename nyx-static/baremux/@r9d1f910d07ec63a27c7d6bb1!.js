const _80cfb73d199c = 20, _93098113a721 = globalThis.fetch, _de27d0e2f573 = globalThis.SharedWorker, _f11eefdd8ff9 = globalThis.localStorage, _cc3b86797832 = globalThis.navigator.serviceWorker, _bc194d138d2d = MessagePort.prototype.postMessage, _c77038910d12 = {
  prototype: {
    send: WebSocket.prototype.send
  },
  CLOSED: WebSocket.CLOSED,
  CLOSING: WebSocket.CLOSING,
  CONNECTING: WebSocket.CONNECTING,
  OPEN: WebSocket.OPEN
};

async function c() {
  const _80cfb73d199c = (await self.clients.matchAll({
    type: "\x77\x69\x6e\x64\x6f\x77",
    includeUncontrolled: !0
  })).filter(_80cfb73d199c => {
    try {
      const _93098113a721 = new URL(_80cfb73d199c.url);
      return _93098113a721.origin === self.location.origin && !_93098113a721.pathname.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x73\x65\x72\x76\x69\x63\x65\x2f") && !_93098113a721.pathname.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x7e\x2f\x73\x74\x75\x64\x79\x2f");
    } catch {
      return !1;
    }
  }).map(async _80cfb73d199c => {
    const _93098113a721 = await function(_80cfb73d199c) {
      let _93098113a721 = new MessageChannel;
      return new Promise(_de27d0e2f573 => {
        _80cfb73d199c.postMessage({
          type: "\x67\x65\x74\x50\x6f\x72\x74",
          port: _93098113a721.port2
        }, [ _93098113a721.port2 ]), _93098113a721.port1.onmessage = _80cfb73d199c => {
          _de27d0e2f573(_80cfb73d199c.data);
        };
      });
    }(_80cfb73d199c);
    return await i(_93098113a721), _93098113a721;
  }), _93098113a721 = Promise.race([ Promise.any(_80cfb73d199c), new Promise((_80cfb73d199c, _93098113a721) => setTimeout(_93098113a721, 5e3, new TypeError("\x74\x69\x6d\x65\x6f\x75\x74"))) ]);
  try {
    return await _93098113a721;
  } catch (_80cfb73d199c) {
    if (_80cfb73d199c instanceof AggregateError) throw console.error("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x61\x73\x20\x61\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e"), 
    new Error("\x41\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e", {
      cause: _80cfb73d199c
    });
    return console.warn("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x77\x69\x74\x68\x69\x6e\x20\x35\x73\x2c\x20\x72\x65\x74\x72\x79\x69\x6e\x67"), 
    await c();
  }
}

function i(_80cfb73d199c) {
  const _93098113a721 = new MessageChannel, _de27d0e2f573 = new Promise((_80cfb73d199c, _de27d0e2f573) => {
    _93098113a721.port1.onmessage = _93098113a721 => {
      "\x70\x6f\x6e\x67" === _93098113a721.data.type && _80cfb73d199c();
    }, setTimeout(_de27d0e2f573, 5e3);
  });
  return _bc194d138d2d.call(_80cfb73d199c, {
    message: {
      type: "\x70\x69\x6e\x67"
    },
    port: _93098113a721.port2
  }, [ _93098113a721.port2 ]), _de27d0e2f573;
}

function l(_80cfb73d199c, _93098113a721) {
  const _f11eefdd8ff9 = new _de27d0e2f573(_80cfb73d199c, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
  return _93098113a721 && _cc3b86797832.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", _93098113a721 => {
    if ("\x67\x65\x74\x50\x6f\x72\x74" === _93098113a721.data.type && _93098113a721.data.port) {
      console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x72\x65\x63\x69\x65\x76\x65\x64\x20\x72\x65\x71\x75\x65\x73\x74\x20\x66\x6f\x72\x20\x70\x6f\x72\x74\x20\x66\x72\x6f\x6d\x20\x73\x77");
      const _f11eefdd8ff9 = new _de27d0e2f573(_80cfb73d199c, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
      _bc194d138d2d.call(_93098113a721.data.port, _f11eefdd8ff9.port, [ _f11eefdd8ff9.port ]);
    }
  }), _f11eefdd8ff9.port;
}

let _8ca7233b9ef5 = null;

function d() {
  if (null === _8ca7233b9ef5) {
    const _80cfb73d199c = new MessageChannel, _93098113a721 = new ReadableStream;
    let _de27d0e2f573;
    try {
      _bc194d138d2d.call(_80cfb73d199c.port1, _93098113a721, [ _93098113a721 ]), _de27d0e2f573 = !0;
    } catch (_80cfb73d199c) {
      _de27d0e2f573 = !1;
    }
    return _8ca7233b9ef5 = _de27d0e2f573, _de27d0e2f573;
  }
  return _8ca7233b9ef5;
}

class p {
  channel;
  port;
  workerPath;
  constructor(_80cfb73d199c) {
    this.channel = new BroadcastChannel("\x62\x61\x72\x65\x2d\x6d\x75\x78"), _80cfb73d199c instanceof MessagePort || _80cfb73d199c instanceof Promise ? this.port = _80cfb73d199c : this.createChannel(_80cfb73d199c, !0);
  }
  createChannel(_80cfb73d199c, _93098113a721) {
    if (self.clients) this.port = c(), this.channel.onmessage = _80cfb73d199c => {
      "\x72\x65\x66\x72\x65\x73\x68\x50\x6f\x72\x74" === _80cfb73d199c.data.type && (this.port = c());
    }; else if (_80cfb73d199c && SharedWorker) {
      if (!_80cfb73d199c.startsWith("\x2f") && !_80cfb73d199c.includes("\x3a")) throw new Error("\x49\x6e\x76\x61\x6c\x69\x64\x20\x55\x52\x4c\x2e\x20\x4d\x75\x73\x74\x20\x62\x65\x20\x61\x62\x73\x6f\x6c\x75\x74\x65\x20\x6f\x72\x20\x73\x74\x61\x72\x74\x20\x61\x74\x20\x74\x68\x65\x20\x72\x6f\x6f\x74\x2e");
      this.port = l(_80cfb73d199c, _93098113a721), console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x73\x65\x74\x74\x69\x6e\x67\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x20\x74\x6f", _80cfb73d199c), 
      _f11eefdd8ff9["\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"] = _80cfb73d199c;
    } else {
      if (!SharedWorker) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x63\x68\x61\x6e\x6e\x65\x6c\x20\x74\x6f\x20\x74\x68\x65\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x2e");
      {
        const _80cfb73d199c = _f11eefdd8ff9["\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"];
        if (console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x67\x6f\x74\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x3a", _80cfb73d199c), !_80cfb73d199c) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x20\x77\x6f\x72\x6b\x65\x72\x50\x61\x74\x68\x20\x66\x72\x6f\x6d\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x2e");
        this.port = l(_80cfb73d199c, _93098113a721);
      }
    }
  }
  async sendMessage(_80cfb73d199c, _93098113a721) {
    this.port instanceof Promise && (this.port = await this.port);
    try {
      await i(this.port);
    } catch {
      return console.warn("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x70\x69\x6e\x67\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x66\x72\x6f\x6d\x20\x74\x68\x65\x20\x77\x6f\x72\x6b\x65\x72\x20\x77\x69\x74\x68\x69\x6e\x20\x35\x73\x2e\x20\x41\x73\x73\x75\x6d\x69\x6e\x67\x20\x70\x6f\x72\x74\x20\x69\x73\x20\x64\x65\x61\x64\x2e"), 
      this.createChannel(), await this.sendMessage(_80cfb73d199c, _93098113a721);
    }
    const _de27d0e2f573 = new MessageChannel, _f11eefdd8ff9 = [ _de27d0e2f573.port2, ..._93098113a721 || [] ], _cc3b86797832 = new Promise((_80cfb73d199c, _93098113a721) => {
      _de27d0e2f573.port1.onmessage = _de27d0e2f573 => {
        const _f11eefdd8ff9 = _de27d0e2f573.data;
        "\x65\x72\x72\x6f\x72" === _f11eefdd8ff9.type ? _93098113a721(_f11eefdd8ff9.error) : _80cfb73d199c(_f11eefdd8ff9);
      };
    });
    return _bc194d138d2d.call(this.port, {
      message: _80cfb73d199c,
      port: _de27d0e2f573.port2
    }, _f11eefdd8ff9), await _cc3b86797832;
  }
}

class w extends EventTarget {
  protocols;
  url;
  readyState=_c77038910d12.CONNECTING;
  channel;
  constructor(_80cfb73d199c, _93098113a721 = [], _de27d0e2f573, _f11eefdd8ff9) {
    super(), this.protocols = _93098113a721, this.url = _80cfb73d199c.toString(), this.protocols = _93098113a721;
    const s = _80cfb73d199c => {
      this.protocols = _80cfb73d199c, this.readyState = _c77038910d12.OPEN;
      const _93098113a721 = new Event("\x6f\x70\x65\x6e");
      this.dispatchEvent(_93098113a721);
    }, o = async _80cfb73d199c => {
      const _93098113a721 = new MessageEvent("\x6d\x65\x73\x73\x61\x67\x65", {
        data: _80cfb73d199c
      });
      this.dispatchEvent(_93098113a721);
    }, c = (_80cfb73d199c, _93098113a721) => {
      this.readyState = _c77038910d12.CLOSED;
      const _de27d0e2f573 = new CloseEvent("\x63\x6c\x6f\x73\x65", {
        code: _80cfb73d199c,
        reason: _93098113a721
      });
      this.dispatchEvent(_de27d0e2f573);
    }, i = () => {
      this.readyState = _c77038910d12.CLOSED;
      const _80cfb73d199c = new Event("\x65\x72\x72\x6f\x72");
      this.dispatchEvent(_80cfb73d199c);
    };
    this.channel = new MessageChannel, this.channel.port1.onmessage = _80cfb73d199c => {
      "\x6f\x70\x65\x6e" === _80cfb73d199c.data.type ? s(_80cfb73d199c.data.args[0]) : "\x6d\x65\x73\x73\x61\x67\x65" === _80cfb73d199c.data.type ? o(_80cfb73d199c.data.args[0]) : "\x63\x6c\x6f\x73\x65" === _80cfb73d199c.data.type ? c(_80cfb73d199c.data.args[0], _80cfb73d199c.data.args[1]) : "\x65\x72\x72\x6f\x72" === _80cfb73d199c.data.type && i();
    }, _de27d0e2f573.sendMessage({
      type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74",
      websocket: {
        url: _80cfb73d199c.toString(),
        protocols: _93098113a721,
        requestHeaders: _f11eefdd8ff9,
        channel: this.channel.port2
      }
    }, [ this.channel.port2 ]);
  }
  send(..._80cfb73d199c) {
    if (this.readyState === _c77038910d12.CONNECTING) throw new DOMException("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x65\x78\x65\x63\x75\x74\x65\x20\x27\x73\x65\x6e\x64\x27\x20\x6f\x6e\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x53\x74\x69\x6c\x6c\x20\x69\x6e\x20\x43\x4f\x4e\x4e\x45\x43\x54\x49\x4e\x47\x20\x73\x74\x61\x74\x65\x2e");
    let _93098113a721 = _80cfb73d199c[0];
    _93098113a721.buffer && (_93098113a721 = _93098113a721.buffer.slice(_93098113a721.byteOffset, _93098113a721.byteOffset + _93098113a721.byteLength)), 
    _bc194d138d2d.call(this.channel.port1, {
      type: "\x64\x61\x74\x61",
      data: _93098113a721
    }, _93098113a721 instanceof ArrayBuffer ? [ _93098113a721 ] : []);
  }
  close(_80cfb73d199c, _93098113a721) {
    _bc194d138d2d.call(this.channel.port1, {
      type: "\x63\x6c\x6f\x73\x65",
      closeCode: _80cfb73d199c,
      closeReason: _93098113a721
    });
  }
}

function u(_80cfb73d199c, _93098113a721, _de27d0e2f573) {
  console.error(`\x65\x72\x72\x6f\x72\x20\x77\x68\x69\x6c\x65\x20\x70\x72\x6f\x63\x65\x73\x73\x69\x6e\x67\x20\x27${_de27d0e2f573}\x27\x3a\x20`, _93098113a721), _80cfb73d199c.postMessage({
    type: "\x65\x72\x72\x6f\x72",
    error: _93098113a721
  });
}

function f(_80cfb73d199c) {
  for (let _93098113a721 = 0; _93098113a721 < _80cfb73d199c.length; _93098113a721++) {
    const _de27d0e2f573 = _80cfb73d199c[_93098113a721];
    if (!"\x21\x23\x24\x25\x26\x27\x2a\x2b\x2d\x2e\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x5e\x5f\x60\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x7c\x7e".includes(_de27d0e2f573)) return !1;
  }
  return !0;
}

const _ea7ec090053c = [ "\x77\x73\x3a", "\x77\x73\x73\x3a" ], _17ebf82aa84b = [ 101, 204, 205, 304 ], _a9537b091430 = [ 301, 302, 303, 307, 308 ];

class m {
  worker;
  constructor(_80cfb73d199c) {
    this.worker = new p(_80cfb73d199c);
  }
  async getTransport() {
    return (await this.worker.sendMessage({
      type: "\x67\x65\x74"
    })).name;
  }
  async setTransport(_80cfb73d199c, _93098113a721, _de27d0e2f573) {
    await this.setManualTransport(`\x0a\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x7b\x20\x64\x65\x66\x61\x75\x6c\x74\x3a\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x7d\x20\x3d\x20\x61\x77\x61\x69\x74\x20\x69\x6d\x70\x6f\x72\x74\x28\x22${_80cfb73d199c}\x22\x29\x3b\x0a\x09\x09\x09\x72\x65\x74\x75\x72\x6e\x20\x5b\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2c\x20\x22${_80cfb73d199c}\x22\x5d\x3b\x0a\x09\x09`, _93098113a721, _de27d0e2f573);
  }
  async setManualTransport(_80cfb73d199c, _93098113a721, _de27d0e2f573) {
    if ("\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65" === _80cfb73d199c) throw new Error("\x55\x73\x65\x20\x73\x65\x74\x52\x65\x6d\x6f\x74\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2e");
    await this.worker.sendMessage({
      type: "\x73\x65\x74",
      client: {
        function: _80cfb73d199c,
        args: _93098113a721
      }
    }, _de27d0e2f573);
  }
  async setRemoteTransport(_80cfb73d199c, _93098113a721) {
    const _de27d0e2f573 = new MessageChannel;
    _de27d0e2f573.port1.onmessage = async _93098113a721 => {
      const _de27d0e2f573 = _93098113a721.data.port, _f11eefdd8ff9 = _93098113a721.data.message;
      if ("\x66\x65\x74\x63\x68" === _f11eefdd8ff9.type) try {
        _80cfb73d199c.ready || await _80cfb73d199c.init(), await async function(_80cfb73d199c, _93098113a721, _de27d0e2f573) {
          const _f11eefdd8ff9 = await _de27d0e2f573.request(new URL(_80cfb73d199c.fetch.remote), _80cfb73d199c.fetch.method, _80cfb73d199c.fetch.body, _80cfb73d199c.fetch.headers, null);
          if (!d() && _f11eefdd8ff9.body instanceof ReadableStream) {
            const _80cfb73d199c = new Response(_f11eefdd8ff9.body);
            _f11eefdd8ff9.body = await _80cfb73d199c.arrayBuffer();
          }
          _f11eefdd8ff9.body instanceof ReadableStream || _f11eefdd8ff9.body instanceof ArrayBuffer ? _bc194d138d2d.call(_93098113a721, {
            type: "\x66\x65\x74\x63\x68",
            fetch: _f11eefdd8ff9
          }, [ _f11eefdd8ff9.body ]) : _bc194d138d2d.call(_93098113a721, {
            type: "\x66\x65\x74\x63\x68",
            fetch: _f11eefdd8ff9
          });
        }(_f11eefdd8ff9, _de27d0e2f573, _80cfb73d199c);
      } catch (_80cfb73d199c) {
        u(_de27d0e2f573, _80cfb73d199c, "\x66\x65\x74\x63\x68");
      } else if ("\x77\x65\x62\x73\x6f\x63\x6b\x65\x74" === _f11eefdd8ff9.type) try {
        _80cfb73d199c.ready || await _80cfb73d199c.init(), await async function(_80cfb73d199c, _93098113a721, _de27d0e2f573) {
          const [_f11eefdd8ff9, _cc3b86797832] = _de27d0e2f573.connect(new URL(_80cfb73d199c.websocket.url), _80cfb73d199c.websocket.protocols, _80cfb73d199c.websocket.requestHeaders, _93098113a721 => {
            _bc194d138d2d.call(_80cfb73d199c.websocket.channel, {
              type: "\x6f\x70\x65\x6e",
              args: [ _93098113a721 ]
            });
          }, _93098113a721 => {
            _93098113a721 instanceof ArrayBuffer ? _bc194d138d2d.call(_80cfb73d199c.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ _93098113a721 ]
            }, [ _93098113a721 ]) : _bc194d138d2d.call(_80cfb73d199c.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ _93098113a721 ]
            });
          }, (_93098113a721, _de27d0e2f573) => {
            _bc194d138d2d.call(_80cfb73d199c.websocket.channel, {
              type: "\x63\x6c\x6f\x73\x65",
              args: [ _93098113a721, _de27d0e2f573 ]
            });
          }, _93098113a721 => {
            _bc194d138d2d.call(_80cfb73d199c.websocket.channel, {
              type: "\x65\x72\x72\x6f\x72",
              args: [ _93098113a721 ]
            });
          });
          _80cfb73d199c.websocket.channel.onmessage = _80cfb73d199c => {
            "\x64\x61\x74\x61" === _80cfb73d199c.data.type ? _f11eefdd8ff9(_80cfb73d199c.data.data) : "\x63\x6c\x6f\x73\x65" === _80cfb73d199c.data.type && _cc3b86797832(_80cfb73d199c.data.closeCode, _80cfb73d199c.data.closeReason);
          }, _bc194d138d2d.call(_93098113a721, {
            type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74"
          });
        }(_f11eefdd8ff9, _de27d0e2f573, _80cfb73d199c);
      } catch (_80cfb73d199c) {
        u(_de27d0e2f573, _80cfb73d199c, "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74");
      }
    }, await this.worker.sendMessage({
      type: "\x73\x65\x74",
      client: {
        function: "\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65",
        args: [ _de27d0e2f573.port2, _93098113a721 ]
      }
    }, [ _de27d0e2f573.port2 ]);
  }
  getInnerPort() {
    return this.worker.port;
  }
}

class k {
  worker;
  constructor(_80cfb73d199c) {
    this.worker = new p(_80cfb73d199c);
  }
  createWebSocket(_80cfb73d199c, _93098113a721 = [], _de27d0e2f573, _f11eefdd8ff9) {
    try {
      _80cfb73d199c = new URL(_80cfb73d199c);
    } catch (_93098113a721) {
      throw new DOMException(`\x46\x61\x69\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x20\x27${_80cfb73d199c}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
    }
    if (!_ea7ec090053c.includes(_80cfb73d199c.protocol)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x27\x73\x20\x73\x63\x68\x65\x6d\x65\x20\x6d\x75\x73\x74\x20\x62\x65\x20\x65\x69\x74\x68\x65\x72\x20\x27\x77\x73\x27\x20\x6f\x72\x20\x27\x77\x73\x73\x27\x2e\x20\x27${_80cfb73d199c.protocol}\x27\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x6c\x6c\x6f\x77\x65\x64\x2e`);
    Array.isArray(_93098113a721) || (_93098113a721 = [ _93098113a721 ]), _93098113a721 = _93098113a721.map(String);
    for (const _80cfb73d199c of _93098113a721) if (!f(_80cfb73d199c)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x73\x75\x62\x70\x72\x6f\x74\x6f\x63\x6f\x6c\x20\x27${_80cfb73d199c}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
    _f11eefdd8ff9 = _f11eefdd8ff9 || {};
    return new w(_80cfb73d199c, _93098113a721, this.worker, _f11eefdd8ff9);
  }
  async fetch(_80cfb73d199c, _de27d0e2f573) {
    const _f11eefdd8ff9 = new Request(_80cfb73d199c, _de27d0e2f573), _cc3b86797832 = _de27d0e2f573?.headers || _f11eefdd8ff9.headers, _bc194d138d2d = _cc3b86797832 instanceof Headers ? Object.fromEntries(_cc3b86797832) : _cc3b86797832, _c77038910d12 = _f11eefdd8ff9.body;
    let _8ca7233b9ef5 = new URL(_f11eefdd8ff9.url);
    if (_8ca7233b9ef5.protocol.startsWith("\x62\x6c\x6f\x62\x3a")) {
      const _80cfb73d199c = await _93098113a721(_8ca7233b9ef5), _de27d0e2f573 = new Response(_80cfb73d199c.body, _80cfb73d199c);
      return _de27d0e2f573.rawHeaders = Object.fromEntries(_80cfb73d199c.headers), _de27d0e2f573.rawResponse = {
        body: _80cfb73d199c.body,
        headers: Object.fromEntries(_80cfb73d199c.headers),
        status: _80cfb73d199c.status,
        statusText: _80cfb73d199c.statusText
      }, _de27d0e2f573.finalURL = _8ca7233b9ef5.toString(), _de27d0e2f573;
    }
    for (let _80cfb73d199c = 0; ;_80cfb73d199c++) {
      let _93098113a721 = (await this.worker.sendMessage({
        type: "\x66\x65\x74\x63\x68",
        fetch: {
          remote: _8ca7233b9ef5.toString(),
          method: _f11eefdd8ff9.method,
          headers: _bc194d138d2d,
          body: _c77038910d12 || void 0
        }
      }, _c77038910d12 ? [ _c77038910d12 ] : [])).fetch, _cc3b86797832 = new Response(_17ebf82aa84b.includes(_93098113a721.status) ? void 0 : _93098113a721.body, {
        headers: new Headers(_93098113a721.headers),
        status: _93098113a721.status,
        statusText: _93098113a721.statusText
      });
      _cc3b86797832.rawHeaders = _93098113a721.headers, _cc3b86797832.rawResponse = _93098113a721, 
      _cc3b86797832.finalURL = _8ca7233b9ef5.toString();
      const _ea7ec090053c = _de27d0e2f573?.redirect || _f11eefdd8ff9.redirect;
      if (!_a9537b091430.includes(_cc3b86797832.status)) return _cc3b86797832;
      switch (_ea7ec090053c) {
       case "\x66\x6f\x6c\x6c\x6f\x77":
        {
          const _93098113a721 = _cc3b86797832.headers.get("\x6c\x6f\x63\x61\x74\x69\x6f\x6e");
          if (20 > _80cfb73d199c && null !== _93098113a721) {
            _8ca7233b9ef5 = new URL(_93098113a721, _8ca7233b9ef5);
            continue;
          }
          throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");
        }

       case "\x65\x72\x72\x6f\x72":
        throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");

       case "\x6d\x61\x6e\x75\x61\x6c":
        return _cc3b86797832;
      }
    }
  }
}

console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x72\x75\x6e\x6e\x69\x6e\x67\x20\x76\x32\x2e\x31\x2e\x39\x20\x28\x62\x75\x69\x6c\x64\x20\x64\x63\x39\x64\x63\x36\x65\x29");

export { k as BareClient, m as BareMuxConnection, w as BareWebSocket, _c77038910d12 as WebSocketFields, p as WorkerConnection, d as browserSupportsTransferringStreams, k as default, _80cfb73d199c as maxRedirects, f as validProtocol };
