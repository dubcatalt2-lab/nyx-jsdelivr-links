var $studyjetController;

(() => {
  var λ79acd34e106d = {
    805(λ79acd34e106d, λe69ea8a38e9d, λ370b8f43f192) {
      λ370b8f43f192.d(λe69ea8a38e9d, {
        C: () => o
      });
      class o {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λ79acd34e106d, λe69ea8a38e9d, λ370b8f43f192) {
          this.methods = λ79acd34e106d, this.id = λe69ea8a38e9d, this.sendRaw = λ370b8f43f192;
        }
        recieve(λ79acd34e106d) {
          if (null == λ79acd34e106d || "object" != typeof λ79acd34e106d) return;
          let λe69ea8a38e9d = λ79acd34e106d[this.id];
          if (null == λe69ea8a38e9d || "object" != typeof λe69ea8a38e9d) return;
          let λ370b8f43f192 = λe69ea8a38e9d.$type;
          if ("response" === λ370b8f43f192) {
            let λ79acd34e106d = λe69ea8a38e9d.$token, λ370b8f43f192 = λe69ea8a38e9d.$data, λc2abdb75491c = λe69ea8a38e9d.$error, λdfe12d5c39cc = this.promiseCallbacks.get(λ79acd34e106d);
            if (!λdfe12d5c39cc) return;
            this.promiseCallbacks.delete(λ79acd34e106d), void 0 !== λc2abdb75491c ? λdfe12d5c39cc.reject(Error(λc2abdb75491c)) : λdfe12d5c39cc.resolve(λ370b8f43f192);
          } else if ("request" === λ370b8f43f192) {
            let λ79acd34e106d = λe69ea8a38e9d.$method, λ370b8f43f192 = λe69ea8a38e9d.$args;
            this.methods[λ79acd34e106d](λ370b8f43f192).then(λ79acd34e106d => {
              this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λe69ea8a38e9d.$token,
                  $data: λ79acd34e106d?.[0]
                }
              }, λ79acd34e106d?.[1]);
            }).catch(λ79acd34e106d => {
              console.error(λ79acd34e106d), this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λe69ea8a38e9d.$token,
                  $error: λ79acd34e106d?.toString() || "Unknown error"
                }
              }, []);
            });
          }
        }
        call(λ79acd34e106d, λe69ea8a38e9d, λ370b8f43f192 = []) {
          let λc2abdb75491c = this.counter++;
          return new Promise((λdfe12d5c39cc, λfe63fe9ddd96) => {
            this.promiseCallbacks.set(λc2abdb75491c, {
              resolve: λdfe12d5c39cc,
              reject: λfe63fe9ddd96
            }), this.sendRaw({
              [this.id]: {
                $type: "request",
                $method: λ79acd34e106d,
                $args: λe69ea8a38e9d,
                $token: λc2abdb75491c
              }
            }, λ370b8f43f192);
          });
        }
      }
    }
  }, λe69ea8a38e9d = {};
  function r(λ370b8f43f192) {
    var λc2abdb75491c = λe69ea8a38e9d[λ370b8f43f192];
    if (void 0 !== λc2abdb75491c) return λc2abdb75491c.exports;
    var λdfe12d5c39cc = λe69ea8a38e9d[λ370b8f43f192] = {
      exports: {}
    };
    return λ79acd34e106d[λ370b8f43f192](λdfe12d5c39cc, λdfe12d5c39cc.exports, r), λdfe12d5c39cc.exports;
  }
  r.d = (λ79acd34e106d, λe69ea8a38e9d) => {
    for (var λ370b8f43f192 in λe69ea8a38e9d) r.o(λe69ea8a38e9d, λ370b8f43f192) && !r.o(λ79acd34e106d, λ370b8f43f192) && Object.defineProperty(λ79acd34e106d, λ370b8f43f192, {
      enumerable: !0,
      get: λe69ea8a38e9d[λ370b8f43f192]
    });
  }, r.o = (λ79acd34e106d, λe69ea8a38e9d) => Object.prototype.hasOwnProperty.call(λ79acd34e106d, λe69ea8a38e9d), 
  r.r = λ79acd34e106d => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λ79acd34e106d, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(λ79acd34e106d, "__esModule", {
      value: !0
    });
  };
  var λ370b8f43f192 = {};
  (() => {
    r.r(λ370b8f43f192), r.d(λ370b8f43f192, {
      route: () => a,
      shouldRoute: () => n
    });
    var λ79acd34e106d = r(805);
    let λe69ea8a38e9d = {};
    addEventListener("message", λ79acd34e106d => {
      if (λ79acd34e106d.data && "object" == typeof λ79acd34e106d.data) {
        if (λ79acd34e106d.data.$sw$setCookieDone && "object" == typeof λ79acd34e106d.data.$sw$setCookieDone) {
          let λ370b8f43f192 = λ79acd34e106d.data.$sw$setCookieDone, λc2abdb75491c = λe69ea8a38e9d[λ370b8f43f192.id];
          λc2abdb75491c && (λc2abdb75491c(), delete λe69ea8a38e9d[λ370b8f43f192.id]);
        }
        if (λ79acd34e106d.data.$sw$initRemoteTransport && "object" == typeof λ79acd34e106d.data.$sw$initRemoteTransport) {
          let {port: λe69ea8a38e9d, prefix: λ370b8f43f192} = λ79acd34e106d.data.$sw$initRemoteTransport, λdfe12d5c39cc = λc2abdb75491c.find(λ79acd34e106d => new URL(λ370b8f43f192).pathname.startsWith(λ79acd34e106d.prefix));
          if (!λdfe12d5c39cc) return void console.error("No relevant controller found for transport init");
          λdfe12d5c39cc.rpc.call("initRemoteTransport", λe69ea8a38e9d, [ λe69ea8a38e9d ]);
        }
      }
    });
    class s {
      prefix;
      id;
      rpc;
      constructor(λ370b8f43f192, λc2abdb75491c, λdfe12d5c39cc) {
        this.prefix = λ370b8f43f192, this.id = λc2abdb75491c, this.rpc = new λ79acd34e106d.C({
          sendSetCookie: async ({cookies: λ79acd34e106d, options: λ370b8f43f192}) => {
            let λc2abdb75491c = await self.clients.matchAll({
              type: "window",
              includeUncontrolled: !0
            }), λdfe12d5c39cc = [], λfe63fe9ddd96 = [], λ09d2b7d1ee8f = λ370b8f43f192?.destination === "document" || λ370b8f43f192?.destination === "iframe";
            for (let λ44036bd3b7d6 of λc2abdb75491c) {
              let λc2abdb75491c = Math.random().toString(36).substring(2, 10);
              λdfe12d5c39cc.push(λc2abdb75491c), λ44036bd3b7d6.postMessage({
                $controller$setCookie: {
                  cookies: λ79acd34e106d,
                  options: λ370b8f43f192,
                  id: λc2abdb75491c,
                  controllerId: this.id
                }
              }), λ09d2b7d1ee8f || λfe63fe9ddd96.push(new Promise(λ79acd34e106d => {
                λe69ea8a38e9d[λc2abdb75491c] = () => λ79acd34e106d(λc2abdb75491c);
              }));
            }
            if (λfe63fe9ddd96.length > 0) {
              let λ370b8f43f192, λ09d2b7d1ee8f = !1, λ44036bd3b7d6 = new Promise(λfe63fe9ddd96 => {
                λ370b8f43f192 = setTimeout(() => {
                  if (!λ09d2b7d1ee8f) {
                    let λ370b8f43f192 = λdfe12d5c39cc.filter(λ79acd34e106d => void 0 !== λe69ea8a38e9d[λ79acd34e106d]);
                    console.error(`timed out waiting for set cookie response (deadlock?): cookies=${λ79acd34e106d.length} clients=${λc2abdb75491c.length} pending=${λ370b8f43f192.length}/${λdfe12d5c39cc.length} clientUrls=${λc2abdb75491c.map(λ79acd34e106d => λ79acd34e106d.url).join(",")}`);
                  }
                  λfe63fe9ddd96();
                }, 1e3);
              });
              try {
                await Promise.race([ λ44036bd3b7d6, Promise.any(λfe63fe9ddd96).then(() => {
                  λ09d2b7d1ee8f = !0;
                }).catch(() => {}) ]);
              } finally {
                for (let λ79acd34e106d of (void 0 !== λ370b8f43f192 && clearTimeout(λ370b8f43f192), 
                λdfe12d5c39cc)) delete λe69ea8a38e9d[λ79acd34e106d];
              }
            }
          }
        }, "tabchannel-" + λc2abdb75491c, (λ79acd34e106d, λe69ea8a38e9d) => {
          λdfe12d5c39cc.postMessage(λ79acd34e106d, λe69ea8a38e9d);
        }), λdfe12d5c39cc.onmessage = λ79acd34e106d => {
          this.rpc.recieve(λ79acd34e106d.data);
        }, λdfe12d5c39cc.onmessageerror = console.error, this.rpc.call("ready", void 0);
      }
    }
    let λc2abdb75491c = [];
    function n(λ79acd34e106d) {
      let λe69ea8a38e9d = new URL(λ79acd34e106d.request.url);
      return void 0 !== λc2abdb75491c.find(λ79acd34e106d => λe69ea8a38e9d.pathname.startsWith(λ79acd34e106d.prefix));
    }
    async function a(λ79acd34e106d) {
      try {
        let λe69ea8a38e9d = new URL(λ79acd34e106d.request.url), λ370b8f43f192 = λc2abdb75491c.find(λ79acd34e106d => λe69ea8a38e9d.pathname.startsWith(λ79acd34e106d.prefix)), λdfe12d5c39cc = await clients.get(λ79acd34e106d.clientId), λfe63fe9ddd96 = [ ...λ79acd34e106d.request.headers ], λ09d2b7d1ee8f = await λ370b8f43f192.rpc.call("request", {
          rawUrl: λ79acd34e106d.request.url,
          rawReferrer: λ79acd34e106d.request.referrer,
          destination: λ79acd34e106d.request.destination,
          mode: λ79acd34e106d.request.mode,
          referrer: λ79acd34e106d.request.referrer,
          method: λ79acd34e106d.request.method,
          body: λ79acd34e106d.request.body,
          cache: λ79acd34e106d.request.cache,
          forceCrossOriginIsolated: !1,
          initialHeaders: λfe63fe9ddd96,
          rawClientUrl: λdfe12d5c39cc ? λdfe12d5c39cc.url : void 0,
          clientId: λ79acd34e106d.clientId || λ79acd34e106d.resultingClientId
        }, λ79acd34e106d.request.body instanceof ReadableStream || λ79acd34e106d.request.body instanceof ArrayBuffer ? [ λ79acd34e106d.request.body ] : void 0);
        return new Response(λ09d2b7d1ee8f.body, {
          status: λ09d2b7d1ee8f.status,
          statusText: λ09d2b7d1ee8f.statusText,
          headers: λ09d2b7d1ee8f.headers
        });
      } catch (λ79acd34e106d) {
        return console.error("Service Worker error:", λ79acd34e106d), new Response("Internal Service Worker Error: " + λ79acd34e106d.message, {
          status: 500
        });
      }
    }
    addEventListener("message", λ79acd34e106d => {
      if (!λ79acd34e106d.data || "object" != typeof λ79acd34e106d.data || !λ79acd34e106d.data.$controller$init || "object" != typeof λ79acd34e106d.data.$controller$init) return;
      let λe69ea8a38e9d = λ79acd34e106d.data.$controller$init, λ370b8f43f192 = λc2abdb75491c.findIndex(λ79acd34e106d => λ79acd34e106d.id === λe69ea8a38e9d.id);
      -1 !== λ370b8f43f192 && λc2abdb75491c.splice(λ370b8f43f192, 1), λc2abdb75491c.push(new s(λe69ea8a38e9d.prefix, λe69ea8a38e9d.id, λ79acd34e106d.ports[0]));
    }), addEventListener("install", () => {
      self.skipWaiting();
    }), addEventListener("activate", λ79acd34e106d => {
      λ79acd34e106d.waitUntil(clients.claim());
    }), setTimeout(async () => {
      for (let λ79acd34e106d of (console.log("service worker activated, notifying clients to revive"), 
      await clients.matchAll())) λ79acd34e106d.postMessage({
        $controller$swrevive: {}
      });
    }, 100);
  })(), $studyjetController = λ370b8f43f192;
})();
