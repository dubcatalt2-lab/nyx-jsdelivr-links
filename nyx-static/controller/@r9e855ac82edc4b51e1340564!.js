var $studyjetController;

(() => {
  var λ393b1d8881fb = {
    286(λ393b1d8881fb, λ99dee0066f79, λ5f4252104135) {
      λ5f4252104135.d(λ99dee0066f79, {
        I: () => λa4064f21f89f
      });
      let λa4064f21f89f = Symbol.for("\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x66\x72\x61\x6d\x65\x20\x68\x61\x6e\x64\x6c\x65");
    },
    805(λ393b1d8881fb, λ99dee0066f79, λ5f4252104135) {
      λ5f4252104135.d(λ99dee0066f79, {
        C: () => r
      });
      class r {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λ393b1d8881fb, λ99dee0066f79, λ5f4252104135) {
          this.methods = λ393b1d8881fb, this.id = λ99dee0066f79, this.sendRaw = λ5f4252104135;
        }
        recieve(λ393b1d8881fb) {
          if (null == λ393b1d8881fb || "\x6f\x62\x6a\x65\x63\x74" != typeof λ393b1d8881fb) return;
          let λ99dee0066f79 = λ393b1d8881fb[this.id];
          if (null == λ99dee0066f79 || "\x6f\x62\x6a\x65\x63\x74" != typeof λ99dee0066f79) return;
          let λ5f4252104135 = λ99dee0066f79.$type;
          if ("\x72\x65\x73\x70\x6f\x6e\x73\x65" === λ5f4252104135) {
            let λ393b1d8881fb = λ99dee0066f79.$token, λ5f4252104135 = λ99dee0066f79.$data, λa4064f21f89f = λ99dee0066f79.$error, λ83a00dffd94c = this.promiseCallbacks.get(λ393b1d8881fb);
            if (!λ83a00dffd94c) return;
            this.promiseCallbacks.delete(λ393b1d8881fb), void 0 !== λa4064f21f89f ? λ83a00dffd94c.reject(Error(λa4064f21f89f)) : λ83a00dffd94c.resolve(λ5f4252104135);
          } else if ("\x72\x65\x71\x75\x65\x73\x74" === λ5f4252104135) {
            let λ393b1d8881fb = λ99dee0066f79.$method, λ5f4252104135 = λ99dee0066f79.$args;
            this.methods[λ393b1d8881fb](λ5f4252104135).then(λ393b1d8881fb => {
              this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ99dee0066f79.$token,
                  $data: λ393b1d8881fb?.[0]
                }
              }, λ393b1d8881fb?.[1]);
            }).catch(λ393b1d8881fb => {
              console.error(λ393b1d8881fb), this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ99dee0066f79.$token,
                  $error: λ393b1d8881fb?.toString() || "\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x65\x72\x72\x6f\x72"
                }
              }, []);
            });
          }
        }
        call(λ393b1d8881fb, λ99dee0066f79, λ5f4252104135 = []) {
          let λa4064f21f89f = this.counter++;
          return new Promise((λ83a00dffd94c, λ38752def27b3) => {
            this.promiseCallbacks.set(λa4064f21f89f, {
              resolve: λ83a00dffd94c,
              reject: λ38752def27b3
            }), this.sendRaw({
              [this.id]: {
                $type: "\x72\x65\x71\x75\x65\x73\x74",
                $method: λ393b1d8881fb,
                $args: λ99dee0066f79,
                $token: λa4064f21f89f
              }
            }, λ5f4252104135);
          });
        }
      }
    },
    423(λ393b1d8881fb, λ99dee0066f79, λ5f4252104135) {
      λ5f4252104135.d(λ99dee0066f79, {
        Cx: () => λa6899c64258b,
        bw: () => λa9360d222d9f,
        cP: () => λ83a00dffd94c,
        ht: () => λ4f6a38e33f4c,
        pX: () => λc7f6d8a8fb2c
      });
      let {BareResponse: λa4064f21f89f, CookieJar: λ83a00dffd94c, IncrementalHtmlRewriter: λ38752def27b3, Plugin: λ3da9c87dbd9a, STUDYJETCLIENT: λc7f6d8a8fb2c, STUDYJETCLIENTNAME: λ8143a6b6a790, StudyJetClient: λa9360d222d9f, StudyJetFetchHandler: λ09e4f58eb9a1, StudyJetFetchTrackedClient: λ8832e19da365, StudyJetHeaders: λ0f067f5c6c12, Tap: λa6899c64258b, \u{63}\u{72}\u{65}\u{61}\u{74}\u{65}\u{4c}\u{6f}\u{63}\u{61}\u{74}\u{69}\u{6f}\u{6e}\u{50}\u{72}\u{6f}\u{78}\u{79}: λ7a63141cb9cc, defaultConfig: λ9c157f9c9967, defaultConfigDev: λ2f5fe9df717b, flagEnabled: λ1145609083ac, getOwnPropertyDescriptorHandler: λ6626f6f1a0da, getRewriter: λ76035e0da31f, getScriptBlockTypeString: λe56c20760093, htmlRules: λd7a71d506456, isArchiveMimeType: λeefc7e76a731, isAudioOrVideoMimeType: λ05633bdb33e9, isFontMimeType: λf0f913832899, isHtmlMimeType: λ75a9ec2e841c, isImageMimeType: λ4614e875f185, isInlineDisplayableMimeType: λbcca1488eb35, isJavascriptMimeType: λ23b95775a7f4, isJavascriptMimeTypeEssenceMatch: λb20b054fa6db, isModuleScriptType: λ098dc3173922, isScriptType: λe70da05c07a3, isScriptableMimeType: λ2ef58b88cfc5, isXmlMimeType: λ32ff14be7b61, isZipBasedMimeType: λfc13cd42c779, isdedicated: λ37853fb9c497, isshared: λ6c59c0604bd7, issw: λe08384f6d355, iswindow: λ106bef706be0, isworker: λ34b090e28454, parseMimeType: λ2f33b8d93131, rewriteBlob: λ853293e4681b, rewriteCss: λ8a3465a72b9d, rewriteHtml: λbc4c3c31398c, rewriteJs: λ14a5b699c9c1, rewriteJsInner: λ3dbb0cd54f4f, rewriteSrcset: λ192e173adc5c, rewriteUrl: λ68a88c16c8fd, rewriteWorkers: λ49f05ae87ef2, setWasm: λ4f6a38e33f4c, unrewriteBlob: λ54552090ae5b, unrewriteCss: λbbed676f2c38, unrewriteHtml: λ2e4844e427ee, unrewriteUrl: λ718acbedb6bb, versionInfo: λc0e75f04cbed} = globalThis.$studyjet;
    }
  }, λ99dee0066f79 = {};
  function o(λ5f4252104135) {
    var λa4064f21f89f = λ99dee0066f79[λ5f4252104135];
    if (void 0 !== λa4064f21f89f) return λa4064f21f89f.exports;
    var λ83a00dffd94c = λ99dee0066f79[λ5f4252104135] = {
      exports: {}
    };
    return λ393b1d8881fb[λ5f4252104135](λ83a00dffd94c, λ83a00dffd94c.exports, o), λ83a00dffd94c.exports;
  }
  o.d = (λ393b1d8881fb, λ99dee0066f79) => {
    for (var λ5f4252104135 in λ99dee0066f79) o.o(λ99dee0066f79, λ5f4252104135) && !o.o(λ393b1d8881fb, λ5f4252104135) && Object.defineProperty(λ393b1d8881fb, λ5f4252104135, {
      enumerable: !0,
      get: λ99dee0066f79[λ5f4252104135]
    });
  }, o.o = (λ393b1d8881fb, λ99dee0066f79) => Object.prototype.hasOwnProperty.call(λ393b1d8881fb, λ99dee0066f79), 
  o.r = λ393b1d8881fb => {
    "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λ393b1d8881fb, Symbol.toStringTag, {
      value: "\x4d\x6f\x64\x75\x6c\x65"
    }), Object.defineProperty(λ393b1d8881fb, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
      value: !0
    });
  };
  var λ5f4252104135 = {};
  (() => {
    o.r(λ5f4252104135), o.d(λ5f4252104135, {
      load: () => l
    });
    var λ393b1d8881fb = o(805), λ99dee0066f79 = o(286), λa4064f21f89f = o(423);
    let λ83a00dffd94c = MessagePort.prototype.postMessage, n = (λ393b1d8881fb, λ99dee0066f79, λ5f4252104135) => {
      λ83a00dffd94c.call(λ393b1d8881fb, λ99dee0066f79, λ5f4252104135);
    };
    class a {
      port;
      readyResolve;
      readyPromise=new Promise(λ393b1d8881fb => {
        this.readyResolve = λ393b1d8881fb;
      });
      ready=!1;
      async init() {
        await this.readyPromise, this.ready = !0;
      }
      rpc;
      constructor(λ99dee0066f79) {
        this.port = λ99dee0066f79, this.rpc = new λ393b1d8881fb.C({
          ready: async () => {
            this.readyResolve();
          }
        }, "\x74\x72\x61\x6e\x73\x70\x6f\x72\x74", (λ393b1d8881fb, λ5f4252104135) => {
          n(λ99dee0066f79, λ393b1d8881fb, λ5f4252104135);
        }), λ99dee0066f79.onmessageerror = λ393b1d8881fb => {
          console.error("\x6f\x6e\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λ393b1d8881fb);
        }, λ99dee0066f79.onmessage = λ393b1d8881fb => {
          this.rpc.recieve(λ393b1d8881fb.data);
        }, λ99dee0066f79.start();
      }
      connect(λ393b1d8881fb, λ99dee0066f79, λ5f4252104135, λa4064f21f89f, λ83a00dffd94c, λ38752def27b3, λ3da9c87dbd9a) {
        let λc7f6d8a8fb2c = new MessageChannel, λ8143a6b6a790 = λc7f6d8a8fb2c.port1;
        return console.warn("\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6e\x67"), this.rpc.call("\x63\x6f\x6e\x6e\x65\x63\x74", {
          url: λ393b1d8881fb.href,
          protocols: λ99dee0066f79,
          requestHeaders: λ5f4252104135,
          port: λc7f6d8a8fb2c.port2
        }, [ λc7f6d8a8fb2c.port2 ]).then(λ393b1d8881fb => {
          console.log(λ393b1d8881fb), "\x73\x75\x63\x63\x65\x73\x73" === λ393b1d8881fb.result ? λa4064f21f89f(λ393b1d8881fb.protocol, λ393b1d8881fb.extensions) : λ3da9c87dbd9a(λ393b1d8881fb.error);
        }), λ8143a6b6a790.onmessage = λ393b1d8881fb => {
          let λ99dee0066f79 = λ393b1d8881fb.data;
          "\x64\x61\x74\x61" === λ99dee0066f79.type ? λ83a00dffd94c(λ99dee0066f79.data) : "\x63\x6c\x6f\x73\x65" === λ99dee0066f79.type && λ38752def27b3(λ99dee0066f79.code, λ99dee0066f79.reason);
        }, λ8143a6b6a790.onmessageerror = λ393b1d8881fb => {
          console.error("\x6f\x6e\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λ393b1d8881fb), λ3da9c87dbd9a("\x4d\x65\x73\x73\x61\x67\x65\x20\x65\x72\x72\x6f\x72\x20\x69\x6e\x20\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x6f\x72\x74");
        }, [ λ393b1d8881fb => {
          n(λ8143a6b6a790, {
            type: "\x64\x61\x74\x61",
            data: λ393b1d8881fb
          }, λ393b1d8881fb instanceof ArrayBuffer ? [ λ393b1d8881fb ] : []);
        }, λ393b1d8881fb => {
          n(λ8143a6b6a790, {
            type: "\x63\x6c\x6f\x73\x65",
            code: λ393b1d8881fb
          });
        } ];
      }
      async request(λ393b1d8881fb, λ99dee0066f79, λ5f4252104135, λa4064f21f89f, λ83a00dffd94c) {
        return await this.rpc.call("\x72\x65\x71\x75\x65\x73\x74", {
          remote: λ393b1d8881fb.href,
          method: λ99dee0066f79,
          body: λ5f4252104135,
          headers: λa4064f21f89f
        });
      }
      async sendSetCookie(λ393b1d8881fb, λ99dee0066f79 = {}) {
        await this.rpc.call("\x73\x65\x6e\x64\x53\x65\x74\x43\x6f\x6f\x6b\x69\x65", {
          cookies: λ393b1d8881fb.map(({url: λ393b1d8881fb, cookie: λ99dee0066f79}) => ({
            url: λ393b1d8881fb.href,
            cookie: λ99dee0066f79
          })),
          options: λ99dee0066f79
        });
      }
    }
    let λ38752def27b3 = navigator.serviceWorker.controller;
    function l(λ393b1d8881fb) {
      if (λa4064f21f89f.pX in globalThis) return void globalThis[λa4064f21f89f.pX].syncDocumentInit({
        initHeaders: λ393b1d8881fb.initHeaders,
        history: λ393b1d8881fb.history,
        cookies: λ393b1d8881fb.cookies
      });
      if (!("\x57\x41\x53\x4d" in self)) throw Error("\x57\x41\x53\x4d\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x69\x6e\x20\x67\x6c\x6f\x62\x61\x6c\x20\x73\x63\x6f\x70\x65\x21");
      let λ99dee0066f79 = Uint8Array.from(atob(self.WASM), λ393b1d8881fb => λ393b1d8881fb.charCodeAt(0));
      delete self.WASM, (0, λa4064f21f89f.ht)(λ99dee0066f79), new h(globalThis, λ393b1d8881fb);
    }
    class h {
      global;
      init;
      client;
      cookieJar;
      transport;
      handleServiceWorkerCookieMessage;
      constructor(λ393b1d8881fb, λ99dee0066f79) {
        this.global = λ393b1d8881fb, this.init = λ99dee0066f79;
        const λ5f4252104135 = new MessageChannel;
        this.transport = new a(λ5f4252104135.port1), λ38752def27b3?.postMessage({
          $sw$initRemoteTransport: {
            port: λ5f4252104135.port2,
            prefix: this.init.prefix.href
          }
        }, [ λ5f4252104135.port2 ]), this.cookieJar = new λa4064f21f89f.cP, this.cookieJar.load(this.init.cookies), 
        this.handleServiceWorkerCookieMessage = λ393b1d8881fb => {
          if (!λ393b1d8881fb.data?.$controller$setCookie || "\x6f\x62\x6a\x65\x63\x74" != typeof λ393b1d8881fb.data.$controller$setCookie) return;
          let λ99dee0066f79 = λ393b1d8881fb.data.$controller$setCookie;
          if (λ99dee0066f79.controllerId && !String(this.init.prefix?.pathname || "").includes("\x2f" + λ99dee0066f79.controllerId + "\x2f")) return;
          if (λ99dee0066f79.options?.clear && this.cookieJar.clear(), Array.isArray(λ99dee0066f79.cookies)) {
            for (let λ393b1d8881fb of λ99dee0066f79.cookies) if ("\x73\x74\x72\x69\x6e\x67" == typeof λ393b1d8881fb?.url && "\x73\x74\x72\x69\x6e\x67" == typeof λ393b1d8881fb.cookie) try {
              this.cookieJar.setCookies(λ393b1d8881fb.cookie, new URL(λ393b1d8881fb.url));
            } catch {
              console.error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x73\x65\x74\x20\x63\x6f\x6f\x6b\x69\x65", λ393b1d8881fb);
            }
          }
          if ("\x73\x74\x72\x69\x6e\x67" == typeof λ99dee0066f79.id) {
            let λ393b1d8881fb = navigator.serviceWorker?.controller ?? λ38752def27b3;
            λ393b1d8881fb?.postMessage({
              $sw$setCookieDone: {
                id: λ99dee0066f79.id
              }
            });
          }
        }, navigator.serviceWorker?.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", this.handleServiceWorkerCookieMessage), 
        this.\u{69}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{74}\u{75}\u{64}\u{79}\u{4a}\u{65}\u{74}();
      }
      \u{69}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{74}\u{75}\u{64}\u{79}\u{4a}\u{65}\u{74}() {
        let λ393b1d8881fb = this.global.frameElement;
        λ393b1d8881fb && !λ393b1d8881fb.name && (window.name = λ393b1d8881fb.name = `${Array(8).fill(0).map(() => Math.floor(36 * Math.random()).toString(36)).join("")}`);
        let λ5f4252104135 = λ393b1d8881fb?.[λ99dee0066f79.I], λ83a00dffd94c = !0;
        if (!λ5f4252104135) {
          λ83a00dffd94c = !1;
          let λ393b1d8881fb = this.global.window;
          for (;λ393b1d8881fb.parent !== λ393b1d8881fb; ) {
            let λ83a00dffd94c = λ393b1d8881fb[λa4064f21f89f.pX];
            if (!λ83a00dffd94c) {
              λ393b1d8881fb = λ393b1d8881fb.parent.window;
              continue;
            }
            let λ38752def27b3 = λ83a00dffd94c.descriptors.get("\x77\x69\x6e\x64\x6f\x77\x2e\x66\x72\x61\x6d\x65\x45\x6c\x65\x6d\x65\x6e\x74", λ393b1d8881fb);
            if (λ38752def27b3 && λ38752def27b3[λ99dee0066f79.I]) {
              λ5f4252104135 = λ38752def27b3[λ99dee0066f79.I];
              break;
            }
            λ393b1d8881fb = λ393b1d8881fb.parent.window;
          }
        }
        let λ38752def27b3 = {
          config: this.init.sjconfig,
          prefix: this.init.prefix,
          cookieJar: this.cookieJar,
          interface: {
            \u{67}\u{65}\u{74}\u{49}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{63}\u{72}\u{69}\u{70}\u{74}\u{73}: this.init.\u{79}\u{69}\u{65}\u{6c}\u{64}\u{47}\u{65}\u{74}\u{49}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{63}\u{72}\u{69}\u{70}\u{74}\u{73}(this.init.config, this.init.sjconfig, this.init.prefix, this.cookieJar, this.init.codecEncode, this.init.codecDecode),
            codecEncode: this.init.codecEncode,
            codecDecode: this.init.codecDecode
          }
        };
        this.client = new λa4064f21f89f.bw(this.global, {
          context: λ38752def27b3,
          transport: this.transport,
          sendSetCookie: async (λ393b1d8881fb, λ99dee0066f79) => {
            await this.transport.sendSetCookie(λ393b1d8881fb, λ99dee0066f79);
          },
          shouldBlockMessageEvent: () => !1,
          hookSubcontext: λ393b1d8881fb => new h(λ393b1d8881fb, {
            ...this.init,
            cookies: this.cookieJar.dump()
          }).client,
          initHeaders: this.init.initHeaders,
          history: this.init.history
        });
        let λ3da9c87dbd9a = {
          window: this.global.window,
          client: this.client,
          isTopLevel: λ83a00dffd94c
        };
        λ5f4252104135 && λa4064f21f89f.Cx.dispatch(λ5f4252104135.hooks.init.pre, λ3da9c87dbd9a, {}), 
        this.client.hook(), λ5f4252104135 && λa4064f21f89f.Cx.dispatch(λ5f4252104135.hooks.init.post, λ3da9c87dbd9a, {});
      }
    }
  })(), $studyjetController = λ5f4252104135;
})();
