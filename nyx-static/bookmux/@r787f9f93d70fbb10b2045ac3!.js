!function() {
  "use strict";
  const λ6d1402c98a71 = MessagePort.prototype.postMessage;
  let λ7d13df35836d = null;
  function a(λ6d1402c98a71, λ7d13df35836d, λdd4959c7ac73) {
    console.error(`\x65\x72\x72\x6f\x72\x20\x77\x68\x69\x6c\x65\x20\x70\x72\x6f\x63\x65\x73\x73\x69\x6e\x67\x20\x27${λdd4959c7ac73}\x27\x3a\x20`, λ7d13df35836d), λ6d1402c98a71.postMessage({
      type: "\x65\x72\x72\x6f\x72",
      error: λ7d13df35836d
    });
  }
  async function n(λdd4959c7ac73, λf677ad2b7c16, λb0e43e6a498d) {
    const λ1bbbfcc00cc2 = await λb0e43e6a498d.request(new URL(λdd4959c7ac73.fetch.remote), λdd4959c7ac73.fetch.method, λdd4959c7ac73.fetch.body, λdd4959c7ac73.fetch.headers, null);
    if (!function() {
      if (null === λ7d13df35836d) {
        const λdd4959c7ac73 = new MessageChannel, λf677ad2b7c16 = new ReadableStream;
        let λb0e43e6a498d;
        try {
          λ6d1402c98a71.call(λdd4959c7ac73.port1, λf677ad2b7c16, [ λf677ad2b7c16 ]), λb0e43e6a498d = !0;
        } catch (λ6d1402c98a71) {
          λb0e43e6a498d = !1;
        }
        return λ7d13df35836d = λb0e43e6a498d, λb0e43e6a498d;
      }
      return λ7d13df35836d;
    }() && λ1bbbfcc00cc2.body instanceof ReadableStream) {
      const λ6d1402c98a71 = new Response(λ1bbbfcc00cc2.body);
      λ1bbbfcc00cc2.body = await λ6d1402c98a71.arrayBuffer();
    }
    λ1bbbfcc00cc2.body instanceof ReadableStream || λ1bbbfcc00cc2.body instanceof ArrayBuffer ? λ6d1402c98a71.call(λf677ad2b7c16, {
      type: "\x66\x65\x74\x63\x68",
      fetch: λ1bbbfcc00cc2
    }, [ λ1bbbfcc00cc2.body ]) : λ6d1402c98a71.call(λf677ad2b7c16, {
      type: "\x66\x65\x74\x63\x68",
      fetch: λ1bbbfcc00cc2
    });
  }
  let λdd4959c7ac73 = null, λf677ad2b7c16 = "";
  function c() {
    return new Error("\x74\x68\x65\x72\x65\x20\x61\x72\x65\x20\x6e\x6f\x20\x62\x61\x72\x65\x20\x63\x6c\x69\x65\x6e\x74\x73", {
      cause: "\x4e\x6f\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x77\x61\x73\x20\x73\x65\x74\x2e\x20\x54\x72\x79\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x61\x20\x42\x6f\x6f\x6b\x6d\x75\x78\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x61\x6e\x64\x20\x63\x61\x6c\x6c\x69\x6e\x67\x20\x60\x73\x65\x74\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x28\x29\x60\x20\x6f\x72\x20\x60\x73\x65\x74\x4d\x61\x6e\x75\x61\x6c\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x28\x29\x60\x20\x6f\x6e\x20\x69\x74\x20\x62\x65\x66\x6f\x72\x65\x20\x75\x73\x69\x6e\x67\x20\x42\x61\x72\x65\x43\x6c\x69\x65\x6e\x74\x2e"
    });
  }
  function r(λ7d13df35836d, λf677ad2b7c16) {
    const λb0e43e6a498d = λdd4959c7ac73;
    let λ1bbbfcc00cc2 = [ λf677ad2b7c16 ];
    λ7d13df35836d.fetch?.body && λ1bbbfcc00cc2.push(λ7d13df35836d.fetch.body), λ7d13df35836d.websocket?.channel && λ1bbbfcc00cc2.push(λ7d13df35836d.websocket.channel), 
    λ6d1402c98a71.call(λb0e43e6a498d, {
      message: λ7d13df35836d,
      port: λf677ad2b7c16
    }, λ1bbbfcc00cc2);
  }
  function l(λ7d13df35836d) {
    λ7d13df35836d.onmessage = async λ7d13df35836d => {
      const λb0e43e6a498d = λ7d13df35836d.data.port, λ1bbbfcc00cc2 = λ7d13df35836d.data.message;
      if ("\x70\x69\x6e\x67" === λ1bbbfcc00cc2.type) λ6d1402c98a71.call(λb0e43e6a498d, {
        type: "\x70\x6f\x6e\x67"
      }); else if ("\x73\x65\x74" === λ1bbbfcc00cc2.type) try {
        const λ7d13df35836d = async function() {}.constructor;
        if ("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65" === λ1bbbfcc00cc2.client.function) λdd4959c7ac73 = λ1bbbfcc00cc2.client.args[0], 
        λf677ad2b7c16 = `\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65\x20\x28${λ1bbbfcc00cc2.client.args[1]}\x29`; else try {
          const λ6d1402c98a71 = new λ7d13df35836d(λ1bbbfcc00cc2.client.function), [λb0e43e6a498d, λ6cc8ebb88d8d] = await λ6d1402c98a71();
          λdd4959c7ac73 = new λb0e43e6a498d(...λ1bbbfcc00cc2.client.args), λf677ad2b7c16 = λ6cc8ebb88d8d;
        } catch (λ6d1402c98a71) {
          throw λ6d1402c98a71.cause = "\x54\x68\x65\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x72\x6f\x76\x69\x64\x65\x64\x20\x77\x61\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e\x20\x43\x6f\x6d\x6d\x6f\x6e\x20\x63\x61\x75\x73\x65\x73\x20\x6f\x66\x20\x74\x68\x69\x73\x20\x61\x72\x65\x20\x61\x20\x64\x65\x66\x61\x75\x6c\x74\x20\x65\x78\x70\x6f\x72\x74\x20\x74\x68\x61\x74\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x20\x63\x6c\x61\x73\x73\x20\x74\x68\x61\x74\x20\x69\x6d\x70\x6c\x65\x6d\x65\x6e\x74\x73\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x69\x66\x20\x79\x6f\x75\x20\x61\x72\x65\x20\x75\x73\x69\x6e\x67\x20\x60\x73\x65\x74\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x28\x29\x60", 
          λ6d1402c98a71;
        }
        console.log("\x73\x65\x74\x20\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x74\x6f\x20", λdd4959c7ac73, λf677ad2b7c16), λ6d1402c98a71.call(λb0e43e6a498d, {
          type: "\x73\x65\x74"
        });
      } catch (λ6d1402c98a71) {
        a(λb0e43e6a498d, λ6d1402c98a71, "\x73\x65\x74");
      } else if ("\x67\x65\x74" === λ1bbbfcc00cc2.type) λb0e43e6a498d.postMessage({
        type: "\x67\x65\x74",
        name: λf677ad2b7c16
      }); else if ("\x66\x65\x74\x63\x68" === λ1bbbfcc00cc2.type) try {
        if (!λdd4959c7ac73) throw c();
        if (λdd4959c7ac73 instanceof MessagePort) return void r(λ1bbbfcc00cc2, λb0e43e6a498d);
        λdd4959c7ac73.ready || await λdd4959c7ac73.init(), await n(λ1bbbfcc00cc2, λb0e43e6a498d, λdd4959c7ac73);
      } catch (λ6d1402c98a71) {
        a(λb0e43e6a498d, λ6d1402c98a71, "\x66\x65\x74\x63\x68");
      } else if ("\x77\x65\x62\x73\x6f\x63\x6b\x65\x74" === λ1bbbfcc00cc2.type) try {
        if (!λdd4959c7ac73) throw c();
        if (λdd4959c7ac73 instanceof MessagePort) return void r(λ1bbbfcc00cc2, λb0e43e6a498d);
        λdd4959c7ac73.ready || await λdd4959c7ac73.init(), await async function(λ7d13df35836d, λdd4959c7ac73, λf677ad2b7c16) {
          const [λb0e43e6a498d, λ1bbbfcc00cc2] = λf677ad2b7c16.connect(new URL(λ7d13df35836d.websocket.url), λ7d13df35836d.websocket.protocols, λ7d13df35836d.websocket.requestHeaders, λdd4959c7ac73 => {
            λ6d1402c98a71.call(λ7d13df35836d.websocket.channel, {
              type: "\x6f\x70\x65\x6e",
              args: [ λdd4959c7ac73 ]
            });
          }, λdd4959c7ac73 => {
            λdd4959c7ac73 instanceof ArrayBuffer ? λ6d1402c98a71.call(λ7d13df35836d.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ λdd4959c7ac73 ]
            }, [ λdd4959c7ac73 ]) : λ6d1402c98a71.call(λ7d13df35836d.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ λdd4959c7ac73 ]
            });
          }, (λdd4959c7ac73, λf677ad2b7c16) => {
            λ6d1402c98a71.call(λ7d13df35836d.websocket.channel, {
              type: "\x63\x6c\x6f\x73\x65",
              args: [ λdd4959c7ac73, λf677ad2b7c16 ]
            });
          }, λdd4959c7ac73 => {
            λ6d1402c98a71.call(λ7d13df35836d.websocket.channel, {
              type: "\x65\x72\x72\x6f\x72",
              args: [ λdd4959c7ac73 ]
            });
          });
          λ7d13df35836d.websocket.channel.onmessage = λ6d1402c98a71 => {
            "\x64\x61\x74\x61" === λ6d1402c98a71.data.type ? λb0e43e6a498d(λ6d1402c98a71.data.data) : "\x63\x6c\x6f\x73\x65" === λ6d1402c98a71.data.type && λ1bbbfcc00cc2(λ6d1402c98a71.data.closeCode, λ6d1402c98a71.data.closeReason);
          }, λ6d1402c98a71.call(λdd4959c7ac73, {
            type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74"
          });
        }(λ1bbbfcc00cc2, λb0e43e6a498d, λdd4959c7ac73);
      } catch (λ6d1402c98a71) {
        a(λb0e43e6a498d, λ6d1402c98a71, "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74");
      }
    };
  }
  new BroadcastChannel("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78").postMessage({
    type: "\x72\x65\x66\x72\x65\x73\x68\x50\x6f\x72\x74"
  }), self.onconnect = λ6d1402c98a71 => {
    l(λ6d1402c98a71.ports[0]);
  }, console.debug("\x62\x6f\x6f\x6b\x2d\x6d\x75\x78\x3a\x20\x72\x75\x6e\x6e\x69\x6e\x67\x20\x76\x32\x2e\x31\x2e\x39\x20\x28\x62\x75\x69\x6c\x64\x20\x64\x63\x39\x64\x63\x36\x65\x29");
}();
