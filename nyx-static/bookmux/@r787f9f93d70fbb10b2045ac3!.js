!function() {
  "use strict";
  const λ144a5e933dcf = MessagePort.prototype.postMessage;
  let λdf8b5e20e8e8 = null;
  function a(λ144a5e933dcf, λdf8b5e20e8e8, λ78ee373b2ce8) {
    console.error(`\x65\x72\x72\x6f\x72\x20\x77\x68\x69\x6c\x65\x20\x70\x72\x6f\x63\x65\x73\x73\x69\x6e\x67\x20\x27${λ78ee373b2ce8}\x27\x3a\x20`, λdf8b5e20e8e8), λ144a5e933dcf.postMessage({
      type: "\x65\x72\x72\x6f\x72",
      error: λdf8b5e20e8e8
    });
  }
  async function n(λ78ee373b2ce8, λ59b712a1dad2, λ2d39f2bc5d87) {
    const λ1c7c2b344568 = await λ2d39f2bc5d87.request(new URL(λ78ee373b2ce8.fetch.remote), λ78ee373b2ce8.fetch.method, λ78ee373b2ce8.fetch.body, λ78ee373b2ce8.fetch.headers, null);
    if (!function() {
      if (null === λdf8b5e20e8e8) {
        const λ78ee373b2ce8 = new MessageChannel, λ59b712a1dad2 = new ReadableStream;
        let λ2d39f2bc5d87;
        try {
          λ144a5e933dcf.call(λ78ee373b2ce8.port1, λ59b712a1dad2, [ λ59b712a1dad2 ]), λ2d39f2bc5d87 = !0;
        } catch (λ144a5e933dcf) {
          λ2d39f2bc5d87 = !1;
        }
        return λdf8b5e20e8e8 = λ2d39f2bc5d87, λ2d39f2bc5d87;
      }
      return λdf8b5e20e8e8;
    }() && λ1c7c2b344568.body instanceof ReadableStream) {
      const λ144a5e933dcf = new Response(λ1c7c2b344568.body);
      λ1c7c2b344568.body = await λ144a5e933dcf.arrayBuffer();
    }
    λ1c7c2b344568.body instanceof ReadableStream || λ1c7c2b344568.body instanceof ArrayBuffer ? λ144a5e933dcf.call(λ59b712a1dad2, {
      type: "\x66\x65\x74\x63\x68",
      fetch: λ1c7c2b344568
    }, [ λ1c7c2b344568.body ]) : λ144a5e933dcf.call(λ59b712a1dad2, {
      type: "\x66\x65\x74\x63\x68",
      fetch: λ1c7c2b344568
    });
  }
  let λ78ee373b2ce8 = null, λ59b712a1dad2 = "";
  function c() {
    return new Error("\x74\x68\x65\x72\x65\x20\x61\x72\x65\x20\x6e\x6f\x20\x62\x61\x72\x65\x20\x63\x6c\x69\x65\x6e\x74\x73", {
      cause: "\x4e\x6f\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x77\x61\x73\x20\x73\x65\x74\x2e\x20\x54\x72\x79\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x61\x20\x42\x6f\x6f\x6b\x6d\x75\x78\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x61\x6e\x64\x20\x63\x61\x6c\x6c\x69\x6e\x67\x20\x60\x73\x65\x74\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x28\x29\x60\x20\x6f\x72\x20\x60\x73\x65\x74\x4d\x61\x6e\x75\x61\x6c\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x28\x29\x60\x20\x6f\x6e\x20\x69\x74\x20\x62\x65\x66\x6f\x72\x65\x20\x75\x73\x69\x6e\x67\x20\x42\x61\x72\x65\x43\x6c\x69\x65\x6e\x74\x2e"
    });
  }
  function r(λdf8b5e20e8e8, λ59b712a1dad2) {
    const λ2d39f2bc5d87 = λ78ee373b2ce8;
    let λ1c7c2b344568 = [ λ59b712a1dad2 ];
    λdf8b5e20e8e8.fetch?.body && λ1c7c2b344568.push(λdf8b5e20e8e8.fetch.body), λdf8b5e20e8e8.websocket?.channel && λ1c7c2b344568.push(λdf8b5e20e8e8.websocket.channel), 
    λ144a5e933dcf.call(λ2d39f2bc5d87, {
      message: λdf8b5e20e8e8,
      port: λ59b712a1dad2
    }, λ1c7c2b344568);
  }
  function l(λdf8b5e20e8e8) {
    λdf8b5e20e8e8.onmessage = async λdf8b5e20e8e8 => {
      const λ2d39f2bc5d87 = λdf8b5e20e8e8.data.port, λ1c7c2b344568 = λdf8b5e20e8e8.data.message;
      if ("\x70\x69\x6e\x67" === λ1c7c2b344568.type) λ144a5e933dcf.call(λ2d39f2bc5d87, {
        type: "\x70\x6f\x6e\x67"
      }); else if ("\x73\x65\x74" === λ1c7c2b344568.type) try {
        const λdf8b5e20e8e8 = async function() {}.constructor;
        if ("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65" === λ1c7c2b344568.client.function) λ78ee373b2ce8 = λ1c7c2b344568.client.args[0], 
        λ59b712a1dad2 = `\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65\x20\x28${λ1c7c2b344568.client.args[1]}\x29`; else try {
          const λ144a5e933dcf = new λdf8b5e20e8e8(λ1c7c2b344568.client.function), [λ2d39f2bc5d87, λ2858cff463af] = await λ144a5e933dcf();
          λ78ee373b2ce8 = new λ2d39f2bc5d87(...λ1c7c2b344568.client.args), λ59b712a1dad2 = λ2858cff463af;
        } catch (λ144a5e933dcf) {
          throw λ144a5e933dcf.cause = "\x54\x68\x65\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x72\x6f\x76\x69\x64\x65\x64\x20\x77\x61\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e\x20\x43\x6f\x6d\x6d\x6f\x6e\x20\x63\x61\x75\x73\x65\x73\x20\x6f\x66\x20\x74\x68\x69\x73\x20\x61\x72\x65\x20\x61\x20\x64\x65\x66\x61\x75\x6c\x74\x20\x65\x78\x70\x6f\x72\x74\x20\x74\x68\x61\x74\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x20\x63\x6c\x61\x73\x73\x20\x74\x68\x61\x74\x20\x69\x6d\x70\x6c\x65\x6d\x65\x6e\x74\x73\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x69\x66\x20\x79\x6f\x75\x20\x61\x72\x65\x20\x75\x73\x69\x6e\x67\x20\x60\x73\x65\x74\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x28\x29\x60", 
          λ144a5e933dcf;
        }
        console.log("\x73\x65\x74\x20\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x74\x6f\x20", λ78ee373b2ce8, λ59b712a1dad2), λ144a5e933dcf.call(λ2d39f2bc5d87, {
          type: "\x73\x65\x74"
        });
      } catch (λ144a5e933dcf) {
        a(λ2d39f2bc5d87, λ144a5e933dcf, "\x73\x65\x74");
      } else if ("\x67\x65\x74" === λ1c7c2b344568.type) λ2d39f2bc5d87.postMessage({
        type: "\x67\x65\x74",
        name: λ59b712a1dad2
      }); else if ("\x66\x65\x74\x63\x68" === λ1c7c2b344568.type) try {
        if (!λ78ee373b2ce8) throw c();
        if (λ78ee373b2ce8 instanceof MessagePort) return void r(λ1c7c2b344568, λ2d39f2bc5d87);
        λ78ee373b2ce8.ready || await λ78ee373b2ce8.init(), await n(λ1c7c2b344568, λ2d39f2bc5d87, λ78ee373b2ce8);
      } catch (λ144a5e933dcf) {
        a(λ2d39f2bc5d87, λ144a5e933dcf, "\x66\x65\x74\x63\x68");
      } else if ("\x77\x65\x62\x73\x6f\x63\x6b\x65\x74" === λ1c7c2b344568.type) try {
        if (!λ78ee373b2ce8) throw c();
        if (λ78ee373b2ce8 instanceof MessagePort) return void r(λ1c7c2b344568, λ2d39f2bc5d87);
        λ78ee373b2ce8.ready || await λ78ee373b2ce8.init(), await async function(λdf8b5e20e8e8, λ78ee373b2ce8, λ59b712a1dad2) {
          const [λ2d39f2bc5d87, λ1c7c2b344568] = λ59b712a1dad2.connect(new URL(λdf8b5e20e8e8.websocket.url), λdf8b5e20e8e8.websocket.protocols, λdf8b5e20e8e8.websocket.requestHeaders, λ78ee373b2ce8 => {
            λ144a5e933dcf.call(λdf8b5e20e8e8.websocket.channel, {
              type: "\x6f\x70\x65\x6e",
              args: [ λ78ee373b2ce8 ]
            });
          }, λ78ee373b2ce8 => {
            λ78ee373b2ce8 instanceof ArrayBuffer ? λ144a5e933dcf.call(λdf8b5e20e8e8.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ λ78ee373b2ce8 ]
            }, [ λ78ee373b2ce8 ]) : λ144a5e933dcf.call(λdf8b5e20e8e8.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ λ78ee373b2ce8 ]
            });
          }, (λ78ee373b2ce8, λ59b712a1dad2) => {
            λ144a5e933dcf.call(λdf8b5e20e8e8.websocket.channel, {
              type: "\x63\x6c\x6f\x73\x65",
              args: [ λ78ee373b2ce8, λ59b712a1dad2 ]
            });
          }, λ78ee373b2ce8 => {
            λ144a5e933dcf.call(λdf8b5e20e8e8.websocket.channel, {
              type: "\x65\x72\x72\x6f\x72",
              args: [ λ78ee373b2ce8 ]
            });
          });
          λdf8b5e20e8e8.websocket.channel.onmessage = λ144a5e933dcf => {
            "\x64\x61\x74\x61" === λ144a5e933dcf.data.type ? λ2d39f2bc5d87(λ144a5e933dcf.data.data) : "\x63\x6c\x6f\x73\x65" === λ144a5e933dcf.data.type && λ1c7c2b344568(λ144a5e933dcf.data.closeCode, λ144a5e933dcf.data.closeReason);
          }, λ144a5e933dcf.call(λ78ee373b2ce8, {
            type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74"
          });
        }(λ1c7c2b344568, λ2d39f2bc5d87, λ78ee373b2ce8);
      } catch (λ144a5e933dcf) {
        a(λ2d39f2bc5d87, λ144a5e933dcf, "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74");
      }
    };
  }
  new BroadcastChannel("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78").postMessage({
    type: "\x72\x65\x66\x72\x65\x73\x68\x50\x6f\x72\x74"
  }), self.onconnect = λ144a5e933dcf => {
    l(λ144a5e933dcf.ports[0]);
  }, console.debug("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x72\x75\x6e\x6e\x69\x6e\x67\x20\x76\x32\x2e\x31\x2e\x39\x20\x28\x62\x75\x69\x6c\x64\x20\x64\x63\x39\x64\x63\x36\x65\x29");
}();
