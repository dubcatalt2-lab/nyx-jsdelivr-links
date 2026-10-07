!function() {
  "use strict";
  const λ83ea7d0604fc = MessagePort.prototype.postMessage;
  let λ0ce5c3b22e9f = null;
  function a(λ83ea7d0604fc, λ0ce5c3b22e9f, λb21843714a4d) {
    console.error(`\x65\x72\x72\x6f\x72\x20\x77\x68\x69\x6c\x65\x20\x70\x72\x6f\x63\x65\x73\x73\x69\x6e\x67\x20\x27${λb21843714a4d}\x27\x3a\x20`, λ0ce5c3b22e9f), λ83ea7d0604fc.postMessage({
      type: "\x65\x72\x72\x6f\x72",
      error: λ0ce5c3b22e9f
    });
  }
  async function n(λb21843714a4d, λ95534400af7b, λ425c8af03741) {
    const λf4ebbc86d369 = await λ425c8af03741.request(new URL(λb21843714a4d.fetch.remote), λb21843714a4d.fetch.method, λb21843714a4d.fetch.body, λb21843714a4d.fetch.headers, null);
    if (!function() {
      if (null === λ0ce5c3b22e9f) {
        const λb21843714a4d = new MessageChannel, λ95534400af7b = new ReadableStream;
        let λ425c8af03741;
        try {
          λ83ea7d0604fc.call(λb21843714a4d.port1, λ95534400af7b, [ λ95534400af7b ]), λ425c8af03741 = !0;
        } catch (λ83ea7d0604fc) {
          λ425c8af03741 = !1;
        }
        return λ0ce5c3b22e9f = λ425c8af03741, λ425c8af03741;
      }
      return λ0ce5c3b22e9f;
    }() && λf4ebbc86d369.body instanceof ReadableStream) {
      const λ83ea7d0604fc = new Response(λf4ebbc86d369.body);
      λf4ebbc86d369.body = await λ83ea7d0604fc.arrayBuffer();
    }
    λf4ebbc86d369.body instanceof ReadableStream || λf4ebbc86d369.body instanceof ArrayBuffer ? λ83ea7d0604fc.call(λ95534400af7b, {
      type: "\x66\x65\x74\x63\x68",
      fetch: λf4ebbc86d369
    }, [ λf4ebbc86d369.body ]) : λ83ea7d0604fc.call(λ95534400af7b, {
      type: "\x66\x65\x74\x63\x68",
      fetch: λf4ebbc86d369
    });
  }
  let λb21843714a4d = null, λ95534400af7b = "";
  function c() {
    return new Error("\x74\x68\x65\x72\x65\x20\x61\x72\x65\x20\x6e\x6f\x20\x62\x61\x72\x65\x20\x63\x6c\x69\x65\x6e\x74\x73", {
      cause: "\x4e\x6f\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x77\x61\x73\x20\x73\x65\x74\x2e\x20\x54\x72\x79\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x61\x20\x42\x61\x72\x65\x4d\x75\x78\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x61\x6e\x64\x20\x63\x61\x6c\x6c\x69\x6e\x67\x20\x60\x73\x65\x74\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x28\x29\x60\x20\x6f\x72\x20\x60\x73\x65\x74\x4d\x61\x6e\x75\x61\x6c\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x28\x29\x60\x20\x6f\x6e\x20\x69\x74\x20\x62\x65\x66\x6f\x72\x65\x20\x75\x73\x69\x6e\x67\x20\x42\x61\x72\x65\x43\x6c\x69\x65\x6e\x74\x2e"
    });
  }
  function r(λ0ce5c3b22e9f, λ95534400af7b) {
    const λ425c8af03741 = λb21843714a4d;
    let λf4ebbc86d369 = [ λ95534400af7b ];
    λ0ce5c3b22e9f.fetch?.body && λf4ebbc86d369.push(λ0ce5c3b22e9f.fetch.body), λ0ce5c3b22e9f.websocket?.channel && λf4ebbc86d369.push(λ0ce5c3b22e9f.websocket.channel), 
    λ83ea7d0604fc.call(λ425c8af03741, {
      message: λ0ce5c3b22e9f,
      port: λ95534400af7b
    }, λf4ebbc86d369);
  }
  function l(λ0ce5c3b22e9f) {
    λ0ce5c3b22e9f.onmessage = async λ0ce5c3b22e9f => {
      const λ425c8af03741 = λ0ce5c3b22e9f.data.port, λf4ebbc86d369 = λ0ce5c3b22e9f.data.message;
      if ("\x70\x69\x6e\x67" === λf4ebbc86d369.type) λ83ea7d0604fc.call(λ425c8af03741, {
        type: "\x70\x6f\x6e\x67"
      }); else if ("\x73\x65\x74" === λf4ebbc86d369.type) try {
        const λ0ce5c3b22e9f = async function() {}.constructor;
        if ("\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65" === λf4ebbc86d369.client.function) λb21843714a4d = λf4ebbc86d369.client.args[0], 
        λ95534400af7b = `\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65\x20\x28${λf4ebbc86d369.client.args[1]}\x29`; else try {
          const λ83ea7d0604fc = new λ0ce5c3b22e9f(λf4ebbc86d369.client.function), [λ425c8af03741, λ538efa67ac35] = await λ83ea7d0604fc();
          λb21843714a4d = new λ425c8af03741(...λf4ebbc86d369.client.args), λ95534400af7b = λ538efa67ac35;
        } catch (λ83ea7d0604fc) {
          throw λ83ea7d0604fc.cause = "\x54\x68\x65\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x72\x6f\x76\x69\x64\x65\x64\x20\x77\x61\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e\x20\x43\x6f\x6d\x6d\x6f\x6e\x20\x63\x61\x75\x73\x65\x73\x20\x6f\x66\x20\x74\x68\x69\x73\x20\x61\x72\x65\x20\x61\x20\x64\x65\x66\x61\x75\x6c\x74\x20\x65\x78\x70\x6f\x72\x74\x20\x74\x68\x61\x74\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x20\x63\x6c\x61\x73\x73\x20\x74\x68\x61\x74\x20\x69\x6d\x70\x6c\x65\x6d\x65\x6e\x74\x73\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x69\x66\x20\x79\x6f\x75\x20\x61\x72\x65\x20\x75\x73\x69\x6e\x67\x20\x60\x73\x65\x74\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x28\x29\x60", 
          λ83ea7d0604fc;
        }
        console.log("\x73\x65\x74\x20\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x74\x6f\x20", λb21843714a4d, λ95534400af7b), λ83ea7d0604fc.call(λ425c8af03741, {
          type: "\x73\x65\x74"
        });
      } catch (λ83ea7d0604fc) {
        a(λ425c8af03741, λ83ea7d0604fc, "\x73\x65\x74");
      } else if ("\x67\x65\x74" === λf4ebbc86d369.type) λ425c8af03741.postMessage({
        type: "\x67\x65\x74",
        name: λ95534400af7b
      }); else if ("\x66\x65\x74\x63\x68" === λf4ebbc86d369.type) try {
        if (!λb21843714a4d) throw c();
        if (λb21843714a4d instanceof MessagePort) return void r(λf4ebbc86d369, λ425c8af03741);
        λb21843714a4d.ready || await λb21843714a4d.init(), await n(λf4ebbc86d369, λ425c8af03741, λb21843714a4d);
      } catch (λ83ea7d0604fc) {
        a(λ425c8af03741, λ83ea7d0604fc, "\x66\x65\x74\x63\x68");
      } else if ("\x77\x65\x62\x73\x6f\x63\x6b\x65\x74" === λf4ebbc86d369.type) try {
        if (!λb21843714a4d) throw c();
        if (λb21843714a4d instanceof MessagePort) return void r(λf4ebbc86d369, λ425c8af03741);
        λb21843714a4d.ready || await λb21843714a4d.init(), await async function(λ0ce5c3b22e9f, λb21843714a4d, λ95534400af7b) {
          const [λ425c8af03741, λf4ebbc86d369] = λ95534400af7b.connect(new URL(λ0ce5c3b22e9f.websocket.url), λ0ce5c3b22e9f.websocket.protocols, λ0ce5c3b22e9f.websocket.requestHeaders, λb21843714a4d => {
            λ83ea7d0604fc.call(λ0ce5c3b22e9f.websocket.channel, {
              type: "\x6f\x70\x65\x6e",
              args: [ λb21843714a4d ]
            });
          }, λb21843714a4d => {
            λb21843714a4d instanceof ArrayBuffer ? λ83ea7d0604fc.call(λ0ce5c3b22e9f.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ λb21843714a4d ]
            }, [ λb21843714a4d ]) : λ83ea7d0604fc.call(λ0ce5c3b22e9f.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ λb21843714a4d ]
            });
          }, (λb21843714a4d, λ95534400af7b) => {
            λ83ea7d0604fc.call(λ0ce5c3b22e9f.websocket.channel, {
              type: "\x63\x6c\x6f\x73\x65",
              args: [ λb21843714a4d, λ95534400af7b ]
            });
          }, λb21843714a4d => {
            λ83ea7d0604fc.call(λ0ce5c3b22e9f.websocket.channel, {
              type: "\x65\x72\x72\x6f\x72",
              args: [ λb21843714a4d ]
            });
          });
          λ0ce5c3b22e9f.websocket.channel.onmessage = λ83ea7d0604fc => {
            "\x64\x61\x74\x61" === λ83ea7d0604fc.data.type ? λ425c8af03741(λ83ea7d0604fc.data.data) : "\x63\x6c\x6f\x73\x65" === λ83ea7d0604fc.data.type && λf4ebbc86d369(λ83ea7d0604fc.data.closeCode, λ83ea7d0604fc.data.closeReason);
          }, λ83ea7d0604fc.call(λb21843714a4d, {
            type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74"
          });
        }(λf4ebbc86d369, λ425c8af03741, λb21843714a4d);
      } catch (λ83ea7d0604fc) {
        a(λ425c8af03741, λ83ea7d0604fc, "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74");
      }
    };
  }
  new BroadcastChannel("\x62\x61\x72\x65\x2d\x6d\x75\x78").postMessage({
    type: "\x72\x65\x66\x72\x65\x73\x68\x50\x6f\x72\x74"
  }), self.onconnect = λ83ea7d0604fc => {
    l(λ83ea7d0604fc.ports[0]);
  }, console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x72\x75\x6e\x6e\x69\x6e\x67\x20\x76\x32\x2e\x31\x2e\x39\x20\x28\x62\x75\x69\x6c\x64\x20\x64\x63\x39\x64\x63\x36\x65\x29");
}();
