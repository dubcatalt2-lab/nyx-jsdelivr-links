var $studyjetController;

(() => {
  var λbd31e9fd0dba = {
    805(λbd31e9fd0dba, λed26e94ada3d, λb921f75f075b) {
      λb921f75f075b.d(λed26e94ada3d, {
        C: () => o
      });
      class o {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λbd31e9fd0dba, λed26e94ada3d, λb921f75f075b) {
          this.methods = λbd31e9fd0dba, this.id = λed26e94ada3d, this.sendRaw = λb921f75f075b;
        }
        recieve(λbd31e9fd0dba) {
          if (null == λbd31e9fd0dba || "object" != typeof λbd31e9fd0dba) return;
          let λed26e94ada3d = λbd31e9fd0dba[this.id];
          if (null == λed26e94ada3d || "object" != typeof λed26e94ada3d) return;
          let λb921f75f075b = λed26e94ada3d.$type;
          if ("response" === λb921f75f075b) {
            let λbd31e9fd0dba = λed26e94ada3d.$token, λb921f75f075b = λed26e94ada3d.$data, λ708dcb45dab5 = λed26e94ada3d.$error, λ102a7c328759 = this.promiseCallbacks.get(λbd31e9fd0dba);
            if (!λ102a7c328759) return;
            this.promiseCallbacks.delete(λbd31e9fd0dba), void 0 !== λ708dcb45dab5 ? λ102a7c328759.reject(Error(λ708dcb45dab5)) : λ102a7c328759.resolve(λb921f75f075b);
          } else if ("request" === λb921f75f075b) {
            let λbd31e9fd0dba = λed26e94ada3d.$method, λb921f75f075b = λed26e94ada3d.$args;
            this.methods[λbd31e9fd0dba](λb921f75f075b).then(λbd31e9fd0dba => {
              this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λed26e94ada3d.$token,
                  $data: λbd31e9fd0dba?.[0]
                }
              }, λbd31e9fd0dba?.[1]);
            }).catch(λbd31e9fd0dba => {
              console.error(λbd31e9fd0dba), this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λed26e94ada3d.$token,
                  $error: λbd31e9fd0dba?.toString() || "Unknown error"
                }
              }, []);
            });
          }
        }
        call(λbd31e9fd0dba, λed26e94ada3d, λb921f75f075b = []) {
          let λ708dcb45dab5 = this.counter++;
          return new Promise((λ102a7c328759, λ6493341ad22b) => {
            this.promiseCallbacks.set(λ708dcb45dab5, {
              resolve: λ102a7c328759,
              reject: λ6493341ad22b
            }), this.sendRaw({
              [this.id]: {
                $type: "request",
                $method: λbd31e9fd0dba,
                $args: λed26e94ada3d,
                $token: λ708dcb45dab5
              }
            }, λb921f75f075b);
          });
        }
      }
    }
  }, λed26e94ada3d = {};
  function r(λb921f75f075b) {
    var λ708dcb45dab5 = λed26e94ada3d[λb921f75f075b];
    if (void 0 !== λ708dcb45dab5) return λ708dcb45dab5.exports;
    var λ102a7c328759 = λed26e94ada3d[λb921f75f075b] = {
      exports: {}
    };
    return λbd31e9fd0dba[λb921f75f075b](λ102a7c328759, λ102a7c328759.exports, r), λ102a7c328759.exports;
  }
  r.d = (λbd31e9fd0dba, λed26e94ada3d) => {
    for (var λb921f75f075b in λed26e94ada3d) r.o(λed26e94ada3d, λb921f75f075b) && !r.o(λbd31e9fd0dba, λb921f75f075b) && Object.defineProperty(λbd31e9fd0dba, λb921f75f075b, {
      enumerable: !0,
      get: λed26e94ada3d[λb921f75f075b]
    });
  }, r.o = (λbd31e9fd0dba, λed26e94ada3d) => Object.prototype.hasOwnProperty.call(λbd31e9fd0dba, λed26e94ada3d), 
  r.r = λbd31e9fd0dba => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λbd31e9fd0dba, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(λbd31e9fd0dba, "__esModule", {
      value: !0
    });
  };
  var λb921f75f075b = {};
  (() => {
    r.r(λb921f75f075b), r.d(λb921f75f075b, {
      route: () => a,
      shouldRoute: () => n
    });
    var λbd31e9fd0dba = r(805);
    let λed26e94ada3d = {};
    addEventListener("message", λbd31e9fd0dba => {
      if (λbd31e9fd0dba.data && "object" == typeof λbd31e9fd0dba.data) {
        if (λbd31e9fd0dba.data.$sw$setCookieDone && "object" == typeof λbd31e9fd0dba.data.$sw$setCookieDone) {
          let λb921f75f075b = λbd31e9fd0dba.data.$sw$setCookieDone, λ708dcb45dab5 = λed26e94ada3d[λb921f75f075b.id];
          λ708dcb45dab5 && (λ708dcb45dab5(), delete λed26e94ada3d[λb921f75f075b.id]);
        }
        if (λbd31e9fd0dba.data.$sw$initRemoteTransport && "object" == typeof λbd31e9fd0dba.data.$sw$initRemoteTransport) {
          let {port: λed26e94ada3d, prefix: λb921f75f075b} = λbd31e9fd0dba.data.$sw$initRemoteTransport, λ102a7c328759 = λ708dcb45dab5.find(λbd31e9fd0dba => new URL(λb921f75f075b).pathname.startsWith(λbd31e9fd0dba.prefix));
          if (!λ102a7c328759) return void console.error("No relevant controller found for transport init");
          λ102a7c328759.rpc.call("initRemoteTransport", λed26e94ada3d, [ λed26e94ada3d ]);
        }
      }
    });
    class s {
      prefix;
      id;
      rpc;
      constructor(λb921f75f075b, λ708dcb45dab5, λ102a7c328759) {
        this.prefix = λb921f75f075b, this.id = λ708dcb45dab5, this.rpc = new λbd31e9fd0dba.C({
          sendSetCookie: async ({cookies: λbd31e9fd0dba, options: λb921f75f075b}) => {
            let λ708dcb45dab5 = await self.clients.matchAll({
              type: "window",
              includeUncontrolled: !0
            }), λ102a7c328759 = [], λ6493341ad22b = [], λb11a44b574a1 = λb921f75f075b?.destination === "document" || λb921f75f075b?.destination === "iframe";
            for (let λ8c8c31c315d0 of λ708dcb45dab5) {
              let λ708dcb45dab5 = Math.random().toString(36).substring(2, 10);
              λ102a7c328759.push(λ708dcb45dab5), λ8c8c31c315d0.postMessage({
                $controller$setCookie: {
                  cookies: λbd31e9fd0dba,
                  options: λb921f75f075b,
                  id: λ708dcb45dab5,
                  controllerId: this.id
                }
              }), λb11a44b574a1 || λ6493341ad22b.push(new Promise(λbd31e9fd0dba => {
                λed26e94ada3d[λ708dcb45dab5] = () => λbd31e9fd0dba(λ708dcb45dab5);
              }));
            }
            if (λ6493341ad22b.length > 0) {
              let λb921f75f075b, λb11a44b574a1 = !1, λ8c8c31c315d0 = new Promise(λ6493341ad22b => {
                λb921f75f075b = setTimeout(() => {
                  if (!λb11a44b574a1) {
                    let λb921f75f075b = λ102a7c328759.filter(λbd31e9fd0dba => void 0 !== λed26e94ada3d[λbd31e9fd0dba]);
                    console.error(`timed out waiting for set cookie response (deadlock?): cookies=${λbd31e9fd0dba.length} clients=${λ708dcb45dab5.length} pending=${λb921f75f075b.length}/${λ102a7c328759.length} clientUrls=${λ708dcb45dab5.map(λbd31e9fd0dba => λbd31e9fd0dba.url).join(",")}`);
                  }
                  λ6493341ad22b();
                }, 1e3);
              });
              try {
                await Promise.race([ λ8c8c31c315d0, Promise.any(λ6493341ad22b).then(() => {
                  λb11a44b574a1 = !0;
                }).catch(() => {}) ]);
              } finally {
                for (let λbd31e9fd0dba of (void 0 !== λb921f75f075b && clearTimeout(λb921f75f075b), 
                λ102a7c328759)) delete λed26e94ada3d[λbd31e9fd0dba];
              }
            }
          }
        }, "tabchannel-" + λ708dcb45dab5, (λbd31e9fd0dba, λed26e94ada3d) => {
          λ102a7c328759.postMessage(λbd31e9fd0dba, λed26e94ada3d);
        }), λ102a7c328759.onmessage = λbd31e9fd0dba => {
          this.rpc.recieve(λbd31e9fd0dba.data);
        }, λ102a7c328759.onmessageerror = console.error, this.rpc.call("ready", void 0);
      }
    }
    let λ708dcb45dab5 = [];
    function n(λbd31e9fd0dba) {
      let λed26e94ada3d = new URL(λbd31e9fd0dba.request.url);
      return void 0 !== λ708dcb45dab5.find(λbd31e9fd0dba => λed26e94ada3d.pathname.startsWith(λbd31e9fd0dba.prefix));
    }
    async function a(λbd31e9fd0dba) {
      try {
        let λed26e94ada3d = new URL(λbd31e9fd0dba.request.url), λb921f75f075b = λ708dcb45dab5.find(λbd31e9fd0dba => λed26e94ada3d.pathname.startsWith(λbd31e9fd0dba.prefix)), λ102a7c328759 = await clients.get(λbd31e9fd0dba.clientId), λ6493341ad22b = [ ...λbd31e9fd0dba.request.headers ], λb11a44b574a1 = await λb921f75f075b.rpc.call("request", {
          rawUrl: λbd31e9fd0dba.request.url,
          rawReferrer: λbd31e9fd0dba.request.referrer,
          destination: λbd31e9fd0dba.request.destination,
          mode: λbd31e9fd0dba.request.mode,
          referrer: λbd31e9fd0dba.request.referrer,
          method: λbd31e9fd0dba.request.method,
          body: λbd31e9fd0dba.request.body,
          cache: λbd31e9fd0dba.request.cache,
          forceCrossOriginIsolated: !1,
          initialHeaders: λ6493341ad22b,
          rawClientUrl: λ102a7c328759 ? λ102a7c328759.url : void 0,
          clientId: λbd31e9fd0dba.clientId || λbd31e9fd0dba.resultingClientId
        }, λbd31e9fd0dba.request.body instanceof ReadableStream || λbd31e9fd0dba.request.body instanceof ArrayBuffer ? [ λbd31e9fd0dba.request.body ] : void 0);
        return new Response(λb11a44b574a1.body, {
          status: λb11a44b574a1.status,
          statusText: λb11a44b574a1.statusText,
          headers: λb11a44b574a1.headers
        });
      } catch (λbd31e9fd0dba) {
        return console.error("Service Worker error:", λbd31e9fd0dba), new Response("Internal Service Worker Error: " + λbd31e9fd0dba.message, {
          status: 500
        });
      }
    }
    addEventListener("message", λbd31e9fd0dba => {
      if (!λbd31e9fd0dba.data || "object" != typeof λbd31e9fd0dba.data || !λbd31e9fd0dba.data.$controller$init || "object" != typeof λbd31e9fd0dba.data.$controller$init) return;
      let λed26e94ada3d = λbd31e9fd0dba.data.$controller$init, λb921f75f075b = λ708dcb45dab5.findIndex(λbd31e9fd0dba => λbd31e9fd0dba.id === λed26e94ada3d.id);
      -1 !== λb921f75f075b && λ708dcb45dab5.splice(λb921f75f075b, 1), λ708dcb45dab5.push(new s(λed26e94ada3d.prefix, λed26e94ada3d.id, λbd31e9fd0dba.ports[0]));
    }), addEventListener("install", () => {
      self.skipWaiting();
    }), addEventListener("activate", λbd31e9fd0dba => {
      λbd31e9fd0dba.waitUntil(clients.claim());
    }), setTimeout(async () => {
      for (let λbd31e9fd0dba of (console.log("service worker activated, notifying clients to revive"), 
      await clients.matchAll())) λbd31e9fd0dba.postMessage({
        $controller$swrevive: {}
      });
    }, 100);
  })(), $studyjetController = λb921f75f075b;
})();
