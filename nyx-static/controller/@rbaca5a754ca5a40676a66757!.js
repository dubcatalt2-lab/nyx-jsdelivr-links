var $studyjetController;

(() => {
  var λ9eaea8e51609 = {
    805(λ9eaea8e51609, λ41b26a502e84, λb516f6883dba) {
      λb516f6883dba.d(λ41b26a502e84, {
        C: () => o
      });
      class o {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λ9eaea8e51609, λ41b26a502e84, λb516f6883dba) {
          this.methods = λ9eaea8e51609, this.id = λ41b26a502e84, this.sendRaw = λb516f6883dba;
        }
        recieve(λ9eaea8e51609) {
          if (null == λ9eaea8e51609 || "object" != typeof λ9eaea8e51609) return;
          let λ41b26a502e84 = λ9eaea8e51609[this.id];
          if (null == λ41b26a502e84 || "object" != typeof λ41b26a502e84) return;
          let λb516f6883dba = λ41b26a502e84.$type;
          if ("response" === λb516f6883dba) {
            let λ9eaea8e51609 = λ41b26a502e84.$token, λb516f6883dba = λ41b26a502e84.$data, λac78583b56eb = λ41b26a502e84.$error, λ3224086200a7 = this.promiseCallbacks.get(λ9eaea8e51609);
            if (!λ3224086200a7) return;
            this.promiseCallbacks.delete(λ9eaea8e51609), void 0 !== λac78583b56eb ? λ3224086200a7.reject(Error(λac78583b56eb)) : λ3224086200a7.resolve(λb516f6883dba);
          } else if ("request" === λb516f6883dba) {
            let λ9eaea8e51609 = λ41b26a502e84.$method, λb516f6883dba = λ41b26a502e84.$args;
            this.methods[λ9eaea8e51609](λb516f6883dba).then(λ9eaea8e51609 => {
              this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ41b26a502e84.$token,
                  $data: λ9eaea8e51609?.[0]
                }
              }, λ9eaea8e51609?.[1]);
            }).catch(λ9eaea8e51609 => {
              console.error(λ9eaea8e51609), this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ41b26a502e84.$token,
                  $error: λ9eaea8e51609?.toString() || "Unknown error"
                }
              }, []);
            });
          }
        }
        call(λ9eaea8e51609, λ41b26a502e84, λb516f6883dba = []) {
          let λac78583b56eb = this.counter++;
          return new Promise((λ3224086200a7, λ79eb5e5e520a) => {
            this.promiseCallbacks.set(λac78583b56eb, {
              resolve: λ3224086200a7,
              reject: λ79eb5e5e520a
            }), this.sendRaw({
              [this.id]: {
                $type: "request",
                $method: λ9eaea8e51609,
                $args: λ41b26a502e84,
                $token: λac78583b56eb
              }
            }, λb516f6883dba);
          });
        }
      }
    }
  }, λ41b26a502e84 = {};
  function r(λb516f6883dba) {
    var λac78583b56eb = λ41b26a502e84[λb516f6883dba];
    if (void 0 !== λac78583b56eb) return λac78583b56eb.exports;
    var λ3224086200a7 = λ41b26a502e84[λb516f6883dba] = {
      exports: {}
    };
    return λ9eaea8e51609[λb516f6883dba](λ3224086200a7, λ3224086200a7.exports, r), λ3224086200a7.exports;
  }
  r.d = (λ9eaea8e51609, λ41b26a502e84) => {
    for (var λb516f6883dba in λ41b26a502e84) r.o(λ41b26a502e84, λb516f6883dba) && !r.o(λ9eaea8e51609, λb516f6883dba) && Object.defineProperty(λ9eaea8e51609, λb516f6883dba, {
      enumerable: !0,
      get: λ41b26a502e84[λb516f6883dba]
    });
  }, r.o = (λ9eaea8e51609, λ41b26a502e84) => Object.prototype.hasOwnProperty.call(λ9eaea8e51609, λ41b26a502e84), 
  r.r = λ9eaea8e51609 => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λ9eaea8e51609, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(λ9eaea8e51609, "__esModule", {
      value: !0
    });
  };
  var λb516f6883dba = {};
  (() => {
    r.r(λb516f6883dba), r.d(λb516f6883dba, {
      route: () => a,
      shouldRoute: () => n
    });
    var λ9eaea8e51609 = r(805);
    let λ41b26a502e84 = {};
    addEventListener("message", λ9eaea8e51609 => {
      if (λ9eaea8e51609.data && "object" == typeof λ9eaea8e51609.data) {
        if (λ9eaea8e51609.data.$sw$setCookieDone && "object" == typeof λ9eaea8e51609.data.$sw$setCookieDone) {
          let λb516f6883dba = λ9eaea8e51609.data.$sw$setCookieDone, λac78583b56eb = λ41b26a502e84[λb516f6883dba.id];
          λac78583b56eb && (λac78583b56eb(), delete λ41b26a502e84[λb516f6883dba.id]);
        }
        if (λ9eaea8e51609.data.$sw$initRemoteTransport && "object" == typeof λ9eaea8e51609.data.$sw$initRemoteTransport) {
          let {port: λ41b26a502e84, prefix: λb516f6883dba} = λ9eaea8e51609.data.$sw$initRemoteTransport, λ3224086200a7 = λac78583b56eb.find(λ9eaea8e51609 => new URL(λb516f6883dba).pathname.startsWith(λ9eaea8e51609.prefix));
          if (!λ3224086200a7) return void console.error("No relevant controller found for transport init");
          λ3224086200a7.rpc.call("initRemoteTransport", λ41b26a502e84, [ λ41b26a502e84 ]);
        }
      }
    });
    class s {
      prefix;
      id;
      rpc;
      constructor(λb516f6883dba, λac78583b56eb, λ3224086200a7) {
        this.prefix = λb516f6883dba, this.id = λac78583b56eb, this.rpc = new λ9eaea8e51609.C({
          sendSetCookie: async ({cookies: λ9eaea8e51609, options: λb516f6883dba}) => {
            let λac78583b56eb = await self.clients.matchAll({
              type: "window",
              includeUncontrolled: !0
            }), λ3224086200a7 = [], λ79eb5e5e520a = [], λ6f6600352984 = λb516f6883dba?.destination === "document" || λb516f6883dba?.destination === "iframe";
            for (let λdaf9049021e9 of λac78583b56eb) {
              let λac78583b56eb = Math.random().toString(36).substring(2, 10);
              λ3224086200a7.push(λac78583b56eb), λdaf9049021e9.postMessage({
                $controller$setCookie: {
                  cookies: λ9eaea8e51609,
                  options: λb516f6883dba,
                  id: λac78583b56eb,
                  controllerId: this.id
                }
              }), λ6f6600352984 || λ79eb5e5e520a.push(new Promise(λ9eaea8e51609 => {
                λ41b26a502e84[λac78583b56eb] = () => λ9eaea8e51609(λac78583b56eb);
              }));
            }
            if (λ79eb5e5e520a.length > 0) {
              let λb516f6883dba, λ6f6600352984 = !1, λdaf9049021e9 = new Promise(λ79eb5e5e520a => {
                λb516f6883dba = setTimeout(() => {
                  if (!λ6f6600352984) {
                    let λb516f6883dba = λ3224086200a7.filter(λ9eaea8e51609 => void 0 !== λ41b26a502e84[λ9eaea8e51609]);
                    console.error(`timed out waiting for set cookie response (deadlock?): cookies=${λ9eaea8e51609.length} clients=${λac78583b56eb.length} pending=${λb516f6883dba.length}/${λ3224086200a7.length} clientUrls=${λac78583b56eb.map(λ9eaea8e51609 => λ9eaea8e51609.url).join(",")}`);
                  }
                  λ79eb5e5e520a();
                }, 1e3);
              });
              try {
                await Promise.race([ λdaf9049021e9, Promise.any(λ79eb5e5e520a).then(() => {
                  λ6f6600352984 = !0;
                }).catch(() => {}) ]);
              } finally {
                for (let λ9eaea8e51609 of (void 0 !== λb516f6883dba && clearTimeout(λb516f6883dba), 
                λ3224086200a7)) delete λ41b26a502e84[λ9eaea8e51609];
              }
            }
          }
        }, "tabchannel-" + λac78583b56eb, (λ9eaea8e51609, λ41b26a502e84) => {
          λ3224086200a7.postMessage(λ9eaea8e51609, λ41b26a502e84);
        }), λ3224086200a7.onmessage = λ9eaea8e51609 => {
          this.rpc.recieve(λ9eaea8e51609.data);
        }, λ3224086200a7.onmessageerror = console.error, this.rpc.call("ready", void 0);
      }
    }
    let λac78583b56eb = [];
    function n(λ9eaea8e51609) {
      let λ41b26a502e84 = new URL(λ9eaea8e51609.request.url);
      return void 0 !== λac78583b56eb.find(λ9eaea8e51609 => λ41b26a502e84.pathname.startsWith(λ9eaea8e51609.prefix));
    }
    async function a(λ9eaea8e51609) {
      try {
        let λ41b26a502e84 = new URL(λ9eaea8e51609.request.url), λb516f6883dba = λac78583b56eb.find(λ9eaea8e51609 => λ41b26a502e84.pathname.startsWith(λ9eaea8e51609.prefix)), λ3224086200a7 = await clients.get(λ9eaea8e51609.clientId), λ79eb5e5e520a = [ ...λ9eaea8e51609.request.headers ], λ6f6600352984 = await λb516f6883dba.rpc.call("request", {
          rawUrl: λ9eaea8e51609.request.url,
          rawReferrer: λ9eaea8e51609.request.referrer,
          destination: λ9eaea8e51609.request.destination,
          mode: λ9eaea8e51609.request.mode,
          referrer: λ9eaea8e51609.request.referrer,
          method: λ9eaea8e51609.request.method,
          body: λ9eaea8e51609.request.body,
          cache: λ9eaea8e51609.request.cache,
          forceCrossOriginIsolated: !1,
          initialHeaders: λ79eb5e5e520a,
          rawClientUrl: λ3224086200a7 ? λ3224086200a7.url : void 0,
          clientId: λ9eaea8e51609.clientId || λ9eaea8e51609.resultingClientId
        }, λ9eaea8e51609.request.body instanceof ReadableStream || λ9eaea8e51609.request.body instanceof ArrayBuffer ? [ λ9eaea8e51609.request.body ] : void 0);
        return new Response(λ6f6600352984.body, {
          status: λ6f6600352984.status,
          statusText: λ6f6600352984.statusText,
          headers: λ6f6600352984.headers
        });
      } catch (λ9eaea8e51609) {
        return console.error("Service Worker error:", λ9eaea8e51609), new Response("Internal Service Worker Error: " + λ9eaea8e51609.message, {
          status: 500
        });
      }
    }
    addEventListener("message", λ9eaea8e51609 => {
      if (!λ9eaea8e51609.data || "object" != typeof λ9eaea8e51609.data || !λ9eaea8e51609.data.$controller$init || "object" != typeof λ9eaea8e51609.data.$controller$init) return;
      let λ41b26a502e84 = λ9eaea8e51609.data.$controller$init, λb516f6883dba = λac78583b56eb.findIndex(λ9eaea8e51609 => λ9eaea8e51609.id === λ41b26a502e84.id);
      -1 !== λb516f6883dba && λac78583b56eb.splice(λb516f6883dba, 1), λac78583b56eb.push(new s(λ41b26a502e84.prefix, λ41b26a502e84.id, λ9eaea8e51609.ports[0]));
    }), addEventListener("install", () => {
      self.skipWaiting();
    }), addEventListener("activate", λ9eaea8e51609 => {
      λ9eaea8e51609.waitUntil(clients.claim());
    }), setTimeout(async () => {
      for (let λ9eaea8e51609 of (console.log("service worker activated, notifying clients to revive"), 
      await clients.matchAll())) λ9eaea8e51609.postMessage({
        $controller$swrevive: {}
      });
    }, 100);
  })(), $studyjetController = λb516f6883dba;
})();
