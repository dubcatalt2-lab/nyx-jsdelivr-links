!function(_31b80ab82b1c, _fefbf9f1e5e0) {
  "object" == typeof exports && "undefined" != typeof module ? _fefbf9f1e5e0(exports) : "function" == typeof define && define.amd ? define([ "exports" ], _fefbf9f1e5e0) : _fefbf9f1e5e0((_31b80ab82b1c = "undefined" != typeof globalThis ? globalThis : _31b80ab82b1c || self).BareMux = {});
}(this, function(_31b80ab82b1c) {
  "use strict";
  const _fefbf9f1e5e0 = globalThis.fetch, _ebd23ea0c93a = globalThis.SharedWorker, _067052abce00 = globalThis.localStorage, _74036a4f6244 = globalThis.navigator.serviceWorker, _adca0d3fbeae = MessagePort.prototype.postMessage, _0ecf77c6d366 = {
    prototype: {
      send: WebSocket.prototype.send
    },
    CLOSED: WebSocket.CLOSED,
    CLOSING: WebSocket.CLOSING,
    CONNECTING: WebSocket.CONNECTING,
    OPEN: WebSocket.OPEN
  };
  async function c() {
    const _31b80ab82b1c = (await self.clients.matchAll({
      type: "window",
      includeUncontrolled: !0
    })).map(async _31b80ab82b1c => {
      const _fefbf9f1e5e0 = await function(_31b80ab82b1c) {
        let _fefbf9f1e5e0 = new MessageChannel;
        return new Promise(_ebd23ea0c93a => {
          _31b80ab82b1c.postMessage({
            type: "getPort",
            port: _fefbf9f1e5e0.port2
          }, [ _fefbf9f1e5e0.port2 ]), _fefbf9f1e5e0.port1.onmessage = _31b80ab82b1c => {
            _ebd23ea0c93a(_31b80ab82b1c.data);
          };
        });
      }(_31b80ab82b1c);
      return await i(_fefbf9f1e5e0), _fefbf9f1e5e0;
    }), _fefbf9f1e5e0 = Promise.race([ Promise.any(_31b80ab82b1c), new Promise((_31b80ab82b1c, _fefbf9f1e5e0) => setTimeout(_fefbf9f1e5e0, 1e3, new TypeError("timeout"))) ]);
    try {
      return await _fefbf9f1e5e0;
    } catch (_31b80ab82b1c) {
      if (_31b80ab82b1c instanceof AggregateError) throw console.error("bare-mux: failed to get a bare-mux SharedWorker MessagePort as all clients returned an invalid MessagePort."), 
      new Error("All clients returned an invalid MessagePort.", {
        cause: _31b80ab82b1c
      });
      return console.warn("bare-mux: failed to get a bare-mux SharedWorker MessagePort within 1s, retrying"), 
      await c();
    }
  }
  function i(_31b80ab82b1c) {
    const _fefbf9f1e5e0 = new MessageChannel, _ebd23ea0c93a = new Promise((_31b80ab82b1c, _ebd23ea0c93a) => {
      _fefbf9f1e5e0.port1.onmessage = _fefbf9f1e5e0 => {
        "pong" === _fefbf9f1e5e0.data.type && _31b80ab82b1c();
      }, setTimeout(_ebd23ea0c93a, 1500);
    });
    return _adca0d3fbeae.call(_31b80ab82b1c, {
      message: {
        type: "ping"
      },
      port: _fefbf9f1e5e0.port2
    }, [ _fefbf9f1e5e0.port2 ]), _ebd23ea0c93a;
  }
  function l(_31b80ab82b1c, _fefbf9f1e5e0) {
    const _067052abce00 = new _ebd23ea0c93a(_31b80ab82b1c, "ridgewood-stem-worker");
    return _fefbf9f1e5e0 && _74036a4f6244.addEventListener("message", _fefbf9f1e5e0 => {
      if ("getPort" === _fefbf9f1e5e0.data.type && _fefbf9f1e5e0.data.port) {
        console.debug("bare-mux: recieved request for port from sw");
        const _067052abce00 = new _ebd23ea0c93a(_31b80ab82b1c, "ridgewood-stem-worker");
        _adca0d3fbeae.call(_fefbf9f1e5e0.data.port, _067052abce00.port, [ _067052abce00.port ]);
      }
    }), _067052abce00.port;
  }
  let _96198835c223 = null;
  function d() {
    if (null === _96198835c223) {
      const _31b80ab82b1c = new MessageChannel, _fefbf9f1e5e0 = new ReadableStream;
      let _ebd23ea0c93a;
      try {
        _adca0d3fbeae.call(_31b80ab82b1c.port1, _fefbf9f1e5e0, [ _fefbf9f1e5e0 ]), _ebd23ea0c93a = !0;
      } catch (_31b80ab82b1c) {
        _ebd23ea0c93a = !1;
      }
      return _96198835c223 = _ebd23ea0c93a, _ebd23ea0c93a;
    }
    return _96198835c223;
  }
  class p {
    channel;
    port;
    workerPath;
    constructor(_31b80ab82b1c) {
      this.channel = new BroadcastChannel("bare-mux"), _31b80ab82b1c instanceof MessagePort || _31b80ab82b1c instanceof Promise ? this.port = _31b80ab82b1c : this.createChannel(_31b80ab82b1c, !0);
    }
    createChannel(_31b80ab82b1c, _fefbf9f1e5e0) {
      if (self.clients) this.port = c(), this.channel.onmessage = _31b80ab82b1c => {
        "refreshPort" === _31b80ab82b1c.data.type && (this.port = c());
      }; else if (_31b80ab82b1c && SharedWorker) {
        if (!_31b80ab82b1c.startsWith("/") && !_31b80ab82b1c.includes(":")) throw new Error("Invalid URL. Must be absolute or start at the root.");
        this.port = l(_31b80ab82b1c, _fefbf9f1e5e0), console.debug("bare-mux: setting localStorage bare-mux-path to", _31b80ab82b1c), 
        _067052abce00["bare-mux-path"] = _31b80ab82b1c;
      } else {
        if (!SharedWorker) throw new Error("Unable to get a channel to the SharedWorker.");
        {
          const _31b80ab82b1c = _067052abce00["bare-mux-path"];
          if (console.debug("bare-mux: got localStorage bare-mux-path:", _31b80ab82b1c), !_31b80ab82b1c) throw new Error("Unable to get bare-mux workerPath from localStorage.");
          this.port = l(_31b80ab82b1c, _fefbf9f1e5e0);
        }
      }
    }
    async sendMessage(_31b80ab82b1c, _fefbf9f1e5e0) {
      this.port instanceof Promise && (this.port = await this.port);
      try {
        await i(this.port);
      } catch {
        return console.warn("bare-mux: Failed to get a ping response from the worker within 1.5s. Assuming port is dead."), 
        this.createChannel(), await this.sendMessage(_31b80ab82b1c, _fefbf9f1e5e0);
      }
      const _ebd23ea0c93a = new MessageChannel, _067052abce00 = [ _ebd23ea0c93a.port2, ..._fefbf9f1e5e0 || [] ], _74036a4f6244 = new Promise((_31b80ab82b1c, _fefbf9f1e5e0) => {
        _ebd23ea0c93a.port1.onmessage = _ebd23ea0c93a => {
          const _067052abce00 = _ebd23ea0c93a.data;
          "error" === _067052abce00.type ? _fefbf9f1e5e0(_067052abce00.error) : _31b80ab82b1c(_067052abce00);
        };
      });
      return _adca0d3fbeae.call(this.port, {
        message: _31b80ab82b1c,
        port: _ebd23ea0c93a.port2
      }, _067052abce00), await _74036a4f6244;
    }
  }
  class u extends EventTarget {
    protocols;
    url;
    readyState=_0ecf77c6d366.CONNECTING;
    channel;
    constructor(_31b80ab82b1c, _fefbf9f1e5e0 = [], _ebd23ea0c93a, _067052abce00) {
      super(), this.protocols = _fefbf9f1e5e0, this.url = _31b80ab82b1c.toString(), this.protocols = _fefbf9f1e5e0;
      const s = _31b80ab82b1c => {
        this.protocols = _31b80ab82b1c, this.readyState = _0ecf77c6d366.OPEN;
        const _fefbf9f1e5e0 = new Event("open");
        this.dispatchEvent(_fefbf9f1e5e0);
      }, o = async _31b80ab82b1c => {
        const _fefbf9f1e5e0 = new MessageEvent("message", {
          data: _31b80ab82b1c
        });
        this.dispatchEvent(_fefbf9f1e5e0);
      }, c = (_31b80ab82b1c, _fefbf9f1e5e0) => {
        this.readyState = _0ecf77c6d366.CLOSED;
        const _ebd23ea0c93a = new CloseEvent("close", {
          code: _31b80ab82b1c,
          reason: _fefbf9f1e5e0
        });
        this.dispatchEvent(_ebd23ea0c93a);
      }, i = () => {
        this.readyState = _0ecf77c6d366.CLOSED;
        const _31b80ab82b1c = new Event("error");
        this.dispatchEvent(_31b80ab82b1c);
      };
      this.channel = new MessageChannel, this.channel.port1.onmessage = _31b80ab82b1c => {
        "open" === _31b80ab82b1c.data.type ? s(_31b80ab82b1c.data.args[0]) : "message" === _31b80ab82b1c.data.type ? o(_31b80ab82b1c.data.args[0]) : "close" === _31b80ab82b1c.data.type ? c(_31b80ab82b1c.data.args[0], _31b80ab82b1c.data.args[1]) : "error" === _31b80ab82b1c.data.type && i();
      }, _ebd23ea0c93a.sendMessage({
        type: "websocket",
        websocket: {
          url: _31b80ab82b1c.toString(),
          protocols: _fefbf9f1e5e0,
          requestHeaders: _067052abce00,
          channel: this.channel.port2
        }
      }, [ this.channel.port2 ]);
    }
    send(..._31b80ab82b1c) {
      if (this.readyState === _0ecf77c6d366.CONNECTING) throw new DOMException("Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.");
      let _fefbf9f1e5e0 = _31b80ab82b1c[0];
      _fefbf9f1e5e0.buffer && (_fefbf9f1e5e0 = _fefbf9f1e5e0.buffer.slice(_fefbf9f1e5e0.byteOffset, _fefbf9f1e5e0.byteOffset + _fefbf9f1e5e0.byteLength)), 
      _adca0d3fbeae.call(this.channel.port1, {
        type: "data",
        data: _fefbf9f1e5e0
      }, _fefbf9f1e5e0 instanceof ArrayBuffer ? [ _fefbf9f1e5e0 ] : []);
    }
    close(_31b80ab82b1c, _fefbf9f1e5e0) {
      _adca0d3fbeae.call(this.channel.port1, {
        type: "close",
        closeCode: _31b80ab82b1c,
        closeReason: _fefbf9f1e5e0
      });
    }
  }
  function w(_31b80ab82b1c, _fefbf9f1e5e0, _ebd23ea0c93a) {
    console.error(`error while processing '${_ebd23ea0c93a}': `, _fefbf9f1e5e0), _31b80ab82b1c.postMessage({
      type: "error",
      error: _fefbf9f1e5e0
    });
  }
  function f(_31b80ab82b1c) {
    for (let _fefbf9f1e5e0 = 0; _fefbf9f1e5e0 < _31b80ab82b1c.length; _fefbf9f1e5e0++) {
      const _ebd23ea0c93a = _31b80ab82b1c[_fefbf9f1e5e0];
      if (!"!#$%&'*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz|~".includes(_ebd23ea0c93a)) return !1;
    }
    return !0;
  }
  const _38405b63f397 = [ "ws:", "wss:" ], _2235e599f32f = [ 101, 204, 205, 304 ], _fd56551937d9 = [ 301, 302, 303, 307, 308 ];
  class m {
    worker;
    constructor(_31b80ab82b1c) {
      this.worker = new p(_31b80ab82b1c);
    }
    createWebSocket(_31b80ab82b1c, _fefbf9f1e5e0 = [], _ebd23ea0c93a, _067052abce00) {
      try {
        _31b80ab82b1c = new URL(_31b80ab82b1c);
      } catch (_fefbf9f1e5e0) {
        throw new DOMException(`Faiiled to construct 'WebSocket': The URL '${_31b80ab82b1c}' is invalid.`);
      }
      if (!_38405b63f397.includes(_31b80ab82b1c.protocol)) throw new DOMException(`Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '${_31b80ab82b1c.protocol}' is not allowed.`);
      Array.isArray(_fefbf9f1e5e0) || (_fefbf9f1e5e0 = [ _fefbf9f1e5e0 ]), _fefbf9f1e5e0 = _fefbf9f1e5e0.map(String);
      for (const _31b80ab82b1c of _fefbf9f1e5e0) if (!f(_31b80ab82b1c)) throw new DOMException(`Failed to construct 'WebSocket': The subprotocol '${_31b80ab82b1c}' is invalid.`);
      _067052abce00 = _067052abce00 || {};
      return new u(_31b80ab82b1c, _fefbf9f1e5e0, this.worker, _067052abce00);
    }
    async fetch(_31b80ab82b1c, _ebd23ea0c93a) {
      const _067052abce00 = new Request(_31b80ab82b1c, _ebd23ea0c93a), _74036a4f6244 = _ebd23ea0c93a?.headers || _067052abce00.headers, _adca0d3fbeae = _74036a4f6244 instanceof Headers ? Object.fromEntries(_74036a4f6244) : _74036a4f6244, _0ecf77c6d366 = _067052abce00.body;
      let _96198835c223 = new URL(_067052abce00.url);
      if (_96198835c223.protocol.startsWith("blob:")) {
        const _31b80ab82b1c = await _fefbf9f1e5e0(_96198835c223), _ebd23ea0c93a = new Response(_31b80ab82b1c.body, _31b80ab82b1c);
        return _ebd23ea0c93a.rawHeaders = Object.fromEntries(_31b80ab82b1c.headers), _ebd23ea0c93a.rawResponse = {
          body: _31b80ab82b1c.body,
          headers: Object.fromEntries(_31b80ab82b1c.headers),
          status: _31b80ab82b1c.status,
          statusText: _31b80ab82b1c.statusText
        }, _ebd23ea0c93a.finalURL = _96198835c223.toString(), _ebd23ea0c93a;
      }
      for (let _31b80ab82b1c = 0; ;_31b80ab82b1c++) {
        let _fefbf9f1e5e0 = (await this.worker.sendMessage({
          type: "fetch",
          fetch: {
            remote: _96198835c223.toString(),
            method: _067052abce00.method,
            headers: _adca0d3fbeae,
            body: _0ecf77c6d366 || void 0
          }
        }, _0ecf77c6d366 ? [ _0ecf77c6d366 ] : [])).fetch, _74036a4f6244 = new Response(_2235e599f32f.includes(_fefbf9f1e5e0.status) ? void 0 : _fefbf9f1e5e0.body, {
          headers: new Headers(_fefbf9f1e5e0.headers),
          status: _fefbf9f1e5e0.status,
          statusText: _fefbf9f1e5e0.statusText
        });
        _74036a4f6244.rawHeaders = _fefbf9f1e5e0.headers, _74036a4f6244.rawResponse = _fefbf9f1e5e0, 
        _74036a4f6244.finalURL = _96198835c223.toString();
        const _38405b63f397 = _ebd23ea0c93a?.redirect || _067052abce00.redirect;
        if (!_fd56551937d9.includes(_74036a4f6244.status)) return _74036a4f6244;
        switch (_38405b63f397) {
         case "follow":
          {
            const _fefbf9f1e5e0 = _74036a4f6244.headers.get("location");
            if (20 > _31b80ab82b1c && null !== _fefbf9f1e5e0) {
              _96198835c223 = new URL(_fefbf9f1e5e0, _96198835c223);
              continue;
            }
            throw new TypeError("Failed to fetch");
          }

         case "error":
          throw new TypeError("Failed to fetch");

         case "manual":
          return _74036a4f6244;
        }
      }
    }
  }
  console.debug("bare-mux: running v2.1.9 (build dc9dc6e)"), _31b80ab82b1c.BareClient = m, 
  _31b80ab82b1c.BareMuxConnection = class {
    worker;
    constructor(_31b80ab82b1c) {
      this.worker = new p(_31b80ab82b1c);
    }
    async getTransport() {
      return (await this.worker.sendMessage({
        type: "get"
      })).name;
    }
    async setTransport(_31b80ab82b1c, _fefbf9f1e5e0, _ebd23ea0c93a) {
      await this.setManualTransport(`\n\t\t\tconst { default: BareTransport } = await import("${_31b80ab82b1c}");\n\t\t\treturn [BareTransport, "${_31b80ab82b1c}"];\n\t\t`, _fefbf9f1e5e0, _ebd23ea0c93a);
    }
    async setManualTransport(_31b80ab82b1c, _fefbf9f1e5e0, _ebd23ea0c93a) {
      if ("bare-mux-remote" === _31b80ab82b1c) throw new Error("Use setRemoteTransport.");
      await this.worker.sendMessage({
        type: "set",
        client: {
          function: _31b80ab82b1c,
          args: _fefbf9f1e5e0
        }
      }, _ebd23ea0c93a);
    }
    async setRemoteTransport(_31b80ab82b1c, _fefbf9f1e5e0) {
      const _ebd23ea0c93a = new MessageChannel;
      _ebd23ea0c93a.port1.onmessage = async _fefbf9f1e5e0 => {
        const _ebd23ea0c93a = _fefbf9f1e5e0.data.port, _067052abce00 = _fefbf9f1e5e0.data.message;
        if ("fetch" === _067052abce00.type) try {
          _31b80ab82b1c.ready || await _31b80ab82b1c.init(), await async function(_31b80ab82b1c, _fefbf9f1e5e0, _ebd23ea0c93a) {
            const _067052abce00 = await _ebd23ea0c93a.request(new URL(_31b80ab82b1c.fetch.remote), _31b80ab82b1c.fetch.method, _31b80ab82b1c.fetch.body, _31b80ab82b1c.fetch.headers, null);
            if (!d() && _067052abce00.body instanceof ReadableStream) {
              const _31b80ab82b1c = new Response(_067052abce00.body);
              _067052abce00.body = await _31b80ab82b1c.arrayBuffer();
            }
            _067052abce00.body instanceof ReadableStream || _067052abce00.body instanceof ArrayBuffer ? _adca0d3fbeae.call(_fefbf9f1e5e0, {
              type: "fetch",
              fetch: _067052abce00
            }, [ _067052abce00.body ]) : _adca0d3fbeae.call(_fefbf9f1e5e0, {
              type: "fetch",
              fetch: _067052abce00
            });
          }(_067052abce00, _ebd23ea0c93a, _31b80ab82b1c);
        } catch (_31b80ab82b1c) {
          w(_ebd23ea0c93a, _31b80ab82b1c, "fetch");
        } else if ("websocket" === _067052abce00.type) try {
          _31b80ab82b1c.ready || await _31b80ab82b1c.init(), await async function(_31b80ab82b1c, _fefbf9f1e5e0, _ebd23ea0c93a) {
            const [_067052abce00, _74036a4f6244] = _ebd23ea0c93a.connect(new URL(_31b80ab82b1c.websocket.url), _31b80ab82b1c.websocket.protocols, _31b80ab82b1c.websocket.requestHeaders, _fefbf9f1e5e0 => {
              _adca0d3fbeae.call(_31b80ab82b1c.websocket.channel, {
                type: "open",
                args: [ _fefbf9f1e5e0 ]
              });
            }, _fefbf9f1e5e0 => {
              _fefbf9f1e5e0 instanceof ArrayBuffer ? _adca0d3fbeae.call(_31b80ab82b1c.websocket.channel, {
                type: "message",
                args: [ _fefbf9f1e5e0 ]
              }, [ _fefbf9f1e5e0 ]) : _adca0d3fbeae.call(_31b80ab82b1c.websocket.channel, {
                type: "message",
                args: [ _fefbf9f1e5e0 ]
              });
            }, (_fefbf9f1e5e0, _ebd23ea0c93a) => {
              _adca0d3fbeae.call(_31b80ab82b1c.websocket.channel, {
                type: "close",
                args: [ _fefbf9f1e5e0, _ebd23ea0c93a ]
              });
            }, _fefbf9f1e5e0 => {
              _adca0d3fbeae.call(_31b80ab82b1c.websocket.channel, {
                type: "error",
                args: [ _fefbf9f1e5e0 ]
              });
            });
            _31b80ab82b1c.websocket.channel.onmessage = _31b80ab82b1c => {
              "data" === _31b80ab82b1c.data.type ? _067052abce00(_31b80ab82b1c.data.data) : "close" === _31b80ab82b1c.data.type && _74036a4f6244(_31b80ab82b1c.data.closeCode, _31b80ab82b1c.data.closeReason);
            }, _adca0d3fbeae.call(_fefbf9f1e5e0, {
              type: "websocket"
            });
          }(_067052abce00, _ebd23ea0c93a, _31b80ab82b1c);
        } catch (_31b80ab82b1c) {
          w(_ebd23ea0c93a, _31b80ab82b1c, "websocket");
        }
      }, await this.worker.sendMessage({
        type: "set",
        client: {
          function: "bare-mux-remote",
          args: [ _ebd23ea0c93a.port2, _fefbf9f1e5e0 ]
        }
      }, [ _ebd23ea0c93a.port2 ]);
    }
    getInnerPort() {
      return this.worker.port;
    }
  }, _31b80ab82b1c.BareWebSocket = u, _31b80ab82b1c.WebSocketFields = _0ecf77c6d366, 
  _31b80ab82b1c.WorkerConnection = p, _31b80ab82b1c.browserSupportsTransferringStreams = d, 
  _31b80ab82b1c.default = m, _31b80ab82b1c.maxRedirects = 20, _31b80ab82b1c.validProtocol = f, 
  Object.defineProperty(_31b80ab82b1c, "__esModule", {
    value: !0
  });
});
