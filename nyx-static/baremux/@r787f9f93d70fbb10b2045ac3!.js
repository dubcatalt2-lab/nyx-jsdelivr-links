!function() {
  "use strict";
  const λ3b1e070338d5 = MessagePort.prototype.postMessage;
  let λ83d53c5df0ce = null;
  function a(λ3b1e070338d5, λ83d53c5df0ce, λffd60ea6dc57) {
    console.error(`\x65\x72\x72\x6f\x72\x20\x77\x68\x69\x6c\x65\x20\x70\x72\x6f\x63\x65\x73\x73\x69\x6e\x67\x20\x27${λffd60ea6dc57}\x27\x3a\x20`, λ83d53c5df0ce), λ3b1e070338d5.postMessage({
      type: "\x65\x72\x72\x6f\x72",
      error: λ83d53c5df0ce
    });
  }
  async function n(λffd60ea6dc57, λ669026d4a3b0, λ0cf2cd2cfd41) {
    const λ352a4bd131b3 = await λ0cf2cd2cfd41.request(new URL(λffd60ea6dc57.fetch.remote), λffd60ea6dc57.fetch.method, λffd60ea6dc57.fetch.body, λffd60ea6dc57.fetch.headers, null);
    if (!function() {
      if (null === λ83d53c5df0ce) {
        const λffd60ea6dc57 = new MessageChannel, λ669026d4a3b0 = new ReadableStream;
        let λ0cf2cd2cfd41;
        try {
          λ3b1e070338d5.call(λffd60ea6dc57.port1, λ669026d4a3b0, [ λ669026d4a3b0 ]), λ0cf2cd2cfd41 = !0;
        } catch (λ3b1e070338d5) {
          λ0cf2cd2cfd41 = !1;
        }
        return λ83d53c5df0ce = λ0cf2cd2cfd41, λ0cf2cd2cfd41;
      }
      return λ83d53c5df0ce;
    }() && λ352a4bd131b3.body instanceof ReadableStream) {
      const λ3b1e070338d5 = new Response(λ352a4bd131b3.body);
      λ352a4bd131b3.body = await λ3b1e070338d5.arrayBuffer();
    }
    λ352a4bd131b3.body instanceof ReadableStream || λ352a4bd131b3.body instanceof ArrayBuffer ? λ3b1e070338d5.call(λ669026d4a3b0, {
      type: "\x66\x65\x74\x63\x68",
      fetch: λ352a4bd131b3
    }, [ λ352a4bd131b3.body ]) : λ3b1e070338d5.call(λ669026d4a3b0, {
      type: "\x66\x65\x74\x63\x68",
      fetch: λ352a4bd131b3
    });
  }
  let λffd60ea6dc57 = null, λ669026d4a3b0 = "";
  function c() {
    return new Error("\x74\x68\x65\x72\x65\x20\x61\x72\x65\x20\x6e\x6f\x20\x62\x61\x72\x65\x20\x63\x6c\x69\x65\x6e\x74\x73", {
      cause: "\x4e\x6f\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x77\x61\x73\x20\x73\x65\x74\x2e\x20\x54\x72\x79\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x61\x20\x42\x61\x72\x65\x4d\x75\x78\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x61\x6e\x64\x20\x63\x61\x6c\x6c\x69\x6e\x67\x20\x60\x73\x65\x74\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x28\x29\x60\x20\x6f\x72\x20\x60\x73\x65\x74\x4d\x61\x6e\x75\x61\x6c\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x28\x29\x60\x20\x6f\x6e\x20\x69\x74\x20\x62\x65\x66\x6f\x72\x65\x20\x75\x73\x69\x6e\x67\x20\x42\x61\x72\x65\x43\x6c\x69\x65\x6e\x74\x2e"
    });
  }
  function r(λ83d53c5df0ce, λ669026d4a3b0) {
    const λ0cf2cd2cfd41 = λffd60ea6dc57;
    let λ352a4bd131b3 = [ λ669026d4a3b0 ];
    λ83d53c5df0ce.fetch?.body && λ352a4bd131b3.push(λ83d53c5df0ce.fetch.body), λ83d53c5df0ce.websocket?.channel && λ352a4bd131b3.push(λ83d53c5df0ce.websocket.channel), 
    λ3b1e070338d5.call(λ0cf2cd2cfd41, {
      message: λ83d53c5df0ce,
      port: λ669026d4a3b0
    }, λ352a4bd131b3);
  }
  function l(λ83d53c5df0ce) {
    λ83d53c5df0ce.onmessage = async λ83d53c5df0ce => {
      const λ0cf2cd2cfd41 = λ83d53c5df0ce.data.port, λ352a4bd131b3 = λ83d53c5df0ce.data.message;
      if ("\x70\x69\x6e\x67" === λ352a4bd131b3.type) λ3b1e070338d5.call(λ0cf2cd2cfd41, {
        type: "\x70\x6f\x6e\x67"
      }); else if ("\x73\x65\x74" === λ352a4bd131b3.type) try {
        const λ83d53c5df0ce = async function() {}.constructor;
        if ("\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65" === λ352a4bd131b3.client.function) λffd60ea6dc57 = λ352a4bd131b3.client.args[0], 
        λ669026d4a3b0 = `\x62\x61\x72\x65\x2d\x6d\x75\x78\x2d\x72\x65\x6d\x6f\x74\x65\x20\x28${λ352a4bd131b3.client.args[1]}\x29`; else try {
          const λ3b1e070338d5 = new λ83d53c5df0ce(λ352a4bd131b3.client.function), [λ0cf2cd2cfd41, λa578860dfc67] = await λ3b1e070338d5();
          λffd60ea6dc57 = new λ0cf2cd2cfd41(...λ352a4bd131b3.client.args), λ669026d4a3b0 = λa578860dfc67;
        } catch (λ3b1e070338d5) {
          throw λ3b1e070338d5.cause = "\x54\x68\x65\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x72\x6f\x76\x69\x64\x65\x64\x20\x77\x61\x73\x20\x69\x6e\x76\x61\x6c\x69\x64\x2e\x20\x43\x6f\x6d\x6d\x6f\x6e\x20\x63\x61\x75\x73\x65\x73\x20\x6f\x66\x20\x74\x68\x69\x73\x20\x61\x72\x65\x20\x61\x20\x64\x65\x66\x61\x75\x6c\x74\x20\x65\x78\x70\x6f\x72\x74\x20\x74\x68\x61\x74\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x20\x63\x6c\x61\x73\x73\x20\x74\x68\x61\x74\x20\x69\x6d\x70\x6c\x65\x6d\x65\x6e\x74\x73\x20\x42\x61\x72\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x69\x66\x20\x79\x6f\x75\x20\x61\x72\x65\x20\x75\x73\x69\x6e\x67\x20\x60\x73\x65\x74\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x28\x29\x60", 
          λ3b1e070338d5;
        }
        console.log("\x73\x65\x74\x20\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x74\x6f\x20", λffd60ea6dc57, λ669026d4a3b0), λ3b1e070338d5.call(λ0cf2cd2cfd41, {
          type: "\x73\x65\x74"
        });
      } catch (λ3b1e070338d5) {
        a(λ0cf2cd2cfd41, λ3b1e070338d5, "\x73\x65\x74");
      } else if ("\x67\x65\x74" === λ352a4bd131b3.type) λ0cf2cd2cfd41.postMessage({
        type: "\x67\x65\x74",
        name: λ669026d4a3b0
      }); else if ("\x66\x65\x74\x63\x68" === λ352a4bd131b3.type) try {
        if (!λffd60ea6dc57) throw c();
        if (λffd60ea6dc57 instanceof MessagePort) return void r(λ352a4bd131b3, λ0cf2cd2cfd41);
        λffd60ea6dc57.ready || await λffd60ea6dc57.init(), await n(λ352a4bd131b3, λ0cf2cd2cfd41, λffd60ea6dc57);
      } catch (λ3b1e070338d5) {
        a(λ0cf2cd2cfd41, λ3b1e070338d5, "\x66\x65\x74\x63\x68");
      } else if ("\x77\x65\x62\x73\x6f\x63\x6b\x65\x74" === λ352a4bd131b3.type) try {
        if (!λffd60ea6dc57) throw c();
        if (λffd60ea6dc57 instanceof MessagePort) return void r(λ352a4bd131b3, λ0cf2cd2cfd41);
        λffd60ea6dc57.ready || await λffd60ea6dc57.init(), await async function(λ83d53c5df0ce, λffd60ea6dc57, λ669026d4a3b0) {
          const [λ0cf2cd2cfd41, λ352a4bd131b3] = λ669026d4a3b0.connect(new URL(λ83d53c5df0ce.websocket.url), λ83d53c5df0ce.websocket.protocols, λ83d53c5df0ce.websocket.requestHeaders, λffd60ea6dc57 => {
            λ3b1e070338d5.call(λ83d53c5df0ce.websocket.channel, {
              type: "\x6f\x70\x65\x6e",
              args: [ λffd60ea6dc57 ]
            });
          }, λffd60ea6dc57 => {
            λffd60ea6dc57 instanceof ArrayBuffer ? λ3b1e070338d5.call(λ83d53c5df0ce.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ λffd60ea6dc57 ]
            }, [ λffd60ea6dc57 ]) : λ3b1e070338d5.call(λ83d53c5df0ce.websocket.channel, {
              type: "\x6d\x65\x73\x73\x61\x67\x65",
              args: [ λffd60ea6dc57 ]
            });
          }, (λffd60ea6dc57, λ669026d4a3b0) => {
            λ3b1e070338d5.call(λ83d53c5df0ce.websocket.channel, {
              type: "\x63\x6c\x6f\x73\x65",
              args: [ λffd60ea6dc57, λ669026d4a3b0 ]
            });
          }, λffd60ea6dc57 => {
            λ3b1e070338d5.call(λ83d53c5df0ce.websocket.channel, {
              type: "\x65\x72\x72\x6f\x72",
              args: [ λffd60ea6dc57 ]
            });
          });
          λ83d53c5df0ce.websocket.channel.onmessage = λ3b1e070338d5 => {
            "\x64\x61\x74\x61" === λ3b1e070338d5.data.type ? λ0cf2cd2cfd41(λ3b1e070338d5.data.data) : "\x63\x6c\x6f\x73\x65" === λ3b1e070338d5.data.type && λ352a4bd131b3(λ3b1e070338d5.data.closeCode, λ3b1e070338d5.data.closeReason);
          }, λ3b1e070338d5.call(λffd60ea6dc57, {
            type: "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74"
          });
        }(λ352a4bd131b3, λ0cf2cd2cfd41, λffd60ea6dc57);
      } catch (λ3b1e070338d5) {
        a(λ0cf2cd2cfd41, λ3b1e070338d5, "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74");
      }
    };
  }
  new BroadcastChannel("\x62\x61\x72\x65\x2d\x6d\x75\x78").postMessage({
    type: "\x72\x65\x66\x72\x65\x73\x68\x50\x6f\x72\x74"
  }), self.onconnect = λ3b1e070338d5 => {
    l(λ3b1e070338d5.ports[0]);
  }, console.debug("\x62\x61\x72\x65\x2d\x6d\x75\x78\x3a\x20\x72\x75\x6e\x6e\x69\x6e\x67\x20\x76\x32\x2e\x31\x2e\x39\x20\x28\x62\x75\x69\x6c\x64\x20\x64\x63\x39\x64\x63\x36\x65\x29");
}();
