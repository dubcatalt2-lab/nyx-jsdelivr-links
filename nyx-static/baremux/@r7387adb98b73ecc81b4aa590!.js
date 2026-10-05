!function(_a3f243e8a525, _3e6b68fd1e44) {
  "object" == typeof exports && "undefined" != typeof module ? _3e6b68fd1e44(exports) : "function" == typeof define && define.amd ? define([ "exports" ], _3e6b68fd1e44) : _3e6b68fd1e44((_a3f243e8a525 = "undefined" != typeof globalThis ? globalThis : _a3f243e8a525 || self).BareMux = {});
}(this, function(_a3f243e8a525) {
  "use strict";
  const _3e6b68fd1e44 = globalThis.fetch, _2c80c3f7c0d4 = globalThis.SharedWorker, _341f6a3bab7b = globalThis.localStorage, _f80c56dcd397 = globalThis.navigator.serviceWorker, _49f40fd3d508 = MessagePort.prototype.postMessage, _9d42c061352b = {
    prototype: {
      send: WebSocket.prototype.send
    },
    CLOSED: WebSocket.CLOSED,
    CLOSING: WebSocket.CLOSING,
    CONNECTING: WebSocket.CONNECTING,
    OPEN: WebSocket.OPEN
  };
  async function c() {
    const _a3f243e8a525 = (await self.clients.matchAll({
      type: "window",
      includeUncontrolled: !0
    })).map(async _a3f243e8a525 => {
      const _3e6b68fd1e44 = await function(_a3f243e8a525) {
        let _3e6b68fd1e44 = new MessageChannel;
        return new Promise(_2c80c3f7c0d4 => {
          _a3f243e8a525.postMessage({
            type: "getPort",
            port: _3e6b68fd1e44.port2
          }, [ _3e6b68fd1e44.port2 ]), _3e6b68fd1e44.port1.onmessage = _a3f243e8a525 => {
            _2c80c3f7c0d4(_a3f243e8a525.data);
          };
        });
      }(_a3f243e8a525);
      return await i(_3e6b68fd1e44), _3e6b68fd1e44;
    }), _3e6b68fd1e44 = Promise.race([ Promise.any(_a3f243e8a525), new Promise((_a3f243e8a525, _3e6b68fd1e44) => setTimeout(_3e6b68fd1e44, 1e3, new TypeError("timeout"))) ]);
    try {
      return await _3e6b68fd1e44;
    } catch (_a3f243e8a525) {
      if (_a3f243e8a525 instanceof AggregateError) throw console.error("bare-mux: failed to get a bare-mux SharedWorker MessagePort as all clients returned an invalid MessagePort."), 
      new Error("All clients returned an invalid MessagePort.", {
        cause: _a3f243e8a525
      });
      return console.warn("bare-mux: failed to get a bare-mux SharedWorker MessagePort within 1s, retrying"), 
      await c();
    }
  }
  function i(_a3f243e8a525) {
    const _3e6b68fd1e44 = new MessageChannel, _2c80c3f7c0d4 = new Promise((_a3f243e8a525, _2c80c3f7c0d4) => {
      _3e6b68fd1e44.port1.onmessage = _3e6b68fd1e44 => {
        "pong" === _3e6b68fd1e44.data.type && _a3f243e8a525();
      }, setTimeout(_2c80c3f7c0d4, 1500);
    });
    return _49f40fd3d508.call(_a3f243e8a525, {
      message: {
        type: "ping"
      },
      port: _3e6b68fd1e44.port2
    }, [ _3e6b68fd1e44.port2 ]), _2c80c3f7c0d4;
  }
  function l(_a3f243e8a525, _3e6b68fd1e44) {
    const _341f6a3bab7b = new _2c80c3f7c0d4(_a3f243e8a525, "ridgewood-stem-worker");
    return _3e6b68fd1e44 && _f80c56dcd397.addEventListener("message", _3e6b68fd1e44 => {
      if ("getPort" === _3e6b68fd1e44.data.type && _3e6b68fd1e44.data.port) {
        console.debug("bare-mux: recieved request for port from sw");
        const _341f6a3bab7b = new _2c80c3f7c0d4(_a3f243e8a525, "ridgewood-stem-worker");
        _49f40fd3d508.call(_3e6b68fd1e44.data.port, _341f6a3bab7b.port, [ _341f6a3bab7b.port ]);
      }
    }), _341f6a3bab7b.port;
  }
  let _6c9f065120bd = null;
  function d() {
    if (null === _6c9f065120bd) {
      const _a3f243e8a525 = new MessageChannel, _3e6b68fd1e44 = new ReadableStream;
      let _2c80c3f7c0d4;
      try {
        _49f40fd3d508.call(_a3f243e8a525.port1, _3e6b68fd1e44, [ _3e6b68fd1e44 ]), _2c80c3f7c0d4 = !0;
      } catch (_a3f243e8a525) {
        _2c80c3f7c0d4 = !1;
      }
      return _6c9f065120bd = _2c80c3f7c0d4, _2c80c3f7c0d4;
    }
    return _6c9f065120bd;
  }
  class p {
    channel;
    port;
    workerPath;
    constructor(_a3f243e8a525) {
      this.channel = new BroadcastChannel("bare-mux"), _a3f243e8a525 instanceof MessagePort || _a3f243e8a525 instanceof Promise ? this.port = _a3f243e8a525 : this.createChannel(_a3f243e8a525, !0);
    }
    createChannel(_a3f243e8a525, _3e6b68fd1e44) {
      if (self.clients) this.port = c(), this.channel.onmessage = _a3f243e8a525 => {
        "refreshPort" === _a3f243e8a525.data.type && (this.port = c());
      }; else if (_a3f243e8a525 && SharedWorker) {
        if (!_a3f243e8a525.startsWith("/") && !_a3f243e8a525.includes(":")) throw new Error("Invalid URL. Must be absolute or start at the root.");
        this.port = l(_a3f243e8a525, _3e6b68fd1e44), console.debug("bare-mux: setting localStorage bare-mux-path to", _a3f243e8a525), 
        _341f6a3bab7b["bare-mux-path"] = _a3f243e8a525;
      } else {
        if (!SharedWorker) throw new Error("Unable to get a channel to the SharedWorker.");
        {
          const _a3f243e8a525 = _341f6a3bab7b["bare-mux-path"];
          if (console.debug("bare-mux: got localStorage bare-mux-path:", _a3f243e8a525), !_a3f243e8a525) throw new Error("Unable to get bare-mux workerPath from localStorage.");
          this.port = l(_a3f243e8a525, _3e6b68fd1e44);
        }
      }
    }
    async sendMessage(_a3f243e8a525, _3e6b68fd1e44) {
      this.port instanceof Promise && (this.port = await this.port);
      try {
        await i(this.port);
      } catch {
        return console.warn("bare-mux: Failed to get a ping response from the worker within 1.5s. Assuming port is dead."), 
        this.createChannel(), await this.sendMessage(_a3f243e8a525, _3e6b68fd1e44);
      }
      const _2c80c3f7c0d4 = new MessageChannel, _341f6a3bab7b = [ _2c80c3f7c0d4.port2, ..._3e6b68fd1e44 || [] ], _f80c56dcd397 = new Promise((_a3f243e8a525, _3e6b68fd1e44) => {
        _2c80c3f7c0d4.port1.onmessage = _2c80c3f7c0d4 => {
          const _341f6a3bab7b = _2c80c3f7c0d4.data;
          "error" === _341f6a3bab7b.type ? _3e6b68fd1e44(_341f6a3bab7b.error) : _a3f243e8a525(_341f6a3bab7b);
        };
      });
      return _49f40fd3d508.call(this.port, {
        message: _a3f243e8a525,
        port: _2c80c3f7c0d4.port2
      }, _341f6a3bab7b), await _f80c56dcd397;
    }
  }
  class u extends EventTarget {
    protocols;
    url;
    readyState=_9d42c061352b.CONNECTING;
    channel;
    constructor(_a3f243e8a525, _3e6b68fd1e44 = [], _2c80c3f7c0d4, _341f6a3bab7b) {
      super(), this.protocols = _3e6b68fd1e44, this.url = _a3f243e8a525.toString(), this.protocols = _3e6b68fd1e44;
      const s = _a3f243e8a525 => {
        this.protocols = _a3f243e8a525, this.readyState = _9d42c061352b.OPEN;
        const _3e6b68fd1e44 = new Event("open");
        this.dispatchEvent(_3e6b68fd1e44);
      }, o = async _a3f243e8a525 => {
        const _3e6b68fd1e44 = new MessageEvent("message", {
          data: _a3f243e8a525
        });
        this.dispatchEvent(_3e6b68fd1e44);
      }, c = (_a3f243e8a525, _3e6b68fd1e44) => {
        this.readyState = _9d42c061352b.CLOSED;
        const _2c80c3f7c0d4 = new CloseEvent("close", {
          code: _a3f243e8a525,
          reason: _3e6b68fd1e44
        });
        this.dispatchEvent(_2c80c3f7c0d4);
      }, i = () => {
        this.readyState = _9d42c061352b.CLOSED;
        const _a3f243e8a525 = new Event("error");
        this.dispatchEvent(_a3f243e8a525);
      };
      this.channel = new MessageChannel, this.channel.port1.onmessage = _a3f243e8a525 => {
        "open" === _a3f243e8a525.data.type ? s(_a3f243e8a525.data.args[0]) : "message" === _a3f243e8a525.data.type ? o(_a3f243e8a525.data.args[0]) : "close" === _a3f243e8a525.data.type ? c(_a3f243e8a525.data.args[0], _a3f243e8a525.data.args[1]) : "error" === _a3f243e8a525.data.type && i();
      }, _2c80c3f7c0d4.sendMessage({
        type: "websocket",
        websocket: {
          url: _a3f243e8a525.toString(),
          protocols: _3e6b68fd1e44,
          requestHeaders: _341f6a3bab7b,
          channel: this.channel.port2
        }
      }, [ this.channel.port2 ]);
    }
    send(..._a3f243e8a525) {
      if (this.readyState === _9d42c061352b.CONNECTING) throw new DOMException("Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.");
      let _3e6b68fd1e44 = _a3f243e8a525[0];
      _3e6b68fd1e44.buffer && (_3e6b68fd1e44 = _3e6b68fd1e44.buffer.slice(_3e6b68fd1e44.byteOffset, _3e6b68fd1e44.byteOffset + _3e6b68fd1e44.byteLength)), 
      _49f40fd3d508.call(this.channel.port1, {
        type: "data",
        data: _3e6b68fd1e44
      }, _3e6b68fd1e44 instanceof ArrayBuffer ? [ _3e6b68fd1e44 ] : []);
    }
    close(_a3f243e8a525, _3e6b68fd1e44) {
      _49f40fd3d508.call(this.channel.port1, {
        type: "close",
        closeCode: _a3f243e8a525,
        closeReason: _3e6b68fd1e44
      });
    }
  }
  function w(_a3f243e8a525, _3e6b68fd1e44, _2c80c3f7c0d4) {
    console.error(`error while processing '${_2c80c3f7c0d4}': `, _3e6b68fd1e44), _a3f243e8a525.postMessage({
      type: "error",
      error: _3e6b68fd1e44
    });
  }
  function f(_a3f243e8a525) {
    for (let _3e6b68fd1e44 = 0; _3e6b68fd1e44 < _a3f243e8a525.length; _3e6b68fd1e44++) {
      const _2c80c3f7c0d4 = _a3f243e8a525[_3e6b68fd1e44];
      if (!"!#$%&'*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz|~".includes(_2c80c3f7c0d4)) return !1;
    }
    return !0;
  }
  const _117b014b1ab6 = [ "ws:", "wss:" ], _3a2fbb21c527 = [ 101, 204, 205, 304 ], _ec59b28e2bc4 = [ 301, 302, 303, 307, 308 ];
  class m {
    worker;
    constructor(_a3f243e8a525) {
      this.worker = new p(_a3f243e8a525);
    }
    createWebSocket(_a3f243e8a525, _3e6b68fd1e44 = [], _2c80c3f7c0d4, _341f6a3bab7b) {
      try {
        _a3f243e8a525 = new URL(_a3f243e8a525);
      } catch (_3e6b68fd1e44) {
        throw new DOMException(`Faiiled to construct 'WebSocket': The URL '${_a3f243e8a525}' is invalid.`);
      }
      if (!_117b014b1ab6.includes(_a3f243e8a525.protocol)) throw new DOMException(`Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '${_a3f243e8a525.protocol}' is not allowed.`);
      Array.isArray(_3e6b68fd1e44) || (_3e6b68fd1e44 = [ _3e6b68fd1e44 ]), _3e6b68fd1e44 = _3e6b68fd1e44.map(String);
      for (const _a3f243e8a525 of _3e6b68fd1e44) if (!f(_a3f243e8a525)) throw new DOMException(`Failed to construct 'WebSocket': The subprotocol '${_a3f243e8a525}' is invalid.`);
      _341f6a3bab7b = _341f6a3bab7b || {};
      return new u(_a3f243e8a525, _3e6b68fd1e44, this.worker, _341f6a3bab7b);
    }
    async fetch(_a3f243e8a525, _2c80c3f7c0d4) {
      const _341f6a3bab7b = new Request(_a3f243e8a525, _2c80c3f7c0d4), _f80c56dcd397 = _2c80c3f7c0d4?.headers || _341f6a3bab7b.headers, _49f40fd3d508 = _f80c56dcd397 instanceof Headers ? Object.fromEntries(_f80c56dcd397) : _f80c56dcd397, _9d42c061352b = _341f6a3bab7b.body;
      let _6c9f065120bd = new URL(_341f6a3bab7b.url);
      if (_6c9f065120bd.protocol.startsWith("blob:")) {
        const _a3f243e8a525 = await _3e6b68fd1e44(_6c9f065120bd), _2c80c3f7c0d4 = new Response(_a3f243e8a525.body, _a3f243e8a525);
        return _2c80c3f7c0d4.rawHeaders = Object.fromEntries(_a3f243e8a525.headers), _2c80c3f7c0d4.rawResponse = {
          body: _a3f243e8a525.body,
          headers: Object.fromEntries(_a3f243e8a525.headers),
          status: _a3f243e8a525.status,
          statusText: _a3f243e8a525.statusText
        }, _2c80c3f7c0d4.finalURL = _6c9f065120bd.toString(), _2c80c3f7c0d4;
      }
      for (let _a3f243e8a525 = 0; ;_a3f243e8a525++) {
        let _3e6b68fd1e44 = (await this.worker.sendMessage({
          type: "fetch",
          fetch: {
            remote: _6c9f065120bd.toString(),
            method: _341f6a3bab7b.method,
            headers: _49f40fd3d508,
            body: _9d42c061352b || void 0
          }
        }, _9d42c061352b ? [ _9d42c061352b ] : [])).fetch, _f80c56dcd397 = new Response(_3a2fbb21c527.includes(_3e6b68fd1e44.status) ? void 0 : _3e6b68fd1e44.body, {
          headers: new Headers(_3e6b68fd1e44.headers),
          status: _3e6b68fd1e44.status,
          statusText: _3e6b68fd1e44.statusText
        });
        _f80c56dcd397.rawHeaders = _3e6b68fd1e44.headers, _f80c56dcd397.rawResponse = _3e6b68fd1e44, 
        _f80c56dcd397.finalURL = _6c9f065120bd.toString();
        const _117b014b1ab6 = _2c80c3f7c0d4?.redirect || _341f6a3bab7b.redirect;
        if (!_ec59b28e2bc4.includes(_f80c56dcd397.status)) return _f80c56dcd397;
        switch (_117b014b1ab6) {
         case "follow":
          {
            const _3e6b68fd1e44 = _f80c56dcd397.headers.get("location");
            if (20 > _a3f243e8a525 && null !== _3e6b68fd1e44) {
              _6c9f065120bd = new URL(_3e6b68fd1e44, _6c9f065120bd);
              continue;
            }
            throw new TypeError("Failed to fetch");
          }

         case "error":
          throw new TypeError("Failed to fetch");

         case "manual":
          return _f80c56dcd397;
        }
      }
    }
  }
  console.debug("bare-mux: running v2.1.9 (build dc9dc6e)"), _a3f243e8a525.BareClient = m, 
  _a3f243e8a525.BareMuxConnection = class {
    worker;
    constructor(_a3f243e8a525) {
      this.worker = new p(_a3f243e8a525);
    }
    async getTransport() {
      return (await this.worker.sendMessage({
        type: "get"
      })).name;
    }
    async setTransport(_a3f243e8a525, _3e6b68fd1e44, _2c80c3f7c0d4) {
      await this.setManualTransport(`\n\t\t\tconst { default: BareTransport } = await import("${_a3f243e8a525}");\n\t\t\treturn [BareTransport, "${_a3f243e8a525}"];\n\t\t`, _3e6b68fd1e44, _2c80c3f7c0d4);
    }
    async setManualTransport(_a3f243e8a525, _3e6b68fd1e44, _2c80c3f7c0d4) {
      if ("bare-mux-remote" === _a3f243e8a525) throw new Error("Use setRemoteTransport.");
      await this.worker.sendMessage({
        type: "set",
        client: {
          function: _a3f243e8a525,
          args: _3e6b68fd1e44
        }
      }, _2c80c3f7c0d4);
    }
    async setRemoteTransport(_a3f243e8a525, _3e6b68fd1e44) {
      const _2c80c3f7c0d4 = new MessageChannel;
      _2c80c3f7c0d4.port1.onmessage = async _3e6b68fd1e44 => {
        const _2c80c3f7c0d4 = _3e6b68fd1e44.data.port, _341f6a3bab7b = _3e6b68fd1e44.data.message;
        if ("fetch" === _341f6a3bab7b.type) try {
          _a3f243e8a525.ready || await _a3f243e8a525.init(), await async function(_a3f243e8a525, _3e6b68fd1e44, _2c80c3f7c0d4) {
            const _341f6a3bab7b = await _2c80c3f7c0d4.request(new URL(_a3f243e8a525.fetch.remote), _a3f243e8a525.fetch.method, _a3f243e8a525.fetch.body, _a3f243e8a525.fetch.headers, null);
            if (!d() && _341f6a3bab7b.body instanceof ReadableStream) {
              const _a3f243e8a525 = new Response(_341f6a3bab7b.body);
              _341f6a3bab7b.body = await _a3f243e8a525.arrayBuffer();
            }
            _341f6a3bab7b.body instanceof ReadableStream || _341f6a3bab7b.body instanceof ArrayBuffer ? _49f40fd3d508.call(_3e6b68fd1e44, {
              type: "fetch",
              fetch: _341f6a3bab7b
            }, [ _341f6a3bab7b.body ]) : _49f40fd3d508.call(_3e6b68fd1e44, {
              type: "fetch",
              fetch: _341f6a3bab7b
            });
          }(_341f6a3bab7b, _2c80c3f7c0d4, _a3f243e8a525);
        } catch (_a3f243e8a525) {
          w(_2c80c3f7c0d4, _a3f243e8a525, "fetch");
        } else if ("websocket" === _341f6a3bab7b.type) try {
          _a3f243e8a525.ready || await _a3f243e8a525.init(), await async function(_a3f243e8a525, _3e6b68fd1e44, _2c80c3f7c0d4) {
            const [_341f6a3bab7b, _f80c56dcd397] = _2c80c3f7c0d4.connect(new URL(_a3f243e8a525.websocket.url), _a3f243e8a525.websocket.protocols, _a3f243e8a525.websocket.requestHeaders, _3e6b68fd1e44 => {
              _49f40fd3d508.call(_a3f243e8a525.websocket.channel, {
                type: "open",
                args: [ _3e6b68fd1e44 ]
              });
            }, _3e6b68fd1e44 => {
              _3e6b68fd1e44 instanceof ArrayBuffer ? _49f40fd3d508.call(_a3f243e8a525.websocket.channel, {
                type: "message",
                args: [ _3e6b68fd1e44 ]
              }, [ _3e6b68fd1e44 ]) : _49f40fd3d508.call(_a3f243e8a525.websocket.channel, {
                type: "message",
                args: [ _3e6b68fd1e44 ]
              });
            }, (_3e6b68fd1e44, _2c80c3f7c0d4) => {
              _49f40fd3d508.call(_a3f243e8a525.websocket.channel, {
                type: "close",
                args: [ _3e6b68fd1e44, _2c80c3f7c0d4 ]
              });
            }, _3e6b68fd1e44 => {
              _49f40fd3d508.call(_a3f243e8a525.websocket.channel, {
                type: "error",
                args: [ _3e6b68fd1e44 ]
              });
            });
            _a3f243e8a525.websocket.channel.onmessage = _a3f243e8a525 => {
              "data" === _a3f243e8a525.data.type ? _341f6a3bab7b(_a3f243e8a525.data.data) : "close" === _a3f243e8a525.data.type && _f80c56dcd397(_a3f243e8a525.data.closeCode, _a3f243e8a525.data.closeReason);
            }, _49f40fd3d508.call(_3e6b68fd1e44, {
              type: "websocket"
            });
          }(_341f6a3bab7b, _2c80c3f7c0d4, _a3f243e8a525);
        } catch (_a3f243e8a525) {
          w(_2c80c3f7c0d4, _a3f243e8a525, "websocket");
        }
      }, await this.worker.sendMessage({
        type: "set",
        client: {
          function: "bare-mux-remote",
          args: [ _2c80c3f7c0d4.port2, _3e6b68fd1e44 ]
        }
      }, [ _2c80c3f7c0d4.port2 ]);
    }
    getInnerPort() {
      return this.worker.port;
    }
  }, _a3f243e8a525.BareWebSocket = u, _a3f243e8a525.WebSocketFields = _9d42c061352b, 
  _a3f243e8a525.WorkerConnection = p, _a3f243e8a525.browserSupportsTransferringStreams = d, 
  _a3f243e8a525.default = m, _a3f243e8a525.maxRedirects = 20, _a3f243e8a525.validProtocol = f, 
  Object.defineProperty(_a3f243e8a525, "__esModule", {
    value: !0
  });
});
