!function() {
  "use strict";
  const λ4ae91d3457b3 = MessagePort.prototype.postMessage;
  let λde118c45d232 = null;
  function a(λ4ae91d3457b3, λde118c45d232, λ571d1a8ed439) {
    console.error(`error while processing '${λ571d1a8ed439}': `, λde118c45d232), λ4ae91d3457b3.postMessage({
      type: "error",
      error: λde118c45d232
    });
  }
  async function n(λ571d1a8ed439, λ02304afd22c9, λde5782cd809d) {
    const λ04127aa9a625 = await λde5782cd809d.request(new URL(λ571d1a8ed439.fetch.remote), λ571d1a8ed439.fetch.method, λ571d1a8ed439.fetch.body, λ571d1a8ed439.fetch.headers, null);
    if (!function() {
      if (null === λde118c45d232) {
        const λ571d1a8ed439 = new MessageChannel, λ02304afd22c9 = new ReadableStream;
        let λde5782cd809d;
        try {
          λ4ae91d3457b3.call(λ571d1a8ed439.port1, λ02304afd22c9, [ λ02304afd22c9 ]), λde5782cd809d = !0;
        } catch (λ4ae91d3457b3) {
          λde5782cd809d = !1;
        }
        return λde118c45d232 = λde5782cd809d, λde5782cd809d;
      }
      return λde118c45d232;
    }() && λ04127aa9a625.body instanceof ReadableStream) {
      const λ4ae91d3457b3 = new Response(λ04127aa9a625.body);
      λ04127aa9a625.body = await λ4ae91d3457b3.arrayBuffer();
    }
    λ04127aa9a625.body instanceof ReadableStream || λ04127aa9a625.body instanceof ArrayBuffer ? λ4ae91d3457b3.call(λ02304afd22c9, {
      type: "fetch",
      fetch: λ04127aa9a625
    }, [ λ04127aa9a625.body ]) : λ4ae91d3457b3.call(λ02304afd22c9, {
      type: "fetch",
      fetch: λ04127aa9a625
    });
  }
  let λ571d1a8ed439 = null, λ02304afd22c9 = "";
  function c() {
    return new Error("there are no bare clients", {
      cause: "No BareTransport was set. Try creating a BareMuxConnection and calling `setTransport()` or `setManualTransport()` on it before using BareClient."
    });
  }
  function r(λde118c45d232, λ02304afd22c9) {
    const λde5782cd809d = λ571d1a8ed439;
    let λ04127aa9a625 = [ λ02304afd22c9 ];
    λde118c45d232.fetch?.body && λ04127aa9a625.push(λde118c45d232.fetch.body), λde118c45d232.websocket?.channel && λ04127aa9a625.push(λde118c45d232.websocket.channel), 
    λ4ae91d3457b3.call(λde5782cd809d, {
      message: λde118c45d232,
      port: λ02304afd22c9
    }, λ04127aa9a625);
  }
  function l(λde118c45d232) {
    λde118c45d232.onmessage = async λde118c45d232 => {
      const λde5782cd809d = λde118c45d232.data.port, λ04127aa9a625 = λde118c45d232.data.message;
      if ("ping" === λ04127aa9a625.type) λ4ae91d3457b3.call(λde5782cd809d, {
        type: "pong"
      }); else if ("set" === λ04127aa9a625.type) try {
        const λde118c45d232 = async function() {}.constructor;
        if ("bare-mux-remote" === λ04127aa9a625.client.function) λ571d1a8ed439 = λ04127aa9a625.client.args[0], 
        λ02304afd22c9 = `bare-mux-remote (${λ04127aa9a625.client.args[1]})`; else try {
          const λ4ae91d3457b3 = new λde118c45d232(λ04127aa9a625.client.function), [λde5782cd809d, λ15ba1ccac9c4] = await λ4ae91d3457b3();
          λ571d1a8ed439 = new λde5782cd809d(...λ04127aa9a625.client.args), λ02304afd22c9 = λ15ba1ccac9c4;
        } catch (λ4ae91d3457b3) {
          throw λ4ae91d3457b3.cause = "The BareTransport provided was invalid. Common causes of this are a default export that is not a class that implements BareTransport if you are using `setTransport()`", 
          λ4ae91d3457b3;
        }
        console.log("set transport to ", λ571d1a8ed439, λ02304afd22c9), λ4ae91d3457b3.call(λde5782cd809d, {
          type: "set"
        });
      } catch (λ4ae91d3457b3) {
        a(λde5782cd809d, λ4ae91d3457b3, "set");
      } else if ("get" === λ04127aa9a625.type) λde5782cd809d.postMessage({
        type: "get",
        name: λ02304afd22c9
      }); else if ("fetch" === λ04127aa9a625.type) try {
        if (!λ571d1a8ed439) throw c();
        if (λ571d1a8ed439 instanceof MessagePort) return void r(λ04127aa9a625, λde5782cd809d);
        λ571d1a8ed439.ready || await λ571d1a8ed439.init(), await n(λ04127aa9a625, λde5782cd809d, λ571d1a8ed439);
      } catch (λ4ae91d3457b3) {
        a(λde5782cd809d, λ4ae91d3457b3, "fetch");
      } else if ("websocket" === λ04127aa9a625.type) try {
        if (!λ571d1a8ed439) throw c();
        if (λ571d1a8ed439 instanceof MessagePort) return void r(λ04127aa9a625, λde5782cd809d);
        λ571d1a8ed439.ready || await λ571d1a8ed439.init(), await async function(λde118c45d232, λ571d1a8ed439, λ02304afd22c9) {
          const [λde5782cd809d, λ04127aa9a625] = λ02304afd22c9.connect(new URL(λde118c45d232.websocket.url), λde118c45d232.websocket.protocols, λde118c45d232.websocket.requestHeaders, λ571d1a8ed439 => {
            λ4ae91d3457b3.call(λde118c45d232.websocket.channel, {
              type: "open",
              args: [ λ571d1a8ed439 ]
            });
          }, λ571d1a8ed439 => {
            λ571d1a8ed439 instanceof ArrayBuffer ? λ4ae91d3457b3.call(λde118c45d232.websocket.channel, {
              type: "message",
              args: [ λ571d1a8ed439 ]
            }, [ λ571d1a8ed439 ]) : λ4ae91d3457b3.call(λde118c45d232.websocket.channel, {
              type: "message",
              args: [ λ571d1a8ed439 ]
            });
          }, (λ571d1a8ed439, λ02304afd22c9) => {
            λ4ae91d3457b3.call(λde118c45d232.websocket.channel, {
              type: "close",
              args: [ λ571d1a8ed439, λ02304afd22c9 ]
            });
          }, λ571d1a8ed439 => {
            λ4ae91d3457b3.call(λde118c45d232.websocket.channel, {
              type: "error",
              args: [ λ571d1a8ed439 ]
            });
          });
          λde118c45d232.websocket.channel.onmessage = λ4ae91d3457b3 => {
            "data" === λ4ae91d3457b3.data.type ? λde5782cd809d(λ4ae91d3457b3.data.data) : "close" === λ4ae91d3457b3.data.type && λ04127aa9a625(λ4ae91d3457b3.data.closeCode, λ4ae91d3457b3.data.closeReason);
          }, λ4ae91d3457b3.call(λ571d1a8ed439, {
            type: "websocket"
          });
        }(λ04127aa9a625, λde5782cd809d, λ571d1a8ed439);
      } catch (λ4ae91d3457b3) {
        a(λde5782cd809d, λ4ae91d3457b3, "websocket");
      }
    };
  }
  new BroadcastChannel("bare-mux").postMessage({
    type: "refreshPort"
  }), self.onconnect = λ4ae91d3457b3 => {
    l(λ4ae91d3457b3.ports[0]);
  }, console.debug("bare-mux: running v2.1.9 (build dc9dc6e)");
}();
