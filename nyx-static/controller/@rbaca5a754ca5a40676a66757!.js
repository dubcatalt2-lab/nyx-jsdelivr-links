var $studyjetController;

(() => {
  var λ453a16bc49d8 = {
    805(λ453a16bc49d8, λ99049c36545d, λb9db045eaa95) {
      λb9db045eaa95.d(λ99049c36545d, {
        C: () => o
      });
      class o {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λ453a16bc49d8, λ99049c36545d, λb9db045eaa95) {
          this.methods = λ453a16bc49d8, this.id = λ99049c36545d, this.sendRaw = λb9db045eaa95;
        }
        recieve(λ453a16bc49d8) {
          if (null == λ453a16bc49d8 || "\x6f\x62\x6a\x65\x63\x74" != typeof λ453a16bc49d8) return;
          let λ99049c36545d = λ453a16bc49d8[this.id];
          if (null == λ99049c36545d || "\x6f\x62\x6a\x65\x63\x74" != typeof λ99049c36545d) return;
          let λb9db045eaa95 = λ99049c36545d.$type;
          if ("\x72\x65\x73\x70\x6f\x6e\x73\x65" === λb9db045eaa95) {
            let λ453a16bc49d8 = λ99049c36545d.$token, λb9db045eaa95 = λ99049c36545d.$data, λa264f50204a6 = λ99049c36545d.$error, λ223f4322e18d = this.promiseCallbacks.get(λ453a16bc49d8);
            if (!λ223f4322e18d) return;
            this.promiseCallbacks.delete(λ453a16bc49d8), void 0 !== λa264f50204a6 ? λ223f4322e18d.reject(Error(λa264f50204a6)) : λ223f4322e18d.resolve(λb9db045eaa95);
          } else if ("\x72\x65\x71\x75\x65\x73\x74" === λb9db045eaa95) {
            let λ453a16bc49d8 = λ99049c36545d.$method, λb9db045eaa95 = λ99049c36545d.$args;
            this.methods[λ453a16bc49d8](λb9db045eaa95).then(λ453a16bc49d8 => {
              this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ99049c36545d.$token,
                  $data: λ453a16bc49d8?.[0]
                }
              }, λ453a16bc49d8?.[1]);
            }).catch(λ453a16bc49d8 => {
              console.error(λ453a16bc49d8), this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ99049c36545d.$token,
                  $error: λ453a16bc49d8?.toString() || "\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x65\x72\x72\x6f\x72"
                }
              }, []);
            });
          }
        }
        call(λ453a16bc49d8, λ99049c36545d, λb9db045eaa95 = []) {
          let λa264f50204a6 = this.counter++;
          return new Promise((λ223f4322e18d, λc0586d99b2a8) => {
            this.promiseCallbacks.set(λa264f50204a6, {
              resolve: λ223f4322e18d,
              reject: λc0586d99b2a8
            }), this.sendRaw({
              [this.id]: {
                $type: "\x72\x65\x71\x75\x65\x73\x74",
                $method: λ453a16bc49d8,
                $args: λ99049c36545d,
                $token: λa264f50204a6
              }
            }, λb9db045eaa95);
          });
        }
      }
    }
  }, λ99049c36545d = {};
  function r(λb9db045eaa95) {
    var λa264f50204a6 = λ99049c36545d[λb9db045eaa95];
    if (void 0 !== λa264f50204a6) return λa264f50204a6.exports;
    var λ223f4322e18d = λ99049c36545d[λb9db045eaa95] = {
      exports: {}
    };
    return λ453a16bc49d8[λb9db045eaa95](λ223f4322e18d, λ223f4322e18d.exports, r), λ223f4322e18d.exports;
  }
  r.d = (λ453a16bc49d8, λ99049c36545d) => {
    for (var λb9db045eaa95 in λ99049c36545d) r.o(λ99049c36545d, λb9db045eaa95) && !r.o(λ453a16bc49d8, λb9db045eaa95) && Object.defineProperty(λ453a16bc49d8, λb9db045eaa95, {
      enumerable: !0,
      get: λ99049c36545d[λb9db045eaa95]
    });
  }, r.o = (λ453a16bc49d8, λ99049c36545d) => Object.prototype.hasOwnProperty.call(λ453a16bc49d8, λ99049c36545d), 
  r.r = λ453a16bc49d8 => {
    "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λ453a16bc49d8, Symbol.toStringTag, {
      value: "\x4d\x6f\x64\x75\x6c\x65"
    }), Object.defineProperty(λ453a16bc49d8, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
      value: !0
    });
  };
  var λb9db045eaa95 = {};
  (() => {
    r.r(λb9db045eaa95), r.d(λb9db045eaa95, {
      route: () => a,
      shouldRoute: () => n
    });
    var λ453a16bc49d8 = r(805);
    let λ99049c36545d = {};
    addEventListener("\x6d\x65\x73\x73\x61\x67\x65", λ453a16bc49d8 => {
      if (λ453a16bc49d8.data && "\x6f\x62\x6a\x65\x63\x74" == typeof λ453a16bc49d8.data) {
        if (λ453a16bc49d8.data.$sw$setCookieDone && "\x6f\x62\x6a\x65\x63\x74" == typeof λ453a16bc49d8.data.$sw$setCookieDone) {
          let λb9db045eaa95 = λ453a16bc49d8.data.$sw$setCookieDone, λa264f50204a6 = λ99049c36545d[λb9db045eaa95.id];
          λa264f50204a6 && (λa264f50204a6(), delete λ99049c36545d[λb9db045eaa95.id]);
        }
        if (λ453a16bc49d8.data.$sw$initRemoteTransport && "\x6f\x62\x6a\x65\x63\x74" == typeof λ453a16bc49d8.data.$sw$initRemoteTransport) {
          let {port: λ99049c36545d, prefix: λb9db045eaa95} = λ453a16bc49d8.data.$sw$initRemoteTransport, λ223f4322e18d = λa264f50204a6.find(λ453a16bc49d8 => new URL(λb9db045eaa95).pathname.startsWith(λ453a16bc49d8.prefix));
          if (!λ223f4322e18d) return void console.error("\x4e\x6f\x20\x72\x65\x6c\x65\x76\x61\x6e\x74\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x66\x6f\x75\x6e\x64\x20\x66\x6f\x72\x20\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x69\x6e\x69\x74");
          λ223f4322e18d.rpc.call("\x69\x6e\x69\x74\x52\x65\x6d\x6f\x74\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74", λ99049c36545d, [ λ99049c36545d ]);
        }
      }
    });
    class s {
      prefix;
      id;
      rpc;
      constructor(λb9db045eaa95, λa264f50204a6, λ223f4322e18d) {
        this.prefix = λb9db045eaa95, this.id = λa264f50204a6, this.rpc = new λ453a16bc49d8.C({
          sendSetCookie: async ({cookies: λ453a16bc49d8, options: λb9db045eaa95}) => {
            let λa264f50204a6 = await self.clients.matchAll({
              type: "\x77\x69\x6e\x64\x6f\x77",
              includeUncontrolled: !0
            }), λ223f4322e18d = [], λc0586d99b2a8 = [], λ6535d02621ff = λb9db045eaa95?.destination === "\x64\x6f\x63\x75\x6d\x65\x6e\x74" || λb9db045eaa95?.destination === "\x69\x66\x72\x61\x6d\x65";
            for (let λ7c4fe4f426c3 of λa264f50204a6) {
              let λa264f50204a6 = Math.random().toString(36).substring(2, 10);
              λ223f4322e18d.push(λa264f50204a6), λ7c4fe4f426c3.postMessage({
                $controller$setCookie: {
                  cookies: λ453a16bc49d8,
                  options: λb9db045eaa95,
                  id: λa264f50204a6,
                  controllerId: this.id
                }
              }), λ6535d02621ff || λc0586d99b2a8.push(new Promise(λ453a16bc49d8 => {
                λ99049c36545d[λa264f50204a6] = () => λ453a16bc49d8(λa264f50204a6);
              }));
            }
            if (λc0586d99b2a8.length > 0) {
              let λb9db045eaa95, λ6535d02621ff = !1, λ7c4fe4f426c3 = new Promise(λc0586d99b2a8 => {
                λb9db045eaa95 = setTimeout(() => {
                  if (!λ6535d02621ff) {
                    let λb9db045eaa95 = λ223f4322e18d.filter(λ453a16bc49d8 => void 0 !== λ99049c36545d[λ453a16bc49d8]);
                    console.error(`\x74\x69\x6d\x65\x64\x20\x6f\x75\x74\x20\x77\x61\x69\x74\x69\x6e\x67\x20\x66\x6f\x72\x20\x73\x65\x74\x20\x63\x6f\x6f\x6b\x69\x65\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x28\x64\x65\x61\x64\x6c\x6f\x63\x6b\x3f\x29\x3a\x20\x63\x6f\x6f\x6b\x69\x65\x73\x3d${λ453a16bc49d8.length}\x20\x63\x6c\x69\x65\x6e\x74\x73\x3d${λa264f50204a6.length}\x20\x70\x65\x6e\x64\x69\x6e\x67\x3d${λb9db045eaa95.length}\x2f${λ223f4322e18d.length}\x20\x63\x6c\x69\x65\x6e\x74\x55\x72\x6c\x73\x3d${λa264f50204a6.map(λ453a16bc49d8 => λ453a16bc49d8.url).join("\x2c")}`);
                  }
                  λc0586d99b2a8();
                }, 1e3);
              });
              try {
                await Promise.race([ λ7c4fe4f426c3, Promise.any(λc0586d99b2a8).then(() => {
                  λ6535d02621ff = !0;
                }).catch(() => {}) ]);
              } finally {
                for (let λ453a16bc49d8 of (void 0 !== λb9db045eaa95 && clearTimeout(λb9db045eaa95), 
                λ223f4322e18d)) delete λ99049c36545d[λ453a16bc49d8];
              }
            }
          }
        }, "\x74\x61\x62\x63\x68\x61\x6e\x6e\x65\x6c\x2d" + λa264f50204a6, (λ453a16bc49d8, λ99049c36545d) => {
          λ223f4322e18d.postMessage(λ453a16bc49d8, λ99049c36545d);
        }), λ223f4322e18d.onmessage = λ453a16bc49d8 => {
          this.rpc.recieve(λ453a16bc49d8.data);
        }, λ223f4322e18d.onmessageerror = console.error, this.rpc.call("\x72\x65\x61\x64\x79", void 0);
      }
    }
    let λa264f50204a6 = [];
    function n(λ453a16bc49d8) {
      let λ99049c36545d = new URL(λ453a16bc49d8.request.url);
      return void 0 !== λa264f50204a6.find(λ453a16bc49d8 => λ99049c36545d.pathname.startsWith(λ453a16bc49d8.prefix));
    }
    async function a(λ453a16bc49d8) {
      try {
        let λ99049c36545d = new URL(λ453a16bc49d8.request.url), λb9db045eaa95 = λa264f50204a6.find(λ453a16bc49d8 => λ99049c36545d.pathname.startsWith(λ453a16bc49d8.prefix)), λ223f4322e18d = await clients.get(λ453a16bc49d8.clientId), λc0586d99b2a8 = [ ...λ453a16bc49d8.request.headers ], λ6535d02621ff = await λb9db045eaa95.rpc.call("\x72\x65\x71\x75\x65\x73\x74", {
          rawUrl: λ453a16bc49d8.request.url,
          rawReferrer: λ453a16bc49d8.request.referrer,
          destination: λ453a16bc49d8.request.destination,
          mode: λ453a16bc49d8.request.mode,
          referrer: λ453a16bc49d8.request.referrer,
          method: λ453a16bc49d8.request.method,
          body: λ453a16bc49d8.request.body,
          cache: λ453a16bc49d8.request.cache,
          forceCrossOriginIsolated: !1,
          initialHeaders: λc0586d99b2a8,
          rawClientUrl: λ223f4322e18d ? λ223f4322e18d.url : void 0,
          clientId: λ453a16bc49d8.clientId || λ453a16bc49d8.resultingClientId
        }, λ453a16bc49d8.request.body instanceof ReadableStream || λ453a16bc49d8.request.body instanceof ArrayBuffer ? [ λ453a16bc49d8.request.body ] : void 0);
        return new Response(λ6535d02621ff.body, {
          status: λ6535d02621ff.status,
          statusText: λ6535d02621ff.statusText,
          headers: λ6535d02621ff.headers
        });
      } catch (λ453a16bc49d8) {
        return console.error("\x53\x65\x72\x76\x69\x63\x65\x20\x57\x6f\x72\x6b\x65\x72\x20\x65\x72\x72\x6f\x72\x3a", λ453a16bc49d8), new Response("\x49\x6e\x74\x65\x72\x6e\x61\x6c\x20\x53\x65\x72\x76\x69\x63\x65\x20\x57\x6f\x72\x6b\x65\x72\x20\x45\x72\x72\x6f\x72\x3a\x20" + λ453a16bc49d8.message, {
          status: 500
        });
      }
    }
    addEventListener("\x6d\x65\x73\x73\x61\x67\x65", λ453a16bc49d8 => {
      if (!λ453a16bc49d8.data || "\x6f\x62\x6a\x65\x63\x74" != typeof λ453a16bc49d8.data || !λ453a16bc49d8.data.$controller$init || "\x6f\x62\x6a\x65\x63\x74" != typeof λ453a16bc49d8.data.$controller$init) return;
      let λ99049c36545d = λ453a16bc49d8.data.$controller$init, λb9db045eaa95 = λa264f50204a6.findIndex(λ453a16bc49d8 => λ453a16bc49d8.id === λ99049c36545d.id);
      -1 !== λb9db045eaa95 && λa264f50204a6.splice(λb9db045eaa95, 1), λa264f50204a6.push(new s(λ99049c36545d.prefix, λ99049c36545d.id, λ453a16bc49d8.ports[0]));
    }), addEventListener("\x69\x6e\x73\x74\x61\x6c\x6c", () => {
      self.skipWaiting();
    }), addEventListener("\x61\x63\x74\x69\x76\x61\x74\x65", λ453a16bc49d8 => {
      λ453a16bc49d8.waitUntil(clients.claim());
    }), setTimeout(async () => {
      for (let λ453a16bc49d8 of (console.log("\x73\x65\x72\x76\x69\x63\x65\x20\x77\x6f\x72\x6b\x65\x72\x20\x61\x63\x74\x69\x76\x61\x74\x65\x64\x2c\x20\x6e\x6f\x74\x69\x66\x79\x69\x6e\x67\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x74\x6f\x20\x72\x65\x76\x69\x76\x65"), 
      await clients.matchAll())) λ453a16bc49d8.postMessage({
        $controller$swrevive: {}
      });
    }, 100);
  })(), $studyjetController = λb9db045eaa95;
})();
