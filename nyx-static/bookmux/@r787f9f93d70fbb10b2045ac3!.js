!function() {
  "use strict";
  const λ0c5b7ba950b9 = MessagePort.prototype.postMessage;
  let λ958d9a28c62c = null;
  function a(λ0c5b7ba950b9, λ958d9a28c62c, λ3e2d34b0fb1e) {
    console.error(`\x65\x72\x72\x6f\x72\x20\x77\x68\x69\x6c\x65\x20\x70\x72\x6f\x63\x65\x73\x73\x69\x6e\x67\x20\x27${λ3e2d34b0fb1e}\x27\x3a\x20`, λ958d9a28c62c), λ0c5b7ba950b9.postMessage({
      type: "\x65\x72\x72\x6f\x72",
      error: λ958d9a28c62c
    });
  }
  async function n(λ3e2d34b0fb1e, λcaccde32db14, λce089e8ec26c) {
    const λ6442ab2bd83f = await λce089e8ec26c.request(new URL(λ3e2d34b0fb1e.fetch.remote), λ3e2d34b0fb1e.fetch.method, λ3e2d34b0fb1e.fetch.body, λ3e2d34b0fb1e.fetch.headers, null);
    if (!function() {
      if (null === λ958d9a28c62c) {
        const λ3e2d34b0fb1e = new MessageChannel, λcaccde32db14 = new ReadableStream;
        let λce089e8ec26c;
        try {
          λ0c5b7ba950b9.call(λ3e2d34b0fb1e.port1, λcaccde32db14, [ λcaccde32db14 ]), λce089e8ec26c = !0;
        } catch (λ0c5b7ba950b9) {
          λce089e8ec26c = !1;
        }
        return λ958d9a28c62c = λce089e8ec26c, λce089e8ec26c;
      }
      return λ958d9a28c62c;
    }() && λ6442ab2bd83f.body instanceof ReadableStream) {
      const λ0c5b7ba950b9 = new Response(λ6442ab2bd83f.body);
      λ6442ab2bd83f.body = await λ0c5b7ba950b9.arrayBuffer();
    }
    λ6442ab2bd83f.body instanceof ReadableStream || λ6442ab2bd83f.body instanceof ArrayBuffer ? λ0c5b7ba950b9.call(λcaccde32db14, {
      type: "\x66\x65\x74\x63\x68",
      fetch: λ6442ab2bd83f
    }, [ λ6442ab2bd83f.body ]) : λ0c5b7ba950b9.call(λcaccde32db14, {
      type: "\x66\x65\x74\x63\x68",
      fetch: λ6442ab2bd83f
    });
  }
  let λ3e2d34b0fb1e = null, λcaccde32db14 = "";
  function c() {
    return new Error("\x74\x68\x65\x72\x65\x20\x61\x72\x65\x20\x6e\x6f\x20\x62\x61\x72\x65\x20\x63\x6c\x69\x65\x6e\x74\x73", {
      cause: "\x4e\x6f\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x77\x61\x73\x20\x73\x65\x74\x2e\x20\x54\x72\x79\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x61\x20\x42\x6f\x6f\x6b\x6d\x75\x78\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x61\x6e\x64\x20\x63\x61\x6c\x6c\x69\x6e\x67\x20\x60\x73\x65\x74\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x28\x29\x60\x20\x6f\x72\x20\x60\x73\x65\x74\x4d\x61\x6e\x75\x61\x6c\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x28\x29\x60\x20\x6f\x6e\x20\x69\x74\x20\x62\x65\x66\x6f\x72\x65\x20\x75\x73\x69\x6e\x67\x20\x42\x61\x72\x65\x43\x6c\x69\x65\x6e\x74\x2e"
    });
  }
  function r(λ958d9a28c62c, λcaccde32db14) {
    const λce089e8ec26c = λ3e2d34b0fb1e;
    let λ6442ab2bd83f = [ λcaccde32db14 ];
    λ958d9a28c62c.fetch?.body && λ6442ab2bd83f.push(λ958d9a28c62c.fetch.body), λ958d9a28c62c.websocket?.channel && λ6442ab2bd83f.push(λ958d9a28c62c.websocket.channel), 
    λ0c5b7ba950b9.call(λce089e8ec26c, {
      message: λ958d9a28c62c,
      port: λcaccde32db14
    }, λ6442ab2bd83f);
  }
  function l(λ958d9a28c62c) {
    λ958d9a28c62c.onmessage = async λ958d9a28c62c => {
      const λce089e8ec26c = λ958d9a28c62c.data.port, λ6442ab2bd83f = λ958d9a28c62c.data.message;
      if ("\x70\x69\x6e\x67" === λ6442ab2bd83f.type) λ0c5b7ba950b9.call(λce089e8ec26c, {
        type: "\x70\x6f\x6e\x67"
      }); else if ("\x73\x65\x74" === λ6442ab2bd83f.type) try {
        const λ958d9a28c62c = async function() {}.constructor;
        if ("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65" === λ6442ab2bd83f.client.function) λ3e2d34b0fb1e = λ6442ab2bd83f.client.args[0], 
        λcaccde32db14 = `\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65\x20\x28${λ6442ab2bd83f.client.args[1]}\x29`; else try {
          const λ0c5b7ba950b9 = new λ958d9a28c62c(λ6442ab2bd83f.client.function), [λce089e8ec26c, λb3c5386bc60e] = await λ0c5b7ba950b9();
          λ3e2d34b0fb1e = new λce089e8ec26c(...λ6442ab2bd83f.client.args), λcaccde32db14 = λb3c5386bc60e;
        } catch (λ0c5b7ba950b9) {
          throw λ0c5b7ba950b9.cause = "\x54\x68\x65\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x72\x6f\x76\x69\x64\x65\x64\x20\x77\x61\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e\x20\x43\x6f\x6d\x6d\x6f\x6e\x20\x63\x61\x75\x73\x65\x73\x20\x6f\x66\x20\x74\x68\x69\x73\x20\x61\x72\x65\x20\x61\x20\x64\x65\x66\x61\x75\x6c\x74\x20\x65\x78\x70\x6f\x72\x74\x20\x74\x68\x61\x74\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x20\x63\x6c\x61\x73\x73\x20\x74\x68\x61\x74\x20\x69\x6d\x70\x6c\x65\x6d\x65\x6e\x74\x73\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x69\x66\x20\x79\x6f\x75\x20\x61\x72\x65\x20\x75\x73\x69\x6e\x67\x20\x60\x73\x65\x74\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x28\x29\x60", 
          λ0c5b7ba950b9;
        }
        console.log("\x73\x65\x74\x20\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x74\x6f\x20", λ3e2d34b0fb1e, λcaccde32db14), λ0c5b7ba950b9.call(λce089e8ec26c, {
          type: "\x73\x65\x74"
        });
      } catch (λ0c5b7ba950b9) {
        a(λce089e8ec26c, λ0c5b7ba950b9, "\x73\x65\x74");
      } else if ("\x67\x65\x74" === λ6442ab2bd83f.type) λce089e8ec26c.postMessage({
        type: "\x67\x65\x74",
        name: λcaccde32db14
      }); else if ("\x66\x65\x74\x63\x68" === λ6442ab2bd83f.type) try {
        if (!λ3e2d34b0fb1e) throw c();
        if (λ3e2d34b0fb1e instanceof MessagePort) return void r(λ6442ab2bd83f, λce089e8ec26c);
        λ3e2d34b0fb1e.ready || await λ3e2d34b0fb1e.init(), await n(λ6442ab2bd83f, λce089e8ec26c, λ3e2d34b0fb1e);
      } catch (λ0c5b7ba950b9) {
        a(λce089e8ec26c, λ0c5b7ba950b9, "\x66\x65\x74\x63\x68");
      } else if ("\x77\x65\x62\x73\x6f\x63\x6b\x65\x74" === λ6442ab2bd83f.type) try {
        if (!λ3e2d34b0fb1e) throw c();
        if (λ3e2d34b0fb1e instanceof MessagePort) return void r(λ6442ab2bd83f, λce089e8ec26c);
        λ3e2d34b0fb1e.ready || await λ3e2d34b0fb1e.init(), await async function(λ958d9a28c62c, λ3e2d34b0fb1e, λcaccde32db14) {
          const [λce089e8ec26c, λ6442ab2bd83f] = λcaccde32db14.connect(new URL(λ958d9a28c62c.websocket.url), λ958d9a28c62c.websocket.protocols, λ958d9a28c62c.websocket.requestHeaders, λ3e2d34b0fb1e => {
            λ0c5b7ba950b9.call(λ958d9a28c62c.websocket.channel, {
              type: "\x6f\x70\x65\x6e",
              args: [ λ3e2d34b0fb1e ]
            });
          }, λ3e2d34b0fb1e => {
            λ3e2d34b0fb1e instanceof ArrayBuffer ? λ0c5b7ba950b9.call(λ958d9a28c62c.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ λ3e2d34b0fb1e ]
            }, [ λ3e2d34b0fb1e ]) : λ0c5b7ba950b9.call(λ958d9a28c62c.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ λ3e2d34b0fb1e ]
            });
          }, (λ3e2d34b0fb1e, λcaccde32db14) => {
            λ0c5b7ba950b9.call(λ958d9a28c62c.websocket.channel, {
              type: "\x63\x6c\x6f\x73\x65",
              args: [ λ3e2d34b0fb1e, λcaccde32db14 ]
            });
          }, λ3e2d34b0fb1e => {
            λ0c5b7ba950b9.call(λ958d9a28c62c.websocket.channel, {
              type: "\x65\x72\x72\x6f\x72",
              args: [ λ3e2d34b0fb1e ]
            });
          });
          λ958d9a28c62c.websocket.channel.onmessage = λ0c5b7ba950b9 => {
            "\x64\x61\x74\x61" === λ0c5b7ba950b9.data.type ? λce089e8ec26c(λ0c5b7ba950b9.data.data) : "\x63\x6c\x6f\x73\x65" === λ0c5b7ba950b9.data.type && λ6442ab2bd83f(λ0c5b7ba950b9.data.closeCode, λ0c5b7ba950b9.data.closeReason);
          }, λ0c5b7ba950b9.call(λ3e2d34b0fb1e, {
            type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74"
          });
        }(λ6442ab2bd83f, λce089e8ec26c, λ3e2d34b0fb1e);
      } catch (λ0c5b7ba950b9) {
        a(λce089e8ec26c, λ0c5b7ba950b9, "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74");
      }
    };
  }
  new BroadcastChannel("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78").postMessage({
    type: "\x72\x65\x66\x72\x65\x73\x68\x50\x6f\x72\x74"
  }), self.onconnect = λ0c5b7ba950b9 => {
    l(λ0c5b7ba950b9.ports[0]);
  }, console.debug("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x72\x75\x6e\x6e\x69\x6e\x67\x20\x76\x32\x2e\x31\x2e\x39\x20\x28\x62\x75\x69\x6c\x64\x20\x64\x63\x39\x64\x63\x36\x65\x29");
}();
