var $studyjetController;

(() => {
  var λd06c738b36a8 = {
    286(λd06c738b36a8, λ8adbf4f0b1c7, λc06584339b3a) {
      λc06584339b3a.d(λ8adbf4f0b1c7, {
        I: () => λ3a2a00e98d38
      });
      let λ3a2a00e98d38 = Symbol.for("\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x66\x72\x61\x6d\x65\x20\x68\x61\x6e\x64\x6c\x65");
    },
    805(λd06c738b36a8, λ8adbf4f0b1c7, λc06584339b3a) {
      λc06584339b3a.d(λ8adbf4f0b1c7, {
        C: () => r
      });
      class r {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λd06c738b36a8, λ8adbf4f0b1c7, λc06584339b3a) {
          this.methods = λd06c738b36a8, this.id = λ8adbf4f0b1c7, this.sendRaw = λc06584339b3a;
        }
        recieve(λd06c738b36a8) {
          if (null == λd06c738b36a8 || "\x6f\x62\x6a\x65\x63\x74" != typeof λd06c738b36a8) return;
          let λ8adbf4f0b1c7 = λd06c738b36a8[this.id];
          if (null == λ8adbf4f0b1c7 || "\x6f\x62\x6a\x65\x63\x74" != typeof λ8adbf4f0b1c7) return;
          let λc06584339b3a = λ8adbf4f0b1c7.$type;
          if ("\x72\x65\x73\x70\x6f\x6e\x73\x65" === λc06584339b3a) {
            let λd06c738b36a8 = λ8adbf4f0b1c7.$token, λc06584339b3a = λ8adbf4f0b1c7.$data, λ3a2a00e98d38 = λ8adbf4f0b1c7.$error, λ223898a6df18 = this.promiseCallbacks.get(λd06c738b36a8);
            if (!λ223898a6df18) return;
            this.promiseCallbacks.delete(λd06c738b36a8), void 0 !== λ3a2a00e98d38 ? λ223898a6df18.reject(Error(λ3a2a00e98d38)) : λ223898a6df18.resolve(λc06584339b3a);
          } else if ("\x72\x65\x71\x75\x65\x73\x74" === λc06584339b3a) {
            let λd06c738b36a8 = λ8adbf4f0b1c7.$method, λc06584339b3a = λ8adbf4f0b1c7.$args;
            this.methods[λd06c738b36a8](λc06584339b3a).then(λd06c738b36a8 => {
              this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ8adbf4f0b1c7.$token,
                  $data: λd06c738b36a8?.[0]
                }
              }, λd06c738b36a8?.[1]);
            }).catch(λd06c738b36a8 => {
              console.error(λd06c738b36a8), this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ8adbf4f0b1c7.$token,
                  $error: λd06c738b36a8?.toString() || "\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x65\x72\x72\x6f\x72"
                }
              }, []);
            });
          }
        }
        call(λd06c738b36a8, λ8adbf4f0b1c7, λc06584339b3a = []) {
          let λ3a2a00e98d38 = this.counter++;
          return new Promise((λ223898a6df18, λ066792793a56) => {
            this.promiseCallbacks.set(λ3a2a00e98d38, {
              resolve: λ223898a6df18,
              reject: λ066792793a56
            }), this.sendRaw({
              [this.id]: {
                $type: "\x72\x65\x71\x75\x65\x73\x74",
                $method: λd06c738b36a8,
                $args: λ8adbf4f0b1c7,
                $token: λ3a2a00e98d38
              }
            }, λc06584339b3a);
          });
        }
      }
    },
    423(λd06c738b36a8, λ8adbf4f0b1c7, λc06584339b3a) {
      λc06584339b3a.d(λ8adbf4f0b1c7, {
        Cx: () => λfc13065d1627,
        bw: () => λb3fd591aa458,
        cP: () => λ223898a6df18,
        ht: () => λfe20b3e0697d,
        pX: () => λ06fc95a2360d
      });
      let {BareResponse: λ3a2a00e98d38, CookieJar: λ223898a6df18, IncrementalHtmlRewriter: λ066792793a56, Plugin: λ1e3473c3270a, STUDYJETCLIENT: λ06fc95a2360d, STUDYJETCLIENTNAME: λ0c7586e71263, StudyJetClient: λb3fd591aa458, StudyJetFetchHandler: λdf661f4b48f4, StudyJetFetchTrackedClient: λ8fe5cc799469, StudyJetHeaders: λffe14c3f8bdb, Tap: λfc13065d1627, \u{63}\u{72}\u{65}\u{61}\u{74}\u{65}\u{4c}\u{6f}\u{63}\u{61}\u{74}\u{69}\u{6f}\u{6e}\u{50}\u{72}\u{6f}\u{78}\u{79}: λ2cda00cbcd57, defaultConfig: λece2e265a649, defaultConfigDev: λ1a3620d4462a, flagEnabled: λ5226e9f0e849, getOwnPropertyDescriptorHandler: λ4b7b7803c8c4, getRewriter: λ71a2521cd99d, getScriptBlockTypeString: λ694a94bf8b4c, htmlRules: λa56dbe805c7e, isArchiveMimeType: λ66a4d0d0abaf, isAudioOrVideoMimeType: λ4f662c42919c, isFontMimeType: λ81d803a470da, isHtmlMimeType: λ322113fa368d, isImageMimeType: λfd80334e338e, isInlineDisplayableMimeType: λ7a03e433143f, isJavascriptMimeType: λ419d1c19a4d7, isJavascriptMimeTypeEssenceMatch: λ5078c8427377, isModuleScriptType: λ096854ab4303, isScriptType: λ5740c6adcd68, isScriptableMimeType: λ16c9ea34afac, isXmlMimeType: λ36fe55d8cab7, isZipBasedMimeType: λaa6784d352f4, isdedicated: λ1164cf25a81a, isshared: λ8d7e23464d43, issw: λ8a2f09b8fa1e, iswindow: λ39b09b471486, isworker: λ2cc34106af75, parseMimeType: λ0b0b921663e6, rewriteBlob: λ7e549df0644a, rewriteCss: λ21a92a49ea5f, rewriteHtml: λc70559bb5c6b, rewriteJs: λ6edee4af6085, rewriteJsInner: λ02d08a507d81, rewriteSrcset: λ067ca36125f7, rewriteUrl: λff29a8f0b494, rewriteWorkers: λ5b23c2d762f5, setWasm: λfe20b3e0697d, unrewriteBlob: λ3d87314d2ee5, unrewriteCss: λb0ef8c6e516c, unrewriteHtml: λ787597e67262, unrewriteUrl: λ10a8450ff0f9, versionInfo: λ41c085d02361} = globalThis.$studyjet;
    }
  }, λ8adbf4f0b1c7 = {};
  function o(λc06584339b3a) {
    var λ3a2a00e98d38 = λ8adbf4f0b1c7[λc06584339b3a];
    if (void 0 !== λ3a2a00e98d38) return λ3a2a00e98d38.exports;
    var λ223898a6df18 = λ8adbf4f0b1c7[λc06584339b3a] = {
      exports: {}
    };
    return λd06c738b36a8[λc06584339b3a](λ223898a6df18, λ223898a6df18.exports, o), λ223898a6df18.exports;
  }
  o.d = (λd06c738b36a8, λ8adbf4f0b1c7) => {
    for (var λc06584339b3a in λ8adbf4f0b1c7) o.o(λ8adbf4f0b1c7, λc06584339b3a) && !o.o(λd06c738b36a8, λc06584339b3a) && Object.defineProperty(λd06c738b36a8, λc06584339b3a, {
      enumerable: !0,
      get: λ8adbf4f0b1c7[λc06584339b3a]
    });
  }, o.o = (λd06c738b36a8, λ8adbf4f0b1c7) => Object.prototype.hasOwnProperty.call(λd06c738b36a8, λ8adbf4f0b1c7), 
  o.r = λd06c738b36a8 => {
    "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λd06c738b36a8, Symbol.toStringTag, {
      value: "\x4d\x6f\x64\x75\x6c\x65"
    }), Object.defineProperty(λd06c738b36a8, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
      value: !0
    });
  };
  var λc06584339b3a = {};
  (() => {
    o.r(λc06584339b3a), o.d(λc06584339b3a, {
      load: () => l
    });
    var λd06c738b36a8 = o(805), λ8adbf4f0b1c7 = o(286), λ3a2a00e98d38 = o(423);
    let λ223898a6df18 = MessagePort.prototype.postMessage, n = (λd06c738b36a8, λ8adbf4f0b1c7, λc06584339b3a) => {
      λ223898a6df18.call(λd06c738b36a8, λ8adbf4f0b1c7, λc06584339b3a);
    };
    class a {
      port;
      readyResolve;
      readyPromise=new Promise(λd06c738b36a8 => {
        this.readyResolve = λd06c738b36a8;
      });
      ready=!1;
      async init() {
        await this.readyPromise, this.ready = !0;
      }
      rpc;
      constructor(λ8adbf4f0b1c7) {
        this.port = λ8adbf4f0b1c7, this.rpc = new λd06c738b36a8.C({
          ready: async () => {
            this.readyResolve();
          }
        }, "\x74\x72\x61\x6e\x73\x70\x6f\x72\x74", (λd06c738b36a8, λc06584339b3a) => {
          n(λ8adbf4f0b1c7, λd06c738b36a8, λc06584339b3a);
        }), λ8adbf4f0b1c7.onmessageerror = λd06c738b36a8 => {
          console.error("\x6f\x6e\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λd06c738b36a8);
        }, λ8adbf4f0b1c7.onmessage = λd06c738b36a8 => {
          this.rpc.recieve(λd06c738b36a8.data);
        }, λ8adbf4f0b1c7.start();
      }
      connect(λd06c738b36a8, λ8adbf4f0b1c7, λc06584339b3a, λ3a2a00e98d38, λ223898a6df18, λ066792793a56, λ1e3473c3270a) {
        let λ06fc95a2360d = new MessageChannel, λ0c7586e71263 = λ06fc95a2360d.port1;
        return console.warn("\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6e\x67"), this.rpc.call("\x63\x6f\x6e\x6e\x65\x63\x74", {
          url: λd06c738b36a8.href,
          protocols: λ8adbf4f0b1c7,
          requestHeaders: λc06584339b3a,
          port: λ06fc95a2360d.port2
        }, [ λ06fc95a2360d.port2 ]).then(λd06c738b36a8 => {
          console.log(λd06c738b36a8), "\x73\x75\x63\x63\x65\x73\x73" === λd06c738b36a8.result ? λ3a2a00e98d38(λd06c738b36a8.protocol, λd06c738b36a8.extensions) : λ1e3473c3270a(λd06c738b36a8.error);
        }), λ0c7586e71263.onmessage = λd06c738b36a8 => {
          let λ8adbf4f0b1c7 = λd06c738b36a8.data;
          "\x64\x61\x74\x61" === λ8adbf4f0b1c7.type ? λ223898a6df18(λ8adbf4f0b1c7.data) : "\x63\x6c\x6f\x73\x65" === λ8adbf4f0b1c7.type && λ066792793a56(λ8adbf4f0b1c7.code, λ8adbf4f0b1c7.reason);
        }, λ0c7586e71263.onmessageerror = λd06c738b36a8 => {
          console.error("\x6f\x6e\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λd06c738b36a8), λ1e3473c3270a("\x4d\x65\x73\x73\x61\x67\x65\x20\x65\x72\x72\x6f\x72\x20\x69\x6e\x20\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x6f\x72\x74");
        }, [ λd06c738b36a8 => {
          n(λ0c7586e71263, {
            type: "\x64\x61\x74\x61",
            data: λd06c738b36a8
          }, λd06c738b36a8 instanceof ArrayBuffer ? [ λd06c738b36a8 ] : []);
        }, λd06c738b36a8 => {
          n(λ0c7586e71263, {
            type: "\x63\x6c\x6f\x73\x65",
            code: λd06c738b36a8
          });
        } ];
      }
      async request(λd06c738b36a8, λ8adbf4f0b1c7, λc06584339b3a, λ3a2a00e98d38, λ223898a6df18) {
        return await this.rpc.call("\x72\x65\x71\x75\x65\x73\x74", {
          remote: λd06c738b36a8.href,
          method: λ8adbf4f0b1c7,
          body: λc06584339b3a,
          headers: λ3a2a00e98d38
        });
      }
      async sendSetCookie(λd06c738b36a8, λ8adbf4f0b1c7 = {}) {
        await this.rpc.call("\x73\x65\x6e\x64\x53\x65\x74\x43\x6f\x6f\x6b\x69\x65", {
          cookies: λd06c738b36a8.map(({url: λd06c738b36a8, cookie: λ8adbf4f0b1c7}) => ({
            url: λd06c738b36a8.href,
            cookie: λ8adbf4f0b1c7
          })),
          options: λ8adbf4f0b1c7
        });
      }
    }
    let λ066792793a56 = navigator.serviceWorker.controller;
    function l(λd06c738b36a8) {
      if (λ3a2a00e98d38.pX in globalThis) return void globalThis[λ3a2a00e98d38.pX].syncDocumentInit({
        initHeaders: λd06c738b36a8.initHeaders,
        history: λd06c738b36a8.history,
        cookies: λd06c738b36a8.cookies
      });
      if (!("\x57\x41\x53\x4d" in self)) throw Error("\x57\x41\x53\x4d\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x69\x6e\x20\x67\x6c\x6f\x62\x61\x6c\x20\x73\x63\x6f\x70\x65\x21");
      let λ8adbf4f0b1c7 = Uint8Array.from(atob(self.WASM), λd06c738b36a8 => λd06c738b36a8.charCodeAt(0));
      delete self.WASM, (0, λ3a2a00e98d38.ht)(λ8adbf4f0b1c7), new h(globalThis, λd06c738b36a8);
    }
    class h {
      global;
      init;
      client;
      cookieJar;
      transport;
      handleServiceWorkerCookieMessage;
      constructor(λd06c738b36a8, λ8adbf4f0b1c7) {
        this.global = λd06c738b36a8, this.init = λ8adbf4f0b1c7;
        const λc06584339b3a = new MessageChannel;
        this.transport = new a(λc06584339b3a.port1), λ066792793a56?.postMessage({
          $sw$initRemoteTransport: {
            port: λc06584339b3a.port2,
            prefix: this.init.prefix.href
          }
        }, [ λc06584339b3a.port2 ]), this.cookieJar = new λ3a2a00e98d38.cP, this.cookieJar.load(this.init.cookies), 
        this.handleServiceWorkerCookieMessage = λd06c738b36a8 => {
          if (!λd06c738b36a8.data?.$controller$setCookie || "\x6f\x62\x6a\x65\x63\x74" != typeof λd06c738b36a8.data.$controller$setCookie) return;
          let λ8adbf4f0b1c7 = λd06c738b36a8.data.$controller$setCookie;
          if (λ8adbf4f0b1c7.controllerId && !String(this.init.prefix?.pathname || "").includes("\x2f" + λ8adbf4f0b1c7.controllerId + "\x2f")) return;
          if (λ8adbf4f0b1c7.options?.clear && this.cookieJar.clear(), Array.isArray(λ8adbf4f0b1c7.cookies)) {
            for (let λd06c738b36a8 of λ8adbf4f0b1c7.cookies) if ("\x73\x74\x72\x69\x6e\x67" == typeof λd06c738b36a8?.url && "\x73\x74\x72\x69\x6e\x67" == typeof λd06c738b36a8.cookie) try {
              this.cookieJar.setCookies(λd06c738b36a8.cookie, new URL(λd06c738b36a8.url));
            } catch {
              console.error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x73\x65\x74\x20\x63\x6f\x6f\x6b\x69\x65", λd06c738b36a8);
            }
          }
          if ("\x73\x74\x72\x69\x6e\x67" == typeof λ8adbf4f0b1c7.id) {
            let λd06c738b36a8 = navigator.serviceWorker?.controller ?? λ066792793a56;
            λd06c738b36a8?.postMessage({
              $sw$setCookieDone: {
                id: λ8adbf4f0b1c7.id
              }
            });
          }
        }, navigator.serviceWorker?.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", this.handleServiceWorkerCookieMessage), 
        this.\u{69}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{74}\u{75}\u{64}\u{79}\u{4a}\u{65}\u{74}();
      }
      \u{69}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{74}\u{75}\u{64}\u{79}\u{4a}\u{65}\u{74}() {
        let λd06c738b36a8 = this.global.frameElement;
        λd06c738b36a8 && !λd06c738b36a8.name && (window.name = λd06c738b36a8.name = `${Array(8).fill(0).map(() => Math.floor(36 * Math.random()).toString(36)).join("")}`);
        let λc06584339b3a = λd06c738b36a8?.[λ8adbf4f0b1c7.I], λ223898a6df18 = !0;
        if (!λc06584339b3a) {
          λ223898a6df18 = !1;
          let λd06c738b36a8 = this.global.window;
          for (;λd06c738b36a8.parent !== λd06c738b36a8; ) {
            let λ223898a6df18 = λd06c738b36a8[λ3a2a00e98d38.pX];
            if (!λ223898a6df18) {
              λd06c738b36a8 = λd06c738b36a8.parent.window;
              continue;
            }
            let λ066792793a56 = λ223898a6df18.descriptors.get("\x77\x69\x6e\x64\x6f\x77\x2e\x66\x72\x61\x6d\x65\x45\x6c\x65\x6d\x65\x6e\x74", λd06c738b36a8);
            if (λ066792793a56 && λ066792793a56[λ8adbf4f0b1c7.I]) {
              λc06584339b3a = λ066792793a56[λ8adbf4f0b1c7.I];
              break;
            }
            λd06c738b36a8 = λd06c738b36a8.parent.window;
          }
        }
        let λ066792793a56 = {
          config: this.init.sjconfig,
          prefix: this.init.prefix,
          cookieJar: this.cookieJar,
          interface: {
            \u{67}\u{65}\u{74}\u{49}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{63}\u{72}\u{69}\u{70}\u{74}\u{73}: this.init.\u{79}\u{69}\u{65}\u{6c}\u{64}\u{47}\u{65}\u{74}\u{49}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{63}\u{72}\u{69}\u{70}\u{74}\u{73}(this.init.config, this.init.sjconfig, this.init.prefix, this.cookieJar, this.init.codecEncode, this.init.codecDecode),
            codecEncode: this.init.codecEncode,
            codecDecode: this.init.codecDecode
          }
        };
        this.client = new λ3a2a00e98d38.bw(this.global, {
          context: λ066792793a56,
          transport: this.transport,
          sendSetCookie: async (λd06c738b36a8, λ8adbf4f0b1c7) => {
            await this.transport.sendSetCookie(λd06c738b36a8, λ8adbf4f0b1c7);
          },
          shouldBlockMessageEvent: () => !1,
          hookSubcontext: λd06c738b36a8 => new h(λd06c738b36a8, {
            ...this.init,
            cookies: this.cookieJar.dump()
          }).client,
          initHeaders: this.init.initHeaders,
          history: this.init.history
        });
        let λ1e3473c3270a = {
          window: this.global.window,
          client: this.client,
          isTopLevel: λ223898a6df18
        };
        λc06584339b3a && λ3a2a00e98d38.Cx.dispatch(λc06584339b3a.hooks.init.pre, λ1e3473c3270a, {}), 
        this.client.hook(), λc06584339b3a && λ3a2a00e98d38.Cx.dispatch(λc06584339b3a.hooks.init.post, λ1e3473c3270a, {});
      }
    }
  })(), $studyjetController = λc06584339b3a;
})();
