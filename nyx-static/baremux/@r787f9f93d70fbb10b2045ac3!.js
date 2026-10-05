!function() {
  "use strict";
  const λ9f247a5be13d = MessagePort.prototype.postMessage;
  let λd2ff2e14be21 = null;
  function a(λ9f247a5be13d, λd2ff2e14be21, λa537f41da9e3) {
    console.error(`error while processing '${λa537f41da9e3}': `, λd2ff2e14be21), λ9f247a5be13d.postMessage({
      type: "error",
      error: λd2ff2e14be21
    });
  }
  async function n(λa537f41da9e3, λb83266aa2c62, λca4ab6a2c877) {
    const λ6ef897939e0d = await λca4ab6a2c877.request(new URL(λa537f41da9e3.fetch.remote), λa537f41da9e3.fetch.method, λa537f41da9e3.fetch.body, λa537f41da9e3.fetch.headers, null);
    if (!function() {
      if (null === λd2ff2e14be21) {
        const λa537f41da9e3 = new MessageChannel, λb83266aa2c62 = new ReadableStream;
        let λca4ab6a2c877;
        try {
          λ9f247a5be13d.call(λa537f41da9e3.port1, λb83266aa2c62, [ λb83266aa2c62 ]), λca4ab6a2c877 = !0;
        } catch (λ9f247a5be13d) {
          λca4ab6a2c877 = !1;
        }
        return λd2ff2e14be21 = λca4ab6a2c877, λca4ab6a2c877;
      }
      return λd2ff2e14be21;
    }() && λ6ef897939e0d.body instanceof ReadableStream) {
      const λ9f247a5be13d = new Response(λ6ef897939e0d.body);
      λ6ef897939e0d.body = await λ9f247a5be13d.arrayBuffer();
    }
    λ6ef897939e0d.body instanceof ReadableStream || λ6ef897939e0d.body instanceof ArrayBuffer ? λ9f247a5be13d.call(λb83266aa2c62, {
      type: "fetch",
      fetch: λ6ef897939e0d
    }, [ λ6ef897939e0d.body ]) : λ9f247a5be13d.call(λb83266aa2c62, {
      type: "fetch",
      fetch: λ6ef897939e0d
    });
  }
  let λa537f41da9e3 = null, λb83266aa2c62 = "";
  function c() {
    return new Error("there are no bare clients", {
      cause: "No BareTransport was set. Try creating a BareMuxConnection and calling `setTransport()` or `setManualTransport()` on it before using BareClient."
    });
  }
  function r(λd2ff2e14be21, λb83266aa2c62) {
    const λca4ab6a2c877 = λa537f41da9e3;
    let λ6ef897939e0d = [ λb83266aa2c62 ];
    λd2ff2e14be21.fetch?.body && λ6ef897939e0d.push(λd2ff2e14be21.fetch.body), λd2ff2e14be21.websocket?.channel && λ6ef897939e0d.push(λd2ff2e14be21.websocket.channel), 
    λ9f247a5be13d.call(λca4ab6a2c877, {
      message: λd2ff2e14be21,
      port: λb83266aa2c62
    }, λ6ef897939e0d);
  }
  function l(λd2ff2e14be21) {
    λd2ff2e14be21.onmessage = async λd2ff2e14be21 => {
      const λca4ab6a2c877 = λd2ff2e14be21.data.port, λ6ef897939e0d = λd2ff2e14be21.data.message;
      if ("ping" === λ6ef897939e0d.type) λ9f247a5be13d.call(λca4ab6a2c877, {
        type: "pong"
      }); else if ("set" === λ6ef897939e0d.type) try {
        const λd2ff2e14be21 = async function() {}.constructor;
        if ("bare-mux-remote" === λ6ef897939e0d.client.function) λa537f41da9e3 = λ6ef897939e0d.client.args[0], 
        λb83266aa2c62 = `bare-mux-remote (${λ6ef897939e0d.client.args[1]})`; else try {
          const λ9f247a5be13d = new λd2ff2e14be21(λ6ef897939e0d.client.function), [λca4ab6a2c877, λ4cd979a8cec2] = await λ9f247a5be13d();
          λa537f41da9e3 = new λca4ab6a2c877(...λ6ef897939e0d.client.args), λb83266aa2c62 = λ4cd979a8cec2;
        } catch (λ9f247a5be13d) {
          throw λ9f247a5be13d.cause = "The BareTransport provided was invalid. Common causes of this are a default export that is not a class that implements BareTransport if you are using `setTransport()`", 
          λ9f247a5be13d;
        }
        console.log("set transport to ", λa537f41da9e3, λb83266aa2c62), λ9f247a5be13d.call(λca4ab6a2c877, {
          type: "set"
        });
      } catch (λ9f247a5be13d) {
        a(λca4ab6a2c877, λ9f247a5be13d, "set");
      } else if ("get" === λ6ef897939e0d.type) λca4ab6a2c877.postMessage({
        type: "get",
        name: λb83266aa2c62
      }); else if ("fetch" === λ6ef897939e0d.type) try {
        if (!λa537f41da9e3) throw c();
        if (λa537f41da9e3 instanceof MessagePort) return void r(λ6ef897939e0d, λca4ab6a2c877);
        λa537f41da9e3.ready || await λa537f41da9e3.init(), await n(λ6ef897939e0d, λca4ab6a2c877, λa537f41da9e3);
      } catch (λ9f247a5be13d) {
        a(λca4ab6a2c877, λ9f247a5be13d, "fetch");
      } else if ("websocket" === λ6ef897939e0d.type) try {
        if (!λa537f41da9e3) throw c();
        if (λa537f41da9e3 instanceof MessagePort) return void r(λ6ef897939e0d, λca4ab6a2c877);
        λa537f41da9e3.ready || await λa537f41da9e3.init(), await async function(λd2ff2e14be21, λa537f41da9e3, λb83266aa2c62) {
          const [λca4ab6a2c877, λ6ef897939e0d] = λb83266aa2c62.connect(new URL(λd2ff2e14be21.websocket.url), λd2ff2e14be21.websocket.protocols, λd2ff2e14be21.websocket.requestHeaders, λa537f41da9e3 => {
            λ9f247a5be13d.call(λd2ff2e14be21.websocket.channel, {
              type: "open",
              args: [ λa537f41da9e3 ]
            });
          }, λa537f41da9e3 => {
            λa537f41da9e3 instanceof ArrayBuffer ? λ9f247a5be13d.call(λd2ff2e14be21.websocket.channel, {
              type: "message",
              args: [ λa537f41da9e3 ]
            }, [ λa537f41da9e3 ]) : λ9f247a5be13d.call(λd2ff2e14be21.websocket.channel, {
              type: "message",
              args: [ λa537f41da9e3 ]
            });
          }, (λa537f41da9e3, λb83266aa2c62) => {
            λ9f247a5be13d.call(λd2ff2e14be21.websocket.channel, {
              type: "close",
              args: [ λa537f41da9e3, λb83266aa2c62 ]
            });
          }, λa537f41da9e3 => {
            λ9f247a5be13d.call(λd2ff2e14be21.websocket.channel, {
              type: "error",
              args: [ λa537f41da9e3 ]
            });
          });
          λd2ff2e14be21.websocket.channel.onmessage = λ9f247a5be13d => {
            "data" === λ9f247a5be13d.data.type ? λca4ab6a2c877(λ9f247a5be13d.data.data) : "close" === λ9f247a5be13d.data.type && λ6ef897939e0d(λ9f247a5be13d.data.closeCode, λ9f247a5be13d.data.closeReason);
          }, λ9f247a5be13d.call(λa537f41da9e3, {
            type: "websocket"
          });
        }(λ6ef897939e0d, λca4ab6a2c877, λa537f41da9e3);
      } catch (λ9f247a5be13d) {
        a(λca4ab6a2c877, λ9f247a5be13d, "websocket");
      }
    };
  }
  new BroadcastChannel("bare-mux").postMessage({
    type: "refreshPort"
  }), self.onconnect = λ9f247a5be13d => {
    l(λ9f247a5be13d.ports[0]);
  }, console.debug("bare-mux: running v2.1.9 (build dc9dc6e)");
}();
