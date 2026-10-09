var $studyjetController;

(() => {
  var λ35b203236053 = {
    286(λ35b203236053, λ328056c77614, λ651a02c09705) {
      λ651a02c09705.d(λ328056c77614, {
        I: () => λf44f43c13e3e
      });
      let λf44f43c13e3e = Symbol.for("\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x66\x72\x61\x6d\x65\x20\x68\x61\x6e\x64\x6c\x65");
    },
    805(λ35b203236053, λ328056c77614, λ651a02c09705) {
      λ651a02c09705.d(λ328056c77614, {
        C: () => r
      });
      class r {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λ35b203236053, λ328056c77614, λ651a02c09705) {
          this.methods = λ35b203236053, this.id = λ328056c77614, this.sendRaw = λ651a02c09705;
        }
        recieve(λ35b203236053) {
          if (null == λ35b203236053 || "\x6f\x62\x6a\x65\x63\x74" != typeof λ35b203236053) return;
          let λ328056c77614 = λ35b203236053[this.id];
          if (null == λ328056c77614 || "\x6f\x62\x6a\x65\x63\x74" != typeof λ328056c77614) return;
          let λ651a02c09705 = λ328056c77614.$type;
          if ("\x72\x65\x73\x70\x6f\x6e\x73\x65" === λ651a02c09705) {
            let λ35b203236053 = λ328056c77614.$token, λ651a02c09705 = λ328056c77614.$data, λf44f43c13e3e = λ328056c77614.$error, λ1769fc9ea674 = this.promiseCallbacks.get(λ35b203236053);
            if (!λ1769fc9ea674) return;
            this.promiseCallbacks.delete(λ35b203236053), void 0 !== λf44f43c13e3e ? λ1769fc9ea674.reject(Error(λf44f43c13e3e)) : λ1769fc9ea674.resolve(λ651a02c09705);
          } else if ("\x72\x65\x71\x75\x65\x73\x74" === λ651a02c09705) {
            let λ35b203236053 = λ328056c77614.$method, λ651a02c09705 = λ328056c77614.$args;
            this.methods[λ35b203236053](λ651a02c09705).then(λ35b203236053 => {
              this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ328056c77614.$token,
                  $data: λ35b203236053?.[0]
                }
              }, λ35b203236053?.[1]);
            }).catch(λ35b203236053 => {
              console.error(λ35b203236053), this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ328056c77614.$token,
                  $error: λ35b203236053?.toString() || "\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x65\x72\x72\x6f\x72"
                }
              }, []);
            });
          }
        }
        call(λ35b203236053, λ328056c77614, λ651a02c09705 = []) {
          let λf44f43c13e3e = this.counter++;
          return new Promise((λ1769fc9ea674, λba42f8b03c7e) => {
            this.promiseCallbacks.set(λf44f43c13e3e, {
              resolve: λ1769fc9ea674,
              reject: λba42f8b03c7e
            }), this.sendRaw({
              [this.id]: {
                $type: "\x72\x65\x71\x75\x65\x73\x74",
                $method: λ35b203236053,
                $args: λ328056c77614,
                $token: λf44f43c13e3e
              }
            }, λ651a02c09705);
          });
        }
      }
    },
    423(λ35b203236053, λ328056c77614, λ651a02c09705) {
      λ651a02c09705.d(λ328056c77614, {
        Cx: () => λ668a4dff0a87,
        bw: () => λd615f134ac63,
        cP: () => λ1769fc9ea674,
        ht: () => λ18b6c19f8f5a,
        pX: () => λ412143fc68da
      });
      let {BareResponse: λf44f43c13e3e, CookieJar: λ1769fc9ea674, IncrementalHtmlRewriter: λba42f8b03c7e, Plugin: λde18d9dfb542, STUDYJETCLIENT: λ412143fc68da, STUDYJETCLIENTNAME: λ3efe941d816b, StudyJetClient: λd615f134ac63, StudyJetFetchHandler: λ9313ce524f61, StudyJetFetchTrackedClient: λ442a0e080fab, StudyJetHeaders: λe780de6c9ee8, Tap: λ668a4dff0a87, \u{63}\u{72}\u{65}\u{61}\u{74}\u{65}\u{4c}\u{6f}\u{63}\u{61}\u{74}\u{69}\u{6f}\u{6e}\u{50}\u{72}\u{6f}\u{78}\u{79}: λ9e0bce7508a1, defaultConfig: λ5a2d289c5576, defaultConfigDev: λ797a30cafe70, flagEnabled: λ0f867de83038, getOwnPropertyDescriptorHandler: λ646260fb1560, getRewriter: λ01770f63a275, getScriptBlockTypeString: λad2c85b0feda, htmlRules: λd3eb18b4d752, isArchiveMimeType: λd884f9b3c7fd, isAudioOrVideoMimeType: λ6213a8800200, isFontMimeType: λbf44b6b6e99c, isHtmlMimeType: λ2d10343e5e5d, isImageMimeType: λ0fe58d83fc96, isInlineDisplayableMimeType: λe5069f7a2091, isJavascriptMimeType: λ4c4e243df112, isJavascriptMimeTypeEssenceMatch: λ18652facdd8d, isModuleScriptType: λ3d29b4657578, isScriptType: λe5160fc4ac23, isScriptableMimeType: λ66ed19145681, isXmlMimeType: λebdaec786884, isZipBasedMimeType: λdce25038a5fa, isdedicated: λ52df142e3e53, isshared: λ838ac29383a0, issw: λ343963e84e49, iswindow: λb053bfdb0b40, isworker: λ2bc5cc01ae6b, parseMimeType: λ63c0e8228be5, rewriteBlob: λ9b16a46b710b, rewriteCss: λ104c7be6c150, rewriteHtml: λ336218178c5e, rewriteJs: λ4e06f7ee2e50, rewriteJsInner: λ2708dcf31825, rewriteSrcset: λ11ed7346152e, rewriteUrl: λc61417f3ad62, rewriteWorkers: λf976ccb75fc9, setWasm: λ18b6c19f8f5a, unrewriteBlob: λ9d810521db42, unrewriteCss: λ59af685f6240, unrewriteHtml: λ349d48150856, unrewriteUrl: λ92d09b9a0883, versionInfo: λ59c33b57d8da} = globalThis.$studyjet;
    }
  }, λ328056c77614 = {};
  function o(λ651a02c09705) {
    var λf44f43c13e3e = λ328056c77614[λ651a02c09705];
    if (void 0 !== λf44f43c13e3e) return λf44f43c13e3e.exports;
    var λ1769fc9ea674 = λ328056c77614[λ651a02c09705] = {
      exports: {}
    };
    return λ35b203236053[λ651a02c09705](λ1769fc9ea674, λ1769fc9ea674.exports, o), λ1769fc9ea674.exports;
  }
  o.d = (λ35b203236053, λ328056c77614) => {
    for (var λ651a02c09705 in λ328056c77614) o.o(λ328056c77614, λ651a02c09705) && !o.o(λ35b203236053, λ651a02c09705) && Object.defineProperty(λ35b203236053, λ651a02c09705, {
      enumerable: !0,
      get: λ328056c77614[λ651a02c09705]
    });
  }, o.o = (λ35b203236053, λ328056c77614) => Object.prototype.hasOwnProperty.call(λ35b203236053, λ328056c77614), 
  o.r = λ35b203236053 => {
    "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λ35b203236053, Symbol.toStringTag, {
      value: "\x4d\x6f\x64\x75\x6c\x65"
    }), Object.defineProperty(λ35b203236053, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
      value: !0
    });
  };
  var λ651a02c09705 = {};
  (() => {
    o.r(λ651a02c09705), o.d(λ651a02c09705, {
      load: () => l
    });
    var λ35b203236053 = o(805), λ328056c77614 = o(286), λf44f43c13e3e = o(423);
    let λ1769fc9ea674 = MessagePort.prototype.postMessage, n = (λ35b203236053, λ328056c77614, λ651a02c09705) => {
      λ1769fc9ea674.call(λ35b203236053, λ328056c77614, λ651a02c09705);
    };
    class a {
      port;
      readyResolve;
      readyPromise=new Promise(λ35b203236053 => {
        this.readyResolve = λ35b203236053;
      });
      ready=!1;
      async init() {
        await this.readyPromise, this.ready = !0;
      }
      rpc;
      constructor(λ328056c77614) {
        this.port = λ328056c77614, this.rpc = new λ35b203236053.C({
          ready: async () => {
            this.readyResolve();
          }
        }, "\x74\x72\x61\x6e\x73\x70\x6f\x72\x74", (λ35b203236053, λ651a02c09705) => {
          n(λ328056c77614, λ35b203236053, λ651a02c09705);
        }), λ328056c77614.onmessageerror = λ35b203236053 => {
          console.error("\x6f\x6e\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λ35b203236053);
        }, λ328056c77614.onmessage = λ35b203236053 => {
          this.rpc.recieve(λ35b203236053.data);
        }, λ328056c77614.start();
      }
      connect(λ35b203236053, λ328056c77614, λ651a02c09705, λf44f43c13e3e, λ1769fc9ea674, λba42f8b03c7e, λde18d9dfb542) {
        let λ412143fc68da = new MessageChannel, λ3efe941d816b = λ412143fc68da.port1;
        return console.warn("\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6e\x67"), this.rpc.call("\x63\x6f\x6e\x6e\x65\x63\x74", {
          url: λ35b203236053.href,
          protocols: λ328056c77614,
          requestHeaders: λ651a02c09705,
          port: λ412143fc68da.port2
        }, [ λ412143fc68da.port2 ]).then(λ35b203236053 => {
          console.log(λ35b203236053), "\x73\x75\x63\x63\x65\x73\x73" === λ35b203236053.result ? λf44f43c13e3e(λ35b203236053.protocol, λ35b203236053.extensions) : λde18d9dfb542(λ35b203236053.error);
        }), λ3efe941d816b.onmessage = λ35b203236053 => {
          let λ328056c77614 = λ35b203236053.data;
          "\x64\x61\x74\x61" === λ328056c77614.type ? λ1769fc9ea674(λ328056c77614.data) : "\x63\x6c\x6f\x73\x65" === λ328056c77614.type && λba42f8b03c7e(λ328056c77614.code, λ328056c77614.reason);
        }, λ3efe941d816b.onmessageerror = λ35b203236053 => {
          console.error("\x6f\x6e\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λ35b203236053), λde18d9dfb542("\x4d\x65\x73\x73\x61\x67\x65\x20\x65\x72\x72\x6f\x72\x20\x69\x6e\x20\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x6f\x72\x74");
        }, [ λ35b203236053 => {
          n(λ3efe941d816b, {
            type: "\x64\x61\x74\x61",
            data: λ35b203236053
          }, λ35b203236053 instanceof ArrayBuffer ? [ λ35b203236053 ] : []);
        }, λ35b203236053 => {
          n(λ3efe941d816b, {
            type: "\x63\x6c\x6f\x73\x65",
            code: λ35b203236053
          });
        } ];
      }
      async request(λ35b203236053, λ328056c77614, λ651a02c09705, λf44f43c13e3e, λ1769fc9ea674) {
        return await this.rpc.call("\x72\x65\x71\x75\x65\x73\x74", {
          remote: λ35b203236053.href,
          method: λ328056c77614,
          body: λ651a02c09705,
          headers: λf44f43c13e3e
        });
      }
      async sendSetCookie(λ35b203236053, λ328056c77614 = {}) {
        await this.rpc.call("\x73\x65\x6e\x64\x53\x65\x74\x43\x6f\x6f\x6b\x69\x65", {
          cookies: λ35b203236053.map(({url: λ35b203236053, cookie: λ328056c77614}) => ({
            url: λ35b203236053.href,
            cookie: λ328056c77614
          })),
          options: λ328056c77614
        });
      }
    }
    let λba42f8b03c7e = navigator.serviceWorker.controller;
    function l(λ35b203236053) {
      if (λf44f43c13e3e.pX in globalThis) return void globalThis[λf44f43c13e3e.pX].syncDocumentInit({
        initHeaders: λ35b203236053.initHeaders,
        history: λ35b203236053.history,
        cookies: λ35b203236053.cookies
      });
      if (!("\x57\x41\x53\x4d" in self)) throw Error("\x57\x41\x53\x4d\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x69\x6e\x20\x67\x6c\x6f\x62\x61\x6c\x20\x73\x63\x6f\x70\x65\x21");
      let λ328056c77614 = Uint8Array.from(atob(self.WASM), λ35b203236053 => λ35b203236053.charCodeAt(0));
      delete self.WASM, (0, λf44f43c13e3e.ht)(λ328056c77614), new h(globalThis, λ35b203236053);
    }
    class h {
      global;
      init;
      client;
      cookieJar;
      transport;
      handleServiceWorkerCookieMessage;
      constructor(λ35b203236053, λ328056c77614) {
        this.global = λ35b203236053, this.init = λ328056c77614;
        const λ651a02c09705 = new MessageChannel;
        this.transport = new a(λ651a02c09705.port1), λba42f8b03c7e?.postMessage({
          $sw$initRemoteTransport: {
            port: λ651a02c09705.port2,
            prefix: this.init.prefix.href
          }
        }, [ λ651a02c09705.port2 ]), this.cookieJar = new λf44f43c13e3e.cP, this.cookieJar.load(this.init.cookies), 
        this.handleServiceWorkerCookieMessage = λ35b203236053 => {
          if (!λ35b203236053.data?.$controller$setCookie || "\x6f\x62\x6a\x65\x63\x74" != typeof λ35b203236053.data.$controller$setCookie) return;
          let λ328056c77614 = λ35b203236053.data.$controller$setCookie;
          if (λ328056c77614.controllerId && !String(this.init.prefix?.pathname || "").includes("\x2f" + λ328056c77614.controllerId + "\x2f")) return;
          if (λ328056c77614.options?.clear && this.cookieJar.clear(), Array.isArray(λ328056c77614.cookies)) {
            for (let λ35b203236053 of λ328056c77614.cookies) if ("\x73\x74\x72\x69\x6e\x67" == typeof λ35b203236053?.url && "\x73\x74\x72\x69\x6e\x67" == typeof λ35b203236053.cookie) try {
              this.cookieJar.setCookies(λ35b203236053.cookie, new URL(λ35b203236053.url));
            } catch {
              console.error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x73\x65\x74\x20\x63\x6f\x6f\x6b\x69\x65", λ35b203236053);
            }
          }
          if ("\x73\x74\x72\x69\x6e\x67" == typeof λ328056c77614.id) {
            let λ35b203236053 = navigator.serviceWorker?.controller ?? λba42f8b03c7e;
            λ35b203236053?.postMessage({
              $sw$setCookieDone: {
                id: λ328056c77614.id
              }
            });
          }
        }, navigator.serviceWorker?.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", this.handleServiceWorkerCookieMessage), 
        this.\u{69}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{74}\u{75}\u{64}\u{79}\u{4a}\u{65}\u{74}();
      }
      \u{69}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{74}\u{75}\u{64}\u{79}\u{4a}\u{65}\u{74}() {
        let λ35b203236053 = this.global.frameElement;
        λ35b203236053 && !λ35b203236053.name && (window.name = λ35b203236053.name = `${Array(8).fill(0).map(() => Math.floor(36 * Math.random()).toString(36)).join("")}`);
        let λ651a02c09705 = λ35b203236053?.[λ328056c77614.I], λ1769fc9ea674 = !0;
        if (!λ651a02c09705) {
          λ1769fc9ea674 = !1;
          let λ35b203236053 = this.global.window;
          for (;λ35b203236053.parent !== λ35b203236053; ) {
            let λ1769fc9ea674 = λ35b203236053[λf44f43c13e3e.pX];
            if (!λ1769fc9ea674) {
              λ35b203236053 = λ35b203236053.parent.window;
              continue;
            }
            let λba42f8b03c7e = λ1769fc9ea674.descriptors.get("\x77\x69\x6e\x64\x6f\x77\x2e\x66\x72\x61\x6d\x65\x45\x6c\x65\x6d\x65\x6e\x74", λ35b203236053);
            if (λba42f8b03c7e && λba42f8b03c7e[λ328056c77614.I]) {
              λ651a02c09705 = λba42f8b03c7e[λ328056c77614.I];
              break;
            }
            λ35b203236053 = λ35b203236053.parent.window;
          }
        }
        let λba42f8b03c7e = {
          config: this.init.sjconfig,
          prefix: this.init.prefix,
          cookieJar: this.cookieJar,
          interface: {
            \u{67}\u{65}\u{74}\u{49}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{63}\u{72}\u{69}\u{70}\u{74}\u{73}: this.init.\u{79}\u{69}\u{65}\u{6c}\u{64}\u{47}\u{65}\u{74}\u{49}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{63}\u{72}\u{69}\u{70}\u{74}\u{73}(this.init.config, this.init.sjconfig, this.init.prefix, this.cookieJar, this.init.codecEncode, this.init.codecDecode),
            codecEncode: this.init.codecEncode,
            codecDecode: this.init.codecDecode
          }
        };
        this.client = new λf44f43c13e3e.bw(this.global, {
          context: λba42f8b03c7e,
          transport: this.transport,
          sendSetCookie: async (λ35b203236053, λ328056c77614) => {
            await this.transport.sendSetCookie(λ35b203236053, λ328056c77614);
          },
          shouldBlockMessageEvent: () => !1,
          hookSubcontext: λ35b203236053 => new h(λ35b203236053, {
            ...this.init,
            cookies: this.cookieJar.dump()
          }).client,
          initHeaders: this.init.initHeaders,
          history: this.init.history
        });
        let λde18d9dfb542 = {
          window: this.global.window,
          client: this.client,
          isTopLevel: λ1769fc9ea674
        };
        λ651a02c09705 && λf44f43c13e3e.Cx.dispatch(λ651a02c09705.hooks.init.pre, λde18d9dfb542, {}), 
        this.client.hook(), λ651a02c09705 && λf44f43c13e3e.Cx.dispatch(λ651a02c09705.hooks.init.post, λde18d9dfb542, {});
      }
    }
  })(), $studyjetController = λ651a02c09705;
})();
