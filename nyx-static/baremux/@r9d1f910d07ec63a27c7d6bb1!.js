const _cb60681634dd = 20, _eec9641d6a57 = globalThis.fetch, _9aef983707b0 = globalThis.SharedWorker, _9c0a4a4fca5a = globalThis.localStorage, _72c941a811be = globalThis.navigator.serviceWorker, _66f92e73ef7e = MessagePort.prototype.postMessage, _f25bb7e8ddc7 = {
  prototype: {
    send: WebSocket.prototype.send
  },
  CLOSED: WebSocket.CLOSED,
  CLOSING: WebSocket.CLOSING,
  CONNECTING: WebSocket.CONNECTING,
  OPEN: WebSocket.OPEN
};

async function c() {
  const _cb60681634dd = (await self.clients.matchAll({
    type: "\x77\x69\x6e\x64\x6f\x77",
    includeUncontrolled: !0
  })).filter(_cb60681634dd => {
    try {
      const _eec9641d6a57 = new URL(_cb60681634dd.url);
      return _eec9641d6a57.origin === self.location.origin && !_eec9641d6a57.pathname.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x73\x65\x72\x76\x69\x63\x65\x2f") && !_eec9641d6a57.pathname.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x7e\x2f\x73\x74\x75\x64\x79\x2f");
    } catch {
      return !1;
    }
  }).map(async _cb60681634dd => {
    const _eec9641d6a57 = await function(_cb60681634dd) {
      let _eec9641d6a57 = new MessageChannel;
      return new Promise(_9aef983707b0 => {
        _cb60681634dd.postMessage({
          type: "\x67\x65\x74\x50\x6f\x72\x74",
          port: _eec9641d6a57.port2
        }, [ _eec9641d6a57.port2 ]), _eec9641d6a57.port1.onmessage = _cb60681634dd => {
          _9aef983707b0(_cb60681634dd.data);
        };
      });
    }(_cb60681634dd);
    return await i(_eec9641d6a57), _eec9641d6a57;
  }), _eec9641d6a57 = Promise.race([ Promise.any(_cb60681634dd), new Promise((_cb60681634dd, _eec9641d6a57) => setTimeout(_eec9641d6a57, 5e3, new TypeError("\x74\x69\x6d\x65\x6f\x75\x74"))) ]);
  try {
    return await _eec9641d6a57;
  } catch (_cb60681634dd) {
    if (_cb60681634dd instanceof AggregateError) throw console.error("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x61\x73\x20\x61\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e"), 
    new Error("\x41\x6c\x6c\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x2e", {
      cause: _cb60681634dd
    });
    return console.warn("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x20\x4d\x65\x73\x73\x61\x67\x65\x50\x6f\x72\x74\x20\x77\x69\x74\x68\x69\x6e\x20\x35\x73\x2c\x20\x72\x65\x74\x72\x79\x69\x6e\x67"), 
    await c();
  }
}

function i(_cb60681634dd) {
  const _eec9641d6a57 = new MessageChannel, _9aef983707b0 = new Promise((_cb60681634dd, _9aef983707b0) => {
    _eec9641d6a57.port1.onmessage = _eec9641d6a57 => {
      "\x70\x6f\x6e\x67" === _eec9641d6a57.data.type && _cb60681634dd();
    }, setTimeout(_9aef983707b0, 5e3);
  });
  return _66f92e73ef7e.call(_cb60681634dd, {
    message: {
      type: "\x70\x69\x6e\x67"
    },
    port: _eec9641d6a57.port2
  }, [ _eec9641d6a57.port2 ]), _9aef983707b0;
}

function l(_cb60681634dd, _eec9641d6a57) {
  const _9c0a4a4fca5a = new _9aef983707b0(_cb60681634dd, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
  return _eec9641d6a57 && _72c941a811be.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", _eec9641d6a57 => {
    if ("\x67\x65\x74\x50\x6f\x72\x74" === _eec9641d6a57.data.type && _eec9641d6a57.data.port) {
      console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x72\x65\x63\x69\x65\x76\x65\x64\x20\x72\x65\x71\x75\x65\x73\x74\x20\x66\x6f\x72\x20\x70\x6f\x72\x74\x20\x66\x72\x6f\x6d\x20\x73\x77");
      const _9c0a4a4fca5a = new _9aef983707b0(_cb60681634dd, "\x72\x69\x64\x67\x65\x77\x6f\x6f\x64\x2d\x73\x74\x65\x6d\x2d\x77\x6f\x72\x6b\x65\x72");
      _66f92e73ef7e.call(_eec9641d6a57.data.port, _9c0a4a4fca5a.port, [ _9c0a4a4fca5a.port ]);
    }
  }), _9c0a4a4fca5a.port;
}

let _1920615631b4 = null;

function d() {
  if (null === _1920615631b4) {
    const _cb60681634dd = new MessageChannel, _eec9641d6a57 = new ReadableStream;
    let _9aef983707b0;
    try {
      _66f92e73ef7e.call(_cb60681634dd.port1, _eec9641d6a57, [ _eec9641d6a57 ]), _9aef983707b0 = !0;
    } catch (_cb60681634dd) {
      _9aef983707b0 = !1;
    }
    return _1920615631b4 = _9aef983707b0, _9aef983707b0;
  }
  return _1920615631b4;
}

class p {
  channel;
  port;
  workerPath;
  constructor(_cb60681634dd) {
    this.channel = new BroadcastChannel("\x62\x61\x72\x65\x2d\x6d\x75\x78"), _cb60681634dd instanceof MessagePort || _cb60681634dd instanceof Promise ? this.port = _cb60681634dd : this.createChannel(_cb60681634dd, !0);
  }
  createChannel(_cb60681634dd, _eec9641d6a57) {
    if (self.clients) this.port = c(), this.channel.onmessage = _cb60681634dd => {
      "\x72\x65\x66\x72\x65\x73\x68\x50\x6f\x72\x74" === _cb60681634dd.data.type && (this.port = c());
    }; else if (_cb60681634dd && SharedWorker) {
      if (!_cb60681634dd.startsWith("\x2f") && !_cb60681634dd.includes("\x3a")) throw new Error("\x49\x6e\x76\x61\x6c\x69\x64\x20\x55\x52\x4c\x2e\x20\x4d\x75\x73\x74\x20\x62\x65\x20\x61\x62\x73\x6f\x6c\x75\x74\x65\x20\x6f\x72\x20\x73\x74\x61\x72\x74\x20\x61\x74\x20\x74\x68\x65\x20\x72\x6f\x6f\x74\x2e");
      this.port = l(_cb60681634dd, _eec9641d6a57), console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x73\x65\x74\x74\x69\x6e\x67\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x20\x74\x6f", _cb60681634dd), 
      _9c0a4a4fca5a["\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"] = _cb60681634dd;
    } else {
      if (!SharedWorker) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x63\x68\x61\x6e\x6e\x65\x6c\x20\x74\x6f\x20\x74\x68\x65\x20\x53\x68\x61\x72\x65\x64\x57\x6f\x72\x6b\x65\x72\x2e");
      {
        const _cb60681634dd = _9c0a4a4fca5a["\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68"];
        if (console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x67\x6f\x74\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x70\x61\x74\x68\x3a", _cb60681634dd), !_cb60681634dd) throw new Error("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x62\x61\x72\x65\x2d\x6d\x75\x78\x20\x77\x6f\x72\x6b\x65\x72\x50\x61\x74\x68\x20\x66\x72\x6f\x6d\x20\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65\x2e");
        this.port = l(_cb60681634dd, _eec9641d6a57);
      }
    }
  }
  async sendMessage(_cb60681634dd, _eec9641d6a57) {
    this.port instanceof Promise && (this.port = await this.port);
    try {
      await i(this.port);
    } catch {
      return console.warn("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x67\x65\x74\x20\x61\x20\x70\x69\x6e\x67\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x66\x72\x6f\x6d\x20\x74\x68\x65\x20\x77\x6f\x72\x6b\x65\x72\x20\x77\x69\x74\x68\x69\x6e\x20\x35\x73\x2e\x20\x41\x73\x73\x75\x6d\x69\x6e\x67\x20\x70\x6f\x72\x74\x20\x69\x73\x20\x64\x65\x61\x64\x2e"), 
      this.createChannel(), await this.sendMessage(_cb60681634dd, _eec9641d6a57);
    }
    const _9aef983707b0 = new MessageChannel, _9c0a4a4fca5a = [ _9aef983707b0.port2, ..._eec9641d6a57 || [] ], _72c941a811be = new Promise((_cb60681634dd, _eec9641d6a57) => {
      _9aef983707b0.port1.onmessage = _9aef983707b0 => {
        const _9c0a4a4fca5a = _9aef983707b0.data;
        "\x65\x72\x72\x6f\x72" === _9c0a4a4fca5a.type ? _eec9641d6a57(_9c0a4a4fca5a.error) : _cb60681634dd(_9c0a4a4fca5a);
      };
    });
    return _66f92e73ef7e.call(this.port, {
      message: _cb60681634dd,
      port: _9aef983707b0.port2
    }, _9c0a4a4fca5a), await _72c941a811be;
  }
}

class w extends EventTarget {
  protocols;
  url;
  readyState=_f25bb7e8ddc7.CONNECTING;
  channel;
  constructor(_cb60681634dd, _eec9641d6a57 = [], _9aef983707b0, _9c0a4a4fca5a) {
    super(), this.protocols = _eec9641d6a57, this.url = _cb60681634dd.toString(), this.protocols = _eec9641d6a57;
    const s = _cb60681634dd => {
      this.protocols = _cb60681634dd, this.readyState = _f25bb7e8ddc7.OPEN;
      const _eec9641d6a57 = new Event("\x6f\x70\x65\x6e");
      this.dispatchEvent(_eec9641d6a57);
    }, o = async _cb60681634dd => {
      const _eec9641d6a57 = new MessageEvent("\x6d\x65\x73\x73\x61\x67\x65", {
        data: _cb60681634dd
      });
      this.dispatchEvent(_eec9641d6a57);
    }, c = (_cb60681634dd, _eec9641d6a57) => {
      this.readyState = _f25bb7e8ddc7.CLOSED;
      const _9aef983707b0 = new CloseEvent("\x63\x6c\x6f\x73\x65", {
        code: _cb60681634dd,
        reason: _eec9641d6a57
      });
      this.dispatchEvent(_9aef983707b0);
    }, i = () => {
      this.readyState = _f25bb7e8ddc7.CLOSED;
      const _cb60681634dd = new Event("\x65\x72\x72\x6f\x72");
      this.dispatchEvent(_cb60681634dd);
    };
    this.channel = new MessageChannel, this.channel.port1.onmessage = _cb60681634dd => {
      "\x6f\x70\x65\x6e" === _cb60681634dd.data.type ? s(_cb60681634dd.data.args[0]) : "\x6d\x65\x73\x73\x61\x67\x65" === _cb60681634dd.data.type ? o(_cb60681634dd.data.args[0]) : "\x63\x6c\x6f\x73\x65" === _cb60681634dd.data.type ? c(_cb60681634dd.data.args[0], _cb60681634dd.data.args[1]) : "\x65\x72\x72\x6f\x72" === _cb60681634dd.data.type && i();
    }, _9aef983707b0.sendMessage({
      type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74",
      websocket: {
        url: _cb60681634dd.toString(),
        protocols: _eec9641d6a57,
        requestHeaders: _9c0a4a4fca5a,
        channel: this.channel.port2
      }
    }, [ this.channel.port2 ]);
  }
  send(..._cb60681634dd) {
    if (this.readyState === _f25bb7e8ddc7.CONNECTING) throw new DOMException("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x65\x78\x65\x63\x75\x74\x65\x20\x27\x73\x65\x6e\x64\x27\x20\x6f\x6e\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x53\x74\x69\x6c\x6c\x20\x69\x6e\x20\x43\x4f\x4e\x4e\x45\x43\x54\x49\x4e\x47\x20\x73\x74\x61\x74\x65\x2e");
    let _eec9641d6a57 = _cb60681634dd[0];
    _eec9641d6a57.buffer && (_eec9641d6a57 = _eec9641d6a57.buffer.slice(_eec9641d6a57.byteOffset, _eec9641d6a57.byteOffset + _eec9641d6a57.byteLength)), 
    _66f92e73ef7e.call(this.channel.port1, {
      type: "\x64\x61\x74\x61",
      data: _eec9641d6a57
    }, _eec9641d6a57 instanceof ArrayBuffer ? [ _eec9641d6a57 ] : []);
  }
  close(_cb60681634dd, _eec9641d6a57) {
    _66f92e73ef7e.call(this.channel.port1, {
      type: "\x63\x6c\x6f\x73\x65",
      closeCode: _cb60681634dd,
      closeReason: _eec9641d6a57
    });
  }
}

function u(_cb60681634dd, _eec9641d6a57, _9aef983707b0) {
  console.error(`\x65\x72\x72\x6f\x72\x20\x77\x68\x69\x6c\x65\x20\x70\x72\x6f\x63\x65\x73\x73\x69\x6e\x67\x20\x27${_9aef983707b0}\x27\x3a\x20`, _eec9641d6a57), _cb60681634dd.postMessage({
    type: "\x65\x72\x72\x6f\x72",
    error: _eec9641d6a57
  });
}

function f(_cb60681634dd) {
  for (let _eec9641d6a57 = 0; _eec9641d6a57 < _cb60681634dd.length; _eec9641d6a57++) {
    const _9aef983707b0 = _cb60681634dd[_eec9641d6a57];
    if (!"\x21\x23\x24\x25\x26\x27\x2a\x2b\x2d\x2e\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x5e\x5f\x60\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x7c\x7e".includes(_9aef983707b0)) return !1;
  }
  return !0;
}

const _839010359f59 = [ "\x77\x73\x3a", "\x77\x73\x73\x3a" ], _0ed729414f44 = [ 101, 204, 205, 304 ], _76119d49911f = [ 301, 302, 303, 307, 308 ];

class m {
  worker;
  constructor(_cb60681634dd) {
    this.worker = new p(_cb60681634dd);
  }
  async getTransport() {
    return (await this.worker.sendMessage({
      type: "\x67\x65\x74"
    })).name;
  }
  async setTransport(_cb60681634dd, _eec9641d6a57, _9aef983707b0) {
    await this.setManualTransport(`\x0a\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x7b\x20\x64\x65\x66\x61\x75\x6c\x74\x3a\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x7d\x20\x3d\x20\x61\x77\x61\x69\x74\x20\x69\x6d\x70\x6f\x72\x74\x28\x22${_cb60681634dd}\x22\x29\x3b\x0a\x09\x09\x09\x72\x65\x74\x75\x72\x6e\x20\x5b\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2c\x20\x22${_cb60681634dd}\x22\x5d\x3b\x0a\x09\x09`, _eec9641d6a57, _9aef983707b0);
  }
  async setManualTransport(_cb60681634dd, _eec9641d6a57, _9aef983707b0) {
    if ("\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65" === _cb60681634dd) throw new Error("\x55\x73\x65\x20\x73\x65\x74\x52\x65\x6d\x6f\x74\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x2e");
    await this.worker.sendMessage({
      type: "\x73\x65\x74",
      client: {
        function: _cb60681634dd,
        args: _eec9641d6a57
      }
    }, _9aef983707b0);
  }
  async setRemoteTransport(_cb60681634dd, _eec9641d6a57) {
    const _9aef983707b0 = new MessageChannel;
    _9aef983707b0.port1.onmessage = async _eec9641d6a57 => {
      const _9aef983707b0 = _eec9641d6a57.data.port, _9c0a4a4fca5a = _eec9641d6a57.data.message;
      if ("\x66\x65\x74\x63\x68" === _9c0a4a4fca5a.type) try {
        _cb60681634dd.ready || await _cb60681634dd.init(), await async function(_cb60681634dd, _eec9641d6a57, _9aef983707b0) {
          const _9c0a4a4fca5a = await _9aef983707b0.request(new URL(_cb60681634dd.fetch.remote), _cb60681634dd.fetch.method, _cb60681634dd.fetch.body, _cb60681634dd.fetch.headers, null);
          if (!d() && _9c0a4a4fca5a.body instanceof ReadableStream) {
            const _cb60681634dd = new Response(_9c0a4a4fca5a.body);
            _9c0a4a4fca5a.body = await _cb60681634dd.arrayBuffer();
          }
          _9c0a4a4fca5a.body instanceof ReadableStream || _9c0a4a4fca5a.body instanceof ArrayBuffer ? _66f92e73ef7e.call(_eec9641d6a57, {
            type: "\x66\x65\x74\x63\x68",
            fetch: _9c0a4a4fca5a
          }, [ _9c0a4a4fca5a.body ]) : _66f92e73ef7e.call(_eec9641d6a57, {
            type: "\x66\x65\x74\x63\x68",
            fetch: _9c0a4a4fca5a
          });
        }(_9c0a4a4fca5a, _9aef983707b0, _cb60681634dd);
      } catch (_cb60681634dd) {
        u(_9aef983707b0, _cb60681634dd, "\x66\x65\x74\x63\x68");
      } else if ("\x77\x65\x62\x73\x6f\x63\x6b\x65\x74" === _9c0a4a4fca5a.type) try {
        _cb60681634dd.ready || await _cb60681634dd.init(), await async function(_cb60681634dd, _eec9641d6a57, _9aef983707b0) {
          const [_9c0a4a4fca5a, _72c941a811be] = _9aef983707b0.connect(new URL(_cb60681634dd.websocket.url), _cb60681634dd.websocket.protocols, _cb60681634dd.websocket.requestHeaders, _eec9641d6a57 => {
            _66f92e73ef7e.call(_cb60681634dd.websocket.channel, {
              type: "\x6f\x70\x65\x6e",
              args: [ _eec9641d6a57 ]
            });
          }, _eec9641d6a57 => {
            _eec9641d6a57 instanceof ArrayBuffer ? _66f92e73ef7e.call(_cb60681634dd.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ _eec9641d6a57 ]
            }, [ _eec9641d6a57 ]) : _66f92e73ef7e.call(_cb60681634dd.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ _eec9641d6a57 ]
            });
          }, (_eec9641d6a57, _9aef983707b0) => {
            _66f92e73ef7e.call(_cb60681634dd.websocket.channel, {
              type: "\x63\x6c\x6f\x73\x65",
              args: [ _eec9641d6a57, _9aef983707b0 ]
            });
          }, _eec9641d6a57 => {
            _66f92e73ef7e.call(_cb60681634dd.websocket.channel, {
              type: "\x65\x72\x72\x6f\x72",
              args: [ _eec9641d6a57 ]
            });
          });
          _cb60681634dd.websocket.channel.onmessage = _cb60681634dd => {
            "\x64\x61\x74\x61" === _cb60681634dd.data.type ? _9c0a4a4fca5a(_cb60681634dd.data.data) : "\x63\x6c\x6f\x73\x65" === _cb60681634dd.data.type && _72c941a811be(_cb60681634dd.data.closeCode, _cb60681634dd.data.closeReason);
          }, _66f92e73ef7e.call(_eec9641d6a57, {
            type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74"
          });
        }(_9c0a4a4fca5a, _9aef983707b0, _cb60681634dd);
      } catch (_cb60681634dd) {
        u(_9aef983707b0, _cb60681634dd, "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74");
      }
    }, await this.worker.sendMessage({
      type: "\x73\x65\x74",
      client: {
        function: "\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65",
        args: [ _9aef983707b0.port2, _eec9641d6a57 ]
      }
    }, [ _9aef983707b0.port2 ]);
  }
  getInnerPort() {
    return this.worker.port;
  }
}

class k {
  worker;
  constructor(_cb60681634dd) {
    this.worker = new p(_cb60681634dd);
  }
  createWebSocket(_cb60681634dd, _eec9641d6a57 = [], _9aef983707b0, _9c0a4a4fca5a) {
    try {
      _cb60681634dd = new URL(_cb60681634dd);
    } catch (_eec9641d6a57) {
      throw new DOMException(`\x46\x61\x69\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x20\x27${_cb60681634dd}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
    }
    if (!_839010359f59.includes(_cb60681634dd.protocol)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x55\x52\x4c\x27\x73\x20\x73\x63\x68\x65\x6d\x65\x20\x6d\x75\x73\x74\x20\x62\x65\x20\x65\x69\x74\x68\x65\x72\x20\x27\x77\x73\x27\x20\x6f\x72\x20\x27\x77\x73\x73\x27\x2e\x20\x27${_cb60681634dd.protocol}\x27\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x6c\x6c\x6f\x77\x65\x64\x2e`);
    Array.isArray(_eec9641d6a57) || (_eec9641d6a57 = [ _eec9641d6a57 ]), _eec9641d6a57 = _eec9641d6a57.map(String);
    for (const _cb60681634dd of _eec9641d6a57) if (!f(_cb60681634dd)) throw new DOMException(`\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x20\x27\x57\x65\x62\x53\x6f\x63\x6b\x65\x74\x27\x3a\x20\x54\x68\x65\x20\x73\x75\x62\x70\x72\x6f\x74\x6f\x63\x6f\x6c\x20\x27${_cb60681634dd}\x27\x20\x69\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e`);
    _9c0a4a4fca5a = _9c0a4a4fca5a || {};
    return new w(_cb60681634dd, _eec9641d6a57, this.worker, _9c0a4a4fca5a);
  }
  async fetch(_cb60681634dd, _9aef983707b0) {
    const _9c0a4a4fca5a = new Request(_cb60681634dd, _9aef983707b0), _72c941a811be = _9aef983707b0?.headers || _9c0a4a4fca5a.headers, _66f92e73ef7e = _72c941a811be instanceof Headers ? Object.fromEntries(_72c941a811be) : _72c941a811be, _f25bb7e8ddc7 = _9c0a4a4fca5a.body;
    let _1920615631b4 = new URL(_9c0a4a4fca5a.url);
    if (_1920615631b4.protocol.startsWith("\x62\x6c\x6f\x62\x3a")) {
      const _cb60681634dd = await _eec9641d6a57(_1920615631b4), _9aef983707b0 = new Response(_cb60681634dd.body, _cb60681634dd);
      return _9aef983707b0.rawHeaders = Object.fromEntries(_cb60681634dd.headers), _9aef983707b0.rawResponse = {
        body: _cb60681634dd.body,
        headers: Object.fromEntries(_cb60681634dd.headers),
        status: _cb60681634dd.status,
        statusText: _cb60681634dd.statusText
      }, _9aef983707b0.finalURL = _1920615631b4.toString(), _9aef983707b0;
    }
    for (let _cb60681634dd = 0; ;_cb60681634dd++) {
      let _eec9641d6a57 = (await this.worker.sendMessage({
        type: "\x66\x65\x74\x63\x68",
        fetch: {
          remote: _1920615631b4.toString(),
          method: _9c0a4a4fca5a.method,
          headers: _66f92e73ef7e,
          body: _f25bb7e8ddc7 || void 0
        }
      }, _f25bb7e8ddc7 ? [ _f25bb7e8ddc7 ] : [])).fetch, _72c941a811be = new Response(_0ed729414f44.includes(_eec9641d6a57.status) ? void 0 : _eec9641d6a57.body, {
        headers: new Headers(_eec9641d6a57.headers),
        status: _eec9641d6a57.status,
        statusText: _eec9641d6a57.statusText
      });
      _72c941a811be.rawHeaders = _eec9641d6a57.headers, _72c941a811be.rawResponse = _eec9641d6a57, 
      _72c941a811be.finalURL = _1920615631b4.toString();
      const _839010359f59 = _9aef983707b0?.redirect || _9c0a4a4fca5a.redirect;
      if (!_76119d49911f.includes(_72c941a811be.status)) return _72c941a811be;
      switch (_839010359f59) {
       case "\x66\x6f\x6c\x6c\x6f\x77":
        {
          const _eec9641d6a57 = _72c941a811be.headers.get("\x6c\x6f\x63\x61\x74\x69\x6f\x6e");
          if (20 > _cb60681634dd && null !== _eec9641d6a57) {
            _1920615631b4 = new URL(_eec9641d6a57, _1920615631b4);
            continue;
          }
          throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");
        }

       case "\x65\x72\x72\x6f\x72":
        throw new TypeError("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x66\x65\x74\x63\x68");

       case "\x6d\x61\x6e\x75\x61\x6c":
        return _72c941a811be;
      }
    }
  }
}

console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x72\x75\x6e\x6e\x69\x6e\x67\x20\x76\x32\x2e\x31\x2e\x39\x20\x28\x62\x75\x69\x6c\x64\x20\x64\x63\x39\x64\x63\x36\x65\x29");

export { k as BareClient, m as \u{42}\u{61}\u{72}\u{65}\u{4d}\u{75}\u{78}\u{43}\u{6f}\u{6e}\u{6e}\u{65}\u{63}\u{74}\u{69}\u{6f}\u{6e}, w as BareWebSocket, _f25bb7e8ddc7 as WebSocketFields, p as WorkerConnection, d as \u{62}\u{72}\u{6f}\u{77}\u{73}\u{65}\u{72}\u{53}\u{75}\u{70}\u{70}\u{6f}\u{72}\u{74}\u{73}\u{54}\u{72}\u{61}\u{6e}\u{73}\u{66}\u{65}\u{72}\u{72}\u{69}\u{6e}\u{67}\u{53}\u{74}\u{72}\u{65}\u{61}\u{6d}\u{73}, k as default, _cb60681634dd as maxRedirects, f as validProtocol };
