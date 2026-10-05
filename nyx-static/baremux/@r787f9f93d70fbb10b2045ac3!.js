!function() {
  "use strict";
  const λ15a594e8570b = MessagePort.prototype.postMessage;
  let λc0623bfe0d8b = null;
  function a(λ15a594e8570b, λc0623bfe0d8b, λ5b461f4e64c0) {
    console.error(`error while processing '${λ5b461f4e64c0}': `, λc0623bfe0d8b), λ15a594e8570b.postMessage({
      type: "error",
      error: λc0623bfe0d8b
    });
  }
  async function n(λ5b461f4e64c0, λ411d00fcd0f3, λa1c8715d6b9c) {
    const λ680a6e22e37a = await λa1c8715d6b9c.request(new URL(λ5b461f4e64c0.fetch.remote), λ5b461f4e64c0.fetch.method, λ5b461f4e64c0.fetch.body, λ5b461f4e64c0.fetch.headers, null);
    if (!function() {
      if (null === λc0623bfe0d8b) {
        const λ5b461f4e64c0 = new MessageChannel, λ411d00fcd0f3 = new ReadableStream;
        let λa1c8715d6b9c;
        try {
          λ15a594e8570b.call(λ5b461f4e64c0.port1, λ411d00fcd0f3, [ λ411d00fcd0f3 ]), λa1c8715d6b9c = !0;
        } catch (λ15a594e8570b) {
          λa1c8715d6b9c = !1;
        }
        return λc0623bfe0d8b = λa1c8715d6b9c, λa1c8715d6b9c;
      }
      return λc0623bfe0d8b;
    }() && λ680a6e22e37a.body instanceof ReadableStream) {
      const λ15a594e8570b = new Response(λ680a6e22e37a.body);
      λ680a6e22e37a.body = await λ15a594e8570b.arrayBuffer();
    }
    λ680a6e22e37a.body instanceof ReadableStream || λ680a6e22e37a.body instanceof ArrayBuffer ? λ15a594e8570b.call(λ411d00fcd0f3, {
      type: "fetch",
      fetch: λ680a6e22e37a
    }, [ λ680a6e22e37a.body ]) : λ15a594e8570b.call(λ411d00fcd0f3, {
      type: "fetch",
      fetch: λ680a6e22e37a
    });
  }
  let λ5b461f4e64c0 = null, λ411d00fcd0f3 = "";
  function c() {
    return new Error("there are no bare clients", {
      cause: "No BareTransport was set. Try creating a BareMuxConnection and calling `setTransport()` or `setManualTransport()` on it before using BareClient."
    });
  }
  function r(λc0623bfe0d8b, λ411d00fcd0f3) {
    const λa1c8715d6b9c = λ5b461f4e64c0;
    let λ680a6e22e37a = [ λ411d00fcd0f3 ];
    λc0623bfe0d8b.fetch?.body && λ680a6e22e37a.push(λc0623bfe0d8b.fetch.body), λc0623bfe0d8b.websocket?.channel && λ680a6e22e37a.push(λc0623bfe0d8b.websocket.channel), 
    λ15a594e8570b.call(λa1c8715d6b9c, {
      message: λc0623bfe0d8b,
      port: λ411d00fcd0f3
    }, λ680a6e22e37a);
  }
  function l(λc0623bfe0d8b) {
    λc0623bfe0d8b.onmessage = async λc0623bfe0d8b => {
      const λa1c8715d6b9c = λc0623bfe0d8b.data.port, λ680a6e22e37a = λc0623bfe0d8b.data.message;
      if ("ping" === λ680a6e22e37a.type) λ15a594e8570b.call(λa1c8715d6b9c, {
        type: "pong"
      }); else if ("set" === λ680a6e22e37a.type) try {
        const λc0623bfe0d8b = async function() {}.constructor;
        if ("bare-mux-remote" === λ680a6e22e37a.client.function) λ5b461f4e64c0 = λ680a6e22e37a.client.args[0], 
        λ411d00fcd0f3 = `bare-mux-remote (${λ680a6e22e37a.client.args[1]})`; else try {
          const λ15a594e8570b = new λc0623bfe0d8b(λ680a6e22e37a.client.function), [λa1c8715d6b9c, λ08ef69b3a0be] = await λ15a594e8570b();
          λ5b461f4e64c0 = new λa1c8715d6b9c(...λ680a6e22e37a.client.args), λ411d00fcd0f3 = λ08ef69b3a0be;
        } catch (λ15a594e8570b) {
          throw λ15a594e8570b.cause = "The BareTransport provided was invalid. Common causes of this are a default export that is not a class that implements BareTransport if you are using `setTransport()`", 
          λ15a594e8570b;
        }
        console.log("set transport to ", λ5b461f4e64c0, λ411d00fcd0f3), λ15a594e8570b.call(λa1c8715d6b9c, {
          type: "set"
        });
      } catch (λ15a594e8570b) {
        a(λa1c8715d6b9c, λ15a594e8570b, "set");
      } else if ("get" === λ680a6e22e37a.type) λa1c8715d6b9c.postMessage({
        type: "get",
        name: λ411d00fcd0f3
      }); else if ("fetch" === λ680a6e22e37a.type) try {
        if (!λ5b461f4e64c0) throw c();
        if (λ5b461f4e64c0 instanceof MessagePort) return void r(λ680a6e22e37a, λa1c8715d6b9c);
        λ5b461f4e64c0.ready || await λ5b461f4e64c0.init(), await n(λ680a6e22e37a, λa1c8715d6b9c, λ5b461f4e64c0);
      } catch (λ15a594e8570b) {
        a(λa1c8715d6b9c, λ15a594e8570b, "fetch");
      } else if ("websocket" === λ680a6e22e37a.type) try {
        if (!λ5b461f4e64c0) throw c();
        if (λ5b461f4e64c0 instanceof MessagePort) return void r(λ680a6e22e37a, λa1c8715d6b9c);
        λ5b461f4e64c0.ready || await λ5b461f4e64c0.init(), await async function(λc0623bfe0d8b, λ5b461f4e64c0, λ411d00fcd0f3) {
          const [λa1c8715d6b9c, λ680a6e22e37a] = λ411d00fcd0f3.connect(new URL(λc0623bfe0d8b.websocket.url), λc0623bfe0d8b.websocket.protocols, λc0623bfe0d8b.websocket.requestHeaders, λ5b461f4e64c0 => {
            λ15a594e8570b.call(λc0623bfe0d8b.websocket.channel, {
              type: "open",
              args: [ λ5b461f4e64c0 ]
            });
          }, λ5b461f4e64c0 => {
            λ5b461f4e64c0 instanceof ArrayBuffer ? λ15a594e8570b.call(λc0623bfe0d8b.websocket.channel, {
              type: "message",
              args: [ λ5b461f4e64c0 ]
            }, [ λ5b461f4e64c0 ]) : λ15a594e8570b.call(λc0623bfe0d8b.websocket.channel, {
              type: "message",
              args: [ λ5b461f4e64c0 ]
            });
          }, (λ5b461f4e64c0, λ411d00fcd0f3) => {
            λ15a594e8570b.call(λc0623bfe0d8b.websocket.channel, {
              type: "close",
              args: [ λ5b461f4e64c0, λ411d00fcd0f3 ]
            });
          }, λ5b461f4e64c0 => {
            λ15a594e8570b.call(λc0623bfe0d8b.websocket.channel, {
              type: "error",
              args: [ λ5b461f4e64c0 ]
            });
          });
          λc0623bfe0d8b.websocket.channel.onmessage = λ15a594e8570b => {
            "data" === λ15a594e8570b.data.type ? λa1c8715d6b9c(λ15a594e8570b.data.data) : "close" === λ15a594e8570b.data.type && λ680a6e22e37a(λ15a594e8570b.data.closeCode, λ15a594e8570b.data.closeReason);
          }, λ15a594e8570b.call(λ5b461f4e64c0, {
            type: "websocket"
          });
        }(λ680a6e22e37a, λa1c8715d6b9c, λ5b461f4e64c0);
      } catch (λ15a594e8570b) {
        a(λa1c8715d6b9c, λ15a594e8570b, "websocket");
      }
    };
  }
  new BroadcastChannel("bare-mux").postMessage({
    type: "refreshPort"
  }), self.onconnect = λ15a594e8570b => {
    l(λ15a594e8570b.ports[0]);
  }, console.debug("bare-mux: running v2.1.9 (build dc9dc6e)");
}();
