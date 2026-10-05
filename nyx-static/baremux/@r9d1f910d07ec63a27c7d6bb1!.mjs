const _132a417228c8 = 20, _70ac8de0cd80 = globalThis.fetch, _a4066925cfdd = globalThis.SharedWorker, _1adb4059822f = globalThis.localStorage, _db0e0c924937 = globalThis.navigator.serviceWorker, _a57142cf9ddc = MessagePort.prototype.postMessage, _fe385732ae43 = {
  prototype: {
    send: WebSocket.prototype.send
  },
  CLOSED: WebSocket.CLOSED,
  CLOSING: WebSocket.CLOSING,
  CONNECTING: WebSocket.CONNECTING,
  OPEN: WebSocket.OPEN
};

async function c() {
  const _132a417228c8 = (await self.clients.matchAll({
    type: "window",
    includeUncontrolled: !0
  })).filter(_132a417228c8 => {
    try {
      const _70ac8de0cd80 = new URL(_132a417228c8.url);
      return _70ac8de0cd80.origin === self.location.origin && !_70ac8de0cd80.pathname.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/") && !_70ac8de0cd80.pathname.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/study/");
    } catch {
      return !1;
    }
  }).map(async _132a417228c8 => {
    const _70ac8de0cd80 = await function(_132a417228c8) {
      let _70ac8de0cd80 = new MessageChannel;
      return new Promise(_a4066925cfdd => {
        _132a417228c8.postMessage({
          type: "getPort",
          port: _70ac8de0cd80.port2
        }, [ _70ac8de0cd80.port2 ]), _70ac8de0cd80.port1.onmessage = _132a417228c8 => {
          _a4066925cfdd(_132a417228c8.data);
        };
      });
    }(_132a417228c8);
    return await i(_70ac8de0cd80), _70ac8de0cd80;
  }), _70ac8de0cd80 = Promise.race([ Promise.any(_132a417228c8), new Promise((_132a417228c8, _70ac8de0cd80) => setTimeout(_70ac8de0cd80, 5e3, new TypeError("timeout"))) ]);
  try {
    return await _70ac8de0cd80;
  } catch (_132a417228c8) {
    if (_132a417228c8 instanceof AggregateError) throw console.error("bare-mux: failed to get a bare-mux SharedWorker MessagePort as all clients returned an invalid MessagePort."), 
    new Error("All clients returned an invalid MessagePort.", {
      cause: _132a417228c8
    });
    return console.warn("bare-mux: failed to get a bare-mux SharedWorker MessagePort within 5s, retrying"), 
    await c();
  }
}

function i(_132a417228c8) {
  const _70ac8de0cd80 = new MessageChannel, _a4066925cfdd = new Promise((_132a417228c8, _a4066925cfdd) => {
    _70ac8de0cd80.port1.onmessage = _70ac8de0cd80 => {
      "pong" === _70ac8de0cd80.data.type && _132a417228c8();
    }, setTimeout(_a4066925cfdd, 5e3);
  });
  return _a57142cf9ddc.call(_132a417228c8, {
    message: {
      type: "ping"
    },
    port: _70ac8de0cd80.port2
  }, [ _70ac8de0cd80.port2 ]), _a4066925cfdd;
}

function l(_132a417228c8, _70ac8de0cd80) {
  const _1adb4059822f = new _a4066925cfdd(_132a417228c8, "ridgewood-stem-worker");
  return _70ac8de0cd80 && _db0e0c924937.addEventListener("message", _70ac8de0cd80 => {
    if ("getPort" === _70ac8de0cd80.data.type && _70ac8de0cd80.data.port) {
      console.debug("bare-mux: recieved request for port from sw");
      const _1adb4059822f = new _a4066925cfdd(_132a417228c8, "ridgewood-stem-worker");
      _a57142cf9ddc.call(_70ac8de0cd80.data.port, _1adb4059822f.port, [ _1adb4059822f.port ]);
    }
  }), _1adb4059822f.port;
}

let _c35ecb24a9b3 = null;

function d() {
  if (null === _c35ecb24a9b3) {
    const _132a417228c8 = new MessageChannel, _70ac8de0cd80 = new ReadableStream;
    let _a4066925cfdd;
    try {
      _a57142cf9ddc.call(_132a417228c8.port1, _70ac8de0cd80, [ _70ac8de0cd80 ]), _a4066925cfdd = !0;
    } catch (_132a417228c8) {
      _a4066925cfdd = !1;
    }
    return _c35ecb24a9b3 = _a4066925cfdd, _a4066925cfdd;
  }
  return _c35ecb24a9b3;
}

class p {
  channel;
  port;
  workerPath;
  constructor(_132a417228c8) {
    this.channel = new BroadcastChannel("bare-mux"), _132a417228c8 instanceof MessagePort || _132a417228c8 instanceof Promise ? this.port = _132a417228c8 : this.createChannel(_132a417228c8, !0);
  }
  createChannel(_132a417228c8, _70ac8de0cd80) {
    if (self.clients) this.port = c(), this.channel.onmessage = _132a417228c8 => {
      "refreshPort" === _132a417228c8.data.type && (this.port = c());
    }; else if (_132a417228c8 && SharedWorker) {
      if (!_132a417228c8.startsWith("/") && !_132a417228c8.includes(":")) throw new Error("Invalid URL. Must be absolute or start at the root.");
      this.port = l(_132a417228c8, _70ac8de0cd80), console.debug("bare-mux: setting localStorage bare-mux-path to", _132a417228c8), 
      _1adb4059822f["bare-mux-path"] = _132a417228c8;
    } else {
      if (!SharedWorker) throw new Error("Unable to get a channel to the SharedWorker.");
      {
        const _132a417228c8 = _1adb4059822f["bare-mux-path"];
        if (console.debug("bare-mux: got localStorage bare-mux-path:", _132a417228c8), !_132a417228c8) throw new Error("Unable to get bare-mux workerPath from localStorage.");
        this.port = l(_132a417228c8, _70ac8de0cd80);
      }
    }
  }
  async sendMessage(_132a417228c8, _70ac8de0cd80) {
    this.port instanceof Promise && (this.port = await this.port);
    try {
      await i(this.port);
    } catch {
      return console.warn("bare-mux: Failed to get a ping response from the worker within 5s. Assuming port is dead."), 
      this.createChannel(), await this.sendMessage(_132a417228c8, _70ac8de0cd80);
    }
    const _a4066925cfdd = new MessageChannel, _1adb4059822f = [ _a4066925cfdd.port2, ..._70ac8de0cd80 || [] ], _db0e0c924937 = new Promise((_132a417228c8, _70ac8de0cd80) => {
      _a4066925cfdd.port1.onmessage = _a4066925cfdd => {
        const _1adb4059822f = _a4066925cfdd.data;
        "error" === _1adb4059822f.type ? _70ac8de0cd80(_1adb4059822f.error) : _132a417228c8(_1adb4059822f);
      };
    });
    return _a57142cf9ddc.call(this.port, {
      message: _132a417228c8,
      port: _a4066925cfdd.port2
    }, _1adb4059822f), await _db0e0c924937;
  }
}

class w extends EventTarget {
  protocols;
  url;
  readyState=_fe385732ae43.CONNECTING;
  channel;
  constructor(_132a417228c8, _70ac8de0cd80 = [], _a4066925cfdd, _1adb4059822f) {
    super(), this.protocols = _70ac8de0cd80, this.url = _132a417228c8.toString(), this.protocols = _70ac8de0cd80;
    const s = _132a417228c8 => {
      this.protocols = _132a417228c8, this.readyState = _fe385732ae43.OPEN;
      const _70ac8de0cd80 = new Event("open");
      this.dispatchEvent(_70ac8de0cd80);
    }, o = async _132a417228c8 => {
      const _70ac8de0cd80 = new MessageEvent("message", {
        data: _132a417228c8
      });
      this.dispatchEvent(_70ac8de0cd80);
    }, c = (_132a417228c8, _70ac8de0cd80) => {
      this.readyState = _fe385732ae43.CLOSED;
      const _a4066925cfdd = new CloseEvent("close", {
        code: _132a417228c8,
        reason: _70ac8de0cd80
      });
      this.dispatchEvent(_a4066925cfdd);
    }, i = () => {
      this.readyState = _fe385732ae43.CLOSED;
      const _132a417228c8 = new Event("error");
      this.dispatchEvent(_132a417228c8);
    };
    this.channel = new MessageChannel, this.channel.port1.onmessage = _132a417228c8 => {
      "open" === _132a417228c8.data.type ? s(_132a417228c8.data.args[0]) : "message" === _132a417228c8.data.type ? o(_132a417228c8.data.args[0]) : "close" === _132a417228c8.data.type ? c(_132a417228c8.data.args[0], _132a417228c8.data.args[1]) : "error" === _132a417228c8.data.type && i();
    }, _a4066925cfdd.sendMessage({
      type: "websocket",
      websocket: {
        url: _132a417228c8.toString(),
        protocols: _70ac8de0cd80,
        requestHeaders: _1adb4059822f,
        channel: this.channel.port2
      }
    }, [ this.channel.port2 ]);
  }
  send(..._132a417228c8) {
    if (this.readyState === _fe385732ae43.CONNECTING) throw new DOMException("Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.");
    let _70ac8de0cd80 = _132a417228c8[0];
    _70ac8de0cd80.buffer && (_70ac8de0cd80 = _70ac8de0cd80.buffer.slice(_70ac8de0cd80.byteOffset, _70ac8de0cd80.byteOffset + _70ac8de0cd80.byteLength)), 
    _a57142cf9ddc.call(this.channel.port1, {
      type: "data",
      data: _70ac8de0cd80
    }, _70ac8de0cd80 instanceof ArrayBuffer ? [ _70ac8de0cd80 ] : []);
  }
  close(_132a417228c8, _70ac8de0cd80) {
    _a57142cf9ddc.call(this.channel.port1, {
      type: "close",
      closeCode: _132a417228c8,
      closeReason: _70ac8de0cd80
    });
  }
}

function u(_132a417228c8, _70ac8de0cd80, _a4066925cfdd) {
  console.error(`error while processing '${_a4066925cfdd}': `, _70ac8de0cd80), _132a417228c8.postMessage({
    type: "error",
    error: _70ac8de0cd80
  });
}

function f(_132a417228c8) {
  for (let _70ac8de0cd80 = 0; _70ac8de0cd80 < _132a417228c8.length; _70ac8de0cd80++) {
    const _a4066925cfdd = _132a417228c8[_70ac8de0cd80];
    if (!"!#$%&'*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz|~".includes(_a4066925cfdd)) return !1;
  }
  return !0;
}

const _831a2f1b8196 = [ "ws:", "wss:" ], _80d96c61f334 = [ 101, 204, 205, 304 ], _2d05de53e03c = [ 301, 302, 303, 307, 308 ];

class m {
  worker;
  constructor(_132a417228c8) {
    this.worker = new p(_132a417228c8);
  }
  async getTransport() {
    return (await this.worker.sendMessage({
      type: "get"
    })).name;
  }
  async setTransport(_132a417228c8, _70ac8de0cd80, _a4066925cfdd) {
    await this.setManualTransport(`\n\t\t\tconst { default: BareTransport } = await import("${_132a417228c8}");\n\t\t\treturn [BareTransport, "${_132a417228c8}"];\n\t\t`, _70ac8de0cd80, _a4066925cfdd);
  }
  async setManualTransport(_132a417228c8, _70ac8de0cd80, _a4066925cfdd) {
    if ("bare-mux-remote" === _132a417228c8) throw new Error("Use setRemoteTransport.");
    await this.worker.sendMessage({
      type: "set",
      client: {
        function: _132a417228c8,
        args: _70ac8de0cd80
      }
    }, _a4066925cfdd);
  }
  async setRemoteTransport(_132a417228c8, _70ac8de0cd80) {
    const _a4066925cfdd = new MessageChannel;
    _a4066925cfdd.port1.onmessage = async _70ac8de0cd80 => {
      const _a4066925cfdd = _70ac8de0cd80.data.port, _1adb4059822f = _70ac8de0cd80.data.message;
      if ("fetch" === _1adb4059822f.type) try {
        _132a417228c8.ready || await _132a417228c8.init(), await async function(_132a417228c8, _70ac8de0cd80, _a4066925cfdd) {
          const _1adb4059822f = await _a4066925cfdd.request(new URL(_132a417228c8.fetch.remote), _132a417228c8.fetch.method, _132a417228c8.fetch.body, _132a417228c8.fetch.headers, null);
          if (!d() && _1adb4059822f.body instanceof ReadableStream) {
            const _132a417228c8 = new Response(_1adb4059822f.body);
            _1adb4059822f.body = await _132a417228c8.arrayBuffer();
          }
          _1adb4059822f.body instanceof ReadableStream || _1adb4059822f.body instanceof ArrayBuffer ? _a57142cf9ddc.call(_70ac8de0cd80, {
            type: "fetch",
            fetch: _1adb4059822f
          }, [ _1adb4059822f.body ]) : _a57142cf9ddc.call(_70ac8de0cd80, {
            type: "fetch",
            fetch: _1adb4059822f
          });
        }(_1adb4059822f, _a4066925cfdd, _132a417228c8);
      } catch (_132a417228c8) {
        u(_a4066925cfdd, _132a417228c8, "fetch");
      } else if ("websocket" === _1adb4059822f.type) try {
        _132a417228c8.ready || await _132a417228c8.init(), await async function(_132a417228c8, _70ac8de0cd80, _a4066925cfdd) {
          const [_1adb4059822f, _db0e0c924937] = _a4066925cfdd.connect(new URL(_132a417228c8.websocket.url), _132a417228c8.websocket.protocols, _132a417228c8.websocket.requestHeaders, _70ac8de0cd80 => {
            _a57142cf9ddc.call(_132a417228c8.websocket.channel, {
              type: "open",
              args: [ _70ac8de0cd80 ]
            });
          }, _70ac8de0cd80 => {
            _70ac8de0cd80 instanceof ArrayBuffer ? _a57142cf9ddc.call(_132a417228c8.websocket.channel, {
              type: "message",
              args: [ _70ac8de0cd80 ]
            }, [ _70ac8de0cd80 ]) : _a57142cf9ddc.call(_132a417228c8.websocket.channel, {
              type: "message",
              args: [ _70ac8de0cd80 ]
            });
          }, (_70ac8de0cd80, _a4066925cfdd) => {
            _a57142cf9ddc.call(_132a417228c8.websocket.channel, {
              type: "close",
              args: [ _70ac8de0cd80, _a4066925cfdd ]
            });
          }, _70ac8de0cd80 => {
            _a57142cf9ddc.call(_132a417228c8.websocket.channel, {
              type: "error",
              args: [ _70ac8de0cd80 ]
            });
          });
          _132a417228c8.websocket.channel.onmessage = _132a417228c8 => {
            "data" === _132a417228c8.data.type ? _1adb4059822f(_132a417228c8.data.data) : "close" === _132a417228c8.data.type && _db0e0c924937(_132a417228c8.data.closeCode, _132a417228c8.data.closeReason);
          }, _a57142cf9ddc.call(_70ac8de0cd80, {
            type: "websocket"
          });
        }(_1adb4059822f, _a4066925cfdd, _132a417228c8);
      } catch (_132a417228c8) {
        u(_a4066925cfdd, _132a417228c8, "websocket");
      }
    }, await this.worker.sendMessage({
      type: "set",
      client: {
        function: "bare-mux-remote",
        args: [ _a4066925cfdd.port2, _70ac8de0cd80 ]
      }
    }, [ _a4066925cfdd.port2 ]);
  }
  getInnerPort() {
    return this.worker.port;
  }
}

class k {
  worker;
  constructor(_132a417228c8) {
    this.worker = new p(_132a417228c8);
  }
  createWebSocket(_132a417228c8, _70ac8de0cd80 = [], _a4066925cfdd, _1adb4059822f) {
    try {
      _132a417228c8 = new URL(_132a417228c8);
    } catch (_70ac8de0cd80) {
      throw new DOMException(`Faiiled to construct 'WebSocket': The URL '${_132a417228c8}' is invalid.`);
    }
    if (!_831a2f1b8196.includes(_132a417228c8.protocol)) throw new DOMException(`Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '${_132a417228c8.protocol}' is not allowed.`);
    Array.isArray(_70ac8de0cd80) || (_70ac8de0cd80 = [ _70ac8de0cd80 ]), _70ac8de0cd80 = _70ac8de0cd80.map(String);
    for (const _132a417228c8 of _70ac8de0cd80) if (!f(_132a417228c8)) throw new DOMException(`Failed to construct 'WebSocket': The subprotocol '${_132a417228c8}' is invalid.`);
    _1adb4059822f = _1adb4059822f || {};
    return new w(_132a417228c8, _70ac8de0cd80, this.worker, _1adb4059822f);
  }
  async fetch(_132a417228c8, _a4066925cfdd) {
    const _1adb4059822f = new Request(_132a417228c8, _a4066925cfdd), _db0e0c924937 = _a4066925cfdd?.headers || _1adb4059822f.headers, _a57142cf9ddc = _db0e0c924937 instanceof Headers ? Object.fromEntries(_db0e0c924937) : _db0e0c924937, _fe385732ae43 = _1adb4059822f.body;
    let _c35ecb24a9b3 = new URL(_1adb4059822f.url);
    if (_c35ecb24a9b3.protocol.startsWith("blob:")) {
      const _132a417228c8 = await _70ac8de0cd80(_c35ecb24a9b3), _a4066925cfdd = new Response(_132a417228c8.body, _132a417228c8);
      return _a4066925cfdd.rawHeaders = Object.fromEntries(_132a417228c8.headers), _a4066925cfdd.rawResponse = {
        body: _132a417228c8.body,
        headers: Object.fromEntries(_132a417228c8.headers),
        status: _132a417228c8.status,
        statusText: _132a417228c8.statusText
      }, _a4066925cfdd.finalURL = _c35ecb24a9b3.toString(), _a4066925cfdd;
    }
    for (let _132a417228c8 = 0; ;_132a417228c8++) {
      let _70ac8de0cd80 = (await this.worker.sendMessage({
        type: "fetch",
        fetch: {
          remote: _c35ecb24a9b3.toString(),
          method: _1adb4059822f.method,
          headers: _a57142cf9ddc,
          body: _fe385732ae43 || void 0
        }
      }, _fe385732ae43 ? [ _fe385732ae43 ] : [])).fetch, _db0e0c924937 = new Response(_80d96c61f334.includes(_70ac8de0cd80.status) ? void 0 : _70ac8de0cd80.body, {
        headers: new Headers(_70ac8de0cd80.headers),
        status: _70ac8de0cd80.status,
        statusText: _70ac8de0cd80.statusText
      });
      _db0e0c924937.rawHeaders = _70ac8de0cd80.headers, _db0e0c924937.rawResponse = _70ac8de0cd80, 
      _db0e0c924937.finalURL = _c35ecb24a9b3.toString();
      const _831a2f1b8196 = _a4066925cfdd?.redirect || _1adb4059822f.redirect;
      if (!_2d05de53e03c.includes(_db0e0c924937.status)) return _db0e0c924937;
      switch (_831a2f1b8196) {
       case "follow":
        {
          const _70ac8de0cd80 = _db0e0c924937.headers.get("location");
          if (20 > _132a417228c8 && null !== _70ac8de0cd80) {
            _c35ecb24a9b3 = new URL(_70ac8de0cd80, _c35ecb24a9b3);
            continue;
          }
          throw new TypeError("Failed to fetch");
        }

       case "error":
        throw new TypeError("Failed to fetch");

       case "manual":
        return _db0e0c924937;
      }
    }
  }
}

console.debug("bare-mux: running v2.1.9 (build dc9dc6e)");

export { k as BareClient, m as BareMuxConnection, w as BareWebSocket, _fe385732ae43 as WebSocketFields, p as WorkerConnection, d as browserSupportsTransferringStreams, k as default, _132a417228c8 as maxRedirects, f as validProtocol };
