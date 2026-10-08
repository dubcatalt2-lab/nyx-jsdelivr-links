var $studyjetController;

(() => {
  var λdad3f498d772 = {
    805(λdad3f498d772, λ5172a1e22cc4, λfdf1b8d02b31) {
      λfdf1b8d02b31.d(λ5172a1e22cc4, {
        C: () => o
      });
      class o {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λdad3f498d772, λ5172a1e22cc4, λfdf1b8d02b31) {
          this.methods = λdad3f498d772, this.id = λ5172a1e22cc4, this.sendRaw = λfdf1b8d02b31;
        }
        recieve(λdad3f498d772) {
          if (null == λdad3f498d772 || "\x6f\x62\x6a\x65\x63\x74" != typeof λdad3f498d772) return;
          let λ5172a1e22cc4 = λdad3f498d772[this.id];
          if (null == λ5172a1e22cc4 || "\x6f\x62\x6a\x65\x63\x74" != typeof λ5172a1e22cc4) return;
          let λfdf1b8d02b31 = λ5172a1e22cc4.$type;
          if ("\x72\x65\x73\x70\x6f\x6e\x73\x65" === λfdf1b8d02b31) {
            let λdad3f498d772 = λ5172a1e22cc4.$token, λfdf1b8d02b31 = λ5172a1e22cc4.$data, λ3095c7fda12b = λ5172a1e22cc4.$error, λbe2f40e02887 = this.promiseCallbacks.get(λdad3f498d772);
            if (!λbe2f40e02887) return;
            this.promiseCallbacks.delete(λdad3f498d772), void 0 !== λ3095c7fda12b ? λbe2f40e02887.reject(Error(λ3095c7fda12b)) : λbe2f40e02887.resolve(λfdf1b8d02b31);
          } else if ("\x72\x65\x71\x75\x65\x73\x74" === λfdf1b8d02b31) {
            let λdad3f498d772 = λ5172a1e22cc4.$method, λfdf1b8d02b31 = λ5172a1e22cc4.$args;
            this.methods[λdad3f498d772](λfdf1b8d02b31).then(λdad3f498d772 => {
              this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ5172a1e22cc4.$token,
                  $data: λdad3f498d772?.[0]
                }
              }, λdad3f498d772?.[1]);
            }).catch(λdad3f498d772 => {
              console.error(λdad3f498d772), this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ5172a1e22cc4.$token,
                  $error: λdad3f498d772?.toString() || "\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x65\x72\x72\x6f\x72"
                }
              }, []);
            });
          }
        }
        call(λdad3f498d772, λ5172a1e22cc4, λfdf1b8d02b31 = []) {
          let λ3095c7fda12b = this.counter++;
          return new Promise((λbe2f40e02887, λ504d7bfbf123) => {
            this.promiseCallbacks.set(λ3095c7fda12b, {
              resolve: λbe2f40e02887,
              reject: λ504d7bfbf123
            }), this.sendRaw({
              [this.id]: {
                $type: "\x72\x65\x71\x75\x65\x73\x74",
                $method: λdad3f498d772,
                $args: λ5172a1e22cc4,
                $token: λ3095c7fda12b
              }
            }, λfdf1b8d02b31);
          });
        }
      }
    }
  }, λ5172a1e22cc4 = {};
  function r(λfdf1b8d02b31) {
    var λ3095c7fda12b = λ5172a1e22cc4[λfdf1b8d02b31];
    if (void 0 !== λ3095c7fda12b) return λ3095c7fda12b.exports;
    var λbe2f40e02887 = λ5172a1e22cc4[λfdf1b8d02b31] = {
      exports: {}
    };
    return λdad3f498d772[λfdf1b8d02b31](λbe2f40e02887, λbe2f40e02887.exports, r), λbe2f40e02887.exports;
  }
  r.d = (λdad3f498d772, λ5172a1e22cc4) => {
    for (var λfdf1b8d02b31 in λ5172a1e22cc4) r.o(λ5172a1e22cc4, λfdf1b8d02b31) && !r.o(λdad3f498d772, λfdf1b8d02b31) && Object.defineProperty(λdad3f498d772, λfdf1b8d02b31, {
      enumerable: !0,
      get: λ5172a1e22cc4[λfdf1b8d02b31]
    });
  }, r.o = (λdad3f498d772, λ5172a1e22cc4) => Object.prototype.hasOwnProperty.call(λdad3f498d772, λ5172a1e22cc4), 
  r.r = λdad3f498d772 => {
    "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λdad3f498d772, Symbol.toStringTag, {
      value: "\x4d\x6f\x64\x75\x6c\x65"
    }), Object.defineProperty(λdad3f498d772, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
      value: !0
    });
  };
  var λfdf1b8d02b31 = {};
  (() => {
    r.r(λfdf1b8d02b31), r.d(λfdf1b8d02b31, {
      route: () => a,
      shouldRoute: () => n
    });
    var λdad3f498d772 = r(805);
    let λ5172a1e22cc4 = {};
    addEventListener("\x6d\x65\x73\x73\x61\x67\x65", λdad3f498d772 => {
      if (λdad3f498d772.data && "\x6f\x62\x6a\x65\x63\x74" == typeof λdad3f498d772.data) {
        if (λdad3f498d772.data.$sw$setCookieDone && "\x6f\x62\x6a\x65\x63\x74" == typeof λdad3f498d772.data.$sw$setCookieDone) {
          let λfdf1b8d02b31 = λdad3f498d772.data.$sw$setCookieDone, λ3095c7fda12b = λ5172a1e22cc4[λfdf1b8d02b31.id];
          λ3095c7fda12b && (λ3095c7fda12b(), delete λ5172a1e22cc4[λfdf1b8d02b31.id]);
        }
        if (λdad3f498d772.data.$sw$initRemoteTransport && "\x6f\x62\x6a\x65\x63\x74" == typeof λdad3f498d772.data.$sw$initRemoteTransport) {
          let {port: λ5172a1e22cc4, prefix: λfdf1b8d02b31} = λdad3f498d772.data.$sw$initRemoteTransport, λbe2f40e02887 = λ3095c7fda12b.find(λdad3f498d772 => new URL(λfdf1b8d02b31).pathname.startsWith(λdad3f498d772.prefix));
          if (!λbe2f40e02887) return void console.error("\x4e\x6f\x20\x72\x65\x6c\x65\x76\x61\x6e\x74\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x66\x6f\x75\x6e\x64\x20\x66\x6f\x72\x20\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x69\x6e\x69\x74");
          λbe2f40e02887.rpc.call("\x69\x6e\x69\x74\x52\x65\x6d\x6f\x74\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74", λ5172a1e22cc4, [ λ5172a1e22cc4 ]);
        }
      }
    });
    class s {
      prefix;
      id;
      rpc;
      constructor(λfdf1b8d02b31, λ3095c7fda12b, λbe2f40e02887) {
        this.prefix = λfdf1b8d02b31, this.id = λ3095c7fda12b, this.rpc = new λdad3f498d772.C({
          sendSetCookie: async ({cookies: λdad3f498d772, options: λfdf1b8d02b31}) => {
            let λ3095c7fda12b = await self.clients.matchAll({
              type: "\x77\x69\x6e\x64\x6f\x77",
              includeUncontrolled: !0
            }), λbe2f40e02887 = [], λ504d7bfbf123 = [], λdb6dc5067200 = λfdf1b8d02b31?.destination === "\x64\x6f\x63\x75\x6d\x65\x6e\x74" || λfdf1b8d02b31?.destination === "\x69\x66\x72\x61\x6d\x65";
            for (let λ554acba7a01a of λ3095c7fda12b) {
              let λ3095c7fda12b = Math.random().toString(36).substring(2, 10);
              λbe2f40e02887.push(λ3095c7fda12b), λ554acba7a01a.postMessage({
                $controller$setCookie: {
                  cookies: λdad3f498d772,
                  options: λfdf1b8d02b31,
                  id: λ3095c7fda12b,
                  controllerId: this.id
                }
              }), λdb6dc5067200 || λ504d7bfbf123.push(new Promise(λdad3f498d772 => {
                λ5172a1e22cc4[λ3095c7fda12b] = () => λdad3f498d772(λ3095c7fda12b);
              }));
            }
            if (λ504d7bfbf123.length > 0) {
              let λfdf1b8d02b31, λdb6dc5067200 = !1, λ554acba7a01a = new Promise(λ504d7bfbf123 => {
                λfdf1b8d02b31 = setTimeout(() => {
                  if (!λdb6dc5067200) {
                    let λfdf1b8d02b31 = λbe2f40e02887.filter(λdad3f498d772 => void 0 !== λ5172a1e22cc4[λdad3f498d772]);
                    console.error(`\x74\x69\x6d\x65\x64\x20\x6f\x75\x74\x20\x77\x61\x69\x74\x69\x6e\x67\x20\x66\x6f\x72\x20\x73\x65\x74\x20\x63\x6f\x6f\x6b\x69\x65\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x28\x64\x65\x61\x64\x6c\x6f\x63\x6b\x3f\x29\x3a\x20\x63\x6f\x6f\x6b\x69\x65\x73\x3d${λdad3f498d772.length}\x20\x63\x6c\x69\x65\x6e\x74\x73\x3d${λ3095c7fda12b.length}\x20\x70\x65\x6e\x64\x69\x6e\x67\x3d${λfdf1b8d02b31.length}\x2f${λbe2f40e02887.length}\x20\x63\x6c\x69\x65\x6e\x74\x55\x72\x6c\x73\x3d${λ3095c7fda12b.map(λdad3f498d772 => λdad3f498d772.url).join("\x2c")}`);
                  }
                  λ504d7bfbf123();
                }, 1e3);
              });
              try {
                await Promise.race([ λ554acba7a01a, Promise.any(λ504d7bfbf123).then(() => {
                  λdb6dc5067200 = !0;
                }).catch(() => {}) ]);
              } finally {
                for (let λdad3f498d772 of (void 0 !== λfdf1b8d02b31 && clearTimeout(λfdf1b8d02b31), 
                λbe2f40e02887)) delete λ5172a1e22cc4[λdad3f498d772];
              }
            }
          }
        }, "\x74\x61\x62\x63\x68\x61\x6e\x6e\x65\x6c\x2d" + λ3095c7fda12b, (λdad3f498d772, λ5172a1e22cc4) => {
          λbe2f40e02887.postMessage(λdad3f498d772, λ5172a1e22cc4);
        }), λbe2f40e02887.onmessage = λdad3f498d772 => {
          this.rpc.recieve(λdad3f498d772.data);
        }, λbe2f40e02887.onmessageerror = console.error, this.rpc.call("\x72\x65\x61\x64\x79", void 0);
      }
    }
    let λ3095c7fda12b = [];
    function n(λdad3f498d772) {
      let λ5172a1e22cc4 = new URL(λdad3f498d772.request.url);
      return void 0 !== λ3095c7fda12b.find(λdad3f498d772 => λ5172a1e22cc4.pathname.startsWith(λdad3f498d772.prefix));
    }
    async function a(λdad3f498d772) {
      try {
        let λ5172a1e22cc4 = new URL(λdad3f498d772.request.url), λfdf1b8d02b31 = λ3095c7fda12b.find(λdad3f498d772 => λ5172a1e22cc4.pathname.startsWith(λdad3f498d772.prefix)), λbe2f40e02887 = await clients.get(λdad3f498d772.clientId), λ504d7bfbf123 = [ ...λdad3f498d772.request.headers ], λdb6dc5067200 = await λfdf1b8d02b31.rpc.call("\x72\x65\x71\x75\x65\x73\x74", {
          rawUrl: λdad3f498d772.request.url,
          rawReferrer: λdad3f498d772.request.referrer,
          destination: λdad3f498d772.request.destination,
          mode: λdad3f498d772.request.mode,
          referrer: λdad3f498d772.request.referrer,
          method: λdad3f498d772.request.method,
          body: λdad3f498d772.request.body,
          cache: λdad3f498d772.request.cache,
          forceCrossOriginIsolated: !1,
          initialHeaders: λ504d7bfbf123,
          rawClientUrl: λbe2f40e02887 ? λbe2f40e02887.url : void 0,
          clientId: λdad3f498d772.clientId || λdad3f498d772.resultingClientId
        }, λdad3f498d772.request.body instanceof ReadableStream || λdad3f498d772.request.body instanceof ArrayBuffer ? [ λdad3f498d772.request.body ] : void 0);
        return new Response(λdb6dc5067200.body, {
          status: λdb6dc5067200.status,
          statusText: λdb6dc5067200.statusText,
          headers: λdb6dc5067200.headers
        });
      } catch (λdad3f498d772) {
        return console.error("\x53\x65\x72\x76\x69\x63\x65\x20\x57\x6f\x72\x6b\x65\x72\x20\x65\x72\x72\x6f\x72\x3a", λdad3f498d772), new Response("\x49\x6e\x74\x65\x72\x6e\x61\x6c\x20\x53\x65\x72\x76\x69\x63\x65\x20\x57\x6f\x72\x6b\x65\x72\x20\x45\x72\x72\x6f\x72\x3a\x20" + λdad3f498d772.message, {
          status: 500
        });
      }
    }
    addEventListener("\x6d\x65\x73\x73\x61\x67\x65", λdad3f498d772 => {
      if (!λdad3f498d772.data || "\x6f\x62\x6a\x65\x63\x74" != typeof λdad3f498d772.data || !λdad3f498d772.data.$controller$init || "\x6f\x62\x6a\x65\x63\x74" != typeof λdad3f498d772.data.$controller$init) return;
      let λ5172a1e22cc4 = λdad3f498d772.data.$controller$init, λfdf1b8d02b31 = λ3095c7fda12b.findIndex(λdad3f498d772 => λdad3f498d772.id === λ5172a1e22cc4.id);
      -1 !== λfdf1b8d02b31 && λ3095c7fda12b.splice(λfdf1b8d02b31, 1), λ3095c7fda12b.push(new s(λ5172a1e22cc4.prefix, λ5172a1e22cc4.id, λdad3f498d772.ports[0]));
    }), addEventListener("\x69\x6e\x73\x74\x61\x6c\x6c", () => {
      self.skipWaiting();
    }), addEventListener("\x61\x63\x74\x69\x76\x61\x74\x65", λdad3f498d772 => {
      λdad3f498d772.waitUntil(clients.claim());
    }), setTimeout(async () => {
      for (let λdad3f498d772 of (console.log("\x73\x65\x72\x76\x69\x63\x65\x20\x77\x6f\x72\x6b\x65\x72\x20\x61\x63\x74\x69\x76\x61\x74\x65\x64\x2c\x20\x6e\x6f\x74\x69\x66\x79\x69\x6e\x67\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x74\x6f\x20\x72\x65\x76\x69\x76\x65"), 
      await clients.matchAll())) λdad3f498d772.postMessage({
        $controller$swrevive: {}
      });
    }, 100);
  })(), $studyjetController = λfdf1b8d02b31;
})();
