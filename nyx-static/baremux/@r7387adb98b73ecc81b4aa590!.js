!function(_a953fe8768bb, _a0f0853ca482) {
  "object" == typeof exports && "undefined" != typeof module ? _a0f0853ca482(exports) : "function" == typeof define && define.amd ? define([ "exports" ], _a0f0853ca482) : _a0f0853ca482((_a953fe8768bb = "undefined" != typeof globalThis ? globalThis : _a953fe8768bb || self).BareMux = {});
}(this, function(_a953fe8768bb) {
  "use strict";
  const _a0f0853ca482 = globalThis.fetch, _856c228068b1 = globalThis.SharedWorker, _7540626eebcf = globalThis.localStorage, _97f8aed4e2b7 = globalThis.navigator.serviceWorker, _9e8953ac7791 = MessagePort.prototype.postMessage, _ea248536c654 = {
    prototype: {
      send: WebSocket.prototype.send
    },
    CLOSED: WebSocket.CLOSED,
    CLOSING: WebSocket.CLOSING,
    CONNECTING: WebSocket.CONNECTING,
    OPEN: WebSocket.OPEN
  };
  async function c() {
    const _a953fe8768bb = (await self.clients.matchAll({
      type: "window",
      includeUncontrolled: !0
    })).map(async _a953fe8768bb => {
      const _a0f0853ca482 = await function(_a953fe8768bb) {
        let _a0f0853ca482 = new MessageChannel;
        return new Promise(_856c228068b1 => {
          _a953fe8768bb.postMessage({
            type: "getPort",
            port: _a0f0853ca482.port2
          }, [ _a0f0853ca482.port2 ]), _a0f0853ca482.port1.onmessage = _a953fe8768bb => {
            _856c228068b1(_a953fe8768bb.data);
          };
        });
      }(_a953fe8768bb);
      return await i(_a0f0853ca482), _a0f0853ca482;
    }), _a0f0853ca482 = Promise.race([ Promise.any(_a953fe8768bb), new Promise((_a953fe8768bb, _a0f0853ca482) => setTimeout(_a0f0853ca482, 1e3, new TypeError("timeout"))) ]);
    try {
      return await _a0f0853ca482;
    } catch (_a953fe8768bb) {
      if (_a953fe8768bb instanceof AggregateError) throw console.error("bare-mux: failed to get a bare-mux SharedWorker MessagePort as all clients returned an invalid MessagePort."), 
      new Error("All clients returned an invalid MessagePort.", {
        cause: _a953fe8768bb
      });
      return console.warn("bare-mux: failed to get a bare-mux SharedWorker MessagePort within 1s, retrying"), 
      await c();
    }
  }
  function i(_a953fe8768bb) {
    const _a0f0853ca482 = new MessageChannel, _856c228068b1 = new Promise((_a953fe8768bb, _856c228068b1) => {
      _a0f0853ca482.port1.onmessage = _a0f0853ca482 => {
        "pong" === _a0f0853ca482.data.type && _a953fe8768bb();
      }, setTimeout(_856c228068b1, 1500);
    });
    return _9e8953ac7791.call(_a953fe8768bb, {
      message: {
        type: "ping"
      },
      port: _a0f0853ca482.port2
    }, [ _a0f0853ca482.port2 ]), _856c228068b1;
  }
  function l(_a953fe8768bb, _a0f0853ca482) {
    const _7540626eebcf = new _856c228068b1(_a953fe8768bb, "ridgewood-stem-worker");
    return _a0f0853ca482 && _97f8aed4e2b7.addEventListener("message", _a0f0853ca482 => {
      if ("getPort" === _a0f0853ca482.data.type && _a0f0853ca482.data.port) {
        console.debug("bare-mux: recieved request for port from sw");
        const _7540626eebcf = new _856c228068b1(_a953fe8768bb, "ridgewood-stem-worker");
        _9e8953ac7791.call(_a0f0853ca482.data.port, _7540626eebcf.port, [ _7540626eebcf.port ]);
      }
    }), _7540626eebcf.port;
  }
  let _f13b03c4c51f = null;
  function d() {
    if (null === _f13b03c4c51f) {
      const _a953fe8768bb = new MessageChannel, _a0f0853ca482 = new ReadableStream;
      let _856c228068b1;
      try {
        _9e8953ac7791.call(_a953fe8768bb.port1, _a0f0853ca482, [ _a0f0853ca482 ]), _856c228068b1 = !0;
      } catch (_a953fe8768bb) {
        _856c228068b1 = !1;
      }
      return _f13b03c4c51f = _856c228068b1, _856c228068b1;
    }
    return _f13b03c4c51f;
  }
  class p {
    channel;
    port;
    workerPath;
    constructor(_a953fe8768bb) {
      this.channel = new BroadcastChannel("bare-mux"), _a953fe8768bb instanceof MessagePort || _a953fe8768bb instanceof Promise ? this.port = _a953fe8768bb : this.createChannel(_a953fe8768bb, !0);
    }
    createChannel(_a953fe8768bb, _a0f0853ca482) {
      if (self.clients) this.port = c(), this.channel.onmessage = _a953fe8768bb => {
        "refreshPort" === _a953fe8768bb.data.type && (this.port = c());
      }; else if (_a953fe8768bb && SharedWorker) {
        if (!_a953fe8768bb.startsWith("/") && !_a953fe8768bb.includes(":")) throw new Error("Invalid URL. Must be absolute or start at the root.");
        this.port = l(_a953fe8768bb, _a0f0853ca482), console.debug("bare-mux: setting localStorage bare-mux-path to", _a953fe8768bb), 
        _7540626eebcf["bare-mux-path"] = _a953fe8768bb;
      } else {
        if (!SharedWorker) throw new Error("Unable to get a channel to the SharedWorker.");
        {
          const _a953fe8768bb = _7540626eebcf["bare-mux-path"];
          if (console.debug("bare-mux: got localStorage bare-mux-path:", _a953fe8768bb), !_a953fe8768bb) throw new Error("Unable to get bare-mux workerPath from localStorage.");
          this.port = l(_a953fe8768bb, _a0f0853ca482);
        }
      }
    }
    async sendMessage(_a953fe8768bb, _a0f0853ca482) {
      this.port instanceof Promise && (this.port = await this.port);
      try {
        await i(this.port);
      } catch {
        return console.warn("bare-mux: Failed to get a ping response from the worker within 1.5s. Assuming port is dead."), 
        this.createChannel(), await this.sendMessage(_a953fe8768bb, _a0f0853ca482);
      }
      const _856c228068b1 = new MessageChannel, _7540626eebcf = [ _856c228068b1.port2, ..._a0f0853ca482 || [] ], _97f8aed4e2b7 = new Promise((_a953fe8768bb, _a0f0853ca482) => {
        _856c228068b1.port1.onmessage = _856c228068b1 => {
          const _7540626eebcf = _856c228068b1.data;
          "error" === _7540626eebcf.type ? _a0f0853ca482(_7540626eebcf.error) : _a953fe8768bb(_7540626eebcf);
        };
      });
      return _9e8953ac7791.call(this.port, {
        message: _a953fe8768bb,
        port: _856c228068b1.port2
      }, _7540626eebcf), await _97f8aed4e2b7;
    }
  }
  class u extends EventTarget {
    protocols;
    url;
    readyState=_ea248536c654.CONNECTING;
    channel;
    constructor(_a953fe8768bb, _a0f0853ca482 = [], _856c228068b1, _7540626eebcf) {
      super(), this.protocols = _a0f0853ca482, this.url = _a953fe8768bb.toString(), this.protocols = _a0f0853ca482;
      const s = _a953fe8768bb => {
        this.protocols = _a953fe8768bb, this.readyState = _ea248536c654.OPEN;
        const _a0f0853ca482 = new Event("open");
        this.dispatchEvent(_a0f0853ca482);
      }, o = async _a953fe8768bb => {
        const _a0f0853ca482 = new MessageEvent("message", {
          data: _a953fe8768bb
        });
        this.dispatchEvent(_a0f0853ca482);
      }, c = (_a953fe8768bb, _a0f0853ca482) => {
        this.readyState = _ea248536c654.CLOSED;
        const _856c228068b1 = new CloseEvent("close", {
          code: _a953fe8768bb,
          reason: _a0f0853ca482
        });
        this.dispatchEvent(_856c228068b1);
      }, i = () => {
        this.readyState = _ea248536c654.CLOSED;
        const _a953fe8768bb = new Event("error");
        this.dispatchEvent(_a953fe8768bb);
      };
      this.channel = new MessageChannel, this.channel.port1.onmessage = _a953fe8768bb => {
        "open" === _a953fe8768bb.data.type ? s(_a953fe8768bb.data.args[0]) : "message" === _a953fe8768bb.data.type ? o(_a953fe8768bb.data.args[0]) : "close" === _a953fe8768bb.data.type ? c(_a953fe8768bb.data.args[0], _a953fe8768bb.data.args[1]) : "error" === _a953fe8768bb.data.type && i();
      }, _856c228068b1.sendMessage({
        type: "websocket",
        websocket: {
          url: _a953fe8768bb.toString(),
          protocols: _a0f0853ca482,
          requestHeaders: _7540626eebcf,
          channel: this.channel.port2
        }
      }, [ this.channel.port2 ]);
    }
    send(..._a953fe8768bb) {
      if (this.readyState === _ea248536c654.CONNECTING) throw new DOMException("Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.");
      let _a0f0853ca482 = _a953fe8768bb[0];
      _a0f0853ca482.buffer && (_a0f0853ca482 = _a0f0853ca482.buffer.slice(_a0f0853ca482.byteOffset, _a0f0853ca482.byteOffset + _a0f0853ca482.byteLength)), 
      _9e8953ac7791.call(this.channel.port1, {
        type: "data",
        data: _a0f0853ca482
      }, _a0f0853ca482 instanceof ArrayBuffer ? [ _a0f0853ca482 ] : []);
    }
    close(_a953fe8768bb, _a0f0853ca482) {
      _9e8953ac7791.call(this.channel.port1, {
        type: "close",
        closeCode: _a953fe8768bb,
        closeReason: _a0f0853ca482
      });
    }
  }
  function w(_a953fe8768bb, _a0f0853ca482, _856c228068b1) {
    console.error(`error while processing '${_856c228068b1}': `, _a0f0853ca482), _a953fe8768bb.postMessage({
      type: "error",
      error: _a0f0853ca482
    });
  }
  function f(_a953fe8768bb) {
    for (let _a0f0853ca482 = 0; _a0f0853ca482 < _a953fe8768bb.length; _a0f0853ca482++) {
      const _856c228068b1 = _a953fe8768bb[_a0f0853ca482];
      if (!"!#$%&'*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz|~".includes(_856c228068b1)) return !1;
    }
    return !0;
  }
  const _95351f27aa5d = [ "ws:", "wss:" ], _c222d57b3a2d = [ 101, 204, 205, 304 ], _d44dca5f5d5b = [ 301, 302, 303, 307, 308 ];
  class m {
    worker;
    constructor(_a953fe8768bb) {
      this.worker = new p(_a953fe8768bb);
    }
    createWebSocket(_a953fe8768bb, _a0f0853ca482 = [], _856c228068b1, _7540626eebcf) {
      try {
        _a953fe8768bb = new URL(_a953fe8768bb);
      } catch (_a0f0853ca482) {
        throw new DOMException(`Faiiled to construct 'WebSocket': The URL '${_a953fe8768bb}' is invalid.`);
      }
      if (!_95351f27aa5d.includes(_a953fe8768bb.protocol)) throw new DOMException(`Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '${_a953fe8768bb.protocol}' is not allowed.`);
      Array.isArray(_a0f0853ca482) || (_a0f0853ca482 = [ _a0f0853ca482 ]), _a0f0853ca482 = _a0f0853ca482.map(String);
      for (const _a953fe8768bb of _a0f0853ca482) if (!f(_a953fe8768bb)) throw new DOMException(`Failed to construct 'WebSocket': The subprotocol '${_a953fe8768bb}' is invalid.`);
      _7540626eebcf = _7540626eebcf || {};
      return new u(_a953fe8768bb, _a0f0853ca482, this.worker, _7540626eebcf);
    }
    async fetch(_a953fe8768bb, _856c228068b1) {
      const _7540626eebcf = new Request(_a953fe8768bb, _856c228068b1), _97f8aed4e2b7 = _856c228068b1?.headers || _7540626eebcf.headers, _9e8953ac7791 = _97f8aed4e2b7 instanceof Headers ? Object.fromEntries(_97f8aed4e2b7) : _97f8aed4e2b7, _ea248536c654 = _7540626eebcf.body;
      let _f13b03c4c51f = new URL(_7540626eebcf.url);
      if (_f13b03c4c51f.protocol.startsWith("blob:")) {
        const _a953fe8768bb = await _a0f0853ca482(_f13b03c4c51f), _856c228068b1 = new Response(_a953fe8768bb.body, _a953fe8768bb);
        return _856c228068b1.rawHeaders = Object.fromEntries(_a953fe8768bb.headers), _856c228068b1.rawResponse = {
          body: _a953fe8768bb.body,
          headers: Object.fromEntries(_a953fe8768bb.headers),
          status: _a953fe8768bb.status,
          statusText: _a953fe8768bb.statusText
        }, _856c228068b1.finalURL = _f13b03c4c51f.toString(), _856c228068b1;
      }
      for (let _a953fe8768bb = 0; ;_a953fe8768bb++) {
        let _a0f0853ca482 = (await this.worker.sendMessage({
          type: "fetch",
          fetch: {
            remote: _f13b03c4c51f.toString(),
            method: _7540626eebcf.method,
            headers: _9e8953ac7791,
            body: _ea248536c654 || void 0
          }
        }, _ea248536c654 ? [ _ea248536c654 ] : [])).fetch, _97f8aed4e2b7 = new Response(_c222d57b3a2d.includes(_a0f0853ca482.status) ? void 0 : _a0f0853ca482.body, {
          headers: new Headers(_a0f0853ca482.headers),
          status: _a0f0853ca482.status,
          statusText: _a0f0853ca482.statusText
        });
        _97f8aed4e2b7.rawHeaders = _a0f0853ca482.headers, _97f8aed4e2b7.rawResponse = _a0f0853ca482, 
        _97f8aed4e2b7.finalURL = _f13b03c4c51f.toString();
        const _95351f27aa5d = _856c228068b1?.redirect || _7540626eebcf.redirect;
        if (!_d44dca5f5d5b.includes(_97f8aed4e2b7.status)) return _97f8aed4e2b7;
        switch (_95351f27aa5d) {
         case "follow":
          {
            const _a0f0853ca482 = _97f8aed4e2b7.headers.get("location");
            if (20 > _a953fe8768bb && null !== _a0f0853ca482) {
              _f13b03c4c51f = new URL(_a0f0853ca482, _f13b03c4c51f);
              continue;
            }
            throw new TypeError("Failed to fetch");
          }

         case "error":
          throw new TypeError("Failed to fetch");

         case "manual":
          return _97f8aed4e2b7;
        }
      }
    }
  }
  console.debug("bare-mux: running v2.1.9 (build dc9dc6e)"), _a953fe8768bb.BareClient = m, 
  _a953fe8768bb.BareMuxConnection = class {
    worker;
    constructor(_a953fe8768bb) {
      this.worker = new p(_a953fe8768bb);
    }
    async getTransport() {
      return (await this.worker.sendMessage({
        type: "get"
      })).name;
    }
    async setTransport(_a953fe8768bb, _a0f0853ca482, _856c228068b1) {
      await this.setManualTransport(`\n\t\t\tconst { default: BareTransport } = await import("${_a953fe8768bb}");\n\t\t\treturn [BareTransport, "${_a953fe8768bb}"];\n\t\t`, _a0f0853ca482, _856c228068b1);
    }
    async setManualTransport(_a953fe8768bb, _a0f0853ca482, _856c228068b1) {
      if ("bare-mux-remote" === _a953fe8768bb) throw new Error("Use setRemoteTransport.");
      await this.worker.sendMessage({
        type: "set",
        client: {
          function: _a953fe8768bb,
          args: _a0f0853ca482
        }
      }, _856c228068b1);
    }
    async setRemoteTransport(_a953fe8768bb, _a0f0853ca482) {
      const _856c228068b1 = new MessageChannel;
      _856c228068b1.port1.onmessage = async _a0f0853ca482 => {
        const _856c228068b1 = _a0f0853ca482.data.port, _7540626eebcf = _a0f0853ca482.data.message;
        if ("fetch" === _7540626eebcf.type) try {
          _a953fe8768bb.ready || await _a953fe8768bb.init(), await async function(_a953fe8768bb, _a0f0853ca482, _856c228068b1) {
            const _7540626eebcf = await _856c228068b1.request(new URL(_a953fe8768bb.fetch.remote), _a953fe8768bb.fetch.method, _a953fe8768bb.fetch.body, _a953fe8768bb.fetch.headers, null);
            if (!d() && _7540626eebcf.body instanceof ReadableStream) {
              const _a953fe8768bb = new Response(_7540626eebcf.body);
              _7540626eebcf.body = await _a953fe8768bb.arrayBuffer();
            }
            _7540626eebcf.body instanceof ReadableStream || _7540626eebcf.body instanceof ArrayBuffer ? _9e8953ac7791.call(_a0f0853ca482, {
              type: "fetch",
              fetch: _7540626eebcf
            }, [ _7540626eebcf.body ]) : _9e8953ac7791.call(_a0f0853ca482, {
              type: "fetch",
              fetch: _7540626eebcf
            });
          }(_7540626eebcf, _856c228068b1, _a953fe8768bb);
        } catch (_a953fe8768bb) {
          w(_856c228068b1, _a953fe8768bb, "fetch");
        } else if ("websocket" === _7540626eebcf.type) try {
          _a953fe8768bb.ready || await _a953fe8768bb.init(), await async function(_a953fe8768bb, _a0f0853ca482, _856c228068b1) {
            const [_7540626eebcf, _97f8aed4e2b7] = _856c228068b1.connect(new URL(_a953fe8768bb.websocket.url), _a953fe8768bb.websocket.protocols, _a953fe8768bb.websocket.requestHeaders, _a0f0853ca482 => {
              _9e8953ac7791.call(_a953fe8768bb.websocket.channel, {
                type: "open",
                args: [ _a0f0853ca482 ]
              });
            }, _a0f0853ca482 => {
              _a0f0853ca482 instanceof ArrayBuffer ? _9e8953ac7791.call(_a953fe8768bb.websocket.channel, {
                type: "message",
                args: [ _a0f0853ca482 ]
              }, [ _a0f0853ca482 ]) : _9e8953ac7791.call(_a953fe8768bb.websocket.channel, {
                type: "message",
                args: [ _a0f0853ca482 ]
              });
            }, (_a0f0853ca482, _856c228068b1) => {
              _9e8953ac7791.call(_a953fe8768bb.websocket.channel, {
                type: "close",
                args: [ _a0f0853ca482, _856c228068b1 ]
              });
            }, _a0f0853ca482 => {
              _9e8953ac7791.call(_a953fe8768bb.websocket.channel, {
                type: "error",
                args: [ _a0f0853ca482 ]
              });
            });
            _a953fe8768bb.websocket.channel.onmessage = _a953fe8768bb => {
              "data" === _a953fe8768bb.data.type ? _7540626eebcf(_a953fe8768bb.data.data) : "close" === _a953fe8768bb.data.type && _97f8aed4e2b7(_a953fe8768bb.data.closeCode, _a953fe8768bb.data.closeReason);
            }, _9e8953ac7791.call(_a0f0853ca482, {
              type: "websocket"
            });
          }(_7540626eebcf, _856c228068b1, _a953fe8768bb);
        } catch (_a953fe8768bb) {
          w(_856c228068b1, _a953fe8768bb, "websocket");
        }
      }, await this.worker.sendMessage({
        type: "set",
        client: {
          function: "bare-mux-remote",
          args: [ _856c228068b1.port2, _a0f0853ca482 ]
        }
      }, [ _856c228068b1.port2 ]);
    }
    getInnerPort() {
      return this.worker.port;
    }
  }, _a953fe8768bb.BareWebSocket = u, _a953fe8768bb.WebSocketFields = _ea248536c654, 
  _a953fe8768bb.WorkerConnection = p, _a953fe8768bb.browserSupportsTransferringStreams = d, 
  _a953fe8768bb.default = m, _a953fe8768bb.maxRedirects = 20, _a953fe8768bb.validProtocol = f, 
  Object.defineProperty(_a953fe8768bb, "__esModule", {
    value: !0
  });
});
