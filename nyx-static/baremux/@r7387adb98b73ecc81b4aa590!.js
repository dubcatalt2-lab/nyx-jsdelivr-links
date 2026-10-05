!function(_e9147d056409, _b63ec875f2ce) {
  "object" == typeof exports && "undefined" != typeof module ? _b63ec875f2ce(exports) : "function" == typeof define && define.amd ? define([ "exports" ], _b63ec875f2ce) : _b63ec875f2ce((_e9147d056409 = "undefined" != typeof globalThis ? globalThis : _e9147d056409 || self).BareMux = {});
}(this, function(_e9147d056409) {
  "use strict";
  const _b63ec875f2ce = globalThis.fetch, _6253db143d30 = globalThis.SharedWorker, _83ed82f361ec = globalThis.localStorage, _f4f1fb6fad74 = globalThis.navigator.serviceWorker, _3a38d0f8ba9b = MessagePort.prototype.postMessage, _4ee7431e9bde = {
    prototype: {
      send: WebSocket.prototype.send
    },
    CLOSED: WebSocket.CLOSED,
    CLOSING: WebSocket.CLOSING,
    CONNECTING: WebSocket.CONNECTING,
    OPEN: WebSocket.OPEN
  };
  async function c() {
    const _e9147d056409 = (await self.clients.matchAll({
      type: "window",
      includeUncontrolled: !0
    })).map(async _e9147d056409 => {
      const _b63ec875f2ce = await function(_e9147d056409) {
        let _b63ec875f2ce = new MessageChannel;
        return new Promise(_6253db143d30 => {
          _e9147d056409.postMessage({
            type: "getPort",
            port: _b63ec875f2ce.port2
          }, [ _b63ec875f2ce.port2 ]), _b63ec875f2ce.port1.onmessage = _e9147d056409 => {
            _6253db143d30(_e9147d056409.data);
          };
        });
      }(_e9147d056409);
      return await i(_b63ec875f2ce), _b63ec875f2ce;
    }), _b63ec875f2ce = Promise.race([ Promise.any(_e9147d056409), new Promise((_e9147d056409, _b63ec875f2ce) => setTimeout(_b63ec875f2ce, 1e3, new TypeError("timeout"))) ]);
    try {
      return await _b63ec875f2ce;
    } catch (_e9147d056409) {
      if (_e9147d056409 instanceof AggregateError) throw console.error("bare-mux: failed to get a bare-mux SharedWorker MessagePort as all clients returned an invalid MessagePort."), 
      new Error("All clients returned an invalid MessagePort.", {
        cause: _e9147d056409
      });
      return console.warn("bare-mux: failed to get a bare-mux SharedWorker MessagePort within 1s, retrying"), 
      await c();
    }
  }
  function i(_e9147d056409) {
    const _b63ec875f2ce = new MessageChannel, _6253db143d30 = new Promise((_e9147d056409, _6253db143d30) => {
      _b63ec875f2ce.port1.onmessage = _b63ec875f2ce => {
        "pong" === _b63ec875f2ce.data.type && _e9147d056409();
      }, setTimeout(_6253db143d30, 1500);
    });
    return _3a38d0f8ba9b.call(_e9147d056409, {
      message: {
        type: "ping"
      },
      port: _b63ec875f2ce.port2
    }, [ _b63ec875f2ce.port2 ]), _6253db143d30;
  }
  function l(_e9147d056409, _b63ec875f2ce) {
    const _83ed82f361ec = new _6253db143d30(_e9147d056409, "ridgewood-stem-worker");
    return _b63ec875f2ce && _f4f1fb6fad74.addEventListener("message", _b63ec875f2ce => {
      if ("getPort" === _b63ec875f2ce.data.type && _b63ec875f2ce.data.port) {
        console.debug("bare-mux: recieved request for port from sw");
        const _83ed82f361ec = new _6253db143d30(_e9147d056409, "ridgewood-stem-worker");
        _3a38d0f8ba9b.call(_b63ec875f2ce.data.port, _83ed82f361ec.port, [ _83ed82f361ec.port ]);
      }
    }), _83ed82f361ec.port;
  }
  let _844f03dc26f2 = null;
  function d() {
    if (null === _844f03dc26f2) {
      const _e9147d056409 = new MessageChannel, _b63ec875f2ce = new ReadableStream;
      let _6253db143d30;
      try {
        _3a38d0f8ba9b.call(_e9147d056409.port1, _b63ec875f2ce, [ _b63ec875f2ce ]), _6253db143d30 = !0;
      } catch (_e9147d056409) {
        _6253db143d30 = !1;
      }
      return _844f03dc26f2 = _6253db143d30, _6253db143d30;
    }
    return _844f03dc26f2;
  }
  class p {
    channel;
    port;
    workerPath;
    constructor(_e9147d056409) {
      this.channel = new BroadcastChannel("bare-mux"), _e9147d056409 instanceof MessagePort || _e9147d056409 instanceof Promise ? this.port = _e9147d056409 : this.createChannel(_e9147d056409, !0);
    }
    createChannel(_e9147d056409, _b63ec875f2ce) {
      if (self.clients) this.port = c(), this.channel.onmessage = _e9147d056409 => {
        "refreshPort" === _e9147d056409.data.type && (this.port = c());
      }; else if (_e9147d056409 && SharedWorker) {
        if (!_e9147d056409.startsWith("/") && !_e9147d056409.includes(":")) throw new Error("Invalid URL. Must be absolute or start at the root.");
        this.port = l(_e9147d056409, _b63ec875f2ce), console.debug("bare-mux: setting localStorage bare-mux-path to", _e9147d056409), 
        _83ed82f361ec["bare-mux-path"] = _e9147d056409;
      } else {
        if (!SharedWorker) throw new Error("Unable to get a channel to the SharedWorker.");
        {
          const _e9147d056409 = _83ed82f361ec["bare-mux-path"];
          if (console.debug("bare-mux: got localStorage bare-mux-path:", _e9147d056409), !_e9147d056409) throw new Error("Unable to get bare-mux workerPath from localStorage.");
          this.port = l(_e9147d056409, _b63ec875f2ce);
        }
      }
    }
    async sendMessage(_e9147d056409, _b63ec875f2ce) {
      this.port instanceof Promise && (this.port = await this.port);
      try {
        await i(this.port);
      } catch {
        return console.warn("bare-mux: Failed to get a ping response from the worker within 1.5s. Assuming port is dead."), 
        this.createChannel(), await this.sendMessage(_e9147d056409, _b63ec875f2ce);
      }
      const _6253db143d30 = new MessageChannel, _83ed82f361ec = [ _6253db143d30.port2, ..._b63ec875f2ce || [] ], _f4f1fb6fad74 = new Promise((_e9147d056409, _b63ec875f2ce) => {
        _6253db143d30.port1.onmessage = _6253db143d30 => {
          const _83ed82f361ec = _6253db143d30.data;
          "error" === _83ed82f361ec.type ? _b63ec875f2ce(_83ed82f361ec.error) : _e9147d056409(_83ed82f361ec);
        };
      });
      return _3a38d0f8ba9b.call(this.port, {
        message: _e9147d056409,
        port: _6253db143d30.port2
      }, _83ed82f361ec), await _f4f1fb6fad74;
    }
  }
  class u extends EventTarget {
    protocols;
    url;
    readyState=_4ee7431e9bde.CONNECTING;
    channel;
    constructor(_e9147d056409, _b63ec875f2ce = [], _6253db143d30, _83ed82f361ec) {
      super(), this.protocols = _b63ec875f2ce, this.url = _e9147d056409.toString(), this.protocols = _b63ec875f2ce;
      const s = _e9147d056409 => {
        this.protocols = _e9147d056409, this.readyState = _4ee7431e9bde.OPEN;
        const _b63ec875f2ce = new Event("open");
        this.dispatchEvent(_b63ec875f2ce);
      }, o = async _e9147d056409 => {
        const _b63ec875f2ce = new MessageEvent("message", {
          data: _e9147d056409
        });
        this.dispatchEvent(_b63ec875f2ce);
      }, c = (_e9147d056409, _b63ec875f2ce) => {
        this.readyState = _4ee7431e9bde.CLOSED;
        const _6253db143d30 = new CloseEvent("close", {
          code: _e9147d056409,
          reason: _b63ec875f2ce
        });
        this.dispatchEvent(_6253db143d30);
      }, i = () => {
        this.readyState = _4ee7431e9bde.CLOSED;
        const _e9147d056409 = new Event("error");
        this.dispatchEvent(_e9147d056409);
      };
      this.channel = new MessageChannel, this.channel.port1.onmessage = _e9147d056409 => {
        "open" === _e9147d056409.data.type ? s(_e9147d056409.data.args[0]) : "message" === _e9147d056409.data.type ? o(_e9147d056409.data.args[0]) : "close" === _e9147d056409.data.type ? c(_e9147d056409.data.args[0], _e9147d056409.data.args[1]) : "error" === _e9147d056409.data.type && i();
      }, _6253db143d30.sendMessage({
        type: "websocket",
        websocket: {
          url: _e9147d056409.toString(),
          protocols: _b63ec875f2ce,
          requestHeaders: _83ed82f361ec,
          channel: this.channel.port2
        }
      }, [ this.channel.port2 ]);
    }
    send(..._e9147d056409) {
      if (this.readyState === _4ee7431e9bde.CONNECTING) throw new DOMException("Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.");
      let _b63ec875f2ce = _e9147d056409[0];
      _b63ec875f2ce.buffer && (_b63ec875f2ce = _b63ec875f2ce.buffer.slice(_b63ec875f2ce.byteOffset, _b63ec875f2ce.byteOffset + _b63ec875f2ce.byteLength)), 
      _3a38d0f8ba9b.call(this.channel.port1, {
        type: "data",
        data: _b63ec875f2ce
      }, _b63ec875f2ce instanceof ArrayBuffer ? [ _b63ec875f2ce ] : []);
    }
    close(_e9147d056409, _b63ec875f2ce) {
      _3a38d0f8ba9b.call(this.channel.port1, {
        type: "close",
        closeCode: _e9147d056409,
        closeReason: _b63ec875f2ce
      });
    }
  }
  function w(_e9147d056409, _b63ec875f2ce, _6253db143d30) {
    console.error(`error while processing '${_6253db143d30}': `, _b63ec875f2ce), _e9147d056409.postMessage({
      type: "error",
      error: _b63ec875f2ce
    });
  }
  function f(_e9147d056409) {
    for (let _b63ec875f2ce = 0; _b63ec875f2ce < _e9147d056409.length; _b63ec875f2ce++) {
      const _6253db143d30 = _e9147d056409[_b63ec875f2ce];
      if (!"!#$%&'*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz|~".includes(_6253db143d30)) return !1;
    }
    return !0;
  }
  const _46f62fc3e546 = [ "ws:", "wss:" ], _4b26498796ba = [ 101, 204, 205, 304 ], _c7f61fcbbf87 = [ 301, 302, 303, 307, 308 ];
  class m {
    worker;
    constructor(_e9147d056409) {
      this.worker = new p(_e9147d056409);
    }
    createWebSocket(_e9147d056409, _b63ec875f2ce = [], _6253db143d30, _83ed82f361ec) {
      try {
        _e9147d056409 = new URL(_e9147d056409);
      } catch (_b63ec875f2ce) {
        throw new DOMException(`Faiiled to construct 'WebSocket': The URL '${_e9147d056409}' is invalid.`);
      }
      if (!_46f62fc3e546.includes(_e9147d056409.protocol)) throw new DOMException(`Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '${_e9147d056409.protocol}' is not allowed.`);
      Array.isArray(_b63ec875f2ce) || (_b63ec875f2ce = [ _b63ec875f2ce ]), _b63ec875f2ce = _b63ec875f2ce.map(String);
      for (const _e9147d056409 of _b63ec875f2ce) if (!f(_e9147d056409)) throw new DOMException(`Failed to construct 'WebSocket': The subprotocol '${_e9147d056409}' is invalid.`);
      _83ed82f361ec = _83ed82f361ec || {};
      return new u(_e9147d056409, _b63ec875f2ce, this.worker, _83ed82f361ec);
    }
    async fetch(_e9147d056409, _6253db143d30) {
      const _83ed82f361ec = new Request(_e9147d056409, _6253db143d30), _f4f1fb6fad74 = _6253db143d30?.headers || _83ed82f361ec.headers, _3a38d0f8ba9b = _f4f1fb6fad74 instanceof Headers ? Object.fromEntries(_f4f1fb6fad74) : _f4f1fb6fad74, _4ee7431e9bde = _83ed82f361ec.body;
      let _844f03dc26f2 = new URL(_83ed82f361ec.url);
      if (_844f03dc26f2.protocol.startsWith("blob:")) {
        const _e9147d056409 = await _b63ec875f2ce(_844f03dc26f2), _6253db143d30 = new Response(_e9147d056409.body, _e9147d056409);
        return _6253db143d30.rawHeaders = Object.fromEntries(_e9147d056409.headers), _6253db143d30.rawResponse = {
          body: _e9147d056409.body,
          headers: Object.fromEntries(_e9147d056409.headers),
          status: _e9147d056409.status,
          statusText: _e9147d056409.statusText
        }, _6253db143d30.finalURL = _844f03dc26f2.toString(), _6253db143d30;
      }
      for (let _e9147d056409 = 0; ;_e9147d056409++) {
        let _b63ec875f2ce = (await this.worker.sendMessage({
          type: "fetch",
          fetch: {
            remote: _844f03dc26f2.toString(),
            method: _83ed82f361ec.method,
            headers: _3a38d0f8ba9b,
            body: _4ee7431e9bde || void 0
          }
        }, _4ee7431e9bde ? [ _4ee7431e9bde ] : [])).fetch, _f4f1fb6fad74 = new Response(_4b26498796ba.includes(_b63ec875f2ce.status) ? void 0 : _b63ec875f2ce.body, {
          headers: new Headers(_b63ec875f2ce.headers),
          status: _b63ec875f2ce.status,
          statusText: _b63ec875f2ce.statusText
        });
        _f4f1fb6fad74.rawHeaders = _b63ec875f2ce.headers, _f4f1fb6fad74.rawResponse = _b63ec875f2ce, 
        _f4f1fb6fad74.finalURL = _844f03dc26f2.toString();
        const _46f62fc3e546 = _6253db143d30?.redirect || _83ed82f361ec.redirect;
        if (!_c7f61fcbbf87.includes(_f4f1fb6fad74.status)) return _f4f1fb6fad74;
        switch (_46f62fc3e546) {
         case "follow":
          {
            const _b63ec875f2ce = _f4f1fb6fad74.headers.get("location");
            if (20 > _e9147d056409 && null !== _b63ec875f2ce) {
              _844f03dc26f2 = new URL(_b63ec875f2ce, _844f03dc26f2);
              continue;
            }
            throw new TypeError("Failed to fetch");
          }

         case "error":
          throw new TypeError("Failed to fetch");

         case "manual":
          return _f4f1fb6fad74;
        }
      }
    }
  }
  console.debug("bare-mux: running v2.1.9 (build dc9dc6e)"), _e9147d056409.BareClient = m, 
  _e9147d056409.BareMuxConnection = class {
    worker;
    constructor(_e9147d056409) {
      this.worker = new p(_e9147d056409);
    }
    async getTransport() {
      return (await this.worker.sendMessage({
        type: "get"
      })).name;
    }
    async setTransport(_e9147d056409, _b63ec875f2ce, _6253db143d30) {
      await this.setManualTransport(`\n\t\t\tconst { default: BareTransport } = await import("${_e9147d056409}");\n\t\t\treturn [BareTransport, "${_e9147d056409}"];\n\t\t`, _b63ec875f2ce, _6253db143d30);
    }
    async setManualTransport(_e9147d056409, _b63ec875f2ce, _6253db143d30) {
      if ("bare-mux-remote" === _e9147d056409) throw new Error("Use setRemoteTransport.");
      await this.worker.sendMessage({
        type: "set",
        client: {
          function: _e9147d056409,
          args: _b63ec875f2ce
        }
      }, _6253db143d30);
    }
    async setRemoteTransport(_e9147d056409, _b63ec875f2ce) {
      const _6253db143d30 = new MessageChannel;
      _6253db143d30.port1.onmessage = async _b63ec875f2ce => {
        const _6253db143d30 = _b63ec875f2ce.data.port, _83ed82f361ec = _b63ec875f2ce.data.message;
        if ("fetch" === _83ed82f361ec.type) try {
          _e9147d056409.ready || await _e9147d056409.init(), await async function(_e9147d056409, _b63ec875f2ce, _6253db143d30) {
            const _83ed82f361ec = await _6253db143d30.request(new URL(_e9147d056409.fetch.remote), _e9147d056409.fetch.method, _e9147d056409.fetch.body, _e9147d056409.fetch.headers, null);
            if (!d() && _83ed82f361ec.body instanceof ReadableStream) {
              const _e9147d056409 = new Response(_83ed82f361ec.body);
              _83ed82f361ec.body = await _e9147d056409.arrayBuffer();
            }
            _83ed82f361ec.body instanceof ReadableStream || _83ed82f361ec.body instanceof ArrayBuffer ? _3a38d0f8ba9b.call(_b63ec875f2ce, {
              type: "fetch",
              fetch: _83ed82f361ec
            }, [ _83ed82f361ec.body ]) : _3a38d0f8ba9b.call(_b63ec875f2ce, {
              type: "fetch",
              fetch: _83ed82f361ec
            });
          }(_83ed82f361ec, _6253db143d30, _e9147d056409);
        } catch (_e9147d056409) {
          w(_6253db143d30, _e9147d056409, "fetch");
        } else if ("websocket" === _83ed82f361ec.type) try {
          _e9147d056409.ready || await _e9147d056409.init(), await async function(_e9147d056409, _b63ec875f2ce, _6253db143d30) {
            const [_83ed82f361ec, _f4f1fb6fad74] = _6253db143d30.connect(new URL(_e9147d056409.websocket.url), _e9147d056409.websocket.protocols, _e9147d056409.websocket.requestHeaders, _b63ec875f2ce => {
              _3a38d0f8ba9b.call(_e9147d056409.websocket.channel, {
                type: "open",
                args: [ _b63ec875f2ce ]
              });
            }, _b63ec875f2ce => {
              _b63ec875f2ce instanceof ArrayBuffer ? _3a38d0f8ba9b.call(_e9147d056409.websocket.channel, {
                type: "message",
                args: [ _b63ec875f2ce ]
              }, [ _b63ec875f2ce ]) : _3a38d0f8ba9b.call(_e9147d056409.websocket.channel, {
                type: "message",
                args: [ _b63ec875f2ce ]
              });
            }, (_b63ec875f2ce, _6253db143d30) => {
              _3a38d0f8ba9b.call(_e9147d056409.websocket.channel, {
                type: "close",
                args: [ _b63ec875f2ce, _6253db143d30 ]
              });
            }, _b63ec875f2ce => {
              _3a38d0f8ba9b.call(_e9147d056409.websocket.channel, {
                type: "error",
                args: [ _b63ec875f2ce ]
              });
            });
            _e9147d056409.websocket.channel.onmessage = _e9147d056409 => {
              "data" === _e9147d056409.data.type ? _83ed82f361ec(_e9147d056409.data.data) : "close" === _e9147d056409.data.type && _f4f1fb6fad74(_e9147d056409.data.closeCode, _e9147d056409.data.closeReason);
            }, _3a38d0f8ba9b.call(_b63ec875f2ce, {
              type: "websocket"
            });
          }(_83ed82f361ec, _6253db143d30, _e9147d056409);
        } catch (_e9147d056409) {
          w(_6253db143d30, _e9147d056409, "websocket");
        }
      }, await this.worker.sendMessage({
        type: "set",
        client: {
          function: "bare-mux-remote",
          args: [ _6253db143d30.port2, _b63ec875f2ce ]
        }
      }, [ _6253db143d30.port2 ]);
    }
    getInnerPort() {
      return this.worker.port;
    }
  }, _e9147d056409.BareWebSocket = u, _e9147d056409.WebSocketFields = _4ee7431e9bde, 
  _e9147d056409.WorkerConnection = p, _e9147d056409.browserSupportsTransferringStreams = d, 
  _e9147d056409.default = m, _e9147d056409.maxRedirects = 20, _e9147d056409.validProtocol = f, 
  Object.defineProperty(_e9147d056409, "__esModule", {
    value: !0
  });
});
