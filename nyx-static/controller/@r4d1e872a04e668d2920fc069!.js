var $studyjetController;

(() => {
  var λ38b48eb55b8e = {
    286(λ38b48eb55b8e, λ754c6b625fdb, λ2af0cfd71efc) {
      λ2af0cfd71efc.d(λ754c6b625fdb, {
        I: () => λ7b1b43dfa22d
      });
      let λ7b1b43dfa22d = Symbol.for("controller frame handle");
    },
    355(λ38b48eb55b8e, λ754c6b625fdb, λ2af0cfd71efc) {
      λ2af0cfd71efc.d(λ754c6b625fdb, {
        O: () => s,
        x: () => λ7b1b43dfa22d
      });
      let λ7b1b43dfa22d = "0.0.14";
      function s() {
        if ("undefined" == typeof $studyjet) throw Error("@mercuryworkshop/studyjet is not loaded. Load studyjet before the controller.");
        var λ38b48eb55b8e = "2.0.67-alpha.2", λ754c6b625fdb = $studyjet.versionInfo.version;
        if (λ38b48eb55b8e !== λ754c6b625fdb) throw Error(`@mercuryworkshop/studyjet version mismatch: this build expects ${λ38b48eb55b8e}, but the loaded runtime is ${λ754c6b625fdb}`);
      }
    },
    805(λ38b48eb55b8e, λ754c6b625fdb, λ2af0cfd71efc) {
      λ2af0cfd71efc.d(λ754c6b625fdb, {
        C: () => o
      });
      class o {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λ38b48eb55b8e, λ754c6b625fdb, λ2af0cfd71efc) {
          this.methods = λ38b48eb55b8e, this.id = λ754c6b625fdb, this.sendRaw = λ2af0cfd71efc;
        }
        recieve(λ38b48eb55b8e) {
          if (null == λ38b48eb55b8e || "object" != typeof λ38b48eb55b8e) return;
          let λ754c6b625fdb = λ38b48eb55b8e[this.id];
          if (null == λ754c6b625fdb || "object" != typeof λ754c6b625fdb) return;
          let λ2af0cfd71efc = λ754c6b625fdb.$type;
          if ("response" === λ2af0cfd71efc) {
            let λ38b48eb55b8e = λ754c6b625fdb.$token, λ2af0cfd71efc = λ754c6b625fdb.$data, λ7b1b43dfa22d = λ754c6b625fdb.$error, λde98bcd15b04 = this.promiseCallbacks.get(λ38b48eb55b8e);
            if (!λde98bcd15b04) return;
            this.promiseCallbacks.delete(λ38b48eb55b8e), void 0 !== λ7b1b43dfa22d ? λde98bcd15b04.reject(Error(λ7b1b43dfa22d)) : λde98bcd15b04.resolve(λ2af0cfd71efc);
          } else if ("request" === λ2af0cfd71efc) {
            let λ38b48eb55b8e = λ754c6b625fdb.$method, λ2af0cfd71efc = λ754c6b625fdb.$args;
            this.methods[λ38b48eb55b8e](λ2af0cfd71efc).then(λ38b48eb55b8e => {
              this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ754c6b625fdb.$token,
                  $data: λ38b48eb55b8e?.[0]
                }
              }, λ38b48eb55b8e?.[1]);
            }).catch(λ38b48eb55b8e => {
              console.error(λ38b48eb55b8e), this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ754c6b625fdb.$token,
                  $error: λ38b48eb55b8e?.toString() || "Unknown error"
                }
              }, []);
            });
          }
        }
        call(λ38b48eb55b8e, λ754c6b625fdb, λ2af0cfd71efc = []) {
          let λ7b1b43dfa22d = this.counter++;
          return new Promise((λde98bcd15b04, λ490ffdd9081d) => {
            this.promiseCallbacks.set(λ7b1b43dfa22d, {
              resolve: λde98bcd15b04,
              reject: λ490ffdd9081d
            }), this.sendRaw({
              [this.id]: {
                $type: "request",
                $method: λ38b48eb55b8e,
                $args: λ754c6b625fdb,
                $token: λ7b1b43dfa22d
              }
            }, λ2af0cfd71efc);
          });
        }
      }
    },
    986(λ38b48eb55b8e) {
      let λ754c6b625fdb = Object.getPrototypeOf({});
      function r() {
        return function(λ38b48eb55b8e) {
          return "object" == typeof λ38b48eb55b8e && null !== λ38b48eb55b8e && !(λ38b48eb55b8e instanceof RegExp) && !(λ38b48eb55b8e instanceof Date);
        };
      }
      function o(λ38b48eb55b8e) {
        function o(λ38b48eb55b8e) {
          return "constructor" !== λ38b48eb55b8e && "prototype" !== λ38b48eb55b8e && "__proto__" !== λ38b48eb55b8e;
        }
        let λ2af0cfd71efc = Object.prototype.propertyIsEnumerable, λ7b1b43dfa22d = λ38b48eb55b8e?.symbols ? function(λ38b48eb55b8e) {
          let λ754c6b625fdb = Object.keys(λ38b48eb55b8e), λ7b1b43dfa22d = Object.getOwnPropertySymbols(λ38b48eb55b8e);
          for (let λde98bcd15b04 = 0, λ490ffdd9081d = λ7b1b43dfa22d.length; λde98bcd15b04 < λ490ffdd9081d; ++λde98bcd15b04) λ2af0cfd71efc.call(λ38b48eb55b8e, λ7b1b43dfa22d[λde98bcd15b04]) && λ754c6b625fdb.push(λ7b1b43dfa22d[λde98bcd15b04]);
          return λ754c6b625fdb;
        } : Object.keys, λde98bcd15b04 = "function" == typeof λ38b48eb55b8e?.cloneProtoObject ? λ38b48eb55b8e.cloneProtoObject : void 0, λ490ffdd9081d = "function" == typeof λ38b48eb55b8e?.isMergeableObject ? λ38b48eb55b8e.isMergeableObject : r(), λ7dbfd9417b2e = λ38b48eb55b8e?.onlyDefinedProperties === !0, λdeb6d4c1d3dc = λ38b48eb55b8e && "function" == typeof λ38b48eb55b8e.mergeArray ? λ38b48eb55b8e.mergeArray({
          clone: d,
          deepmerge: h,
          getKeys: λ7b1b43dfa22d,
          isMergeableObject: λ490ffdd9081d
        }) : function(λ38b48eb55b8e, λ754c6b625fdb) {
          let λ2af0cfd71efc = λ38b48eb55b8e.length, λ7b1b43dfa22d = λ754c6b625fdb.length, λde98bcd15b04 = 0, λ490ffdd9081d = Array(λ2af0cfd71efc + λ7b1b43dfa22d);
          for (;λde98bcd15b04 < λ2af0cfd71efc; ++λde98bcd15b04) λ490ffdd9081d[λde98bcd15b04] = d(λ38b48eb55b8e[λde98bcd15b04]);
          for (λde98bcd15b04 = 0; λde98bcd15b04 < λ7b1b43dfa22d; ++λde98bcd15b04) λ490ffdd9081d[λde98bcd15b04 + λ2af0cfd71efc] = d(λ754c6b625fdb[λde98bcd15b04]);
          return λ490ffdd9081d;
        };
        function d(λ38b48eb55b8e) {
          return λ490ffdd9081d(λ38b48eb55b8e) ? Array.isArray(λ38b48eb55b8e) ? function(λ38b48eb55b8e) {
            let λ754c6b625fdb = 0, λ2af0cfd71efc = λ38b48eb55b8e.length, λ7b1b43dfa22d = Array(λ2af0cfd71efc);
            for (;λ754c6b625fdb < λ2af0cfd71efc; ++λ754c6b625fdb) λ7b1b43dfa22d[λ754c6b625fdb] = d(λ38b48eb55b8e[λ754c6b625fdb]);
            return λ7b1b43dfa22d;
          }(λ38b48eb55b8e) : function(λ38b48eb55b8e) {
            let λ2af0cfd71efc, λ490ffdd9081d, λ7dbfd9417b2e, λdeb6d4c1d3dc = {};
            if (λde98bcd15b04 && Object.getPrototypeOf(λ38b48eb55b8e) !== λ754c6b625fdb) return λde98bcd15b04(λ38b48eb55b8e);
            let λ8d6e60f11cce = λ7b1b43dfa22d(λ38b48eb55b8e);
            for (λ2af0cfd71efc = 0, λ490ffdd9081d = λ8d6e60f11cce.length; λ2af0cfd71efc < λ490ffdd9081d; ++λ2af0cfd71efc) o(λ7dbfd9417b2e = λ8d6e60f11cce[λ2af0cfd71efc]) && (λdeb6d4c1d3dc[λ7dbfd9417b2e] = d(λ38b48eb55b8e[λ7dbfd9417b2e]));
            return λdeb6d4c1d3dc;
          }(λ38b48eb55b8e) : λ38b48eb55b8e;
        }
        function h(λ38b48eb55b8e, λ2af0cfd71efc) {
          if (λ7dbfd9417b2e && void 0 === λ2af0cfd71efc) return d(λ38b48eb55b8e);
          let λ8d6e60f11cce = Array.isArray(λ2af0cfd71efc), λa2e4b070b9ac = Array.isArray(λ38b48eb55b8e);
          return "object" != typeof λ2af0cfd71efc || null === λ2af0cfd71efc ? λ2af0cfd71efc : λ490ffdd9081d(λ38b48eb55b8e) ? λ8d6e60f11cce && λa2e4b070b9ac ? λdeb6d4c1d3dc(λ38b48eb55b8e, λ2af0cfd71efc) : λ8d6e60f11cce !== λa2e4b070b9ac ? d(λ2af0cfd71efc) : function(λ38b48eb55b8e, λ2af0cfd71efc) {
            let λdeb6d4c1d3dc, λ8d6e60f11cce, λa2e4b070b9ac, λad8be9fc4bec = {}, λ96f87beb4133 = λ7b1b43dfa22d(λ38b48eb55b8e), λf4a3b00f37d3 = λ7b1b43dfa22d(λ2af0cfd71efc);
            for (λdeb6d4c1d3dc = 0, λ8d6e60f11cce = λ96f87beb4133.length; λdeb6d4c1d3dc < λ8d6e60f11cce; ++λdeb6d4c1d3dc) o(λa2e4b070b9ac = λ96f87beb4133[λdeb6d4c1d3dc]) && -1 === λf4a3b00f37d3.indexOf(λa2e4b070b9ac) && (λad8be9fc4bec[λa2e4b070b9ac] = d(λ38b48eb55b8e[λa2e4b070b9ac]));
            for (λdeb6d4c1d3dc = 0, λ8d6e60f11cce = λf4a3b00f37d3.length; λdeb6d4c1d3dc < λ8d6e60f11cce; ++λdeb6d4c1d3dc) if (o(λa2e4b070b9ac = λf4a3b00f37d3[λdeb6d4c1d3dc])) if (λa2e4b070b9ac in λ38b48eb55b8e) -1 !== λ96f87beb4133.indexOf(λa2e4b070b9ac) && (λde98bcd15b04 && λ490ffdd9081d(λ2af0cfd71efc[λa2e4b070b9ac]) && Object.getPrototypeOf(λ2af0cfd71efc[λa2e4b070b9ac]) !== λ754c6b625fdb ? λad8be9fc4bec[λa2e4b070b9ac] = λde98bcd15b04(λ2af0cfd71efc[λa2e4b070b9ac]) : λad8be9fc4bec[λa2e4b070b9ac] = h(λ38b48eb55b8e[λa2e4b070b9ac], λ2af0cfd71efc[λa2e4b070b9ac])); else {
              if (λ7dbfd9417b2e && void 0 === λ2af0cfd71efc[λa2e4b070b9ac]) continue;
              λad8be9fc4bec[λa2e4b070b9ac] = d(λ2af0cfd71efc[λa2e4b070b9ac]);
            }
            return λad8be9fc4bec;
          }(λ38b48eb55b8e, λ2af0cfd71efc) : d(λ2af0cfd71efc);
        }
        return λ38b48eb55b8e?.all ? function() {
          let λ38b48eb55b8e;
          switch (arguments.length) {
           case 0:
            return {};

           case 1:
            return d(arguments[0]);

           case 2:
            return h(arguments[0], arguments[1]);
          }
          for (let λ754c6b625fdb = 0, λ2af0cfd71efc = arguments.length; λ754c6b625fdb < λ2af0cfd71efc; ++λ754c6b625fdb) λ38b48eb55b8e = h(λ38b48eb55b8e, arguments[λ754c6b625fdb]);
          return λ38b48eb55b8e;
        } : h;
      }
      λ38b48eb55b8e.exports = o, λ38b48eb55b8e.exports.default = o, λ38b48eb55b8e.exports.deepmerge = o, 
      Object.defineProperty(λ38b48eb55b8e.exports, "isMergeableObject", {
        get: r
      });
    },
    235(λ38b48eb55b8e, λ754c6b625fdb, λ2af0cfd71efc) {
      λ2af0cfd71efc.d(λ754c6b625fdb, {
        Sr: () => s
      }), WebSocket.CLOSED, WebSocket.CONNECTING, WebSocket.OPEN, EventTarget;
      let λ7b1b43dfa22d = [ 101, 204, 205, 304 ];
      class s extends Response {
        url;
        rawHeaders;
        redirected=!1;
        static fromTransferrableResponse(λ38b48eb55b8e, λ754c6b625fdb) {
          let λ2af0cfd71efc = new s(λ7b1b43dfa22d.includes(λ38b48eb55b8e.status) ? void 0 : λ38b48eb55b8e.body, {
            headers: new Headers(λ38b48eb55b8e.headers),
            status: λ38b48eb55b8e.status,
            statusText: λ38b48eb55b8e.statusText
          });
          return λ2af0cfd71efc.url = λ754c6b625fdb, λ2af0cfd71efc.redirected = λ38b48eb55b8e.status >= 300 && λ38b48eb55b8e.status < 400 && void 0 !== λ38b48eb55b8e.headers.location, 
          λ2af0cfd71efc.rawHeaders = λ38b48eb55b8e.headers, λ2af0cfd71efc;
        }
        static fromNativeResponse(λ38b48eb55b8e) {
          let λ754c6b625fdb = new s(λ7b1b43dfa22d.includes(λ38b48eb55b8e.status) ? void 0 : λ38b48eb55b8e.body, {
            headers: λ38b48eb55b8e.headers,
            status: λ38b48eb55b8e.status,
            statusText: λ38b48eb55b8e.statusText
          });
          return λ754c6b625fdb.url = λ38b48eb55b8e.url, λ754c6b625fdb.rawHeaders = [ ...λ38b48eb55b8e.headers ], 
          λ754c6b625fdb.redirected = λ38b48eb55b8e.redirected, λ754c6b625fdb;
        }
      }
    },
    423(λ38b48eb55b8e, λ754c6b625fdb, λ2af0cfd71efc) {
      λ2af0cfd71efc.d(λ754c6b625fdb, {
        Cx: () => λ5835d1695baf,
        Oy: () => λc39228121487,
        cP: () => λde98bcd15b04,
        ht: () => λc9d0c9dcd7a1,
        k_: () => λ7dbfd9417b2e,
        mK: () => λad8be9fc4bec,
        sb: () => λ021ef26bbdfa,
        uh: () => λf4a3b00f37d3
      });
      let {BareResponse: λ7b1b43dfa22d, CookieJar: λde98bcd15b04, IncrementalHtmlRewriter: λ490ffdd9081d, Plugin: λ7dbfd9417b2e, STUDYJETCLIENT: λdeb6d4c1d3dc, STUDYJETCLIENTNAME: λ8d6e60f11cce, StudyJetClient: λa2e4b070b9ac, StudyJetFetchHandler: λad8be9fc4bec, StudyJetFetchTrackedClient: λ96f87beb4133, StudyJetHeaders: λf4a3b00f37d3, Tap: λ5835d1695baf, createLocationProxy: λ4058992a86d5, defaultConfig: λ021ef26bbdfa, defaultConfigDev: λ943bfd8e73b8, flagEnabled: λb6513b603687, getOwnPropertyDescriptorHandler: λ9e820857307b, getRewriter: λb90427caa417, getScriptBlockTypeString: λad15375995f1, htmlRules: λ385e0d8c461b, isArchiveMimeType: λ7e6e4e268503, isAudioOrVideoMimeType: λd555eefcc11a, isFontMimeType: λ07032d01dec6, isHtmlMimeType: λad74d4a9457b, isImageMimeType: λf85b11fb7169, isInlineDisplayableMimeType: λ8d2f5e990894, isJavascriptMimeType: λd9ce200f4cee, isJavascriptMimeTypeEssenceMatch: λ29510cc02cd9, isModuleScriptType: λ232eccf53192, isScriptType: λ3af2c8791d89, isScriptableMimeType: λ8abbd4289eac, isXmlMimeType: λ55e194524e7b, isZipBasedMimeType: λcb2b580bb2a3, isdedicated: λc8b967b72938, isshared: λ1642f7939f9c, issw: λ3059d161946c, iswindow: λf4b1b6b08384, isworker: λa9b2fc0a7587, parseMimeType: λ6da817e1331e, rewriteBlob: λ056df3250598, rewriteCss: λ52d84d57b499, rewriteHtml: λd332a97e36d3, rewriteJs: λ70bcd552d28f, rewriteJsInner: λ12cb4d697359, rewriteSrcset: λ0d8f9e54eedb, rewriteUrl: λc39228121487, rewriteWorkers: λ84a4bc092b35, setWasm: λc9d0c9dcd7a1, unrewriteBlob: λ820f289b178c, unrewriteCss: λ068e4bc7b6ae, unrewriteHtml: λ7eb5efdbcabf, unrewriteUrl: λ239d83b3e74b, versionInfo: λ6718099c599f} = globalThis.$studyjet;
    }
  }, λ754c6b625fdb = {};
  function r(λ2af0cfd71efc) {
    var λ7b1b43dfa22d = λ754c6b625fdb[λ2af0cfd71efc];
    if (void 0 !== λ7b1b43dfa22d) return λ7b1b43dfa22d.exports;
    var λde98bcd15b04 = λ754c6b625fdb[λ2af0cfd71efc] = {
      exports: {}
    };
    return λ38b48eb55b8e[λ2af0cfd71efc](λde98bcd15b04, λde98bcd15b04.exports, r), λde98bcd15b04.exports;
  }
  r.n = λ38b48eb55b8e => {
    var λ754c6b625fdb = λ38b48eb55b8e && λ38b48eb55b8e.__esModule ? () => λ38b48eb55b8e.default : () => λ38b48eb55b8e;
    return r.d(λ754c6b625fdb, {
      a: λ754c6b625fdb
    }), λ754c6b625fdb;
  }, r.d = (λ38b48eb55b8e, λ754c6b625fdb) => {
    for (var λ2af0cfd71efc in λ754c6b625fdb) r.o(λ754c6b625fdb, λ2af0cfd71efc) && !r.o(λ38b48eb55b8e, λ2af0cfd71efc) && Object.defineProperty(λ38b48eb55b8e, λ2af0cfd71efc, {
      enumerable: !0,
      get: λ754c6b625fdb[λ2af0cfd71efc]
    });
  }, r.o = (λ38b48eb55b8e, λ754c6b625fdb) => Object.prototype.hasOwnProperty.call(λ38b48eb55b8e, λ754c6b625fdb), 
  r.r = λ38b48eb55b8e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λ38b48eb55b8e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(λ38b48eb55b8e, "__esModule", {
      value: !0
    });
  };
  var λ2af0cfd71efc = {};
  (() => {
    r.r(λ2af0cfd71efc), r.d(λ2af0cfd71efc, {
      Controller: () => S,
      Frame: () => v,
      ManagedPlugin: () => d,
      VERSION: () => λ7dbfd9417b2e.x,
      assertRuntimeStudyJetVersion: () => λ7dbfd9417b2e.O,
      config: () => λdeb6d4c1d3dc
    });
    var λ38b48eb55b8e = r(805), λ754c6b625fdb = r(235), λ7b1b43dfa22d = r(986), λde98bcd15b04 = r(423), λ490ffdd9081d = r(286), λ7dbfd9417b2e = r(355);
    let λdeb6d4c1d3dc = {
      prefix: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/study/",
      studyjetPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/studyjet/@r69c18f9bd4ed175c9ea505b8!.js",
      injectPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/controller/@r9e855ac82edc4b51e1340564!.js",
      wasmPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/studyjet/@r55286cfe09d741023cc3e1d6!.wasm",
      virtualWasmPath: "studyjet.wasm.js",
      codec: {
        encode: λ38b48eb55b8e => λ38b48eb55b8e ? encodeURIComponent(λ38b48eb55b8e) : λ38b48eb55b8e,
        decode: λ38b48eb55b8e => λ38b48eb55b8e ? decodeURIComponent(λ38b48eb55b8e) : λ38b48eb55b8e
      }
    }, λ8d6e60f11cce = {
      flags: {
        ...λde98bcd15b04.sb.flags,
        allowFailedIntercepts: !0
      },
      maskedfiles: [ "inject.js", "studyjet.wasm.js" ]
    };
    class d extends λde98bcd15b04.k_ {
      frame=null;
      dependencies=[];
      constructor(λ38b48eb55b8e, λ754c6b625fdb) {
        super(λ38b48eb55b8e), this.dependencies = λ754c6b625fdb;
      }
      install(λ38b48eb55b8e) {
        this.frame = λ38b48eb55b8e;
      }
    }
    let λa2e4b070b9ac = "state", λad8be9fc4bec = "cookies", λ96f87beb4133 = null;
    function u(λ38b48eb55b8e) {
      return "object" == typeof λ38b48eb55b8e && null !== λ38b48eb55b8e && "number" == typeof λ38b48eb55b8e.updatedAt && Number.isFinite(λ38b48eb55b8e.updatedAt) && "string" == typeof λ38b48eb55b8e.cookies ? λ38b48eb55b8e : null;
    }
    function y(λ38b48eb55b8e) {
      return new Promise((λ754c6b625fdb, λ2af0cfd71efc) => {
        λ38b48eb55b8e.onsuccess = () => λ754c6b625fdb(λ38b48eb55b8e.result), λ38b48eb55b8e.onerror = () => λ2af0cfd71efc(λ38b48eb55b8e.error ?? Error("IndexedDB request failed"));
      });
    }
    function m(λ38b48eb55b8e) {
      return new Promise((λ754c6b625fdb, λ2af0cfd71efc) => {
        λ38b48eb55b8e.oncomplete = () => λ754c6b625fdb(), λ38b48eb55b8e.onabort = () => λ2af0cfd71efc(λ38b48eb55b8e.error ?? Error("IndexedDB transaction aborted")), 
        λ38b48eb55b8e.onerror = () => λ2af0cfd71efc(λ38b48eb55b8e.error ?? Error("IndexedDB transaction failed"));
      });
    }
    function g() {
      return λ96f87beb4133 || (λ96f87beb4133 = new Promise((λ38b48eb55b8e, λ754c6b625fdb) => {
        let λ2af0cfd71efc = indexedDB.open("@d941bc65af3", 1);
        λ2af0cfd71efc.onupgradeneeded = () => {
          let λ38b48eb55b8e = λ2af0cfd71efc.result;
          λ38b48eb55b8e.objectStoreNames.contains(λa2e4b070b9ac) || λ38b48eb55b8e.createObjectStore(λa2e4b070b9ac);
        }, λ2af0cfd71efc.onsuccess = () => λ38b48eb55b8e(λ2af0cfd71efc.result), λ2af0cfd71efc.onerror = () => λ754c6b625fdb(λ2af0cfd71efc.error ?? Error("Failed to open cookie database"));
      }));
    }
    async function w() {
      try {
        let λ38b48eb55b8e = (await g()).transaction(λa2e4b070b9ac, "readonly"), λ754c6b625fdb = λ38b48eb55b8e.objectStore(λa2e4b070b9ac), λ2af0cfd71efc = await y(λ754c6b625fdb.get(λad8be9fc4bec));
        return await m(λ38b48eb55b8e), u(λ2af0cfd71efc);
      } catch (λ38b48eb55b8e) {
        return console.error("Failed to read persisted controller cookies:", λ38b48eb55b8e), 
        null;
      }
    }
    async function k(λ38b48eb55b8e, λ754c6b625fdb) {
      try {
        let λ2af0cfd71efc = (await g()).transaction(λa2e4b070b9ac, "readwrite"), λ7b1b43dfa22d = λ2af0cfd71efc.objectStore(λa2e4b070b9ac), λde98bcd15b04 = u(await y(λ7b1b43dfa22d.get(λad8be9fc4bec))), λ490ffdd9081d = Math.max(Date.now(), λ754c6b625fdb + 1, (λde98bcd15b04?.updatedAt ?? 0) + 1);
        return λ7b1b43dfa22d.put({
          updatedAt: λ490ffdd9081d,
          cookies: λ38b48eb55b8e
        }, λad8be9fc4bec), await m(λ2af0cfd71efc), λ490ffdd9081d;
      } catch (λ38b48eb55b8e) {
        return console.error("Failed to persist controller cookies:", λ38b48eb55b8e), λ754c6b625fdb;
      }
    }
    function b() {
      return Math.random().toString(36).substring(2, 10);
    }
    let λf4a3b00f37d3 = (0, λ7b1b43dfa22d.deepmerge)();
    class S {
      init;
      id;
      config;
      studyjetConfig;
      prefix;
      cookieJar=new λde98bcd15b04.cP;
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
      onTabChannelMessage=λ38b48eb55b8e => {
        this.rpc.recieve(λ38b48eb55b8e.data);
      };
      onCookieSyncMessage=λ38b48eb55b8e => {
        let λ754c6b625fdb = "object" == typeof λ38b48eb55b8e.data && null !== λ38b48eb55b8e.data ? λ38b48eb55b8e.data.updatedAt : void 0;
        "number" != typeof λ754c6b625fdb || λ754c6b625fdb <= this.cookieUpdatedAt || (this.cookieSyncDirty = !0, 
        this.loadSavedCookies());
      };
      async loadStudyJetWasm() {
        if (this.wasmAlreadyFetched) return;
        let λ38b48eb55b8e = await fetch(this.config.wasmPath);
        (0, λde98bcd15b04.ht)(await λ38b48eb55b8e.arrayBuffer()), this.wasmAlreadyFetched = !0;
      }
      methods={
        ready: async () => {
          this.readyResolve(), setTimeout(() => {
            this.guardServiceWorkerRevive = !1;
          }, 5e3);
        },
        request: async λ38b48eb55b8e => {
          let λ754c6b625fdb = new URL(λ38b48eb55b8e.rawUrl).pathname, λ2af0cfd71efc = this.frames.find(λ38b48eb55b8e => λ754c6b625fdb.startsWith(λ38b48eb55b8e.prefix));
          if (!λ2af0cfd71efc) throw Error("No frame found for request");
          try {
            if (await this.loadSavedCookies(), λ754c6b625fdb === λ2af0cfd71efc.prefix + this.config.virtualWasmPath) {
              if (!this.wasmPayload) {
                let λ38b48eb55b8e = await fetch(this.config.wasmPath), λ754c6b625fdb = await λ38b48eb55b8e.arrayBuffer(), λ2af0cfd71efc = btoa(new Uint8Array(λ754c6b625fdb).reduce((λ38b48eb55b8e, λ754c6b625fdb) => (λ38b48eb55b8e.push(String.fromCharCode(λ754c6b625fdb)), 
                λ38b48eb55b8e), []).join(""));
                this.wasmPayload = `self.WASM = '${λ2af0cfd71efc}';`;
              }
              return [ {
                body: this.wasmPayload,
                status: 200,
                statusText: "OK",
                headers: [ [ "Content-Type", "application/javascript" ] ]
              }, [] ];
            }
            let λ7b1b43dfa22d = λde98bcd15b04.uh.fromRawHeaders(λ38b48eb55b8e.initialHeaders), λ490ffdd9081d = await λ2af0cfd71efc.fetchHandler.handleFetch({
              initialHeaders: λ7b1b43dfa22d,
              rawClientUrl: λ38b48eb55b8e.rawClientUrl ? new URL(λ38b48eb55b8e.rawClientUrl) : void 0,
              rawUrl: new URL(λ38b48eb55b8e.rawUrl),
              rawReferrer: λ38b48eb55b8e.rawReferrer,
              rawDestination: λ38b48eb55b8e.destination,
              method: λ38b48eb55b8e.method,
              mode: λ38b48eb55b8e.mode,
              referrer: λ38b48eb55b8e.referrer,
              body: λ38b48eb55b8e.body,
              cache: λ38b48eb55b8e.cache,
              clientId: λ38b48eb55b8e.clientId
            });
            return [ {
              body: λ490ffdd9081d.body,
              status: λ490ffdd9081d.status,
              statusText: λ490ffdd9081d.statusText,
              headers: λ490ffdd9081d.headers.toRawHeaders()
            }, λ490ffdd9081d.body instanceof ReadableStream || λ490ffdd9081d.body instanceof ArrayBuffer ? [ λ490ffdd9081d.body ] : [] ];
          } catch (λ754c6b625fdb) {
            let λ7b1b43dfa22d = {
              setResponse: void 0,
              suppressError: !1
            };
            if (await λde98bcd15b04.Cx.dispatch(λ2af0cfd71efc.hooks.error.request, {
              rawrequest: λ38b48eb55b8e,
              error: λ754c6b625fdb
            }, λ7b1b43dfa22d), λ7b1b43dfa22d.suppressError || console.error("Error in controller request handler:", λ754c6b625fdb), 
            λ7b1b43dfa22d.setResponse) return [ λ7b1b43dfa22d.setResponse, [] ];
            throw λ754c6b625fdb;
          }
        },
        initRemoteTransport: async λ754c6b625fdb => {
          let λ2af0cfd71efc = new λ38b48eb55b8e.C({
            request: async ({remote: λ38b48eb55b8e, method: λ754c6b625fdb, body: λ2af0cfd71efc, headers: λ7b1b43dfa22d}) => {
              let λde98bcd15b04 = await this.transport.request(new URL(λ38b48eb55b8e), λ754c6b625fdb, λ2af0cfd71efc, λ7b1b43dfa22d, void 0);
              return [ λde98bcd15b04, [ λde98bcd15b04.body ] ];
            },
            sendSetCookie: async ({cookies: λ38b48eb55b8e, options: λ754c6b625fdb}) => {
              await this.loadSavedCookies(!0), λ754c6b625fdb?.clear && this.cookieJar.clear(), 
              this.applyCookieSyncEntries(λ38b48eb55b8e), await this.persistCookies(), await this.propagateCookieSync(λ38b48eb55b8e, λ754c6b625fdb);
            },
            connect: async ({url: λ38b48eb55b8e, protocols: λ754c6b625fdb, requestHeaders: λ2af0cfd71efc, port: λ7b1b43dfa22d}) => {
              let λde98bcd15b04, λ490ffdd9081d = new Promise(λ38b48eb55b8e => λde98bcd15b04 = λ38b48eb55b8e), [λ7dbfd9417b2e, λdeb6d4c1d3dc] = this.transport.connect(new URL(λ38b48eb55b8e), λ754c6b625fdb, λ2af0cfd71efc, (λ38b48eb55b8e, λ754c6b625fdb) => {
                λde98bcd15b04({
                  result: "success",
                  protocol: λ38b48eb55b8e,
                  extensions: λ754c6b625fdb
                });
              }, λ38b48eb55b8e => {
                λ7b1b43dfa22d.postMessage({
                  type: "data",
                  data: λ38b48eb55b8e
                }, λ38b48eb55b8e instanceof ArrayBuffer ? [ λ38b48eb55b8e ] : []);
              }, (λ38b48eb55b8e, λ754c6b625fdb) => {
                λ7b1b43dfa22d.postMessage({
                  type: "close",
                  code: λ38b48eb55b8e,
                  reason: λ754c6b625fdb
                });
              }, λ38b48eb55b8e => {
                λde98bcd15b04({
                  result: "failure",
                  error: λ38b48eb55b8e
                });
              });
              return λ7b1b43dfa22d.onmessageerror = λ38b48eb55b8e => {
                console.error("Transport port messageerror (this should never happen!)", λ38b48eb55b8e);
              }, λ7b1b43dfa22d.onmessage = ({data: λ38b48eb55b8e}) => {
                "data" === λ38b48eb55b8e.type ? λ7dbfd9417b2e(λ38b48eb55b8e.data) : "close" === λ38b48eb55b8e.type && λdeb6d4c1d3dc(λ38b48eb55b8e.code, λ38b48eb55b8e.reason);
              }, [ await λ490ffdd9081d, [] ];
            }
          }, "transport", (λ38b48eb55b8e, λ2af0cfd71efc) => λ754c6b625fdb.postMessage(λ38b48eb55b8e, λ2af0cfd71efc));
          λ754c6b625fdb.onmessageerror = λ38b48eb55b8e => {
            console.error("Transport port messageerror (this should never happen!)", λ38b48eb55b8e);
          }, λ754c6b625fdb.onmessage = λ38b48eb55b8e => {
            λ2af0cfd71efc.recieve(λ38b48eb55b8e.data);
          }, λ2af0cfd71efc.call("ready", void 0, []);
        }
      };
      constructor(λ754c6b625fdb) {
        this.init = λ754c6b625fdb, (0, λ7dbfd9417b2e.O)(), this.id = b(), this.config = λf4a3b00f37d3(λdeb6d4c1d3dc, λ754c6b625fdb.config || {}), 
        this.studyjetConfig = λf4a3b00f37d3(λ8d6e60f11cce, λde98bcd15b04.sb), this.studyjetConfig = λf4a3b00f37d3(this.studyjetConfig, λ754c6b625fdb.studyjetConfig || {}), 
        this.prefix = this.config.prefix + this.id + "/", this.serviceWorkerController = λ754c6b625fdb.serviceworker, 
        this.ready = Promise.all([ new Promise(λ38b48eb55b8e => {
          this.readyResolve = λ38b48eb55b8e;
        }), this.loadStudyJetWasm(), this.loadSavedCookies(!0) ]).then(() => void 0), this.rpc = new λ38b48eb55b8e.C(this.methods, "tabchannel-" + this.id, (λ38b48eb55b8e, λ754c6b625fdb) => {
          if (!this.port) throw Error("Port not found");
          this.port.postMessage(λ38b48eb55b8e, λ754c6b625fdb);
        }), this.transport = λ754c6b625fdb.transport, this.cookieSyncChannel.addEventListener("message", this.onCookieSyncMessage), 
        this.setupMessagePort(), navigator.serviceWorker.addEventListener("message", λ38b48eb55b8e => {
          if (λ38b48eb55b8e.data?.$controller$setCookie && "object" == typeof λ38b48eb55b8e.data.$controller$setCookie) {
            let λ754c6b625fdb = λ38b48eb55b8e.data.$controller$setCookie;
            if (λ754c6b625fdb.controllerId && λ754c6b625fdb.controllerId !== this.id) return;
            λ754c6b625fdb.options?.clear && this.cookieJar.clear(), this.applyCookieSyncEntries(λ754c6b625fdb.cookies), 
            "string" == typeof λ754c6b625fdb.id && this.serviceWorkerController.postMessage({
              $sw$setCookieDone: {
                id: λ754c6b625fdb.id
              }
            });
            return;
          }
          if (λ38b48eb55b8e.data.$controller$swrevive) {
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
        let λ38b48eb55b8e = new MessageChannel;
        this.port = λ38b48eb55b8e.port1, this.port.addEventListener("message", this.onTabChannelMessage), 
        this.port.start(), this.serviceWorkerController.postMessage({
          $controller$init: {
            prefix: this.prefix,
            id: this.id
          }
        }, [ λ38b48eb55b8e.port2 ]);
      }
      applyCookieSyncEntries(λ38b48eb55b8e) {
        if (Array.isArray(λ38b48eb55b8e)) for (let λ754c6b625fdb of λ38b48eb55b8e) "string" == typeof λ754c6b625fdb?.url && "string" == typeof λ754c6b625fdb.cookie && this.cookieJar.setCookies(λ754c6b625fdb.cookie, new URL(λ754c6b625fdb.url));
      }
      async propagateCookieSync(λ38b48eb55b8e, λ754c6b625fdb = {}) {
        this.port && await this.rpc.call("sendSetCookie", {
          cookies: λ38b48eb55b8e,
          options: λ754c6b625fdb
        });
      }
      async loadSavedCookies(λ38b48eb55b8e = !1) {
        if (λ38b48eb55b8e || this.cookieSyncDirty) return this.cookieSyncPromise || (this.cookieSyncPromise = (async () => {
          let λ38b48eb55b8e = await w();
          λ38b48eb55b8e && λ38b48eb55b8e.updatedAt > this.cookieUpdatedAt && (this.cookieJar.load(λ38b48eb55b8e.cookies), 
          this.cookieUpdatedAt = λ38b48eb55b8e.updatedAt), this.cookieSyncDirty = !1;
        })().finally(() => {
          this.cookieSyncPromise = null;
        })), this.cookieSyncPromise;
      }
      async persistCookies() {
        let λ38b48eb55b8e = await k(this.cookieJar.dump(), this.cookieUpdatedAt);
        λ38b48eb55b8e <= this.cookieUpdatedAt || (this.cookieUpdatedAt = λ38b48eb55b8e, 
        this.cookieSyncDirty = !1, this.cookieSyncChannel.postMessage({
          updatedAt: λ38b48eb55b8e
        }));
      }
      setTransport(λ38b48eb55b8e) {
        for (let λ754c6b625fdb of (this.transport = λ38b48eb55b8e, this.frames)) λ754c6b625fdb.controller.transport = λ38b48eb55b8e, 
        λ754c6b625fdb.fetchHandler.client.transport = λ38b48eb55b8e;
      }
      createFrame(λ38b48eb55b8e, λ754c6b625fdb = {}) {
        if (!this.ready) throw Error("Controller is not ready! Try awaiting controller.wait()");
        let λ2af0cfd71efc = new v(this, λ38b48eb55b8e ??= document.createElement("iframe"), λ754c6b625fdb);
        return this.frames.push(λ2af0cfd71efc), λ2af0cfd71efc;
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
            getInjectScripts: function e(λ38b48eb55b8e, λ754c6b625fdb, λ2af0cfd71efc, λ7b1b43dfa22d, λde98bcd15b04, λ490ffdd9081d) {
              return (λ7dbfd9417b2e, λdeb6d4c1d3dc, λ8d6e60f11cce, λa2e4b070b9ac) => {
                var λad8be9fc4bec;
                return [ λa2e4b070b9ac(λ38b48eb55b8e.studyjetPath), λa2e4b070b9ac(λ2af0cfd71efc.href + λ38b48eb55b8e.virtualWasmPath), λa2e4b070b9ac(λ38b48eb55b8e.injectPath), λa2e4b070b9ac("data:text/javascript;charset=utf-8;base64," + (λad8be9fc4bec = `\n\t\t\t\t\tdocument.querySelectorAll("script[studyjet-injected]").forEach(script => script.remove());\n\t\t\t\t\t$studyjetController.load({\n\t\t\t\t\t\tconfig: ${JSON.stringify(λ38b48eb55b8e)},\n\t\t\t\t\t\tsjconfig: ${JSON.stringify(λ754c6b625fdb)},\n\t\t\t\t\t\tprefix: new URL("${λ2af0cfd71efc.href}"),\n\t\t\t\t\t\tcookies: ${JSON.stringify(λ7b1b43dfa22d.dump())},\n\t\t\t\t\t\tyieldGetInjectScripts: ${e.toString()},\n\t\t\t\t\t\tcodecEncode: ${λde98bcd15b04.toString()},\n\t\t\t\t\t\tcodecDecode: ${λ490ffdd9081d.toString()},\n\t\t\t\t\t\tinitHeaders: ${JSON.stringify(λ8d6e60f11cce.headers ?? [])},\n\t\t\t\t\t\thistory: ${JSON.stringify(λ8d6e60f11cce.history ?? [])},\n\t\t\t\t\t})\n\t\t\t\t`, 
                btoa((new TextEncoder).encode(λad8be9fc4bec).reduce((λ38b48eb55b8e, λ754c6b625fdb) => (λ38b48eb55b8e.push(String.fromCharCode(λ754c6b625fdb)), 
                λ38b48eb55b8e), []).join("")))) ];
              };
            }(this.controller.config, this.controller.studyjetConfig, new URL(this.prefix, location.href), this.controller.cookieJar, this.controller.config.codec.encode, this.controller.config.codec.decode),
            getWorkerInjectScripts: (λ38b48eb55b8e, λ754c6b625fdb, λ2af0cfd71efc) => {
              var λ7b1b43dfa22d;
              let λde98bcd15b04 = "";
              return λde98bcd15b04 += λ2af0cfd71efc(this.controller.config.studyjetPath), λde98bcd15b04 += λ2af0cfd71efc(this.prefix + this.controller.config.virtualWasmPath), 
              λde98bcd15b04 += λ2af0cfd71efc("data:text/javascript;charset=utf-8;base64," + (λ7b1b43dfa22d = `\n\t\t\t\t\t(()=>{\n\t\t\t\t\t\tconst { StudyJetClient, CookieJar, setWasm } = $studyjet;\n\n\t\t\t\t\t\tsetWasm(Uint8Array.from(atob(self.WASM), (c) => c.charCodeAt(0)));\n\t\t\t\t\t\tdelete self.WASM;\n\n\t\t\t\t\t\tconst sjconfig = ${JSON.stringify(this.controller.studyjetConfig)};\n\t\t\t\t\t\tconst prefix = new URL("${this.prefix}", location.href);\n\n\t\t\t\t\t\tconst context = {\n\t\t\t\t\t\t\tconfig: sjconfig,\n\t\t\t\t\t\t\tprefix,\n\t\t\t\t\t\t\tinterface: {\n\t\t\t\t\t\t\t\tcodecEncode: ${this.controller.config.codec.encode.toString()},\n\t\t\t\t\t\t\t\tcodecDecode: ${this.controller.config.codec.decode.toString()},\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t};\n\n\t\t\t\t\t\tconst client = new StudyJetClient(globalThis, {\n\t\t\t\t\t\t\tcontext,\n\t\t\t\t\t\t\ttransport: null,\n\t\t\t\t\t\t});\n\n\t\t\t\t\t\tclient.hook();\n\t\t\t\t\t})();\n\t\t\t\t\t`, 
              btoa((new TextEncoder).encode(λ7b1b43dfa22d).reduce((λ38b48eb55b8e, λ754c6b625fdb) => (λ38b48eb55b8e.push(String.fromCharCode(λ754c6b625fdb)), 
              λ38b48eb55b8e), []).join(""))));
            },
            codecEncode: this.controller.config.codec.encode,
            codecDecode: this.controller.config.codec.decode
          }
        };
      }
      plugins=[];
      constructor(λ38b48eb55b8e, λ2af0cfd71efc, λ7b1b43dfa22d = {}) {
        for (const λ7dbfd9417b2e of (this.controller = λ38b48eb55b8e, this.element = λ2af0cfd71efc, 
        this.options = λ7b1b43dfa22d, this.id = b(), this.prefix = this.controller.prefix + this.id + "/", 
        this.fetchHandler = new λde98bcd15b04.mK({
          crossOriginIsolated: self.crossOriginIsolated,
          context: this.context,
          transport: λ38b48eb55b8e.transport,
          async sendSetCookie(λ754c6b625fdb, λ2af0cfd71efc) {
            await λ38b48eb55b8e.persistCookies(), await λ38b48eb55b8e.propagateCookieSync(λ754c6b625fdb.map(({url: λ38b48eb55b8e, cookie: λ754c6b625fdb}) => ({
              url: λ38b48eb55b8e.href,
              cookie: λ754c6b625fdb
            })), λ2af0cfd71efc);
          },
          fetchBlobUrl: async λ38b48eb55b8e => λ754c6b625fdb.Sr.fromNativeResponse(await fetch(λ38b48eb55b8e)),
          fetchDataUrl: async λ38b48eb55b8e => λ754c6b625fdb.Sr.fromNativeResponse(await fetch(λ38b48eb55b8e))
        }), this.hooks = {
          fetch: this.fetchHandler.hooks.fetch,
          init: λde98bcd15b04.Cx.create(),
          error: λde98bcd15b04.Cx.create()
        }, λ2af0cfd71efc[λ490ffdd9081d.I] = this, this.plugins = λ7b1b43dfa22d.plugins ?? [], 
        this.plugins)) {
          for (const λ38b48eb55b8e of λ7dbfd9417b2e.dependencies) if (!this.plugins.find(λ754c6b625fdb => λ754c6b625fdb.name === λ38b48eb55b8e)) throw Error(`Dependency ${λ38b48eb55b8e} not found for plugin ${λ7dbfd9417b2e.name}`);
          λ7dbfd9417b2e.install(this);
        }
      }
      getPlugin(λ38b48eb55b8e) {
        let λ754c6b625fdb = this.plugins.find(λ754c6b625fdb => λ754c6b625fdb.name === λ38b48eb55b8e);
        if (!λ754c6b625fdb) throw Error(`Plugin ${λ38b48eb55b8e} not found`);
        return λ754c6b625fdb;
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
      go(λ38b48eb55b8e) {
        let λ754c6b625fdb = (0, λde98bcd15b04.Oy)(λ38b48eb55b8e, this.context, {
          origin: new URL(location.href),
          base: new URL(location.href)
        });
        this.element.src = λ754c6b625fdb;
      }
    }
  })(), $studyjetController = λ2af0cfd71efc;
})();
