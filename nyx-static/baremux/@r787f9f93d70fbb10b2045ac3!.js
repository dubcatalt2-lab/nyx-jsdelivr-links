!function() {
  "use strict";
  const λ4edc512ad36c = MessagePort.prototype.postMessage;
  let λe7ebaa71c2bf = null;
  function a(λ4edc512ad36c, λe7ebaa71c2bf, λ007f1d95b8c5) {
    console.error(`\x65\x72\x72\x6f\x72\x20\x77\x68\x69\x6c\x65\x20\x70\x72\x6f\x63\x65\x73\x73\x69\x6e\x67\x20\x27${λ007f1d95b8c5}\x27\x3a\x20`, λe7ebaa71c2bf), λ4edc512ad36c.postMessage({
      type: "\x65\x72\x72\x6f\x72",
      error: λe7ebaa71c2bf
    });
  }
  async function n(λ007f1d95b8c5, λ6c3e9141c59f, λe46f25ae4ff8) {
    const λdf53531297d9 = await λe46f25ae4ff8.request(new URL(λ007f1d95b8c5.fetch.remote), λ007f1d95b8c5.fetch.method, λ007f1d95b8c5.fetch.body, λ007f1d95b8c5.fetch.headers, null);
    if (!function() {
      if (null === λe7ebaa71c2bf) {
        const λ007f1d95b8c5 = new MessageChannel, λ6c3e9141c59f = new ReadableStream;
        let λe46f25ae4ff8;
        try {
          λ4edc512ad36c.call(λ007f1d95b8c5.port1, λ6c3e9141c59f, [ λ6c3e9141c59f ]), λe46f25ae4ff8 = !0;
        } catch (λ4edc512ad36c) {
          λe46f25ae4ff8 = !1;
        }
        return λe7ebaa71c2bf = λe46f25ae4ff8, λe46f25ae4ff8;
      }
      return λe7ebaa71c2bf;
    }() && λdf53531297d9.body instanceof ReadableStream) {
      const λ4edc512ad36c = new Response(λdf53531297d9.body);
      λdf53531297d9.body = await λ4edc512ad36c.arrayBuffer();
    }
    λdf53531297d9.body instanceof ReadableStream || λdf53531297d9.body instanceof ArrayBuffer ? λ4edc512ad36c.call(λ6c3e9141c59f, {
      type: "\x66\x65\x74\x63\x68",
      fetch: λdf53531297d9
    }, [ λdf53531297d9.body ]) : λ4edc512ad36c.call(λ6c3e9141c59f, {
      type: "\x66\x65\x74\x63\x68",
      fetch: λdf53531297d9
    });
  }
  let λ007f1d95b8c5 = null, λ6c3e9141c59f = "";
  function c() {
    return new Error("\x74\x68\x65\x72\x65\x20\x61\x72\x65\x20\x6e\x6f\x20\x62\x61\x72\x65\x20\x63\x6c\x69\x65\x6e\x74\x73", {
      cause: "\x4e\x6f\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x77\x61\x73\x20\x73\x65\x74\x2e\x20\x54\x72\x79\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x61\x20\x42\x61\x72\x65\x4d\x75\x78\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x61\x6e\x64\x20\x63\x61\x6c\x6c\x69\x6e\x67\x20\x60\x73\x65\x74\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x28\x29\x60\x20\x6f\x72\x20\x60\x73\x65\x74\x4d\x61\x6e\x75\x61\x6c\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x28\x29\x60\x20\x6f\x6e\x20\x69\x74\x20\x62\x65\x66\x6f\x72\x65\x20\x75\x73\x69\x6e\x67\x20\x42\x61\x72\x65\x43\x6c\x69\x65\x6e\x74\x2e"
    });
  }
  function r(λe7ebaa71c2bf, λ6c3e9141c59f) {
    const λe46f25ae4ff8 = λ007f1d95b8c5;
    let λdf53531297d9 = [ λ6c3e9141c59f ];
    λe7ebaa71c2bf.fetch?.body && λdf53531297d9.push(λe7ebaa71c2bf.fetch.body), λe7ebaa71c2bf.websocket?.channel && λdf53531297d9.push(λe7ebaa71c2bf.websocket.channel), 
    λ4edc512ad36c.call(λe46f25ae4ff8, {
      message: λe7ebaa71c2bf,
      port: λ6c3e9141c59f
    }, λdf53531297d9);
  }
  function l(λe7ebaa71c2bf) {
    λe7ebaa71c2bf.onmessage = async λe7ebaa71c2bf => {
      const λe46f25ae4ff8 = λe7ebaa71c2bf.data.port, λdf53531297d9 = λe7ebaa71c2bf.data.message;
      if ("\x70\x69\x6e\x67" === λdf53531297d9.type) λ4edc512ad36c.call(λe46f25ae4ff8, {
        type: "\x70\x6f\x6e\x67"
      }); else if ("\x73\x65\x74" === λdf53531297d9.type) try {
        const λe7ebaa71c2bf = async function() {}.constructor;
        if ("\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65" === λdf53531297d9.client.function) λ007f1d95b8c5 = λdf53531297d9.client.args[0], 
        λ6c3e9141c59f = `\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65\x20\x28${λdf53531297d9.client.args[1]}\x29`; else try {
          const λ4edc512ad36c = new λe7ebaa71c2bf(λdf53531297d9.client.function), [λe46f25ae4ff8, λ806b0d642087] = await λ4edc512ad36c();
          λ007f1d95b8c5 = new λe46f25ae4ff8(...λdf53531297d9.client.args), λ6c3e9141c59f = λ806b0d642087;
        } catch (λ4edc512ad36c) {
          throw λ4edc512ad36c.cause = "\x54\x68\x65\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x72\x6f\x76\x69\x64\x65\x64\x20\x77\x61\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e\x20\x43\x6f\x6d\x6d\x6f\x6e\x20\x63\x61\x75\x73\x65\x73\x20\x6f\x66\x20\x74\x68\x69\x73\x20\x61\x72\x65\x20\x61\x20\x64\x65\x66\x61\x75\x6c\x74\x20\x65\x78\x70\x6f\x72\x74\x20\x74\x68\x61\x74\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x20\x63\x6c\x61\x73\x73\x20\x74\x68\x61\x74\x20\x69\x6d\x70\x6c\x65\x6d\x65\x6e\x74\x73\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x69\x66\x20\x79\x6f\x75\x20\x61\x72\x65\x20\x75\x73\x69\x6e\x67\x20\x60\x73\x65\x74\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x28\x29\x60", 
          λ4edc512ad36c;
        }
        console.log("\x73\x65\x74\x20\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x74\x6f\x20", λ007f1d95b8c5, λ6c3e9141c59f), λ4edc512ad36c.call(λe46f25ae4ff8, {
          type: "\x73\x65\x74"
        });
      } catch (λ4edc512ad36c) {
        a(λe46f25ae4ff8, λ4edc512ad36c, "\x73\x65\x74");
      } else if ("\x67\x65\x74" === λdf53531297d9.type) λe46f25ae4ff8.postMessage({
        type: "\x67\x65\x74",
        name: λ6c3e9141c59f
      }); else if ("\x66\x65\x74\x63\x68" === λdf53531297d9.type) try {
        if (!λ007f1d95b8c5) throw c();
        if (λ007f1d95b8c5 instanceof MessagePort) return void r(λdf53531297d9, λe46f25ae4ff8);
        λ007f1d95b8c5.ready || await λ007f1d95b8c5.init(), await n(λdf53531297d9, λe46f25ae4ff8, λ007f1d95b8c5);
      } catch (λ4edc512ad36c) {
        a(λe46f25ae4ff8, λ4edc512ad36c, "\x66\x65\x74\x63\x68");
      } else if ("\x77\x65\x62\x73\x6f\x63\x6b\x65\x74" === λdf53531297d9.type) try {
        if (!λ007f1d95b8c5) throw c();
        if (λ007f1d95b8c5 instanceof MessagePort) return void r(λdf53531297d9, λe46f25ae4ff8);
        λ007f1d95b8c5.ready || await λ007f1d95b8c5.init(), await async function(λe7ebaa71c2bf, λ007f1d95b8c5, λ6c3e9141c59f) {
          const [λe46f25ae4ff8, λdf53531297d9] = λ6c3e9141c59f.connect(new URL(λe7ebaa71c2bf.websocket.url), λe7ebaa71c2bf.websocket.protocols, λe7ebaa71c2bf.websocket.requestHeaders, λ007f1d95b8c5 => {
            λ4edc512ad36c.call(λe7ebaa71c2bf.websocket.channel, {
              type: "\x6f\x70\x65\x6e",
              args: [ λ007f1d95b8c5 ]
            });
          }, λ007f1d95b8c5 => {
            λ007f1d95b8c5 instanceof ArrayBuffer ? λ4edc512ad36c.call(λe7ebaa71c2bf.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ λ007f1d95b8c5 ]
            }, [ λ007f1d95b8c5 ]) : λ4edc512ad36c.call(λe7ebaa71c2bf.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ λ007f1d95b8c5 ]
            });
          }, (λ007f1d95b8c5, λ6c3e9141c59f) => {
            λ4edc512ad36c.call(λe7ebaa71c2bf.websocket.channel, {
              type: "\x63\x6c\x6f\x73\x65",
              args: [ λ007f1d95b8c5, λ6c3e9141c59f ]
            });
          }, λ007f1d95b8c5 => {
            λ4edc512ad36c.call(λe7ebaa71c2bf.websocket.channel, {
              type: "\x65\x72\x72\x6f\x72",
              args: [ λ007f1d95b8c5 ]
            });
          });
          λe7ebaa71c2bf.websocket.channel.onmessage = λ4edc512ad36c => {
            "\x64\x61\x74\x61" === λ4edc512ad36c.data.type ? λe46f25ae4ff8(λ4edc512ad36c.data.data) : "\x63\x6c\x6f\x73\x65" === λ4edc512ad36c.data.type && λdf53531297d9(λ4edc512ad36c.data.closeCode, λ4edc512ad36c.data.closeReason);
          }, λ4edc512ad36c.call(λ007f1d95b8c5, {
            type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74"
          });
        }(λdf53531297d9, λe46f25ae4ff8, λ007f1d95b8c5);
      } catch (λ4edc512ad36c) {
        a(λe46f25ae4ff8, λ4edc512ad36c, "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74");
      }
    };
  }
  new BroadcastChannel("\x62\x61\x72\x65\x2d\x6d\x75\x78").postMessage({
    type: "\x72\x65\x66\x72\x65\x73\x68\x50\x6f\x72\x74"
  }), self.onconnect = λ4edc512ad36c => {
    l(λ4edc512ad36c.ports[0]);
  }, console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x72\x75\x6e\x6e\x69\x6e\x67\x20\x76\x32\x2e\x31\x2e\x39\x20\x28\x62\x75\x69\x6c\x64\x20\x64\x63\x39\x64\x63\x36\x65\x29");
}();
