var $studyjetController;

(() => {
  var λ12261c951d7f = {
    286(λ12261c951d7f, λ8c2c1e3be315, λb4c56a2577f7) {
      λb4c56a2577f7.d(λ8c2c1e3be315, {
        I: () => λ8d62bf8e1aef
      });
      let λ8d62bf8e1aef = Symbol.for("\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x66\x72\x61\x6d\x65\x20\x68\x61\x6e\x64\x6c\x65");
    },
    805(λ12261c951d7f, λ8c2c1e3be315, λb4c56a2577f7) {
      λb4c56a2577f7.d(λ8c2c1e3be315, {
        C: () => r
      });
      class r {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λ12261c951d7f, λ8c2c1e3be315, λb4c56a2577f7) {
          this.methods = λ12261c951d7f, this.id = λ8c2c1e3be315, this.sendRaw = λb4c56a2577f7;
        }
        recieve(λ12261c951d7f) {
          if (null == λ12261c951d7f || "\x6f\x62\x6a\x65\x63\x74" != typeof λ12261c951d7f) return;
          let λ8c2c1e3be315 = λ12261c951d7f[this.id];
          if (null == λ8c2c1e3be315 || "\x6f\x62\x6a\x65\x63\x74" != typeof λ8c2c1e3be315) return;
          let λb4c56a2577f7 = λ8c2c1e3be315.$type;
          if ("\x72\x65\x73\x70\x6f\x6e\x73\x65" === λb4c56a2577f7) {
            let λ12261c951d7f = λ8c2c1e3be315.$token, λb4c56a2577f7 = λ8c2c1e3be315.$data, λ8d62bf8e1aef = λ8c2c1e3be315.$error, λ0f2562f8f4e4 = this.promiseCallbacks.get(λ12261c951d7f);
            if (!λ0f2562f8f4e4) return;
            this.promiseCallbacks.delete(λ12261c951d7f), void 0 !== λ8d62bf8e1aef ? λ0f2562f8f4e4.reject(Error(λ8d62bf8e1aef)) : λ0f2562f8f4e4.resolve(λb4c56a2577f7);
          } else if ("\x72\x65\x71\x75\x65\x73\x74" === λb4c56a2577f7) {
            let λ12261c951d7f = λ8c2c1e3be315.$method, λb4c56a2577f7 = λ8c2c1e3be315.$args;
            this.methods[λ12261c951d7f](λb4c56a2577f7).then(λ12261c951d7f => {
              this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ8c2c1e3be315.$token,
                  $data: λ12261c951d7f?.[0]
                }
              }, λ12261c951d7f?.[1]);
            }).catch(λ12261c951d7f => {
              console.error(λ12261c951d7f), this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ8c2c1e3be315.$token,
                  $error: λ12261c951d7f?.toString() || "\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x65\x72\x72\x6f\x72"
                }
              }, []);
            });
          }
        }
        call(λ12261c951d7f, λ8c2c1e3be315, λb4c56a2577f7 = []) {
          let λ8d62bf8e1aef = this.counter++;
          return new Promise((λ0f2562f8f4e4, λdf315231e96c) => {
            this.promiseCallbacks.set(λ8d62bf8e1aef, {
              resolve: λ0f2562f8f4e4,
              reject: λdf315231e96c
            }), this.sendRaw({
              [this.id]: {
                $type: "\x72\x65\x71\x75\x65\x73\x74",
                $method: λ12261c951d7f,
                $args: λ8c2c1e3be315,
                $token: λ8d62bf8e1aef
              }
            }, λb4c56a2577f7);
          });
        }
      }
    },
    423(λ12261c951d7f, λ8c2c1e3be315, λb4c56a2577f7) {
      λb4c56a2577f7.d(λ8c2c1e3be315, {
        Cx: () => λ507f2bdd1078,
        bw: () => λ9cb8853c8fb3,
        cP: () => λ0f2562f8f4e4,
        ht: () => λ23bc58f732f5,
        pX: () => λ53da76429521
      });
      let {BareResponse: λ8d62bf8e1aef, CookieJar: λ0f2562f8f4e4, IncrementalHtmlRewriter: λdf315231e96c, Plugin: λe06cf800bd66, STUDYJETCLIENT: λ53da76429521, STUDYJETCLIENTNAME: λ1eae8d8978e5, StudyJetClient: λ9cb8853c8fb3, StudyJetFetchHandler: λe0ff5c3c2cc8, StudyJetFetchTrackedClient: λc1f23b06f672, StudyJetHeaders: λ0cf468c27907, Tap: λ507f2bdd1078, \u{63}\u{72}\u{65}\u{61}\u{74}\u{65}\u{4c}\u{6f}\u{63}\u{61}\u{74}\u{69}\u{6f}\u{6e}\u{50}\u{72}\u{6f}\u{78}\u{79}: λb16277f1c2c4, defaultConfig: λ42b1097ac99b, defaultConfigDev: λ46b116925739, flagEnabled: λ71ed4cfaa730, getOwnPropertyDescriptorHandler: λda3d325d9724, getRewriter: λ1767ba3e8463, getScriptBlockTypeString: λ5786a580b169, htmlRules: λ43697964ead2, isArchiveMimeType: λa5e429f41744, isAudioOrVideoMimeType: λcda2398d2292, isFontMimeType: λcb2c11af1009, isHtmlMimeType: λ1873c78cac3f, isImageMimeType: λ5026da24403a, isInlineDisplayableMimeType: λa150d1c6df46, isJavascriptMimeType: λ51aae1a43dc2, isJavascriptMimeTypeEssenceMatch: λe597e29d9e1e, isModuleScriptType: λ53066288502b, isScriptType: λac0b6e3b7256, isScriptableMimeType: λ66c036262559, isXmlMimeType: λ7c8b969bd6fd, isZipBasedMimeType: λe07d822d01b4, isdedicated: λf95f8b456d37, isshared: λ056a254e9f99, issw: λ0015af3d6933, iswindow: λ11e2d55ca6c0, isworker: λ9b5648bee870, parseMimeType: λ88204936c337, rewriteBlob: λ6a546aa48cba, rewriteCss: λa5a4198b6b22, rewriteHtml: λ1ca59e0f6260, rewriteJs: λa554d07218ed, rewriteJsInner: λda9fb9851a1e, rewriteSrcset: λ1ed9002a28fe, rewriteUrl: λ29612bbf60d6, rewriteWorkers: λ19d9d76553db, setWasm: λ23bc58f732f5, unrewriteBlob: λ1c9f8b946890, unrewriteCss: λ6f23aa839da9, unrewriteHtml: λ2496ffb5f27b, unrewriteUrl: λ6db1da89889f, versionInfo: λ69f238f72040} = globalThis.$studyjet;
    }
  }, λ8c2c1e3be315 = {};
  function o(λb4c56a2577f7) {
    var λ8d62bf8e1aef = λ8c2c1e3be315[λb4c56a2577f7];
    if (void 0 !== λ8d62bf8e1aef) return λ8d62bf8e1aef.exports;
    var λ0f2562f8f4e4 = λ8c2c1e3be315[λb4c56a2577f7] = {
      exports: {}
    };
    return λ12261c951d7f[λb4c56a2577f7](λ0f2562f8f4e4, λ0f2562f8f4e4.exports, o), λ0f2562f8f4e4.exports;
  }
  o.d = (λ12261c951d7f, λ8c2c1e3be315) => {
    for (var λb4c56a2577f7 in λ8c2c1e3be315) o.o(λ8c2c1e3be315, λb4c56a2577f7) && !o.o(λ12261c951d7f, λb4c56a2577f7) && Object.defineProperty(λ12261c951d7f, λb4c56a2577f7, {
      enumerable: !0,
      get: λ8c2c1e3be315[λb4c56a2577f7]
    });
  }, o.o = (λ12261c951d7f, λ8c2c1e3be315) => Object.prototype.hasOwnProperty.call(λ12261c951d7f, λ8c2c1e3be315), 
  o.r = λ12261c951d7f => {
    "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λ12261c951d7f, Symbol.toStringTag, {
      value: "\x4d\x6f\x64\x75\x6c\x65"
    }), Object.defineProperty(λ12261c951d7f, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
      value: !0
    });
  };
  var λb4c56a2577f7 = {};
  (() => {
    o.r(λb4c56a2577f7), o.d(λb4c56a2577f7, {
      load: () => l
    });
    var λ12261c951d7f = o(805), λ8c2c1e3be315 = o(286), λ8d62bf8e1aef = o(423);
    let λ0f2562f8f4e4 = MessagePort.prototype.postMessage, n = (λ12261c951d7f, λ8c2c1e3be315, λb4c56a2577f7) => {
      λ0f2562f8f4e4.call(λ12261c951d7f, λ8c2c1e3be315, λb4c56a2577f7);
    };
    class a {
      port;
      readyResolve;
      readyPromise=new Promise(λ12261c951d7f => {
        this.readyResolve = λ12261c951d7f;
      });
      ready=!1;
      async init() {
        await this.readyPromise, this.ready = !0;
      }
      rpc;
      constructor(λ8c2c1e3be315) {
        this.port = λ8c2c1e3be315, this.rpc = new λ12261c951d7f.C({
          ready: async () => {
            this.readyResolve();
          }
        }, "\x74\x72\x61\x6e\x73\x70\x6f\x72\x74", (λ12261c951d7f, λb4c56a2577f7) => {
          n(λ8c2c1e3be315, λ12261c951d7f, λb4c56a2577f7);
        }), λ8c2c1e3be315.onmessageerror = λ12261c951d7f => {
          console.error("\x6f\x6e\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λ12261c951d7f);
        }, λ8c2c1e3be315.onmessage = λ12261c951d7f => {
          this.rpc.recieve(λ12261c951d7f.data);
        }, λ8c2c1e3be315.start();
      }
      connect(λ12261c951d7f, λ8c2c1e3be315, λb4c56a2577f7, λ8d62bf8e1aef, λ0f2562f8f4e4, λdf315231e96c, λe06cf800bd66) {
        let λ53da76429521 = new MessageChannel, λ1eae8d8978e5 = λ53da76429521.port1;
        return console.warn("\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6e\x67"), this.rpc.call("\x63\x6f\x6e\x6e\x65\x63\x74", {
          url: λ12261c951d7f.href,
          protocols: λ8c2c1e3be315,
          requestHeaders: λb4c56a2577f7,
          port: λ53da76429521.port2
        }, [ λ53da76429521.port2 ]).then(λ12261c951d7f => {
          console.log(λ12261c951d7f), "\x73\x75\x63\x63\x65\x73\x73" === λ12261c951d7f.result ? λ8d62bf8e1aef(λ12261c951d7f.protocol, λ12261c951d7f.extensions) : λe06cf800bd66(λ12261c951d7f.error);
        }), λ1eae8d8978e5.onmessage = λ12261c951d7f => {
          let λ8c2c1e3be315 = λ12261c951d7f.data;
          "\x64\x61\x74\x61" === λ8c2c1e3be315.type ? λ0f2562f8f4e4(λ8c2c1e3be315.data) : "\x63\x6c\x6f\x73\x65" === λ8c2c1e3be315.type && λdf315231e96c(λ8c2c1e3be315.code, λ8c2c1e3be315.reason);
        }, λ1eae8d8978e5.onmessageerror = λ12261c951d7f => {
          console.error("\x6f\x6e\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λ12261c951d7f), λe06cf800bd66("\x4d\x65\x73\x73\x61\x67\x65\x20\x65\x72\x72\x6f\x72\x20\x69\x6e\x20\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x6f\x72\x74");
        }, [ λ12261c951d7f => {
          n(λ1eae8d8978e5, {
            type: "\x64\x61\x74\x61",
            data: λ12261c951d7f
          }, λ12261c951d7f instanceof ArrayBuffer ? [ λ12261c951d7f ] : []);
        }, λ12261c951d7f => {
          n(λ1eae8d8978e5, {
            type: "\x63\x6c\x6f\x73\x65",
            code: λ12261c951d7f
          });
        } ];
      }
      async request(λ12261c951d7f, λ8c2c1e3be315, λb4c56a2577f7, λ8d62bf8e1aef, λ0f2562f8f4e4) {
        return await this.rpc.call("\x72\x65\x71\x75\x65\x73\x74", {
          remote: λ12261c951d7f.href,
          method: λ8c2c1e3be315,
          body: λb4c56a2577f7,
          headers: λ8d62bf8e1aef
        });
      }
      async sendSetCookie(λ12261c951d7f, λ8c2c1e3be315 = {}) {
        await this.rpc.call("\x73\x65\x6e\x64\x53\x65\x74\x43\x6f\x6f\x6b\x69\x65", {
          cookies: λ12261c951d7f.map(({url: λ12261c951d7f, cookie: λ8c2c1e3be315}) => ({
            url: λ12261c951d7f.href,
            cookie: λ8c2c1e3be315
          })),
          options: λ8c2c1e3be315
        });
      }
    }
    let λdf315231e96c = navigator.serviceWorker.controller;
    function l(λ12261c951d7f) {
      if (λ8d62bf8e1aef.pX in globalThis) return void globalThis[λ8d62bf8e1aef.pX].syncDocumentInit({
        initHeaders: λ12261c951d7f.initHeaders,
        history: λ12261c951d7f.history,
        cookies: λ12261c951d7f.cookies
      });
      if (!("\x57\x41\x53\x4d" in self)) throw Error("\x57\x41\x53\x4d\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x69\x6e\x20\x67\x6c\x6f\x62\x61\x6c\x20\x73\x63\x6f\x70\x65\x21");
      let λ8c2c1e3be315 = Uint8Array.from(atob(self.WASM), λ12261c951d7f => λ12261c951d7f.charCodeAt(0));
      delete self.WASM, (0, λ8d62bf8e1aef.ht)(λ8c2c1e3be315), new h(globalThis, λ12261c951d7f);
    }
    class h {
      global;
      init;
      client;
      cookieJar;
      transport;
      handleServiceWorkerCookieMessage;
      constructor(λ12261c951d7f, λ8c2c1e3be315) {
        this.global = λ12261c951d7f, this.init = λ8c2c1e3be315;
        const λb4c56a2577f7 = new MessageChannel;
        this.transport = new a(λb4c56a2577f7.port1), λdf315231e96c?.postMessage({
          $sw$initRemoteTransport: {
            port: λb4c56a2577f7.port2,
            prefix: this.init.prefix.href
          }
        }, [ λb4c56a2577f7.port2 ]), this.cookieJar = new λ8d62bf8e1aef.cP, this.cookieJar.load(this.init.cookies), 
        this.handleServiceWorkerCookieMessage = λ12261c951d7f => {
          if (!λ12261c951d7f.data?.$controller$setCookie || "\x6f\x62\x6a\x65\x63\x74" != typeof λ12261c951d7f.data.$controller$setCookie) return;
          let λ8c2c1e3be315 = λ12261c951d7f.data.$controller$setCookie;
          if (λ8c2c1e3be315.controllerId && !String(this.init.prefix?.pathname || "").includes("\x2f" + λ8c2c1e3be315.controllerId + "\x2f")) return;
          if (λ8c2c1e3be315.options?.clear && this.cookieJar.clear(), Array.isArray(λ8c2c1e3be315.cookies)) {
            for (let λ12261c951d7f of λ8c2c1e3be315.cookies) if ("\x73\x74\x72\x69\x6e\x67" == typeof λ12261c951d7f?.url && "\x73\x74\x72\x69\x6e\x67" == typeof λ12261c951d7f.cookie) try {
              this.cookieJar.setCookies(λ12261c951d7f.cookie, new URL(λ12261c951d7f.url));
            } catch {
              console.error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x73\x65\x74\x20\x63\x6f\x6f\x6b\x69\x65", λ12261c951d7f);
            }
          }
          if ("\x73\x74\x72\x69\x6e\x67" == typeof λ8c2c1e3be315.id) {
            let λ12261c951d7f = navigator.serviceWorker?.controller ?? λdf315231e96c;
            λ12261c951d7f?.postMessage({
              $sw$setCookieDone: {
                id: λ8c2c1e3be315.id
              }
            });
          }
        }, navigator.serviceWorker?.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", this.handleServiceWorkerCookieMessage), 
        this.\u{69}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{74}\u{75}\u{64}\u{79}\u{4a}\u{65}\u{74}();
      }
      \u{69}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{74}\u{75}\u{64}\u{79}\u{4a}\u{65}\u{74}() {
        let λ12261c951d7f = this.global.frameElement;
        λ12261c951d7f && !λ12261c951d7f.name && (window.name = λ12261c951d7f.name = `${Array(8).fill(0).map(() => Math.floor(36 * Math.random()).toString(36)).join("")}`);
        let λb4c56a2577f7 = λ12261c951d7f?.[λ8c2c1e3be315.I], λ0f2562f8f4e4 = !0;
        if (!λb4c56a2577f7) {
          λ0f2562f8f4e4 = !1;
          let λ12261c951d7f = this.global.window;
          for (;λ12261c951d7f.parent !== λ12261c951d7f; ) {
            let λ0f2562f8f4e4 = λ12261c951d7f[λ8d62bf8e1aef.pX];
            if (!λ0f2562f8f4e4) {
              λ12261c951d7f = λ12261c951d7f.parent.window;
              continue;
            }
            let λdf315231e96c = λ0f2562f8f4e4.descriptors.get("\x77\x69\x6e\x64\x6f\x77\x2e\x66\x72\x61\x6d\x65\x45\x6c\x65\x6d\x65\x6e\x74", λ12261c951d7f);
            if (λdf315231e96c && λdf315231e96c[λ8c2c1e3be315.I]) {
              λb4c56a2577f7 = λdf315231e96c[λ8c2c1e3be315.I];
              break;
            }
            λ12261c951d7f = λ12261c951d7f.parent.window;
          }
        }
        let λdf315231e96c = {
          config: this.init.sjconfig,
          prefix: this.init.prefix,
          cookieJar: this.cookieJar,
          interface: {
            \u{67}\u{65}\u{74}\u{49}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{63}\u{72}\u{69}\u{70}\u{74}\u{73}: this.init.\u{79}\u{69}\u{65}\u{6c}\u{64}\u{47}\u{65}\u{74}\u{49}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{63}\u{72}\u{69}\u{70}\u{74}\u{73}(this.init.config, this.init.sjconfig, this.init.prefix, this.cookieJar, this.init.codecEncode, this.init.codecDecode),
            codecEncode: this.init.codecEncode,
            codecDecode: this.init.codecDecode
          }
        };
        this.client = new λ8d62bf8e1aef.bw(this.global, {
          context: λdf315231e96c,
          transport: this.transport,
          sendSetCookie: async (λ12261c951d7f, λ8c2c1e3be315) => {
            await this.transport.sendSetCookie(λ12261c951d7f, λ8c2c1e3be315);
          },
          shouldBlockMessageEvent: () => !1,
          hookSubcontext: λ12261c951d7f => new h(λ12261c951d7f, {
            ...this.init,
            cookies: this.cookieJar.dump()
          }).client,
          initHeaders: this.init.initHeaders,
          history: this.init.history
        });
        let λe06cf800bd66 = {
          window: this.global.window,
          client: this.client,
          isTopLevel: λ0f2562f8f4e4
        };
        λb4c56a2577f7 && λ8d62bf8e1aef.Cx.dispatch(λb4c56a2577f7.hooks.init.pre, λe06cf800bd66, {}), 
        this.client.hook(), λb4c56a2577f7 && λ8d62bf8e1aef.Cx.dispatch(λb4c56a2577f7.hooks.init.post, λe06cf800bd66, {});
      }
    }
  })(), $studyjetController = λb4c56a2577f7;
})();
