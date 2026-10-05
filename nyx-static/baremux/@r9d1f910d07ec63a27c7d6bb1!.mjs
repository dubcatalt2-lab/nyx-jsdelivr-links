const _ca37415e10bc = 20, _30581984dff0 = globalThis.fetch, _dc5adb7a56fd = globalThis.SharedWorker, _62deff491432 = globalThis.localStorage, _fc6ac348d02f = globalThis.navigator.serviceWorker, _112582c4a110 = MessagePort.prototype.postMessage, _b2caa3ef3a49 = {
  prototype: {
    send: WebSocket.prototype.send
  },
  CLOSED: WebSocket.CLOSED,
  CLOSING: WebSocket.CLOSING,
  CONNECTING: WebSocket.CONNECTING,
  OPEN: WebSocket.OPEN
};

async function c() {
  const _ca37415e10bc = (await self.clients.matchAll({
    type: "window",
    includeUncontrolled: !0
  })).filter(_ca37415e10bc => {
    try {
      const _30581984dff0 = new URL(_ca37415e10bc.url);
      return _30581984dff0.origin === self.location.origin && !_30581984dff0.pathname.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/") && !_30581984dff0.pathname.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/study/");
    } catch {
      return !1;
    }
  }).map(async _ca37415e10bc => {
    const _30581984dff0 = await function(_ca37415e10bc) {
      let _30581984dff0 = new MessageChannel;
      return new Promise(_dc5adb7a56fd => {
        _ca37415e10bc.postMessage({
          type: "getPort",
          port: _30581984dff0.port2
        }, [ _30581984dff0.port2 ]), _30581984dff0.port1.onmessage = _ca37415e10bc => {
          _dc5adb7a56fd(_ca37415e10bc.data);
        };
      });
    }(_ca37415e10bc);
    return await i(_30581984dff0), _30581984dff0;
  }), _30581984dff0 = Promise.race([ Promise.any(_ca37415e10bc), new Promise((_ca37415e10bc, _30581984dff0) => setTimeout(_30581984dff0, 5e3, new TypeError("timeout"))) ]);
  try {
    return await _30581984dff0;
  } catch (_ca37415e10bc) {
    if (_ca37415e10bc instanceof AggregateError) throw console.error("bare-mux: failed to get a bare-mux SharedWorker MessagePort as all clients returned an invalid MessagePort."), 
    new Error("All clients returned an invalid MessagePort.", {
      cause: _ca37415e10bc
    });
    return console.warn("bare-mux: failed to get a bare-mux SharedWorker MessagePort within 5s, retrying"), 
    await c();
  }
}

function i(_ca37415e10bc) {
  const _30581984dff0 = new MessageChannel, _dc5adb7a56fd = new Promise((_ca37415e10bc, _dc5adb7a56fd) => {
    _30581984dff0.port1.onmessage = _30581984dff0 => {
      "pong" === _30581984dff0.data.type && _ca37415e10bc();
    }, setTimeout(_dc5adb7a56fd, 5e3);
  });
  return _112582c4a110.call(_ca37415e10bc, {
    message: {
      type: "ping"
    },
    port: _30581984dff0.port2
  }, [ _30581984dff0.port2 ]), _dc5adb7a56fd;
}

function l(_ca37415e10bc, _30581984dff0) {
  const _62deff491432 = new _dc5adb7a56fd(_ca37415e10bc, "ridgewood-stem-worker");
  return _30581984dff0 && _fc6ac348d02f.addEventListener("message", _30581984dff0 => {
    if ("getPort" === _30581984dff0.data.type && _30581984dff0.data.port) {
      console.debug("bare-mux: recieved request for port from sw");
      const _62deff491432 = new _dc5adb7a56fd(_ca37415e10bc, "ridgewood-stem-worker");
      _112582c4a110.call(_30581984dff0.data.port, _62deff491432.port, [ _62deff491432.port ]);
    }
  }), _62deff491432.port;
}

let _c0399aecd47b = null;

function d() {
  if (null === _c0399aecd47b) {
    const _ca37415e10bc = new MessageChannel, _30581984dff0 = new ReadableStream;
    let _dc5adb7a56fd;
    try {
      _112582c4a110.call(_ca37415e10bc.port1, _30581984dff0, [ _30581984dff0 ]), _dc5adb7a56fd = !0;
    } catch (_ca37415e10bc) {
      _dc5adb7a56fd = !1;
    }
    return _c0399aecd47b = _dc5adb7a56fd, _dc5adb7a56fd;
  }
  return _c0399aecd47b;
}

class p {
  channel;
  port;
  workerPath;
  constructor(_ca37415e10bc) {
    this.channel = new BroadcastChannel("bare-mux"), _ca37415e10bc instanceof MessagePort || _ca37415e10bc instanceof Promise ? this.port = _ca37415e10bc : this.createChannel(_ca37415e10bc, !0);
  }
  createChannel(_ca37415e10bc, _30581984dff0) {
    if (self.clients) this.port = c(), this.channel.onmessage = _ca37415e10bc => {
      "refreshPort" === _ca37415e10bc.data.type && (this.port = c());
    }; else if (_ca37415e10bc && SharedWorker) {
      if (!_ca37415e10bc.startsWith("/") && !_ca37415e10bc.includes(":")) throw new Error("Invalid URL. Must be absolute or start at the root.");
      this.port = l(_ca37415e10bc, _30581984dff0), console.debug("bare-mux: setting localStorage bare-mux-path to", _ca37415e10bc), 
      _62deff491432["bare-mux-path"] = _ca37415e10bc;
    } else {
      if (!SharedWorker) throw new Error("Unable to get a channel to the SharedWorker.");
      {
        const _ca37415e10bc = _62deff491432["bare-mux-path"];
        if (console.debug("bare-mux: got localStorage bare-mux-path:", _ca37415e10bc), !_ca37415e10bc) throw new Error("Unable to get bare-mux workerPath from localStorage.");
        this.port = l(_ca37415e10bc, _30581984dff0);
      }
    }
  }
  async sendMessage(_ca37415e10bc, _30581984dff0) {
    this.port instanceof Promise && (this.port = await this.port);
    try {
      await i(this.port);
    } catch {
      return console.warn("bare-mux: Failed to get a ping response from the worker within 5s. Assuming port is dead."), 
      this.createChannel(), await this.sendMessage(_ca37415e10bc, _30581984dff0);
    }
    const _dc5adb7a56fd = new MessageChannel, _62deff491432 = [ _dc5adb7a56fd.port2, ..._30581984dff0 || [] ], _fc6ac348d02f = new Promise((_ca37415e10bc, _30581984dff0) => {
      _dc5adb7a56fd.port1.onmessage = _dc5adb7a56fd => {
        const _62deff491432 = _dc5adb7a56fd.data;
        "error" === _62deff491432.type ? _30581984dff0(_62deff491432.error) : _ca37415e10bc(_62deff491432);
      };
    });
    return _112582c4a110.call(this.port, {
      message: _ca37415e10bc,
      port: _dc5adb7a56fd.port2
    }, _62deff491432), await _fc6ac348d02f;
  }
}

class w extends EventTarget {
  protocols;
  url;
  readyState=_b2caa3ef3a49.CONNECTING;
  channel;
  constructor(_ca37415e10bc, _30581984dff0 = [], _dc5adb7a56fd, _62deff491432) {
    super(), this.protocols = _30581984dff0, this.url = _ca37415e10bc.toString(), this.protocols = _30581984dff0;
    const s = _ca37415e10bc => {
      this.protocols = _ca37415e10bc, this.readyState = _b2caa3ef3a49.OPEN;
      const _30581984dff0 = new Event("open");
      this.dispatchEvent(_30581984dff0);
    }, o = async _ca37415e10bc => {
      const _30581984dff0 = new MessageEvent("message", {
        data: _ca37415e10bc
      });
      this.dispatchEvent(_30581984dff0);
    }, c = (_ca37415e10bc, _30581984dff0) => {
      this.readyState = _b2caa3ef3a49.CLOSED;
      const _dc5adb7a56fd = new CloseEvent("close", {
        code: _ca37415e10bc,
        reason: _30581984dff0
      });
      this.dispatchEvent(_dc5adb7a56fd);
    }, i = () => {
      this.readyState = _b2caa3ef3a49.CLOSED;
      const _ca37415e10bc = new Event("error");
      this.dispatchEvent(_ca37415e10bc);
    };
    this.channel = new MessageChannel, this.channel.port1.onmessage = _ca37415e10bc => {
      "open" === _ca37415e10bc.data.type ? s(_ca37415e10bc.data.args[0]) : "message" === _ca37415e10bc.data.type ? o(_ca37415e10bc.data.args[0]) : "close" === _ca37415e10bc.data.type ? c(_ca37415e10bc.data.args[0], _ca37415e10bc.data.args[1]) : "error" === _ca37415e10bc.data.type && i();
    }, _dc5adb7a56fd.sendMessage({
      type: "websocket",
      websocket: {
        url: _ca37415e10bc.toString(),
        protocols: _30581984dff0,
        requestHeaders: _62deff491432,
        channel: this.channel.port2
      }
    }, [ this.channel.port2 ]);
  }
  send(..._ca37415e10bc) {
    if (this.readyState === _b2caa3ef3a49.CONNECTING) throw new DOMException("Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.");
    let _30581984dff0 = _ca37415e10bc[0];
    _30581984dff0.buffer && (_30581984dff0 = _30581984dff0.buffer.slice(_30581984dff0.byteOffset, _30581984dff0.byteOffset + _30581984dff0.byteLength)), 
    _112582c4a110.call(this.channel.port1, {
      type: "data",
      data: _30581984dff0
    }, _30581984dff0 instanceof ArrayBuffer ? [ _30581984dff0 ] : []);
  }
  close(_ca37415e10bc, _30581984dff0) {
    _112582c4a110.call(this.channel.port1, {
      type: "close",
      closeCode: _ca37415e10bc,
      closeReason: _30581984dff0
    });
  }
}

function u(_ca37415e10bc, _30581984dff0, _dc5adb7a56fd) {
  console.error(`error while processing '${_dc5adb7a56fd}': `, _30581984dff0), _ca37415e10bc.postMessage({
    type: "error",
    error: _30581984dff0
  });
}

function f(_ca37415e10bc) {
  for (let _30581984dff0 = 0; _30581984dff0 < _ca37415e10bc.length; _30581984dff0++) {
    const _dc5adb7a56fd = _ca37415e10bc[_30581984dff0];
    if (!"!#$%&'*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz|~".includes(_dc5adb7a56fd)) return !1;
  }
  return !0;
}

const _fb7f6dfe58ae = [ "ws:", "wss:" ], _2141ce1010c7 = [ 101, 204, 205, 304 ], _22d75c791eaa = [ 301, 302, 303, 307, 308 ];

class m {
  worker;
  constructor(_ca37415e10bc) {
    this.worker = new p(_ca37415e10bc);
  }
  async getTransport() {
    return (await this.worker.sendMessage({
      type: "get"
    })).name;
  }
  async setTransport(_ca37415e10bc, _30581984dff0, _dc5adb7a56fd) {
    await this.setManualTransport(`\n\t\t\tconst { default: BareTransport } = await import("${_ca37415e10bc}");\n\t\t\treturn [BareTransport, "${_ca37415e10bc}"];\n\t\t`, _30581984dff0, _dc5adb7a56fd);
  }
  async setManualTransport(_ca37415e10bc, _30581984dff0, _dc5adb7a56fd) {
    if ("bare-mux-remote" === _ca37415e10bc) throw new Error("Use setRemoteTransport.");
    await this.worker.sendMessage({
      type: "set",
      client: {
        function: _ca37415e10bc,
        args: _30581984dff0
      }
    }, _dc5adb7a56fd);
  }
  async setRemoteTransport(_ca37415e10bc, _30581984dff0) {
    const _dc5adb7a56fd = new MessageChannel;
    _dc5adb7a56fd.port1.onmessage = async _30581984dff0 => {
      const _dc5adb7a56fd = _30581984dff0.data.port, _62deff491432 = _30581984dff0.data.message;
      if ("fetch" === _62deff491432.type) try {
        _ca37415e10bc.ready || await _ca37415e10bc.init(), await async function(_ca37415e10bc, _30581984dff0, _dc5adb7a56fd) {
          const _62deff491432 = await _dc5adb7a56fd.request(new URL(_ca37415e10bc.fetch.remote), _ca37415e10bc.fetch.method, _ca37415e10bc.fetch.body, _ca37415e10bc.fetch.headers, null);
          if (!d() && _62deff491432.body instanceof ReadableStream) {
            const _ca37415e10bc = new Response(_62deff491432.body);
            _62deff491432.body = await _ca37415e10bc.arrayBuffer();
          }
          _62deff491432.body instanceof ReadableStream || _62deff491432.body instanceof ArrayBuffer ? _112582c4a110.call(_30581984dff0, {
            type: "fetch",
            fetch: _62deff491432
          }, [ _62deff491432.body ]) : _112582c4a110.call(_30581984dff0, {
            type: "fetch",
            fetch: _62deff491432
          });
        }(_62deff491432, _dc5adb7a56fd, _ca37415e10bc);
      } catch (_ca37415e10bc) {
        u(_dc5adb7a56fd, _ca37415e10bc, "fetch");
      } else if ("websocket" === _62deff491432.type) try {
        _ca37415e10bc.ready || await _ca37415e10bc.init(), await async function(_ca37415e10bc, _30581984dff0, _dc5adb7a56fd) {
          const [_62deff491432, _fc6ac348d02f] = _dc5adb7a56fd.connect(new URL(_ca37415e10bc.websocket.url), _ca37415e10bc.websocket.protocols, _ca37415e10bc.websocket.requestHeaders, _30581984dff0 => {
            _112582c4a110.call(_ca37415e10bc.websocket.channel, {
              type: "open",
              args: [ _30581984dff0 ]
            });
          }, _30581984dff0 => {
            _30581984dff0 instanceof ArrayBuffer ? _112582c4a110.call(_ca37415e10bc.websocket.channel, {
              type: "message",
              args: [ _30581984dff0 ]
            }, [ _30581984dff0 ]) : _112582c4a110.call(_ca37415e10bc.websocket.channel, {
              type: "message",
              args: [ _30581984dff0 ]
            });
          }, (_30581984dff0, _dc5adb7a56fd) => {
            _112582c4a110.call(_ca37415e10bc.websocket.channel, {
              type: "close",
              args: [ _30581984dff0, _dc5adb7a56fd ]
            });
          }, _30581984dff0 => {
            _112582c4a110.call(_ca37415e10bc.websocket.channel, {
              type: "error",
              args: [ _30581984dff0 ]
            });
          });
          _ca37415e10bc.websocket.channel.onmessage = _ca37415e10bc => {
            "data" === _ca37415e10bc.data.type ? _62deff491432(_ca37415e10bc.data.data) : "close" === _ca37415e10bc.data.type && _fc6ac348d02f(_ca37415e10bc.data.closeCode, _ca37415e10bc.data.closeReason);
          }, _112582c4a110.call(_30581984dff0, {
            type: "websocket"
          });
        }(_62deff491432, _dc5adb7a56fd, _ca37415e10bc);
      } catch (_ca37415e10bc) {
        u(_dc5adb7a56fd, _ca37415e10bc, "websocket");
      }
    }, await this.worker.sendMessage({
      type: "set",
      client: {
        function: "bare-mux-remote",
        args: [ _dc5adb7a56fd.port2, _30581984dff0 ]
      }
    }, [ _dc5adb7a56fd.port2 ]);
  }
  getInnerPort() {
    return this.worker.port;
  }
}

class k {
  worker;
  constructor(_ca37415e10bc) {
    this.worker = new p(_ca37415e10bc);
  }
  createWebSocket(_ca37415e10bc, _30581984dff0 = [], _dc5adb7a56fd, _62deff491432) {
    try {
      _ca37415e10bc = new URL(_ca37415e10bc);
    } catch (_30581984dff0) {
      throw new DOMException(`Faiiled to construct 'WebSocket': The URL '${_ca37415e10bc}' is invalid.`);
    }
    if (!_fb7f6dfe58ae.includes(_ca37415e10bc.protocol)) throw new DOMException(`Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '${_ca37415e10bc.protocol}' is not allowed.`);
    Array.isArray(_30581984dff0) || (_30581984dff0 = [ _30581984dff0 ]), _30581984dff0 = _30581984dff0.map(String);
    for (const _ca37415e10bc of _30581984dff0) if (!f(_ca37415e10bc)) throw new DOMException(`Failed to construct 'WebSocket': The subprotocol '${_ca37415e10bc}' is invalid.`);
    _62deff491432 = _62deff491432 || {};
    return new w(_ca37415e10bc, _30581984dff0, this.worker, _62deff491432);
  }
  async fetch(_ca37415e10bc, _dc5adb7a56fd) {
    const _62deff491432 = new Request(_ca37415e10bc, _dc5adb7a56fd), _fc6ac348d02f = _dc5adb7a56fd?.headers || _62deff491432.headers, _112582c4a110 = _fc6ac348d02f instanceof Headers ? Object.fromEntries(_fc6ac348d02f) : _fc6ac348d02f, _b2caa3ef3a49 = _62deff491432.body;
    let _c0399aecd47b = new URL(_62deff491432.url);
    if (_c0399aecd47b.protocol.startsWith("blob:")) {
      const _ca37415e10bc = await _30581984dff0(_c0399aecd47b), _dc5adb7a56fd = new Response(_ca37415e10bc.body, _ca37415e10bc);
      return _dc5adb7a56fd.rawHeaders = Object.fromEntries(_ca37415e10bc.headers), _dc5adb7a56fd.rawResponse = {
        body: _ca37415e10bc.body,
        headers: Object.fromEntries(_ca37415e10bc.headers),
        status: _ca37415e10bc.status,
        statusText: _ca37415e10bc.statusText
      }, _dc5adb7a56fd.finalURL = _c0399aecd47b.toString(), _dc5adb7a56fd;
    }
    for (let _ca37415e10bc = 0; ;_ca37415e10bc++) {
      let _30581984dff0 = (await this.worker.sendMessage({
        type: "fetch",
        fetch: {
          remote: _c0399aecd47b.toString(),
          method: _62deff491432.method,
          headers: _112582c4a110,
          body: _b2caa3ef3a49 || void 0
        }
      }, _b2caa3ef3a49 ? [ _b2caa3ef3a49 ] : [])).fetch, _fc6ac348d02f = new Response(_2141ce1010c7.includes(_30581984dff0.status) ? void 0 : _30581984dff0.body, {
        headers: new Headers(_30581984dff0.headers),
        status: _30581984dff0.status,
        statusText: _30581984dff0.statusText
      });
      _fc6ac348d02f.rawHeaders = _30581984dff0.headers, _fc6ac348d02f.rawResponse = _30581984dff0, 
      _fc6ac348d02f.finalURL = _c0399aecd47b.toString();
      const _fb7f6dfe58ae = _dc5adb7a56fd?.redirect || _62deff491432.redirect;
      if (!_22d75c791eaa.includes(_fc6ac348d02f.status)) return _fc6ac348d02f;
      switch (_fb7f6dfe58ae) {
       case "follow":
        {
          const _30581984dff0 = _fc6ac348d02f.headers.get("location");
          if (20 > _ca37415e10bc && null !== _30581984dff0) {
            _c0399aecd47b = new URL(_30581984dff0, _c0399aecd47b);
            continue;
          }
          throw new TypeError("Failed to fetch");
        }

       case "error":
        throw new TypeError("Failed to fetch");

       case "manual":
        return _fc6ac348d02f;
      }
    }
  }
}

console.debug("bare-mux: running v2.1.9 (build dc9dc6e)");

export { k as BareClient, m as BareMuxConnection, w as BareWebSocket, _b2caa3ef3a49 as WebSocketFields, p as WorkerConnection, d as browserSupportsTransferringStreams, k as default, _ca37415e10bc as maxRedirects, f as validProtocol };
