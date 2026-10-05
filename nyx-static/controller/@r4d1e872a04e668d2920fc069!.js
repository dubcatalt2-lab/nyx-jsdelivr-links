var $studyjetController;

(() => {
  var λdbdac76b4146 = {
    286(λdbdac76b4146, λ2f3eba4cc38a, λd7a7a74557d6) {
      λd7a7a74557d6.d(λ2f3eba4cc38a, {
        I: () => λ2e894bc96f6f
      });
      let λ2e894bc96f6f = Symbol.for("controller frame handle");
    },
    355(λdbdac76b4146, λ2f3eba4cc38a, λd7a7a74557d6) {
      λd7a7a74557d6.d(λ2f3eba4cc38a, {
        O: () => s,
        x: () => λ2e894bc96f6f
      });
      let λ2e894bc96f6f = "0.0.14";
      function s() {
        if ("undefined" == typeof $studyjet) throw Error("@mercuryworkshop/studyjet is not loaded. Load studyjet before the controller.");
        var λdbdac76b4146 = "2.0.67-alpha.2", λ2f3eba4cc38a = $studyjet.versionInfo.version;
        if (λdbdac76b4146 !== λ2f3eba4cc38a) throw Error(`@mercuryworkshop/studyjet version mismatch: this build expects ${λdbdac76b4146}, but the loaded runtime is ${λ2f3eba4cc38a}`);
      }
    },
    805(λdbdac76b4146, λ2f3eba4cc38a, λd7a7a74557d6) {
      λd7a7a74557d6.d(λ2f3eba4cc38a, {
        C: () => o
      });
      class o {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λdbdac76b4146, λ2f3eba4cc38a, λd7a7a74557d6) {
          this.methods = λdbdac76b4146, this.id = λ2f3eba4cc38a, this.sendRaw = λd7a7a74557d6;
        }
        recieve(λdbdac76b4146) {
          if (null == λdbdac76b4146 || "object" != typeof λdbdac76b4146) return;
          let λ2f3eba4cc38a = λdbdac76b4146[this.id];
          if (null == λ2f3eba4cc38a || "object" != typeof λ2f3eba4cc38a) return;
          let λd7a7a74557d6 = λ2f3eba4cc38a.$type;
          if ("response" === λd7a7a74557d6) {
            let λdbdac76b4146 = λ2f3eba4cc38a.$token, λd7a7a74557d6 = λ2f3eba4cc38a.$data, λ2e894bc96f6f = λ2f3eba4cc38a.$error, λb98eb59a223f = this.promiseCallbacks.get(λdbdac76b4146);
            if (!λb98eb59a223f) return;
            this.promiseCallbacks.delete(λdbdac76b4146), void 0 !== λ2e894bc96f6f ? λb98eb59a223f.reject(Error(λ2e894bc96f6f)) : λb98eb59a223f.resolve(λd7a7a74557d6);
          } else if ("request" === λd7a7a74557d6) {
            let λdbdac76b4146 = λ2f3eba4cc38a.$method, λd7a7a74557d6 = λ2f3eba4cc38a.$args;
            this.methods[λdbdac76b4146](λd7a7a74557d6).then(λdbdac76b4146 => {
              this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ2f3eba4cc38a.$token,
                  $data: λdbdac76b4146?.[0]
                }
              }, λdbdac76b4146?.[1]);
            }).catch(λdbdac76b4146 => {
              console.error(λdbdac76b4146), this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ2f3eba4cc38a.$token,
                  $error: λdbdac76b4146?.toString() || "Unknown error"
                }
              }, []);
            });
          }
        }
        call(λdbdac76b4146, λ2f3eba4cc38a, λd7a7a74557d6 = []) {
          let λ2e894bc96f6f = this.counter++;
          return new Promise((λb98eb59a223f, λaf3240425f6b) => {
            this.promiseCallbacks.set(λ2e894bc96f6f, {
              resolve: λb98eb59a223f,
              reject: λaf3240425f6b
            }), this.sendRaw({
              [this.id]: {
                $type: "request",
                $method: λdbdac76b4146,
                $args: λ2f3eba4cc38a,
                $token: λ2e894bc96f6f
              }
            }, λd7a7a74557d6);
          });
        }
      }
    },
    986(λdbdac76b4146) {
      let λ2f3eba4cc38a = Object.getPrototypeOf({});
      function r() {
        return function(λdbdac76b4146) {
          return "object" == typeof λdbdac76b4146 && null !== λdbdac76b4146 && !(λdbdac76b4146 instanceof RegExp) && !(λdbdac76b4146 instanceof Date);
        };
      }
      function o(λdbdac76b4146) {
        function o(λdbdac76b4146) {
          return "constructor" !== λdbdac76b4146 && "prototype" !== λdbdac76b4146 && "__proto__" !== λdbdac76b4146;
        }
        let λd7a7a74557d6 = Object.prototype.propertyIsEnumerable, λ2e894bc96f6f = λdbdac76b4146?.symbols ? function(λdbdac76b4146) {
          let λ2f3eba4cc38a = Object.keys(λdbdac76b4146), λ2e894bc96f6f = Object.getOwnPropertySymbols(λdbdac76b4146);
          for (let λb98eb59a223f = 0, λaf3240425f6b = λ2e894bc96f6f.length; λb98eb59a223f < λaf3240425f6b; ++λb98eb59a223f) λd7a7a74557d6.call(λdbdac76b4146, λ2e894bc96f6f[λb98eb59a223f]) && λ2f3eba4cc38a.push(λ2e894bc96f6f[λb98eb59a223f]);
          return λ2f3eba4cc38a;
        } : Object.keys, λb98eb59a223f = "function" == typeof λdbdac76b4146?.cloneProtoObject ? λdbdac76b4146.cloneProtoObject : void 0, λaf3240425f6b = "function" == typeof λdbdac76b4146?.isMergeableObject ? λdbdac76b4146.isMergeableObject : r(), λ296d9f73dc4a = λdbdac76b4146?.onlyDefinedProperties === !0, λad4d5cbbaa90 = λdbdac76b4146 && "function" == typeof λdbdac76b4146.mergeArray ? λdbdac76b4146.mergeArray({
          clone: d,
          deepmerge: h,
          getKeys: λ2e894bc96f6f,
          isMergeableObject: λaf3240425f6b
        }) : function(λdbdac76b4146, λ2f3eba4cc38a) {
          let λd7a7a74557d6 = λdbdac76b4146.length, λ2e894bc96f6f = λ2f3eba4cc38a.length, λb98eb59a223f = 0, λaf3240425f6b = Array(λd7a7a74557d6 + λ2e894bc96f6f);
          for (;λb98eb59a223f < λd7a7a74557d6; ++λb98eb59a223f) λaf3240425f6b[λb98eb59a223f] = d(λdbdac76b4146[λb98eb59a223f]);
          for (λb98eb59a223f = 0; λb98eb59a223f < λ2e894bc96f6f; ++λb98eb59a223f) λaf3240425f6b[λb98eb59a223f + λd7a7a74557d6] = d(λ2f3eba4cc38a[λb98eb59a223f]);
          return λaf3240425f6b;
        };
        function d(λdbdac76b4146) {
          return λaf3240425f6b(λdbdac76b4146) ? Array.isArray(λdbdac76b4146) ? function(λdbdac76b4146) {
            let λ2f3eba4cc38a = 0, λd7a7a74557d6 = λdbdac76b4146.length, λ2e894bc96f6f = Array(λd7a7a74557d6);
            for (;λ2f3eba4cc38a < λd7a7a74557d6; ++λ2f3eba4cc38a) λ2e894bc96f6f[λ2f3eba4cc38a] = d(λdbdac76b4146[λ2f3eba4cc38a]);
            return λ2e894bc96f6f;
          }(λdbdac76b4146) : function(λdbdac76b4146) {
            let λd7a7a74557d6, λaf3240425f6b, λ296d9f73dc4a, λad4d5cbbaa90 = {};
            if (λb98eb59a223f && Object.getPrototypeOf(λdbdac76b4146) !== λ2f3eba4cc38a) return λb98eb59a223f(λdbdac76b4146);
            let λ668fa82163df = λ2e894bc96f6f(λdbdac76b4146);
            for (λd7a7a74557d6 = 0, λaf3240425f6b = λ668fa82163df.length; λd7a7a74557d6 < λaf3240425f6b; ++λd7a7a74557d6) o(λ296d9f73dc4a = λ668fa82163df[λd7a7a74557d6]) && (λad4d5cbbaa90[λ296d9f73dc4a] = d(λdbdac76b4146[λ296d9f73dc4a]));
            return λad4d5cbbaa90;
          }(λdbdac76b4146) : λdbdac76b4146;
        }
        function h(λdbdac76b4146, λd7a7a74557d6) {
          if (λ296d9f73dc4a && void 0 === λd7a7a74557d6) return d(λdbdac76b4146);
          let λ668fa82163df = Array.isArray(λd7a7a74557d6), λeb95c828a13d = Array.isArray(λdbdac76b4146);
          return "object" != typeof λd7a7a74557d6 || null === λd7a7a74557d6 ? λd7a7a74557d6 : λaf3240425f6b(λdbdac76b4146) ? λ668fa82163df && λeb95c828a13d ? λad4d5cbbaa90(λdbdac76b4146, λd7a7a74557d6) : λ668fa82163df !== λeb95c828a13d ? d(λd7a7a74557d6) : function(λdbdac76b4146, λd7a7a74557d6) {
            let λad4d5cbbaa90, λ668fa82163df, λeb95c828a13d, λec9a41693fed = {}, λe188fd793338 = λ2e894bc96f6f(λdbdac76b4146), λe7547bdffbfd = λ2e894bc96f6f(λd7a7a74557d6);
            for (λad4d5cbbaa90 = 0, λ668fa82163df = λe188fd793338.length; λad4d5cbbaa90 < λ668fa82163df; ++λad4d5cbbaa90) o(λeb95c828a13d = λe188fd793338[λad4d5cbbaa90]) && -1 === λe7547bdffbfd.indexOf(λeb95c828a13d) && (λec9a41693fed[λeb95c828a13d] = d(λdbdac76b4146[λeb95c828a13d]));
            for (λad4d5cbbaa90 = 0, λ668fa82163df = λe7547bdffbfd.length; λad4d5cbbaa90 < λ668fa82163df; ++λad4d5cbbaa90) if (o(λeb95c828a13d = λe7547bdffbfd[λad4d5cbbaa90])) if (λeb95c828a13d in λdbdac76b4146) -1 !== λe188fd793338.indexOf(λeb95c828a13d) && (λb98eb59a223f && λaf3240425f6b(λd7a7a74557d6[λeb95c828a13d]) && Object.getPrototypeOf(λd7a7a74557d6[λeb95c828a13d]) !== λ2f3eba4cc38a ? λec9a41693fed[λeb95c828a13d] = λb98eb59a223f(λd7a7a74557d6[λeb95c828a13d]) : λec9a41693fed[λeb95c828a13d] = h(λdbdac76b4146[λeb95c828a13d], λd7a7a74557d6[λeb95c828a13d])); else {
              if (λ296d9f73dc4a && void 0 === λd7a7a74557d6[λeb95c828a13d]) continue;
              λec9a41693fed[λeb95c828a13d] = d(λd7a7a74557d6[λeb95c828a13d]);
            }
            return λec9a41693fed;
          }(λdbdac76b4146, λd7a7a74557d6) : d(λd7a7a74557d6);
        }
        return λdbdac76b4146?.all ? function() {
          let λdbdac76b4146;
          switch (arguments.length) {
           case 0:
            return {};

           case 1:
            return d(arguments[0]);

           case 2:
            return h(arguments[0], arguments[1]);
          }
          for (let λ2f3eba4cc38a = 0, λd7a7a74557d6 = arguments.length; λ2f3eba4cc38a < λd7a7a74557d6; ++λ2f3eba4cc38a) λdbdac76b4146 = h(λdbdac76b4146, arguments[λ2f3eba4cc38a]);
          return λdbdac76b4146;
        } : h;
      }
      λdbdac76b4146.exports = o, λdbdac76b4146.exports.default = o, λdbdac76b4146.exports.deepmerge = o, 
      Object.defineProperty(λdbdac76b4146.exports, "isMergeableObject", {
        get: r
      });
    },
    235(λdbdac76b4146, λ2f3eba4cc38a, λd7a7a74557d6) {
      λd7a7a74557d6.d(λ2f3eba4cc38a, {
        Sr: () => s
      }), WebSocket.CLOSED, WebSocket.CONNECTING, WebSocket.OPEN, EventTarget;
      let λ2e894bc96f6f = [ 101, 204, 205, 304 ];
      class s extends Response {
        url;
        rawHeaders;
        redirected=!1;
        static fromTransferrableResponse(λdbdac76b4146, λ2f3eba4cc38a) {
          let λd7a7a74557d6 = new s(λ2e894bc96f6f.includes(λdbdac76b4146.status) ? void 0 : λdbdac76b4146.body, {
            headers: new Headers(λdbdac76b4146.headers),
            status: λdbdac76b4146.status,
            statusText: λdbdac76b4146.statusText
          });
          return λd7a7a74557d6.url = λ2f3eba4cc38a, λd7a7a74557d6.redirected = λdbdac76b4146.status >= 300 && λdbdac76b4146.status < 400 && void 0 !== λdbdac76b4146.headers.location, 
          λd7a7a74557d6.rawHeaders = λdbdac76b4146.headers, λd7a7a74557d6;
        }
        static fromNativeResponse(λdbdac76b4146) {
          let λ2f3eba4cc38a = new s(λ2e894bc96f6f.includes(λdbdac76b4146.status) ? void 0 : λdbdac76b4146.body, {
            headers: λdbdac76b4146.headers,
            status: λdbdac76b4146.status,
            statusText: λdbdac76b4146.statusText
          });
          return λ2f3eba4cc38a.url = λdbdac76b4146.url, λ2f3eba4cc38a.rawHeaders = [ ...λdbdac76b4146.headers ], 
          λ2f3eba4cc38a.redirected = λdbdac76b4146.redirected, λ2f3eba4cc38a;
        }
      }
    },
    423(λdbdac76b4146, λ2f3eba4cc38a, λd7a7a74557d6) {
      λd7a7a74557d6.d(λ2f3eba4cc38a, {
        Cx: () => λ9ac406a1ba82,
        Oy: () => λf2efbf1b94d7,
        cP: () => λb98eb59a223f,
        ht: () => λ15099e3bcf06,
        k_: () => λ296d9f73dc4a,
        mK: () => λec9a41693fed,
        sb: () => λ29c047a5fb52,
        uh: () => λe7547bdffbfd
      });
      let {BareResponse: λ2e894bc96f6f, CookieJar: λb98eb59a223f, IncrementalHtmlRewriter: λaf3240425f6b, Plugin: λ296d9f73dc4a, STUDYJETCLIENT: λad4d5cbbaa90, STUDYJETCLIENTNAME: λ668fa82163df, StudyJetClient: λeb95c828a13d, StudyJetFetchHandler: λec9a41693fed, StudyJetFetchTrackedClient: λe188fd793338, StudyJetHeaders: λe7547bdffbfd, Tap: λ9ac406a1ba82, createLocationProxy: λe46c6e9037f9, defaultConfig: λ29c047a5fb52, defaultConfigDev: λbd70aad5015f, flagEnabled: λ2ab424cd67ca, getOwnPropertyDescriptorHandler: λda79800f57c5, getRewriter: λb65340e25fff, getScriptBlockTypeString: λ32ddd487ed34, htmlRules: λ4ac682d00bcf, isArchiveMimeType: λ3e4dfd28867d, isAudioOrVideoMimeType: λ6bacb8dcc081, isFontMimeType: λ65491d33d907, isHtmlMimeType: λa3a5e14df92e, isImageMimeType: λ8410b786437a, isInlineDisplayableMimeType: λ214bd0a41de8, isJavascriptMimeType: λ849fe9de8d91, isJavascriptMimeTypeEssenceMatch: λ44aa97ace0fc, isModuleScriptType: λf60a9a507ed0, isScriptType: λ08bcd73d415b, isScriptableMimeType: λ51fe7a3c1ff8, isXmlMimeType: λebf18cb54121, isZipBasedMimeType: λbb23ec37d55d, isdedicated: λ22abeffa04cb, isshared: λa70354d2179c, issw: λ1494fe5e9c9a, iswindow: λ0c1465d7cfef, isworker: λd0847ed46ee1, parseMimeType: λ6f9aa2523570, rewriteBlob: λ1ea04ddc84c8, rewriteCss: λ99c459142f9b, rewriteHtml: λdf58bde58257, rewriteJs: λ4cef04563349, rewriteJsInner: λf35ae2c61b0e, rewriteSrcset: λ217885319eb6, rewriteUrl: λf2efbf1b94d7, rewriteWorkers: λe760dacfe124, setWasm: λ15099e3bcf06, unrewriteBlob: λ1ec5a57db691, unrewriteCss: λ55ec93523182, unrewriteHtml: λ92ca75323978, unrewriteUrl: λ809eac4faa93, versionInfo: λ612d8a80fb52} = globalThis.$studyjet;
    }
  }, λ2f3eba4cc38a = {};
  function r(λd7a7a74557d6) {
    var λ2e894bc96f6f = λ2f3eba4cc38a[λd7a7a74557d6];
    if (void 0 !== λ2e894bc96f6f) return λ2e894bc96f6f.exports;
    var λb98eb59a223f = λ2f3eba4cc38a[λd7a7a74557d6] = {
      exports: {}
    };
    return λdbdac76b4146[λd7a7a74557d6](λb98eb59a223f, λb98eb59a223f.exports, r), λb98eb59a223f.exports;
  }
  r.n = λdbdac76b4146 => {
    var λ2f3eba4cc38a = λdbdac76b4146 && λdbdac76b4146.__esModule ? () => λdbdac76b4146.default : () => λdbdac76b4146;
    return r.d(λ2f3eba4cc38a, {
      a: λ2f3eba4cc38a
    }), λ2f3eba4cc38a;
  }, r.d = (λdbdac76b4146, λ2f3eba4cc38a) => {
    for (var λd7a7a74557d6 in λ2f3eba4cc38a) r.o(λ2f3eba4cc38a, λd7a7a74557d6) && !r.o(λdbdac76b4146, λd7a7a74557d6) && Object.defineProperty(λdbdac76b4146, λd7a7a74557d6, {
      enumerable: !0,
      get: λ2f3eba4cc38a[λd7a7a74557d6]
    });
  }, r.o = (λdbdac76b4146, λ2f3eba4cc38a) => Object.prototype.hasOwnProperty.call(λdbdac76b4146, λ2f3eba4cc38a), 
  r.r = λdbdac76b4146 => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λdbdac76b4146, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(λdbdac76b4146, "__esModule", {
      value: !0
    });
  };
  var λd7a7a74557d6 = {};
  (() => {
    r.r(λd7a7a74557d6), r.d(λd7a7a74557d6, {
      Controller: () => S,
      Frame: () => v,
      ManagedPlugin: () => d,
      VERSION: () => λ296d9f73dc4a.x,
      assertRuntimeStudyJetVersion: () => λ296d9f73dc4a.O,
      config: () => λad4d5cbbaa90
    });
    var λdbdac76b4146 = r(805), λ2f3eba4cc38a = r(235), λ2e894bc96f6f = r(986), λb98eb59a223f = r(423), λaf3240425f6b = r(286), λ296d9f73dc4a = r(355);
    let λad4d5cbbaa90 = {
      prefix: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/study/",
      studyjetPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/studyjet/@r69c18f9bd4ed175c9ea505b8!.js",
      injectPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/controller/@r9e855ac82edc4b51e1340564!.js",
      wasmPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/studyjet/@r55286cfe09d741023cc3e1d6!.wasm",
      virtualWasmPath: "studyjet.wasm.js",
      codec: {
        encode: λdbdac76b4146 => λdbdac76b4146 ? encodeURIComponent(λdbdac76b4146) : λdbdac76b4146,
        decode: λdbdac76b4146 => λdbdac76b4146 ? decodeURIComponent(λdbdac76b4146) : λdbdac76b4146
      }
    }, λ668fa82163df = {
      flags: {
        ...λb98eb59a223f.sb.flags,
        allowFailedIntercepts: !0
      },
      maskedfiles: [ "inject.js", "studyjet.wasm.js" ]
    };
    class d extends λb98eb59a223f.k_ {
      frame=null;
      dependencies=[];
      constructor(λdbdac76b4146, λ2f3eba4cc38a) {
        super(λdbdac76b4146), this.dependencies = λ2f3eba4cc38a;
      }
      install(λdbdac76b4146) {
        this.frame = λdbdac76b4146;
      }
    }
    let λeb95c828a13d = "state", λec9a41693fed = "cookies", λe188fd793338 = null;
    function u(λdbdac76b4146) {
      return "object" == typeof λdbdac76b4146 && null !== λdbdac76b4146 && "number" == typeof λdbdac76b4146.updatedAt && Number.isFinite(λdbdac76b4146.updatedAt) && "string" == typeof λdbdac76b4146.cookies ? λdbdac76b4146 : null;
    }
    function y(λdbdac76b4146) {
      return new Promise((λ2f3eba4cc38a, λd7a7a74557d6) => {
        λdbdac76b4146.onsuccess = () => λ2f3eba4cc38a(λdbdac76b4146.result), λdbdac76b4146.onerror = () => λd7a7a74557d6(λdbdac76b4146.error ?? Error("IndexedDB request failed"));
      });
    }
    function m(λdbdac76b4146) {
      return new Promise((λ2f3eba4cc38a, λd7a7a74557d6) => {
        λdbdac76b4146.oncomplete = () => λ2f3eba4cc38a(), λdbdac76b4146.onabort = () => λd7a7a74557d6(λdbdac76b4146.error ?? Error("IndexedDB transaction aborted")), 
        λdbdac76b4146.onerror = () => λd7a7a74557d6(λdbdac76b4146.error ?? Error("IndexedDB transaction failed"));
      });
    }
    function g() {
      return λe188fd793338 || (λe188fd793338 = new Promise((λdbdac76b4146, λ2f3eba4cc38a) => {
        let λd7a7a74557d6 = indexedDB.open("@d941bc65af3", 1);
        λd7a7a74557d6.onupgradeneeded = () => {
          let λdbdac76b4146 = λd7a7a74557d6.result;
          λdbdac76b4146.objectStoreNames.contains(λeb95c828a13d) || λdbdac76b4146.createObjectStore(λeb95c828a13d);
        }, λd7a7a74557d6.onsuccess = () => λdbdac76b4146(λd7a7a74557d6.result), λd7a7a74557d6.onerror = () => λ2f3eba4cc38a(λd7a7a74557d6.error ?? Error("Failed to open cookie database"));
      }));
    }
    async function w() {
      try {
        let λdbdac76b4146 = (await g()).transaction(λeb95c828a13d, "readonly"), λ2f3eba4cc38a = λdbdac76b4146.objectStore(λeb95c828a13d), λd7a7a74557d6 = await y(λ2f3eba4cc38a.get(λec9a41693fed));
        return await m(λdbdac76b4146), u(λd7a7a74557d6);
      } catch (λdbdac76b4146) {
        return console.error("Failed to read persisted controller cookies:", λdbdac76b4146), 
        null;
      }
    }
    async function k(λdbdac76b4146, λ2f3eba4cc38a) {
      try {
        let λd7a7a74557d6 = (await g()).transaction(λeb95c828a13d, "readwrite"), λ2e894bc96f6f = λd7a7a74557d6.objectStore(λeb95c828a13d), λb98eb59a223f = u(await y(λ2e894bc96f6f.get(λec9a41693fed))), λaf3240425f6b = Math.max(Date.now(), λ2f3eba4cc38a + 1, (λb98eb59a223f?.updatedAt ?? 0) + 1);
        return λ2e894bc96f6f.put({
          updatedAt: λaf3240425f6b,
          cookies: λdbdac76b4146
        }, λec9a41693fed), await m(λd7a7a74557d6), λaf3240425f6b;
      } catch (λdbdac76b4146) {
        return console.error("Failed to persist controller cookies:", λdbdac76b4146), λ2f3eba4cc38a;
      }
    }
    function b() {
      return Math.random().toString(36).substring(2, 10);
    }
    let λe7547bdffbfd = (0, λ2e894bc96f6f.deepmerge)();
    class S {
      init;
      id;
      config;
      studyjetConfig;
      prefix;
      cookieJar=new λb98eb59a223f.cP;
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
      onTabChannelMessage=λdbdac76b4146 => {
        this.rpc.recieve(λdbdac76b4146.data);
      };
      onCookieSyncMessage=λdbdac76b4146 => {
        let λ2f3eba4cc38a = "object" == typeof λdbdac76b4146.data && null !== λdbdac76b4146.data ? λdbdac76b4146.data.updatedAt : void 0;
        "number" != typeof λ2f3eba4cc38a || λ2f3eba4cc38a <= this.cookieUpdatedAt || (this.cookieSyncDirty = !0, 
        this.loadSavedCookies());
      };
      async loadStudyJetWasm() {
        if (this.wasmAlreadyFetched) return;
        let λdbdac76b4146 = await fetch(this.config.wasmPath);
        (0, λb98eb59a223f.ht)(await λdbdac76b4146.arrayBuffer()), this.wasmAlreadyFetched = !0;
      }
      methods={
        ready: async () => {
          this.readyResolve(), setTimeout(() => {
            this.guardServiceWorkerRevive = !1;
          }, 5e3);
        },
        request: async λdbdac76b4146 => {
          let λ2f3eba4cc38a = new URL(λdbdac76b4146.rawUrl).pathname, λd7a7a74557d6 = this.frames.find(λdbdac76b4146 => λ2f3eba4cc38a.startsWith(λdbdac76b4146.prefix));
          if (!λd7a7a74557d6) throw Error("No frame found for request");
          try {
            if (await this.loadSavedCookies(), λ2f3eba4cc38a === λd7a7a74557d6.prefix + this.config.virtualWasmPath) {
              if (!this.wasmPayload) {
                let λdbdac76b4146 = await fetch(this.config.wasmPath), λ2f3eba4cc38a = await λdbdac76b4146.arrayBuffer(), λd7a7a74557d6 = btoa(new Uint8Array(λ2f3eba4cc38a).reduce((λdbdac76b4146, λ2f3eba4cc38a) => (λdbdac76b4146.push(String.fromCharCode(λ2f3eba4cc38a)), 
                λdbdac76b4146), []).join(""));
                this.wasmPayload = `self.WASM = '${λd7a7a74557d6}';`;
              }
              return [ {
                body: this.wasmPayload,
                status: 200,
                statusText: "OK",
                headers: [ [ "Content-Type", "application/javascript" ] ]
              }, [] ];
            }
            let λ2e894bc96f6f = λb98eb59a223f.uh.fromRawHeaders(λdbdac76b4146.initialHeaders), λaf3240425f6b = await λd7a7a74557d6.fetchHandler.handleFetch({
              initialHeaders: λ2e894bc96f6f,
              rawClientUrl: λdbdac76b4146.rawClientUrl ? new URL(λdbdac76b4146.rawClientUrl) : void 0,
              rawUrl: new URL(λdbdac76b4146.rawUrl),
              rawReferrer: λdbdac76b4146.rawReferrer,
              rawDestination: λdbdac76b4146.destination,
              method: λdbdac76b4146.method,
              mode: λdbdac76b4146.mode,
              referrer: λdbdac76b4146.referrer,
              body: λdbdac76b4146.body,
              cache: λdbdac76b4146.cache,
              clientId: λdbdac76b4146.clientId
            });
            return [ {
              body: λaf3240425f6b.body,
              status: λaf3240425f6b.status,
              statusText: λaf3240425f6b.statusText,
              headers: λaf3240425f6b.headers.toRawHeaders()
            }, λaf3240425f6b.body instanceof ReadableStream || λaf3240425f6b.body instanceof ArrayBuffer ? [ λaf3240425f6b.body ] : [] ];
          } catch (λ2f3eba4cc38a) {
            let λ2e894bc96f6f = {
              setResponse: void 0,
              suppressError: !1
            };
            if (await λb98eb59a223f.Cx.dispatch(λd7a7a74557d6.hooks.error.request, {
              rawrequest: λdbdac76b4146,
              error: λ2f3eba4cc38a
            }, λ2e894bc96f6f), λ2e894bc96f6f.suppressError || console.error("Error in controller request handler:", λ2f3eba4cc38a), 
            λ2e894bc96f6f.setResponse) return [ λ2e894bc96f6f.setResponse, [] ];
            throw λ2f3eba4cc38a;
          }
        },
        initRemoteTransport: async λ2f3eba4cc38a => {
          let λd7a7a74557d6 = new λdbdac76b4146.C({
            request: async ({remote: λdbdac76b4146, method: λ2f3eba4cc38a, body: λd7a7a74557d6, headers: λ2e894bc96f6f}) => {
              let λb98eb59a223f = await this.transport.request(new URL(λdbdac76b4146), λ2f3eba4cc38a, λd7a7a74557d6, λ2e894bc96f6f, void 0);
              return [ λb98eb59a223f, [ λb98eb59a223f.body ] ];
            },
            sendSetCookie: async ({cookies: λdbdac76b4146, options: λ2f3eba4cc38a}) => {
              await this.loadSavedCookies(!0), λ2f3eba4cc38a?.clear && this.cookieJar.clear(), 
              this.applyCookieSyncEntries(λdbdac76b4146), await this.persistCookies(), await this.propagateCookieSync(λdbdac76b4146, λ2f3eba4cc38a);
            },
            connect: async ({url: λdbdac76b4146, protocols: λ2f3eba4cc38a, requestHeaders: λd7a7a74557d6, port: λ2e894bc96f6f}) => {
              let λb98eb59a223f, λaf3240425f6b = new Promise(λdbdac76b4146 => λb98eb59a223f = λdbdac76b4146), [λ296d9f73dc4a, λad4d5cbbaa90] = this.transport.connect(new URL(λdbdac76b4146), λ2f3eba4cc38a, λd7a7a74557d6, (λdbdac76b4146, λ2f3eba4cc38a) => {
                λb98eb59a223f({
                  result: "success",
                  protocol: λdbdac76b4146,
                  extensions: λ2f3eba4cc38a
                });
              }, λdbdac76b4146 => {
                λ2e894bc96f6f.postMessage({
                  type: "data",
                  data: λdbdac76b4146
                }, λdbdac76b4146 instanceof ArrayBuffer ? [ λdbdac76b4146 ] : []);
              }, (λdbdac76b4146, λ2f3eba4cc38a) => {
                λ2e894bc96f6f.postMessage({
                  type: "close",
                  code: λdbdac76b4146,
                  reason: λ2f3eba4cc38a
                });
              }, λdbdac76b4146 => {
                λb98eb59a223f({
                  result: "failure",
                  error: λdbdac76b4146
                });
              });
              return λ2e894bc96f6f.onmessageerror = λdbdac76b4146 => {
                console.error("Transport port messageerror (this should never happen!)", λdbdac76b4146);
              }, λ2e894bc96f6f.onmessage = ({data: λdbdac76b4146}) => {
                "data" === λdbdac76b4146.type ? λ296d9f73dc4a(λdbdac76b4146.data) : "close" === λdbdac76b4146.type && λad4d5cbbaa90(λdbdac76b4146.code, λdbdac76b4146.reason);
              }, [ await λaf3240425f6b, [] ];
            }
          }, "transport", (λdbdac76b4146, λd7a7a74557d6) => λ2f3eba4cc38a.postMessage(λdbdac76b4146, λd7a7a74557d6));
          λ2f3eba4cc38a.onmessageerror = λdbdac76b4146 => {
            console.error("Transport port messageerror (this should never happen!)", λdbdac76b4146);
          }, λ2f3eba4cc38a.onmessage = λdbdac76b4146 => {
            λd7a7a74557d6.recieve(λdbdac76b4146.data);
          }, λd7a7a74557d6.call("ready", void 0, []);
        }
      };
      constructor(λ2f3eba4cc38a) {
        this.init = λ2f3eba4cc38a, (0, λ296d9f73dc4a.O)(), this.id = b(), this.config = λe7547bdffbfd(λad4d5cbbaa90, λ2f3eba4cc38a.config || {}), 
        this.studyjetConfig = λe7547bdffbfd(λ668fa82163df, λb98eb59a223f.sb), this.studyjetConfig = λe7547bdffbfd(this.studyjetConfig, λ2f3eba4cc38a.studyjetConfig || {}), 
        this.prefix = this.config.prefix + this.id + "/", this.serviceWorkerController = λ2f3eba4cc38a.serviceworker, 
        this.ready = Promise.all([ new Promise(λdbdac76b4146 => {
          this.readyResolve = λdbdac76b4146;
        }), this.loadStudyJetWasm(), this.loadSavedCookies(!0) ]).then(() => void 0), this.rpc = new λdbdac76b4146.C(this.methods, "tabchannel-" + this.id, (λdbdac76b4146, λ2f3eba4cc38a) => {
          if (!this.port) throw Error("Port not found");
          this.port.postMessage(λdbdac76b4146, λ2f3eba4cc38a);
        }), this.transport = λ2f3eba4cc38a.transport, this.cookieSyncChannel.addEventListener("message", this.onCookieSyncMessage), 
        this.setupMessagePort(), navigator.serviceWorker.addEventListener("message", λdbdac76b4146 => {
          if (λdbdac76b4146.data?.$controller$setCookie && "object" == typeof λdbdac76b4146.data.$controller$setCookie) {
            let λ2f3eba4cc38a = λdbdac76b4146.data.$controller$setCookie;
            if (λ2f3eba4cc38a.controllerId && λ2f3eba4cc38a.controllerId !== this.id) return;
            λ2f3eba4cc38a.options?.clear && this.cookieJar.clear(), this.applyCookieSyncEntries(λ2f3eba4cc38a.cookies), 
            "string" == typeof λ2f3eba4cc38a.id && this.serviceWorkerController.postMessage({
              $sw$setCookieDone: {
                id: λ2f3eba4cc38a.id
              }
            });
            return;
          }
          if (λdbdac76b4146.data.$controller$swrevive) {
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
        let λdbdac76b4146 = new MessageChannel;
        this.port = λdbdac76b4146.port1, this.port.addEventListener("message", this.onTabChannelMessage), 
        this.port.start(), this.serviceWorkerController.postMessage({
          $controller$init: {
            prefix: this.prefix,
            id: this.id
          }
        }, [ λdbdac76b4146.port2 ]);
      }
      applyCookieSyncEntries(λdbdac76b4146) {
        if (Array.isArray(λdbdac76b4146)) for (let λ2f3eba4cc38a of λdbdac76b4146) "string" == typeof λ2f3eba4cc38a?.url && "string" == typeof λ2f3eba4cc38a.cookie && this.cookieJar.setCookies(λ2f3eba4cc38a.cookie, new URL(λ2f3eba4cc38a.url));
      }
      async propagateCookieSync(λdbdac76b4146, λ2f3eba4cc38a = {}) {
        this.port && await this.rpc.call("sendSetCookie", {
          cookies: λdbdac76b4146,
          options: λ2f3eba4cc38a
        });
      }
      async loadSavedCookies(λdbdac76b4146 = !1) {
        if (λdbdac76b4146 || this.cookieSyncDirty) return this.cookieSyncPromise || (this.cookieSyncPromise = (async () => {
          let λdbdac76b4146 = await w();
          λdbdac76b4146 && λdbdac76b4146.updatedAt > this.cookieUpdatedAt && (this.cookieJar.load(λdbdac76b4146.cookies), 
          this.cookieUpdatedAt = λdbdac76b4146.updatedAt), this.cookieSyncDirty = !1;
        })().finally(() => {
          this.cookieSyncPromise = null;
        })), this.cookieSyncPromise;
      }
      async persistCookies() {
        let λdbdac76b4146 = await k(this.cookieJar.dump(), this.cookieUpdatedAt);
        λdbdac76b4146 <= this.cookieUpdatedAt || (this.cookieUpdatedAt = λdbdac76b4146, 
        this.cookieSyncDirty = !1, this.cookieSyncChannel.postMessage({
          updatedAt: λdbdac76b4146
        }));
      }
      setTransport(λdbdac76b4146) {
        for (let λ2f3eba4cc38a of (this.transport = λdbdac76b4146, this.frames)) λ2f3eba4cc38a.controller.transport = λdbdac76b4146, 
        λ2f3eba4cc38a.fetchHandler.client.transport = λdbdac76b4146;
      }
      createFrame(λdbdac76b4146, λ2f3eba4cc38a = {}) {
        if (!this.ready) throw Error("Controller is not ready! Try awaiting controller.wait()");
        let λd7a7a74557d6 = new v(this, λdbdac76b4146 ??= document.createElement("iframe"), λ2f3eba4cc38a);
        return this.frames.push(λd7a7a74557d6), λd7a7a74557d6;
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
            getInjectScripts: function e(λdbdac76b4146, λ2f3eba4cc38a, λd7a7a74557d6, λ2e894bc96f6f, λb98eb59a223f, λaf3240425f6b) {
              return (λ296d9f73dc4a, λad4d5cbbaa90, λ668fa82163df, λeb95c828a13d) => {
                var λec9a41693fed;
                return [ λeb95c828a13d(λdbdac76b4146.studyjetPath), λeb95c828a13d(λd7a7a74557d6.href + λdbdac76b4146.virtualWasmPath), λeb95c828a13d(λdbdac76b4146.injectPath), λeb95c828a13d("data:text/javascript;charset=utf-8;base64," + (λec9a41693fed = `\n\t\t\t\t\tdocument.querySelectorAll("script[studyjet-injected]").forEach(script => script.remove());\n\t\t\t\t\t$studyjetController.load({\n\t\t\t\t\t\tconfig: ${JSON.stringify(λdbdac76b4146)},\n\t\t\t\t\t\tsjconfig: ${JSON.stringify(λ2f3eba4cc38a)},\n\t\t\t\t\t\tprefix: new URL("${λd7a7a74557d6.href}"),\n\t\t\t\t\t\tcookies: ${JSON.stringify(λ2e894bc96f6f.dump())},\n\t\t\t\t\t\tyieldGetInjectScripts: ${e.toString()},\n\t\t\t\t\t\tcodecEncode: ${λb98eb59a223f.toString()},\n\t\t\t\t\t\tcodecDecode: ${λaf3240425f6b.toString()},\n\t\t\t\t\t\tinitHeaders: ${JSON.stringify(λ668fa82163df.headers ?? [])},\n\t\t\t\t\t\thistory: ${JSON.stringify(λ668fa82163df.history ?? [])},\n\t\t\t\t\t})\n\t\t\t\t`, 
                btoa((new TextEncoder).encode(λec9a41693fed).reduce((λdbdac76b4146, λ2f3eba4cc38a) => (λdbdac76b4146.push(String.fromCharCode(λ2f3eba4cc38a)), 
                λdbdac76b4146), []).join("")))) ];
              };
            }(this.controller.config, this.controller.studyjetConfig, new URL(this.prefix, location.href), this.controller.cookieJar, this.controller.config.codec.encode, this.controller.config.codec.decode),
            getWorkerInjectScripts: (λdbdac76b4146, λ2f3eba4cc38a, λd7a7a74557d6) => {
              var λ2e894bc96f6f;
              let λb98eb59a223f = "";
              return λb98eb59a223f += λd7a7a74557d6(this.controller.config.studyjetPath), λb98eb59a223f += λd7a7a74557d6(this.prefix + this.controller.config.virtualWasmPath), 
              λb98eb59a223f += λd7a7a74557d6("data:text/javascript;charset=utf-8;base64," + (λ2e894bc96f6f = `\n\t\t\t\t\t(()=>{\n\t\t\t\t\t\tconst { StudyJetClient, CookieJar, setWasm } = $studyjet;\n\n\t\t\t\t\t\tsetWasm(Uint8Array.from(atob(self.WASM), (c) => c.charCodeAt(0)));\n\t\t\t\t\t\tdelete self.WASM;\n\n\t\t\t\t\t\tconst sjconfig = ${JSON.stringify(this.controller.studyjetConfig)};\n\t\t\t\t\t\tconst prefix = new URL("${this.prefix}", location.href);\n\n\t\t\t\t\t\tconst context = {\n\t\t\t\t\t\t\tconfig: sjconfig,\n\t\t\t\t\t\t\tprefix,\n\t\t\t\t\t\t\tinterface: {\n\t\t\t\t\t\t\t\tcodecEncode: ${this.controller.config.codec.encode.toString()},\n\t\t\t\t\t\t\t\tcodecDecode: ${this.controller.config.codec.decode.toString()},\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t};\n\n\t\t\t\t\t\tconst client = new StudyJetClient(globalThis, {\n\t\t\t\t\t\t\tcontext,\n\t\t\t\t\t\t\ttransport: null,\n\t\t\t\t\t\t});\n\n\t\t\t\t\t\tclient.hook();\n\t\t\t\t\t})();\n\t\t\t\t\t`, 
              btoa((new TextEncoder).encode(λ2e894bc96f6f).reduce((λdbdac76b4146, λ2f3eba4cc38a) => (λdbdac76b4146.push(String.fromCharCode(λ2f3eba4cc38a)), 
              λdbdac76b4146), []).join(""))));
            },
            codecEncode: this.controller.config.codec.encode,
            codecDecode: this.controller.config.codec.decode
          }
        };
      }
      plugins=[];
      constructor(λdbdac76b4146, λd7a7a74557d6, λ2e894bc96f6f = {}) {
        for (const λ296d9f73dc4a of (this.controller = λdbdac76b4146, this.element = λd7a7a74557d6, 
        this.options = λ2e894bc96f6f, this.id = b(), this.prefix = this.controller.prefix + this.id + "/", 
        this.fetchHandler = new λb98eb59a223f.mK({
          crossOriginIsolated: self.crossOriginIsolated,
          context: this.context,
          transport: λdbdac76b4146.transport,
          async sendSetCookie(λ2f3eba4cc38a, λd7a7a74557d6) {
            await λdbdac76b4146.persistCookies(), await λdbdac76b4146.propagateCookieSync(λ2f3eba4cc38a.map(({url: λdbdac76b4146, cookie: λ2f3eba4cc38a}) => ({
              url: λdbdac76b4146.href,
              cookie: λ2f3eba4cc38a
            })), λd7a7a74557d6);
          },
          fetchBlobUrl: async λdbdac76b4146 => λ2f3eba4cc38a.Sr.fromNativeResponse(await fetch(λdbdac76b4146)),
          fetchDataUrl: async λdbdac76b4146 => λ2f3eba4cc38a.Sr.fromNativeResponse(await fetch(λdbdac76b4146))
        }), this.hooks = {
          fetch: this.fetchHandler.hooks.fetch,
          init: λb98eb59a223f.Cx.create(),
          error: λb98eb59a223f.Cx.create()
        }, λd7a7a74557d6[λaf3240425f6b.I] = this, this.plugins = λ2e894bc96f6f.plugins ?? [], 
        this.plugins)) {
          for (const λdbdac76b4146 of λ296d9f73dc4a.dependencies) if (!this.plugins.find(λ2f3eba4cc38a => λ2f3eba4cc38a.name === λdbdac76b4146)) throw Error(`Dependency ${λdbdac76b4146} not found for plugin ${λ296d9f73dc4a.name}`);
          λ296d9f73dc4a.install(this);
        }
      }
      getPlugin(λdbdac76b4146) {
        let λ2f3eba4cc38a = this.plugins.find(λ2f3eba4cc38a => λ2f3eba4cc38a.name === λdbdac76b4146);
        if (!λ2f3eba4cc38a) throw Error(`Plugin ${λdbdac76b4146} not found`);
        return λ2f3eba4cc38a;
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
      go(λdbdac76b4146) {
        let λ2f3eba4cc38a = (0, λb98eb59a223f.Oy)(λdbdac76b4146, this.context, {
          origin: new URL(location.href),
          base: new URL(location.href)
        });
        this.element.src = λ2f3eba4cc38a;
      }
    }
  })(), $studyjetController = λd7a7a74557d6;
})();
