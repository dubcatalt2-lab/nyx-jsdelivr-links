var $studyjetController;

(() => {
  var λ98df1e532f79 = {
    805(λ98df1e532f79, λf5d0afca6434, λcf355940e3a5) {
      λcf355940e3a5.d(λf5d0afca6434, {
        C: () => o
      });
      class o {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λ98df1e532f79, λf5d0afca6434, λcf355940e3a5) {
          this.methods = λ98df1e532f79, this.id = λf5d0afca6434, this.sendRaw = λcf355940e3a5;
        }
        recieve(λ98df1e532f79) {
          if (null == λ98df1e532f79 || "\x6f\x62\x6a\x65\x63\x74" != typeof λ98df1e532f79) return;
          let λf5d0afca6434 = λ98df1e532f79[this.id];
          if (null == λf5d0afca6434 || "\x6f\x62\x6a\x65\x63\x74" != typeof λf5d0afca6434) return;
          let λcf355940e3a5 = λf5d0afca6434.$type;
          if ("\x72\x65\x73\x70\x6f\x6e\x73\x65" === λcf355940e3a5) {
            let λ98df1e532f79 = λf5d0afca6434.$token, λcf355940e3a5 = λf5d0afca6434.$data, λ38c8bfd543ed = λf5d0afca6434.$error, λ4ffc492fb424 = this.promiseCallbacks.get(λ98df1e532f79);
            if (!λ4ffc492fb424) return;
            this.promiseCallbacks.delete(λ98df1e532f79), void 0 !== λ38c8bfd543ed ? λ4ffc492fb424.reject(Error(λ38c8bfd543ed)) : λ4ffc492fb424.resolve(λcf355940e3a5);
          } else if ("\x72\x65\x71\x75\x65\x73\x74" === λcf355940e3a5) {
            let λ98df1e532f79 = λf5d0afca6434.$method, λcf355940e3a5 = λf5d0afca6434.$args;
            this.methods[λ98df1e532f79](λcf355940e3a5).then(λ98df1e532f79 => {
              this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λf5d0afca6434.$token,
                  $data: λ98df1e532f79?.[0]
                }
              }, λ98df1e532f79?.[1]);
            }).catch(λ98df1e532f79 => {
              console.error(λ98df1e532f79), this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λf5d0afca6434.$token,
                  $error: λ98df1e532f79?.toString() || "\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x65\x72\x72\x6f\x72"
                }
              }, []);
            });
          }
        }
        call(λ98df1e532f79, λf5d0afca6434, λcf355940e3a5 = []) {
          let λ38c8bfd543ed = this.counter++;
          return new Promise((λ4ffc492fb424, λ86df3e496782) => {
            this.promiseCallbacks.set(λ38c8bfd543ed, {
              resolve: λ4ffc492fb424,
              reject: λ86df3e496782
            }), this.sendRaw({
              [this.id]: {
                $type: "\x72\x65\x71\x75\x65\x73\x74",
                $method: λ98df1e532f79,
                $args: λf5d0afca6434,
                $token: λ38c8bfd543ed
              }
            }, λcf355940e3a5);
          });
        }
      }
    }
  }, λf5d0afca6434 = {};
  function r(λcf355940e3a5) {
    var λ38c8bfd543ed = λf5d0afca6434[λcf355940e3a5];
    if (void 0 !== λ38c8bfd543ed) return λ38c8bfd543ed.exports;
    var λ4ffc492fb424 = λf5d0afca6434[λcf355940e3a5] = {
      exports: {}
    };
    return λ98df1e532f79[λcf355940e3a5](λ4ffc492fb424, λ4ffc492fb424.exports, r), λ4ffc492fb424.exports;
  }
  r.d = (λ98df1e532f79, λf5d0afca6434) => {
    for (var λcf355940e3a5 in λf5d0afca6434) r.o(λf5d0afca6434, λcf355940e3a5) && !r.o(λ98df1e532f79, λcf355940e3a5) && Object.defineProperty(λ98df1e532f79, λcf355940e3a5, {
      enumerable: !0,
      get: λf5d0afca6434[λcf355940e3a5]
    });
  }, r.o = (λ98df1e532f79, λf5d0afca6434) => Object.prototype.hasOwnProperty.call(λ98df1e532f79, λf5d0afca6434), 
  r.r = λ98df1e532f79 => {
    "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λ98df1e532f79, Symbol.toStringTag, {
      value: "\x4d\x6f\x64\x75\x6c\x65"
    }), Object.defineProperty(λ98df1e532f79, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
      value: !0
    });
  };
  var λcf355940e3a5 = {};
  (() => {
    r.r(λcf355940e3a5), r.d(λcf355940e3a5, {
      route: () => a,
      shouldRoute: () => n
    });
    var λ98df1e532f79 = r(805);
    let λf5d0afca6434 = {};
    addEventListener("\x6d\x65\x73\x73\x61\x67\x65", λ98df1e532f79 => {
      if (λ98df1e532f79.data && "\x6f\x62\x6a\x65\x63\x74" == typeof λ98df1e532f79.data) {
        if (λ98df1e532f79.data.$sw$setCookieDone && "\x6f\x62\x6a\x65\x63\x74" == typeof λ98df1e532f79.data.$sw$setCookieDone) {
          let λcf355940e3a5 = λ98df1e532f79.data.$sw$setCookieDone, λ38c8bfd543ed = λf5d0afca6434[λcf355940e3a5.id];
          λ38c8bfd543ed && (λ38c8bfd543ed(), delete λf5d0afca6434[λcf355940e3a5.id]);
        }
        if (λ98df1e532f79.data.$sw$initRemoteTransport && "\x6f\x62\x6a\x65\x63\x74" == typeof λ98df1e532f79.data.$sw$initRemoteTransport) {
          let {port: λf5d0afca6434, prefix: λcf355940e3a5} = λ98df1e532f79.data.$sw$initRemoteTransport, λ4ffc492fb424 = λ38c8bfd543ed.find(λ98df1e532f79 => new URL(λcf355940e3a5).pathname.startsWith(λ98df1e532f79.prefix));
          if (!λ4ffc492fb424) return void console.error("\x4e\x6f\x20\x72\x65\x6c\x65\x76\x61\x6e\x74\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x66\x6f\x75\x6e\x64\x20\x66\x6f\x72\x20\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x69\x6e\x69\x74");
          λ4ffc492fb424.rpc.call("\x69\x6e\x69\x74\x52\x65\x6d\x6f\x74\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74", λf5d0afca6434, [ λf5d0afca6434 ]);
        }
      }
    });
    class s {
      prefix;
      id;
      rpc;
      constructor(λcf355940e3a5, λ38c8bfd543ed, λ4ffc492fb424) {
        this.prefix = λcf355940e3a5, this.id = λ38c8bfd543ed, this.rpc = new λ98df1e532f79.C({
          sendSetCookie: async ({cookies: λ98df1e532f79, options: λcf355940e3a5}) => {
            let λ38c8bfd543ed = await self.clients.matchAll({
              type: "\x77\x69\x6e\x64\x6f\x77",
              includeUncontrolled: !0
            }), λ4ffc492fb424 = [], λ86df3e496782 = [], λ061c10ac7c56 = λcf355940e3a5?.destination === "\x64\x6f\x63\x75\x6d\x65\x6e\x74" || λcf355940e3a5?.destination === "\x69\x66\x72\x61\x6d\x65";
            for (let λ2bdfca1e5976 of λ38c8bfd543ed) {
              let λ38c8bfd543ed = Math.random().toString(36).substring(2, 10);
              λ4ffc492fb424.push(λ38c8bfd543ed), λ2bdfca1e5976.postMessage({
                $controller$setCookie: {
                  cookies: λ98df1e532f79,
                  options: λcf355940e3a5,
                  id: λ38c8bfd543ed,
                  controllerId: this.id
                }
              }), λ061c10ac7c56 || λ86df3e496782.push(new Promise(λ98df1e532f79 => {
                λf5d0afca6434[λ38c8bfd543ed] = () => λ98df1e532f79(λ38c8bfd543ed);
              }));
            }
            if (λ86df3e496782.length > 0) {
              let λcf355940e3a5, λ061c10ac7c56 = !1, λ2bdfca1e5976 = new Promise(λ86df3e496782 => {
                λcf355940e3a5 = setTimeout(() => {
                  if (!λ061c10ac7c56) {
                    let λcf355940e3a5 = λ4ffc492fb424.filter(λ98df1e532f79 => void 0 !== λf5d0afca6434[λ98df1e532f79]);
                    console.error(`\x74\x69\x6d\x65\x64\x20\x6f\x75\x74\x20\x77\x61\x69\x74\x69\x6e\x67\x20\x66\x6f\x72\x20\x73\x65\x74\x20\x63\x6f\x6f\x6b\x69\x65\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x28\x64\x65\x61\x64\x6c\x6f\x63\x6b\x3f\x29\x3a\x20\x63\x6f\x6f\x6b\x69\x65\x73\x3d${λ98df1e532f79.length}\x20\x63\x6c\x69\x65\x6e\x74\x73\x3d${λ38c8bfd543ed.length}\x20\x70\x65\x6e\x64\x69\x6e\x67\x3d${λcf355940e3a5.length}\x2f${λ4ffc492fb424.length}\x20\x63\x6c\x69\x65\x6e\x74\x55\x72\x6c\x73\x3d${λ38c8bfd543ed.map(λ98df1e532f79 => λ98df1e532f79.url).join("\x2c")}`);
                  }
                  λ86df3e496782();
                }, 1e3);
              });
              try {
                await Promise.race([ λ2bdfca1e5976, Promise.any(λ86df3e496782).then(() => {
                  λ061c10ac7c56 = !0;
                }).catch(() => {}) ]);
              } finally {
                for (let λ98df1e532f79 of (void 0 !== λcf355940e3a5 && clearTimeout(λcf355940e3a5), 
                λ4ffc492fb424)) delete λf5d0afca6434[λ98df1e532f79];
              }
            }
          }
        }, "\x74\x61\x62\x63\x68\x61\x6e\x6e\x65\x6c\x2d" + λ38c8bfd543ed, (λ98df1e532f79, λf5d0afca6434) => {
          λ4ffc492fb424.postMessage(λ98df1e532f79, λf5d0afca6434);
        }), λ4ffc492fb424.onmessage = λ98df1e532f79 => {
          this.rpc.recieve(λ98df1e532f79.data);
        }, λ4ffc492fb424.onmessageerror = console.error, this.rpc.call("\x72\x65\x61\x64\x79", void 0);
      }
    }
    let λ38c8bfd543ed = [];
    function n(λ98df1e532f79) {
      let λf5d0afca6434 = new URL(λ98df1e532f79.request.url);
      return void 0 !== λ38c8bfd543ed.find(λ98df1e532f79 => λf5d0afca6434.pathname.startsWith(λ98df1e532f79.prefix));
    }
    async function a(λ98df1e532f79) {
      try {
        let λf5d0afca6434 = new URL(λ98df1e532f79.request.url), λcf355940e3a5 = λ38c8bfd543ed.find(λ98df1e532f79 => λf5d0afca6434.pathname.startsWith(λ98df1e532f79.prefix)), λ4ffc492fb424 = await clients.get(λ98df1e532f79.clientId), λ86df3e496782 = [ ...λ98df1e532f79.request.headers ], λ061c10ac7c56 = await λcf355940e3a5.rpc.call("\x72\x65\x71\x75\x65\x73\x74", {
          rawUrl: λ98df1e532f79.request.url,
          rawReferrer: λ98df1e532f79.request.referrer,
          destination: λ98df1e532f79.request.destination,
          mode: λ98df1e532f79.request.mode,
          referrer: λ98df1e532f79.request.referrer,
          method: λ98df1e532f79.request.method,
          body: λ98df1e532f79.request.body,
          cache: λ98df1e532f79.request.cache,
          forceCrossOriginIsolated: !1,
          initialHeaders: λ86df3e496782,
          rawClientUrl: λ4ffc492fb424 ? λ4ffc492fb424.url : void 0,
          clientId: λ98df1e532f79.clientId || λ98df1e532f79.resultingClientId
        }, λ98df1e532f79.request.body instanceof ReadableStream || λ98df1e532f79.request.body instanceof ArrayBuffer ? [ λ98df1e532f79.request.body ] : void 0);
        return new Response(λ061c10ac7c56.body, {
          status: λ061c10ac7c56.status,
          statusText: λ061c10ac7c56.statusText,
          headers: λ061c10ac7c56.headers
        });
      } catch (λ98df1e532f79) {
        return console.error("\x53\x65\x72\x76\x69\x63\x65\x20\x57\x6f\x72\x6b\x65\x72\x20\x65\x72\x72\x6f\x72\x3a", λ98df1e532f79), new Response("\x49\x6e\x74\x65\x72\x6e\x61\x6c\x20\x53\x65\x72\x76\x69\x63\x65\x20\x57\x6f\x72\x6b\x65\x72\x20\x45\x72\x72\x6f\x72\x3a\x20" + λ98df1e532f79.message, {
          status: 500
        });
      }
    }
    addEventListener("\x6d\x65\x73\x73\x61\x67\x65", λ98df1e532f79 => {
      if (!λ98df1e532f79.data || "\x6f\x62\x6a\x65\x63\x74" != typeof λ98df1e532f79.data || !λ98df1e532f79.data.$controller$init || "\x6f\x62\x6a\x65\x63\x74" != typeof λ98df1e532f79.data.$controller$init) return;
      let λf5d0afca6434 = λ98df1e532f79.data.$controller$init, λcf355940e3a5 = λ38c8bfd543ed.findIndex(λ98df1e532f79 => λ98df1e532f79.id === λf5d0afca6434.id);
      -1 !== λcf355940e3a5 && λ38c8bfd543ed.splice(λcf355940e3a5, 1), λ38c8bfd543ed.push(new s(λf5d0afca6434.prefix, λf5d0afca6434.id, λ98df1e532f79.ports[0]));
    }), addEventListener("\x69\x6e\x73\x74\x61\x6c\x6c", () => {
      self.skipWaiting();
    }), addEventListener("\x61\x63\x74\x69\x76\x61\x74\x65", λ98df1e532f79 => {
      λ98df1e532f79.waitUntil(clients.claim());
    }), setTimeout(async () => {
      for (let λ98df1e532f79 of (console.log("\x73\x65\x72\x76\x69\x63\x65\x20\x77\x6f\x72\x6b\x65\x72\x20\x61\x63\x74\x69\x76\x61\x74\x65\x64\x2c\x20\x6e\x6f\x74\x69\x66\x79\x69\x6e\x67\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x74\x6f\x20\x72\x65\x76\x69\x76\x65"), 
      await clients.matchAll())) λ98df1e532f79.postMessage({
        $controller$swrevive: {}
      });
    }, 100);
  })(), $studyjetController = λcf355940e3a5;
})();
