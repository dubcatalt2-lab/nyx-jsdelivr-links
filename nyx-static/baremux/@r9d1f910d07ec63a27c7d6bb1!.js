const _b16459b3f78f = 20, _1a31e68f8e21 = globalThis.fetch, _e85916155f97 = globalThis.SharedWorker, _4fc7b977b072 = globalThis.localStorage, _1f96530ba54c = globalThis.navigator.serviceWorker, _219dbce26c13 = MessagePort.prototype.postMessage, _360c0c3fce84 = {
  prototype: {
    send: WebSocket.prototype.send
  },
  CLOSED: WebSocket.CLOSED,
  CLOSING: WebSocket.CLOSING,
  CONNECTING: WebSocket.CONNECTING,
  OPEN: WebSocket.OPEN
};

async function c() {
  const _b16459b3f78f = (await self.clients.matchAll({
    type: "window",
    includeUncontrolled: !0
  })).filter(_b16459b3f78f => {
    try {
      const _1a31e68f8e21 = new URL(_b16459b3f78f.url);
      return _1a31e68f8e21.origin === self.location.origin && !_1a31e68f8e21.pathname.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/") && !_1a31e68f8e21.pathname.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/study/");
    } catch {
      return !1;
    }
  }).map(async _b16459b3f78f => {
    const _1a31e68f8e21 = await function(_b16459b3f78f) {
      let _1a31e68f8e21 = new MessageChannel;
      return new Promise(_e85916155f97 => {
        _b16459b3f78f.postMessage({
          type: "getPort",
          port: _1a31e68f8e21.port2
        }, [ _1a31e68f8e21.port2 ]), _1a31e68f8e21.port1.onmessage = _b16459b3f78f => {
          _e85916155f97(_b16459b3f78f.data);
        };
      });
    }(_b16459b3f78f);
    return await i(_1a31e68f8e21), _1a31e68f8e21;
  }), _1a31e68f8e21 = Promise.race([ Promise.any(_b16459b3f78f), new Promise((_b16459b3f78f, _1a31e68f8e21) => setTimeout(_1a31e68f8e21, 5e3, new TypeError("timeout"))) ]);
  try {
    return await _1a31e68f8e21;
  } catch (_b16459b3f78f) {
    if (_b16459b3f78f instanceof AggregateError) throw console.error("bare-mux: failed to get a bare-mux SharedWorker MessagePort as all clients returned an invalid MessagePort."), 
    new Error("All clients returned an invalid MessagePort.", {
      cause: _b16459b3f78f
    });
    return console.warn("bare-mux: failed to get a bare-mux SharedWorker MessagePort within 5s, retrying"), 
    await c();
  }
}

function i(_b16459b3f78f) {
  const _1a31e68f8e21 = new MessageChannel, _e85916155f97 = new Promise((_b16459b3f78f, _e85916155f97) => {
    _1a31e68f8e21.port1.onmessage = _1a31e68f8e21 => {
      "pong" === _1a31e68f8e21.data.type && _b16459b3f78f();
    }, setTimeout(_e85916155f97, 5e3);
  });
  return _219dbce26c13.call(_b16459b3f78f, {
    message: {
      type: "ping"
    },
    port: _1a31e68f8e21.port2
  }, [ _1a31e68f8e21.port2 ]), _e85916155f97;
}

function l(_b16459b3f78f, _1a31e68f8e21) {
  const _4fc7b977b072 = new _e85916155f97(_b16459b3f78f, "ridgewood-stem-worker");
  return _1a31e68f8e21 && _1f96530ba54c.addEventListener("message", _1a31e68f8e21 => {
    if ("getPort" === _1a31e68f8e21.data.type && _1a31e68f8e21.data.port) {
      console.debug("bare-mux: recieved request for port from sw");
      const _4fc7b977b072 = new _e85916155f97(_b16459b3f78f, "ridgewood-stem-worker");
      _219dbce26c13.call(_1a31e68f8e21.data.port, _4fc7b977b072.port, [ _4fc7b977b072.port ]);
    }
  }), _4fc7b977b072.port;
}

let _cb48849288bb = null;

function d() {
  if (null === _cb48849288bb) {
    const _b16459b3f78f = new MessageChannel, _1a31e68f8e21 = new ReadableStream;
    let _e85916155f97;
    try {
      _219dbce26c13.call(_b16459b3f78f.port1, _1a31e68f8e21, [ _1a31e68f8e21 ]), _e85916155f97 = !0;
    } catch (_b16459b3f78f) {
      _e85916155f97 = !1;
    }
    return _cb48849288bb = _e85916155f97, _e85916155f97;
  }
  return _cb48849288bb;
}

class p {
  channel;
  port;
  workerPath;
  constructor(_b16459b3f78f) {
    this.channel = new BroadcastChannel("bare-mux"), _b16459b3f78f instanceof MessagePort || _b16459b3f78f instanceof Promise ? this.port = _b16459b3f78f : this.createChannel(_b16459b3f78f, !0);
  }
  createChannel(_b16459b3f78f, _1a31e68f8e21) {
    if (self.clients) this.port = c(), this.channel.onmessage = _b16459b3f78f => {
      "refreshPort" === _b16459b3f78f.data.type && (this.port = c());
    }; else if (_b16459b3f78f && SharedWorker) {
      if (!_b16459b3f78f.startsWith("/") && !_b16459b3f78f.includes(":")) throw new Error("Invalid URL. Must be absolute or start at the root.");
      this.port = l(_b16459b3f78f, _1a31e68f8e21), console.debug("bare-mux: setting localStorage bare-mux-path to", _b16459b3f78f), 
      _4fc7b977b072["bare-mux-path"] = _b16459b3f78f;
    } else {
      if (!SharedWorker) throw new Error("Unable to get a channel to the SharedWorker.");
      {
        const _b16459b3f78f = _4fc7b977b072["bare-mux-path"];
        if (console.debug("bare-mux: got localStorage bare-mux-path:", _b16459b3f78f), !_b16459b3f78f) throw new Error("Unable to get bare-mux workerPath from localStorage.");
        this.port = l(_b16459b3f78f, _1a31e68f8e21);
      }
    }
  }
  async sendMessage(_b16459b3f78f, _1a31e68f8e21) {
    this.port instanceof Promise && (this.port = await this.port);
    try {
      await i(this.port);
    } catch {
      return console.warn("bare-mux: Failed to get a ping response from the worker within 5s. Assuming port is dead."), 
      this.createChannel(), await this.sendMessage(_b16459b3f78f, _1a31e68f8e21);
    }
    const _e85916155f97 = new MessageChannel, _4fc7b977b072 = [ _e85916155f97.port2, ..._1a31e68f8e21 || [] ], _1f96530ba54c = new Promise((_b16459b3f78f, _1a31e68f8e21) => {
      _e85916155f97.port1.onmessage = _e85916155f97 => {
        const _4fc7b977b072 = _e85916155f97.data;
        "error" === _4fc7b977b072.type ? _1a31e68f8e21(_4fc7b977b072.error) : _b16459b3f78f(_4fc7b977b072);
      };
    });
    return _219dbce26c13.call(this.port, {
      message: _b16459b3f78f,
      port: _e85916155f97.port2
    }, _4fc7b977b072), await _1f96530ba54c;
  }
}

class w extends EventTarget {
  protocols;
  url;
  readyState=_360c0c3fce84.CONNECTING;
  channel;
  constructor(_b16459b3f78f, _1a31e68f8e21 = [], _e85916155f97, _4fc7b977b072) {
    super(), this.protocols = _1a31e68f8e21, this.url = _b16459b3f78f.toString(), this.protocols = _1a31e68f8e21;
    const s = _b16459b3f78f => {
      this.protocols = _b16459b3f78f, this.readyState = _360c0c3fce84.OPEN;
      const _1a31e68f8e21 = new Event("open");
      this.dispatchEvent(_1a31e68f8e21);
    }, o = async _b16459b3f78f => {
      const _1a31e68f8e21 = new MessageEvent("message", {
        data: _b16459b3f78f
      });
      this.dispatchEvent(_1a31e68f8e21);
    }, c = (_b16459b3f78f, _1a31e68f8e21) => {
      this.readyState = _360c0c3fce84.CLOSED;
      const _e85916155f97 = new CloseEvent("close", {
        code: _b16459b3f78f,
        reason: _1a31e68f8e21
      });
      this.dispatchEvent(_e85916155f97);
    }, i = () => {
      this.readyState = _360c0c3fce84.CLOSED;
      const _b16459b3f78f = new Event("error");
      this.dispatchEvent(_b16459b3f78f);
    };
    this.channel = new MessageChannel, this.channel.port1.onmessage = _b16459b3f78f => {
      "open" === _b16459b3f78f.data.type ? s(_b16459b3f78f.data.args[0]) : "message" === _b16459b3f78f.data.type ? o(_b16459b3f78f.data.args[0]) : "close" === _b16459b3f78f.data.type ? c(_b16459b3f78f.data.args[0], _b16459b3f78f.data.args[1]) : "error" === _b16459b3f78f.data.type && i();
    }, _e85916155f97.sendMessage({
      type: "websocket",
      websocket: {
        url: _b16459b3f78f.toString(),
        protocols: _1a31e68f8e21,
        requestHeaders: _4fc7b977b072,
        channel: this.channel.port2
      }
    }, [ this.channel.port2 ]);
  }
  send(..._b16459b3f78f) {
    if (this.readyState === _360c0c3fce84.CONNECTING) throw new DOMException("Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.");
    let _1a31e68f8e21 = _b16459b3f78f[0];
    _1a31e68f8e21.buffer && (_1a31e68f8e21 = _1a31e68f8e21.buffer.slice(_1a31e68f8e21.byteOffset, _1a31e68f8e21.byteOffset + _1a31e68f8e21.byteLength)), 
    _219dbce26c13.call(this.channel.port1, {
      type: "data",
      data: _1a31e68f8e21
    }, _1a31e68f8e21 instanceof ArrayBuffer ? [ _1a31e68f8e21 ] : []);
  }
  close(_b16459b3f78f, _1a31e68f8e21) {
    _219dbce26c13.call(this.channel.port1, {
      type: "close",
      closeCode: _b16459b3f78f,
      closeReason: _1a31e68f8e21
    });
  }
}

function u(_b16459b3f78f, _1a31e68f8e21, _e85916155f97) {
  console.error(`error while processing '${_e85916155f97}': `, _1a31e68f8e21), _b16459b3f78f.postMessage({
    type: "error",
    error: _1a31e68f8e21
  });
}

function f(_b16459b3f78f) {
  for (let _1a31e68f8e21 = 0; _1a31e68f8e21 < _b16459b3f78f.length; _1a31e68f8e21++) {
    const _e85916155f97 = _b16459b3f78f[_1a31e68f8e21];
    if (!"!#$%&'*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz|~".includes(_e85916155f97)) return !1;
  }
  return !0;
}

const _ce09cf059b1f = [ "ws:", "wss:" ], _01982a27bd28 = [ 101, 204, 205, 304 ], _d1763612196f = [ 301, 302, 303, 307, 308 ];

class m {
  worker;
  constructor(_b16459b3f78f) {
    this.worker = new p(_b16459b3f78f);
  }
  async getTransport() {
    return (await this.worker.sendMessage({
      type: "get"
    })).name;
  }
  async setTransport(_b16459b3f78f, _1a31e68f8e21, _e85916155f97) {
    await this.setManualTransport(`\n\t\t\tconst { default: BareTransport } = await import("${_b16459b3f78f}");\n\t\t\treturn [BareTransport, "${_b16459b3f78f}"];\n\t\t`, _1a31e68f8e21, _e85916155f97);
  }
  async setManualTransport(_b16459b3f78f, _1a31e68f8e21, _e85916155f97) {
    if ("bare-mux-remote" === _b16459b3f78f) throw new Error("Use setRemoteTransport.");
    await this.worker.sendMessage({
      type: "set",
      client: {
        function: _b16459b3f78f,
        args: _1a31e68f8e21
      }
    }, _e85916155f97);
  }
  async setRemoteTransport(_b16459b3f78f, _1a31e68f8e21) {
    const _e85916155f97 = new MessageChannel;
    _e85916155f97.port1.onmessage = async _1a31e68f8e21 => {
      const _e85916155f97 = _1a31e68f8e21.data.port, _4fc7b977b072 = _1a31e68f8e21.data.message;
      if ("fetch" === _4fc7b977b072.type) try {
        _b16459b3f78f.ready || await _b16459b3f78f.init(), await async function(_b16459b3f78f, _1a31e68f8e21, _e85916155f97) {
          const _4fc7b977b072 = await _e85916155f97.request(new URL(_b16459b3f78f.fetch.remote), _b16459b3f78f.fetch.method, _b16459b3f78f.fetch.body, _b16459b3f78f.fetch.headers, null);
          if (!d() && _4fc7b977b072.body instanceof ReadableStream) {
            const _b16459b3f78f = new Response(_4fc7b977b072.body);
            _4fc7b977b072.body = await _b16459b3f78f.arrayBuffer();
          }
          _4fc7b977b072.body instanceof ReadableStream || _4fc7b977b072.body instanceof ArrayBuffer ? _219dbce26c13.call(_1a31e68f8e21, {
            type: "fetch",
            fetch: _4fc7b977b072
          }, [ _4fc7b977b072.body ]) : _219dbce26c13.call(_1a31e68f8e21, {
            type: "fetch",
            fetch: _4fc7b977b072
          });
        }(_4fc7b977b072, _e85916155f97, _b16459b3f78f);
      } catch (_b16459b3f78f) {
        u(_e85916155f97, _b16459b3f78f, "fetch");
      } else if ("websocket" === _4fc7b977b072.type) try {
        _b16459b3f78f.ready || await _b16459b3f78f.init(), await async function(_b16459b3f78f, _1a31e68f8e21, _e85916155f97) {
          const [_4fc7b977b072, _1f96530ba54c] = _e85916155f97.connect(new URL(_b16459b3f78f.websocket.url), _b16459b3f78f.websocket.protocols, _b16459b3f78f.websocket.requestHeaders, _1a31e68f8e21 => {
            _219dbce26c13.call(_b16459b3f78f.websocket.channel, {
              type: "open",
              args: [ _1a31e68f8e21 ]
            });
          }, _1a31e68f8e21 => {
            _1a31e68f8e21 instanceof ArrayBuffer ? _219dbce26c13.call(_b16459b3f78f.websocket.channel, {
              type: "message",
              args: [ _1a31e68f8e21 ]
            }, [ _1a31e68f8e21 ]) : _219dbce26c13.call(_b16459b3f78f.websocket.channel, {
              type: "message",
              args: [ _1a31e68f8e21 ]
            });
          }, (_1a31e68f8e21, _e85916155f97) => {
            _219dbce26c13.call(_b16459b3f78f.websocket.channel, {
              type: "close",
              args: [ _1a31e68f8e21, _e85916155f97 ]
            });
          }, _1a31e68f8e21 => {
            _219dbce26c13.call(_b16459b3f78f.websocket.channel, {
              type: "error",
              args: [ _1a31e68f8e21 ]
            });
          });
          _b16459b3f78f.websocket.channel.onmessage = _b16459b3f78f => {
            "data" === _b16459b3f78f.data.type ? _4fc7b977b072(_b16459b3f78f.data.data) : "close" === _b16459b3f78f.data.type && _1f96530ba54c(_b16459b3f78f.data.closeCode, _b16459b3f78f.data.closeReason);
          }, _219dbce26c13.call(_1a31e68f8e21, {
            type: "websocket"
          });
        }(_4fc7b977b072, _e85916155f97, _b16459b3f78f);
      } catch (_b16459b3f78f) {
        u(_e85916155f97, _b16459b3f78f, "websocket");
      }
    }, await this.worker.sendMessage({
      type: "set",
      client: {
        function: "bare-mux-remote",
        args: [ _e85916155f97.port2, _1a31e68f8e21 ]
      }
    }, [ _e85916155f97.port2 ]);
  }
  getInnerPort() {
    return this.worker.port;
  }
}

class k {
  worker;
  constructor(_b16459b3f78f) {
    this.worker = new p(_b16459b3f78f);
  }
  createWebSocket(_b16459b3f78f, _1a31e68f8e21 = [], _e85916155f97, _4fc7b977b072) {
    try {
      _b16459b3f78f = new URL(_b16459b3f78f);
    } catch (_1a31e68f8e21) {
      throw new DOMException(`Faiiled to construct 'WebSocket': The URL '${_b16459b3f78f}' is invalid.`);
    }
    if (!_ce09cf059b1f.includes(_b16459b3f78f.protocol)) throw new DOMException(`Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '${_b16459b3f78f.protocol}' is not allowed.`);
    Array.isArray(_1a31e68f8e21) || (_1a31e68f8e21 = [ _1a31e68f8e21 ]), _1a31e68f8e21 = _1a31e68f8e21.map(String);
    for (const _b16459b3f78f of _1a31e68f8e21) if (!f(_b16459b3f78f)) throw new DOMException(`Failed to construct 'WebSocket': The subprotocol '${_b16459b3f78f}' is invalid.`);
    _4fc7b977b072 = _4fc7b977b072 || {};
    return new w(_b16459b3f78f, _1a31e68f8e21, this.worker, _4fc7b977b072);
  }
  async fetch(_b16459b3f78f, _e85916155f97) {
    const _4fc7b977b072 = new Request(_b16459b3f78f, _e85916155f97), _1f96530ba54c = _e85916155f97?.headers || _4fc7b977b072.headers, _219dbce26c13 = _1f96530ba54c instanceof Headers ? Object.fromEntries(_1f96530ba54c) : _1f96530ba54c, _360c0c3fce84 = _4fc7b977b072.body;
    let _cb48849288bb = new URL(_4fc7b977b072.url);
    if (_cb48849288bb.protocol.startsWith("blob:")) {
      const _b16459b3f78f = await _1a31e68f8e21(_cb48849288bb), _e85916155f97 = new Response(_b16459b3f78f.body, _b16459b3f78f);
      return _e85916155f97.rawHeaders = Object.fromEntries(_b16459b3f78f.headers), _e85916155f97.rawResponse = {
        body: _b16459b3f78f.body,
        headers: Object.fromEntries(_b16459b3f78f.headers),
        status: _b16459b3f78f.status,
        statusText: _b16459b3f78f.statusText
      }, _e85916155f97.finalURL = _cb48849288bb.toString(), _e85916155f97;
    }
    for (let _b16459b3f78f = 0; ;_b16459b3f78f++) {
      let _1a31e68f8e21 = (await this.worker.sendMessage({
        type: "fetch",
        fetch: {
          remote: _cb48849288bb.toString(),
          method: _4fc7b977b072.method,
          headers: _219dbce26c13,
          body: _360c0c3fce84 || void 0
        }
      }, _360c0c3fce84 ? [ _360c0c3fce84 ] : [])).fetch, _1f96530ba54c = new Response(_01982a27bd28.includes(_1a31e68f8e21.status) ? void 0 : _1a31e68f8e21.body, {
        headers: new Headers(_1a31e68f8e21.headers),
        status: _1a31e68f8e21.status,
        statusText: _1a31e68f8e21.statusText
      });
      _1f96530ba54c.rawHeaders = _1a31e68f8e21.headers, _1f96530ba54c.rawResponse = _1a31e68f8e21, 
      _1f96530ba54c.finalURL = _cb48849288bb.toString();
      const _ce09cf059b1f = _e85916155f97?.redirect || _4fc7b977b072.redirect;
      if (!_d1763612196f.includes(_1f96530ba54c.status)) return _1f96530ba54c;
      switch (_ce09cf059b1f) {
       case "follow":
        {
          const _1a31e68f8e21 = _1f96530ba54c.headers.get("location");
          if (20 > _b16459b3f78f && null !== _1a31e68f8e21) {
            _cb48849288bb = new URL(_1a31e68f8e21, _cb48849288bb);
            continue;
          }
          throw new TypeError("Failed to fetch");
        }

       case "error":
        throw new TypeError("Failed to fetch");

       case "manual":
        return _1f96530ba54c;
      }
    }
  }
}

console.debug("bare-mux: running v2.1.9 (build dc9dc6e)");

export { k as BareClient, m as BareMuxConnection, w as BareWebSocket, _360c0c3fce84 as WebSocketFields, p as WorkerConnection, d as browserSupportsTransferringStreams, k as default, _b16459b3f78f as maxRedirects, f as validProtocol };
