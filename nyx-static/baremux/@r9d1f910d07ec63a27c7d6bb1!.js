const _5a253950d38a = 20, _103a3ce95535 = globalThis.fetch, _2ab9a8774345 = globalThis.SharedWorker, _e765d9ae3ec5 = globalThis.localStorage, _0cc87e4552ad = globalThis.navigator.serviceWorker, _d0a8bd506921 = MessagePort.prototype.postMessage, _4a15b1f1b955 = {
  prototype: {
    send: WebSocket.prototype.send
  },
  CLOSED: WebSocket.CLOSED,
  CLOSING: WebSocket.CLOSING,
  CONNECTING: WebSocket.CONNECTING,
  OPEN: WebSocket.OPEN
};

async function c() {
  const _5a253950d38a = (await self.clients.matchAll({
    type: "\x77\x69\x6e\x64\x6f\x77",
    includeUncontrolled: !0
  })).filter(_5a253950d38a => {
    try {
      const _103a3ce95535 = new URL(_5a253950d38a.url);
      return _103a3ce95535.origin === self.location.origin && !_103a3ce95535.pathname.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x73\x65\x72\x76\x69\x63\x65\x2f") && !_103a3ce95535.pathname.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x7e\x2f\x73\x74\x75\x64\x79\x2f");
    } catch {
      return !1;
    }
  }).map(async _5a253950d38a => {
    const _103a3ce95535 = await function(_5a253950d38a) {
      let _103a3ce95535 = new MessageChannel;
      return new Promise(_2ab9a8774345 => {
        _5a253950d38a.postMessage({
          type: "\x67\x65\x74\x50\x6f\x72\x74",
          port: _103a3ce95535.port2
        }, [ _103a3ce95535.port2 ]), _103a3ce95535.port1.onmessage = _5a253950d38a => {
          _2ab9a8774345(_5a253950d38a.data);
        };
      });
    }(_5a253950d38a);
    return await i(_103a3ce95535), _103a3ce95535;
  }), _103a3ce95535 = Promise.race([ Promise.any(_5a253950d38a), new Promise((_5a253950d38a, _103a3ce95535) => setTimeout(_103a3ce95535, 5e3, new TypeError("\x74\x69\x6d\x65\x6f\x75\x74"))) ]);
  try {
    return await _103a3ce95535;
  } catch (_5a253950d38a) {
    if (_5a253950d38a instanceof AggregateError) throw console.error("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x61\x73\x20\x61\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e"), 
    new Error("\x41\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e", {
      cause: _5a253950d38a
    });
    return console.warn("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x77\x69\x74\x68\x69\x6e\x20\x35\x73\x2c\x20\x72\x65\x74\x72\x79\x69\x6e\x67"), 
    await c();
  }
}

function i(_5a253950d38a) {
  const _103a3ce95535 = new MessageChannel, _2ab9a8774345 = new Promise((_5a253950d38a, _2ab9a8774345) => {
    _103a3ce95535.port1.onmessage = _103a3ce95535 => {
      "\x70\x6f\x6e\x67" === _103a3ce95535.data.type && _5a253950d38a();
    }, setTimeout(_2ab9a8774345, 5e3);
  });
  return _d0a8bd506921.call(_5a253950d38a, {
    message: {
      type: "\x70\x69\x6e\x67"
    },
    port: _103a3ce95535.port2
  }, [ _103a3ce95535.port2 ]), _2ab9a8774345;
}

function l(_5a253950d38a, _103a3ce95535) {
  const _e765d9ae3ec5 = new _2ab9a8774345(_5a253950d38a, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
  return _103a3ce95535 && _0cc87e4552ad.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", _103a3ce95535 => {
    if ("\x67\x65\x74\x50\x6f\x72\x74" === _103a3ce95535.data.type && _103a3ce95535.data.port) {
      console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x72\x65\x63\x69\x65\x76\x65\x64\x20\x72\x65\x71\x75\x65\x73\x74\x20\x66\x6f\x72\x20\x70\x6f\x72\x74\x20\x66\x72\x6f\x6d\x20\x73\x77");
      const _e765d9ae3ec5 = new _2ab9a8774345(_5a253950d38a, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
      _d0a8bd506921.call(_103a3ce95535.data.port, _e765d9ae3ec5.port, [ _e765d9ae3ec5.port ]);
    }
  }), _e765d9ae3ec5.port;
}

let _ce32b1174441 = null;

function d() {
  if (null === _ce32b1174441) {
    const _5a253950d38a = new MessageChannel, _103a3ce95535 = new ReadableStream;
    let _2ab9a8774345;
    try {
      _d0a8bd506921.call(_5a253950d38a.port1, _103a3ce95535, [ _103a3ce95535 ]), _2ab9a8774345 = !0;
    } catch (_5a253950d38a) {
      _2ab9a8774345 = !1;
    }
    return _ce32b1174441 = _2ab9a8774345, _2ab9a8774345;
  }
  return _ce32b1174441;
}

class p {
  channel;
  port;
  workerPath;
  constructor(_5a253950d38a) {
    this.channel = new BroadcastChannel("\x62\x61\x72\x65\x2d\x6d\x75\x78"), _5a253950d38a instanceof MessagePort || _5a253950d38a instanceof Promise ? this.port = _5a253950d38a : this.createChannel(_5a253950d38a, !0);
  }
  createChannel(_5a253950d38a, _103a3ce95535) {
    if (self.clients) this.port = c(), this.channel.onmessage = _5a253950d38a => {
      "\x72\x65\x66\x72\x65\x73\x68\x50\x6f\x72\x74" === _5a253950d38a.data.type && (this.port = c());
    }; else if (_5a253950d38a && SharedWorker) {
      if (!_5a253950d38a.startsWith("\x2f") && !_5a253950d38a.includes("\x3a")) throw new Error("\x49\x6e\x76\x61\x6c\x69\x64\x20\x55\x52\x4c\x2e\x20\x4d\x75\x73\x74\x20\x62\x65\x20\x61\x62\x73\x6f\x6c\x75\x74\x65\x20\x6f\x72\x20\x73\x74\x61\x72\x74\x20\x61\x74\x20\x74\x68\x65\x20\x72\x6f\x6f\x74\x2e");
      this.port = l(_5a253950d38a, _103a3ce95535), console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x73\x65\x74\x74\x69\x6e\x67\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x20\x74\x6f", _5a253950d38a), 
      _e765d9ae3ec5["\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"] = _5a253950d38a;
    } else {
      if (!SharedWorker) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x63\x68\x61\x6e\x6e\x65\x6c\x20\x74\x6f\x20\x74\x68\x65\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x2e");
      {
        const _5a253950d38a = _e765d9ae3ec5["\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"];
        if (console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x67\x6f\x74\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x3a", _5a253950d38a), !_5a253950d38a) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x20\x77\x6f\x72\x6b\x65\x72\x50\x61\x74\x68\x20\x66\x72\x6f\x6d\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x2e");
        this.port = l(_5a253950d38a, _103a3ce95535);
      }
    }
  }
  async sendMessage(_5a253950d38a, _103a3ce95535) {
    this.port instanceof Promise && (this.port = await this.port);
    try {
      await i(this.port);
    } catch {
      return console.warn("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x70\x69\x6e\x67\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x66\x72\x6f\x6d\x20\x74\x68\x65\x20\x77\x6f\x72\x6b\x65\x72\x20\x77\x69\x74\x68\x69\x6e\x20\x35\x73\x2e\x20\x41\x73\x73\x75\x6d\x69\x6e\x67\x20\x70\x6f\x72\x74\x20\x69\x73\x20\x64\x65\x61\x64\x2e"), 
      this.createChannel(), await this.sendMessage(_5a253950d38a, _103a3ce95535);
    }
    const _2ab9a8774345 = new MessageChannel, _e765d9ae3ec5 = [ _2ab9a8774345.port2, ..._103a3ce95535 || [] ], _0cc87e4552ad = new Promise((_5a253950d38a, _103a3ce95535) => {
      _2ab9a8774345.port1.onmessage = _2ab9a8774345 => {
        const _e765d9ae3ec5 = _2ab9a8774345.data;
        "\x65\x72\x72\x6f\x72" === _e765d9ae3ec5.type ? _103a3ce95535(_e765d9ae3ec5.error) : _5a253950d38a(_e765d9ae3ec5);
      };
    });
    return _d0a8bd506921.call(this.port, {
      message: _5a253950d38a,
      port: _2ab9a8774345.port2
    }, _e765d9ae3ec5), await _0cc87e4552ad;
  }
}

class w extends EventTarget {
  protocols;
  url;
  readyState=_4a15b1f1b955.CONNECTING;
  channel;
  constructor(_5a253950d38a, _103a3ce95535 = [], _2ab9a8774345, _e765d9ae3ec5) {
    super(), this.protocols = _103a3ce95535, this.url = _5a253950d38a.toString(), this.protocols = _103a3ce95535;
    const s = _5a253950d38a => {
      this.protocols = _5a253950d38a, this.readyState = _4a15b1f1b955.OPEN;
      const _103a3ce95535 = new Event("\x6f\x70\x65\x6e");
      this.dispatchEvent(_103a3ce95535);
    }, o = async _5a253950d38a => {
      const _103a3ce95535 = new MessageEvent("\x6d\x65\x73\x73\x61\x67\x65", {
        data: _5a253950d38a
      });
      this.dispatchEvent(_103a3ce95535);
    }, c = (_5a253950d38a, _103a3ce95535) => {
      this.readyState = _4a15b1f1b955.CLOSED;
      const _2ab9a8774345 = new CloseEvent("\x63\x6c\x6f\x73\x65", {
        code: _5a253950d38a,
        reason: _103a3ce95535
      });
      this.dispatchEvent(_2ab9a8774345);
    }, i = () => {
      this.readyState = _4a15b1f1b955.CLOSED;
      const _5a253950d38a = new Event("\x65\x72\x72\x6f\x72");
      this.dispatchEvent(_5a253950d38a);
    };
    this.channel = new MessageChannel, this.channel.port1.onmessage = _5a253950d38a => {
      "\x6f\x70\x65\x6e" === _5a253950d38a.data.type ? s(_5a253950d38a.data.args[0]) : "\x6d\x65\x73\x73\x61\x67\x65" === _5a253950d38a.data.type ? o(_5a253950d38a.data.args[0]) : "\x63\x6c\x6f\x73\x65" === _5a253950d38a.data.type ? c(_5a253950d38a.data.args[0], _5a253950d38a.data.args[1]) : "\x65\x72\x72\x6f\x72" === _5a253950d38a.data.type && i();
    }, _2ab9a8774345.sendMessage({
      type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74",
      websocket: {
        url: _5a253950d38a.toString(),
        protocols: _103a3ce95535,
        requestHeaders: _e765d9ae3ec5,
        channel: this.channel.port2
      }
    }, [ this.channel.port2 ]);
  }
  send(..._5a253950d38a) {
    if (this.readyState === _4a15b1f1b955.CONNECTING) throw new DOMException("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x65\x78\x65\x63\x75\x74\x65\x20\x27\x73\x65\x6e\x64\x27\x20\x6f\x6e\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x53\x74\x69\x6c\x6c\x20\x69\x6e\x20\x43\x4f\x4e\x4e\x45\x43\x54\x49\x4e\x47\x20\x73\x74\x61\x74\x65\x2e");
    let _103a3ce95535 = _5a253950d38a[0];
    _103a3ce95535.buffer && (_103a3ce95535 = _103a3ce95535.buffer.slice(_103a3ce95535.byteOffset, _103a3ce95535.byteOffset + _103a3ce95535.byteLength)), 
    _d0a8bd506921.call(this.channel.port1, {
      type: "\x64\x61\x74\x61",
      data: _103a3ce95535
    }, _103a3ce95535 instanceof ArrayBuffer ? [ _103a3ce95535 ] : []);
  }
  close(_5a253950d38a, _103a3ce95535) {
    _d0a8bd506921.call(this.channel.port1, {
      type: "\x63\x6c\x6f\x73\x65",
      closeCode: _5a253950d38a,
      closeReason: _103a3ce95535
    });
  }
}

function u(_5a253950d38a, _103a3ce95535, _2ab9a8774345) {
  console.error(`\x65\x72\x72\x6f\x72\x20\x77\x68\x69\x6c\x65\x20\x70\x72\x6f\x63\x65\x73\x73\x69\x6e\x67\x20\x27${_2ab9a8774345}\x27\x3a\x20`, _103a3ce95535), _5a253950d38a.postMessage({
    type: "\x65\x72\x72\x6f\x72",
    error: _103a3ce95535
  });
}

function f(_5a253950d38a) {
  for (let _103a3ce95535 = 0; _103a3ce95535 < _5a253950d38a.length; _103a3ce95535++) {
    const _2ab9a8774345 = _5a253950d38a[_103a3ce95535];
    if (!"\x21\x23\x24\x25\x26\x27\x2a\x2b\x2d\x2e\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x5e\x5f\x60\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x7c\x7e".includes(_2ab9a8774345)) return !1;
  }
  return !0;
}

const _59ab3079fc42 = [ "\x77\x73\x3a", "\x77\x73\x73\x3a" ], _3f7c6a1cc8c2 = [ 101, 204, 205, 304 ], _f4283efbfb08 = [ 301, 302, 303, 307, 308 ];

class m {
  worker;
  constructor(_5a253950d38a) {
    this.worker = new p(_5a253950d38a);
  }
  async getTransport() {
    return (await this.worker.sendMessage({
      type: "\x67\x65\x74"
    })).name;
  }
  async setTransport(_5a253950d38a, _103a3ce95535, _2ab9a8774345) {
    await this.setManualTransport(`\x0a\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x7b\x20\x64\x65\x66\x61\x75\x6c\x74\x3a\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x7d\x20\x3d\x20\x61\x77\x61\x69\x74\x20\x69\x6d\x70\x6f\x72\x74\x28\x22${_5a253950d38a}\x22\x29\x3b\x0a\x09\x09\x09\x72\x65\x74\x75\x72\x6e\x20\x5b\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2c\x20\x22${_5a253950d38a}\x22\x5d\x3b\x0a\x09\x09`, _103a3ce95535, _2ab9a8774345);
  }
  async setManualTransport(_5a253950d38a, _103a3ce95535, _2ab9a8774345) {
    if ("\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65" === _5a253950d38a) throw new Error("\x55\x73\x65\x20\x73\x65\x74\x52\x65\x6d\x6f\x74\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2e");
    await this.worker.sendMessage({
      type: "\x73\x65\x74",
      client: {
        function: _5a253950d38a,
        args: _103a3ce95535
      }
    }, _2ab9a8774345);
  }
  async setRemoteTransport(_5a253950d38a, _103a3ce95535) {
    const _2ab9a8774345 = new MessageChannel;
    _2ab9a8774345.port1.onmessage = async _103a3ce95535 => {
      const _2ab9a8774345 = _103a3ce95535.data.port, _e765d9ae3ec5 = _103a3ce95535.data.message;
      if ("\x66\x65\x74\x63\x68" === _e765d9ae3ec5.type) try {
        _5a253950d38a.ready || await _5a253950d38a.init(), await async function(_5a253950d38a, _103a3ce95535, _2ab9a8774345) {
          const _e765d9ae3ec5 = await _2ab9a8774345.request(new URL(_5a253950d38a.fetch.remote), _5a253950d38a.fetch.method, _5a253950d38a.fetch.body, _5a253950d38a.fetch.headers, null);
          if (!d() && _e765d9ae3ec5.body instanceof ReadableStream) {
            const _5a253950d38a = new Response(_e765d9ae3ec5.body);
            _e765d9ae3ec5.body = await _5a253950d38a.arrayBuffer();
          }
          _e765d9ae3ec5.body instanceof ReadableStream || _e765d9ae3ec5.body instanceof ArrayBuffer ? _d0a8bd506921.call(_103a3ce95535, {
            type: "\x66\x65\x74\x63\x68",
            fetch: _e765d9ae3ec5
          }, [ _e765d9ae3ec5.body ]) : _d0a8bd506921.call(_103a3ce95535, {
            type: "\x66\x65\x74\x63\x68",
            fetch: _e765d9ae3ec5
          });
        }(_e765d9ae3ec5, _2ab9a8774345, _5a253950d38a);
      } catch (_5a253950d38a) {
        u(_2ab9a8774345, _5a253950d38a, "\x66\x65\x74\x63\x68");
      } else if ("\x77\x65\x62\x73\x6f\x63\x6b\x65\x74" === _e765d9ae3ec5.type) try {
        _5a253950d38a.ready || await _5a253950d38a.init(), await async function(_5a253950d38a, _103a3ce95535, _2ab9a8774345) {
          const [_e765d9ae3ec5, _0cc87e4552ad] = _2ab9a8774345.connect(new URL(_5a253950d38a.websocket.url), _5a253950d38a.websocket.protocols, _5a253950d38a.websocket.requestHeaders, _103a3ce95535 => {
            _d0a8bd506921.call(_5a253950d38a.websocket.channel, {
              type: "\x6f\x70\x65\x6e",
              args: [ _103a3ce95535 ]
            });
          }, _103a3ce95535 => {
            _103a3ce95535 instanceof ArrayBuffer ? _d0a8bd506921.call(_5a253950d38a.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ _103a3ce95535 ]
            }, [ _103a3ce95535 ]) : _d0a8bd506921.call(_5a253950d38a.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ _103a3ce95535 ]
            });
          }, (_103a3ce95535, _2ab9a8774345) => {
            _d0a8bd506921.call(_5a253950d38a.websocket.channel, {
              type: "\x63\x6c\x6f\x73\x65",
              args: [ _103a3ce95535, _2ab9a8774345 ]
            });
          }, _103a3ce95535 => {
            _d0a8bd506921.call(_5a253950d38a.websocket.channel, {
              type: "\x65\x72\x72\x6f\x72",
              args: [ _103a3ce95535 ]
            });
          });
          _5a253950d38a.websocket.channel.onmessage = _5a253950d38a => {
            "\x64\x61\x74\x61" === _5a253950d38a.data.type ? _e765d9ae3ec5(_5a253950d38a.data.data) : "\x63\x6c\x6f\x73\x65" === _5a253950d38a.data.type && _0cc87e4552ad(_5a253950d38a.data.closeCode, _5a253950d38a.data.closeReason);
          }, _d0a8bd506921.call(_103a3ce95535, {
            type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74"
          });
        }(_e765d9ae3ec5, _2ab9a8774345, _5a253950d38a);
      } catch (_5a253950d38a) {
        u(_2ab9a8774345, _5a253950d38a, "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74");
      }
    }, await this.worker.sendMessage({
      type: "\x73\x65\x74",
      client: {
        function: "\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65",
        args: [ _2ab9a8774345.port2, _103a3ce95535 ]
      }
    }, [ _2ab9a8774345.port2 ]);
  }
  getInnerPort() {
    return this.worker.port;
  }
}

class k {
  worker;
  constructor(_5a253950d38a) {
    this.worker = new p(_5a253950d38a);
  }
  createWebSocket(_5a253950d38a, _103a3ce95535 = [], _2ab9a8774345, _e765d9ae3ec5) {
    try {
      _5a253950d38a = new URL(_5a253950d38a);
    } catch (_103a3ce95535) {
      throw new DOMException(`\x46\x61\x69\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x20\x27${_5a253950d38a}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
    }
    if (!_59ab3079fc42.includes(_5a253950d38a.protocol)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x27\x73\x20\x73\x63\x68\x65\x6d\x65\x20\x6d\x75\x73\x74\x20\x62\x65\x20\x65\x69\x74\x68\x65\x72\x20\x27\x77\x73\x27\x20\x6f\x72\x20\x27\x77\x73\x73\x27\x2e\x20\x27${_5a253950d38a.protocol}\x27\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x6c\x6c\x6f\x77\x65\x64\x2e`);
    Array.isArray(_103a3ce95535) || (_103a3ce95535 = [ _103a3ce95535 ]), _103a3ce95535 = _103a3ce95535.map(String);
    for (const _5a253950d38a of _103a3ce95535) if (!f(_5a253950d38a)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x73\x75\x62\x70\x72\x6f\x74\x6f\x63\x6f\x6c\x20\x27${_5a253950d38a}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
    _e765d9ae3ec5 = _e765d9ae3ec5 || {};
    return new w(_5a253950d38a, _103a3ce95535, this.worker, _e765d9ae3ec5);
  }
  async fetch(_5a253950d38a, _2ab9a8774345) {
    const _e765d9ae3ec5 = new Request(_5a253950d38a, _2ab9a8774345), _0cc87e4552ad = _2ab9a8774345?.headers || _e765d9ae3ec5.headers, _d0a8bd506921 = _0cc87e4552ad instanceof Headers ? Object.fromEntries(_0cc87e4552ad) : _0cc87e4552ad, _4a15b1f1b955 = _e765d9ae3ec5.body;
    let _ce32b1174441 = new URL(_e765d9ae3ec5.url);
    if (_ce32b1174441.protocol.startsWith("\x62\x6c\x6f\x62\x3a")) {
      const _5a253950d38a = await _103a3ce95535(_ce32b1174441), _2ab9a8774345 = new Response(_5a253950d38a.body, _5a253950d38a);
      return _2ab9a8774345.rawHeaders = Object.fromEntries(_5a253950d38a.headers), _2ab9a8774345.rawResponse = {
        body: _5a253950d38a.body,
        headers: Object.fromEntries(_5a253950d38a.headers),
        status: _5a253950d38a.status,
        statusText: _5a253950d38a.statusText
      }, _2ab9a8774345.finalURL = _ce32b1174441.toString(), _2ab9a8774345;
    }
    for (let _5a253950d38a = 0; ;_5a253950d38a++) {
      let _103a3ce95535 = (await this.worker.sendMessage({
        type: "\x66\x65\x74\x63\x68",
        fetch: {
          remote: _ce32b1174441.toString(),
          method: _e765d9ae3ec5.method,
          headers: _d0a8bd506921,
          body: _4a15b1f1b955 || void 0
        }
      }, _4a15b1f1b955 ? [ _4a15b1f1b955 ] : [])).fetch, _0cc87e4552ad = new Response(_3f7c6a1cc8c2.includes(_103a3ce95535.status) ? void 0 : _103a3ce95535.body, {
        headers: new Headers(_103a3ce95535.headers),
        status: _103a3ce95535.status,
        statusText: _103a3ce95535.statusText
      });
      _0cc87e4552ad.rawHeaders = _103a3ce95535.headers, _0cc87e4552ad.rawResponse = _103a3ce95535, 
      _0cc87e4552ad.finalURL = _ce32b1174441.toString();
      const _59ab3079fc42 = _2ab9a8774345?.redirect || _e765d9ae3ec5.redirect;
      if (!_f4283efbfb08.includes(_0cc87e4552ad.status)) return _0cc87e4552ad;
      switch (_59ab3079fc42) {
       case "\x66\x6f\x6c\x6c\x6f\x77":
        {
          const _103a3ce95535 = _0cc87e4552ad.headers.get("\x6c\x6f\x63\x61\x74\x69\x6f\x6e");
          if (20 > _5a253950d38a && null !== _103a3ce95535) {
            _ce32b1174441 = new URL(_103a3ce95535, _ce32b1174441);
            continue;
          }
          throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");
        }

       case "\x65\x72\x72\x6f\x72":
        throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");

       case "\x6d\x61\x6e\x75\x61\x6c":
        return _0cc87e4552ad;
      }
    }
  }
}

console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x72\x75\x6e\x6e\x69\x6e\x67\x20\x76\x32\x2e\x31\x2e\x39\x20\x28\x62\x75\x69\x6c\x64\x20\x64\x63\x39\x64\x63\x36\x65\x29");

export { k as BareClient, m as \u{42}\u{61}\u{72}\u{65}\u{4d}\u{75}\u{78}\u{43}\u{6f}\u{6e}\u{6e}\u{65}\u{63}\u{74}\u{69}\u{6f}\u{6e}, w as BareWebSocket, _4a15b1f1b955 as WebSocketFields, p as WorkerConnection, d as \u{62}\u{72}\u{6f}\u{77}\u{73}\u{65}\u{72}\u{53}\u{75}\u{70}\u{70}\u{6f}\u{72}\u{74}\u{73}\u{54}\u{72}\u{61}\u{6e}\u{73}\u{66}\u{65}\u{72}\u{72}\u{69}\u{6e}\u{67}\u{53}\u{74}\u{72}\u{65}\u{61}\u{6d}\u{73}, k as default, _5a253950d38a as maxRedirects, f as validProtocol };
