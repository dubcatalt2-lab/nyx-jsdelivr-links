const _b6e5d5ae5609 = 20, _de963aa0d161 = globalThis.fetch, _bd6975f04ea3 = globalThis.SharedWorker, _4933bf5bfe64 = globalThis.localStorage, _f2a11a70e1a5 = globalThis.navigator.serviceWorker, _b48710bf8340 = MessagePort.prototype.postMessage, _b789bda0eaae = {
  prototype: {
    send: WebSocket.prototype.send
  },
  CLOSED: WebSocket.CLOSED,
  CLOSING: WebSocket.CLOSING,
  CONNECTING: WebSocket.CONNECTING,
  OPEN: WebSocket.OPEN
};

async function c() {
  const _b6e5d5ae5609 = (await self.clients.matchAll({
    type: "\x77\x69\x6e\x64\x6f\x77",
    includeUncontrolled: !0
  })).filter(_b6e5d5ae5609 => {
    try {
      const _de963aa0d161 = new URL(_b6e5d5ae5609.url);
      return _de963aa0d161.origin === self.location.origin && !_de963aa0d161.pathname.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x73\x65\x72\x76\x69\x63\x65\x2f") && !_de963aa0d161.pathname.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x7e\x2f\x73\x74\x75\x64\x79\x2f");
    } catch {
      return !1;
    }
  }).map(async _b6e5d5ae5609 => {
    const _de963aa0d161 = await function(_b6e5d5ae5609) {
      let _de963aa0d161 = new MessageChannel;
      return new Promise(_bd6975f04ea3 => {
        _b6e5d5ae5609.postMessage({
          type: "\x67\x65\x74\x50\x6f\x72\x74",
          port: _de963aa0d161.port2
        }, [ _de963aa0d161.port2 ]), _de963aa0d161.port1.onmessage = _b6e5d5ae5609 => {
          _bd6975f04ea3(_b6e5d5ae5609.data);
        };
      });
    }(_b6e5d5ae5609);
    return await i(_de963aa0d161), _de963aa0d161;
  }), _de963aa0d161 = Promise.race([ Promise.any(_b6e5d5ae5609), new Promise((_b6e5d5ae5609, _de963aa0d161) => setTimeout(_de963aa0d161, 5e3, new TypeError("\x74\x69\x6d\x65\x6f\x75\x74"))) ]);
  try {
    return await _de963aa0d161;
  } catch (_b6e5d5ae5609) {
    if (_b6e5d5ae5609 instanceof AggregateError) throw console.error("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x61\x73\x20\x61\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e"), 
    new Error("\x41\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e", {
      cause: _b6e5d5ae5609
    });
    return console.warn("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x77\x69\x74\x68\x69\x6e\x20\x35\x73\x2c\x20\x72\x65\x74\x72\x79\x69\x6e\x67"), 
    await c();
  }
}

function i(_b6e5d5ae5609) {
  const _de963aa0d161 = new MessageChannel, _bd6975f04ea3 = new Promise((_b6e5d5ae5609, _bd6975f04ea3) => {
    _de963aa0d161.port1.onmessage = _de963aa0d161 => {
      "\x70\x6f\x6e\x67" === _de963aa0d161.data.type && _b6e5d5ae5609();
    }, setTimeout(_bd6975f04ea3, 5e3);
  });
  return _b48710bf8340.call(_b6e5d5ae5609, {
    message: {
      type: "\x70\x69\x6e\x67"
    },
    port: _de963aa0d161.port2
  }, [ _de963aa0d161.port2 ]), _bd6975f04ea3;
}

function l(_b6e5d5ae5609, _de963aa0d161) {
  const _4933bf5bfe64 = new _bd6975f04ea3(_b6e5d5ae5609, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
  return _de963aa0d161 && _f2a11a70e1a5.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", _de963aa0d161 => {
    if ("\x67\x65\x74\x50\x6f\x72\x74" === _de963aa0d161.data.type && _de963aa0d161.data.port) {
      console.debug("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x72\x65\x63\x69\x65\x76\x65\x64\x20\x72\x65\x71\x75\x65\x73\x74\x20\x66\x6f\x72\x20\x70\x6f\x72\x74\x20\x66\x72\x6f\x6d\x20\x73\x77");
      const _4933bf5bfe64 = new _bd6975f04ea3(_b6e5d5ae5609, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
      _b48710bf8340.call(_de963aa0d161.data.port, _4933bf5bfe64.port, [ _4933bf5bfe64.port ]);
    }
  }), _4933bf5bfe64.port;
}

let _b2775d17e70a = null;

function d() {
  if (null === _b2775d17e70a) {
    const _b6e5d5ae5609 = new MessageChannel, _de963aa0d161 = new ReadableStream;
    let _bd6975f04ea3;
    try {
      _b48710bf8340.call(_b6e5d5ae5609.port1, _de963aa0d161, [ _de963aa0d161 ]), _bd6975f04ea3 = !0;
    } catch (_b6e5d5ae5609) {
      _bd6975f04ea3 = !1;
    }
    return _b2775d17e70a = _bd6975f04ea3, _bd6975f04ea3;
  }
  return _b2775d17e70a;
}

class p {
  channel;
  port;
  workerPath;
  constructor(_b6e5d5ae5609) {
    this.channel = new BroadcastChannel("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78"), _b6e5d5ae5609 instanceof MessagePort || _b6e5d5ae5609 instanceof Promise ? this.port = _b6e5d5ae5609 : this.createChannel(_b6e5d5ae5609, !0);
  }
  createChannel(_b6e5d5ae5609, _de963aa0d161) {
    if (self.clients) this.port = c(), this.channel.onmessage = _b6e5d5ae5609 => {
      "\x72\x65\x66\x72\x65\x73\x68\x50\x6f\x72\x74" === _b6e5d5ae5609.data.type && (this.port = c());
    }; else if (_b6e5d5ae5609 && SharedWorker) {
      if (!_b6e5d5ae5609.startsWith("\x2f") && !_b6e5d5ae5609.includes("\x3a")) throw new Error("\x49\x6e\x76\x61\x6c\x69\x64\x20\x55\x52\x4c\x2e\x20\x4d\x75\x73\x74\x20\x62\x65\x20\x61\x62\x73\x6f\x6c\x75\x74\x65\x20\x6f\x72\x20\x73\x74\x61\x72\x74\x20\x61\x74\x20\x74\x68\x65\x20\x72\x6f\x6f\x74\x2e");
      this.port = l(_b6e5d5ae5609, _de963aa0d161), console.debug("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x73\x65\x74\x74\x69\x6e\x67\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x20\x74\x6f", _b6e5d5ae5609), 
      _4933bf5bfe64["\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"] = _b6e5d5ae5609;
    } else {
      if (!SharedWorker) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x63\x68\x61\x6e\x6e\x65\x6c\x20\x74\x6f\x20\x74\x68\x65\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x2e");
      {
        const _b6e5d5ae5609 = _4933bf5bfe64["\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"];
        if (console.debug("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x67\x6f\x74\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x3a", _b6e5d5ae5609), !_b6e5d5ae5609) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x20\x77\x6f\x72\x6b\x65\x72\x50\x61\x74\x68\x20\x66\x72\x6f\x6d\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x2e");
        this.port = l(_b6e5d5ae5609, _de963aa0d161);
      }
    }
  }
  async sendMessage(_b6e5d5ae5609, _de963aa0d161) {
    this.port instanceof Promise && (this.port = await this.port);
    try {
      await i(this.port);
    } catch {
      return console.warn("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x70\x69\x6e\x67\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x66\x72\x6f\x6d\x20\x74\x68\x65\x20\x77\x6f\x72\x6b\x65\x72\x20\x77\x69\x74\x68\x69\x6e\x20\x35\x73\x2e\x20\x41\x73\x73\x75\x6d\x69\x6e\x67\x20\x70\x6f\x72\x74\x20\x69\x73\x20\x64\x65\x61\x64\x2e"), 
      this.createChannel(), await this.sendMessage(_b6e5d5ae5609, _de963aa0d161);
    }
    const _bd6975f04ea3 = new MessageChannel, _4933bf5bfe64 = [ _bd6975f04ea3.port2, ..._de963aa0d161 || [] ], _f2a11a70e1a5 = new Promise((_b6e5d5ae5609, _de963aa0d161) => {
      _bd6975f04ea3.port1.onmessage = _bd6975f04ea3 => {
        const _4933bf5bfe64 = _bd6975f04ea3.data;
        "\x65\x72\x72\x6f\x72" === _4933bf5bfe64.type ? _de963aa0d161(_4933bf5bfe64.error) : _b6e5d5ae5609(_4933bf5bfe64);
      };
    });
    return _b48710bf8340.call(this.port, {
      message: _b6e5d5ae5609,
      port: _bd6975f04ea3.port2
    }, _4933bf5bfe64), await _f2a11a70e1a5;
  }
}

class w extends EventTarget {
  protocols;
  url;
  readyState=_b789bda0eaae.CONNECTING;
  channel;
  constructor(_b6e5d5ae5609, _de963aa0d161 = [], _bd6975f04ea3, _4933bf5bfe64) {
    super(), this.protocols = _de963aa0d161, this.url = _b6e5d5ae5609.toString(), this.protocols = _de963aa0d161;
    const s = _b6e5d5ae5609 => {
      this.protocols = _b6e5d5ae5609, this.readyState = _b789bda0eaae.OPEN;
      const _de963aa0d161 = new Event("\x6f\x70\x65\x6e");
      this.dispatchEvent(_de963aa0d161);
    }, o = async _b6e5d5ae5609 => {
      const _de963aa0d161 = new MessageEvent("\x6d\x65\x73\x73\x61\x67\x65", {
        data: _b6e5d5ae5609
      });
      this.dispatchEvent(_de963aa0d161);
    }, c = (_b6e5d5ae5609, _de963aa0d161) => {
      this.readyState = _b789bda0eaae.CLOSED;
      const _bd6975f04ea3 = new CloseEvent("\x63\x6c\x6f\x73\x65", {
        code: _b6e5d5ae5609,
        reason: _de963aa0d161
      });
      this.dispatchEvent(_bd6975f04ea3);
    }, i = () => {
      this.readyState = _b789bda0eaae.CLOSED;
      const _b6e5d5ae5609 = new Event("\x65\x72\x72\x6f\x72");
      this.dispatchEvent(_b6e5d5ae5609);
    };
    this.channel = new MessageChannel, this.channel.port1.onmessage = _b6e5d5ae5609 => {
      "\x6f\x70\x65\x6e" === _b6e5d5ae5609.data.type ? s(_b6e5d5ae5609.data.args[0]) : "\x6d\x65\x73\x73\x61\x67\x65" === _b6e5d5ae5609.data.type ? o(_b6e5d5ae5609.data.args[0]) : "\x63\x6c\x6f\x73\x65" === _b6e5d5ae5609.data.type ? c(_b6e5d5ae5609.data.args[0], _b6e5d5ae5609.data.args[1]) : "\x65\x72\x72\x6f\x72" === _b6e5d5ae5609.data.type && i();
    }, _bd6975f04ea3.sendMessage({
      type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74",
      websocket: {
        url: _b6e5d5ae5609.toString(),
        protocols: _de963aa0d161,
        requestHeaders: _4933bf5bfe64,
        channel: this.channel.port2
      }
    }, [ this.channel.port2 ]);
  }
  send(..._b6e5d5ae5609) {
    if (this.readyState === _b789bda0eaae.CONNECTING) throw new DOMException("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x65\x78\x65\x63\x75\x74\x65\x20\x27\x73\x65\x6e\x64\x27\x20\x6f\x6e\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x53\x74\x69\x6c\x6c\x20\x69\x6e\x20\x43\x4f\x4e\x4e\x45\x43\x54\x49\x4e\x47\x20\x73\x74\x61\x74\x65\x2e");
    let _de963aa0d161 = _b6e5d5ae5609[0];
    _de963aa0d161.buffer && (_de963aa0d161 = _de963aa0d161.buffer.slice(_de963aa0d161.byteOffset, _de963aa0d161.byteOffset + _de963aa0d161.byteLength)), 
    _b48710bf8340.call(this.channel.port1, {
      type: "\x64\x61\x74\x61",
      data: _de963aa0d161
    }, _de963aa0d161 instanceof ArrayBuffer ? [ _de963aa0d161 ] : []);
  }
  close(_b6e5d5ae5609, _de963aa0d161) {
    _b48710bf8340.call(this.channel.port1, {
      type: "\x63\x6c\x6f\x73\x65",
      closeCode: _b6e5d5ae5609,
      closeReason: _de963aa0d161
    });
  }
}

function u(_b6e5d5ae5609, _de963aa0d161, _bd6975f04ea3) {
  console.error(`\x65\x72\x72\x6f\x72\x20\x77\x68\x69\x6c\x65\x20\x70\x72\x6f\x63\x65\x73\x73\x69\x6e\x67\x20\x27${_bd6975f04ea3}\x27\x3a\x20`, _de963aa0d161), _b6e5d5ae5609.postMessage({
    type: "\x65\x72\x72\x6f\x72",
    error: _de963aa0d161
  });
}

function f(_b6e5d5ae5609) {
  for (let _de963aa0d161 = 0; _de963aa0d161 < _b6e5d5ae5609.length; _de963aa0d161++) {
    const _bd6975f04ea3 = _b6e5d5ae5609[_de963aa0d161];
    if (!"\x21\x23\x24\x25\x26\x27\x2a\x2b\x2d\x2e\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x5e\x5f\x60\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x7c\x7e".includes(_bd6975f04ea3)) return !1;
  }
  return !0;
}

const _5317914fbd00 = [ "\x77\x73\x3a", "\x77\x73\x73\x3a" ], _785413c2af42 = [ 101, 204, 205, 304 ], _e82943ac9658 = [ 301, 302, 303, 307, 308 ];

class m {
  worker;
  constructor(_b6e5d5ae5609) {
    this.worker = new p(_b6e5d5ae5609);
  }
  async getTransport() {
    return (await this.worker.sendMessage({
      type: "\x67\x65\x74"
    })).name;
  }
  async setTransport(_b6e5d5ae5609, _de963aa0d161, _bd6975f04ea3) {
    await this.setManualTransport(`\x0a\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x7b\x20\x64\x65\x66\x61\x75\x6c\x74\x3a\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x7d\x20\x3d\x20\x61\x77\x61\x69\x74\x20\x69\x6d\x70\x6f\x72\x74\x28\x22${_b6e5d5ae5609}\x22\x29\x3b\x0a\x09\x09\x09\x72\x65\x74\x75\x72\x6e\x20\x5b\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2c\x20\x22${_b6e5d5ae5609}\x22\x5d\x3b\x0a\x09\x09`, _de963aa0d161, _bd6975f04ea3);
  }
  async setManualTransport(_b6e5d5ae5609, _de963aa0d161, _bd6975f04ea3) {
    if ("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65" === _b6e5d5ae5609) throw new Error("\x55\x73\x65\x20\x73\x65\x74\x52\x65\x6d\x6f\x74\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2e");
    await this.worker.sendMessage({
      type: "\x73\x65\x74",
      client: {
        function: _b6e5d5ae5609,
        args: _de963aa0d161
      }
    }, _bd6975f04ea3);
  }
  async setRemoteTransport(_b6e5d5ae5609, _de963aa0d161) {
    const _bd6975f04ea3 = new MessageChannel;
    _bd6975f04ea3.port1.onmessage = async _de963aa0d161 => {
      const _bd6975f04ea3 = _de963aa0d161.data.port, _4933bf5bfe64 = _de963aa0d161.data.message;
      if ("\x66\x65\x74\x63\x68" === _4933bf5bfe64.type) try {
        _b6e5d5ae5609.ready || await _b6e5d5ae5609.init(), await async function(_b6e5d5ae5609, _de963aa0d161, _bd6975f04ea3) {
          const _4933bf5bfe64 = await _bd6975f04ea3.request(new URL(_b6e5d5ae5609.fetch.remote), _b6e5d5ae5609.fetch.method, _b6e5d5ae5609.fetch.body, _b6e5d5ae5609.fetch.headers, null);
          if (!d() && _4933bf5bfe64.body instanceof ReadableStream) {
            const _b6e5d5ae5609 = new Response(_4933bf5bfe64.body);
            _4933bf5bfe64.body = await _b6e5d5ae5609.arrayBuffer();
          }
          _4933bf5bfe64.body instanceof ReadableStream || _4933bf5bfe64.body instanceof ArrayBuffer ? _b48710bf8340.call(_de963aa0d161, {
            type: "\x66\x65\x74\x63\x68",
            fetch: _4933bf5bfe64
          }, [ _4933bf5bfe64.body ]) : _b48710bf8340.call(_de963aa0d161, {
            type: "\x66\x65\x74\x63\x68",
            fetch: _4933bf5bfe64
          });
        }(_4933bf5bfe64, _bd6975f04ea3, _b6e5d5ae5609);
      } catch (_b6e5d5ae5609) {
        u(_bd6975f04ea3, _b6e5d5ae5609, "\x66\x65\x74\x63\x68");
      } else if ("\x77\x65\x62\x73\x6f\x63\x6b\x65\x74" === _4933bf5bfe64.type) try {
        _b6e5d5ae5609.ready || await _b6e5d5ae5609.init(), await async function(_b6e5d5ae5609, _de963aa0d161, _bd6975f04ea3) {
          const [_4933bf5bfe64, _f2a11a70e1a5] = _bd6975f04ea3.connect(new URL(_b6e5d5ae5609.websocket.url), _b6e5d5ae5609.websocket.protocols, _b6e5d5ae5609.websocket.requestHeaders, _de963aa0d161 => {
            _b48710bf8340.call(_b6e5d5ae5609.websocket.channel, {
              type: "\x6f\x70\x65\x6e",
              args: [ _de963aa0d161 ]
            });
          }, _de963aa0d161 => {
            _de963aa0d161 instanceof ArrayBuffer ? _b48710bf8340.call(_b6e5d5ae5609.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ _de963aa0d161 ]
            }, [ _de963aa0d161 ]) : _b48710bf8340.call(_b6e5d5ae5609.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ _de963aa0d161 ]
            });
          }, (_de963aa0d161, _bd6975f04ea3) => {
            _b48710bf8340.call(_b6e5d5ae5609.websocket.channel, {
              type: "\x63\x6c\x6f\x73\x65",
              args: [ _de963aa0d161, _bd6975f04ea3 ]
            });
          }, _de963aa0d161 => {
            _b48710bf8340.call(_b6e5d5ae5609.websocket.channel, {
              type: "\x65\x72\x72\x6f\x72",
              args: [ _de963aa0d161 ]
            });
          });
          _b6e5d5ae5609.websocket.channel.onmessage = _b6e5d5ae5609 => {
            "\x64\x61\x74\x61" === _b6e5d5ae5609.data.type ? _4933bf5bfe64(_b6e5d5ae5609.data.data) : "\x63\x6c\x6f\x73\x65" === _b6e5d5ae5609.data.type && _f2a11a70e1a5(_b6e5d5ae5609.data.closeCode, _b6e5d5ae5609.data.closeReason);
          }, _b48710bf8340.call(_de963aa0d161, {
            type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74"
          });
        }(_4933bf5bfe64, _bd6975f04ea3, _b6e5d5ae5609);
      } catch (_b6e5d5ae5609) {
        u(_bd6975f04ea3, _b6e5d5ae5609, "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74");
      }
    }, await this.worker.sendMessage({
      type: "\x73\x65\x74",
      client: {
        function: "\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65",
        args: [ _bd6975f04ea3.port2, _de963aa0d161 ]
      }
    }, [ _bd6975f04ea3.port2 ]);
  }
  getInnerPort() {
    return this.worker.port;
  }
}

class k {
  worker;
  constructor(_b6e5d5ae5609) {
    this.worker = new p(_b6e5d5ae5609);
  }
  createWebSocket(_b6e5d5ae5609, _de963aa0d161 = [], _bd6975f04ea3, _4933bf5bfe64) {
    try {
      _b6e5d5ae5609 = new URL(_b6e5d5ae5609);
    } catch (_de963aa0d161) {
      throw new DOMException(`\x46\x61\x69\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x20\x27${_b6e5d5ae5609}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
    }
    if (!_5317914fbd00.includes(_b6e5d5ae5609.protocol)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x27\x73\x20\x73\x63\x68\x65\x6d\x65\x20\x6d\x75\x73\x74\x20\x62\x65\x20\x65\x69\x74\x68\x65\x72\x20\x27\x77\x73\x27\x20\x6f\x72\x20\x27\x77\x73\x73\x27\x2e\x20\x27${_b6e5d5ae5609.protocol}\x27\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x6c\x6c\x6f\x77\x65\x64\x2e`);
    Array.isArray(_de963aa0d161) || (_de963aa0d161 = [ _de963aa0d161 ]), _de963aa0d161 = _de963aa0d161.map(String);
    for (const _b6e5d5ae5609 of _de963aa0d161) if (!f(_b6e5d5ae5609)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x73\x75\x62\x70\x72\x6f\x74\x6f\x63\x6f\x6c\x20\x27${_b6e5d5ae5609}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
    _4933bf5bfe64 = _4933bf5bfe64 || {};
    return new w(_b6e5d5ae5609, _de963aa0d161, this.worker, _4933bf5bfe64);
  }
  async fetch(_b6e5d5ae5609, _bd6975f04ea3) {
    const _4933bf5bfe64 = new Request(_b6e5d5ae5609, _bd6975f04ea3), _f2a11a70e1a5 = _bd6975f04ea3?.headers || _4933bf5bfe64.headers, _b48710bf8340 = _f2a11a70e1a5 instanceof Headers ? Object.fromEntries(_f2a11a70e1a5) : _f2a11a70e1a5, _b789bda0eaae = _4933bf5bfe64.body;
    let _b2775d17e70a = new URL(_4933bf5bfe64.url);
    if (_b2775d17e70a.protocol.startsWith("\x62\x6c\x6f\x62\x3a")) {
      const _b6e5d5ae5609 = await _de963aa0d161(_b2775d17e70a), _bd6975f04ea3 = new Response(_b6e5d5ae5609.body, _b6e5d5ae5609);
      return _bd6975f04ea3.rawHeaders = Object.fromEntries(_b6e5d5ae5609.headers), _bd6975f04ea3.rawResponse = {
        body: _b6e5d5ae5609.body,
        headers: Object.fromEntries(_b6e5d5ae5609.headers),
        status: _b6e5d5ae5609.status,
        statusText: _b6e5d5ae5609.statusText
      }, _bd6975f04ea3.finalURL = _b2775d17e70a.toString(), _bd6975f04ea3;
    }
    for (let _b6e5d5ae5609 = 0; ;_b6e5d5ae5609++) {
      let _de963aa0d161 = (await this.worker.sendMessage({
        type: "\x66\x65\x74\x63\x68",
        fetch: {
          remote: _b2775d17e70a.toString(),
          method: _4933bf5bfe64.method,
          headers: _b48710bf8340,
          body: _b789bda0eaae || void 0
        }
      }, _b789bda0eaae ? [ _b789bda0eaae ] : [])).fetch, _f2a11a70e1a5 = new Response(_785413c2af42.includes(_de963aa0d161.status) ? void 0 : _de963aa0d161.body, {
        headers: new Headers(_de963aa0d161.headers),
        status: _de963aa0d161.status,
        statusText: _de963aa0d161.statusText
      });
      _f2a11a70e1a5.rawHeaders = _de963aa0d161.headers, _f2a11a70e1a5.rawResponse = _de963aa0d161, 
      _f2a11a70e1a5.finalURL = _b2775d17e70a.toString();
      const _5317914fbd00 = _bd6975f04ea3?.redirect || _4933bf5bfe64.redirect;
      if (!_e82943ac9658.includes(_f2a11a70e1a5.status)) return _f2a11a70e1a5;
      switch (_5317914fbd00) {
       case "\x66\x6f\x6c\x6c\x6f\x77":
        {
          const _de963aa0d161 = _f2a11a70e1a5.headers.get("\x6c\x6f\x63\x61\x74\x69\x6f\x6e");
          if (20 > _b6e5d5ae5609 && null !== _de963aa0d161) {
            _b2775d17e70a = new URL(_de963aa0d161, _b2775d17e70a);
            continue;
          }
          throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");
        }

       case "\x65\x72\x72\x6f\x72":
        throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");

       case "\x6d\x61\x6e\x75\x61\x6c":
        return _f2a11a70e1a5;
      }
    }
  }
}

console.debug("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x72\x75\x6e\x6e\x69\x6e\x67\x20\x76\x32\x2e\x31\x2e\x39\x20\x28\x62\x75\x69\x6c\x64\x20\x64\x63\x39\x64\x63\x36\x65\x29");

export { k as BareClient, m as BookmuxConnection, w as BareWebSocket, _b789bda0eaae as WebSocketFields, p as WorkerConnection, d as \u{62}\u{72}\u{6f}\u{77}\u{73}\u{65}\u{72}\u{53}\u{75}\u{70}\u{70}\u{6f}\u{72}\u{74}\u{73}\u{54}\u{72}\u{61}\u{6e}\u{73}\u{66}\u{65}\u{72}\u{72}\u{69}\u{6e}\u{67}\u{53}\u{74}\u{72}\u{65}\u{61}\u{6d}\u{73}, k as default, _b6e5d5ae5609 as maxRedirects, f as validProtocol };
