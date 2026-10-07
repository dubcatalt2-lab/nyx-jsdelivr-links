var $studyjetController;

(() => {
  var λ1f11ab556da5 = {
    286(λ1f11ab556da5, λ108dcadb2ee3, λ22995c8bc7ba) {
      λ22995c8bc7ba.d(λ108dcadb2ee3, {
        I: () => λ9db15f086c12
      });
      let λ9db15f086c12 = Symbol.for("\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x66\x72\x61\x6d\x65\x20\x68\x61\x6e\x64\x6c\x65");
    },
    355(λ1f11ab556da5, λ108dcadb2ee3, λ22995c8bc7ba) {
      λ22995c8bc7ba.d(λ108dcadb2ee3, {
        O: () => s,
        x: () => λ9db15f086c12
      });
      let λ9db15f086c12 = "\x30\x2e\x30\x2e\x31\x34";
      function s() {
        if ("\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" == typeof $studyjet) throw Error("\x40\x6d\x65\x72\x63\x75\x72\x79\x77\x6f\x72\x6b\x73\x68\x6f\x70\x2f\x73\x74\x75\x64\x79\x6a\x65\x74\x20\x69\x73\x20\x6e\x6f\x74\x20\x6c\x6f\x61\x64\x65\x64\x2e\x20\x4c\x6f\x61\x64\x20\x73\x74\x75\x64\x79\x6a\x65\x74\x20\x62\x65\x66\x6f\x72\x65\x20\x74\x68\x65\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2e");
        var λ1f11ab556da5 = "\x32\x2e\x30\x2e\x36\x37\x2d\x61\x6c\x70\x68\x61\x2e\x32", λ108dcadb2ee3 = $studyjet.versionInfo.version;
        if (λ1f11ab556da5 !== λ108dcadb2ee3) throw Error(`\x40\x6d\x65\x72\x63\x75\x72\x79\x77\x6f\x72\x6b\x73\x68\x6f\x70\x2f\x73\x74\x75\x64\x79\x6a\x65\x74\x20\x76\x65\x72\x73\x69\x6f\x6e\x20\x6d\x69\x73\x6d\x61\x74\x63\x68\x3a\x20\x74\x68\x69\x73\x20\x62\x75\x69\x6c\x64\x20\x65\x78\x70\x65\x63\x74\x73\x20${λ1f11ab556da5}\x2c\x20\x62\x75\x74\x20\x74\x68\x65\x20\x6c\x6f\x61\x64\x65\x64\x20\x72\x75\x6e\x74\x69\x6d\x65\x20\x69\x73\x20${λ108dcadb2ee3}`);
      }
    },
    805(λ1f11ab556da5, λ108dcadb2ee3, λ22995c8bc7ba) {
      λ22995c8bc7ba.d(λ108dcadb2ee3, {
        C: () => o
      });
      class o {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λ1f11ab556da5, λ108dcadb2ee3, λ22995c8bc7ba) {
          this.methods = λ1f11ab556da5, this.id = λ108dcadb2ee3, this.sendRaw = λ22995c8bc7ba;
        }
        recieve(λ1f11ab556da5) {
          if (null == λ1f11ab556da5 || "\x6f\x62\x6a\x65\x63\x74" != typeof λ1f11ab556da5) return;
          let λ108dcadb2ee3 = λ1f11ab556da5[this.id];
          if (null == λ108dcadb2ee3 || "\x6f\x62\x6a\x65\x63\x74" != typeof λ108dcadb2ee3) return;
          let λ22995c8bc7ba = λ108dcadb2ee3.$type;
          if ("\x72\x65\x73\x70\x6f\x6e\x73\x65" === λ22995c8bc7ba) {
            let λ1f11ab556da5 = λ108dcadb2ee3.$token, λ22995c8bc7ba = λ108dcadb2ee3.$data, λ9db15f086c12 = λ108dcadb2ee3.$error, λd1fa98cd0cba = this.promiseCallbacks.get(λ1f11ab556da5);
            if (!λd1fa98cd0cba) return;
            this.promiseCallbacks.delete(λ1f11ab556da5), void 0 !== λ9db15f086c12 ? λd1fa98cd0cba.reject(Error(λ9db15f086c12)) : λd1fa98cd0cba.resolve(λ22995c8bc7ba);
          } else if ("\x72\x65\x71\x75\x65\x73\x74" === λ22995c8bc7ba) {
            let λ1f11ab556da5 = λ108dcadb2ee3.$method, λ22995c8bc7ba = λ108dcadb2ee3.$args;
            this.methods[λ1f11ab556da5](λ22995c8bc7ba).then(λ1f11ab556da5 => {
              this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ108dcadb2ee3.$token,
                  $data: λ1f11ab556da5?.[0]
                }
              }, λ1f11ab556da5?.[1]);
            }).catch(λ1f11ab556da5 => {
              console.error(λ1f11ab556da5), this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ108dcadb2ee3.$token,
                  $error: λ1f11ab556da5?.toString() || "\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x65\x72\x72\x6f\x72"
                }
              }, []);
            });
          }
        }
        call(λ1f11ab556da5, λ108dcadb2ee3, λ22995c8bc7ba = []) {
          let λ9db15f086c12 = this.counter++;
          return new Promise((λd1fa98cd0cba, λ5c2bbe4f5ce6) => {
            this.promiseCallbacks.set(λ9db15f086c12, {
              resolve: λd1fa98cd0cba,
              reject: λ5c2bbe4f5ce6
            }), this.sendRaw({
              [this.id]: {
                $type: "\x72\x65\x71\x75\x65\x73\x74",
                $method: λ1f11ab556da5,
                $args: λ108dcadb2ee3,
                $token: λ9db15f086c12
              }
            }, λ22995c8bc7ba);
          });
        }
      }
    },
    986(λ1f11ab556da5) {
      let λ108dcadb2ee3 = Object.getPrototypeOf({});
      function r() {
        return function(λ1f11ab556da5) {
          return "\x6f\x62\x6a\x65\x63\x74" == typeof λ1f11ab556da5 && null !== λ1f11ab556da5 && !(λ1f11ab556da5 instanceof RegExp) && !(λ1f11ab556da5 instanceof Date);
        };
      }
      function o(λ1f11ab556da5) {
        function o(λ1f11ab556da5) {
          return "\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72" !== λ1f11ab556da5 && "\x70\x72\x6f\x74\x6f\x74\x79\x70\x65" !== λ1f11ab556da5 && "\x5f\x5f\x70\x72\x6f\x74\x6f\x5f\x5f" !== λ1f11ab556da5;
        }
        let λ22995c8bc7ba = Object.prototype.propertyIsEnumerable, λ9db15f086c12 = λ1f11ab556da5?.symbols ? function(λ1f11ab556da5) {
          let λ108dcadb2ee3 = Object.keys(λ1f11ab556da5), λ9db15f086c12 = Object.getOwnPropertySymbols(λ1f11ab556da5);
          for (let λd1fa98cd0cba = 0, λ5c2bbe4f5ce6 = λ9db15f086c12.length; λd1fa98cd0cba < λ5c2bbe4f5ce6; ++λd1fa98cd0cba) λ22995c8bc7ba.call(λ1f11ab556da5, λ9db15f086c12[λd1fa98cd0cba]) && λ108dcadb2ee3.push(λ9db15f086c12[λd1fa98cd0cba]);
          return λ108dcadb2ee3;
        } : Object.keys, λd1fa98cd0cba = "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ1f11ab556da5?.cloneProtoObject ? λ1f11ab556da5.cloneProtoObject : void 0, λ5c2bbe4f5ce6 = "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ1f11ab556da5?.isMergeableObject ? λ1f11ab556da5.isMergeableObject : r(), λ96d881b71822 = λ1f11ab556da5?.onlyDefinedProperties === !0, λ98208b59ec0f = λ1f11ab556da5 && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ1f11ab556da5.mergeArray ? λ1f11ab556da5.mergeArray({
          clone: d,
          deepmerge: h,
          getKeys: λ9db15f086c12,
          isMergeableObject: λ5c2bbe4f5ce6
        }) : function(λ1f11ab556da5, λ108dcadb2ee3) {
          let λ22995c8bc7ba = λ1f11ab556da5.length, λ9db15f086c12 = λ108dcadb2ee3.length, λd1fa98cd0cba = 0, λ5c2bbe4f5ce6 = Array(λ22995c8bc7ba + λ9db15f086c12);
          for (;λd1fa98cd0cba < λ22995c8bc7ba; ++λd1fa98cd0cba) λ5c2bbe4f5ce6[λd1fa98cd0cba] = d(λ1f11ab556da5[λd1fa98cd0cba]);
          for (λd1fa98cd0cba = 0; λd1fa98cd0cba < λ9db15f086c12; ++λd1fa98cd0cba) λ5c2bbe4f5ce6[λd1fa98cd0cba + λ22995c8bc7ba] = d(λ108dcadb2ee3[λd1fa98cd0cba]);
          return λ5c2bbe4f5ce6;
        };
        function d(λ1f11ab556da5) {
          return λ5c2bbe4f5ce6(λ1f11ab556da5) ? Array.isArray(λ1f11ab556da5) ? function(λ1f11ab556da5) {
            let λ108dcadb2ee3 = 0, λ22995c8bc7ba = λ1f11ab556da5.length, λ9db15f086c12 = Array(λ22995c8bc7ba);
            for (;λ108dcadb2ee3 < λ22995c8bc7ba; ++λ108dcadb2ee3) λ9db15f086c12[λ108dcadb2ee3] = d(λ1f11ab556da5[λ108dcadb2ee3]);
            return λ9db15f086c12;
          }(λ1f11ab556da5) : function(λ1f11ab556da5) {
            let λ22995c8bc7ba, λ5c2bbe4f5ce6, λ96d881b71822, λ98208b59ec0f = {};
            if (λd1fa98cd0cba && Object.getPrototypeOf(λ1f11ab556da5) !== λ108dcadb2ee3) return λd1fa98cd0cba(λ1f11ab556da5);
            let λe17e86f356af = λ9db15f086c12(λ1f11ab556da5);
            for (λ22995c8bc7ba = 0, λ5c2bbe4f5ce6 = λe17e86f356af.length; λ22995c8bc7ba < λ5c2bbe4f5ce6; ++λ22995c8bc7ba) o(λ96d881b71822 = λe17e86f356af[λ22995c8bc7ba]) && (λ98208b59ec0f[λ96d881b71822] = d(λ1f11ab556da5[λ96d881b71822]));
            return λ98208b59ec0f;
          }(λ1f11ab556da5) : λ1f11ab556da5;
        }
        function h(λ1f11ab556da5, λ22995c8bc7ba) {
          if (λ96d881b71822 && void 0 === λ22995c8bc7ba) return d(λ1f11ab556da5);
          let λe17e86f356af = Array.isArray(λ22995c8bc7ba), λ7edd8b7930d3 = Array.isArray(λ1f11ab556da5);
          return "\x6f\x62\x6a\x65\x63\x74" != typeof λ22995c8bc7ba || null === λ22995c8bc7ba ? λ22995c8bc7ba : λ5c2bbe4f5ce6(λ1f11ab556da5) ? λe17e86f356af && λ7edd8b7930d3 ? λ98208b59ec0f(λ1f11ab556da5, λ22995c8bc7ba) : λe17e86f356af !== λ7edd8b7930d3 ? d(λ22995c8bc7ba) : function(λ1f11ab556da5, λ22995c8bc7ba) {
            let λ98208b59ec0f, λe17e86f356af, λ7edd8b7930d3, λ84630eeaf8fc = {}, λe39af9d43b2b = λ9db15f086c12(λ1f11ab556da5), λ75eb9a166f88 = λ9db15f086c12(λ22995c8bc7ba);
            for (λ98208b59ec0f = 0, λe17e86f356af = λe39af9d43b2b.length; λ98208b59ec0f < λe17e86f356af; ++λ98208b59ec0f) o(λ7edd8b7930d3 = λe39af9d43b2b[λ98208b59ec0f]) && -1 === λ75eb9a166f88.indexOf(λ7edd8b7930d3) && (λ84630eeaf8fc[λ7edd8b7930d3] = d(λ1f11ab556da5[λ7edd8b7930d3]));
            for (λ98208b59ec0f = 0, λe17e86f356af = λ75eb9a166f88.length; λ98208b59ec0f < λe17e86f356af; ++λ98208b59ec0f) if (o(λ7edd8b7930d3 = λ75eb9a166f88[λ98208b59ec0f])) if (λ7edd8b7930d3 in λ1f11ab556da5) -1 !== λe39af9d43b2b.indexOf(λ7edd8b7930d3) && (λd1fa98cd0cba && λ5c2bbe4f5ce6(λ22995c8bc7ba[λ7edd8b7930d3]) && Object.getPrototypeOf(λ22995c8bc7ba[λ7edd8b7930d3]) !== λ108dcadb2ee3 ? λ84630eeaf8fc[λ7edd8b7930d3] = λd1fa98cd0cba(λ22995c8bc7ba[λ7edd8b7930d3]) : λ84630eeaf8fc[λ7edd8b7930d3] = h(λ1f11ab556da5[λ7edd8b7930d3], λ22995c8bc7ba[λ7edd8b7930d3])); else {
              if (λ96d881b71822 && void 0 === λ22995c8bc7ba[λ7edd8b7930d3]) continue;
              λ84630eeaf8fc[λ7edd8b7930d3] = d(λ22995c8bc7ba[λ7edd8b7930d3]);
            }
            return λ84630eeaf8fc;
          }(λ1f11ab556da5, λ22995c8bc7ba) : d(λ22995c8bc7ba);
        }
        return λ1f11ab556da5?.all ? function() {
          let λ1f11ab556da5;
          switch (arguments.length) {
           case 0:
            return {};

           case 1:
            return d(arguments[0]);

           case 2:
            return h(arguments[0], arguments[1]);
          }
          for (let λ108dcadb2ee3 = 0, λ22995c8bc7ba = arguments.length; λ108dcadb2ee3 < λ22995c8bc7ba; ++λ108dcadb2ee3) λ1f11ab556da5 = h(λ1f11ab556da5, arguments[λ108dcadb2ee3]);
          return λ1f11ab556da5;
        } : h;
      }
      λ1f11ab556da5.exports = o, λ1f11ab556da5.exports.default = o, λ1f11ab556da5.exports.deepmerge = o, 
      Object.defineProperty(λ1f11ab556da5.exports, "\x69\x73\x4d\x65\x72\x67\x65\x61\x62\x6c\x65\x4f\x62\x6a\x65\x63\x74", {
        get: r
      });
    },
    235(λ1f11ab556da5, λ108dcadb2ee3, λ22995c8bc7ba) {
      λ22995c8bc7ba.d(λ108dcadb2ee3, {
        Sr: () => s
      }), WebSocket.CLOSED, WebSocket.CONNECTING, WebSocket.OPEN, EventTarget;
      let λ9db15f086c12 = [ 101, 204, 205, 304 ];
      class s extends Response {
        url;
        rawHeaders;
        redirected=!1;
        static fromTransferrableResponse(λ1f11ab556da5, λ108dcadb2ee3) {
          let λ22995c8bc7ba = new s(λ9db15f086c12.includes(λ1f11ab556da5.status) ? void 0 : λ1f11ab556da5.body, {
            headers: new Headers(λ1f11ab556da5.headers),
            status: λ1f11ab556da5.status,
            statusText: λ1f11ab556da5.statusText
          });
          return λ22995c8bc7ba.url = λ108dcadb2ee3, λ22995c8bc7ba.redirected = λ1f11ab556da5.status >= 300 && λ1f11ab556da5.status < 400 && void 0 !== λ1f11ab556da5.headers.location, 
          λ22995c8bc7ba.rawHeaders = λ1f11ab556da5.headers, λ22995c8bc7ba;
        }
        static fromNativeResponse(λ1f11ab556da5) {
          let λ108dcadb2ee3 = new s(λ9db15f086c12.includes(λ1f11ab556da5.status) ? void 0 : λ1f11ab556da5.body, {
            headers: λ1f11ab556da5.headers,
            status: λ1f11ab556da5.status,
            statusText: λ1f11ab556da5.statusText
          });
          return λ108dcadb2ee3.url = λ1f11ab556da5.url, λ108dcadb2ee3.rawHeaders = [ ...λ1f11ab556da5.headers ], 
          λ108dcadb2ee3.redirected = λ1f11ab556da5.redirected, λ108dcadb2ee3;
        }
      }
    },
    423(λ1f11ab556da5, λ108dcadb2ee3, λ22995c8bc7ba) {
      λ22995c8bc7ba.d(λ108dcadb2ee3, {
        Cx: () => λ3f813b469956,
        Oy: () => λ0ad568b31594,
        cP: () => λd1fa98cd0cba,
        ht: () => λ26c6507bf5b2,
        k_: () => λ96d881b71822,
        mK: () => λ84630eeaf8fc,
        sb: () => λ55cdd3cb674d,
        uh: () => λ75eb9a166f88
      });
      let {BareResponse: λ9db15f086c12, CookieJar: λd1fa98cd0cba, IncrementalHtmlRewriter: λ5c2bbe4f5ce6, Plugin: λ96d881b71822, STUDYJETCLIENT: λ98208b59ec0f, STUDYJETCLIENTNAME: λe17e86f356af, StudyJetClient: λ7edd8b7930d3, StudyJetFetchHandler: λ84630eeaf8fc, StudyJetFetchTrackedClient: λe39af9d43b2b, StudyJetHeaders: λ75eb9a166f88, Tap: λ3f813b469956, \u{63}\u{72}\u{65}\u{61}\u{74}\u{65}\u{4c}\u{6f}\u{63}\u{61}\u{74}\u{69}\u{6f}\u{6e}\u{50}\u{72}\u{6f}\u{78}\u{79}: λ03ba407b4f1d, defaultConfig: λ55cdd3cb674d, defaultConfigDev: λbe901cf54286, flagEnabled: λ709c48a0f71e, getOwnPropertyDescriptorHandler: λ3f50443a7202, getRewriter: λebfb1f521235, getScriptBlockTypeString: λ7afc054a1345, htmlRules: λ7a6db9e9b8cf, isArchiveMimeType: λ41018fa92b2d, isAudioOrVideoMimeType: λ9f3362ee5184, isFontMimeType: λ269e1c479b31, isHtmlMimeType: λ7da12c704613, isImageMimeType: λ76ad900978a3, isInlineDisplayableMimeType: λ01fb6941a589, isJavascriptMimeType: λee22ebe81036, isJavascriptMimeTypeEssenceMatch: λ623375e2440b, isModuleScriptType: λdd6ab96c96ce, isScriptType: λa5d8827af1e4, isScriptableMimeType: λ5e2a463be947, isXmlMimeType: λbf620e320cf4, isZipBasedMimeType: λcf43dcd70a1c, isdedicated: λb22dcaa6deef, isshared: λ0c34d37e6988, issw: λeb17c5c1cc44, iswindow: λ27b4c07db7db, isworker: λb53c0b096754, parseMimeType: λaabb9e7b7492, rewriteBlob: λ80736fc82e73, rewriteCss: λ30c81ac600f0, rewriteHtml: λ2505a502732e, rewriteJs: λ97512c8929f7, rewriteJsInner: λ34308c094125, rewriteSrcset: λee30a7c924e7, rewriteUrl: λ0ad568b31594, rewriteWorkers: λaef58e446d6d, setWasm: λ26c6507bf5b2, unrewriteBlob: λ2de8136a57eb, unrewriteCss: λca7c81ca6a8f, unrewriteHtml: λe50d921c53e8, unrewriteUrl: λ7a01412da5fc, versionInfo: λd3a2c03db343} = globalThis.$studyjet;
    }
  }, λ108dcadb2ee3 = {};
  function r(λ22995c8bc7ba) {
    var λ9db15f086c12 = λ108dcadb2ee3[λ22995c8bc7ba];
    if (void 0 !== λ9db15f086c12) return λ9db15f086c12.exports;
    var λd1fa98cd0cba = λ108dcadb2ee3[λ22995c8bc7ba] = {
      exports: {}
    };
    return λ1f11ab556da5[λ22995c8bc7ba](λd1fa98cd0cba, λd1fa98cd0cba.exports, r), λd1fa98cd0cba.exports;
  }
  r.n = λ1f11ab556da5 => {
    var λ108dcadb2ee3 = λ1f11ab556da5 && λ1f11ab556da5.__esModule ? () => λ1f11ab556da5.default : () => λ1f11ab556da5;
    return r.d(λ108dcadb2ee3, {
      a: λ108dcadb2ee3
    }), λ108dcadb2ee3;
  }, r.d = (λ1f11ab556da5, λ108dcadb2ee3) => {
    for (var λ22995c8bc7ba in λ108dcadb2ee3) r.o(λ108dcadb2ee3, λ22995c8bc7ba) && !r.o(λ1f11ab556da5, λ22995c8bc7ba) && Object.defineProperty(λ1f11ab556da5, λ22995c8bc7ba, {
      enumerable: !0,
      get: λ108dcadb2ee3[λ22995c8bc7ba]
    });
  }, r.o = (λ1f11ab556da5, λ108dcadb2ee3) => Object.prototype.hasOwnProperty.call(λ1f11ab556da5, λ108dcadb2ee3), 
  r.r = λ1f11ab556da5 => {
    "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λ1f11ab556da5, Symbol.toStringTag, {
      value: "\x4d\x6f\x64\x75\x6c\x65"
    }), Object.defineProperty(λ1f11ab556da5, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
      value: !0
    });
  };
  var λ22995c8bc7ba = {};
  (() => {
    r.r(λ22995c8bc7ba), r.d(λ22995c8bc7ba, {
      Controller: () => S,
      Frame: () => v,
      ManagedPlugin: () => d,
      VERSION: () => λ96d881b71822.x,
      assertRuntimeStudyJetVersion: () => λ96d881b71822.O,
      config: () => λ98208b59ec0f
    });
    var λ1f11ab556da5 = r(805), λ108dcadb2ee3 = r(235), λ9db15f086c12 = r(986), λd1fa98cd0cba = r(423), λ5c2bbe4f5ce6 = r(286), λ96d881b71822 = r(355);
    let λ98208b59ec0f = {
      prefix: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x7e\x2f\x73\x74\x75\x64\x79\x2f",
      studyjetPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x73\x74\x75\x64\x79\x6a\x65\x74\x2f\x40\x72\x36\x39\x63\x31\x38\x66\x39\x62\x64\x34\x65\x64\x31\x37\x35\x63\x39\x65\x61\x35\x30\x35\x62\x38\x21\x2e\x6a\x73",
      \u{69}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{50}\u{61}\u{74}\u{68}: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2f\x40\x72\x39\x65\x38\x35\x35\x61\x63\x38\x32\x65\x64\x63\x34\x62\x35\x31\x65\x31\x33\x34\x30\x35\x36\x34\x21\x2e\x6a\x73",
      wasmPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x73\x74\x75\x64\x79\x6a\x65\x74\x2f\x40\x72\x35\x35\x32\x38\x36\x63\x66\x65\x30\x39\x64\x37\x34\x31\x30\x32\x33\x63\x63\x33\x65\x31\x64\x36\x21\x2e\x77\x61\x73\x6d",
      virtualWasmPath: "\x73\x74\x75\x64\x79\x6a\x65\x74\x2e\x77\x61\x73\x6d\x2e\x6a\x73",
      codec: {
        encode: λ1f11ab556da5 => λ1f11ab556da5 ? encodeURIComponent(λ1f11ab556da5) : λ1f11ab556da5,
        decode: λ1f11ab556da5 => λ1f11ab556da5 ? decodeURIComponent(λ1f11ab556da5) : λ1f11ab556da5
      }
    }, λe17e86f356af = {
      flags: {
        ...λd1fa98cd0cba.sb.flags,
        allowFailedIntercepts: !0
      },
      maskedfiles: [ "\x69\x6e\x6a\x65\x63\x74\x2e\x6a\x73", "\x73\x74\x75\x64\x79\x6a\x65\x74\x2e\x77\x61\x73\x6d\x2e\x6a\x73" ]
    };
    class d extends λd1fa98cd0cba.k_ {
      frame=null;
      dependencies=[];
      constructor(λ1f11ab556da5, λ108dcadb2ee3) {
        super(λ1f11ab556da5), this.dependencies = λ108dcadb2ee3;
      }
      install(λ1f11ab556da5) {
        this.frame = λ1f11ab556da5;
      }
    }
    let λ7edd8b7930d3 = "\x73\x74\x61\x74\x65", λ84630eeaf8fc = "\x63\x6f\x6f\x6b\x69\x65\x73", λe39af9d43b2b = null;
    function u(λ1f11ab556da5) {
      return "\x6f\x62\x6a\x65\x63\x74" == typeof λ1f11ab556da5 && null !== λ1f11ab556da5 && "\x6e\x75\x6d\x62\x65\x72" == typeof λ1f11ab556da5.updatedAt && Number.isFinite(λ1f11ab556da5.updatedAt) && "\x73\x74\x72\x69\x6e\x67" == typeof λ1f11ab556da5.cookies ? λ1f11ab556da5 : null;
    }
    function y(λ1f11ab556da5) {
      return new Promise((λ108dcadb2ee3, λ22995c8bc7ba) => {
        λ1f11ab556da5.onsuccess = () => λ108dcadb2ee3(λ1f11ab556da5.result), λ1f11ab556da5.onerror = () => λ22995c8bc7ba(λ1f11ab556da5.error ?? Error("\x49\x6e\x64\x65\x78\x65\x64\x44\x42\x20\x72\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64"));
      });
    }
    function m(λ1f11ab556da5) {
      return new Promise((λ108dcadb2ee3, λ22995c8bc7ba) => {
        λ1f11ab556da5.oncomplete = () => λ108dcadb2ee3(), λ1f11ab556da5.onabort = () => λ22995c8bc7ba(λ1f11ab556da5.error ?? Error("\x49\x6e\x64\x65\x78\x65\x64\x44\x42\x20\x74\x72\x61\x6e\x73\x61\x63\x74\x69\x6f\x6e\x20\x61\x62\x6f\x72\x74\x65\x64")), 
        λ1f11ab556da5.onerror = () => λ22995c8bc7ba(λ1f11ab556da5.error ?? Error("\x49\x6e\x64\x65\x78\x65\x64\x44\x42\x20\x74\x72\x61\x6e\x73\x61\x63\x74\x69\x6f\x6e\x20\x66\x61\x69\x6c\x65\x64"));
      });
    }
    function g() {
      return λe39af9d43b2b || (λe39af9d43b2b = new Promise((λ1f11ab556da5, λ108dcadb2ee3) => {
        let λ22995c8bc7ba = indexedDB.open("\x40\x64\x39\x34\x31\x62\x63\x36\x35\x61\x66\x33", 1);
        λ22995c8bc7ba.onupgradeneeded = () => {
          let λ1f11ab556da5 = λ22995c8bc7ba.result;
          λ1f11ab556da5.objectStoreNames.contains(λ7edd8b7930d3) || λ1f11ab556da5.createObjectStore(λ7edd8b7930d3);
        }, λ22995c8bc7ba.onsuccess = () => λ1f11ab556da5(λ22995c8bc7ba.result), λ22995c8bc7ba.onerror = () => λ108dcadb2ee3(λ22995c8bc7ba.error ?? Error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x6f\x70\x65\x6e\x20\x63\x6f\x6f\x6b\x69\x65\x20\x64\x61\x74\x61\x62\x61\x73\x65"));
      }));
    }
    async function w() {
      try {
        let λ1f11ab556da5 = (await g()).transaction(λ7edd8b7930d3, "\x72\x65\x61\x64\x6f\x6e\x6c\x79"), λ108dcadb2ee3 = λ1f11ab556da5.objectStore(λ7edd8b7930d3), λ22995c8bc7ba = await y(λ108dcadb2ee3.get(λ84630eeaf8fc));
        return await m(λ1f11ab556da5), u(λ22995c8bc7ba);
      } catch (λ1f11ab556da5) {
        return console.error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x72\x65\x61\x64\x20\x70\x65\x72\x73\x69\x73\x74\x65\x64\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x63\x6f\x6f\x6b\x69\x65\x73\x3a", λ1f11ab556da5), 
        null;
      }
    }
    async function k(λ1f11ab556da5, λ108dcadb2ee3) {
      try {
        let λ22995c8bc7ba = (await g()).transaction(λ7edd8b7930d3, "\x72\x65\x61\x64\x77\x72\x69\x74\x65"), λ9db15f086c12 = λ22995c8bc7ba.objectStore(λ7edd8b7930d3), λd1fa98cd0cba = u(await y(λ9db15f086c12.get(λ84630eeaf8fc))), λ5c2bbe4f5ce6 = Math.max(Date.now(), λ108dcadb2ee3 + 1, (λd1fa98cd0cba?.updatedAt ?? 0) + 1);
        return λ9db15f086c12.put({
          updatedAt: λ5c2bbe4f5ce6,
          cookies: λ1f11ab556da5
        }, λ84630eeaf8fc), await m(λ22995c8bc7ba), λ5c2bbe4f5ce6;
      } catch (λ1f11ab556da5) {
        return console.error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x70\x65\x72\x73\x69\x73\x74\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x63\x6f\x6f\x6b\x69\x65\x73\x3a", λ1f11ab556da5), λ108dcadb2ee3;
      }
    }
    function b() {
      return Math.random().toString(36).substring(2, 10);
    }
    let λ75eb9a166f88 = (0, λ9db15f086c12.deepmerge)();
    class S {
      init;
      id;
      config;
      studyjetConfig;
      prefix;
      cookieJar=new λd1fa98cd0cba.cP;
      frames=[];
      serviceWorkerController;
      guardServiceWorkerRevive=!0;
      ready;
      readyResolve;
      isReady=!1;
      rpc;
      port=null;
      transport;
      cookieUpdatedAt=0;
      cookieSyncPromise=null;
      cookieSyncDirty=!0;
      cookieSyncChannel=new BroadcastChannel("\x5f\x5f\x73\x74\x75\x64\x79\x6a\x65\x74\x5f\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x5f\x63\x68\x61\x6e\x6e\x65\x6c");
      wasmAlreadyFetched=!1;
      wasmPayload=null;
      onTabChannelMessage=λ1f11ab556da5 => {
        this.rpc.recieve(λ1f11ab556da5.data);
      };
      onCookieSyncMessage=λ1f11ab556da5 => {
        let λ108dcadb2ee3 = "\x6f\x62\x6a\x65\x63\x74" == typeof λ1f11ab556da5.data && null !== λ1f11ab556da5.data ? λ1f11ab556da5.data.updatedAt : void 0;
        "\x6e\x75\x6d\x62\x65\x72" != typeof λ108dcadb2ee3 || λ108dcadb2ee3 <= this.cookieUpdatedAt || (this.cookieSyncDirty = !0, 
        this.loadSavedCookies());
      };
      async loadStudyJetWasm() {
        if (this.wasmAlreadyFetched) return;
        let λ1f11ab556da5 = await fetch(this.config.wasmPath);
        (0, λd1fa98cd0cba.ht)(await λ1f11ab556da5.arrayBuffer()), this.wasmAlreadyFetched = !0;
      }
      methods={
        ready: async () => {
          this.readyResolve(), setTimeout(() => {
            this.guardServiceWorkerRevive = !1;
          }, 5e3);
        },
        request: async λ1f11ab556da5 => {
          let λ108dcadb2ee3 = new URL(λ1f11ab556da5.rawUrl).pathname, λ22995c8bc7ba = this.frames.find(λ1f11ab556da5 => λ108dcadb2ee3.startsWith(λ1f11ab556da5.prefix));
          if (!λ22995c8bc7ba) throw Error("\x4e\x6f\x20\x66\x72\x61\x6d\x65\x20\x66\x6f\x75\x6e\x64\x20\x66\x6f\x72\x20\x72\x65\x71\x75\x65\x73\x74");
          try {
            if (await this.loadSavedCookies(), λ108dcadb2ee3 === λ22995c8bc7ba.prefix + this.config.virtualWasmPath) {
              if (!this.wasmPayload) {
                let λ1f11ab556da5 = await fetch(this.config.wasmPath), λ108dcadb2ee3 = await λ1f11ab556da5.arrayBuffer(), λ22995c8bc7ba = btoa(new Uint8Array(λ108dcadb2ee3).reduce((λ1f11ab556da5, λ108dcadb2ee3) => (λ1f11ab556da5.push(String.fromCharCode(λ108dcadb2ee3)), 
                λ1f11ab556da5), []).join(""));
                this.wasmPayload = `\x73\x65\x6c\x66\x2e\x57\x41\x53\x4d\x20\x3d\x20\x27${λ22995c8bc7ba}\x27\x3b`;
              }
              return [ {
                body: this.wasmPayload,
                status: 200,
                statusText: "\x4f\x4b",
                headers: [ [ "\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65", "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x61\x76\x61\x73\x63\x72\x69\x70\x74" ] ]
              }, [] ];
            }
            let λ9db15f086c12 = λd1fa98cd0cba.uh.fromRawHeaders(λ1f11ab556da5.initialHeaders), λ5c2bbe4f5ce6 = await λ22995c8bc7ba.fetchHandler.handleFetch({
              initialHeaders: λ9db15f086c12,
              rawClientUrl: λ1f11ab556da5.rawClientUrl ? new URL(λ1f11ab556da5.rawClientUrl) : void 0,
              rawUrl: new URL(λ1f11ab556da5.rawUrl),
              rawReferrer: λ1f11ab556da5.rawReferrer,
              rawDestination: λ1f11ab556da5.destination,
              method: λ1f11ab556da5.method,
              mode: λ1f11ab556da5.mode,
              referrer: λ1f11ab556da5.referrer,
              body: λ1f11ab556da5.body,
              cache: λ1f11ab556da5.cache,
              clientId: λ1f11ab556da5.clientId
            });
            return [ {
              body: λ5c2bbe4f5ce6.body,
              status: λ5c2bbe4f5ce6.status,
              statusText: λ5c2bbe4f5ce6.statusText,
              headers: λ5c2bbe4f5ce6.headers.toRawHeaders()
            }, λ5c2bbe4f5ce6.body instanceof ReadableStream || λ5c2bbe4f5ce6.body instanceof ArrayBuffer ? [ λ5c2bbe4f5ce6.body ] : [] ];
          } catch (λ108dcadb2ee3) {
            let λ9db15f086c12 = {
              setResponse: void 0,
              suppressError: !1
            };
            if (await λd1fa98cd0cba.Cx.dispatch(λ22995c8bc7ba.hooks.error.request, {
              rawrequest: λ1f11ab556da5,
              error: λ108dcadb2ee3
            }, λ9db15f086c12), λ9db15f086c12.suppressError || console.error("\x45\x72\x72\x6f\x72\x20\x69\x6e\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x72\x65\x71\x75\x65\x73\x74\x20\x68\x61\x6e\x64\x6c\x65\x72\x3a", λ108dcadb2ee3), 
            λ9db15f086c12.setResponse) return [ λ9db15f086c12.setResponse, [] ];
            throw λ108dcadb2ee3;
          }
        },
        initRemoteTransport: async λ108dcadb2ee3 => {
          let λ22995c8bc7ba = new λ1f11ab556da5.C({
            request: async ({remote: λ1f11ab556da5, method: λ108dcadb2ee3, body: λ22995c8bc7ba, headers: λ9db15f086c12}) => {
              let λd1fa98cd0cba = await this.transport.request(new URL(λ1f11ab556da5), λ108dcadb2ee3, λ22995c8bc7ba, λ9db15f086c12, void 0);
              return [ λd1fa98cd0cba, [ λd1fa98cd0cba.body ] ];
            },
            sendSetCookie: async ({cookies: λ1f11ab556da5, options: λ108dcadb2ee3}) => {
              await this.loadSavedCookies(!0), λ108dcadb2ee3?.clear && this.cookieJar.clear(), 
              this.applyCookieSyncEntries(λ1f11ab556da5), await this.persistCookies(), await this.propagateCookieSync(λ1f11ab556da5, λ108dcadb2ee3);
            },
            connect: async ({url: λ1f11ab556da5, protocols: λ108dcadb2ee3, requestHeaders: λ22995c8bc7ba, port: λ9db15f086c12}) => {
              let λd1fa98cd0cba, λ5c2bbe4f5ce6 = new Promise(λ1f11ab556da5 => λd1fa98cd0cba = λ1f11ab556da5), [λ96d881b71822, λ98208b59ec0f] = this.transport.connect(new URL(λ1f11ab556da5), λ108dcadb2ee3, λ22995c8bc7ba, (λ1f11ab556da5, λ108dcadb2ee3) => {
                λd1fa98cd0cba({
                  result: "\x73\x75\x63\x63\x65\x73\x73",
                  protocol: λ1f11ab556da5,
                  extensions: λ108dcadb2ee3
                });
              }, λ1f11ab556da5 => {
                λ9db15f086c12.postMessage({
                  type: "\x64\x61\x74\x61",
                  data: λ1f11ab556da5
                }, λ1f11ab556da5 instanceof ArrayBuffer ? [ λ1f11ab556da5 ] : []);
              }, (λ1f11ab556da5, λ108dcadb2ee3) => {
                λ9db15f086c12.postMessage({
                  type: "\x63\x6c\x6f\x73\x65",
                  code: λ1f11ab556da5,
                  reason: λ108dcadb2ee3
                });
              }, λ1f11ab556da5 => {
                λd1fa98cd0cba({
                  result: "\x66\x61\x69\x6c\x75\x72\x65",
                  error: λ1f11ab556da5
                });
              });
              return λ9db15f086c12.onmessageerror = λ1f11ab556da5 => {
                console.error("\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x6f\x72\x74\x20\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λ1f11ab556da5);
              }, λ9db15f086c12.onmessage = ({data: λ1f11ab556da5}) => {
                "\x64\x61\x74\x61" === λ1f11ab556da5.type ? λ96d881b71822(λ1f11ab556da5.data) : "\x63\x6c\x6f\x73\x65" === λ1f11ab556da5.type && λ98208b59ec0f(λ1f11ab556da5.code, λ1f11ab556da5.reason);
              }, [ await λ5c2bbe4f5ce6, [] ];
            }
          }, "\x74\x72\x61\x6e\x73\x70\x6f\x72\x74", (λ1f11ab556da5, λ22995c8bc7ba) => λ108dcadb2ee3.postMessage(λ1f11ab556da5, λ22995c8bc7ba));
          λ108dcadb2ee3.onmessageerror = λ1f11ab556da5 => {
            console.error("\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x6f\x72\x74\x20\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λ1f11ab556da5);
          }, λ108dcadb2ee3.onmessage = λ1f11ab556da5 => {
            λ22995c8bc7ba.recieve(λ1f11ab556da5.data);
          }, λ22995c8bc7ba.call("\x72\x65\x61\x64\x79", void 0, []);
        }
      };
      constructor(λ108dcadb2ee3) {
        this.init = λ108dcadb2ee3, (0, λ96d881b71822.O)(), this.id = b(), this.config = λ75eb9a166f88(λ98208b59ec0f, λ108dcadb2ee3.config || {}), 
        this.studyjetConfig = λ75eb9a166f88(λe17e86f356af, λd1fa98cd0cba.sb), this.studyjetConfig = λ75eb9a166f88(this.studyjetConfig, λ108dcadb2ee3.studyjetConfig || {}), 
        this.prefix = this.config.prefix + this.id + "\x2f", this.serviceWorkerController = λ108dcadb2ee3.serviceworker, 
        this.ready = Promise.all([ new Promise(λ1f11ab556da5 => {
          this.readyResolve = λ1f11ab556da5;
        }), this.loadStudyJetWasm(), this.loadSavedCookies(!0) ]).then(() => void 0), this.rpc = new λ1f11ab556da5.C(this.methods, "\x74\x61\x62\x63\x68\x61\x6e\x6e\x65\x6c\x2d" + this.id, (λ1f11ab556da5, λ108dcadb2ee3) => {
          if (!this.port) throw Error("\x50\x6f\x72\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64");
          this.port.postMessage(λ1f11ab556da5, λ108dcadb2ee3);
        }), this.transport = λ108dcadb2ee3.transport, this.cookieSyncChannel.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", this.onCookieSyncMessage), 
        this.setupMessagePort(), navigator.serviceWorker.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", λ1f11ab556da5 => {
          if (λ1f11ab556da5.data?.$controller$setCookie && "\x6f\x62\x6a\x65\x63\x74" == typeof λ1f11ab556da5.data.$controller$setCookie) {
            let λ108dcadb2ee3 = λ1f11ab556da5.data.$controller$setCookie;
            if (λ108dcadb2ee3.controllerId && λ108dcadb2ee3.controllerId !== this.id) return;
            λ108dcadb2ee3.options?.clear && this.cookieJar.clear(), this.applyCookieSyncEntries(λ108dcadb2ee3.cookies), 
            "\x73\x74\x72\x69\x6e\x67" == typeof λ108dcadb2ee3.id && this.serviceWorkerController.postMessage({
              $sw$setCookieDone: {
                id: λ108dcadb2ee3.id
              }
            });
            return;
          }
          if (λ1f11ab556da5.data.$controller$swrevive) {
            if (this.guardServiceWorkerRevive) return;
            this.setupMessagePort();
          }
        });
      }
      setupMessagePort() {
        if (this.port) {
          this.port.removeEventListener("\x6d\x65\x73\x73\x61\x67\x65", this.onTabChannelMessage);
          try {
            this.port.close();
          } catch {}
          this.port = null;
        }
        let λ1f11ab556da5 = new MessageChannel;
        this.port = λ1f11ab556da5.port1, this.port.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", this.onTabChannelMessage), 
        this.port.start(), this.serviceWorkerController.postMessage({
          $controller$init: {
            prefix: this.prefix,
            id: this.id
          }
        }, [ λ1f11ab556da5.port2 ]);
      }
      applyCookieSyncEntries(λ1f11ab556da5) {
        if (Array.isArray(λ1f11ab556da5)) for (let λ108dcadb2ee3 of λ1f11ab556da5) "\x73\x74\x72\x69\x6e\x67" == typeof λ108dcadb2ee3?.url && "\x73\x74\x72\x69\x6e\x67" == typeof λ108dcadb2ee3.cookie && this.cookieJar.setCookies(λ108dcadb2ee3.cookie, new URL(λ108dcadb2ee3.url));
      }
      async propagateCookieSync(λ1f11ab556da5, λ108dcadb2ee3 = {}) {
        this.port && await this.rpc.call("\x73\x65\x6e\x64\x53\x65\x74\x43\x6f\x6f\x6b\x69\x65", {
          cookies: λ1f11ab556da5,
          options: λ108dcadb2ee3
        });
      }
      async loadSavedCookies(λ1f11ab556da5 = !1) {
        if (λ1f11ab556da5 || this.cookieSyncDirty) return this.cookieSyncPromise || (this.cookieSyncPromise = (async () => {
          let λ1f11ab556da5 = await w();
          λ1f11ab556da5 && λ1f11ab556da5.updatedAt > this.cookieUpdatedAt && (this.cookieJar.load(λ1f11ab556da5.cookies), 
          this.cookieUpdatedAt = λ1f11ab556da5.updatedAt), this.cookieSyncDirty = !1;
        })().finally(() => {
          this.cookieSyncPromise = null;
        })), this.cookieSyncPromise;
      }
      async persistCookies() {
        let λ1f11ab556da5 = await k(this.cookieJar.dump(), this.cookieUpdatedAt);
        λ1f11ab556da5 <= this.cookieUpdatedAt || (this.cookieUpdatedAt = λ1f11ab556da5, 
        this.cookieSyncDirty = !1, this.cookieSyncChannel.postMessage({
          updatedAt: λ1f11ab556da5
        }));
      }
      setTransport(λ1f11ab556da5) {
        for (let λ108dcadb2ee3 of (this.transport = λ1f11ab556da5, this.frames)) λ108dcadb2ee3.controller.transport = λ1f11ab556da5, 
        λ108dcadb2ee3.fetchHandler.client.transport = λ1f11ab556da5;
      }
      createFrame(λ1f11ab556da5, λ108dcadb2ee3 = {}) {
        if (!this.ready) throw Error("\x43\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x69\x73\x20\x6e\x6f\x74\x20\x72\x65\x61\x64\x79\x21\x20\x54\x72\x79\x20\x61\x77\x61\x69\x74\x69\x6e\x67\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2e\x77\x61\x69\x74\x28\x29");
        let λ22995c8bc7ba = new v(this, λ1f11ab556da5 ??= document.createElement("\x69\x66\x72\x61\x6d\x65"), λ108dcadb2ee3);
        return this.frames.push(λ22995c8bc7ba), λ22995c8bc7ba;
      }
      async wait() {
        await this.ready;
      }
    }
    class v {
      controller;
      element;
      options;
      id;
      prefix;
      fetchHandler;
      hooks;
      get context() {
        return {
          config: this.controller.studyjetConfig,
          prefix: new URL(this.prefix, location.href),
          cookieJar: this.controller.cookieJar,
          interface: {
            \u{67}\u{65}\u{74}\u{49}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{63}\u{72}\u{69}\u{70}\u{74}\u{73}: function e(λ1f11ab556da5, λ108dcadb2ee3, λ22995c8bc7ba, λ9db15f086c12, λd1fa98cd0cba, λ5c2bbe4f5ce6) {
              return (λ96d881b71822, λ98208b59ec0f, λe17e86f356af, λ7edd8b7930d3) => {
                var λ84630eeaf8fc;
                return [ λ7edd8b7930d3(λ1f11ab556da5.studyjetPath), λ7edd8b7930d3(λ22995c8bc7ba.href + λ1f11ab556da5.virtualWasmPath), λ7edd8b7930d3(λ1f11ab556da5.\u{69}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{50}\u{61}\u{74}\u{68}), λ7edd8b7930d3("data:text/javascript;charset=utf-8;base64," + (λ84630eeaf8fc = `\x0a\x09\x09\x09\x09\x09\x64\x6f\x63\x75\x6d\x65\x6e\x74\x2e\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63\x74\x6f\x72\x41\x6c\x6c\x28\x22\x73\x63\x72\x69\x70\x74\x5b\x73\x74\x75\x64\x79\x6a\x65\x74\x2d\x69\x6e\x6a\x65\x63\x74\x65\x64\x5d\x22\x29\x2e\x66\x6f\x72\x45\x61\x63\x68\x28\x73\x63\x72\x69\x70\x74\x20\x3d\x3e\x20\x73\x63\x72\x69\x70\x74\x2e\x72\x65\x6d\x6f\x76\x65\x28\x29\x29\x3b\x0a\x09\x09\x09\x09\x09\x24\x73\x74\x75\x64\x79\x6a\x65\x74\x43\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2e\x6c\x6f\x61\x64\x28\x7b\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x66\x69\x67\x3a\x20${JSON.stringify(λ1f11ab556da5)}\x2c\x0a\x09\x09\x09\x09\x09\x09\x73\x6a\x63\x6f\x6e\x66\x69\x67\x3a\x20${JSON.stringify(λ108dcadb2ee3)}\x2c\x0a\x09\x09\x09\x09\x09\x09\x70\x72\x65\x66\x69\x78\x3a\x20\x6e\x65\x77\x20\x55\x52\x4c\x28\x22${λ22995c8bc7ba.href}\x22\x29\x2c\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6f\x6b\x69\x65\x73\x3a\x20${JSON.stringify(λ9db15f086c12.dump())}\x2c\x0a\x09\x09\x09\x09\x09\x09\x79\x69\x65\x6c\x64\x47\x65\x74\x49\x6e\x6a\x65\x63\x74\x53\x63\x72\x69\x70\x74\x73\x3a\x20${e.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x45\x6e\x63\x6f\x64\x65\x3a\x20${λd1fa98cd0cba.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x44\x65\x63\x6f\x64\x65\x3a\x20${λ5c2bbe4f5ce6.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x69\x6e\x69\x74\x48\x65\x61\x64\x65\x72\x73\x3a\x20${JSON.stringify(λe17e86f356af.headers ?? [])}\x2c\x0a\x09\x09\x09\x09\x09\x09\x68\x69\x73\x74\x6f\x72\x79\x3a\x20${JSON.stringify(λe17e86f356af.history ?? [])}\x2c\x0a\x09\x09\x09\x09\x09\x7d\x29\x0a\x09\x09\x09\x09`, 
                btoa((new TextEncoder).encode(λ84630eeaf8fc).reduce((λ1f11ab556da5, λ108dcadb2ee3) => (λ1f11ab556da5.push(String.fromCharCode(λ108dcadb2ee3)), 
                λ1f11ab556da5), []).join("")))) ];
              };
            }(this.controller.config, this.controller.studyjetConfig, new URL(this.prefix, location.href), this.controller.cookieJar, this.controller.config.codec.encode, this.controller.config.codec.decode),
            \u{67}\u{65}\u{74}\u{57}\u{6f}\u{72}\u{6b}\u{65}\u{72}\u{49}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{63}\u{72}\u{69}\u{70}\u{74}\u{73}: (λ1f11ab556da5, λ108dcadb2ee3, λ22995c8bc7ba) => {
              var λ9db15f086c12;
              let λd1fa98cd0cba = "";
              return λd1fa98cd0cba += λ22995c8bc7ba(this.controller.config.studyjetPath), λd1fa98cd0cba += λ22995c8bc7ba(this.prefix + this.controller.config.virtualWasmPath), 
              λd1fa98cd0cba += λ22995c8bc7ba("data:text/javascript;charset=utf-8;base64," + (λ9db15f086c12 = `\x0a\x09\x09\x09\x09\x09\x28\x28\x29\x3d\x3e\x7b\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x7b\x20\x53\x74\x75\x64\x79\x4a\x65\x74\x43\x6c\x69\x65\x6e\x74\x2c\x20\x43\x6f\x6f\x6b\x69\x65\x4a\x61\x72\x2c\x20\x73\x65\x74\x57\x61\x73\x6d\x20\x7d\x20\x3d\x20\x24\x73\x74\x75\x64\x79\x6a\x65\x74\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x73\x65\x74\x57\x61\x73\x6d\x28\x55\x69\x6e\x74\x38\x41\x72\x72\x61\x79\x2e\x66\x72\x6f\x6d\x28\x61\x74\x6f\x62\x28\x73\x65\x6c\x66\x2e\x57\x41\x53\x4d\x29\x2c\x20\x28\x63\x29\x20\x3d\x3e\x20\x63\x2e\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74\x28\x30\x29\x29\x29\x3b\x0a\x09\x09\x09\x09\x09\x09\x64\x65\x6c\x65\x74\x65\x20\x73\x65\x6c\x66\x2e\x57\x41\x53\x4d\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x73\x6a\x63\x6f\x6e\x66\x69\x67\x20\x3d\x20${JSON.stringify(this.controller.studyjetConfig)}\x3b\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x70\x72\x65\x66\x69\x78\x20\x3d\x20\x6e\x65\x77\x20\x55\x52\x4c\x28\x22${this.prefix}\x22\x2c\x20\x6c\x6f\x63\x61\x74\x69\x6f\x6e\x2e\x68\x72\x65\x66\x29\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x3d\x20\x7b\x0a\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x66\x69\x67\x3a\x20\x73\x6a\x63\x6f\x6e\x66\x69\x67\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x70\x72\x65\x66\x69\x78\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x69\x6e\x74\x65\x72\x66\x61\x63\x65\x3a\x20\x7b\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x45\x6e\x63\x6f\x64\x65\x3a\x20${this.controller.config.codec.encode.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x44\x65\x63\x6f\x64\x65\x3a\x20${this.controller.config.codec.decode.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x7d\x2c\x0a\x09\x09\x09\x09\x09\x09\x7d\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x63\x6c\x69\x65\x6e\x74\x20\x3d\x20\x6e\x65\x77\x20\x53\x74\x75\x64\x79\x4a\x65\x74\x43\x6c\x69\x65\x6e\x74\x28\x67\x6c\x6f\x62\x61\x6c\x54\x68\x69\x73\x2c\x20\x7b\x0a\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x74\x65\x78\x74\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x3a\x20\x6e\x75\x6c\x6c\x2c\x0a\x09\x09\x09\x09\x09\x09\x7d\x29\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6c\x69\x65\x6e\x74\x2e\x68\x6f\x6f\x6b\x28\x29\x3b\x0a\x09\x09\x09\x09\x09\x7d\x29\x28\x29\x3b\x0a\x09\x09\x09\x09\x09`, 
              btoa((new TextEncoder).encode(λ9db15f086c12).reduce((λ1f11ab556da5, λ108dcadb2ee3) => (λ1f11ab556da5.push(String.fromCharCode(λ108dcadb2ee3)), 
              λ1f11ab556da5), []).join(""))));
            },
            codecEncode: this.controller.config.codec.encode,
            codecDecode: this.controller.config.codec.decode
          }
        };
      }
      plugins=[];
      constructor(λ1f11ab556da5, λ22995c8bc7ba, λ9db15f086c12 = {}) {
        for (const λ96d881b71822 of (this.controller = λ1f11ab556da5, this.element = λ22995c8bc7ba, 
        this.options = λ9db15f086c12, this.id = b(), this.prefix = this.controller.prefix + this.id + "\x2f", 
        this.fetchHandler = new λd1fa98cd0cba.mK({
          crossOriginIsolated: self.crossOriginIsolated,
          context: this.context,
          transport: λ1f11ab556da5.transport,
          async sendSetCookie(λ108dcadb2ee3, λ22995c8bc7ba) {
            await λ1f11ab556da5.persistCookies(), await λ1f11ab556da5.propagateCookieSync(λ108dcadb2ee3.map(({url: λ1f11ab556da5, cookie: λ108dcadb2ee3}) => ({
              url: λ1f11ab556da5.href,
              cookie: λ108dcadb2ee3
            })), λ22995c8bc7ba);
          },
          fetchBlobUrl: async λ1f11ab556da5 => λ108dcadb2ee3.Sr.fromNativeResponse(await fetch(λ1f11ab556da5)),
          fetchDataUrl: async λ1f11ab556da5 => λ108dcadb2ee3.Sr.fromNativeResponse(await fetch(λ1f11ab556da5))
        }), this.hooks = {
          fetch: this.fetchHandler.hooks.fetch,
          init: λd1fa98cd0cba.Cx.create(),
          error: λd1fa98cd0cba.Cx.create()
        }, λ22995c8bc7ba[λ5c2bbe4f5ce6.I] = this, this.plugins = λ9db15f086c12.plugins ?? [], 
        this.plugins)) {
          for (const λ1f11ab556da5 of λ96d881b71822.dependencies) if (!this.plugins.find(λ108dcadb2ee3 => λ108dcadb2ee3.name === λ1f11ab556da5)) throw Error(`\x44\x65\x70\x65\x6e\x64\x65\x6e\x63\x79\x20${λ1f11ab556da5}\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x66\x6f\x72\x20\x70\x6c\x75\x67\x69\x6e\x20${λ96d881b71822.name}`);
          λ96d881b71822.install(this);
        }
      }
      getPlugin(λ1f11ab556da5) {
        let λ108dcadb2ee3 = this.plugins.find(λ108dcadb2ee3 => λ108dcadb2ee3.name === λ1f11ab556da5);
        if (!λ108dcadb2ee3) throw Error(`\x50\x6c\x75\x67\x69\x6e\x20${λ1f11ab556da5}\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64`);
        return λ108dcadb2ee3;
      }
      back() {
        this.element.contentWindow?.history.back();
      }
      forward() {
        this.element.contentWindow?.history.forward();
      }
      reload() {
        this.element.contentWindow?.location.reload();
      }
      go(λ1f11ab556da5) {
        let λ108dcadb2ee3 = (0, λd1fa98cd0cba.Oy)(λ1f11ab556da5, this.context, {
          origin: new URL(location.href),
          base: new URL(location.href)
        });
        this.element.src = λ108dcadb2ee3;
      }
    }
  })(), $studyjetController = λ22995c8bc7ba;
})();
