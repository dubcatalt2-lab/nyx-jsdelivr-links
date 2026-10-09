var $studyjetController;

(() => {
  var λda82ca407010 = {
    286(λda82ca407010, λfb49e0d68b5b, λc75cea2904fe) {
      λc75cea2904fe.d(λfb49e0d68b5b, {
        I: () => λ7aa695529dde
      });
      let λ7aa695529dde = Symbol.for("\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x66\x72\x61\x6d\x65\x20\x68\x61\x6e\x64\x6c\x65");
    },
    805(λda82ca407010, λfb49e0d68b5b, λc75cea2904fe) {
      λc75cea2904fe.d(λfb49e0d68b5b, {
        C: () => r
      });
      class r {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λda82ca407010, λfb49e0d68b5b, λc75cea2904fe) {
          this.methods = λda82ca407010, this.id = λfb49e0d68b5b, this.sendRaw = λc75cea2904fe;
        }
        recieve(λda82ca407010) {
          if (null == λda82ca407010 || "\x6f\x62\x6a\x65\x63\x74" != typeof λda82ca407010) return;
          let λfb49e0d68b5b = λda82ca407010[this.id];
          if (null == λfb49e0d68b5b || "\x6f\x62\x6a\x65\x63\x74" != typeof λfb49e0d68b5b) return;
          let λc75cea2904fe = λfb49e0d68b5b.$type;
          if ("\x72\x65\x73\x70\x6f\x6e\x73\x65" === λc75cea2904fe) {
            let λda82ca407010 = λfb49e0d68b5b.$token, λc75cea2904fe = λfb49e0d68b5b.$data, λ7aa695529dde = λfb49e0d68b5b.$error, λd12b12b48da3 = this.promiseCallbacks.get(λda82ca407010);
            if (!λd12b12b48da3) return;
            this.promiseCallbacks.delete(λda82ca407010), void 0 !== λ7aa695529dde ? λd12b12b48da3.reject(Error(λ7aa695529dde)) : λd12b12b48da3.resolve(λc75cea2904fe);
          } else if ("\x72\x65\x71\x75\x65\x73\x74" === λc75cea2904fe) {
            let λda82ca407010 = λfb49e0d68b5b.$method, λc75cea2904fe = λfb49e0d68b5b.$args;
            this.methods[λda82ca407010](λc75cea2904fe).then(λda82ca407010 => {
              this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λfb49e0d68b5b.$token,
                  $data: λda82ca407010?.[0]
                }
              }, λda82ca407010?.[1]);
            }).catch(λda82ca407010 => {
              console.error(λda82ca407010), this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λfb49e0d68b5b.$token,
                  $error: λda82ca407010?.toString() || "\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x65\x72\x72\x6f\x72"
                }
              }, []);
            });
          }
        }
        call(λda82ca407010, λfb49e0d68b5b, λc75cea2904fe = []) {
          let λ7aa695529dde = this.counter++;
          return new Promise((λd12b12b48da3, λ360d3f0ec09a) => {
            this.promiseCallbacks.set(λ7aa695529dde, {
              resolve: λd12b12b48da3,
              reject: λ360d3f0ec09a
            }), this.sendRaw({
              [this.id]: {
                $type: "\x72\x65\x71\x75\x65\x73\x74",
                $method: λda82ca407010,
                $args: λfb49e0d68b5b,
                $token: λ7aa695529dde
              }
            }, λc75cea2904fe);
          });
        }
      }
    },
    423(λda82ca407010, λfb49e0d68b5b, λc75cea2904fe) {
      λc75cea2904fe.d(λfb49e0d68b5b, {
        Cx: () => λ9c09eea68dfa,
        bw: () => λf5537921b146,
        cP: () => λd12b12b48da3,
        ht: () => λb5e635005a39,
        pX: () => λa1c751385921
      });
      let {BareResponse: λ7aa695529dde, CookieJar: λd12b12b48da3, IncrementalHtmlRewriter: λ360d3f0ec09a, Plugin: λ30b2614d8e19, STUDYJETCLIENT: λa1c751385921, STUDYJETCLIENTNAME: λbe2993914366, StudyJetClient: λf5537921b146, StudyJetFetchHandler: λa1379e33ccca, StudyJetFetchTrackedClient: λd027ec902a6b, StudyJetHeaders: λe491b7161056, Tap: λ9c09eea68dfa, \u{63}\u{72}\u{65}\u{61}\u{74}\u{65}\u{4c}\u{6f}\u{63}\u{61}\u{74}\u{69}\u{6f}\u{6e}\u{50}\u{72}\u{6f}\u{78}\u{79}: λ5c06a496d2df, defaultConfig: λ5806a5718797, defaultConfigDev: λd96a9c659a0b, flagEnabled: λ049a0f7be437, getOwnPropertyDescriptorHandler: λ439686f84890, getRewriter: λ3b665b1680e8, getScriptBlockTypeString: λ51d4ba9d65e8, htmlRules: λ4ce3c08772b8, isArchiveMimeType: λ9d4964fcac1e, isAudioOrVideoMimeType: λ8b64b882b1ef, isFontMimeType: λ32eed5753888, isHtmlMimeType: λd906965c1a7e, isImageMimeType: λ9c546a10f72a, isInlineDisplayableMimeType: λa3736fa3ca70, isJavascriptMimeType: λca90d06164ad, isJavascriptMimeTypeEssenceMatch: λ433bb538dda8, isModuleScriptType: λ2e00ed2369c7, isScriptType: λfb56aad55e5b, isScriptableMimeType: λ6f607903e19a, isXmlMimeType: λd7e8b4deebe8, isZipBasedMimeType: λ6d8f8bc7e8ee, isdedicated: λ96fae12e9de5, isshared: λ572e31ff4de2, issw: λ4549a3854e03, iswindow: λ7b0d35212e95, isworker: λda7cbf3ddd52, parseMimeType: λd5afee4b72eb, rewriteBlob: λf9a6964a8914, rewriteCss: λabbe4bf77d2d, rewriteHtml: λ461d5b3e5678, rewriteJs: λbcd39a6e1afd, rewriteJsInner: λ160435498bbb, rewriteSrcset: λ20d55ea4b925, rewriteUrl: λab6f0f3c46aa, rewriteWorkers: λ38b357c1b303, setWasm: λb5e635005a39, unrewriteBlob: λ997825b7184d, unrewriteCss: λee8f9c269bf0, unrewriteHtml: λ83f89f114473, unrewriteUrl: λ5faafb93e487, versionInfo: λ05f85a4d41e5} = globalThis.$studyjet;
    }
  }, λfb49e0d68b5b = {};
  function o(λc75cea2904fe) {
    var λ7aa695529dde = λfb49e0d68b5b[λc75cea2904fe];
    if (void 0 !== λ7aa695529dde) return λ7aa695529dde.exports;
    var λd12b12b48da3 = λfb49e0d68b5b[λc75cea2904fe] = {
      exports: {}
    };
    return λda82ca407010[λc75cea2904fe](λd12b12b48da3, λd12b12b48da3.exports, o), λd12b12b48da3.exports;
  }
  o.d = (λda82ca407010, λfb49e0d68b5b) => {
    for (var λc75cea2904fe in λfb49e0d68b5b) o.o(λfb49e0d68b5b, λc75cea2904fe) && !o.o(λda82ca407010, λc75cea2904fe) && Object.defineProperty(λda82ca407010, λc75cea2904fe, {
      enumerable: !0,
      get: λfb49e0d68b5b[λc75cea2904fe]
    });
  }, o.o = (λda82ca407010, λfb49e0d68b5b) => Object.prototype.hasOwnProperty.call(λda82ca407010, λfb49e0d68b5b), 
  o.r = λda82ca407010 => {
    "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λda82ca407010, Symbol.toStringTag, {
      value: "\x4d\x6f\x64\x75\x6c\x65"
    }), Object.defineProperty(λda82ca407010, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
      value: !0
    });
  };
  var λc75cea2904fe = {};
  (() => {
    o.r(λc75cea2904fe), o.d(λc75cea2904fe, {
      load: () => l
    });
    var λda82ca407010 = o(805), λfb49e0d68b5b = o(286), λ7aa695529dde = o(423);
    let λd12b12b48da3 = MessagePort.prototype.postMessage, n = (λda82ca407010, λfb49e0d68b5b, λc75cea2904fe) => {
      λd12b12b48da3.call(λda82ca407010, λfb49e0d68b5b, λc75cea2904fe);
    };
    class a {
      port;
      readyResolve;
      readyPromise=new Promise(λda82ca407010 => {
        this.readyResolve = λda82ca407010;
      });
      ready=!1;
      async init() {
        await this.readyPromise, this.ready = !0;
      }
      rpc;
      constructor(λfb49e0d68b5b) {
        this.port = λfb49e0d68b5b, this.rpc = new λda82ca407010.C({
          ready: async () => {
            this.readyResolve();
          }
        }, "\x74\x72\x61\x6e\x73\x70\x6f\x72\x74", (λda82ca407010, λc75cea2904fe) => {
          n(λfb49e0d68b5b, λda82ca407010, λc75cea2904fe);
        }), λfb49e0d68b5b.onmessageerror = λda82ca407010 => {
          console.error("\x6f\x6e\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λda82ca407010);
        }, λfb49e0d68b5b.onmessage = λda82ca407010 => {
          this.rpc.recieve(λda82ca407010.data);
        }, λfb49e0d68b5b.start();
      }
      connect(λda82ca407010, λfb49e0d68b5b, λc75cea2904fe, λ7aa695529dde, λd12b12b48da3, λ360d3f0ec09a, λ30b2614d8e19) {
        let λa1c751385921 = new MessageChannel, λbe2993914366 = λa1c751385921.port1;
        return console.warn("\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6e\x67"), this.rpc.call("\x63\x6f\x6e\x6e\x65\x63\x74", {
          url: λda82ca407010.href,
          protocols: λfb49e0d68b5b,
          requestHeaders: λc75cea2904fe,
          port: λa1c751385921.port2
        }, [ λa1c751385921.port2 ]).then(λda82ca407010 => {
          console.log(λda82ca407010), "\x73\x75\x63\x63\x65\x73\x73" === λda82ca407010.result ? λ7aa695529dde(λda82ca407010.protocol, λda82ca407010.extensions) : λ30b2614d8e19(λda82ca407010.error);
        }), λbe2993914366.onmessage = λda82ca407010 => {
          let λfb49e0d68b5b = λda82ca407010.data;
          "\x64\x61\x74\x61" === λfb49e0d68b5b.type ? λd12b12b48da3(λfb49e0d68b5b.data) : "\x63\x6c\x6f\x73\x65" === λfb49e0d68b5b.type && λ360d3f0ec09a(λfb49e0d68b5b.code, λfb49e0d68b5b.reason);
        }, λbe2993914366.onmessageerror = λda82ca407010 => {
          console.error("\x6f\x6e\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λda82ca407010), λ30b2614d8e19("\x4d\x65\x73\x73\x61\x67\x65\x20\x65\x72\x72\x6f\x72\x20\x69\x6e\x20\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x6f\x72\x74");
        }, [ λda82ca407010 => {
          n(λbe2993914366, {
            type: "\x64\x61\x74\x61",
            data: λda82ca407010
          }, λda82ca407010 instanceof ArrayBuffer ? [ λda82ca407010 ] : []);
        }, λda82ca407010 => {
          n(λbe2993914366, {
            type: "\x63\x6c\x6f\x73\x65",
            code: λda82ca407010
          });
        } ];
      }
      async request(λda82ca407010, λfb49e0d68b5b, λc75cea2904fe, λ7aa695529dde, λd12b12b48da3) {
        return await this.rpc.call("\x72\x65\x71\x75\x65\x73\x74", {
          remote: λda82ca407010.href,
          method: λfb49e0d68b5b,
          body: λc75cea2904fe,
          headers: λ7aa695529dde
        });
      }
      async sendSetCookie(λda82ca407010, λfb49e0d68b5b = {}) {
        await this.rpc.call("\x73\x65\x6e\x64\x53\x65\x74\x43\x6f\x6f\x6b\x69\x65", {
          cookies: λda82ca407010.map(({url: λda82ca407010, cookie: λfb49e0d68b5b}) => ({
            url: λda82ca407010.href,
            cookie: λfb49e0d68b5b
          })),
          options: λfb49e0d68b5b
        });
      }
    }
    let λ360d3f0ec09a = navigator.serviceWorker.controller;
    function l(λda82ca407010) {
      if (λ7aa695529dde.pX in globalThis) return void globalThis[λ7aa695529dde.pX].syncDocumentInit({
        initHeaders: λda82ca407010.initHeaders,
        history: λda82ca407010.history,
        cookies: λda82ca407010.cookies
      });
      if (!("\x57\x41\x53\x4d" in self)) throw Error("\x57\x41\x53\x4d\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x69\x6e\x20\x67\x6c\x6f\x62\x61\x6c\x20\x73\x63\x6f\x70\x65\x21");
      let λfb49e0d68b5b = Uint8Array.from(atob(self.WASM), λda82ca407010 => λda82ca407010.charCodeAt(0));
      delete self.WASM, (0, λ7aa695529dde.ht)(λfb49e0d68b5b), new h(globalThis, λda82ca407010);
    }
    class h {
      global;
      init;
      client;
      cookieJar;
      transport;
      handleServiceWorkerCookieMessage;
      constructor(λda82ca407010, λfb49e0d68b5b) {
        this.global = λda82ca407010, this.init = λfb49e0d68b5b;
        const λc75cea2904fe = new MessageChannel;
        this.transport = new a(λc75cea2904fe.port1), λ360d3f0ec09a?.postMessage({
          $sw$initRemoteTransport: {
            port: λc75cea2904fe.port2,
            prefix: this.init.prefix.href
          }
        }, [ λc75cea2904fe.port2 ]), this.cookieJar = new λ7aa695529dde.cP, this.cookieJar.load(this.init.cookies), 
        this.handleServiceWorkerCookieMessage = λda82ca407010 => {
          if (!λda82ca407010.data?.$controller$setCookie || "\x6f\x62\x6a\x65\x63\x74" != typeof λda82ca407010.data.$controller$setCookie) return;
          let λfb49e0d68b5b = λda82ca407010.data.$controller$setCookie;
          if (λfb49e0d68b5b.controllerId && !String(this.init.prefix?.pathname || "").includes("\x2f" + λfb49e0d68b5b.controllerId + "\x2f")) return;
          if (λfb49e0d68b5b.options?.clear && this.cookieJar.clear(), Array.isArray(λfb49e0d68b5b.cookies)) {
            for (let λda82ca407010 of λfb49e0d68b5b.cookies) if ("\x73\x74\x72\x69\x6e\x67" == typeof λda82ca407010?.url && "\x73\x74\x72\x69\x6e\x67" == typeof λda82ca407010.cookie) try {
              this.cookieJar.setCookies(λda82ca407010.cookie, new URL(λda82ca407010.url));
            } catch {
              console.error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x73\x65\x74\x20\x63\x6f\x6f\x6b\x69\x65", λda82ca407010);
            }
          }
          if ("\x73\x74\x72\x69\x6e\x67" == typeof λfb49e0d68b5b.id) {
            let λda82ca407010 = navigator.serviceWorker?.controller ?? λ360d3f0ec09a;
            λda82ca407010?.postMessage({
              $sw$setCookieDone: {
                id: λfb49e0d68b5b.id
              }
            });
          }
        }, navigator.serviceWorker?.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", this.handleServiceWorkerCookieMessage), 
        this.\u{69}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{74}\u{75}\u{64}\u{79}\u{4a}\u{65}\u{74}();
      }
      \u{69}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{74}\u{75}\u{64}\u{79}\u{4a}\u{65}\u{74}() {
        let λda82ca407010 = this.global.frameElement;
        λda82ca407010 && !λda82ca407010.name && (window.name = λda82ca407010.name = `${Array(8).fill(0).map(() => Math.floor(36 * Math.random()).toString(36)).join("")}`);
        let λc75cea2904fe = λda82ca407010?.[λfb49e0d68b5b.I], λd12b12b48da3 = !0;
        if (!λc75cea2904fe) {
          λd12b12b48da3 = !1;
          let λda82ca407010 = this.global.window;
          for (;λda82ca407010.parent !== λda82ca407010; ) {
            let λd12b12b48da3 = λda82ca407010[λ7aa695529dde.pX];
            if (!λd12b12b48da3) {
              λda82ca407010 = λda82ca407010.parent.window;
              continue;
            }
            let λ360d3f0ec09a = λd12b12b48da3.descriptors.get("\x77\x69\x6e\x64\x6f\x77\x2e\x66\x72\x61\x6d\x65\x45\x6c\x65\x6d\x65\x6e\x74", λda82ca407010);
            if (λ360d3f0ec09a && λ360d3f0ec09a[λfb49e0d68b5b.I]) {
              λc75cea2904fe = λ360d3f0ec09a[λfb49e0d68b5b.I];
              break;
            }
            λda82ca407010 = λda82ca407010.parent.window;
          }
        }
        let λ360d3f0ec09a = {
          config: this.init.sjconfig,
          prefix: this.init.prefix,
          cookieJar: this.cookieJar,
          interface: {
            \u{67}\u{65}\u{74}\u{49}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{63}\u{72}\u{69}\u{70}\u{74}\u{73}: this.init.\u{79}\u{69}\u{65}\u{6c}\u{64}\u{47}\u{65}\u{74}\u{49}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{63}\u{72}\u{69}\u{70}\u{74}\u{73}(this.init.config, this.init.sjconfig, this.init.prefix, this.cookieJar, this.init.codecEncode, this.init.codecDecode),
            codecEncode: this.init.codecEncode,
            codecDecode: this.init.codecDecode
          }
        };
        this.client = new λ7aa695529dde.bw(this.global, {
          context: λ360d3f0ec09a,
          transport: this.transport,
          sendSetCookie: async (λda82ca407010, λfb49e0d68b5b) => {
            await this.transport.sendSetCookie(λda82ca407010, λfb49e0d68b5b);
          },
          shouldBlockMessageEvent: () => !1,
          hookSubcontext: λda82ca407010 => new h(λda82ca407010, {
            ...this.init,
            cookies: this.cookieJar.dump()
          }).client,
          initHeaders: this.init.initHeaders,
          history: this.init.history
        });
        let λ30b2614d8e19 = {
          window: this.global.window,
          client: this.client,
          isTopLevel: λd12b12b48da3
        };
        λc75cea2904fe && λ7aa695529dde.Cx.dispatch(λc75cea2904fe.hooks.init.pre, λ30b2614d8e19, {}), 
        this.client.hook(), λc75cea2904fe && λ7aa695529dde.Cx.dispatch(λc75cea2904fe.hooks.init.post, λ30b2614d8e19, {});
      }
    }
  })(), $studyjetController = λc75cea2904fe;
})();
