var $studyjetController;

(() => {
  var λd71854ba33ed = {
    286(λd71854ba33ed, λ600508e4577b, λ6d7ffc314a9e) {
      λ6d7ffc314a9e.d(λ600508e4577b, {
        I: () => λ5782bfd62e1e
      });
      let λ5782bfd62e1e = Symbol.for("controller frame handle");
    },
    805(λd71854ba33ed, λ600508e4577b, λ6d7ffc314a9e) {
      λ6d7ffc314a9e.d(λ600508e4577b, {
        C: () => r
      });
      class r {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λd71854ba33ed, λ600508e4577b, λ6d7ffc314a9e) {
          this.methods = λd71854ba33ed, this.id = λ600508e4577b, this.sendRaw = λ6d7ffc314a9e;
        }
        recieve(λd71854ba33ed) {
          if (null == λd71854ba33ed || "object" != typeof λd71854ba33ed) return;
          let λ600508e4577b = λd71854ba33ed[this.id];
          if (null == λ600508e4577b || "object" != typeof λ600508e4577b) return;
          let λ6d7ffc314a9e = λ600508e4577b.$type;
          if ("response" === λ6d7ffc314a9e) {
            let λd71854ba33ed = λ600508e4577b.$token, λ6d7ffc314a9e = λ600508e4577b.$data, λ5782bfd62e1e = λ600508e4577b.$error, λ729d9e32b1da = this.promiseCallbacks.get(λd71854ba33ed);
            if (!λ729d9e32b1da) return;
            this.promiseCallbacks.delete(λd71854ba33ed), void 0 !== λ5782bfd62e1e ? λ729d9e32b1da.reject(Error(λ5782bfd62e1e)) : λ729d9e32b1da.resolve(λ6d7ffc314a9e);
          } else if ("request" === λ6d7ffc314a9e) {
            let λd71854ba33ed = λ600508e4577b.$method, λ6d7ffc314a9e = λ600508e4577b.$args;
            this.methods[λd71854ba33ed](λ6d7ffc314a9e).then(λd71854ba33ed => {
              this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ600508e4577b.$token,
                  $data: λd71854ba33ed?.[0]
                }
              }, λd71854ba33ed?.[1]);
            }).catch(λd71854ba33ed => {
              console.error(λd71854ba33ed), this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ600508e4577b.$token,
                  $error: λd71854ba33ed?.toString() || "Unknown error"
                }
              }, []);
            });
          }
        }
        call(λd71854ba33ed, λ600508e4577b, λ6d7ffc314a9e = []) {
          let λ5782bfd62e1e = this.counter++;
          return new Promise((λ729d9e32b1da, λ98c4e0da4191) => {
            this.promiseCallbacks.set(λ5782bfd62e1e, {
              resolve: λ729d9e32b1da,
              reject: λ98c4e0da4191
            }), this.sendRaw({
              [this.id]: {
                $type: "request",
                $method: λd71854ba33ed,
                $args: λ600508e4577b,
                $token: λ5782bfd62e1e
              }
            }, λ6d7ffc314a9e);
          });
        }
      }
    },
    423(λd71854ba33ed, λ600508e4577b, λ6d7ffc314a9e) {
      λ6d7ffc314a9e.d(λ600508e4577b, {
        Cx: () => λ3e9fb8ec0cb6,
        bw: () => λ3b0645656467,
        cP: () => λ729d9e32b1da,
        ht: () => λ48698bc0e5f9,
        pX: () => λdcb196b9c5b5
      });
      let {BareResponse: λ5782bfd62e1e, CookieJar: λ729d9e32b1da, IncrementalHtmlRewriter: λ98c4e0da4191, Plugin: λ6ecc3dd8248e, STUDYJETCLIENT: λdcb196b9c5b5, STUDYJETCLIENTNAME: λa4d1b519db08, StudyJetClient: λ3b0645656467, StudyJetFetchHandler: λ32d6eafa2d57, StudyJetFetchTrackedClient: λ44b6632ea554, StudyJetHeaders: λ6d4d11a06f6b, Tap: λ3e9fb8ec0cb6, createLocationProxy: λ9b811dc20f9c, defaultConfig: λ5f7ed9889295, defaultConfigDev: λ34f28866755c, flagEnabled: λ1713700c57ae, getOwnPropertyDescriptorHandler: λ2237078575a4, getRewriter: λ77a8991944eb, getScriptBlockTypeString: λeae9472384ca, htmlRules: λ521da089dd51, isArchiveMimeType: λ2b1ab81037d0, isAudioOrVideoMimeType: λ91be73a6b146, isFontMimeType: λ9c921c331aca, isHtmlMimeType: λ396e3de76d1e, isImageMimeType: λf9bb5c315c3f, isInlineDisplayableMimeType: λ31eeb99eceb2, isJavascriptMimeType: λ7937f14ccd87, isJavascriptMimeTypeEssenceMatch: λ041c92541cc1, isModuleScriptType: λdd91af6094e7, isScriptType: λ0e6f0d2ad909, isScriptableMimeType: λ257f1b5b4b08, isXmlMimeType: λ0fdc8ed0bf0f, isZipBasedMimeType: λe52ff41d95b8, isdedicated: λ48f0ade963f2, isshared: λ7e6a6f734009, issw: λaeddbde22736, iswindow: λ50e2875e6f98, isworker: λ2b6eb7341a10, parseMimeType: λecbe7ffbd7d2, rewriteBlob: λa47608291bbc, rewriteCss: λ24a44b3d38fe, rewriteHtml: λ68fdd402cd7a, rewriteJs: λ1067bd6c0644, rewriteJsInner: λ39bfdcb79849, rewriteSrcset: λ0fb0e0f485f9, rewriteUrl: λ37af03d3f832, rewriteWorkers: λ4f3715b9e201, setWasm: λ48698bc0e5f9, unrewriteBlob: λ7acc30509557, unrewriteCss: λ8fc69c679761, unrewriteHtml: λ108380688740, unrewriteUrl: λ8487eedb6e3f, versionInfo: λ6dac28737a9a} = globalThis.$studyjet;
    }
  }, λ600508e4577b = {};
  function o(λ6d7ffc314a9e) {
    var λ5782bfd62e1e = λ600508e4577b[λ6d7ffc314a9e];
    if (void 0 !== λ5782bfd62e1e) return λ5782bfd62e1e.exports;
    var λ729d9e32b1da = λ600508e4577b[λ6d7ffc314a9e] = {
      exports: {}
    };
    return λd71854ba33ed[λ6d7ffc314a9e](λ729d9e32b1da, λ729d9e32b1da.exports, o), λ729d9e32b1da.exports;
  }
  o.d = (λd71854ba33ed, λ600508e4577b) => {
    for (var λ6d7ffc314a9e in λ600508e4577b) o.o(λ600508e4577b, λ6d7ffc314a9e) && !o.o(λd71854ba33ed, λ6d7ffc314a9e) && Object.defineProperty(λd71854ba33ed, λ6d7ffc314a9e, {
      enumerable: !0,
      get: λ600508e4577b[λ6d7ffc314a9e]
    });
  }, o.o = (λd71854ba33ed, λ600508e4577b) => Object.prototype.hasOwnProperty.call(λd71854ba33ed, λ600508e4577b), 
  o.r = λd71854ba33ed => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λd71854ba33ed, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(λd71854ba33ed, "__esModule", {
      value: !0
    });
  };
  var λ6d7ffc314a9e = {};
  (() => {
    o.r(λ6d7ffc314a9e), o.d(λ6d7ffc314a9e, {
      load: () => l
    });
    var λd71854ba33ed = o(805), λ600508e4577b = o(286), λ5782bfd62e1e = o(423);
    let λ729d9e32b1da = MessagePort.prototype.postMessage, n = (λd71854ba33ed, λ600508e4577b, λ6d7ffc314a9e) => {
      λ729d9e32b1da.call(λd71854ba33ed, λ600508e4577b, λ6d7ffc314a9e);
    };
    class a {
      port;
      readyResolve;
      readyPromise=new Promise(λd71854ba33ed => {
        this.readyResolve = λd71854ba33ed;
      });
      ready=!1;
      async init() {
        await this.readyPromise, this.ready = !0;
      }
      rpc;
      constructor(λ600508e4577b) {
        this.port = λ600508e4577b, this.rpc = new λd71854ba33ed.C({
          ready: async () => {
            this.readyResolve();
          }
        }, "transport", (λd71854ba33ed, λ6d7ffc314a9e) => {
          n(λ600508e4577b, λd71854ba33ed, λ6d7ffc314a9e);
        }), λ600508e4577b.onmessageerror = λd71854ba33ed => {
          console.error("onmessageerror (this should never happen!)", λd71854ba33ed);
        }, λ600508e4577b.onmessage = λd71854ba33ed => {
          this.rpc.recieve(λd71854ba33ed.data);
        }, λ600508e4577b.start();
      }
      connect(λd71854ba33ed, λ600508e4577b, λ6d7ffc314a9e, λ5782bfd62e1e, λ729d9e32b1da, λ98c4e0da4191, λ6ecc3dd8248e) {
        let λdcb196b9c5b5 = new MessageChannel, λa4d1b519db08 = λdcb196b9c5b5.port1;
        return console.warn("connecting"), this.rpc.call("connect", {
          url: λd71854ba33ed.href,
          protocols: λ600508e4577b,
          requestHeaders: λ6d7ffc314a9e,
          port: λdcb196b9c5b5.port2
        }, [ λdcb196b9c5b5.port2 ]).then(λd71854ba33ed => {
          console.log(λd71854ba33ed), "success" === λd71854ba33ed.result ? λ5782bfd62e1e(λd71854ba33ed.protocol, λd71854ba33ed.extensions) : λ6ecc3dd8248e(λd71854ba33ed.error);
        }), λa4d1b519db08.onmessage = λd71854ba33ed => {
          let λ600508e4577b = λd71854ba33ed.data;
          "data" === λ600508e4577b.type ? λ729d9e32b1da(λ600508e4577b.data) : "close" === λ600508e4577b.type && λ98c4e0da4191(λ600508e4577b.code, λ600508e4577b.reason);
        }, λa4d1b519db08.onmessageerror = λd71854ba33ed => {
          console.error("onmessageerror (this should never happen!)", λd71854ba33ed), λ6ecc3dd8248e("Message error in transport port");
        }, [ λd71854ba33ed => {
          n(λa4d1b519db08, {
            type: "data",
            data: λd71854ba33ed
          }, λd71854ba33ed instanceof ArrayBuffer ? [ λd71854ba33ed ] : []);
        }, λd71854ba33ed => {
          n(λa4d1b519db08, {
            type: "close",
            code: λd71854ba33ed
          });
        } ];
      }
      async request(λd71854ba33ed, λ600508e4577b, λ6d7ffc314a9e, λ5782bfd62e1e, λ729d9e32b1da) {
        return await this.rpc.call("request", {
          remote: λd71854ba33ed.href,
          method: λ600508e4577b,
          body: λ6d7ffc314a9e,
          headers: λ5782bfd62e1e
        });
      }
      async sendSetCookie(λd71854ba33ed, λ600508e4577b = {}) {
        await this.rpc.call("sendSetCookie", {
          cookies: λd71854ba33ed.map(({url: λd71854ba33ed, cookie: λ600508e4577b}) => ({
            url: λd71854ba33ed.href,
            cookie: λ600508e4577b
          })),
          options: λ600508e4577b
        });
      }
    }
    let λ98c4e0da4191 = navigator.serviceWorker.controller;
    function l(λd71854ba33ed) {
      if (λ5782bfd62e1e.pX in globalThis) return void globalThis[λ5782bfd62e1e.pX].syncDocumentInit({
        initHeaders: λd71854ba33ed.initHeaders,
        history: λd71854ba33ed.history,
        cookies: λd71854ba33ed.cookies
      });
      if (!("WASM" in self)) throw Error("WASM not found in global scope!");
      let λ600508e4577b = Uint8Array.from(atob(self.WASM), λd71854ba33ed => λd71854ba33ed.charCodeAt(0));
      delete self.WASM, (0, λ5782bfd62e1e.ht)(λ600508e4577b), new h(globalThis, λd71854ba33ed);
    }
    class h {
      global;
      init;
      client;
      cookieJar;
      transport;
      handleServiceWorkerCookieMessage;
      constructor(λd71854ba33ed, λ600508e4577b) {
        this.global = λd71854ba33ed, this.init = λ600508e4577b;
        const λ6d7ffc314a9e = new MessageChannel;
        this.transport = new a(λ6d7ffc314a9e.port1), λ98c4e0da4191?.postMessage({
          $sw$initRemoteTransport: {
            port: λ6d7ffc314a9e.port2,
            prefix: this.init.prefix.href
          }
        }, [ λ6d7ffc314a9e.port2 ]), this.cookieJar = new λ5782bfd62e1e.cP, this.cookieJar.load(this.init.cookies), 
        this.handleServiceWorkerCookieMessage = λd71854ba33ed => {
          if (!λd71854ba33ed.data?.$controller$setCookie || "object" != typeof λd71854ba33ed.data.$controller$setCookie) return;
          let λ600508e4577b = λd71854ba33ed.data.$controller$setCookie;
          if (λ600508e4577b.controllerId && !String(this.init.prefix?.pathname || "").includes("/" + λ600508e4577b.controllerId + "/")) return;
          if (λ600508e4577b.options?.clear && this.cookieJar.clear(), Array.isArray(λ600508e4577b.cookies)) {
            for (let λd71854ba33ed of λ600508e4577b.cookies) if ("string" == typeof λd71854ba33ed?.url && "string" == typeof λd71854ba33ed.cookie) try {
              this.cookieJar.setCookies(λd71854ba33ed.cookie, new URL(λd71854ba33ed.url));
            } catch {
              console.error("Failed to set cookie", λd71854ba33ed);
            }
          }
          if ("string" == typeof λ600508e4577b.id) {
            let λd71854ba33ed = navigator.serviceWorker?.controller ?? λ98c4e0da4191;
            λd71854ba33ed?.postMessage({
              $sw$setCookieDone: {
                id: λ600508e4577b.id
              }
            });
          }
        }, navigator.serviceWorker?.addEventListener("message", this.handleServiceWorkerCookieMessage), 
        this.injectStudyJet();
      }
      injectStudyJet() {
        let λd71854ba33ed = this.global.frameElement;
        λd71854ba33ed && !λd71854ba33ed.name && (window.name = λd71854ba33ed.name = `${Array(8).fill(0).map(() => Math.floor(36 * Math.random()).toString(36)).join("")}`);
        let λ6d7ffc314a9e = λd71854ba33ed?.[λ600508e4577b.I], λ729d9e32b1da = !0;
        if (!λ6d7ffc314a9e) {
          λ729d9e32b1da = !1;
          let λd71854ba33ed = this.global.window;
          for (;λd71854ba33ed.parent !== λd71854ba33ed; ) {
            let λ729d9e32b1da = λd71854ba33ed[λ5782bfd62e1e.pX];
            if (!λ729d9e32b1da) {
              λd71854ba33ed = λd71854ba33ed.parent.window;
              continue;
            }
            let λ98c4e0da4191 = λ729d9e32b1da.descriptors.get("window.frameElement", λd71854ba33ed);
            if (λ98c4e0da4191 && λ98c4e0da4191[λ600508e4577b.I]) {
              λ6d7ffc314a9e = λ98c4e0da4191[λ600508e4577b.I];
              break;
            }
            λd71854ba33ed = λd71854ba33ed.parent.window;
          }
        }
        let λ98c4e0da4191 = {
          config: this.init.sjconfig,
          prefix: this.init.prefix,
          cookieJar: this.cookieJar,
          interface: {
            getInjectScripts: this.init.yieldGetInjectScripts(this.init.config, this.init.sjconfig, this.init.prefix, this.cookieJar, this.init.codecEncode, this.init.codecDecode),
            codecEncode: this.init.codecEncode,
            codecDecode: this.init.codecDecode
          }
        };
        this.client = new λ5782bfd62e1e.bw(this.global, {
          context: λ98c4e0da4191,
          transport: this.transport,
          sendSetCookie: async (λd71854ba33ed, λ600508e4577b) => {
            await this.transport.sendSetCookie(λd71854ba33ed, λ600508e4577b);
          },
          shouldBlockMessageEvent: () => !1,
          hookSubcontext: λd71854ba33ed => new h(λd71854ba33ed, {
            ...this.init,
            cookies: this.cookieJar.dump()
          }).client,
          initHeaders: this.init.initHeaders,
          history: this.init.history
        });
        let λ6ecc3dd8248e = {
          window: this.global.window,
          client: this.client,
          isTopLevel: λ729d9e32b1da
        };
        λ6d7ffc314a9e && λ5782bfd62e1e.Cx.dispatch(λ6d7ffc314a9e.hooks.init.pre, λ6ecc3dd8248e, {}), 
        this.client.hook(), λ6d7ffc314a9e && λ5782bfd62e1e.Cx.dispatch(λ6d7ffc314a9e.hooks.init.post, λ6ecc3dd8248e, {});
      }
    }
  })(), $studyjetController = λ6d7ffc314a9e;
})();
