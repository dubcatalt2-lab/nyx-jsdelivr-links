var $studyjetController;

(() => {
  var λd8db85c287b3 = {
    286(λd8db85c287b3, λ83608c7e3cfe, λ1ff7ec1162c6) {
      λ1ff7ec1162c6.d(λ83608c7e3cfe, {
        I: () => λ1bf03efb4084
      });
      let λ1bf03efb4084 = Symbol.for("controller frame handle");
    },
    805(λd8db85c287b3, λ83608c7e3cfe, λ1ff7ec1162c6) {
      λ1ff7ec1162c6.d(λ83608c7e3cfe, {
        C: () => r
      });
      class r {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λd8db85c287b3, λ83608c7e3cfe, λ1ff7ec1162c6) {
          this.methods = λd8db85c287b3, this.id = λ83608c7e3cfe, this.sendRaw = λ1ff7ec1162c6;
        }
        recieve(λd8db85c287b3) {
          if (null == λd8db85c287b3 || "object" != typeof λd8db85c287b3) return;
          let λ83608c7e3cfe = λd8db85c287b3[this.id];
          if (null == λ83608c7e3cfe || "object" != typeof λ83608c7e3cfe) return;
          let λ1ff7ec1162c6 = λ83608c7e3cfe.$type;
          if ("response" === λ1ff7ec1162c6) {
            let λd8db85c287b3 = λ83608c7e3cfe.$token, λ1ff7ec1162c6 = λ83608c7e3cfe.$data, λ1bf03efb4084 = λ83608c7e3cfe.$error, λ4e3b135eefba = this.promiseCallbacks.get(λd8db85c287b3);
            if (!λ4e3b135eefba) return;
            this.promiseCallbacks.delete(λd8db85c287b3), void 0 !== λ1bf03efb4084 ? λ4e3b135eefba.reject(Error(λ1bf03efb4084)) : λ4e3b135eefba.resolve(λ1ff7ec1162c6);
          } else if ("request" === λ1ff7ec1162c6) {
            let λd8db85c287b3 = λ83608c7e3cfe.$method, λ1ff7ec1162c6 = λ83608c7e3cfe.$args;
            this.methods[λd8db85c287b3](λ1ff7ec1162c6).then(λd8db85c287b3 => {
              this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ83608c7e3cfe.$token,
                  $data: λd8db85c287b3?.[0]
                }
              }, λd8db85c287b3?.[1]);
            }).catch(λd8db85c287b3 => {
              console.error(λd8db85c287b3), this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ83608c7e3cfe.$token,
                  $error: λd8db85c287b3?.toString() || "Unknown error"
                }
              }, []);
            });
          }
        }
        call(λd8db85c287b3, λ83608c7e3cfe, λ1ff7ec1162c6 = []) {
          let λ1bf03efb4084 = this.counter++;
          return new Promise((λ4e3b135eefba, λd82f4e122729) => {
            this.promiseCallbacks.set(λ1bf03efb4084, {
              resolve: λ4e3b135eefba,
              reject: λd82f4e122729
            }), this.sendRaw({
              [this.id]: {
                $type: "request",
                $method: λd8db85c287b3,
                $args: λ83608c7e3cfe,
                $token: λ1bf03efb4084
              }
            }, λ1ff7ec1162c6);
          });
        }
      }
    },
    423(λd8db85c287b3, λ83608c7e3cfe, λ1ff7ec1162c6) {
      λ1ff7ec1162c6.d(λ83608c7e3cfe, {
        Cx: () => λe143de3a19d5,
        bw: () => λ3f2675800e15,
        cP: () => λ4e3b135eefba,
        ht: () => λ0cf1ff1f55dd,
        pX: () => λecc1c5247598
      });
      let {BareResponse: λ1bf03efb4084, CookieJar: λ4e3b135eefba, IncrementalHtmlRewriter: λd82f4e122729, Plugin: λ96507ce755df, STUDYJETCLIENT: λecc1c5247598, STUDYJETCLIENTNAME: λ0410c7eebcbc, StudyJetClient: λ3f2675800e15, StudyJetFetchHandler: λ1779b9d333eb, StudyJetFetchTrackedClient: λ2eae0065e0cb, StudyJetHeaders: λca455d9478e5, Tap: λe143de3a19d5, createLocationProxy: λ7b84fd6f8db9, defaultConfig: λbf3f6b61c97a, defaultConfigDev: λ839877d7f22d, flagEnabled: λe0f60b30e3f9, getOwnPropertyDescriptorHandler: λea0cae52df2d, getRewriter: λ32e80e781c83, getScriptBlockTypeString: λa77ef144cb6f, htmlRules: λ31fba0503d0a, isArchiveMimeType: λ5d78bf7a3338, isAudioOrVideoMimeType: λ7221e80fbd71, isFontMimeType: λ153882c8200b, isHtmlMimeType: λcc306544cd20, isImageMimeType: λa887d402f0fb, isInlineDisplayableMimeType: λ5ddd5956c1a2, isJavascriptMimeType: λ3885f8aa0fb2, isJavascriptMimeTypeEssenceMatch: λf304bd123afd, isModuleScriptType: λ2586ddff51fc, isScriptType: λ4bc03453d45e, isScriptableMimeType: λ838d68df0a6e, isXmlMimeType: λebe2ac53bfe0, isZipBasedMimeType: λfa6a92b2ce01, isdedicated: λf2ae3ad052d3, isshared: λ7368b9c863ee, issw: λ3f194e58ec3c, iswindow: λee4aaa2870ce, isworker: λ2982ff46f41f, parseMimeType: λ8021bc31d7e9, rewriteBlob: λ5efbd668d975, rewriteCss: λ72f577b9bb84, rewriteHtml: λ87c7c477726e, rewriteJs: λc5e453e85ffa, rewriteJsInner: λf4210b9d9922, rewriteSrcset: λ1071fd743c92, rewriteUrl: λa21a55f848b2, rewriteWorkers: λ8b2481d59ead, setWasm: λ0cf1ff1f55dd, unrewriteBlob: λeb93f5b3c002, unrewriteCss: λ925fb445d78c, unrewriteHtml: λe7ac8cf7448d, unrewriteUrl: λc61748c65054, versionInfo: λcea4e4abdf8e} = globalThis.$studyjet;
    }
  }, λ83608c7e3cfe = {};
  function o(λ1ff7ec1162c6) {
    var λ1bf03efb4084 = λ83608c7e3cfe[λ1ff7ec1162c6];
    if (void 0 !== λ1bf03efb4084) return λ1bf03efb4084.exports;
    var λ4e3b135eefba = λ83608c7e3cfe[λ1ff7ec1162c6] = {
      exports: {}
    };
    return λd8db85c287b3[λ1ff7ec1162c6](λ4e3b135eefba, λ4e3b135eefba.exports, o), λ4e3b135eefba.exports;
  }
  o.d = (λd8db85c287b3, λ83608c7e3cfe) => {
    for (var λ1ff7ec1162c6 in λ83608c7e3cfe) o.o(λ83608c7e3cfe, λ1ff7ec1162c6) && !o.o(λd8db85c287b3, λ1ff7ec1162c6) && Object.defineProperty(λd8db85c287b3, λ1ff7ec1162c6, {
      enumerable: !0,
      get: λ83608c7e3cfe[λ1ff7ec1162c6]
    });
  }, o.o = (λd8db85c287b3, λ83608c7e3cfe) => Object.prototype.hasOwnProperty.call(λd8db85c287b3, λ83608c7e3cfe), 
  o.r = λd8db85c287b3 => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λd8db85c287b3, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(λd8db85c287b3, "__esModule", {
      value: !0
    });
  };
  var λ1ff7ec1162c6 = {};
  (() => {
    o.r(λ1ff7ec1162c6), o.d(λ1ff7ec1162c6, {
      load: () => l
    });
    var λd8db85c287b3 = o(805), λ83608c7e3cfe = o(286), λ1bf03efb4084 = o(423);
    let λ4e3b135eefba = MessagePort.prototype.postMessage, n = (λd8db85c287b3, λ83608c7e3cfe, λ1ff7ec1162c6) => {
      λ4e3b135eefba.call(λd8db85c287b3, λ83608c7e3cfe, λ1ff7ec1162c6);
    };
    class a {
      port;
      readyResolve;
      readyPromise=new Promise(λd8db85c287b3 => {
        this.readyResolve = λd8db85c287b3;
      });
      ready=!1;
      async init() {
        await this.readyPromise, this.ready = !0;
      }
      rpc;
      constructor(λ83608c7e3cfe) {
        this.port = λ83608c7e3cfe, this.rpc = new λd8db85c287b3.C({
          ready: async () => {
            this.readyResolve();
          }
        }, "transport", (λd8db85c287b3, λ1ff7ec1162c6) => {
          n(λ83608c7e3cfe, λd8db85c287b3, λ1ff7ec1162c6);
        }), λ83608c7e3cfe.onmessageerror = λd8db85c287b3 => {
          console.error("onmessageerror (this should never happen!)", λd8db85c287b3);
        }, λ83608c7e3cfe.onmessage = λd8db85c287b3 => {
          this.rpc.recieve(λd8db85c287b3.data);
        }, λ83608c7e3cfe.start();
      }
      connect(λd8db85c287b3, λ83608c7e3cfe, λ1ff7ec1162c6, λ1bf03efb4084, λ4e3b135eefba, λd82f4e122729, λ96507ce755df) {
        let λecc1c5247598 = new MessageChannel, λ0410c7eebcbc = λecc1c5247598.port1;
        return console.warn("connecting"), this.rpc.call("connect", {
          url: λd8db85c287b3.href,
          protocols: λ83608c7e3cfe,
          requestHeaders: λ1ff7ec1162c6,
          port: λecc1c5247598.port2
        }, [ λecc1c5247598.port2 ]).then(λd8db85c287b3 => {
          console.log(λd8db85c287b3), "success" === λd8db85c287b3.result ? λ1bf03efb4084(λd8db85c287b3.protocol, λd8db85c287b3.extensions) : λ96507ce755df(λd8db85c287b3.error);
        }), λ0410c7eebcbc.onmessage = λd8db85c287b3 => {
          let λ83608c7e3cfe = λd8db85c287b3.data;
          "data" === λ83608c7e3cfe.type ? λ4e3b135eefba(λ83608c7e3cfe.data) : "close" === λ83608c7e3cfe.type && λd82f4e122729(λ83608c7e3cfe.code, λ83608c7e3cfe.reason);
        }, λ0410c7eebcbc.onmessageerror = λd8db85c287b3 => {
          console.error("onmessageerror (this should never happen!)", λd8db85c287b3), λ96507ce755df("Message error in transport port");
        }, [ λd8db85c287b3 => {
          n(λ0410c7eebcbc, {
            type: "data",
            data: λd8db85c287b3
          }, λd8db85c287b3 instanceof ArrayBuffer ? [ λd8db85c287b3 ] : []);
        }, λd8db85c287b3 => {
          n(λ0410c7eebcbc, {
            type: "close",
            code: λd8db85c287b3
          });
        } ];
      }
      async request(λd8db85c287b3, λ83608c7e3cfe, λ1ff7ec1162c6, λ1bf03efb4084, λ4e3b135eefba) {
        return await this.rpc.call("request", {
          remote: λd8db85c287b3.href,
          method: λ83608c7e3cfe,
          body: λ1ff7ec1162c6,
          headers: λ1bf03efb4084
        });
      }
      async sendSetCookie(λd8db85c287b3, λ83608c7e3cfe = {}) {
        await this.rpc.call("sendSetCookie", {
          cookies: λd8db85c287b3.map(({url: λd8db85c287b3, cookie: λ83608c7e3cfe}) => ({
            url: λd8db85c287b3.href,
            cookie: λ83608c7e3cfe
          })),
          options: λ83608c7e3cfe
        });
      }
    }
    let λd82f4e122729 = navigator.serviceWorker.controller;
    function l(λd8db85c287b3) {
      if (λ1bf03efb4084.pX in globalThis) return void globalThis[λ1bf03efb4084.pX].syncDocumentInit({
        initHeaders: λd8db85c287b3.initHeaders,
        history: λd8db85c287b3.history,
        cookies: λd8db85c287b3.cookies
      });
      if (!("WASM" in self)) throw Error("WASM not found in global scope!");
      let λ83608c7e3cfe = Uint8Array.from(atob(self.WASM), λd8db85c287b3 => λd8db85c287b3.charCodeAt(0));
      delete self.WASM, (0, λ1bf03efb4084.ht)(λ83608c7e3cfe), new h(globalThis, λd8db85c287b3);
    }
    class h {
      global;
      init;
      client;
      cookieJar;
      transport;
      handleServiceWorkerCookieMessage;
      constructor(λd8db85c287b3, λ83608c7e3cfe) {
        this.global = λd8db85c287b3, this.init = λ83608c7e3cfe;
        const λ1ff7ec1162c6 = new MessageChannel;
        this.transport = new a(λ1ff7ec1162c6.port1), λd82f4e122729?.postMessage({
          $sw$initRemoteTransport: {
            port: λ1ff7ec1162c6.port2,
            prefix: this.init.prefix.href
          }
        }, [ λ1ff7ec1162c6.port2 ]), this.cookieJar = new λ1bf03efb4084.cP, this.cookieJar.load(this.init.cookies), 
        this.handleServiceWorkerCookieMessage = λd8db85c287b3 => {
          if (!λd8db85c287b3.data?.$controller$setCookie || "object" != typeof λd8db85c287b3.data.$controller$setCookie) return;
          let λ83608c7e3cfe = λd8db85c287b3.data.$controller$setCookie;
          if (λ83608c7e3cfe.controllerId && !String(this.init.prefix?.pathname || "").includes("/" + λ83608c7e3cfe.controllerId + "/")) return;
          if (λ83608c7e3cfe.options?.clear && this.cookieJar.clear(), Array.isArray(λ83608c7e3cfe.cookies)) {
            for (let λd8db85c287b3 of λ83608c7e3cfe.cookies) if ("string" == typeof λd8db85c287b3?.url && "string" == typeof λd8db85c287b3.cookie) try {
              this.cookieJar.setCookies(λd8db85c287b3.cookie, new URL(λd8db85c287b3.url));
            } catch {
              console.error("Failed to set cookie", λd8db85c287b3);
            }
          }
          if ("string" == typeof λ83608c7e3cfe.id) {
            let λd8db85c287b3 = navigator.serviceWorker?.controller ?? λd82f4e122729;
            λd8db85c287b3?.postMessage({
              $sw$setCookieDone: {
                id: λ83608c7e3cfe.id
              }
            });
          }
        }, navigator.serviceWorker?.addEventListener("message", this.handleServiceWorkerCookieMessage), 
        this.injectStudyJet();
      }
      injectStudyJet() {
        let λd8db85c287b3 = this.global.frameElement;
        λd8db85c287b3 && !λd8db85c287b3.name && (window.name = λd8db85c287b3.name = `${Array(8).fill(0).map(() => Math.floor(36 * Math.random()).toString(36)).join("")}`);
        let λ1ff7ec1162c6 = λd8db85c287b3?.[λ83608c7e3cfe.I], λ4e3b135eefba = !0;
        if (!λ1ff7ec1162c6) {
          λ4e3b135eefba = !1;
          let λd8db85c287b3 = this.global.window;
          for (;λd8db85c287b3.parent !== λd8db85c287b3; ) {
            let λ4e3b135eefba = λd8db85c287b3[λ1bf03efb4084.pX];
            if (!λ4e3b135eefba) {
              λd8db85c287b3 = λd8db85c287b3.parent.window;
              continue;
            }
            let λd82f4e122729 = λ4e3b135eefba.descriptors.get("window.frameElement", λd8db85c287b3);
            if (λd82f4e122729 && λd82f4e122729[λ83608c7e3cfe.I]) {
              λ1ff7ec1162c6 = λd82f4e122729[λ83608c7e3cfe.I];
              break;
            }
            λd8db85c287b3 = λd8db85c287b3.parent.window;
          }
        }
        let λd82f4e122729 = {
          config: this.init.sjconfig,
          prefix: this.init.prefix,
          cookieJar: this.cookieJar,
          interface: {
            getInjectScripts: this.init.yieldGetInjectScripts(this.init.config, this.init.sjconfig, this.init.prefix, this.cookieJar, this.init.codecEncode, this.init.codecDecode),
            codecEncode: this.init.codecEncode,
            codecDecode: this.init.codecDecode
          }
        };
        this.client = new λ1bf03efb4084.bw(this.global, {
          context: λd82f4e122729,
          transport: this.transport,
          sendSetCookie: async (λd8db85c287b3, λ83608c7e3cfe) => {
            await this.transport.sendSetCookie(λd8db85c287b3, λ83608c7e3cfe);
          },
          shouldBlockMessageEvent: () => !1,
          hookSubcontext: λd8db85c287b3 => new h(λd8db85c287b3, {
            ...this.init,
            cookies: this.cookieJar.dump()
          }).client,
          initHeaders: this.init.initHeaders,
          history: this.init.history
        });
        let λ96507ce755df = {
          window: this.global.window,
          client: this.client,
          isTopLevel: λ4e3b135eefba
        };
        λ1ff7ec1162c6 && λ1bf03efb4084.Cx.dispatch(λ1ff7ec1162c6.hooks.init.pre, λ96507ce755df, {}), 
        this.client.hook(), λ1ff7ec1162c6 && λ1bf03efb4084.Cx.dispatch(λ1ff7ec1162c6.hooks.init.post, λ96507ce755df, {});
      }
    }
  })(), $studyjetController = λ1ff7ec1162c6;
})();
