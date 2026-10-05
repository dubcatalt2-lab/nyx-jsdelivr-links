var $studyjetController;

(() => {
  var λ018cc82d5039 = {
    286(λ018cc82d5039, λ1fad1172821a, λ0eb3f3a3335f) {
      λ0eb3f3a3335f.d(λ1fad1172821a, {
        I: () => λ5b6067ee15e0
      });
      let λ5b6067ee15e0 = Symbol.for("controller frame handle");
    },
    355(λ018cc82d5039, λ1fad1172821a, λ0eb3f3a3335f) {
      λ0eb3f3a3335f.d(λ1fad1172821a, {
        O: () => s,
        x: () => λ5b6067ee15e0
      });
      let λ5b6067ee15e0 = "0.0.14";
      function s() {
        if ("undefined" == typeof $studyjet) throw Error("@mercuryworkshop/studyjet is not loaded. Load studyjet before the controller.");
        var λ018cc82d5039 = "2.0.67-alpha.2", λ1fad1172821a = $studyjet.versionInfo.version;
        if (λ018cc82d5039 !== λ1fad1172821a) throw Error(`@mercuryworkshop/studyjet version mismatch: this build expects ${λ018cc82d5039}, but the loaded runtime is ${λ1fad1172821a}`);
      }
    },
    805(λ018cc82d5039, λ1fad1172821a, λ0eb3f3a3335f) {
      λ0eb3f3a3335f.d(λ1fad1172821a, {
        C: () => o
      });
      class o {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λ018cc82d5039, λ1fad1172821a, λ0eb3f3a3335f) {
          this.methods = λ018cc82d5039, this.id = λ1fad1172821a, this.sendRaw = λ0eb3f3a3335f;
        }
        recieve(λ018cc82d5039) {
          if (null == λ018cc82d5039 || "object" != typeof λ018cc82d5039) return;
          let λ1fad1172821a = λ018cc82d5039[this.id];
          if (null == λ1fad1172821a || "object" != typeof λ1fad1172821a) return;
          let λ0eb3f3a3335f = λ1fad1172821a.$type;
          if ("response" === λ0eb3f3a3335f) {
            let λ018cc82d5039 = λ1fad1172821a.$token, λ0eb3f3a3335f = λ1fad1172821a.$data, λ5b6067ee15e0 = λ1fad1172821a.$error, λc99763f7f345 = this.promiseCallbacks.get(λ018cc82d5039);
            if (!λc99763f7f345) return;
            this.promiseCallbacks.delete(λ018cc82d5039), void 0 !== λ5b6067ee15e0 ? λc99763f7f345.reject(Error(λ5b6067ee15e0)) : λc99763f7f345.resolve(λ0eb3f3a3335f);
          } else if ("request" === λ0eb3f3a3335f) {
            let λ018cc82d5039 = λ1fad1172821a.$method, λ0eb3f3a3335f = λ1fad1172821a.$args;
            this.methods[λ018cc82d5039](λ0eb3f3a3335f).then(λ018cc82d5039 => {
              this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ1fad1172821a.$token,
                  $data: λ018cc82d5039?.[0]
                }
              }, λ018cc82d5039?.[1]);
            }).catch(λ018cc82d5039 => {
              console.error(λ018cc82d5039), this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ1fad1172821a.$token,
                  $error: λ018cc82d5039?.toString() || "Unknown error"
                }
              }, []);
            });
          }
        }
        call(λ018cc82d5039, λ1fad1172821a, λ0eb3f3a3335f = []) {
          let λ5b6067ee15e0 = this.counter++;
          return new Promise((λc99763f7f345, λ3167b466ee2b) => {
            this.promiseCallbacks.set(λ5b6067ee15e0, {
              resolve: λc99763f7f345,
              reject: λ3167b466ee2b
            }), this.sendRaw({
              [this.id]: {
                $type: "request",
                $method: λ018cc82d5039,
                $args: λ1fad1172821a,
                $token: λ5b6067ee15e0
              }
            }, λ0eb3f3a3335f);
          });
        }
      }
    },
    986(λ018cc82d5039) {
      let λ1fad1172821a = Object.getPrototypeOf({});
      function r() {
        return function(λ018cc82d5039) {
          return "object" == typeof λ018cc82d5039 && null !== λ018cc82d5039 && !(λ018cc82d5039 instanceof RegExp) && !(λ018cc82d5039 instanceof Date);
        };
      }
      function o(λ018cc82d5039) {
        function o(λ018cc82d5039) {
          return "constructor" !== λ018cc82d5039 && "prototype" !== λ018cc82d5039 && "__proto__" !== λ018cc82d5039;
        }
        let λ0eb3f3a3335f = Object.prototype.propertyIsEnumerable, λ5b6067ee15e0 = λ018cc82d5039?.symbols ? function(λ018cc82d5039) {
          let λ1fad1172821a = Object.keys(λ018cc82d5039), λ5b6067ee15e0 = Object.getOwnPropertySymbols(λ018cc82d5039);
          for (let λc99763f7f345 = 0, λ3167b466ee2b = λ5b6067ee15e0.length; λc99763f7f345 < λ3167b466ee2b; ++λc99763f7f345) λ0eb3f3a3335f.call(λ018cc82d5039, λ5b6067ee15e0[λc99763f7f345]) && λ1fad1172821a.push(λ5b6067ee15e0[λc99763f7f345]);
          return λ1fad1172821a;
        } : Object.keys, λc99763f7f345 = "function" == typeof λ018cc82d5039?.cloneProtoObject ? λ018cc82d5039.cloneProtoObject : void 0, λ3167b466ee2b = "function" == typeof λ018cc82d5039?.isMergeableObject ? λ018cc82d5039.isMergeableObject : r(), λ392fb66825eb = λ018cc82d5039?.onlyDefinedProperties === !0, λf80eaa39d12b = λ018cc82d5039 && "function" == typeof λ018cc82d5039.mergeArray ? λ018cc82d5039.mergeArray({
          clone: d,
          deepmerge: h,
          getKeys: λ5b6067ee15e0,
          isMergeableObject: λ3167b466ee2b
        }) : function(λ018cc82d5039, λ1fad1172821a) {
          let λ0eb3f3a3335f = λ018cc82d5039.length, λ5b6067ee15e0 = λ1fad1172821a.length, λc99763f7f345 = 0, λ3167b466ee2b = Array(λ0eb3f3a3335f + λ5b6067ee15e0);
          for (;λc99763f7f345 < λ0eb3f3a3335f; ++λc99763f7f345) λ3167b466ee2b[λc99763f7f345] = d(λ018cc82d5039[λc99763f7f345]);
          for (λc99763f7f345 = 0; λc99763f7f345 < λ5b6067ee15e0; ++λc99763f7f345) λ3167b466ee2b[λc99763f7f345 + λ0eb3f3a3335f] = d(λ1fad1172821a[λc99763f7f345]);
          return λ3167b466ee2b;
        };
        function d(λ018cc82d5039) {
          return λ3167b466ee2b(λ018cc82d5039) ? Array.isArray(λ018cc82d5039) ? function(λ018cc82d5039) {
            let λ1fad1172821a = 0, λ0eb3f3a3335f = λ018cc82d5039.length, λ5b6067ee15e0 = Array(λ0eb3f3a3335f);
            for (;λ1fad1172821a < λ0eb3f3a3335f; ++λ1fad1172821a) λ5b6067ee15e0[λ1fad1172821a] = d(λ018cc82d5039[λ1fad1172821a]);
            return λ5b6067ee15e0;
          }(λ018cc82d5039) : function(λ018cc82d5039) {
            let λ0eb3f3a3335f, λ3167b466ee2b, λ392fb66825eb, λf80eaa39d12b = {};
            if (λc99763f7f345 && Object.getPrototypeOf(λ018cc82d5039) !== λ1fad1172821a) return λc99763f7f345(λ018cc82d5039);
            let λ9c335b3ffead = λ5b6067ee15e0(λ018cc82d5039);
            for (λ0eb3f3a3335f = 0, λ3167b466ee2b = λ9c335b3ffead.length; λ0eb3f3a3335f < λ3167b466ee2b; ++λ0eb3f3a3335f) o(λ392fb66825eb = λ9c335b3ffead[λ0eb3f3a3335f]) && (λf80eaa39d12b[λ392fb66825eb] = d(λ018cc82d5039[λ392fb66825eb]));
            return λf80eaa39d12b;
          }(λ018cc82d5039) : λ018cc82d5039;
        }
        function h(λ018cc82d5039, λ0eb3f3a3335f) {
          if (λ392fb66825eb && void 0 === λ0eb3f3a3335f) return d(λ018cc82d5039);
          let λ9c335b3ffead = Array.isArray(λ0eb3f3a3335f), λe9eb4d603376 = Array.isArray(λ018cc82d5039);
          return "object" != typeof λ0eb3f3a3335f || null === λ0eb3f3a3335f ? λ0eb3f3a3335f : λ3167b466ee2b(λ018cc82d5039) ? λ9c335b3ffead && λe9eb4d603376 ? λf80eaa39d12b(λ018cc82d5039, λ0eb3f3a3335f) : λ9c335b3ffead !== λe9eb4d603376 ? d(λ0eb3f3a3335f) : function(λ018cc82d5039, λ0eb3f3a3335f) {
            let λf80eaa39d12b, λ9c335b3ffead, λe9eb4d603376, λ9ce4bd6d777d = {}, λcfc1662766ed = λ5b6067ee15e0(λ018cc82d5039), λ71e9e728d1dc = λ5b6067ee15e0(λ0eb3f3a3335f);
            for (λf80eaa39d12b = 0, λ9c335b3ffead = λcfc1662766ed.length; λf80eaa39d12b < λ9c335b3ffead; ++λf80eaa39d12b) o(λe9eb4d603376 = λcfc1662766ed[λf80eaa39d12b]) && -1 === λ71e9e728d1dc.indexOf(λe9eb4d603376) && (λ9ce4bd6d777d[λe9eb4d603376] = d(λ018cc82d5039[λe9eb4d603376]));
            for (λf80eaa39d12b = 0, λ9c335b3ffead = λ71e9e728d1dc.length; λf80eaa39d12b < λ9c335b3ffead; ++λf80eaa39d12b) if (o(λe9eb4d603376 = λ71e9e728d1dc[λf80eaa39d12b])) if (λe9eb4d603376 in λ018cc82d5039) -1 !== λcfc1662766ed.indexOf(λe9eb4d603376) && (λc99763f7f345 && λ3167b466ee2b(λ0eb3f3a3335f[λe9eb4d603376]) && Object.getPrototypeOf(λ0eb3f3a3335f[λe9eb4d603376]) !== λ1fad1172821a ? λ9ce4bd6d777d[λe9eb4d603376] = λc99763f7f345(λ0eb3f3a3335f[λe9eb4d603376]) : λ9ce4bd6d777d[λe9eb4d603376] = h(λ018cc82d5039[λe9eb4d603376], λ0eb3f3a3335f[λe9eb4d603376])); else {
              if (λ392fb66825eb && void 0 === λ0eb3f3a3335f[λe9eb4d603376]) continue;
              λ9ce4bd6d777d[λe9eb4d603376] = d(λ0eb3f3a3335f[λe9eb4d603376]);
            }
            return λ9ce4bd6d777d;
          }(λ018cc82d5039, λ0eb3f3a3335f) : d(λ0eb3f3a3335f);
        }
        return λ018cc82d5039?.all ? function() {
          let λ018cc82d5039;
          switch (arguments.length) {
           case 0:
            return {};

           case 1:
            return d(arguments[0]);

           case 2:
            return h(arguments[0], arguments[1]);
          }
          for (let λ1fad1172821a = 0, λ0eb3f3a3335f = arguments.length; λ1fad1172821a < λ0eb3f3a3335f; ++λ1fad1172821a) λ018cc82d5039 = h(λ018cc82d5039, arguments[λ1fad1172821a]);
          return λ018cc82d5039;
        } : h;
      }
      λ018cc82d5039.exports = o, λ018cc82d5039.exports.default = o, λ018cc82d5039.exports.deepmerge = o, 
      Object.defineProperty(λ018cc82d5039.exports, "isMergeableObject", {
        get: r
      });
    },
    235(λ018cc82d5039, λ1fad1172821a, λ0eb3f3a3335f) {
      λ0eb3f3a3335f.d(λ1fad1172821a, {
        Sr: () => s
      }), WebSocket.CLOSED, WebSocket.CONNECTING, WebSocket.OPEN, EventTarget;
      let λ5b6067ee15e0 = [ 101, 204, 205, 304 ];
      class s extends Response {
        url;
        rawHeaders;
        redirected=!1;
        static fromTransferrableResponse(λ018cc82d5039, λ1fad1172821a) {
          let λ0eb3f3a3335f = new s(λ5b6067ee15e0.includes(λ018cc82d5039.status) ? void 0 : λ018cc82d5039.body, {
            headers: new Headers(λ018cc82d5039.headers),
            status: λ018cc82d5039.status,
            statusText: λ018cc82d5039.statusText
          });
          return λ0eb3f3a3335f.url = λ1fad1172821a, λ0eb3f3a3335f.redirected = λ018cc82d5039.status >= 300 && λ018cc82d5039.status < 400 && void 0 !== λ018cc82d5039.headers.location, 
          λ0eb3f3a3335f.rawHeaders = λ018cc82d5039.headers, λ0eb3f3a3335f;
        }
        static fromNativeResponse(λ018cc82d5039) {
          let λ1fad1172821a = new s(λ5b6067ee15e0.includes(λ018cc82d5039.status) ? void 0 : λ018cc82d5039.body, {
            headers: λ018cc82d5039.headers,
            status: λ018cc82d5039.status,
            statusText: λ018cc82d5039.statusText
          });
          return λ1fad1172821a.url = λ018cc82d5039.url, λ1fad1172821a.rawHeaders = [ ...λ018cc82d5039.headers ], 
          λ1fad1172821a.redirected = λ018cc82d5039.redirected, λ1fad1172821a;
        }
      }
    },
    423(λ018cc82d5039, λ1fad1172821a, λ0eb3f3a3335f) {
      λ0eb3f3a3335f.d(λ1fad1172821a, {
        Cx: () => λe1abd2a8b9b4,
        Oy: () => λ282761525837,
        cP: () => λc99763f7f345,
        ht: () => λ63d0cf727155,
        k_: () => λ392fb66825eb,
        mK: () => λ9ce4bd6d777d,
        sb: () => λfb52d423cf43,
        uh: () => λ71e9e728d1dc
      });
      let {BareResponse: λ5b6067ee15e0, CookieJar: λc99763f7f345, IncrementalHtmlRewriter: λ3167b466ee2b, Plugin: λ392fb66825eb, STUDYJETCLIENT: λf80eaa39d12b, STUDYJETCLIENTNAME: λ9c335b3ffead, StudyJetClient: λe9eb4d603376, StudyJetFetchHandler: λ9ce4bd6d777d, StudyJetFetchTrackedClient: λcfc1662766ed, StudyJetHeaders: λ71e9e728d1dc, Tap: λe1abd2a8b9b4, createLocationProxy: λ3b5591687b69, defaultConfig: λfb52d423cf43, defaultConfigDev: λe976a2c0e401, flagEnabled: λ3245c54dff52, getOwnPropertyDescriptorHandler: λf4be033ab48b, getRewriter: λe05e3e57a6a8, getScriptBlockTypeString: λde52c4516fe2, htmlRules: λ26f1a998b666, isArchiveMimeType: λ76b0e4daa65e, isAudioOrVideoMimeType: λ5c13f29bf0d0, isFontMimeType: λadb05813aa14, isHtmlMimeType: λ6cdb7650b5e5, isImageMimeType: λ3105e13c9834, isInlineDisplayableMimeType: λadd6f8fbc3e5, isJavascriptMimeType: λc5cafbbcc756, isJavascriptMimeTypeEssenceMatch: λ750d1605a267, isModuleScriptType: λ451f1fdc66f6, isScriptType: λ76ba15a79f5e, isScriptableMimeType: λ93b5762d0619, isXmlMimeType: λ0b499c3ba701, isZipBasedMimeType: λdf369708d706, isdedicated: λ91589df3d32d, isshared: λ614d52f59eaa, issw: λcbf10e1e69a7, iswindow: λc96927508c43, isworker: λ29b51a7603d1, parseMimeType: λf4929ceb253c, rewriteBlob: λb6a17bcf1bca, rewriteCss: λac9b3bfd9cc3, rewriteHtml: λ4387792b23ee, rewriteJs: λa4ca3a5b2b7b, rewriteJsInner: λbddbaa7c398a, rewriteSrcset: λ6b3a9c2000b5, rewriteUrl: λ282761525837, rewriteWorkers: λ7a42a0e5db0f, setWasm: λ63d0cf727155, unrewriteBlob: λ3066507c6479, unrewriteCss: λb6e37f867075, unrewriteHtml: λe4a2730ca80d, unrewriteUrl: λc864ca9cb242, versionInfo: λ6da34e1b8998} = globalThis.$studyjet;
    }
  }, λ1fad1172821a = {};
  function r(λ0eb3f3a3335f) {
    var λ5b6067ee15e0 = λ1fad1172821a[λ0eb3f3a3335f];
    if (void 0 !== λ5b6067ee15e0) return λ5b6067ee15e0.exports;
    var λc99763f7f345 = λ1fad1172821a[λ0eb3f3a3335f] = {
      exports: {}
    };
    return λ018cc82d5039[λ0eb3f3a3335f](λc99763f7f345, λc99763f7f345.exports, r), λc99763f7f345.exports;
  }
  r.n = λ018cc82d5039 => {
    var λ1fad1172821a = λ018cc82d5039 && λ018cc82d5039.__esModule ? () => λ018cc82d5039.default : () => λ018cc82d5039;
    return r.d(λ1fad1172821a, {
      a: λ1fad1172821a
    }), λ1fad1172821a;
  }, r.d = (λ018cc82d5039, λ1fad1172821a) => {
    for (var λ0eb3f3a3335f in λ1fad1172821a) r.o(λ1fad1172821a, λ0eb3f3a3335f) && !r.o(λ018cc82d5039, λ0eb3f3a3335f) && Object.defineProperty(λ018cc82d5039, λ0eb3f3a3335f, {
      enumerable: !0,
      get: λ1fad1172821a[λ0eb3f3a3335f]
    });
  }, r.o = (λ018cc82d5039, λ1fad1172821a) => Object.prototype.hasOwnProperty.call(λ018cc82d5039, λ1fad1172821a), 
  r.r = λ018cc82d5039 => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λ018cc82d5039, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(λ018cc82d5039, "__esModule", {
      value: !0
    });
  };
  var λ0eb3f3a3335f = {};
  (() => {
    r.r(λ0eb3f3a3335f), r.d(λ0eb3f3a3335f, {
      Controller: () => S,
      Frame: () => v,
      ManagedPlugin: () => d,
      VERSION: () => λ392fb66825eb.x,
      assertRuntimeStudyJetVersion: () => λ392fb66825eb.O,
      config: () => λf80eaa39d12b
    });
    var λ018cc82d5039 = r(805), λ1fad1172821a = r(235), λ5b6067ee15e0 = r(986), λc99763f7f345 = r(423), λ3167b466ee2b = r(286), λ392fb66825eb = r(355);
    let λf80eaa39d12b = {
      prefix: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/study/",
      studyjetPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/studyjet/@r69c18f9bd4ed175c9ea505b8!.js",
      injectPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/controller/@r9e855ac82edc4b51e1340564!.js",
      wasmPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/studyjet/@r55286cfe09d741023cc3e1d6!.wasm",
      virtualWasmPath: "studyjet.wasm.js",
      codec: {
        encode: λ018cc82d5039 => λ018cc82d5039 ? encodeURIComponent(λ018cc82d5039) : λ018cc82d5039,
        decode: λ018cc82d5039 => λ018cc82d5039 ? decodeURIComponent(λ018cc82d5039) : λ018cc82d5039
      }
    }, λ9c335b3ffead = {
      flags: {
        ...λc99763f7f345.sb.flags,
        allowFailedIntercepts: !0
      },
      maskedfiles: [ "inject.js", "studyjet.wasm.js" ]
    };
    class d extends λc99763f7f345.k_ {
      frame=null;
      dependencies=[];
      constructor(λ018cc82d5039, λ1fad1172821a) {
        super(λ018cc82d5039), this.dependencies = λ1fad1172821a;
      }
      install(λ018cc82d5039) {
        this.frame = λ018cc82d5039;
      }
    }
    let λe9eb4d603376 = "state", λ9ce4bd6d777d = "cookies", λcfc1662766ed = null;
    function u(λ018cc82d5039) {
      return "object" == typeof λ018cc82d5039 && null !== λ018cc82d5039 && "number" == typeof λ018cc82d5039.updatedAt && Number.isFinite(λ018cc82d5039.updatedAt) && "string" == typeof λ018cc82d5039.cookies ? λ018cc82d5039 : null;
    }
    function y(λ018cc82d5039) {
      return new Promise((λ1fad1172821a, λ0eb3f3a3335f) => {
        λ018cc82d5039.onsuccess = () => λ1fad1172821a(λ018cc82d5039.result), λ018cc82d5039.onerror = () => λ0eb3f3a3335f(λ018cc82d5039.error ?? Error("IndexedDB request failed"));
      });
    }
    function m(λ018cc82d5039) {
      return new Promise((λ1fad1172821a, λ0eb3f3a3335f) => {
        λ018cc82d5039.oncomplete = () => λ1fad1172821a(), λ018cc82d5039.onabort = () => λ0eb3f3a3335f(λ018cc82d5039.error ?? Error("IndexedDB transaction aborted")), 
        λ018cc82d5039.onerror = () => λ0eb3f3a3335f(λ018cc82d5039.error ?? Error("IndexedDB transaction failed"));
      });
    }
    function g() {
      return λcfc1662766ed || (λcfc1662766ed = new Promise((λ018cc82d5039, λ1fad1172821a) => {
        let λ0eb3f3a3335f = indexedDB.open("@d941bc65af3", 1);
        λ0eb3f3a3335f.onupgradeneeded = () => {
          let λ018cc82d5039 = λ0eb3f3a3335f.result;
          λ018cc82d5039.objectStoreNames.contains(λe9eb4d603376) || λ018cc82d5039.createObjectStore(λe9eb4d603376);
        }, λ0eb3f3a3335f.onsuccess = () => λ018cc82d5039(λ0eb3f3a3335f.result), λ0eb3f3a3335f.onerror = () => λ1fad1172821a(λ0eb3f3a3335f.error ?? Error("Failed to open cookie database"));
      }));
    }
    async function w() {
      try {
        let λ018cc82d5039 = (await g()).transaction(λe9eb4d603376, "readonly"), λ1fad1172821a = λ018cc82d5039.objectStore(λe9eb4d603376), λ0eb3f3a3335f = await y(λ1fad1172821a.get(λ9ce4bd6d777d));
        return await m(λ018cc82d5039), u(λ0eb3f3a3335f);
      } catch (λ018cc82d5039) {
        return console.error("Failed to read persisted controller cookies:", λ018cc82d5039), 
        null;
      }
    }
    async function k(λ018cc82d5039, λ1fad1172821a) {
      try {
        let λ0eb3f3a3335f = (await g()).transaction(λe9eb4d603376, "readwrite"), λ5b6067ee15e0 = λ0eb3f3a3335f.objectStore(λe9eb4d603376), λc99763f7f345 = u(await y(λ5b6067ee15e0.get(λ9ce4bd6d777d))), λ3167b466ee2b = Math.max(Date.now(), λ1fad1172821a + 1, (λc99763f7f345?.updatedAt ?? 0) + 1);
        return λ5b6067ee15e0.put({
          updatedAt: λ3167b466ee2b,
          cookies: λ018cc82d5039
        }, λ9ce4bd6d777d), await m(λ0eb3f3a3335f), λ3167b466ee2b;
      } catch (λ018cc82d5039) {
        return console.error("Failed to persist controller cookies:", λ018cc82d5039), λ1fad1172821a;
      }
    }
    function b() {
      return Math.random().toString(36).substring(2, 10);
    }
    let λ71e9e728d1dc = (0, λ5b6067ee15e0.deepmerge)();
    class S {
      init;
      id;
      config;
      studyjetConfig;
      prefix;
      cookieJar=new λc99763f7f345.cP;
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
      onTabChannelMessage=λ018cc82d5039 => {
        this.rpc.recieve(λ018cc82d5039.data);
      };
      onCookieSyncMessage=λ018cc82d5039 => {
        let λ1fad1172821a = "object" == typeof λ018cc82d5039.data && null !== λ018cc82d5039.data ? λ018cc82d5039.data.updatedAt : void 0;
        "number" != typeof λ1fad1172821a || λ1fad1172821a <= this.cookieUpdatedAt || (this.cookieSyncDirty = !0, 
        this.loadSavedCookies());
      };
      async loadStudyJetWasm() {
        if (this.wasmAlreadyFetched) return;
        let λ018cc82d5039 = await fetch(this.config.wasmPath);
        (0, λc99763f7f345.ht)(await λ018cc82d5039.arrayBuffer()), this.wasmAlreadyFetched = !0;
      }
      methods={
        ready: async () => {
          this.readyResolve(), setTimeout(() => {
            this.guardServiceWorkerRevive = !1;
          }, 5e3);
        },
        request: async λ018cc82d5039 => {
          let λ1fad1172821a = new URL(λ018cc82d5039.rawUrl).pathname, λ0eb3f3a3335f = this.frames.find(λ018cc82d5039 => λ1fad1172821a.startsWith(λ018cc82d5039.prefix));
          if (!λ0eb3f3a3335f) throw Error("No frame found for request");
          try {
            if (await this.loadSavedCookies(), λ1fad1172821a === λ0eb3f3a3335f.prefix + this.config.virtualWasmPath) {
              if (!this.wasmPayload) {
                let λ018cc82d5039 = await fetch(this.config.wasmPath), λ1fad1172821a = await λ018cc82d5039.arrayBuffer(), λ0eb3f3a3335f = btoa(new Uint8Array(λ1fad1172821a).reduce((λ018cc82d5039, λ1fad1172821a) => (λ018cc82d5039.push(String.fromCharCode(λ1fad1172821a)), 
                λ018cc82d5039), []).join(""));
                this.wasmPayload = `self.WASM = '${λ0eb3f3a3335f}';`;
              }
              return [ {
                body: this.wasmPayload,
                status: 200,
                statusText: "OK",
                headers: [ [ "Content-Type", "application/javascript" ] ]
              }, [] ];
            }
            let λ5b6067ee15e0 = λc99763f7f345.uh.fromRawHeaders(λ018cc82d5039.initialHeaders), λ3167b466ee2b = await λ0eb3f3a3335f.fetchHandler.handleFetch({
              initialHeaders: λ5b6067ee15e0,
              rawClientUrl: λ018cc82d5039.rawClientUrl ? new URL(λ018cc82d5039.rawClientUrl) : void 0,
              rawUrl: new URL(λ018cc82d5039.rawUrl),
              rawReferrer: λ018cc82d5039.rawReferrer,
              rawDestination: λ018cc82d5039.destination,
              method: λ018cc82d5039.method,
              mode: λ018cc82d5039.mode,
              referrer: λ018cc82d5039.referrer,
              body: λ018cc82d5039.body,
              cache: λ018cc82d5039.cache,
              clientId: λ018cc82d5039.clientId
            });
            return [ {
              body: λ3167b466ee2b.body,
              status: λ3167b466ee2b.status,
              statusText: λ3167b466ee2b.statusText,
              headers: λ3167b466ee2b.headers.toRawHeaders()
            }, λ3167b466ee2b.body instanceof ReadableStream || λ3167b466ee2b.body instanceof ArrayBuffer ? [ λ3167b466ee2b.body ] : [] ];
          } catch (λ1fad1172821a) {
            let λ5b6067ee15e0 = {
              setResponse: void 0,
              suppressError: !1
            };
            if (await λc99763f7f345.Cx.dispatch(λ0eb3f3a3335f.hooks.error.request, {
              rawrequest: λ018cc82d5039,
              error: λ1fad1172821a
            }, λ5b6067ee15e0), λ5b6067ee15e0.suppressError || console.error("Error in controller request handler:", λ1fad1172821a), 
            λ5b6067ee15e0.setResponse) return [ λ5b6067ee15e0.setResponse, [] ];
            throw λ1fad1172821a;
          }
        },
        initRemoteTransport: async λ1fad1172821a => {
          let λ0eb3f3a3335f = new λ018cc82d5039.C({
            request: async ({remote: λ018cc82d5039, method: λ1fad1172821a, body: λ0eb3f3a3335f, headers: λ5b6067ee15e0}) => {
              let λc99763f7f345 = await this.transport.request(new URL(λ018cc82d5039), λ1fad1172821a, λ0eb3f3a3335f, λ5b6067ee15e0, void 0);
              return [ λc99763f7f345, [ λc99763f7f345.body ] ];
            },
            sendSetCookie: async ({cookies: λ018cc82d5039, options: λ1fad1172821a}) => {
              await this.loadSavedCookies(!0), λ1fad1172821a?.clear && this.cookieJar.clear(), 
              this.applyCookieSyncEntries(λ018cc82d5039), await this.persistCookies(), await this.propagateCookieSync(λ018cc82d5039, λ1fad1172821a);
            },
            connect: async ({url: λ018cc82d5039, protocols: λ1fad1172821a, requestHeaders: λ0eb3f3a3335f, port: λ5b6067ee15e0}) => {
              let λc99763f7f345, λ3167b466ee2b = new Promise(λ018cc82d5039 => λc99763f7f345 = λ018cc82d5039), [λ392fb66825eb, λf80eaa39d12b] = this.transport.connect(new URL(λ018cc82d5039), λ1fad1172821a, λ0eb3f3a3335f, (λ018cc82d5039, λ1fad1172821a) => {
                λc99763f7f345({
                  result: "success",
                  protocol: λ018cc82d5039,
                  extensions: λ1fad1172821a
                });
              }, λ018cc82d5039 => {
                λ5b6067ee15e0.postMessage({
                  type: "data",
                  data: λ018cc82d5039
                }, λ018cc82d5039 instanceof ArrayBuffer ? [ λ018cc82d5039 ] : []);
              }, (λ018cc82d5039, λ1fad1172821a) => {
                λ5b6067ee15e0.postMessage({
                  type: "close",
                  code: λ018cc82d5039,
                  reason: λ1fad1172821a
                });
              }, λ018cc82d5039 => {
                λc99763f7f345({
                  result: "failure",
                  error: λ018cc82d5039
                });
              });
              return λ5b6067ee15e0.onmessageerror = λ018cc82d5039 => {
                console.error("Transport port messageerror (this should never happen!)", λ018cc82d5039);
              }, λ5b6067ee15e0.onmessage = ({data: λ018cc82d5039}) => {
                "data" === λ018cc82d5039.type ? λ392fb66825eb(λ018cc82d5039.data) : "close" === λ018cc82d5039.type && λf80eaa39d12b(λ018cc82d5039.code, λ018cc82d5039.reason);
              }, [ await λ3167b466ee2b, [] ];
            }
          }, "transport", (λ018cc82d5039, λ0eb3f3a3335f) => λ1fad1172821a.postMessage(λ018cc82d5039, λ0eb3f3a3335f));
          λ1fad1172821a.onmessageerror = λ018cc82d5039 => {
            console.error("Transport port messageerror (this should never happen!)", λ018cc82d5039);
          }, λ1fad1172821a.onmessage = λ018cc82d5039 => {
            λ0eb3f3a3335f.recieve(λ018cc82d5039.data);
          }, λ0eb3f3a3335f.call("ready", void 0, []);
        }
      };
      constructor(λ1fad1172821a) {
        this.init = λ1fad1172821a, (0, λ392fb66825eb.O)(), this.id = b(), this.config = λ71e9e728d1dc(λf80eaa39d12b, λ1fad1172821a.config || {}), 
        this.studyjetConfig = λ71e9e728d1dc(λ9c335b3ffead, λc99763f7f345.sb), this.studyjetConfig = λ71e9e728d1dc(this.studyjetConfig, λ1fad1172821a.studyjetConfig || {}), 
        this.prefix = this.config.prefix + this.id + "/", this.serviceWorkerController = λ1fad1172821a.serviceworker, 
        this.ready = Promise.all([ new Promise(λ018cc82d5039 => {
          this.readyResolve = λ018cc82d5039;
        }), this.loadStudyJetWasm(), this.loadSavedCookies(!0) ]).then(() => void 0), this.rpc = new λ018cc82d5039.C(this.methods, "tabchannel-" + this.id, (λ018cc82d5039, λ1fad1172821a) => {
          if (!this.port) throw Error("Port not found");
          this.port.postMessage(λ018cc82d5039, λ1fad1172821a);
        }), this.transport = λ1fad1172821a.transport, this.cookieSyncChannel.addEventListener("message", this.onCookieSyncMessage), 
        this.setupMessagePort(), navigator.serviceWorker.addEventListener("message", λ018cc82d5039 => {
          if (λ018cc82d5039.data?.$controller$setCookie && "object" == typeof λ018cc82d5039.data.$controller$setCookie) {
            let λ1fad1172821a = λ018cc82d5039.data.$controller$setCookie;
            if (λ1fad1172821a.controllerId && λ1fad1172821a.controllerId !== this.id) return;
            λ1fad1172821a.options?.clear && this.cookieJar.clear(), this.applyCookieSyncEntries(λ1fad1172821a.cookies), 
            "string" == typeof λ1fad1172821a.id && this.serviceWorkerController.postMessage({
              $sw$setCookieDone: {
                id: λ1fad1172821a.id
              }
            });
            return;
          }
          if (λ018cc82d5039.data.$controller$swrevive) {
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
        let λ018cc82d5039 = new MessageChannel;
        this.port = λ018cc82d5039.port1, this.port.addEventListener("message", this.onTabChannelMessage), 
        this.port.start(), this.serviceWorkerController.postMessage({
          $controller$init: {
            prefix: this.prefix,
            id: this.id
          }
        }, [ λ018cc82d5039.port2 ]);
      }
      applyCookieSyncEntries(λ018cc82d5039) {
        if (Array.isArray(λ018cc82d5039)) for (let λ1fad1172821a of λ018cc82d5039) "string" == typeof λ1fad1172821a?.url && "string" == typeof λ1fad1172821a.cookie && this.cookieJar.setCookies(λ1fad1172821a.cookie, new URL(λ1fad1172821a.url));
      }
      async propagateCookieSync(λ018cc82d5039, λ1fad1172821a = {}) {
        this.port && await this.rpc.call("sendSetCookie", {
          cookies: λ018cc82d5039,
          options: λ1fad1172821a
        });
      }
      async loadSavedCookies(λ018cc82d5039 = !1) {
        if (λ018cc82d5039 || this.cookieSyncDirty) return this.cookieSyncPromise || (this.cookieSyncPromise = (async () => {
          let λ018cc82d5039 = await w();
          λ018cc82d5039 && λ018cc82d5039.updatedAt > this.cookieUpdatedAt && (this.cookieJar.load(λ018cc82d5039.cookies), 
          this.cookieUpdatedAt = λ018cc82d5039.updatedAt), this.cookieSyncDirty = !1;
        })().finally(() => {
          this.cookieSyncPromise = null;
        })), this.cookieSyncPromise;
      }
      async persistCookies() {
        let λ018cc82d5039 = await k(this.cookieJar.dump(), this.cookieUpdatedAt);
        λ018cc82d5039 <= this.cookieUpdatedAt || (this.cookieUpdatedAt = λ018cc82d5039, 
        this.cookieSyncDirty = !1, this.cookieSyncChannel.postMessage({
          updatedAt: λ018cc82d5039
        }));
      }
      setTransport(λ018cc82d5039) {
        for (let λ1fad1172821a of (this.transport = λ018cc82d5039, this.frames)) λ1fad1172821a.controller.transport = λ018cc82d5039, 
        λ1fad1172821a.fetchHandler.client.transport = λ018cc82d5039;
      }
      createFrame(λ018cc82d5039, λ1fad1172821a = {}) {
        if (!this.ready) throw Error("Controller is not ready! Try awaiting controller.wait()");
        let λ0eb3f3a3335f = new v(this, λ018cc82d5039 ??= document.createElement("iframe"), λ1fad1172821a);
        return this.frames.push(λ0eb3f3a3335f), λ0eb3f3a3335f;
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
            getInjectScripts: function e(λ018cc82d5039, λ1fad1172821a, λ0eb3f3a3335f, λ5b6067ee15e0, λc99763f7f345, λ3167b466ee2b) {
              return (λ392fb66825eb, λf80eaa39d12b, λ9c335b3ffead, λe9eb4d603376) => {
                var λ9ce4bd6d777d;
                return [ λe9eb4d603376(λ018cc82d5039.studyjetPath), λe9eb4d603376(λ0eb3f3a3335f.href + λ018cc82d5039.virtualWasmPath), λe9eb4d603376(λ018cc82d5039.injectPath), λe9eb4d603376("data:text/javascript;charset=utf-8;base64," + (λ9ce4bd6d777d = `\n\t\t\t\t\tdocument.querySelectorAll("script[studyjet-injected]").forEach(script => script.remove());\n\t\t\t\t\t$studyjetController.load({\n\t\t\t\t\t\tconfig: ${JSON.stringify(λ018cc82d5039)},\n\t\t\t\t\t\tsjconfig: ${JSON.stringify(λ1fad1172821a)},\n\t\t\t\t\t\tprefix: new URL("${λ0eb3f3a3335f.href}"),\n\t\t\t\t\t\tcookies: ${JSON.stringify(λ5b6067ee15e0.dump())},\n\t\t\t\t\t\tyieldGetInjectScripts: ${e.toString()},\n\t\t\t\t\t\tcodecEncode: ${λc99763f7f345.toString()},\n\t\t\t\t\t\tcodecDecode: ${λ3167b466ee2b.toString()},\n\t\t\t\t\t\tinitHeaders: ${JSON.stringify(λ9c335b3ffead.headers ?? [])},\n\t\t\t\t\t\thistory: ${JSON.stringify(λ9c335b3ffead.history ?? [])},\n\t\t\t\t\t})\n\t\t\t\t`, 
                btoa((new TextEncoder).encode(λ9ce4bd6d777d).reduce((λ018cc82d5039, λ1fad1172821a) => (λ018cc82d5039.push(String.fromCharCode(λ1fad1172821a)), 
                λ018cc82d5039), []).join("")))) ];
              };
            }(this.controller.config, this.controller.studyjetConfig, new URL(this.prefix, location.href), this.controller.cookieJar, this.controller.config.codec.encode, this.controller.config.codec.decode),
            getWorkerInjectScripts: (λ018cc82d5039, λ1fad1172821a, λ0eb3f3a3335f) => {
              var λ5b6067ee15e0;
              let λc99763f7f345 = "";
              return λc99763f7f345 += λ0eb3f3a3335f(this.controller.config.studyjetPath), λc99763f7f345 += λ0eb3f3a3335f(this.prefix + this.controller.config.virtualWasmPath), 
              λc99763f7f345 += λ0eb3f3a3335f("data:text/javascript;charset=utf-8;base64," + (λ5b6067ee15e0 = `\n\t\t\t\t\t(()=>{\n\t\t\t\t\t\tconst { StudyJetClient, CookieJar, setWasm } = $studyjet;\n\n\t\t\t\t\t\tsetWasm(Uint8Array.from(atob(self.WASM), (c) => c.charCodeAt(0)));\n\t\t\t\t\t\tdelete self.WASM;\n\n\t\t\t\t\t\tconst sjconfig = ${JSON.stringify(this.controller.studyjetConfig)};\n\t\t\t\t\t\tconst prefix = new URL("${this.prefix}", location.href);\n\n\t\t\t\t\t\tconst context = {\n\t\t\t\t\t\t\tconfig: sjconfig,\n\t\t\t\t\t\t\tprefix,\n\t\t\t\t\t\t\tinterface: {\n\t\t\t\t\t\t\t\tcodecEncode: ${this.controller.config.codec.encode.toString()},\n\t\t\t\t\t\t\t\tcodecDecode: ${this.controller.config.codec.decode.toString()},\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t};\n\n\t\t\t\t\t\tconst client = new StudyJetClient(globalThis, {\n\t\t\t\t\t\t\tcontext,\n\t\t\t\t\t\t\ttransport: null,\n\t\t\t\t\t\t});\n\n\t\t\t\t\t\tclient.hook();\n\t\t\t\t\t})();\n\t\t\t\t\t`, 
              btoa((new TextEncoder).encode(λ5b6067ee15e0).reduce((λ018cc82d5039, λ1fad1172821a) => (λ018cc82d5039.push(String.fromCharCode(λ1fad1172821a)), 
              λ018cc82d5039), []).join(""))));
            },
            codecEncode: this.controller.config.codec.encode,
            codecDecode: this.controller.config.codec.decode
          }
        };
      }
      plugins=[];
      constructor(λ018cc82d5039, λ0eb3f3a3335f, λ5b6067ee15e0 = {}) {
        for (const λ392fb66825eb of (this.controller = λ018cc82d5039, this.element = λ0eb3f3a3335f, 
        this.options = λ5b6067ee15e0, this.id = b(), this.prefix = this.controller.prefix + this.id + "/", 
        this.fetchHandler = new λc99763f7f345.mK({
          crossOriginIsolated: self.crossOriginIsolated,
          context: this.context,
          transport: λ018cc82d5039.transport,
          async sendSetCookie(λ1fad1172821a, λ0eb3f3a3335f) {
            await λ018cc82d5039.persistCookies(), await λ018cc82d5039.propagateCookieSync(λ1fad1172821a.map(({url: λ018cc82d5039, cookie: λ1fad1172821a}) => ({
              url: λ018cc82d5039.href,
              cookie: λ1fad1172821a
            })), λ0eb3f3a3335f);
          },
          fetchBlobUrl: async λ018cc82d5039 => λ1fad1172821a.Sr.fromNativeResponse(await fetch(λ018cc82d5039)),
          fetchDataUrl: async λ018cc82d5039 => λ1fad1172821a.Sr.fromNativeResponse(await fetch(λ018cc82d5039))
        }), this.hooks = {
          fetch: this.fetchHandler.hooks.fetch,
          init: λc99763f7f345.Cx.create(),
          error: λc99763f7f345.Cx.create()
        }, λ0eb3f3a3335f[λ3167b466ee2b.I] = this, this.plugins = λ5b6067ee15e0.plugins ?? [], 
        this.plugins)) {
          for (const λ018cc82d5039 of λ392fb66825eb.dependencies) if (!this.plugins.find(λ1fad1172821a => λ1fad1172821a.name === λ018cc82d5039)) throw Error(`Dependency ${λ018cc82d5039} not found for plugin ${λ392fb66825eb.name}`);
          λ392fb66825eb.install(this);
        }
      }
      getPlugin(λ018cc82d5039) {
        let λ1fad1172821a = this.plugins.find(λ1fad1172821a => λ1fad1172821a.name === λ018cc82d5039);
        if (!λ1fad1172821a) throw Error(`Plugin ${λ018cc82d5039} not found`);
        return λ1fad1172821a;
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
      go(λ018cc82d5039) {
        let λ1fad1172821a = (0, λc99763f7f345.Oy)(λ018cc82d5039, this.context, {
          origin: new URL(location.href),
          base: new URL(location.href)
        });
        this.element.src = λ1fad1172821a;
      }
    }
  })(), $studyjetController = λ0eb3f3a3335f;
})();
