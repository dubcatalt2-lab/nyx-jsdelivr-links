var $studyjetController;

(() => {
  var λ6c8a9724015c = {
    286(λ6c8a9724015c, λ1312f9cf6950, λ585b0fc3adcc) {
      λ585b0fc3adcc.d(λ1312f9cf6950, {
        I: () => λ4c50339e4d18
      });
      let λ4c50339e4d18 = Symbol.for("\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x66\x72\x61\x6d\x65\x20\x68\x61\x6e\x64\x6c\x65");
    },
    355(λ6c8a9724015c, λ1312f9cf6950, λ585b0fc3adcc) {
      λ585b0fc3adcc.d(λ1312f9cf6950, {
        O: () => s,
        x: () => λ4c50339e4d18
      });
      let λ4c50339e4d18 = "\x30\x2e\x30\x2e\x31\x34";
      function s() {
        if ("\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" == typeof $studyjet) throw Error("\x40\x6d\x65\x72\x63\x75\x72\x79\x77\x6f\x72\x6b\x73\x68\x6f\x70\x2f\x73\x74\x75\x64\x79\x6a\x65\x74\x20\x69\x73\x20\x6e\x6f\x74\x20\x6c\x6f\x61\x64\x65\x64\x2e\x20\x4c\x6f\x61\x64\x20\x73\x74\x75\x64\x79\x6a\x65\x74\x20\x62\x65\x66\x6f\x72\x65\x20\x74\x68\x65\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2e");
        var λ6c8a9724015c = "\x32\x2e\x30\x2e\x36\x37\x2d\x61\x6c\x70\x68\x61\x2e\x32", λ1312f9cf6950 = $studyjet.versionInfo.version;
        if (λ6c8a9724015c !== λ1312f9cf6950) throw Error(`\x40\x6d\x65\x72\x63\x75\x72\x79\x77\x6f\x72\x6b\x73\x68\x6f\x70\x2f\x73\x74\x75\x64\x79\x6a\x65\x74\x20\x76\x65\x72\x73\x69\x6f\x6e\x20\x6d\x69\x73\x6d\x61\x74\x63\x68\x3a\x20\x74\x68\x69\x73\x20\x62\x75\x69\x6c\x64\x20\x65\x78\x70\x65\x63\x74\x73\x20${λ6c8a9724015c}\x2c\x20\x62\x75\x74\x20\x74\x68\x65\x20\x6c\x6f\x61\x64\x65\x64\x20\x72\x75\x6e\x74\x69\x6d\x65\x20\x69\x73\x20${λ1312f9cf6950}`);
      }
    },
    805(λ6c8a9724015c, λ1312f9cf6950, λ585b0fc3adcc) {
      λ585b0fc3adcc.d(λ1312f9cf6950, {
        C: () => o
      });
      class o {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λ6c8a9724015c, λ1312f9cf6950, λ585b0fc3adcc) {
          this.methods = λ6c8a9724015c, this.id = λ1312f9cf6950, this.sendRaw = λ585b0fc3adcc;
        }
        recieve(λ6c8a9724015c) {
          if (null == λ6c8a9724015c || "\x6f\x62\x6a\x65\x63\x74" != typeof λ6c8a9724015c) return;
          let λ1312f9cf6950 = λ6c8a9724015c[this.id];
          if (null == λ1312f9cf6950 || "\x6f\x62\x6a\x65\x63\x74" != typeof λ1312f9cf6950) return;
          let λ585b0fc3adcc = λ1312f9cf6950.$type;
          if ("\x72\x65\x73\x70\x6f\x6e\x73\x65" === λ585b0fc3adcc) {
            let λ6c8a9724015c = λ1312f9cf6950.$token, λ585b0fc3adcc = λ1312f9cf6950.$data, λ4c50339e4d18 = λ1312f9cf6950.$error, λ8af08bb782e5 = this.promiseCallbacks.get(λ6c8a9724015c);
            if (!λ8af08bb782e5) return;
            this.promiseCallbacks.delete(λ6c8a9724015c), void 0 !== λ4c50339e4d18 ? λ8af08bb782e5.reject(Error(λ4c50339e4d18)) : λ8af08bb782e5.resolve(λ585b0fc3adcc);
          } else if ("\x72\x65\x71\x75\x65\x73\x74" === λ585b0fc3adcc) {
            let λ6c8a9724015c = λ1312f9cf6950.$method, λ585b0fc3adcc = λ1312f9cf6950.$args;
            this.methods[λ6c8a9724015c](λ585b0fc3adcc).then(λ6c8a9724015c => {
              this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ1312f9cf6950.$token,
                  $data: λ6c8a9724015c?.[0]
                }
              }, λ6c8a9724015c?.[1]);
            }).catch(λ6c8a9724015c => {
              console.error(λ6c8a9724015c), this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λ1312f9cf6950.$token,
                  $error: λ6c8a9724015c?.toString() || "\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x65\x72\x72\x6f\x72"
                }
              }, []);
            });
          }
        }
        call(λ6c8a9724015c, λ1312f9cf6950, λ585b0fc3adcc = []) {
          let λ4c50339e4d18 = this.counter++;
          return new Promise((λ8af08bb782e5, λ4d1c3d58e036) => {
            this.promiseCallbacks.set(λ4c50339e4d18, {
              resolve: λ8af08bb782e5,
              reject: λ4d1c3d58e036
            }), this.sendRaw({
              [this.id]: {
                $type: "\x72\x65\x71\x75\x65\x73\x74",
                $method: λ6c8a9724015c,
                $args: λ1312f9cf6950,
                $token: λ4c50339e4d18
              }
            }, λ585b0fc3adcc);
          });
        }
      }
    },
    986(λ6c8a9724015c) {
      let λ1312f9cf6950 = Object.getPrototypeOf({});
      function r() {
        return function(λ6c8a9724015c) {
          return "\x6f\x62\x6a\x65\x63\x74" == typeof λ6c8a9724015c && null !== λ6c8a9724015c && !(λ6c8a9724015c instanceof RegExp) && !(λ6c8a9724015c instanceof Date);
        };
      }
      function o(λ6c8a9724015c) {
        function o(λ6c8a9724015c) {
          return "\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72" !== λ6c8a9724015c && "\x70\x72\x6f\x74\x6f\x74\x79\x70\x65" !== λ6c8a9724015c && "\x5f\x5f\x70\x72\x6f\x74\x6f\x5f\x5f" !== λ6c8a9724015c;
        }
        let λ585b0fc3adcc = Object.prototype.propertyIsEnumerable, λ4c50339e4d18 = λ6c8a9724015c?.symbols ? function(λ6c8a9724015c) {
          let λ1312f9cf6950 = Object.keys(λ6c8a9724015c), λ4c50339e4d18 = Object.getOwnPropertySymbols(λ6c8a9724015c);
          for (let λ8af08bb782e5 = 0, λ4d1c3d58e036 = λ4c50339e4d18.length; λ8af08bb782e5 < λ4d1c3d58e036; ++λ8af08bb782e5) λ585b0fc3adcc.call(λ6c8a9724015c, λ4c50339e4d18[λ8af08bb782e5]) && λ1312f9cf6950.push(λ4c50339e4d18[λ8af08bb782e5]);
          return λ1312f9cf6950;
        } : Object.keys, λ8af08bb782e5 = "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ6c8a9724015c?.cloneProtoObject ? λ6c8a9724015c.cloneProtoObject : void 0, λ4d1c3d58e036 = "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ6c8a9724015c?.isMergeableObject ? λ6c8a9724015c.isMergeableObject : r(), λ6f48a4e43689 = λ6c8a9724015c?.onlyDefinedProperties === !0, λ18a3c4074ecf = λ6c8a9724015c && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λ6c8a9724015c.mergeArray ? λ6c8a9724015c.mergeArray({
          clone: d,
          deepmerge: h,
          getKeys: λ4c50339e4d18,
          isMergeableObject: λ4d1c3d58e036
        }) : function(λ6c8a9724015c, λ1312f9cf6950) {
          let λ585b0fc3adcc = λ6c8a9724015c.length, λ4c50339e4d18 = λ1312f9cf6950.length, λ8af08bb782e5 = 0, λ4d1c3d58e036 = Array(λ585b0fc3adcc + λ4c50339e4d18);
          for (;λ8af08bb782e5 < λ585b0fc3adcc; ++λ8af08bb782e5) λ4d1c3d58e036[λ8af08bb782e5] = d(λ6c8a9724015c[λ8af08bb782e5]);
          for (λ8af08bb782e5 = 0; λ8af08bb782e5 < λ4c50339e4d18; ++λ8af08bb782e5) λ4d1c3d58e036[λ8af08bb782e5 + λ585b0fc3adcc] = d(λ1312f9cf6950[λ8af08bb782e5]);
          return λ4d1c3d58e036;
        };
        function d(λ6c8a9724015c) {
          return λ4d1c3d58e036(λ6c8a9724015c) ? Array.isArray(λ6c8a9724015c) ? function(λ6c8a9724015c) {
            let λ1312f9cf6950 = 0, λ585b0fc3adcc = λ6c8a9724015c.length, λ4c50339e4d18 = Array(λ585b0fc3adcc);
            for (;λ1312f9cf6950 < λ585b0fc3adcc; ++λ1312f9cf6950) λ4c50339e4d18[λ1312f9cf6950] = d(λ6c8a9724015c[λ1312f9cf6950]);
            return λ4c50339e4d18;
          }(λ6c8a9724015c) : function(λ6c8a9724015c) {
            let λ585b0fc3adcc, λ4d1c3d58e036, λ6f48a4e43689, λ18a3c4074ecf = {};
            if (λ8af08bb782e5 && Object.getPrototypeOf(λ6c8a9724015c) !== λ1312f9cf6950) return λ8af08bb782e5(λ6c8a9724015c);
            let λ3446a5c4218f = λ4c50339e4d18(λ6c8a9724015c);
            for (λ585b0fc3adcc = 0, λ4d1c3d58e036 = λ3446a5c4218f.length; λ585b0fc3adcc < λ4d1c3d58e036; ++λ585b0fc3adcc) o(λ6f48a4e43689 = λ3446a5c4218f[λ585b0fc3adcc]) && (λ18a3c4074ecf[λ6f48a4e43689] = d(λ6c8a9724015c[λ6f48a4e43689]));
            return λ18a3c4074ecf;
          }(λ6c8a9724015c) : λ6c8a9724015c;
        }
        function h(λ6c8a9724015c, λ585b0fc3adcc) {
          if (λ6f48a4e43689 && void 0 === λ585b0fc3adcc) return d(λ6c8a9724015c);
          let λ3446a5c4218f = Array.isArray(λ585b0fc3adcc), λ3b393c982100 = Array.isArray(λ6c8a9724015c);
          return "\x6f\x62\x6a\x65\x63\x74" != typeof λ585b0fc3adcc || null === λ585b0fc3adcc ? λ585b0fc3adcc : λ4d1c3d58e036(λ6c8a9724015c) ? λ3446a5c4218f && λ3b393c982100 ? λ18a3c4074ecf(λ6c8a9724015c, λ585b0fc3adcc) : λ3446a5c4218f !== λ3b393c982100 ? d(λ585b0fc3adcc) : function(λ6c8a9724015c, λ585b0fc3adcc) {
            let λ18a3c4074ecf, λ3446a5c4218f, λ3b393c982100, λf7e013ccc189 = {}, λ6c8e46ca6c3d = λ4c50339e4d18(λ6c8a9724015c), λa189741712dd = λ4c50339e4d18(λ585b0fc3adcc);
            for (λ18a3c4074ecf = 0, λ3446a5c4218f = λ6c8e46ca6c3d.length; λ18a3c4074ecf < λ3446a5c4218f; ++λ18a3c4074ecf) o(λ3b393c982100 = λ6c8e46ca6c3d[λ18a3c4074ecf]) && -1 === λa189741712dd.indexOf(λ3b393c982100) && (λf7e013ccc189[λ3b393c982100] = d(λ6c8a9724015c[λ3b393c982100]));
            for (λ18a3c4074ecf = 0, λ3446a5c4218f = λa189741712dd.length; λ18a3c4074ecf < λ3446a5c4218f; ++λ18a3c4074ecf) if (o(λ3b393c982100 = λa189741712dd[λ18a3c4074ecf])) if (λ3b393c982100 in λ6c8a9724015c) -1 !== λ6c8e46ca6c3d.indexOf(λ3b393c982100) && (λ8af08bb782e5 && λ4d1c3d58e036(λ585b0fc3adcc[λ3b393c982100]) && Object.getPrototypeOf(λ585b0fc3adcc[λ3b393c982100]) !== λ1312f9cf6950 ? λf7e013ccc189[λ3b393c982100] = λ8af08bb782e5(λ585b0fc3adcc[λ3b393c982100]) : λf7e013ccc189[λ3b393c982100] = h(λ6c8a9724015c[λ3b393c982100], λ585b0fc3adcc[λ3b393c982100])); else {
              if (λ6f48a4e43689 && void 0 === λ585b0fc3adcc[λ3b393c982100]) continue;
              λf7e013ccc189[λ3b393c982100] = d(λ585b0fc3adcc[λ3b393c982100]);
            }
            return λf7e013ccc189;
          }(λ6c8a9724015c, λ585b0fc3adcc) : d(λ585b0fc3adcc);
        }
        return λ6c8a9724015c?.all ? function() {
          let λ6c8a9724015c;
          switch (arguments.length) {
           case 0:
            return {};

           case 1:
            return d(arguments[0]);

           case 2:
            return h(arguments[0], arguments[1]);
          }
          for (let λ1312f9cf6950 = 0, λ585b0fc3adcc = arguments.length; λ1312f9cf6950 < λ585b0fc3adcc; ++λ1312f9cf6950) λ6c8a9724015c = h(λ6c8a9724015c, arguments[λ1312f9cf6950]);
          return λ6c8a9724015c;
        } : h;
      }
      λ6c8a9724015c.exports = o, λ6c8a9724015c.exports.default = o, λ6c8a9724015c.exports.deepmerge = o, 
      Object.defineProperty(λ6c8a9724015c.exports, "\x69\x73\x4d\x65\x72\x67\x65\x61\x62\x6c\x65\x4f\x62\x6a\x65\x63\x74", {
        get: r
      });
    },
    235(λ6c8a9724015c, λ1312f9cf6950, λ585b0fc3adcc) {
      λ585b0fc3adcc.d(λ1312f9cf6950, {
        Sr: () => s
      }), WebSocket.CLOSED, WebSocket.CONNECTING, WebSocket.OPEN, EventTarget;
      let λ4c50339e4d18 = [ 101, 204, 205, 304 ];
      class s extends Response {
        url;
        rawHeaders;
        redirected=!1;
        static fromTransferrableResponse(λ6c8a9724015c, λ1312f9cf6950) {
          let λ585b0fc3adcc = new s(λ4c50339e4d18.includes(λ6c8a9724015c.status) ? void 0 : λ6c8a9724015c.body, {
            headers: new Headers(λ6c8a9724015c.headers),
            status: λ6c8a9724015c.status,
            statusText: λ6c8a9724015c.statusText
          });
          return λ585b0fc3adcc.url = λ1312f9cf6950, λ585b0fc3adcc.redirected = λ6c8a9724015c.status >= 300 && λ6c8a9724015c.status < 400 && void 0 !== λ6c8a9724015c.headers.location, 
          λ585b0fc3adcc.rawHeaders = λ6c8a9724015c.headers, λ585b0fc3adcc;
        }
        static fromNativeResponse(λ6c8a9724015c) {
          let λ1312f9cf6950 = new s(λ4c50339e4d18.includes(λ6c8a9724015c.status) ? void 0 : λ6c8a9724015c.body, {
            headers: λ6c8a9724015c.headers,
            status: λ6c8a9724015c.status,
            statusText: λ6c8a9724015c.statusText
          });
          return λ1312f9cf6950.url = λ6c8a9724015c.url, λ1312f9cf6950.rawHeaders = [ ...λ6c8a9724015c.headers ], 
          λ1312f9cf6950.redirected = λ6c8a9724015c.redirected, λ1312f9cf6950;
        }
      }
    },
    423(λ6c8a9724015c, λ1312f9cf6950, λ585b0fc3adcc) {
      λ585b0fc3adcc.d(λ1312f9cf6950, {
        Cx: () => λ6c006f325890,
        Oy: () => λ11b2484a6be7,
        cP: () => λ8af08bb782e5,
        ht: () => λ73d16c804b59,
        k_: () => λ6f48a4e43689,
        mK: () => λf7e013ccc189,
        sb: () => λ1fe44ad92801,
        uh: () => λa189741712dd
      });
      let {BareResponse: λ4c50339e4d18, CookieJar: λ8af08bb782e5, IncrementalHtmlRewriter: λ4d1c3d58e036, Plugin: λ6f48a4e43689, STUDYJETCLIENT: λ18a3c4074ecf, STUDYJETCLIENTNAME: λ3446a5c4218f, StudyJetClient: λ3b393c982100, StudyJetFetchHandler: λf7e013ccc189, StudyJetFetchTrackedClient: λ6c8e46ca6c3d, StudyJetHeaders: λa189741712dd, Tap: λ6c006f325890, \u{63}\u{72}\u{65}\u{61}\u{74}\u{65}\u{4c}\u{6f}\u{63}\u{61}\u{74}\u{69}\u{6f}\u{6e}\u{50}\u{72}\u{6f}\u{78}\u{79}: λf512f9d4b14b, defaultConfig: λ1fe44ad92801, defaultConfigDev: λde9c113615fc, flagEnabled: λbdc975619acb, getOwnPropertyDescriptorHandler: λdecaec46a811, getRewriter: λ82d4a05f1f02, getScriptBlockTypeString: λdb0f48359c74, htmlRules: λ5ecd0fb0b626, isArchiveMimeType: λ5ecf6e2d16ee, isAudioOrVideoMimeType: λ59b442e63646, isFontMimeType: λa0e312ac072f, isHtmlMimeType: λe86714dad76a, isImageMimeType: λ021ade3db623, isInlineDisplayableMimeType: λee5d6643b599, isJavascriptMimeType: λa776ea453849, isJavascriptMimeTypeEssenceMatch: λ6b4e60c68b86, isModuleScriptType: λd5812bf1d6e6, isScriptType: λ5bb1955aeb2f, isScriptableMimeType: λ56f0497319c7, isXmlMimeType: λ2bf893747c39, isZipBasedMimeType: λ703b06c8b4b8, isdedicated: λe10c136156d5, isshared: λfac17f327683, issw: λ68aa68d8dbef, iswindow: λ128e6a7e32dd, isworker: λ451c4cd6df75, parseMimeType: λ7c8289a84a69, rewriteBlob: λ05d893704785, rewriteCss: λ0dd7ca668cbe, rewriteHtml: λb951cd9d42f2, rewriteJs: λ158b4021ce6f, rewriteJsInner: λaba51bd82367, rewriteSrcset: λ11f481ffe981, rewriteUrl: λ11b2484a6be7, rewriteWorkers: λ3ac990b057f5, setWasm: λ73d16c804b59, unrewriteBlob: λ0dce409bed1a, unrewriteCss: λe51fb2db0251, unrewriteHtml: λ4039dc21bb31, unrewriteUrl: λdfe1111d05a1, versionInfo: λ9c69c4cad28a} = globalThis.$studyjet;
    }
  }, λ1312f9cf6950 = {};
  function r(λ585b0fc3adcc) {
    var λ4c50339e4d18 = λ1312f9cf6950[λ585b0fc3adcc];
    if (void 0 !== λ4c50339e4d18) return λ4c50339e4d18.exports;
    var λ8af08bb782e5 = λ1312f9cf6950[λ585b0fc3adcc] = {
      exports: {}
    };
    return λ6c8a9724015c[λ585b0fc3adcc](λ8af08bb782e5, λ8af08bb782e5.exports, r), λ8af08bb782e5.exports;
  }
  r.n = λ6c8a9724015c => {
    var λ1312f9cf6950 = λ6c8a9724015c && λ6c8a9724015c.__esModule ? () => λ6c8a9724015c.default : () => λ6c8a9724015c;
    return r.d(λ1312f9cf6950, {
      a: λ1312f9cf6950
    }), λ1312f9cf6950;
  }, r.d = (λ6c8a9724015c, λ1312f9cf6950) => {
    for (var λ585b0fc3adcc in λ1312f9cf6950) r.o(λ1312f9cf6950, λ585b0fc3adcc) && !r.o(λ6c8a9724015c, λ585b0fc3adcc) && Object.defineProperty(λ6c8a9724015c, λ585b0fc3adcc, {
      enumerable: !0,
      get: λ1312f9cf6950[λ585b0fc3adcc]
    });
  }, r.o = (λ6c8a9724015c, λ1312f9cf6950) => Object.prototype.hasOwnProperty.call(λ6c8a9724015c, λ1312f9cf6950), 
  r.r = λ6c8a9724015c => {
    "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λ6c8a9724015c, Symbol.toStringTag, {
      value: "\x4d\x6f\x64\x75\x6c\x65"
    }), Object.defineProperty(λ6c8a9724015c, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
      value: !0
    });
  };
  var λ585b0fc3adcc = {};
  (() => {
    r.r(λ585b0fc3adcc), r.d(λ585b0fc3adcc, {
      Controller: () => S,
      Frame: () => v,
      ManagedPlugin: () => d,
      VERSION: () => λ6f48a4e43689.x,
      assertRuntimeStudyJetVersion: () => λ6f48a4e43689.O,
      config: () => λ18a3c4074ecf
    });
    var λ6c8a9724015c = r(805), λ1312f9cf6950 = r(235), λ4c50339e4d18 = r(986), λ8af08bb782e5 = r(423), λ4d1c3d58e036 = r(286), λ6f48a4e43689 = r(355);
    let λ18a3c4074ecf = {
      prefix: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x7e\x2f\x73\x74\x75\x64\x79\x2f",
      studyjetPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x73\x74\x75\x64\x79\x6a\x65\x74\x2f\x40\x72\x36\x39\x63\x31\x38\x66\x39\x62\x64\x34\x65\x64\x31\x37\x35\x63\x39\x65\x61\x35\x30\x35\x62\x38\x21\x2e\x6a\x73",
      \u{69}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{50}\u{61}\u{74}\u{68}: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2f\x40\x72\x39\x65\x38\x35\x35\x61\x63\x38\x32\x65\x64\x63\x34\x62\x35\x31\x65\x31\x33\x34\x30\x35\x36\x34\x21\x2e\x6a\x73",
      wasmPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x73\x74\x75\x64\x79\x6a\x65\x74\x2f\x40\x72\x35\x35\x32\x38\x36\x63\x66\x65\x30\x39\x64\x37\x34\x31\x30\x32\x33\x63\x63\x33\x65\x31\x64\x36\x21\x2e\x77\x61\x73\x6d",
      virtualWasmPath: "\x73\x74\x75\x64\x79\x6a\x65\x74\x2e\x77\x61\x73\x6d\x2e\x6a\x73",
      codec: {
        encode: λ6c8a9724015c => λ6c8a9724015c ? encodeURIComponent(λ6c8a9724015c) : λ6c8a9724015c,
        decode: λ6c8a9724015c => λ6c8a9724015c ? decodeURIComponent(λ6c8a9724015c) : λ6c8a9724015c
      }
    }, λ3446a5c4218f = {
      flags: {
        ...λ8af08bb782e5.sb.flags,
        allowFailedIntercepts: !0
      },
      maskedfiles: [ "\x69\x6e\x6a\x65\x63\x74\x2e\x6a\x73", "\x73\x74\x75\x64\x79\x6a\x65\x74\x2e\x77\x61\x73\x6d\x2e\x6a\x73" ]
    };
    class d extends λ8af08bb782e5.k_ {
      frame=null;
      dependencies=[];
      constructor(λ6c8a9724015c, λ1312f9cf6950) {
        super(λ6c8a9724015c), this.dependencies = λ1312f9cf6950;
      }
      install(λ6c8a9724015c) {
        this.frame = λ6c8a9724015c;
      }
    }
    let λ3b393c982100 = "\x73\x74\x61\x74\x65", λf7e013ccc189 = "\x63\x6f\x6f\x6b\x69\x65\x73", λ6c8e46ca6c3d = null;
    function u(λ6c8a9724015c) {
      return "\x6f\x62\x6a\x65\x63\x74" == typeof λ6c8a9724015c && null !== λ6c8a9724015c && "\x6e\x75\x6d\x62\x65\x72" == typeof λ6c8a9724015c.updatedAt && Number.isFinite(λ6c8a9724015c.updatedAt) && "\x73\x74\x72\x69\x6e\x67" == typeof λ6c8a9724015c.cookies ? λ6c8a9724015c : null;
    }
    function y(λ6c8a9724015c) {
      return new Promise((λ1312f9cf6950, λ585b0fc3adcc) => {
        λ6c8a9724015c.onsuccess = () => λ1312f9cf6950(λ6c8a9724015c.result), λ6c8a9724015c.onerror = () => λ585b0fc3adcc(λ6c8a9724015c.error ?? Error("\x49\x6e\x64\x65\x78\x65\x64\x44\x42\x20\x72\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64"));
      });
    }
    function m(λ6c8a9724015c) {
      return new Promise((λ1312f9cf6950, λ585b0fc3adcc) => {
        λ6c8a9724015c.oncomplete = () => λ1312f9cf6950(), λ6c8a9724015c.onabort = () => λ585b0fc3adcc(λ6c8a9724015c.error ?? Error("\x49\x6e\x64\x65\x78\x65\x64\x44\x42\x20\x74\x72\x61\x6e\x73\x61\x63\x74\x69\x6f\x6e\x20\x61\x62\x6f\x72\x74\x65\x64")), 
        λ6c8a9724015c.onerror = () => λ585b0fc3adcc(λ6c8a9724015c.error ?? Error("\x49\x6e\x64\x65\x78\x65\x64\x44\x42\x20\x74\x72\x61\x6e\x73\x61\x63\x74\x69\x6f\x6e\x20\x66\x61\x69\x6c\x65\x64"));
      });
    }
    function g() {
      return λ6c8e46ca6c3d || (λ6c8e46ca6c3d = new Promise((λ6c8a9724015c, λ1312f9cf6950) => {
        let λ585b0fc3adcc = indexedDB.open("\x40\x64\x39\x34\x31\x62\x63\x36\x35\x61\x66\x33", 1);
        λ585b0fc3adcc.onupgradeneeded = () => {
          let λ6c8a9724015c = λ585b0fc3adcc.result;
          λ6c8a9724015c.objectStoreNames.contains(λ3b393c982100) || λ6c8a9724015c.createObjectStore(λ3b393c982100);
        }, λ585b0fc3adcc.onsuccess = () => λ6c8a9724015c(λ585b0fc3adcc.result), λ585b0fc3adcc.onerror = () => λ1312f9cf6950(λ585b0fc3adcc.error ?? Error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x6f\x70\x65\x6e\x20\x63\x6f\x6f\x6b\x69\x65\x20\x64\x61\x74\x61\x62\x61\x73\x65"));
      }));
    }
    async function w() {
      try {
        let λ6c8a9724015c = (await g()).transaction(λ3b393c982100, "\x72\x65\x61\x64\x6f\x6e\x6c\x79"), λ1312f9cf6950 = λ6c8a9724015c.objectStore(λ3b393c982100), λ585b0fc3adcc = await y(λ1312f9cf6950.get(λf7e013ccc189));
        return await m(λ6c8a9724015c), u(λ585b0fc3adcc);
      } catch (λ6c8a9724015c) {
        return console.error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x72\x65\x61\x64\x20\x70\x65\x72\x73\x69\x73\x74\x65\x64\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x63\x6f\x6f\x6b\x69\x65\x73\x3a", λ6c8a9724015c), 
        null;
      }
    }
    async function k(λ6c8a9724015c, λ1312f9cf6950) {
      try {
        let λ585b0fc3adcc = (await g()).transaction(λ3b393c982100, "\x72\x65\x61\x64\x77\x72\x69\x74\x65"), λ4c50339e4d18 = λ585b0fc3adcc.objectStore(λ3b393c982100), λ8af08bb782e5 = u(await y(λ4c50339e4d18.get(λf7e013ccc189))), λ4d1c3d58e036 = Math.max(Date.now(), λ1312f9cf6950 + 1, (λ8af08bb782e5?.updatedAt ?? 0) + 1);
        return λ4c50339e4d18.put({
          updatedAt: λ4d1c3d58e036,
          cookies: λ6c8a9724015c
        }, λf7e013ccc189), await m(λ585b0fc3adcc), λ4d1c3d58e036;
      } catch (λ6c8a9724015c) {
        return console.error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x70\x65\x72\x73\x69\x73\x74\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x63\x6f\x6f\x6b\x69\x65\x73\x3a", λ6c8a9724015c), λ1312f9cf6950;
      }
    }
    function b() {
      return Math.random().toString(36).substring(2, 10);
    }
    let λa189741712dd = (0, λ4c50339e4d18.deepmerge)();
    class S {
      init;
      id;
      config;
      studyjetConfig;
      prefix;
      cookieJar=new λ8af08bb782e5.cP;
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
      onTabChannelMessage=λ6c8a9724015c => {
        this.rpc.recieve(λ6c8a9724015c.data);
      };
      onCookieSyncMessage=λ6c8a9724015c => {
        let λ1312f9cf6950 = "\x6f\x62\x6a\x65\x63\x74" == typeof λ6c8a9724015c.data && null !== λ6c8a9724015c.data ? λ6c8a9724015c.data.updatedAt : void 0;
        "\x6e\x75\x6d\x62\x65\x72" != typeof λ1312f9cf6950 || λ1312f9cf6950 <= this.cookieUpdatedAt || (this.cookieSyncDirty = !0, 
        this.loadSavedCookies());
      };
      async loadStudyJetWasm() {
        if (this.wasmAlreadyFetched) return;
        let λ6c8a9724015c = await fetch(this.config.wasmPath);
        (0, λ8af08bb782e5.ht)(await λ6c8a9724015c.arrayBuffer()), this.wasmAlreadyFetched = !0;
      }
      methods={
        ready: async () => {
          this.readyResolve(), setTimeout(() => {
            this.guardServiceWorkerRevive = !1;
          }, 5e3);
        },
        request: async λ6c8a9724015c => {
          let λ1312f9cf6950 = new URL(λ6c8a9724015c.rawUrl).pathname, λ585b0fc3adcc = this.frames.find(λ6c8a9724015c => λ1312f9cf6950.startsWith(λ6c8a9724015c.prefix));
          if (!λ585b0fc3adcc) throw Error("\x4e\x6f\x20\x66\x72\x61\x6d\x65\x20\x66\x6f\x75\x6e\x64\x20\x66\x6f\x72\x20\x72\x65\x71\x75\x65\x73\x74");
          try {
            if (await this.loadSavedCookies(), λ1312f9cf6950 === λ585b0fc3adcc.prefix + this.config.virtualWasmPath) {
              if (!this.wasmPayload) {
                let λ6c8a9724015c = await fetch(this.config.wasmPath), λ1312f9cf6950 = await λ6c8a9724015c.arrayBuffer(), λ585b0fc3adcc = btoa(new Uint8Array(λ1312f9cf6950).reduce((λ6c8a9724015c, λ1312f9cf6950) => (λ6c8a9724015c.push(String.fromCharCode(λ1312f9cf6950)), 
                λ6c8a9724015c), []).join(""));
                this.wasmPayload = `\x73\x65\x6c\x66\x2e\x57\x41\x53\x4d\x20\x3d\x20\x27${λ585b0fc3adcc}\x27\x3b`;
              }
              return [ {
                body: this.wasmPayload,
                status: 200,
                statusText: "\x4f\x4b",
                headers: [ [ "\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65", "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x61\x76\x61\x73\x63\x72\x69\x70\x74" ] ]
              }, [] ];
            }
            let λ4c50339e4d18 = λ8af08bb782e5.uh.fromRawHeaders(λ6c8a9724015c.initialHeaders), λ4d1c3d58e036 = await λ585b0fc3adcc.fetchHandler.handleFetch({
              initialHeaders: λ4c50339e4d18,
              rawClientUrl: λ6c8a9724015c.rawClientUrl ? new URL(λ6c8a9724015c.rawClientUrl) : void 0,
              rawUrl: new URL(λ6c8a9724015c.rawUrl),
              rawReferrer: λ6c8a9724015c.rawReferrer,
              rawDestination: λ6c8a9724015c.destination,
              method: λ6c8a9724015c.method,
              mode: λ6c8a9724015c.mode,
              referrer: λ6c8a9724015c.referrer,
              body: λ6c8a9724015c.body,
              cache: λ6c8a9724015c.cache,
              clientId: λ6c8a9724015c.clientId
            });
            return [ {
              body: λ4d1c3d58e036.body,
              status: λ4d1c3d58e036.status,
              statusText: λ4d1c3d58e036.statusText,
              headers: λ4d1c3d58e036.headers.toRawHeaders()
            }, λ4d1c3d58e036.body instanceof ReadableStream || λ4d1c3d58e036.body instanceof ArrayBuffer ? [ λ4d1c3d58e036.body ] : [] ];
          } catch (λ1312f9cf6950) {
            let λ4c50339e4d18 = {
              setResponse: void 0,
              suppressError: !1
            };
            if (await λ8af08bb782e5.Cx.dispatch(λ585b0fc3adcc.hooks.error.request, {
              rawrequest: λ6c8a9724015c,
              error: λ1312f9cf6950
            }, λ4c50339e4d18), λ4c50339e4d18.suppressError || console.error("\x45\x72\x72\x6f\x72\x20\x69\x6e\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x72\x65\x71\x75\x65\x73\x74\x20\x68\x61\x6e\x64\x6c\x65\x72\x3a", λ1312f9cf6950), 
            λ4c50339e4d18.setResponse) return [ λ4c50339e4d18.setResponse, [] ];
            throw λ1312f9cf6950;
          }
        },
        initRemoteTransport: async λ1312f9cf6950 => {
          let λ585b0fc3adcc = new λ6c8a9724015c.C({
            request: async ({remote: λ6c8a9724015c, method: λ1312f9cf6950, body: λ585b0fc3adcc, headers: λ4c50339e4d18}) => {
              let λ8af08bb782e5 = await this.transport.request(new URL(λ6c8a9724015c), λ1312f9cf6950, λ585b0fc3adcc, λ4c50339e4d18, void 0);
              return [ λ8af08bb782e5, [ λ8af08bb782e5.body ] ];
            },
            sendSetCookie: async ({cookies: λ6c8a9724015c, options: λ1312f9cf6950}) => {
              await this.loadSavedCookies(!0), λ1312f9cf6950?.clear && this.cookieJar.clear(), 
              this.applyCookieSyncEntries(λ6c8a9724015c), await this.persistCookies(), await this.propagateCookieSync(λ6c8a9724015c, λ1312f9cf6950);
            },
            connect: async ({url: λ6c8a9724015c, protocols: λ1312f9cf6950, requestHeaders: λ585b0fc3adcc, port: λ4c50339e4d18}) => {
              let λ8af08bb782e5, λ4d1c3d58e036 = new Promise(λ6c8a9724015c => λ8af08bb782e5 = λ6c8a9724015c), [λ6f48a4e43689, λ18a3c4074ecf] = this.transport.connect(new URL(λ6c8a9724015c), λ1312f9cf6950, λ585b0fc3adcc, (λ6c8a9724015c, λ1312f9cf6950) => {
                λ8af08bb782e5({
                  result: "\x73\x75\x63\x63\x65\x73\x73",
                  protocol: λ6c8a9724015c,
                  extensions: λ1312f9cf6950
                });
              }, λ6c8a9724015c => {
                λ4c50339e4d18.postMessage({
                  type: "\x64\x61\x74\x61",
                  data: λ6c8a9724015c
                }, λ6c8a9724015c instanceof ArrayBuffer ? [ λ6c8a9724015c ] : []);
              }, (λ6c8a9724015c, λ1312f9cf6950) => {
                λ4c50339e4d18.postMessage({
                  type: "\x63\x6c\x6f\x73\x65",
                  code: λ6c8a9724015c,
                  reason: λ1312f9cf6950
                });
              }, λ6c8a9724015c => {
                λ8af08bb782e5({
                  result: "\x66\x61\x69\x6c\x75\x72\x65",
                  error: λ6c8a9724015c
                });
              });
              return λ4c50339e4d18.onmessageerror = λ6c8a9724015c => {
                console.error("\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x6f\x72\x74\x20\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λ6c8a9724015c);
              }, λ4c50339e4d18.onmessage = ({data: λ6c8a9724015c}) => {
                "\x64\x61\x74\x61" === λ6c8a9724015c.type ? λ6f48a4e43689(λ6c8a9724015c.data) : "\x63\x6c\x6f\x73\x65" === λ6c8a9724015c.type && λ18a3c4074ecf(λ6c8a9724015c.code, λ6c8a9724015c.reason);
              }, [ await λ4d1c3d58e036, [] ];
            }
          }, "\x74\x72\x61\x6e\x73\x70\x6f\x72\x74", (λ6c8a9724015c, λ585b0fc3adcc) => λ1312f9cf6950.postMessage(λ6c8a9724015c, λ585b0fc3adcc));
          λ1312f9cf6950.onmessageerror = λ6c8a9724015c => {
            console.error("\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x6f\x72\x74\x20\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λ6c8a9724015c);
          }, λ1312f9cf6950.onmessage = λ6c8a9724015c => {
            λ585b0fc3adcc.recieve(λ6c8a9724015c.data);
          }, λ585b0fc3adcc.call("\x72\x65\x61\x64\x79", void 0, []);
        }
      };
      constructor(λ1312f9cf6950) {
        this.init = λ1312f9cf6950, (0, λ6f48a4e43689.O)(), this.id = b(), this.config = λa189741712dd(λ18a3c4074ecf, λ1312f9cf6950.config || {}), 
        this.studyjetConfig = λa189741712dd(λ3446a5c4218f, λ8af08bb782e5.sb), this.studyjetConfig = λa189741712dd(this.studyjetConfig, λ1312f9cf6950.studyjetConfig || {}), 
        this.prefix = this.config.prefix + this.id + "\x2f", this.serviceWorkerController = λ1312f9cf6950.serviceworker, 
        this.ready = Promise.all([ new Promise(λ6c8a9724015c => {
          this.readyResolve = λ6c8a9724015c;
        }), this.loadStudyJetWasm(), this.loadSavedCookies(!0) ]).then(() => void 0), this.rpc = new λ6c8a9724015c.C(this.methods, "\x74\x61\x62\x63\x68\x61\x6e\x6e\x65\x6c\x2d" + this.id, (λ6c8a9724015c, λ1312f9cf6950) => {
          if (!this.port) throw Error("\x50\x6f\x72\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64");
          this.port.postMessage(λ6c8a9724015c, λ1312f9cf6950);
        }), this.transport = λ1312f9cf6950.transport, this.cookieSyncChannel.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", this.onCookieSyncMessage), 
        this.setupMessagePort(), navigator.serviceWorker.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", λ6c8a9724015c => {
          if (λ6c8a9724015c.data?.$controller$setCookie && "\x6f\x62\x6a\x65\x63\x74" == typeof λ6c8a9724015c.data.$controller$setCookie) {
            let λ1312f9cf6950 = λ6c8a9724015c.data.$controller$setCookie;
            if (λ1312f9cf6950.controllerId && λ1312f9cf6950.controllerId !== this.id) return;
            λ1312f9cf6950.options?.clear && this.cookieJar.clear(), this.applyCookieSyncEntries(λ1312f9cf6950.cookies), 
            "\x73\x74\x72\x69\x6e\x67" == typeof λ1312f9cf6950.id && this.serviceWorkerController.postMessage({
              $sw$setCookieDone: {
                id: λ1312f9cf6950.id
              }
            });
            return;
          }
          if (λ6c8a9724015c.data.$controller$swrevive) {
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
        let λ6c8a9724015c = new MessageChannel;
        this.port = λ6c8a9724015c.port1, this.port.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", this.onTabChannelMessage), 
        this.port.start(), this.serviceWorkerController.postMessage({
          $controller$init: {
            prefix: this.prefix,
            id: this.id
          }
        }, [ λ6c8a9724015c.port2 ]);
      }
      applyCookieSyncEntries(λ6c8a9724015c) {
        if (Array.isArray(λ6c8a9724015c)) for (let λ1312f9cf6950 of λ6c8a9724015c) "\x73\x74\x72\x69\x6e\x67" == typeof λ1312f9cf6950?.url && "\x73\x74\x72\x69\x6e\x67" == typeof λ1312f9cf6950.cookie && this.cookieJar.setCookies(λ1312f9cf6950.cookie, new URL(λ1312f9cf6950.url));
      }
      async propagateCookieSync(λ6c8a9724015c, λ1312f9cf6950 = {}) {
        this.port && await this.rpc.call("\x73\x65\x6e\x64\x53\x65\x74\x43\x6f\x6f\x6b\x69\x65", {
          cookies: λ6c8a9724015c,
          options: λ1312f9cf6950
        });
      }
      async loadSavedCookies(λ6c8a9724015c = !1) {
        if (λ6c8a9724015c || this.cookieSyncDirty) return this.cookieSyncPromise || (this.cookieSyncPromise = (async () => {
          let λ6c8a9724015c = await w();
          λ6c8a9724015c && λ6c8a9724015c.updatedAt > this.cookieUpdatedAt && (this.cookieJar.load(λ6c8a9724015c.cookies), 
          this.cookieUpdatedAt = λ6c8a9724015c.updatedAt), this.cookieSyncDirty = !1;
        })().finally(() => {
          this.cookieSyncPromise = null;
        })), this.cookieSyncPromise;
      }
      async persistCookies() {
        let λ6c8a9724015c = await k(this.cookieJar.dump(), this.cookieUpdatedAt);
        λ6c8a9724015c <= this.cookieUpdatedAt || (this.cookieUpdatedAt = λ6c8a9724015c, 
        this.cookieSyncDirty = !1, this.cookieSyncChannel.postMessage({
          updatedAt: λ6c8a9724015c
        }));
      }
      setTransport(λ6c8a9724015c) {
        for (let λ1312f9cf6950 of (this.transport = λ6c8a9724015c, this.frames)) λ1312f9cf6950.controller.transport = λ6c8a9724015c, 
        λ1312f9cf6950.fetchHandler.client.transport = λ6c8a9724015c;
      }
      createFrame(λ6c8a9724015c, λ1312f9cf6950 = {}) {
        if (!this.ready) throw Error("\x43\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x69\x73\x20\x6e\x6f\x74\x20\x72\x65\x61\x64\x79\x21\x20\x54\x72\x79\x20\x61\x77\x61\x69\x74\x69\x6e\x67\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2e\x77\x61\x69\x74\x28\x29");
        let λ585b0fc3adcc = new v(this, λ6c8a9724015c ??= document.createElement("\x69\x66\x72\x61\x6d\x65"), λ1312f9cf6950);
        return this.frames.push(λ585b0fc3adcc), λ585b0fc3adcc;
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
            \u{67}\u{65}\u{74}\u{49}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{63}\u{72}\u{69}\u{70}\u{74}\u{73}: function e(λ6c8a9724015c, λ1312f9cf6950, λ585b0fc3adcc, λ4c50339e4d18, λ8af08bb782e5, λ4d1c3d58e036) {
              return (λ6f48a4e43689, λ18a3c4074ecf, λ3446a5c4218f, λ3b393c982100) => {
                var λf7e013ccc189;
                return [ λ3b393c982100(λ6c8a9724015c.studyjetPath), λ3b393c982100(λ585b0fc3adcc.href + λ6c8a9724015c.virtualWasmPath), λ3b393c982100(λ6c8a9724015c.\u{69}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{50}\u{61}\u{74}\u{68}), λ3b393c982100("data:text/javascript;charset=utf-8;base64," + (λf7e013ccc189 = `\x0a\x09\x09\x09\x09\x09\x64\x6f\x63\x75\x6d\x65\x6e\x74\x2e\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63\x74\x6f\x72\x41\x6c\x6c\x28\x22\x73\x63\x72\x69\x70\x74\x5b\x73\x74\x75\x64\x79\x6a\x65\x74\x2d\x69\x6e\x6a\x65\x63\x74\x65\x64\x5d\x22\x29\x2e\x66\x6f\x72\x45\x61\x63\x68\x28\x73\x63\x72\x69\x70\x74\x20\x3d\x3e\x20\x73\x63\x72\x69\x70\x74\x2e\x72\x65\x6d\x6f\x76\x65\x28\x29\x29\x3b\x0a\x09\x09\x09\x09\x09\x24\x73\x74\x75\x64\x79\x6a\x65\x74\x43\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2e\x6c\x6f\x61\x64\x28\x7b\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x66\x69\x67\x3a\x20${JSON.stringify(λ6c8a9724015c)}\x2c\x0a\x09\x09\x09\x09\x09\x09\x73\x6a\x63\x6f\x6e\x66\x69\x67\x3a\x20${JSON.stringify(λ1312f9cf6950)}\x2c\x0a\x09\x09\x09\x09\x09\x09\x70\x72\x65\x66\x69\x78\x3a\x20\x6e\x65\x77\x20\x55\x52\x4c\x28\x22${λ585b0fc3adcc.href}\x22\x29\x2c\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6f\x6b\x69\x65\x73\x3a\x20${JSON.stringify(λ4c50339e4d18.dump())}\x2c\x0a\x09\x09\x09\x09\x09\x09\x79\x69\x65\x6c\x64\x47\x65\x74\x49\x6e\x6a\x65\x63\x74\x53\x63\x72\x69\x70\x74\x73\x3a\x20${e.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x45\x6e\x63\x6f\x64\x65\x3a\x20${λ8af08bb782e5.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x44\x65\x63\x6f\x64\x65\x3a\x20${λ4d1c3d58e036.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x69\x6e\x69\x74\x48\x65\x61\x64\x65\x72\x73\x3a\x20${JSON.stringify(λ3446a5c4218f.headers ?? [])}\x2c\x0a\x09\x09\x09\x09\x09\x09\x68\x69\x73\x74\x6f\x72\x79\x3a\x20${JSON.stringify(λ3446a5c4218f.history ?? [])}\x2c\x0a\x09\x09\x09\x09\x09\x7d\x29\x0a\x09\x09\x09\x09`, 
                btoa((new TextEncoder).encode(λf7e013ccc189).reduce((λ6c8a9724015c, λ1312f9cf6950) => (λ6c8a9724015c.push(String.fromCharCode(λ1312f9cf6950)), 
                λ6c8a9724015c), []).join("")))) ];
              };
            }(this.controller.config, this.controller.studyjetConfig, new URL(this.prefix, location.href), this.controller.cookieJar, this.controller.config.codec.encode, this.controller.config.codec.decode),
            \u{67}\u{65}\u{74}\u{57}\u{6f}\u{72}\u{6b}\u{65}\u{72}\u{49}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{63}\u{72}\u{69}\u{70}\u{74}\u{73}: (λ6c8a9724015c, λ1312f9cf6950, λ585b0fc3adcc) => {
              var λ4c50339e4d18;
              let λ8af08bb782e5 = "";
              return λ8af08bb782e5 += λ585b0fc3adcc(this.controller.config.studyjetPath), λ8af08bb782e5 += λ585b0fc3adcc(this.prefix + this.controller.config.virtualWasmPath), 
              λ8af08bb782e5 += λ585b0fc3adcc("data:text/javascript;charset=utf-8;base64," + (λ4c50339e4d18 = `\x0a\x09\x09\x09\x09\x09\x28\x28\x29\x3d\x3e\x7b\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x7b\x20\x53\x74\x75\x64\x79\x4a\x65\x74\x43\x6c\x69\x65\x6e\x74\x2c\x20\x43\x6f\x6f\x6b\x69\x65\x4a\x61\x72\x2c\x20\x73\x65\x74\x57\x61\x73\x6d\x20\x7d\x20\x3d\x20\x24\x73\x74\x75\x64\x79\x6a\x65\x74\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x73\x65\x74\x57\x61\x73\x6d\x28\x55\x69\x6e\x74\x38\x41\x72\x72\x61\x79\x2e\x66\x72\x6f\x6d\x28\x61\x74\x6f\x62\x28\x73\x65\x6c\x66\x2e\x57\x41\x53\x4d\x29\x2c\x20\x28\x63\x29\x20\x3d\x3e\x20\x63\x2e\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74\x28\x30\x29\x29\x29\x3b\x0a\x09\x09\x09\x09\x09\x09\x64\x65\x6c\x65\x74\x65\x20\x73\x65\x6c\x66\x2e\x57\x41\x53\x4d\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x73\x6a\x63\x6f\x6e\x66\x69\x67\x20\x3d\x20${JSON.stringify(this.controller.studyjetConfig)}\x3b\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x70\x72\x65\x66\x69\x78\x20\x3d\x20\x6e\x65\x77\x20\x55\x52\x4c\x28\x22${this.prefix}\x22\x2c\x20\x6c\x6f\x63\x61\x74\x69\x6f\x6e\x2e\x68\x72\x65\x66\x29\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x3d\x20\x7b\x0a\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x66\x69\x67\x3a\x20\x73\x6a\x63\x6f\x6e\x66\x69\x67\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x70\x72\x65\x66\x69\x78\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x69\x6e\x74\x65\x72\x66\x61\x63\x65\x3a\x20\x7b\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x45\x6e\x63\x6f\x64\x65\x3a\x20${this.controller.config.codec.encode.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x44\x65\x63\x6f\x64\x65\x3a\x20${this.controller.config.codec.decode.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x7d\x2c\x0a\x09\x09\x09\x09\x09\x09\x7d\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x63\x6c\x69\x65\x6e\x74\x20\x3d\x20\x6e\x65\x77\x20\x53\x74\x75\x64\x79\x4a\x65\x74\x43\x6c\x69\x65\x6e\x74\x28\x67\x6c\x6f\x62\x61\x6c\x54\x68\x69\x73\x2c\x20\x7b\x0a\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x74\x65\x78\x74\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x3a\x20\x6e\x75\x6c\x6c\x2c\x0a\x09\x09\x09\x09\x09\x09\x7d\x29\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6c\x69\x65\x6e\x74\x2e\x68\x6f\x6f\x6b\x28\x29\x3b\x0a\x09\x09\x09\x09\x09\x7d\x29\x28\x29\x3b\x0a\x09\x09\x09\x09\x09`, 
              btoa((new TextEncoder).encode(λ4c50339e4d18).reduce((λ6c8a9724015c, λ1312f9cf6950) => (λ6c8a9724015c.push(String.fromCharCode(λ1312f9cf6950)), 
              λ6c8a9724015c), []).join(""))));
            },
            codecEncode: this.controller.config.codec.encode,
            codecDecode: this.controller.config.codec.decode
          }
        };
      }
      plugins=[];
      constructor(λ6c8a9724015c, λ585b0fc3adcc, λ4c50339e4d18 = {}) {
        for (const λ6f48a4e43689 of (this.controller = λ6c8a9724015c, this.element = λ585b0fc3adcc, 
        this.options = λ4c50339e4d18, this.id = b(), this.prefix = this.controller.prefix + this.id + "\x2f", 
        this.fetchHandler = new λ8af08bb782e5.mK({
          crossOriginIsolated: self.crossOriginIsolated,
          context: this.context,
          transport: λ6c8a9724015c.transport,
          async sendSetCookie(λ1312f9cf6950, λ585b0fc3adcc) {
            await λ6c8a9724015c.persistCookies(), await λ6c8a9724015c.propagateCookieSync(λ1312f9cf6950.map(({url: λ6c8a9724015c, cookie: λ1312f9cf6950}) => ({
              url: λ6c8a9724015c.href,
              cookie: λ1312f9cf6950
            })), λ585b0fc3adcc);
          },
          fetchBlobUrl: async λ6c8a9724015c => λ1312f9cf6950.Sr.fromNativeResponse(await fetch(λ6c8a9724015c)),
          fetchDataUrl: async λ6c8a9724015c => λ1312f9cf6950.Sr.fromNativeResponse(await fetch(λ6c8a9724015c))
        }), this.hooks = {
          fetch: this.fetchHandler.hooks.fetch,
          init: λ8af08bb782e5.Cx.create(),
          error: λ8af08bb782e5.Cx.create()
        }, λ585b0fc3adcc[λ4d1c3d58e036.I] = this, this.plugins = λ4c50339e4d18.plugins ?? [], 
        this.plugins)) {
          for (const λ6c8a9724015c of λ6f48a4e43689.dependencies) if (!this.plugins.find(λ1312f9cf6950 => λ1312f9cf6950.name === λ6c8a9724015c)) throw Error(`\x44\x65\x70\x65\x6e\x64\x65\x6e\x63\x79\x20${λ6c8a9724015c}\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x66\x6f\x72\x20\x70\x6c\x75\x67\x69\x6e\x20${λ6f48a4e43689.name}`);
          λ6f48a4e43689.install(this);
        }
      }
      getPlugin(λ6c8a9724015c) {
        let λ1312f9cf6950 = this.plugins.find(λ1312f9cf6950 => λ1312f9cf6950.name === λ6c8a9724015c);
        if (!λ1312f9cf6950) throw Error(`\x50\x6c\x75\x67\x69\x6e\x20${λ6c8a9724015c}\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64`);
        return λ1312f9cf6950;
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
      go(λ6c8a9724015c) {
        let λ1312f9cf6950 = (0, λ8af08bb782e5.Oy)(λ6c8a9724015c, this.context, {
          origin: new URL(location.href),
          base: new URL(location.href)
        });
        this.element.src = λ1312f9cf6950;
      }
    }
  })(), $studyjetController = λ585b0fc3adcc;
})();
