var $studyjetController;

(() => {
  var λ9f95aaad1e34 = {
    286(λ9f95aaad1e34, λ29dab476b03e, λ3a0bbd01c455) {
      λ3a0bbd01c455.d(λ29dab476b03e, {
        I: () => λf4b6a2009a90
      });
      let λf4b6a2009a90 = Symbol.for("controller frame handle");
    },
    355(λ9f95aaad1e34, λ29dab476b03e, λ3a0bbd01c455) {
      λ3a0bbd01c455.d(λ29dab476b03e, {
        O: () => s,
        x: () => λf4b6a2009a90
      });
      let λf4b6a2009a90 = "0.0.14";
      function s() {
        if ("undefined" == typeof $studyjet) throw Error("@mercuryworkshop/studyjet is not loaded. Load studyjet before the controller.");
        var λ9f95aaad1e34 = "2.0.67-alpha.2", λ29dab476b03e = $studyjet.versionInfo.version;
        if (λ9f95aaad1e34 !== λ29dab476b03e) throw Error(`@mercuryworkshop/studyjet version mismatch: this build expects ${λ9f95aaad1e34}, but the loaded runtime is ${λ29dab476b03e}`);
      }
    },
    805(λ9f95aaad1e34, λ29dab476b03e, λ3a0bbd01c455) {
      λ3a0bbd01c455.d(λ29dab476b03e, {
        C: () => o
      });
      class o {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λ9f95aaad1e34, λ29dab476b03e, λ3a0bbd01c455) {
          this.methods = λ9f95aaad1e34, this.id = λ29dab476b03e, this.sendRaw = λ3a0bbd01c455;
        }
        recieve(λ9f95aaad1e34) {
          if (null == λ9f95aaad1e34 || "object" != typeof λ9f95aaad1e34) return;
          let λ29dab476b03e = λ9f95aaad1e34[this.id];
          if (null == λ29dab476b03e || "object" != typeof λ29dab476b03e) return;
          let λ3a0bbd01c455 = λ29dab476b03e.$type;
          if ("response" === λ3a0bbd01c455) {
            let λ9f95aaad1e34 = λ29dab476b03e.$token, λ3a0bbd01c455 = λ29dab476b03e.$data, λf4b6a2009a90 = λ29dab476b03e.$error, λ2fb3adb91a15 = this.promiseCallbacks.get(λ9f95aaad1e34);
            if (!λ2fb3adb91a15) return;
            this.promiseCallbacks.delete(λ9f95aaad1e34), void 0 !== λf4b6a2009a90 ? λ2fb3adb91a15.reject(Error(λf4b6a2009a90)) : λ2fb3adb91a15.resolve(λ3a0bbd01c455);
          } else if ("request" === λ3a0bbd01c455) {
            let λ9f95aaad1e34 = λ29dab476b03e.$method, λ3a0bbd01c455 = λ29dab476b03e.$args;
            this.methods[λ9f95aaad1e34](λ3a0bbd01c455).then(λ9f95aaad1e34 => {
              this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ29dab476b03e.$token,
                  $data: λ9f95aaad1e34?.[0]
                }
              }, λ9f95aaad1e34?.[1]);
            }).catch(λ9f95aaad1e34 => {
              console.error(λ9f95aaad1e34), this.sendRaw({
                [this.id]: {
                  $type: "response",
                  $token: λ29dab476b03e.$token,
                  $error: λ9f95aaad1e34?.toString() || "Unknown error"
                }
              }, []);
            });
          }
        }
        call(λ9f95aaad1e34, λ29dab476b03e, λ3a0bbd01c455 = []) {
          let λf4b6a2009a90 = this.counter++;
          return new Promise((λ2fb3adb91a15, λ278ae6a6dc73) => {
            this.promiseCallbacks.set(λf4b6a2009a90, {
              resolve: λ2fb3adb91a15,
              reject: λ278ae6a6dc73
            }), this.sendRaw({
              [this.id]: {
                $type: "request",
                $method: λ9f95aaad1e34,
                $args: λ29dab476b03e,
                $token: λf4b6a2009a90
              }
            }, λ3a0bbd01c455);
          });
        }
      }
    },
    986(λ9f95aaad1e34) {
      let λ29dab476b03e = Object.getPrototypeOf({});
      function r() {
        return function(λ9f95aaad1e34) {
          return "object" == typeof λ9f95aaad1e34 && null !== λ9f95aaad1e34 && !(λ9f95aaad1e34 instanceof RegExp) && !(λ9f95aaad1e34 instanceof Date);
        };
      }
      function o(λ9f95aaad1e34) {
        function o(λ9f95aaad1e34) {
          return "constructor" !== λ9f95aaad1e34 && "prototype" !== λ9f95aaad1e34 && "__proto__" !== λ9f95aaad1e34;
        }
        let λ3a0bbd01c455 = Object.prototype.propertyIsEnumerable, λf4b6a2009a90 = λ9f95aaad1e34?.symbols ? function(λ9f95aaad1e34) {
          let λ29dab476b03e = Object.keys(λ9f95aaad1e34), λf4b6a2009a90 = Object.getOwnPropertySymbols(λ9f95aaad1e34);
          for (let λ2fb3adb91a15 = 0, λ278ae6a6dc73 = λf4b6a2009a90.length; λ2fb3adb91a15 < λ278ae6a6dc73; ++λ2fb3adb91a15) λ3a0bbd01c455.call(λ9f95aaad1e34, λf4b6a2009a90[λ2fb3adb91a15]) && λ29dab476b03e.push(λf4b6a2009a90[λ2fb3adb91a15]);
          return λ29dab476b03e;
        } : Object.keys, λ2fb3adb91a15 = "function" == typeof λ9f95aaad1e34?.cloneProtoObject ? λ9f95aaad1e34.cloneProtoObject : void 0, λ278ae6a6dc73 = "function" == typeof λ9f95aaad1e34?.isMergeableObject ? λ9f95aaad1e34.isMergeableObject : r(), λcb05c203aaf4 = λ9f95aaad1e34?.onlyDefinedProperties === !0, λf78b6c5b2737 = λ9f95aaad1e34 && "function" == typeof λ9f95aaad1e34.mergeArray ? λ9f95aaad1e34.mergeArray({
          clone: d,
          deepmerge: h,
          getKeys: λf4b6a2009a90,
          isMergeableObject: λ278ae6a6dc73
        }) : function(λ9f95aaad1e34, λ29dab476b03e) {
          let λ3a0bbd01c455 = λ9f95aaad1e34.length, λf4b6a2009a90 = λ29dab476b03e.length, λ2fb3adb91a15 = 0, λ278ae6a6dc73 = Array(λ3a0bbd01c455 + λf4b6a2009a90);
          for (;λ2fb3adb91a15 < λ3a0bbd01c455; ++λ2fb3adb91a15) λ278ae6a6dc73[λ2fb3adb91a15] = d(λ9f95aaad1e34[λ2fb3adb91a15]);
          for (λ2fb3adb91a15 = 0; λ2fb3adb91a15 < λf4b6a2009a90; ++λ2fb3adb91a15) λ278ae6a6dc73[λ2fb3adb91a15 + λ3a0bbd01c455] = d(λ29dab476b03e[λ2fb3adb91a15]);
          return λ278ae6a6dc73;
        };
        function d(λ9f95aaad1e34) {
          return λ278ae6a6dc73(λ9f95aaad1e34) ? Array.isArray(λ9f95aaad1e34) ? function(λ9f95aaad1e34) {
            let λ29dab476b03e = 0, λ3a0bbd01c455 = λ9f95aaad1e34.length, λf4b6a2009a90 = Array(λ3a0bbd01c455);
            for (;λ29dab476b03e < λ3a0bbd01c455; ++λ29dab476b03e) λf4b6a2009a90[λ29dab476b03e] = d(λ9f95aaad1e34[λ29dab476b03e]);
            return λf4b6a2009a90;
          }(λ9f95aaad1e34) : function(λ9f95aaad1e34) {
            let λ3a0bbd01c455, λ278ae6a6dc73, λcb05c203aaf4, λf78b6c5b2737 = {};
            if (λ2fb3adb91a15 && Object.getPrototypeOf(λ9f95aaad1e34) !== λ29dab476b03e) return λ2fb3adb91a15(λ9f95aaad1e34);
            let λd4c426a3eb11 = λf4b6a2009a90(λ9f95aaad1e34);
            for (λ3a0bbd01c455 = 0, λ278ae6a6dc73 = λd4c426a3eb11.length; λ3a0bbd01c455 < λ278ae6a6dc73; ++λ3a0bbd01c455) o(λcb05c203aaf4 = λd4c426a3eb11[λ3a0bbd01c455]) && (λf78b6c5b2737[λcb05c203aaf4] = d(λ9f95aaad1e34[λcb05c203aaf4]));
            return λf78b6c5b2737;
          }(λ9f95aaad1e34) : λ9f95aaad1e34;
        }
        function h(λ9f95aaad1e34, λ3a0bbd01c455) {
          if (λcb05c203aaf4 && void 0 === λ3a0bbd01c455) return d(λ9f95aaad1e34);
          let λd4c426a3eb11 = Array.isArray(λ3a0bbd01c455), λe9b6f1689551 = Array.isArray(λ9f95aaad1e34);
          return "object" != typeof λ3a0bbd01c455 || null === λ3a0bbd01c455 ? λ3a0bbd01c455 : λ278ae6a6dc73(λ9f95aaad1e34) ? λd4c426a3eb11 && λe9b6f1689551 ? λf78b6c5b2737(λ9f95aaad1e34, λ3a0bbd01c455) : λd4c426a3eb11 !== λe9b6f1689551 ? d(λ3a0bbd01c455) : function(λ9f95aaad1e34, λ3a0bbd01c455) {
            let λf78b6c5b2737, λd4c426a3eb11, λe9b6f1689551, λ8d944e991cfa = {}, λc831fbbec7e8 = λf4b6a2009a90(λ9f95aaad1e34), λ6ffd9b321086 = λf4b6a2009a90(λ3a0bbd01c455);
            for (λf78b6c5b2737 = 0, λd4c426a3eb11 = λc831fbbec7e8.length; λf78b6c5b2737 < λd4c426a3eb11; ++λf78b6c5b2737) o(λe9b6f1689551 = λc831fbbec7e8[λf78b6c5b2737]) && -1 === λ6ffd9b321086.indexOf(λe9b6f1689551) && (λ8d944e991cfa[λe9b6f1689551] = d(λ9f95aaad1e34[λe9b6f1689551]));
            for (λf78b6c5b2737 = 0, λd4c426a3eb11 = λ6ffd9b321086.length; λf78b6c5b2737 < λd4c426a3eb11; ++λf78b6c5b2737) if (o(λe9b6f1689551 = λ6ffd9b321086[λf78b6c5b2737])) if (λe9b6f1689551 in λ9f95aaad1e34) -1 !== λc831fbbec7e8.indexOf(λe9b6f1689551) && (λ2fb3adb91a15 && λ278ae6a6dc73(λ3a0bbd01c455[λe9b6f1689551]) && Object.getPrototypeOf(λ3a0bbd01c455[λe9b6f1689551]) !== λ29dab476b03e ? λ8d944e991cfa[λe9b6f1689551] = λ2fb3adb91a15(λ3a0bbd01c455[λe9b6f1689551]) : λ8d944e991cfa[λe9b6f1689551] = h(λ9f95aaad1e34[λe9b6f1689551], λ3a0bbd01c455[λe9b6f1689551])); else {
              if (λcb05c203aaf4 && void 0 === λ3a0bbd01c455[λe9b6f1689551]) continue;
              λ8d944e991cfa[λe9b6f1689551] = d(λ3a0bbd01c455[λe9b6f1689551]);
            }
            return λ8d944e991cfa;
          }(λ9f95aaad1e34, λ3a0bbd01c455) : d(λ3a0bbd01c455);
        }
        return λ9f95aaad1e34?.all ? function() {
          let λ9f95aaad1e34;
          switch (arguments.length) {
           case 0:
            return {};

           case 1:
            return d(arguments[0]);

           case 2:
            return h(arguments[0], arguments[1]);
          }
          for (let λ29dab476b03e = 0, λ3a0bbd01c455 = arguments.length; λ29dab476b03e < λ3a0bbd01c455; ++λ29dab476b03e) λ9f95aaad1e34 = h(λ9f95aaad1e34, arguments[λ29dab476b03e]);
          return λ9f95aaad1e34;
        } : h;
      }
      λ9f95aaad1e34.exports = o, λ9f95aaad1e34.exports.default = o, λ9f95aaad1e34.exports.deepmerge = o, 
      Object.defineProperty(λ9f95aaad1e34.exports, "isMergeableObject", {
        get: r
      });
    },
    235(λ9f95aaad1e34, λ29dab476b03e, λ3a0bbd01c455) {
      λ3a0bbd01c455.d(λ29dab476b03e, {
        Sr: () => s
      }), WebSocket.CLOSED, WebSocket.CONNECTING, WebSocket.OPEN, EventTarget;
      let λf4b6a2009a90 = [ 101, 204, 205, 304 ];
      class s extends Response {
        url;
        rawHeaders;
        redirected=!1;
        static fromTransferrableResponse(λ9f95aaad1e34, λ29dab476b03e) {
          let λ3a0bbd01c455 = new s(λf4b6a2009a90.includes(λ9f95aaad1e34.status) ? void 0 : λ9f95aaad1e34.body, {
            headers: new Headers(λ9f95aaad1e34.headers),
            status: λ9f95aaad1e34.status,
            statusText: λ9f95aaad1e34.statusText
          });
          return λ3a0bbd01c455.url = λ29dab476b03e, λ3a0bbd01c455.redirected = λ9f95aaad1e34.status >= 300 && λ9f95aaad1e34.status < 400 && void 0 !== λ9f95aaad1e34.headers.location, 
          λ3a0bbd01c455.rawHeaders = λ9f95aaad1e34.headers, λ3a0bbd01c455;
        }
        static fromNativeResponse(λ9f95aaad1e34) {
          let λ29dab476b03e = new s(λf4b6a2009a90.includes(λ9f95aaad1e34.status) ? void 0 : λ9f95aaad1e34.body, {
            headers: λ9f95aaad1e34.headers,
            status: λ9f95aaad1e34.status,
            statusText: λ9f95aaad1e34.statusText
          });
          return λ29dab476b03e.url = λ9f95aaad1e34.url, λ29dab476b03e.rawHeaders = [ ...λ9f95aaad1e34.headers ], 
          λ29dab476b03e.redirected = λ9f95aaad1e34.redirected, λ29dab476b03e;
        }
      }
    },
    423(λ9f95aaad1e34, λ29dab476b03e, λ3a0bbd01c455) {
      λ3a0bbd01c455.d(λ29dab476b03e, {
        Cx: () => λ03cde9881faa,
        Oy: () => λc6e8d9669b16,
        cP: () => λ2fb3adb91a15,
        ht: () => λ7681452a179a,
        k_: () => λcb05c203aaf4,
        mK: () => λ8d944e991cfa,
        sb: () => λa7ffa6c54273,
        uh: () => λ6ffd9b321086
      });
      let {BareResponse: λf4b6a2009a90, CookieJar: λ2fb3adb91a15, IncrementalHtmlRewriter: λ278ae6a6dc73, Plugin: λcb05c203aaf4, STUDYJETCLIENT: λf78b6c5b2737, STUDYJETCLIENTNAME: λd4c426a3eb11, StudyJetClient: λe9b6f1689551, StudyJetFetchHandler: λ8d944e991cfa, StudyJetFetchTrackedClient: λc831fbbec7e8, StudyJetHeaders: λ6ffd9b321086, Tap: λ03cde9881faa, createLocationProxy: λb94cac2fec71, defaultConfig: λa7ffa6c54273, defaultConfigDev: λ7dfe8561d7d6, flagEnabled: λaf746b328ece, getOwnPropertyDescriptorHandler: λ924dc665c17b, getRewriter: λd2412a71a7c5, getScriptBlockTypeString: λ528745487910, htmlRules: λ1aa66066cf32, isArchiveMimeType: λ61392f741973, isAudioOrVideoMimeType: λ146c13ea02f7, isFontMimeType: λ313fea9b47ef, isHtmlMimeType: λd078065e98d7, isImageMimeType: λ5f70909b3cb7, isInlineDisplayableMimeType: λ3311c862d319, isJavascriptMimeType: λ1c66c2cb4c43, isJavascriptMimeTypeEssenceMatch: λd140a0da82db, isModuleScriptType: λ8e91a6155bb8, isScriptType: λ065decd7635d, isScriptableMimeType: λcefa295da25c, isXmlMimeType: λ785629550f84, isZipBasedMimeType: λ6f3ca75e8113, isdedicated: λd7c83dea66aa, isshared: λf794898635eb, issw: λ251e1373193e, iswindow: λ0f419b696861, isworker: λ101dd7330409, parseMimeType: λd3e6071304ea, rewriteBlob: λ91bbc9c23a6a, rewriteCss: λe810676322f9, rewriteHtml: λ371065a19695, rewriteJs: λ7f051c2ca74e, rewriteJsInner: λ8fdb9293878d, rewriteSrcset: λ4eb01f4f11b5, rewriteUrl: λc6e8d9669b16, rewriteWorkers: λ169c6dccacec, setWasm: λ7681452a179a, unrewriteBlob: λ4caa3eecd9b7, unrewriteCss: λ72582032c246, unrewriteHtml: λ250edf2e7efb, unrewriteUrl: λ24a72d3369ba, versionInfo: λ5441f81a1c5a} = globalThis.$studyjet;
    }
  }, λ29dab476b03e = {};
  function r(λ3a0bbd01c455) {
    var λf4b6a2009a90 = λ29dab476b03e[λ3a0bbd01c455];
    if (void 0 !== λf4b6a2009a90) return λf4b6a2009a90.exports;
    var λ2fb3adb91a15 = λ29dab476b03e[λ3a0bbd01c455] = {
      exports: {}
    };
    return λ9f95aaad1e34[λ3a0bbd01c455](λ2fb3adb91a15, λ2fb3adb91a15.exports, r), λ2fb3adb91a15.exports;
  }
  r.n = λ9f95aaad1e34 => {
    var λ29dab476b03e = λ9f95aaad1e34 && λ9f95aaad1e34.__esModule ? () => λ9f95aaad1e34.default : () => λ9f95aaad1e34;
    return r.d(λ29dab476b03e, {
      a: λ29dab476b03e
    }), λ29dab476b03e;
  }, r.d = (λ9f95aaad1e34, λ29dab476b03e) => {
    for (var λ3a0bbd01c455 in λ29dab476b03e) r.o(λ29dab476b03e, λ3a0bbd01c455) && !r.o(λ9f95aaad1e34, λ3a0bbd01c455) && Object.defineProperty(λ9f95aaad1e34, λ3a0bbd01c455, {
      enumerable: !0,
      get: λ29dab476b03e[λ3a0bbd01c455]
    });
  }, r.o = (λ9f95aaad1e34, λ29dab476b03e) => Object.prototype.hasOwnProperty.call(λ9f95aaad1e34, λ29dab476b03e), 
  r.r = λ9f95aaad1e34 => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λ9f95aaad1e34, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(λ9f95aaad1e34, "__esModule", {
      value: !0
    });
  };
  var λ3a0bbd01c455 = {};
  (() => {
    r.r(λ3a0bbd01c455), r.d(λ3a0bbd01c455, {
      Controller: () => S,
      Frame: () => v,
      ManagedPlugin: () => d,
      VERSION: () => λcb05c203aaf4.x,
      assertRuntimeStudyJetVersion: () => λcb05c203aaf4.O,
      config: () => λf78b6c5b2737
    });
    var λ9f95aaad1e34 = r(805), λ29dab476b03e = r(235), λf4b6a2009a90 = r(986), λ2fb3adb91a15 = r(423), λ278ae6a6dc73 = r(286), λcb05c203aaf4 = r(355);
    let λf78b6c5b2737 = {
      prefix: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/~/study/",
      studyjetPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/studyjet/@r69c18f9bd4ed175c9ea505b8!.js",
      injectPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/controller/@r9e855ac82edc4b51e1340564!.js",
      wasmPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/studyjet/@r55286cfe09d741023cc3e1d6!.wasm",
      virtualWasmPath: "studyjet.wasm.js",
      codec: {
        encode: λ9f95aaad1e34 => λ9f95aaad1e34 ? encodeURIComponent(λ9f95aaad1e34) : λ9f95aaad1e34,
        decode: λ9f95aaad1e34 => λ9f95aaad1e34 ? decodeURIComponent(λ9f95aaad1e34) : λ9f95aaad1e34
      }
    }, λd4c426a3eb11 = {
      flags: {
        ...λ2fb3adb91a15.sb.flags,
        allowFailedIntercepts: !0
      },
      maskedfiles: [ "inject.js", "studyjet.wasm.js" ]
    };
    class d extends λ2fb3adb91a15.k_ {
      frame=null;
      dependencies=[];
      constructor(λ9f95aaad1e34, λ29dab476b03e) {
        super(λ9f95aaad1e34), this.dependencies = λ29dab476b03e;
      }
      install(λ9f95aaad1e34) {
        this.frame = λ9f95aaad1e34;
      }
    }
    let λe9b6f1689551 = "state", λ8d944e991cfa = "cookies", λc831fbbec7e8 = null;
    function u(λ9f95aaad1e34) {
      return "object" == typeof λ9f95aaad1e34 && null !== λ9f95aaad1e34 && "number" == typeof λ9f95aaad1e34.updatedAt && Number.isFinite(λ9f95aaad1e34.updatedAt) && "string" == typeof λ9f95aaad1e34.cookies ? λ9f95aaad1e34 : null;
    }
    function y(λ9f95aaad1e34) {
      return new Promise((λ29dab476b03e, λ3a0bbd01c455) => {
        λ9f95aaad1e34.onsuccess = () => λ29dab476b03e(λ9f95aaad1e34.result), λ9f95aaad1e34.onerror = () => λ3a0bbd01c455(λ9f95aaad1e34.error ?? Error("IndexedDB request failed"));
      });
    }
    function m(λ9f95aaad1e34) {
      return new Promise((λ29dab476b03e, λ3a0bbd01c455) => {
        λ9f95aaad1e34.oncomplete = () => λ29dab476b03e(), λ9f95aaad1e34.onabort = () => λ3a0bbd01c455(λ9f95aaad1e34.error ?? Error("IndexedDB transaction aborted")), 
        λ9f95aaad1e34.onerror = () => λ3a0bbd01c455(λ9f95aaad1e34.error ?? Error("IndexedDB transaction failed"));
      });
    }
    function g() {
      return λc831fbbec7e8 || (λc831fbbec7e8 = new Promise((λ9f95aaad1e34, λ29dab476b03e) => {
        let λ3a0bbd01c455 = indexedDB.open("@d941bc65af3", 1);
        λ3a0bbd01c455.onupgradeneeded = () => {
          let λ9f95aaad1e34 = λ3a0bbd01c455.result;
          λ9f95aaad1e34.objectStoreNames.contains(λe9b6f1689551) || λ9f95aaad1e34.createObjectStore(λe9b6f1689551);
        }, λ3a0bbd01c455.onsuccess = () => λ9f95aaad1e34(λ3a0bbd01c455.result), λ3a0bbd01c455.onerror = () => λ29dab476b03e(λ3a0bbd01c455.error ?? Error("Failed to open cookie database"));
      }));
    }
    async function w() {
      try {
        let λ9f95aaad1e34 = (await g()).transaction(λe9b6f1689551, "readonly"), λ29dab476b03e = λ9f95aaad1e34.objectStore(λe9b6f1689551), λ3a0bbd01c455 = await y(λ29dab476b03e.get(λ8d944e991cfa));
        return await m(λ9f95aaad1e34), u(λ3a0bbd01c455);
      } catch (λ9f95aaad1e34) {
        return console.error("Failed to read persisted controller cookies:", λ9f95aaad1e34), 
        null;
      }
    }
    async function k(λ9f95aaad1e34, λ29dab476b03e) {
      try {
        let λ3a0bbd01c455 = (await g()).transaction(λe9b6f1689551, "readwrite"), λf4b6a2009a90 = λ3a0bbd01c455.objectStore(λe9b6f1689551), λ2fb3adb91a15 = u(await y(λf4b6a2009a90.get(λ8d944e991cfa))), λ278ae6a6dc73 = Math.max(Date.now(), λ29dab476b03e + 1, (λ2fb3adb91a15?.updatedAt ?? 0) + 1);
        return λf4b6a2009a90.put({
          updatedAt: λ278ae6a6dc73,
          cookies: λ9f95aaad1e34
        }, λ8d944e991cfa), await m(λ3a0bbd01c455), λ278ae6a6dc73;
      } catch (λ9f95aaad1e34) {
        return console.error("Failed to persist controller cookies:", λ9f95aaad1e34), λ29dab476b03e;
      }
    }
    function b() {
      return Math.random().toString(36).substring(2, 10);
    }
    let λ6ffd9b321086 = (0, λf4b6a2009a90.deepmerge)();
    class S {
      init;
      id;
      config;
      studyjetConfig;
      prefix;
      cookieJar=new λ2fb3adb91a15.cP;
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
      onTabChannelMessage=λ9f95aaad1e34 => {
        this.rpc.recieve(λ9f95aaad1e34.data);
      };
      onCookieSyncMessage=λ9f95aaad1e34 => {
        let λ29dab476b03e = "object" == typeof λ9f95aaad1e34.data && null !== λ9f95aaad1e34.data ? λ9f95aaad1e34.data.updatedAt : void 0;
        "number" != typeof λ29dab476b03e || λ29dab476b03e <= this.cookieUpdatedAt || (this.cookieSyncDirty = !0, 
        this.loadSavedCookies());
      };
      async loadStudyJetWasm() {
        if (this.wasmAlreadyFetched) return;
        let λ9f95aaad1e34 = await fetch(this.config.wasmPath);
        (0, λ2fb3adb91a15.ht)(await λ9f95aaad1e34.arrayBuffer()), this.wasmAlreadyFetched = !0;
      }
      methods={
        ready: async () => {
          this.readyResolve(), setTimeout(() => {
            this.guardServiceWorkerRevive = !1;
          }, 5e3);
        },
        request: async λ9f95aaad1e34 => {
          let λ29dab476b03e = new URL(λ9f95aaad1e34.rawUrl).pathname, λ3a0bbd01c455 = this.frames.find(λ9f95aaad1e34 => λ29dab476b03e.startsWith(λ9f95aaad1e34.prefix));
          if (!λ3a0bbd01c455) throw Error("No frame found for request");
          try {
            if (await this.loadSavedCookies(), λ29dab476b03e === λ3a0bbd01c455.prefix + this.config.virtualWasmPath) {
              if (!this.wasmPayload) {
                let λ9f95aaad1e34 = await fetch(this.config.wasmPath), λ29dab476b03e = await λ9f95aaad1e34.arrayBuffer(), λ3a0bbd01c455 = btoa(new Uint8Array(λ29dab476b03e).reduce((λ9f95aaad1e34, λ29dab476b03e) => (λ9f95aaad1e34.push(String.fromCharCode(λ29dab476b03e)), 
                λ9f95aaad1e34), []).join(""));
                this.wasmPayload = `self.WASM = '${λ3a0bbd01c455}';`;
              }
              return [ {
                body: this.wasmPayload,
                status: 200,
                statusText: "OK",
                headers: [ [ "Content-Type", "application/javascript" ] ]
              }, [] ];
            }
            let λf4b6a2009a90 = λ2fb3adb91a15.uh.fromRawHeaders(λ9f95aaad1e34.initialHeaders), λ278ae6a6dc73 = await λ3a0bbd01c455.fetchHandler.handleFetch({
              initialHeaders: λf4b6a2009a90,
              rawClientUrl: λ9f95aaad1e34.rawClientUrl ? new URL(λ9f95aaad1e34.rawClientUrl) : void 0,
              rawUrl: new URL(λ9f95aaad1e34.rawUrl),
              rawReferrer: λ9f95aaad1e34.rawReferrer,
              rawDestination: λ9f95aaad1e34.destination,
              method: λ9f95aaad1e34.method,
              mode: λ9f95aaad1e34.mode,
              referrer: λ9f95aaad1e34.referrer,
              body: λ9f95aaad1e34.body,
              cache: λ9f95aaad1e34.cache,
              clientId: λ9f95aaad1e34.clientId
            });
            return [ {
              body: λ278ae6a6dc73.body,
              status: λ278ae6a6dc73.status,
              statusText: λ278ae6a6dc73.statusText,
              headers: λ278ae6a6dc73.headers.toRawHeaders()
            }, λ278ae6a6dc73.body instanceof ReadableStream || λ278ae6a6dc73.body instanceof ArrayBuffer ? [ λ278ae6a6dc73.body ] : [] ];
          } catch (λ29dab476b03e) {
            let λf4b6a2009a90 = {
              setResponse: void 0,
              suppressError: !1
            };
            if (await λ2fb3adb91a15.Cx.dispatch(λ3a0bbd01c455.hooks.error.request, {
              rawrequest: λ9f95aaad1e34,
              error: λ29dab476b03e
            }, λf4b6a2009a90), λf4b6a2009a90.suppressError || console.error("Error in controller request handler:", λ29dab476b03e), 
            λf4b6a2009a90.setResponse) return [ λf4b6a2009a90.setResponse, [] ];
            throw λ29dab476b03e;
          }
        },
        initRemoteTransport: async λ29dab476b03e => {
          let λ3a0bbd01c455 = new λ9f95aaad1e34.C({
            request: async ({remote: λ9f95aaad1e34, method: λ29dab476b03e, body: λ3a0bbd01c455, headers: λf4b6a2009a90}) => {
              let λ2fb3adb91a15 = await this.transport.request(new URL(λ9f95aaad1e34), λ29dab476b03e, λ3a0bbd01c455, λf4b6a2009a90, void 0);
              return [ λ2fb3adb91a15, [ λ2fb3adb91a15.body ] ];
            },
            sendSetCookie: async ({cookies: λ9f95aaad1e34, options: λ29dab476b03e}) => {
              await this.loadSavedCookies(!0), λ29dab476b03e?.clear && this.cookieJar.clear(), 
              this.applyCookieSyncEntries(λ9f95aaad1e34), await this.persistCookies(), await this.propagateCookieSync(λ9f95aaad1e34, λ29dab476b03e);
            },
            connect: async ({url: λ9f95aaad1e34, protocols: λ29dab476b03e, requestHeaders: λ3a0bbd01c455, port: λf4b6a2009a90}) => {
              let λ2fb3adb91a15, λ278ae6a6dc73 = new Promise(λ9f95aaad1e34 => λ2fb3adb91a15 = λ9f95aaad1e34), [λcb05c203aaf4, λf78b6c5b2737] = this.transport.connect(new URL(λ9f95aaad1e34), λ29dab476b03e, λ3a0bbd01c455, (λ9f95aaad1e34, λ29dab476b03e) => {
                λ2fb3adb91a15({
                  result: "success",
                  protocol: λ9f95aaad1e34,
                  extensions: λ29dab476b03e
                });
              }, λ9f95aaad1e34 => {
                λf4b6a2009a90.postMessage({
                  type: "data",
                  data: λ9f95aaad1e34
                }, λ9f95aaad1e34 instanceof ArrayBuffer ? [ λ9f95aaad1e34 ] : []);
              }, (λ9f95aaad1e34, λ29dab476b03e) => {
                λf4b6a2009a90.postMessage({
                  type: "close",
                  code: λ9f95aaad1e34,
                  reason: λ29dab476b03e
                });
              }, λ9f95aaad1e34 => {
                λ2fb3adb91a15({
                  result: "failure",
                  error: λ9f95aaad1e34
                });
              });
              return λf4b6a2009a90.onmessageerror = λ9f95aaad1e34 => {
                console.error("Transport port messageerror (this should never happen!)", λ9f95aaad1e34);
              }, λf4b6a2009a90.onmessage = ({data: λ9f95aaad1e34}) => {
                "data" === λ9f95aaad1e34.type ? λcb05c203aaf4(λ9f95aaad1e34.data) : "close" === λ9f95aaad1e34.type && λf78b6c5b2737(λ9f95aaad1e34.code, λ9f95aaad1e34.reason);
              }, [ await λ278ae6a6dc73, [] ];
            }
          }, "transport", (λ9f95aaad1e34, λ3a0bbd01c455) => λ29dab476b03e.postMessage(λ9f95aaad1e34, λ3a0bbd01c455));
          λ29dab476b03e.onmessageerror = λ9f95aaad1e34 => {
            console.error("Transport port messageerror (this should never happen!)", λ9f95aaad1e34);
          }, λ29dab476b03e.onmessage = λ9f95aaad1e34 => {
            λ3a0bbd01c455.recieve(λ9f95aaad1e34.data);
          }, λ3a0bbd01c455.call("ready", void 0, []);
        }
      };
      constructor(λ29dab476b03e) {
        this.init = λ29dab476b03e, (0, λcb05c203aaf4.O)(), this.id = b(), this.config = λ6ffd9b321086(λf78b6c5b2737, λ29dab476b03e.config || {}), 
        this.studyjetConfig = λ6ffd9b321086(λd4c426a3eb11, λ2fb3adb91a15.sb), this.studyjetConfig = λ6ffd9b321086(this.studyjetConfig, λ29dab476b03e.studyjetConfig || {}), 
        this.prefix = this.config.prefix + this.id + "/", this.serviceWorkerController = λ29dab476b03e.serviceworker, 
        this.ready = Promise.all([ new Promise(λ9f95aaad1e34 => {
          this.readyResolve = λ9f95aaad1e34;
        }), this.loadStudyJetWasm(), this.loadSavedCookies(!0) ]).then(() => void 0), this.rpc = new λ9f95aaad1e34.C(this.methods, "tabchannel-" + this.id, (λ9f95aaad1e34, λ29dab476b03e) => {
          if (!this.port) throw Error("Port not found");
          this.port.postMessage(λ9f95aaad1e34, λ29dab476b03e);
        }), this.transport = λ29dab476b03e.transport, this.cookieSyncChannel.addEventListener("message", this.onCookieSyncMessage), 
        this.setupMessagePort(), navigator.serviceWorker.addEventListener("message", λ9f95aaad1e34 => {
          if (λ9f95aaad1e34.data?.$controller$setCookie && "object" == typeof λ9f95aaad1e34.data.$controller$setCookie) {
            let λ29dab476b03e = λ9f95aaad1e34.data.$controller$setCookie;
            if (λ29dab476b03e.controllerId && λ29dab476b03e.controllerId !== this.id) return;
            λ29dab476b03e.options?.clear && this.cookieJar.clear(), this.applyCookieSyncEntries(λ29dab476b03e.cookies), 
            "string" == typeof λ29dab476b03e.id && this.serviceWorkerController.postMessage({
              $sw$setCookieDone: {
                id: λ29dab476b03e.id
              }
            });
            return;
          }
          if (λ9f95aaad1e34.data.$controller$swrevive) {
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
        let λ9f95aaad1e34 = new MessageChannel;
        this.port = λ9f95aaad1e34.port1, this.port.addEventListener("message", this.onTabChannelMessage), 
        this.port.start(), this.serviceWorkerController.postMessage({
          $controller$init: {
            prefix: this.prefix,
            id: this.id
          }
        }, [ λ9f95aaad1e34.port2 ]);
      }
      applyCookieSyncEntries(λ9f95aaad1e34) {
        if (Array.isArray(λ9f95aaad1e34)) for (let λ29dab476b03e of λ9f95aaad1e34) "string" == typeof λ29dab476b03e?.url && "string" == typeof λ29dab476b03e.cookie && this.cookieJar.setCookies(λ29dab476b03e.cookie, new URL(λ29dab476b03e.url));
      }
      async propagateCookieSync(λ9f95aaad1e34, λ29dab476b03e = {}) {
        this.port && await this.rpc.call("sendSetCookie", {
          cookies: λ9f95aaad1e34,
          options: λ29dab476b03e
        });
      }
      async loadSavedCookies(λ9f95aaad1e34 = !1) {
        if (λ9f95aaad1e34 || this.cookieSyncDirty) return this.cookieSyncPromise || (this.cookieSyncPromise = (async () => {
          let λ9f95aaad1e34 = await w();
          λ9f95aaad1e34 && λ9f95aaad1e34.updatedAt > this.cookieUpdatedAt && (this.cookieJar.load(λ9f95aaad1e34.cookies), 
          this.cookieUpdatedAt = λ9f95aaad1e34.updatedAt), this.cookieSyncDirty = !1;
        })().finally(() => {
          this.cookieSyncPromise = null;
        })), this.cookieSyncPromise;
      }
      async persistCookies() {
        let λ9f95aaad1e34 = await k(this.cookieJar.dump(), this.cookieUpdatedAt);
        λ9f95aaad1e34 <= this.cookieUpdatedAt || (this.cookieUpdatedAt = λ9f95aaad1e34, 
        this.cookieSyncDirty = !1, this.cookieSyncChannel.postMessage({
          updatedAt: λ9f95aaad1e34
        }));
      }
      setTransport(λ9f95aaad1e34) {
        for (let λ29dab476b03e of (this.transport = λ9f95aaad1e34, this.frames)) λ29dab476b03e.controller.transport = λ9f95aaad1e34, 
        λ29dab476b03e.fetchHandler.client.transport = λ9f95aaad1e34;
      }
      createFrame(λ9f95aaad1e34, λ29dab476b03e = {}) {
        if (!this.ready) throw Error("Controller is not ready! Try awaiting controller.wait()");
        let λ3a0bbd01c455 = new v(this, λ9f95aaad1e34 ??= document.createElement("iframe"), λ29dab476b03e);
        return this.frames.push(λ3a0bbd01c455), λ3a0bbd01c455;
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
            getInjectScripts: function e(λ9f95aaad1e34, λ29dab476b03e, λ3a0bbd01c455, λf4b6a2009a90, λ2fb3adb91a15, λ278ae6a6dc73) {
              return (λcb05c203aaf4, λf78b6c5b2737, λd4c426a3eb11, λe9b6f1689551) => {
                var λ8d944e991cfa;
                return [ λe9b6f1689551(λ9f95aaad1e34.studyjetPath), λe9b6f1689551(λ3a0bbd01c455.href + λ9f95aaad1e34.virtualWasmPath), λe9b6f1689551(λ9f95aaad1e34.injectPath), λe9b6f1689551("data:text/javascript;charset=utf-8;base64," + (λ8d944e991cfa = `\n\t\t\t\t\tdocument.querySelectorAll("script[studyjet-injected]").forEach(script => script.remove());\n\t\t\t\t\t$studyjetController.load({\n\t\t\t\t\t\tconfig: ${JSON.stringify(λ9f95aaad1e34)},\n\t\t\t\t\t\tsjconfig: ${JSON.stringify(λ29dab476b03e)},\n\t\t\t\t\t\tprefix: new URL("${λ3a0bbd01c455.href}"),\n\t\t\t\t\t\tcookies: ${JSON.stringify(λf4b6a2009a90.dump())},\n\t\t\t\t\t\tyieldGetInjectScripts: ${e.toString()},\n\t\t\t\t\t\tcodecEncode: ${λ2fb3adb91a15.toString()},\n\t\t\t\t\t\tcodecDecode: ${λ278ae6a6dc73.toString()},\n\t\t\t\t\t\tinitHeaders: ${JSON.stringify(λd4c426a3eb11.headers ?? [])},\n\t\t\t\t\t\thistory: ${JSON.stringify(λd4c426a3eb11.history ?? [])},\n\t\t\t\t\t})\n\t\t\t\t`, 
                btoa((new TextEncoder).encode(λ8d944e991cfa).reduce((λ9f95aaad1e34, λ29dab476b03e) => (λ9f95aaad1e34.push(String.fromCharCode(λ29dab476b03e)), 
                λ9f95aaad1e34), []).join("")))) ];
              };
            }(this.controller.config, this.controller.studyjetConfig, new URL(this.prefix, location.href), this.controller.cookieJar, this.controller.config.codec.encode, this.controller.config.codec.decode),
            getWorkerInjectScripts: (λ9f95aaad1e34, λ29dab476b03e, λ3a0bbd01c455) => {
              var λf4b6a2009a90;
              let λ2fb3adb91a15 = "";
              return λ2fb3adb91a15 += λ3a0bbd01c455(this.controller.config.studyjetPath), λ2fb3adb91a15 += λ3a0bbd01c455(this.prefix + this.controller.config.virtualWasmPath), 
              λ2fb3adb91a15 += λ3a0bbd01c455("data:text/javascript;charset=utf-8;base64," + (λf4b6a2009a90 = `\n\t\t\t\t\t(()=>{\n\t\t\t\t\t\tconst { StudyJetClient, CookieJar, setWasm } = $studyjet;\n\n\t\t\t\t\t\tsetWasm(Uint8Array.from(atob(self.WASM), (c) => c.charCodeAt(0)));\n\t\t\t\t\t\tdelete self.WASM;\n\n\t\t\t\t\t\tconst sjconfig = ${JSON.stringify(this.controller.studyjetConfig)};\n\t\t\t\t\t\tconst prefix = new URL("${this.prefix}", location.href);\n\n\t\t\t\t\t\tconst context = {\n\t\t\t\t\t\t\tconfig: sjconfig,\n\t\t\t\t\t\t\tprefix,\n\t\t\t\t\t\t\tinterface: {\n\t\t\t\t\t\t\t\tcodecEncode: ${this.controller.config.codec.encode.toString()},\n\t\t\t\t\t\t\t\tcodecDecode: ${this.controller.config.codec.decode.toString()},\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t};\n\n\t\t\t\t\t\tconst client = new StudyJetClient(globalThis, {\n\t\t\t\t\t\t\tcontext,\n\t\t\t\t\t\t\ttransport: null,\n\t\t\t\t\t\t});\n\n\t\t\t\t\t\tclient.hook();\n\t\t\t\t\t})();\n\t\t\t\t\t`, 
              btoa((new TextEncoder).encode(λf4b6a2009a90).reduce((λ9f95aaad1e34, λ29dab476b03e) => (λ9f95aaad1e34.push(String.fromCharCode(λ29dab476b03e)), 
              λ9f95aaad1e34), []).join(""))));
            },
            codecEncode: this.controller.config.codec.encode,
            codecDecode: this.controller.config.codec.decode
          }
        };
      }
      plugins=[];
      constructor(λ9f95aaad1e34, λ3a0bbd01c455, λf4b6a2009a90 = {}) {
        for (const λcb05c203aaf4 of (this.controller = λ9f95aaad1e34, this.element = λ3a0bbd01c455, 
        this.options = λf4b6a2009a90, this.id = b(), this.prefix = this.controller.prefix + this.id + "/", 
        this.fetchHandler = new λ2fb3adb91a15.mK({
          crossOriginIsolated: self.crossOriginIsolated,
          context: this.context,
          transport: λ9f95aaad1e34.transport,
          async sendSetCookie(λ29dab476b03e, λ3a0bbd01c455) {
            await λ9f95aaad1e34.persistCookies(), await λ9f95aaad1e34.propagateCookieSync(λ29dab476b03e.map(({url: λ9f95aaad1e34, cookie: λ29dab476b03e}) => ({
              url: λ9f95aaad1e34.href,
              cookie: λ29dab476b03e
            })), λ3a0bbd01c455);
          },
          fetchBlobUrl: async λ9f95aaad1e34 => λ29dab476b03e.Sr.fromNativeResponse(await fetch(λ9f95aaad1e34)),
          fetchDataUrl: async λ9f95aaad1e34 => λ29dab476b03e.Sr.fromNativeResponse(await fetch(λ9f95aaad1e34))
        }), this.hooks = {
          fetch: this.fetchHandler.hooks.fetch,
          init: λ2fb3adb91a15.Cx.create(),
          error: λ2fb3adb91a15.Cx.create()
        }, λ3a0bbd01c455[λ278ae6a6dc73.I] = this, this.plugins = λf4b6a2009a90.plugins ?? [], 
        this.plugins)) {
          for (const λ9f95aaad1e34 of λcb05c203aaf4.dependencies) if (!this.plugins.find(λ29dab476b03e => λ29dab476b03e.name === λ9f95aaad1e34)) throw Error(`Dependency ${λ9f95aaad1e34} not found for plugin ${λcb05c203aaf4.name}`);
          λcb05c203aaf4.install(this);
        }
      }
      getPlugin(λ9f95aaad1e34) {
        let λ29dab476b03e = this.plugins.find(λ29dab476b03e => λ29dab476b03e.name === λ9f95aaad1e34);
        if (!λ29dab476b03e) throw Error(`Plugin ${λ9f95aaad1e34} not found`);
        return λ29dab476b03e;
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
      go(λ9f95aaad1e34) {
        let λ29dab476b03e = (0, λ2fb3adb91a15.Oy)(λ9f95aaad1e34, this.context, {
          origin: new URL(location.href),
          base: new URL(location.href)
        });
        this.element.src = λ29dab476b03e;
      }
    }
  })(), $studyjetController = λ3a0bbd01c455;
})();
