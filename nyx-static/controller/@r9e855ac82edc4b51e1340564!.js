var $studyjetController;

(() => {
  var λdc55d6451e1b = {
    286(λdc55d6451e1b, λfdf1176fa9db, λadcbaac3b3f4) {
      λadcbaac3b3f4.d(λfdf1176fa9db, {
        I: () => λb0a6c0fe9861
      });
      let λb0a6c0fe9861 = Symbol.for("\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x66\x72\x61\x6d\x65\x20\x68\x61\x6e\x64\x6c\x65");
    },
    805(λdc55d6451e1b, λfdf1176fa9db, λadcbaac3b3f4) {
      λadcbaac3b3f4.d(λfdf1176fa9db, {
        C: () => r
      });
      class r {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λdc55d6451e1b, λfdf1176fa9db, λadcbaac3b3f4) {
          this.methods = λdc55d6451e1b, this.id = λfdf1176fa9db, this.sendRaw = λadcbaac3b3f4;
        }
        recieve(λdc55d6451e1b) {
          if (null == λdc55d6451e1b || "\x6f\x62\x6a\x65\x63\x74" != typeof λdc55d6451e1b) return;
          let λfdf1176fa9db = λdc55d6451e1b[this.id];
          if (null == λfdf1176fa9db || "\x6f\x62\x6a\x65\x63\x74" != typeof λfdf1176fa9db) return;
          let λadcbaac3b3f4 = λfdf1176fa9db.$type;
          if ("\x72\x65\x73\x70\x6f\x6e\x73\x65" === λadcbaac3b3f4) {
            let λdc55d6451e1b = λfdf1176fa9db.$token, λadcbaac3b3f4 = λfdf1176fa9db.$data, λb0a6c0fe9861 = λfdf1176fa9db.$error, λd13e53d2f3ef = this.promiseCallbacks.get(λdc55d6451e1b);
            if (!λd13e53d2f3ef) return;
            this.promiseCallbacks.delete(λdc55d6451e1b), void 0 !== λb0a6c0fe9861 ? λd13e53d2f3ef.reject(Error(λb0a6c0fe9861)) : λd13e53d2f3ef.resolve(λadcbaac3b3f4);
          } else if ("\x72\x65\x71\x75\x65\x73\x74" === λadcbaac3b3f4) {
            let λdc55d6451e1b = λfdf1176fa9db.$method, λadcbaac3b3f4 = λfdf1176fa9db.$args;
            this.methods[λdc55d6451e1b](λadcbaac3b3f4).then(λdc55d6451e1b => {
              this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λfdf1176fa9db.$token,
                  $data: λdc55d6451e1b?.[0]
                }
              }, λdc55d6451e1b?.[1]);
            }).catch(λdc55d6451e1b => {
              console.error(λdc55d6451e1b), this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λfdf1176fa9db.$token,
                  $error: λdc55d6451e1b?.toString() || "\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x65\x72\x72\x6f\x72"
                }
              }, []);
            });
          }
        }
        call(λdc55d6451e1b, λfdf1176fa9db, λadcbaac3b3f4 = []) {
          let λb0a6c0fe9861 = this.counter++;
          return new Promise((λd13e53d2f3ef, λ59536407f21b) => {
            this.promiseCallbacks.set(λb0a6c0fe9861, {
              resolve: λd13e53d2f3ef,
              reject: λ59536407f21b
            }), this.sendRaw({
              [this.id]: {
                $type: "\x72\x65\x71\x75\x65\x73\x74",
                $method: λdc55d6451e1b,
                $args: λfdf1176fa9db,
                $token: λb0a6c0fe9861
              }
            }, λadcbaac3b3f4);
          });
        }
      }
    },
    423(λdc55d6451e1b, λfdf1176fa9db, λadcbaac3b3f4) {
      λadcbaac3b3f4.d(λfdf1176fa9db, {
        Cx: () => λ3d003d02a8d4,
        bw: () => λc1a7925cda99,
        cP: () => λd13e53d2f3ef,
        ht: () => λb938bcbd714b,
        pX: () => λ692a1dc6df41
      });
      let {BareResponse: λb0a6c0fe9861, CookieJar: λd13e53d2f3ef, IncrementalHtmlRewriter: λ59536407f21b, Plugin: λ4f308f034e8a, STUDYJETCLIENT: λ692a1dc6df41, STUDYJETCLIENTNAME: λc157ca240012, StudyJetClient: λc1a7925cda99, StudyJetFetchHandler: λ546fcbec1b3e, StudyJetFetchTrackedClient: λ0ed1ac5d7f40, StudyJetHeaders: λ135edb5990d8, Tap: λ3d003d02a8d4, \u{63}\u{72}\u{65}\u{61}\u{74}\u{65}\u{4c}\u{6f}\u{63}\u{61}\u{74}\u{69}\u{6f}\u{6e}\u{50}\u{72}\u{6f}\u{78}\u{79}: λ47ab42a43faf, defaultConfig: λ5270fe2c5683, defaultConfigDev: λff2d22be88f0, flagEnabled: λ2d6338a0cec7, getOwnPropertyDescriptorHandler: λb033e7a45c6a, getRewriter: λb041bd49a073, getScriptBlockTypeString: λ4cde5492f8a0, htmlRules: λa4253be22834, isArchiveMimeType: λd9889367e56b, isAudioOrVideoMimeType: λe334844675cf, isFontMimeType: λf56924b94f68, isHtmlMimeType: λc614b757b5e9, isImageMimeType: λd66c08df6a9f, isInlineDisplayableMimeType: λ6c96abd5edba, isJavascriptMimeType: λ472ad9fc1c61, isJavascriptMimeTypeEssenceMatch: λ4159b195ece9, isModuleScriptType: λe6ff53e2dbe3, isScriptType: λ46a7ac464a24, isScriptableMimeType: λ7a318d4e061a, isXmlMimeType: λbb55eb5cd113, isZipBasedMimeType: λa681135e73fa, isdedicated: λbf2dbd730672, isshared: λ871e1673099f, issw: λ013c47897c24, iswindow: λb93936e1fd79, isworker: λ29f3d7ddbf51, parseMimeType: λ78da9ee039db, rewriteBlob: λ82dcdbfdbb7b, rewriteCss: λ7359eaa0972d, rewriteHtml: λb7c8c418eba2, rewriteJs: λe94fd93e1715, rewriteJsInner: λbb02959c6960, rewriteSrcset: λb4ac92f1ddb9, rewriteUrl: λ5f8db746295c, rewriteWorkers: λf36c2409a1ab, setWasm: λb938bcbd714b, unrewriteBlob: λ3d14d72eb3e0, unrewriteCss: λc6f4616b4c39, unrewriteHtml: λ73e4162e7216, unrewriteUrl: λad839a8143f8, versionInfo: λe995cb0617f4} = globalThis.$studyjet;
    }
  }, λfdf1176fa9db = {};
  function o(λadcbaac3b3f4) {
    var λb0a6c0fe9861 = λfdf1176fa9db[λadcbaac3b3f4];
    if (void 0 !== λb0a6c0fe9861) return λb0a6c0fe9861.exports;
    var λd13e53d2f3ef = λfdf1176fa9db[λadcbaac3b3f4] = {
      exports: {}
    };
    return λdc55d6451e1b[λadcbaac3b3f4](λd13e53d2f3ef, λd13e53d2f3ef.exports, o), λd13e53d2f3ef.exports;
  }
  o.d = (λdc55d6451e1b, λfdf1176fa9db) => {
    for (var λadcbaac3b3f4 in λfdf1176fa9db) o.o(λfdf1176fa9db, λadcbaac3b3f4) && !o.o(λdc55d6451e1b, λadcbaac3b3f4) && Object.defineProperty(λdc55d6451e1b, λadcbaac3b3f4, {
      enumerable: !0,
      get: λfdf1176fa9db[λadcbaac3b3f4]
    });
  }, o.o = (λdc55d6451e1b, λfdf1176fa9db) => Object.prototype.hasOwnProperty.call(λdc55d6451e1b, λfdf1176fa9db), 
  o.r = λdc55d6451e1b => {
    "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λdc55d6451e1b, Symbol.toStringTag, {
      value: "\x4d\x6f\x64\x75\x6c\x65"
    }), Object.defineProperty(λdc55d6451e1b, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
      value: !0
    });
  };
  var λadcbaac3b3f4 = {};
  (() => {
    o.r(λadcbaac3b3f4), o.d(λadcbaac3b3f4, {
      load: () => l
    });
    var λdc55d6451e1b = o(805), λfdf1176fa9db = o(286), λb0a6c0fe9861 = o(423);
    let λd13e53d2f3ef = MessagePort.prototype.postMessage, n = (λdc55d6451e1b, λfdf1176fa9db, λadcbaac3b3f4) => {
      λd13e53d2f3ef.call(λdc55d6451e1b, λfdf1176fa9db, λadcbaac3b3f4);
    };
    class a {
      port;
      readyResolve;
      readyPromise=new Promise(λdc55d6451e1b => {
        this.readyResolve = λdc55d6451e1b;
      });
      ready=!1;
      async init() {
        await this.readyPromise, this.ready = !0;
      }
      rpc;
      constructor(λfdf1176fa9db) {
        this.port = λfdf1176fa9db, this.rpc = new λdc55d6451e1b.C({
          ready: async () => {
            this.readyResolve();
          }
        }, "\x74\x72\x61\x6e\x73\x70\x6f\x72\x74", (λdc55d6451e1b, λadcbaac3b3f4) => {
          n(λfdf1176fa9db, λdc55d6451e1b, λadcbaac3b3f4);
        }), λfdf1176fa9db.onmessageerror = λdc55d6451e1b => {
          console.error("\x6f\x6e\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λdc55d6451e1b);
        }, λfdf1176fa9db.onmessage = λdc55d6451e1b => {
          this.rpc.recieve(λdc55d6451e1b.data);
        }, λfdf1176fa9db.start();
      }
      connect(λdc55d6451e1b, λfdf1176fa9db, λadcbaac3b3f4, λb0a6c0fe9861, λd13e53d2f3ef, λ59536407f21b, λ4f308f034e8a) {
        let λ692a1dc6df41 = new MessageChannel, λc157ca240012 = λ692a1dc6df41.port1;
        return console.warn("\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6e\x67"), this.rpc.call("\x63\x6f\x6e\x6e\x65\x63\x74", {
          url: λdc55d6451e1b.href,
          protocols: λfdf1176fa9db,
          requestHeaders: λadcbaac3b3f4,
          port: λ692a1dc6df41.port2
        }, [ λ692a1dc6df41.port2 ]).then(λdc55d6451e1b => {
          console.log(λdc55d6451e1b), "\x73\x75\x63\x63\x65\x73\x73" === λdc55d6451e1b.result ? λb0a6c0fe9861(λdc55d6451e1b.protocol, λdc55d6451e1b.extensions) : λ4f308f034e8a(λdc55d6451e1b.error);
        }), λc157ca240012.onmessage = λdc55d6451e1b => {
          let λfdf1176fa9db = λdc55d6451e1b.data;
          "\x64\x61\x74\x61" === λfdf1176fa9db.type ? λd13e53d2f3ef(λfdf1176fa9db.data) : "\x63\x6c\x6f\x73\x65" === λfdf1176fa9db.type && λ59536407f21b(λfdf1176fa9db.code, λfdf1176fa9db.reason);
        }, λc157ca240012.onmessageerror = λdc55d6451e1b => {
          console.error("\x6f\x6e\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λdc55d6451e1b), λ4f308f034e8a("\x4d\x65\x73\x73\x61\x67\x65\x20\x65\x72\x72\x6f\x72\x20\x69\x6e\x20\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x6f\x72\x74");
        }, [ λdc55d6451e1b => {
          n(λc157ca240012, {
            type: "\x64\x61\x74\x61",
            data: λdc55d6451e1b
          }, λdc55d6451e1b instanceof ArrayBuffer ? [ λdc55d6451e1b ] : []);
        }, λdc55d6451e1b => {
          n(λc157ca240012, {
            type: "\x63\x6c\x6f\x73\x65",
            code: λdc55d6451e1b
          });
        } ];
      }
      async request(λdc55d6451e1b, λfdf1176fa9db, λadcbaac3b3f4, λb0a6c0fe9861, λd13e53d2f3ef) {
        return await this.rpc.call("\x72\x65\x71\x75\x65\x73\x74", {
          remote: λdc55d6451e1b.href,
          method: λfdf1176fa9db,
          body: λadcbaac3b3f4,
          headers: λb0a6c0fe9861
        });
      }
      async sendSetCookie(λdc55d6451e1b, λfdf1176fa9db = {}) {
        await this.rpc.call("\x73\x65\x6e\x64\x53\x65\x74\x43\x6f\x6f\x6b\x69\x65", {
          cookies: λdc55d6451e1b.map(({url: λdc55d6451e1b, cookie: λfdf1176fa9db}) => ({
            url: λdc55d6451e1b.href,
            cookie: λfdf1176fa9db
          })),
          options: λfdf1176fa9db
        });
      }
    }
    let λ59536407f21b = navigator.serviceWorker.controller;
    function l(λdc55d6451e1b) {
      if (λb0a6c0fe9861.pX in globalThis) return void globalThis[λb0a6c0fe9861.pX].syncDocumentInit({
        initHeaders: λdc55d6451e1b.initHeaders,
        history: λdc55d6451e1b.history,
        cookies: λdc55d6451e1b.cookies
      });
      if (!("\x57\x41\x53\x4d" in self)) throw Error("\x57\x41\x53\x4d\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x69\x6e\x20\x67\x6c\x6f\x62\x61\x6c\x20\x73\x63\x6f\x70\x65\x21");
      let λfdf1176fa9db = Uint8Array.from(atob(self.WASM), λdc55d6451e1b => λdc55d6451e1b.charCodeAt(0));
      delete self.WASM, (0, λb0a6c0fe9861.ht)(λfdf1176fa9db), new h(globalThis, λdc55d6451e1b);
    }
    class h {
      global;
      init;
      client;
      cookieJar;
      transport;
      handleServiceWorkerCookieMessage;
      constructor(λdc55d6451e1b, λfdf1176fa9db) {
        this.global = λdc55d6451e1b, this.init = λfdf1176fa9db;
        const λadcbaac3b3f4 = new MessageChannel;
        this.transport = new a(λadcbaac3b3f4.port1), λ59536407f21b?.postMessage({
          $sw$initRemoteTransport: {
            port: λadcbaac3b3f4.port2,
            prefix: this.init.prefix.href
          }
        }, [ λadcbaac3b3f4.port2 ]), this.cookieJar = new λb0a6c0fe9861.cP, this.cookieJar.load(this.init.cookies), 
        this.handleServiceWorkerCookieMessage = λdc55d6451e1b => {
          if (!λdc55d6451e1b.data?.$controller$setCookie || "\x6f\x62\x6a\x65\x63\x74" != typeof λdc55d6451e1b.data.$controller$setCookie) return;
          let λfdf1176fa9db = λdc55d6451e1b.data.$controller$setCookie;
          if (λfdf1176fa9db.controllerId && !String(this.init.prefix?.pathname || "").includes("\x2f" + λfdf1176fa9db.controllerId + "\x2f")) return;
          if (λfdf1176fa9db.options?.clear && this.cookieJar.clear(), Array.isArray(λfdf1176fa9db.cookies)) {
            for (let λdc55d6451e1b of λfdf1176fa9db.cookies) if ("\x73\x74\x72\x69\x6e\x67" == typeof λdc55d6451e1b?.url && "\x73\x74\x72\x69\x6e\x67" == typeof λdc55d6451e1b.cookie) try {
              this.cookieJar.setCookies(λdc55d6451e1b.cookie, new URL(λdc55d6451e1b.url));
            } catch {
              console.error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x73\x65\x74\x20\x63\x6f\x6f\x6b\x69\x65", λdc55d6451e1b);
            }
          }
          if ("\x73\x74\x72\x69\x6e\x67" == typeof λfdf1176fa9db.id) {
            let λdc55d6451e1b = navigator.serviceWorker?.controller ?? λ59536407f21b;
            λdc55d6451e1b?.postMessage({
              $sw$setCookieDone: {
                id: λfdf1176fa9db.id
              }
            });
          }
        }, navigator.serviceWorker?.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", this.handleServiceWorkerCookieMessage), 
        this.\u{69}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{74}\u{75}\u{64}\u{79}\u{4a}\u{65}\u{74}();
      }
      \u{69}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{74}\u{75}\u{64}\u{79}\u{4a}\u{65}\u{74}() {
        let λdc55d6451e1b = this.global.frameElement;
        λdc55d6451e1b && !λdc55d6451e1b.name && (window.name = λdc55d6451e1b.name = `${Array(8).fill(0).map(() => Math.floor(36 * Math.random()).toString(36)).join("")}`);
        let λadcbaac3b3f4 = λdc55d6451e1b?.[λfdf1176fa9db.I], λd13e53d2f3ef = !0;
        if (!λadcbaac3b3f4) {
          λd13e53d2f3ef = !1;
          let λdc55d6451e1b = this.global.window;
          for (;λdc55d6451e1b.parent !== λdc55d6451e1b; ) {
            let λd13e53d2f3ef = λdc55d6451e1b[λb0a6c0fe9861.pX];
            if (!λd13e53d2f3ef) {
              λdc55d6451e1b = λdc55d6451e1b.parent.window;
              continue;
            }
            let λ59536407f21b = λd13e53d2f3ef.descriptors.get("\x77\x69\x6e\x64\x6f\x77\x2e\x66\x72\x61\x6d\x65\x45\x6c\x65\x6d\x65\x6e\x74", λdc55d6451e1b);
            if (λ59536407f21b && λ59536407f21b[λfdf1176fa9db.I]) {
              λadcbaac3b3f4 = λ59536407f21b[λfdf1176fa9db.I];
              break;
            }
            λdc55d6451e1b = λdc55d6451e1b.parent.window;
          }
        }
        let λ59536407f21b = {
          config: this.init.sjconfig,
          prefix: this.init.prefix,
          cookieJar: this.cookieJar,
          interface: {
            \u{67}\u{65}\u{74}\u{49}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{63}\u{72}\u{69}\u{70}\u{74}\u{73}: this.init.\u{79}\u{69}\u{65}\u{6c}\u{64}\u{47}\u{65}\u{74}\u{49}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{63}\u{72}\u{69}\u{70}\u{74}\u{73}(this.init.config, this.init.sjconfig, this.init.prefix, this.cookieJar, this.init.codecEncode, this.init.codecDecode),
            codecEncode: this.init.codecEncode,
            codecDecode: this.init.codecDecode
          }
        };
        this.client = new λb0a6c0fe9861.bw(this.global, {
          context: λ59536407f21b,
          transport: this.transport,
          sendSetCookie: async (λdc55d6451e1b, λfdf1176fa9db) => {
            await this.transport.sendSetCookie(λdc55d6451e1b, λfdf1176fa9db);
          },
          shouldBlockMessageEvent: () => !1,
          hookSubcontext: λdc55d6451e1b => new h(λdc55d6451e1b, {
            ...this.init,
            cookies: this.cookieJar.dump()
          }).client,
          initHeaders: this.init.initHeaders,
          history: this.init.history
        });
        let λ4f308f034e8a = {
          window: this.global.window,
          client: this.client,
          isTopLevel: λd13e53d2f3ef
        };
        λadcbaac3b3f4 && λb0a6c0fe9861.Cx.dispatch(λadcbaac3b3f4.hooks.init.pre, λ4f308f034e8a, {}), 
        this.client.hook(), λadcbaac3b3f4 && λb0a6c0fe9861.Cx.dispatch(λadcbaac3b3f4.hooks.init.post, λ4f308f034e8a, {});
      }
    }
  })(), $studyjetController = λadcbaac3b3f4;
})();
