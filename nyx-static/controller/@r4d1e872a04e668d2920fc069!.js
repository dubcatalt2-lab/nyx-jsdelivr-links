var $studyjetController;

(() => {
  var λa86b910dbb90 = {
    286(λa86b910dbb90, λ3083f9823655, λc5a684876796) {
      λc5a684876796.d(λ3083f9823655, {
        I: () => λa62cae6c1045
      });
      let λa62cae6c1045 = Symbol.for("\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x66\x72\x61\x6d\x65\x20\x68\x61\x6e\x64\x6c\x65");
    },
    355(λa86b910dbb90, λ3083f9823655, λc5a684876796) {
      λc5a684876796.d(λ3083f9823655, {
        O: () => s,
        x: () => λa62cae6c1045
      });
      let λa62cae6c1045 = "\x30\x2e\x30\x2e\x31\x34";
      function s() {
        if ("\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" == typeof $studyjet) throw Error("\x40\x6d\x65\x72\x63\x75\x72\x79\x77\x6f\x72\x6b\x73\x68\x6f\x70\x2f\x73\x74\x75\x64\x79\x6a\x65\x74\x20\x69\x73\x20\x6e\x6f\x74\x20\x6c\x6f\x61\x64\x65\x64\x2e\x20\x4c\x6f\x61\x64\x20\x73\x74\x75\x64\x79\x6a\x65\x74\x20\x62\x65\x66\x6f\x72\x65\x20\x74\x68\x65\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2e");
        var λa86b910dbb90 = "\x32\x2e\x30\x2e\x36\x37\x2d\x61\x6c\x70\x68\x61\x2e\x32", λ3083f9823655 = $studyjet.versionInfo.version;
        if (λa86b910dbb90 !== λ3083f9823655) throw Error(`\x40\x6d\x65\x72\x63\x75\x72\x79\x77\x6f\x72\x6b\x73\x68\x6f\x70\x2f\x73\x74\x75\x64\x79\x6a\x65\x74\x20\x76\x65\x72\x73\x69\x6f\x6e\x20\x6d\x69\x73\x6d\x61\x74\x63\x68\x3a\x20\x74\x68\x69\x73\x20\x62\x75\x69\x6c\x64\x20\x65\x78\x70\x65\x63\x74\x73\x20${λa86b910dbb90}\x2c\x20\x62\x75\x74\x20\x74\x68\x65\x20\x6c\x6f\x61\x64\x65\x64\x20\x72\x75\x6e\x74\x69\x6d\x65\x20\x69\x73\x20${λ3083f9823655}`);
      }
    },
    805(λa86b910dbb90, λ3083f9823655, λc5a684876796) {
      λc5a684876796.d(λ3083f9823655, {
        C: () => o
      });
      class o {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λa86b910dbb90, λ3083f9823655, λc5a684876796) {
          this.methods = λa86b910dbb90, this.id = λ3083f9823655, this.sendRaw = λc5a684876796;
        }
        recieve(λa86b910dbb90) {
          if (null == λa86b910dbb90 || "\x6f\x62\x6a\x65\x63\x74" != typeof λa86b910dbb90) return;
          let λ3083f9823655 = λa86b910dbb90[this.id];
          if (null == λ3083f9823655 || "\x6f\x62\x6a\x65\x63\x74" != typeof λ3083f9823655) return;
          let λc5a684876796 = λ3083f9823655.$type;
          if ("\x72\x65\x73\x70\x6f\x6e\x73\x65" === λc5a684876796) {
            let λa86b910dbb90 = λ3083f9823655.$token, λc5a684876796 = λ3083f9823655.$data, λa62cae6c1045 = λ3083f9823655.$error, λc7e053fe0475 = this.promiseCallbacks.get(λa86b910dbb90);
            if (!λc7e053fe0475) return;
            this.promiseCallbacks.delete(λa86b910dbb90), void 0 !== λa62cae6c1045 ? λc7e053fe0475.reject(Error(λa62cae6c1045)) : λc7e053fe0475.resolve(λc5a684876796);
          } else if ("\x72\x65\x71\x75\x65\x73\x74" === λc5a684876796) {
            let λa86b910dbb90 = λ3083f9823655.$method, λc5a684876796 = λ3083f9823655.$args;
            this.methods[λa86b910dbb90](λc5a684876796).then(λa86b910dbb90 => {
              this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ3083f9823655.$token,
                  $data: λa86b910dbb90?.[0]
                }
              }, λa86b910dbb90?.[1]);
            }).catch(λa86b910dbb90 => {
              console.error(λa86b910dbb90), this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ3083f9823655.$token,
                  $error: λa86b910dbb90?.toString() || "\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x65\x72\x72\x6f\x72"
                }
              }, []);
            });
          }
        }
        call(λa86b910dbb90, λ3083f9823655, λc5a684876796 = []) {
          let λa62cae6c1045 = this.counter++;
          return new Promise((λc7e053fe0475, λde4db6f3444d) => {
            this.promiseCallbacks.set(λa62cae6c1045, {
              resolve: λc7e053fe0475,
              reject: λde4db6f3444d
            }), this.sendRaw({
              [this.id]: {
                $type: "\x72\x65\x71\x75\x65\x73\x74",
                $method: λa86b910dbb90,
                $args: λ3083f9823655,
                $token: λa62cae6c1045
              }
            }, λc5a684876796);
          });
        }
      }
    },
    986(λa86b910dbb90) {
      let λ3083f9823655 = Object.getPrototypeOf({});
      function r() {
        return function(λa86b910dbb90) {
          return "\x6f\x62\x6a\x65\x63\x74" == typeof λa86b910dbb90 && null !== λa86b910dbb90 && !(λa86b910dbb90 instanceof RegExp) && !(λa86b910dbb90 instanceof Date);
        };
      }
      function o(λa86b910dbb90) {
        function o(λa86b910dbb90) {
          return "\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72" !== λa86b910dbb90 && "\x70\x72\x6f\x74\x6f\x74\x79\x70\x65" !== λa86b910dbb90 && "\x5f\x5f\x70\x72\x6f\x74\x6f\x5f\x5f" !== λa86b910dbb90;
        }
        let λc5a684876796 = Object.prototype.propertyIsEnumerable, λa62cae6c1045 = λa86b910dbb90?.symbols ? function(λa86b910dbb90) {
          let λ3083f9823655 = Object.keys(λa86b910dbb90), λa62cae6c1045 = Object.getOwnPropertySymbols(λa86b910dbb90);
          for (let λc7e053fe0475 = 0, λde4db6f3444d = λa62cae6c1045.length; λc7e053fe0475 < λde4db6f3444d; ++λc7e053fe0475) λc5a684876796.call(λa86b910dbb90, λa62cae6c1045[λc7e053fe0475]) && λ3083f9823655.push(λa62cae6c1045[λc7e053fe0475]);
          return λ3083f9823655;
        } : Object.keys, λc7e053fe0475 = "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λa86b910dbb90?.cloneProtoObject ? λa86b910dbb90.cloneProtoObject : void 0, λde4db6f3444d = "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λa86b910dbb90?.isMergeableObject ? λa86b910dbb90.isMergeableObject : r(), λ1fcbed977519 = λa86b910dbb90?.onlyDefinedProperties === !0, λ24aa0350718e = λa86b910dbb90 && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λa86b910dbb90.mergeArray ? λa86b910dbb90.mergeArray({
          clone: d,
          deepmerge: h,
          getKeys: λa62cae6c1045,
          isMergeableObject: λde4db6f3444d
        }) : function(λa86b910dbb90, λ3083f9823655) {
          let λc5a684876796 = λa86b910dbb90.length, λa62cae6c1045 = λ3083f9823655.length, λc7e053fe0475 = 0, λde4db6f3444d = Array(λc5a684876796 + λa62cae6c1045);
          for (;λc7e053fe0475 < λc5a684876796; ++λc7e053fe0475) λde4db6f3444d[λc7e053fe0475] = d(λa86b910dbb90[λc7e053fe0475]);
          for (λc7e053fe0475 = 0; λc7e053fe0475 < λa62cae6c1045; ++λc7e053fe0475) λde4db6f3444d[λc7e053fe0475 + λc5a684876796] = d(λ3083f9823655[λc7e053fe0475]);
          return λde4db6f3444d;
        };
        function d(λa86b910dbb90) {
          return λde4db6f3444d(λa86b910dbb90) ? Array.isArray(λa86b910dbb90) ? function(λa86b910dbb90) {
            let λ3083f9823655 = 0, λc5a684876796 = λa86b910dbb90.length, λa62cae6c1045 = Array(λc5a684876796);
            for (;λ3083f9823655 < λc5a684876796; ++λ3083f9823655) λa62cae6c1045[λ3083f9823655] = d(λa86b910dbb90[λ3083f9823655]);
            return λa62cae6c1045;
          }(λa86b910dbb90) : function(λa86b910dbb90) {
            let λc5a684876796, λde4db6f3444d, λ1fcbed977519, λ24aa0350718e = {};
            if (λc7e053fe0475 && Object.getPrototypeOf(λa86b910dbb90) !== λ3083f9823655) return λc7e053fe0475(λa86b910dbb90);
            let λb51ea1bb6068 = λa62cae6c1045(λa86b910dbb90);
            for (λc5a684876796 = 0, λde4db6f3444d = λb51ea1bb6068.length; λc5a684876796 < λde4db6f3444d; ++λc5a684876796) o(λ1fcbed977519 = λb51ea1bb6068[λc5a684876796]) && (λ24aa0350718e[λ1fcbed977519] = d(λa86b910dbb90[λ1fcbed977519]));
            return λ24aa0350718e;
          }(λa86b910dbb90) : λa86b910dbb90;
        }
        function h(λa86b910dbb90, λc5a684876796) {
          if (λ1fcbed977519 && void 0 === λc5a684876796) return d(λa86b910dbb90);
          let λb51ea1bb6068 = Array.isArray(λc5a684876796), λ9a95c60bb05d = Array.isArray(λa86b910dbb90);
          return "\x6f\x62\x6a\x65\x63\x74" != typeof λc5a684876796 || null === λc5a684876796 ? λc5a684876796 : λde4db6f3444d(λa86b910dbb90) ? λb51ea1bb6068 && λ9a95c60bb05d ? λ24aa0350718e(λa86b910dbb90, λc5a684876796) : λb51ea1bb6068 !== λ9a95c60bb05d ? d(λc5a684876796) : function(λa86b910dbb90, λc5a684876796) {
            let λ24aa0350718e, λb51ea1bb6068, λ9a95c60bb05d, λf9e941900c3c = {}, λcff53139f17b = λa62cae6c1045(λa86b910dbb90), λd69dde594eb8 = λa62cae6c1045(λc5a684876796);
            for (λ24aa0350718e = 0, λb51ea1bb6068 = λcff53139f17b.length; λ24aa0350718e < λb51ea1bb6068; ++λ24aa0350718e) o(λ9a95c60bb05d = λcff53139f17b[λ24aa0350718e]) && -1 === λd69dde594eb8.indexOf(λ9a95c60bb05d) && (λf9e941900c3c[λ9a95c60bb05d] = d(λa86b910dbb90[λ9a95c60bb05d]));
            for (λ24aa0350718e = 0, λb51ea1bb6068 = λd69dde594eb8.length; λ24aa0350718e < λb51ea1bb6068; ++λ24aa0350718e) if (o(λ9a95c60bb05d = λd69dde594eb8[λ24aa0350718e])) if (λ9a95c60bb05d in λa86b910dbb90) -1 !== λcff53139f17b.indexOf(λ9a95c60bb05d) && (λc7e053fe0475 && λde4db6f3444d(λc5a684876796[λ9a95c60bb05d]) && Object.getPrototypeOf(λc5a684876796[λ9a95c60bb05d]) !== λ3083f9823655 ? λf9e941900c3c[λ9a95c60bb05d] = λc7e053fe0475(λc5a684876796[λ9a95c60bb05d]) : λf9e941900c3c[λ9a95c60bb05d] = h(λa86b910dbb90[λ9a95c60bb05d], λc5a684876796[λ9a95c60bb05d])); else {
              if (λ1fcbed977519 && void 0 === λc5a684876796[λ9a95c60bb05d]) continue;
              λf9e941900c3c[λ9a95c60bb05d] = d(λc5a684876796[λ9a95c60bb05d]);
            }
            return λf9e941900c3c;
          }(λa86b910dbb90, λc5a684876796) : d(λc5a684876796);
        }
        return λa86b910dbb90?.all ? function() {
          let λa86b910dbb90;
          switch (arguments.length) {
           case 0:
            return {};

           case 1:
            return d(arguments[0]);

           case 2:
            return h(arguments[0], arguments[1]);
          }
          for (let λ3083f9823655 = 0, λc5a684876796 = arguments.length; λ3083f9823655 < λc5a684876796; ++λ3083f9823655) λa86b910dbb90 = h(λa86b910dbb90, arguments[λ3083f9823655]);
          return λa86b910dbb90;
        } : h;
      }
      λa86b910dbb90.exports = o, λa86b910dbb90.exports.default = o, λa86b910dbb90.exports.deepmerge = o, 
      Object.defineProperty(λa86b910dbb90.exports, "\x69\x73\x4d\x65\x72\x67\x65\x61\x62\x6c\x65\x4f\x62\x6a\x65\x63\x74", {
        get: r
      });
    },
    235(λa86b910dbb90, λ3083f9823655, λc5a684876796) {
      λc5a684876796.d(λ3083f9823655, {
        Sr: () => s
      }), WebSocket.CLOSED, WebSocket.CONNECTING, WebSocket.OPEN, EventTarget;
      let λa62cae6c1045 = [ 101, 204, 205, 304 ];
      class s extends Response {
        url;
        rawHeaders;
        redirected=!1;
        static fromTransferrableResponse(λa86b910dbb90, λ3083f9823655) {
          let λc5a684876796 = new s(λa62cae6c1045.includes(λa86b910dbb90.status) ? void 0 : λa86b910dbb90.body, {
            headers: new Headers(λa86b910dbb90.headers),
            status: λa86b910dbb90.status,
            statusText: λa86b910dbb90.statusText
          });
          return λc5a684876796.url = λ3083f9823655, λc5a684876796.redirected = λa86b910dbb90.status >= 300 && λa86b910dbb90.status < 400 && void 0 !== λa86b910dbb90.headers.location, 
          λc5a684876796.rawHeaders = λa86b910dbb90.headers, λc5a684876796;
        }
        static fromNativeResponse(λa86b910dbb90) {
          let λ3083f9823655 = new s(λa62cae6c1045.includes(λa86b910dbb90.status) ? void 0 : λa86b910dbb90.body, {
            headers: λa86b910dbb90.headers,
            status: λa86b910dbb90.status,
            statusText: λa86b910dbb90.statusText
          });
          return λ3083f9823655.url = λa86b910dbb90.url, λ3083f9823655.rawHeaders = [ ...λa86b910dbb90.headers ], 
          λ3083f9823655.redirected = λa86b910dbb90.redirected, λ3083f9823655;
        }
      }
    },
    423(λa86b910dbb90, λ3083f9823655, λc5a684876796) {
      λc5a684876796.d(λ3083f9823655, {
        Cx: () => λcbbac969c0d6,
        Oy: () => λ480b559ba65e,
        cP: () => λc7e053fe0475,
        ht: () => λdf92658ae500,
        k_: () => λ1fcbed977519,
        mK: () => λf9e941900c3c,
        sb: () => λ0c44a55bbba1,
        uh: () => λd69dde594eb8
      });
      let {BareResponse: λa62cae6c1045, CookieJar: λc7e053fe0475, IncrementalHtmlRewriter: λde4db6f3444d, Plugin: λ1fcbed977519, STUDYJETCLIENT: λ24aa0350718e, STUDYJETCLIENTNAME: λb51ea1bb6068, StudyJetClient: λ9a95c60bb05d, StudyJetFetchHandler: λf9e941900c3c, StudyJetFetchTrackedClient: λcff53139f17b, StudyJetHeaders: λd69dde594eb8, Tap: λcbbac969c0d6, \u{63}\u{72}\u{65}\u{61}\u{74}\u{65}\u{4c}\u{6f}\u{63}\u{61}\u{74}\u{69}\u{6f}\u{6e}\u{50}\u{72}\u{6f}\u{78}\u{79}: λ26f3e11ff571, defaultConfig: λ0c44a55bbba1, defaultConfigDev: λ5c850681e8c7, flagEnabled: λ7ee3f5f607f2, getOwnPropertyDescriptorHandler: λd5ccb5014844, getRewriter: λd1790248ac76, getScriptBlockTypeString: λ84254adb0237, htmlRules: λa8491295d5c6, isArchiveMimeType: λf9e805625f73, isAudioOrVideoMimeType: λ627d725f9911, isFontMimeType: λfe24fada04c6, isHtmlMimeType: λ9b25d4670a15, isImageMimeType: λ8a3a69f9315b, isInlineDisplayableMimeType: λ6b09a863ae32, isJavascriptMimeType: λ27052521f6d8, isJavascriptMimeTypeEssenceMatch: λf5a05ba3b1d7, isModuleScriptType: λ709d15f517bf, isScriptType: λd25f4bd86371, isScriptableMimeType: λe8539cbf0cbc, isXmlMimeType: λa84096662d08, isZipBasedMimeType: λ0253c569f13e, isdedicated: λf966ad68c991, isshared: λd9b780104f02, issw: λbb0b0eeb261d, iswindow: λd26d4e4e34e8, isworker: λ5b94468587df, parseMimeType: λ17d2a17dab1b, rewriteBlob: λ73080f3ea975, rewriteCss: λc2cc1c7c0b91, rewriteHtml: λ67b03aecc6d4, rewriteJs: λac972b20cd7b, rewriteJsInner: λ2ab2f6994ddf, rewriteSrcset: λ2c3af35b184d, rewriteUrl: λ480b559ba65e, rewriteWorkers: λe339f5aa413f, setWasm: λdf92658ae500, unrewriteBlob: λ5e80755d2fb3, unrewriteCss: λ2c84159d877e, unrewriteHtml: λ02de980491ac, unrewriteUrl: λb62b4adc09a1, versionInfo: λ61e89fea7103} = globalThis.$studyjet;
    }
  }, λ3083f9823655 = {};
  function r(λc5a684876796) {
    var λa62cae6c1045 = λ3083f9823655[λc5a684876796];
    if (void 0 !== λa62cae6c1045) return λa62cae6c1045.exports;
    var λc7e053fe0475 = λ3083f9823655[λc5a684876796] = {
      exports: {}
    };
    return λa86b910dbb90[λc5a684876796](λc7e053fe0475, λc7e053fe0475.exports, r), λc7e053fe0475.exports;
  }
  r.n = λa86b910dbb90 => {
    var λ3083f9823655 = λa86b910dbb90 && λa86b910dbb90.__esModule ? () => λa86b910dbb90.default : () => λa86b910dbb90;
    return r.d(λ3083f9823655, {
      a: λ3083f9823655
    }), λ3083f9823655;
  }, r.d = (λa86b910dbb90, λ3083f9823655) => {
    for (var λc5a684876796 in λ3083f9823655) r.o(λ3083f9823655, λc5a684876796) && !r.o(λa86b910dbb90, λc5a684876796) && Object.defineProperty(λa86b910dbb90, λc5a684876796, {
      enumerable: !0,
      get: λ3083f9823655[λc5a684876796]
    });
  }, r.o = (λa86b910dbb90, λ3083f9823655) => Object.prototype.hasOwnProperty.call(λa86b910dbb90, λ3083f9823655), 
  r.r = λa86b910dbb90 => {
    "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λa86b910dbb90, Symbol.toStringTag, {
      value: "\x4d\x6f\x64\x75\x6c\x65"
    }), Object.defineProperty(λa86b910dbb90, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
      value: !0
    });
  };
  var λc5a684876796 = {};
  (() => {
    r.r(λc5a684876796), r.d(λc5a684876796, {
      Controller: () => S,
      Frame: () => v,
      ManagedPlugin: () => d,
      VERSION: () => λ1fcbed977519.x,
      assertRuntimeStudyJetVersion: () => λ1fcbed977519.O,
      config: () => λ24aa0350718e
    });
    var λa86b910dbb90 = r(805), λ3083f9823655 = r(235), λa62cae6c1045 = r(986), λc7e053fe0475 = r(423), λde4db6f3444d = r(286), λ1fcbed977519 = r(355);
    let λ24aa0350718e = {
      prefix: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x7e\x2f\x73\x74\x75\x64\x79\x2f",
      studyjetPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x73\x74\x75\x64\x79\x6a\x65\x74\x2f\x40\x72\x36\x39\x63\x31\x38\x66\x39\x62\x64\x34\x65\x64\x31\x37\x35\x63\x39\x65\x61\x35\x30\x35\x62\x38\x21\x2e\x6a\x73",
      \u{69}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{50}\u{61}\u{74}\u{68}: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2f\x40\x72\x39\x65\x38\x35\x35\x61\x63\x38\x32\x65\x64\x63\x34\x62\x35\x31\x65\x31\x33\x34\x30\x35\x36\x34\x21\x2e\x6a\x73",
      wasmPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x73\x74\x75\x64\x79\x6a\x65\x74\x2f\x40\x72\x35\x35\x32\x38\x36\x63\x66\x65\x30\x39\x64\x37\x34\x31\x30\x32\x33\x63\x63\x33\x65\x31\x64\x36\x21\x2e\x77\x61\x73\x6d",
      virtualWasmPath: "\x73\x74\x75\x64\x79\x6a\x65\x74\x2e\x77\x61\x73\x6d\x2e\x6a\x73",
      codec: {
        encode: λa86b910dbb90 => λa86b910dbb90 ? encodeURIComponent(λa86b910dbb90) : λa86b910dbb90,
        decode: λa86b910dbb90 => λa86b910dbb90 ? decodeURIComponent(λa86b910dbb90) : λa86b910dbb90
      }
    }, λb51ea1bb6068 = {
      flags: {
        ...λc7e053fe0475.sb.flags,
        allowFailedIntercepts: !0
      },
      maskedfiles: [ "\x69\x6e\x6a\x65\x63\x74\x2e\x6a\x73", "\x73\x74\x75\x64\x79\x6a\x65\x74\x2e\x77\x61\x73\x6d\x2e\x6a\x73" ]
    };
    class d extends λc7e053fe0475.k_ {
      frame=null;
      dependencies=[];
      constructor(λa86b910dbb90, λ3083f9823655) {
        super(λa86b910dbb90), this.dependencies = λ3083f9823655;
      }
      install(λa86b910dbb90) {
        this.frame = λa86b910dbb90;
      }
    }
    let λ9a95c60bb05d = "\x73\x74\x61\x74\x65", λf9e941900c3c = "\x63\x6f\x6f\x6b\x69\x65\x73", λcff53139f17b = null;
    function u(λa86b910dbb90) {
      return "\x6f\x62\x6a\x65\x63\x74" == typeof λa86b910dbb90 && null !== λa86b910dbb90 && "\x6e\x75\x6d\x62\x65\x72" == typeof λa86b910dbb90.updatedAt && Number.isFinite(λa86b910dbb90.updatedAt) && "\x73\x74\x72\x69\x6e\x67" == typeof λa86b910dbb90.cookies ? λa86b910dbb90 : null;
    }
    function y(λa86b910dbb90) {
      return new Promise((λ3083f9823655, λc5a684876796) => {
        λa86b910dbb90.onsuccess = () => λ3083f9823655(λa86b910dbb90.result), λa86b910dbb90.onerror = () => λc5a684876796(λa86b910dbb90.error ?? Error("\x49\x6e\x64\x65\x78\x65\x64\x44\x42\x20\x72\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64"));
      });
    }
    function m(λa86b910dbb90) {
      return new Promise((λ3083f9823655, λc5a684876796) => {
        λa86b910dbb90.oncomplete = () => λ3083f9823655(), λa86b910dbb90.onabort = () => λc5a684876796(λa86b910dbb90.error ?? Error("\x49\x6e\x64\x65\x78\x65\x64\x44\x42\x20\x74\x72\x61\x6e\x73\x61\x63\x74\x69\x6f\x6e\x20\x61\x62\x6f\x72\x74\x65\x64")), 
        λa86b910dbb90.onerror = () => λc5a684876796(λa86b910dbb90.error ?? Error("\x49\x6e\x64\x65\x78\x65\x64\x44\x42\x20\x74\x72\x61\x6e\x73\x61\x63\x74\x69\x6f\x6e\x20\x66\x61\x69\x6c\x65\x64"));
      });
    }
    function g() {
      return λcff53139f17b || (λcff53139f17b = new Promise((λa86b910dbb90, λ3083f9823655) => {
        let λc5a684876796 = indexedDB.open("\x40\x64\x39\x34\x31\x62\x63\x36\x35\x61\x66\x33", 1);
        λc5a684876796.onupgradeneeded = () => {
          let λa86b910dbb90 = λc5a684876796.result;
          λa86b910dbb90.objectStoreNames.contains(λ9a95c60bb05d) || λa86b910dbb90.createObjectStore(λ9a95c60bb05d);
        }, λc5a684876796.onsuccess = () => λa86b910dbb90(λc5a684876796.result), λc5a684876796.onerror = () => λ3083f9823655(λc5a684876796.error ?? Error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x6f\x70\x65\x6e\x20\x63\x6f\x6f\x6b\x69\x65\x20\x64\x61\x74\x61\x62\x61\x73\x65"));
      }));
    }
    async function w() {
      try {
        let λa86b910dbb90 = (await g()).transaction(λ9a95c60bb05d, "\x72\x65\x61\x64\x6f\x6e\x6c\x79"), λ3083f9823655 = λa86b910dbb90.objectStore(λ9a95c60bb05d), λc5a684876796 = await y(λ3083f9823655.get(λf9e941900c3c));
        return await m(λa86b910dbb90), u(λc5a684876796);
      } catch (λa86b910dbb90) {
        return console.error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x72\x65\x61\x64\x20\x70\x65\x72\x73\x69\x73\x74\x65\x64\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x63\x6f\x6f\x6b\x69\x65\x73\x3a", λa86b910dbb90), 
        null;
      }
    }
    async function k(λa86b910dbb90, λ3083f9823655) {
      try {
        let λc5a684876796 = (await g()).transaction(λ9a95c60bb05d, "\x72\x65\x61\x64\x77\x72\x69\x74\x65"), λa62cae6c1045 = λc5a684876796.objectStore(λ9a95c60bb05d), λc7e053fe0475 = u(await y(λa62cae6c1045.get(λf9e941900c3c))), λde4db6f3444d = Math.max(Date.now(), λ3083f9823655 + 1, (λc7e053fe0475?.updatedAt ?? 0) + 1);
        return λa62cae6c1045.put({
          updatedAt: λde4db6f3444d,
          cookies: λa86b910dbb90
        }, λf9e941900c3c), await m(λc5a684876796), λde4db6f3444d;
      } catch (λa86b910dbb90) {
        return console.error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x70\x65\x72\x73\x69\x73\x74\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x63\x6f\x6f\x6b\x69\x65\x73\x3a", λa86b910dbb90), λ3083f9823655;
      }
    }
    function b() {
      return Math.random().toString(36).substring(2, 10);
    }
    let λd69dde594eb8 = (0, λa62cae6c1045.deepmerge)();
    class S {
      init;
      id;
      config;
      studyjetConfig;
      prefix;
      cookieJar=new λc7e053fe0475.cP;
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
      onTabChannelMessage=λa86b910dbb90 => {
        this.rpc.recieve(λa86b910dbb90.data);
      };
      onCookieSyncMessage=λa86b910dbb90 => {
        let λ3083f9823655 = "\x6f\x62\x6a\x65\x63\x74" == typeof λa86b910dbb90.data && null !== λa86b910dbb90.data ? λa86b910dbb90.data.updatedAt : void 0;
        "\x6e\x75\x6d\x62\x65\x72" != typeof λ3083f9823655 || λ3083f9823655 <= this.cookieUpdatedAt || (this.cookieSyncDirty = !0, 
        this.loadSavedCookies());
      };
      async loadStudyJetWasm() {
        if (this.wasmAlreadyFetched) return;
        let λa86b910dbb90 = await fetch(this.config.wasmPath);
        (0, λc7e053fe0475.ht)(await λa86b910dbb90.arrayBuffer()), this.wasmAlreadyFetched = !0;
      }
      methods={
        ready: async () => {
          this.readyResolve(), setTimeout(() => {
            this.guardServiceWorkerRevive = !1;
          }, 5e3);
        },
        request: async λa86b910dbb90 => {
          let λ3083f9823655 = new URL(λa86b910dbb90.rawUrl).pathname, λc5a684876796 = this.frames.find(λa86b910dbb90 => λ3083f9823655.startsWith(λa86b910dbb90.prefix));
          if (!λc5a684876796) throw Error("\x4e\x6f\x20\x66\x72\x61\x6d\x65\x20\x66\x6f\x75\x6e\x64\x20\x66\x6f\x72\x20\x72\x65\x71\x75\x65\x73\x74");
          try {
            if (await this.loadSavedCookies(), λ3083f9823655 === λc5a684876796.prefix + this.config.virtualWasmPath) {
              if (!this.wasmPayload) {
                let λa86b910dbb90 = await fetch(this.config.wasmPath), λ3083f9823655 = await λa86b910dbb90.arrayBuffer(), λc5a684876796 = btoa(new Uint8Array(λ3083f9823655).reduce((λa86b910dbb90, λ3083f9823655) => (λa86b910dbb90.push(String.fromCharCode(λ3083f9823655)), 
                λa86b910dbb90), []).join(""));
                this.wasmPayload = `\x73\x65\x6c\x66\x2e\x57\x41\x53\x4d\x20\x3d\x20\x27${λc5a684876796}\x27\x3b`;
              }
              return [ {
                body: this.wasmPayload,
                status: 200,
                statusText: "\x4f\x4b",
                headers: [ [ "\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65", "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x61\x76\x61\x73\x63\x72\x69\x70\x74" ] ]
              }, [] ];
            }
            let λa62cae6c1045 = λc7e053fe0475.uh.fromRawHeaders(λa86b910dbb90.initialHeaders), λde4db6f3444d = await λc5a684876796.fetchHandler.handleFetch({
              initialHeaders: λa62cae6c1045,
              rawClientUrl: λa86b910dbb90.rawClientUrl ? new URL(λa86b910dbb90.rawClientUrl) : void 0,
              rawUrl: new URL(λa86b910dbb90.rawUrl),
              rawReferrer: λa86b910dbb90.rawReferrer,
              rawDestination: λa86b910dbb90.destination,
              method: λa86b910dbb90.method,
              mode: λa86b910dbb90.mode,
              referrer: λa86b910dbb90.referrer,
              body: λa86b910dbb90.body,
              cache: λa86b910dbb90.cache,
              clientId: λa86b910dbb90.clientId
            });
            return [ {
              body: λde4db6f3444d.body,
              status: λde4db6f3444d.status,
              statusText: λde4db6f3444d.statusText,
              headers: λde4db6f3444d.headers.toRawHeaders()
            }, λde4db6f3444d.body instanceof ReadableStream || λde4db6f3444d.body instanceof ArrayBuffer ? [ λde4db6f3444d.body ] : [] ];
          } catch (λ3083f9823655) {
            let λa62cae6c1045 = {
              setResponse: void 0,
              suppressError: !1
            };
            if (await λc7e053fe0475.Cx.dispatch(λc5a684876796.hooks.error.request, {
              rawrequest: λa86b910dbb90,
              error: λ3083f9823655
            }, λa62cae6c1045), λa62cae6c1045.suppressError || console.error("\x45\x72\x72\x6f\x72\x20\x69\x6e\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x72\x65\x71\x75\x65\x73\x74\x20\x68\x61\x6e\x64\x6c\x65\x72\x3a", λ3083f9823655), 
            λa62cae6c1045.setResponse) return [ λa62cae6c1045.setResponse, [] ];
            throw λ3083f9823655;
          }
        },
        initRemoteTransport: async λ3083f9823655 => {
          let λc5a684876796 = new λa86b910dbb90.C({
            request: async ({remote: λa86b910dbb90, method: λ3083f9823655, body: λc5a684876796, headers: λa62cae6c1045}) => {
              let λc7e053fe0475 = await this.transport.request(new URL(λa86b910dbb90), λ3083f9823655, λc5a684876796, λa62cae6c1045, void 0);
              return [ λc7e053fe0475, [ λc7e053fe0475.body ] ];
            },
            sendSetCookie: async ({cookies: λa86b910dbb90, options: λ3083f9823655}) => {
              await this.loadSavedCookies(!0), λ3083f9823655?.clear && this.cookieJar.clear(), 
              this.applyCookieSyncEntries(λa86b910dbb90), await this.persistCookies(), await this.propagateCookieSync(λa86b910dbb90, λ3083f9823655);
            },
            connect: async ({url: λa86b910dbb90, protocols: λ3083f9823655, requestHeaders: λc5a684876796, port: λa62cae6c1045}) => {
              let λc7e053fe0475, λde4db6f3444d = new Promise(λa86b910dbb90 => λc7e053fe0475 = λa86b910dbb90), [λ1fcbed977519, λ24aa0350718e] = this.transport.connect(new URL(λa86b910dbb90), λ3083f9823655, λc5a684876796, (λa86b910dbb90, λ3083f9823655) => {
                λc7e053fe0475({
                  result: "\x73\x75\x63\x63\x65\x73\x73",
                  protocol: λa86b910dbb90,
                  extensions: λ3083f9823655
                });
              }, λa86b910dbb90 => {
                λa62cae6c1045.postMessage({
                  type: "\x64\x61\x74\x61",
                  data: λa86b910dbb90
                }, λa86b910dbb90 instanceof ArrayBuffer ? [ λa86b910dbb90 ] : []);
              }, (λa86b910dbb90, λ3083f9823655) => {
                λa62cae6c1045.postMessage({
                  type: "\x63\x6c\x6f\x73\x65",
                  code: λa86b910dbb90,
                  reason: λ3083f9823655
                });
              }, λa86b910dbb90 => {
                λc7e053fe0475({
                  result: "\x66\x61\x69\x6c\x75\x72\x65",
                  error: λa86b910dbb90
                });
              });
              return λa62cae6c1045.onmessageerror = λa86b910dbb90 => {
                console.error("\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x6f\x72\x74\x20\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λa86b910dbb90);
              }, λa62cae6c1045.onmessage = ({data: λa86b910dbb90}) => {
                "\x64\x61\x74\x61" === λa86b910dbb90.type ? λ1fcbed977519(λa86b910dbb90.data) : "\x63\x6c\x6f\x73\x65" === λa86b910dbb90.type && λ24aa0350718e(λa86b910dbb90.code, λa86b910dbb90.reason);
              }, [ await λde4db6f3444d, [] ];
            }
          }, "\x74\x72\x61\x6e\x73\x70\x6f\x72\x74", (λa86b910dbb90, λc5a684876796) => λ3083f9823655.postMessage(λa86b910dbb90, λc5a684876796));
          λ3083f9823655.onmessageerror = λa86b910dbb90 => {
            console.error("\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x6f\x72\x74\x20\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λa86b910dbb90);
          }, λ3083f9823655.onmessage = λa86b910dbb90 => {
            λc5a684876796.recieve(λa86b910dbb90.data);
          }, λc5a684876796.call("\x72\x65\x61\x64\x79", void 0, []);
        }
      };
      constructor(λ3083f9823655) {
        this.init = λ3083f9823655, (0, λ1fcbed977519.O)(), this.id = b(), this.config = λd69dde594eb8(λ24aa0350718e, λ3083f9823655.config || {}), 
        this.studyjetConfig = λd69dde594eb8(λb51ea1bb6068, λc7e053fe0475.sb), this.studyjetConfig = λd69dde594eb8(this.studyjetConfig, λ3083f9823655.studyjetConfig || {}), 
        this.prefix = this.config.prefix + this.id + "\x2f", this.serviceWorkerController = λ3083f9823655.serviceworker, 
        this.ready = Promise.all([ new Promise(λa86b910dbb90 => {
          this.readyResolve = λa86b910dbb90;
        }), this.loadStudyJetWasm(), this.loadSavedCookies(!0) ]).then(() => void 0), this.rpc = new λa86b910dbb90.C(this.methods, "\x74\x61\x62\x63\x68\x61\x6e\x6e\x65\x6c\x2d" + this.id, (λa86b910dbb90, λ3083f9823655) => {
          if (!this.port) throw Error("\x50\x6f\x72\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64");
          this.port.postMessage(λa86b910dbb90, λ3083f9823655);
        }), this.transport = λ3083f9823655.transport, this.cookieSyncChannel.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", this.onCookieSyncMessage), 
        this.setupMessagePort(), navigator.serviceWorker.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", λa86b910dbb90 => {
          if (λa86b910dbb90.data?.$controller$setCookie && "\x6f\x62\x6a\x65\x63\x74" == typeof λa86b910dbb90.data.$controller$setCookie) {
            let λ3083f9823655 = λa86b910dbb90.data.$controller$setCookie;
            if (λ3083f9823655.controllerId && λ3083f9823655.controllerId !== this.id) return;
            λ3083f9823655.options?.clear && this.cookieJar.clear(), this.applyCookieSyncEntries(λ3083f9823655.cookies), 
            "\x73\x74\x72\x69\x6e\x67" == typeof λ3083f9823655.id && this.serviceWorkerController.postMessage({
              $sw$setCookieDone: {
                id: λ3083f9823655.id
              }
            });
            return;
          }
          if (λa86b910dbb90.data.$controller$swrevive) {
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
        let λa86b910dbb90 = new MessageChannel;
        this.port = λa86b910dbb90.port1, this.port.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", this.onTabChannelMessage), 
        this.port.start(), this.serviceWorkerController.postMessage({
          $controller$init: {
            prefix: this.prefix,
            id: this.id
          }
        }, [ λa86b910dbb90.port2 ]);
      }
      applyCookieSyncEntries(λa86b910dbb90) {
        if (Array.isArray(λa86b910dbb90)) for (let λ3083f9823655 of λa86b910dbb90) "\x73\x74\x72\x69\x6e\x67" == typeof λ3083f9823655?.url && "\x73\x74\x72\x69\x6e\x67" == typeof λ3083f9823655.cookie && this.cookieJar.setCookies(λ3083f9823655.cookie, new URL(λ3083f9823655.url));
      }
      async propagateCookieSync(λa86b910dbb90, λ3083f9823655 = {}) {
        this.port && await this.rpc.call("\x73\x65\x6e\x64\x53\x65\x74\x43\x6f\x6f\x6b\x69\x65", {
          cookies: λa86b910dbb90,
          options: λ3083f9823655
        });
      }
      async loadSavedCookies(λa86b910dbb90 = !1) {
        if (λa86b910dbb90 || this.cookieSyncDirty) return this.cookieSyncPromise || (this.cookieSyncPromise = (async () => {
          let λa86b910dbb90 = await w();
          λa86b910dbb90 && λa86b910dbb90.updatedAt > this.cookieUpdatedAt && (this.cookieJar.load(λa86b910dbb90.cookies), 
          this.cookieUpdatedAt = λa86b910dbb90.updatedAt), this.cookieSyncDirty = !1;
        })().finally(() => {
          this.cookieSyncPromise = null;
        })), this.cookieSyncPromise;
      }
      async persistCookies() {
        let λa86b910dbb90 = await k(this.cookieJar.dump(), this.cookieUpdatedAt);
        λa86b910dbb90 <= this.cookieUpdatedAt || (this.cookieUpdatedAt = λa86b910dbb90, 
        this.cookieSyncDirty = !1, this.cookieSyncChannel.postMessage({
          updatedAt: λa86b910dbb90
        }));
      }
      setTransport(λa86b910dbb90) {
        for (let λ3083f9823655 of (this.transport = λa86b910dbb90, this.frames)) λ3083f9823655.controller.transport = λa86b910dbb90, 
        λ3083f9823655.fetchHandler.client.transport = λa86b910dbb90;
      }
      createFrame(λa86b910dbb90, λ3083f9823655 = {}) {
        if (!this.ready) throw Error("\x43\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x69\x73\x20\x6e\x6f\x74\x20\x72\x65\x61\x64\x79\x21\x20\x54\x72\x79\x20\x61\x77\x61\x69\x74\x69\x6e\x67\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2e\x77\x61\x69\x74\x28\x29");
        let λc5a684876796 = new v(this, λa86b910dbb90 ??= document.createElement("\x69\x66\x72\x61\x6d\x65"), λ3083f9823655);
        return this.frames.push(λc5a684876796), λc5a684876796;
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
            \u{67}\u{65}\u{74}\u{49}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{63}\u{72}\u{69}\u{70}\u{74}\u{73}: function e(λa86b910dbb90, λ3083f9823655, λc5a684876796, λa62cae6c1045, λc7e053fe0475, λde4db6f3444d) {
              return (λ1fcbed977519, λ24aa0350718e, λb51ea1bb6068, λ9a95c60bb05d) => {
                var λf9e941900c3c;
                return [ λ9a95c60bb05d(λa86b910dbb90.studyjetPath), λ9a95c60bb05d(λc5a684876796.href + λa86b910dbb90.virtualWasmPath), λ9a95c60bb05d(λa86b910dbb90.\u{69}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{50}\u{61}\u{74}\u{68}), λ9a95c60bb05d("data:text/javascript;charset=utf-8;base64," + (λf9e941900c3c = `\x0a\x09\x09\x09\x09\x09\x64\x6f\x63\x75\x6d\x65\x6e\x74\x2e\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63\x74\x6f\x72\x41\x6c\x6c\x28\x22\x73\x63\x72\x69\x70\x74\x5b\x73\x74\x75\x64\x79\x6a\x65\x74\x2d\x69\x6e\x6a\x65\x63\x74\x65\x64\x5d\x22\x29\x2e\x66\x6f\x72\x45\x61\x63\x68\x28\x73\x63\x72\x69\x70\x74\x20\x3d\x3e\x20\x73\x63\x72\x69\x70\x74\x2e\x72\x65\x6d\x6f\x76\x65\x28\x29\x29\x3b\x0a\x09\x09\x09\x09\x09\x24\x73\x74\x75\x64\x79\x6a\x65\x74\x43\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2e\x6c\x6f\x61\x64\x28\x7b\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x66\x69\x67\x3a\x20${JSON.stringify(λa86b910dbb90)}\x2c\x0a\x09\x09\x09\x09\x09\x09\x73\x6a\x63\x6f\x6e\x66\x69\x67\x3a\x20${JSON.stringify(λ3083f9823655)}\x2c\x0a\x09\x09\x09\x09\x09\x09\x70\x72\x65\x66\x69\x78\x3a\x20\x6e\x65\x77\x20\x55\x52\x4c\x28\x22${λc5a684876796.href}\x22\x29\x2c\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6f\x6b\x69\x65\x73\x3a\x20${JSON.stringify(λa62cae6c1045.dump())}\x2c\x0a\x09\x09\x09\x09\x09\x09\x79\x69\x65\x6c\x64\x47\x65\x74\x49\x6e\x6a\x65\x63\x74\x53\x63\x72\x69\x70\x74\x73\x3a\x20${e.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x45\x6e\x63\x6f\x64\x65\x3a\x20${λc7e053fe0475.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x44\x65\x63\x6f\x64\x65\x3a\x20${λde4db6f3444d.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x69\x6e\x69\x74\x48\x65\x61\x64\x65\x72\x73\x3a\x20${JSON.stringify(λb51ea1bb6068.headers ?? [])}\x2c\x0a\x09\x09\x09\x09\x09\x09\x68\x69\x73\x74\x6f\x72\x79\x3a\x20${JSON.stringify(λb51ea1bb6068.history ?? [])}\x2c\x0a\x09\x09\x09\x09\x09\x7d\x29\x0a\x09\x09\x09\x09`, 
                btoa((new TextEncoder).encode(λf9e941900c3c).reduce((λa86b910dbb90, λ3083f9823655) => (λa86b910dbb90.push(String.fromCharCode(λ3083f9823655)), 
                λa86b910dbb90), []).join("")))) ];
              };
            }(this.controller.config, this.controller.studyjetConfig, new URL(this.prefix, location.href), this.controller.cookieJar, this.controller.config.codec.encode, this.controller.config.codec.decode),
            \u{67}\u{65}\u{74}\u{57}\u{6f}\u{72}\u{6b}\u{65}\u{72}\u{49}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{63}\u{72}\u{69}\u{70}\u{74}\u{73}: (λa86b910dbb90, λ3083f9823655, λc5a684876796) => {
              var λa62cae6c1045;
              let λc7e053fe0475 = "";
              return λc7e053fe0475 += λc5a684876796(this.controller.config.studyjetPath), λc7e053fe0475 += λc5a684876796(this.prefix + this.controller.config.virtualWasmPath), 
              λc7e053fe0475 += λc5a684876796("data:text/javascript;charset=utf-8;base64," + (λa62cae6c1045 = `\x0a\x09\x09\x09\x09\x09\x28\x28\x29\x3d\x3e\x7b\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x7b\x20\x53\x74\x75\x64\x79\x4a\x65\x74\x43\x6c\x69\x65\x6e\x74\x2c\x20\x43\x6f\x6f\x6b\x69\x65\x4a\x61\x72\x2c\x20\x73\x65\x74\x57\x61\x73\x6d\x20\x7d\x20\x3d\x20\x24\x73\x74\x75\x64\x79\x6a\x65\x74\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x73\x65\x74\x57\x61\x73\x6d\x28\x55\x69\x6e\x74\x38\x41\x72\x72\x61\x79\x2e\x66\x72\x6f\x6d\x28\x61\x74\x6f\x62\x28\x73\x65\x6c\x66\x2e\x57\x41\x53\x4d\x29\x2c\x20\x28\x63\x29\x20\x3d\x3e\x20\x63\x2e\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74\x28\x30\x29\x29\x29\x3b\x0a\x09\x09\x09\x09\x09\x09\x64\x65\x6c\x65\x74\x65\x20\x73\x65\x6c\x66\x2e\x57\x41\x53\x4d\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x73\x6a\x63\x6f\x6e\x66\x69\x67\x20\x3d\x20${JSON.stringify(this.controller.studyjetConfig)}\x3b\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x70\x72\x65\x66\x69\x78\x20\x3d\x20\x6e\x65\x77\x20\x55\x52\x4c\x28\x22${this.prefix}\x22\x2c\x20\x6c\x6f\x63\x61\x74\x69\x6f\x6e\x2e\x68\x72\x65\x66\x29\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x3d\x20\x7b\x0a\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x66\x69\x67\x3a\x20\x73\x6a\x63\x6f\x6e\x66\x69\x67\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x70\x72\x65\x66\x69\x78\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x69\x6e\x74\x65\x72\x66\x61\x63\x65\x3a\x20\x7b\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x45\x6e\x63\x6f\x64\x65\x3a\x20${this.controller.config.codec.encode.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x44\x65\x63\x6f\x64\x65\x3a\x20${this.controller.config.codec.decode.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x7d\x2c\x0a\x09\x09\x09\x09\x09\x09\x7d\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x63\x6c\x69\x65\x6e\x74\x20\x3d\x20\x6e\x65\x77\x20\x53\x74\x75\x64\x79\x4a\x65\x74\x43\x6c\x69\x65\x6e\x74\x28\x67\x6c\x6f\x62\x61\x6c\x54\x68\x69\x73\x2c\x20\x7b\x0a\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x74\x65\x78\x74\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x3a\x20\x6e\x75\x6c\x6c\x2c\x0a\x09\x09\x09\x09\x09\x09\x7d\x29\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6c\x69\x65\x6e\x74\x2e\x68\x6f\x6f\x6b\x28\x29\x3b\x0a\x09\x09\x09\x09\x09\x7d\x29\x28\x29\x3b\x0a\x09\x09\x09\x09\x09`, 
              btoa((new TextEncoder).encode(λa62cae6c1045).reduce((λa86b910dbb90, λ3083f9823655) => (λa86b910dbb90.push(String.fromCharCode(λ3083f9823655)), 
              λa86b910dbb90), []).join(""))));
            },
            codecEncode: this.controller.config.codec.encode,
            codecDecode: this.controller.config.codec.decode
          }
        };
      }
      plugins=[];
      constructor(λa86b910dbb90, λc5a684876796, λa62cae6c1045 = {}) {
        for (const λ1fcbed977519 of (this.controller = λa86b910dbb90, this.element = λc5a684876796, 
        this.options = λa62cae6c1045, this.id = b(), this.prefix = this.controller.prefix + this.id + "\x2f", 
        this.fetchHandler = new λc7e053fe0475.mK({
          crossOriginIsolated: self.crossOriginIsolated,
          context: this.context,
          transport: λa86b910dbb90.transport,
          async sendSetCookie(λ3083f9823655, λc5a684876796) {
            await λa86b910dbb90.persistCookies(), await λa86b910dbb90.propagateCookieSync(λ3083f9823655.map(({url: λa86b910dbb90, cookie: λ3083f9823655}) => ({
              url: λa86b910dbb90.href,
              cookie: λ3083f9823655
            })), λc5a684876796);
          },
          fetchBlobUrl: async λa86b910dbb90 => λ3083f9823655.Sr.fromNativeResponse(await fetch(λa86b910dbb90)),
          fetchDataUrl: async λa86b910dbb90 => λ3083f9823655.Sr.fromNativeResponse(await fetch(λa86b910dbb90))
        }), this.hooks = {
          fetch: this.fetchHandler.hooks.fetch,
          init: λc7e053fe0475.Cx.create(),
          error: λc7e053fe0475.Cx.create()
        }, λc5a684876796[λde4db6f3444d.I] = this, this.plugins = λa62cae6c1045.plugins ?? [], 
        this.plugins)) {
          for (const λa86b910dbb90 of λ1fcbed977519.dependencies) if (!this.plugins.find(λ3083f9823655 => λ3083f9823655.name === λa86b910dbb90)) throw Error(`\x44\x65\x70\x65\x6e\x64\x65\x6e\x63\x79\x20${λa86b910dbb90}\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x66\x6f\x72\x20\x70\x6c\x75\x67\x69\x6e\x20${λ1fcbed977519.name}`);
          λ1fcbed977519.install(this);
        }
      }
      getPlugin(λa86b910dbb90) {
        let λ3083f9823655 = this.plugins.find(λ3083f9823655 => λ3083f9823655.name === λa86b910dbb90);
        if (!λ3083f9823655) throw Error(`\x50\x6c\x75\x67\x69\x6e\x20${λa86b910dbb90}\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64`);
        return λ3083f9823655;
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
      go(λa86b910dbb90) {
        let λ3083f9823655 = (0, λc7e053fe0475.Oy)(λa86b910dbb90, this.context, {
          origin: new URL(location.href),
          base: new URL(location.href)
        });
        this.element.src = λ3083f9823655;
      }
    }
  })(), $studyjetController = λc5a684876796;
})();
