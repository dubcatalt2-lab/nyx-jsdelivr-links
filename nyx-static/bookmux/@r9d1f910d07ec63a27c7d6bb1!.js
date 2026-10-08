const _4d8f833e3700 = 20, _4e1583a24584 = globalThis.fetch, _a6036e938986 = globalThis.SharedWorker, _e55b1f48cc1c = globalThis.localStorage, _ef6cddf589bf = globalThis.navigator.serviceWorker, _d8afb5ee7f7f = MessagePort.prototype.postMessage, _360cf04d289d = {
  prototype: {
    send: WebSocket.prototype.send
  },
  CLOSED: WebSocket.CLOSED,
  CLOSING: WebSocket.CLOSING,
  CONNECTING: WebSocket.CONNECTING,
  OPEN: WebSocket.OPEN
};

async function c() {
  const _4d8f833e3700 = (await self.clients.matchAll({
    type: "\x77\x69\x6e\x64\x6f\x77",
    includeUncontrolled: !0
  })).filter(_4d8f833e3700 => {
    try {
      const _4e1583a24584 = new URL(_4d8f833e3700.url);
      return _4e1583a24584.origin === self.location.origin && !_4e1583a24584.pathname.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x73\x65\x72\x76\x69\x63\x65\x2f") && !_4e1583a24584.pathname.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x7e\x2f\x73\x74\x75\x64\x79\x2f");
    } catch {
      return !1;
    }
  }).map(async _4d8f833e3700 => {
    const _4e1583a24584 = await function(_4d8f833e3700) {
      let _4e1583a24584 = new MessageChannel;
      return new Promise(_a6036e938986 => {
        _4d8f833e3700.postMessage({
          type: "\x67\x65\x74\x50\x6f\x72\x74",
          port: _4e1583a24584.port2
        }, [ _4e1583a24584.port2 ]), _4e1583a24584.port1.onmessage = _4d8f833e3700 => {
          _a6036e938986(_4d8f833e3700.data);
        };
      });
    }(_4d8f833e3700);
    return await i(_4e1583a24584), _4e1583a24584;
  }), _4e1583a24584 = Promise.race([ Promise.any(_4d8f833e3700), new Promise((_4d8f833e3700, _4e1583a24584) => setTimeout(_4e1583a24584, 5e3, new TypeError("\x74\x69\x6d\x65\x6f\x75\x74"))) ]);
  try {
    return await _4e1583a24584;
  } catch (_4d8f833e3700) {
    if (_4d8f833e3700 instanceof AggregateError) throw console.error("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x61\x73\x20\x61\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e"), 
    new Error("\x41\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e", {
      cause: _4d8f833e3700
    });
    return console.warn("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x77\x69\x74\x68\x69\x6e\x20\x35\x73\x2c\x20\x72\x65\x74\x72\x79\x69\x6e\x67"), 
    await c();
  }
}

function i(_4d8f833e3700) {
  const _4e1583a24584 = new MessageChannel, _a6036e938986 = new Promise((_4d8f833e3700, _a6036e938986) => {
    _4e1583a24584.port1.onmessage = _4e1583a24584 => {
      "\x70\x6f\x6e\x67" === _4e1583a24584.data.type && _4d8f833e3700();
    }, setTimeout(_a6036e938986, 5e3);
  });
  return _d8afb5ee7f7f.call(_4d8f833e3700, {
    message: {
      type: "\x70\x69\x6e\x67"
    },
    port: _4e1583a24584.port2
  }, [ _4e1583a24584.port2 ]), _a6036e938986;
}

function l(_4d8f833e3700, _4e1583a24584) {
  const _e55b1f48cc1c = new _a6036e938986(_4d8f833e3700, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
  return _4e1583a24584 && _ef6cddf589bf.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", _4e1583a24584 => {
    if ("\x67\x65\x74\x50\x6f\x72\x74" === _4e1583a24584.data.type && _4e1583a24584.data.port) {
      console.debug("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x72\x65\x63\x69\x65\x76\x65\x64\x20\x72\x65\x71\x75\x65\x73\x74\x20\x66\x6f\x72\x20\x70\x6f\x72\x74\x20\x66\x72\x6f\x6d\x20\x73\x77");
      const _e55b1f48cc1c = new _a6036e938986(_4d8f833e3700, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
      _d8afb5ee7f7f.call(_4e1583a24584.data.port, _e55b1f48cc1c.port, [ _e55b1f48cc1c.port ]);
    }
  }), _e55b1f48cc1c.port;
}

let _e910180e7bb9 = null;

function d() {
  if (null === _e910180e7bb9) {
    const _4d8f833e3700 = new MessageChannel, _4e1583a24584 = new ReadableStream;
    let _a6036e938986;
    try {
      _d8afb5ee7f7f.call(_4d8f833e3700.port1, _4e1583a24584, [ _4e1583a24584 ]), _a6036e938986 = !0;
    } catch (_4d8f833e3700) {
      _a6036e938986 = !1;
    }
    return _e910180e7bb9 = _a6036e938986, _a6036e938986;
  }
  return _e910180e7bb9;
}

class p {
  channel;
  port;
  workerPath;
  constructor(_4d8f833e3700) {
    this.channel = new BroadcastChannel("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78"), _4d8f833e3700 instanceof MessagePort || _4d8f833e3700 instanceof Promise ? this.port = _4d8f833e3700 : this.createChannel(_4d8f833e3700, !0);
  }
  createChannel(_4d8f833e3700, _4e1583a24584) {
    if (self.clients) this.port = c(), this.channel.onmessage = _4d8f833e3700 => {
      "\x72\x65\x66\x72\x65\x73\x68\x50\x6f\x72\x74" === _4d8f833e3700.data.type && (this.port = c());
    }; else if (_4d8f833e3700 && SharedWorker) {
      if (!_4d8f833e3700.startsWith("\x2f") && !_4d8f833e3700.includes("\x3a")) throw new Error("\x49\x6e\x76\x61\x6c\x69\x64\x20\x55\x52\x4c\x2e\x20\x4d\x75\x73\x74\x20\x62\x65\x20\x61\x62\x73\x6f\x6c\x75\x74\x65\x20\x6f\x72\x20\x73\x74\x61\x72\x74\x20\x61\x74\x20\x74\x68\x65\x20\x72\x6f\x6f\x74\x2e");
      this.port = l(_4d8f833e3700, _4e1583a24584), console.debug("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x73\x65\x74\x74\x69\x6e\x67\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x20\x74\x6f", _4d8f833e3700), 
      _e55b1f48cc1c["\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"] = _4d8f833e3700;
    } else {
      if (!SharedWorker) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x63\x68\x61\x6e\x6e\x65\x6c\x20\x74\x6f\x20\x74\x68\x65\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x2e");
      {
        const _4d8f833e3700 = _e55b1f48cc1c["\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"];
        if (console.debug("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x67\x6f\x74\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x3a", _4d8f833e3700), !_4d8f833e3700) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x20\x77\x6f\x72\x6b\x65\x72\x50\x61\x74\x68\x20\x66\x72\x6f\x6d\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x2e");
        this.port = l(_4d8f833e3700, _4e1583a24584);
      }
    }
  }
  async sendMessage(_4d8f833e3700, _4e1583a24584) {
    this.port instanceof Promise && (this.port = await this.port);
    try {
      await i(this.port);
    } catch {
      return console.warn("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x70\x69\x6e\x67\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x66\x72\x6f\x6d\x20\x74\x68\x65\x20\x77\x6f\x72\x6b\x65\x72\x20\x77\x69\x74\x68\x69\x6e\x20\x35\x73\x2e\x20\x41\x73\x73\x75\x6d\x69\x6e\x67\x20\x70\x6f\x72\x74\x20\x69\x73\x20\x64\x65\x61\x64\x2e"), 
      this.createChannel(), await this.sendMessage(_4d8f833e3700, _4e1583a24584);
    }
    const _a6036e938986 = new MessageChannel, _e55b1f48cc1c = [ _a6036e938986.port2, ..._4e1583a24584 || [] ], _ef6cddf589bf = new Promise((_4d8f833e3700, _4e1583a24584) => {
      _a6036e938986.port1.onmessage = _a6036e938986 => {
        const _e55b1f48cc1c = _a6036e938986.data;
        "\x65\x72\x72\x6f\x72" === _e55b1f48cc1c.type ? _4e1583a24584(_e55b1f48cc1c.error) : _4d8f833e3700(_e55b1f48cc1c);
      };
    });
    return _d8afb5ee7f7f.call(this.port, {
      message: _4d8f833e3700,
      port: _a6036e938986.port2
    }, _e55b1f48cc1c), await _ef6cddf589bf;
  }
}

class w extends EventTarget {
  protocols;
  url;
  readyState=_360cf04d289d.CONNECTING;
  channel;
  constructor(_4d8f833e3700, _4e1583a24584 = [], _a6036e938986, _e55b1f48cc1c) {
    super(), this.protocols = _4e1583a24584, this.url = _4d8f833e3700.toString(), this.protocols = _4e1583a24584;
    const s = _4d8f833e3700 => {
      this.protocols = _4d8f833e3700, this.readyState = _360cf04d289d.OPEN;
      const _4e1583a24584 = new Event("\x6f\x70\x65\x6e");
      this.dispatchEvent(_4e1583a24584);
    }, o = async _4d8f833e3700 => {
      const _4e1583a24584 = new MessageEvent("\x6d\x65\x73\x73\x61\x67\x65", {
        data: _4d8f833e3700
      });
      this.dispatchEvent(_4e1583a24584);
    }, c = (_4d8f833e3700, _4e1583a24584) => {
      this.readyState = _360cf04d289d.CLOSED;
      const _a6036e938986 = new CloseEvent("\x63\x6c\x6f\x73\x65", {
        code: _4d8f833e3700,
        reason: _4e1583a24584
      });
      this.dispatchEvent(_a6036e938986);
    }, i = () => {
      this.readyState = _360cf04d289d.CLOSED;
      const _4d8f833e3700 = new Event("\x65\x72\x72\x6f\x72");
      this.dispatchEvent(_4d8f833e3700);
    };
    this.channel = new MessageChannel, this.channel.port1.onmessage = _4d8f833e3700 => {
      "\x6f\x70\x65\x6e" === _4d8f833e3700.data.type ? s(_4d8f833e3700.data.args[0]) : "\x6d\x65\x73\x73\x61\x67\x65" === _4d8f833e3700.data.type ? o(_4d8f833e3700.data.args[0]) : "\x63\x6c\x6f\x73\x65" === _4d8f833e3700.data.type ? c(_4d8f833e3700.data.args[0], _4d8f833e3700.data.args[1]) : "\x65\x72\x72\x6f\x72" === _4d8f833e3700.data.type && i();
    }, _a6036e938986.sendMessage({
      type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74",
      websocket: {
        url: _4d8f833e3700.toString(),
        protocols: _4e1583a24584,
        requestHeaders: _e55b1f48cc1c,
        channel: this.channel.port2
      }
    }, [ this.channel.port2 ]);
  }
  send(..._4d8f833e3700) {
    if (this.readyState === _360cf04d289d.CONNECTING) throw new DOMException("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x65\x78\x65\x63\x75\x74\x65\x20\x27\x73\x65\x6e\x64\x27\x20\x6f\x6e\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x53\x74\x69\x6c\x6c\x20\x69\x6e\x20\x43\x4f\x4e\x4e\x45\x43\x54\x49\x4e\x47\x20\x73\x74\x61\x74\x65\x2e");
    let _4e1583a24584 = _4d8f833e3700[0];
    _4e1583a24584.buffer && (_4e1583a24584 = _4e1583a24584.buffer.slice(_4e1583a24584.byteOffset, _4e1583a24584.byteOffset + _4e1583a24584.byteLength)), 
    _d8afb5ee7f7f.call(this.channel.port1, {
      type: "\x64\x61\x74\x61",
      data: _4e1583a24584
    }, _4e1583a24584 instanceof ArrayBuffer ? [ _4e1583a24584 ] : []);
  }
  close(_4d8f833e3700, _4e1583a24584) {
    _d8afb5ee7f7f.call(this.channel.port1, {
      type: "\x63\x6c\x6f\x73\x65",
      closeCode: _4d8f833e3700,
      closeReason: _4e1583a24584
    });
  }
}

function u(_4d8f833e3700, _4e1583a24584, _a6036e938986) {
  console.error(`\x65\x72\x72\x6f\x72\x20\x77\x68\x69\x6c\x65\x20\x70\x72\x6f\x63\x65\x73\x73\x69\x6e\x67\x20\x27${_a6036e938986}\x27\x3a\x20`, _4e1583a24584), _4d8f833e3700.postMessage({
    type: "\x65\x72\x72\x6f\x72",
    error: _4e1583a24584
  });
}

function f(_4d8f833e3700) {
  for (let _4e1583a24584 = 0; _4e1583a24584 < _4d8f833e3700.length; _4e1583a24584++) {
    const _a6036e938986 = _4d8f833e3700[_4e1583a24584];
    if (!"\x21\x23\x24\x25\x26\x27\x2a\x2b\x2d\x2e\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x5e\x5f\x60\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x7c\x7e".includes(_a6036e938986)) return !1;
  }
  return !0;
}

const _3f16c08829b4 = [ "\x77\x73\x3a", "\x77\x73\x73\x3a" ], _3b1315be576f = [ 101, 204, 205, 304 ], _4e684f577741 = [ 301, 302, 303, 307, 308 ];

class m {
  worker;
  constructor(_4d8f833e3700) {
    this.worker = new p(_4d8f833e3700);
  }
  async getTransport() {
    return (await this.worker.sendMessage({
      type: "\x67\x65\x74"
    })).name;
  }
  async setTransport(_4d8f833e3700, _4e1583a24584, _a6036e938986) {
    await this.setManualTransport(`\x0a\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x7b\x20\x64\x65\x66\x61\x75\x6c\x74\x3a\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x7d\x20\x3d\x20\x61\x77\x61\x69\x74\x20\x69\x6d\x70\x6f\x72\x74\x28\x22${_4d8f833e3700}\x22\x29\x3b\x0a\x09\x09\x09\x72\x65\x74\x75\x72\x6e\x20\x5b\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2c\x20\x22${_4d8f833e3700}\x22\x5d\x3b\x0a\x09\x09`, _4e1583a24584, _a6036e938986);
  }
  async setManualTransport(_4d8f833e3700, _4e1583a24584, _a6036e938986) {
    if ("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65" === _4d8f833e3700) throw new Error("\x55\x73\x65\x20\x73\x65\x74\x52\x65\x6d\x6f\x74\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2e");
    await this.worker.sendMessage({
      type: "\x73\x65\x74",
      client: {
        function: _4d8f833e3700,
        args: _4e1583a24584
      }
    }, _a6036e938986);
  }
  async setRemoteTransport(_4d8f833e3700, _4e1583a24584) {
    const _a6036e938986 = new MessageChannel;
    _a6036e938986.port1.onmessage = async _4e1583a24584 => {
      const _a6036e938986 = _4e1583a24584.data.port, _e55b1f48cc1c = _4e1583a24584.data.message;
      if ("\x66\x65\x74\x63\x68" === _e55b1f48cc1c.type) try {
        _4d8f833e3700.ready || await _4d8f833e3700.init(), await async function(_4d8f833e3700, _4e1583a24584, _a6036e938986) {
          const _e55b1f48cc1c = await _a6036e938986.request(new URL(_4d8f833e3700.fetch.remote), _4d8f833e3700.fetch.method, _4d8f833e3700.fetch.body, _4d8f833e3700.fetch.headers, null);
          if (!d() && _e55b1f48cc1c.body instanceof ReadableStream) {
            const _4d8f833e3700 = new Response(_e55b1f48cc1c.body);
            _e55b1f48cc1c.body = await _4d8f833e3700.arrayBuffer();
          }
          _e55b1f48cc1c.body instanceof ReadableStream || _e55b1f48cc1c.body instanceof ArrayBuffer ? _d8afb5ee7f7f.call(_4e1583a24584, {
            type: "\x66\x65\x74\x63\x68",
            fetch: _e55b1f48cc1c
          }, [ _e55b1f48cc1c.body ]) : _d8afb5ee7f7f.call(_4e1583a24584, {
            type: "\x66\x65\x74\x63\x68",
            fetch: _e55b1f48cc1c
          });
        }(_e55b1f48cc1c, _a6036e938986, _4d8f833e3700);
      } catch (_4d8f833e3700) {
        u(_a6036e938986, _4d8f833e3700, "\x66\x65\x74\x63\x68");
      } else if ("\x77\x65\x62\x73\x6f\x63\x6b\x65\x74" === _e55b1f48cc1c.type) try {
        _4d8f833e3700.ready || await _4d8f833e3700.init(), await async function(_4d8f833e3700, _4e1583a24584, _a6036e938986) {
          const [_e55b1f48cc1c, _ef6cddf589bf] = _a6036e938986.connect(new URL(_4d8f833e3700.websocket.url), _4d8f833e3700.websocket.protocols, _4d8f833e3700.websocket.requestHeaders, _4e1583a24584 => {
            _d8afb5ee7f7f.call(_4d8f833e3700.websocket.channel, {
              type: "\x6f\x70\x65\x6e",
              args: [ _4e1583a24584 ]
            });
          }, _4e1583a24584 => {
            _4e1583a24584 instanceof ArrayBuffer ? _d8afb5ee7f7f.call(_4d8f833e3700.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ _4e1583a24584 ]
            }, [ _4e1583a24584 ]) : _d8afb5ee7f7f.call(_4d8f833e3700.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ _4e1583a24584 ]
            });
          }, (_4e1583a24584, _a6036e938986) => {
            _d8afb5ee7f7f.call(_4d8f833e3700.websocket.channel, {
              type: "\x63\x6c\x6f\x73\x65",
              args: [ _4e1583a24584, _a6036e938986 ]
            });
          }, _4e1583a24584 => {
            _d8afb5ee7f7f.call(_4d8f833e3700.websocket.channel, {
              type: "\x65\x72\x72\x6f\x72",
              args: [ _4e1583a24584 ]
            });
          });
          _4d8f833e3700.websocket.channel.onmessage = _4d8f833e3700 => {
            "\x64\x61\x74\x61" === _4d8f833e3700.data.type ? _e55b1f48cc1c(_4d8f833e3700.data.data) : "\x63\x6c\x6f\x73\x65" === _4d8f833e3700.data.type && _ef6cddf589bf(_4d8f833e3700.data.closeCode, _4d8f833e3700.data.closeReason);
          }, _d8afb5ee7f7f.call(_4e1583a24584, {
            type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74"
          });
        }(_e55b1f48cc1c, _a6036e938986, _4d8f833e3700);
      } catch (_4d8f833e3700) {
        u(_a6036e938986, _4d8f833e3700, "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74");
      }
    }, await this.worker.sendMessage({
      type: "\x73\x65\x74",
      client: {
        function: "\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65",
        args: [ _a6036e938986.port2, _4e1583a24584 ]
      }
    }, [ _a6036e938986.port2 ]);
  }
  getInnerPort() {
    return this.worker.port;
  }
}

class k {
  worker;
  constructor(_4d8f833e3700) {
    this.worker = new p(_4d8f833e3700);
  }
  createWebSocket(_4d8f833e3700, _4e1583a24584 = [], _a6036e938986, _e55b1f48cc1c) {
    try {
      _4d8f833e3700 = new URL(_4d8f833e3700);
    } catch (_4e1583a24584) {
      throw new DOMException(`\x46\x61\x69\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x20\x27${_4d8f833e3700}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
    }
    if (!_3f16c08829b4.includes(_4d8f833e3700.protocol)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x27\x73\x20\x73\x63\x68\x65\x6d\x65\x20\x6d\x75\x73\x74\x20\x62\x65\x20\x65\x69\x74\x68\x65\x72\x20\x27\x77\x73\x27\x20\x6f\x72\x20\x27\x77\x73\x73\x27\x2e\x20\x27${_4d8f833e3700.protocol}\x27\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x6c\x6c\x6f\x77\x65\x64\x2e`);
    Array.isArray(_4e1583a24584) || (_4e1583a24584 = [ _4e1583a24584 ]), _4e1583a24584 = _4e1583a24584.map(String);
    for (const _4d8f833e3700 of _4e1583a24584) if (!f(_4d8f833e3700)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x73\x75\x62\x70\x72\x6f\x74\x6f\x63\x6f\x6c\x20\x27${_4d8f833e3700}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
    _e55b1f48cc1c = _e55b1f48cc1c || {};
    return new w(_4d8f833e3700, _4e1583a24584, this.worker, _e55b1f48cc1c);
  }
  async fetch(_4d8f833e3700, _a6036e938986) {
    const _e55b1f48cc1c = new Request(_4d8f833e3700, _a6036e938986), _ef6cddf589bf = _a6036e938986?.headers || _e55b1f48cc1c.headers, _d8afb5ee7f7f = _ef6cddf589bf instanceof Headers ? Object.fromEntries(_ef6cddf589bf) : _ef6cddf589bf, _360cf04d289d = _e55b1f48cc1c.body;
    let _e910180e7bb9 = new URL(_e55b1f48cc1c.url);
    if (_e910180e7bb9.protocol.startsWith("\x62\x6c\x6f\x62\x3a")) {
      const _4d8f833e3700 = await _4e1583a24584(_e910180e7bb9), _a6036e938986 = new Response(_4d8f833e3700.body, _4d8f833e3700);
      return _a6036e938986.rawHeaders = Object.fromEntries(_4d8f833e3700.headers), _a6036e938986.rawResponse = {
        body: _4d8f833e3700.body,
        headers: Object.fromEntries(_4d8f833e3700.headers),
        status: _4d8f833e3700.status,
        statusText: _4d8f833e3700.statusText
      }, _a6036e938986.finalURL = _e910180e7bb9.toString(), _a6036e938986;
    }
    for (let _4d8f833e3700 = 0; ;_4d8f833e3700++) {
      let _4e1583a24584 = (await this.worker.sendMessage({
        type: "\x66\x65\x74\x63\x68",
        fetch: {
          remote: _e910180e7bb9.toString(),
          method: _e55b1f48cc1c.method,
          headers: _d8afb5ee7f7f,
          body: _360cf04d289d || void 0
        }
      }, _360cf04d289d ? [ _360cf04d289d ] : [])).fetch, _ef6cddf589bf = new Response(_3b1315be576f.includes(_4e1583a24584.status) ? void 0 : _4e1583a24584.body, {
        headers: new Headers(_4e1583a24584.headers),
        status: _4e1583a24584.status,
        statusText: _4e1583a24584.statusText
      });
      _ef6cddf589bf.rawHeaders = _4e1583a24584.headers, _ef6cddf589bf.rawResponse = _4e1583a24584, 
      _ef6cddf589bf.finalURL = _e910180e7bb9.toString();
      const _3f16c08829b4 = _a6036e938986?.redirect || _e55b1f48cc1c.redirect;
      if (!_4e684f577741.includes(_ef6cddf589bf.status)) return _ef6cddf589bf;
      switch (_3f16c08829b4) {
       case "\x66\x6f\x6c\x6c\x6f\x77":
        {
          const _4e1583a24584 = _ef6cddf589bf.headers.get("\x6c\x6f\x63\x61\x74\x69\x6f\x6e");
          if (20 > _4d8f833e3700 && null !== _4e1583a24584) {
            _e910180e7bb9 = new URL(_4e1583a24584, _e910180e7bb9);
            continue;
          }
          throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");
        }

       case "\x65\x72\x72\x6f\x72":
        throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");

       case "\x6d\x61\x6e\x75\x61\x6c":
        return _ef6cddf589bf;
      }
    }
  }
}

console.debug("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x72\x75\x6e\x6e\x69\x6e\x67\x20\x76\x32\x2e\x31\x2e\x39\x20\x28\x62\x75\x69\x6c\x64\x20\x64\x63\x39\x64\x63\x36\x65\x29");

export { k as BareClient, m as BookmuxConnection, w as BareWebSocket, _360cf04d289d as WebSocketFields, p as WorkerConnection, d as \u{62}\u{72}\u{6f}\u{77}\u{73}\u{65}\u{72}\u{53}\u{75}\u{70}\u{70}\u{6f}\u{72}\u{74}\u{73}\u{54}\u{72}\u{61}\u{6e}\u{73}\u{66}\u{65}\u{72}\u{72}\u{69}\u{6e}\u{67}\u{53}\u{74}\u{72}\u{65}\u{61}\u{6d}\u{73}, k as default, _4d8f833e3700 as maxRedirects, f as validProtocol };
