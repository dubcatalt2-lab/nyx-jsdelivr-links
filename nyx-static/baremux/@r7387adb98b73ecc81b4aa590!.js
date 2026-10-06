!function(_65102173b763, _7ee4ed171ab2) {
  "object" == typeof exports && "undefined" != typeof module ? _7ee4ed171ab2(exports) : "function" == typeof define && define.amd ? define([ "exports" ], _7ee4ed171ab2) : _7ee4ed171ab2((_65102173b763 = "undefined" != typeof globalThis ? globalThis : _65102173b763 || self).BareMux = {});
}(this, function(_65102173b763) {
  "use strict";
  const _7ee4ed171ab2 = globalThis.fetch, _bd4764eb474e = globalThis.SharedWorker, _4a7a7597cafa = globalThis.localStorage, _3b19986c19f5 = globalThis.navigator.serviceWorker, _fa824263c902 = MessagePort.prototype.postMessage, _618c7d5494be = {
    prototype: {
      send: WebSocket.prototype.send
    },
    CLOSED: WebSocket.CLOSED,
    CLOSING: WebSocket.CLOSING,
    CONNECTING: WebSocket.CONNECTING,
    OPEN: WebSocket.OPEN
  };
  async function c() {
    const _65102173b763 = (await self.clients.matchAll({
      type: "window",
      includeUncontrolled: !0
    })).map(async _65102173b763 => {
      const _7ee4ed171ab2 = await function(_65102173b763) {
        let _7ee4ed171ab2 = new MessageChannel;
        return new Promise(_bd4764eb474e => {
          _65102173b763.postMessage({
            type: "getPort",
            port: _7ee4ed171ab2.port2
          }, [ _7ee4ed171ab2.port2 ]), _7ee4ed171ab2.port1.onmessage = _65102173b763 => {
            _bd4764eb474e(_65102173b763.data);
          };
        });
      }(_65102173b763);
      return await i(_7ee4ed171ab2), _7ee4ed171ab2;
    }), _7ee4ed171ab2 = Promise.race([ Promise.any(_65102173b763), new Promise((_65102173b763, _7ee4ed171ab2) => setTimeout(_7ee4ed171ab2, 1e3, new TypeError("timeout"))) ]);
    try {
      return await _7ee4ed171ab2;
    } catch (_65102173b763) {
      if (_65102173b763 instanceof AggregateError) throw console.error("bare-mux: failed to get a bare-mux SharedWorker MessagePort as all clients returned an invalid MessagePort."), 
      new Error("All clients returned an invalid MessagePort.", {
        cause: _65102173b763
      });
      return console.warn("bare-mux: failed to get a bare-mux SharedWorker MessagePort within 1s, retrying"), 
      await c();
    }
  }
  function i(_65102173b763) {
    const _7ee4ed171ab2 = new MessageChannel, _bd4764eb474e = new Promise((_65102173b763, _bd4764eb474e) => {
      _7ee4ed171ab2.port1.onmessage = _7ee4ed171ab2 => {
        "pong" === _7ee4ed171ab2.data.type && _65102173b763();
      }, setTimeout(_bd4764eb474e, 1500);
    });
    return _fa824263c902.call(_65102173b763, {
      message: {
        type: "ping"
      },
      port: _7ee4ed171ab2.port2
    }, [ _7ee4ed171ab2.port2 ]), _bd4764eb474e;
  }
  function l(_65102173b763, _7ee4ed171ab2) {
    const _4a7a7597cafa = new _bd4764eb474e(_65102173b763, "ridgewood-stem-worker");
    return _7ee4ed171ab2 && _3b19986c19f5.addEventListener("message", _7ee4ed171ab2 => {
      if ("getPort" === _7ee4ed171ab2.data.type && _7ee4ed171ab2.data.port) {
        console.debug("bare-mux: recieved request for port from sw");
        const _4a7a7597cafa = new _bd4764eb474e(_65102173b763, "ridgewood-stem-worker");
        _fa824263c902.call(_7ee4ed171ab2.data.port, _4a7a7597cafa.port, [ _4a7a7597cafa.port ]);
      }
    }), _4a7a7597cafa.port;
  }
  let _8d2aa24045ff = null;
  function d() {
    if (null === _8d2aa24045ff) {
      const _65102173b763 = new MessageChannel, _7ee4ed171ab2 = new ReadableStream;
      let _bd4764eb474e;
      try {
        _fa824263c902.call(_65102173b763.port1, _7ee4ed171ab2, [ _7ee4ed171ab2 ]), _bd4764eb474e = !0;
      } catch (_65102173b763) {
        _bd4764eb474e = !1;
      }
      return _8d2aa24045ff = _bd4764eb474e, _bd4764eb474e;
    }
    return _8d2aa24045ff;
  }
  class p {
    channel;
    port;
    workerPath;
    constructor(_65102173b763) {
      this.channel = new BroadcastChannel("bare-mux"), _65102173b763 instanceof MessagePort || _65102173b763 instanceof Promise ? this.port = _65102173b763 : this.createChannel(_65102173b763, !0);
    }
    createChannel(_65102173b763, _7ee4ed171ab2) {
      if (self.clients) this.port = c(), this.channel.onmessage = _65102173b763 => {
        "refreshPort" === _65102173b763.data.type && (this.port = c());
      }; else if (_65102173b763 && SharedWorker) {
        if (!_65102173b763.startsWith("/") && !_65102173b763.includes(":")) throw new Error("Invalid URL. Must be absolute or start at the root.");
        this.port = l(_65102173b763, _7ee4ed171ab2), console.debug("bare-mux: setting localStorage bare-mux-path to", _65102173b763), 
        _4a7a7597cafa["bare-mux-path"] = _65102173b763;
      } else {
        if (!SharedWorker) throw new Error("Unable to get a channel to the SharedWorker.");
        {
          const _65102173b763 = _4a7a7597cafa["bare-mux-path"];
          if (console.debug("bare-mux: got localStorage bare-mux-path:", _65102173b763), !_65102173b763) throw new Error("Unable to get bare-mux workerPath from localStorage.");
          this.port = l(_65102173b763, _7ee4ed171ab2);
        }
      }
    }
    async sendMessage(_65102173b763, _7ee4ed171ab2) {
      this.port instanceof Promise && (this.port = await this.port);
      try {
        await i(this.port);
      } catch {
        return console.warn("bare-mux: Failed to get a ping response from the worker within 1.5s. Assuming port is dead."), 
        this.createChannel(), await this.sendMessage(_65102173b763, _7ee4ed171ab2);
      }
      const _bd4764eb474e = new MessageChannel, _4a7a7597cafa = [ _bd4764eb474e.port2, ..._7ee4ed171ab2 || [] ], _3b19986c19f5 = new Promise((_65102173b763, _7ee4ed171ab2) => {
        _bd4764eb474e.port1.onmessage = _bd4764eb474e => {
          const _4a7a7597cafa = _bd4764eb474e.data;
          "error" === _4a7a7597cafa.type ? _7ee4ed171ab2(_4a7a7597cafa.error) : _65102173b763(_4a7a7597cafa);
        };
      });
      return _fa824263c902.call(this.port, {
        message: _65102173b763,
        port: _bd4764eb474e.port2
      }, _4a7a7597cafa), await _3b19986c19f5;
    }
  }
  class u extends EventTarget {
    protocols;
    url;
    readyState=_618c7d5494be.CONNECTING;
    channel;
    constructor(_65102173b763, _7ee4ed171ab2 = [], _bd4764eb474e, _4a7a7597cafa) {
      super(), this.protocols = _7ee4ed171ab2, this.url = _65102173b763.toString(), this.protocols = _7ee4ed171ab2;
      const s = _65102173b763 => {
        this.protocols = _65102173b763, this.readyState = _618c7d5494be.OPEN;
        const _7ee4ed171ab2 = new Event("open");
        this.dispatchEvent(_7ee4ed171ab2);
      }, o = async _65102173b763 => {
        const _7ee4ed171ab2 = new MessageEvent("message", {
          data: _65102173b763
        });
        this.dispatchEvent(_7ee4ed171ab2);
      }, c = (_65102173b763, _7ee4ed171ab2) => {
        this.readyState = _618c7d5494be.CLOSED;
        const _bd4764eb474e = new CloseEvent("close", {
          code: _65102173b763,
          reason: _7ee4ed171ab2
        });
        this.dispatchEvent(_bd4764eb474e);
      }, i = () => {
        this.readyState = _618c7d5494be.CLOSED;
        const _65102173b763 = new Event("error");
        this.dispatchEvent(_65102173b763);
      };
      this.channel = new MessageChannel, this.channel.port1.onmessage = _65102173b763 => {
        "open" === _65102173b763.data.type ? s(_65102173b763.data.args[0]) : "message" === _65102173b763.data.type ? o(_65102173b763.data.args[0]) : "close" === _65102173b763.data.type ? c(_65102173b763.data.args[0], _65102173b763.data.args[1]) : "error" === _65102173b763.data.type && i();
      }, _bd4764eb474e.sendMessage({
        type: "websocket",
        websocket: {
          url: _65102173b763.toString(),
          protocols: _7ee4ed171ab2,
          requestHeaders: _4a7a7597cafa,
          channel: this.channel.port2
        }
      }, [ this.channel.port2 ]);
    }
    send(..._65102173b763) {
      if (this.readyState === _618c7d5494be.CONNECTING) throw new DOMException("Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.");
      let _7ee4ed171ab2 = _65102173b763[0];
      _7ee4ed171ab2.buffer && (_7ee4ed171ab2 = _7ee4ed171ab2.buffer.slice(_7ee4ed171ab2.byteOffset, _7ee4ed171ab2.byteOffset + _7ee4ed171ab2.byteLength)), 
      _fa824263c902.call(this.channel.port1, {
        type: "data",
        data: _7ee4ed171ab2
      }, _7ee4ed171ab2 instanceof ArrayBuffer ? [ _7ee4ed171ab2 ] : []);
    }
    close(_65102173b763, _7ee4ed171ab2) {
      _fa824263c902.call(this.channel.port1, {
        type: "close",
        closeCode: _65102173b763,
        closeReason: _7ee4ed171ab2
      });
    }
  }
  function w(_65102173b763, _7ee4ed171ab2, _bd4764eb474e) {
    console.error(`error while processing '${_bd4764eb474e}': `, _7ee4ed171ab2), _65102173b763.postMessage({
      type: "error",
      error: _7ee4ed171ab2
    });
  }
  function f(_65102173b763) {
    for (let _7ee4ed171ab2 = 0; _7ee4ed171ab2 < _65102173b763.length; _7ee4ed171ab2++) {
      const _bd4764eb474e = _65102173b763[_7ee4ed171ab2];
      if (!"!#$%&'*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz|~".includes(_bd4764eb474e)) return !1;
    }
    return !0;
  }
  const _254e18d9500c = [ "ws:", "wss:" ], _e38f41d30089 = [ 101, 204, 205, 304 ], _070501f89779 = [ 301, 302, 303, 307, 308 ];
  class m {
    worker;
    constructor(_65102173b763) {
      this.worker = new p(_65102173b763);
    }
    createWebSocket(_65102173b763, _7ee4ed171ab2 = [], _bd4764eb474e, _4a7a7597cafa) {
      try {
        _65102173b763 = new URL(_65102173b763);
      } catch (_7ee4ed171ab2) {
        throw new DOMException(`Faiiled to construct 'WebSocket': The URL '${_65102173b763}' is invalid.`);
      }
      if (!_254e18d9500c.includes(_65102173b763.protocol)) throw new DOMException(`Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '${_65102173b763.protocol}' is not allowed.`);
      Array.isArray(_7ee4ed171ab2) || (_7ee4ed171ab2 = [ _7ee4ed171ab2 ]), _7ee4ed171ab2 = _7ee4ed171ab2.map(String);
      for (const _65102173b763 of _7ee4ed171ab2) if (!f(_65102173b763)) throw new DOMException(`Failed to construct 'WebSocket': The subprotocol '${_65102173b763}' is invalid.`);
      _4a7a7597cafa = _4a7a7597cafa || {};
      return new u(_65102173b763, _7ee4ed171ab2, this.worker, _4a7a7597cafa);
    }
    async fetch(_65102173b763, _bd4764eb474e) {
      const _4a7a7597cafa = new Request(_65102173b763, _bd4764eb474e), _3b19986c19f5 = _bd4764eb474e?.headers || _4a7a7597cafa.headers, _fa824263c902 = _3b19986c19f5 instanceof Headers ? Object.fromEntries(_3b19986c19f5) : _3b19986c19f5, _618c7d5494be = _4a7a7597cafa.body;
      let _8d2aa24045ff = new URL(_4a7a7597cafa.url);
      if (_8d2aa24045ff.protocol.startsWith("blob:")) {
        const _65102173b763 = await _7ee4ed171ab2(_8d2aa24045ff), _bd4764eb474e = new Response(_65102173b763.body, _65102173b763);
        return _bd4764eb474e.rawHeaders = Object.fromEntries(_65102173b763.headers), _bd4764eb474e.rawResponse = {
          body: _65102173b763.body,
          headers: Object.fromEntries(_65102173b763.headers),
          status: _65102173b763.status,
          statusText: _65102173b763.statusText
        }, _bd4764eb474e.finalURL = _8d2aa24045ff.toString(), _bd4764eb474e;
      }
      for (let _65102173b763 = 0; ;_65102173b763++) {
        let _7ee4ed171ab2 = (await this.worker.sendMessage({
          type: "fetch",
          fetch: {
            remote: _8d2aa24045ff.toString(),
            method: _4a7a7597cafa.method,
            headers: _fa824263c902,
            body: _618c7d5494be || void 0
          }
        }, _618c7d5494be ? [ _618c7d5494be ] : [])).fetch, _3b19986c19f5 = new Response(_e38f41d30089.includes(_7ee4ed171ab2.status) ? void 0 : _7ee4ed171ab2.body, {
          headers: new Headers(_7ee4ed171ab2.headers),
          status: _7ee4ed171ab2.status,
          statusText: _7ee4ed171ab2.statusText
        });
        _3b19986c19f5.rawHeaders = _7ee4ed171ab2.headers, _3b19986c19f5.rawResponse = _7ee4ed171ab2, 
        _3b19986c19f5.finalURL = _8d2aa24045ff.toString();
        const _254e18d9500c = _bd4764eb474e?.redirect || _4a7a7597cafa.redirect;
        if (!_070501f89779.includes(_3b19986c19f5.status)) return _3b19986c19f5;
        switch (_254e18d9500c) {
         case "follow":
          {
            const _7ee4ed171ab2 = _3b19986c19f5.headers.get("location");
            if (20 > _65102173b763 && null !== _7ee4ed171ab2) {
              _8d2aa24045ff = new URL(_7ee4ed171ab2, _8d2aa24045ff);
              continue;
            }
            throw new TypeError("Failed to fetch");
          }

         case "error":
          throw new TypeError("Failed to fetch");

         case "manual":
          return _3b19986c19f5;
        }
      }
    }
  }
  console.debug("bare-mux: running v2.1.9 (build dc9dc6e)"), _65102173b763.BareClient = m, 
  _65102173b763.BareMuxConnection = class {
    worker;
    constructor(_65102173b763) {
      this.worker = new p(_65102173b763);
    }
    async getTransport() {
      return (await this.worker.sendMessage({
        type: "get"
      })).name;
    }
    async setTransport(_65102173b763, _7ee4ed171ab2, _bd4764eb474e) {
      await this.setManualTransport(`\n\t\t\tconst { default: BareTransport } = await import("${_65102173b763}");\n\t\t\treturn [BareTransport, "${_65102173b763}"];\n\t\t`, _7ee4ed171ab2, _bd4764eb474e);
    }
    async setManualTransport(_65102173b763, _7ee4ed171ab2, _bd4764eb474e) {
      if ("bare-mux-remote" === _65102173b763) throw new Error("Use setRemoteTransport.");
      await this.worker.sendMessage({
        type: "set",
        client: {
          function: _65102173b763,
          args: _7ee4ed171ab2
        }
      }, _bd4764eb474e);
    }
    async setRemoteTransport(_65102173b763, _7ee4ed171ab2) {
      const _bd4764eb474e = new MessageChannel;
      _bd4764eb474e.port1.onmessage = async _7ee4ed171ab2 => {
        const _bd4764eb474e = _7ee4ed171ab2.data.port, _4a7a7597cafa = _7ee4ed171ab2.data.message;
        if ("fetch" === _4a7a7597cafa.type) try {
          _65102173b763.ready || await _65102173b763.init(), await async function(_65102173b763, _7ee4ed171ab2, _bd4764eb474e) {
            const _4a7a7597cafa = await _bd4764eb474e.request(new URL(_65102173b763.fetch.remote), _65102173b763.fetch.method, _65102173b763.fetch.body, _65102173b763.fetch.headers, null);
            if (!d() && _4a7a7597cafa.body instanceof ReadableStream) {
              const _65102173b763 = new Response(_4a7a7597cafa.body);
              _4a7a7597cafa.body = await _65102173b763.arrayBuffer();
            }
            _4a7a7597cafa.body instanceof ReadableStream || _4a7a7597cafa.body instanceof ArrayBuffer ? _fa824263c902.call(_7ee4ed171ab2, {
              type: "fetch",
              fetch: _4a7a7597cafa
            }, [ _4a7a7597cafa.body ]) : _fa824263c902.call(_7ee4ed171ab2, {
              type: "fetch",
              fetch: _4a7a7597cafa
            });
          }(_4a7a7597cafa, _bd4764eb474e, _65102173b763);
        } catch (_65102173b763) {
          w(_bd4764eb474e, _65102173b763, "fetch");
        } else if ("websocket" === _4a7a7597cafa.type) try {
          _65102173b763.ready || await _65102173b763.init(), await async function(_65102173b763, _7ee4ed171ab2, _bd4764eb474e) {
            const [_4a7a7597cafa, _3b19986c19f5] = _bd4764eb474e.connect(new URL(_65102173b763.websocket.url), _65102173b763.websocket.protocols, _65102173b763.websocket.requestHeaders, _7ee4ed171ab2 => {
              _fa824263c902.call(_65102173b763.websocket.channel, {
                type: "open",
                args: [ _7ee4ed171ab2 ]
              });
            }, _7ee4ed171ab2 => {
              _7ee4ed171ab2 instanceof ArrayBuffer ? _fa824263c902.call(_65102173b763.websocket.channel, {
                type: "message",
                args: [ _7ee4ed171ab2 ]
              }, [ _7ee4ed171ab2 ]) : _fa824263c902.call(_65102173b763.websocket.channel, {
                type: "message",
                args: [ _7ee4ed171ab2 ]
              });
            }, (_7ee4ed171ab2, _bd4764eb474e) => {
              _fa824263c902.call(_65102173b763.websocket.channel, {
                type: "close",
                args: [ _7ee4ed171ab2, _bd4764eb474e ]
              });
            }, _7ee4ed171ab2 => {
              _fa824263c902.call(_65102173b763.websocket.channel, {
                type: "error",
                args: [ _7ee4ed171ab2 ]
              });
            });
            _65102173b763.websocket.channel.onmessage = _65102173b763 => {
              "data" === _65102173b763.data.type ? _4a7a7597cafa(_65102173b763.data.data) : "close" === _65102173b763.data.type && _3b19986c19f5(_65102173b763.data.closeCode, _65102173b763.data.closeReason);
            }, _fa824263c902.call(_7ee4ed171ab2, {
              type: "websocket"
            });
          }(_4a7a7597cafa, _bd4764eb474e, _65102173b763);
        } catch (_65102173b763) {
          w(_bd4764eb474e, _65102173b763, "websocket");
        }
      }, await this.worker.sendMessage({
        type: "set",
        client: {
          function: "bare-mux-remote",
          args: [ _bd4764eb474e.port2, _7ee4ed171ab2 ]
        }
      }, [ _bd4764eb474e.port2 ]);
    }
    getInnerPort() {
      return this.worker.port;
    }
  }, _65102173b763.BareWebSocket = u, _65102173b763.WebSocketFields = _618c7d5494be, 
  _65102173b763.WorkerConnection = p, _65102173b763.browserSupportsTransferringStreams = d, 
  _65102173b763.default = m, _65102173b763.maxRedirects = 20, _65102173b763.validProtocol = f, 
  Object.defineProperty(_65102173b763, "__esModule", {
    value: !0
  });
});
