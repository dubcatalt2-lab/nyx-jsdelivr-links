var $studyjetController;

(() => {
  var λ41d1b83b2dc5 = {
    805(λ41d1b83b2dc5, λ9bfc59599e91, λac50e0ab461e) {
      λac50e0ab461e.d(λ9bfc59599e91, {
        C: () => o
      });
      class o {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λ41d1b83b2dc5, λ9bfc59599e91, λac50e0ab461e) {
          this.methods = λ41d1b83b2dc5, this.id = λ9bfc59599e91, this.sendRaw = λac50e0ab461e;
        }
        recieve(λ41d1b83b2dc5) {
          if (null == λ41d1b83b2dc5 || "\x6f\x62\x6a\x65\x63\x74" != typeof λ41d1b83b2dc5) return;
          let λ9bfc59599e91 = λ41d1b83b2dc5[this.id];
          if (null == λ9bfc59599e91 || "\x6f\x62\x6a\x65\x63\x74" != typeof λ9bfc59599e91) return;
          let λac50e0ab461e = λ9bfc59599e91.$type;
          if ("\x72\x65\x73\x70\x6f\x6e\x73\x65" === λac50e0ab461e) {
            let λ41d1b83b2dc5 = λ9bfc59599e91.$token, λac50e0ab461e = λ9bfc59599e91.$data, λff707032c3d4 = λ9bfc59599e91.$error, λe3dd7d60485d = this.promiseCallbacks.get(λ41d1b83b2dc5);
            if (!λe3dd7d60485d) return;
            this.promiseCallbacks.delete(λ41d1b83b2dc5), void 0 !== λff707032c3d4 ? λe3dd7d60485d.reject(Error(λff707032c3d4)) : λe3dd7d60485d.resolve(λac50e0ab461e);
          } else if ("\x72\x65\x71\x75\x65\x73\x74" === λac50e0ab461e) {
            let λ41d1b83b2dc5 = λ9bfc59599e91.$method, λac50e0ab461e = λ9bfc59599e91.$args;
            this.methods[λ41d1b83b2dc5](λac50e0ab461e).then(λ41d1b83b2dc5 => {
              this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ9bfc59599e91.$token,
                  $data: λ41d1b83b2dc5?.[0]
                }
              }, λ41d1b83b2dc5?.[1]);
            }).catch(λ41d1b83b2dc5 => {
              console.error(λ41d1b83b2dc5), this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ9bfc59599e91.$token,
                  $error: λ41d1b83b2dc5?.toString() || "\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x65\x72\x72\x6f\x72"
                }
              }, []);
            });
          }
        }
        call(λ41d1b83b2dc5, λ9bfc59599e91, λac50e0ab461e = []) {
          let λff707032c3d4 = this.counter++;
          return new Promise((λe3dd7d60485d, λ137953d7ef9f) => {
            this.promiseCallbacks.set(λff707032c3d4, {
              resolve: λe3dd7d60485d,
              reject: λ137953d7ef9f
            }), this.sendRaw({
              [this.id]: {
                $type: "\x72\x65\x71\x75\x65\x73\x74",
                $method: λ41d1b83b2dc5,
                $args: λ9bfc59599e91,
                $token: λff707032c3d4
              }
            }, λac50e0ab461e);
          });
        }
      }
    }
  }, λ9bfc59599e91 = {};
  function r(λac50e0ab461e) {
    var λff707032c3d4 = λ9bfc59599e91[λac50e0ab461e];
    if (void 0 !== λff707032c3d4) return λff707032c3d4.exports;
    var λe3dd7d60485d = λ9bfc59599e91[λac50e0ab461e] = {
      exports: {}
    };
    return λ41d1b83b2dc5[λac50e0ab461e](λe3dd7d60485d, λe3dd7d60485d.exports, r), λe3dd7d60485d.exports;
  }
  r.d = (λ41d1b83b2dc5, λ9bfc59599e91) => {
    for (var λac50e0ab461e in λ9bfc59599e91) r.o(λ9bfc59599e91, λac50e0ab461e) && !r.o(λ41d1b83b2dc5, λac50e0ab461e) && Object.defineProperty(λ41d1b83b2dc5, λac50e0ab461e, {
      enumerable: !0,
      get: λ9bfc59599e91[λac50e0ab461e]
    });
  }, r.o = (λ41d1b83b2dc5, λ9bfc59599e91) => Object.prototype.hasOwnProperty.call(λ41d1b83b2dc5, λ9bfc59599e91), 
  r.r = λ41d1b83b2dc5 => {
    "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λ41d1b83b2dc5, Symbol.toStringTag, {
      value: "\x4d\x6f\x64\x75\x6c\x65"
    }), Object.defineProperty(λ41d1b83b2dc5, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
      value: !0
    });
  };
  var λac50e0ab461e = {};
  (() => {
    r.r(λac50e0ab461e), r.d(λac50e0ab461e, {
      route: () => a,
      shouldRoute: () => n
    });
    var λ41d1b83b2dc5 = r(805);
    let λ9bfc59599e91 = {};
    addEventListener("\x6d\x65\x73\x73\x61\x67\x65", λ41d1b83b2dc5 => {
      if (λ41d1b83b2dc5.data && "\x6f\x62\x6a\x65\x63\x74" == typeof λ41d1b83b2dc5.data) {
        if (λ41d1b83b2dc5.data.$sw$setCookieDone && "\x6f\x62\x6a\x65\x63\x74" == typeof λ41d1b83b2dc5.data.$sw$setCookieDone) {
          let λac50e0ab461e = λ41d1b83b2dc5.data.$sw$setCookieDone, λff707032c3d4 = λ9bfc59599e91[λac50e0ab461e.id];
          λff707032c3d4 && (λff707032c3d4(), delete λ9bfc59599e91[λac50e0ab461e.id]);
        }
        if (λ41d1b83b2dc5.data.$sw$initRemoteTransport && "\x6f\x62\x6a\x65\x63\x74" == typeof λ41d1b83b2dc5.data.$sw$initRemoteTransport) {
          let {port: λ9bfc59599e91, prefix: λac50e0ab461e} = λ41d1b83b2dc5.data.$sw$initRemoteTransport, λe3dd7d60485d = λff707032c3d4.find(λ41d1b83b2dc5 => new URL(λac50e0ab461e).pathname.startsWith(λ41d1b83b2dc5.prefix));
          if (!λe3dd7d60485d) return void console.error("\x4e\x6f\x20\x72\x65\x6c\x65\x76\x61\x6e\x74\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x66\x6f\x75\x6e\x64\x20\x66\x6f\x72\x20\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x69\x6e\x69\x74");
          λe3dd7d60485d.rpc.call("\x69\x6e\x69\x74\x52\x65\x6d\x6f\x74\x65\x54\x72\x61\x6e\x73\x70\x6f\x72\x74", λ9bfc59599e91, [ λ9bfc59599e91 ]);
        }
      }
    });
    class s {
      prefix;
      id;
      rpc;
      constructor(λac50e0ab461e, λff707032c3d4, λe3dd7d60485d) {
        this.prefix = λac50e0ab461e, this.id = λff707032c3d4, this.rpc = new λ41d1b83b2dc5.C({
          sendSetCookie: async ({cookies: λ41d1b83b2dc5, options: λac50e0ab461e}) => {
            let λff707032c3d4 = await self.clients.matchAll({
              type: "\x77\x69\x6e\x64\x6f\x77",
              includeUncontrolled: !0
            }), λe3dd7d60485d = [], λ137953d7ef9f = [], λa9f77b24548c = λac50e0ab461e?.destination === "\x64\x6f\x63\x75\x6d\x65\x6e\x74" || λac50e0ab461e?.destination === "\x69\x66\x72\x61\x6d\x65";
            for (let λ46d6aa051dc3 of λff707032c3d4) {
              let λff707032c3d4 = Math.random().toString(36).substring(2, 10);
              λe3dd7d60485d.push(λff707032c3d4), λ46d6aa051dc3.postMessage({
                $controller$setCookie: {
                  cookies: λ41d1b83b2dc5,
                  options: λac50e0ab461e,
                  id: λff707032c3d4,
                  controllerId: this.id
                }
              }), λa9f77b24548c || λ137953d7ef9f.push(new Promise(λ41d1b83b2dc5 => {
                λ9bfc59599e91[λff707032c3d4] = () => λ41d1b83b2dc5(λff707032c3d4);
              }));
            }
            if (λ137953d7ef9f.length > 0) {
              let λac50e0ab461e, λa9f77b24548c = !1, λ46d6aa051dc3 = new Promise(λ137953d7ef9f => {
                λac50e0ab461e = setTimeout(() => {
                  if (!λa9f77b24548c) {
                    let λac50e0ab461e = λe3dd7d60485d.filter(λ41d1b83b2dc5 => void 0 !== λ9bfc59599e91[λ41d1b83b2dc5]);
                    console.error(`\x74\x69\x6d\x65\x64\x20\x6f\x75\x74\x20\x77\x61\x69\x74\x69\x6e\x67\x20\x66\x6f\x72\x20\x73\x65\x74\x20\x63\x6f\x6f\x6b\x69\x65\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x28\x64\x65\x61\x64\x6c\x6f\x63\x6b\x3f\x29\x3a\x20\x63\x6f\x6f\x6b\x69\x65\x73\x3d${λ41d1b83b2dc5.length}\x20\x63\x6c\x69\x65\x6e\x74\x73\x3d${λff707032c3d4.length}\x20\x70\x65\x6e\x64\x69\x6e\x67\x3d${λac50e0ab461e.length}\x2f${λe3dd7d60485d.length}\x20\x63\x6c\x69\x65\x6e\x74\x55\x72\x6c\x73\x3d${λff707032c3d4.map(λ41d1b83b2dc5 => λ41d1b83b2dc5.url).join("\x2c")}`);
                  }
                  λ137953d7ef9f();
                }, 1e3);
              });
              try {
                await Promise.race([ λ46d6aa051dc3, Promise.any(λ137953d7ef9f).then(() => {
                  λa9f77b24548c = !0;
                }).catch(() => {}) ]);
              } finally {
                for (let λ41d1b83b2dc5 of (void 0 !== λac50e0ab461e && clearTimeout(λac50e0ab461e), 
                λe3dd7d60485d)) delete λ9bfc59599e91[λ41d1b83b2dc5];
              }
            }
          }
        }, "\x74\x61\x62\x63\x68\x61\x6e\x6e\x65\x6c\x2d" + λff707032c3d4, (λ41d1b83b2dc5, λ9bfc59599e91) => {
          λe3dd7d60485d.postMessage(λ41d1b83b2dc5, λ9bfc59599e91);
        }), λe3dd7d60485d.onmessage = λ41d1b83b2dc5 => {
          this.rpc.recieve(λ41d1b83b2dc5.data);
        }, λe3dd7d60485d.onmessageerror = console.error, this.rpc.call("\x72\x65\x61\x64\x79", void 0);
      }
    }
    let λff707032c3d4 = [];
    function n(λ41d1b83b2dc5) {
      let λ9bfc59599e91 = new URL(λ41d1b83b2dc5.request.url);
      return void 0 !== λff707032c3d4.find(λ41d1b83b2dc5 => λ9bfc59599e91.pathname.startsWith(λ41d1b83b2dc5.prefix));
    }
    async function a(λ41d1b83b2dc5) {
      try {
        let λ9bfc59599e91 = new URL(λ41d1b83b2dc5.request.url), λac50e0ab461e = λff707032c3d4.find(λ41d1b83b2dc5 => λ9bfc59599e91.pathname.startsWith(λ41d1b83b2dc5.prefix)), λe3dd7d60485d = await clients.get(λ41d1b83b2dc5.clientId), λ137953d7ef9f = [ ...λ41d1b83b2dc5.request.headers ], λa9f77b24548c = await λac50e0ab461e.rpc.call("\x72\x65\x71\x75\x65\x73\x74", {
          rawUrl: λ41d1b83b2dc5.request.url,
          rawReferrer: λ41d1b83b2dc5.request.referrer,
          destination: λ41d1b83b2dc5.request.destination,
          mode: λ41d1b83b2dc5.request.mode,
          referrer: λ41d1b83b2dc5.request.referrer,
          method: λ41d1b83b2dc5.request.method,
          body: λ41d1b83b2dc5.request.body,
          cache: λ41d1b83b2dc5.request.cache,
          forceCrossOriginIsolated: !1,
          initialHeaders: λ137953d7ef9f,
          rawClientUrl: λe3dd7d60485d ? λe3dd7d60485d.url : void 0,
          clientId: λ41d1b83b2dc5.clientId || λ41d1b83b2dc5.resultingClientId
        }, λ41d1b83b2dc5.request.body instanceof ReadableStream || λ41d1b83b2dc5.request.body instanceof ArrayBuffer ? [ λ41d1b83b2dc5.request.body ] : void 0);
        return new Response(λa9f77b24548c.body, {
          status: λa9f77b24548c.status,
          statusText: λa9f77b24548c.statusText,
          headers: λa9f77b24548c.headers
        });
      } catch (λ41d1b83b2dc5) {
        return console.error("\x53\x65\x72\x76\x69\x63\x65\x20\x57\x6f\x72\x6b\x65\x72\x20\x65\x72\x72\x6f\x72\x3a", λ41d1b83b2dc5), new Response("\x49\x6e\x74\x65\x72\x6e\x61\x6c\x20\x53\x65\x72\x76\x69\x63\x65\x20\x57\x6f\x72\x6b\x65\x72\x20\x45\x72\x72\x6f\x72\x3a\x20" + λ41d1b83b2dc5.message, {
          status: 500
        });
      }
    }
    addEventListener("\x6d\x65\x73\x73\x61\x67\x65", λ41d1b83b2dc5 => {
      if (!λ41d1b83b2dc5.data || "\x6f\x62\x6a\x65\x63\x74" != typeof λ41d1b83b2dc5.data || !λ41d1b83b2dc5.data.$controller$init || "\x6f\x62\x6a\x65\x63\x74" != typeof λ41d1b83b2dc5.data.$controller$init) return;
      let λ9bfc59599e91 = λ41d1b83b2dc5.data.$controller$init, λac50e0ab461e = λff707032c3d4.findIndex(λ41d1b83b2dc5 => λ41d1b83b2dc5.id === λ9bfc59599e91.id);
      -1 !== λac50e0ab461e && λff707032c3d4.splice(λac50e0ab461e, 1), λff707032c3d4.push(new s(λ9bfc59599e91.prefix, λ9bfc59599e91.id, λ41d1b83b2dc5.ports[0]));
    }), addEventListener("\x69\x6e\x73\x74\x61\x6c\x6c", () => {
      self.skipWaiting();
    }), addEventListener("\x61\x63\x74\x69\x76\x61\x74\x65", λ41d1b83b2dc5 => {
      λ41d1b83b2dc5.waitUntil(clients.claim());
    }), setTimeout(async () => {
      for (let λ41d1b83b2dc5 of (console.log("\x73\x65\x72\x76\x69\x63\x65\x20\x77\x6f\x72\x6b\x65\x72\x20\x61\x63\x74\x69\x76\x61\x74\x65\x64\x2c\x20\x6e\x6f\x74\x69\x66\x79\x69\x6e\x67\x20\x63\x6c\x69\x65\x6e\x74\x73\x20\x74\x6f\x20\x72\x65\x76\x69\x76\x65"), 
      await clients.matchAll())) λ41d1b83b2dc5.postMessage({
        $controller$swrevive: {}
      });
    }, 100);
  })(), $studyjetController = λac50e0ab461e;
})();
