var $studyjetController;

(() => {
  var λ9e523d88b46c = {
    805(λ9e523d88b46c, λ4af1097e8ee1, λ466da1f3b12d) {
      λ466da1f3b12d.d(λ4af1097e8ee1, {
        C: () => o
      });
      class o {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λ9e523d88b46c, λ4af1097e8ee1, λ466da1f3b12d) {
          this.methods = λ9e523d88b46c, this.id = λ4af1097e8ee1, this.sendRaw = λ466da1f3b12d;
        }
        recieve(λ9e523d88b46c) {
          if (null == λ9e523d88b46c || "object" != typeof λ9e523d88b46c) return;
          let λ4af1097e8ee1 = λ9e523d88b46c[this.id];
          if (null == λ4af1097e8ee1 || "object" != typeof λ4af1097e8ee1) return;
          let λ466da1f3b12d = λ4af1097e8ee1.$type;
          if ("response" === λ466da1f3b12d) {
            let λ9e523d88b46c = λ4af1097e8ee1.$token, λ466da1f3b12d = λ4af1097e8ee1.$data, λf86fbe5dff25 = λ4af1097e8ee1.$error, λ4ac4a1353204 = this.promiseCallbacks.get(λ9e523d88b46c);
            if (!λ4ac4a1353204) return;
            this.promiseCallbacks.delete(λ9e523d88b46c), void 0 !== λf86fbe5dff25 ? λ4ac4a1353204.reject(Error(λf86fbe5dff25)) : λ4ac4a1353204.resolve(λ466da1f3b12d);
          } else if ("request" === λ466da1f3b12d) {
            let λ9e523d88b46c = λ4af1097e8ee1.$method, λ466da1f3b12d = λ4af1097e8ee1.$args;
            this.methods[λ9e523d88b46c](λ466da1f3b12d).then(λ9e523d88b46c => {
              this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ4af1097e8ee1.$token,
                  $data: λ9e523d88b46c?.[0]
                }
              }, λ9e523d88b46c?.[1]);
            }).catch(λ9e523d88b46c => {
              console.error(λ9e523d88b46c), this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ4af1097e8ee1.$token,
                  $error: λ9e523d88b46c?.toString() || "Unknown error"
                }
              }, []);
            });
          }
        }
        call(λ9e523d88b46c, λ4af1097e8ee1, λ466da1f3b12d = []) {
          let λf86fbe5dff25 = this.counter++;
          return new Promise((λ4ac4a1353204, λ6ca0c5593af9) => {
            this.promiseCallbacks.set(λf86fbe5dff25, {
              resolve: λ4ac4a1353204,
              reject: λ6ca0c5593af9
            }), this.sendRaw({
              [this.id]: {
                $type: "request",
                $method: λ9e523d88b46c,
                $args: λ4af1097e8ee1,
                $token: λf86fbe5dff25
              }
            }, λ466da1f3b12d);
          });
        }
      }
    }
  }, λ4af1097e8ee1 = {};
  function r(λ466da1f3b12d) {
    var λf86fbe5dff25 = λ4af1097e8ee1[λ466da1f3b12d];
    if (void 0 !== λf86fbe5dff25) return λf86fbe5dff25.exports;
    var λ4ac4a1353204 = λ4af1097e8ee1[λ466da1f3b12d] = {
      exports: {}
    };
    return λ9e523d88b46c[λ466da1f3b12d](λ4ac4a1353204, λ4ac4a1353204.exports, r), λ4ac4a1353204.exports;
  }
  r.d = (λ9e523d88b46c, λ4af1097e8ee1) => {
    for (var λ466da1f3b12d in λ4af1097e8ee1) r.o(λ4af1097e8ee1, λ466da1f3b12d) && !r.o(λ9e523d88b46c, λ466da1f3b12d) && Object.defineProperty(λ9e523d88b46c, λ466da1f3b12d, {
      enumerable: !0,
      get: λ4af1097e8ee1[λ466da1f3b12d]
    });
  }, r.o = (λ9e523d88b46c, λ4af1097e8ee1) => Object.prototype.hasOwnProperty.call(λ9e523d88b46c, λ4af1097e8ee1), 
  r.r = λ9e523d88b46c => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λ9e523d88b46c, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(λ9e523d88b46c, "__esModule", {
      value: !0
    });
  };
  var λ466da1f3b12d = {};
  (() => {
    r.r(λ466da1f3b12d), r.d(λ466da1f3b12d, {
      route: () => a,
      shouldRoute: () => n
    });
    var λ9e523d88b46c = r(805);
    let λ4af1097e8ee1 = {};
    addEventListener("message", λ9e523d88b46c => {
      if (λ9e523d88b46c.data && "object" == typeof λ9e523d88b46c.data) {
        if (λ9e523d88b46c.data.$sw$setCookieDone && "object" == typeof λ9e523d88b46c.data.$sw$setCookieDone) {
          let λ466da1f3b12d = λ9e523d88b46c.data.$sw$setCookieDone, λf86fbe5dff25 = λ4af1097e8ee1[λ466da1f3b12d.id];
          λf86fbe5dff25 && (λf86fbe5dff25(), delete λ4af1097e8ee1[λ466da1f3b12d.id]);
        }
        if (λ9e523d88b46c.data.$sw$initRemoteTransport && "object" == typeof λ9e523d88b46c.data.$sw$initRemoteTransport) {
          let {port: λ4af1097e8ee1, prefix: λ466da1f3b12d} = λ9e523d88b46c.data.$sw$initRemoteTransport, λ4ac4a1353204 = λf86fbe5dff25.find(λ9e523d88b46c => new URL(λ466da1f3b12d).pathname.startsWith(λ9e523d88b46c.prefix));
          if (!λ4ac4a1353204) return void console.error("No relevant controller found for transport init");
          λ4ac4a1353204.rpc.call("initRemoteTransport", λ4af1097e8ee1, [ λ4af1097e8ee1 ]);
        }
      }
    });
    class s {
      prefix;
      id;
      rpc;
      constructor(λ466da1f3b12d, λf86fbe5dff25, λ4ac4a1353204) {
        this.prefix = λ466da1f3b12d, this.id = λf86fbe5dff25, this.rpc = new λ9e523d88b46c.C({
          sendSetCookie: async ({cookies: λ9e523d88b46c, options: λ466da1f3b12d}) => {
            let λf86fbe5dff25 = await self.clients.matchAll({
              type: "window",
              includeUncontrolled: !0
            }), λ4ac4a1353204 = [], λ6ca0c5593af9 = [], λ220bf448cce4 = λ466da1f3b12d?.destination === "document" || λ466da1f3b12d?.destination === "iframe";
            for (let λ4dee2f34a315 of λf86fbe5dff25) {
              let λf86fbe5dff25 = Math.random().toString(36).substring(2, 10);
              λ4ac4a1353204.push(λf86fbe5dff25), λ4dee2f34a315.postMessage({
                $controller$setCookie: {
                  cookies: λ9e523d88b46c,
                  options: λ466da1f3b12d,
                  id: λf86fbe5dff25,
                  controllerId: this.id
                }
              }), λ220bf448cce4 || λ6ca0c5593af9.push(new Promise(λ9e523d88b46c => {
                λ4af1097e8ee1[λf86fbe5dff25] = () => λ9e523d88b46c(λf86fbe5dff25);
              }));
            }
            if (λ6ca0c5593af9.length > 0) {
              let λ466da1f3b12d, λ220bf448cce4 = !1, λ4dee2f34a315 = new Promise(λ6ca0c5593af9 => {
                λ466da1f3b12d = setTimeout(() => {
                  if (!λ220bf448cce4) {
                    let λ466da1f3b12d = λ4ac4a1353204.filter(λ9e523d88b46c => void 0 !== λ4af1097e8ee1[λ9e523d88b46c]);
                    console.error(`timed out waiting for set cookie response (deadlock?): cookies=${λ9e523d88b46c.length} clients=${λf86fbe5dff25.length} pending=${λ466da1f3b12d.length}/${λ4ac4a1353204.length} clientUrls=${λf86fbe5dff25.map(λ9e523d88b46c => λ9e523d88b46c.url).join(",")}`);
                  }
                  λ6ca0c5593af9();
                }, 1e3);
              });
              try {
                await Promise.race([ λ4dee2f34a315, Promise.any(λ6ca0c5593af9).then(() => {
                  λ220bf448cce4 = !0;
                }).catch(() => {}) ]);
              } finally {
                for (let λ9e523d88b46c of (void 0 !== λ466da1f3b12d && clearTimeout(λ466da1f3b12d), 
                λ4ac4a1353204)) delete λ4af1097e8ee1[λ9e523d88b46c];
              }
            }
          }
        }, "tabchannel-" + λf86fbe5dff25, (λ9e523d88b46c, λ4af1097e8ee1) => {
          λ4ac4a1353204.postMessage(λ9e523d88b46c, λ4af1097e8ee1);
        }), λ4ac4a1353204.onmessage = λ9e523d88b46c => {
          this.rpc.recieve(λ9e523d88b46c.data);
        }, λ4ac4a1353204.onmessageerror = console.error, this.rpc.call("ready", void 0);
      }
    }
    let λf86fbe5dff25 = [];
    function n(λ9e523d88b46c) {
      let λ4af1097e8ee1 = new URL(λ9e523d88b46c.request.url);
      return void 0 !== λf86fbe5dff25.find(λ9e523d88b46c => λ4af1097e8ee1.pathname.startsWith(λ9e523d88b46c.prefix));
    }
    async function a(λ9e523d88b46c) {
      try {
        let λ4af1097e8ee1 = new URL(λ9e523d88b46c.request.url), λ466da1f3b12d = λf86fbe5dff25.find(λ9e523d88b46c => λ4af1097e8ee1.pathname.startsWith(λ9e523d88b46c.prefix)), λ4ac4a1353204 = await clients.get(λ9e523d88b46c.clientId), λ6ca0c5593af9 = [ ...λ9e523d88b46c.request.headers ], λ220bf448cce4 = await λ466da1f3b12d.rpc.call("request", {
          rawUrl: λ9e523d88b46c.request.url,
          rawReferrer: λ9e523d88b46c.request.referrer,
          destination: λ9e523d88b46c.request.destination,
          mode: λ9e523d88b46c.request.mode,
          referrer: λ9e523d88b46c.request.referrer,
          method: λ9e523d88b46c.request.method,
          body: λ9e523d88b46c.request.body,
          cache: λ9e523d88b46c.request.cache,
          forceCrossOriginIsolated: !1,
          initialHeaders: λ6ca0c5593af9,
          rawClientUrl: λ4ac4a1353204 ? λ4ac4a1353204.url : void 0,
          clientId: λ9e523d88b46c.clientId || λ9e523d88b46c.resultingClientId
        }, λ9e523d88b46c.request.body instanceof ReadableStream || λ9e523d88b46c.request.body instanceof ArrayBuffer ? [ λ9e523d88b46c.request.body ] : void 0);
        return new Response(λ220bf448cce4.body, {
          status: λ220bf448cce4.status,
          statusText: λ220bf448cce4.statusText,
          headers: λ220bf448cce4.headers
        });
      } catch (λ9e523d88b46c) {
        return console.error("Service Worker error:", λ9e523d88b46c), new Response("Internal Service Worker Error: " + λ9e523d88b46c.message, {
          status: 500
        });
      }
    }
    addEventListener("message", λ9e523d88b46c => {
      if (!λ9e523d88b46c.data || "object" != typeof λ9e523d88b46c.data || !λ9e523d88b46c.data.$controller$init || "object" != typeof λ9e523d88b46c.data.$controller$init) return;
      let λ4af1097e8ee1 = λ9e523d88b46c.data.$controller$init, λ466da1f3b12d = λf86fbe5dff25.findIndex(λ9e523d88b46c => λ9e523d88b46c.id === λ4af1097e8ee1.id);
      -1 !== λ466da1f3b12d && λf86fbe5dff25.splice(λ466da1f3b12d, 1), λf86fbe5dff25.push(new s(λ4af1097e8ee1.prefix, λ4af1097e8ee1.id, λ9e523d88b46c.ports[0]));
    }), addEventListener("install", () => {
      self.skipWaiting();
    }), addEventListener("activate", λ9e523d88b46c => {
      λ9e523d88b46c.waitUntil(clients.claim());
    }), setTimeout(async () => {
      for (let λ9e523d88b46c of (console.log("service worker activated, notifying clients to revive"), 
      await clients.matchAll())) λ9e523d88b46c.postMessage({
        $controller$swrevive: {}
      });
    }, 100);
  })(), $studyjetController = λ466da1f3b12d;
})();
