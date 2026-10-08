var $studyjetController;

(() => {
  var λ50cb8c9ee326 = {
    286(λ50cb8c9ee326, λ7038393a8e50, λ9da3944e38b6) {
      λ9da3944e38b6.d(λ7038393a8e50, {
        I: () => λ4d25395fe099
      });
      let λ4d25395fe099 = Symbol.for("\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x66\x72\x61\x6d\x65\x20\x68\x61\x6e\x64\x6c\x65");
    },
    355(λ50cb8c9ee326, λ7038393a8e50, λ9da3944e38b6) {
      λ9da3944e38b6.d(λ7038393a8e50, {
        O: () => s,
        x: () => λ4d25395fe099
      });
      let λ4d25395fe099 = "\x30\x2e\x30\x2e\x31\x34";
      function s() {
        if ("\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" == typeof $studyjet) throw Error("\x40\x6d\x65\x72\x63\x75\x72\x79\x77\x6f\x72\x6b\x73\x68\x6f\x70\x2f\x73\x74\x75\x64\x79\x6a\x65\x74\x20\x69\x73\x20\x6e\x6f\x74\x20\x6c\x6f\x61\x64\x65\x64\x2e\x20\x4c\x6f\x61\x64\x20\x73\x74\x75\x64\x79\x6a\x65\x74\x20\x62\x65\x66\x6f\x72\x65\x20\x74\x68\x65\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2e");
        var λ50cb8c9ee326 = "\x32\x2e\x30\x2e\x36\x37\x2d\x61\x6c\x70\x68\x61\x2e\x32", λ7038393a8e50 = $studyjet.versionInfo.version;
        if (λ50cb8c9ee326 !== λ7038393a8e50) throw Error(`\x40\x6d\x65\x72\x63\x75\x72\x79\x77\x6f\x72\x6b\x73\x68\x6f\x70\x2f\x73\x74\x75\x64\x79\x6a\x65\x74\x20\x76\x65\x72\x73\x69\x6f\x6e\x20\x6d\x69\x73\x6d\x61\x74\x63\x68\x3a\x20\x74\x68\x69\x73\x20\x62\x75\x69\x6c\x64\x20\x65\x78\x70\x65\x63\x74\x73\x20${λ50cb8c9ee326}\x2c\x20\x62\x75\x74\x20\x74\x68\x65\x20\x6c\x6f\x61\x64\x65\x64\x20\x72\x75\x6e\x74\x69\x6d\x65\x20\x69\x73\x20${λ7038393a8e50}`);
      }
    },
    805(λ50cb8c9ee326, λ7038393a8e50, λ9da3944e38b6) {
      λ9da3944e38b6.d(λ7038393a8e50, {
        C: () => o
      });
      class o {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λ50cb8c9ee326, λ7038393a8e50, λ9da3944e38b6) {
          this.methods = λ50cb8c9ee326, this.id = λ7038393a8e50, this.sendRaw = λ9da3944e38b6;
        }
        recieve(λ50cb8c9ee326) {
          if (null == λ50cb8c9ee326 || "\x6f\x62\x6a\x65\x63\x74" != typeof λ50cb8c9ee326) return;
          let λ7038393a8e50 = λ50cb8c9ee326[this.id];
          if (null == λ7038393a8e50 || "\x6f\x62\x6a\x65\x63\x74" != typeof λ7038393a8e50) return;
          let λ9da3944e38b6 = λ7038393a8e50.$type;
          if ("\x72\x65\x73\x70\x6f\x6e\x73\x65" === λ9da3944e38b6) {
            let λ50cb8c9ee326 = λ7038393a8e50.$token, λ9da3944e38b6 = λ7038393a8e50.$data, λ4d25395fe099 = λ7038393a8e50.$error, λ59a451e738db = this.promiseCallbacks.get(λ50cb8c9ee326);
            if (!λ59a451e738db) return;
            this.promiseCallbacks.delete(λ50cb8c9ee326), void 0 !== λ4d25395fe099 ? λ59a451e738db.reject(Error(λ4d25395fe099)) : λ59a451e738db.resolve(λ9da3944e38b6);
          } else if ("\x72\x65\x71\x75\x65\x73\x74" === λ9da3944e38b6) {
            let λ50cb8c9ee326 = λ7038393a8e50.$method, λ9da3944e38b6 = λ7038393a8e50.$args;
            this.methods[λ50cb8c9ee326](λ9da3944e38b6).then(λ50cb8c9ee326 => {
              this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ7038393a8e50.$token,
                  $data: λ50cb8c9ee326?.[0]
                }
              }, λ50cb8c9ee326?.[1]);
            }).catch(λ50cb8c9ee326 => {
              console.error(λ50cb8c9ee326), this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ7038393a8e50.$token,
                  $error: λ50cb8c9ee326?.toString() || "\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x65\x72\x72\x6f\x72"
                }
              }, []);
            });
          }
        }
        call(λ50cb8c9ee326, λ7038393a8e50, λ9da3944e38b6 = []) {
          let λ4d25395fe099 = this.counter++;
          return new Promise((λ59a451e738db, λ2b22fa9b6b5f) => {
            this.promiseCallbacks.set(λ4d25395fe099, {
              resolve: λ59a451e738db,
              reject: λ2b22fa9b6b5f
            }), this.sendRaw({
              [this.id]: {
                $type: "\x72\x65\x71\x75\x65\x73\x74",
                $method: λ50cb8c9ee326,
                $args: λ7038393a8e50,
                $token: λ4d25395fe099
              }
            }, λ9da3944e38b6);
          });
        }
      }
    },
    986(λ50cb8c9ee326) {
      let λ7038393a8e50 = Object.getPrototypeOf({});
      function r() {
        return function(λ50cb8c9ee326) {
          return "\x6f\x62\x6a\x65\x63\x74" == typeof λ50cb8c9ee326 && null !== λ50cb8c9ee326 && !(λ50cb8c9ee326 instanceof RegExp) && !(λ50cb8c9ee326 instanceof Date);
        };
      }
      function o(λ50cb8c9ee326) {
        function o(λ50cb8c9ee326) {
          return "\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72" !== λ50cb8c9ee326 && "\x70\x72\x6f\x74\x6f\x74\x79\x70\x65" !== λ50cb8c9ee326 && "\x5f\x5f\x70\x72\x6f\x74\x6f\x5f\x5f" !== λ50cb8c9ee326;
        }
        let λ9da3944e38b6 = Object.prototype.propertyIsEnumerable, λ4d25395fe099 = λ50cb8c9ee326?.symbols ? function(λ50cb8c9ee326) {
          let λ7038393a8e50 = Object.keys(λ50cb8c9ee326), λ4d25395fe099 = Object.getOwnPropertySymbols(λ50cb8c9ee326);
          for (let λ59a451e738db = 0, λ2b22fa9b6b5f = λ4d25395fe099.length; λ59a451e738db < λ2b22fa9b6b5f; ++λ59a451e738db) λ9da3944e38b6.call(λ50cb8c9ee326, λ4d25395fe099[λ59a451e738db]) && λ7038393a8e50.push(λ4d25395fe099[λ59a451e738db]);
          return λ7038393a8e50;
        } : Object.keys, λ59a451e738db = "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ50cb8c9ee326?.cloneProtoObject ? λ50cb8c9ee326.cloneProtoObject : void 0, λ2b22fa9b6b5f = "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ50cb8c9ee326?.isMergeableObject ? λ50cb8c9ee326.isMergeableObject : r(), λcf30bd811464 = λ50cb8c9ee326?.onlyDefinedProperties === !0, λ86cab4b0d21d = λ50cb8c9ee326 && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ50cb8c9ee326.mergeArray ? λ50cb8c9ee326.mergeArray({
          clone: d,
          deepmerge: h,
          getKeys: λ4d25395fe099,
          isMergeableObject: λ2b22fa9b6b5f
        }) : function(λ50cb8c9ee326, λ7038393a8e50) {
          let λ9da3944e38b6 = λ50cb8c9ee326.length, λ4d25395fe099 = λ7038393a8e50.length, λ59a451e738db = 0, λ2b22fa9b6b5f = Array(λ9da3944e38b6 + λ4d25395fe099);
          for (;λ59a451e738db < λ9da3944e38b6; ++λ59a451e738db) λ2b22fa9b6b5f[λ59a451e738db] = d(λ50cb8c9ee326[λ59a451e738db]);
          for (λ59a451e738db = 0; λ59a451e738db < λ4d25395fe099; ++λ59a451e738db) λ2b22fa9b6b5f[λ59a451e738db + λ9da3944e38b6] = d(λ7038393a8e50[λ59a451e738db]);
          return λ2b22fa9b6b5f;
        };
        function d(λ50cb8c9ee326) {
          return λ2b22fa9b6b5f(λ50cb8c9ee326) ? Array.isArray(λ50cb8c9ee326) ? function(λ50cb8c9ee326) {
            let λ7038393a8e50 = 0, λ9da3944e38b6 = λ50cb8c9ee326.length, λ4d25395fe099 = Array(λ9da3944e38b6);
            for (;λ7038393a8e50 < λ9da3944e38b6; ++λ7038393a8e50) λ4d25395fe099[λ7038393a8e50] = d(λ50cb8c9ee326[λ7038393a8e50]);
            return λ4d25395fe099;
          }(λ50cb8c9ee326) : function(λ50cb8c9ee326) {
            let λ9da3944e38b6, λ2b22fa9b6b5f, λcf30bd811464, λ86cab4b0d21d = {};
            if (λ59a451e738db && Object.getPrototypeOf(λ50cb8c9ee326) !== λ7038393a8e50) return λ59a451e738db(λ50cb8c9ee326);
            let λa1baa75c6b2e = λ4d25395fe099(λ50cb8c9ee326);
            for (λ9da3944e38b6 = 0, λ2b22fa9b6b5f = λa1baa75c6b2e.length; λ9da3944e38b6 < λ2b22fa9b6b5f; ++λ9da3944e38b6) o(λcf30bd811464 = λa1baa75c6b2e[λ9da3944e38b6]) && (λ86cab4b0d21d[λcf30bd811464] = d(λ50cb8c9ee326[λcf30bd811464]));
            return λ86cab4b0d21d;
          }(λ50cb8c9ee326) : λ50cb8c9ee326;
        }
        function h(λ50cb8c9ee326, λ9da3944e38b6) {
          if (λcf30bd811464 && void 0 === λ9da3944e38b6) return d(λ50cb8c9ee326);
          let λa1baa75c6b2e = Array.isArray(λ9da3944e38b6), λ150c5a05ff81 = Array.isArray(λ50cb8c9ee326);
          return "\x6f\x62\x6a\x65\x63\x74" != typeof λ9da3944e38b6 || null === λ9da3944e38b6 ? λ9da3944e38b6 : λ2b22fa9b6b5f(λ50cb8c9ee326) ? λa1baa75c6b2e && λ150c5a05ff81 ? λ86cab4b0d21d(λ50cb8c9ee326, λ9da3944e38b6) : λa1baa75c6b2e !== λ150c5a05ff81 ? d(λ9da3944e38b6) : function(λ50cb8c9ee326, λ9da3944e38b6) {
            let λ86cab4b0d21d, λa1baa75c6b2e, λ150c5a05ff81, λfc90544635a9 = {}, λ829f79949e05 = λ4d25395fe099(λ50cb8c9ee326), λcb63da331902 = λ4d25395fe099(λ9da3944e38b6);
            for (λ86cab4b0d21d = 0, λa1baa75c6b2e = λ829f79949e05.length; λ86cab4b0d21d < λa1baa75c6b2e; ++λ86cab4b0d21d) o(λ150c5a05ff81 = λ829f79949e05[λ86cab4b0d21d]) && -1 === λcb63da331902.indexOf(λ150c5a05ff81) && (λfc90544635a9[λ150c5a05ff81] = d(λ50cb8c9ee326[λ150c5a05ff81]));
            for (λ86cab4b0d21d = 0, λa1baa75c6b2e = λcb63da331902.length; λ86cab4b0d21d < λa1baa75c6b2e; ++λ86cab4b0d21d) if (o(λ150c5a05ff81 = λcb63da331902[λ86cab4b0d21d])) if (λ150c5a05ff81 in λ50cb8c9ee326) -1 !== λ829f79949e05.indexOf(λ150c5a05ff81) && (λ59a451e738db && λ2b22fa9b6b5f(λ9da3944e38b6[λ150c5a05ff81]) && Object.getPrototypeOf(λ9da3944e38b6[λ150c5a05ff81]) !== λ7038393a8e50 ? λfc90544635a9[λ150c5a05ff81] = λ59a451e738db(λ9da3944e38b6[λ150c5a05ff81]) : λfc90544635a9[λ150c5a05ff81] = h(λ50cb8c9ee326[λ150c5a05ff81], λ9da3944e38b6[λ150c5a05ff81])); else {
              if (λcf30bd811464 && void 0 === λ9da3944e38b6[λ150c5a05ff81]) continue;
              λfc90544635a9[λ150c5a05ff81] = d(λ9da3944e38b6[λ150c5a05ff81]);
            }
            return λfc90544635a9;
          }(λ50cb8c9ee326, λ9da3944e38b6) : d(λ9da3944e38b6);
        }
        return λ50cb8c9ee326?.all ? function() {
          let λ50cb8c9ee326;
          switch (arguments.length) {
           case 0:
            return {};

           case 1:
            return d(arguments[0]);

           case 2:
            return h(arguments[0], arguments[1]);
          }
          for (let λ7038393a8e50 = 0, λ9da3944e38b6 = arguments.length; λ7038393a8e50 < λ9da3944e38b6; ++λ7038393a8e50) λ50cb8c9ee326 = h(λ50cb8c9ee326, arguments[λ7038393a8e50]);
          return λ50cb8c9ee326;
        } : h;
      }
      λ50cb8c9ee326.exports = o, λ50cb8c9ee326.exports.default = o, λ50cb8c9ee326.exports.deepmerge = o, 
      Object.defineProperty(λ50cb8c9ee326.exports, "\x69\x73\x4d\x65\x72\x67\x65\x61\x62\x6c\x65\x4f\x62\x6a\x65\x63\x74", {
        get: r
      });
    },
    235(λ50cb8c9ee326, λ7038393a8e50, λ9da3944e38b6) {
      λ9da3944e38b6.d(λ7038393a8e50, {
        Sr: () => s
      }), WebSocket.CLOSED, WebSocket.CONNECTING, WebSocket.OPEN, EventTarget;
      let λ4d25395fe099 = [ 101, 204, 205, 304 ];
      class s extends Response {
        url;
        rawHeaders;
        redirected=!1;
        static fromTransferrableResponse(λ50cb8c9ee326, λ7038393a8e50) {
          let λ9da3944e38b6 = new s(λ4d25395fe099.includes(λ50cb8c9ee326.status) ? void 0 : λ50cb8c9ee326.body, {
            headers: new Headers(λ50cb8c9ee326.headers),
            status: λ50cb8c9ee326.status,
            statusText: λ50cb8c9ee326.statusText
          });
          return λ9da3944e38b6.url = λ7038393a8e50, λ9da3944e38b6.redirected = λ50cb8c9ee326.status >= 300 && λ50cb8c9ee326.status < 400 && void 0 !== λ50cb8c9ee326.headers.location, 
          λ9da3944e38b6.rawHeaders = λ50cb8c9ee326.headers, λ9da3944e38b6;
        }
        static fromNativeResponse(λ50cb8c9ee326) {
          let λ7038393a8e50 = new s(λ4d25395fe099.includes(λ50cb8c9ee326.status) ? void 0 : λ50cb8c9ee326.body, {
            headers: λ50cb8c9ee326.headers,
            status: λ50cb8c9ee326.status,
            statusText: λ50cb8c9ee326.statusText
          });
          return λ7038393a8e50.url = λ50cb8c9ee326.url, λ7038393a8e50.rawHeaders = [ ...λ50cb8c9ee326.headers ], 
          λ7038393a8e50.redirected = λ50cb8c9ee326.redirected, λ7038393a8e50;
        }
      }
    },
    423(λ50cb8c9ee326, λ7038393a8e50, λ9da3944e38b6) {
      λ9da3944e38b6.d(λ7038393a8e50, {
        Cx: () => λ5127a72612ff,
        Oy: () => λ2d370c9a59ee,
        cP: () => λ59a451e738db,
        ht: () => λ315fe020000a,
        k_: () => λcf30bd811464,
        mK: () => λfc90544635a9,
        sb: () => λ9f85dba6db7e,
        uh: () => λcb63da331902
      });
      let {BareResponse: λ4d25395fe099, CookieJar: λ59a451e738db, IncrementalHtmlRewriter: λ2b22fa9b6b5f, Plugin: λcf30bd811464, STUDYJETCLIENT: λ86cab4b0d21d, STUDYJETCLIENTNAME: λa1baa75c6b2e, StudyJetClient: λ150c5a05ff81, StudyJetFetchHandler: λfc90544635a9, StudyJetFetchTrackedClient: λ829f79949e05, StudyJetHeaders: λcb63da331902, Tap: λ5127a72612ff, \u{63}\u{72}\u{65}\u{61}\u{74}\u{65}\u{4c}\u{6f}\u{63}\u{61}\u{74}\u{69}\u{6f}\u{6e}\u{50}\u{72}\u{6f}\u{78}\u{79}: λf845ace89c0f, defaultConfig: λ9f85dba6db7e, defaultConfigDev: λa63ae0e456d3, flagEnabled: λ23be7ef2f6e2, getOwnPropertyDescriptorHandler: λ63dba566b70f, getRewriter: λ2780bebc33ab, getScriptBlockTypeString: λ30081080b122, htmlRules: λ11147fe5f3c7, isArchiveMimeType: λ44971240a02e, isAudioOrVideoMimeType: λ974f4a9014e3, isFontMimeType: λ00eb56730bf7, isHtmlMimeType: λ014ad7b0c70a, isImageMimeType: λfb76af019bae, isInlineDisplayableMimeType: λ42379723e7d5, isJavascriptMimeType: λadaf50960176, isJavascriptMimeTypeEssenceMatch: λa8b309a3b0ef, isModuleScriptType: λ08609573e51b, isScriptType: λa11db93dee58, isScriptableMimeType: λ9a6538cd932b, isXmlMimeType: λ6c5806d774b6, isZipBasedMimeType: λbe68e417dd90, isdedicated: λ0cb63f020536, isshared: λdc11d337c143, issw: λ4b61f0137f85, iswindow: λ46b8a4823e28, isworker: λ44e65179eea6, parseMimeType: λ52f22f72dbba, rewriteBlob: λb10c1d069a95, rewriteCss: λad4b6f2aaa6e, rewriteHtml: λ565d82270ca1, rewriteJs: λ6b8bf696bce0, rewriteJsInner: λ9f3a5389258e, rewriteSrcset: λ5c19de20b61d, rewriteUrl: λ2d370c9a59ee, rewriteWorkers: λ953629cd1d91, setWasm: λ315fe020000a, unrewriteBlob: λ18c96bee55db, unrewriteCss: λ1cdcb256d555, unrewriteHtml: λf66c8abfba5f, unrewriteUrl: λfd6a32f99dda, versionInfo: λ6a7d5052d65d} = globalThis.$studyjet;
    }
  }, λ7038393a8e50 = {};
  function r(λ9da3944e38b6) {
    var λ4d25395fe099 = λ7038393a8e50[λ9da3944e38b6];
    if (void 0 !== λ4d25395fe099) return λ4d25395fe099.exports;
    var λ59a451e738db = λ7038393a8e50[λ9da3944e38b6] = {
      exports: {}
    };
    return λ50cb8c9ee326[λ9da3944e38b6](λ59a451e738db, λ59a451e738db.exports, r), λ59a451e738db.exports;
  }
  r.n = λ50cb8c9ee326 => {
    var λ7038393a8e50 = λ50cb8c9ee326 && λ50cb8c9ee326.__esModule ? () => λ50cb8c9ee326.default : () => λ50cb8c9ee326;
    return r.d(λ7038393a8e50, {
      a: λ7038393a8e50
    }), λ7038393a8e50;
  }, r.d = (λ50cb8c9ee326, λ7038393a8e50) => {
    for (var λ9da3944e38b6 in λ7038393a8e50) r.o(λ7038393a8e50, λ9da3944e38b6) && !r.o(λ50cb8c9ee326, λ9da3944e38b6) && Object.defineProperty(λ50cb8c9ee326, λ9da3944e38b6, {
      enumerable: !0,
      get: λ7038393a8e50[λ9da3944e38b6]
    });
  }, r.o = (λ50cb8c9ee326, λ7038393a8e50) => Object.prototype.hasOwnProperty.call(λ50cb8c9ee326, λ7038393a8e50), 
  r.r = λ50cb8c9ee326 => {
    "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λ50cb8c9ee326, Symbol.toStringTag, {
      value: "\x4d\x6f\x64\x75\x6c\x65"
    }), Object.defineProperty(λ50cb8c9ee326, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
      value: !0
    });
  };
  var λ9da3944e38b6 = {};
  (() => {
    r.r(λ9da3944e38b6), r.d(λ9da3944e38b6, {
      Controller: () => S,
      Frame: () => v,
      ManagedPlugin: () => d,
      VERSION: () => λcf30bd811464.x,
      assertRuntimeStudyJetVersion: () => λcf30bd811464.O,
      config: () => λ86cab4b0d21d
    });
    var λ50cb8c9ee326 = r(805), λ7038393a8e50 = r(235), λ4d25395fe099 = r(986), λ59a451e738db = r(423), λ2b22fa9b6b5f = r(286), λcf30bd811464 = r(355);
    let λ86cab4b0d21d = {
      prefix: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x7e\x2f\x73\x74\x75\x64\x79\x2f",
      studyjetPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x73\x74\x75\x64\x79\x6a\x65\x74\x2f\x40\x72\x36\x39\x63\x31\x38\x66\x39\x62\x64\x34\x65\x64\x31\x37\x35\x63\x39\x65\x61\x35\x30\x35\x62\x38\x21\x2e\x6a\x73",
      \u{69}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{50}\u{61}\u{74}\u{68}: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2f\x40\x72\x39\x65\x38\x35\x35\x61\x63\x38\x32\x65\x64\x63\x34\x62\x35\x31\x65\x31\x33\x34\x30\x35\x36\x34\x21\x2e\x6a\x73",
      wasmPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x73\x74\x75\x64\x79\x6a\x65\x74\x2f\x40\x72\x35\x35\x32\x38\x36\x63\x66\x65\x30\x39\x64\x37\x34\x31\x30\x32\x33\x63\x63\x33\x65\x31\x64\x36\x21\x2e\x77\x61\x73\x6d",
      virtualWasmPath: "\x73\x74\x75\x64\x79\x6a\x65\x74\x2e\x77\x61\x73\x6d\x2e\x6a\x73",
      codec: {
        encode: λ50cb8c9ee326 => λ50cb8c9ee326 ? encodeURIComponent(λ50cb8c9ee326) : λ50cb8c9ee326,
        decode: λ50cb8c9ee326 => λ50cb8c9ee326 ? decodeURIComponent(λ50cb8c9ee326) : λ50cb8c9ee326
      }
    }, λa1baa75c6b2e = {
      flags: {
        ...λ59a451e738db.sb.flags,
        allowFailedIntercepts: !0
      },
      maskedfiles: [ "\x69\x6e\x6a\x65\x63\x74\x2e\x6a\x73", "\x73\x74\x75\x64\x79\x6a\x65\x74\x2e\x77\x61\x73\x6d\x2e\x6a\x73" ]
    };
    class d extends λ59a451e738db.k_ {
      frame=null;
      dependencies=[];
      constructor(λ50cb8c9ee326, λ7038393a8e50) {
        super(λ50cb8c9ee326), this.dependencies = λ7038393a8e50;
      }
      install(λ50cb8c9ee326) {
        this.frame = λ50cb8c9ee326;
      }
    }
    let λ150c5a05ff81 = "\x73\x74\x61\x74\x65", λfc90544635a9 = "\x63\x6f\x6f\x6b\x69\x65\x73", λ829f79949e05 = null;
    function u(λ50cb8c9ee326) {
      return "\x6f\x62\x6a\x65\x63\x74" == typeof λ50cb8c9ee326 && null !== λ50cb8c9ee326 && "\x6e\x75\x6d\x62\x65\x72" == typeof λ50cb8c9ee326.updatedAt && Number.isFinite(λ50cb8c9ee326.updatedAt) && "\x73\x74\x72\x69\x6e\x67" == typeof λ50cb8c9ee326.cookies ? λ50cb8c9ee326 : null;
    }
    function y(λ50cb8c9ee326) {
      return new Promise((λ7038393a8e50, λ9da3944e38b6) => {
        λ50cb8c9ee326.onsuccess = () => λ7038393a8e50(λ50cb8c9ee326.result), λ50cb8c9ee326.onerror = () => λ9da3944e38b6(λ50cb8c9ee326.error ?? Error("\x49\x6e\x64\x65\x78\x65\x64\x44\x42\x20\x72\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64"));
      });
    }
    function m(λ50cb8c9ee326) {
      return new Promise((λ7038393a8e50, λ9da3944e38b6) => {
        λ50cb8c9ee326.oncomplete = () => λ7038393a8e50(), λ50cb8c9ee326.onabort = () => λ9da3944e38b6(λ50cb8c9ee326.error ?? Error("\x49\x6e\x64\x65\x78\x65\x64\x44\x42\x20\x74\x72\x61\x6e\x73\x61\x63\x74\x69\x6f\x6e\x20\x61\x62\x6f\x72\x74\x65\x64")), 
        λ50cb8c9ee326.onerror = () => λ9da3944e38b6(λ50cb8c9ee326.error ?? Error("\x49\x6e\x64\x65\x78\x65\x64\x44\x42\x20\x74\x72\x61\x6e\x73\x61\x63\x74\x69\x6f\x6e\x20\x66\x61\x69\x6c\x65\x64"));
      });
    }
    function g() {
      return λ829f79949e05 || (λ829f79949e05 = new Promise((λ50cb8c9ee326, λ7038393a8e50) => {
        let λ9da3944e38b6 = indexedDB.open("\x40\x64\x39\x34\x31\x62\x63\x36\x35\x61\x66\x33", 1);
        λ9da3944e38b6.onupgradeneeded = () => {
          let λ50cb8c9ee326 = λ9da3944e38b6.result;
          λ50cb8c9ee326.objectStoreNames.contains(λ150c5a05ff81) || λ50cb8c9ee326.createObjectStore(λ150c5a05ff81);
        }, λ9da3944e38b6.onsuccess = () => λ50cb8c9ee326(λ9da3944e38b6.result), λ9da3944e38b6.onerror = () => λ7038393a8e50(λ9da3944e38b6.error ?? Error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x6f\x70\x65\x6e\x20\x63\x6f\x6f\x6b\x69\x65\x20\x64\x61\x74\x61\x62\x61\x73\x65"));
      }));
    }
    async function w() {
      try {
        let λ50cb8c9ee326 = (await g()).transaction(λ150c5a05ff81, "\x72\x65\x61\x64\x6f\x6e\x6c\x79"), λ7038393a8e50 = λ50cb8c9ee326.objectStore(λ150c5a05ff81), λ9da3944e38b6 = await y(λ7038393a8e50.get(λfc90544635a9));
        return await m(λ50cb8c9ee326), u(λ9da3944e38b6);
      } catch (λ50cb8c9ee326) {
        return console.error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x72\x65\x61\x64\x20\x70\x65\x72\x73\x69\x73\x74\x65\x64\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x63\x6f\x6f\x6b\x69\x65\x73\x3a", λ50cb8c9ee326), 
        null;
      }
    }
    async function k(λ50cb8c9ee326, λ7038393a8e50) {
      try {
        let λ9da3944e38b6 = (await g()).transaction(λ150c5a05ff81, "\x72\x65\x61\x64\x77\x72\x69\x74\x65"), λ4d25395fe099 = λ9da3944e38b6.objectStore(λ150c5a05ff81), λ59a451e738db = u(await y(λ4d25395fe099.get(λfc90544635a9))), λ2b22fa9b6b5f = Math.max(Date.now(), λ7038393a8e50 + 1, (λ59a451e738db?.updatedAt ?? 0) + 1);
        return λ4d25395fe099.put({
          updatedAt: λ2b22fa9b6b5f,
          cookies: λ50cb8c9ee326
        }, λfc90544635a9), await m(λ9da3944e38b6), λ2b22fa9b6b5f;
      } catch (λ50cb8c9ee326) {
        return console.error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x70\x65\x72\x73\x69\x73\x74\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x63\x6f\x6f\x6b\x69\x65\x73\x3a", λ50cb8c9ee326), λ7038393a8e50;
      }
    }
    function b() {
      return Math.random().toString(36).substring(2, 10);
    }
    let λcb63da331902 = (0, λ4d25395fe099.deepmerge)();
    class S {
      init;
      id;
      config;
      studyjetConfig;
      prefix;
      cookieJar=new λ59a451e738db.cP;
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
      onTabChannelMessage=λ50cb8c9ee326 => {
        this.rpc.recieve(λ50cb8c9ee326.data);
      };
      onCookieSyncMessage=λ50cb8c9ee326 => {
        let λ7038393a8e50 = "\x6f\x62\x6a\x65\x63\x74" == typeof λ50cb8c9ee326.data && null !== λ50cb8c9ee326.data ? λ50cb8c9ee326.data.updatedAt : void 0;
        "\x6e\x75\x6d\x62\x65\x72" != typeof λ7038393a8e50 || λ7038393a8e50 <= this.cookieUpdatedAt || (this.cookieSyncDirty = !0, 
        this.loadSavedCookies());
      };
      async loadStudyJetWasm() {
        if (this.wasmAlreadyFetched) return;
        let λ50cb8c9ee326 = await fetch(this.config.wasmPath);
        (0, λ59a451e738db.ht)(await λ50cb8c9ee326.arrayBuffer()), this.wasmAlreadyFetched = !0;
      }
      methods={
        ready: async () => {
          this.readyResolve(), setTimeout(() => {
            this.guardServiceWorkerRevive = !1;
          }, 5e3);
        },
        request: async λ50cb8c9ee326 => {
          let λ7038393a8e50 = new URL(λ50cb8c9ee326.rawUrl).pathname, λ9da3944e38b6 = this.frames.find(λ50cb8c9ee326 => λ7038393a8e50.startsWith(λ50cb8c9ee326.prefix));
          if (!λ9da3944e38b6) throw Error("\x4e\x6f\x20\x66\x72\x61\x6d\x65\x20\x66\x6f\x75\x6e\x64\x20\x66\x6f\x72\x20\x72\x65\x71\x75\x65\x73\x74");
          try {
            if (await this.loadSavedCookies(), λ7038393a8e50 === λ9da3944e38b6.prefix + this.config.virtualWasmPath) {
              if (!this.wasmPayload) {
                let λ50cb8c9ee326 = await fetch(this.config.wasmPath), λ7038393a8e50 = await λ50cb8c9ee326.arrayBuffer(), λ9da3944e38b6 = btoa(new Uint8Array(λ7038393a8e50).reduce((λ50cb8c9ee326, λ7038393a8e50) => (λ50cb8c9ee326.push(String.fromCharCode(λ7038393a8e50)), 
                λ50cb8c9ee326), []).join(""));
                this.wasmPayload = `\x73\x65\x6c\x66\x2e\x57\x41\x53\x4d\x20\x3d\x20\x27${λ9da3944e38b6}\x27\x3b`;
              }
              return [ {
                body: this.wasmPayload,
                status: 200,
                statusText: "\x4f\x4b",
                headers: [ [ "\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65", "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x61\x76\x61\x73\x63\x72\x69\x70\x74" ] ]
              }, [] ];
            }
            let λ4d25395fe099 = λ59a451e738db.uh.fromRawHeaders(λ50cb8c9ee326.initialHeaders), λ2b22fa9b6b5f = await λ9da3944e38b6.fetchHandler.handleFetch({
              initialHeaders: λ4d25395fe099,
              rawClientUrl: λ50cb8c9ee326.rawClientUrl ? new URL(λ50cb8c9ee326.rawClientUrl) : void 0,
              rawUrl: new URL(λ50cb8c9ee326.rawUrl),
              rawReferrer: λ50cb8c9ee326.rawReferrer,
              rawDestination: λ50cb8c9ee326.destination,
              method: λ50cb8c9ee326.method,
              mode: λ50cb8c9ee326.mode,
              referrer: λ50cb8c9ee326.referrer,
              body: λ50cb8c9ee326.body,
              cache: λ50cb8c9ee326.cache,
              clientId: λ50cb8c9ee326.clientId
            });
            return [ {
              body: λ2b22fa9b6b5f.body,
              status: λ2b22fa9b6b5f.status,
              statusText: λ2b22fa9b6b5f.statusText,
              headers: λ2b22fa9b6b5f.headers.toRawHeaders()
            }, λ2b22fa9b6b5f.body instanceof ReadableStream || λ2b22fa9b6b5f.body instanceof ArrayBuffer ? [ λ2b22fa9b6b5f.body ] : [] ];
          } catch (λ7038393a8e50) {
            let λ4d25395fe099 = {
              setResponse: void 0,
              suppressError: !1
            };
            if (await λ59a451e738db.Cx.dispatch(λ9da3944e38b6.hooks.error.request, {
              rawrequest: λ50cb8c9ee326,
              error: λ7038393a8e50
            }, λ4d25395fe099), λ4d25395fe099.suppressError || console.error("\x45\x72\x72\x6f\x72\x20\x69\x6e\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x72\x65\x71\x75\x65\x73\x74\x20\x68\x61\x6e\x64\x6c\x65\x72\x3a", λ7038393a8e50), 
            λ4d25395fe099.setResponse) return [ λ4d25395fe099.setResponse, [] ];
            throw λ7038393a8e50;
          }
        },
        initRemoteTransport: async λ7038393a8e50 => {
          let λ9da3944e38b6 = new λ50cb8c9ee326.C({
            request: async ({remote: λ50cb8c9ee326, method: λ7038393a8e50, body: λ9da3944e38b6, headers: λ4d25395fe099}) => {
              let λ59a451e738db = await this.transport.request(new URL(λ50cb8c9ee326), λ7038393a8e50, λ9da3944e38b6, λ4d25395fe099, void 0);
              return [ λ59a451e738db, [ λ59a451e738db.body ] ];
            },
            sendSetCookie: async ({cookies: λ50cb8c9ee326, options: λ7038393a8e50}) => {
              await this.loadSavedCookies(!0), λ7038393a8e50?.clear && this.cookieJar.clear(), 
              this.applyCookieSyncEntries(λ50cb8c9ee326), await this.persistCookies(), await this.propagateCookieSync(λ50cb8c9ee326, λ7038393a8e50);
            },
            connect: async ({url: λ50cb8c9ee326, protocols: λ7038393a8e50, requestHeaders: λ9da3944e38b6, port: λ4d25395fe099}) => {
              let λ59a451e738db, λ2b22fa9b6b5f = new Promise(λ50cb8c9ee326 => λ59a451e738db = λ50cb8c9ee326), [λcf30bd811464, λ86cab4b0d21d] = this.transport.connect(new URL(λ50cb8c9ee326), λ7038393a8e50, λ9da3944e38b6, (λ50cb8c9ee326, λ7038393a8e50) => {
                λ59a451e738db({
                  result: "\x73\x75\x63\x63\x65\x73\x73",
                  protocol: λ50cb8c9ee326,
                  extensions: λ7038393a8e50
                });
              }, λ50cb8c9ee326 => {
                λ4d25395fe099.postMessage({
                  type: "\x64\x61\x74\x61",
                  data: λ50cb8c9ee326
                }, λ50cb8c9ee326 instanceof ArrayBuffer ? [ λ50cb8c9ee326 ] : []);
              }, (λ50cb8c9ee326, λ7038393a8e50) => {
                λ4d25395fe099.postMessage({
                  type: "\x63\x6c\x6f\x73\x65",
                  code: λ50cb8c9ee326,
                  reason: λ7038393a8e50
                });
              }, λ50cb8c9ee326 => {
                λ59a451e738db({
                  result: "\x66\x61\x69\x6c\x75\x72\x65",
                  error: λ50cb8c9ee326
                });
              });
              return λ4d25395fe099.onmessageerror = λ50cb8c9ee326 => {
                console.error("\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x6f\x72\x74\x20\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λ50cb8c9ee326);
              }, λ4d25395fe099.onmessage = ({data: λ50cb8c9ee326}) => {
                "\x64\x61\x74\x61" === λ50cb8c9ee326.type ? λcf30bd811464(λ50cb8c9ee326.data) : "\x63\x6c\x6f\x73\x65" === λ50cb8c9ee326.type && λ86cab4b0d21d(λ50cb8c9ee326.code, λ50cb8c9ee326.reason);
              }, [ await λ2b22fa9b6b5f, [] ];
            }
          }, "\x74\x72\x61\x6e\x73\x70\x6f\x72\x74", (λ50cb8c9ee326, λ9da3944e38b6) => λ7038393a8e50.postMessage(λ50cb8c9ee326, λ9da3944e38b6));
          λ7038393a8e50.onmessageerror = λ50cb8c9ee326 => {
            console.error("\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x6f\x72\x74\x20\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λ50cb8c9ee326);
          }, λ7038393a8e50.onmessage = λ50cb8c9ee326 => {
            λ9da3944e38b6.recieve(λ50cb8c9ee326.data);
          }, λ9da3944e38b6.call("\x72\x65\x61\x64\x79", void 0, []);
        }
      };
      constructor(λ7038393a8e50) {
        this.init = λ7038393a8e50, (0, λcf30bd811464.O)(), this.id = b(), this.config = λcb63da331902(λ86cab4b0d21d, λ7038393a8e50.config || {}), 
        this.studyjetConfig = λcb63da331902(λa1baa75c6b2e, λ59a451e738db.sb), this.studyjetConfig = λcb63da331902(this.studyjetConfig, λ7038393a8e50.studyjetConfig || {}), 
        this.prefix = this.config.prefix + this.id + "\x2f", this.serviceWorkerController = λ7038393a8e50.serviceworker, 
        this.ready = Promise.all([ new Promise(λ50cb8c9ee326 => {
          this.readyResolve = λ50cb8c9ee326;
        }), this.loadStudyJetWasm(), this.loadSavedCookies(!0) ]).then(() => void 0), this.rpc = new λ50cb8c9ee326.C(this.methods, "\x74\x61\x62\x63\x68\x61\x6e\x6e\x65\x6c\x2d" + this.id, (λ50cb8c9ee326, λ7038393a8e50) => {
          if (!this.port) throw Error("\x50\x6f\x72\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64");
          this.port.postMessage(λ50cb8c9ee326, λ7038393a8e50);
        }), this.transport = λ7038393a8e50.transport, this.cookieSyncChannel.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", this.onCookieSyncMessage), 
        this.setupMessagePort(), navigator.serviceWorker.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", λ50cb8c9ee326 => {
          if (λ50cb8c9ee326.data?.$controller$setCookie && "\x6f\x62\x6a\x65\x63\x74" == typeof λ50cb8c9ee326.data.$controller$setCookie) {
            let λ7038393a8e50 = λ50cb8c9ee326.data.$controller$setCookie;
            if (λ7038393a8e50.controllerId && λ7038393a8e50.controllerId !== this.id) return;
            λ7038393a8e50.options?.clear && this.cookieJar.clear(), this.applyCookieSyncEntries(λ7038393a8e50.cookies), 
            "\x73\x74\x72\x69\x6e\x67" == typeof λ7038393a8e50.id && this.serviceWorkerController.postMessage({
              $sw$setCookieDone: {
                id: λ7038393a8e50.id
              }
            });
            return;
          }
          if (λ50cb8c9ee326.data.$controller$swrevive) {
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
        let λ50cb8c9ee326 = new MessageChannel;
        this.port = λ50cb8c9ee326.port1, this.port.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", this.onTabChannelMessage), 
        this.port.start(), this.serviceWorkerController.postMessage({
          $controller$init: {
            prefix: this.prefix,
            id: this.id
          }
        }, [ λ50cb8c9ee326.port2 ]);
      }
      applyCookieSyncEntries(λ50cb8c9ee326) {
        if (Array.isArray(λ50cb8c9ee326)) for (let λ7038393a8e50 of λ50cb8c9ee326) "\x73\x74\x72\x69\x6e\x67" == typeof λ7038393a8e50?.url && "\x73\x74\x72\x69\x6e\x67" == typeof λ7038393a8e50.cookie && this.cookieJar.setCookies(λ7038393a8e50.cookie, new URL(λ7038393a8e50.url));
      }
      async propagateCookieSync(λ50cb8c9ee326, λ7038393a8e50 = {}) {
        this.port && await this.rpc.call("\x73\x65\x6e\x64\x53\x65\x74\x43\x6f\x6f\x6b\x69\x65", {
          cookies: λ50cb8c9ee326,
          options: λ7038393a8e50
        });
      }
      async loadSavedCookies(λ50cb8c9ee326 = !1) {
        if (λ50cb8c9ee326 || this.cookieSyncDirty) return this.cookieSyncPromise || (this.cookieSyncPromise = (async () => {
          let λ50cb8c9ee326 = await w();
          λ50cb8c9ee326 && λ50cb8c9ee326.updatedAt > this.cookieUpdatedAt && (this.cookieJar.load(λ50cb8c9ee326.cookies), 
          this.cookieUpdatedAt = λ50cb8c9ee326.updatedAt), this.cookieSyncDirty = !1;
        })().finally(() => {
          this.cookieSyncPromise = null;
        })), this.cookieSyncPromise;
      }
      async persistCookies() {
        let λ50cb8c9ee326 = await k(this.cookieJar.dump(), this.cookieUpdatedAt);
        λ50cb8c9ee326 <= this.cookieUpdatedAt || (this.cookieUpdatedAt = λ50cb8c9ee326, 
        this.cookieSyncDirty = !1, this.cookieSyncChannel.postMessage({
          updatedAt: λ50cb8c9ee326
        }));
      }
      setTransport(λ50cb8c9ee326) {
        for (let λ7038393a8e50 of (this.transport = λ50cb8c9ee326, this.frames)) λ7038393a8e50.controller.transport = λ50cb8c9ee326, 
        λ7038393a8e50.fetchHandler.client.transport = λ50cb8c9ee326;
      }
      createFrame(λ50cb8c9ee326, λ7038393a8e50 = {}) {
        if (!this.ready) throw Error("\x43\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x69\x73\x20\x6e\x6f\x74\x20\x72\x65\x61\x64\x79\x21\x20\x54\x72\x79\x20\x61\x77\x61\x69\x74\x69\x6e\x67\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2e\x77\x61\x69\x74\x28\x29");
        let λ9da3944e38b6 = new v(this, λ50cb8c9ee326 ??= document.createElement("\x69\x66\x72\x61\x6d\x65"), λ7038393a8e50);
        return this.frames.push(λ9da3944e38b6), λ9da3944e38b6;
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
            \u{67}\u{65}\u{74}\u{49}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{63}\u{72}\u{69}\u{70}\u{74}\u{73}: function e(λ50cb8c9ee326, λ7038393a8e50, λ9da3944e38b6, λ4d25395fe099, λ59a451e738db, λ2b22fa9b6b5f) {
              return (λcf30bd811464, λ86cab4b0d21d, λa1baa75c6b2e, λ150c5a05ff81) => {
                var λfc90544635a9;
                return [ λ150c5a05ff81(λ50cb8c9ee326.studyjetPath), λ150c5a05ff81(λ9da3944e38b6.href + λ50cb8c9ee326.virtualWasmPath), λ150c5a05ff81(λ50cb8c9ee326.\u{69}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{50}\u{61}\u{74}\u{68}), λ150c5a05ff81("data:text/javascript;charset=utf-8;base64," + (λfc90544635a9 = `\x0a\x09\x09\x09\x09\x09\x64\x6f\x63\x75\x6d\x65\x6e\x74\x2e\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63\x74\x6f\x72\x41\x6c\x6c\x28\x22\x73\x63\x72\x69\x70\x74\x5b\x73\x74\x75\x64\x79\x6a\x65\x74\x2d\x69\x6e\x6a\x65\x63\x74\x65\x64\x5d\x22\x29\x2e\x66\x6f\x72\x45\x61\x63\x68\x28\x73\x63\x72\x69\x70\x74\x20\x3d\x3e\x20\x73\x63\x72\x69\x70\x74\x2e\x72\x65\x6d\x6f\x76\x65\x28\x29\x29\x3b\x0a\x09\x09\x09\x09\x09\x24\x73\x74\x75\x64\x79\x6a\x65\x74\x43\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2e\x6c\x6f\x61\x64\x28\x7b\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x66\x69\x67\x3a\x20${JSON.stringify(λ50cb8c9ee326)}\x2c\x0a\x09\x09\x09\x09\x09\x09\x73\x6a\x63\x6f\x6e\x66\x69\x67\x3a\x20${JSON.stringify(λ7038393a8e50)}\x2c\x0a\x09\x09\x09\x09\x09\x09\x70\x72\x65\x66\x69\x78\x3a\x20\x6e\x65\x77\x20\x55\x52\x4c\x28\x22${λ9da3944e38b6.href}\x22\x29\x2c\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6f\x6b\x69\x65\x73\x3a\x20${JSON.stringify(λ4d25395fe099.dump())}\x2c\x0a\x09\x09\x09\x09\x09\x09\x79\x69\x65\x6c\x64\x47\x65\x74\x49\x6e\x6a\x65\x63\x74\x53\x63\x72\x69\x70\x74\x73\x3a\x20${e.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x45\x6e\x63\x6f\x64\x65\x3a\x20${λ59a451e738db.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x44\x65\x63\x6f\x64\x65\x3a\x20${λ2b22fa9b6b5f.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x69\x6e\x69\x74\x48\x65\x61\x64\x65\x72\x73\x3a\x20${JSON.stringify(λa1baa75c6b2e.headers ?? [])}\x2c\x0a\x09\x09\x09\x09\x09\x09\x68\x69\x73\x74\x6f\x72\x79\x3a\x20${JSON.stringify(λa1baa75c6b2e.history ?? [])}\x2c\x0a\x09\x09\x09\x09\x09\x7d\x29\x0a\x09\x09\x09\x09`, 
                btoa((new TextEncoder).encode(λfc90544635a9).reduce((λ50cb8c9ee326, λ7038393a8e50) => (λ50cb8c9ee326.push(String.fromCharCode(λ7038393a8e50)), 
                λ50cb8c9ee326), []).join("")))) ];
              };
            }(this.controller.config, this.controller.studyjetConfig, new URL(this.prefix, location.href), this.controller.cookieJar, this.controller.config.codec.encode, this.controller.config.codec.decode),
            \u{67}\u{65}\u{74}\u{57}\u{6f}\u{72}\u{6b}\u{65}\u{72}\u{49}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{63}\u{72}\u{69}\u{70}\u{74}\u{73}: (λ50cb8c9ee326, λ7038393a8e50, λ9da3944e38b6) => {
              var λ4d25395fe099;
              let λ59a451e738db = "";
              return λ59a451e738db += λ9da3944e38b6(this.controller.config.studyjetPath), λ59a451e738db += λ9da3944e38b6(this.prefix + this.controller.config.virtualWasmPath), 
              λ59a451e738db += λ9da3944e38b6("data:text/javascript;charset=utf-8;base64," + (λ4d25395fe099 = `\x0a\x09\x09\x09\x09\x09\x28\x28\x29\x3d\x3e\x7b\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x7b\x20\x53\x74\x75\x64\x79\x4a\x65\x74\x43\x6c\x69\x65\x6e\x74\x2c\x20\x43\x6f\x6f\x6b\x69\x65\x4a\x61\x72\x2c\x20\x73\x65\x74\x57\x61\x73\x6d\x20\x7d\x20\x3d\x20\x24\x73\x74\x75\x64\x79\x6a\x65\x74\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x73\x65\x74\x57\x61\x73\x6d\x28\x55\x69\x6e\x74\x38\x41\x72\x72\x61\x79\x2e\x66\x72\x6f\x6d\x28\x61\x74\x6f\x62\x28\x73\x65\x6c\x66\x2e\x57\x41\x53\x4d\x29\x2c\x20\x28\x63\x29\x20\x3d\x3e\x20\x63\x2e\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74\x28\x30\x29\x29\x29\x3b\x0a\x09\x09\x09\x09\x09\x09\x64\x65\x6c\x65\x74\x65\x20\x73\x65\x6c\x66\x2e\x57\x41\x53\x4d\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x73\x6a\x63\x6f\x6e\x66\x69\x67\x20\x3d\x20${JSON.stringify(this.controller.studyjetConfig)}\x3b\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x70\x72\x65\x66\x69\x78\x20\x3d\x20\x6e\x65\x77\x20\x55\x52\x4c\x28\x22${this.prefix}\x22\x2c\x20\x6c\x6f\x63\x61\x74\x69\x6f\x6e\x2e\x68\x72\x65\x66\x29\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x3d\x20\x7b\x0a\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x66\x69\x67\x3a\x20\x73\x6a\x63\x6f\x6e\x66\x69\x67\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x70\x72\x65\x66\x69\x78\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x69\x6e\x74\x65\x72\x66\x61\x63\x65\x3a\x20\x7b\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x45\x6e\x63\x6f\x64\x65\x3a\x20${this.controller.config.codec.encode.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x44\x65\x63\x6f\x64\x65\x3a\x20${this.controller.config.codec.decode.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x7d\x2c\x0a\x09\x09\x09\x09\x09\x09\x7d\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x63\x6c\x69\x65\x6e\x74\x20\x3d\x20\x6e\x65\x77\x20\x53\x74\x75\x64\x79\x4a\x65\x74\x43\x6c\x69\x65\x6e\x74\x28\x67\x6c\x6f\x62\x61\x6c\x54\x68\x69\x73\x2c\x20\x7b\x0a\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x74\x65\x78\x74\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x3a\x20\x6e\x75\x6c\x6c\x2c\x0a\x09\x09\x09\x09\x09\x09\x7d\x29\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6c\x69\x65\x6e\x74\x2e\x68\x6f\x6f\x6b\x28\x29\x3b\x0a\x09\x09\x09\x09\x09\x7d\x29\x28\x29\x3b\x0a\x09\x09\x09\x09\x09`, 
              btoa((new TextEncoder).encode(λ4d25395fe099).reduce((λ50cb8c9ee326, λ7038393a8e50) => (λ50cb8c9ee326.push(String.fromCharCode(λ7038393a8e50)), 
              λ50cb8c9ee326), []).join(""))));
            },
            codecEncode: this.controller.config.codec.encode,
            codecDecode: this.controller.config.codec.decode
          }
        };
      }
      plugins=[];
      constructor(λ50cb8c9ee326, λ9da3944e38b6, λ4d25395fe099 = {}) {
        for (const λcf30bd811464 of (this.controller = λ50cb8c9ee326, this.element = λ9da3944e38b6, 
        this.options = λ4d25395fe099, this.id = b(), this.prefix = this.controller.prefix + this.id + "\x2f", 
        this.fetchHandler = new λ59a451e738db.mK({
          crossOriginIsolated: self.crossOriginIsolated,
          context: this.context,
          transport: λ50cb8c9ee326.transport,
          async sendSetCookie(λ7038393a8e50, λ9da3944e38b6) {
            await λ50cb8c9ee326.persistCookies(), await λ50cb8c9ee326.propagateCookieSync(λ7038393a8e50.map(({url: λ50cb8c9ee326, cookie: λ7038393a8e50}) => ({
              url: λ50cb8c9ee326.href,
              cookie: λ7038393a8e50
            })), λ9da3944e38b6);
          },
          fetchBlobUrl: async λ50cb8c9ee326 => λ7038393a8e50.Sr.fromNativeResponse(await fetch(λ50cb8c9ee326)),
          fetchDataUrl: async λ50cb8c9ee326 => λ7038393a8e50.Sr.fromNativeResponse(await fetch(λ50cb8c9ee326))
        }), this.hooks = {
          fetch: this.fetchHandler.hooks.fetch,
          init: λ59a451e738db.Cx.create(),
          error: λ59a451e738db.Cx.create()
        }, λ9da3944e38b6[λ2b22fa9b6b5f.I] = this, this.plugins = λ4d25395fe099.plugins ?? [], 
        this.plugins)) {
          for (const λ50cb8c9ee326 of λcf30bd811464.dependencies) if (!this.plugins.find(λ7038393a8e50 => λ7038393a8e50.name === λ50cb8c9ee326)) throw Error(`\x44\x65\x70\x65\x6e\x64\x65\x6e\x63\x79\x20${λ50cb8c9ee326}\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x66\x6f\x72\x20\x70\x6c\x75\x67\x69\x6e\x20${λcf30bd811464.name}`);
          λcf30bd811464.install(this);
        }
      }
      getPlugin(λ50cb8c9ee326) {
        let λ7038393a8e50 = this.plugins.find(λ7038393a8e50 => λ7038393a8e50.name === λ50cb8c9ee326);
        if (!λ7038393a8e50) throw Error(`\x50\x6c\x75\x67\x69\x6e\x20${λ50cb8c9ee326}\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64`);
        return λ7038393a8e50;
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
      go(λ50cb8c9ee326) {
        let λ7038393a8e50 = (0, λ59a451e738db.Oy)(λ50cb8c9ee326, this.context, {
          origin: new URL(location.href),
          base: new URL(location.href)
        });
        this.element.src = λ7038393a8e50;
      }
    }
  })(), $studyjetController = λ9da3944e38b6;
})();
