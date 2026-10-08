var $studyjetController;

(() => {
  var λfd8663bc88e8 = {
    805(λfd8663bc88e8, λ7a81504bac53, λb32ce6ea6ba1) {
      λb32ce6ea6ba1.d(λ7a81504bac53, {
        C: () => o
      });
      class o {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λfd8663bc88e8, λ7a81504bac53, λb32ce6ea6ba1) {
          this.methods = λfd8663bc88e8, this.id = λ7a81504bac53, this.sendRaw = λb32ce6ea6ba1;
        }
        recieve(λfd8663bc88e8) {
          if (null == λfd8663bc88e8 || "\x6f\x62\x6a\x65\x63\x74" != typeof λfd8663bc88e8) return;
          let λ7a81504bac53 = λfd8663bc88e8[this.id];
          if (null == λ7a81504bac53 || "\x6f\x62\x6a\x65\x63\x74" != typeof λ7a81504bac53) return;
          let λb32ce6ea6ba1 = λ7a81504bac53.$type;
          if ("\x72\x65\x73\x70\x6f\x6e\x73\x65" === λb32ce6ea6ba1) {
            let λfd8663bc88e8 = λ7a81504bac53.$token, λb32ce6ea6ba1 = λ7a81504bac53.$data, λf44539fb450b = λ7a81504bac53.$error, λ79675e01b019 = this.promiseCallbacks.get(λfd8663bc88e8);
            if (!λ79675e01b019) return;
            this.promiseCallbacks.delete(λfd8663bc88e8), void 0 !== λf44539fb450b ? λ79675e01b019.reject(Error(λf44539fb450b)) : λ79675e01b019.resolve(λb32ce6ea6ba1);
          } else if ("\x72\x65\x71\x75\x65\x73\x74" === λb32ce6ea6ba1) {
            let λfd8663bc88e8 = λ7a81504bac53.$method, λb32ce6ea6ba1 = λ7a81504bac53.$args;
            this.methods[λfd8663bc88e8](λb32ce6ea6ba1).then(λfd8663bc88e8 => {
              this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ7a81504bac53.$token,
                  $data: λfd8663bc88e8?.[0]
                }
              }, λfd8663bc88e8?.[1]);
            }).catch(λfd8663bc88e8 => {
              console.error(λfd8663bc88e8), this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ7a81504bac53.$token,
                  $error: λfd8663bc88e8?.toString() || "\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x65\x72\x72\x6f\x72"
                }
              }, []);
            });
          }
        }
        call(λfd8663bc88e8, λ7a81504bac53, λb32ce6ea6ba1 = []) {
          let λf44539fb450b = this.counter++;
          return new Promise((λ79675e01b019, λ6487cd28d2f2) => {
            this.promiseCallbacks.set(λf44539fb450b, {
              resolve: λ79675e01b019,
              reject: λ6487cd28d2f2
            }), this.sendRaw({
              [this.id]: {
                $type: "\x72\x65\x71\x75\x65\x73\x74",
                $method: λfd8663bc88e8,
                $args: λ7a81504bac53,
                $token: λf44539fb450b
              }
            }, λb32ce6ea6ba1);
          });
        }
      }
    }
  }, λ7a81504bac53 = {};
  function r(λb32ce6ea6ba1) {
    var λf44539fb450b = λ7a81504bac53[λb32ce6ea6ba1];
    if (void 0 !== λf44539fb450b) return λf44539fb450b.exports;
    var λ79675e01b019 = λ7a81504bac53[λb32ce6ea6ba1] = {
      exports: {}
    };
    return λfd8663bc88e8[λb32ce6ea6ba1](λ79675e01b019, λ79675e01b019.exports, r), λ79675e01b019.exports;
  }
  r.d = (λfd8663bc88e8, λ7a81504bac53) => {
    for (var λb32ce6ea6ba1 in λ7a81504bac53) r.o(λ7a81504bac53, λb32ce6ea6ba1) && !r.o(λfd8663bc88e8, λb32ce6ea6ba1) && Object.defineProperty(λfd8663bc88e8, λb32ce6ea6ba1, {
      enumerable: !0,
      get: λ7a81504bac53[λb32ce6ea6ba1]
    });
  }, r.o = (λfd8663bc88e8, λ7a81504bac53) => Object.prototype.hasOwnProperty.call(λfd8663bc88e8, λ7a81504bac53), 
  r.r = λfd8663bc88e8 => {
    "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λfd8663bc88e8, Symbol.toStringTag, {
      value: "\x4d\x6f\x64\x75\x6c\x65"
    }), Object.defineProperty(λfd8663bc88e8, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
      value: !0
    });
  };
  var λb32ce6ea6ba1 = {};
  (() => {
    r.r(λb32ce6ea6ba1), r.d(λb32ce6ea6ba1, {
      route: () => a,
      shouldRoute: () => n
    });
    var λfd8663bc88e8 = r(805);
    let λ7a81504bac53 = {};
    addEventListener("\x6d\x65\x73\x73\x61\x67\x65", λfd8663bc88e8 => {
      if (λfd8663bc88e8.data && "\x6f\x62\x6a\x65\x63\x74" == typeof λfd8663bc88e8.data) {
        if (λfd8663bc88e8.data.$sw$setCookieDone && "\x6f\x62\x6a\x65\x63\x74" == typeof λfd8663bc88e8.data.$sw$setCookieDone) {
          let λb32ce6ea6ba1 = λfd8663bc88e8.data.$sw$setCookieDone, λf44539fb450b = λ7a81504bac53[λb32ce6ea6ba1.id];
          λf44539fb450b && (λf44539fb450b(), delete λ7a81504bac53[λb32ce6ea6ba1.id]);
        }
        if (λfd8663bc88e8.data.$sw$initRemoteTransport && "\x6f\x62\x6a\x65\x63\x74" == typeof λfd8663bc88e8.data.$sw$initRemoteTransport) {
          let {port: λ7a81504bac53, prefix: λb32ce6ea6ba1} = λfd8663bc88e8.data.$sw$initRemoteTransport, λ79675e01b019 = λf44539fb450b.find(λfd8663bc88e8 => new URL(λb32ce6ea6ba1).pathname.startsWith(λfd8663bc88e8.prefix));
          if (!λ79675e01b019) return void console.error("\x4e\x6f\x20\x72\x65\x6c\x65\x76\x61\x6e\x74\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x66\x6f\x75\x6e\x64\x20\x66\x6f\x72\x20\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x69\x6e\x69\x74");
          λ79675e01b019.rpc.call("\x69\x6e\x69\x74\x52\x65\x6d\x6f\x74\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74", λ7a81504bac53, [ λ7a81504bac53 ]);
        }
      }
    });
    class s {
      prefix;
      id;
      rpc;
      constructor(λb32ce6ea6ba1, λf44539fb450b, λ79675e01b019) {
        this.prefix = λb32ce6ea6ba1, this.id = λf44539fb450b, this.rpc = new λfd8663bc88e8.C({
          sendSetCookie: async ({cookies: λfd8663bc88e8, options: λb32ce6ea6ba1}) => {
            let λf44539fb450b = await self.clients.matchAll({
              type: "\x77\x69\x6e\x64\x6f\x77",
              includeUncontrolled: !0
            }), λ79675e01b019 = [], λ6487cd28d2f2 = [], λ3a8252c125f6 = λb32ce6ea6ba1?.destination === "\x64\x6f\x63\x75\x6d\x65\x6e\x74" || λb32ce6ea6ba1?.destination === "\x69\x66\x72\x61\x6d\x65";
            for (let λ12c4095d7e40 of λf44539fb450b) {
              let λf44539fb450b = Math.random().toString(36).substring(2, 10);
              λ79675e01b019.push(λf44539fb450b), λ12c4095d7e40.postMessage({
                $controller$setCookie: {
                  cookies: λfd8663bc88e8,
                  options: λb32ce6ea6ba1,
                  id: λf44539fb450b,
                  controllerId: this.id
                }
              }), λ3a8252c125f6 || λ6487cd28d2f2.push(new Promise(λfd8663bc88e8 => {
                λ7a81504bac53[λf44539fb450b] = () => λfd8663bc88e8(λf44539fb450b);
              }));
            }
            if (λ6487cd28d2f2.length > 0) {
              let λb32ce6ea6ba1, λ3a8252c125f6 = !1, λ12c4095d7e40 = new Promise(λ6487cd28d2f2 => {
                λb32ce6ea6ba1 = setTimeout(() => {
                  if (!λ3a8252c125f6) {
                    let λb32ce6ea6ba1 = λ79675e01b019.filter(λfd8663bc88e8 => void 0 !== λ7a81504bac53[λfd8663bc88e8]);
                    console.error(`\x74\x69\x6d\x65\x64\x20\x6f\x75\x74\x20\x77\x61\x69\x74\x69\x6e\x67\x20\x66\x6f\x72\x20\x73\x65\x74\x20\x63\x6f\x6f\x6b\x69\x65\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x28\x64\x65\x61\x64\x6c\x6f\x63\x6b\x3f\x29\x3a\x20\x63\x6f\x6f\x6b\x69\x65\x73\x3d${λfd8663bc88e8.length}\x20\x63\x6c\x69\x65\x6e\x74\x73\x3d${λf44539fb450b.length}\x20\x70\x65\x6e\x64\x69\x6e\x67\x3d${λb32ce6ea6ba1.length}\x2f${λ79675e01b019.length}\x20\x63\x6c\x69\x65\x6e\x74\x55\x72\x6c\x73\x3d${λf44539fb450b.map(λfd8663bc88e8 => λfd8663bc88e8.url).join("\x2c")}`);
                  }
                  λ6487cd28d2f2();
                }, 1e3);
              });
              try {
                await Promise.race([ λ12c4095d7e40, Promise.any(λ6487cd28d2f2).then(() => {
                  λ3a8252c125f6 = !0;
                }).catch(() => {}) ]);
              } finally {
                for (let λfd8663bc88e8 of (void 0 !== λb32ce6ea6ba1 && clearTimeout(λb32ce6ea6ba1), 
                λ79675e01b019)) delete λ7a81504bac53[λfd8663bc88e8];
              }
            }
          }
        }, "\x74\x61\x62\x63\x68\x61\x6e\x6e\x65\x6c\x2d" + λf44539fb450b, (λfd8663bc88e8, λ7a81504bac53) => {
          λ79675e01b019.postMessage(λfd8663bc88e8, λ7a81504bac53);
        }), λ79675e01b019.onmessage = λfd8663bc88e8 => {
          this.rpc.recieve(λfd8663bc88e8.data);
        }, λ79675e01b019.onmessageerror = console.error, this.rpc.call("\x72\x65\x61\x64\x79", void 0);
      }
    }
    let λf44539fb450b = [];
    function n(λfd8663bc88e8) {
      let λ7a81504bac53 = new URL(λfd8663bc88e8.request.url);
      return void 0 !== λf44539fb450b.find(λfd8663bc88e8 => λ7a81504bac53.pathname.startsWith(λfd8663bc88e8.prefix));
    }
    async function a(λfd8663bc88e8) {
      try {
        let λ7a81504bac53 = new URL(λfd8663bc88e8.request.url), λb32ce6ea6ba1 = λf44539fb450b.find(λfd8663bc88e8 => λ7a81504bac53.pathname.startsWith(λfd8663bc88e8.prefix)), λ79675e01b019 = await clients.get(λfd8663bc88e8.clientId), λ6487cd28d2f2 = [ ...λfd8663bc88e8.request.headers ], λ3a8252c125f6 = await λb32ce6ea6ba1.rpc.call("\x72\x65\x71\x75\x65\x73\x74", {
          rawUrl: λfd8663bc88e8.request.url,
          rawReferrer: λfd8663bc88e8.request.referrer,
          destination: λfd8663bc88e8.request.destination,
          mode: λfd8663bc88e8.request.mode,
          referrer: λfd8663bc88e8.request.referrer,
          method: λfd8663bc88e8.request.method,
          body: λfd8663bc88e8.request.body,
          cache: λfd8663bc88e8.request.cache,
          forceCrossOriginIsolated: !1,
          initialHeaders: λ6487cd28d2f2,
          rawClientUrl: λ79675e01b019 ? λ79675e01b019.url : void 0,
          clientId: λfd8663bc88e8.clientId || λfd8663bc88e8.resultingClientId
        }, λfd8663bc88e8.request.body instanceof ReadableStream || λfd8663bc88e8.request.body instanceof ArrayBuffer ? [ λfd8663bc88e8.request.body ] : void 0);
        return new Response(λ3a8252c125f6.body, {
          status: λ3a8252c125f6.status,
          statusText: λ3a8252c125f6.statusText,
          headers: λ3a8252c125f6.headers
        });
      } catch (λfd8663bc88e8) {
        return console.error("\x53\x65\x72\x76\x69\x63\x65\x20\x57\x6f\x72\x6b\x65\x72\x20\x65\x72\x72\x6f\x72\x3a", λfd8663bc88e8), new Response("\x49\x6e\x74\x65\x72\x6e\x61\x6c\x20\x53\x65\x72\x76\x69\x63\x65\x20\x57\x6f\x72\x6b\x65\x72\x20\x45\x72\x72\x6f\x72\x3a\x20" + λfd8663bc88e8.message, {
          status: 500
        });
      }
    }
    addEventListener("\x6d\x65\x73\x73\x61\x67\x65", λfd8663bc88e8 => {
      if (!λfd8663bc88e8.data || "\x6f\x62\x6a\x65\x63\x74" != typeof λfd8663bc88e8.data || !λfd8663bc88e8.data.$controller$init || "\x6f\x62\x6a\x65\x63\x74" != typeof λfd8663bc88e8.data.$controller$init) return;
      let λ7a81504bac53 = λfd8663bc88e8.data.$controller$init, λb32ce6ea6ba1 = λf44539fb450b.findIndex(λfd8663bc88e8 => λfd8663bc88e8.id === λ7a81504bac53.id);
      -1 !== λb32ce6ea6ba1 && λf44539fb450b.splice(λb32ce6ea6ba1, 1), λf44539fb450b.push(new s(λ7a81504bac53.prefix, λ7a81504bac53.id, λfd8663bc88e8.ports[0]));
    }), addEventListener("\x69\x6e\x73\x74\x61\x6c\x6c", () => {
      self.skipWaiting();
    }), addEventListener("\x61\x63\x74\x69\x76\x61\x74\x65", λfd8663bc88e8 => {
      λfd8663bc88e8.waitUntil(clients.claim());
    }), setTimeout(async () => {
      for (let λfd8663bc88e8 of (console.log("\x73\x65\x72\x76\x69\x63\x65\x20\x77\x6f\x72\x6b\x65\x72\x20\x61\x63\x74\x69\x76\x61\x74\x65\x64\x2c\x20\x6e\x6f\x74\x69\x66\x79\x69\x6e\x67\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x74\x6f\x20\x72\x65\x76\x69\x76\x65"), 
      await clients.matchAll())) λfd8663bc88e8.postMessage({
        $controller$swrevive: {}
      });
    }, 100);
  })(), $studyjetController = λb32ce6ea6ba1;
})();
