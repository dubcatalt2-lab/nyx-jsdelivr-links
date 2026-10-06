var $studyjetController;

(() => {
  var λ74cf7d823bdc = {
    805(λ74cf7d823bdc, λedec8fe2ebe3, λ85c064f075db) {
      λ85c064f075db.d(λedec8fe2ebe3, {
        C: () => o
      });
      class o {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λ74cf7d823bdc, λedec8fe2ebe3, λ85c064f075db) {
          this.methods = λ74cf7d823bdc, this.id = λedec8fe2ebe3, this.sendRaw = λ85c064f075db;
        }
        recieve(λ74cf7d823bdc) {
          if (null == λ74cf7d823bdc || "object" != typeof λ74cf7d823bdc) return;
          let λedec8fe2ebe3 = λ74cf7d823bdc[this.id];
          if (null == λedec8fe2ebe3 || "object" != typeof λedec8fe2ebe3) return;
          let λ85c064f075db = λedec8fe2ebe3.$type;
          if ("response" === λ85c064f075db) {
            let λ74cf7d823bdc = λedec8fe2ebe3.$token, λ85c064f075db = λedec8fe2ebe3.$data, λ77b9a5aaeaba = λedec8fe2ebe3.$error, λd5743929978f = this.promiseCallbacks.get(λ74cf7d823bdc);
            if (!λd5743929978f) return;
            this.promiseCallbacks.delete(λ74cf7d823bdc), void 0 !== λ77b9a5aaeaba ? λd5743929978f.reject(Error(λ77b9a5aaeaba)) : λd5743929978f.resolve(λ85c064f075db);
          } else if ("request" === λ85c064f075db) {
            let λ74cf7d823bdc = λedec8fe2ebe3.$method, λ85c064f075db = λedec8fe2ebe3.$args;
            this.methods[λ74cf7d823bdc](λ85c064f075db).then(λ74cf7d823bdc => {
              this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λedec8fe2ebe3.$token,
                  $data: λ74cf7d823bdc?.[0]
                }
              }, λ74cf7d823bdc?.[1]);
            }).catch(λ74cf7d823bdc => {
              console.error(λ74cf7d823bdc), this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λedec8fe2ebe3.$token,
                  $error: λ74cf7d823bdc?.toString() || "Unknown error"
                }
              }, []);
            });
          }
        }
        call(λ74cf7d823bdc, λedec8fe2ebe3, λ85c064f075db = []) {
          let λ77b9a5aaeaba = this.counter++;
          return new Promise((λd5743929978f, λ9f80beb5d766) => {
            this.promiseCallbacks.set(λ77b9a5aaeaba, {
              resolve: λd5743929978f,
              reject: λ9f80beb5d766
            }), this.sendRaw({
              [this.id]: {
                $type: "request",
                $method: λ74cf7d823bdc,
                $args: λedec8fe2ebe3,
                $token: λ77b9a5aaeaba
              }
            }, λ85c064f075db);
          });
        }
      }
    }
  }, λedec8fe2ebe3 = {};
  function r(λ85c064f075db) {
    var λ77b9a5aaeaba = λedec8fe2ebe3[λ85c064f075db];
    if (void 0 !== λ77b9a5aaeaba) return λ77b9a5aaeaba.exports;
    var λd5743929978f = λedec8fe2ebe3[λ85c064f075db] = {
      exports: {}
    };
    return λ74cf7d823bdc[λ85c064f075db](λd5743929978f, λd5743929978f.exports, r), λd5743929978f.exports;
  }
  r.d = (λ74cf7d823bdc, λedec8fe2ebe3) => {
    for (var λ85c064f075db in λedec8fe2ebe3) r.o(λedec8fe2ebe3, λ85c064f075db) && !r.o(λ74cf7d823bdc, λ85c064f075db) && Object.defineProperty(λ74cf7d823bdc, λ85c064f075db, {
      enumerable: !0,
      get: λedec8fe2ebe3[λ85c064f075db]
    });
  }, r.o = (λ74cf7d823bdc, λedec8fe2ebe3) => Object.prototype.hasOwnProperty.call(λ74cf7d823bdc, λedec8fe2ebe3), 
  r.r = λ74cf7d823bdc => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λ74cf7d823bdc, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(λ74cf7d823bdc, "__esModule", {
      value: !0
    });
  };
  var λ85c064f075db = {};
  (() => {
    r.r(λ85c064f075db), r.d(λ85c064f075db, {
      route: () => a,
      shouldRoute: () => n
    });
    var λ74cf7d823bdc = r(805);
    let λedec8fe2ebe3 = {};
    addEventListener("message", λ74cf7d823bdc => {
      if (λ74cf7d823bdc.data && "object" == typeof λ74cf7d823bdc.data) {
        if (λ74cf7d823bdc.data.$sw$setCookieDone && "object" == typeof λ74cf7d823bdc.data.$sw$setCookieDone) {
          let λ85c064f075db = λ74cf7d823bdc.data.$sw$setCookieDone, λ77b9a5aaeaba = λedec8fe2ebe3[λ85c064f075db.id];
          λ77b9a5aaeaba && (λ77b9a5aaeaba(), delete λedec8fe2ebe3[λ85c064f075db.id]);
        }
        if (λ74cf7d823bdc.data.$sw$initRemoteTransport && "object" == typeof λ74cf7d823bdc.data.$sw$initRemoteTransport) {
          let {port: λedec8fe2ebe3, prefix: λ85c064f075db} = λ74cf7d823bdc.data.$sw$initRemoteTransport, λd5743929978f = λ77b9a5aaeaba.find(λ74cf7d823bdc => new URL(λ85c064f075db).pathname.startsWith(λ74cf7d823bdc.prefix));
          if (!λd5743929978f) return void console.error("No relevant controller found for transport init");
          λd5743929978f.rpc.call("initRemoteTransport", λedec8fe2ebe3, [ λedec8fe2ebe3 ]);
        }
      }
    });
    class s {
      prefix;
      id;
      rpc;
      constructor(λ85c064f075db, λ77b9a5aaeaba, λd5743929978f) {
        this.prefix = λ85c064f075db, this.id = λ77b9a5aaeaba, this.rpc = new λ74cf7d823bdc.C({
          sendSetCookie: async ({cookies: λ74cf7d823bdc, options: λ85c064f075db}) => {
            let λ77b9a5aaeaba = await self.clients.matchAll({
              type: "window",
              includeUncontrolled: !0
            }), λd5743929978f = [], λ9f80beb5d766 = [], λ34ec77bb9ca6 = λ85c064f075db?.destination === "document" || λ85c064f075db?.destination === "iframe";
            for (let λ29c87ba9c8be of λ77b9a5aaeaba) {
              let λ77b9a5aaeaba = Math.random().toString(36).substring(2, 10);
              λd5743929978f.push(λ77b9a5aaeaba), λ29c87ba9c8be.postMessage({
                $controller$setCookie: {
                  cookies: λ74cf7d823bdc,
                  options: λ85c064f075db,
                  id: λ77b9a5aaeaba,
                  controllerId: this.id
                }
              }), λ34ec77bb9ca6 || λ9f80beb5d766.push(new Promise(λ74cf7d823bdc => {
                λedec8fe2ebe3[λ77b9a5aaeaba] = () => λ74cf7d823bdc(λ77b9a5aaeaba);
              }));
            }
            if (λ9f80beb5d766.length > 0) {
              let λ85c064f075db, λ34ec77bb9ca6 = !1, λ29c87ba9c8be = new Promise(λ9f80beb5d766 => {
                λ85c064f075db = setTimeout(() => {
                  if (!λ34ec77bb9ca6) {
                    let λ85c064f075db = λd5743929978f.filter(λ74cf7d823bdc => void 0 !== λedec8fe2ebe3[λ74cf7d823bdc]);
                    console.error(`timed out waiting for set cookie response (deadlock?): cookies=${λ74cf7d823bdc.length} clients=${λ77b9a5aaeaba.length} pending=${λ85c064f075db.length}/${λd5743929978f.length} clientUrls=${λ77b9a5aaeaba.map(λ74cf7d823bdc => λ74cf7d823bdc.url).join(",")}`);
                  }
                  λ9f80beb5d766();
                }, 1e3);
              });
              try {
                await Promise.race([ λ29c87ba9c8be, Promise.any(λ9f80beb5d766).then(() => {
                  λ34ec77bb9ca6 = !0;
                }).catch(() => {}) ]);
              } finally {
                for (let λ74cf7d823bdc of (void 0 !== λ85c064f075db && clearTimeout(λ85c064f075db), 
                λd5743929978f)) delete λedec8fe2ebe3[λ74cf7d823bdc];
              }
            }
          }
        }, "tabchannel-" + λ77b9a5aaeaba, (λ74cf7d823bdc, λedec8fe2ebe3) => {
          λd5743929978f.postMessage(λ74cf7d823bdc, λedec8fe2ebe3);
        }), λd5743929978f.onmessage = λ74cf7d823bdc => {
          this.rpc.recieve(λ74cf7d823bdc.data);
        }, λd5743929978f.onmessageerror = console.error, this.rpc.call("ready", void 0);
      }
    }
    let λ77b9a5aaeaba = [];
    function n(λ74cf7d823bdc) {
      let λedec8fe2ebe3 = new URL(λ74cf7d823bdc.request.url);
      return void 0 !== λ77b9a5aaeaba.find(λ74cf7d823bdc => λedec8fe2ebe3.pathname.startsWith(λ74cf7d823bdc.prefix));
    }
    async function a(λ74cf7d823bdc) {
      try {
        let λedec8fe2ebe3 = new URL(λ74cf7d823bdc.request.url), λ85c064f075db = λ77b9a5aaeaba.find(λ74cf7d823bdc => λedec8fe2ebe3.pathname.startsWith(λ74cf7d823bdc.prefix)), λd5743929978f = await clients.get(λ74cf7d823bdc.clientId), λ9f80beb5d766 = [ ...λ74cf7d823bdc.request.headers ], λ34ec77bb9ca6 = await λ85c064f075db.rpc.call("request", {
          rawUrl: λ74cf7d823bdc.request.url,
          rawReferrer: λ74cf7d823bdc.request.referrer,
          destination: λ74cf7d823bdc.request.destination,
          mode: λ74cf7d823bdc.request.mode,
          referrer: λ74cf7d823bdc.request.referrer,
          method: λ74cf7d823bdc.request.method,
          body: λ74cf7d823bdc.request.body,
          cache: λ74cf7d823bdc.request.cache,
          forceCrossOriginIsolated: !1,
          initialHeaders: λ9f80beb5d766,
          rawClientUrl: λd5743929978f ? λd5743929978f.url : void 0,
          clientId: λ74cf7d823bdc.clientId || λ74cf7d823bdc.resultingClientId
        }, λ74cf7d823bdc.request.body instanceof ReadableStream || λ74cf7d823bdc.request.body instanceof ArrayBuffer ? [ λ74cf7d823bdc.request.body ] : void 0);
        return new Response(λ34ec77bb9ca6.body, {
          status: λ34ec77bb9ca6.status,
          statusText: λ34ec77bb9ca6.statusText,
          headers: λ34ec77bb9ca6.headers
        });
      } catch (λ74cf7d823bdc) {
        return console.error("Service Worker error:", λ74cf7d823bdc), new Response("Internal Service Worker Error: " + λ74cf7d823bdc.message, {
          status: 500
        });
      }
    }
    addEventListener("message", λ74cf7d823bdc => {
      if (!λ74cf7d823bdc.data || "object" != typeof λ74cf7d823bdc.data || !λ74cf7d823bdc.data.$controller$init || "object" != typeof λ74cf7d823bdc.data.$controller$init) return;
      let λedec8fe2ebe3 = λ74cf7d823bdc.data.$controller$init, λ85c064f075db = λ77b9a5aaeaba.findIndex(λ74cf7d823bdc => λ74cf7d823bdc.id === λedec8fe2ebe3.id);
      -1 !== λ85c064f075db && λ77b9a5aaeaba.splice(λ85c064f075db, 1), λ77b9a5aaeaba.push(new s(λedec8fe2ebe3.prefix, λedec8fe2ebe3.id, λ74cf7d823bdc.ports[0]));
    }), addEventListener("install", () => {
      self.skipWaiting();
    }), addEventListener("activate", λ74cf7d823bdc => {
      λ74cf7d823bdc.waitUntil(clients.claim());
    }), setTimeout(async () => {
      for (let λ74cf7d823bdc of (console.log("service worker activated, notifying clients to revive"), 
      await clients.matchAll())) λ74cf7d823bdc.postMessage({
        $controller$swrevive: {}
      });
    }, 100);
  })(), $studyjetController = λ85c064f075db;
})();
