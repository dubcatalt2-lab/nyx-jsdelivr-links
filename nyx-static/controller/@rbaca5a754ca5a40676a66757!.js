var $studyjetController;

(() => {
  var λ43ae6bc1e146 = {
    805(λ43ae6bc1e146, λ138b76aa2de0, λ50b42c1709c3) {
      λ50b42c1709c3.d(λ138b76aa2de0, {
        C: () => o
      });
      class o {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λ43ae6bc1e146, λ138b76aa2de0, λ50b42c1709c3) {
          this.methods = λ43ae6bc1e146, this.id = λ138b76aa2de0, this.sendRaw = λ50b42c1709c3;
        }
        recieve(λ43ae6bc1e146) {
          if (null == λ43ae6bc1e146 || "object" != typeof λ43ae6bc1e146) return;
          let λ138b76aa2de0 = λ43ae6bc1e146[this.id];
          if (null == λ138b76aa2de0 || "object" != typeof λ138b76aa2de0) return;
          let λ50b42c1709c3 = λ138b76aa2de0.$type;
          if ("response" === λ50b42c1709c3) {
            let λ43ae6bc1e146 = λ138b76aa2de0.$token, λ50b42c1709c3 = λ138b76aa2de0.$data, λ7f4ea4fb8310 = λ138b76aa2de0.$error, λ1092b55b6c03 = this.promiseCallbacks.get(λ43ae6bc1e146);
            if (!λ1092b55b6c03) return;
            this.promiseCallbacks.delete(λ43ae6bc1e146), void 0 !== λ7f4ea4fb8310 ? λ1092b55b6c03.reject(Error(λ7f4ea4fb8310)) : λ1092b55b6c03.resolve(λ50b42c1709c3);
          } else if ("request" === λ50b42c1709c3) {
            let λ43ae6bc1e146 = λ138b76aa2de0.$method, λ50b42c1709c3 = λ138b76aa2de0.$args;
            this.methods[λ43ae6bc1e146](λ50b42c1709c3).then(λ43ae6bc1e146 => {
              this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ138b76aa2de0.$token,
                  $data: λ43ae6bc1e146?.[0]
                }
              }, λ43ae6bc1e146?.[1]);
            }).catch(λ43ae6bc1e146 => {
              console.error(λ43ae6bc1e146), this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ138b76aa2de0.$token,
                  $error: λ43ae6bc1e146?.toString() || "Unknown error"
                }
              }, []);
            });
          }
        }
        call(λ43ae6bc1e146, λ138b76aa2de0, λ50b42c1709c3 = []) {
          let λ7f4ea4fb8310 = this.counter++;
          return new Promise((λ1092b55b6c03, λ1fb790c4710d) => {
            this.promiseCallbacks.set(λ7f4ea4fb8310, {
              resolve: λ1092b55b6c03,
              reject: λ1fb790c4710d
            }), this.sendRaw({
              [this.id]: {
                $type: "request",
                $method: λ43ae6bc1e146,
                $args: λ138b76aa2de0,
                $token: λ7f4ea4fb8310
              }
            }, λ50b42c1709c3);
          });
        }
      }
    }
  }, λ138b76aa2de0 = {};
  function r(λ50b42c1709c3) {
    var λ7f4ea4fb8310 = λ138b76aa2de0[λ50b42c1709c3];
    if (void 0 !== λ7f4ea4fb8310) return λ7f4ea4fb8310.exports;
    var λ1092b55b6c03 = λ138b76aa2de0[λ50b42c1709c3] = {
      exports: {}
    };
    return λ43ae6bc1e146[λ50b42c1709c3](λ1092b55b6c03, λ1092b55b6c03.exports, r), λ1092b55b6c03.exports;
  }
  r.d = (λ43ae6bc1e146, λ138b76aa2de0) => {
    for (var λ50b42c1709c3 in λ138b76aa2de0) r.o(λ138b76aa2de0, λ50b42c1709c3) && !r.o(λ43ae6bc1e146, λ50b42c1709c3) && Object.defineProperty(λ43ae6bc1e146, λ50b42c1709c3, {
      enumerable: !0,
      get: λ138b76aa2de0[λ50b42c1709c3]
    });
  }, r.o = (λ43ae6bc1e146, λ138b76aa2de0) => Object.prototype.hasOwnProperty.call(λ43ae6bc1e146, λ138b76aa2de0), 
  r.r = λ43ae6bc1e146 => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λ43ae6bc1e146, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(λ43ae6bc1e146, "__esModule", {
      value: !0
    });
  };
  var λ50b42c1709c3 = {};
  (() => {
    r.r(λ50b42c1709c3), r.d(λ50b42c1709c3, {
      route: () => a,
      shouldRoute: () => n
    });
    var λ43ae6bc1e146 = r(805);
    let λ138b76aa2de0 = {};
    addEventListener("message", λ43ae6bc1e146 => {
      if (λ43ae6bc1e146.data && "object" == typeof λ43ae6bc1e146.data) {
        if (λ43ae6bc1e146.data.$sw$setCookieDone && "object" == typeof λ43ae6bc1e146.data.$sw$setCookieDone) {
          let λ50b42c1709c3 = λ43ae6bc1e146.data.$sw$setCookieDone, λ7f4ea4fb8310 = λ138b76aa2de0[λ50b42c1709c3.id];
          λ7f4ea4fb8310 && (λ7f4ea4fb8310(), delete λ138b76aa2de0[λ50b42c1709c3.id]);
        }
        if (λ43ae6bc1e146.data.$sw$initRemoteTransport && "object" == typeof λ43ae6bc1e146.data.$sw$initRemoteTransport) {
          let {port: λ138b76aa2de0, prefix: λ50b42c1709c3} = λ43ae6bc1e146.data.$sw$initRemoteTransport, λ1092b55b6c03 = λ7f4ea4fb8310.find(λ43ae6bc1e146 => new URL(λ50b42c1709c3).pathname.startsWith(λ43ae6bc1e146.prefix));
          if (!λ1092b55b6c03) return void console.error("No relevant controller found for transport init");
          λ1092b55b6c03.rpc.call("initRemoteTransport", λ138b76aa2de0, [ λ138b76aa2de0 ]);
        }
      }
    });
    class s {
      prefix;
      id;
      rpc;
      constructor(λ50b42c1709c3, λ7f4ea4fb8310, λ1092b55b6c03) {
        this.prefix = λ50b42c1709c3, this.id = λ7f4ea4fb8310, this.rpc = new λ43ae6bc1e146.C({
          sendSetCookie: async ({cookies: λ43ae6bc1e146, options: λ50b42c1709c3}) => {
            let λ7f4ea4fb8310 = await self.clients.matchAll({
              type: "window",
              includeUncontrolled: !0
            }), λ1092b55b6c03 = [], λ1fb790c4710d = [], λ8d63ce9b99b0 = λ50b42c1709c3?.destination === "document" || λ50b42c1709c3?.destination === "iframe";
            for (let λcd0b8347843c of λ7f4ea4fb8310) {
              let λ7f4ea4fb8310 = Math.random().toString(36).substring(2, 10);
              λ1092b55b6c03.push(λ7f4ea4fb8310), λcd0b8347843c.postMessage({
                $controller$setCookie: {
                  cookies: λ43ae6bc1e146,
                  options: λ50b42c1709c3,
                  id: λ7f4ea4fb8310,
                  controllerId: this.id
                }
              }), λ8d63ce9b99b0 || λ1fb790c4710d.push(new Promise(λ43ae6bc1e146 => {
                λ138b76aa2de0[λ7f4ea4fb8310] = () => λ43ae6bc1e146(λ7f4ea4fb8310);
              }));
            }
            if (λ1fb790c4710d.length > 0) {
              let λ50b42c1709c3, λ8d63ce9b99b0 = !1, λcd0b8347843c = new Promise(λ1fb790c4710d => {
                λ50b42c1709c3 = setTimeout(() => {
                  if (!λ8d63ce9b99b0) {
                    let λ50b42c1709c3 = λ1092b55b6c03.filter(λ43ae6bc1e146 => void 0 !== λ138b76aa2de0[λ43ae6bc1e146]);
                    console.error(`timed out waiting for set cookie response (deadlock?): cookies=${λ43ae6bc1e146.length} clients=${λ7f4ea4fb8310.length} pending=${λ50b42c1709c3.length}/${λ1092b55b6c03.length} clientUrls=${λ7f4ea4fb8310.map(λ43ae6bc1e146 => λ43ae6bc1e146.url).join(",")}`);
                  }
                  λ1fb790c4710d();
                }, 1e3);
              });
              try {
                await Promise.race([ λcd0b8347843c, Promise.any(λ1fb790c4710d).then(() => {
                  λ8d63ce9b99b0 = !0;
                }).catch(() => {}) ]);
              } finally {
                for (let λ43ae6bc1e146 of (void 0 !== λ50b42c1709c3 && clearTimeout(λ50b42c1709c3), 
                λ1092b55b6c03)) delete λ138b76aa2de0[λ43ae6bc1e146];
              }
            }
          }
        }, "tabchannel-" + λ7f4ea4fb8310, (λ43ae6bc1e146, λ138b76aa2de0) => {
          λ1092b55b6c03.postMessage(λ43ae6bc1e146, λ138b76aa2de0);
        }), λ1092b55b6c03.onmessage = λ43ae6bc1e146 => {
          this.rpc.recieve(λ43ae6bc1e146.data);
        }, λ1092b55b6c03.onmessageerror = console.error, this.rpc.call("ready", void 0);
      }
    }
    let λ7f4ea4fb8310 = [];
    function n(λ43ae6bc1e146) {
      let λ138b76aa2de0 = new URL(λ43ae6bc1e146.request.url);
      return void 0 !== λ7f4ea4fb8310.find(λ43ae6bc1e146 => λ138b76aa2de0.pathname.startsWith(λ43ae6bc1e146.prefix));
    }
    async function a(λ43ae6bc1e146) {
      try {
        let λ138b76aa2de0 = new URL(λ43ae6bc1e146.request.url), λ50b42c1709c3 = λ7f4ea4fb8310.find(λ43ae6bc1e146 => λ138b76aa2de0.pathname.startsWith(λ43ae6bc1e146.prefix)), λ1092b55b6c03 = await clients.get(λ43ae6bc1e146.clientId), λ1fb790c4710d = [ ...λ43ae6bc1e146.request.headers ], λ8d63ce9b99b0 = await λ50b42c1709c3.rpc.call("request", {
          rawUrl: λ43ae6bc1e146.request.url,
          rawReferrer: λ43ae6bc1e146.request.referrer,
          destination: λ43ae6bc1e146.request.destination,
          mode: λ43ae6bc1e146.request.mode,
          referrer: λ43ae6bc1e146.request.referrer,
          method: λ43ae6bc1e146.request.method,
          body: λ43ae6bc1e146.request.body,
          cache: λ43ae6bc1e146.request.cache,
          forceCrossOriginIsolated: !1,
          initialHeaders: λ1fb790c4710d,
          rawClientUrl: λ1092b55b6c03 ? λ1092b55b6c03.url : void 0,
          clientId: λ43ae6bc1e146.clientId || λ43ae6bc1e146.resultingClientId
        }, λ43ae6bc1e146.request.body instanceof ReadableStream || λ43ae6bc1e146.request.body instanceof ArrayBuffer ? [ λ43ae6bc1e146.request.body ] : void 0);
        return new Response(λ8d63ce9b99b0.body, {
          status: λ8d63ce9b99b0.status,
          statusText: λ8d63ce9b99b0.statusText,
          headers: λ8d63ce9b99b0.headers
        });
      } catch (λ43ae6bc1e146) {
        return console.error("Service Worker error:", λ43ae6bc1e146), new Response("Internal Service Worker Error: " + λ43ae6bc1e146.message, {
          status: 500
        });
      }
    }
    addEventListener("message", λ43ae6bc1e146 => {
      if (!λ43ae6bc1e146.data || "object" != typeof λ43ae6bc1e146.data || !λ43ae6bc1e146.data.$controller$init || "object" != typeof λ43ae6bc1e146.data.$controller$init) return;
      let λ138b76aa2de0 = λ43ae6bc1e146.data.$controller$init, λ50b42c1709c3 = λ7f4ea4fb8310.findIndex(λ43ae6bc1e146 => λ43ae6bc1e146.id === λ138b76aa2de0.id);
      -1 !== λ50b42c1709c3 && λ7f4ea4fb8310.splice(λ50b42c1709c3, 1), λ7f4ea4fb8310.push(new s(λ138b76aa2de0.prefix, λ138b76aa2de0.id, λ43ae6bc1e146.ports[0]));
    }), addEventListener("install", () => {
      self.skipWaiting();
    }), addEventListener("activate", λ43ae6bc1e146 => {
      λ43ae6bc1e146.waitUntil(clients.claim());
    }), setTimeout(async () => {
      for (let λ43ae6bc1e146 of (console.log("service worker activated, notifying clients to revive"), 
      await clients.matchAll())) λ43ae6bc1e146.postMessage({
        $controller$swrevive: {}
      });
    }, 100);
  })(), $studyjetController = λ50b42c1709c3;
})();
