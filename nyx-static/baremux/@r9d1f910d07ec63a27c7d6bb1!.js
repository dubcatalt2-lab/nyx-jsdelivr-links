const _7d889b54b052 = 20, _6f98f32d02a5 = globalThis.fetch, _9e958ff19692 = globalThis.SharedWorker, _6b3cd9a130f7 = globalThis.localStorage, _f0a3162b724b = globalThis.navigator.serviceWorker, _e6ddc173da98 = MessagePort.prototype.postMessage, _913d1e137e63 = {
  prototype: {
    send: WebSocket.prototype.send
  },
  CLOSED: WebSocket.CLOSED,
  CLOSING: WebSocket.CLOSING,
  CONNECTING: WebSocket.CONNECTING,
  OPEN: WebSocket.OPEN
};

async function c() {
  const _7d889b54b052 = (await self.clients.matchAll({
    type: "window",
    includeUncontrolled: !0
  })).filter(_7d889b54b052 => {
    try {
      const _6f98f32d02a5 = new URL(_7d889b54b052.url);
      return _6f98f32d02a5.origin === self.location.origin && !_6f98f32d02a5.pathname.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/") && !_6f98f32d02a5.pathname.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/study/");
    } catch {
      return !1;
    }
  }).map(async _7d889b54b052 => {
    const _6f98f32d02a5 = await function(_7d889b54b052) {
      let _6f98f32d02a5 = new MessageChannel;
      return new Promise(_9e958ff19692 => {
        _7d889b54b052.postMessage({
          type: "getPort",
          port: _6f98f32d02a5.port2
        }, [ _6f98f32d02a5.port2 ]), _6f98f32d02a5.port1.onmessage = _7d889b54b052 => {
          _9e958ff19692(_7d889b54b052.data);
        };
      });
    }(_7d889b54b052);
    return await i(_6f98f32d02a5), _6f98f32d02a5;
  }), _6f98f32d02a5 = Promise.race([ Promise.any(_7d889b54b052), new Promise((_7d889b54b052, _6f98f32d02a5) => setTimeout(_6f98f32d02a5, 5e3, new TypeError("timeout"))) ]);
  try {
    return await _6f98f32d02a5;
  } catch (_7d889b54b052) {
    if (_7d889b54b052 instanceof AggregateError) throw console.error("bare-mux: failed to get a bare-mux SharedWorker MessagePort as all clients returned an invalid MessagePort."), 
    new Error("All clients returned an invalid MessagePort.", {
      cause: _7d889b54b052
    });
    return console.warn("bare-mux: failed to get a bare-mux SharedWorker MessagePort within 5s, retrying"), 
    await c();
  }
}

function i(_7d889b54b052) {
  const _6f98f32d02a5 = new MessageChannel, _9e958ff19692 = new Promise((_7d889b54b052, _9e958ff19692) => {
    _6f98f32d02a5.port1.onmessage = _6f98f32d02a5 => {
      "pong" === _6f98f32d02a5.data.type && _7d889b54b052();
    }, setTimeout(_9e958ff19692, 5e3);
  });
  return _e6ddc173da98.call(_7d889b54b052, {
    message: {
      type: "ping"
    },
    port: _6f98f32d02a5.port2
  }, [ _6f98f32d02a5.port2 ]), _9e958ff19692;
}

function l(_7d889b54b052, _6f98f32d02a5) {
  const _6b3cd9a130f7 = new _9e958ff19692(_7d889b54b052, "ridgewood-stem-worker");
  return _6f98f32d02a5 && _f0a3162b724b.addEventListener("message", _6f98f32d02a5 => {
    if ("getPort" === _6f98f32d02a5.data.type && _6f98f32d02a5.data.port) {
      console.debug("bare-mux: recieved request for port from sw");
      const _6b3cd9a130f7 = new _9e958ff19692(_7d889b54b052, "ridgewood-stem-worker");
      _e6ddc173da98.call(_6f98f32d02a5.data.port, _6b3cd9a130f7.port, [ _6b3cd9a130f7.port ]);
    }
  }), _6b3cd9a130f7.port;
}

let _5ca31394e14f = null;

function d() {
  if (null === _5ca31394e14f) {
    const _7d889b54b052 = new MessageChannel, _6f98f32d02a5 = new ReadableStream;
    let _9e958ff19692;
    try {
      _e6ddc173da98.call(_7d889b54b052.port1, _6f98f32d02a5, [ _6f98f32d02a5 ]), _9e958ff19692 = !0;
    } catch (_7d889b54b052) {
      _9e958ff19692 = !1;
    }
    return _5ca31394e14f = _9e958ff19692, _9e958ff19692;
  }
  return _5ca31394e14f;
}

class p {
  channel;
  port;
  workerPath;
  constructor(_7d889b54b052) {
    this.channel = new BroadcastChannel("bare-mux"), _7d889b54b052 instanceof MessagePort || _7d889b54b052 instanceof Promise ? this.port = _7d889b54b052 : this.createChannel(_7d889b54b052, !0);
  }
  createChannel(_7d889b54b052, _6f98f32d02a5) {
    if (self.clients) this.port = c(), this.channel.onmessage = _7d889b54b052 => {
      "refreshPort" === _7d889b54b052.data.type && (this.port = c());
    }; else if (_7d889b54b052 && SharedWorker) {
      if (!_7d889b54b052.startsWith("/") && !_7d889b54b052.includes(":")) throw new Error("Invalid URL. Must be absolute or start at the root.");
      this.port = l(_7d889b54b052, _6f98f32d02a5), console.debug("bare-mux: setting localStorage bare-mux-path to", _7d889b54b052), 
      _6b3cd9a130f7["bare-mux-path"] = _7d889b54b052;
    } else {
      if (!SharedWorker) throw new Error("Unable to get a channel to the SharedWorker.");
      {
        const _7d889b54b052 = _6b3cd9a130f7["bare-mux-path"];
        if (console.debug("bare-mux: got localStorage bare-mux-path:", _7d889b54b052), !_7d889b54b052) throw new Error("Unable to get bare-mux workerPath from localStorage.");
        this.port = l(_7d889b54b052, _6f98f32d02a5);
      }
    }
  }
  async sendMessage(_7d889b54b052, _6f98f32d02a5) {
    this.port instanceof Promise && (this.port = await this.port);
    try {
      await i(this.port);
    } catch {
      return console.warn("bare-mux: Failed to get a ping response from the worker within 5s. Assuming port is dead."), 
      this.createChannel(), await this.sendMessage(_7d889b54b052, _6f98f32d02a5);
    }
    const _9e958ff19692 = new MessageChannel, _6b3cd9a130f7 = [ _9e958ff19692.port2, ..._6f98f32d02a5 || [] ], _f0a3162b724b = new Promise((_7d889b54b052, _6f98f32d02a5) => {
      _9e958ff19692.port1.onmessage = _9e958ff19692 => {
        const _6b3cd9a130f7 = _9e958ff19692.data;
        "error" === _6b3cd9a130f7.type ? _6f98f32d02a5(_6b3cd9a130f7.error) : _7d889b54b052(_6b3cd9a130f7);
      };
    });
    return _e6ddc173da98.call(this.port, {
      message: _7d889b54b052,
      port: _9e958ff19692.port2
    }, _6b3cd9a130f7), await _f0a3162b724b;
  }
}

class w extends EventTarget {
  protocols;
  url;
  readyState=_913d1e137e63.CONNECTING;
  channel;
  constructor(_7d889b54b052, _6f98f32d02a5 = [], _9e958ff19692, _6b3cd9a130f7) {
    super(), this.protocols = _6f98f32d02a5, this.url = _7d889b54b052.toString(), this.protocols = _6f98f32d02a5;
    const s = _7d889b54b052 => {
      this.protocols = _7d889b54b052, this.readyState = _913d1e137e63.OPEN;
      const _6f98f32d02a5 = new Event("open");
      this.dispatchEvent(_6f98f32d02a5);
    }, o = async _7d889b54b052 => {
      const _6f98f32d02a5 = new MessageEvent("message", {
        data: _7d889b54b052
      });
      this.dispatchEvent(_6f98f32d02a5);
    }, c = (_7d889b54b052, _6f98f32d02a5) => {
      this.readyState = _913d1e137e63.CLOSED;
      const _9e958ff19692 = new CloseEvent("close", {
        code: _7d889b54b052,
        reason: _6f98f32d02a5
      });
      this.dispatchEvent(_9e958ff19692);
    }, i = () => {
      this.readyState = _913d1e137e63.CLOSED;
      const _7d889b54b052 = new Event("error");
      this.dispatchEvent(_7d889b54b052);
    };
    this.channel = new MessageChannel, this.channel.port1.onmessage = _7d889b54b052 => {
      "open" === _7d889b54b052.data.type ? s(_7d889b54b052.data.args[0]) : "message" === _7d889b54b052.data.type ? o(_7d889b54b052.data.args[0]) : "close" === _7d889b54b052.data.type ? c(_7d889b54b052.data.args[0], _7d889b54b052.data.args[1]) : "error" === _7d889b54b052.data.type && i();
    }, _9e958ff19692.sendMessage({
      type: "websocket",
      websocket: {
        url: _7d889b54b052.toString(),
        protocols: _6f98f32d02a5,
        requestHeaders: _6b3cd9a130f7,
        channel: this.channel.port2
      }
    }, [ this.channel.port2 ]);
  }
  send(..._7d889b54b052) {
    if (this.readyState === _913d1e137e63.CONNECTING) throw new DOMException("Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.");
    let _6f98f32d02a5 = _7d889b54b052[0];
    _6f98f32d02a5.buffer && (_6f98f32d02a5 = _6f98f32d02a5.buffer.slice(_6f98f32d02a5.byteOffset, _6f98f32d02a5.byteOffset + _6f98f32d02a5.byteLength)), 
    _e6ddc173da98.call(this.channel.port1, {
      type: "data",
      data: _6f98f32d02a5
    }, _6f98f32d02a5 instanceof ArrayBuffer ? [ _6f98f32d02a5 ] : []);
  }
  close(_7d889b54b052, _6f98f32d02a5) {
    _e6ddc173da98.call(this.channel.port1, {
      type: "close",
      closeCode: _7d889b54b052,
      closeReason: _6f98f32d02a5
    });
  }
}

function u(_7d889b54b052, _6f98f32d02a5, _9e958ff19692) {
  console.error(`error while processing '${_9e958ff19692}': `, _6f98f32d02a5), _7d889b54b052.postMessage({
    type: "error",
    error: _6f98f32d02a5
  });
}

function f(_7d889b54b052) {
  for (let _6f98f32d02a5 = 0; _6f98f32d02a5 < _7d889b54b052.length; _6f98f32d02a5++) {
    const _9e958ff19692 = _7d889b54b052[_6f98f32d02a5];
    if (!"!#$%&'*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz|~".includes(_9e958ff19692)) return !1;
  }
  return !0;
}

const _1e5a82cc1c34 = [ "ws:", "wss:" ], _0d0d409d7e0b = [ 101, 204, 205, 304 ], _254f86558347 = [ 301, 302, 303, 307, 308 ];

class m {
  worker;
  constructor(_7d889b54b052) {
    this.worker = new p(_7d889b54b052);
  }
  async getTransport() {
    return (await this.worker.sendMessage({
      type: "get"
    })).name;
  }
  async setTransport(_7d889b54b052, _6f98f32d02a5, _9e958ff19692) {
    await this.setManualTransport(`\n\t\t\tconst { default: BareTransport } = await import("${_7d889b54b052}");\n\t\t\treturn [BareTransport, "${_7d889b54b052}"];\n\t\t`, _6f98f32d02a5, _9e958ff19692);
  }
  async setManualTransport(_7d889b54b052, _6f98f32d02a5, _9e958ff19692) {
    if ("bare-mux-remote" === _7d889b54b052) throw new Error("Use setRemoteTransport.");
    await this.worker.sendMessage({
      type: "set",
      client: {
        function: _7d889b54b052,
        args: _6f98f32d02a5
      }
    }, _9e958ff19692);
  }
  async setRemoteTransport(_7d889b54b052, _6f98f32d02a5) {
    const _9e958ff19692 = new MessageChannel;
    _9e958ff19692.port1.onmessage = async _6f98f32d02a5 => {
      const _9e958ff19692 = _6f98f32d02a5.data.port, _6b3cd9a130f7 = _6f98f32d02a5.data.message;
      if ("fetch" === _6b3cd9a130f7.type) try {
        _7d889b54b052.ready || await _7d889b54b052.init(), await async function(_7d889b54b052, _6f98f32d02a5, _9e958ff19692) {
          const _6b3cd9a130f7 = await _9e958ff19692.request(new URL(_7d889b54b052.fetch.remote), _7d889b54b052.fetch.method, _7d889b54b052.fetch.body, _7d889b54b052.fetch.headers, null);
          if (!d() && _6b3cd9a130f7.body instanceof ReadableStream) {
            const _7d889b54b052 = new Response(_6b3cd9a130f7.body);
            _6b3cd9a130f7.body = await _7d889b54b052.arrayBuffer();
          }
          _6b3cd9a130f7.body instanceof ReadableStream || _6b3cd9a130f7.body instanceof ArrayBuffer ? _e6ddc173da98.call(_6f98f32d02a5, {
            type: "fetch",
            fetch: _6b3cd9a130f7
          }, [ _6b3cd9a130f7.body ]) : _e6ddc173da98.call(_6f98f32d02a5, {
            type: "fetch",
            fetch: _6b3cd9a130f7
          });
        }(_6b3cd9a130f7, _9e958ff19692, _7d889b54b052);
      } catch (_7d889b54b052) {
        u(_9e958ff19692, _7d889b54b052, "fetch");
      } else if ("websocket" === _6b3cd9a130f7.type) try {
        _7d889b54b052.ready || await _7d889b54b052.init(), await async function(_7d889b54b052, _6f98f32d02a5, _9e958ff19692) {
          const [_6b3cd9a130f7, _f0a3162b724b] = _9e958ff19692.connect(new URL(_7d889b54b052.websocket.url), _7d889b54b052.websocket.protocols, _7d889b54b052.websocket.requestHeaders, _6f98f32d02a5 => {
            _e6ddc173da98.call(_7d889b54b052.websocket.channel, {
              type: "open",
              args: [ _6f98f32d02a5 ]
            });
          }, _6f98f32d02a5 => {
            _6f98f32d02a5 instanceof ArrayBuffer ? _e6ddc173da98.call(_7d889b54b052.websocket.channel, {
              type: "message",
              args: [ _6f98f32d02a5 ]
            }, [ _6f98f32d02a5 ]) : _e6ddc173da98.call(_7d889b54b052.websocket.channel, {
              type: "message",
              args: [ _6f98f32d02a5 ]
            });
          }, (_6f98f32d02a5, _9e958ff19692) => {
            _e6ddc173da98.call(_7d889b54b052.websocket.channel, {
              type: "close",
              args: [ _6f98f32d02a5, _9e958ff19692 ]
            });
          }, _6f98f32d02a5 => {
            _e6ddc173da98.call(_7d889b54b052.websocket.channel, {
              type: "error",
              args: [ _6f98f32d02a5 ]
            });
          });
          _7d889b54b052.websocket.channel.onmessage = _7d889b54b052 => {
            "data" === _7d889b54b052.data.type ? _6b3cd9a130f7(_7d889b54b052.data.data) : "close" === _7d889b54b052.data.type && _f0a3162b724b(_7d889b54b052.data.closeCode, _7d889b54b052.data.closeReason);
          }, _e6ddc173da98.call(_6f98f32d02a5, {
            type: "websocket"
          });
        }(_6b3cd9a130f7, _9e958ff19692, _7d889b54b052);
      } catch (_7d889b54b052) {
        u(_9e958ff19692, _7d889b54b052, "websocket");
      }
    }, await this.worker.sendMessage({
      type: "set",
      client: {
        function: "bare-mux-remote",
        args: [ _9e958ff19692.port2, _6f98f32d02a5 ]
      }
    }, [ _9e958ff19692.port2 ]);
  }
  getInnerPort() {
    return this.worker.port;
  }
}

class k {
  worker;
  constructor(_7d889b54b052) {
    this.worker = new p(_7d889b54b052);
  }
  createWebSocket(_7d889b54b052, _6f98f32d02a5 = [], _9e958ff19692, _6b3cd9a130f7) {
    try {
      _7d889b54b052 = new URL(_7d889b54b052);
    } catch (_6f98f32d02a5) {
      throw new DOMException(`Faiiled to construct 'WebSocket': The URL '${_7d889b54b052}' is invalid.`);
    }
    if (!_1e5a82cc1c34.includes(_7d889b54b052.protocol)) throw new DOMException(`Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '${_7d889b54b052.protocol}' is not allowed.`);
    Array.isArray(_6f98f32d02a5) || (_6f98f32d02a5 = [ _6f98f32d02a5 ]), _6f98f32d02a5 = _6f98f32d02a5.map(String);
    for (const _7d889b54b052 of _6f98f32d02a5) if (!f(_7d889b54b052)) throw new DOMException(`Failed to construct 'WebSocket': The subprotocol '${_7d889b54b052}' is invalid.`);
    _6b3cd9a130f7 = _6b3cd9a130f7 || {};
    return new w(_7d889b54b052, _6f98f32d02a5, this.worker, _6b3cd9a130f7);
  }
  async fetch(_7d889b54b052, _9e958ff19692) {
    const _6b3cd9a130f7 = new Request(_7d889b54b052, _9e958ff19692), _f0a3162b724b = _9e958ff19692?.headers || _6b3cd9a130f7.headers, _e6ddc173da98 = _f0a3162b724b instanceof Headers ? Object.fromEntries(_f0a3162b724b) : _f0a3162b724b, _913d1e137e63 = _6b3cd9a130f7.body;
    let _5ca31394e14f = new URL(_6b3cd9a130f7.url);
    if (_5ca31394e14f.protocol.startsWith("blob:")) {
      const _7d889b54b052 = await _6f98f32d02a5(_5ca31394e14f), _9e958ff19692 = new Response(_7d889b54b052.body, _7d889b54b052);
      return _9e958ff19692.rawHeaders = Object.fromEntries(_7d889b54b052.headers), _9e958ff19692.rawResponse = {
        body: _7d889b54b052.body,
        headers: Object.fromEntries(_7d889b54b052.headers),
        status: _7d889b54b052.status,
        statusText: _7d889b54b052.statusText
      }, _9e958ff19692.finalURL = _5ca31394e14f.toString(), _9e958ff19692;
    }
    for (let _7d889b54b052 = 0; ;_7d889b54b052++) {
      let _6f98f32d02a5 = (await this.worker.sendMessage({
        type: "fetch",
        fetch: {
          remote: _5ca31394e14f.toString(),
          method: _6b3cd9a130f7.method,
          headers: _e6ddc173da98,
          body: _913d1e137e63 || void 0
        }
      }, _913d1e137e63 ? [ _913d1e137e63 ] : [])).fetch, _f0a3162b724b = new Response(_0d0d409d7e0b.includes(_6f98f32d02a5.status) ? void 0 : _6f98f32d02a5.body, {
        headers: new Headers(_6f98f32d02a5.headers),
        status: _6f98f32d02a5.status,
        statusText: _6f98f32d02a5.statusText
      });
      _f0a3162b724b.rawHeaders = _6f98f32d02a5.headers, _f0a3162b724b.rawResponse = _6f98f32d02a5, 
      _f0a3162b724b.finalURL = _5ca31394e14f.toString();
      const _1e5a82cc1c34 = _9e958ff19692?.redirect || _6b3cd9a130f7.redirect;
      if (!_254f86558347.includes(_f0a3162b724b.status)) return _f0a3162b724b;
      switch (_1e5a82cc1c34) {
       case "follow":
        {
          const _6f98f32d02a5 = _f0a3162b724b.headers.get("location");
          if (20 > _7d889b54b052 && null !== _6f98f32d02a5) {
            _5ca31394e14f = new URL(_6f98f32d02a5, _5ca31394e14f);
            continue;
          }
          throw new TypeError("Failed to fetch");
        }

       case "error":
        throw new TypeError("Failed to fetch");

       case "manual":
        return _f0a3162b724b;
      }
    }
  }
}

console.debug("bare-mux: running v2.1.9 (build dc9dc6e)");

export { k as BareClient, m as BareMuxConnection, w as BareWebSocket, _913d1e137e63 as WebSocketFields, p as WorkerConnection, d as browserSupportsTransferringStreams, k as default, _7d889b54b052 as maxRedirects, f as validProtocol };
