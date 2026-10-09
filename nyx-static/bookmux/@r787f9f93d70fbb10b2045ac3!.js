!function() {
  "use strict";
  const λd84bd3c174aa = MessagePort.prototype.postMessage;
  let λ681349bc1dc7 = null;
  function a(λd84bd3c174aa, λ681349bc1dc7, λ3f73639bdca2) {
    console.error(`\x65\x72\x72\x6f\x72\x20\x77\x68\x69\x6c\x65\x20\x70\x72\x6f\x63\x65\x73\x73\x69\x6e\x67\x20\x27${λ3f73639bdca2}\x27\x3a\x20`, λ681349bc1dc7), λd84bd3c174aa.postMessage({
      type: "\x65\x72\x72\x6f\x72",
      error: λ681349bc1dc7
    });
  }
  async function n(λ3f73639bdca2, λ7c626c36e0a7, λb32f4e083e2b) {
    const λc5da4169b802 = await λb32f4e083e2b.request(new URL(λ3f73639bdca2.fetch.remote), λ3f73639bdca2.fetch.method, λ3f73639bdca2.fetch.body, λ3f73639bdca2.fetch.headers, null);
    if (!function() {
      if (null === λ681349bc1dc7) {
        const λ3f73639bdca2 = new MessageChannel, λ7c626c36e0a7 = new ReadableStream;
        let λb32f4e083e2b;
        try {
          λd84bd3c174aa.call(λ3f73639bdca2.port1, λ7c626c36e0a7, [ λ7c626c36e0a7 ]), λb32f4e083e2b = !0;
        } catch (λd84bd3c174aa) {
          λb32f4e083e2b = !1;
        }
        return λ681349bc1dc7 = λb32f4e083e2b, λb32f4e083e2b;
      }
      return λ681349bc1dc7;
    }() && λc5da4169b802.body instanceof ReadableStream) {
      const λd84bd3c174aa = new Response(λc5da4169b802.body);
      λc5da4169b802.body = await λd84bd3c174aa.arrayBuffer();
    }
    λc5da4169b802.body instanceof ReadableStream || λc5da4169b802.body instanceof ArrayBuffer ? λd84bd3c174aa.call(λ7c626c36e0a7, {
      type: "\x66\x65\x74\x63\x68",
      fetch: λc5da4169b802
    }, [ λc5da4169b802.body ]) : λd84bd3c174aa.call(λ7c626c36e0a7, {
      type: "\x66\x65\x74\x63\x68",
      fetch: λc5da4169b802
    });
  }
  let λ3f73639bdca2 = null, λ7c626c36e0a7 = "";
  function c() {
    return new Error("\x74\x68\x65\x72\x65\x20\x61\x72\x65\x20\x6e\x6f\x20\x62\x61\x72\x65\x20\x63\x6c\x69\x65\x6e\x74\x73", {
      cause: "\x4e\x6f\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x77\x61\x73\x20\x73\x65\x74\x2e\x20\x54\x72\x79\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x61\x20\x42\x6f\x6f\x6b\x6d\x75\x78\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x61\x6e\x64\x20\x63\x61\x6c\x6c\x69\x6e\x67\x20\x60\x73\x65\x74\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x28\x29\x60\x20\x6f\x72\x20\x60\x73\x65\x74\x4d\x61\x6e\x75\x61\x6c\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x28\x29\x60\x20\x6f\x6e\x20\x69\x74\x20\x62\x65\x66\x6f\x72\x65\x20\x75\x73\x69\x6e\x67\x20\x42\x61\x72\x65\x43\x6c\x69\x65\x6e\x74\x2e"
    });
  }
  function r(λ681349bc1dc7, λ7c626c36e0a7) {
    const λb32f4e083e2b = λ3f73639bdca2;
    let λc5da4169b802 = [ λ7c626c36e0a7 ];
    λ681349bc1dc7.fetch?.body && λc5da4169b802.push(λ681349bc1dc7.fetch.body), λ681349bc1dc7.websocket?.channel && λc5da4169b802.push(λ681349bc1dc7.websocket.channel), 
    λd84bd3c174aa.call(λb32f4e083e2b, {
      message: λ681349bc1dc7,
      port: λ7c626c36e0a7
    }, λc5da4169b802);
  }
  function l(λ681349bc1dc7) {
    λ681349bc1dc7.onmessage = async λ681349bc1dc7 => {
      const λb32f4e083e2b = λ681349bc1dc7.data.port, λc5da4169b802 = λ681349bc1dc7.data.message;
      if ("\x70\x69\x6e\x67" === λc5da4169b802.type) λd84bd3c174aa.call(λb32f4e083e2b, {
        type: "\x70\x6f\x6e\x67"
      }); else if ("\x73\x65\x74" === λc5da4169b802.type) try {
        const λ681349bc1dc7 = async function() {}.constructor;
        if ("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65" === λc5da4169b802.client.function) λ3f73639bdca2 = λc5da4169b802.client.args[0], 
        λ7c626c36e0a7 = `\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65\x20\x28${λc5da4169b802.client.args[1]}\x29`; else try {
          const λd84bd3c174aa = new λ681349bc1dc7(λc5da4169b802.client.function), [λb32f4e083e2b, λ6d423d08c409] = await λd84bd3c174aa();
          λ3f73639bdca2 = new λb32f4e083e2b(...λc5da4169b802.client.args), λ7c626c36e0a7 = λ6d423d08c409;
        } catch (λd84bd3c174aa) {
          throw λd84bd3c174aa.cause = "\x54\x68\x65\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x72\x6f\x76\x69\x64\x65\x64\x20\x77\x61\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e\x20\x43\x6f\x6d\x6d\x6f\x6e\x20\x63\x61\x75\x73\x65\x73\x20\x6f\x66\x20\x74\x68\x69\x73\x20\x61\x72\x65\x20\x61\x20\x64\x65\x66\x61\x75\x6c\x74\x20\x65\x78\x70\x6f\x72\x74\x20\x74\x68\x61\x74\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x20\x63\x6c\x61\x73\x73\x20\x74\x68\x61\x74\x20\x69\x6d\x70\x6c\x65\x6d\x65\x6e\x74\x73\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x69\x66\x20\x79\x6f\x75\x20\x61\x72\x65\x20\x75\x73\x69\x6e\x67\x20\x60\x73\x65\x74\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x28\x29\x60", 
          λd84bd3c174aa;
        }
        console.log("\x73\x65\x74\x20\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x74\x6f\x20", λ3f73639bdca2, λ7c626c36e0a7), λd84bd3c174aa.call(λb32f4e083e2b, {
          type: "\x73\x65\x74"
        });
      } catch (λd84bd3c174aa) {
        a(λb32f4e083e2b, λd84bd3c174aa, "\x73\x65\x74");
      } else if ("\x67\x65\x74" === λc5da4169b802.type) λb32f4e083e2b.postMessage({
        type: "\x67\x65\x74",
        name: λ7c626c36e0a7
      }); else if ("\x66\x65\x74\x63\x68" === λc5da4169b802.type) try {
        if (!λ3f73639bdca2) throw c();
        if (λ3f73639bdca2 instanceof MessagePort) return void r(λc5da4169b802, λb32f4e083e2b);
        λ3f73639bdca2.ready || await λ3f73639bdca2.init(), await n(λc5da4169b802, λb32f4e083e2b, λ3f73639bdca2);
      } catch (λd84bd3c174aa) {
        a(λb32f4e083e2b, λd84bd3c174aa, "\x66\x65\x74\x63\x68");
      } else if ("\x77\x65\x62\x73\x6f\x63\x6b\x65\x74" === λc5da4169b802.type) try {
        if (!λ3f73639bdca2) throw c();
        if (λ3f73639bdca2 instanceof MessagePort) return void r(λc5da4169b802, λb32f4e083e2b);
        λ3f73639bdca2.ready || await λ3f73639bdca2.init(), await async function(λ681349bc1dc7, λ3f73639bdca2, λ7c626c36e0a7) {
          const [λb32f4e083e2b, λc5da4169b802] = λ7c626c36e0a7.connect(new URL(λ681349bc1dc7.websocket.url), λ681349bc1dc7.websocket.protocols, λ681349bc1dc7.websocket.requestHeaders, λ3f73639bdca2 => {
            λd84bd3c174aa.call(λ681349bc1dc7.websocket.channel, {
              type: "\x6f\x70\x65\x6e",
              args: [ λ3f73639bdca2 ]
            });
          }, λ3f73639bdca2 => {
            λ3f73639bdca2 instanceof ArrayBuffer ? λd84bd3c174aa.call(λ681349bc1dc7.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ λ3f73639bdca2 ]
            }, [ λ3f73639bdca2 ]) : λd84bd3c174aa.call(λ681349bc1dc7.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ λ3f73639bdca2 ]
            });
          }, (λ3f73639bdca2, λ7c626c36e0a7) => {
            λd84bd3c174aa.call(λ681349bc1dc7.websocket.channel, {
              type: "\x63\x6c\x6f\x73\x65",
              args: [ λ3f73639bdca2, λ7c626c36e0a7 ]
            });
          }, λ3f73639bdca2 => {
            λd84bd3c174aa.call(λ681349bc1dc7.websocket.channel, {
              type: "\x65\x72\x72\x6f\x72",
              args: [ λ3f73639bdca2 ]
            });
          });
          λ681349bc1dc7.websocket.channel.onmessage = λd84bd3c174aa => {
            "\x64\x61\x74\x61" === λd84bd3c174aa.data.type ? λb32f4e083e2b(λd84bd3c174aa.data.data) : "\x63\x6c\x6f\x73\x65" === λd84bd3c174aa.data.type && λc5da4169b802(λd84bd3c174aa.data.closeCode, λd84bd3c174aa.data.closeReason);
          }, λd84bd3c174aa.call(λ3f73639bdca2, {
            type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74"
          });
        }(λc5da4169b802, λb32f4e083e2b, λ3f73639bdca2);
      } catch (λd84bd3c174aa) {
        a(λb32f4e083e2b, λd84bd3c174aa, "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74");
      }
    };
  }
  new BroadcastChannel("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78").postMessage({
    type: "\x72\x65\x66\x72\x65\x73\x68\x50\x6f\x72\x74"
  }), self.onconnect = λd84bd3c174aa => {
    l(λd84bd3c174aa.ports[0]);
  }, console.debug("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x72\x75\x6e\x6e\x69\x6e\x67\x20\x76\x32\x2e\x31\x2e\x39\x20\x28\x62\x75\x69\x6c\x64\x20\x64\x63\x39\x64\x63\x36\x65\x29");
}();
