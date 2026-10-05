!function() {
  "use strict";
  const λ217889f02148 = MessagePort.prototype.postMessage;
  let λ5913c833df5b = null;
  function a(λ217889f02148, λ5913c833df5b, λd7adf406cb23) {
    console.error(`error while processing '${λd7adf406cb23}': `, λ5913c833df5b), λ217889f02148.postMessage({
      type: "error",
      error: λ5913c833df5b
    });
  }
  async function n(λd7adf406cb23, λd74e23fbddfb, λ8dc739e4aa5c) {
    const λ3c481c39efe7 = await λ8dc739e4aa5c.request(new URL(λd7adf406cb23.fetch.remote), λd7adf406cb23.fetch.method, λd7adf406cb23.fetch.body, λd7adf406cb23.fetch.headers, null);
    if (!function() {
      if (null === λ5913c833df5b) {
        const λd7adf406cb23 = new MessageChannel, λd74e23fbddfb = new ReadableStream;
        let λ8dc739e4aa5c;
        try {
          λ217889f02148.call(λd7adf406cb23.port1, λd74e23fbddfb, [ λd74e23fbddfb ]), λ8dc739e4aa5c = !0;
        } catch (λ217889f02148) {
          λ8dc739e4aa5c = !1;
        }
        return λ5913c833df5b = λ8dc739e4aa5c, λ8dc739e4aa5c;
      }
      return λ5913c833df5b;
    }() && λ3c481c39efe7.body instanceof ReadableStream) {
      const λ217889f02148 = new Response(λ3c481c39efe7.body);
      λ3c481c39efe7.body = await λ217889f02148.arrayBuffer();
    }
    λ3c481c39efe7.body instanceof ReadableStream || λ3c481c39efe7.body instanceof ArrayBuffer ? λ217889f02148.call(λd74e23fbddfb, {
      type: "fetch",
      fetch: λ3c481c39efe7
    }, [ λ3c481c39efe7.body ]) : λ217889f02148.call(λd74e23fbddfb, {
      type: "fetch",
      fetch: λ3c481c39efe7
    });
  }
  let λd7adf406cb23 = null, λd74e23fbddfb = "";
  function c() {
    return new Error("there are no bare clients", {
      cause: "No BareTransport was set. Try creating a BareMuxConnection and calling `setTransport()` or `setManualTransport()` on it before using BareClient."
    });
  }
  function r(λ5913c833df5b, λd74e23fbddfb) {
    const λ8dc739e4aa5c = λd7adf406cb23;
    let λ3c481c39efe7 = [ λd74e23fbddfb ];
    λ5913c833df5b.fetch?.body && λ3c481c39efe7.push(λ5913c833df5b.fetch.body), λ5913c833df5b.websocket?.channel && λ3c481c39efe7.push(λ5913c833df5b.websocket.channel), 
    λ217889f02148.call(λ8dc739e4aa5c, {
      message: λ5913c833df5b,
      port: λd74e23fbddfb
    }, λ3c481c39efe7);
  }
  function l(λ5913c833df5b) {
    λ5913c833df5b.onmessage = async λ5913c833df5b => {
      const λ8dc739e4aa5c = λ5913c833df5b.data.port, λ3c481c39efe7 = λ5913c833df5b.data.message;
      if ("ping" === λ3c481c39efe7.type) λ217889f02148.call(λ8dc739e4aa5c, {
        type: "pong"
      }); else if ("set" === λ3c481c39efe7.type) try {
        const λ5913c833df5b = async function() {}.constructor;
        if ("bare-mux-remote" === λ3c481c39efe7.client.function) λd7adf406cb23 = λ3c481c39efe7.client.args[0], 
        λd74e23fbddfb = `bare-mux-remote (${λ3c481c39efe7.client.args[1]})`; else try {
          const λ217889f02148 = new λ5913c833df5b(λ3c481c39efe7.client.function), [λ8dc739e4aa5c, λ2387b94b4ce5] = await λ217889f02148();
          λd7adf406cb23 = new λ8dc739e4aa5c(...λ3c481c39efe7.client.args), λd74e23fbddfb = λ2387b94b4ce5;
        } catch (λ217889f02148) {
          throw λ217889f02148.cause = "The BareTransport provided was invalid. Common causes of this are a default export that is not a class that implements BareTransport if you are using `setTransport()`", 
          λ217889f02148;
        }
        console.log("set transport to ", λd7adf406cb23, λd74e23fbddfb), λ217889f02148.call(λ8dc739e4aa5c, {
          type: "set"
        });
      } catch (λ217889f02148) {
        a(λ8dc739e4aa5c, λ217889f02148, "set");
      } else if ("get" === λ3c481c39efe7.type) λ8dc739e4aa5c.postMessage({
        type: "get",
        name: λd74e23fbddfb
      }); else if ("fetch" === λ3c481c39efe7.type) try {
        if (!λd7adf406cb23) throw c();
        if (λd7adf406cb23 instanceof MessagePort) return void r(λ3c481c39efe7, λ8dc739e4aa5c);
        λd7adf406cb23.ready || await λd7adf406cb23.init(), await n(λ3c481c39efe7, λ8dc739e4aa5c, λd7adf406cb23);
      } catch (λ217889f02148) {
        a(λ8dc739e4aa5c, λ217889f02148, "fetch");
      } else if ("websocket" === λ3c481c39efe7.type) try {
        if (!λd7adf406cb23) throw c();
        if (λd7adf406cb23 instanceof MessagePort) return void r(λ3c481c39efe7, λ8dc739e4aa5c);
        λd7adf406cb23.ready || await λd7adf406cb23.init(), await async function(λ5913c833df5b, λd7adf406cb23, λd74e23fbddfb) {
          const [λ8dc739e4aa5c, λ3c481c39efe7] = λd74e23fbddfb.connect(new URL(λ5913c833df5b.websocket.url), λ5913c833df5b.websocket.protocols, λ5913c833df5b.websocket.requestHeaders, λd7adf406cb23 => {
            λ217889f02148.call(λ5913c833df5b.websocket.channel, {
              type: "open",
              args: [ λd7adf406cb23 ]
            });
          }, λd7adf406cb23 => {
            λd7adf406cb23 instanceof ArrayBuffer ? λ217889f02148.call(λ5913c833df5b.websocket.channel, {
              type: "message",
              args: [ λd7adf406cb23 ]
            }, [ λd7adf406cb23 ]) : λ217889f02148.call(λ5913c833df5b.websocket.channel, {
              type: "message",
              args: [ λd7adf406cb23 ]
            });
          }, (λd7adf406cb23, λd74e23fbddfb) => {
            λ217889f02148.call(λ5913c833df5b.websocket.channel, {
              type: "close",
              args: [ λd7adf406cb23, λd74e23fbddfb ]
            });
          }, λd7adf406cb23 => {
            λ217889f02148.call(λ5913c833df5b.websocket.channel, {
              type: "error",
              args: [ λd7adf406cb23 ]
            });
          });
          λ5913c833df5b.websocket.channel.onmessage = λ217889f02148 => {
            "data" === λ217889f02148.data.type ? λ8dc739e4aa5c(λ217889f02148.data.data) : "close" === λ217889f02148.data.type && λ3c481c39efe7(λ217889f02148.data.closeCode, λ217889f02148.data.closeReason);
          }, λ217889f02148.call(λd7adf406cb23, {
            type: "websocket"
          });
        }(λ3c481c39efe7, λ8dc739e4aa5c, λd7adf406cb23);
      } catch (λ217889f02148) {
        a(λ8dc739e4aa5c, λ217889f02148, "websocket");
      }
    };
  }
  new BroadcastChannel("bare-mux").postMessage({
    type: "refreshPort"
  }), self.onconnect = λ217889f02148 => {
    l(λ217889f02148.ports[0]);
  }, console.debug("bare-mux: running v2.1.9 (build dc9dc6e)");
}();
