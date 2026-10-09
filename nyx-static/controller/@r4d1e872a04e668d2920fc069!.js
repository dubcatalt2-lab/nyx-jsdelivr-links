var $studyjetController;

(() => {
  var λf0fd6706ec83 = {
    286(λf0fd6706ec83, λb8a667256605, λa83c083ececf) {
      λa83c083ececf.d(λb8a667256605, {
        I: () => λ1846fe0448cb
      });
      let λ1846fe0448cb = Symbol.for("\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x66\x72\x61\x6d\x65\x20\x68\x61\x6e\x64\x6c\x65");
    },
    355(λf0fd6706ec83, λb8a667256605, λa83c083ececf) {
      λa83c083ececf.d(λb8a667256605, {
        O: () => s,
        x: () => λ1846fe0448cb
      });
      let λ1846fe0448cb = "\x30\x2e\x30\x2e\x31\x34";
      function s() {
        if ("\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" == typeof $studyjet) throw Error("\x40\x6d\x65\x72\x63\x75\x72\x79\x77\x6f\x72\x6b\x73\x68\x6f\x70\x2f\x73\x74\x75\x64\x79\x6a\x65\x74\x20\x69\x73\x20\x6e\x6f\x74\x20\x6c\x6f\x61\x64\x65\x64\x2e\x20\x4c\x6f\x61\x64\x20\x73\x74\x75\x64\x79\x6a\x65\x74\x20\x62\x65\x66\x6f\x72\x65\x20\x74\x68\x65\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2e");
        var λf0fd6706ec83 = "\x32\x2e\x30\x2e\x36\x37\x2d\x61\x6c\x70\x68\x61\x2e\x32", λb8a667256605 = $studyjet.versionInfo.version;
        if (λf0fd6706ec83 !== λb8a667256605) throw Error(`\x40\x6d\x65\x72\x63\x75\x72\x79\x77\x6f\x72\x6b\x73\x68\x6f\x70\x2f\x73\x74\x75\x64\x79\x6a\x65\x74\x20\x76\x65\x72\x73\x69\x6f\x6e\x20\x6d\x69\x73\x6d\x61\x74\x63\x68\x3a\x20\x74\x68\x69\x73\x20\x62\x75\x69\x6c\x64\x20\x65\x78\x70\x65\x63\x74\x73\x20${λf0fd6706ec83}\x2c\x20\x62\x75\x74\x20\x74\x68\x65\x20\x6c\x6f\x61\x64\x65\x64\x20\x72\x75\x6e\x74\x69\x6d\x65\x20\x69\x73\x20${λb8a667256605}`);
      }
    },
    805(λf0fd6706ec83, λb8a667256605, λa83c083ececf) {
      λa83c083ececf.d(λb8a667256605, {
        C: () => o
      });
      class o {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λf0fd6706ec83, λb8a667256605, λa83c083ececf) {
          this.methods = λf0fd6706ec83, this.id = λb8a667256605, this.sendRaw = λa83c083ececf;
        }
        recieve(λf0fd6706ec83) {
          if (null == λf0fd6706ec83 || "\x6f\x62\x6a\x65\x63\x74" != typeof λf0fd6706ec83) return;
          let λb8a667256605 = λf0fd6706ec83[this.id];
          if (null == λb8a667256605 || "\x6f\x62\x6a\x65\x63\x74" != typeof λb8a667256605) return;
          let λa83c083ececf = λb8a667256605.$type;
          if ("\x72\x65\x73\x70\x6f\x6e\x73\x65" === λa83c083ececf) {
            let λf0fd6706ec83 = λb8a667256605.$token, λa83c083ececf = λb8a667256605.$data, λ1846fe0448cb = λb8a667256605.$error, λ6e6c408aa1a5 = this.promiseCallbacks.get(λf0fd6706ec83);
            if (!λ6e6c408aa1a5) return;
            this.promiseCallbacks.delete(λf0fd6706ec83), void 0 !== λ1846fe0448cb ? λ6e6c408aa1a5.reject(Error(λ1846fe0448cb)) : λ6e6c408aa1a5.resolve(λa83c083ececf);
          } else if ("\x72\x65\x71\x75\x65\x73\x74" === λa83c083ececf) {
            let λf0fd6706ec83 = λb8a667256605.$method, λa83c083ececf = λb8a667256605.$args;
            this.methods[λf0fd6706ec83](λa83c083ececf).then(λf0fd6706ec83 => {
              this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λb8a667256605.$token,
                  $data: λf0fd6706ec83?.[0]
                }
              }, λf0fd6706ec83?.[1]);
            }).catch(λf0fd6706ec83 => {
              console.error(λf0fd6706ec83), this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λb8a667256605.$token,
                  $error: λf0fd6706ec83?.toString() || "\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x65\x72\x72\x6f\x72"
                }
              }, []);
            });
          }
        }
        call(λf0fd6706ec83, λb8a667256605, λa83c083ececf = []) {
          let λ1846fe0448cb = this.counter++;
          return new Promise((λ6e6c408aa1a5, λ7f35c7083ce7) => {
            this.promiseCallbacks.set(λ1846fe0448cb, {
              resolve: λ6e6c408aa1a5,
              reject: λ7f35c7083ce7
            }), this.sendRaw({
              [this.id]: {
                $type: "\x72\x65\x71\x75\x65\x73\x74",
                $method: λf0fd6706ec83,
                $args: λb8a667256605,
                $token: λ1846fe0448cb
              }
            }, λa83c083ececf);
          });
        }
      }
    },
    986(λf0fd6706ec83) {
      let λb8a667256605 = Object.getPrototypeOf({});
      function r() {
        return function(λf0fd6706ec83) {
          return "\x6f\x62\x6a\x65\x63\x74" == typeof λf0fd6706ec83 && null !== λf0fd6706ec83 && !(λf0fd6706ec83 instanceof RegExp) && !(λf0fd6706ec83 instanceof Date);
        };
      }
      function o(λf0fd6706ec83) {
        function o(λf0fd6706ec83) {
          return "\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72" !== λf0fd6706ec83 && "\x70\x72\x6f\x74\x6f\x74\x79\x70\x65" !== λf0fd6706ec83 && "\x5f\x5f\x70\x72\x6f\x74\x6f\x5f\x5f" !== λf0fd6706ec83;
        }
        let λa83c083ececf = Object.prototype.propertyIsEnumerable, λ1846fe0448cb = λf0fd6706ec83?.symbols ? function(λf0fd6706ec83) {
          let λb8a667256605 = Object.keys(λf0fd6706ec83), λ1846fe0448cb = Object.getOwnPropertySymbols(λf0fd6706ec83);
          for (let λ6e6c408aa1a5 = 0, λ7f35c7083ce7 = λ1846fe0448cb.length; λ6e6c408aa1a5 < λ7f35c7083ce7; ++λ6e6c408aa1a5) λa83c083ececf.call(λf0fd6706ec83, λ1846fe0448cb[λ6e6c408aa1a5]) && λb8a667256605.push(λ1846fe0448cb[λ6e6c408aa1a5]);
          return λb8a667256605;
        } : Object.keys, λ6e6c408aa1a5 = "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λf0fd6706ec83?.cloneProtoObject ? λf0fd6706ec83.cloneProtoObject : void 0, λ7f35c7083ce7 = "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λf0fd6706ec83?.isMergeableObject ? λf0fd6706ec83.isMergeableObject : r(), λdf3aae9c2384 = λf0fd6706ec83?.onlyDefinedProperties === !0, λa3ce65a2e609 = λf0fd6706ec83 && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λf0fd6706ec83.mergeArray ? λf0fd6706ec83.mergeArray({
          clone: d,
          deepmerge: h,
          getKeys: λ1846fe0448cb,
          isMergeableObject: λ7f35c7083ce7
        }) : function(λf0fd6706ec83, λb8a667256605) {
          let λa83c083ececf = λf0fd6706ec83.length, λ1846fe0448cb = λb8a667256605.length, λ6e6c408aa1a5 = 0, λ7f35c7083ce7 = Array(λa83c083ececf + λ1846fe0448cb);
          for (;λ6e6c408aa1a5 < λa83c083ececf; ++λ6e6c408aa1a5) λ7f35c7083ce7[λ6e6c408aa1a5] = d(λf0fd6706ec83[λ6e6c408aa1a5]);
          for (λ6e6c408aa1a5 = 0; λ6e6c408aa1a5 < λ1846fe0448cb; ++λ6e6c408aa1a5) λ7f35c7083ce7[λ6e6c408aa1a5 + λa83c083ececf] = d(λb8a667256605[λ6e6c408aa1a5]);
          return λ7f35c7083ce7;
        };
        function d(λf0fd6706ec83) {
          return λ7f35c7083ce7(λf0fd6706ec83) ? Array.isArray(λf0fd6706ec83) ? function(λf0fd6706ec83) {
            let λb8a667256605 = 0, λa83c083ececf = λf0fd6706ec83.length, λ1846fe0448cb = Array(λa83c083ececf);
            for (;λb8a667256605 < λa83c083ececf; ++λb8a667256605) λ1846fe0448cb[λb8a667256605] = d(λf0fd6706ec83[λb8a667256605]);
            return λ1846fe0448cb;
          }(λf0fd6706ec83) : function(λf0fd6706ec83) {
            let λa83c083ececf, λ7f35c7083ce7, λdf3aae9c2384, λa3ce65a2e609 = {};
            if (λ6e6c408aa1a5 && Object.getPrototypeOf(λf0fd6706ec83) !== λb8a667256605) return λ6e6c408aa1a5(λf0fd6706ec83);
            let λcb4e16175cad = λ1846fe0448cb(λf0fd6706ec83);
            for (λa83c083ececf = 0, λ7f35c7083ce7 = λcb4e16175cad.length; λa83c083ececf < λ7f35c7083ce7; ++λa83c083ececf) o(λdf3aae9c2384 = λcb4e16175cad[λa83c083ececf]) && (λa3ce65a2e609[λdf3aae9c2384] = d(λf0fd6706ec83[λdf3aae9c2384]));
            return λa3ce65a2e609;
          }(λf0fd6706ec83) : λf0fd6706ec83;
        }
        function h(λf0fd6706ec83, λa83c083ececf) {
          if (λdf3aae9c2384 && void 0 === λa83c083ececf) return d(λf0fd6706ec83);
          let λcb4e16175cad = Array.isArray(λa83c083ececf), λ6445f73b8300 = Array.isArray(λf0fd6706ec83);
          return "\x6f\x62\x6a\x65\x63\x74" != typeof λa83c083ececf || null === λa83c083ececf ? λa83c083ececf : λ7f35c7083ce7(λf0fd6706ec83) ? λcb4e16175cad && λ6445f73b8300 ? λa3ce65a2e609(λf0fd6706ec83, λa83c083ececf) : λcb4e16175cad !== λ6445f73b8300 ? d(λa83c083ececf) : function(λf0fd6706ec83, λa83c083ececf) {
            let λa3ce65a2e609, λcb4e16175cad, λ6445f73b8300, λ4a144feef6f3 = {}, λ1acfa9adc256 = λ1846fe0448cb(λf0fd6706ec83), λb9620b14e6e3 = λ1846fe0448cb(λa83c083ececf);
            for (λa3ce65a2e609 = 0, λcb4e16175cad = λ1acfa9adc256.length; λa3ce65a2e609 < λcb4e16175cad; ++λa3ce65a2e609) o(λ6445f73b8300 = λ1acfa9adc256[λa3ce65a2e609]) && -1 === λb9620b14e6e3.indexOf(λ6445f73b8300) && (λ4a144feef6f3[λ6445f73b8300] = d(λf0fd6706ec83[λ6445f73b8300]));
            for (λa3ce65a2e609 = 0, λcb4e16175cad = λb9620b14e6e3.length; λa3ce65a2e609 < λcb4e16175cad; ++λa3ce65a2e609) if (o(λ6445f73b8300 = λb9620b14e6e3[λa3ce65a2e609])) if (λ6445f73b8300 in λf0fd6706ec83) -1 !== λ1acfa9adc256.indexOf(λ6445f73b8300) && (λ6e6c408aa1a5 && λ7f35c7083ce7(λa83c083ececf[λ6445f73b8300]) && Object.getPrototypeOf(λa83c083ececf[λ6445f73b8300]) !== λb8a667256605 ? λ4a144feef6f3[λ6445f73b8300] = λ6e6c408aa1a5(λa83c083ececf[λ6445f73b8300]) : λ4a144feef6f3[λ6445f73b8300] = h(λf0fd6706ec83[λ6445f73b8300], λa83c083ececf[λ6445f73b8300])); else {
              if (λdf3aae9c2384 && void 0 === λa83c083ececf[λ6445f73b8300]) continue;
              λ4a144feef6f3[λ6445f73b8300] = d(λa83c083ececf[λ6445f73b8300]);
            }
            return λ4a144feef6f3;
          }(λf0fd6706ec83, λa83c083ececf) : d(λa83c083ececf);
        }
        return λf0fd6706ec83?.all ? function() {
          let λf0fd6706ec83;
          switch (arguments.length) {
           case 0:
            return {};

           case 1:
            return d(arguments[0]);

           case 2:
            return h(arguments[0], arguments[1]);
          }
          for (let λb8a667256605 = 0, λa83c083ececf = arguments.length; λb8a667256605 < λa83c083ececf; ++λb8a667256605) λf0fd6706ec83 = h(λf0fd6706ec83, arguments[λb8a667256605]);
          return λf0fd6706ec83;
        } : h;
      }
      λf0fd6706ec83.exports = o, λf0fd6706ec83.exports.default = o, λf0fd6706ec83.exports.deepmerge = o, 
      Object.defineProperty(λf0fd6706ec83.exports, "\x69\x73\x4d\x65\x72\x67\x65\x61\x62\x6c\x65\x4f\x62\x6a\x65\x63\x74", {
        get: r
      });
    },
    235(λf0fd6706ec83, λb8a667256605, λa83c083ececf) {
      λa83c083ececf.d(λb8a667256605, {
        Sr: () => s
      }), WebSocket.CLOSED, WebSocket.CONNECTING, WebSocket.OPEN, EventTarget;
      let λ1846fe0448cb = [ 101, 204, 205, 304 ];
      class s extends Response {
        url;
        rawHeaders;
        redirected=!1;
        static fromTransferrableResponse(λf0fd6706ec83, λb8a667256605) {
          let λa83c083ececf = new s(λ1846fe0448cb.includes(λf0fd6706ec83.status) ? void 0 : λf0fd6706ec83.body, {
            headers: new Headers(λf0fd6706ec83.headers),
            status: λf0fd6706ec83.status,
            statusText: λf0fd6706ec83.statusText
          });
          return λa83c083ececf.url = λb8a667256605, λa83c083ececf.redirected = λf0fd6706ec83.status >= 300 && λf0fd6706ec83.status < 400 && void 0 !== λf0fd6706ec83.headers.location, 
          λa83c083ececf.rawHeaders = λf0fd6706ec83.headers, λa83c083ececf;
        }
        static fromNativeResponse(λf0fd6706ec83) {
          let λb8a667256605 = new s(λ1846fe0448cb.includes(λf0fd6706ec83.status) ? void 0 : λf0fd6706ec83.body, {
            headers: λf0fd6706ec83.headers,
            status: λf0fd6706ec83.status,
            statusText: λf0fd6706ec83.statusText
          });
          return λb8a667256605.url = λf0fd6706ec83.url, λb8a667256605.rawHeaders = [ ...λf0fd6706ec83.headers ], 
          λb8a667256605.redirected = λf0fd6706ec83.redirected, λb8a667256605;
        }
      }
    },
    423(λf0fd6706ec83, λb8a667256605, λa83c083ececf) {
      λa83c083ececf.d(λb8a667256605, {
        Cx: () => λ79f74c8502aa,
        Oy: () => λdf3ffcbf426f,
        cP: () => λ6e6c408aa1a5,
        ht: () => λ5b9499ffaf92,
        k_: () => λdf3aae9c2384,
        mK: () => λ4a144feef6f3,
        sb: () => λf8a94fb1d8c4,
        uh: () => λb9620b14e6e3
      });
      let {BareResponse: λ1846fe0448cb, CookieJar: λ6e6c408aa1a5, IncrementalHtmlRewriter: λ7f35c7083ce7, Plugin: λdf3aae9c2384, STUDYJETCLIENT: λa3ce65a2e609, STUDYJETCLIENTNAME: λcb4e16175cad, StudyJetClient: λ6445f73b8300, StudyJetFetchHandler: λ4a144feef6f3, StudyJetFetchTrackedClient: λ1acfa9adc256, StudyJetHeaders: λb9620b14e6e3, Tap: λ79f74c8502aa, \u{63}\u{72}\u{65}\u{61}\u{74}\u{65}\u{4c}\u{6f}\u{63}\u{61}\u{74}\u{69}\u{6f}\u{6e}\u{50}\u{72}\u{6f}\u{78}\u{79}: λde9e6378b626, defaultConfig: λf8a94fb1d8c4, defaultConfigDev: λa0447721f633, flagEnabled: λ29f194aba9bb, getOwnPropertyDescriptorHandler: λ2dc8102f0204, getRewriter: λ2b7501989372, getScriptBlockTypeString: λ8f72f51b72a9, htmlRules: λ8be0d4354777, isArchiveMimeType: λbdb04c66259c, isAudioOrVideoMimeType: λ0307b9566992, isFontMimeType: λ36ec652d1711, isHtmlMimeType: λ55424f099291, isImageMimeType: λ63abaff80fe4, isInlineDisplayableMimeType: λ2aa8506e94ae, isJavascriptMimeType: λc65ad3e8ffc6, isJavascriptMimeTypeEssenceMatch: λdf0b1f3d336e, isModuleScriptType: λ0256c235e0e3, isScriptType: λ4c5661b7b49f, isScriptableMimeType: λ29d77dcea6ff, isXmlMimeType: λ965de4800ec2, isZipBasedMimeType: λfa9532a1f900, isdedicated: λ24c4beffe21d, isshared: λ1032bdda26b8, issw: λ02cad29b4f2c, iswindow: λ001dac536ec2, isworker: λbff2a4a0b8d4, parseMimeType: λ04c85d6df70c, rewriteBlob: λcf5359e086eb, rewriteCss: λc210163ec524, rewriteHtml: λ060ab6792ad4, rewriteJs: λ69d593330744, rewriteJsInner: λ3eeae4a5c942, rewriteSrcset: λ461189bb8aed, rewriteUrl: λdf3ffcbf426f, rewriteWorkers: λf8da2525e5d9, setWasm: λ5b9499ffaf92, unrewriteBlob: λe3ba381aaee4, unrewriteCss: λ956d5ed96998, unrewriteHtml: λae0a536db0dc, unrewriteUrl: λe99664ef33ed, versionInfo: λ18fe7ced5988} = globalThis.$studyjet;
    }
  }, λb8a667256605 = {};
  function r(λa83c083ececf) {
    var λ1846fe0448cb = λb8a667256605[λa83c083ececf];
    if (void 0 !== λ1846fe0448cb) return λ1846fe0448cb.exports;
    var λ6e6c408aa1a5 = λb8a667256605[λa83c083ececf] = {
      exports: {}
    };
    return λf0fd6706ec83[λa83c083ececf](λ6e6c408aa1a5, λ6e6c408aa1a5.exports, r), λ6e6c408aa1a5.exports;
  }
  r.n = λf0fd6706ec83 => {
    var λb8a667256605 = λf0fd6706ec83 && λf0fd6706ec83.__esModule ? () => λf0fd6706ec83.default : () => λf0fd6706ec83;
    return r.d(λb8a667256605, {
      a: λb8a667256605
    }), λb8a667256605;
  }, r.d = (λf0fd6706ec83, λb8a667256605) => {
    for (var λa83c083ececf in λb8a667256605) r.o(λb8a667256605, λa83c083ececf) && !r.o(λf0fd6706ec83, λa83c083ececf) && Object.defineProperty(λf0fd6706ec83, λa83c083ececf, {
      enumerable: !0,
      get: λb8a667256605[λa83c083ececf]
    });
  }, r.o = (λf0fd6706ec83, λb8a667256605) => Object.prototype.hasOwnProperty.call(λf0fd6706ec83, λb8a667256605), 
  r.r = λf0fd6706ec83 => {
    "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λf0fd6706ec83, Symbol.toStringTag, {
      value: "\x4d\x6f\x64\x75\x6c\x65"
    }), Object.defineProperty(λf0fd6706ec83, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
      value: !0
    });
  };
  var λa83c083ececf = {};
  (() => {
    r.r(λa83c083ececf), r.d(λa83c083ececf, {
      Controller: () => S,
      Frame: () => v,
      ManagedPlugin: () => d,
      VERSION: () => λdf3aae9c2384.x,
      assertRuntimeStudyJetVersion: () => λdf3aae9c2384.O,
      config: () => λa3ce65a2e609
    });
    var λf0fd6706ec83 = r(805), λb8a667256605 = r(235), λ1846fe0448cb = r(986), λ6e6c408aa1a5 = r(423), λ7f35c7083ce7 = r(286), λdf3aae9c2384 = r(355);
    let λa3ce65a2e609 = {
      prefix: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x7e\x2f\x73\x74\x75\x64\x79\x2f",
      studyjetPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x73\x74\x75\x64\x79\x6a\x65\x74\x2f\x40\x72\x36\x39\x63\x31\x38\x66\x39\x62\x64\x34\x65\x64\x31\x37\x35\x63\x39\x65\x61\x35\x30\x35\x62\x38\x21\x2e\x6a\x73",
      \u{69}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{50}\u{61}\u{74}\u{68}: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2f\x40\x72\x39\x65\x38\x35\x35\x61\x63\x38\x32\x65\x64\x63\x34\x62\x35\x31\x65\x31\x33\x34\x30\x35\x36\x34\x21\x2e\x6a\x73",
      wasmPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x73\x74\x75\x64\x79\x6a\x65\x74\x2f\x40\x72\x35\x35\x32\x38\x36\x63\x66\x65\x30\x39\x64\x37\x34\x31\x30\x32\x33\x63\x63\x33\x65\x31\x64\x36\x21\x2e\x77\x61\x73\x6d",
      virtualWasmPath: "\x73\x74\x75\x64\x79\x6a\x65\x74\x2e\x77\x61\x73\x6d\x2e\x6a\x73",
      codec: {
        encode: λf0fd6706ec83 => λf0fd6706ec83 ? encodeURIComponent(λf0fd6706ec83) : λf0fd6706ec83,
        decode: λf0fd6706ec83 => λf0fd6706ec83 ? decodeURIComponent(λf0fd6706ec83) : λf0fd6706ec83
      }
    }, λcb4e16175cad = {
      flags: {
        ...λ6e6c408aa1a5.sb.flags,
        allowFailedIntercepts: !0
      },
      maskedfiles: [ "\x69\x6e\x6a\x65\x63\x74\x2e\x6a\x73", "\x73\x74\x75\x64\x79\x6a\x65\x74\x2e\x77\x61\x73\x6d\x2e\x6a\x73" ]
    };
    class d extends λ6e6c408aa1a5.k_ {
      frame=null;
      dependencies=[];
      constructor(λf0fd6706ec83, λb8a667256605) {
        super(λf0fd6706ec83), this.dependencies = λb8a667256605;
      }
      install(λf0fd6706ec83) {
        this.frame = λf0fd6706ec83;
      }
    }
    let λ6445f73b8300 = "\x73\x74\x61\x74\x65", λ4a144feef6f3 = "\x63\x6f\x6f\x6b\x69\x65\x73", λ1acfa9adc256 = null;
    function u(λf0fd6706ec83) {
      return "\x6f\x62\x6a\x65\x63\x74" == typeof λf0fd6706ec83 && null !== λf0fd6706ec83 && "\x6e\x75\x6d\x62\x65\x72" == typeof λf0fd6706ec83.updatedAt && Number.isFinite(λf0fd6706ec83.updatedAt) && "\x73\x74\x72\x69\x6e\x67" == typeof λf0fd6706ec83.cookies ? λf0fd6706ec83 : null;
    }
    function y(λf0fd6706ec83) {
      return new Promise((λb8a667256605, λa83c083ececf) => {
        λf0fd6706ec83.onsuccess = () => λb8a667256605(λf0fd6706ec83.result), λf0fd6706ec83.onerror = () => λa83c083ececf(λf0fd6706ec83.error ?? Error("\x49\x6e\x64\x65\x78\x65\x64\x44\x42\x20\x72\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64"));
      });
    }
    function m(λf0fd6706ec83) {
      return new Promise((λb8a667256605, λa83c083ececf) => {
        λf0fd6706ec83.oncomplete = () => λb8a667256605(), λf0fd6706ec83.onabort = () => λa83c083ececf(λf0fd6706ec83.error ?? Error("\x49\x6e\x64\x65\x78\x65\x64\x44\x42\x20\x74\x72\x61\x6e\x73\x61\x63\x74\x69\x6f\x6e\x20\x61\x62\x6f\x72\x74\x65\x64")), 
        λf0fd6706ec83.onerror = () => λa83c083ececf(λf0fd6706ec83.error ?? Error("\x49\x6e\x64\x65\x78\x65\x64\x44\x42\x20\x74\x72\x61\x6e\x73\x61\x63\x74\x69\x6f\x6e\x20\x66\x61\x69\x6c\x65\x64"));
      });
    }
    function g() {
      return λ1acfa9adc256 || (λ1acfa9adc256 = new Promise((λf0fd6706ec83, λb8a667256605) => {
        let λa83c083ececf = indexedDB.open("\x40\x64\x39\x34\x31\x62\x63\x36\x35\x61\x66\x33", 1);
        λa83c083ececf.onupgradeneeded = () => {
          let λf0fd6706ec83 = λa83c083ececf.result;
          λf0fd6706ec83.objectStoreNames.contains(λ6445f73b8300) || λf0fd6706ec83.createObjectStore(λ6445f73b8300);
        }, λa83c083ececf.onsuccess = () => λf0fd6706ec83(λa83c083ececf.result), λa83c083ececf.onerror = () => λb8a667256605(λa83c083ececf.error ?? Error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x6f\x70\x65\x6e\x20\x63\x6f\x6f\x6b\x69\x65\x20\x64\x61\x74\x61\x62\x61\x73\x65"));
      }));
    }
    async function w() {
      try {
        let λf0fd6706ec83 = (await g()).transaction(λ6445f73b8300, "\x72\x65\x61\x64\x6f\x6e\x6c\x79"), λb8a667256605 = λf0fd6706ec83.objectStore(λ6445f73b8300), λa83c083ececf = await y(λb8a667256605.get(λ4a144feef6f3));
        return await m(λf0fd6706ec83), u(λa83c083ececf);
      } catch (λf0fd6706ec83) {
        return console.error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x72\x65\x61\x64\x20\x70\x65\x72\x73\x69\x73\x74\x65\x64\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x63\x6f\x6f\x6b\x69\x65\x73\x3a", λf0fd6706ec83), 
        null;
      }
    }
    async function k(λf0fd6706ec83, λb8a667256605) {
      try {
        let λa83c083ececf = (await g()).transaction(λ6445f73b8300, "\x72\x65\x61\x64\x77\x72\x69\x74\x65"), λ1846fe0448cb = λa83c083ececf.objectStore(λ6445f73b8300), λ6e6c408aa1a5 = u(await y(λ1846fe0448cb.get(λ4a144feef6f3))), λ7f35c7083ce7 = Math.max(Date.now(), λb8a667256605 + 1, (λ6e6c408aa1a5?.updatedAt ?? 0) + 1);
        return λ1846fe0448cb.put({
          updatedAt: λ7f35c7083ce7,
          cookies: λf0fd6706ec83
        }, λ4a144feef6f3), await m(λa83c083ececf), λ7f35c7083ce7;
      } catch (λf0fd6706ec83) {
        return console.error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x70\x65\x72\x73\x69\x73\x74\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x63\x6f\x6f\x6b\x69\x65\x73\x3a", λf0fd6706ec83), λb8a667256605;
      }
    }
    function b() {
      return Math.random().toString(36).substring(2, 10);
    }
    let λb9620b14e6e3 = (0, λ1846fe0448cb.deepmerge)();
    class S {
      init;
      id;
      config;
      studyjetConfig;
      prefix;
      cookieJar=new λ6e6c408aa1a5.cP;
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
      onTabChannelMessage=λf0fd6706ec83 => {
        this.rpc.recieve(λf0fd6706ec83.data);
      };
      onCookieSyncMessage=λf0fd6706ec83 => {
        let λb8a667256605 = "\x6f\x62\x6a\x65\x63\x74" == typeof λf0fd6706ec83.data && null !== λf0fd6706ec83.data ? λf0fd6706ec83.data.updatedAt : void 0;
        "\x6e\x75\x6d\x62\x65\x72" != typeof λb8a667256605 || λb8a667256605 <= this.cookieUpdatedAt || (this.cookieSyncDirty = !0, 
        this.loadSavedCookies());
      };
      async loadStudyJetWasm() {
        if (this.wasmAlreadyFetched) return;
        let λf0fd6706ec83 = await fetch(this.config.wasmPath);
        (0, λ6e6c408aa1a5.ht)(await λf0fd6706ec83.arrayBuffer()), this.wasmAlreadyFetched = !0;
      }
      methods={
        ready: async () => {
          this.readyResolve(), setTimeout(() => {
            this.guardServiceWorkerRevive = !1;
          }, 5e3);
        },
        request: async λf0fd6706ec83 => {
          let λb8a667256605 = new URL(λf0fd6706ec83.rawUrl).pathname, λa83c083ececf = this.frames.find(λf0fd6706ec83 => λb8a667256605.startsWith(λf0fd6706ec83.prefix));
          if (!λa83c083ececf) throw Error("\x4e\x6f\x20\x66\x72\x61\x6d\x65\x20\x66\x6f\x75\x6e\x64\x20\x66\x6f\x72\x20\x72\x65\x71\x75\x65\x73\x74");
          try {
            if (await this.loadSavedCookies(), λb8a667256605 === λa83c083ececf.prefix + this.config.virtualWasmPath) {
              if (!this.wasmPayload) {
                let λf0fd6706ec83 = await fetch(this.config.wasmPath), λb8a667256605 = await λf0fd6706ec83.arrayBuffer(), λa83c083ececf = btoa(new Uint8Array(λb8a667256605).reduce((λf0fd6706ec83, λb8a667256605) => (λf0fd6706ec83.push(String.fromCharCode(λb8a667256605)), 
                λf0fd6706ec83), []).join(""));
                this.wasmPayload = `\x73\x65\x6c\x66\x2e\x57\x41\x53\x4d\x20\x3d\x20\x27${λa83c083ececf}\x27\x3b`;
              }
              return [ {
                body: this.wasmPayload,
                status: 200,
                statusText: "\x4f\x4b",
                headers: [ [ "\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65", "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x61\x76\x61\x73\x63\x72\x69\x70\x74" ] ]
              }, [] ];
            }
            let λ1846fe0448cb = λ6e6c408aa1a5.uh.fromRawHeaders(λf0fd6706ec83.initialHeaders), λ7f35c7083ce7 = await λa83c083ececf.fetchHandler.handleFetch({
              initialHeaders: λ1846fe0448cb,
              rawClientUrl: λf0fd6706ec83.rawClientUrl ? new URL(λf0fd6706ec83.rawClientUrl) : void 0,
              rawUrl: new URL(λf0fd6706ec83.rawUrl),
              rawReferrer: λf0fd6706ec83.rawReferrer,
              rawDestination: λf0fd6706ec83.destination,
              method: λf0fd6706ec83.method,
              mode: λf0fd6706ec83.mode,
              referrer: λf0fd6706ec83.referrer,
              body: λf0fd6706ec83.body,
              cache: λf0fd6706ec83.cache,
              clientId: λf0fd6706ec83.clientId
            });
            return [ {
              body: λ7f35c7083ce7.body,
              status: λ7f35c7083ce7.status,
              statusText: λ7f35c7083ce7.statusText,
              headers: λ7f35c7083ce7.headers.toRawHeaders()
            }, λ7f35c7083ce7.body instanceof ReadableStream || λ7f35c7083ce7.body instanceof ArrayBuffer ? [ λ7f35c7083ce7.body ] : [] ];
          } catch (λb8a667256605) {
            let λ1846fe0448cb = {
              setResponse: void 0,
              suppressError: !1
            };
            if (await λ6e6c408aa1a5.Cx.dispatch(λa83c083ececf.hooks.error.request, {
              rawrequest: λf0fd6706ec83,
              error: λb8a667256605
            }, λ1846fe0448cb), λ1846fe0448cb.suppressError || console.error("\x45\x72\x72\x6f\x72\x20\x69\x6e\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x72\x65\x71\x75\x65\x73\x74\x20\x68\x61\x6e\x64\x6c\x65\x72\x3a", λb8a667256605), 
            λ1846fe0448cb.setResponse) return [ λ1846fe0448cb.setResponse, [] ];
            throw λb8a667256605;
          }
        },
        initRemoteTransport: async λb8a667256605 => {
          let λa83c083ececf = new λf0fd6706ec83.C({
            request: async ({remote: λf0fd6706ec83, method: λb8a667256605, body: λa83c083ececf, headers: λ1846fe0448cb}) => {
              let λ6e6c408aa1a5 = await this.transport.request(new URL(λf0fd6706ec83), λb8a667256605, λa83c083ececf, λ1846fe0448cb, void 0);
              return [ λ6e6c408aa1a5, [ λ6e6c408aa1a5.body ] ];
            },
            sendSetCookie: async ({cookies: λf0fd6706ec83, options: λb8a667256605}) => {
              await this.loadSavedCookies(!0), λb8a667256605?.clear && this.cookieJar.clear(), 
              this.applyCookieSyncEntries(λf0fd6706ec83), await this.persistCookies(), await this.propagateCookieSync(λf0fd6706ec83, λb8a667256605);
            },
            connect: async ({url: λf0fd6706ec83, protocols: λb8a667256605, requestHeaders: λa83c083ececf, port: λ1846fe0448cb}) => {
              let λ6e6c408aa1a5, λ7f35c7083ce7 = new Promise(λf0fd6706ec83 => λ6e6c408aa1a5 = λf0fd6706ec83), [λdf3aae9c2384, λa3ce65a2e609] = this.transport.connect(new URL(λf0fd6706ec83), λb8a667256605, λa83c083ececf, (λf0fd6706ec83, λb8a667256605) => {
                λ6e6c408aa1a5({
                  result: "\x73\x75\x63\x63\x65\x73\x73",
                  protocol: λf0fd6706ec83,
                  extensions: λb8a667256605
                });
              }, λf0fd6706ec83 => {
                λ1846fe0448cb.postMessage({
                  type: "\x64\x61\x74\x61",
                  data: λf0fd6706ec83
                }, λf0fd6706ec83 instanceof ArrayBuffer ? [ λf0fd6706ec83 ] : []);
              }, (λf0fd6706ec83, λb8a667256605) => {
                λ1846fe0448cb.postMessage({
                  type: "\x63\x6c\x6f\x73\x65",
                  code: λf0fd6706ec83,
                  reason: λb8a667256605
                });
              }, λf0fd6706ec83 => {
                λ6e6c408aa1a5({
                  result: "\x66\x61\x69\x6c\x75\x72\x65",
                  error: λf0fd6706ec83
                });
              });
              return λ1846fe0448cb.onmessageerror = λf0fd6706ec83 => {
                console.error("\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x6f\x72\x74\x20\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λf0fd6706ec83);
              }, λ1846fe0448cb.onmessage = ({data: λf0fd6706ec83}) => {
                "\x64\x61\x74\x61" === λf0fd6706ec83.type ? λdf3aae9c2384(λf0fd6706ec83.data) : "\x63\x6c\x6f\x73\x65" === λf0fd6706ec83.type && λa3ce65a2e609(λf0fd6706ec83.code, λf0fd6706ec83.reason);
              }, [ await λ7f35c7083ce7, [] ];
            }
          }, "\x74\x72\x61\x6e\x73\x70\x6f\x72\x74", (λf0fd6706ec83, λa83c083ececf) => λb8a667256605.postMessage(λf0fd6706ec83, λa83c083ececf));
          λb8a667256605.onmessageerror = λf0fd6706ec83 => {
            console.error("\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x6f\x72\x74\x20\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λf0fd6706ec83);
          }, λb8a667256605.onmessage = λf0fd6706ec83 => {
            λa83c083ececf.recieve(λf0fd6706ec83.data);
          }, λa83c083ececf.call("\x72\x65\x61\x64\x79", void 0, []);
        }
      };
      constructor(λb8a667256605) {
        this.init = λb8a667256605, (0, λdf3aae9c2384.O)(), this.id = b(), this.config = λb9620b14e6e3(λa3ce65a2e609, λb8a667256605.config || {}), 
        this.studyjetConfig = λb9620b14e6e3(λcb4e16175cad, λ6e6c408aa1a5.sb), this.studyjetConfig = λb9620b14e6e3(this.studyjetConfig, λb8a667256605.studyjetConfig || {}), 
        this.prefix = this.config.prefix + this.id + "\x2f", this.serviceWorkerController = λb8a667256605.serviceworker, 
        this.ready = Promise.all([ new Promise(λf0fd6706ec83 => {
          this.readyResolve = λf0fd6706ec83;
        }), this.loadStudyJetWasm(), this.loadSavedCookies(!0) ]).then(() => void 0), this.rpc = new λf0fd6706ec83.C(this.methods, "\x74\x61\x62\x63\x68\x61\x6e\x6e\x65\x6c\x2d" + this.id, (λf0fd6706ec83, λb8a667256605) => {
          if (!this.port) throw Error("\x50\x6f\x72\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64");
          this.port.postMessage(λf0fd6706ec83, λb8a667256605);
        }), this.transport = λb8a667256605.transport, this.cookieSyncChannel.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", this.onCookieSyncMessage), 
        this.setupMessagePort(), navigator.serviceWorker.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", λf0fd6706ec83 => {
          if (λf0fd6706ec83.data?.$controller$setCookie && "\x6f\x62\x6a\x65\x63\x74" == typeof λf0fd6706ec83.data.$controller$setCookie) {
            let λb8a667256605 = λf0fd6706ec83.data.$controller$setCookie;
            if (λb8a667256605.controllerId && λb8a667256605.controllerId !== this.id) return;
            λb8a667256605.options?.clear && this.cookieJar.clear(), this.applyCookieSyncEntries(λb8a667256605.cookies), 
            "\x73\x74\x72\x69\x6e\x67" == typeof λb8a667256605.id && this.serviceWorkerController.postMessage({
              $sw$setCookieDone: {
                id: λb8a667256605.id
              }
            });
            return;
          }
          if (λf0fd6706ec83.data.$controller$swrevive) {
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
        let λf0fd6706ec83 = new MessageChannel;
        this.port = λf0fd6706ec83.port1, this.port.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", this.onTabChannelMessage), 
        this.port.start(), this.serviceWorkerController.postMessage({
          $controller$init: {
            prefix: this.prefix,
            id: this.id
          }
        }, [ λf0fd6706ec83.port2 ]);
      }
      applyCookieSyncEntries(λf0fd6706ec83) {
        if (Array.isArray(λf0fd6706ec83)) for (let λb8a667256605 of λf0fd6706ec83) "\x73\x74\x72\x69\x6e\x67" == typeof λb8a667256605?.url && "\x73\x74\x72\x69\x6e\x67" == typeof λb8a667256605.cookie && this.cookieJar.setCookies(λb8a667256605.cookie, new URL(λb8a667256605.url));
      }
      async propagateCookieSync(λf0fd6706ec83, λb8a667256605 = {}) {
        this.port && await this.rpc.call("\x73\x65\x6e\x64\x53\x65\x74\x43\x6f\x6f\x6b\x69\x65", {
          cookies: λf0fd6706ec83,
          options: λb8a667256605
        });
      }
      async loadSavedCookies(λf0fd6706ec83 = !1) {
        if (λf0fd6706ec83 || this.cookieSyncDirty) return this.cookieSyncPromise || (this.cookieSyncPromise = (async () => {
          let λf0fd6706ec83 = await w();
          λf0fd6706ec83 && λf0fd6706ec83.updatedAt > this.cookieUpdatedAt && (this.cookieJar.load(λf0fd6706ec83.cookies), 
          this.cookieUpdatedAt = λf0fd6706ec83.updatedAt), this.cookieSyncDirty = !1;
        })().finally(() => {
          this.cookieSyncPromise = null;
        })), this.cookieSyncPromise;
      }
      async persistCookies() {
        let λf0fd6706ec83 = await k(this.cookieJar.dump(), this.cookieUpdatedAt);
        λf0fd6706ec83 <= this.cookieUpdatedAt || (this.cookieUpdatedAt = λf0fd6706ec83, 
        this.cookieSyncDirty = !1, this.cookieSyncChannel.postMessage({
          updatedAt: λf0fd6706ec83
        }));
      }
      setTransport(λf0fd6706ec83) {
        for (let λb8a667256605 of (this.transport = λf0fd6706ec83, this.frames)) λb8a667256605.controller.transport = λf0fd6706ec83, 
        λb8a667256605.fetchHandler.client.transport = λf0fd6706ec83;
      }
      createFrame(λf0fd6706ec83, λb8a667256605 = {}) {
        if (!this.ready) throw Error("\x43\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x69\x73\x20\x6e\x6f\x74\x20\x72\x65\x61\x64\x79\x21\x20\x54\x72\x79\x20\x61\x77\x61\x69\x74\x69\x6e\x67\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2e\x77\x61\x69\x74\x28\x29");
        let λa83c083ececf = new v(this, λf0fd6706ec83 ??= document.createElement("\x69\x66\x72\x61\x6d\x65"), λb8a667256605);
        return this.frames.push(λa83c083ececf), λa83c083ececf;
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
            \u{67}\u{65}\u{74}\u{49}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{63}\u{72}\u{69}\u{70}\u{74}\u{73}: function e(λf0fd6706ec83, λb8a667256605, λa83c083ececf, λ1846fe0448cb, λ6e6c408aa1a5, λ7f35c7083ce7) {
              return (λdf3aae9c2384, λa3ce65a2e609, λcb4e16175cad, λ6445f73b8300) => {
                var λ4a144feef6f3;
                return [ λ6445f73b8300(λf0fd6706ec83.studyjetPath), λ6445f73b8300(λa83c083ececf.href + λf0fd6706ec83.virtualWasmPath), λ6445f73b8300(λf0fd6706ec83.\u{69}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{50}\u{61}\u{74}\u{68}), λ6445f73b8300("data:text/javascript;charset=utf-8;base64," + (λ4a144feef6f3 = `\x0a\x09\x09\x09\x09\x09\x64\x6f\x63\x75\x6d\x65\x6e\x74\x2e\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63\x74\x6f\x72\x41\x6c\x6c\x28\x22\x73\x63\x72\x69\x70\x74\x5b\x73\x74\x75\x64\x79\x6a\x65\x74\x2d\x69\x6e\x6a\x65\x63\x74\x65\x64\x5d\x22\x29\x2e\x66\x6f\x72\x45\x61\x63\x68\x28\x73\x63\x72\x69\x70\x74\x20\x3d\x3e\x20\x73\x63\x72\x69\x70\x74\x2e\x72\x65\x6d\x6f\x76\x65\x28\x29\x29\x3b\x0a\x09\x09\x09\x09\x09\x24\x73\x74\x75\x64\x79\x6a\x65\x74\x43\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2e\x6c\x6f\x61\x64\x28\x7b\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x66\x69\x67\x3a\x20${JSON.stringify(λf0fd6706ec83)}\x2c\x0a\x09\x09\x09\x09\x09\x09\x73\x6a\x63\x6f\x6e\x66\x69\x67\x3a\x20${JSON.stringify(λb8a667256605)}\x2c\x0a\x09\x09\x09\x09\x09\x09\x70\x72\x65\x66\x69\x78\x3a\x20\x6e\x65\x77\x20\x55\x52\x4c\x28\x22${λa83c083ececf.href}\x22\x29\x2c\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6f\x6b\x69\x65\x73\x3a\x20${JSON.stringify(λ1846fe0448cb.dump())}\x2c\x0a\x09\x09\x09\x09\x09\x09\x79\x69\x65\x6c\x64\x47\x65\x74\x49\x6e\x6a\x65\x63\x74\x53\x63\x72\x69\x70\x74\x73\x3a\x20${e.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x45\x6e\x63\x6f\x64\x65\x3a\x20${λ6e6c408aa1a5.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x44\x65\x63\x6f\x64\x65\x3a\x20${λ7f35c7083ce7.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x69\x6e\x69\x74\x48\x65\x61\x64\x65\x72\x73\x3a\x20${JSON.stringify(λcb4e16175cad.headers ?? [])}\x2c\x0a\x09\x09\x09\x09\x09\x09\x68\x69\x73\x74\x6f\x72\x79\x3a\x20${JSON.stringify(λcb4e16175cad.history ?? [])}\x2c\x0a\x09\x09\x09\x09\x09\x7d\x29\x0a\x09\x09\x09\x09`, 
                btoa((new TextEncoder).encode(λ4a144feef6f3).reduce((λf0fd6706ec83, λb8a667256605) => (λf0fd6706ec83.push(String.fromCharCode(λb8a667256605)), 
                λf0fd6706ec83), []).join("")))) ];
              };
            }(this.controller.config, this.controller.studyjetConfig, new URL(this.prefix, location.href), this.controller.cookieJar, this.controller.config.codec.encode, this.controller.config.codec.decode),
            \u{67}\u{65}\u{74}\u{57}\u{6f}\u{72}\u{6b}\u{65}\u{72}\u{49}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{63}\u{72}\u{69}\u{70}\u{74}\u{73}: (λf0fd6706ec83, λb8a667256605, λa83c083ececf) => {
              var λ1846fe0448cb;
              let λ6e6c408aa1a5 = "";
              return λ6e6c408aa1a5 += λa83c083ececf(this.controller.config.studyjetPath), λ6e6c408aa1a5 += λa83c083ececf(this.prefix + this.controller.config.virtualWasmPath), 
              λ6e6c408aa1a5 += λa83c083ececf("data:text/javascript;charset=utf-8;base64," + (λ1846fe0448cb = `\x0a\x09\x09\x09\x09\x09\x28\x28\x29\x3d\x3e\x7b\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x7b\x20\x53\x74\x75\x64\x79\x4a\x65\x74\x43\x6c\x69\x65\x6e\x74\x2c\x20\x43\x6f\x6f\x6b\x69\x65\x4a\x61\x72\x2c\x20\x73\x65\x74\x57\x61\x73\x6d\x20\x7d\x20\x3d\x20\x24\x73\x74\x75\x64\x79\x6a\x65\x74\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x73\x65\x74\x57\x61\x73\x6d\x28\x55\x69\x6e\x74\x38\x41\x72\x72\x61\x79\x2e\x66\x72\x6f\x6d\x28\x61\x74\x6f\x62\x28\x73\x65\x6c\x66\x2e\x57\x41\x53\x4d\x29\x2c\x20\x28\x63\x29\x20\x3d\x3e\x20\x63\x2e\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74\x28\x30\x29\x29\x29\x3b\x0a\x09\x09\x09\x09\x09\x09\x64\x65\x6c\x65\x74\x65\x20\x73\x65\x6c\x66\x2e\x57\x41\x53\x4d\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x73\x6a\x63\x6f\x6e\x66\x69\x67\x20\x3d\x20${JSON.stringify(this.controller.studyjetConfig)}\x3b\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x70\x72\x65\x66\x69\x78\x20\x3d\x20\x6e\x65\x77\x20\x55\x52\x4c\x28\x22${this.prefix}\x22\x2c\x20\x6c\x6f\x63\x61\x74\x69\x6f\x6e\x2e\x68\x72\x65\x66\x29\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x3d\x20\x7b\x0a\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x66\x69\x67\x3a\x20\x73\x6a\x63\x6f\x6e\x66\x69\x67\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x70\x72\x65\x66\x69\x78\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x69\x6e\x74\x65\x72\x66\x61\x63\x65\x3a\x20\x7b\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x45\x6e\x63\x6f\x64\x65\x3a\x20${this.controller.config.codec.encode.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x44\x65\x63\x6f\x64\x65\x3a\x20${this.controller.config.codec.decode.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x7d\x2c\x0a\x09\x09\x09\x09\x09\x09\x7d\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x63\x6c\x69\x65\x6e\x74\x20\x3d\x20\x6e\x65\x77\x20\x53\x74\x75\x64\x79\x4a\x65\x74\x43\x6c\x69\x65\x6e\x74\x28\x67\x6c\x6f\x62\x61\x6c\x54\x68\x69\x73\x2c\x20\x7b\x0a\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x74\x65\x78\x74\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x3a\x20\x6e\x75\x6c\x6c\x2c\x0a\x09\x09\x09\x09\x09\x09\x7d\x29\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6c\x69\x65\x6e\x74\x2e\x68\x6f\x6f\x6b\x28\x29\x3b\x0a\x09\x09\x09\x09\x09\x7d\x29\x28\x29\x3b\x0a\x09\x09\x09\x09\x09`, 
              btoa((new TextEncoder).encode(λ1846fe0448cb).reduce((λf0fd6706ec83, λb8a667256605) => (λf0fd6706ec83.push(String.fromCharCode(λb8a667256605)), 
              λf0fd6706ec83), []).join(""))));
            },
            codecEncode: this.controller.config.codec.encode,
            codecDecode: this.controller.config.codec.decode
          }
        };
      }
      plugins=[];
      constructor(λf0fd6706ec83, λa83c083ececf, λ1846fe0448cb = {}) {
        for (const λdf3aae9c2384 of (this.controller = λf0fd6706ec83, this.element = λa83c083ececf, 
        this.options = λ1846fe0448cb, this.id = b(), this.prefix = this.controller.prefix + this.id + "\x2f", 
        this.fetchHandler = new λ6e6c408aa1a5.mK({
          crossOriginIsolated: self.crossOriginIsolated,
          context: this.context,
          transport: λf0fd6706ec83.transport,
          async sendSetCookie(λb8a667256605, λa83c083ececf) {
            await λf0fd6706ec83.persistCookies(), await λf0fd6706ec83.propagateCookieSync(λb8a667256605.map(({url: λf0fd6706ec83, cookie: λb8a667256605}) => ({
              url: λf0fd6706ec83.href,
              cookie: λb8a667256605
            })), λa83c083ececf);
          },
          fetchBlobUrl: async λf0fd6706ec83 => λb8a667256605.Sr.fromNativeResponse(await fetch(λf0fd6706ec83)),
          fetchDataUrl: async λf0fd6706ec83 => λb8a667256605.Sr.fromNativeResponse(await fetch(λf0fd6706ec83))
        }), this.hooks = {
          fetch: this.fetchHandler.hooks.fetch,
          init: λ6e6c408aa1a5.Cx.create(),
          error: λ6e6c408aa1a5.Cx.create()
        }, λa83c083ececf[λ7f35c7083ce7.I] = this, this.plugins = λ1846fe0448cb.plugins ?? [], 
        this.plugins)) {
          for (const λf0fd6706ec83 of λdf3aae9c2384.dependencies) if (!this.plugins.find(λb8a667256605 => λb8a667256605.name === λf0fd6706ec83)) throw Error(`\x44\x65\x70\x65\x6e\x64\x65\x6e\x63\x79\x20${λf0fd6706ec83}\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x66\x6f\x72\x20\x70\x6c\x75\x67\x69\x6e\x20${λdf3aae9c2384.name}`);
          λdf3aae9c2384.install(this);
        }
      }
      getPlugin(λf0fd6706ec83) {
        let λb8a667256605 = this.plugins.find(λb8a667256605 => λb8a667256605.name === λf0fd6706ec83);
        if (!λb8a667256605) throw Error(`\x50\x6c\x75\x67\x69\x6e\x20${λf0fd6706ec83}\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64`);
        return λb8a667256605;
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
      go(λf0fd6706ec83) {
        let λb8a667256605 = (0, λ6e6c408aa1a5.Oy)(λf0fd6706ec83, this.context, {
          origin: new URL(location.href),
          base: new URL(location.href)
        });
        this.element.src = λb8a667256605;
      }
    }
  })(), $studyjetController = λa83c083ececf;
})();
