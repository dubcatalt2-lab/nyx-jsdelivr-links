const _bc75b59b5219 = 20, _e3865a8d75d9 = globalThis.fetch, _976c27c7f121 = globalThis.SharedWorker, _84547a5850f5 = globalThis.localStorage, _a9617043fba3 = globalThis.navigator.serviceWorker, _d24fe8ddc761 = MessagePort.prototype.postMessage, _4c45485ce659 = {
  prototype: {
    send: WebSocket.prototype.send
  },
  CLOSED: WebSocket.CLOSED,
  CLOSING: WebSocket.CLOSING,
  CONNECTING: WebSocket.CONNECTING,
  OPEN: WebSocket.OPEN
};

async function c() {
  const _bc75b59b5219 = (await self.clients.matchAll({
    type: "\x77\x69\x6e\x64\x6f\x77",
    includeUncontrolled: !0
  })).filter(_bc75b59b5219 => {
    try {
      const _e3865a8d75d9 = new URL(_bc75b59b5219.url);
      return _e3865a8d75d9.origin === self.location.origin && !_e3865a8d75d9.pathname.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x73\x65\x72\x76\x69\x63\x65\x2f") && !_e3865a8d75d9.pathname.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x7e\x2f\x73\x74\x75\x64\x79\x2f");
    } catch {
      return !1;
    }
  }).map(async _bc75b59b5219 => {
    const _e3865a8d75d9 = await function(_bc75b59b5219) {
      let _e3865a8d75d9 = new MessageChannel;
      return new Promise(_976c27c7f121 => {
        _bc75b59b5219.postMessage({
          type: "\x67\x65\x74\x50\x6f\x72\x74",
          port: _e3865a8d75d9.port2
        }, [ _e3865a8d75d9.port2 ]), _e3865a8d75d9.port1.onmessage = _bc75b59b5219 => {
          _976c27c7f121(_bc75b59b5219.data);
        };
      });
    }(_bc75b59b5219);
    return await i(_e3865a8d75d9), _e3865a8d75d9;
  }), _e3865a8d75d9 = Promise.race([ Promise.any(_bc75b59b5219), new Promise((_bc75b59b5219, _e3865a8d75d9) => setTimeout(_e3865a8d75d9, 5e3, new TypeError("\x74\x69\x6d\x65\x6f\x75\x74"))) ]);
  try {
    return await _e3865a8d75d9;
  } catch (_bc75b59b5219) {
    if (_bc75b59b5219 instanceof AggregateError) throw console.error("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x61\x73\x20\x61\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e"), 
    new Error("\x41\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e", {
      cause: _bc75b59b5219
    });
    return console.warn("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x77\x69\x74\x68\x69\x6e\x20\x35\x73\x2c\x20\x72\x65\x74\x72\x79\x69\x6e\x67"), 
    await c();
  }
}

function i(_bc75b59b5219) {
  const _e3865a8d75d9 = new MessageChannel, _976c27c7f121 = new Promise((_bc75b59b5219, _976c27c7f121) => {
    _e3865a8d75d9.port1.onmessage = _e3865a8d75d9 => {
      "\x70\x6f\x6e\x67" === _e3865a8d75d9.data.type && _bc75b59b5219();
    }, setTimeout(_976c27c7f121, 5e3);
  });
  return _d24fe8ddc761.call(_bc75b59b5219, {
    message: {
      type: "\x70\x69\x6e\x67"
    },
    port: _e3865a8d75d9.port2
  }, [ _e3865a8d75d9.port2 ]), _976c27c7f121;
}

function l(_bc75b59b5219, _e3865a8d75d9) {
  const _84547a5850f5 = new _976c27c7f121(_bc75b59b5219, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
  return _e3865a8d75d9 && _a9617043fba3.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", _e3865a8d75d9 => {
    if ("\x67\x65\x74\x50\x6f\x72\x74" === _e3865a8d75d9.data.type && _e3865a8d75d9.data.port) {
      console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x72\x65\x63\x69\x65\x76\x65\x64\x20\x72\x65\x71\x75\x65\x73\x74\x20\x66\x6f\x72\x20\x70\x6f\x72\x74\x20\x66\x72\x6f\x6d\x20\x73\x77");
      const _84547a5850f5 = new _976c27c7f121(_bc75b59b5219, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
      _d24fe8ddc761.call(_e3865a8d75d9.data.port, _84547a5850f5.port, [ _84547a5850f5.port ]);
    }
  }), _84547a5850f5.port;
}

let _6a1fb69f6bb2 = null;

function d() {
  if (null === _6a1fb69f6bb2) {
    const _bc75b59b5219 = new MessageChannel, _e3865a8d75d9 = new ReadableStream;
    let _976c27c7f121;
    try {
      _d24fe8ddc761.call(_bc75b59b5219.port1, _e3865a8d75d9, [ _e3865a8d75d9 ]), _976c27c7f121 = !0;
    } catch (_bc75b59b5219) {
      _976c27c7f121 = !1;
    }
    return _6a1fb69f6bb2 = _976c27c7f121, _976c27c7f121;
  }
  return _6a1fb69f6bb2;
}

class p {
  channel;
  port;
  workerPath;
  constructor(_bc75b59b5219) {
    this.channel = new BroadcastChannel("\x62\x61\x72\x65\x2d\x6d\x75\x78"), _bc75b59b5219 instanceof MessagePort || _bc75b59b5219 instanceof Promise ? this.port = _bc75b59b5219 : this.createChannel(_bc75b59b5219, !0);
  }
  createChannel(_bc75b59b5219, _e3865a8d75d9) {
    if (self.clients) this.port = c(), this.channel.onmessage = _bc75b59b5219 => {
      "\x72\x65\x66\x72\x65\x73\x68\x50\x6f\x72\x74" === _bc75b59b5219.data.type && (this.port = c());
    }; else if (_bc75b59b5219 && SharedWorker) {
      if (!_bc75b59b5219.startsWith("\x2f") && !_bc75b59b5219.includes("\x3a")) throw new Error("\x49\x6e\x76\x61\x6c\x69\x64\x20\x55\x52\x4c\x2e\x20\x4d\x75\x73\x74\x20\x62\x65\x20\x61\x62\x73\x6f\x6c\x75\x74\x65\x20\x6f\x72\x20\x73\x74\x61\x72\x74\x20\x61\x74\x20\x74\x68\x65\x20\x72\x6f\x6f\x74\x2e");
      this.port = l(_bc75b59b5219, _e3865a8d75d9), console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x73\x65\x74\x74\x69\x6e\x67\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x20\x74\x6f", _bc75b59b5219), 
      _84547a5850f5["\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"] = _bc75b59b5219;
    } else {
      if (!SharedWorker) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x63\x68\x61\x6e\x6e\x65\x6c\x20\x74\x6f\x20\x74\x68\x65\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x2e");
      {
        const _bc75b59b5219 = _84547a5850f5["\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"];
        if (console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x67\x6f\x74\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x3a", _bc75b59b5219), !_bc75b59b5219) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x20\x77\x6f\x72\x6b\x65\x72\x50\x61\x74\x68\x20\x66\x72\x6f\x6d\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x2e");
        this.port = l(_bc75b59b5219, _e3865a8d75d9);
      }
    }
  }
  async sendMessage(_bc75b59b5219, _e3865a8d75d9) {
    this.port instanceof Promise && (this.port = await this.port);
    try {
      await i(this.port);
    } catch {
      return console.warn("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x70\x69\x6e\x67\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x66\x72\x6f\x6d\x20\x74\x68\x65\x20\x77\x6f\x72\x6b\x65\x72\x20\x77\x69\x74\x68\x69\x6e\x20\x35\x73\x2e\x20\x41\x73\x73\x75\x6d\x69\x6e\x67\x20\x70\x6f\x72\x74\x20\x69\x73\x20\x64\x65\x61\x64\x2e"), 
      this.createChannel(), await this.sendMessage(_bc75b59b5219, _e3865a8d75d9);
    }
    const _976c27c7f121 = new MessageChannel, _84547a5850f5 = [ _976c27c7f121.port2, ..._e3865a8d75d9 || [] ], _a9617043fba3 = new Promise((_bc75b59b5219, _e3865a8d75d9) => {
      _976c27c7f121.port1.onmessage = _976c27c7f121 => {
        const _84547a5850f5 = _976c27c7f121.data;
        "\x65\x72\x72\x6f\x72" === _84547a5850f5.type ? _e3865a8d75d9(_84547a5850f5.error) : _bc75b59b5219(_84547a5850f5);
      };
    });
    return _d24fe8ddc761.call(this.port, {
      message: _bc75b59b5219,
      port: _976c27c7f121.port2
    }, _84547a5850f5), await _a9617043fba3;
  }
}

class w extends EventTarget {
  protocols;
  url;
  readyState=_4c45485ce659.CONNECTING;
  channel;
  constructor(_bc75b59b5219, _e3865a8d75d9 = [], _976c27c7f121, _84547a5850f5) {
    super(), this.protocols = _e3865a8d75d9, this.url = _bc75b59b5219.toString(), this.protocols = _e3865a8d75d9;
    const s = _bc75b59b5219 => {
      this.protocols = _bc75b59b5219, this.readyState = _4c45485ce659.OPEN;
      const _e3865a8d75d9 = new Event("\x6f\x70\x65\x6e");
      this.dispatchEvent(_e3865a8d75d9);
    }, o = async _bc75b59b5219 => {
      const _e3865a8d75d9 = new MessageEvent("\x6d\x65\x73\x73\x61\x67\x65", {
        data: _bc75b59b5219
      });
      this.dispatchEvent(_e3865a8d75d9);
    }, c = (_bc75b59b5219, _e3865a8d75d9) => {
      this.readyState = _4c45485ce659.CLOSED;
      const _976c27c7f121 = new CloseEvent("\x63\x6c\x6f\x73\x65", {
        code: _bc75b59b5219,
        reason: _e3865a8d75d9
      });
      this.dispatchEvent(_976c27c7f121);
    }, i = () => {
      this.readyState = _4c45485ce659.CLOSED;
      const _bc75b59b5219 = new Event("\x65\x72\x72\x6f\x72");
      this.dispatchEvent(_bc75b59b5219);
    };
    this.channel = new MessageChannel, this.channel.port1.onmessage = _bc75b59b5219 => {
      "\x6f\x70\x65\x6e" === _bc75b59b5219.data.type ? s(_bc75b59b5219.data.args[0]) : "\x6d\x65\x73\x73\x61\x67\x65" === _bc75b59b5219.data.type ? o(_bc75b59b5219.data.args[0]) : "\x63\x6c\x6f\x73\x65" === _bc75b59b5219.data.type ? c(_bc75b59b5219.data.args[0], _bc75b59b5219.data.args[1]) : "\x65\x72\x72\x6f\x72" === _bc75b59b5219.data.type && i();
    }, _976c27c7f121.sendMessage({
      type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74",
      websocket: {
        url: _bc75b59b5219.toString(),
        protocols: _e3865a8d75d9,
        requestHeaders: _84547a5850f5,
        channel: this.channel.port2
      }
    }, [ this.channel.port2 ]);
  }
  send(..._bc75b59b5219) {
    if (this.readyState === _4c45485ce659.CONNECTING) throw new DOMException("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x65\x78\x65\x63\x75\x74\x65\x20\x27\x73\x65\x6e\x64\x27\x20\x6f\x6e\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x53\x74\x69\x6c\x6c\x20\x69\x6e\x20\x43\x4f\x4e\x4e\x45\x43\x54\x49\x4e\x47\x20\x73\x74\x61\x74\x65\x2e");
    let _e3865a8d75d9 = _bc75b59b5219[0];
    _e3865a8d75d9.buffer && (_e3865a8d75d9 = _e3865a8d75d9.buffer.slice(_e3865a8d75d9.byteOffset, _e3865a8d75d9.byteOffset + _e3865a8d75d9.byteLength)), 
    _d24fe8ddc761.call(this.channel.port1, {
      type: "\x64\x61\x74\x61",
      data: _e3865a8d75d9
    }, _e3865a8d75d9 instanceof ArrayBuffer ? [ _e3865a8d75d9 ] : []);
  }
  close(_bc75b59b5219, _e3865a8d75d9) {
    _d24fe8ddc761.call(this.channel.port1, {
      type: "\x63\x6c\x6f\x73\x65",
      closeCode: _bc75b59b5219,
      closeReason: _e3865a8d75d9
    });
  }
}

function u(_bc75b59b5219, _e3865a8d75d9, _976c27c7f121) {
  console.error(`\x65\x72\x72\x6f\x72\x20\x77\x68\x69\x6c\x65\x20\x70\x72\x6f\x63\x65\x73\x73\x69\x6e\x67\x20\x27${_976c27c7f121}\x27\x3a\x20`, _e3865a8d75d9), _bc75b59b5219.postMessage({
    type: "\x65\x72\x72\x6f\x72",
    error: _e3865a8d75d9
  });
}

function f(_bc75b59b5219) {
  for (let _e3865a8d75d9 = 0; _e3865a8d75d9 < _bc75b59b5219.length; _e3865a8d75d9++) {
    const _976c27c7f121 = _bc75b59b5219[_e3865a8d75d9];
    if (!"\x21\x23\x24\x25\x26\x27\x2a\x2b\x2d\x2e\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x5e\x5f\x60\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x7c\x7e".includes(_976c27c7f121)) return !1;
  }
  return !0;
}

const _09966d798ccf = [ "\x77\x73\x3a", "\x77\x73\x73\x3a" ], _abc138a22c0b = [ 101, 204, 205, 304 ], _f6fa9e83f91c = [ 301, 302, 303, 307, 308 ];

class m {
  worker;
  constructor(_bc75b59b5219) {
    this.worker = new p(_bc75b59b5219);
  }
  async getTransport() {
    return (await this.worker.sendMessage({
      type: "\x67\x65\x74"
    })).name;
  }
  async setTransport(_bc75b59b5219, _e3865a8d75d9, _976c27c7f121) {
    await this.setManualTransport(`\x0a\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x7b\x20\x64\x65\x66\x61\x75\x6c\x74\x3a\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x7d\x20\x3d\x20\x61\x77\x61\x69\x74\x20\x69\x6d\x70\x6f\x72\x74\x28\x22${_bc75b59b5219}\x22\x29\x3b\x0a\x09\x09\x09\x72\x65\x74\x75\x72\x6e\x20\x5b\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2c\x20\x22${_bc75b59b5219}\x22\x5d\x3b\x0a\x09\x09`, _e3865a8d75d9, _976c27c7f121);
  }
  async setManualTransport(_bc75b59b5219, _e3865a8d75d9, _976c27c7f121) {
    if ("\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65" === _bc75b59b5219) throw new Error("\x55\x73\x65\x20\x73\x65\x74\x52\x65\x6d\x6f\x74\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2e");
    await this.worker.sendMessage({
      type: "\x73\x65\x74",
      client: {
        function: _bc75b59b5219,
        args: _e3865a8d75d9
      }
    }, _976c27c7f121);
  }
  async setRemoteTransport(_bc75b59b5219, _e3865a8d75d9) {
    const _976c27c7f121 = new MessageChannel;
    _976c27c7f121.port1.onmessage = async _e3865a8d75d9 => {
      const _976c27c7f121 = _e3865a8d75d9.data.port, _84547a5850f5 = _e3865a8d75d9.data.message;
      if ("\x66\x65\x74\x63\x68" === _84547a5850f5.type) try {
        _bc75b59b5219.ready || await _bc75b59b5219.init(), await async function(_bc75b59b5219, _e3865a8d75d9, _976c27c7f121) {
          const _84547a5850f5 = await _976c27c7f121.request(new URL(_bc75b59b5219.fetch.remote), _bc75b59b5219.fetch.method, _bc75b59b5219.fetch.body, _bc75b59b5219.fetch.headers, null);
          if (!d() && _84547a5850f5.body instanceof ReadableStream) {
            const _bc75b59b5219 = new Response(_84547a5850f5.body);
            _84547a5850f5.body = await _bc75b59b5219.arrayBuffer();
          }
          _84547a5850f5.body instanceof ReadableStream || _84547a5850f5.body instanceof ArrayBuffer ? _d24fe8ddc761.call(_e3865a8d75d9, {
            type: "\x66\x65\x74\x63\x68",
            fetch: _84547a5850f5
          }, [ _84547a5850f5.body ]) : _d24fe8ddc761.call(_e3865a8d75d9, {
            type: "\x66\x65\x74\x63\x68",
            fetch: _84547a5850f5
          });
        }(_84547a5850f5, _976c27c7f121, _bc75b59b5219);
      } catch (_bc75b59b5219) {
        u(_976c27c7f121, _bc75b59b5219, "\x66\x65\x74\x63\x68");
      } else if ("\x77\x65\x62\x73\x6f\x63\x6b\x65\x74" === _84547a5850f5.type) try {
        _bc75b59b5219.ready || await _bc75b59b5219.init(), await async function(_bc75b59b5219, _e3865a8d75d9, _976c27c7f121) {
          const [_84547a5850f5, _a9617043fba3] = _976c27c7f121.connect(new URL(_bc75b59b5219.websocket.url), _bc75b59b5219.websocket.protocols, _bc75b59b5219.websocket.requestHeaders, _e3865a8d75d9 => {
            _d24fe8ddc761.call(_bc75b59b5219.websocket.channel, {
              type: "\x6f\x70\x65\x6e",
              args: [ _e3865a8d75d9 ]
            });
          }, _e3865a8d75d9 => {
            _e3865a8d75d9 instanceof ArrayBuffer ? _d24fe8ddc761.call(_bc75b59b5219.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ _e3865a8d75d9 ]
            }, [ _e3865a8d75d9 ]) : _d24fe8ddc761.call(_bc75b59b5219.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ _e3865a8d75d9 ]
            });
          }, (_e3865a8d75d9, _976c27c7f121) => {
            _d24fe8ddc761.call(_bc75b59b5219.websocket.channel, {
              type: "\x63\x6c\x6f\x73\x65",
              args: [ _e3865a8d75d9, _976c27c7f121 ]
            });
          }, _e3865a8d75d9 => {
            _d24fe8ddc761.call(_bc75b59b5219.websocket.channel, {
              type: "\x65\x72\x72\x6f\x72",
              args: [ _e3865a8d75d9 ]
            });
          });
          _bc75b59b5219.websocket.channel.onmessage = _bc75b59b5219 => {
            "\x64\x61\x74\x61" === _bc75b59b5219.data.type ? _84547a5850f5(_bc75b59b5219.data.data) : "\x63\x6c\x6f\x73\x65" === _bc75b59b5219.data.type && _a9617043fba3(_bc75b59b5219.data.closeCode, _bc75b59b5219.data.closeReason);
          }, _d24fe8ddc761.call(_e3865a8d75d9, {
            type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74"
          });
        }(_84547a5850f5, _976c27c7f121, _bc75b59b5219);
      } catch (_bc75b59b5219) {
        u(_976c27c7f121, _bc75b59b5219, "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74");
      }
    }, await this.worker.sendMessage({
      type: "\x73\x65\x74",
      client: {
        function: "\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65",
        args: [ _976c27c7f121.port2, _e3865a8d75d9 ]
      }
    }, [ _976c27c7f121.port2 ]);
  }
  getInnerPort() {
    return this.worker.port;
  }
}

class k {
  worker;
  constructor(_bc75b59b5219) {
    this.worker = new p(_bc75b59b5219);
  }
  createWebSocket(_bc75b59b5219, _e3865a8d75d9 = [], _976c27c7f121, _84547a5850f5) {
    try {
      _bc75b59b5219 = new URL(_bc75b59b5219);
    } catch (_e3865a8d75d9) {
      throw new DOMException(`\x46\x61\x69\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x20\x27${_bc75b59b5219}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
    }
    if (!_09966d798ccf.includes(_bc75b59b5219.protocol)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x27\x73\x20\x73\x63\x68\x65\x6d\x65\x20\x6d\x75\x73\x74\x20\x62\x65\x20\x65\x69\x74\x68\x65\x72\x20\x27\x77\x73\x27\x20\x6f\x72\x20\x27\x77\x73\x73\x27\x2e\x20\x27${_bc75b59b5219.protocol}\x27\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x6c\x6c\x6f\x77\x65\x64\x2e`);
    Array.isArray(_e3865a8d75d9) || (_e3865a8d75d9 = [ _e3865a8d75d9 ]), _e3865a8d75d9 = _e3865a8d75d9.map(String);
    for (const _bc75b59b5219 of _e3865a8d75d9) if (!f(_bc75b59b5219)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x73\x75\x62\x70\x72\x6f\x74\x6f\x63\x6f\x6c\x20\x27${_bc75b59b5219}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
    _84547a5850f5 = _84547a5850f5 || {};
    return new w(_bc75b59b5219, _e3865a8d75d9, this.worker, _84547a5850f5);
  }
  async fetch(_bc75b59b5219, _976c27c7f121) {
    const _84547a5850f5 = new Request(_bc75b59b5219, _976c27c7f121), _a9617043fba3 = _976c27c7f121?.headers || _84547a5850f5.headers, _d24fe8ddc761 = _a9617043fba3 instanceof Headers ? Object.fromEntries(_a9617043fba3) : _a9617043fba3, _4c45485ce659 = _84547a5850f5.body;
    let _6a1fb69f6bb2 = new URL(_84547a5850f5.url);
    if (_6a1fb69f6bb2.protocol.startsWith("\x62\x6c\x6f\x62\x3a")) {
      const _bc75b59b5219 = await _e3865a8d75d9(_6a1fb69f6bb2), _976c27c7f121 = new Response(_bc75b59b5219.body, _bc75b59b5219);
      return _976c27c7f121.rawHeaders = Object.fromEntries(_bc75b59b5219.headers), _976c27c7f121.rawResponse = {
        body: _bc75b59b5219.body,
        headers: Object.fromEntries(_bc75b59b5219.headers),
        status: _bc75b59b5219.status,
        statusText: _bc75b59b5219.statusText
      }, _976c27c7f121.finalURL = _6a1fb69f6bb2.toString(), _976c27c7f121;
    }
    for (let _bc75b59b5219 = 0; ;_bc75b59b5219++) {
      let _e3865a8d75d9 = (await this.worker.sendMessage({
        type: "\x66\x65\x74\x63\x68",
        fetch: {
          remote: _6a1fb69f6bb2.toString(),
          method: _84547a5850f5.method,
          headers: _d24fe8ddc761,
          body: _4c45485ce659 || void 0
        }
      }, _4c45485ce659 ? [ _4c45485ce659 ] : [])).fetch, _a9617043fba3 = new Response(_abc138a22c0b.includes(_e3865a8d75d9.status) ? void 0 : _e3865a8d75d9.body, {
        headers: new Headers(_e3865a8d75d9.headers),
        status: _e3865a8d75d9.status,
        statusText: _e3865a8d75d9.statusText
      });
      _a9617043fba3.rawHeaders = _e3865a8d75d9.headers, _a9617043fba3.rawResponse = _e3865a8d75d9, 
      _a9617043fba3.finalURL = _6a1fb69f6bb2.toString();
      const _09966d798ccf = _976c27c7f121?.redirect || _84547a5850f5.redirect;
      if (!_f6fa9e83f91c.includes(_a9617043fba3.status)) return _a9617043fba3;
      switch (_09966d798ccf) {
       case "\x66\x6f\x6c\x6c\x6f\x77":
        {
          const _e3865a8d75d9 = _a9617043fba3.headers.get("\x6c\x6f\x63\x61\x74\x69\x6f\x6e");
          if (20 > _bc75b59b5219 && null !== _e3865a8d75d9) {
            _6a1fb69f6bb2 = new URL(_e3865a8d75d9, _6a1fb69f6bb2);
            continue;
          }
          throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");
        }

       case "\x65\x72\x72\x6f\x72":
        throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");

       case "\x6d\x61\x6e\x75\x61\x6c":
        return _a9617043fba3;
      }
    }
  }
}

console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x72\x75\x6e\x6e\x69\x6e\x67\x20\x76\x32\x2e\x31\x2e\x39\x20\x28\x62\x75\x69\x6c\x64\x20\x64\x63\x39\x64\x63\x36\x65\x29");

export { k as BareClient, m as \u{42}\u{61}\u{72}\u{65}\u{4d}\u{75}\u{78}\u{43}\u{6f}\u{6e}\u{6e}\u{65}\u{63}\u{74}\u{69}\u{6f}\u{6e}, w as BareWebSocket, _4c45485ce659 as WebSocketFields, p as WorkerConnection, d as \u{62}\u{72}\u{6f}\u{77}\u{73}\u{65}\u{72}\u{53}\u{75}\u{70}\u{70}\u{6f}\u{72}\u{74}\u{73}\u{54}\u{72}\u{61}\u{6e}\u{73}\u{66}\u{65}\u{72}\u{72}\u{69}\u{6e}\u{67}\u{53}\u{74}\u{72}\u{65}\u{61}\u{6d}\u{73}, k as default, _bc75b59b5219 as maxRedirects, f as validProtocol };
