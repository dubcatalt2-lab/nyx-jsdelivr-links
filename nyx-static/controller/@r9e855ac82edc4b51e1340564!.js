var $studyjetController;

(() => {
  var λ1375d36f00cf = {
    286(λ1375d36f00cf, λ0e0845583acd, λ23f6a524a8a9) {
      λ23f6a524a8a9.d(λ0e0845583acd, {
        I: () => λ86d4307afac7
      });
      let λ86d4307afac7 = Symbol.for("\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x66\x72\x61\x6d\x65\x20\x68\x61\x6e\x64\x6c\x65");
    },
    805(λ1375d36f00cf, λ0e0845583acd, λ23f6a524a8a9) {
      λ23f6a524a8a9.d(λ0e0845583acd, {
        C: () => r
      });
      class r {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λ1375d36f00cf, λ0e0845583acd, λ23f6a524a8a9) {
          this.methods = λ1375d36f00cf, this.id = λ0e0845583acd, this.sendRaw = λ23f6a524a8a9;
        }
        recieve(λ1375d36f00cf) {
          if (null == λ1375d36f00cf || "\x6f\x62\x6a\x65\x63\x74" != typeof λ1375d36f00cf) return;
          let λ0e0845583acd = λ1375d36f00cf[this.id];
          if (null == λ0e0845583acd || "\x6f\x62\x6a\x65\x63\x74" != typeof λ0e0845583acd) return;
          let λ23f6a524a8a9 = λ0e0845583acd.$type;
          if ("\x72\x65\x73\x70\x6f\x6e\x73\x65" === λ23f6a524a8a9) {
            let λ1375d36f00cf = λ0e0845583acd.$token, λ23f6a524a8a9 = λ0e0845583acd.$data, λ86d4307afac7 = λ0e0845583acd.$error, λ2b98bfc3f41d = this.promiseCallbacks.get(λ1375d36f00cf);
            if (!λ2b98bfc3f41d) return;
            this.promiseCallbacks.delete(λ1375d36f00cf), void 0 !== λ86d4307afac7 ? λ2b98bfc3f41d.reject(Error(λ86d4307afac7)) : λ2b98bfc3f41d.resolve(λ23f6a524a8a9);
          } else if ("\x72\x65\x71\x75\x65\x73\x74" === λ23f6a524a8a9) {
            let λ1375d36f00cf = λ0e0845583acd.$method, λ23f6a524a8a9 = λ0e0845583acd.$args;
            this.methods[λ1375d36f00cf](λ23f6a524a8a9).then(λ1375d36f00cf => {
              this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ0e0845583acd.$token,
                  $data: λ1375d36f00cf?.[0]
                }
              }, λ1375d36f00cf?.[1]);
            }).catch(λ1375d36f00cf => {
              console.error(λ1375d36f00cf), this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ0e0845583acd.$token,
                  $error: λ1375d36f00cf?.toString() || "\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x65\x72\x72\x6f\x72"
                }
              }, []);
            });
          }
        }
        call(λ1375d36f00cf, λ0e0845583acd, λ23f6a524a8a9 = []) {
          let λ86d4307afac7 = this.counter++;
          return new Promise((λ2b98bfc3f41d, λ2af8e507dcb4) => {
            this.promiseCallbacks.set(λ86d4307afac7, {
              resolve: λ2b98bfc3f41d,
              reject: λ2af8e507dcb4
            }), this.sendRaw({
              [this.id]: {
                $type: "\x72\x65\x71\x75\x65\x73\x74",
                $method: λ1375d36f00cf,
                $args: λ0e0845583acd,
                $token: λ86d4307afac7
              }
            }, λ23f6a524a8a9);
          });
        }
      }
    },
    423(λ1375d36f00cf, λ0e0845583acd, λ23f6a524a8a9) {
      λ23f6a524a8a9.d(λ0e0845583acd, {
        Cx: () => λ8cd66332bd97,
        bw: () => λ67b95907f299,
        cP: () => λ2b98bfc3f41d,
        ht: () => λae6c6f34e982,
        pX: () => λ8d10a95e4844
      });
      let {BareResponse: λ86d4307afac7, CookieJar: λ2b98bfc3f41d, IncrementalHtmlRewriter: λ2af8e507dcb4, Plugin: λ5621cdd1e9f8, STUDYJETCLIENT: λ8d10a95e4844, STUDYJETCLIENTNAME: λ32fda0de2300, StudyJetClient: λ67b95907f299, StudyJetFetchHandler: λab75432d011d, StudyJetFetchTrackedClient: λc8ac8e8cc4cb, StudyJetHeaders: λd9e655658657, Tap: λ8cd66332bd97, \u{63}\u{72}\u{65}\u{61}\u{74}\u{65}\u{4c}\u{6f}\u{63}\u{61}\u{74}\u{69}\u{6f}\u{6e}\u{50}\u{72}\u{6f}\u{78}\u{79}: λb7cc6d48de2b, defaultConfig: λd4a4a2478441, defaultConfigDev: λc124a84875fc, flagEnabled: λ63e3ff6e4bb4, getOwnPropertyDescriptorHandler: λ67e29b903858, getRewriter: λbaeb7e7ab063, getScriptBlockTypeString: λ720d2132e4bc, htmlRules: λa3cfaf67189a, isArchiveMimeType: λf080856b5c6c, isAudioOrVideoMimeType: λ47b55e020a40, isFontMimeType: λ53b02d6721c4, isHtmlMimeType: λf194aa25a3ef, isImageMimeType: λfcdb7de82376, isInlineDisplayableMimeType: λ6d9d9251ab37, isJavascriptMimeType: λaba3d2767131, isJavascriptMimeTypeEssenceMatch: λ7b9d4b648bb9, isModuleScriptType: λ657a23725553, isScriptType: λ12291c5d80b3, isScriptableMimeType: λe8fc69e949d4, isXmlMimeType: λ2a4ba32448e2, isZipBasedMimeType: λ0a88cf124fb2, isdedicated: λ3c474a9807bf, isshared: λ5bdc27e2bf84, issw: λ439ef7de5a9c, iswindow: λ274f205bad20, isworker: λf58be221b232, parseMimeType: λ8189f07b3f26, rewriteBlob: λ9ea8929d4075, rewriteCss: λb91cb20ebd25, rewriteHtml: λf9f448491a3b, rewriteJs: λ5f6e7876983f, rewriteJsInner: λ7e75f7e8f457, rewriteSrcset: λbe7e842e6802, rewriteUrl: λa1026991b4d1, rewriteWorkers: λa57164745f89, setWasm: λae6c6f34e982, unrewriteBlob: λ45c4441c5674, unrewriteCss: λb7cde1071a68, unrewriteHtml: λ45643fa8294a, unrewriteUrl: λef1a296f03bb, versionInfo: λ073c933fe42d} = globalThis.$studyjet;
    }
  }, λ0e0845583acd = {};
  function o(λ23f6a524a8a9) {
    var λ86d4307afac7 = λ0e0845583acd[λ23f6a524a8a9];
    if (void 0 !== λ86d4307afac7) return λ86d4307afac7.exports;
    var λ2b98bfc3f41d = λ0e0845583acd[λ23f6a524a8a9] = {
      exports: {}
    };
    return λ1375d36f00cf[λ23f6a524a8a9](λ2b98bfc3f41d, λ2b98bfc3f41d.exports, o), λ2b98bfc3f41d.exports;
  }
  o.d = (λ1375d36f00cf, λ0e0845583acd) => {
    for (var λ23f6a524a8a9 in λ0e0845583acd) o.o(λ0e0845583acd, λ23f6a524a8a9) && !o.o(λ1375d36f00cf, λ23f6a524a8a9) && Object.defineProperty(λ1375d36f00cf, λ23f6a524a8a9, {
      enumerable: !0,
      get: λ0e0845583acd[λ23f6a524a8a9]
    });
  }, o.o = (λ1375d36f00cf, λ0e0845583acd) => Object.prototype.hasOwnProperty.call(λ1375d36f00cf, λ0e0845583acd), 
  o.r = λ1375d36f00cf => {
    "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λ1375d36f00cf, Symbol.toStringTag, {
      value: "\x4d\x6f\x64\x75\x6c\x65"
    }), Object.defineProperty(λ1375d36f00cf, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
      value: !0
    });
  };
  var λ23f6a524a8a9 = {};
  (() => {
    o.r(λ23f6a524a8a9), o.d(λ23f6a524a8a9, {
      load: () => l
    });
    var λ1375d36f00cf = o(805), λ0e0845583acd = o(286), λ86d4307afac7 = o(423);
    let λ2b98bfc3f41d = MessagePort.prototype.postMessage, n = (λ1375d36f00cf, λ0e0845583acd, λ23f6a524a8a9) => {
      λ2b98bfc3f41d.call(λ1375d36f00cf, λ0e0845583acd, λ23f6a524a8a9);
    };
    class a {
      port;
      readyResolve;
      readyPromise=new Promise(λ1375d36f00cf => {
        this.readyResolve = λ1375d36f00cf;
      });
      ready=!1;
      async init() {
        await this.readyPromise, this.ready = !0;
      }
      rpc;
      constructor(λ0e0845583acd) {
        this.port = λ0e0845583acd, this.rpc = new λ1375d36f00cf.C({
          ready: async () => {
            this.readyResolve();
          }
        }, "\x74\x72\x61\x6e\x73\x70\x6f\x72\x74", (λ1375d36f00cf, λ23f6a524a8a9) => {
          n(λ0e0845583acd, λ1375d36f00cf, λ23f6a524a8a9);
        }), λ0e0845583acd.onmessageerror = λ1375d36f00cf => {
          console.error("\x6f\x6e\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λ1375d36f00cf);
        }, λ0e0845583acd.onmessage = λ1375d36f00cf => {
          this.rpc.recieve(λ1375d36f00cf.data);
        }, λ0e0845583acd.start();
      }
      connect(λ1375d36f00cf, λ0e0845583acd, λ23f6a524a8a9, λ86d4307afac7, λ2b98bfc3f41d, λ2af8e507dcb4, λ5621cdd1e9f8) {
        let λ8d10a95e4844 = new MessageChannel, λ32fda0de2300 = λ8d10a95e4844.port1;
        return console.warn("\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6e\x67"), this.rpc.call("\x63\x6f\x6e\x6e\x65\x63\x74", {
          url: λ1375d36f00cf.href,
          protocols: λ0e0845583acd,
          requestHeaders: λ23f6a524a8a9,
          port: λ8d10a95e4844.port2
        }, [ λ8d10a95e4844.port2 ]).then(λ1375d36f00cf => {
          console.log(λ1375d36f00cf), "\x73\x75\x63\x63\x65\x73\x73" === λ1375d36f00cf.result ? λ86d4307afac7(λ1375d36f00cf.protocol, λ1375d36f00cf.extensions) : λ5621cdd1e9f8(λ1375d36f00cf.error);
        }), λ32fda0de2300.onmessage = λ1375d36f00cf => {
          let λ0e0845583acd = λ1375d36f00cf.data;
          "\x64\x61\x74\x61" === λ0e0845583acd.type ? λ2b98bfc3f41d(λ0e0845583acd.data) : "\x63\x6c\x6f\x73\x65" === λ0e0845583acd.type && λ2af8e507dcb4(λ0e0845583acd.code, λ0e0845583acd.reason);
        }, λ32fda0de2300.onmessageerror = λ1375d36f00cf => {
          console.error("\x6f\x6e\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λ1375d36f00cf), λ5621cdd1e9f8("\x4d\x65\x73\x73\x61\x67\x65\x20\x65\x72\x72\x6f\x72\x20\x69\x6e\x20\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x6f\x72\x74");
        }, [ λ1375d36f00cf => {
          n(λ32fda0de2300, {
            type: "\x64\x61\x74\x61",
            data: λ1375d36f00cf
          }, λ1375d36f00cf instanceof ArrayBuffer ? [ λ1375d36f00cf ] : []);
        }, λ1375d36f00cf => {
          n(λ32fda0de2300, {
            type: "\x63\x6c\x6f\x73\x65",
            code: λ1375d36f00cf
          });
        } ];
      }
      async request(λ1375d36f00cf, λ0e0845583acd, λ23f6a524a8a9, λ86d4307afac7, λ2b98bfc3f41d) {
        return await this.rpc.call("\x72\x65\x71\x75\x65\x73\x74", {
          remote: λ1375d36f00cf.href,
          method: λ0e0845583acd,
          body: λ23f6a524a8a9,
          headers: λ86d4307afac7
        });
      }
      async sendSetCookie(λ1375d36f00cf, λ0e0845583acd = {}) {
        await this.rpc.call("\x73\x65\x6e\x64\x53\x65\x74\x43\x6f\x6f\x6b\x69\x65", {
          cookies: λ1375d36f00cf.map(({url: λ1375d36f00cf, cookie: λ0e0845583acd}) => ({
            url: λ1375d36f00cf.href,
            cookie: λ0e0845583acd
          })),
          options: λ0e0845583acd
        });
      }
    }
    let λ2af8e507dcb4 = navigator.serviceWorker.controller;
    function l(λ1375d36f00cf) {
      if (λ86d4307afac7.pX in globalThis) return void globalThis[λ86d4307afac7.pX].syncDocumentInit({
        initHeaders: λ1375d36f00cf.initHeaders,
        history: λ1375d36f00cf.history,
        cookies: λ1375d36f00cf.cookies
      });
      if (!("\x57\x41\x53\x4d" in self)) throw Error("\x57\x41\x53\x4d\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x69\x6e\x20\x67\x6c\x6f\x62\x61\x6c\x20\x73\x63\x6f\x70\x65\x21");
      let λ0e0845583acd = Uint8Array.from(atob(self.WASM), λ1375d36f00cf => λ1375d36f00cf.charCodeAt(0));
      delete self.WASM, (0, λ86d4307afac7.ht)(λ0e0845583acd), new h(globalThis, λ1375d36f00cf);
    }
    class h {
      global;
      init;
      client;
      cookieJar;
      transport;
      handleServiceWorkerCookieMessage;
      constructor(λ1375d36f00cf, λ0e0845583acd) {
        this.global = λ1375d36f00cf, this.init = λ0e0845583acd;
        const λ23f6a524a8a9 = new MessageChannel;
        this.transport = new a(λ23f6a524a8a9.port1), λ2af8e507dcb4?.postMessage({
          $sw$initRemoteTransport: {
            port: λ23f6a524a8a9.port2,
            prefix: this.init.prefix.href
          }
        }, [ λ23f6a524a8a9.port2 ]), this.cookieJar = new λ86d4307afac7.cP, this.cookieJar.load(this.init.cookies), 
        this.handleServiceWorkerCookieMessage = λ1375d36f00cf => {
          if (!λ1375d36f00cf.data?.$controller$setCookie || "\x6f\x62\x6a\x65\x63\x74" != typeof λ1375d36f00cf.data.$controller$setCookie) return;
          let λ0e0845583acd = λ1375d36f00cf.data.$controller$setCookie;
          if (λ0e0845583acd.controllerId && !String(this.init.prefix?.pathname || "").includes("\x2f" + λ0e0845583acd.controllerId + "\x2f")) return;
          if (λ0e0845583acd.options?.clear && this.cookieJar.clear(), Array.isArray(λ0e0845583acd.cookies)) {
            for (let λ1375d36f00cf of λ0e0845583acd.cookies) if ("\x73\x74\x72\x69\x6e\x67" == typeof λ1375d36f00cf?.url && "\x73\x74\x72\x69\x6e\x67" == typeof λ1375d36f00cf.cookie) try {
              this.cookieJar.setCookies(λ1375d36f00cf.cookie, new URL(λ1375d36f00cf.url));
            } catch {
              console.error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x73\x65\x74\x20\x63\x6f\x6f\x6b\x69\x65", λ1375d36f00cf);
            }
          }
          if ("\x73\x74\x72\x69\x6e\x67" == typeof λ0e0845583acd.id) {
            let λ1375d36f00cf = navigator.serviceWorker?.controller ?? λ2af8e507dcb4;
            λ1375d36f00cf?.postMessage({
              $sw$setCookieDone: {
                id: λ0e0845583acd.id
              }
            });
          }
        }, navigator.serviceWorker?.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", this.handleServiceWorkerCookieMessage), 
        this.\u{69}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{74}\u{75}\u{64}\u{79}\u{4a}\u{65}\u{74}();
      }
      \u{69}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{74}\u{75}\u{64}\u{79}\u{4a}\u{65}\u{74}() {
        let λ1375d36f00cf = this.global.frameElement;
        λ1375d36f00cf && !λ1375d36f00cf.name && (window.name = λ1375d36f00cf.name = `${Array(8).fill(0).map(() => Math.floor(36 * Math.random()).toString(36)).join("")}`);
        let λ23f6a524a8a9 = λ1375d36f00cf?.[λ0e0845583acd.I], λ2b98bfc3f41d = !0;
        if (!λ23f6a524a8a9) {
          λ2b98bfc3f41d = !1;
          let λ1375d36f00cf = this.global.window;
          for (;λ1375d36f00cf.parent !== λ1375d36f00cf; ) {
            let λ2b98bfc3f41d = λ1375d36f00cf[λ86d4307afac7.pX];
            if (!λ2b98bfc3f41d) {
              λ1375d36f00cf = λ1375d36f00cf.parent.window;
              continue;
            }
            let λ2af8e507dcb4 = λ2b98bfc3f41d.descriptors.get("\x77\x69\x6e\x64\x6f\x77\x2e\x66\x72\x61\x6d\x65\x45\x6c\x65\x6d\x65\x6e\x74", λ1375d36f00cf);
            if (λ2af8e507dcb4 && λ2af8e507dcb4[λ0e0845583acd.I]) {
              λ23f6a524a8a9 = λ2af8e507dcb4[λ0e0845583acd.I];
              break;
            }
            λ1375d36f00cf = λ1375d36f00cf.parent.window;
          }
        }
        let λ2af8e507dcb4 = {
          config: this.init.sjconfig,
          prefix: this.init.prefix,
          cookieJar: this.cookieJar,
          interface: {
            \u{67}\u{65}\u{74}\u{49}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{63}\u{72}\u{69}\u{70}\u{74}\u{73}: this.init.\u{79}\u{69}\u{65}\u{6c}\u{64}\u{47}\u{65}\u{74}\u{49}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{63}\u{72}\u{69}\u{70}\u{74}\u{73}(this.init.config, this.init.sjconfig, this.init.prefix, this.cookieJar, this.init.codecEncode, this.init.codecDecode),
            codecEncode: this.init.codecEncode,
            codecDecode: this.init.codecDecode
          }
        };
        this.client = new λ86d4307afac7.bw(this.global, {
          context: λ2af8e507dcb4,
          transport: this.transport,
          sendSetCookie: async (λ1375d36f00cf, λ0e0845583acd) => {
            await this.transport.sendSetCookie(λ1375d36f00cf, λ0e0845583acd);
          },
          shouldBlockMessageEvent: () => !1,
          hookSubcontext: λ1375d36f00cf => new h(λ1375d36f00cf, {
            ...this.init,
            cookies: this.cookieJar.dump()
          }).client,
          initHeaders: this.init.initHeaders,
          history: this.init.history
        });
        let λ5621cdd1e9f8 = {
          window: this.global.window,
          client: this.client,
          isTopLevel: λ2b98bfc3f41d
        };
        λ23f6a524a8a9 && λ86d4307afac7.Cx.dispatch(λ23f6a524a8a9.hooks.init.pre, λ5621cdd1e9f8, {}), 
        this.client.hook(), λ23f6a524a8a9 && λ86d4307afac7.Cx.dispatch(λ23f6a524a8a9.hooks.init.post, λ5621cdd1e9f8, {});
      }
    }
  })(), $studyjetController = λ23f6a524a8a9;
})();
