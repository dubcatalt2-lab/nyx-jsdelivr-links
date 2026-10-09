const _d9ae0a0b310b = 20, _584b1d608548 = globalThis.fetch, _8d247a81314d = globalThis.SharedWorker, _58ff30e58c22 = globalThis.localStorage, _201fa31de7d6 = globalThis.navigator.serviceWorker, _9fe06ba4cefe = MessagePort.prototype.postMessage, _cbbb1ce643da = {
  prototype: {
    send: WebSocket.prototype.send
  },
  CLOSED: WebSocket.CLOSED,
  CLOSING: WebSocket.CLOSING,
  CONNECTING: WebSocket.CONNECTING,
  OPEN: WebSocket.OPEN
};

async function c() {
  const _d9ae0a0b310b = (await self.clients.matchAll({
    type: "\x77\x69\x6e\x64\x6f\x77",
    includeUncontrolled: !0
  })).filter(_d9ae0a0b310b => {
    try {
      const _584b1d608548 = new URL(_d9ae0a0b310b.url);
      return _584b1d608548.origin === self.location.origin && !_584b1d608548.pathname.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x73\x65\x72\x76\x69\x63\x65\x2f") && !_584b1d608548.pathname.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x7e\x2f\x73\x74\x75\x64\x79\x2f");
    } catch {
      return !1;
    }
  }).map(async _d9ae0a0b310b => {
    const _584b1d608548 = await function(_d9ae0a0b310b) {
      let _584b1d608548 = new MessageChannel;
      return new Promise(_8d247a81314d => {
        _d9ae0a0b310b.postMessage({
          type: "\x67\x65\x74\x50\x6f\x72\x74",
          port: _584b1d608548.port2
        }, [ _584b1d608548.port2 ]), _584b1d608548.port1.onmessage = _d9ae0a0b310b => {
          _8d247a81314d(_d9ae0a0b310b.data);
        };
      });
    }(_d9ae0a0b310b);
    return await i(_584b1d608548), _584b1d608548;
  }), _584b1d608548 = Promise.race([ Promise.any(_d9ae0a0b310b), new Promise((_d9ae0a0b310b, _584b1d608548) => setTimeout(_584b1d608548, 5e3, new TypeError("\x74\x69\x6d\x65\x6f\x75\x74"))) ]);
  try {
    return await _584b1d608548;
  } catch (_d9ae0a0b310b) {
    if (_d9ae0a0b310b instanceof AggregateError) throw console.error("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x61\x73\x20\x61\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e"), 
    new Error("\x41\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e", {
      cause: _d9ae0a0b310b
    });
    return console.warn("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x77\x69\x74\x68\x69\x6e\x20\x35\x73\x2c\x20\x72\x65\x74\x72\x79\x69\x6e\x67"), 
    await c();
  }
}

function i(_d9ae0a0b310b) {
  const _584b1d608548 = new MessageChannel, _8d247a81314d = new Promise((_d9ae0a0b310b, _8d247a81314d) => {
    _584b1d608548.port1.onmessage = _584b1d608548 => {
      "\x70\x6f\x6e\x67" === _584b1d608548.data.type && _d9ae0a0b310b();
    }, setTimeout(_8d247a81314d, 5e3);
  });
  return _9fe06ba4cefe.call(_d9ae0a0b310b, {
    message: {
      type: "\x70\x69\x6e\x67"
    },
    port: _584b1d608548.port2
  }, [ _584b1d608548.port2 ]), _8d247a81314d;
}

function l(_d9ae0a0b310b, _584b1d608548) {
  const _58ff30e58c22 = new _8d247a81314d(_d9ae0a0b310b, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
  return _584b1d608548 && _201fa31de7d6.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", _584b1d608548 => {
    if ("\x67\x65\x74\x50\x6f\x72\x74" === _584b1d608548.data.type && _584b1d608548.data.port) {
      console.debug("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x72\x65\x63\x69\x65\x76\x65\x64\x20\x72\x65\x71\x75\x65\x73\x74\x20\x66\x6f\x72\x20\x70\x6f\x72\x74\x20\x66\x72\x6f\x6d\x20\x73\x77");
      const _58ff30e58c22 = new _8d247a81314d(_d9ae0a0b310b, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
      _9fe06ba4cefe.call(_584b1d608548.data.port, _58ff30e58c22.port, [ _58ff30e58c22.port ]);
    }
  }), _58ff30e58c22.port;
}

let _516b973955ba = null;

function d() {
  if (null === _516b973955ba) {
    const _d9ae0a0b310b = new MessageChannel, _584b1d608548 = new ReadableStream;
    let _8d247a81314d;
    try {
      _9fe06ba4cefe.call(_d9ae0a0b310b.port1, _584b1d608548, [ _584b1d608548 ]), _8d247a81314d = !0;
    } catch (_d9ae0a0b310b) {
      _8d247a81314d = !1;
    }
    return _516b973955ba = _8d247a81314d, _8d247a81314d;
  }
  return _516b973955ba;
}

class p {
  channel;
  port;
  workerPath;
  constructor(_d9ae0a0b310b) {
    this.channel = new BroadcastChannel("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78"), _d9ae0a0b310b instanceof MessagePort || _d9ae0a0b310b instanceof Promise ? this.port = _d9ae0a0b310b : this.createChannel(_d9ae0a0b310b, !0);
  }
  createChannel(_d9ae0a0b310b, _584b1d608548) {
    if (self.clients) this.port = c(), this.channel.onmessage = _d9ae0a0b310b => {
      "\x72\x65\x66\x72\x65\x73\x68\x50\x6f\x72\x74" === _d9ae0a0b310b.data.type && (this.port = c());
    }; else if (_d9ae0a0b310b && SharedWorker) {
      if (!_d9ae0a0b310b.startsWith("\x2f") && !_d9ae0a0b310b.includes("\x3a")) throw new Error("\x49\x6e\x76\x61\x6c\x69\x64\x20\x55\x52\x4c\x2e\x20\x4d\x75\x73\x74\x20\x62\x65\x20\x61\x62\x73\x6f\x6c\x75\x74\x65\x20\x6f\x72\x20\x73\x74\x61\x72\x74\x20\x61\x74\x20\x74\x68\x65\x20\x72\x6f\x6f\x74\x2e");
      this.port = l(_d9ae0a0b310b, _584b1d608548), console.debug("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x73\x65\x74\x74\x69\x6e\x67\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x20\x74\x6f", _d9ae0a0b310b), 
      _58ff30e58c22["\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"] = _d9ae0a0b310b;
    } else {
      if (!SharedWorker) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x63\x68\x61\x6e\x6e\x65\x6c\x20\x74\x6f\x20\x74\x68\x65\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x2e");
      {
        const _d9ae0a0b310b = _58ff30e58c22["\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"];
        if (console.debug("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x67\x6f\x74\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x3a", _d9ae0a0b310b), !_d9ae0a0b310b) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x20\x77\x6f\x72\x6b\x65\x72\x50\x61\x74\x68\x20\x66\x72\x6f\x6d\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x2e");
        this.port = l(_d9ae0a0b310b, _584b1d608548);
      }
    }
  }
  async sendMessage(_d9ae0a0b310b, _584b1d608548) {
    this.port instanceof Promise && (this.port = await this.port);
    try {
      await i(this.port);
    } catch {
      return console.warn("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x70\x69\x6e\x67\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x66\x72\x6f\x6d\x20\x74\x68\x65\x20\x77\x6f\x72\x6b\x65\x72\x20\x77\x69\x74\x68\x69\x6e\x20\x35\x73\x2e\x20\x41\x73\x73\x75\x6d\x69\x6e\x67\x20\x70\x6f\x72\x74\x20\x69\x73\x20\x64\x65\x61\x64\x2e"), 
      this.createChannel(), await this.sendMessage(_d9ae0a0b310b, _584b1d608548);
    }
    const _8d247a81314d = new MessageChannel, _58ff30e58c22 = [ _8d247a81314d.port2, ..._584b1d608548 || [] ], _201fa31de7d6 = new Promise((_d9ae0a0b310b, _584b1d608548) => {
      _8d247a81314d.port1.onmessage = _8d247a81314d => {
        const _58ff30e58c22 = _8d247a81314d.data;
        "\x65\x72\x72\x6f\x72" === _58ff30e58c22.type ? _584b1d608548(_58ff30e58c22.error) : _d9ae0a0b310b(_58ff30e58c22);
      };
    });
    return _9fe06ba4cefe.call(this.port, {
      message: _d9ae0a0b310b,
      port: _8d247a81314d.port2
    }, _58ff30e58c22), await _201fa31de7d6;
  }
}

class w extends EventTarget {
  protocols;
  url;
  readyState=_cbbb1ce643da.CONNECTING;
  channel;
  constructor(_d9ae0a0b310b, _584b1d608548 = [], _8d247a81314d, _58ff30e58c22) {
    super(), this.protocols = _584b1d608548, this.url = _d9ae0a0b310b.toString(), this.protocols = _584b1d608548;
    const s = _d9ae0a0b310b => {
      this.protocols = _d9ae0a0b310b, this.readyState = _cbbb1ce643da.OPEN;
      const _584b1d608548 = new Event("\x6f\x70\x65\x6e");
      this.dispatchEvent(_584b1d608548);
    }, o = async _d9ae0a0b310b => {
      const _584b1d608548 = new MessageEvent("\x6d\x65\x73\x73\x61\x67\x65", {
        data: _d9ae0a0b310b
      });
      this.dispatchEvent(_584b1d608548);
    }, c = (_d9ae0a0b310b, _584b1d608548) => {
      this.readyState = _cbbb1ce643da.CLOSED;
      const _8d247a81314d = new CloseEvent("\x63\x6c\x6f\x73\x65", {
        code: _d9ae0a0b310b,
        reason: _584b1d608548
      });
      this.dispatchEvent(_8d247a81314d);
    }, i = () => {
      this.readyState = _cbbb1ce643da.CLOSED;
      const _d9ae0a0b310b = new Event("\x65\x72\x72\x6f\x72");
      this.dispatchEvent(_d9ae0a0b310b);
    };
    this.channel = new MessageChannel, this.channel.port1.onmessage = _d9ae0a0b310b => {
      "\x6f\x70\x65\x6e" === _d9ae0a0b310b.data.type ? s(_d9ae0a0b310b.data.args[0]) : "\x6d\x65\x73\x73\x61\x67\x65" === _d9ae0a0b310b.data.type ? o(_d9ae0a0b310b.data.args[0]) : "\x63\x6c\x6f\x73\x65" === _d9ae0a0b310b.data.type ? c(_d9ae0a0b310b.data.args[0], _d9ae0a0b310b.data.args[1]) : "\x65\x72\x72\x6f\x72" === _d9ae0a0b310b.data.type && i();
    }, _8d247a81314d.sendMessage({
      type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74",
      websocket: {
        url: _d9ae0a0b310b.toString(),
        protocols: _584b1d608548,
        requestHeaders: _58ff30e58c22,
        channel: this.channel.port2
      }
    }, [ this.channel.port2 ]);
  }
  send(..._d9ae0a0b310b) {
    if (this.readyState === _cbbb1ce643da.CONNECTING) throw new DOMException("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x65\x78\x65\x63\x75\x74\x65\x20\x27\x73\x65\x6e\x64\x27\x20\x6f\x6e\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x53\x74\x69\x6c\x6c\x20\x69\x6e\x20\x43\x4f\x4e\x4e\x45\x43\x54\x49\x4e\x47\x20\x73\x74\x61\x74\x65\x2e");
    let _584b1d608548 = _d9ae0a0b310b[0];
    _584b1d608548.buffer && (_584b1d608548 = _584b1d608548.buffer.slice(_584b1d608548.byteOffset, _584b1d608548.byteOffset + _584b1d608548.byteLength)), 
    _9fe06ba4cefe.call(this.channel.port1, {
      type: "\x64\x61\x74\x61",
      data: _584b1d608548
    }, _584b1d608548 instanceof ArrayBuffer ? [ _584b1d608548 ] : []);
  }
  close(_d9ae0a0b310b, _584b1d608548) {
    _9fe06ba4cefe.call(this.channel.port1, {
      type: "\x63\x6c\x6f\x73\x65",
      closeCode: _d9ae0a0b310b,
      closeReason: _584b1d608548
    });
  }
}

function u(_d9ae0a0b310b, _584b1d608548, _8d247a81314d) {
  console.error(`\x65\x72\x72\x6f\x72\x20\x77\x68\x69\x6c\x65\x20\x70\x72\x6f\x63\x65\x73\x73\x69\x6e\x67\x20\x27${_8d247a81314d}\x27\x3a\x20`, _584b1d608548), _d9ae0a0b310b.postMessage({
    type: "\x65\x72\x72\x6f\x72",
    error: _584b1d608548
  });
}

function f(_d9ae0a0b310b) {
  for (let _584b1d608548 = 0; _584b1d608548 < _d9ae0a0b310b.length; _584b1d608548++) {
    const _8d247a81314d = _d9ae0a0b310b[_584b1d608548];
    if (!"\x21\x23\x24\x25\x26\x27\x2a\x2b\x2d\x2e\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x5e\x5f\x60\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x7c\x7e".includes(_8d247a81314d)) return !1;
  }
  return !0;
}

const _edb9d3966e02 = [ "\x77\x73\x3a", "\x77\x73\x73\x3a" ], _d49e443817aa = [ 101, 204, 205, 304 ], _16397d2233f2 = [ 301, 302, 303, 307, 308 ];

class m {
  worker;
  constructor(_d9ae0a0b310b) {
    this.worker = new p(_d9ae0a0b310b);
  }
  async getTransport() {
    return (await this.worker.sendMessage({
      type: "\x67\x65\x74"
    })).name;
  }
  async setTransport(_d9ae0a0b310b, _584b1d608548, _8d247a81314d) {
    await this.setManualTransport(`\x0a\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x7b\x20\x64\x65\x66\x61\x75\x6c\x74\x3a\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x7d\x20\x3d\x20\x61\x77\x61\x69\x74\x20\x69\x6d\x70\x6f\x72\x74\x28\x22${_d9ae0a0b310b}\x22\x29\x3b\x0a\x09\x09\x09\x72\x65\x74\x75\x72\x6e\x20\x5b\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2c\x20\x22${_d9ae0a0b310b}\x22\x5d\x3b\x0a\x09\x09`, _584b1d608548, _8d247a81314d);
  }
  async setManualTransport(_d9ae0a0b310b, _584b1d608548, _8d247a81314d) {
    if ("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65" === _d9ae0a0b310b) throw new Error("\x55\x73\x65\x20\x73\x65\x74\x52\x65\x6d\x6f\x74\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2e");
    await this.worker.sendMessage({
      type: "\x73\x65\x74",
      client: {
        function: _d9ae0a0b310b,
        args: _584b1d608548
      }
    }, _8d247a81314d);
  }
  async setRemoteTransport(_d9ae0a0b310b, _584b1d608548) {
    const _8d247a81314d = new MessageChannel;
    _8d247a81314d.port1.onmessage = async _584b1d608548 => {
      const _8d247a81314d = _584b1d608548.data.port, _58ff30e58c22 = _584b1d608548.data.message;
      if ("\x66\x65\x74\x63\x68" === _58ff30e58c22.type) try {
        _d9ae0a0b310b.ready || await _d9ae0a0b310b.init(), await async function(_d9ae0a0b310b, _584b1d608548, _8d247a81314d) {
          const _58ff30e58c22 = await _8d247a81314d.request(new URL(_d9ae0a0b310b.fetch.remote), _d9ae0a0b310b.fetch.method, _d9ae0a0b310b.fetch.body, _d9ae0a0b310b.fetch.headers, null);
          if (!d() && _58ff30e58c22.body instanceof ReadableStream) {
            const _d9ae0a0b310b = new Response(_58ff30e58c22.body);
            _58ff30e58c22.body = await _d9ae0a0b310b.arrayBuffer();
          }
          _58ff30e58c22.body instanceof ReadableStream || _58ff30e58c22.body instanceof ArrayBuffer ? _9fe06ba4cefe.call(_584b1d608548, {
            type: "\x66\x65\x74\x63\x68",
            fetch: _58ff30e58c22
          }, [ _58ff30e58c22.body ]) : _9fe06ba4cefe.call(_584b1d608548, {
            type: "\x66\x65\x74\x63\x68",
            fetch: _58ff30e58c22
          });
        }(_58ff30e58c22, _8d247a81314d, _d9ae0a0b310b);
      } catch (_d9ae0a0b310b) {
        u(_8d247a81314d, _d9ae0a0b310b, "\x66\x65\x74\x63\x68");
      } else if ("\x77\x65\x62\x73\x6f\x63\x6b\x65\x74" === _58ff30e58c22.type) try {
        _d9ae0a0b310b.ready || await _d9ae0a0b310b.init(), await async function(_d9ae0a0b310b, _584b1d608548, _8d247a81314d) {
          const [_58ff30e58c22, _201fa31de7d6] = _8d247a81314d.connect(new URL(_d9ae0a0b310b.websocket.url), _d9ae0a0b310b.websocket.protocols, _d9ae0a0b310b.websocket.requestHeaders, _584b1d608548 => {
            _9fe06ba4cefe.call(_d9ae0a0b310b.websocket.channel, {
              type: "\x6f\x70\x65\x6e",
              args: [ _584b1d608548 ]
            });
          }, _584b1d608548 => {
            _584b1d608548 instanceof ArrayBuffer ? _9fe06ba4cefe.call(_d9ae0a0b310b.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ _584b1d608548 ]
            }, [ _584b1d608548 ]) : _9fe06ba4cefe.call(_d9ae0a0b310b.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ _584b1d608548 ]
            });
          }, (_584b1d608548, _8d247a81314d) => {
            _9fe06ba4cefe.call(_d9ae0a0b310b.websocket.channel, {
              type: "\x63\x6c\x6f\x73\x65",
              args: [ _584b1d608548, _8d247a81314d ]
            });
          }, _584b1d608548 => {
            _9fe06ba4cefe.call(_d9ae0a0b310b.websocket.channel, {
              type: "\x65\x72\x72\x6f\x72",
              args: [ _584b1d608548 ]
            });
          });
          _d9ae0a0b310b.websocket.channel.onmessage = _d9ae0a0b310b => {
            "\x64\x61\x74\x61" === _d9ae0a0b310b.data.type ? _58ff30e58c22(_d9ae0a0b310b.data.data) : "\x63\x6c\x6f\x73\x65" === _d9ae0a0b310b.data.type && _201fa31de7d6(_d9ae0a0b310b.data.closeCode, _d9ae0a0b310b.data.closeReason);
          }, _9fe06ba4cefe.call(_584b1d608548, {
            type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74"
          });
        }(_58ff30e58c22, _8d247a81314d, _d9ae0a0b310b);
      } catch (_d9ae0a0b310b) {
        u(_8d247a81314d, _d9ae0a0b310b, "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74");
      }
    }, await this.worker.sendMessage({
      type: "\x73\x65\x74",
      client: {
        function: "\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65",
        args: [ _8d247a81314d.port2, _584b1d608548 ]
      }
    }, [ _8d247a81314d.port2 ]);
  }
  getInnerPort() {
    return this.worker.port;
  }
}

class k {
  worker;
  constructor(_d9ae0a0b310b) {
    this.worker = new p(_d9ae0a0b310b);
  }
  createWebSocket(_d9ae0a0b310b, _584b1d608548 = [], _8d247a81314d, _58ff30e58c22) {
    try {
      _d9ae0a0b310b = new URL(_d9ae0a0b310b);
    } catch (_584b1d608548) {
      throw new DOMException(`\x46\x61\x69\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x20\x27${_d9ae0a0b310b}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
    }
    if (!_edb9d3966e02.includes(_d9ae0a0b310b.protocol)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x27\x73\x20\x73\x63\x68\x65\x6d\x65\x20\x6d\x75\x73\x74\x20\x62\x65\x20\x65\x69\x74\x68\x65\x72\x20\x27\x77\x73\x27\x20\x6f\x72\x20\x27\x77\x73\x73\x27\x2e\x20\x27${_d9ae0a0b310b.protocol}\x27\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x6c\x6c\x6f\x77\x65\x64\x2e`);
    Array.isArray(_584b1d608548) || (_584b1d608548 = [ _584b1d608548 ]), _584b1d608548 = _584b1d608548.map(String);
    for (const _d9ae0a0b310b of _584b1d608548) if (!f(_d9ae0a0b310b)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x73\x75\x62\x70\x72\x6f\x74\x6f\x63\x6f\x6c\x20\x27${_d9ae0a0b310b}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
    _58ff30e58c22 = _58ff30e58c22 || {};
    return new w(_d9ae0a0b310b, _584b1d608548, this.worker, _58ff30e58c22);
  }
  async fetch(_d9ae0a0b310b, _8d247a81314d) {
    const _58ff30e58c22 = new Request(_d9ae0a0b310b, _8d247a81314d), _201fa31de7d6 = _8d247a81314d?.headers || _58ff30e58c22.headers, _9fe06ba4cefe = _201fa31de7d6 instanceof Headers ? Object.fromEntries(_201fa31de7d6) : _201fa31de7d6, _cbbb1ce643da = _58ff30e58c22.body;
    let _516b973955ba = new URL(_58ff30e58c22.url);
    if (_516b973955ba.protocol.startsWith("\x62\x6c\x6f\x62\x3a")) {
      const _d9ae0a0b310b = await _584b1d608548(_516b973955ba), _8d247a81314d = new Response(_d9ae0a0b310b.body, _d9ae0a0b310b);
      return _8d247a81314d.rawHeaders = Object.fromEntries(_d9ae0a0b310b.headers), _8d247a81314d.rawResponse = {
        body: _d9ae0a0b310b.body,
        headers: Object.fromEntries(_d9ae0a0b310b.headers),
        status: _d9ae0a0b310b.status,
        statusText: _d9ae0a0b310b.statusText
      }, _8d247a81314d.finalURL = _516b973955ba.toString(), _8d247a81314d;
    }
    for (let _d9ae0a0b310b = 0; ;_d9ae0a0b310b++) {
      let _584b1d608548 = (await this.worker.sendMessage({
        type: "\x66\x65\x74\x63\x68",
        fetch: {
          remote: _516b973955ba.toString(),
          method: _58ff30e58c22.method,
          headers: _9fe06ba4cefe,
          body: _cbbb1ce643da || void 0
        }
      }, _cbbb1ce643da ? [ _cbbb1ce643da ] : [])).fetch, _201fa31de7d6 = new Response(_d49e443817aa.includes(_584b1d608548.status) ? void 0 : _584b1d608548.body, {
        headers: new Headers(_584b1d608548.headers),
        status: _584b1d608548.status,
        statusText: _584b1d608548.statusText
      });
      _201fa31de7d6.rawHeaders = _584b1d608548.headers, _201fa31de7d6.rawResponse = _584b1d608548, 
      _201fa31de7d6.finalURL = _516b973955ba.toString();
      const _edb9d3966e02 = _8d247a81314d?.redirect || _58ff30e58c22.redirect;
      if (!_16397d2233f2.includes(_201fa31de7d6.status)) return _201fa31de7d6;
      switch (_edb9d3966e02) {
       case "\x66\x6f\x6c\x6c\x6f\x77":
        {
          const _584b1d608548 = _201fa31de7d6.headers.get("\x6c\x6f\x63\x61\x74\x69\x6f\x6e");
          if (20 > _d9ae0a0b310b && null !== _584b1d608548) {
            _516b973955ba = new URL(_584b1d608548, _516b973955ba);
            continue;
          }
          throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");
        }

       case "\x65\x72\x72\x6f\x72":
        throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");

       case "\x6d\x61\x6e\x75\x61\x6c":
        return _201fa31de7d6;
      }
    }
  }
}

console.debug("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x72\x75\x6e\x6e\x69\x6e\x67\x20\x76\x32\x2e\x31\x2e\x39\x20\x28\x62\x75\x69\x6c\x64\x20\x64\x63\x39\x64\x63\x36\x65\x29");

export { k as BareClient, m as BookmuxConnection, w as BareWebSocket, _cbbb1ce643da as WebSocketFields, p as WorkerConnection, d as \u{62}\u{72}\u{6f}\u{77}\u{73}\u{65}\u{72}\u{53}\u{75}\u{70}\u{70}\u{6f}\u{72}\u{74}\u{73}\u{54}\u{72}\u{61}\u{6e}\u{73}\u{66}\u{65}\u{72}\u{72}\u{69}\u{6e}\u{67}\u{53}\u{74}\u{72}\u{65}\u{61}\u{6d}\u{73}, k as default, _d9ae0a0b310b as maxRedirects, f as validProtocol };
