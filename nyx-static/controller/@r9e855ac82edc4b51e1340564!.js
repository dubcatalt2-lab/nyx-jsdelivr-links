var $studyjetController;

(() => {
  var λ986791dd79a5 = {
    286(λ986791dd79a5, λ84f44485d900, λ56e10df8e8d8) {
      λ56e10df8e8d8.d(λ84f44485d900, {
        I: () => λb32de9a77269
      });
      let λb32de9a77269 = Symbol.for("\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x66\x72\x61\x6d\x65\x20\x68\x61\x6e\x64\x6c\x65");
    },
    805(λ986791dd79a5, λ84f44485d900, λ56e10df8e8d8) {
      λ56e10df8e8d8.d(λ84f44485d900, {
        C: () => r
      });
      class r {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λ986791dd79a5, λ84f44485d900, λ56e10df8e8d8) {
          this.methods = λ986791dd79a5, this.id = λ84f44485d900, this.sendRaw = λ56e10df8e8d8;
        }
        recieve(λ986791dd79a5) {
          if (null == λ986791dd79a5 || "\x6f\x62\x6a\x65\x63\x74" != typeof λ986791dd79a5) return;
          let λ84f44485d900 = λ986791dd79a5[this.id];
          if (null == λ84f44485d900 || "\x6f\x62\x6a\x65\x63\x74" != typeof λ84f44485d900) return;
          let λ56e10df8e8d8 = λ84f44485d900.$type;
          if ("\x72\x65\x73\x70\x6f\x6e\x73\x65" === λ56e10df8e8d8) {
            let λ986791dd79a5 = λ84f44485d900.$token, λ56e10df8e8d8 = λ84f44485d900.$data, λb32de9a77269 = λ84f44485d900.$error, λ688d1b539bad = this.promiseCallbacks.get(λ986791dd79a5);
            if (!λ688d1b539bad) return;
            this.promiseCallbacks.delete(λ986791dd79a5), void 0 !== λb32de9a77269 ? λ688d1b539bad.reject(Error(λb32de9a77269)) : λ688d1b539bad.resolve(λ56e10df8e8d8);
          } else if ("\x72\x65\x71\x75\x65\x73\x74" === λ56e10df8e8d8) {
            let λ986791dd79a5 = λ84f44485d900.$method, λ56e10df8e8d8 = λ84f44485d900.$args;
            this.methods[λ986791dd79a5](λ56e10df8e8d8).then(λ986791dd79a5 => {
              this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ84f44485d900.$token,
                  $data: λ986791dd79a5?.[0]
                }
              }, λ986791dd79a5?.[1]);
            }).catch(λ986791dd79a5 => {
              console.error(λ986791dd79a5), this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ84f44485d900.$token,
                  $error: λ986791dd79a5?.toString() || "\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x65\x72\x72\x6f\x72"
                }
              }, []);
            });
          }
        }
        call(λ986791dd79a5, λ84f44485d900, λ56e10df8e8d8 = []) {
          let λb32de9a77269 = this.counter++;
          return new Promise((λ688d1b539bad, λb9ebc4b78e97) => {
            this.promiseCallbacks.set(λb32de9a77269, {
              resolve: λ688d1b539bad,
              reject: λb9ebc4b78e97
            }), this.sendRaw({
              [this.id]: {
                $type: "\x72\x65\x71\x75\x65\x73\x74",
                $method: λ986791dd79a5,
                $args: λ84f44485d900,
                $token: λb32de9a77269
              }
            }, λ56e10df8e8d8);
          });
        }
      }
    },
    423(λ986791dd79a5, λ84f44485d900, λ56e10df8e8d8) {
      λ56e10df8e8d8.d(λ84f44485d900, {
        Cx: () => λec56cf176baf,
        bw: () => λb8f01388a9df,
        cP: () => λ688d1b539bad,
        ht: () => λ4ee690d0279f,
        pX: () => λ951e6acc240f
      });
      let {BareResponse: λb32de9a77269, CookieJar: λ688d1b539bad, IncrementalHtmlRewriter: λb9ebc4b78e97, Plugin: λ8bddc68c6a96, STUDYJETCLIENT: λ951e6acc240f, STUDYJETCLIENTNAME: λ7303392712b1, StudyJetClient: λb8f01388a9df, StudyJetFetchHandler: λ8166fc3125ac, StudyJetFetchTrackedClient: λ69b3e5898444, StudyJetHeaders: λ80860a7a03e1, Tap: λec56cf176baf, \u{63}\u{72}\u{65}\u{61}\u{74}\u{65}\u{4c}\u{6f}\u{63}\u{61}\u{74}\u{69}\u{6f}\u{6e}\u{50}\u{72}\u{6f}\u{78}\u{79}: λ7ad4b4c5bbca, defaultConfig: λ96544167effc, defaultConfigDev: λ00271054d37b, flagEnabled: λa0d8fa4fe880, getOwnPropertyDescriptorHandler: λ3028d57efcfa, getRewriter: λa685e45ecda1, getScriptBlockTypeString: λ7ae6e4c67317, htmlRules: λ17cac254dbb8, isArchiveMimeType: λ74d889c48787, isAudioOrVideoMimeType: λd240ea2b443f, isFontMimeType: λf38bc8c19485, isHtmlMimeType: λ32491643a336, isImageMimeType: λ97fa80e2f6f0, isInlineDisplayableMimeType: λ488c9647a0e0, isJavascriptMimeType: λf7de961d1b7f, isJavascriptMimeTypeEssenceMatch: λ787414510710, isModuleScriptType: λ1fbfb33d442d, isScriptType: λ6a488fcaa9ff, isScriptableMimeType: λ5e31514c721c, isXmlMimeType: λ4dacfda8a94f, isZipBasedMimeType: λfe422822e6fe, isdedicated: λ94cca7b6e55d, isshared: λ366e4c1360ad, issw: λd90181a7f340, iswindow: λc4ad16cf8707, isworker: λ8e6bcbfaf42c, parseMimeType: λ90c959fc2a36, rewriteBlob: λ6a8c25d7f356, rewriteCss: λc4afdc2eca46, rewriteHtml: λa1dda32bc088, rewriteJs: λ1c4a3f4e6504, rewriteJsInner: λ3fdaf9af604a, rewriteSrcset: λ5b32e44f9bf8, rewriteUrl: λaae222884fe9, rewriteWorkers: λb93cd20ae9c1, setWasm: λ4ee690d0279f, unrewriteBlob: λ26b62b48befb, unrewriteCss: λ9868b36d5cfb, unrewriteHtml: λ3e037ef9eb48, unrewriteUrl: λ5fa2cafde2e0, versionInfo: λ0dd46213faa6} = globalThis.$studyjet;
    }
  }, λ84f44485d900 = {};
  function o(λ56e10df8e8d8) {
    var λb32de9a77269 = λ84f44485d900[λ56e10df8e8d8];
    if (void 0 !== λb32de9a77269) return λb32de9a77269.exports;
    var λ688d1b539bad = λ84f44485d900[λ56e10df8e8d8] = {
      exports: {}
    };
    return λ986791dd79a5[λ56e10df8e8d8](λ688d1b539bad, λ688d1b539bad.exports, o), λ688d1b539bad.exports;
  }
  o.d = (λ986791dd79a5, λ84f44485d900) => {
    for (var λ56e10df8e8d8 in λ84f44485d900) o.o(λ84f44485d900, λ56e10df8e8d8) && !o.o(λ986791dd79a5, λ56e10df8e8d8) && Object.defineProperty(λ986791dd79a5, λ56e10df8e8d8, {
      enumerable: !0,
      get: λ84f44485d900[λ56e10df8e8d8]
    });
  }, o.o = (λ986791dd79a5, λ84f44485d900) => Object.prototype.hasOwnProperty.call(λ986791dd79a5, λ84f44485d900), 
  o.r = λ986791dd79a5 => {
    "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λ986791dd79a5, Symbol.toStringTag, {
      value: "\x4d\x6f\x64\x75\x6c\x65"
    }), Object.defineProperty(λ986791dd79a5, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
      value: !0
    });
  };
  var λ56e10df8e8d8 = {};
  (() => {
    o.r(λ56e10df8e8d8), o.d(λ56e10df8e8d8, {
      load: () => l
    });
    var λ986791dd79a5 = o(805), λ84f44485d900 = o(286), λb32de9a77269 = o(423);
    let λ688d1b539bad = MessagePort.prototype.postMessage, n = (λ986791dd79a5, λ84f44485d900, λ56e10df8e8d8) => {
      λ688d1b539bad.call(λ986791dd79a5, λ84f44485d900, λ56e10df8e8d8);
    };
    class a {
      port;
      readyResolve;
      readyPromise=new Promise(λ986791dd79a5 => {
        this.readyResolve = λ986791dd79a5;
      });
      ready=!1;
      async init() {
        await this.readyPromise, this.ready = !0;
      }
      rpc;
      constructor(λ84f44485d900) {
        this.port = λ84f44485d900, this.rpc = new λ986791dd79a5.C({
          ready: async () => {
            this.readyResolve();
          }
        }, "\x74\x72\x61\x6e\x73\x70\x6f\x72\x74", (λ986791dd79a5, λ56e10df8e8d8) => {
          n(λ84f44485d900, λ986791dd79a5, λ56e10df8e8d8);
        }), λ84f44485d900.onmessageerror = λ986791dd79a5 => {
          console.error("\x6f\x6e\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λ986791dd79a5);
        }, λ84f44485d900.onmessage = λ986791dd79a5 => {
          this.rpc.recieve(λ986791dd79a5.data);
        }, λ84f44485d900.start();
      }
      connect(λ986791dd79a5, λ84f44485d900, λ56e10df8e8d8, λb32de9a77269, λ688d1b539bad, λb9ebc4b78e97, λ8bddc68c6a96) {
        let λ951e6acc240f = new MessageChannel, λ7303392712b1 = λ951e6acc240f.port1;
        return console.warn("\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6e\x67"), this.rpc.call("\x63\x6f\x6e\x6e\x65\x63\x74", {
          url: λ986791dd79a5.href,
          protocols: λ84f44485d900,
          requestHeaders: λ56e10df8e8d8,
          port: λ951e6acc240f.port2
        }, [ λ951e6acc240f.port2 ]).then(λ986791dd79a5 => {
          console.log(λ986791dd79a5), "\x73\x75\x63\x63\x65\x73\x73" === λ986791dd79a5.result ? λb32de9a77269(λ986791dd79a5.protocol, λ986791dd79a5.extensions) : λ8bddc68c6a96(λ986791dd79a5.error);
        }), λ7303392712b1.onmessage = λ986791dd79a5 => {
          let λ84f44485d900 = λ986791dd79a5.data;
          "\x64\x61\x74\x61" === λ84f44485d900.type ? λ688d1b539bad(λ84f44485d900.data) : "\x63\x6c\x6f\x73\x65" === λ84f44485d900.type && λb9ebc4b78e97(λ84f44485d900.code, λ84f44485d900.reason);
        }, λ7303392712b1.onmessageerror = λ986791dd79a5 => {
          console.error("\x6f\x6e\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λ986791dd79a5), λ8bddc68c6a96("\x4d\x65\x73\x73\x61\x67\x65\x20\x65\x72\x72\x6f\x72\x20\x69\x6e\x20\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x6f\x72\x74");
        }, [ λ986791dd79a5 => {
          n(λ7303392712b1, {
            type: "\x64\x61\x74\x61",
            data: λ986791dd79a5
          }, λ986791dd79a5 instanceof ArrayBuffer ? [ λ986791dd79a5 ] : []);
        }, λ986791dd79a5 => {
          n(λ7303392712b1, {
            type: "\x63\x6c\x6f\x73\x65",
            code: λ986791dd79a5
          });
        } ];
      }
      async request(λ986791dd79a5, λ84f44485d900, λ56e10df8e8d8, λb32de9a77269, λ688d1b539bad) {
        return await this.rpc.call("\x72\x65\x71\x75\x65\x73\x74", {
          remote: λ986791dd79a5.href,
          method: λ84f44485d900,
          body: λ56e10df8e8d8,
          headers: λb32de9a77269
        });
      }
      async sendSetCookie(λ986791dd79a5, λ84f44485d900 = {}) {
        await this.rpc.call("\x73\x65\x6e\x64\x53\x65\x74\x43\x6f\x6f\x6b\x69\x65", {
          cookies: λ986791dd79a5.map(({url: λ986791dd79a5, cookie: λ84f44485d900}) => ({
            url: λ986791dd79a5.href,
            cookie: λ84f44485d900
          })),
          options: λ84f44485d900
        });
      }
    }
    let λb9ebc4b78e97 = navigator.serviceWorker.controller;
    function l(λ986791dd79a5) {
      if (λb32de9a77269.pX in globalThis) return void globalThis[λb32de9a77269.pX].syncDocumentInit({
        initHeaders: λ986791dd79a5.initHeaders,
        history: λ986791dd79a5.history,
        cookies: λ986791dd79a5.cookies
      });
      if (!("\x57\x41\x53\x4d" in self)) throw Error("\x57\x41\x53\x4d\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x69\x6e\x20\x67\x6c\x6f\x62\x61\x6c\x20\x73\x63\x6f\x70\x65\x21");
      let λ84f44485d900 = Uint8Array.from(atob(self.WASM), λ986791dd79a5 => λ986791dd79a5.charCodeAt(0));
      delete self.WASM, (0, λb32de9a77269.ht)(λ84f44485d900), new h(globalThis, λ986791dd79a5);
    }
    class h {
      global;
      init;
      client;
      cookieJar;
      transport;
      handleServiceWorkerCookieMessage;
      constructor(λ986791dd79a5, λ84f44485d900) {
        this.global = λ986791dd79a5, this.init = λ84f44485d900;
        const λ56e10df8e8d8 = new MessageChannel;
        this.transport = new a(λ56e10df8e8d8.port1), λb9ebc4b78e97?.postMessage({
          $sw$initRemoteTransport: {
            port: λ56e10df8e8d8.port2,
            prefix: this.init.prefix.href
          }
        }, [ λ56e10df8e8d8.port2 ]), this.cookieJar = new λb32de9a77269.cP, this.cookieJar.load(this.init.cookies), 
        this.handleServiceWorkerCookieMessage = λ986791dd79a5 => {
          if (!λ986791dd79a5.data?.$controller$setCookie || "\x6f\x62\x6a\x65\x63\x74" != typeof λ986791dd79a5.data.$controller$setCookie) return;
          let λ84f44485d900 = λ986791dd79a5.data.$controller$setCookie;
          if (λ84f44485d900.controllerId && !String(this.init.prefix?.pathname || "").includes("\x2f" + λ84f44485d900.controllerId + "\x2f")) return;
          if (λ84f44485d900.options?.clear && this.cookieJar.clear(), Array.isArray(λ84f44485d900.cookies)) {
            for (let λ986791dd79a5 of λ84f44485d900.cookies) if ("\x73\x74\x72\x69\x6e\x67" == typeof λ986791dd79a5?.url && "\x73\x74\x72\x69\x6e\x67" == typeof λ986791dd79a5.cookie) try {
              this.cookieJar.setCookies(λ986791dd79a5.cookie, new URL(λ986791dd79a5.url));
            } catch {
              console.error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x73\x65\x74\x20\x63\x6f\x6f\x6b\x69\x65", λ986791dd79a5);
            }
          }
          if ("\x73\x74\x72\x69\x6e\x67" == typeof λ84f44485d900.id) {
            let λ986791dd79a5 = navigator.serviceWorker?.controller ?? λb9ebc4b78e97;
            λ986791dd79a5?.postMessage({
              $sw$setCookieDone: {
                id: λ84f44485d900.id
              }
            });
          }
        }, navigator.serviceWorker?.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", this.handleServiceWorkerCookieMessage), 
        this.\u{69}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{74}\u{75}\u{64}\u{79}\u{4a}\u{65}\u{74}();
      }
      \u{69}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{74}\u{75}\u{64}\u{79}\u{4a}\u{65}\u{74}() {
        let λ986791dd79a5 = this.global.frameElement;
        λ986791dd79a5 && !λ986791dd79a5.name && (window.name = λ986791dd79a5.name = `${Array(8).fill(0).map(() => Math.floor(36 * Math.random()).toString(36)).join("")}`);
        let λ56e10df8e8d8 = λ986791dd79a5?.[λ84f44485d900.I], λ688d1b539bad = !0;
        if (!λ56e10df8e8d8) {
          λ688d1b539bad = !1;
          let λ986791dd79a5 = this.global.window;
          for (;λ986791dd79a5.parent !== λ986791dd79a5; ) {
            let λ688d1b539bad = λ986791dd79a5[λb32de9a77269.pX];
            if (!λ688d1b539bad) {
              λ986791dd79a5 = λ986791dd79a5.parent.window;
              continue;
            }
            let λb9ebc4b78e97 = λ688d1b539bad.descriptors.get("\x77\x69\x6e\x64\x6f\x77\x2e\x66\x72\x61\x6d\x65\x45\x6c\x65\x6d\x65\x6e\x74", λ986791dd79a5);
            if (λb9ebc4b78e97 && λb9ebc4b78e97[λ84f44485d900.I]) {
              λ56e10df8e8d8 = λb9ebc4b78e97[λ84f44485d900.I];
              break;
            }
            λ986791dd79a5 = λ986791dd79a5.parent.window;
          }
        }
        let λb9ebc4b78e97 = {
          config: this.init.sjconfig,
          prefix: this.init.prefix,
          cookieJar: this.cookieJar,
          interface: {
            \u{67}\u{65}\u{74}\u{49}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{63}\u{72}\u{69}\u{70}\u{74}\u{73}: this.init.\u{79}\u{69}\u{65}\u{6c}\u{64}\u{47}\u{65}\u{74}\u{49}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{63}\u{72}\u{69}\u{70}\u{74}\u{73}(this.init.config, this.init.sjconfig, this.init.prefix, this.cookieJar, this.init.codecEncode, this.init.codecDecode),
            codecEncode: this.init.codecEncode,
            codecDecode: this.init.codecDecode
          }
        };
        this.client = new λb32de9a77269.bw(this.global, {
          context: λb9ebc4b78e97,
          transport: this.transport,
          sendSetCookie: async (λ986791dd79a5, λ84f44485d900) => {
            await this.transport.sendSetCookie(λ986791dd79a5, λ84f44485d900);
          },
          shouldBlockMessageEvent: () => !1,
          hookSubcontext: λ986791dd79a5 => new h(λ986791dd79a5, {
            ...this.init,
            cookies: this.cookieJar.dump()
          }).client,
          initHeaders: this.init.initHeaders,
          history: this.init.history
        });
        let λ8bddc68c6a96 = {
          window: this.global.window,
          client: this.client,
          isTopLevel: λ688d1b539bad
        };
        λ56e10df8e8d8 && λb32de9a77269.Cx.dispatch(λ56e10df8e8d8.hooks.init.pre, λ8bddc68c6a96, {}), 
        this.client.hook(), λ56e10df8e8d8 && λb32de9a77269.Cx.dispatch(λ56e10df8e8d8.hooks.init.post, λ8bddc68c6a96, {});
      }
    }
  })(), $studyjetController = λ56e10df8e8d8;
})();
