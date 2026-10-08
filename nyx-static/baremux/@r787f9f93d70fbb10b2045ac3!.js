!function() {
  "use strict";
  const λ9bdc6579c14a = MessagePort.prototype.postMessage;
  let λ41b5cc912443 = null;
  function a(λ9bdc6579c14a, λ41b5cc912443, λ664cf4f860bc) {
    console.error(`\x65\x72\x72\x6f\x72\x20\x77\x68\x69\x6c\x65\x20\x70\x72\x6f\x63\x65\x73\x73\x69\x6e\x67\x20\x27${λ664cf4f860bc}\x27\x3a\x20`, λ41b5cc912443), λ9bdc6579c14a.postMessage({
      type: "\x65\x72\x72\x6f\x72",
      error: λ41b5cc912443
    });
  }
  async function n(λ664cf4f860bc, λ4e33bd1cd00f, λ5a8a94ab4623) {
    const λb3533d56852b = await λ5a8a94ab4623.request(new URL(λ664cf4f860bc.fetch.remote), λ664cf4f860bc.fetch.method, λ664cf4f860bc.fetch.body, λ664cf4f860bc.fetch.headers, null);
    if (!function() {
      if (null === λ41b5cc912443) {
        const λ664cf4f860bc = new MessageChannel, λ4e33bd1cd00f = new ReadableStream;
        let λ5a8a94ab4623;
        try {
          λ9bdc6579c14a.call(λ664cf4f860bc.port1, λ4e33bd1cd00f, [ λ4e33bd1cd00f ]), λ5a8a94ab4623 = !0;
        } catch (λ9bdc6579c14a) {
          λ5a8a94ab4623 = !1;
        }
        return λ41b5cc912443 = λ5a8a94ab4623, λ5a8a94ab4623;
      }
      return λ41b5cc912443;
    }() && λb3533d56852b.body instanceof ReadableStream) {
      const λ9bdc6579c14a = new Response(λb3533d56852b.body);
      λb3533d56852b.body = await λ9bdc6579c14a.arrayBuffer();
    }
    λb3533d56852b.body instanceof ReadableStream || λb3533d56852b.body instanceof ArrayBuffer ? λ9bdc6579c14a.call(λ4e33bd1cd00f, {
      type: "\x66\x65\x74\x63\x68",
      fetch: λb3533d56852b
    }, [ λb3533d56852b.body ]) : λ9bdc6579c14a.call(λ4e33bd1cd00f, {
      type: "\x66\x65\x74\x63\x68",
      fetch: λb3533d56852b
    });
  }
  let λ664cf4f860bc = null, λ4e33bd1cd00f = "";
  function c() {
    return new Error("\x74\x68\x65\x72\x65\x20\x61\x72\x65\x20\x6e\x6f\x20\x62\x61\x72\x65\x20\x63\x6c\x69\x65\x6e\x74\x73", {
      cause: "\x4e\x6f\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x77\x61\x73\x20\x73\x65\x74\x2e\x20\x54\x72\x79\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x61\x20\x42\x61\x72\x65\x4d\x75\x78\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x61\x6e\x64\x20\x63\x61\x6c\x6c\x69\x6e\x67\x20\x60\x73\x65\x74\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x28\x29\x60\x20\x6f\x72\x20\x60\x73\x65\x74\x4d\x61\x6e\x75\x61\x6c\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x28\x29\x60\x20\x6f\x6e\x20\x69\x74\x20\x62\x65\x66\x6f\x72\x65\x20\x75\x73\x69\x6e\x67\x20\x42\x61\x72\x65\x43\x6c\x69\x65\x6e\x74\x2e"
    });
  }
  function r(λ41b5cc912443, λ4e33bd1cd00f) {
    const λ5a8a94ab4623 = λ664cf4f860bc;
    let λb3533d56852b = [ λ4e33bd1cd00f ];
    λ41b5cc912443.fetch?.body && λb3533d56852b.push(λ41b5cc912443.fetch.body), λ41b5cc912443.websocket?.channel && λb3533d56852b.push(λ41b5cc912443.websocket.channel), 
    λ9bdc6579c14a.call(λ5a8a94ab4623, {
      message: λ41b5cc912443,
      port: λ4e33bd1cd00f
    }, λb3533d56852b);
  }
  function l(λ41b5cc912443) {
    λ41b5cc912443.onmessage = async λ41b5cc912443 => {
      const λ5a8a94ab4623 = λ41b5cc912443.data.port, λb3533d56852b = λ41b5cc912443.data.message;
      if ("\x70\x69\x6e\x67" === λb3533d56852b.type) λ9bdc6579c14a.call(λ5a8a94ab4623, {
        type: "\x70\x6f\x6e\x67"
      }); else if ("\x73\x65\x74" === λb3533d56852b.type) try {
        const λ41b5cc912443 = async function() {}.constructor;
        if ("\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65" === λb3533d56852b.client.function) λ664cf4f860bc = λb3533d56852b.client.args[0], 
        λ4e33bd1cd00f = `\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65\x20\x28${λb3533d56852b.client.args[1]}\x29`; else try {
          const λ9bdc6579c14a = new λ41b5cc912443(λb3533d56852b.client.function), [λ5a8a94ab4623, λbcff52f925fd] = await λ9bdc6579c14a();
          λ664cf4f860bc = new λ5a8a94ab4623(...λb3533d56852b.client.args), λ4e33bd1cd00f = λbcff52f925fd;
        } catch (λ9bdc6579c14a) {
          throw λ9bdc6579c14a.cause = "\x54\x68\x65\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x72\x6f\x76\x69\x64\x65\x64\x20\x77\x61\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e\x20\x43\x6f\x6d\x6d\x6f\x6e\x20\x63\x61\x75\x73\x65\x73\x20\x6f\x66\x20\x74\x68\x69\x73\x20\x61\x72\x65\x20\x61\x20\x64\x65\x66\x61\x75\x6c\x74\x20\x65\x78\x70\x6f\x72\x74\x20\x74\x68\x61\x74\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x20\x63\x6c\x61\x73\x73\x20\x74\x68\x61\x74\x20\x69\x6d\x70\x6c\x65\x6d\x65\x6e\x74\x73\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x69\x66\x20\x79\x6f\x75\x20\x61\x72\x65\x20\x75\x73\x69\x6e\x67\x20\x60\x73\x65\x74\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x28\x29\x60", 
          λ9bdc6579c14a;
        }
        console.log("\x73\x65\x74\x20\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x74\x6f\x20", λ664cf4f860bc, λ4e33bd1cd00f), λ9bdc6579c14a.call(λ5a8a94ab4623, {
          type: "\x73\x65\x74"
        });
      } catch (λ9bdc6579c14a) {
        a(λ5a8a94ab4623, λ9bdc6579c14a, "\x73\x65\x74");
      } else if ("\x67\x65\x74" === λb3533d56852b.type) λ5a8a94ab4623.postMessage({
        type: "\x67\x65\x74",
        name: λ4e33bd1cd00f
      }); else if ("\x66\x65\x74\x63\x68" === λb3533d56852b.type) try {
        if (!λ664cf4f860bc) throw c();
        if (λ664cf4f860bc instanceof MessagePort) return void r(λb3533d56852b, λ5a8a94ab4623);
        λ664cf4f860bc.ready || await λ664cf4f860bc.init(), await n(λb3533d56852b, λ5a8a94ab4623, λ664cf4f860bc);
      } catch (λ9bdc6579c14a) {
        a(λ5a8a94ab4623, λ9bdc6579c14a, "\x66\x65\x74\x63\x68");
      } else if ("\x77\x65\x62\x73\x6f\x63\x6b\x65\x74" === λb3533d56852b.type) try {
        if (!λ664cf4f860bc) throw c();
        if (λ664cf4f860bc instanceof MessagePort) return void r(λb3533d56852b, λ5a8a94ab4623);
        λ664cf4f860bc.ready || await λ664cf4f860bc.init(), await async function(λ41b5cc912443, λ664cf4f860bc, λ4e33bd1cd00f) {
          const [λ5a8a94ab4623, λb3533d56852b] = λ4e33bd1cd00f.connect(new URL(λ41b5cc912443.websocket.url), λ41b5cc912443.websocket.protocols, λ41b5cc912443.websocket.requestHeaders, λ664cf4f860bc => {
            λ9bdc6579c14a.call(λ41b5cc912443.websocket.channel, {
              type: "\x6f\x70\x65\x6e",
              args: [ λ664cf4f860bc ]
            });
          }, λ664cf4f860bc => {
            λ664cf4f860bc instanceof ArrayBuffer ? λ9bdc6579c14a.call(λ41b5cc912443.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ λ664cf4f860bc ]
            }, [ λ664cf4f860bc ]) : λ9bdc6579c14a.call(λ41b5cc912443.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ λ664cf4f860bc ]
            });
          }, (λ664cf4f860bc, λ4e33bd1cd00f) => {
            λ9bdc6579c14a.call(λ41b5cc912443.websocket.channel, {
              type: "\x63\x6c\x6f\x73\x65",
              args: [ λ664cf4f860bc, λ4e33bd1cd00f ]
            });
          }, λ664cf4f860bc => {
            λ9bdc6579c14a.call(λ41b5cc912443.websocket.channel, {
              type: "\x65\x72\x72\x6f\x72",
              args: [ λ664cf4f860bc ]
            });
          });
          λ41b5cc912443.websocket.channel.onmessage = λ9bdc6579c14a => {
            "\x64\x61\x74\x61" === λ9bdc6579c14a.data.type ? λ5a8a94ab4623(λ9bdc6579c14a.data.data) : "\x63\x6c\x6f\x73\x65" === λ9bdc6579c14a.data.type && λb3533d56852b(λ9bdc6579c14a.data.closeCode, λ9bdc6579c14a.data.closeReason);
          }, λ9bdc6579c14a.call(λ664cf4f860bc, {
            type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74"
          });
        }(λb3533d56852b, λ5a8a94ab4623, λ664cf4f860bc);
      } catch (λ9bdc6579c14a) {
        a(λ5a8a94ab4623, λ9bdc6579c14a, "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74");
      }
    };
  }
  new BroadcastChannel("\x62\x61\x72\x65\x2d\x6d\x75\x78").postMessage({
    type: "\x72\x65\x66\x72\x65\x73\x68\x50\x6f\x72\x74"
  }), self.onconnect = λ9bdc6579c14a => {
    l(λ9bdc6579c14a.ports[0]);
  }, console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x72\x75\x6e\x6e\x69\x6e\x67\x20\x76\x32\x2e\x31\x2e\x39\x20\x28\x62\x75\x69\x6c\x64\x20\x64\x63\x39\x64\x63\x36\x65\x29");
}();
