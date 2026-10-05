var $studyjetController;

(() => {
  var λ6d1f4e19a692 = {
    286(λ6d1f4e19a692, λ2542a875020e, λ2c4a188d15b7) {
      λ2c4a188d15b7.d(λ2542a875020e, {
        I: () => λ6ded42f77e4d
      });
      let λ6ded42f77e4d = Symbol.for("controller frame handle");
    },
    805(λ6d1f4e19a692, λ2542a875020e, λ2c4a188d15b7) {
      λ2c4a188d15b7.d(λ2542a875020e, {
        C: () => r
      });
      class r {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λ6d1f4e19a692, λ2542a875020e, λ2c4a188d15b7) {
          this.methods = λ6d1f4e19a692, this.id = λ2542a875020e, this.sendRaw = λ2c4a188d15b7;
        }
        recieve(λ6d1f4e19a692) {
          if (null == λ6d1f4e19a692 || "object" != typeof λ6d1f4e19a692) return;
          let λ2542a875020e = λ6d1f4e19a692[this.id];
          if (null == λ2542a875020e || "object" != typeof λ2542a875020e) return;
          let λ2c4a188d15b7 = λ2542a875020e.$type;
          if ("response" === λ2c4a188d15b7) {
            let λ6d1f4e19a692 = λ2542a875020e.$token, λ2c4a188d15b7 = λ2542a875020e.$data, λ6ded42f77e4d = λ2542a875020e.$error, λb0f4d9c6a925 = this.promiseCallbacks.get(λ6d1f4e19a692);
            if (!λb0f4d9c6a925) return;
            this.promiseCallbacks.delete(λ6d1f4e19a692), void 0 !== λ6ded42f77e4d ? λb0f4d9c6a925.reject(Error(λ6ded42f77e4d)) : λb0f4d9c6a925.resolve(λ2c4a188d15b7);
          } else if ("request" === λ2c4a188d15b7) {
            let λ6d1f4e19a692 = λ2542a875020e.$method, λ2c4a188d15b7 = λ2542a875020e.$args;
            this.methods[λ6d1f4e19a692](λ2c4a188d15b7).then(λ6d1f4e19a692 => {
              this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ2542a875020e.$token,
                  $data: λ6d1f4e19a692?.[0]
                }
              }, λ6d1f4e19a692?.[1]);
            }).catch(λ6d1f4e19a692 => {
              console.error(λ6d1f4e19a692), this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ2542a875020e.$token,
                  $error: λ6d1f4e19a692?.toString() || "Unknown error"
                }
              }, []);
            });
          }
        }
        call(λ6d1f4e19a692, λ2542a875020e, λ2c4a188d15b7 = []) {
          let λ6ded42f77e4d = this.counter++;
          return new Promise((λb0f4d9c6a925, λ408a3c07ed89) => {
            this.promiseCallbacks.set(λ6ded42f77e4d, {
              resolve: λb0f4d9c6a925,
              reject: λ408a3c07ed89
            }), this.sendRaw({
              [this.id]: {
                $type: "request",
                $method: λ6d1f4e19a692,
                $args: λ2542a875020e,
                $token: λ6ded42f77e4d
              }
            }, λ2c4a188d15b7);
          });
        }
      }
    },
    423(λ6d1f4e19a692, λ2542a875020e, λ2c4a188d15b7) {
      λ2c4a188d15b7.d(λ2542a875020e, {
        Cx: () => λ7cdc4d71d8e4,
        bw: () => λc3ebee704756,
        cP: () => λb0f4d9c6a925,
        ht: () => λb4543507fff3,
        pX: () => λ73f4f0064300
      });
      let {BareResponse: λ6ded42f77e4d, CookieJar: λb0f4d9c6a925, IncrementalHtmlRewriter: λ408a3c07ed89, Plugin: λ0fab89782c98, STUDYJETCLIENT: λ73f4f0064300, STUDYJETCLIENTNAME: λ038b43a173ab, StudyJetClient: λc3ebee704756, StudyJetFetchHandler: λ8475af48fbb2, StudyJetFetchTrackedClient: λ3e69a400a86a, StudyJetHeaders: λb5067c2b03e3, Tap: λ7cdc4d71d8e4, createLocationProxy: λ62e66e9f1253, defaultConfig: λ23b3967a0ea8, defaultConfigDev: λd62e148e2b1a, flagEnabled: λ47638023f7ac, getOwnPropertyDescriptorHandler: λc58b6c28bff2, getRewriter: λ1f7742db8604, getScriptBlockTypeString: λ87fddbc8d3b3, htmlRules: λ5030d2a1d6dd, isArchiveMimeType: λ2be2d1e42784, isAudioOrVideoMimeType: λ0d15a3a3337e, isFontMimeType: λe9134c46088f, isHtmlMimeType: λ95ffdcd8800e, isImageMimeType: λ1b1edcce6c9e, isInlineDisplayableMimeType: λ8dd4a338e02f, isJavascriptMimeType: λbe1df5e64b3e, isJavascriptMimeTypeEssenceMatch: λb85341421067, isModuleScriptType: λ47621e95f989, isScriptType: λ79c3e61bcbcd, isScriptableMimeType: λ8f4e182ee0cb, isXmlMimeType: λ7bd6f2fa7037, isZipBasedMimeType: λ5d3a79771e7b, isdedicated: λ935232dcaa75, isshared: λ9a2cbe487d94, issw: λ7b06ee409762, iswindow: λ9932b2a7c91e, isworker: λ197f8f5fef7a, parseMimeType: λ67fcd00271fe, rewriteBlob: λ014eb421f062, rewriteCss: λ8ad98bbc6704, rewriteHtml: λcbabf25be251, rewriteJs: λ330a96ba66e9, rewriteJsInner: λ87594446faf5, rewriteSrcset: λ528554df63ea, rewriteUrl: λ33fe62fefe16, rewriteWorkers: λ5db6b7eb54e2, setWasm: λb4543507fff3, unrewriteBlob: λec9939276999, unrewriteCss: λ61064e25a02b, unrewriteHtml: λa3c93b322140, unrewriteUrl: λ31974b493817, versionInfo: λ0c753f5cdd18} = globalThis.$studyjet;
    }
  }, λ2542a875020e = {};
  function o(λ2c4a188d15b7) {
    var λ6ded42f77e4d = λ2542a875020e[λ2c4a188d15b7];
    if (void 0 !== λ6ded42f77e4d) return λ6ded42f77e4d.exports;
    var λb0f4d9c6a925 = λ2542a875020e[λ2c4a188d15b7] = {
      exports: {}
    };
    return λ6d1f4e19a692[λ2c4a188d15b7](λb0f4d9c6a925, λb0f4d9c6a925.exports, o), λb0f4d9c6a925.exports;
  }
  o.d = (λ6d1f4e19a692, λ2542a875020e) => {
    for (var λ2c4a188d15b7 in λ2542a875020e) o.o(λ2542a875020e, λ2c4a188d15b7) && !o.o(λ6d1f4e19a692, λ2c4a188d15b7) && Object.defineProperty(λ6d1f4e19a692, λ2c4a188d15b7, {
      enumerable: !0,
      get: λ2542a875020e[λ2c4a188d15b7]
    });
  }, o.o = (λ6d1f4e19a692, λ2542a875020e) => Object.prototype.hasOwnProperty.call(λ6d1f4e19a692, λ2542a875020e), 
  o.r = λ6d1f4e19a692 => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λ6d1f4e19a692, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(λ6d1f4e19a692, "__esModule", {
      value: !0
    });
  };
  var λ2c4a188d15b7 = {};
  (() => {
    o.r(λ2c4a188d15b7), o.d(λ2c4a188d15b7, {
      load: () => l
    });
    var λ6d1f4e19a692 = o(805), λ2542a875020e = o(286), λ6ded42f77e4d = o(423);
    let λb0f4d9c6a925 = MessagePort.prototype.postMessage, n = (λ6d1f4e19a692, λ2542a875020e, λ2c4a188d15b7) => {
      λb0f4d9c6a925.call(λ6d1f4e19a692, λ2542a875020e, λ2c4a188d15b7);
    };
    class a {
      port;
      readyResolve;
      readyPromise=new Promise(λ6d1f4e19a692 => {
        this.readyResolve = λ6d1f4e19a692;
      });
      ready=!1;
      async init() {
        await this.readyPromise, this.ready = !0;
      }
      rpc;
      constructor(λ2542a875020e) {
        this.port = λ2542a875020e, this.rpc = new λ6d1f4e19a692.C({
          ready: async () => {
            this.readyResolve();
          }
        }, "transport", (λ6d1f4e19a692, λ2c4a188d15b7) => {
          n(λ2542a875020e, λ6d1f4e19a692, λ2c4a188d15b7);
        }), λ2542a875020e.onmessageerror = λ6d1f4e19a692 => {
          console.error("onmessageerror (this should never happen!)", λ6d1f4e19a692);
        }, λ2542a875020e.onmessage = λ6d1f4e19a692 => {
          this.rpc.recieve(λ6d1f4e19a692.data);
        }, λ2542a875020e.start();
      }
      connect(λ6d1f4e19a692, λ2542a875020e, λ2c4a188d15b7, λ6ded42f77e4d, λb0f4d9c6a925, λ408a3c07ed89, λ0fab89782c98) {
        let λ73f4f0064300 = new MessageChannel, λ038b43a173ab = λ73f4f0064300.port1;
        return console.warn("connecting"), this.rpc.call("connect", {
          url: λ6d1f4e19a692.href,
          protocols: λ2542a875020e,
          requestHeaders: λ2c4a188d15b7,
          port: λ73f4f0064300.port2
        }, [ λ73f4f0064300.port2 ]).then(λ6d1f4e19a692 => {
          console.log(λ6d1f4e19a692), "success" === λ6d1f4e19a692.result ? λ6ded42f77e4d(λ6d1f4e19a692.protocol, λ6d1f4e19a692.extensions) : λ0fab89782c98(λ6d1f4e19a692.error);
        }), λ038b43a173ab.onmessage = λ6d1f4e19a692 => {
          let λ2542a875020e = λ6d1f4e19a692.data;
          "data" === λ2542a875020e.type ? λb0f4d9c6a925(λ2542a875020e.data) : "close" === λ2542a875020e.type && λ408a3c07ed89(λ2542a875020e.code, λ2542a875020e.reason);
        }, λ038b43a173ab.onmessageerror = λ6d1f4e19a692 => {
          console.error("onmessageerror (this should never happen!)", λ6d1f4e19a692), λ0fab89782c98("Message error in transport port");
        }, [ λ6d1f4e19a692 => {
          n(λ038b43a173ab, {
            type: "data",
            data: λ6d1f4e19a692
          }, λ6d1f4e19a692 instanceof ArrayBuffer ? [ λ6d1f4e19a692 ] : []);
        }, λ6d1f4e19a692 => {
          n(λ038b43a173ab, {
            type: "close",
            code: λ6d1f4e19a692
          });
        } ];
      }
      async request(λ6d1f4e19a692, λ2542a875020e, λ2c4a188d15b7, λ6ded42f77e4d, λb0f4d9c6a925) {
        return await this.rpc.call("request", {
          remote: λ6d1f4e19a692.href,
          method: λ2542a875020e,
          body: λ2c4a188d15b7,
          headers: λ6ded42f77e4d
        });
      }
      async sendSetCookie(λ6d1f4e19a692, λ2542a875020e = {}) {
        await this.rpc.call("sendSetCookie", {
          cookies: λ6d1f4e19a692.map(({url: λ6d1f4e19a692, cookie: λ2542a875020e}) => ({
            url: λ6d1f4e19a692.href,
            cookie: λ2542a875020e
          })),
          options: λ2542a875020e
        });
      }
    }
    let λ408a3c07ed89 = navigator.serviceWorker.controller;
    function l(λ6d1f4e19a692) {
      if (λ6ded42f77e4d.pX in globalThis) return void globalThis[λ6ded42f77e4d.pX].syncDocumentInit({
        initHeaders: λ6d1f4e19a692.initHeaders,
        history: λ6d1f4e19a692.history,
        cookies: λ6d1f4e19a692.cookies
      });
      if (!("WASM" in self)) throw Error("WASM not found in global scope!");
      let λ2542a875020e = Uint8Array.from(atob(self.WASM), λ6d1f4e19a692 => λ6d1f4e19a692.charCodeAt(0));
      delete self.WASM, (0, λ6ded42f77e4d.ht)(λ2542a875020e), new h(globalThis, λ6d1f4e19a692);
    }
    class h {
      global;
      init;
      client;
      cookieJar;
      transport;
      handleServiceWorkerCookieMessage;
      constructor(λ6d1f4e19a692, λ2542a875020e) {
        this.global = λ6d1f4e19a692, this.init = λ2542a875020e;
        const λ2c4a188d15b7 = new MessageChannel;
        this.transport = new a(λ2c4a188d15b7.port1), λ408a3c07ed89?.postMessage({
          $sw$initRemoteTransport: {
            port: λ2c4a188d15b7.port2,
            prefix: this.init.prefix.href
          }
        }, [ λ2c4a188d15b7.port2 ]), this.cookieJar = new λ6ded42f77e4d.cP, this.cookieJar.load(this.init.cookies), 
        this.handleServiceWorkerCookieMessage = λ6d1f4e19a692 => {
          if (!λ6d1f4e19a692.data?.$controller$setCookie || "object" != typeof λ6d1f4e19a692.data.$controller$setCookie) return;
          let λ2542a875020e = λ6d1f4e19a692.data.$controller$setCookie;
          if (λ2542a875020e.controllerId && !String(this.init.prefix?.pathname || "").includes("/" + λ2542a875020e.controllerId + "/")) return;
          if (λ2542a875020e.options?.clear && this.cookieJar.clear(), Array.isArray(λ2542a875020e.cookies)) {
            for (let λ6d1f4e19a692 of λ2542a875020e.cookies) if ("string" == typeof λ6d1f4e19a692?.url && "string" == typeof λ6d1f4e19a692.cookie) try {
              this.cookieJar.setCookies(λ6d1f4e19a692.cookie, new URL(λ6d1f4e19a692.url));
            } catch {
              console.error("Failed to set cookie", λ6d1f4e19a692);
            }
          }
          if ("string" == typeof λ2542a875020e.id) {
            let λ6d1f4e19a692 = navigator.serviceWorker?.controller ?? λ408a3c07ed89;
            λ6d1f4e19a692?.postMessage({
              $sw$setCookieDone: {
                id: λ2542a875020e.id
              }
            });
          }
        }, navigator.serviceWorker?.addEventListener("message", this.handleServiceWorkerCookieMessage), 
        this.injectStudyJet();
      }
      injectStudyJet() {
        let λ6d1f4e19a692 = this.global.frameElement;
        λ6d1f4e19a692 && !λ6d1f4e19a692.name && (window.name = λ6d1f4e19a692.name = `${Array(8).fill(0).map(() => Math.floor(36 * Math.random()).toString(36)).join("")}`);
        let λ2c4a188d15b7 = λ6d1f4e19a692?.[λ2542a875020e.I], λb0f4d9c6a925 = !0;
        if (!λ2c4a188d15b7) {
          λb0f4d9c6a925 = !1;
          let λ6d1f4e19a692 = this.global.window;
          for (;λ6d1f4e19a692.parent !== λ6d1f4e19a692; ) {
            let λb0f4d9c6a925 = λ6d1f4e19a692[λ6ded42f77e4d.pX];
            if (!λb0f4d9c6a925) {
              λ6d1f4e19a692 = λ6d1f4e19a692.parent.window;
              continue;
            }
            let λ408a3c07ed89 = λb0f4d9c6a925.descriptors.get("window.frameElement", λ6d1f4e19a692);
            if (λ408a3c07ed89 && λ408a3c07ed89[λ2542a875020e.I]) {
              λ2c4a188d15b7 = λ408a3c07ed89[λ2542a875020e.I];
              break;
            }
            λ6d1f4e19a692 = λ6d1f4e19a692.parent.window;
          }
        }
        let λ408a3c07ed89 = {
          config: this.init.sjconfig,
          prefix: this.init.prefix,
          cookieJar: this.cookieJar,
          interface: {
            getInjectScripts: this.init.yieldGetInjectScripts(this.init.config, this.init.sjconfig, this.init.prefix, this.cookieJar, this.init.codecEncode, this.init.codecDecode),
            codecEncode: this.init.codecEncode,
            codecDecode: this.init.codecDecode
          }
        };
        this.client = new λ6ded42f77e4d.bw(this.global, {
          context: λ408a3c07ed89,
          transport: this.transport,
          sendSetCookie: async (λ6d1f4e19a692, λ2542a875020e) => {
            await this.transport.sendSetCookie(λ6d1f4e19a692, λ2542a875020e);
          },
          shouldBlockMessageEvent: () => !1,
          hookSubcontext: λ6d1f4e19a692 => new h(λ6d1f4e19a692, {
            ...this.init,
            cookies: this.cookieJar.dump()
          }).client,
          initHeaders: this.init.initHeaders,
          history: this.init.history
        });
        let λ0fab89782c98 = {
          window: this.global.window,
          client: this.client,
          isTopLevel: λb0f4d9c6a925
        };
        λ2c4a188d15b7 && λ6ded42f77e4d.Cx.dispatch(λ2c4a188d15b7.hooks.init.pre, λ0fab89782c98, {}), 
        this.client.hook(), λ2c4a188d15b7 && λ6ded42f77e4d.Cx.dispatch(λ2c4a188d15b7.hooks.init.post, λ0fab89782c98, {});
      }
    }
  })(), $studyjetController = λ2c4a188d15b7;
})();
