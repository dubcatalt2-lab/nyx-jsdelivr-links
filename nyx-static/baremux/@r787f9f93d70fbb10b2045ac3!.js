!function() {
  "use strict";
  const λd5c2c602ee96 = MessagePort.prototype.postMessage;
  let λ076d2dc7c341 = null;
  function a(λd5c2c602ee96, λ076d2dc7c341, λ2a9d70fdca8e) {
    console.error(`error while processing '${λ2a9d70fdca8e}': `, λ076d2dc7c341), λd5c2c602ee96.postMessage({
      type: "error",
      error: λ076d2dc7c341
    });
  }
  async function n(λ2a9d70fdca8e, λdf782c3be42a, λ67b5c9a43404) {
    const λf0692263028a = await λ67b5c9a43404.request(new URL(λ2a9d70fdca8e.fetch.remote), λ2a9d70fdca8e.fetch.method, λ2a9d70fdca8e.fetch.body, λ2a9d70fdca8e.fetch.headers, null);
    if (!function() {
      if (null === λ076d2dc7c341) {
        const λ2a9d70fdca8e = new MessageChannel, λdf782c3be42a = new ReadableStream;
        let λ67b5c9a43404;
        try {
          λd5c2c602ee96.call(λ2a9d70fdca8e.port1, λdf782c3be42a, [ λdf782c3be42a ]), λ67b5c9a43404 = !0;
        } catch (λd5c2c602ee96) {
          λ67b5c9a43404 = !1;
        }
        return λ076d2dc7c341 = λ67b5c9a43404, λ67b5c9a43404;
      }
      return λ076d2dc7c341;
    }() && λf0692263028a.body instanceof ReadableStream) {
      const λd5c2c602ee96 = new Response(λf0692263028a.body);
      λf0692263028a.body = await λd5c2c602ee96.arrayBuffer();
    }
    λf0692263028a.body instanceof ReadableStream || λf0692263028a.body instanceof ArrayBuffer ? λd5c2c602ee96.call(λdf782c3be42a, {
      type: "fetch",
      fetch: λf0692263028a
    }, [ λf0692263028a.body ]) : λd5c2c602ee96.call(λdf782c3be42a, {
      type: "fetch",
      fetch: λf0692263028a
    });
  }
  let λ2a9d70fdca8e = null, λdf782c3be42a = "";
  function c() {
    return new Error("there are no bare clients", {
      cause: "No BareTransport was set. Try creating a BareMuxConnection and calling `setTransport()` or `setManualTransport()` on it before using BareClient."
    });
  }
  function r(λ076d2dc7c341, λdf782c3be42a) {
    const λ67b5c9a43404 = λ2a9d70fdca8e;
    let λf0692263028a = [ λdf782c3be42a ];
    λ076d2dc7c341.fetch?.body && λf0692263028a.push(λ076d2dc7c341.fetch.body), λ076d2dc7c341.websocket?.channel && λf0692263028a.push(λ076d2dc7c341.websocket.channel), 
    λd5c2c602ee96.call(λ67b5c9a43404, {
      message: λ076d2dc7c341,
      port: λdf782c3be42a
    }, λf0692263028a);
  }
  function l(λ076d2dc7c341) {
    λ076d2dc7c341.onmessage = async λ076d2dc7c341 => {
      const λ67b5c9a43404 = λ076d2dc7c341.data.port, λf0692263028a = λ076d2dc7c341.data.message;
      if ("ping" === λf0692263028a.type) λd5c2c602ee96.call(λ67b5c9a43404, {
        type: "pong"
      }); else if ("set" === λf0692263028a.type) try {
        const λ076d2dc7c341 = async function() {}.constructor;
        if ("bare-mux-remote" === λf0692263028a.client.function) λ2a9d70fdca8e = λf0692263028a.client.args[0], 
        λdf782c3be42a = `bare-mux-remote (${λf0692263028a.client.args[1]})`; else try {
          const λd5c2c602ee96 = new λ076d2dc7c341(λf0692263028a.client.function), [λ67b5c9a43404, λacf64645e252] = await λd5c2c602ee96();
          λ2a9d70fdca8e = new λ67b5c9a43404(...λf0692263028a.client.args), λdf782c3be42a = λacf64645e252;
        } catch (λd5c2c602ee96) {
          throw λd5c2c602ee96.cause = "The BareTransport provided was invalid. Common causes of this are a default export that is not a class that implements BareTransport if you are using `setTransport()`", 
          λd5c2c602ee96;
        }
        console.log("set transport to ", λ2a9d70fdca8e, λdf782c3be42a), λd5c2c602ee96.call(λ67b5c9a43404, {
          type: "set"
        });
      } catch (λd5c2c602ee96) {
        a(λ67b5c9a43404, λd5c2c602ee96, "set");
      } else if ("get" === λf0692263028a.type) λ67b5c9a43404.postMessage({
        type: "get",
        name: λdf782c3be42a
      }); else if ("fetch" === λf0692263028a.type) try {
        if (!λ2a9d70fdca8e) throw c();
        if (λ2a9d70fdca8e instanceof MessagePort) return void r(λf0692263028a, λ67b5c9a43404);
        λ2a9d70fdca8e.ready || await λ2a9d70fdca8e.init(), await n(λf0692263028a, λ67b5c9a43404, λ2a9d70fdca8e);
      } catch (λd5c2c602ee96) {
        a(λ67b5c9a43404, λd5c2c602ee96, "fetch");
      } else if ("websocket" === λf0692263028a.type) try {
        if (!λ2a9d70fdca8e) throw c();
        if (λ2a9d70fdca8e instanceof MessagePort) return void r(λf0692263028a, λ67b5c9a43404);
        λ2a9d70fdca8e.ready || await λ2a9d70fdca8e.init(), await async function(λ076d2dc7c341, λ2a9d70fdca8e, λdf782c3be42a) {
          const [λ67b5c9a43404, λf0692263028a] = λdf782c3be42a.connect(new URL(λ076d2dc7c341.websocket.url), λ076d2dc7c341.websocket.protocols, λ076d2dc7c341.websocket.requestHeaders, λ2a9d70fdca8e => {
            λd5c2c602ee96.call(λ076d2dc7c341.websocket.channel, {
              type: "open",
              args: [ λ2a9d70fdca8e ]
            });
          }, λ2a9d70fdca8e => {
            λ2a9d70fdca8e instanceof ArrayBuffer ? λd5c2c602ee96.call(λ076d2dc7c341.websocket.channel, {
              type: "message",
              args: [ λ2a9d70fdca8e ]
            }, [ λ2a9d70fdca8e ]) : λd5c2c602ee96.call(λ076d2dc7c341.websocket.channel, {
              type: "message",
              args: [ λ2a9d70fdca8e ]
            });
          }, (λ2a9d70fdca8e, λdf782c3be42a) => {
            λd5c2c602ee96.call(λ076d2dc7c341.websocket.channel, {
              type: "close",
              args: [ λ2a9d70fdca8e, λdf782c3be42a ]
            });
          }, λ2a9d70fdca8e => {
            λd5c2c602ee96.call(λ076d2dc7c341.websocket.channel, {
              type: "error",
              args: [ λ2a9d70fdca8e ]
            });
          });
          λ076d2dc7c341.websocket.channel.onmessage = λd5c2c602ee96 => {
            "data" === λd5c2c602ee96.data.type ? λ67b5c9a43404(λd5c2c602ee96.data.data) : "close" === λd5c2c602ee96.data.type && λf0692263028a(λd5c2c602ee96.data.closeCode, λd5c2c602ee96.data.closeReason);
          }, λd5c2c602ee96.call(λ2a9d70fdca8e, {
            type: "websocket"
          });
        }(λf0692263028a, λ67b5c9a43404, λ2a9d70fdca8e);
      } catch (λd5c2c602ee96) {
        a(λ67b5c9a43404, λd5c2c602ee96, "websocket");
      }
    };
  }
  new BroadcastChannel("bare-mux").postMessage({
    type: "refreshPort"
  }), self.onconnect = λd5c2c602ee96 => {
    l(λd5c2c602ee96.ports[0]);
  }, console.debug("bare-mux: running v2.1.9 (build dc9dc6e)");
}();
