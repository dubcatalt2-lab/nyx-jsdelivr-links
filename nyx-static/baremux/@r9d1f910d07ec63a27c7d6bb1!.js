const _a6a569fb5605 = 20, _c8575a815e47 = globalThis.fetch, _17e2a95c0cc9 = globalThis.SharedWorker, _1904398aa022 = globalThis.localStorage, _abd45dcc02b4 = globalThis.navigator.serviceWorker, _a23cf711030d = MessagePort.prototype.postMessage, _2c8ac6092b45 = {
  prototype: {
    send: WebSocket.prototype.send
  },
  CLOSED: WebSocket.CLOSED,
  CLOSING: WebSocket.CLOSING,
  CONNECTING: WebSocket.CONNECTING,
  OPEN: WebSocket.OPEN
};

async function c() {
  const _a6a569fb5605 = (await self.clients.matchAll({
    type: "window",
    includeUncontrolled: !0
  })).filter(_a6a569fb5605 => {
    try {
      const _c8575a815e47 = new URL(_a6a569fb5605.url);
      return _c8575a815e47.origin === self.location.origin && !_c8575a815e47.pathname.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/") && !_c8575a815e47.pathname.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/study/");
    } catch {
      return !1;
    }
  }).map(async _a6a569fb5605 => {
    const _c8575a815e47 = await function(_a6a569fb5605) {
      let _c8575a815e47 = new MessageChannel;
      return new Promise(_17e2a95c0cc9 => {
        _a6a569fb5605.postMessage({
          type: "getPort",
          port: _c8575a815e47.port2
        }, [ _c8575a815e47.port2 ]), _c8575a815e47.port1.onmessage = _a6a569fb5605 => {
          _17e2a95c0cc9(_a6a569fb5605.data);
        };
      });
    }(_a6a569fb5605);
    return await i(_c8575a815e47), _c8575a815e47;
  }), _c8575a815e47 = Promise.race([ Promise.any(_a6a569fb5605), new Promise((_a6a569fb5605, _c8575a815e47) => setTimeout(_c8575a815e47, 5e3, new TypeError("timeout"))) ]);
  try {
    return await _c8575a815e47;
  } catch (_a6a569fb5605) {
    if (_a6a569fb5605 instanceof AggregateError) throw console.error("bare-mux: failed to get a bare-mux SharedWorker MessagePort as all clients returned an invalid MessagePort."), 
    new Error("All clients returned an invalid MessagePort.", {
      cause: _a6a569fb5605
    });
    return console.warn("bare-mux: failed to get a bare-mux SharedWorker MessagePort within 5s, retrying"), 
    await c();
  }
}

function i(_a6a569fb5605) {
  const _c8575a815e47 = new MessageChannel, _17e2a95c0cc9 = new Promise((_a6a569fb5605, _17e2a95c0cc9) => {
    _c8575a815e47.port1.onmessage = _c8575a815e47 => {
      "pong" === _c8575a815e47.data.type && _a6a569fb5605();
    }, setTimeout(_17e2a95c0cc9, 5e3);
  });
  return _a23cf711030d.call(_a6a569fb5605, {
    message: {
      type: "ping"
    },
    port: _c8575a815e47.port2
  }, [ _c8575a815e47.port2 ]), _17e2a95c0cc9;
}

function l(_a6a569fb5605, _c8575a815e47) {
  const _1904398aa022 = new _17e2a95c0cc9(_a6a569fb5605, "ridgewood-stem-worker");
  return _c8575a815e47 && _abd45dcc02b4.addEventListener("message", _c8575a815e47 => {
    if ("getPort" === _c8575a815e47.data.type && _c8575a815e47.data.port) {
      console.debug("bare-mux: recieved request for port from sw");
      const _1904398aa022 = new _17e2a95c0cc9(_a6a569fb5605, "ridgewood-stem-worker");
      _a23cf711030d.call(_c8575a815e47.data.port, _1904398aa022.port, [ _1904398aa022.port ]);
    }
  }), _1904398aa022.port;
}

let _97ec6d6ce630 = null;

function d() {
  if (null === _97ec6d6ce630) {
    const _a6a569fb5605 = new MessageChannel, _c8575a815e47 = new ReadableStream;
    let _17e2a95c0cc9;
    try {
      _a23cf711030d.call(_a6a569fb5605.port1, _c8575a815e47, [ _c8575a815e47 ]), _17e2a95c0cc9 = !0;
    } catch (_a6a569fb5605) {
      _17e2a95c0cc9 = !1;
    }
    return _97ec6d6ce630 = _17e2a95c0cc9, _17e2a95c0cc9;
  }
  return _97ec6d6ce630;
}

class p {
  channel;
  port;
  workerPath;
  constructor(_a6a569fb5605) {
    this.channel = new BroadcastChannel("bare-mux"), _a6a569fb5605 instanceof MessagePort || _a6a569fb5605 instanceof Promise ? this.port = _a6a569fb5605 : this.createChannel(_a6a569fb5605, !0);
  }
  createChannel(_a6a569fb5605, _c8575a815e47) {
    if (self.clients) this.port = c(), this.channel.onmessage = _a6a569fb5605 => {
      "refreshPort" === _a6a569fb5605.data.type && (this.port = c());
    }; else if (_a6a569fb5605 && SharedWorker) {
      if (!_a6a569fb5605.startsWith("/") && !_a6a569fb5605.includes(":")) throw new Error("Invalid URL. Must be absolute or start at the root.");
      this.port = l(_a6a569fb5605, _c8575a815e47), console.debug("bare-mux: setting localStorage bare-mux-path to", _a6a569fb5605), 
      _1904398aa022["bare-mux-path"] = _a6a569fb5605;
    } else {
      if (!SharedWorker) throw new Error("Unable to get a channel to the SharedWorker.");
      {
        const _a6a569fb5605 = _1904398aa022["bare-mux-path"];
        if (console.debug("bare-mux: got localStorage bare-mux-path:", _a6a569fb5605), !_a6a569fb5605) throw new Error("Unable to get bare-mux workerPath from localStorage.");
        this.port = l(_a6a569fb5605, _c8575a815e47);
      }
    }
  }
  async sendMessage(_a6a569fb5605, _c8575a815e47) {
    this.port instanceof Promise && (this.port = await this.port);
    try {
      await i(this.port);
    } catch {
      return console.warn("bare-mux: Failed to get a ping response from the worker within 5s. Assuming port is dead."), 
      this.createChannel(), await this.sendMessage(_a6a569fb5605, _c8575a815e47);
    }
    const _17e2a95c0cc9 = new MessageChannel, _1904398aa022 = [ _17e2a95c0cc9.port2, ..._c8575a815e47 || [] ], _abd45dcc02b4 = new Promise((_a6a569fb5605, _c8575a815e47) => {
      _17e2a95c0cc9.port1.onmessage = _17e2a95c0cc9 => {
        const _1904398aa022 = _17e2a95c0cc9.data;
        "error" === _1904398aa022.type ? _c8575a815e47(_1904398aa022.error) : _a6a569fb5605(_1904398aa022);
      };
    });
    return _a23cf711030d.call(this.port, {
      message: _a6a569fb5605,
      port: _17e2a95c0cc9.port2
    }, _1904398aa022), await _abd45dcc02b4;
  }
}

class w extends EventTarget {
  protocols;
  url;
  readyState=_2c8ac6092b45.CONNECTING;
  channel;
  constructor(_a6a569fb5605, _c8575a815e47 = [], _17e2a95c0cc9, _1904398aa022) {
    super(), this.protocols = _c8575a815e47, this.url = _a6a569fb5605.toString(), this.protocols = _c8575a815e47;
    const s = _a6a569fb5605 => {
      this.protocols = _a6a569fb5605, this.readyState = _2c8ac6092b45.OPEN;
      const _c8575a815e47 = new Event("open");
      this.dispatchEvent(_c8575a815e47);
    }, o = async _a6a569fb5605 => {
      const _c8575a815e47 = new MessageEvent("message", {
        data: _a6a569fb5605
      });
      this.dispatchEvent(_c8575a815e47);
    }, c = (_a6a569fb5605, _c8575a815e47) => {
      this.readyState = _2c8ac6092b45.CLOSED;
      const _17e2a95c0cc9 = new CloseEvent("close", {
        code: _a6a569fb5605,
        reason: _c8575a815e47
      });
      this.dispatchEvent(_17e2a95c0cc9);
    }, i = () => {
      this.readyState = _2c8ac6092b45.CLOSED;
      const _a6a569fb5605 = new Event("error");
      this.dispatchEvent(_a6a569fb5605);
    };
    this.channel = new MessageChannel, this.channel.port1.onmessage = _a6a569fb5605 => {
      "open" === _a6a569fb5605.data.type ? s(_a6a569fb5605.data.args[0]) : "message" === _a6a569fb5605.data.type ? o(_a6a569fb5605.data.args[0]) : "close" === _a6a569fb5605.data.type ? c(_a6a569fb5605.data.args[0], _a6a569fb5605.data.args[1]) : "error" === _a6a569fb5605.data.type && i();
    }, _17e2a95c0cc9.sendMessage({
      type: "websocket",
      websocket: {
        url: _a6a569fb5605.toString(),
        protocols: _c8575a815e47,
        requestHeaders: _1904398aa022,
        channel: this.channel.port2
      }
    }, [ this.channel.port2 ]);
  }
  send(..._a6a569fb5605) {
    if (this.readyState === _2c8ac6092b45.CONNECTING) throw new DOMException("Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.");
    let _c8575a815e47 = _a6a569fb5605[0];
    _c8575a815e47.buffer && (_c8575a815e47 = _c8575a815e47.buffer.slice(_c8575a815e47.byteOffset, _c8575a815e47.byteOffset + _c8575a815e47.byteLength)), 
    _a23cf711030d.call(this.channel.port1, {
      type: "data",
      data: _c8575a815e47
    }, _c8575a815e47 instanceof ArrayBuffer ? [ _c8575a815e47 ] : []);
  }
  close(_a6a569fb5605, _c8575a815e47) {
    _a23cf711030d.call(this.channel.port1, {
      type: "close",
      closeCode: _a6a569fb5605,
      closeReason: _c8575a815e47
    });
  }
}

function u(_a6a569fb5605, _c8575a815e47, _17e2a95c0cc9) {
  console.error(`error while processing '${_17e2a95c0cc9}': `, _c8575a815e47), _a6a569fb5605.postMessage({
    type: "error",
    error: _c8575a815e47
  });
}

function f(_a6a569fb5605) {
  for (let _c8575a815e47 = 0; _c8575a815e47 < _a6a569fb5605.length; _c8575a815e47++) {
    const _17e2a95c0cc9 = _a6a569fb5605[_c8575a815e47];
    if (!"!#$%&'*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz|~".includes(_17e2a95c0cc9)) return !1;
  }
  return !0;
}

const _0845182dce55 = [ "ws:", "wss:" ], _a1847dce3bcd = [ 101, 204, 205, 304 ], _1d9739d6b712 = [ 301, 302, 303, 307, 308 ];

class m {
  worker;
  constructor(_a6a569fb5605) {
    this.worker = new p(_a6a569fb5605);
  }
  async getTransport() {
    return (await this.worker.sendMessage({
      type: "get"
    })).name;
  }
  async setTransport(_a6a569fb5605, _c8575a815e47, _17e2a95c0cc9) {
    await this.setManualTransport(`\n\t\t\tconst { default: BareTransport } = await import("${_a6a569fb5605}");\n\t\t\treturn [BareTransport, "${_a6a569fb5605}"];\n\t\t`, _c8575a815e47, _17e2a95c0cc9);
  }
  async setManualTransport(_a6a569fb5605, _c8575a815e47, _17e2a95c0cc9) {
    if ("bare-mux-remote" === _a6a569fb5605) throw new Error("Use setRemoteTransport.");
    await this.worker.sendMessage({
      type: "set",
      client: {
        function: _a6a569fb5605,
        args: _c8575a815e47
      }
    }, _17e2a95c0cc9);
  }
  async setRemoteTransport(_a6a569fb5605, _c8575a815e47) {
    const _17e2a95c0cc9 = new MessageChannel;
    _17e2a95c0cc9.port1.onmessage = async _c8575a815e47 => {
      const _17e2a95c0cc9 = _c8575a815e47.data.port, _1904398aa022 = _c8575a815e47.data.message;
      if ("fetch" === _1904398aa022.type) try {
        _a6a569fb5605.ready || await _a6a569fb5605.init(), await async function(_a6a569fb5605, _c8575a815e47, _17e2a95c0cc9) {
          const _1904398aa022 = await _17e2a95c0cc9.request(new URL(_a6a569fb5605.fetch.remote), _a6a569fb5605.fetch.method, _a6a569fb5605.fetch.body, _a6a569fb5605.fetch.headers, null);
          if (!d() && _1904398aa022.body instanceof ReadableStream) {
            const _a6a569fb5605 = new Response(_1904398aa022.body);
            _1904398aa022.body = await _a6a569fb5605.arrayBuffer();
          }
          _1904398aa022.body instanceof ReadableStream || _1904398aa022.body instanceof ArrayBuffer ? _a23cf711030d.call(_c8575a815e47, {
            type: "fetch",
            fetch: _1904398aa022
          }, [ _1904398aa022.body ]) : _a23cf711030d.call(_c8575a815e47, {
            type: "fetch",
            fetch: _1904398aa022
          });
        }(_1904398aa022, _17e2a95c0cc9, _a6a569fb5605);
      } catch (_a6a569fb5605) {
        u(_17e2a95c0cc9, _a6a569fb5605, "fetch");
      } else if ("websocket" === _1904398aa022.type) try {
        _a6a569fb5605.ready || await _a6a569fb5605.init(), await async function(_a6a569fb5605, _c8575a815e47, _17e2a95c0cc9) {
          const [_1904398aa022, _abd45dcc02b4] = _17e2a95c0cc9.connect(new URL(_a6a569fb5605.websocket.url), _a6a569fb5605.websocket.protocols, _a6a569fb5605.websocket.requestHeaders, _c8575a815e47 => {
            _a23cf711030d.call(_a6a569fb5605.websocket.channel, {
              type: "open",
              args: [ _c8575a815e47 ]
            });
          }, _c8575a815e47 => {
            _c8575a815e47 instanceof ArrayBuffer ? _a23cf711030d.call(_a6a569fb5605.websocket.channel, {
              type: "message",
              args: [ _c8575a815e47 ]
            }, [ _c8575a815e47 ]) : _a23cf711030d.call(_a6a569fb5605.websocket.channel, {
              type: "message",
              args: [ _c8575a815e47 ]
            });
          }, (_c8575a815e47, _17e2a95c0cc9) => {
            _a23cf711030d.call(_a6a569fb5605.websocket.channel, {
              type: "close",
              args: [ _c8575a815e47, _17e2a95c0cc9 ]
            });
          }, _c8575a815e47 => {
            _a23cf711030d.call(_a6a569fb5605.websocket.channel, {
              type: "error",
              args: [ _c8575a815e47 ]
            });
          });
          _a6a569fb5605.websocket.channel.onmessage = _a6a569fb5605 => {
            "data" === _a6a569fb5605.data.type ? _1904398aa022(_a6a569fb5605.data.data) : "close" === _a6a569fb5605.data.type && _abd45dcc02b4(_a6a569fb5605.data.closeCode, _a6a569fb5605.data.closeReason);
          }, _a23cf711030d.call(_c8575a815e47, {
            type: "websocket"
          });
        }(_1904398aa022, _17e2a95c0cc9, _a6a569fb5605);
      } catch (_a6a569fb5605) {
        u(_17e2a95c0cc9, _a6a569fb5605, "websocket");
      }
    }, await this.worker.sendMessage({
      type: "set",
      client: {
        function: "bare-mux-remote",
        args: [ _17e2a95c0cc9.port2, _c8575a815e47 ]
      }
    }, [ _17e2a95c0cc9.port2 ]);
  }
  getInnerPort() {
    return this.worker.port;
  }
}

class k {
  worker;
  constructor(_a6a569fb5605) {
    this.worker = new p(_a6a569fb5605);
  }
  createWebSocket(_a6a569fb5605, _c8575a815e47 = [], _17e2a95c0cc9, _1904398aa022) {
    try {
      _a6a569fb5605 = new URL(_a6a569fb5605);
    } catch (_c8575a815e47) {
      throw new DOMException(`Faiiled to construct 'WebSocket': The URL '${_a6a569fb5605}' is invalid.`);
    }
    if (!_0845182dce55.includes(_a6a569fb5605.protocol)) throw new DOMException(`Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '${_a6a569fb5605.protocol}' is not allowed.`);
    Array.isArray(_c8575a815e47) || (_c8575a815e47 = [ _c8575a815e47 ]), _c8575a815e47 = _c8575a815e47.map(String);
    for (const _a6a569fb5605 of _c8575a815e47) if (!f(_a6a569fb5605)) throw new DOMException(`Failed to construct 'WebSocket': The subprotocol '${_a6a569fb5605}' is invalid.`);
    _1904398aa022 = _1904398aa022 || {};
    return new w(_a6a569fb5605, _c8575a815e47, this.worker, _1904398aa022);
  }
  async fetch(_a6a569fb5605, _17e2a95c0cc9) {
    const _1904398aa022 = new Request(_a6a569fb5605, _17e2a95c0cc9), _abd45dcc02b4 = _17e2a95c0cc9?.headers || _1904398aa022.headers, _a23cf711030d = _abd45dcc02b4 instanceof Headers ? Object.fromEntries(_abd45dcc02b4) : _abd45dcc02b4, _2c8ac6092b45 = _1904398aa022.body;
    let _97ec6d6ce630 = new URL(_1904398aa022.url);
    if (_97ec6d6ce630.protocol.startsWith("blob:")) {
      const _a6a569fb5605 = await _c8575a815e47(_97ec6d6ce630), _17e2a95c0cc9 = new Response(_a6a569fb5605.body, _a6a569fb5605);
      return _17e2a95c0cc9.rawHeaders = Object.fromEntries(_a6a569fb5605.headers), _17e2a95c0cc9.rawResponse = {
        body: _a6a569fb5605.body,
        headers: Object.fromEntries(_a6a569fb5605.headers),
        status: _a6a569fb5605.status,
        statusText: _a6a569fb5605.statusText
      }, _17e2a95c0cc9.finalURL = _97ec6d6ce630.toString(), _17e2a95c0cc9;
    }
    for (let _a6a569fb5605 = 0; ;_a6a569fb5605++) {
      let _c8575a815e47 = (await this.worker.sendMessage({
        type: "fetch",
        fetch: {
          remote: _97ec6d6ce630.toString(),
          method: _1904398aa022.method,
          headers: _a23cf711030d,
          body: _2c8ac6092b45 || void 0
        }
      }, _2c8ac6092b45 ? [ _2c8ac6092b45 ] : [])).fetch, _abd45dcc02b4 = new Response(_a1847dce3bcd.includes(_c8575a815e47.status) ? void 0 : _c8575a815e47.body, {
        headers: new Headers(_c8575a815e47.headers),
        status: _c8575a815e47.status,
        statusText: _c8575a815e47.statusText
      });
      _abd45dcc02b4.rawHeaders = _c8575a815e47.headers, _abd45dcc02b4.rawResponse = _c8575a815e47, 
      _abd45dcc02b4.finalURL = _97ec6d6ce630.toString();
      const _0845182dce55 = _17e2a95c0cc9?.redirect || _1904398aa022.redirect;
      if (!_1d9739d6b712.includes(_abd45dcc02b4.status)) return _abd45dcc02b4;
      switch (_0845182dce55) {
       case "follow":
        {
          const _c8575a815e47 = _abd45dcc02b4.headers.get("location");
          if (20 > _a6a569fb5605 && null !== _c8575a815e47) {
            _97ec6d6ce630 = new URL(_c8575a815e47, _97ec6d6ce630);
            continue;
          }
          throw new TypeError("Failed to fetch");
        }

       case "error":
        throw new TypeError("Failed to fetch");

       case "manual":
        return _abd45dcc02b4;
      }
    }
  }
}

console.debug("bare-mux: running v2.1.9 (build dc9dc6e)");

export { k as BareClient, m as BareMuxConnection, w as BareWebSocket, _2c8ac6092b45 as WebSocketFields, p as WorkerConnection, d as browserSupportsTransferringStreams, k as default, _a6a569fb5605 as maxRedirects, f as validProtocol };
