var $studyjetController;

(() => {
  var λ82183f6cab15 = {
    286(λ82183f6cab15, λ5384af2ec11c, λ81a4d285b052) {
      λ81a4d285b052.d(λ5384af2ec11c, {
        I: () => λ0fafb4ebeac6
      });
      let λ0fafb4ebeac6 = Symbol.for("\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x66\x72\x61\x6d\x65\x20\x68\x61\x6e\x64\x6c\x65");
    },
    355(λ82183f6cab15, λ5384af2ec11c, λ81a4d285b052) {
      λ81a4d285b052.d(λ5384af2ec11c, {
        O: () => s,
        x: () => λ0fafb4ebeac6
      });
      let λ0fafb4ebeac6 = "\x30\x2e\x30\x2e\x31\x34";
      function s() {
        if ("\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" == typeof $studyjet) throw Error("\x40\x6d\x65\x72\x63\x75\x72\x79\x77\x6f\x72\x6b\x73\x68\x6f\x70\x2f\x73\x74\x75\x64\x79\x6a\x65\x74\x20\x69\x73\x20\x6e\x6f\x74\x20\x6c\x6f\x61\x64\x65\x64\x2e\x20\x4c\x6f\x61\x64\x20\x73\x74\x75\x64\x79\x6a\x65\x74\x20\x62\x65\x66\x6f\x72\x65\x20\x74\x68\x65\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2e");
        var λ82183f6cab15 = "\x32\x2e\x30\x2e\x36\x37\x2d\x61\x6c\x70\x68\x61\x2e\x32", λ5384af2ec11c = $studyjet.versionInfo.version;
        if (λ82183f6cab15 !== λ5384af2ec11c) throw Error(`\x40\x6d\x65\x72\x63\x75\x72\x79\x77\x6f\x72\x6b\x73\x68\x6f\x70\x2f\x73\x74\x75\x64\x79\x6a\x65\x74\x20\x76\x65\x72\x73\x69\x6f\x6e\x20\x6d\x69\x73\x6d\x61\x74\x63\x68\x3a\x20\x74\x68\x69\x73\x20\x62\x75\x69\x6c\x64\x20\x65\x78\x70\x65\x63\x74\x73\x20${λ82183f6cab15}\x2c\x20\x62\x75\x74\x20\x74\x68\x65\x20\x6c\x6f\x61\x64\x65\x64\x20\x72\x75\x6e\x74\x69\x6d\x65\x20\x69\x73\x20${λ5384af2ec11c}`);
      }
    },
    805(λ82183f6cab15, λ5384af2ec11c, λ81a4d285b052) {
      λ81a4d285b052.d(λ5384af2ec11c, {
        C: () => o
      });
      class o {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λ82183f6cab15, λ5384af2ec11c, λ81a4d285b052) {
          this.methods = λ82183f6cab15, this.id = λ5384af2ec11c, this.sendRaw = λ81a4d285b052;
        }
        recieve(λ82183f6cab15) {
          if (null == λ82183f6cab15 || "\x6f\x62\x6a\x65\x63\x74" != typeof λ82183f6cab15) return;
          let λ5384af2ec11c = λ82183f6cab15[this.id];
          if (null == λ5384af2ec11c || "\x6f\x62\x6a\x65\x63\x74" != typeof λ5384af2ec11c) return;
          let λ81a4d285b052 = λ5384af2ec11c.$type;
          if ("\x72\x65\x73\x70\x6f\x6e\x73\x65" === λ81a4d285b052) {
            let λ82183f6cab15 = λ5384af2ec11c.$token, λ81a4d285b052 = λ5384af2ec11c.$data, λ0fafb4ebeac6 = λ5384af2ec11c.$error, λe9b1fc6cd8f8 = this.promiseCallbacks.get(λ82183f6cab15);
            if (!λe9b1fc6cd8f8) return;
            this.promiseCallbacks.delete(λ82183f6cab15), void 0 !== λ0fafb4ebeac6 ? λe9b1fc6cd8f8.reject(Error(λ0fafb4ebeac6)) : λe9b1fc6cd8f8.resolve(λ81a4d285b052);
          } else if ("\x72\x65\x71\x75\x65\x73\x74" === λ81a4d285b052) {
            let λ82183f6cab15 = λ5384af2ec11c.$method, λ81a4d285b052 = λ5384af2ec11c.$args;
            this.methods[λ82183f6cab15](λ81a4d285b052).then(λ82183f6cab15 => {
              this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ5384af2ec11c.$token,
                  $data: λ82183f6cab15?.[0]
                }
              }, λ82183f6cab15?.[1]);
            }).catch(λ82183f6cab15 => {
              console.error(λ82183f6cab15), this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ5384af2ec11c.$token,
                  $error: λ82183f6cab15?.toString() || "\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x65\x72\x72\x6f\x72"
                }
              }, []);
            });
          }
        }
        call(λ82183f6cab15, λ5384af2ec11c, λ81a4d285b052 = []) {
          let λ0fafb4ebeac6 = this.counter++;
          return new Promise((λe9b1fc6cd8f8, λ78e19ac0877e) => {
            this.promiseCallbacks.set(λ0fafb4ebeac6, {
              resolve: λe9b1fc6cd8f8,
              reject: λ78e19ac0877e
            }), this.sendRaw({
              [this.id]: {
                $type: "\x72\x65\x71\x75\x65\x73\x74",
                $method: λ82183f6cab15,
                $args: λ5384af2ec11c,
                $token: λ0fafb4ebeac6
              }
            }, λ81a4d285b052);
          });
        }
      }
    },
    986(λ82183f6cab15) {
      let λ5384af2ec11c = Object.getPrototypeOf({});
      function r() {
        return function(λ82183f6cab15) {
          return "\x6f\x62\x6a\x65\x63\x74" == typeof λ82183f6cab15 && null !== λ82183f6cab15 && !(λ82183f6cab15 instanceof RegExp) && !(λ82183f6cab15 instanceof Date);
        };
      }
      function o(λ82183f6cab15) {
        function o(λ82183f6cab15) {
          return "\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72" !== λ82183f6cab15 && "\x70\x72\x6f\x74\x6f\x74\x79\x70\x65" !== λ82183f6cab15 && "\x5f\x5f\x70\x72\x6f\x74\x6f\x5f\x5f" !== λ82183f6cab15;
        }
        let λ81a4d285b052 = Object.prototype.propertyIsEnumerable, λ0fafb4ebeac6 = λ82183f6cab15?.symbols ? function(λ82183f6cab15) {
          let λ5384af2ec11c = Object.keys(λ82183f6cab15), λ0fafb4ebeac6 = Object.getOwnPropertySymbols(λ82183f6cab15);
          for (let λe9b1fc6cd8f8 = 0, λ78e19ac0877e = λ0fafb4ebeac6.length; λe9b1fc6cd8f8 < λ78e19ac0877e; ++λe9b1fc6cd8f8) λ81a4d285b052.call(λ82183f6cab15, λ0fafb4ebeac6[λe9b1fc6cd8f8]) && λ5384af2ec11c.push(λ0fafb4ebeac6[λe9b1fc6cd8f8]);
          return λ5384af2ec11c;
        } : Object.keys, λe9b1fc6cd8f8 = "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ82183f6cab15?.cloneProtoObject ? λ82183f6cab15.cloneProtoObject : void 0, λ78e19ac0877e = "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ82183f6cab15?.isMergeableObject ? λ82183f6cab15.isMergeableObject : r(), λ6e8af78c4c9d = λ82183f6cab15?.onlyDefinedProperties === !0, λ2acb15b628ee = λ82183f6cab15 && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ82183f6cab15.mergeArray ? λ82183f6cab15.mergeArray({
          clone: d,
          deepmerge: h,
          getKeys: λ0fafb4ebeac6,
          isMergeableObject: λ78e19ac0877e
        }) : function(λ82183f6cab15, λ5384af2ec11c) {
          let λ81a4d285b052 = λ82183f6cab15.length, λ0fafb4ebeac6 = λ5384af2ec11c.length, λe9b1fc6cd8f8 = 0, λ78e19ac0877e = Array(λ81a4d285b052 + λ0fafb4ebeac6);
          for (;λe9b1fc6cd8f8 < λ81a4d285b052; ++λe9b1fc6cd8f8) λ78e19ac0877e[λe9b1fc6cd8f8] = d(λ82183f6cab15[λe9b1fc6cd8f8]);
          for (λe9b1fc6cd8f8 = 0; λe9b1fc6cd8f8 < λ0fafb4ebeac6; ++λe9b1fc6cd8f8) λ78e19ac0877e[λe9b1fc6cd8f8 + λ81a4d285b052] = d(λ5384af2ec11c[λe9b1fc6cd8f8]);
          return λ78e19ac0877e;
        };
        function d(λ82183f6cab15) {
          return λ78e19ac0877e(λ82183f6cab15) ? Array.isArray(λ82183f6cab15) ? function(λ82183f6cab15) {
            let λ5384af2ec11c = 0, λ81a4d285b052 = λ82183f6cab15.length, λ0fafb4ebeac6 = Array(λ81a4d285b052);
            for (;λ5384af2ec11c < λ81a4d285b052; ++λ5384af2ec11c) λ0fafb4ebeac6[λ5384af2ec11c] = d(λ82183f6cab15[λ5384af2ec11c]);
            return λ0fafb4ebeac6;
          }(λ82183f6cab15) : function(λ82183f6cab15) {
            let λ81a4d285b052, λ78e19ac0877e, λ6e8af78c4c9d, λ2acb15b628ee = {};
            if (λe9b1fc6cd8f8 && Object.getPrototypeOf(λ82183f6cab15) !== λ5384af2ec11c) return λe9b1fc6cd8f8(λ82183f6cab15);
            let λ586babe8f3da = λ0fafb4ebeac6(λ82183f6cab15);
            for (λ81a4d285b052 = 0, λ78e19ac0877e = λ586babe8f3da.length; λ81a4d285b052 < λ78e19ac0877e; ++λ81a4d285b052) o(λ6e8af78c4c9d = λ586babe8f3da[λ81a4d285b052]) && (λ2acb15b628ee[λ6e8af78c4c9d] = d(λ82183f6cab15[λ6e8af78c4c9d]));
            return λ2acb15b628ee;
          }(λ82183f6cab15) : λ82183f6cab15;
        }
        function h(λ82183f6cab15, λ81a4d285b052) {
          if (λ6e8af78c4c9d && void 0 === λ81a4d285b052) return d(λ82183f6cab15);
          let λ586babe8f3da = Array.isArray(λ81a4d285b052), λ6f6dff81af1c = Array.isArray(λ82183f6cab15);
          return "\x6f\x62\x6a\x65\x63\x74" != typeof λ81a4d285b052 || null === λ81a4d285b052 ? λ81a4d285b052 : λ78e19ac0877e(λ82183f6cab15) ? λ586babe8f3da && λ6f6dff81af1c ? λ2acb15b628ee(λ82183f6cab15, λ81a4d285b052) : λ586babe8f3da !== λ6f6dff81af1c ? d(λ81a4d285b052) : function(λ82183f6cab15, λ81a4d285b052) {
            let λ2acb15b628ee, λ586babe8f3da, λ6f6dff81af1c, λe9bfbef9acd3 = {}, λ979ef7a361ca = λ0fafb4ebeac6(λ82183f6cab15), λ9102c3edae2d = λ0fafb4ebeac6(λ81a4d285b052);
            for (λ2acb15b628ee = 0, λ586babe8f3da = λ979ef7a361ca.length; λ2acb15b628ee < λ586babe8f3da; ++λ2acb15b628ee) o(λ6f6dff81af1c = λ979ef7a361ca[λ2acb15b628ee]) && -1 === λ9102c3edae2d.indexOf(λ6f6dff81af1c) && (λe9bfbef9acd3[λ6f6dff81af1c] = d(λ82183f6cab15[λ6f6dff81af1c]));
            for (λ2acb15b628ee = 0, λ586babe8f3da = λ9102c3edae2d.length; λ2acb15b628ee < λ586babe8f3da; ++λ2acb15b628ee) if (o(λ6f6dff81af1c = λ9102c3edae2d[λ2acb15b628ee])) if (λ6f6dff81af1c in λ82183f6cab15) -1 !== λ979ef7a361ca.indexOf(λ6f6dff81af1c) && (λe9b1fc6cd8f8 && λ78e19ac0877e(λ81a4d285b052[λ6f6dff81af1c]) && Object.getPrototypeOf(λ81a4d285b052[λ6f6dff81af1c]) !== λ5384af2ec11c ? λe9bfbef9acd3[λ6f6dff81af1c] = λe9b1fc6cd8f8(λ81a4d285b052[λ6f6dff81af1c]) : λe9bfbef9acd3[λ6f6dff81af1c] = h(λ82183f6cab15[λ6f6dff81af1c], λ81a4d285b052[λ6f6dff81af1c])); else {
              if (λ6e8af78c4c9d && void 0 === λ81a4d285b052[λ6f6dff81af1c]) continue;
              λe9bfbef9acd3[λ6f6dff81af1c] = d(λ81a4d285b052[λ6f6dff81af1c]);
            }
            return λe9bfbef9acd3;
          }(λ82183f6cab15, λ81a4d285b052) : d(λ81a4d285b052);
        }
        return λ82183f6cab15?.all ? function() {
          let λ82183f6cab15;
          switch (arguments.length) {
           case 0:
            return {};

           case 1:
            return d(arguments[0]);

           case 2:
            return h(arguments[0], arguments[1]);
          }
          for (let λ5384af2ec11c = 0, λ81a4d285b052 = arguments.length; λ5384af2ec11c < λ81a4d285b052; ++λ5384af2ec11c) λ82183f6cab15 = h(λ82183f6cab15, arguments[λ5384af2ec11c]);
          return λ82183f6cab15;
        } : h;
      }
      λ82183f6cab15.exports = o, λ82183f6cab15.exports.default = o, λ82183f6cab15.exports.deepmerge = o, 
      Object.defineProperty(λ82183f6cab15.exports, "\x69\x73\x4d\x65\x72\x67\x65\x61\x62\x6c\x65\x4f\x62\x6a\x65\x63\x74", {
        get: r
      });
    },
    235(λ82183f6cab15, λ5384af2ec11c, λ81a4d285b052) {
      λ81a4d285b052.d(λ5384af2ec11c, {
        Sr: () => s
      }), WebSocket.CLOSED, WebSocket.CONNECTING, WebSocket.OPEN, EventTarget;
      let λ0fafb4ebeac6 = [ 101, 204, 205, 304 ];
      class s extends Response {
        url;
        rawHeaders;
        redirected=!1;
        static fromTransferrableResponse(λ82183f6cab15, λ5384af2ec11c) {
          let λ81a4d285b052 = new s(λ0fafb4ebeac6.includes(λ82183f6cab15.status) ? void 0 : λ82183f6cab15.body, {
            headers: new Headers(λ82183f6cab15.headers),
            status: λ82183f6cab15.status,
            statusText: λ82183f6cab15.statusText
          });
          return λ81a4d285b052.url = λ5384af2ec11c, λ81a4d285b052.redirected = λ82183f6cab15.status >= 300 && λ82183f6cab15.status < 400 && void 0 !== λ82183f6cab15.headers.location, 
          λ81a4d285b052.rawHeaders = λ82183f6cab15.headers, λ81a4d285b052;
        }
        static fromNativeResponse(λ82183f6cab15) {
          let λ5384af2ec11c = new s(λ0fafb4ebeac6.includes(λ82183f6cab15.status) ? void 0 : λ82183f6cab15.body, {
            headers: λ82183f6cab15.headers,
            status: λ82183f6cab15.status,
            statusText: λ82183f6cab15.statusText
          });
          return λ5384af2ec11c.url = λ82183f6cab15.url, λ5384af2ec11c.rawHeaders = [ ...λ82183f6cab15.headers ], 
          λ5384af2ec11c.redirected = λ82183f6cab15.redirected, λ5384af2ec11c;
        }
      }
    },
    423(λ82183f6cab15, λ5384af2ec11c, λ81a4d285b052) {
      λ81a4d285b052.d(λ5384af2ec11c, {
        Cx: () => λ5e59c24b5400,
        Oy: () => λdd277ccb0afd,
        cP: () => λe9b1fc6cd8f8,
        ht: () => λef92c2a67204,
        k_: () => λ6e8af78c4c9d,
        mK: () => λe9bfbef9acd3,
        sb: () => λbde2be8f6d66,
        uh: () => λ9102c3edae2d
      });
      let {BareResponse: λ0fafb4ebeac6, CookieJar: λe9b1fc6cd8f8, IncrementalHtmlRewriter: λ78e19ac0877e, Plugin: λ6e8af78c4c9d, STUDYJETCLIENT: λ2acb15b628ee, STUDYJETCLIENTNAME: λ586babe8f3da, StudyJetClient: λ6f6dff81af1c, StudyJetFetchHandler: λe9bfbef9acd3, StudyJetFetchTrackedClient: λ979ef7a361ca, StudyJetHeaders: λ9102c3edae2d, Tap: λ5e59c24b5400, \u{63}\u{72}\u{65}\u{61}\u{74}\u{65}\u{4c}\u{6f}\u{63}\u{61}\u{74}\u{69}\u{6f}\u{6e}\u{50}\u{72}\u{6f}\u{78}\u{79}: λ21cf75536761, defaultConfig: λbde2be8f6d66, defaultConfigDev: λfbb485a4dd34, flagEnabled: λ75ebb9a7f977, getOwnPropertyDescriptorHandler: λa31c2aa102f1, getRewriter: λ786b77aff860, getScriptBlockTypeString: λ105f7dd3e1e2, htmlRules: λ00c297b1fe79, isArchiveMimeType: λ8eebb60e7ec9, isAudioOrVideoMimeType: λ075ec571bd20, isFontMimeType: λc1bf30d4f73d, isHtmlMimeType: λ5613f960092c, isImageMimeType: λe91000ca673d, isInlineDisplayableMimeType: λ8968da23b8b8, isJavascriptMimeType: λ29d14d6765ef, isJavascriptMimeTypeEssenceMatch: λ61c2ca8b6bf7, isModuleScriptType: λ76df3df98106, isScriptType: λf4519a432cd1, isScriptableMimeType: λe4381638e059, isXmlMimeType: λeac1450db635, isZipBasedMimeType: λfbc56006c349, isdedicated: λc6262515eaab, isshared: λ5c98bdacd899, issw: λ9c9d4594d3ba, iswindow: λd33d11ebf7fc, isworker: λ10eeeec7ef55, parseMimeType: λe71d336c5a98, rewriteBlob: λ166eafea503b, rewriteCss: λc91c3a2e6d39, rewriteHtml: λ7c72e42c7c2b, rewriteJs: λ2dba6a6dbfd4, rewriteJsInner: λa5b387abbde6, rewriteSrcset: λc5aa1e93f239, rewriteUrl: λdd277ccb0afd, rewriteWorkers: λ5a542bc96025, setWasm: λef92c2a67204, unrewriteBlob: λ404cc1c033c7, unrewriteCss: λ04e75275cea3, unrewriteHtml: λc5070b3cb7a5, unrewriteUrl: λd4f61995722f, versionInfo: λ6c646bbfb093} = globalThis.$studyjet;
    }
  }, λ5384af2ec11c = {};
  function r(λ81a4d285b052) {
    var λ0fafb4ebeac6 = λ5384af2ec11c[λ81a4d285b052];
    if (void 0 !== λ0fafb4ebeac6) return λ0fafb4ebeac6.exports;
    var λe9b1fc6cd8f8 = λ5384af2ec11c[λ81a4d285b052] = {
      exports: {}
    };
    return λ82183f6cab15[λ81a4d285b052](λe9b1fc6cd8f8, λe9b1fc6cd8f8.exports, r), λe9b1fc6cd8f8.exports;
  }
  r.n = λ82183f6cab15 => {
    var λ5384af2ec11c = λ82183f6cab15 && λ82183f6cab15.__esModule ? () => λ82183f6cab15.default : () => λ82183f6cab15;
    return r.d(λ5384af2ec11c, {
      a: λ5384af2ec11c
    }), λ5384af2ec11c;
  }, r.d = (λ82183f6cab15, λ5384af2ec11c) => {
    for (var λ81a4d285b052 in λ5384af2ec11c) r.o(λ5384af2ec11c, λ81a4d285b052) && !r.o(λ82183f6cab15, λ81a4d285b052) && Object.defineProperty(λ82183f6cab15, λ81a4d285b052, {
      enumerable: !0,
      get: λ5384af2ec11c[λ81a4d285b052]
    });
  }, r.o = (λ82183f6cab15, λ5384af2ec11c) => Object.prototype.hasOwnProperty.call(λ82183f6cab15, λ5384af2ec11c), 
  r.r = λ82183f6cab15 => {
    "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λ82183f6cab15, Symbol.toStringTag, {
      value: "\x4d\x6f\x64\x75\x6c\x65"
    }), Object.defineProperty(λ82183f6cab15, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
      value: !0
    });
  };
  var λ81a4d285b052 = {};
  (() => {
    r.r(λ81a4d285b052), r.d(λ81a4d285b052, {
      Controller: () => S,
      Frame: () => v,
      ManagedPlugin: () => d,
      VERSION: () => λ6e8af78c4c9d.x,
      assertRuntimeStudyJetVersion: () => λ6e8af78c4c9d.O,
      config: () => λ2acb15b628ee
    });
    var λ82183f6cab15 = r(805), λ5384af2ec11c = r(235), λ0fafb4ebeac6 = r(986), λe9b1fc6cd8f8 = r(423), λ78e19ac0877e = r(286), λ6e8af78c4c9d = r(355);
    let λ2acb15b628ee = {
      prefix: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x7e\x2f\x73\x74\x75\x64\x79\x2f",
      studyjetPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x73\x74\x75\x64\x79\x6a\x65\x74\x2f\x40\x72\x36\x39\x63\x31\x38\x66\x39\x62\x64\x34\x65\x64\x31\x37\x35\x63\x39\x65\x61\x35\x30\x35\x62\x38\x21\x2e\x6a\x73",
      \u{69}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{50}\u{61}\u{74}\u{68}: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2f\x40\x72\x39\x65\x38\x35\x35\x61\x63\x38\x32\x65\x64\x63\x34\x62\x35\x31\x65\x31\x33\x34\x30\x35\x36\x34\x21\x2e\x6a\x73",
      wasmPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x73\x74\x75\x64\x79\x6a\x65\x74\x2f\x40\x72\x35\x35\x32\x38\x36\x63\x66\x65\x30\x39\x64\x37\x34\x31\x30\x32\x33\x63\x63\x33\x65\x31\x64\x36\x21\x2e\x77\x61\x73\x6d",
      virtualWasmPath: "\x73\x74\x75\x64\x79\x6a\x65\x74\x2e\x77\x61\x73\x6d\x2e\x6a\x73",
      codec: {
        encode: λ82183f6cab15 => λ82183f6cab15 ? encodeURIComponent(λ82183f6cab15) : λ82183f6cab15,
        decode: λ82183f6cab15 => λ82183f6cab15 ? decodeURIComponent(λ82183f6cab15) : λ82183f6cab15
      }
    }, λ586babe8f3da = {
      flags: {
        ...λe9b1fc6cd8f8.sb.flags,
        allowFailedIntercepts: !0
      },
      maskedfiles: [ "\x69\x6e\x6a\x65\x63\x74\x2e\x6a\x73", "\x73\x74\x75\x64\x79\x6a\x65\x74\x2e\x77\x61\x73\x6d\x2e\x6a\x73" ]
    };
    class d extends λe9b1fc6cd8f8.k_ {
      frame=null;
      dependencies=[];
      constructor(λ82183f6cab15, λ5384af2ec11c) {
        super(λ82183f6cab15), this.dependencies = λ5384af2ec11c;
      }
      install(λ82183f6cab15) {
        this.frame = λ82183f6cab15;
      }
    }
    let λ6f6dff81af1c = "\x73\x74\x61\x74\x65", λe9bfbef9acd3 = "\x63\x6f\x6f\x6b\x69\x65\x73", λ979ef7a361ca = null;
    function u(λ82183f6cab15) {
      return "\x6f\x62\x6a\x65\x63\x74" == typeof λ82183f6cab15 && null !== λ82183f6cab15 && "\x6e\x75\x6d\x62\x65\x72" == typeof λ82183f6cab15.updatedAt && Number.isFinite(λ82183f6cab15.updatedAt) && "\x73\x74\x72\x69\x6e\x67" == typeof λ82183f6cab15.cookies ? λ82183f6cab15 : null;
    }
    function y(λ82183f6cab15) {
      return new Promise((λ5384af2ec11c, λ81a4d285b052) => {
        λ82183f6cab15.onsuccess = () => λ5384af2ec11c(λ82183f6cab15.result), λ82183f6cab15.onerror = () => λ81a4d285b052(λ82183f6cab15.error ?? Error("\x49\x6e\x64\x65\x78\x65\x64\x44\x42\x20\x72\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64"));
      });
    }
    function m(λ82183f6cab15) {
      return new Promise((λ5384af2ec11c, λ81a4d285b052) => {
        λ82183f6cab15.oncomplete = () => λ5384af2ec11c(), λ82183f6cab15.onabort = () => λ81a4d285b052(λ82183f6cab15.error ?? Error("\x49\x6e\x64\x65\x78\x65\x64\x44\x42\x20\x74\x72\x61\x6e\x73\x61\x63\x74\x69\x6f\x6e\x20\x61\x62\x6f\x72\x74\x65\x64")), 
        λ82183f6cab15.onerror = () => λ81a4d285b052(λ82183f6cab15.error ?? Error("\x49\x6e\x64\x65\x78\x65\x64\x44\x42\x20\x74\x72\x61\x6e\x73\x61\x63\x74\x69\x6f\x6e\x20\x66\x61\x69\x6c\x65\x64"));
      });
    }
    function g() {
      return λ979ef7a361ca || (λ979ef7a361ca = new Promise((λ82183f6cab15, λ5384af2ec11c) => {
        let λ81a4d285b052 = indexedDB.open("\x40\x64\x39\x34\x31\x62\x63\x36\x35\x61\x66\x33", 1);
        λ81a4d285b052.onupgradeneeded = () => {
          let λ82183f6cab15 = λ81a4d285b052.result;
          λ82183f6cab15.objectStoreNames.contains(λ6f6dff81af1c) || λ82183f6cab15.createObjectStore(λ6f6dff81af1c);
        }, λ81a4d285b052.onsuccess = () => λ82183f6cab15(λ81a4d285b052.result), λ81a4d285b052.onerror = () => λ5384af2ec11c(λ81a4d285b052.error ?? Error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x6f\x70\x65\x6e\x20\x63\x6f\x6f\x6b\x69\x65\x20\x64\x61\x74\x61\x62\x61\x73\x65"));
      }));
    }
    async function w() {
      try {
        let λ82183f6cab15 = (await g()).transaction(λ6f6dff81af1c, "\x72\x65\x61\x64\x6f\x6e\x6c\x79"), λ5384af2ec11c = λ82183f6cab15.objectStore(λ6f6dff81af1c), λ81a4d285b052 = await y(λ5384af2ec11c.get(λe9bfbef9acd3));
        return await m(λ82183f6cab15), u(λ81a4d285b052);
      } catch (λ82183f6cab15) {
        return console.error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x72\x65\x61\x64\x20\x70\x65\x72\x73\x69\x73\x74\x65\x64\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x63\x6f\x6f\x6b\x69\x65\x73\x3a", λ82183f6cab15), 
        null;
      }
    }
    async function k(λ82183f6cab15, λ5384af2ec11c) {
      try {
        let λ81a4d285b052 = (await g()).transaction(λ6f6dff81af1c, "\x72\x65\x61\x64\x77\x72\x69\x74\x65"), λ0fafb4ebeac6 = λ81a4d285b052.objectStore(λ6f6dff81af1c), λe9b1fc6cd8f8 = u(await y(λ0fafb4ebeac6.get(λe9bfbef9acd3))), λ78e19ac0877e = Math.max(Date.now(), λ5384af2ec11c + 1, (λe9b1fc6cd8f8?.updatedAt ?? 0) + 1);
        return λ0fafb4ebeac6.put({
          updatedAt: λ78e19ac0877e,
          cookies: λ82183f6cab15
        }, λe9bfbef9acd3), await m(λ81a4d285b052), λ78e19ac0877e;
      } catch (λ82183f6cab15) {
        return console.error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x70\x65\x72\x73\x69\x73\x74\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x63\x6f\x6f\x6b\x69\x65\x73\x3a", λ82183f6cab15), λ5384af2ec11c;
      }
    }
    function b() {
      return Math.random().toString(36).substring(2, 10);
    }
    let λ9102c3edae2d = (0, λ0fafb4ebeac6.deepmerge)();
    class S {
      init;
      id;
      config;
      studyjetConfig;
      prefix;
      cookieJar=new λe9b1fc6cd8f8.cP;
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
      onTabChannelMessage=λ82183f6cab15 => {
        this.rpc.recieve(λ82183f6cab15.data);
      };
      onCookieSyncMessage=λ82183f6cab15 => {
        let λ5384af2ec11c = "\x6f\x62\x6a\x65\x63\x74" == typeof λ82183f6cab15.data && null !== λ82183f6cab15.data ? λ82183f6cab15.data.updatedAt : void 0;
        "\x6e\x75\x6d\x62\x65\x72" != typeof λ5384af2ec11c || λ5384af2ec11c <= this.cookieUpdatedAt || (this.cookieSyncDirty = !0, 
        this.loadSavedCookies());
      };
      async loadStudyJetWasm() {
        if (this.wasmAlreadyFetched) return;
        let λ82183f6cab15 = await fetch(this.config.wasmPath);
        (0, λe9b1fc6cd8f8.ht)(await λ82183f6cab15.arrayBuffer()), this.wasmAlreadyFetched = !0;
      }
      methods={
        ready: async () => {
          this.readyResolve(), setTimeout(() => {
            this.guardServiceWorkerRevive = !1;
          }, 5e3);
        },
        request: async λ82183f6cab15 => {
          let λ5384af2ec11c = new URL(λ82183f6cab15.rawUrl).pathname, λ81a4d285b052 = this.frames.find(λ82183f6cab15 => λ5384af2ec11c.startsWith(λ82183f6cab15.prefix));
          if (!λ81a4d285b052) throw Error("\x4e\x6f\x20\x66\x72\x61\x6d\x65\x20\x66\x6f\x75\x6e\x64\x20\x66\x6f\x72\x20\x72\x65\x71\x75\x65\x73\x74");
          try {
            if (await this.loadSavedCookies(), λ5384af2ec11c === λ81a4d285b052.prefix + this.config.virtualWasmPath) {
              if (!this.wasmPayload) {
                let λ82183f6cab15 = await fetch(this.config.wasmPath), λ5384af2ec11c = await λ82183f6cab15.arrayBuffer(), λ81a4d285b052 = btoa(new Uint8Array(λ5384af2ec11c).reduce((λ82183f6cab15, λ5384af2ec11c) => (λ82183f6cab15.push(String.fromCharCode(λ5384af2ec11c)), 
                λ82183f6cab15), []).join(""));
                this.wasmPayload = `\x73\x65\x6c\x66\x2e\x57\x41\x53\x4d\x20\x3d\x20\x27${λ81a4d285b052}\x27\x3b`;
              }
              return [ {
                body: this.wasmPayload,
                status: 200,
                statusText: "\x4f\x4b",
                headers: [ [ "\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65", "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x61\x76\x61\x73\x63\x72\x69\x70\x74" ] ]
              }, [] ];
            }
            let λ0fafb4ebeac6 = λe9b1fc6cd8f8.uh.fromRawHeaders(λ82183f6cab15.initialHeaders), λ78e19ac0877e = await λ81a4d285b052.fetchHandler.handleFetch({
              initialHeaders: λ0fafb4ebeac6,
              rawClientUrl: λ82183f6cab15.rawClientUrl ? new URL(λ82183f6cab15.rawClientUrl) : void 0,
              rawUrl: new URL(λ82183f6cab15.rawUrl),
              rawReferrer: λ82183f6cab15.rawReferrer,
              rawDestination: λ82183f6cab15.destination,
              method: λ82183f6cab15.method,
              mode: λ82183f6cab15.mode,
              referrer: λ82183f6cab15.referrer,
              body: λ82183f6cab15.body,
              cache: λ82183f6cab15.cache,
              clientId: λ82183f6cab15.clientId
            });
            return [ {
              body: λ78e19ac0877e.body,
              status: λ78e19ac0877e.status,
              statusText: λ78e19ac0877e.statusText,
              headers: λ78e19ac0877e.headers.toRawHeaders()
            }, λ78e19ac0877e.body instanceof ReadableStream || λ78e19ac0877e.body instanceof ArrayBuffer ? [ λ78e19ac0877e.body ] : [] ];
          } catch (λ5384af2ec11c) {
            let λ0fafb4ebeac6 = {
              setResponse: void 0,
              suppressError: !1
            };
            if (await λe9b1fc6cd8f8.Cx.dispatch(λ81a4d285b052.hooks.error.request, {
              rawrequest: λ82183f6cab15,
              error: λ5384af2ec11c
            }, λ0fafb4ebeac6), λ0fafb4ebeac6.suppressError || console.error("\x45\x72\x72\x6f\x72\x20\x69\x6e\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x72\x65\x71\x75\x65\x73\x74\x20\x68\x61\x6e\x64\x6c\x65\x72\x3a", λ5384af2ec11c), 
            λ0fafb4ebeac6.setResponse) return [ λ0fafb4ebeac6.setResponse, [] ];
            throw λ5384af2ec11c;
          }
        },
        initRemoteTransport: async λ5384af2ec11c => {
          let λ81a4d285b052 = new λ82183f6cab15.C({
            request: async ({remote: λ82183f6cab15, method: λ5384af2ec11c, body: λ81a4d285b052, headers: λ0fafb4ebeac6}) => {
              let λe9b1fc6cd8f8 = await this.transport.request(new URL(λ82183f6cab15), λ5384af2ec11c, λ81a4d285b052, λ0fafb4ebeac6, void 0);
              return [ λe9b1fc6cd8f8, [ λe9b1fc6cd8f8.body ] ];
            },
            sendSetCookie: async ({cookies: λ82183f6cab15, options: λ5384af2ec11c}) => {
              await this.loadSavedCookies(!0), λ5384af2ec11c?.clear && this.cookieJar.clear(), 
              this.applyCookieSyncEntries(λ82183f6cab15), await this.persistCookies(), await this.propagateCookieSync(λ82183f6cab15, λ5384af2ec11c);
            },
            connect: async ({url: λ82183f6cab15, protocols: λ5384af2ec11c, requestHeaders: λ81a4d285b052, port: λ0fafb4ebeac6}) => {
              let λe9b1fc6cd8f8, λ78e19ac0877e = new Promise(λ82183f6cab15 => λe9b1fc6cd8f8 = λ82183f6cab15), [λ6e8af78c4c9d, λ2acb15b628ee] = this.transport.connect(new URL(λ82183f6cab15), λ5384af2ec11c, λ81a4d285b052, (λ82183f6cab15, λ5384af2ec11c) => {
                λe9b1fc6cd8f8({
                  result: "\x73\x75\x63\x63\x65\x73\x73",
                  protocol: λ82183f6cab15,
                  extensions: λ5384af2ec11c
                });
              }, λ82183f6cab15 => {
                λ0fafb4ebeac6.postMessage({
                  type: "\x64\x61\x74\x61",
                  data: λ82183f6cab15
                }, λ82183f6cab15 instanceof ArrayBuffer ? [ λ82183f6cab15 ] : []);
              }, (λ82183f6cab15, λ5384af2ec11c) => {
                λ0fafb4ebeac6.postMessage({
                  type: "\x63\x6c\x6f\x73\x65",
                  code: λ82183f6cab15,
                  reason: λ5384af2ec11c
                });
              }, λ82183f6cab15 => {
                λe9b1fc6cd8f8({
                  result: "\x66\x61\x69\x6c\x75\x72\x65",
                  error: λ82183f6cab15
                });
              });
              return λ0fafb4ebeac6.onmessageerror = λ82183f6cab15 => {
                console.error("\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x6f\x72\x74\x20\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λ82183f6cab15);
              }, λ0fafb4ebeac6.onmessage = ({data: λ82183f6cab15}) => {
                "\x64\x61\x74\x61" === λ82183f6cab15.type ? λ6e8af78c4c9d(λ82183f6cab15.data) : "\x63\x6c\x6f\x73\x65" === λ82183f6cab15.type && λ2acb15b628ee(λ82183f6cab15.code, λ82183f6cab15.reason);
              }, [ await λ78e19ac0877e, [] ];
            }
          }, "\x74\x72\x61\x6e\x73\x70\x6f\x72\x74", (λ82183f6cab15, λ81a4d285b052) => λ5384af2ec11c.postMessage(λ82183f6cab15, λ81a4d285b052));
          λ5384af2ec11c.onmessageerror = λ82183f6cab15 => {
            console.error("\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x6f\x72\x74\x20\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λ82183f6cab15);
          }, λ5384af2ec11c.onmessage = λ82183f6cab15 => {
            λ81a4d285b052.recieve(λ82183f6cab15.data);
          }, λ81a4d285b052.call("\x72\x65\x61\x64\x79", void 0, []);
        }
      };
      constructor(λ5384af2ec11c) {
        this.init = λ5384af2ec11c, (0, λ6e8af78c4c9d.O)(), this.id = b(), this.config = λ9102c3edae2d(λ2acb15b628ee, λ5384af2ec11c.config || {}), 
        this.studyjetConfig = λ9102c3edae2d(λ586babe8f3da, λe9b1fc6cd8f8.sb), this.studyjetConfig = λ9102c3edae2d(this.studyjetConfig, λ5384af2ec11c.studyjetConfig || {}), 
        this.prefix = this.config.prefix + this.id + "\x2f", this.serviceWorkerController = λ5384af2ec11c.serviceworker, 
        this.ready = Promise.all([ new Promise(λ82183f6cab15 => {
          this.readyResolve = λ82183f6cab15;
        }), this.loadStudyJetWasm(), this.loadSavedCookies(!0) ]).then(() => void 0), this.rpc = new λ82183f6cab15.C(this.methods, "\x74\x61\x62\x63\x68\x61\x6e\x6e\x65\x6c\x2d" + this.id, (λ82183f6cab15, λ5384af2ec11c) => {
          if (!this.port) throw Error("\x50\x6f\x72\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64");
          this.port.postMessage(λ82183f6cab15, λ5384af2ec11c);
        }), this.transport = λ5384af2ec11c.transport, this.cookieSyncChannel.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", this.onCookieSyncMessage), 
        this.setupMessagePort(), navigator.serviceWorker.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", λ82183f6cab15 => {
          if (λ82183f6cab15.data?.$controller$setCookie && "\x6f\x62\x6a\x65\x63\x74" == typeof λ82183f6cab15.data.$controller$setCookie) {
            let λ5384af2ec11c = λ82183f6cab15.data.$controller$setCookie;
            if (λ5384af2ec11c.controllerId && λ5384af2ec11c.controllerId !== this.id) return;
            λ5384af2ec11c.options?.clear && this.cookieJar.clear(), this.applyCookieSyncEntries(λ5384af2ec11c.cookies), 
            "\x73\x74\x72\x69\x6e\x67" == typeof λ5384af2ec11c.id && this.serviceWorkerController.postMessage({
              $sw$setCookieDone: {
                id: λ5384af2ec11c.id
              }
            });
            return;
          }
          if (λ82183f6cab15.data.$controller$swrevive) {
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
        let λ82183f6cab15 = new MessageChannel;
        this.port = λ82183f6cab15.port1, this.port.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", this.onTabChannelMessage), 
        this.port.start(), this.serviceWorkerController.postMessage({
          $controller$init: {
            prefix: this.prefix,
            id: this.id
          }
        }, [ λ82183f6cab15.port2 ]);
      }
      applyCookieSyncEntries(λ82183f6cab15) {
        if (Array.isArray(λ82183f6cab15)) for (let λ5384af2ec11c of λ82183f6cab15) "\x73\x74\x72\x69\x6e\x67" == typeof λ5384af2ec11c?.url && "\x73\x74\x72\x69\x6e\x67" == typeof λ5384af2ec11c.cookie && this.cookieJar.setCookies(λ5384af2ec11c.cookie, new URL(λ5384af2ec11c.url));
      }
      async propagateCookieSync(λ82183f6cab15, λ5384af2ec11c = {}) {
        this.port && await this.rpc.call("\x73\x65\x6e\x64\x53\x65\x74\x43\x6f\x6f\x6b\x69\x65", {
          cookies: λ82183f6cab15,
          options: λ5384af2ec11c
        });
      }
      async loadSavedCookies(λ82183f6cab15 = !1) {
        if (λ82183f6cab15 || this.cookieSyncDirty) return this.cookieSyncPromise || (this.cookieSyncPromise = (async () => {
          let λ82183f6cab15 = await w();
          λ82183f6cab15 && λ82183f6cab15.updatedAt > this.cookieUpdatedAt && (this.cookieJar.load(λ82183f6cab15.cookies), 
          this.cookieUpdatedAt = λ82183f6cab15.updatedAt), this.cookieSyncDirty = !1;
        })().finally(() => {
          this.cookieSyncPromise = null;
        })), this.cookieSyncPromise;
      }
      async persistCookies() {
        let λ82183f6cab15 = await k(this.cookieJar.dump(), this.cookieUpdatedAt);
        λ82183f6cab15 <= this.cookieUpdatedAt || (this.cookieUpdatedAt = λ82183f6cab15, 
        this.cookieSyncDirty = !1, this.cookieSyncChannel.postMessage({
          updatedAt: λ82183f6cab15
        }));
      }
      setTransport(λ82183f6cab15) {
        for (let λ5384af2ec11c of (this.transport = λ82183f6cab15, this.frames)) λ5384af2ec11c.controller.transport = λ82183f6cab15, 
        λ5384af2ec11c.fetchHandler.client.transport = λ82183f6cab15;
      }
      createFrame(λ82183f6cab15, λ5384af2ec11c = {}) {
        if (!this.ready) throw Error("\x43\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x69\x73\x20\x6e\x6f\x74\x20\x72\x65\x61\x64\x79\x21\x20\x54\x72\x79\x20\x61\x77\x61\x69\x74\x69\x6e\x67\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2e\x77\x61\x69\x74\x28\x29");
        let λ81a4d285b052 = new v(this, λ82183f6cab15 ??= document.createElement("\x69\x66\x72\x61\x6d\x65"), λ5384af2ec11c);
        return this.frames.push(λ81a4d285b052), λ81a4d285b052;
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
            \u{67}\u{65}\u{74}\u{49}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{63}\u{72}\u{69}\u{70}\u{74}\u{73}: function e(λ82183f6cab15, λ5384af2ec11c, λ81a4d285b052, λ0fafb4ebeac6, λe9b1fc6cd8f8, λ78e19ac0877e) {
              return (λ6e8af78c4c9d, λ2acb15b628ee, λ586babe8f3da, λ6f6dff81af1c) => {
                var λe9bfbef9acd3;
                return [ λ6f6dff81af1c(λ82183f6cab15.studyjetPath), λ6f6dff81af1c(λ81a4d285b052.href + λ82183f6cab15.virtualWasmPath), λ6f6dff81af1c(λ82183f6cab15.\u{69}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{50}\u{61}\u{74}\u{68}), λ6f6dff81af1c("data:text/javascript;charset=utf-8;base64," + (λe9bfbef9acd3 = `\x0a\x09\x09\x09\x09\x09\x64\x6f\x63\x75\x6d\x65\x6e\x74\x2e\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63\x74\x6f\x72\x41\x6c\x6c\x28\x22\x73\x63\x72\x69\x70\x74\x5b\x73\x74\x75\x64\x79\x6a\x65\x74\x2d\x69\x6e\x6a\x65\x63\x74\x65\x64\x5d\x22\x29\x2e\x66\x6f\x72\x45\x61\x63\x68\x28\x73\x63\x72\x69\x70\x74\x20\x3d\x3e\x20\x73\x63\x72\x69\x70\x74\x2e\x72\x65\x6d\x6f\x76\x65\x28\x29\x29\x3b\x0a\x09\x09\x09\x09\x09\x24\x73\x74\x75\x64\x79\x6a\x65\x74\x43\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2e\x6c\x6f\x61\x64\x28\x7b\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x66\x69\x67\x3a\x20${JSON.stringify(λ82183f6cab15)}\x2c\x0a\x09\x09\x09\x09\x09\x09\x73\x6a\x63\x6f\x6e\x66\x69\x67\x3a\x20${JSON.stringify(λ5384af2ec11c)}\x2c\x0a\x09\x09\x09\x09\x09\x09\x70\x72\x65\x66\x69\x78\x3a\x20\x6e\x65\x77\x20\x55\x52\x4c\x28\x22${λ81a4d285b052.href}\x22\x29\x2c\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6f\x6b\x69\x65\x73\x3a\x20${JSON.stringify(λ0fafb4ebeac6.dump())}\x2c\x0a\x09\x09\x09\x09\x09\x09\x79\x69\x65\x6c\x64\x47\x65\x74\x49\x6e\x6a\x65\x63\x74\x53\x63\x72\x69\x70\x74\x73\x3a\x20${e.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x45\x6e\x63\x6f\x64\x65\x3a\x20${λe9b1fc6cd8f8.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x44\x65\x63\x6f\x64\x65\x3a\x20${λ78e19ac0877e.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x69\x6e\x69\x74\x48\x65\x61\x64\x65\x72\x73\x3a\x20${JSON.stringify(λ586babe8f3da.headers ?? [])}\x2c\x0a\x09\x09\x09\x09\x09\x09\x68\x69\x73\x74\x6f\x72\x79\x3a\x20${JSON.stringify(λ586babe8f3da.history ?? [])}\x2c\x0a\x09\x09\x09\x09\x09\x7d\x29\x0a\x09\x09\x09\x09`, 
                btoa((new TextEncoder).encode(λe9bfbef9acd3).reduce((λ82183f6cab15, λ5384af2ec11c) => (λ82183f6cab15.push(String.fromCharCode(λ5384af2ec11c)), 
                λ82183f6cab15), []).join("")))) ];
              };
            }(this.controller.config, this.controller.studyjetConfig, new URL(this.prefix, location.href), this.controller.cookieJar, this.controller.config.codec.encode, this.controller.config.codec.decode),
            \u{67}\u{65}\u{74}\u{57}\u{6f}\u{72}\u{6b}\u{65}\u{72}\u{49}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{63}\u{72}\u{69}\u{70}\u{74}\u{73}: (λ82183f6cab15, λ5384af2ec11c, λ81a4d285b052) => {
              var λ0fafb4ebeac6;
              let λe9b1fc6cd8f8 = "";
              return λe9b1fc6cd8f8 += λ81a4d285b052(this.controller.config.studyjetPath), λe9b1fc6cd8f8 += λ81a4d285b052(this.prefix + this.controller.config.virtualWasmPath), 
              λe9b1fc6cd8f8 += λ81a4d285b052("data:text/javascript;charset=utf-8;base64," + (λ0fafb4ebeac6 = `\x0a\x09\x09\x09\x09\x09\x28\x28\x29\x3d\x3e\x7b\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x7b\x20\x53\x74\x75\x64\x79\x4a\x65\x74\x43\x6c\x69\x65\x6e\x74\x2c\x20\x43\x6f\x6f\x6b\x69\x65\x4a\x61\x72\x2c\x20\x73\x65\x74\x57\x61\x73\x6d\x20\x7d\x20\x3d\x20\x24\x73\x74\x75\x64\x79\x6a\x65\x74\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x73\x65\x74\x57\x61\x73\x6d\x28\x55\x69\x6e\x74\x38\x41\x72\x72\x61\x79\x2e\x66\x72\x6f\x6d\x28\x61\x74\x6f\x62\x28\x73\x65\x6c\x66\x2e\x57\x41\x53\x4d\x29\x2c\x20\x28\x63\x29\x20\x3d\x3e\x20\x63\x2e\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74\x28\x30\x29\x29\x29\x3b\x0a\x09\x09\x09\x09\x09\x09\x64\x65\x6c\x65\x74\x65\x20\x73\x65\x6c\x66\x2e\x57\x41\x53\x4d\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x73\x6a\x63\x6f\x6e\x66\x69\x67\x20\x3d\x20${JSON.stringify(this.controller.studyjetConfig)}\x3b\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x70\x72\x65\x66\x69\x78\x20\x3d\x20\x6e\x65\x77\x20\x55\x52\x4c\x28\x22${this.prefix}\x22\x2c\x20\x6c\x6f\x63\x61\x74\x69\x6f\x6e\x2e\x68\x72\x65\x66\x29\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x3d\x20\x7b\x0a\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x66\x69\x67\x3a\x20\x73\x6a\x63\x6f\x6e\x66\x69\x67\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x70\x72\x65\x66\x69\x78\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x69\x6e\x74\x65\x72\x66\x61\x63\x65\x3a\x20\x7b\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x45\x6e\x63\x6f\x64\x65\x3a\x20${this.controller.config.codec.encode.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x44\x65\x63\x6f\x64\x65\x3a\x20${this.controller.config.codec.decode.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x7d\x2c\x0a\x09\x09\x09\x09\x09\x09\x7d\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x63\x6c\x69\x65\x6e\x74\x20\x3d\x20\x6e\x65\x77\x20\x53\x74\x75\x64\x79\x4a\x65\x74\x43\x6c\x69\x65\x6e\x74\x28\x67\x6c\x6f\x62\x61\x6c\x54\x68\x69\x73\x2c\x20\x7b\x0a\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x74\x65\x78\x74\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x3a\x20\x6e\x75\x6c\x6c\x2c\x0a\x09\x09\x09\x09\x09\x09\x7d\x29\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6c\x69\x65\x6e\x74\x2e\x68\x6f\x6f\x6b\x28\x29\x3b\x0a\x09\x09\x09\x09\x09\x7d\x29\x28\x29\x3b\x0a\x09\x09\x09\x09\x09`, 
              btoa((new TextEncoder).encode(λ0fafb4ebeac6).reduce((λ82183f6cab15, λ5384af2ec11c) => (λ82183f6cab15.push(String.fromCharCode(λ5384af2ec11c)), 
              λ82183f6cab15), []).join(""))));
            },
            codecEncode: this.controller.config.codec.encode,
            codecDecode: this.controller.config.codec.decode
          }
        };
      }
      plugins=[];
      constructor(λ82183f6cab15, λ81a4d285b052, λ0fafb4ebeac6 = {}) {
        for (const λ6e8af78c4c9d of (this.controller = λ82183f6cab15, this.element = λ81a4d285b052, 
        this.options = λ0fafb4ebeac6, this.id = b(), this.prefix = this.controller.prefix + this.id + "\x2f", 
        this.fetchHandler = new λe9b1fc6cd8f8.mK({
          crossOriginIsolated: self.crossOriginIsolated,
          context: this.context,
          transport: λ82183f6cab15.transport,
          async sendSetCookie(λ5384af2ec11c, λ81a4d285b052) {
            await λ82183f6cab15.persistCookies(), await λ82183f6cab15.propagateCookieSync(λ5384af2ec11c.map(({url: λ82183f6cab15, cookie: λ5384af2ec11c}) => ({
              url: λ82183f6cab15.href,
              cookie: λ5384af2ec11c
            })), λ81a4d285b052);
          },
          fetchBlobUrl: async λ82183f6cab15 => λ5384af2ec11c.Sr.fromNativeResponse(await fetch(λ82183f6cab15)),
          fetchDataUrl: async λ82183f6cab15 => λ5384af2ec11c.Sr.fromNativeResponse(await fetch(λ82183f6cab15))
        }), this.hooks = {
          fetch: this.fetchHandler.hooks.fetch,
          init: λe9b1fc6cd8f8.Cx.create(),
          error: λe9b1fc6cd8f8.Cx.create()
        }, λ81a4d285b052[λ78e19ac0877e.I] = this, this.plugins = λ0fafb4ebeac6.plugins ?? [], 
        this.plugins)) {
          for (const λ82183f6cab15 of λ6e8af78c4c9d.dependencies) if (!this.plugins.find(λ5384af2ec11c => λ5384af2ec11c.name === λ82183f6cab15)) throw Error(`\x44\x65\x70\x65\x6e\x64\x65\x6e\x63\x79\x20${λ82183f6cab15}\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x66\x6f\x72\x20\x70\x6c\x75\x67\x69\x6e\x20${λ6e8af78c4c9d.name}`);
          λ6e8af78c4c9d.install(this);
        }
      }
      getPlugin(λ82183f6cab15) {
        let λ5384af2ec11c = this.plugins.find(λ5384af2ec11c => λ5384af2ec11c.name === λ82183f6cab15);
        if (!λ5384af2ec11c) throw Error(`\x50\x6c\x75\x67\x69\x6e\x20${λ82183f6cab15}\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64`);
        return λ5384af2ec11c;
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
      go(λ82183f6cab15) {
        let λ5384af2ec11c = (0, λe9b1fc6cd8f8.Oy)(λ82183f6cab15, this.context, {
          origin: new URL(location.href),
          base: new URL(location.href)
        });
        this.element.src = λ5384af2ec11c;
      }
    }
  })(), $studyjetController = λ81a4d285b052;
})();
