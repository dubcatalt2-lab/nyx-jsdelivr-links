var $studyjetController;

(() => {
  var λ15d080fe39da = {
    286(λ15d080fe39da, λ9876934f1baa, λ6acf3bfb6240) {
      λ6acf3bfb6240.d(λ9876934f1baa, {
        I: () => λ6ffb365448fd
      });
      let λ6ffb365448fd = Symbol.for("controller frame handle");
    },
    805(λ15d080fe39da, λ9876934f1baa, λ6acf3bfb6240) {
      λ6acf3bfb6240.d(λ9876934f1baa, {
        C: () => r
      });
      class r {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λ15d080fe39da, λ9876934f1baa, λ6acf3bfb6240) {
          this.methods = λ15d080fe39da, this.id = λ9876934f1baa, this.sendRaw = λ6acf3bfb6240;
        }
        recieve(λ15d080fe39da) {
          if (null == λ15d080fe39da || "object" != typeof λ15d080fe39da) return;
          let λ9876934f1baa = λ15d080fe39da[this.id];
          if (null == λ9876934f1baa || "object" != typeof λ9876934f1baa) return;
          let λ6acf3bfb6240 = λ9876934f1baa.$type;
          if ("response" === λ6acf3bfb6240) {
            let λ15d080fe39da = λ9876934f1baa.$token, λ6acf3bfb6240 = λ9876934f1baa.$data, λ6ffb365448fd = λ9876934f1baa.$error, λ98a52ed5640a = this.promiseCallbacks.get(λ15d080fe39da);
            if (!λ98a52ed5640a) return;
            this.promiseCallbacks.delete(λ15d080fe39da), void 0 !== λ6ffb365448fd ? λ98a52ed5640a.reject(Error(λ6ffb365448fd)) : λ98a52ed5640a.resolve(λ6acf3bfb6240);
          } else if ("request" === λ6acf3bfb6240) {
            let λ15d080fe39da = λ9876934f1baa.$method, λ6acf3bfb6240 = λ9876934f1baa.$args;
            this.methods[λ15d080fe39da](λ6acf3bfb6240).then(λ15d080fe39da => {
              this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ9876934f1baa.$token,
                  $data: λ15d080fe39da?.[0]
                }
              }, λ15d080fe39da?.[1]);
            }).catch(λ15d080fe39da => {
              console.error(λ15d080fe39da), this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ9876934f1baa.$token,
                  $error: λ15d080fe39da?.toString() || "Unknown error"
                }
              }, []);
            });
          }
        }
        call(λ15d080fe39da, λ9876934f1baa, λ6acf3bfb6240 = []) {
          let λ6ffb365448fd = this.counter++;
          return new Promise((λ98a52ed5640a, λ718398962884) => {
            this.promiseCallbacks.set(λ6ffb365448fd, {
              resolve: λ98a52ed5640a,
              reject: λ718398962884
            }), this.sendRaw({
              [this.id]: {
                $type: "request",
                $method: λ15d080fe39da,
                $args: λ9876934f1baa,
                $token: λ6ffb365448fd
              }
            }, λ6acf3bfb6240);
          });
        }
      }
    },
    423(λ15d080fe39da, λ9876934f1baa, λ6acf3bfb6240) {
      λ6acf3bfb6240.d(λ9876934f1baa, {
        Cx: () => λa1ce77c7bc38,
        bw: () => λa2fbb136d5ae,
        cP: () => λ98a52ed5640a,
        ht: () => λc30a69877c7c,
        pX: () => λbfcb63d15c4d
      });
      let {BareResponse: λ6ffb365448fd, CookieJar: λ98a52ed5640a, IncrementalHtmlRewriter: λ718398962884, Plugin: λe3b911d6ba81, STUDYJETCLIENT: λbfcb63d15c4d, STUDYJETCLIENTNAME: λb0bdbe492fb7, StudyJetClient: λa2fbb136d5ae, StudyJetFetchHandler: λ498ca9d71f95, StudyJetFetchTrackedClient: λ7e01bb5f6ce5, StudyJetHeaders: λ81aa73ab27ac, Tap: λa1ce77c7bc38, createLocationProxy: λd9aa7418826e, defaultConfig: λ24f46593a057, defaultConfigDev: λbafae440a83a, flagEnabled: λf99af8a7e08c, getOwnPropertyDescriptorHandler: λ710cb4a07680, getRewriter: λ2d9795eb2120, getScriptBlockTypeString: λ04bc0844746a, htmlRules: λcf5476f76448, isArchiveMimeType: λ723cd5572cff, isAudioOrVideoMimeType: λ2e8a6b35db95, isFontMimeType: λa73878518954, isHtmlMimeType: λ20cad1a043af, isImageMimeType: λ761a077e819c, isInlineDisplayableMimeType: λcdcbbf52a783, isJavascriptMimeType: λb7b76358a94d, isJavascriptMimeTypeEssenceMatch: λ3d5caca88e22, isModuleScriptType: λ81596233fb2d, isScriptType: λadebf2bacd9f, isScriptableMimeType: λ36bfc98f57cc, isXmlMimeType: λc3557a99241c, isZipBasedMimeType: λf78af127b694, isdedicated: λf688ff1d00f3, isshared: λ2159494de11e, issw: λ111a53f78cfa, iswindow: λ81998526d0b2, isworker: λf9e5966c92c6, parseMimeType: λ03258ca6f31e, rewriteBlob: λde2b63d47dc4, rewriteCss: λ19aab2adcdd7, rewriteHtml: λe106074e54bb, rewriteJs: λ82a84e052230, rewriteJsInner: λ4a30363ca2c6, rewriteSrcset: λ1bd8c764c177, rewriteUrl: λ6451383c0068, rewriteWorkers: λc19e72ebef0c, setWasm: λc30a69877c7c, unrewriteBlob: λa5af60aa3b1d, unrewriteCss: λ5ff2e8b5763c, unrewriteHtml: λ4afeb3916813, unrewriteUrl: λ84b8296464fb, versionInfo: λ2b0ffc535a5e} = globalThis.$studyjet;
    }
  }, λ9876934f1baa = {};
  function o(λ6acf3bfb6240) {
    var λ6ffb365448fd = λ9876934f1baa[λ6acf3bfb6240];
    if (void 0 !== λ6ffb365448fd) return λ6ffb365448fd.exports;
    var λ98a52ed5640a = λ9876934f1baa[λ6acf3bfb6240] = {
      exports: {}
    };
    return λ15d080fe39da[λ6acf3bfb6240](λ98a52ed5640a, λ98a52ed5640a.exports, o), λ98a52ed5640a.exports;
  }
  o.d = (λ15d080fe39da, λ9876934f1baa) => {
    for (var λ6acf3bfb6240 in λ9876934f1baa) o.o(λ9876934f1baa, λ6acf3bfb6240) && !o.o(λ15d080fe39da, λ6acf3bfb6240) && Object.defineProperty(λ15d080fe39da, λ6acf3bfb6240, {
      enumerable: !0,
      get: λ9876934f1baa[λ6acf3bfb6240]
    });
  }, o.o = (λ15d080fe39da, λ9876934f1baa) => Object.prototype.hasOwnProperty.call(λ15d080fe39da, λ9876934f1baa), 
  o.r = λ15d080fe39da => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λ15d080fe39da, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(λ15d080fe39da, "__esModule", {
      value: !0
    });
  };
  var λ6acf3bfb6240 = {};
  (() => {
    o.r(λ6acf3bfb6240), o.d(λ6acf3bfb6240, {
      load: () => l
    });
    var λ15d080fe39da = o(805), λ9876934f1baa = o(286), λ6ffb365448fd = o(423);
    let λ98a52ed5640a = MessagePort.prototype.postMessage, n = (λ15d080fe39da, λ9876934f1baa, λ6acf3bfb6240) => {
      λ98a52ed5640a.call(λ15d080fe39da, λ9876934f1baa, λ6acf3bfb6240);
    };
    class a {
      port;
      readyResolve;
      readyPromise=new Promise(λ15d080fe39da => {
        this.readyResolve = λ15d080fe39da;
      });
      ready=!1;
      async init() {
        await this.readyPromise, this.ready = !0;
      }
      rpc;
      constructor(λ9876934f1baa) {
        this.port = λ9876934f1baa, this.rpc = new λ15d080fe39da.C({
          ready: async () => {
            this.readyResolve();
          }
        }, "transport", (λ15d080fe39da, λ6acf3bfb6240) => {
          n(λ9876934f1baa, λ15d080fe39da, λ6acf3bfb6240);
        }), λ9876934f1baa.onmessageerror = λ15d080fe39da => {
          console.error("onmessageerror (this should never happen!)", λ15d080fe39da);
        }, λ9876934f1baa.onmessage = λ15d080fe39da => {
          this.rpc.recieve(λ15d080fe39da.data);
        }, λ9876934f1baa.start();
      }
      connect(λ15d080fe39da, λ9876934f1baa, λ6acf3bfb6240, λ6ffb365448fd, λ98a52ed5640a, λ718398962884, λe3b911d6ba81) {
        let λbfcb63d15c4d = new MessageChannel, λb0bdbe492fb7 = λbfcb63d15c4d.port1;
        return console.warn("connecting"), this.rpc.call("connect", {
          url: λ15d080fe39da.href,
          protocols: λ9876934f1baa,
          requestHeaders: λ6acf3bfb6240,
          port: λbfcb63d15c4d.port2
        }, [ λbfcb63d15c4d.port2 ]).then(λ15d080fe39da => {
          console.log(λ15d080fe39da), "success" === λ15d080fe39da.result ? λ6ffb365448fd(λ15d080fe39da.protocol, λ15d080fe39da.extensions) : λe3b911d6ba81(λ15d080fe39da.error);
        }), λb0bdbe492fb7.onmessage = λ15d080fe39da => {
          let λ9876934f1baa = λ15d080fe39da.data;
          "data" === λ9876934f1baa.type ? λ98a52ed5640a(λ9876934f1baa.data) : "close" === λ9876934f1baa.type && λ718398962884(λ9876934f1baa.code, λ9876934f1baa.reason);
        }, λb0bdbe492fb7.onmessageerror = λ15d080fe39da => {
          console.error("onmessageerror (this should never happen!)", λ15d080fe39da), λe3b911d6ba81("Message error in transport port");
        }, [ λ15d080fe39da => {
          n(λb0bdbe492fb7, {
            type: "data",
            data: λ15d080fe39da
          }, λ15d080fe39da instanceof ArrayBuffer ? [ λ15d080fe39da ] : []);
        }, λ15d080fe39da => {
          n(λb0bdbe492fb7, {
            type: "close",
            code: λ15d080fe39da
          });
        } ];
      }
      async request(λ15d080fe39da, λ9876934f1baa, λ6acf3bfb6240, λ6ffb365448fd, λ98a52ed5640a) {
        return await this.rpc.call("request", {
          remote: λ15d080fe39da.href,
          method: λ9876934f1baa,
          body: λ6acf3bfb6240,
          headers: λ6ffb365448fd
        });
      }
      async sendSetCookie(λ15d080fe39da, λ9876934f1baa = {}) {
        await this.rpc.call("sendSetCookie", {
          cookies: λ15d080fe39da.map(({url: λ15d080fe39da, cookie: λ9876934f1baa}) => ({
            url: λ15d080fe39da.href,
            cookie: λ9876934f1baa
          })),
          options: λ9876934f1baa
        });
      }
    }
    let λ718398962884 = navigator.serviceWorker.controller;
    function l(λ15d080fe39da) {
      if (λ6ffb365448fd.pX in globalThis) return void globalThis[λ6ffb365448fd.pX].syncDocumentInit({
        initHeaders: λ15d080fe39da.initHeaders,
        history: λ15d080fe39da.history,
        cookies: λ15d080fe39da.cookies
      });
      if (!("WASM" in self)) throw Error("WASM not found in global scope!");
      let λ9876934f1baa = Uint8Array.from(atob(self.WASM), λ15d080fe39da => λ15d080fe39da.charCodeAt(0));
      delete self.WASM, (0, λ6ffb365448fd.ht)(λ9876934f1baa), new h(globalThis, λ15d080fe39da);
    }
    class h {
      global;
      init;
      client;
      cookieJar;
      transport;
      handleServiceWorkerCookieMessage;
      constructor(λ15d080fe39da, λ9876934f1baa) {
        this.global = λ15d080fe39da, this.init = λ9876934f1baa;
        const λ6acf3bfb6240 = new MessageChannel;
        this.transport = new a(λ6acf3bfb6240.port1), λ718398962884?.postMessage({
          $sw$initRemoteTransport: {
            port: λ6acf3bfb6240.port2,
            prefix: this.init.prefix.href
          }
        }, [ λ6acf3bfb6240.port2 ]), this.cookieJar = new λ6ffb365448fd.cP, this.cookieJar.load(this.init.cookies), 
        this.handleServiceWorkerCookieMessage = λ15d080fe39da => {
          if (!λ15d080fe39da.data?.$controller$setCookie || "object" != typeof λ15d080fe39da.data.$controller$setCookie) return;
          let λ9876934f1baa = λ15d080fe39da.data.$controller$setCookie;
          if (λ9876934f1baa.controllerId && !String(this.init.prefix?.pathname || "").includes("/" + λ9876934f1baa.controllerId + "/")) return;
          if (λ9876934f1baa.options?.clear && this.cookieJar.clear(), Array.isArray(λ9876934f1baa.cookies)) {
            for (let λ15d080fe39da of λ9876934f1baa.cookies) if ("string" == typeof λ15d080fe39da?.url && "string" == typeof λ15d080fe39da.cookie) try {
              this.cookieJar.setCookies(λ15d080fe39da.cookie, new URL(λ15d080fe39da.url));
            } catch {
              console.error("Failed to set cookie", λ15d080fe39da);
            }
          }
          if ("string" == typeof λ9876934f1baa.id) {
            let λ15d080fe39da = navigator.serviceWorker?.controller ?? λ718398962884;
            λ15d080fe39da?.postMessage({
              $sw$setCookieDone: {
                id: λ9876934f1baa.id
              }
            });
          }
        }, navigator.serviceWorker?.addEventListener("message", this.handleServiceWorkerCookieMessage), 
        this.injectStudyJet();
      }
      injectStudyJet() {
        let λ15d080fe39da = this.global.frameElement;
        λ15d080fe39da && !λ15d080fe39da.name && (window.name = λ15d080fe39da.name = `${Array(8).fill(0).map(() => Math.floor(36 * Math.random()).toString(36)).join("")}`);
        let λ6acf3bfb6240 = λ15d080fe39da?.[λ9876934f1baa.I], λ98a52ed5640a = !0;
        if (!λ6acf3bfb6240) {
          λ98a52ed5640a = !1;
          let λ15d080fe39da = this.global.window;
          for (;λ15d080fe39da.parent !== λ15d080fe39da; ) {
            let λ98a52ed5640a = λ15d080fe39da[λ6ffb365448fd.pX];
            if (!λ98a52ed5640a) {
              λ15d080fe39da = λ15d080fe39da.parent.window;
              continue;
            }
            let λ718398962884 = λ98a52ed5640a.descriptors.get("window.frameElement", λ15d080fe39da);
            if (λ718398962884 && λ718398962884[λ9876934f1baa.I]) {
              λ6acf3bfb6240 = λ718398962884[λ9876934f1baa.I];
              break;
            }
            λ15d080fe39da = λ15d080fe39da.parent.window;
          }
        }
        let λ718398962884 = {
          config: this.init.sjconfig,
          prefix: this.init.prefix,
          cookieJar: this.cookieJar,
          interface: {
            getInjectScripts: this.init.yieldGetInjectScripts(this.init.config, this.init.sjconfig, this.init.prefix, this.cookieJar, this.init.codecEncode, this.init.codecDecode),
            codecEncode: this.init.codecEncode,
            codecDecode: this.init.codecDecode
          }
        };
        this.client = new λ6ffb365448fd.bw(this.global, {
          context: λ718398962884,
          transport: this.transport,
          sendSetCookie: async (λ15d080fe39da, λ9876934f1baa) => {
            await this.transport.sendSetCookie(λ15d080fe39da, λ9876934f1baa);
          },
          shouldBlockMessageEvent: () => !1,
          hookSubcontext: λ15d080fe39da => new h(λ15d080fe39da, {
            ...this.init,
            cookies: this.cookieJar.dump()
          }).client,
          initHeaders: this.init.initHeaders,
          history: this.init.history
        });
        let λe3b911d6ba81 = {
          window: this.global.window,
          client: this.client,
          isTopLevel: λ98a52ed5640a
        };
        λ6acf3bfb6240 && λ6ffb365448fd.Cx.dispatch(λ6acf3bfb6240.hooks.init.pre, λe3b911d6ba81, {}), 
        this.client.hook(), λ6acf3bfb6240 && λ6ffb365448fd.Cx.dispatch(λ6acf3bfb6240.hooks.init.post, λe3b911d6ba81, {});
      }
    }
  })(), $studyjetController = λ6acf3bfb6240;
})();
