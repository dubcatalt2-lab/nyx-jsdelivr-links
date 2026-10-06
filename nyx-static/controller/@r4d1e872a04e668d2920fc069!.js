var $studyjetController;

(() => {
  var λ24dd8541fd12 = {
    286(λ24dd8541fd12, λ46d44fb37353, λ0bee367a7c9a) {
      λ0bee367a7c9a.d(λ46d44fb37353, {
        I: () => λ1ade8ac64c25
      });
      let λ1ade8ac64c25 = Symbol.for("controller frame handle");
    },
    355(λ24dd8541fd12, λ46d44fb37353, λ0bee367a7c9a) {
      λ0bee367a7c9a.d(λ46d44fb37353, {
        O: () => s,
        x: () => λ1ade8ac64c25
      });
      let λ1ade8ac64c25 = "0.0.14";
      function s() {
        if ("undefined" == typeof $studyjet) throw Error("@mercuryworkshop/studyjet is not loaded. Load studyjet before the controller.");
        var λ24dd8541fd12 = "2.0.67-alpha.2", λ46d44fb37353 = $studyjet.versionInfo.version;
        if (λ24dd8541fd12 !== λ46d44fb37353) throw Error(`@mercuryworkshop/studyjet version mismatch: this build expects ${λ24dd8541fd12}, but the loaded runtime is ${λ46d44fb37353}`);
      }
    },
    805(λ24dd8541fd12, λ46d44fb37353, λ0bee367a7c9a) {
      λ0bee367a7c9a.d(λ46d44fb37353, {
        C: () => o
      });
      class o {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λ24dd8541fd12, λ46d44fb37353, λ0bee367a7c9a) {
          this.methods = λ24dd8541fd12, this.id = λ46d44fb37353, this.sendRaw = λ0bee367a7c9a;
        }
        recieve(λ24dd8541fd12) {
          if (null == λ24dd8541fd12 || "object" != typeof λ24dd8541fd12) return;
          let λ46d44fb37353 = λ24dd8541fd12[this.id];
          if (null == λ46d44fb37353 || "object" != typeof λ46d44fb37353) return;
          let λ0bee367a7c9a = λ46d44fb37353.$type;
          if ("response" === λ0bee367a7c9a) {
            let λ24dd8541fd12 = λ46d44fb37353.$token, λ0bee367a7c9a = λ46d44fb37353.$data, λ1ade8ac64c25 = λ46d44fb37353.$error, λcde243751cc9 = this.promiseCallbacks.get(λ24dd8541fd12);
            if (!λcde243751cc9) return;
            this.promiseCallbacks.delete(λ24dd8541fd12), void 0 !== λ1ade8ac64c25 ? λcde243751cc9.reject(Error(λ1ade8ac64c25)) : λcde243751cc9.resolve(λ0bee367a7c9a);
          } else if ("request" === λ0bee367a7c9a) {
            let λ24dd8541fd12 = λ46d44fb37353.$method, λ0bee367a7c9a = λ46d44fb37353.$args;
            this.methods[λ24dd8541fd12](λ0bee367a7c9a).then(λ24dd8541fd12 => {
              this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ46d44fb37353.$token,
                  $data: λ24dd8541fd12?.[0]
                }
              }, λ24dd8541fd12?.[1]);
            }).catch(λ24dd8541fd12 => {
              console.error(λ24dd8541fd12), this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ46d44fb37353.$token,
                  $error: λ24dd8541fd12?.toString() || "Unknown error"
                }
              }, []);
            });
          }
        }
        call(λ24dd8541fd12, λ46d44fb37353, λ0bee367a7c9a = []) {
          let λ1ade8ac64c25 = this.counter++;
          return new Promise((λcde243751cc9, λ0a85859d196f) => {
            this.promiseCallbacks.set(λ1ade8ac64c25, {
              resolve: λcde243751cc9,
              reject: λ0a85859d196f
            }), this.sendRaw({
              [this.id]: {
                $type: "request",
                $method: λ24dd8541fd12,
                $args: λ46d44fb37353,
                $token: λ1ade8ac64c25
              }
            }, λ0bee367a7c9a);
          });
        }
      }
    },
    986(λ24dd8541fd12) {
      let λ46d44fb37353 = Object.getPrototypeOf({});
      function r() {
        return function(λ24dd8541fd12) {
          return "object" == typeof λ24dd8541fd12 && null !== λ24dd8541fd12 && !(λ24dd8541fd12 instanceof RegExp) && !(λ24dd8541fd12 instanceof Date);
        };
      }
      function o(λ24dd8541fd12) {
        function o(λ24dd8541fd12) {
          return "constructor" !== λ24dd8541fd12 && "prototype" !== λ24dd8541fd12 && "__proto__" !== λ24dd8541fd12;
        }
        let λ0bee367a7c9a = Object.prototype.propertyIsEnumerable, λ1ade8ac64c25 = λ24dd8541fd12?.symbols ? function(λ24dd8541fd12) {
          let λ46d44fb37353 = Object.keys(λ24dd8541fd12), λ1ade8ac64c25 = Object.getOwnPropertySymbols(λ24dd8541fd12);
          for (let λcde243751cc9 = 0, λ0a85859d196f = λ1ade8ac64c25.length; λcde243751cc9 < λ0a85859d196f; ++λcde243751cc9) λ0bee367a7c9a.call(λ24dd8541fd12, λ1ade8ac64c25[λcde243751cc9]) && λ46d44fb37353.push(λ1ade8ac64c25[λcde243751cc9]);
          return λ46d44fb37353;
        } : Object.keys, λcde243751cc9 = "function" == typeof λ24dd8541fd12?.cloneProtoObject ? λ24dd8541fd12.cloneProtoObject : void 0, λ0a85859d196f = "function" == typeof λ24dd8541fd12?.isMergeableObject ? λ24dd8541fd12.isMergeableObject : r(), λac59aea7cf55 = λ24dd8541fd12?.onlyDefinedProperties === !0, λa254fa47882b = λ24dd8541fd12 && "function" == typeof λ24dd8541fd12.mergeArray ? λ24dd8541fd12.mergeArray({
          clone: d,
          deepmerge: h,
          getKeys: λ1ade8ac64c25,
          isMergeableObject: λ0a85859d196f
        }) : function(λ24dd8541fd12, λ46d44fb37353) {
          let λ0bee367a7c9a = λ24dd8541fd12.length, λ1ade8ac64c25 = λ46d44fb37353.length, λcde243751cc9 = 0, λ0a85859d196f = Array(λ0bee367a7c9a + λ1ade8ac64c25);
          for (;λcde243751cc9 < λ0bee367a7c9a; ++λcde243751cc9) λ0a85859d196f[λcde243751cc9] = d(λ24dd8541fd12[λcde243751cc9]);
          for (λcde243751cc9 = 0; λcde243751cc9 < λ1ade8ac64c25; ++λcde243751cc9) λ0a85859d196f[λcde243751cc9 + λ0bee367a7c9a] = d(λ46d44fb37353[λcde243751cc9]);
          return λ0a85859d196f;
        };
        function d(λ24dd8541fd12) {
          return λ0a85859d196f(λ24dd8541fd12) ? Array.isArray(λ24dd8541fd12) ? function(λ24dd8541fd12) {
            let λ46d44fb37353 = 0, λ0bee367a7c9a = λ24dd8541fd12.length, λ1ade8ac64c25 = Array(λ0bee367a7c9a);
            for (;λ46d44fb37353 < λ0bee367a7c9a; ++λ46d44fb37353) λ1ade8ac64c25[λ46d44fb37353] = d(λ24dd8541fd12[λ46d44fb37353]);
            return λ1ade8ac64c25;
          }(λ24dd8541fd12) : function(λ24dd8541fd12) {
            let λ0bee367a7c9a, λ0a85859d196f, λac59aea7cf55, λa254fa47882b = {};
            if (λcde243751cc9 && Object.getPrototypeOf(λ24dd8541fd12) !== λ46d44fb37353) return λcde243751cc9(λ24dd8541fd12);
            let λd757f8d911c7 = λ1ade8ac64c25(λ24dd8541fd12);
            for (λ0bee367a7c9a = 0, λ0a85859d196f = λd757f8d911c7.length; λ0bee367a7c9a < λ0a85859d196f; ++λ0bee367a7c9a) o(λac59aea7cf55 = λd757f8d911c7[λ0bee367a7c9a]) && (λa254fa47882b[λac59aea7cf55] = d(λ24dd8541fd12[λac59aea7cf55]));
            return λa254fa47882b;
          }(λ24dd8541fd12) : λ24dd8541fd12;
        }
        function h(λ24dd8541fd12, λ0bee367a7c9a) {
          if (λac59aea7cf55 && void 0 === λ0bee367a7c9a) return d(λ24dd8541fd12);
          let λd757f8d911c7 = Array.isArray(λ0bee367a7c9a), λ41c8cb866c51 = Array.isArray(λ24dd8541fd12);
          return "object" != typeof λ0bee367a7c9a || null === λ0bee367a7c9a ? λ0bee367a7c9a : λ0a85859d196f(λ24dd8541fd12) ? λd757f8d911c7 && λ41c8cb866c51 ? λa254fa47882b(λ24dd8541fd12, λ0bee367a7c9a) : λd757f8d911c7 !== λ41c8cb866c51 ? d(λ0bee367a7c9a) : function(λ24dd8541fd12, λ0bee367a7c9a) {
            let λa254fa47882b, λd757f8d911c7, λ41c8cb866c51, λ699ed39f8682 = {}, λf06fcd46b9b4 = λ1ade8ac64c25(λ24dd8541fd12), λ6de571c1f8cf = λ1ade8ac64c25(λ0bee367a7c9a);
            for (λa254fa47882b = 0, λd757f8d911c7 = λf06fcd46b9b4.length; λa254fa47882b < λd757f8d911c7; ++λa254fa47882b) o(λ41c8cb866c51 = λf06fcd46b9b4[λa254fa47882b]) && -1 === λ6de571c1f8cf.indexOf(λ41c8cb866c51) && (λ699ed39f8682[λ41c8cb866c51] = d(λ24dd8541fd12[λ41c8cb866c51]));
            for (λa254fa47882b = 0, λd757f8d911c7 = λ6de571c1f8cf.length; λa254fa47882b < λd757f8d911c7; ++λa254fa47882b) if (o(λ41c8cb866c51 = λ6de571c1f8cf[λa254fa47882b])) if (λ41c8cb866c51 in λ24dd8541fd12) -1 !== λf06fcd46b9b4.indexOf(λ41c8cb866c51) && (λcde243751cc9 && λ0a85859d196f(λ0bee367a7c9a[λ41c8cb866c51]) && Object.getPrototypeOf(λ0bee367a7c9a[λ41c8cb866c51]) !== λ46d44fb37353 ? λ699ed39f8682[λ41c8cb866c51] = λcde243751cc9(λ0bee367a7c9a[λ41c8cb866c51]) : λ699ed39f8682[λ41c8cb866c51] = h(λ24dd8541fd12[λ41c8cb866c51], λ0bee367a7c9a[λ41c8cb866c51])); else {
              if (λac59aea7cf55 && void 0 === λ0bee367a7c9a[λ41c8cb866c51]) continue;
              λ699ed39f8682[λ41c8cb866c51] = d(λ0bee367a7c9a[λ41c8cb866c51]);
            }
            return λ699ed39f8682;
          }(λ24dd8541fd12, λ0bee367a7c9a) : d(λ0bee367a7c9a);
        }
        return λ24dd8541fd12?.all ? function() {
          let λ24dd8541fd12;
          switch (arguments.length) {
           case 0:
            return {};

           case 1:
            return d(arguments[0]);

           case 2:
            return h(arguments[0], arguments[1]);
          }
          for (let λ46d44fb37353 = 0, λ0bee367a7c9a = arguments.length; λ46d44fb37353 < λ0bee367a7c9a; ++λ46d44fb37353) λ24dd8541fd12 = h(λ24dd8541fd12, arguments[λ46d44fb37353]);
          return λ24dd8541fd12;
        } : h;
      }
      λ24dd8541fd12.exports = o, λ24dd8541fd12.exports.default = o, λ24dd8541fd12.exports.deepmerge = o, 
      Object.defineProperty(λ24dd8541fd12.exports, "isMergeableObject", {
        get: r
      });
    },
    235(λ24dd8541fd12, λ46d44fb37353, λ0bee367a7c9a) {
      λ0bee367a7c9a.d(λ46d44fb37353, {
        Sr: () => s
      }), WebSocket.CLOSED, WebSocket.CONNECTING, WebSocket.OPEN, EventTarget;
      let λ1ade8ac64c25 = [ 101, 204, 205, 304 ];
      class s extends Response {
        url;
        rawHeaders;
        redirected=!1;
        static fromTransferrableResponse(λ24dd8541fd12, λ46d44fb37353) {
          let λ0bee367a7c9a = new s(λ1ade8ac64c25.includes(λ24dd8541fd12.status) ? void 0 : λ24dd8541fd12.body, {
            headers: new Headers(λ24dd8541fd12.headers),
            status: λ24dd8541fd12.status,
            statusText: λ24dd8541fd12.statusText
          });
          return λ0bee367a7c9a.url = λ46d44fb37353, λ0bee367a7c9a.redirected = λ24dd8541fd12.status >= 300 && λ24dd8541fd12.status < 400 && void 0 !== λ24dd8541fd12.headers.location, 
          λ0bee367a7c9a.rawHeaders = λ24dd8541fd12.headers, λ0bee367a7c9a;
        }
        static fromNativeResponse(λ24dd8541fd12) {
          let λ46d44fb37353 = new s(λ1ade8ac64c25.includes(λ24dd8541fd12.status) ? void 0 : λ24dd8541fd12.body, {
            headers: λ24dd8541fd12.headers,
            status: λ24dd8541fd12.status,
            statusText: λ24dd8541fd12.statusText
          });
          return λ46d44fb37353.url = λ24dd8541fd12.url, λ46d44fb37353.rawHeaders = [ ...λ24dd8541fd12.headers ], 
          λ46d44fb37353.redirected = λ24dd8541fd12.redirected, λ46d44fb37353;
        }
      }
    },
    423(λ24dd8541fd12, λ46d44fb37353, λ0bee367a7c9a) {
      λ0bee367a7c9a.d(λ46d44fb37353, {
        Cx: () => λe449a8968f71,
        Oy: () => λ5f97c30f3392,
        cP: () => λcde243751cc9,
        ht: () => λ633426eee57a,
        k_: () => λac59aea7cf55,
        mK: () => λ699ed39f8682,
        sb: () => λ2292098498f4,
        uh: () => λ6de571c1f8cf
      });
      let {BareResponse: λ1ade8ac64c25, CookieJar: λcde243751cc9, IncrementalHtmlRewriter: λ0a85859d196f, Plugin: λac59aea7cf55, STUDYJETCLIENT: λa254fa47882b, STUDYJETCLIENTNAME: λd757f8d911c7, StudyJetClient: λ41c8cb866c51, StudyJetFetchHandler: λ699ed39f8682, StudyJetFetchTrackedClient: λf06fcd46b9b4, StudyJetHeaders: λ6de571c1f8cf, Tap: λe449a8968f71, createLocationProxy: λdf231c107ca7, defaultConfig: λ2292098498f4, defaultConfigDev: λ730c70da80bc, flagEnabled: λ501822995218, getOwnPropertyDescriptorHandler: λ52c37981f30d, getRewriter: λed7ac44e545a, getScriptBlockTypeString: λ69bd04f30828, htmlRules: λa75d659eec04, isArchiveMimeType: λ6c69b7676f22, isAudioOrVideoMimeType: λ060af014dc18, isFontMimeType: λd36805f02635, isHtmlMimeType: λ9957da354586, isImageMimeType: λ422b44cfc14f, isInlineDisplayableMimeType: λa2a9972bc0d7, isJavascriptMimeType: λ08d348cc7199, isJavascriptMimeTypeEssenceMatch: λ221a6affb828, isModuleScriptType: λ6edc73848daf, isScriptType: λa9e212e5a819, isScriptableMimeType: λa347c5edb7b9, isXmlMimeType: λ012e08f2c0f2, isZipBasedMimeType: λ1b7694c4cc6e, isdedicated: λ4c268d176da0, isshared: λ4389186bef47, issw: λ7d421b5fc815, iswindow: λ03bf0a1f21bb, isworker: λ2150801c49a8, parseMimeType: λcbd483c53777, rewriteBlob: λce06de8dffc4, rewriteCss: λ99ee43030237, rewriteHtml: λ80b4c6513246, rewriteJs: λ8478bbf35d2b, rewriteJsInner: λ6eb9f0423413, rewriteSrcset: λe191f03d7c6e, rewriteUrl: λ5f97c30f3392, rewriteWorkers: λ1b41f0c28b3e, setWasm: λ633426eee57a, unrewriteBlob: λ5f3b6fdb82f6, unrewriteCss: λfd646529c3a9, unrewriteHtml: λ944189ec94d3, unrewriteUrl: λ3c388453753c, versionInfo: λ6ea49152d63c} = globalThis.$studyjet;
    }
  }, λ46d44fb37353 = {};
  function r(λ0bee367a7c9a) {
    var λ1ade8ac64c25 = λ46d44fb37353[λ0bee367a7c9a];
    if (void 0 !== λ1ade8ac64c25) return λ1ade8ac64c25.exports;
    var λcde243751cc9 = λ46d44fb37353[λ0bee367a7c9a] = {
      exports: {}
    };
    return λ24dd8541fd12[λ0bee367a7c9a](λcde243751cc9, λcde243751cc9.exports, r), λcde243751cc9.exports;
  }
  r.n = λ24dd8541fd12 => {
    var λ46d44fb37353 = λ24dd8541fd12 && λ24dd8541fd12.__esModule ? () => λ24dd8541fd12.default : () => λ24dd8541fd12;
    return r.d(λ46d44fb37353, {
      a: λ46d44fb37353
    }), λ46d44fb37353;
  }, r.d = (λ24dd8541fd12, λ46d44fb37353) => {
    for (var λ0bee367a7c9a in λ46d44fb37353) r.o(λ46d44fb37353, λ0bee367a7c9a) && !r.o(λ24dd8541fd12, λ0bee367a7c9a) && Object.defineProperty(λ24dd8541fd12, λ0bee367a7c9a, {
      enumerable: !0,
      get: λ46d44fb37353[λ0bee367a7c9a]
    });
  }, r.o = (λ24dd8541fd12, λ46d44fb37353) => Object.prototype.hasOwnProperty.call(λ24dd8541fd12, λ46d44fb37353), 
  r.r = λ24dd8541fd12 => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λ24dd8541fd12, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(λ24dd8541fd12, "__esModule", {
      value: !0
    });
  };
  var λ0bee367a7c9a = {};
  (() => {
    r.r(λ0bee367a7c9a), r.d(λ0bee367a7c9a, {
      Controller: () => S,
      Frame: () => v,
      ManagedPlugin: () => d,
      VERSION: () => λac59aea7cf55.x,
      assertRuntimeStudyJetVersion: () => λac59aea7cf55.O,
      config: () => λa254fa47882b
    });
    var λ24dd8541fd12 = r(805), λ46d44fb37353 = r(235), λ1ade8ac64c25 = r(986), λcde243751cc9 = r(423), λ0a85859d196f = r(286), λac59aea7cf55 = r(355);
    let λa254fa47882b = {
      prefix: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/study/",
      studyjetPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/studyjet/@r69c18f9bd4ed175c9ea505b8!.js",
      injectPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/controller/@r9e855ac82edc4b51e1340564!.js",
      wasmPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/studyjet/@r55286cfe09d741023cc3e1d6!.wasm",
      virtualWasmPath: "studyjet.wasm.js",
      codec: {
        encode: λ24dd8541fd12 => λ24dd8541fd12 ? encodeURIComponent(λ24dd8541fd12) : λ24dd8541fd12,
        decode: λ24dd8541fd12 => λ24dd8541fd12 ? decodeURIComponent(λ24dd8541fd12) : λ24dd8541fd12
      }
    }, λd757f8d911c7 = {
      flags: {
        ...λcde243751cc9.sb.flags,
        allowFailedIntercepts: !0
      },
      maskedfiles: [ "inject.js", "studyjet.wasm.js" ]
    };
    class d extends λcde243751cc9.k_ {
      frame=null;
      dependencies=[];
      constructor(λ24dd8541fd12, λ46d44fb37353) {
        super(λ24dd8541fd12), this.dependencies = λ46d44fb37353;
      }
      install(λ24dd8541fd12) {
        this.frame = λ24dd8541fd12;
      }
    }
    let λ41c8cb866c51 = "state", λ699ed39f8682 = "cookies", λf06fcd46b9b4 = null;
    function u(λ24dd8541fd12) {
      return "object" == typeof λ24dd8541fd12 && null !== λ24dd8541fd12 && "number" == typeof λ24dd8541fd12.updatedAt && Number.isFinite(λ24dd8541fd12.updatedAt) && "string" == typeof λ24dd8541fd12.cookies ? λ24dd8541fd12 : null;
    }
    function y(λ24dd8541fd12) {
      return new Promise((λ46d44fb37353, λ0bee367a7c9a) => {
        λ24dd8541fd12.onsuccess = () => λ46d44fb37353(λ24dd8541fd12.result), λ24dd8541fd12.onerror = () => λ0bee367a7c9a(λ24dd8541fd12.error ?? Error("IndexedDB request failed"));
      });
    }
    function m(λ24dd8541fd12) {
      return new Promise((λ46d44fb37353, λ0bee367a7c9a) => {
        λ24dd8541fd12.oncomplete = () => λ46d44fb37353(), λ24dd8541fd12.onabort = () => λ0bee367a7c9a(λ24dd8541fd12.error ?? Error("IndexedDB transaction aborted")), 
        λ24dd8541fd12.onerror = () => λ0bee367a7c9a(λ24dd8541fd12.error ?? Error("IndexedDB transaction failed"));
      });
    }
    function g() {
      return λf06fcd46b9b4 || (λf06fcd46b9b4 = new Promise((λ24dd8541fd12, λ46d44fb37353) => {
        let λ0bee367a7c9a = indexedDB.open("@d941bc65af3", 1);
        λ0bee367a7c9a.onupgradeneeded = () => {
          let λ24dd8541fd12 = λ0bee367a7c9a.result;
          λ24dd8541fd12.objectStoreNames.contains(λ41c8cb866c51) || λ24dd8541fd12.createObjectStore(λ41c8cb866c51);
        }, λ0bee367a7c9a.onsuccess = () => λ24dd8541fd12(λ0bee367a7c9a.result), λ0bee367a7c9a.onerror = () => λ46d44fb37353(λ0bee367a7c9a.error ?? Error("Failed to open cookie database"));
      }));
    }
    async function w() {
      try {
        let λ24dd8541fd12 = (await g()).transaction(λ41c8cb866c51, "readonly"), λ46d44fb37353 = λ24dd8541fd12.objectStore(λ41c8cb866c51), λ0bee367a7c9a = await y(λ46d44fb37353.get(λ699ed39f8682));
        return await m(λ24dd8541fd12), u(λ0bee367a7c9a);
      } catch (λ24dd8541fd12) {
        return console.error("Failed to read persisted controller cookies:", λ24dd8541fd12), 
        null;
      }
    }
    async function k(λ24dd8541fd12, λ46d44fb37353) {
      try {
        let λ0bee367a7c9a = (await g()).transaction(λ41c8cb866c51, "readwrite"), λ1ade8ac64c25 = λ0bee367a7c9a.objectStore(λ41c8cb866c51), λcde243751cc9 = u(await y(λ1ade8ac64c25.get(λ699ed39f8682))), λ0a85859d196f = Math.max(Date.now(), λ46d44fb37353 + 1, (λcde243751cc9?.updatedAt ?? 0) + 1);
        return λ1ade8ac64c25.put({
          updatedAt: λ0a85859d196f,
          cookies: λ24dd8541fd12
        }, λ699ed39f8682), await m(λ0bee367a7c9a), λ0a85859d196f;
      } catch (λ24dd8541fd12) {
        return console.error("Failed to persist controller cookies:", λ24dd8541fd12), λ46d44fb37353;
      }
    }
    function b() {
      return Math.random().toString(36).substring(2, 10);
    }
    let λ6de571c1f8cf = (0, λ1ade8ac64c25.deepmerge)();
    class S {
      init;
      id;
      config;
      studyjetConfig;
      prefix;
      cookieJar=new λcde243751cc9.cP;
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
      onTabChannelMessage=λ24dd8541fd12 => {
        this.rpc.recieve(λ24dd8541fd12.data);
      };
      onCookieSyncMessage=λ24dd8541fd12 => {
        let λ46d44fb37353 = "object" == typeof λ24dd8541fd12.data && null !== λ24dd8541fd12.data ? λ24dd8541fd12.data.updatedAt : void 0;
        "number" != typeof λ46d44fb37353 || λ46d44fb37353 <= this.cookieUpdatedAt || (this.cookieSyncDirty = !0, 
        this.loadSavedCookies());
      };
      async loadStudyJetWasm() {
        if (this.wasmAlreadyFetched) return;
        let λ24dd8541fd12 = await fetch(this.config.wasmPath);
        (0, λcde243751cc9.ht)(await λ24dd8541fd12.arrayBuffer()), this.wasmAlreadyFetched = !0;
      }
      methods={
        ready: async () => {
          this.readyResolve(), setTimeout(() => {
            this.guardServiceWorkerRevive = !1;
          }, 5e3);
        },
        request: async λ24dd8541fd12 => {
          let λ46d44fb37353 = new URL(λ24dd8541fd12.rawUrl).pathname, λ0bee367a7c9a = this.frames.find(λ24dd8541fd12 => λ46d44fb37353.startsWith(λ24dd8541fd12.prefix));
          if (!λ0bee367a7c9a) throw Error("No frame found for request");
          try {
            if (await this.loadSavedCookies(), λ46d44fb37353 === λ0bee367a7c9a.prefix + this.config.virtualWasmPath) {
              if (!this.wasmPayload) {
                let λ24dd8541fd12 = await fetch(this.config.wasmPath), λ46d44fb37353 = await λ24dd8541fd12.arrayBuffer(), λ0bee367a7c9a = btoa(new Uint8Array(λ46d44fb37353).reduce((λ24dd8541fd12, λ46d44fb37353) => (λ24dd8541fd12.push(String.fromCharCode(λ46d44fb37353)), 
                λ24dd8541fd12), []).join(""));
                this.wasmPayload = `self.WASM = '${λ0bee367a7c9a}';`;
              }
              return [ {
                body: this.wasmPayload,
                status: 200,
                statusText: "OK",
                headers: [ [ "Content-Type", "application/javascript" ] ]
              }, [] ];
            }
            let λ1ade8ac64c25 = λcde243751cc9.uh.fromRawHeaders(λ24dd8541fd12.initialHeaders), λ0a85859d196f = await λ0bee367a7c9a.fetchHandler.handleFetch({
              initialHeaders: λ1ade8ac64c25,
              rawClientUrl: λ24dd8541fd12.rawClientUrl ? new URL(λ24dd8541fd12.rawClientUrl) : void 0,
              rawUrl: new URL(λ24dd8541fd12.rawUrl),
              rawReferrer: λ24dd8541fd12.rawReferrer,
              rawDestination: λ24dd8541fd12.destination,
              method: λ24dd8541fd12.method,
              mode: λ24dd8541fd12.mode,
              referrer: λ24dd8541fd12.referrer,
              body: λ24dd8541fd12.body,
              cache: λ24dd8541fd12.cache,
              clientId: λ24dd8541fd12.clientId
            });
            return [ {
              body: λ0a85859d196f.body,
              status: λ0a85859d196f.status,
              statusText: λ0a85859d196f.statusText,
              headers: λ0a85859d196f.headers.toRawHeaders()
            }, λ0a85859d196f.body instanceof ReadableStream || λ0a85859d196f.body instanceof ArrayBuffer ? [ λ0a85859d196f.body ] : [] ];
          } catch (λ46d44fb37353) {
            let λ1ade8ac64c25 = {
              setResponse: void 0,
              suppressError: !1
            };
            if (await λcde243751cc9.Cx.dispatch(λ0bee367a7c9a.hooks.error.request, {
              rawrequest: λ24dd8541fd12,
              error: λ46d44fb37353
            }, λ1ade8ac64c25), λ1ade8ac64c25.suppressError || console.error("Error in controller request handler:", λ46d44fb37353), 
            λ1ade8ac64c25.setResponse) return [ λ1ade8ac64c25.setResponse, [] ];
            throw λ46d44fb37353;
          }
        },
        initRemoteTransport: async λ46d44fb37353 => {
          let λ0bee367a7c9a = new λ24dd8541fd12.C({
            request: async ({remote: λ24dd8541fd12, method: λ46d44fb37353, body: λ0bee367a7c9a, headers: λ1ade8ac64c25}) => {
              let λcde243751cc9 = await this.transport.request(new URL(λ24dd8541fd12), λ46d44fb37353, λ0bee367a7c9a, λ1ade8ac64c25, void 0);
              return [ λcde243751cc9, [ λcde243751cc9.body ] ];
            },
            sendSetCookie: async ({cookies: λ24dd8541fd12, options: λ46d44fb37353}) => {
              await this.loadSavedCookies(!0), λ46d44fb37353?.clear && this.cookieJar.clear(), 
              this.applyCookieSyncEntries(λ24dd8541fd12), await this.persistCookies(), await this.propagateCookieSync(λ24dd8541fd12, λ46d44fb37353);
            },
            connect: async ({url: λ24dd8541fd12, protocols: λ46d44fb37353, requestHeaders: λ0bee367a7c9a, port: λ1ade8ac64c25}) => {
              let λcde243751cc9, λ0a85859d196f = new Promise(λ24dd8541fd12 => λcde243751cc9 = λ24dd8541fd12), [λac59aea7cf55, λa254fa47882b] = this.transport.connect(new URL(λ24dd8541fd12), λ46d44fb37353, λ0bee367a7c9a, (λ24dd8541fd12, λ46d44fb37353) => {
                λcde243751cc9({
                  result: "success",
                  protocol: λ24dd8541fd12,
                  extensions: λ46d44fb37353
                });
              }, λ24dd8541fd12 => {
                λ1ade8ac64c25.postMessage({
                  type: "data",
                  data: λ24dd8541fd12
                }, λ24dd8541fd12 instanceof ArrayBuffer ? [ λ24dd8541fd12 ] : []);
              }, (λ24dd8541fd12, λ46d44fb37353) => {
                λ1ade8ac64c25.postMessage({
                  type: "close",
                  code: λ24dd8541fd12,
                  reason: λ46d44fb37353
                });
              }, λ24dd8541fd12 => {
                λcde243751cc9({
                  result: "failure",
                  error: λ24dd8541fd12
                });
              });
              return λ1ade8ac64c25.onmessageerror = λ24dd8541fd12 => {
                console.error("Transport port messageerror (this should never happen!)", λ24dd8541fd12);
              }, λ1ade8ac64c25.onmessage = ({data: λ24dd8541fd12}) => {
                "data" === λ24dd8541fd12.type ? λac59aea7cf55(λ24dd8541fd12.data) : "close" === λ24dd8541fd12.type && λa254fa47882b(λ24dd8541fd12.code, λ24dd8541fd12.reason);
              }, [ await λ0a85859d196f, [] ];
            }
          }, "transport", (λ24dd8541fd12, λ0bee367a7c9a) => λ46d44fb37353.postMessage(λ24dd8541fd12, λ0bee367a7c9a));
          λ46d44fb37353.onmessageerror = λ24dd8541fd12 => {
            console.error("Transport port messageerror (this should never happen!)", λ24dd8541fd12);
          }, λ46d44fb37353.onmessage = λ24dd8541fd12 => {
            λ0bee367a7c9a.recieve(λ24dd8541fd12.data);
          }, λ0bee367a7c9a.call("ready", void 0, []);
        }
      };
      constructor(λ46d44fb37353) {
        this.init = λ46d44fb37353, (0, λac59aea7cf55.O)(), this.id = b(), this.config = λ6de571c1f8cf(λa254fa47882b, λ46d44fb37353.config || {}), 
        this.studyjetConfig = λ6de571c1f8cf(λd757f8d911c7, λcde243751cc9.sb), this.studyjetConfig = λ6de571c1f8cf(this.studyjetConfig, λ46d44fb37353.studyjetConfig || {}), 
        this.prefix = this.config.prefix + this.id + "/", this.serviceWorkerController = λ46d44fb37353.serviceworker, 
        this.ready = Promise.all([ new Promise(λ24dd8541fd12 => {
          this.readyResolve = λ24dd8541fd12;
        }), this.loadStudyJetWasm(), this.loadSavedCookies(!0) ]).then(() => void 0), this.rpc = new λ24dd8541fd12.C(this.methods, "tabchannel-" + this.id, (λ24dd8541fd12, λ46d44fb37353) => {
          if (!this.port) throw Error("Port not found");
          this.port.postMessage(λ24dd8541fd12, λ46d44fb37353);
        }), this.transport = λ46d44fb37353.transport, this.cookieSyncChannel.addEventListener("message", this.onCookieSyncMessage), 
        this.setupMessagePort(), navigator.serviceWorker.addEventListener("message", λ24dd8541fd12 => {
          if (λ24dd8541fd12.data?.$controller$setCookie && "object" == typeof λ24dd8541fd12.data.$controller$setCookie) {
            let λ46d44fb37353 = λ24dd8541fd12.data.$controller$setCookie;
            if (λ46d44fb37353.controllerId && λ46d44fb37353.controllerId !== this.id) return;
            λ46d44fb37353.options?.clear && this.cookieJar.clear(), this.applyCookieSyncEntries(λ46d44fb37353.cookies), 
            "string" == typeof λ46d44fb37353.id && this.serviceWorkerController.postMessage({
              $sw$setCookieDone: {
                id: λ46d44fb37353.id
              }
            });
            return;
          }
          if (λ24dd8541fd12.data.$controller$swrevive) {
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
        let λ24dd8541fd12 = new MessageChannel;
        this.port = λ24dd8541fd12.port1, this.port.addEventListener("message", this.onTabChannelMessage), 
        this.port.start(), this.serviceWorkerController.postMessage({
          $controller$init: {
            prefix: this.prefix,
            id: this.id
          }
        }, [ λ24dd8541fd12.port2 ]);
      }
      applyCookieSyncEntries(λ24dd8541fd12) {
        if (Array.isArray(λ24dd8541fd12)) for (let λ46d44fb37353 of λ24dd8541fd12) "string" == typeof λ46d44fb37353?.url && "string" == typeof λ46d44fb37353.cookie && this.cookieJar.setCookies(λ46d44fb37353.cookie, new URL(λ46d44fb37353.url));
      }
      async propagateCookieSync(λ24dd8541fd12, λ46d44fb37353 = {}) {
        this.port && await this.rpc.call("sendSetCookie", {
          cookies: λ24dd8541fd12,
          options: λ46d44fb37353
        });
      }
      async loadSavedCookies(λ24dd8541fd12 = !1) {
        if (λ24dd8541fd12 || this.cookieSyncDirty) return this.cookieSyncPromise || (this.cookieSyncPromise = (async () => {
          let λ24dd8541fd12 = await w();
          λ24dd8541fd12 && λ24dd8541fd12.updatedAt > this.cookieUpdatedAt && (this.cookieJar.load(λ24dd8541fd12.cookies), 
          this.cookieUpdatedAt = λ24dd8541fd12.updatedAt), this.cookieSyncDirty = !1;
        })().finally(() => {
          this.cookieSyncPromise = null;
        })), this.cookieSyncPromise;
      }
      async persistCookies() {
        let λ24dd8541fd12 = await k(this.cookieJar.dump(), this.cookieUpdatedAt);
        λ24dd8541fd12 <= this.cookieUpdatedAt || (this.cookieUpdatedAt = λ24dd8541fd12, 
        this.cookieSyncDirty = !1, this.cookieSyncChannel.postMessage({
          updatedAt: λ24dd8541fd12
        }));
      }
      setTransport(λ24dd8541fd12) {
        for (let λ46d44fb37353 of (this.transport = λ24dd8541fd12, this.frames)) λ46d44fb37353.controller.transport = λ24dd8541fd12, 
        λ46d44fb37353.fetchHandler.client.transport = λ24dd8541fd12;
      }
      createFrame(λ24dd8541fd12, λ46d44fb37353 = {}) {
        if (!this.ready) throw Error("Controller is not ready! Try awaiting controller.wait()");
        let λ0bee367a7c9a = new v(this, λ24dd8541fd12 ??= document.createElement("iframe"), λ46d44fb37353);
        return this.frames.push(λ0bee367a7c9a), λ0bee367a7c9a;
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
            getInjectScripts: function e(λ24dd8541fd12, λ46d44fb37353, λ0bee367a7c9a, λ1ade8ac64c25, λcde243751cc9, λ0a85859d196f) {
              return (λac59aea7cf55, λa254fa47882b, λd757f8d911c7, λ41c8cb866c51) => {
                var λ699ed39f8682;
                return [ λ41c8cb866c51(λ24dd8541fd12.studyjetPath), λ41c8cb866c51(λ0bee367a7c9a.href + λ24dd8541fd12.virtualWasmPath), λ41c8cb866c51(λ24dd8541fd12.injectPath), λ41c8cb866c51("data:text/javascript;charset=utf-8;base64," + (λ699ed39f8682 = `\n\t\t\t\t\tdocument.querySelectorAll("script[studyjet-injected]").forEach(script => script.remove());\n\t\t\t\t\t$studyjetController.load({\n\t\t\t\t\t\tconfig: ${JSON.stringify(λ24dd8541fd12)},\n\t\t\t\t\t\tsjconfig: ${JSON.stringify(λ46d44fb37353)},\n\t\t\t\t\t\tprefix: new URL("${λ0bee367a7c9a.href}"),\n\t\t\t\t\t\tcookies: ${JSON.stringify(λ1ade8ac64c25.dump())},\n\t\t\t\t\t\tyieldGetInjectScripts: ${e.toString()},\n\t\t\t\t\t\tcodecEncode: ${λcde243751cc9.toString()},\n\t\t\t\t\t\tcodecDecode: ${λ0a85859d196f.toString()},\n\t\t\t\t\t\tinitHeaders: ${JSON.stringify(λd757f8d911c7.headers ?? [])},\n\t\t\t\t\t\thistory: ${JSON.stringify(λd757f8d911c7.history ?? [])},\n\t\t\t\t\t})\n\t\t\t\t`, 
                btoa((new TextEncoder).encode(λ699ed39f8682).reduce((λ24dd8541fd12, λ46d44fb37353) => (λ24dd8541fd12.push(String.fromCharCode(λ46d44fb37353)), 
                λ24dd8541fd12), []).join("")))) ];
              };
            }(this.controller.config, this.controller.studyjetConfig, new URL(this.prefix, location.href), this.controller.cookieJar, this.controller.config.codec.encode, this.controller.config.codec.decode),
            getWorkerInjectScripts: (λ24dd8541fd12, λ46d44fb37353, λ0bee367a7c9a) => {
              var λ1ade8ac64c25;
              let λcde243751cc9 = "";
              return λcde243751cc9 += λ0bee367a7c9a(this.controller.config.studyjetPath), λcde243751cc9 += λ0bee367a7c9a(this.prefix + this.controller.config.virtualWasmPath), 
              λcde243751cc9 += λ0bee367a7c9a("data:text/javascript;charset=utf-8;base64," + (λ1ade8ac64c25 = `\n\t\t\t\t\t(()=>{\n\t\t\t\t\t\tconst { StudyJetClient, CookieJar, setWasm } = $studyjet;\n\n\t\t\t\t\t\tsetWasm(Uint8Array.from(atob(self.WASM), (c) => c.charCodeAt(0)));\n\t\t\t\t\t\tdelete self.WASM;\n\n\t\t\t\t\t\tconst sjconfig = ${JSON.stringify(this.controller.studyjetConfig)};\n\t\t\t\t\t\tconst prefix = new URL("${this.prefix}", location.href);\n\n\t\t\t\t\t\tconst context = {\n\t\t\t\t\t\t\tconfig: sjconfig,\n\t\t\t\t\t\t\tprefix,\n\t\t\t\t\t\t\tinterface: {\n\t\t\t\t\t\t\t\tcodecEncode: ${this.controller.config.codec.encode.toString()},\n\t\t\t\t\t\t\t\tcodecDecode: ${this.controller.config.codec.decode.toString()},\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t};\n\n\t\t\t\t\t\tconst client = new StudyJetClient(globalThis, {\n\t\t\t\t\t\t\tcontext,\n\t\t\t\t\t\t\ttransport: null,\n\t\t\t\t\t\t});\n\n\t\t\t\t\t\tclient.hook();\n\t\t\t\t\t})();\n\t\t\t\t\t`, 
              btoa((new TextEncoder).encode(λ1ade8ac64c25).reduce((λ24dd8541fd12, λ46d44fb37353) => (λ24dd8541fd12.push(String.fromCharCode(λ46d44fb37353)), 
              λ24dd8541fd12), []).join(""))));
            },
            codecEncode: this.controller.config.codec.encode,
            codecDecode: this.controller.config.codec.decode
          }
        };
      }
      plugins=[];
      constructor(λ24dd8541fd12, λ0bee367a7c9a, λ1ade8ac64c25 = {}) {
        for (const λac59aea7cf55 of (this.controller = λ24dd8541fd12, this.element = λ0bee367a7c9a, 
        this.options = λ1ade8ac64c25, this.id = b(), this.prefix = this.controller.prefix + this.id + "/", 
        this.fetchHandler = new λcde243751cc9.mK({
          crossOriginIsolated: self.crossOriginIsolated,
          context: this.context,
          transport: λ24dd8541fd12.transport,
          async sendSetCookie(λ46d44fb37353, λ0bee367a7c9a) {
            await λ24dd8541fd12.persistCookies(), await λ24dd8541fd12.propagateCookieSync(λ46d44fb37353.map(({url: λ24dd8541fd12, cookie: λ46d44fb37353}) => ({
              url: λ24dd8541fd12.href,
              cookie: λ46d44fb37353
            })), λ0bee367a7c9a);
          },
          fetchBlobUrl: async λ24dd8541fd12 => λ46d44fb37353.Sr.fromNativeResponse(await fetch(λ24dd8541fd12)),
          fetchDataUrl: async λ24dd8541fd12 => λ46d44fb37353.Sr.fromNativeResponse(await fetch(λ24dd8541fd12))
        }), this.hooks = {
          fetch: this.fetchHandler.hooks.fetch,
          init: λcde243751cc9.Cx.create(),
          error: λcde243751cc9.Cx.create()
        }, λ0bee367a7c9a[λ0a85859d196f.I] = this, this.plugins = λ1ade8ac64c25.plugins ?? [], 
        this.plugins)) {
          for (const λ24dd8541fd12 of λac59aea7cf55.dependencies) if (!this.plugins.find(λ46d44fb37353 => λ46d44fb37353.name === λ24dd8541fd12)) throw Error(`Dependency ${λ24dd8541fd12} not found for plugin ${λac59aea7cf55.name}`);
          λac59aea7cf55.install(this);
        }
      }
      getPlugin(λ24dd8541fd12) {
        let λ46d44fb37353 = this.plugins.find(λ46d44fb37353 => λ46d44fb37353.name === λ24dd8541fd12);
        if (!λ46d44fb37353) throw Error(`Plugin ${λ24dd8541fd12} not found`);
        return λ46d44fb37353;
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
      go(λ24dd8541fd12) {
        let λ46d44fb37353 = (0, λcde243751cc9.Oy)(λ24dd8541fd12, this.context, {
          origin: new URL(location.href),
          base: new URL(location.href)
        });
        this.element.src = λ46d44fb37353;
      }
    }
  })(), $studyjetController = λ0bee367a7c9a;
})();
