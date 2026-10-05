const _19e62c9f83d3 = 20, _be7864c5fbb7 = globalThis.fetch, _e73813eaddd9 = globalThis.SharedWorker, _eec6f997e9bd = globalThis.localStorage, _47eb79658db3 = globalThis.navigator.serviceWorker, _b85ffaa59a36 = MessagePort.prototype.postMessage, _6447622a5cf7 = {
  prototype: {
    send: WebSocket.prototype.send
  },
  CLOSED: WebSocket.CLOSED,
  CLOSING: WebSocket.CLOSING,
  CONNECTING: WebSocket.CONNECTING,
  OPEN: WebSocket.OPEN
};

async function c() {
  const _19e62c9f83d3 = (await self.clients.matchAll({
    type: "window",
    includeUncontrolled: !0
  })).filter(_19e62c9f83d3 => {
    try {
      const _be7864c5fbb7 = new URL(_19e62c9f83d3.url);
      return _be7864c5fbb7.origin === self.location.origin && !_be7864c5fbb7.pathname.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/") && !_be7864c5fbb7.pathname.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/study/");
    } catch {
      return !1;
    }
  }).map(async _19e62c9f83d3 => {
    const _be7864c5fbb7 = await function(_19e62c9f83d3) {
      let _be7864c5fbb7 = new MessageChannel;
      return new Promise(_e73813eaddd9 => {
        _19e62c9f83d3.postMessage({
          type: "getPort",
          port: _be7864c5fbb7.port2
        }, [ _be7864c5fbb7.port2 ]), _be7864c5fbb7.port1.onmessage = _19e62c9f83d3 => {
          _e73813eaddd9(_19e62c9f83d3.data);
        };
      });
    }(_19e62c9f83d3);
    return await i(_be7864c5fbb7), _be7864c5fbb7;
  }), _be7864c5fbb7 = Promise.race([ Promise.any(_19e62c9f83d3), new Promise((_19e62c9f83d3, _be7864c5fbb7) => setTimeout(_be7864c5fbb7, 5e3, new TypeError("timeout"))) ]);
  try {
    return await _be7864c5fbb7;
  } catch (_19e62c9f83d3) {
    if (_19e62c9f83d3 instanceof AggregateError) throw console.error("bare-mux: failed to get a bare-mux SharedWorker MessagePort as all clients returned an invalid MessagePort."), 
    new Error("All clients returned an invalid MessagePort.", {
      cause: _19e62c9f83d3
    });
    return console.warn("bare-mux: failed to get a bare-mux SharedWorker MessagePort within 5s, retrying"), 
    await c();
  }
}

function i(_19e62c9f83d3) {
  const _be7864c5fbb7 = new MessageChannel, _e73813eaddd9 = new Promise((_19e62c9f83d3, _e73813eaddd9) => {
    _be7864c5fbb7.port1.onmessage = _be7864c5fbb7 => {
      "pong" === _be7864c5fbb7.data.type && _19e62c9f83d3();
    }, setTimeout(_e73813eaddd9, 5e3);
  });
  return _b85ffaa59a36.call(_19e62c9f83d3, {
    message: {
      type: "ping"
    },
    port: _be7864c5fbb7.port2
  }, [ _be7864c5fbb7.port2 ]), _e73813eaddd9;
}

function l(_19e62c9f83d3, _be7864c5fbb7) {
  const _eec6f997e9bd = new _e73813eaddd9(_19e62c9f83d3, "ridgewood-stem-worker");
  return _be7864c5fbb7 && _47eb79658db3.addEventListener("message", _be7864c5fbb7 => {
    if ("getPort" === _be7864c5fbb7.data.type && _be7864c5fbb7.data.port) {
      console.debug("bare-mux: recieved request for port from sw");
      const _eec6f997e9bd = new _e73813eaddd9(_19e62c9f83d3, "ridgewood-stem-worker");
      _b85ffaa59a36.call(_be7864c5fbb7.data.port, _eec6f997e9bd.port, [ _eec6f997e9bd.port ]);
    }
  }), _eec6f997e9bd.port;
}

let _2a92483c69f2 = null;

function d() {
  if (null === _2a92483c69f2) {
    const _19e62c9f83d3 = new MessageChannel, _be7864c5fbb7 = new ReadableStream;
    let _e73813eaddd9;
    try {
      _b85ffaa59a36.call(_19e62c9f83d3.port1, _be7864c5fbb7, [ _be7864c5fbb7 ]), _e73813eaddd9 = !0;
    } catch (_19e62c9f83d3) {
      _e73813eaddd9 = !1;
    }
    return _2a92483c69f2 = _e73813eaddd9, _e73813eaddd9;
  }
  return _2a92483c69f2;
}

class p {
  channel;
  port;
  workerPath;
  constructor(_19e62c9f83d3) {
    this.channel = new BroadcastChannel("bare-mux"), _19e62c9f83d3 instanceof MessagePort || _19e62c9f83d3 instanceof Promise ? this.port = _19e62c9f83d3 : this.createChannel(_19e62c9f83d3, !0);
  }
  createChannel(_19e62c9f83d3, _be7864c5fbb7) {
    if (self.clients) this.port = c(), this.channel.onmessage = _19e62c9f83d3 => {
      "refreshPort" === _19e62c9f83d3.data.type && (this.port = c());
    }; else if (_19e62c9f83d3 && SharedWorker) {
      if (!_19e62c9f83d3.startsWith("/") && !_19e62c9f83d3.includes(":")) throw new Error("Invalid URL. Must be absolute or start at the root.");
      this.port = l(_19e62c9f83d3, _be7864c5fbb7), console.debug("bare-mux: setting localStorage bare-mux-path to", _19e62c9f83d3), 
      _eec6f997e9bd["bare-mux-path"] = _19e62c9f83d3;
    } else {
      if (!SharedWorker) throw new Error("Unable to get a channel to the SharedWorker.");
      {
        const _19e62c9f83d3 = _eec6f997e9bd["bare-mux-path"];
        if (console.debug("bare-mux: got localStorage bare-mux-path:", _19e62c9f83d3), !_19e62c9f83d3) throw new Error("Unable to get bare-mux workerPath from localStorage.");
        this.port = l(_19e62c9f83d3, _be7864c5fbb7);
      }
    }
  }
  async sendMessage(_19e62c9f83d3, _be7864c5fbb7) {
    this.port instanceof Promise && (this.port = await this.port);
    try {
      await i(this.port);
    } catch {
      return console.warn("bare-mux: Failed to get a ping response from the worker within 5s. Assuming port is dead."), 
      this.createChannel(), await this.sendMessage(_19e62c9f83d3, _be7864c5fbb7);
    }
    const _e73813eaddd9 = new MessageChannel, _eec6f997e9bd = [ _e73813eaddd9.port2, ..._be7864c5fbb7 || [] ], _47eb79658db3 = new Promise((_19e62c9f83d3, _be7864c5fbb7) => {
      _e73813eaddd9.port1.onmessage = _e73813eaddd9 => {
        const _eec6f997e9bd = _e73813eaddd9.data;
        "error" === _eec6f997e9bd.type ? _be7864c5fbb7(_eec6f997e9bd.error) : _19e62c9f83d3(_eec6f997e9bd);
      };
    });
    return _b85ffaa59a36.call(this.port, {
      message: _19e62c9f83d3,
      port: _e73813eaddd9.port2
    }, _eec6f997e9bd), await _47eb79658db3;
  }
}

class w extends EventTarget {
  protocols;
  url;
  readyState=_6447622a5cf7.CONNECTING;
  channel;
  constructor(_19e62c9f83d3, _be7864c5fbb7 = [], _e73813eaddd9, _eec6f997e9bd) {
    super(), this.protocols = _be7864c5fbb7, this.url = _19e62c9f83d3.toString(), this.protocols = _be7864c5fbb7;
    const s = _19e62c9f83d3 => {
      this.protocols = _19e62c9f83d3, this.readyState = _6447622a5cf7.OPEN;
      const _be7864c5fbb7 = new Event("open");
      this.dispatchEvent(_be7864c5fbb7);
    }, o = async _19e62c9f83d3 => {
      const _be7864c5fbb7 = new MessageEvent("message", {
        data: _19e62c9f83d3
      });
      this.dispatchEvent(_be7864c5fbb7);
    }, c = (_19e62c9f83d3, _be7864c5fbb7) => {
      this.readyState = _6447622a5cf7.CLOSED;
      const _e73813eaddd9 = new CloseEvent("close", {
        code: _19e62c9f83d3,
        reason: _be7864c5fbb7
      });
      this.dispatchEvent(_e73813eaddd9);
    }, i = () => {
      this.readyState = _6447622a5cf7.CLOSED;
      const _19e62c9f83d3 = new Event("error");
      this.dispatchEvent(_19e62c9f83d3);
    };
    this.channel = new MessageChannel, this.channel.port1.onmessage = _19e62c9f83d3 => {
      "open" === _19e62c9f83d3.data.type ? s(_19e62c9f83d3.data.args[0]) : "message" === _19e62c9f83d3.data.type ? o(_19e62c9f83d3.data.args[0]) : "close" === _19e62c9f83d3.data.type ? c(_19e62c9f83d3.data.args[0], _19e62c9f83d3.data.args[1]) : "error" === _19e62c9f83d3.data.type && i();
    }, _e73813eaddd9.sendMessage({
      type: "websocket",
      websocket: {
        url: _19e62c9f83d3.toString(),
        protocols: _be7864c5fbb7,
        requestHeaders: _eec6f997e9bd,
        channel: this.channel.port2
      }
    }, [ this.channel.port2 ]);
  }
  send(..._19e62c9f83d3) {
    if (this.readyState === _6447622a5cf7.CONNECTING) throw new DOMException("Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.");
    let _be7864c5fbb7 = _19e62c9f83d3[0];
    _be7864c5fbb7.buffer && (_be7864c5fbb7 = _be7864c5fbb7.buffer.slice(_be7864c5fbb7.byteOffset, _be7864c5fbb7.byteOffset + _be7864c5fbb7.byteLength)), 
    _b85ffaa59a36.call(this.channel.port1, {
      type: "data",
      data: _be7864c5fbb7
    }, _be7864c5fbb7 instanceof ArrayBuffer ? [ _be7864c5fbb7 ] : []);
  }
  close(_19e62c9f83d3, _be7864c5fbb7) {
    _b85ffaa59a36.call(this.channel.port1, {
      type: "close",
      closeCode: _19e62c9f83d3,
      closeReason: _be7864c5fbb7
    });
  }
}

function u(_19e62c9f83d3, _be7864c5fbb7, _e73813eaddd9) {
  console.error(`error while processing '${_e73813eaddd9}': `, _be7864c5fbb7), _19e62c9f83d3.postMessage({
    type: "error",
    error: _be7864c5fbb7
  });
}

function f(_19e62c9f83d3) {
  for (let _be7864c5fbb7 = 0; _be7864c5fbb7 < _19e62c9f83d3.length; _be7864c5fbb7++) {
    const _e73813eaddd9 = _19e62c9f83d3[_be7864c5fbb7];
    if (!"!#$%&'*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz|~".includes(_e73813eaddd9)) return !1;
  }
  return !0;
}

const _886634a428dd = [ "ws:", "wss:" ], _dabde9766d02 = [ 101, 204, 205, 304 ], _a1db7e1798f8 = [ 301, 302, 303, 307, 308 ];

class m {
  worker;
  constructor(_19e62c9f83d3) {
    this.worker = new p(_19e62c9f83d3);
  }
  async getTransport() {
    return (await this.worker.sendMessage({
      type: "get"
    })).name;
  }
  async setTransport(_19e62c9f83d3, _be7864c5fbb7, _e73813eaddd9) {
    await this.setManualTransport(`\n\t\t\tconst { default: BareTransport } = await import("${_19e62c9f83d3}");\n\t\t\treturn [BareTransport, "${_19e62c9f83d3}"];\n\t\t`, _be7864c5fbb7, _e73813eaddd9);
  }
  async setManualTransport(_19e62c9f83d3, _be7864c5fbb7, _e73813eaddd9) {
    if ("bare-mux-remote" === _19e62c9f83d3) throw new Error("Use setRemoteTransport.");
    await this.worker.sendMessage({
      type: "set",
      client: {
        function: _19e62c9f83d3,
        args: _be7864c5fbb7
      }
    }, _e73813eaddd9);
  }
  async setRemoteTransport(_19e62c9f83d3, _be7864c5fbb7) {
    const _e73813eaddd9 = new MessageChannel;
    _e73813eaddd9.port1.onmessage = async _be7864c5fbb7 => {
      const _e73813eaddd9 = _be7864c5fbb7.data.port, _eec6f997e9bd = _be7864c5fbb7.data.message;
      if ("fetch" === _eec6f997e9bd.type) try {
        _19e62c9f83d3.ready || await _19e62c9f83d3.init(), await async function(_19e62c9f83d3, _be7864c5fbb7, _e73813eaddd9) {
          const _eec6f997e9bd = await _e73813eaddd9.request(new URL(_19e62c9f83d3.fetch.remote), _19e62c9f83d3.fetch.method, _19e62c9f83d3.fetch.body, _19e62c9f83d3.fetch.headers, null);
          if (!d() && _eec6f997e9bd.body instanceof ReadableStream) {
            const _19e62c9f83d3 = new Response(_eec6f997e9bd.body);
            _eec6f997e9bd.body = await _19e62c9f83d3.arrayBuffer();
          }
          _eec6f997e9bd.body instanceof ReadableStream || _eec6f997e9bd.body instanceof ArrayBuffer ? _b85ffaa59a36.call(_be7864c5fbb7, {
            type: "fetch",
            fetch: _eec6f997e9bd
          }, [ _eec6f997e9bd.body ]) : _b85ffaa59a36.call(_be7864c5fbb7, {
            type: "fetch",
            fetch: _eec6f997e9bd
          });
        }(_eec6f997e9bd, _e73813eaddd9, _19e62c9f83d3);
      } catch (_19e62c9f83d3) {
        u(_e73813eaddd9, _19e62c9f83d3, "fetch");
      } else if ("websocket" === _eec6f997e9bd.type) try {
        _19e62c9f83d3.ready || await _19e62c9f83d3.init(), await async function(_19e62c9f83d3, _be7864c5fbb7, _e73813eaddd9) {
          const [_eec6f997e9bd, _47eb79658db3] = _e73813eaddd9.connect(new URL(_19e62c9f83d3.websocket.url), _19e62c9f83d3.websocket.protocols, _19e62c9f83d3.websocket.requestHeaders, _be7864c5fbb7 => {
            _b85ffaa59a36.call(_19e62c9f83d3.websocket.channel, {
              type: "open",
              args: [ _be7864c5fbb7 ]
            });
          }, _be7864c5fbb7 => {
            _be7864c5fbb7 instanceof ArrayBuffer ? _b85ffaa59a36.call(_19e62c9f83d3.websocket.channel, {
              type: "message",
              args: [ _be7864c5fbb7 ]
            }, [ _be7864c5fbb7 ]) : _b85ffaa59a36.call(_19e62c9f83d3.websocket.channel, {
              type: "message",
              args: [ _be7864c5fbb7 ]
            });
          }, (_be7864c5fbb7, _e73813eaddd9) => {
            _b85ffaa59a36.call(_19e62c9f83d3.websocket.channel, {
              type: "close",
              args: [ _be7864c5fbb7, _e73813eaddd9 ]
            });
          }, _be7864c5fbb7 => {
            _b85ffaa59a36.call(_19e62c9f83d3.websocket.channel, {
              type: "error",
              args: [ _be7864c5fbb7 ]
            });
          });
          _19e62c9f83d3.websocket.channel.onmessage = _19e62c9f83d3 => {
            "data" === _19e62c9f83d3.data.type ? _eec6f997e9bd(_19e62c9f83d3.data.data) : "close" === _19e62c9f83d3.data.type && _47eb79658db3(_19e62c9f83d3.data.closeCode, _19e62c9f83d3.data.closeReason);
          }, _b85ffaa59a36.call(_be7864c5fbb7, {
            type: "websocket"
          });
        }(_eec6f997e9bd, _e73813eaddd9, _19e62c9f83d3);
      } catch (_19e62c9f83d3) {
        u(_e73813eaddd9, _19e62c9f83d3, "websocket");
      }
    }, await this.worker.sendMessage({
      type: "set",
      client: {
        function: "bare-mux-remote",
        args: [ _e73813eaddd9.port2, _be7864c5fbb7 ]
      }
    }, [ _e73813eaddd9.port2 ]);
  }
  getInnerPort() {
    return this.worker.port;
  }
}

class k {
  worker;
  constructor(_19e62c9f83d3) {
    this.worker = new p(_19e62c9f83d3);
  }
  createWebSocket(_19e62c9f83d3, _be7864c5fbb7 = [], _e73813eaddd9, _eec6f997e9bd) {
    try {
      _19e62c9f83d3 = new URL(_19e62c9f83d3);
    } catch (_be7864c5fbb7) {
      throw new DOMException(`Faiiled to construct 'WebSocket': The URL '${_19e62c9f83d3}' is invalid.`);
    }
    if (!_886634a428dd.includes(_19e62c9f83d3.protocol)) throw new DOMException(`Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '${_19e62c9f83d3.protocol}' is not allowed.`);
    Array.isArray(_be7864c5fbb7) || (_be7864c5fbb7 = [ _be7864c5fbb7 ]), _be7864c5fbb7 = _be7864c5fbb7.map(String);
    for (const _19e62c9f83d3 of _be7864c5fbb7) if (!f(_19e62c9f83d3)) throw new DOMException(`Failed to construct 'WebSocket': The subprotocol '${_19e62c9f83d3}' is invalid.`);
    _eec6f997e9bd = _eec6f997e9bd || {};
    return new w(_19e62c9f83d3, _be7864c5fbb7, this.worker, _eec6f997e9bd);
  }
  async fetch(_19e62c9f83d3, _e73813eaddd9) {
    const _eec6f997e9bd = new Request(_19e62c9f83d3, _e73813eaddd9), _47eb79658db3 = _e73813eaddd9?.headers || _eec6f997e9bd.headers, _b85ffaa59a36 = _47eb79658db3 instanceof Headers ? Object.fromEntries(_47eb79658db3) : _47eb79658db3, _6447622a5cf7 = _eec6f997e9bd.body;
    let _2a92483c69f2 = new URL(_eec6f997e9bd.url);
    if (_2a92483c69f2.protocol.startsWith("blob:")) {
      const _19e62c9f83d3 = await _be7864c5fbb7(_2a92483c69f2), _e73813eaddd9 = new Response(_19e62c9f83d3.body, _19e62c9f83d3);
      return _e73813eaddd9.rawHeaders = Object.fromEntries(_19e62c9f83d3.headers), _e73813eaddd9.rawResponse = {
        body: _19e62c9f83d3.body,
        headers: Object.fromEntries(_19e62c9f83d3.headers),
        status: _19e62c9f83d3.status,
        statusText: _19e62c9f83d3.statusText
      }, _e73813eaddd9.finalURL = _2a92483c69f2.toString(), _e73813eaddd9;
    }
    for (let _19e62c9f83d3 = 0; ;_19e62c9f83d3++) {
      let _be7864c5fbb7 = (await this.worker.sendMessage({
        type: "fetch",
        fetch: {
          remote: _2a92483c69f2.toString(),
          method: _eec6f997e9bd.method,
          headers: _b85ffaa59a36,
          body: _6447622a5cf7 || void 0
        }
      }, _6447622a5cf7 ? [ _6447622a5cf7 ] : [])).fetch, _47eb79658db3 = new Response(_dabde9766d02.includes(_be7864c5fbb7.status) ? void 0 : _be7864c5fbb7.body, {
        headers: new Headers(_be7864c5fbb7.headers),
        status: _be7864c5fbb7.status,
        statusText: _be7864c5fbb7.statusText
      });
      _47eb79658db3.rawHeaders = _be7864c5fbb7.headers, _47eb79658db3.rawResponse = _be7864c5fbb7, 
      _47eb79658db3.finalURL = _2a92483c69f2.toString();
      const _886634a428dd = _e73813eaddd9?.redirect || _eec6f997e9bd.redirect;
      if (!_a1db7e1798f8.includes(_47eb79658db3.status)) return _47eb79658db3;
      switch (_886634a428dd) {
       case "follow":
        {
          const _be7864c5fbb7 = _47eb79658db3.headers.get("location");
          if (20 > _19e62c9f83d3 && null !== _be7864c5fbb7) {
            _2a92483c69f2 = new URL(_be7864c5fbb7, _2a92483c69f2);
            continue;
          }
          throw new TypeError("Failed to fetch");
        }

       case "error":
        throw new TypeError("Failed to fetch");

       case "manual":
        return _47eb79658db3;
      }
    }
  }
}

console.debug("bare-mux: running v2.1.9 (build dc9dc6e)");

export { k as BareClient, m as BareMuxConnection, w as BareWebSocket, _6447622a5cf7 as WebSocketFields, p as WorkerConnection, d as browserSupportsTransferringStreams, k as default, _19e62c9f83d3 as maxRedirects, f as validProtocol };
