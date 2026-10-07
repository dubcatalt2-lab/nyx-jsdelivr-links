var $studyjetController;

(() => {
  var λdddb2de97073 = {
    286(λdddb2de97073, λfe3bb259302a, λe939fd2dcf5d) {
      λe939fd2dcf5d.d(λfe3bb259302a, {
        I: () => λ2a0a701bdbc5
      });
      let λ2a0a701bdbc5 = Symbol.for("\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x66\x72\x61\x6d\x65\x20\x68\x61\x6e\x64\x6c\x65");
    },
    805(λdddb2de97073, λfe3bb259302a, λe939fd2dcf5d) {
      λe939fd2dcf5d.d(λfe3bb259302a, {
        C: () => r
      });
      class r {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λdddb2de97073, λfe3bb259302a, λe939fd2dcf5d) {
          this.methods = λdddb2de97073, this.id = λfe3bb259302a, this.sendRaw = λe939fd2dcf5d;
        }
        recieve(λdddb2de97073) {
          if (null == λdddb2de97073 || "\x6f\x62\x6a\x65\x63\x74" != typeof λdddb2de97073) return;
          let λfe3bb259302a = λdddb2de97073[this.id];
          if (null == λfe3bb259302a || "\x6f\x62\x6a\x65\x63\x74" != typeof λfe3bb259302a) return;
          let λe939fd2dcf5d = λfe3bb259302a.$type;
          if ("\x72\x65\x73\x70\x6f\x6e\x73\x65" === λe939fd2dcf5d) {
            let λdddb2de97073 = λfe3bb259302a.$token, λe939fd2dcf5d = λfe3bb259302a.$data, λ2a0a701bdbc5 = λfe3bb259302a.$error, λ481a7ca264c8 = this.promiseCallbacks.get(λdddb2de97073);
            if (!λ481a7ca264c8) return;
            this.promiseCallbacks.delete(λdddb2de97073), void 0 !== λ2a0a701bdbc5 ? λ481a7ca264c8.reject(Error(λ2a0a701bdbc5)) : λ481a7ca264c8.resolve(λe939fd2dcf5d);
          } else if ("\x72\x65\x71\x75\x65\x73\x74" === λe939fd2dcf5d) {
            let λdddb2de97073 = λfe3bb259302a.$method, λe939fd2dcf5d = λfe3bb259302a.$args;
            this.methods[λdddb2de97073](λe939fd2dcf5d).then(λdddb2de97073 => {
              this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λfe3bb259302a.$token,
                  $data: λdddb2de97073?.[0]
                }
              }, λdddb2de97073?.[1]);
            }).catch(λdddb2de97073 => {
              console.error(λdddb2de97073), this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λfe3bb259302a.$token,
                  $error: λdddb2de97073?.toString() || "\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x65\x72\x72\x6f\x72"
                }
              }, []);
            });
          }
        }
        call(λdddb2de97073, λfe3bb259302a, λe939fd2dcf5d = []) {
          let λ2a0a701bdbc5 = this.counter++;
          return new Promise((λ481a7ca264c8, λ676cb43fa532) => {
            this.promiseCallbacks.set(λ2a0a701bdbc5, {
              resolve: λ481a7ca264c8,
              reject: λ676cb43fa532
            }), this.sendRaw({
              [this.id]: {
                $type: "\x72\x65\x71\x75\x65\x73\x74",
                $method: λdddb2de97073,
                $args: λfe3bb259302a,
                $token: λ2a0a701bdbc5
              }
            }, λe939fd2dcf5d);
          });
        }
      }
    },
    423(λdddb2de97073, λfe3bb259302a, λe939fd2dcf5d) {
      λe939fd2dcf5d.d(λfe3bb259302a, {
        Cx: () => λ54ee3b64dfa5,
        bw: () => λ61af6fa2f49e,
        cP: () => λ481a7ca264c8,
        ht: () => λb199e6d90ecc,
        pX: () => λa609c8711cb4
      });
      let {BareResponse: λ2a0a701bdbc5, CookieJar: λ481a7ca264c8, IncrementalHtmlRewriter: λ676cb43fa532, Plugin: λ4485c6d57976, STUDYJETCLIENT: λa609c8711cb4, STUDYJETCLIENTNAME: λ1f10b9a57e1a, StudyJetClient: λ61af6fa2f49e, StudyJetFetchHandler: λ44d42d6d419a, StudyJetFetchTrackedClient: λ4cd08a8c19f3, StudyJetHeaders: λa14d264e4999, Tap: λ54ee3b64dfa5, createLocationProxy: λ2525e2d6bd15, defaultConfig: λ5292bb8736f2, defaultConfigDev: λ517fca2aebd1, flagEnabled: λf85bd797f526, getOwnPropertyDescriptorHandler: λbb2d1d4fb9e0, getRewriter: λ1974b4f144f9, getScriptBlockTypeString: λ270ad2df6f61, htmlRules: λad581bc68c6e, isArchiveMimeType: λ0b5fd2120896, isAudioOrVideoMimeType: λ7bc81dfa19d1, isFontMimeType: λfd4974f3dac0, isHtmlMimeType: λ78bff3007741, isImageMimeType: λ82bfb122f9e7, isInlineDisplayableMimeType: λa38695e4298c, isJavascriptMimeType: λ0aaad93e273d, isJavascriptMimeTypeEssenceMatch: λe80d0c95aae1, isModuleScriptType: λbc8967f2578b, isScriptType: λ32e4819b721c, isScriptableMimeType: λ1f213f7f725e, isXmlMimeType: λ1336e3a36cae, isZipBasedMimeType: λdef0bdf65bfe, isdedicated: λ232f9dfb9386, isshared: λe02b0d459965, issw: λ32d66650ef0e, iswindow: λe3b7c0254d92, isworker: λ56a9c400a3c0, parseMimeType: λc03f08ac0bab, rewriteBlob: λ652e4da7a4b4, rewriteCss: λcb440838711e, rewriteHtml: λ5877124c2037, rewriteJs: λ2edec8d4352c, rewriteJsInner: λb6e2fcdf33bd, rewriteSrcset: λ8627f74df242, rewriteUrl: λ4ae51b486dbd, rewriteWorkers: λ0468e6ac3b98, setWasm: λb199e6d90ecc, unrewriteBlob: λd195df809cfc, unrewriteCss: λd809b4da26d1, unrewriteHtml: λadf6bcc156c8, unrewriteUrl: λ784fe9375371, versionInfo: λ9a6062ff075d} = globalThis.$studyjet;
    }
  }, λfe3bb259302a = {};
  function o(λe939fd2dcf5d) {
    var λ2a0a701bdbc5 = λfe3bb259302a[λe939fd2dcf5d];
    if (void 0 !== λ2a0a701bdbc5) return λ2a0a701bdbc5.exports;
    var λ481a7ca264c8 = λfe3bb259302a[λe939fd2dcf5d] = {
      exports: {}
    };
    return λdddb2de97073[λe939fd2dcf5d](λ481a7ca264c8, λ481a7ca264c8.exports, o), λ481a7ca264c8.exports;
  }
  o.d = (λdddb2de97073, λfe3bb259302a) => {
    for (var λe939fd2dcf5d in λfe3bb259302a) o.o(λfe3bb259302a, λe939fd2dcf5d) && !o.o(λdddb2de97073, λe939fd2dcf5d) && Object.defineProperty(λdddb2de97073, λe939fd2dcf5d, {
      enumerable: !0,
      get: λfe3bb259302a[λe939fd2dcf5d]
    });
  }, o.o = (λdddb2de97073, λfe3bb259302a) => Object.prototype.hasOwnProperty.call(λdddb2de97073, λfe3bb259302a), 
  o.r = λdddb2de97073 => {
    "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λdddb2de97073, Symbol.toStringTag, {
      value: "\x4d\x6f\x64\x75\x6c\x65"
    }), Object.defineProperty(λdddb2de97073, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
      value: !0
    });
  };
  var λe939fd2dcf5d = {};
  (() => {
    o.r(λe939fd2dcf5d), o.d(λe939fd2dcf5d, {
      load: () => l
    });
    var λdddb2de97073 = o(805), λfe3bb259302a = o(286), λ2a0a701bdbc5 = o(423);
    let λ481a7ca264c8 = MessagePort.prototype.postMessage, n = (λdddb2de97073, λfe3bb259302a, λe939fd2dcf5d) => {
      λ481a7ca264c8.call(λdddb2de97073, λfe3bb259302a, λe939fd2dcf5d);
    };
    class a {
      port;
      readyResolve;
      readyPromise=new Promise(λdddb2de97073 => {
        this.readyResolve = λdddb2de97073;
      });
      ready=!1;
      async init() {
        await this.readyPromise, this.ready = !0;
      }
      rpc;
      constructor(λfe3bb259302a) {
        this.port = λfe3bb259302a, this.rpc = new λdddb2de97073.C({
          ready: async () => {
            this.readyResolve();
          }
        }, "\x74\x72\x61\x6e\x73\x70\x6f\x72\x74", (λdddb2de97073, λe939fd2dcf5d) => {
          n(λfe3bb259302a, λdddb2de97073, λe939fd2dcf5d);
        }), λfe3bb259302a.onmessageerror = λdddb2de97073 => {
          console.error("\x6f\x6e\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λdddb2de97073);
        }, λfe3bb259302a.onmessage = λdddb2de97073 => {
          this.rpc.recieve(λdddb2de97073.data);
        }, λfe3bb259302a.start();
      }
      connect(λdddb2de97073, λfe3bb259302a, λe939fd2dcf5d, λ2a0a701bdbc5, λ481a7ca264c8, λ676cb43fa532, λ4485c6d57976) {
        let λa609c8711cb4 = new MessageChannel, λ1f10b9a57e1a = λa609c8711cb4.port1;
        return console.warn("\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6e\x67"), this.rpc.call("\x63\x6f\x6e\x6e\x65\x63\x74", {
          url: λdddb2de97073.href,
          protocols: λfe3bb259302a,
          requestHeaders: λe939fd2dcf5d,
          port: λa609c8711cb4.port2
        }, [ λa609c8711cb4.port2 ]).then(λdddb2de97073 => {
          console.log(λdddb2de97073), "\x73\x75\x63\x63\x65\x73\x73" === λdddb2de97073.result ? λ2a0a701bdbc5(λdddb2de97073.protocol, λdddb2de97073.extensions) : λ4485c6d57976(λdddb2de97073.error);
        }), λ1f10b9a57e1a.onmessage = λdddb2de97073 => {
          let λfe3bb259302a = λdddb2de97073.data;
          "\x64\x61\x74\x61" === λfe3bb259302a.type ? λ481a7ca264c8(λfe3bb259302a.data) : "\x63\x6c\x6f\x73\x65" === λfe3bb259302a.type && λ676cb43fa532(λfe3bb259302a.code, λfe3bb259302a.reason);
        }, λ1f10b9a57e1a.onmessageerror = λdddb2de97073 => {
          console.error("\x6f\x6e\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λdddb2de97073), λ4485c6d57976("\x4d\x65\x73\x73\x61\x67\x65\x20\x65\x72\x72\x6f\x72\x20\x69\x6e\x20\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x6f\x72\x74");
        }, [ λdddb2de97073 => {
          n(λ1f10b9a57e1a, {
            type: "\x64\x61\x74\x61",
            data: λdddb2de97073
          }, λdddb2de97073 instanceof ArrayBuffer ? [ λdddb2de97073 ] : []);
        }, λdddb2de97073 => {
          n(λ1f10b9a57e1a, {
            type: "\x63\x6c\x6f\x73\x65",
            code: λdddb2de97073
          });
        } ];
      }
      async request(λdddb2de97073, λfe3bb259302a, λe939fd2dcf5d, λ2a0a701bdbc5, λ481a7ca264c8) {
        return await this.rpc.call("\x72\x65\x71\x75\x65\x73\x74", {
          remote: λdddb2de97073.href,
          method: λfe3bb259302a,
          body: λe939fd2dcf5d,
          headers: λ2a0a701bdbc5
        });
      }
      async sendSetCookie(λdddb2de97073, λfe3bb259302a = {}) {
        await this.rpc.call("\x73\x65\x6e\x64\x53\x65\x74\x43\x6f\x6f\x6b\x69\x65", {
          cookies: λdddb2de97073.map(({url: λdddb2de97073, cookie: λfe3bb259302a}) => ({
            url: λdddb2de97073.href,
            cookie: λfe3bb259302a
          })),
          options: λfe3bb259302a
        });
      }
    }
    let λ676cb43fa532 = navigator.serviceWorker.controller;
    function l(λdddb2de97073) {
      if (λ2a0a701bdbc5.pX in globalThis) return void globalThis[λ2a0a701bdbc5.pX].syncDocumentInit({
        initHeaders: λdddb2de97073.initHeaders,
        history: λdddb2de97073.history,
        cookies: λdddb2de97073.cookies
      });
      if (!("\x57\x41\x53\x4d" in self)) throw Error("\x57\x41\x53\x4d\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x69\x6e\x20\x67\x6c\x6f\x62\x61\x6c\x20\x73\x63\x6f\x70\x65\x21");
      let λfe3bb259302a = Uint8Array.from(atob(self.WASM), λdddb2de97073 => λdddb2de97073.charCodeAt(0));
      delete self.WASM, (0, λ2a0a701bdbc5.ht)(λfe3bb259302a), new h(globalThis, λdddb2de97073);
    }
    class h {
      global;
      init;
      client;
      cookieJar;
      transport;
      handleServiceWorkerCookieMessage;
      constructor(λdddb2de97073, λfe3bb259302a) {
        this.global = λdddb2de97073, this.init = λfe3bb259302a;
        const λe939fd2dcf5d = new MessageChannel;
        this.transport = new a(λe939fd2dcf5d.port1), λ676cb43fa532?.postMessage({
          $sw$initRemoteTransport: {
            port: λe939fd2dcf5d.port2,
            prefix: this.init.prefix.href
          }
        }, [ λe939fd2dcf5d.port2 ]), this.cookieJar = new λ2a0a701bdbc5.cP, this.cookieJar.load(this.init.cookies), 
        this.handleServiceWorkerCookieMessage = λdddb2de97073 => {
          if (!λdddb2de97073.data?.$controller$setCookie || "\x6f\x62\x6a\x65\x63\x74" != typeof λdddb2de97073.data.$controller$setCookie) return;
          let λfe3bb259302a = λdddb2de97073.data.$controller$setCookie;
          if (λfe3bb259302a.controllerId && !String(this.init.prefix?.pathname || "").includes("\x2f" + λfe3bb259302a.controllerId + "\x2f")) return;
          if (λfe3bb259302a.options?.clear && this.cookieJar.clear(), Array.isArray(λfe3bb259302a.cookies)) {
            for (let λdddb2de97073 of λfe3bb259302a.cookies) if ("\x73\x74\x72\x69\x6e\x67" == typeof λdddb2de97073?.url && "\x73\x74\x72\x69\x6e\x67" == typeof λdddb2de97073.cookie) try {
              this.cookieJar.setCookies(λdddb2de97073.cookie, new URL(λdddb2de97073.url));
            } catch {
              console.error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x73\x65\x74\x20\x63\x6f\x6f\x6b\x69\x65", λdddb2de97073);
            }
          }
          if ("\x73\x74\x72\x69\x6e\x67" == typeof λfe3bb259302a.id) {
            let λdddb2de97073 = navigator.serviceWorker?.controller ?? λ676cb43fa532;
            λdddb2de97073?.postMessage({
              $sw$setCookieDone: {
                id: λfe3bb259302a.id
              }
            });
          }
        }, navigator.serviceWorker?.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", this.handleServiceWorkerCookieMessage), 
        this.injectStudyJet();
      }
      injectStudyJet() {
        let λdddb2de97073 = this.global.frameElement;
        λdddb2de97073 && !λdddb2de97073.name && (window.name = λdddb2de97073.name = `${Array(8).fill(0).map(() => Math.floor(36 * Math.random()).toString(36)).join("")}`);
        let λe939fd2dcf5d = λdddb2de97073?.[λfe3bb259302a.I], λ481a7ca264c8 = !0;
        if (!λe939fd2dcf5d) {
          λ481a7ca264c8 = !1;
          let λdddb2de97073 = this.global.window;
          for (;λdddb2de97073.parent !== λdddb2de97073; ) {
            let λ481a7ca264c8 = λdddb2de97073[λ2a0a701bdbc5.pX];
            if (!λ481a7ca264c8) {
              λdddb2de97073 = λdddb2de97073.parent.window;
              continue;
            }
            let λ676cb43fa532 = λ481a7ca264c8.descriptors.get("\x77\x69\x6e\x64\x6f\x77\x2e\x66\x72\x61\x6d\x65\x45\x6c\x65\x6d\x65\x6e\x74", λdddb2de97073);
            if (λ676cb43fa532 && λ676cb43fa532[λfe3bb259302a.I]) {
              λe939fd2dcf5d = λ676cb43fa532[λfe3bb259302a.I];
              break;
            }
            λdddb2de97073 = λdddb2de97073.parent.window;
          }
        }
        let λ676cb43fa532 = {
          config: this.init.sjconfig,
          prefix: this.init.prefix,
          cookieJar: this.cookieJar,
          interface: {
            getInjectScripts: this.init.yieldGetInjectScripts(this.init.config, this.init.sjconfig, this.init.prefix, this.cookieJar, this.init.codecEncode, this.init.codecDecode),
            codecEncode: this.init.codecEncode,
            codecDecode: this.init.codecDecode
          }
        };
        this.client = new λ2a0a701bdbc5.bw(this.global, {
          context: λ676cb43fa532,
          transport: this.transport,
          sendSetCookie: async (λdddb2de97073, λfe3bb259302a) => {
            await this.transport.sendSetCookie(λdddb2de97073, λfe3bb259302a);
          },
          shouldBlockMessageEvent: () => !1,
          hookSubcontext: λdddb2de97073 => new h(λdddb2de97073, {
            ...this.init,
            cookies: this.cookieJar.dump()
          }).client,
          initHeaders: this.init.initHeaders,
          history: this.init.history
        });
        let λ4485c6d57976 = {
          window: this.global.window,
          client: this.client,
          isTopLevel: λ481a7ca264c8
        };
        λe939fd2dcf5d && λ2a0a701bdbc5.Cx.dispatch(λe939fd2dcf5d.hooks.init.pre, λ4485c6d57976, {}), 
        this.client.hook(), λe939fd2dcf5d && λ2a0a701bdbc5.Cx.dispatch(λe939fd2dcf5d.hooks.init.post, λ4485c6d57976, {});
      }
    }
  })(), $studyjetController = λe939fd2dcf5d;
})();
