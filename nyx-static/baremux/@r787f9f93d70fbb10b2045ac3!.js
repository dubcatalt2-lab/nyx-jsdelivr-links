!function() {
  "use strict";
  const λ336dc945f585 = MessagePort.prototype.postMessage;
  let λabd35cca70ba = null;
  function a(λ336dc945f585, λabd35cca70ba, λde3b4cac561a) {
    console.error(`error while processing '${λde3b4cac561a}': `, λabd35cca70ba), λ336dc945f585.postMessage({
      type: "error",
      error: λabd35cca70ba
    });
  }
  async function n(λde3b4cac561a, λ1dbeaab61a6a, λ2b7c83319813) {
    const λc4376881ca09 = await λ2b7c83319813.request(new URL(λde3b4cac561a.fetch.remote), λde3b4cac561a.fetch.method, λde3b4cac561a.fetch.body, λde3b4cac561a.fetch.headers, null);
    if (!function() {
      if (null === λabd35cca70ba) {
        const λde3b4cac561a = new MessageChannel, λ1dbeaab61a6a = new ReadableStream;
        let λ2b7c83319813;
        try {
          λ336dc945f585.call(λde3b4cac561a.port1, λ1dbeaab61a6a, [ λ1dbeaab61a6a ]), λ2b7c83319813 = !0;
        } catch (λ336dc945f585) {
          λ2b7c83319813 = !1;
        }
        return λabd35cca70ba = λ2b7c83319813, λ2b7c83319813;
      }
      return λabd35cca70ba;
    }() && λc4376881ca09.body instanceof ReadableStream) {
      const λ336dc945f585 = new Response(λc4376881ca09.body);
      λc4376881ca09.body = await λ336dc945f585.arrayBuffer();
    }
    λc4376881ca09.body instanceof ReadableStream || λc4376881ca09.body instanceof ArrayBuffer ? λ336dc945f585.call(λ1dbeaab61a6a, {
      type: "fetch",
      fetch: λc4376881ca09
    }, [ λc4376881ca09.body ]) : λ336dc945f585.call(λ1dbeaab61a6a, {
      type: "fetch",
      fetch: λc4376881ca09
    });
  }
  let λde3b4cac561a = null, λ1dbeaab61a6a = "";
  function c() {
    return new Error("there are no bare clients", {
      cause: "No BareTransport was set. Try creating a BareMuxConnection and calling `setTransport()` or `setManualTransport()` on it before using BareClient."
    });
  }
  function r(λabd35cca70ba, λ1dbeaab61a6a) {
    const λ2b7c83319813 = λde3b4cac561a;
    let λc4376881ca09 = [ λ1dbeaab61a6a ];
    λabd35cca70ba.fetch?.body && λc4376881ca09.push(λabd35cca70ba.fetch.body), λabd35cca70ba.websocket?.channel && λc4376881ca09.push(λabd35cca70ba.websocket.channel), 
    λ336dc945f585.call(λ2b7c83319813, {
      message: λabd35cca70ba,
      port: λ1dbeaab61a6a
    }, λc4376881ca09);
  }
  function l(λabd35cca70ba) {
    λabd35cca70ba.onmessage = async λabd35cca70ba => {
      const λ2b7c83319813 = λabd35cca70ba.data.port, λc4376881ca09 = λabd35cca70ba.data.message;
      if ("ping" === λc4376881ca09.type) λ336dc945f585.call(λ2b7c83319813, {
        type: "pong"
      }); else if ("set" === λc4376881ca09.type) try {
        const λabd35cca70ba = async function() {}.constructor;
        if ("bare-mux-remote" === λc4376881ca09.client.function) λde3b4cac561a = λc4376881ca09.client.args[0], 
        λ1dbeaab61a6a = `bare-mux-remote (${λc4376881ca09.client.args[1]})`; else try {
          const λ336dc945f585 = new λabd35cca70ba(λc4376881ca09.client.function), [λ2b7c83319813, λa4772cd64209] = await λ336dc945f585();
          λde3b4cac561a = new λ2b7c83319813(...λc4376881ca09.client.args), λ1dbeaab61a6a = λa4772cd64209;
        } catch (λ336dc945f585) {
          throw λ336dc945f585.cause = "The BareTransport provided was invalid. Common causes of this are a default export that is not a class that implements BareTransport if you are using `setTransport()`", 
          λ336dc945f585;
        }
        console.log("set transport to ", λde3b4cac561a, λ1dbeaab61a6a), λ336dc945f585.call(λ2b7c83319813, {
          type: "set"
        });
      } catch (λ336dc945f585) {
        a(λ2b7c83319813, λ336dc945f585, "set");
      } else if ("get" === λc4376881ca09.type) λ2b7c83319813.postMessage({
        type: "get",
        name: λ1dbeaab61a6a
      }); else if ("fetch" === λc4376881ca09.type) try {
        if (!λde3b4cac561a) throw c();
        if (λde3b4cac561a instanceof MessagePort) return void r(λc4376881ca09, λ2b7c83319813);
        λde3b4cac561a.ready || await λde3b4cac561a.init(), await n(λc4376881ca09, λ2b7c83319813, λde3b4cac561a);
      } catch (λ336dc945f585) {
        a(λ2b7c83319813, λ336dc945f585, "fetch");
      } else if ("websocket" === λc4376881ca09.type) try {
        if (!λde3b4cac561a) throw c();
        if (λde3b4cac561a instanceof MessagePort) return void r(λc4376881ca09, λ2b7c83319813);
        λde3b4cac561a.ready || await λde3b4cac561a.init(), await async function(λabd35cca70ba, λde3b4cac561a, λ1dbeaab61a6a) {
          const [λ2b7c83319813, λc4376881ca09] = λ1dbeaab61a6a.connect(new URL(λabd35cca70ba.websocket.url), λabd35cca70ba.websocket.protocols, λabd35cca70ba.websocket.requestHeaders, λde3b4cac561a => {
            λ336dc945f585.call(λabd35cca70ba.websocket.channel, {
              type: "open",
              args: [ λde3b4cac561a ]
            });
          }, λde3b4cac561a => {
            λde3b4cac561a instanceof ArrayBuffer ? λ336dc945f585.call(λabd35cca70ba.websocket.channel, {
              type: "message",
              args: [ λde3b4cac561a ]
            }, [ λde3b4cac561a ]) : λ336dc945f585.call(λabd35cca70ba.websocket.channel, {
              type: "message",
              args: [ λde3b4cac561a ]
            });
          }, (λde3b4cac561a, λ1dbeaab61a6a) => {
            λ336dc945f585.call(λabd35cca70ba.websocket.channel, {
              type: "close",
              args: [ λde3b4cac561a, λ1dbeaab61a6a ]
            });
          }, λde3b4cac561a => {
            λ336dc945f585.call(λabd35cca70ba.websocket.channel, {
              type: "error",
              args: [ λde3b4cac561a ]
            });
          });
          λabd35cca70ba.websocket.channel.onmessage = λ336dc945f585 => {
            "data" === λ336dc945f585.data.type ? λ2b7c83319813(λ336dc945f585.data.data) : "close" === λ336dc945f585.data.type && λc4376881ca09(λ336dc945f585.data.closeCode, λ336dc945f585.data.closeReason);
          }, λ336dc945f585.call(λde3b4cac561a, {
            type: "websocket"
          });
        }(λc4376881ca09, λ2b7c83319813, λde3b4cac561a);
      } catch (λ336dc945f585) {
        a(λ2b7c83319813, λ336dc945f585, "websocket");
      }
    };
  }
  new BroadcastChannel("bare-mux").postMessage({
    type: "refreshPort"
  }), self.onconnect = λ336dc945f585 => {
    l(λ336dc945f585.ports[0]);
  }, console.debug("bare-mux: running v2.1.9 (build dc9dc6e)");
}();
