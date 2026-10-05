var $studyjetController;

(() => {
  var λb0d784ddbf29 = {
    286(λb0d784ddbf29, λ56c2dee6c77b, λc00e40046a21) {
      λc00e40046a21.d(λ56c2dee6c77b, {
        I: () => λ36a8c2228d99
      });
      let λ36a8c2228d99 = Symbol.for("controller frame handle");
    },
    355(λb0d784ddbf29, λ56c2dee6c77b, λc00e40046a21) {
      λc00e40046a21.d(λ56c2dee6c77b, {
        O: () => s,
        x: () => λ36a8c2228d99
      });
      let λ36a8c2228d99 = "0.0.14";
      function s() {
        if ("undefined" == typeof $studyjet) throw Error("@mercuryworkshop/studyjet is not loaded. Load studyjet before the controller.");
        var λb0d784ddbf29 = "2.0.67-alpha.2", λ56c2dee6c77b = $studyjet.versionInfo.version;
        if (λb0d784ddbf29 !== λ56c2dee6c77b) throw Error(`@mercuryworkshop/studyjet version mismatch: this build expects ${λb0d784ddbf29}, but the loaded runtime is ${λ56c2dee6c77b}`);
      }
    },
    805(λb0d784ddbf29, λ56c2dee6c77b, λc00e40046a21) {
      λc00e40046a21.d(λ56c2dee6c77b, {
        C: () => o
      });
      class o {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λb0d784ddbf29, λ56c2dee6c77b, λc00e40046a21) {
          this.methods = λb0d784ddbf29, this.id = λ56c2dee6c77b, this.sendRaw = λc00e40046a21;
        }
        recieve(λb0d784ddbf29) {
          if (null == λb0d784ddbf29 || "object" != typeof λb0d784ddbf29) return;
          let λ56c2dee6c77b = λb0d784ddbf29[this.id];
          if (null == λ56c2dee6c77b || "object" != typeof λ56c2dee6c77b) return;
          let λc00e40046a21 = λ56c2dee6c77b.$type;
          if ("response" === λc00e40046a21) {
            let λb0d784ddbf29 = λ56c2dee6c77b.$token, λc00e40046a21 = λ56c2dee6c77b.$data, λ36a8c2228d99 = λ56c2dee6c77b.$error, λcfcba59227b9 = this.promiseCallbacks.get(λb0d784ddbf29);
            if (!λcfcba59227b9) return;
            this.promiseCallbacks.delete(λb0d784ddbf29), void 0 !== λ36a8c2228d99 ? λcfcba59227b9.reject(Error(λ36a8c2228d99)) : λcfcba59227b9.resolve(λc00e40046a21);
          } else if ("request" === λc00e40046a21) {
            let λb0d784ddbf29 = λ56c2dee6c77b.$method, λc00e40046a21 = λ56c2dee6c77b.$args;
            this.methods[λb0d784ddbf29](λc00e40046a21).then(λb0d784ddbf29 => {
              this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ56c2dee6c77b.$token,
                  $data: λb0d784ddbf29?.[0]
                }
              }, λb0d784ddbf29?.[1]);
            }).catch(λb0d784ddbf29 => {
              console.error(λb0d784ddbf29), this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ56c2dee6c77b.$token,
                  $error: λb0d784ddbf29?.toString() || "Unknown error"
                }
              }, []);
            });
          }
        }
        call(λb0d784ddbf29, λ56c2dee6c77b, λc00e40046a21 = []) {
          let λ36a8c2228d99 = this.counter++;
          return new Promise((λcfcba59227b9, λ701a7d3d2280) => {
            this.promiseCallbacks.set(λ36a8c2228d99, {
              resolve: λcfcba59227b9,
              reject: λ701a7d3d2280
            }), this.sendRaw({
              [this.id]: {
                $type: "request",
                $method: λb0d784ddbf29,
                $args: λ56c2dee6c77b,
                $token: λ36a8c2228d99
              }
            }, λc00e40046a21);
          });
        }
      }
    },
    986(λb0d784ddbf29) {
      let λ56c2dee6c77b = Object.getPrototypeOf({});
      function r() {
        return function(λb0d784ddbf29) {
          return "object" == typeof λb0d784ddbf29 && null !== λb0d784ddbf29 && !(λb0d784ddbf29 instanceof RegExp) && !(λb0d784ddbf29 instanceof Date);
        };
      }
      function o(λb0d784ddbf29) {
        function o(λb0d784ddbf29) {
          return "constructor" !== λb0d784ddbf29 && "prototype" !== λb0d784ddbf29 && "__proto__" !== λb0d784ddbf29;
        }
        let λc00e40046a21 = Object.prototype.propertyIsEnumerable, λ36a8c2228d99 = λb0d784ddbf29?.symbols ? function(λb0d784ddbf29) {
          let λ56c2dee6c77b = Object.keys(λb0d784ddbf29), λ36a8c2228d99 = Object.getOwnPropertySymbols(λb0d784ddbf29);
          for (let λcfcba59227b9 = 0, λ701a7d3d2280 = λ36a8c2228d99.length; λcfcba59227b9 < λ701a7d3d2280; ++λcfcba59227b9) λc00e40046a21.call(λb0d784ddbf29, λ36a8c2228d99[λcfcba59227b9]) && λ56c2dee6c77b.push(λ36a8c2228d99[λcfcba59227b9]);
          return λ56c2dee6c77b;
        } : Object.keys, λcfcba59227b9 = "function" == typeof λb0d784ddbf29?.cloneProtoObject ? λb0d784ddbf29.cloneProtoObject : void 0, λ701a7d3d2280 = "function" == typeof λb0d784ddbf29?.isMergeableObject ? λb0d784ddbf29.isMergeableObject : r(), λa4b57e54ff3a = λb0d784ddbf29?.onlyDefinedProperties === !0, λ522cdcbfd869 = λb0d784ddbf29 && "function" == typeof λb0d784ddbf29.mergeArray ? λb0d784ddbf29.mergeArray({
          clone: d,
          deepmerge: h,
          getKeys: λ36a8c2228d99,
          isMergeableObject: λ701a7d3d2280
        }) : function(λb0d784ddbf29, λ56c2dee6c77b) {
          let λc00e40046a21 = λb0d784ddbf29.length, λ36a8c2228d99 = λ56c2dee6c77b.length, λcfcba59227b9 = 0, λ701a7d3d2280 = Array(λc00e40046a21 + λ36a8c2228d99);
          for (;λcfcba59227b9 < λc00e40046a21; ++λcfcba59227b9) λ701a7d3d2280[λcfcba59227b9] = d(λb0d784ddbf29[λcfcba59227b9]);
          for (λcfcba59227b9 = 0; λcfcba59227b9 < λ36a8c2228d99; ++λcfcba59227b9) λ701a7d3d2280[λcfcba59227b9 + λc00e40046a21] = d(λ56c2dee6c77b[λcfcba59227b9]);
          return λ701a7d3d2280;
        };
        function d(λb0d784ddbf29) {
          return λ701a7d3d2280(λb0d784ddbf29) ? Array.isArray(λb0d784ddbf29) ? function(λb0d784ddbf29) {
            let λ56c2dee6c77b = 0, λc00e40046a21 = λb0d784ddbf29.length, λ36a8c2228d99 = Array(λc00e40046a21);
            for (;λ56c2dee6c77b < λc00e40046a21; ++λ56c2dee6c77b) λ36a8c2228d99[λ56c2dee6c77b] = d(λb0d784ddbf29[λ56c2dee6c77b]);
            return λ36a8c2228d99;
          }(λb0d784ddbf29) : function(λb0d784ddbf29) {
            let λc00e40046a21, λ701a7d3d2280, λa4b57e54ff3a, λ522cdcbfd869 = {};
            if (λcfcba59227b9 && Object.getPrototypeOf(λb0d784ddbf29) !== λ56c2dee6c77b) return λcfcba59227b9(λb0d784ddbf29);
            let λdbf43addca70 = λ36a8c2228d99(λb0d784ddbf29);
            for (λc00e40046a21 = 0, λ701a7d3d2280 = λdbf43addca70.length; λc00e40046a21 < λ701a7d3d2280; ++λc00e40046a21) o(λa4b57e54ff3a = λdbf43addca70[λc00e40046a21]) && (λ522cdcbfd869[λa4b57e54ff3a] = d(λb0d784ddbf29[λa4b57e54ff3a]));
            return λ522cdcbfd869;
          }(λb0d784ddbf29) : λb0d784ddbf29;
        }
        function h(λb0d784ddbf29, λc00e40046a21) {
          if (λa4b57e54ff3a && void 0 === λc00e40046a21) return d(λb0d784ddbf29);
          let λdbf43addca70 = Array.isArray(λc00e40046a21), λda68746ca45e = Array.isArray(λb0d784ddbf29);
          return "object" != typeof λc00e40046a21 || null === λc00e40046a21 ? λc00e40046a21 : λ701a7d3d2280(λb0d784ddbf29) ? λdbf43addca70 && λda68746ca45e ? λ522cdcbfd869(λb0d784ddbf29, λc00e40046a21) : λdbf43addca70 !== λda68746ca45e ? d(λc00e40046a21) : function(λb0d784ddbf29, λc00e40046a21) {
            let λ522cdcbfd869, λdbf43addca70, λda68746ca45e, λ56fa4419db6c = {}, λ02a4f39ca4af = λ36a8c2228d99(λb0d784ddbf29), λ1f9f2f4a4787 = λ36a8c2228d99(λc00e40046a21);
            for (λ522cdcbfd869 = 0, λdbf43addca70 = λ02a4f39ca4af.length; λ522cdcbfd869 < λdbf43addca70; ++λ522cdcbfd869) o(λda68746ca45e = λ02a4f39ca4af[λ522cdcbfd869]) && -1 === λ1f9f2f4a4787.indexOf(λda68746ca45e) && (λ56fa4419db6c[λda68746ca45e] = d(λb0d784ddbf29[λda68746ca45e]));
            for (λ522cdcbfd869 = 0, λdbf43addca70 = λ1f9f2f4a4787.length; λ522cdcbfd869 < λdbf43addca70; ++λ522cdcbfd869) if (o(λda68746ca45e = λ1f9f2f4a4787[λ522cdcbfd869])) if (λda68746ca45e in λb0d784ddbf29) -1 !== λ02a4f39ca4af.indexOf(λda68746ca45e) && (λcfcba59227b9 && λ701a7d3d2280(λc00e40046a21[λda68746ca45e]) && Object.getPrototypeOf(λc00e40046a21[λda68746ca45e]) !== λ56c2dee6c77b ? λ56fa4419db6c[λda68746ca45e] = λcfcba59227b9(λc00e40046a21[λda68746ca45e]) : λ56fa4419db6c[λda68746ca45e] = h(λb0d784ddbf29[λda68746ca45e], λc00e40046a21[λda68746ca45e])); else {
              if (λa4b57e54ff3a && void 0 === λc00e40046a21[λda68746ca45e]) continue;
              λ56fa4419db6c[λda68746ca45e] = d(λc00e40046a21[λda68746ca45e]);
            }
            return λ56fa4419db6c;
          }(λb0d784ddbf29, λc00e40046a21) : d(λc00e40046a21);
        }
        return λb0d784ddbf29?.all ? function() {
          let λb0d784ddbf29;
          switch (arguments.length) {
           case 0:
            return {};

           case 1:
            return d(arguments[0]);

           case 2:
            return h(arguments[0], arguments[1]);
          }
          for (let λ56c2dee6c77b = 0, λc00e40046a21 = arguments.length; λ56c2dee6c77b < λc00e40046a21; ++λ56c2dee6c77b) λb0d784ddbf29 = h(λb0d784ddbf29, arguments[λ56c2dee6c77b]);
          return λb0d784ddbf29;
        } : h;
      }
      λb0d784ddbf29.exports = o, λb0d784ddbf29.exports.default = o, λb0d784ddbf29.exports.deepmerge = o, 
      Object.defineProperty(λb0d784ddbf29.exports, "isMergeableObject", {
        get: r
      });
    },
    235(λb0d784ddbf29, λ56c2dee6c77b, λc00e40046a21) {
      λc00e40046a21.d(λ56c2dee6c77b, {
        Sr: () => s
      }), WebSocket.CLOSED, WebSocket.CONNECTING, WebSocket.OPEN, EventTarget;
      let λ36a8c2228d99 = [ 101, 204, 205, 304 ];
      class s extends Response {
        url;
        rawHeaders;
        redirected=!1;
        static fromTransferrableResponse(λb0d784ddbf29, λ56c2dee6c77b) {
          let λc00e40046a21 = new s(λ36a8c2228d99.includes(λb0d784ddbf29.status) ? void 0 : λb0d784ddbf29.body, {
            headers: new Headers(λb0d784ddbf29.headers),
            status: λb0d784ddbf29.status,
            statusText: λb0d784ddbf29.statusText
          });
          return λc00e40046a21.url = λ56c2dee6c77b, λc00e40046a21.redirected = λb0d784ddbf29.status >= 300 && λb0d784ddbf29.status < 400 && void 0 !== λb0d784ddbf29.headers.location, 
          λc00e40046a21.rawHeaders = λb0d784ddbf29.headers, λc00e40046a21;
        }
        static fromNativeResponse(λb0d784ddbf29) {
          let λ56c2dee6c77b = new s(λ36a8c2228d99.includes(λb0d784ddbf29.status) ? void 0 : λb0d784ddbf29.body, {
            headers: λb0d784ddbf29.headers,
            status: λb0d784ddbf29.status,
            statusText: λb0d784ddbf29.statusText
          });
          return λ56c2dee6c77b.url = λb0d784ddbf29.url, λ56c2dee6c77b.rawHeaders = [ ...λb0d784ddbf29.headers ], 
          λ56c2dee6c77b.redirected = λb0d784ddbf29.redirected, λ56c2dee6c77b;
        }
      }
    },
    423(λb0d784ddbf29, λ56c2dee6c77b, λc00e40046a21) {
      λc00e40046a21.d(λ56c2dee6c77b, {
        Cx: () => λaf92d396d97f,
        Oy: () => λ81ba0602a0e1,
        cP: () => λcfcba59227b9,
        ht: () => λ49e4b9ce4f20,
        k_: () => λa4b57e54ff3a,
        mK: () => λ56fa4419db6c,
        sb: () => λbd3c6bc5d46a,
        uh: () => λ1f9f2f4a4787
      });
      let {BareResponse: λ36a8c2228d99, CookieJar: λcfcba59227b9, IncrementalHtmlRewriter: λ701a7d3d2280, Plugin: λa4b57e54ff3a, STUDYJETCLIENT: λ522cdcbfd869, STUDYJETCLIENTNAME: λdbf43addca70, StudyJetClient: λda68746ca45e, StudyJetFetchHandler: λ56fa4419db6c, StudyJetFetchTrackedClient: λ02a4f39ca4af, StudyJetHeaders: λ1f9f2f4a4787, Tap: λaf92d396d97f, createLocationProxy: λ37c441be35f0, defaultConfig: λbd3c6bc5d46a, defaultConfigDev: λ2000269b1cd4, flagEnabled: λdbc1f0519081, getOwnPropertyDescriptorHandler: λef3819e76d26, getRewriter: λ94f8d2222633, getScriptBlockTypeString: λ4fb84076dedb, htmlRules: λ59767c57a14b, isArchiveMimeType: λ9f838431e4fb, isAudioOrVideoMimeType: λ18d2dd04d4b1, isFontMimeType: λe66f936bac48, isHtmlMimeType: λf13ec77d49dc, isImageMimeType: λ52747c0cd157, isInlineDisplayableMimeType: λ61b97699c7a6, isJavascriptMimeType: λbe0cdcb073bd, isJavascriptMimeTypeEssenceMatch: λee6a6ea63716, isModuleScriptType: λ6d735824e96d, isScriptType: λ90896d73795e, isScriptableMimeType: λe6231065db3c, isXmlMimeType: λ10f2d56106c0, isZipBasedMimeType: λ2ed33cd426bf, isdedicated: λ809fa3ee8c8c, isshared: λc29e1e2780dd, issw: λ796b486d24d2, iswindow: λ5545737e7df8, isworker: λ227f463d4028, parseMimeType: λ80bf4934ac7d, rewriteBlob: λ85eaaf503904, rewriteCss: λf82e77c56246, rewriteHtml: λ373e0482d53a, rewriteJs: λ9cdb2f7ed3f0, rewriteJsInner: λcf905533a5ec, rewriteSrcset: λ457080d8e597, rewriteUrl: λ81ba0602a0e1, rewriteWorkers: λfebebe3eb059, setWasm: λ49e4b9ce4f20, unrewriteBlob: λe62e1246b811, unrewriteCss: λ16a470eae4c0, unrewriteHtml: λfec187f3d347, unrewriteUrl: λ7a029958ea99, versionInfo: λcca05c8e7b2d} = globalThis.$studyjet;
    }
  }, λ56c2dee6c77b = {};
  function r(λc00e40046a21) {
    var λ36a8c2228d99 = λ56c2dee6c77b[λc00e40046a21];
    if (void 0 !== λ36a8c2228d99) return λ36a8c2228d99.exports;
    var λcfcba59227b9 = λ56c2dee6c77b[λc00e40046a21] = {
      exports: {}
    };
    return λb0d784ddbf29[λc00e40046a21](λcfcba59227b9, λcfcba59227b9.exports, r), λcfcba59227b9.exports;
  }
  r.n = λb0d784ddbf29 => {
    var λ56c2dee6c77b = λb0d784ddbf29 && λb0d784ddbf29.__esModule ? () => λb0d784ddbf29.default : () => λb0d784ddbf29;
    return r.d(λ56c2dee6c77b, {
      a: λ56c2dee6c77b
    }), λ56c2dee6c77b;
  }, r.d = (λb0d784ddbf29, λ56c2dee6c77b) => {
    for (var λc00e40046a21 in λ56c2dee6c77b) r.o(λ56c2dee6c77b, λc00e40046a21) && !r.o(λb0d784ddbf29, λc00e40046a21) && Object.defineProperty(λb0d784ddbf29, λc00e40046a21, {
      enumerable: !0,
      get: λ56c2dee6c77b[λc00e40046a21]
    });
  }, r.o = (λb0d784ddbf29, λ56c2dee6c77b) => Object.prototype.hasOwnProperty.call(λb0d784ddbf29, λ56c2dee6c77b), 
  r.r = λb0d784ddbf29 => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λb0d784ddbf29, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(λb0d784ddbf29, "__esModule", {
      value: !0
    });
  };
  var λc00e40046a21 = {};
  (() => {
    r.r(λc00e40046a21), r.d(λc00e40046a21, {
      Controller: () => S,
      Frame: () => v,
      ManagedPlugin: () => d,
      VERSION: () => λa4b57e54ff3a.x,
      assertRuntimeStudyJetVersion: () => λa4b57e54ff3a.O,
      config: () => λ522cdcbfd869
    });
    var λb0d784ddbf29 = r(805), λ56c2dee6c77b = r(235), λ36a8c2228d99 = r(986), λcfcba59227b9 = r(423), λ701a7d3d2280 = r(286), λa4b57e54ff3a = r(355);
    let λ522cdcbfd869 = {
      prefix: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/study/",
      studyjetPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/studyjet/@r69c18f9bd4ed175c9ea505b8!.js",
      injectPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/controller/@r9e855ac82edc4b51e1340564!.js",
      wasmPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/studyjet/@r55286cfe09d741023cc3e1d6!.wasm",
      virtualWasmPath: "studyjet.wasm.js",
      codec: {
        encode: λb0d784ddbf29 => λb0d784ddbf29 ? encodeURIComponent(λb0d784ddbf29) : λb0d784ddbf29,
        decode: λb0d784ddbf29 => λb0d784ddbf29 ? decodeURIComponent(λb0d784ddbf29) : λb0d784ddbf29
      }
    }, λdbf43addca70 = {
      flags: {
        ...λcfcba59227b9.sb.flags,
        allowFailedIntercepts: !0
      },
      maskedfiles: [ "inject.js", "studyjet.wasm.js" ]
    };
    class d extends λcfcba59227b9.k_ {
      frame=null;
      dependencies=[];
      constructor(λb0d784ddbf29, λ56c2dee6c77b) {
        super(λb0d784ddbf29), this.dependencies = λ56c2dee6c77b;
      }
      install(λb0d784ddbf29) {
        this.frame = λb0d784ddbf29;
      }
    }
    let λda68746ca45e = "state", λ56fa4419db6c = "cookies", λ02a4f39ca4af = null;
    function u(λb0d784ddbf29) {
      return "object" == typeof λb0d784ddbf29 && null !== λb0d784ddbf29 && "number" == typeof λb0d784ddbf29.updatedAt && Number.isFinite(λb0d784ddbf29.updatedAt) && "string" == typeof λb0d784ddbf29.cookies ? λb0d784ddbf29 : null;
    }
    function y(λb0d784ddbf29) {
      return new Promise((λ56c2dee6c77b, λc00e40046a21) => {
        λb0d784ddbf29.onsuccess = () => λ56c2dee6c77b(λb0d784ddbf29.result), λb0d784ddbf29.onerror = () => λc00e40046a21(λb0d784ddbf29.error ?? Error("IndexedDB request failed"));
      });
    }
    function m(λb0d784ddbf29) {
      return new Promise((λ56c2dee6c77b, λc00e40046a21) => {
        λb0d784ddbf29.oncomplete = () => λ56c2dee6c77b(), λb0d784ddbf29.onabort = () => λc00e40046a21(λb0d784ddbf29.error ?? Error("IndexedDB transaction aborted")), 
        λb0d784ddbf29.onerror = () => λc00e40046a21(λb0d784ddbf29.error ?? Error("IndexedDB transaction failed"));
      });
    }
    function g() {
      return λ02a4f39ca4af || (λ02a4f39ca4af = new Promise((λb0d784ddbf29, λ56c2dee6c77b) => {
        let λc00e40046a21 = indexedDB.open("@d941bc65af3", 1);
        λc00e40046a21.onupgradeneeded = () => {
          let λb0d784ddbf29 = λc00e40046a21.result;
          λb0d784ddbf29.objectStoreNames.contains(λda68746ca45e) || λb0d784ddbf29.createObjectStore(λda68746ca45e);
        }, λc00e40046a21.onsuccess = () => λb0d784ddbf29(λc00e40046a21.result), λc00e40046a21.onerror = () => λ56c2dee6c77b(λc00e40046a21.error ?? Error("Failed to open cookie database"));
      }));
    }
    async function w() {
      try {
        let λb0d784ddbf29 = (await g()).transaction(λda68746ca45e, "readonly"), λ56c2dee6c77b = λb0d784ddbf29.objectStore(λda68746ca45e), λc00e40046a21 = await y(λ56c2dee6c77b.get(λ56fa4419db6c));
        return await m(λb0d784ddbf29), u(λc00e40046a21);
      } catch (λb0d784ddbf29) {
        return console.error("Failed to read persisted controller cookies:", λb0d784ddbf29), 
        null;
      }
    }
    async function k(λb0d784ddbf29, λ56c2dee6c77b) {
      try {
        let λc00e40046a21 = (await g()).transaction(λda68746ca45e, "readwrite"), λ36a8c2228d99 = λc00e40046a21.objectStore(λda68746ca45e), λcfcba59227b9 = u(await y(λ36a8c2228d99.get(λ56fa4419db6c))), λ701a7d3d2280 = Math.max(Date.now(), λ56c2dee6c77b + 1, (λcfcba59227b9?.updatedAt ?? 0) + 1);
        return λ36a8c2228d99.put({
          updatedAt: λ701a7d3d2280,
          cookies: λb0d784ddbf29
        }, λ56fa4419db6c), await m(λc00e40046a21), λ701a7d3d2280;
      } catch (λb0d784ddbf29) {
        return console.error("Failed to persist controller cookies:", λb0d784ddbf29), λ56c2dee6c77b;
      }
    }
    function b() {
      return Math.random().toString(36).substring(2, 10);
    }
    let λ1f9f2f4a4787 = (0, λ36a8c2228d99.deepmerge)();
    class S {
      init;
      id;
      config;
      studyjetConfig;
      prefix;
      cookieJar=new λcfcba59227b9.cP;
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
      cookieSyncChannel=new BroadcastChannel("__studyjet_controller_channel");
      wasmAlreadyFetched=!1;
      wasmPayload=null;
      onTabChannelMessage=λb0d784ddbf29 => {
        this.rpc.recieve(λb0d784ddbf29.data);
      };
      onCookieSyncMessage=λb0d784ddbf29 => {
        let λ56c2dee6c77b = "object" == typeof λb0d784ddbf29.data && null !== λb0d784ddbf29.data ? λb0d784ddbf29.data.updatedAt : void 0;
        "number" != typeof λ56c2dee6c77b || λ56c2dee6c77b <= this.cookieUpdatedAt || (this.cookieSyncDirty = !0, 
        this.loadSavedCookies());
      };
      async loadStudyJetWasm() {
        if (this.wasmAlreadyFetched) return;
        let λb0d784ddbf29 = await fetch(this.config.wasmPath);
        (0, λcfcba59227b9.ht)(await λb0d784ddbf29.arrayBuffer()), this.wasmAlreadyFetched = !0;
      }
      methods={
        ready: async () => {
          this.readyResolve(), setTimeout(() => {
            this.guardServiceWorkerRevive = !1;
          }, 5e3);
        },
        request: async λb0d784ddbf29 => {
          let λ56c2dee6c77b = new URL(λb0d784ddbf29.rawUrl).pathname, λc00e40046a21 = this.frames.find(λb0d784ddbf29 => λ56c2dee6c77b.startsWith(λb0d784ddbf29.prefix));
          if (!λc00e40046a21) throw Error("No frame found for request");
          try {
            if (await this.loadSavedCookies(), λ56c2dee6c77b === λc00e40046a21.prefix + this.config.virtualWasmPath) {
              if (!this.wasmPayload) {
                let λb0d784ddbf29 = await fetch(this.config.wasmPath), λ56c2dee6c77b = await λb0d784ddbf29.arrayBuffer(), λc00e40046a21 = btoa(new Uint8Array(λ56c2dee6c77b).reduce((λb0d784ddbf29, λ56c2dee6c77b) => (λb0d784ddbf29.push(String.fromCharCode(λ56c2dee6c77b)), 
                λb0d784ddbf29), []).join(""));
                this.wasmPayload = `self.WASM = '${λc00e40046a21}';`;
              }
              return [ {
                body: this.wasmPayload,
                status: 200,
                statusText: "OK",
                headers: [ [ "Content-Type", "application/javascript" ] ]
              }, [] ];
            }
            let λ36a8c2228d99 = λcfcba59227b9.uh.fromRawHeaders(λb0d784ddbf29.initialHeaders), λ701a7d3d2280 = await λc00e40046a21.fetchHandler.handleFetch({
              initialHeaders: λ36a8c2228d99,
              rawClientUrl: λb0d784ddbf29.rawClientUrl ? new URL(λb0d784ddbf29.rawClientUrl) : void 0,
              rawUrl: new URL(λb0d784ddbf29.rawUrl),
              rawReferrer: λb0d784ddbf29.rawReferrer,
              rawDestination: λb0d784ddbf29.destination,
              method: λb0d784ddbf29.method,
              mode: λb0d784ddbf29.mode,
              referrer: λb0d784ddbf29.referrer,
              body: λb0d784ddbf29.body,
              cache: λb0d784ddbf29.cache,
              clientId: λb0d784ddbf29.clientId
            });
            return [ {
              body: λ701a7d3d2280.body,
              status: λ701a7d3d2280.status,
              statusText: λ701a7d3d2280.statusText,
              headers: λ701a7d3d2280.headers.toRawHeaders()
            }, λ701a7d3d2280.body instanceof ReadableStream || λ701a7d3d2280.body instanceof ArrayBuffer ? [ λ701a7d3d2280.body ] : [] ];
          } catch (λ56c2dee6c77b) {
            let λ36a8c2228d99 = {
              setResponse: void 0,
              suppressError: !1
            };
            if (await λcfcba59227b9.Cx.dispatch(λc00e40046a21.hooks.error.request, {
              rawrequest: λb0d784ddbf29,
              error: λ56c2dee6c77b
            }, λ36a8c2228d99), λ36a8c2228d99.suppressError || console.error("Error in controller request handler:", λ56c2dee6c77b), 
            λ36a8c2228d99.setResponse) return [ λ36a8c2228d99.setResponse, [] ];
            throw λ56c2dee6c77b;
          }
        },
        initRemoteTransport: async λ56c2dee6c77b => {
          let λc00e40046a21 = new λb0d784ddbf29.C({
            request: async ({remote: λb0d784ddbf29, method: λ56c2dee6c77b, body: λc00e40046a21, headers: λ36a8c2228d99}) => {
              let λcfcba59227b9 = await this.transport.request(new URL(λb0d784ddbf29), λ56c2dee6c77b, λc00e40046a21, λ36a8c2228d99, void 0);
              return [ λcfcba59227b9, [ λcfcba59227b9.body ] ];
            },
            sendSetCookie: async ({cookies: λb0d784ddbf29, options: λ56c2dee6c77b}) => {
              await this.loadSavedCookies(!0), λ56c2dee6c77b?.clear && this.cookieJar.clear(), 
              this.applyCookieSyncEntries(λb0d784ddbf29), await this.persistCookies(), await this.propagateCookieSync(λb0d784ddbf29, λ56c2dee6c77b);
            },
            connect: async ({url: λb0d784ddbf29, protocols: λ56c2dee6c77b, requestHeaders: λc00e40046a21, port: λ36a8c2228d99}) => {
              let λcfcba59227b9, λ701a7d3d2280 = new Promise(λb0d784ddbf29 => λcfcba59227b9 = λb0d784ddbf29), [λa4b57e54ff3a, λ522cdcbfd869] = this.transport.connect(new URL(λb0d784ddbf29), λ56c2dee6c77b, λc00e40046a21, (λb0d784ddbf29, λ56c2dee6c77b) => {
                λcfcba59227b9({
                  result: "success",
                  protocol: λb0d784ddbf29,
                  extensions: λ56c2dee6c77b
                });
              }, λb0d784ddbf29 => {
                λ36a8c2228d99.postMessage({
                  type: "data",
                  data: λb0d784ddbf29
                }, λb0d784ddbf29 instanceof ArrayBuffer ? [ λb0d784ddbf29 ] : []);
              }, (λb0d784ddbf29, λ56c2dee6c77b) => {
                λ36a8c2228d99.postMessage({
                  type: "close",
                  code: λb0d784ddbf29,
                  reason: λ56c2dee6c77b
                });
              }, λb0d784ddbf29 => {
                λcfcba59227b9({
                  result: "failure",
                  error: λb0d784ddbf29
                });
              });
              return λ36a8c2228d99.onmessageerror = λb0d784ddbf29 => {
                console.error("Transport port messageerror (this should never happen!)", λb0d784ddbf29);
              }, λ36a8c2228d99.onmessage = ({data: λb0d784ddbf29}) => {
                "data" === λb0d784ddbf29.type ? λa4b57e54ff3a(λb0d784ddbf29.data) : "close" === λb0d784ddbf29.type && λ522cdcbfd869(λb0d784ddbf29.code, λb0d784ddbf29.reason);
              }, [ await λ701a7d3d2280, [] ];
            }
          }, "transport", (λb0d784ddbf29, λc00e40046a21) => λ56c2dee6c77b.postMessage(λb0d784ddbf29, λc00e40046a21));
          λ56c2dee6c77b.onmessageerror = λb0d784ddbf29 => {
            console.error("Transport port messageerror (this should never happen!)", λb0d784ddbf29);
          }, λ56c2dee6c77b.onmessage = λb0d784ddbf29 => {
            λc00e40046a21.recieve(λb0d784ddbf29.data);
          }, λc00e40046a21.call("ready", void 0, []);
        }
      };
      constructor(λ56c2dee6c77b) {
        this.init = λ56c2dee6c77b, (0, λa4b57e54ff3a.O)(), this.id = b(), this.config = λ1f9f2f4a4787(λ522cdcbfd869, λ56c2dee6c77b.config || {}), 
        this.studyjetConfig = λ1f9f2f4a4787(λdbf43addca70, λcfcba59227b9.sb), this.studyjetConfig = λ1f9f2f4a4787(this.studyjetConfig, λ56c2dee6c77b.studyjetConfig || {}), 
        this.prefix = this.config.prefix + this.id + "/", this.serviceWorkerController = λ56c2dee6c77b.serviceworker, 
        this.ready = Promise.all([ new Promise(λb0d784ddbf29 => {
          this.readyResolve = λb0d784ddbf29;
        }), this.loadStudyJetWasm(), this.loadSavedCookies(!0) ]).then(() => void 0), this.rpc = new λb0d784ddbf29.C(this.methods, "tabchannel-" + this.id, (λb0d784ddbf29, λ56c2dee6c77b) => {
          if (!this.port) throw Error("Port not found");
          this.port.postMessage(λb0d784ddbf29, λ56c2dee6c77b);
        }), this.transport = λ56c2dee6c77b.transport, this.cookieSyncChannel.addEventListener("message", this.onCookieSyncMessage), 
        this.setupMessagePort(), navigator.serviceWorker.addEventListener("message", λb0d784ddbf29 => {
          if (λb0d784ddbf29.data?.$controller$setCookie && "object" == typeof λb0d784ddbf29.data.$controller$setCookie) {
            let λ56c2dee6c77b = λb0d784ddbf29.data.$controller$setCookie;
            if (λ56c2dee6c77b.controllerId && λ56c2dee6c77b.controllerId !== this.id) return;
            λ56c2dee6c77b.options?.clear && this.cookieJar.clear(), this.applyCookieSyncEntries(λ56c2dee6c77b.cookies), 
            "string" == typeof λ56c2dee6c77b.id && this.serviceWorkerController.postMessage({
              $sw$setCookieDone: {
                id: λ56c2dee6c77b.id
              }
            });
            return;
          }
          if (λb0d784ddbf29.data.$controller$swrevive) {
            if (this.guardServiceWorkerRevive) return;
            this.setupMessagePort();
          }
        });
      }
      setupMessagePort() {
        if (this.port) {
          this.port.removeEventListener("message", this.onTabChannelMessage);
          try {
            this.port.close();
          } catch {}
          this.port = null;
        }
        let λb0d784ddbf29 = new MessageChannel;
        this.port = λb0d784ddbf29.port1, this.port.addEventListener("message", this.onTabChannelMessage), 
        this.port.start(), this.serviceWorkerController.postMessage({
          $controller$init: {
            prefix: this.prefix,
            id: this.id
          }
        }, [ λb0d784ddbf29.port2 ]);
      }
      applyCookieSyncEntries(λb0d784ddbf29) {
        if (Array.isArray(λb0d784ddbf29)) for (let λ56c2dee6c77b of λb0d784ddbf29) "string" == typeof λ56c2dee6c77b?.url && "string" == typeof λ56c2dee6c77b.cookie && this.cookieJar.setCookies(λ56c2dee6c77b.cookie, new URL(λ56c2dee6c77b.url));
      }
      async propagateCookieSync(λb0d784ddbf29, λ56c2dee6c77b = {}) {
        this.port && await this.rpc.call("sendSetCookie", {
          cookies: λb0d784ddbf29,
          options: λ56c2dee6c77b
        });
      }
      async loadSavedCookies(λb0d784ddbf29 = !1) {
        if (λb0d784ddbf29 || this.cookieSyncDirty) return this.cookieSyncPromise || (this.cookieSyncPromise = (async () => {
          let λb0d784ddbf29 = await w();
          λb0d784ddbf29 && λb0d784ddbf29.updatedAt > this.cookieUpdatedAt && (this.cookieJar.load(λb0d784ddbf29.cookies), 
          this.cookieUpdatedAt = λb0d784ddbf29.updatedAt), this.cookieSyncDirty = !1;
        })().finally(() => {
          this.cookieSyncPromise = null;
        })), this.cookieSyncPromise;
      }
      async persistCookies() {
        let λb0d784ddbf29 = await k(this.cookieJar.dump(), this.cookieUpdatedAt);
        λb0d784ddbf29 <= this.cookieUpdatedAt || (this.cookieUpdatedAt = λb0d784ddbf29, 
        this.cookieSyncDirty = !1, this.cookieSyncChannel.postMessage({
          updatedAt: λb0d784ddbf29
        }));
      }
      setTransport(λb0d784ddbf29) {
        for (let λ56c2dee6c77b of (this.transport = λb0d784ddbf29, this.frames)) λ56c2dee6c77b.controller.transport = λb0d784ddbf29, 
        λ56c2dee6c77b.fetchHandler.client.transport = λb0d784ddbf29;
      }
      createFrame(λb0d784ddbf29, λ56c2dee6c77b = {}) {
        if (!this.ready) throw Error("Controller is not ready! Try awaiting controller.wait()");
        let λc00e40046a21 = new v(this, λb0d784ddbf29 ??= document.createElement("iframe"), λ56c2dee6c77b);
        return this.frames.push(λc00e40046a21), λc00e40046a21;
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
            getInjectScripts: function e(λb0d784ddbf29, λ56c2dee6c77b, λc00e40046a21, λ36a8c2228d99, λcfcba59227b9, λ701a7d3d2280) {
              return (λa4b57e54ff3a, λ522cdcbfd869, λdbf43addca70, λda68746ca45e) => {
                var λ56fa4419db6c;
                return [ λda68746ca45e(λb0d784ddbf29.studyjetPath), λda68746ca45e(λc00e40046a21.href + λb0d784ddbf29.virtualWasmPath), λda68746ca45e(λb0d784ddbf29.injectPath), λda68746ca45e("data:text/javascript;charset=utf-8;base64," + (λ56fa4419db6c = `\n\t\t\t\t\tdocument.querySelectorAll("script[studyjet-injected]").forEach(script => script.remove());\n\t\t\t\t\t$studyjetController.load({\n\t\t\t\t\t\tconfig: ${JSON.stringify(λb0d784ddbf29)},\n\t\t\t\t\t\tsjconfig: ${JSON.stringify(λ56c2dee6c77b)},\n\t\t\t\t\t\tprefix: new URL("${λc00e40046a21.href}"),\n\t\t\t\t\t\tcookies: ${JSON.stringify(λ36a8c2228d99.dump())},\n\t\t\t\t\t\tyieldGetInjectScripts: ${e.toString()},\n\t\t\t\t\t\tcodecEncode: ${λcfcba59227b9.toString()},\n\t\t\t\t\t\tcodecDecode: ${λ701a7d3d2280.toString()},\n\t\t\t\t\t\tinitHeaders: ${JSON.stringify(λdbf43addca70.headers ?? [])},\n\t\t\t\t\t\thistory: ${JSON.stringify(λdbf43addca70.history ?? [])},\n\t\t\t\t\t})\n\t\t\t\t`, 
                btoa((new TextEncoder).encode(λ56fa4419db6c).reduce((λb0d784ddbf29, λ56c2dee6c77b) => (λb0d784ddbf29.push(String.fromCharCode(λ56c2dee6c77b)), 
                λb0d784ddbf29), []).join("")))) ];
              };
            }(this.controller.config, this.controller.studyjetConfig, new URL(this.prefix, location.href), this.controller.cookieJar, this.controller.config.codec.encode, this.controller.config.codec.decode),
            getWorkerInjectScripts: (λb0d784ddbf29, λ56c2dee6c77b, λc00e40046a21) => {
              var λ36a8c2228d99;
              let λcfcba59227b9 = "";
              return λcfcba59227b9 += λc00e40046a21(this.controller.config.studyjetPath), λcfcba59227b9 += λc00e40046a21(this.prefix + this.controller.config.virtualWasmPath), 
              λcfcba59227b9 += λc00e40046a21("data:text/javascript;charset=utf-8;base64," + (λ36a8c2228d99 = `\n\t\t\t\t\t(()=>{\n\t\t\t\t\t\tconst { StudyJetClient, CookieJar, setWasm } = $studyjet;\n\n\t\t\t\t\t\tsetWasm(Uint8Array.from(atob(self.WASM), (c) => c.charCodeAt(0)));\n\t\t\t\t\t\tdelete self.WASM;\n\n\t\t\t\t\t\tconst sjconfig = ${JSON.stringify(this.controller.studyjetConfig)};\n\t\t\t\t\t\tconst prefix = new URL("${this.prefix}", location.href);\n\n\t\t\t\t\t\tconst context = {\n\t\t\t\t\t\t\tconfig: sjconfig,\n\t\t\t\t\t\t\tprefix,\n\t\t\t\t\t\t\tinterface: {\n\t\t\t\t\t\t\t\tcodecEncode: ${this.controller.config.codec.encode.toString()},\n\t\t\t\t\t\t\t\tcodecDecode: ${this.controller.config.codec.decode.toString()},\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t};\n\n\t\t\t\t\t\tconst client = new StudyJetClient(globalThis, {\n\t\t\t\t\t\t\tcontext,\n\t\t\t\t\t\t\ttransport: null,\n\t\t\t\t\t\t});\n\n\t\t\t\t\t\tclient.hook();\n\t\t\t\t\t})();\n\t\t\t\t\t`, 
              btoa((new TextEncoder).encode(λ36a8c2228d99).reduce((λb0d784ddbf29, λ56c2dee6c77b) => (λb0d784ddbf29.push(String.fromCharCode(λ56c2dee6c77b)), 
              λb0d784ddbf29), []).join(""))));
            },
            codecEncode: this.controller.config.codec.encode,
            codecDecode: this.controller.config.codec.decode
          }
        };
      }
      plugins=[];
      constructor(λb0d784ddbf29, λc00e40046a21, λ36a8c2228d99 = {}) {
        for (const λa4b57e54ff3a of (this.controller = λb0d784ddbf29, this.element = λc00e40046a21, 
        this.options = λ36a8c2228d99, this.id = b(), this.prefix = this.controller.prefix + this.id + "/", 
        this.fetchHandler = new λcfcba59227b9.mK({
          crossOriginIsolated: self.crossOriginIsolated,
          context: this.context,
          transport: λb0d784ddbf29.transport,
          async sendSetCookie(λ56c2dee6c77b, λc00e40046a21) {
            await λb0d784ddbf29.persistCookies(), await λb0d784ddbf29.propagateCookieSync(λ56c2dee6c77b.map(({url: λb0d784ddbf29, cookie: λ56c2dee6c77b}) => ({
              url: λb0d784ddbf29.href,
              cookie: λ56c2dee6c77b
            })), λc00e40046a21);
          },
          fetchBlobUrl: async λb0d784ddbf29 => λ56c2dee6c77b.Sr.fromNativeResponse(await fetch(λb0d784ddbf29)),
          fetchDataUrl: async λb0d784ddbf29 => λ56c2dee6c77b.Sr.fromNativeResponse(await fetch(λb0d784ddbf29))
        }), this.hooks = {
          fetch: this.fetchHandler.hooks.fetch,
          init: λcfcba59227b9.Cx.create(),
          error: λcfcba59227b9.Cx.create()
        }, λc00e40046a21[λ701a7d3d2280.I] = this, this.plugins = λ36a8c2228d99.plugins ?? [], 
        this.plugins)) {
          for (const λb0d784ddbf29 of λa4b57e54ff3a.dependencies) if (!this.plugins.find(λ56c2dee6c77b => λ56c2dee6c77b.name === λb0d784ddbf29)) throw Error(`Dependency ${λb0d784ddbf29} not found for plugin ${λa4b57e54ff3a.name}`);
          λa4b57e54ff3a.install(this);
        }
      }
      getPlugin(λb0d784ddbf29) {
        let λ56c2dee6c77b = this.plugins.find(λ56c2dee6c77b => λ56c2dee6c77b.name === λb0d784ddbf29);
        if (!λ56c2dee6c77b) throw Error(`Plugin ${λb0d784ddbf29} not found`);
        return λ56c2dee6c77b;
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
      go(λb0d784ddbf29) {
        let λ56c2dee6c77b = (0, λcfcba59227b9.Oy)(λb0d784ddbf29, this.context, {
          origin: new URL(location.href),
          base: new URL(location.href)
        });
        this.element.src = λ56c2dee6c77b;
      }
    }
  })(), $studyjetController = λc00e40046a21;
})();
