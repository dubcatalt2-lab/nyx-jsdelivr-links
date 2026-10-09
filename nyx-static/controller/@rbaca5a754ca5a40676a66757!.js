var $studyjetController;

(() => {
  var λe96d54f57543 = {
    805(λe96d54f57543, λca6f1f00cf79, λ2f3d216a3673) {
      λ2f3d216a3673.d(λca6f1f00cf79, {
        C: () => o
      });
      class o {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λe96d54f57543, λca6f1f00cf79, λ2f3d216a3673) {
          this.methods = λe96d54f57543, this.id = λca6f1f00cf79, this.sendRaw = λ2f3d216a3673;
        }
        recieve(λe96d54f57543) {
          if (null == λe96d54f57543 || "\x6f\x62\x6a\x65\x63\x74" != typeof λe96d54f57543) return;
          let λca6f1f00cf79 = λe96d54f57543[this.id];
          if (null == λca6f1f00cf79 || "\x6f\x62\x6a\x65\x63\x74" != typeof λca6f1f00cf79) return;
          let λ2f3d216a3673 = λca6f1f00cf79.$type;
          if ("\x72\x65\x73\x70\x6f\x6e\x73\x65" === λ2f3d216a3673) {
            let λe96d54f57543 = λca6f1f00cf79.$token, λ2f3d216a3673 = λca6f1f00cf79.$data, λ3879bfaa2d00 = λca6f1f00cf79.$error, λb87a4bec242d = this.promiseCallbacks.get(λe96d54f57543);
            if (!λb87a4bec242d) return;
            this.promiseCallbacks.delete(λe96d54f57543), void 0 !== λ3879bfaa2d00 ? λb87a4bec242d.reject(Error(λ3879bfaa2d00)) : λb87a4bec242d.resolve(λ2f3d216a3673);
          } else if ("\x72\x65\x71\x75\x65\x73\x74" === λ2f3d216a3673) {
            let λe96d54f57543 = λca6f1f00cf79.$method, λ2f3d216a3673 = λca6f1f00cf79.$args;
            this.methods[λe96d54f57543](λ2f3d216a3673).then(λe96d54f57543 => {
              this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λca6f1f00cf79.$token,
                  $data: λe96d54f57543?.[0]
                }
              }, λe96d54f57543?.[1]);
            }).catch(λe96d54f57543 => {
              console.error(λe96d54f57543), this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λca6f1f00cf79.$token,
                  $error: λe96d54f57543?.toString() || "\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x65\x72\x72\x6f\x72"
                }
              }, []);
            });
          }
        }
        call(λe96d54f57543, λca6f1f00cf79, λ2f3d216a3673 = []) {
          let λ3879bfaa2d00 = this.counter++;
          return new Promise((λb87a4bec242d, λ2917fb13c30f) => {
            this.promiseCallbacks.set(λ3879bfaa2d00, {
              resolve: λb87a4bec242d,
              reject: λ2917fb13c30f
            }), this.sendRaw({
              [this.id]: {
                $type: "\x72\x65\x71\x75\x65\x73\x74",
                $method: λe96d54f57543,
                $args: λca6f1f00cf79,
                $token: λ3879bfaa2d00
              }
            }, λ2f3d216a3673);
          });
        }
      }
    }
  }, λca6f1f00cf79 = {};
  function r(λ2f3d216a3673) {
    var λ3879bfaa2d00 = λca6f1f00cf79[λ2f3d216a3673];
    if (void 0 !== λ3879bfaa2d00) return λ3879bfaa2d00.exports;
    var λb87a4bec242d = λca6f1f00cf79[λ2f3d216a3673] = {
      exports: {}
    };
    return λe96d54f57543[λ2f3d216a3673](λb87a4bec242d, λb87a4bec242d.exports, r), λb87a4bec242d.exports;
  }
  r.d = (λe96d54f57543, λca6f1f00cf79) => {
    for (var λ2f3d216a3673 in λca6f1f00cf79) r.o(λca6f1f00cf79, λ2f3d216a3673) && !r.o(λe96d54f57543, λ2f3d216a3673) && Object.defineProperty(λe96d54f57543, λ2f3d216a3673, {
      enumerable: !0,
      get: λca6f1f00cf79[λ2f3d216a3673]
    });
  }, r.o = (λe96d54f57543, λca6f1f00cf79) => Object.prototype.hasOwnProperty.call(λe96d54f57543, λca6f1f00cf79), 
  r.r = λe96d54f57543 => {
    "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λe96d54f57543, Symbol.toStringTag, {
      value: "\x4d\x6f\x64\x75\x6c\x65"
    }), Object.defineProperty(λe96d54f57543, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
      value: !0
    });
  };
  var λ2f3d216a3673 = {};
  (() => {
    r.r(λ2f3d216a3673), r.d(λ2f3d216a3673, {
      route: () => a,
      shouldRoute: () => n
    });
    var λe96d54f57543 = r(805);
    let λca6f1f00cf79 = {};
    addEventListener("\x6d\x65\x73\x73\x61\x67\x65", λe96d54f57543 => {
      if (λe96d54f57543.data && "\x6f\x62\x6a\x65\x63\x74" == typeof λe96d54f57543.data) {
        if (λe96d54f57543.data.$sw$setCookieDone && "\x6f\x62\x6a\x65\x63\x74" == typeof λe96d54f57543.data.$sw$setCookieDone) {
          let λ2f3d216a3673 = λe96d54f57543.data.$sw$setCookieDone, λ3879bfaa2d00 = λca6f1f00cf79[λ2f3d216a3673.id];
          λ3879bfaa2d00 && (λ3879bfaa2d00(), delete λca6f1f00cf79[λ2f3d216a3673.id]);
        }
        if (λe96d54f57543.data.$sw$initRemoteTransport && "\x6f\x62\x6a\x65\x63\x74" == typeof λe96d54f57543.data.$sw$initRemoteTransport) {
          let {port: λca6f1f00cf79, prefix: λ2f3d216a3673} = λe96d54f57543.data.$sw$initRemoteTransport, λb87a4bec242d = λ3879bfaa2d00.find(λe96d54f57543 => new URL(λ2f3d216a3673).pathname.startsWith(λe96d54f57543.prefix));
          if (!λb87a4bec242d) return void console.error("\x4e\x6f\x20\x72\x65\x6c\x65\x76\x61\x6e\x74\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x66\x6f\x75\x6e\x64\x20\x66\x6f\x72\x20\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x69\x6e\x69\x74");
          λb87a4bec242d.rpc.call("\x69\x6e\x69\x74\x52\x65\x6d\x6f\x74\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74", λca6f1f00cf79, [ λca6f1f00cf79 ]);
        }
      }
    });
    class s {
      prefix;
      id;
      rpc;
      constructor(λ2f3d216a3673, λ3879bfaa2d00, λb87a4bec242d) {
        this.prefix = λ2f3d216a3673, this.id = λ3879bfaa2d00, this.rpc = new λe96d54f57543.C({
          sendSetCookie: async ({cookies: λe96d54f57543, options: λ2f3d216a3673}) => {
            let λ3879bfaa2d00 = await self.clients.matchAll({
              type: "\x77\x69\x6e\x64\x6f\x77",
              includeUncontrolled: !0
            }), λb87a4bec242d = [], λ2917fb13c30f = [], λacb56fbbfd3d = λ2f3d216a3673?.destination === "\x64\x6f\x63\x75\x6d\x65\x6e\x74" || λ2f3d216a3673?.destination === "\x69\x66\x72\x61\x6d\x65";
            for (let λ770f60470f7b of λ3879bfaa2d00) {
              let λ3879bfaa2d00 = Math.random().toString(36).substring(2, 10);
              λb87a4bec242d.push(λ3879bfaa2d00), λ770f60470f7b.postMessage({
                $controller$setCookie: {
                  cookies: λe96d54f57543,
                  options: λ2f3d216a3673,
                  id: λ3879bfaa2d00,
                  controllerId: this.id
                }
              }), λacb56fbbfd3d || λ2917fb13c30f.push(new Promise(λe96d54f57543 => {
                λca6f1f00cf79[λ3879bfaa2d00] = () => λe96d54f57543(λ3879bfaa2d00);
              }));
            }
            if (λ2917fb13c30f.length > 0) {
              let λ2f3d216a3673, λacb56fbbfd3d = !1, λ770f60470f7b = new Promise(λ2917fb13c30f => {
                λ2f3d216a3673 = setTimeout(() => {
                  if (!λacb56fbbfd3d) {
                    let λ2f3d216a3673 = λb87a4bec242d.filter(λe96d54f57543 => void 0 !== λca6f1f00cf79[λe96d54f57543]);
                    console.error(`\x74\x69\x6d\x65\x64\x20\x6f\x75\x74\x20\x77\x61\x69\x74\x69\x6e\x67\x20\x66\x6f\x72\x20\x73\x65\x74\x20\x63\x6f\x6f\x6b\x69\x65\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x28\x64\x65\x61\x64\x6c\x6f\x63\x6b\x3f\x29\x3a\x20\x63\x6f\x6f\x6b\x69\x65\x73\x3d${λe96d54f57543.length}\x20\x63\x6c\x69\x65\x6e\x74\x73\x3d${λ3879bfaa2d00.length}\x20\x70\x65\x6e\x64\x69\x6e\x67\x3d${λ2f3d216a3673.length}\x2f${λb87a4bec242d.length}\x20\x63\x6c\x69\x65\x6e\x74\x55\x72\x6c\x73\x3d${λ3879bfaa2d00.map(λe96d54f57543 => λe96d54f57543.url).join("\x2c")}`);
                  }
                  λ2917fb13c30f();
                }, 1e3);
              });
              try {
                await Promise.race([ λ770f60470f7b, Promise.any(λ2917fb13c30f).then(() => {
                  λacb56fbbfd3d = !0;
                }).catch(() => {}) ]);
              } finally {
                for (let λe96d54f57543 of (void 0 !== λ2f3d216a3673 && clearTimeout(λ2f3d216a3673), 
                λb87a4bec242d)) delete λca6f1f00cf79[λe96d54f57543];
              }
            }
          }
        }, "\x74\x61\x62\x63\x68\x61\x6e\x6e\x65\x6c\x2d" + λ3879bfaa2d00, (λe96d54f57543, λca6f1f00cf79) => {
          λb87a4bec242d.postMessage(λe96d54f57543, λca6f1f00cf79);
        }), λb87a4bec242d.onmessage = λe96d54f57543 => {
          this.rpc.recieve(λe96d54f57543.data);
        }, λb87a4bec242d.onmessageerror = console.error, this.rpc.call("\x72\x65\x61\x64\x79", void 0);
      }
    }
    let λ3879bfaa2d00 = [];
    function n(λe96d54f57543) {
      let λca6f1f00cf79 = new URL(λe96d54f57543.request.url);
      return void 0 !== λ3879bfaa2d00.find(λe96d54f57543 => λca6f1f00cf79.pathname.startsWith(λe96d54f57543.prefix));
    }
    async function a(λe96d54f57543) {
      try {
        let λca6f1f00cf79 = new URL(λe96d54f57543.request.url), λ2f3d216a3673 = λ3879bfaa2d00.find(λe96d54f57543 => λca6f1f00cf79.pathname.startsWith(λe96d54f57543.prefix)), λb87a4bec242d = await clients.get(λe96d54f57543.clientId), λ2917fb13c30f = [ ...λe96d54f57543.request.headers ], λacb56fbbfd3d = await λ2f3d216a3673.rpc.call("\x72\x65\x71\x75\x65\x73\x74", {
          rawUrl: λe96d54f57543.request.url,
          rawReferrer: λe96d54f57543.request.referrer,
          destination: λe96d54f57543.request.destination,
          mode: λe96d54f57543.request.mode,
          referrer: λe96d54f57543.request.referrer,
          method: λe96d54f57543.request.method,
          body: λe96d54f57543.request.body,
          cache: λe96d54f57543.request.cache,
          forceCrossOriginIsolated: !1,
          initialHeaders: λ2917fb13c30f,
          rawClientUrl: λb87a4bec242d ? λb87a4bec242d.url : void 0,
          clientId: λe96d54f57543.clientId || λe96d54f57543.resultingClientId
        }, λe96d54f57543.request.body instanceof ReadableStream || λe96d54f57543.request.body instanceof ArrayBuffer ? [ λe96d54f57543.request.body ] : void 0);
        return new Response(λacb56fbbfd3d.body, {
          status: λacb56fbbfd3d.status,
          statusText: λacb56fbbfd3d.statusText,
          headers: λacb56fbbfd3d.headers
        });
      } catch (λe96d54f57543) {
        return console.error("\x53\x65\x72\x76\x69\x63\x65\x20\x57\x6f\x72\x6b\x65\x72\x20\x65\x72\x72\x6f\x72\x3a", λe96d54f57543), new Response("\x49\x6e\x74\x65\x72\x6e\x61\x6c\x20\x53\x65\x72\x76\x69\x63\x65\x20\x57\x6f\x72\x6b\x65\x72\x20\x45\x72\x72\x6f\x72\x3a\x20" + λe96d54f57543.message, {
          status: 500
        });
      }
    }
    addEventListener("\x6d\x65\x73\x73\x61\x67\x65", λe96d54f57543 => {
      if (!λe96d54f57543.data || "\x6f\x62\x6a\x65\x63\x74" != typeof λe96d54f57543.data || !λe96d54f57543.data.$controller$init || "\x6f\x62\x6a\x65\x63\x74" != typeof λe96d54f57543.data.$controller$init) return;
      let λca6f1f00cf79 = λe96d54f57543.data.$controller$init, λ2f3d216a3673 = λ3879bfaa2d00.findIndex(λe96d54f57543 => λe96d54f57543.id === λca6f1f00cf79.id);
      -1 !== λ2f3d216a3673 && λ3879bfaa2d00.splice(λ2f3d216a3673, 1), λ3879bfaa2d00.push(new s(λca6f1f00cf79.prefix, λca6f1f00cf79.id, λe96d54f57543.ports[0]));
    }), addEventListener("\x69\x6e\x73\x74\x61\x6c\x6c", () => {
      self.skipWaiting();
    }), addEventListener("\x61\x63\x74\x69\x76\x61\x74\x65", λe96d54f57543 => {
      λe96d54f57543.waitUntil(clients.claim());
    }), setTimeout(async () => {
      for (let λe96d54f57543 of (console.log("\x73\x65\x72\x76\x69\x63\x65\x20\x77\x6f\x72\x6b\x65\x72\x20\x61\x63\x74\x69\x76\x61\x74\x65\x64\x2c\x20\x6e\x6f\x74\x69\x66\x79\x69\x6e\x67\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x74\x6f\x20\x72\x65\x76\x69\x76\x65"), 
      await clients.matchAll())) λe96d54f57543.postMessage({
        $controller$swrevive: {}
      });
    }, 100);
  })(), $studyjetController = λ2f3d216a3673;
})();
