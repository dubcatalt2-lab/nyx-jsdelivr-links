var $studyjetController;

(() => {
  var λ2ff7898ce515 = {
    805(λ2ff7898ce515, λ28300f632863, λ35507fc2b2d1) {
      λ35507fc2b2d1.d(λ28300f632863, {
        C: () => o
      });
      class o {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λ2ff7898ce515, λ28300f632863, λ35507fc2b2d1) {
          this.methods = λ2ff7898ce515, this.id = λ28300f632863, this.sendRaw = λ35507fc2b2d1;
        }
        recieve(λ2ff7898ce515) {
          if (null == λ2ff7898ce515 || "object" != typeof λ2ff7898ce515) return;
          let λ28300f632863 = λ2ff7898ce515[this.id];
          if (null == λ28300f632863 || "object" != typeof λ28300f632863) return;
          let λ35507fc2b2d1 = λ28300f632863.$type;
          if ("response" === λ35507fc2b2d1) {
            let λ2ff7898ce515 = λ28300f632863.$token, λ35507fc2b2d1 = λ28300f632863.$data, λe6e8b2833df2 = λ28300f632863.$error, λ4508416e5467 = this.promiseCallbacks.get(λ2ff7898ce515);
            if (!λ4508416e5467) return;
            this.promiseCallbacks.delete(λ2ff7898ce515), void 0 !== λe6e8b2833df2 ? λ4508416e5467.reject(Error(λe6e8b2833df2)) : λ4508416e5467.resolve(λ35507fc2b2d1);
          } else if ("request" === λ35507fc2b2d1) {
            let λ2ff7898ce515 = λ28300f632863.$method, λ35507fc2b2d1 = λ28300f632863.$args;
            this.methods[λ2ff7898ce515](λ35507fc2b2d1).then(λ2ff7898ce515 => {
              this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ28300f632863.$token,
                  $data: λ2ff7898ce515?.[0]
                }
              }, λ2ff7898ce515?.[1]);
            }).catch(λ2ff7898ce515 => {
              console.error(λ2ff7898ce515), this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ28300f632863.$token,
                  $error: λ2ff7898ce515?.toString() || "Unknown error"
                }
              }, []);
            });
          }
        }
        call(λ2ff7898ce515, λ28300f632863, λ35507fc2b2d1 = []) {
          let λe6e8b2833df2 = this.counter++;
          return new Promise((λ4508416e5467, λ9e4c9867d5fb) => {
            this.promiseCallbacks.set(λe6e8b2833df2, {
              resolve: λ4508416e5467,
              reject: λ9e4c9867d5fb
            }), this.sendRaw({
              [this.id]: {
                $type: "request",
                $method: λ2ff7898ce515,
                $args: λ28300f632863,
                $token: λe6e8b2833df2
              }
            }, λ35507fc2b2d1);
          });
        }
      }
    }
  }, λ28300f632863 = {};
  function r(λ35507fc2b2d1) {
    var λe6e8b2833df2 = λ28300f632863[λ35507fc2b2d1];
    if (void 0 !== λe6e8b2833df2) return λe6e8b2833df2.exports;
    var λ4508416e5467 = λ28300f632863[λ35507fc2b2d1] = {
      exports: {}
    };
    return λ2ff7898ce515[λ35507fc2b2d1](λ4508416e5467, λ4508416e5467.exports, r), λ4508416e5467.exports;
  }
  r.d = (λ2ff7898ce515, λ28300f632863) => {
    for (var λ35507fc2b2d1 in λ28300f632863) r.o(λ28300f632863, λ35507fc2b2d1) && !r.o(λ2ff7898ce515, λ35507fc2b2d1) && Object.defineProperty(λ2ff7898ce515, λ35507fc2b2d1, {
      enumerable: !0,
      get: λ28300f632863[λ35507fc2b2d1]
    });
  }, r.o = (λ2ff7898ce515, λ28300f632863) => Object.prototype.hasOwnProperty.call(λ2ff7898ce515, λ28300f632863), 
  r.r = λ2ff7898ce515 => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λ2ff7898ce515, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(λ2ff7898ce515, "__esModule", {
      value: !0
    });
  };
  var λ35507fc2b2d1 = {};
  (() => {
    r.r(λ35507fc2b2d1), r.d(λ35507fc2b2d1, {
      route: () => a,
      shouldRoute: () => n
    });
    var λ2ff7898ce515 = r(805);
    let λ28300f632863 = {};
    addEventListener("message", λ2ff7898ce515 => {
      if (λ2ff7898ce515.data && "object" == typeof λ2ff7898ce515.data) {
        if (λ2ff7898ce515.data.$sw$setCookieDone && "object" == typeof λ2ff7898ce515.data.$sw$setCookieDone) {
          let λ35507fc2b2d1 = λ2ff7898ce515.data.$sw$setCookieDone, λe6e8b2833df2 = λ28300f632863[λ35507fc2b2d1.id];
          λe6e8b2833df2 && (λe6e8b2833df2(), delete λ28300f632863[λ35507fc2b2d1.id]);
        }
        if (λ2ff7898ce515.data.$sw$initRemoteTransport && "object" == typeof λ2ff7898ce515.data.$sw$initRemoteTransport) {
          let {port: λ28300f632863, prefix: λ35507fc2b2d1} = λ2ff7898ce515.data.$sw$initRemoteTransport, λ4508416e5467 = λe6e8b2833df2.find(λ2ff7898ce515 => new URL(λ35507fc2b2d1).pathname.startsWith(λ2ff7898ce515.prefix));
          if (!λ4508416e5467) return void console.error("No relevant controller found for transport init");
          λ4508416e5467.rpc.call("initRemoteTransport", λ28300f632863, [ λ28300f632863 ]);
        }
      }
    });
    class s {
      prefix;
      id;
      rpc;
      constructor(λ35507fc2b2d1, λe6e8b2833df2, λ4508416e5467) {
        this.prefix = λ35507fc2b2d1, this.id = λe6e8b2833df2, this.rpc = new λ2ff7898ce515.C({
          sendSetCookie: async ({cookies: λ2ff7898ce515, options: λ35507fc2b2d1}) => {
            let λe6e8b2833df2 = await self.clients.matchAll({
              type: "window",
              includeUncontrolled: !0
            }), λ4508416e5467 = [], λ9e4c9867d5fb = [], λ69925eb6ef9e = λ35507fc2b2d1?.destination === "document" || λ35507fc2b2d1?.destination === "iframe";
            for (let λba70836a1d33 of λe6e8b2833df2) {
              let λe6e8b2833df2 = Math.random().toString(36).substring(2, 10);
              λ4508416e5467.push(λe6e8b2833df2), λba70836a1d33.postMessage({
                $controller$setCookie: {
                  cookies: λ2ff7898ce515,
                  options: λ35507fc2b2d1,
                  id: λe6e8b2833df2,
                  controllerId: this.id
                }
              }), λ69925eb6ef9e || λ9e4c9867d5fb.push(new Promise(λ2ff7898ce515 => {
                λ28300f632863[λe6e8b2833df2] = () => λ2ff7898ce515(λe6e8b2833df2);
              }));
            }
            if (λ9e4c9867d5fb.length > 0) {
              let λ35507fc2b2d1, λ69925eb6ef9e = !1, λba70836a1d33 = new Promise(λ9e4c9867d5fb => {
                λ35507fc2b2d1 = setTimeout(() => {
                  if (!λ69925eb6ef9e) {
                    let λ35507fc2b2d1 = λ4508416e5467.filter(λ2ff7898ce515 => void 0 !== λ28300f632863[λ2ff7898ce515]);
                    console.error(`timed out waiting for set cookie response (deadlock?): cookies=${λ2ff7898ce515.length} clients=${λe6e8b2833df2.length} pending=${λ35507fc2b2d1.length}/${λ4508416e5467.length} clientUrls=${λe6e8b2833df2.map(λ2ff7898ce515 => λ2ff7898ce515.url).join(",")}`);
                  }
                  λ9e4c9867d5fb();
                }, 1e3);
              });
              try {
                await Promise.race([ λba70836a1d33, Promise.any(λ9e4c9867d5fb).then(() => {
                  λ69925eb6ef9e = !0;
                }).catch(() => {}) ]);
              } finally {
                for (let λ2ff7898ce515 of (void 0 !== λ35507fc2b2d1 && clearTimeout(λ35507fc2b2d1), 
                λ4508416e5467)) delete λ28300f632863[λ2ff7898ce515];
              }
            }
          }
        }, "tabchannel-" + λe6e8b2833df2, (λ2ff7898ce515, λ28300f632863) => {
          λ4508416e5467.postMessage(λ2ff7898ce515, λ28300f632863);
        }), λ4508416e5467.onmessage = λ2ff7898ce515 => {
          this.rpc.recieve(λ2ff7898ce515.data);
        }, λ4508416e5467.onmessageerror = console.error, this.rpc.call("ready", void 0);
      }
    }
    let λe6e8b2833df2 = [];
    function n(λ2ff7898ce515) {
      let λ28300f632863 = new URL(λ2ff7898ce515.request.url);
      return void 0 !== λe6e8b2833df2.find(λ2ff7898ce515 => λ28300f632863.pathname.startsWith(λ2ff7898ce515.prefix));
    }
    async function a(λ2ff7898ce515) {
      try {
        let λ28300f632863 = new URL(λ2ff7898ce515.request.url), λ35507fc2b2d1 = λe6e8b2833df2.find(λ2ff7898ce515 => λ28300f632863.pathname.startsWith(λ2ff7898ce515.prefix)), λ4508416e5467 = await clients.get(λ2ff7898ce515.clientId), λ9e4c9867d5fb = [ ...λ2ff7898ce515.request.headers ], λ69925eb6ef9e = await λ35507fc2b2d1.rpc.call("request", {
          rawUrl: λ2ff7898ce515.request.url,
          rawReferrer: λ2ff7898ce515.request.referrer,
          destination: λ2ff7898ce515.request.destination,
          mode: λ2ff7898ce515.request.mode,
          referrer: λ2ff7898ce515.request.referrer,
          method: λ2ff7898ce515.request.method,
          body: λ2ff7898ce515.request.body,
          cache: λ2ff7898ce515.request.cache,
          forceCrossOriginIsolated: !1,
          initialHeaders: λ9e4c9867d5fb,
          rawClientUrl: λ4508416e5467 ? λ4508416e5467.url : void 0,
          clientId: λ2ff7898ce515.clientId || λ2ff7898ce515.resultingClientId
        }, λ2ff7898ce515.request.body instanceof ReadableStream || λ2ff7898ce515.request.body instanceof ArrayBuffer ? [ λ2ff7898ce515.request.body ] : void 0);
        return new Response(λ69925eb6ef9e.body, {
          status: λ69925eb6ef9e.status,
          statusText: λ69925eb6ef9e.statusText,
          headers: λ69925eb6ef9e.headers
        });
      } catch (λ2ff7898ce515) {
        return console.error("Service Worker error:", λ2ff7898ce515), new Response("Internal Service Worker Error: " + λ2ff7898ce515.message, {
          status: 500
        });
      }
    }
    addEventListener("message", λ2ff7898ce515 => {
      if (!λ2ff7898ce515.data || "object" != typeof λ2ff7898ce515.data || !λ2ff7898ce515.data.$controller$init || "object" != typeof λ2ff7898ce515.data.$controller$init) return;
      let λ28300f632863 = λ2ff7898ce515.data.$controller$init, λ35507fc2b2d1 = λe6e8b2833df2.findIndex(λ2ff7898ce515 => λ2ff7898ce515.id === λ28300f632863.id);
      -1 !== λ35507fc2b2d1 && λe6e8b2833df2.splice(λ35507fc2b2d1, 1), λe6e8b2833df2.push(new s(λ28300f632863.prefix, λ28300f632863.id, λ2ff7898ce515.ports[0]));
    }), addEventListener("install", () => {
      self.skipWaiting();
    }), addEventListener("activate", λ2ff7898ce515 => {
      λ2ff7898ce515.waitUntil(clients.claim());
    }), setTimeout(async () => {
      for (let λ2ff7898ce515 of (console.log("service worker activated, notifying clients to revive"), 
      await clients.matchAll())) λ2ff7898ce515.postMessage({
        $controller$swrevive: {}
      });
    }, 100);
  })(), $studyjetController = λ35507fc2b2d1;
})();
