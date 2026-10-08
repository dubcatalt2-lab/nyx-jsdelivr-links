var $studyjetController;

(() => {
  var λ111e3361d2b4 = {
    286(λ111e3361d2b4, λe6825a908c23, λ6c2e6d86c89c) {
      λ6c2e6d86c89c.d(λe6825a908c23, {
        I: () => λ79d3c00acc3e
      });
      let λ79d3c00acc3e = Symbol.for("\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x66\x72\x61\x6d\x65\x20\x68\x61\x6e\x64\x6c\x65");
    },
    805(λ111e3361d2b4, λe6825a908c23, λ6c2e6d86c89c) {
      λ6c2e6d86c89c.d(λe6825a908c23, {
        C: () => r
      });
      class r {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λ111e3361d2b4, λe6825a908c23, λ6c2e6d86c89c) {
          this.methods = λ111e3361d2b4, this.id = λe6825a908c23, this.sendRaw = λ6c2e6d86c89c;
        }
        recieve(λ111e3361d2b4) {
          if (null == λ111e3361d2b4 || "\x6f\x62\x6a\x65\x63\x74" != typeof λ111e3361d2b4) return;
          let λe6825a908c23 = λ111e3361d2b4[this.id];
          if (null == λe6825a908c23 || "\x6f\x62\x6a\x65\x63\x74" != typeof λe6825a908c23) return;
          let λ6c2e6d86c89c = λe6825a908c23.$type;
          if ("\x72\x65\x73\x70\x6f\x6e\x73\x65" === λ6c2e6d86c89c) {
            let λ111e3361d2b4 = λe6825a908c23.$token, λ6c2e6d86c89c = λe6825a908c23.$data, λ79d3c00acc3e = λe6825a908c23.$error, λ5e69ee3f8e8c = this.promiseCallbacks.get(λ111e3361d2b4);
            if (!λ5e69ee3f8e8c) return;
            this.promiseCallbacks.delete(λ111e3361d2b4), void 0 !== λ79d3c00acc3e ? λ5e69ee3f8e8c.reject(Error(λ79d3c00acc3e)) : λ5e69ee3f8e8c.resolve(λ6c2e6d86c89c);
          } else if ("\x72\x65\x71\x75\x65\x73\x74" === λ6c2e6d86c89c) {
            let λ111e3361d2b4 = λe6825a908c23.$method, λ6c2e6d86c89c = λe6825a908c23.$args;
            this.methods[λ111e3361d2b4](λ6c2e6d86c89c).then(λ111e3361d2b4 => {
              this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λe6825a908c23.$token,
                  $data: λ111e3361d2b4?.[0]
                }
              }, λ111e3361d2b4?.[1]);
            }).catch(λ111e3361d2b4 => {
              console.error(λ111e3361d2b4), this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λe6825a908c23.$token,
                  $error: λ111e3361d2b4?.toString() || "\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x65\x72\x72\x6f\x72"
                }
              }, []);
            });
          }
        }
        call(λ111e3361d2b4, λe6825a908c23, λ6c2e6d86c89c = []) {
          let λ79d3c00acc3e = this.counter++;
          return new Promise((λ5e69ee3f8e8c, λcb8b357eef70) => {
            this.promiseCallbacks.set(λ79d3c00acc3e, {
              resolve: λ5e69ee3f8e8c,
              reject: λcb8b357eef70
            }), this.sendRaw({
              [this.id]: {
                $type: "\x72\x65\x71\x75\x65\x73\x74",
                $method: λ111e3361d2b4,
                $args: λe6825a908c23,
                $token: λ79d3c00acc3e
              }
            }, λ6c2e6d86c89c);
          });
        }
      }
    },
    423(λ111e3361d2b4, λe6825a908c23, λ6c2e6d86c89c) {
      λ6c2e6d86c89c.d(λe6825a908c23, {
        Cx: () => λ90cb52af426d,
        bw: () => λ870f21b7ffa5,
        cP: () => λ5e69ee3f8e8c,
        ht: () => λ9b8f686ba8e5,
        pX: () => λdfd3ddb8e761
      });
      let {BareResponse: λ79d3c00acc3e, CookieJar: λ5e69ee3f8e8c, IncrementalHtmlRewriter: λcb8b357eef70, Plugin: λ75365469e464, STUDYJETCLIENT: λdfd3ddb8e761, STUDYJETCLIENTNAME: λ457e9b51bd44, StudyJetClient: λ870f21b7ffa5, StudyJetFetchHandler: λ23390ec97d5d, StudyJetFetchTrackedClient: λ3c7ef4f31db9, StudyJetHeaders: λ5e3e4707fc52, Tap: λ90cb52af426d, \u{63}\u{72}\u{65}\u{61}\u{74}\u{65}\u{4c}\u{6f}\u{63}\u{61}\u{74}\u{69}\u{6f}\u{6e}\u{50}\u{72}\u{6f}\u{78}\u{79}: λeab4a480bf5c, defaultConfig: λ07f712a11dce, defaultConfigDev: λc76b8dd1d32b, flagEnabled: λ3e4e2d5bfce0, getOwnPropertyDescriptorHandler: λb97359687628, getRewriter: λ3d03dd6b658b, getScriptBlockTypeString: λae1833f61716, htmlRules: λb8e751d01c2d, isArchiveMimeType: λ3eeb8e2dc4c4, isAudioOrVideoMimeType: λc091fad53eab, isFontMimeType: λff4fc4cf997c, isHtmlMimeType: λ82ecd7efb6b2, isImageMimeType: λbae17198ddf9, isInlineDisplayableMimeType: λ981f98798c67, isJavascriptMimeType: λac5b3da2930a, isJavascriptMimeTypeEssenceMatch: λf60fbfb93c7c, isModuleScriptType: λ31cb0077e5a2, isScriptType: λ0e96f7495515, isScriptableMimeType: λc5f9cc8eaf44, isXmlMimeType: λ4081620425a1, isZipBasedMimeType: λ071fe1b8c30f, isdedicated: λ4dd64cb21ce9, isshared: λ7329b7f0f7d9, issw: λb1f09cc7dc0a, iswindow: λ510153f48a77, isworker: λd231f95c2693, parseMimeType: λ2cdbf068b7a7, rewriteBlob: λcf742f859391, rewriteCss: λ70c3518a54f2, rewriteHtml: λ95ed296f3af6, rewriteJs: λ5723c95322a2, rewriteJsInner: λc73e569dfe73, rewriteSrcset: λ20976ba641da, rewriteUrl: λ2d981cba5b0a, rewriteWorkers: λ7be82b58fc86, setWasm: λ9b8f686ba8e5, unrewriteBlob: λ97390f37cdd5, unrewriteCss: λ5e4afaa7a92d, unrewriteHtml: λ0da4d376e04d, unrewriteUrl: λ1c1fd62e35f9, versionInfo: λ8b771e79860c} = globalThis.$studyjet;
    }
  }, λe6825a908c23 = {};
  function o(λ6c2e6d86c89c) {
    var λ79d3c00acc3e = λe6825a908c23[λ6c2e6d86c89c];
    if (void 0 !== λ79d3c00acc3e) return λ79d3c00acc3e.exports;
    var λ5e69ee3f8e8c = λe6825a908c23[λ6c2e6d86c89c] = {
      exports: {}
    };
    return λ111e3361d2b4[λ6c2e6d86c89c](λ5e69ee3f8e8c, λ5e69ee3f8e8c.exports, o), λ5e69ee3f8e8c.exports;
  }
  o.d = (λ111e3361d2b4, λe6825a908c23) => {
    for (var λ6c2e6d86c89c in λe6825a908c23) o.o(λe6825a908c23, λ6c2e6d86c89c) && !o.o(λ111e3361d2b4, λ6c2e6d86c89c) && Object.defineProperty(λ111e3361d2b4, λ6c2e6d86c89c, {
      enumerable: !0,
      get: λe6825a908c23[λ6c2e6d86c89c]
    });
  }, o.o = (λ111e3361d2b4, λe6825a908c23) => Object.prototype.hasOwnProperty.call(λ111e3361d2b4, λe6825a908c23), 
  o.r = λ111e3361d2b4 => {
    "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λ111e3361d2b4, Symbol.toStringTag, {
      value: "\x4d\x6f\x64\x75\x6c\x65"
    }), Object.defineProperty(λ111e3361d2b4, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
      value: !0
    });
  };
  var λ6c2e6d86c89c = {};
  (() => {
    o.r(λ6c2e6d86c89c), o.d(λ6c2e6d86c89c, {
      load: () => l
    });
    var λ111e3361d2b4 = o(805), λe6825a908c23 = o(286), λ79d3c00acc3e = o(423);
    let λ5e69ee3f8e8c = MessagePort.prototype.postMessage, n = (λ111e3361d2b4, λe6825a908c23, λ6c2e6d86c89c) => {
      λ5e69ee3f8e8c.call(λ111e3361d2b4, λe6825a908c23, λ6c2e6d86c89c);
    };
    class a {
      port;
      readyResolve;
      readyPromise=new Promise(λ111e3361d2b4 => {
        this.readyResolve = λ111e3361d2b4;
      });
      ready=!1;
      async init() {
        await this.readyPromise, this.ready = !0;
      }
      rpc;
      constructor(λe6825a908c23) {
        this.port = λe6825a908c23, this.rpc = new λ111e3361d2b4.C({
          ready: async () => {
            this.readyResolve();
          }
        }, "\x74\x72\x61\x6e\x73\x70\x6f\x72\x74", (λ111e3361d2b4, λ6c2e6d86c89c) => {
          n(λe6825a908c23, λ111e3361d2b4, λ6c2e6d86c89c);
        }), λe6825a908c23.onmessageerror = λ111e3361d2b4 => {
          console.error("\x6f\x6e\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λ111e3361d2b4);
        }, λe6825a908c23.onmessage = λ111e3361d2b4 => {
          this.rpc.recieve(λ111e3361d2b4.data);
        }, λe6825a908c23.start();
      }
      connect(λ111e3361d2b4, λe6825a908c23, λ6c2e6d86c89c, λ79d3c00acc3e, λ5e69ee3f8e8c, λcb8b357eef70, λ75365469e464) {
        let λdfd3ddb8e761 = new MessageChannel, λ457e9b51bd44 = λdfd3ddb8e761.port1;
        return console.warn("\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6e\x67"), this.rpc.call("\x63\x6f\x6e\x6e\x65\x63\x74", {
          url: λ111e3361d2b4.href,
          protocols: λe6825a908c23,
          requestHeaders: λ6c2e6d86c89c,
          port: λdfd3ddb8e761.port2
        }, [ λdfd3ddb8e761.port2 ]).then(λ111e3361d2b4 => {
          console.log(λ111e3361d2b4), "\x73\x75\x63\x63\x65\x73\x73" === λ111e3361d2b4.result ? λ79d3c00acc3e(λ111e3361d2b4.protocol, λ111e3361d2b4.extensions) : λ75365469e464(λ111e3361d2b4.error);
        }), λ457e9b51bd44.onmessage = λ111e3361d2b4 => {
          let λe6825a908c23 = λ111e3361d2b4.data;
          "\x64\x61\x74\x61" === λe6825a908c23.type ? λ5e69ee3f8e8c(λe6825a908c23.data) : "\x63\x6c\x6f\x73\x65" === λe6825a908c23.type && λcb8b357eef70(λe6825a908c23.code, λe6825a908c23.reason);
        }, λ457e9b51bd44.onmessageerror = λ111e3361d2b4 => {
          console.error("\x6f\x6e\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λ111e3361d2b4), λ75365469e464("\x4d\x65\x73\x73\x61\x67\x65\x20\x65\x72\x72\x6f\x72\x20\x69\x6e\x20\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x6f\x72\x74");
        }, [ λ111e3361d2b4 => {
          n(λ457e9b51bd44, {
            type: "\x64\x61\x74\x61",
            data: λ111e3361d2b4
          }, λ111e3361d2b4 instanceof ArrayBuffer ? [ λ111e3361d2b4 ] : []);
        }, λ111e3361d2b4 => {
          n(λ457e9b51bd44, {
            type: "\x63\x6c\x6f\x73\x65",
            code: λ111e3361d2b4
          });
        } ];
      }
      async request(λ111e3361d2b4, λe6825a908c23, λ6c2e6d86c89c, λ79d3c00acc3e, λ5e69ee3f8e8c) {
        return await this.rpc.call("\x72\x65\x71\x75\x65\x73\x74", {
          remote: λ111e3361d2b4.href,
          method: λe6825a908c23,
          body: λ6c2e6d86c89c,
          headers: λ79d3c00acc3e
        });
      }
      async sendSetCookie(λ111e3361d2b4, λe6825a908c23 = {}) {
        await this.rpc.call("\x73\x65\x6e\x64\x53\x65\x74\x43\x6f\x6f\x6b\x69\x65", {
          cookies: λ111e3361d2b4.map(({url: λ111e3361d2b4, cookie: λe6825a908c23}) => ({
            url: λ111e3361d2b4.href,
            cookie: λe6825a908c23
          })),
          options: λe6825a908c23
        });
      }
    }
    let λcb8b357eef70 = navigator.serviceWorker.controller;
    function l(λ111e3361d2b4) {
      if (λ79d3c00acc3e.pX in globalThis) return void globalThis[λ79d3c00acc3e.pX].syncDocumentInit({
        initHeaders: λ111e3361d2b4.initHeaders,
        history: λ111e3361d2b4.history,
        cookies: λ111e3361d2b4.cookies
      });
      if (!("\x57\x41\x53\x4d" in self)) throw Error("\x57\x41\x53\x4d\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x69\x6e\x20\x67\x6c\x6f\x62\x61\x6c\x20\x73\x63\x6f\x70\x65\x21");
      let λe6825a908c23 = Uint8Array.from(atob(self.WASM), λ111e3361d2b4 => λ111e3361d2b4.charCodeAt(0));
      delete self.WASM, (0, λ79d3c00acc3e.ht)(λe6825a908c23), new h(globalThis, λ111e3361d2b4);
    }
    class h {
      global;
      init;
      client;
      cookieJar;
      transport;
      handleServiceWorkerCookieMessage;
      constructor(λ111e3361d2b4, λe6825a908c23) {
        this.global = λ111e3361d2b4, this.init = λe6825a908c23;
        const λ6c2e6d86c89c = new MessageChannel;
        this.transport = new a(λ6c2e6d86c89c.port1), λcb8b357eef70?.postMessage({
          $sw$initRemoteTransport: {
            port: λ6c2e6d86c89c.port2,
            prefix: this.init.prefix.href
          }
        }, [ λ6c2e6d86c89c.port2 ]), this.cookieJar = new λ79d3c00acc3e.cP, this.cookieJar.load(this.init.cookies), 
        this.handleServiceWorkerCookieMessage = λ111e3361d2b4 => {
          if (!λ111e3361d2b4.data?.$controller$setCookie || "\x6f\x62\x6a\x65\x63\x74" != typeof λ111e3361d2b4.data.$controller$setCookie) return;
          let λe6825a908c23 = λ111e3361d2b4.data.$controller$setCookie;
          if (λe6825a908c23.controllerId && !String(this.init.prefix?.pathname || "").includes("\x2f" + λe6825a908c23.controllerId + "\x2f")) return;
          if (λe6825a908c23.options?.clear && this.cookieJar.clear(), Array.isArray(λe6825a908c23.cookies)) {
            for (let λ111e3361d2b4 of λe6825a908c23.cookies) if ("\x73\x74\x72\x69\x6e\x67" == typeof λ111e3361d2b4?.url && "\x73\x74\x72\x69\x6e\x67" == typeof λ111e3361d2b4.cookie) try {
              this.cookieJar.setCookies(λ111e3361d2b4.cookie, new URL(λ111e3361d2b4.url));
            } catch {
              console.error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x73\x65\x74\x20\x63\x6f\x6f\x6b\x69\x65", λ111e3361d2b4);
            }
          }
          if ("\x73\x74\x72\x69\x6e\x67" == typeof λe6825a908c23.id) {
            let λ111e3361d2b4 = navigator.serviceWorker?.controller ?? λcb8b357eef70;
            λ111e3361d2b4?.postMessage({
              $sw$setCookieDone: {
                id: λe6825a908c23.id
              }
            });
          }
        }, navigator.serviceWorker?.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", this.handleServiceWorkerCookieMessage), 
        this.\u{69}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{74}\u{75}\u{64}\u{79}\u{4a}\u{65}\u{74}();
      }
      \u{69}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{74}\u{75}\u{64}\u{79}\u{4a}\u{65}\u{74}() {
        let λ111e3361d2b4 = this.global.frameElement;
        λ111e3361d2b4 && !λ111e3361d2b4.name && (window.name = λ111e3361d2b4.name = `${Array(8).fill(0).map(() => Math.floor(36 * Math.random()).toString(36)).join("")}`);
        let λ6c2e6d86c89c = λ111e3361d2b4?.[λe6825a908c23.I], λ5e69ee3f8e8c = !0;
        if (!λ6c2e6d86c89c) {
          λ5e69ee3f8e8c = !1;
          let λ111e3361d2b4 = this.global.window;
          for (;λ111e3361d2b4.parent !== λ111e3361d2b4; ) {
            let λ5e69ee3f8e8c = λ111e3361d2b4[λ79d3c00acc3e.pX];
            if (!λ5e69ee3f8e8c) {
              λ111e3361d2b4 = λ111e3361d2b4.parent.window;
              continue;
            }
            let λcb8b357eef70 = λ5e69ee3f8e8c.descriptors.get("\x77\x69\x6e\x64\x6f\x77\x2e\x66\x72\x61\x6d\x65\x45\x6c\x65\x6d\x65\x6e\x74", λ111e3361d2b4);
            if (λcb8b357eef70 && λcb8b357eef70[λe6825a908c23.I]) {
              λ6c2e6d86c89c = λcb8b357eef70[λe6825a908c23.I];
              break;
            }
            λ111e3361d2b4 = λ111e3361d2b4.parent.window;
          }
        }
        let λcb8b357eef70 = {
          config: this.init.sjconfig,
          prefix: this.init.prefix,
          cookieJar: this.cookieJar,
          interface: {
            \u{67}\u{65}\u{74}\u{49}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{63}\u{72}\u{69}\u{70}\u{74}\u{73}: this.init.\u{79}\u{69}\u{65}\u{6c}\u{64}\u{47}\u{65}\u{74}\u{49}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{63}\u{72}\u{69}\u{70}\u{74}\u{73}(this.init.config, this.init.sjconfig, this.init.prefix, this.cookieJar, this.init.codecEncode, this.init.codecDecode),
            codecEncode: this.init.codecEncode,
            codecDecode: this.init.codecDecode
          }
        };
        this.client = new λ79d3c00acc3e.bw(this.global, {
          context: λcb8b357eef70,
          transport: this.transport,
          sendSetCookie: async (λ111e3361d2b4, λe6825a908c23) => {
            await this.transport.sendSetCookie(λ111e3361d2b4, λe6825a908c23);
          },
          shouldBlockMessageEvent: () => !1,
          hookSubcontext: λ111e3361d2b4 => new h(λ111e3361d2b4, {
            ...this.init,
            cookies: this.cookieJar.dump()
          }).client,
          initHeaders: this.init.initHeaders,
          history: this.init.history
        });
        let λ75365469e464 = {
          window: this.global.window,
          client: this.client,
          isTopLevel: λ5e69ee3f8e8c
        };
        λ6c2e6d86c89c && λ79d3c00acc3e.Cx.dispatch(λ6c2e6d86c89c.hooks.init.pre, λ75365469e464, {}), 
        this.client.hook(), λ6c2e6d86c89c && λ79d3c00acc3e.Cx.dispatch(λ6c2e6d86c89c.hooks.init.post, λ75365469e464, {});
      }
    }
  })(), $studyjetController = λ6c2e6d86c89c;
})();
