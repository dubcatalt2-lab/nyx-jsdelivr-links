!function(_17905e3d28f1, _4ee2b0157d82) {
  "object" == typeof exports && "undefined" != typeof module ? _4ee2b0157d82(exports) : "function" == typeof define && define.amd ? define([ "exports" ], _4ee2b0157d82) : _4ee2b0157d82((_17905e3d28f1 = "undefined" != typeof globalThis ? globalThis : _17905e3d28f1 || self).BareMux = {});
}(this, function(_17905e3d28f1) {
  "use strict";
  const _4ee2b0157d82 = globalThis.fetch, _6e2800fc351a = globalThis.SharedWorker, _b75216cddcc6 = globalThis.localStorage, _ef71b2ec1c0f = globalThis.navigator.serviceWorker, _639c405831de = MessagePort.prototype.postMessage, _e5dbb3872472 = {
    prototype: {
      send: WebSocket.prototype.send
    },
    CLOSED: WebSocket.CLOSED,
    CLOSING: WebSocket.CLOSING,
    CONNECTING: WebSocket.CONNECTING,
    OPEN: WebSocket.OPEN
  };
  async function c() {
    const _17905e3d28f1 = (await self.clients.matchAll({
      type: "window",
      includeUncontrolled: !0
    })).map(async _17905e3d28f1 => {
      const _4ee2b0157d82 = await function(_17905e3d28f1) {
        let _4ee2b0157d82 = new MessageChannel;
        return new Promise(_6e2800fc351a => {
          _17905e3d28f1.postMessage({
            type: "getPort",
            port: _4ee2b0157d82.port2
          }, [ _4ee2b0157d82.port2 ]), _4ee2b0157d82.port1.onmessage = _17905e3d28f1 => {
            _6e2800fc351a(_17905e3d28f1.data);
          };
        });
      }(_17905e3d28f1);
      return await i(_4ee2b0157d82), _4ee2b0157d82;
    }), _4ee2b0157d82 = Promise.race([ Promise.any(_17905e3d28f1), new Promise((_17905e3d28f1, _4ee2b0157d82) => setTimeout(_4ee2b0157d82, 1e3, new TypeError("timeout"))) ]);
    try {
      return await _4ee2b0157d82;
    } catch (_17905e3d28f1) {
      if (_17905e3d28f1 instanceof AggregateError) throw console.error("bare-mux: failed to get a bare-mux SharedWorker MessagePort as all clients returned an invalid MessagePort."), 
      new Error("All clients returned an invalid MessagePort.", {
        cause: _17905e3d28f1
      });
      return console.warn("bare-mux: failed to get a bare-mux SharedWorker MessagePort within 1s, retrying"), 
      await c();
    }
  }
  function i(_17905e3d28f1) {
    const _4ee2b0157d82 = new MessageChannel, _6e2800fc351a = new Promise((_17905e3d28f1, _6e2800fc351a) => {
      _4ee2b0157d82.port1.onmessage = _4ee2b0157d82 => {
        "pong" === _4ee2b0157d82.data.type && _17905e3d28f1();
      }, setTimeout(_6e2800fc351a, 1500);
    });
    return _639c405831de.call(_17905e3d28f1, {
      message: {
        type: "ping"
      },
      port: _4ee2b0157d82.port2
    }, [ _4ee2b0157d82.port2 ]), _6e2800fc351a;
  }
  function l(_17905e3d28f1, _4ee2b0157d82) {
    const _b75216cddcc6 = new _6e2800fc351a(_17905e3d28f1, "ridgewood-stem-worker");
    return _4ee2b0157d82 && _ef71b2ec1c0f.addEventListener("message", _4ee2b0157d82 => {
      if ("getPort" === _4ee2b0157d82.data.type && _4ee2b0157d82.data.port) {
        console.debug("bare-mux: recieved request for port from sw");
        const _b75216cddcc6 = new _6e2800fc351a(_17905e3d28f1, "ridgewood-stem-worker");
        _639c405831de.call(_4ee2b0157d82.data.port, _b75216cddcc6.port, [ _b75216cddcc6.port ]);
      }
    }), _b75216cddcc6.port;
  }
  let _d77a045ec214 = null;
  function d() {
    if (null === _d77a045ec214) {
      const _17905e3d28f1 = new MessageChannel, _4ee2b0157d82 = new ReadableStream;
      let _6e2800fc351a;
      try {
        _639c405831de.call(_17905e3d28f1.port1, _4ee2b0157d82, [ _4ee2b0157d82 ]), _6e2800fc351a = !0;
      } catch (_17905e3d28f1) {
        _6e2800fc351a = !1;
      }
      return _d77a045ec214 = _6e2800fc351a, _6e2800fc351a;
    }
    return _d77a045ec214;
  }
  class p {
    channel;
    port;
    workerPath;
    constructor(_17905e3d28f1) {
      this.channel = new BroadcastChannel("bare-mux"), _17905e3d28f1 instanceof MessagePort || _17905e3d28f1 instanceof Promise ? this.port = _17905e3d28f1 : this.createChannel(_17905e3d28f1, !0);
    }
    createChannel(_17905e3d28f1, _4ee2b0157d82) {
      if (self.clients) this.port = c(), this.channel.onmessage = _17905e3d28f1 => {
        "refreshPort" === _17905e3d28f1.data.type && (this.port = c());
      }; else if (_17905e3d28f1 && SharedWorker) {
        if (!_17905e3d28f1.startsWith("/") && !_17905e3d28f1.includes(":")) throw new Error("Invalid URL. Must be absolute or start at the root.");
        this.port = l(_17905e3d28f1, _4ee2b0157d82), console.debug("bare-mux: setting localStorage bare-mux-path to", _17905e3d28f1), 
        _b75216cddcc6["bare-mux-path"] = _17905e3d28f1;
      } else {
        if (!SharedWorker) throw new Error("Unable to get a channel to the SharedWorker.");
        {
          const _17905e3d28f1 = _b75216cddcc6["bare-mux-path"];
          if (console.debug("bare-mux: got localStorage bare-mux-path:", _17905e3d28f1), !_17905e3d28f1) throw new Error("Unable to get bare-mux workerPath from localStorage.");
          this.port = l(_17905e3d28f1, _4ee2b0157d82);
        }
      }
    }
    async sendMessage(_17905e3d28f1, _4ee2b0157d82) {
      this.port instanceof Promise && (this.port = await this.port);
      try {
        await i(this.port);
      } catch {
        return console.warn("bare-mux: Failed to get a ping response from the worker within 1.5s. Assuming port is dead."), 
        this.createChannel(), await this.sendMessage(_17905e3d28f1, _4ee2b0157d82);
      }
      const _6e2800fc351a = new MessageChannel, _b75216cddcc6 = [ _6e2800fc351a.port2, ..._4ee2b0157d82 || [] ], _ef71b2ec1c0f = new Promise((_17905e3d28f1, _4ee2b0157d82) => {
        _6e2800fc351a.port1.onmessage = _6e2800fc351a => {
          const _b75216cddcc6 = _6e2800fc351a.data;
          "error" === _b75216cddcc6.type ? _4ee2b0157d82(_b75216cddcc6.error) : _17905e3d28f1(_b75216cddcc6);
        };
      });
      return _639c405831de.call(this.port, {
        message: _17905e3d28f1,
        port: _6e2800fc351a.port2
      }, _b75216cddcc6), await _ef71b2ec1c0f;
    }
  }
  class u extends EventTarget {
    protocols;
    url;
    readyState=_e5dbb3872472.CONNECTING;
    channel;
    constructor(_17905e3d28f1, _4ee2b0157d82 = [], _6e2800fc351a, _b75216cddcc6) {
      super(), this.protocols = _4ee2b0157d82, this.url = _17905e3d28f1.toString(), this.protocols = _4ee2b0157d82;
      const s = _17905e3d28f1 => {
        this.protocols = _17905e3d28f1, this.readyState = _e5dbb3872472.OPEN;
        const _4ee2b0157d82 = new Event("open");
        this.dispatchEvent(_4ee2b0157d82);
      }, o = async _17905e3d28f1 => {
        const _4ee2b0157d82 = new MessageEvent("message", {
          data: _17905e3d28f1
        });
        this.dispatchEvent(_4ee2b0157d82);
      }, c = (_17905e3d28f1, _4ee2b0157d82) => {
        this.readyState = _e5dbb3872472.CLOSED;
        const _6e2800fc351a = new CloseEvent("close", {
          code: _17905e3d28f1,
          reason: _4ee2b0157d82
        });
        this.dispatchEvent(_6e2800fc351a);
      }, i = () => {
        this.readyState = _e5dbb3872472.CLOSED;
        const _17905e3d28f1 = new Event("error");
        this.dispatchEvent(_17905e3d28f1);
      };
      this.channel = new MessageChannel, this.channel.port1.onmessage = _17905e3d28f1 => {
        "open" === _17905e3d28f1.data.type ? s(_17905e3d28f1.data.args[0]) : "message" === _17905e3d28f1.data.type ? o(_17905e3d28f1.data.args[0]) : "close" === _17905e3d28f1.data.type ? c(_17905e3d28f1.data.args[0], _17905e3d28f1.data.args[1]) : "error" === _17905e3d28f1.data.type && i();
      }, _6e2800fc351a.sendMessage({
        type: "websocket",
        websocket: {
          url: _17905e3d28f1.toString(),
          protocols: _4ee2b0157d82,
          requestHeaders: _b75216cddcc6,
          channel: this.channel.port2
        }
      }, [ this.channel.port2 ]);
    }
    send(..._17905e3d28f1) {
      if (this.readyState === _e5dbb3872472.CONNECTING) throw new DOMException("Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.");
      let _4ee2b0157d82 = _17905e3d28f1[0];
      _4ee2b0157d82.buffer && (_4ee2b0157d82 = _4ee2b0157d82.buffer.slice(_4ee2b0157d82.byteOffset, _4ee2b0157d82.byteOffset + _4ee2b0157d82.byteLength)), 
      _639c405831de.call(this.channel.port1, {
        type: "data",
        data: _4ee2b0157d82
      }, _4ee2b0157d82 instanceof ArrayBuffer ? [ _4ee2b0157d82 ] : []);
    }
    close(_17905e3d28f1, _4ee2b0157d82) {
      _639c405831de.call(this.channel.port1, {
        type: "close",
        closeCode: _17905e3d28f1,
        closeReason: _4ee2b0157d82
      });
    }
  }
  function w(_17905e3d28f1, _4ee2b0157d82, _6e2800fc351a) {
    console.error(`error while processing '${_6e2800fc351a}': `, _4ee2b0157d82), _17905e3d28f1.postMessage({
      type: "error",
      error: _4ee2b0157d82
    });
  }
  function f(_17905e3d28f1) {
    for (let _4ee2b0157d82 = 0; _4ee2b0157d82 < _17905e3d28f1.length; _4ee2b0157d82++) {
      const _6e2800fc351a = _17905e3d28f1[_4ee2b0157d82];
      if (!"!#$%&'*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz|~".includes(_6e2800fc351a)) return !1;
    }
    return !0;
  }
  const _6315d01e305d = [ "ws:", "wss:" ], _7f953aa92132 = [ 101, 204, 205, 304 ], _d1f906273886 = [ 301, 302, 303, 307, 308 ];
  class m {
    worker;
    constructor(_17905e3d28f1) {
      this.worker = new p(_17905e3d28f1);
    }
    createWebSocket(_17905e3d28f1, _4ee2b0157d82 = [], _6e2800fc351a, _b75216cddcc6) {
      try {
        _17905e3d28f1 = new URL(_17905e3d28f1);
      } catch (_4ee2b0157d82) {
        throw new DOMException(`Faiiled to construct 'WebSocket': The URL '${_17905e3d28f1}' is invalid.`);
      }
      if (!_6315d01e305d.includes(_17905e3d28f1.protocol)) throw new DOMException(`Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '${_17905e3d28f1.protocol}' is not allowed.`);
      Array.isArray(_4ee2b0157d82) || (_4ee2b0157d82 = [ _4ee2b0157d82 ]), _4ee2b0157d82 = _4ee2b0157d82.map(String);
      for (const _17905e3d28f1 of _4ee2b0157d82) if (!f(_17905e3d28f1)) throw new DOMException(`Failed to construct 'WebSocket': The subprotocol '${_17905e3d28f1}' is invalid.`);
      _b75216cddcc6 = _b75216cddcc6 || {};
      return new u(_17905e3d28f1, _4ee2b0157d82, this.worker, _b75216cddcc6);
    }
    async fetch(_17905e3d28f1, _6e2800fc351a) {
      const _b75216cddcc6 = new Request(_17905e3d28f1, _6e2800fc351a), _ef71b2ec1c0f = _6e2800fc351a?.headers || _b75216cddcc6.headers, _639c405831de = _ef71b2ec1c0f instanceof Headers ? Object.fromEntries(_ef71b2ec1c0f) : _ef71b2ec1c0f, _e5dbb3872472 = _b75216cddcc6.body;
      let _d77a045ec214 = new URL(_b75216cddcc6.url);
      if (_d77a045ec214.protocol.startsWith("blob:")) {
        const _17905e3d28f1 = await _4ee2b0157d82(_d77a045ec214), _6e2800fc351a = new Response(_17905e3d28f1.body, _17905e3d28f1);
        return _6e2800fc351a.rawHeaders = Object.fromEntries(_17905e3d28f1.headers), _6e2800fc351a.rawResponse = {
          body: _17905e3d28f1.body,
          headers: Object.fromEntries(_17905e3d28f1.headers),
          status: _17905e3d28f1.status,
          statusText: _17905e3d28f1.statusText
        }, _6e2800fc351a.finalURL = _d77a045ec214.toString(), _6e2800fc351a;
      }
      for (let _17905e3d28f1 = 0; ;_17905e3d28f1++) {
        let _4ee2b0157d82 = (await this.worker.sendMessage({
          type: "fetch",
          fetch: {
            remote: _d77a045ec214.toString(),
            method: _b75216cddcc6.method,
            headers: _639c405831de,
            body: _e5dbb3872472 || void 0
          }
        }, _e5dbb3872472 ? [ _e5dbb3872472 ] : [])).fetch, _ef71b2ec1c0f = new Response(_7f953aa92132.includes(_4ee2b0157d82.status) ? void 0 : _4ee2b0157d82.body, {
          headers: new Headers(_4ee2b0157d82.headers),
          status: _4ee2b0157d82.status,
          statusText: _4ee2b0157d82.statusText
        });
        _ef71b2ec1c0f.rawHeaders = _4ee2b0157d82.headers, _ef71b2ec1c0f.rawResponse = _4ee2b0157d82, 
        _ef71b2ec1c0f.finalURL = _d77a045ec214.toString();
        const _6315d01e305d = _6e2800fc351a?.redirect || _b75216cddcc6.redirect;
        if (!_d1f906273886.includes(_ef71b2ec1c0f.status)) return _ef71b2ec1c0f;
        switch (_6315d01e305d) {
         case "follow":
          {
            const _4ee2b0157d82 = _ef71b2ec1c0f.headers.get("location");
            if (20 > _17905e3d28f1 && null !== _4ee2b0157d82) {
              _d77a045ec214 = new URL(_4ee2b0157d82, _d77a045ec214);
              continue;
            }
            throw new TypeError("Failed to fetch");
          }

         case "error":
          throw new TypeError("Failed to fetch");

         case "manual":
          return _ef71b2ec1c0f;
        }
      }
    }
  }
  console.debug("bare-mux: running v2.1.9 (build dc9dc6e)"), _17905e3d28f1.BareClient = m, 
  _17905e3d28f1.BareMuxConnection = class {
    worker;
    constructor(_17905e3d28f1) {
      this.worker = new p(_17905e3d28f1);
    }
    async getTransport() {
      return (await this.worker.sendMessage({
        type: "get"
      })).name;
    }
    async setTransport(_17905e3d28f1, _4ee2b0157d82, _6e2800fc351a) {
      await this.setManualTransport(`\n\t\t\tconst { default: BareTransport } = await import("${_17905e3d28f1}");\n\t\t\treturn [BareTransport, "${_17905e3d28f1}"];\n\t\t`, _4ee2b0157d82, _6e2800fc351a);
    }
    async setManualTransport(_17905e3d28f1, _4ee2b0157d82, _6e2800fc351a) {
      if ("bare-mux-remote" === _17905e3d28f1) throw new Error("Use setRemoteTransport.");
      await this.worker.sendMessage({
        type: "set",
        client: {
          function: _17905e3d28f1,
          args: _4ee2b0157d82
        }
      }, _6e2800fc351a);
    }
    async setRemoteTransport(_17905e3d28f1, _4ee2b0157d82) {
      const _6e2800fc351a = new MessageChannel;
      _6e2800fc351a.port1.onmessage = async _4ee2b0157d82 => {
        const _6e2800fc351a = _4ee2b0157d82.data.port, _b75216cddcc6 = _4ee2b0157d82.data.message;
        if ("fetch" === _b75216cddcc6.type) try {
          _17905e3d28f1.ready || await _17905e3d28f1.init(), await async function(_17905e3d28f1, _4ee2b0157d82, _6e2800fc351a) {
            const _b75216cddcc6 = await _6e2800fc351a.request(new URL(_17905e3d28f1.fetch.remote), _17905e3d28f1.fetch.method, _17905e3d28f1.fetch.body, _17905e3d28f1.fetch.headers, null);
            if (!d() && _b75216cddcc6.body instanceof ReadableStream) {
              const _17905e3d28f1 = new Response(_b75216cddcc6.body);
              _b75216cddcc6.body = await _17905e3d28f1.arrayBuffer();
            }
            _b75216cddcc6.body instanceof ReadableStream || _b75216cddcc6.body instanceof ArrayBuffer ? _639c405831de.call(_4ee2b0157d82, {
              type: "fetch",
              fetch: _b75216cddcc6
            }, [ _b75216cddcc6.body ]) : _639c405831de.call(_4ee2b0157d82, {
              type: "fetch",
              fetch: _b75216cddcc6
            });
          }(_b75216cddcc6, _6e2800fc351a, _17905e3d28f1);
        } catch (_17905e3d28f1) {
          w(_6e2800fc351a, _17905e3d28f1, "fetch");
        } else if ("websocket" === _b75216cddcc6.type) try {
          _17905e3d28f1.ready || await _17905e3d28f1.init(), await async function(_17905e3d28f1, _4ee2b0157d82, _6e2800fc351a) {
            const [_b75216cddcc6, _ef71b2ec1c0f] = _6e2800fc351a.connect(new URL(_17905e3d28f1.websocket.url), _17905e3d28f1.websocket.protocols, _17905e3d28f1.websocket.requestHeaders, _4ee2b0157d82 => {
              _639c405831de.call(_17905e3d28f1.websocket.channel, {
                type: "open",
                args: [ _4ee2b0157d82 ]
              });
            }, _4ee2b0157d82 => {
              _4ee2b0157d82 instanceof ArrayBuffer ? _639c405831de.call(_17905e3d28f1.websocket.channel, {
                type: "message",
                args: [ _4ee2b0157d82 ]
              }, [ _4ee2b0157d82 ]) : _639c405831de.call(_17905e3d28f1.websocket.channel, {
                type: "message",
                args: [ _4ee2b0157d82 ]
              });
            }, (_4ee2b0157d82, _6e2800fc351a) => {
              _639c405831de.call(_17905e3d28f1.websocket.channel, {
                type: "close",
                args: [ _4ee2b0157d82, _6e2800fc351a ]
              });
            }, _4ee2b0157d82 => {
              _639c405831de.call(_17905e3d28f1.websocket.channel, {
                type: "error",
                args: [ _4ee2b0157d82 ]
              });
            });
            _17905e3d28f1.websocket.channel.onmessage = _17905e3d28f1 => {
              "data" === _17905e3d28f1.data.type ? _b75216cddcc6(_17905e3d28f1.data.data) : "close" === _17905e3d28f1.data.type && _ef71b2ec1c0f(_17905e3d28f1.data.closeCode, _17905e3d28f1.data.closeReason);
            }, _639c405831de.call(_4ee2b0157d82, {
              type: "websocket"
            });
          }(_b75216cddcc6, _6e2800fc351a, _17905e3d28f1);
        } catch (_17905e3d28f1) {
          w(_6e2800fc351a, _17905e3d28f1, "websocket");
        }
      }, await this.worker.sendMessage({
        type: "set",
        client: {
          function: "bare-mux-remote",
          args: [ _6e2800fc351a.port2, _4ee2b0157d82 ]
        }
      }, [ _6e2800fc351a.port2 ]);
    }
    getInnerPort() {
      return this.worker.port;
    }
  }, _17905e3d28f1.BareWebSocket = u, _17905e3d28f1.WebSocketFields = _e5dbb3872472, 
  _17905e3d28f1.WorkerConnection = p, _17905e3d28f1.browserSupportsTransferringStreams = d, 
  _17905e3d28f1.default = m, _17905e3d28f1.maxRedirects = 20, _17905e3d28f1.validProtocol = f, 
  Object.defineProperty(_17905e3d28f1, "__esModule", {
    value: !0
  });
});
