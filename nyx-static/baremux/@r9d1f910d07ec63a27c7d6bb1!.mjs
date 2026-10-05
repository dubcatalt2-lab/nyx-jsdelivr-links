const _a7ad002dbcb3 = 20, _b172ec11de9d = globalThis.fetch, _7523873dcee8 = globalThis.SharedWorker, _08c4569a1f21 = globalThis.localStorage, _50c602080895 = globalThis.navigator.serviceWorker, _2d45c0bd7dce = MessagePort.prototype.postMessage, _62c6ef9a26e7 = {
  prototype: {
    send: WebSocket.prototype.send
  },
  CLOSED: WebSocket.CLOSED,
  CLOSING: WebSocket.CLOSING,
  CONNECTING: WebSocket.CONNECTING,
  OPEN: WebSocket.OPEN
};

async function c() {
  const _a7ad002dbcb3 = (await self.clients.matchAll({
    type: "window",
    includeUncontrolled: !0
  })).filter(_a7ad002dbcb3 => {
    try {
      const _b172ec11de9d = new URL(_a7ad002dbcb3.url);
      return _b172ec11de9d.origin === self.location.origin && !_b172ec11de9d.pathname.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/") && !_b172ec11de9d.pathname.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/study/");
    } catch {
      return !1;
    }
  }).map(async _a7ad002dbcb3 => {
    const _b172ec11de9d = await function(_a7ad002dbcb3) {
      let _b172ec11de9d = new MessageChannel;
      return new Promise(_7523873dcee8 => {
        _a7ad002dbcb3.postMessage({
          type: "getPort",
          port: _b172ec11de9d.port2
        }, [ _b172ec11de9d.port2 ]), _b172ec11de9d.port1.onmessage = _a7ad002dbcb3 => {
          _7523873dcee8(_a7ad002dbcb3.data);
        };
      });
    }(_a7ad002dbcb3);
    return await i(_b172ec11de9d), _b172ec11de9d;
  }), _b172ec11de9d = Promise.race([ Promise.any(_a7ad002dbcb3), new Promise((_a7ad002dbcb3, _b172ec11de9d) => setTimeout(_b172ec11de9d, 5e3, new TypeError("timeout"))) ]);
  try {
    return await _b172ec11de9d;
  } catch (_a7ad002dbcb3) {
    if (_a7ad002dbcb3 instanceof AggregateError) throw console.error("bare-mux: failed to get a bare-mux SharedWorker MessagePort as all clients returned an invalid MessagePort."), 
    new Error("All clients returned an invalid MessagePort.", {
      cause: _a7ad002dbcb3
    });
    return console.warn("bare-mux: failed to get a bare-mux SharedWorker MessagePort within 5s, retrying"), 
    await c();
  }
}

function i(_a7ad002dbcb3) {
  const _b172ec11de9d = new MessageChannel, _7523873dcee8 = new Promise((_a7ad002dbcb3, _7523873dcee8) => {
    _b172ec11de9d.port1.onmessage = _b172ec11de9d => {
      "pong" === _b172ec11de9d.data.type && _a7ad002dbcb3();
    }, setTimeout(_7523873dcee8, 5e3);
  });
  return _2d45c0bd7dce.call(_a7ad002dbcb3, {
    message: {
      type: "ping"
    },
    port: _b172ec11de9d.port2
  }, [ _b172ec11de9d.port2 ]), _7523873dcee8;
}

function l(_a7ad002dbcb3, _b172ec11de9d) {
  const _08c4569a1f21 = new _7523873dcee8(_a7ad002dbcb3, "ridgewood-stem-worker");
  return _b172ec11de9d && _50c602080895.addEventListener("message", _b172ec11de9d => {
    if ("getPort" === _b172ec11de9d.data.type && _b172ec11de9d.data.port) {
      console.debug("bare-mux: recieved request for port from sw");
      const _08c4569a1f21 = new _7523873dcee8(_a7ad002dbcb3, "ridgewood-stem-worker");
      _2d45c0bd7dce.call(_b172ec11de9d.data.port, _08c4569a1f21.port, [ _08c4569a1f21.port ]);
    }
  }), _08c4569a1f21.port;
}

let _8efa4723ce2e = null;

function d() {
  if (null === _8efa4723ce2e) {
    const _a7ad002dbcb3 = new MessageChannel, _b172ec11de9d = new ReadableStream;
    let _7523873dcee8;
    try {
      _2d45c0bd7dce.call(_a7ad002dbcb3.port1, _b172ec11de9d, [ _b172ec11de9d ]), _7523873dcee8 = !0;
    } catch (_a7ad002dbcb3) {
      _7523873dcee8 = !1;
    }
    return _8efa4723ce2e = _7523873dcee8, _7523873dcee8;
  }
  return _8efa4723ce2e;
}

class p {
  channel;
  port;
  workerPath;
  constructor(_a7ad002dbcb3) {
    this.channel = new BroadcastChannel("bare-mux"), _a7ad002dbcb3 instanceof MessagePort || _a7ad002dbcb3 instanceof Promise ? this.port = _a7ad002dbcb3 : this.createChannel(_a7ad002dbcb3, !0);
  }
  createChannel(_a7ad002dbcb3, _b172ec11de9d) {
    if (self.clients) this.port = c(), this.channel.onmessage = _a7ad002dbcb3 => {
      "refreshPort" === _a7ad002dbcb3.data.type && (this.port = c());
    }; else if (_a7ad002dbcb3 && SharedWorker) {
      if (!_a7ad002dbcb3.startsWith("/") && !_a7ad002dbcb3.includes(":")) throw new Error("Invalid URL. Must be absolute or start at the root.");
      this.port = l(_a7ad002dbcb3, _b172ec11de9d), console.debug("bare-mux: setting localStorage bare-mux-path to", _a7ad002dbcb3), 
      _08c4569a1f21["bare-mux-path"] = _a7ad002dbcb3;
    } else {
      if (!SharedWorker) throw new Error("Unable to get a channel to the SharedWorker.");
      {
        const _a7ad002dbcb3 = _08c4569a1f21["bare-mux-path"];
        if (console.debug("bare-mux: got localStorage bare-mux-path:", _a7ad002dbcb3), !_a7ad002dbcb3) throw new Error("Unable to get bare-mux workerPath from localStorage.");
        this.port = l(_a7ad002dbcb3, _b172ec11de9d);
      }
    }
  }
  async sendMessage(_a7ad002dbcb3, _b172ec11de9d) {
    this.port instanceof Promise && (this.port = await this.port);
    try {
      await i(this.port);
    } catch {
      return console.warn("bare-mux: Failed to get a ping response from the worker within 5s. Assuming port is dead."), 
      this.createChannel(), await this.sendMessage(_a7ad002dbcb3, _b172ec11de9d);
    }
    const _7523873dcee8 = new MessageChannel, _08c4569a1f21 = [ _7523873dcee8.port2, ..._b172ec11de9d || [] ], _50c602080895 = new Promise((_a7ad002dbcb3, _b172ec11de9d) => {
      _7523873dcee8.port1.onmessage = _7523873dcee8 => {
        const _08c4569a1f21 = _7523873dcee8.data;
        "error" === _08c4569a1f21.type ? _b172ec11de9d(_08c4569a1f21.error) : _a7ad002dbcb3(_08c4569a1f21);
      };
    });
    return _2d45c0bd7dce.call(this.port, {
      message: _a7ad002dbcb3,
      port: _7523873dcee8.port2
    }, _08c4569a1f21), await _50c602080895;
  }
}

class w extends EventTarget {
  protocols;
  url;
  readyState=_62c6ef9a26e7.CONNECTING;
  channel;
  constructor(_a7ad002dbcb3, _b172ec11de9d = [], _7523873dcee8, _08c4569a1f21) {
    super(), this.protocols = _b172ec11de9d, this.url = _a7ad002dbcb3.toString(), this.protocols = _b172ec11de9d;
    const s = _a7ad002dbcb3 => {
      this.protocols = _a7ad002dbcb3, this.readyState = _62c6ef9a26e7.OPEN;
      const _b172ec11de9d = new Event("open");
      this.dispatchEvent(_b172ec11de9d);
    }, o = async _a7ad002dbcb3 => {
      const _b172ec11de9d = new MessageEvent("message", {
        data: _a7ad002dbcb3
      });
      this.dispatchEvent(_b172ec11de9d);
    }, c = (_a7ad002dbcb3, _b172ec11de9d) => {
      this.readyState = _62c6ef9a26e7.CLOSED;
      const _7523873dcee8 = new CloseEvent("close", {
        code: _a7ad002dbcb3,
        reason: _b172ec11de9d
      });
      this.dispatchEvent(_7523873dcee8);
    }, i = () => {
      this.readyState = _62c6ef9a26e7.CLOSED;
      const _a7ad002dbcb3 = new Event("error");
      this.dispatchEvent(_a7ad002dbcb3);
    };
    this.channel = new MessageChannel, this.channel.port1.onmessage = _a7ad002dbcb3 => {
      "open" === _a7ad002dbcb3.data.type ? s(_a7ad002dbcb3.data.args[0]) : "message" === _a7ad002dbcb3.data.type ? o(_a7ad002dbcb3.data.args[0]) : "close" === _a7ad002dbcb3.data.type ? c(_a7ad002dbcb3.data.args[0], _a7ad002dbcb3.data.args[1]) : "error" === _a7ad002dbcb3.data.type && i();
    }, _7523873dcee8.sendMessage({
      type: "websocket",
      websocket: {
        url: _a7ad002dbcb3.toString(),
        protocols: _b172ec11de9d,
        requestHeaders: _08c4569a1f21,
        channel: this.channel.port2
      }
    }, [ this.channel.port2 ]);
  }
  send(..._a7ad002dbcb3) {
    if (this.readyState === _62c6ef9a26e7.CONNECTING) throw new DOMException("Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.");
    let _b172ec11de9d = _a7ad002dbcb3[0];
    _b172ec11de9d.buffer && (_b172ec11de9d = _b172ec11de9d.buffer.slice(_b172ec11de9d.byteOffset, _b172ec11de9d.byteOffset + _b172ec11de9d.byteLength)), 
    _2d45c0bd7dce.call(this.channel.port1, {
      type: "data",
      data: _b172ec11de9d
    }, _b172ec11de9d instanceof ArrayBuffer ? [ _b172ec11de9d ] : []);
  }
  close(_a7ad002dbcb3, _b172ec11de9d) {
    _2d45c0bd7dce.call(this.channel.port1, {
      type: "close",
      closeCode: _a7ad002dbcb3,
      closeReason: _b172ec11de9d
    });
  }
}

function u(_a7ad002dbcb3, _b172ec11de9d, _7523873dcee8) {
  console.error(`error while processing '${_7523873dcee8}': `, _b172ec11de9d), _a7ad002dbcb3.postMessage({
    type: "error",
    error: _b172ec11de9d
  });
}

function f(_a7ad002dbcb3) {
  for (let _b172ec11de9d = 0; _b172ec11de9d < _a7ad002dbcb3.length; _b172ec11de9d++) {
    const _7523873dcee8 = _a7ad002dbcb3[_b172ec11de9d];
    if (!"!#$%&'*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz|~".includes(_7523873dcee8)) return !1;
  }
  return !0;
}

const _d9847eb473c7 = [ "ws:", "wss:" ], _7e0bb2d229c6 = [ 101, 204, 205, 304 ], _2730d8e1ae0b = [ 301, 302, 303, 307, 308 ];

class m {
  worker;
  constructor(_a7ad002dbcb3) {
    this.worker = new p(_a7ad002dbcb3);
  }
  async getTransport() {
    return (await this.worker.sendMessage({
      type: "get"
    })).name;
  }
  async setTransport(_a7ad002dbcb3, _b172ec11de9d, _7523873dcee8) {
    await this.setManualTransport(`\n\t\t\tconst { default: BareTransport } = await import("${_a7ad002dbcb3}");\n\t\t\treturn [BareTransport, "${_a7ad002dbcb3}"];\n\t\t`, _b172ec11de9d, _7523873dcee8);
  }
  async setManualTransport(_a7ad002dbcb3, _b172ec11de9d, _7523873dcee8) {
    if ("bare-mux-remote" === _a7ad002dbcb3) throw new Error("Use setRemoteTransport.");
    await this.worker.sendMessage({
      type: "set",
      client: {
        function: _a7ad002dbcb3,
        args: _b172ec11de9d
      }
    }, _7523873dcee8);
  }
  async setRemoteTransport(_a7ad002dbcb3, _b172ec11de9d) {
    const _7523873dcee8 = new MessageChannel;
    _7523873dcee8.port1.onmessage = async _b172ec11de9d => {
      const _7523873dcee8 = _b172ec11de9d.data.port, _08c4569a1f21 = _b172ec11de9d.data.message;
      if ("fetch" === _08c4569a1f21.type) try {
        _a7ad002dbcb3.ready || await _a7ad002dbcb3.init(), await async function(_a7ad002dbcb3, _b172ec11de9d, _7523873dcee8) {
          const _08c4569a1f21 = await _7523873dcee8.request(new URL(_a7ad002dbcb3.fetch.remote), _a7ad002dbcb3.fetch.method, _a7ad002dbcb3.fetch.body, _a7ad002dbcb3.fetch.headers, null);
          if (!d() && _08c4569a1f21.body instanceof ReadableStream) {
            const _a7ad002dbcb3 = new Response(_08c4569a1f21.body);
            _08c4569a1f21.body = await _a7ad002dbcb3.arrayBuffer();
          }
          _08c4569a1f21.body instanceof ReadableStream || _08c4569a1f21.body instanceof ArrayBuffer ? _2d45c0bd7dce.call(_b172ec11de9d, {
            type: "fetch",
            fetch: _08c4569a1f21
          }, [ _08c4569a1f21.body ]) : _2d45c0bd7dce.call(_b172ec11de9d, {
            type: "fetch",
            fetch: _08c4569a1f21
          });
        }(_08c4569a1f21, _7523873dcee8, _a7ad002dbcb3);
      } catch (_a7ad002dbcb3) {
        u(_7523873dcee8, _a7ad002dbcb3, "fetch");
      } else if ("websocket" === _08c4569a1f21.type) try {
        _a7ad002dbcb3.ready || await _a7ad002dbcb3.init(), await async function(_a7ad002dbcb3, _b172ec11de9d, _7523873dcee8) {
          const [_08c4569a1f21, _50c602080895] = _7523873dcee8.connect(new URL(_a7ad002dbcb3.websocket.url), _a7ad002dbcb3.websocket.protocols, _a7ad002dbcb3.websocket.requestHeaders, _b172ec11de9d => {
            _2d45c0bd7dce.call(_a7ad002dbcb3.websocket.channel, {
              type: "open",
              args: [ _b172ec11de9d ]
            });
          }, _b172ec11de9d => {
            _b172ec11de9d instanceof ArrayBuffer ? _2d45c0bd7dce.call(_a7ad002dbcb3.websocket.channel, {
              type: "message",
              args: [ _b172ec11de9d ]
            }, [ _b172ec11de9d ]) : _2d45c0bd7dce.call(_a7ad002dbcb3.websocket.channel, {
              type: "message",
              args: [ _b172ec11de9d ]
            });
          }, (_b172ec11de9d, _7523873dcee8) => {
            _2d45c0bd7dce.call(_a7ad002dbcb3.websocket.channel, {
              type: "close",
              args: [ _b172ec11de9d, _7523873dcee8 ]
            });
          }, _b172ec11de9d => {
            _2d45c0bd7dce.call(_a7ad002dbcb3.websocket.channel, {
              type: "error",
              args: [ _b172ec11de9d ]
            });
          });
          _a7ad002dbcb3.websocket.channel.onmessage = _a7ad002dbcb3 => {
            "data" === _a7ad002dbcb3.data.type ? _08c4569a1f21(_a7ad002dbcb3.data.data) : "close" === _a7ad002dbcb3.data.type && _50c602080895(_a7ad002dbcb3.data.closeCode, _a7ad002dbcb3.data.closeReason);
          }, _2d45c0bd7dce.call(_b172ec11de9d, {
            type: "websocket"
          });
        }(_08c4569a1f21, _7523873dcee8, _a7ad002dbcb3);
      } catch (_a7ad002dbcb3) {
        u(_7523873dcee8, _a7ad002dbcb3, "websocket");
      }
    }, await this.worker.sendMessage({
      type: "set",
      client: {
        function: "bare-mux-remote",
        args: [ _7523873dcee8.port2, _b172ec11de9d ]
      }
    }, [ _7523873dcee8.port2 ]);
  }
  getInnerPort() {
    return this.worker.port;
  }
}

class k {
  worker;
  constructor(_a7ad002dbcb3) {
    this.worker = new p(_a7ad002dbcb3);
  }
  createWebSocket(_a7ad002dbcb3, _b172ec11de9d = [], _7523873dcee8, _08c4569a1f21) {
    try {
      _a7ad002dbcb3 = new URL(_a7ad002dbcb3);
    } catch (_b172ec11de9d) {
      throw new DOMException(`Faiiled to construct 'WebSocket': The URL '${_a7ad002dbcb3}' is invalid.`);
    }
    if (!_d9847eb473c7.includes(_a7ad002dbcb3.protocol)) throw new DOMException(`Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '${_a7ad002dbcb3.protocol}' is not allowed.`);
    Array.isArray(_b172ec11de9d) || (_b172ec11de9d = [ _b172ec11de9d ]), _b172ec11de9d = _b172ec11de9d.map(String);
    for (const _a7ad002dbcb3 of _b172ec11de9d) if (!f(_a7ad002dbcb3)) throw new DOMException(`Failed to construct 'WebSocket': The subprotocol '${_a7ad002dbcb3}' is invalid.`);
    _08c4569a1f21 = _08c4569a1f21 || {};
    return new w(_a7ad002dbcb3, _b172ec11de9d, this.worker, _08c4569a1f21);
  }
  async fetch(_a7ad002dbcb3, _7523873dcee8) {
    const _08c4569a1f21 = new Request(_a7ad002dbcb3, _7523873dcee8), _50c602080895 = _7523873dcee8?.headers || _08c4569a1f21.headers, _2d45c0bd7dce = _50c602080895 instanceof Headers ? Object.fromEntries(_50c602080895) : _50c602080895, _62c6ef9a26e7 = _08c4569a1f21.body;
    let _8efa4723ce2e = new URL(_08c4569a1f21.url);
    if (_8efa4723ce2e.protocol.startsWith("blob:")) {
      const _a7ad002dbcb3 = await _b172ec11de9d(_8efa4723ce2e), _7523873dcee8 = new Response(_a7ad002dbcb3.body, _a7ad002dbcb3);
      return _7523873dcee8.rawHeaders = Object.fromEntries(_a7ad002dbcb3.headers), _7523873dcee8.rawResponse = {
        body: _a7ad002dbcb3.body,
        headers: Object.fromEntries(_a7ad002dbcb3.headers),
        status: _a7ad002dbcb3.status,
        statusText: _a7ad002dbcb3.statusText
      }, _7523873dcee8.finalURL = _8efa4723ce2e.toString(), _7523873dcee8;
    }
    for (let _a7ad002dbcb3 = 0; ;_a7ad002dbcb3++) {
      let _b172ec11de9d = (await this.worker.sendMessage({
        type: "fetch",
        fetch: {
          remote: _8efa4723ce2e.toString(),
          method: _08c4569a1f21.method,
          headers: _2d45c0bd7dce,
          body: _62c6ef9a26e7 || void 0
        }
      }, _62c6ef9a26e7 ? [ _62c6ef9a26e7 ] : [])).fetch, _50c602080895 = new Response(_7e0bb2d229c6.includes(_b172ec11de9d.status) ? void 0 : _b172ec11de9d.body, {
        headers: new Headers(_b172ec11de9d.headers),
        status: _b172ec11de9d.status,
        statusText: _b172ec11de9d.statusText
      });
      _50c602080895.rawHeaders = _b172ec11de9d.headers, _50c602080895.rawResponse = _b172ec11de9d, 
      _50c602080895.finalURL = _8efa4723ce2e.toString();
      const _d9847eb473c7 = _7523873dcee8?.redirect || _08c4569a1f21.redirect;
      if (!_2730d8e1ae0b.includes(_50c602080895.status)) return _50c602080895;
      switch (_d9847eb473c7) {
       case "follow":
        {
          const _b172ec11de9d = _50c602080895.headers.get("location");
          if (20 > _a7ad002dbcb3 && null !== _b172ec11de9d) {
            _8efa4723ce2e = new URL(_b172ec11de9d, _8efa4723ce2e);
            continue;
          }
          throw new TypeError("Failed to fetch");
        }

       case "error":
        throw new TypeError("Failed to fetch");

       case "manual":
        return _50c602080895;
      }
    }
  }
}

console.debug("bare-mux: running v2.1.9 (build dc9dc6e)");

export { k as BareClient, m as BareMuxConnection, w as BareWebSocket, _62c6ef9a26e7 as WebSocketFields, p as WorkerConnection, d as browserSupportsTransferringStreams, k as default, _a7ad002dbcb3 as maxRedirects, f as validProtocol };
