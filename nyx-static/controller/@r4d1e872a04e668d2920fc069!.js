var $studyjetController;

(() => {
  var λacdc2a6c6eda = {
    286(λacdc2a6c6eda, λe8a7d4c872e5, λb93cf59a67f6) {
      λb93cf59a67f6.d(λe8a7d4c872e5, {
        I: () => λd45989f6244c
      });
      let λd45989f6244c = Symbol.for("\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x66\x72\x61\x6d\x65\x20\x68\x61\x6e\x64\x6c\x65");
    },
    355(λacdc2a6c6eda, λe8a7d4c872e5, λb93cf59a67f6) {
      λb93cf59a67f6.d(λe8a7d4c872e5, {
        O: () => s,
        x: () => λd45989f6244c
      });
      let λd45989f6244c = "\x30\x2e\x30\x2e\x31\x34";
      function s() {
        if ("\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" == typeof $studyjet) throw Error("\x40\x6d\x65\x72\x63\x75\x72\x79\x77\x6f\x72\x6b\x73\x68\x6f\x70\x2f\x73\x74\x75\x64\x79\x6a\x65\x74\x20\x69\x73\x20\x6e\x6f\x74\x20\x6c\x6f\x61\x64\x65\x64\x2e\x20\x4c\x6f\x61\x64\x20\x73\x74\x75\x64\x79\x6a\x65\x74\x20\x62\x65\x66\x6f\x72\x65\x20\x74\x68\x65\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2e");
        var λacdc2a6c6eda = "\x32\x2e\x30\x2e\x36\x37\x2d\x61\x6c\x70\x68\x61\x2e\x32", λe8a7d4c872e5 = $studyjet.versionInfo.version;
        if (λacdc2a6c6eda !== λe8a7d4c872e5) throw Error(`\x40\x6d\x65\x72\x63\x75\x72\x79\x77\x6f\x72\x6b\x73\x68\x6f\x70\x2f\x73\x74\x75\x64\x79\x6a\x65\x74\x20\x76\x65\x72\x73\x69\x6f\x6e\x20\x6d\x69\x73\x6d\x61\x74\x63\x68\x3a\x20\x74\x68\x69\x73\x20\x62\x75\x69\x6c\x64\x20\x65\x78\x70\x65\x63\x74\x73\x20${λacdc2a6c6eda}\x2c\x20\x62\x75\x74\x20\x74\x68\x65\x20\x6c\x6f\x61\x64\x65\x64\x20\x72\x75\x6e\x74\x69\x6d\x65\x20\x69\x73\x20${λe8a7d4c872e5}`);
      }
    },
    805(λacdc2a6c6eda, λe8a7d4c872e5, λb93cf59a67f6) {
      λb93cf59a67f6.d(λe8a7d4c872e5, {
        C: () => o
      });
      class o {
        methods;
        id;
        sendRaw;
        counter=0;
        promiseCallbacks=new Map;
        constructor(λacdc2a6c6eda, λe8a7d4c872e5, λb93cf59a67f6) {
          this.methods = λacdc2a6c6eda, this.id = λe8a7d4c872e5, this.sendRaw = λb93cf59a67f6;
        }
        recieve(λacdc2a6c6eda) {
          if (null == λacdc2a6c6eda || "\x6f\x62\x6a\x65\x63\x74" != typeof λacdc2a6c6eda) return;
          let λe8a7d4c872e5 = λacdc2a6c6eda[this.id];
          if (null == λe8a7d4c872e5 || "\x6f\x62\x6a\x65\x63\x74" != typeof λe8a7d4c872e5) return;
          let λb93cf59a67f6 = λe8a7d4c872e5.$type;
          if ("\x72\x65\x73\x70\x6f\x6e\x73\x65" === λb93cf59a67f6) {
            let λacdc2a6c6eda = λe8a7d4c872e5.$token, λb93cf59a67f6 = λe8a7d4c872e5.$data, λd45989f6244c = λe8a7d4c872e5.$error, λba77258d9d21 = this.promiseCallbacks.get(λacdc2a6c6eda);
            if (!λba77258d9d21) return;
            this.promiseCallbacks.delete(λacdc2a6c6eda), void 0 !== λd45989f6244c ? λba77258d9d21.reject(Error(λd45989f6244c)) : λba77258d9d21.resolve(λb93cf59a67f6);
          } else if ("\x72\x65\x71\x75\x65\x73\x74" === λb93cf59a67f6) {
            let λacdc2a6c6eda = λe8a7d4c872e5.$method, λb93cf59a67f6 = λe8a7d4c872e5.$args;
            this.methods[λacdc2a6c6eda](λb93cf59a67f6).then(λacdc2a6c6eda => {
              this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λe8a7d4c872e5.$token,
                  $data: λacdc2a6c6eda?.[0]
                }
              }, λacdc2a6c6eda?.[1]);
            }).catch(λacdc2a6c6eda => {
              console.error(λacdc2a6c6eda), this.sendRaw({
                [this.id]: {
                  $type: "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                  $token: λe8a7d4c872e5.$token,
                  $error: λacdc2a6c6eda?.toString() || "\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x65\x72\x72\x6f\x72"
                }
              }, []);
            });
          }
        }
        call(λacdc2a6c6eda, λe8a7d4c872e5, λb93cf59a67f6 = []) {
          let λd45989f6244c = this.counter++;
          return new Promise((λba77258d9d21, λbb8548d294ac) => {
            this.promiseCallbacks.set(λd45989f6244c, {
              resolve: λba77258d9d21,
              reject: λbb8548d294ac
            }), this.sendRaw({
              [this.id]: {
                $type: "\x72\x65\x71\x75\x65\x73\x74",
                $method: λacdc2a6c6eda,
                $args: λe8a7d4c872e5,
                $token: λd45989f6244c
              }
            }, λb93cf59a67f6);
          });
        }
      }
    },
    986(λacdc2a6c6eda) {
      let λe8a7d4c872e5 = Object.getPrototypeOf({});
      function r() {
        return function(λacdc2a6c6eda) {
          return "\x6f\x62\x6a\x65\x63\x74" == typeof λacdc2a6c6eda && null !== λacdc2a6c6eda && !(λacdc2a6c6eda instanceof RegExp) && !(λacdc2a6c6eda instanceof Date);
        };
      }
      function o(λacdc2a6c6eda) {
        function o(λacdc2a6c6eda) {
          return "\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72" !== λacdc2a6c6eda && "\x70\x72\x6f\x74\x6f\x74\x79\x70\x65" !== λacdc2a6c6eda && "\x5f\x5f\x70\x72\x6f\x74\x6f\x5f\x5f" !== λacdc2a6c6eda;
        }
        let λb93cf59a67f6 = Object.prototype.propertyIsEnumerable, λd45989f6244c = λacdc2a6c6eda?.symbols ? function(λacdc2a6c6eda) {
          let λe8a7d4c872e5 = Object.keys(λacdc2a6c6eda), λd45989f6244c = Object.getOwnPropertySymbols(λacdc2a6c6eda);
          for (let λba77258d9d21 = 0, λbb8548d294ac = λd45989f6244c.length; λba77258d9d21 < λbb8548d294ac; ++λba77258d9d21) λb93cf59a67f6.call(λacdc2a6c6eda, λd45989f6244c[λba77258d9d21]) && λe8a7d4c872e5.push(λd45989f6244c[λba77258d9d21]);
          return λe8a7d4c872e5;
        } : Object.keys, λba77258d9d21 = "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λacdc2a6c6eda?.cloneProtoObject ? λacdc2a6c6eda.cloneProtoObject : void 0, λbb8548d294ac = "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λacdc2a6c6eda?.isMergeableObject ? λacdc2a6c6eda.isMergeableObject : r(), λb9b86485a109 = λacdc2a6c6eda?.onlyDefinedProperties === !0, λb0b4993f5887 = λacdc2a6c6eda && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof λacdc2a6c6eda.mergeArray ? λacdc2a6c6eda.mergeArray({
          clone: d,
          deepmerge: h,
          getKeys: λd45989f6244c,
          isMergeableObject: λbb8548d294ac
        }) : function(λacdc2a6c6eda, λe8a7d4c872e5) {
          let λb93cf59a67f6 = λacdc2a6c6eda.length, λd45989f6244c = λe8a7d4c872e5.length, λba77258d9d21 = 0, λbb8548d294ac = Array(λb93cf59a67f6 + λd45989f6244c);
          for (;λba77258d9d21 < λb93cf59a67f6; ++λba77258d9d21) λbb8548d294ac[λba77258d9d21] = d(λacdc2a6c6eda[λba77258d9d21]);
          for (λba77258d9d21 = 0; λba77258d9d21 < λd45989f6244c; ++λba77258d9d21) λbb8548d294ac[λba77258d9d21 + λb93cf59a67f6] = d(λe8a7d4c872e5[λba77258d9d21]);
          return λbb8548d294ac;
        };
        function d(λacdc2a6c6eda) {
          return λbb8548d294ac(λacdc2a6c6eda) ? Array.isArray(λacdc2a6c6eda) ? function(λacdc2a6c6eda) {
            let λe8a7d4c872e5 = 0, λb93cf59a67f6 = λacdc2a6c6eda.length, λd45989f6244c = Array(λb93cf59a67f6);
            for (;λe8a7d4c872e5 < λb93cf59a67f6; ++λe8a7d4c872e5) λd45989f6244c[λe8a7d4c872e5] = d(λacdc2a6c6eda[λe8a7d4c872e5]);
            return λd45989f6244c;
          }(λacdc2a6c6eda) : function(λacdc2a6c6eda) {
            let λb93cf59a67f6, λbb8548d294ac, λb9b86485a109, λb0b4993f5887 = {};
            if (λba77258d9d21 && Object.getPrototypeOf(λacdc2a6c6eda) !== λe8a7d4c872e5) return λba77258d9d21(λacdc2a6c6eda);
            let λ33d008e745a6 = λd45989f6244c(λacdc2a6c6eda);
            for (λb93cf59a67f6 = 0, λbb8548d294ac = λ33d008e745a6.length; λb93cf59a67f6 < λbb8548d294ac; ++λb93cf59a67f6) o(λb9b86485a109 = λ33d008e745a6[λb93cf59a67f6]) && (λb0b4993f5887[λb9b86485a109] = d(λacdc2a6c6eda[λb9b86485a109]));
            return λb0b4993f5887;
          }(λacdc2a6c6eda) : λacdc2a6c6eda;
        }
        function h(λacdc2a6c6eda, λb93cf59a67f6) {
          if (λb9b86485a109 && void 0 === λb93cf59a67f6) return d(λacdc2a6c6eda);
          let λ33d008e745a6 = Array.isArray(λb93cf59a67f6), λ77e42d55362c = Array.isArray(λacdc2a6c6eda);
          return "\x6f\x62\x6a\x65\x63\x74" != typeof λb93cf59a67f6 || null === λb93cf59a67f6 ? λb93cf59a67f6 : λbb8548d294ac(λacdc2a6c6eda) ? λ33d008e745a6 && λ77e42d55362c ? λb0b4993f5887(λacdc2a6c6eda, λb93cf59a67f6) : λ33d008e745a6 !== λ77e42d55362c ? d(λb93cf59a67f6) : function(λacdc2a6c6eda, λb93cf59a67f6) {
            let λb0b4993f5887, λ33d008e745a6, λ77e42d55362c, λ4f53975f40a7 = {}, λ69f7ad8a6b9e = λd45989f6244c(λacdc2a6c6eda), λe97b977629af = λd45989f6244c(λb93cf59a67f6);
            for (λb0b4993f5887 = 0, λ33d008e745a6 = λ69f7ad8a6b9e.length; λb0b4993f5887 < λ33d008e745a6; ++λb0b4993f5887) o(λ77e42d55362c = λ69f7ad8a6b9e[λb0b4993f5887]) && -1 === λe97b977629af.indexOf(λ77e42d55362c) && (λ4f53975f40a7[λ77e42d55362c] = d(λacdc2a6c6eda[λ77e42d55362c]));
            for (λb0b4993f5887 = 0, λ33d008e745a6 = λe97b977629af.length; λb0b4993f5887 < λ33d008e745a6; ++λb0b4993f5887) if (o(λ77e42d55362c = λe97b977629af[λb0b4993f5887])) if (λ77e42d55362c in λacdc2a6c6eda) -1 !== λ69f7ad8a6b9e.indexOf(λ77e42d55362c) && (λba77258d9d21 && λbb8548d294ac(λb93cf59a67f6[λ77e42d55362c]) && Object.getPrototypeOf(λb93cf59a67f6[λ77e42d55362c]) !== λe8a7d4c872e5 ? λ4f53975f40a7[λ77e42d55362c] = λba77258d9d21(λb93cf59a67f6[λ77e42d55362c]) : λ4f53975f40a7[λ77e42d55362c] = h(λacdc2a6c6eda[λ77e42d55362c], λb93cf59a67f6[λ77e42d55362c])); else {
              if (λb9b86485a109 && void 0 === λb93cf59a67f6[λ77e42d55362c]) continue;
              λ4f53975f40a7[λ77e42d55362c] = d(λb93cf59a67f6[λ77e42d55362c]);
            }
            return λ4f53975f40a7;
          }(λacdc2a6c6eda, λb93cf59a67f6) : d(λb93cf59a67f6);
        }
        return λacdc2a6c6eda?.all ? function() {
          let λacdc2a6c6eda;
          switch (arguments.length) {
           case 0:
            return {};

           case 1:
            return d(arguments[0]);

           case 2:
            return h(arguments[0], arguments[1]);
          }
          for (let λe8a7d4c872e5 = 0, λb93cf59a67f6 = arguments.length; λe8a7d4c872e5 < λb93cf59a67f6; ++λe8a7d4c872e5) λacdc2a6c6eda = h(λacdc2a6c6eda, arguments[λe8a7d4c872e5]);
          return λacdc2a6c6eda;
        } : h;
      }
      λacdc2a6c6eda.exports = o, λacdc2a6c6eda.exports.default = o, λacdc2a6c6eda.exports.deepmerge = o, 
      Object.defineProperty(λacdc2a6c6eda.exports, "\x69\x73\x4d\x65\x72\x67\x65\x61\x62\x6c\x65\x4f\x62\x6a\x65\x63\x74", {
        get: r
      });
    },
    235(λacdc2a6c6eda, λe8a7d4c872e5, λb93cf59a67f6) {
      λb93cf59a67f6.d(λe8a7d4c872e5, {
        Sr: () => s
      }), WebSocket.CLOSED, WebSocket.CONNECTING, WebSocket.OPEN, EventTarget;
      let λd45989f6244c = [ 101, 204, 205, 304 ];
      class s extends Response {
        url;
        rawHeaders;
        redirected=!1;
        static fromTransferrableResponse(λacdc2a6c6eda, λe8a7d4c872e5) {
          let λb93cf59a67f6 = new s(λd45989f6244c.includes(λacdc2a6c6eda.status) ? void 0 : λacdc2a6c6eda.body, {
            headers: new Headers(λacdc2a6c6eda.headers),
            status: λacdc2a6c6eda.status,
            statusText: λacdc2a6c6eda.statusText
          });
          return λb93cf59a67f6.url = λe8a7d4c872e5, λb93cf59a67f6.redirected = λacdc2a6c6eda.status >= 300 && λacdc2a6c6eda.status < 400 && void 0 !== λacdc2a6c6eda.headers.location, 
          λb93cf59a67f6.rawHeaders = λacdc2a6c6eda.headers, λb93cf59a67f6;
        }
        static fromNativeResponse(λacdc2a6c6eda) {
          let λe8a7d4c872e5 = new s(λd45989f6244c.includes(λacdc2a6c6eda.status) ? void 0 : λacdc2a6c6eda.body, {
            headers: λacdc2a6c6eda.headers,
            status: λacdc2a6c6eda.status,
            statusText: λacdc2a6c6eda.statusText
          });
          return λe8a7d4c872e5.url = λacdc2a6c6eda.url, λe8a7d4c872e5.rawHeaders = [ ...λacdc2a6c6eda.headers ], 
          λe8a7d4c872e5.redirected = λacdc2a6c6eda.redirected, λe8a7d4c872e5;
        }
      }
    },
    423(λacdc2a6c6eda, λe8a7d4c872e5, λb93cf59a67f6) {
      λb93cf59a67f6.d(λe8a7d4c872e5, {
        Cx: () => λa3d2a331469c,
        Oy: () => λ320257f06727,
        cP: () => λba77258d9d21,
        ht: () => λ58212376a8ca,
        k_: () => λb9b86485a109,
        mK: () => λ4f53975f40a7,
        sb: () => λ3df026d15952,
        uh: () => λe97b977629af
      });
      let {BareResponse: λd45989f6244c, CookieJar: λba77258d9d21, IncrementalHtmlRewriter: λbb8548d294ac, Plugin: λb9b86485a109, STUDYJETCLIENT: λb0b4993f5887, STUDYJETCLIENTNAME: λ33d008e745a6, StudyJetClient: λ77e42d55362c, StudyJetFetchHandler: λ4f53975f40a7, StudyJetFetchTrackedClient: λ69f7ad8a6b9e, StudyJetHeaders: λe97b977629af, Tap: λa3d2a331469c, \u{63}\u{72}\u{65}\u{61}\u{74}\u{65}\u{4c}\u{6f}\u{63}\u{61}\u{74}\u{69}\u{6f}\u{6e}\u{50}\u{72}\u{6f}\u{78}\u{79}: λ0f46621b2202, defaultConfig: λ3df026d15952, defaultConfigDev: λb71e71ad2a28, flagEnabled: λ663623fdcc7e, getOwnPropertyDescriptorHandler: λe8a0bcb3413e, getRewriter: λ6fecc9639307, getScriptBlockTypeString: λf72319919609, htmlRules: λbeb34f108a15, isArchiveMimeType: λf1187155c49d, isAudioOrVideoMimeType: λ4b3fb09da492, isFontMimeType: λ07fb8f91590a, isHtmlMimeType: λ168b2077c2e2, isImageMimeType: λd83b4120eb7d, isInlineDisplayableMimeType: λ70d113ba5ef3, isJavascriptMimeType: λ9040cfc4a3bb, isJavascriptMimeTypeEssenceMatch: λ3c340bc4d3d9, isModuleScriptType: λ637403d70d6e, isScriptType: λ318499d8d725, isScriptableMimeType: λ9b70327efcba, isXmlMimeType: λ916c71c27fd6, isZipBasedMimeType: λcc620daf7408, isdedicated: λ7af38891beda, isshared: λ61ec705e0aa1, issw: λ44a971d1c0c2, iswindow: λe711ed712771, isworker: λee34451932fa, parseMimeType: λ03fd46cd46fa, rewriteBlob: λ9a14073d73a2, rewriteCss: λddae3878b601, rewriteHtml: λeb410b59a8e8, rewriteJs: λ0b091345aab9, rewriteJsInner: λc86b01e45715, rewriteSrcset: λ553c850fac12, rewriteUrl: λ320257f06727, rewriteWorkers: λ4dc2d34674af, setWasm: λ58212376a8ca, unrewriteBlob: λac7466699c09, unrewriteCss: λb46384e893ce, unrewriteHtml: λ827bfdbaeb33, unrewriteUrl: λ886727901d4f, versionInfo: λ7e9754273a62} = globalThis.$studyjet;
    }
  }, λe8a7d4c872e5 = {};
  function r(λb93cf59a67f6) {
    var λd45989f6244c = λe8a7d4c872e5[λb93cf59a67f6];
    if (void 0 !== λd45989f6244c) return λd45989f6244c.exports;
    var λba77258d9d21 = λe8a7d4c872e5[λb93cf59a67f6] = {
      exports: {}
    };
    return λacdc2a6c6eda[λb93cf59a67f6](λba77258d9d21, λba77258d9d21.exports, r), λba77258d9d21.exports;
  }
  r.n = λacdc2a6c6eda => {
    var λe8a7d4c872e5 = λacdc2a6c6eda && λacdc2a6c6eda.__esModule ? () => λacdc2a6c6eda.default : () => λacdc2a6c6eda;
    return r.d(λe8a7d4c872e5, {
      a: λe8a7d4c872e5
    }), λe8a7d4c872e5;
  }, r.d = (λacdc2a6c6eda, λe8a7d4c872e5) => {
    for (var λb93cf59a67f6 in λe8a7d4c872e5) r.o(λe8a7d4c872e5, λb93cf59a67f6) && !r.o(λacdc2a6c6eda, λb93cf59a67f6) && Object.defineProperty(λacdc2a6c6eda, λb93cf59a67f6, {
      enumerable: !0,
      get: λe8a7d4c872e5[λb93cf59a67f6]
    });
  }, r.o = (λacdc2a6c6eda, λe8a7d4c872e5) => Object.prototype.hasOwnProperty.call(λacdc2a6c6eda, λe8a7d4c872e5), 
  r.r = λacdc2a6c6eda => {
    "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(λacdc2a6c6eda, Symbol.toStringTag, {
      value: "\x4d\x6f\x64\x75\x6c\x65"
    }), Object.defineProperty(λacdc2a6c6eda, "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65", {
      value: !0
    });
  };
  var λb93cf59a67f6 = {};
  (() => {
    r.r(λb93cf59a67f6), r.d(λb93cf59a67f6, {
      Controller: () => S,
      Frame: () => v,
      ManagedPlugin: () => d,
      VERSION: () => λb9b86485a109.x,
      assertRuntimeStudyJetVersion: () => λb9b86485a109.O,
      config: () => λb0b4993f5887
    });
    var λacdc2a6c6eda = r(805), λe8a7d4c872e5 = r(235), λd45989f6244c = r(986), λba77258d9d21 = r(423), λbb8548d294ac = r(286), λb9b86485a109 = r(355);
    let λb0b4993f5887 = {
      prefix: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x7e\x2f\x73\x74\x75\x64\x79\x2f",
      studyjetPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x73\x74\x75\x64\x79\x6a\x65\x74\x2f\x40\x72\x36\x39\x63\x31\x38\x66\x39\x62\x64\x34\x65\x64\x31\x37\x35\x63\x39\x65\x61\x35\x30\x35\x62\x38\x21\x2e\x6a\x73",
      \u{69}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{50}\u{61}\u{74}\u{68}: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2f\x40\x72\x39\x65\x38\x35\x35\x61\x63\x38\x32\x65\x64\x63\x34\x62\x35\x31\x65\x31\x33\x34\x30\x35\x36\x34\x21\x2e\x6a\x73",
      wasmPath: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x73\x74\x75\x64\x79\x6a\x65\x74\x2f\x40\x72\x35\x35\x32\x38\x36\x63\x66\x65\x30\x39\x64\x37\x34\x31\x30\x32\x33\x63\x63\x33\x65\x31\x64\x36\x21\x2e\x77\x61\x73\x6d",
      virtualWasmPath: "\x73\x74\x75\x64\x79\x6a\x65\x74\x2e\x77\x61\x73\x6d\x2e\x6a\x73",
      codec: {
        encode: λacdc2a6c6eda => λacdc2a6c6eda ? encodeURIComponent(λacdc2a6c6eda) : λacdc2a6c6eda,
        decode: λacdc2a6c6eda => λacdc2a6c6eda ? decodeURIComponent(λacdc2a6c6eda) : λacdc2a6c6eda
      }
    }, λ33d008e745a6 = {
      flags: {
        ...λba77258d9d21.sb.flags,
        allowFailedIntercepts: !0
      },
      maskedfiles: [ "\x69\x6e\x6a\x65\x63\x74\x2e\x6a\x73", "\x73\x74\x75\x64\x79\x6a\x65\x74\x2e\x77\x61\x73\x6d\x2e\x6a\x73" ]
    };
    class d extends λba77258d9d21.k_ {
      frame=null;
      dependencies=[];
      constructor(λacdc2a6c6eda, λe8a7d4c872e5) {
        super(λacdc2a6c6eda), this.dependencies = λe8a7d4c872e5;
      }
      install(λacdc2a6c6eda) {
        this.frame = λacdc2a6c6eda;
      }
    }
    let λ77e42d55362c = "\x73\x74\x61\x74\x65", λ4f53975f40a7 = "\x63\x6f\x6f\x6b\x69\x65\x73", λ69f7ad8a6b9e = null;
    function u(λacdc2a6c6eda) {
      return "\x6f\x62\x6a\x65\x63\x74" == typeof λacdc2a6c6eda && null !== λacdc2a6c6eda && "\x6e\x75\x6d\x62\x65\x72" == typeof λacdc2a6c6eda.updatedAt && Number.isFinite(λacdc2a6c6eda.updatedAt) && "\x73\x74\x72\x69\x6e\x67" == typeof λacdc2a6c6eda.cookies ? λacdc2a6c6eda : null;
    }
    function y(λacdc2a6c6eda) {
      return new Promise((λe8a7d4c872e5, λb93cf59a67f6) => {
        λacdc2a6c6eda.onsuccess = () => λe8a7d4c872e5(λacdc2a6c6eda.result), λacdc2a6c6eda.onerror = () => λb93cf59a67f6(λacdc2a6c6eda.error ?? Error("\x49\x6e\x64\x65\x78\x65\x64\x44\x42\x20\x72\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64"));
      });
    }
    function m(λacdc2a6c6eda) {
      return new Promise((λe8a7d4c872e5, λb93cf59a67f6) => {
        λacdc2a6c6eda.oncomplete = () => λe8a7d4c872e5(), λacdc2a6c6eda.onabort = () => λb93cf59a67f6(λacdc2a6c6eda.error ?? Error("\x49\x6e\x64\x65\x78\x65\x64\x44\x42\x20\x74\x72\x61\x6e\x73\x61\x63\x74\x69\x6f\x6e\x20\x61\x62\x6f\x72\x74\x65\x64")), 
        λacdc2a6c6eda.onerror = () => λb93cf59a67f6(λacdc2a6c6eda.error ?? Error("\x49\x6e\x64\x65\x78\x65\x64\x44\x42\x20\x74\x72\x61\x6e\x73\x61\x63\x74\x69\x6f\x6e\x20\x66\x61\x69\x6c\x65\x64"));
      });
    }
    function g() {
      return λ69f7ad8a6b9e || (λ69f7ad8a6b9e = new Promise((λacdc2a6c6eda, λe8a7d4c872e5) => {
        let λb93cf59a67f6 = indexedDB.open("\x40\x64\x39\x34\x31\x62\x63\x36\x35\x61\x66\x33", 1);
        λb93cf59a67f6.onupgradeneeded = () => {
          let λacdc2a6c6eda = λb93cf59a67f6.result;
          λacdc2a6c6eda.objectStoreNames.contains(λ77e42d55362c) || λacdc2a6c6eda.createObjectStore(λ77e42d55362c);
        }, λb93cf59a67f6.onsuccess = () => λacdc2a6c6eda(λb93cf59a67f6.result), λb93cf59a67f6.onerror = () => λe8a7d4c872e5(λb93cf59a67f6.error ?? Error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x6f\x70\x65\x6e\x20\x63\x6f\x6f\x6b\x69\x65\x20\x64\x61\x74\x61\x62\x61\x73\x65"));
      }));
    }
    async function w() {
      try {
        let λacdc2a6c6eda = (await g()).transaction(λ77e42d55362c, "\x72\x65\x61\x64\x6f\x6e\x6c\x79"), λe8a7d4c872e5 = λacdc2a6c6eda.objectStore(λ77e42d55362c), λb93cf59a67f6 = await y(λe8a7d4c872e5.get(λ4f53975f40a7));
        return await m(λacdc2a6c6eda), u(λb93cf59a67f6);
      } catch (λacdc2a6c6eda) {
        return console.error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x72\x65\x61\x64\x20\x70\x65\x72\x73\x69\x73\x74\x65\x64\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x63\x6f\x6f\x6b\x69\x65\x73\x3a", λacdc2a6c6eda), 
        null;
      }
    }
    async function k(λacdc2a6c6eda, λe8a7d4c872e5) {
      try {
        let λb93cf59a67f6 = (await g()).transaction(λ77e42d55362c, "\x72\x65\x61\x64\x77\x72\x69\x74\x65"), λd45989f6244c = λb93cf59a67f6.objectStore(λ77e42d55362c), λba77258d9d21 = u(await y(λd45989f6244c.get(λ4f53975f40a7))), λbb8548d294ac = Math.max(Date.now(), λe8a7d4c872e5 + 1, (λba77258d9d21?.updatedAt ?? 0) + 1);
        return λd45989f6244c.put({
          updatedAt: λbb8548d294ac,
          cookies: λacdc2a6c6eda
        }, λ4f53975f40a7), await m(λb93cf59a67f6), λbb8548d294ac;
      } catch (λacdc2a6c6eda) {
        return console.error("\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x70\x65\x72\x73\x69\x73\x74\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x63\x6f\x6f\x6b\x69\x65\x73\x3a", λacdc2a6c6eda), λe8a7d4c872e5;
      }
    }
    function b() {
      return Math.random().toString(36).substring(2, 10);
    }
    let λe97b977629af = (0, λd45989f6244c.deepmerge)();
    class S {
      init;
      id;
      config;
      studyjetConfig;
      prefix;
      cookieJar=new λba77258d9d21.cP;
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
      onTabChannelMessage=λacdc2a6c6eda => {
        this.rpc.recieve(λacdc2a6c6eda.data);
      };
      onCookieSyncMessage=λacdc2a6c6eda => {
        let λe8a7d4c872e5 = "\x6f\x62\x6a\x65\x63\x74" == typeof λacdc2a6c6eda.data && null !== λacdc2a6c6eda.data ? λacdc2a6c6eda.data.updatedAt : void 0;
        "\x6e\x75\x6d\x62\x65\x72" != typeof λe8a7d4c872e5 || λe8a7d4c872e5 <= this.cookieUpdatedAt || (this.cookieSyncDirty = !0, 
        this.loadSavedCookies());
      };
      async loadStudyJetWasm() {
        if (this.wasmAlreadyFetched) return;
        let λacdc2a6c6eda = await fetch(this.config.wasmPath);
        (0, λba77258d9d21.ht)(await λacdc2a6c6eda.arrayBuffer()), this.wasmAlreadyFetched = !0;
      }
      methods={
        ready: async () => {
          this.readyResolve(), setTimeout(() => {
            this.guardServiceWorkerRevive = !1;
          }, 5e3);
        },
        request: async λacdc2a6c6eda => {
          let λe8a7d4c872e5 = new URL(λacdc2a6c6eda.rawUrl).pathname, λb93cf59a67f6 = this.frames.find(λacdc2a6c6eda => λe8a7d4c872e5.startsWith(λacdc2a6c6eda.prefix));
          if (!λb93cf59a67f6) throw Error("\x4e\x6f\x20\x66\x72\x61\x6d\x65\x20\x66\x6f\x75\x6e\x64\x20\x66\x6f\x72\x20\x72\x65\x71\x75\x65\x73\x74");
          try {
            if (await this.loadSavedCookies(), λe8a7d4c872e5 === λb93cf59a67f6.prefix + this.config.virtualWasmPath) {
              if (!this.wasmPayload) {
                let λacdc2a6c6eda = await fetch(this.config.wasmPath), λe8a7d4c872e5 = await λacdc2a6c6eda.arrayBuffer(), λb93cf59a67f6 = btoa(new Uint8Array(λe8a7d4c872e5).reduce((λacdc2a6c6eda, λe8a7d4c872e5) => (λacdc2a6c6eda.push(String.fromCharCode(λe8a7d4c872e5)), 
                λacdc2a6c6eda), []).join(""));
                this.wasmPayload = `\x73\x65\x6c\x66\x2e\x57\x41\x53\x4d\x20\x3d\x20\x27${λb93cf59a67f6}\x27\x3b`;
              }
              return [ {
                body: this.wasmPayload,
                status: 200,
                statusText: "\x4f\x4b",
                headers: [ [ "\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65", "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x61\x76\x61\x73\x63\x72\x69\x70\x74" ] ]
              }, [] ];
            }
            let λd45989f6244c = λba77258d9d21.uh.fromRawHeaders(λacdc2a6c6eda.initialHeaders), λbb8548d294ac = await λb93cf59a67f6.fetchHandler.handleFetch({
              initialHeaders: λd45989f6244c,
              rawClientUrl: λacdc2a6c6eda.rawClientUrl ? new URL(λacdc2a6c6eda.rawClientUrl) : void 0,
              rawUrl: new URL(λacdc2a6c6eda.rawUrl),
              rawReferrer: λacdc2a6c6eda.rawReferrer,
              rawDestination: λacdc2a6c6eda.destination,
              method: λacdc2a6c6eda.method,
              mode: λacdc2a6c6eda.mode,
              referrer: λacdc2a6c6eda.referrer,
              body: λacdc2a6c6eda.body,
              cache: λacdc2a6c6eda.cache,
              clientId: λacdc2a6c6eda.clientId
            });
            return [ {
              body: λbb8548d294ac.body,
              status: λbb8548d294ac.status,
              statusText: λbb8548d294ac.statusText,
              headers: λbb8548d294ac.headers.toRawHeaders()
            }, λbb8548d294ac.body instanceof ReadableStream || λbb8548d294ac.body instanceof ArrayBuffer ? [ λbb8548d294ac.body ] : [] ];
          } catch (λe8a7d4c872e5) {
            let λd45989f6244c = {
              setResponse: void 0,
              suppressError: !1
            };
            if (await λba77258d9d21.Cx.dispatch(λb93cf59a67f6.hooks.error.request, {
              rawrequest: λacdc2a6c6eda,
              error: λe8a7d4c872e5
            }, λd45989f6244c), λd45989f6244c.suppressError || console.error("\x45\x72\x72\x6f\x72\x20\x69\x6e\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x72\x65\x71\x75\x65\x73\x74\x20\x68\x61\x6e\x64\x6c\x65\x72\x3a", λe8a7d4c872e5), 
            λd45989f6244c.setResponse) return [ λd45989f6244c.setResponse, [] ];
            throw λe8a7d4c872e5;
          }
        },
        initRemoteTransport: async λe8a7d4c872e5 => {
          let λb93cf59a67f6 = new λacdc2a6c6eda.C({
            request: async ({remote: λacdc2a6c6eda, method: λe8a7d4c872e5, body: λb93cf59a67f6, headers: λd45989f6244c}) => {
              let λba77258d9d21 = await this.transport.request(new URL(λacdc2a6c6eda), λe8a7d4c872e5, λb93cf59a67f6, λd45989f6244c, void 0);
              return [ λba77258d9d21, [ λba77258d9d21.body ] ];
            },
            sendSetCookie: async ({cookies: λacdc2a6c6eda, options: λe8a7d4c872e5}) => {
              await this.loadSavedCookies(!0), λe8a7d4c872e5?.clear && this.cookieJar.clear(), 
              this.applyCookieSyncEntries(λacdc2a6c6eda), await this.persistCookies(), await this.propagateCookieSync(λacdc2a6c6eda, λe8a7d4c872e5);
            },
            connect: async ({url: λacdc2a6c6eda, protocols: λe8a7d4c872e5, requestHeaders: λb93cf59a67f6, port: λd45989f6244c}) => {
              let λba77258d9d21, λbb8548d294ac = new Promise(λacdc2a6c6eda => λba77258d9d21 = λacdc2a6c6eda), [λb9b86485a109, λb0b4993f5887] = this.transport.connect(new URL(λacdc2a6c6eda), λe8a7d4c872e5, λb93cf59a67f6, (λacdc2a6c6eda, λe8a7d4c872e5) => {
                λba77258d9d21({
                  result: "\x73\x75\x63\x63\x65\x73\x73",
                  protocol: λacdc2a6c6eda,
                  extensions: λe8a7d4c872e5
                });
              }, λacdc2a6c6eda => {
                λd45989f6244c.postMessage({
                  type: "\x64\x61\x74\x61",
                  data: λacdc2a6c6eda
                }, λacdc2a6c6eda instanceof ArrayBuffer ? [ λacdc2a6c6eda ] : []);
              }, (λacdc2a6c6eda, λe8a7d4c872e5) => {
                λd45989f6244c.postMessage({
                  type: "\x63\x6c\x6f\x73\x65",
                  code: λacdc2a6c6eda,
                  reason: λe8a7d4c872e5
                });
              }, λacdc2a6c6eda => {
                λba77258d9d21({
                  result: "\x66\x61\x69\x6c\x75\x72\x65",
                  error: λacdc2a6c6eda
                });
              });
              return λd45989f6244c.onmessageerror = λacdc2a6c6eda => {
                console.error("\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x6f\x72\x74\x20\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λacdc2a6c6eda);
              }, λd45989f6244c.onmessage = ({data: λacdc2a6c6eda}) => {
                "\x64\x61\x74\x61" === λacdc2a6c6eda.type ? λb9b86485a109(λacdc2a6c6eda.data) : "\x63\x6c\x6f\x73\x65" === λacdc2a6c6eda.type && λb0b4993f5887(λacdc2a6c6eda.code, λacdc2a6c6eda.reason);
              }, [ await λbb8548d294ac, [] ];
            }
          }, "\x74\x72\x61\x6e\x73\x70\x6f\x72\x74", (λacdc2a6c6eda, λb93cf59a67f6) => λe8a7d4c872e5.postMessage(λacdc2a6c6eda, λb93cf59a67f6));
          λe8a7d4c872e5.onmessageerror = λacdc2a6c6eda => {
            console.error("\x54\x72\x61\x6e\x73\x70\x6f\x72\x74\x20\x70\x6f\x72\x74\x20\x6d\x65\x73\x73\x61\x67\x65\x65\x72\x72\x6f\x72\x20\x28\x74\x68\x69\x73\x20\x73\x68\x6f\x75\x6c\x64\x20\x6e\x65\x76\x65\x72\x20\x68\x61\x70\x70\x65\x6e\x21\x29", λacdc2a6c6eda);
          }, λe8a7d4c872e5.onmessage = λacdc2a6c6eda => {
            λb93cf59a67f6.recieve(λacdc2a6c6eda.data);
          }, λb93cf59a67f6.call("\x72\x65\x61\x64\x79", void 0, []);
        }
      };
      constructor(λe8a7d4c872e5) {
        this.init = λe8a7d4c872e5, (0, λb9b86485a109.O)(), this.id = b(), this.config = λe97b977629af(λb0b4993f5887, λe8a7d4c872e5.config || {}), 
        this.studyjetConfig = λe97b977629af(λ33d008e745a6, λba77258d9d21.sb), this.studyjetConfig = λe97b977629af(this.studyjetConfig, λe8a7d4c872e5.studyjetConfig || {}), 
        this.prefix = this.config.prefix + this.id + "\x2f", this.serviceWorkerController = λe8a7d4c872e5.serviceworker, 
        this.ready = Promise.all([ new Promise(λacdc2a6c6eda => {
          this.readyResolve = λacdc2a6c6eda;
        }), this.loadStudyJetWasm(), this.loadSavedCookies(!0) ]).then(() => void 0), this.rpc = new λacdc2a6c6eda.C(this.methods, "\x74\x61\x62\x63\x68\x61\x6e\x6e\x65\x6c\x2d" + this.id, (λacdc2a6c6eda, λe8a7d4c872e5) => {
          if (!this.port) throw Error("\x50\x6f\x72\x74\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64");
          this.port.postMessage(λacdc2a6c6eda, λe8a7d4c872e5);
        }), this.transport = λe8a7d4c872e5.transport, this.cookieSyncChannel.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", this.onCookieSyncMessage), 
        this.setupMessagePort(), navigator.serviceWorker.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", λacdc2a6c6eda => {
          if (λacdc2a6c6eda.data?.$controller$setCookie && "\x6f\x62\x6a\x65\x63\x74" == typeof λacdc2a6c6eda.data.$controller$setCookie) {
            let λe8a7d4c872e5 = λacdc2a6c6eda.data.$controller$setCookie;
            if (λe8a7d4c872e5.controllerId && λe8a7d4c872e5.controllerId !== this.id) return;
            λe8a7d4c872e5.options?.clear && this.cookieJar.clear(), this.applyCookieSyncEntries(λe8a7d4c872e5.cookies), 
            "\x73\x74\x72\x69\x6e\x67" == typeof λe8a7d4c872e5.id && this.serviceWorkerController.postMessage({
              $sw$setCookieDone: {
                id: λe8a7d4c872e5.id
              }
            });
            return;
          }
          if (λacdc2a6c6eda.data.$controller$swrevive) {
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
        let λacdc2a6c6eda = new MessageChannel;
        this.port = λacdc2a6c6eda.port1, this.port.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", this.onTabChannelMessage), 
        this.port.start(), this.serviceWorkerController.postMessage({
          $controller$init: {
            prefix: this.prefix,
            id: this.id
          }
        }, [ λacdc2a6c6eda.port2 ]);
      }
      applyCookieSyncEntries(λacdc2a6c6eda) {
        if (Array.isArray(λacdc2a6c6eda)) for (let λe8a7d4c872e5 of λacdc2a6c6eda) "\x73\x74\x72\x69\x6e\x67" == typeof λe8a7d4c872e5?.url && "\x73\x74\x72\x69\x6e\x67" == typeof λe8a7d4c872e5.cookie && this.cookieJar.setCookies(λe8a7d4c872e5.cookie, new URL(λe8a7d4c872e5.url));
      }
      async propagateCookieSync(λacdc2a6c6eda, λe8a7d4c872e5 = {}) {
        this.port && await this.rpc.call("\x73\x65\x6e\x64\x53\x65\x74\x43\x6f\x6f\x6b\x69\x65", {
          cookies: λacdc2a6c6eda,
          options: λe8a7d4c872e5
        });
      }
      async loadSavedCookies(λacdc2a6c6eda = !1) {
        if (λacdc2a6c6eda || this.cookieSyncDirty) return this.cookieSyncPromise || (this.cookieSyncPromise = (async () => {
          let λacdc2a6c6eda = await w();
          λacdc2a6c6eda && λacdc2a6c6eda.updatedAt > this.cookieUpdatedAt && (this.cookieJar.load(λacdc2a6c6eda.cookies), 
          this.cookieUpdatedAt = λacdc2a6c6eda.updatedAt), this.cookieSyncDirty = !1;
        })().finally(() => {
          this.cookieSyncPromise = null;
        })), this.cookieSyncPromise;
      }
      async persistCookies() {
        let λacdc2a6c6eda = await k(this.cookieJar.dump(), this.cookieUpdatedAt);
        λacdc2a6c6eda <= this.cookieUpdatedAt || (this.cookieUpdatedAt = λacdc2a6c6eda, 
        this.cookieSyncDirty = !1, this.cookieSyncChannel.postMessage({
          updatedAt: λacdc2a6c6eda
        }));
      }
      setTransport(λacdc2a6c6eda) {
        for (let λe8a7d4c872e5 of (this.transport = λacdc2a6c6eda, this.frames)) λe8a7d4c872e5.controller.transport = λacdc2a6c6eda, 
        λe8a7d4c872e5.fetchHandler.client.transport = λacdc2a6c6eda;
      }
      createFrame(λacdc2a6c6eda, λe8a7d4c872e5 = {}) {
        if (!this.ready) throw Error("\x43\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x69\x73\x20\x6e\x6f\x74\x20\x72\x65\x61\x64\x79\x21\x20\x54\x72\x79\x20\x61\x77\x61\x69\x74\x69\x6e\x67\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2e\x77\x61\x69\x74\x28\x29");
        let λb93cf59a67f6 = new v(this, λacdc2a6c6eda ??= document.createElement("\x69\x66\x72\x61\x6d\x65"), λe8a7d4c872e5);
        return this.frames.push(λb93cf59a67f6), λb93cf59a67f6;
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
            \u{67}\u{65}\u{74}\u{49}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{63}\u{72}\u{69}\u{70}\u{74}\u{73}: function e(λacdc2a6c6eda, λe8a7d4c872e5, λb93cf59a67f6, λd45989f6244c, λba77258d9d21, λbb8548d294ac) {
              return (λb9b86485a109, λb0b4993f5887, λ33d008e745a6, λ77e42d55362c) => {
                var λ4f53975f40a7;
                return [ λ77e42d55362c(λacdc2a6c6eda.studyjetPath), λ77e42d55362c(λb93cf59a67f6.href + λacdc2a6c6eda.virtualWasmPath), λ77e42d55362c(λacdc2a6c6eda.\u{69}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{50}\u{61}\u{74}\u{68}), λ77e42d55362c("data:text/javascript;charset=utf-8;base64," + (λ4f53975f40a7 = `\x0a\x09\x09\x09\x09\x09\x64\x6f\x63\x75\x6d\x65\x6e\x74\x2e\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63\x74\x6f\x72\x41\x6c\x6c\x28\x22\x73\x63\x72\x69\x70\x74\x5b\x73\x74\x75\x64\x79\x6a\x65\x74\x2d\x69\x6e\x6a\x65\x63\x74\x65\x64\x5d\x22\x29\x2e\x66\x6f\x72\x45\x61\x63\x68\x28\x73\x63\x72\x69\x70\x74\x20\x3d\x3e\x20\x73\x63\x72\x69\x70\x74\x2e\x72\x65\x6d\x6f\x76\x65\x28\x29\x29\x3b\x0a\x09\x09\x09\x09\x09\x24\x73\x74\x75\x64\x79\x6a\x65\x74\x43\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x2e\x6c\x6f\x61\x64\x28\x7b\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x66\x69\x67\x3a\x20${JSON.stringify(λacdc2a6c6eda)}\x2c\x0a\x09\x09\x09\x09\x09\x09\x73\x6a\x63\x6f\x6e\x66\x69\x67\x3a\x20${JSON.stringify(λe8a7d4c872e5)}\x2c\x0a\x09\x09\x09\x09\x09\x09\x70\x72\x65\x66\x69\x78\x3a\x20\x6e\x65\x77\x20\x55\x52\x4c\x28\x22${λb93cf59a67f6.href}\x22\x29\x2c\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6f\x6b\x69\x65\x73\x3a\x20${JSON.stringify(λd45989f6244c.dump())}\x2c\x0a\x09\x09\x09\x09\x09\x09\x79\x69\x65\x6c\x64\x47\x65\x74\x49\x6e\x6a\x65\x63\x74\x53\x63\x72\x69\x70\x74\x73\x3a\x20${e.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x45\x6e\x63\x6f\x64\x65\x3a\x20${λba77258d9d21.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x44\x65\x63\x6f\x64\x65\x3a\x20${λbb8548d294ac.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x69\x6e\x69\x74\x48\x65\x61\x64\x65\x72\x73\x3a\x20${JSON.stringify(λ33d008e745a6.headers ?? [])}\x2c\x0a\x09\x09\x09\x09\x09\x09\x68\x69\x73\x74\x6f\x72\x79\x3a\x20${JSON.stringify(λ33d008e745a6.history ?? [])}\x2c\x0a\x09\x09\x09\x09\x09\x7d\x29\x0a\x09\x09\x09\x09`, 
                btoa((new TextEncoder).encode(λ4f53975f40a7).reduce((λacdc2a6c6eda, λe8a7d4c872e5) => (λacdc2a6c6eda.push(String.fromCharCode(λe8a7d4c872e5)), 
                λacdc2a6c6eda), []).join("")))) ];
              };
            }(this.controller.config, this.controller.studyjetConfig, new URL(this.prefix, location.href), this.controller.cookieJar, this.controller.config.codec.encode, this.controller.config.codec.decode),
            \u{67}\u{65}\u{74}\u{57}\u{6f}\u{72}\u{6b}\u{65}\u{72}\u{49}\u{6e}\u{6a}\u{65}\u{63}\u{74}\u{53}\u{63}\u{72}\u{69}\u{70}\u{74}\u{73}: (λacdc2a6c6eda, λe8a7d4c872e5, λb93cf59a67f6) => {
              var λd45989f6244c;
              let λba77258d9d21 = "";
              return λba77258d9d21 += λb93cf59a67f6(this.controller.config.studyjetPath), λba77258d9d21 += λb93cf59a67f6(this.prefix + this.controller.config.virtualWasmPath), 
              λba77258d9d21 += λb93cf59a67f6("data:text/javascript;charset=utf-8;base64," + (λd45989f6244c = `\x0a\x09\x09\x09\x09\x09\x28\x28\x29\x3d\x3e\x7b\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x7b\x20\x53\x74\x75\x64\x79\x4a\x65\x74\x43\x6c\x69\x65\x6e\x74\x2c\x20\x43\x6f\x6f\x6b\x69\x65\x4a\x61\x72\x2c\x20\x73\x65\x74\x57\x61\x73\x6d\x20\x7d\x20\x3d\x20\x24\x73\x74\x75\x64\x79\x6a\x65\x74\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x73\x65\x74\x57\x61\x73\x6d\x28\x55\x69\x6e\x74\x38\x41\x72\x72\x61\x79\x2e\x66\x72\x6f\x6d\x28\x61\x74\x6f\x62\x28\x73\x65\x6c\x66\x2e\x57\x41\x53\x4d\x29\x2c\x20\x28\x63\x29\x20\x3d\x3e\x20\x63\x2e\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74\x28\x30\x29\x29\x29\x3b\x0a\x09\x09\x09\x09\x09\x09\x64\x65\x6c\x65\x74\x65\x20\x73\x65\x6c\x66\x2e\x57\x41\x53\x4d\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x73\x6a\x63\x6f\x6e\x66\x69\x67\x20\x3d\x20${JSON.stringify(this.controller.studyjetConfig)}\x3b\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x70\x72\x65\x66\x69\x78\x20\x3d\x20\x6e\x65\x77\x20\x55\x52\x4c\x28\x22${this.prefix}\x22\x2c\x20\x6c\x6f\x63\x61\x74\x69\x6f\x6e\x2e\x68\x72\x65\x66\x29\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x63\x6f\x6e\x74\x65\x78\x74\x20\x3d\x20\x7b\x0a\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x66\x69\x67\x3a\x20\x73\x6a\x63\x6f\x6e\x66\x69\x67\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x70\x72\x65\x66\x69\x78\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x69\x6e\x74\x65\x72\x66\x61\x63\x65\x3a\x20\x7b\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x45\x6e\x63\x6f\x64\x65\x3a\x20${this.controller.config.codec.encode.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x64\x65\x63\x44\x65\x63\x6f\x64\x65\x3a\x20${this.controller.config.codec.decode.toString()}\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x7d\x2c\x0a\x09\x09\x09\x09\x09\x09\x7d\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x73\x74\x20\x63\x6c\x69\x65\x6e\x74\x20\x3d\x20\x6e\x65\x77\x20\x53\x74\x75\x64\x79\x4a\x65\x74\x43\x6c\x69\x65\x6e\x74\x28\x67\x6c\x6f\x62\x61\x6c\x54\x68\x69\x73\x2c\x20\x7b\x0a\x09\x09\x09\x09\x09\x09\x09\x63\x6f\x6e\x74\x65\x78\x74\x2c\x0a\x09\x09\x09\x09\x09\x09\x09\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x3a\x20\x6e\x75\x6c\x6c\x2c\x0a\x09\x09\x09\x09\x09\x09\x7d\x29\x3b\x0a\x0a\x09\x09\x09\x09\x09\x09\x63\x6c\x69\x65\x6e\x74\x2e\x68\x6f\x6f\x6b\x28\x29\x3b\x0a\x09\x09\x09\x09\x09\x7d\x29\x28\x29\x3b\x0a\x09\x09\x09\x09\x09`, 
              btoa((new TextEncoder).encode(λd45989f6244c).reduce((λacdc2a6c6eda, λe8a7d4c872e5) => (λacdc2a6c6eda.push(String.fromCharCode(λe8a7d4c872e5)), 
              λacdc2a6c6eda), []).join(""))));
            },
            codecEncode: this.controller.config.codec.encode,
            codecDecode: this.controller.config.codec.decode
          }
        };
      }
      plugins=[];
      constructor(λacdc2a6c6eda, λb93cf59a67f6, λd45989f6244c = {}) {
        for (const λb9b86485a109 of (this.controller = λacdc2a6c6eda, this.element = λb93cf59a67f6, 
        this.options = λd45989f6244c, this.id = b(), this.prefix = this.controller.prefix + this.id + "\x2f", 
        this.fetchHandler = new λba77258d9d21.mK({
          crossOriginIsolated: self.crossOriginIsolated,
          context: this.context,
          transport: λacdc2a6c6eda.transport,
          async sendSetCookie(λe8a7d4c872e5, λb93cf59a67f6) {
            await λacdc2a6c6eda.persistCookies(), await λacdc2a6c6eda.propagateCookieSync(λe8a7d4c872e5.map(({url: λacdc2a6c6eda, cookie: λe8a7d4c872e5}) => ({
              url: λacdc2a6c6eda.href,
              cookie: λe8a7d4c872e5
            })), λb93cf59a67f6);
          },
          fetchBlobUrl: async λacdc2a6c6eda => λe8a7d4c872e5.Sr.fromNativeResponse(await fetch(λacdc2a6c6eda)),
          fetchDataUrl: async λacdc2a6c6eda => λe8a7d4c872e5.Sr.fromNativeResponse(await fetch(λacdc2a6c6eda))
        }), this.hooks = {
          fetch: this.fetchHandler.hooks.fetch,
          init: λba77258d9d21.Cx.create(),
          error: λba77258d9d21.Cx.create()
        }, λb93cf59a67f6[λbb8548d294ac.I] = this, this.plugins = λd45989f6244c.plugins ?? [], 
        this.plugins)) {
          for (const λacdc2a6c6eda of λb9b86485a109.dependencies) if (!this.plugins.find(λe8a7d4c872e5 => λe8a7d4c872e5.name === λacdc2a6c6eda)) throw Error(`\x44\x65\x70\x65\x6e\x64\x65\x6e\x63\x79\x20${λacdc2a6c6eda}\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x66\x6f\x72\x20\x70\x6c\x75\x67\x69\x6e\x20${λb9b86485a109.name}`);
          λb9b86485a109.install(this);
        }
      }
      getPlugin(λacdc2a6c6eda) {
        let λe8a7d4c872e5 = this.plugins.find(λe8a7d4c872e5 => λe8a7d4c872e5.name === λacdc2a6c6eda);
        if (!λe8a7d4c872e5) throw Error(`\x50\x6c\x75\x67\x69\x6e\x20${λacdc2a6c6eda}\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64`);
        return λe8a7d4c872e5;
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
      go(λacdc2a6c6eda) {
        let λe8a7d4c872e5 = (0, λba77258d9d21.Oy)(λacdc2a6c6eda, this.context, {
          origin: new URL(location.href),
          base: new URL(location.href)
        });
        this.element.src = λe8a7d4c872e5;
      }
    }
  })(), $studyjetController = λb93cf59a67f6;
})();
