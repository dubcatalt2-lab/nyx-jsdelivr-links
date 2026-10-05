var $studyjetController;

(() => {
  var λ98aeabcf3fff = {
    286(λ98aeabcf3fff, λ9e0a53a0fd5f, λ400e86288896) {
      λ400e86288896.d(λ9e0a53a0fd5f, {
        I: () => λb02ff03848c3
      });
      let λb02ff03848c3 = Symbol.for("controller frame handle");
    },
    805(λ98aeabcf3fff, λ9e0a53a0fd5f, λ400e86288896) {
      λ400e86288896.d(λ9e0a53a0fd5f, {
        C: () => r
      });
      class r {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λ98aeabcf3fff, λ9e0a53a0fd5f, λ400e86288896) {
          this.methods = λ98aeabcf3fff, this.id = λ9e0a53a0fd5f, this.sendRaw = λ400e86288896;
        }
        recieve(λ98aeabcf3fff) {
          if (null == λ98aeabcf3fff || "object" != typeof λ98aeabcf3fff) return;
          let λ9e0a53a0fd5f = λ98aeabcf3fff[this.id];
          if (null == λ9e0a53a0fd5f || "object" != typeof λ9e0a53a0fd5f) return;
          let λ400e86288896 = λ9e0a53a0fd5f.$type;
          if ("response" === λ400e86288896) {
            let λ98aeabcf3fff = λ9e0a53a0fd5f.$token, λ400e86288896 = λ9e0a53a0fd5f.$data, λb02ff03848c3 = λ9e0a53a0fd5f.$error, λc5ef3fb3ca73 = this.promiseCallbacks.get(λ98aeabcf3fff);
            if (!λc5ef3fb3ca73) return;
            this.promiseCallbacks.delete(λ98aeabcf3fff), void 0 !== λb02ff03848c3 ? λc5ef3fb3ca73.reject(Error(λb02ff03848c3)) : λc5ef3fb3ca73.resolve(λ400e86288896);
          } else if ("request" === λ400e86288896) {
            let λ98aeabcf3fff = λ9e0a53a0fd5f.$method, λ400e86288896 = λ9e0a53a0fd5f.$args;
            this.methods[λ98aeabcf3fff](λ400e86288896).then(λ98aeabcf3fff => {
              this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ9e0a53a0fd5f.$token,
                  $data: λ98aeabcf3fff?.[0]
                }
              }, λ98aeabcf3fff?.[1]);
            }).catch(λ98aeabcf3fff => {
              console.error(λ98aeabcf3fff), this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ9e0a53a0fd5f.$token,
                  $error: λ98aeabcf3fff?.toString() || "Unknown error"
                }
              }, []);
            });
          }
        }
        call(λ98aeabcf3fff, λ9e0a53a0fd5f, λ400e86288896 = []) {
          let λb02ff03848c3 = this.counter++;
          return new Promise((λc5ef3fb3ca73, λ14de54d3e416) => {
            this.promiseCallbacks.set(λb02ff03848c3, {
              resolve: λc5ef3fb3ca73,
              reject: λ14de54d3e416
            }), this.sendRaw({
              [this.id]: {
                $type: "request",
                $method: λ98aeabcf3fff,
                $args: λ9e0a53a0fd5f,
                $token: λb02ff03848c3
              }
            }, λ400e86288896);
          });
        }
      }
    },
    423(λ98aeabcf3fff, λ9e0a53a0fd5f, λ400e86288896) {
      λ400e86288896.d(λ9e0a53a0fd5f, {
        Cx: () => λ57b19ea8f87b,
        bw: () => λ1b59f1836197,
        cP: () => λc5ef3fb3ca73,
        ht: () => λ2874e1ae8199,
        pX: () => λ5ab21a180f8e
      });
      let {BareResponse: λb02ff03848c3, CookieJar: λc5ef3fb3ca73, IncrementalHtmlRewriter: λ14de54d3e416, Plugin: λ39bca3e318d8, STUDYJETCLIENT: λ5ab21a180f8e, STUDYJETCLIENTNAME: λ35eaf03e82e5, StudyJetClient: λ1b59f1836197, StudyJetFetchHandler: λeeac07e597b2, StudyJetFetchTrackedClient: λdc0f8715724e, StudyJetHeaders: λ81f9dc9797d4, Tap: λ57b19ea8f87b, createLocationProxy: λf163344f4967, defaultConfig: λ02a8bc0e2b9a, defaultConfigDev: λa7cde10aafeb, flagEnabled: λ04846be788b5, getOwnPropertyDescriptorHandler: λc0bcd022398a, getRewriter: λ1b560872f93f, getScriptBlockTypeString: λbdd43495c653, htmlRules: λ6c082a165ee4, isArchiveMimeType: λdfa4926133de, isAudioOrVideoMimeType: λd90c8e0a9d17, isFontMimeType: λ15d793bef218, isHtmlMimeType: λd050c4b42883, isImageMimeType: λ389ba5799f58, isInlineDisplayableMimeType: λ67dd5f21fec5, isJavascriptMimeType: λ6dff4c4f8155, isJavascriptMimeTypeEssenceMatch: λe0f9dee15a56, isModuleScriptType: λaf2fcf3ae2dc, isScriptType: λ2745ce639c70, isScriptableMimeType: λa274a418c66c, isXmlMimeType: λd695321a1287, isZipBasedMimeType: λbb2a49faa5b2, isdedicated: λ74503e3d644d, isshared: λc0b1aa005d51, issw: λ68e1e3c125d9, iswindow: λ41a5ed25d425, isworker: λcf8fe40d24b7, parseMimeType: λ88d9bcac3946, rewriteBlob: λdc875fd9899a, rewriteCss: λ2c903c15f277, rewriteHtml: λ9e672a956ec1, rewriteJs: λ4a0ce53d51e8, rewriteJsInner: λ613302a5a219, rewriteSrcset: λfb9bfedd9478, rewriteUrl: λ43652c5de079, rewriteWorkers: λ4a572a04eb26, setWasm: λ2874e1ae8199, unrewriteBlob: λ0f4473623adf, unrewriteCss: λ0e803a5e8873, unrewriteHtml: λc51fc44c9cb7, unrewriteUrl: λ2bd49fcf4c0c, versionInfo: λf72dadad6f23} = globalThis.$studyjet;
    }
  }, λ9e0a53a0fd5f = {};
  function o(λ400e86288896) {
    var λb02ff03848c3 = λ9e0a53a0fd5f[λ400e86288896];
    if (void 0 !== λb02ff03848c3) return λb02ff03848c3.exports;
    var λc5ef3fb3ca73 = λ9e0a53a0fd5f[λ400e86288896] = {
      exports: {}
    };
    return λ98aeabcf3fff[λ400e86288896](λc5ef3fb3ca73, λc5ef3fb3ca73.exports, o), λc5ef3fb3ca73.exports;
  }
  o.d = (λ98aeabcf3fff, λ9e0a53a0fd5f) => {
    for (var λ400e86288896 in λ9e0a53a0fd5f) o.o(λ9e0a53a0fd5f, λ400e86288896) && !o.o(λ98aeabcf3fff, λ400e86288896) && Object.defineProperty(λ98aeabcf3fff, λ400e86288896, {
      enumerable: !0,
      get: λ9e0a53a0fd5f[λ400e86288896]
    });
  }, o.o = (λ98aeabcf3fff, λ9e0a53a0fd5f) => Object.prototype.hasOwnProperty.call(λ98aeabcf3fff, λ9e0a53a0fd5f), 
  o.r = λ98aeabcf3fff => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λ98aeabcf3fff, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(λ98aeabcf3fff, "__esModule", {
      value: !0
    });
  };
  var λ400e86288896 = {};
  (() => {
    o.r(λ400e86288896), o.d(λ400e86288896, {
      load: () => l
    });
    var λ98aeabcf3fff = o(805), λ9e0a53a0fd5f = o(286), λb02ff03848c3 = o(423);
    let λc5ef3fb3ca73 = MessagePort.prototype.postMessage, n = (λ98aeabcf3fff, λ9e0a53a0fd5f, λ400e86288896) => {
      λc5ef3fb3ca73.call(λ98aeabcf3fff, λ9e0a53a0fd5f, λ400e86288896);
    };
    class a {
      port;
      readyResolve;
      readyPromise=new Promise(λ98aeabcf3fff => {
        this.readyResolve = λ98aeabcf3fff;
      });
      ready=!1;
      async init() {
        await this.readyPromise, this.ready = !0;
      }
      rpc;
      constructor(λ9e0a53a0fd5f) {
        this.port = λ9e0a53a0fd5f, this.rpc = new λ98aeabcf3fff.C({
          ready: async () => {
            this.readyResolve();
          }
        }, "transport", (λ98aeabcf3fff, λ400e86288896) => {
          n(λ9e0a53a0fd5f, λ98aeabcf3fff, λ400e86288896);
        }), λ9e0a53a0fd5f.onmessageerror = λ98aeabcf3fff => {
          console.error("onmessageerror (this should never happen!)", λ98aeabcf3fff);
        }, λ9e0a53a0fd5f.onmessage = λ98aeabcf3fff => {
          this.rpc.recieve(λ98aeabcf3fff.data);
        }, λ9e0a53a0fd5f.start();
      }
      connect(λ98aeabcf3fff, λ9e0a53a0fd5f, λ400e86288896, λb02ff03848c3, λc5ef3fb3ca73, λ14de54d3e416, λ39bca3e318d8) {
        let λ5ab21a180f8e = new MessageChannel, λ35eaf03e82e5 = λ5ab21a180f8e.port1;
        return console.warn("connecting"), this.rpc.call("connect", {
          url: λ98aeabcf3fff.href,
          protocols: λ9e0a53a0fd5f,
          requestHeaders: λ400e86288896,
          port: λ5ab21a180f8e.port2
        }, [ λ5ab21a180f8e.port2 ]).then(λ98aeabcf3fff => {
          console.log(λ98aeabcf3fff), "success" === λ98aeabcf3fff.result ? λb02ff03848c3(λ98aeabcf3fff.protocol, λ98aeabcf3fff.extensions) : λ39bca3e318d8(λ98aeabcf3fff.error);
        }), λ35eaf03e82e5.onmessage = λ98aeabcf3fff => {
          let λ9e0a53a0fd5f = λ98aeabcf3fff.data;
          "data" === λ9e0a53a0fd5f.type ? λc5ef3fb3ca73(λ9e0a53a0fd5f.data) : "close" === λ9e0a53a0fd5f.type && λ14de54d3e416(λ9e0a53a0fd5f.code, λ9e0a53a0fd5f.reason);
        }, λ35eaf03e82e5.onmessageerror = λ98aeabcf3fff => {
          console.error("onmessageerror (this should never happen!)", λ98aeabcf3fff), λ39bca3e318d8("Message error in transport port");
        }, [ λ98aeabcf3fff => {
          n(λ35eaf03e82e5, {
            type: "data",
            data: λ98aeabcf3fff
          }, λ98aeabcf3fff instanceof ArrayBuffer ? [ λ98aeabcf3fff ] : []);
        }, λ98aeabcf3fff => {
          n(λ35eaf03e82e5, {
            type: "close",
            code: λ98aeabcf3fff
          });
        } ];
      }
      async request(λ98aeabcf3fff, λ9e0a53a0fd5f, λ400e86288896, λb02ff03848c3, λc5ef3fb3ca73) {
        return await this.rpc.call("request", {
          remote: λ98aeabcf3fff.href,
          method: λ9e0a53a0fd5f,
          body: λ400e86288896,
          headers: λb02ff03848c3
        });
      }
      async sendSetCookie(λ98aeabcf3fff, λ9e0a53a0fd5f = {}) {
        await this.rpc.call("sendSetCookie", {
          cookies: λ98aeabcf3fff.map(({url: λ98aeabcf3fff, cookie: λ9e0a53a0fd5f}) => ({
            url: λ98aeabcf3fff.href,
            cookie: λ9e0a53a0fd5f
          })),
          options: λ9e0a53a0fd5f
        });
      }
    }
    let λ14de54d3e416 = navigator.serviceWorker.controller;
    function l(λ98aeabcf3fff) {
      if (λb02ff03848c3.pX in globalThis) return void globalThis[λb02ff03848c3.pX].syncDocumentInit({
        initHeaders: λ98aeabcf3fff.initHeaders,
        history: λ98aeabcf3fff.history,
        cookies: λ98aeabcf3fff.cookies
      });
      if (!("WASM" in self)) throw Error("WASM not found in global scope!");
      let λ9e0a53a0fd5f = Uint8Array.from(atob(self.WASM), λ98aeabcf3fff => λ98aeabcf3fff.charCodeAt(0));
      delete self.WASM, (0, λb02ff03848c3.ht)(λ9e0a53a0fd5f), new h(globalThis, λ98aeabcf3fff);
    }
    class h {
      global;
      init;
      client;
      cookieJar;
      transport;
      handleServiceWorkerCookieMessage;
      constructor(λ98aeabcf3fff, λ9e0a53a0fd5f) {
        this.global = λ98aeabcf3fff, this.init = λ9e0a53a0fd5f;
        const λ400e86288896 = new MessageChannel;
        this.transport = new a(λ400e86288896.port1), λ14de54d3e416?.postMessage({
          $sw$initRemoteTransport: {
            port: λ400e86288896.port2,
            prefix: this.init.prefix.href
          }
        }, [ λ400e86288896.port2 ]), this.cookieJar = new λb02ff03848c3.cP, this.cookieJar.load(this.init.cookies), 
        this.handleServiceWorkerCookieMessage = λ98aeabcf3fff => {
          if (!λ98aeabcf3fff.data?.$controller$setCookie || "object" != typeof λ98aeabcf3fff.data.$controller$setCookie) return;
          let λ9e0a53a0fd5f = λ98aeabcf3fff.data.$controller$setCookie;
          if (λ9e0a53a0fd5f.controllerId && !String(this.init.prefix?.pathname || "").includes("/" + λ9e0a53a0fd5f.controllerId + "/")) return;
          if (λ9e0a53a0fd5f.options?.clear && this.cookieJar.clear(), Array.isArray(λ9e0a53a0fd5f.cookies)) {
            for (let λ98aeabcf3fff of λ9e0a53a0fd5f.cookies) if ("string" == typeof λ98aeabcf3fff?.url && "string" == typeof λ98aeabcf3fff.cookie) try {
              this.cookieJar.setCookies(λ98aeabcf3fff.cookie, new URL(λ98aeabcf3fff.url));
            } catch {
              console.error("Failed to set cookie", λ98aeabcf3fff);
            }
          }
          if ("string" == typeof λ9e0a53a0fd5f.id) {
            let λ98aeabcf3fff = navigator.serviceWorker?.controller ?? λ14de54d3e416;
            λ98aeabcf3fff?.postMessage({
              $sw$setCookieDone: {
                id: λ9e0a53a0fd5f.id
              }
            });
          }
        }, navigator.serviceWorker?.addEventListener("message", this.handleServiceWorkerCookieMessage), 
        this.injectStudyJet();
      }
      injectStudyJet() {
        let λ98aeabcf3fff = this.global.frameElement;
        λ98aeabcf3fff && !λ98aeabcf3fff.name && (window.name = λ98aeabcf3fff.name = `${Array(8).fill(0).map(() => Math.floor(36 * Math.random()).toString(36)).join("")}`);
        let λ400e86288896 = λ98aeabcf3fff?.[λ9e0a53a0fd5f.I], λc5ef3fb3ca73 = !0;
        if (!λ400e86288896) {
          λc5ef3fb3ca73 = !1;
          let λ98aeabcf3fff = this.global.window;
          for (;λ98aeabcf3fff.parent !== λ98aeabcf3fff; ) {
            let λc5ef3fb3ca73 = λ98aeabcf3fff[λb02ff03848c3.pX];
            if (!λc5ef3fb3ca73) {
              λ98aeabcf3fff = λ98aeabcf3fff.parent.window;
              continue;
            }
            let λ14de54d3e416 = λc5ef3fb3ca73.descriptors.get("window.frameElement", λ98aeabcf3fff);
            if (λ14de54d3e416 && λ14de54d3e416[λ9e0a53a0fd5f.I]) {
              λ400e86288896 = λ14de54d3e416[λ9e0a53a0fd5f.I];
              break;
            }
            λ98aeabcf3fff = λ98aeabcf3fff.parent.window;
          }
        }
        let λ14de54d3e416 = {
          config: this.init.sjconfig,
          prefix: this.init.prefix,
          cookieJar: this.cookieJar,
          interface: {
            getInjectScripts: this.init.yieldGetInjectScripts(this.init.config, this.init.sjconfig, this.init.prefix, this.cookieJar, this.init.codecEncode, this.init.codecDecode),
            codecEncode: this.init.codecEncode,
            codecDecode: this.init.codecDecode
          }
        };
        this.client = new λb02ff03848c3.bw(this.global, {
          context: λ14de54d3e416,
          transport: this.transport,
          sendSetCookie: async (λ98aeabcf3fff, λ9e0a53a0fd5f) => {
            await this.transport.sendSetCookie(λ98aeabcf3fff, λ9e0a53a0fd5f);
          },
          shouldBlockMessageEvent: () => !1,
          hookSubcontext: λ98aeabcf3fff => new h(λ98aeabcf3fff, {
            ...this.init,
            cookies: this.cookieJar.dump()
          }).client,
          initHeaders: this.init.initHeaders,
          history: this.init.history
        });
        let λ39bca3e318d8 = {
          window: this.global.window,
          client: this.client,
          isTopLevel: λc5ef3fb3ca73
        };
        λ400e86288896 && λb02ff03848c3.Cx.dispatch(λ400e86288896.hooks.init.pre, λ39bca3e318d8, {}), 
        this.client.hook(), λ400e86288896 && λb02ff03848c3.Cx.dispatch(λ400e86288896.hooks.init.post, λ39bca3e318d8, {});
      }
    }
  })(), $studyjetController = λ400e86288896;
})();
