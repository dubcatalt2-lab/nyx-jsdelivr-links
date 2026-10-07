var $studyjetController;

(() => {
  var λ050473e6ecdf = {
    286(λ050473e6ecdf, λ38713df3b8c4, λ43ace6b392a0) {
      λ43ace6b392a0.d(λ38713df3b8c4, {
        I: () => λ819ccbbf015d
      });
      let λ819ccbbf015d = Symbol.for("\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x66\x72\x61\x6d\x65\x20\x68\x61\x6e\x64\x6c\x65");
    },
    355(λ050473e6ecdf, λ38713df3b8c4, λ43ace6b392a0) {
      λ43ace6b392a0.d(λ38713df3b8c4, {
        O: () => s,
        x: () => λ819ccbbf015d
      });
      let λ819ccbbf015d = "\x30\x2e\x30\x2e\x31\x34";
      function s() {
        if ("\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" == typeof $studyjet) throw Error("\x40\x6d\x65\x72\x63\x75\x72\x79\x77\x6f\x72\x6b\x73\x68\x6f\x70\x2f\x73\x74\x75\x64\x79\x6a\x65\x74\x20\x69\x73\x20\x6e\x6f\x74\x20\x6c\x6f\x61\x64\x65\x64\x2e\x20\x4c\x6f\x61\x64\x20\x73\x74\x75\x64\x79\x6a\x65\x74\x20\x62\x65\x66\x6f\x72\x65\x20\x74\x68\x65\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2e");
        var λ050473e6ecdf = "\x32\x2e\x30\x2e\x36\x37\x2d\x61\x6c\x70\x68\x61\x2e\x32", λ38713df3b8c4 = $studyjet.versionInfo.version;
        if (λ050473e6ecdf !== λ38713df3b8c4) throw Error(`\x40\x6d\x65\x72\x63\x75\x72\x79\x77\x6f\x72\x6b\x73\x68\x6f\x70\x2f\x73\x74\x75\x64\x79\x6a\x65\x74\x20\x76\x65\x72\x73\x69\x6f\x6e\x20\x6d\x69\x73\x6d\x61\x74\x63\x68\x3a\x20\x74\x68\x69\x73\x20\x62\x75\x69\x6c\x64\x20\x65\x78\x70\x65\x63\x74\x73\x20${λ050473e6ecdf}\x2c\x20\x62\x75\x74\x20\x74\x68\x65\x20\x6c\x6f\x61\x64\x65\x64\x20\x72\x75\x6e\x74\x69\x6d\x65\x20\x69\x73\x20${λ38713df3b8c4}`);
      }
    },
    805(λ050473e6ecdf, λ38713df3b8c4, λ43ace6b392a0) {
      λ43ace6b392a0.d(λ38713df3b8c4, {
        C: () => o
      });
      class o {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λ050473e6ecdf, λ38713df3b8c4, λ43ace6b392a0) {
          this.methods = λ050473e6ecdf, this.id = λ38713df3b8c4, this.sendRaw = λ43ace6b392a0;
        }
        recieve(λ050473e6ecdf) {
          if (null == λ050473e6ecdf || "\x6f\x62\x6a\x65\x63\x74" != typeof λ050473e6ecdf) return;
          let λ38713df3b8c4 = λ050473e6ecdf[this.id];
          if (null == λ38713df3b8c4 || "\x6f\x62\x6a\x65\x63\x74" != typeof λ38713df3b8c4) return;
          let λ43ace6b392a0 = λ38713df3b8c4.$type;
          if ("\x72\x65\x73\x70\x6f\x6e\x73\x65" === λ43ace6b392a0) {
            let λ050473e6ecdf = λ38713df3b8c4.$token, λ43ace6b392a0 = λ38713df3b8c4.$data, λ819ccbbf015d = λ38713df3b8c4.$error, λ62f8cb2d6b60 = this.promiseCallbacks.get(λ050473e6ecdf);
            if (!λ62f8cb2d6b60) return;
            this.promiseCallbacks.delete(λ050473e6ecdf), void 0 !== λ819ccbbf015d ? λ62f8cb2d6b60.reject(Error(λ819ccbbf015d)) : λ62f8cb2d6b60.resolve(λ43ace6b392a0);
          } else if ("\x72\x65\x71\x75\x65\x73\x74" === λ43ace6b392a0) {
            let λ050473e6ecdf = λ38713df3b8c4.$method, λ43ace6b392a0 = λ38713df3b8c4.$args;
            this.methods[λ050473e6ecdf](λ43ace6b392a0).then(λ050473e6ecdf => {
              this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ38713df3b8c4.$token,
                  $data: λ050473e6ecdf?.[0]
                }
              }, λ050473e6ecdf?.[1]);
            }).catch(λ050473e6ecdf => {
              console.error(λ050473e6ecdf), this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ38713df3b8c4.$token,
                  $error: λ050473e6ecdf?.toString() || "\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x65\x72\x72\x6f\x72"
                }
              }, []);
            });
          }
        }
        call(λ050473e6ecdf, λ38713df3b8c4, λ43ace6b392a0 = []) {
          let λ819ccbbf015d = this.counter++;
          return new Promise((λ62f8cb2d6b60, λfc63a9c82f34) => {
            this.promiseCallbacks.set(λ819ccbbf015d, {
              resolve: λ62f8cb2d6b60,
              reject: λfc63a9c82f34
            }), this.sendRaw({
              [this.id]: {
                $type: "\x72\x65\x71\x75\x65\x73\x74",
                $method: λ050473e6ecdf,
                $args: λ38713df3b8c4,
                $token: λ819ccbbf015d
              }
            }, λ43ace6b392a0);
          });
        }
      }
    },
    986(λ050473e6ecdf) {
      let λ38713df3b8c4 = Object.getPrototypeOf({});
      function r() {
        return function(λ050473e6ecdf) {
          return "\x6f\x62\x6a\x65\x63\x74" == typeof λ050473e6ecdf && null !== λ050473e6ecdf && !(λ050473e6ecdf instanceof RegExp) && !(λ050473e6ecdf instanceof Date);
        };
      }
      function o(λ050473e6ecdf) {
        function o(λ050473e6ecdf) {
          return "\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72" !== λ050473e6ecdf && "\x70\x72\x6f\x74\x6f\x74\x79\x70\x65" !== λ050473e6ecdf && "\x5f\x5f\x70\x72\x6f\x74\x6f\x5f\x5f" !== λ050473e6ecdf;
        }
        let λ43ace6b392a0 = Object.prototype.propertyIsEnumerable, λ819ccbbf015d = λ050473e6ecdf?.symbols ? function(λ050473e6ecdf) {
          let λ38713df3b8c4 = Object.keys(λ050473e6ecdf), λ819ccbbf015d = Object.getOwnPropertySymbols(λ050473e6ecdf);
          for (let λ62f8cb2d6b60 = 0, λfc63a9c82f34 = λ819ccbbf015d.length; λ62f8cb2d6b60 < λfc63a9c82f34; ++λ62f8cb2d6b60) λ43ace6b392a0.call(λ050473e6ecdf, λ819ccbbf015d[λ62f8cb2d6b60]) && λ38713df3b8c4.push(λ819ccbbf015d[λ62f8cb2d6b60]);
          return λ38713df3b8c4;
        } : Object.keys, λ62f8cb2d6b60 = "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ050473e6ecdf?.cloneProtoObject ? λ050473e6ecdf.cloneProtoObject : void 0, λfc63a9c82f34 = "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ050473e6ecdf?.isMergeableObject ? λ050473e6ecdf.isMergeableObject : r(), λ989300c3095e = λ050473e6ecdf?.onlyDefinedProperties === !0, λad401072732c = λ050473e6ecdf && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ050473e6ecdf.mergeArray ? λ050473e6ecdf.mergeArray({
          clone: d,
          deepmerge: h,
          getKeys: λ819ccbbf015d,
          isMergeableObject: λfc63a9c82f34
        }) : function(λ050473e6ecdf, λ38713df3b8c4) {
          let λ43ace6b392a0 = λ050473e6ecdf.length, λ819ccbbf015d = λ38713df3b8c4.length, λ62f8cb2d6b60 = 0, λfc63a9c82f34 = Array(λ43ace6b392a0 + λ819ccbbf015d);
          for (;λ62f8cb2d6b60 < λ43ace6b392a0; ++λ62f8cb2d6b60) λfc63a9c82f34[λ62f8cb2d6b60] = d(λ050473e6ecdf[λ62f8cb2d6b60]);
          for (λ62f8cb2d6b60 = 0; λ62f8cb2d6b60 < λ819ccbbf015d; ++λ62f8cb2d6b60) λfc63a9c82f34[λ62f8cb2d6b60 + λ43ace6b392a0] = d(λ38713df3b8c4[λ62f8cb2d6b60]);
          return λfc63a9c82f34;
        };
        function d(λ050473e6ecdf) {
          return λfc63a9c82f34(λ050473e6ecdf) ? Array.isArray(λ050473e6ecdf) ? function(λ050473e6ecdf) {
            let λ38713df3b8c4 = 0, λ43ace6b392a0 = λ050473e6ecdf.length, λ819ccbbf015d = Array(λ43ace6b392a0);
            for (;λ38713df3b8c4 < λ43ace6b392a0; ++λ38713df3b8c4) λ819ccbbf015d[λ38713df3b8c4] = d(λ050473e6ecdf[λ38713df3b8c4]);
            return λ819ccbbf015d;
          }(λ050473e6ecdf) : function(λ050473e6ecdf) {
            let λ43ace6b392a0, λfc63a9c82f34, λ989300c3095e, λad401072732c = {};
            if (λ62f8cb2d6b60 && Object.getPrototypeOf(λ050473e6ecdf) !== λ38713df3b8c4) return λ62f8cb2d6b60(λ050473e6ecdf);
            let λ02da8133fade = λ819ccbbf015d(λ050473e6ecdf);
            for (λ43ace6b392a0 = 0, λfc63a9c82f34 = λ02da8133fade.length; λ43ace6b392a0 < λfc63a9c82f34; ++λ43ace6b392a0) o(λ989300c3095e = λ02da8133fade[λ43ace6b392a0]) && (λad401072732c[λ989300c3095e] = d(λ050473e6ecdf[λ989300c3095e]));
            return λad401072732c;
          }(λ050473e6ecdf) : λ050473e6ecdf;
        }
        function h(λ050473e6ecdf, λ43ace6b392a0) {
          if (λ989300c3095e && void 0 === λ43ace6b392a0) return d(λ050473e6ecdf);
          let λ02da8133fade = Array.isArray(λ43ace6b392a0), λd4822232ce98 = Array.isArray(λ050473e6ecdf);
          return "\x6f\x62\x6a\x65\x63\x74" != typeof λ43ace6b392a0 || null === λ43ace6b392a0 ? λ43ace6b392a0 : λfc63a9c82f34(λ050473e6ecdf) ? λ02da8133fade && λd4822232ce98 ? λad401072732c(λ050473e6ecdf, λ43ace6b392a0) : λ02da8133fade !== λd4822232ce98 ? d(λ43ace6b392a0) : function(λ050473e6ecdf, λ43ace6b392a0) {
            let λad401072732c, λ02da8133fade, λd4822232ce98, λ7d39c15940ff = {}, λa3cfdbe3a9e1 = λ819ccbbf015d(λ050473e6ecdf), λcbb94c161f5c = λ819ccbbf015d(λ43ace6b392a0);
            for (λad401072732c = 0, λ02da8133fade = λa3cfdbe3a9e1.length; λad401072732c < λ02da8133fade; ++λad401072732c) o(λd4822232ce98 = λa3cfdbe3a9e1[λad401072732c]) && -1 === λcbb94c161f5c.indexOf(λd4822232ce98) && (λ7d39c15940ff[λd4822232ce98] = d(λ050473e6ecdf[λd4822232ce98]));
            for (λad401072732c = 0, λ02da8133fade = λcbb94c161f5c.length; λad401072732c < λ02da8133fade; ++λad401072732c) if (o(λd4822232ce98 = λcbb94c161f5c[λad401072732c])) if (λd4822232ce98 in λ050473e6ecdf) -1 !== λa3cfdbe3a9e1.indexOf(λd4822232ce98) && (λ62f8cb2d6b60 && λfc63a9c82f34(λ43ace6b392a0[λd4822232ce98]) && Object.getPrototypeOf(λ43ace6b392a0[λd4822232ce98]) !== λ38713df3b8c4 ? λ7d39c15940ff[λd4822232ce98] = λ62f8cb2d6b60(λ43ace6b392a0[λd4822232ce98]) : λ7d39c15940ff[λd4822232ce98] = h(λ050473e6ecdf[λd4822232ce98], λ43ace6b392a0[λd4822232ce98])); else {
              if (λ989300c3095e && void 0 === λ43ace6b392a0[λd4822232ce98]) continue;
              λ7d39c15940ff[λd4822232ce98] = d(λ43ace6b392a0[λd4822232ce98]);
            }
            return λ7d39c15940ff;
          }(λ050473e6ecdf, λ43ace6b392a0) : d(λ43ace6b392a0);
        }
        return λ050473e6ecdf?.all ? function() {
          let λ050473e6ecdf;
          switch (arguments.length) {
           case 0:
            return {};

           case 1:
            return d(arguments[0]);

           case 2:
            return h(arguments[0], arguments[1]);
          }
          for (let λ38713df3b8c4 = 0, λ43ace6b392a0 = arguments.length; λ38713df3b8c4 < λ43ace6b392a0; ++λ38713df3b8c4) λ050473e6ecdf = h(λ050473e6ecdf, arguments[λ38713df3b8c4]);
          return λ050473e6ecdf;
        } : h;
      }
      λ050473e6ecdf.exports = o, λ050473e6ecdf.exports.default = o, λ050473e6ecdf.exports.deepmerge = o, 
      Object.defineProperty(λ050473e6ecdf.exports, "\x69\x73\x4d\x65\x72\x67\x65\x61\x62\x6c\x65\x4f\x62\x6a\x65\x63\x74", {
        get: r
      });
    },
    235(λ050473e6ecdf, λ38713df3b8c4, λ43ace6b392a0) {
      λ43ace6b392a0.d(λ38713df3b8c4, {
        Sr: () => s
      }), WebSocket.CLOSED, WebSocket.CONNECTING, WebSocket.OPEN, EventTarget;
      let λ819ccbbf015d = [ 101, 204, 205, 304 ];
      class s extends Response {
        url;
        rawHeaders;
        redirected=!1;
        static fromTransferrableResponse(λ050473e6ecdf, λ38713df3b8c4) {
          let λ43ace6b392a0 = new s(λ819ccbbf015d.includes(λ050473e6ecdf.status) ? void 0 : λ050473e6ecdf.body, {
            headers: new Headers(λ050473e6ecdf.headers),
            status: λ050473e6ecdf.status,
            statusText: λ050473e6ecdf.statusText
          });
          return λ43ace6b392a0.url = λ38713df3b8c4, λ43ace6b392a0.redirected = λ050473e6ecdf.status >= 300 && λ050473e6ecdf.status < 400 && void 0 !== λ050473e6ecdf.headers.location, 
          λ43ace6b392a0.rawHeaders = λ050473e6ecdf.headers, λ43ace6b392a0;
        }
        static fromNativeResponse(λ050473e6ecdf) {
          let λ38713df3b8c4 = new s(λ819ccbbf015d.includes(λ050473e6ecdf.status) ? void 0 : λ050473e6ecdf.body, {
            headers: λ050473e6ecdf.headers,
            status: λ050473e6ecdf.status,
            statusText: λ050473e6ecdf.statusText
          });
          return λ38713df3b8c4.url = λ050473e6ecdf.url, λ38713df3b8c4.rawHeaders = [ ...λ050473e6ecdf.headers ], 
          λ38713df3b8c4.redirected = λ050473e6ecdf.redirected, λ38713df3b8c4;
        }
      }
    },
    423(λ050473e6ecdf, λ38713df3b8c4, λ43ace6b392a0) {
      λ43ace6b392a0.d(λ38713df3b8c4, {
        Cx: () => λ88d1cff0b564,
        Oy: () => λ561ea429c282,
        cP: () => λ62f8cb2d6b60,
        ht: () => λa244903c2cdd,
        k_: () => λ989300c3095e,
        mK: () => λ7d39c15940ff,
        sb: () => λ3f2f54cd650d,
        uh: () => λcbb94c161f5c
      });
      let {BareResponse: λ819ccbbf015d, CookieJar: λ62f8cb2d6b60, IncrementalHtmlRewriter: λfc63a9c82f34, Plugin: λ989300c3095e, STUDYJETCLIENT: λad401072732c, STUDYJETCLIENTNAME: λ02da8133fade, StudyJetClient: λd4822232ce98, StudyJetFetchHandler: λ7d39c15940ff, StudyJetFetchTrackedClient: λa3cfdbe3a9e1, StudyJetHeaders: λcbb94c161f5c, Tap: λ88d1cff0b564, \u{63}\u{72}\u{65}\u{61}\u{74}\u{65}\u{4c}\u{6f}\u{63}\u{61}\u{74}\u{69}\u{6f}\u{6e}\u{50}\u{72}\u{6f}\u{78}\u{79}: λ94795f58b027, defaultConfig: λ3f2f54cd650d, defaultConfigDev: λ6fa4f714555e, flagEnabled: λ1823b1e6037c, getOwnPropertyDescriptorHandler: λ35bde77c0b7f, getRewriter: λce1a8221528c, getScriptBlockTypeString: λ18b3dfe73dc4, htmlRules: λ8ce8e3020e82, isArchiveMimeType: λ97884723ace5, isAudioOrVideoMimeType: λ476f163bd020, isFontMimeType: λ53e0dbae5079, isHtmlMimeType: λ977760d04fb8, isImageMimeType: λbfa068d7af2c, isInlineDisplayableMimeType: λ6d7d44979789, isJavascriptMimeType: λ244405048a3d, isJavascriptMimeTypeEssenceMatch: λfad0d831faad, isModuleScriptType: λ0411557fdabf, isScriptType: λc2588b63bb97, isScriptableMimeType: λ139d667e4cdf, isXmlMimeType: λ8777e7deb525, isZipBasedMimeType: λc257a09d204d, isdedicated: λc79c44b597ca, isshared: λe5f804b9d6f9, issw: λe7ebe420a075, iswindow: λ98bc46a0c5ad, isworker: λ7b9959ff01d6, parseMimeType: λ52b7be9c97d2, rewriteBlob: λ8e0991a37bc6, rewriteCss: λ7a94651f9107, rewriteHtml: λcdaeb7c2657f, rewriteJs: λd126638a2659, rewriteJsInner: λ570c54b81194, rewriteSrcset: λ6d69f91fc4e0, rewriteUrl: λ561ea429c282, rewriteWorkers: λ681e1f5e4629, setWasm: λa244903c2cdd, unrewriteBlob: λab6f858aa23f, unrewriteCss: λd125b39cc42a, unrewriteHtml: λef2fb3e3d44a, unrewriteUrl: λ96ccc5adfe04, versionInfo: λ703ff1fc2db6} = globalThis.$studyjet;
    }
  }, λ38713df3b8c4 = {};
  function r(λ43ace6b392a0) {
    var λ819ccbbf015d = λ38713df3b8c4[λ43ace6b392a0];
    if (void 0 !== λ819ccbbf015d) return λ819ccbbf015d.exports;
    var λ62f8cb2d6b60 = λ38713df3b8c4[λ43ace6b392a0] = {
      exports: {}
    };
    return λ050473e6ecdf[λ43ace6b392a0](λ62f8cb2d6b60, λ62f8cb2d6b60.exports, r), λ62f8cb2d6b60.exports;
  }
  r.n = λ050473e6ecdf => {
    var λ38713df3b8c4 = λ050473e6ecdf && λ050473e6ecdf.__esModule ? () => λ050473e6ecdf.default : () => λ050473e6ecdf;
    return r.d(λ38713df3b8c4, {
      a: λ38713df3b8c4
    }), λ38713df3b8c4;
  }, r.d = (λ050473e6ecdf, λ38713df3b8c4) => {
    for (var λ43ace6b392a0 in λ38713df3b8c4) r.o(λ38713df3b8c4, λ43ace6b392a0) && !r.o(λ050473e6ecdf, λ43ace6b392a0) && Object.defineProperty(λ050473e6ecdf, λ43ace6b392a0, {
      enumerable: !0,
      get: λ38713df3b8c4[λ43ace6b392a0]
    });
  }, r.o = (λ050473e6ecdf, λ38713df3b8c4) => Object.prototype.hasOwnProperty.call(λ050473e6ecdf, λ38713df3b8c4), 
  r.r = λ050473e6ecdf => {
    "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λ050473e6ecdf, Symbol.toStringTag, {
      value: "\x4d\x6f\x64\x75\x6c\x65"
    }), Object.defineProperty(λ050473e6ecdf, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
      value: !0
    });
  };
  var λ43ace6b392a0 = {};
  (() => {
    r.r(λ43ace6b392a0), r.d(λ43ace6b392a0, {
      Controller: () => S,
      Frame: () => v,
      ManagedPlugin: () => d,
      VERSION: () => λ989300c3095e.x,
      assertRuntimeStudyJetVersion: () => λ989300c3095e.O,
      config: () => λad401072732c
    });
    var λ050473e6ecdf = r(805), λ38713df3b8c4 = r(235), λ819ccbbf015d = r(986), λ62f8cb2d6b60 = r(423), λfc63a9c82f34 = r(286), λ989300c3095e = r(355);
    let λad401072732c = {
      prefix: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x7e\x2f\x73\x74\x75\x64\x79\x2f",
      studyjetPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x73\x74\x75\x64\x79\x6a\x65\x74\x2f\x40\x72\x36\x39\x63\x31\x38\x66\x39\x62\x64\x34\x65\x64\x31\x37\x35\x63\x39\x65\x61\x35\x30\x35\x62\x38\x21\x2e\x6a\x73",
      \u{69}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{50}\u{61}\u{74}\u{68}: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2f\x40\x72\x39\x65\x38\x35\x35\x61\x63\x38\x32\x65\x64\x63\x34\x62\x35\x31\x65\x31\x33\x34\x30\x35\x36\x34\x21\x2e\x6a\x73",
      wasmPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x73\x74\x75\x64\x79\x6a\x65\x74\x2f\x40\x72\x35\x35\x32\x38\x36\x63\x66\x65\x30\x39\x64\x37\x34\x31\x30\x32\x33\x63\x63\x33\x65\x31\x64\x36\x21\x2e\x77\x61\x73\x6d",
      virtualWasmPath: "\x73\x74\x75\x64\x79\x6a\x65\x74\x2e\x77\x61\x73\x6d\x2e\x6a\x73",
      codec: {
        encode: λ050473e6ecdf => λ050473e6ecdf ? encodeURIComponent(λ050473e6ecdf) : λ050473e6ecdf,
        decode: λ050473e6ecdf => λ050473e6ecdf ? decodeURIComponent(λ050473e6ecdf) : λ050473e6ecdf
      }
    }, λ02da8133fade = {
      flags: {
        ...λ62f8cb2d6b60.sb.flags,
        allowFailedIntercepts: !0
      },
      maskedfiles: [ "\x69\x6e\x6a\x65\x63\x74\x2e\x6a\x73", "\x73\x74\x75\x64\x79\x6a\x65\x74\x2e\x77\x61\x73\x6d\x2e\x6a\x73" ]
    };
    class d extends λ62f8cb2d6b60.k_ {
      frame=null;
      dependencies=[];
      constructor(λ050473e6ecdf, λ38713df3b8c4) {
        super(λ050473e6ecdf), this.dependencies = λ38713df3b8c4;
      }
      install(λ050473e6ecdf) {
        this.frame = λ050473e6ecdf;
      }
    }
    let λd4822232ce98 = "\x73\x74\x61\x74\x65", λ7d39c15940ff = "\x63\x6f\x6f\x6b\x69\x65\x73", λa3cfdbe3a9e1 = null;
    function u(λ050473e6ecdf) {
      return "\x6f\x62\x6a\x65\x63\x74" == typeof λ050473e6ecdf && null !== λ050473e6ecdf && "\x6e\x75\x6d\x62\x65\x72" == typeof λ050473e6ecdf.updatedAt && Number.isFinite(λ050473e6ecdf.updatedAt) && "\x73\x74\x72\x69\x6e\x67" == typeof λ050473e6ecdf.cookies ? λ050473e6ecdf : null;
    }
    function y(λ050473e6ecdf) {
      return new Promise((λ38713df3b8c4, λ43ace6b392a0) => {
        λ050473e6ecdf.onsuccess = () => λ38713df3b8c4(λ050473e6ecdf.result), λ050473e6ecdf.onerror = () => λ43ace6b392a0(λ050473e6ecdf.error ?? Error("\x49\x6e\x64\x65\x78\x65\x64\x44\x42\x20\x72\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64"));
      });
    }
    function m(λ050473e6ecdf) {
      return new Promise((λ38713df3b8c4, λ43ace6b392a0) => {
        λ050473e6ecdf.oncomplete = () => λ38713df3b8c4(), λ050473e6ecdf.onabort = () => λ43ace6b392a0(λ050473e6ecdf.error ?? Error("\x49\x6e\x64\x65\x78\x65\x64\x44\x42\x20\x74\x72\x61\x6e\x73\x61\x63\x74\x69\x6f\x6e\x20\x61\x62\x6f\x72\x74\x65\x64")), 
        λ050473e6ecdf.onerror = () => λ43ace6b392a0(λ050473e6ecdf.error ?? Error("\x49\x6e\x64\x65\x78\x65\x64\x44\x42\x20\x74\x72\x61\x6e\x73\x61\x63\x74\x69\x6f\x6e\x20\x66\x61\x69\x6c\x65\x64"));
      });
    }
    function g() {
      return λa3cfdbe3a9e1 || (λa3cfdbe3a9e1 = new Promise((λ050473e6ecdf, λ38713df3b8c4) => {
        let λ43ace6b392a0 = indexedDB.open("\x40\x64\x39\x34\x31\x62\x63\x36\x35\x61\x66\x33", 1);
        λ43ace6b392a0.onupgradeneeded = () => {
          let λ050473e6ecdf = λ43ace6b392a0.result;
          λ050473e6ecdf.objectStoreNames.contains(λd4822232ce98) || λ050473e6ecdf.createObjectStore(λd4822232ce98);
        }, λ43ace6b392a0.onsuccess = () => λ050473e6ecdf(λ43ace6b392a0.result), λ43ace6b392a0.onerror = () => λ38713df3b8c4(λ43ace6b392a0.error ?? Error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x6f\x70\x65\x6e\x20\x63\x6f\x6f\x6b\x69\x65\x20\x64\x61\x74\x61\x62\x61\x73\x65"));
      }));
    }
    async function w() {
      try {
        let λ050473e6ecdf = (await g()).transaction(λd4822232ce98, "\x72\x65\x61\x64\x6f\x6e\x6c\x79"), λ38713df3b8c4 = λ050473e6ecdf.objectStore(λd4822232ce98), λ43ace6b392a0 = await y(λ38713df3b8c4.get(λ7d39c15940ff));
        return await m(λ050473e6ecdf), u(λ43ace6b392a0);
      } catch (λ050473e6ecdf) {
        return console.error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x72\x65\x61\x64\x20\x70\x65\x72\x73\x69\x73\x74\x65\x64\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x63\x6f\x6f\x6b\x69\x65\x73\x3a", λ050473e6ecdf), 
        null;
      }
    }
    async function k(λ050473e6ecdf, λ38713df3b8c4) {
      try {
        let λ43ace6b392a0 = (await g()).transaction(λd4822232ce98, "\x72\x65\x61\x64\x77\x72\x69\x74\x65"), λ819ccbbf015d = λ43ace6b392a0.objectStore(λd4822232ce98), λ62f8cb2d6b60 = u(await y(λ819ccbbf015d.get(λ7d39c15940ff))), λfc63a9c82f34 = Math.max(Date.now(), λ38713df3b8c4 + 1, (λ62f8cb2d6b60?.updatedAt ?? 0) + 1);
        return λ819ccbbf015d.put({
          updatedAt: λfc63a9c82f34,
          cookies: λ050473e6ecdf
        }, λ7d39c15940ff), await m(λ43ace6b392a0), λfc63a9c82f34;
      } catch (λ050473e6ecdf) {
        return console.error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x70\x65\x72\x73\x69\x73\x74\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x63\x6f\x6f\x6b\x69\x65\x73\x3a", λ050473e6ecdf), λ38713df3b8c4;
      }
    }
    function b() {
      return Math.random().toString(36).substring(2, 10);
    }
    let λcbb94c161f5c = (0, λ819ccbbf015d.deepmerge)();
    class S {
      init;
      id;
      config;
      studyjetConfig;
      prefix;
      cookieJar=new λ62f8cb2d6b60.cP;
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
      onTabChannelMessage=λ050473e6ecdf => {
        this.rpc.recieve(λ050473e6ecdf.data);
      };
      onCookieSyncMessage=λ050473e6ecdf => {
        let λ38713df3b8c4 = "\x6f\x62\x6a\x65\x63\x74" == typeof λ050473e6ecdf.data && null !== λ050473e6ecdf.data ? λ050473e6ecdf.data.updatedAt : void 0;
        "\x6e\x75\x6d\x62\x65\x72" != typeof λ38713df3b8c4 || λ38713df3b8c4 <= this.cookieUpdatedAt || (this.cookieSyncDirty = !0, 
        this.loadSavedCookies());
      };
      async loadStudyJetWasm() {
        if (this.wasmAlreadyFetched) return;
        let λ050473e6ecdf = await fetch(this.config.wasmPath);
        (0, λ62f8cb2d6b60.ht)(await λ050473e6ecdf.arrayBuffer()), this.wasmAlreadyFetched = !0;
      }
      methods={
        ready: async () => {
          this.readyResolve(), setTimeout(() => {
            this.guardServiceWorkerRevive = !1;
          }, 5e3);
        },
        request: async λ050473e6ecdf => {
          let λ38713df3b8c4 = new URL(λ050473e6ecdf.rawUrl).pathname, λ43ace6b392a0 = this.frames.find(λ050473e6ecdf => λ38713df3b8c4.startsWith(λ050473e6ecdf.prefix));
          if (!λ43ace6b392a0) throw Error("\x4e\x6f\x20\x66\x72\x61\x6d\x65\x20\x66\x6f\x75\x6e\x64\x20\x66\x6f\x72\x20\x72\x65\x71\x75\x65\x73\x74");
          try {
            if (await this.loadSavedCookies(), λ38713df3b8c4 === λ43ace6b392a0.prefix + this.config.virtualWasmPath) {
              if (!this.wasmPayload) {
                let λ050473e6ecdf = await fetch(this.config.wasmPath), λ38713df3b8c4 = await λ050473e6ecdf.arrayBuffer(), λ43ace6b392a0 = btoa(new Uint8Array(λ38713df3b8c4).reduce((λ050473e6ecdf, λ38713df3b8c4) => (λ050473e6ecdf.push(String.fromCharCode(λ38713df3b8c4)), 
                λ050473e6ecdf), []).join(""));
                this.wasmPayload = `\x73\x65\x6c\x66\x2e\x57\x41\x53\x4d\x20\x3d\x20\x27${λ43ace6b392a0}\x27\x3b`;
              }
              return [ {
                body: this.wasmPayload,
                status: 200,
                statusText: "\x4f\x4b",
                headers: [ [ "\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65", "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x61\x76\x61\x73\x63\x72\x69\x70\x74" ] ]
              }, [] ];
            }
            let λ819ccbbf015d = λ62f8cb2d6b60.uh.fromRawHeaders(λ050473e6ecdf.initialHeaders), λfc63a9c82f34 = await λ43ace6b392a0.fetchHandler.handleFetch({
              initialHeaders: λ819ccbbf015d,
              rawClientUrl: λ050473e6ecdf.rawClientUrl ? new URL(λ050473e6ecdf.rawClientUrl) : void 0,
              rawUrl: new URL(λ050473e6ecdf.rawUrl),
              rawReferrer: λ050473e6ecdf.rawReferrer,
              rawDestination: λ050473e6ecdf.destination,
              method: λ050473e6ecdf.method,
              mode: λ050473e6ecdf.mode,
              referrer: λ050473e6ecdf.referrer,
              body: λ050473e6ecdf.body,
              cache: λ050473e6ecdf.cache,
              clientId: λ050473e6ecdf.clientId
            });
            return [ {
              body: λfc63a9c82f34.body,
              status: λfc63a9c82f34.status,
              statusText: λfc63a9c82f34.statusText,
              headers: λfc63a9c82f34.headers.toRawHeaders()
            }, λfc63a9c82f34.body instanceof ReadableStream || λfc63a9c82f34.body instanceof ArrayBuffer ? [ λfc63a9c82f34.body ] : [] ];
          } catch (λ38713df3b8c4) {
            let λ819ccbbf015d = {
              setResponse: void 0,
              suppressError: !1
            };
            if (await λ62f8cb2d6b60.Cx.dispatch(λ43ace6b392a0.hooks.error.request, {
              rawrequest: λ050473e6ecdf,
              error: λ38713df3b8c4
            }, λ819ccbbf015d), λ819ccbbf015d.suppressError || console.error("\x45\x72\x72\x6f\x72\x20\x69\x6e\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x72\x65\x71\x75\x65\x73\x74\x20\x68\x61\x6e\x64\x6c\x65\x72\x3a", λ38713df3b8c4), 
            λ819ccbbf015d.setResponse) return [ λ819ccbbf015d.setResponse, [] ];
            throw λ38713df3b8c4;
          }
        },
        initRemoteTransport: async λ38713df3b8c4 => {
          let λ43ace6b392a0 = new λ050473e6ecdf.C({
            request: async ({remote: λ050473e6ecdf, method: λ38713df3b8c4, body: λ43ace6b392a0, headers: λ819ccbbf015d}) => {
              let λ62f8cb2d6b60 = await this.transport.request(new URL(λ050473e6ecdf), λ38713df3b8c4, λ43ace6b392a0, λ819ccbbf015d, void 0);
              return [ λ62f8cb2d6b60, [ λ62f8cb2d6b60.body ] ];
            },
            sendSetCookie: async ({cookies: λ050473e6ecdf, options: λ38713df3b8c4}) => {
              await this.loadSavedCookies(!0), λ38713df3b8c4?.clear && this.cookieJar.clear(), 
              this.applyCookieSyncEntries(λ050473e6ecdf), await this.persistCookies(), await this.propagateCookieSync(λ050473e6ecdf, λ38713df3b8c4);
            },
            connect: async ({url: λ050473e6ecdf, protocols: λ38713df3b8c4, requestHeaders: λ43ace6b392a0, port: λ819ccbbf015d}) => {
              let λ62f8cb2d6b60, λfc63a9c82f34 = new Promise(λ050473e6ecdf => λ62f8cb2d6b60 = λ050473e6ecdf), [λ989300c3095e, λad401072732c] = this.transport.connect(new URL(λ050473e6ecdf), λ38713df3b8c4, λ43ace6b392a0, (λ050473e6ecdf, λ38713df3b8c4) => {
                λ62f8cb2d6b60({
                  result: "\x73\x75\x63\x63\x65\x73\x73",
                  protocol: λ050473e6ecdf,
                  extensions: λ38713df3b8c4
                });
              }, λ050473e6ecdf => {
                λ819ccbbf015d.postMessage({
                  type: "\x64\x61\x74\x61",
                  data: λ050473e6ecdf
                }, λ050473e6ecdf instanceof ArrayBuffer ? [ λ050473e6ecdf ] : []);
              }, (λ050473e6ecdf, λ38713df3b8c4) => {
                λ819ccbbf015d.postMessage({
                  type: "\x63\x6c\x6f\x73\x65",
                  code: λ050473e6ecdf,
                  reason: λ38713df3b8c4
                });
              }, λ050473e6ecdf => {
                λ62f8cb2d6b60({
                  result: "\x66\x61\x69\x6c\x75\x72\x65",
                  error: λ050473e6ecdf
                });
              });
              return λ819ccbbf015d.onmessageerror = λ050473e6ecdf => {
                console.error("\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x6f\x72\x74\x20\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λ050473e6ecdf);
              }, λ819ccbbf015d.onmessage = ({data: λ050473e6ecdf}) => {
                "\x64\x61\x74\x61" === λ050473e6ecdf.type ? λ989300c3095e(λ050473e6ecdf.data) : "\x63\x6c\x6f\x73\x65" === λ050473e6ecdf.type && λad401072732c(λ050473e6ecdf.code, λ050473e6ecdf.reason);
              }, [ await λfc63a9c82f34, [] ];
            }
          }, "\x74\x72\x61\x6e\x73\x70\x6f\x72\x74", (λ050473e6ecdf, λ43ace6b392a0) => λ38713df3b8c4.postMessage(λ050473e6ecdf, λ43ace6b392a0));
          λ38713df3b8c4.onmessageerror = λ050473e6ecdf => {
            console.error("\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x6f\x72\x74\x20\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λ050473e6ecdf);
          }, λ38713df3b8c4.onmessage = λ050473e6ecdf => {
            λ43ace6b392a0.recieve(λ050473e6ecdf.data);
          }, λ43ace6b392a0.call("\x72\x65\x61\x64\x79", void 0, []);
        }
      };
      constructor(λ38713df3b8c4) {
        this.init = λ38713df3b8c4, (0, λ989300c3095e.O)(), this.id = b(), this.config = λcbb94c161f5c(λad401072732c, λ38713df3b8c4.config || {}), 
        this.studyjetConfig = λcbb94c161f5c(λ02da8133fade, λ62f8cb2d6b60.sb), this.studyjetConfig = λcbb94c161f5c(this.studyjetConfig, λ38713df3b8c4.studyjetConfig || {}), 
        this.prefix = this.config.prefix + this.id + "\x2f", this.serviceWorkerController = λ38713df3b8c4.serviceworker, 
        this.ready = Promise.all([ new Promise(λ050473e6ecdf => {
          this.readyResolve = λ050473e6ecdf;
        }), this.loadStudyJetWasm(), this.loadSavedCookies(!0) ]).then(() => void 0), this.rpc = new λ050473e6ecdf.C(this.methods, "\x74\x61\x62\x63\x68\x61\x6e\x6e\x65\x6c\x2d" + this.id, (λ050473e6ecdf, λ38713df3b8c4) => {
          if (!this.port) throw Error("\x50\x6f\x72\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64");
          this.port.postMessage(λ050473e6ecdf, λ38713df3b8c4);
        }), this.transport = λ38713df3b8c4.transport, this.cookieSyncChannel.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", this.onCookieSyncMessage), 
        this.setupMessagePort(), navigator.serviceWorker.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", λ050473e6ecdf => {
          if (λ050473e6ecdf.data?.$controller$setCookie && "\x6f\x62\x6a\x65\x63\x74" == typeof λ050473e6ecdf.data.$controller$setCookie) {
            let λ38713df3b8c4 = λ050473e6ecdf.data.$controller$setCookie;
            if (λ38713df3b8c4.controllerId && λ38713df3b8c4.controllerId !== this.id) return;
            λ38713df3b8c4.options?.clear && this.cookieJar.clear(), this.applyCookieSyncEntries(λ38713df3b8c4.cookies), 
            "\x73\x74\x72\x69\x6e\x67" == typeof λ38713df3b8c4.id && this.serviceWorkerController.postMessage({
              $sw$setCookieDone: {
                id: λ38713df3b8c4.id
              }
            });
            return;
          }
          if (λ050473e6ecdf.data.$controller$swrevive) {
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
        let λ050473e6ecdf = new MessageChannel;
        this.port = λ050473e6ecdf.port1, this.port.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", this.onTabChannelMessage), 
        this.port.start(), this.serviceWorkerController.postMessage({
          $controller$init: {
            prefix: this.prefix,
            id: this.id
          }
        }, [ λ050473e6ecdf.port2 ]);
      }
      applyCookieSyncEntries(λ050473e6ecdf) {
        if (Array.isArray(λ050473e6ecdf)) for (let λ38713df3b8c4 of λ050473e6ecdf) "\x73\x74\x72\x69\x6e\x67" == typeof λ38713df3b8c4?.url && "\x73\x74\x72\x69\x6e\x67" == typeof λ38713df3b8c4.cookie && this.cookieJar.setCookies(λ38713df3b8c4.cookie, new URL(λ38713df3b8c4.url));
      }
      async propagateCookieSync(λ050473e6ecdf, λ38713df3b8c4 = {}) {
        this.port && await this.rpc.call("\x73\x65\x6e\x64\x53\x65\x74\x43\x6f\x6f\x6b\x69\x65", {
          cookies: λ050473e6ecdf,
          options: λ38713df3b8c4
        });
      }
      async loadSavedCookies(λ050473e6ecdf = !1) {
        if (λ050473e6ecdf || this.cookieSyncDirty) return this.cookieSyncPromise || (this.cookieSyncPromise = (async () => {
          let λ050473e6ecdf = await w();
          λ050473e6ecdf && λ050473e6ecdf.updatedAt > this.cookieUpdatedAt && (this.cookieJar.load(λ050473e6ecdf.cookies), 
          this.cookieUpdatedAt = λ050473e6ecdf.updatedAt), this.cookieSyncDirty = !1;
        })().finally(() => {
          this.cookieSyncPromise = null;
        })), this.cookieSyncPromise;
      }
      async persistCookies() {
        let λ050473e6ecdf = await k(this.cookieJar.dump(), this.cookieUpdatedAt);
        λ050473e6ecdf <= this.cookieUpdatedAt || (this.cookieUpdatedAt = λ050473e6ecdf, 
        this.cookieSyncDirty = !1, this.cookieSyncChannel.postMessage({
          updatedAt: λ050473e6ecdf
        }));
      }
      setTransport(λ050473e6ecdf) {
        for (let λ38713df3b8c4 of (this.transport = λ050473e6ecdf, this.frames)) λ38713df3b8c4.controller.transport = λ050473e6ecdf, 
        λ38713df3b8c4.fetchHandler.client.transport = λ050473e6ecdf;
      }
      createFrame(λ050473e6ecdf, λ38713df3b8c4 = {}) {
        if (!this.ready) throw Error("\x43\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x69\x73\x20\x6e\x6f\x74\x20\x72\x65\x61\x64\x79\x21\x20\x54\x72\x79\x20\x61\x77\x61\x69\x74\x69\x6e\x67\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2e\x77\x61\x69\x74\x28\x29");
        let λ43ace6b392a0 = new v(this, λ050473e6ecdf ??= document.createElement("\x69\x66\x72\x61\x6d\x65"), λ38713df3b8c4);
        return this.frames.push(λ43ace6b392a0), λ43ace6b392a0;
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
            \u{67}\u{65}\u{74}\u{49}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{63}\u{72}\u{69}\u{70}\u{74}\u{73}: function e(λ050473e6ecdf, λ38713df3b8c4, λ43ace6b392a0, λ819ccbbf015d, λ62f8cb2d6b60, λfc63a9c82f34) {
              return (λ989300c3095e, λad401072732c, λ02da8133fade, λd4822232ce98) => {
                var λ7d39c15940ff;
                return [ λd4822232ce98(λ050473e6ecdf.studyjetPath), λd4822232ce98(λ43ace6b392a0.href + λ050473e6ecdf.virtualWasmPath), λd4822232ce98(λ050473e6ecdf.\u{69}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{50}\u{61}\u{74}\u{68}), λd4822232ce98("data:text/javascript;charset=utf-8;base64," + (λ7d39c15940ff = `\x0a\x09\x09\x09\x09\x09\x64\x6f\x63\x75\x6d\x65\x6e\x74\x2e\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63\x74\x6f\x72\x41\x6c\x6c\x28\x22\x73\x63\x72\x69\x70\x74\x5b\x73\x74\x75\x64\x79\x6a\x65\x74\x2d\x69\x6e\x6a\x65\x63\x74\x65\x64\x5d\x22\x29\x2e\x66\x6f\x72\x45\x61\x63\x68\x28\x73\x63\x72\x69\x70\x74\x20\x3d\x3e\x20\x73\x63\x72\x69\x70\x74\x2e\x72\x65\x6d\x6f\x76\x65\x28\x29\x29\x3b\x0a\x09\x09\x09\x09\x09\x24\x73\x74\x75\x64\x79\x6a\x65\x74\x43\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2e\x6c\x6f\x61\x64\x28\x7b\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x66\x69\x67\x3a\x20${JSON.stringify(λ050473e6ecdf)}\x2c\x0a\x09\x09\x09\x09\x09\x09\x73\x6a\x63\x6f\x6e\x66\x69\x67\x3a\x20${JSON.stringify(λ38713df3b8c4)}\x2c\x0a\x09\x09\x09\x09\x09\x09\x70\x72\x65\x66\x69\x78\x3a\x20\x6e\x65\x77\x20\x55\x52\x4c\x28\x22${λ43ace6b392a0.href}\x22\x29\x2c\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6f\x6b\x69\x65\x73\x3a\x20${JSON.stringify(λ819ccbbf015d.dump())}\x2c\x0a\x09\x09\x09\x09\x09\x09\x79\x69\x65\x6c\x64\x47\x65\x74\x49\x6e\x6a\x65\x63\x74\x53\x63\x72\x69\x70\x74\x73\x3a\x20${e.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x45\x6e\x63\x6f\x64\x65\x3a\x20${λ62f8cb2d6b60.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x44\x65\x63\x6f\x64\x65\x3a\x20${λfc63a9c82f34.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x69\x6e\x69\x74\x48\x65\x61\x64\x65\x72\x73\x3a\x20${JSON.stringify(λ02da8133fade.headers ?? [])}\x2c\x0a\x09\x09\x09\x09\x09\x09\x68\x69\x73\x74\x6f\x72\x79\x3a\x20${JSON.stringify(λ02da8133fade.history ?? [])}\x2c\x0a\x09\x09\x09\x09\x09\x7d\x29\x0a\x09\x09\x09\x09`, 
                btoa((new TextEncoder).encode(λ7d39c15940ff).reduce((λ050473e6ecdf, λ38713df3b8c4) => (λ050473e6ecdf.push(String.fromCharCode(λ38713df3b8c4)), 
                λ050473e6ecdf), []).join("")))) ];
              };
            }(this.controller.config, this.controller.studyjetConfig, new URL(this.prefix, location.href), this.controller.cookieJar, this.controller.config.codec.encode, this.controller.config.codec.decode),
            \u{67}\u{65}\u{74}\u{57}\u{6f}\u{72}\u{6b}\u{65}\u{72}\u{49}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{63}\u{72}\u{69}\u{70}\u{74}\u{73}: (λ050473e6ecdf, λ38713df3b8c4, λ43ace6b392a0) => {
              var λ819ccbbf015d;
              let λ62f8cb2d6b60 = "";
              return λ62f8cb2d6b60 += λ43ace6b392a0(this.controller.config.studyjetPath), λ62f8cb2d6b60 += λ43ace6b392a0(this.prefix + this.controller.config.virtualWasmPath), 
              λ62f8cb2d6b60 += λ43ace6b392a0("data:text/javascript;charset=utf-8;base64," + (λ819ccbbf015d = `\x0a\x09\x09\x09\x09\x09\x28\x28\x29\x3d\x3e\x7b\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x7b\x20\x53\x74\x75\x64\x79\x4a\x65\x74\x43\x6c\x69\x65\x6e\x74\x2c\x20\x43\x6f\x6f\x6b\x69\x65\x4a\x61\x72\x2c\x20\x73\x65\x74\x57\x61\x73\x6d\x20\x7d\x20\x3d\x20\x24\x73\x74\x75\x64\x79\x6a\x65\x74\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x73\x65\x74\x57\x61\x73\x6d\x28\x55\x69\x6e\x74\x38\x41\x72\x72\x61\x79\x2e\x66\x72\x6f\x6d\x28\x61\x74\x6f\x62\x28\x73\x65\x6c\x66\x2e\x57\x41\x53\x4d\x29\x2c\x20\x28\x63\x29\x20\x3d\x3e\x20\x63\x2e\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74\x28\x30\x29\x29\x29\x3b\x0a\x09\x09\x09\x09\x09\x09\x64\x65\x6c\x65\x74\x65\x20\x73\x65\x6c\x66\x2e\x57\x41\x53\x4d\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x73\x6a\x63\x6f\x6e\x66\x69\x67\x20\x3d\x20${JSON.stringify(this.controller.studyjetConfig)}\x3b\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x70\x72\x65\x66\x69\x78\x20\x3d\x20\x6e\x65\x77\x20\x55\x52\x4c\x28\x22${this.prefix}\x22\x2c\x20\x6c\x6f\x63\x61\x74\x69\x6f\x6e\x2e\x68\x72\x65\x66\x29\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x3d\x20\x7b\x0a\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x66\x69\x67\x3a\x20\x73\x6a\x63\x6f\x6e\x66\x69\x67\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x70\x72\x65\x66\x69\x78\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x69\x6e\x74\x65\x72\x66\x61\x63\x65\x3a\x20\x7b\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x45\x6e\x63\x6f\x64\x65\x3a\x20${this.controller.config.codec.encode.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x44\x65\x63\x6f\x64\x65\x3a\x20${this.controller.config.codec.decode.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x7d\x2c\x0a\x09\x09\x09\x09\x09\x09\x7d\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x63\x6c\x69\x65\x6e\x74\x20\x3d\x20\x6e\x65\x77\x20\x53\x74\x75\x64\x79\x4a\x65\x74\x43\x6c\x69\x65\x6e\x74\x28\x67\x6c\x6f\x62\x61\x6c\x54\x68\x69\x73\x2c\x20\x7b\x0a\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x74\x65\x78\x74\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x3a\x20\x6e\x75\x6c\x6c\x2c\x0a\x09\x09\x09\x09\x09\x09\x7d\x29\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6c\x69\x65\x6e\x74\x2e\x68\x6f\x6f\x6b\x28\x29\x3b\x0a\x09\x09\x09\x09\x09\x7d\x29\x28\x29\x3b\x0a\x09\x09\x09\x09\x09`, 
              btoa((new TextEncoder).encode(λ819ccbbf015d).reduce((λ050473e6ecdf, λ38713df3b8c4) => (λ050473e6ecdf.push(String.fromCharCode(λ38713df3b8c4)), 
              λ050473e6ecdf), []).join(""))));
            },
            codecEncode: this.controller.config.codec.encode,
            codecDecode: this.controller.config.codec.decode
          }
        };
      }
      plugins=[];
      constructor(λ050473e6ecdf, λ43ace6b392a0, λ819ccbbf015d = {}) {
        for (const λ989300c3095e of (this.controller = λ050473e6ecdf, this.element = λ43ace6b392a0, 
        this.options = λ819ccbbf015d, this.id = b(), this.prefix = this.controller.prefix + this.id + "\x2f", 
        this.fetchHandler = new λ62f8cb2d6b60.mK({
          crossOriginIsolated: self.crossOriginIsolated,
          context: this.context,
          transport: λ050473e6ecdf.transport,
          async sendSetCookie(λ38713df3b8c4, λ43ace6b392a0) {
            await λ050473e6ecdf.persistCookies(), await λ050473e6ecdf.propagateCookieSync(λ38713df3b8c4.map(({url: λ050473e6ecdf, cookie: λ38713df3b8c4}) => ({
              url: λ050473e6ecdf.href,
              cookie: λ38713df3b8c4
            })), λ43ace6b392a0);
          },
          fetchBlobUrl: async λ050473e6ecdf => λ38713df3b8c4.Sr.fromNativeResponse(await fetch(λ050473e6ecdf)),
          fetchDataUrl: async λ050473e6ecdf => λ38713df3b8c4.Sr.fromNativeResponse(await fetch(λ050473e6ecdf))
        }), this.hooks = {
          fetch: this.fetchHandler.hooks.fetch,
          init: λ62f8cb2d6b60.Cx.create(),
          error: λ62f8cb2d6b60.Cx.create()
        }, λ43ace6b392a0[λfc63a9c82f34.I] = this, this.plugins = λ819ccbbf015d.plugins ?? [], 
        this.plugins)) {
          for (const λ050473e6ecdf of λ989300c3095e.dependencies) if (!this.plugins.find(λ38713df3b8c4 => λ38713df3b8c4.name === λ050473e6ecdf)) throw Error(`\x44\x65\x70\x65\x6e\x64\x65\x6e\x63\x79\x20${λ050473e6ecdf}\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x66\x6f\x72\x20\x70\x6c\x75\x67\x69\x6e\x20${λ989300c3095e.name}`);
          λ989300c3095e.install(this);
        }
      }
      getPlugin(λ050473e6ecdf) {
        let λ38713df3b8c4 = this.plugins.find(λ38713df3b8c4 => λ38713df3b8c4.name === λ050473e6ecdf);
        if (!λ38713df3b8c4) throw Error(`\x50\x6c\x75\x67\x69\x6e\x20${λ050473e6ecdf}\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64`);
        return λ38713df3b8c4;
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
      go(λ050473e6ecdf) {
        let λ38713df3b8c4 = (0, λ62f8cb2d6b60.Oy)(λ050473e6ecdf, this.context, {
          origin: new URL(location.href),
          base: new URL(location.href)
        });
        this.element.src = λ38713df3b8c4;
      }
    }
  })(), $studyjetController = λ43ace6b392a0;
})();
