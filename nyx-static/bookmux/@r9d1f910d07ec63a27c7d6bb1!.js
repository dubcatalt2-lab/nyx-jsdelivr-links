const _a9d81ddaf6ad = 20, _04e6706fb73f = globalThis.fetch, _3fbbe551d06a = globalThis.SharedWorker, _b0ba251ef2cb = globalThis.localStorage, _d2921beb763a = globalThis.navigator.serviceWorker, _4129debd1b3c = MessagePort.prototype.postMessage, _b73547c8db2a = {
  prototype: {
    send: WebSocket.prototype.send
  },
  CLOSED: WebSocket.CLOSED,
  CLOSING: WebSocket.CLOSING,
  CONNECTING: WebSocket.CONNECTING,
  OPEN: WebSocket.OPEN
};

async function c() {
  const _a9d81ddaf6ad = (await self.clients.matchAll({
    type: "\x77\x69\x6e\x64\x6f\x77",
    includeUncontrolled: !0
  })).filter(_a9d81ddaf6ad => {
    try {
      const _04e6706fb73f = new URL(_a9d81ddaf6ad.url);
      return _04e6706fb73f.origin === self.location.origin && !_04e6706fb73f.pathname.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x73\x65\x72\x76\x69\x63\x65\x2f") && !_04e6706fb73f.pathname.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x7e\x2f\x73\x74\x75\x64\x79\x2f");
    } catch {
      return !1;
    }
  }).map(async _a9d81ddaf6ad => {
    const _04e6706fb73f = await function(_a9d81ddaf6ad) {
      let _04e6706fb73f = new MessageChannel;
      return new Promise(_3fbbe551d06a => {
        _a9d81ddaf6ad.postMessage({
          type: "\x67\x65\x74\x50\x6f\x72\x74",
          port: _04e6706fb73f.port2
        }, [ _04e6706fb73f.port2 ]), _04e6706fb73f.port1.onmessage = _a9d81ddaf6ad => {
          _3fbbe551d06a(_a9d81ddaf6ad.data);
        };
      });
    }(_a9d81ddaf6ad);
    return await i(_04e6706fb73f), _04e6706fb73f;
  }), _04e6706fb73f = Promise.race([ Promise.any(_a9d81ddaf6ad), new Promise((_a9d81ddaf6ad, _04e6706fb73f) => setTimeout(_04e6706fb73f, 5e3, new TypeError("\x74\x69\x6d\x65\x6f\x75\x74"))) ]);
  try {
    return await _04e6706fb73f;
  } catch (_a9d81ddaf6ad) {
    if (_a9d81ddaf6ad instanceof AggregateError) throw console.error("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x61\x73\x20\x61\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e"), 
    new Error("\x41\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e", {
      cause: _a9d81ddaf6ad
    });
    return console.warn("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x77\x69\x74\x68\x69\x6e\x20\x35\x73\x2c\x20\x72\x65\x74\x72\x79\x69\x6e\x67"), 
    await c();
  }
}

function i(_a9d81ddaf6ad) {
  const _04e6706fb73f = new MessageChannel, _3fbbe551d06a = new Promise((_a9d81ddaf6ad, _3fbbe551d06a) => {
    _04e6706fb73f.port1.onmessage = _04e6706fb73f => {
      "\x70\x6f\x6e\x67" === _04e6706fb73f.data.type && _a9d81ddaf6ad();
    }, setTimeout(_3fbbe551d06a, 5e3);
  });
  return _4129debd1b3c.call(_a9d81ddaf6ad, {
    message: {
      type: "\x70\x69\x6e\x67"
    },
    port: _04e6706fb73f.port2
  }, [ _04e6706fb73f.port2 ]), _3fbbe551d06a;
}

function l(_a9d81ddaf6ad, _04e6706fb73f) {
  const _b0ba251ef2cb = new _3fbbe551d06a(_a9d81ddaf6ad, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
  return _04e6706fb73f && _d2921beb763a.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", _04e6706fb73f => {
    if ("\x67\x65\x74\x50\x6f\x72\x74" === _04e6706fb73f.data.type && _04e6706fb73f.data.port) {
      console.debug("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x72\x65\x63\x69\x65\x76\x65\x64\x20\x72\x65\x71\x75\x65\x73\x74\x20\x66\x6f\x72\x20\x70\x6f\x72\x74\x20\x66\x72\x6f\x6d\x20\x73\x77");
      const _b0ba251ef2cb = new _3fbbe551d06a(_a9d81ddaf6ad, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
      _4129debd1b3c.call(_04e6706fb73f.data.port, _b0ba251ef2cb.port, [ _b0ba251ef2cb.port ]);
    }
  }), _b0ba251ef2cb.port;
}

let _a09adceb9721 = null;

function d() {
  if (null === _a09adceb9721) {
    const _a9d81ddaf6ad = new MessageChannel, _04e6706fb73f = new ReadableStream;
    let _3fbbe551d06a;
    try {
      _4129debd1b3c.call(_a9d81ddaf6ad.port1, _04e6706fb73f, [ _04e6706fb73f ]), _3fbbe551d06a = !0;
    } catch (_a9d81ddaf6ad) {
      _3fbbe551d06a = !1;
    }
    return _a09adceb9721 = _3fbbe551d06a, _3fbbe551d06a;
  }
  return _a09adceb9721;
}

class p {
  channel;
  port;
  workerPath;
  constructor(_a9d81ddaf6ad) {
    this.channel = new BroadcastChannel("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78"), _a9d81ddaf6ad instanceof MessagePort || _a9d81ddaf6ad instanceof Promise ? this.port = _a9d81ddaf6ad : this.createChannel(_a9d81ddaf6ad, !0);
  }
  createChannel(_a9d81ddaf6ad, _04e6706fb73f) {
    if (self.clients) this.port = c(), this.channel.onmessage = _a9d81ddaf6ad => {
      "\x72\x65\x66\x72\x65\x73\x68\x50\x6f\x72\x74" === _a9d81ddaf6ad.data.type && (this.port = c());
    }; else if (_a9d81ddaf6ad && SharedWorker) {
      if (!_a9d81ddaf6ad.startsWith("\x2f") && !_a9d81ddaf6ad.includes("\x3a")) throw new Error("\x49\x6e\x76\x61\x6c\x69\x64\x20\x55\x52\x4c\x2e\x20\x4d\x75\x73\x74\x20\x62\x65\x20\x61\x62\x73\x6f\x6c\x75\x74\x65\x20\x6f\x72\x20\x73\x74\x61\x72\x74\x20\x61\x74\x20\x74\x68\x65\x20\x72\x6f\x6f\x74\x2e");
      this.port = l(_a9d81ddaf6ad, _04e6706fb73f), console.debug("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x73\x65\x74\x74\x69\x6e\x67\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x20\x74\x6f", _a9d81ddaf6ad), 
      _b0ba251ef2cb["\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"] = _a9d81ddaf6ad;
    } else {
      if (!SharedWorker) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x63\x68\x61\x6e\x6e\x65\x6c\x20\x74\x6f\x20\x74\x68\x65\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x2e");
      {
        const _a9d81ddaf6ad = _b0ba251ef2cb["\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"];
        if (console.debug("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x67\x6f\x74\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x3a", _a9d81ddaf6ad), !_a9d81ddaf6ad) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x20\x77\x6f\x72\x6b\x65\x72\x50\x61\x74\x68\x20\x66\x72\x6f\x6d\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x2e");
        this.port = l(_a9d81ddaf6ad, _04e6706fb73f);
      }
    }
  }
  async sendMessage(_a9d81ddaf6ad, _04e6706fb73f) {
    this.port instanceof Promise && (this.port = await this.port);
    try {
      await i(this.port);
    } catch {
      return console.warn("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x70\x69\x6e\x67\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x66\x72\x6f\x6d\x20\x74\x68\x65\x20\x77\x6f\x72\x6b\x65\x72\x20\x77\x69\x74\x68\x69\x6e\x20\x35\x73\x2e\x20\x41\x73\x73\x75\x6d\x69\x6e\x67\x20\x70\x6f\x72\x74\x20\x69\x73\x20\x64\x65\x61\x64\x2e"), 
      this.createChannel(), await this.sendMessage(_a9d81ddaf6ad, _04e6706fb73f);
    }
    const _3fbbe551d06a = new MessageChannel, _b0ba251ef2cb = [ _3fbbe551d06a.port2, ..._04e6706fb73f || [] ], _d2921beb763a = new Promise((_a9d81ddaf6ad, _04e6706fb73f) => {
      _3fbbe551d06a.port1.onmessage = _3fbbe551d06a => {
        const _b0ba251ef2cb = _3fbbe551d06a.data;
        "\x65\x72\x72\x6f\x72" === _b0ba251ef2cb.type ? _04e6706fb73f(_b0ba251ef2cb.error) : _a9d81ddaf6ad(_b0ba251ef2cb);
      };
    });
    return _4129debd1b3c.call(this.port, {
      message: _a9d81ddaf6ad,
      port: _3fbbe551d06a.port2
    }, _b0ba251ef2cb), await _d2921beb763a;
  }
}

class w extends EventTarget {
  protocols;
  url;
  readyState=_b73547c8db2a.CONNECTING;
  channel;
  constructor(_a9d81ddaf6ad, _04e6706fb73f = [], _3fbbe551d06a, _b0ba251ef2cb) {
    super(), this.protocols = _04e6706fb73f, this.url = _a9d81ddaf6ad.toString(), this.protocols = _04e6706fb73f;
    const s = _a9d81ddaf6ad => {
      this.protocols = _a9d81ddaf6ad, this.readyState = _b73547c8db2a.OPEN;
      const _04e6706fb73f = new Event("\x6f\x70\x65\x6e");
      this.dispatchEvent(_04e6706fb73f);
    }, o = async _a9d81ddaf6ad => {
      const _04e6706fb73f = new MessageEvent("\x6d\x65\x73\x73\x61\x67\x65", {
        data: _a9d81ddaf6ad
      });
      this.dispatchEvent(_04e6706fb73f);
    }, c = (_a9d81ddaf6ad, _04e6706fb73f) => {
      this.readyState = _b73547c8db2a.CLOSED;
      const _3fbbe551d06a = new CloseEvent("\x63\x6c\x6f\x73\x65", {
        code: _a9d81ddaf6ad,
        reason: _04e6706fb73f
      });
      this.dispatchEvent(_3fbbe551d06a);
    }, i = () => {
      this.readyState = _b73547c8db2a.CLOSED;
      const _a9d81ddaf6ad = new Event("\x65\x72\x72\x6f\x72");
      this.dispatchEvent(_a9d81ddaf6ad);
    };
    this.channel = new MessageChannel, this.channel.port1.onmessage = _a9d81ddaf6ad => {
      "\x6f\x70\x65\x6e" === _a9d81ddaf6ad.data.type ? s(_a9d81ddaf6ad.data.args[0]) : "\x6d\x65\x73\x73\x61\x67\x65" === _a9d81ddaf6ad.data.type ? o(_a9d81ddaf6ad.data.args[0]) : "\x63\x6c\x6f\x73\x65" === _a9d81ddaf6ad.data.type ? c(_a9d81ddaf6ad.data.args[0], _a9d81ddaf6ad.data.args[1]) : "\x65\x72\x72\x6f\x72" === _a9d81ddaf6ad.data.type && i();
    }, _3fbbe551d06a.sendMessage({
      type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74",
      websocket: {
        url: _a9d81ddaf6ad.toString(),
        protocols: _04e6706fb73f,
        requestHeaders: _b0ba251ef2cb,
        channel: this.channel.port2
      }
    }, [ this.channel.port2 ]);
  }
  send(..._a9d81ddaf6ad) {
    if (this.readyState === _b73547c8db2a.CONNECTING) throw new DOMException("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x65\x78\x65\x63\x75\x74\x65\x20\x27\x73\x65\x6e\x64\x27\x20\x6f\x6e\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x53\x74\x69\x6c\x6c\x20\x69\x6e\x20\x43\x4f\x4e\x4e\x45\x43\x54\x49\x4e\x47\x20\x73\x74\x61\x74\x65\x2e");
    let _04e6706fb73f = _a9d81ddaf6ad[0];
    _04e6706fb73f.buffer && (_04e6706fb73f = _04e6706fb73f.buffer.slice(_04e6706fb73f.byteOffset, _04e6706fb73f.byteOffset + _04e6706fb73f.byteLength)), 
    _4129debd1b3c.call(this.channel.port1, {
      type: "\x64\x61\x74\x61",
      data: _04e6706fb73f
    }, _04e6706fb73f instanceof ArrayBuffer ? [ _04e6706fb73f ] : []);
  }
  close(_a9d81ddaf6ad, _04e6706fb73f) {
    _4129debd1b3c.call(this.channel.port1, {
      type: "\x63\x6c\x6f\x73\x65",
      closeCode: _a9d81ddaf6ad,
      closeReason: _04e6706fb73f
    });
  }
}

function u(_a9d81ddaf6ad, _04e6706fb73f, _3fbbe551d06a) {
  console.error(`\x65\x72\x72\x6f\x72\x20\x77\x68\x69\x6c\x65\x20\x70\x72\x6f\x63\x65\x73\x73\x69\x6e\x67\x20\x27${_3fbbe551d06a}\x27\x3a\x20`, _04e6706fb73f), _a9d81ddaf6ad.postMessage({
    type: "\x65\x72\x72\x6f\x72",
    error: _04e6706fb73f
  });
}

function f(_a9d81ddaf6ad) {
  for (let _04e6706fb73f = 0; _04e6706fb73f < _a9d81ddaf6ad.length; _04e6706fb73f++) {
    const _3fbbe551d06a = _a9d81ddaf6ad[_04e6706fb73f];
    if (!"\x21\x23\x24\x25\x26\x27\x2a\x2b\x2d\x2e\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x5e\x5f\x60\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x7c\x7e".includes(_3fbbe551d06a)) return !1;
  }
  return !0;
}

const _a3ba501a0cbd = [ "\x77\x73\x3a", "\x77\x73\x73\x3a" ], _504e217ac761 = [ 101, 204, 205, 304 ], _0daf6eb7b3bb = [ 301, 302, 303, 307, 308 ];

class m {
  worker;
  constructor(_a9d81ddaf6ad) {
    this.worker = new p(_a9d81ddaf6ad);
  }
  async getTransport() {
    return (await this.worker.sendMessage({
      type: "\x67\x65\x74"
    })).name;
  }
  async setTransport(_a9d81ddaf6ad, _04e6706fb73f, _3fbbe551d06a) {
    await this.setManualTransport(`\x0a\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x7b\x20\x64\x65\x66\x61\x75\x6c\x74\x3a\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x7d\x20\x3d\x20\x61\x77\x61\x69\x74\x20\x69\x6d\x70\x6f\x72\x74\x28\x22${_a9d81ddaf6ad}\x22\x29\x3b\x0a\x09\x09\x09\x72\x65\x74\x75\x72\x6e\x20\x5b\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2c\x20\x22${_a9d81ddaf6ad}\x22\x5d\x3b\x0a\x09\x09`, _04e6706fb73f, _3fbbe551d06a);
  }
  async setManualTransport(_a9d81ddaf6ad, _04e6706fb73f, _3fbbe551d06a) {
    if ("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65" === _a9d81ddaf6ad) throw new Error("\x55\x73\x65\x20\x73\x65\x74\x52\x65\x6d\x6f\x74\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2e");
    await this.worker.sendMessage({
      type: "\x73\x65\x74",
      client: {
        function: _a9d81ddaf6ad,
        args: _04e6706fb73f
      }
    }, _3fbbe551d06a);
  }
  async setRemoteTransport(_a9d81ddaf6ad, _04e6706fb73f) {
    const _3fbbe551d06a = new MessageChannel;
    _3fbbe551d06a.port1.onmessage = async _04e6706fb73f => {
      const _3fbbe551d06a = _04e6706fb73f.data.port, _b0ba251ef2cb = _04e6706fb73f.data.message;
      if ("\x66\x65\x74\x63\x68" === _b0ba251ef2cb.type) try {
        _a9d81ddaf6ad.ready || await _a9d81ddaf6ad.init(), await async function(_a9d81ddaf6ad, _04e6706fb73f, _3fbbe551d06a) {
          const _b0ba251ef2cb = await _3fbbe551d06a.request(new URL(_a9d81ddaf6ad.fetch.remote), _a9d81ddaf6ad.fetch.method, _a9d81ddaf6ad.fetch.body, _a9d81ddaf6ad.fetch.headers, null);
          if (!d() && _b0ba251ef2cb.body instanceof ReadableStream) {
            const _a9d81ddaf6ad = new Response(_b0ba251ef2cb.body);
            _b0ba251ef2cb.body = await _a9d81ddaf6ad.arrayBuffer();
          }
          _b0ba251ef2cb.body instanceof ReadableStream || _b0ba251ef2cb.body instanceof ArrayBuffer ? _4129debd1b3c.call(_04e6706fb73f, {
            type: "\x66\x65\x74\x63\x68",
            fetch: _b0ba251ef2cb
          }, [ _b0ba251ef2cb.body ]) : _4129debd1b3c.call(_04e6706fb73f, {
            type: "\x66\x65\x74\x63\x68",
            fetch: _b0ba251ef2cb
          });
        }(_b0ba251ef2cb, _3fbbe551d06a, _a9d81ddaf6ad);
      } catch (_a9d81ddaf6ad) {
        u(_3fbbe551d06a, _a9d81ddaf6ad, "\x66\x65\x74\x63\x68");
      } else if ("\x77\x65\x62\x73\x6f\x63\x6b\x65\x74" === _b0ba251ef2cb.type) try {
        _a9d81ddaf6ad.ready || await _a9d81ddaf6ad.init(), await async function(_a9d81ddaf6ad, _04e6706fb73f, _3fbbe551d06a) {
          const [_b0ba251ef2cb, _d2921beb763a] = _3fbbe551d06a.connect(new URL(_a9d81ddaf6ad.websocket.url), _a9d81ddaf6ad.websocket.protocols, _a9d81ddaf6ad.websocket.requestHeaders, _04e6706fb73f => {
            _4129debd1b3c.call(_a9d81ddaf6ad.websocket.channel, {
              type: "\x6f\x70\x65\x6e",
              args: [ _04e6706fb73f ]
            });
          }, _04e6706fb73f => {
            _04e6706fb73f instanceof ArrayBuffer ? _4129debd1b3c.call(_a9d81ddaf6ad.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ _04e6706fb73f ]
            }, [ _04e6706fb73f ]) : _4129debd1b3c.call(_a9d81ddaf6ad.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ _04e6706fb73f ]
            });
          }, (_04e6706fb73f, _3fbbe551d06a) => {
            _4129debd1b3c.call(_a9d81ddaf6ad.websocket.channel, {
              type: "\x63\x6c\x6f\x73\x65",
              args: [ _04e6706fb73f, _3fbbe551d06a ]
            });
          }, _04e6706fb73f => {
            _4129debd1b3c.call(_a9d81ddaf6ad.websocket.channel, {
              type: "\x65\x72\x72\x6f\x72",
              args: [ _04e6706fb73f ]
            });
          });
          _a9d81ddaf6ad.websocket.channel.onmessage = _a9d81ddaf6ad => {
            "\x64\x61\x74\x61" === _a9d81ddaf6ad.data.type ? _b0ba251ef2cb(_a9d81ddaf6ad.data.data) : "\x63\x6c\x6f\x73\x65" === _a9d81ddaf6ad.data.type && _d2921beb763a(_a9d81ddaf6ad.data.closeCode, _a9d81ddaf6ad.data.closeReason);
          }, _4129debd1b3c.call(_04e6706fb73f, {
            type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74"
          });
        }(_b0ba251ef2cb, _3fbbe551d06a, _a9d81ddaf6ad);
      } catch (_a9d81ddaf6ad) {
        u(_3fbbe551d06a, _a9d81ddaf6ad, "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74");
      }
    }, await this.worker.sendMessage({
      type: "\x73\x65\x74",
      client: {
        function: "\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65",
        args: [ _3fbbe551d06a.port2, _04e6706fb73f ]
      }
    }, [ _3fbbe551d06a.port2 ]);
  }
  getInnerPort() {
    return this.worker.port;
  }
}

class k {
  worker;
  constructor(_a9d81ddaf6ad) {
    this.worker = new p(_a9d81ddaf6ad);
  }
  createWebSocket(_a9d81ddaf6ad, _04e6706fb73f = [], _3fbbe551d06a, _b0ba251ef2cb) {
    try {
      _a9d81ddaf6ad = new URL(_a9d81ddaf6ad);
    } catch (_04e6706fb73f) {
      throw new DOMException(`\x46\x61\x69\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x20\x27${_a9d81ddaf6ad}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
    }
    if (!_a3ba501a0cbd.includes(_a9d81ddaf6ad.protocol)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x27\x73\x20\x73\x63\x68\x65\x6d\x65\x20\x6d\x75\x73\x74\x20\x62\x65\x20\x65\x69\x74\x68\x65\x72\x20\x27\x77\x73\x27\x20\x6f\x72\x20\x27\x77\x73\x73\x27\x2e\x20\x27${_a9d81ddaf6ad.protocol}\x27\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x6c\x6c\x6f\x77\x65\x64\x2e`);
    Array.isArray(_04e6706fb73f) || (_04e6706fb73f = [ _04e6706fb73f ]), _04e6706fb73f = _04e6706fb73f.map(String);
    for (const _a9d81ddaf6ad of _04e6706fb73f) if (!f(_a9d81ddaf6ad)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x73\x75\x62\x70\x72\x6f\x74\x6f\x63\x6f\x6c\x20\x27${_a9d81ddaf6ad}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
    _b0ba251ef2cb = _b0ba251ef2cb || {};
    return new w(_a9d81ddaf6ad, _04e6706fb73f, this.worker, _b0ba251ef2cb);
  }
  async fetch(_a9d81ddaf6ad, _3fbbe551d06a) {
    const _b0ba251ef2cb = new Request(_a9d81ddaf6ad, _3fbbe551d06a), _d2921beb763a = _3fbbe551d06a?.headers || _b0ba251ef2cb.headers, _4129debd1b3c = _d2921beb763a instanceof Headers ? Object.fromEntries(_d2921beb763a) : _d2921beb763a, _b73547c8db2a = _b0ba251ef2cb.body;
    let _a09adceb9721 = new URL(_b0ba251ef2cb.url);
    if (_a09adceb9721.protocol.startsWith("\x62\x6c\x6f\x62\x3a")) {
      const _a9d81ddaf6ad = await _04e6706fb73f(_a09adceb9721), _3fbbe551d06a = new Response(_a9d81ddaf6ad.body, _a9d81ddaf6ad);
      return _3fbbe551d06a.rawHeaders = Object.fromEntries(_a9d81ddaf6ad.headers), _3fbbe551d06a.rawResponse = {
        body: _a9d81ddaf6ad.body,
        headers: Object.fromEntries(_a9d81ddaf6ad.headers),
        status: _a9d81ddaf6ad.status,
        statusText: _a9d81ddaf6ad.statusText
      }, _3fbbe551d06a.finalURL = _a09adceb9721.toString(), _3fbbe551d06a;
    }
    for (let _a9d81ddaf6ad = 0; ;_a9d81ddaf6ad++) {
      let _04e6706fb73f = (await this.worker.sendMessage({
        type: "\x66\x65\x74\x63\x68",
        fetch: {
          remote: _a09adceb9721.toString(),
          method: _b0ba251ef2cb.method,
          headers: _4129debd1b3c,
          body: _b73547c8db2a || void 0
        }
      }, _b73547c8db2a ? [ _b73547c8db2a ] : [])).fetch, _d2921beb763a = new Response(_504e217ac761.includes(_04e6706fb73f.status) ? void 0 : _04e6706fb73f.body, {
        headers: new Headers(_04e6706fb73f.headers),
        status: _04e6706fb73f.status,
        statusText: _04e6706fb73f.statusText
      });
      _d2921beb763a.rawHeaders = _04e6706fb73f.headers, _d2921beb763a.rawResponse = _04e6706fb73f, 
      _d2921beb763a.finalURL = _a09adceb9721.toString();
      const _a3ba501a0cbd = _3fbbe551d06a?.redirect || _b0ba251ef2cb.redirect;
      if (!_0daf6eb7b3bb.includes(_d2921beb763a.status)) return _d2921beb763a;
      switch (_a3ba501a0cbd) {
       case "\x66\x6f\x6c\x6c\x6f\x77":
        {
          const _04e6706fb73f = _d2921beb763a.headers.get("\x6c\x6f\x63\x61\x74\x69\x6f\x6e");
          if (20 > _a9d81ddaf6ad && null !== _04e6706fb73f) {
            _a09adceb9721 = new URL(_04e6706fb73f, _a09adceb9721);
            continue;
          }
          throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");
        }

       case "\x65\x72\x72\x6f\x72":
        throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");

       case "\x6d\x61\x6e\x75\x61\x6c":
        return _d2921beb763a;
      }
    }
  }
}

console.debug("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x72\x75\x6e\x6e\x69\x6e\x67\x20\x76\x32\x2e\x31\x2e\x39\x20\x28\x62\x75\x69\x6c\x64\x20\x64\x63\x39\x64\x63\x36\x65\x29");

export { k as BareClient, m as BookmuxConnection, w as BareWebSocket, _b73547c8db2a as WebSocketFields, p as WorkerConnection, d as \u{62}\u{72}\u{6f}\u{77}\u{73}\u{65}\u{72}\u{53}\u{75}\u{70}\u{70}\u{6f}\u{72}\u{74}\u{73}\u{54}\u{72}\u{61}\u{6e}\u{73}\u{66}\u{65}\u{72}\u{72}\u{69}\u{6e}\u{67}\u{53}\u{74}\u{72}\u{65}\u{61}\u{6d}\u{73}, k as default, _a9d81ddaf6ad as maxRedirects, f as validProtocol };
