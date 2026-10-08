!function() {
  "use strict";
  const λ592a3d6d3aab = MessagePort.prototype.postMessage;
  let λ0831dbe9b4b3 = null;
  function a(λ592a3d6d3aab, λ0831dbe9b4b3, λd053b2935a4d) {
    console.error(`\x65\x72\x72\x6f\x72\x20\x77\x68\x69\x6c\x65\x20\x70\x72\x6f\x63\x65\x73\x73\x69\x6e\x67\x20\x27${λd053b2935a4d}\x27\x3a\x20`, λ0831dbe9b4b3), λ592a3d6d3aab.postMessage({
      type: "\x65\x72\x72\x6f\x72",
      error: λ0831dbe9b4b3
    });
  }
  async function n(λd053b2935a4d, λb8fee017577c, λ28bdf3cc9ad8) {
    const λ05e71cdba2e7 = await λ28bdf3cc9ad8.request(new URL(λd053b2935a4d.fetch.remote), λd053b2935a4d.fetch.method, λd053b2935a4d.fetch.body, λd053b2935a4d.fetch.headers, null);
    if (!function() {
      if (null === λ0831dbe9b4b3) {
        const λd053b2935a4d = new MessageChannel, λb8fee017577c = new ReadableStream;
        let λ28bdf3cc9ad8;
        try {
          λ592a3d6d3aab.call(λd053b2935a4d.port1, λb8fee017577c, [ λb8fee017577c ]), λ28bdf3cc9ad8 = !0;
        } catch (λ592a3d6d3aab) {
          λ28bdf3cc9ad8 = !1;
        }
        return λ0831dbe9b4b3 = λ28bdf3cc9ad8, λ28bdf3cc9ad8;
      }
      return λ0831dbe9b4b3;
    }() && λ05e71cdba2e7.body instanceof ReadableStream) {
      const λ592a3d6d3aab = new Response(λ05e71cdba2e7.body);
      λ05e71cdba2e7.body = await λ592a3d6d3aab.arrayBuffer();
    }
    λ05e71cdba2e7.body instanceof ReadableStream || λ05e71cdba2e7.body instanceof ArrayBuffer ? λ592a3d6d3aab.call(λb8fee017577c, {
      type: "\x66\x65\x74\x63\x68",
      fetch: λ05e71cdba2e7
    }, [ λ05e71cdba2e7.body ]) : λ592a3d6d3aab.call(λb8fee017577c, {
      type: "\x66\x65\x74\x63\x68",
      fetch: λ05e71cdba2e7
    });
  }
  let λd053b2935a4d = null, λb8fee017577c = "";
  function c() {
    return new Error("\x74\x68\x65\x72\x65\x20\x61\x72\x65\x20\x6e\x6f\x20\x62\x61\x72\x65\x20\x63\x6c\x69\x65\x6e\x74\x73", {
      cause: "\x4e\x6f\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x77\x61\x73\x20\x73\x65\x74\x2e\x20\x54\x72\x79\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x61\x20\x42\x61\x72\x65\x4d\x75\x78\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x61\x6e\x64\x20\x63\x61\x6c\x6c\x69\x6e\x67\x20\x60\x73\x65\x74\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x28\x29\x60\x20\x6f\x72\x20\x60\x73\x65\x74\x4d\x61\x6e\x75\x61\x6c\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x28\x29\x60\x20\x6f\x6e\x20\x69\x74\x20\x62\x65\x66\x6f\x72\x65\x20\x75\x73\x69\x6e\x67\x20\x42\x61\x72\x65\x43\x6c\x69\x65\x6e\x74\x2e"
    });
  }
  function r(λ0831dbe9b4b3, λb8fee017577c) {
    const λ28bdf3cc9ad8 = λd053b2935a4d;
    let λ05e71cdba2e7 = [ λb8fee017577c ];
    λ0831dbe9b4b3.fetch?.body && λ05e71cdba2e7.push(λ0831dbe9b4b3.fetch.body), λ0831dbe9b4b3.websocket?.channel && λ05e71cdba2e7.push(λ0831dbe9b4b3.websocket.channel), 
    λ592a3d6d3aab.call(λ28bdf3cc9ad8, {
      message: λ0831dbe9b4b3,
      port: λb8fee017577c
    }, λ05e71cdba2e7);
  }
  function l(λ0831dbe9b4b3) {
    λ0831dbe9b4b3.onmessage = async λ0831dbe9b4b3 => {
      const λ28bdf3cc9ad8 = λ0831dbe9b4b3.data.port, λ05e71cdba2e7 = λ0831dbe9b4b3.data.message;
      if ("\x70\x69\x6e\x67" === λ05e71cdba2e7.type) λ592a3d6d3aab.call(λ28bdf3cc9ad8, {
        type: "\x70\x6f\x6e\x67"
      }); else if ("\x73\x65\x74" === λ05e71cdba2e7.type) try {
        const λ0831dbe9b4b3 = async function() {}.constructor;
        if ("\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65" === λ05e71cdba2e7.client.function) λd053b2935a4d = λ05e71cdba2e7.client.args[0], 
        λb8fee017577c = `\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65\x20\x28${λ05e71cdba2e7.client.args[1]}\x29`; else try {
          const λ592a3d6d3aab = new λ0831dbe9b4b3(λ05e71cdba2e7.client.function), [λ28bdf3cc9ad8, λ69e04fee029a] = await λ592a3d6d3aab();
          λd053b2935a4d = new λ28bdf3cc9ad8(...λ05e71cdba2e7.client.args), λb8fee017577c = λ69e04fee029a;
        } catch (λ592a3d6d3aab) {
          throw λ592a3d6d3aab.cause = "\x54\x68\x65\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x72\x6f\x76\x69\x64\x65\x64\x20\x77\x61\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e\x20\x43\x6f\x6d\x6d\x6f\x6e\x20\x63\x61\x75\x73\x65\x73\x20\x6f\x66\x20\x74\x68\x69\x73\x20\x61\x72\x65\x20\x61\x20\x64\x65\x66\x61\x75\x6c\x74\x20\x65\x78\x70\x6f\x72\x74\x20\x74\x68\x61\x74\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x20\x63\x6c\x61\x73\x73\x20\x74\x68\x61\x74\x20\x69\x6d\x70\x6c\x65\x6d\x65\x6e\x74\x73\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x69\x66\x20\x79\x6f\x75\x20\x61\x72\x65\x20\x75\x73\x69\x6e\x67\x20\x60\x73\x65\x74\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x28\x29\x60", 
          λ592a3d6d3aab;
        }
        console.log("\x73\x65\x74\x20\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x74\x6f\x20", λd053b2935a4d, λb8fee017577c), λ592a3d6d3aab.call(λ28bdf3cc9ad8, {
          type: "\x73\x65\x74"
        });
      } catch (λ592a3d6d3aab) {
        a(λ28bdf3cc9ad8, λ592a3d6d3aab, "\x73\x65\x74");
      } else if ("\x67\x65\x74" === λ05e71cdba2e7.type) λ28bdf3cc9ad8.postMessage({
        type: "\x67\x65\x74",
        name: λb8fee017577c
      }); else if ("\x66\x65\x74\x63\x68" === λ05e71cdba2e7.type) try {
        if (!λd053b2935a4d) throw c();
        if (λd053b2935a4d instanceof MessagePort) return void r(λ05e71cdba2e7, λ28bdf3cc9ad8);
        λd053b2935a4d.ready || await λd053b2935a4d.init(), await n(λ05e71cdba2e7, λ28bdf3cc9ad8, λd053b2935a4d);
      } catch (λ592a3d6d3aab) {
        a(λ28bdf3cc9ad8, λ592a3d6d3aab, "\x66\x65\x74\x63\x68");
      } else if ("\x77\x65\x62\x73\x6f\x63\x6b\x65\x74" === λ05e71cdba2e7.type) try {
        if (!λd053b2935a4d) throw c();
        if (λd053b2935a4d instanceof MessagePort) return void r(λ05e71cdba2e7, λ28bdf3cc9ad8);
        λd053b2935a4d.ready || await λd053b2935a4d.init(), await async function(λ0831dbe9b4b3, λd053b2935a4d, λb8fee017577c) {
          const [λ28bdf3cc9ad8, λ05e71cdba2e7] = λb8fee017577c.connect(new URL(λ0831dbe9b4b3.websocket.url), λ0831dbe9b4b3.websocket.protocols, λ0831dbe9b4b3.websocket.requestHeaders, λd053b2935a4d => {
            λ592a3d6d3aab.call(λ0831dbe9b4b3.websocket.channel, {
              type: "\x6f\x70\x65\x6e",
              args: [ λd053b2935a4d ]
            });
          }, λd053b2935a4d => {
            λd053b2935a4d instanceof ArrayBuffer ? λ592a3d6d3aab.call(λ0831dbe9b4b3.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ λd053b2935a4d ]
            }, [ λd053b2935a4d ]) : λ592a3d6d3aab.call(λ0831dbe9b4b3.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ λd053b2935a4d ]
            });
          }, (λd053b2935a4d, λb8fee017577c) => {
            λ592a3d6d3aab.call(λ0831dbe9b4b3.websocket.channel, {
              type: "\x63\x6c\x6f\x73\x65",
              args: [ λd053b2935a4d, λb8fee017577c ]
            });
          }, λd053b2935a4d => {
            λ592a3d6d3aab.call(λ0831dbe9b4b3.websocket.channel, {
              type: "\x65\x72\x72\x6f\x72",
              args: [ λd053b2935a4d ]
            });
          });
          λ0831dbe9b4b3.websocket.channel.onmessage = λ592a3d6d3aab => {
            "\x64\x61\x74\x61" === λ592a3d6d3aab.data.type ? λ28bdf3cc9ad8(λ592a3d6d3aab.data.data) : "\x63\x6c\x6f\x73\x65" === λ592a3d6d3aab.data.type && λ05e71cdba2e7(λ592a3d6d3aab.data.closeCode, λ592a3d6d3aab.data.closeReason);
          }, λ592a3d6d3aab.call(λd053b2935a4d, {
            type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74"
          });
        }(λ05e71cdba2e7, λ28bdf3cc9ad8, λd053b2935a4d);
      } catch (λ592a3d6d3aab) {
        a(λ28bdf3cc9ad8, λ592a3d6d3aab, "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74");
      }
    };
  }
  new BroadcastChannel("\x62\x61\x72\x65\x2d\x6d\x75\x78").postMessage({
    type: "\x72\x65\x66\x72\x65\x73\x68\x50\x6f\x72\x74"
  }), self.onconnect = λ592a3d6d3aab => {
    l(λ592a3d6d3aab.ports[0]);
  }, console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x72\x75\x6e\x6e\x69\x6e\x67\x20\x76\x32\x2e\x31\x2e\x39\x20\x28\x62\x75\x69\x6c\x64\x20\x64\x63\x39\x64\x63\x36\x65\x29");
}();
