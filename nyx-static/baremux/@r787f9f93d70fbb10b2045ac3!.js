!function() {
  "use strict";
  const λ634ad29c6db7 = MessagePort.prototype.postMessage;
  let λ5a00865d3269 = null;
  function a(λ634ad29c6db7, λ5a00865d3269, λ3f76bd53fbde) {
    console.error(`error while processing '${λ3f76bd53fbde}': `, λ5a00865d3269), λ634ad29c6db7.postMessage({
      type: "error",
      error: λ5a00865d3269
    });
  }
  async function n(λ3f76bd53fbde, λ36219cae38e3, λ1c4e781d46d4) {
    const λ04889718e9f9 = await λ1c4e781d46d4.request(new URL(λ3f76bd53fbde.fetch.remote), λ3f76bd53fbde.fetch.method, λ3f76bd53fbde.fetch.body, λ3f76bd53fbde.fetch.headers, null);
    if (!function() {
      if (null === λ5a00865d3269) {
        const λ3f76bd53fbde = new MessageChannel, λ36219cae38e3 = new ReadableStream;
        let λ1c4e781d46d4;
        try {
          λ634ad29c6db7.call(λ3f76bd53fbde.port1, λ36219cae38e3, [ λ36219cae38e3 ]), λ1c4e781d46d4 = !0;
        } catch (λ634ad29c6db7) {
          λ1c4e781d46d4 = !1;
        }
        return λ5a00865d3269 = λ1c4e781d46d4, λ1c4e781d46d4;
      }
      return λ5a00865d3269;
    }() && λ04889718e9f9.body instanceof ReadableStream) {
      const λ634ad29c6db7 = new Response(λ04889718e9f9.body);
      λ04889718e9f9.body = await λ634ad29c6db7.arrayBuffer();
    }
    λ04889718e9f9.body instanceof ReadableStream || λ04889718e9f9.body instanceof ArrayBuffer ? λ634ad29c6db7.call(λ36219cae38e3, {
      type: "fetch",
      fetch: λ04889718e9f9
    }, [ λ04889718e9f9.body ]) : λ634ad29c6db7.call(λ36219cae38e3, {
      type: "fetch",
      fetch: λ04889718e9f9
    });
  }
  let λ3f76bd53fbde = null, λ36219cae38e3 = "";
  function c() {
    return new Error("there are no bare clients", {
      cause: "No BareTransport was set. Try creating a BareMuxConnection and calling `setTransport()` or `setManualTransport()` on it before using BareClient."
    });
  }
  function r(λ5a00865d3269, λ36219cae38e3) {
    const λ1c4e781d46d4 = λ3f76bd53fbde;
    let λ04889718e9f9 = [ λ36219cae38e3 ];
    λ5a00865d3269.fetch?.body && λ04889718e9f9.push(λ5a00865d3269.fetch.body), λ5a00865d3269.websocket?.channel && λ04889718e9f9.push(λ5a00865d3269.websocket.channel), 
    λ634ad29c6db7.call(λ1c4e781d46d4, {
      message: λ5a00865d3269,
      port: λ36219cae38e3
    }, λ04889718e9f9);
  }
  function l(λ5a00865d3269) {
    λ5a00865d3269.onmessage = async λ5a00865d3269 => {
      const λ1c4e781d46d4 = λ5a00865d3269.data.port, λ04889718e9f9 = λ5a00865d3269.data.message;
      if ("ping" === λ04889718e9f9.type) λ634ad29c6db7.call(λ1c4e781d46d4, {
        type: "pong"
      }); else if ("set" === λ04889718e9f9.type) try {
        const λ5a00865d3269 = async function() {}.constructor;
        if ("bare-mux-remote" === λ04889718e9f9.client.function) λ3f76bd53fbde = λ04889718e9f9.client.args[0], 
        λ36219cae38e3 = `bare-mux-remote (${λ04889718e9f9.client.args[1]})`; else try {
          const λ634ad29c6db7 = new λ5a00865d3269(λ04889718e9f9.client.function), [λ1c4e781d46d4, λ093385392e5e] = await λ634ad29c6db7();
          λ3f76bd53fbde = new λ1c4e781d46d4(...λ04889718e9f9.client.args), λ36219cae38e3 = λ093385392e5e;
        } catch (λ634ad29c6db7) {
          throw λ634ad29c6db7.cause = "The BareTransport provided was invalid. Common causes of this are a default export that is not a class that implements BareTransport if you are using `setTransport()`", 
          λ634ad29c6db7;
        }
        console.log("set transport to ", λ3f76bd53fbde, λ36219cae38e3), λ634ad29c6db7.call(λ1c4e781d46d4, {
          type: "set"
        });
      } catch (λ634ad29c6db7) {
        a(λ1c4e781d46d4, λ634ad29c6db7, "set");
      } else if ("get" === λ04889718e9f9.type) λ1c4e781d46d4.postMessage({
        type: "get",
        name: λ36219cae38e3
      }); else if ("fetch" === λ04889718e9f9.type) try {
        if (!λ3f76bd53fbde) throw c();
        if (λ3f76bd53fbde instanceof MessagePort) return void r(λ04889718e9f9, λ1c4e781d46d4);
        λ3f76bd53fbde.ready || await λ3f76bd53fbde.init(), await n(λ04889718e9f9, λ1c4e781d46d4, λ3f76bd53fbde);
      } catch (λ634ad29c6db7) {
        a(λ1c4e781d46d4, λ634ad29c6db7, "fetch");
      } else if ("websocket" === λ04889718e9f9.type) try {
        if (!λ3f76bd53fbde) throw c();
        if (λ3f76bd53fbde instanceof MessagePort) return void r(λ04889718e9f9, λ1c4e781d46d4);
        λ3f76bd53fbde.ready || await λ3f76bd53fbde.init(), await async function(λ5a00865d3269, λ3f76bd53fbde, λ36219cae38e3) {
          const [λ1c4e781d46d4, λ04889718e9f9] = λ36219cae38e3.connect(new URL(λ5a00865d3269.websocket.url), λ5a00865d3269.websocket.protocols, λ5a00865d3269.websocket.requestHeaders, λ3f76bd53fbde => {
            λ634ad29c6db7.call(λ5a00865d3269.websocket.channel, {
              type: "open",
              args: [ λ3f76bd53fbde ]
            });
          }, λ3f76bd53fbde => {
            λ3f76bd53fbde instanceof ArrayBuffer ? λ634ad29c6db7.call(λ5a00865d3269.websocket.channel, {
              type: "message",
              args: [ λ3f76bd53fbde ]
            }, [ λ3f76bd53fbde ]) : λ634ad29c6db7.call(λ5a00865d3269.websocket.channel, {
              type: "message",
              args: [ λ3f76bd53fbde ]
            });
          }, (λ3f76bd53fbde, λ36219cae38e3) => {
            λ634ad29c6db7.call(λ5a00865d3269.websocket.channel, {
              type: "close",
              args: [ λ3f76bd53fbde, λ36219cae38e3 ]
            });
          }, λ3f76bd53fbde => {
            λ634ad29c6db7.call(λ5a00865d3269.websocket.channel, {
              type: "error",
              args: [ λ3f76bd53fbde ]
            });
          });
          λ5a00865d3269.websocket.channel.onmessage = λ634ad29c6db7 => {
            "data" === λ634ad29c6db7.data.type ? λ1c4e781d46d4(λ634ad29c6db7.data.data) : "close" === λ634ad29c6db7.data.type && λ04889718e9f9(λ634ad29c6db7.data.closeCode, λ634ad29c6db7.data.closeReason);
          }, λ634ad29c6db7.call(λ3f76bd53fbde, {
            type: "websocket"
          });
        }(λ04889718e9f9, λ1c4e781d46d4, λ3f76bd53fbde);
      } catch (λ634ad29c6db7) {
        a(λ1c4e781d46d4, λ634ad29c6db7, "websocket");
      }
    };
  }
  new BroadcastChannel("bare-mux").postMessage({
    type: "refreshPort"
  }), self.onconnect = λ634ad29c6db7 => {
    l(λ634ad29c6db7.ports[0]);
  }, console.debug("bare-mux: running v2.1.9 (build dc9dc6e)");
}();
