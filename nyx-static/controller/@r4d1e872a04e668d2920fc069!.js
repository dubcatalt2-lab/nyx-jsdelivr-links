var $studyjetController;

(() => {
  var λ1410fa02cd1e = {
    286(λ1410fa02cd1e, λ5dd05649068c, λe8552734159a) {
      λe8552734159a.d(λ5dd05649068c, {
        I: () => λ7cd9d40fd63d
      });
      let λ7cd9d40fd63d = Symbol.for("controller frame handle");
    },
    355(λ1410fa02cd1e, λ5dd05649068c, λe8552734159a) {
      λe8552734159a.d(λ5dd05649068c, {
        O: () => s,
        x: () => λ7cd9d40fd63d
      });
      let λ7cd9d40fd63d = "0.0.14";
      function s() {
        if ("undefined" == typeof $studyjet) throw Error("@mercuryworkshop/studyjet is not loaded. Load studyjet before the controller.");
        var λ1410fa02cd1e = "2.0.67-alpha.2", λ5dd05649068c = $studyjet.versionInfo.version;
        if (λ1410fa02cd1e !== λ5dd05649068c) throw Error(`@mercuryworkshop/studyjet version mismatch: this build expects ${λ1410fa02cd1e}, but the loaded runtime is ${λ5dd05649068c}`);
      }
    },
    805(λ1410fa02cd1e, λ5dd05649068c, λe8552734159a) {
      λe8552734159a.d(λ5dd05649068c, {
        C: () => o
      });
      class o {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λ1410fa02cd1e, λ5dd05649068c, λe8552734159a) {
          this.methods = λ1410fa02cd1e, this.id = λ5dd05649068c, this.sendRaw = λe8552734159a;
        }
        recieve(λ1410fa02cd1e) {
          if (null == λ1410fa02cd1e || "object" != typeof λ1410fa02cd1e) return;
          let λ5dd05649068c = λ1410fa02cd1e[this.id];
          if (null == λ5dd05649068c || "object" != typeof λ5dd05649068c) return;
          let λe8552734159a = λ5dd05649068c.$type;
          if ("response" === λe8552734159a) {
            let λ1410fa02cd1e = λ5dd05649068c.$token, λe8552734159a = λ5dd05649068c.$data, λ7cd9d40fd63d = λ5dd05649068c.$error, λc12e5151e5e3 = this.promiseCallbacks.get(λ1410fa02cd1e);
            if (!λc12e5151e5e3) return;
            this.promiseCallbacks.delete(λ1410fa02cd1e), void 0 !== λ7cd9d40fd63d ? λc12e5151e5e3.reject(Error(λ7cd9d40fd63d)) : λc12e5151e5e3.resolve(λe8552734159a);
          } else if ("request" === λe8552734159a) {
            let λ1410fa02cd1e = λ5dd05649068c.$method, λe8552734159a = λ5dd05649068c.$args;
            this.methods[λ1410fa02cd1e](λe8552734159a).then(λ1410fa02cd1e => {
              this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ5dd05649068c.$token,
                  $data: λ1410fa02cd1e?.[0]
                }
              }, λ1410fa02cd1e?.[1]);
            }).catch(λ1410fa02cd1e => {
              console.error(λ1410fa02cd1e), this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ5dd05649068c.$token,
                  $error: λ1410fa02cd1e?.toString() || "Unknown error"
                }
              }, []);
            });
          }
        }
        call(λ1410fa02cd1e, λ5dd05649068c, λe8552734159a = []) {
          let λ7cd9d40fd63d = this.counter++;
          return new Promise((λc12e5151e5e3, λ147b1ad37c3b) => {
            this.promiseCallbacks.set(λ7cd9d40fd63d, {
              resolve: λc12e5151e5e3,
              reject: λ147b1ad37c3b
            }), this.sendRaw({
              [this.id]: {
                $type: "request",
                $method: λ1410fa02cd1e,
                $args: λ5dd05649068c,
                $token: λ7cd9d40fd63d
              }
            }, λe8552734159a);
          });
        }
      }
    },
    986(λ1410fa02cd1e) {
      let λ5dd05649068c = Object.getPrototypeOf({});
      function r() {
        return function(λ1410fa02cd1e) {
          return "object" == typeof λ1410fa02cd1e && null !== λ1410fa02cd1e && !(λ1410fa02cd1e instanceof RegExp) && !(λ1410fa02cd1e instanceof Date);
        };
      }
      function o(λ1410fa02cd1e) {
        function o(λ1410fa02cd1e) {
          return "constructor" !== λ1410fa02cd1e && "prototype" !== λ1410fa02cd1e && "__proto__" !== λ1410fa02cd1e;
        }
        let λe8552734159a = Object.prototype.propertyIsEnumerable, λ7cd9d40fd63d = λ1410fa02cd1e?.symbols ? function(λ1410fa02cd1e) {
          let λ5dd05649068c = Object.keys(λ1410fa02cd1e), λ7cd9d40fd63d = Object.getOwnPropertySymbols(λ1410fa02cd1e);
          for (let λc12e5151e5e3 = 0, λ147b1ad37c3b = λ7cd9d40fd63d.length; λc12e5151e5e3 < λ147b1ad37c3b; ++λc12e5151e5e3) λe8552734159a.call(λ1410fa02cd1e, λ7cd9d40fd63d[λc12e5151e5e3]) && λ5dd05649068c.push(λ7cd9d40fd63d[λc12e5151e5e3]);
          return λ5dd05649068c;
        } : Object.keys, λc12e5151e5e3 = "function" == typeof λ1410fa02cd1e?.cloneProtoObject ? λ1410fa02cd1e.cloneProtoObject : void 0, λ147b1ad37c3b = "function" == typeof λ1410fa02cd1e?.isMergeableObject ? λ1410fa02cd1e.isMergeableObject : r(), λ031a7813dd53 = λ1410fa02cd1e?.onlyDefinedProperties === !0, λ684490d18c54 = λ1410fa02cd1e && "function" == typeof λ1410fa02cd1e.mergeArray ? λ1410fa02cd1e.mergeArray({
          clone: d,
          deepmerge: h,
          getKeys: λ7cd9d40fd63d,
          isMergeableObject: λ147b1ad37c3b
        }) : function(λ1410fa02cd1e, λ5dd05649068c) {
          let λe8552734159a = λ1410fa02cd1e.length, λ7cd9d40fd63d = λ5dd05649068c.length, λc12e5151e5e3 = 0, λ147b1ad37c3b = Array(λe8552734159a + λ7cd9d40fd63d);
          for (;λc12e5151e5e3 < λe8552734159a; ++λc12e5151e5e3) λ147b1ad37c3b[λc12e5151e5e3] = d(λ1410fa02cd1e[λc12e5151e5e3]);
          for (λc12e5151e5e3 = 0; λc12e5151e5e3 < λ7cd9d40fd63d; ++λc12e5151e5e3) λ147b1ad37c3b[λc12e5151e5e3 + λe8552734159a] = d(λ5dd05649068c[λc12e5151e5e3]);
          return λ147b1ad37c3b;
        };
        function d(λ1410fa02cd1e) {
          return λ147b1ad37c3b(λ1410fa02cd1e) ? Array.isArray(λ1410fa02cd1e) ? function(λ1410fa02cd1e) {
            let λ5dd05649068c = 0, λe8552734159a = λ1410fa02cd1e.length, λ7cd9d40fd63d = Array(λe8552734159a);
            for (;λ5dd05649068c < λe8552734159a; ++λ5dd05649068c) λ7cd9d40fd63d[λ5dd05649068c] = d(λ1410fa02cd1e[λ5dd05649068c]);
            return λ7cd9d40fd63d;
          }(λ1410fa02cd1e) : function(λ1410fa02cd1e) {
            let λe8552734159a, λ147b1ad37c3b, λ031a7813dd53, λ684490d18c54 = {};
            if (λc12e5151e5e3 && Object.getPrototypeOf(λ1410fa02cd1e) !== λ5dd05649068c) return λc12e5151e5e3(λ1410fa02cd1e);
            let λ20d4182650ca = λ7cd9d40fd63d(λ1410fa02cd1e);
            for (λe8552734159a = 0, λ147b1ad37c3b = λ20d4182650ca.length; λe8552734159a < λ147b1ad37c3b; ++λe8552734159a) o(λ031a7813dd53 = λ20d4182650ca[λe8552734159a]) && (λ684490d18c54[λ031a7813dd53] = d(λ1410fa02cd1e[λ031a7813dd53]));
            return λ684490d18c54;
          }(λ1410fa02cd1e) : λ1410fa02cd1e;
        }
        function h(λ1410fa02cd1e, λe8552734159a) {
          if (λ031a7813dd53 && void 0 === λe8552734159a) return d(λ1410fa02cd1e);
          let λ20d4182650ca = Array.isArray(λe8552734159a), λ1c5f91382a25 = Array.isArray(λ1410fa02cd1e);
          return "object" != typeof λe8552734159a || null === λe8552734159a ? λe8552734159a : λ147b1ad37c3b(λ1410fa02cd1e) ? λ20d4182650ca && λ1c5f91382a25 ? λ684490d18c54(λ1410fa02cd1e, λe8552734159a) : λ20d4182650ca !== λ1c5f91382a25 ? d(λe8552734159a) : function(λ1410fa02cd1e, λe8552734159a) {
            let λ684490d18c54, λ20d4182650ca, λ1c5f91382a25, λd0bb10256898 = {}, λ32270a2b93ad = λ7cd9d40fd63d(λ1410fa02cd1e), λfbf71748f780 = λ7cd9d40fd63d(λe8552734159a);
            for (λ684490d18c54 = 0, λ20d4182650ca = λ32270a2b93ad.length; λ684490d18c54 < λ20d4182650ca; ++λ684490d18c54) o(λ1c5f91382a25 = λ32270a2b93ad[λ684490d18c54]) && -1 === λfbf71748f780.indexOf(λ1c5f91382a25) && (λd0bb10256898[λ1c5f91382a25] = d(λ1410fa02cd1e[λ1c5f91382a25]));
            for (λ684490d18c54 = 0, λ20d4182650ca = λfbf71748f780.length; λ684490d18c54 < λ20d4182650ca; ++λ684490d18c54) if (o(λ1c5f91382a25 = λfbf71748f780[λ684490d18c54])) if (λ1c5f91382a25 in λ1410fa02cd1e) -1 !== λ32270a2b93ad.indexOf(λ1c5f91382a25) && (λc12e5151e5e3 && λ147b1ad37c3b(λe8552734159a[λ1c5f91382a25]) && Object.getPrototypeOf(λe8552734159a[λ1c5f91382a25]) !== λ5dd05649068c ? λd0bb10256898[λ1c5f91382a25] = λc12e5151e5e3(λe8552734159a[λ1c5f91382a25]) : λd0bb10256898[λ1c5f91382a25] = h(λ1410fa02cd1e[λ1c5f91382a25], λe8552734159a[λ1c5f91382a25])); else {
              if (λ031a7813dd53 && void 0 === λe8552734159a[λ1c5f91382a25]) continue;
              λd0bb10256898[λ1c5f91382a25] = d(λe8552734159a[λ1c5f91382a25]);
            }
            return λd0bb10256898;
          }(λ1410fa02cd1e, λe8552734159a) : d(λe8552734159a);
        }
        return λ1410fa02cd1e?.all ? function() {
          let λ1410fa02cd1e;
          switch (arguments.length) {
           case 0:
            return {};

           case 1:
            return d(arguments[0]);

           case 2:
            return h(arguments[0], arguments[1]);
          }
          for (let λ5dd05649068c = 0, λe8552734159a = arguments.length; λ5dd05649068c < λe8552734159a; ++λ5dd05649068c) λ1410fa02cd1e = h(λ1410fa02cd1e, arguments[λ5dd05649068c]);
          return λ1410fa02cd1e;
        } : h;
      }
      λ1410fa02cd1e.exports = o, λ1410fa02cd1e.exports.default = o, λ1410fa02cd1e.exports.deepmerge = o, 
      Object.defineProperty(λ1410fa02cd1e.exports, "isMergeableObject", {
        get: r
      });
    },
    235(λ1410fa02cd1e, λ5dd05649068c, λe8552734159a) {
      λe8552734159a.d(λ5dd05649068c, {
        Sr: () => s
      }), WebSocket.CLOSED, WebSocket.CONNECTING, WebSocket.OPEN, EventTarget;
      let λ7cd9d40fd63d = [ 101, 204, 205, 304 ];
      class s extends Response {
        url;
        rawHeaders;
        redirected=!1;
        static fromTransferrableResponse(λ1410fa02cd1e, λ5dd05649068c) {
          let λe8552734159a = new s(λ7cd9d40fd63d.includes(λ1410fa02cd1e.status) ? void 0 : λ1410fa02cd1e.body, {
            headers: new Headers(λ1410fa02cd1e.headers),
            status: λ1410fa02cd1e.status,
            statusText: λ1410fa02cd1e.statusText
          });
          return λe8552734159a.url = λ5dd05649068c, λe8552734159a.redirected = λ1410fa02cd1e.status >= 300 && λ1410fa02cd1e.status < 400 && void 0 !== λ1410fa02cd1e.headers.location, 
          λe8552734159a.rawHeaders = λ1410fa02cd1e.headers, λe8552734159a;
        }
        static fromNativeResponse(λ1410fa02cd1e) {
          let λ5dd05649068c = new s(λ7cd9d40fd63d.includes(λ1410fa02cd1e.status) ? void 0 : λ1410fa02cd1e.body, {
            headers: λ1410fa02cd1e.headers,
            status: λ1410fa02cd1e.status,
            statusText: λ1410fa02cd1e.statusText
          });
          return λ5dd05649068c.url = λ1410fa02cd1e.url, λ5dd05649068c.rawHeaders = [ ...λ1410fa02cd1e.headers ], 
          λ5dd05649068c.redirected = λ1410fa02cd1e.redirected, λ5dd05649068c;
        }
      }
    },
    423(λ1410fa02cd1e, λ5dd05649068c, λe8552734159a) {
      λe8552734159a.d(λ5dd05649068c, {
        Cx: () => λc7304b70c8db,
        Oy: () => λ920434378837,
        cP: () => λc12e5151e5e3,
        ht: () => λe8124ef0869c,
        k_: () => λ031a7813dd53,
        mK: () => λd0bb10256898,
        sb: () => λ4c21ad13dfbd,
        uh: () => λfbf71748f780
      });
      let {BareResponse: λ7cd9d40fd63d, CookieJar: λc12e5151e5e3, IncrementalHtmlRewriter: λ147b1ad37c3b, Plugin: λ031a7813dd53, STUDYJETCLIENT: λ684490d18c54, STUDYJETCLIENTNAME: λ20d4182650ca, StudyJetClient: λ1c5f91382a25, StudyJetFetchHandler: λd0bb10256898, StudyJetFetchTrackedClient: λ32270a2b93ad, StudyJetHeaders: λfbf71748f780, Tap: λc7304b70c8db, createLocationProxy: λ14acbe42fb83, defaultConfig: λ4c21ad13dfbd, defaultConfigDev: λ244570d20ac0, flagEnabled: λ5592df2284ef, getOwnPropertyDescriptorHandler: λa1cd50d5d669, getRewriter: λ35dfd7cd033f, getScriptBlockTypeString: λcb6da9d779c3, htmlRules: λ3b024e03effb, isArchiveMimeType: λ27007ac36eea, isAudioOrVideoMimeType: λ48c8f735d54a, isFontMimeType: λef117b8c6899, isHtmlMimeType: λeada21544fce, isImageMimeType: λc225e655626d, isInlineDisplayableMimeType: λ23729fc4c2bc, isJavascriptMimeType: λ8279819bc1a4, isJavascriptMimeTypeEssenceMatch: λ3092f94ae98a, isModuleScriptType: λ969689b9fe22, isScriptType: λad1a6b3f8331, isScriptableMimeType: λ6e61b7ece74c, isXmlMimeType: λ42aa735d8222, isZipBasedMimeType: λ6739c38bda79, isdedicated: λf1a291db5c67, isshared: λ5350f44fb783, issw: λ4959b1a82760, iswindow: λ5945308139f9, isworker: λ1518b4d07319, parseMimeType: λ74f3fb3ac6d2, rewriteBlob: λ87fc38cec4e8, rewriteCss: λa198d3e751ee, rewriteHtml: λf72aca02814c, rewriteJs: λc0c05b7969de, rewriteJsInner: λd72ca132ee4e, rewriteSrcset: λ8547342b0790, rewriteUrl: λ920434378837, rewriteWorkers: λ1c410868d050, setWasm: λe8124ef0869c, unrewriteBlob: λ7e4ec714bb51, unrewriteCss: λ25c6b5d07405, unrewriteHtml: λ5b59f53c6f29, unrewriteUrl: λ04cc2929cc4a, versionInfo: λa78a98719455} = globalThis.$studyjet;
    }
  }, λ5dd05649068c = {};
  function r(λe8552734159a) {
    var λ7cd9d40fd63d = λ5dd05649068c[λe8552734159a];
    if (void 0 !== λ7cd9d40fd63d) return λ7cd9d40fd63d.exports;
    var λc12e5151e5e3 = λ5dd05649068c[λe8552734159a] = {
      exports: {}
    };
    return λ1410fa02cd1e[λe8552734159a](λc12e5151e5e3, λc12e5151e5e3.exports, r), λc12e5151e5e3.exports;
  }
  r.n = λ1410fa02cd1e => {
    var λ5dd05649068c = λ1410fa02cd1e && λ1410fa02cd1e.__esModule ? () => λ1410fa02cd1e.default : () => λ1410fa02cd1e;
    return r.d(λ5dd05649068c, {
      a: λ5dd05649068c
    }), λ5dd05649068c;
  }, r.d = (λ1410fa02cd1e, λ5dd05649068c) => {
    for (var λe8552734159a in λ5dd05649068c) r.o(λ5dd05649068c, λe8552734159a) && !r.o(λ1410fa02cd1e, λe8552734159a) && Object.defineProperty(λ1410fa02cd1e, λe8552734159a, {
      enumerable: !0,
      get: λ5dd05649068c[λe8552734159a]
    });
  }, r.o = (λ1410fa02cd1e, λ5dd05649068c) => Object.prototype.hasOwnProperty.call(λ1410fa02cd1e, λ5dd05649068c), 
  r.r = λ1410fa02cd1e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λ1410fa02cd1e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(λ1410fa02cd1e, "__esModule", {
      value: !0
    });
  };
  var λe8552734159a = {};
  (() => {
    r.r(λe8552734159a), r.d(λe8552734159a, {
      Controller: () => S,
      Frame: () => v,
      ManagedPlugin: () => d,
      VERSION: () => λ031a7813dd53.x,
      assertRuntimeStudyJetVersion: () => λ031a7813dd53.O,
      config: () => λ684490d18c54
    });
    var λ1410fa02cd1e = r(805), λ5dd05649068c = r(235), λ7cd9d40fd63d = r(986), λc12e5151e5e3 = r(423), λ147b1ad37c3b = r(286), λ031a7813dd53 = r(355);
    let λ684490d18c54 = {
      prefix: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/study/",
      studyjetPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/studyjet/@r69c18f9bd4ed175c9ea505b8!.js",
      injectPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/controller/@r9e855ac82edc4b51e1340564!.js",
      wasmPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/studyjet/@r55286cfe09d741023cc3e1d6!.wasm",
      virtualWasmPath: "studyjet.wasm.js",
      codec: {
        encode: λ1410fa02cd1e => λ1410fa02cd1e ? encodeURIComponent(λ1410fa02cd1e) : λ1410fa02cd1e,
        decode: λ1410fa02cd1e => λ1410fa02cd1e ? decodeURIComponent(λ1410fa02cd1e) : λ1410fa02cd1e
      }
    }, λ20d4182650ca = {
      flags: {
        ...λc12e5151e5e3.sb.flags,
        allowFailedIntercepts: !0
      },
      maskedfiles: [ "inject.js", "studyjet.wasm.js" ]
    };
    class d extends λc12e5151e5e3.k_ {
      frame=null;
      dependencies=[];
      constructor(λ1410fa02cd1e, λ5dd05649068c) {
        super(λ1410fa02cd1e), this.dependencies = λ5dd05649068c;
      }
      install(λ1410fa02cd1e) {
        this.frame = λ1410fa02cd1e;
      }
    }
    let λ1c5f91382a25 = "state", λd0bb10256898 = "cookies", λ32270a2b93ad = null;
    function u(λ1410fa02cd1e) {
      return "object" == typeof λ1410fa02cd1e && null !== λ1410fa02cd1e && "number" == typeof λ1410fa02cd1e.updatedAt && Number.isFinite(λ1410fa02cd1e.updatedAt) && "string" == typeof λ1410fa02cd1e.cookies ? λ1410fa02cd1e : null;
    }
    function y(λ1410fa02cd1e) {
      return new Promise((λ5dd05649068c, λe8552734159a) => {
        λ1410fa02cd1e.onsuccess = () => λ5dd05649068c(λ1410fa02cd1e.result), λ1410fa02cd1e.onerror = () => λe8552734159a(λ1410fa02cd1e.error ?? Error("IndexedDB request failed"));
      });
    }
    function m(λ1410fa02cd1e) {
      return new Promise((λ5dd05649068c, λe8552734159a) => {
        λ1410fa02cd1e.oncomplete = () => λ5dd05649068c(), λ1410fa02cd1e.onabort = () => λe8552734159a(λ1410fa02cd1e.error ?? Error("IndexedDB transaction aborted")), 
        λ1410fa02cd1e.onerror = () => λe8552734159a(λ1410fa02cd1e.error ?? Error("IndexedDB transaction failed"));
      });
    }
    function g() {
      return λ32270a2b93ad || (λ32270a2b93ad = new Promise((λ1410fa02cd1e, λ5dd05649068c) => {
        let λe8552734159a = indexedDB.open("@d941bc65af3", 1);
        λe8552734159a.onupgradeneeded = () => {
          let λ1410fa02cd1e = λe8552734159a.result;
          λ1410fa02cd1e.objectStoreNames.contains(λ1c5f91382a25) || λ1410fa02cd1e.createObjectStore(λ1c5f91382a25);
        }, λe8552734159a.onsuccess = () => λ1410fa02cd1e(λe8552734159a.result), λe8552734159a.onerror = () => λ5dd05649068c(λe8552734159a.error ?? Error("Failed to open cookie database"));
      }));
    }
    async function w() {
      try {
        let λ1410fa02cd1e = (await g()).transaction(λ1c5f91382a25, "readonly"), λ5dd05649068c = λ1410fa02cd1e.objectStore(λ1c5f91382a25), λe8552734159a = await y(λ5dd05649068c.get(λd0bb10256898));
        return await m(λ1410fa02cd1e), u(λe8552734159a);
      } catch (λ1410fa02cd1e) {
        return console.error("Failed to read persisted controller cookies:", λ1410fa02cd1e), 
        null;
      }
    }
    async function k(λ1410fa02cd1e, λ5dd05649068c) {
      try {
        let λe8552734159a = (await g()).transaction(λ1c5f91382a25, "readwrite"), λ7cd9d40fd63d = λe8552734159a.objectStore(λ1c5f91382a25), λc12e5151e5e3 = u(await y(λ7cd9d40fd63d.get(λd0bb10256898))), λ147b1ad37c3b = Math.max(Date.now(), λ5dd05649068c + 1, (λc12e5151e5e3?.updatedAt ?? 0) + 1);
        return λ7cd9d40fd63d.put({
          updatedAt: λ147b1ad37c3b,
          cookies: λ1410fa02cd1e
        }, λd0bb10256898), await m(λe8552734159a), λ147b1ad37c3b;
      } catch (λ1410fa02cd1e) {
        return console.error("Failed to persist controller cookies:", λ1410fa02cd1e), λ5dd05649068c;
      }
    }
    function b() {
      return Math.random().toString(36).substring(2, 10);
    }
    let λfbf71748f780 = (0, λ7cd9d40fd63d.deepmerge)();
    class S {
      init;
      id;
      config;
      studyjetConfig;
      prefix;
      cookieJar=new λc12e5151e5e3.cP;
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
      onTabChannelMessage=λ1410fa02cd1e => {
        this.rpc.recieve(λ1410fa02cd1e.data);
      };
      onCookieSyncMessage=λ1410fa02cd1e => {
        let λ5dd05649068c = "object" == typeof λ1410fa02cd1e.data && null !== λ1410fa02cd1e.data ? λ1410fa02cd1e.data.updatedAt : void 0;
        "number" != typeof λ5dd05649068c || λ5dd05649068c <= this.cookieUpdatedAt || (this.cookieSyncDirty = !0, 
        this.loadSavedCookies());
      };
      async loadStudyJetWasm() {
        if (this.wasmAlreadyFetched) return;
        let λ1410fa02cd1e = await fetch(this.config.wasmPath);
        (0, λc12e5151e5e3.ht)(await λ1410fa02cd1e.arrayBuffer()), this.wasmAlreadyFetched = !0;
      }
      methods={
        ready: async () => {
          this.readyResolve(), setTimeout(() => {
            this.guardServiceWorkerRevive = !1;
          }, 5e3);
        },
        request: async λ1410fa02cd1e => {
          let λ5dd05649068c = new URL(λ1410fa02cd1e.rawUrl).pathname, λe8552734159a = this.frames.find(λ1410fa02cd1e => λ5dd05649068c.startsWith(λ1410fa02cd1e.prefix));
          if (!λe8552734159a) throw Error("No frame found for request");
          try {
            if (await this.loadSavedCookies(), λ5dd05649068c === λe8552734159a.prefix + this.config.virtualWasmPath) {
              if (!this.wasmPayload) {
                let λ1410fa02cd1e = await fetch(this.config.wasmPath), λ5dd05649068c = await λ1410fa02cd1e.arrayBuffer(), λe8552734159a = btoa(new Uint8Array(λ5dd05649068c).reduce((λ1410fa02cd1e, λ5dd05649068c) => (λ1410fa02cd1e.push(String.fromCharCode(λ5dd05649068c)), 
                λ1410fa02cd1e), []).join(""));
                this.wasmPayload = `self.WASM = '${λe8552734159a}';`;
              }
              return [ {
                body: this.wasmPayload,
                status: 200,
                statusText: "OK",
                headers: [ [ "Content-Type", "application/javascript" ] ]
              }, [] ];
            }
            let λ7cd9d40fd63d = λc12e5151e5e3.uh.fromRawHeaders(λ1410fa02cd1e.initialHeaders), λ147b1ad37c3b = await λe8552734159a.fetchHandler.handleFetch({
              initialHeaders: λ7cd9d40fd63d,
              rawClientUrl: λ1410fa02cd1e.rawClientUrl ? new URL(λ1410fa02cd1e.rawClientUrl) : void 0,
              rawUrl: new URL(λ1410fa02cd1e.rawUrl),
              rawReferrer: λ1410fa02cd1e.rawReferrer,
              rawDestination: λ1410fa02cd1e.destination,
              method: λ1410fa02cd1e.method,
              mode: λ1410fa02cd1e.mode,
              referrer: λ1410fa02cd1e.referrer,
              body: λ1410fa02cd1e.body,
              cache: λ1410fa02cd1e.cache,
              clientId: λ1410fa02cd1e.clientId
            });
            return [ {
              body: λ147b1ad37c3b.body,
              status: λ147b1ad37c3b.status,
              statusText: λ147b1ad37c3b.statusText,
              headers: λ147b1ad37c3b.headers.toRawHeaders()
            }, λ147b1ad37c3b.body instanceof ReadableStream || λ147b1ad37c3b.body instanceof ArrayBuffer ? [ λ147b1ad37c3b.body ] : [] ];
          } catch (λ5dd05649068c) {
            let λ7cd9d40fd63d = {
              setResponse: void 0,
              suppressError: !1
            };
            if (await λc12e5151e5e3.Cx.dispatch(λe8552734159a.hooks.error.request, {
              rawrequest: λ1410fa02cd1e,
              error: λ5dd05649068c
            }, λ7cd9d40fd63d), λ7cd9d40fd63d.suppressError || console.error("Error in controller request handler:", λ5dd05649068c), 
            λ7cd9d40fd63d.setResponse) return [ λ7cd9d40fd63d.setResponse, [] ];
            throw λ5dd05649068c;
          }
        },
        initRemoteTransport: async λ5dd05649068c => {
          let λe8552734159a = new λ1410fa02cd1e.C({
            request: async ({remote: λ1410fa02cd1e, method: λ5dd05649068c, body: λe8552734159a, headers: λ7cd9d40fd63d}) => {
              let λc12e5151e5e3 = await this.transport.request(new URL(λ1410fa02cd1e), λ5dd05649068c, λe8552734159a, λ7cd9d40fd63d, void 0);
              return [ λc12e5151e5e3, [ λc12e5151e5e3.body ] ];
            },
            sendSetCookie: async ({cookies: λ1410fa02cd1e, options: λ5dd05649068c}) => {
              await this.loadSavedCookies(!0), λ5dd05649068c?.clear && this.cookieJar.clear(), 
              this.applyCookieSyncEntries(λ1410fa02cd1e), await this.persistCookies(), await this.propagateCookieSync(λ1410fa02cd1e, λ5dd05649068c);
            },
            connect: async ({url: λ1410fa02cd1e, protocols: λ5dd05649068c, requestHeaders: λe8552734159a, port: λ7cd9d40fd63d}) => {
              let λc12e5151e5e3, λ147b1ad37c3b = new Promise(λ1410fa02cd1e => λc12e5151e5e3 = λ1410fa02cd1e), [λ031a7813dd53, λ684490d18c54] = this.transport.connect(new URL(λ1410fa02cd1e), λ5dd05649068c, λe8552734159a, (λ1410fa02cd1e, λ5dd05649068c) => {
                λc12e5151e5e3({
                  result: "success",
                  protocol: λ1410fa02cd1e,
                  extensions: λ5dd05649068c
                });
              }, λ1410fa02cd1e => {
                λ7cd9d40fd63d.postMessage({
                  type: "data",
                  data: λ1410fa02cd1e
                }, λ1410fa02cd1e instanceof ArrayBuffer ? [ λ1410fa02cd1e ] : []);
              }, (λ1410fa02cd1e, λ5dd05649068c) => {
                λ7cd9d40fd63d.postMessage({
                  type: "close",
                  code: λ1410fa02cd1e,
                  reason: λ5dd05649068c
                });
              }, λ1410fa02cd1e => {
                λc12e5151e5e3({
                  result: "failure",
                  error: λ1410fa02cd1e
                });
              });
              return λ7cd9d40fd63d.onmessageerror = λ1410fa02cd1e => {
                console.error("Transport port messageerror (this should never happen!)", λ1410fa02cd1e);
              }, λ7cd9d40fd63d.onmessage = ({data: λ1410fa02cd1e}) => {
                "data" === λ1410fa02cd1e.type ? λ031a7813dd53(λ1410fa02cd1e.data) : "close" === λ1410fa02cd1e.type && λ684490d18c54(λ1410fa02cd1e.code, λ1410fa02cd1e.reason);
              }, [ await λ147b1ad37c3b, [] ];
            }
          }, "transport", (λ1410fa02cd1e, λe8552734159a) => λ5dd05649068c.postMessage(λ1410fa02cd1e, λe8552734159a));
          λ5dd05649068c.onmessageerror = λ1410fa02cd1e => {
            console.error("Transport port messageerror (this should never happen!)", λ1410fa02cd1e);
          }, λ5dd05649068c.onmessage = λ1410fa02cd1e => {
            λe8552734159a.recieve(λ1410fa02cd1e.data);
          }, λe8552734159a.call("ready", void 0, []);
        }
      };
      constructor(λ5dd05649068c) {
        this.init = λ5dd05649068c, (0, λ031a7813dd53.O)(), this.id = b(), this.config = λfbf71748f780(λ684490d18c54, λ5dd05649068c.config || {}), 
        this.studyjetConfig = λfbf71748f780(λ20d4182650ca, λc12e5151e5e3.sb), this.studyjetConfig = λfbf71748f780(this.studyjetConfig, λ5dd05649068c.studyjetConfig || {}), 
        this.prefix = this.config.prefix + this.id + "/", this.serviceWorkerController = λ5dd05649068c.serviceworker, 
        this.ready = Promise.all([ new Promise(λ1410fa02cd1e => {
          this.readyResolve = λ1410fa02cd1e;
        }), this.loadStudyJetWasm(), this.loadSavedCookies(!0) ]).then(() => void 0), this.rpc = new λ1410fa02cd1e.C(this.methods, "tabchannel-" + this.id, (λ1410fa02cd1e, λ5dd05649068c) => {
          if (!this.port) throw Error("Port not found");
          this.port.postMessage(λ1410fa02cd1e, λ5dd05649068c);
        }), this.transport = λ5dd05649068c.transport, this.cookieSyncChannel.addEventListener("message", this.onCookieSyncMessage), 
        this.setupMessagePort(), navigator.serviceWorker.addEventListener("message", λ1410fa02cd1e => {
          if (λ1410fa02cd1e.data?.$controller$setCookie && "object" == typeof λ1410fa02cd1e.data.$controller$setCookie) {
            let λ5dd05649068c = λ1410fa02cd1e.data.$controller$setCookie;
            if (λ5dd05649068c.controllerId && λ5dd05649068c.controllerId !== this.id) return;
            λ5dd05649068c.options?.clear && this.cookieJar.clear(), this.applyCookieSyncEntries(λ5dd05649068c.cookies), 
            "string" == typeof λ5dd05649068c.id && this.serviceWorkerController.postMessage({
              $sw$setCookieDone: {
                id: λ5dd05649068c.id
              }
            });
            return;
          }
          if (λ1410fa02cd1e.data.$controller$swrevive) {
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
        let λ1410fa02cd1e = new MessageChannel;
        this.port = λ1410fa02cd1e.port1, this.port.addEventListener("message", this.onTabChannelMessage), 
        this.port.start(), this.serviceWorkerController.postMessage({
          $controller$init: {
            prefix: this.prefix,
            id: this.id
          }
        }, [ λ1410fa02cd1e.port2 ]);
      }
      applyCookieSyncEntries(λ1410fa02cd1e) {
        if (Array.isArray(λ1410fa02cd1e)) for (let λ5dd05649068c of λ1410fa02cd1e) "string" == typeof λ5dd05649068c?.url && "string" == typeof λ5dd05649068c.cookie && this.cookieJar.setCookies(λ5dd05649068c.cookie, new URL(λ5dd05649068c.url));
      }
      async propagateCookieSync(λ1410fa02cd1e, λ5dd05649068c = {}) {
        this.port && await this.rpc.call("sendSetCookie", {
          cookies: λ1410fa02cd1e,
          options: λ5dd05649068c
        });
      }
      async loadSavedCookies(λ1410fa02cd1e = !1) {
        if (λ1410fa02cd1e || this.cookieSyncDirty) return this.cookieSyncPromise || (this.cookieSyncPromise = (async () => {
          let λ1410fa02cd1e = await w();
          λ1410fa02cd1e && λ1410fa02cd1e.updatedAt > this.cookieUpdatedAt && (this.cookieJar.load(λ1410fa02cd1e.cookies), 
          this.cookieUpdatedAt = λ1410fa02cd1e.updatedAt), this.cookieSyncDirty = !1;
        })().finally(() => {
          this.cookieSyncPromise = null;
        })), this.cookieSyncPromise;
      }
      async persistCookies() {
        let λ1410fa02cd1e = await k(this.cookieJar.dump(), this.cookieUpdatedAt);
        λ1410fa02cd1e <= this.cookieUpdatedAt || (this.cookieUpdatedAt = λ1410fa02cd1e, 
        this.cookieSyncDirty = !1, this.cookieSyncChannel.postMessage({
          updatedAt: λ1410fa02cd1e
        }));
      }
      setTransport(λ1410fa02cd1e) {
        for (let λ5dd05649068c of (this.transport = λ1410fa02cd1e, this.frames)) λ5dd05649068c.controller.transport = λ1410fa02cd1e, 
        λ5dd05649068c.fetchHandler.client.transport = λ1410fa02cd1e;
      }
      createFrame(λ1410fa02cd1e, λ5dd05649068c = {}) {
        if (!this.ready) throw Error("Controller is not ready! Try awaiting controller.wait()");
        let λe8552734159a = new v(this, λ1410fa02cd1e ??= document.createElement("iframe"), λ5dd05649068c);
        return this.frames.push(λe8552734159a), λe8552734159a;
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
            getInjectScripts: function e(λ1410fa02cd1e, λ5dd05649068c, λe8552734159a, λ7cd9d40fd63d, λc12e5151e5e3, λ147b1ad37c3b) {
              return (λ031a7813dd53, λ684490d18c54, λ20d4182650ca, λ1c5f91382a25) => {
                var λd0bb10256898;
                return [ λ1c5f91382a25(λ1410fa02cd1e.studyjetPath), λ1c5f91382a25(λe8552734159a.href + λ1410fa02cd1e.virtualWasmPath), λ1c5f91382a25(λ1410fa02cd1e.injectPath), λ1c5f91382a25("data:text/javascript;charset=utf-8;base64," + (λd0bb10256898 = `\n\t\t\t\t\tdocument.querySelectorAll("script[studyjet-injected]").forEach(script => script.remove());\n\t\t\t\t\t$studyjetController.load({\n\t\t\t\t\t\tconfig: ${JSON.stringify(λ1410fa02cd1e)},\n\t\t\t\t\t\tsjconfig: ${JSON.stringify(λ5dd05649068c)},\n\t\t\t\t\t\tprefix: new URL("${λe8552734159a.href}"),\n\t\t\t\t\t\tcookies: ${JSON.stringify(λ7cd9d40fd63d.dump())},\n\t\t\t\t\t\tyieldGetInjectScripts: ${e.toString()},\n\t\t\t\t\t\tcodecEncode: ${λc12e5151e5e3.toString()},\n\t\t\t\t\t\tcodecDecode: ${λ147b1ad37c3b.toString()},\n\t\t\t\t\t\tinitHeaders: ${JSON.stringify(λ20d4182650ca.headers ?? [])},\n\t\t\t\t\t\thistory: ${JSON.stringify(λ20d4182650ca.history ?? [])},\n\t\t\t\t\t})\n\t\t\t\t`, 
                btoa((new TextEncoder).encode(λd0bb10256898).reduce((λ1410fa02cd1e, λ5dd05649068c) => (λ1410fa02cd1e.push(String.fromCharCode(λ5dd05649068c)), 
                λ1410fa02cd1e), []).join("")))) ];
              };
            }(this.controller.config, this.controller.studyjetConfig, new URL(this.prefix, location.href), this.controller.cookieJar, this.controller.config.codec.encode, this.controller.config.codec.decode),
            getWorkerInjectScripts: (λ1410fa02cd1e, λ5dd05649068c, λe8552734159a) => {
              var λ7cd9d40fd63d;
              let λc12e5151e5e3 = "";
              return λc12e5151e5e3 += λe8552734159a(this.controller.config.studyjetPath), λc12e5151e5e3 += λe8552734159a(this.prefix + this.controller.config.virtualWasmPath), 
              λc12e5151e5e3 += λe8552734159a("data:text/javascript;charset=utf-8;base64," + (λ7cd9d40fd63d = `\n\t\t\t\t\t(()=>{\n\t\t\t\t\t\tconst { StudyJetClient, CookieJar, setWasm } = $studyjet;\n\n\t\t\t\t\t\tsetWasm(Uint8Array.from(atob(self.WASM), (c) => c.charCodeAt(0)));\n\t\t\t\t\t\tdelete self.WASM;\n\n\t\t\t\t\t\tconst sjconfig = ${JSON.stringify(this.controller.studyjetConfig)};\n\t\t\t\t\t\tconst prefix = new URL("${this.prefix}", location.href);\n\n\t\t\t\t\t\tconst context = {\n\t\t\t\t\t\t\tconfig: sjconfig,\n\t\t\t\t\t\t\tprefix,\n\t\t\t\t\t\t\tinterface: {\n\t\t\t\t\t\t\t\tcodecEncode: ${this.controller.config.codec.encode.toString()},\n\t\t\t\t\t\t\t\tcodecDecode: ${this.controller.config.codec.decode.toString()},\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t};\n\n\t\t\t\t\t\tconst client = new StudyJetClient(globalThis, {\n\t\t\t\t\t\t\tcontext,\n\t\t\t\t\t\t\ttransport: null,\n\t\t\t\t\t\t});\n\n\t\t\t\t\t\tclient.hook();\n\t\t\t\t\t})();\n\t\t\t\t\t`, 
              btoa((new TextEncoder).encode(λ7cd9d40fd63d).reduce((λ1410fa02cd1e, λ5dd05649068c) => (λ1410fa02cd1e.push(String.fromCharCode(λ5dd05649068c)), 
              λ1410fa02cd1e), []).join(""))));
            },
            codecEncode: this.controller.config.codec.encode,
            codecDecode: this.controller.config.codec.decode
          }
        };
      }
      plugins=[];
      constructor(λ1410fa02cd1e, λe8552734159a, λ7cd9d40fd63d = {}) {
        for (const λ031a7813dd53 of (this.controller = λ1410fa02cd1e, this.element = λe8552734159a, 
        this.options = λ7cd9d40fd63d, this.id = b(), this.prefix = this.controller.prefix + this.id + "/", 
        this.fetchHandler = new λc12e5151e5e3.mK({
          crossOriginIsolated: self.crossOriginIsolated,
          context: this.context,
          transport: λ1410fa02cd1e.transport,
          async sendSetCookie(λ5dd05649068c, λe8552734159a) {
            await λ1410fa02cd1e.persistCookies(), await λ1410fa02cd1e.propagateCookieSync(λ5dd05649068c.map(({url: λ1410fa02cd1e, cookie: λ5dd05649068c}) => ({
              url: λ1410fa02cd1e.href,
              cookie: λ5dd05649068c
            })), λe8552734159a);
          },
          fetchBlobUrl: async λ1410fa02cd1e => λ5dd05649068c.Sr.fromNativeResponse(await fetch(λ1410fa02cd1e)),
          fetchDataUrl: async λ1410fa02cd1e => λ5dd05649068c.Sr.fromNativeResponse(await fetch(λ1410fa02cd1e))
        }), this.hooks = {
          fetch: this.fetchHandler.hooks.fetch,
          init: λc12e5151e5e3.Cx.create(),
          error: λc12e5151e5e3.Cx.create()
        }, λe8552734159a[λ147b1ad37c3b.I] = this, this.plugins = λ7cd9d40fd63d.plugins ?? [], 
        this.plugins)) {
          for (const λ1410fa02cd1e of λ031a7813dd53.dependencies) if (!this.plugins.find(λ5dd05649068c => λ5dd05649068c.name === λ1410fa02cd1e)) throw Error(`Dependency ${λ1410fa02cd1e} not found for plugin ${λ031a7813dd53.name}`);
          λ031a7813dd53.install(this);
        }
      }
      getPlugin(λ1410fa02cd1e) {
        let λ5dd05649068c = this.plugins.find(λ5dd05649068c => λ5dd05649068c.name === λ1410fa02cd1e);
        if (!λ5dd05649068c) throw Error(`Plugin ${λ1410fa02cd1e} not found`);
        return λ5dd05649068c;
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
      go(λ1410fa02cd1e) {
        let λ5dd05649068c = (0, λc12e5151e5e3.Oy)(λ1410fa02cd1e, this.context, {
          origin: new URL(location.href),
          base: new URL(location.href)
        });
        this.element.src = λ5dd05649068c;
      }
    }
  })(), $studyjetController = λe8552734159a;
})();
