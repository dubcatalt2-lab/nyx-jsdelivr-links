var $studyjetController;

(() => {
  var λa4df46b0ee40 = {
    805(λa4df46b0ee40, λ868ae55fce8a, λ78d829fd121e) {
      λ78d829fd121e.d(λ868ae55fce8a, {
        C: () => o
      });
      class o {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λa4df46b0ee40, λ868ae55fce8a, λ78d829fd121e) {
          this.methods = λa4df46b0ee40, this.id = λ868ae55fce8a, this.sendRaw = λ78d829fd121e;
        }
        recieve(λa4df46b0ee40) {
          if (null == λa4df46b0ee40 || "\x6f\x62\x6a\x65\x63\x74" != typeof λa4df46b0ee40) return;
          let λ868ae55fce8a = λa4df46b0ee40[this.id];
          if (null == λ868ae55fce8a || "\x6f\x62\x6a\x65\x63\x74" != typeof λ868ae55fce8a) return;
          let λ78d829fd121e = λ868ae55fce8a.$type;
          if ("\x72\x65\x73\x70\x6f\x6e\x73\x65" === λ78d829fd121e) {
            let λa4df46b0ee40 = λ868ae55fce8a.$token, λ78d829fd121e = λ868ae55fce8a.$data, λ2cd64e1ea0ad = λ868ae55fce8a.$error, λfe023e221e82 = this.promiseCallbacks.get(λa4df46b0ee40);
            if (!λfe023e221e82) return;
            this.promiseCallbacks.delete(λa4df46b0ee40), void 0 !== λ2cd64e1ea0ad ? λfe023e221e82.reject(Error(λ2cd64e1ea0ad)) : λfe023e221e82.resolve(λ78d829fd121e);
          } else if ("\x72\x65\x71\x75\x65\x73\x74" === λ78d829fd121e) {
            let λa4df46b0ee40 = λ868ae55fce8a.$method, λ78d829fd121e = λ868ae55fce8a.$args;
            this.methods[λa4df46b0ee40](λ78d829fd121e).then(λa4df46b0ee40 => {
              this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ868ae55fce8a.$token,
                  $data: λa4df46b0ee40?.[0]
                }
              }, λa4df46b0ee40?.[1]);
            }).catch(λa4df46b0ee40 => {
              console.error(λa4df46b0ee40), this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ868ae55fce8a.$token,
                  $error: λa4df46b0ee40?.toString() || "\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x65\x72\x72\x6f\x72"
                }
              }, []);
            });
          }
        }
        call(λa4df46b0ee40, λ868ae55fce8a, λ78d829fd121e = []) {
          let λ2cd64e1ea0ad = this.counter++;
          return new Promise((λfe023e221e82, λec8bb6a379e6) => {
            this.promiseCallbacks.set(λ2cd64e1ea0ad, {
              resolve: λfe023e221e82,
              reject: λec8bb6a379e6
            }), this.sendRaw({
              [this.id]: {
                $type: "\x72\x65\x71\x75\x65\x73\x74",
                $method: λa4df46b0ee40,
                $args: λ868ae55fce8a,
                $token: λ2cd64e1ea0ad
              }
            }, λ78d829fd121e);
          });
        }
      }
    }
  }, λ868ae55fce8a = {};
  function r(λ78d829fd121e) {
    var λ2cd64e1ea0ad = λ868ae55fce8a[λ78d829fd121e];
    if (void 0 !== λ2cd64e1ea0ad) return λ2cd64e1ea0ad.exports;
    var λfe023e221e82 = λ868ae55fce8a[λ78d829fd121e] = {
      exports: {}
    };
    return λa4df46b0ee40[λ78d829fd121e](λfe023e221e82, λfe023e221e82.exports, r), λfe023e221e82.exports;
  }
  r.d = (λa4df46b0ee40, λ868ae55fce8a) => {
    for (var λ78d829fd121e in λ868ae55fce8a) r.o(λ868ae55fce8a, λ78d829fd121e) && !r.o(λa4df46b0ee40, λ78d829fd121e) && Object.defineProperty(λa4df46b0ee40, λ78d829fd121e, {
      enumerable: !0,
      get: λ868ae55fce8a[λ78d829fd121e]
    });
  }, r.o = (λa4df46b0ee40, λ868ae55fce8a) => Object.prototype.hasOwnProperty.call(λa4df46b0ee40, λ868ae55fce8a), 
  r.r = λa4df46b0ee40 => {
    "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λa4df46b0ee40, Symbol.toStringTag, {
      value: "\x4d\x6f\x64\x75\x6c\x65"
    }), Object.defineProperty(λa4df46b0ee40, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
      value: !0
    });
  };
  var λ78d829fd121e = {};
  (() => {
    r.r(λ78d829fd121e), r.d(λ78d829fd121e, {
      route: () => a,
      shouldRoute: () => n
    });
    var λa4df46b0ee40 = r(805);
    let λ868ae55fce8a = {};
    addEventListener("\x6d\x65\x73\x73\x61\x67\x65", λa4df46b0ee40 => {
      if (λa4df46b0ee40.data && "\x6f\x62\x6a\x65\x63\x74" == typeof λa4df46b0ee40.data) {
        if (λa4df46b0ee40.data.$sw$setCookieDone && "\x6f\x62\x6a\x65\x63\x74" == typeof λa4df46b0ee40.data.$sw$setCookieDone) {
          let λ78d829fd121e = λa4df46b0ee40.data.$sw$setCookieDone, λ2cd64e1ea0ad = λ868ae55fce8a[λ78d829fd121e.id];
          λ2cd64e1ea0ad && (λ2cd64e1ea0ad(), delete λ868ae55fce8a[λ78d829fd121e.id]);
        }
        if (λa4df46b0ee40.data.$sw$initRemoteTransport && "\x6f\x62\x6a\x65\x63\x74" == typeof λa4df46b0ee40.data.$sw$initRemoteTransport) {
          let {port: λ868ae55fce8a, prefix: λ78d829fd121e} = λa4df46b0ee40.data.$sw$initRemoteTransport, λfe023e221e82 = λ2cd64e1ea0ad.find(λa4df46b0ee40 => new URL(λ78d829fd121e).pathname.startsWith(λa4df46b0ee40.prefix));
          if (!λfe023e221e82) return void console.error("\x4e\x6f\x20\x72\x65\x6c\x65\x76\x61\x6e\x74\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x66\x6f\x75\x6e\x64\x20\x66\x6f\x72\x20\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x69\x6e\x69\x74");
          λfe023e221e82.rpc.call("\x69\x6e\x69\x74\x52\x65\x6d\x6f\x74\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74", λ868ae55fce8a, [ λ868ae55fce8a ]);
        }
      }
    });
    class s {
      prefix;
      id;
      rpc;
      constructor(λ78d829fd121e, λ2cd64e1ea0ad, λfe023e221e82) {
        this.prefix = λ78d829fd121e, this.id = λ2cd64e1ea0ad, this.rpc = new λa4df46b0ee40.C({
          sendSetCookie: async ({cookies: λa4df46b0ee40, options: λ78d829fd121e}) => {
            let λ2cd64e1ea0ad = await self.clients.matchAll({
              type: "\x77\x69\x6e\x64\x6f\x77",
              includeUncontrolled: !0
            }), λfe023e221e82 = [], λec8bb6a379e6 = [], λ962a5581b8f7 = λ78d829fd121e?.destination === "\x64\x6f\x63\x75\x6d\x65\x6e\x74" || λ78d829fd121e?.destination === "\x69\x66\x72\x61\x6d\x65";
            for (let λd48739a309d7 of λ2cd64e1ea0ad) {
              let λ2cd64e1ea0ad = Math.random().toString(36).substring(2, 10);
              λfe023e221e82.push(λ2cd64e1ea0ad), λd48739a309d7.postMessage({
                $controller$setCookie: {
                  cookies: λa4df46b0ee40,
                  options: λ78d829fd121e,
                  id: λ2cd64e1ea0ad,
                  controllerId: this.id
                }
              }), λ962a5581b8f7 || λec8bb6a379e6.push(new Promise(λa4df46b0ee40 => {
                λ868ae55fce8a[λ2cd64e1ea0ad] = () => λa4df46b0ee40(λ2cd64e1ea0ad);
              }));
            }
            if (λec8bb6a379e6.length > 0) {
              let λ78d829fd121e, λ962a5581b8f7 = !1, λd48739a309d7 = new Promise(λec8bb6a379e6 => {
                λ78d829fd121e = setTimeout(() => {
                  if (!λ962a5581b8f7) {
                    let λ78d829fd121e = λfe023e221e82.filter(λa4df46b0ee40 => void 0 !== λ868ae55fce8a[λa4df46b0ee40]);
                    console.error(`\x74\x69\x6d\x65\x64\x20\x6f\x75\x74\x20\x77\x61\x69\x74\x69\x6e\x67\x20\x66\x6f\x72\x20\x73\x65\x74\x20\x63\x6f\x6f\x6b\x69\x65\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x28\x64\x65\x61\x64\x6c\x6f\x63\x6b\x3f\x29\x3a\x20\x63\x6f\x6f\x6b\x69\x65\x73\x3d${λa4df46b0ee40.length}\x20\x63\x6c\x69\x65\x6e\x74\x73\x3d${λ2cd64e1ea0ad.length}\x20\x70\x65\x6e\x64\x69\x6e\x67\x3d${λ78d829fd121e.length}\x2f${λfe023e221e82.length}\x20\x63\x6c\x69\x65\x6e\x74\x55\x72\x6c\x73\x3d${λ2cd64e1ea0ad.map(λa4df46b0ee40 => λa4df46b0ee40.url).join("\x2c")}`);
                  }
                  λec8bb6a379e6();
                }, 1e3);
              });
              try {
                await Promise.race([ λd48739a309d7, Promise.any(λec8bb6a379e6).then(() => {
                  λ962a5581b8f7 = !0;
                }).catch(() => {}) ]);
              } finally {
                for (let λa4df46b0ee40 of (void 0 !== λ78d829fd121e && clearTimeout(λ78d829fd121e), 
                λfe023e221e82)) delete λ868ae55fce8a[λa4df46b0ee40];
              }
            }
          }
        }, "\x74\x61\x62\x63\x68\x61\x6e\x6e\x65\x6c\x2d" + λ2cd64e1ea0ad, (λa4df46b0ee40, λ868ae55fce8a) => {
          λfe023e221e82.postMessage(λa4df46b0ee40, λ868ae55fce8a);
        }), λfe023e221e82.onmessage = λa4df46b0ee40 => {
          this.rpc.recieve(λa4df46b0ee40.data);
        }, λfe023e221e82.onmessageerror = console.error, this.rpc.call("\x72\x65\x61\x64\x79", void 0);
      }
    }
    let λ2cd64e1ea0ad = [];
    function n(λa4df46b0ee40) {
      let λ868ae55fce8a = new URL(λa4df46b0ee40.request.url);
      return void 0 !== λ2cd64e1ea0ad.find(λa4df46b0ee40 => λ868ae55fce8a.pathname.startsWith(λa4df46b0ee40.prefix));
    }
    async function a(λa4df46b0ee40) {
      try {
        let λ868ae55fce8a = new URL(λa4df46b0ee40.request.url), λ78d829fd121e = λ2cd64e1ea0ad.find(λa4df46b0ee40 => λ868ae55fce8a.pathname.startsWith(λa4df46b0ee40.prefix)), λfe023e221e82 = await clients.get(λa4df46b0ee40.clientId), λec8bb6a379e6 = [ ...λa4df46b0ee40.request.headers ], λ962a5581b8f7 = await λ78d829fd121e.rpc.call("\x72\x65\x71\x75\x65\x73\x74", {
          rawUrl: λa4df46b0ee40.request.url,
          rawReferrer: λa4df46b0ee40.request.referrer,
          destination: λa4df46b0ee40.request.destination,
          mode: λa4df46b0ee40.request.mode,
          referrer: λa4df46b0ee40.request.referrer,
          method: λa4df46b0ee40.request.method,
          body: λa4df46b0ee40.request.body,
          cache: λa4df46b0ee40.request.cache,
          forceCrossOriginIsolated: !1,
          initialHeaders: λec8bb6a379e6,
          rawClientUrl: λfe023e221e82 ? λfe023e221e82.url : void 0,
          clientId: λa4df46b0ee40.clientId || λa4df46b0ee40.resultingClientId
        }, λa4df46b0ee40.request.body instanceof ReadableStream || λa4df46b0ee40.request.body instanceof ArrayBuffer ? [ λa4df46b0ee40.request.body ] : void 0);
        return new Response(λ962a5581b8f7.body, {
          status: λ962a5581b8f7.status,
          statusText: λ962a5581b8f7.statusText,
          headers: λ962a5581b8f7.headers
        });
      } catch (λa4df46b0ee40) {
        return console.error("\x53\x65\x72\x76\x69\x63\x65\x20\x57\x6f\x72\x6b\x65\x72\x20\x65\x72\x72\x6f\x72\x3a", λa4df46b0ee40), new Response("\x49\x6e\x74\x65\x72\x6e\x61\x6c\x20\x53\x65\x72\x76\x69\x63\x65\x20\x57\x6f\x72\x6b\x65\x72\x20\x45\x72\x72\x6f\x72\x3a\x20" + λa4df46b0ee40.message, {
          status: 500
        });
      }
    }
    addEventListener("\x6d\x65\x73\x73\x61\x67\x65", λa4df46b0ee40 => {
      if (!λa4df46b0ee40.data || "\x6f\x62\x6a\x65\x63\x74" != typeof λa4df46b0ee40.data || !λa4df46b0ee40.data.$controller$init || "\x6f\x62\x6a\x65\x63\x74" != typeof λa4df46b0ee40.data.$controller$init) return;
      let λ868ae55fce8a = λa4df46b0ee40.data.$controller$init, λ78d829fd121e = λ2cd64e1ea0ad.findIndex(λa4df46b0ee40 => λa4df46b0ee40.id === λ868ae55fce8a.id);
      -1 !== λ78d829fd121e && λ2cd64e1ea0ad.splice(λ78d829fd121e, 1), λ2cd64e1ea0ad.push(new s(λ868ae55fce8a.prefix, λ868ae55fce8a.id, λa4df46b0ee40.ports[0]));
    }), addEventListener("\x69\x6e\x73\x74\x61\x6c\x6c", () => {
      self.skipWaiting();
    }), addEventListener("\x61\x63\x74\x69\x76\x61\x74\x65", λa4df46b0ee40 => {
      λa4df46b0ee40.waitUntil(clients.claim());
    }), setTimeout(async () => {
      for (let λa4df46b0ee40 of (console.log("\x73\x65\x72\x76\x69\x63\x65\x20\x77\x6f\x72\x6b\x65\x72\x20\x61\x63\x74\x69\x76\x61\x74\x65\x64\x2c\x20\x6e\x6f\x74\x69\x66\x79\x69\x6e\x67\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x74\x6f\x20\x72\x65\x76\x69\x76\x65"), 
      await clients.matchAll())) λa4df46b0ee40.postMessage({
        $controller$swrevive: {}
      });
    }, 100);
  })(), $studyjetController = λ78d829fd121e;
})();
