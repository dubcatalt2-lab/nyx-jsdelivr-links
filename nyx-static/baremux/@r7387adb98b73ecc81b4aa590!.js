!function(_5bc9cb9138eb, _d11a62f2b8f1) {
  "object" == typeof exports && "undefined" != typeof module ? _d11a62f2b8f1(exports) : "function" == typeof define && define.amd ? define([ "exports" ], _d11a62f2b8f1) : _d11a62f2b8f1((_5bc9cb9138eb = "undefined" != typeof globalThis ? globalThis : _5bc9cb9138eb || self).BareMux = {});
}(this, function(_5bc9cb9138eb) {
  "use strict";
  const _d11a62f2b8f1 = globalThis.fetch, _74c283c5ed0e = globalThis.SharedWorker, _42cb97372cb8 = globalThis.localStorage, _acbd9f40a2f3 = globalThis.navigator.serviceWorker, _3110c31d8ff0 = MessagePort.prototype.postMessage, _b5e54cf546ce = {
    prototype: {
      send: WebSocket.prototype.send
    },
    CLOSED: WebSocket.CLOSED,
    CLOSING: WebSocket.CLOSING,
    CONNECTING: WebSocket.CONNECTING,
    OPEN: WebSocket.OPEN
  };
  async function c() {
    const _5bc9cb9138eb = (await self.clients.matchAll({
      type: "window",
      includeUncontrolled: !0
    })).map(async _5bc9cb9138eb => {
      const _d11a62f2b8f1 = await function(_5bc9cb9138eb) {
        let _d11a62f2b8f1 = new MessageChannel;
        return new Promise(_74c283c5ed0e => {
          _5bc9cb9138eb.postMessage({
            type: "getPort",
            port: _d11a62f2b8f1.port2
          }, [ _d11a62f2b8f1.port2 ]), _d11a62f2b8f1.port1.onmessage = _5bc9cb9138eb => {
            _74c283c5ed0e(_5bc9cb9138eb.data);
          };
        });
      }(_5bc9cb9138eb);
      return await i(_d11a62f2b8f1), _d11a62f2b8f1;
    }), _d11a62f2b8f1 = Promise.race([ Promise.any(_5bc9cb9138eb), new Promise((_5bc9cb9138eb, _d11a62f2b8f1) => setTimeout(_d11a62f2b8f1, 1e3, new TypeError("timeout"))) ]);
    try {
      return await _d11a62f2b8f1;
    } catch (_5bc9cb9138eb) {
      if (_5bc9cb9138eb instanceof AggregateError) throw console.error("bare-mux: failed to get a bare-mux SharedWorker MessagePort as all clients returned an invalid MessagePort."), 
      new Error("All clients returned an invalid MessagePort.", {
        cause: _5bc9cb9138eb
      });
      return console.warn("bare-mux: failed to get a bare-mux SharedWorker MessagePort within 1s, retrying"), 
      await c();
    }
  }
  function i(_5bc9cb9138eb) {
    const _d11a62f2b8f1 = new MessageChannel, _74c283c5ed0e = new Promise((_5bc9cb9138eb, _74c283c5ed0e) => {
      _d11a62f2b8f1.port1.onmessage = _d11a62f2b8f1 => {
        "pong" === _d11a62f2b8f1.data.type && _5bc9cb9138eb();
      }, setTimeout(_74c283c5ed0e, 1500);
    });
    return _3110c31d8ff0.call(_5bc9cb9138eb, {
      message: {
        type: "ping"
      },
      port: _d11a62f2b8f1.port2
    }, [ _d11a62f2b8f1.port2 ]), _74c283c5ed0e;
  }
  function l(_5bc9cb9138eb, _d11a62f2b8f1) {
    const _42cb97372cb8 = new _74c283c5ed0e(_5bc9cb9138eb, "ridgewood-stem-worker");
    return _d11a62f2b8f1 && _acbd9f40a2f3.addEventListener("message", _d11a62f2b8f1 => {
      if ("getPort" === _d11a62f2b8f1.data.type && _d11a62f2b8f1.data.port) {
        console.debug("bare-mux: recieved request for port from sw");
        const _42cb97372cb8 = new _74c283c5ed0e(_5bc9cb9138eb, "ridgewood-stem-worker");
        _3110c31d8ff0.call(_d11a62f2b8f1.data.port, _42cb97372cb8.port, [ _42cb97372cb8.port ]);
      }
    }), _42cb97372cb8.port;
  }
  let _c8c22a65ce11 = null;
  function d() {
    if (null === _c8c22a65ce11) {
      const _5bc9cb9138eb = new MessageChannel, _d11a62f2b8f1 = new ReadableStream;
      let _74c283c5ed0e;
      try {
        _3110c31d8ff0.call(_5bc9cb9138eb.port1, _d11a62f2b8f1, [ _d11a62f2b8f1 ]), _74c283c5ed0e = !0;
      } catch (_5bc9cb9138eb) {
        _74c283c5ed0e = !1;
      }
      return _c8c22a65ce11 = _74c283c5ed0e, _74c283c5ed0e;
    }
    return _c8c22a65ce11;
  }
  class p {
    channel;
    port;
    workerPath;
    constructor(_5bc9cb9138eb) {
      this.channel = new BroadcastChannel("bare-mux"), _5bc9cb9138eb instanceof MessagePort || _5bc9cb9138eb instanceof Promise ? this.port = _5bc9cb9138eb : this.createChannel(_5bc9cb9138eb, !0);
    }
    createChannel(_5bc9cb9138eb, _d11a62f2b8f1) {
      if (self.clients) this.port = c(), this.channel.onmessage = _5bc9cb9138eb => {
        "refreshPort" === _5bc9cb9138eb.data.type && (this.port = c());
      }; else if (_5bc9cb9138eb && SharedWorker) {
        if (!_5bc9cb9138eb.startsWith("/") && !_5bc9cb9138eb.includes(":")) throw new Error("Invalid URL. Must be absolute or start at the root.");
        this.port = l(_5bc9cb9138eb, _d11a62f2b8f1), console.debug("bare-mux: setting localStorage bare-mux-path to", _5bc9cb9138eb), 
        _42cb97372cb8["bare-mux-path"] = _5bc9cb9138eb;
      } else {
        if (!SharedWorker) throw new Error("Unable to get a channel to the SharedWorker.");
        {
          const _5bc9cb9138eb = _42cb97372cb8["bare-mux-path"];
          if (console.debug("bare-mux: got localStorage bare-mux-path:", _5bc9cb9138eb), !_5bc9cb9138eb) throw new Error("Unable to get bare-mux workerPath from localStorage.");
          this.port = l(_5bc9cb9138eb, _d11a62f2b8f1);
        }
      }
    }
    async sendMessage(_5bc9cb9138eb, _d11a62f2b8f1) {
      this.port instanceof Promise && (this.port = await this.port);
      try {
        await i(this.port);
      } catch {
        return console.warn("bare-mux: Failed to get a ping response from the worker within 1.5s. Assuming port is dead."), 
        this.createChannel(), await this.sendMessage(_5bc9cb9138eb, _d11a62f2b8f1);
      }
      const _74c283c5ed0e = new MessageChannel, _42cb97372cb8 = [ _74c283c5ed0e.port2, ..._d11a62f2b8f1 || [] ], _acbd9f40a2f3 = new Promise((_5bc9cb9138eb, _d11a62f2b8f1) => {
        _74c283c5ed0e.port1.onmessage = _74c283c5ed0e => {
          const _42cb97372cb8 = _74c283c5ed0e.data;
          "error" === _42cb97372cb8.type ? _d11a62f2b8f1(_42cb97372cb8.error) : _5bc9cb9138eb(_42cb97372cb8);
        };
      });
      return _3110c31d8ff0.call(this.port, {
        message: _5bc9cb9138eb,
        port: _74c283c5ed0e.port2
      }, _42cb97372cb8), await _acbd9f40a2f3;
    }
  }
  class u extends EventTarget {
    protocols;
    url;
    readyState=_b5e54cf546ce.CONNECTING;
    channel;
    constructor(_5bc9cb9138eb, _d11a62f2b8f1 = [], _74c283c5ed0e, _42cb97372cb8) {
      super(), this.protocols = _d11a62f2b8f1, this.url = _5bc9cb9138eb.toString(), this.protocols = _d11a62f2b8f1;
      const s = _5bc9cb9138eb => {
        this.protocols = _5bc9cb9138eb, this.readyState = _b5e54cf546ce.OPEN;
        const _d11a62f2b8f1 = new Event("open");
        this.dispatchEvent(_d11a62f2b8f1);
      }, o = async _5bc9cb9138eb => {
        const _d11a62f2b8f1 = new MessageEvent("message", {
          data: _5bc9cb9138eb
        });
        this.dispatchEvent(_d11a62f2b8f1);
      }, c = (_5bc9cb9138eb, _d11a62f2b8f1) => {
        this.readyState = _b5e54cf546ce.CLOSED;
        const _74c283c5ed0e = new CloseEvent("close", {
          code: _5bc9cb9138eb,
          reason: _d11a62f2b8f1
        });
        this.dispatchEvent(_74c283c5ed0e);
      }, i = () => {
        this.readyState = _b5e54cf546ce.CLOSED;
        const _5bc9cb9138eb = new Event("error");
        this.dispatchEvent(_5bc9cb9138eb);
      };
      this.channel = new MessageChannel, this.channel.port1.onmessage = _5bc9cb9138eb => {
        "open" === _5bc9cb9138eb.data.type ? s(_5bc9cb9138eb.data.args[0]) : "message" === _5bc9cb9138eb.data.type ? o(_5bc9cb9138eb.data.args[0]) : "close" === _5bc9cb9138eb.data.type ? c(_5bc9cb9138eb.data.args[0], _5bc9cb9138eb.data.args[1]) : "error" === _5bc9cb9138eb.data.type && i();
      }, _74c283c5ed0e.sendMessage({
        type: "websocket",
        websocket: {
          url: _5bc9cb9138eb.toString(),
          protocols: _d11a62f2b8f1,
          requestHeaders: _42cb97372cb8,
          channel: this.channel.port2
        }
      }, [ this.channel.port2 ]);
    }
    send(..._5bc9cb9138eb) {
      if (this.readyState === _b5e54cf546ce.CONNECTING) throw new DOMException("Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.");
      let _d11a62f2b8f1 = _5bc9cb9138eb[0];
      _d11a62f2b8f1.buffer && (_d11a62f2b8f1 = _d11a62f2b8f1.buffer.slice(_d11a62f2b8f1.byteOffset, _d11a62f2b8f1.byteOffset + _d11a62f2b8f1.byteLength)), 
      _3110c31d8ff0.call(this.channel.port1, {
        type: "data",
        data: _d11a62f2b8f1
      }, _d11a62f2b8f1 instanceof ArrayBuffer ? [ _d11a62f2b8f1 ] : []);
    }
    close(_5bc9cb9138eb, _d11a62f2b8f1) {
      _3110c31d8ff0.call(this.channel.port1, {
        type: "close",
        closeCode: _5bc9cb9138eb,
        closeReason: _d11a62f2b8f1
      });
    }
  }
  function w(_5bc9cb9138eb, _d11a62f2b8f1, _74c283c5ed0e) {
    console.error(`error while processing '${_74c283c5ed0e}': `, _d11a62f2b8f1), _5bc9cb9138eb.postMessage({
      type: "error",
      error: _d11a62f2b8f1
    });
  }
  function f(_5bc9cb9138eb) {
    for (let _d11a62f2b8f1 = 0; _d11a62f2b8f1 < _5bc9cb9138eb.length; _d11a62f2b8f1++) {
      const _74c283c5ed0e = _5bc9cb9138eb[_d11a62f2b8f1];
      if (!"!#$%&'*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz|~".includes(_74c283c5ed0e)) return !1;
    }
    return !0;
  }
  const _6d002fd8b73b = [ "ws:", "wss:" ], _040c56f9b594 = [ 101, 204, 205, 304 ], _46773b6d3bb8 = [ 301, 302, 303, 307, 308 ];
  class m {
    worker;
    constructor(_5bc9cb9138eb) {
      this.worker = new p(_5bc9cb9138eb);
    }
    createWebSocket(_5bc9cb9138eb, _d11a62f2b8f1 = [], _74c283c5ed0e, _42cb97372cb8) {
      try {
        _5bc9cb9138eb = new URL(_5bc9cb9138eb);
      } catch (_d11a62f2b8f1) {
        throw new DOMException(`Faiiled to construct 'WebSocket': The URL '${_5bc9cb9138eb}' is invalid.`);
      }
      if (!_6d002fd8b73b.includes(_5bc9cb9138eb.protocol)) throw new DOMException(`Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '${_5bc9cb9138eb.protocol}' is not allowed.`);
      Array.isArray(_d11a62f2b8f1) || (_d11a62f2b8f1 = [ _d11a62f2b8f1 ]), _d11a62f2b8f1 = _d11a62f2b8f1.map(String);
      for (const _5bc9cb9138eb of _d11a62f2b8f1) if (!f(_5bc9cb9138eb)) throw new DOMException(`Failed to construct 'WebSocket': The subprotocol '${_5bc9cb9138eb}' is invalid.`);
      _42cb97372cb8 = _42cb97372cb8 || {};
      return new u(_5bc9cb9138eb, _d11a62f2b8f1, this.worker, _42cb97372cb8);
    }
    async fetch(_5bc9cb9138eb, _74c283c5ed0e) {
      const _42cb97372cb8 = new Request(_5bc9cb9138eb, _74c283c5ed0e), _acbd9f40a2f3 = _74c283c5ed0e?.headers || _42cb97372cb8.headers, _3110c31d8ff0 = _acbd9f40a2f3 instanceof Headers ? Object.fromEntries(_acbd9f40a2f3) : _acbd9f40a2f3, _b5e54cf546ce = _42cb97372cb8.body;
      let _c8c22a65ce11 = new URL(_42cb97372cb8.url);
      if (_c8c22a65ce11.protocol.startsWith("blob:")) {
        const _5bc9cb9138eb = await _d11a62f2b8f1(_c8c22a65ce11), _74c283c5ed0e = new Response(_5bc9cb9138eb.body, _5bc9cb9138eb);
        return _74c283c5ed0e.rawHeaders = Object.fromEntries(_5bc9cb9138eb.headers), _74c283c5ed0e.rawResponse = {
          body: _5bc9cb9138eb.body,
          headers: Object.fromEntries(_5bc9cb9138eb.headers),
          status: _5bc9cb9138eb.status,
          statusText: _5bc9cb9138eb.statusText
        }, _74c283c5ed0e.finalURL = _c8c22a65ce11.toString(), _74c283c5ed0e;
      }
      for (let _5bc9cb9138eb = 0; ;_5bc9cb9138eb++) {
        let _d11a62f2b8f1 = (await this.worker.sendMessage({
          type: "fetch",
          fetch: {
            remote: _c8c22a65ce11.toString(),
            method: _42cb97372cb8.method,
            headers: _3110c31d8ff0,
            body: _b5e54cf546ce || void 0
          }
        }, _b5e54cf546ce ? [ _b5e54cf546ce ] : [])).fetch, _acbd9f40a2f3 = new Response(_040c56f9b594.includes(_d11a62f2b8f1.status) ? void 0 : _d11a62f2b8f1.body, {
          headers: new Headers(_d11a62f2b8f1.headers),
          status: _d11a62f2b8f1.status,
          statusText: _d11a62f2b8f1.statusText
        });
        _acbd9f40a2f3.rawHeaders = _d11a62f2b8f1.headers, _acbd9f40a2f3.rawResponse = _d11a62f2b8f1, 
        _acbd9f40a2f3.finalURL = _c8c22a65ce11.toString();
        const _6d002fd8b73b = _74c283c5ed0e?.redirect || _42cb97372cb8.redirect;
        if (!_46773b6d3bb8.includes(_acbd9f40a2f3.status)) return _acbd9f40a2f3;
        switch (_6d002fd8b73b) {
         case "follow":
          {
            const _d11a62f2b8f1 = _acbd9f40a2f3.headers.get("location");
            if (20 > _5bc9cb9138eb && null !== _d11a62f2b8f1) {
              _c8c22a65ce11 = new URL(_d11a62f2b8f1, _c8c22a65ce11);
              continue;
            }
            throw new TypeError("Failed to fetch");
          }

         case "error":
          throw new TypeError("Failed to fetch");

         case "manual":
          return _acbd9f40a2f3;
        }
      }
    }
  }
  console.debug("bare-mux: running v2.1.9 (build dc9dc6e)"), _5bc9cb9138eb.BareClient = m, 
  _5bc9cb9138eb.BareMuxConnection = class {
    worker;
    constructor(_5bc9cb9138eb) {
      this.worker = new p(_5bc9cb9138eb);
    }
    async getTransport() {
      return (await this.worker.sendMessage({
        type: "get"
      })).name;
    }
    async setTransport(_5bc9cb9138eb, _d11a62f2b8f1, _74c283c5ed0e) {
      await this.setManualTransport(`\n\t\t\tconst { default: BareTransport } = await import("${_5bc9cb9138eb}");\n\t\t\treturn [BareTransport, "${_5bc9cb9138eb}"];\n\t\t`, _d11a62f2b8f1, _74c283c5ed0e);
    }
    async setManualTransport(_5bc9cb9138eb, _d11a62f2b8f1, _74c283c5ed0e) {
      if ("bare-mux-remote" === _5bc9cb9138eb) throw new Error("Use setRemoteTransport.");
      await this.worker.sendMessage({
        type: "set",
        client: {
          function: _5bc9cb9138eb,
          args: _d11a62f2b8f1
        }
      }, _74c283c5ed0e);
    }
    async setRemoteTransport(_5bc9cb9138eb, _d11a62f2b8f1) {
      const _74c283c5ed0e = new MessageChannel;
      _74c283c5ed0e.port1.onmessage = async _d11a62f2b8f1 => {
        const _74c283c5ed0e = _d11a62f2b8f1.data.port, _42cb97372cb8 = _d11a62f2b8f1.data.message;
        if ("fetch" === _42cb97372cb8.type) try {
          _5bc9cb9138eb.ready || await _5bc9cb9138eb.init(), await async function(_5bc9cb9138eb, _d11a62f2b8f1, _74c283c5ed0e) {
            const _42cb97372cb8 = await _74c283c5ed0e.request(new URL(_5bc9cb9138eb.fetch.remote), _5bc9cb9138eb.fetch.method, _5bc9cb9138eb.fetch.body, _5bc9cb9138eb.fetch.headers, null);
            if (!d() && _42cb97372cb8.body instanceof ReadableStream) {
              const _5bc9cb9138eb = new Response(_42cb97372cb8.body);
              _42cb97372cb8.body = await _5bc9cb9138eb.arrayBuffer();
            }
            _42cb97372cb8.body instanceof ReadableStream || _42cb97372cb8.body instanceof ArrayBuffer ? _3110c31d8ff0.call(_d11a62f2b8f1, {
              type: "fetch",
              fetch: _42cb97372cb8
            }, [ _42cb97372cb8.body ]) : _3110c31d8ff0.call(_d11a62f2b8f1, {
              type: "fetch",
              fetch: _42cb97372cb8
            });
          }(_42cb97372cb8, _74c283c5ed0e, _5bc9cb9138eb);
        } catch (_5bc9cb9138eb) {
          w(_74c283c5ed0e, _5bc9cb9138eb, "fetch");
        } else if ("websocket" === _42cb97372cb8.type) try {
          _5bc9cb9138eb.ready || await _5bc9cb9138eb.init(), await async function(_5bc9cb9138eb, _d11a62f2b8f1, _74c283c5ed0e) {
            const [_42cb97372cb8, _acbd9f40a2f3] = _74c283c5ed0e.connect(new URL(_5bc9cb9138eb.websocket.url), _5bc9cb9138eb.websocket.protocols, _5bc9cb9138eb.websocket.requestHeaders, _d11a62f2b8f1 => {
              _3110c31d8ff0.call(_5bc9cb9138eb.websocket.channel, {
                type: "open",
                args: [ _d11a62f2b8f1 ]
              });
            }, _d11a62f2b8f1 => {
              _d11a62f2b8f1 instanceof ArrayBuffer ? _3110c31d8ff0.call(_5bc9cb9138eb.websocket.channel, {
                type: "message",
                args: [ _d11a62f2b8f1 ]
              }, [ _d11a62f2b8f1 ]) : _3110c31d8ff0.call(_5bc9cb9138eb.websocket.channel, {
                type: "message",
                args: [ _d11a62f2b8f1 ]
              });
            }, (_d11a62f2b8f1, _74c283c5ed0e) => {
              _3110c31d8ff0.call(_5bc9cb9138eb.websocket.channel, {
                type: "close",
                args: [ _d11a62f2b8f1, _74c283c5ed0e ]
              });
            }, _d11a62f2b8f1 => {
              _3110c31d8ff0.call(_5bc9cb9138eb.websocket.channel, {
                type: "error",
                args: [ _d11a62f2b8f1 ]
              });
            });
            _5bc9cb9138eb.websocket.channel.onmessage = _5bc9cb9138eb => {
              "data" === _5bc9cb9138eb.data.type ? _42cb97372cb8(_5bc9cb9138eb.data.data) : "close" === _5bc9cb9138eb.data.type && _acbd9f40a2f3(_5bc9cb9138eb.data.closeCode, _5bc9cb9138eb.data.closeReason);
            }, _3110c31d8ff0.call(_d11a62f2b8f1, {
              type: "websocket"
            });
          }(_42cb97372cb8, _74c283c5ed0e, _5bc9cb9138eb);
        } catch (_5bc9cb9138eb) {
          w(_74c283c5ed0e, _5bc9cb9138eb, "websocket");
        }
      }, await this.worker.sendMessage({
        type: "set",
        client: {
          function: "bare-mux-remote",
          args: [ _74c283c5ed0e.port2, _d11a62f2b8f1 ]
        }
      }, [ _74c283c5ed0e.port2 ]);
    }
    getInnerPort() {
      return this.worker.port;
    }
  }, _5bc9cb9138eb.BareWebSocket = u, _5bc9cb9138eb.WebSocketFields = _b5e54cf546ce, 
  _5bc9cb9138eb.WorkerConnection = p, _5bc9cb9138eb.browserSupportsTransferringStreams = d, 
  _5bc9cb9138eb.default = m, _5bc9cb9138eb.maxRedirects = 20, _5bc9cb9138eb.validProtocol = f, 
  Object.defineProperty(_5bc9cb9138eb, "__esModule", {
    value: !0
  });
});
