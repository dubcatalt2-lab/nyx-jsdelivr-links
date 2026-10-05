var $studyjetController;

(() => {
  var λ1d271092cde8 = {
    286(λ1d271092cde8, λ81e61142acd4, λcda4bc048d39) {
      λcda4bc048d39.d(λ81e61142acd4, {
        I: () => λ985990967413
      });
      let λ985990967413 = Symbol.for("controller frame handle");
    },
    805(λ1d271092cde8, λ81e61142acd4, λcda4bc048d39) {
      λcda4bc048d39.d(λ81e61142acd4, {
        C: () => r
      });
      class r {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λ1d271092cde8, λ81e61142acd4, λcda4bc048d39) {
          this.methods = λ1d271092cde8, this.id = λ81e61142acd4, this.sendRaw = λcda4bc048d39;
        }
        recieve(λ1d271092cde8) {
          if (null == λ1d271092cde8 || "object" != typeof λ1d271092cde8) return;
          let λ81e61142acd4 = λ1d271092cde8[this.id];
          if (null == λ81e61142acd4 || "object" != typeof λ81e61142acd4) return;
          let λcda4bc048d39 = λ81e61142acd4.$type;
          if ("response" === λcda4bc048d39) {
            let λ1d271092cde8 = λ81e61142acd4.$token, λcda4bc048d39 = λ81e61142acd4.$data, λ985990967413 = λ81e61142acd4.$error, λf04eb0ae03b4 = this.promiseCallbacks.get(λ1d271092cde8);
            if (!λf04eb0ae03b4) return;
            this.promiseCallbacks.delete(λ1d271092cde8), void 0 !== λ985990967413 ? λf04eb0ae03b4.reject(Error(λ985990967413)) : λf04eb0ae03b4.resolve(λcda4bc048d39);
          } else if ("request" === λcda4bc048d39) {
            let λ1d271092cde8 = λ81e61142acd4.$method, λcda4bc048d39 = λ81e61142acd4.$args;
            this.methods[λ1d271092cde8](λcda4bc048d39).then(λ1d271092cde8 => {
              this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ81e61142acd4.$token,
                  $data: λ1d271092cde8?.[0]
                }
              }, λ1d271092cde8?.[1]);
            }).catch(λ1d271092cde8 => {
              console.error(λ1d271092cde8), this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ81e61142acd4.$token,
                  $error: λ1d271092cde8?.toString() || "Unknown error"
                }
              }, []);
            });
          }
        }
        call(λ1d271092cde8, λ81e61142acd4, λcda4bc048d39 = []) {
          let λ985990967413 = this.counter++;
          return new Promise((λf04eb0ae03b4, λe3320c8d3533) => {
            this.promiseCallbacks.set(λ985990967413, {
              resolve: λf04eb0ae03b4,
              reject: λe3320c8d3533
            }), this.sendRaw({
              [this.id]: {
                $type: "request",
                $method: λ1d271092cde8,
                $args: λ81e61142acd4,
                $token: λ985990967413
              }
            }, λcda4bc048d39);
          });
        }
      }
    },
    423(λ1d271092cde8, λ81e61142acd4, λcda4bc048d39) {
      λcda4bc048d39.d(λ81e61142acd4, {
        Cx: () => λ582d7657acc1,
        bw: () => λ40c1c9321a8e,
        cP: () => λf04eb0ae03b4,
        ht: () => λaeb1cd6da6a2,
        pX: () => λf219c5b87fc8
      });
      let {BareResponse: λ985990967413, CookieJar: λf04eb0ae03b4, IncrementalHtmlRewriter: λe3320c8d3533, Plugin: λa9a62827ab89, STUDYJETCLIENT: λf219c5b87fc8, STUDYJETCLIENTNAME: λ876e1c1b1973, StudyJetClient: λ40c1c9321a8e, StudyJetFetchHandler: λda0a30f9ce50, StudyJetFetchTrackedClient: λ8684192c22db, StudyJetHeaders: λa5883904f423, Tap: λ582d7657acc1, createLocationProxy: λ5a41f6b7a04d, defaultConfig: λ0f60b274aa8d, defaultConfigDev: λ17b88a3895c5, flagEnabled: λc14931a4c56e, getOwnPropertyDescriptorHandler: λ592230d955cf, getRewriter: λdfbc3e51c3ed, getScriptBlockTypeString: λde9063f980ed, htmlRules: λe7f34a969501, isArchiveMimeType: λb9f7b1151502, isAudioOrVideoMimeType: λ03f8314f064f, isFontMimeType: λbdfc88da3ff8, isHtmlMimeType: λ1e316d6f2ba6, isImageMimeType: λb9f768695199, isInlineDisplayableMimeType: λfde35f8268a1, isJavascriptMimeType: λ9b7247e387ba, isJavascriptMimeTypeEssenceMatch: λa83afa732616, isModuleScriptType: λcad2b9257dbf, isScriptType: λfe1783247157, isScriptableMimeType: λ4b4b4e93e6b9, isXmlMimeType: λ51d111515286, isZipBasedMimeType: λ65dc72cb2bf1, isdedicated: λ14b655e81281, isshared: λ195475401753, issw: λ535f111a43dd, iswindow: λ1ae8b4607f04, isworker: λ760a80c0270c, parseMimeType: λ2367bb1ebf74, rewriteBlob: λf6c9b25bbcdd, rewriteCss: λd222d40b1ff1, rewriteHtml: λ123e7d8d4c09, rewriteJs: λ0ca06af54103, rewriteJsInner: λb925a7676ff5, rewriteSrcset: λ550158f32e54, rewriteUrl: λ50a5d0bc9f3c, rewriteWorkers: λ544b58c2d094, setWasm: λaeb1cd6da6a2, unrewriteBlob: λ879ab91a3821, unrewriteCss: λb8bd80ea2586, unrewriteHtml: λ89a932cdd3d3, unrewriteUrl: λe3becca90abc, versionInfo: λa2df1246fb1f} = globalThis.$studyjet;
    }
  }, λ81e61142acd4 = {};
  function o(λcda4bc048d39) {
    var λ985990967413 = λ81e61142acd4[λcda4bc048d39];
    if (void 0 !== λ985990967413) return λ985990967413.exports;
    var λf04eb0ae03b4 = λ81e61142acd4[λcda4bc048d39] = {
      exports: {}
    };
    return λ1d271092cde8[λcda4bc048d39](λf04eb0ae03b4, λf04eb0ae03b4.exports, o), λf04eb0ae03b4.exports;
  }
  o.d = (λ1d271092cde8, λ81e61142acd4) => {
    for (var λcda4bc048d39 in λ81e61142acd4) o.o(λ81e61142acd4, λcda4bc048d39) && !o.o(λ1d271092cde8, λcda4bc048d39) && Object.defineProperty(λ1d271092cde8, λcda4bc048d39, {
      enumerable: !0,
      get: λ81e61142acd4[λcda4bc048d39]
    });
  }, o.o = (λ1d271092cde8, λ81e61142acd4) => Object.prototype.hasOwnProperty.call(λ1d271092cde8, λ81e61142acd4), 
  o.r = λ1d271092cde8 => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λ1d271092cde8, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(λ1d271092cde8, "__esModule", {
      value: !0
    });
  };
  var λcda4bc048d39 = {};
  (() => {
    o.r(λcda4bc048d39), o.d(λcda4bc048d39, {
      load: () => l
    });
    var λ1d271092cde8 = o(805), λ81e61142acd4 = o(286), λ985990967413 = o(423);
    let λf04eb0ae03b4 = MessagePort.prototype.postMessage, n = (λ1d271092cde8, λ81e61142acd4, λcda4bc048d39) => {
      λf04eb0ae03b4.call(λ1d271092cde8, λ81e61142acd4, λcda4bc048d39);
    };
    class a {
      port;
      readyResolve;
      readyPromise=new Promise(λ1d271092cde8 => {
        this.readyResolve = λ1d271092cde8;
      });
      ready=!1;
      async init() {
        await this.readyPromise, this.ready = !0;
      }
      rpc;
      constructor(λ81e61142acd4) {
        this.port = λ81e61142acd4, this.rpc = new λ1d271092cde8.C({
          ready: async () => {
            this.readyResolve();
          }
        }, "transport", (λ1d271092cde8, λcda4bc048d39) => {
          n(λ81e61142acd4, λ1d271092cde8, λcda4bc048d39);
        }), λ81e61142acd4.onmessageerror = λ1d271092cde8 => {
          console.error("onmessageerror (this should never happen!)", λ1d271092cde8);
        }, λ81e61142acd4.onmessage = λ1d271092cde8 => {
          this.rpc.recieve(λ1d271092cde8.data);
        }, λ81e61142acd4.start();
      }
      connect(λ1d271092cde8, λ81e61142acd4, λcda4bc048d39, λ985990967413, λf04eb0ae03b4, λe3320c8d3533, λa9a62827ab89) {
        let λf219c5b87fc8 = new MessageChannel, λ876e1c1b1973 = λf219c5b87fc8.port1;
        return console.warn("connecting"), this.rpc.call("connect", {
          url: λ1d271092cde8.href,
          protocols: λ81e61142acd4,
          requestHeaders: λcda4bc048d39,
          port: λf219c5b87fc8.port2
        }, [ λf219c5b87fc8.port2 ]).then(λ1d271092cde8 => {
          console.log(λ1d271092cde8), "success" === λ1d271092cde8.result ? λ985990967413(λ1d271092cde8.protocol, λ1d271092cde8.extensions) : λa9a62827ab89(λ1d271092cde8.error);
        }), λ876e1c1b1973.onmessage = λ1d271092cde8 => {
          let λ81e61142acd4 = λ1d271092cde8.data;
          "data" === λ81e61142acd4.type ? λf04eb0ae03b4(λ81e61142acd4.data) : "close" === λ81e61142acd4.type && λe3320c8d3533(λ81e61142acd4.code, λ81e61142acd4.reason);
        }, λ876e1c1b1973.onmessageerror = λ1d271092cde8 => {
          console.error("onmessageerror (this should never happen!)", λ1d271092cde8), λa9a62827ab89("Message error in transport port");
        }, [ λ1d271092cde8 => {
          n(λ876e1c1b1973, {
            type: "data",
            data: λ1d271092cde8
          }, λ1d271092cde8 instanceof ArrayBuffer ? [ λ1d271092cde8 ] : []);
        }, λ1d271092cde8 => {
          n(λ876e1c1b1973, {
            type: "close",
            code: λ1d271092cde8
          });
        } ];
      }
      async request(λ1d271092cde8, λ81e61142acd4, λcda4bc048d39, λ985990967413, λf04eb0ae03b4) {
        return await this.rpc.call("request", {
          remote: λ1d271092cde8.href,
          method: λ81e61142acd4,
          body: λcda4bc048d39,
          headers: λ985990967413
        });
      }
      async sendSetCookie(λ1d271092cde8, λ81e61142acd4 = {}) {
        await this.rpc.call("sendSetCookie", {
          cookies: λ1d271092cde8.map(({url: λ1d271092cde8, cookie: λ81e61142acd4}) => ({
            url: λ1d271092cde8.href,
            cookie: λ81e61142acd4
          })),
          options: λ81e61142acd4
        });
      }
    }
    let λe3320c8d3533 = navigator.serviceWorker.controller;
    function l(λ1d271092cde8) {
      if (λ985990967413.pX in globalThis) return void globalThis[λ985990967413.pX].syncDocumentInit({
        initHeaders: λ1d271092cde8.initHeaders,
        history: λ1d271092cde8.history,
        cookies: λ1d271092cde8.cookies
      });
      if (!("WASM" in self)) throw Error("WASM not found in global scope!");
      let λ81e61142acd4 = Uint8Array.from(atob(self.WASM), λ1d271092cde8 => λ1d271092cde8.charCodeAt(0));
      delete self.WASM, (0, λ985990967413.ht)(λ81e61142acd4), new h(globalThis, λ1d271092cde8);
    }
    class h {
      global;
      init;
      client;
      cookieJar;
      transport;
      handleServiceWorkerCookieMessage;
      constructor(λ1d271092cde8, λ81e61142acd4) {
        this.global = λ1d271092cde8, this.init = λ81e61142acd4;
        const λcda4bc048d39 = new MessageChannel;
        this.transport = new a(λcda4bc048d39.port1), λe3320c8d3533?.postMessage({
          $sw$initRemoteTransport: {
            port: λcda4bc048d39.port2,
            prefix: this.init.prefix.href
          }
        }, [ λcda4bc048d39.port2 ]), this.cookieJar = new λ985990967413.cP, this.cookieJar.load(this.init.cookies), 
        this.handleServiceWorkerCookieMessage = λ1d271092cde8 => {
          if (!λ1d271092cde8.data?.$controller$setCookie || "object" != typeof λ1d271092cde8.data.$controller$setCookie) return;
          let λ81e61142acd4 = λ1d271092cde8.data.$controller$setCookie;
          if (λ81e61142acd4.controllerId && !String(this.init.prefix?.pathname || "").includes("/" + λ81e61142acd4.controllerId + "/")) return;
          if (λ81e61142acd4.options?.clear && this.cookieJar.clear(), Array.isArray(λ81e61142acd4.cookies)) {
            for (let λ1d271092cde8 of λ81e61142acd4.cookies) if ("string" == typeof λ1d271092cde8?.url && "string" == typeof λ1d271092cde8.cookie) try {
              this.cookieJar.setCookies(λ1d271092cde8.cookie, new URL(λ1d271092cde8.url));
            } catch {
              console.error("Failed to set cookie", λ1d271092cde8);
            }
          }
          if ("string" == typeof λ81e61142acd4.id) {
            let λ1d271092cde8 = navigator.serviceWorker?.controller ?? λe3320c8d3533;
            λ1d271092cde8?.postMessage({
              $sw$setCookieDone: {
                id: λ81e61142acd4.id
              }
            });
          }
        }, navigator.serviceWorker?.addEventListener("message", this.handleServiceWorkerCookieMessage), 
        this.injectStudyJet();
      }
      injectStudyJet() {
        let λ1d271092cde8 = this.global.frameElement;
        λ1d271092cde8 && !λ1d271092cde8.name && (window.name = λ1d271092cde8.name = `${Array(8).fill(0).map(() => Math.floor(36 * Math.random()).toString(36)).join("")}`);
        let λcda4bc048d39 = λ1d271092cde8?.[λ81e61142acd4.I], λf04eb0ae03b4 = !0;
        if (!λcda4bc048d39) {
          λf04eb0ae03b4 = !1;
          let λ1d271092cde8 = this.global.window;
          for (;λ1d271092cde8.parent !== λ1d271092cde8; ) {
            let λf04eb0ae03b4 = λ1d271092cde8[λ985990967413.pX];
            if (!λf04eb0ae03b4) {
              λ1d271092cde8 = λ1d271092cde8.parent.window;
              continue;
            }
            let λe3320c8d3533 = λf04eb0ae03b4.descriptors.get("window.frameElement", λ1d271092cde8);
            if (λe3320c8d3533 && λe3320c8d3533[λ81e61142acd4.I]) {
              λcda4bc048d39 = λe3320c8d3533[λ81e61142acd4.I];
              break;
            }
            λ1d271092cde8 = λ1d271092cde8.parent.window;
          }
        }
        let λe3320c8d3533 = {
          config: this.init.sjconfig,
          prefix: this.init.prefix,
          cookieJar: this.cookieJar,
          interface: {
            getInjectScripts: this.init.yieldGetInjectScripts(this.init.config, this.init.sjconfig, this.init.prefix, this.cookieJar, this.init.codecEncode, this.init.codecDecode),
            codecEncode: this.init.codecEncode,
            codecDecode: this.init.codecDecode
          }
        };
        this.client = new λ985990967413.bw(this.global, {
          context: λe3320c8d3533,
          transport: this.transport,
          sendSetCookie: async (λ1d271092cde8, λ81e61142acd4) => {
            await this.transport.sendSetCookie(λ1d271092cde8, λ81e61142acd4);
          },
          shouldBlockMessageEvent: () => !1,
          hookSubcontext: λ1d271092cde8 => new h(λ1d271092cde8, {
            ...this.init,
            cookies: this.cookieJar.dump()
          }).client,
          initHeaders: this.init.initHeaders,
          history: this.init.history
        });
        let λa9a62827ab89 = {
          window: this.global.window,
          client: this.client,
          isTopLevel: λf04eb0ae03b4
        };
        λcda4bc048d39 && λ985990967413.Cx.dispatch(λcda4bc048d39.hooks.init.pre, λa9a62827ab89, {}), 
        this.client.hook(), λcda4bc048d39 && λ985990967413.Cx.dispatch(λcda4bc048d39.hooks.init.post, λa9a62827ab89, {});
      }
    }
  })(), $studyjetController = λcda4bc048d39;
})();
