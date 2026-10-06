var $studyjetController;

(() => {
  var λf4147b6c358b = {
    286(λf4147b6c358b, λ0af5f280ccef, λ5a37c7f77666) {
      λ5a37c7f77666.d(λ0af5f280ccef, {
        I: () => λbbfd86fa72e8
      });
      let λbbfd86fa72e8 = Symbol.for("controller frame handle");
    },
    805(λf4147b6c358b, λ0af5f280ccef, λ5a37c7f77666) {
      λ5a37c7f77666.d(λ0af5f280ccef, {
        C: () => r
      });
      class r {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λf4147b6c358b, λ0af5f280ccef, λ5a37c7f77666) {
          this.methods = λf4147b6c358b, this.id = λ0af5f280ccef, this.sendRaw = λ5a37c7f77666;
        }
        recieve(λf4147b6c358b) {
          if (null == λf4147b6c358b || "object" != typeof λf4147b6c358b) return;
          let λ0af5f280ccef = λf4147b6c358b[this.id];
          if (null == λ0af5f280ccef || "object" != typeof λ0af5f280ccef) return;
          let λ5a37c7f77666 = λ0af5f280ccef.$type;
          if ("response" === λ5a37c7f77666) {
            let λf4147b6c358b = λ0af5f280ccef.$token, λ5a37c7f77666 = λ0af5f280ccef.$data, λbbfd86fa72e8 = λ0af5f280ccef.$error, λ950e7ec3f5eb = this.promiseCallbacks.get(λf4147b6c358b);
            if (!λ950e7ec3f5eb) return;
            this.promiseCallbacks.delete(λf4147b6c358b), void 0 !== λbbfd86fa72e8 ? λ950e7ec3f5eb.reject(Error(λbbfd86fa72e8)) : λ950e7ec3f5eb.resolve(λ5a37c7f77666);
          } else if ("request" === λ5a37c7f77666) {
            let λf4147b6c358b = λ0af5f280ccef.$method, λ5a37c7f77666 = λ0af5f280ccef.$args;
            this.methods[λf4147b6c358b](λ5a37c7f77666).then(λf4147b6c358b => {
              this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ0af5f280ccef.$token,
                  $data: λf4147b6c358b?.[0]
                }
              }, λf4147b6c358b?.[1]);
            }).catch(λf4147b6c358b => {
              console.error(λf4147b6c358b), this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ0af5f280ccef.$token,
                  $error: λf4147b6c358b?.toString() || "Unknown error"
                }
              }, []);
            });
          }
        }
        call(λf4147b6c358b, λ0af5f280ccef, λ5a37c7f77666 = []) {
          let λbbfd86fa72e8 = this.counter++;
          return new Promise((λ950e7ec3f5eb, λ2dbd7856f5b4) => {
            this.promiseCallbacks.set(λbbfd86fa72e8, {
              resolve: λ950e7ec3f5eb,
              reject: λ2dbd7856f5b4
            }), this.sendRaw({
              [this.id]: {
                $type: "request",
                $method: λf4147b6c358b,
                $args: λ0af5f280ccef,
                $token: λbbfd86fa72e8
              }
            }, λ5a37c7f77666);
          });
        }
      }
    },
    423(λf4147b6c358b, λ0af5f280ccef, λ5a37c7f77666) {
      λ5a37c7f77666.d(λ0af5f280ccef, {
        Cx: () => λba166d16a2f5,
        bw: () => λ5510403fefcb,
        cP: () => λ950e7ec3f5eb,
        ht: () => λbf270eaa87ee,
        pX: () => λefd2d991b860
      });
      let {BareResponse: λbbfd86fa72e8, CookieJar: λ950e7ec3f5eb, IncrementalHtmlRewriter: λ2dbd7856f5b4, Plugin: λ8752c423851b, STUDYJETCLIENT: λefd2d991b860, STUDYJETCLIENTNAME: λ987e07351be4, StudyJetClient: λ5510403fefcb, StudyJetFetchHandler: λd5c4d911f729, StudyJetFetchTrackedClient: λ30a5d47d096e, StudyJetHeaders: λ06599925ce18, Tap: λba166d16a2f5, createLocationProxy: λ5f0b3ec5367d, defaultConfig: λe24a17b05586, defaultConfigDev: λed9b2645607f, flagEnabled: λ1104ff0836b1, getOwnPropertyDescriptorHandler: λ3dd071a23c7b, getRewriter: λ8a3f5e8e31a4, getScriptBlockTypeString: λe23ee239d560, htmlRules: λa25198daf869, isArchiveMimeType: λc3d7235cfe9a, isAudioOrVideoMimeType: λ22c9684ef0f8, isFontMimeType: λad8f08ed3a5f, isHtmlMimeType: λb9b1bbac61a4, isImageMimeType: λ00b1868bca75, isInlineDisplayableMimeType: λ4d4628df3e97, isJavascriptMimeType: λ2df4cdbcab19, isJavascriptMimeTypeEssenceMatch: λ97e3271dad63, isModuleScriptType: λc8e4201daeea, isScriptType: λ9dfe72f908b3, isScriptableMimeType: λ078b9eeab64b, isXmlMimeType: λ0c5c07a94e24, isZipBasedMimeType: λ2889f65be167, isdedicated: λ2bb2ee72fca5, isshared: λa81cf8d376f5, issw: λf39030c36058, iswindow: λ3dbf82fd9f7d, isworker: λ44dedde599ea, parseMimeType: λ126b9e8377a4, rewriteBlob: λ51c81a35ed23, rewriteCss: λ00a01caadc17, rewriteHtml: λ92f546681b43, rewriteJs: λ87b4575e6100, rewriteJsInner: λfb0eba5f3c19, rewriteSrcset: λf0fd47822a6f, rewriteUrl: λ81a38ce5ac0f, rewriteWorkers: λd969d9ccb343, setWasm: λbf270eaa87ee, unrewriteBlob: λab8dcc5de745, unrewriteCss: λ27bc8c43d847, unrewriteHtml: λ104cafb7ff46, unrewriteUrl: λca48f2699d05, versionInfo: λ3974c0cff1c2} = globalThis.$studyjet;
    }
  }, λ0af5f280ccef = {};
  function o(λ5a37c7f77666) {
    var λbbfd86fa72e8 = λ0af5f280ccef[λ5a37c7f77666];
    if (void 0 !== λbbfd86fa72e8) return λbbfd86fa72e8.exports;
    var λ950e7ec3f5eb = λ0af5f280ccef[λ5a37c7f77666] = {
      exports: {}
    };
    return λf4147b6c358b[λ5a37c7f77666](λ950e7ec3f5eb, λ950e7ec3f5eb.exports, o), λ950e7ec3f5eb.exports;
  }
  o.d = (λf4147b6c358b, λ0af5f280ccef) => {
    for (var λ5a37c7f77666 in λ0af5f280ccef) o.o(λ0af5f280ccef, λ5a37c7f77666) && !o.o(λf4147b6c358b, λ5a37c7f77666) && Object.defineProperty(λf4147b6c358b, λ5a37c7f77666, {
      enumerable: !0,
      get: λ0af5f280ccef[λ5a37c7f77666]
    });
  }, o.o = (λf4147b6c358b, λ0af5f280ccef) => Object.prototype.hasOwnProperty.call(λf4147b6c358b, λ0af5f280ccef), 
  o.r = λf4147b6c358b => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λf4147b6c358b, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(λf4147b6c358b, "__esModule", {
      value: !0
    });
  };
  var λ5a37c7f77666 = {};
  (() => {
    o.r(λ5a37c7f77666), o.d(λ5a37c7f77666, {
      load: () => l
    });
    var λf4147b6c358b = o(805), λ0af5f280ccef = o(286), λbbfd86fa72e8 = o(423);
    let λ950e7ec3f5eb = MessagePort.prototype.postMessage, n = (λf4147b6c358b, λ0af5f280ccef, λ5a37c7f77666) => {
      λ950e7ec3f5eb.call(λf4147b6c358b, λ0af5f280ccef, λ5a37c7f77666);
    };
    class a {
      port;
      readyResolve;
      readyPromise=new Promise(λf4147b6c358b => {
        this.readyResolve = λf4147b6c358b;
      });
      ready=!1;
      async init() {
        await this.readyPromise, this.ready = !0;
      }
      rpc;
      constructor(λ0af5f280ccef) {
        this.port = λ0af5f280ccef, this.rpc = new λf4147b6c358b.C({
          ready: async () => {
            this.readyResolve();
          }
        }, "transport", (λf4147b6c358b, λ5a37c7f77666) => {
          n(λ0af5f280ccef, λf4147b6c358b, λ5a37c7f77666);
        }), λ0af5f280ccef.onmessageerror = λf4147b6c358b => {
          console.error("onmessageerror (this should never happen!)", λf4147b6c358b);
        }, λ0af5f280ccef.onmessage = λf4147b6c358b => {
          this.rpc.recieve(λf4147b6c358b.data);
        }, λ0af5f280ccef.start();
      }
      connect(λf4147b6c358b, λ0af5f280ccef, λ5a37c7f77666, λbbfd86fa72e8, λ950e7ec3f5eb, λ2dbd7856f5b4, λ8752c423851b) {
        let λefd2d991b860 = new MessageChannel, λ987e07351be4 = λefd2d991b860.port1;
        return console.warn("connecting"), this.rpc.call("connect", {
          url: λf4147b6c358b.href,
          protocols: λ0af5f280ccef,
          requestHeaders: λ5a37c7f77666,
          port: λefd2d991b860.port2
        }, [ λefd2d991b860.port2 ]).then(λf4147b6c358b => {
          console.log(λf4147b6c358b), "success" === λf4147b6c358b.result ? λbbfd86fa72e8(λf4147b6c358b.protocol, λf4147b6c358b.extensions) : λ8752c423851b(λf4147b6c358b.error);
        }), λ987e07351be4.onmessage = λf4147b6c358b => {
          let λ0af5f280ccef = λf4147b6c358b.data;
          "data" === λ0af5f280ccef.type ? λ950e7ec3f5eb(λ0af5f280ccef.data) : "close" === λ0af5f280ccef.type && λ2dbd7856f5b4(λ0af5f280ccef.code, λ0af5f280ccef.reason);
        }, λ987e07351be4.onmessageerror = λf4147b6c358b => {
          console.error("onmessageerror (this should never happen!)", λf4147b6c358b), λ8752c423851b("Message error in transport port");
        }, [ λf4147b6c358b => {
          n(λ987e07351be4, {
            type: "data",
            data: λf4147b6c358b
          }, λf4147b6c358b instanceof ArrayBuffer ? [ λf4147b6c358b ] : []);
        }, λf4147b6c358b => {
          n(λ987e07351be4, {
            type: "close",
            code: λf4147b6c358b
          });
        } ];
      }
      async request(λf4147b6c358b, λ0af5f280ccef, λ5a37c7f77666, λbbfd86fa72e8, λ950e7ec3f5eb) {
        return await this.rpc.call("request", {
          remote: λf4147b6c358b.href,
          method: λ0af5f280ccef,
          body: λ5a37c7f77666,
          headers: λbbfd86fa72e8
        });
      }
      async sendSetCookie(λf4147b6c358b, λ0af5f280ccef = {}) {
        await this.rpc.call("sendSetCookie", {
          cookies: λf4147b6c358b.map(({url: λf4147b6c358b, cookie: λ0af5f280ccef}) => ({
            url: λf4147b6c358b.href,
            cookie: λ0af5f280ccef
          })),
          options: λ0af5f280ccef
        });
      }
    }
    let λ2dbd7856f5b4 = navigator.serviceWorker.controller;
    function l(λf4147b6c358b) {
      if (λbbfd86fa72e8.pX in globalThis) return void globalThis[λbbfd86fa72e8.pX].syncDocumentInit({
        initHeaders: λf4147b6c358b.initHeaders,
        history: λf4147b6c358b.history,
        cookies: λf4147b6c358b.cookies
      });
      if (!("WASM" in self)) throw Error("WASM not found in global scope!");
      let λ0af5f280ccef = Uint8Array.from(atob(self.WASM), λf4147b6c358b => λf4147b6c358b.charCodeAt(0));
      delete self.WASM, (0, λbbfd86fa72e8.ht)(λ0af5f280ccef), new h(globalThis, λf4147b6c358b);
    }
    class h {
      global;
      init;
      client;
      cookieJar;
      transport;
      handleServiceWorkerCookieMessage;
      constructor(λf4147b6c358b, λ0af5f280ccef) {
        this.global = λf4147b6c358b, this.init = λ0af5f280ccef;
        const λ5a37c7f77666 = new MessageChannel;
        this.transport = new a(λ5a37c7f77666.port1), λ2dbd7856f5b4?.postMessage({
          $sw$initRemoteTransport: {
            port: λ5a37c7f77666.port2,
            prefix: this.init.prefix.href
          }
        }, [ λ5a37c7f77666.port2 ]), this.cookieJar = new λbbfd86fa72e8.cP, this.cookieJar.load(this.init.cookies), 
        this.handleServiceWorkerCookieMessage = λf4147b6c358b => {
          if (!λf4147b6c358b.data?.$controller$setCookie || "object" != typeof λf4147b6c358b.data.$controller$setCookie) return;
          let λ0af5f280ccef = λf4147b6c358b.data.$controller$setCookie;
          if (λ0af5f280ccef.controllerId && !String(this.init.prefix?.pathname || "").includes("/" + λ0af5f280ccef.controllerId + "/")) return;
          if (λ0af5f280ccef.options?.clear && this.cookieJar.clear(), Array.isArray(λ0af5f280ccef.cookies)) {
            for (let λf4147b6c358b of λ0af5f280ccef.cookies) if ("string" == typeof λf4147b6c358b?.url && "string" == typeof λf4147b6c358b.cookie) try {
              this.cookieJar.setCookies(λf4147b6c358b.cookie, new URL(λf4147b6c358b.url));
            } catch {
              console.error("Failed to set cookie", λf4147b6c358b);
            }
          }
          if ("string" == typeof λ0af5f280ccef.id) {
            let λf4147b6c358b = navigator.serviceWorker?.controller ?? λ2dbd7856f5b4;
            λf4147b6c358b?.postMessage({
              $sw$setCookieDone: {
                id: λ0af5f280ccef.id
              }
            });
          }
        }, navigator.serviceWorker?.addEventListener("message", this.handleServiceWorkerCookieMessage), 
        this.injectStudyJet();
      }
      injectStudyJet() {
        let λf4147b6c358b = this.global.frameElement;
        λf4147b6c358b && !λf4147b6c358b.name && (window.name = λf4147b6c358b.name = `${Array(8).fill(0).map(() => Math.floor(36 * Math.random()).toString(36)).join("")}`);
        let λ5a37c7f77666 = λf4147b6c358b?.[λ0af5f280ccef.I], λ950e7ec3f5eb = !0;
        if (!λ5a37c7f77666) {
          λ950e7ec3f5eb = !1;
          let λf4147b6c358b = this.global.window;
          for (;λf4147b6c358b.parent !== λf4147b6c358b; ) {
            let λ950e7ec3f5eb = λf4147b6c358b[λbbfd86fa72e8.pX];
            if (!λ950e7ec3f5eb) {
              λf4147b6c358b = λf4147b6c358b.parent.window;
              continue;
            }
            let λ2dbd7856f5b4 = λ950e7ec3f5eb.descriptors.get("window.frameElement", λf4147b6c358b);
            if (λ2dbd7856f5b4 && λ2dbd7856f5b4[λ0af5f280ccef.I]) {
              λ5a37c7f77666 = λ2dbd7856f5b4[λ0af5f280ccef.I];
              break;
            }
            λf4147b6c358b = λf4147b6c358b.parent.window;
          }
        }
        let λ2dbd7856f5b4 = {
          config: this.init.sjconfig,
          prefix: this.init.prefix,
          cookieJar: this.cookieJar,
          interface: {
            getInjectScripts: this.init.yieldGetInjectScripts(this.init.config, this.init.sjconfig, this.init.prefix, this.cookieJar, this.init.codecEncode, this.init.codecDecode),
            codecEncode: this.init.codecEncode,
            codecDecode: this.init.codecDecode
          }
        };
        this.client = new λbbfd86fa72e8.bw(this.global, {
          context: λ2dbd7856f5b4,
          transport: this.transport,
          sendSetCookie: async (λf4147b6c358b, λ0af5f280ccef) => {
            await this.transport.sendSetCookie(λf4147b6c358b, λ0af5f280ccef);
          },
          shouldBlockMessageEvent: () => !1,
          hookSubcontext: λf4147b6c358b => new h(λf4147b6c358b, {
            ...this.init,
            cookies: this.cookieJar.dump()
          }).client,
          initHeaders: this.init.initHeaders,
          history: this.init.history
        });
        let λ8752c423851b = {
          window: this.global.window,
          client: this.client,
          isTopLevel: λ950e7ec3f5eb
        };
        λ5a37c7f77666 && λbbfd86fa72e8.Cx.dispatch(λ5a37c7f77666.hooks.init.pre, λ8752c423851b, {}), 
        this.client.hook(), λ5a37c7f77666 && λbbfd86fa72e8.Cx.dispatch(λ5a37c7f77666.hooks.init.post, λ8752c423851b, {});
      }
    }
  })(), $studyjetController = λ5a37c7f77666;
})();
