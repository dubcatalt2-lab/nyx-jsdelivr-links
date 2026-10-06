var $studyjetController;

(() => {
  var λe3a205043f36 = {
    286(λe3a205043f36, λ588fd3dc7b97, λ81e7a82bc530) {
      λ81e7a82bc530.d(λ588fd3dc7b97, {
        I: () => λ489dd43c0983
      });
      let λ489dd43c0983 = Symbol.for("controller frame handle");
    },
    805(λe3a205043f36, λ588fd3dc7b97, λ81e7a82bc530) {
      λ81e7a82bc530.d(λ588fd3dc7b97, {
        C: () => r
      });
      class r {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λe3a205043f36, λ588fd3dc7b97, λ81e7a82bc530) {
          this.methods = λe3a205043f36, this.id = λ588fd3dc7b97, this.sendRaw = λ81e7a82bc530;
        }
        recieve(λe3a205043f36) {
          if (null == λe3a205043f36 || "object" != typeof λe3a205043f36) return;
          let λ588fd3dc7b97 = λe3a205043f36[this.id];
          if (null == λ588fd3dc7b97 || "object" != typeof λ588fd3dc7b97) return;
          let λ81e7a82bc530 = λ588fd3dc7b97.$type;
          if ("response" === λ81e7a82bc530) {
            let λe3a205043f36 = λ588fd3dc7b97.$token, λ81e7a82bc530 = λ588fd3dc7b97.$data, λ489dd43c0983 = λ588fd3dc7b97.$error, λ6257c9774efd = this.promiseCallbacks.get(λe3a205043f36);
            if (!λ6257c9774efd) return;
            this.promiseCallbacks.delete(λe3a205043f36), void 0 !== λ489dd43c0983 ? λ6257c9774efd.reject(Error(λ489dd43c0983)) : λ6257c9774efd.resolve(λ81e7a82bc530);
          } else if ("request" === λ81e7a82bc530) {
            let λe3a205043f36 = λ588fd3dc7b97.$method, λ81e7a82bc530 = λ588fd3dc7b97.$args;
            this.methods[λe3a205043f36](λ81e7a82bc530).then(λe3a205043f36 => {
              this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ588fd3dc7b97.$token,
                  $data: λe3a205043f36?.[0]
                }
              }, λe3a205043f36?.[1]);
            }).catch(λe3a205043f36 => {
              console.error(λe3a205043f36), this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ588fd3dc7b97.$token,
                  $error: λe3a205043f36?.toString() || "Unknown error"
                }
              }, []);
            });
          }
        }
        call(λe3a205043f36, λ588fd3dc7b97, λ81e7a82bc530 = []) {
          let λ489dd43c0983 = this.counter++;
          return new Promise((λ6257c9774efd, λ8058c820485e) => {
            this.promiseCallbacks.set(λ489dd43c0983, {
              resolve: λ6257c9774efd,
              reject: λ8058c820485e
            }), this.sendRaw({
              [this.id]: {
                $type: "request",
                $method: λe3a205043f36,
                $args: λ588fd3dc7b97,
                $token: λ489dd43c0983
              }
            }, λ81e7a82bc530);
          });
        }
      }
    },
    423(λe3a205043f36, λ588fd3dc7b97, λ81e7a82bc530) {
      λ81e7a82bc530.d(λ588fd3dc7b97, {
        Cx: () => λ081e8195bb54,
        bw: () => λfd1a38be1ad3,
        cP: () => λ6257c9774efd,
        ht: () => λ96788391c153,
        pX: () => λ97f73425af5e
      });
      let {BareResponse: λ489dd43c0983, CookieJar: λ6257c9774efd, IncrementalHtmlRewriter: λ8058c820485e, Plugin: λfbb7da33b933, STUDYJETCLIENT: λ97f73425af5e, STUDYJETCLIENTNAME: λ0ff2e9fc8a98, StudyJetClient: λfd1a38be1ad3, StudyJetFetchHandler: λ7e6b0f0cec8d, StudyJetFetchTrackedClient: λ8d3b64b07e12, StudyJetHeaders: λeb795a99ff91, Tap: λ081e8195bb54, createLocationProxy: λ49df4c73b411, defaultConfig: λb09082c813f9, defaultConfigDev: λfea2d3e58fbb, flagEnabled: λ02c9a2e972df, getOwnPropertyDescriptorHandler: λ82b487ee76e3, getRewriter: λ4ce8f4fc8c85, getScriptBlockTypeString: λ62806270432d, htmlRules: λdeac621f2dab, isArchiveMimeType: λ75216902f304, isAudioOrVideoMimeType: λb2e1d658e41e, isFontMimeType: λa80a1ef302aa, isHtmlMimeType: λc4a539c86094, isImageMimeType: λ7da75c796591, isInlineDisplayableMimeType: λ1555c44852be, isJavascriptMimeType: λ3b86e763ed8e, isJavascriptMimeTypeEssenceMatch: λ035dc0595cff, isModuleScriptType: λc4a2b29324c6, isScriptType: λ6b6fdf9c13a5, isScriptableMimeType: λ5436d531ef8e, isXmlMimeType: λe91777191f31, isZipBasedMimeType: λdd26defeed94, isdedicated: λdf3503a342f7, isshared: λdc0bc95eaa93, issw: λed41cbe2c7ff, iswindow: λda99226a3b65, isworker: λ83612dc5af9c, parseMimeType: λ02022c592396, rewriteBlob: λe09683811089, rewriteCss: λaf3aaa2e41aa, rewriteHtml: λ022964bf264f, rewriteJs: λ086e08f8d1b1, rewriteJsInner: λ38f508e37ee1, rewriteSrcset: λ3d390456774d, rewriteUrl: λae8eddbc75f7, rewriteWorkers: λ6eee450d39ec, setWasm: λ96788391c153, unrewriteBlob: λac5bac14a7b2, unrewriteCss: λ4fb763da588a, unrewriteHtml: λ8514e927f0b7, unrewriteUrl: λ350773b8758e, versionInfo: λ41f280238d2b} = globalThis.$studyjet;
    }
  }, λ588fd3dc7b97 = {};
  function o(λ81e7a82bc530) {
    var λ489dd43c0983 = λ588fd3dc7b97[λ81e7a82bc530];
    if (void 0 !== λ489dd43c0983) return λ489dd43c0983.exports;
    var λ6257c9774efd = λ588fd3dc7b97[λ81e7a82bc530] = {
      exports: {}
    };
    return λe3a205043f36[λ81e7a82bc530](λ6257c9774efd, λ6257c9774efd.exports, o), λ6257c9774efd.exports;
  }
  o.d = (λe3a205043f36, λ588fd3dc7b97) => {
    for (var λ81e7a82bc530 in λ588fd3dc7b97) o.o(λ588fd3dc7b97, λ81e7a82bc530) && !o.o(λe3a205043f36, λ81e7a82bc530) && Object.defineProperty(λe3a205043f36, λ81e7a82bc530, {
      enumerable: !0,
      get: λ588fd3dc7b97[λ81e7a82bc530]
    });
  }, o.o = (λe3a205043f36, λ588fd3dc7b97) => Object.prototype.hasOwnProperty.call(λe3a205043f36, λ588fd3dc7b97), 
  o.r = λe3a205043f36 => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λe3a205043f36, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(λe3a205043f36, "__esModule", {
      value: !0
    });
  };
  var λ81e7a82bc530 = {};
  (() => {
    o.r(λ81e7a82bc530), o.d(λ81e7a82bc530, {
      load: () => l
    });
    var λe3a205043f36 = o(805), λ588fd3dc7b97 = o(286), λ489dd43c0983 = o(423);
    let λ6257c9774efd = MessagePort.prototype.postMessage, n = (λe3a205043f36, λ588fd3dc7b97, λ81e7a82bc530) => {
      λ6257c9774efd.call(λe3a205043f36, λ588fd3dc7b97, λ81e7a82bc530);
    };
    class a {
      port;
      readyResolve;
      readyPromise=new Promise(λe3a205043f36 => {
        this.readyResolve = λe3a205043f36;
      });
      ready=!1;
      async init() {
        await this.readyPromise, this.ready = !0;
      }
      rpc;
      constructor(λ588fd3dc7b97) {
        this.port = λ588fd3dc7b97, this.rpc = new λe3a205043f36.C({
          ready: async () => {
            this.readyResolve();
          }
        }, "transport", (λe3a205043f36, λ81e7a82bc530) => {
          n(λ588fd3dc7b97, λe3a205043f36, λ81e7a82bc530);
        }), λ588fd3dc7b97.onmessageerror = λe3a205043f36 => {
          console.error("onmessageerror (this should never happen!)", λe3a205043f36);
        }, λ588fd3dc7b97.onmessage = λe3a205043f36 => {
          this.rpc.recieve(λe3a205043f36.data);
        }, λ588fd3dc7b97.start();
      }
      connect(λe3a205043f36, λ588fd3dc7b97, λ81e7a82bc530, λ489dd43c0983, λ6257c9774efd, λ8058c820485e, λfbb7da33b933) {
        let λ97f73425af5e = new MessageChannel, λ0ff2e9fc8a98 = λ97f73425af5e.port1;
        return console.warn("connecting"), this.rpc.call("connect", {
          url: λe3a205043f36.href,
          protocols: λ588fd3dc7b97,
          requestHeaders: λ81e7a82bc530,
          port: λ97f73425af5e.port2
        }, [ λ97f73425af5e.port2 ]).then(λe3a205043f36 => {
          console.log(λe3a205043f36), "success" === λe3a205043f36.result ? λ489dd43c0983(λe3a205043f36.protocol, λe3a205043f36.extensions) : λfbb7da33b933(λe3a205043f36.error);
        }), λ0ff2e9fc8a98.onmessage = λe3a205043f36 => {
          let λ588fd3dc7b97 = λe3a205043f36.data;
          "data" === λ588fd3dc7b97.type ? λ6257c9774efd(λ588fd3dc7b97.data) : "close" === λ588fd3dc7b97.type && λ8058c820485e(λ588fd3dc7b97.code, λ588fd3dc7b97.reason);
        }, λ0ff2e9fc8a98.onmessageerror = λe3a205043f36 => {
          console.error("onmessageerror (this should never happen!)", λe3a205043f36), λfbb7da33b933("Message error in transport port");
        }, [ λe3a205043f36 => {
          n(λ0ff2e9fc8a98, {
            type: "data",
            data: λe3a205043f36
          }, λe3a205043f36 instanceof ArrayBuffer ? [ λe3a205043f36 ] : []);
        }, λe3a205043f36 => {
          n(λ0ff2e9fc8a98, {
            type: "close",
            code: λe3a205043f36
          });
        } ];
      }
      async request(λe3a205043f36, λ588fd3dc7b97, λ81e7a82bc530, λ489dd43c0983, λ6257c9774efd) {
        return await this.rpc.call("request", {
          remote: λe3a205043f36.href,
          method: λ588fd3dc7b97,
          body: λ81e7a82bc530,
          headers: λ489dd43c0983
        });
      }
      async sendSetCookie(λe3a205043f36, λ588fd3dc7b97 = {}) {
        await this.rpc.call("sendSetCookie", {
          cookies: λe3a205043f36.map(({url: λe3a205043f36, cookie: λ588fd3dc7b97}) => ({
            url: λe3a205043f36.href,
            cookie: λ588fd3dc7b97
          })),
          options: λ588fd3dc7b97
        });
      }
    }
    let λ8058c820485e = navigator.serviceWorker.controller;
    function l(λe3a205043f36) {
      if (λ489dd43c0983.pX in globalThis) return void globalThis[λ489dd43c0983.pX].syncDocumentInit({
        initHeaders: λe3a205043f36.initHeaders,
        history: λe3a205043f36.history,
        cookies: λe3a205043f36.cookies
      });
      if (!("WASM" in self)) throw Error("WASM not found in global scope!");
      let λ588fd3dc7b97 = Uint8Array.from(atob(self.WASM), λe3a205043f36 => λe3a205043f36.charCodeAt(0));
      delete self.WASM, (0, λ489dd43c0983.ht)(λ588fd3dc7b97), new h(globalThis, λe3a205043f36);
    }
    class h {
      global;
      init;
      client;
      cookieJar;
      transport;
      handleServiceWorkerCookieMessage;
      constructor(λe3a205043f36, λ588fd3dc7b97) {
        this.global = λe3a205043f36, this.init = λ588fd3dc7b97;
        const λ81e7a82bc530 = new MessageChannel;
        this.transport = new a(λ81e7a82bc530.port1), λ8058c820485e?.postMessage({
          $sw$initRemoteTransport: {
            port: λ81e7a82bc530.port2,
            prefix: this.init.prefix.href
          }
        }, [ λ81e7a82bc530.port2 ]), this.cookieJar = new λ489dd43c0983.cP, this.cookieJar.load(this.init.cookies), 
        this.handleServiceWorkerCookieMessage = λe3a205043f36 => {
          if (!λe3a205043f36.data?.$controller$setCookie || "object" != typeof λe3a205043f36.data.$controller$setCookie) return;
          let λ588fd3dc7b97 = λe3a205043f36.data.$controller$setCookie;
          if (λ588fd3dc7b97.controllerId && !String(this.init.prefix?.pathname || "").includes("/" + λ588fd3dc7b97.controllerId + "/")) return;
          if (λ588fd3dc7b97.options?.clear && this.cookieJar.clear(), Array.isArray(λ588fd3dc7b97.cookies)) {
            for (let λe3a205043f36 of λ588fd3dc7b97.cookies) if ("string" == typeof λe3a205043f36?.url && "string" == typeof λe3a205043f36.cookie) try {
              this.cookieJar.setCookies(λe3a205043f36.cookie, new URL(λe3a205043f36.url));
            } catch {
              console.error("Failed to set cookie", λe3a205043f36);
            }
          }
          if ("string" == typeof λ588fd3dc7b97.id) {
            let λe3a205043f36 = navigator.serviceWorker?.controller ?? λ8058c820485e;
            λe3a205043f36?.postMessage({
              $sw$setCookieDone: {
                id: λ588fd3dc7b97.id
              }
            });
          }
        }, navigator.serviceWorker?.addEventListener("message", this.handleServiceWorkerCookieMessage), 
        this.injectStudyJet();
      }
      injectStudyJet() {
        let λe3a205043f36 = this.global.frameElement;
        λe3a205043f36 && !λe3a205043f36.name && (window.name = λe3a205043f36.name = `${Array(8).fill(0).map(() => Math.floor(36 * Math.random()).toString(36)).join("")}`);
        let λ81e7a82bc530 = λe3a205043f36?.[λ588fd3dc7b97.I], λ6257c9774efd = !0;
        if (!λ81e7a82bc530) {
          λ6257c9774efd = !1;
          let λe3a205043f36 = this.global.window;
          for (;λe3a205043f36.parent !== λe3a205043f36; ) {
            let λ6257c9774efd = λe3a205043f36[λ489dd43c0983.pX];
            if (!λ6257c9774efd) {
              λe3a205043f36 = λe3a205043f36.parent.window;
              continue;
            }
            let λ8058c820485e = λ6257c9774efd.descriptors.get("window.frameElement", λe3a205043f36);
            if (λ8058c820485e && λ8058c820485e[λ588fd3dc7b97.I]) {
              λ81e7a82bc530 = λ8058c820485e[λ588fd3dc7b97.I];
              break;
            }
            λe3a205043f36 = λe3a205043f36.parent.window;
          }
        }
        let λ8058c820485e = {
          config: this.init.sjconfig,
          prefix: this.init.prefix,
          cookieJar: this.cookieJar,
          interface: {
            getInjectScripts: this.init.yieldGetInjectScripts(this.init.config, this.init.sjconfig, this.init.prefix, this.cookieJar, this.init.codecEncode, this.init.codecDecode),
            codecEncode: this.init.codecEncode,
            codecDecode: this.init.codecDecode
          }
        };
        this.client = new λ489dd43c0983.bw(this.global, {
          context: λ8058c820485e,
          transport: this.transport,
          sendSetCookie: async (λe3a205043f36, λ588fd3dc7b97) => {
            await this.transport.sendSetCookie(λe3a205043f36, λ588fd3dc7b97);
          },
          shouldBlockMessageEvent: () => !1,
          hookSubcontext: λe3a205043f36 => new h(λe3a205043f36, {
            ...this.init,
            cookies: this.cookieJar.dump()
          }).client,
          initHeaders: this.init.initHeaders,
          history: this.init.history
        });
        let λfbb7da33b933 = {
          window: this.global.window,
          client: this.client,
          isTopLevel: λ6257c9774efd
        };
        λ81e7a82bc530 && λ489dd43c0983.Cx.dispatch(λ81e7a82bc530.hooks.init.pre, λfbb7da33b933, {}), 
        this.client.hook(), λ81e7a82bc530 && λ489dd43c0983.Cx.dispatch(λ81e7a82bc530.hooks.init.post, λfbb7da33b933, {});
      }
    }
  })(), $studyjetController = λ81e7a82bc530;
})();
