var $studyjetController;

(() => {
  var λ8734534fdafb = {
    805(λ8734534fdafb, λ71fd48ea27fa, λef06426df6cd) {
      λef06426df6cd.d(λ71fd48ea27fa, {
        C: () => o
      });
      class o {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λ8734534fdafb, λ71fd48ea27fa, λef06426df6cd) {
          this.methods = λ8734534fdafb, this.id = λ71fd48ea27fa, this.sendRaw = λef06426df6cd;
        }
        recieve(λ8734534fdafb) {
          if (null == λ8734534fdafb || "\x6f\x62\x6a\x65\x63\x74" != typeof λ8734534fdafb) return;
          let λ71fd48ea27fa = λ8734534fdafb[this.id];
          if (null == λ71fd48ea27fa || "\x6f\x62\x6a\x65\x63\x74" != typeof λ71fd48ea27fa) return;
          let λef06426df6cd = λ71fd48ea27fa.$type;
          if ("\x72\x65\x73\x70\x6f\x6e\x73\x65" === λef06426df6cd) {
            let λ8734534fdafb = λ71fd48ea27fa.$token, λef06426df6cd = λ71fd48ea27fa.$data, λ02ac34ee4f83 = λ71fd48ea27fa.$error, λ5da8367d92db = this.promiseCallbacks.get(λ8734534fdafb);
            if (!λ5da8367d92db) return;
            this.promiseCallbacks.delete(λ8734534fdafb), void 0 !== λ02ac34ee4f83 ? λ5da8367d92db.reject(Error(λ02ac34ee4f83)) : λ5da8367d92db.resolve(λef06426df6cd);
          } else if ("\x72\x65\x71\x75\x65\x73\x74" === λef06426df6cd) {
            let λ8734534fdafb = λ71fd48ea27fa.$method, λef06426df6cd = λ71fd48ea27fa.$args;
            this.methods[λ8734534fdafb](λef06426df6cd).then(λ8734534fdafb => {
              this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ71fd48ea27fa.$token,
                  $data: λ8734534fdafb?.[0]
                }
              }, λ8734534fdafb?.[1]);
            }).catch(λ8734534fdafb => {
              console.error(λ8734534fdafb), this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ71fd48ea27fa.$token,
                  $error: λ8734534fdafb?.toString() || "\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x65\x72\x72\x6f\x72"
                }
              }, []);
            });
          }
        }
        call(λ8734534fdafb, λ71fd48ea27fa, λef06426df6cd = []) {
          let λ02ac34ee4f83 = this.counter++;
          return new Promise((λ5da8367d92db, λ129b6bc7c3a4) => {
            this.promiseCallbacks.set(λ02ac34ee4f83, {
              resolve: λ5da8367d92db,
              reject: λ129b6bc7c3a4
            }), this.sendRaw({
              [this.id]: {
                $type: "\x72\x65\x71\x75\x65\x73\x74",
                $method: λ8734534fdafb,
                $args: λ71fd48ea27fa,
                $token: λ02ac34ee4f83
              }
            }, λef06426df6cd);
          });
        }
      }
    }
  }, λ71fd48ea27fa = {};
  function r(λef06426df6cd) {
    var λ02ac34ee4f83 = λ71fd48ea27fa[λef06426df6cd];
    if (void 0 !== λ02ac34ee4f83) return λ02ac34ee4f83.exports;
    var λ5da8367d92db = λ71fd48ea27fa[λef06426df6cd] = {
      exports: {}
    };
    return λ8734534fdafb[λef06426df6cd](λ5da8367d92db, λ5da8367d92db.exports, r), λ5da8367d92db.exports;
  }
  r.d = (λ8734534fdafb, λ71fd48ea27fa) => {
    for (var λef06426df6cd in λ71fd48ea27fa) r.o(λ71fd48ea27fa, λef06426df6cd) && !r.o(λ8734534fdafb, λef06426df6cd) && Object.defineProperty(λ8734534fdafb, λef06426df6cd, {
      enumerable: !0,
      get: λ71fd48ea27fa[λef06426df6cd]
    });
  }, r.o = (λ8734534fdafb, λ71fd48ea27fa) => Object.prototype.hasOwnProperty.call(λ8734534fdafb, λ71fd48ea27fa), 
  r.r = λ8734534fdafb => {
    "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λ8734534fdafb, Symbol.toStringTag, {
      value: "\x4d\x6f\x64\x75\x6c\x65"
    }), Object.defineProperty(λ8734534fdafb, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
      value: !0
    });
  };
  var λef06426df6cd = {};
  (() => {
    r.r(λef06426df6cd), r.d(λef06426df6cd, {
      route: () => a,
      shouldRoute: () => n
    });
    var λ8734534fdafb = r(805);
    let λ71fd48ea27fa = {};
    addEventListener("\x6d\x65\x73\x73\x61\x67\x65", λ8734534fdafb => {
      if (λ8734534fdafb.data && "\x6f\x62\x6a\x65\x63\x74" == typeof λ8734534fdafb.data) {
        if (λ8734534fdafb.data.$sw$setCookieDone && "\x6f\x62\x6a\x65\x63\x74" == typeof λ8734534fdafb.data.$sw$setCookieDone) {
          let λef06426df6cd = λ8734534fdafb.data.$sw$setCookieDone, λ02ac34ee4f83 = λ71fd48ea27fa[λef06426df6cd.id];
          λ02ac34ee4f83 && (λ02ac34ee4f83(), delete λ71fd48ea27fa[λef06426df6cd.id]);
        }
        if (λ8734534fdafb.data.$sw$initRemoteTransport && "\x6f\x62\x6a\x65\x63\x74" == typeof λ8734534fdafb.data.$sw$initRemoteTransport) {
          let {port: λ71fd48ea27fa, prefix: λef06426df6cd} = λ8734534fdafb.data.$sw$initRemoteTransport, λ5da8367d92db = λ02ac34ee4f83.find(λ8734534fdafb => new URL(λef06426df6cd).pathname.startsWith(λ8734534fdafb.prefix));
          if (!λ5da8367d92db) return void console.error("\x4e\x6f\x20\x72\x65\x6c\x65\x76\x61\x6e\x74\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x66\x6f\x75\x6e\x64\x20\x66\x6f\x72\x20\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x69\x6e\x69\x74");
          λ5da8367d92db.rpc.call("\x69\x6e\x69\x74\x52\x65\x6d\x6f\x74\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74", λ71fd48ea27fa, [ λ71fd48ea27fa ]);
        }
      }
    });
    class s {
      prefix;
      id;
      rpc;
      constructor(λef06426df6cd, λ02ac34ee4f83, λ5da8367d92db) {
        this.prefix = λef06426df6cd, this.id = λ02ac34ee4f83, this.rpc = new λ8734534fdafb.C({
          sendSetCookie: async ({cookies: λ8734534fdafb, options: λef06426df6cd}) => {
            let λ02ac34ee4f83 = await self.clients.matchAll({
              type: "\x77\x69\x6e\x64\x6f\x77",
              includeUncontrolled: !0
            }), λ5da8367d92db = [], λ129b6bc7c3a4 = [], λea1ad77b3528 = λef06426df6cd?.destination === "\x64\x6f\x63\x75\x6d\x65\x6e\x74" || λef06426df6cd?.destination === "\x69\x66\x72\x61\x6d\x65";
            for (let λf383a1ebd34c of λ02ac34ee4f83) {
              let λ02ac34ee4f83 = Math.random().toString(36).substring(2, 10);
              λ5da8367d92db.push(λ02ac34ee4f83), λf383a1ebd34c.postMessage({
                $controller$setCookie: {
                  cookies: λ8734534fdafb,
                  options: λef06426df6cd,
                  id: λ02ac34ee4f83,
                  controllerId: this.id
                }
              }), λea1ad77b3528 || λ129b6bc7c3a4.push(new Promise(λ8734534fdafb => {
                λ71fd48ea27fa[λ02ac34ee4f83] = () => λ8734534fdafb(λ02ac34ee4f83);
              }));
            }
            if (λ129b6bc7c3a4.length > 0) {
              let λef06426df6cd, λea1ad77b3528 = !1, λf383a1ebd34c = new Promise(λ129b6bc7c3a4 => {
                λef06426df6cd = setTimeout(() => {
                  if (!λea1ad77b3528) {
                    let λef06426df6cd = λ5da8367d92db.filter(λ8734534fdafb => void 0 !== λ71fd48ea27fa[λ8734534fdafb]);
                    console.error(`\x74\x69\x6d\x65\x64\x20\x6f\x75\x74\x20\x77\x61\x69\x74\x69\x6e\x67\x20\x66\x6f\x72\x20\x73\x65\x74\x20\x63\x6f\x6f\x6b\x69\x65\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x28\x64\x65\x61\x64\x6c\x6f\x63\x6b\x3f\x29\x3a\x20\x63\x6f\x6f\x6b\x69\x65\x73\x3d${λ8734534fdafb.length}\x20\x63\x6c\x69\x65\x6e\x74\x73\x3d${λ02ac34ee4f83.length}\x20\x70\x65\x6e\x64\x69\x6e\x67\x3d${λef06426df6cd.length}\x2f${λ5da8367d92db.length}\x20\x63\x6c\x69\x65\x6e\x74\x55\x72\x6c\x73\x3d${λ02ac34ee4f83.map(λ8734534fdafb => λ8734534fdafb.url).join("\x2c")}`);
                  }
                  λ129b6bc7c3a4();
                }, 1e3);
              });
              try {
                await Promise.race([ λf383a1ebd34c, Promise.any(λ129b6bc7c3a4).then(() => {
                  λea1ad77b3528 = !0;
                }).catch(() => {}) ]);
              } finally {
                for (let λ8734534fdafb of (void 0 !== λef06426df6cd && clearTimeout(λef06426df6cd), 
                λ5da8367d92db)) delete λ71fd48ea27fa[λ8734534fdafb];
              }
            }
          }
        }, "\x74\x61\x62\x63\x68\x61\x6e\x6e\x65\x6c\x2d" + λ02ac34ee4f83, (λ8734534fdafb, λ71fd48ea27fa) => {
          λ5da8367d92db.postMessage(λ8734534fdafb, λ71fd48ea27fa);
        }), λ5da8367d92db.onmessage = λ8734534fdafb => {
          this.rpc.recieve(λ8734534fdafb.data);
        }, λ5da8367d92db.onmessageerror = console.error, this.rpc.call("\x72\x65\x61\x64\x79", void 0);
      }
    }
    let λ02ac34ee4f83 = [];
    function n(λ8734534fdafb) {
      let λ71fd48ea27fa = new URL(λ8734534fdafb.request.url);
      return void 0 !== λ02ac34ee4f83.find(λ8734534fdafb => λ71fd48ea27fa.pathname.startsWith(λ8734534fdafb.prefix));
    }
    async function a(λ8734534fdafb) {
      try {
        let λ71fd48ea27fa = new URL(λ8734534fdafb.request.url), λef06426df6cd = λ02ac34ee4f83.find(λ8734534fdafb => λ71fd48ea27fa.pathname.startsWith(λ8734534fdafb.prefix)), λ5da8367d92db = await clients.get(λ8734534fdafb.clientId), λ129b6bc7c3a4 = [ ...λ8734534fdafb.request.headers ], λea1ad77b3528 = await λef06426df6cd.rpc.call("\x72\x65\x71\x75\x65\x73\x74", {
          rawUrl: λ8734534fdafb.request.url,
          rawReferrer: λ8734534fdafb.request.referrer,
          destination: λ8734534fdafb.request.destination,
          mode: λ8734534fdafb.request.mode,
          referrer: λ8734534fdafb.request.referrer,
          method: λ8734534fdafb.request.method,
          body: λ8734534fdafb.request.body,
          cache: λ8734534fdafb.request.cache,
          forceCrossOriginIsolated: !1,
          initialHeaders: λ129b6bc7c3a4,
          rawClientUrl: λ5da8367d92db ? λ5da8367d92db.url : void 0,
          clientId: λ8734534fdafb.clientId || λ8734534fdafb.resultingClientId
        }, λ8734534fdafb.request.body instanceof ReadableStream || λ8734534fdafb.request.body instanceof ArrayBuffer ? [ λ8734534fdafb.request.body ] : void 0);
        return new Response(λea1ad77b3528.body, {
          status: λea1ad77b3528.status,
          statusText: λea1ad77b3528.statusText,
          headers: λea1ad77b3528.headers
        });
      } catch (λ8734534fdafb) {
        return console.error("\x53\x65\x72\x76\x69\x63\x65\x20\x57\x6f\x72\x6b\x65\x72\x20\x65\x72\x72\x6f\x72\x3a", λ8734534fdafb), new Response("\x49\x6e\x74\x65\x72\x6e\x61\x6c\x20\x53\x65\x72\x76\x69\x63\x65\x20\x57\x6f\x72\x6b\x65\x72\x20\x45\x72\x72\x6f\x72\x3a\x20" + λ8734534fdafb.message, {
          status: 500
        });
      }
    }
    addEventListener("\x6d\x65\x73\x73\x61\x67\x65", λ8734534fdafb => {
      if (!λ8734534fdafb.data || "\x6f\x62\x6a\x65\x63\x74" != typeof λ8734534fdafb.data || !λ8734534fdafb.data.$controller$init || "\x6f\x62\x6a\x65\x63\x74" != typeof λ8734534fdafb.data.$controller$init) return;
      let λ71fd48ea27fa = λ8734534fdafb.data.$controller$init, λef06426df6cd = λ02ac34ee4f83.findIndex(λ8734534fdafb => λ8734534fdafb.id === λ71fd48ea27fa.id);
      -1 !== λef06426df6cd && λ02ac34ee4f83.splice(λef06426df6cd, 1), λ02ac34ee4f83.push(new s(λ71fd48ea27fa.prefix, λ71fd48ea27fa.id, λ8734534fdafb.ports[0]));
    }), addEventListener("\x69\x6e\x73\x74\x61\x6c\x6c", () => {
      self.skipWaiting();
    }), addEventListener("\x61\x63\x74\x69\x76\x61\x74\x65", λ8734534fdafb => {
      λ8734534fdafb.waitUntil(clients.claim());
    }), setTimeout(async () => {
      for (let λ8734534fdafb of (console.log("\x73\x65\x72\x76\x69\x63\x65\x20\x77\x6f\x72\x6b\x65\x72\x20\x61\x63\x74\x69\x76\x61\x74\x65\x64\x2c\x20\x6e\x6f\x74\x69\x66\x79\x69\x6e\x67\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x74\x6f\x20\x72\x65\x76\x69\x76\x65"), 
      await clients.matchAll())) λ8734534fdafb.postMessage({
        $controller$swrevive: {}
      });
    }, 100);
  })(), $studyjetController = λef06426df6cd;
})();
