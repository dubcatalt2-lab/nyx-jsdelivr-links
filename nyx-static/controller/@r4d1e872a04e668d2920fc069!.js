var $studyjetController;

(() => {
  var λ05a08b96b122 = {
    286(λ05a08b96b122, λeaf4a2f57d2f, λad49342d9a29) {
      λad49342d9a29.d(λeaf4a2f57d2f, {
        I: () => λ6e9d59ba3a91
      });
      let λ6e9d59ba3a91 = Symbol.for("controller frame handle");
    },
    355(λ05a08b96b122, λeaf4a2f57d2f, λad49342d9a29) {
      λad49342d9a29.d(λeaf4a2f57d2f, {
        O: () => s,
        x: () => λ6e9d59ba3a91
      });
      let λ6e9d59ba3a91 = "0.0.14";
      function s() {
        if ("undefined" == typeof $studyjet) throw Error("@mercuryworkshop/studyjet is not loaded. Load studyjet before the controller.");
        var λ05a08b96b122 = "2.0.67-alpha.2", λeaf4a2f57d2f = $studyjet.versionInfo.version;
        if (λ05a08b96b122 !== λeaf4a2f57d2f) throw Error(`@mercuryworkshop/studyjet version mismatch: this build expects ${λ05a08b96b122}, but the loaded runtime is ${λeaf4a2f57d2f}`);
      }
    },
    805(λ05a08b96b122, λeaf4a2f57d2f, λad49342d9a29) {
      λad49342d9a29.d(λeaf4a2f57d2f, {
        C: () => o
      });
      class o {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λ05a08b96b122, λeaf4a2f57d2f, λad49342d9a29) {
          this.methods = λ05a08b96b122, this.id = λeaf4a2f57d2f, this.sendRaw = λad49342d9a29;
        }
        recieve(λ05a08b96b122) {
          if (null == λ05a08b96b122 || "object" != typeof λ05a08b96b122) return;
          let λeaf4a2f57d2f = λ05a08b96b122[this.id];
          if (null == λeaf4a2f57d2f || "object" != typeof λeaf4a2f57d2f) return;
          let λad49342d9a29 = λeaf4a2f57d2f.$type;
          if ("response" === λad49342d9a29) {
            let λ05a08b96b122 = λeaf4a2f57d2f.$token, λad49342d9a29 = λeaf4a2f57d2f.$data, λ6e9d59ba3a91 = λeaf4a2f57d2f.$error, λa8cc96583f57 = this.promiseCallbacks.get(λ05a08b96b122);
            if (!λa8cc96583f57) return;
            this.promiseCallbacks.delete(λ05a08b96b122), void 0 !== λ6e9d59ba3a91 ? λa8cc96583f57.reject(Error(λ6e9d59ba3a91)) : λa8cc96583f57.resolve(λad49342d9a29);
          } else if ("request" === λad49342d9a29) {
            let λ05a08b96b122 = λeaf4a2f57d2f.$method, λad49342d9a29 = λeaf4a2f57d2f.$args;
            this.methods[λ05a08b96b122](λad49342d9a29).then(λ05a08b96b122 => {
              this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λeaf4a2f57d2f.$token,
                  $data: λ05a08b96b122?.[0]
                }
              }, λ05a08b96b122?.[1]);
            }).catch(λ05a08b96b122 => {
              console.error(λ05a08b96b122), this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λeaf4a2f57d2f.$token,
                  $error: λ05a08b96b122?.toString() || "Unknown error"
                }
              }, []);
            });
          }
        }
        call(λ05a08b96b122, λeaf4a2f57d2f, λad49342d9a29 = []) {
          let λ6e9d59ba3a91 = this.counter++;
          return new Promise((λa8cc96583f57, λaf0b23b404ab) => {
            this.promiseCallbacks.set(λ6e9d59ba3a91, {
              resolve: λa8cc96583f57,
              reject: λaf0b23b404ab
            }), this.sendRaw({
              [this.id]: {
                $type: "request",
                $method: λ05a08b96b122,
                $args: λeaf4a2f57d2f,
                $token: λ6e9d59ba3a91
              }
            }, λad49342d9a29);
          });
        }
      }
    },
    986(λ05a08b96b122) {
      let λeaf4a2f57d2f = Object.getPrototypeOf({});
      function r() {
        return function(λ05a08b96b122) {
          return "object" == typeof λ05a08b96b122 && null !== λ05a08b96b122 && !(λ05a08b96b122 instanceof RegExp) && !(λ05a08b96b122 instanceof Date);
        };
      }
      function o(λ05a08b96b122) {
        function o(λ05a08b96b122) {
          return "constructor" !== λ05a08b96b122 && "prototype" !== λ05a08b96b122 && "__proto__" !== λ05a08b96b122;
        }
        let λad49342d9a29 = Object.prototype.propertyIsEnumerable, λ6e9d59ba3a91 = λ05a08b96b122?.symbols ? function(λ05a08b96b122) {
          let λeaf4a2f57d2f = Object.keys(λ05a08b96b122), λ6e9d59ba3a91 = Object.getOwnPropertySymbols(λ05a08b96b122);
          for (let λa8cc96583f57 = 0, λaf0b23b404ab = λ6e9d59ba3a91.length; λa8cc96583f57 < λaf0b23b404ab; ++λa8cc96583f57) λad49342d9a29.call(λ05a08b96b122, λ6e9d59ba3a91[λa8cc96583f57]) && λeaf4a2f57d2f.push(λ6e9d59ba3a91[λa8cc96583f57]);
          return λeaf4a2f57d2f;
        } : Object.keys, λa8cc96583f57 = "function" == typeof λ05a08b96b122?.cloneProtoObject ? λ05a08b96b122.cloneProtoObject : void 0, λaf0b23b404ab = "function" == typeof λ05a08b96b122?.isMergeableObject ? λ05a08b96b122.isMergeableObject : r(), λ101e4467a773 = λ05a08b96b122?.onlyDefinedProperties === !0, λ02a8b2655000 = λ05a08b96b122 && "function" == typeof λ05a08b96b122.mergeArray ? λ05a08b96b122.mergeArray({
          clone: d,
          deepmerge: h,
          getKeys: λ6e9d59ba3a91,
          isMergeableObject: λaf0b23b404ab
        }) : function(λ05a08b96b122, λeaf4a2f57d2f) {
          let λad49342d9a29 = λ05a08b96b122.length, λ6e9d59ba3a91 = λeaf4a2f57d2f.length, λa8cc96583f57 = 0, λaf0b23b404ab = Array(λad49342d9a29 + λ6e9d59ba3a91);
          for (;λa8cc96583f57 < λad49342d9a29; ++λa8cc96583f57) λaf0b23b404ab[λa8cc96583f57] = d(λ05a08b96b122[λa8cc96583f57]);
          for (λa8cc96583f57 = 0; λa8cc96583f57 < λ6e9d59ba3a91; ++λa8cc96583f57) λaf0b23b404ab[λa8cc96583f57 + λad49342d9a29] = d(λeaf4a2f57d2f[λa8cc96583f57]);
          return λaf0b23b404ab;
        };
        function d(λ05a08b96b122) {
          return λaf0b23b404ab(λ05a08b96b122) ? Array.isArray(λ05a08b96b122) ? function(λ05a08b96b122) {
            let λeaf4a2f57d2f = 0, λad49342d9a29 = λ05a08b96b122.length, λ6e9d59ba3a91 = Array(λad49342d9a29);
            for (;λeaf4a2f57d2f < λad49342d9a29; ++λeaf4a2f57d2f) λ6e9d59ba3a91[λeaf4a2f57d2f] = d(λ05a08b96b122[λeaf4a2f57d2f]);
            return λ6e9d59ba3a91;
          }(λ05a08b96b122) : function(λ05a08b96b122) {
            let λad49342d9a29, λaf0b23b404ab, λ101e4467a773, λ02a8b2655000 = {};
            if (λa8cc96583f57 && Object.getPrototypeOf(λ05a08b96b122) !== λeaf4a2f57d2f) return λa8cc96583f57(λ05a08b96b122);
            let λ61010f9ab0e3 = λ6e9d59ba3a91(λ05a08b96b122);
            for (λad49342d9a29 = 0, λaf0b23b404ab = λ61010f9ab0e3.length; λad49342d9a29 < λaf0b23b404ab; ++λad49342d9a29) o(λ101e4467a773 = λ61010f9ab0e3[λad49342d9a29]) && (λ02a8b2655000[λ101e4467a773] = d(λ05a08b96b122[λ101e4467a773]));
            return λ02a8b2655000;
          }(λ05a08b96b122) : λ05a08b96b122;
        }
        function h(λ05a08b96b122, λad49342d9a29) {
          if (λ101e4467a773 && void 0 === λad49342d9a29) return d(λ05a08b96b122);
          let λ61010f9ab0e3 = Array.isArray(λad49342d9a29), λfc64a680fcb0 = Array.isArray(λ05a08b96b122);
          return "object" != typeof λad49342d9a29 || null === λad49342d9a29 ? λad49342d9a29 : λaf0b23b404ab(λ05a08b96b122) ? λ61010f9ab0e3 && λfc64a680fcb0 ? λ02a8b2655000(λ05a08b96b122, λad49342d9a29) : λ61010f9ab0e3 !== λfc64a680fcb0 ? d(λad49342d9a29) : function(λ05a08b96b122, λad49342d9a29) {
            let λ02a8b2655000, λ61010f9ab0e3, λfc64a680fcb0, λ78971c5011fe = {}, λ0748377e064a = λ6e9d59ba3a91(λ05a08b96b122), λe5d1074491a9 = λ6e9d59ba3a91(λad49342d9a29);
            for (λ02a8b2655000 = 0, λ61010f9ab0e3 = λ0748377e064a.length; λ02a8b2655000 < λ61010f9ab0e3; ++λ02a8b2655000) o(λfc64a680fcb0 = λ0748377e064a[λ02a8b2655000]) && -1 === λe5d1074491a9.indexOf(λfc64a680fcb0) && (λ78971c5011fe[λfc64a680fcb0] = d(λ05a08b96b122[λfc64a680fcb0]));
            for (λ02a8b2655000 = 0, λ61010f9ab0e3 = λe5d1074491a9.length; λ02a8b2655000 < λ61010f9ab0e3; ++λ02a8b2655000) if (o(λfc64a680fcb0 = λe5d1074491a9[λ02a8b2655000])) if (λfc64a680fcb0 in λ05a08b96b122) -1 !== λ0748377e064a.indexOf(λfc64a680fcb0) && (λa8cc96583f57 && λaf0b23b404ab(λad49342d9a29[λfc64a680fcb0]) && Object.getPrototypeOf(λad49342d9a29[λfc64a680fcb0]) !== λeaf4a2f57d2f ? λ78971c5011fe[λfc64a680fcb0] = λa8cc96583f57(λad49342d9a29[λfc64a680fcb0]) : λ78971c5011fe[λfc64a680fcb0] = h(λ05a08b96b122[λfc64a680fcb0], λad49342d9a29[λfc64a680fcb0])); else {
              if (λ101e4467a773 && void 0 === λad49342d9a29[λfc64a680fcb0]) continue;
              λ78971c5011fe[λfc64a680fcb0] = d(λad49342d9a29[λfc64a680fcb0]);
            }
            return λ78971c5011fe;
          }(λ05a08b96b122, λad49342d9a29) : d(λad49342d9a29);
        }
        return λ05a08b96b122?.all ? function() {
          let λ05a08b96b122;
          switch (arguments.length) {
           case 0:
            return {};

           case 1:
            return d(arguments[0]);

           case 2:
            return h(arguments[0], arguments[1]);
          }
          for (let λeaf4a2f57d2f = 0, λad49342d9a29 = arguments.length; λeaf4a2f57d2f < λad49342d9a29; ++λeaf4a2f57d2f) λ05a08b96b122 = h(λ05a08b96b122, arguments[λeaf4a2f57d2f]);
          return λ05a08b96b122;
        } : h;
      }
      λ05a08b96b122.exports = o, λ05a08b96b122.exports.default = o, λ05a08b96b122.exports.deepmerge = o, 
      Object.defineProperty(λ05a08b96b122.exports, "isMergeableObject", {
        get: r
      });
    },
    235(λ05a08b96b122, λeaf4a2f57d2f, λad49342d9a29) {
      λad49342d9a29.d(λeaf4a2f57d2f, {
        Sr: () => s
      }), WebSocket.CLOSED, WebSocket.CONNECTING, WebSocket.OPEN, EventTarget;
      let λ6e9d59ba3a91 = [ 101, 204, 205, 304 ];
      class s extends Response {
        url;
        rawHeaders;
        redirected=!1;
        static fromTransferrableResponse(λ05a08b96b122, λeaf4a2f57d2f) {
          let λad49342d9a29 = new s(λ6e9d59ba3a91.includes(λ05a08b96b122.status) ? void 0 : λ05a08b96b122.body, {
            headers: new Headers(λ05a08b96b122.headers),
            status: λ05a08b96b122.status,
            statusText: λ05a08b96b122.statusText
          });
          return λad49342d9a29.url = λeaf4a2f57d2f, λad49342d9a29.redirected = λ05a08b96b122.status >= 300 && λ05a08b96b122.status < 400 && void 0 !== λ05a08b96b122.headers.location, 
          λad49342d9a29.rawHeaders = λ05a08b96b122.headers, λad49342d9a29;
        }
        static fromNativeResponse(λ05a08b96b122) {
          let λeaf4a2f57d2f = new s(λ6e9d59ba3a91.includes(λ05a08b96b122.status) ? void 0 : λ05a08b96b122.body, {
            headers: λ05a08b96b122.headers,
            status: λ05a08b96b122.status,
            statusText: λ05a08b96b122.statusText
          });
          return λeaf4a2f57d2f.url = λ05a08b96b122.url, λeaf4a2f57d2f.rawHeaders = [ ...λ05a08b96b122.headers ], 
          λeaf4a2f57d2f.redirected = λ05a08b96b122.redirected, λeaf4a2f57d2f;
        }
      }
    },
    423(λ05a08b96b122, λeaf4a2f57d2f, λad49342d9a29) {
      λad49342d9a29.d(λeaf4a2f57d2f, {
        Cx: () => λbac12072c798,
        Oy: () => λ5c0b349b3a89,
        cP: () => λa8cc96583f57,
        ht: () => λ94ba83db4c9b,
        k_: () => λ101e4467a773,
        mK: () => λ78971c5011fe,
        sb: () => λ4c0cbf0ae847,
        uh: () => λe5d1074491a9
      });
      let {BareResponse: λ6e9d59ba3a91, CookieJar: λa8cc96583f57, IncrementalHtmlRewriter: λaf0b23b404ab, Plugin: λ101e4467a773, STUDYJETCLIENT: λ02a8b2655000, STUDYJETCLIENTNAME: λ61010f9ab0e3, StudyJetClient: λfc64a680fcb0, StudyJetFetchHandler: λ78971c5011fe, StudyJetFetchTrackedClient: λ0748377e064a, StudyJetHeaders: λe5d1074491a9, Tap: λbac12072c798, createLocationProxy: λ020e6c892280, defaultConfig: λ4c0cbf0ae847, defaultConfigDev: λ0a04881eb0dc, flagEnabled: λ93ed63c41634, getOwnPropertyDescriptorHandler: λ7dc910b00ef6, getRewriter: λf4521cbac294, getScriptBlockTypeString: λ4eb1178ca2aa, htmlRules: λ9a9bf5dd8811, isArchiveMimeType: λb30128c0e28a, isAudioOrVideoMimeType: λd7edc573a832, isFontMimeType: λ43a581e0a61c, isHtmlMimeType: λ3092aa835c82, isImageMimeType: λ3f23303c6a57, isInlineDisplayableMimeType: λc59329f4ede4, isJavascriptMimeType: λ7f60ce2fde6e, isJavascriptMimeTypeEssenceMatch: λ0b0d8cb72031, isModuleScriptType: λ220ec9d4bb73, isScriptType: λdc662ceee42c, isScriptableMimeType: λf3192e4f2a90, isXmlMimeType: λ5bb58dac0102, isZipBasedMimeType: λ0cb7bf0c7c34, isdedicated: λ15b6d7a75946, isshared: λ243888a0e6af, issw: λa0c65a189c10, iswindow: λ6c6b5379a8ce, isworker: λabd10ecae9b0, parseMimeType: λd4e4b54802af, rewriteBlob: λf03982ec1533, rewriteCss: λ07b710a1b826, rewriteHtml: λ4ae1cbfed8d3, rewriteJs: λb019a3719811, rewriteJsInner: λ92fc8b0296a5, rewriteSrcset: λd192e2cf5dd3, rewriteUrl: λ5c0b349b3a89, rewriteWorkers: λe6c54a5f4d36, setWasm: λ94ba83db4c9b, unrewriteBlob: λ7bc87534658b, unrewriteCss: λ49f069c29c36, unrewriteHtml: λ010a26e9d03d, unrewriteUrl: λ747cebcd1c4d, versionInfo: λ2345b24716b7} = globalThis.$studyjet;
    }
  }, λeaf4a2f57d2f = {};
  function r(λad49342d9a29) {
    var λ6e9d59ba3a91 = λeaf4a2f57d2f[λad49342d9a29];
    if (void 0 !== λ6e9d59ba3a91) return λ6e9d59ba3a91.exports;
    var λa8cc96583f57 = λeaf4a2f57d2f[λad49342d9a29] = {
      exports: {}
    };
    return λ05a08b96b122[λad49342d9a29](λa8cc96583f57, λa8cc96583f57.exports, r), λa8cc96583f57.exports;
  }
  r.n = λ05a08b96b122 => {
    var λeaf4a2f57d2f = λ05a08b96b122 && λ05a08b96b122.__esModule ? () => λ05a08b96b122.default : () => λ05a08b96b122;
    return r.d(λeaf4a2f57d2f, {
      a: λeaf4a2f57d2f
    }), λeaf4a2f57d2f;
  }, r.d = (λ05a08b96b122, λeaf4a2f57d2f) => {
    for (var λad49342d9a29 in λeaf4a2f57d2f) r.o(λeaf4a2f57d2f, λad49342d9a29) && !r.o(λ05a08b96b122, λad49342d9a29) && Object.defineProperty(λ05a08b96b122, λad49342d9a29, {
      enumerable: !0,
      get: λeaf4a2f57d2f[λad49342d9a29]
    });
  }, r.o = (λ05a08b96b122, λeaf4a2f57d2f) => Object.prototype.hasOwnProperty.call(λ05a08b96b122, λeaf4a2f57d2f), 
  r.r = λ05a08b96b122 => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λ05a08b96b122, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(λ05a08b96b122, "__esModule", {
      value: !0
    });
  };
  var λad49342d9a29 = {};
  (() => {
    r.r(λad49342d9a29), r.d(λad49342d9a29, {
      Controller: () => S,
      Frame: () => v,
      ManagedPlugin: () => d,
      VERSION: () => λ101e4467a773.x,
      assertRuntimeStudyJetVersion: () => λ101e4467a773.O,
      config: () => λ02a8b2655000
    });
    var λ05a08b96b122 = r(805), λeaf4a2f57d2f = r(235), λ6e9d59ba3a91 = r(986), λa8cc96583f57 = r(423), λaf0b23b404ab = r(286), λ101e4467a773 = r(355);
    let λ02a8b2655000 = {
      prefix: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/study/",
      studyjetPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/studyjet/@r69c18f9bd4ed175c9ea505b8!.js",
      injectPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/controller/@r9e855ac82edc4b51e1340564!.js",
      wasmPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/studyjet/@r55286cfe09d741023cc3e1d6!.wasm",
      virtualWasmPath: "studyjet.wasm.js",
      codec: {
        encode: λ05a08b96b122 => λ05a08b96b122 ? encodeURIComponent(λ05a08b96b122) : λ05a08b96b122,
        decode: λ05a08b96b122 => λ05a08b96b122 ? decodeURIComponent(λ05a08b96b122) : λ05a08b96b122
      }
    }, λ61010f9ab0e3 = {
      flags: {
        ...λa8cc96583f57.sb.flags,
        allowFailedIntercepts: !0
      },
      maskedfiles: [ "inject.js", "studyjet.wasm.js" ]
    };
    class d extends λa8cc96583f57.k_ {
      frame=null;
      dependencies=[];
      constructor(λ05a08b96b122, λeaf4a2f57d2f) {
        super(λ05a08b96b122), this.dependencies = λeaf4a2f57d2f;
      }
      install(λ05a08b96b122) {
        this.frame = λ05a08b96b122;
      }
    }
    let λfc64a680fcb0 = "state", λ78971c5011fe = "cookies", λ0748377e064a = null;
    function u(λ05a08b96b122) {
      return "object" == typeof λ05a08b96b122 && null !== λ05a08b96b122 && "number" == typeof λ05a08b96b122.updatedAt && Number.isFinite(λ05a08b96b122.updatedAt) && "string" == typeof λ05a08b96b122.cookies ? λ05a08b96b122 : null;
    }
    function y(λ05a08b96b122) {
      return new Promise((λeaf4a2f57d2f, λad49342d9a29) => {
        λ05a08b96b122.onsuccess = () => λeaf4a2f57d2f(λ05a08b96b122.result), λ05a08b96b122.onerror = () => λad49342d9a29(λ05a08b96b122.error ?? Error("IndexedDB request failed"));
      });
    }
    function m(λ05a08b96b122) {
      return new Promise((λeaf4a2f57d2f, λad49342d9a29) => {
        λ05a08b96b122.oncomplete = () => λeaf4a2f57d2f(), λ05a08b96b122.onabort = () => λad49342d9a29(λ05a08b96b122.error ?? Error("IndexedDB transaction aborted")), 
        λ05a08b96b122.onerror = () => λad49342d9a29(λ05a08b96b122.error ?? Error("IndexedDB transaction failed"));
      });
    }
    function g() {
      return λ0748377e064a || (λ0748377e064a = new Promise((λ05a08b96b122, λeaf4a2f57d2f) => {
        let λad49342d9a29 = indexedDB.open("@d941bc65af3", 1);
        λad49342d9a29.onupgradeneeded = () => {
          let λ05a08b96b122 = λad49342d9a29.result;
          λ05a08b96b122.objectStoreNames.contains(λfc64a680fcb0) || λ05a08b96b122.createObjectStore(λfc64a680fcb0);
        }, λad49342d9a29.onsuccess = () => λ05a08b96b122(λad49342d9a29.result), λad49342d9a29.onerror = () => λeaf4a2f57d2f(λad49342d9a29.error ?? Error("Failed to open cookie database"));
      }));
    }
    async function w() {
      try {
        let λ05a08b96b122 = (await g()).transaction(λfc64a680fcb0, "readonly"), λeaf4a2f57d2f = λ05a08b96b122.objectStore(λfc64a680fcb0), λad49342d9a29 = await y(λeaf4a2f57d2f.get(λ78971c5011fe));
        return await m(λ05a08b96b122), u(λad49342d9a29);
      } catch (λ05a08b96b122) {
        return console.error("Failed to read persisted controller cookies:", λ05a08b96b122), 
        null;
      }
    }
    async function k(λ05a08b96b122, λeaf4a2f57d2f) {
      try {
        let λad49342d9a29 = (await g()).transaction(λfc64a680fcb0, "readwrite"), λ6e9d59ba3a91 = λad49342d9a29.objectStore(λfc64a680fcb0), λa8cc96583f57 = u(await y(λ6e9d59ba3a91.get(λ78971c5011fe))), λaf0b23b404ab = Math.max(Date.now(), λeaf4a2f57d2f + 1, (λa8cc96583f57?.updatedAt ?? 0) + 1);
        return λ6e9d59ba3a91.put({
          updatedAt: λaf0b23b404ab,
          cookies: λ05a08b96b122
        }, λ78971c5011fe), await m(λad49342d9a29), λaf0b23b404ab;
      } catch (λ05a08b96b122) {
        return console.error("Failed to persist controller cookies:", λ05a08b96b122), λeaf4a2f57d2f;
      }
    }
    function b() {
      return Math.random().toString(36).substring(2, 10);
    }
    let λe5d1074491a9 = (0, λ6e9d59ba3a91.deepmerge)();
    class S {
      init;
      id;
      config;
      studyjetConfig;
      prefix;
      cookieJar=new λa8cc96583f57.cP;
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
      onTabChannelMessage=λ05a08b96b122 => {
        this.rpc.recieve(λ05a08b96b122.data);
      };
      onCookieSyncMessage=λ05a08b96b122 => {
        let λeaf4a2f57d2f = "object" == typeof λ05a08b96b122.data && null !== λ05a08b96b122.data ? λ05a08b96b122.data.updatedAt : void 0;
        "number" != typeof λeaf4a2f57d2f || λeaf4a2f57d2f <= this.cookieUpdatedAt || (this.cookieSyncDirty = !0, 
        this.loadSavedCookies());
      };
      async loadStudyJetWasm() {
        if (this.wasmAlreadyFetched) return;
        let λ05a08b96b122 = await fetch(this.config.wasmPath);
        (0, λa8cc96583f57.ht)(await λ05a08b96b122.arrayBuffer()), this.wasmAlreadyFetched = !0;
      }
      methods={
        ready: async () => {
          this.readyResolve(), setTimeout(() => {
            this.guardServiceWorkerRevive = !1;
          }, 5e3);
        },
        request: async λ05a08b96b122 => {
          let λeaf4a2f57d2f = new URL(λ05a08b96b122.rawUrl).pathname, λad49342d9a29 = this.frames.find(λ05a08b96b122 => λeaf4a2f57d2f.startsWith(λ05a08b96b122.prefix));
          if (!λad49342d9a29) throw Error("No frame found for request");
          try {
            if (await this.loadSavedCookies(), λeaf4a2f57d2f === λad49342d9a29.prefix + this.config.virtualWasmPath) {
              if (!this.wasmPayload) {
                let λ05a08b96b122 = await fetch(this.config.wasmPath), λeaf4a2f57d2f = await λ05a08b96b122.arrayBuffer(), λad49342d9a29 = btoa(new Uint8Array(λeaf4a2f57d2f).reduce((λ05a08b96b122, λeaf4a2f57d2f) => (λ05a08b96b122.push(String.fromCharCode(λeaf4a2f57d2f)), 
                λ05a08b96b122), []).join(""));
                this.wasmPayload = `self.WASM = '${λad49342d9a29}';`;
              }
              return [ {
                body: this.wasmPayload,
                status: 200,
                statusText: "OK",
                headers: [ [ "Content-Type", "application/javascript" ] ]
              }, [] ];
            }
            let λ6e9d59ba3a91 = λa8cc96583f57.uh.fromRawHeaders(λ05a08b96b122.initialHeaders), λaf0b23b404ab = await λad49342d9a29.fetchHandler.handleFetch({
              initialHeaders: λ6e9d59ba3a91,
              rawClientUrl: λ05a08b96b122.rawClientUrl ? new URL(λ05a08b96b122.rawClientUrl) : void 0,
              rawUrl: new URL(λ05a08b96b122.rawUrl),
              rawReferrer: λ05a08b96b122.rawReferrer,
              rawDestination: λ05a08b96b122.destination,
              method: λ05a08b96b122.method,
              mode: λ05a08b96b122.mode,
              referrer: λ05a08b96b122.referrer,
              body: λ05a08b96b122.body,
              cache: λ05a08b96b122.cache,
              clientId: λ05a08b96b122.clientId
            });
            return [ {
              body: λaf0b23b404ab.body,
              status: λaf0b23b404ab.status,
              statusText: λaf0b23b404ab.statusText,
              headers: λaf0b23b404ab.headers.toRawHeaders()
            }, λaf0b23b404ab.body instanceof ReadableStream || λaf0b23b404ab.body instanceof ArrayBuffer ? [ λaf0b23b404ab.body ] : [] ];
          } catch (λeaf4a2f57d2f) {
            let λ6e9d59ba3a91 = {
              setResponse: void 0,
              suppressError: !1
            };
            if (await λa8cc96583f57.Cx.dispatch(λad49342d9a29.hooks.error.request, {
              rawrequest: λ05a08b96b122,
              error: λeaf4a2f57d2f
            }, λ6e9d59ba3a91), λ6e9d59ba3a91.suppressError || console.error("Error in controller request handler:", λeaf4a2f57d2f), 
            λ6e9d59ba3a91.setResponse) return [ λ6e9d59ba3a91.setResponse, [] ];
            throw λeaf4a2f57d2f;
          }
        },
        initRemoteTransport: async λeaf4a2f57d2f => {
          let λad49342d9a29 = new λ05a08b96b122.C({
            request: async ({remote: λ05a08b96b122, method: λeaf4a2f57d2f, body: λad49342d9a29, headers: λ6e9d59ba3a91}) => {
              let λa8cc96583f57 = await this.transport.request(new URL(λ05a08b96b122), λeaf4a2f57d2f, λad49342d9a29, λ6e9d59ba3a91, void 0);
              return [ λa8cc96583f57, [ λa8cc96583f57.body ] ];
            },
            sendSetCookie: async ({cookies: λ05a08b96b122, options: λeaf4a2f57d2f}) => {
              await this.loadSavedCookies(!0), λeaf4a2f57d2f?.clear && this.cookieJar.clear(), 
              this.applyCookieSyncEntries(λ05a08b96b122), await this.persistCookies(), await this.propagateCookieSync(λ05a08b96b122, λeaf4a2f57d2f);
            },
            connect: async ({url: λ05a08b96b122, protocols: λeaf4a2f57d2f, requestHeaders: λad49342d9a29, port: λ6e9d59ba3a91}) => {
              let λa8cc96583f57, λaf0b23b404ab = new Promise(λ05a08b96b122 => λa8cc96583f57 = λ05a08b96b122), [λ101e4467a773, λ02a8b2655000] = this.transport.connect(new URL(λ05a08b96b122), λeaf4a2f57d2f, λad49342d9a29, (λ05a08b96b122, λeaf4a2f57d2f) => {
                λa8cc96583f57({
                  result: "success",
                  protocol: λ05a08b96b122,
                  extensions: λeaf4a2f57d2f
                });
              }, λ05a08b96b122 => {
                λ6e9d59ba3a91.postMessage({
                  type: "data",
                  data: λ05a08b96b122
                }, λ05a08b96b122 instanceof ArrayBuffer ? [ λ05a08b96b122 ] : []);
              }, (λ05a08b96b122, λeaf4a2f57d2f) => {
                λ6e9d59ba3a91.postMessage({
                  type: "close",
                  code: λ05a08b96b122,
                  reason: λeaf4a2f57d2f
                });
              }, λ05a08b96b122 => {
                λa8cc96583f57({
                  result: "failure",
                  error: λ05a08b96b122
                });
              });
              return λ6e9d59ba3a91.onmessageerror = λ05a08b96b122 => {
                console.error("Transport port messageerror (this should never happen!)", λ05a08b96b122);
              }, λ6e9d59ba3a91.onmessage = ({data: λ05a08b96b122}) => {
                "data" === λ05a08b96b122.type ? λ101e4467a773(λ05a08b96b122.data) : "close" === λ05a08b96b122.type && λ02a8b2655000(λ05a08b96b122.code, λ05a08b96b122.reason);
              }, [ await λaf0b23b404ab, [] ];
            }
          }, "transport", (λ05a08b96b122, λad49342d9a29) => λeaf4a2f57d2f.postMessage(λ05a08b96b122, λad49342d9a29));
          λeaf4a2f57d2f.onmessageerror = λ05a08b96b122 => {
            console.error("Transport port messageerror (this should never happen!)", λ05a08b96b122);
          }, λeaf4a2f57d2f.onmessage = λ05a08b96b122 => {
            λad49342d9a29.recieve(λ05a08b96b122.data);
          }, λad49342d9a29.call("ready", void 0, []);
        }
      };
      constructor(λeaf4a2f57d2f) {
        this.init = λeaf4a2f57d2f, (0, λ101e4467a773.O)(), this.id = b(), this.config = λe5d1074491a9(λ02a8b2655000, λeaf4a2f57d2f.config || {}), 
        this.studyjetConfig = λe5d1074491a9(λ61010f9ab0e3, λa8cc96583f57.sb), this.studyjetConfig = λe5d1074491a9(this.studyjetConfig, λeaf4a2f57d2f.studyjetConfig || {}), 
        this.prefix = this.config.prefix + this.id + "/", this.serviceWorkerController = λeaf4a2f57d2f.serviceworker, 
        this.ready = Promise.all([ new Promise(λ05a08b96b122 => {
          this.readyResolve = λ05a08b96b122;
        }), this.loadStudyJetWasm(), this.loadSavedCookies(!0) ]).then(() => void 0), this.rpc = new λ05a08b96b122.C(this.methods, "tabchannel-" + this.id, (λ05a08b96b122, λeaf4a2f57d2f) => {
          if (!this.port) throw Error("Port not found");
          this.port.postMessage(λ05a08b96b122, λeaf4a2f57d2f);
        }), this.transport = λeaf4a2f57d2f.transport, this.cookieSyncChannel.addEventListener("message", this.onCookieSyncMessage), 
        this.setupMessagePort(), navigator.serviceWorker.addEventListener("message", λ05a08b96b122 => {
          if (λ05a08b96b122.data?.$controller$setCookie && "object" == typeof λ05a08b96b122.data.$controller$setCookie) {
            let λeaf4a2f57d2f = λ05a08b96b122.data.$controller$setCookie;
            if (λeaf4a2f57d2f.controllerId && λeaf4a2f57d2f.controllerId !== this.id) return;
            λeaf4a2f57d2f.options?.clear && this.cookieJar.clear(), this.applyCookieSyncEntries(λeaf4a2f57d2f.cookies), 
            "string" == typeof λeaf4a2f57d2f.id && this.serviceWorkerController.postMessage({
              $sw$setCookieDone: {
                id: λeaf4a2f57d2f.id
              }
            });
            return;
          }
          if (λ05a08b96b122.data.$controller$swrevive) {
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
        let λ05a08b96b122 = new MessageChannel;
        this.port = λ05a08b96b122.port1, this.port.addEventListener("message", this.onTabChannelMessage), 
        this.port.start(), this.serviceWorkerController.postMessage({
          $controller$init: {
            prefix: this.prefix,
            id: this.id
          }
        }, [ λ05a08b96b122.port2 ]);
      }
      applyCookieSyncEntries(λ05a08b96b122) {
        if (Array.isArray(λ05a08b96b122)) for (let λeaf4a2f57d2f of λ05a08b96b122) "string" == typeof λeaf4a2f57d2f?.url && "string" == typeof λeaf4a2f57d2f.cookie && this.cookieJar.setCookies(λeaf4a2f57d2f.cookie, new URL(λeaf4a2f57d2f.url));
      }
      async propagateCookieSync(λ05a08b96b122, λeaf4a2f57d2f = {}) {
        this.port && await this.rpc.call("sendSetCookie", {
          cookies: λ05a08b96b122,
          options: λeaf4a2f57d2f
        });
      }
      async loadSavedCookies(λ05a08b96b122 = !1) {
        if (λ05a08b96b122 || this.cookieSyncDirty) return this.cookieSyncPromise || (this.cookieSyncPromise = (async () => {
          let λ05a08b96b122 = await w();
          λ05a08b96b122 && λ05a08b96b122.updatedAt > this.cookieUpdatedAt && (this.cookieJar.load(λ05a08b96b122.cookies), 
          this.cookieUpdatedAt = λ05a08b96b122.updatedAt), this.cookieSyncDirty = !1;
        })().finally(() => {
          this.cookieSyncPromise = null;
        })), this.cookieSyncPromise;
      }
      async persistCookies() {
        let λ05a08b96b122 = await k(this.cookieJar.dump(), this.cookieUpdatedAt);
        λ05a08b96b122 <= this.cookieUpdatedAt || (this.cookieUpdatedAt = λ05a08b96b122, 
        this.cookieSyncDirty = !1, this.cookieSyncChannel.postMessage({
          updatedAt: λ05a08b96b122
        }));
      }
      setTransport(λ05a08b96b122) {
        for (let λeaf4a2f57d2f of (this.transport = λ05a08b96b122, this.frames)) λeaf4a2f57d2f.controller.transport = λ05a08b96b122, 
        λeaf4a2f57d2f.fetchHandler.client.transport = λ05a08b96b122;
      }
      createFrame(λ05a08b96b122, λeaf4a2f57d2f = {}) {
        if (!this.ready) throw Error("Controller is not ready! Try awaiting controller.wait()");
        let λad49342d9a29 = new v(this, λ05a08b96b122 ??= document.createElement("iframe"), λeaf4a2f57d2f);
        return this.frames.push(λad49342d9a29), λad49342d9a29;
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
            getInjectScripts: function e(λ05a08b96b122, λeaf4a2f57d2f, λad49342d9a29, λ6e9d59ba3a91, λa8cc96583f57, λaf0b23b404ab) {
              return (λ101e4467a773, λ02a8b2655000, λ61010f9ab0e3, λfc64a680fcb0) => {
                var λ78971c5011fe;
                return [ λfc64a680fcb0(λ05a08b96b122.studyjetPath), λfc64a680fcb0(λad49342d9a29.href + λ05a08b96b122.virtualWasmPath), λfc64a680fcb0(λ05a08b96b122.injectPath), λfc64a680fcb0("data:text/javascript;charset=utf-8;base64," + (λ78971c5011fe = `\n\t\t\t\t\tdocument.querySelectorAll("script[studyjet-injected]").forEach(script => script.remove());\n\t\t\t\t\t$studyjetController.load({\n\t\t\t\t\t\tconfig: ${JSON.stringify(λ05a08b96b122)},\n\t\t\t\t\t\tsjconfig: ${JSON.stringify(λeaf4a2f57d2f)},\n\t\t\t\t\t\tprefix: new URL("${λad49342d9a29.href}"),\n\t\t\t\t\t\tcookies: ${JSON.stringify(λ6e9d59ba3a91.dump())},\n\t\t\t\t\t\tyieldGetInjectScripts: ${e.toString()},\n\t\t\t\t\t\tcodecEncode: ${λa8cc96583f57.toString()},\n\t\t\t\t\t\tcodecDecode: ${λaf0b23b404ab.toString()},\n\t\t\t\t\t\tinitHeaders: ${JSON.stringify(λ61010f9ab0e3.headers ?? [])},\n\t\t\t\t\t\thistory: ${JSON.stringify(λ61010f9ab0e3.history ?? [])},\n\t\t\t\t\t})\n\t\t\t\t`, 
                btoa((new TextEncoder).encode(λ78971c5011fe).reduce((λ05a08b96b122, λeaf4a2f57d2f) => (λ05a08b96b122.push(String.fromCharCode(λeaf4a2f57d2f)), 
                λ05a08b96b122), []).join("")))) ];
              };
            }(this.controller.config, this.controller.studyjetConfig, new URL(this.prefix, location.href), this.controller.cookieJar, this.controller.config.codec.encode, this.controller.config.codec.decode),
            getWorkerInjectScripts: (λ05a08b96b122, λeaf4a2f57d2f, λad49342d9a29) => {
              var λ6e9d59ba3a91;
              let λa8cc96583f57 = "";
              return λa8cc96583f57 += λad49342d9a29(this.controller.config.studyjetPath), λa8cc96583f57 += λad49342d9a29(this.prefix + this.controller.config.virtualWasmPath), 
              λa8cc96583f57 += λad49342d9a29("data:text/javascript;charset=utf-8;base64," + (λ6e9d59ba3a91 = `\n\t\t\t\t\t(()=>{\n\t\t\t\t\t\tconst { StudyJetClient, CookieJar, setWasm } = $studyjet;\n\n\t\t\t\t\t\tsetWasm(Uint8Array.from(atob(self.WASM), (c) => c.charCodeAt(0)));\n\t\t\t\t\t\tdelete self.WASM;\n\n\t\t\t\t\t\tconst sjconfig = ${JSON.stringify(this.controller.studyjetConfig)};\n\t\t\t\t\t\tconst prefix = new URL("${this.prefix}", location.href);\n\n\t\t\t\t\t\tconst context = {\n\t\t\t\t\t\t\tconfig: sjconfig,\n\t\t\t\t\t\t\tprefix,\n\t\t\t\t\t\t\tinterface: {\n\t\t\t\t\t\t\t\tcodecEncode: ${this.controller.config.codec.encode.toString()},\n\t\t\t\t\t\t\t\tcodecDecode: ${this.controller.config.codec.decode.toString()},\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t};\n\n\t\t\t\t\t\tconst client = new StudyJetClient(globalThis, {\n\t\t\t\t\t\t\tcontext,\n\t\t\t\t\t\t\ttransport: null,\n\t\t\t\t\t\t});\n\n\t\t\t\t\t\tclient.hook();\n\t\t\t\t\t})();\n\t\t\t\t\t`, 
              btoa((new TextEncoder).encode(λ6e9d59ba3a91).reduce((λ05a08b96b122, λeaf4a2f57d2f) => (λ05a08b96b122.push(String.fromCharCode(λeaf4a2f57d2f)), 
              λ05a08b96b122), []).join(""))));
            },
            codecEncode: this.controller.config.codec.encode,
            codecDecode: this.controller.config.codec.decode
          }
        };
      }
      plugins=[];
      constructor(λ05a08b96b122, λad49342d9a29, λ6e9d59ba3a91 = {}) {
        for (const λ101e4467a773 of (this.controller = λ05a08b96b122, this.element = λad49342d9a29, 
        this.options = λ6e9d59ba3a91, this.id = b(), this.prefix = this.controller.prefix + this.id + "/", 
        this.fetchHandler = new λa8cc96583f57.mK({
          crossOriginIsolated: self.crossOriginIsolated,
          context: this.context,
          transport: λ05a08b96b122.transport,
          async sendSetCookie(λeaf4a2f57d2f, λad49342d9a29) {
            await λ05a08b96b122.persistCookies(), await λ05a08b96b122.propagateCookieSync(λeaf4a2f57d2f.map(({url: λ05a08b96b122, cookie: λeaf4a2f57d2f}) => ({
              url: λ05a08b96b122.href,
              cookie: λeaf4a2f57d2f
            })), λad49342d9a29);
          },
          fetchBlobUrl: async λ05a08b96b122 => λeaf4a2f57d2f.Sr.fromNativeResponse(await fetch(λ05a08b96b122)),
          fetchDataUrl: async λ05a08b96b122 => λeaf4a2f57d2f.Sr.fromNativeResponse(await fetch(λ05a08b96b122))
        }), this.hooks = {
          fetch: this.fetchHandler.hooks.fetch,
          init: λa8cc96583f57.Cx.create(),
          error: λa8cc96583f57.Cx.create()
        }, λad49342d9a29[λaf0b23b404ab.I] = this, this.plugins = λ6e9d59ba3a91.plugins ?? [], 
        this.plugins)) {
          for (const λ05a08b96b122 of λ101e4467a773.dependencies) if (!this.plugins.find(λeaf4a2f57d2f => λeaf4a2f57d2f.name === λ05a08b96b122)) throw Error(`Dependency ${λ05a08b96b122} not found for plugin ${λ101e4467a773.name}`);
          λ101e4467a773.install(this);
        }
      }
      getPlugin(λ05a08b96b122) {
        let λeaf4a2f57d2f = this.plugins.find(λeaf4a2f57d2f => λeaf4a2f57d2f.name === λ05a08b96b122);
        if (!λeaf4a2f57d2f) throw Error(`Plugin ${λ05a08b96b122} not found`);
        return λeaf4a2f57d2f;
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
      go(λ05a08b96b122) {
        let λeaf4a2f57d2f = (0, λa8cc96583f57.Oy)(λ05a08b96b122, this.context, {
          origin: new URL(location.href),
          base: new URL(location.href)
        });
        this.element.src = λeaf4a2f57d2f;
      }
    }
  })(), $studyjetController = λad49342d9a29;
})();
