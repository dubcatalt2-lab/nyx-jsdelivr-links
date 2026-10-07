var $studyjetController;

(() => {
  var λ31a61a25ed22 = {
    286(λ31a61a25ed22, λf0ee71997855, λ21dc7faa0f91) {
      λ21dc7faa0f91.d(λf0ee71997855, {
        I: () => λ45ef238a60a0
      });
      let λ45ef238a60a0 = Symbol.for("\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x66\x72\x61\x6d\x65\x20\x68\x61\x6e\x64\x6c\x65");
    },
    355(λ31a61a25ed22, λf0ee71997855, λ21dc7faa0f91) {
      λ21dc7faa0f91.d(λf0ee71997855, {
        O: () => s,
        x: () => λ45ef238a60a0
      });
      let λ45ef238a60a0 = "\x30\x2e\x30\x2e\x31\x34";
      function s() {
        if ("\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" == typeof $studyjet) throw Error("\x40\x6d\x65\x72\x63\x75\x72\x79\x77\x6f\x72\x6b\x73\x68\x6f\x70\x2f\x73\x74\x75\x64\x79\x6a\x65\x74\x20\x69\x73\x20\x6e\x6f\x74\x20\x6c\x6f\x61\x64\x65\x64\x2e\x20\x4c\x6f\x61\x64\x20\x73\x74\x75\x64\x79\x6a\x65\x74\x20\x62\x65\x66\x6f\x72\x65\x20\x74\x68\x65\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2e");
        var λ31a61a25ed22 = "\x32\x2e\x30\x2e\x36\x37\x2d\x61\x6c\x70\x68\x61\x2e\x32", λf0ee71997855 = $studyjet.versionInfo.version;
        if (λ31a61a25ed22 !== λf0ee71997855) throw Error(`\x40\x6d\x65\x72\x63\x75\x72\x79\x77\x6f\x72\x6b\x73\x68\x6f\x70\x2f\x73\x74\x75\x64\x79\x6a\x65\x74\x20\x76\x65\x72\x73\x69\x6f\x6e\x20\x6d\x69\x73\x6d\x61\x74\x63\x68\x3a\x20\x74\x68\x69\x73\x20\x62\x75\x69\x6c\x64\x20\x65\x78\x70\x65\x63\x74\x73\x20${λ31a61a25ed22}\x2c\x20\x62\x75\x74\x20\x74\x68\x65\x20\x6c\x6f\x61\x64\x65\x64\x20\x72\x75\x6e\x74\x69\x6d\x65\x20\x69\x73\x20${λf0ee71997855}`);
      }
    },
    805(λ31a61a25ed22, λf0ee71997855, λ21dc7faa0f91) {
      λ21dc7faa0f91.d(λf0ee71997855, {
        C: () => o
      });
      class o {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λ31a61a25ed22, λf0ee71997855, λ21dc7faa0f91) {
          this.methods = λ31a61a25ed22, this.id = λf0ee71997855, this.sendRaw = λ21dc7faa0f91;
        }
        recieve(λ31a61a25ed22) {
          if (null == λ31a61a25ed22 || "\x6f\x62\x6a\x65\x63\x74" != typeof λ31a61a25ed22) return;
          let λf0ee71997855 = λ31a61a25ed22[this.id];
          if (null == λf0ee71997855 || "\x6f\x62\x6a\x65\x63\x74" != typeof λf0ee71997855) return;
          let λ21dc7faa0f91 = λf0ee71997855.$type;
          if ("\x72\x65\x73\x70\x6f\x6e\x73\x65" === λ21dc7faa0f91) {
            let λ31a61a25ed22 = λf0ee71997855.$token, λ21dc7faa0f91 = λf0ee71997855.$data, λ45ef238a60a0 = λf0ee71997855.$error, λ01091640872e = this.promiseCallbacks.get(λ31a61a25ed22);
            if (!λ01091640872e) return;
            this.promiseCallbacks.delete(λ31a61a25ed22), void 0 !== λ45ef238a60a0 ? λ01091640872e.reject(Error(λ45ef238a60a0)) : λ01091640872e.resolve(λ21dc7faa0f91);
          } else if ("\x72\x65\x71\x75\x65\x73\x74" === λ21dc7faa0f91) {
            let λ31a61a25ed22 = λf0ee71997855.$method, λ21dc7faa0f91 = λf0ee71997855.$args;
            this.methods[λ31a61a25ed22](λ21dc7faa0f91).then(λ31a61a25ed22 => {
              this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λf0ee71997855.$token,
                  $data: λ31a61a25ed22?.[0]
                }
              }, λ31a61a25ed22?.[1]);
            }).catch(λ31a61a25ed22 => {
              console.error(λ31a61a25ed22), this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λf0ee71997855.$token,
                  $error: λ31a61a25ed22?.toString() || "\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x65\x72\x72\x6f\x72"
                }
              }, []);
            });
          }
        }
        call(λ31a61a25ed22, λf0ee71997855, λ21dc7faa0f91 = []) {
          let λ45ef238a60a0 = this.counter++;
          return new Promise((λ01091640872e, λca2bbd3ff204) => {
            this.promiseCallbacks.set(λ45ef238a60a0, {
              resolve: λ01091640872e,
              reject: λca2bbd3ff204
            }), this.sendRaw({
              [this.id]: {
                $type: "\x72\x65\x71\x75\x65\x73\x74",
                $method: λ31a61a25ed22,
                $args: λf0ee71997855,
                $token: λ45ef238a60a0
              }
            }, λ21dc7faa0f91);
          });
        }
      }
    },
    986(λ31a61a25ed22) {
      let λf0ee71997855 = Object.getPrototypeOf({});
      function r() {
        return function(λ31a61a25ed22) {
          return "\x6f\x62\x6a\x65\x63\x74" == typeof λ31a61a25ed22 && null !== λ31a61a25ed22 && !(λ31a61a25ed22 instanceof RegExp) && !(λ31a61a25ed22 instanceof Date);
        };
      }
      function o(λ31a61a25ed22) {
        function o(λ31a61a25ed22) {
          return "\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72" !== λ31a61a25ed22 && "\x70\x72\x6f\x74\x6f\x74\x79\x70\x65" !== λ31a61a25ed22 && "\x5f\x5f\x70\x72\x6f\x74\x6f\x5f\x5f" !== λ31a61a25ed22;
        }
        let λ21dc7faa0f91 = Object.prototype.propertyIsEnumerable, λ45ef238a60a0 = λ31a61a25ed22?.symbols ? function(λ31a61a25ed22) {
          let λf0ee71997855 = Object.keys(λ31a61a25ed22), λ45ef238a60a0 = Object.getOwnPropertySymbols(λ31a61a25ed22);
          for (let λ01091640872e = 0, λca2bbd3ff204 = λ45ef238a60a0.length; λ01091640872e < λca2bbd3ff204; ++λ01091640872e) λ21dc7faa0f91.call(λ31a61a25ed22, λ45ef238a60a0[λ01091640872e]) && λf0ee71997855.push(λ45ef238a60a0[λ01091640872e]);
          return λf0ee71997855;
        } : Object.keys, λ01091640872e = "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ31a61a25ed22?.cloneProtoObject ? λ31a61a25ed22.cloneProtoObject : void 0, λca2bbd3ff204 = "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ31a61a25ed22?.isMergeableObject ? λ31a61a25ed22.isMergeableObject : r(), λfc2801196c9b = λ31a61a25ed22?.onlyDefinedProperties === !0, λdb843be3ae7e = λ31a61a25ed22 && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ31a61a25ed22.mergeArray ? λ31a61a25ed22.mergeArray({
          clone: d,
          deepmerge: h,
          getKeys: λ45ef238a60a0,
          isMergeableObject: λca2bbd3ff204
        }) : function(λ31a61a25ed22, λf0ee71997855) {
          let λ21dc7faa0f91 = λ31a61a25ed22.length, λ45ef238a60a0 = λf0ee71997855.length, λ01091640872e = 0, λca2bbd3ff204 = Array(λ21dc7faa0f91 + λ45ef238a60a0);
          for (;λ01091640872e < λ21dc7faa0f91; ++λ01091640872e) λca2bbd3ff204[λ01091640872e] = d(λ31a61a25ed22[λ01091640872e]);
          for (λ01091640872e = 0; λ01091640872e < λ45ef238a60a0; ++λ01091640872e) λca2bbd3ff204[λ01091640872e + λ21dc7faa0f91] = d(λf0ee71997855[λ01091640872e]);
          return λca2bbd3ff204;
        };
        function d(λ31a61a25ed22) {
          return λca2bbd3ff204(λ31a61a25ed22) ? Array.isArray(λ31a61a25ed22) ? function(λ31a61a25ed22) {
            let λf0ee71997855 = 0, λ21dc7faa0f91 = λ31a61a25ed22.length, λ45ef238a60a0 = Array(λ21dc7faa0f91);
            for (;λf0ee71997855 < λ21dc7faa0f91; ++λf0ee71997855) λ45ef238a60a0[λf0ee71997855] = d(λ31a61a25ed22[λf0ee71997855]);
            return λ45ef238a60a0;
          }(λ31a61a25ed22) : function(λ31a61a25ed22) {
            let λ21dc7faa0f91, λca2bbd3ff204, λfc2801196c9b, λdb843be3ae7e = {};
            if (λ01091640872e && Object.getPrototypeOf(λ31a61a25ed22) !== λf0ee71997855) return λ01091640872e(λ31a61a25ed22);
            let λc8cae73b71a2 = λ45ef238a60a0(λ31a61a25ed22);
            for (λ21dc7faa0f91 = 0, λca2bbd3ff204 = λc8cae73b71a2.length; λ21dc7faa0f91 < λca2bbd3ff204; ++λ21dc7faa0f91) o(λfc2801196c9b = λc8cae73b71a2[λ21dc7faa0f91]) && (λdb843be3ae7e[λfc2801196c9b] = d(λ31a61a25ed22[λfc2801196c9b]));
            return λdb843be3ae7e;
          }(λ31a61a25ed22) : λ31a61a25ed22;
        }
        function h(λ31a61a25ed22, λ21dc7faa0f91) {
          if (λfc2801196c9b && void 0 === λ21dc7faa0f91) return d(λ31a61a25ed22);
          let λc8cae73b71a2 = Array.isArray(λ21dc7faa0f91), λ0a90bd9dcdc9 = Array.isArray(λ31a61a25ed22);
          return "\x6f\x62\x6a\x65\x63\x74" != typeof λ21dc7faa0f91 || null === λ21dc7faa0f91 ? λ21dc7faa0f91 : λca2bbd3ff204(λ31a61a25ed22) ? λc8cae73b71a2 && λ0a90bd9dcdc9 ? λdb843be3ae7e(λ31a61a25ed22, λ21dc7faa0f91) : λc8cae73b71a2 !== λ0a90bd9dcdc9 ? d(λ21dc7faa0f91) : function(λ31a61a25ed22, λ21dc7faa0f91) {
            let λdb843be3ae7e, λc8cae73b71a2, λ0a90bd9dcdc9, λfae867df8a32 = {}, λ362243d11ac2 = λ45ef238a60a0(λ31a61a25ed22), λf66666167a64 = λ45ef238a60a0(λ21dc7faa0f91);
            for (λdb843be3ae7e = 0, λc8cae73b71a2 = λ362243d11ac2.length; λdb843be3ae7e < λc8cae73b71a2; ++λdb843be3ae7e) o(λ0a90bd9dcdc9 = λ362243d11ac2[λdb843be3ae7e]) && -1 === λf66666167a64.indexOf(λ0a90bd9dcdc9) && (λfae867df8a32[λ0a90bd9dcdc9] = d(λ31a61a25ed22[λ0a90bd9dcdc9]));
            for (λdb843be3ae7e = 0, λc8cae73b71a2 = λf66666167a64.length; λdb843be3ae7e < λc8cae73b71a2; ++λdb843be3ae7e) if (o(λ0a90bd9dcdc9 = λf66666167a64[λdb843be3ae7e])) if (λ0a90bd9dcdc9 in λ31a61a25ed22) -1 !== λ362243d11ac2.indexOf(λ0a90bd9dcdc9) && (λ01091640872e && λca2bbd3ff204(λ21dc7faa0f91[λ0a90bd9dcdc9]) && Object.getPrototypeOf(λ21dc7faa0f91[λ0a90bd9dcdc9]) !== λf0ee71997855 ? λfae867df8a32[λ0a90bd9dcdc9] = λ01091640872e(λ21dc7faa0f91[λ0a90bd9dcdc9]) : λfae867df8a32[λ0a90bd9dcdc9] = h(λ31a61a25ed22[λ0a90bd9dcdc9], λ21dc7faa0f91[λ0a90bd9dcdc9])); else {
              if (λfc2801196c9b && void 0 === λ21dc7faa0f91[λ0a90bd9dcdc9]) continue;
              λfae867df8a32[λ0a90bd9dcdc9] = d(λ21dc7faa0f91[λ0a90bd9dcdc9]);
            }
            return λfae867df8a32;
          }(λ31a61a25ed22, λ21dc7faa0f91) : d(λ21dc7faa0f91);
        }
        return λ31a61a25ed22?.all ? function() {
          let λ31a61a25ed22;
          switch (arguments.length) {
           case 0:
            return {};

           case 1:
            return d(arguments[0]);

           case 2:
            return h(arguments[0], arguments[1]);
          }
          for (let λf0ee71997855 = 0, λ21dc7faa0f91 = arguments.length; λf0ee71997855 < λ21dc7faa0f91; ++λf0ee71997855) λ31a61a25ed22 = h(λ31a61a25ed22, arguments[λf0ee71997855]);
          return λ31a61a25ed22;
        } : h;
      }
      λ31a61a25ed22.exports = o, λ31a61a25ed22.exports.default = o, λ31a61a25ed22.exports.deepmerge = o, 
      Object.defineProperty(λ31a61a25ed22.exports, "\x69\x73\x4d\x65\x72\x67\x65\x61\x62\x6c\x65\x4f\x62\x6a\x65\x63\x74", {
        get: r
      });
    },
    235(λ31a61a25ed22, λf0ee71997855, λ21dc7faa0f91) {
      λ21dc7faa0f91.d(λf0ee71997855, {
        Sr: () => s
      }), WebSocket.CLOSED, WebSocket.CONNECTING, WebSocket.OPEN, EventTarget;
      let λ45ef238a60a0 = [ 101, 204, 205, 304 ];
      class s extends Response {
        url;
        rawHeaders;
        redirected=!1;
        static fromTransferrableResponse(λ31a61a25ed22, λf0ee71997855) {
          let λ21dc7faa0f91 = new s(λ45ef238a60a0.includes(λ31a61a25ed22.status) ? void 0 : λ31a61a25ed22.body, {
            headers: new Headers(λ31a61a25ed22.headers),
            status: λ31a61a25ed22.status,
            statusText: λ31a61a25ed22.statusText
          });
          return λ21dc7faa0f91.url = λf0ee71997855, λ21dc7faa0f91.redirected = λ31a61a25ed22.status >= 300 && λ31a61a25ed22.status < 400 && void 0 !== λ31a61a25ed22.headers.location, 
          λ21dc7faa0f91.rawHeaders = λ31a61a25ed22.headers, λ21dc7faa0f91;
        }
        static fromNativeResponse(λ31a61a25ed22) {
          let λf0ee71997855 = new s(λ45ef238a60a0.includes(λ31a61a25ed22.status) ? void 0 : λ31a61a25ed22.body, {
            headers: λ31a61a25ed22.headers,
            status: λ31a61a25ed22.status,
            statusText: λ31a61a25ed22.statusText
          });
          return λf0ee71997855.url = λ31a61a25ed22.url, λf0ee71997855.rawHeaders = [ ...λ31a61a25ed22.headers ], 
          λf0ee71997855.redirected = λ31a61a25ed22.redirected, λf0ee71997855;
        }
      }
    },
    423(λ31a61a25ed22, λf0ee71997855, λ21dc7faa0f91) {
      λ21dc7faa0f91.d(λf0ee71997855, {
        Cx: () => λacf4aad24c6d,
        Oy: () => λ0560ef429403,
        cP: () => λ01091640872e,
        ht: () => λ32931c74e381,
        k_: () => λfc2801196c9b,
        mK: () => λfae867df8a32,
        sb: () => λ14eddaaff353,
        uh: () => λf66666167a64
      });
      let {BareResponse: λ45ef238a60a0, CookieJar: λ01091640872e, IncrementalHtmlRewriter: λca2bbd3ff204, Plugin: λfc2801196c9b, STUDYJETCLIENT: λdb843be3ae7e, STUDYJETCLIENTNAME: λc8cae73b71a2, StudyJetClient: λ0a90bd9dcdc9, StudyJetFetchHandler: λfae867df8a32, StudyJetFetchTrackedClient: λ362243d11ac2, StudyJetHeaders: λf66666167a64, Tap: λacf4aad24c6d, createLocationProxy: λa836852155ec, defaultConfig: λ14eddaaff353, defaultConfigDev: λe2752c4e9b67, flagEnabled: λa6795a34c2c0, getOwnPropertyDescriptorHandler: λ3c0da939af0a, getRewriter: λ6f97c520ff82, getScriptBlockTypeString: λ0e48d11995aa, htmlRules: λ6d26a759c164, isArchiveMimeType: λ72cf382f87f3, isAudioOrVideoMimeType: λ7792da0c8c97, isFontMimeType: λd1d1cb0307fb, isHtmlMimeType: λ17147c3fee20, isImageMimeType: λ594950f8ff7c, isInlineDisplayableMimeType: λ48cf03785628, isJavascriptMimeType: λ3f474be3138f, isJavascriptMimeTypeEssenceMatch: λ67c3245e7744, isModuleScriptType: λ7a193bd0c78f, isScriptType: λ6b1b2eed0ec5, isScriptableMimeType: λ4f180c8cdc6e, isXmlMimeType: λ0d66c5db8e27, isZipBasedMimeType: λ8de046af483a, isdedicated: λe554b67e7f54, isshared: λf84543979236, issw: λfdd165db43b9, iswindow: λ5820c4357ac8, isworker: λ02dd1ec11fe1, parseMimeType: λa218740d08d3, rewriteBlob: λ0a52e2888823, rewriteCss: λ732f25cc4942, rewriteHtml: λ63e5fab75070, rewriteJs: λf54b6a16e3a0, rewriteJsInner: λbc6c99ee6423, rewriteSrcset: λcabf1a9598a1, rewriteUrl: λ0560ef429403, rewriteWorkers: λe9670fbda6f6, setWasm: λ32931c74e381, unrewriteBlob: λ430dd5605a07, unrewriteCss: λ8ed567f1cc72, unrewriteHtml: λ5753220a1ed1, unrewriteUrl: λda9b422a7e57, versionInfo: λ915ae6b2825d} = globalThis.$studyjet;
    }
  }, λf0ee71997855 = {};
  function r(λ21dc7faa0f91) {
    var λ45ef238a60a0 = λf0ee71997855[λ21dc7faa0f91];
    if (void 0 !== λ45ef238a60a0) return λ45ef238a60a0.exports;
    var λ01091640872e = λf0ee71997855[λ21dc7faa0f91] = {
      exports: {}
    };
    return λ31a61a25ed22[λ21dc7faa0f91](λ01091640872e, λ01091640872e.exports, r), λ01091640872e.exports;
  }
  r.n = λ31a61a25ed22 => {
    var λf0ee71997855 = λ31a61a25ed22 && λ31a61a25ed22.__esModule ? () => λ31a61a25ed22.default : () => λ31a61a25ed22;
    return r.d(λf0ee71997855, {
      a: λf0ee71997855
    }), λf0ee71997855;
  }, r.d = (λ31a61a25ed22, λf0ee71997855) => {
    for (var λ21dc7faa0f91 in λf0ee71997855) r.o(λf0ee71997855, λ21dc7faa0f91) && !r.o(λ31a61a25ed22, λ21dc7faa0f91) && Object.defineProperty(λ31a61a25ed22, λ21dc7faa0f91, {
      enumerable: !0,
      get: λf0ee71997855[λ21dc7faa0f91]
    });
  }, r.o = (λ31a61a25ed22, λf0ee71997855) => Object.prototype.hasOwnProperty.call(λ31a61a25ed22, λf0ee71997855), 
  r.r = λ31a61a25ed22 => {
    "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λ31a61a25ed22, Symbol.toStringTag, {
      value: "\x4d\x6f\x64\x75\x6c\x65"
    }), Object.defineProperty(λ31a61a25ed22, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
      value: !0
    });
  };
  var λ21dc7faa0f91 = {};
  (() => {
    r.r(λ21dc7faa0f91), r.d(λ21dc7faa0f91, {
      Controller: () => S,
      Frame: () => v,
      ManagedPlugin: () => d,
      VERSION: () => λfc2801196c9b.x,
      assertRuntimeStudyJetVersion: () => λfc2801196c9b.O,
      config: () => λdb843be3ae7e
    });
    var λ31a61a25ed22 = r(805), λf0ee71997855 = r(235), λ45ef238a60a0 = r(986), λ01091640872e = r(423), λca2bbd3ff204 = r(286), λfc2801196c9b = r(355);
    let λdb843be3ae7e = {
      prefix: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x7e\x2f\x73\x74\x75\x64\x79\x2f",
      studyjetPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x73\x74\x75\x64\x79\x6a\x65\x74\x2f\x40\x72\x36\x39\x63\x31\x38\x66\x39\x62\x64\x34\x65\x64\x31\x37\x35\x63\x39\x65\x61\x35\x30\x35\x62\x38\x21\x2e\x6a\x73",
      injectPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2f\x40\x72\x39\x65\x38\x35\x35\x61\x63\x38\x32\x65\x64\x63\x34\x62\x35\x31\x65\x31\x33\x34\x30\x35\x36\x34\x21\x2e\x6a\x73",
      wasmPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x73\x74\x75\x64\x79\x6a\x65\x74\x2f\x40\x72\x35\x35\x32\x38\x36\x63\x66\x65\x30\x39\x64\x37\x34\x31\x30\x32\x33\x63\x63\x33\x65\x31\x64\x36\x21\x2e\x77\x61\x73\x6d",
      virtualWasmPath: "\x73\x74\x75\x64\x79\x6a\x65\x74\x2e\x77\x61\x73\x6d\x2e\x6a\x73",
      codec: {
        encode: λ31a61a25ed22 => λ31a61a25ed22 ? encodeURIComponent(λ31a61a25ed22) : λ31a61a25ed22,
        decode: λ31a61a25ed22 => λ31a61a25ed22 ? decodeURIComponent(λ31a61a25ed22) : λ31a61a25ed22
      }
    }, λc8cae73b71a2 = {
      flags: {
        ...λ01091640872e.sb.flags,
        allowFailedIntercepts: !0
      },
      maskedfiles: [ "\x69\x6e\x6a\x65\x63\x74\x2e\x6a\x73", "\x73\x74\x75\x64\x79\x6a\x65\x74\x2e\x77\x61\x73\x6d\x2e\x6a\x73" ]
    };
    class d extends λ01091640872e.k_ {
      frame=null;
      dependencies=[];
      constructor(λ31a61a25ed22, λf0ee71997855) {
        super(λ31a61a25ed22), this.dependencies = λf0ee71997855;
      }
      install(λ31a61a25ed22) {
        this.frame = λ31a61a25ed22;
      }
    }
    let λ0a90bd9dcdc9 = "\x73\x74\x61\x74\x65", λfae867df8a32 = "\x63\x6f\x6f\x6b\x69\x65\x73", λ362243d11ac2 = null;
    function u(λ31a61a25ed22) {
      return "\x6f\x62\x6a\x65\x63\x74" == typeof λ31a61a25ed22 && null !== λ31a61a25ed22 && "\x6e\x75\x6d\x62\x65\x72" == typeof λ31a61a25ed22.updatedAt && Number.isFinite(λ31a61a25ed22.updatedAt) && "\x73\x74\x72\x69\x6e\x67" == typeof λ31a61a25ed22.cookies ? λ31a61a25ed22 : null;
    }
    function y(λ31a61a25ed22) {
      return new Promise((λf0ee71997855, λ21dc7faa0f91) => {
        λ31a61a25ed22.onsuccess = () => λf0ee71997855(λ31a61a25ed22.result), λ31a61a25ed22.onerror = () => λ21dc7faa0f91(λ31a61a25ed22.error ?? Error("\x49\x6e\x64\x65\x78\x65\x64\x44\x42\x20\x72\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64"));
      });
    }
    function m(λ31a61a25ed22) {
      return new Promise((λf0ee71997855, λ21dc7faa0f91) => {
        λ31a61a25ed22.oncomplete = () => λf0ee71997855(), λ31a61a25ed22.onabort = () => λ21dc7faa0f91(λ31a61a25ed22.error ?? Error("\x49\x6e\x64\x65\x78\x65\x64\x44\x42\x20\x74\x72\x61\x6e\x73\x61\x63\x74\x69\x6f\x6e\x20\x61\x62\x6f\x72\x74\x65\x64")), 
        λ31a61a25ed22.onerror = () => λ21dc7faa0f91(λ31a61a25ed22.error ?? Error("\x49\x6e\x64\x65\x78\x65\x64\x44\x42\x20\x74\x72\x61\x6e\x73\x61\x63\x74\x69\x6f\x6e\x20\x66\x61\x69\x6c\x65\x64"));
      });
    }
    function g() {
      return λ362243d11ac2 || (λ362243d11ac2 = new Promise((λ31a61a25ed22, λf0ee71997855) => {
        let λ21dc7faa0f91 = indexedDB.open("\x40\x64\x39\x34\x31\x62\x63\x36\x35\x61\x66\x33", 1);
        λ21dc7faa0f91.onupgradeneeded = () => {
          let λ31a61a25ed22 = λ21dc7faa0f91.result;
          λ31a61a25ed22.objectStoreNames.contains(λ0a90bd9dcdc9) || λ31a61a25ed22.createObjectStore(λ0a90bd9dcdc9);
        }, λ21dc7faa0f91.onsuccess = () => λ31a61a25ed22(λ21dc7faa0f91.result), λ21dc7faa0f91.onerror = () => λf0ee71997855(λ21dc7faa0f91.error ?? Error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x6f\x70\x65\x6e\x20\x63\x6f\x6f\x6b\x69\x65\x20\x64\x61\x74\x61\x62\x61\x73\x65"));
      }));
    }
    async function w() {
      try {
        let λ31a61a25ed22 = (await g()).transaction(λ0a90bd9dcdc9, "\x72\x65\x61\x64\x6f\x6e\x6c\x79"), λf0ee71997855 = λ31a61a25ed22.objectStore(λ0a90bd9dcdc9), λ21dc7faa0f91 = await y(λf0ee71997855.get(λfae867df8a32));
        return await m(λ31a61a25ed22), u(λ21dc7faa0f91);
      } catch (λ31a61a25ed22) {
        return console.error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x72\x65\x61\x64\x20\x70\x65\x72\x73\x69\x73\x74\x65\x64\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x63\x6f\x6f\x6b\x69\x65\x73\x3a", λ31a61a25ed22), 
        null;
      }
    }
    async function k(λ31a61a25ed22, λf0ee71997855) {
      try {
        let λ21dc7faa0f91 = (await g()).transaction(λ0a90bd9dcdc9, "\x72\x65\x61\x64\x77\x72\x69\x74\x65"), λ45ef238a60a0 = λ21dc7faa0f91.objectStore(λ0a90bd9dcdc9), λ01091640872e = u(await y(λ45ef238a60a0.get(λfae867df8a32))), λca2bbd3ff204 = Math.max(Date.now(), λf0ee71997855 + 1, (λ01091640872e?.updatedAt ?? 0) + 1);
        return λ45ef238a60a0.put({
          updatedAt: λca2bbd3ff204,
          cookies: λ31a61a25ed22
        }, λfae867df8a32), await m(λ21dc7faa0f91), λca2bbd3ff204;
      } catch (λ31a61a25ed22) {
        return console.error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x70\x65\x72\x73\x69\x73\x74\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x63\x6f\x6f\x6b\x69\x65\x73\x3a", λ31a61a25ed22), λf0ee71997855;
      }
    }
    function b() {
      return Math.random().toString(36).substring(2, 10);
    }
    let λf66666167a64 = (0, λ45ef238a60a0.deepmerge)();
    class S {
      init;
      id;
      config;
      studyjetConfig;
      prefix;
      cookieJar=new λ01091640872e.cP;
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
      onTabChannelMessage=λ31a61a25ed22 => {
        this.rpc.recieve(λ31a61a25ed22.data);
      };
      onCookieSyncMessage=λ31a61a25ed22 => {
        let λf0ee71997855 = "\x6f\x62\x6a\x65\x63\x74" == typeof λ31a61a25ed22.data && null !== λ31a61a25ed22.data ? λ31a61a25ed22.data.updatedAt : void 0;
        "\x6e\x75\x6d\x62\x65\x72" != typeof λf0ee71997855 || λf0ee71997855 <= this.cookieUpdatedAt || (this.cookieSyncDirty = !0, 
        this.loadSavedCookies());
      };
      async loadStudyJetWasm() {
        if (this.wasmAlreadyFetched) return;
        let λ31a61a25ed22 = await fetch(this.config.wasmPath);
        (0, λ01091640872e.ht)(await λ31a61a25ed22.arrayBuffer()), this.wasmAlreadyFetched = !0;
      }
      methods={
        ready: async () => {
          this.readyResolve(), setTimeout(() => {
            this.guardServiceWorkerRevive = !1;
          }, 5e3);
        },
        request: async λ31a61a25ed22 => {
          let λf0ee71997855 = new URL(λ31a61a25ed22.rawUrl).pathname, λ21dc7faa0f91 = this.frames.find(λ31a61a25ed22 => λf0ee71997855.startsWith(λ31a61a25ed22.prefix));
          if (!λ21dc7faa0f91) throw Error("\x4e\x6f\x20\x66\x72\x61\x6d\x65\x20\x66\x6f\x75\x6e\x64\x20\x66\x6f\x72\x20\x72\x65\x71\x75\x65\x73\x74");
          try {
            if (await this.loadSavedCookies(), λf0ee71997855 === λ21dc7faa0f91.prefix + this.config.virtualWasmPath) {
              if (!this.wasmPayload) {
                let λ31a61a25ed22 = await fetch(this.config.wasmPath), λf0ee71997855 = await λ31a61a25ed22.arrayBuffer(), λ21dc7faa0f91 = btoa(new Uint8Array(λf0ee71997855).reduce((λ31a61a25ed22, λf0ee71997855) => (λ31a61a25ed22.push(String.fromCharCode(λf0ee71997855)), 
                λ31a61a25ed22), []).join(""));
                this.wasmPayload = `\x73\x65\x6c\x66\x2e\x57\x41\x53\x4d\x20\x3d\x20\x27${λ21dc7faa0f91}\x27\x3b`;
              }
              return [ {
                body: this.wasmPayload,
                status: 200,
                statusText: "\x4f\x4b",
                headers: [ [ "\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65", "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x61\x76\x61\x73\x63\x72\x69\x70\x74" ] ]
              }, [] ];
            }
            let λ45ef238a60a0 = λ01091640872e.uh.fromRawHeaders(λ31a61a25ed22.initialHeaders), λca2bbd3ff204 = await λ21dc7faa0f91.fetchHandler.handleFetch({
              initialHeaders: λ45ef238a60a0,
              rawClientUrl: λ31a61a25ed22.rawClientUrl ? new URL(λ31a61a25ed22.rawClientUrl) : void 0,
              rawUrl: new URL(λ31a61a25ed22.rawUrl),
              rawReferrer: λ31a61a25ed22.rawReferrer,
              rawDestination: λ31a61a25ed22.destination,
              method: λ31a61a25ed22.method,
              mode: λ31a61a25ed22.mode,
              referrer: λ31a61a25ed22.referrer,
              body: λ31a61a25ed22.body,
              cache: λ31a61a25ed22.cache,
              clientId: λ31a61a25ed22.clientId
            });
            return [ {
              body: λca2bbd3ff204.body,
              status: λca2bbd3ff204.status,
              statusText: λca2bbd3ff204.statusText,
              headers: λca2bbd3ff204.headers.toRawHeaders()
            }, λca2bbd3ff204.body instanceof ReadableStream || λca2bbd3ff204.body instanceof ArrayBuffer ? [ λca2bbd3ff204.body ] : [] ];
          } catch (λf0ee71997855) {
            let λ45ef238a60a0 = {
              setResponse: void 0,
              suppressError: !1
            };
            if (await λ01091640872e.Cx.dispatch(λ21dc7faa0f91.hooks.error.request, {
              rawrequest: λ31a61a25ed22,
              error: λf0ee71997855
            }, λ45ef238a60a0), λ45ef238a60a0.suppressError || console.error("\x45\x72\x72\x6f\x72\x20\x69\x6e\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x72\x65\x71\x75\x65\x73\x74\x20\x68\x61\x6e\x64\x6c\x65\x72\x3a", λf0ee71997855), 
            λ45ef238a60a0.setResponse) return [ λ45ef238a60a0.setResponse, [] ];
            throw λf0ee71997855;
          }
        },
        initRemoteTransport: async λf0ee71997855 => {
          let λ21dc7faa0f91 = new λ31a61a25ed22.C({
            request: async ({remote: λ31a61a25ed22, method: λf0ee71997855, body: λ21dc7faa0f91, headers: λ45ef238a60a0}) => {
              let λ01091640872e = await this.transport.request(new URL(λ31a61a25ed22), λf0ee71997855, λ21dc7faa0f91, λ45ef238a60a0, void 0);
              return [ λ01091640872e, [ λ01091640872e.body ] ];
            },
            sendSetCookie: async ({cookies: λ31a61a25ed22, options: λf0ee71997855}) => {
              await this.loadSavedCookies(!0), λf0ee71997855?.clear && this.cookieJar.clear(), 
              this.applyCookieSyncEntries(λ31a61a25ed22), await this.persistCookies(), await this.propagateCookieSync(λ31a61a25ed22, λf0ee71997855);
            },
            connect: async ({url: λ31a61a25ed22, protocols: λf0ee71997855, requestHeaders: λ21dc7faa0f91, port: λ45ef238a60a0}) => {
              let λ01091640872e, λca2bbd3ff204 = new Promise(λ31a61a25ed22 => λ01091640872e = λ31a61a25ed22), [λfc2801196c9b, λdb843be3ae7e] = this.transport.connect(new URL(λ31a61a25ed22), λf0ee71997855, λ21dc7faa0f91, (λ31a61a25ed22, λf0ee71997855) => {
                λ01091640872e({
                  result: "\x73\x75\x63\x63\x65\x73\x73",
                  protocol: λ31a61a25ed22,
                  extensions: λf0ee71997855
                });
              }, λ31a61a25ed22 => {
                λ45ef238a60a0.postMessage({
                  type: "\x64\x61\x74\x61",
                  data: λ31a61a25ed22
                }, λ31a61a25ed22 instanceof ArrayBuffer ? [ λ31a61a25ed22 ] : []);
              }, (λ31a61a25ed22, λf0ee71997855) => {
                λ45ef238a60a0.postMessage({
                  type: "\x63\x6c\x6f\x73\x65",
                  code: λ31a61a25ed22,
                  reason: λf0ee71997855
                });
              }, λ31a61a25ed22 => {
                λ01091640872e({
                  result: "\x66\x61\x69\x6c\x75\x72\x65",
                  error: λ31a61a25ed22
                });
              });
              return λ45ef238a60a0.onmessageerror = λ31a61a25ed22 => {
                console.error("\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x6f\x72\x74\x20\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λ31a61a25ed22);
              }, λ45ef238a60a0.onmessage = ({data: λ31a61a25ed22}) => {
                "\x64\x61\x74\x61" === λ31a61a25ed22.type ? λfc2801196c9b(λ31a61a25ed22.data) : "\x63\x6c\x6f\x73\x65" === λ31a61a25ed22.type && λdb843be3ae7e(λ31a61a25ed22.code, λ31a61a25ed22.reason);
              }, [ await λca2bbd3ff204, [] ];
            }
          }, "\x74\x72\x61\x6e\x73\x70\x6f\x72\x74", (λ31a61a25ed22, λ21dc7faa0f91) => λf0ee71997855.postMessage(λ31a61a25ed22, λ21dc7faa0f91));
          λf0ee71997855.onmessageerror = λ31a61a25ed22 => {
            console.error("\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x6f\x72\x74\x20\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λ31a61a25ed22);
          }, λf0ee71997855.onmessage = λ31a61a25ed22 => {
            λ21dc7faa0f91.recieve(λ31a61a25ed22.data);
          }, λ21dc7faa0f91.call("\x72\x65\x61\x64\x79", void 0, []);
        }
      };
      constructor(λf0ee71997855) {
        this.init = λf0ee71997855, (0, λfc2801196c9b.O)(), this.id = b(), this.config = λf66666167a64(λdb843be3ae7e, λf0ee71997855.config || {}), 
        this.studyjetConfig = λf66666167a64(λc8cae73b71a2, λ01091640872e.sb), this.studyjetConfig = λf66666167a64(this.studyjetConfig, λf0ee71997855.studyjetConfig || {}), 
        this.prefix = this.config.prefix + this.id + "\x2f", this.serviceWorkerController = λf0ee71997855.serviceworker, 
        this.ready = Promise.all([ new Promise(λ31a61a25ed22 => {
          this.readyResolve = λ31a61a25ed22;
        }), this.loadStudyJetWasm(), this.loadSavedCookies(!0) ]).then(() => void 0), this.rpc = new λ31a61a25ed22.C(this.methods, "\x74\x61\x62\x63\x68\x61\x6e\x6e\x65\x6c\x2d" + this.id, (λ31a61a25ed22, λf0ee71997855) => {
          if (!this.port) throw Error("\x50\x6f\x72\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64");
          this.port.postMessage(λ31a61a25ed22, λf0ee71997855);
        }), this.transport = λf0ee71997855.transport, this.cookieSyncChannel.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", this.onCookieSyncMessage), 
        this.setupMessagePort(), navigator.serviceWorker.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", λ31a61a25ed22 => {
          if (λ31a61a25ed22.data?.$controller$setCookie && "\x6f\x62\x6a\x65\x63\x74" == typeof λ31a61a25ed22.data.$controller$setCookie) {
            let λf0ee71997855 = λ31a61a25ed22.data.$controller$setCookie;
            if (λf0ee71997855.controllerId && λf0ee71997855.controllerId !== this.id) return;
            λf0ee71997855.options?.clear && this.cookieJar.clear(), this.applyCookieSyncEntries(λf0ee71997855.cookies), 
            "\x73\x74\x72\x69\x6e\x67" == typeof λf0ee71997855.id && this.serviceWorkerController.postMessage({
              $sw$setCookieDone: {
                id: λf0ee71997855.id
              }
            });
            return;
          }
          if (λ31a61a25ed22.data.$controller$swrevive) {
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
        let λ31a61a25ed22 = new MessageChannel;
        this.port = λ31a61a25ed22.port1, this.port.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", this.onTabChannelMessage), 
        this.port.start(), this.serviceWorkerController.postMessage({
          $controller$init: {
            prefix: this.prefix,
            id: this.id
          }
        }, [ λ31a61a25ed22.port2 ]);
      }
      applyCookieSyncEntries(λ31a61a25ed22) {
        if (Array.isArray(λ31a61a25ed22)) for (let λf0ee71997855 of λ31a61a25ed22) "\x73\x74\x72\x69\x6e\x67" == typeof λf0ee71997855?.url && "\x73\x74\x72\x69\x6e\x67" == typeof λf0ee71997855.cookie && this.cookieJar.setCookies(λf0ee71997855.cookie, new URL(λf0ee71997855.url));
      }
      async propagateCookieSync(λ31a61a25ed22, λf0ee71997855 = {}) {
        this.port && await this.rpc.call("\x73\x65\x6e\x64\x53\x65\x74\x43\x6f\x6f\x6b\x69\x65", {
          cookies: λ31a61a25ed22,
          options: λf0ee71997855
        });
      }
      async loadSavedCookies(λ31a61a25ed22 = !1) {
        if (λ31a61a25ed22 || this.cookieSyncDirty) return this.cookieSyncPromise || (this.cookieSyncPromise = (async () => {
          let λ31a61a25ed22 = await w();
          λ31a61a25ed22 && λ31a61a25ed22.updatedAt > this.cookieUpdatedAt && (this.cookieJar.load(λ31a61a25ed22.cookies), 
          this.cookieUpdatedAt = λ31a61a25ed22.updatedAt), this.cookieSyncDirty = !1;
        })().finally(() => {
          this.cookieSyncPromise = null;
        })), this.cookieSyncPromise;
      }
      async persistCookies() {
        let λ31a61a25ed22 = await k(this.cookieJar.dump(), this.cookieUpdatedAt);
        λ31a61a25ed22 <= this.cookieUpdatedAt || (this.cookieUpdatedAt = λ31a61a25ed22, 
        this.cookieSyncDirty = !1, this.cookieSyncChannel.postMessage({
          updatedAt: λ31a61a25ed22
        }));
      }
      setTransport(λ31a61a25ed22) {
        for (let λf0ee71997855 of (this.transport = λ31a61a25ed22, this.frames)) λf0ee71997855.controller.transport = λ31a61a25ed22, 
        λf0ee71997855.fetchHandler.client.transport = λ31a61a25ed22;
      }
      createFrame(λ31a61a25ed22, λf0ee71997855 = {}) {
        if (!this.ready) throw Error("\x43\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x69\x73\x20\x6e\x6f\x74\x20\x72\x65\x61\x64\x79\x21\x20\x54\x72\x79\x20\x61\x77\x61\x69\x74\x69\x6e\x67\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2e\x77\x61\x69\x74\x28\x29");
        let λ21dc7faa0f91 = new v(this, λ31a61a25ed22 ??= document.createElement("\x69\x66\x72\x61\x6d\x65"), λf0ee71997855);
        return this.frames.push(λ21dc7faa0f91), λ21dc7faa0f91;
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
            getInjectScripts: function e(λ31a61a25ed22, λf0ee71997855, λ21dc7faa0f91, λ45ef238a60a0, λ01091640872e, λca2bbd3ff204) {
              return (λfc2801196c9b, λdb843be3ae7e, λc8cae73b71a2, λ0a90bd9dcdc9) => {
                var λfae867df8a32;
                return [ λ0a90bd9dcdc9(λ31a61a25ed22.studyjetPath), λ0a90bd9dcdc9(λ21dc7faa0f91.href + λ31a61a25ed22.virtualWasmPath), λ0a90bd9dcdc9(λ31a61a25ed22.injectPath), λ0a90bd9dcdc9("data:text/javascript;charset=utf-8;base64," + (λfae867df8a32 = `\x0a\x09\x09\x09\x09\x09\x64\x6f\x63\x75\x6d\x65\x6e\x74\x2e\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63\x74\x6f\x72\x41\x6c\x6c\x28\x22\x73\x63\x72\x69\x70\x74\x5b\x73\x74\x75\x64\x79\x6a\x65\x74\x2d\x69\x6e\x6a\x65\x63\x74\x65\x64\x5d\x22\x29\x2e\x66\x6f\x72\x45\x61\x63\x68\x28\x73\x63\x72\x69\x70\x74\x20\x3d\x3e\x20\x73\x63\x72\x69\x70\x74\x2e\x72\x65\x6d\x6f\x76\x65\x28\x29\x29\x3b\x0a\x09\x09\x09\x09\x09\x24\x73\x74\x75\x64\x79\x6a\x65\x74\x43\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2e\x6c\x6f\x61\x64\x28\x7b\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x66\x69\x67\x3a\x20${JSON.stringify(λ31a61a25ed22)}\x2c\x0a\x09\x09\x09\x09\x09\x09\x73\x6a\x63\x6f\x6e\x66\x69\x67\x3a\x20${JSON.stringify(λf0ee71997855)}\x2c\x0a\x09\x09\x09\x09\x09\x09\x70\x72\x65\x66\x69\x78\x3a\x20\x6e\x65\x77\x20\x55\x52\x4c\x28\x22${λ21dc7faa0f91.href}\x22\x29\x2c\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6f\x6b\x69\x65\x73\x3a\x20${JSON.stringify(λ45ef238a60a0.dump())}\x2c\x0a\x09\x09\x09\x09\x09\x09\x79\x69\x65\x6c\x64\x47\x65\x74\x49\x6e\x6a\x65\x63\x74\x53\x63\x72\x69\x70\x74\x73\x3a\x20${e.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x45\x6e\x63\x6f\x64\x65\x3a\x20${λ01091640872e.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x44\x65\x63\x6f\x64\x65\x3a\x20${λca2bbd3ff204.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x69\x6e\x69\x74\x48\x65\x61\x64\x65\x72\x73\x3a\x20${JSON.stringify(λc8cae73b71a2.headers ?? [])}\x2c\x0a\x09\x09\x09\x09\x09\x09\x68\x69\x73\x74\x6f\x72\x79\x3a\x20${JSON.stringify(λc8cae73b71a2.history ?? [])}\x2c\x0a\x09\x09\x09\x09\x09\x7d\x29\x0a\x09\x09\x09\x09`, 
                btoa((new TextEncoder).encode(λfae867df8a32).reduce((λ31a61a25ed22, λf0ee71997855) => (λ31a61a25ed22.push(String.fromCharCode(λf0ee71997855)), 
                λ31a61a25ed22), []).join("")))) ];
              };
            }(this.controller.config, this.controller.studyjetConfig, new URL(this.prefix, location.href), this.controller.cookieJar, this.controller.config.codec.encode, this.controller.config.codec.decode),
            getWorkerInjectScripts: (λ31a61a25ed22, λf0ee71997855, λ21dc7faa0f91) => {
              var λ45ef238a60a0;
              let λ01091640872e = "";
              return λ01091640872e += λ21dc7faa0f91(this.controller.config.studyjetPath), λ01091640872e += λ21dc7faa0f91(this.prefix + this.controller.config.virtualWasmPath), 
              λ01091640872e += λ21dc7faa0f91("data:text/javascript;charset=utf-8;base64," + (λ45ef238a60a0 = `\x0a\x09\x09\x09\x09\x09\x28\x28\x29\x3d\x3e\x7b\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x7b\x20\x53\x74\x75\x64\x79\x4a\x65\x74\x43\x6c\x69\x65\x6e\x74\x2c\x20\x43\x6f\x6f\x6b\x69\x65\x4a\x61\x72\x2c\x20\x73\x65\x74\x57\x61\x73\x6d\x20\x7d\x20\x3d\x20\x24\x73\x74\x75\x64\x79\x6a\x65\x74\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x73\x65\x74\x57\x61\x73\x6d\x28\x55\x69\x6e\x74\x38\x41\x72\x72\x61\x79\x2e\x66\x72\x6f\x6d\x28\x61\x74\x6f\x62\x28\x73\x65\x6c\x66\x2e\x57\x41\x53\x4d\x29\x2c\x20\x28\x63\x29\x20\x3d\x3e\x20\x63\x2e\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74\x28\x30\x29\x29\x29\x3b\x0a\x09\x09\x09\x09\x09\x09\x64\x65\x6c\x65\x74\x65\x20\x73\x65\x6c\x66\x2e\x57\x41\x53\x4d\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x73\x6a\x63\x6f\x6e\x66\x69\x67\x20\x3d\x20${JSON.stringify(this.controller.studyjetConfig)}\x3b\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x70\x72\x65\x66\x69\x78\x20\x3d\x20\x6e\x65\x77\x20\x55\x52\x4c\x28\x22${this.prefix}\x22\x2c\x20\x6c\x6f\x63\x61\x74\x69\x6f\x6e\x2e\x68\x72\x65\x66\x29\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x3d\x20\x7b\x0a\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x66\x69\x67\x3a\x20\x73\x6a\x63\x6f\x6e\x66\x69\x67\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x70\x72\x65\x66\x69\x78\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x69\x6e\x74\x65\x72\x66\x61\x63\x65\x3a\x20\x7b\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x45\x6e\x63\x6f\x64\x65\x3a\x20${this.controller.config.codec.encode.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x44\x65\x63\x6f\x64\x65\x3a\x20${this.controller.config.codec.decode.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x7d\x2c\x0a\x09\x09\x09\x09\x09\x09\x7d\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x63\x6c\x69\x65\x6e\x74\x20\x3d\x20\x6e\x65\x77\x20\x53\x74\x75\x64\x79\x4a\x65\x74\x43\x6c\x69\x65\x6e\x74\x28\x67\x6c\x6f\x62\x61\x6c\x54\x68\x69\x73\x2c\x20\x7b\x0a\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x74\x65\x78\x74\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x3a\x20\x6e\x75\x6c\x6c\x2c\x0a\x09\x09\x09\x09\x09\x09\x7d\x29\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6c\x69\x65\x6e\x74\x2e\x68\x6f\x6f\x6b\x28\x29\x3b\x0a\x09\x09\x09\x09\x09\x7d\x29\x28\x29\x3b\x0a\x09\x09\x09\x09\x09`, 
              btoa((new TextEncoder).encode(λ45ef238a60a0).reduce((λ31a61a25ed22, λf0ee71997855) => (λ31a61a25ed22.push(String.fromCharCode(λf0ee71997855)), 
              λ31a61a25ed22), []).join(""))));
            },
            codecEncode: this.controller.config.codec.encode,
            codecDecode: this.controller.config.codec.decode
          }
        };
      }
      plugins=[];
      constructor(λ31a61a25ed22, λ21dc7faa0f91, λ45ef238a60a0 = {}) {
        for (const λfc2801196c9b of (this.controller = λ31a61a25ed22, this.element = λ21dc7faa0f91, 
        this.options = λ45ef238a60a0, this.id = b(), this.prefix = this.controller.prefix + this.id + "\x2f", 
        this.fetchHandler = new λ01091640872e.mK({
          crossOriginIsolated: self.crossOriginIsolated,
          context: this.context,
          transport: λ31a61a25ed22.transport,
          async sendSetCookie(λf0ee71997855, λ21dc7faa0f91) {
            await λ31a61a25ed22.persistCookies(), await λ31a61a25ed22.propagateCookieSync(λf0ee71997855.map(({url: λ31a61a25ed22, cookie: λf0ee71997855}) => ({
              url: λ31a61a25ed22.href,
              cookie: λf0ee71997855
            })), λ21dc7faa0f91);
          },
          fetchBlobUrl: async λ31a61a25ed22 => λf0ee71997855.Sr.fromNativeResponse(await fetch(λ31a61a25ed22)),
          fetchDataUrl: async λ31a61a25ed22 => λf0ee71997855.Sr.fromNativeResponse(await fetch(λ31a61a25ed22))
        }), this.hooks = {
          fetch: this.fetchHandler.hooks.fetch,
          init: λ01091640872e.Cx.create(),
          error: λ01091640872e.Cx.create()
        }, λ21dc7faa0f91[λca2bbd3ff204.I] = this, this.plugins = λ45ef238a60a0.plugins ?? [], 
        this.plugins)) {
          for (const λ31a61a25ed22 of λfc2801196c9b.dependencies) if (!this.plugins.find(λf0ee71997855 => λf0ee71997855.name === λ31a61a25ed22)) throw Error(`\x44\x65\x70\x65\x6e\x64\x65\x6e\x63\x79\x20${λ31a61a25ed22}\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x66\x6f\x72\x20\x70\x6c\x75\x67\x69\x6e\x20${λfc2801196c9b.name}`);
          λfc2801196c9b.install(this);
        }
      }
      getPlugin(λ31a61a25ed22) {
        let λf0ee71997855 = this.plugins.find(λf0ee71997855 => λf0ee71997855.name === λ31a61a25ed22);
        if (!λf0ee71997855) throw Error(`\x50\x6c\x75\x67\x69\x6e\x20${λ31a61a25ed22}\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64`);
        return λf0ee71997855;
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
      go(λ31a61a25ed22) {
        let λf0ee71997855 = (0, λ01091640872e.Oy)(λ31a61a25ed22, this.context, {
          origin: new URL(location.href),
          base: new URL(location.href)
        });
        this.element.src = λf0ee71997855;
      }
    }
  })(), $studyjetController = λ21dc7faa0f91;
})();
