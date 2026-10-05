!function(_baa9ddc033ff, _ea0f47554d27) {
  "object" == typeof exports && "undefined" != typeof module ? _ea0f47554d27(exports) : "function" == typeof define && define.amd ? define([ "exports" ], _ea0f47554d27) : _ea0f47554d27((_baa9ddc033ff = "undefined" != typeof globalThis ? globalThis : _baa9ddc033ff || self).BareMux = {});
}(this, function(_baa9ddc033ff) {
  "use strict";
  const _ea0f47554d27 = globalThis.fetch, _93aad5df6f21 = globalThis.SharedWorker, _e7c6f7429e88 = globalThis.localStorage, _257c5655ba2f = globalThis.navigator.serviceWorker, _694d38f0513f = MessagePort.prototype.postMessage, _e8bd85db6757 = {
    prototype: {
      send: WebSocket.prototype.send
    },
    CLOSED: WebSocket.CLOSED,
    CLOSING: WebSocket.CLOSING,
    CONNECTING: WebSocket.CONNECTING,
    OPEN: WebSocket.OPEN
  };
  async function c() {
    const _baa9ddc033ff = (await self.clients.matchAll({
      type: "window",
      includeUncontrolled: !0
    })).map(async _baa9ddc033ff => {
      const _ea0f47554d27 = await function(_baa9ddc033ff) {
        let _ea0f47554d27 = new MessageChannel;
        return new Promise(_93aad5df6f21 => {
          _baa9ddc033ff.postMessage({
            type: "getPort",
            port: _ea0f47554d27.port2
          }, [ _ea0f47554d27.port2 ]), _ea0f47554d27.port1.onmessage = _baa9ddc033ff => {
            _93aad5df6f21(_baa9ddc033ff.data);
          };
        });
      }(_baa9ddc033ff);
      return await i(_ea0f47554d27), _ea0f47554d27;
    }), _ea0f47554d27 = Promise.race([ Promise.any(_baa9ddc033ff), new Promise((_baa9ddc033ff, _ea0f47554d27) => setTimeout(_ea0f47554d27, 1e3, new TypeError("timeout"))) ]);
    try {
      return await _ea0f47554d27;
    } catch (_baa9ddc033ff) {
      if (_baa9ddc033ff instanceof AggregateError) throw console.error("bare-mux: failed to get a bare-mux SharedWorker MessagePort as all clients returned an invalid MessagePort."), 
      new Error("All clients returned an invalid MessagePort.", {
        cause: _baa9ddc033ff
      });
      return console.warn("bare-mux: failed to get a bare-mux SharedWorker MessagePort within 1s, retrying"), 
      await c();
    }
  }
  function i(_baa9ddc033ff) {
    const _ea0f47554d27 = new MessageChannel, _93aad5df6f21 = new Promise((_baa9ddc033ff, _93aad5df6f21) => {
      _ea0f47554d27.port1.onmessage = _ea0f47554d27 => {
        "pong" === _ea0f47554d27.data.type && _baa9ddc033ff();
      }, setTimeout(_93aad5df6f21, 1500);
    });
    return _694d38f0513f.call(_baa9ddc033ff, {
      message: {
        type: "ping"
      },
      port: _ea0f47554d27.port2
    }, [ _ea0f47554d27.port2 ]), _93aad5df6f21;
  }
  function l(_baa9ddc033ff, _ea0f47554d27) {
    const _e7c6f7429e88 = new _93aad5df6f21(_baa9ddc033ff, "ridgewood-stem-worker");
    return _ea0f47554d27 && _257c5655ba2f.addEventListener("message", _ea0f47554d27 => {
      if ("getPort" === _ea0f47554d27.data.type && _ea0f47554d27.data.port) {
        console.debug("bare-mux: recieved request for port from sw");
        const _e7c6f7429e88 = new _93aad5df6f21(_baa9ddc033ff, "ridgewood-stem-worker");
        _694d38f0513f.call(_ea0f47554d27.data.port, _e7c6f7429e88.port, [ _e7c6f7429e88.port ]);
      }
    }), _e7c6f7429e88.port;
  }
  let _04fa22d22d29 = null;
  function d() {
    if (null === _04fa22d22d29) {
      const _baa9ddc033ff = new MessageChannel, _ea0f47554d27 = new ReadableStream;
      let _93aad5df6f21;
      try {
        _694d38f0513f.call(_baa9ddc033ff.port1, _ea0f47554d27, [ _ea0f47554d27 ]), _93aad5df6f21 = !0;
      } catch (_baa9ddc033ff) {
        _93aad5df6f21 = !1;
      }
      return _04fa22d22d29 = _93aad5df6f21, _93aad5df6f21;
    }
    return _04fa22d22d29;
  }
  class p {
    channel;
    port;
    workerPath;
    constructor(_baa9ddc033ff) {
      this.channel = new BroadcastChannel("bare-mux"), _baa9ddc033ff instanceof MessagePort || _baa9ddc033ff instanceof Promise ? this.port = _baa9ddc033ff : this.createChannel(_baa9ddc033ff, !0);
    }
    createChannel(_baa9ddc033ff, _ea0f47554d27) {
      if (self.clients) this.port = c(), this.channel.onmessage = _baa9ddc033ff => {
        "refreshPort" === _baa9ddc033ff.data.type && (this.port = c());
      }; else if (_baa9ddc033ff && SharedWorker) {
        if (!_baa9ddc033ff.startsWith("/") && !_baa9ddc033ff.includes(":")) throw new Error("Invalid URL. Must be absolute or start at the root.");
        this.port = l(_baa9ddc033ff, _ea0f47554d27), console.debug("bare-mux: setting localStorage bare-mux-path to", _baa9ddc033ff), 
        _e7c6f7429e88["bare-mux-path"] = _baa9ddc033ff;
      } else {
        if (!SharedWorker) throw new Error("Unable to get a channel to the SharedWorker.");
        {
          const _baa9ddc033ff = _e7c6f7429e88["bare-mux-path"];
          if (console.debug("bare-mux: got localStorage bare-mux-path:", _baa9ddc033ff), !_baa9ddc033ff) throw new Error("Unable to get bare-mux workerPath from localStorage.");
          this.port = l(_baa9ddc033ff, _ea0f47554d27);
        }
      }
    }
    async sendMessage(_baa9ddc033ff, _ea0f47554d27) {
      this.port instanceof Promise && (this.port = await this.port);
      try {
        await i(this.port);
      } catch {
        return console.warn("bare-mux: Failed to get a ping response from the worker within 1.5s. Assuming port is dead."), 
        this.createChannel(), await this.sendMessage(_baa9ddc033ff, _ea0f47554d27);
      }
      const _93aad5df6f21 = new MessageChannel, _e7c6f7429e88 = [ _93aad5df6f21.port2, ..._ea0f47554d27 || [] ], _257c5655ba2f = new Promise((_baa9ddc033ff, _ea0f47554d27) => {
        _93aad5df6f21.port1.onmessage = _93aad5df6f21 => {
          const _e7c6f7429e88 = _93aad5df6f21.data;
          "error" === _e7c6f7429e88.type ? _ea0f47554d27(_e7c6f7429e88.error) : _baa9ddc033ff(_e7c6f7429e88);
        };
      });
      return _694d38f0513f.call(this.port, {
        message: _baa9ddc033ff,
        port: _93aad5df6f21.port2
      }, _e7c6f7429e88), await _257c5655ba2f;
    }
  }
  class u extends EventTarget {
    protocols;
    url;
    readyState=_e8bd85db6757.CONNECTING;
    channel;
    constructor(_baa9ddc033ff, _ea0f47554d27 = [], _93aad5df6f21, _e7c6f7429e88) {
      super(), this.protocols = _ea0f47554d27, this.url = _baa9ddc033ff.toString(), this.protocols = _ea0f47554d27;
      const s = _baa9ddc033ff => {
        this.protocols = _baa9ddc033ff, this.readyState = _e8bd85db6757.OPEN;
        const _ea0f47554d27 = new Event("open");
        this.dispatchEvent(_ea0f47554d27);
      }, o = async _baa9ddc033ff => {
        const _ea0f47554d27 = new MessageEvent("message", {
          data: _baa9ddc033ff
        });
        this.dispatchEvent(_ea0f47554d27);
      }, c = (_baa9ddc033ff, _ea0f47554d27) => {
        this.readyState = _e8bd85db6757.CLOSED;
        const _93aad5df6f21 = new CloseEvent("close", {
          code: _baa9ddc033ff,
          reason: _ea0f47554d27
        });
        this.dispatchEvent(_93aad5df6f21);
      }, i = () => {
        this.readyState = _e8bd85db6757.CLOSED;
        const _baa9ddc033ff = new Event("error");
        this.dispatchEvent(_baa9ddc033ff);
      };
      this.channel = new MessageChannel, this.channel.port1.onmessage = _baa9ddc033ff => {
        "open" === _baa9ddc033ff.data.type ? s(_baa9ddc033ff.data.args[0]) : "message" === _baa9ddc033ff.data.type ? o(_baa9ddc033ff.data.args[0]) : "close" === _baa9ddc033ff.data.type ? c(_baa9ddc033ff.data.args[0], _baa9ddc033ff.data.args[1]) : "error" === _baa9ddc033ff.data.type && i();
      }, _93aad5df6f21.sendMessage({
        type: "websocket",
        websocket: {
          url: _baa9ddc033ff.toString(),
          protocols: _ea0f47554d27,
          requestHeaders: _e7c6f7429e88,
          channel: this.channel.port2
        }
      }, [ this.channel.port2 ]);
    }
    send(..._baa9ddc033ff) {
      if (this.readyState === _e8bd85db6757.CONNECTING) throw new DOMException("Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.");
      let _ea0f47554d27 = _baa9ddc033ff[0];
      _ea0f47554d27.buffer && (_ea0f47554d27 = _ea0f47554d27.buffer.slice(_ea0f47554d27.byteOffset, _ea0f47554d27.byteOffset + _ea0f47554d27.byteLength)), 
      _694d38f0513f.call(this.channel.port1, {
        type: "data",
        data: _ea0f47554d27
      }, _ea0f47554d27 instanceof ArrayBuffer ? [ _ea0f47554d27 ] : []);
    }
    close(_baa9ddc033ff, _ea0f47554d27) {
      _694d38f0513f.call(this.channel.port1, {
        type: "close",
        closeCode: _baa9ddc033ff,
        closeReason: _ea0f47554d27
      });
    }
  }
  function w(_baa9ddc033ff, _ea0f47554d27, _93aad5df6f21) {
    console.error(`error while processing '${_93aad5df6f21}': `, _ea0f47554d27), _baa9ddc033ff.postMessage({
      type: "error",
      error: _ea0f47554d27
    });
  }
  function f(_baa9ddc033ff) {
    for (let _ea0f47554d27 = 0; _ea0f47554d27 < _baa9ddc033ff.length; _ea0f47554d27++) {
      const _93aad5df6f21 = _baa9ddc033ff[_ea0f47554d27];
      if (!"!#$%&'*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz|~".includes(_93aad5df6f21)) return !1;
    }
    return !0;
  }
  const _ce588ef65ea0 = [ "ws:", "wss:" ], _1cbb3f398cbe = [ 101, 204, 205, 304 ], _e867ac3c54a1 = [ 301, 302, 303, 307, 308 ];
  class m {
    worker;
    constructor(_baa9ddc033ff) {
      this.worker = new p(_baa9ddc033ff);
    }
    createWebSocket(_baa9ddc033ff, _ea0f47554d27 = [], _93aad5df6f21, _e7c6f7429e88) {
      try {
        _baa9ddc033ff = new URL(_baa9ddc033ff);
      } catch (_ea0f47554d27) {
        throw new DOMException(`Faiiled to construct 'WebSocket': The URL '${_baa9ddc033ff}' is invalid.`);
      }
      if (!_ce588ef65ea0.includes(_baa9ddc033ff.protocol)) throw new DOMException(`Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '${_baa9ddc033ff.protocol}' is not allowed.`);
      Array.isArray(_ea0f47554d27) || (_ea0f47554d27 = [ _ea0f47554d27 ]), _ea0f47554d27 = _ea0f47554d27.map(String);
      for (const _baa9ddc033ff of _ea0f47554d27) if (!f(_baa9ddc033ff)) throw new DOMException(`Failed to construct 'WebSocket': The subprotocol '${_baa9ddc033ff}' is invalid.`);
      _e7c6f7429e88 = _e7c6f7429e88 || {};
      return new u(_baa9ddc033ff, _ea0f47554d27, this.worker, _e7c6f7429e88);
    }
    async fetch(_baa9ddc033ff, _93aad5df6f21) {
      const _e7c6f7429e88 = new Request(_baa9ddc033ff, _93aad5df6f21), _257c5655ba2f = _93aad5df6f21?.headers || _e7c6f7429e88.headers, _694d38f0513f = _257c5655ba2f instanceof Headers ? Object.fromEntries(_257c5655ba2f) : _257c5655ba2f, _e8bd85db6757 = _e7c6f7429e88.body;
      let _04fa22d22d29 = new URL(_e7c6f7429e88.url);
      if (_04fa22d22d29.protocol.startsWith("blob:")) {
        const _baa9ddc033ff = await _ea0f47554d27(_04fa22d22d29), _93aad5df6f21 = new Response(_baa9ddc033ff.body, _baa9ddc033ff);
        return _93aad5df6f21.rawHeaders = Object.fromEntries(_baa9ddc033ff.headers), _93aad5df6f21.rawResponse = {
          body: _baa9ddc033ff.body,
          headers: Object.fromEntries(_baa9ddc033ff.headers),
          status: _baa9ddc033ff.status,
          statusText: _baa9ddc033ff.statusText
        }, _93aad5df6f21.finalURL = _04fa22d22d29.toString(), _93aad5df6f21;
      }
      for (let _baa9ddc033ff = 0; ;_baa9ddc033ff++) {
        let _ea0f47554d27 = (await this.worker.sendMessage({
          type: "fetch",
          fetch: {
            remote: _04fa22d22d29.toString(),
            method: _e7c6f7429e88.method,
            headers: _694d38f0513f,
            body: _e8bd85db6757 || void 0
          }
        }, _e8bd85db6757 ? [ _e8bd85db6757 ] : [])).fetch, _257c5655ba2f = new Response(_1cbb3f398cbe.includes(_ea0f47554d27.status) ? void 0 : _ea0f47554d27.body, {
          headers: new Headers(_ea0f47554d27.headers),
          status: _ea0f47554d27.status,
          statusText: _ea0f47554d27.statusText
        });
        _257c5655ba2f.rawHeaders = _ea0f47554d27.headers, _257c5655ba2f.rawResponse = _ea0f47554d27, 
        _257c5655ba2f.finalURL = _04fa22d22d29.toString();
        const _ce588ef65ea0 = _93aad5df6f21?.redirect || _e7c6f7429e88.redirect;
        if (!_e867ac3c54a1.includes(_257c5655ba2f.status)) return _257c5655ba2f;
        switch (_ce588ef65ea0) {
         case "follow":
          {
            const _ea0f47554d27 = _257c5655ba2f.headers.get("location");
            if (20 > _baa9ddc033ff && null !== _ea0f47554d27) {
              _04fa22d22d29 = new URL(_ea0f47554d27, _04fa22d22d29);
              continue;
            }
            throw new TypeError("Failed to fetch");
          }

         case "error":
          throw new TypeError("Failed to fetch");

         case "manual":
          return _257c5655ba2f;
        }
      }
    }
  }
  console.debug("bare-mux: running v2.1.9 (build dc9dc6e)"), _baa9ddc033ff.BareClient = m, 
  _baa9ddc033ff.BareMuxConnection = class {
    worker;
    constructor(_baa9ddc033ff) {
      this.worker = new p(_baa9ddc033ff);
    }
    async getTransport() {
      return (await this.worker.sendMessage({
        type: "get"
      })).name;
    }
    async setTransport(_baa9ddc033ff, _ea0f47554d27, _93aad5df6f21) {
      await this.setManualTransport(`\n\t\t\tconst { default: BareTransport } = await import("${_baa9ddc033ff}");\n\t\t\treturn [BareTransport, "${_baa9ddc033ff}"];\n\t\t`, _ea0f47554d27, _93aad5df6f21);
    }
    async setManualTransport(_baa9ddc033ff, _ea0f47554d27, _93aad5df6f21) {
      if ("bare-mux-remote" === _baa9ddc033ff) throw new Error("Use setRemoteTransport.");
      await this.worker.sendMessage({
        type: "set",
        client: {
          function: _baa9ddc033ff,
          args: _ea0f47554d27
        }
      }, _93aad5df6f21);
    }
    async setRemoteTransport(_baa9ddc033ff, _ea0f47554d27) {
      const _93aad5df6f21 = new MessageChannel;
      _93aad5df6f21.port1.onmessage = async _ea0f47554d27 => {
        const _93aad5df6f21 = _ea0f47554d27.data.port, _e7c6f7429e88 = _ea0f47554d27.data.message;
        if ("fetch" === _e7c6f7429e88.type) try {
          _baa9ddc033ff.ready || await _baa9ddc033ff.init(), await async function(_baa9ddc033ff, _ea0f47554d27, _93aad5df6f21) {
            const _e7c6f7429e88 = await _93aad5df6f21.request(new URL(_baa9ddc033ff.fetch.remote), _baa9ddc033ff.fetch.method, _baa9ddc033ff.fetch.body, _baa9ddc033ff.fetch.headers, null);
            if (!d() && _e7c6f7429e88.body instanceof ReadableStream) {
              const _baa9ddc033ff = new Response(_e7c6f7429e88.body);
              _e7c6f7429e88.body = await _baa9ddc033ff.arrayBuffer();
            }
            _e7c6f7429e88.body instanceof ReadableStream || _e7c6f7429e88.body instanceof ArrayBuffer ? _694d38f0513f.call(_ea0f47554d27, {
              type: "fetch",
              fetch: _e7c6f7429e88
            }, [ _e7c6f7429e88.body ]) : _694d38f0513f.call(_ea0f47554d27, {
              type: "fetch",
              fetch: _e7c6f7429e88
            });
          }(_e7c6f7429e88, _93aad5df6f21, _baa9ddc033ff);
        } catch (_baa9ddc033ff) {
          w(_93aad5df6f21, _baa9ddc033ff, "fetch");
        } else if ("websocket" === _e7c6f7429e88.type) try {
          _baa9ddc033ff.ready || await _baa9ddc033ff.init(), await async function(_baa9ddc033ff, _ea0f47554d27, _93aad5df6f21) {
            const [_e7c6f7429e88, _257c5655ba2f] = _93aad5df6f21.connect(new URL(_baa9ddc033ff.websocket.url), _baa9ddc033ff.websocket.protocols, _baa9ddc033ff.websocket.requestHeaders, _ea0f47554d27 => {
              _694d38f0513f.call(_baa9ddc033ff.websocket.channel, {
                type: "open",
                args: [ _ea0f47554d27 ]
              });
            }, _ea0f47554d27 => {
              _ea0f47554d27 instanceof ArrayBuffer ? _694d38f0513f.call(_baa9ddc033ff.websocket.channel, {
                type: "message",
                args: [ _ea0f47554d27 ]
              }, [ _ea0f47554d27 ]) : _694d38f0513f.call(_baa9ddc033ff.websocket.channel, {
                type: "message",
                args: [ _ea0f47554d27 ]
              });
            }, (_ea0f47554d27, _93aad5df6f21) => {
              _694d38f0513f.call(_baa9ddc033ff.websocket.channel, {
                type: "close",
                args: [ _ea0f47554d27, _93aad5df6f21 ]
              });
            }, _ea0f47554d27 => {
              _694d38f0513f.call(_baa9ddc033ff.websocket.channel, {
                type: "error",
                args: [ _ea0f47554d27 ]
              });
            });
            _baa9ddc033ff.websocket.channel.onmessage = _baa9ddc033ff => {
              "data" === _baa9ddc033ff.data.type ? _e7c6f7429e88(_baa9ddc033ff.data.data) : "close" === _baa9ddc033ff.data.type && _257c5655ba2f(_baa9ddc033ff.data.closeCode, _baa9ddc033ff.data.closeReason);
            }, _694d38f0513f.call(_ea0f47554d27, {
              type: "websocket"
            });
          }(_e7c6f7429e88, _93aad5df6f21, _baa9ddc033ff);
        } catch (_baa9ddc033ff) {
          w(_93aad5df6f21, _baa9ddc033ff, "websocket");
        }
      }, await this.worker.sendMessage({
        type: "set",
        client: {
          function: "bare-mux-remote",
          args: [ _93aad5df6f21.port2, _ea0f47554d27 ]
        }
      }, [ _93aad5df6f21.port2 ]);
    }
    getInnerPort() {
      return this.worker.port;
    }
  }, _baa9ddc033ff.BareWebSocket = u, _baa9ddc033ff.WebSocketFields = _e8bd85db6757, 
  _baa9ddc033ff.WorkerConnection = p, _baa9ddc033ff.browserSupportsTransferringStreams = d, 
  _baa9ddc033ff.default = m, _baa9ddc033ff.maxRedirects = 20, _baa9ddc033ff.validProtocol = f, 
  Object.defineProperty(_baa9ddc033ff, "__esModule", {
    value: !0
  });
});
