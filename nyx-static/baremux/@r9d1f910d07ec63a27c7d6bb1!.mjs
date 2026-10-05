const _fc74f8214888 = 20, _2bde3ab3a85a = globalThis.fetch, _182a4c2d799d = globalThis.SharedWorker, _5012b1aa7523 = globalThis.localStorage, _84e65a93b997 = globalThis.navigator.serviceWorker, _97446c2a35a2 = MessagePort.prototype.postMessage, _685197378b38 = {
  prototype: {
    send: WebSocket.prototype.send
  },
  CLOSED: WebSocket.CLOSED,
  CLOSING: WebSocket.CLOSING,
  CONNECTING: WebSocket.CONNECTING,
  OPEN: WebSocket.OPEN
};

async function c() {
  const _fc74f8214888 = (await self.clients.matchAll({
    type: "window",
    includeUncontrolled: !0
  })).filter(_fc74f8214888 => {
    try {
      const _2bde3ab3a85a = new URL(_fc74f8214888.url);
      return _2bde3ab3a85a.origin === self.location.origin && !_2bde3ab3a85a.pathname.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/") && !_2bde3ab3a85a.pathname.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/study/");
    } catch {
      return !1;
    }
  }).map(async _fc74f8214888 => {
    const _2bde3ab3a85a = await function(_fc74f8214888) {
      let _2bde3ab3a85a = new MessageChannel;
      return new Promise(_182a4c2d799d => {
        _fc74f8214888.postMessage({
          type: "getPort",
          port: _2bde3ab3a85a.port2
        }, [ _2bde3ab3a85a.port2 ]), _2bde3ab3a85a.port1.onmessage = _fc74f8214888 => {
          _182a4c2d799d(_fc74f8214888.data);
        };
      });
    }(_fc74f8214888);
    return await i(_2bde3ab3a85a), _2bde3ab3a85a;
  }), _2bde3ab3a85a = Promise.race([ Promise.any(_fc74f8214888), new Promise((_fc74f8214888, _2bde3ab3a85a) => setTimeout(_2bde3ab3a85a, 5e3, new TypeError("timeout"))) ]);
  try {
    return await _2bde3ab3a85a;
  } catch (_fc74f8214888) {
    if (_fc74f8214888 instanceof AggregateError) throw console.error("bare-mux: failed to get a bare-mux SharedWorker MessagePort as all clients returned an invalid MessagePort."), 
    new Error("All clients returned an invalid MessagePort.", {
      cause: _fc74f8214888
    });
    return console.warn("bare-mux: failed to get a bare-mux SharedWorker MessagePort within 5s, retrying"), 
    await c();
  }
}

function i(_fc74f8214888) {
  const _2bde3ab3a85a = new MessageChannel, _182a4c2d799d = new Promise((_fc74f8214888, _182a4c2d799d) => {
    _2bde3ab3a85a.port1.onmessage = _2bde3ab3a85a => {
      "pong" === _2bde3ab3a85a.data.type && _fc74f8214888();
    }, setTimeout(_182a4c2d799d, 5e3);
  });
  return _97446c2a35a2.call(_fc74f8214888, {
    message: {
      type: "ping"
    },
    port: _2bde3ab3a85a.port2
  }, [ _2bde3ab3a85a.port2 ]), _182a4c2d799d;
}

function l(_fc74f8214888, _2bde3ab3a85a) {
  const _5012b1aa7523 = new _182a4c2d799d(_fc74f8214888, "ridgewood-stem-worker");
  return _2bde3ab3a85a && _84e65a93b997.addEventListener("message", _2bde3ab3a85a => {
    if ("getPort" === _2bde3ab3a85a.data.type && _2bde3ab3a85a.data.port) {
      console.debug("bare-mux: recieved request for port from sw");
      const _5012b1aa7523 = new _182a4c2d799d(_fc74f8214888, "ridgewood-stem-worker");
      _97446c2a35a2.call(_2bde3ab3a85a.data.port, _5012b1aa7523.port, [ _5012b1aa7523.port ]);
    }
  }), _5012b1aa7523.port;
}

let _5b0d77ed5b57 = null;

function d() {
  if (null === _5b0d77ed5b57) {
    const _fc74f8214888 = new MessageChannel, _2bde3ab3a85a = new ReadableStream;
    let _182a4c2d799d;
    try {
      _97446c2a35a2.call(_fc74f8214888.port1, _2bde3ab3a85a, [ _2bde3ab3a85a ]), _182a4c2d799d = !0;
    } catch (_fc74f8214888) {
      _182a4c2d799d = !1;
    }
    return _5b0d77ed5b57 = _182a4c2d799d, _182a4c2d799d;
  }
  return _5b0d77ed5b57;
}

class p {
  channel;
  port;
  workerPath;
  constructor(_fc74f8214888) {
    this.channel = new BroadcastChannel("bare-mux"), _fc74f8214888 instanceof MessagePort || _fc74f8214888 instanceof Promise ? this.port = _fc74f8214888 : this.createChannel(_fc74f8214888, !0);
  }
  createChannel(_fc74f8214888, _2bde3ab3a85a) {
    if (self.clients) this.port = c(), this.channel.onmessage = _fc74f8214888 => {
      "refreshPort" === _fc74f8214888.data.type && (this.port = c());
    }; else if (_fc74f8214888 && SharedWorker) {
      if (!_fc74f8214888.startsWith("/") && !_fc74f8214888.includes(":")) throw new Error("Invalid URL. Must be absolute or start at the root.");
      this.port = l(_fc74f8214888, _2bde3ab3a85a), console.debug("bare-mux: setting localStorage bare-mux-path to", _fc74f8214888), 
      _5012b1aa7523["bare-mux-path"] = _fc74f8214888;
    } else {
      if (!SharedWorker) throw new Error("Unable to get a channel to the SharedWorker.");
      {
        const _fc74f8214888 = _5012b1aa7523["bare-mux-path"];
        if (console.debug("bare-mux: got localStorage bare-mux-path:", _fc74f8214888), !_fc74f8214888) throw new Error("Unable to get bare-mux workerPath from localStorage.");
        this.port = l(_fc74f8214888, _2bde3ab3a85a);
      }
    }
  }
  async sendMessage(_fc74f8214888, _2bde3ab3a85a) {
    this.port instanceof Promise && (this.port = await this.port);
    try {
      await i(this.port);
    } catch {
      return console.warn("bare-mux: Failed to get a ping response from the worker within 5s. Assuming port is dead."), 
      this.createChannel(), await this.sendMessage(_fc74f8214888, _2bde3ab3a85a);
    }
    const _182a4c2d799d = new MessageChannel, _5012b1aa7523 = [ _182a4c2d799d.port2, ..._2bde3ab3a85a || [] ], _84e65a93b997 = new Promise((_fc74f8214888, _2bde3ab3a85a) => {
      _182a4c2d799d.port1.onmessage = _182a4c2d799d => {
        const _5012b1aa7523 = _182a4c2d799d.data;
        "error" === _5012b1aa7523.type ? _2bde3ab3a85a(_5012b1aa7523.error) : _fc74f8214888(_5012b1aa7523);
      };
    });
    return _97446c2a35a2.call(this.port, {
      message: _fc74f8214888,
      port: _182a4c2d799d.port2
    }, _5012b1aa7523), await _84e65a93b997;
  }
}

class w extends EventTarget {
  protocols;
  url;
  readyState=_685197378b38.CONNECTING;
  channel;
  constructor(_fc74f8214888, _2bde3ab3a85a = [], _182a4c2d799d, _5012b1aa7523) {
    super(), this.protocols = _2bde3ab3a85a, this.url = _fc74f8214888.toString(), this.protocols = _2bde3ab3a85a;
    const s = _fc74f8214888 => {
      this.protocols = _fc74f8214888, this.readyState = _685197378b38.OPEN;
      const _2bde3ab3a85a = new Event("open");
      this.dispatchEvent(_2bde3ab3a85a);
    }, o = async _fc74f8214888 => {
      const _2bde3ab3a85a = new MessageEvent("message", {
        data: _fc74f8214888
      });
      this.dispatchEvent(_2bde3ab3a85a);
    }, c = (_fc74f8214888, _2bde3ab3a85a) => {
      this.readyState = _685197378b38.CLOSED;
      const _182a4c2d799d = new CloseEvent("close", {
        code: _fc74f8214888,
        reason: _2bde3ab3a85a
      });
      this.dispatchEvent(_182a4c2d799d);
    }, i = () => {
      this.readyState = _685197378b38.CLOSED;
      const _fc74f8214888 = new Event("error");
      this.dispatchEvent(_fc74f8214888);
    };
    this.channel = new MessageChannel, this.channel.port1.onmessage = _fc74f8214888 => {
      "open" === _fc74f8214888.data.type ? s(_fc74f8214888.data.args[0]) : "message" === _fc74f8214888.data.type ? o(_fc74f8214888.data.args[0]) : "close" === _fc74f8214888.data.type ? c(_fc74f8214888.data.args[0], _fc74f8214888.data.args[1]) : "error" === _fc74f8214888.data.type && i();
    }, _182a4c2d799d.sendMessage({
      type: "websocket",
      websocket: {
        url: _fc74f8214888.toString(),
        protocols: _2bde3ab3a85a,
        requestHeaders: _5012b1aa7523,
        channel: this.channel.port2
      }
    }, [ this.channel.port2 ]);
  }
  send(..._fc74f8214888) {
    if (this.readyState === _685197378b38.CONNECTING) throw new DOMException("Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.");
    let _2bde3ab3a85a = _fc74f8214888[0];
    _2bde3ab3a85a.buffer && (_2bde3ab3a85a = _2bde3ab3a85a.buffer.slice(_2bde3ab3a85a.byteOffset, _2bde3ab3a85a.byteOffset + _2bde3ab3a85a.byteLength)), 
    _97446c2a35a2.call(this.channel.port1, {
      type: "data",
      data: _2bde3ab3a85a
    }, _2bde3ab3a85a instanceof ArrayBuffer ? [ _2bde3ab3a85a ] : []);
  }
  close(_fc74f8214888, _2bde3ab3a85a) {
    _97446c2a35a2.call(this.channel.port1, {
      type: "close",
      closeCode: _fc74f8214888,
      closeReason: _2bde3ab3a85a
    });
  }
}

function u(_fc74f8214888, _2bde3ab3a85a, _182a4c2d799d) {
  console.error(`error while processing '${_182a4c2d799d}': `, _2bde3ab3a85a), _fc74f8214888.postMessage({
    type: "error",
    error: _2bde3ab3a85a
  });
}

function f(_fc74f8214888) {
  for (let _2bde3ab3a85a = 0; _2bde3ab3a85a < _fc74f8214888.length; _2bde3ab3a85a++) {
    const _182a4c2d799d = _fc74f8214888[_2bde3ab3a85a];
    if (!"!#$%&'*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz|~".includes(_182a4c2d799d)) return !1;
  }
  return !0;
}

const _5388f867b722 = [ "ws:", "wss:" ], _6b3ea797ff0b = [ 101, 204, 205, 304 ], _67e1921d5ac8 = [ 301, 302, 303, 307, 308 ];

class m {
  worker;
  constructor(_fc74f8214888) {
    this.worker = new p(_fc74f8214888);
  }
  async getTransport() {
    return (await this.worker.sendMessage({
      type: "get"
    })).name;
  }
  async setTransport(_fc74f8214888, _2bde3ab3a85a, _182a4c2d799d) {
    await this.setManualTransport(`\n\t\t\tconst { default: BareTransport } = await import("${_fc74f8214888}");\n\t\t\treturn [BareTransport, "${_fc74f8214888}"];\n\t\t`, _2bde3ab3a85a, _182a4c2d799d);
  }
  async setManualTransport(_fc74f8214888, _2bde3ab3a85a, _182a4c2d799d) {
    if ("bare-mux-remote" === _fc74f8214888) throw new Error("Use setRemoteTransport.");
    await this.worker.sendMessage({
      type: "set",
      client: {
        function: _fc74f8214888,
        args: _2bde3ab3a85a
      }
    }, _182a4c2d799d);
  }
  async setRemoteTransport(_fc74f8214888, _2bde3ab3a85a) {
    const _182a4c2d799d = new MessageChannel;
    _182a4c2d799d.port1.onmessage = async _2bde3ab3a85a => {
      const _182a4c2d799d = _2bde3ab3a85a.data.port, _5012b1aa7523 = _2bde3ab3a85a.data.message;
      if ("fetch" === _5012b1aa7523.type) try {
        _fc74f8214888.ready || await _fc74f8214888.init(), await async function(_fc74f8214888, _2bde3ab3a85a, _182a4c2d799d) {
          const _5012b1aa7523 = await _182a4c2d799d.request(new URL(_fc74f8214888.fetch.remote), _fc74f8214888.fetch.method, _fc74f8214888.fetch.body, _fc74f8214888.fetch.headers, null);
          if (!d() && _5012b1aa7523.body instanceof ReadableStream) {
            const _fc74f8214888 = new Response(_5012b1aa7523.body);
            _5012b1aa7523.body = await _fc74f8214888.arrayBuffer();
          }
          _5012b1aa7523.body instanceof ReadableStream || _5012b1aa7523.body instanceof ArrayBuffer ? _97446c2a35a2.call(_2bde3ab3a85a, {
            type: "fetch",
            fetch: _5012b1aa7523
          }, [ _5012b1aa7523.body ]) : _97446c2a35a2.call(_2bde3ab3a85a, {
            type: "fetch",
            fetch: _5012b1aa7523
          });
        }(_5012b1aa7523, _182a4c2d799d, _fc74f8214888);
      } catch (_fc74f8214888) {
        u(_182a4c2d799d, _fc74f8214888, "fetch");
      } else if ("websocket" === _5012b1aa7523.type) try {
        _fc74f8214888.ready || await _fc74f8214888.init(), await async function(_fc74f8214888, _2bde3ab3a85a, _182a4c2d799d) {
          const [_5012b1aa7523, _84e65a93b997] = _182a4c2d799d.connect(new URL(_fc74f8214888.websocket.url), _fc74f8214888.websocket.protocols, _fc74f8214888.websocket.requestHeaders, _2bde3ab3a85a => {
            _97446c2a35a2.call(_fc74f8214888.websocket.channel, {
              type: "open",
              args: [ _2bde3ab3a85a ]
            });
          }, _2bde3ab3a85a => {
            _2bde3ab3a85a instanceof ArrayBuffer ? _97446c2a35a2.call(_fc74f8214888.websocket.channel, {
              type: "message",
              args: [ _2bde3ab3a85a ]
            }, [ _2bde3ab3a85a ]) : _97446c2a35a2.call(_fc74f8214888.websocket.channel, {
              type: "message",
              args: [ _2bde3ab3a85a ]
            });
          }, (_2bde3ab3a85a, _182a4c2d799d) => {
            _97446c2a35a2.call(_fc74f8214888.websocket.channel, {
              type: "close",
              args: [ _2bde3ab3a85a, _182a4c2d799d ]
            });
          }, _2bde3ab3a85a => {
            _97446c2a35a2.call(_fc74f8214888.websocket.channel, {
              type: "error",
              args: [ _2bde3ab3a85a ]
            });
          });
          _fc74f8214888.websocket.channel.onmessage = _fc74f8214888 => {
            "data" === _fc74f8214888.data.type ? _5012b1aa7523(_fc74f8214888.data.data) : "close" === _fc74f8214888.data.type && _84e65a93b997(_fc74f8214888.data.closeCode, _fc74f8214888.data.closeReason);
          }, _97446c2a35a2.call(_2bde3ab3a85a, {
            type: "websocket"
          });
        }(_5012b1aa7523, _182a4c2d799d, _fc74f8214888);
      } catch (_fc74f8214888) {
        u(_182a4c2d799d, _fc74f8214888, "websocket");
      }
    }, await this.worker.sendMessage({
      type: "set",
      client: {
        function: "bare-mux-remote",
        args: [ _182a4c2d799d.port2, _2bde3ab3a85a ]
      }
    }, [ _182a4c2d799d.port2 ]);
  }
  getInnerPort() {
    return this.worker.port;
  }
}

class k {
  worker;
  constructor(_fc74f8214888) {
    this.worker = new p(_fc74f8214888);
  }
  createWebSocket(_fc74f8214888, _2bde3ab3a85a = [], _182a4c2d799d, _5012b1aa7523) {
    try {
      _fc74f8214888 = new URL(_fc74f8214888);
    } catch (_2bde3ab3a85a) {
      throw new DOMException(`Faiiled to construct 'WebSocket': The URL '${_fc74f8214888}' is invalid.`);
    }
    if (!_5388f867b722.includes(_fc74f8214888.protocol)) throw new DOMException(`Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '${_fc74f8214888.protocol}' is not allowed.`);
    Array.isArray(_2bde3ab3a85a) || (_2bde3ab3a85a = [ _2bde3ab3a85a ]), _2bde3ab3a85a = _2bde3ab3a85a.map(String);
    for (const _fc74f8214888 of _2bde3ab3a85a) if (!f(_fc74f8214888)) throw new DOMException(`Failed to construct 'WebSocket': The subprotocol '${_fc74f8214888}' is invalid.`);
    _5012b1aa7523 = _5012b1aa7523 || {};
    return new w(_fc74f8214888, _2bde3ab3a85a, this.worker, _5012b1aa7523);
  }
  async fetch(_fc74f8214888, _182a4c2d799d) {
    const _5012b1aa7523 = new Request(_fc74f8214888, _182a4c2d799d), _84e65a93b997 = _182a4c2d799d?.headers || _5012b1aa7523.headers, _97446c2a35a2 = _84e65a93b997 instanceof Headers ? Object.fromEntries(_84e65a93b997) : _84e65a93b997, _685197378b38 = _5012b1aa7523.body;
    let _5b0d77ed5b57 = new URL(_5012b1aa7523.url);
    if (_5b0d77ed5b57.protocol.startsWith("blob:")) {
      const _fc74f8214888 = await _2bde3ab3a85a(_5b0d77ed5b57), _182a4c2d799d = new Response(_fc74f8214888.body, _fc74f8214888);
      return _182a4c2d799d.rawHeaders = Object.fromEntries(_fc74f8214888.headers), _182a4c2d799d.rawResponse = {
        body: _fc74f8214888.body,
        headers: Object.fromEntries(_fc74f8214888.headers),
        status: _fc74f8214888.status,
        statusText: _fc74f8214888.statusText
      }, _182a4c2d799d.finalURL = _5b0d77ed5b57.toString(), _182a4c2d799d;
    }
    for (let _fc74f8214888 = 0; ;_fc74f8214888++) {
      let _2bde3ab3a85a = (await this.worker.sendMessage({
        type: "fetch",
        fetch: {
          remote: _5b0d77ed5b57.toString(),
          method: _5012b1aa7523.method,
          headers: _97446c2a35a2,
          body: _685197378b38 || void 0
        }
      }, _685197378b38 ? [ _685197378b38 ] : [])).fetch, _84e65a93b997 = new Response(_6b3ea797ff0b.includes(_2bde3ab3a85a.status) ? void 0 : _2bde3ab3a85a.body, {
        headers: new Headers(_2bde3ab3a85a.headers),
        status: _2bde3ab3a85a.status,
        statusText: _2bde3ab3a85a.statusText
      });
      _84e65a93b997.rawHeaders = _2bde3ab3a85a.headers, _84e65a93b997.rawResponse = _2bde3ab3a85a, 
      _84e65a93b997.finalURL = _5b0d77ed5b57.toString();
      const _5388f867b722 = _182a4c2d799d?.redirect || _5012b1aa7523.redirect;
      if (!_67e1921d5ac8.includes(_84e65a93b997.status)) return _84e65a93b997;
      switch (_5388f867b722) {
       case "follow":
        {
          const _2bde3ab3a85a = _84e65a93b997.headers.get("location");
          if (20 > _fc74f8214888 && null !== _2bde3ab3a85a) {
            _5b0d77ed5b57 = new URL(_2bde3ab3a85a, _5b0d77ed5b57);
            continue;
          }
          throw new TypeError("Failed to fetch");
        }

       case "error":
        throw new TypeError("Failed to fetch");

       case "manual":
        return _84e65a93b997;
      }
    }
  }
}

console.debug("bare-mux: running v2.1.9 (build dc9dc6e)");

export { k as BareClient, m as BareMuxConnection, w as BareWebSocket, _685197378b38 as WebSocketFields, p as WorkerConnection, d as browserSupportsTransferringStreams, k as default, _fc74f8214888 as maxRedirects, f as validProtocol };
