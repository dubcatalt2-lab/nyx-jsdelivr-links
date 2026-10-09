var $studyjetController;

(() => {
  var λba63d05f8c51 = {
    805(λba63d05f8c51, λa41526b9c851, λ2ee290d3c8f3) {
      λ2ee290d3c8f3.d(λa41526b9c851, {
        C: () => o
      });
      class o {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λba63d05f8c51, λa41526b9c851, λ2ee290d3c8f3) {
          this.methods = λba63d05f8c51, this.id = λa41526b9c851, this.sendRaw = λ2ee290d3c8f3;
        }
        recieve(λba63d05f8c51) {
          if (null == λba63d05f8c51 || "\x6f\x62\x6a\x65\x63\x74" != typeof λba63d05f8c51) return;
          let λa41526b9c851 = λba63d05f8c51[this.id];
          if (null == λa41526b9c851 || "\x6f\x62\x6a\x65\x63\x74" != typeof λa41526b9c851) return;
          let λ2ee290d3c8f3 = λa41526b9c851.$type;
          if ("\x72\x65\x73\x70\x6f\x6e\x73\x65" === λ2ee290d3c8f3) {
            let λba63d05f8c51 = λa41526b9c851.$token, λ2ee290d3c8f3 = λa41526b9c851.$data, λ4b047f82d7d9 = λa41526b9c851.$error, λ8f1462573016 = this.promiseCallbacks.get(λba63d05f8c51);
            if (!λ8f1462573016) return;
            this.promiseCallbacks.delete(λba63d05f8c51), void 0 !== λ4b047f82d7d9 ? λ8f1462573016.reject(Error(λ4b047f82d7d9)) : λ8f1462573016.resolve(λ2ee290d3c8f3);
          } else if ("\x72\x65\x71\x75\x65\x73\x74" === λ2ee290d3c8f3) {
            let λba63d05f8c51 = λa41526b9c851.$method, λ2ee290d3c8f3 = λa41526b9c851.$args;
            this.methods[λba63d05f8c51](λ2ee290d3c8f3).then(λba63d05f8c51 => {
              this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λa41526b9c851.$token,
                  $data: λba63d05f8c51?.[0]
                }
              }, λba63d05f8c51?.[1]);
            }).catch(λba63d05f8c51 => {
              console.error(λba63d05f8c51), this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λa41526b9c851.$token,
                  $error: λba63d05f8c51?.toString() || "\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x65\x72\x72\x6f\x72"
                }
              }, []);
            });
          }
        }
        call(λba63d05f8c51, λa41526b9c851, λ2ee290d3c8f3 = []) {
          let λ4b047f82d7d9 = this.counter++;
          return new Promise((λ8f1462573016, λ677fe75e2aa5) => {
            this.promiseCallbacks.set(λ4b047f82d7d9, {
              resolve: λ8f1462573016,
              reject: λ677fe75e2aa5
            }), this.sendRaw({
              [this.id]: {
                $type: "\x72\x65\x71\x75\x65\x73\x74",
                $method: λba63d05f8c51,
                $args: λa41526b9c851,
                $token: λ4b047f82d7d9
              }
            }, λ2ee290d3c8f3);
          });
        }
      }
    }
  }, λa41526b9c851 = {};
  function r(λ2ee290d3c8f3) {
    var λ4b047f82d7d9 = λa41526b9c851[λ2ee290d3c8f3];
    if (void 0 !== λ4b047f82d7d9) return λ4b047f82d7d9.exports;
    var λ8f1462573016 = λa41526b9c851[λ2ee290d3c8f3] = {
      exports: {}
    };
    return λba63d05f8c51[λ2ee290d3c8f3](λ8f1462573016, λ8f1462573016.exports, r), λ8f1462573016.exports;
  }
  r.d = (λba63d05f8c51, λa41526b9c851) => {
    for (var λ2ee290d3c8f3 in λa41526b9c851) r.o(λa41526b9c851, λ2ee290d3c8f3) && !r.o(λba63d05f8c51, λ2ee290d3c8f3) && Object.defineProperty(λba63d05f8c51, λ2ee290d3c8f3, {
      enumerable: !0,
      get: λa41526b9c851[λ2ee290d3c8f3]
    });
  }, r.o = (λba63d05f8c51, λa41526b9c851) => Object.prototype.hasOwnProperty.call(λba63d05f8c51, λa41526b9c851), 
  r.r = λba63d05f8c51 => {
    "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λba63d05f8c51, Symbol.toStringTag, {
      value: "\x4d\x6f\x64\x75\x6c\x65"
    }), Object.defineProperty(λba63d05f8c51, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
      value: !0
    });
  };
  var λ2ee290d3c8f3 = {};
  (() => {
    r.r(λ2ee290d3c8f3), r.d(λ2ee290d3c8f3, {
      route: () => a,
      shouldRoute: () => n
    });
    var λba63d05f8c51 = r(805);
    let λa41526b9c851 = {};
    addEventListener("\x6d\x65\x73\x73\x61\x67\x65", λba63d05f8c51 => {
      if (λba63d05f8c51.data && "\x6f\x62\x6a\x65\x63\x74" == typeof λba63d05f8c51.data) {
        if (λba63d05f8c51.data.$sw$setCookieDone && "\x6f\x62\x6a\x65\x63\x74" == typeof λba63d05f8c51.data.$sw$setCookieDone) {
          let λ2ee290d3c8f3 = λba63d05f8c51.data.$sw$setCookieDone, λ4b047f82d7d9 = λa41526b9c851[λ2ee290d3c8f3.id];
          λ4b047f82d7d9 && (λ4b047f82d7d9(), delete λa41526b9c851[λ2ee290d3c8f3.id]);
        }
        if (λba63d05f8c51.data.$sw$initRemoteTransport && "\x6f\x62\x6a\x65\x63\x74" == typeof λba63d05f8c51.data.$sw$initRemoteTransport) {
          let {port: λa41526b9c851, prefix: λ2ee290d3c8f3} = λba63d05f8c51.data.$sw$initRemoteTransport, λ8f1462573016 = λ4b047f82d7d9.find(λba63d05f8c51 => new URL(λ2ee290d3c8f3).pathname.startsWith(λba63d05f8c51.prefix));
          if (!λ8f1462573016) return void console.error("\x4e\x6f\x20\x72\x65\x6c\x65\x76\x61\x6e\x74\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x66\x6f\x75\x6e\x64\x20\x66\x6f\x72\x20\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x69\x6e\x69\x74");
          λ8f1462573016.rpc.call("\x69\x6e\x69\x74\x52\x65\x6d\x6f\x74\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74", λa41526b9c851, [ λa41526b9c851 ]);
        }
      }
    });
    class s {
      prefix;
      id;
      rpc;
      constructor(λ2ee290d3c8f3, λ4b047f82d7d9, λ8f1462573016) {
        this.prefix = λ2ee290d3c8f3, this.id = λ4b047f82d7d9, this.rpc = new λba63d05f8c51.C({
          sendSetCookie: async ({cookies: λba63d05f8c51, options: λ2ee290d3c8f3}) => {
            let λ4b047f82d7d9 = await self.clients.matchAll({
              type: "\x77\x69\x6e\x64\x6f\x77",
              includeUncontrolled: !0
            }), λ8f1462573016 = [], λ677fe75e2aa5 = [], λ2dbd4f200e7a = λ2ee290d3c8f3?.destination === "\x64\x6f\x63\x75\x6d\x65\x6e\x74" || λ2ee290d3c8f3?.destination === "\x69\x66\x72\x61\x6d\x65";
            for (let λ2ca641cd4b1e of λ4b047f82d7d9) {
              let λ4b047f82d7d9 = Math.random().toString(36).substring(2, 10);
              λ8f1462573016.push(λ4b047f82d7d9), λ2ca641cd4b1e.postMessage({
                $controller$setCookie: {
                  cookies: λba63d05f8c51,
                  options: λ2ee290d3c8f3,
                  id: λ4b047f82d7d9,
                  controllerId: this.id
                }
              }), λ2dbd4f200e7a || λ677fe75e2aa5.push(new Promise(λba63d05f8c51 => {
                λa41526b9c851[λ4b047f82d7d9] = () => λba63d05f8c51(λ4b047f82d7d9);
              }));
            }
            if (λ677fe75e2aa5.length > 0) {
              let λ2ee290d3c8f3, λ2dbd4f200e7a = !1, λ2ca641cd4b1e = new Promise(λ677fe75e2aa5 => {
                λ2ee290d3c8f3 = setTimeout(() => {
                  if (!λ2dbd4f200e7a) {
                    let λ2ee290d3c8f3 = λ8f1462573016.filter(λba63d05f8c51 => void 0 !== λa41526b9c851[λba63d05f8c51]);
                    console.error(`\x74\x69\x6d\x65\x64\x20\x6f\x75\x74\x20\x77\x61\x69\x74\x69\x6e\x67\x20\x66\x6f\x72\x20\x73\x65\x74\x20\x63\x6f\x6f\x6b\x69\x65\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x28\x64\x65\x61\x64\x6c\x6f\x63\x6b\x3f\x29\x3a\x20\x63\x6f\x6f\x6b\x69\x65\x73\x3d${λba63d05f8c51.length}\x20\x63\x6c\x69\x65\x6e\x74\x73\x3d${λ4b047f82d7d9.length}\x20\x70\x65\x6e\x64\x69\x6e\x67\x3d${λ2ee290d3c8f3.length}\x2f${λ8f1462573016.length}\x20\x63\x6c\x69\x65\x6e\x74\x55\x72\x6c\x73\x3d${λ4b047f82d7d9.map(λba63d05f8c51 => λba63d05f8c51.url).join("\x2c")}`);
                  }
                  λ677fe75e2aa5();
                }, 1e3);
              });
              try {
                await Promise.race([ λ2ca641cd4b1e, Promise.any(λ677fe75e2aa5).then(() => {
                  λ2dbd4f200e7a = !0;
                }).catch(() => {}) ]);
              } finally {
                for (let λba63d05f8c51 of (void 0 !== λ2ee290d3c8f3 && clearTimeout(λ2ee290d3c8f3), 
                λ8f1462573016)) delete λa41526b9c851[λba63d05f8c51];
              }
            }
          }
        }, "\x74\x61\x62\x63\x68\x61\x6e\x6e\x65\x6c\x2d" + λ4b047f82d7d9, (λba63d05f8c51, λa41526b9c851) => {
          λ8f1462573016.postMessage(λba63d05f8c51, λa41526b9c851);
        }), λ8f1462573016.onmessage = λba63d05f8c51 => {
          this.rpc.recieve(λba63d05f8c51.data);
        }, λ8f1462573016.onmessageerror = console.error, this.rpc.call("\x72\x65\x61\x64\x79", void 0);
      }
    }
    let λ4b047f82d7d9 = [];
    function n(λba63d05f8c51) {
      let λa41526b9c851 = new URL(λba63d05f8c51.request.url);
      return void 0 !== λ4b047f82d7d9.find(λba63d05f8c51 => λa41526b9c851.pathname.startsWith(λba63d05f8c51.prefix));
    }
    async function a(λba63d05f8c51) {
      try {
        let λa41526b9c851 = new URL(λba63d05f8c51.request.url), λ2ee290d3c8f3 = λ4b047f82d7d9.find(λba63d05f8c51 => λa41526b9c851.pathname.startsWith(λba63d05f8c51.prefix)), λ8f1462573016 = await clients.get(λba63d05f8c51.clientId), λ677fe75e2aa5 = [ ...λba63d05f8c51.request.headers ], λ2dbd4f200e7a = await λ2ee290d3c8f3.rpc.call("\x72\x65\x71\x75\x65\x73\x74", {
          rawUrl: λba63d05f8c51.request.url,
          rawReferrer: λba63d05f8c51.request.referrer,
          destination: λba63d05f8c51.request.destination,
          mode: λba63d05f8c51.request.mode,
          referrer: λba63d05f8c51.request.referrer,
          method: λba63d05f8c51.request.method,
          body: λba63d05f8c51.request.body,
          cache: λba63d05f8c51.request.cache,
          forceCrossOriginIsolated: !1,
          initialHeaders: λ677fe75e2aa5,
          rawClientUrl: λ8f1462573016 ? λ8f1462573016.url : void 0,
          clientId: λba63d05f8c51.clientId || λba63d05f8c51.resultingClientId
        }, λba63d05f8c51.request.body instanceof ReadableStream || λba63d05f8c51.request.body instanceof ArrayBuffer ? [ λba63d05f8c51.request.body ] : void 0);
        return new Response(λ2dbd4f200e7a.body, {
          status: λ2dbd4f200e7a.status,
          statusText: λ2dbd4f200e7a.statusText,
          headers: λ2dbd4f200e7a.headers
        });
      } catch (λba63d05f8c51) {
        return console.error("\x53\x65\x72\x76\x69\x63\x65\x20\x57\x6f\x72\x6b\x65\x72\x20\x65\x72\x72\x6f\x72\x3a", λba63d05f8c51), new Response("\x49\x6e\x74\x65\x72\x6e\x61\x6c\x20\x53\x65\x72\x76\x69\x63\x65\x20\x57\x6f\x72\x6b\x65\x72\x20\x45\x72\x72\x6f\x72\x3a\x20" + λba63d05f8c51.message, {
          status: 500
        });
      }
    }
    addEventListener("\x6d\x65\x73\x73\x61\x67\x65", λba63d05f8c51 => {
      if (!λba63d05f8c51.data || "\x6f\x62\x6a\x65\x63\x74" != typeof λba63d05f8c51.data || !λba63d05f8c51.data.$controller$init || "\x6f\x62\x6a\x65\x63\x74" != typeof λba63d05f8c51.data.$controller$init) return;
      let λa41526b9c851 = λba63d05f8c51.data.$controller$init, λ2ee290d3c8f3 = λ4b047f82d7d9.findIndex(λba63d05f8c51 => λba63d05f8c51.id === λa41526b9c851.id);
      -1 !== λ2ee290d3c8f3 && λ4b047f82d7d9.splice(λ2ee290d3c8f3, 1), λ4b047f82d7d9.push(new s(λa41526b9c851.prefix, λa41526b9c851.id, λba63d05f8c51.ports[0]));
    }), addEventListener("\x69\x6e\x73\x74\x61\x6c\x6c", () => {
      self.skipWaiting();
    }), addEventListener("\x61\x63\x74\x69\x76\x61\x74\x65", λba63d05f8c51 => {
      λba63d05f8c51.waitUntil(clients.claim());
    }), setTimeout(async () => {
      for (let λba63d05f8c51 of (console.log("\x73\x65\x72\x76\x69\x63\x65\x20\x77\x6f\x72\x6b\x65\x72\x20\x61\x63\x74\x69\x76\x61\x74\x65\x64\x2c\x20\x6e\x6f\x74\x69\x66\x79\x69\x6e\x67\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x74\x6f\x20\x72\x65\x76\x69\x76\x65"), 
      await clients.matchAll())) λba63d05f8c51.postMessage({
        $controller$swrevive: {}
      });
    }, 100);
  })(), $studyjetController = λ2ee290d3c8f3;
})();
