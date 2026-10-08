var $studyjetController;

(() => {
  var λ59f1693d9b05 = {
    805(λ59f1693d9b05, λ2af5fefba3fc, λ13544333abe8) {
      λ13544333abe8.d(λ2af5fefba3fc, {
        C: () => o
      });
      class o {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λ59f1693d9b05, λ2af5fefba3fc, λ13544333abe8) {
          this.methods = λ59f1693d9b05, this.id = λ2af5fefba3fc, this.sendRaw = λ13544333abe8;
        }
        recieve(λ59f1693d9b05) {
          if (null == λ59f1693d9b05 || "\x6f\x62\x6a\x65\x63\x74" != typeof λ59f1693d9b05) return;
          let λ2af5fefba3fc = λ59f1693d9b05[this.id];
          if (null == λ2af5fefba3fc || "\x6f\x62\x6a\x65\x63\x74" != typeof λ2af5fefba3fc) return;
          let λ13544333abe8 = λ2af5fefba3fc.$type;
          if ("\x72\x65\x73\x70\x6f\x6e\x73\x65" === λ13544333abe8) {
            let λ59f1693d9b05 = λ2af5fefba3fc.$token, λ13544333abe8 = λ2af5fefba3fc.$data, λa5396c97d1c3 = λ2af5fefba3fc.$error, λ1f427bce801f = this.promiseCallbacks.get(λ59f1693d9b05);
            if (!λ1f427bce801f) return;
            this.promiseCallbacks.delete(λ59f1693d9b05), void 0 !== λa5396c97d1c3 ? λ1f427bce801f.reject(Error(λa5396c97d1c3)) : λ1f427bce801f.resolve(λ13544333abe8);
          } else if ("\x72\x65\x71\x75\x65\x73\x74" === λ13544333abe8) {
            let λ59f1693d9b05 = λ2af5fefba3fc.$method, λ13544333abe8 = λ2af5fefba3fc.$args;
            this.methods[λ59f1693d9b05](λ13544333abe8).then(λ59f1693d9b05 => {
              this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ2af5fefba3fc.$token,
                  $data: λ59f1693d9b05?.[0]
                }
              }, λ59f1693d9b05?.[1]);
            }).catch(λ59f1693d9b05 => {
              console.error(λ59f1693d9b05), this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ2af5fefba3fc.$token,
                  $error: λ59f1693d9b05?.toString() || "\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x65\x72\x72\x6f\x72"
                }
              }, []);
            });
          }
        }
        call(λ59f1693d9b05, λ2af5fefba3fc, λ13544333abe8 = []) {
          let λa5396c97d1c3 = this.counter++;
          return new Promise((λ1f427bce801f, λd6d57f39c19c) => {
            this.promiseCallbacks.set(λa5396c97d1c3, {
              resolve: λ1f427bce801f,
              reject: λd6d57f39c19c
            }), this.sendRaw({
              [this.id]: {
                $type: "\x72\x65\x71\x75\x65\x73\x74",
                $method: λ59f1693d9b05,
                $args: λ2af5fefba3fc,
                $token: λa5396c97d1c3
              }
            }, λ13544333abe8);
          });
        }
      }
    }
  }, λ2af5fefba3fc = {};
  function r(λ13544333abe8) {
    var λa5396c97d1c3 = λ2af5fefba3fc[λ13544333abe8];
    if (void 0 !== λa5396c97d1c3) return λa5396c97d1c3.exports;
    var λ1f427bce801f = λ2af5fefba3fc[λ13544333abe8] = {
      exports: {}
    };
    return λ59f1693d9b05[λ13544333abe8](λ1f427bce801f, λ1f427bce801f.exports, r), λ1f427bce801f.exports;
  }
  r.d = (λ59f1693d9b05, λ2af5fefba3fc) => {
    for (var λ13544333abe8 in λ2af5fefba3fc) r.o(λ2af5fefba3fc, λ13544333abe8) && !r.o(λ59f1693d9b05, λ13544333abe8) && Object.defineProperty(λ59f1693d9b05, λ13544333abe8, {
      enumerable: !0,
      get: λ2af5fefba3fc[λ13544333abe8]
    });
  }, r.o = (λ59f1693d9b05, λ2af5fefba3fc) => Object.prototype.hasOwnProperty.call(λ59f1693d9b05, λ2af5fefba3fc), 
  r.r = λ59f1693d9b05 => {
    "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λ59f1693d9b05, Symbol.toStringTag, {
      value: "\x4d\x6f\x64\x75\x6c\x65"
    }), Object.defineProperty(λ59f1693d9b05, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
      value: !0
    });
  };
  var λ13544333abe8 = {};
  (() => {
    r.r(λ13544333abe8), r.d(λ13544333abe8, {
      route: () => a,
      shouldRoute: () => n
    });
    var λ59f1693d9b05 = r(805);
    let λ2af5fefba3fc = {};
    addEventListener("\x6d\x65\x73\x73\x61\x67\x65", λ59f1693d9b05 => {
      if (λ59f1693d9b05.data && "\x6f\x62\x6a\x65\x63\x74" == typeof λ59f1693d9b05.data) {
        if (λ59f1693d9b05.data.$sw$setCookieDone && "\x6f\x62\x6a\x65\x63\x74" == typeof λ59f1693d9b05.data.$sw$setCookieDone) {
          let λ13544333abe8 = λ59f1693d9b05.data.$sw$setCookieDone, λa5396c97d1c3 = λ2af5fefba3fc[λ13544333abe8.id];
          λa5396c97d1c3 && (λa5396c97d1c3(), delete λ2af5fefba3fc[λ13544333abe8.id]);
        }
        if (λ59f1693d9b05.data.$sw$initRemoteTransport && "\x6f\x62\x6a\x65\x63\x74" == typeof λ59f1693d9b05.data.$sw$initRemoteTransport) {
          let {port: λ2af5fefba3fc, prefix: λ13544333abe8} = λ59f1693d9b05.data.$sw$initRemoteTransport, λ1f427bce801f = λa5396c97d1c3.find(λ59f1693d9b05 => new URL(λ13544333abe8).pathname.startsWith(λ59f1693d9b05.prefix));
          if (!λ1f427bce801f) return void console.error("\x4e\x6f\x20\x72\x65\x6c\x65\x76\x61\x6e\x74\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x66\x6f\x75\x6e\x64\x20\x66\x6f\x72\x20\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x69\x6e\x69\x74");
          λ1f427bce801f.rpc.call("\x69\x6e\x69\x74\x52\x65\x6d\x6f\x74\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74", λ2af5fefba3fc, [ λ2af5fefba3fc ]);
        }
      }
    });
    class s {
      prefix;
      id;
      rpc;
      constructor(λ13544333abe8, λa5396c97d1c3, λ1f427bce801f) {
        this.prefix = λ13544333abe8, this.id = λa5396c97d1c3, this.rpc = new λ59f1693d9b05.C({
          sendSetCookie: async ({cookies: λ59f1693d9b05, options: λ13544333abe8}) => {
            let λa5396c97d1c3 = await self.clients.matchAll({
              type: "\x77\x69\x6e\x64\x6f\x77",
              includeUncontrolled: !0
            }), λ1f427bce801f = [], λd6d57f39c19c = [], λ36738c316f90 = λ13544333abe8?.destination === "\x64\x6f\x63\x75\x6d\x65\x6e\x74" || λ13544333abe8?.destination === "\x69\x66\x72\x61\x6d\x65";
            for (let λaba2b9163448 of λa5396c97d1c3) {
              let λa5396c97d1c3 = Math.random().toString(36).substring(2, 10);
              λ1f427bce801f.push(λa5396c97d1c3), λaba2b9163448.postMessage({
                $controller$setCookie: {
                  cookies: λ59f1693d9b05,
                  options: λ13544333abe8,
                  id: λa5396c97d1c3,
                  controllerId: this.id
                }
              }), λ36738c316f90 || λd6d57f39c19c.push(new Promise(λ59f1693d9b05 => {
                λ2af5fefba3fc[λa5396c97d1c3] = () => λ59f1693d9b05(λa5396c97d1c3);
              }));
            }
            if (λd6d57f39c19c.length > 0) {
              let λ13544333abe8, λ36738c316f90 = !1, λaba2b9163448 = new Promise(λd6d57f39c19c => {
                λ13544333abe8 = setTimeout(() => {
                  if (!λ36738c316f90) {
                    let λ13544333abe8 = λ1f427bce801f.filter(λ59f1693d9b05 => void 0 !== λ2af5fefba3fc[λ59f1693d9b05]);
                    console.error(`\x74\x69\x6d\x65\x64\x20\x6f\x75\x74\x20\x77\x61\x69\x74\x69\x6e\x67\x20\x66\x6f\x72\x20\x73\x65\x74\x20\x63\x6f\x6f\x6b\x69\x65\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x28\x64\x65\x61\x64\x6c\x6f\x63\x6b\x3f\x29\x3a\x20\x63\x6f\x6f\x6b\x69\x65\x73\x3d${λ59f1693d9b05.length}\x20\x63\x6c\x69\x65\x6e\x74\x73\x3d${λa5396c97d1c3.length}\x20\x70\x65\x6e\x64\x69\x6e\x67\x3d${λ13544333abe8.length}\x2f${λ1f427bce801f.length}\x20\x63\x6c\x69\x65\x6e\x74\x55\x72\x6c\x73\x3d${λa5396c97d1c3.map(λ59f1693d9b05 => λ59f1693d9b05.url).join("\x2c")}`);
                  }
                  λd6d57f39c19c();
                }, 1e3);
              });
              try {
                await Promise.race([ λaba2b9163448, Promise.any(λd6d57f39c19c).then(() => {
                  λ36738c316f90 = !0;
                }).catch(() => {}) ]);
              } finally {
                for (let λ59f1693d9b05 of (void 0 !== λ13544333abe8 && clearTimeout(λ13544333abe8), 
                λ1f427bce801f)) delete λ2af5fefba3fc[λ59f1693d9b05];
              }
            }
          }
        }, "\x74\x61\x62\x63\x68\x61\x6e\x6e\x65\x6c\x2d" + λa5396c97d1c3, (λ59f1693d9b05, λ2af5fefba3fc) => {
          λ1f427bce801f.postMessage(λ59f1693d9b05, λ2af5fefba3fc);
        }), λ1f427bce801f.onmessage = λ59f1693d9b05 => {
          this.rpc.recieve(λ59f1693d9b05.data);
        }, λ1f427bce801f.onmessageerror = console.error, this.rpc.call("\x72\x65\x61\x64\x79", void 0);
      }
    }
    let λa5396c97d1c3 = [];
    function n(λ59f1693d9b05) {
      let λ2af5fefba3fc = new URL(λ59f1693d9b05.request.url);
      return void 0 !== λa5396c97d1c3.find(λ59f1693d9b05 => λ2af5fefba3fc.pathname.startsWith(λ59f1693d9b05.prefix));
    }
    async function a(λ59f1693d9b05) {
      try {
        let λ2af5fefba3fc = new URL(λ59f1693d9b05.request.url), λ13544333abe8 = λa5396c97d1c3.find(λ59f1693d9b05 => λ2af5fefba3fc.pathname.startsWith(λ59f1693d9b05.prefix)), λ1f427bce801f = await clients.get(λ59f1693d9b05.clientId), λd6d57f39c19c = [ ...λ59f1693d9b05.request.headers ], λ36738c316f90 = await λ13544333abe8.rpc.call("\x72\x65\x71\x75\x65\x73\x74", {
          rawUrl: λ59f1693d9b05.request.url,
          rawReferrer: λ59f1693d9b05.request.referrer,
          destination: λ59f1693d9b05.request.destination,
          mode: λ59f1693d9b05.request.mode,
          referrer: λ59f1693d9b05.request.referrer,
          method: λ59f1693d9b05.request.method,
          body: λ59f1693d9b05.request.body,
          cache: λ59f1693d9b05.request.cache,
          forceCrossOriginIsolated: !1,
          initialHeaders: λd6d57f39c19c,
          rawClientUrl: λ1f427bce801f ? λ1f427bce801f.url : void 0,
          clientId: λ59f1693d9b05.clientId || λ59f1693d9b05.resultingClientId
        }, λ59f1693d9b05.request.body instanceof ReadableStream || λ59f1693d9b05.request.body instanceof ArrayBuffer ? [ λ59f1693d9b05.request.body ] : void 0);
        return new Response(λ36738c316f90.body, {
          status: λ36738c316f90.status,
          statusText: λ36738c316f90.statusText,
          headers: λ36738c316f90.headers
        });
      } catch (λ59f1693d9b05) {
        return console.error("\x53\x65\x72\x76\x69\x63\x65\x20\x57\x6f\x72\x6b\x65\x72\x20\x65\x72\x72\x6f\x72\x3a", λ59f1693d9b05), new Response("\x49\x6e\x74\x65\x72\x6e\x61\x6c\x20\x53\x65\x72\x76\x69\x63\x65\x20\x57\x6f\x72\x6b\x65\x72\x20\x45\x72\x72\x6f\x72\x3a\x20" + λ59f1693d9b05.message, {
          status: 500
        });
      }
    }
    addEventListener("\x6d\x65\x73\x73\x61\x67\x65", λ59f1693d9b05 => {
      if (!λ59f1693d9b05.data || "\x6f\x62\x6a\x65\x63\x74" != typeof λ59f1693d9b05.data || !λ59f1693d9b05.data.$controller$init || "\x6f\x62\x6a\x65\x63\x74" != typeof λ59f1693d9b05.data.$controller$init) return;
      let λ2af5fefba3fc = λ59f1693d9b05.data.$controller$init, λ13544333abe8 = λa5396c97d1c3.findIndex(λ59f1693d9b05 => λ59f1693d9b05.id === λ2af5fefba3fc.id);
      -1 !== λ13544333abe8 && λa5396c97d1c3.splice(λ13544333abe8, 1), λa5396c97d1c3.push(new s(λ2af5fefba3fc.prefix, λ2af5fefba3fc.id, λ59f1693d9b05.ports[0]));
    }), addEventListener("\x69\x6e\x73\x74\x61\x6c\x6c", () => {
      self.skipWaiting();
    }), addEventListener("\x61\x63\x74\x69\x76\x61\x74\x65", λ59f1693d9b05 => {
      λ59f1693d9b05.waitUntil(clients.claim());
    }), setTimeout(async () => {
      for (let λ59f1693d9b05 of (console.log("\x73\x65\x72\x76\x69\x63\x65\x20\x77\x6f\x72\x6b\x65\x72\x20\x61\x63\x74\x69\x76\x61\x74\x65\x64\x2c\x20\x6e\x6f\x74\x69\x66\x79\x69\x6e\x67\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x74\x6f\x20\x72\x65\x76\x69\x76\x65"), 
      await clients.matchAll())) λ59f1693d9b05.postMessage({
        $controller$swrevive: {}
      });
    }, 100);
  })(), $studyjetController = λ13544333abe8;
})();
