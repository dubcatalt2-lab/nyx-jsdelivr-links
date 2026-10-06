var $studyjetController;

(() => {
  var λe32d1ba3f2fb = {
    286(λe32d1ba3f2fb, λ7db5170ff3ea, λ07fe361a79e6) {
      λ07fe361a79e6.d(λ7db5170ff3ea, {
        I: () => λa93721515f3c
      });
      let λa93721515f3c = Symbol.for("controller frame handle");
    },
    355(λe32d1ba3f2fb, λ7db5170ff3ea, λ07fe361a79e6) {
      λ07fe361a79e6.d(λ7db5170ff3ea, {
        O: () => s,
        x: () => λa93721515f3c
      });
      let λa93721515f3c = "0.0.14";
      function s() {
        if ("undefined" == typeof $studyjet) throw Error("@mercuryworkshop/studyjet is not loaded. Load studyjet before the controller.");
        var λe32d1ba3f2fb = "2.0.67-alpha.2", λ7db5170ff3ea = $studyjet.versionInfo.version;
        if (λe32d1ba3f2fb !== λ7db5170ff3ea) throw Error(`@mercuryworkshop/studyjet version mismatch: this build expects ${λe32d1ba3f2fb}, but the loaded runtime is ${λ7db5170ff3ea}`);
      }
    },
    805(λe32d1ba3f2fb, λ7db5170ff3ea, λ07fe361a79e6) {
      λ07fe361a79e6.d(λ7db5170ff3ea, {
        C: () => o
      });
      class o {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λe32d1ba3f2fb, λ7db5170ff3ea, λ07fe361a79e6) {
          this.methods = λe32d1ba3f2fb, this.id = λ7db5170ff3ea, this.sendRaw = λ07fe361a79e6;
        }
        recieve(λe32d1ba3f2fb) {
          if (null == λe32d1ba3f2fb || "object" != typeof λe32d1ba3f2fb) return;
          let λ7db5170ff3ea = λe32d1ba3f2fb[this.id];
          if (null == λ7db5170ff3ea || "object" != typeof λ7db5170ff3ea) return;
          let λ07fe361a79e6 = λ7db5170ff3ea.$type;
          if ("response" === λ07fe361a79e6) {
            let λe32d1ba3f2fb = λ7db5170ff3ea.$token, λ07fe361a79e6 = λ7db5170ff3ea.$data, λa93721515f3c = λ7db5170ff3ea.$error, λ9739d5e6157c = this.promiseCallbacks.get(λe32d1ba3f2fb);
            if (!λ9739d5e6157c) return;
            this.promiseCallbacks.delete(λe32d1ba3f2fb), void 0 !== λa93721515f3c ? λ9739d5e6157c.reject(Error(λa93721515f3c)) : λ9739d5e6157c.resolve(λ07fe361a79e6);
          } else if ("request" === λ07fe361a79e6) {
            let λe32d1ba3f2fb = λ7db5170ff3ea.$method, λ07fe361a79e6 = λ7db5170ff3ea.$args;
            this.methods[λe32d1ba3f2fb](λ07fe361a79e6).then(λe32d1ba3f2fb => {
              this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ7db5170ff3ea.$token,
                  $data: λe32d1ba3f2fb?.[0]
                }
              }, λe32d1ba3f2fb?.[1]);
            }).catch(λe32d1ba3f2fb => {
              console.error(λe32d1ba3f2fb), this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ7db5170ff3ea.$token,
                  $error: λe32d1ba3f2fb?.toString() || "Unknown error"
                }
              }, []);
            });
          }
        }
        call(λe32d1ba3f2fb, λ7db5170ff3ea, λ07fe361a79e6 = []) {
          let λa93721515f3c = this.counter++;
          return new Promise((λ9739d5e6157c, λb03d4244ef04) => {
            this.promiseCallbacks.set(λa93721515f3c, {
              resolve: λ9739d5e6157c,
              reject: λb03d4244ef04
            }), this.sendRaw({
              [this.id]: {
                $type: "request",
                $method: λe32d1ba3f2fb,
                $args: λ7db5170ff3ea,
                $token: λa93721515f3c
              }
            }, λ07fe361a79e6);
          });
        }
      }
    },
    986(λe32d1ba3f2fb) {
      let λ7db5170ff3ea = Object.getPrototypeOf({});
      function r() {
        return function(λe32d1ba3f2fb) {
          return "object" == typeof λe32d1ba3f2fb && null !== λe32d1ba3f2fb && !(λe32d1ba3f2fb instanceof RegExp) && !(λe32d1ba3f2fb instanceof Date);
        };
      }
      function o(λe32d1ba3f2fb) {
        function o(λe32d1ba3f2fb) {
          return "constructor" !== λe32d1ba3f2fb && "prototype" !== λe32d1ba3f2fb && "__proto__" !== λe32d1ba3f2fb;
        }
        let λ07fe361a79e6 = Object.prototype.propertyIsEnumerable, λa93721515f3c = λe32d1ba3f2fb?.symbols ? function(λe32d1ba3f2fb) {
          let λ7db5170ff3ea = Object.keys(λe32d1ba3f2fb), λa93721515f3c = Object.getOwnPropertySymbols(λe32d1ba3f2fb);
          for (let λ9739d5e6157c = 0, λb03d4244ef04 = λa93721515f3c.length; λ9739d5e6157c < λb03d4244ef04; ++λ9739d5e6157c) λ07fe361a79e6.call(λe32d1ba3f2fb, λa93721515f3c[λ9739d5e6157c]) && λ7db5170ff3ea.push(λa93721515f3c[λ9739d5e6157c]);
          return λ7db5170ff3ea;
        } : Object.keys, λ9739d5e6157c = "function" == typeof λe32d1ba3f2fb?.cloneProtoObject ? λe32d1ba3f2fb.cloneProtoObject : void 0, λb03d4244ef04 = "function" == typeof λe32d1ba3f2fb?.isMergeableObject ? λe32d1ba3f2fb.isMergeableObject : r(), λced23515c3b9 = λe32d1ba3f2fb?.onlyDefinedProperties === !0, λ3b4e894476d7 = λe32d1ba3f2fb && "function" == typeof λe32d1ba3f2fb.mergeArray ? λe32d1ba3f2fb.mergeArray({
          clone: d,
          deepmerge: h,
          getKeys: λa93721515f3c,
          isMergeableObject: λb03d4244ef04
        }) : function(λe32d1ba3f2fb, λ7db5170ff3ea) {
          let λ07fe361a79e6 = λe32d1ba3f2fb.length, λa93721515f3c = λ7db5170ff3ea.length, λ9739d5e6157c = 0, λb03d4244ef04 = Array(λ07fe361a79e6 + λa93721515f3c);
          for (;λ9739d5e6157c < λ07fe361a79e6; ++λ9739d5e6157c) λb03d4244ef04[λ9739d5e6157c] = d(λe32d1ba3f2fb[λ9739d5e6157c]);
          for (λ9739d5e6157c = 0; λ9739d5e6157c < λa93721515f3c; ++λ9739d5e6157c) λb03d4244ef04[λ9739d5e6157c + λ07fe361a79e6] = d(λ7db5170ff3ea[λ9739d5e6157c]);
          return λb03d4244ef04;
        };
        function d(λe32d1ba3f2fb) {
          return λb03d4244ef04(λe32d1ba3f2fb) ? Array.isArray(λe32d1ba3f2fb) ? function(λe32d1ba3f2fb) {
            let λ7db5170ff3ea = 0, λ07fe361a79e6 = λe32d1ba3f2fb.length, λa93721515f3c = Array(λ07fe361a79e6);
            for (;λ7db5170ff3ea < λ07fe361a79e6; ++λ7db5170ff3ea) λa93721515f3c[λ7db5170ff3ea] = d(λe32d1ba3f2fb[λ7db5170ff3ea]);
            return λa93721515f3c;
          }(λe32d1ba3f2fb) : function(λe32d1ba3f2fb) {
            let λ07fe361a79e6, λb03d4244ef04, λced23515c3b9, λ3b4e894476d7 = {};
            if (λ9739d5e6157c && Object.getPrototypeOf(λe32d1ba3f2fb) !== λ7db5170ff3ea) return λ9739d5e6157c(λe32d1ba3f2fb);
            let λ522b20a6225f = λa93721515f3c(λe32d1ba3f2fb);
            for (λ07fe361a79e6 = 0, λb03d4244ef04 = λ522b20a6225f.length; λ07fe361a79e6 < λb03d4244ef04; ++λ07fe361a79e6) o(λced23515c3b9 = λ522b20a6225f[λ07fe361a79e6]) && (λ3b4e894476d7[λced23515c3b9] = d(λe32d1ba3f2fb[λced23515c3b9]));
            return λ3b4e894476d7;
          }(λe32d1ba3f2fb) : λe32d1ba3f2fb;
        }
        function h(λe32d1ba3f2fb, λ07fe361a79e6) {
          if (λced23515c3b9 && void 0 === λ07fe361a79e6) return d(λe32d1ba3f2fb);
          let λ522b20a6225f = Array.isArray(λ07fe361a79e6), λcdae1eaceed6 = Array.isArray(λe32d1ba3f2fb);
          return "object" != typeof λ07fe361a79e6 || null === λ07fe361a79e6 ? λ07fe361a79e6 : λb03d4244ef04(λe32d1ba3f2fb) ? λ522b20a6225f && λcdae1eaceed6 ? λ3b4e894476d7(λe32d1ba3f2fb, λ07fe361a79e6) : λ522b20a6225f !== λcdae1eaceed6 ? d(λ07fe361a79e6) : function(λe32d1ba3f2fb, λ07fe361a79e6) {
            let λ3b4e894476d7, λ522b20a6225f, λcdae1eaceed6, λc650cc70a4f9 = {}, λf853fcfb62b9 = λa93721515f3c(λe32d1ba3f2fb), λb9b9945c68c4 = λa93721515f3c(λ07fe361a79e6);
            for (λ3b4e894476d7 = 0, λ522b20a6225f = λf853fcfb62b9.length; λ3b4e894476d7 < λ522b20a6225f; ++λ3b4e894476d7) o(λcdae1eaceed6 = λf853fcfb62b9[λ3b4e894476d7]) && -1 === λb9b9945c68c4.indexOf(λcdae1eaceed6) && (λc650cc70a4f9[λcdae1eaceed6] = d(λe32d1ba3f2fb[λcdae1eaceed6]));
            for (λ3b4e894476d7 = 0, λ522b20a6225f = λb9b9945c68c4.length; λ3b4e894476d7 < λ522b20a6225f; ++λ3b4e894476d7) if (o(λcdae1eaceed6 = λb9b9945c68c4[λ3b4e894476d7])) if (λcdae1eaceed6 in λe32d1ba3f2fb) -1 !== λf853fcfb62b9.indexOf(λcdae1eaceed6) && (λ9739d5e6157c && λb03d4244ef04(λ07fe361a79e6[λcdae1eaceed6]) && Object.getPrototypeOf(λ07fe361a79e6[λcdae1eaceed6]) !== λ7db5170ff3ea ? λc650cc70a4f9[λcdae1eaceed6] = λ9739d5e6157c(λ07fe361a79e6[λcdae1eaceed6]) : λc650cc70a4f9[λcdae1eaceed6] = h(λe32d1ba3f2fb[λcdae1eaceed6], λ07fe361a79e6[λcdae1eaceed6])); else {
              if (λced23515c3b9 && void 0 === λ07fe361a79e6[λcdae1eaceed6]) continue;
              λc650cc70a4f9[λcdae1eaceed6] = d(λ07fe361a79e6[λcdae1eaceed6]);
            }
            return λc650cc70a4f9;
          }(λe32d1ba3f2fb, λ07fe361a79e6) : d(λ07fe361a79e6);
        }
        return λe32d1ba3f2fb?.all ? function() {
          let λe32d1ba3f2fb;
          switch (arguments.length) {
           case 0:
            return {};

           case 1:
            return d(arguments[0]);

           case 2:
            return h(arguments[0], arguments[1]);
          }
          for (let λ7db5170ff3ea = 0, λ07fe361a79e6 = arguments.length; λ7db5170ff3ea < λ07fe361a79e6; ++λ7db5170ff3ea) λe32d1ba3f2fb = h(λe32d1ba3f2fb, arguments[λ7db5170ff3ea]);
          return λe32d1ba3f2fb;
        } : h;
      }
      λe32d1ba3f2fb.exports = o, λe32d1ba3f2fb.exports.default = o, λe32d1ba3f2fb.exports.deepmerge = o, 
      Object.defineProperty(λe32d1ba3f2fb.exports, "isMergeableObject", {
        get: r
      });
    },
    235(λe32d1ba3f2fb, λ7db5170ff3ea, λ07fe361a79e6) {
      λ07fe361a79e6.d(λ7db5170ff3ea, {
        Sr: () => s
      }), WebSocket.CLOSED, WebSocket.CONNECTING, WebSocket.OPEN, EventTarget;
      let λa93721515f3c = [ 101, 204, 205, 304 ];
      class s extends Response {
        url;
        rawHeaders;
        redirected=!1;
        static fromTransferrableResponse(λe32d1ba3f2fb, λ7db5170ff3ea) {
          let λ07fe361a79e6 = new s(λa93721515f3c.includes(λe32d1ba3f2fb.status) ? void 0 : λe32d1ba3f2fb.body, {
            headers: new Headers(λe32d1ba3f2fb.headers),
            status: λe32d1ba3f2fb.status,
            statusText: λe32d1ba3f2fb.statusText
          });
          return λ07fe361a79e6.url = λ7db5170ff3ea, λ07fe361a79e6.redirected = λe32d1ba3f2fb.status >= 300 && λe32d1ba3f2fb.status < 400 && void 0 !== λe32d1ba3f2fb.headers.location, 
          λ07fe361a79e6.rawHeaders = λe32d1ba3f2fb.headers, λ07fe361a79e6;
        }
        static fromNativeResponse(λe32d1ba3f2fb) {
          let λ7db5170ff3ea = new s(λa93721515f3c.includes(λe32d1ba3f2fb.status) ? void 0 : λe32d1ba3f2fb.body, {
            headers: λe32d1ba3f2fb.headers,
            status: λe32d1ba3f2fb.status,
            statusText: λe32d1ba3f2fb.statusText
          });
          return λ7db5170ff3ea.url = λe32d1ba3f2fb.url, λ7db5170ff3ea.rawHeaders = [ ...λe32d1ba3f2fb.headers ], 
          λ7db5170ff3ea.redirected = λe32d1ba3f2fb.redirected, λ7db5170ff3ea;
        }
      }
    },
    423(λe32d1ba3f2fb, λ7db5170ff3ea, λ07fe361a79e6) {
      λ07fe361a79e6.d(λ7db5170ff3ea, {
        Cx: () => λ541288820e99,
        Oy: () => λb15908781d48,
        cP: () => λ9739d5e6157c,
        ht: () => λ992ddf57130d,
        k_: () => λced23515c3b9,
        mK: () => λc650cc70a4f9,
        sb: () => λ711bbf74bbfe,
        uh: () => λb9b9945c68c4
      });
      let {BareResponse: λa93721515f3c, CookieJar: λ9739d5e6157c, IncrementalHtmlRewriter: λb03d4244ef04, Plugin: λced23515c3b9, STUDYJETCLIENT: λ3b4e894476d7, STUDYJETCLIENTNAME: λ522b20a6225f, StudyJetClient: λcdae1eaceed6, StudyJetFetchHandler: λc650cc70a4f9, StudyJetFetchTrackedClient: λf853fcfb62b9, StudyJetHeaders: λb9b9945c68c4, Tap: λ541288820e99, createLocationProxy: λf29c6f27f2c9, defaultConfig: λ711bbf74bbfe, defaultConfigDev: λf0d9b02a86a8, flagEnabled: λ2a3d9f902550, getOwnPropertyDescriptorHandler: λ5f7a2ed37ad7, getRewriter: λeb84ae2457f4, getScriptBlockTypeString: λ505fdc6e81be, htmlRules: λ6f41520c29ba, isArchiveMimeType: λ24945291d06c, isAudioOrVideoMimeType: λ11c97fc0d0aa, isFontMimeType: λ295c0e3024d2, isHtmlMimeType: λ8421b633e083, isImageMimeType: λc3ef33cc158c, isInlineDisplayableMimeType: λ04b3bd35e48a, isJavascriptMimeType: λe4f2e44ba698, isJavascriptMimeTypeEssenceMatch: λ8355a859a958, isModuleScriptType: λ843bc1754243, isScriptType: λf1ad724dc605, isScriptableMimeType: λade8def10574, isXmlMimeType: λ25ea342fc8b5, isZipBasedMimeType: λc6db96f725cb, isdedicated: λ9cb3d10a0348, isshared: λdd91e990c37e, issw: λac16ef00a274, iswindow: λd55fbcffd78a, isworker: λ4b406889d936, parseMimeType: λ74a37a3d6170, rewriteBlob: λ6e2fb1ed01b3, rewriteCss: λbb6e6fb7af59, rewriteHtml: λeb34000fc853, rewriteJs: λa8edcc62e2c2, rewriteJsInner: λca290f33a694, rewriteSrcset: λ5cf082f3b5cc, rewriteUrl: λb15908781d48, rewriteWorkers: λ078cdc4cd0e0, setWasm: λ992ddf57130d, unrewriteBlob: λ550264422f70, unrewriteCss: λebcd9fa9c979, unrewriteHtml: λ4a4458eb4fe2, unrewriteUrl: λ6d874b17de55, versionInfo: λ01f5a16b185c} = globalThis.$studyjet;
    }
  }, λ7db5170ff3ea = {};
  function r(λ07fe361a79e6) {
    var λa93721515f3c = λ7db5170ff3ea[λ07fe361a79e6];
    if (void 0 !== λa93721515f3c) return λa93721515f3c.exports;
    var λ9739d5e6157c = λ7db5170ff3ea[λ07fe361a79e6] = {
      exports: {}
    };
    return λe32d1ba3f2fb[λ07fe361a79e6](λ9739d5e6157c, λ9739d5e6157c.exports, r), λ9739d5e6157c.exports;
  }
  r.n = λe32d1ba3f2fb => {
    var λ7db5170ff3ea = λe32d1ba3f2fb && λe32d1ba3f2fb.__esModule ? () => λe32d1ba3f2fb.default : () => λe32d1ba3f2fb;
    return r.d(λ7db5170ff3ea, {
      a: λ7db5170ff3ea
    }), λ7db5170ff3ea;
  }, r.d = (λe32d1ba3f2fb, λ7db5170ff3ea) => {
    for (var λ07fe361a79e6 in λ7db5170ff3ea) r.o(λ7db5170ff3ea, λ07fe361a79e6) && !r.o(λe32d1ba3f2fb, λ07fe361a79e6) && Object.defineProperty(λe32d1ba3f2fb, λ07fe361a79e6, {
      enumerable: !0,
      get: λ7db5170ff3ea[λ07fe361a79e6]
    });
  }, r.o = (λe32d1ba3f2fb, λ7db5170ff3ea) => Object.prototype.hasOwnProperty.call(λe32d1ba3f2fb, λ7db5170ff3ea), 
  r.r = λe32d1ba3f2fb => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λe32d1ba3f2fb, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(λe32d1ba3f2fb, "__esModule", {
      value: !0
    });
  };
  var λ07fe361a79e6 = {};
  (() => {
    r.r(λ07fe361a79e6), r.d(λ07fe361a79e6, {
      Controller: () => S,
      Frame: () => v,
      ManagedPlugin: () => d,
      VERSION: () => λced23515c3b9.x,
      assertRuntimeStudyJetVersion: () => λced23515c3b9.O,
      config: () => λ3b4e894476d7
    });
    var λe32d1ba3f2fb = r(805), λ7db5170ff3ea = r(235), λa93721515f3c = r(986), λ9739d5e6157c = r(423), λb03d4244ef04 = r(286), λced23515c3b9 = r(355);
    let λ3b4e894476d7 = {
      prefix: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/study/",
      studyjetPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/studyjet/@r69c18f9bd4ed175c9ea505b8!.js",
      injectPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/controller/@r9e855ac82edc4b51e1340564!.js",
      wasmPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/studyjet/@r55286cfe09d741023cc3e1d6!.wasm",
      virtualWasmPath: "studyjet.wasm.js",
      codec: {
        encode: λe32d1ba3f2fb => λe32d1ba3f2fb ? encodeURIComponent(λe32d1ba3f2fb) : λe32d1ba3f2fb,
        decode: λe32d1ba3f2fb => λe32d1ba3f2fb ? decodeURIComponent(λe32d1ba3f2fb) : λe32d1ba3f2fb
      }
    }, λ522b20a6225f = {
      flags: {
        ...λ9739d5e6157c.sb.flags,
        allowFailedIntercepts: !0
      },
      maskedfiles: [ "inject.js", "studyjet.wasm.js" ]
    };
    class d extends λ9739d5e6157c.k_ {
      frame=null;
      dependencies=[];
      constructor(λe32d1ba3f2fb, λ7db5170ff3ea) {
        super(λe32d1ba3f2fb), this.dependencies = λ7db5170ff3ea;
      }
      install(λe32d1ba3f2fb) {
        this.frame = λe32d1ba3f2fb;
      }
    }
    let λcdae1eaceed6 = "state", λc650cc70a4f9 = "cookies", λf853fcfb62b9 = null;
    function u(λe32d1ba3f2fb) {
      return "object" == typeof λe32d1ba3f2fb && null !== λe32d1ba3f2fb && "number" == typeof λe32d1ba3f2fb.updatedAt && Number.isFinite(λe32d1ba3f2fb.updatedAt) && "string" == typeof λe32d1ba3f2fb.cookies ? λe32d1ba3f2fb : null;
    }
    function y(λe32d1ba3f2fb) {
      return new Promise((λ7db5170ff3ea, λ07fe361a79e6) => {
        λe32d1ba3f2fb.onsuccess = () => λ7db5170ff3ea(λe32d1ba3f2fb.result), λe32d1ba3f2fb.onerror = () => λ07fe361a79e6(λe32d1ba3f2fb.error ?? Error("IndexedDB request failed"));
      });
    }
    function m(λe32d1ba3f2fb) {
      return new Promise((λ7db5170ff3ea, λ07fe361a79e6) => {
        λe32d1ba3f2fb.oncomplete = () => λ7db5170ff3ea(), λe32d1ba3f2fb.onabort = () => λ07fe361a79e6(λe32d1ba3f2fb.error ?? Error("IndexedDB transaction aborted")), 
        λe32d1ba3f2fb.onerror = () => λ07fe361a79e6(λe32d1ba3f2fb.error ?? Error("IndexedDB transaction failed"));
      });
    }
    function g() {
      return λf853fcfb62b9 || (λf853fcfb62b9 = new Promise((λe32d1ba3f2fb, λ7db5170ff3ea) => {
        let λ07fe361a79e6 = indexedDB.open("@d941bc65af3", 1);
        λ07fe361a79e6.onupgradeneeded = () => {
          let λe32d1ba3f2fb = λ07fe361a79e6.result;
          λe32d1ba3f2fb.objectStoreNames.contains(λcdae1eaceed6) || λe32d1ba3f2fb.createObjectStore(λcdae1eaceed6);
        }, λ07fe361a79e6.onsuccess = () => λe32d1ba3f2fb(λ07fe361a79e6.result), λ07fe361a79e6.onerror = () => λ7db5170ff3ea(λ07fe361a79e6.error ?? Error("Failed to open cookie database"));
      }));
    }
    async function w() {
      try {
        let λe32d1ba3f2fb = (await g()).transaction(λcdae1eaceed6, "readonly"), λ7db5170ff3ea = λe32d1ba3f2fb.objectStore(λcdae1eaceed6), λ07fe361a79e6 = await y(λ7db5170ff3ea.get(λc650cc70a4f9));
        return await m(λe32d1ba3f2fb), u(λ07fe361a79e6);
      } catch (λe32d1ba3f2fb) {
        return console.error("Failed to read persisted controller cookies:", λe32d1ba3f2fb), 
        null;
      }
    }
    async function k(λe32d1ba3f2fb, λ7db5170ff3ea) {
      try {
        let λ07fe361a79e6 = (await g()).transaction(λcdae1eaceed6, "readwrite"), λa93721515f3c = λ07fe361a79e6.objectStore(λcdae1eaceed6), λ9739d5e6157c = u(await y(λa93721515f3c.get(λc650cc70a4f9))), λb03d4244ef04 = Math.max(Date.now(), λ7db5170ff3ea + 1, (λ9739d5e6157c?.updatedAt ?? 0) + 1);
        return λa93721515f3c.put({
          updatedAt: λb03d4244ef04,
          cookies: λe32d1ba3f2fb
        }, λc650cc70a4f9), await m(λ07fe361a79e6), λb03d4244ef04;
      } catch (λe32d1ba3f2fb) {
        return console.error("Failed to persist controller cookies:", λe32d1ba3f2fb), λ7db5170ff3ea;
      }
    }
    function b() {
      return Math.random().toString(36).substring(2, 10);
    }
    let λb9b9945c68c4 = (0, λa93721515f3c.deepmerge)();
    class S {
      init;
      id;
      config;
      studyjetConfig;
      prefix;
      cookieJar=new λ9739d5e6157c.cP;
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
      onTabChannelMessage=λe32d1ba3f2fb => {
        this.rpc.recieve(λe32d1ba3f2fb.data);
      };
      onCookieSyncMessage=λe32d1ba3f2fb => {
        let λ7db5170ff3ea = "object" == typeof λe32d1ba3f2fb.data && null !== λe32d1ba3f2fb.data ? λe32d1ba3f2fb.data.updatedAt : void 0;
        "number" != typeof λ7db5170ff3ea || λ7db5170ff3ea <= this.cookieUpdatedAt || (this.cookieSyncDirty = !0, 
        this.loadSavedCookies());
      };
      async loadStudyJetWasm() {
        if (this.wasmAlreadyFetched) return;
        let λe32d1ba3f2fb = await fetch(this.config.wasmPath);
        (0, λ9739d5e6157c.ht)(await λe32d1ba3f2fb.arrayBuffer()), this.wasmAlreadyFetched = !0;
      }
      methods={
        ready: async () => {
          this.readyResolve(), setTimeout(() => {
            this.guardServiceWorkerRevive = !1;
          }, 5e3);
        },
        request: async λe32d1ba3f2fb => {
          let λ7db5170ff3ea = new URL(λe32d1ba3f2fb.rawUrl).pathname, λ07fe361a79e6 = this.frames.find(λe32d1ba3f2fb => λ7db5170ff3ea.startsWith(λe32d1ba3f2fb.prefix));
          if (!λ07fe361a79e6) throw Error("No frame found for request");
          try {
            if (await this.loadSavedCookies(), λ7db5170ff3ea === λ07fe361a79e6.prefix + this.config.virtualWasmPath) {
              if (!this.wasmPayload) {
                let λe32d1ba3f2fb = await fetch(this.config.wasmPath), λ7db5170ff3ea = await λe32d1ba3f2fb.arrayBuffer(), λ07fe361a79e6 = btoa(new Uint8Array(λ7db5170ff3ea).reduce((λe32d1ba3f2fb, λ7db5170ff3ea) => (λe32d1ba3f2fb.push(String.fromCharCode(λ7db5170ff3ea)), 
                λe32d1ba3f2fb), []).join(""));
                this.wasmPayload = `self.WASM = '${λ07fe361a79e6}';`;
              }
              return [ {
                body: this.wasmPayload,
                status: 200,
                statusText: "OK",
                headers: [ [ "Content-Type", "application/javascript" ] ]
              }, [] ];
            }
            let λa93721515f3c = λ9739d5e6157c.uh.fromRawHeaders(λe32d1ba3f2fb.initialHeaders), λb03d4244ef04 = await λ07fe361a79e6.fetchHandler.handleFetch({
              initialHeaders: λa93721515f3c,
              rawClientUrl: λe32d1ba3f2fb.rawClientUrl ? new URL(λe32d1ba3f2fb.rawClientUrl) : void 0,
              rawUrl: new URL(λe32d1ba3f2fb.rawUrl),
              rawReferrer: λe32d1ba3f2fb.rawReferrer,
              rawDestination: λe32d1ba3f2fb.destination,
              method: λe32d1ba3f2fb.method,
              mode: λe32d1ba3f2fb.mode,
              referrer: λe32d1ba3f2fb.referrer,
              body: λe32d1ba3f2fb.body,
              cache: λe32d1ba3f2fb.cache,
              clientId: λe32d1ba3f2fb.clientId
            });
            return [ {
              body: λb03d4244ef04.body,
              status: λb03d4244ef04.status,
              statusText: λb03d4244ef04.statusText,
              headers: λb03d4244ef04.headers.toRawHeaders()
            }, λb03d4244ef04.body instanceof ReadableStream || λb03d4244ef04.body instanceof ArrayBuffer ? [ λb03d4244ef04.body ] : [] ];
          } catch (λ7db5170ff3ea) {
            let λa93721515f3c = {
              setResponse: void 0,
              suppressError: !1
            };
            if (await λ9739d5e6157c.Cx.dispatch(λ07fe361a79e6.hooks.error.request, {
              rawrequest: λe32d1ba3f2fb,
              error: λ7db5170ff3ea
            }, λa93721515f3c), λa93721515f3c.suppressError || console.error("Error in controller request handler:", λ7db5170ff3ea), 
            λa93721515f3c.setResponse) return [ λa93721515f3c.setResponse, [] ];
            throw λ7db5170ff3ea;
          }
        },
        initRemoteTransport: async λ7db5170ff3ea => {
          let λ07fe361a79e6 = new λe32d1ba3f2fb.C({
            request: async ({remote: λe32d1ba3f2fb, method: λ7db5170ff3ea, body: λ07fe361a79e6, headers: λa93721515f3c}) => {
              let λ9739d5e6157c = await this.transport.request(new URL(λe32d1ba3f2fb), λ7db5170ff3ea, λ07fe361a79e6, λa93721515f3c, void 0);
              return [ λ9739d5e6157c, [ λ9739d5e6157c.body ] ];
            },
            sendSetCookie: async ({cookies: λe32d1ba3f2fb, options: λ7db5170ff3ea}) => {
              await this.loadSavedCookies(!0), λ7db5170ff3ea?.clear && this.cookieJar.clear(), 
              this.applyCookieSyncEntries(λe32d1ba3f2fb), await this.persistCookies(), await this.propagateCookieSync(λe32d1ba3f2fb, λ7db5170ff3ea);
            },
            connect: async ({url: λe32d1ba3f2fb, protocols: λ7db5170ff3ea, requestHeaders: λ07fe361a79e6, port: λa93721515f3c}) => {
              let λ9739d5e6157c, λb03d4244ef04 = new Promise(λe32d1ba3f2fb => λ9739d5e6157c = λe32d1ba3f2fb), [λced23515c3b9, λ3b4e894476d7] = this.transport.connect(new URL(λe32d1ba3f2fb), λ7db5170ff3ea, λ07fe361a79e6, (λe32d1ba3f2fb, λ7db5170ff3ea) => {
                λ9739d5e6157c({
                  result: "success",
                  protocol: λe32d1ba3f2fb,
                  extensions: λ7db5170ff3ea
                });
              }, λe32d1ba3f2fb => {
                λa93721515f3c.postMessage({
                  type: "data",
                  data: λe32d1ba3f2fb
                }, λe32d1ba3f2fb instanceof ArrayBuffer ? [ λe32d1ba3f2fb ] : []);
              }, (λe32d1ba3f2fb, λ7db5170ff3ea) => {
                λa93721515f3c.postMessage({
                  type: "close",
                  code: λe32d1ba3f2fb,
                  reason: λ7db5170ff3ea
                });
              }, λe32d1ba3f2fb => {
                λ9739d5e6157c({
                  result: "failure",
                  error: λe32d1ba3f2fb
                });
              });
              return λa93721515f3c.onmessageerror = λe32d1ba3f2fb => {
                console.error("Transport port messageerror (this should never happen!)", λe32d1ba3f2fb);
              }, λa93721515f3c.onmessage = ({data: λe32d1ba3f2fb}) => {
                "data" === λe32d1ba3f2fb.type ? λced23515c3b9(λe32d1ba3f2fb.data) : "close" === λe32d1ba3f2fb.type && λ3b4e894476d7(λe32d1ba3f2fb.code, λe32d1ba3f2fb.reason);
              }, [ await λb03d4244ef04, [] ];
            }
          }, "transport", (λe32d1ba3f2fb, λ07fe361a79e6) => λ7db5170ff3ea.postMessage(λe32d1ba3f2fb, λ07fe361a79e6));
          λ7db5170ff3ea.onmessageerror = λe32d1ba3f2fb => {
            console.error("Transport port messageerror (this should never happen!)", λe32d1ba3f2fb);
          }, λ7db5170ff3ea.onmessage = λe32d1ba3f2fb => {
            λ07fe361a79e6.recieve(λe32d1ba3f2fb.data);
          }, λ07fe361a79e6.call("ready", void 0, []);
        }
      };
      constructor(λ7db5170ff3ea) {
        this.init = λ7db5170ff3ea, (0, λced23515c3b9.O)(), this.id = b(), this.config = λb9b9945c68c4(λ3b4e894476d7, λ7db5170ff3ea.config || {}), 
        this.studyjetConfig = λb9b9945c68c4(λ522b20a6225f, λ9739d5e6157c.sb), this.studyjetConfig = λb9b9945c68c4(this.studyjetConfig, λ7db5170ff3ea.studyjetConfig || {}), 
        this.prefix = this.config.prefix + this.id + "/", this.serviceWorkerController = λ7db5170ff3ea.serviceworker, 
        this.ready = Promise.all([ new Promise(λe32d1ba3f2fb => {
          this.readyResolve = λe32d1ba3f2fb;
        }), this.loadStudyJetWasm(), this.loadSavedCookies(!0) ]).then(() => void 0), this.rpc = new λe32d1ba3f2fb.C(this.methods, "tabchannel-" + this.id, (λe32d1ba3f2fb, λ7db5170ff3ea) => {
          if (!this.port) throw Error("Port not found");
          this.port.postMessage(λe32d1ba3f2fb, λ7db5170ff3ea);
        }), this.transport = λ7db5170ff3ea.transport, this.cookieSyncChannel.addEventListener("message", this.onCookieSyncMessage), 
        this.setupMessagePort(), navigator.serviceWorker.addEventListener("message", λe32d1ba3f2fb => {
          if (λe32d1ba3f2fb.data?.$controller$setCookie && "object" == typeof λe32d1ba3f2fb.data.$controller$setCookie) {
            let λ7db5170ff3ea = λe32d1ba3f2fb.data.$controller$setCookie;
            if (λ7db5170ff3ea.controllerId && λ7db5170ff3ea.controllerId !== this.id) return;
            λ7db5170ff3ea.options?.clear && this.cookieJar.clear(), this.applyCookieSyncEntries(λ7db5170ff3ea.cookies), 
            "string" == typeof λ7db5170ff3ea.id && this.serviceWorkerController.postMessage({
              $sw$setCookieDone: {
                id: λ7db5170ff3ea.id
              }
            });
            return;
          }
          if (λe32d1ba3f2fb.data.$controller$swrevive) {
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
        let λe32d1ba3f2fb = new MessageChannel;
        this.port = λe32d1ba3f2fb.port1, this.port.addEventListener("message", this.onTabChannelMessage), 
        this.port.start(), this.serviceWorkerController.postMessage({
          $controller$init: {
            prefix: this.prefix,
            id: this.id
          }
        }, [ λe32d1ba3f2fb.port2 ]);
      }
      applyCookieSyncEntries(λe32d1ba3f2fb) {
        if (Array.isArray(λe32d1ba3f2fb)) for (let λ7db5170ff3ea of λe32d1ba3f2fb) "string" == typeof λ7db5170ff3ea?.url && "string" == typeof λ7db5170ff3ea.cookie && this.cookieJar.setCookies(λ7db5170ff3ea.cookie, new URL(λ7db5170ff3ea.url));
      }
      async propagateCookieSync(λe32d1ba3f2fb, λ7db5170ff3ea = {}) {
        this.port && await this.rpc.call("sendSetCookie", {
          cookies: λe32d1ba3f2fb,
          options: λ7db5170ff3ea
        });
      }
      async loadSavedCookies(λe32d1ba3f2fb = !1) {
        if (λe32d1ba3f2fb || this.cookieSyncDirty) return this.cookieSyncPromise || (this.cookieSyncPromise = (async () => {
          let λe32d1ba3f2fb = await w();
          λe32d1ba3f2fb && λe32d1ba3f2fb.updatedAt > this.cookieUpdatedAt && (this.cookieJar.load(λe32d1ba3f2fb.cookies), 
          this.cookieUpdatedAt = λe32d1ba3f2fb.updatedAt), this.cookieSyncDirty = !1;
        })().finally(() => {
          this.cookieSyncPromise = null;
        })), this.cookieSyncPromise;
      }
      async persistCookies() {
        let λe32d1ba3f2fb = await k(this.cookieJar.dump(), this.cookieUpdatedAt);
        λe32d1ba3f2fb <= this.cookieUpdatedAt || (this.cookieUpdatedAt = λe32d1ba3f2fb, 
        this.cookieSyncDirty = !1, this.cookieSyncChannel.postMessage({
          updatedAt: λe32d1ba3f2fb
        }));
      }
      setTransport(λe32d1ba3f2fb) {
        for (let λ7db5170ff3ea of (this.transport = λe32d1ba3f2fb, this.frames)) λ7db5170ff3ea.controller.transport = λe32d1ba3f2fb, 
        λ7db5170ff3ea.fetchHandler.client.transport = λe32d1ba3f2fb;
      }
      createFrame(λe32d1ba3f2fb, λ7db5170ff3ea = {}) {
        if (!this.ready) throw Error("Controller is not ready! Try awaiting controller.wait()");
        let λ07fe361a79e6 = new v(this, λe32d1ba3f2fb ??= document.createElement("iframe"), λ7db5170ff3ea);
        return this.frames.push(λ07fe361a79e6), λ07fe361a79e6;
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
            getInjectScripts: function e(λe32d1ba3f2fb, λ7db5170ff3ea, λ07fe361a79e6, λa93721515f3c, λ9739d5e6157c, λb03d4244ef04) {
              return (λced23515c3b9, λ3b4e894476d7, λ522b20a6225f, λcdae1eaceed6) => {
                var λc650cc70a4f9;
                return [ λcdae1eaceed6(λe32d1ba3f2fb.studyjetPath), λcdae1eaceed6(λ07fe361a79e6.href + λe32d1ba3f2fb.virtualWasmPath), λcdae1eaceed6(λe32d1ba3f2fb.injectPath), λcdae1eaceed6("data:text/javascript;charset=utf-8;base64," + (λc650cc70a4f9 = `\n\t\t\t\t\tdocument.querySelectorAll("script[studyjet-injected]").forEach(script => script.remove());\n\t\t\t\t\t$studyjetController.load({\n\t\t\t\t\t\tconfig: ${JSON.stringify(λe32d1ba3f2fb)},\n\t\t\t\t\t\tsjconfig: ${JSON.stringify(λ7db5170ff3ea)},\n\t\t\t\t\t\tprefix: new URL("${λ07fe361a79e6.href}"),\n\t\t\t\t\t\tcookies: ${JSON.stringify(λa93721515f3c.dump())},\n\t\t\t\t\t\tyieldGetInjectScripts: ${e.toString()},\n\t\t\t\t\t\tcodecEncode: ${λ9739d5e6157c.toString()},\n\t\t\t\t\t\tcodecDecode: ${λb03d4244ef04.toString()},\n\t\t\t\t\t\tinitHeaders: ${JSON.stringify(λ522b20a6225f.headers ?? [])},\n\t\t\t\t\t\thistory: ${JSON.stringify(λ522b20a6225f.history ?? [])},\n\t\t\t\t\t})\n\t\t\t\t`, 
                btoa((new TextEncoder).encode(λc650cc70a4f9).reduce((λe32d1ba3f2fb, λ7db5170ff3ea) => (λe32d1ba3f2fb.push(String.fromCharCode(λ7db5170ff3ea)), 
                λe32d1ba3f2fb), []).join("")))) ];
              };
            }(this.controller.config, this.controller.studyjetConfig, new URL(this.prefix, location.href), this.controller.cookieJar, this.controller.config.codec.encode, this.controller.config.codec.decode),
            getWorkerInjectScripts: (λe32d1ba3f2fb, λ7db5170ff3ea, λ07fe361a79e6) => {
              var λa93721515f3c;
              let λ9739d5e6157c = "";
              return λ9739d5e6157c += λ07fe361a79e6(this.controller.config.studyjetPath), λ9739d5e6157c += λ07fe361a79e6(this.prefix + this.controller.config.virtualWasmPath), 
              λ9739d5e6157c += λ07fe361a79e6("data:text/javascript;charset=utf-8;base64," + (λa93721515f3c = `\n\t\t\t\t\t(()=>{\n\t\t\t\t\t\tconst { StudyJetClient, CookieJar, setWasm } = $studyjet;\n\n\t\t\t\t\t\tsetWasm(Uint8Array.from(atob(self.WASM), (c) => c.charCodeAt(0)));\n\t\t\t\t\t\tdelete self.WASM;\n\n\t\t\t\t\t\tconst sjconfig = ${JSON.stringify(this.controller.studyjetConfig)};\n\t\t\t\t\t\tconst prefix = new URL("${this.prefix}", location.href);\n\n\t\t\t\t\t\tconst context = {\n\t\t\t\t\t\t\tconfig: sjconfig,\n\t\t\t\t\t\t\tprefix,\n\t\t\t\t\t\t\tinterface: {\n\t\t\t\t\t\t\t\tcodecEncode: ${this.controller.config.codec.encode.toString()},\n\t\t\t\t\t\t\t\tcodecDecode: ${this.controller.config.codec.decode.toString()},\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t};\n\n\t\t\t\t\t\tconst client = new StudyJetClient(globalThis, {\n\t\t\t\t\t\t\tcontext,\n\t\t\t\t\t\t\ttransport: null,\n\t\t\t\t\t\t});\n\n\t\t\t\t\t\tclient.hook();\n\t\t\t\t\t})();\n\t\t\t\t\t`, 
              btoa((new TextEncoder).encode(λa93721515f3c).reduce((λe32d1ba3f2fb, λ7db5170ff3ea) => (λe32d1ba3f2fb.push(String.fromCharCode(λ7db5170ff3ea)), 
              λe32d1ba3f2fb), []).join(""))));
            },
            codecEncode: this.controller.config.codec.encode,
            codecDecode: this.controller.config.codec.decode
          }
        };
      }
      plugins=[];
      constructor(λe32d1ba3f2fb, λ07fe361a79e6, λa93721515f3c = {}) {
        for (const λced23515c3b9 of (this.controller = λe32d1ba3f2fb, this.element = λ07fe361a79e6, 
        this.options = λa93721515f3c, this.id = b(), this.prefix = this.controller.prefix + this.id + "/", 
        this.fetchHandler = new λ9739d5e6157c.mK({
          crossOriginIsolated: self.crossOriginIsolated,
          context: this.context,
          transport: λe32d1ba3f2fb.transport,
          async sendSetCookie(λ7db5170ff3ea, λ07fe361a79e6) {
            await λe32d1ba3f2fb.persistCookies(), await λe32d1ba3f2fb.propagateCookieSync(λ7db5170ff3ea.map(({url: λe32d1ba3f2fb, cookie: λ7db5170ff3ea}) => ({
              url: λe32d1ba3f2fb.href,
              cookie: λ7db5170ff3ea
            })), λ07fe361a79e6);
          },
          fetchBlobUrl: async λe32d1ba3f2fb => λ7db5170ff3ea.Sr.fromNativeResponse(await fetch(λe32d1ba3f2fb)),
          fetchDataUrl: async λe32d1ba3f2fb => λ7db5170ff3ea.Sr.fromNativeResponse(await fetch(λe32d1ba3f2fb))
        }), this.hooks = {
          fetch: this.fetchHandler.hooks.fetch,
          init: λ9739d5e6157c.Cx.create(),
          error: λ9739d5e6157c.Cx.create()
        }, λ07fe361a79e6[λb03d4244ef04.I] = this, this.plugins = λa93721515f3c.plugins ?? [], 
        this.plugins)) {
          for (const λe32d1ba3f2fb of λced23515c3b9.dependencies) if (!this.plugins.find(λ7db5170ff3ea => λ7db5170ff3ea.name === λe32d1ba3f2fb)) throw Error(`Dependency ${λe32d1ba3f2fb} not found for plugin ${λced23515c3b9.name}`);
          λced23515c3b9.install(this);
        }
      }
      getPlugin(λe32d1ba3f2fb) {
        let λ7db5170ff3ea = this.plugins.find(λ7db5170ff3ea => λ7db5170ff3ea.name === λe32d1ba3f2fb);
        if (!λ7db5170ff3ea) throw Error(`Plugin ${λe32d1ba3f2fb} not found`);
        return λ7db5170ff3ea;
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
      go(λe32d1ba3f2fb) {
        let λ7db5170ff3ea = (0, λ9739d5e6157c.Oy)(λe32d1ba3f2fb, this.context, {
          origin: new URL(location.href),
          base: new URL(location.href)
        });
        this.element.src = λ7db5170ff3ea;
      }
    }
  })(), $studyjetController = λ07fe361a79e6;
})();
