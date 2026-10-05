var $studyjetController;

(() => {
  var λ8e28573b5a3e = {
    805(λ8e28573b5a3e, λ876f77a9b8fd, λ1d9aef186eca) {
      λ1d9aef186eca.d(λ876f77a9b8fd, {
        C: () => o
      });
      class o {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λ8e28573b5a3e, λ876f77a9b8fd, λ1d9aef186eca) {
          this.methods = λ8e28573b5a3e, this.id = λ876f77a9b8fd, this.sendRaw = λ1d9aef186eca;
        }
        recieve(λ8e28573b5a3e) {
          if (null == λ8e28573b5a3e || "object" != typeof λ8e28573b5a3e) return;
          let λ876f77a9b8fd = λ8e28573b5a3e[this.id];
          if (null == λ876f77a9b8fd || "object" != typeof λ876f77a9b8fd) return;
          let λ1d9aef186eca = λ876f77a9b8fd.$type;
          if ("response" === λ1d9aef186eca) {
            let λ8e28573b5a3e = λ876f77a9b8fd.$token, λ1d9aef186eca = λ876f77a9b8fd.$data, λ951f90469bc6 = λ876f77a9b8fd.$error, λ51d3d4a27e3e = this.promiseCallbacks.get(λ8e28573b5a3e);
            if (!λ51d3d4a27e3e) return;
            this.promiseCallbacks.delete(λ8e28573b5a3e), void 0 !== λ951f90469bc6 ? λ51d3d4a27e3e.reject(Error(λ951f90469bc6)) : λ51d3d4a27e3e.resolve(λ1d9aef186eca);
          } else if ("request" === λ1d9aef186eca) {
            let λ8e28573b5a3e = λ876f77a9b8fd.$method, λ1d9aef186eca = λ876f77a9b8fd.$args;
            this.methods[λ8e28573b5a3e](λ1d9aef186eca).then(λ8e28573b5a3e => {
              this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ876f77a9b8fd.$token,
                  $data: λ8e28573b5a3e?.[0]
                }
              }, λ8e28573b5a3e?.[1]);
            }).catch(λ8e28573b5a3e => {
              console.error(λ8e28573b5a3e), this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ876f77a9b8fd.$token,
                  $error: λ8e28573b5a3e?.toString() || "Unknown error"
                }
              }, []);
            });
          }
        }
        call(λ8e28573b5a3e, λ876f77a9b8fd, λ1d9aef186eca = []) {
          let λ951f90469bc6 = this.counter++;
          return new Promise((λ51d3d4a27e3e, λ4ce1742d9df2) => {
            this.promiseCallbacks.set(λ951f90469bc6, {
              resolve: λ51d3d4a27e3e,
              reject: λ4ce1742d9df2
            }), this.sendRaw({
              [this.id]: {
                $type: "request",
                $method: λ8e28573b5a3e,
                $args: λ876f77a9b8fd,
                $token: λ951f90469bc6
              }
            }, λ1d9aef186eca);
          });
        }
      }
    }
  }, λ876f77a9b8fd = {};
  function r(λ1d9aef186eca) {
    var λ951f90469bc6 = λ876f77a9b8fd[λ1d9aef186eca];
    if (void 0 !== λ951f90469bc6) return λ951f90469bc6.exports;
    var λ51d3d4a27e3e = λ876f77a9b8fd[λ1d9aef186eca] = {
      exports: {}
    };
    return λ8e28573b5a3e[λ1d9aef186eca](λ51d3d4a27e3e, λ51d3d4a27e3e.exports, r), λ51d3d4a27e3e.exports;
  }
  r.d = (λ8e28573b5a3e, λ876f77a9b8fd) => {
    for (var λ1d9aef186eca in λ876f77a9b8fd) r.o(λ876f77a9b8fd, λ1d9aef186eca) && !r.o(λ8e28573b5a3e, λ1d9aef186eca) && Object.defineProperty(λ8e28573b5a3e, λ1d9aef186eca, {
      enumerable: !0,
      get: λ876f77a9b8fd[λ1d9aef186eca]
    });
  }, r.o = (λ8e28573b5a3e, λ876f77a9b8fd) => Object.prototype.hasOwnProperty.call(λ8e28573b5a3e, λ876f77a9b8fd), 
  r.r = λ8e28573b5a3e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λ8e28573b5a3e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(λ8e28573b5a3e, "__esModule", {
      value: !0
    });
  };
  var λ1d9aef186eca = {};
  (() => {
    r.r(λ1d9aef186eca), r.d(λ1d9aef186eca, {
      route: () => a,
      shouldRoute: () => n
    });
    var λ8e28573b5a3e = r(805);
    let λ876f77a9b8fd = {};
    addEventListener("message", λ8e28573b5a3e => {
      if (λ8e28573b5a3e.data && "object" == typeof λ8e28573b5a3e.data) {
        if (λ8e28573b5a3e.data.$sw$setCookieDone && "object" == typeof λ8e28573b5a3e.data.$sw$setCookieDone) {
          let λ1d9aef186eca = λ8e28573b5a3e.data.$sw$setCookieDone, λ951f90469bc6 = λ876f77a9b8fd[λ1d9aef186eca.id];
          λ951f90469bc6 && (λ951f90469bc6(), delete λ876f77a9b8fd[λ1d9aef186eca.id]);
        }
        if (λ8e28573b5a3e.data.$sw$initRemoteTransport && "object" == typeof λ8e28573b5a3e.data.$sw$initRemoteTransport) {
          let {port: λ876f77a9b8fd, prefix: λ1d9aef186eca} = λ8e28573b5a3e.data.$sw$initRemoteTransport, λ51d3d4a27e3e = λ951f90469bc6.find(λ8e28573b5a3e => new URL(λ1d9aef186eca).pathname.startsWith(λ8e28573b5a3e.prefix));
          if (!λ51d3d4a27e3e) return void console.error("No relevant controller found for transport init");
          λ51d3d4a27e3e.rpc.call("initRemoteTransport", λ876f77a9b8fd, [ λ876f77a9b8fd ]);
        }
      }
    });
    class s {
      prefix;
      id;
      rpc;
      constructor(λ1d9aef186eca, λ951f90469bc6, λ51d3d4a27e3e) {
        this.prefix = λ1d9aef186eca, this.id = λ951f90469bc6, this.rpc = new λ8e28573b5a3e.C({
          sendSetCookie: async ({cookies: λ8e28573b5a3e, options: λ1d9aef186eca}) => {
            let λ951f90469bc6 = await self.clients.matchAll({
              type: "window",
              includeUncontrolled: !0
            }), λ51d3d4a27e3e = [], λ4ce1742d9df2 = [], λ505eff46db62 = λ1d9aef186eca?.destination === "document" || λ1d9aef186eca?.destination === "iframe";
            for (let λb1968f7ba4e2 of λ951f90469bc6) {
              let λ951f90469bc6 = Math.random().toString(36).substring(2, 10);
              λ51d3d4a27e3e.push(λ951f90469bc6), λb1968f7ba4e2.postMessage({
                $controller$setCookie: {
                  cookies: λ8e28573b5a3e,
                  options: λ1d9aef186eca,
                  id: λ951f90469bc6,
                  controllerId: this.id
                }
              }), λ505eff46db62 || λ4ce1742d9df2.push(new Promise(λ8e28573b5a3e => {
                λ876f77a9b8fd[λ951f90469bc6] = () => λ8e28573b5a3e(λ951f90469bc6);
              }));
            }
            if (λ4ce1742d9df2.length > 0) {
              let λ1d9aef186eca, λ505eff46db62 = !1, λb1968f7ba4e2 = new Promise(λ4ce1742d9df2 => {
                λ1d9aef186eca = setTimeout(() => {
                  if (!λ505eff46db62) {
                    let λ1d9aef186eca = λ51d3d4a27e3e.filter(λ8e28573b5a3e => void 0 !== λ876f77a9b8fd[λ8e28573b5a3e]);
                    console.error(`timed out waiting for set cookie response (deadlock?): cookies=${λ8e28573b5a3e.length} clients=${λ951f90469bc6.length} pending=${λ1d9aef186eca.length}/${λ51d3d4a27e3e.length} clientUrls=${λ951f90469bc6.map(λ8e28573b5a3e => λ8e28573b5a3e.url).join(",")}`);
                  }
                  λ4ce1742d9df2();
                }, 1e3);
              });
              try {
                await Promise.race([ λb1968f7ba4e2, Promise.any(λ4ce1742d9df2).then(() => {
                  λ505eff46db62 = !0;
                }).catch(() => {}) ]);
              } finally {
                for (let λ8e28573b5a3e of (void 0 !== λ1d9aef186eca && clearTimeout(λ1d9aef186eca), 
                λ51d3d4a27e3e)) delete λ876f77a9b8fd[λ8e28573b5a3e];
              }
            }
          }
        }, "tabchannel-" + λ951f90469bc6, (λ8e28573b5a3e, λ876f77a9b8fd) => {
          λ51d3d4a27e3e.postMessage(λ8e28573b5a3e, λ876f77a9b8fd);
        }), λ51d3d4a27e3e.onmessage = λ8e28573b5a3e => {
          this.rpc.recieve(λ8e28573b5a3e.data);
        }, λ51d3d4a27e3e.onmessageerror = console.error, this.rpc.call("ready", void 0);
      }
    }
    let λ951f90469bc6 = [];
    function n(λ8e28573b5a3e) {
      let λ876f77a9b8fd = new URL(λ8e28573b5a3e.request.url);
      return void 0 !== λ951f90469bc6.find(λ8e28573b5a3e => λ876f77a9b8fd.pathname.startsWith(λ8e28573b5a3e.prefix));
    }
    async function a(λ8e28573b5a3e) {
      try {
        let λ876f77a9b8fd = new URL(λ8e28573b5a3e.request.url), λ1d9aef186eca = λ951f90469bc6.find(λ8e28573b5a3e => λ876f77a9b8fd.pathname.startsWith(λ8e28573b5a3e.prefix)), λ51d3d4a27e3e = await clients.get(λ8e28573b5a3e.clientId), λ4ce1742d9df2 = [ ...λ8e28573b5a3e.request.headers ], λ505eff46db62 = await λ1d9aef186eca.rpc.call("request", {
          rawUrl: λ8e28573b5a3e.request.url,
          rawReferrer: λ8e28573b5a3e.request.referrer,
          destination: λ8e28573b5a3e.request.destination,
          mode: λ8e28573b5a3e.request.mode,
          referrer: λ8e28573b5a3e.request.referrer,
          method: λ8e28573b5a3e.request.method,
          body: λ8e28573b5a3e.request.body,
          cache: λ8e28573b5a3e.request.cache,
          forceCrossOriginIsolated: !1,
          initialHeaders: λ4ce1742d9df2,
          rawClientUrl: λ51d3d4a27e3e ? λ51d3d4a27e3e.url : void 0,
          clientId: λ8e28573b5a3e.clientId || λ8e28573b5a3e.resultingClientId
        }, λ8e28573b5a3e.request.body instanceof ReadableStream || λ8e28573b5a3e.request.body instanceof ArrayBuffer ? [ λ8e28573b5a3e.request.body ] : void 0);
        return new Response(λ505eff46db62.body, {
          status: λ505eff46db62.status,
          statusText: λ505eff46db62.statusText,
          headers: λ505eff46db62.headers
        });
      } catch (λ8e28573b5a3e) {
        return console.error("Service Worker error:", λ8e28573b5a3e), new Response("Internal Service Worker Error: " + λ8e28573b5a3e.message, {
          status: 500
        });
      }
    }
    addEventListener("message", λ8e28573b5a3e => {
      if (!λ8e28573b5a3e.data || "object" != typeof λ8e28573b5a3e.data || !λ8e28573b5a3e.data.$controller$init || "object" != typeof λ8e28573b5a3e.data.$controller$init) return;
      let λ876f77a9b8fd = λ8e28573b5a3e.data.$controller$init, λ1d9aef186eca = λ951f90469bc6.findIndex(λ8e28573b5a3e => λ8e28573b5a3e.id === λ876f77a9b8fd.id);
      -1 !== λ1d9aef186eca && λ951f90469bc6.splice(λ1d9aef186eca, 1), λ951f90469bc6.push(new s(λ876f77a9b8fd.prefix, λ876f77a9b8fd.id, λ8e28573b5a3e.ports[0]));
    }), addEventListener("install", () => {
      self.skipWaiting();
    }), addEventListener("activate", λ8e28573b5a3e => {
      λ8e28573b5a3e.waitUntil(clients.claim());
    }), setTimeout(async () => {
      for (let λ8e28573b5a3e of (console.log("service worker activated, notifying clients to revive"), 
      await clients.matchAll())) λ8e28573b5a3e.postMessage({
        $controller$swrevive: {}
      });
    }, 100);
  })(), $studyjetController = λ1d9aef186eca;
})();
