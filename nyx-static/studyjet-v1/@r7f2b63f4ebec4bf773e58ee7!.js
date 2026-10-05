(() => {
  var _38c7d5d2fcfc = {
    4322: function(_38c7d5d2fcfc) {
      var _b6f2bd98c862 = {
        decodeValues: !0,
        map: !1,
        silent: !1
      };
      function r(_38c7d5d2fcfc) {
        return "string" == typeof _38c7d5d2fcfc && !!_38c7d5d2fcfc.trim();
      }
      function n(_38c7d5d2fcfc, _1bd41f000df9) {
        var _313eac335fae, _180466bcc607, _7f05829ad9f4, _93a414b82620, _3ee9590bcdd1 = _38c7d5d2fcfc.split(";").filter(r), _bf69fdf532e4 = (_313eac335fae = _3ee9590bcdd1.shift(), 
        _180466bcc607 = "", _7f05829ad9f4 = "", (_93a414b82620 = _313eac335fae.split("=")).length > 1 ? (_180466bcc607 = _93a414b82620.shift(), 
        _7f05829ad9f4 = _93a414b82620.join("=")) : _7f05829ad9f4 = _313eac335fae, {
          name: _180466bcc607,
          value: _7f05829ad9f4
        }), _ef3c27203dbf = _bf69fdf532e4.name, _c20fa90a80b7 = _bf69fdf532e4.value;
        _1bd41f000df9 = _1bd41f000df9 ? Object.assign({}, _b6f2bd98c862, _1bd41f000df9) : _b6f2bd98c862;
        try {
          _c20fa90a80b7 = _1bd41f000df9.decodeValues ? decodeURIComponent(_c20fa90a80b7) : _c20fa90a80b7;
        } catch (_38c7d5d2fcfc) {
          console.error("set-cookie-parser encountered an error while decoding a cookie with value '" + _c20fa90a80b7 + "'. Set options.decodeValues to false to disable this feature.", _38c7d5d2fcfc);
        }
        var _eb5e33ca1634 = {
          name: _ef3c27203dbf,
          value: _c20fa90a80b7
        };
        return _3ee9590bcdd1.forEach(function(_38c7d5d2fcfc) {
          var _b6f2bd98c862 = _38c7d5d2fcfc.split("="), _1bd41f000df9 = _b6f2bd98c862.shift().trimLeft().toLowerCase(), _313eac335fae = _b6f2bd98c862.join("=");
          "expires" === _1bd41f000df9 ? _eb5e33ca1634.expires = new Date(_313eac335fae) : "max-age" === _1bd41f000df9 ? _eb5e33ca1634.maxAge = parseInt(_313eac335fae, 10) : "secure" === _1bd41f000df9 ? _eb5e33ca1634.secure = !0 : "httponly" === _1bd41f000df9 ? _eb5e33ca1634.httpOnly = !0 : "samesite" === _1bd41f000df9 ? _eb5e33ca1634.sameSite = _313eac335fae : "partitioned" === _1bd41f000df9 ? _eb5e33ca1634.partitioned = !0 : _eb5e33ca1634[_1bd41f000df9] = _313eac335fae;
        }), _eb5e33ca1634;
      }
      function i(_38c7d5d2fcfc, _1bd41f000df9) {
        if (_1bd41f000df9 = _1bd41f000df9 ? Object.assign({}, _b6f2bd98c862, _1bd41f000df9) : _b6f2bd98c862, 
        !_38c7d5d2fcfc) if (!_1bd41f000df9.map) return []; else return {};
        if (_38c7d5d2fcfc.headers) if ("function" == typeof _38c7d5d2fcfc.headers.getSetCookie) _38c7d5d2fcfc = _38c7d5d2fcfc.headers.getSetCookie(); else if (_38c7d5d2fcfc.headers["set-cookie"]) _38c7d5d2fcfc = _38c7d5d2fcfc.headers["set-cookie"]; else {
          var _313eac335fae = _38c7d5d2fcfc.headers[Object.keys(_38c7d5d2fcfc.headers).find(function(_38c7d5d2fcfc) {
            return "set-cookie" === _38c7d5d2fcfc.toLowerCase();
          })];
          _313eac335fae || !_38c7d5d2fcfc.headers.cookie || _1bd41f000df9.silent || console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."), 
          _38c7d5d2fcfc = _313eac335fae;
        }
        return (Array.isArray(_38c7d5d2fcfc) || (_38c7d5d2fcfc = [ _38c7d5d2fcfc ]), _1bd41f000df9.map) ? _38c7d5d2fcfc.filter(r).reduce(function(_38c7d5d2fcfc, _b6f2bd98c862) {
          var _313eac335fae = n(_b6f2bd98c862, _1bd41f000df9);
          return _38c7d5d2fcfc[_313eac335fae.name] = _313eac335fae, _38c7d5d2fcfc;
        }, {}) : _38c7d5d2fcfc.filter(r).map(function(_38c7d5d2fcfc) {
          return n(_38c7d5d2fcfc, _1bd41f000df9);
        });
      }
      _38c7d5d2fcfc.exports = i, _38c7d5d2fcfc.exports.parse = i, _38c7d5d2fcfc.exports.parseString = n, 
      _38c7d5d2fcfc.exports.splitCookiesString = function(_38c7d5d2fcfc) {
        if (Array.isArray(_38c7d5d2fcfc)) return _38c7d5d2fcfc;
        if ("string" != typeof _38c7d5d2fcfc) return [];
        var _b6f2bd98c862, _1bd41f000df9, _313eac335fae, _180466bcc607, _7f05829ad9f4, _93a414b82620 = [], _3ee9590bcdd1 = 0;
        function l() {
          for (;_3ee9590bcdd1 < _38c7d5d2fcfc.length && /\s/.test(_38c7d5d2fcfc.charAt(_3ee9590bcdd1)); ) _3ee9590bcdd1 += 1;
          return _3ee9590bcdd1 < _38c7d5d2fcfc.length;
        }
        for (;_3ee9590bcdd1 < _38c7d5d2fcfc.length; ) {
          for (_b6f2bd98c862 = _3ee9590bcdd1, _7f05829ad9f4 = !1; l(); ) if ("," === (_1bd41f000df9 = _38c7d5d2fcfc.charAt(_3ee9590bcdd1))) {
            for (_313eac335fae = _3ee9590bcdd1, _3ee9590bcdd1 += 1, l(), _180466bcc607 = _3ee9590bcdd1; _3ee9590bcdd1 < _38c7d5d2fcfc.length && "=" !== (_1bd41f000df9 = _38c7d5d2fcfc.charAt(_3ee9590bcdd1)) && ";" !== _1bd41f000df9 && "," !== _1bd41f000df9; ) _3ee9590bcdd1 += 1;
            _3ee9590bcdd1 < _38c7d5d2fcfc.length && "=" === _38c7d5d2fcfc.charAt(_3ee9590bcdd1) ? (_7f05829ad9f4 = !0, 
            _3ee9590bcdd1 = _180466bcc607, _93a414b82620.push(_38c7d5d2fcfc.substring(_b6f2bd98c862, _313eac335fae)), 
            _b6f2bd98c862 = _3ee9590bcdd1) : _3ee9590bcdd1 = _313eac335fae + 1;
          } else _3ee9590bcdd1 += 1;
          (!_7f05829ad9f4 || _3ee9590bcdd1 >= _38c7d5d2fcfc.length) && _93a414b82620.push(_38c7d5d2fcfc.substring(_b6f2bd98c862, _38c7d5d2fcfc.length));
        }
        return _93a414b82620;
      };
    },
    7302: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      var _313eac335fae = {
        "./": "3255",
        "./client": "336",
        "./client.ts": "336",
        "./dom/attr": "1077",
        "./dom/attr.ts": "1077",
        "./dom/beacon": "7430",
        "./dom/beacon.ts": "7430",
        "./dom/cookie": "9116",
        "./dom/cookie.ts": "9116",
        "./dom/css": "6447",
        "./dom/css.ts": "6447",
        "./dom/document": "5351",
        "./dom/document.ts": "5351",
        "./dom/element": "7828",
        "./dom/element.ts": "7828",
        "./dom/fontface": "5426",
        "./dom/fontface.ts": "5426",
        "./dom/fragments": "5465",
        "./dom/fragments.ts": "5465",
        "./dom/history": "9804",
        "./dom/history.ts": "9804",
        "./dom/open": "7758",
        "./dom/open.ts": "7758",
        "./dom/origin": "6012",
        "./dom/origin.ts": "6012",
        "./dom/performance": "6286",
        "./dom/performance.ts": "6286",
        "./dom/protocol": "1974",
        "./dom/protocol.ts": "1974",
        "./dom/serviceworker": "9201",
        "./dom/serviceworker.ts": "9201",
        "./dom/storage": "5289",
        "./dom/storage.ts": "5289",
        "./entry": "1323",
        "./entry.ts": "1323",
        "./events": "1862",
        "./events.ts": "1862",
        "./helpers": "94",
        "./helpers.ts": "94",
        "./index": "3255",
        "./index.ts": "3255",
        "./location": "3696",
        "./location.ts": "3696",
        "./shared/antiantidebugger": "8382",
        "./shared/antiantidebugger.ts": "8382",
        "./shared/blob": "4634",
        "./shared/blob.ts": "4634",
        "./shared/caches": "5026",
        "./shared/caches.ts": "5026",
        "./shared/chrome": "6627",
        "./shared/chrome.ts": "6627",
        "./shared/err": "582",
        "./shared/err.ts": "582",
        "./shared/error": "6143",
        "./shared/error.ts": "6143",
        "./shared/eval": "591",
        "./shared/eval.ts": "591",
        "./shared/event": "3481",
        "./shared/event.ts": "3481",
        "./shared/function": "249",
        "./shared/function.ts": "249",
        "./shared/import": "2468",
        "./shared/import.ts": "2468",
        "./shared/indexeddb": "4338",
        "./shared/indexeddb.ts": "4338",
        "./shared/opfs": "6593",
        "./shared/opfs.ts": "6593",
        "./shared/postmessage": "1320",
        "./shared/postmessage.ts": "1320",
        "./shared/realm": "1914",
        "./shared/realm.ts": "1914",
        "./shared/requests/eventsource": "9701",
        "./shared/requests/eventsource.ts": "9701",
        "./shared/requests/fetch": "6972",
        "./shared/requests/fetch.ts": "6972",
        "./shared/requests/websocket": "9931",
        "./shared/requests/websocket.ts": "9931",
        "./shared/requests/xmlhttprequest": "248",
        "./shared/requests/xmlhttprequest.ts": "248",
        "./shared/settimeout": "7418",
        "./shared/settimeout.ts": "7418",
        "./shared/sourcemaps": "7791",
        "./shared/sourcemaps.ts": "7791",
        "./shared/worker": "9399",
        "./shared/worker.ts": "9399",
        "./shared/wrap": "581",
        "./shared/wrap.ts": "581",
        "./singletonbox": "1229",
        "./singletonbox.ts": "1229",
        "./swruntime": "8409",
        "./swruntime.ts": "8409",
        "./worker/importScripts": "9353",
        "./worker/importScripts.ts": "9353"
      };
      function i(_38c7d5d2fcfc) {
        return _1bd41f000df9(a(_38c7d5d2fcfc));
      }
      function a(_38c7d5d2fcfc) {
        if (!_1bd41f000df9.o(_313eac335fae, _38c7d5d2fcfc)) {
          var _b6f2bd98c862 = Error("Cannot find module '" + _38c7d5d2fcfc + "'");
          throw _b6f2bd98c862.code = "MODULE_NOT_FOUND", _b6f2bd98c862;
        }
        return _313eac335fae[_38c7d5d2fcfc];
      }
      i.keys = function() {
        return Object.keys(_313eac335fae);
      }, i.resolve = a, _38c7d5d2fcfc.exports = i, i.id = 7302;
    },
    409: function(_38c7d5d2fcfc) {
      function t(_38c7d5d2fcfc) {
        var _b6f2bd98c862 = Error("Cannot find module '" + _38c7d5d2fcfc + "'");
        throw _b6f2bd98c862.code = "MODULE_NOT_FOUND", _b6f2bd98c862;
      }
      t.keys = () => [], t.resolve = t, t.id = 409, _38c7d5d2fcfc.exports = t;
    },
    336: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        StudyJetClient: () => g
      });
      var _313eac335fae = _1bd41f000df9(2794), _180466bcc607 = _1bd41f000df9(94), _7f05829ad9f4 = _1bd41f000df9(3696), _93a414b82620 = _1bd41f000df9(581), _3ee9590bcdd1 = _1bd41f000df9(1862), _bf69fdf532e4 = _1bd41f000df9(1472), _ef3c27203dbf = _1bd41f000df9(37), _c20fa90a80b7 = _1bd41f000df9(3831), _eb5e33ca1634 = _1bd41f000df9(1323), _8aa5e5cf048b = _1bd41f000df9(1229), _e25772762281 = _1bd41f000df9(4110), _6b23ce5f34cb = _1bd41f000df9(8665).A;
      class g {
        global;
        locationProxy;
        serviceWorker;
        bare;
        natives;
        descriptors;
        wrapfn;
        cookieStore=new _c20fa90a80b7.k;
        eventcallbacks=new Map;
        meta;
        box;
        constructor(_38c7d5d2fcfc) {
          if (this.global = _38c7d5d2fcfc, _313eac335fae.pX in _38c7d5d2fcfc) throw console.error("attempted to initialize a studyjet client, but one is already loaded - this is very bad"), 
          Error();
          if (_eb5e33ca1634.iswindow) {
            try {
              _313eac335fae.pX in _38c7d5d2fcfc.parent && (this.box = _38c7d5d2fcfc.parent[_313eac335fae.pX].box);
            } catch {}
            try {
              _313eac335fae.pX in _38c7d5d2fcfc.top && (this.box = _38c7d5d2fcfc.top[_313eac335fae.pX].box);
            } catch {}
            try {
              _38c7d5d2fcfc.opener && _313eac335fae.pX in _38c7d5d2fcfc.opener && (this.box = _38c7d5d2fcfc.opener[_313eac335fae.pX].box);
            } catch {}
            this.box || (_6b23ce5f34cb.warn("Creating SingletonBox"), this.box = new _8aa5e5cf048b.SingletonBox(this));
          } else this.box = new _8aa5e5cf048b.SingletonBox(this);
          this.box.registerClient(this, _38c7d5d2fcfc), _eb5e33ca1634.iswindow ? this.bare = new _e25772762281.Ay : this.bare = new _e25772762281.Ay(new Promise(_38c7d5d2fcfc => {
            addEventListener("message", ({data: _b6f2bd98c862}) => {
              "object" == typeof _b6f2bd98c862 && "$studyjet$type" in _b6f2bd98c862 && "baremuxinit" === _b6f2bd98c862.$studyjet$type && _38c7d5d2fcfc(_b6f2bd98c862.port);
            });
          })), this.serviceWorker = this.global.navigator.serviceWorker, _eb5e33ca1634.iswindow && (_38c7d5d2fcfc.document[_313eac335fae.pX] = this), 
          this.wrapfn = (0, _93a414b82620.createWrapFn)(this, _38c7d5d2fcfc), this.natives = {
            store: new Proxy({}, {
              get: (_38c7d5d2fcfc, _b6f2bd98c862) => {
                if (_b6f2bd98c862 in _38c7d5d2fcfc) return _38c7d5d2fcfc[_b6f2bd98c862];
                let _1bd41f000df9 = _b6f2bd98c862.split("."), _313eac335fae = _1bd41f000df9.pop(), _180466bcc607 = _1bd41f000df9.reduce((_38c7d5d2fcfc, _b6f2bd98c862) => _38c7d5d2fcfc?.[_b6f2bd98c862], this.global);
                if (!_180466bcc607) return;
                let _7f05829ad9f4 = Reflect.get(_180466bcc607, _313eac335fae);
                return _38c7d5d2fcfc[_b6f2bd98c862] = _7f05829ad9f4, _38c7d5d2fcfc[_b6f2bd98c862];
              }
            }),
            construct(_38c7d5d2fcfc, ..._b6f2bd98c862) {
              let _1bd41f000df9 = this.store[_38c7d5d2fcfc];
              return _1bd41f000df9 ? new _1bd41f000df9(..._b6f2bd98c862) : null;
            },
            call(_38c7d5d2fcfc, _b6f2bd98c862, ..._1bd41f000df9) {
              let _313eac335fae = this.store[_38c7d5d2fcfc];
              return _313eac335fae ? _313eac335fae.call(_b6f2bd98c862, ..._1bd41f000df9) : null;
            }
          }, this.descriptors = {
            store: new Proxy({}, {
              get: (_38c7d5d2fcfc, _1bd41f000df9) => {
                if (_1bd41f000df9 in _38c7d5d2fcfc) return _38c7d5d2fcfc[_1bd41f000df9];
                let _313eac335fae = _1bd41f000df9.split("."), _180466bcc607 = _313eac335fae.pop(), _7f05829ad9f4 = _313eac335fae.reduce((_38c7d5d2fcfc, _b6f2bd98c862) => _38c7d5d2fcfc?.[_b6f2bd98c862], this.global);
                if (!_7f05829ad9f4) return;
                let _93a414b82620 = _b6f2bd98c862.natives.call("Object.getOwnPropertyDescriptor", null, _7f05829ad9f4, _180466bcc607);
                return _38c7d5d2fcfc[_1bd41f000df9] = _93a414b82620, _38c7d5d2fcfc[_1bd41f000df9];
              }
            }),
            get(_38c7d5d2fcfc, _b6f2bd98c862) {
              let _1bd41f000df9 = this.store[_38c7d5d2fcfc];
              return _1bd41f000df9 ? _1bd41f000df9.get.call(_b6f2bd98c862) : null;
            },
            set(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
              let _313eac335fae = this.store[_38c7d5d2fcfc];
              if (!_313eac335fae) return null;
              _313eac335fae.set.call(_b6f2bd98c862, _1bd41f000df9);
            }
          };
          const _b6f2bd98c862 = this;
          this.meta = {
            get origin() {
              return _b6f2bd98c862.url;
            },
            get base() {
              if (_eb5e33ca1634.iswindow) {
                const _38c7d5d2fcfc = _b6f2bd98c862.natives.call("Document.prototype.querySelector", _b6f2bd98c862.global.document, "base");
                if (_38c7d5d2fcfc) {
                  let _1bd41f000df9 = _38c7d5d2fcfc.getAttribute("href");
                  if (!_1bd41f000df9) return _b6f2bd98c862.url;
                  const _313eac335fae = _1bd41f000df9.indexOf("#");
                  if (!(_1bd41f000df9 = _1bd41f000df9.substring(0, -1 === _313eac335fae ? void 0 : _313eac335fae))) return _b6f2bd98c862.url;
                  return new URL(_1bd41f000df9, _b6f2bd98c862.url.origin);
                }
              }
              return _b6f2bd98c862.url;
            },
            get topFrameName() {
              if (!_eb5e33ca1634.iswindow) throw Error("topFrameName was called from a worker?");
              let _38c7d5d2fcfc = _b6f2bd98c862.global;
              if (_38c7d5d2fcfc.parent.window == _38c7d5d2fcfc.window) return null;
              for (;_38c7d5d2fcfc.parent.window !== _38c7d5d2fcfc.window && _38c7d5d2fcfc.parent.window[_313eac335fae.pX]; ) _38c7d5d2fcfc = _38c7d5d2fcfc.parent.window;
              const _1bd41f000df9 = _38c7d5d2fcfc[_313eac335fae.pX].descriptors.get("window.frameElement", _38c7d5d2fcfc);
              if (!_1bd41f000df9) return null;
              if (!_1bd41f000df9.name) return console.error("YOU NEED TO USE `new StudyJetFrame()`! DIRECT IFRAMES WILL NOT WORK"), 
              null;
              return _1bd41f000df9.name;
            },
            get parentFrameName() {
              if (!_eb5e33ca1634.iswindow) throw Error("parentFrameName was called from a worker?");
              if (_b6f2bd98c862.global.parent.window == _b6f2bd98c862.global.window) return null;
              let _38c7d5d2fcfc = _b6f2bd98c862.global.parent.window;
              if (_38c7d5d2fcfc[_313eac335fae.pX]) {
                const _b6f2bd98c862 = _38c7d5d2fcfc[_313eac335fae.pX].descriptors.get("window.frameElement", _38c7d5d2fcfc);
                if (!_b6f2bd98c862) return null;
                if (!_b6f2bd98c862.name) return console.error("YOU NEED TO USE `new StudyJetFrame()`! DIRECT IFRAMES WILL NOT WORK"), 
                null;
                return _b6f2bd98c862.name;
              }
              {
                const _38c7d5d2fcfc = _b6f2bd98c862.descriptors.get("window.frameElement", _b6f2bd98c862.global);
                if (!_38c7d5d2fcfc.name) return console.error("YOU NEED TO USE `new StudyJetFrame()`! DIRECT IFRAMES WILL NOT WORK"), 
                null;
                return _38c7d5d2fcfc.name;
              }
            }
          }, this.locationProxy = (0, _7f05829ad9f4.createLocationProxy)(this, _38c7d5d2fcfc), 
          _38c7d5d2fcfc[_313eac335fae.pX] = this;
        }
        get frame() {
          if (!_eb5e33ca1634.iswindow) return null;
          let _38c7d5d2fcfc = this.descriptors.get("window.frameElement", this.global);
          if (!_38c7d5d2fcfc) return null;
          let _b6f2bd98c862 = _38c7d5d2fcfc[_313eac335fae.zr];
          if (!_b6f2bd98c862) {
            let _38c7d5d2fcfc = this.global.window;
            for (;_38c7d5d2fcfc.parent !== _38c7d5d2fcfc; ) {
              let _b6f2bd98c862 = _38c7d5d2fcfc[_313eac335fae.pX].descriptors.get("window.frameElement", _38c7d5d2fcfc);
              if (!_b6f2bd98c862) return null;
              if (_b6f2bd98c862 && _b6f2bd98c862[_313eac335fae.zr]) return _b6f2bd98c862[_313eac335fae.zr];
              _38c7d5d2fcfc = _38c7d5d2fcfc.parent.window;
            }
          }
          return _b6f2bd98c862;
        }
        get isSubframe() {
          if (!_eb5e33ca1634.iswindow) return !1;
          let _38c7d5d2fcfc = this.descriptors.get("window.frameElement", this.global);
          return !!_38c7d5d2fcfc && !_38c7d5d2fcfc[_313eac335fae.zr];
        }
        loadcookies(_38c7d5d2fcfc) {
          this.cookieStore.load(_38c7d5d2fcfc);
        }
        hook() {
          let _38c7d5d2fcfc = _1bd41f000df9(7302), _b6f2bd98c862 = [];
          for (let _1bd41f000df9 of _38c7d5d2fcfc.keys()) {
            let _313eac335fae = _38c7d5d2fcfc(_1bd41f000df9);
            _1bd41f000df9.endsWith(".ts") && (_1bd41f000df9.startsWith("./dom/") && "window" in this.global || _1bd41f000df9.startsWith("./worker/") && "WorkerGlobalScope" in this.global || _1bd41f000df9.startsWith("./shared/")) && _b6f2bd98c862.push(_313eac335fae);
          }
          for (let _38c7d5d2fcfc of (_b6f2bd98c862.sort((_38c7d5d2fcfc, _b6f2bd98c862) => (_38c7d5d2fcfc.order || 0) - (_b6f2bd98c862.order || 0)), 
          _b6f2bd98c862)) !_38c7d5d2fcfc.enabled || _38c7d5d2fcfc.enabled(this) ? _38c7d5d2fcfc.default(this, this.global) : _38c7d5d2fcfc.disabled && _38c7d5d2fcfc.disabled(this, this.global);
        }
        get url() {
          return new URL((0, _bf69fdf532e4.v2)(this.global.location.href));
        }
        set url(_38c7d5d2fcfc) {
          _38c7d5d2fcfc instanceof URL && (_38c7d5d2fcfc = _38c7d5d2fcfc.toString());
          let _b6f2bd98c862 = new _3ee9590bcdd1.NavigateEvent(_38c7d5d2fcfc);
          this.frame && this.frame.dispatchEvent(_b6f2bd98c862), _b6f2bd98c862.defaultPrevented || (this.global.location.href = (0, 
          _bf69fdf532e4.Oy)(_b6f2bd98c862.url, this.meta));
        }
        Proxy(_38c7d5d2fcfc, _b6f2bd98c862) {
          if (Array.isArray(_38c7d5d2fcfc)) {
            for (let _1bd41f000df9 of _38c7d5d2fcfc) this.Proxy(_1bd41f000df9, _b6f2bd98c862);
            return;
          }
          let _1bd41f000df9 = _38c7d5d2fcfc.split("."), _313eac335fae = _1bd41f000df9.pop(), _180466bcc607 = _1bd41f000df9.reduce((_38c7d5d2fcfc, _b6f2bd98c862) => _38c7d5d2fcfc?.[_b6f2bd98c862], this.global);
          if (_180466bcc607) {
            if (!(_38c7d5d2fcfc in this.natives.store)) {
              let _b6f2bd98c862 = Reflect.get(_180466bcc607, _313eac335fae);
              this.natives.store[_38c7d5d2fcfc] = _b6f2bd98c862;
            }
            this.RawProxy(_180466bcc607, _313eac335fae, _b6f2bd98c862);
          }
        }
        RawProxy(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
          if (!_38c7d5d2fcfc || !_b6f2bd98c862 || !Reflect.has(_38c7d5d2fcfc, _b6f2bd98c862)) return;
          let _313eac335fae = Reflect.get(_38c7d5d2fcfc, _b6f2bd98c862);
          delete _38c7d5d2fcfc[_b6f2bd98c862];
          let _7f05829ad9f4 = {};
          _1bd41f000df9.construct && (_7f05829ad9f4.construct = function(_38c7d5d2fcfc, _b6f2bd98c862, _313eac335fae) {
            let _180466bcc607, _7f05829ad9f4 = !1, _93a414b82620 = {
              fn: _38c7d5d2fcfc,
              this: null,
              args: _b6f2bd98c862,
              newTarget: _313eac335fae,
              return: _38c7d5d2fcfc => {
                _7f05829ad9f4 = !0, _180466bcc607 = _38c7d5d2fcfc;
              },
              call: () => (_7f05829ad9f4 = !0, _180466bcc607 = Reflect.construct(_93a414b82620.fn, _93a414b82620.args, _93a414b82620.newTarget))
            };
            return (_1bd41f000df9.construct(_93a414b82620), _7f05829ad9f4) ? _180466bcc607 : Reflect.construct(_93a414b82620.fn, _93a414b82620.args, _93a414b82620.newTarget);
          }), _1bd41f000df9.apply && (_7f05829ad9f4.apply = (_38c7d5d2fcfc, _b6f2bd98c862, _313eac335fae) => {
            let _180466bcc607, _7f05829ad9f4 = !1, _93a414b82620 = {
              fn: _38c7d5d2fcfc,
              this: _b6f2bd98c862,
              args: _313eac335fae,
              newTarget: null,
              return: _38c7d5d2fcfc => {
                _7f05829ad9f4 = !0, _180466bcc607 = _38c7d5d2fcfc;
              },
              call: () => (_7f05829ad9f4 = !0, _180466bcc607 = Reflect.apply(_93a414b82620.fn, _93a414b82620.this, _93a414b82620.args))
            }, _3ee9590bcdd1 = Error.prepareStackTrace;
            Error.prepareStackTrace = function(_38c7d5d2fcfc, _b6f2bd98c862) {
              if (_b6f2bd98c862[0].getFileName() && !_b6f2bd98c862[0].getFileName().startsWith(location.origin + _ef3c27203dbf.$W.prefix)) return {
                stack: _38c7d5d2fcfc.stack
              };
            };
            try {
              _1bd41f000df9.apply(_93a414b82620);
            } catch (_38c7d5d2fcfc) {
              if (_38c7d5d2fcfc instanceof Error) if (_38c7d5d2fcfc.stack instanceof Object) {
                if (_38c7d5d2fcfc.stack = _38c7d5d2fcfc.stack.stack, console.error("ERROR FROM STUDYJET INTERNALS", _38c7d5d2fcfc), 
                !(0, _ef3c27203dbf.U5)("allowFailedIntercepts", this.url)) throw _38c7d5d2fcfc;
              } else throw _38c7d5d2fcfc; else throw _38c7d5d2fcfc;
            }
            return (Error.prepareStackTrace = _3ee9590bcdd1, _7f05829ad9f4) ? _180466bcc607 : Reflect.apply(_93a414b82620.fn, _93a414b82620.this, _93a414b82620.args);
          }), _7f05829ad9f4.getOwnPropertyDescriptor = _180466bcc607.getOwnPropertyDescriptorHandler, 
          _38c7d5d2fcfc[_b6f2bd98c862] = new Proxy(_313eac335fae, _7f05829ad9f4);
        }
        Trap(_38c7d5d2fcfc, _b6f2bd98c862) {
          if (Array.isArray(_38c7d5d2fcfc)) {
            for (let _1bd41f000df9 of _38c7d5d2fcfc) this.Trap(_1bd41f000df9, _b6f2bd98c862);
            return;
          }
          let _1bd41f000df9 = _38c7d5d2fcfc.split("."), _313eac335fae = _1bd41f000df9.pop(), _180466bcc607 = _1bd41f000df9.reduce((_38c7d5d2fcfc, _b6f2bd98c862) => _38c7d5d2fcfc?.[_b6f2bd98c862], this.global);
          if (!_180466bcc607) return;
          let _7f05829ad9f4 = this.natives.call("Object.getOwnPropertyDescriptor", null, _180466bcc607, _313eac335fae);
          return this.descriptors.store[_38c7d5d2fcfc] = _7f05829ad9f4, this.RawTrap(_180466bcc607, _313eac335fae, _b6f2bd98c862);
        }
        RawTrap(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
          if (!_38c7d5d2fcfc || !_b6f2bd98c862 || !Reflect.has(_38c7d5d2fcfc, _b6f2bd98c862)) return;
          let _313eac335fae = this.natives.call("Object.getOwnPropertyDescriptor", null, _38c7d5d2fcfc, _b6f2bd98c862), _180466bcc607 = {
            this: null,
            get: function() {
              return _313eac335fae && _313eac335fae.get.call(this.this);
            },
            set: function(_38c7d5d2fcfc) {
              _313eac335fae && _313eac335fae.set.call(this.this, _38c7d5d2fcfc);
            }
          };
          delete _38c7d5d2fcfc[_b6f2bd98c862];
          let _7f05829ad9f4 = {};
          return _1bd41f000df9.get ? _7f05829ad9f4.get = function() {
            return _180466bcc607.this = this, _1bd41f000df9.get(_180466bcc607);
          } : _313eac335fae?.get && (_7f05829ad9f4.get = _313eac335fae.get), _1bd41f000df9.set ? _7f05829ad9f4.set = function(_38c7d5d2fcfc) {
            _180466bcc607.this = this, _1bd41f000df9.set(_180466bcc607, _38c7d5d2fcfc);
          } : _313eac335fae?.set && (_7f05829ad9f4.set = _313eac335fae.set), _1bd41f000df9.enumerable ? _7f05829ad9f4.enumerable = _1bd41f000df9.enumerable : _313eac335fae?.enumerable && (_7f05829ad9f4.enumerable = _313eac335fae.enumerable), 
          _1bd41f000df9.configurable ? _7f05829ad9f4.configurable = _1bd41f000df9.configurable : _313eac335fae?.configurable && (_7f05829ad9f4.configurable = _313eac335fae.configurable), 
          Object.defineProperty(_38c7d5d2fcfc, _b6f2bd98c862, _7f05829ad9f4), _313eac335fae;
        }
      }
    },
    1077: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      function n(_38c7d5d2fcfc, _b6f2bd98c862) {
        _38c7d5d2fcfc.Trap("Element.prototype.attributes", {
          get(_38c7d5d2fcfc) {
            let _b6f2bd98c862 = _38c7d5d2fcfc.get(), _1bd41f000df9 = new Proxy(_b6f2bd98c862, {
              get(_38c7d5d2fcfc, _313eac335fae, _180466bcc607) {
                let _7f05829ad9f4 = Reflect.get(_38c7d5d2fcfc, _313eac335fae);
                return "length" === _313eac335fae ? Object.keys(_1bd41f000df9).length : "getNamedItem" === _313eac335fae ? _38c7d5d2fcfc => _1bd41f000df9[_38c7d5d2fcfc] : "getNamedItemNS" === _313eac335fae ? (_38c7d5d2fcfc, _b6f2bd98c862) => _1bd41f000df9[`${_38c7d5d2fcfc}:${_b6f2bd98c862}`] : _313eac335fae in NamedNodeMap.prototype && "function" == typeof _7f05829ad9f4 ? new Proxy(_7f05829ad9f4, {
                  apply: (_38c7d5d2fcfc, _313eac335fae, _180466bcc607) => _313eac335fae === _1bd41f000df9 ? Reflect.apply(_38c7d5d2fcfc, _b6f2bd98c862, _180466bcc607) : Reflect.apply(_38c7d5d2fcfc, _313eac335fae, _180466bcc607)
                }) : "string" != typeof _313eac335fae && "number" != typeof _313eac335fae || isNaN(Number(_313eac335fae)) ? this.has(_38c7d5d2fcfc, _313eac335fae) ? _7f05829ad9f4 : void 0 : _b6f2bd98c862[Object.keys(_1bd41f000df9)[_313eac335fae]];
              },
              ownKeys(_38c7d5d2fcfc) {
                return Reflect.ownKeys(_38c7d5d2fcfc).filter(_b6f2bd98c862 => this.has(_38c7d5d2fcfc, _b6f2bd98c862));
              },
              has: (_38c7d5d2fcfc, _1bd41f000df9) => "symbol" == typeof _1bd41f000df9 ? Reflect.has(_38c7d5d2fcfc, _1bd41f000df9) : !(_1bd41f000df9.startsWith("studyjet-attr-") || _b6f2bd98c862[_1bd41f000df9]?.name?.startsWith("studyjet-attr-")) && Reflect.has(_38c7d5d2fcfc, _1bd41f000df9)
            });
            return _1bd41f000df9;
          }
        }), _38c7d5d2fcfc.Trap([ "Attr.prototype.value", "Attr.prototype.nodeValue" ], {
          get: _38c7d5d2fcfc => _38c7d5d2fcfc.this?.ownerElement ? _38c7d5d2fcfc.this.ownerElement.getAttribute(_38c7d5d2fcfc.this.name) : _38c7d5d2fcfc.get(),
          set: (_38c7d5d2fcfc, _b6f2bd98c862) => _38c7d5d2fcfc.this?.ownerElement ? _38c7d5d2fcfc.this.ownerElement.setAttribute(_38c7d5d2fcfc.this.name, _b6f2bd98c862) : _38c7d5d2fcfc.set(_b6f2bd98c862)
        });
      }
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        default: () => n
      });
    },
    7430: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        default: () => i
      });
      var _313eac335fae = _1bd41f000df9(1472);
      function i(_38c7d5d2fcfc, _b6f2bd98c862) {
        _38c7d5d2fcfc.Proxy("Navigator.prototype.sendBeacon", {
          apply(_b6f2bd98c862) {
            _b6f2bd98c862.args[0] = (0, _313eac335fae.Oy)(_b6f2bd98c862.args[0], _38c7d5d2fcfc.meta);
          }
        });
      }
    },
    9116: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      function n(_38c7d5d2fcfc, _b6f2bd98c862) {
        _38c7d5d2fcfc.serviceWorker.addEventListener("message", ({data: _b6f2bd98c862}) => {
          if ("studyjet$type" in _b6f2bd98c862 && "cookie" === _b6f2bd98c862.studyjet$type) {
            _38c7d5d2fcfc.cookieStore.setCookies([ _b6f2bd98c862.cookie ], new URL(_b6f2bd98c862.url));
            let _1bd41f000df9 = {
              studyjet$token: _b6f2bd98c862.studyjet$token,
              studyjet$type: "cookie"
            };
            _38c7d5d2fcfc.serviceWorker.controller.postMessage(_1bd41f000df9);
          }
        }), _38c7d5d2fcfc.Trap("Document.prototype.cookie", {
          get: () => _38c7d5d2fcfc.cookieStore.getCookies(_38c7d5d2fcfc.url, !0),
          set(_b6f2bd98c862, _1bd41f000df9) {
            _38c7d5d2fcfc.cookieStore.setCookies([ _1bd41f000df9 ], _38c7d5d2fcfc.url);
            let _313eac335fae = _38c7d5d2fcfc.descriptors.get("ServiceWorkerContainer.prototype.controller", _38c7d5d2fcfc.serviceWorker);
            _313eac335fae && _38c7d5d2fcfc.natives.call("ServiceWorker.prototype.postMessage", _313eac335fae, {
              studyjet$type: "cookie",
              cookie: _1bd41f000df9,
              url: _38c7d5d2fcfc.url.href
            });
          }
        }), delete _b6f2bd98c862.cookieStore;
      }
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        default: () => n
      });
    },
    6447: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        default: () => i
      });
      var _313eac335fae = _1bd41f000df9(2614);
      function i(_38c7d5d2fcfc) {
        _38c7d5d2fcfc.Proxy("CSSStyleDeclaration.prototype.setProperty", {
          apply(_b6f2bd98c862) {
            _b6f2bd98c862.args[1] && (_b6f2bd98c862.args[1] = (0, _313eac335fae.s)(_b6f2bd98c862.args[1], _38c7d5d2fcfc.meta));
          }
        }), _38c7d5d2fcfc.Proxy("CSSStyleDeclaration.prototype.getPropertyValue", {
          apply(_38c7d5d2fcfc) {
            let _b6f2bd98c862 = _38c7d5d2fcfc.call();
            if (!_b6f2bd98c862) return _b6f2bd98c862;
            _38c7d5d2fcfc.return((0, _313eac335fae.f)(_b6f2bd98c862));
          }
        }), _38c7d5d2fcfc.Trap("CSSStyleDeclaration.prototype.cssText", {
          set(_b6f2bd98c862, _1bd41f000df9) {
            _b6f2bd98c862.set((0, _313eac335fae.s)(_1bd41f000df9, _38c7d5d2fcfc.meta));
          },
          get: _38c7d5d2fcfc => (0, _313eac335fae.f)(_38c7d5d2fcfc.get())
        }), _38c7d5d2fcfc.Proxy("CSSStyleSheet.prototype.insertRule", {
          apply(_b6f2bd98c862) {
            _b6f2bd98c862.args[0] = (0, _313eac335fae.s)(_b6f2bd98c862.args[0], _38c7d5d2fcfc.meta);
          }
        }), _38c7d5d2fcfc.Proxy("CSSStyleSheet.prototype.replace", {
          apply(_b6f2bd98c862) {
            _b6f2bd98c862.args[0] = (0, _313eac335fae.s)(_b6f2bd98c862.args[0], _38c7d5d2fcfc.meta);
          }
        }), _38c7d5d2fcfc.Proxy("CSSStyleSheet.prototype.replaceSync", {
          apply(_b6f2bd98c862) {
            _b6f2bd98c862.args[0] = (0, _313eac335fae.s)(_b6f2bd98c862.args[0], _38c7d5d2fcfc.meta);
          }
        }), _38c7d5d2fcfc.Trap("CSSRule.prototype.cssText", {
          set(_b6f2bd98c862, _1bd41f000df9) {
            _b6f2bd98c862.set((0, _313eac335fae.s)(_1bd41f000df9, _38c7d5d2fcfc.meta));
          },
          get: _38c7d5d2fcfc => (0, _313eac335fae.f)(_38c7d5d2fcfc.get())
        }), _38c7d5d2fcfc.Proxy("CSSStyleValue.parse", {
          apply(_b6f2bd98c862) {
            _b6f2bd98c862.args[1] && (_b6f2bd98c862.args[1] = (0, _313eac335fae.s)(_b6f2bd98c862.args[1], _38c7d5d2fcfc.meta));
          }
        }), _38c7d5d2fcfc.Trap("HTMLElement.prototype.style", {
          get(_b6f2bd98c862) {
            let _1bd41f000df9 = _b6f2bd98c862.get();
            return new Proxy(_1bd41f000df9, {
              get(_38c7d5d2fcfc, _b6f2bd98c862) {
                let _180466bcc607 = Reflect.get(_38c7d5d2fcfc, _b6f2bd98c862);
                return "function" == typeof _180466bcc607 ? new Proxy(_180466bcc607, {
                  apply: (_38c7d5d2fcfc, _b6f2bd98c862, _313eac335fae) => Reflect.apply(_38c7d5d2fcfc, _1bd41f000df9, _313eac335fae)
                }) : _b6f2bd98c862 in CSSStyleDeclaration.prototype || !_180466bcc607 ? _180466bcc607 : (0, 
                _313eac335fae.f)(_180466bcc607);
              },
              set: (_b6f2bd98c862, _1bd41f000df9, _180466bcc607) => "cssText" == _1bd41f000df9 || "" == _180466bcc607 || "string" != typeof _180466bcc607 ? Reflect.set(_b6f2bd98c862, _1bd41f000df9, _180466bcc607) : Reflect.set(_b6f2bd98c862, _1bd41f000df9, (0, 
              _313eac335fae.s)(_180466bcc607, _38c7d5d2fcfc.meta))
            });
          },
          set(_38c7d5d2fcfc, _b6f2bd98c862) {
            _38c7d5d2fcfc.set(_b6f2bd98c862);
          }
        });
      }
    },
    5351: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        default: () => i
      });
      var _313eac335fae = _1bd41f000df9(884);
      function i(_38c7d5d2fcfc, _b6f2bd98c862) {
        let _1bd41f000df9 = String;
        _38c7d5d2fcfc.Proxy([ "Document.prototype.querySelector", "Document.prototype.querySelectorAll" ], {
          apply(_38c7d5d2fcfc) {
            _38c7d5d2fcfc.args[0] = _1bd41f000df9(_38c7d5d2fcfc.args[0]).replace(/((?:^|\s)\b\w+\[(?:src|href|data-href))[\^]?(=['"]?(?:https?[:])?\/\/)/, "$1*$2");
          }
        }), _38c7d5d2fcfc.Proxy("Document.prototype.write", {
          apply(_b6f2bd98c862) {
            if (_b6f2bd98c862.args[0]) try {
              _b6f2bd98c862.args[0] = (0, _313eac335fae.Qs)(_b6f2bd98c862.args[0], _38c7d5d2fcfc.cookieStore, _38c7d5d2fcfc.meta, !1);
            } catch {}
          }
        }), _38c7d5d2fcfc.Trap("Document.prototype.referrer", {
          get: () => _38c7d5d2fcfc.url.toString()
        }), _38c7d5d2fcfc.Proxy("Document.prototype.writeln", {
          apply(_b6f2bd98c862) {
            if (_b6f2bd98c862.args[0]) try {
              _b6f2bd98c862.args[0] = (0, _313eac335fae.Qs)(_b6f2bd98c862.args[0], _38c7d5d2fcfc.cookieStore, _38c7d5d2fcfc.meta, !1);
            } catch {}
          }
        }), _38c7d5d2fcfc.Proxy("Document.prototype.parseHTMLUnsafe", {
          apply(_b6f2bd98c862) {
            if (_b6f2bd98c862.args[0]) try {
              _b6f2bd98c862.args[0] = (0, _313eac335fae.Qs)(_b6f2bd98c862.args[0], _38c7d5d2fcfc.cookieStore, _38c7d5d2fcfc.meta, !1);
            } catch {}
          }
        });
      }
    },
    7828: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        default: () => h
      });
      var _313eac335fae = _1bd41f000df9(2393), _180466bcc607 = _1bd41f000df9(2614), _7f05829ad9f4 = _1bd41f000df9(884), _93a414b82620 = _1bd41f000df9(1478), _3ee9590bcdd1 = _1bd41f000df9(1472), _bf69fdf532e4 = _1bd41f000df9(2794), _ef3c27203dbf = _1bd41f000df9(3255);
      let _c20fa90a80b7 = new TextEncoder;
      function d(_38c7d5d2fcfc) {
        return btoa(Array.from(_38c7d5d2fcfc, _38c7d5d2fcfc => String.fromCodePoint(_38c7d5d2fcfc)).join(""));
      }
      function h(_38c7d5d2fcfc, _b6f2bd98c862) {
        let _1bd41f000df9 = {
          nonce: [ _b6f2bd98c862.HTMLElement ],
          integrity: [ _b6f2bd98c862.HTMLScriptElement, _b6f2bd98c862.HTMLLinkElement ],
          csp: [ _b6f2bd98c862.HTMLIFrameElement ],
          credentialless: [ _b6f2bd98c862.HTMLIFrameElement ],
          src: [ _b6f2bd98c862.HTMLImageElement, _b6f2bd98c862.HTMLMediaElement, _b6f2bd98c862.HTMLIFrameElement, _b6f2bd98c862.HTMLFrameElement, _b6f2bd98c862.HTMLEmbedElement, _b6f2bd98c862.HTMLScriptElement, _b6f2bd98c862.HTMLSourceElement ],
          href: [ _b6f2bd98c862.HTMLAnchorElement, _b6f2bd98c862.HTMLLinkElement ],
          data: [ _b6f2bd98c862.HTMLObjectElement ],
          action: [ _b6f2bd98c862.HTMLFormElement ],
          formaction: [ _b6f2bd98c862.HTMLButtonElement, _b6f2bd98c862.HTMLInputElement ],
          srcdoc: [ _b6f2bd98c862.HTMLIFrameElement ],
          poster: [ _b6f2bd98c862.HTMLVideoElement ],
          imagesrcset: [ _b6f2bd98c862.HTMLLinkElement ]
        }, _eb5e33ca1634 = [ _b6f2bd98c862.HTMLAnchorElement.prototype, _b6f2bd98c862.HTMLAreaElement.prototype ], _8aa5e5cf048b = [ _38c7d5d2fcfc.natives.call("Object.getOwnPropertyDescriptor", null, _b6f2bd98c862.HTMLAnchorElement.prototype, "href"), _38c7d5d2fcfc.natives.call("Object.getOwnPropertyDescriptor", null, _b6f2bd98c862.HTMLAreaElement.prototype, "href") ];
        for (let _b6f2bd98c862 of Object.keys(_1bd41f000df9)) for (let _313eac335fae of _1bd41f000df9[_b6f2bd98c862]) {
          let _1bd41f000df9 = _38c7d5d2fcfc.natives.call("Object.getOwnPropertyDescriptor", null, _313eac335fae.prototype, _b6f2bd98c862);
          Object.defineProperty(_313eac335fae.prototype, _b6f2bd98c862, {
            get() {
              return [ "src", "data", "href", "action", "formaction" ].includes(_b6f2bd98c862) ? (0, 
              _3ee9590bcdd1.v2)(_1bd41f000df9.get.call(this)) : _1bd41f000df9.get.call(this);
            },
            set(_38c7d5d2fcfc) {
              return this.setAttribute(_b6f2bd98c862, _38c7d5d2fcfc);
            }
          });
        }
        for (let _b6f2bd98c862 of [ "protocol", "hash", "host", "hostname", "origin", "pathname", "port", "search" ]) for (let _1bd41f000df9 in _eb5e33ca1634) {
          let _313eac335fae = _eb5e33ca1634[_1bd41f000df9], _180466bcc607 = _8aa5e5cf048b[_1bd41f000df9];
          _38c7d5d2fcfc.RawTrap(_313eac335fae, _b6f2bd98c862, {
            get(_38c7d5d2fcfc) {
              let _1bd41f000df9 = _180466bcc607.get.call(_38c7d5d2fcfc.this);
              return _1bd41f000df9 ? new URL((0, _3ee9590bcdd1.v2)(_1bd41f000df9))[_b6f2bd98c862] : _1bd41f000df9;
            }
          });
        }
        _38c7d5d2fcfc.Trap("Node.prototype.baseURI", {
          get(_b6f2bd98c862) {
            let _1bd41f000df9 = _b6f2bd98c862.this, _313eac335fae = _1bd41f000df9.ownerDocument?.querySelector("base");
            return (_1bd41f000df9 instanceof Document && (_313eac335fae = _1bd41f000df9.querySelector("base")), 
            _313eac335fae) ? new URL(_313eac335fae.href, _38c7d5d2fcfc.url.origin).href : _38c7d5d2fcfc.url.origin;
          },
          set: (_38c7d5d2fcfc, _b6f2bd98c862) => !1
        }), _38c7d5d2fcfc.Proxy("Element.prototype.getAttribute", {
          apply(_b6f2bd98c862) {
            let [_1bd41f000df9] = _b6f2bd98c862.args;
            if (_1bd41f000df9.startsWith("studyjet-attr")) return _b6f2bd98c862.return(null);
            if (_38c7d5d2fcfc.natives.call("Element.prototype.hasAttribute", _b6f2bd98c862.this, `studyjet-attr-${_1bd41f000df9}`)) {
              let _38c7d5d2fcfc = _b6f2bd98c862.fn.call(_b6f2bd98c862.this, `studyjet-attr-${_1bd41f000df9}`);
              return null === _38c7d5d2fcfc ? _b6f2bd98c862.return("") : _b6f2bd98c862.return(_38c7d5d2fcfc);
            }
          }
        }), _38c7d5d2fcfc.Proxy("Element.prototype.getAttributeNames", {
          apply(_38c7d5d2fcfc) {
            let _b6f2bd98c862 = _38c7d5d2fcfc.call().filter(_38c7d5d2fcfc => !_38c7d5d2fcfc.startsWith("studyjet-attr"));
            _38c7d5d2fcfc.return(_b6f2bd98c862);
          }
        }), _38c7d5d2fcfc.Proxy("Element.prototype.getAttributeNode", {
          apply(_38c7d5d2fcfc) {
            if (_38c7d5d2fcfc.args[0].startsWith("studyjet-attr")) return _38c7d5d2fcfc.return(null);
          }
        }), _38c7d5d2fcfc.Proxy("Element.prototype.hasAttribute", {
          apply(_38c7d5d2fcfc) {
            if (_38c7d5d2fcfc.args[0].startsWith("studyjet-attr")) return _38c7d5d2fcfc.return(!1);
          }
        }), _38c7d5d2fcfc.Proxy("Element.prototype.setAttribute", {
          apply(_b6f2bd98c862) {
            let [_1bd41f000df9, _180466bcc607] = _b6f2bd98c862.args, _7f05829ad9f4 = _313eac335fae.V.find(_38c7d5d2fcfc => {
              let _313eac335fae = _38c7d5d2fcfc[_1bd41f000df9.toLowerCase()];
              return !!_313eac335fae && ("*" === _313eac335fae || "function" != typeof _313eac335fae && _313eac335fae.includes(_b6f2bd98c862.this.tagName.toLowerCase()));
            });
            if (_7f05829ad9f4) {
              let _313eac335fae = _7f05829ad9f4.fn(_180466bcc607, _38c7d5d2fcfc.meta, _38c7d5d2fcfc.cookieStore);
              if (null == _313eac335fae) {
                _38c7d5d2fcfc.natives.call("Element.prototype.removeAttribute", _b6f2bd98c862.this, _1bd41f000df9), 
                _b6f2bd98c862.return(void 0);
                return;
              }
              _b6f2bd98c862.args[1] = _313eac335fae, _b6f2bd98c862.fn.call(_b6f2bd98c862.this, `studyjet-attr-${_b6f2bd98c862.args[0]}`, _180466bcc607);
            }
          }
        }), _38c7d5d2fcfc.Proxy("Element.prototype.setAttributeNode", {
          apply(_38c7d5d2fcfc) {}
        }), _38c7d5d2fcfc.Proxy("Element.prototype.setAttributeNS", {
          apply(_b6f2bd98c862) {
            let [_1bd41f000df9, _180466bcc607, _7f05829ad9f4] = _b6f2bd98c862.args, _93a414b82620 = _313eac335fae.V.find(_38c7d5d2fcfc => {
              let _1bd41f000df9 = _38c7d5d2fcfc[_180466bcc607.toLowerCase()];
              return !!_1bd41f000df9 && ("*" === _1bd41f000df9 || "function" != typeof _1bd41f000df9 && _1bd41f000df9.includes(_b6f2bd98c862.this.tagName.toLowerCase()));
            });
            _93a414b82620 && (_b6f2bd98c862.args[2] = _93a414b82620.fn(_7f05829ad9f4, _38c7d5d2fcfc.meta, _38c7d5d2fcfc.cookieStore), 
            _38c7d5d2fcfc.natives.call("Element.prototype.setAttribute", _b6f2bd98c862.this, `studyjet-attr-${_b6f2bd98c862.args[1]}`, _7f05829ad9f4));
          }
        }), _38c7d5d2fcfc.Trap("SVGAnimatedString.prototype.baseVal", {
          get(_38c7d5d2fcfc) {
            let _b6f2bd98c862 = _38c7d5d2fcfc.get();
            return _b6f2bd98c862 ? (0, _3ee9590bcdd1.v2)(_b6f2bd98c862) : _b6f2bd98c862;
          },
          set(_b6f2bd98c862, _1bd41f000df9) {
            _b6f2bd98c862.set((0, _3ee9590bcdd1.Oy)(_1bd41f000df9, _38c7d5d2fcfc.meta));
          }
        }), _38c7d5d2fcfc.Trap("SVGAnimatedString.prototype.animVal", {
          get(_38c7d5d2fcfc) {
            let _b6f2bd98c862 = _38c7d5d2fcfc.get();
            return _b6f2bd98c862 ? (0, _3ee9590bcdd1.v2)(_b6f2bd98c862) : _b6f2bd98c862;
          }
        }), _38c7d5d2fcfc.Proxy("Element.prototype.removeAttribute", {
          apply(_b6f2bd98c862) {
            if (_b6f2bd98c862.args[0].startsWith("studyjet-attr")) return _b6f2bd98c862.return(void 0);
            _38c7d5d2fcfc.natives.call("Element.prototype.hasAttribute", _b6f2bd98c862.this, _b6f2bd98c862.args[0]) && _b6f2bd98c862.fn.call(_b6f2bd98c862.this, `studyjet-attr-${_b6f2bd98c862.args[0]}`);
          }
        }), _38c7d5d2fcfc.Proxy("Element.prototype.toggleAttribute", {
          apply(_b6f2bd98c862) {
            if (_b6f2bd98c862.args[0].startsWith("studyjet-attr")) return _b6f2bd98c862.return(!1);
            _38c7d5d2fcfc.natives.call("Element.prototype.hasAttribute", _b6f2bd98c862.this, _b6f2bd98c862.args[0]) && _b6f2bd98c862.fn.call(_b6f2bd98c862.this, `studyjet-attr-${_b6f2bd98c862.args[0]}`);
          }
        }), _38c7d5d2fcfc.Trap("Element.prototype.innerHTML", {
          set(_1bd41f000df9, _313eac335fae) {
            let _3ee9590bcdd1;
            if (_1bd41f000df9.this instanceof _b6f2bd98c862.HTMLScriptElement) _3ee9590bcdd1 = (0, 
            _93a414b82620.o)(_313eac335fae, "(anonymous script element)", _38c7d5d2fcfc.meta), 
            _38c7d5d2fcfc.natives.call("Element.prototype.setAttribute", _1bd41f000df9.this, "studyjet-attr-script-source-src", d(_c20fa90a80b7.encode(_3ee9590bcdd1))); else if (_1bd41f000df9.this instanceof _b6f2bd98c862.HTMLStyleElement) _3ee9590bcdd1 = (0, 
            _180466bcc607.s)(_313eac335fae, _38c7d5d2fcfc.meta); else try {
              _3ee9590bcdd1 = (0, _7f05829ad9f4.Qs)(_313eac335fae, _38c7d5d2fcfc.cookieStore, _38c7d5d2fcfc.meta);
            } catch {
              _3ee9590bcdd1 = _313eac335fae;
            }
            _1bd41f000df9.set(_3ee9590bcdd1);
          },
          get(_1bd41f000df9) {
            if (_1bd41f000df9.this instanceof _b6f2bd98c862.HTMLScriptElement) {
              let _b6f2bd98c862 = _38c7d5d2fcfc.natives.call("Element.prototype.getAttribute", _1bd41f000df9.this, "studyjet-attr-script-source-src");
              return _b6f2bd98c862 ? atob(_b6f2bd98c862) : _1bd41f000df9.get();
            }
            return _1bd41f000df9.this instanceof _b6f2bd98c862.HTMLStyleElement ? _1bd41f000df9.get() : (0, 
            _7f05829ad9f4.nK)(_1bd41f000df9.get());
          }
        }), _38c7d5d2fcfc.Trap("Node.prototype.textContent", {
          set(_1bd41f000df9, _313eac335fae) {
            if (_1bd41f000df9.this instanceof _b6f2bd98c862.HTMLScriptElement) {
              let _b6f2bd98c862 = (0, _93a414b82620.o)(_313eac335fae, "(anonymous script element)", _38c7d5d2fcfc.meta);
              return _38c7d5d2fcfc.natives.call("Element.prototype.setAttribute", _1bd41f000df9.this, "studyjet-attr-script-source-src", d(_c20fa90a80b7.encode(_b6f2bd98c862))), 
              _1bd41f000df9.set(_b6f2bd98c862);
            }
            return _1bd41f000df9.this instanceof _b6f2bd98c862.HTMLStyleElement ? _1bd41f000df9.set((0, 
            _180466bcc607.s)(_313eac335fae, _38c7d5d2fcfc.meta)) : _1bd41f000df9.set(_313eac335fae);
          },
          get(_1bd41f000df9) {
            if (_1bd41f000df9.this instanceof _b6f2bd98c862.HTMLScriptElement) {
              let _b6f2bd98c862 = _38c7d5d2fcfc.natives.call("Element.prototype.getAttribute", _1bd41f000df9.this, "studyjet-attr-script-source-src");
              return _b6f2bd98c862 ? atob(_b6f2bd98c862) : _1bd41f000df9.get();
            }
            return _1bd41f000df9.this instanceof _b6f2bd98c862.HTMLStyleElement ? (0, _180466bcc607.f)(_1bd41f000df9.get()) : _1bd41f000df9.get();
          }
        }), _38c7d5d2fcfc.Trap("Element.prototype.outerHTML", {
          set(_b6f2bd98c862, _1bd41f000df9) {
            _b6f2bd98c862.set((0, _7f05829ad9f4.Qs)(_1bd41f000df9, _38c7d5d2fcfc.cookieStore, _38c7d5d2fcfc.meta));
          },
          get: _38c7d5d2fcfc => (0, _7f05829ad9f4.nK)(_38c7d5d2fcfc.get())
        }), _38c7d5d2fcfc.Proxy("Element.prototype.setHTMLUnsafe", {
          apply(_b6f2bd98c862) {
            try {
              _b6f2bd98c862.args[0] = (0, _7f05829ad9f4.Qs)(_b6f2bd98c862.args[0], _38c7d5d2fcfc.cookieStore, _38c7d5d2fcfc.meta, !1);
            } catch {}
          }
        }), _38c7d5d2fcfc.Proxy("Element.prototype.getHTML", {
          apply(_38c7d5d2fcfc) {
            _38c7d5d2fcfc.return((0, _7f05829ad9f4.nK)(_38c7d5d2fcfc.call()));
          }
        }), _38c7d5d2fcfc.Proxy("Element.prototype.insertAdjacentHTML", {
          apply(_b6f2bd98c862) {
            if (_b6f2bd98c862.args[1]) try {
              _b6f2bd98c862.args[1] = (0, _7f05829ad9f4.Qs)(_b6f2bd98c862.args[1], _38c7d5d2fcfc.cookieStore, _38c7d5d2fcfc.meta, !1);
            } catch {}
          }
        }), _38c7d5d2fcfc.Proxy("Audio", {
          construct(_b6f2bd98c862) {
            _b6f2bd98c862.args[0] && (_b6f2bd98c862.args[0] = (0, _3ee9590bcdd1.Oy)(_b6f2bd98c862.args[0], _38c7d5d2fcfc.meta));
          }
        }), _38c7d5d2fcfc.Proxy("Text.prototype.appendData", {
          apply(_b6f2bd98c862) {
            _b6f2bd98c862.this.parentElement?.tagName === "STYLE" && (_b6f2bd98c862.args[0] = (0, 
            _180466bcc607.s)(_b6f2bd98c862.args[0], _38c7d5d2fcfc.meta));
          }
        }), _38c7d5d2fcfc.Proxy("Text.prototype.insertData", {
          apply(_b6f2bd98c862) {
            _b6f2bd98c862.this.parentElement?.tagName === "STYLE" && (_b6f2bd98c862.args[1] = (0, 
            _180466bcc607.s)(_b6f2bd98c862.args[1], _38c7d5d2fcfc.meta));
          }
        }), _38c7d5d2fcfc.Proxy("Text.prototype.replaceData", {
          apply(_b6f2bd98c862) {
            _b6f2bd98c862.this.parentElement?.tagName === "STYLE" && (_b6f2bd98c862.args[2] = (0, 
            _180466bcc607.s)(_b6f2bd98c862.args[2], _38c7d5d2fcfc.meta));
          }
        }), _38c7d5d2fcfc.Trap("Text.prototype.wholeText", {
          get: _38c7d5d2fcfc => _38c7d5d2fcfc.this.parentElement?.tagName === "STYLE" ? (0, 
          _180466bcc607.f)(_38c7d5d2fcfc.get()) : _38c7d5d2fcfc.get(),
          set: (_b6f2bd98c862, _1bd41f000df9) => _b6f2bd98c862.this.parentElement?.tagName === "STYLE" ? _b6f2bd98c862.set((0, 
          _180466bcc607.s)(_1bd41f000df9, _38c7d5d2fcfc.meta)) : _b6f2bd98c862.set(_1bd41f000df9)
        }), _38c7d5d2fcfc.Trap([ "HTMLIFrameElement.prototype.contentWindow", "HTMLFrameElement.prototype.contentWindow", "HTMLObjectElement.prototype.contentWindow", "HTMLEmbedElement.prototype.contentWindow" ], {
          get(_38c7d5d2fcfc) {
            let _b6f2bd98c862 = _38c7d5d2fcfc.get();
            return _b6f2bd98c862 && (_bf69fdf532e4.pX in _b6f2bd98c862 || new _ef3c27203dbf.StudyJetClient(_b6f2bd98c862).hook()), 
            _b6f2bd98c862;
          }
        }), _38c7d5d2fcfc.Trap([ "HTMLIFrameElement.prototype.contentDocument", "HTMLFrameElement.prototype.contentDocument", "HTMLObjectElement.prototype.contentDocument", "HTMLEmbedElement.prototype.contentDocument" ], {
          get(_b6f2bd98c862) {
            let _1bd41f000df9 = _38c7d5d2fcfc.descriptors.get(`${_b6f2bd98c862.this.constructor.name}.prototype.contentWindow`, _b6f2bd98c862.this);
            return _1bd41f000df9 ? (_bf69fdf532e4.pX in _1bd41f000df9 || new _ef3c27203dbf.StudyJetClient(_1bd41f000df9).hook(), 
            _1bd41f000df9.document) : _1bd41f000df9;
          }
        }), _38c7d5d2fcfc.Proxy([ "HTMLIFrameElement.prototype.getSVGDocument", "HTMLObjectElement.prototype.getSVGDocument", "HTMLEmbedElement.prototype.getSVGDocument" ], {
          apply(_38c7d5d2fcfc) {
            if (_38c7d5d2fcfc.call()) return _38c7d5d2fcfc.return(_38c7d5d2fcfc.this.contentDocument);
          }
        }), _38c7d5d2fcfc.Proxy("DOMParser.prototype.parseFromString", {
          apply(_b6f2bd98c862) {
            if ("text/html" === _b6f2bd98c862.args[1]) try {
              _b6f2bd98c862.args[0] = (0, _7f05829ad9f4.Qs)(_b6f2bd98c862.args[0], _38c7d5d2fcfc.cookieStore, _38c7d5d2fcfc.meta, !1);
            } catch {}
          }
        });
      }
    },
    5426: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        default: () => i
      });
      var _313eac335fae = _1bd41f000df9(2614);
      function i(_38c7d5d2fcfc, _b6f2bd98c862) {
        _38c7d5d2fcfc.Proxy("FontFace", {
          construct(_b6f2bd98c862) {
            _b6f2bd98c862.args[1] = (0, _313eac335fae.s)(_b6f2bd98c862.args[1], _38c7d5d2fcfc.meta);
          }
        });
      }
    },
    5465: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        default: () => i
      });
      var _313eac335fae = _1bd41f000df9(884);
      function i(_38c7d5d2fcfc, _b6f2bd98c862) {
        _38c7d5d2fcfc.Proxy("Range.prototype.createContextualFragment", {
          apply(_b6f2bd98c862) {
            _b6f2bd98c862.args[0] = (0, _313eac335fae.Qs)(_b6f2bd98c862.args[0], _38c7d5d2fcfc.cookieStore, _38c7d5d2fcfc.meta);
          }
        });
      }
    },
    9804: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        default: () => s
      });
      var _313eac335fae = _1bd41f000df9(1472), _180466bcc607 = _1bd41f000df9(1862), _7f05829ad9f4 = _1bd41f000df9(2794);
      function s(_38c7d5d2fcfc, _b6f2bd98c862) {
        _38c7d5d2fcfc.Proxy([ "History.prototype.pushState", "History.prototype.replaceState" ], {
          apply(_b6f2bd98c862) {
            (_b6f2bd98c862.args[2] || "" === _b6f2bd98c862.args[2]) && (_b6f2bd98c862.args[2] = (0, 
            _313eac335fae.Oy)(_b6f2bd98c862.args[2], _38c7d5d2fcfc.meta)), _b6f2bd98c862.call();
            let {constructor: {constructor: _1bd41f000df9}} = _b6f2bd98c862.this, _93a414b82620 = _1bd41f000df9("return globalThis")(), _3ee9590bcdd1 = _93a414b82620[_7f05829ad9f4.pX];
            if (_93a414b82620.name === _38c7d5d2fcfc.meta.topFrameName) {
              let _b6f2bd98c862 = new _180466bcc607.UrlChangeEvent(_3ee9590bcdd1.url.href);
              _38c7d5d2fcfc.frame?.dispatchEvent(_b6f2bd98c862);
            }
          }
        });
      }
    },
    7758: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        default: () => s
      });
      var _313eac335fae = _1bd41f000df9(3255), _180466bcc607 = _1bd41f000df9(2794), _7f05829ad9f4 = _1bd41f000df9(1472);
      function s(_38c7d5d2fcfc) {
        _38c7d5d2fcfc.Proxy("window.open", {
          apply(_b6f2bd98c862) {
            _b6f2bd98c862.args[0] && (_b6f2bd98c862.args[0] = (0, _7f05829ad9f4.Oy)(_b6f2bd98c862.args[0], _38c7d5d2fcfc.meta)), 
            ("_top" === _b6f2bd98c862.args[1] || "_unfencedTop" === _b6f2bd98c862.args[1]) && (_b6f2bd98c862.args[1] = _38c7d5d2fcfc.meta.topFrameName), 
            "_parent" === _b6f2bd98c862.args[1] && (_b6f2bd98c862.args[1] = _38c7d5d2fcfc.meta.parentFrameName);
            let _1bd41f000df9 = _b6f2bd98c862.call();
            if (!_1bd41f000df9) return _b6f2bd98c862.return(_1bd41f000df9);
            if (_180466bcc607.pX in _1bd41f000df9) return _b6f2bd98c862.return(_1bd41f000df9[_180466bcc607.pX].global);
            {
              let _38c7d5d2fcfc = new _313eac335fae.StudyJetClient(_1bd41f000df9);
              return _38c7d5d2fcfc.hook(), _b6f2bd98c862.return(_38c7d5d2fcfc.global);
            }
          }
        }), _38c7d5d2fcfc.Trap("window.frameElement", {
          get(_38c7d5d2fcfc) {
            let _b6f2bd98c862 = _38c7d5d2fcfc.get();
            return _b6f2bd98c862 ? _b6f2bd98c862.ownerDocument.defaultView[_180466bcc607.pX] ? _b6f2bd98c862 : null : _b6f2bd98c862;
          }
        });
      }
    },
    6012: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      function n(_38c7d5d2fcfc, _b6f2bd98c862) {
        _38c7d5d2fcfc.Trap("origin", {
          get: () => _38c7d5d2fcfc.url.origin,
          set: () => !1
        }), _38c7d5d2fcfc.Trap("Document.prototype.URL", {
          get: () => _38c7d5d2fcfc.url.href,
          set: () => !1
        }), _38c7d5d2fcfc.Trap("Document.prototype.documentURI", {
          get: () => _38c7d5d2fcfc.url.href,
          set: () => !1
        }), _38c7d5d2fcfc.Trap("Document.prototype.domain", {
          get: () => _38c7d5d2fcfc.url.hostname,
          set: () => !1
        });
      }
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        default: () => n
      });
    },
    6286: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        default: () => a
      });
      var _313eac335fae = _1bd41f000df9(1472), _180466bcc607 = _1bd41f000df9(37);
      function a(_38c7d5d2fcfc, _b6f2bd98c862) {
        _38c7d5d2fcfc.Trap("PerformanceEntry.prototype.name", {
          get(_38c7d5d2fcfc) {
            let _b6f2bd98c862 = _38c7d5d2fcfc.get();
            return _b6f2bd98c862 && _b6f2bd98c862.startsWith(location.origin + _180466bcc607.$W.prefix) ? (0, 
            _313eac335fae.v2)(_b6f2bd98c862) : _b6f2bd98c862;
          }
        }), _38c7d5d2fcfc.Proxy([ "Performance.prototype.getEntries", "Performance.prototype.getEntriesByType", "Performance.prototype.getEntriesByName", "PerformanceObserverEntryList.prototype.getEntries", "PerformanceObserverEntryList.prototype.getEntriesByType", "PerformanceObserverEntryList.prototype.getEntriesByName" ], {
          apply(_38c7d5d2fcfc) {
            let _b6f2bd98c862 = _38c7d5d2fcfc.call();
            return _38c7d5d2fcfc.return(_b6f2bd98c862.filter(_38c7d5d2fcfc => {
              for (let _b6f2bd98c862 of Object.values(_180466bcc607.$W.files)) if (_38c7d5d2fcfc.name.startsWith(location.origin + _b6f2bd98c862)) return !1;
              return !0;
            }));
          }
        });
      }
    },
    1974: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        default: () => i
      });
      var _313eac335fae = _1bd41f000df9(1472);
      function i(_38c7d5d2fcfc, _b6f2bd98c862) {
        _38c7d5d2fcfc.Proxy("Navigator.prototype.registerProtocolHandler", {
          apply(_b6f2bd98c862) {
            _b6f2bd98c862.args[1] = (0, _313eac335fae.Oy)(_b6f2bd98c862.args[1], _38c7d5d2fcfc.meta);
          }
        }), _38c7d5d2fcfc.Proxy("Navigator.prototype.unregisterProtocolHandler", {
          apply(_b6f2bd98c862) {
            _b6f2bd98c862.args[1] = (0, _313eac335fae.Oy)(_b6f2bd98c862.args[1], _38c7d5d2fcfc.meta);
          }
        });
      }
    },
    9201: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        default: () => l,
        disabled: () => o,
        enabled: () => s,
        order: () => _7f05829ad9f4
      });
      var _313eac335fae = _1bd41f000df9(37), _180466bcc607 = _1bd41f000df9(1472);
      let _7f05829ad9f4 = 2, s = _38c7d5d2fcfc => (0, _313eac335fae.U5)("serviceworkers", _38c7d5d2fcfc.url);
      function o(_38c7d5d2fcfc, _b6f2bd98c862) {
        Reflect.deleteProperty(Navigator.prototype, "serviceWorker");
      }
      function l(_38c7d5d2fcfc, _b6f2bd98c862) {
        let _1bd41f000df9 = new WeakMap;
        _38c7d5d2fcfc.Proxy("EventTarget.prototype.addEventListener", {
          apply(_38c7d5d2fcfc) {
            _1bd41f000df9.get(_38c7d5d2fcfc.this) && _38c7d5d2fcfc.return(void 0);
          }
        }), _38c7d5d2fcfc.Proxy("EventTarget.prototype.removeEventListener", {
          apply(_38c7d5d2fcfc) {
            _1bd41f000df9.get(_38c7d5d2fcfc.this) && _38c7d5d2fcfc.return(void 0);
          }
        }), _38c7d5d2fcfc.Proxy("ServiceWorkerContainer.prototype.getRegistration", {
          apply(_38c7d5d2fcfc) {
            _38c7d5d2fcfc.return(new Promise(_38c7d5d2fcfc => _38c7d5d2fcfc(registration)));
          }
        }), _38c7d5d2fcfc.Proxy("ServiceWorkerContainer.prototype.getRegistrations", {
          apply(_38c7d5d2fcfc) {
            _38c7d5d2fcfc.return(new Promise(_38c7d5d2fcfc => _38c7d5d2fcfc([ registration ])));
          }
        }), _38c7d5d2fcfc.Trap("ServiceWorkerContainer.prototype.ready", {
          get: _38c7d5d2fcfc => new Promise(_38c7d5d2fcfc => _38c7d5d2fcfc(registration))
        }), _38c7d5d2fcfc.Trap("ServiceWorkerContainer.prototype.controller", {
          get: _38c7d5d2fcfc => registration?.active
        }), _38c7d5d2fcfc.Proxy("ServiceWorkerContainer.prototype.register", {
          apply(_b6f2bd98c862) {
            let _313eac335fae = new EventTarget;
            Object.setPrototypeOf(_313eac335fae, self.ServiceWorkerRegistration.prototype), 
            _313eac335fae.constructor = _b6f2bd98c862.fn;
            let _7f05829ad9f4 = (0, _180466bcc607.Oy)(_b6f2bd98c862.args[0], _38c7d5d2fcfc.meta) + "?dest=serviceworker";
            _b6f2bd98c862.args[1] && "module" === _b6f2bd98c862.args[1].type && (_7f05829ad9f4 += "&type=module");
            let _93a414b82620 = _38c7d5d2fcfc.natives.construct("SharedWorker", _7f05829ad9f4).port, _3ee9590bcdd1 = {
              scope: _b6f2bd98c862.args[0],
              active: _93a414b82620
            }, _bf69fdf532e4 = _38c7d5d2fcfc.descriptors.get("ServiceWorkerContainer.prototype.controller", _38c7d5d2fcfc.serviceWorker);
            _38c7d5d2fcfc.natives.call("ServiceWorker.prototype.postMessage", _bf69fdf532e4, {
              studyjet$type: "registerServiceWorker",
              port: _93a414b82620,
              origin: _38c7d5d2fcfc.url.origin
            }, [ _93a414b82620 ]), _1bd41f000df9.set(_313eac335fae, _3ee9590bcdd1), _b6f2bd98c862.return(new Promise(_38c7d5d2fcfc => _38c7d5d2fcfc(_313eac335fae)));
          }
        });
      }
    },
    5289: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      function n(_38c7d5d2fcfc, _b6f2bd98c862) {
        let _1bd41f000df9 = {
          get(_b6f2bd98c862, _1bd41f000df9) {
            switch (_1bd41f000df9) {
             case "getItem":
              return _1bd41f000df9 => _b6f2bd98c862.getItem(_38c7d5d2fcfc.url.host + "@" + _1bd41f000df9);

             case "setItem":
              return (_1bd41f000df9, _313eac335fae) => _b6f2bd98c862.setItem(_38c7d5d2fcfc.url.host + "@" + _1bd41f000df9, _313eac335fae);

             case "removeItem":
              return _1bd41f000df9 => _b6f2bd98c862.removeItem(_38c7d5d2fcfc.url.host + "@" + _1bd41f000df9);

             case "clear":
              return () => {
                for (let _1bd41f000df9 in Object.keys(_b6f2bd98c862)) _1bd41f000df9.startsWith(_38c7d5d2fcfc.url.host) && _b6f2bd98c862.removeItem(_1bd41f000df9);
              };

             case "key":
              return _1bd41f000df9 => {
                let _313eac335fae = Object.keys(_b6f2bd98c862).filter(_b6f2bd98c862 => _b6f2bd98c862.startsWith(_38c7d5d2fcfc.url.host));
                return _b6f2bd98c862.getItem(_313eac335fae[_1bd41f000df9]);
              };

             case "length":
              return Object.keys(_b6f2bd98c862).filter(_b6f2bd98c862 => _b6f2bd98c862.startsWith(_38c7d5d2fcfc.url.host)).length;

             default:
              if (_1bd41f000df9 in Object.prototype || "symbol" == typeof _1bd41f000df9) return Reflect.get(_b6f2bd98c862, _1bd41f000df9);
              return _b6f2bd98c862.getItem(_38c7d5d2fcfc.url.host + "@" + _1bd41f000df9);
            }
          },
          set: (_b6f2bd98c862, _1bd41f000df9, _313eac335fae) => (_b6f2bd98c862.setItem(_38c7d5d2fcfc.url.host + "@" + _1bd41f000df9, _313eac335fae), 
          !0),
          ownKeys: _b6f2bd98c862 => Reflect.ownKeys(_b6f2bd98c862).filter(_b6f2bd98c862 => "string" == typeof _b6f2bd98c862 && _b6f2bd98c862.startsWith(_38c7d5d2fcfc.url.host)).map(_b6f2bd98c862 => "string" == typeof _b6f2bd98c862 ? _b6f2bd98c862.substring(_38c7d5d2fcfc.url.host.length + 1) : _b6f2bd98c862),
          getOwnPropertyDescriptor: (_b6f2bd98c862, _1bd41f000df9) => ({
            value: _b6f2bd98c862.getItem(_38c7d5d2fcfc.url.host + "@" + _1bd41f000df9),
            enumerable: !0,
            configurable: !0,
            writable: !0
          }),
          defineProperty: (_b6f2bd98c862, _1bd41f000df9, _313eac335fae) => (_b6f2bd98c862.setItem(_38c7d5d2fcfc.url.host + "@" + _1bd41f000df9, _313eac335fae.value), 
          !0)
        };
        _b6f2bd98c862.localStorage;
        let _313eac335fae = new Proxy(_b6f2bd98c862.localStorage, _1bd41f000df9), _180466bcc607 = new Proxy(_b6f2bd98c862.sessionStorage, _1bd41f000df9);
        delete _b6f2bd98c862.localStorage, delete _b6f2bd98c862.sessionStorage, _b6f2bd98c862.localStorage = _313eac335fae, 
        _b6f2bd98c862.sessionStorage = _180466bcc607;
      }
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        default: () => n
      });
    },
    1323: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        isdedicated: () => _8aa5e5cf048b,
        isemulatedsw: () => _6b23ce5f34cb,
        isshared: () => _e25772762281,
        issw: () => _eb5e33ca1634,
        iswindow: () => _ef3c27203dbf,
        isworker: () => _c20fa90a80b7,
        loadAndHook: () => g
      });
      var _313eac335fae = _1bd41f000df9(37), _180466bcc607 = _1bd41f000df9(2794), _7f05829ad9f4 = _1bd41f000df9(3255), _93a414b82620 = _1bd41f000df9(1862), _3ee9590bcdd1 = _1bd41f000df9(8409), _bf69fdf532e4 = _1bd41f000df9(8665).A;
      let _ef3c27203dbf = "window" in globalThis && window instanceof Window, _c20fa90a80b7 = "WorkerGlobalScope" in globalThis, _eb5e33ca1634 = "ServiceWorkerGlobalScope" in globalThis, _8aa5e5cf048b = "DedicatedWorkerGlobalScope" in globalThis, _e25772762281 = "SharedWorkerGlobalScope" in globalThis, _6b23ce5f34cb = "location" in globalThis && "serviceworker" === new URL(globalThis.location.href).searchParams.get("dest");
      function g(_38c7d5d2fcfc) {
        if ((0, _313eac335fae.Nk)(_38c7d5d2fcfc), _bf69fdf532e4.log("initializing studyjet client"), 
        !(_180466bcc607.pX in globalThis)) {
          (0, _313eac335fae.Ec)();
          let _38c7d5d2fcfc = new _7f05829ad9f4.StudyJetClient(globalThis), _b6f2bd98c862 = globalThis.frameElement;
          _b6f2bd98c862 && !_b6f2bd98c862.name && (_b6f2bd98c862.name = `${Array(8).fill(0).map(() => Math.floor(36 * Math.random()).toString(36)).join("")}`), 
          globalThis.COOKIE && _38c7d5d2fcfc.loadcookies(globalThis.COOKIE), _38c7d5d2fcfc.hook(), 
          _6b23ce5f34cb && new _3ee9590bcdd1.StudyJetServiceWorkerRuntime(_38c7d5d2fcfc).hook();
          let _1bd41f000df9 = new _93a414b82620.StudyJetContextEvent(_38c7d5d2fcfc.global.window, _38c7d5d2fcfc);
          _38c7d5d2fcfc.frame?.dispatchEvent(_1bd41f000df9);
          let _180466bcc607 = new _93a414b82620.UrlChangeEvent(_38c7d5d2fcfc.url.href);
          _38c7d5d2fcfc.isSubframe || _38c7d5d2fcfc.frame?.dispatchEvent(_180466bcc607);
        }
        Reflect.deleteProperty(globalThis, "WASM"), Reflect.deleteProperty(globalThis, "COOKIE");
      }
    },
    1862: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        NavigateEvent: () => i,
        StudyJetContextEvent: () => s,
        StudyJetGlobalDownloadEvent: () => n,
        UrlChangeEvent: () => a
      });
      class n extends Event {
        download;
        type="download";
        constructor(_38c7d5d2fcfc) {
          super("download"), this.download = _38c7d5d2fcfc;
        }
      }
      class i extends Event {
        url;
        type="navigate";
        constructor(_38c7d5d2fcfc) {
          super("navigate"), this.url = _38c7d5d2fcfc;
        }
      }
      class a extends Event {
        url;
        type="urlchange";
        constructor(_38c7d5d2fcfc) {
          super("urlchange"), this.url = _38c7d5d2fcfc;
        }
      }
      class s extends Event {
        window;
        client;
        type="contextInit";
        constructor(_38c7d5d2fcfc, _b6f2bd98c862) {
          super("contextInit"), this.window = _38c7d5d2fcfc, this.client = _b6f2bd98c862;
        }
      }
    },
    94: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      function n(_38c7d5d2fcfc, _b6f2bd98c862) {
        return Reflect.getOwnPropertyDescriptor(_38c7d5d2fcfc, _b6f2bd98c862);
      }
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        getOwnPropertyDescriptorHandler: () => n
      });
    },
    3255: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        NavigateEvent: () => _7f05829ad9f4.NavigateEvent,
        StudyJetClient: () => _313eac335fae.StudyJetClient,
        StudyJetContextEvent: () => _7f05829ad9f4.StudyJetContextEvent,
        StudyJetGlobalDownloadEvent: () => _7f05829ad9f4.StudyJetGlobalDownloadEvent,
        StudyJetServiceWorkerRuntime: () => _bf69fdf532e4.StudyJetServiceWorkerRuntime,
        UrlChangeEvent: () => _7f05829ad9f4.UrlChangeEvent,
        createLocationProxy: () => _3ee9590bcdd1.createLocationProxy,
        getOwnPropertyDescriptorHandler: () => _93a414b82620.getOwnPropertyDescriptorHandler,
        isdedicated: () => _180466bcc607.isdedicated,
        isemulatedsw: () => _180466bcc607.isemulatedsw,
        isshared: () => _180466bcc607.isshared,
        issw: () => _180466bcc607.issw,
        iswindow: () => _180466bcc607.iswindow,
        isworker: () => _180466bcc607.isworker,
        loadAndHook: () => _180466bcc607.loadAndHook
      });
      var _313eac335fae = _1bd41f000df9(336), _180466bcc607 = _1bd41f000df9(1323), _7f05829ad9f4 = _1bd41f000df9(1862), _93a414b82620 = _1bd41f000df9(94), _3ee9590bcdd1 = _1bd41f000df9(3696), _bf69fdf532e4 = _1bd41f000df9(8409);
      _1bd41f000df9(3255);
    },
    3696: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        createLocationProxy: () => s
      });
      var _313eac335fae = _1bd41f000df9(1862), _180466bcc607 = _1bd41f000df9(1472), _7f05829ad9f4 = _1bd41f000df9(1323);
      function s(_38c7d5d2fcfc, _b6f2bd98c862) {
        let _1bd41f000df9 = _7f05829ad9f4.iswindow ? _b6f2bd98c862.Location : _b6f2bd98c862.WorkerLocation, _93a414b82620 = {};
        Object.setPrototypeOf(_93a414b82620, _1bd41f000df9.prototype), _93a414b82620.constructor = _1bd41f000df9;
        let _3ee9590bcdd1 = _7f05829ad9f4.iswindow ? _b6f2bd98c862.location : _1bd41f000df9.prototype;
        for (let _1bd41f000df9 of [ "protocol", "hash", "host", "hostname", "href", "origin", "pathname", "port", "search" ]) {
          let _180466bcc607 = _38c7d5d2fcfc.natives.call("Object.getOwnPropertyDescriptor", null, _3ee9590bcdd1, _1bd41f000df9);
          if (!_180466bcc607) continue;
          let _7f05829ad9f4 = {
            configurable: !1,
            enumerable: !0
          };
          _180466bcc607.get && (_7f05829ad9f4.get = new Proxy(_180466bcc607.get, {
            apply: () => _38c7d5d2fcfc.url[_1bd41f000df9]
          })), _180466bcc607.set && (_7f05829ad9f4.set = new Proxy(_180466bcc607.set, {
            apply(_180466bcc607, _7f05829ad9f4, _93a414b82620) {
              if ("href" === _1bd41f000df9) {
                _38c7d5d2fcfc.url = _93a414b82620[0];
                return;
              }
              if ("hash" === _1bd41f000df9) {
                _b6f2bd98c862.location.hash = _93a414b82620[0];
                let _1bd41f000df9 = new _313eac335fae.UrlChangeEvent(_38c7d5d2fcfc.url.href);
                _38c7d5d2fcfc.isSubframe || _38c7d5d2fcfc.frame?.dispatchEvent(_1bd41f000df9);
                return;
              }
              let _3ee9590bcdd1 = new URL(_38c7d5d2fcfc.url.href);
              _3ee9590bcdd1[_1bd41f000df9] = _93a414b82620[0], _38c7d5d2fcfc.url = _3ee9590bcdd1;
            }
          })), Object.defineProperty(_93a414b82620, _1bd41f000df9, _7f05829ad9f4);
        }
        return _93a414b82620.toString = new Proxy(_b6f2bd98c862.location.toString, {
          apply: () => _38c7d5d2fcfc.url.href
        }), _b6f2bd98c862.location.valueOf && (_93a414b82620.valueOf = new Proxy(_b6f2bd98c862.location.valueOf, {
          apply: () => _38c7d5d2fcfc.url.href
        })), _b6f2bd98c862.location.assign && (_93a414b82620.assign = new Proxy(_b6f2bd98c862.location.assign, {
          apply(_1bd41f000df9, _7f05829ad9f4, _93a414b82620) {
            _93a414b82620[0] = (0, _180466bcc607.Oy)(_93a414b82620[0], _38c7d5d2fcfc.meta), 
            Reflect.apply(_1bd41f000df9, _b6f2bd98c862.location, _93a414b82620);
            let _3ee9590bcdd1 = new _313eac335fae.UrlChangeEvent(_38c7d5d2fcfc.url.href);
            _38c7d5d2fcfc.isSubframe || _38c7d5d2fcfc.frame?.dispatchEvent(_3ee9590bcdd1);
          }
        })), _b6f2bd98c862.location.reload && (_93a414b82620.reload = new Proxy(_b6f2bd98c862.location.reload, {
          apply(_38c7d5d2fcfc, _1bd41f000df9, _313eac335fae) {
            Reflect.apply(_38c7d5d2fcfc, _b6f2bd98c862.location, _313eac335fae);
          }
        })), _b6f2bd98c862.location.replace && (_93a414b82620.replace = new Proxy(_b6f2bd98c862.location.replace, {
          apply(_1bd41f000df9, _7f05829ad9f4, _93a414b82620) {
            _93a414b82620[0] = (0, _180466bcc607.Oy)(_93a414b82620[0], _38c7d5d2fcfc.meta), 
            Reflect.apply(_1bd41f000df9, _b6f2bd98c862.location, _93a414b82620);
            let _3ee9590bcdd1 = new _313eac335fae.UrlChangeEvent(_38c7d5d2fcfc.url.href);
            _38c7d5d2fcfc.isSubframe || _38c7d5d2fcfc.frame?.dispatchEvent(_3ee9590bcdd1);
          }
        })), _93a414b82620;
      }
    },
    8382: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      function n(_38c7d5d2fcfc) {
        _38c7d5d2fcfc.Proxy("console.clear", {
          apply(_38c7d5d2fcfc) {
            _38c7d5d2fcfc.return(void 0);
          }
        });
        let _b6f2bd98c862 = console.log;
        _38c7d5d2fcfc.Trap("console.log", {
          set(_38c7d5d2fcfc, _b6f2bd98c862) {},
          get: _38c7d5d2fcfc => _b6f2bd98c862
        });
      }
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        default: () => n
      });
    },
    4634: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        default: () => i
      });
      var _313eac335fae = _1bd41f000df9(1472);
      function i(_38c7d5d2fcfc) {
        _38c7d5d2fcfc.Proxy("URL.createObjectURL", {
          apply(_b6f2bd98c862) {
            let _1bd41f000df9 = _b6f2bd98c862.call();
            _1bd41f000df9.startsWith("blob:") ? _b6f2bd98c862.return((0, _313eac335fae.IP)(_1bd41f000df9, _38c7d5d2fcfc.meta)) : _b6f2bd98c862.return(_1bd41f000df9);
          }
        }), _38c7d5d2fcfc.Proxy("URL.revokeObjectURL", {
          apply(_38c7d5d2fcfc) {
            _38c7d5d2fcfc.args[0] = (0, _313eac335fae.$n)(_38c7d5d2fcfc.args[0]);
          }
        });
      }
    },
    5026: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        default: () => i
      });
      var _313eac335fae = _1bd41f000df9(1472);
      function i(_38c7d5d2fcfc, _b6f2bd98c862) {
        _38c7d5d2fcfc.Proxy("CacheStorage.prototype.open", {
          apply(_b6f2bd98c862) {
            _b6f2bd98c862.args[0] = `${_38c7d5d2fcfc.url.origin}@${_b6f2bd98c862.args[0]}`;
          }
        }), _38c7d5d2fcfc.Proxy("CacheStorage.prototype.has", {
          apply(_b6f2bd98c862) {
            _b6f2bd98c862.args[0] = `${_38c7d5d2fcfc.url.origin}@${_b6f2bd98c862.args[0]}`;
          }
        }), _38c7d5d2fcfc.Proxy("CacheStorage.prototype.match", {
          apply(_b6f2bd98c862) {
            ("string" == typeof _b6f2bd98c862.args[0] || _b6f2bd98c862.args[0] instanceof URL) && (_b6f2bd98c862.args[0] = (0, 
            _313eac335fae.Oy)(_b6f2bd98c862.args[0], _38c7d5d2fcfc.meta));
          }
        }), _38c7d5d2fcfc.Proxy("CacheStorage.prototype.delete", {
          apply(_b6f2bd98c862) {
            _b6f2bd98c862.args[0] = `${_38c7d5d2fcfc.url.origin}@${_b6f2bd98c862.args[0]}`;
          }
        }), _38c7d5d2fcfc.Proxy("Cache.prototype.add", {
          apply(_b6f2bd98c862) {
            ("string" == typeof _b6f2bd98c862.args[0] || _b6f2bd98c862.args[0] instanceof URL) && (_b6f2bd98c862.args[0] = (0, 
            _313eac335fae.Oy)(_b6f2bd98c862.args[0], _38c7d5d2fcfc.meta));
          }
        }), _38c7d5d2fcfc.Proxy("Cache.prototype.addAll", {
          apply(_b6f2bd98c862) {
            for (let _1bd41f000df9 = 0; _1bd41f000df9 < _b6f2bd98c862.args[0].length; _1bd41f000df9++) ("string" == typeof _b6f2bd98c862.args[0][_1bd41f000df9] || _b6f2bd98c862.args[0][_1bd41f000df9] instanceof URL) && (_b6f2bd98c862.args[0][_1bd41f000df9] = (0, 
            _313eac335fae.Oy)(_b6f2bd98c862.args[0][_1bd41f000df9], _38c7d5d2fcfc.meta));
          }
        }), _38c7d5d2fcfc.Proxy("Cache.prototype.put", {
          apply(_b6f2bd98c862) {
            ("string" == typeof _b6f2bd98c862.args[0] || _b6f2bd98c862.args[0] instanceof URL) && (_b6f2bd98c862.args[0] = (0, 
            _313eac335fae.Oy)(_b6f2bd98c862.args[0], _38c7d5d2fcfc.meta));
          }
        }), _38c7d5d2fcfc.Proxy("Cache.prototype.match", {
          apply(_b6f2bd98c862) {
            ("string" == typeof _b6f2bd98c862.args[0] || _b6f2bd98c862.args[0] instanceof URL) && (_b6f2bd98c862.args[0] = (0, 
            _313eac335fae.Oy)(_b6f2bd98c862.args[0], _38c7d5d2fcfc.meta));
          }
        }), _38c7d5d2fcfc.Proxy("Cache.prototype.matchAll", {
          apply(_b6f2bd98c862) {
            (_b6f2bd98c862.args[0] && "string" == typeof _b6f2bd98c862.args[0] || _b6f2bd98c862.args[0] && _b6f2bd98c862.args[0] instanceof URL) && (_b6f2bd98c862.args[0] = (0, 
            _313eac335fae.Oy)(_b6f2bd98c862.args[0], _38c7d5d2fcfc.meta));
          }
        }), _38c7d5d2fcfc.Proxy("Cache.prototype.keys", {
          apply(_b6f2bd98c862) {
            (_b6f2bd98c862.args[0] && "string" == typeof _b6f2bd98c862.args[0] || _b6f2bd98c862.args[0] && _b6f2bd98c862.args[0] instanceof URL) && (_b6f2bd98c862.args[0] = (0, 
            _313eac335fae.Oy)(_b6f2bd98c862.args[0], _38c7d5d2fcfc.meta));
          }
        }), _38c7d5d2fcfc.Proxy("Cache.prototype.delete", {
          apply(_b6f2bd98c862) {
            ("string" == typeof _b6f2bd98c862.args[0] || _b6f2bd98c862.args[0] instanceof URL) && (_b6f2bd98c862.args[0] = (0, 
            _313eac335fae.Oy)(_b6f2bd98c862.args[0], _38c7d5d2fcfc.meta));
          }
        });
      }
    },
    6627: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        default: () => i
      });
      var _313eac335fae = _1bd41f000df9(1323);
      function i(_38c7d5d2fcfc, _b6f2bd98c862) {
        let r = _38c7d5d2fcfc => {
          let _1bd41f000df9 = _38c7d5d2fcfc.split("."), _313eac335fae = _1bd41f000df9.pop(), _180466bcc607 = _1bd41f000df9.reduce((_38c7d5d2fcfc, _b6f2bd98c862) => _38c7d5d2fcfc?.[_b6f2bd98c862], _b6f2bd98c862);
          _180466bcc607 && _313eac335fae && _313eac335fae in _180466bcc607 && delete _180466bcc607[_313eac335fae];
        };
        r("BarcodeDetector"), r("FaceDetector"), r("TextDetector"), _313eac335fae.iswindow && r("ServiceWorkerRegistration.prototype.sync"), 
        _313eac335fae.isemulatedsw && (r("SyncManager"), r("SyncEvent")), r("TrustedHTML"), 
        r("TrustedScript"), r("TrustedScriptURL"), r("TrustedTypePolicy"), r("TrustedTypePolicyFactory"), 
        _b6f2bd98c862.__defineGetter__("trustedTypes", () => void 0), r("Navigator.prototype.joinAdInterestGroup"), 
        _313eac335fae.iswindow && (r("MediaDevices.prototype.setCaptureHandleConfig"), r("Navigator.prototype.bluetooth"), 
        r("Bluetooth"), r("BluetoothDevice"), r("BluetoothRemoteGATTServer"), r("BluetoothRemoteGATTCharacteristic"), 
        r("BluetoothRemoteGATTDescriptor"), r("BluetoothUUID"), r("Navigator.prototype.contacts"), 
        r("ContactAddress"), r("ContactManager"), r("IdleDetector"), r("Navigator.prototype.presentation"), 
        r("Presentation"), r("PresentationConnection"), r("PresentationReceiver"), r("PresentationRequest"), 
        r("PresentationAvailability"), r("PresentationConnectionAvailableEvent"), r("PresentationConnectionCloseEvent"), 
        r("PresentationConnectionList"), r("WindowControlsOverlay"), r("WindowControlsOverlayGeometryChangeEvent"), 
        r("Navigator.prototype.windowControlsOverlay"), r("Navigator.prototype.hid"), r("HID"), 
        r("HIDDevice"), r("HIDConnectionEvent"), r("HIDInputReportEvent"), r("navigation"), 
        r("NavigateEvent"), r("NavigationActivation"), r("NavigationCurrentEntryChangeEvent"), 
        r("NavigationDestination"), r("NavigationHistoryEntry"), r("NavigationTransition"));
      }
    },
    582: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        argdbg: () => a,
        default: () => s,
        enabled: () => i
      });
      var _313eac335fae = _1bd41f000df9(37);
      let i = _38c7d5d2fcfc => (0, _313eac335fae.U5)("captureErrors", _38c7d5d2fcfc.url);
      function a(_38c7d5d2fcfc, _b6f2bd98c862 = []) {
        switch (typeof _38c7d5d2fcfc) {
         case "string":
          break;

         case "object":
          if (_38c7d5d2fcfc && _38c7d5d2fcfc[Symbol.iterator] && "function" == typeof _38c7d5d2fcfc[Symbol.iterator]) for (let _1bd41f000df9 in _38c7d5d2fcfc) {
            let _313eac335fae = Object.getOwnPropertyDescriptor(_38c7d5d2fcfc, _1bd41f000df9);
            if (_313eac335fae && _313eac335fae.get) continue;
            let _180466bcc607 = _38c7d5d2fcfc[_1bd41f000df9];
            _b6f2bd98c862.includes(_180466bcc607) || (_b6f2bd98c862.push(_180466bcc607), a(_180466bcc607, _b6f2bd98c862));
          }
        }
      }
      function s(_38c7d5d2fcfc, _b6f2bd98c862) {
        let _1bd41f000df9 = console.warn;
        _b6f2bd98c862.$scramerr = function(_38c7d5d2fcfc) {
          _1bd41f000df9("CAUGHT ERROR", _38c7d5d2fcfc);
        }, _b6f2bd98c862.$scramdbg = function(_38c7d5d2fcfc, _b6f2bd98c862) {
          return _38c7d5d2fcfc && "object" == typeof _38c7d5d2fcfc && _38c7d5d2fcfc.length > 0 && a(_38c7d5d2fcfc), 
          a(_b6f2bd98c862), _b6f2bd98c862;
        }, _38c7d5d2fcfc.Proxy("Promise.prototype.catch", {
          apply(_38c7d5d2fcfc) {
            _38c7d5d2fcfc.args[0] && (_38c7d5d2fcfc.args[0] = new Proxy(_38c7d5d2fcfc.args[0], {
              apply(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
                Reflect.apply(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9);
              }
            }));
          }
        });
      }
    },
    6143: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        default: () => s,
        enabled: () => a
      });
      var _313eac335fae = _1bd41f000df9(37), _180466bcc607 = _1bd41f000df9(1472);
      let a = _38c7d5d2fcfc => (0, _313eac335fae.U5)("cleanErrors", _38c7d5d2fcfc.url);
      function s(_38c7d5d2fcfc, _b6f2bd98c862) {
        let r = (_38c7d5d2fcfc, _b6f2bd98c862) => {
          let _1bd41f000df9 = _38c7d5d2fcfc.stack;
          for (let _38c7d5d2fcfc = 0; _38c7d5d2fcfc < _b6f2bd98c862.length; _38c7d5d2fcfc++) {
            let _7f05829ad9f4 = _b6f2bd98c862[_38c7d5d2fcfc].getFileName();
            try {
              if (_7f05829ad9f4.endsWith(_313eac335fae.$W.files.all)) {
                let _38c7d5d2fcfc = _1bd41f000df9.split("\n"), _b6f2bd98c862 = _38c7d5d2fcfc.find(_38c7d5d2fcfc => _38c7d5d2fcfc.includes(_7f05829ad9f4));
                _38c7d5d2fcfc.splice(_b6f2bd98c862, 1), _1bd41f000df9 = _38c7d5d2fcfc.join("\n");
                continue;
              }
            } catch {}
            try {
              _1bd41f000df9 = _1bd41f000df9.replaceAll(_7f05829ad9f4, (0, _180466bcc607.v2)(_7f05829ad9f4));
            } catch {}
          }
          return _1bd41f000df9;
        };
        _38c7d5d2fcfc.Trap("Error.prepareStackTrace", {
          get: _38c7d5d2fcfc => r,
          set(_38c7d5d2fcfc) {}
        });
      }
    },
    591: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        default: () => a,
        indirectEval: () => s
      });
      var _313eac335fae = _1bd41f000df9(37), _180466bcc607 = _1bd41f000df9(1478);
      function a(_38c7d5d2fcfc, _b6f2bd98c862) {
        Object.defineProperty(_b6f2bd98c862, _313eac335fae.$W.globals.rewritefn, {
          value: function(_b6f2bd98c862) {
            return "string" != typeof _b6f2bd98c862 ? _b6f2bd98c862 : (0, _180466bcc607.o)(_b6f2bd98c862, "(direct eval proxy)", _38c7d5d2fcfc.meta);
          },
          writable: !1,
          configurable: !1
        });
      }
      function s(_38c7d5d2fcfc, _b6f2bd98c862) {
        let _1bd41f000df9;
        return "string" != typeof _b6f2bd98c862 ? _b6f2bd98c862 : ("accounts.google.com" === this.url.hostname ? (console.log("USING STRICT EVAL - BOTGUARD"), 
        _1bd41f000df9 = Function(`\n\t\t\t"use strict";\n\t\t\treturn eval;\n\t\t`)) : _1bd41f000df9 = this.global.eval, 
        _1bd41f000df9((0, _180466bcc607.o)(_b6f2bd98c862, "(indirect eval proxy)", this.meta)));
      }
    },
    3481: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        default: () => o
      });
      var _313eac335fae = _1bd41f000df9(1323), _180466bcc607 = _1bd41f000df9(1472), _7f05829ad9f4 = _1bd41f000df9(94);
      let _93a414b82620 = Symbol.for("studyjet original onevent function");
      function o(_38c7d5d2fcfc, _b6f2bd98c862) {
        let _1bd41f000df9 = {
          message: {
            _init() {
              return "object" != typeof this.data || !("$studyjet$type" in this.data);
            },
            ports() {
              return this.ports;
            },
            source() {
              return null === this.source ? null : this.source;
            },
            origin() {
              return "object" == typeof this.data && "$studyjet$origin" in this.data ? this.data.$studyjet$origin : _38c7d5d2fcfc.url.origin;
            },
            data() {
              return "object" == typeof this.data && "$studyjet$data" in this.data ? this.data.$studyjet$data : this.data;
            }
          },
          hashchange: {
            oldURL() {
              return (0, _180466bcc607.v2)(this.oldURL);
            },
            newURL() {
              return (0, _180466bcc607.v2)(this.newURL);
            }
          },
          storage: {
            _init() {
              return this.key.startsWith(_38c7d5d2fcfc.url.host + "@");
            },
            key() {
              return this.key.substring(this.key.indexOf("@") + 1);
            },
            url() {
              return (0, _180466bcc607.v2)(this.url);
            }
          }
        };
        function o(_38c7d5d2fcfc) {
          return new Proxy(_38c7d5d2fcfc, {
            apply(_38c7d5d2fcfc, _313eac335fae, _180466bcc607) {
              let _93a414b82620 = _180466bcc607[0];
              if (_93a414b82620.isTrusted) {
                let _38c7d5d2fcfc = _93a414b82620.type;
                if (_38c7d5d2fcfc in _1bd41f000df9) {
                  let _b6f2bd98c862 = _1bd41f000df9[_38c7d5d2fcfc];
                  if (_b6f2bd98c862._init && !1 === _b6f2bd98c862._init.call(_93a414b82620)) return;
                  _180466bcc607[0] = new Proxy(_93a414b82620, {
                    get(_38c7d5d2fcfc, _1bd41f000df9, _313eac335fae) {
                      let _180466bcc607 = Reflect.get(_38c7d5d2fcfc, _1bd41f000df9);
                      return _1bd41f000df9 in _b6f2bd98c862 ? _b6f2bd98c862[_1bd41f000df9].call(_38c7d5d2fcfc) : "function" == typeof _180466bcc607 ? new Proxy(_180466bcc607, {
                        apply: (_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) => _b6f2bd98c862 === _313eac335fae ? Reflect.apply(_38c7d5d2fcfc, _93a414b82620, _1bd41f000df9) : Reflect.apply(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9)
                      }) : _180466bcc607;
                    },
                    getOwnPropertyDescriptor: _7f05829ad9f4.getOwnPropertyDescriptorHandler
                  });
                }
              }
              return _b6f2bd98c862.event || Object.defineProperty(_b6f2bd98c862, "event", {
                get: () => _180466bcc607[0],
                configurable: !0
              }), Reflect.apply(_38c7d5d2fcfc, _313eac335fae, _180466bcc607);
            },
            getOwnPropertyDescriptor: _7f05829ad9f4.getOwnPropertyDescriptorHandler
          });
        }
        _38c7d5d2fcfc.Proxy("EventTarget.prototype.addEventListener", {
          apply(_b6f2bd98c862) {
            if ("function" != typeof _b6f2bd98c862.args[1]) return;
            let _1bd41f000df9 = _b6f2bd98c862.args[1], _313eac335fae = o(_1bd41f000df9);
            _b6f2bd98c862.args[1] = _313eac335fae;
            let _180466bcc607 = _38c7d5d2fcfc.eventcallbacks.get(_b6f2bd98c862.this);
            (_180466bcc607 ||= []).push({
              event: _b6f2bd98c862.args[0],
              originalCallback: _1bd41f000df9,
              proxiedCallback: _313eac335fae
            }), _38c7d5d2fcfc.eventcallbacks.set(_b6f2bd98c862.this, _180466bcc607);
          }
        }), _38c7d5d2fcfc.Proxy("EventTarget.prototype.removeEventListener", {
          apply(_b6f2bd98c862) {
            if ("function" != typeof _b6f2bd98c862.args[1]) return;
            let _1bd41f000df9 = _38c7d5d2fcfc.eventcallbacks.get(_b6f2bd98c862.this);
            if (!_1bd41f000df9) return;
            let _313eac335fae = _1bd41f000df9.findIndex(_38c7d5d2fcfc => _38c7d5d2fcfc.event === _b6f2bd98c862.args[0] && _38c7d5d2fcfc.originalCallback === _b6f2bd98c862.args[1]);
            if (-1 === _313eac335fae) return;
            let _180466bcc607 = _1bd41f000df9.splice(_313eac335fae, 1);
            _38c7d5d2fcfc.eventcallbacks.set(_b6f2bd98c862.this, _1bd41f000df9), _b6f2bd98c862.args[1] = _180466bcc607[0].proxiedCallback;
          }
        });
        let _3ee9590bcdd1 = [ _b6f2bd98c862.self, _b6f2bd98c862.MessagePort.prototype ];
        for (let _180466bcc607 of (_313eac335fae.iswindow && _3ee9590bcdd1.push(_b6f2bd98c862.HTMLElement.prototype), 
        _b6f2bd98c862.Worker && _3ee9590bcdd1.push(_b6f2bd98c862.Worker.prototype), _3ee9590bcdd1)) for (let _b6f2bd98c862 of Reflect.ownKeys(_180466bcc607)) if ("string" == typeof _b6f2bd98c862 && _b6f2bd98c862.startsWith("on") && _1bd41f000df9[_b6f2bd98c862.slice(2)]) {
          let _1bd41f000df9 = _38c7d5d2fcfc.natives.call("Object.getOwnPropertyDescriptor", null, _180466bcc607, _b6f2bd98c862);
          if (!_1bd41f000df9.get || !_1bd41f000df9.set || !_1bd41f000df9.configurable) continue;
          _38c7d5d2fcfc.RawTrap(_180466bcc607, _b6f2bd98c862, {
            get(_38c7d5d2fcfc) {
              return this[_93a414b82620] ? this[_93a414b82620] : _38c7d5d2fcfc.get();
            },
            set(_38c7d5d2fcfc, _b6f2bd98c862) {
              if (this[_93a414b82620] = _b6f2bd98c862, "function" != typeof _b6f2bd98c862) return _38c7d5d2fcfc.set(_b6f2bd98c862);
              _38c7d5d2fcfc.set(o(_b6f2bd98c862));
            }
          });
        }
      }
    },
    249: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        default: () => a
      });
      var _313eac335fae = _1bd41f000df9(1478);
      function i(_38c7d5d2fcfc, _b6f2bd98c862) {
        let _1bd41f000df9 = _38c7d5d2fcfc.call().toString(), _180466bcc607 = (0, _313eac335fae.o)(`return ${_1bd41f000df9}`, "(function proxy)", _b6f2bd98c862.meta);
        _38c7d5d2fcfc.return(_38c7d5d2fcfc.fn(_180466bcc607)());
      }
      function a(_38c7d5d2fcfc, _b6f2bd98c862) {
        let _1bd41f000df9 = {
          apply(_b6f2bd98c862) {
            i(_b6f2bd98c862, _38c7d5d2fcfc);
          },
          construct(_b6f2bd98c862) {
            i(_b6f2bd98c862, _38c7d5d2fcfc);
          }
        };
        _38c7d5d2fcfc.Proxy("Function", _1bd41f000df9);
        let _313eac335fae = _38c7d5d2fcfc.natives.call("eval", null, "(function () {})").constructor, _180466bcc607 = _38c7d5d2fcfc.natives.call("eval", null, "(async function () {})").constructor, _7f05829ad9f4 = _38c7d5d2fcfc.natives.call("eval", null, "(function* () {})").constructor, _93a414b82620 = _38c7d5d2fcfc.natives.call("eval", null, "(async function* () {})").constructor;
        _38c7d5d2fcfc.RawProxy(_313eac335fae.prototype, "constructor", _1bd41f000df9), _38c7d5d2fcfc.RawProxy(_180466bcc607.prototype, "constructor", _1bd41f000df9), 
        _38c7d5d2fcfc.RawProxy(_7f05829ad9f4.prototype, "constructor", _1bd41f000df9), _38c7d5d2fcfc.RawProxy(_93a414b82620.prototype, "constructor", _1bd41f000df9);
      }
    },
    2468: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        default: () => a
      });
      var _313eac335fae = _1bd41f000df9(37), _180466bcc607 = _1bd41f000df9(1472);
      function a(_38c7d5d2fcfc, _b6f2bd98c862) {
        let _1bd41f000df9 = _38c7d5d2fcfc.natives.call("Function", null, "url", "return import(url)");
        Object.defineProperty(_b6f2bd98c862, _313eac335fae.$W.globals.importfn, {
          value: function(_b6f2bd98c862, _313eac335fae) {
            let _7f05829ad9f4 = new URL(_313eac335fae, _b6f2bd98c862).href;
            return _313eac335fae.includes(":") || _313eac335fae.startsWith("/") || _313eac335fae.startsWith(".") || _313eac335fae.startsWith("..") ? _1bd41f000df9(`${(0, 
            _180466bcc607.Oy)(_7f05829ad9f4, _38c7d5d2fcfc.meta)}?type=module`) : _1bd41f000df9(_313eac335fae);
          },
          writable: !1,
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_b6f2bd98c862, _313eac335fae.$W.globals.metafn, {
          value: function(_38c7d5d2fcfc, _b6f2bd98c862) {
            return _38c7d5d2fcfc.url = _b6f2bd98c862, _38c7d5d2fcfc.resolve = function(_38c7d5d2fcfc) {
              return new URL(_38c7d5d2fcfc, _b6f2bd98c862).href;
            }, _38c7d5d2fcfc;
          },
          writable: !1,
          configurable: !1,
          enumerable: !1
        });
      }
    },
    4338: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      function n(_38c7d5d2fcfc) {
        _38c7d5d2fcfc.Proxy("IDBFactory.prototype.open", {
          apply(_b6f2bd98c862) {
            _b6f2bd98c862.args[0] = `${_38c7d5d2fcfc.url.origin}@${_b6f2bd98c862.args[0]}`;
          }
        }), _38c7d5d2fcfc.Trap("IDBDatabase.prototype.name", {
          get(_38c7d5d2fcfc) {
            let _b6f2bd98c862 = _38c7d5d2fcfc.get();
            return _b6f2bd98c862.substring(_b6f2bd98c862.indexOf("@") + 1);
          }
        });
      }
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        default: () => n
      });
    },
    6593: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      function n(_38c7d5d2fcfc) {
        _38c7d5d2fcfc.Proxy("StorageManager.prototype.getDirectory", {
          apply(_b6f2bd98c862) {
            let _1bd41f000df9 = _b6f2bd98c862.call();
            _b6f2bd98c862.return((async () => {
              let _b6f2bd98c862 = await _1bd41f000df9, _313eac335fae = await _b6f2bd98c862.getDirectoryHandle(`${_38c7d5d2fcfc.url.origin.replace(/\/|\s|\./g, "-")}`, {
                create: !0
              });
              return Object.defineProperty(_313eac335fae, "name", {
                value: "",
                writable: !1
              }), _313eac335fae;
            })());
          }
        });
      }
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        default: () => n
      });
    },
    1320: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        default: () => s
      });
      var _313eac335fae = _1bd41f000df9(1323), _180466bcc607 = _1bd41f000df9(2794), _7f05829ad9f4 = _1bd41f000df9(1914);
      function s(_38c7d5d2fcfc) {
        _313eac335fae.iswindow && _38c7d5d2fcfc.Proxy("window.postMessage", {
          apply(_38c7d5d2fcfc) {
            let {constructor: {constructor: _b6f2bd98c862}} = "object" == typeof _38c7d5d2fcfc.args[0] && null !== _38c7d5d2fcfc.args[0] ? _38c7d5d2fcfc.args[0] : "object" == typeof _38c7d5d2fcfc.args[2] && null !== _38c7d5d2fcfc.args[2] ? _38c7d5d2fcfc.args[2] : _38c7d5d2fcfc.this && _7f05829ad9f4.POLLUTANT in _38c7d5d2fcfc.this && "object" == typeof _38c7d5d2fcfc.this[_7f05829ad9f4.POLLUTANT] && null !== _38c7d5d2fcfc.this[_7f05829ad9f4.POLLUTANT] ? _38c7d5d2fcfc.this[_7f05829ad9f4.POLLUTANT] : {}, _1bd41f000df9 = _b6f2bd98c862("return globalThis")()[_180466bcc607.pX], _313eac335fae = _b6f2bd98c862("...args", "this(...args)");
            _38c7d5d2fcfc.args[0] = {
              $studyjet$messagetype: "window",
              $studyjet$origin: _1bd41f000df9.url.origin,
              $studyjet$data: _38c7d5d2fcfc.args[0]
            }, "string" == typeof _38c7d5d2fcfc.args[1] && (_38c7d5d2fcfc.args[1] = "*"), "object" == typeof _38c7d5d2fcfc.args[1] && (_38c7d5d2fcfc.args[1].targetOrigin = "*"), 
            _38c7d5d2fcfc.return(_313eac335fae.call(_38c7d5d2fcfc.fn, ..._38c7d5d2fcfc.args));
          }
        });
        let _b6f2bd98c862 = [ "MessagePort.prototype.postMessage" ];
        self.Worker && _b6f2bd98c862.push("Worker.prototype.postMessage"), _313eac335fae.iswindow || _b6f2bd98c862.push("self.postMessage"), 
        _38c7d5d2fcfc.Proxy(_b6f2bd98c862, {
          apply(_38c7d5d2fcfc) {
            _38c7d5d2fcfc.args[0] = {
              $studyjet$messagetype: "worker",
              $studyjet$data: _38c7d5d2fcfc.args[0]
            };
          }
        });
      }
    },
    1914: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        POLLUTANT: () => _180466bcc607,
        default: () => a
      });
      var _313eac335fae = _1bd41f000df9(37);
      let _180466bcc607 = Symbol.for("studyjet realm pollutant");
      function a(_38c7d5d2fcfc, _b6f2bd98c862) {
        Object.defineProperty(_b6f2bd98c862.Object.prototype, _313eac335fae.$W.globals.setrealmfn, {
          value(_38c7d5d2fcfc) {
            return Object.defineProperty(this, _180466bcc607, {
              value: _38c7d5d2fcfc,
              writable: !1,
              configurable: !0,
              enumerable: !1
            }), this;
          },
          writable: !0,
          configurable: !0,
          enumerable: !1
        });
      }
    },
    9701: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        default: () => i
      });
      var _313eac335fae = _1bd41f000df9(1472);
      function i(_38c7d5d2fcfc) {
        _38c7d5d2fcfc.Proxy("EventSource", {
          construct(_b6f2bd98c862) {
            _b6f2bd98c862.args[0] = (0, _313eac335fae.Oy)(_b6f2bd98c862.args[0], _38c7d5d2fcfc.meta);
          }
        }), _38c7d5d2fcfc.Trap("EventSource.prototype.url", {
          get(_38c7d5d2fcfc) {
            (0, _313eac335fae.v2)(_38c7d5d2fcfc.get());
          }
        });
      }
    },
    6972: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        default: () => a
      });
      var _313eac335fae = _1bd41f000df9(1323), _180466bcc607 = _1bd41f000df9(1472);
      function a(_38c7d5d2fcfc) {
        _38c7d5d2fcfc.Proxy("fetch", {
          apply(_b6f2bd98c862) {
            ("string" == typeof _b6f2bd98c862.args[0] || _b6f2bd98c862.args[0] instanceof URL) && (_b6f2bd98c862.args[0] = (0, 
            _180466bcc607.Oy)(_b6f2bd98c862.args[0], _38c7d5d2fcfc.meta), _313eac335fae.isemulatedsw && (_b6f2bd98c862.args[0] += "?from=swruntime"));
          }
        }), _38c7d5d2fcfc.Proxy("Request", {
          construct(_b6f2bd98c862) {
            ("string" == typeof _b6f2bd98c862.args[0] || _b6f2bd98c862.args[0] instanceof URL) && (_b6f2bd98c862.args[0] = (0, 
            _180466bcc607.Oy)(_b6f2bd98c862.args[0], _38c7d5d2fcfc.meta), _313eac335fae.isemulatedsw && (_b6f2bd98c862.args[0] += "?from=swruntime"));
          }
        }), _38c7d5d2fcfc.Trap("Response.prototype.url", {
          get: _38c7d5d2fcfc => (0, _180466bcc607.v2)(_38c7d5d2fcfc.get())
        }), _38c7d5d2fcfc.Trap("Request.prototype.url", {
          get: _38c7d5d2fcfc => (0, _180466bcc607.v2)(_38c7d5d2fcfc.get())
        });
      }
    },
    9931: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      function n(_38c7d5d2fcfc, _b6f2bd98c862) {
        let _1bd41f000df9 = new WeakMap, _313eac335fae = new WeakMap;
        _38c7d5d2fcfc.Proxy("WebSocket", {
          construct(_313eac335fae) {
            let _180466bcc607 = new EventTarget;
            Object.setPrototypeOf(_180466bcc607, _313eac335fae.fn.prototype), _180466bcc607.constructor = _313eac335fae.fn;
            let _7f05829ad9f4 = _38c7d5d2fcfc.bare.createWebSocket(_313eac335fae.args[0], _313eac335fae.args[1], null, {
              "User-Agent": _b6f2bd98c862.navigator.userAgent,
              Origin: _38c7d5d2fcfc.url.origin
            }), _93a414b82620 = {
              extensions: "",
              protocol: "",
              url: _313eac335fae.args[0],
              binaryType: "blob",
              barews: _7f05829ad9f4,
              onclose: null,
              onerror: null,
              onmessage: null,
              onopen: null
            };
            function o(_38c7d5d2fcfc) {
              _93a414b82620["on" + _38c7d5d2fcfc.type]?.(new Proxy(_38c7d5d2fcfc, {
                get: (_38c7d5d2fcfc, _b6f2bd98c862) => "isTrusted" === _b6f2bd98c862 || Reflect.get(_38c7d5d2fcfc, _b6f2bd98c862)
              })), _180466bcc607.dispatchEvent(_38c7d5d2fcfc);
            }
            _7f05829ad9f4.addEventListener("open", () => {
              o(new Event("open"));
            }), _7f05829ad9f4.addEventListener("close", _38c7d5d2fcfc => {
              o(new CloseEvent("close", _38c7d5d2fcfc));
            }), _7f05829ad9f4.addEventListener("message", async _38c7d5d2fcfc => {
              let _b6f2bd98c862 = _38c7d5d2fcfc.data;
              "string" == typeof _b6f2bd98c862 || ("byteLength" in _b6f2bd98c862 ? "blob" === _93a414b82620.binaryType ? _b6f2bd98c862 = new Blob([ _b6f2bd98c862 ]) : Object.setPrototypeOf(_b6f2bd98c862, ArrayBuffer.prototype) : "arrayBuffer" in _b6f2bd98c862 && "arraybuffer" === _93a414b82620.binaryType && Object.setPrototypeOf(_b6f2bd98c862 = await _b6f2bd98c862.arrayBuffer(), ArrayBuffer.prototype)), 
              o(new MessageEvent("message", {
                data: _b6f2bd98c862,
                origin: _38c7d5d2fcfc.origin,
                lastEventId: _38c7d5d2fcfc.lastEventId,
                source: _38c7d5d2fcfc.source,
                ports: _38c7d5d2fcfc.ports
              }));
            }), _7f05829ad9f4.addEventListener("error", () => {
              o(new Event("error"));
            }), _1bd41f000df9.set(_180466bcc607, _93a414b82620), _313eac335fae.return(_180466bcc607);
          }
        }), _38c7d5d2fcfc.Trap("WebSocket.prototype.binaryType", {
          get: _38c7d5d2fcfc => _1bd41f000df9.get(_38c7d5d2fcfc.this).binaryType,
          set(_38c7d5d2fcfc, _b6f2bd98c862) {
            let _313eac335fae = _1bd41f000df9.get(_38c7d5d2fcfc.this);
            ("blob" === _b6f2bd98c862 || "arraybuffer" === _b6f2bd98c862) && (_313eac335fae.binaryType = _b6f2bd98c862);
          }
        }), _38c7d5d2fcfc.Trap("WebSocket.prototype.bufferedAmount", {
          get: () => 0
        }), _38c7d5d2fcfc.Trap("WebSocket.prototype.extensions", {
          get: _38c7d5d2fcfc => _1bd41f000df9.get(_38c7d5d2fcfc.this).extensions
        }), _38c7d5d2fcfc.Trap("WebSocket.prototype.onclose", {
          get: _38c7d5d2fcfc => _1bd41f000df9.get(_38c7d5d2fcfc.this).onclose,
          set(_38c7d5d2fcfc, _b6f2bd98c862) {
            _1bd41f000df9.get(_38c7d5d2fcfc.this).onclose = _b6f2bd98c862;
          }
        }), _38c7d5d2fcfc.Trap("WebSocket.prototype.onerror", {
          get: _38c7d5d2fcfc => _1bd41f000df9.get(_38c7d5d2fcfc.this).onerror,
          set(_38c7d5d2fcfc, _b6f2bd98c862) {
            _1bd41f000df9.get(_38c7d5d2fcfc.this).onerror = _b6f2bd98c862;
          }
        }), _38c7d5d2fcfc.Trap("WebSocket.prototype.onmessage", {
          get: _38c7d5d2fcfc => _1bd41f000df9.get(_38c7d5d2fcfc.this).onmessage,
          set(_38c7d5d2fcfc, _b6f2bd98c862) {
            _1bd41f000df9.get(_38c7d5d2fcfc.this).onmessage = _b6f2bd98c862;
          }
        }), _38c7d5d2fcfc.Trap("WebSocket.prototype.onopen", {
          get: _38c7d5d2fcfc => _1bd41f000df9.get(_38c7d5d2fcfc.this).onopen,
          set(_38c7d5d2fcfc, _b6f2bd98c862) {
            _1bd41f000df9.get(_38c7d5d2fcfc.this).onopen = _b6f2bd98c862;
          }
        }), _38c7d5d2fcfc.Trap("WebSocket.prototype.url", {
          get: _38c7d5d2fcfc => _1bd41f000df9.get(_38c7d5d2fcfc.this).url
        }), _38c7d5d2fcfc.Trap("WebSocket.prototype.protocol", {
          get: _38c7d5d2fcfc => _1bd41f000df9.get(_38c7d5d2fcfc.this).protocol
        }), _38c7d5d2fcfc.Trap("WebSocket.prototype.readyState", {
          get: _38c7d5d2fcfc => _1bd41f000df9.get(_38c7d5d2fcfc.this).barews.readyState
        }), _38c7d5d2fcfc.Proxy("WebSocket.prototype.send", {
          apply(_38c7d5d2fcfc) {
            let _b6f2bd98c862 = _1bd41f000df9.get(_38c7d5d2fcfc.this);
            _38c7d5d2fcfc.return(_b6f2bd98c862.barews.send(_38c7d5d2fcfc.args[0]));
          }
        }), _38c7d5d2fcfc.Proxy("WebSocket.prototype.close", {
          apply(_38c7d5d2fcfc) {
            let _b6f2bd98c862 = _1bd41f000df9.get(_38c7d5d2fcfc.this);
            void 0 === _38c7d5d2fcfc.args[0] && (_38c7d5d2fcfc.args[0] = 1e3), void 0 === _38c7d5d2fcfc.args[1] && (_38c7d5d2fcfc.args[1] = ""), 
            _38c7d5d2fcfc.return(_b6f2bd98c862.barews.close(_38c7d5d2fcfc.args[0], _38c7d5d2fcfc.args[1]));
          }
        }), _38c7d5d2fcfc.Proxy("WebSocketStream", {
          construct(_1bd41f000df9) {
            let _180466bcc607, _7f05829ad9f4, _93a414b82620, _3ee9590bcdd1 = {};
            Object.setPrototypeOf(_3ee9590bcdd1, _1bd41f000df9.fn.prototype), _3ee9590bcdd1.constructor = _1bd41f000df9.fn;
            let _bf69fdf532e4 = _38c7d5d2fcfc.bare.createWebSocket(_1bd41f000df9.args[0], _1bd41f000df9.args[1], null, {
              "User-Agent": _b6f2bd98c862.navigator.userAgent,
              Origin: _38c7d5d2fcfc.url.origin
            });
            _1bd41f000df9.args[1]?.signal.addEventListener("abort", () => {
              _bf69fdf532e4.close(1e3, "");
            });
            let _ef3c27203dbf = {
              extensions: "",
              protocol: "",
              url: _1bd41f000df9.args[0],
              barews: _bf69fdf532e4,
              opened: new Promise((_38c7d5d2fcfc, _b6f2bd98c862) => {
                _180466bcc607 = _38c7d5d2fcfc, _93a414b82620 = _b6f2bd98c862;
              }),
              closed: new Promise(_38c7d5d2fcfc => {
                _7f05829ad9f4 = _38c7d5d2fcfc;
              }),
              readable: new ReadableStream({
                start(_38c7d5d2fcfc) {
                  _bf69fdf532e4.addEventListener("message", async _b6f2bd98c862 => {
                    let _1bd41f000df9 = _b6f2bd98c862.data;
                    "string" == typeof _1bd41f000df9 || ("byteLength" in _1bd41f000df9 ? Object.setPrototypeOf(_1bd41f000df9, ArrayBuffer.prototype) : "arrayBuffer" in _1bd41f000df9 && Object.setPrototypeOf(_1bd41f000df9 = await _1bd41f000df9.arrayBuffer(), ArrayBuffer.prototype)), 
                    _38c7d5d2fcfc.enqueue(_1bd41f000df9);
                  });
                }
              }),
              writable: new WritableStream({
                write(_38c7d5d2fcfc) {
                  _bf69fdf532e4.send(_38c7d5d2fcfc);
                }
              })
            };
            _bf69fdf532e4.addEventListener("open", () => {
              _180466bcc607({
                readable: _ef3c27203dbf.readable,
                writable: _ef3c27203dbf.writable,
                extensions: _ef3c27203dbf.extensions,
                protocol: _ef3c27203dbf.protocol
              });
            }), _bf69fdf532e4.addEventListener("close", _38c7d5d2fcfc => {
              _7f05829ad9f4({
                code: _38c7d5d2fcfc.code,
                reason: _38c7d5d2fcfc.reason
              });
            }), _bf69fdf532e4.addEventListener("error", _38c7d5d2fcfc => {
              _93a414b82620(_38c7d5d2fcfc);
            }), _313eac335fae.set(_3ee9590bcdd1, _ef3c27203dbf), _1bd41f000df9.return(_3ee9590bcdd1);
          }
        }), _38c7d5d2fcfc.Trap("WebSocketStream.prototype.closed", {
          get: _38c7d5d2fcfc => _313eac335fae.get(_38c7d5d2fcfc.this).closed
        }), _38c7d5d2fcfc.Trap("WebSocketStream.prototype.opened", {
          get: _38c7d5d2fcfc => _313eac335fae.get(_38c7d5d2fcfc.this).opened
        }), _38c7d5d2fcfc.Trap("WebSocketStream.prototype.url", {
          get: _38c7d5d2fcfc => _313eac335fae.get(_38c7d5d2fcfc.this).url
        }), _38c7d5d2fcfc.Proxy("WebSocketStream.prototype.close", {
          apply(_38c7d5d2fcfc) {
            let _b6f2bd98c862 = _313eac335fae.get(_38c7d5d2fcfc.this);
            return _38c7d5d2fcfc.args[0] ? (void 0 === _38c7d5d2fcfc.args[0].closeCode && (_38c7d5d2fcfc.args[0].closeCode = 1e3), 
            void 0 === _38c7d5d2fcfc.args[0].reason && (_38c7d5d2fcfc.args[0].reason = ""), 
            _38c7d5d2fcfc.return(_b6f2bd98c862.barews.close(_38c7d5d2fcfc.args[0].closeCode, _38c7d5d2fcfc.args[0].reason))) : _38c7d5d2fcfc.return(_b6f2bd98c862.barews.close(1e3, ""));
          }
        });
      }
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        default: () => n
      });
    },
    248: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        default: () => a
      });
      var _313eac335fae = _1bd41f000df9(37), _180466bcc607 = _1bd41f000df9(1472);
      function a(_38c7d5d2fcfc, _b6f2bd98c862) {
        let _1bd41f000df9;
        _b6f2bd98c862.Worker && (0, _313eac335fae.U5)("syncxhr", _38c7d5d2fcfc.url) && (_1bd41f000df9 = _38c7d5d2fcfc.natives.construct("Worker", _313eac335fae.$W.files.sync));
        let _7f05829ad9f4 = Symbol("xhr original args"), _93a414b82620 = Symbol("xhr headers");
        _38c7d5d2fcfc.Proxy("XMLHttpRequest.prototype.open", {
          apply(_b6f2bd98c862) {
            _b6f2bd98c862.args[1] && (_b6f2bd98c862.args[1] = (0, _180466bcc607.Oy)(_b6f2bd98c862.args[1], _38c7d5d2fcfc.meta)), 
            void 0 === _b6f2bd98c862.args[2] && (_b6f2bd98c862.args[2] = !0), _b6f2bd98c862.this[_7f05829ad9f4] = _b6f2bd98c862.args;
          }
        }), _38c7d5d2fcfc.Proxy("XMLHttpRequest.prototype.setRequestHeader", {
          apply(_38c7d5d2fcfc) {
            (_38c7d5d2fcfc.this[_93a414b82620] || (_38c7d5d2fcfc.this[_93a414b82620] = {}))[_38c7d5d2fcfc.args[0]] = _38c7d5d2fcfc.args[1];
          }
        }), _38c7d5d2fcfc.Proxy("XMLHttpRequest.prototype.send", {
          apply(_b6f2bd98c862) {
            let _180466bcc607 = _b6f2bd98c862.this[_7f05829ad9f4];
            if (!_180466bcc607 || _180466bcc607[2]) return;
            if (!(0, _313eac335fae.U5)("syncxhr", _38c7d5d2fcfc.url)) return console.warn("ignoring request - sync xhr disabled in flags"), 
            _b6f2bd98c862.return(void 0);
            let _3ee9590bcdd1 = new SharedArrayBuffer(1024, {
              maxByteLength: 2147483647
            }), _bf69fdf532e4 = new DataView(_3ee9590bcdd1);
            _38c7d5d2fcfc.natives.call("Worker.prototype.postMessage", _1bd41f000df9, {
              sab: _3ee9590bcdd1,
              args: _180466bcc607,
              headers: _b6f2bd98c862.this[_93a414b82620],
              body: _b6f2bd98c862.args[0]
            });
            let _ef3c27203dbf = performance.now();
            for (;0 === _bf69fdf532e4.getUint8(0); ) if (performance.now() - _ef3c27203dbf > 1e3) throw Error("xhr timeout");
            let _c20fa90a80b7 = _bf69fdf532e4.getUint16(1), _eb5e33ca1634 = _bf69fdf532e4.getUint32(3), _8aa5e5cf048b = new Uint8Array(_eb5e33ca1634);
            _8aa5e5cf048b.set(new Uint8Array(_3ee9590bcdd1.slice(7, 7 + _eb5e33ca1634)));
            let _e25772762281 = (new TextDecoder).decode(_8aa5e5cf048b), _6b23ce5f34cb = _bf69fdf532e4.getUint32(7 + _eb5e33ca1634), _5e9d93e0c4ea = new Uint8Array(_6b23ce5f34cb);
            _5e9d93e0c4ea.set(new Uint8Array(_3ee9590bcdd1.slice(11 + _eb5e33ca1634, 11 + _eb5e33ca1634 + _6b23ce5f34cb)));
            let _c8669f180c95 = (new TextDecoder).decode(_5e9d93e0c4ea);
            _38c7d5d2fcfc.RawTrap(_b6f2bd98c862.this, "status", {
              get: () => _c20fa90a80b7
            }), _38c7d5d2fcfc.RawTrap(_b6f2bd98c862.this, "responseText", {
              get: () => _c8669f180c95
            }), _38c7d5d2fcfc.RawTrap(_b6f2bd98c862.this, "response", {
              get: () => "arraybuffer" === _b6f2bd98c862.this.responseType ? _5e9d93e0c4ea.buffer : _c8669f180c95
            }), _38c7d5d2fcfc.RawTrap(_b6f2bd98c862.this, "responseXML", {
              get: () => (new DOMParser).parseFromString(_c8669f180c95, "text/xml")
            }), _38c7d5d2fcfc.RawTrap(_b6f2bd98c862.this, "getAllResponseHeaders", {
              get: () => () => _e25772762281
            }), _38c7d5d2fcfc.RawTrap(_b6f2bd98c862.this, "getResponseHeader", {
              get: () => _38c7d5d2fcfc => {
                let _b6f2bd98c862 = RegExp(`^${_38c7d5d2fcfc}: (.*)$`, "m").exec(_e25772762281);
                return _b6f2bd98c862 ? _b6f2bd98c862[1] : null;
              }
            }), _b6f2bd98c862.return(void 0);
          }
        }), _38c7d5d2fcfc.Trap("XMLHttpRequest.prototype.responseURL", {
          get: _38c7d5d2fcfc => (0, _180466bcc607.v2)(_38c7d5d2fcfc.get())
        });
      }
    },
    7418: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        default: () => i
      });
      var _313eac335fae = _1bd41f000df9(1478);
      function i(_38c7d5d2fcfc, _b6f2bd98c862) {
        _38c7d5d2fcfc.Proxy([ "setTimeout", "setInterval" ], {
          apply(_b6f2bd98c862) {
            _b6f2bd98c862.args.length > 0 && "string" == typeof _b6f2bd98c862.args[0] && (_b6f2bd98c862.args[0] = (0, 
            _313eac335fae.o)(_b6f2bd98c862.args[0], "(setTimeout string eval)", _38c7d5d2fcfc.meta));
          }
        });
      }
    },
    7791: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        default: () => o,
        enabled: () => s
      });
      var _313eac335fae = _1bd41f000df9(37), _180466bcc607 = _1bd41f000df9(8665).A;
      let _7f05829ad9f4 = "/*scramtag ", s = _38c7d5d2fcfc => (0, _313eac335fae.U5)("sourcemaps", _38c7d5d2fcfc.url);
      function o(_38c7d5d2fcfc, _b6f2bd98c862) {
        Object.defineProperty(_b6f2bd98c862, _313eac335fae.$W.globals.pushsourcemapfn, {
          value: (_b6f2bd98c862, _1bd41f000df9) => {
            let _313eac335fae = performance.now();
            !function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
              let _313eac335fae = Uint8Array.from(_b6f2bd98c862), _180466bcc607 = new DataView(_313eac335fae.buffer), _7f05829ad9f4 = new TextDecoder("utf-8"), _93a414b82620 = [], _3ee9590bcdd1 = _180466bcc607.getUint32(0, !0), _bf69fdf532e4 = 4;
              for (let _38c7d5d2fcfc = 0; _38c7d5d2fcfc < _3ee9590bcdd1; _38c7d5d2fcfc++) {
                let _38c7d5d2fcfc = _180466bcc607.getUint32(_bf69fdf532e4, !0);
                _bf69fdf532e4 += 4;
                let _b6f2bd98c862 = _180466bcc607.getUint32(_bf69fdf532e4, !0);
                _bf69fdf532e4 += 4;
                let _1bd41f000df9 = _180466bcc607.getUint8(_bf69fdf532e4);
                if (_bf69fdf532e4 += 1, 0 == _1bd41f000df9) _93a414b82620.push({
                  type: _1bd41f000df9,
                  start: _38c7d5d2fcfc,
                  size: _b6f2bd98c862
                }); else if (1 == _1bd41f000df9) {
                  let _3ee9590bcdd1 = _38c7d5d2fcfc + _b6f2bd98c862, _ef3c27203dbf = _180466bcc607.getUint32(_bf69fdf532e4, !0);
                  _bf69fdf532e4 += 4;
                  let _c20fa90a80b7 = _7f05829ad9f4.decode(_313eac335fae.subarray(_bf69fdf532e4, _bf69fdf532e4 + _ef3c27203dbf));
                  _93a414b82620.push({
                    type: _1bd41f000df9,
                    start: _38c7d5d2fcfc,
                    end: _3ee9590bcdd1,
                    str: _c20fa90a80b7
                  });
                }
              }
              _38c7d5d2fcfc.box.sourcemaps[_1bd41f000df9] = _93a414b82620;
            }(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9), _180466bcc607.time(_38c7d5d2fcfc.meta, _313eac335fae, `scramtag parse for ${_1bd41f000df9}`);
          },
          enumerable: !1,
          writable: !1,
          configurable: !1
        }), _38c7d5d2fcfc.Proxy("Function.prototype.toString", {
          apply(_b6f2bd98c862) {
            performance.now(), function(_38c7d5d2fcfc, _b6f2bd98c862) {
              let _1bd41f000df9 = _b6f2bd98c862.fn.call(_b6f2bd98c862.this), _313eac335fae = function(_38c7d5d2fcfc) {
                let _b6f2bd98c862 = _38c7d5d2fcfc.indexOf(_7f05829ad9f4);
                if (-1 === _b6f2bd98c862) return null;
                let _1bd41f000df9 = _38c7d5d2fcfc.indexOf("*/", _b6f2bd98c862);
                if (-1 === _1bd41f000df9) throw console.log(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9), 
                Error("unreachable");
                let _313eac335fae = _38c7d5d2fcfc.substring(_b6f2bd98c862 + 2, _1bd41f000df9).split(" ");
                if (3 !== _313eac335fae.length || "scramtag" !== _313eac335fae[0] || !Number.isSafeInteger(+_313eac335fae[1])) throw console.log(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9, _313eac335fae), 
                Error("invalid tag");
                return [ _313eac335fae[2], _b6f2bd98c862, +_313eac335fae[1] ];
              }(_1bd41f000df9);
              if (!_313eac335fae) return _b6f2bd98c862.return(_1bd41f000df9);
              let [_180466bcc607, _93a414b82620, _3ee9590bcdd1] = _313eac335fae, _bf69fdf532e4 = _3ee9590bcdd1 - _93a414b82620, _ef3c27203dbf = _bf69fdf532e4 + _1bd41f000df9.length, _c20fa90a80b7 = _38c7d5d2fcfc.box.sourcemaps[_180466bcc607];
              if (!_c20fa90a80b7) return console.warn("failed to get rewrites for tag", _180466bcc607), 
              _b6f2bd98c862.return(_1bd41f000df9);
              let _eb5e33ca1634 = 0;
              for (;_eb5e33ca1634 < _c20fa90a80b7.length; ) if (_c20fa90a80b7[_eb5e33ca1634].start < _bf69fdf532e4) _eb5e33ca1634++; else break;
              let _8aa5e5cf048b = _eb5e33ca1634;
              for (;_8aa5e5cf048b < _c20fa90a80b7.length; ) if (function(_38c7d5d2fcfc) {
                if (0 === _38c7d5d2fcfc.type) return _38c7d5d2fcfc.start + _38c7d5d2fcfc.size;
                if (1 === _38c7d5d2fcfc.type) return _38c7d5d2fcfc.end;
                throw "unreachable";
              }(_c20fa90a80b7[_8aa5e5cf048b]) < _ef3c27203dbf) _8aa5e5cf048b++; else break;
              let _e25772762281 = _c20fa90a80b7.slice(_eb5e33ca1634, _8aa5e5cf048b), _6b23ce5f34cb = "", _5e9d93e0c4ea = 0;
              for (let _38c7d5d2fcfc of _e25772762281) if (_6b23ce5f34cb += _1bd41f000df9.slice(_5e9d93e0c4ea, _38c7d5d2fcfc.start - _bf69fdf532e4), 
              0 === _38c7d5d2fcfc.type) _5e9d93e0c4ea = _38c7d5d2fcfc.start + _38c7d5d2fcfc.size - _bf69fdf532e4; else if (1 === _38c7d5d2fcfc.type) _6b23ce5f34cb += _38c7d5d2fcfc.str, 
              _5e9d93e0c4ea = _38c7d5d2fcfc.end - _bf69fdf532e4; else throw "unreachable";
              _6b23ce5f34cb += _1bd41f000df9.slice(_5e9d93e0c4ea), _6b23ce5f34cb = _6b23ce5f34cb.replace(`${_7f05829ad9f4}${_3ee9590bcdd1} ${_180466bcc607}*/`, ""), 
              _b6f2bd98c862.return(_6b23ce5f34cb);
            }(_38c7d5d2fcfc, _b6f2bd98c862);
          }
        });
      }
    },
    9399: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        default: () => a
      });
      var _313eac335fae = _1bd41f000df9(4110), _180466bcc607 = _1bd41f000df9(1472);
      function a(_38c7d5d2fcfc, _b6f2bd98c862) {
        _38c7d5d2fcfc.Proxy("Worker", {
          construct(_b6f2bd98c862) {
            _b6f2bd98c862.args[0] = (0, _180466bcc607.Oy)(_b6f2bd98c862.args[0], _38c7d5d2fcfc.meta) + "?dest=worker", 
            _b6f2bd98c862.args[1] && "module" === _b6f2bd98c862.args[1].type && (_b6f2bd98c862.args[0] += "&type=module");
            let _1bd41f000df9 = _b6f2bd98c862.call(), _7f05829ad9f4 = new _313eac335fae.DD;
            (async () => {
              let _b6f2bd98c862 = await _7f05829ad9f4.getInnerPort();
              _38c7d5d2fcfc.natives.call("Worker.prototype.postMessage", _1bd41f000df9, {
                $studyjet$type: "baremuxinit",
                port: _b6f2bd98c862
              }, [ _b6f2bd98c862 ]);
            })();
          }
        }), _38c7d5d2fcfc.Proxy("SharedWorker", {
          construct(_b6f2bd98c862) {
            _b6f2bd98c862.args[0] = (0, _180466bcc607.Oy)(_b6f2bd98c862.args[0], _38c7d5d2fcfc.meta) + "?dest=sharedworker", 
            _b6f2bd98c862.args[1] && "string" == typeof _b6f2bd98c862.args[1] && (_b6f2bd98c862.args[1] = `${_38c7d5d2fcfc.url.origin}@${_b6f2bd98c862.args[1]}`), 
            _b6f2bd98c862.args[1] && "object" == typeof _b6f2bd98c862.args[1] && ("module" === _b6f2bd98c862.args[1].type && (_b6f2bd98c862.args[0] += "&type=module"), 
            _b6f2bd98c862.args[1].name && (_b6f2bd98c862.args[1].name = `${_38c7d5d2fcfc.url.origin}@${_b6f2bd98c862.args[1].name}`));
            let _1bd41f000df9 = _b6f2bd98c862.call(), _7f05829ad9f4 = new _313eac335fae.DD;
            (async () => {
              let _b6f2bd98c862 = await _7f05829ad9f4.getInnerPort();
              _38c7d5d2fcfc.natives.call("MessagePort.prototype.postMessage", _1bd41f000df9.port, {
                $studyjet$type: "baremuxinit",
                port: _b6f2bd98c862
              }, [ _b6f2bd98c862 ]);
            })();
          }
        }), _38c7d5d2fcfc.Proxy("Worklet.prototype.addModule", {
          apply(_b6f2bd98c862) {
            _b6f2bd98c862.args[0] && (_b6f2bd98c862.args[0] = (0, _180466bcc607.Oy)(_b6f2bd98c862.args[0], _38c7d5d2fcfc.meta) + "?dest=worklet");
          }
        });
      }
    },
    581: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        createWrapFn: () => o,
        default: () => c,
        order: () => _3ee9590bcdd1
      });
      var _313eac335fae = _1bd41f000df9(1323), _180466bcc607 = _1bd41f000df9(2794), _7f05829ad9f4 = _1bd41f000df9(37), _93a414b82620 = _1bd41f000df9(591);
      function o(_38c7d5d2fcfc, _b6f2bd98c862) {
        return function(_1bd41f000df9, _7f05829ad9f4) {
          if (_1bd41f000df9 === _b6f2bd98c862.location) return _38c7d5d2fcfc.locationProxy;
          if (_1bd41f000df9 === _b6f2bd98c862.eval) return _93a414b82620.indirectEval.bind(_38c7d5d2fcfc, _7f05829ad9f4);
          if (_313eac335fae.iswindow) {
            if (_1bd41f000df9 === _b6f2bd98c862.parent) if (_180466bcc607.pX in _b6f2bd98c862.parent) return _b6f2bd98c862.parent; else return _b6f2bd98c862; else if (_1bd41f000df9 === _b6f2bd98c862.top) {
              let _38c7d5d2fcfc = _b6f2bd98c862;
              for (;;) {
                let _b6f2bd98c862 = _38c7d5d2fcfc.parent.self;
                if (_b6f2bd98c862 === _38c7d5d2fcfc || !(_180466bcc607.pX in _b6f2bd98c862)) break;
                _38c7d5d2fcfc = _b6f2bd98c862;
              }
              return _38c7d5d2fcfc;
            }
          }
          return _1bd41f000df9;
        };
      }
      let _3ee9590bcdd1 = 4;
      function c(_38c7d5d2fcfc, _b6f2bd98c862) {
        Object.defineProperty(_b6f2bd98c862, _7f05829ad9f4.$W.globals.wrapfn, {
          value: _38c7d5d2fcfc.wrapfn,
          writable: !1,
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_b6f2bd98c862, _7f05829ad9f4.$W.globals.wrappropertyfn, {
          value: function(_38c7d5d2fcfc) {
            return "location" === _38c7d5d2fcfc || "parent" === _38c7d5d2fcfc || "top" === _38c7d5d2fcfc || "eval" === _38c7d5d2fcfc ? _7f05829ad9f4.$W.globals.wrappropertybase + _38c7d5d2fcfc : _38c7d5d2fcfc;
          },
          writable: !1,
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_b6f2bd98c862, _7f05829ad9f4.$W.globals.cleanrestfn, {
          value: function(_38c7d5d2fcfc) {},
          writable: !1,
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_b6f2bd98c862.Object.prototype, _7f05829ad9f4.$W.globals.wrappropertybase + "location", {
          get: function() {
            return this === _b6f2bd98c862 || this === _b6f2bd98c862.document ? _38c7d5d2fcfc.locationProxy : this.location;
          },
          set(_1bd41f000df9) {
            if (this === _b6f2bd98c862 || this === _b6f2bd98c862.document) {
              _38c7d5d2fcfc.url = _1bd41f000df9;
              return;
            }
            this.location = _1bd41f000df9;
          },
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_b6f2bd98c862.Object.prototype, _7f05829ad9f4.$W.globals.wrappropertybase + "parent", {
          get: function() {
            return _38c7d5d2fcfc.wrapfn(this.parent, !1);
          },
          set(_38c7d5d2fcfc) {
            this.parent = _38c7d5d2fcfc;
          },
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_b6f2bd98c862.Object.prototype, _7f05829ad9f4.$W.globals.wrappropertybase + "top", {
          get: function() {
            return _38c7d5d2fcfc.wrapfn(this.top, !1);
          },
          set(_38c7d5d2fcfc) {
            this.top = _38c7d5d2fcfc;
          },
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_b6f2bd98c862.Object.prototype, _7f05829ad9f4.$W.globals.wrappropertybase + "eval", {
          get: function() {
            return _38c7d5d2fcfc.wrapfn(this.eval, !0);
          },
          set(_38c7d5d2fcfc) {
            this.eval = _38c7d5d2fcfc;
          },
          configurable: !1,
          enumerable: !1
        }), _b6f2bd98c862.$scramitize = function(_38c7d5d2fcfc) {
          return location, _313eac335fae.iswindow && _b6f2bd98c862.top, "string" == typeof _38c7d5d2fcfc && _38c7d5d2fcfc.includes("studyjet"), 
          "string" == typeof _38c7d5d2fcfc && _38c7d5d2fcfc.includes(location.origin), _38c7d5d2fcfc;
        }, Object.defineProperty(_b6f2bd98c862, _7f05829ad9f4.$W.globals.trysetfn, {
          value: function(_1bd41f000df9, _313eac335fae, _180466bcc607) {
            return _1bd41f000df9 instanceof _b6f2bd98c862.Location && (_38c7d5d2fcfc.locationProxy.href = _180466bcc607, 
            !0);
          },
          writable: !1,
          configurable: !1
        });
      }
    },
    1229: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        SingletonBox: () => n
      });
      class n {
        ownerclient;
        clients=[];
        globals=new Map;
        documents=new Map;
        locations=new Map;
        sourcemaps={};
        constructor(_38c7d5d2fcfc) {
          this.ownerclient = _38c7d5d2fcfc;
        }
        registerClient(_38c7d5d2fcfc, _b6f2bd98c862) {
          this.clients.push(_38c7d5d2fcfc), this.globals.set(_b6f2bd98c862, _38c7d5d2fcfc), 
          this.documents.set(_b6f2bd98c862.document, _38c7d5d2fcfc), this.locations.set(_b6f2bd98c862.location, _38c7d5d2fcfc);
        }
      }
    },
    8409: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        StudyJetServiceWorkerRuntime: () => a
      });
      var _313eac335fae = _1bd41f000df9(1472), _180466bcc607 = _1bd41f000df9(8665).A;
      class a {
        client;
        recvport;
        constructor(_38c7d5d2fcfc) {
          this.client = _38c7d5d2fcfc, self.onconnect = _b6f2bd98c862 => {
            let _1bd41f000df9 = _b6f2bd98c862.ports[0];
            _180466bcc607.log("sw", "connected"), _1bd41f000df9.addEventListener("message", _b6f2bd98c862 => {
              console.log("sw", _b6f2bd98c862.data), "studyjet$type" in _b6f2bd98c862.data && ("init" === _b6f2bd98c862.data.studyjet$type ? (this.recvport = _b6f2bd98c862.data.studyjet$port, 
              this.recvport.postMessage({
                studyjet$type: "init"
              })) : s.call(this, _38c7d5d2fcfc, _b6f2bd98c862.data));
            }), _1bd41f000df9.start();
          };
        }
        hook() {
          this.client.global.registration = {
            scope: this.client.url.href,
            active: {
              scriptURL: this.client.url.href,
              state: "activated",
              onstatechange: null,
              onerror: null,
              postMessage: () => {},
              addEventListener: () => {},
              removeEventListener: () => {},
              dispatchEvent: _38c7d5d2fcfc => !1
            },
            showNotification: async () => {},
            unregister: async () => !0,
            update: async () => {},
            installing: null,
            waiting: null
          }, this.client.global.ServiceWorkerGlobalScope = this.client.global;
        }
      }
      function s(_38c7d5d2fcfc, _b6f2bd98c862) {
        let _1bd41f000df9 = this.recvport, _7f05829ad9f4 = _b6f2bd98c862.studyjet$type, _93a414b82620 = _b6f2bd98c862.studyjet$token, _3ee9590bcdd1 = _38c7d5d2fcfc.eventcallbacks.get(self);
        if ("fetch" === _7f05829ad9f4) {
          _180466bcc607.log("ee", _b6f2bd98c862);
          let _7f05829ad9f4 = _3ee9590bcdd1.filter(_38c7d5d2fcfc => "fetch" === _38c7d5d2fcfc.event);
          if (!_7f05829ad9f4) return;
          for (let _3ee9590bcdd1 of _7f05829ad9f4) {
            let _7f05829ad9f4 = _b6f2bd98c862.studyjet$request, _bf69fdf532e4 = new _38c7d5d2fcfc.natives.Request((0, 
            _313eac335fae.v2)(_7f05829ad9f4.url), {
              body: _7f05829ad9f4.body,
              headers: new Headers(_7f05829ad9f4.headers),
              method: _7f05829ad9f4.method,
              mode: "same-origin"
            });
            Object.defineProperty(_bf69fdf532e4, "destination", {
              value: _7f05829ad9f4.destinitation
            });
            let _ef3c27203dbf = new Event("fetch");
            _ef3c27203dbf.request = _bf69fdf532e4;
            let _c20fa90a80b7 = !1;
            _ef3c27203dbf.respondWith = _38c7d5d2fcfc => {
              _c20fa90a80b7 = !0, (async () => {
                let _b6f2bd98c862 = {
                  studyjet$type: "fetch",
                  studyjet$token: _93a414b82620,
                  studyjet$response: {
                    body: (_38c7d5d2fcfc = await _38c7d5d2fcfc).body,
                    headers: Array.from(_38c7d5d2fcfc.headers.entries()),
                    status: _38c7d5d2fcfc.status,
                    statusText: _38c7d5d2fcfc.statusText
                  }
                };
                _180466bcc607.log("sw", "responding", _b6f2bd98c862), _1bd41f000df9.postMessage(_b6f2bd98c862, [ _38c7d5d2fcfc.body ]);
              })();
            }, _180466bcc607.log("to fn", _ef3c27203dbf), _3ee9590bcdd1.proxiedCallback(new Proxy(_ef3c27203dbf, {
              get: (_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) => "isTrusted" === _b6f2bd98c862 || Reflect.get(_38c7d5d2fcfc, _b6f2bd98c862)
            })), _c20fa90a80b7 || (console.log("sw", "no response"), _1bd41f000df9.postMessage({
              studyjet$type: "fetch",
              studyjet$token: _93a414b82620,
              studyjet$response: !1
            }));
          }
        }
      }
    },
    9353: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        default: () => i
      });
      var _313eac335fae = _1bd41f000df9(1472);
      function i(_38c7d5d2fcfc) {
        _38c7d5d2fcfc.Proxy("importScripts", {
          apply(_b6f2bd98c862) {
            for (let _1bd41f000df9 in _b6f2bd98c862.args) _b6f2bd98c862.args[_1bd41f000df9] = (0, 
            _313eac335fae.Oy)(_b6f2bd98c862.args[_1bd41f000df9], _38c7d5d2fcfc.meta);
          }
        });
      }
    },
    3402: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.d(_b6f2bd98c862, {
        q: () => l
      });
      var _313eac335fae = _1bd41f000df9(37), _180466bcc607 = _1bd41f000df9(4869), _7f05829ad9f4 = _1bd41f000df9(6570), _93a414b82620 = _1bd41f000df9(1862), _3ee9590bcdd1 = _1bd41f000df9(8665).A;
      class l extends EventTarget {
        db;
        constructor(_38c7d5d2fcfc) {
          super();
          const t = (_38c7d5d2fcfc, _b6f2bd98c862) => {
            for (let _1bd41f000df9 in _b6f2bd98c862) _b6f2bd98c862[_1bd41f000df9] instanceof Object && _1bd41f000df9 in _38c7d5d2fcfc && Object.assign(_b6f2bd98c862[_1bd41f000df9], t(_38c7d5d2fcfc[_1bd41f000df9], _b6f2bd98c862[_1bd41f000df9]));
            return Object.assign(_38c7d5d2fcfc || {}, _b6f2bd98c862);
          }, _b6f2bd98c862 = t({
            prefix: "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/studyjet/",
            globals: {
              wrapfn: "$studyjet$wrap",
              wrappropertybase: "$studyjet__",
              wrappropertyfn: "$studyjet$prop",
              cleanrestfn: "$studyjet$clean",
              importfn: "$studyjet$import",
              rewritefn: "$studyjet$rewrite",
              metafn: "$studyjet$meta",
              setrealmfn: "$studyjet$setrealm",
              pushsourcemapfn: "$studyjet$pushsourcemap",
              trysetfn: "$studyjet$tryset",
              templocid: "$studyjet$temploc",
              tempunusedid: "$studyjet$tempunused"
            },
            files: {
              wasm: "/studyjet.wasm.wasm",
              all: "/studyjet.all.js",
              sync: "/studyjet.sync.js"
            },
            flags: {
              serviceworkers: !1,
              syncxhr: !1,
              strictRewrites: !0,
              rewriterLogs: !1,
              captureErrors: !0,
              cleanErrors: !1,
              scramitize: !1,
              sourcemaps: !0,
              destructureRewrites: !1,
              interceptDownloads: !1,
              allowInvalidJs: !0,
              allowFailedIntercepts: !0
            },
            siteFlags: {},
            codec: {
              encode: _38c7d5d2fcfc => _38c7d5d2fcfc ? encodeURIComponent(_38c7d5d2fcfc) : _38c7d5d2fcfc,
              decode: _38c7d5d2fcfc => _38c7d5d2fcfc ? decodeURIComponent(_38c7d5d2fcfc) : _38c7d5d2fcfc
            }
          }, _38c7d5d2fcfc);
          _b6f2bd98c862.codec.encode = _b6f2bd98c862.codec.encode.toString(), _b6f2bd98c862.codec.decode = _b6f2bd98c862.codec.decode.toString(), 
          (0, _313eac335fae.Nk)(_b6f2bd98c862);
        }
        async init() {
          (0, _313eac335fae.Ec)(), await this.openIDB(), navigator.serviceWorker.controller?.postMessage({
            studyjet$type: "loadConfig",
            config: _313eac335fae.$W
          }), _3ee9590bcdd1.log("config loaded"), navigator.serviceWorker.addEventListener("message", _38c7d5d2fcfc => {
            if (!("studyjet$type" in _38c7d5d2fcfc.data)) return;
            let _b6f2bd98c862 = _38c7d5d2fcfc.data;
            "download" === _b6f2bd98c862.studyjet$type && this.dispatchEvent(new _93a414b82620.StudyJetGlobalDownloadEvent(_b6f2bd98c862.download));
          });
        }
        createFrame(_38c7d5d2fcfc) {
          return _38c7d5d2fcfc || (_38c7d5d2fcfc = document.createElement("iframe")), new _180466bcc607.X(this, _38c7d5d2fcfc);
        }
        encodeUrl(_38c7d5d2fcfc) {
          if ("string" == typeof _38c7d5d2fcfc && (_38c7d5d2fcfc = new URL(_38c7d5d2fcfc)), 
          "http:" != _38c7d5d2fcfc.protocol && "https:" != _38c7d5d2fcfc.protocol) return _38c7d5d2fcfc.href;
          let _b6f2bd98c862 = (0, _313eac335fae.hD)(_38c7d5d2fcfc.hash.slice(1));
          return _38c7d5d2fcfc.hash = "", _313eac335fae.$W.prefix + (0, _313eac335fae.hD)(_38c7d5d2fcfc.href) + (_b6f2bd98c862 ? "#" + _b6f2bd98c862 : "");
        }
        decodeUrl(_38c7d5d2fcfc) {
          _38c7d5d2fcfc instanceof URL && (_38c7d5d2fcfc = _38c7d5d2fcfc.toString());
          let _b6f2bd98c862 = location.origin + _313eac335fae.$W.prefix;
          return (0, _313eac335fae.P_)(_38c7d5d2fcfc.slice(_b6f2bd98c862.length));
        }
        async openIDB() {
          let _38c7d5d2fcfc = await (0, _7f05829ad9f4.P2)("@d7a6431b92e", 1, {
            upgrade(_38c7d5d2fcfc) {
              _38c7d5d2fcfc.objectStoreNames.contains("config") || _38c7d5d2fcfc.createObjectStore("config"), 
              _38c7d5d2fcfc.objectStoreNames.contains("cookies") || _38c7d5d2fcfc.createObjectStore("cookies"), 
              _38c7d5d2fcfc.objectStoreNames.contains("redirectTrackers") || _38c7d5d2fcfc.createObjectStore("redirectTrackers"), 
              _38c7d5d2fcfc.objectStoreNames.contains("referrerPolicies") || _38c7d5d2fcfc.createObjectStore("referrerPolicies"), 
              _38c7d5d2fcfc.objectStoreNames.contains("publicSuffixList") || _38c7d5d2fcfc.createObjectStore("publicSuffixList");
            }
          });
          return this.db = _38c7d5d2fcfc, await this.#_38c7d5d2fcfc(), _38c7d5d2fcfc;
        }
        async #_38c7d5d2fcfc() {
          this.db ? await this.db.put("config", _313eac335fae.$W, "config") : console.error("Store not ready!");
        }
        async modifyConfig(_38c7d5d2fcfc) {
          (0, _313eac335fae.Nk)(Object.assign({}, _313eac335fae.$W, _38c7d5d2fcfc)), (0, _313eac335fae.Ec)(), 
          await this.#_38c7d5d2fcfc(), navigator.serviceWorker.controller?.postMessage({
            studyjet$type: "loadConfig",
            config: _313eac335fae.$W
          });
        }
        addEventListener(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
          super.addEventListener(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9);
        }
      }
    },
    4869: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.d(_b6f2bd98c862, {
        X: () => a
      });
      var _313eac335fae = _1bd41f000df9(2794), _180466bcc607 = _1bd41f000df9(8665).A;
      class a extends EventTarget {
        controller;
        frame;
        constructor(_38c7d5d2fcfc, _b6f2bd98c862) {
          super(), this.controller = _38c7d5d2fcfc, this.frame = _b6f2bd98c862, _b6f2bd98c862.name = `${Array(8).fill(0).map(() => Math.floor(36 * Math.random()).toString(36)).join("")}`, 
          _b6f2bd98c862[_313eac335fae.zr] = this;
        }
        get client() {
          return this.frame.contentWindow.window[_313eac335fae.pX];
        }
        get url() {
          return this.client.url;
        }
        go(_38c7d5d2fcfc) {
          _38c7d5d2fcfc instanceof URL && (_38c7d5d2fcfc = _38c7d5d2fcfc.toString()), _180466bcc607.log("navigated to", _38c7d5d2fcfc), 
          this.frame.src = this.controller.encodeUrl(_38c7d5d2fcfc);
        }
        back() {
          this.frame.contentWindow?.history.back();
        }
        forward() {
          this.frame.contentWindow?.history.forward();
        }
        reload() {
          this.frame.contentWindow?.location.reload();
        }
        addEventListener(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
          super.addEventListener(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9);
        }
      }
    },
    9052: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        StudyJetController: () => _180466bcc607.q,
        StudyJetFrame: () => _313eac335fae.X
      });
      var _313eac335fae = _1bd41f000df9(4869), _180466bcc607 = _1bd41f000df9(3402);
      console.warn("you are using the last version of studyjet v1, if possible, please upgrade to v2 for better performance and more features");
    },
    8665: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.d(_b6f2bd98c862, {
        A: () => _180466bcc607
      });
      let _313eac335fae = {
        log: console.log,
        warn: console.warn,
        error: console.error,
        debug: console.debug,
        info: console.info
      }, _180466bcc607 = {
        fmt: function(_38c7d5d2fcfc, _b6f2bd98c862, ..._1bd41f000df9) {
          let _313eac335fae = Error.prepareStackTrace;
          Error.prepareStackTrace = (_38c7d5d2fcfc, _b6f2bd98c862) => {
            _b6f2bd98c862.shift(), _b6f2bd98c862.shift(), _b6f2bd98c862.shift();
            let _1bd41f000df9 = "";
            for (let _38c7d5d2fcfc = 1; _38c7d5d2fcfc < Math.min(2, _b6f2bd98c862.length); _38c7d5d2fcfc++) _b6f2bd98c862[_38c7d5d2fcfc].getFunctionName() && (_1bd41f000df9 += `${_b6f2bd98c862[_38c7d5d2fcfc].getFunctionName()} -> ` + _1bd41f000df9);
            return _1bd41f000df9 + (_b6f2bd98c862[0].getFunctionName() || "Anonymous");
          };
          let _180466bcc607 = function() {
            try {
              throw Error();
            } catch (_38c7d5d2fcfc) {
              return _38c7d5d2fcfc.stack;
            }
          }();
          Error.prepareStackTrace = _313eac335fae, this.print(_38c7d5d2fcfc, _180466bcc607, _b6f2bd98c862, ..._1bd41f000df9);
        },
        print(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9, ..._180466bcc607) {
          (_313eac335fae[_38c7d5d2fcfc] || _313eac335fae.log)(`%c${_b6f2bd98c862}%c ${_1bd41f000df9}`, `\n  \tbackground-color: ${{
            log: "#000",
            warn: "#f80",
            error: "#f00",
            debug: "transparent"
          }[_38c7d5d2fcfc]};\n  \tcolor: ${{
            log: "#fff",
            warn: "#fff",
            error: "#fff",
            debug: "gray"
          }[_38c7d5d2fcfc]};\n  \tpadding: ${{
            log: 2,
            warn: 4,
            error: 4,
            debug: 0
          }[_38c7d5d2fcfc]}px;\n  \tfont-weight: bold;\n  \tfont-family: monospace;\n  \tfont-size: 0.9em;\n  `, `${"debug" === _38c7d5d2fcfc ? "color: gray" : ""}`, ..._180466bcc607);
        },
        log: function(_38c7d5d2fcfc, ..._b6f2bd98c862) {
          this.fmt("log", _38c7d5d2fcfc, ..._b6f2bd98c862);
        },
        warn: function(_38c7d5d2fcfc, ..._b6f2bd98c862) {
          this.fmt("warn", _38c7d5d2fcfc, ..._b6f2bd98c862);
        },
        error: function(_38c7d5d2fcfc, ..._b6f2bd98c862) {
          this.fmt("error", _38c7d5d2fcfc, ..._b6f2bd98c862);
        },
        debug: function(_38c7d5d2fcfc, ..._b6f2bd98c862) {
          this.fmt("debug", _38c7d5d2fcfc, ..._b6f2bd98c862);
        },
        time(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {}
      };
    },
    3831: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.d(_b6f2bd98c862, {
        k: () => a
      });
      var _313eac335fae = _1bd41f000df9(4322), _180466bcc607 = _1bd41f000df9.n(_313eac335fae);
      class a {
        cookies={};
        setCookies(_38c7d5d2fcfc, _b6f2bd98c862) {
          for (let _1bd41f000df9 of _38c7d5d2fcfc) {
            let _38c7d5d2fcfc = _180466bcc607()(_1bd41f000df9), _313eac335fae = {
              domain: _38c7d5d2fcfc.domain,
              sameSite: _38c7d5d2fcfc.sameSite,
              ..._38c7d5d2fcfc[0]
            };
            _313eac335fae.domain || (_313eac335fae.domain = "." + _b6f2bd98c862.hostname), _313eac335fae.domain.startsWith(".") || (_313eac335fae.domain = "." + _313eac335fae.domain), 
            _313eac335fae.path || (_313eac335fae.path = "/"), _313eac335fae.sameSite || (_313eac335fae.sameSite = "lax"), 
            _313eac335fae.expires && (_313eac335fae.expires = _313eac335fae.expires.toString());
            let _7f05829ad9f4 = `${_313eac335fae.domain}@${_313eac335fae.path}@${_313eac335fae.name}`;
            this.cookies[_7f05829ad9f4] = _313eac335fae;
          }
        }
        getCookies(_38c7d5d2fcfc, _b6f2bd98c862) {
          let _1bd41f000df9 = new Date, _313eac335fae = Object.values(this.cookies), _180466bcc607 = [];
          for (let _7f05829ad9f4 of _313eac335fae) {
            if (_7f05829ad9f4.expires && new Date(_7f05829ad9f4.expires) < _1bd41f000df9) {
              delete this.cookies[`${_7f05829ad9f4.domain}@${_7f05829ad9f4.path}@${_7f05829ad9f4.name}`];
              continue;
            }
            (!_7f05829ad9f4.secure || "https:" === _38c7d5d2fcfc.protocol) && (!_7f05829ad9f4.httpOnly || !_b6f2bd98c862) && _38c7d5d2fcfc.pathname.startsWith(_7f05829ad9f4.path) && (!_7f05829ad9f4.domain.startsWith(".") || _38c7d5d2fcfc.hostname.endsWith(_7f05829ad9f4.domain.slice(1))) && _180466bcc607.push(_7f05829ad9f4);
          }
          return _180466bcc607.map(_38c7d5d2fcfc => `${_38c7d5d2fcfc.name}=${_38c7d5d2fcfc.value}`).join("; ");
        }
        load(_38c7d5d2fcfc) {
          if ("object" == typeof _38c7d5d2fcfc) return _38c7d5d2fcfc;
          this.cookies = JSON.parse(_38c7d5d2fcfc);
        }
        dump() {
          return JSON.stringify(this.cookies);
        }
      }
    },
    1427: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.d(_b6f2bd98c862, {
        u: () => n
      });
      class n {
        headers={};
        set(_38c7d5d2fcfc, _b6f2bd98c862) {
          this.headers[_38c7d5d2fcfc.toLowerCase()] = _b6f2bd98c862;
        }
      }
    },
    2393: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.d(_b6f2bd98c862, {
        V: () => _93a414b82620
      });
      var _313eac335fae = _1bd41f000df9(2614), _180466bcc607 = _1bd41f000df9(884), _7f05829ad9f4 = _1bd41f000df9(1472);
      let _93a414b82620 = [ {
        fn: (_38c7d5d2fcfc, _b6f2bd98c862) => (0, _7f05829ad9f4.Oy)(_38c7d5d2fcfc, _b6f2bd98c862),
        src: [ "embed", "script", "img", "frame", "source", "input", "track" ],
        href: [ "a", "link", "area", "use", "image" ],
        data: [ "object" ],
        action: [ "form" ],
        formaction: [ "button", "input", "textarea", "submit" ],
        poster: [ "video" ],
        "xlink:href": [ "image" ]
      }, {
        fn: (_38c7d5d2fcfc, _b6f2bd98c862) => (0, _7f05829ad9f4.Oy)(_38c7d5d2fcfc, _b6f2bd98c862),
        src: [ "iframe" ]
      }, {
        fn: (_38c7d5d2fcfc, _b6f2bd98c862) => null,
        sandbox: [ "iframe" ]
      }, {
        fn: (_38c7d5d2fcfc, _b6f2bd98c862) => _38c7d5d2fcfc.startsWith("blob:") ? (0, _7f05829ad9f4.$n)(_38c7d5d2fcfc) : (0, 
        _7f05829ad9f4.Oy)(_38c7d5d2fcfc, _b6f2bd98c862),
        src: [ "video", "audio" ]
      }, {
        fn: () => "",
        integrity: [ "script", "link" ]
      }, {
        fn: () => null,
        nonce: "*",
        csp: [ "iframe" ],
        credentialless: [ "iframe" ]
      }, {
        fn: (_38c7d5d2fcfc, _b6f2bd98c862) => (0, _180466bcc607.PV)(_38c7d5d2fcfc, _b6f2bd98c862),
        srcset: [ "img", "source" ],
        imagesrcset: [ "link" ]
      }, {
        fn: (_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) => (0, _180466bcc607.Qs)(_38c7d5d2fcfc, _1bd41f000df9, {
          origin: new URL(_b6f2bd98c862.origin.origin),
          base: new URL(_b6f2bd98c862.origin.origin)
        }, !0),
        srcdoc: [ "iframe" ]
      }, {
        fn: (_38c7d5d2fcfc, _b6f2bd98c862) => (0, _313eac335fae.s)(_38c7d5d2fcfc, _b6f2bd98c862),
        style: "*"
      }, {
        fn: (_38c7d5d2fcfc, _b6f2bd98c862) => "_top" === _38c7d5d2fcfc || "_unfencedTop" === _38c7d5d2fcfc ? _b6f2bd98c862.topFrameName : "_parent" === _38c7d5d2fcfc ? _b6f2bd98c862.parentFrameName : _38c7d5d2fcfc,
        target: [ "a", "base" ]
      } ];
    },
    37: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      let _313eac335fae, _180466bcc607, _7f05829ad9f4;
      _1bd41f000df9.d(_b6f2bd98c862, {
        $W: () => _7f05829ad9f4,
        Ec: () => o,
        Nk: () => c,
        P_: () => _180466bcc607,
        U5: () => l,
        hD: () => _313eac335fae
      }), _1bd41f000df9(2393), _1bd41f000df9(9381), _1bd41f000df9(2416);
      let _93a414b82620 = Function;
      function o() {
        _313eac335fae = _93a414b82620(`return ${_7f05829ad9f4.codec.encode}`)(), _180466bcc607 = _93a414b82620(`return ${_7f05829ad9f4.codec.decode}`)();
      }
      function l(_38c7d5d2fcfc, _b6f2bd98c862) {
        let _1bd41f000df9 = _7f05829ad9f4.flags[_38c7d5d2fcfc];
        for (let _1bd41f000df9 in _7f05829ad9f4.siteFlags) {
          let _313eac335fae = _7f05829ad9f4.siteFlags[_1bd41f000df9];
          if (new RegExp(_1bd41f000df9).test(_b6f2bd98c862.href) && _38c7d5d2fcfc in _313eac335fae) return _313eac335fae[_38c7d5d2fcfc];
        }
        return _1bd41f000df9;
      }
      function c(_38c7d5d2fcfc) {
        _7f05829ad9f4 = _38c7d5d2fcfc, o();
      }
    },
    2614: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.d(_b6f2bd98c862, {
        f: () => a,
        s: () => i
      });
      var _313eac335fae = _1bd41f000df9(1472);
      function i(_38c7d5d2fcfc, _b6f2bd98c862) {
        return s("rewrite", _38c7d5d2fcfc, _b6f2bd98c862);
      }
      function a(_38c7d5d2fcfc) {
        return s("unrewrite", _38c7d5d2fcfc);
      }
      function s(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
        return (_b6f2bd98c862 = (_b6f2bd98c862 = new String(_b6f2bd98c862).toString()).replace(/url\(['"]?(.+?)['"]?\)/gm, (_b6f2bd98c862, _180466bcc607) => {
          let _7f05829ad9f4 = "rewrite" === _38c7d5d2fcfc ? (0, _313eac335fae.Oy)(_180466bcc607.trim(), _1bd41f000df9) : (0, 
          _313eac335fae.v2)(_180466bcc607.trim());
          return _b6f2bd98c862.replace(_180466bcc607, _7f05829ad9f4);
        })).replace(/@import\s+(url\s*?\(.{0,9999}?\)|['"].{0,9999}?['"]|.{0,9999}?)($|\s|;)/gm, (_b6f2bd98c862, _180466bcc607) => _b6f2bd98c862.replace(_180466bcc607, _180466bcc607.replace(/^(url\(['"]?|['"]|)(.+?)(['"]|['"]?\)|)$/gm, (_b6f2bd98c862, _180466bcc607, _7f05829ad9f4, _93a414b82620) => {
          if (_180466bcc607.startsWith("url")) return _b6f2bd98c862;
          let _3ee9590bcdd1 = "rewrite" === _38c7d5d2fcfc ? (0, _313eac335fae.Oy)(_7f05829ad9f4.trim(), _1bd41f000df9) : (0, 
          _313eac335fae.v2)(_7f05829ad9f4.trim());
          return `${_180466bcc607}${_3ee9590bcdd1}${_93a414b82620}`;
        })));
      }
    },
    4435: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.d(_b6f2bd98c862, {
        l: () => l
      });
      var _313eac335fae = _1bd41f000df9(1472), _180466bcc607 = _1bd41f000df9(8228);
      let _7f05829ad9f4 = new Set([ "cross-origin-embedder-policy", "cross-origin-opener-policy", "cross-origin-resource-policy", "content-security-policy", "content-security-policy-report-only", "expect-ct", "feature-policy", "origin-isolation", "strict-transport-security", "upgrade-insecure-requests", "x-content-type-options", "x-download-options", "x-frame-options", "x-permitted-cross-domain-policies", "x-powered-by", "x-xss-protection", "clear-site-data" ]), _93a414b82620 = new Set([ "location", "content-location", "referer" ]);
      function o(_38c7d5d2fcfc, _b6f2bd98c862) {
        return _38c7d5d2fcfc.replace(/<(.*)>/gi, _38c7d5d2fcfc => (0, _313eac335fae.Oy)(_38c7d5d2fcfc, _b6f2bd98c862));
      }
      async function l(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9, _3ee9590bcdd1) {
        let _bf69fdf532e4 = {};
        for (let _b6f2bd98c862 in _38c7d5d2fcfc) _bf69fdf532e4[_b6f2bd98c862.toLowerCase()] = _38c7d5d2fcfc[_b6f2bd98c862];
        for (let _38c7d5d2fcfc of _7f05829ad9f4) delete _bf69fdf532e4[_38c7d5d2fcfc];
        for (let _38c7d5d2fcfc of _93a414b82620) _bf69fdf532e4[_38c7d5d2fcfc] && (_bf69fdf532e4[_38c7d5d2fcfc] = (0, 
        _313eac335fae.Oy)(_bf69fdf532e4[_38c7d5d2fcfc]?.toString(), _b6f2bd98c862));
        if ("string" == typeof _bf69fdf532e4.link ? _bf69fdf532e4.link = o(_bf69fdf532e4.link, _b6f2bd98c862) : Array.isArray(_bf69fdf532e4.link) && (_bf69fdf532e4.link = _bf69fdf532e4.link.map(_38c7d5d2fcfc => o(_38c7d5d2fcfc, _b6f2bd98c862))), 
        "string" == typeof _bf69fdf532e4.referer) {
          let _38c7d5d2fcfc = new URL(_bf69fdf532e4.referer), _1bd41f000df9 = await _3ee9590bcdd1.get(_38c7d5d2fcfc.href);
          if (_1bd41f000df9) {
            let _313eac335fae = _1bd41f000df9.policy.toLowerCase().split(",").map(_38c7d5d2fcfc => _38c7d5d2fcfc.trim());
            _313eac335fae.includes("no-referrer") || _313eac335fae.includes("no-referrer-when-downgrade") && "http:" === _b6f2bd98c862.origin.protocol && "https:" === _38c7d5d2fcfc.protocol ? delete _bf69fdf532e4.referer : _313eac335fae.includes("origin") ? _bf69fdf532e4.referer = _38c7d5d2fcfc.origin : _313eac335fae.includes("origin-when-cross-origin") ? _38c7d5d2fcfc.origin !== _b6f2bd98c862.origin.origin ? _bf69fdf532e4.referer = _38c7d5d2fcfc.origin : _bf69fdf532e4.referer = _38c7d5d2fcfc.href : _313eac335fae.includes("same-origin") ? _38c7d5d2fcfc.origin === _b6f2bd98c862.origin.origin ? _bf69fdf532e4.referer = _38c7d5d2fcfc.href : delete _bf69fdf532e4.referer : _313eac335fae.includes("strict-origin") ? "http:" === _b6f2bd98c862.origin.protocol && "https:" === _38c7d5d2fcfc.protocol ? delete _bf69fdf532e4.referer : _bf69fdf532e4.referer = _38c7d5d2fcfc.origin : _38c7d5d2fcfc.origin === _b6f2bd98c862.origin.origin ? _bf69fdf532e4.referer = _38c7d5d2fcfc.href : "http:" === _b6f2bd98c862.origin.protocol && "https:" === _38c7d5d2fcfc.protocol ? delete _bf69fdf532e4.referer : _bf69fdf532e4.referer = _38c7d5d2fcfc.origin;
          }
        }
        return "string" == typeof _bf69fdf532e4["sec-fetch-dest"] && "" === _bf69fdf532e4["sec-fetch-dest"] && (_bf69fdf532e4["sec-fetch-dest"] = "empty"), 
        "string" == typeof _bf69fdf532e4["sec-fetch-site"] && "none" !== _bf69fdf532e4["sec-fetch-site"] && ("string" == typeof _bf69fdf532e4.referer ? _bf69fdf532e4["sec-fetch-site"] = await (0, 
        _180466bcc607.ps)(_b6f2bd98c862, new URL(_bf69fdf532e4.referer), _1bd41f000df9) : (console.warn("Missing referrer header; can't rewrite sec-fetch-site properly. Falling back to unsafe deletion."), 
        delete _bf69fdf532e4["sec-fetch-site"])), _bf69fdf532e4;
      }
    },
    884: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.d(_b6f2bd98c862, {
        PV: () => m,
        Qs: () => f,
        Uk: () => h,
        nK: () => g
      });
      var _313eac335fae = _1bd41f000df9(3808), _180466bcc607 = _1bd41f000df9(8866), _7f05829ad9f4 = _1bd41f000df9(6498), _93a414b82620 = _1bd41f000df9(1472), _3ee9590bcdd1 = _1bd41f000df9(2614), _bf69fdf532e4 = _1bd41f000df9(1478), _ef3c27203dbf = _1bd41f000df9(37), _c20fa90a80b7 = _1bd41f000df9(2393), _eb5e33ca1634 = _1bd41f000df9(8665).A;
      function h(_38c7d5d2fcfc, _b6f2bd98c862) {
        let _1bd41f000df9 = JSON.stringify(_38c7d5d2fcfc.dump()), _313eac335fae = `\n\t\tself.COOKIE = ${_1bd41f000df9};\n\t\t$studyjetLoadClient().loadAndHook(${JSON.stringify(_ef3c27203dbf.$W)});\n\t\tif ("document" in self && document?.currentScript) {\n\t\t\tdocument.currentScript.remove();\n\t\t}\n\t`, _180466bcc607 = y(_8aa5e5cf048b.encode(_313eac335fae));
        return [ _b6f2bd98c862(_ef3c27203dbf.$W.files.wasm), _b6f2bd98c862(_ef3c27203dbf.$W.files.all), _b6f2bd98c862("data:application/javascript;base64," + _180466bcc607) ];
      }
      let _8aa5e5cf048b = new TextEncoder;
      function f(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9, _ef3c27203dbf = !1) {
        let _6b23ce5f34cb = performance.now(), _5e9d93e0c4ea = function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9, _ef3c27203dbf = !1) {
          let _eb5e33ca1634 = new _180466bcc607.DV((_38c7d5d2fcfc, _b6f2bd98c862) => _b6f2bd98c862), _6b23ce5f34cb = new _313eac335fae.iX(_eb5e33ca1634);
          if (_6b23ce5f34cb.write(_38c7d5d2fcfc), _6b23ce5f34cb.end(), function e(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
            if ("base" === _38c7d5d2fcfc.name && void 0 !== _38c7d5d2fcfc.attribs.href && (_1bd41f000df9.base = new URL(_38c7d5d2fcfc.attribs.href, _1bd41f000df9.origin)), 
            _38c7d5d2fcfc.attribs) {
              for (let _313eac335fae of _c20fa90a80b7.V) for (let _180466bcc607 in _313eac335fae) {
                let _7f05829ad9f4 = _313eac335fae[_180466bcc607.toLowerCase()];
                if ("function" != typeof _7f05829ad9f4 && ("*" === _7f05829ad9f4 || _7f05829ad9f4.includes(_38c7d5d2fcfc.name)) && void 0 !== _38c7d5d2fcfc.attribs[_180466bcc607]) {
                  let _7f05829ad9f4 = _38c7d5d2fcfc.attribs[_180466bcc607], _93a414b82620 = _313eac335fae.fn(_7f05829ad9f4, _1bd41f000df9, _b6f2bd98c862);
                  null === _93a414b82620 ? delete _38c7d5d2fcfc.attribs[_180466bcc607] : _38c7d5d2fcfc.attribs[_180466bcc607] = _93a414b82620, 
                  _38c7d5d2fcfc.attribs[`studyjet-attr-${_180466bcc607}`] = _7f05829ad9f4;
                }
              }
              for (let [_b6f2bd98c862, _313eac335fae] of Object.entries(_38c7d5d2fcfc.attribs)) _e25772762281.includes(_b6f2bd98c862) && (_38c7d5d2fcfc.attribs[`studyjet-attr-${_b6f2bd98c862}`] = _313eac335fae, 
              _38c7d5d2fcfc.attribs[_b6f2bd98c862] = (0, _bf69fdf532e4.o)(_313eac335fae, `(inline ${_b6f2bd98c862} on element)`, _1bd41f000df9));
            }
            if ("style" === _38c7d5d2fcfc.name && void 0 !== _38c7d5d2fcfc.children[0] && (_38c7d5d2fcfc.children[0].data = (0, 
            _3ee9590bcdd1.s)(_38c7d5d2fcfc.children[0].data, _1bd41f000df9)), "script" === _38c7d5d2fcfc.name && "module" === _38c7d5d2fcfc.attribs.type && _38c7d5d2fcfc.attribs.src && (_38c7d5d2fcfc.attribs.src = _38c7d5d2fcfc.attribs.src + "?type=module"), 
            "script" === _38c7d5d2fcfc.name && "importmap" === _38c7d5d2fcfc.attribs.type && void 0 !== _38c7d5d2fcfc.children[0]) {
              let _b6f2bd98c862 = _38c7d5d2fcfc.children[0].data;
              try {
                let _313eac335fae = JSON.parse(_b6f2bd98c862);
                if (_313eac335fae.imports) for (let _38c7d5d2fcfc in _313eac335fae.imports) {
                  let _b6f2bd98c862 = _313eac335fae.imports[_38c7d5d2fcfc];
                  "string" == typeof _b6f2bd98c862 && (_b6f2bd98c862 = (0, _93a414b82620.Oy)(_b6f2bd98c862, _1bd41f000df9), 
                  _313eac335fae.imports[_38c7d5d2fcfc] = _b6f2bd98c862);
                }
                _38c7d5d2fcfc.children[0].data = JSON.stringify(_313eac335fae);
              } catch (e) {
                console.error("Failed to parse importmap JSON:", e);
              }
            }
            if ("script" === _38c7d5d2fcfc.name && /(application|text)\/javascript|module|undefined/.test(_38c7d5d2fcfc.attribs.type) && void 0 !== _38c7d5d2fcfc.children[0]) {
              let _b6f2bd98c862 = _38c7d5d2fcfc.children[0].data, _313eac335fae = "module" === _38c7d5d2fcfc.attribs.type;
              _38c7d5d2fcfc.attribs["studyjet-attr-script-source-src"] = y(_8aa5e5cf048b.encode(_b6f2bd98c862)), 
              _b6f2bd98c862 = _b6f2bd98c862.replace(/<!--[\s\S]*?-->/g, ""), _38c7d5d2fcfc.children[0].data = (0, 
              _bf69fdf532e4.o)(_b6f2bd98c862, "(inline script element)", _1bd41f000df9, _313eac335fae);
            }
            if ("meta" === _38c7d5d2fcfc.name && void 0 !== _38c7d5d2fcfc.attribs["http-equiv"]) {
              if ("content-security-policy" === _38c7d5d2fcfc.attribs["http-equiv"].toLowerCase()) _38c7d5d2fcfc = new _180466bcc607.Mw(_38c7d5d2fcfc.attribs.content); else if ("refresh" === _38c7d5d2fcfc.attribs["http-equiv"] && _38c7d5d2fcfc.attribs.content.includes("url")) {
                let _b6f2bd98c862 = _38c7d5d2fcfc.attribs.content.split("url=");
                _b6f2bd98c862[1] && (_b6f2bd98c862[1] = (0, _93a414b82620.Oy)(_b6f2bd98c862[1].trim(), _1bd41f000df9)), 
                _38c7d5d2fcfc.attribs.content = _b6f2bd98c862.join("url=");
              }
            }
            if (_38c7d5d2fcfc.childNodes) for (let _313eac335fae in _38c7d5d2fcfc.childNodes) _38c7d5d2fcfc.childNodes[_313eac335fae] = e(_38c7d5d2fcfc.childNodes[_313eac335fae], _b6f2bd98c862, _1bd41f000df9);
            return _38c7d5d2fcfc;
          }(_eb5e33ca1634.root, _b6f2bd98c862, _1bd41f000df9), _ef3c27203dbf) {
            let _38c7d5d2fcfc = function e(_38c7d5d2fcfc) {
              if (_38c7d5d2fcfc.type === _313eac335fae.RJ.vw && "head" === _38c7d5d2fcfc.name) return _38c7d5d2fcfc;
              if (_38c7d5d2fcfc.childNodes) for (let _b6f2bd98c862 of _38c7d5d2fcfc.childNodes) {
                let _38c7d5d2fcfc = e(_b6f2bd98c862);
                if (_38c7d5d2fcfc) return _38c7d5d2fcfc;
              }
              return null;
            }(_eb5e33ca1634.root);
            _38c7d5d2fcfc || (_38c7d5d2fcfc = new _180466bcc607.Hg("head", {}, []), _eb5e33ca1634.root.children.unshift(_38c7d5d2fcfc)), 
            _38c7d5d2fcfc.children.unshift(...h(_b6f2bd98c862, _38c7d5d2fcfc => new _180466bcc607.Hg("script", {
              src: _38c7d5d2fcfc
            })));
          }
          return (0, _7f05829ad9f4.A)(_eb5e33ca1634.root, {
            encodeEntities: "utf8",
            decodeEntities: !1
          });
        }(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9, _ef3c27203dbf);
        return _eb5e33ca1634.time(_1bd41f000df9, _6b23ce5f34cb, "html rewrite"), _5e9d93e0c4ea;
      }
      function g(_38c7d5d2fcfc) {
        let _b6f2bd98c862 = new _180466bcc607.DV((_38c7d5d2fcfc, _b6f2bd98c862) => _b6f2bd98c862), _1bd41f000df9 = new _313eac335fae.iX(_b6f2bd98c862);
        return _1bd41f000df9.write(_38c7d5d2fcfc), _1bd41f000df9.end(), !function e(_38c7d5d2fcfc) {
          if ("attribs" in _38c7d5d2fcfc) for (let _b6f2bd98c862 in _38c7d5d2fcfc.attribs) {
            if ("studyjet-attr-script-source-src" == _b6f2bd98c862) {
              _38c7d5d2fcfc.children[0] && "data" in _38c7d5d2fcfc.children[0] && (_38c7d5d2fcfc.children[0].data = atob(_38c7d5d2fcfc.attribs[_b6f2bd98c862]));
              continue;
            }
            _b6f2bd98c862.startsWith("studyjet-attr-") && (_38c7d5d2fcfc.attribs[_b6f2bd98c862.slice(14)] = _38c7d5d2fcfc.attribs[_b6f2bd98c862], 
            delete _38c7d5d2fcfc.attribs[_b6f2bd98c862]);
          }
          if ("childNodes" in _38c7d5d2fcfc) for (let _b6f2bd98c862 of _38c7d5d2fcfc.childNodes) e(_b6f2bd98c862);
        }(_b6f2bd98c862.root), (0, _7f05829ad9f4.A)(_b6f2bd98c862.root, {
          decodeEntities: !1
        });
      }
      function m(_38c7d5d2fcfc, _b6f2bd98c862) {
        return _38c7d5d2fcfc.split(/ .*,/).map(_38c7d5d2fcfc => _38c7d5d2fcfc.trim()).map(_38c7d5d2fcfc => {
          let [_1bd41f000df9, ..._313eac335fae] = _38c7d5d2fcfc.split(/\s+/), _180466bcc607 = (0, 
          _93a414b82620.Oy)(_1bd41f000df9.trim(), _b6f2bd98c862);
          return _313eac335fae.length > 0 ? `${_180466bcc607} ${_313eac335fae.join(" ")}` : _180466bcc607;
        }).join(", ");
      }
      function y(_38c7d5d2fcfc) {
        return btoa(Array.from(_38c7d5d2fcfc, _38c7d5d2fcfc => String.fromCodePoint(_38c7d5d2fcfc)).join(""));
      }
      let _e25772762281 = [ "onbeforexrselect", "onabort", "onbeforeinput", "onbeforematch", "onbeforetoggle", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncontentvisibilityautostatechange", "oncontextlost", "oncontextmenu", "oncontextrestored", "oncuechange", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "onformdata", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onresize", "onscroll", "onsecuritypolicyviolation", "onseeked", "onseeking", "onselect", "onslotchange", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "onvolumechange", "onwaiting", "onwebkitanimationend", "onwebkitanimationiteration", "onwebkitanimationstart", "onwebkittransitionend", "onwheel", "onauxclick", "ongotpointercapture", "onlostpointercapture", "onpointerdown", "onpointermove", "onpointerrawupdate", "onpointerup", "onpointercancel", "onpointerover", "onpointerout", "onpointerenter", "onpointerleave", "onselectstart", "onselectionchange", "onanimationend", "onanimationiteration", "onanimationstart", "ontransitionrun", "ontransitionstart", "ontransitionend", "ontransitioncancel", "oncopy", "oncut", "onpaste", "onscrollend", "onscrollsnapchange", "onscrollsnapchanging" ];
    },
    9381: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9(2614), _1bd41f000df9(4435), _1bd41f000df9(884), _1bd41f000df9(1478), 
      _1bd41f000df9(1472), _1bd41f000df9(2015), _1bd41f000df9(1561);
    },
    1478: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.d(_b6f2bd98c862, {
        o: () => s
      });
      var _313eac335fae = _1bd41f000df9(37), _180466bcc607 = _1bd41f000df9(1561), _7f05829ad9f4 = _1bd41f000df9(8665).A;
      function s(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9, _93a414b82620 = !1) {
        try {
          let _3ee9590bcdd1 = function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9, _313eac335fae = !1) {
            return function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9, _313eac335fae) {
              let [_93a414b82620, _3ee9590bcdd1] = (0, _180466bcc607.nb)(_1bd41f000df9);
              try {
                let _3ee9590bcdd1, _bf69fdf532e4 = performance.now();
                _3ee9590bcdd1 = "string" == typeof _38c7d5d2fcfc ? _93a414b82620.rewrite_js(_38c7d5d2fcfc, _1bd41f000df9.base.href, _b6f2bd98c862 || "(unknown)", _313eac335fae) : _93a414b82620.rewrite_js_bytes(_38c7d5d2fcfc, _1bd41f000df9.base.href, _b6f2bd98c862 || "(unknown)", _313eac335fae), 
                _7f05829ad9f4.time(_1bd41f000df9, _bf69fdf532e4, `oxc rewrite for "${_b6f2bd98c862 || "(unknown)"}"`);
                let {js: _ef3c27203dbf, map: _c20fa90a80b7, scramtag: _eb5e33ca1634, errors: _8aa5e5cf048b} = _3ee9590bcdd1;
                return {
                  js: "string" == typeof _38c7d5d2fcfc ? _180466bcc607.su.decode(_ef3c27203dbf) : _ef3c27203dbf,
                  tag: _eb5e33ca1634,
                  map: _c20fa90a80b7,
                  errors: _8aa5e5cf048b
                };
              } finally {
                _3ee9590bcdd1();
              }
            }(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9, _313eac335fae);
          }(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9, _93a414b82620), _bf69fdf532e4 = _3ee9590bcdd1.js;
          if ((0, _313eac335fae.U5)("sourcemaps", _1bd41f000df9.base)) {
            let _38c7d5d2fcfc = globalThis[_313eac335fae.$W.globals.pushsourcemapfn];
            if (_38c7d5d2fcfc) _38c7d5d2fcfc(Array.from(_3ee9590bcdd1.map), _3ee9590bcdd1.tag); else {
              _bf69fdf532e4 instanceof Uint8Array && (_bf69fdf532e4 = (new TextDecoder).decode(_bf69fdf532e4));
              let _38c7d5d2fcfc = `${_313eac335fae.$W.globals.pushsourcemapfn}([${_3ee9590bcdd1.map.join(",")}], "${_3ee9590bcdd1.tag}");`, _b6f2bd98c862 = /^\s*(['"])use strict\1;?/;
              _bf69fdf532e4 = _b6f2bd98c862.test(_bf69fdf532e4) ? _bf69fdf532e4.replace(_b6f2bd98c862, `$&\n${_38c7d5d2fcfc}`) : `${_38c7d5d2fcfc}\n${_bf69fdf532e4}`;
            }
          }
          if ((0, _313eac335fae.U5)("rewriterLogs", _1bd41f000df9.base)) for (let _38c7d5d2fcfc of _3ee9590bcdd1.errors) console.error("oxc parse error", _38c7d5d2fcfc);
          return _bf69fdf532e4;
        } catch (_7f05829ad9f4) {
          if (console.warn("failed rewriting js for", _b6f2bd98c862 || "(unknown)", _7f05829ad9f4.message, _38c7d5d2fcfc instanceof Uint8Array ? _180466bcc607.su.decode(_38c7d5d2fcfc) : _38c7d5d2fcfc), 
          (0, _313eac335fae.U5)("allowInvalidJs", _1bd41f000df9.base)) return _38c7d5d2fcfc;
          throw _7f05829ad9f4;
        }
      }
      Error.stackTraceLimit = 50;
    },
    1472: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.d(_b6f2bd98c862, {
        $n: () => o,
        IP: () => s,
        Oy: () => l,
        v2: () => c
      });
      var _313eac335fae = _1bd41f000df9(37), _180466bcc607 = _1bd41f000df9(1478);
      function a(_38c7d5d2fcfc, _b6f2bd98c862) {
        try {
          return new URL(_38c7d5d2fcfc, _b6f2bd98c862);
        } catch {
          return null;
        }
      }
      function s(_38c7d5d2fcfc, _b6f2bd98c862) {
        let _1bd41f000df9 = new URL(_38c7d5d2fcfc.substring(5));
        return "blob:" + _b6f2bd98c862.origin.origin + _1bd41f000df9.pathname;
      }
      function o(_38c7d5d2fcfc) {
        let _b6f2bd98c862 = new URL(_38c7d5d2fcfc.substring(5));
        return "blob:" + location.origin + _b6f2bd98c862.pathname;
      }
      function l(_38c7d5d2fcfc, _b6f2bd98c862) {
        if (_38c7d5d2fcfc instanceof URL && (_38c7d5d2fcfc = _38c7d5d2fcfc.toString()), 
        _38c7d5d2fcfc.startsWith("javascript:")) return "javascript:" + (0, _180466bcc607.o)(_38c7d5d2fcfc.slice(11), "(javascript: url)", _b6f2bd98c862);
        {
          if (_38c7d5d2fcfc.startsWith("blob:") || _38c7d5d2fcfc.startsWith("data:")) return location.origin + _313eac335fae.$W.prefix + _38c7d5d2fcfc;
          if (_38c7d5d2fcfc.startsWith("mailto:") || _38c7d5d2fcfc.startsWith("about:")) return _38c7d5d2fcfc;
          let _1bd41f000df9 = _b6f2bd98c862.base.href;
          _1bd41f000df9.startsWith("about:") && (_1bd41f000df9 = c(self.location.href));
          let _180466bcc607 = a(_38c7d5d2fcfc, _1bd41f000df9);
          if (!_180466bcc607) return _38c7d5d2fcfc;
          let _7f05829ad9f4 = (0, _313eac335fae.hD)(_180466bcc607.hash.slice(1));
          return _180466bcc607.hash = "", location.origin + _313eac335fae.$W.prefix + (0, 
          _313eac335fae.hD)(_180466bcc607.href) + (_7f05829ad9f4 ? "#" + _7f05829ad9f4 : "");
        }
      }
      function c(_38c7d5d2fcfc) {
        _38c7d5d2fcfc instanceof URL && (_38c7d5d2fcfc = _38c7d5d2fcfc.toString());
        let _b6f2bd98c862 = location.origin + _313eac335fae.$W.prefix;
        if (_38c7d5d2fcfc.startsWith("javascript:")) return _38c7d5d2fcfc;
        {
          if (_38c7d5d2fcfc.startsWith("blob:")) return _38c7d5d2fcfc;
          if (_38c7d5d2fcfc.startsWith(_b6f2bd98c862 + "blob:") || _38c7d5d2fcfc.startsWith(_b6f2bd98c862 + "data:")) return _38c7d5d2fcfc.substring(_b6f2bd98c862.length);
          if (_38c7d5d2fcfc.startsWith("mailto:") || _38c7d5d2fcfc.startsWith("about:")) return _38c7d5d2fcfc;
          let _1bd41f000df9 = a(_38c7d5d2fcfc);
          if (!_1bd41f000df9) return _38c7d5d2fcfc;
          let _180466bcc607 = (0, _313eac335fae.P_)(_1bd41f000df9.hash.slice(1));
          return _1bd41f000df9.hash = "", (0, _313eac335fae.P_)(_1bd41f000df9.href.slice(_b6f2bd98c862.length) + (_180466bcc607 ? "#" + _180466bcc607 : ""));
        }
      }
    },
    1561: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      let _313eac335fae;
      _1bd41f000df9.d(_b6f2bd98c862, {
        n$: () => d,
        nb: () => g,
        su: () => _eb5e33ca1634
      });
      var _180466bcc607 = _1bd41f000df9(3907), _7f05829ad9f4 = _1bd41f000df9(37), _93a414b82620 = _1bd41f000df9(1472), _3ee9590bcdd1 = _1bd41f000df9(2393), _bf69fdf532e4 = _1bd41f000df9(2614), _ef3c27203dbf = _1bd41f000df9(1478), _c20fa90a80b7 = _1bd41f000df9(884);
      async function d() {
        _313eac335fae = new Uint8Array(await fetch(_7f05829ad9f4.$W.files.wasm).then(_38c7d5d2fcfc => _38c7d5d2fcfc.arrayBuffer()));
      }
      self.WASM && (_313eac335fae = Uint8Array.from(atob(self.WASM), _38c7d5d2fcfc => _38c7d5d2fcfc.charCodeAt(0)));
      let _eb5e33ca1634 = new TextDecoder, _8aa5e5cf048b = "\0asm".split("").map(_38c7d5d2fcfc => _38c7d5d2fcfc.charCodeAt(0)), _e25772762281 = [];
      function g(_38c7d5d2fcfc) {
        let _b6f2bd98c862;
        if (!(_313eac335fae instanceof Uint8Array)) throw Error("rewriter wasm not found (was it fetched correctly?)");
        if (![ ..._313eac335fae.slice(0, 4) ].every((_38c7d5d2fcfc, _b6f2bd98c862) => _38c7d5d2fcfc === _8aa5e5cf048b[_b6f2bd98c862])) throw Error("rewriter wasm does not have wasm magic (was it fetched correctly?)\nrewriter wasm contents: " + _eb5e33ca1634.decode(_313eac335fae));
        (0, _180466bcc607.QR)({
          module: new WebAssembly.Module(_313eac335fae)
        });
        let _1bd41f000df9 = _e25772762281.findIndex(_38c7d5d2fcfc => !_38c7d5d2fcfc.inUse), _6b23ce5f34cb = _e25772762281.length;
        return -1 === _1bd41f000df9 ? ((0, _7f05829ad9f4.U5)("rewriterLogs", _38c7d5d2fcfc.base) && console.log(`creating new rewriter, ${_6b23ce5f34cb} rewriters made already`), 
        _b6f2bd98c862 = {
          rewriter: new _180466bcc607.LW({
            config: _7f05829ad9f4.$W,
            shared: {
              rewrite: {
                htmlRules: _3ee9590bcdd1.V,
                rewriteUrl: _93a414b82620.Oy,
                rewriteCss: _bf69fdf532e4.s,
                rewriteJs: _ef3c27203dbf.o,
                getHtmlInjectCode(_38c7d5d2fcfc, _b6f2bd98c862) {
                  let _1bd41f000df9 = (0, _c20fa90a80b7.Uk)(_38c7d5d2fcfc, _38c7d5d2fcfc => `<script src="${_38c7d5d2fcfc}"><\/script>`).join("");
                  return _b6f2bd98c862 ? `<head>${_1bd41f000df9}</head>` : _1bd41f000df9;
                }
              }
            },
            flagEnabled: _7f05829ad9f4.U5,
            codec: {
              encode: _7f05829ad9f4.hD,
              decode: _7f05829ad9f4.P_
            }
          }),
          inUse: !1
        }, _e25772762281.push(_b6f2bd98c862)) : ((0, _7f05829ad9f4.U5)("rewriterLogs", _38c7d5d2fcfc.base) && console.log(`using cached rewriter ${_1bd41f000df9} from list of ${_6b23ce5f34cb} rewriters`), 
        _b6f2bd98c862 = _e25772762281[_1bd41f000df9]), _b6f2bd98c862.inUse = !0, [ _b6f2bd98c862.rewriter, () => _b6f2bd98c862.inUse = !1 ];
      }
    },
    2015: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.d(_b6f2bd98c862, {
        i: () => a
      });
      var _313eac335fae = _1bd41f000df9(37), _180466bcc607 = _1bd41f000df9(1478);
      function a(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9, _7f05829ad9f4) {
        let _93a414b82620 = "", _3ee9590bcdd1 = "module" === _b6f2bd98c862, l = _38c7d5d2fcfc => {
          _3ee9590bcdd1 ? _93a414b82620 += `import "${_313eac335fae.$W.files[_38c7d5d2fcfc]}"\n` : _93a414b82620 += `importScripts("${_313eac335fae.$W.files[_38c7d5d2fcfc]}");\n`;
        };
        l("wasm"), l("all"), _93a414b82620 += `$studyjetLoadClient().loadAndHook(${JSON.stringify(_313eac335fae.$W)});`;
        let _bf69fdf532e4 = (0, _180466bcc607.o)(_38c7d5d2fcfc, _1bd41f000df9, _7f05829ad9f4, _3ee9590bcdd1);
        return _bf69fdf532e4 instanceof Uint8Array && (_bf69fdf532e4 = (new TextDecoder).decode(_bf69fdf532e4)), 
        _93a414b82620 += _bf69fdf532e4;
      }
    },
    6684: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.d(_b6f2bd98c862, {
        Sn: () => h,
        YH: () => u,
        Yq: () => f,
        hU: () => d,
        pL: () => p,
        rj: () => c
      });
      var _313eac335fae = _1bd41f000df9(6570);
      let _180466bcc607 = {
        none: 0,
        "same-origin": 1,
        "same-site": 2,
        "cross-site": 3
      };
      async function a() {
        return (0, _313eac335fae.P2)("@d7a6431b92e", 1);
      }
      async function s(_38c7d5d2fcfc) {
        let _b6f2bd98c862 = await a();
        return await _b6f2bd98c862.get("redirectTrackers", _38c7d5d2fcfc) || null;
      }
      async function o(_38c7d5d2fcfc, _b6f2bd98c862) {
        let _1bd41f000df9 = await a();
        await _1bd41f000df9.put("redirectTrackers", _b6f2bd98c862, _38c7d5d2fcfc);
      }
      async function l(_38c7d5d2fcfc) {
        let _b6f2bd98c862 = await a();
        await _b6f2bd98c862.delete("redirectTrackers", _38c7d5d2fcfc);
      }
      async function c(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
        await s(_38c7d5d2fcfc) || await o(_38c7d5d2fcfc, {
          originalReferrer: _b6f2bd98c862 || "",
          mostRestrictiveSite: _1bd41f000df9,
          referrerPolicy: "",
          chainStarted: Date.now()
        });
      }
      async function u(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
        let _313eac335fae = await s(_38c7d5d2fcfc);
        _313eac335fae && (await l(_38c7d5d2fcfc), _1bd41f000df9 && (_313eac335fae.referrerPolicy = _1bd41f000df9), 
        await o(_b6f2bd98c862, _313eac335fae));
      }
      async function d(_38c7d5d2fcfc, _b6f2bd98c862) {
        let _1bd41f000df9 = await s(_38c7d5d2fcfc);
        if (!_1bd41f000df9) return _b6f2bd98c862;
        let _313eac335fae = _180466bcc607[_1bd41f000df9.mostRestrictiveSite];
        return (_180466bcc607[_b6f2bd98c862] ?? 0) > _313eac335fae ? (_1bd41f000df9.mostRestrictiveSite = _b6f2bd98c862, 
        await o(_38c7d5d2fcfc, _1bd41f000df9), _b6f2bd98c862) : _1bd41f000df9.mostRestrictiveSite;
      }
      async function h(_38c7d5d2fcfc) {
        await l(_38c7d5d2fcfc);
      }
      async function p(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
        let _313eac335fae = await a();
        await _313eac335fae.put("referrerPolicies", {
          policy: _b6f2bd98c862,
          referrer: _1bd41f000df9
        }, _38c7d5d2fcfc);
      }
      async function f(_38c7d5d2fcfc) {
        let _b6f2bd98c862 = await a();
        return await _b6f2bd98c862.get("referrerPolicies", _38c7d5d2fcfc) || null;
      }
    },
    2416: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9(6684), _1bd41f000df9(8228);
    },
    8228: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.d(_b6f2bd98c862, {
        ps: () => l
      });
      var _313eac335fae = _1bd41f000df9(6570);
      let _180466bcc607 = "publicSuffixList";
      async function a() {
        return (0, _313eac335fae.P2)("@d7a6431b92e", 1);
      }
      async function s() {
        let _38c7d5d2fcfc = await a();
        return await _38c7d5d2fcfc.get("publicSuffixList", _180466bcc607) || null;
      }
      async function o(_38c7d5d2fcfc) {
        let _b6f2bd98c862 = await a();
        await _b6f2bd98c862.put("publicSuffixList", {
          data: _38c7d5d2fcfc,
          expiry: Date.now() + 36e5
        }, _180466bcc607);
      }
      async function l(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
        return _b6f2bd98c862 ? _38c7d5d2fcfc.origin.origin === _b6f2bd98c862.origin ? "same-origin" : await c(_38c7d5d2fcfc.origin, _b6f2bd98c862, _1bd41f000df9) ? "same-site" : "cross-site" : "none";
      }
      async function c(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
        return await u(_38c7d5d2fcfc, _1bd41f000df9) === await u(_b6f2bd98c862, _1bd41f000df9);
      }
      async function u(_38c7d5d2fcfc, _b6f2bd98c862) {
        let _1bd41f000df9 = await d(_b6f2bd98c862), _313eac335fae = _38c7d5d2fcfc.hostname.toLowerCase().split("."), _180466bcc607 = "", _7f05829ad9f4 = !1;
        for (let _38c7d5d2fcfc of _1bd41f000df9) {
          let _b6f2bd98c862 = _38c7d5d2fcfc.startsWith("!") ? _38c7d5d2fcfc.substring(1) : _38c7d5d2fcfc;
          if (function(_38c7d5d2fcfc, _b6f2bd98c862) {
            if (_38c7d5d2fcfc.length < _b6f2bd98c862.length) return !1;
            let _1bd41f000df9 = _38c7d5d2fcfc.length - _b6f2bd98c862.length;
            for (let _313eac335fae = 0; _313eac335fae < _b6f2bd98c862.length; _313eac335fae++) {
              let _180466bcc607 = _38c7d5d2fcfc[_1bd41f000df9 + _313eac335fae], _7f05829ad9f4 = _b6f2bd98c862[_313eac335fae];
              if ("*" !== _7f05829ad9f4 && _180466bcc607 !== _7f05829ad9f4) return !1;
            }
            return !0;
          }(_313eac335fae, _b6f2bd98c862.split("."))) {
            if (_38c7d5d2fcfc.startsWith("!")) {
              _180466bcc607 = _b6f2bd98c862, _7f05829ad9f4 = !0;
              break;
            }
            !_7f05829ad9f4 && _b6f2bd98c862.length > _180466bcc607.length && (_180466bcc607 = _b6f2bd98c862);
          }
        }
        if (!_180466bcc607) return _313eac335fae.slice(-2).join(".");
        let _93a414b82620 = _180466bcc607.split(".").length, _3ee9590bcdd1 = _7f05829ad9f4 ? _93a414b82620 : _93a414b82620 + 1;
        return _313eac335fae.slice(-_3ee9590bcdd1).join(".");
      }
      async function d(_38c7d5d2fcfc) {
        let _b6f2bd98c862, _1bd41f000df9 = await s();
        if (_1bd41f000df9 && Date.now() < _1bd41f000df9.expiry) return _1bd41f000df9.data;
        try {
          _b6f2bd98c862 = await _38c7d5d2fcfc.fetch("https://publicsuffix.org/list/public_suffix_list.dat");
        } catch (_38c7d5d2fcfc) {
          throw Error(`Failed to fetch public suffix list: ${_38c7d5d2fcfc}`);
        }
        let _313eac335fae = (await _b6f2bd98c862.text()).split("\n").map(_38c7d5d2fcfc => {
          let _b6f2bd98c862 = _38c7d5d2fcfc.trim(), _1bd41f000df9 = _b6f2bd98c862.indexOf(" ");
          return _1bd41f000df9 > -1 ? _b6f2bd98c862.substring(0, _1bd41f000df9) : _b6f2bd98c862;
        }).filter(_38c7d5d2fcfc => _38c7d5d2fcfc && !_38c7d5d2fcfc.startsWith("//"));
        return await o(_313eac335fae), _313eac335fae;
      }
    },
    2794: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.d(_b6f2bd98c862, {
        pX: () => _313eac335fae,
        zr: () => _180466bcc607
      });
      let _313eac335fae = Symbol.for("studyjet client global"), _180466bcc607 = Symbol.for("studyjet frame handle");
    },
    5956: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      function n(_38c7d5d2fcfc, _b6f2bd98c862) {
        let _1bd41f000df9 = `\n                errorTrace.value = ${JSON.stringify(_38c7d5d2fcfc)};\n                fetchedURL.textContent = ${JSON.stringify(_b6f2bd98c862)};\n                for (const node of document.querySelectorAll("#hostname")) node.textContent = ${JSON.stringify(location.hostname)};\n                reload.addEventListener("click", () => location.reload());\n                version.textContent = ${JSON.stringify(globalThis.$studyjetVersion?.version || "unknown")};\n                build.textContent = ${JSON.stringify(globalThis.$studyjetVersion?.build || "unknown")};\n\n                document.getElementById('copy-button').addEventListener('click', async () => {\n                    const text = document.getElementById('errorTrace').value;\n                    await navigator.clipboard.writeText(text);\n                    const btn = document.getElementById('copy-button');\n                    btn.textContent = 'Copied!';\n                    setTimeout(() => btn.textContent = 'Copy', 2000);\n                });\n        `;
        return `<!DOCTYPE html>\n            <html>\n                <head>\n                    <meta charset="utf-8" />\n                    <title>StudyJet</title>\n                    <style>\n                    :root {\n                        --deep: #080602;\n                        --shallow: #181412;\n                        --beach: #f1e8e1;\n                        --shore: #b1a8a1;\n                        --accent: #ffa938;\n                        --font-sans: -apple-system, system-ui, BlinkMacSystemFont, sans-serif;\n                        --font-monospace: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n                    }\n\n                    *:not(div,p,span,ul,li,i,span) {\n                        background-color: var(--deep);\n                        color: var(--beach);\n                        font-family: var(--font-sans);\n                    }\n\n                    textarea,\n                    button {\n                        background-color: var(--shallow);\n                        border-radius: 0.6em;\n                        padding: 0.6em;\n                        border: none;\n                        appearance: none;\n                        font-family: var(--font-sans);\n                        color: var(--beach);\n                    }\n\n                    button.primary {\n                        background-color: var(--accent);\n                        color: var(--deep);\n                        font-weight: bold;\n                    }\n\n                    textarea {\n                        resize: none;\n                        height: 20em;\n                        text-align: left;\n                        font-family: var(--font-monospace);\n                    }\n\n                    body {\n                        width: 100vw;\n                        height: 100vh;\n                        justify-content: center;\n                        align-items: center;\n                    }\n\n                    body,\n                    html,\n                    #inner {\n                        display: flex;\n                        align-items: center;\n                        flex-direction: column;\n                        gap: 0.5em;\n                        overflow: hidden;\n                    }\n\n                    #inner {\n                        z-index: 100;\n                    }\n\n                    #cover {\n                        position: absolute;\n                        width: 100%;\n                        height: 100%;\n                        background-color: color-mix(in srgb, var(--deep) 70%, transparent);\n                        z-index: 99;\n                    }\n\n                    #info {\n                        display: flex;\n                        flex-direction: row;\n                        align-items: flex-start;\n                        gap: 1em;\n                    }\n\n                    #version-wrapper {\n                        width: auto;\n                        text-align: right;\n                        position: absolute;\n                        top: 0.5rem;\n                        right: 0.5rem;\n                        font-size: 0.8rem;\n                        color: var(--shore)!important;\n                        i {\n                            background-color: color-mix(in srgb, var(--deep), transparent 50%);\n                            border-radius: 9999px;\n                            padding: 0.2em 0.5em;\n                        }\n                        z-index: 101;\n                    }\n\n                    #errorTrace-wrapper {\n                        position: relative;\n                        width: fit-content;\n                    }\n\n                    #copy-button {\n                        position: absolute;\n                        top: 0.5em;\n                        right: 0.5em;\n                        padding: 0.23em;\n                        cursor: pointer;\n                        opacity: 0;\n                        transition: opacity 0.4s;\n                        font-size: 0.9em;\n                    }\n\n                    #errorTrace-wrapper:hover #copy-button {\n                        opacity: 1;\n                    }\n                    </style>\n                </head>\n                <body>\n                    <div id="cover"></div>\n                    <div id="inner">\n                        <h1 id="errorTitle">Uh oh!</h1>\n                        <p>There was an error loading <b id="fetchedURL"></b></p>\n                        \x3c!-- <p id="errorMessage">Internal Server Error</p> --\x3e\n\n                        <div id="info">\n                            <div id="errorTrace-wrapper">\n                                <textarea id="errorTrace" cols="40" rows="10" readonly></textarea>\n                                <button id="copy-button" class="primary">Copy</button>\n                            </div>\n                            <div id="troubleshooting">\n                                <p>Try:</p>\n                                <ul>\n                                    <li>Checking your internet connection</li>\n                                    <li>Verifying you entered the correct address</li>\n                                    <li>Clearing the site data</li>\n                                    <li>Contacting <b id="hostname"></b>'s administrator</li>\n                                    <li>Verify the server isn't censored</li>\n                                </ul>\n                                <p>If you're the administrator of <b id="hostname"></b>, try:</p>\n                                    <ul>\n                                    <li>Restarting your server</li>\n                                    <li>Updating StudyJet</li>\n                                    <li>Troubleshooting the error on the <a href="https://github.com/MercuryWorkshop/studyjet" target="_blank">GitHub repository</a></li>\n                                </ul>\n                            </div>\n                        </div>\n                        <br>\n                        <button id="reload" class="primary">Reload</button>\n                    </div>\n                    <p id="version-wrapper"><i>StudyJet v<span id="version"></span> (build <span id="build"></span>)</i></p>\n                    <script src="${"data:application/javascript," + encodeURIComponent(_1bd41f000df9)}"><\/script>\n                </body>\n            </html>\n        `;
      }
      function i(_38c7d5d2fcfc, _b6f2bd98c862) {
        let _1bd41f000df9 = {
          "content-type": "text/html"
        };
        return crossOriginIsolated && (_1bd41f000df9["Cross-Origin-Embedder-Policy"] = "require-corp"), 
        new Response(n(String(_38c7d5d2fcfc), _b6f2bd98c862), {
          status: 500,
          headers: _1bd41f000df9
        });
      }
      _1bd41f000df9.d(_b6f2bd98c862, {
        B: () => n,
        v: () => i
      });
    },
    1403: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.d(_b6f2bd98c862, {
        H: () => n
      });
      class n {
        handle;
        origin;
        syncToken=0;
        promises={};
        messageChannel=new MessageChannel;
        connected=!1;
        constructor(_38c7d5d2fcfc, _b6f2bd98c862) {
          this.handle = _38c7d5d2fcfc, this.origin = _b6f2bd98c862, this.messageChannel.port1.addEventListener("message", _38c7d5d2fcfc => {
            "studyjet$type" in _38c7d5d2fcfc.data && ("init" === _38c7d5d2fcfc.data.studyjet$type ? this.connected = !0 : this.handleMessage(_38c7d5d2fcfc.data));
          }), this.messageChannel.port1.start(), this.handle.postMessage({
            studyjet$type: "init",
            studyjet$port: this.messageChannel.port2
          }, [ this.messageChannel.port2 ]);
        }
        handleMessage(_38c7d5d2fcfc) {
          let _b6f2bd98c862 = this.promises[_38c7d5d2fcfc.studyjet$token];
          _b6f2bd98c862 && (_b6f2bd98c862(_38c7d5d2fcfc), delete this.promises[_38c7d5d2fcfc.studyjet$token]);
        }
        async fetch(_38c7d5d2fcfc) {
          let _b6f2bd98c862 = this.syncToken++, _1bd41f000df9 = {
            studyjet$type: "fetch",
            studyjet$token: _b6f2bd98c862,
            studyjet$request: {
              url: _38c7d5d2fcfc.url,
              body: _38c7d5d2fcfc.body,
              headers: Array.from(_38c7d5d2fcfc.headers.entries()),
              method: _38c7d5d2fcfc.method,
              mode: _38c7d5d2fcfc.mode,
              destinitation: _38c7d5d2fcfc.destination
            }
          }, _313eac335fae = _38c7d5d2fcfc.body ? [ _38c7d5d2fcfc.body ] : [];
          this.handle.postMessage(_1bd41f000df9, _313eac335fae);
          let {studyjet$response: _180466bcc607} = await new Promise(_38c7d5d2fcfc => {
            this.promises[_b6f2bd98c862] = _38c7d5d2fcfc;
          });
          return !!_180466bcc607 && new Response(_180466bcc607.body, {
            headers: _180466bcc607.headers,
            status: _180466bcc607.status,
            statusText: _180466bcc607.statusText
          });
        }
      }
    },
    5790: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.d(_b6f2bd98c862, {
        Pf: () => m,
        V3: () => S,
        dT: () => w
      });
      var _313eac335fae = _1bd41f000df9(5956), _180466bcc607 = _1bd41f000df9(8228), _7f05829ad9f4 = _1bd41f000df9(6684), _93a414b82620 = _1bd41f000df9(1472), _3ee9590bcdd1 = _1bd41f000df9(1478), _bf69fdf532e4 = _1bd41f000df9(1427), _ef3c27203dbf = _1bd41f000df9(37), _c20fa90a80b7 = _1bd41f000df9(4435), _eb5e33ca1634 = _1bd41f000df9(884), _8aa5e5cf048b = _1bd41f000df9(2614), _e25772762281 = _1bd41f000df9(2015), _6b23ce5f34cb = _1bd41f000df9(8665).A;
      function g(_38c7d5d2fcfc) {
        return _38c7d5d2fcfc.status >= 300 && _38c7d5d2fcfc.status < 400;
      }
      async function m(_38c7d5d2fcfc, _b6f2bd98c862) {
        try {
          let _1bd41f000df9, _313eac335fae, _3ee9590bcdd1 = new URL(_38c7d5d2fcfc.url);
          if (_3ee9590bcdd1.pathname === this.config.files.wasm) return fetch(this.config.files.wasm).then(async _38c7d5d2fcfc => {
            let _b6f2bd98c862 = await _38c7d5d2fcfc.arrayBuffer(), _1bd41f000df9 = btoa(new Uint8Array(_b6f2bd98c862).reduce((_38c7d5d2fcfc, _b6f2bd98c862) => (_38c7d5d2fcfc.push(String.fromCharCode(_b6f2bd98c862)), 
            _38c7d5d2fcfc), []).join("")), _313eac335fae = "";
            return _313eac335fae += `if ('document' in self && document.currentScript) { document.currentScript.remove(); }\nself.WASM = '${_1bd41f000df9}';`, 
            new Response(_313eac335fae, {
              headers: {
                "content-type": "text/javascript"
              }
            });
          });
          let _c20fa90a80b7 = "", _eb5e33ca1634 = {};
          for (let [_38c7d5d2fcfc, _b6f2bd98c862] of [ ..._3ee9590bcdd1.searchParams.entries() ]) {
            switch (_38c7d5d2fcfc) {
             case "type":
              _c20fa90a80b7 = _b6f2bd98c862;
              break;

             case "dest":
              break;

             case "topFrame":
              _1bd41f000df9 = _b6f2bd98c862;
              break;

             case "parentFrame":
              _313eac335fae = _b6f2bd98c862;
              break;

             default:
              _6b23ce5f34cb.warn(`${_3ee9590bcdd1.href} extraneous query parameter ${_38c7d5d2fcfc}. Assuming <form> element`), 
              _eb5e33ca1634[_38c7d5d2fcfc] = _b6f2bd98c862;
            }
            _3ee9590bcdd1.searchParams.delete(_38c7d5d2fcfc);
          }
          let _8aa5e5cf048b = new URL((0, _93a414b82620.v2)(_3ee9590bcdd1));
          for (let [_38c7d5d2fcfc, _b6f2bd98c862] of Object.entries(_eb5e33ca1634)) _8aa5e5cf048b.searchParams.set(_38c7d5d2fcfc, _b6f2bd98c862);
          let _e25772762281 = {
            origin: _8aa5e5cf048b,
            base: _8aa5e5cf048b,
            topFrameName: _1bd41f000df9,
            parentFrameName: _313eac335fae
          };
          if (_3ee9590bcdd1.pathname.startsWith(`${this.config.prefix}blob:`) || _3ee9590bcdd1.pathname.startsWith(`${this.config.prefix}data:`)) {
            let _b6f2bd98c862, _1bd41f000df9 = _3ee9590bcdd1.pathname.substring(this.config.prefix.length);
            _1bd41f000df9.startsWith("blob:") && (_1bd41f000df9 = (0, _93a414b82620.$n)(_1bd41f000df9));
            let _313eac335fae = await fetch(_1bd41f000df9, {});
            _313eac335fae.finalURL = _1bd41f000df9.startsWith("blob:") ? _1bd41f000df9 : "(data url)", 
            _313eac335fae.body && (_b6f2bd98c862 = await b(_313eac335fae, _e25772762281, _38c7d5d2fcfc.destination, _c20fa90a80b7, this.cookieStore));
            let _180466bcc607 = Object.fromEntries(_313eac335fae.headers.entries());
            return crossOriginIsolated && (_180466bcc607["Cross-Origin-Opener-Policy"] = "same-origin", 
            _180466bcc607["Cross-Origin-Embedder-Policy"] = "require-corp"), new Response(_b6f2bd98c862, {
              status: _313eac335fae.status,
              statusText: _313eac335fae.statusText,
              headers: _180466bcc607
            });
          }
          let _5e9d93e0c4ea = this.serviceWorkers.find(_38c7d5d2fcfc => _38c7d5d2fcfc.origin === _8aa5e5cf048b.origin);
          if (_5e9d93e0c4ea?.connected && "swruntime" !== _3ee9590bcdd1.searchParams.get("from")) {
            let _b6f2bd98c862 = await _5e9d93e0c4ea.fetch(_38c7d5d2fcfc);
            if (_b6f2bd98c862) return _b6f2bd98c862;
          }
          if (_8aa5e5cf048b.origin === new URL(_38c7d5d2fcfc.url).origin) throw Error("attempted to fetch from same origin - this means the site has obtained a reference to the real origin, aborting");
          let _c8669f180c95 = new _bf69fdf532e4.u;
          for (let [_b6f2bd98c862, _1bd41f000df9] of _38c7d5d2fcfc.headers.entries()) _c8669f180c95.set(_b6f2bd98c862, _1bd41f000df9);
          if (_b6f2bd98c862 && new URL(_b6f2bd98c862.url).pathname.startsWith(_ef3c27203dbf.$W.prefix)) {
            let _38c7d5d2fcfc = new URL((0, _93a414b82620.v2)(_b6f2bd98c862.url));
            _38c7d5d2fcfc.toString().includes("youtube.com") || (_c8669f180c95.set("Referer", _38c7d5d2fcfc.href), 
            _c8669f180c95.set("Origin", _38c7d5d2fcfc.origin));
          }
          let _cc1fb7121592 = this.cookieStore.getCookies(_8aa5e5cf048b, !1);
          _cc1fb7121592.length && _c8669f180c95.set("Cookie", _cc1fb7121592);
          let _8d492394ab03 = !1;
          if ("iframe" === _38c7d5d2fcfc.destination && "navigate" === _38c7d5d2fcfc.mode && _38c7d5d2fcfc.referrer && "no-referrer" !== _38c7d5d2fcfc.referrer && _38c7d5d2fcfc.referrer !== location.origin + _ef3c27203dbf.$W.prefix + "no-referrer") {
            let _b6f2bd98c862 = _38c7d5d2fcfc.referrer, _1bd41f000df9 = await self.clients.matchAll({
              type: "window"
            });
            for (;_b6f2bd98c862; ) {
              if (!_b6f2bd98c862.includes(_ef3c27203dbf.$W.prefix)) {
                _8d492394ab03 = !0;
                break;
              }
              let _38c7d5d2fcfc = _1bd41f000df9.find(_38c7d5d2fcfc => _38c7d5d2fcfc.url === _b6f2bd98c862), _313eac335fae = await (0, 
              _7f05829ad9f4.Yq)(_b6f2bd98c862);
              if (!_313eac335fae || !_313eac335fae.referrer) {
                _38c7d5d2fcfc && _b6f2bd98c862.startsWith(location.origin) && (_8d492394ab03 = !0);
                break;
              }
              if (_38c7d5d2fcfc && "nested" === _38c7d5d2fcfc.frameType) _b6f2bd98c862 = _313eac335fae.referrer; else break;
            }
          }
          _8d492394ab03 ? (_c8669f180c95.set("Sec-Fetch-Dest", "document"), _c8669f180c95.set("Sec-Fetch-Mode", "navigate")) : (_c8669f180c95.set("Sec-Fetch-Dest", _38c7d5d2fcfc.destination || "empty"), 
          _c8669f180c95.set("Sec-Fetch-Mode", _38c7d5d2fcfc.mode));
          let _a0bf3a096765 = "none";
          if (_38c7d5d2fcfc.referrer && "" !== _38c7d5d2fcfc.referrer && "no-referrer" !== _38c7d5d2fcfc.referrer && _38c7d5d2fcfc.referrer !== location.origin + _ef3c27203dbf.$W.prefix + "no-referrer" && _38c7d5d2fcfc.referrer.includes(_ef3c27203dbf.$W.prefix)) {
            let _b6f2bd98c862 = (0, _93a414b82620.v2)(_38c7d5d2fcfc.referrer);
            if (_b6f2bd98c862) {
              let _38c7d5d2fcfc = new URL(_b6f2bd98c862);
              _a0bf3a096765 = await (0, _180466bcc607.ps)(_e25772762281, _38c7d5d2fcfc, this.client);
            }
          }
          await (0, _7f05829ad9f4.rj)(_8aa5e5cf048b.toString(), _38c7d5d2fcfc.referrer ? (0, 
          _93a414b82620.v2)(_38c7d5d2fcfc.referrer) : null, _a0bf3a096765), _c8669f180c95.set("Sec-Fetch-Site", await (0, 
          _7f05829ad9f4.hU)(_8aa5e5cf048b.toString(), _a0bf3a096765));
          let _799568068b9b = new S(_8aa5e5cf048b, _c8669f180c95.headers, _38c7d5d2fcfc.body, _38c7d5d2fcfc.method, _38c7d5d2fcfc.destination, _b6f2bd98c862);
          this.dispatchEvent(_799568068b9b);
          let _6cff3efb2ca9 = await _799568068b9b.response || await this.client.fetch(_799568068b9b.url, {
            method: _799568068b9b.method,
            body: _799568068b9b.body,
            headers: _799568068b9b.requestHeaders,
            credentials: "omit",
            mode: "cors" === _38c7d5d2fcfc.mode ? _38c7d5d2fcfc.mode : "same-origin",
            cache: _38c7d5d2fcfc.cache,
            redirect: "manual",
            duplex: "half"
          });
          return _6cff3efb2ca9.finalURL = _799568068b9b.url.href, await y(_8aa5e5cf048b, _e25772762281, _c20fa90a80b7, _38c7d5d2fcfc.destination, _38c7d5d2fcfc.mode, _6cff3efb2ca9, this.cookieStore, _b6f2bd98c862, this.client, this, _38c7d5d2fcfc.referrer);
        } catch (_b6f2bd98c862) {
          let _1bd41f000df9 = {
            message: _b6f2bd98c862.message,
            url: _38c7d5d2fcfc.url,
            destination: _38c7d5d2fcfc.destination
          };
          if (_b6f2bd98c862.cause && (_1bd41f000df9.cause = _b6f2bd98c862.cause, _b6f2bd98c862.cause instanceof AggregateError && (_1bd41f000df9.causeErrors = _b6f2bd98c862.cause.errors)), 
          _b6f2bd98c862.stack && (_1bd41f000df9.stack = _b6f2bd98c862.stack), console.error("ERROR FROM SERVICE WORKER FETCH: ", _1bd41f000df9), 
          console.error(_b6f2bd98c862), ![ "document", "iframe" ].includes(_38c7d5d2fcfc.destination)) return new Response(void 0, {
            status: 500
          });
          let _180466bcc607 = Object.entries(_1bd41f000df9).map(([_38c7d5d2fcfc, _b6f2bd98c862]) => `${_38c7d5d2fcfc.charAt(0).toUpperCase() + _38c7d5d2fcfc.slice(1)}: ${_b6f2bd98c862}`).join("\n\n");
          return (0, _313eac335fae.v)(_180466bcc607, (0, _93a414b82620.v2)(_38c7d5d2fcfc.url));
        }
      }
      async function y(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9, _313eac335fae, _3ee9590bcdd1, _bf69fdf532e4, _eb5e33ca1634, _8aa5e5cf048b, _e25772762281, _6b23ce5f34cb, _5e9d93e0c4ea) {
        let _c8669f180c95, _cc1fb7121592 = "navigate" === _3ee9590bcdd1 && [ "document", "iframe" ].includes(_313eac335fae), _8d492394ab03 = await (0, 
        _c20fa90a80b7.l)(_bf69fdf532e4.rawHeaders, _b6f2bd98c862, _e25772762281, {
          get: _7f05829ad9f4.Yq,
          set: _7f05829ad9f4.pL
        });
        if (_cc1fb7121592 && _8d492394ab03["referrer-policy"] && _5e9d93e0c4ea && await (0, 
        _7f05829ad9f4.pL)(_38c7d5d2fcfc.href, _8d492394ab03["referrer-policy"], _5e9d93e0c4ea), 
        g(_bf69fdf532e4)) {
          let _b6f2bd98c862 = new URL((0, _93a414b82620.v2)(_8d492394ab03.location));
          await (0, _7f05829ad9f4.YH)(_38c7d5d2fcfc.toString(), _b6f2bd98c862.toString(), _8d492394ab03["referrer-policy"]);
          let _313eac335fae = await (0, _180466bcc607.ps)({
            origin: _b6f2bd98c862,
            base: _b6f2bd98c862
          }, _38c7d5d2fcfc, _e25772762281);
          if (await (0, _7f05829ad9f4.hU)(_b6f2bd98c862.toString(), _313eac335fae), _1bd41f000df9) {
            let _38c7d5d2fcfc = new URL(_8d492394ab03.location);
            _38c7d5d2fcfc.searchParams.set("type", _1bd41f000df9), _8d492394ab03.location = _38c7d5d2fcfc.href;
          }
        }
        let _a0bf3a096765 = _8d492394ab03["set-cookie"] || [];
        for (let _b6f2bd98c862 in _a0bf3a096765) if (_8aa5e5cf048b) {
          let _1bd41f000df9 = _6b23ce5f34cb.dispatch(_8aa5e5cf048b, {
            studyjet$type: "cookie",
            cookie: _b6f2bd98c862,
            url: _38c7d5d2fcfc.href
          });
          "document" !== _313eac335fae && "iframe" !== _313eac335fae && await _1bd41f000df9;
        }
        for (let _b6f2bd98c862 in await _eb5e33ca1634.setCookies(_a0bf3a096765 instanceof Array ? _a0bf3a096765 : [ _a0bf3a096765 ], _38c7d5d2fcfc), 
        _8d492394ab03) Array.isArray(_8d492394ab03[_b6f2bd98c862]) && (_8d492394ab03[_b6f2bd98c862] = _8d492394ab03[_b6f2bd98c862][0]);
        if (function(_38c7d5d2fcfc, _b6f2bd98c862) {
          if ([ "document", "iframe" ].includes(_b6f2bd98c862)) {
            let _b6f2bd98c862 = _38c7d5d2fcfc["content-disposition"];
            if (_b6f2bd98c862) {
              if ("inline" !== _b6f2bd98c862) return !0;
            } else {
              let _b6f2bd98c862 = _38c7d5d2fcfc["content-type"]?.split(";")[0].trim().toLowerCase();
              if (_b6f2bd98c862 && ![ "text/html", "text/plain", "text/css", "text/javascript", "text/xml", "application/javascript", "application/json", "application/xml", "application/pdf" ].includes(_b6f2bd98c862) && !_b6f2bd98c862.startsWith("text") && !_b6f2bd98c862.startsWith("image") && !_b6f2bd98c862.startsWith("font") && !_b6f2bd98c862.startsWith("video")) return !0;
            }
          }
          return !1;
        }(_8d492394ab03, _313eac335fae) && !g(_bf69fdf532e4)) if ((0, _ef3c27203dbf.U5)("interceptDownloads", _38c7d5d2fcfc)) {
          if (!_8aa5e5cf048b) throw Error("cant find client");
          let _b6f2bd98c862 = null, _1bd41f000df9 = _8d492394ab03["content-disposition"];
          if ("string" == typeof _1bd41f000df9) {
            let _38c7d5d2fcfc = _1bd41f000df9.match(/filename=["']?([^"';\n]*)["']?/i);
            _38c7d5d2fcfc && _38c7d5d2fcfc[1] && (_b6f2bd98c862 = _38c7d5d2fcfc[1]);
          }
          let _313eac335fae = _8d492394ab03["content-length"], _180466bcc607 = await clients.matchAll({});
          if ((_180466bcc607 = _180466bcc607.filter(_38c7d5d2fcfc => !_38c7d5d2fcfc.url.includes(_ef3c27203dbf.$W.prefix))).length < 1) throw Error("couldn't find a controller client to dispatch download to");
          let _7f05829ad9f4 = {
            filename: _b6f2bd98c862,
            url: _38c7d5d2fcfc.href,
            type: _8d492394ab03["content-type"],
            body: _bf69fdf532e4.body,
            length: Number(_313eac335fae)
          };
          _180466bcc607[0].postMessage({
            studyjet$type: "download",
            download: _7f05829ad9f4
          }, [ _bf69fdf532e4.body ]), await new Promise(() => {});
        } else {
          let _38c7d5d2fcfc = _8d492394ab03["content-disposition"];
          if (!/\s*?((inline|attachment);\s*?)filename=/i.test(_38c7d5d2fcfc)) {
            let _b6f2bd98c862 = /^\s*?attachment/i.test(_38c7d5d2fcfc) ? "attachment" : "inline", [_1bd41f000df9] = new URL(_bf69fdf532e4.finalURL).pathname.split("/").slice(-1);
            _8d492394ab03["content-disposition"] = `${_b6f2bd98c862}; filename=${JSON.stringify(_1bd41f000df9)}`;
          }
        }
        _bf69fdf532e4.body && !g(_bf69fdf532e4) && (_c8669f180c95 = await b(_bf69fdf532e4, _b6f2bd98c862, _313eac335fae, _1bd41f000df9, _eb5e33ca1634)), 
        "text/event-stream" === _8d492394ab03.accept && (_8d492394ab03["content-type"] = "text/event-stream"), 
        delete _8d492394ab03["permissions-policy"], crossOriginIsolated && [ "document", "iframe", "worker", "sharedworker", "style", "script" ].includes(_313eac335fae) && (_8d492394ab03["Cross-Origin-Embedder-Policy"] = "require-corp", 
        _8d492394ab03["Cross-Origin-Opener-Policy"] = "same-origin");
        let _799568068b9b = new w(_c8669f180c95, _8d492394ab03, _bf69fdf532e4.status, _bf69fdf532e4.statusText, _313eac335fae, _38c7d5d2fcfc, _bf69fdf532e4, _8aa5e5cf048b);
        return _6b23ce5f34cb.dispatchEvent(_799568068b9b), g(_bf69fdf532e4) || await (0, 
        _7f05829ad9f4.Sn)(_38c7d5d2fcfc.toString()), new Response(_799568068b9b.responseBody, {
          headers: _799568068b9b.responseHeaders,
          status: _799568068b9b.status,
          statusText: _799568068b9b.statusText
        });
      }
      async function b(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9, _313eac335fae, _180466bcc607) {
        switch (_1bd41f000df9) {
         case "iframe":
         case "document":
          if (_38c7d5d2fcfc.headers.get("content-type")?.startsWith("text/html")) return (0, 
          _eb5e33ca1634.Qs)(await _38c7d5d2fcfc.text(), _180466bcc607, _b6f2bd98c862, !0);
          return _38c7d5d2fcfc.body;

         case "script":
          return (0, _3ee9590bcdd1.o)(new Uint8Array(await _38c7d5d2fcfc.arrayBuffer()), _38c7d5d2fcfc.finalURL, _b6f2bd98c862, "module" === _313eac335fae);

         case "style":
          return (0, _8aa5e5cf048b.s)(await _38c7d5d2fcfc.text(), _b6f2bd98c862);

         case "sharedworker":
         case "worker":
          return (0, _e25772762281.i)(new Uint8Array(await _38c7d5d2fcfc.arrayBuffer()), _313eac335fae, _38c7d5d2fcfc.finalURL, _b6f2bd98c862);

         default:
          return _38c7d5d2fcfc.body;
        }
      }
      class w extends Event {
        responseBody;
        responseHeaders;
        status;
        statusText;
        destination;
        url;
        rawResponse;
        client;
        constructor(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9, _313eac335fae, _180466bcc607, _7f05829ad9f4, _93a414b82620, _3ee9590bcdd1) {
          super("handleResponse"), this.responseBody = _38c7d5d2fcfc, this.responseHeaders = _b6f2bd98c862, 
          this.status = _1bd41f000df9, this.statusText = _313eac335fae, this.destination = _180466bcc607, 
          this.url = _7f05829ad9f4, this.rawResponse = _93a414b82620, this.client = _3ee9590bcdd1;
        }
      }
      class S extends Event {
        url;
        requestHeaders;
        body;
        method;
        destination;
        client;
        constructor(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9, _313eac335fae, _180466bcc607, _7f05829ad9f4) {
          super("request"), this.url = _38c7d5d2fcfc, this.requestHeaders = _b6f2bd98c862, 
          this.body = _1bd41f000df9, this.method = _313eac335fae, this.destination = _180466bcc607, 
          this.client = _7f05829ad9f4;
        }
        response;
      }
    },
    7510: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.r(_b6f2bd98c862), _1bd41f000df9.d(_b6f2bd98c862, {
        FakeServiceWorker: () => _313eac335fae.H,
        StudyJetHandleResponseEvent: () => _180466bcc607.dT,
        StudyJetRequestEvent: () => _180466bcc607.V3,
        StudyJetServiceWorker: () => d,
        errorTemplate: () => _c20fa90a80b7.B,
        handleFetch: () => _180466bcc607.Pf,
        renderError: () => _c20fa90a80b7.v
      });
      var _313eac335fae = _1bd41f000df9(1403), _180466bcc607 = _1bd41f000df9(5790), _7f05829ad9f4 = _1bd41f000df9(4110), _93a414b82620 = _1bd41f000df9(1561), _3ee9590bcdd1 = _1bd41f000df9(3831), _bf69fdf532e4 = _1bd41f000df9(6570), _ef3c27203dbf = _1bd41f000df9(37), _c20fa90a80b7 = _1bd41f000df9(5956);
      class d extends EventTarget {
        client;
        config;
        syncPool={};
        synctoken=0;
        cookieStore=new _3ee9590bcdd1.k;
        serviceWorkers=[];
        constructor() {
          super(), this.client = new _7f05829ad9f4.Ay, (async () => {
            let _38c7d5d2fcfc = await (0, _bf69fdf532e4.P2)("@d7a6431b92e", 1), _b6f2bd98c862 = await _38c7d5d2fcfc.get("cookies", "cookies");
            _b6f2bd98c862 && this.cookieStore.load(_b6f2bd98c862);
          })(), addEventListener("message", async ({data: _38c7d5d2fcfc}) => {
            if ("studyjet$type" in _38c7d5d2fcfc) {
              if ("studyjet$token" in _38c7d5d2fcfc) {
                let _b6f2bd98c862 = this.syncPool[_38c7d5d2fcfc.studyjet$token];
                delete this.syncPool[_38c7d5d2fcfc.studyjet$token], _b6f2bd98c862(_38c7d5d2fcfc);
                return;
              }
              if ("registerServiceWorker" === _38c7d5d2fcfc.studyjet$type) return void this.serviceWorkers.push(new _313eac335fae.H(_38c7d5d2fcfc.port, _38c7d5d2fcfc.origin));
              if ("cookie" === _38c7d5d2fcfc.studyjet$type) {
                this.cookieStore.setCookies([ _38c7d5d2fcfc.cookie ], new URL(_38c7d5d2fcfc.url));
                let _b6f2bd98c862 = await (0, _bf69fdf532e4.P2)("@d7a6431b92e", 1);
                await _b6f2bd98c862.put("cookies", JSON.parse(this.cookieStore.dump()), "cookies");
              }
              "loadConfig" === _38c7d5d2fcfc.studyjet$type && (this.config = _38c7d5d2fcfc.config);
            }
          });
        }
        async dispatch(_38c7d5d2fcfc, _b6f2bd98c862) {
          let _1bd41f000df9, _313eac335fae = this.synctoken++, _180466bcc607 = new Promise(_38c7d5d2fcfc => _1bd41f000df9 = _38c7d5d2fcfc);
          return this.syncPool[_313eac335fae] = _1bd41f000df9, _b6f2bd98c862.studyjet$token = _313eac335fae, 
          _38c7d5d2fcfc.postMessage(_b6f2bd98c862), await _180466bcc607;
        }
        async loadConfig() {
          if (this.config) return;
          let _38c7d5d2fcfc = await (0, _bf69fdf532e4.P2)("@d7a6431b92e", 1);
          this.config = await _38c7d5d2fcfc.get("config", "config"), this.config && ((0, _ef3c27203dbf.Nk)(this.config), 
          await (0, _93a414b82620.n$)());
        }
        route({request: _38c7d5d2fcfc}) {
          return !!_38c7d5d2fcfc.url.startsWith(location.origin + this.config.prefix) || !!_38c7d5d2fcfc.url.startsWith(location.origin + this.config.files.wasm);
        }
        async fetch({request: _38c7d5d2fcfc, clientId: _b6f2bd98c862}) {
          this.config || await this.loadConfig();
          let _1bd41f000df9 = await self.clients.get(_b6f2bd98c862);
          return _180466bcc607.Pf.call(this, _38c7d5d2fcfc, _1bd41f000df9);
        }
      }
    },
    4110: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.d(_b6f2bd98c862, {
        Ay: () => S,
        DD: () => w
      });
      let _313eac335fae = globalThis.fetch, _180466bcc607 = globalThis.SharedWorker, _7f05829ad9f4 = globalThis.localStorage, _93a414b82620 = globalThis.navigator.serviceWorker, _3ee9590bcdd1 = MessagePort.prototype.postMessage, _bf69fdf532e4 = {
        prototype: {
          send: WebSocket.prototype.send
        },
        CLOSED: WebSocket.CLOSED,
        CLOSING: WebSocket.CLOSING,
        CONNECTING: WebSocket.CONNECTING,
        OPEN: WebSocket.OPEN
      };
      async function c() {
        let _38c7d5d2fcfc = Promise.race([ Promise.any((await self.clients.matchAll({
          type: "window",
          includeUncontrolled: !0
        })).map(async _38c7d5d2fcfc => {
          let _b6f2bd98c862, _1bd41f000df9 = await (_b6f2bd98c862 = new MessageChannel, new Promise(_1bd41f000df9 => {
            _38c7d5d2fcfc.postMessage({
              type: "getPort",
              port: _b6f2bd98c862.port2
            }, [ _b6f2bd98c862.port2 ]), _b6f2bd98c862.port1.onmessage = _38c7d5d2fcfc => {
              _1bd41f000df9(_38c7d5d2fcfc.data);
            };
          }));
          return await u(_1bd41f000df9), _1bd41f000df9;
        })), new Promise((_38c7d5d2fcfc, _b6f2bd98c862) => setTimeout(_b6f2bd98c862, 1e3, TypeError("timeout"))) ]);
        try {
          return await _38c7d5d2fcfc;
        } catch (_38c7d5d2fcfc) {
          if (_38c7d5d2fcfc instanceof AggregateError) throw console.error("bare-mux: failed to get a bare-mux SharedWorker MessagePort as all clients returned an invalid MessagePort."), 
          Error("All clients returned an invalid MessagePort.", {
            cause: _38c7d5d2fcfc
          });
          return console.warn("bare-mux: failed to get a bare-mux SharedWorker MessagePort within 1s, retrying"), 
          await c();
        }
      }
      function u(_38c7d5d2fcfc) {
        let _b6f2bd98c862 = new MessageChannel, _1bd41f000df9 = new Promise((_38c7d5d2fcfc, _1bd41f000df9) => {
          _b6f2bd98c862.port1.onmessage = _b6f2bd98c862 => {
            "pong" === _b6f2bd98c862.data.type && _38c7d5d2fcfc();
          }, setTimeout(_1bd41f000df9, 1500);
        });
        return _3ee9590bcdd1.call(_38c7d5d2fcfc, {
          message: {
            type: "ping"
          },
          port: _b6f2bd98c862.port2
        }, [ _b6f2bd98c862.port2 ]), _1bd41f000df9;
      }
      function d(_38c7d5d2fcfc, _b6f2bd98c862) {
        let _1bd41f000df9 = new _180466bcc607(_38c7d5d2fcfc, "ridgewood-stem-worker");
        return _b6f2bd98c862 && _93a414b82620.addEventListener("message", _b6f2bd98c862 => {
          if ("getPort" === _b6f2bd98c862.data.type && _b6f2bd98c862.data.port) {
            console.debug("bare-mux: recieved request for port from sw");
            let _1bd41f000df9 = new _180466bcc607(_38c7d5d2fcfc, "ridgewood-stem-worker");
            _3ee9590bcdd1.call(_b6f2bd98c862.data.port, _1bd41f000df9.port, [ _1bd41f000df9.port ]);
          }
        }), _1bd41f000df9.port;
      }
      let _ef3c27203dbf = null;
      class p {
        channel;
        port;
        workerPath;
        constructor(_38c7d5d2fcfc) {
          this.channel = new BroadcastChannel("bare-mux"), _38c7d5d2fcfc instanceof MessagePort || _38c7d5d2fcfc instanceof Promise ? this.port = _38c7d5d2fcfc : this.createChannel(_38c7d5d2fcfc, !0);
        }
        createChannel(_38c7d5d2fcfc, _b6f2bd98c862) {
          if (self.clients) this.port = c(), this.channel.onmessage = _38c7d5d2fcfc => {
            "refreshPort" === _38c7d5d2fcfc.data.type && (this.port = c());
          }; else if (_38c7d5d2fcfc && SharedWorker) {
            if (!_38c7d5d2fcfc.startsWith("/") && !_38c7d5d2fcfc.includes(":")) throw Error("Invalid URL. Must be absolute or start at the root.");
            this.port = d(_38c7d5d2fcfc, _b6f2bd98c862), console.debug("bare-mux: setting localStorage bare-mux-path to", _38c7d5d2fcfc), 
            _7f05829ad9f4["bare-mux-path"] = _38c7d5d2fcfc;
          } else {
            if (!SharedWorker) throw Error("Unable to get a channel to the SharedWorker.");
            {
              let _38c7d5d2fcfc = _7f05829ad9f4["bare-mux-path"];
              if (console.debug("bare-mux: got localStorage bare-mux-path:", _38c7d5d2fcfc), !_38c7d5d2fcfc) throw Error("Unable to get bare-mux workerPath from localStorage.");
              this.port = d(_38c7d5d2fcfc, _b6f2bd98c862);
            }
          }
        }
        async sendMessage(_38c7d5d2fcfc, _b6f2bd98c862) {
          this.port instanceof Promise && (this.port = await this.port);
          try {
            await u(this.port);
          } catch {
            return console.warn("bare-mux: Failed to get a ping response from the worker within 1.5s. Assuming port is dead."), 
            this.createChannel(), await this.sendMessage(_38c7d5d2fcfc, _b6f2bd98c862);
          }
          let _1bd41f000df9 = new MessageChannel, _313eac335fae = [ _1bd41f000df9.port2, ..._b6f2bd98c862 || [] ], _180466bcc607 = new Promise((_38c7d5d2fcfc, _b6f2bd98c862) => {
            _1bd41f000df9.port1.onmessage = _1bd41f000df9 => {
              let _313eac335fae = _1bd41f000df9.data;
              "error" === _313eac335fae.type ? _b6f2bd98c862(_313eac335fae.error) : _38c7d5d2fcfc(_313eac335fae);
            };
          });
          return _3ee9590bcdd1.call(this.port, {
            message: _38c7d5d2fcfc,
            port: _1bd41f000df9.port2
          }, _313eac335fae), await _180466bcc607;
        }
      }
      class f extends EventTarget {
        protocols;
        url;
        readyState=_bf69fdf532e4.CONNECTING;
        channel;
        constructor(_38c7d5d2fcfc, _b6f2bd98c862 = [], _1bd41f000df9, _313eac335fae) {
          super(), this.protocols = _b6f2bd98c862, this.url = _38c7d5d2fcfc.toString(), this.protocols = _b6f2bd98c862;
          const i = _38c7d5d2fcfc => {
            this.protocols = _38c7d5d2fcfc, this.readyState = _bf69fdf532e4.OPEN;
            let _b6f2bd98c862 = new Event("open");
            this.dispatchEvent(_b6f2bd98c862);
          }, a = async _38c7d5d2fcfc => {
            let _b6f2bd98c862 = new MessageEvent("message", {
              data: _38c7d5d2fcfc
            });
            this.dispatchEvent(_b6f2bd98c862);
          }, s = (_38c7d5d2fcfc, _b6f2bd98c862) => {
            this.readyState = _bf69fdf532e4.CLOSED;
            let _1bd41f000df9 = new CloseEvent("close", {
              code: _38c7d5d2fcfc,
              reason: _b6f2bd98c862
            });
            this.dispatchEvent(_1bd41f000df9);
          }, o = () => {
            this.readyState = _bf69fdf532e4.CLOSED;
            let _38c7d5d2fcfc = new Event("error");
            this.dispatchEvent(_38c7d5d2fcfc);
          };
          this.channel = new MessageChannel, this.channel.port1.onmessage = _38c7d5d2fcfc => {
            "open" === _38c7d5d2fcfc.data.type ? i(_38c7d5d2fcfc.data.args[0]) : "message" === _38c7d5d2fcfc.data.type ? a(_38c7d5d2fcfc.data.args[0]) : "close" === _38c7d5d2fcfc.data.type ? s(_38c7d5d2fcfc.data.args[0], _38c7d5d2fcfc.data.args[1]) : "error" === _38c7d5d2fcfc.data.type && o();
          }, _1bd41f000df9.sendMessage({
            type: "websocket",
            websocket: {
              url: _38c7d5d2fcfc.toString(),
              protocols: _b6f2bd98c862,
              requestHeaders: _313eac335fae,
              channel: this.channel.port2
            }
          }, [ this.channel.port2 ]);
        }
        send(..._38c7d5d2fcfc) {
          if (this.readyState === _bf69fdf532e4.CONNECTING) throw new DOMException("Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.");
          let _b6f2bd98c862 = _38c7d5d2fcfc[0];
          _b6f2bd98c862.buffer && (_b6f2bd98c862 = _b6f2bd98c862.buffer.slice(_b6f2bd98c862.byteOffset, _b6f2bd98c862.byteOffset + _b6f2bd98c862.byteLength)), 
          _3ee9590bcdd1.call(this.channel.port1, {
            type: "data",
            data: _b6f2bd98c862
          }, _b6f2bd98c862 instanceof ArrayBuffer ? [ _b6f2bd98c862 ] : []);
        }
        close(_38c7d5d2fcfc, _b6f2bd98c862) {
          _3ee9590bcdd1.call(this.channel.port1, {
            type: "close",
            closeCode: _38c7d5d2fcfc,
            closeReason: _b6f2bd98c862
          });
        }
      }
      function g(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
        console.error(`error while processing '${_1bd41f000df9}': `, _b6f2bd98c862), _38c7d5d2fcfc.postMessage({
          type: "error",
          error: _b6f2bd98c862
        });
      }
      let _c20fa90a80b7 = [ "ws:", "wss:" ], _eb5e33ca1634 = [ 101, 204, 205, 304 ], _8aa5e5cf048b = [ 301, 302, 303, 307, 308 ];
      class w {
        worker;
        constructor(_38c7d5d2fcfc) {
          this.worker = new p(_38c7d5d2fcfc);
        }
        async getTransport() {
          return (await this.worker.sendMessage({
            type: "get"
          })).name;
        }
        async setTransport(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
          await this.setManualTransport(`\n\t\t\tconst { default: BareTransport } = await import("${_38c7d5d2fcfc}");\n\t\t\treturn [BareTransport, "${_38c7d5d2fcfc}"];\n\t\t`, _b6f2bd98c862, _1bd41f000df9);
        }
        async setManualTransport(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
          if ("bare-mux-remote" === _38c7d5d2fcfc) throw Error("Use setRemoteTransport.");
          await this.worker.sendMessage({
            type: "set",
            client: {
              function: _38c7d5d2fcfc,
              args: _b6f2bd98c862
            }
          }, _1bd41f000df9);
        }
        async setRemoteTransport(_38c7d5d2fcfc, _b6f2bd98c862) {
          let _1bd41f000df9 = new MessageChannel;
          _1bd41f000df9.port1.onmessage = async _b6f2bd98c862 => {
            let _1bd41f000df9 = _b6f2bd98c862.data.port, _313eac335fae = _b6f2bd98c862.data.message;
            if ("fetch" === _313eac335fae.type) try {
              _38c7d5d2fcfc.ready || await _38c7d5d2fcfc.init(), await async function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
                let _313eac335fae = await _1bd41f000df9.request(new URL(_38c7d5d2fcfc.fetch.remote), _38c7d5d2fcfc.fetch.method, _38c7d5d2fcfc.fetch.body, _38c7d5d2fcfc.fetch.headers, null);
                if (!function() {
                  if (null === _ef3c27203dbf) {
                    let _38c7d5d2fcfc, _b6f2bd98c862 = new MessageChannel, _1bd41f000df9 = new ReadableStream;
                    try {
                      _3ee9590bcdd1.call(_b6f2bd98c862.port1, _1bd41f000df9, [ _1bd41f000df9 ]), _38c7d5d2fcfc = !0;
                    } catch (_b6f2bd98c862) {
                      _38c7d5d2fcfc = !1;
                    }
                    return _ef3c27203dbf = _38c7d5d2fcfc, _38c7d5d2fcfc;
                  }
                  return _ef3c27203dbf;
                }() && _313eac335fae.body instanceof ReadableStream) {
                  let _38c7d5d2fcfc = new Response(_313eac335fae.body);
                  _313eac335fae.body = await _38c7d5d2fcfc.arrayBuffer();
                }
                _313eac335fae.body instanceof ReadableStream || _313eac335fae.body instanceof ArrayBuffer ? _3ee9590bcdd1.call(_b6f2bd98c862, {
                  type: "fetch",
                  fetch: _313eac335fae
                }, [ _313eac335fae.body ]) : _3ee9590bcdd1.call(_b6f2bd98c862, {
                  type: "fetch",
                  fetch: _313eac335fae
                });
              }(_313eac335fae, _1bd41f000df9, _38c7d5d2fcfc);
            } catch (_38c7d5d2fcfc) {
              g(_1bd41f000df9, _38c7d5d2fcfc, "fetch");
            } else if ("websocket" === _313eac335fae.type) try {
              _38c7d5d2fcfc.ready || await _38c7d5d2fcfc.init(), await async function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
                let [_313eac335fae, _180466bcc607] = _1bd41f000df9.connect(new URL(_38c7d5d2fcfc.websocket.url), _38c7d5d2fcfc.websocket.protocols, _38c7d5d2fcfc.websocket.requestHeaders, _b6f2bd98c862 => {
                  _3ee9590bcdd1.call(_38c7d5d2fcfc.websocket.channel, {
                    type: "open",
                    args: [ _b6f2bd98c862 ]
                  });
                }, _b6f2bd98c862 => {
                  _b6f2bd98c862 instanceof ArrayBuffer ? _3ee9590bcdd1.call(_38c7d5d2fcfc.websocket.channel, {
                    type: "message",
                    args: [ _b6f2bd98c862 ]
                  }, [ _b6f2bd98c862 ]) : _3ee9590bcdd1.call(_38c7d5d2fcfc.websocket.channel, {
                    type: "message",
                    args: [ _b6f2bd98c862 ]
                  });
                }, (_b6f2bd98c862, _1bd41f000df9) => {
                  _3ee9590bcdd1.call(_38c7d5d2fcfc.websocket.channel, {
                    type: "close",
                    args: [ _b6f2bd98c862, _1bd41f000df9 ]
                  });
                }, _b6f2bd98c862 => {
                  _3ee9590bcdd1.call(_38c7d5d2fcfc.websocket.channel, {
                    type: "error",
                    args: [ _b6f2bd98c862 ]
                  });
                });
                _38c7d5d2fcfc.websocket.channel.onmessage = _38c7d5d2fcfc => {
                  "data" === _38c7d5d2fcfc.data.type ? _313eac335fae(_38c7d5d2fcfc.data.data) : "close" === _38c7d5d2fcfc.data.type && _180466bcc607(_38c7d5d2fcfc.data.closeCode, _38c7d5d2fcfc.data.closeReason);
                }, _3ee9590bcdd1.call(_b6f2bd98c862, {
                  type: "websocket"
                });
              }(_313eac335fae, _1bd41f000df9, _38c7d5d2fcfc);
            } catch (_38c7d5d2fcfc) {
              g(_1bd41f000df9, _38c7d5d2fcfc, "websocket");
            }
          }, await this.worker.sendMessage({
            type: "set",
            client: {
              function: "bare-mux-remote",
              args: [ _1bd41f000df9.port2, _b6f2bd98c862 ]
            }
          }, [ _1bd41f000df9.port2 ]);
        }
        getInnerPort() {
          return this.worker.port;
        }
      }
      class S {
        worker;
        constructor(_38c7d5d2fcfc) {
          this.worker = new p(_38c7d5d2fcfc);
        }
        createWebSocket(_38c7d5d2fcfc, _b6f2bd98c862 = [], _1bd41f000df9, _313eac335fae) {
          try {
            _38c7d5d2fcfc = new URL(_38c7d5d2fcfc);
          } catch (_b6f2bd98c862) {
            throw new DOMException(`Faiiled to construct 'WebSocket': The URL '${_38c7d5d2fcfc}' is invalid.`);
          }
          if (!_c20fa90a80b7.includes(_38c7d5d2fcfc.protocol)) throw new DOMException(`Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '${_38c7d5d2fcfc.protocol}' is not allowed.`);
          for (let _38c7d5d2fcfc of (Array.isArray(_b6f2bd98c862) || (_b6f2bd98c862 = [ _b6f2bd98c862 ]), 
          _b6f2bd98c862 = _b6f2bd98c862.map(String))) if (!function(_38c7d5d2fcfc) {
            for (let _b6f2bd98c862 = 0; _b6f2bd98c862 < _38c7d5d2fcfc.length; _b6f2bd98c862++) {
              let _1bd41f000df9 = _38c7d5d2fcfc[_b6f2bd98c862];
              if (!"!#$%&'*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz|~".includes(_1bd41f000df9)) return !1;
            }
            return !0;
          }(_38c7d5d2fcfc)) throw new DOMException(`Failed to construct 'WebSocket': The subprotocol '${_38c7d5d2fcfc}' is invalid.`);
          return _313eac335fae = _313eac335fae || {}, new f(_38c7d5d2fcfc, _b6f2bd98c862, this.worker, _313eac335fae);
        }
        async fetch(_38c7d5d2fcfc, _b6f2bd98c862) {
          let _1bd41f000df9 = new Request(_38c7d5d2fcfc, _b6f2bd98c862), _180466bcc607 = _b6f2bd98c862?.headers || _1bd41f000df9.headers, _7f05829ad9f4 = _180466bcc607 instanceof Headers ? Object.fromEntries(_180466bcc607) : _180466bcc607, _93a414b82620 = _1bd41f000df9.body, _3ee9590bcdd1 = new URL(_1bd41f000df9.url);
          if (_3ee9590bcdd1.protocol.startsWith("blob:")) {
            let _38c7d5d2fcfc = await _313eac335fae(_3ee9590bcdd1), _b6f2bd98c862 = new Response(_38c7d5d2fcfc.body, _38c7d5d2fcfc);
            return _b6f2bd98c862.rawHeaders = Object.fromEntries(_38c7d5d2fcfc.headers), _b6f2bd98c862.rawResponse = {
              body: _38c7d5d2fcfc.body,
              headers: Object.fromEntries(_38c7d5d2fcfc.headers),
              status: _38c7d5d2fcfc.status,
              statusText: _38c7d5d2fcfc.statusText
            }, _b6f2bd98c862.finalURL = _3ee9590bcdd1.toString(), _b6f2bd98c862;
          }
          for (let _38c7d5d2fcfc = 0; ;_38c7d5d2fcfc++) {
            let _313eac335fae = (await this.worker.sendMessage({
              type: "fetch",
              fetch: {
                remote: _3ee9590bcdd1.toString(),
                method: _1bd41f000df9.method,
                headers: _7f05829ad9f4,
                body: _93a414b82620 || void 0
              }
            }, _93a414b82620 ? [ _93a414b82620 ] : [])).fetch, _180466bcc607 = new Response(_eb5e33ca1634.includes(_313eac335fae.status) ? void 0 : _313eac335fae.body, {
              headers: new Headers(_313eac335fae.headers),
              status: _313eac335fae.status,
              statusText: _313eac335fae.statusText
            });
            _180466bcc607.rawHeaders = _313eac335fae.headers, _180466bcc607.rawResponse = _313eac335fae, 
            _180466bcc607.finalURL = _3ee9590bcdd1.toString();
            let _bf69fdf532e4 = _b6f2bd98c862?.redirect || _1bd41f000df9.redirect;
            if (!_8aa5e5cf048b.includes(_180466bcc607.status)) return _180466bcc607;
            switch (_bf69fdf532e4) {
             case "follow":
              {
                let _b6f2bd98c862 = _180466bcc607.headers.get("location");
                if (20 > _38c7d5d2fcfc && null !== _b6f2bd98c862) {
                  _3ee9590bcdd1 = new URL(_b6f2bd98c862, _3ee9590bcdd1);
                  continue;
                }
                throw TypeError("Failed to fetch");
              }

             case "error":
              throw TypeError("Failed to fetch");

             case "manual":
              return _180466bcc607;
            }
          }
        }
      }
      console.debug("bare-mux: running v2.1.9 (build dc9dc6e)");
    },
    8832: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.d(_b6f2bd98c862, {
        H: () => _313eac335fae,
        L: () => _180466bcc607
      });
      let _313eac335fae = new Map([ "altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath" ].map(_38c7d5d2fcfc => [ _38c7d5d2fcfc.toLowerCase(), _38c7d5d2fcfc ])), _180466bcc607 = new Map([ "definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan" ].map(_38c7d5d2fcfc => [ _38c7d5d2fcfc.toLowerCase(), _38c7d5d2fcfc ]));
    },
    6498: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.d(_b6f2bd98c862, {
        A: () => _bf69fdf532e4
      });
      var _313eac335fae = _1bd41f000df9(2743), _180466bcc607 = _1bd41f000df9(8466), _7f05829ad9f4 = _1bd41f000df9(8832);
      let _93a414b82620 = new Set([ "style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript" ]);
      function o(_38c7d5d2fcfc) {
        return _38c7d5d2fcfc.replace(/"/g, "&quot;");
      }
      let _3ee9590bcdd1 = new Set([ "area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr" ]), _bf69fdf532e4 = function e(_38c7d5d2fcfc, _b6f2bd98c862 = {}) {
        let _1bd41f000df9 = "length" in _38c7d5d2fcfc ? _38c7d5d2fcfc : [ _38c7d5d2fcfc ], _bf69fdf532e4 = "";
        for (let _38c7d5d2fcfc = 0; _38c7d5d2fcfc < _1bd41f000df9.length; _38c7d5d2fcfc++) _bf69fdf532e4 += function(_38c7d5d2fcfc, _b6f2bd98c862) {
          var _1bd41f000df9, _bf69fdf532e4, _eb5e33ca1634;
          switch (_38c7d5d2fcfc.type) {
           case _313eac335fae.bL:
            return e(_38c7d5d2fcfc.children, _b6f2bd98c862);

           case _313eac335fae.fl:
           case _313eac335fae.WL:
            return _1bd41f000df9 = _38c7d5d2fcfc, `<${_1bd41f000df9.data}>`;

           case _313eac335fae.Mw:
            return _bf69fdf532e4 = _38c7d5d2fcfc, `\x3c!--${_bf69fdf532e4.data}--\x3e`;

           case _313eac335fae.KB:
            return _eb5e33ca1634 = _38c7d5d2fcfc, `<![CDATA[${_eb5e33ca1634.children[0].data}]]>`;

           case _313eac335fae.eF:
           case _313eac335fae.OF:
           case _313eac335fae.vw:
            return function(_38c7d5d2fcfc, _b6f2bd98c862) {
              var _1bd41f000df9;
              "foreign" === _b6f2bd98c862.xmlMode && (_38c7d5d2fcfc.name = null != (_1bd41f000df9 = _7f05829ad9f4.H.get(_38c7d5d2fcfc.name)) ? _1bd41f000df9 : _38c7d5d2fcfc.name, 
              _38c7d5d2fcfc.parent && _ef3c27203dbf.has(_38c7d5d2fcfc.parent.name) && (_b6f2bd98c862 = {
                ..._b6f2bd98c862,
                xmlMode: !1
              })), !_b6f2bd98c862.xmlMode && _c20fa90a80b7.has(_38c7d5d2fcfc.name) && (_b6f2bd98c862 = {
                ..._b6f2bd98c862,
                xmlMode: "foreign"
              });
              let _313eac335fae = `<${_38c7d5d2fcfc.name}`, _93a414b82620 = function(_38c7d5d2fcfc, _b6f2bd98c862) {
                var _1bd41f000df9;
                if (!_38c7d5d2fcfc) return;
                let _313eac335fae = (null != (_1bd41f000df9 = _b6f2bd98c862.encodeEntities) ? _1bd41f000df9 : _b6f2bd98c862.decodeEntities) === !1 ? o : _b6f2bd98c862.xmlMode || "utf8" !== _b6f2bd98c862.encodeEntities ? _180466bcc607.WY : _180466bcc607.Gj;
                return Object.keys(_38c7d5d2fcfc).map(_1bd41f000df9 => {
                  var _180466bcc607, _93a414b82620;
                  let _3ee9590bcdd1 = null != (_180466bcc607 = _38c7d5d2fcfc[_1bd41f000df9]) ? _180466bcc607 : "";
                  return ("foreign" === _b6f2bd98c862.xmlMode && (_1bd41f000df9 = null != (_93a414b82620 = _7f05829ad9f4.L.get(_1bd41f000df9)) ? _93a414b82620 : _1bd41f000df9), 
                  _b6f2bd98c862.emptyAttrs || _b6f2bd98c862.xmlMode || "" !== _3ee9590bcdd1) ? `${_1bd41f000df9}="${_313eac335fae(_3ee9590bcdd1)}"` : _1bd41f000df9;
                }).join(" ");
              }(_38c7d5d2fcfc.attribs, _b6f2bd98c862);
              return _93a414b82620 && (_313eac335fae += ` ${_93a414b82620}`), 0 === _38c7d5d2fcfc.children.length && (_b6f2bd98c862.xmlMode ? !1 !== _b6f2bd98c862.selfClosingTags : _b6f2bd98c862.selfClosingTags && _3ee9590bcdd1.has(_38c7d5d2fcfc.name)) ? (_b6f2bd98c862.xmlMode || (_313eac335fae += " "), 
              _313eac335fae += "/>") : (_313eac335fae += ">", _38c7d5d2fcfc.children.length > 0 && (_313eac335fae += e(_38c7d5d2fcfc.children, _b6f2bd98c862)), 
              (_b6f2bd98c862.xmlMode || !_3ee9590bcdd1.has(_38c7d5d2fcfc.name)) && (_313eac335fae += `</${_38c7d5d2fcfc.name}>`)), 
              _313eac335fae;
            }(_38c7d5d2fcfc, _b6f2bd98c862);

           case _313eac335fae.EY:
            return function(_38c7d5d2fcfc, _b6f2bd98c862) {
              var _1bd41f000df9;
              let _313eac335fae = _38c7d5d2fcfc.data || "";
              return (null != (_1bd41f000df9 = _b6f2bd98c862.encodeEntities) ? _1bd41f000df9 : _b6f2bd98c862.decodeEntities) === !1 || !_b6f2bd98c862.xmlMode && _38c7d5d2fcfc.parent && _93a414b82620.has(_38c7d5d2fcfc.parent.name) || (_313eac335fae = _b6f2bd98c862.xmlMode || "utf8" !== _b6f2bd98c862.encodeEntities ? (0, 
              _180466bcc607.WY)(_313eac335fae) : (0, _180466bcc607.X1)(_313eac335fae)), _313eac335fae;
            }(_38c7d5d2fcfc, _b6f2bd98c862);
          }
        }(_1bd41f000df9[_38c7d5d2fcfc], _b6f2bd98c862);
        return _bf69fdf532e4;
      }, _ef3c27203dbf = new Set([ "mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title" ]), _c20fa90a80b7 = new Set([ "svg", "math" ]);
    },
    2743: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      var _313eac335fae, _180466bcc607;
      function a(_38c7d5d2fcfc) {
        return _38c7d5d2fcfc.type === _313eac335fae.Tag || _38c7d5d2fcfc.type === _313eac335fae.Script || _38c7d5d2fcfc.type === _313eac335fae.Style;
      }
      _1bd41f000df9.d(_b6f2bd98c862, {
        EY: () => _93a414b82620,
        KB: () => _8aa5e5cf048b,
        Mw: () => _bf69fdf532e4,
        OF: () => _c20fa90a80b7,
        RJ: () => _313eac335fae,
        WL: () => _3ee9590bcdd1,
        bL: () => _7f05829ad9f4,
        dz: () => a,
        eF: () => _ef3c27203dbf,
        fl: () => _e25772762281,
        vw: () => _eb5e33ca1634
      }), (_180466bcc607 = _313eac335fae || (_313eac335fae = {})).Root = "root", _180466bcc607.Text = "text", 
      _180466bcc607.Directive = "directive", _180466bcc607.Comment = "comment", _180466bcc607.Script = "script", 
      _180466bcc607.Style = "style", _180466bcc607.Tag = "tag", _180466bcc607.CDATA = "cdata", 
      _180466bcc607.Doctype = "doctype";
      let _7f05829ad9f4 = _313eac335fae.Root, _93a414b82620 = _313eac335fae.Text, _3ee9590bcdd1 = _313eac335fae.Directive, _bf69fdf532e4 = _313eac335fae.Comment, _ef3c27203dbf = _313eac335fae.Script, _c20fa90a80b7 = _313eac335fae.Style, _eb5e33ca1634 = _313eac335fae.Tag, _8aa5e5cf048b = _313eac335fae.CDATA, _e25772762281 = _313eac335fae.Doctype;
    },
    8866: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.d(_b6f2bd98c862, {
        DV: () => s,
        Hg: () => _180466bcc607.Hg,
        Mw: () => _180466bcc607.Mw
      });
      var _313eac335fae = _1bd41f000df9(2743), _180466bcc607 = _1bd41f000df9(6072);
      let _7f05829ad9f4 = {
        withStartIndices: !1,
        withEndIndices: !1,
        xmlMode: !1
      };
      class s {
        constructor(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
          this.dom = [], this.root = new _180466bcc607.yo(this.dom), this.done = !1, this.tagStack = [ this.root ], 
          this.lastNode = null, this.parser = null, "function" == typeof _b6f2bd98c862 && (_1bd41f000df9 = _b6f2bd98c862, 
          _b6f2bd98c862 = _7f05829ad9f4), "object" == typeof _38c7d5d2fcfc && (_b6f2bd98c862 = _38c7d5d2fcfc, 
          _38c7d5d2fcfc = void 0), this.callback = null != _38c7d5d2fcfc ? _38c7d5d2fcfc : null, 
          this.options = null != _b6f2bd98c862 ? _b6f2bd98c862 : _7f05829ad9f4, this.elementCB = null != _1bd41f000df9 ? _1bd41f000df9 : null;
        }
        onparserinit(_38c7d5d2fcfc) {
          this.parser = _38c7d5d2fcfc;
        }
        onreset() {
          this.dom = [], this.root = new _180466bcc607.yo(this.dom), this.done = !1, this.tagStack = [ this.root ], 
          this.lastNode = null, this.parser = null;
        }
        onend() {
          this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
        }
        onerror(_38c7d5d2fcfc) {
          this.handleCallback(_38c7d5d2fcfc);
        }
        onclosetag() {
          this.lastNode = null;
          let _38c7d5d2fcfc = this.tagStack.pop();
          this.options.withEndIndices && (_38c7d5d2fcfc.endIndex = this.parser.endIndex), 
          this.elementCB && this.elementCB(_38c7d5d2fcfc);
        }
        onopentag(_38c7d5d2fcfc, _b6f2bd98c862) {
          let _1bd41f000df9 = this.options.xmlMode ? _313eac335fae.RJ.Tag : void 0, _7f05829ad9f4 = new _180466bcc607.Hg(_38c7d5d2fcfc, _b6f2bd98c862, void 0, _1bd41f000df9);
          this.addNode(_7f05829ad9f4), this.tagStack.push(_7f05829ad9f4);
        }
        ontext(_38c7d5d2fcfc) {
          let {lastNode: _b6f2bd98c862} = this;
          if (_b6f2bd98c862 && _b6f2bd98c862.type === _313eac335fae.RJ.Text) _b6f2bd98c862.data += _38c7d5d2fcfc, 
          this.options.withEndIndices && (_b6f2bd98c862.endIndex = this.parser.endIndex); else {
            let _b6f2bd98c862 = new _180466bcc607.EY(_38c7d5d2fcfc);
            this.addNode(_b6f2bd98c862), this.lastNode = _b6f2bd98c862;
          }
        }
        oncomment(_38c7d5d2fcfc) {
          if (this.lastNode && this.lastNode.type === _313eac335fae.RJ.Comment) {
            this.lastNode.data += _38c7d5d2fcfc;
            return;
          }
          let _b6f2bd98c862 = new _180466bcc607.Mw(_38c7d5d2fcfc);
          this.addNode(_b6f2bd98c862), this.lastNode = _b6f2bd98c862;
        }
        oncommentend() {
          this.lastNode = null;
        }
        oncdatastart() {
          let _38c7d5d2fcfc = new _180466bcc607.EY(""), _b6f2bd98c862 = new _180466bcc607.KB([ _38c7d5d2fcfc ]);
          this.addNode(_b6f2bd98c862), _38c7d5d2fcfc.parent = _b6f2bd98c862, this.lastNode = _38c7d5d2fcfc;
        }
        oncdataend() {
          this.lastNode = null;
        }
        onprocessinginstruction(_38c7d5d2fcfc, _b6f2bd98c862) {
          let _1bd41f000df9 = new _180466bcc607.Cd(_38c7d5d2fcfc, _b6f2bd98c862);
          this.addNode(_1bd41f000df9);
        }
        handleCallback(_38c7d5d2fcfc) {
          if ("function" == typeof this.callback) this.callback(_38c7d5d2fcfc, this.dom); else if (_38c7d5d2fcfc) throw _38c7d5d2fcfc;
        }
        addNode(_38c7d5d2fcfc) {
          let _b6f2bd98c862 = this.tagStack[this.tagStack.length - 1], _1bd41f000df9 = _b6f2bd98c862.children[_b6f2bd98c862.children.length - 1];
          this.options.withStartIndices && (_38c7d5d2fcfc.startIndex = this.parser.startIndex), 
          this.options.withEndIndices && (_38c7d5d2fcfc.endIndex = this.parser.endIndex), 
          _b6f2bd98c862.children.push(_38c7d5d2fcfc), _1bd41f000df9 && (_38c7d5d2fcfc.prev = _1bd41f000df9, 
          _1bd41f000df9.next = _38c7d5d2fcfc), _38c7d5d2fcfc.parent = _b6f2bd98c862, this.lastNode = null;
        }
      }
    },
    6072: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.d(_b6f2bd98c862, {
        Cd: () => l,
        EY: () => s,
        Hg: () => h,
        KB: () => u,
        Mw: () => o,
        yo: () => d
      });
      var _313eac335fae = _1bd41f000df9(2743);
      class i {
        constructor() {
          this.parent = null, this.prev = null, this.next = null, this.startIndex = null, 
          this.endIndex = null;
        }
        get parentNode() {
          return this.parent;
        }
        set parentNode(_38c7d5d2fcfc) {
          this.parent = _38c7d5d2fcfc;
        }
        get previousSibling() {
          return this.prev;
        }
        set previousSibling(_38c7d5d2fcfc) {
          this.prev = _38c7d5d2fcfc;
        }
        get nextSibling() {
          return this.next;
        }
        set nextSibling(_38c7d5d2fcfc) {
          this.next = _38c7d5d2fcfc;
        }
        cloneNode(_38c7d5d2fcfc = !1) {
          return p(this, _38c7d5d2fcfc);
        }
      }
      class a extends i {
        constructor(_38c7d5d2fcfc) {
          super(), this.data = _38c7d5d2fcfc;
        }
        get nodeValue() {
          return this.data;
        }
        set nodeValue(_38c7d5d2fcfc) {
          this.data = _38c7d5d2fcfc;
        }
      }
      class s extends a {
        constructor() {
          super(...arguments), this.type = _313eac335fae.RJ.Text;
        }
        get nodeType() {
          return 3;
        }
      }
      class o extends a {
        constructor() {
          super(...arguments), this.type = _313eac335fae.RJ.Comment;
        }
        get nodeType() {
          return 8;
        }
      }
      class l extends a {
        constructor(_38c7d5d2fcfc, _b6f2bd98c862) {
          super(_b6f2bd98c862), this.name = _38c7d5d2fcfc, this.type = _313eac335fae.RJ.Directive;
        }
        get nodeType() {
          return 1;
        }
      }
      class c extends i {
        constructor(_38c7d5d2fcfc) {
          super(), this.children = _38c7d5d2fcfc;
        }
        get firstChild() {
          var _38c7d5d2fcfc;
          return null != (_38c7d5d2fcfc = this.children[0]) ? _38c7d5d2fcfc : null;
        }
        get lastChild() {
          return this.children.length > 0 ? this.children[this.children.length - 1] : null;
        }
        get childNodes() {
          return this.children;
        }
        set childNodes(_38c7d5d2fcfc) {
          this.children = _38c7d5d2fcfc;
        }
      }
      class u extends c {
        constructor() {
          super(...arguments), this.type = _313eac335fae.RJ.CDATA;
        }
        get nodeType() {
          return 4;
        }
      }
      class d extends c {
        constructor() {
          super(...arguments), this.type = _313eac335fae.RJ.Root;
        }
        get nodeType() {
          return 9;
        }
      }
      class h extends c {
        constructor(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9 = [], _180466bcc607 = ("script" === _38c7d5d2fcfc ? _313eac335fae.RJ.Script : "style" === _38c7d5d2fcfc ? _313eac335fae.RJ.Style : _313eac335fae.RJ.Tag)) {
          super(_1bd41f000df9), this.name = _38c7d5d2fcfc, this.attribs = _b6f2bd98c862, this.type = _180466bcc607;
        }
        get nodeType() {
          return 1;
        }
        get tagName() {
          return this.name;
        }
        set tagName(_38c7d5d2fcfc) {
          this.name = _38c7d5d2fcfc;
        }
        get attributes() {
          return Object.keys(this.attribs).map(_38c7d5d2fcfc => {
            var _b6f2bd98c862, _1bd41f000df9;
            return {
              name: _38c7d5d2fcfc,
              value: this.attribs[_38c7d5d2fcfc],
              namespace: null == (_b6f2bd98c862 = this["x-attribsNamespace"]) ? void 0 : _b6f2bd98c862[_38c7d5d2fcfc],
              prefix: null == (_1bd41f000df9 = this["x-attribsPrefix"]) ? void 0 : _1bd41f000df9[_38c7d5d2fcfc]
            };
          });
        }
      }
      function p(_38c7d5d2fcfc, _b6f2bd98c862 = !1) {
        let _1bd41f000df9;
        if (_38c7d5d2fcfc.type === _313eac335fae.RJ.Text) _1bd41f000df9 = new s(_38c7d5d2fcfc.data); else if (_38c7d5d2fcfc.type === _313eac335fae.RJ.Comment) _1bd41f000df9 = new o(_38c7d5d2fcfc.data); else if ((0, 
        _313eac335fae.dz)(_38c7d5d2fcfc)) {
          let _313eac335fae = _b6f2bd98c862 ? f(_38c7d5d2fcfc.children) : [], _180466bcc607 = new h(_38c7d5d2fcfc.name, {
            ..._38c7d5d2fcfc.attribs
          }, _313eac335fae);
          _313eac335fae.forEach(_38c7d5d2fcfc => _38c7d5d2fcfc.parent = _180466bcc607), null != _38c7d5d2fcfc.namespace && (_180466bcc607.namespace = _38c7d5d2fcfc.namespace), 
          _38c7d5d2fcfc["x-attribsNamespace"] && (_180466bcc607["x-attribsNamespace"] = {
            ..._38c7d5d2fcfc["x-attribsNamespace"]
          }), _38c7d5d2fcfc["x-attribsPrefix"] && (_180466bcc607["x-attribsPrefix"] = {
            ..._38c7d5d2fcfc["x-attribsPrefix"]
          }), _1bd41f000df9 = _180466bcc607;
        } else if (_38c7d5d2fcfc.type === _313eac335fae.RJ.CDATA) {
          let _313eac335fae = _b6f2bd98c862 ? f(_38c7d5d2fcfc.children) : [], _180466bcc607 = new u(_313eac335fae);
          _313eac335fae.forEach(_38c7d5d2fcfc => _38c7d5d2fcfc.parent = _180466bcc607), _1bd41f000df9 = _180466bcc607;
        } else if (_38c7d5d2fcfc.type === _313eac335fae.RJ.Root) {
          let _313eac335fae = _b6f2bd98c862 ? f(_38c7d5d2fcfc.children) : [], _180466bcc607 = new d(_313eac335fae);
          _313eac335fae.forEach(_38c7d5d2fcfc => _38c7d5d2fcfc.parent = _180466bcc607), _38c7d5d2fcfc["x-mode"] && (_180466bcc607["x-mode"] = _38c7d5d2fcfc["x-mode"]), 
          _1bd41f000df9 = _180466bcc607;
        } else if (_38c7d5d2fcfc.type === _313eac335fae.RJ.Directive) {
          let _b6f2bd98c862 = new l(_38c7d5d2fcfc.name, _38c7d5d2fcfc.data);
          null != _38c7d5d2fcfc["x-name"] && (_b6f2bd98c862["x-name"] = _38c7d5d2fcfc["x-name"], 
          _b6f2bd98c862["x-publicId"] = _38c7d5d2fcfc["x-publicId"], _b6f2bd98c862["x-systemId"] = _38c7d5d2fcfc["x-systemId"]), 
          _1bd41f000df9 = _b6f2bd98c862;
        } else throw Error(`Not implemented yet: ${_38c7d5d2fcfc.type}`);
        return _1bd41f000df9.startIndex = _38c7d5d2fcfc.startIndex, _1bd41f000df9.endIndex = _38c7d5d2fcfc.endIndex, 
        null != _38c7d5d2fcfc.sourceCodeLocation && (_1bd41f000df9.sourceCodeLocation = _38c7d5d2fcfc.sourceCodeLocation), 
        _1bd41f000df9;
      }
      function f(_38c7d5d2fcfc) {
        let _b6f2bd98c862 = _38c7d5d2fcfc.map(_38c7d5d2fcfc => p(_38c7d5d2fcfc, !0));
        for (let _38c7d5d2fcfc = 1; _38c7d5d2fcfc < _b6f2bd98c862.length; _38c7d5d2fcfc++) _b6f2bd98c862[_38c7d5d2fcfc].prev = _b6f2bd98c862[_38c7d5d2fcfc - 1], 
        _b6f2bd98c862[_38c7d5d2fcfc - 1].next = _b6f2bd98c862[_38c7d5d2fcfc];
        return _b6f2bd98c862;
      }
    },
    3256: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9(5016), _1bd41f000df9(1050);
    },
    6812: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      var _313eac335fae, _180466bcc607;
      _1bd41f000df9(8866), (_180466bcc607 = _313eac335fae || (_313eac335fae = {}))[_180466bcc607.DISCONNECTED = 1] = "DISCONNECTED", 
      _180466bcc607[_180466bcc607.PRECEDING = 2] = "PRECEDING", _180466bcc607[_180466bcc607.FOLLOWING = 4] = "FOLLOWING", 
      _180466bcc607[_180466bcc607.CONTAINS = 8] = "CONTAINS", _180466bcc607[_180466bcc607.CONTAINED_BY = 16] = "CONTAINED_BY";
    },
    4993: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9(5016), _1bd41f000df9(4647), _1bd41f000df9(9861), _1bd41f000df9(1050), 
      _1bd41f000df9(6812), _1bd41f000df9(3256), _1bd41f000df9(8866);
    },
    1050: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9(8866), _1bd41f000df9(9861);
    },
    9861: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9(8866);
    },
    5016: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9(8866), _1bd41f000df9(6498), _1bd41f000df9(2743);
    },
    4647: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9(8866);
    },
    2146: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      var _313eac335fae;
      _1bd41f000df9.d(_b6f2bd98c862, {
        MK: () => _7f05829ad9f4,
        y6: () => s
      });
      let _180466bcc607 = new Map([ [ 0, 65533 ], [ 128, 8364 ], [ 130, 8218 ], [ 131, 402 ], [ 132, 8222 ], [ 133, 8230 ], [ 134, 8224 ], [ 135, 8225 ], [ 136, 710 ], [ 137, 8240 ], [ 138, 352 ], [ 139, 8249 ], [ 140, 338 ], [ 142, 381 ], [ 145, 8216 ], [ 146, 8217 ], [ 147, 8220 ], [ 148, 8221 ], [ 149, 8226 ], [ 150, 8211 ], [ 151, 8212 ], [ 152, 732 ], [ 153, 8482 ], [ 154, 353 ], [ 155, 8250 ], [ 156, 339 ], [ 158, 382 ], [ 159, 376 ] ]), _7f05829ad9f4 = null != (_313eac335fae = String.fromCodePoint) ? _313eac335fae : function(_38c7d5d2fcfc) {
        let _b6f2bd98c862 = "";
        return _38c7d5d2fcfc > 65535 && (_38c7d5d2fcfc -= 65536, _b6f2bd98c862 += String.fromCharCode(_38c7d5d2fcfc >>> 10 & 1023 | 55296), 
        _38c7d5d2fcfc = 56320 | 1023 & _38c7d5d2fcfc), _b6f2bd98c862 += String.fromCharCode(_38c7d5d2fcfc);
      };
      function s(_38c7d5d2fcfc) {
        var _b6f2bd98c862;
        return _38c7d5d2fcfc >= 55296 && _38c7d5d2fcfc <= 57343 || _38c7d5d2fcfc > 1114111 ? 65533 : null != (_b6f2bd98c862 = _180466bcc607.get(_38c7d5d2fcfc)) ? _b6f2bd98c862 : _38c7d5d2fcfc;
      }
    },
    2990: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.d(_b6f2bd98c862, {
        FJ: () => _c20fa90a80b7,
        MK: () => _e25772762281.MK,
        Wf: () => g,
        qN: () => _eb5e33ca1634.q,
        sr: () => _8aa5e5cf048b.s
      });
      var _313eac335fae, _180466bcc607, _7f05829ad9f4, _93a414b82620, _3ee9590bcdd1, _bf69fdf532e4, _ef3c27203dbf, _c20fa90a80b7, _eb5e33ca1634 = _1bd41f000df9(7259), _8aa5e5cf048b = _1bd41f000df9(5949), _e25772762281 = _1bd41f000df9(2146);
      function f(_38c7d5d2fcfc) {
        return _38c7d5d2fcfc >= _3ee9590bcdd1.ZERO && _38c7d5d2fcfc <= _3ee9590bcdd1.NINE;
      }
      (_313eac335fae = _3ee9590bcdd1 || (_3ee9590bcdd1 = {}))[_313eac335fae.NUM = 35] = "NUM", 
      _313eac335fae[_313eac335fae.SEMI = 59] = "SEMI", _313eac335fae[_313eac335fae.EQUALS = 61] = "EQUALS", 
      _313eac335fae[_313eac335fae.ZERO = 48] = "ZERO", _313eac335fae[_313eac335fae.NINE = 57] = "NINE", 
      _313eac335fae[_313eac335fae.LOWER_A = 97] = "LOWER_A", _313eac335fae[_313eac335fae.LOWER_F = 102] = "LOWER_F", 
      _313eac335fae[_313eac335fae.LOWER_X = 120] = "LOWER_X", _313eac335fae[_313eac335fae.LOWER_Z = 122] = "LOWER_Z", 
      _313eac335fae[_313eac335fae.UPPER_A = 65] = "UPPER_A", _313eac335fae[_313eac335fae.UPPER_F = 70] = "UPPER_F", 
      _313eac335fae[_313eac335fae.UPPER_Z = 90] = "UPPER_Z", (_180466bcc607 = _bf69fdf532e4 || (_bf69fdf532e4 = {}))[_180466bcc607.VALUE_LENGTH = 49152] = "VALUE_LENGTH", 
      _180466bcc607[_180466bcc607.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", _180466bcc607[_180466bcc607.JUMP_TABLE = 127] = "JUMP_TABLE", 
      (_7f05829ad9f4 = _ef3c27203dbf || (_ef3c27203dbf = {}))[_7f05829ad9f4.EntityStart = 0] = "EntityStart", 
      _7f05829ad9f4[_7f05829ad9f4.NumericStart = 1] = "NumericStart", _7f05829ad9f4[_7f05829ad9f4.NumericDecimal = 2] = "NumericDecimal", 
      _7f05829ad9f4[_7f05829ad9f4.NumericHex = 3] = "NumericHex", _7f05829ad9f4[_7f05829ad9f4.NamedEntity = 4] = "NamedEntity", 
      (_93a414b82620 = _c20fa90a80b7 || (_c20fa90a80b7 = {}))[_93a414b82620.Legacy = 0] = "Legacy", 
      _93a414b82620[_93a414b82620.Strict = 1] = "Strict", _93a414b82620[_93a414b82620.Attribute = 2] = "Attribute";
      class g {
        constructor(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
          this.decodeTree = _38c7d5d2fcfc, this.emitCodePoint = _b6f2bd98c862, this.errors = _1bd41f000df9, 
          this.state = _ef3c27203dbf.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, 
          this.excess = 1, this.decodeMode = _c20fa90a80b7.Strict;
        }
        startEntity(_38c7d5d2fcfc) {
          this.decodeMode = _38c7d5d2fcfc, this.state = _ef3c27203dbf.EntityStart, this.result = 0, 
          this.treeIndex = 0, this.excess = 1, this.consumed = 1;
        }
        write(_38c7d5d2fcfc, _b6f2bd98c862) {
          switch (this.state) {
           case _ef3c27203dbf.EntityStart:
            if (_38c7d5d2fcfc.charCodeAt(_b6f2bd98c862) === _3ee9590bcdd1.NUM) return this.state = _ef3c27203dbf.NumericStart, 
            this.consumed += 1, this.stateNumericStart(_38c7d5d2fcfc, _b6f2bd98c862 + 1);
            return this.state = _ef3c27203dbf.NamedEntity, this.stateNamedEntity(_38c7d5d2fcfc, _b6f2bd98c862);

           case _ef3c27203dbf.NumericStart:
            return this.stateNumericStart(_38c7d5d2fcfc, _b6f2bd98c862);

           case _ef3c27203dbf.NumericDecimal:
            return this.stateNumericDecimal(_38c7d5d2fcfc, _b6f2bd98c862);

           case _ef3c27203dbf.NumericHex:
            return this.stateNumericHex(_38c7d5d2fcfc, _b6f2bd98c862);

           case _ef3c27203dbf.NamedEntity:
            return this.stateNamedEntity(_38c7d5d2fcfc, _b6f2bd98c862);
          }
        }
        stateNumericStart(_38c7d5d2fcfc, _b6f2bd98c862) {
          return _b6f2bd98c862 >= _38c7d5d2fcfc.length ? -1 : (32 | _38c7d5d2fcfc.charCodeAt(_b6f2bd98c862)) === _3ee9590bcdd1.LOWER_X ? (this.state = _ef3c27203dbf.NumericHex, 
          this.consumed += 1, this.stateNumericHex(_38c7d5d2fcfc, _b6f2bd98c862 + 1)) : (this.state = _ef3c27203dbf.NumericDecimal, 
          this.stateNumericDecimal(_38c7d5d2fcfc, _b6f2bd98c862));
        }
        addToNumericResult(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9, _313eac335fae) {
          if (_b6f2bd98c862 !== _1bd41f000df9) {
            let _180466bcc607 = _1bd41f000df9 - _b6f2bd98c862;
            this.result = this.result * Math.pow(_313eac335fae, _180466bcc607) + Number.parseInt(_38c7d5d2fcfc.substr(_b6f2bd98c862, _180466bcc607), _313eac335fae), 
            this.consumed += _180466bcc607;
          }
        }
        stateNumericHex(_38c7d5d2fcfc, _b6f2bd98c862) {
          let _1bd41f000df9 = _b6f2bd98c862;
          for (;_b6f2bd98c862 < _38c7d5d2fcfc.length; ) {
            var _313eac335fae;
            let _180466bcc607 = _38c7d5d2fcfc.charCodeAt(_b6f2bd98c862);
            if (!f(_180466bcc607) && (!((_313eac335fae = _180466bcc607) >= _3ee9590bcdd1.UPPER_A) || !(_313eac335fae <= _3ee9590bcdd1.UPPER_F)) && (!(_313eac335fae >= _3ee9590bcdd1.LOWER_A) || !(_313eac335fae <= _3ee9590bcdd1.LOWER_F))) return this.addToNumericResult(_38c7d5d2fcfc, _1bd41f000df9, _b6f2bd98c862, 16), 
            this.emitNumericEntity(_180466bcc607, 3);
            _b6f2bd98c862 += 1;
          }
          return this.addToNumericResult(_38c7d5d2fcfc, _1bd41f000df9, _b6f2bd98c862, 16), 
          -1;
        }
        stateNumericDecimal(_38c7d5d2fcfc, _b6f2bd98c862) {
          let _1bd41f000df9 = _b6f2bd98c862;
          for (;_b6f2bd98c862 < _38c7d5d2fcfc.length; ) {
            let _313eac335fae = _38c7d5d2fcfc.charCodeAt(_b6f2bd98c862);
            if (!f(_313eac335fae)) return this.addToNumericResult(_38c7d5d2fcfc, _1bd41f000df9, _b6f2bd98c862, 10), 
            this.emitNumericEntity(_313eac335fae, 2);
            _b6f2bd98c862 += 1;
          }
          return this.addToNumericResult(_38c7d5d2fcfc, _1bd41f000df9, _b6f2bd98c862, 10), 
          -1;
        }
        emitNumericEntity(_38c7d5d2fcfc, _b6f2bd98c862) {
          var _1bd41f000df9;
          if (this.consumed <= _b6f2bd98c862) return null == (_1bd41f000df9 = this.errors) || _1bd41f000df9.absenceOfDigitsInNumericCharacterReference(this.consumed), 
          0;
          if (_38c7d5d2fcfc === _3ee9590bcdd1.SEMI) this.consumed += 1; else if (this.decodeMode === _c20fa90a80b7.Strict) return 0;
          return this.emitCodePoint((0, _e25772762281.y6)(this.result), this.consumed), this.errors && (_38c7d5d2fcfc !== _3ee9590bcdd1.SEMI && this.errors.missingSemicolonAfterCharacterReference(), 
          this.errors.validateNumericCharacterReference(this.result)), this.consumed;
        }
        stateNamedEntity(_38c7d5d2fcfc, _b6f2bd98c862) {
          let {decodeTree: _1bd41f000df9} = this, _313eac335fae = _1bd41f000df9[this.treeIndex], _180466bcc607 = (_313eac335fae & _bf69fdf532e4.VALUE_LENGTH) >> 14;
          for (;_b6f2bd98c862 < _38c7d5d2fcfc.length; _b6f2bd98c862++, this.excess++) {
            let _7f05829ad9f4 = _38c7d5d2fcfc.charCodeAt(_b6f2bd98c862);
            if (this.treeIndex = function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9, _313eac335fae) {
              let _180466bcc607 = (_b6f2bd98c862 & _bf69fdf532e4.BRANCH_LENGTH) >> 7, _7f05829ad9f4 = _b6f2bd98c862 & _bf69fdf532e4.JUMP_TABLE;
              if (0 === _180466bcc607) return 0 !== _7f05829ad9f4 && _313eac335fae === _7f05829ad9f4 ? _1bd41f000df9 : -1;
              if (_7f05829ad9f4) {
                let _b6f2bd98c862 = _313eac335fae - _7f05829ad9f4;
                return _b6f2bd98c862 < 0 || _b6f2bd98c862 >= _180466bcc607 ? -1 : _38c7d5d2fcfc[_1bd41f000df9 + _b6f2bd98c862] - 1;
              }
              let _93a414b82620 = _1bd41f000df9, _3ee9590bcdd1 = _93a414b82620 + _180466bcc607 - 1;
              for (;_93a414b82620 <= _3ee9590bcdd1; ) {
                let _b6f2bd98c862 = _93a414b82620 + _3ee9590bcdd1 >>> 1, _1bd41f000df9 = _38c7d5d2fcfc[_b6f2bd98c862];
                if (_1bd41f000df9 < _313eac335fae) _93a414b82620 = _b6f2bd98c862 + 1; else {
                  if (!(_1bd41f000df9 > _313eac335fae)) return _38c7d5d2fcfc[_b6f2bd98c862 + _180466bcc607];
                  _3ee9590bcdd1 = _b6f2bd98c862 - 1;
                }
              }
              return -1;
            }(_1bd41f000df9, _313eac335fae, this.treeIndex + Math.max(1, _180466bcc607), _7f05829ad9f4), 
            this.treeIndex < 0) return 0 === this.result || this.decodeMode === _c20fa90a80b7.Attribute && (0 === _180466bcc607 || function(_38c7d5d2fcfc) {
              var _b6f2bd98c862;
              return _38c7d5d2fcfc === _3ee9590bcdd1.EQUALS || (_b6f2bd98c862 = _38c7d5d2fcfc) >= _3ee9590bcdd1.UPPER_A && _b6f2bd98c862 <= _3ee9590bcdd1.UPPER_Z || _b6f2bd98c862 >= _3ee9590bcdd1.LOWER_A && _b6f2bd98c862 <= _3ee9590bcdd1.LOWER_Z || f(_b6f2bd98c862);
            }(_7f05829ad9f4)) ? 0 : this.emitNotTerminatedNamedEntity();
            if (0 != (_180466bcc607 = ((_313eac335fae = _1bd41f000df9[this.treeIndex]) & _bf69fdf532e4.VALUE_LENGTH) >> 14)) {
              if (_7f05829ad9f4 === _3ee9590bcdd1.SEMI) return this.emitNamedEntityData(this.treeIndex, _180466bcc607, this.consumed + this.excess);
              this.decodeMode !== _c20fa90a80b7.Strict && (this.result = this.treeIndex, this.consumed += this.excess, 
              this.excess = 0);
            }
          }
          return -1;
        }
        emitNotTerminatedNamedEntity() {
          var _38c7d5d2fcfc;
          let {result: _b6f2bd98c862, decodeTree: _1bd41f000df9} = this, _313eac335fae = (_1bd41f000df9[_b6f2bd98c862] & _bf69fdf532e4.VALUE_LENGTH) >> 14;
          return this.emitNamedEntityData(_b6f2bd98c862, _313eac335fae, this.consumed), null == (_38c7d5d2fcfc = this.errors) || _38c7d5d2fcfc.missingSemicolonAfterCharacterReference(), 
          this.consumed;
        }
        emitNamedEntityData(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
          let {decodeTree: _313eac335fae} = this;
          return this.emitCodePoint(1 === _b6f2bd98c862 ? _313eac335fae[_38c7d5d2fcfc] & ~_bf69fdf532e4.VALUE_LENGTH : _313eac335fae[_38c7d5d2fcfc + 1], _1bd41f000df9), 
          3 === _b6f2bd98c862 && this.emitCodePoint(_313eac335fae[_38c7d5d2fcfc + 2], _1bd41f000df9), 
          _1bd41f000df9;
        }
        end() {
          var _38c7d5d2fcfc;
          switch (this.state) {
           case _ef3c27203dbf.NamedEntity:
            return 0 !== this.result && (this.decodeMode !== _c20fa90a80b7.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;

           case _ef3c27203dbf.NumericDecimal:
            return this.emitNumericEntity(0, 2);

           case _ef3c27203dbf.NumericHex:
            return this.emitNumericEntity(0, 3);

           case _ef3c27203dbf.NumericStart:
            return null == (_38c7d5d2fcfc = this.errors) || _38c7d5d2fcfc.absenceOfDigitsInNumericCharacterReference(this.consumed), 
            0;

           case _ef3c27203dbf.EntityStart:
            return 0;
          }
        }
      }
    },
    466: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9(9496), _1bd41f000df9(747);
    },
    747: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.d(_b6f2bd98c862, {
        Gj: () => _93a414b82620,
        WY: () => s,
        X1: () => _3ee9590bcdd1
      });
      let _313eac335fae = /["$&'<>\u0080-\uFFFF]/g, _180466bcc607 = new Map([ [ 34, "&quot;" ], [ 38, "&amp;" ], [ 39, "&apos;" ], [ 60, "&lt;" ], [ 62, "&gt;" ] ]), _7f05829ad9f4 = null == String.prototype.codePointAt ? (_38c7d5d2fcfc, _b6f2bd98c862) => (64512 & _38c7d5d2fcfc.charCodeAt(_b6f2bd98c862)) == 55296 ? (_38c7d5d2fcfc.charCodeAt(_b6f2bd98c862) - 55296) * 1024 + _38c7d5d2fcfc.charCodeAt(_b6f2bd98c862 + 1) - 56320 + 65536 : _38c7d5d2fcfc.charCodeAt(_b6f2bd98c862) : (_38c7d5d2fcfc, _b6f2bd98c862) => _38c7d5d2fcfc.codePointAt(_b6f2bd98c862);
      function s(_38c7d5d2fcfc) {
        let _b6f2bd98c862, _1bd41f000df9 = "", _93a414b82620 = 0;
        for (;null !== (_b6f2bd98c862 = _313eac335fae.exec(_38c7d5d2fcfc)); ) {
          let {index: _3ee9590bcdd1} = _b6f2bd98c862, _bf69fdf532e4 = _38c7d5d2fcfc.charCodeAt(_3ee9590bcdd1), _ef3c27203dbf = _180466bcc607.get(_bf69fdf532e4);
          void 0 === _ef3c27203dbf ? (_1bd41f000df9 += `${_38c7d5d2fcfc.substring(_93a414b82620, _3ee9590bcdd1)}&#x${_7f05829ad9f4(_38c7d5d2fcfc, _3ee9590bcdd1).toString(16)};`, 
          _93a414b82620 = _313eac335fae.lastIndex += Number((64512 & _bf69fdf532e4) == 55296)) : (_1bd41f000df9 += _38c7d5d2fcfc.substring(_93a414b82620, _3ee9590bcdd1) + _ef3c27203dbf, 
          _93a414b82620 = _3ee9590bcdd1 + 1);
        }
        return _1bd41f000df9 + _38c7d5d2fcfc.substr(_93a414b82620);
      }
      function o(_38c7d5d2fcfc, _b6f2bd98c862) {
        return function(_1bd41f000df9) {
          let _313eac335fae, _180466bcc607 = 0, _7f05829ad9f4 = "";
          for (;_313eac335fae = _38c7d5d2fcfc.exec(_1bd41f000df9); ) _180466bcc607 !== _313eac335fae.index && (_7f05829ad9f4 += _1bd41f000df9.substring(_180466bcc607, _313eac335fae.index)), 
          _7f05829ad9f4 += _b6f2bd98c862.get(_313eac335fae[0].charCodeAt(0)), _180466bcc607 = _313eac335fae.index + 1;
          return _7f05829ad9f4 + _1bd41f000df9.substring(_180466bcc607);
        };
      }
      let _93a414b82620 = o(/["&\u00A0]/g, new Map([ [ 34, "&quot;" ], [ 38, "&amp;" ], [ 160, "&nbsp;" ] ])), _3ee9590bcdd1 = o(/[&<>\u00A0]/g, new Map([ [ 38, "&amp;" ], [ 60, "&lt;" ], [ 62, "&gt;" ], [ 160, "&nbsp;" ] ]));
    },
    7259: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.d(_b6f2bd98c862, {
        q: () => _313eac335fae
      });
      let _313eac335fae = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(_38c7d5d2fcfc => _38c7d5d2fcfc.charCodeAt(0)));
    },
    5949: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.d(_b6f2bd98c862, {
        s: () => _313eac335fae
      });
      let _313eac335fae = new Uint16Array("Ȁaglq\tɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(_38c7d5d2fcfc => _38c7d5d2fcfc.charCodeAt(0)));
    },
    9496: function() {},
    8466: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.d(_b6f2bd98c862, {
        Gj: () => _3ee9590bcdd1.Gj,
        WY: () => _3ee9590bcdd1.WY,
        X1: () => _3ee9590bcdd1.X1
      }), _1bd41f000df9(2990), _1bd41f000df9(466);
      var _313eac335fae, _180466bcc607, _7f05829ad9f4, _93a414b82620, _3ee9590bcdd1 = _1bd41f000df9(747);
      (_313eac335fae = _7f05829ad9f4 || (_7f05829ad9f4 = {}))[_313eac335fae.XML = 0] = "XML", 
      _313eac335fae[_313eac335fae.HTML = 1] = "HTML", (_180466bcc607 = _93a414b82620 || (_93a414b82620 = {}))[_180466bcc607.UTF8 = 0] = "UTF8", 
      _180466bcc607[_180466bcc607.ASCII = 1] = "ASCII", _180466bcc607[_180466bcc607.Extensive = 2] = "Extensive", 
      _180466bcc607[_180466bcc607.Attribute = 3] = "Attribute", _180466bcc607[_180466bcc607.Text = 4] = "Text";
    },
    4645: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.d(_b6f2bd98c862, {
        i: () => g
      });
      var _313eac335fae = _1bd41f000df9(5645), _180466bcc607 = _1bd41f000df9(2990);
      let _7f05829ad9f4 = new Set([ "input", "option", "optgroup", "select", "button", "datalist", "textarea" ]), _93a414b82620 = new Set([ "p" ]), _3ee9590bcdd1 = new Set([ "thead", "tbody" ]), _bf69fdf532e4 = new Set([ "dd", "dt" ]), _ef3c27203dbf = new Set([ "rt", "rp" ]), _c20fa90a80b7 = new Map([ [ "tr", new Set([ "tr", "th", "td" ]) ], [ "th", new Set([ "th" ]) ], [ "td", new Set([ "thead", "th", "td" ]) ], [ "body", new Set([ "head", "link", "script" ]) ], [ "li", new Set([ "li" ]) ], [ "p", _93a414b82620 ], [ "h1", _93a414b82620 ], [ "h2", _93a414b82620 ], [ "h3", _93a414b82620 ], [ "h4", _93a414b82620 ], [ "h5", _93a414b82620 ], [ "h6", _93a414b82620 ], [ "select", _7f05829ad9f4 ], [ "input", _7f05829ad9f4 ], [ "output", _7f05829ad9f4 ], [ "button", _7f05829ad9f4 ], [ "datalist", _7f05829ad9f4 ], [ "textarea", _7f05829ad9f4 ], [ "option", new Set([ "option" ]) ], [ "optgroup", new Set([ "optgroup", "option" ]) ], [ "dd", _bf69fdf532e4 ], [ "dt", _bf69fdf532e4 ], [ "address", _93a414b82620 ], [ "article", _93a414b82620 ], [ "aside", _93a414b82620 ], [ "blockquote", _93a414b82620 ], [ "details", _93a414b82620 ], [ "div", _93a414b82620 ], [ "dl", _93a414b82620 ], [ "fieldset", _93a414b82620 ], [ "figcaption", _93a414b82620 ], [ "figure", _93a414b82620 ], [ "footer", _93a414b82620 ], [ "form", _93a414b82620 ], [ "header", _93a414b82620 ], [ "hr", _93a414b82620 ], [ "main", _93a414b82620 ], [ "nav", _93a414b82620 ], [ "ol", _93a414b82620 ], [ "pre", _93a414b82620 ], [ "section", _93a414b82620 ], [ "table", _93a414b82620 ], [ "ul", _93a414b82620 ], [ "rt", _ef3c27203dbf ], [ "rp", _ef3c27203dbf ], [ "tbody", _3ee9590bcdd1 ], [ "tfoot", _3ee9590bcdd1 ] ]), _eb5e33ca1634 = new Set([ "area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr" ]), _8aa5e5cf048b = new Set([ "math", "svg" ]), _e25772762281 = new Set([ "mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title" ]), _6b23ce5f34cb = /\s|\//;
      class g {
        constructor(_38c7d5d2fcfc, _b6f2bd98c862 = {}) {
          var _1bd41f000df9, _180466bcc607, _7f05829ad9f4, _93a414b82620, _3ee9590bcdd1, _bf69fdf532e4;
          this.options = _b6f2bd98c862, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, 
          this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, 
          this.stack = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, 
          this.ended = !1, this.cbs = null != _38c7d5d2fcfc ? _38c7d5d2fcfc : {}, this.htmlMode = !this.options.xmlMode, 
          this.lowerCaseTagNames = null != (_1bd41f000df9 = _b6f2bd98c862.lowerCaseTags) ? _1bd41f000df9 : this.htmlMode, 
          this.lowerCaseAttributeNames = null != (_180466bcc607 = _b6f2bd98c862.lowerCaseAttributeNames) ? _180466bcc607 : this.htmlMode, 
          this.recognizeSelfClosing = null != (_7f05829ad9f4 = _b6f2bd98c862.recognizeSelfClosing) ? _7f05829ad9f4 : !this.htmlMode, 
          this.tokenizer = new (null != (_93a414b82620 = _b6f2bd98c862.Tokenizer) ? _93a414b82620 : _313eac335fae.A)(this.options, this), 
          this.foreignContext = [ !this.htmlMode ], null == (_bf69fdf532e4 = (_3ee9590bcdd1 = this.cbs).onparserinit) || _bf69fdf532e4.call(_3ee9590bcdd1, this);
        }
        ontext(_38c7d5d2fcfc, _b6f2bd98c862) {
          var _1bd41f000df9, _313eac335fae;
          let _180466bcc607 = this.getSlice(_38c7d5d2fcfc, _b6f2bd98c862);
          this.endIndex = _b6f2bd98c862 - 1, null == (_313eac335fae = (_1bd41f000df9 = this.cbs).ontext) || _313eac335fae.call(_1bd41f000df9, _180466bcc607), 
          this.startIndex = _b6f2bd98c862;
        }
        ontextentity(_38c7d5d2fcfc, _b6f2bd98c862) {
          var _1bd41f000df9, _313eac335fae;
          this.endIndex = _b6f2bd98c862 - 1, null == (_313eac335fae = (_1bd41f000df9 = this.cbs).ontext) || _313eac335fae.call(_1bd41f000df9, (0, 
          _180466bcc607.MK)(_38c7d5d2fcfc)), this.startIndex = _b6f2bd98c862;
        }
        isVoidElement(_38c7d5d2fcfc) {
          return this.htmlMode && _eb5e33ca1634.has(_38c7d5d2fcfc);
        }
        onopentagname(_38c7d5d2fcfc, _b6f2bd98c862) {
          this.endIndex = _b6f2bd98c862;
          let _1bd41f000df9 = this.getSlice(_38c7d5d2fcfc, _b6f2bd98c862);
          this.lowerCaseTagNames && (_1bd41f000df9 = _1bd41f000df9.toLowerCase()), this.emitOpenTag(_1bd41f000df9);
        }
        emitOpenTag(_38c7d5d2fcfc) {
          var _b6f2bd98c862, _1bd41f000df9, _313eac335fae, _180466bcc607;
          this.openTagStart = this.startIndex, this.tagname = _38c7d5d2fcfc;
          let _7f05829ad9f4 = this.htmlMode && _c20fa90a80b7.get(_38c7d5d2fcfc);
          if (_7f05829ad9f4) for (;this.stack.length > 0 && _7f05829ad9f4.has(this.stack[0]); ) {
            let _38c7d5d2fcfc = this.stack.shift();
            null == (_1bd41f000df9 = (_b6f2bd98c862 = this.cbs).onclosetag) || _1bd41f000df9.call(_b6f2bd98c862, _38c7d5d2fcfc, !0);
          }
          !this.isVoidElement(_38c7d5d2fcfc) && (this.stack.unshift(_38c7d5d2fcfc), this.htmlMode && (_8aa5e5cf048b.has(_38c7d5d2fcfc) ? this.foreignContext.unshift(!0) : _e25772762281.has(_38c7d5d2fcfc) && this.foreignContext.unshift(!1))), 
          null == (_180466bcc607 = (_313eac335fae = this.cbs).onopentagname) || _180466bcc607.call(_313eac335fae, _38c7d5d2fcfc), 
          this.cbs.onopentag && (this.attribs = {});
        }
        endOpenTag(_38c7d5d2fcfc) {
          var _b6f2bd98c862, _1bd41f000df9;
          this.startIndex = this.openTagStart, this.attribs && (null == (_1bd41f000df9 = (_b6f2bd98c862 = this.cbs).onopentag) || _1bd41f000df9.call(_b6f2bd98c862, this.tagname, this.attribs, _38c7d5d2fcfc), 
          this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), 
          this.tagname = "";
        }
        onopentagend(_38c7d5d2fcfc) {
          this.endIndex = _38c7d5d2fcfc, this.endOpenTag(!1), this.startIndex = _38c7d5d2fcfc + 1;
        }
        onclosetag(_38c7d5d2fcfc, _b6f2bd98c862) {
          var _1bd41f000df9, _313eac335fae, _180466bcc607, _7f05829ad9f4, _93a414b82620, _3ee9590bcdd1, _bf69fdf532e4, _ef3c27203dbf;
          this.endIndex = _b6f2bd98c862;
          let _c20fa90a80b7 = this.getSlice(_38c7d5d2fcfc, _b6f2bd98c862);
          if (this.lowerCaseTagNames && (_c20fa90a80b7 = _c20fa90a80b7.toLowerCase()), this.htmlMode && (_8aa5e5cf048b.has(_c20fa90a80b7) || _e25772762281.has(_c20fa90a80b7)) && this.foreignContext.shift(), 
          this.isVoidElement(_c20fa90a80b7)) this.htmlMode && "br" === _c20fa90a80b7 && (null == (_7f05829ad9f4 = (_180466bcc607 = this.cbs).onopentagname) || _7f05829ad9f4.call(_180466bcc607, "br"), 
          null == (_3ee9590bcdd1 = (_93a414b82620 = this.cbs).onopentag) || _3ee9590bcdd1.call(_93a414b82620, "br", {}, !0), 
          null == (_ef3c27203dbf = (_bf69fdf532e4 = this.cbs).onclosetag) || _ef3c27203dbf.call(_bf69fdf532e4, "br", !1)); else {
            let _38c7d5d2fcfc = this.stack.indexOf(_c20fa90a80b7);
            if (-1 !== _38c7d5d2fcfc) for (let _b6f2bd98c862 = 0; _b6f2bd98c862 <= _38c7d5d2fcfc; _b6f2bd98c862++) {
              let _180466bcc607 = this.stack.shift();
              null == (_313eac335fae = (_1bd41f000df9 = this.cbs).onclosetag) || _313eac335fae.call(_1bd41f000df9, _180466bcc607, _b6f2bd98c862 !== _38c7d5d2fcfc);
            } else this.htmlMode && "p" === _c20fa90a80b7 && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
          }
          this.startIndex = _b6f2bd98c862 + 1;
        }
        onselfclosingtag(_38c7d5d2fcfc) {
          this.endIndex = _38c7d5d2fcfc, this.recognizeSelfClosing || this.foreignContext[0] ? (this.closeCurrentTag(!1), 
          this.startIndex = _38c7d5d2fcfc + 1) : this.onopentagend(_38c7d5d2fcfc);
        }
        closeCurrentTag(_38c7d5d2fcfc) {
          var _b6f2bd98c862, _1bd41f000df9;
          let _313eac335fae = this.tagname;
          this.endOpenTag(_38c7d5d2fcfc), this.stack[0] === _313eac335fae && (null == (_1bd41f000df9 = (_b6f2bd98c862 = this.cbs).onclosetag) || _1bd41f000df9.call(_b6f2bd98c862, _313eac335fae, !_38c7d5d2fcfc), 
          this.stack.shift());
        }
        onattribname(_38c7d5d2fcfc, _b6f2bd98c862) {
          this.startIndex = _38c7d5d2fcfc;
          let _1bd41f000df9 = this.getSlice(_38c7d5d2fcfc, _b6f2bd98c862);
          this.attribname = this.lowerCaseAttributeNames ? _1bd41f000df9.toLowerCase() : _1bd41f000df9;
        }
        onattribdata(_38c7d5d2fcfc, _b6f2bd98c862) {
          this.attribvalue += this.getSlice(_38c7d5d2fcfc, _b6f2bd98c862);
        }
        onattribentity(_38c7d5d2fcfc) {
          this.attribvalue += (0, _180466bcc607.MK)(_38c7d5d2fcfc);
        }
        onattribend(_38c7d5d2fcfc, _b6f2bd98c862) {
          var _1bd41f000df9, _180466bcc607;
          this.endIndex = _b6f2bd98c862, null == (_180466bcc607 = (_1bd41f000df9 = this.cbs).onattribute) || _180466bcc607.call(_1bd41f000df9, this.attribname, this.attribvalue, _38c7d5d2fcfc === _313eac335fae.X.Double ? '"' : _38c7d5d2fcfc === _313eac335fae.X.Single ? "'" : _38c7d5d2fcfc === _313eac335fae.X.NoValue ? void 0 : null), 
          this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), 
          this.attribvalue = "";
        }
        getInstructionName(_38c7d5d2fcfc) {
          let _b6f2bd98c862 = _38c7d5d2fcfc.search(_6b23ce5f34cb), _1bd41f000df9 = _b6f2bd98c862 < 0 ? _38c7d5d2fcfc : _38c7d5d2fcfc.substr(0, _b6f2bd98c862);
          return this.lowerCaseTagNames && (_1bd41f000df9 = _1bd41f000df9.toLowerCase()), 
          _1bd41f000df9;
        }
        ondeclaration(_38c7d5d2fcfc, _b6f2bd98c862) {
          this.endIndex = _b6f2bd98c862;
          let _1bd41f000df9 = this.getSlice(_38c7d5d2fcfc, _b6f2bd98c862);
          if (this.cbs.onprocessinginstruction) {
            let _38c7d5d2fcfc = this.getInstructionName(_1bd41f000df9);
            this.cbs.onprocessinginstruction(`!${_38c7d5d2fcfc}`, `!${_1bd41f000df9}`);
          }
          this.startIndex = _b6f2bd98c862 + 1;
        }
        onprocessinginstruction(_38c7d5d2fcfc, _b6f2bd98c862) {
          this.endIndex = _b6f2bd98c862;
          let _1bd41f000df9 = this.getSlice(_38c7d5d2fcfc, _b6f2bd98c862);
          if (this.cbs.onprocessinginstruction) {
            let _38c7d5d2fcfc = this.getInstructionName(_1bd41f000df9);
            this.cbs.onprocessinginstruction(`?${_38c7d5d2fcfc}`, `?${_1bd41f000df9}`);
          }
          this.startIndex = _b6f2bd98c862 + 1;
        }
        oncomment(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
          var _313eac335fae, _180466bcc607, _7f05829ad9f4, _93a414b82620;
          this.endIndex = _b6f2bd98c862, null == (_180466bcc607 = (_313eac335fae = this.cbs).oncomment) || _180466bcc607.call(_313eac335fae, this.getSlice(_38c7d5d2fcfc, _b6f2bd98c862 - _1bd41f000df9)), 
          null == (_93a414b82620 = (_7f05829ad9f4 = this.cbs).oncommentend) || _93a414b82620.call(_7f05829ad9f4), 
          this.startIndex = _b6f2bd98c862 + 1;
        }
        oncdata(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
          var _313eac335fae, _180466bcc607, _7f05829ad9f4, _93a414b82620, _3ee9590bcdd1, _bf69fdf532e4, _ef3c27203dbf, _c20fa90a80b7, _eb5e33ca1634, _8aa5e5cf048b;
          this.endIndex = _b6f2bd98c862;
          let _e25772762281 = this.getSlice(_38c7d5d2fcfc, _b6f2bd98c862 - _1bd41f000df9);
          !this.htmlMode || this.options.recognizeCDATA ? (null == (_180466bcc607 = (_313eac335fae = this.cbs).oncdatastart) || _180466bcc607.call(_313eac335fae), 
          null == (_93a414b82620 = (_7f05829ad9f4 = this.cbs).ontext) || _93a414b82620.call(_7f05829ad9f4, _e25772762281), 
          null == (_bf69fdf532e4 = (_3ee9590bcdd1 = this.cbs).oncdataend) || _bf69fdf532e4.call(_3ee9590bcdd1)) : (null == (_c20fa90a80b7 = (_ef3c27203dbf = this.cbs).oncomment) || _c20fa90a80b7.call(_ef3c27203dbf, `[CDATA[${_e25772762281}]]`), 
          null == (_8aa5e5cf048b = (_eb5e33ca1634 = this.cbs).oncommentend) || _8aa5e5cf048b.call(_eb5e33ca1634)), 
          this.startIndex = _b6f2bd98c862 + 1;
        }
        onend() {
          var _38c7d5d2fcfc, _b6f2bd98c862;
          if (this.cbs.onclosetag) {
            this.endIndex = this.startIndex;
            for (let _38c7d5d2fcfc = 0; _38c7d5d2fcfc < this.stack.length; _38c7d5d2fcfc++) this.cbs.onclosetag(this.stack[_38c7d5d2fcfc], !0);
          }
          null == (_b6f2bd98c862 = (_38c7d5d2fcfc = this.cbs).onend) || _b6f2bd98c862.call(_38c7d5d2fcfc);
        }
        reset() {
          var _38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9, _313eac335fae;
          null == (_b6f2bd98c862 = (_38c7d5d2fcfc = this.cbs).onreset) || _b6f2bd98c862.call(_38c7d5d2fcfc), 
          this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, 
          this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, null == (_313eac335fae = (_1bd41f000df9 = this.cbs).onparserinit) || _313eac335fae.call(_1bd41f000df9, this), 
          this.buffers.length = 0, this.foreignContext.length = 0, this.foreignContext.unshift(!this.htmlMode), 
          this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1;
        }
        parseComplete(_38c7d5d2fcfc) {
          this.reset(), this.end(_38c7d5d2fcfc);
        }
        getSlice(_38c7d5d2fcfc, _b6f2bd98c862) {
          for (;_38c7d5d2fcfc - this.bufferOffset >= this.buffers[0].length; ) this.shiftBuffer();
          let _1bd41f000df9 = this.buffers[0].slice(_38c7d5d2fcfc - this.bufferOffset, _b6f2bd98c862 - this.bufferOffset);
          for (;_b6f2bd98c862 - this.bufferOffset > this.buffers[0].length; ) this.shiftBuffer(), 
          _1bd41f000df9 += this.buffers[0].slice(0, _b6f2bd98c862 - this.bufferOffset);
          return _1bd41f000df9;
        }
        shiftBuffer() {
          this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift();
        }
        write(_38c7d5d2fcfc) {
          var _b6f2bd98c862, _1bd41f000df9;
          if (this.ended) {
            null == (_1bd41f000df9 = (_b6f2bd98c862 = this.cbs).onerror) || _1bd41f000df9.call(_b6f2bd98c862, Error(".write() after done!"));
            return;
          }
          this.buffers.push(_38c7d5d2fcfc), this.tokenizer.running && (this.tokenizer.write(_38c7d5d2fcfc), 
          this.writeIndex++);
        }
        end(_38c7d5d2fcfc) {
          var _b6f2bd98c862, _1bd41f000df9;
          if (this.ended) {
            null == (_1bd41f000df9 = (_b6f2bd98c862 = this.cbs).onerror) || _1bd41f000df9.call(_b6f2bd98c862, Error(".end() after done!"));
            return;
          }
          _38c7d5d2fcfc && this.write(_38c7d5d2fcfc), this.ended = !0, this.tokenizer.end();
        }
        pause() {
          this.tokenizer.pause();
        }
        resume() {
          for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length; ) this.tokenizer.write(this.buffers[this.writeIndex++]);
          this.ended && this.tokenizer.end();
        }
        parseChunk(_38c7d5d2fcfc) {
          this.write(_38c7d5d2fcfc);
        }
        done(_38c7d5d2fcfc) {
          this.end(_38c7d5d2fcfc);
        }
      }
    },
    5645: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.d(_b6f2bd98c862, {
        A: () => p,
        X: () => _bf69fdf532e4
      });
      var _313eac335fae, _180466bcc607, _7f05829ad9f4, _93a414b82620, _3ee9590bcdd1, _bf69fdf532e4, _ef3c27203dbf = _1bd41f000df9(2990);
      function u(_38c7d5d2fcfc) {
        return _38c7d5d2fcfc === _93a414b82620.Space || _38c7d5d2fcfc === _93a414b82620.NewLine || _38c7d5d2fcfc === _93a414b82620.Tab || _38c7d5d2fcfc === _93a414b82620.FormFeed || _38c7d5d2fcfc === _93a414b82620.CarriageReturn;
      }
      function d(_38c7d5d2fcfc) {
        return _38c7d5d2fcfc === _93a414b82620.Slash || _38c7d5d2fcfc === _93a414b82620.Gt || u(_38c7d5d2fcfc);
      }
      (_313eac335fae = _93a414b82620 || (_93a414b82620 = {}))[_313eac335fae.Tab = 9] = "Tab", 
      _313eac335fae[_313eac335fae.NewLine = 10] = "NewLine", _313eac335fae[_313eac335fae.FormFeed = 12] = "FormFeed", 
      _313eac335fae[_313eac335fae.CarriageReturn = 13] = "CarriageReturn", _313eac335fae[_313eac335fae.Space = 32] = "Space", 
      _313eac335fae[_313eac335fae.ExclamationMark = 33] = "ExclamationMark", _313eac335fae[_313eac335fae.Number = 35] = "Number", 
      _313eac335fae[_313eac335fae.Amp = 38] = "Amp", _313eac335fae[_313eac335fae.SingleQuote = 39] = "SingleQuote", 
      _313eac335fae[_313eac335fae.DoubleQuote = 34] = "DoubleQuote", _313eac335fae[_313eac335fae.Dash = 45] = "Dash", 
      _313eac335fae[_313eac335fae.Slash = 47] = "Slash", _313eac335fae[_313eac335fae.Zero = 48] = "Zero", 
      _313eac335fae[_313eac335fae.Nine = 57] = "Nine", _313eac335fae[_313eac335fae.Semi = 59] = "Semi", 
      _313eac335fae[_313eac335fae.Lt = 60] = "Lt", _313eac335fae[_313eac335fae.Eq = 61] = "Eq", 
      _313eac335fae[_313eac335fae.Gt = 62] = "Gt", _313eac335fae[_313eac335fae.Questionmark = 63] = "Questionmark", 
      _313eac335fae[_313eac335fae.UpperA = 65] = "UpperA", _313eac335fae[_313eac335fae.LowerA = 97] = "LowerA", 
      _313eac335fae[_313eac335fae.UpperF = 70] = "UpperF", _313eac335fae[_313eac335fae.LowerF = 102] = "LowerF", 
      _313eac335fae[_313eac335fae.UpperZ = 90] = "UpperZ", _313eac335fae[_313eac335fae.LowerZ = 122] = "LowerZ", 
      _313eac335fae[_313eac335fae.LowerX = 120] = "LowerX", _313eac335fae[_313eac335fae.OpeningSquareBracket = 91] = "OpeningSquareBracket", 
      (_180466bcc607 = _3ee9590bcdd1 || (_3ee9590bcdd1 = {}))[_180466bcc607.Text = 1] = "Text", 
      _180466bcc607[_180466bcc607.BeforeTagName = 2] = "BeforeTagName", _180466bcc607[_180466bcc607.InTagName = 3] = "InTagName", 
      _180466bcc607[_180466bcc607.InSelfClosingTag = 4] = "InSelfClosingTag", _180466bcc607[_180466bcc607.BeforeClosingTagName = 5] = "BeforeClosingTagName", 
      _180466bcc607[_180466bcc607.InClosingTagName = 6] = "InClosingTagName", _180466bcc607[_180466bcc607.AfterClosingTagName = 7] = "AfterClosingTagName", 
      _180466bcc607[_180466bcc607.BeforeAttributeName = 8] = "BeforeAttributeName", _180466bcc607[_180466bcc607.InAttributeName = 9] = "InAttributeName", 
      _180466bcc607[_180466bcc607.AfterAttributeName = 10] = "AfterAttributeName", _180466bcc607[_180466bcc607.BeforeAttributeValue = 11] = "BeforeAttributeValue", 
      _180466bcc607[_180466bcc607.InAttributeValueDq = 12] = "InAttributeValueDq", _180466bcc607[_180466bcc607.InAttributeValueSq = 13] = "InAttributeValueSq", 
      _180466bcc607[_180466bcc607.InAttributeValueNq = 14] = "InAttributeValueNq", _180466bcc607[_180466bcc607.BeforeDeclaration = 15] = "BeforeDeclaration", 
      _180466bcc607[_180466bcc607.InDeclaration = 16] = "InDeclaration", _180466bcc607[_180466bcc607.InProcessingInstruction = 17] = "InProcessingInstruction", 
      _180466bcc607[_180466bcc607.BeforeComment = 18] = "BeforeComment", _180466bcc607[_180466bcc607.CDATASequence = 19] = "CDATASequence", 
      _180466bcc607[_180466bcc607.InSpecialComment = 20] = "InSpecialComment", _180466bcc607[_180466bcc607.InCommentLike = 21] = "InCommentLike", 
      _180466bcc607[_180466bcc607.BeforeSpecialS = 22] = "BeforeSpecialS", _180466bcc607[_180466bcc607.BeforeSpecialT = 23] = "BeforeSpecialT", 
      _180466bcc607[_180466bcc607.SpecialStartSequence = 24] = "SpecialStartSequence", 
      _180466bcc607[_180466bcc607.InSpecialTag = 25] = "InSpecialTag", _180466bcc607[_180466bcc607.InEntity = 26] = "InEntity", 
      (_7f05829ad9f4 = _bf69fdf532e4 || (_bf69fdf532e4 = {}))[_7f05829ad9f4.NoValue = 0] = "NoValue", 
      _7f05829ad9f4[_7f05829ad9f4.Unquoted = 1] = "Unquoted", _7f05829ad9f4[_7f05829ad9f4.Single = 2] = "Single", 
      _7f05829ad9f4[_7f05829ad9f4.Double = 3] = "Double";
      let _c20fa90a80b7 = {
        Cdata: new Uint8Array([ 67, 68, 65, 84, 65, 91 ]),
        CdataEnd: new Uint8Array([ 93, 93, 62 ]),
        CommentEnd: new Uint8Array([ 45, 45, 62 ]),
        ScriptEnd: new Uint8Array([ 60, 47, 115, 99, 114, 105, 112, 116 ]),
        StyleEnd: new Uint8Array([ 60, 47, 115, 116, 121, 108, 101 ]),
        TitleEnd: new Uint8Array([ 60, 47, 116, 105, 116, 108, 101 ]),
        TextareaEnd: new Uint8Array([ 60, 47, 116, 101, 120, 116, 97, 114, 101, 97 ]),
        XmpEnd: new Uint8Array([ 60, 47, 120, 109, 112 ])
      };
      class p {
        constructor({xmlMode: _38c7d5d2fcfc = !1, decodeEntities: _b6f2bd98c862 = !0}, _1bd41f000df9) {
          this.cbs = _1bd41f000df9, this.state = _3ee9590bcdd1.Text, this.buffer = "", this.sectionStart = 0, 
          this.index = 0, this.entityStart = 0, this.baseState = _3ee9590bcdd1.Text, this.isSpecial = !1, 
          this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, 
          this.xmlMode = _38c7d5d2fcfc, this.decodeEntities = _b6f2bd98c862, this.entityDecoder = new _ef3c27203dbf.Wf(_38c7d5d2fcfc ? _ef3c27203dbf.sr : _ef3c27203dbf.qN, (_38c7d5d2fcfc, _b6f2bd98c862) => this.emitCodePoint(_38c7d5d2fcfc, _b6f2bd98c862));
        }
        reset() {
          this.state = _3ee9590bcdd1.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, 
          this.baseState = _3ee9590bcdd1.Text, this.currentSequence = void 0, this.running = !0, 
          this.offset = 0;
        }
        write(_38c7d5d2fcfc) {
          this.offset += this.buffer.length, this.buffer = _38c7d5d2fcfc, this.parse();
        }
        end() {
          this.running && this.finish();
        }
        pause() {
          this.running = !1;
        }
        resume() {
          this.running = !0, this.index < this.buffer.length + this.offset && this.parse();
        }
        stateText(_38c7d5d2fcfc) {
          _38c7d5d2fcfc === _93a414b82620.Lt || !this.decodeEntities && this.fastForwardTo(_93a414b82620.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), 
          this.state = _3ee9590bcdd1.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && _38c7d5d2fcfc === _93a414b82620.Amp && this.startEntity();
        }
        stateSpecialStartSequence(_38c7d5d2fcfc) {
          let _b6f2bd98c862 = this.sequenceIndex === this.currentSequence.length;
          if (_b6f2bd98c862 ? d(_38c7d5d2fcfc) : (32 | _38c7d5d2fcfc) === this.currentSequence[this.sequenceIndex]) {
            if (!_b6f2bd98c862) return void this.sequenceIndex++;
          } else this.isSpecial = !1;
          this.sequenceIndex = 0, this.state = _3ee9590bcdd1.InTagName, this.stateInTagName(_38c7d5d2fcfc);
        }
        stateInSpecialTag(_38c7d5d2fcfc) {
          if (this.sequenceIndex === this.currentSequence.length) {
            if (_38c7d5d2fcfc === _93a414b82620.Gt || u(_38c7d5d2fcfc)) {
              let _b6f2bd98c862 = this.index - this.currentSequence.length;
              if (this.sectionStart < _b6f2bd98c862) {
                let _38c7d5d2fcfc = this.index;
                this.index = _b6f2bd98c862, this.cbs.ontext(this.sectionStart, _b6f2bd98c862), this.index = _38c7d5d2fcfc;
              }
              this.isSpecial = !1, this.sectionStart = _b6f2bd98c862 + 2, this.stateInClosingTagName(_38c7d5d2fcfc);
              return;
            }
            this.sequenceIndex = 0;
          }
          (32 | _38c7d5d2fcfc) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : 0 === this.sequenceIndex ? this.currentSequence === _c20fa90a80b7.TitleEnd ? this.decodeEntities && _38c7d5d2fcfc === _93a414b82620.Amp && this.startEntity() : this.fastForwardTo(_93a414b82620.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = Number(_38c7d5d2fcfc === _93a414b82620.Lt);
        }
        stateCDATASequence(_38c7d5d2fcfc) {
          _38c7d5d2fcfc === _c20fa90a80b7.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === _c20fa90a80b7.Cdata.length && (this.state = _3ee9590bcdd1.InCommentLike, 
          this.currentSequence = _c20fa90a80b7.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, 
          this.state = _3ee9590bcdd1.InDeclaration, this.stateInDeclaration(_38c7d5d2fcfc));
        }
        fastForwardTo(_38c7d5d2fcfc) {
          for (;++this.index < this.buffer.length + this.offset; ) if (this.buffer.charCodeAt(this.index - this.offset) === _38c7d5d2fcfc) return !0;
          return this.index = this.buffer.length + this.offset - 1, !1;
        }
        stateInCommentLike(_38c7d5d2fcfc) {
          _38c7d5d2fcfc === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === _c20fa90a80b7.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), 
          this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = _3ee9590bcdd1.Text) : 0 === this.sequenceIndex ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : _38c7d5d2fcfc !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
        }
        isTagStartChar(_38c7d5d2fcfc) {
          return this.xmlMode ? !d(_38c7d5d2fcfc) : _38c7d5d2fcfc >= _93a414b82620.LowerA && _38c7d5d2fcfc <= _93a414b82620.LowerZ || _38c7d5d2fcfc >= _93a414b82620.UpperA && _38c7d5d2fcfc <= _93a414b82620.UpperZ;
        }
        startSpecial(_38c7d5d2fcfc, _b6f2bd98c862) {
          this.isSpecial = !0, this.currentSequence = _38c7d5d2fcfc, this.sequenceIndex = _b6f2bd98c862, 
          this.state = _3ee9590bcdd1.SpecialStartSequence;
        }
        stateBeforeTagName(_38c7d5d2fcfc) {
          if (_38c7d5d2fcfc === _93a414b82620.ExclamationMark) this.state = _3ee9590bcdd1.BeforeDeclaration, 
          this.sectionStart = this.index + 1; else if (_38c7d5d2fcfc === _93a414b82620.Questionmark) this.state = _3ee9590bcdd1.InProcessingInstruction, 
          this.sectionStart = this.index + 1; else if (this.isTagStartChar(_38c7d5d2fcfc)) {
            let _b6f2bd98c862 = 32 | _38c7d5d2fcfc;
            this.sectionStart = this.index, this.xmlMode ? this.state = _3ee9590bcdd1.InTagName : _b6f2bd98c862 === _c20fa90a80b7.ScriptEnd[2] ? this.state = _3ee9590bcdd1.BeforeSpecialS : _b6f2bd98c862 === _c20fa90a80b7.TitleEnd[2] || _b6f2bd98c862 === _c20fa90a80b7.XmpEnd[2] ? this.state = _3ee9590bcdd1.BeforeSpecialT : this.state = _3ee9590bcdd1.InTagName;
          } else _38c7d5d2fcfc === _93a414b82620.Slash ? this.state = _3ee9590bcdd1.BeforeClosingTagName : (this.state = _3ee9590bcdd1.Text, 
          this.stateText(_38c7d5d2fcfc));
        }
        stateInTagName(_38c7d5d2fcfc) {
          d(_38c7d5d2fcfc) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, 
          this.state = _3ee9590bcdd1.BeforeAttributeName, this.stateBeforeAttributeName(_38c7d5d2fcfc));
        }
        stateBeforeClosingTagName(_38c7d5d2fcfc) {
          u(_38c7d5d2fcfc) || (_38c7d5d2fcfc === _93a414b82620.Gt ? this.state = _3ee9590bcdd1.Text : (this.state = this.isTagStartChar(_38c7d5d2fcfc) ? _3ee9590bcdd1.InClosingTagName : _3ee9590bcdd1.InSpecialComment, 
          this.sectionStart = this.index));
        }
        stateInClosingTagName(_38c7d5d2fcfc) {
          (_38c7d5d2fcfc === _93a414b82620.Gt || u(_38c7d5d2fcfc)) && (this.cbs.onclosetag(this.sectionStart, this.index), 
          this.sectionStart = -1, this.state = _3ee9590bcdd1.AfterClosingTagName, this.stateAfterClosingTagName(_38c7d5d2fcfc));
        }
        stateAfterClosingTagName(_38c7d5d2fcfc) {
          (_38c7d5d2fcfc === _93a414b82620.Gt || this.fastForwardTo(_93a414b82620.Gt)) && (this.state = _3ee9590bcdd1.Text, 
          this.sectionStart = this.index + 1);
        }
        stateBeforeAttributeName(_38c7d5d2fcfc) {
          _38c7d5d2fcfc === _93a414b82620.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = _3ee9590bcdd1.InSpecialTag, 
          this.sequenceIndex = 0) : this.state = _3ee9590bcdd1.Text, this.sectionStart = this.index + 1) : _38c7d5d2fcfc === _93a414b82620.Slash ? this.state = _3ee9590bcdd1.InSelfClosingTag : u(_38c7d5d2fcfc) || (this.state = _3ee9590bcdd1.InAttributeName, 
          this.sectionStart = this.index);
        }
        stateInSelfClosingTag(_38c7d5d2fcfc) {
          _38c7d5d2fcfc === _93a414b82620.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = _3ee9590bcdd1.Text, 
          this.sectionStart = this.index + 1, this.isSpecial = !1) : u(_38c7d5d2fcfc) || (this.state = _3ee9590bcdd1.BeforeAttributeName, 
          this.stateBeforeAttributeName(_38c7d5d2fcfc));
        }
        stateInAttributeName(_38c7d5d2fcfc) {
          (_38c7d5d2fcfc === _93a414b82620.Eq || d(_38c7d5d2fcfc)) && (this.cbs.onattribname(this.sectionStart, this.index), 
          this.sectionStart = this.index, this.state = _3ee9590bcdd1.AfterAttributeName, this.stateAfterAttributeName(_38c7d5d2fcfc));
        }
        stateAfterAttributeName(_38c7d5d2fcfc) {
          _38c7d5d2fcfc === _93a414b82620.Eq ? this.state = _3ee9590bcdd1.BeforeAttributeValue : _38c7d5d2fcfc === _93a414b82620.Slash || _38c7d5d2fcfc === _93a414b82620.Gt ? (this.cbs.onattribend(_bf69fdf532e4.NoValue, this.sectionStart), 
          this.sectionStart = -1, this.state = _3ee9590bcdd1.BeforeAttributeName, this.stateBeforeAttributeName(_38c7d5d2fcfc)) : u(_38c7d5d2fcfc) || (this.cbs.onattribend(_bf69fdf532e4.NoValue, this.sectionStart), 
          this.state = _3ee9590bcdd1.InAttributeName, this.sectionStart = this.index);
        }
        stateBeforeAttributeValue(_38c7d5d2fcfc) {
          _38c7d5d2fcfc === _93a414b82620.DoubleQuote ? (this.state = _3ee9590bcdd1.InAttributeValueDq, 
          this.sectionStart = this.index + 1) : _38c7d5d2fcfc === _93a414b82620.SingleQuote ? (this.state = _3ee9590bcdd1.InAttributeValueSq, 
          this.sectionStart = this.index + 1) : u(_38c7d5d2fcfc) || (this.sectionStart = this.index, 
          this.state = _3ee9590bcdd1.InAttributeValueNq, this.stateInAttributeValueNoQuotes(_38c7d5d2fcfc));
        }
        handleInAttributeValue(_38c7d5d2fcfc, _b6f2bd98c862) {
          _38c7d5d2fcfc === _b6f2bd98c862 || !this.decodeEntities && this.fastForwardTo(_b6f2bd98c862) ? (this.cbs.onattribdata(this.sectionStart, this.index), 
          this.sectionStart = -1, this.cbs.onattribend(_b6f2bd98c862 === _93a414b82620.DoubleQuote ? _bf69fdf532e4.Double : _bf69fdf532e4.Single, this.index + 1), 
          this.state = _3ee9590bcdd1.BeforeAttributeName) : this.decodeEntities && _38c7d5d2fcfc === _93a414b82620.Amp && this.startEntity();
        }
        stateInAttributeValueDoubleQuotes(_38c7d5d2fcfc) {
          this.handleInAttributeValue(_38c7d5d2fcfc, _93a414b82620.DoubleQuote);
        }
        stateInAttributeValueSingleQuotes(_38c7d5d2fcfc) {
          this.handleInAttributeValue(_38c7d5d2fcfc, _93a414b82620.SingleQuote);
        }
        stateInAttributeValueNoQuotes(_38c7d5d2fcfc) {
          u(_38c7d5d2fcfc) || _38c7d5d2fcfc === _93a414b82620.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), 
          this.sectionStart = -1, this.cbs.onattribend(_bf69fdf532e4.Unquoted, this.index), 
          this.state = _3ee9590bcdd1.BeforeAttributeName, this.stateBeforeAttributeName(_38c7d5d2fcfc)) : this.decodeEntities && _38c7d5d2fcfc === _93a414b82620.Amp && this.startEntity();
        }
        stateBeforeDeclaration(_38c7d5d2fcfc) {
          _38c7d5d2fcfc === _93a414b82620.OpeningSquareBracket ? (this.state = _3ee9590bcdd1.CDATASequence, 
          this.sequenceIndex = 0) : this.state = _38c7d5d2fcfc === _93a414b82620.Dash ? _3ee9590bcdd1.BeforeComment : _3ee9590bcdd1.InDeclaration;
        }
        stateInDeclaration(_38c7d5d2fcfc) {
          (_38c7d5d2fcfc === _93a414b82620.Gt || this.fastForwardTo(_93a414b82620.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), 
          this.state = _3ee9590bcdd1.Text, this.sectionStart = this.index + 1);
        }
        stateInProcessingInstruction(_38c7d5d2fcfc) {
          (_38c7d5d2fcfc === _93a414b82620.Gt || this.fastForwardTo(_93a414b82620.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), 
          this.state = _3ee9590bcdd1.Text, this.sectionStart = this.index + 1);
        }
        stateBeforeComment(_38c7d5d2fcfc) {
          _38c7d5d2fcfc === _93a414b82620.Dash ? (this.state = _3ee9590bcdd1.InCommentLike, 
          this.currentSequence = _c20fa90a80b7.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = _3ee9590bcdd1.InDeclaration;
        }
        stateInSpecialComment(_38c7d5d2fcfc) {
          (_38c7d5d2fcfc === _93a414b82620.Gt || this.fastForwardTo(_93a414b82620.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), 
          this.state = _3ee9590bcdd1.Text, this.sectionStart = this.index + 1);
        }
        stateBeforeSpecialS(_38c7d5d2fcfc) {
          let _b6f2bd98c862 = 32 | _38c7d5d2fcfc;
          _b6f2bd98c862 === _c20fa90a80b7.ScriptEnd[3] ? this.startSpecial(_c20fa90a80b7.ScriptEnd, 4) : _b6f2bd98c862 === _c20fa90a80b7.StyleEnd[3] ? this.startSpecial(_c20fa90a80b7.StyleEnd, 4) : (this.state = _3ee9590bcdd1.InTagName, 
          this.stateInTagName(_38c7d5d2fcfc));
        }
        stateBeforeSpecialT(_38c7d5d2fcfc) {
          switch (32 | _38c7d5d2fcfc) {
           case _c20fa90a80b7.TitleEnd[3]:
            this.startSpecial(_c20fa90a80b7.TitleEnd, 4);
            break;

           case _c20fa90a80b7.TextareaEnd[3]:
            this.startSpecial(_c20fa90a80b7.TextareaEnd, 4);
            break;

           case _c20fa90a80b7.XmpEnd[3]:
            this.startSpecial(_c20fa90a80b7.XmpEnd, 4);
            break;

           default:
            this.state = _3ee9590bcdd1.InTagName, this.stateInTagName(_38c7d5d2fcfc);
          }
        }
        startEntity() {
          this.baseState = this.state, this.state = _3ee9590bcdd1.InEntity, this.entityStart = this.index, 
          this.entityDecoder.startEntity(this.xmlMode ? _ef3c27203dbf.FJ.Strict : this.baseState === _3ee9590bcdd1.Text || this.baseState === _3ee9590bcdd1.InSpecialTag ? _ef3c27203dbf.FJ.Legacy : _ef3c27203dbf.FJ.Attribute);
        }
        stateInEntity() {
          let _38c7d5d2fcfc = this.entityDecoder.write(this.buffer, this.index - this.offset);
          _38c7d5d2fcfc >= 0 ? (this.state = this.baseState, 0 === _38c7d5d2fcfc && (this.index = this.entityStart)) : this.index = this.offset + this.buffer.length - 1;
        }
        cleanup() {
          this.running && this.sectionStart !== this.index && (this.state === _3ee9590bcdd1.Text || this.state === _3ee9590bcdd1.InSpecialTag && 0 === this.sequenceIndex ? (this.cbs.ontext(this.sectionStart, this.index), 
          this.sectionStart = this.index) : (this.state === _3ee9590bcdd1.InAttributeValueDq || this.state === _3ee9590bcdd1.InAttributeValueSq || this.state === _3ee9590bcdd1.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), 
          this.sectionStart = this.index));
        }
        shouldContinue() {
          return this.index < this.buffer.length + this.offset && this.running;
        }
        parse() {
          for (;this.shouldContinue(); ) {
            let _38c7d5d2fcfc = this.buffer.charCodeAt(this.index - this.offset);
            switch (this.state) {
             case _3ee9590bcdd1.Text:
              this.stateText(_38c7d5d2fcfc);
              break;

             case _3ee9590bcdd1.SpecialStartSequence:
              this.stateSpecialStartSequence(_38c7d5d2fcfc);
              break;

             case _3ee9590bcdd1.InSpecialTag:
              this.stateInSpecialTag(_38c7d5d2fcfc);
              break;

             case _3ee9590bcdd1.CDATASequence:
              this.stateCDATASequence(_38c7d5d2fcfc);
              break;

             case _3ee9590bcdd1.InAttributeValueDq:
              this.stateInAttributeValueDoubleQuotes(_38c7d5d2fcfc);
              break;

             case _3ee9590bcdd1.InAttributeName:
              this.stateInAttributeName(_38c7d5d2fcfc);
              break;

             case _3ee9590bcdd1.InCommentLike:
              this.stateInCommentLike(_38c7d5d2fcfc);
              break;

             case _3ee9590bcdd1.InSpecialComment:
              this.stateInSpecialComment(_38c7d5d2fcfc);
              break;

             case _3ee9590bcdd1.BeforeAttributeName:
              this.stateBeforeAttributeName(_38c7d5d2fcfc);
              break;

             case _3ee9590bcdd1.InTagName:
              this.stateInTagName(_38c7d5d2fcfc);
              break;

             case _3ee9590bcdd1.InClosingTagName:
              this.stateInClosingTagName(_38c7d5d2fcfc);
              break;

             case _3ee9590bcdd1.BeforeTagName:
              this.stateBeforeTagName(_38c7d5d2fcfc);
              break;

             case _3ee9590bcdd1.AfterAttributeName:
              this.stateAfterAttributeName(_38c7d5d2fcfc);
              break;

             case _3ee9590bcdd1.InAttributeValueSq:
              this.stateInAttributeValueSingleQuotes(_38c7d5d2fcfc);
              break;

             case _3ee9590bcdd1.BeforeAttributeValue:
              this.stateBeforeAttributeValue(_38c7d5d2fcfc);
              break;

             case _3ee9590bcdd1.BeforeClosingTagName:
              this.stateBeforeClosingTagName(_38c7d5d2fcfc);
              break;

             case _3ee9590bcdd1.AfterClosingTagName:
              this.stateAfterClosingTagName(_38c7d5d2fcfc);
              break;

             case _3ee9590bcdd1.BeforeSpecialS:
              this.stateBeforeSpecialS(_38c7d5d2fcfc);
              break;

             case _3ee9590bcdd1.BeforeSpecialT:
              this.stateBeforeSpecialT(_38c7d5d2fcfc);
              break;

             case _3ee9590bcdd1.InAttributeValueNq:
              this.stateInAttributeValueNoQuotes(_38c7d5d2fcfc);
              break;

             case _3ee9590bcdd1.InSelfClosingTag:
              this.stateInSelfClosingTag(_38c7d5d2fcfc);
              break;

             case _3ee9590bcdd1.InDeclaration:
              this.stateInDeclaration(_38c7d5d2fcfc);
              break;

             case _3ee9590bcdd1.BeforeDeclaration:
              this.stateBeforeDeclaration(_38c7d5d2fcfc);
              break;

             case _3ee9590bcdd1.BeforeComment:
              this.stateBeforeComment(_38c7d5d2fcfc);
              break;

             case _3ee9590bcdd1.InProcessingInstruction:
              this.stateInProcessingInstruction(_38c7d5d2fcfc);
              break;

             case _3ee9590bcdd1.InEntity:
              this.stateInEntity();
            }
            this.index++;
          }
          this.cleanup();
        }
        finish() {
          this.state === _3ee9590bcdd1.InEntity && (this.entityDecoder.end(), this.state = this.baseState), 
          this.handleTrailingData(), this.cbs.onend();
        }
        handleTrailingData() {
          let _38c7d5d2fcfc = this.buffer.length + this.offset;
          this.sectionStart >= _38c7d5d2fcfc || (this.state === _3ee9590bcdd1.InCommentLike ? this.currentSequence === _c20fa90a80b7.CdataEnd ? this.cbs.oncdata(this.sectionStart, _38c7d5d2fcfc, 0) : this.cbs.oncomment(this.sectionStart, _38c7d5d2fcfc, 0) : this.state === _3ee9590bcdd1.InTagName || this.state === _3ee9590bcdd1.BeforeAttributeName || this.state === _3ee9590bcdd1.BeforeAttributeValue || this.state === _3ee9590bcdd1.AfterAttributeName || this.state === _3ee9590bcdd1.InAttributeName || this.state === _3ee9590bcdd1.InAttributeValueSq || this.state === _3ee9590bcdd1.InAttributeValueDq || this.state === _3ee9590bcdd1.InAttributeValueNq || this.state === _3ee9590bcdd1.InClosingTagName || this.cbs.ontext(this.sectionStart, _38c7d5d2fcfc));
        }
        emitCodePoint(_38c7d5d2fcfc, _b6f2bd98c862) {
          this.baseState !== _3ee9590bcdd1.Text && this.baseState !== _3ee9590bcdd1.InSpecialTag ? (this.sectionStart < this.entityStart && this.cbs.onattribdata(this.sectionStart, this.entityStart), 
          this.sectionStart = this.entityStart + _b6f2bd98c862, this.index = this.sectionStart - 1, 
          this.cbs.onattribentity(_38c7d5d2fcfc)) : (this.sectionStart < this.entityStart && this.cbs.ontext(this.sectionStart, this.entityStart), 
          this.sectionStart = this.entityStart + _b6f2bd98c862, this.index = this.sectionStart - 1, 
          this.cbs.ontextentity(_38c7d5d2fcfc, this.sectionStart));
        }
      }
    },
    3808: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.d(_b6f2bd98c862, {
        RJ: () => _180466bcc607,
        iX: () => _313eac335fae.i
      });
      var _313eac335fae = _1bd41f000df9(4645);
      _1bd41f000df9(8866), _1bd41f000df9(5645);
      var _180466bcc607 = _1bd41f000df9(2743);
      _1bd41f000df9(4993);
    },
    6570: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      let _313eac335fae, _180466bcc607, _7f05829ad9f4, _93a414b82620;
      _1bd41f000df9.d(_b6f2bd98c862, {
        P2: () => f
      });
      let o = (_38c7d5d2fcfc, _b6f2bd98c862) => _b6f2bd98c862.some(_b6f2bd98c862 => _38c7d5d2fcfc instanceof _b6f2bd98c862), _3ee9590bcdd1 = new WeakMap, _bf69fdf532e4 = new WeakMap, _ef3c27203dbf = new WeakMap, _c20fa90a80b7 = {
        get(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
          if (_38c7d5d2fcfc instanceof IDBTransaction) {
            if ("done" === _b6f2bd98c862) return _3ee9590bcdd1.get(_38c7d5d2fcfc);
            if ("store" === _b6f2bd98c862) return _1bd41f000df9.objectStoreNames[1] ? void 0 : _1bd41f000df9.objectStore(_1bd41f000df9.objectStoreNames[0]);
          }
          return h(_38c7d5d2fcfc[_b6f2bd98c862]);
        },
        set: (_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) => (_38c7d5d2fcfc[_b6f2bd98c862] = _1bd41f000df9, 
        !0),
        has: (_38c7d5d2fcfc, _b6f2bd98c862) => _38c7d5d2fcfc instanceof IDBTransaction && ("done" === _b6f2bd98c862 || "store" === _b6f2bd98c862) || _b6f2bd98c862 in _38c7d5d2fcfc
      };
      function h(_38c7d5d2fcfc) {
        if (_38c7d5d2fcfc instanceof IDBRequest) {
          let _b6f2bd98c862;
          return _b6f2bd98c862 = new Promise((_b6f2bd98c862, _1bd41f000df9) => {
            let n = () => {
              _38c7d5d2fcfc.removeEventListener("success", i), _38c7d5d2fcfc.removeEventListener("error", a);
            }, i = () => {
              _b6f2bd98c862(h(_38c7d5d2fcfc.result)), n();
            }, a = () => {
              _1bd41f000df9(_38c7d5d2fcfc.error), n();
            };
            _38c7d5d2fcfc.addEventListener("success", i), _38c7d5d2fcfc.addEventListener("error", a);
          }), _ef3c27203dbf.set(_b6f2bd98c862, _38c7d5d2fcfc), _b6f2bd98c862;
        }
        if (_bf69fdf532e4.has(_38c7d5d2fcfc)) return _bf69fdf532e4.get(_38c7d5d2fcfc);
        let _b6f2bd98c862 = function(_38c7d5d2fcfc) {
          if ("function" == typeof _38c7d5d2fcfc) return (_180466bcc607 || (_180466bcc607 = [ IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey ])).includes(_38c7d5d2fcfc) ? function(..._b6f2bd98c862) {
            return _38c7d5d2fcfc.apply(p(this), _b6f2bd98c862), h(this.request);
          } : function(..._b6f2bd98c862) {
            return h(_38c7d5d2fcfc.apply(p(this), _b6f2bd98c862));
          };
          return (_38c7d5d2fcfc instanceof IDBTransaction && function(_38c7d5d2fcfc) {
            if (_3ee9590bcdd1.has(_38c7d5d2fcfc)) return;
            let _b6f2bd98c862 = new Promise((_b6f2bd98c862, _1bd41f000df9) => {
              let n = () => {
                _38c7d5d2fcfc.removeEventListener("complete", i), _38c7d5d2fcfc.removeEventListener("error", a), 
                _38c7d5d2fcfc.removeEventListener("abort", a);
              }, i = () => {
                _b6f2bd98c862(), n();
              }, a = () => {
                _1bd41f000df9(_38c7d5d2fcfc.error || new DOMException("AbortError", "AbortError")), 
                n();
              };
              _38c7d5d2fcfc.addEventListener("complete", i), _38c7d5d2fcfc.addEventListener("error", a), 
              _38c7d5d2fcfc.addEventListener("abort", a);
            });
            _3ee9590bcdd1.set(_38c7d5d2fcfc, _b6f2bd98c862);
          }(_38c7d5d2fcfc), o(_38c7d5d2fcfc, _313eac335fae || (_313eac335fae = [ IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction ]))) ? new Proxy(_38c7d5d2fcfc, _c20fa90a80b7) : _38c7d5d2fcfc;
        }(_38c7d5d2fcfc);
        return _b6f2bd98c862 !== _38c7d5d2fcfc && (_bf69fdf532e4.set(_38c7d5d2fcfc, _b6f2bd98c862), 
        _ef3c27203dbf.set(_b6f2bd98c862, _38c7d5d2fcfc)), _b6f2bd98c862;
      }
      let p = _38c7d5d2fcfc => _ef3c27203dbf.get(_38c7d5d2fcfc);
      function f(_38c7d5d2fcfc, _b6f2bd98c862, {blocked: _1bd41f000df9, upgrade: _313eac335fae, blocking: _180466bcc607, terminated: _7f05829ad9f4} = {}) {
        let _93a414b82620 = indexedDB.open(_38c7d5d2fcfc, _b6f2bd98c862), _3ee9590bcdd1 = h(_93a414b82620);
        return _313eac335fae && _93a414b82620.addEventListener("upgradeneeded", _38c7d5d2fcfc => {
          _313eac335fae(h(_93a414b82620.result), _38c7d5d2fcfc.oldVersion, _38c7d5d2fcfc.newVersion, h(_93a414b82620.transaction), _38c7d5d2fcfc);
        }), _1bd41f000df9 && _93a414b82620.addEventListener("blocked", _38c7d5d2fcfc => _1bd41f000df9(_38c7d5d2fcfc.oldVersion, _38c7d5d2fcfc.newVersion, _38c7d5d2fcfc)), 
        _3ee9590bcdd1.then(_38c7d5d2fcfc => {
          _7f05829ad9f4 && _38c7d5d2fcfc.addEventListener("close", () => _7f05829ad9f4()), 
          _180466bcc607 && _38c7d5d2fcfc.addEventListener("versionchange", _38c7d5d2fcfc => _180466bcc607(_38c7d5d2fcfc.oldVersion, _38c7d5d2fcfc.newVersion, _38c7d5d2fcfc));
        }).catch(() => {}), _3ee9590bcdd1;
      }
      let _eb5e33ca1634 = [ "get", "getKey", "getAll", "getAllKeys", "count" ], _8aa5e5cf048b = [ "put", "add", "delete", "clear" ], _e25772762281 = new Map;
      function b(_38c7d5d2fcfc, _b6f2bd98c862) {
        if (!(_38c7d5d2fcfc instanceof IDBDatabase && !(_b6f2bd98c862 in _38c7d5d2fcfc) && "string" == typeof _b6f2bd98c862)) return;
        if (_e25772762281.get(_b6f2bd98c862)) return _e25772762281.get(_b6f2bd98c862);
        let _1bd41f000df9 = _b6f2bd98c862.replace(/FromIndex$/, ""), _313eac335fae = _b6f2bd98c862 !== _1bd41f000df9, _180466bcc607 = _8aa5e5cf048b.includes(_1bd41f000df9);
        if (!(_1bd41f000df9 in (_313eac335fae ? IDBIndex : IDBObjectStore).prototype) || !(_180466bcc607 || _eb5e33ca1634.includes(_1bd41f000df9))) return;
        let a = async function(_38c7d5d2fcfc, ..._b6f2bd98c862) {
          let _7f05829ad9f4 = this.transaction(_38c7d5d2fcfc, _180466bcc607 ? "readwrite" : "readonly"), _93a414b82620 = _7f05829ad9f4.store;
          return _313eac335fae && (_93a414b82620 = _93a414b82620.index(_b6f2bd98c862.shift())), 
          (await Promise.all([ _93a414b82620[_1bd41f000df9](..._b6f2bd98c862), _180466bcc607 && _7f05829ad9f4.done ]))[0];
        };
        return _e25772762281.set(_b6f2bd98c862, a), a;
      }
      _c20fa90a80b7 = {
        ..._7f05829ad9f4 = _c20fa90a80b7,
        get: (_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) => b(_38c7d5d2fcfc, _b6f2bd98c862) || _7f05829ad9f4.get(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9),
        has: (_38c7d5d2fcfc, _b6f2bd98c862) => !!b(_38c7d5d2fcfc, _b6f2bd98c862) || _7f05829ad9f4.has(_38c7d5d2fcfc, _b6f2bd98c862)
      };
      let _6b23ce5f34cb = [ "continue", "continuePrimaryKey", "advance" ], _5e9d93e0c4ea = {}, _c8669f180c95 = new WeakMap, _cc1fb7121592 = new WeakMap, _8d492394ab03 = {
        get(_38c7d5d2fcfc, _b6f2bd98c862) {
          if (!_6b23ce5f34cb.includes(_b6f2bd98c862)) return _38c7d5d2fcfc[_b6f2bd98c862];
          let _1bd41f000df9 = _5e9d93e0c4ea[_b6f2bd98c862];
          return _1bd41f000df9 || (_1bd41f000df9 = _5e9d93e0c4ea[_b6f2bd98c862] = function(..._38c7d5d2fcfc) {
            _c8669f180c95.set(this, _cc1fb7121592.get(this)[_b6f2bd98c862](..._38c7d5d2fcfc));
          }), _1bd41f000df9;
        }
      };
      async function* T(..._38c7d5d2fcfc) {
        let _b6f2bd98c862 = this;
        if (_b6f2bd98c862 instanceof IDBCursor || (_b6f2bd98c862 = await _b6f2bd98c862.openCursor(..._38c7d5d2fcfc)), 
        !_b6f2bd98c862) return;
        let _1bd41f000df9 = new Proxy(_b6f2bd98c862, _8d492394ab03);
        for (_cc1fb7121592.set(_1bd41f000df9, _b6f2bd98c862), _ef3c27203dbf.set(_1bd41f000df9, p(_b6f2bd98c862)); _b6f2bd98c862; ) yield _1bd41f000df9, 
        _b6f2bd98c862 = await (_c8669f180c95.get(_1bd41f000df9) || _b6f2bd98c862.continue()), 
        _c8669f180c95.delete(_1bd41f000df9);
      }
      function k(_38c7d5d2fcfc, _b6f2bd98c862) {
        return _b6f2bd98c862 === Symbol.asyncIterator && o(_38c7d5d2fcfc, [ IDBIndex, IDBObjectStore, IDBCursor ]) || "iterate" === _b6f2bd98c862 && o(_38c7d5d2fcfc, [ IDBIndex, IDBObjectStore ]);
      }
      _c20fa90a80b7 = {
        ..._93a414b82620 = _c20fa90a80b7,
        get: (_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) => k(_38c7d5d2fcfc, _b6f2bd98c862) ? T : _93a414b82620.get(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9),
        has: (_38c7d5d2fcfc, _b6f2bd98c862) => k(_38c7d5d2fcfc, _b6f2bd98c862) || _93a414b82620.has(_38c7d5d2fcfc, _b6f2bd98c862)
      };
    },
    1652: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      _1bd41f000df9.d(_b6f2bd98c862, {
        N: () => n
      });
      function n() {
        return "10000000000".replace(/[018]/g, _38c7d5d2fcfc => (_38c7d5d2fcfc ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> _38c7d5d2fcfc / 4).toString(16));
      }
    },
    3907: function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
      let _313eac335fae;
      _1bd41f000df9.d(_b6f2bd98c862, {
        LW: () => b,
        QR: () => x
      });
      var _180466bcc607 = _1bd41f000df9(1652);
      function a(_38c7d5d2fcfc, _b6f2bd98c862) {
        try {
          return _38c7d5d2fcfc.apply(this, _b6f2bd98c862);
        } catch (_38c7d5d2fcfc) {
          let _b6f2bd98c862, _1bd41f000df9 = (_b6f2bd98c862 = _313eac335fae.__externref_table_alloc(), 
          _313eac335fae.__wbindgen_export_2.set(_b6f2bd98c862, _38c7d5d2fcfc), _b6f2bd98c862);
          _313eac335fae.__wbindgen_exn_store(_1bd41f000df9);
        }
      }
      let _7f05829ad9f4 = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
      }) : {
        decode: () => {
          throw Error("TextDecoder not available");
        }
      };
      "undefined" != typeof TextDecoder && _7f05829ad9f4.decode();
      let _93a414b82620 = null;
      function l() {
        return (null === _93a414b82620 || 0 === _93a414b82620.byteLength) && (_93a414b82620 = new Uint8Array(_313eac335fae.memory.buffer)), 
        _93a414b82620;
      }
      function c(_38c7d5d2fcfc, _b6f2bd98c862) {
        return _38c7d5d2fcfc >>>= 0, _7f05829ad9f4.decode(l().subarray(_38c7d5d2fcfc, _38c7d5d2fcfc + _b6f2bd98c862));
      }
      let _3ee9590bcdd1 = 0, _bf69fdf532e4 = "undefined" != typeof TextEncoder ? new TextEncoder("utf-8") : {
        encode: () => {
          throw Error("TextEncoder not available");
        }
      }, _ef3c27203dbf = "function" == typeof _bf69fdf532e4.encodeInto ? function(_38c7d5d2fcfc, _b6f2bd98c862) {
        return _bf69fdf532e4.encodeInto(_38c7d5d2fcfc, _b6f2bd98c862);
      } : function(_38c7d5d2fcfc, _b6f2bd98c862) {
        let _1bd41f000df9 = _bf69fdf532e4.encode(_38c7d5d2fcfc);
        return _b6f2bd98c862.set(_1bd41f000df9), {
          read: _38c7d5d2fcfc.length,
          written: _1bd41f000df9.length
        };
      };
      function p(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
        if (void 0 === _1bd41f000df9) {
          let _1bd41f000df9 = _bf69fdf532e4.encode(_38c7d5d2fcfc), _313eac335fae = _b6f2bd98c862(_1bd41f000df9.length, 1) >>> 0;
          return l().subarray(_313eac335fae, _313eac335fae + _1bd41f000df9.length).set(_1bd41f000df9), 
          _3ee9590bcdd1 = _1bd41f000df9.length, _313eac335fae;
        }
        let _313eac335fae = _38c7d5d2fcfc.length, _180466bcc607 = _b6f2bd98c862(_313eac335fae, 1) >>> 0, _7f05829ad9f4 = l(), _93a414b82620 = 0;
        for (;_93a414b82620 < _313eac335fae; _93a414b82620++) {
          let _b6f2bd98c862 = _38c7d5d2fcfc.charCodeAt(_93a414b82620);
          if (_b6f2bd98c862 > 127) break;
          _7f05829ad9f4[_180466bcc607 + _93a414b82620] = _b6f2bd98c862;
        }
        if (_93a414b82620 !== _313eac335fae) {
          0 !== _93a414b82620 && (_38c7d5d2fcfc = _38c7d5d2fcfc.slice(_93a414b82620)), _180466bcc607 = _1bd41f000df9(_180466bcc607, _313eac335fae, _313eac335fae = _93a414b82620 + 3 * _38c7d5d2fcfc.length, 1) >>> 0;
          let _b6f2bd98c862 = _ef3c27203dbf(_38c7d5d2fcfc, l().subarray(_180466bcc607 + _93a414b82620, _180466bcc607 + _313eac335fae));
          _93a414b82620 += _b6f2bd98c862.written, _180466bcc607 = _1bd41f000df9(_180466bcc607, _313eac335fae, _93a414b82620, 1) >>> 0;
        }
        return _3ee9590bcdd1 = _93a414b82620, _180466bcc607;
      }
      let _c20fa90a80b7 = null;
      function g() {
        return (null === _c20fa90a80b7 || !0 === _c20fa90a80b7.buffer.detached || void 0 === _c20fa90a80b7.buffer.detached && _c20fa90a80b7.buffer !== _313eac335fae.memory.buffer) && (_c20fa90a80b7 = new DataView(_313eac335fae.memory.buffer)), 
        _c20fa90a80b7;
      }
      function m(_38c7d5d2fcfc) {
        let _b6f2bd98c862 = _313eac335fae.__wbindgen_export_2.get(_38c7d5d2fcfc);
        return _313eac335fae.__externref_table_dealloc(_38c7d5d2fcfc), _b6f2bd98c862;
      }
      let _eb5e33ca1634 = "undefined" == typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry(_38c7d5d2fcfc => _313eac335fae.__wbg_rewriter_free(_38c7d5d2fcfc >>> 0, 1));
      class b {
        __destroy_into_raw() {
          let _38c7d5d2fcfc = this.__wbg_ptr;
          return this.__wbg_ptr = 0, _eb5e33ca1634.unregister(this), _38c7d5d2fcfc;
        }
        free() {
          let _38c7d5d2fcfc = this.__destroy_into_raw();
          _313eac335fae.__wbg_rewriter_free(_38c7d5d2fcfc, 0);
        }
        rewrite_js(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9, _180466bcc607) {
          let _7f05829ad9f4 = p(_38c7d5d2fcfc, _313eac335fae.__wbindgen_malloc, _313eac335fae.__wbindgen_realloc), _93a414b82620 = _3ee9590bcdd1, _bf69fdf532e4 = p(_b6f2bd98c862, _313eac335fae.__wbindgen_malloc, _313eac335fae.__wbindgen_realloc), _ef3c27203dbf = _3ee9590bcdd1, _c20fa90a80b7 = p(_1bd41f000df9, _313eac335fae.__wbindgen_malloc, _313eac335fae.__wbindgen_realloc), _eb5e33ca1634 = _3ee9590bcdd1, _8aa5e5cf048b = _313eac335fae.rewriter_rewrite_js(this.__wbg_ptr, _7f05829ad9f4, _93a414b82620, _bf69fdf532e4, _ef3c27203dbf, _c20fa90a80b7, _eb5e33ca1634, _180466bcc607);
          if (_8aa5e5cf048b[2]) throw m(_8aa5e5cf048b[1]);
          return m(_8aa5e5cf048b[0]);
        }
        rewrite_js_bytes(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9, _180466bcc607) {
          let _7f05829ad9f4, _93a414b82620 = (_7f05829ad9f4 = (0, _313eac335fae.__wbindgen_malloc)(+_38c7d5d2fcfc.length, 1) >>> 0, 
          l().set(_38c7d5d2fcfc, _7f05829ad9f4 / 1), _3ee9590bcdd1 = _38c7d5d2fcfc.length, 
          _7f05829ad9f4), _bf69fdf532e4 = _3ee9590bcdd1, _ef3c27203dbf = p(_b6f2bd98c862, _313eac335fae.__wbindgen_malloc, _313eac335fae.__wbindgen_realloc), _c20fa90a80b7 = _3ee9590bcdd1, _eb5e33ca1634 = p(_1bd41f000df9, _313eac335fae.__wbindgen_malloc, _313eac335fae.__wbindgen_realloc), _8aa5e5cf048b = _3ee9590bcdd1, _e25772762281 = _313eac335fae.rewriter_rewrite_js_bytes(this.__wbg_ptr, _93a414b82620, _bf69fdf532e4, _ef3c27203dbf, _c20fa90a80b7, _eb5e33ca1634, _8aa5e5cf048b, _180466bcc607);
          if (_e25772762281[2]) throw m(_e25772762281[1]);
          return m(_e25772762281[0]);
        }
        constructor(_38c7d5d2fcfc) {
          const _b6f2bd98c862 = _313eac335fae.rewriter_new(_38c7d5d2fcfc);
          if (_b6f2bd98c862[2]) throw m(_b6f2bd98c862[1]);
          return this.__wbg_ptr = _b6f2bd98c862[0] >>> 0, _eb5e33ca1634.register(this, this.__wbg_ptr, this), 
          this;
        }
      }
      async function w(_38c7d5d2fcfc, _b6f2bd98c862) {
        if ("function" == typeof Response && _38c7d5d2fcfc instanceof Response) {
          if ("function" == typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(_38c7d5d2fcfc, _b6f2bd98c862);
          } catch (_b6f2bd98c862) {
            if ("application/wasm" != _38c7d5d2fcfc.headers.get("Content-Type")) console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", _b6f2bd98c862); else throw _b6f2bd98c862;
          }
          let _1bd41f000df9 = await _38c7d5d2fcfc.arrayBuffer();
          return await WebAssembly.instantiate(_1bd41f000df9, _b6f2bd98c862);
        }
        {
          let _1bd41f000df9 = await WebAssembly.instantiate(_38c7d5d2fcfc, _b6f2bd98c862);
          return _1bd41f000df9 instanceof WebAssembly.Instance ? {
            instance: _1bd41f000df9,
            module: _38c7d5d2fcfc
          } : _1bd41f000df9;
        }
      }
      function S() {
        let _38c7d5d2fcfc = {};
        return _38c7d5d2fcfc.wbg = {}, _38c7d5d2fcfc.wbg.__wbg_buffer_609cc3eee51ed158 = function(_38c7d5d2fcfc) {
          return _38c7d5d2fcfc.buffer;
        }, _38c7d5d2fcfc.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
          return a(function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
            return _38c7d5d2fcfc.call(_b6f2bd98c862, _1bd41f000df9);
          }, arguments);
        }, _38c7d5d2fcfc.wbg.__wbg_call_833bed5770ea2041 = function() {
          return a(function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9, _313eac335fae) {
            return _38c7d5d2fcfc.call(_b6f2bd98c862, _1bd41f000df9, _313eac335fae);
          }, arguments);
        }, _38c7d5d2fcfc.wbg.__wbg_get_67b2ba62fc30de12 = function() {
          return a(function(_38c7d5d2fcfc, _b6f2bd98c862) {
            return Reflect.get(_38c7d5d2fcfc, _b6f2bd98c862);
          }, arguments);
        }, _38c7d5d2fcfc.wbg.__wbg_new_405e22f390576ce2 = function() {
          return {};
        }, _38c7d5d2fcfc.wbg.__wbg_new_78feb108b6472713 = function() {
          return [];
        }, _38c7d5d2fcfc.wbg.__wbg_new_9ffbe0a71eff35e3 = function() {
          return a(function(_38c7d5d2fcfc, _b6f2bd98c862) {
            return new URL(c(_38c7d5d2fcfc, _b6f2bd98c862));
          }, arguments);
        }, _38c7d5d2fcfc.wbg.__wbg_new_a12002a7f91c75be = function(_38c7d5d2fcfc) {
          return new Uint8Array(_38c7d5d2fcfc);
        }, _38c7d5d2fcfc.wbg.__wbg_newwithbase_161c299e7a34e2eb = function() {
          return a(function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9, _313eac335fae) {
            return new URL(c(_38c7d5d2fcfc, _b6f2bd98c862), c(_1bd41f000df9, _313eac335fae));
          }, arguments);
        }, _38c7d5d2fcfc.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
          return new Uint8Array(_38c7d5d2fcfc, _b6f2bd98c862 >>> 0, _1bd41f000df9 >>> 0);
        }, _38c7d5d2fcfc.wbg.__wbg_scramtag_3a255d78b157986d = function(_38c7d5d2fcfc) {
          let _b6f2bd98c862 = p((0, _180466bcc607.N)(), _313eac335fae.__wbindgen_malloc, _313eac335fae.__wbindgen_realloc), _1bd41f000df9 = _3ee9590bcdd1;
          g().setInt32(_38c7d5d2fcfc + 4, _1bd41f000df9, !0), g().setInt32(_38c7d5d2fcfc + 0, _b6f2bd98c862, !0);
        }, _38c7d5d2fcfc.wbg.__wbg_set_bb8cecf6a62b9f46 = function() {
          return a(function(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9) {
            return Reflect.set(_38c7d5d2fcfc, _b6f2bd98c862, _1bd41f000df9);
          }, arguments);
        }, _38c7d5d2fcfc.wbg.__wbg_toString_5285597960676b7b = function(_38c7d5d2fcfc) {
          return _38c7d5d2fcfc.toString();
        }, _38c7d5d2fcfc.wbg.__wbg_toString_c813bbd34d063839 = function(_38c7d5d2fcfc) {
          return _38c7d5d2fcfc.toString();
        }, _38c7d5d2fcfc.wbg.__wbindgen_boolean_get = function(_38c7d5d2fcfc) {
          return "boolean" == typeof _38c7d5d2fcfc ? +!!_38c7d5d2fcfc : 2;
        }, _38c7d5d2fcfc.wbg.__wbindgen_error_new = function(_38c7d5d2fcfc, _b6f2bd98c862) {
          return Error(c(_38c7d5d2fcfc, _b6f2bd98c862));
        }, _38c7d5d2fcfc.wbg.__wbindgen_init_externref_table = function() {
          let _38c7d5d2fcfc = _313eac335fae.__wbindgen_export_2, _b6f2bd98c862 = _38c7d5d2fcfc.grow(4);
          _38c7d5d2fcfc.set(0, void 0), _38c7d5d2fcfc.set(_b6f2bd98c862 + 0, void 0), _38c7d5d2fcfc.set(_b6f2bd98c862 + 1, null), 
          _38c7d5d2fcfc.set(_b6f2bd98c862 + 2, !0), _38c7d5d2fcfc.set(_b6f2bd98c862 + 3, !1);
        }, _38c7d5d2fcfc.wbg.__wbindgen_is_function = function(_38c7d5d2fcfc) {
          return "function" == typeof _38c7d5d2fcfc;
        }, _38c7d5d2fcfc.wbg.__wbindgen_memory = function() {
          return _313eac335fae.memory;
        }, _38c7d5d2fcfc.wbg.__wbindgen_string_get = function(_38c7d5d2fcfc, _b6f2bd98c862) {
          let _1bd41f000df9 = "string" == typeof _b6f2bd98c862 ? _b6f2bd98c862 : void 0;
          var _180466bcc607 = null == _1bd41f000df9 ? 0 : p(_1bd41f000df9, _313eac335fae.__wbindgen_malloc, _313eac335fae.__wbindgen_realloc), _7f05829ad9f4 = _3ee9590bcdd1;
          g().setInt32(_38c7d5d2fcfc + 4, _7f05829ad9f4, !0), g().setInt32(_38c7d5d2fcfc + 0, _180466bcc607, !0);
        }, _38c7d5d2fcfc.wbg.__wbindgen_string_new = function(_38c7d5d2fcfc, _b6f2bd98c862) {
          return c(_38c7d5d2fcfc, _b6f2bd98c862);
        }, _38c7d5d2fcfc.wbg.__wbindgen_throw = function(_38c7d5d2fcfc, _b6f2bd98c862) {
          throw Error(c(_38c7d5d2fcfc, _b6f2bd98c862));
        }, _38c7d5d2fcfc;
      }
      function v(_38c7d5d2fcfc, _b6f2bd98c862) {
        return _313eac335fae = _38c7d5d2fcfc.exports, E.__wbindgen_wasm_module = _b6f2bd98c862, 
        _c20fa90a80b7 = null, _93a414b82620 = null, _313eac335fae.__wbindgen_start(), _313eac335fae;
      }
      function x(_38c7d5d2fcfc) {
        if (void 0 !== _313eac335fae) return _313eac335fae;
        void 0 !== _38c7d5d2fcfc && (Object.getPrototypeOf(_38c7d5d2fcfc) === Object.prototype ? ({module: _38c7d5d2fcfc} = _38c7d5d2fcfc) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
        let _b6f2bd98c862 = S();
        return _38c7d5d2fcfc instanceof WebAssembly.Module || (_38c7d5d2fcfc = new WebAssembly.Module(_38c7d5d2fcfc)), 
        v(new WebAssembly.Instance(_38c7d5d2fcfc, _b6f2bd98c862), _38c7d5d2fcfc);
      }
      async function E(_38c7d5d2fcfc) {
        if (void 0 !== _313eac335fae) return _313eac335fae;
        void 0 !== _38c7d5d2fcfc && (Object.getPrototypeOf(_38c7d5d2fcfc) === Object.prototype ? ({module_or_path: _38c7d5d2fcfc} = _38c7d5d2fcfc) : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), 
        void 0 === _38c7d5d2fcfc && (_38c7d5d2fcfc = new URL("wasm_bg.wasm", ""));
        let _b6f2bd98c862 = S();
        ("string" == typeof _38c7d5d2fcfc || "function" == typeof Request && _38c7d5d2fcfc instanceof Request || "function" == typeof URL && _38c7d5d2fcfc instanceof URL) && (_38c7d5d2fcfc = fetch(_38c7d5d2fcfc));
        let {instance: _1bd41f000df9, module: _180466bcc607} = await w(await _38c7d5d2fcfc, _b6f2bd98c862);
        return v(_1bd41f000df9, _180466bcc607);
      }
    }
  }, _b6f2bd98c862 = {};
  function r(_1bd41f000df9) {
    var _313eac335fae = _b6f2bd98c862[_1bd41f000df9];
    if (void 0 !== _313eac335fae) return _313eac335fae.exports;
    var _180466bcc607 = _b6f2bd98c862[_1bd41f000df9] = {
      exports: {}
    };
    return _38c7d5d2fcfc[_1bd41f000df9](_180466bcc607, _180466bcc607.exports, r), _180466bcc607.exports;
  }
  r.n = _38c7d5d2fcfc => {
    var _b6f2bd98c862 = _38c7d5d2fcfc && _38c7d5d2fcfc.__esModule ? () => _38c7d5d2fcfc.default : () => _38c7d5d2fcfc;
    return r.d(_b6f2bd98c862, {
      a: _b6f2bd98c862
    }), _b6f2bd98c862;
  }, r.d = (_38c7d5d2fcfc, _b6f2bd98c862) => {
    for (var _1bd41f000df9 in _b6f2bd98c862) r.o(_b6f2bd98c862, _1bd41f000df9) && !r.o(_38c7d5d2fcfc, _1bd41f000df9) && Object.defineProperty(_38c7d5d2fcfc, _1bd41f000df9, {
      enumerable: !0,
      get: _b6f2bd98c862[_1bd41f000df9]
    });
  }, r.o = (_38c7d5d2fcfc, _b6f2bd98c862) => Object.prototype.hasOwnProperty.call(_38c7d5d2fcfc, _b6f2bd98c862), 
  r.r = _38c7d5d2fcfc => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(_38c7d5d2fcfc, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(_38c7d5d2fcfc, "__esModule", {
      value: !0
    });
  }, globalThis.$studyjetRequire = function(_38c7d5d2fcfc) {
    return r(409)(_38c7d5d2fcfc);
  }, globalThis.$studyjetLoadController = function() {
    return r(9052);
  }, globalThis.$studyjetLoadClient = function() {
    return r(1323);
  }, globalThis.$studyjetLoadWorker = function() {
    return r(7510);
  }, globalThis.$studyjetVersion = {
    build: "57ba89e",
    version: "1.1.0"
  }, "document" in globalThis && document?.currentScript && document.currentScript.remove();
})();
