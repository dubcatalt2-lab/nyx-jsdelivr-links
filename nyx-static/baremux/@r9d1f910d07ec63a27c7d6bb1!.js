const _2af3ccbff552 = 20, _718d57a72662 = globalThis.fetch, _3758158ca3f9 = globalThis.SharedWorker, _6bdd0583c290 = globalThis.localStorage, _8577e6a150a2 = globalThis.navigator.serviceWorker, _e33f112ddbf3 = MessagePort.prototype.postMessage, _64fd4f2f2401 = {
  prototype: {
    send: WebSocket.prototype.send
  },
  CLOSED: WebSocket.CLOSED,
  CLOSING: WebSocket.CLOSING,
  CONNECTING: WebSocket.CONNECTING,
  OPEN: WebSocket.OPEN
};

async function c() {
  const _2af3ccbff552 = (await self.clients.matchAll({
    type: "\x77\x69\x6e\x64\x6f\x77",
    includeUncontrolled: !0
  })).filter(_2af3ccbff552 => {
    try {
      const _718d57a72662 = new URL(_2af3ccbff552.url);
      return _718d57a72662.origin === self.location.origin && !_718d57a72662.pathname.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x73\x65\x72\x76\x69\x63\x65\x2f") && !_718d57a72662.pathname.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x7e\x2f\x73\x74\x75\x64\x79\x2f");
    } catch {
      return !1;
    }
  }).map(async _2af3ccbff552 => {
    const _718d57a72662 = await function(_2af3ccbff552) {
      let _718d57a72662 = new MessageChannel;
      return new Promise(_3758158ca3f9 => {
        _2af3ccbff552.postMessage({
          type: "\x67\x65\x74\x50\x6f\x72\x74",
          port: _718d57a72662.port2
        }, [ _718d57a72662.port2 ]), _718d57a72662.port1.onmessage = _2af3ccbff552 => {
          _3758158ca3f9(_2af3ccbff552.data);
        };
      });
    }(_2af3ccbff552);
    return await i(_718d57a72662), _718d57a72662;
  }), _718d57a72662 = Promise.race([ Promise.any(_2af3ccbff552), new Promise((_2af3ccbff552, _718d57a72662) => setTimeout(_718d57a72662, 5e3, new TypeError("\x74\x69\x6d\x65\x6f\x75\x74"))) ]);
  try {
    return await _718d57a72662;
  } catch (_2af3ccbff552) {
    if (_2af3ccbff552 instanceof AggregateError) throw console.error("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x61\x73\x20\x61\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e"), 
    new Error("\x41\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e", {
      cause: _2af3ccbff552
    });
    return console.warn("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x77\x69\x74\x68\x69\x6e\x20\x35\x73\x2c\x20\x72\x65\x74\x72\x79\x69\x6e\x67"), 
    await c();
  }
}

function i(_2af3ccbff552) {
  const _718d57a72662 = new MessageChannel, _3758158ca3f9 = new Promise((_2af3ccbff552, _3758158ca3f9) => {
    _718d57a72662.port1.onmessage = _718d57a72662 => {
      "\x70\x6f\x6e\x67" === _718d57a72662.data.type && _2af3ccbff552();
    }, setTimeout(_3758158ca3f9, 5e3);
  });
  return _e33f112ddbf3.call(_2af3ccbff552, {
    message: {
      type: "\x70\x69\x6e\x67"
    },
    port: _718d57a72662.port2
  }, [ _718d57a72662.port2 ]), _3758158ca3f9;
}

function l(_2af3ccbff552, _718d57a72662) {
  const _6bdd0583c290 = new _3758158ca3f9(_2af3ccbff552, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
  return _718d57a72662 && _8577e6a150a2.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", _718d57a72662 => {
    if ("\x67\x65\x74\x50\x6f\x72\x74" === _718d57a72662.data.type && _718d57a72662.data.port) {
      console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x72\x65\x63\x69\x65\x76\x65\x64\x20\x72\x65\x71\x75\x65\x73\x74\x20\x66\x6f\x72\x20\x70\x6f\x72\x74\x20\x66\x72\x6f\x6d\x20\x73\x77");
      const _6bdd0583c290 = new _3758158ca3f9(_2af3ccbff552, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
      _e33f112ddbf3.call(_718d57a72662.data.port, _6bdd0583c290.port, [ _6bdd0583c290.port ]);
    }
  }), _6bdd0583c290.port;
}

let _4af3b2e10e4b = null;

function d() {
  if (null === _4af3b2e10e4b) {
    const _2af3ccbff552 = new MessageChannel, _718d57a72662 = new ReadableStream;
    let _3758158ca3f9;
    try {
      _e33f112ddbf3.call(_2af3ccbff552.port1, _718d57a72662, [ _718d57a72662 ]), _3758158ca3f9 = !0;
    } catch (_2af3ccbff552) {
      _3758158ca3f9 = !1;
    }
    return _4af3b2e10e4b = _3758158ca3f9, _3758158ca3f9;
  }
  return _4af3b2e10e4b;
}

class p {
  channel;
  port;
  workerPath;
  constructor(_2af3ccbff552) {
    this.channel = new BroadcastChannel("\x62\x61\x72\x65\x2d\x6d\x75\x78"), _2af3ccbff552 instanceof MessagePort || _2af3ccbff552 instanceof Promise ? this.port = _2af3ccbff552 : this.createChannel(_2af3ccbff552, !0);
  }
  createChannel(_2af3ccbff552, _718d57a72662) {
    if (self.clients) this.port = c(), this.channel.onmessage = _2af3ccbff552 => {
      "\x72\x65\x66\x72\x65\x73\x68\x50\x6f\x72\x74" === _2af3ccbff552.data.type && (this.port = c());
    }; else if (_2af3ccbff552 && SharedWorker) {
      if (!_2af3ccbff552.startsWith("\x2f") && !_2af3ccbff552.includes("\x3a")) throw new Error("\x49\x6e\x76\x61\x6c\x69\x64\x20\x55\x52\x4c\x2e\x20\x4d\x75\x73\x74\x20\x62\x65\x20\x61\x62\x73\x6f\x6c\x75\x74\x65\x20\x6f\x72\x20\x73\x74\x61\x72\x74\x20\x61\x74\x20\x74\x68\x65\x20\x72\x6f\x6f\x74\x2e");
      this.port = l(_2af3ccbff552, _718d57a72662), console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x73\x65\x74\x74\x69\x6e\x67\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x20\x74\x6f", _2af3ccbff552), 
      _6bdd0583c290["\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"] = _2af3ccbff552;
    } else {
      if (!SharedWorker) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x63\x68\x61\x6e\x6e\x65\x6c\x20\x74\x6f\x20\x74\x68\x65\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x2e");
      {
        const _2af3ccbff552 = _6bdd0583c290["\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"];
        if (console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x67\x6f\x74\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x3a", _2af3ccbff552), !_2af3ccbff552) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x20\x77\x6f\x72\x6b\x65\x72\x50\x61\x74\x68\x20\x66\x72\x6f\x6d\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x2e");
        this.port = l(_2af3ccbff552, _718d57a72662);
      }
    }
  }
  async sendMessage(_2af3ccbff552, _718d57a72662) {
    this.port instanceof Promise && (this.port = await this.port);
    try {
      await i(this.port);
    } catch {
      return console.warn("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x70\x69\x6e\x67\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x66\x72\x6f\x6d\x20\x74\x68\x65\x20\x77\x6f\x72\x6b\x65\x72\x20\x77\x69\x74\x68\x69\x6e\x20\x35\x73\x2e\x20\x41\x73\x73\x75\x6d\x69\x6e\x67\x20\x70\x6f\x72\x74\x20\x69\x73\x20\x64\x65\x61\x64\x2e"), 
      this.createChannel(), await this.sendMessage(_2af3ccbff552, _718d57a72662);
    }
    const _3758158ca3f9 = new MessageChannel, _6bdd0583c290 = [ _3758158ca3f9.port2, ..._718d57a72662 || [] ], _8577e6a150a2 = new Promise((_2af3ccbff552, _718d57a72662) => {
      _3758158ca3f9.port1.onmessage = _3758158ca3f9 => {
        const _6bdd0583c290 = _3758158ca3f9.data;
        "\x65\x72\x72\x6f\x72" === _6bdd0583c290.type ? _718d57a72662(_6bdd0583c290.error) : _2af3ccbff552(_6bdd0583c290);
      };
    });
    return _e33f112ddbf3.call(this.port, {
      message: _2af3ccbff552,
      port: _3758158ca3f9.port2
    }, _6bdd0583c290), await _8577e6a150a2;
  }
}

class w extends EventTarget {
  protocols;
  url;
  readyState=_64fd4f2f2401.CONNECTING;
  channel;
  constructor(_2af3ccbff552, _718d57a72662 = [], _3758158ca3f9, _6bdd0583c290) {
    super(), this.protocols = _718d57a72662, this.url = _2af3ccbff552.toString(), this.protocols = _718d57a72662;
    const s = _2af3ccbff552 => {
      this.protocols = _2af3ccbff552, this.readyState = _64fd4f2f2401.OPEN;
      const _718d57a72662 = new Event("\x6f\x70\x65\x6e");
      this.dispatchEvent(_718d57a72662);
    }, o = async _2af3ccbff552 => {
      const _718d57a72662 = new MessageEvent("\x6d\x65\x73\x73\x61\x67\x65", {
        data: _2af3ccbff552
      });
      this.dispatchEvent(_718d57a72662);
    }, c = (_2af3ccbff552, _718d57a72662) => {
      this.readyState = _64fd4f2f2401.CLOSED;
      const _3758158ca3f9 = new CloseEvent("\x63\x6c\x6f\x73\x65", {
        code: _2af3ccbff552,
        reason: _718d57a72662
      });
      this.dispatchEvent(_3758158ca3f9);
    }, i = () => {
      this.readyState = _64fd4f2f2401.CLOSED;
      const _2af3ccbff552 = new Event("\x65\x72\x72\x6f\x72");
      this.dispatchEvent(_2af3ccbff552);
    };
    this.channel = new MessageChannel, this.channel.port1.onmessage = _2af3ccbff552 => {
      "\x6f\x70\x65\x6e" === _2af3ccbff552.data.type ? s(_2af3ccbff552.data.args[0]) : "\x6d\x65\x73\x73\x61\x67\x65" === _2af3ccbff552.data.type ? o(_2af3ccbff552.data.args[0]) : "\x63\x6c\x6f\x73\x65" === _2af3ccbff552.data.type ? c(_2af3ccbff552.data.args[0], _2af3ccbff552.data.args[1]) : "\x65\x72\x72\x6f\x72" === _2af3ccbff552.data.type && i();
    }, _3758158ca3f9.sendMessage({
      type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74",
      websocket: {
        url: _2af3ccbff552.toString(),
        protocols: _718d57a72662,
        requestHeaders: _6bdd0583c290,
        channel: this.channel.port2
      }
    }, [ this.channel.port2 ]);
  }
  send(..._2af3ccbff552) {
    if (this.readyState === _64fd4f2f2401.CONNECTING) throw new DOMException("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x65\x78\x65\x63\x75\x74\x65\x20\x27\x73\x65\x6e\x64\x27\x20\x6f\x6e\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x53\x74\x69\x6c\x6c\x20\x69\x6e\x20\x43\x4f\x4e\x4e\x45\x43\x54\x49\x4e\x47\x20\x73\x74\x61\x74\x65\x2e");
    let _718d57a72662 = _2af3ccbff552[0];
    _718d57a72662.buffer && (_718d57a72662 = _718d57a72662.buffer.slice(_718d57a72662.byteOffset, _718d57a72662.byteOffset + _718d57a72662.byteLength)), 
    _e33f112ddbf3.call(this.channel.port1, {
      type: "\x64\x61\x74\x61",
      data: _718d57a72662
    }, _718d57a72662 instanceof ArrayBuffer ? [ _718d57a72662 ] : []);
  }
  close(_2af3ccbff552, _718d57a72662) {
    _e33f112ddbf3.call(this.channel.port1, {
      type: "\x63\x6c\x6f\x73\x65",
      closeCode: _2af3ccbff552,
      closeReason: _718d57a72662
    });
  }
}

function u(_2af3ccbff552, _718d57a72662, _3758158ca3f9) {
  console.error(`\x65\x72\x72\x6f\x72\x20\x77\x68\x69\x6c\x65\x20\x70\x72\x6f\x63\x65\x73\x73\x69\x6e\x67\x20\x27${_3758158ca3f9}\x27\x3a\x20`, _718d57a72662), _2af3ccbff552.postMessage({
    type: "\x65\x72\x72\x6f\x72",
    error: _718d57a72662
  });
}

function f(_2af3ccbff552) {
  for (let _718d57a72662 = 0; _718d57a72662 < _2af3ccbff552.length; _718d57a72662++) {
    const _3758158ca3f9 = _2af3ccbff552[_718d57a72662];
    if (!"\x21\x23\x24\x25\x26\x27\x2a\x2b\x2d\x2e\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x5e\x5f\x60\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x7c\x7e".includes(_3758158ca3f9)) return !1;
  }
  return !0;
}

const _4a0c14fd7c7a = [ "\x77\x73\x3a", "\x77\x73\x73\x3a" ], _15ec2518df83 = [ 101, 204, 205, 304 ], _effaa7868f58 = [ 301, 302, 303, 307, 308 ];

class m {
  worker;
  constructor(_2af3ccbff552) {
    this.worker = new p(_2af3ccbff552);
  }
  async getTransport() {
    return (await this.worker.sendMessage({
      type: "\x67\x65\x74"
    })).name;
  }
  async setTransport(_2af3ccbff552, _718d57a72662, _3758158ca3f9) {
    await this.setManualTransport(`\x0a\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x7b\x20\x64\x65\x66\x61\x75\x6c\x74\x3a\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x7d\x20\x3d\x20\x61\x77\x61\x69\x74\x20\x69\x6d\x70\x6f\x72\x74\x28\x22${_2af3ccbff552}\x22\x29\x3b\x0a\x09\x09\x09\x72\x65\x74\x75\x72\x6e\x20\x5b\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2c\x20\x22${_2af3ccbff552}\x22\x5d\x3b\x0a\x09\x09`, _718d57a72662, _3758158ca3f9);
  }
  async setManualTransport(_2af3ccbff552, _718d57a72662, _3758158ca3f9) {
    if ("\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65" === _2af3ccbff552) throw new Error("\x55\x73\x65\x20\x73\x65\x74\x52\x65\x6d\x6f\x74\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2e");
    await this.worker.sendMessage({
      type: "\x73\x65\x74",
      client: {
        function: _2af3ccbff552,
        args: _718d57a72662
      }
    }, _3758158ca3f9);
  }
  async setRemoteTransport(_2af3ccbff552, _718d57a72662) {
    const _3758158ca3f9 = new MessageChannel;
    _3758158ca3f9.port1.onmessage = async _718d57a72662 => {
      const _3758158ca3f9 = _718d57a72662.data.port, _6bdd0583c290 = _718d57a72662.data.message;
      if ("\x66\x65\x74\x63\x68" === _6bdd0583c290.type) try {
        _2af3ccbff552.ready || await _2af3ccbff552.init(), await async function(_2af3ccbff552, _718d57a72662, _3758158ca3f9) {
          const _6bdd0583c290 = await _3758158ca3f9.request(new URL(_2af3ccbff552.fetch.remote), _2af3ccbff552.fetch.method, _2af3ccbff552.fetch.body, _2af3ccbff552.fetch.headers, null);
          if (!d() && _6bdd0583c290.body instanceof ReadableStream) {
            const _2af3ccbff552 = new Response(_6bdd0583c290.body);
            _6bdd0583c290.body = await _2af3ccbff552.arrayBuffer();
          }
          _6bdd0583c290.body instanceof ReadableStream || _6bdd0583c290.body instanceof ArrayBuffer ? _e33f112ddbf3.call(_718d57a72662, {
            type: "\x66\x65\x74\x63\x68",
            fetch: _6bdd0583c290
          }, [ _6bdd0583c290.body ]) : _e33f112ddbf3.call(_718d57a72662, {
            type: "\x66\x65\x74\x63\x68",
            fetch: _6bdd0583c290
          });
        }(_6bdd0583c290, _3758158ca3f9, _2af3ccbff552);
      } catch (_2af3ccbff552) {
        u(_3758158ca3f9, _2af3ccbff552, "\x66\x65\x74\x63\x68");
      } else if ("\x77\x65\x62\x73\x6f\x63\x6b\x65\x74" === _6bdd0583c290.type) try {
        _2af3ccbff552.ready || await _2af3ccbff552.init(), await async function(_2af3ccbff552, _718d57a72662, _3758158ca3f9) {
          const [_6bdd0583c290, _8577e6a150a2] = _3758158ca3f9.connect(new URL(_2af3ccbff552.websocket.url), _2af3ccbff552.websocket.protocols, _2af3ccbff552.websocket.requestHeaders, _718d57a72662 => {
            _e33f112ddbf3.call(_2af3ccbff552.websocket.channel, {
              type: "\x6f\x70\x65\x6e",
              args: [ _718d57a72662 ]
            });
          }, _718d57a72662 => {
            _718d57a72662 instanceof ArrayBuffer ? _e33f112ddbf3.call(_2af3ccbff552.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ _718d57a72662 ]
            }, [ _718d57a72662 ]) : _e33f112ddbf3.call(_2af3ccbff552.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ _718d57a72662 ]
            });
          }, (_718d57a72662, _3758158ca3f9) => {
            _e33f112ddbf3.call(_2af3ccbff552.websocket.channel, {
              type: "\x63\x6c\x6f\x73\x65",
              args: [ _718d57a72662, _3758158ca3f9 ]
            });
          }, _718d57a72662 => {
            _e33f112ddbf3.call(_2af3ccbff552.websocket.channel, {
              type: "\x65\x72\x72\x6f\x72",
              args: [ _718d57a72662 ]
            });
          });
          _2af3ccbff552.websocket.channel.onmessage = _2af3ccbff552 => {
            "\x64\x61\x74\x61" === _2af3ccbff552.data.type ? _6bdd0583c290(_2af3ccbff552.data.data) : "\x63\x6c\x6f\x73\x65" === _2af3ccbff552.data.type && _8577e6a150a2(_2af3ccbff552.data.closeCode, _2af3ccbff552.data.closeReason);
          }, _e33f112ddbf3.call(_718d57a72662, {
            type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74"
          });
        }(_6bdd0583c290, _3758158ca3f9, _2af3ccbff552);
      } catch (_2af3ccbff552) {
        u(_3758158ca3f9, _2af3ccbff552, "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74");
      }
    }, await this.worker.sendMessage({
      type: "\x73\x65\x74",
      client: {
        function: "\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65",
        args: [ _3758158ca3f9.port2, _718d57a72662 ]
      }
    }, [ _3758158ca3f9.port2 ]);
  }
  getInnerPort() {
    return this.worker.port;
  }
}

class k {
  worker;
  constructor(_2af3ccbff552) {
    this.worker = new p(_2af3ccbff552);
  }
  createWebSocket(_2af3ccbff552, _718d57a72662 = [], _3758158ca3f9, _6bdd0583c290) {
    try {
      _2af3ccbff552 = new URL(_2af3ccbff552);
    } catch (_718d57a72662) {
      throw new DOMException(`\x46\x61\x69\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x20\x27${_2af3ccbff552}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
    }
    if (!_4a0c14fd7c7a.includes(_2af3ccbff552.protocol)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x27\x73\x20\x73\x63\x68\x65\x6d\x65\x20\x6d\x75\x73\x74\x20\x62\x65\x20\x65\x69\x74\x68\x65\x72\x20\x27\x77\x73\x27\x20\x6f\x72\x20\x27\x77\x73\x73\x27\x2e\x20\x27${_2af3ccbff552.protocol}\x27\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x6c\x6c\x6f\x77\x65\x64\x2e`);
    Array.isArray(_718d57a72662) || (_718d57a72662 = [ _718d57a72662 ]), _718d57a72662 = _718d57a72662.map(String);
    for (const _2af3ccbff552 of _718d57a72662) if (!f(_2af3ccbff552)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x73\x75\x62\x70\x72\x6f\x74\x6f\x63\x6f\x6c\x20\x27${_2af3ccbff552}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
    _6bdd0583c290 = _6bdd0583c290 || {};
    return new w(_2af3ccbff552, _718d57a72662, this.worker, _6bdd0583c290);
  }
  async fetch(_2af3ccbff552, _3758158ca3f9) {
    const _6bdd0583c290 = new Request(_2af3ccbff552, _3758158ca3f9), _8577e6a150a2 = _3758158ca3f9?.headers || _6bdd0583c290.headers, _e33f112ddbf3 = _8577e6a150a2 instanceof Headers ? Object.fromEntries(_8577e6a150a2) : _8577e6a150a2, _64fd4f2f2401 = _6bdd0583c290.body;
    let _4af3b2e10e4b = new URL(_6bdd0583c290.url);
    if (_4af3b2e10e4b.protocol.startsWith("\x62\x6c\x6f\x62\x3a")) {
      const _2af3ccbff552 = await _718d57a72662(_4af3b2e10e4b), _3758158ca3f9 = new Response(_2af3ccbff552.body, _2af3ccbff552);
      return _3758158ca3f9.rawHeaders = Object.fromEntries(_2af3ccbff552.headers), _3758158ca3f9.rawResponse = {
        body: _2af3ccbff552.body,
        headers: Object.fromEntries(_2af3ccbff552.headers),
        status: _2af3ccbff552.status,
        statusText: _2af3ccbff552.statusText
      }, _3758158ca3f9.finalURL = _4af3b2e10e4b.toString(), _3758158ca3f9;
    }
    for (let _2af3ccbff552 = 0; ;_2af3ccbff552++) {
      let _718d57a72662 = (await this.worker.sendMessage({
        type: "\x66\x65\x74\x63\x68",
        fetch: {
          remote: _4af3b2e10e4b.toString(),
          method: _6bdd0583c290.method,
          headers: _e33f112ddbf3,
          body: _64fd4f2f2401 || void 0
        }
      }, _64fd4f2f2401 ? [ _64fd4f2f2401 ] : [])).fetch, _8577e6a150a2 = new Response(_15ec2518df83.includes(_718d57a72662.status) ? void 0 : _718d57a72662.body, {
        headers: new Headers(_718d57a72662.headers),
        status: _718d57a72662.status,
        statusText: _718d57a72662.statusText
      });
      _8577e6a150a2.rawHeaders = _718d57a72662.headers, _8577e6a150a2.rawResponse = _718d57a72662, 
      _8577e6a150a2.finalURL = _4af3b2e10e4b.toString();
      const _4a0c14fd7c7a = _3758158ca3f9?.redirect || _6bdd0583c290.redirect;
      if (!_effaa7868f58.includes(_8577e6a150a2.status)) return _8577e6a150a2;
      switch (_4a0c14fd7c7a) {
       case "\x66\x6f\x6c\x6c\x6f\x77":
        {
          const _718d57a72662 = _8577e6a150a2.headers.get("\x6c\x6f\x63\x61\x74\x69\x6f\x6e");
          if (20 > _2af3ccbff552 && null !== _718d57a72662) {
            _4af3b2e10e4b = new URL(_718d57a72662, _4af3b2e10e4b);
            continue;
          }
          throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");
        }

       case "\x65\x72\x72\x6f\x72":
        throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");

       case "\x6d\x61\x6e\x75\x61\x6c":
        return _8577e6a150a2;
      }
    }
  }
}

console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x72\x75\x6e\x6e\x69\x6e\x67\x20\x76\x32\x2e\x31\x2e\x39\x20\x28\x62\x75\x69\x6c\x64\x20\x64\x63\x39\x64\x63\x36\x65\x29");

export { k as BareClient, m as \u{42}\u{61}\u{72}\u{65}\u{4d}\u{75}\u{78}\u{43}\u{6f}\u{6e}\u{6e}\u{65}\u{63}\u{74}\u{69}\u{6f}\u{6e}, w as BareWebSocket, _64fd4f2f2401 as WebSocketFields, p as WorkerConnection, d as \u{62}\u{72}\u{6f}\u{77}\u{73}\u{65}\u{72}\u{53}\u{75}\u{70}\u{70}\u{6f}\u{72}\u{74}\u{73}\u{54}\u{72}\u{61}\u{6e}\u{73}\u{66}\u{65}\u{72}\u{72}\u{69}\u{6e}\u{67}\u{53}\u{74}\u{72}\u{65}\u{61}\u{6d}\u{73}, k as default, _2af3ccbff552 as maxRedirects, f as validProtocol };
