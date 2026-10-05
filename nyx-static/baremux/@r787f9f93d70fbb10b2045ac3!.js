!function() {
  "use strict";
  const λ2df27da052c8 = MessagePort.prototype.postMessage;
  let λ8e4b7f63e16f = null;
  function a(λ2df27da052c8, λ8e4b7f63e16f, λ8cf386902adb) {
    console.error(`error while processing '${λ8cf386902adb}': `, λ8e4b7f63e16f), λ2df27da052c8.postMessage({
      type: "error",
      error: λ8e4b7f63e16f
    });
  }
  async function n(λ8cf386902adb, λf66509233c48, λ53cb864fac42) {
    const λ8833900d541f = await λ53cb864fac42.request(new URL(λ8cf386902adb.fetch.remote), λ8cf386902adb.fetch.method, λ8cf386902adb.fetch.body, λ8cf386902adb.fetch.headers, null);
    if (!function() {
      if (null === λ8e4b7f63e16f) {
        const λ8cf386902adb = new MessageChannel, λf66509233c48 = new ReadableStream;
        let λ53cb864fac42;
        try {
          λ2df27da052c8.call(λ8cf386902adb.port1, λf66509233c48, [ λf66509233c48 ]), λ53cb864fac42 = !0;
        } catch (λ2df27da052c8) {
          λ53cb864fac42 = !1;
        }
        return λ8e4b7f63e16f = λ53cb864fac42, λ53cb864fac42;
      }
      return λ8e4b7f63e16f;
    }() && λ8833900d541f.body instanceof ReadableStream) {
      const λ2df27da052c8 = new Response(λ8833900d541f.body);
      λ8833900d541f.body = await λ2df27da052c8.arrayBuffer();
    }
    λ8833900d541f.body instanceof ReadableStream || λ8833900d541f.body instanceof ArrayBuffer ? λ2df27da052c8.call(λf66509233c48, {
      type: "fetch",
      fetch: λ8833900d541f
    }, [ λ8833900d541f.body ]) : λ2df27da052c8.call(λf66509233c48, {
      type: "fetch",
      fetch: λ8833900d541f
    });
  }
  let λ8cf386902adb = null, λf66509233c48 = "";
  function c() {
    return new Error("there are no bare clients", {
      cause: "No BareTransport was set. Try creating a BareMuxConnection and calling `setTransport()` or `setManualTransport()` on it before using BareClient."
    });
  }
  function r(λ8e4b7f63e16f, λf66509233c48) {
    const λ53cb864fac42 = λ8cf386902adb;
    let λ8833900d541f = [ λf66509233c48 ];
    λ8e4b7f63e16f.fetch?.body && λ8833900d541f.push(λ8e4b7f63e16f.fetch.body), λ8e4b7f63e16f.websocket?.channel && λ8833900d541f.push(λ8e4b7f63e16f.websocket.channel), 
    λ2df27da052c8.call(λ53cb864fac42, {
      message: λ8e4b7f63e16f,
      port: λf66509233c48
    }, λ8833900d541f);
  }
  function l(λ8e4b7f63e16f) {
    λ8e4b7f63e16f.onmessage = async λ8e4b7f63e16f => {
      const λ53cb864fac42 = λ8e4b7f63e16f.data.port, λ8833900d541f = λ8e4b7f63e16f.data.message;
      if ("ping" === λ8833900d541f.type) λ2df27da052c8.call(λ53cb864fac42, {
        type: "pong"
      }); else if ("set" === λ8833900d541f.type) try {
        const λ8e4b7f63e16f = async function() {}.constructor;
        if ("bare-mux-remote" === λ8833900d541f.client.function) λ8cf386902adb = λ8833900d541f.client.args[0], 
        λf66509233c48 = `bare-mux-remote (${λ8833900d541f.client.args[1]})`; else try {
          const λ2df27da052c8 = new λ8e4b7f63e16f(λ8833900d541f.client.function), [λ53cb864fac42, λ9ca9bd156b8b] = await λ2df27da052c8();
          λ8cf386902adb = new λ53cb864fac42(...λ8833900d541f.client.args), λf66509233c48 = λ9ca9bd156b8b;
        } catch (λ2df27da052c8) {
          throw λ2df27da052c8.cause = "The BareTransport provided was invalid. Common causes of this are a default export that is not a class that implements BareTransport if you are using `setTransport()`", 
          λ2df27da052c8;
        }
        console.log("set transport to ", λ8cf386902adb, λf66509233c48), λ2df27da052c8.call(λ53cb864fac42, {
          type: "set"
        });
      } catch (λ2df27da052c8) {
        a(λ53cb864fac42, λ2df27da052c8, "set");
      } else if ("get" === λ8833900d541f.type) λ53cb864fac42.postMessage({
        type: "get",
        name: λf66509233c48
      }); else if ("fetch" === λ8833900d541f.type) try {
        if (!λ8cf386902adb) throw c();
        if (λ8cf386902adb instanceof MessagePort) return void r(λ8833900d541f, λ53cb864fac42);
        λ8cf386902adb.ready || await λ8cf386902adb.init(), await n(λ8833900d541f, λ53cb864fac42, λ8cf386902adb);
      } catch (λ2df27da052c8) {
        a(λ53cb864fac42, λ2df27da052c8, "fetch");
      } else if ("websocket" === λ8833900d541f.type) try {
        if (!λ8cf386902adb) throw c();
        if (λ8cf386902adb instanceof MessagePort) return void r(λ8833900d541f, λ53cb864fac42);
        λ8cf386902adb.ready || await λ8cf386902adb.init(), await async function(λ8e4b7f63e16f, λ8cf386902adb, λf66509233c48) {
          const [λ53cb864fac42, λ8833900d541f] = λf66509233c48.connect(new URL(λ8e4b7f63e16f.websocket.url), λ8e4b7f63e16f.websocket.protocols, λ8e4b7f63e16f.websocket.requestHeaders, λ8cf386902adb => {
            λ2df27da052c8.call(λ8e4b7f63e16f.websocket.channel, {
              type: "open",
              args: [ λ8cf386902adb ]
            });
          }, λ8cf386902adb => {
            λ8cf386902adb instanceof ArrayBuffer ? λ2df27da052c8.call(λ8e4b7f63e16f.websocket.channel, {
              type: "message",
              args: [ λ8cf386902adb ]
            }, [ λ8cf386902adb ]) : λ2df27da052c8.call(λ8e4b7f63e16f.websocket.channel, {
              type: "message",
              args: [ λ8cf386902adb ]
            });
          }, (λ8cf386902adb, λf66509233c48) => {
            λ2df27da052c8.call(λ8e4b7f63e16f.websocket.channel, {
              type: "close",
              args: [ λ8cf386902adb, λf66509233c48 ]
            });
          }, λ8cf386902adb => {
            λ2df27da052c8.call(λ8e4b7f63e16f.websocket.channel, {
              type: "error",
              args: [ λ8cf386902adb ]
            });
          });
          λ8e4b7f63e16f.websocket.channel.onmessage = λ2df27da052c8 => {
            "data" === λ2df27da052c8.data.type ? λ53cb864fac42(λ2df27da052c8.data.data) : "close" === λ2df27da052c8.data.type && λ8833900d541f(λ2df27da052c8.data.closeCode, λ2df27da052c8.data.closeReason);
          }, λ2df27da052c8.call(λ8cf386902adb, {
            type: "websocket"
          });
        }(λ8833900d541f, λ53cb864fac42, λ8cf386902adb);
      } catch (λ2df27da052c8) {
        a(λ53cb864fac42, λ2df27da052c8, "websocket");
      }
    };
  }
  new BroadcastChannel("bare-mux").postMessage({
    type: "refreshPort"
  }), self.onconnect = λ2df27da052c8 => {
    l(λ2df27da052c8.ports[0]);
  }, console.debug("bare-mux: running v2.1.9 (build dc9dc6e)");
}();
