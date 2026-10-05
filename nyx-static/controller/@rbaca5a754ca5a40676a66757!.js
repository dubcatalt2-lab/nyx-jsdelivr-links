var $studyjetController;

(() => {
  var λ3767ebc5ce84 = {
    805(λ3767ebc5ce84, λ71981ce48d34, λcf05893ecb85) {
      λcf05893ecb85.d(λ71981ce48d34, {
        C: () => o
      });
      class o {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λ3767ebc5ce84, λ71981ce48d34, λcf05893ecb85) {
          this.methods = λ3767ebc5ce84, this.id = λ71981ce48d34, this.sendRaw = λcf05893ecb85;
        }
        recieve(λ3767ebc5ce84) {
          if (null == λ3767ebc5ce84 || "object" != typeof λ3767ebc5ce84) return;
          let λ71981ce48d34 = λ3767ebc5ce84[this.id];
          if (null == λ71981ce48d34 || "object" != typeof λ71981ce48d34) return;
          let λcf05893ecb85 = λ71981ce48d34.$type;
          if ("response" === λcf05893ecb85) {
            let λ3767ebc5ce84 = λ71981ce48d34.$token, λcf05893ecb85 = λ71981ce48d34.$data, λ67f6a6a9cb68 = λ71981ce48d34.$error, λb0ed6a102f92 = this.promiseCallbacks.get(λ3767ebc5ce84);
            if (!λb0ed6a102f92) return;
            this.promiseCallbacks.delete(λ3767ebc5ce84), void 0 !== λ67f6a6a9cb68 ? λb0ed6a102f92.reject(Error(λ67f6a6a9cb68)) : λb0ed6a102f92.resolve(λcf05893ecb85);
          } else if ("request" === λcf05893ecb85) {
            let λ3767ebc5ce84 = λ71981ce48d34.$method, λcf05893ecb85 = λ71981ce48d34.$args;
            this.methods[λ3767ebc5ce84](λcf05893ecb85).then(λ3767ebc5ce84 => {
              this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ71981ce48d34.$token,
                  $data: λ3767ebc5ce84?.[0]
                }
              }, λ3767ebc5ce84?.[1]);
            }).catch(λ3767ebc5ce84 => {
              console.error(λ3767ebc5ce84), this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ71981ce48d34.$token,
                  $error: λ3767ebc5ce84?.toString() || "Unknown error"
                }
              }, []);
            });
          }
        }
        call(λ3767ebc5ce84, λ71981ce48d34, λcf05893ecb85 = []) {
          let λ67f6a6a9cb68 = this.counter++;
          return new Promise((λb0ed6a102f92, λ78011ee19383) => {
            this.promiseCallbacks.set(λ67f6a6a9cb68, {
              resolve: λb0ed6a102f92,
              reject: λ78011ee19383
            }), this.sendRaw({
              [this.id]: {
                $type: "request",
                $method: λ3767ebc5ce84,
                $args: λ71981ce48d34,
                $token: λ67f6a6a9cb68
              }
            }, λcf05893ecb85);
          });
        }
      }
    }
  }, λ71981ce48d34 = {};
  function r(λcf05893ecb85) {
    var λ67f6a6a9cb68 = λ71981ce48d34[λcf05893ecb85];
    if (void 0 !== λ67f6a6a9cb68) return λ67f6a6a9cb68.exports;
    var λb0ed6a102f92 = λ71981ce48d34[λcf05893ecb85] = {
      exports: {}
    };
    return λ3767ebc5ce84[λcf05893ecb85](λb0ed6a102f92, λb0ed6a102f92.exports, r), λb0ed6a102f92.exports;
  }
  r.d = (λ3767ebc5ce84, λ71981ce48d34) => {
    for (var λcf05893ecb85 in λ71981ce48d34) r.o(λ71981ce48d34, λcf05893ecb85) && !r.o(λ3767ebc5ce84, λcf05893ecb85) && Object.defineProperty(λ3767ebc5ce84, λcf05893ecb85, {
      enumerable: !0,
      get: λ71981ce48d34[λcf05893ecb85]
    });
  }, r.o = (λ3767ebc5ce84, λ71981ce48d34) => Object.prototype.hasOwnProperty.call(λ3767ebc5ce84, λ71981ce48d34), 
  r.r = λ3767ebc5ce84 => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λ3767ebc5ce84, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(λ3767ebc5ce84, "__esModule", {
      value: !0
    });
  };
  var λcf05893ecb85 = {};
  (() => {
    r.r(λcf05893ecb85), r.d(λcf05893ecb85, {
      route: () => a,
      shouldRoute: () => n
    });
    var λ3767ebc5ce84 = r(805);
    let λ71981ce48d34 = {};
    addEventListener("message", λ3767ebc5ce84 => {
      if (λ3767ebc5ce84.data && "object" == typeof λ3767ebc5ce84.data) {
        if (λ3767ebc5ce84.data.$sw$setCookieDone && "object" == typeof λ3767ebc5ce84.data.$sw$setCookieDone) {
          let λcf05893ecb85 = λ3767ebc5ce84.data.$sw$setCookieDone, λ67f6a6a9cb68 = λ71981ce48d34[λcf05893ecb85.id];
          λ67f6a6a9cb68 && (λ67f6a6a9cb68(), delete λ71981ce48d34[λcf05893ecb85.id]);
        }
        if (λ3767ebc5ce84.data.$sw$initRemoteTransport && "object" == typeof λ3767ebc5ce84.data.$sw$initRemoteTransport) {
          let {port: λ71981ce48d34, prefix: λcf05893ecb85} = λ3767ebc5ce84.data.$sw$initRemoteTransport, λb0ed6a102f92 = λ67f6a6a9cb68.find(λ3767ebc5ce84 => new URL(λcf05893ecb85).pathname.startsWith(λ3767ebc5ce84.prefix));
          if (!λb0ed6a102f92) return void console.error("No relevant controller found for transport init");
          λb0ed6a102f92.rpc.call("initRemoteTransport", λ71981ce48d34, [ λ71981ce48d34 ]);
        }
      }
    });
    class s {
      prefix;
      id;
      rpc;
      constructor(λcf05893ecb85, λ67f6a6a9cb68, λb0ed6a102f92) {
        this.prefix = λcf05893ecb85, this.id = λ67f6a6a9cb68, this.rpc = new λ3767ebc5ce84.C({
          sendSetCookie: async ({cookies: λ3767ebc5ce84, options: λcf05893ecb85}) => {
            let λ67f6a6a9cb68 = await self.clients.matchAll({
              type: "window",
              includeUncontrolled: !0
            }), λb0ed6a102f92 = [], λ78011ee19383 = [], λf1512b63a8df = λcf05893ecb85?.destination === "document" || λcf05893ecb85?.destination === "iframe";
            for (let λf3e39d53e7fb of λ67f6a6a9cb68) {
              let λ67f6a6a9cb68 = Math.random().toString(36).substring(2, 10);
              λb0ed6a102f92.push(λ67f6a6a9cb68), λf3e39d53e7fb.postMessage({
                $controller$setCookie: {
                  cookies: λ3767ebc5ce84,
                  options: λcf05893ecb85,
                  id: λ67f6a6a9cb68,
                  controllerId: this.id
                }
              }), λf1512b63a8df || λ78011ee19383.push(new Promise(λ3767ebc5ce84 => {
                λ71981ce48d34[λ67f6a6a9cb68] = () => λ3767ebc5ce84(λ67f6a6a9cb68);
              }));
            }
            if (λ78011ee19383.length > 0) {
              let λcf05893ecb85, λf1512b63a8df = !1, λf3e39d53e7fb = new Promise(λ78011ee19383 => {
                λcf05893ecb85 = setTimeout(() => {
                  if (!λf1512b63a8df) {
                    let λcf05893ecb85 = λb0ed6a102f92.filter(λ3767ebc5ce84 => void 0 !== λ71981ce48d34[λ3767ebc5ce84]);
                    console.error(`timed out waiting for set cookie response (deadlock?): cookies=${λ3767ebc5ce84.length} clients=${λ67f6a6a9cb68.length} pending=${λcf05893ecb85.length}/${λb0ed6a102f92.length} clientUrls=${λ67f6a6a9cb68.map(λ3767ebc5ce84 => λ3767ebc5ce84.url).join(",")}`);
                  }
                  λ78011ee19383();
                }, 1e3);
              });
              try {
                await Promise.race([ λf3e39d53e7fb, Promise.any(λ78011ee19383).then(() => {
                  λf1512b63a8df = !0;
                }).catch(() => {}) ]);
              } finally {
                for (let λ3767ebc5ce84 of (void 0 !== λcf05893ecb85 && clearTimeout(λcf05893ecb85), 
                λb0ed6a102f92)) delete λ71981ce48d34[λ3767ebc5ce84];
              }
            }
          }
        }, "tabchannel-" + λ67f6a6a9cb68, (λ3767ebc5ce84, λ71981ce48d34) => {
          λb0ed6a102f92.postMessage(λ3767ebc5ce84, λ71981ce48d34);
        }), λb0ed6a102f92.onmessage = λ3767ebc5ce84 => {
          this.rpc.recieve(λ3767ebc5ce84.data);
        }, λb0ed6a102f92.onmessageerror = console.error, this.rpc.call("ready", void 0);
      }
    }
    let λ67f6a6a9cb68 = [];
    function n(λ3767ebc5ce84) {
      let λ71981ce48d34 = new URL(λ3767ebc5ce84.request.url);
      return void 0 !== λ67f6a6a9cb68.find(λ3767ebc5ce84 => λ71981ce48d34.pathname.startsWith(λ3767ebc5ce84.prefix));
    }
    async function a(λ3767ebc5ce84) {
      try {
        let λ71981ce48d34 = new URL(λ3767ebc5ce84.request.url), λcf05893ecb85 = λ67f6a6a9cb68.find(λ3767ebc5ce84 => λ71981ce48d34.pathname.startsWith(λ3767ebc5ce84.prefix)), λb0ed6a102f92 = await clients.get(λ3767ebc5ce84.clientId), λ78011ee19383 = [ ...λ3767ebc5ce84.request.headers ], λf1512b63a8df = await λcf05893ecb85.rpc.call("request", {
          rawUrl: λ3767ebc5ce84.request.url,
          rawReferrer: λ3767ebc5ce84.request.referrer,
          destination: λ3767ebc5ce84.request.destination,
          mode: λ3767ebc5ce84.request.mode,
          referrer: λ3767ebc5ce84.request.referrer,
          method: λ3767ebc5ce84.request.method,
          body: λ3767ebc5ce84.request.body,
          cache: λ3767ebc5ce84.request.cache,
          forceCrossOriginIsolated: !1,
          initialHeaders: λ78011ee19383,
          rawClientUrl: λb0ed6a102f92 ? λb0ed6a102f92.url : void 0,
          clientId: λ3767ebc5ce84.clientId || λ3767ebc5ce84.resultingClientId
        }, λ3767ebc5ce84.request.body instanceof ReadableStream || λ3767ebc5ce84.request.body instanceof ArrayBuffer ? [ λ3767ebc5ce84.request.body ] : void 0);
        return new Response(λf1512b63a8df.body, {
          status: λf1512b63a8df.status,
          statusText: λf1512b63a8df.statusText,
          headers: λf1512b63a8df.headers
        });
      } catch (λ3767ebc5ce84) {
        return console.error("Service Worker error:", λ3767ebc5ce84), new Response("Internal Service Worker Error: " + λ3767ebc5ce84.message, {
          status: 500
        });
      }
    }
    addEventListener("message", λ3767ebc5ce84 => {
      if (!λ3767ebc5ce84.data || "object" != typeof λ3767ebc5ce84.data || !λ3767ebc5ce84.data.$controller$init || "object" != typeof λ3767ebc5ce84.data.$controller$init) return;
      let λ71981ce48d34 = λ3767ebc5ce84.data.$controller$init, λcf05893ecb85 = λ67f6a6a9cb68.findIndex(λ3767ebc5ce84 => λ3767ebc5ce84.id === λ71981ce48d34.id);
      -1 !== λcf05893ecb85 && λ67f6a6a9cb68.splice(λcf05893ecb85, 1), λ67f6a6a9cb68.push(new s(λ71981ce48d34.prefix, λ71981ce48d34.id, λ3767ebc5ce84.ports[0]));
    }), addEventListener("install", () => {
      self.skipWaiting();
    }), addEventListener("activate", λ3767ebc5ce84 => {
      λ3767ebc5ce84.waitUntil(clients.claim());
    }), setTimeout(async () => {
      for (let λ3767ebc5ce84 of (console.log("service worker activated, notifying clients to revive"), 
      await clients.matchAll())) λ3767ebc5ce84.postMessage({
        $controller$swrevive: {}
      });
    }, 100);
  })(), $studyjetController = λcf05893ecb85;
})();
