var $studyjetController;

(() => {
  var λ26afa3e7e4b2 = {
    286(λ26afa3e7e4b2, λ3e6fa32ec218, λ87073ae12e66) {
      λ87073ae12e66.d(λ3e6fa32ec218, {
        I: () => λ3926c3e0c2b3
      });
      let λ3926c3e0c2b3 = Symbol.for("controller frame handle");
    },
    805(λ26afa3e7e4b2, λ3e6fa32ec218, λ87073ae12e66) {
      λ87073ae12e66.d(λ3e6fa32ec218, {
        C: () => r
      });
      class r {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λ26afa3e7e4b2, λ3e6fa32ec218, λ87073ae12e66) {
          this.methods = λ26afa3e7e4b2, this.id = λ3e6fa32ec218, this.sendRaw = λ87073ae12e66;
        }
        recieve(λ26afa3e7e4b2) {
          if (null == λ26afa3e7e4b2 || "object" != typeof λ26afa3e7e4b2) return;
          let λ3e6fa32ec218 = λ26afa3e7e4b2[this.id];
          if (null == λ3e6fa32ec218 || "object" != typeof λ3e6fa32ec218) return;
          let λ87073ae12e66 = λ3e6fa32ec218.$type;
          if ("response" === λ87073ae12e66) {
            let λ26afa3e7e4b2 = λ3e6fa32ec218.$token, λ87073ae12e66 = λ3e6fa32ec218.$data, λ3926c3e0c2b3 = λ3e6fa32ec218.$error, λ5b86ab48ca31 = this.promiseCallbacks.get(λ26afa3e7e4b2);
            if (!λ5b86ab48ca31) return;
            this.promiseCallbacks.delete(λ26afa3e7e4b2), void 0 !== λ3926c3e0c2b3 ? λ5b86ab48ca31.reject(Error(λ3926c3e0c2b3)) : λ5b86ab48ca31.resolve(λ87073ae12e66);
          } else if ("request" === λ87073ae12e66) {
            let λ26afa3e7e4b2 = λ3e6fa32ec218.$method, λ87073ae12e66 = λ3e6fa32ec218.$args;
            this.methods[λ26afa3e7e4b2](λ87073ae12e66).then(λ26afa3e7e4b2 => {
              this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ3e6fa32ec218.$token,
                  $data: λ26afa3e7e4b2?.[0]
                }
              }, λ26afa3e7e4b2?.[1]);
            }).catch(λ26afa3e7e4b2 => {
              console.error(λ26afa3e7e4b2), this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ3e6fa32ec218.$token,
                  $error: λ26afa3e7e4b2?.toString() || "Unknown error"
                }
              }, []);
            });
          }
        }
        call(λ26afa3e7e4b2, λ3e6fa32ec218, λ87073ae12e66 = []) {
          let λ3926c3e0c2b3 = this.counter++;
          return new Promise((λ5b86ab48ca31, λe016a26356ec) => {
            this.promiseCallbacks.set(λ3926c3e0c2b3, {
              resolve: λ5b86ab48ca31,
              reject: λe016a26356ec
            }), this.sendRaw({
              [this.id]: {
                $type: "request",
                $method: λ26afa3e7e4b2,
                $args: λ3e6fa32ec218,
                $token: λ3926c3e0c2b3
              }
            }, λ87073ae12e66);
          });
        }
      }
    },
    423(λ26afa3e7e4b2, λ3e6fa32ec218, λ87073ae12e66) {
      λ87073ae12e66.d(λ3e6fa32ec218, {
        Cx: () => λ93ad61b9d570,
        bw: () => λ0b0287ee113c,
        cP: () => λ5b86ab48ca31,
        ht: () => λ449f08ce1999,
        pX: () => λ4f221a8c7660
      });
      let {BareResponse: λ3926c3e0c2b3, CookieJar: λ5b86ab48ca31, IncrementalHtmlRewriter: λe016a26356ec, Plugin: λae3482db0e28, STUDYJETCLIENT: λ4f221a8c7660, STUDYJETCLIENTNAME: λ37d3a7fe765d, StudyJetClient: λ0b0287ee113c, StudyJetFetchHandler: λ555581fa388e, StudyJetFetchTrackedClient: λ9d550469f11e, StudyJetHeaders: λ5f3261990c97, Tap: λ93ad61b9d570, createLocationProxy: λ91917785fb8c, defaultConfig: λ140533e0608f, defaultConfigDev: λ567242226d5e, flagEnabled: λ651868f83733, getOwnPropertyDescriptorHandler: λ466a36eeee7c, getRewriter: λ1c7133fe9a0a, getScriptBlockTypeString: λ1c54f1bc48e0, htmlRules: λ332310c6be32, isArchiveMimeType: λ73f23cca3d62, isAudioOrVideoMimeType: λ56a45c5890e6, isFontMimeType: λ874aa14cc988, isHtmlMimeType: λ67d23cc56389, isImageMimeType: λ09bdd5746be1, isInlineDisplayableMimeType: λ95177f5efbd0, isJavascriptMimeType: λbbb60c3ee732, isJavascriptMimeTypeEssenceMatch: λ26cd353b7e71, isModuleScriptType: λ32664e59d9e8, isScriptType: λ4dfe3fc6d56a, isScriptableMimeType: λbd2cb5a8b161, isXmlMimeType: λ9e8f8951bf89, isZipBasedMimeType: λ7e32f82d3a4c, isdedicated: λ33e7eb0d3a1a, isshared: λc3ed41212edf, issw: λecc9fb0875f8, iswindow: λ76de9b6ad4a2, isworker: λ704e1f205aeb, parseMimeType: λe29976c8c0dd, rewriteBlob: λ0e0ae0ba997a, rewriteCss: λ6b785468337a, rewriteHtml: λc169393052f8, rewriteJs: λ22cb16a851b9, rewriteJsInner: λe00230a7abc0, rewriteSrcset: λ97cf1bbc42f0, rewriteUrl: λ74909f0eb8f8, rewriteWorkers: λc904df82018f, setWasm: λ449f08ce1999, unrewriteBlob: λeb787e64fd2d, unrewriteCss: λ74f2fb8f130f, unrewriteHtml: λ4ae9817c14b9, unrewriteUrl: λcfe864ab2db3, versionInfo: λ11ebb1a567a8} = globalThis.$studyjet;
    }
  }, λ3e6fa32ec218 = {};
  function o(λ87073ae12e66) {
    var λ3926c3e0c2b3 = λ3e6fa32ec218[λ87073ae12e66];
    if (void 0 !== λ3926c3e0c2b3) return λ3926c3e0c2b3.exports;
    var λ5b86ab48ca31 = λ3e6fa32ec218[λ87073ae12e66] = {
      exports: {}
    };
    return λ26afa3e7e4b2[λ87073ae12e66](λ5b86ab48ca31, λ5b86ab48ca31.exports, o), λ5b86ab48ca31.exports;
  }
  o.d = (λ26afa3e7e4b2, λ3e6fa32ec218) => {
    for (var λ87073ae12e66 in λ3e6fa32ec218) o.o(λ3e6fa32ec218, λ87073ae12e66) && !o.o(λ26afa3e7e4b2, λ87073ae12e66) && Object.defineProperty(λ26afa3e7e4b2, λ87073ae12e66, {
      enumerable: !0,
      get: λ3e6fa32ec218[λ87073ae12e66]
    });
  }, o.o = (λ26afa3e7e4b2, λ3e6fa32ec218) => Object.prototype.hasOwnProperty.call(λ26afa3e7e4b2, λ3e6fa32ec218), 
  o.r = λ26afa3e7e4b2 => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λ26afa3e7e4b2, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(λ26afa3e7e4b2, "__esModule", {
      value: !0
    });
  };
  var λ87073ae12e66 = {};
  (() => {
    o.r(λ87073ae12e66), o.d(λ87073ae12e66, {
      load: () => l
    });
    var λ26afa3e7e4b2 = o(805), λ3e6fa32ec218 = o(286), λ3926c3e0c2b3 = o(423);
    let λ5b86ab48ca31 = MessagePort.prototype.postMessage, n = (λ26afa3e7e4b2, λ3e6fa32ec218, λ87073ae12e66) => {
      λ5b86ab48ca31.call(λ26afa3e7e4b2, λ3e6fa32ec218, λ87073ae12e66);
    };
    class a {
      port;
      readyResolve;
      readyPromise=new Promise(λ26afa3e7e4b2 => {
        this.readyResolve = λ26afa3e7e4b2;
      });
      ready=!1;
      async init() {
        await this.readyPromise, this.ready = !0;
      }
      rpc;
      constructor(λ3e6fa32ec218) {
        this.port = λ3e6fa32ec218, this.rpc = new λ26afa3e7e4b2.C({
          ready: async () => {
            this.readyResolve();
          }
        }, "transport", (λ26afa3e7e4b2, λ87073ae12e66) => {
          n(λ3e6fa32ec218, λ26afa3e7e4b2, λ87073ae12e66);
        }), λ3e6fa32ec218.onmessageerror = λ26afa3e7e4b2 => {
          console.error("onmessageerror (this should never happen!)", λ26afa3e7e4b2);
        }, λ3e6fa32ec218.onmessage = λ26afa3e7e4b2 => {
          this.rpc.recieve(λ26afa3e7e4b2.data);
        }, λ3e6fa32ec218.start();
      }
      connect(λ26afa3e7e4b2, λ3e6fa32ec218, λ87073ae12e66, λ3926c3e0c2b3, λ5b86ab48ca31, λe016a26356ec, λae3482db0e28) {
        let λ4f221a8c7660 = new MessageChannel, λ37d3a7fe765d = λ4f221a8c7660.port1;
        return console.warn("connecting"), this.rpc.call("connect", {
          url: λ26afa3e7e4b2.href,
          protocols: λ3e6fa32ec218,
          requestHeaders: λ87073ae12e66,
          port: λ4f221a8c7660.port2
        }, [ λ4f221a8c7660.port2 ]).then(λ26afa3e7e4b2 => {
          console.log(λ26afa3e7e4b2), "success" === λ26afa3e7e4b2.result ? λ3926c3e0c2b3(λ26afa3e7e4b2.protocol, λ26afa3e7e4b2.extensions) : λae3482db0e28(λ26afa3e7e4b2.error);
        }), λ37d3a7fe765d.onmessage = λ26afa3e7e4b2 => {
          let λ3e6fa32ec218 = λ26afa3e7e4b2.data;
          "data" === λ3e6fa32ec218.type ? λ5b86ab48ca31(λ3e6fa32ec218.data) : "close" === λ3e6fa32ec218.type && λe016a26356ec(λ3e6fa32ec218.code, λ3e6fa32ec218.reason);
        }, λ37d3a7fe765d.onmessageerror = λ26afa3e7e4b2 => {
          console.error("onmessageerror (this should never happen!)", λ26afa3e7e4b2), λae3482db0e28("Message error in transport port");
        }, [ λ26afa3e7e4b2 => {
          n(λ37d3a7fe765d, {
            type: "data",
            data: λ26afa3e7e4b2
          }, λ26afa3e7e4b2 instanceof ArrayBuffer ? [ λ26afa3e7e4b2 ] : []);
        }, λ26afa3e7e4b2 => {
          n(λ37d3a7fe765d, {
            type: "close",
            code: λ26afa3e7e4b2
          });
        } ];
      }
      async request(λ26afa3e7e4b2, λ3e6fa32ec218, λ87073ae12e66, λ3926c3e0c2b3, λ5b86ab48ca31) {
        return await this.rpc.call("request", {
          remote: λ26afa3e7e4b2.href,
          method: λ3e6fa32ec218,
          body: λ87073ae12e66,
          headers: λ3926c3e0c2b3
        });
      }
      async sendSetCookie(λ26afa3e7e4b2, λ3e6fa32ec218 = {}) {
        await this.rpc.call("sendSetCookie", {
          cookies: λ26afa3e7e4b2.map(({url: λ26afa3e7e4b2, cookie: λ3e6fa32ec218}) => ({
            url: λ26afa3e7e4b2.href,
            cookie: λ3e6fa32ec218
          })),
          options: λ3e6fa32ec218
        });
      }
    }
    let λe016a26356ec = navigator.serviceWorker.controller;
    function l(λ26afa3e7e4b2) {
      if (λ3926c3e0c2b3.pX in globalThis) return void globalThis[λ3926c3e0c2b3.pX].syncDocumentInit({
        initHeaders: λ26afa3e7e4b2.initHeaders,
        history: λ26afa3e7e4b2.history,
        cookies: λ26afa3e7e4b2.cookies
      });
      if (!("WASM" in self)) throw Error("WASM not found in global scope!");
      let λ3e6fa32ec218 = Uint8Array.from(atob(self.WASM), λ26afa3e7e4b2 => λ26afa3e7e4b2.charCodeAt(0));
      delete self.WASM, (0, λ3926c3e0c2b3.ht)(λ3e6fa32ec218), new h(globalThis, λ26afa3e7e4b2);
    }
    class h {
      global;
      init;
      client;
      cookieJar;
      transport;
      handleServiceWorkerCookieMessage;
      constructor(λ26afa3e7e4b2, λ3e6fa32ec218) {
        this.global = λ26afa3e7e4b2, this.init = λ3e6fa32ec218;
        const λ87073ae12e66 = new MessageChannel;
        this.transport = new a(λ87073ae12e66.port1), λe016a26356ec?.postMessage({
          $sw$initRemoteTransport: {
            port: λ87073ae12e66.port2,
            prefix: this.init.prefix.href
          }
        }, [ λ87073ae12e66.port2 ]), this.cookieJar = new λ3926c3e0c2b3.cP, this.cookieJar.load(this.init.cookies), 
        this.handleServiceWorkerCookieMessage = λ26afa3e7e4b2 => {
          if (!λ26afa3e7e4b2.data?.$controller$setCookie || "object" != typeof λ26afa3e7e4b2.data.$controller$setCookie) return;
          let λ3e6fa32ec218 = λ26afa3e7e4b2.data.$controller$setCookie;
          if (λ3e6fa32ec218.controllerId && !String(this.init.prefix?.pathname || "").includes("/" + λ3e6fa32ec218.controllerId + "/")) return;
          if (λ3e6fa32ec218.options?.clear && this.cookieJar.clear(), Array.isArray(λ3e6fa32ec218.cookies)) {
            for (let λ26afa3e7e4b2 of λ3e6fa32ec218.cookies) if ("string" == typeof λ26afa3e7e4b2?.url && "string" == typeof λ26afa3e7e4b2.cookie) try {
              this.cookieJar.setCookies(λ26afa3e7e4b2.cookie, new URL(λ26afa3e7e4b2.url));
            } catch {
              console.error("Failed to set cookie", λ26afa3e7e4b2);
            }
          }
          if ("string" == typeof λ3e6fa32ec218.id) {
            let λ26afa3e7e4b2 = navigator.serviceWorker?.controller ?? λe016a26356ec;
            λ26afa3e7e4b2?.postMessage({
              $sw$setCookieDone: {
                id: λ3e6fa32ec218.id
              }
            });
          }
        }, navigator.serviceWorker?.addEventListener("message", this.handleServiceWorkerCookieMessage), 
        this.injectStudyJet();
      }
      injectStudyJet() {
        let λ26afa3e7e4b2 = this.global.frameElement;
        λ26afa3e7e4b2 && !λ26afa3e7e4b2.name && (window.name = λ26afa3e7e4b2.name = `${Array(8).fill(0).map(() => Math.floor(36 * Math.random()).toString(36)).join("")}`);
        let λ87073ae12e66 = λ26afa3e7e4b2?.[λ3e6fa32ec218.I], λ5b86ab48ca31 = !0;
        if (!λ87073ae12e66) {
          λ5b86ab48ca31 = !1;
          let λ26afa3e7e4b2 = this.global.window;
          for (;λ26afa3e7e4b2.parent !== λ26afa3e7e4b2; ) {
            let λ5b86ab48ca31 = λ26afa3e7e4b2[λ3926c3e0c2b3.pX];
            if (!λ5b86ab48ca31) {
              λ26afa3e7e4b2 = λ26afa3e7e4b2.parent.window;
              continue;
            }
            let λe016a26356ec = λ5b86ab48ca31.descriptors.get("window.frameElement", λ26afa3e7e4b2);
            if (λe016a26356ec && λe016a26356ec[λ3e6fa32ec218.I]) {
              λ87073ae12e66 = λe016a26356ec[λ3e6fa32ec218.I];
              break;
            }
            λ26afa3e7e4b2 = λ26afa3e7e4b2.parent.window;
          }
        }
        let λe016a26356ec = {
          config: this.init.sjconfig,
          prefix: this.init.prefix,
          cookieJar: this.cookieJar,
          interface: {
            getInjectScripts: this.init.yieldGetInjectScripts(this.init.config, this.init.sjconfig, this.init.prefix, this.cookieJar, this.init.codecEncode, this.init.codecDecode),
            codecEncode: this.init.codecEncode,
            codecDecode: this.init.codecDecode
          }
        };
        this.client = new λ3926c3e0c2b3.bw(this.global, {
          context: λe016a26356ec,
          transport: this.transport,
          sendSetCookie: async (λ26afa3e7e4b2, λ3e6fa32ec218) => {
            await this.transport.sendSetCookie(λ26afa3e7e4b2, λ3e6fa32ec218);
          },
          shouldBlockMessageEvent: () => !1,
          hookSubcontext: λ26afa3e7e4b2 => new h(λ26afa3e7e4b2, {
            ...this.init,
            cookies: this.cookieJar.dump()
          }).client,
          initHeaders: this.init.initHeaders,
          history: this.init.history
        });
        let λae3482db0e28 = {
          window: this.global.window,
          client: this.client,
          isTopLevel: λ5b86ab48ca31
        };
        λ87073ae12e66 && λ3926c3e0c2b3.Cx.dispatch(λ87073ae12e66.hooks.init.pre, λae3482db0e28, {}), 
        this.client.hook(), λ87073ae12e66 && λ3926c3e0c2b3.Cx.dispatch(λ87073ae12e66.hooks.init.post, λae3482db0e28, {});
      }
    }
  })(), $studyjetController = λ87073ae12e66;
})();
