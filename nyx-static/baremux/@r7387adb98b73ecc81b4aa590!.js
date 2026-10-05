!function(_b26ce6092cdc, _73dcc39c9508) {
  "object" == typeof exports && "undefined" != typeof module ? _73dcc39c9508(exports) : "function" == typeof define && define.amd ? define([ "exports" ], _73dcc39c9508) : _73dcc39c9508((_b26ce6092cdc = "undefined" != typeof globalThis ? globalThis : _b26ce6092cdc || self).BareMux = {});
}(this, function(_b26ce6092cdc) {
  "use strict";
  const _73dcc39c9508 = globalThis.fetch, _e69fef7a4b31 = globalThis.SharedWorker, _70faa57d4e61 = globalThis.localStorage, _ac2529671da4 = globalThis.navigator.serviceWorker, _b0baa6ba55fa = MessagePort.prototype.postMessage, _6a84ef595fed = {
    prototype: {
      send: WebSocket.prototype.send
    },
    CLOSED: WebSocket.CLOSED,
    CLOSING: WebSocket.CLOSING,
    CONNECTING: WebSocket.CONNECTING,
    OPEN: WebSocket.OPEN
  };
  async function c() {
    const _b26ce6092cdc = (await self.clients.matchAll({
      type: "window",
      includeUncontrolled: !0
    })).map(async _b26ce6092cdc => {
      const _73dcc39c9508 = await function(_b26ce6092cdc) {
        let _73dcc39c9508 = new MessageChannel;
        return new Promise(_e69fef7a4b31 => {
          _b26ce6092cdc.postMessage({
            type: "getPort",
            port: _73dcc39c9508.port2
          }, [ _73dcc39c9508.port2 ]), _73dcc39c9508.port1.onmessage = _b26ce6092cdc => {
            _e69fef7a4b31(_b26ce6092cdc.data);
          };
        });
      }(_b26ce6092cdc);
      return await i(_73dcc39c9508), _73dcc39c9508;
    }), _73dcc39c9508 = Promise.race([ Promise.any(_b26ce6092cdc), new Promise((_b26ce6092cdc, _73dcc39c9508) => setTimeout(_73dcc39c9508, 1e3, new TypeError("timeout"))) ]);
    try {
      return await _73dcc39c9508;
    } catch (_b26ce6092cdc) {
      if (_b26ce6092cdc instanceof AggregateError) throw console.error("bare-mux: failed to get a bare-mux SharedWorker MessagePort as all clients returned an invalid MessagePort."), 
      new Error("All clients returned an invalid MessagePort.", {
        cause: _b26ce6092cdc
      });
      return console.warn("bare-mux: failed to get a bare-mux SharedWorker MessagePort within 1s, retrying"), 
      await c();
    }
  }
  function i(_b26ce6092cdc) {
    const _73dcc39c9508 = new MessageChannel, _e69fef7a4b31 = new Promise((_b26ce6092cdc, _e69fef7a4b31) => {
      _73dcc39c9508.port1.onmessage = _73dcc39c9508 => {
        "pong" === _73dcc39c9508.data.type && _b26ce6092cdc();
      }, setTimeout(_e69fef7a4b31, 1500);
    });
    return _b0baa6ba55fa.call(_b26ce6092cdc, {
      message: {
        type: "ping"
      },
      port: _73dcc39c9508.port2
    }, [ _73dcc39c9508.port2 ]), _e69fef7a4b31;
  }
  function l(_b26ce6092cdc, _73dcc39c9508) {
    const _70faa57d4e61 = new _e69fef7a4b31(_b26ce6092cdc, "ridgewood-stem-worker");
    return _73dcc39c9508 && _ac2529671da4.addEventListener("message", _73dcc39c9508 => {
      if ("getPort" === _73dcc39c9508.data.type && _73dcc39c9508.data.port) {
        console.debug("bare-mux: recieved request for port from sw");
        const _70faa57d4e61 = new _e69fef7a4b31(_b26ce6092cdc, "ridgewood-stem-worker");
        _b0baa6ba55fa.call(_73dcc39c9508.data.port, _70faa57d4e61.port, [ _70faa57d4e61.port ]);
      }
    }), _70faa57d4e61.port;
  }
  let _e7ce6a827343 = null;
  function d() {
    if (null === _e7ce6a827343) {
      const _b26ce6092cdc = new MessageChannel, _73dcc39c9508 = new ReadableStream;
      let _e69fef7a4b31;
      try {
        _b0baa6ba55fa.call(_b26ce6092cdc.port1, _73dcc39c9508, [ _73dcc39c9508 ]), _e69fef7a4b31 = !0;
      } catch (_b26ce6092cdc) {
        _e69fef7a4b31 = !1;
      }
      return _e7ce6a827343 = _e69fef7a4b31, _e69fef7a4b31;
    }
    return _e7ce6a827343;
  }
  class p {
    channel;
    port;
    workerPath;
    constructor(_b26ce6092cdc) {
      this.channel = new BroadcastChannel("bare-mux"), _b26ce6092cdc instanceof MessagePort || _b26ce6092cdc instanceof Promise ? this.port = _b26ce6092cdc : this.createChannel(_b26ce6092cdc, !0);
    }
    createChannel(_b26ce6092cdc, _73dcc39c9508) {
      if (self.clients) this.port = c(), this.channel.onmessage = _b26ce6092cdc => {
        "refreshPort" === _b26ce6092cdc.data.type && (this.port = c());
      }; else if (_b26ce6092cdc && SharedWorker) {
        if (!_b26ce6092cdc.startsWith("/") && !_b26ce6092cdc.includes(":")) throw new Error("Invalid URL. Must be absolute or start at the root.");
        this.port = l(_b26ce6092cdc, _73dcc39c9508), console.debug("bare-mux: setting localStorage bare-mux-path to", _b26ce6092cdc), 
        _70faa57d4e61["bare-mux-path"] = _b26ce6092cdc;
      } else {
        if (!SharedWorker) throw new Error("Unable to get a channel to the SharedWorker.");
        {
          const _b26ce6092cdc = _70faa57d4e61["bare-mux-path"];
          if (console.debug("bare-mux: got localStorage bare-mux-path:", _b26ce6092cdc), !_b26ce6092cdc) throw new Error("Unable to get bare-mux workerPath from localStorage.");
          this.port = l(_b26ce6092cdc, _73dcc39c9508);
        }
      }
    }
    async sendMessage(_b26ce6092cdc, _73dcc39c9508) {
      this.port instanceof Promise && (this.port = await this.port);
      try {
        await i(this.port);
      } catch {
        return console.warn("bare-mux: Failed to get a ping response from the worker within 1.5s. Assuming port is dead."), 
        this.createChannel(), await this.sendMessage(_b26ce6092cdc, _73dcc39c9508);
      }
      const _e69fef7a4b31 = new MessageChannel, _70faa57d4e61 = [ _e69fef7a4b31.port2, ..._73dcc39c9508 || [] ], _ac2529671da4 = new Promise((_b26ce6092cdc, _73dcc39c9508) => {
        _e69fef7a4b31.port1.onmessage = _e69fef7a4b31 => {
          const _70faa57d4e61 = _e69fef7a4b31.data;
          "error" === _70faa57d4e61.type ? _73dcc39c9508(_70faa57d4e61.error) : _b26ce6092cdc(_70faa57d4e61);
        };
      });
      return _b0baa6ba55fa.call(this.port, {
        message: _b26ce6092cdc,
        port: _e69fef7a4b31.port2
      }, _70faa57d4e61), await _ac2529671da4;
    }
  }
  class u extends EventTarget {
    protocols;
    url;
    readyState=_6a84ef595fed.CONNECTING;
    channel;
    constructor(_b26ce6092cdc, _73dcc39c9508 = [], _e69fef7a4b31, _70faa57d4e61) {
      super(), this.protocols = _73dcc39c9508, this.url = _b26ce6092cdc.toString(), this.protocols = _73dcc39c9508;
      const s = _b26ce6092cdc => {
        this.protocols = _b26ce6092cdc, this.readyState = _6a84ef595fed.OPEN;
        const _73dcc39c9508 = new Event("open");
        this.dispatchEvent(_73dcc39c9508);
      }, o = async _b26ce6092cdc => {
        const _73dcc39c9508 = new MessageEvent("message", {
          data: _b26ce6092cdc
        });
        this.dispatchEvent(_73dcc39c9508);
      }, c = (_b26ce6092cdc, _73dcc39c9508) => {
        this.readyState = _6a84ef595fed.CLOSED;
        const _e69fef7a4b31 = new CloseEvent("close", {
          code: _b26ce6092cdc,
          reason: _73dcc39c9508
        });
        this.dispatchEvent(_e69fef7a4b31);
      }, i = () => {
        this.readyState = _6a84ef595fed.CLOSED;
        const _b26ce6092cdc = new Event("error");
        this.dispatchEvent(_b26ce6092cdc);
      };
      this.channel = new MessageChannel, this.channel.port1.onmessage = _b26ce6092cdc => {
        "open" === _b26ce6092cdc.data.type ? s(_b26ce6092cdc.data.args[0]) : "message" === _b26ce6092cdc.data.type ? o(_b26ce6092cdc.data.args[0]) : "close" === _b26ce6092cdc.data.type ? c(_b26ce6092cdc.data.args[0], _b26ce6092cdc.data.args[1]) : "error" === _b26ce6092cdc.data.type && i();
      }, _e69fef7a4b31.sendMessage({
        type: "websocket",
        websocket: {
          url: _b26ce6092cdc.toString(),
          protocols: _73dcc39c9508,
          requestHeaders: _70faa57d4e61,
          channel: this.channel.port2
        }
      }, [ this.channel.port2 ]);
    }
    send(..._b26ce6092cdc) {
      if (this.readyState === _6a84ef595fed.CONNECTING) throw new DOMException("Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.");
      let _73dcc39c9508 = _b26ce6092cdc[0];
      _73dcc39c9508.buffer && (_73dcc39c9508 = _73dcc39c9508.buffer.slice(_73dcc39c9508.byteOffset, _73dcc39c9508.byteOffset + _73dcc39c9508.byteLength)), 
      _b0baa6ba55fa.call(this.channel.port1, {
        type: "data",
        data: _73dcc39c9508
      }, _73dcc39c9508 instanceof ArrayBuffer ? [ _73dcc39c9508 ] : []);
    }
    close(_b26ce6092cdc, _73dcc39c9508) {
      _b0baa6ba55fa.call(this.channel.port1, {
        type: "close",
        closeCode: _b26ce6092cdc,
        closeReason: _73dcc39c9508
      });
    }
  }
  function w(_b26ce6092cdc, _73dcc39c9508, _e69fef7a4b31) {
    console.error(`error while processing '${_e69fef7a4b31}': `, _73dcc39c9508), _b26ce6092cdc.postMessage({
      type: "error",
      error: _73dcc39c9508
    });
  }
  function f(_b26ce6092cdc) {
    for (let _73dcc39c9508 = 0; _73dcc39c9508 < _b26ce6092cdc.length; _73dcc39c9508++) {
      const _e69fef7a4b31 = _b26ce6092cdc[_73dcc39c9508];
      if (!"!#$%&'*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz|~".includes(_e69fef7a4b31)) return !1;
    }
    return !0;
  }
  const _f0f4ecb4625d = [ "ws:", "wss:" ], _9e62b2f6cca9 = [ 101, 204, 205, 304 ], _5a200d93bbf9 = [ 301, 302, 303, 307, 308 ];
  class m {
    worker;
    constructor(_b26ce6092cdc) {
      this.worker = new p(_b26ce6092cdc);
    }
    createWebSocket(_b26ce6092cdc, _73dcc39c9508 = [], _e69fef7a4b31, _70faa57d4e61) {
      try {
        _b26ce6092cdc = new URL(_b26ce6092cdc);
      } catch (_73dcc39c9508) {
        throw new DOMException(`Faiiled to construct 'WebSocket': The URL '${_b26ce6092cdc}' is invalid.`);
      }
      if (!_f0f4ecb4625d.includes(_b26ce6092cdc.protocol)) throw new DOMException(`Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '${_b26ce6092cdc.protocol}' is not allowed.`);
      Array.isArray(_73dcc39c9508) || (_73dcc39c9508 = [ _73dcc39c9508 ]), _73dcc39c9508 = _73dcc39c9508.map(String);
      for (const _b26ce6092cdc of _73dcc39c9508) if (!f(_b26ce6092cdc)) throw new DOMException(`Failed to construct 'WebSocket': The subprotocol '${_b26ce6092cdc}' is invalid.`);
      _70faa57d4e61 = _70faa57d4e61 || {};
      return new u(_b26ce6092cdc, _73dcc39c9508, this.worker, _70faa57d4e61);
    }
    async fetch(_b26ce6092cdc, _e69fef7a4b31) {
      const _70faa57d4e61 = new Request(_b26ce6092cdc, _e69fef7a4b31), _ac2529671da4 = _e69fef7a4b31?.headers || _70faa57d4e61.headers, _b0baa6ba55fa = _ac2529671da4 instanceof Headers ? Object.fromEntries(_ac2529671da4) : _ac2529671da4, _6a84ef595fed = _70faa57d4e61.body;
      let _e7ce6a827343 = new URL(_70faa57d4e61.url);
      if (_e7ce6a827343.protocol.startsWith("blob:")) {
        const _b26ce6092cdc = await _73dcc39c9508(_e7ce6a827343), _e69fef7a4b31 = new Response(_b26ce6092cdc.body, _b26ce6092cdc);
        return _e69fef7a4b31.rawHeaders = Object.fromEntries(_b26ce6092cdc.headers), _e69fef7a4b31.rawResponse = {
          body: _b26ce6092cdc.body,
          headers: Object.fromEntries(_b26ce6092cdc.headers),
          status: _b26ce6092cdc.status,
          statusText: _b26ce6092cdc.statusText
        }, _e69fef7a4b31.finalURL = _e7ce6a827343.toString(), _e69fef7a4b31;
      }
      for (let _b26ce6092cdc = 0; ;_b26ce6092cdc++) {
        let _73dcc39c9508 = (await this.worker.sendMessage({
          type: "fetch",
          fetch: {
            remote: _e7ce6a827343.toString(),
            method: _70faa57d4e61.method,
            headers: _b0baa6ba55fa,
            body: _6a84ef595fed || void 0
          }
        }, _6a84ef595fed ? [ _6a84ef595fed ] : [])).fetch, _ac2529671da4 = new Response(_9e62b2f6cca9.includes(_73dcc39c9508.status) ? void 0 : _73dcc39c9508.body, {
          headers: new Headers(_73dcc39c9508.headers),
          status: _73dcc39c9508.status,
          statusText: _73dcc39c9508.statusText
        });
        _ac2529671da4.rawHeaders = _73dcc39c9508.headers, _ac2529671da4.rawResponse = _73dcc39c9508, 
        _ac2529671da4.finalURL = _e7ce6a827343.toString();
        const _f0f4ecb4625d = _e69fef7a4b31?.redirect || _70faa57d4e61.redirect;
        if (!_5a200d93bbf9.includes(_ac2529671da4.status)) return _ac2529671da4;
        switch (_f0f4ecb4625d) {
         case "follow":
          {
            const _73dcc39c9508 = _ac2529671da4.headers.get("location");
            if (20 > _b26ce6092cdc && null !== _73dcc39c9508) {
              _e7ce6a827343 = new URL(_73dcc39c9508, _e7ce6a827343);
              continue;
            }
            throw new TypeError("Failed to fetch");
          }

         case "error":
          throw new TypeError("Failed to fetch");

         case "manual":
          return _ac2529671da4;
        }
      }
    }
  }
  console.debug("bare-mux: running v2.1.9 (build dc9dc6e)"), _b26ce6092cdc.BareClient = m, 
  _b26ce6092cdc.BareMuxConnection = class {
    worker;
    constructor(_b26ce6092cdc) {
      this.worker = new p(_b26ce6092cdc);
    }
    async getTransport() {
      return (await this.worker.sendMessage({
        type: "get"
      })).name;
    }
    async setTransport(_b26ce6092cdc, _73dcc39c9508, _e69fef7a4b31) {
      await this.setManualTransport(`\n\t\t\tconst { default: BareTransport } = await import("${_b26ce6092cdc}");\n\t\t\treturn [BareTransport, "${_b26ce6092cdc}"];\n\t\t`, _73dcc39c9508, _e69fef7a4b31);
    }
    async setManualTransport(_b26ce6092cdc, _73dcc39c9508, _e69fef7a4b31) {
      if ("bare-mux-remote" === _b26ce6092cdc) throw new Error("Use setRemoteTransport.");
      await this.worker.sendMessage({
        type: "set",
        client: {
          function: _b26ce6092cdc,
          args: _73dcc39c9508
        }
      }, _e69fef7a4b31);
    }
    async setRemoteTransport(_b26ce6092cdc, _73dcc39c9508) {
      const _e69fef7a4b31 = new MessageChannel;
      _e69fef7a4b31.port1.onmessage = async _73dcc39c9508 => {
        const _e69fef7a4b31 = _73dcc39c9508.data.port, _70faa57d4e61 = _73dcc39c9508.data.message;
        if ("fetch" === _70faa57d4e61.type) try {
          _b26ce6092cdc.ready || await _b26ce6092cdc.init(), await async function(_b26ce6092cdc, _73dcc39c9508, _e69fef7a4b31) {
            const _70faa57d4e61 = await _e69fef7a4b31.request(new URL(_b26ce6092cdc.fetch.remote), _b26ce6092cdc.fetch.method, _b26ce6092cdc.fetch.body, _b26ce6092cdc.fetch.headers, null);
            if (!d() && _70faa57d4e61.body instanceof ReadableStream) {
              const _b26ce6092cdc = new Response(_70faa57d4e61.body);
              _70faa57d4e61.body = await _b26ce6092cdc.arrayBuffer();
            }
            _70faa57d4e61.body instanceof ReadableStream || _70faa57d4e61.body instanceof ArrayBuffer ? _b0baa6ba55fa.call(_73dcc39c9508, {
              type: "fetch",
              fetch: _70faa57d4e61
            }, [ _70faa57d4e61.body ]) : _b0baa6ba55fa.call(_73dcc39c9508, {
              type: "fetch",
              fetch: _70faa57d4e61
            });
          }(_70faa57d4e61, _e69fef7a4b31, _b26ce6092cdc);
        } catch (_b26ce6092cdc) {
          w(_e69fef7a4b31, _b26ce6092cdc, "fetch");
        } else if ("websocket" === _70faa57d4e61.type) try {
          _b26ce6092cdc.ready || await _b26ce6092cdc.init(), await async function(_b26ce6092cdc, _73dcc39c9508, _e69fef7a4b31) {
            const [_70faa57d4e61, _ac2529671da4] = _e69fef7a4b31.connect(new URL(_b26ce6092cdc.websocket.url), _b26ce6092cdc.websocket.protocols, _b26ce6092cdc.websocket.requestHeaders, _73dcc39c9508 => {
              _b0baa6ba55fa.call(_b26ce6092cdc.websocket.channel, {
                type: "open",
                args: [ _73dcc39c9508 ]
              });
            }, _73dcc39c9508 => {
              _73dcc39c9508 instanceof ArrayBuffer ? _b0baa6ba55fa.call(_b26ce6092cdc.websocket.channel, {
                type: "message",
                args: [ _73dcc39c9508 ]
              }, [ _73dcc39c9508 ]) : _b0baa6ba55fa.call(_b26ce6092cdc.websocket.channel, {
                type: "message",
                args: [ _73dcc39c9508 ]
              });
            }, (_73dcc39c9508, _e69fef7a4b31) => {
              _b0baa6ba55fa.call(_b26ce6092cdc.websocket.channel, {
                type: "close",
                args: [ _73dcc39c9508, _e69fef7a4b31 ]
              });
            }, _73dcc39c9508 => {
              _b0baa6ba55fa.call(_b26ce6092cdc.websocket.channel, {
                type: "error",
                args: [ _73dcc39c9508 ]
              });
            });
            _b26ce6092cdc.websocket.channel.onmessage = _b26ce6092cdc => {
              "data" === _b26ce6092cdc.data.type ? _70faa57d4e61(_b26ce6092cdc.data.data) : "close" === _b26ce6092cdc.data.type && _ac2529671da4(_b26ce6092cdc.data.closeCode, _b26ce6092cdc.data.closeReason);
            }, _b0baa6ba55fa.call(_73dcc39c9508, {
              type: "websocket"
            });
          }(_70faa57d4e61, _e69fef7a4b31, _b26ce6092cdc);
        } catch (_b26ce6092cdc) {
          w(_e69fef7a4b31, _b26ce6092cdc, "websocket");
        }
      }, await this.worker.sendMessage({
        type: "set",
        client: {
          function: "bare-mux-remote",
          args: [ _e69fef7a4b31.port2, _73dcc39c9508 ]
        }
      }, [ _e69fef7a4b31.port2 ]);
    }
    getInnerPort() {
      return this.worker.port;
    }
  }, _b26ce6092cdc.BareWebSocket = u, _b26ce6092cdc.WebSocketFields = _6a84ef595fed, 
  _b26ce6092cdc.WorkerConnection = p, _b26ce6092cdc.browserSupportsTransferringStreams = d, 
  _b26ce6092cdc.default = m, _b26ce6092cdc.maxRedirects = 20, _b26ce6092cdc.validProtocol = f, 
  Object.defineProperty(_b26ce6092cdc, "__esModule", {
    value: !0
  });
});
