!function() {
  "use strict";
  const λdba14a496ae8 = MessagePort.prototype.postMessage;
  let λ7d64e37c0fe4 = null;
  function a(λdba14a496ae8, λ7d64e37c0fe4, λ9e74a883715c) {
    console.error(`\x65\x72\x72\x6f\x72\x20\x77\x68\x69\x6c\x65\x20\x70\x72\x6f\x63\x65\x73\x73\x69\x6e\x67\x20\x27${λ9e74a883715c}\x27\x3a\x20`, λ7d64e37c0fe4), λdba14a496ae8.postMessage({
      type: "\x65\x72\x72\x6f\x72",
      error: λ7d64e37c0fe4
    });
  }
  async function n(λ9e74a883715c, λb325d666c194, λb2a7b84e22a4) {
    const λd38c632ad191 = await λb2a7b84e22a4.request(new URL(λ9e74a883715c.fetch.remote), λ9e74a883715c.fetch.method, λ9e74a883715c.fetch.body, λ9e74a883715c.fetch.headers, null);
    if (!function() {
      if (null === λ7d64e37c0fe4) {
        const λ9e74a883715c = new MessageChannel, λb325d666c194 = new ReadableStream;
        let λb2a7b84e22a4;
        try {
          λdba14a496ae8.call(λ9e74a883715c.port1, λb325d666c194, [ λb325d666c194 ]), λb2a7b84e22a4 = !0;
        } catch (λdba14a496ae8) {
          λb2a7b84e22a4 = !1;
        }
        return λ7d64e37c0fe4 = λb2a7b84e22a4, λb2a7b84e22a4;
      }
      return λ7d64e37c0fe4;
    }() && λd38c632ad191.body instanceof ReadableStream) {
      const λdba14a496ae8 = new Response(λd38c632ad191.body);
      λd38c632ad191.body = await λdba14a496ae8.arrayBuffer();
    }
    λd38c632ad191.body instanceof ReadableStream || λd38c632ad191.body instanceof ArrayBuffer ? λdba14a496ae8.call(λb325d666c194, {
      type: "\x66\x65\x74\x63\x68",
      fetch: λd38c632ad191
    }, [ λd38c632ad191.body ]) : λdba14a496ae8.call(λb325d666c194, {
      type: "\x66\x65\x74\x63\x68",
      fetch: λd38c632ad191
    });
  }
  let λ9e74a883715c = null, λb325d666c194 = "";
  function c() {
    return new Error("\x74\x68\x65\x72\x65\x20\x61\x72\x65\x20\x6e\x6f\x20\x62\x61\x72\x65\x20\x63\x6c\x69\x65\x6e\x74\x73", {
      cause: "\x4e\x6f\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x77\x61\x73\x20\x73\x65\x74\x2e\x20\x54\x72\x79\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x61\x20\x42\x61\x72\x65\x4d\x75\x78\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x61\x6e\x64\x20\x63\x61\x6c\x6c\x69\x6e\x67\x20\x60\x73\x65\x74\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x28\x29\x60\x20\x6f\x72\x20\x60\x73\x65\x74\x4d\x61\x6e\x75\x61\x6c\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x28\x29\x60\x20\x6f\x6e\x20\x69\x74\x20\x62\x65\x66\x6f\x72\x65\x20\x75\x73\x69\x6e\x67\x20\x42\x61\x72\x65\x43\x6c\x69\x65\x6e\x74\x2e"
    });
  }
  function r(λ7d64e37c0fe4, λb325d666c194) {
    const λb2a7b84e22a4 = λ9e74a883715c;
    let λd38c632ad191 = [ λb325d666c194 ];
    λ7d64e37c0fe4.fetch?.body && λd38c632ad191.push(λ7d64e37c0fe4.fetch.body), λ7d64e37c0fe4.websocket?.channel && λd38c632ad191.push(λ7d64e37c0fe4.websocket.channel), 
    λdba14a496ae8.call(λb2a7b84e22a4, {
      message: λ7d64e37c0fe4,
      port: λb325d666c194
    }, λd38c632ad191);
  }
  function l(λ7d64e37c0fe4) {
    λ7d64e37c0fe4.onmessage = async λ7d64e37c0fe4 => {
      const λb2a7b84e22a4 = λ7d64e37c0fe4.data.port, λd38c632ad191 = λ7d64e37c0fe4.data.message;
      if ("\x70\x69\x6e\x67" === λd38c632ad191.type) λdba14a496ae8.call(λb2a7b84e22a4, {
        type: "\x70\x6f\x6e\x67"
      }); else if ("\x73\x65\x74" === λd38c632ad191.type) try {
        const λ7d64e37c0fe4 = async function() {}.constructor;
        if ("\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65" === λd38c632ad191.client.function) λ9e74a883715c = λd38c632ad191.client.args[0], 
        λb325d666c194 = `\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65\x20\x28${λd38c632ad191.client.args[1]}\x29`; else try {
          const λdba14a496ae8 = new λ7d64e37c0fe4(λd38c632ad191.client.function), [λb2a7b84e22a4, λ897dc5b68cdb] = await λdba14a496ae8();
          λ9e74a883715c = new λb2a7b84e22a4(...λd38c632ad191.client.args), λb325d666c194 = λ897dc5b68cdb;
        } catch (λdba14a496ae8) {
          throw λdba14a496ae8.cause = "\x54\x68\x65\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x72\x6f\x76\x69\x64\x65\x64\x20\x77\x61\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e\x20\x43\x6f\x6d\x6d\x6f\x6e\x20\x63\x61\x75\x73\x65\x73\x20\x6f\x66\x20\x74\x68\x69\x73\x20\x61\x72\x65\x20\x61\x20\x64\x65\x66\x61\x75\x6c\x74\x20\x65\x78\x70\x6f\x72\x74\x20\x74\x68\x61\x74\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x20\x63\x6c\x61\x73\x73\x20\x74\x68\x61\x74\x20\x69\x6d\x70\x6c\x65\x6d\x65\x6e\x74\x73\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x69\x66\x20\x79\x6f\x75\x20\x61\x72\x65\x20\x75\x73\x69\x6e\x67\x20\x60\x73\x65\x74\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x28\x29\x60", 
          λdba14a496ae8;
        }
        console.log("\x73\x65\x74\x20\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x74\x6f\x20", λ9e74a883715c, λb325d666c194), λdba14a496ae8.call(λb2a7b84e22a4, {
          type: "\x73\x65\x74"
        });
      } catch (λdba14a496ae8) {
        a(λb2a7b84e22a4, λdba14a496ae8, "\x73\x65\x74");
      } else if ("\x67\x65\x74" === λd38c632ad191.type) λb2a7b84e22a4.postMessage({
        type: "\x67\x65\x74",
        name: λb325d666c194
      }); else if ("\x66\x65\x74\x63\x68" === λd38c632ad191.type) try {
        if (!λ9e74a883715c) throw c();
        if (λ9e74a883715c instanceof MessagePort) return void r(λd38c632ad191, λb2a7b84e22a4);
        λ9e74a883715c.ready || await λ9e74a883715c.init(), await n(λd38c632ad191, λb2a7b84e22a4, λ9e74a883715c);
      } catch (λdba14a496ae8) {
        a(λb2a7b84e22a4, λdba14a496ae8, "\x66\x65\x74\x63\x68");
      } else if ("\x77\x65\x62\x73\x6f\x63\x6b\x65\x74" === λd38c632ad191.type) try {
        if (!λ9e74a883715c) throw c();
        if (λ9e74a883715c instanceof MessagePort) return void r(λd38c632ad191, λb2a7b84e22a4);
        λ9e74a883715c.ready || await λ9e74a883715c.init(), await async function(λ7d64e37c0fe4, λ9e74a883715c, λb325d666c194) {
          const [λb2a7b84e22a4, λd38c632ad191] = λb325d666c194.connect(new URL(λ7d64e37c0fe4.websocket.url), λ7d64e37c0fe4.websocket.protocols, λ7d64e37c0fe4.websocket.requestHeaders, λ9e74a883715c => {
            λdba14a496ae8.call(λ7d64e37c0fe4.websocket.channel, {
              type: "\x6f\x70\x65\x6e",
              args: [ λ9e74a883715c ]
            });
          }, λ9e74a883715c => {
            λ9e74a883715c instanceof ArrayBuffer ? λdba14a496ae8.call(λ7d64e37c0fe4.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ λ9e74a883715c ]
            }, [ λ9e74a883715c ]) : λdba14a496ae8.call(λ7d64e37c0fe4.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ λ9e74a883715c ]
            });
          }, (λ9e74a883715c, λb325d666c194) => {
            λdba14a496ae8.call(λ7d64e37c0fe4.websocket.channel, {
              type: "\x63\x6c\x6f\x73\x65",
              args: [ λ9e74a883715c, λb325d666c194 ]
            });
          }, λ9e74a883715c => {
            λdba14a496ae8.call(λ7d64e37c0fe4.websocket.channel, {
              type: "\x65\x72\x72\x6f\x72",
              args: [ λ9e74a883715c ]
            });
          });
          λ7d64e37c0fe4.websocket.channel.onmessage = λdba14a496ae8 => {
            "\x64\x61\x74\x61" === λdba14a496ae8.data.type ? λb2a7b84e22a4(λdba14a496ae8.data.data) : "\x63\x6c\x6f\x73\x65" === λdba14a496ae8.data.type && λd38c632ad191(λdba14a496ae8.data.closeCode, λdba14a496ae8.data.closeReason);
          }, λdba14a496ae8.call(λ9e74a883715c, {
            type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74"
          });
        }(λd38c632ad191, λb2a7b84e22a4, λ9e74a883715c);
      } catch (λdba14a496ae8) {
        a(λb2a7b84e22a4, λdba14a496ae8, "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74");
      }
    };
  }
  new BroadcastChannel("\x62\x61\x72\x65\x2d\x6d\x75\x78").postMessage({
    type: "\x72\x65\x66\x72\x65\x73\x68\x50\x6f\x72\x74"
  }), self.onconnect = λdba14a496ae8 => {
    l(λdba14a496ae8.ports[0]);
  }, console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x72\x75\x6e\x6e\x69\x6e\x67\x20\x76\x32\x2e\x31\x2e\x39\x20\x28\x62\x75\x69\x6c\x64\x20\x64\x63\x39\x64\x63\x36\x65\x29");
}();
