!function() {
  "use strict";
  const λ19793e91fe5f = MessagePort.prototype.postMessage;
  let λ9ddf1922675e = null;
  function a(λ19793e91fe5f, λ9ddf1922675e, λ59e9790b374a) {
    console.error(`error while processing '${λ59e9790b374a}': `, λ9ddf1922675e), λ19793e91fe5f.postMessage({
      type: "error",
      error: λ9ddf1922675e
    });
  }
  async function n(λ59e9790b374a, λ9afe3dfad29a, λ96b6246b7f5c) {
    const λ94847290dd01 = await λ96b6246b7f5c.request(new URL(λ59e9790b374a.fetch.remote), λ59e9790b374a.fetch.method, λ59e9790b374a.fetch.body, λ59e9790b374a.fetch.headers, null);
    if (!function() {
      if (null === λ9ddf1922675e) {
        const λ59e9790b374a = new MessageChannel, λ9afe3dfad29a = new ReadableStream;
        let λ96b6246b7f5c;
        try {
          λ19793e91fe5f.call(λ59e9790b374a.port1, λ9afe3dfad29a, [ λ9afe3dfad29a ]), λ96b6246b7f5c = !0;
        } catch (λ19793e91fe5f) {
          λ96b6246b7f5c = !1;
        }
        return λ9ddf1922675e = λ96b6246b7f5c, λ96b6246b7f5c;
      }
      return λ9ddf1922675e;
    }() && λ94847290dd01.body instanceof ReadableStream) {
      const λ19793e91fe5f = new Response(λ94847290dd01.body);
      λ94847290dd01.body = await λ19793e91fe5f.arrayBuffer();
    }
    λ94847290dd01.body instanceof ReadableStream || λ94847290dd01.body instanceof ArrayBuffer ? λ19793e91fe5f.call(λ9afe3dfad29a, {
      type: "fetch",
      fetch: λ94847290dd01
    }, [ λ94847290dd01.body ]) : λ19793e91fe5f.call(λ9afe3dfad29a, {
      type: "fetch",
      fetch: λ94847290dd01
    });
  }
  let λ59e9790b374a = null, λ9afe3dfad29a = "";
  function c() {
    return new Error("there are no bare clients", {
      cause: "No BareTransport was set. Try creating a BareMuxConnection and calling `setTransport()` or `setManualTransport()` on it before using BareClient."
    });
  }
  function r(λ9ddf1922675e, λ9afe3dfad29a) {
    const λ96b6246b7f5c = λ59e9790b374a;
    let λ94847290dd01 = [ λ9afe3dfad29a ];
    λ9ddf1922675e.fetch?.body && λ94847290dd01.push(λ9ddf1922675e.fetch.body), λ9ddf1922675e.websocket?.channel && λ94847290dd01.push(λ9ddf1922675e.websocket.channel), 
    λ19793e91fe5f.call(λ96b6246b7f5c, {
      message: λ9ddf1922675e,
      port: λ9afe3dfad29a
    }, λ94847290dd01);
  }
  function l(λ9ddf1922675e) {
    λ9ddf1922675e.onmessage = async λ9ddf1922675e => {
      const λ96b6246b7f5c = λ9ddf1922675e.data.port, λ94847290dd01 = λ9ddf1922675e.data.message;
      if ("ping" === λ94847290dd01.type) λ19793e91fe5f.call(λ96b6246b7f5c, {
        type: "pong"
      }); else if ("set" === λ94847290dd01.type) try {
        const λ9ddf1922675e = async function() {}.constructor;
        if ("bare-mux-remote" === λ94847290dd01.client.function) λ59e9790b374a = λ94847290dd01.client.args[0], 
        λ9afe3dfad29a = `bare-mux-remote (${λ94847290dd01.client.args[1]})`; else try {
          const λ19793e91fe5f = new λ9ddf1922675e(λ94847290dd01.client.function), [λ96b6246b7f5c, λ1eb57866ad8a] = await λ19793e91fe5f();
          λ59e9790b374a = new λ96b6246b7f5c(...λ94847290dd01.client.args), λ9afe3dfad29a = λ1eb57866ad8a;
        } catch (λ19793e91fe5f) {
          throw λ19793e91fe5f.cause = "The BareTransport provided was invalid. Common causes of this are a default export that is not a class that implements BareTransport if you are using `setTransport()`", 
          λ19793e91fe5f;
        }
        console.log("set transport to ", λ59e9790b374a, λ9afe3dfad29a), λ19793e91fe5f.call(λ96b6246b7f5c, {
          type: "set"
        });
      } catch (λ19793e91fe5f) {
        a(λ96b6246b7f5c, λ19793e91fe5f, "set");
      } else if ("get" === λ94847290dd01.type) λ96b6246b7f5c.postMessage({
        type: "get",
        name: λ9afe3dfad29a
      }); else if ("fetch" === λ94847290dd01.type) try {
        if (!λ59e9790b374a) throw c();
        if (λ59e9790b374a instanceof MessagePort) return void r(λ94847290dd01, λ96b6246b7f5c);
        λ59e9790b374a.ready || await λ59e9790b374a.init(), await n(λ94847290dd01, λ96b6246b7f5c, λ59e9790b374a);
      } catch (λ19793e91fe5f) {
        a(λ96b6246b7f5c, λ19793e91fe5f, "fetch");
      } else if ("websocket" === λ94847290dd01.type) try {
        if (!λ59e9790b374a) throw c();
        if (λ59e9790b374a instanceof MessagePort) return void r(λ94847290dd01, λ96b6246b7f5c);
        λ59e9790b374a.ready || await λ59e9790b374a.init(), await async function(λ9ddf1922675e, λ59e9790b374a, λ9afe3dfad29a) {
          const [λ96b6246b7f5c, λ94847290dd01] = λ9afe3dfad29a.connect(new URL(λ9ddf1922675e.websocket.url), λ9ddf1922675e.websocket.protocols, λ9ddf1922675e.websocket.requestHeaders, λ59e9790b374a => {
            λ19793e91fe5f.call(λ9ddf1922675e.websocket.channel, {
              type: "open",
              args: [ λ59e9790b374a ]
            });
          }, λ59e9790b374a => {
            λ59e9790b374a instanceof ArrayBuffer ? λ19793e91fe5f.call(λ9ddf1922675e.websocket.channel, {
              type: "message",
              args: [ λ59e9790b374a ]
            }, [ λ59e9790b374a ]) : λ19793e91fe5f.call(λ9ddf1922675e.websocket.channel, {
              type: "message",
              args: [ λ59e9790b374a ]
            });
          }, (λ59e9790b374a, λ9afe3dfad29a) => {
            λ19793e91fe5f.call(λ9ddf1922675e.websocket.channel, {
              type: "close",
              args: [ λ59e9790b374a, λ9afe3dfad29a ]
            });
          }, λ59e9790b374a => {
            λ19793e91fe5f.call(λ9ddf1922675e.websocket.channel, {
              type: "error",
              args: [ λ59e9790b374a ]
            });
          });
          λ9ddf1922675e.websocket.channel.onmessage = λ19793e91fe5f => {
            "data" === λ19793e91fe5f.data.type ? λ96b6246b7f5c(λ19793e91fe5f.data.data) : "close" === λ19793e91fe5f.data.type && λ94847290dd01(λ19793e91fe5f.data.closeCode, λ19793e91fe5f.data.closeReason);
          }, λ19793e91fe5f.call(λ59e9790b374a, {
            type: "websocket"
          });
        }(λ94847290dd01, λ96b6246b7f5c, λ59e9790b374a);
      } catch (λ19793e91fe5f) {
        a(λ96b6246b7f5c, λ19793e91fe5f, "websocket");
      }
    };
  }
  new BroadcastChannel("bare-mux").postMessage({
    type: "refreshPort"
  }), self.onconnect = λ19793e91fe5f => {
    l(λ19793e91fe5f.ports[0]);
  }, console.debug("bare-mux: running v2.1.9 (build dc9dc6e)");
}();
