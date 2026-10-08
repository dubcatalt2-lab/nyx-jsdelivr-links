const _edd4c1ce16e8 = 20, _8f28fe01ab21 = globalThis.fetch, _43e191dfde17 = globalThis.SharedWorker, _7a3a1020eba4 = globalThis.localStorage, _1a0962a0e1ee = globalThis.navigator.serviceWorker, _ab5490800016 = MessagePort.prototype.postMessage, _5e6d772ec6a2 = {
  prototype: {
    send: WebSocket.prototype.send
  },
  CLOSED: WebSocket.CLOSED,
  CLOSING: WebSocket.CLOSING,
  CONNECTING: WebSocket.CONNECTING,
  OPEN: WebSocket.OPEN
};

async function c() {
  const _edd4c1ce16e8 = (await self.clients.matchAll({
    type: "\x77\x69\x6e\x64\x6f\x77",
    includeUncontrolled: !0
  })).filter(_edd4c1ce16e8 => {
    try {
      const _8f28fe01ab21 = new URL(_edd4c1ce16e8.url);
      return _8f28fe01ab21.origin === self.location.origin && !_8f28fe01ab21.pathname.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x73\x65\x72\x76\x69\x63\x65\x2f") && !_8f28fe01ab21.pathname.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x7e\x2f\x73\x74\x75\x64\x79\x2f");
    } catch {
      return !1;
    }
  }).map(async _edd4c1ce16e8 => {
    const _8f28fe01ab21 = await function(_edd4c1ce16e8) {
      let _8f28fe01ab21 = new MessageChannel;
      return new Promise(_43e191dfde17 => {
        _edd4c1ce16e8.postMessage({
          type: "\x67\x65\x74\x50\x6f\x72\x74",
          port: _8f28fe01ab21.port2
        }, [ _8f28fe01ab21.port2 ]), _8f28fe01ab21.port1.onmessage = _edd4c1ce16e8 => {
          _43e191dfde17(_edd4c1ce16e8.data);
        };
      });
    }(_edd4c1ce16e8);
    return await i(_8f28fe01ab21), _8f28fe01ab21;
  }), _8f28fe01ab21 = Promise.race([ Promise.any(_edd4c1ce16e8), new Promise((_edd4c1ce16e8, _8f28fe01ab21) => setTimeout(_8f28fe01ab21, 5e3, new TypeError("\x74\x69\x6d\x65\x6f\x75\x74"))) ]);
  try {
    return await _8f28fe01ab21;
  } catch (_edd4c1ce16e8) {
    if (_edd4c1ce16e8 instanceof AggregateError) throw console.error("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x61\x73\x20\x61\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e"), 
    new Error("\x41\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e", {
      cause: _edd4c1ce16e8
    });
    return console.warn("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x77\x69\x74\x68\x69\x6e\x20\x35\x73\x2c\x20\x72\x65\x74\x72\x79\x69\x6e\x67"), 
    await c();
  }
}

function i(_edd4c1ce16e8) {
  const _8f28fe01ab21 = new MessageChannel, _43e191dfde17 = new Promise((_edd4c1ce16e8, _43e191dfde17) => {
    _8f28fe01ab21.port1.onmessage = _8f28fe01ab21 => {
      "\x70\x6f\x6e\x67" === _8f28fe01ab21.data.type && _edd4c1ce16e8();
    }, setTimeout(_43e191dfde17, 5e3);
  });
  return _ab5490800016.call(_edd4c1ce16e8, {
    message: {
      type: "\x70\x69\x6e\x67"
    },
    port: _8f28fe01ab21.port2
  }, [ _8f28fe01ab21.port2 ]), _43e191dfde17;
}

function l(_edd4c1ce16e8, _8f28fe01ab21) {
  const _7a3a1020eba4 = new _43e191dfde17(_edd4c1ce16e8, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
  return _8f28fe01ab21 && _1a0962a0e1ee.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", _8f28fe01ab21 => {
    if ("\x67\x65\x74\x50\x6f\x72\x74" === _8f28fe01ab21.data.type && _8f28fe01ab21.data.port) {
      console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x72\x65\x63\x69\x65\x76\x65\x64\x20\x72\x65\x71\x75\x65\x73\x74\x20\x66\x6f\x72\x20\x70\x6f\x72\x74\x20\x66\x72\x6f\x6d\x20\x73\x77");
      const _7a3a1020eba4 = new _43e191dfde17(_edd4c1ce16e8, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
      _ab5490800016.call(_8f28fe01ab21.data.port, _7a3a1020eba4.port, [ _7a3a1020eba4.port ]);
    }
  }), _7a3a1020eba4.port;
}

let _f4490923d8ef = null;

function d() {
  if (null === _f4490923d8ef) {
    const _edd4c1ce16e8 = new MessageChannel, _8f28fe01ab21 = new ReadableStream;
    let _43e191dfde17;
    try {
      _ab5490800016.call(_edd4c1ce16e8.port1, _8f28fe01ab21, [ _8f28fe01ab21 ]), _43e191dfde17 = !0;
    } catch (_edd4c1ce16e8) {
      _43e191dfde17 = !1;
    }
    return _f4490923d8ef = _43e191dfde17, _43e191dfde17;
  }
  return _f4490923d8ef;
}

class p {
  channel;
  port;
  workerPath;
  constructor(_edd4c1ce16e8) {
    this.channel = new BroadcastChannel("\x62\x61\x72\x65\x2d\x6d\x75\x78"), _edd4c1ce16e8 instanceof MessagePort || _edd4c1ce16e8 instanceof Promise ? this.port = _edd4c1ce16e8 : this.createChannel(_edd4c1ce16e8, !0);
  }
  createChannel(_edd4c1ce16e8, _8f28fe01ab21) {
    if (self.clients) this.port = c(), this.channel.onmessage = _edd4c1ce16e8 => {
      "\x72\x65\x66\x72\x65\x73\x68\x50\x6f\x72\x74" === _edd4c1ce16e8.data.type && (this.port = c());
    }; else if (_edd4c1ce16e8 && SharedWorker) {
      if (!_edd4c1ce16e8.startsWith("\x2f") && !_edd4c1ce16e8.includes("\x3a")) throw new Error("\x49\x6e\x76\x61\x6c\x69\x64\x20\x55\x52\x4c\x2e\x20\x4d\x75\x73\x74\x20\x62\x65\x20\x61\x62\x73\x6f\x6c\x75\x74\x65\x20\x6f\x72\x20\x73\x74\x61\x72\x74\x20\x61\x74\x20\x74\x68\x65\x20\x72\x6f\x6f\x74\x2e");
      this.port = l(_edd4c1ce16e8, _8f28fe01ab21), console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x73\x65\x74\x74\x69\x6e\x67\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x20\x74\x6f", _edd4c1ce16e8), 
      _7a3a1020eba4["\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"] = _edd4c1ce16e8;
    } else {
      if (!SharedWorker) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x63\x68\x61\x6e\x6e\x65\x6c\x20\x74\x6f\x20\x74\x68\x65\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x2e");
      {
        const _edd4c1ce16e8 = _7a3a1020eba4["\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"];
        if (console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x67\x6f\x74\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x3a", _edd4c1ce16e8), !_edd4c1ce16e8) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x20\x77\x6f\x72\x6b\x65\x72\x50\x61\x74\x68\x20\x66\x72\x6f\x6d\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x2e");
        this.port = l(_edd4c1ce16e8, _8f28fe01ab21);
      }
    }
  }
  async sendMessage(_edd4c1ce16e8, _8f28fe01ab21) {
    this.port instanceof Promise && (this.port = await this.port);
    try {
      await i(this.port);
    } catch {
      return console.warn("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x70\x69\x6e\x67\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x66\x72\x6f\x6d\x20\x74\x68\x65\x20\x77\x6f\x72\x6b\x65\x72\x20\x77\x69\x74\x68\x69\x6e\x20\x35\x73\x2e\x20\x41\x73\x73\x75\x6d\x69\x6e\x67\x20\x70\x6f\x72\x74\x20\x69\x73\x20\x64\x65\x61\x64\x2e"), 
      this.createChannel(), await this.sendMessage(_edd4c1ce16e8, _8f28fe01ab21);
    }
    const _43e191dfde17 = new MessageChannel, _7a3a1020eba4 = [ _43e191dfde17.port2, ..._8f28fe01ab21 || [] ], _1a0962a0e1ee = new Promise((_edd4c1ce16e8, _8f28fe01ab21) => {
      _43e191dfde17.port1.onmessage = _43e191dfde17 => {
        const _7a3a1020eba4 = _43e191dfde17.data;
        "\x65\x72\x72\x6f\x72" === _7a3a1020eba4.type ? _8f28fe01ab21(_7a3a1020eba4.error) : _edd4c1ce16e8(_7a3a1020eba4);
      };
    });
    return _ab5490800016.call(this.port, {
      message: _edd4c1ce16e8,
      port: _43e191dfde17.port2
    }, _7a3a1020eba4), await _1a0962a0e1ee;
  }
}

class w extends EventTarget {
  protocols;
  url;
  readyState=_5e6d772ec6a2.CONNECTING;
  channel;
  constructor(_edd4c1ce16e8, _8f28fe01ab21 = [], _43e191dfde17, _7a3a1020eba4) {
    super(), this.protocols = _8f28fe01ab21, this.url = _edd4c1ce16e8.toString(), this.protocols = _8f28fe01ab21;
    const s = _edd4c1ce16e8 => {
      this.protocols = _edd4c1ce16e8, this.readyState = _5e6d772ec6a2.OPEN;
      const _8f28fe01ab21 = new Event("\x6f\x70\x65\x6e");
      this.dispatchEvent(_8f28fe01ab21);
    }, o = async _edd4c1ce16e8 => {
      const _8f28fe01ab21 = new MessageEvent("\x6d\x65\x73\x73\x61\x67\x65", {
        data: _edd4c1ce16e8
      });
      this.dispatchEvent(_8f28fe01ab21);
    }, c = (_edd4c1ce16e8, _8f28fe01ab21) => {
      this.readyState = _5e6d772ec6a2.CLOSED;
      const _43e191dfde17 = new CloseEvent("\x63\x6c\x6f\x73\x65", {
        code: _edd4c1ce16e8,
        reason: _8f28fe01ab21
      });
      this.dispatchEvent(_43e191dfde17);
    }, i = () => {
      this.readyState = _5e6d772ec6a2.CLOSED;
      const _edd4c1ce16e8 = new Event("\x65\x72\x72\x6f\x72");
      this.dispatchEvent(_edd4c1ce16e8);
    };
    this.channel = new MessageChannel, this.channel.port1.onmessage = _edd4c1ce16e8 => {
      "\x6f\x70\x65\x6e" === _edd4c1ce16e8.data.type ? s(_edd4c1ce16e8.data.args[0]) : "\x6d\x65\x73\x73\x61\x67\x65" === _edd4c1ce16e8.data.type ? o(_edd4c1ce16e8.data.args[0]) : "\x63\x6c\x6f\x73\x65" === _edd4c1ce16e8.data.type ? c(_edd4c1ce16e8.data.args[0], _edd4c1ce16e8.data.args[1]) : "\x65\x72\x72\x6f\x72" === _edd4c1ce16e8.data.type && i();
    }, _43e191dfde17.sendMessage({
      type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74",
      websocket: {
        url: _edd4c1ce16e8.toString(),
        protocols: _8f28fe01ab21,
        requestHeaders: _7a3a1020eba4,
        channel: this.channel.port2
      }
    }, [ this.channel.port2 ]);
  }
  send(..._edd4c1ce16e8) {
    if (this.readyState === _5e6d772ec6a2.CONNECTING) throw new DOMException("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x65\x78\x65\x63\x75\x74\x65\x20\x27\x73\x65\x6e\x64\x27\x20\x6f\x6e\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x53\x74\x69\x6c\x6c\x20\x69\x6e\x20\x43\x4f\x4e\x4e\x45\x43\x54\x49\x4e\x47\x20\x73\x74\x61\x74\x65\x2e");
    let _8f28fe01ab21 = _edd4c1ce16e8[0];
    _8f28fe01ab21.buffer && (_8f28fe01ab21 = _8f28fe01ab21.buffer.slice(_8f28fe01ab21.byteOffset, _8f28fe01ab21.byteOffset + _8f28fe01ab21.byteLength)), 
    _ab5490800016.call(this.channel.port1, {
      type: "\x64\x61\x74\x61",
      data: _8f28fe01ab21
    }, _8f28fe01ab21 instanceof ArrayBuffer ? [ _8f28fe01ab21 ] : []);
  }
  close(_edd4c1ce16e8, _8f28fe01ab21) {
    _ab5490800016.call(this.channel.port1, {
      type: "\x63\x6c\x6f\x73\x65",
      closeCode: _edd4c1ce16e8,
      closeReason: _8f28fe01ab21
    });
  }
}

function u(_edd4c1ce16e8, _8f28fe01ab21, _43e191dfde17) {
  console.error(`\x65\x72\x72\x6f\x72\x20\x77\x68\x69\x6c\x65\x20\x70\x72\x6f\x63\x65\x73\x73\x69\x6e\x67\x20\x27${_43e191dfde17}\x27\x3a\x20`, _8f28fe01ab21), _edd4c1ce16e8.postMessage({
    type: "\x65\x72\x72\x6f\x72",
    error: _8f28fe01ab21
  });
}

function f(_edd4c1ce16e8) {
  for (let _8f28fe01ab21 = 0; _8f28fe01ab21 < _edd4c1ce16e8.length; _8f28fe01ab21++) {
    const _43e191dfde17 = _edd4c1ce16e8[_8f28fe01ab21];
    if (!"\x21\x23\x24\x25\x26\x27\x2a\x2b\x2d\x2e\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x5e\x5f\x60\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x7c\x7e".includes(_43e191dfde17)) return !1;
  }
  return !0;
}

const _5ac4d4f4c26c = [ "\x77\x73\x3a", "\x77\x73\x73\x3a" ], _65f7b1b45902 = [ 101, 204, 205, 304 ], _6837cf67d06b = [ 301, 302, 303, 307, 308 ];

class m {
  worker;
  constructor(_edd4c1ce16e8) {
    this.worker = new p(_edd4c1ce16e8);
  }
  async getTransport() {
    return (await this.worker.sendMessage({
      type: "\x67\x65\x74"
    })).name;
  }
  async setTransport(_edd4c1ce16e8, _8f28fe01ab21, _43e191dfde17) {
    await this.setManualTransport(`\x0a\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x7b\x20\x64\x65\x66\x61\x75\x6c\x74\x3a\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x7d\x20\x3d\x20\x61\x77\x61\x69\x74\x20\x69\x6d\x70\x6f\x72\x74\x28\x22${_edd4c1ce16e8}\x22\x29\x3b\x0a\x09\x09\x09\x72\x65\x74\x75\x72\x6e\x20\x5b\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2c\x20\x22${_edd4c1ce16e8}\x22\x5d\x3b\x0a\x09\x09`, _8f28fe01ab21, _43e191dfde17);
  }
  async setManualTransport(_edd4c1ce16e8, _8f28fe01ab21, _43e191dfde17) {
    if ("\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65" === _edd4c1ce16e8) throw new Error("\x55\x73\x65\x20\x73\x65\x74\x52\x65\x6d\x6f\x74\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2e");
    await this.worker.sendMessage({
      type: "\x73\x65\x74",
      client: {
        function: _edd4c1ce16e8,
        args: _8f28fe01ab21
      }
    }, _43e191dfde17);
  }
  async setRemoteTransport(_edd4c1ce16e8, _8f28fe01ab21) {
    const _43e191dfde17 = new MessageChannel;
    _43e191dfde17.port1.onmessage = async _8f28fe01ab21 => {
      const _43e191dfde17 = _8f28fe01ab21.data.port, _7a3a1020eba4 = _8f28fe01ab21.data.message;
      if ("\x66\x65\x74\x63\x68" === _7a3a1020eba4.type) try {
        _edd4c1ce16e8.ready || await _edd4c1ce16e8.init(), await async function(_edd4c1ce16e8, _8f28fe01ab21, _43e191dfde17) {
          const _7a3a1020eba4 = await _43e191dfde17.request(new URL(_edd4c1ce16e8.fetch.remote), _edd4c1ce16e8.fetch.method, _edd4c1ce16e8.fetch.body, _edd4c1ce16e8.fetch.headers, null);
          if (!d() && _7a3a1020eba4.body instanceof ReadableStream) {
            const _edd4c1ce16e8 = new Response(_7a3a1020eba4.body);
            _7a3a1020eba4.body = await _edd4c1ce16e8.arrayBuffer();
          }
          _7a3a1020eba4.body instanceof ReadableStream || _7a3a1020eba4.body instanceof ArrayBuffer ? _ab5490800016.call(_8f28fe01ab21, {
            type: "\x66\x65\x74\x63\x68",
            fetch: _7a3a1020eba4
          }, [ _7a3a1020eba4.body ]) : _ab5490800016.call(_8f28fe01ab21, {
            type: "\x66\x65\x74\x63\x68",
            fetch: _7a3a1020eba4
          });
        }(_7a3a1020eba4, _43e191dfde17, _edd4c1ce16e8);
      } catch (_edd4c1ce16e8) {
        u(_43e191dfde17, _edd4c1ce16e8, "\x66\x65\x74\x63\x68");
      } else if ("\x77\x65\x62\x73\x6f\x63\x6b\x65\x74" === _7a3a1020eba4.type) try {
        _edd4c1ce16e8.ready || await _edd4c1ce16e8.init(), await async function(_edd4c1ce16e8, _8f28fe01ab21, _43e191dfde17) {
          const [_7a3a1020eba4, _1a0962a0e1ee] = _43e191dfde17.connect(new URL(_edd4c1ce16e8.websocket.url), _edd4c1ce16e8.websocket.protocols, _edd4c1ce16e8.websocket.requestHeaders, _8f28fe01ab21 => {
            _ab5490800016.call(_edd4c1ce16e8.websocket.channel, {
              type: "\x6f\x70\x65\x6e",
              args: [ _8f28fe01ab21 ]
            });
          }, _8f28fe01ab21 => {
            _8f28fe01ab21 instanceof ArrayBuffer ? _ab5490800016.call(_edd4c1ce16e8.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ _8f28fe01ab21 ]
            }, [ _8f28fe01ab21 ]) : _ab5490800016.call(_edd4c1ce16e8.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ _8f28fe01ab21 ]
            });
          }, (_8f28fe01ab21, _43e191dfde17) => {
            _ab5490800016.call(_edd4c1ce16e8.websocket.channel, {
              type: "\x63\x6c\x6f\x73\x65",
              args: [ _8f28fe01ab21, _43e191dfde17 ]
            });
          }, _8f28fe01ab21 => {
            _ab5490800016.call(_edd4c1ce16e8.websocket.channel, {
              type: "\x65\x72\x72\x6f\x72",
              args: [ _8f28fe01ab21 ]
            });
          });
          _edd4c1ce16e8.websocket.channel.onmessage = _edd4c1ce16e8 => {
            "\x64\x61\x74\x61" === _edd4c1ce16e8.data.type ? _7a3a1020eba4(_edd4c1ce16e8.data.data) : "\x63\x6c\x6f\x73\x65" === _edd4c1ce16e8.data.type && _1a0962a0e1ee(_edd4c1ce16e8.data.closeCode, _edd4c1ce16e8.data.closeReason);
          }, _ab5490800016.call(_8f28fe01ab21, {
            type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74"
          });
        }(_7a3a1020eba4, _43e191dfde17, _edd4c1ce16e8);
      } catch (_edd4c1ce16e8) {
        u(_43e191dfde17, _edd4c1ce16e8, "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74");
      }
    }, await this.worker.sendMessage({
      type: "\x73\x65\x74",
      client: {
        function: "\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65",
        args: [ _43e191dfde17.port2, _8f28fe01ab21 ]
      }
    }, [ _43e191dfde17.port2 ]);
  }
  getInnerPort() {
    return this.worker.port;
  }
}

class k {
  worker;
  constructor(_edd4c1ce16e8) {
    this.worker = new p(_edd4c1ce16e8);
  }
  createWebSocket(_edd4c1ce16e8, _8f28fe01ab21 = [], _43e191dfde17, _7a3a1020eba4) {
    try {
      _edd4c1ce16e8 = new URL(_edd4c1ce16e8);
    } catch (_8f28fe01ab21) {
      throw new DOMException(`\x46\x61\x69\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x20\x27${_edd4c1ce16e8}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
    }
    if (!_5ac4d4f4c26c.includes(_edd4c1ce16e8.protocol)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x27\x73\x20\x73\x63\x68\x65\x6d\x65\x20\x6d\x75\x73\x74\x20\x62\x65\x20\x65\x69\x74\x68\x65\x72\x20\x27\x77\x73\x27\x20\x6f\x72\x20\x27\x77\x73\x73\x27\x2e\x20\x27${_edd4c1ce16e8.protocol}\x27\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x6c\x6c\x6f\x77\x65\x64\x2e`);
    Array.isArray(_8f28fe01ab21) || (_8f28fe01ab21 = [ _8f28fe01ab21 ]), _8f28fe01ab21 = _8f28fe01ab21.map(String);
    for (const _edd4c1ce16e8 of _8f28fe01ab21) if (!f(_edd4c1ce16e8)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x73\x75\x62\x70\x72\x6f\x74\x6f\x63\x6f\x6c\x20\x27${_edd4c1ce16e8}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
    _7a3a1020eba4 = _7a3a1020eba4 || {};
    return new w(_edd4c1ce16e8, _8f28fe01ab21, this.worker, _7a3a1020eba4);
  }
  async fetch(_edd4c1ce16e8, _43e191dfde17) {
    const _7a3a1020eba4 = new Request(_edd4c1ce16e8, _43e191dfde17), _1a0962a0e1ee = _43e191dfde17?.headers || _7a3a1020eba4.headers, _ab5490800016 = _1a0962a0e1ee instanceof Headers ? Object.fromEntries(_1a0962a0e1ee) : _1a0962a0e1ee, _5e6d772ec6a2 = _7a3a1020eba4.body;
    let _f4490923d8ef = new URL(_7a3a1020eba4.url);
    if (_f4490923d8ef.protocol.startsWith("\x62\x6c\x6f\x62\x3a")) {
      const _edd4c1ce16e8 = await _8f28fe01ab21(_f4490923d8ef), _43e191dfde17 = new Response(_edd4c1ce16e8.body, _edd4c1ce16e8);
      return _43e191dfde17.rawHeaders = Object.fromEntries(_edd4c1ce16e8.headers), _43e191dfde17.rawResponse = {
        body: _edd4c1ce16e8.body,
        headers: Object.fromEntries(_edd4c1ce16e8.headers),
        status: _edd4c1ce16e8.status,
        statusText: _edd4c1ce16e8.statusText
      }, _43e191dfde17.finalURL = _f4490923d8ef.toString(), _43e191dfde17;
    }
    for (let _edd4c1ce16e8 = 0; ;_edd4c1ce16e8++) {
      let _8f28fe01ab21 = (await this.worker.sendMessage({
        type: "\x66\x65\x74\x63\x68",
        fetch: {
          remote: _f4490923d8ef.toString(),
          method: _7a3a1020eba4.method,
          headers: _ab5490800016,
          body: _5e6d772ec6a2 || void 0
        }
      }, _5e6d772ec6a2 ? [ _5e6d772ec6a2 ] : [])).fetch, _1a0962a0e1ee = new Response(_65f7b1b45902.includes(_8f28fe01ab21.status) ? void 0 : _8f28fe01ab21.body, {
        headers: new Headers(_8f28fe01ab21.headers),
        status: _8f28fe01ab21.status,
        statusText: _8f28fe01ab21.statusText
      });
      _1a0962a0e1ee.rawHeaders = _8f28fe01ab21.headers, _1a0962a0e1ee.rawResponse = _8f28fe01ab21, 
      _1a0962a0e1ee.finalURL = _f4490923d8ef.toString();
      const _5ac4d4f4c26c = _43e191dfde17?.redirect || _7a3a1020eba4.redirect;
      if (!_6837cf67d06b.includes(_1a0962a0e1ee.status)) return _1a0962a0e1ee;
      switch (_5ac4d4f4c26c) {
       case "\x66\x6f\x6c\x6c\x6f\x77":
        {
          const _8f28fe01ab21 = _1a0962a0e1ee.headers.get("\x6c\x6f\x63\x61\x74\x69\x6f\x6e");
          if (20 > _edd4c1ce16e8 && null !== _8f28fe01ab21) {
            _f4490923d8ef = new URL(_8f28fe01ab21, _f4490923d8ef);
            continue;
          }
          throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");
        }

       case "\x65\x72\x72\x6f\x72":
        throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");

       case "\x6d\x61\x6e\x75\x61\x6c":
        return _1a0962a0e1ee;
      }
    }
  }
}

console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x72\x75\x6e\x6e\x69\x6e\x67\x20\x76\x32\x2e\x31\x2e\x39\x20\x28\x62\x75\x69\x6c\x64\x20\x64\x63\x39\x64\x63\x36\x65\x29");

export { k as BareClient, m as \u{42}\u{61}\u{72}\u{65}\u{4d}\u{75}\u{78}\u{43}\u{6f}\u{6e}\u{6e}\u{65}\u{63}\u{74}\u{69}\u{6f}\u{6e}, w as BareWebSocket, _5e6d772ec6a2 as WebSocketFields, p as WorkerConnection, d as \u{62}\u{72}\u{6f}\u{77}\u{73}\u{65}\u{72}\u{53}\u{75}\u{70}\u{70}\u{6f}\u{72}\u{74}\u{73}\u{54}\u{72}\u{61}\u{6e}\u{73}\u{66}\u{65}\u{72}\u{72}\u{69}\u{6e}\u{67}\u{53}\u{74}\u{72}\u{65}\u{61}\u{6d}\u{73}, k as default, _edd4c1ce16e8 as maxRedirects, f as validProtocol };
