const _5e09f6e21af4 = 20, _d2118a0d7ace = globalThis.fetch, _0544ec24f861 = globalThis.SharedWorker, _764839a1a606 = globalThis.localStorage, _4a98795cb5fe = globalThis.navigator.serviceWorker, _42098c55676d = MessagePort.prototype.postMessage, _d2c0da31bbca = {
  prototype: {
    send: WebSocket.prototype.send
  },
  CLOSED: WebSocket.CLOSED,
  CLOSING: WebSocket.CLOSING,
  CONNECTING: WebSocket.CONNECTING,
  OPEN: WebSocket.OPEN
};

async function c() {
  const _5e09f6e21af4 = (await self.clients.matchAll({
    type: "window",
    includeUncontrolled: !0
  })).filter(_5e09f6e21af4 => {
    try {
      const _d2118a0d7ace = new URL(_5e09f6e21af4.url);
      return _d2118a0d7ace.origin === self.location.origin && !_d2118a0d7ace.pathname.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/service/") && !_d2118a0d7ace.pathname.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/study/");
    } catch {
      return !1;
    }
  }).map(async _5e09f6e21af4 => {
    const _d2118a0d7ace = await function(_5e09f6e21af4) {
      let _d2118a0d7ace = new MessageChannel;
      return new Promise(_0544ec24f861 => {
        _5e09f6e21af4.postMessage({
          type: "getPort",
          port: _d2118a0d7ace.port2
        }, [ _d2118a0d7ace.port2 ]), _d2118a0d7ace.port1.onmessage = _5e09f6e21af4 => {
          _0544ec24f861(_5e09f6e21af4.data);
        };
      });
    }(_5e09f6e21af4);
    return await i(_d2118a0d7ace), _d2118a0d7ace;
  }), _d2118a0d7ace = Promise.race([ Promise.any(_5e09f6e21af4), new Promise((_5e09f6e21af4, _d2118a0d7ace) => setTimeout(_d2118a0d7ace, 5e3, new TypeError("timeout"))) ]);
  try {
    return await _d2118a0d7ace;
  } catch (_5e09f6e21af4) {
    if (_5e09f6e21af4 instanceof AggregateError) throw console.error("bare-mux: failed to get a bare-mux SharedWorker MessagePort as all clients returned an invalid MessagePort."), 
    new Error("All clients returned an invalid MessagePort.", {
      cause: _5e09f6e21af4
    });
    return console.warn("bare-mux: failed to get a bare-mux SharedWorker MessagePort within 5s, retrying"), 
    await c();
  }
}

function i(_5e09f6e21af4) {
  const _d2118a0d7ace = new MessageChannel, _0544ec24f861 = new Promise((_5e09f6e21af4, _0544ec24f861) => {
    _d2118a0d7ace.port1.onmessage = _d2118a0d7ace => {
      "pong" === _d2118a0d7ace.data.type && _5e09f6e21af4();
    }, setTimeout(_0544ec24f861, 5e3);
  });
  return _42098c55676d.call(_5e09f6e21af4, {
    message: {
      type: "ping"
    },
    port: _d2118a0d7ace.port2
  }, [ _d2118a0d7ace.port2 ]), _0544ec24f861;
}

function l(_5e09f6e21af4, _d2118a0d7ace) {
  const _764839a1a606 = new _0544ec24f861(_5e09f6e21af4, "ridgewood-stem-worker");
  return _d2118a0d7ace && _4a98795cb5fe.addEventListener("message", _d2118a0d7ace => {
    if ("getPort" === _d2118a0d7ace.data.type && _d2118a0d7ace.data.port) {
      console.debug("bare-mux: recieved request for port from sw");
      const _764839a1a606 = new _0544ec24f861(_5e09f6e21af4, "ridgewood-stem-worker");
      _42098c55676d.call(_d2118a0d7ace.data.port, _764839a1a606.port, [ _764839a1a606.port ]);
    }
  }), _764839a1a606.port;
}

let _7156bbc6693c = null;

function d() {
  if (null === _7156bbc6693c) {
    const _5e09f6e21af4 = new MessageChannel, _d2118a0d7ace = new ReadableStream;
    let _0544ec24f861;
    try {
      _42098c55676d.call(_5e09f6e21af4.port1, _d2118a0d7ace, [ _d2118a0d7ace ]), _0544ec24f861 = !0;
    } catch (_5e09f6e21af4) {
      _0544ec24f861 = !1;
    }
    return _7156bbc6693c = _0544ec24f861, _0544ec24f861;
  }
  return _7156bbc6693c;
}

class p {
  channel;
  port;
  workerPath;
  constructor(_5e09f6e21af4) {
    this.channel = new BroadcastChannel("bare-mux"), _5e09f6e21af4 instanceof MessagePort || _5e09f6e21af4 instanceof Promise ? this.port = _5e09f6e21af4 : this.createChannel(_5e09f6e21af4, !0);
  }
  createChannel(_5e09f6e21af4, _d2118a0d7ace) {
    if (self.clients) this.port = c(), this.channel.onmessage = _5e09f6e21af4 => {
      "refreshPort" === _5e09f6e21af4.data.type && (this.port = c());
    }; else if (_5e09f6e21af4 && SharedWorker) {
      if (!_5e09f6e21af4.startsWith("/") && !_5e09f6e21af4.includes(":")) throw new Error("Invalid URL. Must be absolute or start at the root.");
      this.port = l(_5e09f6e21af4, _d2118a0d7ace), console.debug("bare-mux: setting localStorage bare-mux-path to", _5e09f6e21af4), 
      _764839a1a606["bare-mux-path"] = _5e09f6e21af4;
    } else {
      if (!SharedWorker) throw new Error("Unable to get a channel to the SharedWorker.");
      {
        const _5e09f6e21af4 = _764839a1a606["bare-mux-path"];
        if (console.debug("bare-mux: got localStorage bare-mux-path:", _5e09f6e21af4), !_5e09f6e21af4) throw new Error("Unable to get bare-mux workerPath from localStorage.");
        this.port = l(_5e09f6e21af4, _d2118a0d7ace);
      }
    }
  }
  async sendMessage(_5e09f6e21af4, _d2118a0d7ace) {
    this.port instanceof Promise && (this.port = await this.port);
    try {
      await i(this.port);
    } catch {
      return console.warn("bare-mux: Failed to get a ping response from the worker within 5s. Assuming port is dead."), 
      this.createChannel(), await this.sendMessage(_5e09f6e21af4, _d2118a0d7ace);
    }
    const _0544ec24f861 = new MessageChannel, _764839a1a606 = [ _0544ec24f861.port2, ..._d2118a0d7ace || [] ], _4a98795cb5fe = new Promise((_5e09f6e21af4, _d2118a0d7ace) => {
      _0544ec24f861.port1.onmessage = _0544ec24f861 => {
        const _764839a1a606 = _0544ec24f861.data;
        "error" === _764839a1a606.type ? _d2118a0d7ace(_764839a1a606.error) : _5e09f6e21af4(_764839a1a606);
      };
    });
    return _42098c55676d.call(this.port, {
      message: _5e09f6e21af4,
      port: _0544ec24f861.port2
    }, _764839a1a606), await _4a98795cb5fe;
  }
}

class w extends EventTarget {
  protocols;
  url;
  readyState=_d2c0da31bbca.CONNECTING;
  channel;
  constructor(_5e09f6e21af4, _d2118a0d7ace = [], _0544ec24f861, _764839a1a606) {
    super(), this.protocols = _d2118a0d7ace, this.url = _5e09f6e21af4.toString(), this.protocols = _d2118a0d7ace;
    const s = _5e09f6e21af4 => {
      this.protocols = _5e09f6e21af4, this.readyState = _d2c0da31bbca.OPEN;
      const _d2118a0d7ace = new Event("open");
      this.dispatchEvent(_d2118a0d7ace);
    }, o = async _5e09f6e21af4 => {
      const _d2118a0d7ace = new MessageEvent("message", {
        data: _5e09f6e21af4
      });
      this.dispatchEvent(_d2118a0d7ace);
    }, c = (_5e09f6e21af4, _d2118a0d7ace) => {
      this.readyState = _d2c0da31bbca.CLOSED;
      const _0544ec24f861 = new CloseEvent("close", {
        code: _5e09f6e21af4,
        reason: _d2118a0d7ace
      });
      this.dispatchEvent(_0544ec24f861);
    }, i = () => {
      this.readyState = _d2c0da31bbca.CLOSED;
      const _5e09f6e21af4 = new Event("error");
      this.dispatchEvent(_5e09f6e21af4);
    };
    this.channel = new MessageChannel, this.channel.port1.onmessage = _5e09f6e21af4 => {
      "open" === _5e09f6e21af4.data.type ? s(_5e09f6e21af4.data.args[0]) : "message" === _5e09f6e21af4.data.type ? o(_5e09f6e21af4.data.args[0]) : "close" === _5e09f6e21af4.data.type ? c(_5e09f6e21af4.data.args[0], _5e09f6e21af4.data.args[1]) : "error" === _5e09f6e21af4.data.type && i();
    }, _0544ec24f861.sendMessage({
      type: "websocket",
      websocket: {
        url: _5e09f6e21af4.toString(),
        protocols: _d2118a0d7ace,
        requestHeaders: _764839a1a606,
        channel: this.channel.port2
      }
    }, [ this.channel.port2 ]);
  }
  send(..._5e09f6e21af4) {
    if (this.readyState === _d2c0da31bbca.CONNECTING) throw new DOMException("Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.");
    let _d2118a0d7ace = _5e09f6e21af4[0];
    _d2118a0d7ace.buffer && (_d2118a0d7ace = _d2118a0d7ace.buffer.slice(_d2118a0d7ace.byteOffset, _d2118a0d7ace.byteOffset + _d2118a0d7ace.byteLength)), 
    _42098c55676d.call(this.channel.port1, {
      type: "data",
      data: _d2118a0d7ace
    }, _d2118a0d7ace instanceof ArrayBuffer ? [ _d2118a0d7ace ] : []);
  }
  close(_5e09f6e21af4, _d2118a0d7ace) {
    _42098c55676d.call(this.channel.port1, {
      type: "close",
      closeCode: _5e09f6e21af4,
      closeReason: _d2118a0d7ace
    });
  }
}

function u(_5e09f6e21af4, _d2118a0d7ace, _0544ec24f861) {
  console.error(`error while processing '${_0544ec24f861}': `, _d2118a0d7ace), _5e09f6e21af4.postMessage({
    type: "error",
    error: _d2118a0d7ace
  });
}

function f(_5e09f6e21af4) {
  for (let _d2118a0d7ace = 0; _d2118a0d7ace < _5e09f6e21af4.length; _d2118a0d7ace++) {
    const _0544ec24f861 = _5e09f6e21af4[_d2118a0d7ace];
    if (!"!#$%&'*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz|~".includes(_0544ec24f861)) return !1;
  }
  return !0;
}

const _ea54bcd010fc = [ "ws:", "wss:" ], _836b4eeb7a0a = [ 101, 204, 205, 304 ], _a6677c972dfd = [ 301, 302, 303, 307, 308 ];

class m {
  worker;
  constructor(_5e09f6e21af4) {
    this.worker = new p(_5e09f6e21af4);
  }
  async getTransport() {
    return (await this.worker.sendMessage({
      type: "get"
    })).name;
  }
  async setTransport(_5e09f6e21af4, _d2118a0d7ace, _0544ec24f861) {
    await this.setManualTransport(`\n\t\t\tconst { default: BareTransport } = await import("${_5e09f6e21af4}");\n\t\t\treturn [BareTransport, "${_5e09f6e21af4}"];\n\t\t`, _d2118a0d7ace, _0544ec24f861);
  }
  async setManualTransport(_5e09f6e21af4, _d2118a0d7ace, _0544ec24f861) {
    if ("bare-mux-remote" === _5e09f6e21af4) throw new Error("Use setRemoteTransport.");
    await this.worker.sendMessage({
      type: "set",
      client: {
        function: _5e09f6e21af4,
        args: _d2118a0d7ace
      }
    }, _0544ec24f861);
  }
  async setRemoteTransport(_5e09f6e21af4, _d2118a0d7ace) {
    const _0544ec24f861 = new MessageChannel;
    _0544ec24f861.port1.onmessage = async _d2118a0d7ace => {
      const _0544ec24f861 = _d2118a0d7ace.data.port, _764839a1a606 = _d2118a0d7ace.data.message;
      if ("fetch" === _764839a1a606.type) try {
        _5e09f6e21af4.ready || await _5e09f6e21af4.init(), await async function(_5e09f6e21af4, _d2118a0d7ace, _0544ec24f861) {
          const _764839a1a606 = await _0544ec24f861.request(new URL(_5e09f6e21af4.fetch.remote), _5e09f6e21af4.fetch.method, _5e09f6e21af4.fetch.body, _5e09f6e21af4.fetch.headers, null);
          if (!d() && _764839a1a606.body instanceof ReadableStream) {
            const _5e09f6e21af4 = new Response(_764839a1a606.body);
            _764839a1a606.body = await _5e09f6e21af4.arrayBuffer();
          }
          _764839a1a606.body instanceof ReadableStream || _764839a1a606.body instanceof ArrayBuffer ? _42098c55676d.call(_d2118a0d7ace, {
            type: "fetch",
            fetch: _764839a1a606
          }, [ _764839a1a606.body ]) : _42098c55676d.call(_d2118a0d7ace, {
            type: "fetch",
            fetch: _764839a1a606
          });
        }(_764839a1a606, _0544ec24f861, _5e09f6e21af4);
      } catch (_5e09f6e21af4) {
        u(_0544ec24f861, _5e09f6e21af4, "fetch");
      } else if ("websocket" === _764839a1a606.type) try {
        _5e09f6e21af4.ready || await _5e09f6e21af4.init(), await async function(_5e09f6e21af4, _d2118a0d7ace, _0544ec24f861) {
          const [_764839a1a606, _4a98795cb5fe] = _0544ec24f861.connect(new URL(_5e09f6e21af4.websocket.url), _5e09f6e21af4.websocket.protocols, _5e09f6e21af4.websocket.requestHeaders, _d2118a0d7ace => {
            _42098c55676d.call(_5e09f6e21af4.websocket.channel, {
              type: "open",
              args: [ _d2118a0d7ace ]
            });
          }, _d2118a0d7ace => {
            _d2118a0d7ace instanceof ArrayBuffer ? _42098c55676d.call(_5e09f6e21af4.websocket.channel, {
              type: "message",
              args: [ _d2118a0d7ace ]
            }, [ _d2118a0d7ace ]) : _42098c55676d.call(_5e09f6e21af4.websocket.channel, {
              type: "message",
              args: [ _d2118a0d7ace ]
            });
          }, (_d2118a0d7ace, _0544ec24f861) => {
            _42098c55676d.call(_5e09f6e21af4.websocket.channel, {
              type: "close",
              args: [ _d2118a0d7ace, _0544ec24f861 ]
            });
          }, _d2118a0d7ace => {
            _42098c55676d.call(_5e09f6e21af4.websocket.channel, {
              type: "error",
              args: [ _d2118a0d7ace ]
            });
          });
          _5e09f6e21af4.websocket.channel.onmessage = _5e09f6e21af4 => {
            "data" === _5e09f6e21af4.data.type ? _764839a1a606(_5e09f6e21af4.data.data) : "close" === _5e09f6e21af4.data.type && _4a98795cb5fe(_5e09f6e21af4.data.closeCode, _5e09f6e21af4.data.closeReason);
          }, _42098c55676d.call(_d2118a0d7ace, {
            type: "websocket"
          });
        }(_764839a1a606, _0544ec24f861, _5e09f6e21af4);
      } catch (_5e09f6e21af4) {
        u(_0544ec24f861, _5e09f6e21af4, "websocket");
      }
    }, await this.worker.sendMessage({
      type: "set",
      client: {
        function: "bare-mux-remote",
        args: [ _0544ec24f861.port2, _d2118a0d7ace ]
      }
    }, [ _0544ec24f861.port2 ]);
  }
  getInnerPort() {
    return this.worker.port;
  }
}

class k {
  worker;
  constructor(_5e09f6e21af4) {
    this.worker = new p(_5e09f6e21af4);
  }
  createWebSocket(_5e09f6e21af4, _d2118a0d7ace = [], _0544ec24f861, _764839a1a606) {
    try {
      _5e09f6e21af4 = new URL(_5e09f6e21af4);
    } catch (_d2118a0d7ace) {
      throw new DOMException(`Faiiled to construct 'WebSocket': The URL '${_5e09f6e21af4}' is invalid.`);
    }
    if (!_ea54bcd010fc.includes(_5e09f6e21af4.protocol)) throw new DOMException(`Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '${_5e09f6e21af4.protocol}' is not allowed.`);
    Array.isArray(_d2118a0d7ace) || (_d2118a0d7ace = [ _d2118a0d7ace ]), _d2118a0d7ace = _d2118a0d7ace.map(String);
    for (const _5e09f6e21af4 of _d2118a0d7ace) if (!f(_5e09f6e21af4)) throw new DOMException(`Failed to construct 'WebSocket': The subprotocol '${_5e09f6e21af4}' is invalid.`);
    _764839a1a606 = _764839a1a606 || {};
    return new w(_5e09f6e21af4, _d2118a0d7ace, this.worker, _764839a1a606);
  }
  async fetch(_5e09f6e21af4, _0544ec24f861) {
    const _764839a1a606 = new Request(_5e09f6e21af4, _0544ec24f861), _4a98795cb5fe = _0544ec24f861?.headers || _764839a1a606.headers, _42098c55676d = _4a98795cb5fe instanceof Headers ? Object.fromEntries(_4a98795cb5fe) : _4a98795cb5fe, _d2c0da31bbca = _764839a1a606.body;
    let _7156bbc6693c = new URL(_764839a1a606.url);
    if (_7156bbc6693c.protocol.startsWith("blob:")) {
      const _5e09f6e21af4 = await _d2118a0d7ace(_7156bbc6693c), _0544ec24f861 = new Response(_5e09f6e21af4.body, _5e09f6e21af4);
      return _0544ec24f861.rawHeaders = Object.fromEntries(_5e09f6e21af4.headers), _0544ec24f861.rawResponse = {
        body: _5e09f6e21af4.body,
        headers: Object.fromEntries(_5e09f6e21af4.headers),
        status: _5e09f6e21af4.status,
        statusText: _5e09f6e21af4.statusText
      }, _0544ec24f861.finalURL = _7156bbc6693c.toString(), _0544ec24f861;
    }
    for (let _5e09f6e21af4 = 0; ;_5e09f6e21af4++) {
      let _d2118a0d7ace = (await this.worker.sendMessage({
        type: "fetch",
        fetch: {
          remote: _7156bbc6693c.toString(),
          method: _764839a1a606.method,
          headers: _42098c55676d,
          body: _d2c0da31bbca || void 0
        }
      }, _d2c0da31bbca ? [ _d2c0da31bbca ] : [])).fetch, _4a98795cb5fe = new Response(_836b4eeb7a0a.includes(_d2118a0d7ace.status) ? void 0 : _d2118a0d7ace.body, {
        headers: new Headers(_d2118a0d7ace.headers),
        status: _d2118a0d7ace.status,
        statusText: _d2118a0d7ace.statusText
      });
      _4a98795cb5fe.rawHeaders = _d2118a0d7ace.headers, _4a98795cb5fe.rawResponse = _d2118a0d7ace, 
      _4a98795cb5fe.finalURL = _7156bbc6693c.toString();
      const _ea54bcd010fc = _0544ec24f861?.redirect || _764839a1a606.redirect;
      if (!_a6677c972dfd.includes(_4a98795cb5fe.status)) return _4a98795cb5fe;
      switch (_ea54bcd010fc) {
       case "follow":
        {
          const _d2118a0d7ace = _4a98795cb5fe.headers.get("location");
          if (20 > _5e09f6e21af4 && null !== _d2118a0d7ace) {
            _7156bbc6693c = new URL(_d2118a0d7ace, _7156bbc6693c);
            continue;
          }
          throw new TypeError("Failed to fetch");
        }

       case "error":
        throw new TypeError("Failed to fetch");

       case "manual":
        return _4a98795cb5fe;
      }
    }
  }
}

console.debug("bare-mux: running v2.1.9 (build dc9dc6e)");

export { k as BareClient, m as BareMuxConnection, w as BareWebSocket, _d2c0da31bbca as WebSocketFields, p as WorkerConnection, d as browserSupportsTransferringStreams, k as default, _5e09f6e21af4 as maxRedirects, f as validProtocol };
