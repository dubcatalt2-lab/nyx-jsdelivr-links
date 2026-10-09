var $studyjetController;

(() => {
  var λ7851716119e2 = {
    286(λ7851716119e2, λ9d7e9eeb9a60, λd41508e73827) {
      λd41508e73827.d(λ9d7e9eeb9a60, {
        I: () => λ2bb9d911bbef
      });
      let λ2bb9d911bbef = Symbol.for("\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x66\x72\x61\x6d\x65\x20\x68\x61\x6e\x64\x6c\x65");
    },
    355(λ7851716119e2, λ9d7e9eeb9a60, λd41508e73827) {
      λd41508e73827.d(λ9d7e9eeb9a60, {
        O: () => s,
        x: () => λ2bb9d911bbef
      });
      let λ2bb9d911bbef = "\x30\x2e\x30\x2e\x31\x34";
      function s() {
        if ("\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" == typeof $studyjet) throw Error("\x40\x6d\x65\x72\x63\x75\x72\x79\x77\x6f\x72\x6b\x73\x68\x6f\x70\x2f\x73\x74\x75\x64\x79\x6a\x65\x74\x20\x69\x73\x20\x6e\x6f\x74\x20\x6c\x6f\x61\x64\x65\x64\x2e\x20\x4c\x6f\x61\x64\x20\x73\x74\x75\x64\x79\x6a\x65\x74\x20\x62\x65\x66\x6f\x72\x65\x20\x74\x68\x65\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2e");
        var λ7851716119e2 = "\x32\x2e\x30\x2e\x36\x37\x2d\x61\x6c\x70\x68\x61\x2e\x32", λ9d7e9eeb9a60 = $studyjet.versionInfo.version;
        if (λ7851716119e2 !== λ9d7e9eeb9a60) throw Error(`\x40\x6d\x65\x72\x63\x75\x72\x79\x77\x6f\x72\x6b\x73\x68\x6f\x70\x2f\x73\x74\x75\x64\x79\x6a\x65\x74\x20\x76\x65\x72\x73\x69\x6f\x6e\x20\x6d\x69\x73\x6d\x61\x74\x63\x68\x3a\x20\x74\x68\x69\x73\x20\x62\x75\x69\x6c\x64\x20\x65\x78\x70\x65\x63\x74\x73\x20${λ7851716119e2}\x2c\x20\x62\x75\x74\x20\x74\x68\x65\x20\x6c\x6f\x61\x64\x65\x64\x20\x72\x75\x6e\x74\x69\x6d\x65\x20\x69\x73\x20${λ9d7e9eeb9a60}`);
      }
    },
    805(λ7851716119e2, λ9d7e9eeb9a60, λd41508e73827) {
      λd41508e73827.d(λ9d7e9eeb9a60, {
        C: () => o
      });
      class o {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λ7851716119e2, λ9d7e9eeb9a60, λd41508e73827) {
          this.methods = λ7851716119e2, this.id = λ9d7e9eeb9a60, this.sendRaw = λd41508e73827;
        }
        recieve(λ7851716119e2) {
          if (null == λ7851716119e2 || "\x6f\x62\x6a\x65\x63\x74" != typeof λ7851716119e2) return;
          let λ9d7e9eeb9a60 = λ7851716119e2[this.id];
          if (null == λ9d7e9eeb9a60 || "\x6f\x62\x6a\x65\x63\x74" != typeof λ9d7e9eeb9a60) return;
          let λd41508e73827 = λ9d7e9eeb9a60.$type;
          if ("\x72\x65\x73\x70\x6f\x6e\x73\x65" === λd41508e73827) {
            let λ7851716119e2 = λ9d7e9eeb9a60.$token, λd41508e73827 = λ9d7e9eeb9a60.$data, λ2bb9d911bbef = λ9d7e9eeb9a60.$error, λ8e71ed75f8f5 = this.promiseCallbacks.get(λ7851716119e2);
            if (!λ8e71ed75f8f5) return;
            this.promiseCallbacks.delete(λ7851716119e2), void 0 !== λ2bb9d911bbef ? λ8e71ed75f8f5.reject(Error(λ2bb9d911bbef)) : λ8e71ed75f8f5.resolve(λd41508e73827);
          } else if ("\x72\x65\x71\x75\x65\x73\x74" === λd41508e73827) {
            let λ7851716119e2 = λ9d7e9eeb9a60.$method, λd41508e73827 = λ9d7e9eeb9a60.$args;
            this.methods[λ7851716119e2](λd41508e73827).then(λ7851716119e2 => {
              this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ9d7e9eeb9a60.$token,
                  $data: λ7851716119e2?.[0]
                }
              }, λ7851716119e2?.[1]);
            }).catch(λ7851716119e2 => {
              console.error(λ7851716119e2), this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ9d7e9eeb9a60.$token,
                  $error: λ7851716119e2?.toString() || "\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x65\x72\x72\x6f\x72"
                }
              }, []);
            });
          }
        }
        call(λ7851716119e2, λ9d7e9eeb9a60, λd41508e73827 = []) {
          let λ2bb9d911bbef = this.counter++;
          return new Promise((λ8e71ed75f8f5, λfee6accc4d14) => {
            this.promiseCallbacks.set(λ2bb9d911bbef, {
              resolve: λ8e71ed75f8f5,
              reject: λfee6accc4d14
            }), this.sendRaw({
              [this.id]: {
                $type: "\x72\x65\x71\x75\x65\x73\x74",
                $method: λ7851716119e2,
                $args: λ9d7e9eeb9a60,
                $token: λ2bb9d911bbef
              }
            }, λd41508e73827);
          });
        }
      }
    },
    986(λ7851716119e2) {
      let λ9d7e9eeb9a60 = Object.getPrototypeOf({});
      function r() {
        return function(λ7851716119e2) {
          return "\x6f\x62\x6a\x65\x63\x74" == typeof λ7851716119e2 && null !== λ7851716119e2 && !(λ7851716119e2 instanceof RegExp) && !(λ7851716119e2 instanceof Date);
        };
      }
      function o(λ7851716119e2) {
        function o(λ7851716119e2) {
          return "\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72" !== λ7851716119e2 && "\x70\x72\x6f\x74\x6f\x74\x79\x70\x65" !== λ7851716119e2 && "\x5f\x5f\x70\x72\x6f\x74\x6f\x5f\x5f" !== λ7851716119e2;
        }
        let λd41508e73827 = Object.prototype.propertyIsEnumerable, λ2bb9d911bbef = λ7851716119e2?.symbols ? function(λ7851716119e2) {
          let λ9d7e9eeb9a60 = Object.keys(λ7851716119e2), λ2bb9d911bbef = Object.getOwnPropertySymbols(λ7851716119e2);
          for (let λ8e71ed75f8f5 = 0, λfee6accc4d14 = λ2bb9d911bbef.length; λ8e71ed75f8f5 < λfee6accc4d14; ++λ8e71ed75f8f5) λd41508e73827.call(λ7851716119e2, λ2bb9d911bbef[λ8e71ed75f8f5]) && λ9d7e9eeb9a60.push(λ2bb9d911bbef[λ8e71ed75f8f5]);
          return λ9d7e9eeb9a60;
        } : Object.keys, λ8e71ed75f8f5 = "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ7851716119e2?.cloneProtoObject ? λ7851716119e2.cloneProtoObject : void 0, λfee6accc4d14 = "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ7851716119e2?.isMergeableObject ? λ7851716119e2.isMergeableObject : r(), λee6f6d55cb74 = λ7851716119e2?.onlyDefinedProperties === !0, λ73d75a6fad96 = λ7851716119e2 && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ7851716119e2.mergeArray ? λ7851716119e2.mergeArray({
          clone: d,
          deepmerge: h,
          getKeys: λ2bb9d911bbef,
          isMergeableObject: λfee6accc4d14
        }) : function(λ7851716119e2, λ9d7e9eeb9a60) {
          let λd41508e73827 = λ7851716119e2.length, λ2bb9d911bbef = λ9d7e9eeb9a60.length, λ8e71ed75f8f5 = 0, λfee6accc4d14 = Array(λd41508e73827 + λ2bb9d911bbef);
          for (;λ8e71ed75f8f5 < λd41508e73827; ++λ8e71ed75f8f5) λfee6accc4d14[λ8e71ed75f8f5] = d(λ7851716119e2[λ8e71ed75f8f5]);
          for (λ8e71ed75f8f5 = 0; λ8e71ed75f8f5 < λ2bb9d911bbef; ++λ8e71ed75f8f5) λfee6accc4d14[λ8e71ed75f8f5 + λd41508e73827] = d(λ9d7e9eeb9a60[λ8e71ed75f8f5]);
          return λfee6accc4d14;
        };
        function d(λ7851716119e2) {
          return λfee6accc4d14(λ7851716119e2) ? Array.isArray(λ7851716119e2) ? function(λ7851716119e2) {
            let λ9d7e9eeb9a60 = 0, λd41508e73827 = λ7851716119e2.length, λ2bb9d911bbef = Array(λd41508e73827);
            for (;λ9d7e9eeb9a60 < λd41508e73827; ++λ9d7e9eeb9a60) λ2bb9d911bbef[λ9d7e9eeb9a60] = d(λ7851716119e2[λ9d7e9eeb9a60]);
            return λ2bb9d911bbef;
          }(λ7851716119e2) : function(λ7851716119e2) {
            let λd41508e73827, λfee6accc4d14, λee6f6d55cb74, λ73d75a6fad96 = {};
            if (λ8e71ed75f8f5 && Object.getPrototypeOf(λ7851716119e2) !== λ9d7e9eeb9a60) return λ8e71ed75f8f5(λ7851716119e2);
            let λ348084647bdb = λ2bb9d911bbef(λ7851716119e2);
            for (λd41508e73827 = 0, λfee6accc4d14 = λ348084647bdb.length; λd41508e73827 < λfee6accc4d14; ++λd41508e73827) o(λee6f6d55cb74 = λ348084647bdb[λd41508e73827]) && (λ73d75a6fad96[λee6f6d55cb74] = d(λ7851716119e2[λee6f6d55cb74]));
            return λ73d75a6fad96;
          }(λ7851716119e2) : λ7851716119e2;
        }
        function h(λ7851716119e2, λd41508e73827) {
          if (λee6f6d55cb74 && void 0 === λd41508e73827) return d(λ7851716119e2);
          let λ348084647bdb = Array.isArray(λd41508e73827), λ454020a95a17 = Array.isArray(λ7851716119e2);
          return "\x6f\x62\x6a\x65\x63\x74" != typeof λd41508e73827 || null === λd41508e73827 ? λd41508e73827 : λfee6accc4d14(λ7851716119e2) ? λ348084647bdb && λ454020a95a17 ? λ73d75a6fad96(λ7851716119e2, λd41508e73827) : λ348084647bdb !== λ454020a95a17 ? d(λd41508e73827) : function(λ7851716119e2, λd41508e73827) {
            let λ73d75a6fad96, λ348084647bdb, λ454020a95a17, λ712066ef3738 = {}, λe3fe54f739d8 = λ2bb9d911bbef(λ7851716119e2), λ968b895fff8d = λ2bb9d911bbef(λd41508e73827);
            for (λ73d75a6fad96 = 0, λ348084647bdb = λe3fe54f739d8.length; λ73d75a6fad96 < λ348084647bdb; ++λ73d75a6fad96) o(λ454020a95a17 = λe3fe54f739d8[λ73d75a6fad96]) && -1 === λ968b895fff8d.indexOf(λ454020a95a17) && (λ712066ef3738[λ454020a95a17] = d(λ7851716119e2[λ454020a95a17]));
            for (λ73d75a6fad96 = 0, λ348084647bdb = λ968b895fff8d.length; λ73d75a6fad96 < λ348084647bdb; ++λ73d75a6fad96) if (o(λ454020a95a17 = λ968b895fff8d[λ73d75a6fad96])) if (λ454020a95a17 in λ7851716119e2) -1 !== λe3fe54f739d8.indexOf(λ454020a95a17) && (λ8e71ed75f8f5 && λfee6accc4d14(λd41508e73827[λ454020a95a17]) && Object.getPrototypeOf(λd41508e73827[λ454020a95a17]) !== λ9d7e9eeb9a60 ? λ712066ef3738[λ454020a95a17] = λ8e71ed75f8f5(λd41508e73827[λ454020a95a17]) : λ712066ef3738[λ454020a95a17] = h(λ7851716119e2[λ454020a95a17], λd41508e73827[λ454020a95a17])); else {
              if (λee6f6d55cb74 && void 0 === λd41508e73827[λ454020a95a17]) continue;
              λ712066ef3738[λ454020a95a17] = d(λd41508e73827[λ454020a95a17]);
            }
            return λ712066ef3738;
          }(λ7851716119e2, λd41508e73827) : d(λd41508e73827);
        }
        return λ7851716119e2?.all ? function() {
          let λ7851716119e2;
          switch (arguments.length) {
           case 0:
            return {};

           case 1:
            return d(arguments[0]);

           case 2:
            return h(arguments[0], arguments[1]);
          }
          for (let λ9d7e9eeb9a60 = 0, λd41508e73827 = arguments.length; λ9d7e9eeb9a60 < λd41508e73827; ++λ9d7e9eeb9a60) λ7851716119e2 = h(λ7851716119e2, arguments[λ9d7e9eeb9a60]);
          return λ7851716119e2;
        } : h;
      }
      λ7851716119e2.exports = o, λ7851716119e2.exports.default = o, λ7851716119e2.exports.deepmerge = o, 
      Object.defineProperty(λ7851716119e2.exports, "\x69\x73\x4d\x65\x72\x67\x65\x61\x62\x6c\x65\x4f\x62\x6a\x65\x63\x74", {
        get: r
      });
    },
    235(λ7851716119e2, λ9d7e9eeb9a60, λd41508e73827) {
      λd41508e73827.d(λ9d7e9eeb9a60, {
        Sr: () => s
      }), WebSocket.CLOSED, WebSocket.CONNECTING, WebSocket.OPEN, EventTarget;
      let λ2bb9d911bbef = [ 101, 204, 205, 304 ];
      class s extends Response {
        url;
        rawHeaders;
        redirected=!1;
        static fromTransferrableResponse(λ7851716119e2, λ9d7e9eeb9a60) {
          let λd41508e73827 = new s(λ2bb9d911bbef.includes(λ7851716119e2.status) ? void 0 : λ7851716119e2.body, {
            headers: new Headers(λ7851716119e2.headers),
            status: λ7851716119e2.status,
            statusText: λ7851716119e2.statusText
          });
          return λd41508e73827.url = λ9d7e9eeb9a60, λd41508e73827.redirected = λ7851716119e2.status >= 300 && λ7851716119e2.status < 400 && void 0 !== λ7851716119e2.headers.location, 
          λd41508e73827.rawHeaders = λ7851716119e2.headers, λd41508e73827;
        }
        static fromNativeResponse(λ7851716119e2) {
          let λ9d7e9eeb9a60 = new s(λ2bb9d911bbef.includes(λ7851716119e2.status) ? void 0 : λ7851716119e2.body, {
            headers: λ7851716119e2.headers,
            status: λ7851716119e2.status,
            statusText: λ7851716119e2.statusText
          });
          return λ9d7e9eeb9a60.url = λ7851716119e2.url, λ9d7e9eeb9a60.rawHeaders = [ ...λ7851716119e2.headers ], 
          λ9d7e9eeb9a60.redirected = λ7851716119e2.redirected, λ9d7e9eeb9a60;
        }
      }
    },
    423(λ7851716119e2, λ9d7e9eeb9a60, λd41508e73827) {
      λd41508e73827.d(λ9d7e9eeb9a60, {
        Cx: () => λa6e1950413ff,
        Oy: () => λ2016e24bf013,
        cP: () => λ8e71ed75f8f5,
        ht: () => λc5397e44eff6,
        k_: () => λee6f6d55cb74,
        mK: () => λ712066ef3738,
        sb: () => λ4c91262b9fd6,
        uh: () => λ968b895fff8d
      });
      let {BareResponse: λ2bb9d911bbef, CookieJar: λ8e71ed75f8f5, IncrementalHtmlRewriter: λfee6accc4d14, Plugin: λee6f6d55cb74, STUDYJETCLIENT: λ73d75a6fad96, STUDYJETCLIENTNAME: λ348084647bdb, StudyJetClient: λ454020a95a17, StudyJetFetchHandler: λ712066ef3738, StudyJetFetchTrackedClient: λe3fe54f739d8, StudyJetHeaders: λ968b895fff8d, Tap: λa6e1950413ff, \u{63}\u{72}\u{65}\u{61}\u{74}\u{65}\u{4c}\u{6f}\u{63}\u{61}\u{74}\u{69}\u{6f}\u{6e}\u{50}\u{72}\u{6f}\u{78}\u{79}: λ28ccafeda77b, defaultConfig: λ4c91262b9fd6, defaultConfigDev: λc713cb590cb8, flagEnabled: λd2843aa2922d, getOwnPropertyDescriptorHandler: λ52fedabdfdd9, getRewriter: λ552612059c01, getScriptBlockTypeString: λ702452640cf5, htmlRules: λ5fac45d4f490, isArchiveMimeType: λf455a82540da, isAudioOrVideoMimeType: λec43adc1918b, isFontMimeType: λc3c19e3fc043, isHtmlMimeType: λ07856de0a8c3, isImageMimeType: λ14a0cda3a347, isInlineDisplayableMimeType: λ952422a8efaa, isJavascriptMimeType: λ3764aec3aac7, isJavascriptMimeTypeEssenceMatch: λ573f8723e87b, isModuleScriptType: λ763644ac96a2, isScriptType: λ1951274ce90f, isScriptableMimeType: λ6d7359626525, isXmlMimeType: λfbf1ef39b679, isZipBasedMimeType: λdaa99ded96a6, isdedicated: λefd56779acfc, isshared: λ4a61d6d2587a, issw: λcd32b7f9d0af, iswindow: λc74dc30fc0b6, isworker: λbbc596cab878, parseMimeType: λd7fc9e3289f1, rewriteBlob: λd9bf4fbf8f08, rewriteCss: λ4369bd606717, rewriteHtml: λcb8f0e0ac160, rewriteJs: λ89c75c4ff88e, rewriteJsInner: λ68c484a44f75, rewriteSrcset: λ4ecdd70b938b, rewriteUrl: λ2016e24bf013, rewriteWorkers: λ0065fb2a0a31, setWasm: λc5397e44eff6, unrewriteBlob: λc624085925ce, unrewriteCss: λa52cc8f92fcb, unrewriteHtml: λ8feac9e8cda3, unrewriteUrl: λc4c4ef41326d, versionInfo: λ6fcbfe99c015} = globalThis.$studyjet;
    }
  }, λ9d7e9eeb9a60 = {};
  function r(λd41508e73827) {
    var λ2bb9d911bbef = λ9d7e9eeb9a60[λd41508e73827];
    if (void 0 !== λ2bb9d911bbef) return λ2bb9d911bbef.exports;
    var λ8e71ed75f8f5 = λ9d7e9eeb9a60[λd41508e73827] = {
      exports: {}
    };
    return λ7851716119e2[λd41508e73827](λ8e71ed75f8f5, λ8e71ed75f8f5.exports, r), λ8e71ed75f8f5.exports;
  }
  r.n = λ7851716119e2 => {
    var λ9d7e9eeb9a60 = λ7851716119e2 && λ7851716119e2.__esModule ? () => λ7851716119e2.default : () => λ7851716119e2;
    return r.d(λ9d7e9eeb9a60, {
      a: λ9d7e9eeb9a60
    }), λ9d7e9eeb9a60;
  }, r.d = (λ7851716119e2, λ9d7e9eeb9a60) => {
    for (var λd41508e73827 in λ9d7e9eeb9a60) r.o(λ9d7e9eeb9a60, λd41508e73827) && !r.o(λ7851716119e2, λd41508e73827) && Object.defineProperty(λ7851716119e2, λd41508e73827, {
      enumerable: !0,
      get: λ9d7e9eeb9a60[λd41508e73827]
    });
  }, r.o = (λ7851716119e2, λ9d7e9eeb9a60) => Object.prototype.hasOwnProperty.call(λ7851716119e2, λ9d7e9eeb9a60), 
  r.r = λ7851716119e2 => {
    "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λ7851716119e2, Symbol.toStringTag, {
      value: "\x4d\x6f\x64\x75\x6c\x65"
    }), Object.defineProperty(λ7851716119e2, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
      value: !0
    });
  };
  var λd41508e73827 = {};
  (() => {
    r.r(λd41508e73827), r.d(λd41508e73827, {
      Controller: () => S,
      Frame: () => v,
      ManagedPlugin: () => d,
      VERSION: () => λee6f6d55cb74.x,
      assertRuntimeStudyJetVersion: () => λee6f6d55cb74.O,
      config: () => λ73d75a6fad96
    });
    var λ7851716119e2 = r(805), λ9d7e9eeb9a60 = r(235), λ2bb9d911bbef = r(986), λ8e71ed75f8f5 = r(423), λfee6accc4d14 = r(286), λee6f6d55cb74 = r(355);
    let λ73d75a6fad96 = {
      prefix: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x7e\x2f\x73\x74\x75\x64\x79\x2f",
      studyjetPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x73\x74\x75\x64\x79\x6a\x65\x74\x2f\x40\x72\x36\x39\x63\x31\x38\x66\x39\x62\x64\x34\x65\x64\x31\x37\x35\x63\x39\x65\x61\x35\x30\x35\x62\x38\x21\x2e\x6a\x73",
      \u{69}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{50}\u{61}\u{74}\u{68}: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2f\x40\x72\x39\x65\x38\x35\x35\x61\x63\x38\x32\x65\x64\x63\x34\x62\x35\x31\x65\x31\x33\x34\x30\x35\x36\x34\x21\x2e\x6a\x73",
      wasmPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x73\x74\x75\x64\x79\x6a\x65\x74\x2f\x40\x72\x35\x35\x32\x38\x36\x63\x66\x65\x30\x39\x64\x37\x34\x31\x30\x32\x33\x63\x63\x33\x65\x31\x64\x36\x21\x2e\x77\x61\x73\x6d",
      virtualWasmPath: "\x73\x74\x75\x64\x79\x6a\x65\x74\x2e\x77\x61\x73\x6d\x2e\x6a\x73",
      codec: {
        encode: λ7851716119e2 => λ7851716119e2 ? encodeURIComponent(λ7851716119e2) : λ7851716119e2,
        decode: λ7851716119e2 => λ7851716119e2 ? decodeURIComponent(λ7851716119e2) : λ7851716119e2
      }
    }, λ348084647bdb = {
      flags: {
        ...λ8e71ed75f8f5.sb.flags,
        allowFailedIntercepts: !0
      },
      maskedfiles: [ "\x69\x6e\x6a\x65\x63\x74\x2e\x6a\x73", "\x73\x74\x75\x64\x79\x6a\x65\x74\x2e\x77\x61\x73\x6d\x2e\x6a\x73" ]
    };
    class d extends λ8e71ed75f8f5.k_ {
      frame=null;
      dependencies=[];
      constructor(λ7851716119e2, λ9d7e9eeb9a60) {
        super(λ7851716119e2), this.dependencies = λ9d7e9eeb9a60;
      }
      install(λ7851716119e2) {
        this.frame = λ7851716119e2;
      }
    }
    let λ454020a95a17 = "\x73\x74\x61\x74\x65", λ712066ef3738 = "\x63\x6f\x6f\x6b\x69\x65\x73", λe3fe54f739d8 = null;
    function u(λ7851716119e2) {
      return "\x6f\x62\x6a\x65\x63\x74" == typeof λ7851716119e2 && null !== λ7851716119e2 && "\x6e\x75\x6d\x62\x65\x72" == typeof λ7851716119e2.updatedAt && Number.isFinite(λ7851716119e2.updatedAt) && "\x73\x74\x72\x69\x6e\x67" == typeof λ7851716119e2.cookies ? λ7851716119e2 : null;
    }
    function y(λ7851716119e2) {
      return new Promise((λ9d7e9eeb9a60, λd41508e73827) => {
        λ7851716119e2.onsuccess = () => λ9d7e9eeb9a60(λ7851716119e2.result), λ7851716119e2.onerror = () => λd41508e73827(λ7851716119e2.error ?? Error("\x49\x6e\x64\x65\x78\x65\x64\x44\x42\x20\x72\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64"));
      });
    }
    function m(λ7851716119e2) {
      return new Promise((λ9d7e9eeb9a60, λd41508e73827) => {
        λ7851716119e2.oncomplete = () => λ9d7e9eeb9a60(), λ7851716119e2.onabort = () => λd41508e73827(λ7851716119e2.error ?? Error("\x49\x6e\x64\x65\x78\x65\x64\x44\x42\x20\x74\x72\x61\x6e\x73\x61\x63\x74\x69\x6f\x6e\x20\x61\x62\x6f\x72\x74\x65\x64")), 
        λ7851716119e2.onerror = () => λd41508e73827(λ7851716119e2.error ?? Error("\x49\x6e\x64\x65\x78\x65\x64\x44\x42\x20\x74\x72\x61\x6e\x73\x61\x63\x74\x69\x6f\x6e\x20\x66\x61\x69\x6c\x65\x64"));
      });
    }
    function g() {
      return λe3fe54f739d8 || (λe3fe54f739d8 = new Promise((λ7851716119e2, λ9d7e9eeb9a60) => {
        let λd41508e73827 = indexedDB.open("\x40\x64\x39\x34\x31\x62\x63\x36\x35\x61\x66\x33", 1);
        λd41508e73827.onupgradeneeded = () => {
          let λ7851716119e2 = λd41508e73827.result;
          λ7851716119e2.objectStoreNames.contains(λ454020a95a17) || λ7851716119e2.createObjectStore(λ454020a95a17);
        }, λd41508e73827.onsuccess = () => λ7851716119e2(λd41508e73827.result), λd41508e73827.onerror = () => λ9d7e9eeb9a60(λd41508e73827.error ?? Error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x6f\x70\x65\x6e\x20\x63\x6f\x6f\x6b\x69\x65\x20\x64\x61\x74\x61\x62\x61\x73\x65"));
      }));
    }
    async function w() {
      try {
        let λ7851716119e2 = (await g()).transaction(λ454020a95a17, "\x72\x65\x61\x64\x6f\x6e\x6c\x79"), λ9d7e9eeb9a60 = λ7851716119e2.objectStore(λ454020a95a17), λd41508e73827 = await y(λ9d7e9eeb9a60.get(λ712066ef3738));
        return await m(λ7851716119e2), u(λd41508e73827);
      } catch (λ7851716119e2) {
        return console.error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x72\x65\x61\x64\x20\x70\x65\x72\x73\x69\x73\x74\x65\x64\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x63\x6f\x6f\x6b\x69\x65\x73\x3a", λ7851716119e2), 
        null;
      }
    }
    async function k(λ7851716119e2, λ9d7e9eeb9a60) {
      try {
        let λd41508e73827 = (await g()).transaction(λ454020a95a17, "\x72\x65\x61\x64\x77\x72\x69\x74\x65"), λ2bb9d911bbef = λd41508e73827.objectStore(λ454020a95a17), λ8e71ed75f8f5 = u(await y(λ2bb9d911bbef.get(λ712066ef3738))), λfee6accc4d14 = Math.max(Date.now(), λ9d7e9eeb9a60 + 1, (λ8e71ed75f8f5?.updatedAt ?? 0) + 1);
        return λ2bb9d911bbef.put({
          updatedAt: λfee6accc4d14,
          cookies: λ7851716119e2
        }, λ712066ef3738), await m(λd41508e73827), λfee6accc4d14;
      } catch (λ7851716119e2) {
        return console.error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x70\x65\x72\x73\x69\x73\x74\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x63\x6f\x6f\x6b\x69\x65\x73\x3a", λ7851716119e2), λ9d7e9eeb9a60;
      }
    }
    function b() {
      return Math.random().toString(36).substring(2, 10);
    }
    let λ968b895fff8d = (0, λ2bb9d911bbef.deepmerge)();
    class S {
      init;
      id;
      config;
      studyjetConfig;
      prefix;
      cookieJar=new λ8e71ed75f8f5.cP;
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
      onTabChannelMessage=λ7851716119e2 => {
        this.rpc.recieve(λ7851716119e2.data);
      };
      onCookieSyncMessage=λ7851716119e2 => {
        let λ9d7e9eeb9a60 = "\x6f\x62\x6a\x65\x63\x74" == typeof λ7851716119e2.data && null !== λ7851716119e2.data ? λ7851716119e2.data.updatedAt : void 0;
        "\x6e\x75\x6d\x62\x65\x72" != typeof λ9d7e9eeb9a60 || λ9d7e9eeb9a60 <= this.cookieUpdatedAt || (this.cookieSyncDirty = !0, 
        this.loadSavedCookies());
      };
      async loadStudyJetWasm() {
        if (this.wasmAlreadyFetched) return;
        let λ7851716119e2 = await fetch(this.config.wasmPath);
        (0, λ8e71ed75f8f5.ht)(await λ7851716119e2.arrayBuffer()), this.wasmAlreadyFetched = !0;
      }
      methods={
        ready: async () => {
          this.readyResolve(), setTimeout(() => {
            this.guardServiceWorkerRevive = !1;
          }, 5e3);
        },
        request: async λ7851716119e2 => {
          let λ9d7e9eeb9a60 = new URL(λ7851716119e2.rawUrl).pathname, λd41508e73827 = this.frames.find(λ7851716119e2 => λ9d7e9eeb9a60.startsWith(λ7851716119e2.prefix));
          if (!λd41508e73827) throw Error("\x4e\x6f\x20\x66\x72\x61\x6d\x65\x20\x66\x6f\x75\x6e\x64\x20\x66\x6f\x72\x20\x72\x65\x71\x75\x65\x73\x74");
          try {
            if (await this.loadSavedCookies(), λ9d7e9eeb9a60 === λd41508e73827.prefix + this.config.virtualWasmPath) {
              if (!this.wasmPayload) {
                let λ7851716119e2 = await fetch(this.config.wasmPath), λ9d7e9eeb9a60 = await λ7851716119e2.arrayBuffer(), λd41508e73827 = btoa(new Uint8Array(λ9d7e9eeb9a60).reduce((λ7851716119e2, λ9d7e9eeb9a60) => (λ7851716119e2.push(String.fromCharCode(λ9d7e9eeb9a60)), 
                λ7851716119e2), []).join(""));
                this.wasmPayload = `\x73\x65\x6c\x66\x2e\x57\x41\x53\x4d\x20\x3d\x20\x27${λd41508e73827}\x27\x3b`;
              }
              return [ {
                body: this.wasmPayload,
                status: 200,
                statusText: "\x4f\x4b",
                headers: [ [ "\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65", "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x61\x76\x61\x73\x63\x72\x69\x70\x74" ] ]
              }, [] ];
            }
            let λ2bb9d911bbef = λ8e71ed75f8f5.uh.fromRawHeaders(λ7851716119e2.initialHeaders), λfee6accc4d14 = await λd41508e73827.fetchHandler.handleFetch({
              initialHeaders: λ2bb9d911bbef,
              rawClientUrl: λ7851716119e2.rawClientUrl ? new URL(λ7851716119e2.rawClientUrl) : void 0,
              rawUrl: new URL(λ7851716119e2.rawUrl),
              rawReferrer: λ7851716119e2.rawReferrer,
              rawDestination: λ7851716119e2.destination,
              method: λ7851716119e2.method,
              mode: λ7851716119e2.mode,
              referrer: λ7851716119e2.referrer,
              body: λ7851716119e2.body,
              cache: λ7851716119e2.cache,
              clientId: λ7851716119e2.clientId
            });
            return [ {
              body: λfee6accc4d14.body,
              status: λfee6accc4d14.status,
              statusText: λfee6accc4d14.statusText,
              headers: λfee6accc4d14.headers.toRawHeaders()
            }, λfee6accc4d14.body instanceof ReadableStream || λfee6accc4d14.body instanceof ArrayBuffer ? [ λfee6accc4d14.body ] : [] ];
          } catch (λ9d7e9eeb9a60) {
            let λ2bb9d911bbef = {
              setResponse: void 0,
              suppressError: !1
            };
            if (await λ8e71ed75f8f5.Cx.dispatch(λd41508e73827.hooks.error.request, {
              rawrequest: λ7851716119e2,
              error: λ9d7e9eeb9a60
            }, λ2bb9d911bbef), λ2bb9d911bbef.suppressError || console.error("\x45\x72\x72\x6f\x72\x20\x69\x6e\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x72\x65\x71\x75\x65\x73\x74\x20\x68\x61\x6e\x64\x6c\x65\x72\x3a", λ9d7e9eeb9a60), 
            λ2bb9d911bbef.setResponse) return [ λ2bb9d911bbef.setResponse, [] ];
            throw λ9d7e9eeb9a60;
          }
        },
        initRemoteTransport: async λ9d7e9eeb9a60 => {
          let λd41508e73827 = new λ7851716119e2.C({
            request: async ({remote: λ7851716119e2, method: λ9d7e9eeb9a60, body: λd41508e73827, headers: λ2bb9d911bbef}) => {
              let λ8e71ed75f8f5 = await this.transport.request(new URL(λ7851716119e2), λ9d7e9eeb9a60, λd41508e73827, λ2bb9d911bbef, void 0);
              return [ λ8e71ed75f8f5, [ λ8e71ed75f8f5.body ] ];
            },
            sendSetCookie: async ({cookies: λ7851716119e2, options: λ9d7e9eeb9a60}) => {
              await this.loadSavedCookies(!0), λ9d7e9eeb9a60?.clear && this.cookieJar.clear(), 
              this.applyCookieSyncEntries(λ7851716119e2), await this.persistCookies(), await this.propagateCookieSync(λ7851716119e2, λ9d7e9eeb9a60);
            },
            connect: async ({url: λ7851716119e2, protocols: λ9d7e9eeb9a60, requestHeaders: λd41508e73827, port: λ2bb9d911bbef}) => {
              let λ8e71ed75f8f5, λfee6accc4d14 = new Promise(λ7851716119e2 => λ8e71ed75f8f5 = λ7851716119e2), [λee6f6d55cb74, λ73d75a6fad96] = this.transport.connect(new URL(λ7851716119e2), λ9d7e9eeb9a60, λd41508e73827, (λ7851716119e2, λ9d7e9eeb9a60) => {
                λ8e71ed75f8f5({
                  result: "\x73\x75\x63\x63\x65\x73\x73",
                  protocol: λ7851716119e2,
                  extensions: λ9d7e9eeb9a60
                });
              }, λ7851716119e2 => {
                λ2bb9d911bbef.postMessage({
                  type: "\x64\x61\x74\x61",
                  data: λ7851716119e2
                }, λ7851716119e2 instanceof ArrayBuffer ? [ λ7851716119e2 ] : []);
              }, (λ7851716119e2, λ9d7e9eeb9a60) => {
                λ2bb9d911bbef.postMessage({
                  type: "\x63\x6c\x6f\x73\x65",
                  code: λ7851716119e2,
                  reason: λ9d7e9eeb9a60
                });
              }, λ7851716119e2 => {
                λ8e71ed75f8f5({
                  result: "\x66\x61\x69\x6c\x75\x72\x65",
                  error: λ7851716119e2
                });
              });
              return λ2bb9d911bbef.onmessageerror = λ7851716119e2 => {
                console.error("\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x6f\x72\x74\x20\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λ7851716119e2);
              }, λ2bb9d911bbef.onmessage = ({data: λ7851716119e2}) => {
                "\x64\x61\x74\x61" === λ7851716119e2.type ? λee6f6d55cb74(λ7851716119e2.data) : "\x63\x6c\x6f\x73\x65" === λ7851716119e2.type && λ73d75a6fad96(λ7851716119e2.code, λ7851716119e2.reason);
              }, [ await λfee6accc4d14, [] ];
            }
          }, "\x74\x72\x61\x6e\x73\x70\x6f\x72\x74", (λ7851716119e2, λd41508e73827) => λ9d7e9eeb9a60.postMessage(λ7851716119e2, λd41508e73827));
          λ9d7e9eeb9a60.onmessageerror = λ7851716119e2 => {
            console.error("\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x6f\x72\x74\x20\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λ7851716119e2);
          }, λ9d7e9eeb9a60.onmessage = λ7851716119e2 => {
            λd41508e73827.recieve(λ7851716119e2.data);
          }, λd41508e73827.call("\x72\x65\x61\x64\x79", void 0, []);
        }
      };
      constructor(λ9d7e9eeb9a60) {
        this.init = λ9d7e9eeb9a60, (0, λee6f6d55cb74.O)(), this.id = b(), this.config = λ968b895fff8d(λ73d75a6fad96, λ9d7e9eeb9a60.config || {}), 
        this.studyjetConfig = λ968b895fff8d(λ348084647bdb, λ8e71ed75f8f5.sb), this.studyjetConfig = λ968b895fff8d(this.studyjetConfig, λ9d7e9eeb9a60.studyjetConfig || {}), 
        this.prefix = this.config.prefix + this.id + "\x2f", this.serviceWorkerController = λ9d7e9eeb9a60.serviceworker, 
        this.ready = Promise.all([ new Promise(λ7851716119e2 => {
          this.readyResolve = λ7851716119e2;
        }), this.loadStudyJetWasm(), this.loadSavedCookies(!0) ]).then(() => void 0), this.rpc = new λ7851716119e2.C(this.methods, "\x74\x61\x62\x63\x68\x61\x6e\x6e\x65\x6c\x2d" + this.id, (λ7851716119e2, λ9d7e9eeb9a60) => {
          if (!this.port) throw Error("\x50\x6f\x72\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64");
          this.port.postMessage(λ7851716119e2, λ9d7e9eeb9a60);
        }), this.transport = λ9d7e9eeb9a60.transport, this.cookieSyncChannel.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", this.onCookieSyncMessage), 
        this.setupMessagePort(), navigator.serviceWorker.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", λ7851716119e2 => {
          if (λ7851716119e2.data?.$controller$setCookie && "\x6f\x62\x6a\x65\x63\x74" == typeof λ7851716119e2.data.$controller$setCookie) {
            let λ9d7e9eeb9a60 = λ7851716119e2.data.$controller$setCookie;
            if (λ9d7e9eeb9a60.controllerId && λ9d7e9eeb9a60.controllerId !== this.id) return;
            λ9d7e9eeb9a60.options?.clear && this.cookieJar.clear(), this.applyCookieSyncEntries(λ9d7e9eeb9a60.cookies), 
            "\x73\x74\x72\x69\x6e\x67" == typeof λ9d7e9eeb9a60.id && this.serviceWorkerController.postMessage({
              $sw$setCookieDone: {
                id: λ9d7e9eeb9a60.id
              }
            });
            return;
          }
          if (λ7851716119e2.data.$controller$swrevive) {
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
        let λ7851716119e2 = new MessageChannel;
        this.port = λ7851716119e2.port1, this.port.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", this.onTabChannelMessage), 
        this.port.start(), this.serviceWorkerController.postMessage({
          $controller$init: {
            prefix: this.prefix,
            id: this.id
          }
        }, [ λ7851716119e2.port2 ]);
      }
      applyCookieSyncEntries(λ7851716119e2) {
        if (Array.isArray(λ7851716119e2)) for (let λ9d7e9eeb9a60 of λ7851716119e2) "\x73\x74\x72\x69\x6e\x67" == typeof λ9d7e9eeb9a60?.url && "\x73\x74\x72\x69\x6e\x67" == typeof λ9d7e9eeb9a60.cookie && this.cookieJar.setCookies(λ9d7e9eeb9a60.cookie, new URL(λ9d7e9eeb9a60.url));
      }
      async propagateCookieSync(λ7851716119e2, λ9d7e9eeb9a60 = {}) {
        this.port && await this.rpc.call("\x73\x65\x6e\x64\x53\x65\x74\x43\x6f\x6f\x6b\x69\x65", {
          cookies: λ7851716119e2,
          options: λ9d7e9eeb9a60
        });
      }
      async loadSavedCookies(λ7851716119e2 = !1) {
        if (λ7851716119e2 || this.cookieSyncDirty) return this.cookieSyncPromise || (this.cookieSyncPromise = (async () => {
          let λ7851716119e2 = await w();
          λ7851716119e2 && λ7851716119e2.updatedAt > this.cookieUpdatedAt && (this.cookieJar.load(λ7851716119e2.cookies), 
          this.cookieUpdatedAt = λ7851716119e2.updatedAt), this.cookieSyncDirty = !1;
        })().finally(() => {
          this.cookieSyncPromise = null;
        })), this.cookieSyncPromise;
      }
      async persistCookies() {
        let λ7851716119e2 = await k(this.cookieJar.dump(), this.cookieUpdatedAt);
        λ7851716119e2 <= this.cookieUpdatedAt || (this.cookieUpdatedAt = λ7851716119e2, 
        this.cookieSyncDirty = !1, this.cookieSyncChannel.postMessage({
          updatedAt: λ7851716119e2
        }));
      }
      setTransport(λ7851716119e2) {
        for (let λ9d7e9eeb9a60 of (this.transport = λ7851716119e2, this.frames)) λ9d7e9eeb9a60.controller.transport = λ7851716119e2, 
        λ9d7e9eeb9a60.fetchHandler.client.transport = λ7851716119e2;
      }
      createFrame(λ7851716119e2, λ9d7e9eeb9a60 = {}) {
        if (!this.ready) throw Error("\x43\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x69\x73\x20\x6e\x6f\x74\x20\x72\x65\x61\x64\x79\x21\x20\x54\x72\x79\x20\x61\x77\x61\x69\x74\x69\x6e\x67\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2e\x77\x61\x69\x74\x28\x29");
        let λd41508e73827 = new v(this, λ7851716119e2 ??= document.createElement("\x69\x66\x72\x61\x6d\x65"), λ9d7e9eeb9a60);
        return this.frames.push(λd41508e73827), λd41508e73827;
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
            \u{67}\u{65}\u{74}\u{49}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{63}\u{72}\u{69}\u{70}\u{74}\u{73}: function e(λ7851716119e2, λ9d7e9eeb9a60, λd41508e73827, λ2bb9d911bbef, λ8e71ed75f8f5, λfee6accc4d14) {
              return (λee6f6d55cb74, λ73d75a6fad96, λ348084647bdb, λ454020a95a17) => {
                var λ712066ef3738;
                return [ λ454020a95a17(λ7851716119e2.studyjetPath), λ454020a95a17(λd41508e73827.href + λ7851716119e2.virtualWasmPath), λ454020a95a17(λ7851716119e2.\u{69}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{50}\u{61}\u{74}\u{68}), λ454020a95a17("data:text/javascript;charset=utf-8;base64," + (λ712066ef3738 = `\x0a\x09\x09\x09\x09\x09\x64\x6f\x63\x75\x6d\x65\x6e\x74\x2e\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63\x74\x6f\x72\x41\x6c\x6c\x28\x22\x73\x63\x72\x69\x70\x74\x5b\x73\x74\x75\x64\x79\x6a\x65\x74\x2d\x69\x6e\x6a\x65\x63\x74\x65\x64\x5d\x22\x29\x2e\x66\x6f\x72\x45\x61\x63\x68\x28\x73\x63\x72\x69\x70\x74\x20\x3d\x3e\x20\x73\x63\x72\x69\x70\x74\x2e\x72\x65\x6d\x6f\x76\x65\x28\x29\x29\x3b\x0a\x09\x09\x09\x09\x09\x24\x73\x74\x75\x64\x79\x6a\x65\x74\x43\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2e\x6c\x6f\x61\x64\x28\x7b\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x66\x69\x67\x3a\x20${JSON.stringify(λ7851716119e2)}\x2c\x0a\x09\x09\x09\x09\x09\x09\x73\x6a\x63\x6f\x6e\x66\x69\x67\x3a\x20${JSON.stringify(λ9d7e9eeb9a60)}\x2c\x0a\x09\x09\x09\x09\x09\x09\x70\x72\x65\x66\x69\x78\x3a\x20\x6e\x65\x77\x20\x55\x52\x4c\x28\x22${λd41508e73827.href}\x22\x29\x2c\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6f\x6b\x69\x65\x73\x3a\x20${JSON.stringify(λ2bb9d911bbef.dump())}\x2c\x0a\x09\x09\x09\x09\x09\x09\x79\x69\x65\x6c\x64\x47\x65\x74\x49\x6e\x6a\x65\x63\x74\x53\x63\x72\x69\x70\x74\x73\x3a\x20${e.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x45\x6e\x63\x6f\x64\x65\x3a\x20${λ8e71ed75f8f5.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x44\x65\x63\x6f\x64\x65\x3a\x20${λfee6accc4d14.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x69\x6e\x69\x74\x48\x65\x61\x64\x65\x72\x73\x3a\x20${JSON.stringify(λ348084647bdb.headers ?? [])}\x2c\x0a\x09\x09\x09\x09\x09\x09\x68\x69\x73\x74\x6f\x72\x79\x3a\x20${JSON.stringify(λ348084647bdb.history ?? [])}\x2c\x0a\x09\x09\x09\x09\x09\x7d\x29\x0a\x09\x09\x09\x09`, 
                btoa((new TextEncoder).encode(λ712066ef3738).reduce((λ7851716119e2, λ9d7e9eeb9a60) => (λ7851716119e2.push(String.fromCharCode(λ9d7e9eeb9a60)), 
                λ7851716119e2), []).join("")))) ];
              };
            }(this.controller.config, this.controller.studyjetConfig, new URL(this.prefix, location.href), this.controller.cookieJar, this.controller.config.codec.encode, this.controller.config.codec.decode),
            \u{67}\u{65}\u{74}\u{57}\u{6f}\u{72}\u{6b}\u{65}\u{72}\u{49}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{63}\u{72}\u{69}\u{70}\u{74}\u{73}: (λ7851716119e2, λ9d7e9eeb9a60, λd41508e73827) => {
              var λ2bb9d911bbef;
              let λ8e71ed75f8f5 = "";
              return λ8e71ed75f8f5 += λd41508e73827(this.controller.config.studyjetPath), λ8e71ed75f8f5 += λd41508e73827(this.prefix + this.controller.config.virtualWasmPath), 
              λ8e71ed75f8f5 += λd41508e73827("data:text/javascript;charset=utf-8;base64," + (λ2bb9d911bbef = `\x0a\x09\x09\x09\x09\x09\x28\x28\x29\x3d\x3e\x7b\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x7b\x20\x53\x74\x75\x64\x79\x4a\x65\x74\x43\x6c\x69\x65\x6e\x74\x2c\x20\x43\x6f\x6f\x6b\x69\x65\x4a\x61\x72\x2c\x20\x73\x65\x74\x57\x61\x73\x6d\x20\x7d\x20\x3d\x20\x24\x73\x74\x75\x64\x79\x6a\x65\x74\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x73\x65\x74\x57\x61\x73\x6d\x28\x55\x69\x6e\x74\x38\x41\x72\x72\x61\x79\x2e\x66\x72\x6f\x6d\x28\x61\x74\x6f\x62\x28\x73\x65\x6c\x66\x2e\x57\x41\x53\x4d\x29\x2c\x20\x28\x63\x29\x20\x3d\x3e\x20\x63\x2e\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74\x28\x30\x29\x29\x29\x3b\x0a\x09\x09\x09\x09\x09\x09\x64\x65\x6c\x65\x74\x65\x20\x73\x65\x6c\x66\x2e\x57\x41\x53\x4d\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x73\x6a\x63\x6f\x6e\x66\x69\x67\x20\x3d\x20${JSON.stringify(this.controller.studyjetConfig)}\x3b\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x70\x72\x65\x66\x69\x78\x20\x3d\x20\x6e\x65\x77\x20\x55\x52\x4c\x28\x22${this.prefix}\x22\x2c\x20\x6c\x6f\x63\x61\x74\x69\x6f\x6e\x2e\x68\x72\x65\x66\x29\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x3d\x20\x7b\x0a\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x66\x69\x67\x3a\x20\x73\x6a\x63\x6f\x6e\x66\x69\x67\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x70\x72\x65\x66\x69\x78\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x69\x6e\x74\x65\x72\x66\x61\x63\x65\x3a\x20\x7b\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x45\x6e\x63\x6f\x64\x65\x3a\x20${this.controller.config.codec.encode.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x44\x65\x63\x6f\x64\x65\x3a\x20${this.controller.config.codec.decode.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x7d\x2c\x0a\x09\x09\x09\x09\x09\x09\x7d\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x63\x6c\x69\x65\x6e\x74\x20\x3d\x20\x6e\x65\x77\x20\x53\x74\x75\x64\x79\x4a\x65\x74\x43\x6c\x69\x65\x6e\x74\x28\x67\x6c\x6f\x62\x61\x6c\x54\x68\x69\x73\x2c\x20\x7b\x0a\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x74\x65\x78\x74\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x3a\x20\x6e\x75\x6c\x6c\x2c\x0a\x09\x09\x09\x09\x09\x09\x7d\x29\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6c\x69\x65\x6e\x74\x2e\x68\x6f\x6f\x6b\x28\x29\x3b\x0a\x09\x09\x09\x09\x09\x7d\x29\x28\x29\x3b\x0a\x09\x09\x09\x09\x09`, 
              btoa((new TextEncoder).encode(λ2bb9d911bbef).reduce((λ7851716119e2, λ9d7e9eeb9a60) => (λ7851716119e2.push(String.fromCharCode(λ9d7e9eeb9a60)), 
              λ7851716119e2), []).join(""))));
            },
            codecEncode: this.controller.config.codec.encode,
            codecDecode: this.controller.config.codec.decode
          }
        };
      }
      plugins=[];
      constructor(λ7851716119e2, λd41508e73827, λ2bb9d911bbef = {}) {
        for (const λee6f6d55cb74 of (this.controller = λ7851716119e2, this.element = λd41508e73827, 
        this.options = λ2bb9d911bbef, this.id = b(), this.prefix = this.controller.prefix + this.id + "\x2f", 
        this.fetchHandler = new λ8e71ed75f8f5.mK({
          crossOriginIsolated: self.crossOriginIsolated,
          context: this.context,
          transport: λ7851716119e2.transport,
          async sendSetCookie(λ9d7e9eeb9a60, λd41508e73827) {
            await λ7851716119e2.persistCookies(), await λ7851716119e2.propagateCookieSync(λ9d7e9eeb9a60.map(({url: λ7851716119e2, cookie: λ9d7e9eeb9a60}) => ({
              url: λ7851716119e2.href,
              cookie: λ9d7e9eeb9a60
            })), λd41508e73827);
          },
          fetchBlobUrl: async λ7851716119e2 => λ9d7e9eeb9a60.Sr.fromNativeResponse(await fetch(λ7851716119e2)),
          fetchDataUrl: async λ7851716119e2 => λ9d7e9eeb9a60.Sr.fromNativeResponse(await fetch(λ7851716119e2))
        }), this.hooks = {
          fetch: this.fetchHandler.hooks.fetch,
          init: λ8e71ed75f8f5.Cx.create(),
          error: λ8e71ed75f8f5.Cx.create()
        }, λd41508e73827[λfee6accc4d14.I] = this, this.plugins = λ2bb9d911bbef.plugins ?? [], 
        this.plugins)) {
          for (const λ7851716119e2 of λee6f6d55cb74.dependencies) if (!this.plugins.find(λ9d7e9eeb9a60 => λ9d7e9eeb9a60.name === λ7851716119e2)) throw Error(`\x44\x65\x70\x65\x6e\x64\x65\x6e\x63\x79\x20${λ7851716119e2}\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x66\x6f\x72\x20\x70\x6c\x75\x67\x69\x6e\x20${λee6f6d55cb74.name}`);
          λee6f6d55cb74.install(this);
        }
      }
      getPlugin(λ7851716119e2) {
        let λ9d7e9eeb9a60 = this.plugins.find(λ9d7e9eeb9a60 => λ9d7e9eeb9a60.name === λ7851716119e2);
        if (!λ9d7e9eeb9a60) throw Error(`\x50\x6c\x75\x67\x69\x6e\x20${λ7851716119e2}\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64`);
        return λ9d7e9eeb9a60;
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
      go(λ7851716119e2) {
        let λ9d7e9eeb9a60 = (0, λ8e71ed75f8f5.Oy)(λ7851716119e2, this.context, {
          origin: new URL(location.href),
          base: new URL(location.href)
        });
        this.element.src = λ9d7e9eeb9a60;
      }
    }
  })(), $studyjetController = λd41508e73827;
})();
