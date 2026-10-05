(() => {
  var _e408115c538a = {
    4322: function(_e408115c538a) {
      var _85308e43d297 = {
        decodeValues: !0,
        map: !1,
        silent: !1
      };
      function r(_e408115c538a) {
        return "string" == typeof _e408115c538a && !!_e408115c538a.trim();
      }
      function n(_e408115c538a, _0948873bd781) {
        var _6c53fc11c1e7, _06df19f8be6e, _fbbba1a672e2, _1087e8da3d1c, _ce231c24b42d = _e408115c538a.split(";").filter(r), _5cb021885ef6 = (_6c53fc11c1e7 = _ce231c24b42d.shift(), 
        _06df19f8be6e = "", _fbbba1a672e2 = "", (_1087e8da3d1c = _6c53fc11c1e7.split("=")).length > 1 ? (_06df19f8be6e = _1087e8da3d1c.shift(), 
        _fbbba1a672e2 = _1087e8da3d1c.join("=")) : _fbbba1a672e2 = _6c53fc11c1e7, {
          name: _06df19f8be6e,
          value: _fbbba1a672e2
        }), _2b09e1ca183a = _5cb021885ef6.name, _f59cf6266889 = _5cb021885ef6.value;
        _0948873bd781 = _0948873bd781 ? Object.assign({}, _85308e43d297, _0948873bd781) : _85308e43d297;
        try {
          _f59cf6266889 = _0948873bd781.decodeValues ? decodeURIComponent(_f59cf6266889) : _f59cf6266889;
        } catch (_e408115c538a) {
          console.error("set-cookie-parser encountered an error while decoding a cookie with value '" + _f59cf6266889 + "'. Set options.decodeValues to false to disable this feature.", _e408115c538a);
        }
        var _1e156e012532 = {
          name: _2b09e1ca183a,
          value: _f59cf6266889
        };
        return _ce231c24b42d.forEach(function(_e408115c538a) {
          var _85308e43d297 = _e408115c538a.split("="), _0948873bd781 = _85308e43d297.shift().trimLeft().toLowerCase(), _6c53fc11c1e7 = _85308e43d297.join("=");
          "expires" === _0948873bd781 ? _1e156e012532.expires = new Date(_6c53fc11c1e7) : "max-age" === _0948873bd781 ? _1e156e012532.maxAge = parseInt(_6c53fc11c1e7, 10) : "secure" === _0948873bd781 ? _1e156e012532.secure = !0 : "httponly" === _0948873bd781 ? _1e156e012532.httpOnly = !0 : "samesite" === _0948873bd781 ? _1e156e012532.sameSite = _6c53fc11c1e7 : "partitioned" === _0948873bd781 ? _1e156e012532.partitioned = !0 : _1e156e012532[_0948873bd781] = _6c53fc11c1e7;
        }), _1e156e012532;
      }
      function i(_e408115c538a, _0948873bd781) {
        if (_0948873bd781 = _0948873bd781 ? Object.assign({}, _85308e43d297, _0948873bd781) : _85308e43d297, 
        !_e408115c538a) if (!_0948873bd781.map) return []; else return {};
        if (_e408115c538a.headers) if ("function" == typeof _e408115c538a.headers.getSetCookie) _e408115c538a = _e408115c538a.headers.getSetCookie(); else if (_e408115c538a.headers["set-cookie"]) _e408115c538a = _e408115c538a.headers["set-cookie"]; else {
          var _6c53fc11c1e7 = _e408115c538a.headers[Object.keys(_e408115c538a.headers).find(function(_e408115c538a) {
            return "set-cookie" === _e408115c538a.toLowerCase();
          })];
          _6c53fc11c1e7 || !_e408115c538a.headers.cookie || _0948873bd781.silent || console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."), 
          _e408115c538a = _6c53fc11c1e7;
        }
        return (Array.isArray(_e408115c538a) || (_e408115c538a = [ _e408115c538a ]), _0948873bd781.map) ? _e408115c538a.filter(r).reduce(function(_e408115c538a, _85308e43d297) {
          var _6c53fc11c1e7 = n(_85308e43d297, _0948873bd781);
          return _e408115c538a[_6c53fc11c1e7.name] = _6c53fc11c1e7, _e408115c538a;
        }, {}) : _e408115c538a.filter(r).map(function(_e408115c538a) {
          return n(_e408115c538a, _0948873bd781);
        });
      }
      _e408115c538a.exports = i, _e408115c538a.exports.parse = i, _e408115c538a.exports.parseString = n, 
      _e408115c538a.exports.splitCookiesString = function(_e408115c538a) {
        if (Array.isArray(_e408115c538a)) return _e408115c538a;
        if ("string" != typeof _e408115c538a) return [];
        var _85308e43d297, _0948873bd781, _6c53fc11c1e7, _06df19f8be6e, _fbbba1a672e2, _1087e8da3d1c = [], _ce231c24b42d = 0;
        function l() {
          for (;_ce231c24b42d < _e408115c538a.length && /\s/.test(_e408115c538a.charAt(_ce231c24b42d)); ) _ce231c24b42d += 1;
          return _ce231c24b42d < _e408115c538a.length;
        }
        for (;_ce231c24b42d < _e408115c538a.length; ) {
          for (_85308e43d297 = _ce231c24b42d, _fbbba1a672e2 = !1; l(); ) if ("," === (_0948873bd781 = _e408115c538a.charAt(_ce231c24b42d))) {
            for (_6c53fc11c1e7 = _ce231c24b42d, _ce231c24b42d += 1, l(), _06df19f8be6e = _ce231c24b42d; _ce231c24b42d < _e408115c538a.length && "=" !== (_0948873bd781 = _e408115c538a.charAt(_ce231c24b42d)) && ";" !== _0948873bd781 && "," !== _0948873bd781; ) _ce231c24b42d += 1;
            _ce231c24b42d < _e408115c538a.length && "=" === _e408115c538a.charAt(_ce231c24b42d) ? (_fbbba1a672e2 = !0, 
            _ce231c24b42d = _06df19f8be6e, _1087e8da3d1c.push(_e408115c538a.substring(_85308e43d297, _6c53fc11c1e7)), 
            _85308e43d297 = _ce231c24b42d) : _ce231c24b42d = _6c53fc11c1e7 + 1;
          } else _ce231c24b42d += 1;
          (!_fbbba1a672e2 || _ce231c24b42d >= _e408115c538a.length) && _1087e8da3d1c.push(_e408115c538a.substring(_85308e43d297, _e408115c538a.length));
        }
        return _1087e8da3d1c;
      };
    },
    7302: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      var _6c53fc11c1e7 = {
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
      function i(_e408115c538a) {
        return _0948873bd781(a(_e408115c538a));
      }
      function a(_e408115c538a) {
        if (!_0948873bd781.o(_6c53fc11c1e7, _e408115c538a)) {
          var _85308e43d297 = Error("Cannot find module '" + _e408115c538a + "'");
          throw _85308e43d297.code = "MODULE_NOT_FOUND", _85308e43d297;
        }
        return _6c53fc11c1e7[_e408115c538a];
      }
      i.keys = function() {
        return Object.keys(_6c53fc11c1e7);
      }, i.resolve = a, _e408115c538a.exports = i, i.id = 7302;
    },
    409: function(_e408115c538a) {
      function t(_e408115c538a) {
        var _85308e43d297 = Error("Cannot find module '" + _e408115c538a + "'");
        throw _85308e43d297.code = "MODULE_NOT_FOUND", _85308e43d297;
      }
      t.keys = () => [], t.resolve = t, t.id = 409, _e408115c538a.exports = t;
    },
    336: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        StudyJetClient: () => g
      });
      var _6c53fc11c1e7 = _0948873bd781(2794), _06df19f8be6e = _0948873bd781(94), _fbbba1a672e2 = _0948873bd781(3696), _1087e8da3d1c = _0948873bd781(581), _ce231c24b42d = _0948873bd781(1862), _5cb021885ef6 = _0948873bd781(1472), _2b09e1ca183a = _0948873bd781(37), _f59cf6266889 = _0948873bd781(3831), _1e156e012532 = _0948873bd781(1323), _39d3eae51e3c = _0948873bd781(1229), _687b012f5f4d = _0948873bd781(4110), _6c881511c692 = _0948873bd781(8665).A;
      class g {
        global;
        locationProxy;
        serviceWorker;
        bare;
        natives;
        descriptors;
        wrapfn;
        cookieStore=new _f59cf6266889.k;
        eventcallbacks=new Map;
        meta;
        box;
        constructor(_e408115c538a) {
          if (this.global = _e408115c538a, _6c53fc11c1e7.pX in _e408115c538a) throw console.error("attempted to initialize a studyjet client, but one is already loaded - this is very bad"), 
          Error();
          if (_1e156e012532.iswindow) {
            try {
              _6c53fc11c1e7.pX in _e408115c538a.parent && (this.box = _e408115c538a.parent[_6c53fc11c1e7.pX].box);
            } catch {}
            try {
              _6c53fc11c1e7.pX in _e408115c538a.top && (this.box = _e408115c538a.top[_6c53fc11c1e7.pX].box);
            } catch {}
            try {
              _e408115c538a.opener && _6c53fc11c1e7.pX in _e408115c538a.opener && (this.box = _e408115c538a.opener[_6c53fc11c1e7.pX].box);
            } catch {}
            this.box || (_6c881511c692.warn("Creating SingletonBox"), this.box = new _39d3eae51e3c.SingletonBox(this));
          } else this.box = new _39d3eae51e3c.SingletonBox(this);
          this.box.registerClient(this, _e408115c538a), _1e156e012532.iswindow ? this.bare = new _687b012f5f4d.Ay : this.bare = new _687b012f5f4d.Ay(new Promise(_e408115c538a => {
            addEventListener("message", ({data: _85308e43d297}) => {
              "object" == typeof _85308e43d297 && "$studyjet$type" in _85308e43d297 && "baremuxinit" === _85308e43d297.$studyjet$type && _e408115c538a(_85308e43d297.port);
            });
          })), this.serviceWorker = this.global.navigator.serviceWorker, _1e156e012532.iswindow && (_e408115c538a.document[_6c53fc11c1e7.pX] = this), 
          this.wrapfn = (0, _1087e8da3d1c.createWrapFn)(this, _e408115c538a), this.natives = {
            store: new Proxy({}, {
              get: (_e408115c538a, _85308e43d297) => {
                if (_85308e43d297 in _e408115c538a) return _e408115c538a[_85308e43d297];
                let _0948873bd781 = _85308e43d297.split("."), _6c53fc11c1e7 = _0948873bd781.pop(), _06df19f8be6e = _0948873bd781.reduce((_e408115c538a, _85308e43d297) => _e408115c538a?.[_85308e43d297], this.global);
                if (!_06df19f8be6e) return;
                let _fbbba1a672e2 = Reflect.get(_06df19f8be6e, _6c53fc11c1e7);
                return _e408115c538a[_85308e43d297] = _fbbba1a672e2, _e408115c538a[_85308e43d297];
              }
            }),
            construct(_e408115c538a, ..._85308e43d297) {
              let _0948873bd781 = this.store[_e408115c538a];
              return _0948873bd781 ? new _0948873bd781(..._85308e43d297) : null;
            },
            call(_e408115c538a, _85308e43d297, ..._0948873bd781) {
              let _6c53fc11c1e7 = this.store[_e408115c538a];
              return _6c53fc11c1e7 ? _6c53fc11c1e7.call(_85308e43d297, ..._0948873bd781) : null;
            }
          }, this.descriptors = {
            store: new Proxy({}, {
              get: (_e408115c538a, _0948873bd781) => {
                if (_0948873bd781 in _e408115c538a) return _e408115c538a[_0948873bd781];
                let _6c53fc11c1e7 = _0948873bd781.split("."), _06df19f8be6e = _6c53fc11c1e7.pop(), _fbbba1a672e2 = _6c53fc11c1e7.reduce((_e408115c538a, _85308e43d297) => _e408115c538a?.[_85308e43d297], this.global);
                if (!_fbbba1a672e2) return;
                let _1087e8da3d1c = _85308e43d297.natives.call("Object.getOwnPropertyDescriptor", null, _fbbba1a672e2, _06df19f8be6e);
                return _e408115c538a[_0948873bd781] = _1087e8da3d1c, _e408115c538a[_0948873bd781];
              }
            }),
            get(_e408115c538a, _85308e43d297) {
              let _0948873bd781 = this.store[_e408115c538a];
              return _0948873bd781 ? _0948873bd781.get.call(_85308e43d297) : null;
            },
            set(_e408115c538a, _85308e43d297, _0948873bd781) {
              let _6c53fc11c1e7 = this.store[_e408115c538a];
              if (!_6c53fc11c1e7) return null;
              _6c53fc11c1e7.set.call(_85308e43d297, _0948873bd781);
            }
          };
          const _85308e43d297 = this;
          this.meta = {
            get origin() {
              return _85308e43d297.url;
            },
            get base() {
              if (_1e156e012532.iswindow) {
                const _e408115c538a = _85308e43d297.natives.call("Document.prototype.querySelector", _85308e43d297.global.document, "base");
                if (_e408115c538a) {
                  let _0948873bd781 = _e408115c538a.getAttribute("href");
                  if (!_0948873bd781) return _85308e43d297.url;
                  const _6c53fc11c1e7 = _0948873bd781.indexOf("#");
                  if (!(_0948873bd781 = _0948873bd781.substring(0, -1 === _6c53fc11c1e7 ? void 0 : _6c53fc11c1e7))) return _85308e43d297.url;
                  return new URL(_0948873bd781, _85308e43d297.url.origin);
                }
              }
              return _85308e43d297.url;
            },
            get topFrameName() {
              if (!_1e156e012532.iswindow) throw Error("topFrameName was called from a worker?");
              let _e408115c538a = _85308e43d297.global;
              if (_e408115c538a.parent.window == _e408115c538a.window) return null;
              for (;_e408115c538a.parent.window !== _e408115c538a.window && _e408115c538a.parent.window[_6c53fc11c1e7.pX]; ) _e408115c538a = _e408115c538a.parent.window;
              const _0948873bd781 = _e408115c538a[_6c53fc11c1e7.pX].descriptors.get("window.frameElement", _e408115c538a);
              if (!_0948873bd781) return null;
              if (!_0948873bd781.name) return console.error("YOU NEED TO USE `new StudyJetFrame()`! DIRECT IFRAMES WILL NOT WORK"), 
              null;
              return _0948873bd781.name;
            },
            get parentFrameName() {
              if (!_1e156e012532.iswindow) throw Error("parentFrameName was called from a worker?");
              if (_85308e43d297.global.parent.window == _85308e43d297.global.window) return null;
              let _e408115c538a = _85308e43d297.global.parent.window;
              if (_e408115c538a[_6c53fc11c1e7.pX]) {
                const _85308e43d297 = _e408115c538a[_6c53fc11c1e7.pX].descriptors.get("window.frameElement", _e408115c538a);
                if (!_85308e43d297) return null;
                if (!_85308e43d297.name) return console.error("YOU NEED TO USE `new StudyJetFrame()`! DIRECT IFRAMES WILL NOT WORK"), 
                null;
                return _85308e43d297.name;
              }
              {
                const _e408115c538a = _85308e43d297.descriptors.get("window.frameElement", _85308e43d297.global);
                if (!_e408115c538a.name) return console.error("YOU NEED TO USE `new StudyJetFrame()`! DIRECT IFRAMES WILL NOT WORK"), 
                null;
                return _e408115c538a.name;
              }
            }
          }, this.locationProxy = (0, _fbbba1a672e2.createLocationProxy)(this, _e408115c538a), 
          _e408115c538a[_6c53fc11c1e7.pX] = this;
        }
        get frame() {
          if (!_1e156e012532.iswindow) return null;
          let _e408115c538a = this.descriptors.get("window.frameElement", this.global);
          if (!_e408115c538a) return null;
          let _85308e43d297 = _e408115c538a[_6c53fc11c1e7.zr];
          if (!_85308e43d297) {
            let _e408115c538a = this.global.window;
            for (;_e408115c538a.parent !== _e408115c538a; ) {
              let _85308e43d297 = _e408115c538a[_6c53fc11c1e7.pX].descriptors.get("window.frameElement", _e408115c538a);
              if (!_85308e43d297) return null;
              if (_85308e43d297 && _85308e43d297[_6c53fc11c1e7.zr]) return _85308e43d297[_6c53fc11c1e7.zr];
              _e408115c538a = _e408115c538a.parent.window;
            }
          }
          return _85308e43d297;
        }
        get isSubframe() {
          if (!_1e156e012532.iswindow) return !1;
          let _e408115c538a = this.descriptors.get("window.frameElement", this.global);
          return !!_e408115c538a && !_e408115c538a[_6c53fc11c1e7.zr];
        }
        loadcookies(_e408115c538a) {
          this.cookieStore.load(_e408115c538a);
        }
        hook() {
          let _e408115c538a = _0948873bd781(7302), _85308e43d297 = [];
          for (let _0948873bd781 of _e408115c538a.keys()) {
            let _6c53fc11c1e7 = _e408115c538a(_0948873bd781);
            _0948873bd781.endsWith(".ts") && (_0948873bd781.startsWith("./dom/") && "window" in this.global || _0948873bd781.startsWith("./worker/") && "WorkerGlobalScope" in this.global || _0948873bd781.startsWith("./shared/")) && _85308e43d297.push(_6c53fc11c1e7);
          }
          for (let _e408115c538a of (_85308e43d297.sort((_e408115c538a, _85308e43d297) => (_e408115c538a.order || 0) - (_85308e43d297.order || 0)), 
          _85308e43d297)) !_e408115c538a.enabled || _e408115c538a.enabled(this) ? _e408115c538a.default(this, this.global) : _e408115c538a.disabled && _e408115c538a.disabled(this, this.global);
        }
        get url() {
          return new URL((0, _5cb021885ef6.v2)(this.global.location.href));
        }
        set url(_e408115c538a) {
          _e408115c538a instanceof URL && (_e408115c538a = _e408115c538a.toString());
          let _85308e43d297 = new _ce231c24b42d.NavigateEvent(_e408115c538a);
          this.frame && this.frame.dispatchEvent(_85308e43d297), _85308e43d297.defaultPrevented || (this.global.location.href = (0, 
          _5cb021885ef6.Oy)(_85308e43d297.url, this.meta));
        }
        Proxy(_e408115c538a, _85308e43d297) {
          if (Array.isArray(_e408115c538a)) {
            for (let _0948873bd781 of _e408115c538a) this.Proxy(_0948873bd781, _85308e43d297);
            return;
          }
          let _0948873bd781 = _e408115c538a.split("."), _6c53fc11c1e7 = _0948873bd781.pop(), _06df19f8be6e = _0948873bd781.reduce((_e408115c538a, _85308e43d297) => _e408115c538a?.[_85308e43d297], this.global);
          if (_06df19f8be6e) {
            if (!(_e408115c538a in this.natives.store)) {
              let _85308e43d297 = Reflect.get(_06df19f8be6e, _6c53fc11c1e7);
              this.natives.store[_e408115c538a] = _85308e43d297;
            }
            this.RawProxy(_06df19f8be6e, _6c53fc11c1e7, _85308e43d297);
          }
        }
        RawProxy(_e408115c538a, _85308e43d297, _0948873bd781) {
          if (!_e408115c538a || !_85308e43d297 || !Reflect.has(_e408115c538a, _85308e43d297)) return;
          let _6c53fc11c1e7 = Reflect.get(_e408115c538a, _85308e43d297);
          delete _e408115c538a[_85308e43d297];
          let _fbbba1a672e2 = {};
          _0948873bd781.construct && (_fbbba1a672e2.construct = function(_e408115c538a, _85308e43d297, _6c53fc11c1e7) {
            let _06df19f8be6e, _fbbba1a672e2 = !1, _1087e8da3d1c = {
              fn: _e408115c538a,
              this: null,
              args: _85308e43d297,
              newTarget: _6c53fc11c1e7,
              return: _e408115c538a => {
                _fbbba1a672e2 = !0, _06df19f8be6e = _e408115c538a;
              },
              call: () => (_fbbba1a672e2 = !0, _06df19f8be6e = Reflect.construct(_1087e8da3d1c.fn, _1087e8da3d1c.args, _1087e8da3d1c.newTarget))
            };
            return (_0948873bd781.construct(_1087e8da3d1c), _fbbba1a672e2) ? _06df19f8be6e : Reflect.construct(_1087e8da3d1c.fn, _1087e8da3d1c.args, _1087e8da3d1c.newTarget);
          }), _0948873bd781.apply && (_fbbba1a672e2.apply = (_e408115c538a, _85308e43d297, _6c53fc11c1e7) => {
            let _06df19f8be6e, _fbbba1a672e2 = !1, _1087e8da3d1c = {
              fn: _e408115c538a,
              this: _85308e43d297,
              args: _6c53fc11c1e7,
              newTarget: null,
              return: _e408115c538a => {
                _fbbba1a672e2 = !0, _06df19f8be6e = _e408115c538a;
              },
              call: () => (_fbbba1a672e2 = !0, _06df19f8be6e = Reflect.apply(_1087e8da3d1c.fn, _1087e8da3d1c.this, _1087e8da3d1c.args))
            }, _ce231c24b42d = Error.prepareStackTrace;
            Error.prepareStackTrace = function(_e408115c538a, _85308e43d297) {
              if (_85308e43d297[0].getFileName() && !_85308e43d297[0].getFileName().startsWith(location.origin + _2b09e1ca183a.$W.prefix)) return {
                stack: _e408115c538a.stack
              };
            };
            try {
              _0948873bd781.apply(_1087e8da3d1c);
            } catch (_e408115c538a) {
              if (_e408115c538a instanceof Error) if (_e408115c538a.stack instanceof Object) {
                if (_e408115c538a.stack = _e408115c538a.stack.stack, console.error("ERROR FROM STUDYJET INTERNALS", _e408115c538a), 
                !(0, _2b09e1ca183a.U5)("allowFailedIntercepts", this.url)) throw _e408115c538a;
              } else throw _e408115c538a; else throw _e408115c538a;
            }
            return (Error.prepareStackTrace = _ce231c24b42d, _fbbba1a672e2) ? _06df19f8be6e : Reflect.apply(_1087e8da3d1c.fn, _1087e8da3d1c.this, _1087e8da3d1c.args);
          }), _fbbba1a672e2.getOwnPropertyDescriptor = _06df19f8be6e.getOwnPropertyDescriptorHandler, 
          _e408115c538a[_85308e43d297] = new Proxy(_6c53fc11c1e7, _fbbba1a672e2);
        }
        Trap(_e408115c538a, _85308e43d297) {
          if (Array.isArray(_e408115c538a)) {
            for (let _0948873bd781 of _e408115c538a) this.Trap(_0948873bd781, _85308e43d297);
            return;
          }
          let _0948873bd781 = _e408115c538a.split("."), _6c53fc11c1e7 = _0948873bd781.pop(), _06df19f8be6e = _0948873bd781.reduce((_e408115c538a, _85308e43d297) => _e408115c538a?.[_85308e43d297], this.global);
          if (!_06df19f8be6e) return;
          let _fbbba1a672e2 = this.natives.call("Object.getOwnPropertyDescriptor", null, _06df19f8be6e, _6c53fc11c1e7);
          return this.descriptors.store[_e408115c538a] = _fbbba1a672e2, this.RawTrap(_06df19f8be6e, _6c53fc11c1e7, _85308e43d297);
        }
        RawTrap(_e408115c538a, _85308e43d297, _0948873bd781) {
          if (!_e408115c538a || !_85308e43d297 || !Reflect.has(_e408115c538a, _85308e43d297)) return;
          let _6c53fc11c1e7 = this.natives.call("Object.getOwnPropertyDescriptor", null, _e408115c538a, _85308e43d297), _06df19f8be6e = {
            this: null,
            get: function() {
              return _6c53fc11c1e7 && _6c53fc11c1e7.get.call(this.this);
            },
            set: function(_e408115c538a) {
              _6c53fc11c1e7 && _6c53fc11c1e7.set.call(this.this, _e408115c538a);
            }
          };
          delete _e408115c538a[_85308e43d297];
          let _fbbba1a672e2 = {};
          return _0948873bd781.get ? _fbbba1a672e2.get = function() {
            return _06df19f8be6e.this = this, _0948873bd781.get(_06df19f8be6e);
          } : _6c53fc11c1e7?.get && (_fbbba1a672e2.get = _6c53fc11c1e7.get), _0948873bd781.set ? _fbbba1a672e2.set = function(_e408115c538a) {
            _06df19f8be6e.this = this, _0948873bd781.set(_06df19f8be6e, _e408115c538a);
          } : _6c53fc11c1e7?.set && (_fbbba1a672e2.set = _6c53fc11c1e7.set), _0948873bd781.enumerable ? _fbbba1a672e2.enumerable = _0948873bd781.enumerable : _6c53fc11c1e7?.enumerable && (_fbbba1a672e2.enumerable = _6c53fc11c1e7.enumerable), 
          _0948873bd781.configurable ? _fbbba1a672e2.configurable = _0948873bd781.configurable : _6c53fc11c1e7?.configurable && (_fbbba1a672e2.configurable = _6c53fc11c1e7.configurable), 
          Object.defineProperty(_e408115c538a, _85308e43d297, _fbbba1a672e2), _6c53fc11c1e7;
        }
      }
    },
    1077: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      function n(_e408115c538a, _85308e43d297) {
        _e408115c538a.Trap("Element.prototype.attributes", {
          get(_e408115c538a) {
            let _85308e43d297 = _e408115c538a.get(), _0948873bd781 = new Proxy(_85308e43d297, {
              get(_e408115c538a, _6c53fc11c1e7, _06df19f8be6e) {
                let _fbbba1a672e2 = Reflect.get(_e408115c538a, _6c53fc11c1e7);
                return "length" === _6c53fc11c1e7 ? Object.keys(_0948873bd781).length : "getNamedItem" === _6c53fc11c1e7 ? _e408115c538a => _0948873bd781[_e408115c538a] : "getNamedItemNS" === _6c53fc11c1e7 ? (_e408115c538a, _85308e43d297) => _0948873bd781[`${_e408115c538a}:${_85308e43d297}`] : _6c53fc11c1e7 in NamedNodeMap.prototype && "function" == typeof _fbbba1a672e2 ? new Proxy(_fbbba1a672e2, {
                  apply: (_e408115c538a, _6c53fc11c1e7, _06df19f8be6e) => _6c53fc11c1e7 === _0948873bd781 ? Reflect.apply(_e408115c538a, _85308e43d297, _06df19f8be6e) : Reflect.apply(_e408115c538a, _6c53fc11c1e7, _06df19f8be6e)
                }) : "string" != typeof _6c53fc11c1e7 && "number" != typeof _6c53fc11c1e7 || isNaN(Number(_6c53fc11c1e7)) ? this.has(_e408115c538a, _6c53fc11c1e7) ? _fbbba1a672e2 : void 0 : _85308e43d297[Object.keys(_0948873bd781)[_6c53fc11c1e7]];
              },
              ownKeys(_e408115c538a) {
                return Reflect.ownKeys(_e408115c538a).filter(_85308e43d297 => this.has(_e408115c538a, _85308e43d297));
              },
              has: (_e408115c538a, _0948873bd781) => "symbol" == typeof _0948873bd781 ? Reflect.has(_e408115c538a, _0948873bd781) : !(_0948873bd781.startsWith("studyjet-attr-") || _85308e43d297[_0948873bd781]?.name?.startsWith("studyjet-attr-")) && Reflect.has(_e408115c538a, _0948873bd781)
            });
            return _0948873bd781;
          }
        }), _e408115c538a.Trap([ "Attr.prototype.value", "Attr.prototype.nodeValue" ], {
          get: _e408115c538a => _e408115c538a.this?.ownerElement ? _e408115c538a.this.ownerElement.getAttribute(_e408115c538a.this.name) : _e408115c538a.get(),
          set: (_e408115c538a, _85308e43d297) => _e408115c538a.this?.ownerElement ? _e408115c538a.this.ownerElement.setAttribute(_e408115c538a.this.name, _85308e43d297) : _e408115c538a.set(_85308e43d297)
        });
      }
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        default: () => n
      });
    },
    7430: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        default: () => i
      });
      var _6c53fc11c1e7 = _0948873bd781(1472);
      function i(_e408115c538a, _85308e43d297) {
        _e408115c538a.Proxy("Navigator.prototype.sendBeacon", {
          apply(_85308e43d297) {
            _85308e43d297.args[0] = (0, _6c53fc11c1e7.Oy)(_85308e43d297.args[0], _e408115c538a.meta);
          }
        });
      }
    },
    9116: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      function n(_e408115c538a, _85308e43d297) {
        _e408115c538a.serviceWorker.addEventListener("message", ({data: _85308e43d297}) => {
          if ("studyjet$type" in _85308e43d297 && "cookie" === _85308e43d297.studyjet$type) {
            _e408115c538a.cookieStore.setCookies([ _85308e43d297.cookie ], new URL(_85308e43d297.url));
            let _0948873bd781 = {
              studyjet$token: _85308e43d297.studyjet$token,
              studyjet$type: "cookie"
            };
            _e408115c538a.serviceWorker.controller.postMessage(_0948873bd781);
          }
        }), _e408115c538a.Trap("Document.prototype.cookie", {
          get: () => _e408115c538a.cookieStore.getCookies(_e408115c538a.url, !0),
          set(_85308e43d297, _0948873bd781) {
            _e408115c538a.cookieStore.setCookies([ _0948873bd781 ], _e408115c538a.url);
            let _6c53fc11c1e7 = _e408115c538a.descriptors.get("ServiceWorkerContainer.prototype.controller", _e408115c538a.serviceWorker);
            _6c53fc11c1e7 && _e408115c538a.natives.call("ServiceWorker.prototype.postMessage", _6c53fc11c1e7, {
              studyjet$type: "cookie",
              cookie: _0948873bd781,
              url: _e408115c538a.url.href
            });
          }
        }), delete _85308e43d297.cookieStore;
      }
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        default: () => n
      });
    },
    6447: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        default: () => i
      });
      var _6c53fc11c1e7 = _0948873bd781(2614);
      function i(_e408115c538a) {
        _e408115c538a.Proxy("CSSStyleDeclaration.prototype.setProperty", {
          apply(_85308e43d297) {
            _85308e43d297.args[1] && (_85308e43d297.args[1] = (0, _6c53fc11c1e7.s)(_85308e43d297.args[1], _e408115c538a.meta));
          }
        }), _e408115c538a.Proxy("CSSStyleDeclaration.prototype.getPropertyValue", {
          apply(_e408115c538a) {
            let _85308e43d297 = _e408115c538a.call();
            if (!_85308e43d297) return _85308e43d297;
            _e408115c538a.return((0, _6c53fc11c1e7.f)(_85308e43d297));
          }
        }), _e408115c538a.Trap("CSSStyleDeclaration.prototype.cssText", {
          set(_85308e43d297, _0948873bd781) {
            _85308e43d297.set((0, _6c53fc11c1e7.s)(_0948873bd781, _e408115c538a.meta));
          },
          get: _e408115c538a => (0, _6c53fc11c1e7.f)(_e408115c538a.get())
        }), _e408115c538a.Proxy("CSSStyleSheet.prototype.insertRule", {
          apply(_85308e43d297) {
            _85308e43d297.args[0] = (0, _6c53fc11c1e7.s)(_85308e43d297.args[0], _e408115c538a.meta);
          }
        }), _e408115c538a.Proxy("CSSStyleSheet.prototype.replace", {
          apply(_85308e43d297) {
            _85308e43d297.args[0] = (0, _6c53fc11c1e7.s)(_85308e43d297.args[0], _e408115c538a.meta);
          }
        }), _e408115c538a.Proxy("CSSStyleSheet.prototype.replaceSync", {
          apply(_85308e43d297) {
            _85308e43d297.args[0] = (0, _6c53fc11c1e7.s)(_85308e43d297.args[0], _e408115c538a.meta);
          }
        }), _e408115c538a.Trap("CSSRule.prototype.cssText", {
          set(_85308e43d297, _0948873bd781) {
            _85308e43d297.set((0, _6c53fc11c1e7.s)(_0948873bd781, _e408115c538a.meta));
          },
          get: _e408115c538a => (0, _6c53fc11c1e7.f)(_e408115c538a.get())
        }), _e408115c538a.Proxy("CSSStyleValue.parse", {
          apply(_85308e43d297) {
            _85308e43d297.args[1] && (_85308e43d297.args[1] = (0, _6c53fc11c1e7.s)(_85308e43d297.args[1], _e408115c538a.meta));
          }
        }), _e408115c538a.Trap("HTMLElement.prototype.style", {
          get(_85308e43d297) {
            let _0948873bd781 = _85308e43d297.get();
            return new Proxy(_0948873bd781, {
              get(_e408115c538a, _85308e43d297) {
                let _06df19f8be6e = Reflect.get(_e408115c538a, _85308e43d297);
                return "function" == typeof _06df19f8be6e ? new Proxy(_06df19f8be6e, {
                  apply: (_e408115c538a, _85308e43d297, _6c53fc11c1e7) => Reflect.apply(_e408115c538a, _0948873bd781, _6c53fc11c1e7)
                }) : _85308e43d297 in CSSStyleDeclaration.prototype || !_06df19f8be6e ? _06df19f8be6e : (0, 
                _6c53fc11c1e7.f)(_06df19f8be6e);
              },
              set: (_85308e43d297, _0948873bd781, _06df19f8be6e) => "cssText" == _0948873bd781 || "" == _06df19f8be6e || "string" != typeof _06df19f8be6e ? Reflect.set(_85308e43d297, _0948873bd781, _06df19f8be6e) : Reflect.set(_85308e43d297, _0948873bd781, (0, 
              _6c53fc11c1e7.s)(_06df19f8be6e, _e408115c538a.meta))
            });
          },
          set(_e408115c538a, _85308e43d297) {
            _e408115c538a.set(_85308e43d297);
          }
        });
      }
    },
    5351: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        default: () => i
      });
      var _6c53fc11c1e7 = _0948873bd781(884);
      function i(_e408115c538a, _85308e43d297) {
        let _0948873bd781 = String;
        _e408115c538a.Proxy([ "Document.prototype.querySelector", "Document.prototype.querySelectorAll" ], {
          apply(_e408115c538a) {
            _e408115c538a.args[0] = _0948873bd781(_e408115c538a.args[0]).replace(/((?:^|\s)\b\w+\[(?:src|href|data-href))[\^]?(=['"]?(?:https?[:])?\/\/)/, "$1*$2");
          }
        }), _e408115c538a.Proxy("Document.prototype.write", {
          apply(_85308e43d297) {
            if (_85308e43d297.args[0]) try {
              _85308e43d297.args[0] = (0, _6c53fc11c1e7.Qs)(_85308e43d297.args[0], _e408115c538a.cookieStore, _e408115c538a.meta, !1);
            } catch {}
          }
        }), _e408115c538a.Trap("Document.prototype.referrer", {
          get: () => _e408115c538a.url.toString()
        }), _e408115c538a.Proxy("Document.prototype.writeln", {
          apply(_85308e43d297) {
            if (_85308e43d297.args[0]) try {
              _85308e43d297.args[0] = (0, _6c53fc11c1e7.Qs)(_85308e43d297.args[0], _e408115c538a.cookieStore, _e408115c538a.meta, !1);
            } catch {}
          }
        }), _e408115c538a.Proxy("Document.prototype.parseHTMLUnsafe", {
          apply(_85308e43d297) {
            if (_85308e43d297.args[0]) try {
              _85308e43d297.args[0] = (0, _6c53fc11c1e7.Qs)(_85308e43d297.args[0], _e408115c538a.cookieStore, _e408115c538a.meta, !1);
            } catch {}
          }
        });
      }
    },
    7828: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        default: () => h
      });
      var _6c53fc11c1e7 = _0948873bd781(2393), _06df19f8be6e = _0948873bd781(2614), _fbbba1a672e2 = _0948873bd781(884), _1087e8da3d1c = _0948873bd781(1478), _ce231c24b42d = _0948873bd781(1472), _5cb021885ef6 = _0948873bd781(2794), _2b09e1ca183a = _0948873bd781(3255);
      let _f59cf6266889 = new TextEncoder;
      function d(_e408115c538a) {
        return btoa(Array.from(_e408115c538a, _e408115c538a => String.fromCodePoint(_e408115c538a)).join(""));
      }
      function h(_e408115c538a, _85308e43d297) {
        let _0948873bd781 = {
          nonce: [ _85308e43d297.HTMLElement ],
          integrity: [ _85308e43d297.HTMLScriptElement, _85308e43d297.HTMLLinkElement ],
          csp: [ _85308e43d297.HTMLIFrameElement ],
          credentialless: [ _85308e43d297.HTMLIFrameElement ],
          src: [ _85308e43d297.HTMLImageElement, _85308e43d297.HTMLMediaElement, _85308e43d297.HTMLIFrameElement, _85308e43d297.HTMLFrameElement, _85308e43d297.HTMLEmbedElement, _85308e43d297.HTMLScriptElement, _85308e43d297.HTMLSourceElement ],
          href: [ _85308e43d297.HTMLAnchorElement, _85308e43d297.HTMLLinkElement ],
          data: [ _85308e43d297.HTMLObjectElement ],
          action: [ _85308e43d297.HTMLFormElement ],
          formaction: [ _85308e43d297.HTMLButtonElement, _85308e43d297.HTMLInputElement ],
          srcdoc: [ _85308e43d297.HTMLIFrameElement ],
          poster: [ _85308e43d297.HTMLVideoElement ],
          imagesrcset: [ _85308e43d297.HTMLLinkElement ]
        }, _1e156e012532 = [ _85308e43d297.HTMLAnchorElement.prototype, _85308e43d297.HTMLAreaElement.prototype ], _39d3eae51e3c = [ _e408115c538a.natives.call("Object.getOwnPropertyDescriptor", null, _85308e43d297.HTMLAnchorElement.prototype, "href"), _e408115c538a.natives.call("Object.getOwnPropertyDescriptor", null, _85308e43d297.HTMLAreaElement.prototype, "href") ];
        for (let _85308e43d297 of Object.keys(_0948873bd781)) for (let _6c53fc11c1e7 of _0948873bd781[_85308e43d297]) {
          let _0948873bd781 = _e408115c538a.natives.call("Object.getOwnPropertyDescriptor", null, _6c53fc11c1e7.prototype, _85308e43d297);
          Object.defineProperty(_6c53fc11c1e7.prototype, _85308e43d297, {
            get() {
              return [ "src", "data", "href", "action", "formaction" ].includes(_85308e43d297) ? (0, 
              _ce231c24b42d.v2)(_0948873bd781.get.call(this)) : _0948873bd781.get.call(this);
            },
            set(_e408115c538a) {
              return this.setAttribute(_85308e43d297, _e408115c538a);
            }
          });
        }
        for (let _85308e43d297 of [ "protocol", "hash", "host", "hostname", "origin", "pathname", "port", "search" ]) for (let _0948873bd781 in _1e156e012532) {
          let _6c53fc11c1e7 = _1e156e012532[_0948873bd781], _06df19f8be6e = _39d3eae51e3c[_0948873bd781];
          _e408115c538a.RawTrap(_6c53fc11c1e7, _85308e43d297, {
            get(_e408115c538a) {
              let _0948873bd781 = _06df19f8be6e.get.call(_e408115c538a.this);
              return _0948873bd781 ? new URL((0, _ce231c24b42d.v2)(_0948873bd781))[_85308e43d297] : _0948873bd781;
            }
          });
        }
        _e408115c538a.Trap("Node.prototype.baseURI", {
          get(_85308e43d297) {
            let _0948873bd781 = _85308e43d297.this, _6c53fc11c1e7 = _0948873bd781.ownerDocument?.querySelector("base");
            return (_0948873bd781 instanceof Document && (_6c53fc11c1e7 = _0948873bd781.querySelector("base")), 
            _6c53fc11c1e7) ? new URL(_6c53fc11c1e7.href, _e408115c538a.url.origin).href : _e408115c538a.url.origin;
          },
          set: (_e408115c538a, _85308e43d297) => !1
        }), _e408115c538a.Proxy("Element.prototype.getAttribute", {
          apply(_85308e43d297) {
            let [_0948873bd781] = _85308e43d297.args;
            if (_0948873bd781.startsWith("studyjet-attr")) return _85308e43d297.return(null);
            if (_e408115c538a.natives.call("Element.prototype.hasAttribute", _85308e43d297.this, `studyjet-attr-${_0948873bd781}`)) {
              let _e408115c538a = _85308e43d297.fn.call(_85308e43d297.this, `studyjet-attr-${_0948873bd781}`);
              return null === _e408115c538a ? _85308e43d297.return("") : _85308e43d297.return(_e408115c538a);
            }
          }
        }), _e408115c538a.Proxy("Element.prototype.getAttributeNames", {
          apply(_e408115c538a) {
            let _85308e43d297 = _e408115c538a.call().filter(_e408115c538a => !_e408115c538a.startsWith("studyjet-attr"));
            _e408115c538a.return(_85308e43d297);
          }
        }), _e408115c538a.Proxy("Element.prototype.getAttributeNode", {
          apply(_e408115c538a) {
            if (_e408115c538a.args[0].startsWith("studyjet-attr")) return _e408115c538a.return(null);
          }
        }), _e408115c538a.Proxy("Element.prototype.hasAttribute", {
          apply(_e408115c538a) {
            if (_e408115c538a.args[0].startsWith("studyjet-attr")) return _e408115c538a.return(!1);
          }
        }), _e408115c538a.Proxy("Element.prototype.setAttribute", {
          apply(_85308e43d297) {
            let [_0948873bd781, _06df19f8be6e] = _85308e43d297.args, _fbbba1a672e2 = _6c53fc11c1e7.V.find(_e408115c538a => {
              let _6c53fc11c1e7 = _e408115c538a[_0948873bd781.toLowerCase()];
              return !!_6c53fc11c1e7 && ("*" === _6c53fc11c1e7 || "function" != typeof _6c53fc11c1e7 && _6c53fc11c1e7.includes(_85308e43d297.this.tagName.toLowerCase()));
            });
            if (_fbbba1a672e2) {
              let _6c53fc11c1e7 = _fbbba1a672e2.fn(_06df19f8be6e, _e408115c538a.meta, _e408115c538a.cookieStore);
              if (null == _6c53fc11c1e7) {
                _e408115c538a.natives.call("Element.prototype.removeAttribute", _85308e43d297.this, _0948873bd781), 
                _85308e43d297.return(void 0);
                return;
              }
              _85308e43d297.args[1] = _6c53fc11c1e7, _85308e43d297.fn.call(_85308e43d297.this, `studyjet-attr-${_85308e43d297.args[0]}`, _06df19f8be6e);
            }
          }
        }), _e408115c538a.Proxy("Element.prototype.setAttributeNode", {
          apply(_e408115c538a) {}
        }), _e408115c538a.Proxy("Element.prototype.setAttributeNS", {
          apply(_85308e43d297) {
            let [_0948873bd781, _06df19f8be6e, _fbbba1a672e2] = _85308e43d297.args, _1087e8da3d1c = _6c53fc11c1e7.V.find(_e408115c538a => {
              let _0948873bd781 = _e408115c538a[_06df19f8be6e.toLowerCase()];
              return !!_0948873bd781 && ("*" === _0948873bd781 || "function" != typeof _0948873bd781 && _0948873bd781.includes(_85308e43d297.this.tagName.toLowerCase()));
            });
            _1087e8da3d1c && (_85308e43d297.args[2] = _1087e8da3d1c.fn(_fbbba1a672e2, _e408115c538a.meta, _e408115c538a.cookieStore), 
            _e408115c538a.natives.call("Element.prototype.setAttribute", _85308e43d297.this, `studyjet-attr-${_85308e43d297.args[1]}`, _fbbba1a672e2));
          }
        }), _e408115c538a.Trap("SVGAnimatedString.prototype.baseVal", {
          get(_e408115c538a) {
            let _85308e43d297 = _e408115c538a.get();
            return _85308e43d297 ? (0, _ce231c24b42d.v2)(_85308e43d297) : _85308e43d297;
          },
          set(_85308e43d297, _0948873bd781) {
            _85308e43d297.set((0, _ce231c24b42d.Oy)(_0948873bd781, _e408115c538a.meta));
          }
        }), _e408115c538a.Trap("SVGAnimatedString.prototype.animVal", {
          get(_e408115c538a) {
            let _85308e43d297 = _e408115c538a.get();
            return _85308e43d297 ? (0, _ce231c24b42d.v2)(_85308e43d297) : _85308e43d297;
          }
        }), _e408115c538a.Proxy("Element.prototype.removeAttribute", {
          apply(_85308e43d297) {
            if (_85308e43d297.args[0].startsWith("studyjet-attr")) return _85308e43d297.return(void 0);
            _e408115c538a.natives.call("Element.prototype.hasAttribute", _85308e43d297.this, _85308e43d297.args[0]) && _85308e43d297.fn.call(_85308e43d297.this, `studyjet-attr-${_85308e43d297.args[0]}`);
          }
        }), _e408115c538a.Proxy("Element.prototype.toggleAttribute", {
          apply(_85308e43d297) {
            if (_85308e43d297.args[0].startsWith("studyjet-attr")) return _85308e43d297.return(!1);
            _e408115c538a.natives.call("Element.prototype.hasAttribute", _85308e43d297.this, _85308e43d297.args[0]) && _85308e43d297.fn.call(_85308e43d297.this, `studyjet-attr-${_85308e43d297.args[0]}`);
          }
        }), _e408115c538a.Trap("Element.prototype.innerHTML", {
          set(_0948873bd781, _6c53fc11c1e7) {
            let _ce231c24b42d;
            if (_0948873bd781.this instanceof _85308e43d297.HTMLScriptElement) _ce231c24b42d = (0, 
            _1087e8da3d1c.o)(_6c53fc11c1e7, "(anonymous script element)", _e408115c538a.meta), 
            _e408115c538a.natives.call("Element.prototype.setAttribute", _0948873bd781.this, "studyjet-attr-script-source-src", d(_f59cf6266889.encode(_ce231c24b42d))); else if (_0948873bd781.this instanceof _85308e43d297.HTMLStyleElement) _ce231c24b42d = (0, 
            _06df19f8be6e.s)(_6c53fc11c1e7, _e408115c538a.meta); else try {
              _ce231c24b42d = (0, _fbbba1a672e2.Qs)(_6c53fc11c1e7, _e408115c538a.cookieStore, _e408115c538a.meta);
            } catch {
              _ce231c24b42d = _6c53fc11c1e7;
            }
            _0948873bd781.set(_ce231c24b42d);
          },
          get(_0948873bd781) {
            if (_0948873bd781.this instanceof _85308e43d297.HTMLScriptElement) {
              let _85308e43d297 = _e408115c538a.natives.call("Element.prototype.getAttribute", _0948873bd781.this, "studyjet-attr-script-source-src");
              return _85308e43d297 ? atob(_85308e43d297) : _0948873bd781.get();
            }
            return _0948873bd781.this instanceof _85308e43d297.HTMLStyleElement ? _0948873bd781.get() : (0, 
            _fbbba1a672e2.nK)(_0948873bd781.get());
          }
        }), _e408115c538a.Trap("Node.prototype.textContent", {
          set(_0948873bd781, _6c53fc11c1e7) {
            if (_0948873bd781.this instanceof _85308e43d297.HTMLScriptElement) {
              let _85308e43d297 = (0, _1087e8da3d1c.o)(_6c53fc11c1e7, "(anonymous script element)", _e408115c538a.meta);
              return _e408115c538a.natives.call("Element.prototype.setAttribute", _0948873bd781.this, "studyjet-attr-script-source-src", d(_f59cf6266889.encode(_85308e43d297))), 
              _0948873bd781.set(_85308e43d297);
            }
            return _0948873bd781.this instanceof _85308e43d297.HTMLStyleElement ? _0948873bd781.set((0, 
            _06df19f8be6e.s)(_6c53fc11c1e7, _e408115c538a.meta)) : _0948873bd781.set(_6c53fc11c1e7);
          },
          get(_0948873bd781) {
            if (_0948873bd781.this instanceof _85308e43d297.HTMLScriptElement) {
              let _85308e43d297 = _e408115c538a.natives.call("Element.prototype.getAttribute", _0948873bd781.this, "studyjet-attr-script-source-src");
              return _85308e43d297 ? atob(_85308e43d297) : _0948873bd781.get();
            }
            return _0948873bd781.this instanceof _85308e43d297.HTMLStyleElement ? (0, _06df19f8be6e.f)(_0948873bd781.get()) : _0948873bd781.get();
          }
        }), _e408115c538a.Trap("Element.prototype.outerHTML", {
          set(_85308e43d297, _0948873bd781) {
            _85308e43d297.set((0, _fbbba1a672e2.Qs)(_0948873bd781, _e408115c538a.cookieStore, _e408115c538a.meta));
          },
          get: _e408115c538a => (0, _fbbba1a672e2.nK)(_e408115c538a.get())
        }), _e408115c538a.Proxy("Element.prototype.setHTMLUnsafe", {
          apply(_85308e43d297) {
            try {
              _85308e43d297.args[0] = (0, _fbbba1a672e2.Qs)(_85308e43d297.args[0], _e408115c538a.cookieStore, _e408115c538a.meta, !1);
            } catch {}
          }
        }), _e408115c538a.Proxy("Element.prototype.getHTML", {
          apply(_e408115c538a) {
            _e408115c538a.return((0, _fbbba1a672e2.nK)(_e408115c538a.call()));
          }
        }), _e408115c538a.Proxy("Element.prototype.insertAdjacentHTML", {
          apply(_85308e43d297) {
            if (_85308e43d297.args[1]) try {
              _85308e43d297.args[1] = (0, _fbbba1a672e2.Qs)(_85308e43d297.args[1], _e408115c538a.cookieStore, _e408115c538a.meta, !1);
            } catch {}
          }
        }), _e408115c538a.Proxy("Audio", {
          construct(_85308e43d297) {
            _85308e43d297.args[0] && (_85308e43d297.args[0] = (0, _ce231c24b42d.Oy)(_85308e43d297.args[0], _e408115c538a.meta));
          }
        }), _e408115c538a.Proxy("Text.prototype.appendData", {
          apply(_85308e43d297) {
            _85308e43d297.this.parentElement?.tagName === "STYLE" && (_85308e43d297.args[0] = (0, 
            _06df19f8be6e.s)(_85308e43d297.args[0], _e408115c538a.meta));
          }
        }), _e408115c538a.Proxy("Text.prototype.insertData", {
          apply(_85308e43d297) {
            _85308e43d297.this.parentElement?.tagName === "STYLE" && (_85308e43d297.args[1] = (0, 
            _06df19f8be6e.s)(_85308e43d297.args[1], _e408115c538a.meta));
          }
        }), _e408115c538a.Proxy("Text.prototype.replaceData", {
          apply(_85308e43d297) {
            _85308e43d297.this.parentElement?.tagName === "STYLE" && (_85308e43d297.args[2] = (0, 
            _06df19f8be6e.s)(_85308e43d297.args[2], _e408115c538a.meta));
          }
        }), _e408115c538a.Trap("Text.prototype.wholeText", {
          get: _e408115c538a => _e408115c538a.this.parentElement?.tagName === "STYLE" ? (0, 
          _06df19f8be6e.f)(_e408115c538a.get()) : _e408115c538a.get(),
          set: (_85308e43d297, _0948873bd781) => _85308e43d297.this.parentElement?.tagName === "STYLE" ? _85308e43d297.set((0, 
          _06df19f8be6e.s)(_0948873bd781, _e408115c538a.meta)) : _85308e43d297.set(_0948873bd781)
        }), _e408115c538a.Trap([ "HTMLIFrameElement.prototype.contentWindow", "HTMLFrameElement.prototype.contentWindow", "HTMLObjectElement.prototype.contentWindow", "HTMLEmbedElement.prototype.contentWindow" ], {
          get(_e408115c538a) {
            let _85308e43d297 = _e408115c538a.get();
            return _85308e43d297 && (_5cb021885ef6.pX in _85308e43d297 || new _2b09e1ca183a.StudyJetClient(_85308e43d297).hook()), 
            _85308e43d297;
          }
        }), _e408115c538a.Trap([ "HTMLIFrameElement.prototype.contentDocument", "HTMLFrameElement.prototype.contentDocument", "HTMLObjectElement.prototype.contentDocument", "HTMLEmbedElement.prototype.contentDocument" ], {
          get(_85308e43d297) {
            let _0948873bd781 = _e408115c538a.descriptors.get(`${_85308e43d297.this.constructor.name}.prototype.contentWindow`, _85308e43d297.this);
            return _0948873bd781 ? (_5cb021885ef6.pX in _0948873bd781 || new _2b09e1ca183a.StudyJetClient(_0948873bd781).hook(), 
            _0948873bd781.document) : _0948873bd781;
          }
        }), _e408115c538a.Proxy([ "HTMLIFrameElement.prototype.getSVGDocument", "HTMLObjectElement.prototype.getSVGDocument", "HTMLEmbedElement.prototype.getSVGDocument" ], {
          apply(_e408115c538a) {
            if (_e408115c538a.call()) return _e408115c538a.return(_e408115c538a.this.contentDocument);
          }
        }), _e408115c538a.Proxy("DOMParser.prototype.parseFromString", {
          apply(_85308e43d297) {
            if ("text/html" === _85308e43d297.args[1]) try {
              _85308e43d297.args[0] = (0, _fbbba1a672e2.Qs)(_85308e43d297.args[0], _e408115c538a.cookieStore, _e408115c538a.meta, !1);
            } catch {}
          }
        });
      }
    },
    5426: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        default: () => i
      });
      var _6c53fc11c1e7 = _0948873bd781(2614);
      function i(_e408115c538a, _85308e43d297) {
        _e408115c538a.Proxy("FontFace", {
          construct(_85308e43d297) {
            _85308e43d297.args[1] = (0, _6c53fc11c1e7.s)(_85308e43d297.args[1], _e408115c538a.meta);
          }
        });
      }
    },
    5465: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        default: () => i
      });
      var _6c53fc11c1e7 = _0948873bd781(884);
      function i(_e408115c538a, _85308e43d297) {
        _e408115c538a.Proxy("Range.prototype.createContextualFragment", {
          apply(_85308e43d297) {
            _85308e43d297.args[0] = (0, _6c53fc11c1e7.Qs)(_85308e43d297.args[0], _e408115c538a.cookieStore, _e408115c538a.meta);
          }
        });
      }
    },
    9804: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        default: () => s
      });
      var _6c53fc11c1e7 = _0948873bd781(1472), _06df19f8be6e = _0948873bd781(1862), _fbbba1a672e2 = _0948873bd781(2794);
      function s(_e408115c538a, _85308e43d297) {
        _e408115c538a.Proxy([ "History.prototype.pushState", "History.prototype.replaceState" ], {
          apply(_85308e43d297) {
            (_85308e43d297.args[2] || "" === _85308e43d297.args[2]) && (_85308e43d297.args[2] = (0, 
            _6c53fc11c1e7.Oy)(_85308e43d297.args[2], _e408115c538a.meta)), _85308e43d297.call();
            let {constructor: {constructor: _0948873bd781}} = _85308e43d297.this, _1087e8da3d1c = _0948873bd781("return globalThis")(), _ce231c24b42d = _1087e8da3d1c[_fbbba1a672e2.pX];
            if (_1087e8da3d1c.name === _e408115c538a.meta.topFrameName) {
              let _85308e43d297 = new _06df19f8be6e.UrlChangeEvent(_ce231c24b42d.url.href);
              _e408115c538a.frame?.dispatchEvent(_85308e43d297);
            }
          }
        });
      }
    },
    7758: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        default: () => s
      });
      var _6c53fc11c1e7 = _0948873bd781(3255), _06df19f8be6e = _0948873bd781(2794), _fbbba1a672e2 = _0948873bd781(1472);
      function s(_e408115c538a) {
        _e408115c538a.Proxy("window.open", {
          apply(_85308e43d297) {
            _85308e43d297.args[0] && (_85308e43d297.args[0] = (0, _fbbba1a672e2.Oy)(_85308e43d297.args[0], _e408115c538a.meta)), 
            ("_top" === _85308e43d297.args[1] || "_unfencedTop" === _85308e43d297.args[1]) && (_85308e43d297.args[1] = _e408115c538a.meta.topFrameName), 
            "_parent" === _85308e43d297.args[1] && (_85308e43d297.args[1] = _e408115c538a.meta.parentFrameName);
            let _0948873bd781 = _85308e43d297.call();
            if (!_0948873bd781) return _85308e43d297.return(_0948873bd781);
            if (_06df19f8be6e.pX in _0948873bd781) return _85308e43d297.return(_0948873bd781[_06df19f8be6e.pX].global);
            {
              let _e408115c538a = new _6c53fc11c1e7.StudyJetClient(_0948873bd781);
              return _e408115c538a.hook(), _85308e43d297.return(_e408115c538a.global);
            }
          }
        }), _e408115c538a.Trap("window.frameElement", {
          get(_e408115c538a) {
            let _85308e43d297 = _e408115c538a.get();
            return _85308e43d297 ? _85308e43d297.ownerDocument.defaultView[_06df19f8be6e.pX] ? _85308e43d297 : null : _85308e43d297;
          }
        });
      }
    },
    6012: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      function n(_e408115c538a, _85308e43d297) {
        _e408115c538a.Trap("origin", {
          get: () => _e408115c538a.url.origin,
          set: () => !1
        }), _e408115c538a.Trap("Document.prototype.URL", {
          get: () => _e408115c538a.url.href,
          set: () => !1
        }), _e408115c538a.Trap("Document.prototype.documentURI", {
          get: () => _e408115c538a.url.href,
          set: () => !1
        }), _e408115c538a.Trap("Document.prototype.domain", {
          get: () => _e408115c538a.url.hostname,
          set: () => !1
        });
      }
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        default: () => n
      });
    },
    6286: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        default: () => a
      });
      var _6c53fc11c1e7 = _0948873bd781(1472), _06df19f8be6e = _0948873bd781(37);
      function a(_e408115c538a, _85308e43d297) {
        _e408115c538a.Trap("PerformanceEntry.prototype.name", {
          get(_e408115c538a) {
            let _85308e43d297 = _e408115c538a.get();
            return _85308e43d297 && _85308e43d297.startsWith(location.origin + _06df19f8be6e.$W.prefix) ? (0, 
            _6c53fc11c1e7.v2)(_85308e43d297) : _85308e43d297;
          }
        }), _e408115c538a.Proxy([ "Performance.prototype.getEntries", "Performance.prototype.getEntriesByType", "Performance.prototype.getEntriesByName", "PerformanceObserverEntryList.prototype.getEntries", "PerformanceObserverEntryList.prototype.getEntriesByType", "PerformanceObserverEntryList.prototype.getEntriesByName" ], {
          apply(_e408115c538a) {
            let _85308e43d297 = _e408115c538a.call();
            return _e408115c538a.return(_85308e43d297.filter(_e408115c538a => {
              for (let _85308e43d297 of Object.values(_06df19f8be6e.$W.files)) if (_e408115c538a.name.startsWith(location.origin + _85308e43d297)) return !1;
              return !0;
            }));
          }
        });
      }
    },
    1974: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        default: () => i
      });
      var _6c53fc11c1e7 = _0948873bd781(1472);
      function i(_e408115c538a, _85308e43d297) {
        _e408115c538a.Proxy("Navigator.prototype.registerProtocolHandler", {
          apply(_85308e43d297) {
            _85308e43d297.args[1] = (0, _6c53fc11c1e7.Oy)(_85308e43d297.args[1], _e408115c538a.meta);
          }
        }), _e408115c538a.Proxy("Navigator.prototype.unregisterProtocolHandler", {
          apply(_85308e43d297) {
            _85308e43d297.args[1] = (0, _6c53fc11c1e7.Oy)(_85308e43d297.args[1], _e408115c538a.meta);
          }
        });
      }
    },
    9201: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        default: () => l,
        disabled: () => o,
        enabled: () => s,
        order: () => _fbbba1a672e2
      });
      var _6c53fc11c1e7 = _0948873bd781(37), _06df19f8be6e = _0948873bd781(1472);
      let _fbbba1a672e2 = 2, s = _e408115c538a => (0, _6c53fc11c1e7.U5)("serviceworkers", _e408115c538a.url);
      function o(_e408115c538a, _85308e43d297) {
        Reflect.deleteProperty(Navigator.prototype, "serviceWorker");
      }
      function l(_e408115c538a, _85308e43d297) {
        let _0948873bd781 = new WeakMap;
        _e408115c538a.Proxy("EventTarget.prototype.addEventListener", {
          apply(_e408115c538a) {
            _0948873bd781.get(_e408115c538a.this) && _e408115c538a.return(void 0);
          }
        }), _e408115c538a.Proxy("EventTarget.prototype.removeEventListener", {
          apply(_e408115c538a) {
            _0948873bd781.get(_e408115c538a.this) && _e408115c538a.return(void 0);
          }
        }), _e408115c538a.Proxy("ServiceWorkerContainer.prototype.getRegistration", {
          apply(_e408115c538a) {
            _e408115c538a.return(new Promise(_e408115c538a => _e408115c538a(registration)));
          }
        }), _e408115c538a.Proxy("ServiceWorkerContainer.prototype.getRegistrations", {
          apply(_e408115c538a) {
            _e408115c538a.return(new Promise(_e408115c538a => _e408115c538a([ registration ])));
          }
        }), _e408115c538a.Trap("ServiceWorkerContainer.prototype.ready", {
          get: _e408115c538a => new Promise(_e408115c538a => _e408115c538a(registration))
        }), _e408115c538a.Trap("ServiceWorkerContainer.prototype.controller", {
          get: _e408115c538a => registration?.active
        }), _e408115c538a.Proxy("ServiceWorkerContainer.prototype.register", {
          apply(_85308e43d297) {
            let _6c53fc11c1e7 = new EventTarget;
            Object.setPrototypeOf(_6c53fc11c1e7, self.ServiceWorkerRegistration.prototype), 
            _6c53fc11c1e7.constructor = _85308e43d297.fn;
            let _fbbba1a672e2 = (0, _06df19f8be6e.Oy)(_85308e43d297.args[0], _e408115c538a.meta) + "?dest=serviceworker";
            _85308e43d297.args[1] && "module" === _85308e43d297.args[1].type && (_fbbba1a672e2 += "&type=module");
            let _1087e8da3d1c = _e408115c538a.natives.construct("SharedWorker", _fbbba1a672e2).port, _ce231c24b42d = {
              scope: _85308e43d297.args[0],
              active: _1087e8da3d1c
            }, _5cb021885ef6 = _e408115c538a.descriptors.get("ServiceWorkerContainer.prototype.controller", _e408115c538a.serviceWorker);
            _e408115c538a.natives.call("ServiceWorker.prototype.postMessage", _5cb021885ef6, {
              studyjet$type: "registerServiceWorker",
              port: _1087e8da3d1c,
              origin: _e408115c538a.url.origin
            }, [ _1087e8da3d1c ]), _0948873bd781.set(_6c53fc11c1e7, _ce231c24b42d), _85308e43d297.return(new Promise(_e408115c538a => _e408115c538a(_6c53fc11c1e7)));
          }
        });
      }
    },
    5289: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      function n(_e408115c538a, _85308e43d297) {
        let _0948873bd781 = {
          get(_85308e43d297, _0948873bd781) {
            switch (_0948873bd781) {
             case "getItem":
              return _0948873bd781 => _85308e43d297.getItem(_e408115c538a.url.host + "@" + _0948873bd781);

             case "setItem":
              return (_0948873bd781, _6c53fc11c1e7) => _85308e43d297.setItem(_e408115c538a.url.host + "@" + _0948873bd781, _6c53fc11c1e7);

             case "removeItem":
              return _0948873bd781 => _85308e43d297.removeItem(_e408115c538a.url.host + "@" + _0948873bd781);

             case "clear":
              return () => {
                for (let _0948873bd781 in Object.keys(_85308e43d297)) _0948873bd781.startsWith(_e408115c538a.url.host) && _85308e43d297.removeItem(_0948873bd781);
              };

             case "key":
              return _0948873bd781 => {
                let _6c53fc11c1e7 = Object.keys(_85308e43d297).filter(_85308e43d297 => _85308e43d297.startsWith(_e408115c538a.url.host));
                return _85308e43d297.getItem(_6c53fc11c1e7[_0948873bd781]);
              };

             case "length":
              return Object.keys(_85308e43d297).filter(_85308e43d297 => _85308e43d297.startsWith(_e408115c538a.url.host)).length;

             default:
              if (_0948873bd781 in Object.prototype || "symbol" == typeof _0948873bd781) return Reflect.get(_85308e43d297, _0948873bd781);
              return _85308e43d297.getItem(_e408115c538a.url.host + "@" + _0948873bd781);
            }
          },
          set: (_85308e43d297, _0948873bd781, _6c53fc11c1e7) => (_85308e43d297.setItem(_e408115c538a.url.host + "@" + _0948873bd781, _6c53fc11c1e7), 
          !0),
          ownKeys: _85308e43d297 => Reflect.ownKeys(_85308e43d297).filter(_85308e43d297 => "string" == typeof _85308e43d297 && _85308e43d297.startsWith(_e408115c538a.url.host)).map(_85308e43d297 => "string" == typeof _85308e43d297 ? _85308e43d297.substring(_e408115c538a.url.host.length + 1) : _85308e43d297),
          getOwnPropertyDescriptor: (_85308e43d297, _0948873bd781) => ({
            value: _85308e43d297.getItem(_e408115c538a.url.host + "@" + _0948873bd781),
            enumerable: !0,
            configurable: !0,
            writable: !0
          }),
          defineProperty: (_85308e43d297, _0948873bd781, _6c53fc11c1e7) => (_85308e43d297.setItem(_e408115c538a.url.host + "@" + _0948873bd781, _6c53fc11c1e7.value), 
          !0)
        };
        _85308e43d297.localStorage;
        let _6c53fc11c1e7 = new Proxy(_85308e43d297.localStorage, _0948873bd781), _06df19f8be6e = new Proxy(_85308e43d297.sessionStorage, _0948873bd781);
        delete _85308e43d297.localStorage, delete _85308e43d297.sessionStorage, _85308e43d297.localStorage = _6c53fc11c1e7, 
        _85308e43d297.sessionStorage = _06df19f8be6e;
      }
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        default: () => n
      });
    },
    1323: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        isdedicated: () => _39d3eae51e3c,
        isemulatedsw: () => _6c881511c692,
        isshared: () => _687b012f5f4d,
        issw: () => _1e156e012532,
        iswindow: () => _2b09e1ca183a,
        isworker: () => _f59cf6266889,
        loadAndHook: () => g
      });
      var _6c53fc11c1e7 = _0948873bd781(37), _06df19f8be6e = _0948873bd781(2794), _fbbba1a672e2 = _0948873bd781(3255), _1087e8da3d1c = _0948873bd781(1862), _ce231c24b42d = _0948873bd781(8409), _5cb021885ef6 = _0948873bd781(8665).A;
      let _2b09e1ca183a = "window" in globalThis && window instanceof Window, _f59cf6266889 = "WorkerGlobalScope" in globalThis, _1e156e012532 = "ServiceWorkerGlobalScope" in globalThis, _39d3eae51e3c = "DedicatedWorkerGlobalScope" in globalThis, _687b012f5f4d = "SharedWorkerGlobalScope" in globalThis, _6c881511c692 = "location" in globalThis && "serviceworker" === new URL(globalThis.location.href).searchParams.get("dest");
      function g(_e408115c538a) {
        if ((0, _6c53fc11c1e7.Nk)(_e408115c538a), _5cb021885ef6.log("initializing studyjet client"), 
        !(_06df19f8be6e.pX in globalThis)) {
          (0, _6c53fc11c1e7.Ec)();
          let _e408115c538a = new _fbbba1a672e2.StudyJetClient(globalThis), _85308e43d297 = globalThis.frameElement;
          _85308e43d297 && !_85308e43d297.name && (_85308e43d297.name = `${Array(8).fill(0).map(() => Math.floor(36 * Math.random()).toString(36)).join("")}`), 
          globalThis.COOKIE && _e408115c538a.loadcookies(globalThis.COOKIE), _e408115c538a.hook(), 
          _6c881511c692 && new _ce231c24b42d.StudyJetServiceWorkerRuntime(_e408115c538a).hook();
          let _0948873bd781 = new _1087e8da3d1c.StudyJetContextEvent(_e408115c538a.global.window, _e408115c538a);
          _e408115c538a.frame?.dispatchEvent(_0948873bd781);
          let _06df19f8be6e = new _1087e8da3d1c.UrlChangeEvent(_e408115c538a.url.href);
          _e408115c538a.isSubframe || _e408115c538a.frame?.dispatchEvent(_06df19f8be6e);
        }
        Reflect.deleteProperty(globalThis, "WASM"), Reflect.deleteProperty(globalThis, "COOKIE");
      }
    },
    1862: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        NavigateEvent: () => i,
        StudyJetContextEvent: () => s,
        StudyJetGlobalDownloadEvent: () => n,
        UrlChangeEvent: () => a
      });
      class n extends Event {
        download;
        type="download";
        constructor(_e408115c538a) {
          super("download"), this.download = _e408115c538a;
        }
      }
      class i extends Event {
        url;
        type="navigate";
        constructor(_e408115c538a) {
          super("navigate"), this.url = _e408115c538a;
        }
      }
      class a extends Event {
        url;
        type="urlchange";
        constructor(_e408115c538a) {
          super("urlchange"), this.url = _e408115c538a;
        }
      }
      class s extends Event {
        window;
        client;
        type="contextInit";
        constructor(_e408115c538a, _85308e43d297) {
          super("contextInit"), this.window = _e408115c538a, this.client = _85308e43d297;
        }
      }
    },
    94: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      function n(_e408115c538a, _85308e43d297) {
        return Reflect.getOwnPropertyDescriptor(_e408115c538a, _85308e43d297);
      }
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        getOwnPropertyDescriptorHandler: () => n
      });
    },
    3255: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        NavigateEvent: () => _fbbba1a672e2.NavigateEvent,
        StudyJetClient: () => _6c53fc11c1e7.StudyJetClient,
        StudyJetContextEvent: () => _fbbba1a672e2.StudyJetContextEvent,
        StudyJetGlobalDownloadEvent: () => _fbbba1a672e2.StudyJetGlobalDownloadEvent,
        StudyJetServiceWorkerRuntime: () => _5cb021885ef6.StudyJetServiceWorkerRuntime,
        UrlChangeEvent: () => _fbbba1a672e2.UrlChangeEvent,
        createLocationProxy: () => _ce231c24b42d.createLocationProxy,
        getOwnPropertyDescriptorHandler: () => _1087e8da3d1c.getOwnPropertyDescriptorHandler,
        isdedicated: () => _06df19f8be6e.isdedicated,
        isemulatedsw: () => _06df19f8be6e.isemulatedsw,
        isshared: () => _06df19f8be6e.isshared,
        issw: () => _06df19f8be6e.issw,
        iswindow: () => _06df19f8be6e.iswindow,
        isworker: () => _06df19f8be6e.isworker,
        loadAndHook: () => _06df19f8be6e.loadAndHook
      });
      var _6c53fc11c1e7 = _0948873bd781(336), _06df19f8be6e = _0948873bd781(1323), _fbbba1a672e2 = _0948873bd781(1862), _1087e8da3d1c = _0948873bd781(94), _ce231c24b42d = _0948873bd781(3696), _5cb021885ef6 = _0948873bd781(8409);
      _0948873bd781(3255);
    },
    3696: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        createLocationProxy: () => s
      });
      var _6c53fc11c1e7 = _0948873bd781(1862), _06df19f8be6e = _0948873bd781(1472), _fbbba1a672e2 = _0948873bd781(1323);
      function s(_e408115c538a, _85308e43d297) {
        let _0948873bd781 = _fbbba1a672e2.iswindow ? _85308e43d297.Location : _85308e43d297.WorkerLocation, _1087e8da3d1c = {};
        Object.setPrototypeOf(_1087e8da3d1c, _0948873bd781.prototype), _1087e8da3d1c.constructor = _0948873bd781;
        let _ce231c24b42d = _fbbba1a672e2.iswindow ? _85308e43d297.location : _0948873bd781.prototype;
        for (let _0948873bd781 of [ "protocol", "hash", "host", "hostname", "href", "origin", "pathname", "port", "search" ]) {
          let _06df19f8be6e = _e408115c538a.natives.call("Object.getOwnPropertyDescriptor", null, _ce231c24b42d, _0948873bd781);
          if (!_06df19f8be6e) continue;
          let _fbbba1a672e2 = {
            configurable: !1,
            enumerable: !0
          };
          _06df19f8be6e.get && (_fbbba1a672e2.get = new Proxy(_06df19f8be6e.get, {
            apply: () => _e408115c538a.url[_0948873bd781]
          })), _06df19f8be6e.set && (_fbbba1a672e2.set = new Proxy(_06df19f8be6e.set, {
            apply(_06df19f8be6e, _fbbba1a672e2, _1087e8da3d1c) {
              if ("href" === _0948873bd781) {
                _e408115c538a.url = _1087e8da3d1c[0];
                return;
              }
              if ("hash" === _0948873bd781) {
                _85308e43d297.location.hash = _1087e8da3d1c[0];
                let _0948873bd781 = new _6c53fc11c1e7.UrlChangeEvent(_e408115c538a.url.href);
                _e408115c538a.isSubframe || _e408115c538a.frame?.dispatchEvent(_0948873bd781);
                return;
              }
              let _ce231c24b42d = new URL(_e408115c538a.url.href);
              _ce231c24b42d[_0948873bd781] = _1087e8da3d1c[0], _e408115c538a.url = _ce231c24b42d;
            }
          })), Object.defineProperty(_1087e8da3d1c, _0948873bd781, _fbbba1a672e2);
        }
        return _1087e8da3d1c.toString = new Proxy(_85308e43d297.location.toString, {
          apply: () => _e408115c538a.url.href
        }), _85308e43d297.location.valueOf && (_1087e8da3d1c.valueOf = new Proxy(_85308e43d297.location.valueOf, {
          apply: () => _e408115c538a.url.href
        })), _85308e43d297.location.assign && (_1087e8da3d1c.assign = new Proxy(_85308e43d297.location.assign, {
          apply(_0948873bd781, _fbbba1a672e2, _1087e8da3d1c) {
            _1087e8da3d1c[0] = (0, _06df19f8be6e.Oy)(_1087e8da3d1c[0], _e408115c538a.meta), 
            Reflect.apply(_0948873bd781, _85308e43d297.location, _1087e8da3d1c);
            let _ce231c24b42d = new _6c53fc11c1e7.UrlChangeEvent(_e408115c538a.url.href);
            _e408115c538a.isSubframe || _e408115c538a.frame?.dispatchEvent(_ce231c24b42d);
          }
        })), _85308e43d297.location.reload && (_1087e8da3d1c.reload = new Proxy(_85308e43d297.location.reload, {
          apply(_e408115c538a, _0948873bd781, _6c53fc11c1e7) {
            Reflect.apply(_e408115c538a, _85308e43d297.location, _6c53fc11c1e7);
          }
        })), _85308e43d297.location.replace && (_1087e8da3d1c.replace = new Proxy(_85308e43d297.location.replace, {
          apply(_0948873bd781, _fbbba1a672e2, _1087e8da3d1c) {
            _1087e8da3d1c[0] = (0, _06df19f8be6e.Oy)(_1087e8da3d1c[0], _e408115c538a.meta), 
            Reflect.apply(_0948873bd781, _85308e43d297.location, _1087e8da3d1c);
            let _ce231c24b42d = new _6c53fc11c1e7.UrlChangeEvent(_e408115c538a.url.href);
            _e408115c538a.isSubframe || _e408115c538a.frame?.dispatchEvent(_ce231c24b42d);
          }
        })), _1087e8da3d1c;
      }
    },
    8382: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      function n(_e408115c538a) {
        _e408115c538a.Proxy("console.clear", {
          apply(_e408115c538a) {
            _e408115c538a.return(void 0);
          }
        });
        let _85308e43d297 = console.log;
        _e408115c538a.Trap("console.log", {
          set(_e408115c538a, _85308e43d297) {},
          get: _e408115c538a => _85308e43d297
        });
      }
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        default: () => n
      });
    },
    4634: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        default: () => i
      });
      var _6c53fc11c1e7 = _0948873bd781(1472);
      function i(_e408115c538a) {
        _e408115c538a.Proxy("URL.createObjectURL", {
          apply(_85308e43d297) {
            let _0948873bd781 = _85308e43d297.call();
            _0948873bd781.startsWith("blob:") ? _85308e43d297.return((0, _6c53fc11c1e7.IP)(_0948873bd781, _e408115c538a.meta)) : _85308e43d297.return(_0948873bd781);
          }
        }), _e408115c538a.Proxy("URL.revokeObjectURL", {
          apply(_e408115c538a) {
            _e408115c538a.args[0] = (0, _6c53fc11c1e7.$n)(_e408115c538a.args[0]);
          }
        });
      }
    },
    5026: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        default: () => i
      });
      var _6c53fc11c1e7 = _0948873bd781(1472);
      function i(_e408115c538a, _85308e43d297) {
        _e408115c538a.Proxy("CacheStorage.prototype.open", {
          apply(_85308e43d297) {
            _85308e43d297.args[0] = `${_e408115c538a.url.origin}@${_85308e43d297.args[0]}`;
          }
        }), _e408115c538a.Proxy("CacheStorage.prototype.has", {
          apply(_85308e43d297) {
            _85308e43d297.args[0] = `${_e408115c538a.url.origin}@${_85308e43d297.args[0]}`;
          }
        }), _e408115c538a.Proxy("CacheStorage.prototype.match", {
          apply(_85308e43d297) {
            ("string" == typeof _85308e43d297.args[0] || _85308e43d297.args[0] instanceof URL) && (_85308e43d297.args[0] = (0, 
            _6c53fc11c1e7.Oy)(_85308e43d297.args[0], _e408115c538a.meta));
          }
        }), _e408115c538a.Proxy("CacheStorage.prototype.delete", {
          apply(_85308e43d297) {
            _85308e43d297.args[0] = `${_e408115c538a.url.origin}@${_85308e43d297.args[0]}`;
          }
        }), _e408115c538a.Proxy("Cache.prototype.add", {
          apply(_85308e43d297) {
            ("string" == typeof _85308e43d297.args[0] || _85308e43d297.args[0] instanceof URL) && (_85308e43d297.args[0] = (0, 
            _6c53fc11c1e7.Oy)(_85308e43d297.args[0], _e408115c538a.meta));
          }
        }), _e408115c538a.Proxy("Cache.prototype.addAll", {
          apply(_85308e43d297) {
            for (let _0948873bd781 = 0; _0948873bd781 < _85308e43d297.args[0].length; _0948873bd781++) ("string" == typeof _85308e43d297.args[0][_0948873bd781] || _85308e43d297.args[0][_0948873bd781] instanceof URL) && (_85308e43d297.args[0][_0948873bd781] = (0, 
            _6c53fc11c1e7.Oy)(_85308e43d297.args[0][_0948873bd781], _e408115c538a.meta));
          }
        }), _e408115c538a.Proxy("Cache.prototype.put", {
          apply(_85308e43d297) {
            ("string" == typeof _85308e43d297.args[0] || _85308e43d297.args[0] instanceof URL) && (_85308e43d297.args[0] = (0, 
            _6c53fc11c1e7.Oy)(_85308e43d297.args[0], _e408115c538a.meta));
          }
        }), _e408115c538a.Proxy("Cache.prototype.match", {
          apply(_85308e43d297) {
            ("string" == typeof _85308e43d297.args[0] || _85308e43d297.args[0] instanceof URL) && (_85308e43d297.args[0] = (0, 
            _6c53fc11c1e7.Oy)(_85308e43d297.args[0], _e408115c538a.meta));
          }
        }), _e408115c538a.Proxy("Cache.prototype.matchAll", {
          apply(_85308e43d297) {
            (_85308e43d297.args[0] && "string" == typeof _85308e43d297.args[0] || _85308e43d297.args[0] && _85308e43d297.args[0] instanceof URL) && (_85308e43d297.args[0] = (0, 
            _6c53fc11c1e7.Oy)(_85308e43d297.args[0], _e408115c538a.meta));
          }
        }), _e408115c538a.Proxy("Cache.prototype.keys", {
          apply(_85308e43d297) {
            (_85308e43d297.args[0] && "string" == typeof _85308e43d297.args[0] || _85308e43d297.args[0] && _85308e43d297.args[0] instanceof URL) && (_85308e43d297.args[0] = (0, 
            _6c53fc11c1e7.Oy)(_85308e43d297.args[0], _e408115c538a.meta));
          }
        }), _e408115c538a.Proxy("Cache.prototype.delete", {
          apply(_85308e43d297) {
            ("string" == typeof _85308e43d297.args[0] || _85308e43d297.args[0] instanceof URL) && (_85308e43d297.args[0] = (0, 
            _6c53fc11c1e7.Oy)(_85308e43d297.args[0], _e408115c538a.meta));
          }
        });
      }
    },
    6627: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        default: () => i
      });
      var _6c53fc11c1e7 = _0948873bd781(1323);
      function i(_e408115c538a, _85308e43d297) {
        let r = _e408115c538a => {
          let _0948873bd781 = _e408115c538a.split("."), _6c53fc11c1e7 = _0948873bd781.pop(), _06df19f8be6e = _0948873bd781.reduce((_e408115c538a, _85308e43d297) => _e408115c538a?.[_85308e43d297], _85308e43d297);
          _06df19f8be6e && _6c53fc11c1e7 && _6c53fc11c1e7 in _06df19f8be6e && delete _06df19f8be6e[_6c53fc11c1e7];
        };
        r("BarcodeDetector"), r("FaceDetector"), r("TextDetector"), _6c53fc11c1e7.iswindow && r("ServiceWorkerRegistration.prototype.sync"), 
        _6c53fc11c1e7.isemulatedsw && (r("SyncManager"), r("SyncEvent")), r("TrustedHTML"), 
        r("TrustedScript"), r("TrustedScriptURL"), r("TrustedTypePolicy"), r("TrustedTypePolicyFactory"), 
        _85308e43d297.__defineGetter__("trustedTypes", () => void 0), r("Navigator.prototype.joinAdInterestGroup"), 
        _6c53fc11c1e7.iswindow && (r("MediaDevices.prototype.setCaptureHandleConfig"), r("Navigator.prototype.bluetooth"), 
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
    582: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        argdbg: () => a,
        default: () => s,
        enabled: () => i
      });
      var _6c53fc11c1e7 = _0948873bd781(37);
      let i = _e408115c538a => (0, _6c53fc11c1e7.U5)("captureErrors", _e408115c538a.url);
      function a(_e408115c538a, _85308e43d297 = []) {
        switch (typeof _e408115c538a) {
         case "string":
          break;

         case "object":
          if (_e408115c538a && _e408115c538a[Symbol.iterator] && "function" == typeof _e408115c538a[Symbol.iterator]) for (let _0948873bd781 in _e408115c538a) {
            let _6c53fc11c1e7 = Object.getOwnPropertyDescriptor(_e408115c538a, _0948873bd781);
            if (_6c53fc11c1e7 && _6c53fc11c1e7.get) continue;
            let _06df19f8be6e = _e408115c538a[_0948873bd781];
            _85308e43d297.includes(_06df19f8be6e) || (_85308e43d297.push(_06df19f8be6e), a(_06df19f8be6e, _85308e43d297));
          }
        }
      }
      function s(_e408115c538a, _85308e43d297) {
        let _0948873bd781 = console.warn;
        _85308e43d297.$scramerr = function(_e408115c538a) {
          _0948873bd781("CAUGHT ERROR", _e408115c538a);
        }, _85308e43d297.$scramdbg = function(_e408115c538a, _85308e43d297) {
          return _e408115c538a && "object" == typeof _e408115c538a && _e408115c538a.length > 0 && a(_e408115c538a), 
          a(_85308e43d297), _85308e43d297;
        }, _e408115c538a.Proxy("Promise.prototype.catch", {
          apply(_e408115c538a) {
            _e408115c538a.args[0] && (_e408115c538a.args[0] = new Proxy(_e408115c538a.args[0], {
              apply(_e408115c538a, _85308e43d297, _0948873bd781) {
                Reflect.apply(_e408115c538a, _85308e43d297, _0948873bd781);
              }
            }));
          }
        });
      }
    },
    6143: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        default: () => s,
        enabled: () => a
      });
      var _6c53fc11c1e7 = _0948873bd781(37), _06df19f8be6e = _0948873bd781(1472);
      let a = _e408115c538a => (0, _6c53fc11c1e7.U5)("cleanErrors", _e408115c538a.url);
      function s(_e408115c538a, _85308e43d297) {
        let r = (_e408115c538a, _85308e43d297) => {
          let _0948873bd781 = _e408115c538a.stack;
          for (let _e408115c538a = 0; _e408115c538a < _85308e43d297.length; _e408115c538a++) {
            let _fbbba1a672e2 = _85308e43d297[_e408115c538a].getFileName();
            try {
              if (_fbbba1a672e2.endsWith(_6c53fc11c1e7.$W.files.all)) {
                let _e408115c538a = _0948873bd781.split("\n"), _85308e43d297 = _e408115c538a.find(_e408115c538a => _e408115c538a.includes(_fbbba1a672e2));
                _e408115c538a.splice(_85308e43d297, 1), _0948873bd781 = _e408115c538a.join("\n");
                continue;
              }
            } catch {}
            try {
              _0948873bd781 = _0948873bd781.replaceAll(_fbbba1a672e2, (0, _06df19f8be6e.v2)(_fbbba1a672e2));
            } catch {}
          }
          return _0948873bd781;
        };
        _e408115c538a.Trap("Error.prepareStackTrace", {
          get: _e408115c538a => r,
          set(_e408115c538a) {}
        });
      }
    },
    591: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        default: () => a,
        indirectEval: () => s
      });
      var _6c53fc11c1e7 = _0948873bd781(37), _06df19f8be6e = _0948873bd781(1478);
      function a(_e408115c538a, _85308e43d297) {
        Object.defineProperty(_85308e43d297, _6c53fc11c1e7.$W.globals.rewritefn, {
          value: function(_85308e43d297) {
            return "string" != typeof _85308e43d297 ? _85308e43d297 : (0, _06df19f8be6e.o)(_85308e43d297, "(direct eval proxy)", _e408115c538a.meta);
          },
          writable: !1,
          configurable: !1
        });
      }
      function s(_e408115c538a, _85308e43d297) {
        let _0948873bd781;
        return "string" != typeof _85308e43d297 ? _85308e43d297 : ("accounts.google.com" === this.url.hostname ? (console.log("USING STRICT EVAL - BOTGUARD"), 
        _0948873bd781 = Function(`\n\t\t\t"use strict";\n\t\t\treturn eval;\n\t\t`)) : _0948873bd781 = this.global.eval, 
        _0948873bd781((0, _06df19f8be6e.o)(_85308e43d297, "(indirect eval proxy)", this.meta)));
      }
    },
    3481: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        default: () => o
      });
      var _6c53fc11c1e7 = _0948873bd781(1323), _06df19f8be6e = _0948873bd781(1472), _fbbba1a672e2 = _0948873bd781(94);
      let _1087e8da3d1c = Symbol.for("studyjet original onevent function");
      function o(_e408115c538a, _85308e43d297) {
        let _0948873bd781 = {
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
              return "object" == typeof this.data && "$studyjet$origin" in this.data ? this.data.$studyjet$origin : _e408115c538a.url.origin;
            },
            data() {
              return "object" == typeof this.data && "$studyjet$data" in this.data ? this.data.$studyjet$data : this.data;
            }
          },
          hashchange: {
            oldURL() {
              return (0, _06df19f8be6e.v2)(this.oldURL);
            },
            newURL() {
              return (0, _06df19f8be6e.v2)(this.newURL);
            }
          },
          storage: {
            _init() {
              return this.key.startsWith(_e408115c538a.url.host + "@");
            },
            key() {
              return this.key.substring(this.key.indexOf("@") + 1);
            },
            url() {
              return (0, _06df19f8be6e.v2)(this.url);
            }
          }
        };
        function o(_e408115c538a) {
          return new Proxy(_e408115c538a, {
            apply(_e408115c538a, _6c53fc11c1e7, _06df19f8be6e) {
              let _1087e8da3d1c = _06df19f8be6e[0];
              if (_1087e8da3d1c.isTrusted) {
                let _e408115c538a = _1087e8da3d1c.type;
                if (_e408115c538a in _0948873bd781) {
                  let _85308e43d297 = _0948873bd781[_e408115c538a];
                  if (_85308e43d297._init && !1 === _85308e43d297._init.call(_1087e8da3d1c)) return;
                  _06df19f8be6e[0] = new Proxy(_1087e8da3d1c, {
                    get(_e408115c538a, _0948873bd781, _6c53fc11c1e7) {
                      let _06df19f8be6e = Reflect.get(_e408115c538a, _0948873bd781);
                      return _0948873bd781 in _85308e43d297 ? _85308e43d297[_0948873bd781].call(_e408115c538a) : "function" == typeof _06df19f8be6e ? new Proxy(_06df19f8be6e, {
                        apply: (_e408115c538a, _85308e43d297, _0948873bd781) => _85308e43d297 === _6c53fc11c1e7 ? Reflect.apply(_e408115c538a, _1087e8da3d1c, _0948873bd781) : Reflect.apply(_e408115c538a, _85308e43d297, _0948873bd781)
                      }) : _06df19f8be6e;
                    },
                    getOwnPropertyDescriptor: _fbbba1a672e2.getOwnPropertyDescriptorHandler
                  });
                }
              }
              return _85308e43d297.event || Object.defineProperty(_85308e43d297, "event", {
                get: () => _06df19f8be6e[0],
                configurable: !0
              }), Reflect.apply(_e408115c538a, _6c53fc11c1e7, _06df19f8be6e);
            },
            getOwnPropertyDescriptor: _fbbba1a672e2.getOwnPropertyDescriptorHandler
          });
        }
        _e408115c538a.Proxy("EventTarget.prototype.addEventListener", {
          apply(_85308e43d297) {
            if ("function" != typeof _85308e43d297.args[1]) return;
            let _0948873bd781 = _85308e43d297.args[1], _6c53fc11c1e7 = o(_0948873bd781);
            _85308e43d297.args[1] = _6c53fc11c1e7;
            let _06df19f8be6e = _e408115c538a.eventcallbacks.get(_85308e43d297.this);
            (_06df19f8be6e ||= []).push({
              event: _85308e43d297.args[0],
              originalCallback: _0948873bd781,
              proxiedCallback: _6c53fc11c1e7
            }), _e408115c538a.eventcallbacks.set(_85308e43d297.this, _06df19f8be6e);
          }
        }), _e408115c538a.Proxy("EventTarget.prototype.removeEventListener", {
          apply(_85308e43d297) {
            if ("function" != typeof _85308e43d297.args[1]) return;
            let _0948873bd781 = _e408115c538a.eventcallbacks.get(_85308e43d297.this);
            if (!_0948873bd781) return;
            let _6c53fc11c1e7 = _0948873bd781.findIndex(_e408115c538a => _e408115c538a.event === _85308e43d297.args[0] && _e408115c538a.originalCallback === _85308e43d297.args[1]);
            if (-1 === _6c53fc11c1e7) return;
            let _06df19f8be6e = _0948873bd781.splice(_6c53fc11c1e7, 1);
            _e408115c538a.eventcallbacks.set(_85308e43d297.this, _0948873bd781), _85308e43d297.args[1] = _06df19f8be6e[0].proxiedCallback;
          }
        });
        let _ce231c24b42d = [ _85308e43d297.self, _85308e43d297.MessagePort.prototype ];
        for (let _06df19f8be6e of (_6c53fc11c1e7.iswindow && _ce231c24b42d.push(_85308e43d297.HTMLElement.prototype), 
        _85308e43d297.Worker && _ce231c24b42d.push(_85308e43d297.Worker.prototype), _ce231c24b42d)) for (let _85308e43d297 of Reflect.ownKeys(_06df19f8be6e)) if ("string" == typeof _85308e43d297 && _85308e43d297.startsWith("on") && _0948873bd781[_85308e43d297.slice(2)]) {
          let _0948873bd781 = _e408115c538a.natives.call("Object.getOwnPropertyDescriptor", null, _06df19f8be6e, _85308e43d297);
          if (!_0948873bd781.get || !_0948873bd781.set || !_0948873bd781.configurable) continue;
          _e408115c538a.RawTrap(_06df19f8be6e, _85308e43d297, {
            get(_e408115c538a) {
              return this[_1087e8da3d1c] ? this[_1087e8da3d1c] : _e408115c538a.get();
            },
            set(_e408115c538a, _85308e43d297) {
              if (this[_1087e8da3d1c] = _85308e43d297, "function" != typeof _85308e43d297) return _e408115c538a.set(_85308e43d297);
              _e408115c538a.set(o(_85308e43d297));
            }
          });
        }
      }
    },
    249: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        default: () => a
      });
      var _6c53fc11c1e7 = _0948873bd781(1478);
      function i(_e408115c538a, _85308e43d297) {
        let _0948873bd781 = _e408115c538a.call().toString(), _06df19f8be6e = (0, _6c53fc11c1e7.o)(`return ${_0948873bd781}`, "(function proxy)", _85308e43d297.meta);
        _e408115c538a.return(_e408115c538a.fn(_06df19f8be6e)());
      }
      function a(_e408115c538a, _85308e43d297) {
        let _0948873bd781 = {
          apply(_85308e43d297) {
            i(_85308e43d297, _e408115c538a);
          },
          construct(_85308e43d297) {
            i(_85308e43d297, _e408115c538a);
          }
        };
        _e408115c538a.Proxy("Function", _0948873bd781);
        let _6c53fc11c1e7 = _e408115c538a.natives.call("eval", null, "(function () {})").constructor, _06df19f8be6e = _e408115c538a.natives.call("eval", null, "(async function () {})").constructor, _fbbba1a672e2 = _e408115c538a.natives.call("eval", null, "(function* () {})").constructor, _1087e8da3d1c = _e408115c538a.natives.call("eval", null, "(async function* () {})").constructor;
        _e408115c538a.RawProxy(_6c53fc11c1e7.prototype, "constructor", _0948873bd781), _e408115c538a.RawProxy(_06df19f8be6e.prototype, "constructor", _0948873bd781), 
        _e408115c538a.RawProxy(_fbbba1a672e2.prototype, "constructor", _0948873bd781), _e408115c538a.RawProxy(_1087e8da3d1c.prototype, "constructor", _0948873bd781);
      }
    },
    2468: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        default: () => a
      });
      var _6c53fc11c1e7 = _0948873bd781(37), _06df19f8be6e = _0948873bd781(1472);
      function a(_e408115c538a, _85308e43d297) {
        let _0948873bd781 = _e408115c538a.natives.call("Function", null, "url", "return import(url)");
        Object.defineProperty(_85308e43d297, _6c53fc11c1e7.$W.globals.importfn, {
          value: function(_85308e43d297, _6c53fc11c1e7) {
            let _fbbba1a672e2 = new URL(_6c53fc11c1e7, _85308e43d297).href;
            return _6c53fc11c1e7.includes(":") || _6c53fc11c1e7.startsWith("/") || _6c53fc11c1e7.startsWith(".") || _6c53fc11c1e7.startsWith("..") ? _0948873bd781(`${(0, 
            _06df19f8be6e.Oy)(_fbbba1a672e2, _e408115c538a.meta)}?type=module`) : _0948873bd781(_6c53fc11c1e7);
          },
          writable: !1,
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_85308e43d297, _6c53fc11c1e7.$W.globals.metafn, {
          value: function(_e408115c538a, _85308e43d297) {
            return _e408115c538a.url = _85308e43d297, _e408115c538a.resolve = function(_e408115c538a) {
              return new URL(_e408115c538a, _85308e43d297).href;
            }, _e408115c538a;
          },
          writable: !1,
          configurable: !1,
          enumerable: !1
        });
      }
    },
    4338: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      function n(_e408115c538a) {
        _e408115c538a.Proxy("IDBFactory.prototype.open", {
          apply(_85308e43d297) {
            _85308e43d297.args[0] = `${_e408115c538a.url.origin}@${_85308e43d297.args[0]}`;
          }
        }), _e408115c538a.Trap("IDBDatabase.prototype.name", {
          get(_e408115c538a) {
            let _85308e43d297 = _e408115c538a.get();
            return _85308e43d297.substring(_85308e43d297.indexOf("@") + 1);
          }
        });
      }
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        default: () => n
      });
    },
    6593: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      function n(_e408115c538a) {
        _e408115c538a.Proxy("StorageManager.prototype.getDirectory", {
          apply(_85308e43d297) {
            let _0948873bd781 = _85308e43d297.call();
            _85308e43d297.return((async () => {
              let _85308e43d297 = await _0948873bd781, _6c53fc11c1e7 = await _85308e43d297.getDirectoryHandle(`${_e408115c538a.url.origin.replace(/\/|\s|\./g, "-")}`, {
                create: !0
              });
              return Object.defineProperty(_6c53fc11c1e7, "name", {
                value: "",
                writable: !1
              }), _6c53fc11c1e7;
            })());
          }
        });
      }
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        default: () => n
      });
    },
    1320: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        default: () => s
      });
      var _6c53fc11c1e7 = _0948873bd781(1323), _06df19f8be6e = _0948873bd781(2794), _fbbba1a672e2 = _0948873bd781(1914);
      function s(_e408115c538a) {
        _6c53fc11c1e7.iswindow && _e408115c538a.Proxy("window.postMessage", {
          apply(_e408115c538a) {
            let {constructor: {constructor: _85308e43d297}} = "object" == typeof _e408115c538a.args[0] && null !== _e408115c538a.args[0] ? _e408115c538a.args[0] : "object" == typeof _e408115c538a.args[2] && null !== _e408115c538a.args[2] ? _e408115c538a.args[2] : _e408115c538a.this && _fbbba1a672e2.POLLUTANT in _e408115c538a.this && "object" == typeof _e408115c538a.this[_fbbba1a672e2.POLLUTANT] && null !== _e408115c538a.this[_fbbba1a672e2.POLLUTANT] ? _e408115c538a.this[_fbbba1a672e2.POLLUTANT] : {}, _0948873bd781 = _85308e43d297("return globalThis")()[_06df19f8be6e.pX], _6c53fc11c1e7 = _85308e43d297("...args", "this(...args)");
            _e408115c538a.args[0] = {
              $studyjet$messagetype: "window",
              $studyjet$origin: _0948873bd781.url.origin,
              $studyjet$data: _e408115c538a.args[0]
            }, "string" == typeof _e408115c538a.args[1] && (_e408115c538a.args[1] = "*"), "object" == typeof _e408115c538a.args[1] && (_e408115c538a.args[1].targetOrigin = "*"), 
            _e408115c538a.return(_6c53fc11c1e7.call(_e408115c538a.fn, ..._e408115c538a.args));
          }
        });
        let _85308e43d297 = [ "MessagePort.prototype.postMessage" ];
        self.Worker && _85308e43d297.push("Worker.prototype.postMessage"), _6c53fc11c1e7.iswindow || _85308e43d297.push("self.postMessage"), 
        _e408115c538a.Proxy(_85308e43d297, {
          apply(_e408115c538a) {
            _e408115c538a.args[0] = {
              $studyjet$messagetype: "worker",
              $studyjet$data: _e408115c538a.args[0]
            };
          }
        });
      }
    },
    1914: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        POLLUTANT: () => _06df19f8be6e,
        default: () => a
      });
      var _6c53fc11c1e7 = _0948873bd781(37);
      let _06df19f8be6e = Symbol.for("studyjet realm pollutant");
      function a(_e408115c538a, _85308e43d297) {
        Object.defineProperty(_85308e43d297.Object.prototype, _6c53fc11c1e7.$W.globals.setrealmfn, {
          value(_e408115c538a) {
            return Object.defineProperty(this, _06df19f8be6e, {
              value: _e408115c538a,
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
    9701: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        default: () => i
      });
      var _6c53fc11c1e7 = _0948873bd781(1472);
      function i(_e408115c538a) {
        _e408115c538a.Proxy("EventSource", {
          construct(_85308e43d297) {
            _85308e43d297.args[0] = (0, _6c53fc11c1e7.Oy)(_85308e43d297.args[0], _e408115c538a.meta);
          }
        }), _e408115c538a.Trap("EventSource.prototype.url", {
          get(_e408115c538a) {
            (0, _6c53fc11c1e7.v2)(_e408115c538a.get());
          }
        });
      }
    },
    6972: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        default: () => a
      });
      var _6c53fc11c1e7 = _0948873bd781(1323), _06df19f8be6e = _0948873bd781(1472);
      function a(_e408115c538a) {
        _e408115c538a.Proxy("fetch", {
          apply(_85308e43d297) {
            ("string" == typeof _85308e43d297.args[0] || _85308e43d297.args[0] instanceof URL) && (_85308e43d297.args[0] = (0, 
            _06df19f8be6e.Oy)(_85308e43d297.args[0], _e408115c538a.meta), _6c53fc11c1e7.isemulatedsw && (_85308e43d297.args[0] += "?from=swruntime"));
          }
        }), _e408115c538a.Proxy("Request", {
          construct(_85308e43d297) {
            ("string" == typeof _85308e43d297.args[0] || _85308e43d297.args[0] instanceof URL) && (_85308e43d297.args[0] = (0, 
            _06df19f8be6e.Oy)(_85308e43d297.args[0], _e408115c538a.meta), _6c53fc11c1e7.isemulatedsw && (_85308e43d297.args[0] += "?from=swruntime"));
          }
        }), _e408115c538a.Trap("Response.prototype.url", {
          get: _e408115c538a => (0, _06df19f8be6e.v2)(_e408115c538a.get())
        }), _e408115c538a.Trap("Request.prototype.url", {
          get: _e408115c538a => (0, _06df19f8be6e.v2)(_e408115c538a.get())
        });
      }
    },
    9931: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      function n(_e408115c538a, _85308e43d297) {
        let _0948873bd781 = new WeakMap, _6c53fc11c1e7 = new WeakMap;
        _e408115c538a.Proxy("WebSocket", {
          construct(_6c53fc11c1e7) {
            let _06df19f8be6e = new EventTarget;
            Object.setPrototypeOf(_06df19f8be6e, _6c53fc11c1e7.fn.prototype), _06df19f8be6e.constructor = _6c53fc11c1e7.fn;
            let _fbbba1a672e2 = _e408115c538a.bare.createWebSocket(_6c53fc11c1e7.args[0], _6c53fc11c1e7.args[1], null, {
              "User-Agent": _85308e43d297.navigator.userAgent,
              Origin: _e408115c538a.url.origin
            }), _1087e8da3d1c = {
              extensions: "",
              protocol: "",
              url: _6c53fc11c1e7.args[0],
              binaryType: "blob",
              barews: _fbbba1a672e2,
              onclose: null,
              onerror: null,
              onmessage: null,
              onopen: null
            };
            function o(_e408115c538a) {
              _1087e8da3d1c["on" + _e408115c538a.type]?.(new Proxy(_e408115c538a, {
                get: (_e408115c538a, _85308e43d297) => "isTrusted" === _85308e43d297 || Reflect.get(_e408115c538a, _85308e43d297)
              })), _06df19f8be6e.dispatchEvent(_e408115c538a);
            }
            _fbbba1a672e2.addEventListener("open", () => {
              o(new Event("open"));
            }), _fbbba1a672e2.addEventListener("close", _e408115c538a => {
              o(new CloseEvent("close", _e408115c538a));
            }), _fbbba1a672e2.addEventListener("message", async _e408115c538a => {
              let _85308e43d297 = _e408115c538a.data;
              "string" == typeof _85308e43d297 || ("byteLength" in _85308e43d297 ? "blob" === _1087e8da3d1c.binaryType ? _85308e43d297 = new Blob([ _85308e43d297 ]) : Object.setPrototypeOf(_85308e43d297, ArrayBuffer.prototype) : "arrayBuffer" in _85308e43d297 && "arraybuffer" === _1087e8da3d1c.binaryType && Object.setPrototypeOf(_85308e43d297 = await _85308e43d297.arrayBuffer(), ArrayBuffer.prototype)), 
              o(new MessageEvent("message", {
                data: _85308e43d297,
                origin: _e408115c538a.origin,
                lastEventId: _e408115c538a.lastEventId,
                source: _e408115c538a.source,
                ports: _e408115c538a.ports
              }));
            }), _fbbba1a672e2.addEventListener("error", () => {
              o(new Event("error"));
            }), _0948873bd781.set(_06df19f8be6e, _1087e8da3d1c), _6c53fc11c1e7.return(_06df19f8be6e);
          }
        }), _e408115c538a.Trap("WebSocket.prototype.binaryType", {
          get: _e408115c538a => _0948873bd781.get(_e408115c538a.this).binaryType,
          set(_e408115c538a, _85308e43d297) {
            let _6c53fc11c1e7 = _0948873bd781.get(_e408115c538a.this);
            ("blob" === _85308e43d297 || "arraybuffer" === _85308e43d297) && (_6c53fc11c1e7.binaryType = _85308e43d297);
          }
        }), _e408115c538a.Trap("WebSocket.prototype.bufferedAmount", {
          get: () => 0
        }), _e408115c538a.Trap("WebSocket.prototype.extensions", {
          get: _e408115c538a => _0948873bd781.get(_e408115c538a.this).extensions
        }), _e408115c538a.Trap("WebSocket.prototype.onclose", {
          get: _e408115c538a => _0948873bd781.get(_e408115c538a.this).onclose,
          set(_e408115c538a, _85308e43d297) {
            _0948873bd781.get(_e408115c538a.this).onclose = _85308e43d297;
          }
        }), _e408115c538a.Trap("WebSocket.prototype.onerror", {
          get: _e408115c538a => _0948873bd781.get(_e408115c538a.this).onerror,
          set(_e408115c538a, _85308e43d297) {
            _0948873bd781.get(_e408115c538a.this).onerror = _85308e43d297;
          }
        }), _e408115c538a.Trap("WebSocket.prototype.onmessage", {
          get: _e408115c538a => _0948873bd781.get(_e408115c538a.this).onmessage,
          set(_e408115c538a, _85308e43d297) {
            _0948873bd781.get(_e408115c538a.this).onmessage = _85308e43d297;
          }
        }), _e408115c538a.Trap("WebSocket.prototype.onopen", {
          get: _e408115c538a => _0948873bd781.get(_e408115c538a.this).onopen,
          set(_e408115c538a, _85308e43d297) {
            _0948873bd781.get(_e408115c538a.this).onopen = _85308e43d297;
          }
        }), _e408115c538a.Trap("WebSocket.prototype.url", {
          get: _e408115c538a => _0948873bd781.get(_e408115c538a.this).url
        }), _e408115c538a.Trap("WebSocket.prototype.protocol", {
          get: _e408115c538a => _0948873bd781.get(_e408115c538a.this).protocol
        }), _e408115c538a.Trap("WebSocket.prototype.readyState", {
          get: _e408115c538a => _0948873bd781.get(_e408115c538a.this).barews.readyState
        }), _e408115c538a.Proxy("WebSocket.prototype.send", {
          apply(_e408115c538a) {
            let _85308e43d297 = _0948873bd781.get(_e408115c538a.this);
            _e408115c538a.return(_85308e43d297.barews.send(_e408115c538a.args[0]));
          }
        }), _e408115c538a.Proxy("WebSocket.prototype.close", {
          apply(_e408115c538a) {
            let _85308e43d297 = _0948873bd781.get(_e408115c538a.this);
            void 0 === _e408115c538a.args[0] && (_e408115c538a.args[0] = 1e3), void 0 === _e408115c538a.args[1] && (_e408115c538a.args[1] = ""), 
            _e408115c538a.return(_85308e43d297.barews.close(_e408115c538a.args[0], _e408115c538a.args[1]));
          }
        }), _e408115c538a.Proxy("WebSocketStream", {
          construct(_0948873bd781) {
            let _06df19f8be6e, _fbbba1a672e2, _1087e8da3d1c, _ce231c24b42d = {};
            Object.setPrototypeOf(_ce231c24b42d, _0948873bd781.fn.prototype), _ce231c24b42d.constructor = _0948873bd781.fn;
            let _5cb021885ef6 = _e408115c538a.bare.createWebSocket(_0948873bd781.args[0], _0948873bd781.args[1], null, {
              "User-Agent": _85308e43d297.navigator.userAgent,
              Origin: _e408115c538a.url.origin
            });
            _0948873bd781.args[1]?.signal.addEventListener("abort", () => {
              _5cb021885ef6.close(1e3, "");
            });
            let _2b09e1ca183a = {
              extensions: "",
              protocol: "",
              url: _0948873bd781.args[0],
              barews: _5cb021885ef6,
              opened: new Promise((_e408115c538a, _85308e43d297) => {
                _06df19f8be6e = _e408115c538a, _1087e8da3d1c = _85308e43d297;
              }),
              closed: new Promise(_e408115c538a => {
                _fbbba1a672e2 = _e408115c538a;
              }),
              readable: new ReadableStream({
                start(_e408115c538a) {
                  _5cb021885ef6.addEventListener("message", async _85308e43d297 => {
                    let _0948873bd781 = _85308e43d297.data;
                    "string" == typeof _0948873bd781 || ("byteLength" in _0948873bd781 ? Object.setPrototypeOf(_0948873bd781, ArrayBuffer.prototype) : "arrayBuffer" in _0948873bd781 && Object.setPrototypeOf(_0948873bd781 = await _0948873bd781.arrayBuffer(), ArrayBuffer.prototype)), 
                    _e408115c538a.enqueue(_0948873bd781);
                  });
                }
              }),
              writable: new WritableStream({
                write(_e408115c538a) {
                  _5cb021885ef6.send(_e408115c538a);
                }
              })
            };
            _5cb021885ef6.addEventListener("open", () => {
              _06df19f8be6e({
                readable: _2b09e1ca183a.readable,
                writable: _2b09e1ca183a.writable,
                extensions: _2b09e1ca183a.extensions,
                protocol: _2b09e1ca183a.protocol
              });
            }), _5cb021885ef6.addEventListener("close", _e408115c538a => {
              _fbbba1a672e2({
                code: _e408115c538a.code,
                reason: _e408115c538a.reason
              });
            }), _5cb021885ef6.addEventListener("error", _e408115c538a => {
              _1087e8da3d1c(_e408115c538a);
            }), _6c53fc11c1e7.set(_ce231c24b42d, _2b09e1ca183a), _0948873bd781.return(_ce231c24b42d);
          }
        }), _e408115c538a.Trap("WebSocketStream.prototype.closed", {
          get: _e408115c538a => _6c53fc11c1e7.get(_e408115c538a.this).closed
        }), _e408115c538a.Trap("WebSocketStream.prototype.opened", {
          get: _e408115c538a => _6c53fc11c1e7.get(_e408115c538a.this).opened
        }), _e408115c538a.Trap("WebSocketStream.prototype.url", {
          get: _e408115c538a => _6c53fc11c1e7.get(_e408115c538a.this).url
        }), _e408115c538a.Proxy("WebSocketStream.prototype.close", {
          apply(_e408115c538a) {
            let _85308e43d297 = _6c53fc11c1e7.get(_e408115c538a.this);
            return _e408115c538a.args[0] ? (void 0 === _e408115c538a.args[0].closeCode && (_e408115c538a.args[0].closeCode = 1e3), 
            void 0 === _e408115c538a.args[0].reason && (_e408115c538a.args[0].reason = ""), 
            _e408115c538a.return(_85308e43d297.barews.close(_e408115c538a.args[0].closeCode, _e408115c538a.args[0].reason))) : _e408115c538a.return(_85308e43d297.barews.close(1e3, ""));
          }
        });
      }
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        default: () => n
      });
    },
    248: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        default: () => a
      });
      var _6c53fc11c1e7 = _0948873bd781(37), _06df19f8be6e = _0948873bd781(1472);
      function a(_e408115c538a, _85308e43d297) {
        let _0948873bd781;
        _85308e43d297.Worker && (0, _6c53fc11c1e7.U5)("syncxhr", _e408115c538a.url) && (_0948873bd781 = _e408115c538a.natives.construct("Worker", _6c53fc11c1e7.$W.files.sync));
        let _fbbba1a672e2 = Symbol("xhr original args"), _1087e8da3d1c = Symbol("xhr headers");
        _e408115c538a.Proxy("XMLHttpRequest.prototype.open", {
          apply(_85308e43d297) {
            _85308e43d297.args[1] && (_85308e43d297.args[1] = (0, _06df19f8be6e.Oy)(_85308e43d297.args[1], _e408115c538a.meta)), 
            void 0 === _85308e43d297.args[2] && (_85308e43d297.args[2] = !0), _85308e43d297.this[_fbbba1a672e2] = _85308e43d297.args;
          }
        }), _e408115c538a.Proxy("XMLHttpRequest.prototype.setRequestHeader", {
          apply(_e408115c538a) {
            (_e408115c538a.this[_1087e8da3d1c] || (_e408115c538a.this[_1087e8da3d1c] = {}))[_e408115c538a.args[0]] = _e408115c538a.args[1];
          }
        }), _e408115c538a.Proxy("XMLHttpRequest.prototype.send", {
          apply(_85308e43d297) {
            let _06df19f8be6e = _85308e43d297.this[_fbbba1a672e2];
            if (!_06df19f8be6e || _06df19f8be6e[2]) return;
            if (!(0, _6c53fc11c1e7.U5)("syncxhr", _e408115c538a.url)) return console.warn("ignoring request - sync xhr disabled in flags"), 
            _85308e43d297.return(void 0);
            let _ce231c24b42d = new SharedArrayBuffer(1024, {
              maxByteLength: 2147483647
            }), _5cb021885ef6 = new DataView(_ce231c24b42d);
            _e408115c538a.natives.call("Worker.prototype.postMessage", _0948873bd781, {
              sab: _ce231c24b42d,
              args: _06df19f8be6e,
              headers: _85308e43d297.this[_1087e8da3d1c],
              body: _85308e43d297.args[0]
            });
            let _2b09e1ca183a = performance.now();
            for (;0 === _5cb021885ef6.getUint8(0); ) if (performance.now() - _2b09e1ca183a > 1e3) throw Error("xhr timeout");
            let _f59cf6266889 = _5cb021885ef6.getUint16(1), _1e156e012532 = _5cb021885ef6.getUint32(3), _39d3eae51e3c = new Uint8Array(_1e156e012532);
            _39d3eae51e3c.set(new Uint8Array(_ce231c24b42d.slice(7, 7 + _1e156e012532)));
            let _687b012f5f4d = (new TextDecoder).decode(_39d3eae51e3c), _6c881511c692 = _5cb021885ef6.getUint32(7 + _1e156e012532), _35893396e2ed = new Uint8Array(_6c881511c692);
            _35893396e2ed.set(new Uint8Array(_ce231c24b42d.slice(11 + _1e156e012532, 11 + _1e156e012532 + _6c881511c692)));
            let _e66e402f8d94 = (new TextDecoder).decode(_35893396e2ed);
            _e408115c538a.RawTrap(_85308e43d297.this, "status", {
              get: () => _f59cf6266889
            }), _e408115c538a.RawTrap(_85308e43d297.this, "responseText", {
              get: () => _e66e402f8d94
            }), _e408115c538a.RawTrap(_85308e43d297.this, "response", {
              get: () => "arraybuffer" === _85308e43d297.this.responseType ? _35893396e2ed.buffer : _e66e402f8d94
            }), _e408115c538a.RawTrap(_85308e43d297.this, "responseXML", {
              get: () => (new DOMParser).parseFromString(_e66e402f8d94, "text/xml")
            }), _e408115c538a.RawTrap(_85308e43d297.this, "getAllResponseHeaders", {
              get: () => () => _687b012f5f4d
            }), _e408115c538a.RawTrap(_85308e43d297.this, "getResponseHeader", {
              get: () => _e408115c538a => {
                let _85308e43d297 = RegExp(`^${_e408115c538a}: (.*)$`, "m").exec(_687b012f5f4d);
                return _85308e43d297 ? _85308e43d297[1] : null;
              }
            }), _85308e43d297.return(void 0);
          }
        }), _e408115c538a.Trap("XMLHttpRequest.prototype.responseURL", {
          get: _e408115c538a => (0, _06df19f8be6e.v2)(_e408115c538a.get())
        });
      }
    },
    7418: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        default: () => i
      });
      var _6c53fc11c1e7 = _0948873bd781(1478);
      function i(_e408115c538a, _85308e43d297) {
        _e408115c538a.Proxy([ "setTimeout", "setInterval" ], {
          apply(_85308e43d297) {
            _85308e43d297.args.length > 0 && "string" == typeof _85308e43d297.args[0] && (_85308e43d297.args[0] = (0, 
            _6c53fc11c1e7.o)(_85308e43d297.args[0], "(setTimeout string eval)", _e408115c538a.meta));
          }
        });
      }
    },
    7791: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        default: () => o,
        enabled: () => s
      });
      var _6c53fc11c1e7 = _0948873bd781(37), _06df19f8be6e = _0948873bd781(8665).A;
      let _fbbba1a672e2 = "/*scramtag ", s = _e408115c538a => (0, _6c53fc11c1e7.U5)("sourcemaps", _e408115c538a.url);
      function o(_e408115c538a, _85308e43d297) {
        Object.defineProperty(_85308e43d297, _6c53fc11c1e7.$W.globals.pushsourcemapfn, {
          value: (_85308e43d297, _0948873bd781) => {
            let _6c53fc11c1e7 = performance.now();
            !function(_e408115c538a, _85308e43d297, _0948873bd781) {
              let _6c53fc11c1e7 = Uint8Array.from(_85308e43d297), _06df19f8be6e = new DataView(_6c53fc11c1e7.buffer), _fbbba1a672e2 = new TextDecoder("utf-8"), _1087e8da3d1c = [], _ce231c24b42d = _06df19f8be6e.getUint32(0, !0), _5cb021885ef6 = 4;
              for (let _e408115c538a = 0; _e408115c538a < _ce231c24b42d; _e408115c538a++) {
                let _e408115c538a = _06df19f8be6e.getUint32(_5cb021885ef6, !0);
                _5cb021885ef6 += 4;
                let _85308e43d297 = _06df19f8be6e.getUint32(_5cb021885ef6, !0);
                _5cb021885ef6 += 4;
                let _0948873bd781 = _06df19f8be6e.getUint8(_5cb021885ef6);
                if (_5cb021885ef6 += 1, 0 == _0948873bd781) _1087e8da3d1c.push({
                  type: _0948873bd781,
                  start: _e408115c538a,
                  size: _85308e43d297
                }); else if (1 == _0948873bd781) {
                  let _ce231c24b42d = _e408115c538a + _85308e43d297, _2b09e1ca183a = _06df19f8be6e.getUint32(_5cb021885ef6, !0);
                  _5cb021885ef6 += 4;
                  let _f59cf6266889 = _fbbba1a672e2.decode(_6c53fc11c1e7.subarray(_5cb021885ef6, _5cb021885ef6 + _2b09e1ca183a));
                  _1087e8da3d1c.push({
                    type: _0948873bd781,
                    start: _e408115c538a,
                    end: _ce231c24b42d,
                    str: _f59cf6266889
                  });
                }
              }
              _e408115c538a.box.sourcemaps[_0948873bd781] = _1087e8da3d1c;
            }(_e408115c538a, _85308e43d297, _0948873bd781), _06df19f8be6e.time(_e408115c538a.meta, _6c53fc11c1e7, `scramtag parse for ${_0948873bd781}`);
          },
          enumerable: !1,
          writable: !1,
          configurable: !1
        }), _e408115c538a.Proxy("Function.prototype.toString", {
          apply(_85308e43d297) {
            performance.now(), function(_e408115c538a, _85308e43d297) {
              let _0948873bd781 = _85308e43d297.fn.call(_85308e43d297.this), _6c53fc11c1e7 = function(_e408115c538a) {
                let _85308e43d297 = _e408115c538a.indexOf(_fbbba1a672e2);
                if (-1 === _85308e43d297) return null;
                let _0948873bd781 = _e408115c538a.indexOf("*/", _85308e43d297);
                if (-1 === _0948873bd781) throw console.log(_e408115c538a, _85308e43d297, _0948873bd781), 
                Error("unreachable");
                let _6c53fc11c1e7 = _e408115c538a.substring(_85308e43d297 + 2, _0948873bd781).split(" ");
                if (3 !== _6c53fc11c1e7.length || "scramtag" !== _6c53fc11c1e7[0] || !Number.isSafeInteger(+_6c53fc11c1e7[1])) throw console.log(_e408115c538a, _85308e43d297, _0948873bd781, _6c53fc11c1e7), 
                Error("invalid tag");
                return [ _6c53fc11c1e7[2], _85308e43d297, +_6c53fc11c1e7[1] ];
              }(_0948873bd781);
              if (!_6c53fc11c1e7) return _85308e43d297.return(_0948873bd781);
              let [_06df19f8be6e, _1087e8da3d1c, _ce231c24b42d] = _6c53fc11c1e7, _5cb021885ef6 = _ce231c24b42d - _1087e8da3d1c, _2b09e1ca183a = _5cb021885ef6 + _0948873bd781.length, _f59cf6266889 = _e408115c538a.box.sourcemaps[_06df19f8be6e];
              if (!_f59cf6266889) return console.warn("failed to get rewrites for tag", _06df19f8be6e), 
              _85308e43d297.return(_0948873bd781);
              let _1e156e012532 = 0;
              for (;_1e156e012532 < _f59cf6266889.length; ) if (_f59cf6266889[_1e156e012532].start < _5cb021885ef6) _1e156e012532++; else break;
              let _39d3eae51e3c = _1e156e012532;
              for (;_39d3eae51e3c < _f59cf6266889.length; ) if (function(_e408115c538a) {
                if (0 === _e408115c538a.type) return _e408115c538a.start + _e408115c538a.size;
                if (1 === _e408115c538a.type) return _e408115c538a.end;
                throw "unreachable";
              }(_f59cf6266889[_39d3eae51e3c]) < _2b09e1ca183a) _39d3eae51e3c++; else break;
              let _687b012f5f4d = _f59cf6266889.slice(_1e156e012532, _39d3eae51e3c), _6c881511c692 = "", _35893396e2ed = 0;
              for (let _e408115c538a of _687b012f5f4d) if (_6c881511c692 += _0948873bd781.slice(_35893396e2ed, _e408115c538a.start - _5cb021885ef6), 
              0 === _e408115c538a.type) _35893396e2ed = _e408115c538a.start + _e408115c538a.size - _5cb021885ef6; else if (1 === _e408115c538a.type) _6c881511c692 += _e408115c538a.str, 
              _35893396e2ed = _e408115c538a.end - _5cb021885ef6; else throw "unreachable";
              _6c881511c692 += _0948873bd781.slice(_35893396e2ed), _6c881511c692 = _6c881511c692.replace(`${_fbbba1a672e2}${_ce231c24b42d} ${_06df19f8be6e}*/`, ""), 
              _85308e43d297.return(_6c881511c692);
            }(_e408115c538a, _85308e43d297);
          }
        });
      }
    },
    9399: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        default: () => a
      });
      var _6c53fc11c1e7 = _0948873bd781(4110), _06df19f8be6e = _0948873bd781(1472);
      function a(_e408115c538a, _85308e43d297) {
        _e408115c538a.Proxy("Worker", {
          construct(_85308e43d297) {
            _85308e43d297.args[0] = (0, _06df19f8be6e.Oy)(_85308e43d297.args[0], _e408115c538a.meta) + "?dest=worker", 
            _85308e43d297.args[1] && "module" === _85308e43d297.args[1].type && (_85308e43d297.args[0] += "&type=module");
            let _0948873bd781 = _85308e43d297.call(), _fbbba1a672e2 = new _6c53fc11c1e7.DD;
            (async () => {
              let _85308e43d297 = await _fbbba1a672e2.getInnerPort();
              _e408115c538a.natives.call("Worker.prototype.postMessage", _0948873bd781, {
                $studyjet$type: "baremuxinit",
                port: _85308e43d297
              }, [ _85308e43d297 ]);
            })();
          }
        }), _e408115c538a.Proxy("SharedWorker", {
          construct(_85308e43d297) {
            _85308e43d297.args[0] = (0, _06df19f8be6e.Oy)(_85308e43d297.args[0], _e408115c538a.meta) + "?dest=sharedworker", 
            _85308e43d297.args[1] && "string" == typeof _85308e43d297.args[1] && (_85308e43d297.args[1] = `${_e408115c538a.url.origin}@${_85308e43d297.args[1]}`), 
            _85308e43d297.args[1] && "object" == typeof _85308e43d297.args[1] && ("module" === _85308e43d297.args[1].type && (_85308e43d297.args[0] += "&type=module"), 
            _85308e43d297.args[1].name && (_85308e43d297.args[1].name = `${_e408115c538a.url.origin}@${_85308e43d297.args[1].name}`));
            let _0948873bd781 = _85308e43d297.call(), _fbbba1a672e2 = new _6c53fc11c1e7.DD;
            (async () => {
              let _85308e43d297 = await _fbbba1a672e2.getInnerPort();
              _e408115c538a.natives.call("MessagePort.prototype.postMessage", _0948873bd781.port, {
                $studyjet$type: "baremuxinit",
                port: _85308e43d297
              }, [ _85308e43d297 ]);
            })();
          }
        }), _e408115c538a.Proxy("Worklet.prototype.addModule", {
          apply(_85308e43d297) {
            _85308e43d297.args[0] && (_85308e43d297.args[0] = (0, _06df19f8be6e.Oy)(_85308e43d297.args[0], _e408115c538a.meta) + "?dest=worklet");
          }
        });
      }
    },
    581: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        createWrapFn: () => o,
        default: () => c,
        order: () => _ce231c24b42d
      });
      var _6c53fc11c1e7 = _0948873bd781(1323), _06df19f8be6e = _0948873bd781(2794), _fbbba1a672e2 = _0948873bd781(37), _1087e8da3d1c = _0948873bd781(591);
      function o(_e408115c538a, _85308e43d297) {
        return function(_0948873bd781, _fbbba1a672e2) {
          if (_0948873bd781 === _85308e43d297.location) return _e408115c538a.locationProxy;
          if (_0948873bd781 === _85308e43d297.eval) return _1087e8da3d1c.indirectEval.bind(_e408115c538a, _fbbba1a672e2);
          if (_6c53fc11c1e7.iswindow) {
            if (_0948873bd781 === _85308e43d297.parent) if (_06df19f8be6e.pX in _85308e43d297.parent) return _85308e43d297.parent; else return _85308e43d297; else if (_0948873bd781 === _85308e43d297.top) {
              let _e408115c538a = _85308e43d297;
              for (;;) {
                let _85308e43d297 = _e408115c538a.parent.self;
                if (_85308e43d297 === _e408115c538a || !(_06df19f8be6e.pX in _85308e43d297)) break;
                _e408115c538a = _85308e43d297;
              }
              return _e408115c538a;
            }
          }
          return _0948873bd781;
        };
      }
      let _ce231c24b42d = 4;
      function c(_e408115c538a, _85308e43d297) {
        Object.defineProperty(_85308e43d297, _fbbba1a672e2.$W.globals.wrapfn, {
          value: _e408115c538a.wrapfn,
          writable: !1,
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_85308e43d297, _fbbba1a672e2.$W.globals.wrappropertyfn, {
          value: function(_e408115c538a) {
            return "location" === _e408115c538a || "parent" === _e408115c538a || "top" === _e408115c538a || "eval" === _e408115c538a ? _fbbba1a672e2.$W.globals.wrappropertybase + _e408115c538a : _e408115c538a;
          },
          writable: !1,
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_85308e43d297, _fbbba1a672e2.$W.globals.cleanrestfn, {
          value: function(_e408115c538a) {},
          writable: !1,
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_85308e43d297.Object.prototype, _fbbba1a672e2.$W.globals.wrappropertybase + "location", {
          get: function() {
            return this === _85308e43d297 || this === _85308e43d297.document ? _e408115c538a.locationProxy : this.location;
          },
          set(_0948873bd781) {
            if (this === _85308e43d297 || this === _85308e43d297.document) {
              _e408115c538a.url = _0948873bd781;
              return;
            }
            this.location = _0948873bd781;
          },
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_85308e43d297.Object.prototype, _fbbba1a672e2.$W.globals.wrappropertybase + "parent", {
          get: function() {
            return _e408115c538a.wrapfn(this.parent, !1);
          },
          set(_e408115c538a) {
            this.parent = _e408115c538a;
          },
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_85308e43d297.Object.prototype, _fbbba1a672e2.$W.globals.wrappropertybase + "top", {
          get: function() {
            return _e408115c538a.wrapfn(this.top, !1);
          },
          set(_e408115c538a) {
            this.top = _e408115c538a;
          },
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_85308e43d297.Object.prototype, _fbbba1a672e2.$W.globals.wrappropertybase + "eval", {
          get: function() {
            return _e408115c538a.wrapfn(this.eval, !0);
          },
          set(_e408115c538a) {
            this.eval = _e408115c538a;
          },
          configurable: !1,
          enumerable: !1
        }), _85308e43d297.$scramitize = function(_e408115c538a) {
          return location, _6c53fc11c1e7.iswindow && _85308e43d297.top, "string" == typeof _e408115c538a && _e408115c538a.includes("studyjet"), 
          "string" == typeof _e408115c538a && _e408115c538a.includes(location.origin), _e408115c538a;
        }, Object.defineProperty(_85308e43d297, _fbbba1a672e2.$W.globals.trysetfn, {
          value: function(_0948873bd781, _6c53fc11c1e7, _06df19f8be6e) {
            return _0948873bd781 instanceof _85308e43d297.Location && (_e408115c538a.locationProxy.href = _06df19f8be6e, 
            !0);
          },
          writable: !1,
          configurable: !1
        });
      }
    },
    1229: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        SingletonBox: () => n
      });
      class n {
        ownerclient;
        clients=[];
        globals=new Map;
        documents=new Map;
        locations=new Map;
        sourcemaps={};
        constructor(_e408115c538a) {
          this.ownerclient = _e408115c538a;
        }
        registerClient(_e408115c538a, _85308e43d297) {
          this.clients.push(_e408115c538a), this.globals.set(_85308e43d297, _e408115c538a), 
          this.documents.set(_85308e43d297.document, _e408115c538a), this.locations.set(_85308e43d297.location, _e408115c538a);
        }
      }
    },
    8409: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        StudyJetServiceWorkerRuntime: () => a
      });
      var _6c53fc11c1e7 = _0948873bd781(1472), _06df19f8be6e = _0948873bd781(8665).A;
      class a {
        client;
        recvport;
        constructor(_e408115c538a) {
          this.client = _e408115c538a, self.onconnect = _85308e43d297 => {
            let _0948873bd781 = _85308e43d297.ports[0];
            _06df19f8be6e.log("sw", "connected"), _0948873bd781.addEventListener("message", _85308e43d297 => {
              console.log("sw", _85308e43d297.data), "studyjet$type" in _85308e43d297.data && ("init" === _85308e43d297.data.studyjet$type ? (this.recvport = _85308e43d297.data.studyjet$port, 
              this.recvport.postMessage({
                studyjet$type: "init"
              })) : s.call(this, _e408115c538a, _85308e43d297.data));
            }), _0948873bd781.start();
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
              dispatchEvent: _e408115c538a => !1
            },
            showNotification: async () => {},
            unregister: async () => !0,
            update: async () => {},
            installing: null,
            waiting: null
          }, this.client.global.ServiceWorkerGlobalScope = this.client.global;
        }
      }
      function s(_e408115c538a, _85308e43d297) {
        let _0948873bd781 = this.recvport, _fbbba1a672e2 = _85308e43d297.studyjet$type, _1087e8da3d1c = _85308e43d297.studyjet$token, _ce231c24b42d = _e408115c538a.eventcallbacks.get(self);
        if ("fetch" === _fbbba1a672e2) {
          _06df19f8be6e.log("ee", _85308e43d297);
          let _fbbba1a672e2 = _ce231c24b42d.filter(_e408115c538a => "fetch" === _e408115c538a.event);
          if (!_fbbba1a672e2) return;
          for (let _ce231c24b42d of _fbbba1a672e2) {
            let _fbbba1a672e2 = _85308e43d297.studyjet$request, _5cb021885ef6 = new _e408115c538a.natives.Request((0, 
            _6c53fc11c1e7.v2)(_fbbba1a672e2.url), {
              body: _fbbba1a672e2.body,
              headers: new Headers(_fbbba1a672e2.headers),
              method: _fbbba1a672e2.method,
              mode: "same-origin"
            });
            Object.defineProperty(_5cb021885ef6, "destination", {
              value: _fbbba1a672e2.destinitation
            });
            let _2b09e1ca183a = new Event("fetch");
            _2b09e1ca183a.request = _5cb021885ef6;
            let _f59cf6266889 = !1;
            _2b09e1ca183a.respondWith = _e408115c538a => {
              _f59cf6266889 = !0, (async () => {
                let _85308e43d297 = {
                  studyjet$type: "fetch",
                  studyjet$token: _1087e8da3d1c,
                  studyjet$response: {
                    body: (_e408115c538a = await _e408115c538a).body,
                    headers: Array.from(_e408115c538a.headers.entries()),
                    status: _e408115c538a.status,
                    statusText: _e408115c538a.statusText
                  }
                };
                _06df19f8be6e.log("sw", "responding", _85308e43d297), _0948873bd781.postMessage(_85308e43d297, [ _e408115c538a.body ]);
              })();
            }, _06df19f8be6e.log("to fn", _2b09e1ca183a), _ce231c24b42d.proxiedCallback(new Proxy(_2b09e1ca183a, {
              get: (_e408115c538a, _85308e43d297, _0948873bd781) => "isTrusted" === _85308e43d297 || Reflect.get(_e408115c538a, _85308e43d297)
            })), _f59cf6266889 || (console.log("sw", "no response"), _0948873bd781.postMessage({
              studyjet$type: "fetch",
              studyjet$token: _1087e8da3d1c,
              studyjet$response: !1
            }));
          }
        }
      }
    },
    9353: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        default: () => i
      });
      var _6c53fc11c1e7 = _0948873bd781(1472);
      function i(_e408115c538a) {
        _e408115c538a.Proxy("importScripts", {
          apply(_85308e43d297) {
            for (let _0948873bd781 in _85308e43d297.args) _85308e43d297.args[_0948873bd781] = (0, 
            _6c53fc11c1e7.Oy)(_85308e43d297.args[_0948873bd781], _e408115c538a.meta);
          }
        });
      }
    },
    3402: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.d(_85308e43d297, {
        q: () => l
      });
      var _6c53fc11c1e7 = _0948873bd781(37), _06df19f8be6e = _0948873bd781(4869), _fbbba1a672e2 = _0948873bd781(6570), _1087e8da3d1c = _0948873bd781(1862), _ce231c24b42d = _0948873bd781(8665).A;
      class l extends EventTarget {
        db;
        constructor(_e408115c538a) {
          super();
          const t = (_e408115c538a, _85308e43d297) => {
            for (let _0948873bd781 in _85308e43d297) _85308e43d297[_0948873bd781] instanceof Object && _0948873bd781 in _e408115c538a && Object.assign(_85308e43d297[_0948873bd781], t(_e408115c538a[_0948873bd781], _85308e43d297[_0948873bd781]));
            return Object.assign(_e408115c538a || {}, _85308e43d297);
          }, _85308e43d297 = t({
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
              encode: _e408115c538a => _e408115c538a ? encodeURIComponent(_e408115c538a) : _e408115c538a,
              decode: _e408115c538a => _e408115c538a ? decodeURIComponent(_e408115c538a) : _e408115c538a
            }
          }, _e408115c538a);
          _85308e43d297.codec.encode = _85308e43d297.codec.encode.toString(), _85308e43d297.codec.decode = _85308e43d297.codec.decode.toString(), 
          (0, _6c53fc11c1e7.Nk)(_85308e43d297);
        }
        async init() {
          (0, _6c53fc11c1e7.Ec)(), await this.openIDB(), navigator.serviceWorker.controller?.postMessage({
            studyjet$type: "loadConfig",
            config: _6c53fc11c1e7.$W
          }), _ce231c24b42d.log("config loaded"), navigator.serviceWorker.addEventListener("message", _e408115c538a => {
            if (!("studyjet$type" in _e408115c538a.data)) return;
            let _85308e43d297 = _e408115c538a.data;
            "download" === _85308e43d297.studyjet$type && this.dispatchEvent(new _1087e8da3d1c.StudyJetGlobalDownloadEvent(_85308e43d297.download));
          });
        }
        createFrame(_e408115c538a) {
          return _e408115c538a || (_e408115c538a = document.createElement("iframe")), new _06df19f8be6e.X(this, _e408115c538a);
        }
        encodeUrl(_e408115c538a) {
          if ("string" == typeof _e408115c538a && (_e408115c538a = new URL(_e408115c538a)), 
          "http:" != _e408115c538a.protocol && "https:" != _e408115c538a.protocol) return _e408115c538a.href;
          let _85308e43d297 = (0, _6c53fc11c1e7.hD)(_e408115c538a.hash.slice(1));
          return _e408115c538a.hash = "", _6c53fc11c1e7.$W.prefix + (0, _6c53fc11c1e7.hD)(_e408115c538a.href) + (_85308e43d297 ? "#" + _85308e43d297 : "");
        }
        decodeUrl(_e408115c538a) {
          _e408115c538a instanceof URL && (_e408115c538a = _e408115c538a.toString());
          let _85308e43d297 = location.origin + _6c53fc11c1e7.$W.prefix;
          return (0, _6c53fc11c1e7.P_)(_e408115c538a.slice(_85308e43d297.length));
        }
        async openIDB() {
          let _e408115c538a = await (0, _fbbba1a672e2.P2)("@d7a6431b92e", 1, {
            upgrade(_e408115c538a) {
              _e408115c538a.objectStoreNames.contains("config") || _e408115c538a.createObjectStore("config"), 
              _e408115c538a.objectStoreNames.contains("cookies") || _e408115c538a.createObjectStore("cookies"), 
              _e408115c538a.objectStoreNames.contains("redirectTrackers") || _e408115c538a.createObjectStore("redirectTrackers"), 
              _e408115c538a.objectStoreNames.contains("referrerPolicies") || _e408115c538a.createObjectStore("referrerPolicies"), 
              _e408115c538a.objectStoreNames.contains("publicSuffixList") || _e408115c538a.createObjectStore("publicSuffixList");
            }
          });
          return this.db = _e408115c538a, await this.#_e408115c538a(), _e408115c538a;
        }
        async #_e408115c538a() {
          this.db ? await this.db.put("config", _6c53fc11c1e7.$W, "config") : console.error("Store not ready!");
        }
        async modifyConfig(_e408115c538a) {
          (0, _6c53fc11c1e7.Nk)(Object.assign({}, _6c53fc11c1e7.$W, _e408115c538a)), (0, _6c53fc11c1e7.Ec)(), 
          await this.#_e408115c538a(), navigator.serviceWorker.controller?.postMessage({
            studyjet$type: "loadConfig",
            config: _6c53fc11c1e7.$W
          });
        }
        addEventListener(_e408115c538a, _85308e43d297, _0948873bd781) {
          super.addEventListener(_e408115c538a, _85308e43d297, _0948873bd781);
        }
      }
    },
    4869: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.d(_85308e43d297, {
        X: () => a
      });
      var _6c53fc11c1e7 = _0948873bd781(2794), _06df19f8be6e = _0948873bd781(8665).A;
      class a extends EventTarget {
        controller;
        frame;
        constructor(_e408115c538a, _85308e43d297) {
          super(), this.controller = _e408115c538a, this.frame = _85308e43d297, _85308e43d297.name = `${Array(8).fill(0).map(() => Math.floor(36 * Math.random()).toString(36)).join("")}`, 
          _85308e43d297[_6c53fc11c1e7.zr] = this;
        }
        get client() {
          return this.frame.contentWindow.window[_6c53fc11c1e7.pX];
        }
        get url() {
          return this.client.url;
        }
        go(_e408115c538a) {
          _e408115c538a instanceof URL && (_e408115c538a = _e408115c538a.toString()), _06df19f8be6e.log("navigated to", _e408115c538a), 
          this.frame.src = this.controller.encodeUrl(_e408115c538a);
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
        addEventListener(_e408115c538a, _85308e43d297, _0948873bd781) {
          super.addEventListener(_e408115c538a, _85308e43d297, _0948873bd781);
        }
      }
    },
    9052: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        StudyJetController: () => _06df19f8be6e.q,
        StudyJetFrame: () => _6c53fc11c1e7.X
      });
      var _6c53fc11c1e7 = _0948873bd781(4869), _06df19f8be6e = _0948873bd781(3402);
      console.warn("you are using the last version of studyjet v1, if possible, please upgrade to v2 for better performance and more features");
    },
    8665: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.d(_85308e43d297, {
        A: () => _06df19f8be6e
      });
      let _6c53fc11c1e7 = {
        log: console.log,
        warn: console.warn,
        error: console.error,
        debug: console.debug,
        info: console.info
      }, _06df19f8be6e = {
        fmt: function(_e408115c538a, _85308e43d297, ..._0948873bd781) {
          let _6c53fc11c1e7 = Error.prepareStackTrace;
          Error.prepareStackTrace = (_e408115c538a, _85308e43d297) => {
            _85308e43d297.shift(), _85308e43d297.shift(), _85308e43d297.shift();
            let _0948873bd781 = "";
            for (let _e408115c538a = 1; _e408115c538a < Math.min(2, _85308e43d297.length); _e408115c538a++) _85308e43d297[_e408115c538a].getFunctionName() && (_0948873bd781 += `${_85308e43d297[_e408115c538a].getFunctionName()} -> ` + _0948873bd781);
            return _0948873bd781 + (_85308e43d297[0].getFunctionName() || "Anonymous");
          };
          let _06df19f8be6e = function() {
            try {
              throw Error();
            } catch (_e408115c538a) {
              return _e408115c538a.stack;
            }
          }();
          Error.prepareStackTrace = _6c53fc11c1e7, this.print(_e408115c538a, _06df19f8be6e, _85308e43d297, ..._0948873bd781);
        },
        print(_e408115c538a, _85308e43d297, _0948873bd781, ..._06df19f8be6e) {
          (_6c53fc11c1e7[_e408115c538a] || _6c53fc11c1e7.log)(`%c${_85308e43d297}%c ${_0948873bd781}`, `\n  \tbackground-color: ${{
            log: "#000",
            warn: "#f80",
            error: "#f00",
            debug: "transparent"
          }[_e408115c538a]};\n  \tcolor: ${{
            log: "#fff",
            warn: "#fff",
            error: "#fff",
            debug: "gray"
          }[_e408115c538a]};\n  \tpadding: ${{
            log: 2,
            warn: 4,
            error: 4,
            debug: 0
          }[_e408115c538a]}px;\n  \tfont-weight: bold;\n  \tfont-family: monospace;\n  \tfont-size: 0.9em;\n  `, `${"debug" === _e408115c538a ? "color: gray" : ""}`, ..._06df19f8be6e);
        },
        log: function(_e408115c538a, ..._85308e43d297) {
          this.fmt("log", _e408115c538a, ..._85308e43d297);
        },
        warn: function(_e408115c538a, ..._85308e43d297) {
          this.fmt("warn", _e408115c538a, ..._85308e43d297);
        },
        error: function(_e408115c538a, ..._85308e43d297) {
          this.fmt("error", _e408115c538a, ..._85308e43d297);
        },
        debug: function(_e408115c538a, ..._85308e43d297) {
          this.fmt("debug", _e408115c538a, ..._85308e43d297);
        },
        time(_e408115c538a, _85308e43d297, _0948873bd781) {}
      };
    },
    3831: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.d(_85308e43d297, {
        k: () => a
      });
      var _6c53fc11c1e7 = _0948873bd781(4322), _06df19f8be6e = _0948873bd781.n(_6c53fc11c1e7);
      class a {
        cookies={};
        setCookies(_e408115c538a, _85308e43d297) {
          for (let _0948873bd781 of _e408115c538a) {
            let _e408115c538a = _06df19f8be6e()(_0948873bd781), _6c53fc11c1e7 = {
              domain: _e408115c538a.domain,
              sameSite: _e408115c538a.sameSite,
              ..._e408115c538a[0]
            };
            _6c53fc11c1e7.domain || (_6c53fc11c1e7.domain = "." + _85308e43d297.hostname), _6c53fc11c1e7.domain.startsWith(".") || (_6c53fc11c1e7.domain = "." + _6c53fc11c1e7.domain), 
            _6c53fc11c1e7.path || (_6c53fc11c1e7.path = "/"), _6c53fc11c1e7.sameSite || (_6c53fc11c1e7.sameSite = "lax"), 
            _6c53fc11c1e7.expires && (_6c53fc11c1e7.expires = _6c53fc11c1e7.expires.toString());
            let _fbbba1a672e2 = `${_6c53fc11c1e7.domain}@${_6c53fc11c1e7.path}@${_6c53fc11c1e7.name}`;
            this.cookies[_fbbba1a672e2] = _6c53fc11c1e7;
          }
        }
        getCookies(_e408115c538a, _85308e43d297) {
          let _0948873bd781 = new Date, _6c53fc11c1e7 = Object.values(this.cookies), _06df19f8be6e = [];
          for (let _fbbba1a672e2 of _6c53fc11c1e7) {
            if (_fbbba1a672e2.expires && new Date(_fbbba1a672e2.expires) < _0948873bd781) {
              delete this.cookies[`${_fbbba1a672e2.domain}@${_fbbba1a672e2.path}@${_fbbba1a672e2.name}`];
              continue;
            }
            (!_fbbba1a672e2.secure || "https:" === _e408115c538a.protocol) && (!_fbbba1a672e2.httpOnly || !_85308e43d297) && _e408115c538a.pathname.startsWith(_fbbba1a672e2.path) && (!_fbbba1a672e2.domain.startsWith(".") || _e408115c538a.hostname.endsWith(_fbbba1a672e2.domain.slice(1))) && _06df19f8be6e.push(_fbbba1a672e2);
          }
          return _06df19f8be6e.map(_e408115c538a => `${_e408115c538a.name}=${_e408115c538a.value}`).join("; ");
        }
        load(_e408115c538a) {
          if ("object" == typeof _e408115c538a) return _e408115c538a;
          this.cookies = JSON.parse(_e408115c538a);
        }
        dump() {
          return JSON.stringify(this.cookies);
        }
      }
    },
    1427: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.d(_85308e43d297, {
        u: () => n
      });
      class n {
        headers={};
        set(_e408115c538a, _85308e43d297) {
          this.headers[_e408115c538a.toLowerCase()] = _85308e43d297;
        }
      }
    },
    2393: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.d(_85308e43d297, {
        V: () => _1087e8da3d1c
      });
      var _6c53fc11c1e7 = _0948873bd781(2614), _06df19f8be6e = _0948873bd781(884), _fbbba1a672e2 = _0948873bd781(1472);
      let _1087e8da3d1c = [ {
        fn: (_e408115c538a, _85308e43d297) => (0, _fbbba1a672e2.Oy)(_e408115c538a, _85308e43d297),
        src: [ "embed", "script", "img", "frame", "source", "input", "track" ],
        href: [ "a", "link", "area", "use", "image" ],
        data: [ "object" ],
        action: [ "form" ],
        formaction: [ "button", "input", "textarea", "submit" ],
        poster: [ "video" ],
        "xlink:href": [ "image" ]
      }, {
        fn: (_e408115c538a, _85308e43d297) => (0, _fbbba1a672e2.Oy)(_e408115c538a, _85308e43d297),
        src: [ "iframe" ]
      }, {
        fn: (_e408115c538a, _85308e43d297) => null,
        sandbox: [ "iframe" ]
      }, {
        fn: (_e408115c538a, _85308e43d297) => _e408115c538a.startsWith("blob:") ? (0, _fbbba1a672e2.$n)(_e408115c538a) : (0, 
        _fbbba1a672e2.Oy)(_e408115c538a, _85308e43d297),
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
        fn: (_e408115c538a, _85308e43d297) => (0, _06df19f8be6e.PV)(_e408115c538a, _85308e43d297),
        srcset: [ "img", "source" ],
        imagesrcset: [ "link" ]
      }, {
        fn: (_e408115c538a, _85308e43d297, _0948873bd781) => (0, _06df19f8be6e.Qs)(_e408115c538a, _0948873bd781, {
          origin: new URL(_85308e43d297.origin.origin),
          base: new URL(_85308e43d297.origin.origin)
        }, !0),
        srcdoc: [ "iframe" ]
      }, {
        fn: (_e408115c538a, _85308e43d297) => (0, _6c53fc11c1e7.s)(_e408115c538a, _85308e43d297),
        style: "*"
      }, {
        fn: (_e408115c538a, _85308e43d297) => "_top" === _e408115c538a || "_unfencedTop" === _e408115c538a ? _85308e43d297.topFrameName : "_parent" === _e408115c538a ? _85308e43d297.parentFrameName : _e408115c538a,
        target: [ "a", "base" ]
      } ];
    },
    37: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      let _6c53fc11c1e7, _06df19f8be6e, _fbbba1a672e2;
      _0948873bd781.d(_85308e43d297, {
        $W: () => _fbbba1a672e2,
        Ec: () => o,
        Nk: () => c,
        P_: () => _06df19f8be6e,
        U5: () => l,
        hD: () => _6c53fc11c1e7
      }), _0948873bd781(2393), _0948873bd781(9381), _0948873bd781(2416);
      let _1087e8da3d1c = Function;
      function o() {
        _6c53fc11c1e7 = _1087e8da3d1c(`return ${_fbbba1a672e2.codec.encode}`)(), _06df19f8be6e = _1087e8da3d1c(`return ${_fbbba1a672e2.codec.decode}`)();
      }
      function l(_e408115c538a, _85308e43d297) {
        let _0948873bd781 = _fbbba1a672e2.flags[_e408115c538a];
        for (let _0948873bd781 in _fbbba1a672e2.siteFlags) {
          let _6c53fc11c1e7 = _fbbba1a672e2.siteFlags[_0948873bd781];
          if (new RegExp(_0948873bd781).test(_85308e43d297.href) && _e408115c538a in _6c53fc11c1e7) return _6c53fc11c1e7[_e408115c538a];
        }
        return _0948873bd781;
      }
      function c(_e408115c538a) {
        _fbbba1a672e2 = _e408115c538a, o();
      }
    },
    2614: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.d(_85308e43d297, {
        f: () => a,
        s: () => i
      });
      var _6c53fc11c1e7 = _0948873bd781(1472);
      function i(_e408115c538a, _85308e43d297) {
        return s("rewrite", _e408115c538a, _85308e43d297);
      }
      function a(_e408115c538a) {
        return s("unrewrite", _e408115c538a);
      }
      function s(_e408115c538a, _85308e43d297, _0948873bd781) {
        return (_85308e43d297 = (_85308e43d297 = new String(_85308e43d297).toString()).replace(/url\(['"]?(.+?)['"]?\)/gm, (_85308e43d297, _06df19f8be6e) => {
          let _fbbba1a672e2 = "rewrite" === _e408115c538a ? (0, _6c53fc11c1e7.Oy)(_06df19f8be6e.trim(), _0948873bd781) : (0, 
          _6c53fc11c1e7.v2)(_06df19f8be6e.trim());
          return _85308e43d297.replace(_06df19f8be6e, _fbbba1a672e2);
        })).replace(/@import\s+(url\s*?\(.{0,9999}?\)|['"].{0,9999}?['"]|.{0,9999}?)($|\s|;)/gm, (_85308e43d297, _06df19f8be6e) => _85308e43d297.replace(_06df19f8be6e, _06df19f8be6e.replace(/^(url\(['"]?|['"]|)(.+?)(['"]|['"]?\)|)$/gm, (_85308e43d297, _06df19f8be6e, _fbbba1a672e2, _1087e8da3d1c) => {
          if (_06df19f8be6e.startsWith("url")) return _85308e43d297;
          let _ce231c24b42d = "rewrite" === _e408115c538a ? (0, _6c53fc11c1e7.Oy)(_fbbba1a672e2.trim(), _0948873bd781) : (0, 
          _6c53fc11c1e7.v2)(_fbbba1a672e2.trim());
          return `${_06df19f8be6e}${_ce231c24b42d}${_1087e8da3d1c}`;
        })));
      }
    },
    4435: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.d(_85308e43d297, {
        l: () => l
      });
      var _6c53fc11c1e7 = _0948873bd781(1472), _06df19f8be6e = _0948873bd781(8228);
      let _fbbba1a672e2 = new Set([ "cross-origin-embedder-policy", "cross-origin-opener-policy", "cross-origin-resource-policy", "content-security-policy", "content-security-policy-report-only", "expect-ct", "feature-policy", "origin-isolation", "strict-transport-security", "upgrade-insecure-requests", "x-content-type-options", "x-download-options", "x-frame-options", "x-permitted-cross-domain-policies", "x-powered-by", "x-xss-protection", "clear-site-data" ]), _1087e8da3d1c = new Set([ "location", "content-location", "referer" ]);
      function o(_e408115c538a, _85308e43d297) {
        return _e408115c538a.replace(/<(.*)>/gi, _e408115c538a => (0, _6c53fc11c1e7.Oy)(_e408115c538a, _85308e43d297));
      }
      async function l(_e408115c538a, _85308e43d297, _0948873bd781, _ce231c24b42d) {
        let _5cb021885ef6 = {};
        for (let _85308e43d297 in _e408115c538a) _5cb021885ef6[_85308e43d297.toLowerCase()] = _e408115c538a[_85308e43d297];
        for (let _e408115c538a of _fbbba1a672e2) delete _5cb021885ef6[_e408115c538a];
        for (let _e408115c538a of _1087e8da3d1c) _5cb021885ef6[_e408115c538a] && (_5cb021885ef6[_e408115c538a] = (0, 
        _6c53fc11c1e7.Oy)(_5cb021885ef6[_e408115c538a]?.toString(), _85308e43d297));
        if ("string" == typeof _5cb021885ef6.link ? _5cb021885ef6.link = o(_5cb021885ef6.link, _85308e43d297) : Array.isArray(_5cb021885ef6.link) && (_5cb021885ef6.link = _5cb021885ef6.link.map(_e408115c538a => o(_e408115c538a, _85308e43d297))), 
        "string" == typeof _5cb021885ef6.referer) {
          let _e408115c538a = new URL(_5cb021885ef6.referer), _0948873bd781 = await _ce231c24b42d.get(_e408115c538a.href);
          if (_0948873bd781) {
            let _6c53fc11c1e7 = _0948873bd781.policy.toLowerCase().split(",").map(_e408115c538a => _e408115c538a.trim());
            _6c53fc11c1e7.includes("no-referrer") || _6c53fc11c1e7.includes("no-referrer-when-downgrade") && "http:" === _85308e43d297.origin.protocol && "https:" === _e408115c538a.protocol ? delete _5cb021885ef6.referer : _6c53fc11c1e7.includes("origin") ? _5cb021885ef6.referer = _e408115c538a.origin : _6c53fc11c1e7.includes("origin-when-cross-origin") ? _e408115c538a.origin !== _85308e43d297.origin.origin ? _5cb021885ef6.referer = _e408115c538a.origin : _5cb021885ef6.referer = _e408115c538a.href : _6c53fc11c1e7.includes("same-origin") ? _e408115c538a.origin === _85308e43d297.origin.origin ? _5cb021885ef6.referer = _e408115c538a.href : delete _5cb021885ef6.referer : _6c53fc11c1e7.includes("strict-origin") ? "http:" === _85308e43d297.origin.protocol && "https:" === _e408115c538a.protocol ? delete _5cb021885ef6.referer : _5cb021885ef6.referer = _e408115c538a.origin : _e408115c538a.origin === _85308e43d297.origin.origin ? _5cb021885ef6.referer = _e408115c538a.href : "http:" === _85308e43d297.origin.protocol && "https:" === _e408115c538a.protocol ? delete _5cb021885ef6.referer : _5cb021885ef6.referer = _e408115c538a.origin;
          }
        }
        return "string" == typeof _5cb021885ef6["sec-fetch-dest"] && "" === _5cb021885ef6["sec-fetch-dest"] && (_5cb021885ef6["sec-fetch-dest"] = "empty"), 
        "string" == typeof _5cb021885ef6["sec-fetch-site"] && "none" !== _5cb021885ef6["sec-fetch-site"] && ("string" == typeof _5cb021885ef6.referer ? _5cb021885ef6["sec-fetch-site"] = await (0, 
        _06df19f8be6e.ps)(_85308e43d297, new URL(_5cb021885ef6.referer), _0948873bd781) : (console.warn("Missing referrer header; can't rewrite sec-fetch-site properly. Falling back to unsafe deletion."), 
        delete _5cb021885ef6["sec-fetch-site"])), _5cb021885ef6;
      }
    },
    884: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.d(_85308e43d297, {
        PV: () => m,
        Qs: () => f,
        Uk: () => h,
        nK: () => g
      });
      var _6c53fc11c1e7 = _0948873bd781(3808), _06df19f8be6e = _0948873bd781(8866), _fbbba1a672e2 = _0948873bd781(6498), _1087e8da3d1c = _0948873bd781(1472), _ce231c24b42d = _0948873bd781(2614), _5cb021885ef6 = _0948873bd781(1478), _2b09e1ca183a = _0948873bd781(37), _f59cf6266889 = _0948873bd781(2393), _1e156e012532 = _0948873bd781(8665).A;
      function h(_e408115c538a, _85308e43d297) {
        let _0948873bd781 = JSON.stringify(_e408115c538a.dump()), _6c53fc11c1e7 = `\n\t\tself.COOKIE = ${_0948873bd781};\n\t\t$studyjetLoadClient().loadAndHook(${JSON.stringify(_2b09e1ca183a.$W)});\n\t\tif ("document" in self && document?.currentScript) {\n\t\t\tdocument.currentScript.remove();\n\t\t}\n\t`, _06df19f8be6e = y(_39d3eae51e3c.encode(_6c53fc11c1e7));
        return [ _85308e43d297(_2b09e1ca183a.$W.files.wasm), _85308e43d297(_2b09e1ca183a.$W.files.all), _85308e43d297("data:application/javascript;base64," + _06df19f8be6e) ];
      }
      let _39d3eae51e3c = new TextEncoder;
      function f(_e408115c538a, _85308e43d297, _0948873bd781, _2b09e1ca183a = !1) {
        let _6c881511c692 = performance.now(), _35893396e2ed = function(_e408115c538a, _85308e43d297, _0948873bd781, _2b09e1ca183a = !1) {
          let _1e156e012532 = new _06df19f8be6e.DV((_e408115c538a, _85308e43d297) => _85308e43d297), _6c881511c692 = new _6c53fc11c1e7.iX(_1e156e012532);
          if (_6c881511c692.write(_e408115c538a), _6c881511c692.end(), function e(_e408115c538a, _85308e43d297, _0948873bd781) {
            if ("base" === _e408115c538a.name && void 0 !== _e408115c538a.attribs.href && (_0948873bd781.base = new URL(_e408115c538a.attribs.href, _0948873bd781.origin)), 
            _e408115c538a.attribs) {
              for (let _6c53fc11c1e7 of _f59cf6266889.V) for (let _06df19f8be6e in _6c53fc11c1e7) {
                let _fbbba1a672e2 = _6c53fc11c1e7[_06df19f8be6e.toLowerCase()];
                if ("function" != typeof _fbbba1a672e2 && ("*" === _fbbba1a672e2 || _fbbba1a672e2.includes(_e408115c538a.name)) && void 0 !== _e408115c538a.attribs[_06df19f8be6e]) {
                  let _fbbba1a672e2 = _e408115c538a.attribs[_06df19f8be6e], _1087e8da3d1c = _6c53fc11c1e7.fn(_fbbba1a672e2, _0948873bd781, _85308e43d297);
                  null === _1087e8da3d1c ? delete _e408115c538a.attribs[_06df19f8be6e] : _e408115c538a.attribs[_06df19f8be6e] = _1087e8da3d1c, 
                  _e408115c538a.attribs[`studyjet-attr-${_06df19f8be6e}`] = _fbbba1a672e2;
                }
              }
              for (let [_85308e43d297, _6c53fc11c1e7] of Object.entries(_e408115c538a.attribs)) _687b012f5f4d.includes(_85308e43d297) && (_e408115c538a.attribs[`studyjet-attr-${_85308e43d297}`] = _6c53fc11c1e7, 
              _e408115c538a.attribs[_85308e43d297] = (0, _5cb021885ef6.o)(_6c53fc11c1e7, `(inline ${_85308e43d297} on element)`, _0948873bd781));
            }
            if ("style" === _e408115c538a.name && void 0 !== _e408115c538a.children[0] && (_e408115c538a.children[0].data = (0, 
            _ce231c24b42d.s)(_e408115c538a.children[0].data, _0948873bd781)), "script" === _e408115c538a.name && "module" === _e408115c538a.attribs.type && _e408115c538a.attribs.src && (_e408115c538a.attribs.src = _e408115c538a.attribs.src + "?type=module"), 
            "script" === _e408115c538a.name && "importmap" === _e408115c538a.attribs.type && void 0 !== _e408115c538a.children[0]) {
              let _85308e43d297 = _e408115c538a.children[0].data;
              try {
                let _6c53fc11c1e7 = JSON.parse(_85308e43d297);
                if (_6c53fc11c1e7.imports) for (let _e408115c538a in _6c53fc11c1e7.imports) {
                  let _85308e43d297 = _6c53fc11c1e7.imports[_e408115c538a];
                  "string" == typeof _85308e43d297 && (_85308e43d297 = (0, _1087e8da3d1c.Oy)(_85308e43d297, _0948873bd781), 
                  _6c53fc11c1e7.imports[_e408115c538a] = _85308e43d297);
                }
                _e408115c538a.children[0].data = JSON.stringify(_6c53fc11c1e7);
              } catch (e) {
                console.error("Failed to parse importmap JSON:", e);
              }
            }
            if ("script" === _e408115c538a.name && /(application|text)\/javascript|module|undefined/.test(_e408115c538a.attribs.type) && void 0 !== _e408115c538a.children[0]) {
              let _85308e43d297 = _e408115c538a.children[0].data, _6c53fc11c1e7 = "module" === _e408115c538a.attribs.type;
              _e408115c538a.attribs["studyjet-attr-script-source-src"] = y(_39d3eae51e3c.encode(_85308e43d297)), 
              _85308e43d297 = _85308e43d297.replace(/<!--[\s\S]*?-->/g, ""), _e408115c538a.children[0].data = (0, 
              _5cb021885ef6.o)(_85308e43d297, "(inline script element)", _0948873bd781, _6c53fc11c1e7);
            }
            if ("meta" === _e408115c538a.name && void 0 !== _e408115c538a.attribs["http-equiv"]) {
              if ("content-security-policy" === _e408115c538a.attribs["http-equiv"].toLowerCase()) _e408115c538a = new _06df19f8be6e.Mw(_e408115c538a.attribs.content); else if ("refresh" === _e408115c538a.attribs["http-equiv"] && _e408115c538a.attribs.content.includes("url")) {
                let _85308e43d297 = _e408115c538a.attribs.content.split("url=");
                _85308e43d297[1] && (_85308e43d297[1] = (0, _1087e8da3d1c.Oy)(_85308e43d297[1].trim(), _0948873bd781)), 
                _e408115c538a.attribs.content = _85308e43d297.join("url=");
              }
            }
            if (_e408115c538a.childNodes) for (let _6c53fc11c1e7 in _e408115c538a.childNodes) _e408115c538a.childNodes[_6c53fc11c1e7] = e(_e408115c538a.childNodes[_6c53fc11c1e7], _85308e43d297, _0948873bd781);
            return _e408115c538a;
          }(_1e156e012532.root, _85308e43d297, _0948873bd781), _2b09e1ca183a) {
            let _e408115c538a = function e(_e408115c538a) {
              if (_e408115c538a.type === _6c53fc11c1e7.RJ.vw && "head" === _e408115c538a.name) return _e408115c538a;
              if (_e408115c538a.childNodes) for (let _85308e43d297 of _e408115c538a.childNodes) {
                let _e408115c538a = e(_85308e43d297);
                if (_e408115c538a) return _e408115c538a;
              }
              return null;
            }(_1e156e012532.root);
            _e408115c538a || (_e408115c538a = new _06df19f8be6e.Hg("head", {}, []), _1e156e012532.root.children.unshift(_e408115c538a)), 
            _e408115c538a.children.unshift(...h(_85308e43d297, _e408115c538a => new _06df19f8be6e.Hg("script", {
              src: _e408115c538a
            })));
          }
          return (0, _fbbba1a672e2.A)(_1e156e012532.root, {
            encodeEntities: "utf8",
            decodeEntities: !1
          });
        }(_e408115c538a, _85308e43d297, _0948873bd781, _2b09e1ca183a);
        return _1e156e012532.time(_0948873bd781, _6c881511c692, "html rewrite"), _35893396e2ed;
      }
      function g(_e408115c538a) {
        let _85308e43d297 = new _06df19f8be6e.DV((_e408115c538a, _85308e43d297) => _85308e43d297), _0948873bd781 = new _6c53fc11c1e7.iX(_85308e43d297);
        return _0948873bd781.write(_e408115c538a), _0948873bd781.end(), !function e(_e408115c538a) {
          if ("attribs" in _e408115c538a) for (let _85308e43d297 in _e408115c538a.attribs) {
            if ("studyjet-attr-script-source-src" == _85308e43d297) {
              _e408115c538a.children[0] && "data" in _e408115c538a.children[0] && (_e408115c538a.children[0].data = atob(_e408115c538a.attribs[_85308e43d297]));
              continue;
            }
            _85308e43d297.startsWith("studyjet-attr-") && (_e408115c538a.attribs[_85308e43d297.slice(14)] = _e408115c538a.attribs[_85308e43d297], 
            delete _e408115c538a.attribs[_85308e43d297]);
          }
          if ("childNodes" in _e408115c538a) for (let _85308e43d297 of _e408115c538a.childNodes) e(_85308e43d297);
        }(_85308e43d297.root), (0, _fbbba1a672e2.A)(_85308e43d297.root, {
          decodeEntities: !1
        });
      }
      function m(_e408115c538a, _85308e43d297) {
        return _e408115c538a.split(/ .*,/).map(_e408115c538a => _e408115c538a.trim()).map(_e408115c538a => {
          let [_0948873bd781, ..._6c53fc11c1e7] = _e408115c538a.split(/\s+/), _06df19f8be6e = (0, 
          _1087e8da3d1c.Oy)(_0948873bd781.trim(), _85308e43d297);
          return _6c53fc11c1e7.length > 0 ? `${_06df19f8be6e} ${_6c53fc11c1e7.join(" ")}` : _06df19f8be6e;
        }).join(", ");
      }
      function y(_e408115c538a) {
        return btoa(Array.from(_e408115c538a, _e408115c538a => String.fromCodePoint(_e408115c538a)).join(""));
      }
      let _687b012f5f4d = [ "onbeforexrselect", "onabort", "onbeforeinput", "onbeforematch", "onbeforetoggle", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncontentvisibilityautostatechange", "oncontextlost", "oncontextmenu", "oncontextrestored", "oncuechange", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "onformdata", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onresize", "onscroll", "onsecuritypolicyviolation", "onseeked", "onseeking", "onselect", "onslotchange", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "onvolumechange", "onwaiting", "onwebkitanimationend", "onwebkitanimationiteration", "onwebkitanimationstart", "onwebkittransitionend", "onwheel", "onauxclick", "ongotpointercapture", "onlostpointercapture", "onpointerdown", "onpointermove", "onpointerrawupdate", "onpointerup", "onpointercancel", "onpointerover", "onpointerout", "onpointerenter", "onpointerleave", "onselectstart", "onselectionchange", "onanimationend", "onanimationiteration", "onanimationstart", "ontransitionrun", "ontransitionstart", "ontransitionend", "ontransitioncancel", "oncopy", "oncut", "onpaste", "onscrollend", "onscrollsnapchange", "onscrollsnapchanging" ];
    },
    9381: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781(2614), _0948873bd781(4435), _0948873bd781(884), _0948873bd781(1478), 
      _0948873bd781(1472), _0948873bd781(2015), _0948873bd781(1561);
    },
    1478: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.d(_85308e43d297, {
        o: () => s
      });
      var _6c53fc11c1e7 = _0948873bd781(37), _06df19f8be6e = _0948873bd781(1561), _fbbba1a672e2 = _0948873bd781(8665).A;
      function s(_e408115c538a, _85308e43d297, _0948873bd781, _1087e8da3d1c = !1) {
        try {
          let _ce231c24b42d = function(_e408115c538a, _85308e43d297, _0948873bd781, _6c53fc11c1e7 = !1) {
            return function(_e408115c538a, _85308e43d297, _0948873bd781, _6c53fc11c1e7) {
              let [_1087e8da3d1c, _ce231c24b42d] = (0, _06df19f8be6e.nb)(_0948873bd781);
              try {
                let _ce231c24b42d, _5cb021885ef6 = performance.now();
                _ce231c24b42d = "string" == typeof _e408115c538a ? _1087e8da3d1c.rewrite_js(_e408115c538a, _0948873bd781.base.href, _85308e43d297 || "(unknown)", _6c53fc11c1e7) : _1087e8da3d1c.rewrite_js_bytes(_e408115c538a, _0948873bd781.base.href, _85308e43d297 || "(unknown)", _6c53fc11c1e7), 
                _fbbba1a672e2.time(_0948873bd781, _5cb021885ef6, `oxc rewrite for "${_85308e43d297 || "(unknown)"}"`);
                let {js: _2b09e1ca183a, map: _f59cf6266889, scramtag: _1e156e012532, errors: _39d3eae51e3c} = _ce231c24b42d;
                return {
                  js: "string" == typeof _e408115c538a ? _06df19f8be6e.su.decode(_2b09e1ca183a) : _2b09e1ca183a,
                  tag: _1e156e012532,
                  map: _f59cf6266889,
                  errors: _39d3eae51e3c
                };
              } finally {
                _ce231c24b42d();
              }
            }(_e408115c538a, _85308e43d297, _0948873bd781, _6c53fc11c1e7);
          }(_e408115c538a, _85308e43d297, _0948873bd781, _1087e8da3d1c), _5cb021885ef6 = _ce231c24b42d.js;
          if ((0, _6c53fc11c1e7.U5)("sourcemaps", _0948873bd781.base)) {
            let _e408115c538a = globalThis[_6c53fc11c1e7.$W.globals.pushsourcemapfn];
            if (_e408115c538a) _e408115c538a(Array.from(_ce231c24b42d.map), _ce231c24b42d.tag); else {
              _5cb021885ef6 instanceof Uint8Array && (_5cb021885ef6 = (new TextDecoder).decode(_5cb021885ef6));
              let _e408115c538a = `${_6c53fc11c1e7.$W.globals.pushsourcemapfn}([${_ce231c24b42d.map.join(",")}], "${_ce231c24b42d.tag}");`, _85308e43d297 = /^\s*(['"])use strict\1;?/;
              _5cb021885ef6 = _85308e43d297.test(_5cb021885ef6) ? _5cb021885ef6.replace(_85308e43d297, `$&\n${_e408115c538a}`) : `${_e408115c538a}\n${_5cb021885ef6}`;
            }
          }
          if ((0, _6c53fc11c1e7.U5)("rewriterLogs", _0948873bd781.base)) for (let _e408115c538a of _ce231c24b42d.errors) console.error("oxc parse error", _e408115c538a);
          return _5cb021885ef6;
        } catch (_fbbba1a672e2) {
          if (console.warn("failed rewriting js for", _85308e43d297 || "(unknown)", _fbbba1a672e2.message, _e408115c538a instanceof Uint8Array ? _06df19f8be6e.su.decode(_e408115c538a) : _e408115c538a), 
          (0, _6c53fc11c1e7.U5)("allowInvalidJs", _0948873bd781.base)) return _e408115c538a;
          throw _fbbba1a672e2;
        }
      }
      Error.stackTraceLimit = 50;
    },
    1472: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.d(_85308e43d297, {
        $n: () => o,
        IP: () => s,
        Oy: () => l,
        v2: () => c
      });
      var _6c53fc11c1e7 = _0948873bd781(37), _06df19f8be6e = _0948873bd781(1478);
      function a(_e408115c538a, _85308e43d297) {
        try {
          return new URL(_e408115c538a, _85308e43d297);
        } catch {
          return null;
        }
      }
      function s(_e408115c538a, _85308e43d297) {
        let _0948873bd781 = new URL(_e408115c538a.substring(5));
        return "blob:" + _85308e43d297.origin.origin + _0948873bd781.pathname;
      }
      function o(_e408115c538a) {
        let _85308e43d297 = new URL(_e408115c538a.substring(5));
        return "blob:" + location.origin + _85308e43d297.pathname;
      }
      function l(_e408115c538a, _85308e43d297) {
        if (_e408115c538a instanceof URL && (_e408115c538a = _e408115c538a.toString()), 
        _e408115c538a.startsWith("javascript:")) return "javascript:" + (0, _06df19f8be6e.o)(_e408115c538a.slice(11), "(javascript: url)", _85308e43d297);
        {
          if (_e408115c538a.startsWith("blob:") || _e408115c538a.startsWith("data:")) return location.origin + _6c53fc11c1e7.$W.prefix + _e408115c538a;
          if (_e408115c538a.startsWith("mailto:") || _e408115c538a.startsWith("about:")) return _e408115c538a;
          let _0948873bd781 = _85308e43d297.base.href;
          _0948873bd781.startsWith("about:") && (_0948873bd781 = c(self.location.href));
          let _06df19f8be6e = a(_e408115c538a, _0948873bd781);
          if (!_06df19f8be6e) return _e408115c538a;
          let _fbbba1a672e2 = (0, _6c53fc11c1e7.hD)(_06df19f8be6e.hash.slice(1));
          return _06df19f8be6e.hash = "", location.origin + _6c53fc11c1e7.$W.prefix + (0, 
          _6c53fc11c1e7.hD)(_06df19f8be6e.href) + (_fbbba1a672e2 ? "#" + _fbbba1a672e2 : "");
        }
      }
      function c(_e408115c538a) {
        _e408115c538a instanceof URL && (_e408115c538a = _e408115c538a.toString());
        let _85308e43d297 = location.origin + _6c53fc11c1e7.$W.prefix;
        if (_e408115c538a.startsWith("javascript:")) return _e408115c538a;
        {
          if (_e408115c538a.startsWith("blob:")) return _e408115c538a;
          if (_e408115c538a.startsWith(_85308e43d297 + "blob:") || _e408115c538a.startsWith(_85308e43d297 + "data:")) return _e408115c538a.substring(_85308e43d297.length);
          if (_e408115c538a.startsWith("mailto:") || _e408115c538a.startsWith("about:")) return _e408115c538a;
          let _0948873bd781 = a(_e408115c538a);
          if (!_0948873bd781) return _e408115c538a;
          let _06df19f8be6e = (0, _6c53fc11c1e7.P_)(_0948873bd781.hash.slice(1));
          return _0948873bd781.hash = "", (0, _6c53fc11c1e7.P_)(_0948873bd781.href.slice(_85308e43d297.length) + (_06df19f8be6e ? "#" + _06df19f8be6e : ""));
        }
      }
    },
    1561: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      let _6c53fc11c1e7;
      _0948873bd781.d(_85308e43d297, {
        n$: () => d,
        nb: () => g,
        su: () => _1e156e012532
      });
      var _06df19f8be6e = _0948873bd781(3907), _fbbba1a672e2 = _0948873bd781(37), _1087e8da3d1c = _0948873bd781(1472), _ce231c24b42d = _0948873bd781(2393), _5cb021885ef6 = _0948873bd781(2614), _2b09e1ca183a = _0948873bd781(1478), _f59cf6266889 = _0948873bd781(884);
      async function d() {
        _6c53fc11c1e7 = new Uint8Array(await fetch(_fbbba1a672e2.$W.files.wasm).then(_e408115c538a => _e408115c538a.arrayBuffer()));
      }
      self.WASM && (_6c53fc11c1e7 = Uint8Array.from(atob(self.WASM), _e408115c538a => _e408115c538a.charCodeAt(0)));
      let _1e156e012532 = new TextDecoder, _39d3eae51e3c = "\0asm".split("").map(_e408115c538a => _e408115c538a.charCodeAt(0)), _687b012f5f4d = [];
      function g(_e408115c538a) {
        let _85308e43d297;
        if (!(_6c53fc11c1e7 instanceof Uint8Array)) throw Error("rewriter wasm not found (was it fetched correctly?)");
        if (![ ..._6c53fc11c1e7.slice(0, 4) ].every((_e408115c538a, _85308e43d297) => _e408115c538a === _39d3eae51e3c[_85308e43d297])) throw Error("rewriter wasm does not have wasm magic (was it fetched correctly?)\nrewriter wasm contents: " + _1e156e012532.decode(_6c53fc11c1e7));
        (0, _06df19f8be6e.QR)({
          module: new WebAssembly.Module(_6c53fc11c1e7)
        });
        let _0948873bd781 = _687b012f5f4d.findIndex(_e408115c538a => !_e408115c538a.inUse), _6c881511c692 = _687b012f5f4d.length;
        return -1 === _0948873bd781 ? ((0, _fbbba1a672e2.U5)("rewriterLogs", _e408115c538a.base) && console.log(`creating new rewriter, ${_6c881511c692} rewriters made already`), 
        _85308e43d297 = {
          rewriter: new _06df19f8be6e.LW({
            config: _fbbba1a672e2.$W,
            shared: {
              rewrite: {
                htmlRules: _ce231c24b42d.V,
                rewriteUrl: _1087e8da3d1c.Oy,
                rewriteCss: _5cb021885ef6.s,
                rewriteJs: _2b09e1ca183a.o,
                getHtmlInjectCode(_e408115c538a, _85308e43d297) {
                  let _0948873bd781 = (0, _f59cf6266889.Uk)(_e408115c538a, _e408115c538a => `<script src="${_e408115c538a}"><\/script>`).join("");
                  return _85308e43d297 ? `<head>${_0948873bd781}</head>` : _0948873bd781;
                }
              }
            },
            flagEnabled: _fbbba1a672e2.U5,
            codec: {
              encode: _fbbba1a672e2.hD,
              decode: _fbbba1a672e2.P_
            }
          }),
          inUse: !1
        }, _687b012f5f4d.push(_85308e43d297)) : ((0, _fbbba1a672e2.U5)("rewriterLogs", _e408115c538a.base) && console.log(`using cached rewriter ${_0948873bd781} from list of ${_6c881511c692} rewriters`), 
        _85308e43d297 = _687b012f5f4d[_0948873bd781]), _85308e43d297.inUse = !0, [ _85308e43d297.rewriter, () => _85308e43d297.inUse = !1 ];
      }
    },
    2015: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.d(_85308e43d297, {
        i: () => a
      });
      var _6c53fc11c1e7 = _0948873bd781(37), _06df19f8be6e = _0948873bd781(1478);
      function a(_e408115c538a, _85308e43d297, _0948873bd781, _fbbba1a672e2) {
        let _1087e8da3d1c = "", _ce231c24b42d = "module" === _85308e43d297, l = _e408115c538a => {
          _ce231c24b42d ? _1087e8da3d1c += `import "${_6c53fc11c1e7.$W.files[_e408115c538a]}"\n` : _1087e8da3d1c += `importScripts("${_6c53fc11c1e7.$W.files[_e408115c538a]}");\n`;
        };
        l("wasm"), l("all"), _1087e8da3d1c += `$studyjetLoadClient().loadAndHook(${JSON.stringify(_6c53fc11c1e7.$W)});`;
        let _5cb021885ef6 = (0, _06df19f8be6e.o)(_e408115c538a, _0948873bd781, _fbbba1a672e2, _ce231c24b42d);
        return _5cb021885ef6 instanceof Uint8Array && (_5cb021885ef6 = (new TextDecoder).decode(_5cb021885ef6)), 
        _1087e8da3d1c += _5cb021885ef6;
      }
    },
    6684: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.d(_85308e43d297, {
        Sn: () => h,
        YH: () => u,
        Yq: () => f,
        hU: () => d,
        pL: () => p,
        rj: () => c
      });
      var _6c53fc11c1e7 = _0948873bd781(6570);
      let _06df19f8be6e = {
        none: 0,
        "same-origin": 1,
        "same-site": 2,
        "cross-site": 3
      };
      async function a() {
        return (0, _6c53fc11c1e7.P2)("@d7a6431b92e", 1);
      }
      async function s(_e408115c538a) {
        let _85308e43d297 = await a();
        return await _85308e43d297.get("redirectTrackers", _e408115c538a) || null;
      }
      async function o(_e408115c538a, _85308e43d297) {
        let _0948873bd781 = await a();
        await _0948873bd781.put("redirectTrackers", _85308e43d297, _e408115c538a);
      }
      async function l(_e408115c538a) {
        let _85308e43d297 = await a();
        await _85308e43d297.delete("redirectTrackers", _e408115c538a);
      }
      async function c(_e408115c538a, _85308e43d297, _0948873bd781) {
        await s(_e408115c538a) || await o(_e408115c538a, {
          originalReferrer: _85308e43d297 || "",
          mostRestrictiveSite: _0948873bd781,
          referrerPolicy: "",
          chainStarted: Date.now()
        });
      }
      async function u(_e408115c538a, _85308e43d297, _0948873bd781) {
        let _6c53fc11c1e7 = await s(_e408115c538a);
        _6c53fc11c1e7 && (await l(_e408115c538a), _0948873bd781 && (_6c53fc11c1e7.referrerPolicy = _0948873bd781), 
        await o(_85308e43d297, _6c53fc11c1e7));
      }
      async function d(_e408115c538a, _85308e43d297) {
        let _0948873bd781 = await s(_e408115c538a);
        if (!_0948873bd781) return _85308e43d297;
        let _6c53fc11c1e7 = _06df19f8be6e[_0948873bd781.mostRestrictiveSite];
        return (_06df19f8be6e[_85308e43d297] ?? 0) > _6c53fc11c1e7 ? (_0948873bd781.mostRestrictiveSite = _85308e43d297, 
        await o(_e408115c538a, _0948873bd781), _85308e43d297) : _0948873bd781.mostRestrictiveSite;
      }
      async function h(_e408115c538a) {
        await l(_e408115c538a);
      }
      async function p(_e408115c538a, _85308e43d297, _0948873bd781) {
        let _6c53fc11c1e7 = await a();
        await _6c53fc11c1e7.put("referrerPolicies", {
          policy: _85308e43d297,
          referrer: _0948873bd781
        }, _e408115c538a);
      }
      async function f(_e408115c538a) {
        let _85308e43d297 = await a();
        return await _85308e43d297.get("referrerPolicies", _e408115c538a) || null;
      }
    },
    2416: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781(6684), _0948873bd781(8228);
    },
    8228: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.d(_85308e43d297, {
        ps: () => l
      });
      var _6c53fc11c1e7 = _0948873bd781(6570);
      let _06df19f8be6e = "publicSuffixList";
      async function a() {
        return (0, _6c53fc11c1e7.P2)("@d7a6431b92e", 1);
      }
      async function s() {
        let _e408115c538a = await a();
        return await _e408115c538a.get("publicSuffixList", _06df19f8be6e) || null;
      }
      async function o(_e408115c538a) {
        let _85308e43d297 = await a();
        await _85308e43d297.put("publicSuffixList", {
          data: _e408115c538a,
          expiry: Date.now() + 36e5
        }, _06df19f8be6e);
      }
      async function l(_e408115c538a, _85308e43d297, _0948873bd781) {
        return _85308e43d297 ? _e408115c538a.origin.origin === _85308e43d297.origin ? "same-origin" : await c(_e408115c538a.origin, _85308e43d297, _0948873bd781) ? "same-site" : "cross-site" : "none";
      }
      async function c(_e408115c538a, _85308e43d297, _0948873bd781) {
        return await u(_e408115c538a, _0948873bd781) === await u(_85308e43d297, _0948873bd781);
      }
      async function u(_e408115c538a, _85308e43d297) {
        let _0948873bd781 = await d(_85308e43d297), _6c53fc11c1e7 = _e408115c538a.hostname.toLowerCase().split("."), _06df19f8be6e = "", _fbbba1a672e2 = !1;
        for (let _e408115c538a of _0948873bd781) {
          let _85308e43d297 = _e408115c538a.startsWith("!") ? _e408115c538a.substring(1) : _e408115c538a;
          if (function(_e408115c538a, _85308e43d297) {
            if (_e408115c538a.length < _85308e43d297.length) return !1;
            let _0948873bd781 = _e408115c538a.length - _85308e43d297.length;
            for (let _6c53fc11c1e7 = 0; _6c53fc11c1e7 < _85308e43d297.length; _6c53fc11c1e7++) {
              let _06df19f8be6e = _e408115c538a[_0948873bd781 + _6c53fc11c1e7], _fbbba1a672e2 = _85308e43d297[_6c53fc11c1e7];
              if ("*" !== _fbbba1a672e2 && _06df19f8be6e !== _fbbba1a672e2) return !1;
            }
            return !0;
          }(_6c53fc11c1e7, _85308e43d297.split("."))) {
            if (_e408115c538a.startsWith("!")) {
              _06df19f8be6e = _85308e43d297, _fbbba1a672e2 = !0;
              break;
            }
            !_fbbba1a672e2 && _85308e43d297.length > _06df19f8be6e.length && (_06df19f8be6e = _85308e43d297);
          }
        }
        if (!_06df19f8be6e) return _6c53fc11c1e7.slice(-2).join(".");
        let _1087e8da3d1c = _06df19f8be6e.split(".").length, _ce231c24b42d = _fbbba1a672e2 ? _1087e8da3d1c : _1087e8da3d1c + 1;
        return _6c53fc11c1e7.slice(-_ce231c24b42d).join(".");
      }
      async function d(_e408115c538a) {
        let _85308e43d297, _0948873bd781 = await s();
        if (_0948873bd781 && Date.now() < _0948873bd781.expiry) return _0948873bd781.data;
        try {
          _85308e43d297 = await _e408115c538a.fetch("https://publicsuffix.org/list/public_suffix_list.dat");
        } catch (_e408115c538a) {
          throw Error(`Failed to fetch public suffix list: ${_e408115c538a}`);
        }
        let _6c53fc11c1e7 = (await _85308e43d297.text()).split("\n").map(_e408115c538a => {
          let _85308e43d297 = _e408115c538a.trim(), _0948873bd781 = _85308e43d297.indexOf(" ");
          return _0948873bd781 > -1 ? _85308e43d297.substring(0, _0948873bd781) : _85308e43d297;
        }).filter(_e408115c538a => _e408115c538a && !_e408115c538a.startsWith("//"));
        return await o(_6c53fc11c1e7), _6c53fc11c1e7;
      }
    },
    2794: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.d(_85308e43d297, {
        pX: () => _6c53fc11c1e7,
        zr: () => _06df19f8be6e
      });
      let _6c53fc11c1e7 = Symbol.for("studyjet client global"), _06df19f8be6e = Symbol.for("studyjet frame handle");
    },
    5956: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      function n(_e408115c538a, _85308e43d297) {
        let _0948873bd781 = `\n                errorTrace.value = ${JSON.stringify(_e408115c538a)};\n                fetchedURL.textContent = ${JSON.stringify(_85308e43d297)};\n                for (const node of document.querySelectorAll("#hostname")) node.textContent = ${JSON.stringify(location.hostname)};\n                reload.addEventListener("click", () => location.reload());\n                version.textContent = ${JSON.stringify(globalThis.$studyjetVersion?.version || "unknown")};\n                build.textContent = ${JSON.stringify(globalThis.$studyjetVersion?.build || "unknown")};\n\n                document.getElementById('copy-button').addEventListener('click', async () => {\n                    const text = document.getElementById('errorTrace').value;\n                    await navigator.clipboard.writeText(text);\n                    const btn = document.getElementById('copy-button');\n                    btn.textContent = 'Copied!';\n                    setTimeout(() => btn.textContent = 'Copy', 2000);\n                });\n        `;
        return `<!DOCTYPE html>\n            <html>\n                <head>\n                    <meta charset="utf-8" />\n                    <title>StudyJet</title>\n                    <style>\n                    :root {\n                        --deep: #080602;\n                        --shallow: #181412;\n                        --beach: #f1e8e1;\n                        --shore: #b1a8a1;\n                        --accent: #ffa938;\n                        --font-sans: -apple-system, system-ui, BlinkMacSystemFont, sans-serif;\n                        --font-monospace: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n                    }\n\n                    *:not(div,p,span,ul,li,i,span) {\n                        background-color: var(--deep);\n                        color: var(--beach);\n                        font-family: var(--font-sans);\n                    }\n\n                    textarea,\n                    button {\n                        background-color: var(--shallow);\n                        border-radius: 0.6em;\n                        padding: 0.6em;\n                        border: none;\n                        appearance: none;\n                        font-family: var(--font-sans);\n                        color: var(--beach);\n                    }\n\n                    button.primary {\n                        background-color: var(--accent);\n                        color: var(--deep);\n                        font-weight: bold;\n                    }\n\n                    textarea {\n                        resize: none;\n                        height: 20em;\n                        text-align: left;\n                        font-family: var(--font-monospace);\n                    }\n\n                    body {\n                        width: 100vw;\n                        height: 100vh;\n                        justify-content: center;\n                        align-items: center;\n                    }\n\n                    body,\n                    html,\n                    #inner {\n                        display: flex;\n                        align-items: center;\n                        flex-direction: column;\n                        gap: 0.5em;\n                        overflow: hidden;\n                    }\n\n                    #inner {\n                        z-index: 100;\n                    }\n\n                    #cover {\n                        position: absolute;\n                        width: 100%;\n                        height: 100%;\n                        background-color: color-mix(in srgb, var(--deep) 70%, transparent);\n                        z-index: 99;\n                    }\n\n                    #info {\n                        display: flex;\n                        flex-direction: row;\n                        align-items: flex-start;\n                        gap: 1em;\n                    }\n\n                    #version-wrapper {\n                        width: auto;\n                        text-align: right;\n                        position: absolute;\n                        top: 0.5rem;\n                        right: 0.5rem;\n                        font-size: 0.8rem;\n                        color: var(--shore)!important;\n                        i {\n                            background-color: color-mix(in srgb, var(--deep), transparent 50%);\n                            border-radius: 9999px;\n                            padding: 0.2em 0.5em;\n                        }\n                        z-index: 101;\n                    }\n\n                    #errorTrace-wrapper {\n                        position: relative;\n                        width: fit-content;\n                    }\n\n                    #copy-button {\n                        position: absolute;\n                        top: 0.5em;\n                        right: 0.5em;\n                        padding: 0.23em;\n                        cursor: pointer;\n                        opacity: 0;\n                        transition: opacity 0.4s;\n                        font-size: 0.9em;\n                    }\n\n                    #errorTrace-wrapper:hover #copy-button {\n                        opacity: 1;\n                    }\n                    </style>\n                </head>\n                <body>\n                    <div id="cover"></div>\n                    <div id="inner">\n                        <h1 id="errorTitle">Uh oh!</h1>\n                        <p>There was an error loading <b id="fetchedURL"></b></p>\n                        \x3c!-- <p id="errorMessage">Internal Server Error</p> --\x3e\n\n                        <div id="info">\n                            <div id="errorTrace-wrapper">\n                                <textarea id="errorTrace" cols="40" rows="10" readonly></textarea>\n                                <button id="copy-button" class="primary">Copy</button>\n                            </div>\n                            <div id="troubleshooting">\n                                <p>Try:</p>\n                                <ul>\n                                    <li>Checking your internet connection</li>\n                                    <li>Verifying you entered the correct address</li>\n                                    <li>Clearing the site data</li>\n                                    <li>Contacting <b id="hostname"></b>'s administrator</li>\n                                    <li>Verify the server isn't censored</li>\n                                </ul>\n                                <p>If you're the administrator of <b id="hostname"></b>, try:</p>\n                                    <ul>\n                                    <li>Restarting your server</li>\n                                    <li>Updating StudyJet</li>\n                                    <li>Troubleshooting the error on the <a href="https://github.com/MercuryWorkshop/studyjet" target="_blank">GitHub repository</a></li>\n                                </ul>\n                            </div>\n                        </div>\n                        <br>\n                        <button id="reload" class="primary">Reload</button>\n                    </div>\n                    <p id="version-wrapper"><i>StudyJet v<span id="version"></span> (build <span id="build"></span>)</i></p>\n                    <script src="${"data:application/javascript," + encodeURIComponent(_0948873bd781)}"><\/script>\n                </body>\n            </html>\n        `;
      }
      function i(_e408115c538a, _85308e43d297) {
        let _0948873bd781 = {
          "content-type": "text/html"
        };
        return crossOriginIsolated && (_0948873bd781["Cross-Origin-Embedder-Policy"] = "require-corp"), 
        new Response(n(String(_e408115c538a), _85308e43d297), {
          status: 500,
          headers: _0948873bd781
        });
      }
      _0948873bd781.d(_85308e43d297, {
        B: () => n,
        v: () => i
      });
    },
    1403: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.d(_85308e43d297, {
        H: () => n
      });
      class n {
        handle;
        origin;
        syncToken=0;
        promises={};
        messageChannel=new MessageChannel;
        connected=!1;
        constructor(_e408115c538a, _85308e43d297) {
          this.handle = _e408115c538a, this.origin = _85308e43d297, this.messageChannel.port1.addEventListener("message", _e408115c538a => {
            "studyjet$type" in _e408115c538a.data && ("init" === _e408115c538a.data.studyjet$type ? this.connected = !0 : this.handleMessage(_e408115c538a.data));
          }), this.messageChannel.port1.start(), this.handle.postMessage({
            studyjet$type: "init",
            studyjet$port: this.messageChannel.port2
          }, [ this.messageChannel.port2 ]);
        }
        handleMessage(_e408115c538a) {
          let _85308e43d297 = this.promises[_e408115c538a.studyjet$token];
          _85308e43d297 && (_85308e43d297(_e408115c538a), delete this.promises[_e408115c538a.studyjet$token]);
        }
        async fetch(_e408115c538a) {
          let _85308e43d297 = this.syncToken++, _0948873bd781 = {
            studyjet$type: "fetch",
            studyjet$token: _85308e43d297,
            studyjet$request: {
              url: _e408115c538a.url,
              body: _e408115c538a.body,
              headers: Array.from(_e408115c538a.headers.entries()),
              method: _e408115c538a.method,
              mode: _e408115c538a.mode,
              destinitation: _e408115c538a.destination
            }
          }, _6c53fc11c1e7 = _e408115c538a.body ? [ _e408115c538a.body ] : [];
          this.handle.postMessage(_0948873bd781, _6c53fc11c1e7);
          let {studyjet$response: _06df19f8be6e} = await new Promise(_e408115c538a => {
            this.promises[_85308e43d297] = _e408115c538a;
          });
          return !!_06df19f8be6e && new Response(_06df19f8be6e.body, {
            headers: _06df19f8be6e.headers,
            status: _06df19f8be6e.status,
            statusText: _06df19f8be6e.statusText
          });
        }
      }
    },
    5790: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.d(_85308e43d297, {
        Pf: () => m,
        V3: () => S,
        dT: () => w
      });
      var _6c53fc11c1e7 = _0948873bd781(5956), _06df19f8be6e = _0948873bd781(8228), _fbbba1a672e2 = _0948873bd781(6684), _1087e8da3d1c = _0948873bd781(1472), _ce231c24b42d = _0948873bd781(1478), _5cb021885ef6 = _0948873bd781(1427), _2b09e1ca183a = _0948873bd781(37), _f59cf6266889 = _0948873bd781(4435), _1e156e012532 = _0948873bd781(884), _39d3eae51e3c = _0948873bd781(2614), _687b012f5f4d = _0948873bd781(2015), _6c881511c692 = _0948873bd781(8665).A;
      function g(_e408115c538a) {
        return _e408115c538a.status >= 300 && _e408115c538a.status < 400;
      }
      async function m(_e408115c538a, _85308e43d297) {
        try {
          let _0948873bd781, _6c53fc11c1e7, _ce231c24b42d = new URL(_e408115c538a.url);
          if (_ce231c24b42d.pathname === this.config.files.wasm) return fetch(this.config.files.wasm).then(async _e408115c538a => {
            let _85308e43d297 = await _e408115c538a.arrayBuffer(), _0948873bd781 = btoa(new Uint8Array(_85308e43d297).reduce((_e408115c538a, _85308e43d297) => (_e408115c538a.push(String.fromCharCode(_85308e43d297)), 
            _e408115c538a), []).join("")), _6c53fc11c1e7 = "";
            return _6c53fc11c1e7 += `if ('document' in self && document.currentScript) { document.currentScript.remove(); }\nself.WASM = '${_0948873bd781}';`, 
            new Response(_6c53fc11c1e7, {
              headers: {
                "content-type": "text/javascript"
              }
            });
          });
          let _f59cf6266889 = "", _1e156e012532 = {};
          for (let [_e408115c538a, _85308e43d297] of [ ..._ce231c24b42d.searchParams.entries() ]) {
            switch (_e408115c538a) {
             case "type":
              _f59cf6266889 = _85308e43d297;
              break;

             case "dest":
              break;

             case "topFrame":
              _0948873bd781 = _85308e43d297;
              break;

             case "parentFrame":
              _6c53fc11c1e7 = _85308e43d297;
              break;

             default:
              _6c881511c692.warn(`${_ce231c24b42d.href} extraneous query parameter ${_e408115c538a}. Assuming <form> element`), 
              _1e156e012532[_e408115c538a] = _85308e43d297;
            }
            _ce231c24b42d.searchParams.delete(_e408115c538a);
          }
          let _39d3eae51e3c = new URL((0, _1087e8da3d1c.v2)(_ce231c24b42d));
          for (let [_e408115c538a, _85308e43d297] of Object.entries(_1e156e012532)) _39d3eae51e3c.searchParams.set(_e408115c538a, _85308e43d297);
          let _687b012f5f4d = {
            origin: _39d3eae51e3c,
            base: _39d3eae51e3c,
            topFrameName: _0948873bd781,
            parentFrameName: _6c53fc11c1e7
          };
          if (_ce231c24b42d.pathname.startsWith(`${this.config.prefix}blob:`) || _ce231c24b42d.pathname.startsWith(`${this.config.prefix}data:`)) {
            let _85308e43d297, _0948873bd781 = _ce231c24b42d.pathname.substring(this.config.prefix.length);
            _0948873bd781.startsWith("blob:") && (_0948873bd781 = (0, _1087e8da3d1c.$n)(_0948873bd781));
            let _6c53fc11c1e7 = await fetch(_0948873bd781, {});
            _6c53fc11c1e7.finalURL = _0948873bd781.startsWith("blob:") ? _0948873bd781 : "(data url)", 
            _6c53fc11c1e7.body && (_85308e43d297 = await b(_6c53fc11c1e7, _687b012f5f4d, _e408115c538a.destination, _f59cf6266889, this.cookieStore));
            let _06df19f8be6e = Object.fromEntries(_6c53fc11c1e7.headers.entries());
            return crossOriginIsolated && (_06df19f8be6e["Cross-Origin-Opener-Policy"] = "same-origin", 
            _06df19f8be6e["Cross-Origin-Embedder-Policy"] = "require-corp"), new Response(_85308e43d297, {
              status: _6c53fc11c1e7.status,
              statusText: _6c53fc11c1e7.statusText,
              headers: _06df19f8be6e
            });
          }
          let _35893396e2ed = this.serviceWorkers.find(_e408115c538a => _e408115c538a.origin === _39d3eae51e3c.origin);
          if (_35893396e2ed?.connected && "swruntime" !== _ce231c24b42d.searchParams.get("from")) {
            let _85308e43d297 = await _35893396e2ed.fetch(_e408115c538a);
            if (_85308e43d297) return _85308e43d297;
          }
          if (_39d3eae51e3c.origin === new URL(_e408115c538a.url).origin) throw Error("attempted to fetch from same origin - this means the site has obtained a reference to the real origin, aborting");
          let _e66e402f8d94 = new _5cb021885ef6.u;
          for (let [_85308e43d297, _0948873bd781] of _e408115c538a.headers.entries()) _e66e402f8d94.set(_85308e43d297, _0948873bd781);
          if (_85308e43d297 && new URL(_85308e43d297.url).pathname.startsWith(_2b09e1ca183a.$W.prefix)) {
            let _e408115c538a = new URL((0, _1087e8da3d1c.v2)(_85308e43d297.url));
            _e408115c538a.toString().includes("youtube.com") || (_e66e402f8d94.set("Referer", _e408115c538a.href), 
            _e66e402f8d94.set("Origin", _e408115c538a.origin));
          }
          let _524a958444f0 = this.cookieStore.getCookies(_39d3eae51e3c, !1);
          _524a958444f0.length && _e66e402f8d94.set("Cookie", _524a958444f0);
          let _01dfc7268288 = !1;
          if ("iframe" === _e408115c538a.destination && "navigate" === _e408115c538a.mode && _e408115c538a.referrer && "no-referrer" !== _e408115c538a.referrer && _e408115c538a.referrer !== location.origin + _2b09e1ca183a.$W.prefix + "no-referrer") {
            let _85308e43d297 = _e408115c538a.referrer, _0948873bd781 = await self.clients.matchAll({
              type: "window"
            });
            for (;_85308e43d297; ) {
              if (!_85308e43d297.includes(_2b09e1ca183a.$W.prefix)) {
                _01dfc7268288 = !0;
                break;
              }
              let _e408115c538a = _0948873bd781.find(_e408115c538a => _e408115c538a.url === _85308e43d297), _6c53fc11c1e7 = await (0, 
              _fbbba1a672e2.Yq)(_85308e43d297);
              if (!_6c53fc11c1e7 || !_6c53fc11c1e7.referrer) {
                _e408115c538a && _85308e43d297.startsWith(location.origin) && (_01dfc7268288 = !0);
                break;
              }
              if (_e408115c538a && "nested" === _e408115c538a.frameType) _85308e43d297 = _6c53fc11c1e7.referrer; else break;
            }
          }
          _01dfc7268288 ? (_e66e402f8d94.set("Sec-Fetch-Dest", "document"), _e66e402f8d94.set("Sec-Fetch-Mode", "navigate")) : (_e66e402f8d94.set("Sec-Fetch-Dest", _e408115c538a.destination || "empty"), 
          _e66e402f8d94.set("Sec-Fetch-Mode", _e408115c538a.mode));
          let _0c30017b0b1e = "none";
          if (_e408115c538a.referrer && "" !== _e408115c538a.referrer && "no-referrer" !== _e408115c538a.referrer && _e408115c538a.referrer !== location.origin + _2b09e1ca183a.$W.prefix + "no-referrer" && _e408115c538a.referrer.includes(_2b09e1ca183a.$W.prefix)) {
            let _85308e43d297 = (0, _1087e8da3d1c.v2)(_e408115c538a.referrer);
            if (_85308e43d297) {
              let _e408115c538a = new URL(_85308e43d297);
              _0c30017b0b1e = await (0, _06df19f8be6e.ps)(_687b012f5f4d, _e408115c538a, this.client);
            }
          }
          await (0, _fbbba1a672e2.rj)(_39d3eae51e3c.toString(), _e408115c538a.referrer ? (0, 
          _1087e8da3d1c.v2)(_e408115c538a.referrer) : null, _0c30017b0b1e), _e66e402f8d94.set("Sec-Fetch-Site", await (0, 
          _fbbba1a672e2.hU)(_39d3eae51e3c.toString(), _0c30017b0b1e));
          let _81a94061b0b6 = new S(_39d3eae51e3c, _e66e402f8d94.headers, _e408115c538a.body, _e408115c538a.method, _e408115c538a.destination, _85308e43d297);
          this.dispatchEvent(_81a94061b0b6);
          let _7aaec55dc53c = await _81a94061b0b6.response || await this.client.fetch(_81a94061b0b6.url, {
            method: _81a94061b0b6.method,
            body: _81a94061b0b6.body,
            headers: _81a94061b0b6.requestHeaders,
            credentials: "omit",
            mode: "cors" === _e408115c538a.mode ? _e408115c538a.mode : "same-origin",
            cache: _e408115c538a.cache,
            redirect: "manual",
            duplex: "half"
          });
          return _7aaec55dc53c.finalURL = _81a94061b0b6.url.href, await y(_39d3eae51e3c, _687b012f5f4d, _f59cf6266889, _e408115c538a.destination, _e408115c538a.mode, _7aaec55dc53c, this.cookieStore, _85308e43d297, this.client, this, _e408115c538a.referrer);
        } catch (_85308e43d297) {
          let _0948873bd781 = {
            message: _85308e43d297.message,
            url: _e408115c538a.url,
            destination: _e408115c538a.destination
          };
          if (_85308e43d297.cause && (_0948873bd781.cause = _85308e43d297.cause, _85308e43d297.cause instanceof AggregateError && (_0948873bd781.causeErrors = _85308e43d297.cause.errors)), 
          _85308e43d297.stack && (_0948873bd781.stack = _85308e43d297.stack), console.error("ERROR FROM SERVICE WORKER FETCH: ", _0948873bd781), 
          console.error(_85308e43d297), ![ "document", "iframe" ].includes(_e408115c538a.destination)) return new Response(void 0, {
            status: 500
          });
          let _06df19f8be6e = Object.entries(_0948873bd781).map(([_e408115c538a, _85308e43d297]) => `${_e408115c538a.charAt(0).toUpperCase() + _e408115c538a.slice(1)}: ${_85308e43d297}`).join("\n\n");
          return (0, _6c53fc11c1e7.v)(_06df19f8be6e, (0, _1087e8da3d1c.v2)(_e408115c538a.url));
        }
      }
      async function y(_e408115c538a, _85308e43d297, _0948873bd781, _6c53fc11c1e7, _ce231c24b42d, _5cb021885ef6, _1e156e012532, _39d3eae51e3c, _687b012f5f4d, _6c881511c692, _35893396e2ed) {
        let _e66e402f8d94, _524a958444f0 = "navigate" === _ce231c24b42d && [ "document", "iframe" ].includes(_6c53fc11c1e7), _01dfc7268288 = await (0, 
        _f59cf6266889.l)(_5cb021885ef6.rawHeaders, _85308e43d297, _687b012f5f4d, {
          get: _fbbba1a672e2.Yq,
          set: _fbbba1a672e2.pL
        });
        if (_524a958444f0 && _01dfc7268288["referrer-policy"] && _35893396e2ed && await (0, 
        _fbbba1a672e2.pL)(_e408115c538a.href, _01dfc7268288["referrer-policy"], _35893396e2ed), 
        g(_5cb021885ef6)) {
          let _85308e43d297 = new URL((0, _1087e8da3d1c.v2)(_01dfc7268288.location));
          await (0, _fbbba1a672e2.YH)(_e408115c538a.toString(), _85308e43d297.toString(), _01dfc7268288["referrer-policy"]);
          let _6c53fc11c1e7 = await (0, _06df19f8be6e.ps)({
            origin: _85308e43d297,
            base: _85308e43d297
          }, _e408115c538a, _687b012f5f4d);
          if (await (0, _fbbba1a672e2.hU)(_85308e43d297.toString(), _6c53fc11c1e7), _0948873bd781) {
            let _e408115c538a = new URL(_01dfc7268288.location);
            _e408115c538a.searchParams.set("type", _0948873bd781), _01dfc7268288.location = _e408115c538a.href;
          }
        }
        let _0c30017b0b1e = _01dfc7268288["set-cookie"] || [];
        for (let _85308e43d297 in _0c30017b0b1e) if (_39d3eae51e3c) {
          let _0948873bd781 = _6c881511c692.dispatch(_39d3eae51e3c, {
            studyjet$type: "cookie",
            cookie: _85308e43d297,
            url: _e408115c538a.href
          });
          "document" !== _6c53fc11c1e7 && "iframe" !== _6c53fc11c1e7 && await _0948873bd781;
        }
        for (let _85308e43d297 in await _1e156e012532.setCookies(_0c30017b0b1e instanceof Array ? _0c30017b0b1e : [ _0c30017b0b1e ], _e408115c538a), 
        _01dfc7268288) Array.isArray(_01dfc7268288[_85308e43d297]) && (_01dfc7268288[_85308e43d297] = _01dfc7268288[_85308e43d297][0]);
        if (function(_e408115c538a, _85308e43d297) {
          if ([ "document", "iframe" ].includes(_85308e43d297)) {
            let _85308e43d297 = _e408115c538a["content-disposition"];
            if (_85308e43d297) {
              if ("inline" !== _85308e43d297) return !0;
            } else {
              let _85308e43d297 = _e408115c538a["content-type"]?.split(";")[0].trim().toLowerCase();
              if (_85308e43d297 && ![ "text/html", "text/plain", "text/css", "text/javascript", "text/xml", "application/javascript", "application/json", "application/xml", "application/pdf" ].includes(_85308e43d297) && !_85308e43d297.startsWith("text") && !_85308e43d297.startsWith("image") && !_85308e43d297.startsWith("font") && !_85308e43d297.startsWith("video")) return !0;
            }
          }
          return !1;
        }(_01dfc7268288, _6c53fc11c1e7) && !g(_5cb021885ef6)) if ((0, _2b09e1ca183a.U5)("interceptDownloads", _e408115c538a)) {
          if (!_39d3eae51e3c) throw Error("cant find client");
          let _85308e43d297 = null, _0948873bd781 = _01dfc7268288["content-disposition"];
          if ("string" == typeof _0948873bd781) {
            let _e408115c538a = _0948873bd781.match(/filename=["']?([^"';\n]*)["']?/i);
            _e408115c538a && _e408115c538a[1] && (_85308e43d297 = _e408115c538a[1]);
          }
          let _6c53fc11c1e7 = _01dfc7268288["content-length"], _06df19f8be6e = await clients.matchAll({});
          if ((_06df19f8be6e = _06df19f8be6e.filter(_e408115c538a => !_e408115c538a.url.includes(_2b09e1ca183a.$W.prefix))).length < 1) throw Error("couldn't find a controller client to dispatch download to");
          let _fbbba1a672e2 = {
            filename: _85308e43d297,
            url: _e408115c538a.href,
            type: _01dfc7268288["content-type"],
            body: _5cb021885ef6.body,
            length: Number(_6c53fc11c1e7)
          };
          _06df19f8be6e[0].postMessage({
            studyjet$type: "download",
            download: _fbbba1a672e2
          }, [ _5cb021885ef6.body ]), await new Promise(() => {});
        } else {
          let _e408115c538a = _01dfc7268288["content-disposition"];
          if (!/\s*?((inline|attachment);\s*?)filename=/i.test(_e408115c538a)) {
            let _85308e43d297 = /^\s*?attachment/i.test(_e408115c538a) ? "attachment" : "inline", [_0948873bd781] = new URL(_5cb021885ef6.finalURL).pathname.split("/").slice(-1);
            _01dfc7268288["content-disposition"] = `${_85308e43d297}; filename=${JSON.stringify(_0948873bd781)}`;
          }
        }
        _5cb021885ef6.body && !g(_5cb021885ef6) && (_e66e402f8d94 = await b(_5cb021885ef6, _85308e43d297, _6c53fc11c1e7, _0948873bd781, _1e156e012532)), 
        "text/event-stream" === _01dfc7268288.accept && (_01dfc7268288["content-type"] = "text/event-stream"), 
        delete _01dfc7268288["permissions-policy"], crossOriginIsolated && [ "document", "iframe", "worker", "sharedworker", "style", "script" ].includes(_6c53fc11c1e7) && (_01dfc7268288["Cross-Origin-Embedder-Policy"] = "require-corp", 
        _01dfc7268288["Cross-Origin-Opener-Policy"] = "same-origin");
        let _81a94061b0b6 = new w(_e66e402f8d94, _01dfc7268288, _5cb021885ef6.status, _5cb021885ef6.statusText, _6c53fc11c1e7, _e408115c538a, _5cb021885ef6, _39d3eae51e3c);
        return _6c881511c692.dispatchEvent(_81a94061b0b6), g(_5cb021885ef6) || await (0, 
        _fbbba1a672e2.Sn)(_e408115c538a.toString()), new Response(_81a94061b0b6.responseBody, {
          headers: _81a94061b0b6.responseHeaders,
          status: _81a94061b0b6.status,
          statusText: _81a94061b0b6.statusText
        });
      }
      async function b(_e408115c538a, _85308e43d297, _0948873bd781, _6c53fc11c1e7, _06df19f8be6e) {
        switch (_0948873bd781) {
         case "iframe":
         case "document":
          if (_e408115c538a.headers.get("content-type")?.startsWith("text/html")) return (0, 
          _1e156e012532.Qs)(await _e408115c538a.text(), _06df19f8be6e, _85308e43d297, !0);
          return _e408115c538a.body;

         case "script":
          return (0, _ce231c24b42d.o)(new Uint8Array(await _e408115c538a.arrayBuffer()), _e408115c538a.finalURL, _85308e43d297, "module" === _6c53fc11c1e7);

         case "style":
          return (0, _39d3eae51e3c.s)(await _e408115c538a.text(), _85308e43d297);

         case "sharedworker":
         case "worker":
          return (0, _687b012f5f4d.i)(new Uint8Array(await _e408115c538a.arrayBuffer()), _6c53fc11c1e7, _e408115c538a.finalURL, _85308e43d297);

         default:
          return _e408115c538a.body;
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
        constructor(_e408115c538a, _85308e43d297, _0948873bd781, _6c53fc11c1e7, _06df19f8be6e, _fbbba1a672e2, _1087e8da3d1c, _ce231c24b42d) {
          super("handleResponse"), this.responseBody = _e408115c538a, this.responseHeaders = _85308e43d297, 
          this.status = _0948873bd781, this.statusText = _6c53fc11c1e7, this.destination = _06df19f8be6e, 
          this.url = _fbbba1a672e2, this.rawResponse = _1087e8da3d1c, this.client = _ce231c24b42d;
        }
      }
      class S extends Event {
        url;
        requestHeaders;
        body;
        method;
        destination;
        client;
        constructor(_e408115c538a, _85308e43d297, _0948873bd781, _6c53fc11c1e7, _06df19f8be6e, _fbbba1a672e2) {
          super("request"), this.url = _e408115c538a, this.requestHeaders = _85308e43d297, 
          this.body = _0948873bd781, this.method = _6c53fc11c1e7, this.destination = _06df19f8be6e, 
          this.client = _fbbba1a672e2;
        }
        response;
      }
    },
    7510: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.r(_85308e43d297), _0948873bd781.d(_85308e43d297, {
        FakeServiceWorker: () => _6c53fc11c1e7.H,
        StudyJetHandleResponseEvent: () => _06df19f8be6e.dT,
        StudyJetRequestEvent: () => _06df19f8be6e.V3,
        StudyJetServiceWorker: () => d,
        errorTemplate: () => _f59cf6266889.B,
        handleFetch: () => _06df19f8be6e.Pf,
        renderError: () => _f59cf6266889.v
      });
      var _6c53fc11c1e7 = _0948873bd781(1403), _06df19f8be6e = _0948873bd781(5790), _fbbba1a672e2 = _0948873bd781(4110), _1087e8da3d1c = _0948873bd781(1561), _ce231c24b42d = _0948873bd781(3831), _5cb021885ef6 = _0948873bd781(6570), _2b09e1ca183a = _0948873bd781(37), _f59cf6266889 = _0948873bd781(5956);
      class d extends EventTarget {
        client;
        config;
        syncPool={};
        synctoken=0;
        cookieStore=new _ce231c24b42d.k;
        serviceWorkers=[];
        constructor() {
          super(), this.client = new _fbbba1a672e2.Ay, (async () => {
            let _e408115c538a = await (0, _5cb021885ef6.P2)("@d7a6431b92e", 1), _85308e43d297 = await _e408115c538a.get("cookies", "cookies");
            _85308e43d297 && this.cookieStore.load(_85308e43d297);
          })(), addEventListener("message", async ({data: _e408115c538a}) => {
            if ("studyjet$type" in _e408115c538a) {
              if ("studyjet$token" in _e408115c538a) {
                let _85308e43d297 = this.syncPool[_e408115c538a.studyjet$token];
                delete this.syncPool[_e408115c538a.studyjet$token], _85308e43d297(_e408115c538a);
                return;
              }
              if ("registerServiceWorker" === _e408115c538a.studyjet$type) return void this.serviceWorkers.push(new _6c53fc11c1e7.H(_e408115c538a.port, _e408115c538a.origin));
              if ("cookie" === _e408115c538a.studyjet$type) {
                this.cookieStore.setCookies([ _e408115c538a.cookie ], new URL(_e408115c538a.url));
                let _85308e43d297 = await (0, _5cb021885ef6.P2)("@d7a6431b92e", 1);
                await _85308e43d297.put("cookies", JSON.parse(this.cookieStore.dump()), "cookies");
              }
              "loadConfig" === _e408115c538a.studyjet$type && (this.config = _e408115c538a.config);
            }
          });
        }
        async dispatch(_e408115c538a, _85308e43d297) {
          let _0948873bd781, _6c53fc11c1e7 = this.synctoken++, _06df19f8be6e = new Promise(_e408115c538a => _0948873bd781 = _e408115c538a);
          return this.syncPool[_6c53fc11c1e7] = _0948873bd781, _85308e43d297.studyjet$token = _6c53fc11c1e7, 
          _e408115c538a.postMessage(_85308e43d297), await _06df19f8be6e;
        }
        async loadConfig() {
          if (this.config) return;
          let _e408115c538a = await (0, _5cb021885ef6.P2)("@d7a6431b92e", 1);
          this.config = await _e408115c538a.get("config", "config"), this.config && ((0, _2b09e1ca183a.Nk)(this.config), 
          await (0, _1087e8da3d1c.n$)());
        }
        route({request: _e408115c538a}) {
          return !!_e408115c538a.url.startsWith(location.origin + this.config.prefix) || !!_e408115c538a.url.startsWith(location.origin + this.config.files.wasm);
        }
        async fetch({request: _e408115c538a, clientId: _85308e43d297}) {
          this.config || await this.loadConfig();
          let _0948873bd781 = await self.clients.get(_85308e43d297);
          return _06df19f8be6e.Pf.call(this, _e408115c538a, _0948873bd781);
        }
      }
    },
    4110: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.d(_85308e43d297, {
        Ay: () => S,
        DD: () => w
      });
      let _6c53fc11c1e7 = globalThis.fetch, _06df19f8be6e = globalThis.SharedWorker, _fbbba1a672e2 = globalThis.localStorage, _1087e8da3d1c = globalThis.navigator.serviceWorker, _ce231c24b42d = MessagePort.prototype.postMessage, _5cb021885ef6 = {
        prototype: {
          send: WebSocket.prototype.send
        },
        CLOSED: WebSocket.CLOSED,
        CLOSING: WebSocket.CLOSING,
        CONNECTING: WebSocket.CONNECTING,
        OPEN: WebSocket.OPEN
      };
      async function c() {
        let _e408115c538a = Promise.race([ Promise.any((await self.clients.matchAll({
          type: "window",
          includeUncontrolled: !0
        })).map(async _e408115c538a => {
          let _85308e43d297, _0948873bd781 = await (_85308e43d297 = new MessageChannel, new Promise(_0948873bd781 => {
            _e408115c538a.postMessage({
              type: "getPort",
              port: _85308e43d297.port2
            }, [ _85308e43d297.port2 ]), _85308e43d297.port1.onmessage = _e408115c538a => {
              _0948873bd781(_e408115c538a.data);
            };
          }));
          return await u(_0948873bd781), _0948873bd781;
        })), new Promise((_e408115c538a, _85308e43d297) => setTimeout(_85308e43d297, 1e3, TypeError("timeout"))) ]);
        try {
          return await _e408115c538a;
        } catch (_e408115c538a) {
          if (_e408115c538a instanceof AggregateError) throw console.error("bare-mux: failed to get a bare-mux SharedWorker MessagePort as all clients returned an invalid MessagePort."), 
          Error("All clients returned an invalid MessagePort.", {
            cause: _e408115c538a
          });
          return console.warn("bare-mux: failed to get a bare-mux SharedWorker MessagePort within 1s, retrying"), 
          await c();
        }
      }
      function u(_e408115c538a) {
        let _85308e43d297 = new MessageChannel, _0948873bd781 = new Promise((_e408115c538a, _0948873bd781) => {
          _85308e43d297.port1.onmessage = _85308e43d297 => {
            "pong" === _85308e43d297.data.type && _e408115c538a();
          }, setTimeout(_0948873bd781, 1500);
        });
        return _ce231c24b42d.call(_e408115c538a, {
          message: {
            type: "ping"
          },
          port: _85308e43d297.port2
        }, [ _85308e43d297.port2 ]), _0948873bd781;
      }
      function d(_e408115c538a, _85308e43d297) {
        let _0948873bd781 = new _06df19f8be6e(_e408115c538a, "ridgewood-stem-worker");
        return _85308e43d297 && _1087e8da3d1c.addEventListener("message", _85308e43d297 => {
          if ("getPort" === _85308e43d297.data.type && _85308e43d297.data.port) {
            console.debug("bare-mux: recieved request for port from sw");
            let _0948873bd781 = new _06df19f8be6e(_e408115c538a, "ridgewood-stem-worker");
            _ce231c24b42d.call(_85308e43d297.data.port, _0948873bd781.port, [ _0948873bd781.port ]);
          }
        }), _0948873bd781.port;
      }
      let _2b09e1ca183a = null;
      class p {
        channel;
        port;
        workerPath;
        constructor(_e408115c538a) {
          this.channel = new BroadcastChannel("bare-mux"), _e408115c538a instanceof MessagePort || _e408115c538a instanceof Promise ? this.port = _e408115c538a : this.createChannel(_e408115c538a, !0);
        }
        createChannel(_e408115c538a, _85308e43d297) {
          if (self.clients) this.port = c(), this.channel.onmessage = _e408115c538a => {
            "refreshPort" === _e408115c538a.data.type && (this.port = c());
          }; else if (_e408115c538a && SharedWorker) {
            if (!_e408115c538a.startsWith("/") && !_e408115c538a.includes(":")) throw Error("Invalid URL. Must be absolute or start at the root.");
            this.port = d(_e408115c538a, _85308e43d297), console.debug("bare-mux: setting localStorage bare-mux-path to", _e408115c538a), 
            _fbbba1a672e2["bare-mux-path"] = _e408115c538a;
          } else {
            if (!SharedWorker) throw Error("Unable to get a channel to the SharedWorker.");
            {
              let _e408115c538a = _fbbba1a672e2["bare-mux-path"];
              if (console.debug("bare-mux: got localStorage bare-mux-path:", _e408115c538a), !_e408115c538a) throw Error("Unable to get bare-mux workerPath from localStorage.");
              this.port = d(_e408115c538a, _85308e43d297);
            }
          }
        }
        async sendMessage(_e408115c538a, _85308e43d297) {
          this.port instanceof Promise && (this.port = await this.port);
          try {
            await u(this.port);
          } catch {
            return console.warn("bare-mux: Failed to get a ping response from the worker within 1.5s. Assuming port is dead."), 
            this.createChannel(), await this.sendMessage(_e408115c538a, _85308e43d297);
          }
          let _0948873bd781 = new MessageChannel, _6c53fc11c1e7 = [ _0948873bd781.port2, ..._85308e43d297 || [] ], _06df19f8be6e = new Promise((_e408115c538a, _85308e43d297) => {
            _0948873bd781.port1.onmessage = _0948873bd781 => {
              let _6c53fc11c1e7 = _0948873bd781.data;
              "error" === _6c53fc11c1e7.type ? _85308e43d297(_6c53fc11c1e7.error) : _e408115c538a(_6c53fc11c1e7);
            };
          });
          return _ce231c24b42d.call(this.port, {
            message: _e408115c538a,
            port: _0948873bd781.port2
          }, _6c53fc11c1e7), await _06df19f8be6e;
        }
      }
      class f extends EventTarget {
        protocols;
        url;
        readyState=_5cb021885ef6.CONNECTING;
        channel;
        constructor(_e408115c538a, _85308e43d297 = [], _0948873bd781, _6c53fc11c1e7) {
          super(), this.protocols = _85308e43d297, this.url = _e408115c538a.toString(), this.protocols = _85308e43d297;
          const i = _e408115c538a => {
            this.protocols = _e408115c538a, this.readyState = _5cb021885ef6.OPEN;
            let _85308e43d297 = new Event("open");
            this.dispatchEvent(_85308e43d297);
          }, a = async _e408115c538a => {
            let _85308e43d297 = new MessageEvent("message", {
              data: _e408115c538a
            });
            this.dispatchEvent(_85308e43d297);
          }, s = (_e408115c538a, _85308e43d297) => {
            this.readyState = _5cb021885ef6.CLOSED;
            let _0948873bd781 = new CloseEvent("close", {
              code: _e408115c538a,
              reason: _85308e43d297
            });
            this.dispatchEvent(_0948873bd781);
          }, o = () => {
            this.readyState = _5cb021885ef6.CLOSED;
            let _e408115c538a = new Event("error");
            this.dispatchEvent(_e408115c538a);
          };
          this.channel = new MessageChannel, this.channel.port1.onmessage = _e408115c538a => {
            "open" === _e408115c538a.data.type ? i(_e408115c538a.data.args[0]) : "message" === _e408115c538a.data.type ? a(_e408115c538a.data.args[0]) : "close" === _e408115c538a.data.type ? s(_e408115c538a.data.args[0], _e408115c538a.data.args[1]) : "error" === _e408115c538a.data.type && o();
          }, _0948873bd781.sendMessage({
            type: "websocket",
            websocket: {
              url: _e408115c538a.toString(),
              protocols: _85308e43d297,
              requestHeaders: _6c53fc11c1e7,
              channel: this.channel.port2
            }
          }, [ this.channel.port2 ]);
        }
        send(..._e408115c538a) {
          if (this.readyState === _5cb021885ef6.CONNECTING) throw new DOMException("Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.");
          let _85308e43d297 = _e408115c538a[0];
          _85308e43d297.buffer && (_85308e43d297 = _85308e43d297.buffer.slice(_85308e43d297.byteOffset, _85308e43d297.byteOffset + _85308e43d297.byteLength)), 
          _ce231c24b42d.call(this.channel.port1, {
            type: "data",
            data: _85308e43d297
          }, _85308e43d297 instanceof ArrayBuffer ? [ _85308e43d297 ] : []);
        }
        close(_e408115c538a, _85308e43d297) {
          _ce231c24b42d.call(this.channel.port1, {
            type: "close",
            closeCode: _e408115c538a,
            closeReason: _85308e43d297
          });
        }
      }
      function g(_e408115c538a, _85308e43d297, _0948873bd781) {
        console.error(`error while processing '${_0948873bd781}': `, _85308e43d297), _e408115c538a.postMessage({
          type: "error",
          error: _85308e43d297
        });
      }
      let _f59cf6266889 = [ "ws:", "wss:" ], _1e156e012532 = [ 101, 204, 205, 304 ], _39d3eae51e3c = [ 301, 302, 303, 307, 308 ];
      class w {
        worker;
        constructor(_e408115c538a) {
          this.worker = new p(_e408115c538a);
        }
        async getTransport() {
          return (await this.worker.sendMessage({
            type: "get"
          })).name;
        }
        async setTransport(_e408115c538a, _85308e43d297, _0948873bd781) {
          await this.setManualTransport(`\n\t\t\tconst { default: BareTransport } = await import("${_e408115c538a}");\n\t\t\treturn [BareTransport, "${_e408115c538a}"];\n\t\t`, _85308e43d297, _0948873bd781);
        }
        async setManualTransport(_e408115c538a, _85308e43d297, _0948873bd781) {
          if ("bare-mux-remote" === _e408115c538a) throw Error("Use setRemoteTransport.");
          await this.worker.sendMessage({
            type: "set",
            client: {
              function: _e408115c538a,
              args: _85308e43d297
            }
          }, _0948873bd781);
        }
        async setRemoteTransport(_e408115c538a, _85308e43d297) {
          let _0948873bd781 = new MessageChannel;
          _0948873bd781.port1.onmessage = async _85308e43d297 => {
            let _0948873bd781 = _85308e43d297.data.port, _6c53fc11c1e7 = _85308e43d297.data.message;
            if ("fetch" === _6c53fc11c1e7.type) try {
              _e408115c538a.ready || await _e408115c538a.init(), await async function(_e408115c538a, _85308e43d297, _0948873bd781) {
                let _6c53fc11c1e7 = await _0948873bd781.request(new URL(_e408115c538a.fetch.remote), _e408115c538a.fetch.method, _e408115c538a.fetch.body, _e408115c538a.fetch.headers, null);
                if (!function() {
                  if (null === _2b09e1ca183a) {
                    let _e408115c538a, _85308e43d297 = new MessageChannel, _0948873bd781 = new ReadableStream;
                    try {
                      _ce231c24b42d.call(_85308e43d297.port1, _0948873bd781, [ _0948873bd781 ]), _e408115c538a = !0;
                    } catch (_85308e43d297) {
                      _e408115c538a = !1;
                    }
                    return _2b09e1ca183a = _e408115c538a, _e408115c538a;
                  }
                  return _2b09e1ca183a;
                }() && _6c53fc11c1e7.body instanceof ReadableStream) {
                  let _e408115c538a = new Response(_6c53fc11c1e7.body);
                  _6c53fc11c1e7.body = await _e408115c538a.arrayBuffer();
                }
                _6c53fc11c1e7.body instanceof ReadableStream || _6c53fc11c1e7.body instanceof ArrayBuffer ? _ce231c24b42d.call(_85308e43d297, {
                  type: "fetch",
                  fetch: _6c53fc11c1e7
                }, [ _6c53fc11c1e7.body ]) : _ce231c24b42d.call(_85308e43d297, {
                  type: "fetch",
                  fetch: _6c53fc11c1e7
                });
              }(_6c53fc11c1e7, _0948873bd781, _e408115c538a);
            } catch (_e408115c538a) {
              g(_0948873bd781, _e408115c538a, "fetch");
            } else if ("websocket" === _6c53fc11c1e7.type) try {
              _e408115c538a.ready || await _e408115c538a.init(), await async function(_e408115c538a, _85308e43d297, _0948873bd781) {
                let [_6c53fc11c1e7, _06df19f8be6e] = _0948873bd781.connect(new URL(_e408115c538a.websocket.url), _e408115c538a.websocket.protocols, _e408115c538a.websocket.requestHeaders, _85308e43d297 => {
                  _ce231c24b42d.call(_e408115c538a.websocket.channel, {
                    type: "open",
                    args: [ _85308e43d297 ]
                  });
                }, _85308e43d297 => {
                  _85308e43d297 instanceof ArrayBuffer ? _ce231c24b42d.call(_e408115c538a.websocket.channel, {
                    type: "message",
                    args: [ _85308e43d297 ]
                  }, [ _85308e43d297 ]) : _ce231c24b42d.call(_e408115c538a.websocket.channel, {
                    type: "message",
                    args: [ _85308e43d297 ]
                  });
                }, (_85308e43d297, _0948873bd781) => {
                  _ce231c24b42d.call(_e408115c538a.websocket.channel, {
                    type: "close",
                    args: [ _85308e43d297, _0948873bd781 ]
                  });
                }, _85308e43d297 => {
                  _ce231c24b42d.call(_e408115c538a.websocket.channel, {
                    type: "error",
                    args: [ _85308e43d297 ]
                  });
                });
                _e408115c538a.websocket.channel.onmessage = _e408115c538a => {
                  "data" === _e408115c538a.data.type ? _6c53fc11c1e7(_e408115c538a.data.data) : "close" === _e408115c538a.data.type && _06df19f8be6e(_e408115c538a.data.closeCode, _e408115c538a.data.closeReason);
                }, _ce231c24b42d.call(_85308e43d297, {
                  type: "websocket"
                });
              }(_6c53fc11c1e7, _0948873bd781, _e408115c538a);
            } catch (_e408115c538a) {
              g(_0948873bd781, _e408115c538a, "websocket");
            }
          }, await this.worker.sendMessage({
            type: "set",
            client: {
              function: "bare-mux-remote",
              args: [ _0948873bd781.port2, _85308e43d297 ]
            }
          }, [ _0948873bd781.port2 ]);
        }
        getInnerPort() {
          return this.worker.port;
        }
      }
      class S {
        worker;
        constructor(_e408115c538a) {
          this.worker = new p(_e408115c538a);
        }
        createWebSocket(_e408115c538a, _85308e43d297 = [], _0948873bd781, _6c53fc11c1e7) {
          try {
            _e408115c538a = new URL(_e408115c538a);
          } catch (_85308e43d297) {
            throw new DOMException(`Faiiled to construct 'WebSocket': The URL '${_e408115c538a}' is invalid.`);
          }
          if (!_f59cf6266889.includes(_e408115c538a.protocol)) throw new DOMException(`Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '${_e408115c538a.protocol}' is not allowed.`);
          for (let _e408115c538a of (Array.isArray(_85308e43d297) || (_85308e43d297 = [ _85308e43d297 ]), 
          _85308e43d297 = _85308e43d297.map(String))) if (!function(_e408115c538a) {
            for (let _85308e43d297 = 0; _85308e43d297 < _e408115c538a.length; _85308e43d297++) {
              let _0948873bd781 = _e408115c538a[_85308e43d297];
              if (!"!#$%&'*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz|~".includes(_0948873bd781)) return !1;
            }
            return !0;
          }(_e408115c538a)) throw new DOMException(`Failed to construct 'WebSocket': The subprotocol '${_e408115c538a}' is invalid.`);
          return _6c53fc11c1e7 = _6c53fc11c1e7 || {}, new f(_e408115c538a, _85308e43d297, this.worker, _6c53fc11c1e7);
        }
        async fetch(_e408115c538a, _85308e43d297) {
          let _0948873bd781 = new Request(_e408115c538a, _85308e43d297), _06df19f8be6e = _85308e43d297?.headers || _0948873bd781.headers, _fbbba1a672e2 = _06df19f8be6e instanceof Headers ? Object.fromEntries(_06df19f8be6e) : _06df19f8be6e, _1087e8da3d1c = _0948873bd781.body, _ce231c24b42d = new URL(_0948873bd781.url);
          if (_ce231c24b42d.protocol.startsWith("blob:")) {
            let _e408115c538a = await _6c53fc11c1e7(_ce231c24b42d), _85308e43d297 = new Response(_e408115c538a.body, _e408115c538a);
            return _85308e43d297.rawHeaders = Object.fromEntries(_e408115c538a.headers), _85308e43d297.rawResponse = {
              body: _e408115c538a.body,
              headers: Object.fromEntries(_e408115c538a.headers),
              status: _e408115c538a.status,
              statusText: _e408115c538a.statusText
            }, _85308e43d297.finalURL = _ce231c24b42d.toString(), _85308e43d297;
          }
          for (let _e408115c538a = 0; ;_e408115c538a++) {
            let _6c53fc11c1e7 = (await this.worker.sendMessage({
              type: "fetch",
              fetch: {
                remote: _ce231c24b42d.toString(),
                method: _0948873bd781.method,
                headers: _fbbba1a672e2,
                body: _1087e8da3d1c || void 0
              }
            }, _1087e8da3d1c ? [ _1087e8da3d1c ] : [])).fetch, _06df19f8be6e = new Response(_1e156e012532.includes(_6c53fc11c1e7.status) ? void 0 : _6c53fc11c1e7.body, {
              headers: new Headers(_6c53fc11c1e7.headers),
              status: _6c53fc11c1e7.status,
              statusText: _6c53fc11c1e7.statusText
            });
            _06df19f8be6e.rawHeaders = _6c53fc11c1e7.headers, _06df19f8be6e.rawResponse = _6c53fc11c1e7, 
            _06df19f8be6e.finalURL = _ce231c24b42d.toString();
            let _5cb021885ef6 = _85308e43d297?.redirect || _0948873bd781.redirect;
            if (!_39d3eae51e3c.includes(_06df19f8be6e.status)) return _06df19f8be6e;
            switch (_5cb021885ef6) {
             case "follow":
              {
                let _85308e43d297 = _06df19f8be6e.headers.get("location");
                if (20 > _e408115c538a && null !== _85308e43d297) {
                  _ce231c24b42d = new URL(_85308e43d297, _ce231c24b42d);
                  continue;
                }
                throw TypeError("Failed to fetch");
              }

             case "error":
              throw TypeError("Failed to fetch");

             case "manual":
              return _06df19f8be6e;
            }
          }
        }
      }
      console.debug("bare-mux: running v2.1.9 (build dc9dc6e)");
    },
    8832: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.d(_85308e43d297, {
        H: () => _6c53fc11c1e7,
        L: () => _06df19f8be6e
      });
      let _6c53fc11c1e7 = new Map([ "altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath" ].map(_e408115c538a => [ _e408115c538a.toLowerCase(), _e408115c538a ])), _06df19f8be6e = new Map([ "definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan" ].map(_e408115c538a => [ _e408115c538a.toLowerCase(), _e408115c538a ]));
    },
    6498: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.d(_85308e43d297, {
        A: () => _5cb021885ef6
      });
      var _6c53fc11c1e7 = _0948873bd781(2743), _06df19f8be6e = _0948873bd781(8466), _fbbba1a672e2 = _0948873bd781(8832);
      let _1087e8da3d1c = new Set([ "style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript" ]);
      function o(_e408115c538a) {
        return _e408115c538a.replace(/"/g, "&quot;");
      }
      let _ce231c24b42d = new Set([ "area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr" ]), _5cb021885ef6 = function e(_e408115c538a, _85308e43d297 = {}) {
        let _0948873bd781 = "length" in _e408115c538a ? _e408115c538a : [ _e408115c538a ], _5cb021885ef6 = "";
        for (let _e408115c538a = 0; _e408115c538a < _0948873bd781.length; _e408115c538a++) _5cb021885ef6 += function(_e408115c538a, _85308e43d297) {
          var _0948873bd781, _5cb021885ef6, _1e156e012532;
          switch (_e408115c538a.type) {
           case _6c53fc11c1e7.bL:
            return e(_e408115c538a.children, _85308e43d297);

           case _6c53fc11c1e7.fl:
           case _6c53fc11c1e7.WL:
            return _0948873bd781 = _e408115c538a, `<${_0948873bd781.data}>`;

           case _6c53fc11c1e7.Mw:
            return _5cb021885ef6 = _e408115c538a, `\x3c!--${_5cb021885ef6.data}--\x3e`;

           case _6c53fc11c1e7.KB:
            return _1e156e012532 = _e408115c538a, `<![CDATA[${_1e156e012532.children[0].data}]]>`;

           case _6c53fc11c1e7.eF:
           case _6c53fc11c1e7.OF:
           case _6c53fc11c1e7.vw:
            return function(_e408115c538a, _85308e43d297) {
              var _0948873bd781;
              "foreign" === _85308e43d297.xmlMode && (_e408115c538a.name = null != (_0948873bd781 = _fbbba1a672e2.H.get(_e408115c538a.name)) ? _0948873bd781 : _e408115c538a.name, 
              _e408115c538a.parent && _2b09e1ca183a.has(_e408115c538a.parent.name) && (_85308e43d297 = {
                ..._85308e43d297,
                xmlMode: !1
              })), !_85308e43d297.xmlMode && _f59cf6266889.has(_e408115c538a.name) && (_85308e43d297 = {
                ..._85308e43d297,
                xmlMode: "foreign"
              });
              let _6c53fc11c1e7 = `<${_e408115c538a.name}`, _1087e8da3d1c = function(_e408115c538a, _85308e43d297) {
                var _0948873bd781;
                if (!_e408115c538a) return;
                let _6c53fc11c1e7 = (null != (_0948873bd781 = _85308e43d297.encodeEntities) ? _0948873bd781 : _85308e43d297.decodeEntities) === !1 ? o : _85308e43d297.xmlMode || "utf8" !== _85308e43d297.encodeEntities ? _06df19f8be6e.WY : _06df19f8be6e.Gj;
                return Object.keys(_e408115c538a).map(_0948873bd781 => {
                  var _06df19f8be6e, _1087e8da3d1c;
                  let _ce231c24b42d = null != (_06df19f8be6e = _e408115c538a[_0948873bd781]) ? _06df19f8be6e : "";
                  return ("foreign" === _85308e43d297.xmlMode && (_0948873bd781 = null != (_1087e8da3d1c = _fbbba1a672e2.L.get(_0948873bd781)) ? _1087e8da3d1c : _0948873bd781), 
                  _85308e43d297.emptyAttrs || _85308e43d297.xmlMode || "" !== _ce231c24b42d) ? `${_0948873bd781}="${_6c53fc11c1e7(_ce231c24b42d)}"` : _0948873bd781;
                }).join(" ");
              }(_e408115c538a.attribs, _85308e43d297);
              return _1087e8da3d1c && (_6c53fc11c1e7 += ` ${_1087e8da3d1c}`), 0 === _e408115c538a.children.length && (_85308e43d297.xmlMode ? !1 !== _85308e43d297.selfClosingTags : _85308e43d297.selfClosingTags && _ce231c24b42d.has(_e408115c538a.name)) ? (_85308e43d297.xmlMode || (_6c53fc11c1e7 += " "), 
              _6c53fc11c1e7 += "/>") : (_6c53fc11c1e7 += ">", _e408115c538a.children.length > 0 && (_6c53fc11c1e7 += e(_e408115c538a.children, _85308e43d297)), 
              (_85308e43d297.xmlMode || !_ce231c24b42d.has(_e408115c538a.name)) && (_6c53fc11c1e7 += `</${_e408115c538a.name}>`)), 
              _6c53fc11c1e7;
            }(_e408115c538a, _85308e43d297);

           case _6c53fc11c1e7.EY:
            return function(_e408115c538a, _85308e43d297) {
              var _0948873bd781;
              let _6c53fc11c1e7 = _e408115c538a.data || "";
              return (null != (_0948873bd781 = _85308e43d297.encodeEntities) ? _0948873bd781 : _85308e43d297.decodeEntities) === !1 || !_85308e43d297.xmlMode && _e408115c538a.parent && _1087e8da3d1c.has(_e408115c538a.parent.name) || (_6c53fc11c1e7 = _85308e43d297.xmlMode || "utf8" !== _85308e43d297.encodeEntities ? (0, 
              _06df19f8be6e.WY)(_6c53fc11c1e7) : (0, _06df19f8be6e.X1)(_6c53fc11c1e7)), _6c53fc11c1e7;
            }(_e408115c538a, _85308e43d297);
          }
        }(_0948873bd781[_e408115c538a], _85308e43d297);
        return _5cb021885ef6;
      }, _2b09e1ca183a = new Set([ "mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title" ]), _f59cf6266889 = new Set([ "svg", "math" ]);
    },
    2743: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      var _6c53fc11c1e7, _06df19f8be6e;
      function a(_e408115c538a) {
        return _e408115c538a.type === _6c53fc11c1e7.Tag || _e408115c538a.type === _6c53fc11c1e7.Script || _e408115c538a.type === _6c53fc11c1e7.Style;
      }
      _0948873bd781.d(_85308e43d297, {
        EY: () => _1087e8da3d1c,
        KB: () => _39d3eae51e3c,
        Mw: () => _5cb021885ef6,
        OF: () => _f59cf6266889,
        RJ: () => _6c53fc11c1e7,
        WL: () => _ce231c24b42d,
        bL: () => _fbbba1a672e2,
        dz: () => a,
        eF: () => _2b09e1ca183a,
        fl: () => _687b012f5f4d,
        vw: () => _1e156e012532
      }), (_06df19f8be6e = _6c53fc11c1e7 || (_6c53fc11c1e7 = {})).Root = "root", _06df19f8be6e.Text = "text", 
      _06df19f8be6e.Directive = "directive", _06df19f8be6e.Comment = "comment", _06df19f8be6e.Script = "script", 
      _06df19f8be6e.Style = "style", _06df19f8be6e.Tag = "tag", _06df19f8be6e.CDATA = "cdata", 
      _06df19f8be6e.Doctype = "doctype";
      let _fbbba1a672e2 = _6c53fc11c1e7.Root, _1087e8da3d1c = _6c53fc11c1e7.Text, _ce231c24b42d = _6c53fc11c1e7.Directive, _5cb021885ef6 = _6c53fc11c1e7.Comment, _2b09e1ca183a = _6c53fc11c1e7.Script, _f59cf6266889 = _6c53fc11c1e7.Style, _1e156e012532 = _6c53fc11c1e7.Tag, _39d3eae51e3c = _6c53fc11c1e7.CDATA, _687b012f5f4d = _6c53fc11c1e7.Doctype;
    },
    8866: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.d(_85308e43d297, {
        DV: () => s,
        Hg: () => _06df19f8be6e.Hg,
        Mw: () => _06df19f8be6e.Mw
      });
      var _6c53fc11c1e7 = _0948873bd781(2743), _06df19f8be6e = _0948873bd781(6072);
      let _fbbba1a672e2 = {
        withStartIndices: !1,
        withEndIndices: !1,
        xmlMode: !1
      };
      class s {
        constructor(_e408115c538a, _85308e43d297, _0948873bd781) {
          this.dom = [], this.root = new _06df19f8be6e.yo(this.dom), this.done = !1, this.tagStack = [ this.root ], 
          this.lastNode = null, this.parser = null, "function" == typeof _85308e43d297 && (_0948873bd781 = _85308e43d297, 
          _85308e43d297 = _fbbba1a672e2), "object" == typeof _e408115c538a && (_85308e43d297 = _e408115c538a, 
          _e408115c538a = void 0), this.callback = null != _e408115c538a ? _e408115c538a : null, 
          this.options = null != _85308e43d297 ? _85308e43d297 : _fbbba1a672e2, this.elementCB = null != _0948873bd781 ? _0948873bd781 : null;
        }
        onparserinit(_e408115c538a) {
          this.parser = _e408115c538a;
        }
        onreset() {
          this.dom = [], this.root = new _06df19f8be6e.yo(this.dom), this.done = !1, this.tagStack = [ this.root ], 
          this.lastNode = null, this.parser = null;
        }
        onend() {
          this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
        }
        onerror(_e408115c538a) {
          this.handleCallback(_e408115c538a);
        }
        onclosetag() {
          this.lastNode = null;
          let _e408115c538a = this.tagStack.pop();
          this.options.withEndIndices && (_e408115c538a.endIndex = this.parser.endIndex), 
          this.elementCB && this.elementCB(_e408115c538a);
        }
        onopentag(_e408115c538a, _85308e43d297) {
          let _0948873bd781 = this.options.xmlMode ? _6c53fc11c1e7.RJ.Tag : void 0, _fbbba1a672e2 = new _06df19f8be6e.Hg(_e408115c538a, _85308e43d297, void 0, _0948873bd781);
          this.addNode(_fbbba1a672e2), this.tagStack.push(_fbbba1a672e2);
        }
        ontext(_e408115c538a) {
          let {lastNode: _85308e43d297} = this;
          if (_85308e43d297 && _85308e43d297.type === _6c53fc11c1e7.RJ.Text) _85308e43d297.data += _e408115c538a, 
          this.options.withEndIndices && (_85308e43d297.endIndex = this.parser.endIndex); else {
            let _85308e43d297 = new _06df19f8be6e.EY(_e408115c538a);
            this.addNode(_85308e43d297), this.lastNode = _85308e43d297;
          }
        }
        oncomment(_e408115c538a) {
          if (this.lastNode && this.lastNode.type === _6c53fc11c1e7.RJ.Comment) {
            this.lastNode.data += _e408115c538a;
            return;
          }
          let _85308e43d297 = new _06df19f8be6e.Mw(_e408115c538a);
          this.addNode(_85308e43d297), this.lastNode = _85308e43d297;
        }
        oncommentend() {
          this.lastNode = null;
        }
        oncdatastart() {
          let _e408115c538a = new _06df19f8be6e.EY(""), _85308e43d297 = new _06df19f8be6e.KB([ _e408115c538a ]);
          this.addNode(_85308e43d297), _e408115c538a.parent = _85308e43d297, this.lastNode = _e408115c538a;
        }
        oncdataend() {
          this.lastNode = null;
        }
        onprocessinginstruction(_e408115c538a, _85308e43d297) {
          let _0948873bd781 = new _06df19f8be6e.Cd(_e408115c538a, _85308e43d297);
          this.addNode(_0948873bd781);
        }
        handleCallback(_e408115c538a) {
          if ("function" == typeof this.callback) this.callback(_e408115c538a, this.dom); else if (_e408115c538a) throw _e408115c538a;
        }
        addNode(_e408115c538a) {
          let _85308e43d297 = this.tagStack[this.tagStack.length - 1], _0948873bd781 = _85308e43d297.children[_85308e43d297.children.length - 1];
          this.options.withStartIndices && (_e408115c538a.startIndex = this.parser.startIndex), 
          this.options.withEndIndices && (_e408115c538a.endIndex = this.parser.endIndex), 
          _85308e43d297.children.push(_e408115c538a), _0948873bd781 && (_e408115c538a.prev = _0948873bd781, 
          _0948873bd781.next = _e408115c538a), _e408115c538a.parent = _85308e43d297, this.lastNode = null;
        }
      }
    },
    6072: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.d(_85308e43d297, {
        Cd: () => l,
        EY: () => s,
        Hg: () => h,
        KB: () => u,
        Mw: () => o,
        yo: () => d
      });
      var _6c53fc11c1e7 = _0948873bd781(2743);
      class i {
        constructor() {
          this.parent = null, this.prev = null, this.next = null, this.startIndex = null, 
          this.endIndex = null;
        }
        get parentNode() {
          return this.parent;
        }
        set parentNode(_e408115c538a) {
          this.parent = _e408115c538a;
        }
        get previousSibling() {
          return this.prev;
        }
        set previousSibling(_e408115c538a) {
          this.prev = _e408115c538a;
        }
        get nextSibling() {
          return this.next;
        }
        set nextSibling(_e408115c538a) {
          this.next = _e408115c538a;
        }
        cloneNode(_e408115c538a = !1) {
          return p(this, _e408115c538a);
        }
      }
      class a extends i {
        constructor(_e408115c538a) {
          super(), this.data = _e408115c538a;
        }
        get nodeValue() {
          return this.data;
        }
        set nodeValue(_e408115c538a) {
          this.data = _e408115c538a;
        }
      }
      class s extends a {
        constructor() {
          super(...arguments), this.type = _6c53fc11c1e7.RJ.Text;
        }
        get nodeType() {
          return 3;
        }
      }
      class o extends a {
        constructor() {
          super(...arguments), this.type = _6c53fc11c1e7.RJ.Comment;
        }
        get nodeType() {
          return 8;
        }
      }
      class l extends a {
        constructor(_e408115c538a, _85308e43d297) {
          super(_85308e43d297), this.name = _e408115c538a, this.type = _6c53fc11c1e7.RJ.Directive;
        }
        get nodeType() {
          return 1;
        }
      }
      class c extends i {
        constructor(_e408115c538a) {
          super(), this.children = _e408115c538a;
        }
        get firstChild() {
          var _e408115c538a;
          return null != (_e408115c538a = this.children[0]) ? _e408115c538a : null;
        }
        get lastChild() {
          return this.children.length > 0 ? this.children[this.children.length - 1] : null;
        }
        get childNodes() {
          return this.children;
        }
        set childNodes(_e408115c538a) {
          this.children = _e408115c538a;
        }
      }
      class u extends c {
        constructor() {
          super(...arguments), this.type = _6c53fc11c1e7.RJ.CDATA;
        }
        get nodeType() {
          return 4;
        }
      }
      class d extends c {
        constructor() {
          super(...arguments), this.type = _6c53fc11c1e7.RJ.Root;
        }
        get nodeType() {
          return 9;
        }
      }
      class h extends c {
        constructor(_e408115c538a, _85308e43d297, _0948873bd781 = [], _06df19f8be6e = ("script" === _e408115c538a ? _6c53fc11c1e7.RJ.Script : "style" === _e408115c538a ? _6c53fc11c1e7.RJ.Style : _6c53fc11c1e7.RJ.Tag)) {
          super(_0948873bd781), this.name = _e408115c538a, this.attribs = _85308e43d297, this.type = _06df19f8be6e;
        }
        get nodeType() {
          return 1;
        }
        get tagName() {
          return this.name;
        }
        set tagName(_e408115c538a) {
          this.name = _e408115c538a;
        }
        get attributes() {
          return Object.keys(this.attribs).map(_e408115c538a => {
            var _85308e43d297, _0948873bd781;
            return {
              name: _e408115c538a,
              value: this.attribs[_e408115c538a],
              namespace: null == (_85308e43d297 = this["x-attribsNamespace"]) ? void 0 : _85308e43d297[_e408115c538a],
              prefix: null == (_0948873bd781 = this["x-attribsPrefix"]) ? void 0 : _0948873bd781[_e408115c538a]
            };
          });
        }
      }
      function p(_e408115c538a, _85308e43d297 = !1) {
        let _0948873bd781;
        if (_e408115c538a.type === _6c53fc11c1e7.RJ.Text) _0948873bd781 = new s(_e408115c538a.data); else if (_e408115c538a.type === _6c53fc11c1e7.RJ.Comment) _0948873bd781 = new o(_e408115c538a.data); else if ((0, 
        _6c53fc11c1e7.dz)(_e408115c538a)) {
          let _6c53fc11c1e7 = _85308e43d297 ? f(_e408115c538a.children) : [], _06df19f8be6e = new h(_e408115c538a.name, {
            ..._e408115c538a.attribs
          }, _6c53fc11c1e7);
          _6c53fc11c1e7.forEach(_e408115c538a => _e408115c538a.parent = _06df19f8be6e), null != _e408115c538a.namespace && (_06df19f8be6e.namespace = _e408115c538a.namespace), 
          _e408115c538a["x-attribsNamespace"] && (_06df19f8be6e["x-attribsNamespace"] = {
            ..._e408115c538a["x-attribsNamespace"]
          }), _e408115c538a["x-attribsPrefix"] && (_06df19f8be6e["x-attribsPrefix"] = {
            ..._e408115c538a["x-attribsPrefix"]
          }), _0948873bd781 = _06df19f8be6e;
        } else if (_e408115c538a.type === _6c53fc11c1e7.RJ.CDATA) {
          let _6c53fc11c1e7 = _85308e43d297 ? f(_e408115c538a.children) : [], _06df19f8be6e = new u(_6c53fc11c1e7);
          _6c53fc11c1e7.forEach(_e408115c538a => _e408115c538a.parent = _06df19f8be6e), _0948873bd781 = _06df19f8be6e;
        } else if (_e408115c538a.type === _6c53fc11c1e7.RJ.Root) {
          let _6c53fc11c1e7 = _85308e43d297 ? f(_e408115c538a.children) : [], _06df19f8be6e = new d(_6c53fc11c1e7);
          _6c53fc11c1e7.forEach(_e408115c538a => _e408115c538a.parent = _06df19f8be6e), _e408115c538a["x-mode"] && (_06df19f8be6e["x-mode"] = _e408115c538a["x-mode"]), 
          _0948873bd781 = _06df19f8be6e;
        } else if (_e408115c538a.type === _6c53fc11c1e7.RJ.Directive) {
          let _85308e43d297 = new l(_e408115c538a.name, _e408115c538a.data);
          null != _e408115c538a["x-name"] && (_85308e43d297["x-name"] = _e408115c538a["x-name"], 
          _85308e43d297["x-publicId"] = _e408115c538a["x-publicId"], _85308e43d297["x-systemId"] = _e408115c538a["x-systemId"]), 
          _0948873bd781 = _85308e43d297;
        } else throw Error(`Not implemented yet: ${_e408115c538a.type}`);
        return _0948873bd781.startIndex = _e408115c538a.startIndex, _0948873bd781.endIndex = _e408115c538a.endIndex, 
        null != _e408115c538a.sourceCodeLocation && (_0948873bd781.sourceCodeLocation = _e408115c538a.sourceCodeLocation), 
        _0948873bd781;
      }
      function f(_e408115c538a) {
        let _85308e43d297 = _e408115c538a.map(_e408115c538a => p(_e408115c538a, !0));
        for (let _e408115c538a = 1; _e408115c538a < _85308e43d297.length; _e408115c538a++) _85308e43d297[_e408115c538a].prev = _85308e43d297[_e408115c538a - 1], 
        _85308e43d297[_e408115c538a - 1].next = _85308e43d297[_e408115c538a];
        return _85308e43d297;
      }
    },
    3256: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781(5016), _0948873bd781(1050);
    },
    6812: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      var _6c53fc11c1e7, _06df19f8be6e;
      _0948873bd781(8866), (_06df19f8be6e = _6c53fc11c1e7 || (_6c53fc11c1e7 = {}))[_06df19f8be6e.DISCONNECTED = 1] = "DISCONNECTED", 
      _06df19f8be6e[_06df19f8be6e.PRECEDING = 2] = "PRECEDING", _06df19f8be6e[_06df19f8be6e.FOLLOWING = 4] = "FOLLOWING", 
      _06df19f8be6e[_06df19f8be6e.CONTAINS = 8] = "CONTAINS", _06df19f8be6e[_06df19f8be6e.CONTAINED_BY = 16] = "CONTAINED_BY";
    },
    4993: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781(5016), _0948873bd781(4647), _0948873bd781(9861), _0948873bd781(1050), 
      _0948873bd781(6812), _0948873bd781(3256), _0948873bd781(8866);
    },
    1050: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781(8866), _0948873bd781(9861);
    },
    9861: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781(8866);
    },
    5016: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781(8866), _0948873bd781(6498), _0948873bd781(2743);
    },
    4647: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781(8866);
    },
    2146: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      var _6c53fc11c1e7;
      _0948873bd781.d(_85308e43d297, {
        MK: () => _fbbba1a672e2,
        y6: () => s
      });
      let _06df19f8be6e = new Map([ [ 0, 65533 ], [ 128, 8364 ], [ 130, 8218 ], [ 131, 402 ], [ 132, 8222 ], [ 133, 8230 ], [ 134, 8224 ], [ 135, 8225 ], [ 136, 710 ], [ 137, 8240 ], [ 138, 352 ], [ 139, 8249 ], [ 140, 338 ], [ 142, 381 ], [ 145, 8216 ], [ 146, 8217 ], [ 147, 8220 ], [ 148, 8221 ], [ 149, 8226 ], [ 150, 8211 ], [ 151, 8212 ], [ 152, 732 ], [ 153, 8482 ], [ 154, 353 ], [ 155, 8250 ], [ 156, 339 ], [ 158, 382 ], [ 159, 376 ] ]), _fbbba1a672e2 = null != (_6c53fc11c1e7 = String.fromCodePoint) ? _6c53fc11c1e7 : function(_e408115c538a) {
        let _85308e43d297 = "";
        return _e408115c538a > 65535 && (_e408115c538a -= 65536, _85308e43d297 += String.fromCharCode(_e408115c538a >>> 10 & 1023 | 55296), 
        _e408115c538a = 56320 | 1023 & _e408115c538a), _85308e43d297 += String.fromCharCode(_e408115c538a);
      };
      function s(_e408115c538a) {
        var _85308e43d297;
        return _e408115c538a >= 55296 && _e408115c538a <= 57343 || _e408115c538a > 1114111 ? 65533 : null != (_85308e43d297 = _06df19f8be6e.get(_e408115c538a)) ? _85308e43d297 : _e408115c538a;
      }
    },
    2990: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.d(_85308e43d297, {
        FJ: () => _f59cf6266889,
        MK: () => _687b012f5f4d.MK,
        Wf: () => g,
        qN: () => _1e156e012532.q,
        sr: () => _39d3eae51e3c.s
      });
      var _6c53fc11c1e7, _06df19f8be6e, _fbbba1a672e2, _1087e8da3d1c, _ce231c24b42d, _5cb021885ef6, _2b09e1ca183a, _f59cf6266889, _1e156e012532 = _0948873bd781(7259), _39d3eae51e3c = _0948873bd781(5949), _687b012f5f4d = _0948873bd781(2146);
      function f(_e408115c538a) {
        return _e408115c538a >= _ce231c24b42d.ZERO && _e408115c538a <= _ce231c24b42d.NINE;
      }
      (_6c53fc11c1e7 = _ce231c24b42d || (_ce231c24b42d = {}))[_6c53fc11c1e7.NUM = 35] = "NUM", 
      _6c53fc11c1e7[_6c53fc11c1e7.SEMI = 59] = "SEMI", _6c53fc11c1e7[_6c53fc11c1e7.EQUALS = 61] = "EQUALS", 
      _6c53fc11c1e7[_6c53fc11c1e7.ZERO = 48] = "ZERO", _6c53fc11c1e7[_6c53fc11c1e7.NINE = 57] = "NINE", 
      _6c53fc11c1e7[_6c53fc11c1e7.LOWER_A = 97] = "LOWER_A", _6c53fc11c1e7[_6c53fc11c1e7.LOWER_F = 102] = "LOWER_F", 
      _6c53fc11c1e7[_6c53fc11c1e7.LOWER_X = 120] = "LOWER_X", _6c53fc11c1e7[_6c53fc11c1e7.LOWER_Z = 122] = "LOWER_Z", 
      _6c53fc11c1e7[_6c53fc11c1e7.UPPER_A = 65] = "UPPER_A", _6c53fc11c1e7[_6c53fc11c1e7.UPPER_F = 70] = "UPPER_F", 
      _6c53fc11c1e7[_6c53fc11c1e7.UPPER_Z = 90] = "UPPER_Z", (_06df19f8be6e = _5cb021885ef6 || (_5cb021885ef6 = {}))[_06df19f8be6e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", 
      _06df19f8be6e[_06df19f8be6e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", _06df19f8be6e[_06df19f8be6e.JUMP_TABLE = 127] = "JUMP_TABLE", 
      (_fbbba1a672e2 = _2b09e1ca183a || (_2b09e1ca183a = {}))[_fbbba1a672e2.EntityStart = 0] = "EntityStart", 
      _fbbba1a672e2[_fbbba1a672e2.NumericStart = 1] = "NumericStart", _fbbba1a672e2[_fbbba1a672e2.NumericDecimal = 2] = "NumericDecimal", 
      _fbbba1a672e2[_fbbba1a672e2.NumericHex = 3] = "NumericHex", _fbbba1a672e2[_fbbba1a672e2.NamedEntity = 4] = "NamedEntity", 
      (_1087e8da3d1c = _f59cf6266889 || (_f59cf6266889 = {}))[_1087e8da3d1c.Legacy = 0] = "Legacy", 
      _1087e8da3d1c[_1087e8da3d1c.Strict = 1] = "Strict", _1087e8da3d1c[_1087e8da3d1c.Attribute = 2] = "Attribute";
      class g {
        constructor(_e408115c538a, _85308e43d297, _0948873bd781) {
          this.decodeTree = _e408115c538a, this.emitCodePoint = _85308e43d297, this.errors = _0948873bd781, 
          this.state = _2b09e1ca183a.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, 
          this.excess = 1, this.decodeMode = _f59cf6266889.Strict;
        }
        startEntity(_e408115c538a) {
          this.decodeMode = _e408115c538a, this.state = _2b09e1ca183a.EntityStart, this.result = 0, 
          this.treeIndex = 0, this.excess = 1, this.consumed = 1;
        }
        write(_e408115c538a, _85308e43d297) {
          switch (this.state) {
           case _2b09e1ca183a.EntityStart:
            if (_e408115c538a.charCodeAt(_85308e43d297) === _ce231c24b42d.NUM) return this.state = _2b09e1ca183a.NumericStart, 
            this.consumed += 1, this.stateNumericStart(_e408115c538a, _85308e43d297 + 1);
            return this.state = _2b09e1ca183a.NamedEntity, this.stateNamedEntity(_e408115c538a, _85308e43d297);

           case _2b09e1ca183a.NumericStart:
            return this.stateNumericStart(_e408115c538a, _85308e43d297);

           case _2b09e1ca183a.NumericDecimal:
            return this.stateNumericDecimal(_e408115c538a, _85308e43d297);

           case _2b09e1ca183a.NumericHex:
            return this.stateNumericHex(_e408115c538a, _85308e43d297);

           case _2b09e1ca183a.NamedEntity:
            return this.stateNamedEntity(_e408115c538a, _85308e43d297);
          }
        }
        stateNumericStart(_e408115c538a, _85308e43d297) {
          return _85308e43d297 >= _e408115c538a.length ? -1 : (32 | _e408115c538a.charCodeAt(_85308e43d297)) === _ce231c24b42d.LOWER_X ? (this.state = _2b09e1ca183a.NumericHex, 
          this.consumed += 1, this.stateNumericHex(_e408115c538a, _85308e43d297 + 1)) : (this.state = _2b09e1ca183a.NumericDecimal, 
          this.stateNumericDecimal(_e408115c538a, _85308e43d297));
        }
        addToNumericResult(_e408115c538a, _85308e43d297, _0948873bd781, _6c53fc11c1e7) {
          if (_85308e43d297 !== _0948873bd781) {
            let _06df19f8be6e = _0948873bd781 - _85308e43d297;
            this.result = this.result * Math.pow(_6c53fc11c1e7, _06df19f8be6e) + Number.parseInt(_e408115c538a.substr(_85308e43d297, _06df19f8be6e), _6c53fc11c1e7), 
            this.consumed += _06df19f8be6e;
          }
        }
        stateNumericHex(_e408115c538a, _85308e43d297) {
          let _0948873bd781 = _85308e43d297;
          for (;_85308e43d297 < _e408115c538a.length; ) {
            var _6c53fc11c1e7;
            let _06df19f8be6e = _e408115c538a.charCodeAt(_85308e43d297);
            if (!f(_06df19f8be6e) && (!((_6c53fc11c1e7 = _06df19f8be6e) >= _ce231c24b42d.UPPER_A) || !(_6c53fc11c1e7 <= _ce231c24b42d.UPPER_F)) && (!(_6c53fc11c1e7 >= _ce231c24b42d.LOWER_A) || !(_6c53fc11c1e7 <= _ce231c24b42d.LOWER_F))) return this.addToNumericResult(_e408115c538a, _0948873bd781, _85308e43d297, 16), 
            this.emitNumericEntity(_06df19f8be6e, 3);
            _85308e43d297 += 1;
          }
          return this.addToNumericResult(_e408115c538a, _0948873bd781, _85308e43d297, 16), 
          -1;
        }
        stateNumericDecimal(_e408115c538a, _85308e43d297) {
          let _0948873bd781 = _85308e43d297;
          for (;_85308e43d297 < _e408115c538a.length; ) {
            let _6c53fc11c1e7 = _e408115c538a.charCodeAt(_85308e43d297);
            if (!f(_6c53fc11c1e7)) return this.addToNumericResult(_e408115c538a, _0948873bd781, _85308e43d297, 10), 
            this.emitNumericEntity(_6c53fc11c1e7, 2);
            _85308e43d297 += 1;
          }
          return this.addToNumericResult(_e408115c538a, _0948873bd781, _85308e43d297, 10), 
          -1;
        }
        emitNumericEntity(_e408115c538a, _85308e43d297) {
          var _0948873bd781;
          if (this.consumed <= _85308e43d297) return null == (_0948873bd781 = this.errors) || _0948873bd781.absenceOfDigitsInNumericCharacterReference(this.consumed), 
          0;
          if (_e408115c538a === _ce231c24b42d.SEMI) this.consumed += 1; else if (this.decodeMode === _f59cf6266889.Strict) return 0;
          return this.emitCodePoint((0, _687b012f5f4d.y6)(this.result), this.consumed), this.errors && (_e408115c538a !== _ce231c24b42d.SEMI && this.errors.missingSemicolonAfterCharacterReference(), 
          this.errors.validateNumericCharacterReference(this.result)), this.consumed;
        }
        stateNamedEntity(_e408115c538a, _85308e43d297) {
          let {decodeTree: _0948873bd781} = this, _6c53fc11c1e7 = _0948873bd781[this.treeIndex], _06df19f8be6e = (_6c53fc11c1e7 & _5cb021885ef6.VALUE_LENGTH) >> 14;
          for (;_85308e43d297 < _e408115c538a.length; _85308e43d297++, this.excess++) {
            let _fbbba1a672e2 = _e408115c538a.charCodeAt(_85308e43d297);
            if (this.treeIndex = function(_e408115c538a, _85308e43d297, _0948873bd781, _6c53fc11c1e7) {
              let _06df19f8be6e = (_85308e43d297 & _5cb021885ef6.BRANCH_LENGTH) >> 7, _fbbba1a672e2 = _85308e43d297 & _5cb021885ef6.JUMP_TABLE;
              if (0 === _06df19f8be6e) return 0 !== _fbbba1a672e2 && _6c53fc11c1e7 === _fbbba1a672e2 ? _0948873bd781 : -1;
              if (_fbbba1a672e2) {
                let _85308e43d297 = _6c53fc11c1e7 - _fbbba1a672e2;
                return _85308e43d297 < 0 || _85308e43d297 >= _06df19f8be6e ? -1 : _e408115c538a[_0948873bd781 + _85308e43d297] - 1;
              }
              let _1087e8da3d1c = _0948873bd781, _ce231c24b42d = _1087e8da3d1c + _06df19f8be6e - 1;
              for (;_1087e8da3d1c <= _ce231c24b42d; ) {
                let _85308e43d297 = _1087e8da3d1c + _ce231c24b42d >>> 1, _0948873bd781 = _e408115c538a[_85308e43d297];
                if (_0948873bd781 < _6c53fc11c1e7) _1087e8da3d1c = _85308e43d297 + 1; else {
                  if (!(_0948873bd781 > _6c53fc11c1e7)) return _e408115c538a[_85308e43d297 + _06df19f8be6e];
                  _ce231c24b42d = _85308e43d297 - 1;
                }
              }
              return -1;
            }(_0948873bd781, _6c53fc11c1e7, this.treeIndex + Math.max(1, _06df19f8be6e), _fbbba1a672e2), 
            this.treeIndex < 0) return 0 === this.result || this.decodeMode === _f59cf6266889.Attribute && (0 === _06df19f8be6e || function(_e408115c538a) {
              var _85308e43d297;
              return _e408115c538a === _ce231c24b42d.EQUALS || (_85308e43d297 = _e408115c538a) >= _ce231c24b42d.UPPER_A && _85308e43d297 <= _ce231c24b42d.UPPER_Z || _85308e43d297 >= _ce231c24b42d.LOWER_A && _85308e43d297 <= _ce231c24b42d.LOWER_Z || f(_85308e43d297);
            }(_fbbba1a672e2)) ? 0 : this.emitNotTerminatedNamedEntity();
            if (0 != (_06df19f8be6e = ((_6c53fc11c1e7 = _0948873bd781[this.treeIndex]) & _5cb021885ef6.VALUE_LENGTH) >> 14)) {
              if (_fbbba1a672e2 === _ce231c24b42d.SEMI) return this.emitNamedEntityData(this.treeIndex, _06df19f8be6e, this.consumed + this.excess);
              this.decodeMode !== _f59cf6266889.Strict && (this.result = this.treeIndex, this.consumed += this.excess, 
              this.excess = 0);
            }
          }
          return -1;
        }
        emitNotTerminatedNamedEntity() {
          var _e408115c538a;
          let {result: _85308e43d297, decodeTree: _0948873bd781} = this, _6c53fc11c1e7 = (_0948873bd781[_85308e43d297] & _5cb021885ef6.VALUE_LENGTH) >> 14;
          return this.emitNamedEntityData(_85308e43d297, _6c53fc11c1e7, this.consumed), null == (_e408115c538a = this.errors) || _e408115c538a.missingSemicolonAfterCharacterReference(), 
          this.consumed;
        }
        emitNamedEntityData(_e408115c538a, _85308e43d297, _0948873bd781) {
          let {decodeTree: _6c53fc11c1e7} = this;
          return this.emitCodePoint(1 === _85308e43d297 ? _6c53fc11c1e7[_e408115c538a] & ~_5cb021885ef6.VALUE_LENGTH : _6c53fc11c1e7[_e408115c538a + 1], _0948873bd781), 
          3 === _85308e43d297 && this.emitCodePoint(_6c53fc11c1e7[_e408115c538a + 2], _0948873bd781), 
          _0948873bd781;
        }
        end() {
          var _e408115c538a;
          switch (this.state) {
           case _2b09e1ca183a.NamedEntity:
            return 0 !== this.result && (this.decodeMode !== _f59cf6266889.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;

           case _2b09e1ca183a.NumericDecimal:
            return this.emitNumericEntity(0, 2);

           case _2b09e1ca183a.NumericHex:
            return this.emitNumericEntity(0, 3);

           case _2b09e1ca183a.NumericStart:
            return null == (_e408115c538a = this.errors) || _e408115c538a.absenceOfDigitsInNumericCharacterReference(this.consumed), 
            0;

           case _2b09e1ca183a.EntityStart:
            return 0;
          }
        }
      }
    },
    466: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781(9496), _0948873bd781(747);
    },
    747: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.d(_85308e43d297, {
        Gj: () => _1087e8da3d1c,
        WY: () => s,
        X1: () => _ce231c24b42d
      });
      let _6c53fc11c1e7 = /["$&'<>\u0080-\uFFFF]/g, _06df19f8be6e = new Map([ [ 34, "&quot;" ], [ 38, "&amp;" ], [ 39, "&apos;" ], [ 60, "&lt;" ], [ 62, "&gt;" ] ]), _fbbba1a672e2 = null == String.prototype.codePointAt ? (_e408115c538a, _85308e43d297) => (64512 & _e408115c538a.charCodeAt(_85308e43d297)) == 55296 ? (_e408115c538a.charCodeAt(_85308e43d297) - 55296) * 1024 + _e408115c538a.charCodeAt(_85308e43d297 + 1) - 56320 + 65536 : _e408115c538a.charCodeAt(_85308e43d297) : (_e408115c538a, _85308e43d297) => _e408115c538a.codePointAt(_85308e43d297);
      function s(_e408115c538a) {
        let _85308e43d297, _0948873bd781 = "", _1087e8da3d1c = 0;
        for (;null !== (_85308e43d297 = _6c53fc11c1e7.exec(_e408115c538a)); ) {
          let {index: _ce231c24b42d} = _85308e43d297, _5cb021885ef6 = _e408115c538a.charCodeAt(_ce231c24b42d), _2b09e1ca183a = _06df19f8be6e.get(_5cb021885ef6);
          void 0 === _2b09e1ca183a ? (_0948873bd781 += `${_e408115c538a.substring(_1087e8da3d1c, _ce231c24b42d)}&#x${_fbbba1a672e2(_e408115c538a, _ce231c24b42d).toString(16)};`, 
          _1087e8da3d1c = _6c53fc11c1e7.lastIndex += Number((64512 & _5cb021885ef6) == 55296)) : (_0948873bd781 += _e408115c538a.substring(_1087e8da3d1c, _ce231c24b42d) + _2b09e1ca183a, 
          _1087e8da3d1c = _ce231c24b42d + 1);
        }
        return _0948873bd781 + _e408115c538a.substr(_1087e8da3d1c);
      }
      function o(_e408115c538a, _85308e43d297) {
        return function(_0948873bd781) {
          let _6c53fc11c1e7, _06df19f8be6e = 0, _fbbba1a672e2 = "";
          for (;_6c53fc11c1e7 = _e408115c538a.exec(_0948873bd781); ) _06df19f8be6e !== _6c53fc11c1e7.index && (_fbbba1a672e2 += _0948873bd781.substring(_06df19f8be6e, _6c53fc11c1e7.index)), 
          _fbbba1a672e2 += _85308e43d297.get(_6c53fc11c1e7[0].charCodeAt(0)), _06df19f8be6e = _6c53fc11c1e7.index + 1;
          return _fbbba1a672e2 + _0948873bd781.substring(_06df19f8be6e);
        };
      }
      let _1087e8da3d1c = o(/["&\u00A0]/g, new Map([ [ 34, "&quot;" ], [ 38, "&amp;" ], [ 160, "&nbsp;" ] ])), _ce231c24b42d = o(/[&<>\u00A0]/g, new Map([ [ 38, "&amp;" ], [ 60, "&lt;" ], [ 62, "&gt;" ], [ 160, "&nbsp;" ] ]));
    },
    7259: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.d(_85308e43d297, {
        q: () => _6c53fc11c1e7
      });
      let _6c53fc11c1e7 = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(_e408115c538a => _e408115c538a.charCodeAt(0)));
    },
    5949: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.d(_85308e43d297, {
        s: () => _6c53fc11c1e7
      });
      let _6c53fc11c1e7 = new Uint16Array("Ȁaglq\tɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(_e408115c538a => _e408115c538a.charCodeAt(0)));
    },
    9496: function() {},
    8466: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.d(_85308e43d297, {
        Gj: () => _ce231c24b42d.Gj,
        WY: () => _ce231c24b42d.WY,
        X1: () => _ce231c24b42d.X1
      }), _0948873bd781(2990), _0948873bd781(466);
      var _6c53fc11c1e7, _06df19f8be6e, _fbbba1a672e2, _1087e8da3d1c, _ce231c24b42d = _0948873bd781(747);
      (_6c53fc11c1e7 = _fbbba1a672e2 || (_fbbba1a672e2 = {}))[_6c53fc11c1e7.XML = 0] = "XML", 
      _6c53fc11c1e7[_6c53fc11c1e7.HTML = 1] = "HTML", (_06df19f8be6e = _1087e8da3d1c || (_1087e8da3d1c = {}))[_06df19f8be6e.UTF8 = 0] = "UTF8", 
      _06df19f8be6e[_06df19f8be6e.ASCII = 1] = "ASCII", _06df19f8be6e[_06df19f8be6e.Extensive = 2] = "Extensive", 
      _06df19f8be6e[_06df19f8be6e.Attribute = 3] = "Attribute", _06df19f8be6e[_06df19f8be6e.Text = 4] = "Text";
    },
    4645: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.d(_85308e43d297, {
        i: () => g
      });
      var _6c53fc11c1e7 = _0948873bd781(5645), _06df19f8be6e = _0948873bd781(2990);
      let _fbbba1a672e2 = new Set([ "input", "option", "optgroup", "select", "button", "datalist", "textarea" ]), _1087e8da3d1c = new Set([ "p" ]), _ce231c24b42d = new Set([ "thead", "tbody" ]), _5cb021885ef6 = new Set([ "dd", "dt" ]), _2b09e1ca183a = new Set([ "rt", "rp" ]), _f59cf6266889 = new Map([ [ "tr", new Set([ "tr", "th", "td" ]) ], [ "th", new Set([ "th" ]) ], [ "td", new Set([ "thead", "th", "td" ]) ], [ "body", new Set([ "head", "link", "script" ]) ], [ "li", new Set([ "li" ]) ], [ "p", _1087e8da3d1c ], [ "h1", _1087e8da3d1c ], [ "h2", _1087e8da3d1c ], [ "h3", _1087e8da3d1c ], [ "h4", _1087e8da3d1c ], [ "h5", _1087e8da3d1c ], [ "h6", _1087e8da3d1c ], [ "select", _fbbba1a672e2 ], [ "input", _fbbba1a672e2 ], [ "output", _fbbba1a672e2 ], [ "button", _fbbba1a672e2 ], [ "datalist", _fbbba1a672e2 ], [ "textarea", _fbbba1a672e2 ], [ "option", new Set([ "option" ]) ], [ "optgroup", new Set([ "optgroup", "option" ]) ], [ "dd", _5cb021885ef6 ], [ "dt", _5cb021885ef6 ], [ "address", _1087e8da3d1c ], [ "article", _1087e8da3d1c ], [ "aside", _1087e8da3d1c ], [ "blockquote", _1087e8da3d1c ], [ "details", _1087e8da3d1c ], [ "div", _1087e8da3d1c ], [ "dl", _1087e8da3d1c ], [ "fieldset", _1087e8da3d1c ], [ "figcaption", _1087e8da3d1c ], [ "figure", _1087e8da3d1c ], [ "footer", _1087e8da3d1c ], [ "form", _1087e8da3d1c ], [ "header", _1087e8da3d1c ], [ "hr", _1087e8da3d1c ], [ "main", _1087e8da3d1c ], [ "nav", _1087e8da3d1c ], [ "ol", _1087e8da3d1c ], [ "pre", _1087e8da3d1c ], [ "section", _1087e8da3d1c ], [ "table", _1087e8da3d1c ], [ "ul", _1087e8da3d1c ], [ "rt", _2b09e1ca183a ], [ "rp", _2b09e1ca183a ], [ "tbody", _ce231c24b42d ], [ "tfoot", _ce231c24b42d ] ]), _1e156e012532 = new Set([ "area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr" ]), _39d3eae51e3c = new Set([ "math", "svg" ]), _687b012f5f4d = new Set([ "mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title" ]), _6c881511c692 = /\s|\//;
      class g {
        constructor(_e408115c538a, _85308e43d297 = {}) {
          var _0948873bd781, _06df19f8be6e, _fbbba1a672e2, _1087e8da3d1c, _ce231c24b42d, _5cb021885ef6;
          this.options = _85308e43d297, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, 
          this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, 
          this.stack = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, 
          this.ended = !1, this.cbs = null != _e408115c538a ? _e408115c538a : {}, this.htmlMode = !this.options.xmlMode, 
          this.lowerCaseTagNames = null != (_0948873bd781 = _85308e43d297.lowerCaseTags) ? _0948873bd781 : this.htmlMode, 
          this.lowerCaseAttributeNames = null != (_06df19f8be6e = _85308e43d297.lowerCaseAttributeNames) ? _06df19f8be6e : this.htmlMode, 
          this.recognizeSelfClosing = null != (_fbbba1a672e2 = _85308e43d297.recognizeSelfClosing) ? _fbbba1a672e2 : !this.htmlMode, 
          this.tokenizer = new (null != (_1087e8da3d1c = _85308e43d297.Tokenizer) ? _1087e8da3d1c : _6c53fc11c1e7.A)(this.options, this), 
          this.foreignContext = [ !this.htmlMode ], null == (_5cb021885ef6 = (_ce231c24b42d = this.cbs).onparserinit) || _5cb021885ef6.call(_ce231c24b42d, this);
        }
        ontext(_e408115c538a, _85308e43d297) {
          var _0948873bd781, _6c53fc11c1e7;
          let _06df19f8be6e = this.getSlice(_e408115c538a, _85308e43d297);
          this.endIndex = _85308e43d297 - 1, null == (_6c53fc11c1e7 = (_0948873bd781 = this.cbs).ontext) || _6c53fc11c1e7.call(_0948873bd781, _06df19f8be6e), 
          this.startIndex = _85308e43d297;
        }
        ontextentity(_e408115c538a, _85308e43d297) {
          var _0948873bd781, _6c53fc11c1e7;
          this.endIndex = _85308e43d297 - 1, null == (_6c53fc11c1e7 = (_0948873bd781 = this.cbs).ontext) || _6c53fc11c1e7.call(_0948873bd781, (0, 
          _06df19f8be6e.MK)(_e408115c538a)), this.startIndex = _85308e43d297;
        }
        isVoidElement(_e408115c538a) {
          return this.htmlMode && _1e156e012532.has(_e408115c538a);
        }
        onopentagname(_e408115c538a, _85308e43d297) {
          this.endIndex = _85308e43d297;
          let _0948873bd781 = this.getSlice(_e408115c538a, _85308e43d297);
          this.lowerCaseTagNames && (_0948873bd781 = _0948873bd781.toLowerCase()), this.emitOpenTag(_0948873bd781);
        }
        emitOpenTag(_e408115c538a) {
          var _85308e43d297, _0948873bd781, _6c53fc11c1e7, _06df19f8be6e;
          this.openTagStart = this.startIndex, this.tagname = _e408115c538a;
          let _fbbba1a672e2 = this.htmlMode && _f59cf6266889.get(_e408115c538a);
          if (_fbbba1a672e2) for (;this.stack.length > 0 && _fbbba1a672e2.has(this.stack[0]); ) {
            let _e408115c538a = this.stack.shift();
            null == (_0948873bd781 = (_85308e43d297 = this.cbs).onclosetag) || _0948873bd781.call(_85308e43d297, _e408115c538a, !0);
          }
          !this.isVoidElement(_e408115c538a) && (this.stack.unshift(_e408115c538a), this.htmlMode && (_39d3eae51e3c.has(_e408115c538a) ? this.foreignContext.unshift(!0) : _687b012f5f4d.has(_e408115c538a) && this.foreignContext.unshift(!1))), 
          null == (_06df19f8be6e = (_6c53fc11c1e7 = this.cbs).onopentagname) || _06df19f8be6e.call(_6c53fc11c1e7, _e408115c538a), 
          this.cbs.onopentag && (this.attribs = {});
        }
        endOpenTag(_e408115c538a) {
          var _85308e43d297, _0948873bd781;
          this.startIndex = this.openTagStart, this.attribs && (null == (_0948873bd781 = (_85308e43d297 = this.cbs).onopentag) || _0948873bd781.call(_85308e43d297, this.tagname, this.attribs, _e408115c538a), 
          this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), 
          this.tagname = "";
        }
        onopentagend(_e408115c538a) {
          this.endIndex = _e408115c538a, this.endOpenTag(!1), this.startIndex = _e408115c538a + 1;
        }
        onclosetag(_e408115c538a, _85308e43d297) {
          var _0948873bd781, _6c53fc11c1e7, _06df19f8be6e, _fbbba1a672e2, _1087e8da3d1c, _ce231c24b42d, _5cb021885ef6, _2b09e1ca183a;
          this.endIndex = _85308e43d297;
          let _f59cf6266889 = this.getSlice(_e408115c538a, _85308e43d297);
          if (this.lowerCaseTagNames && (_f59cf6266889 = _f59cf6266889.toLowerCase()), this.htmlMode && (_39d3eae51e3c.has(_f59cf6266889) || _687b012f5f4d.has(_f59cf6266889)) && this.foreignContext.shift(), 
          this.isVoidElement(_f59cf6266889)) this.htmlMode && "br" === _f59cf6266889 && (null == (_fbbba1a672e2 = (_06df19f8be6e = this.cbs).onopentagname) || _fbbba1a672e2.call(_06df19f8be6e, "br"), 
          null == (_ce231c24b42d = (_1087e8da3d1c = this.cbs).onopentag) || _ce231c24b42d.call(_1087e8da3d1c, "br", {}, !0), 
          null == (_2b09e1ca183a = (_5cb021885ef6 = this.cbs).onclosetag) || _2b09e1ca183a.call(_5cb021885ef6, "br", !1)); else {
            let _e408115c538a = this.stack.indexOf(_f59cf6266889);
            if (-1 !== _e408115c538a) for (let _85308e43d297 = 0; _85308e43d297 <= _e408115c538a; _85308e43d297++) {
              let _06df19f8be6e = this.stack.shift();
              null == (_6c53fc11c1e7 = (_0948873bd781 = this.cbs).onclosetag) || _6c53fc11c1e7.call(_0948873bd781, _06df19f8be6e, _85308e43d297 !== _e408115c538a);
            } else this.htmlMode && "p" === _f59cf6266889 && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
          }
          this.startIndex = _85308e43d297 + 1;
        }
        onselfclosingtag(_e408115c538a) {
          this.endIndex = _e408115c538a, this.recognizeSelfClosing || this.foreignContext[0] ? (this.closeCurrentTag(!1), 
          this.startIndex = _e408115c538a + 1) : this.onopentagend(_e408115c538a);
        }
        closeCurrentTag(_e408115c538a) {
          var _85308e43d297, _0948873bd781;
          let _6c53fc11c1e7 = this.tagname;
          this.endOpenTag(_e408115c538a), this.stack[0] === _6c53fc11c1e7 && (null == (_0948873bd781 = (_85308e43d297 = this.cbs).onclosetag) || _0948873bd781.call(_85308e43d297, _6c53fc11c1e7, !_e408115c538a), 
          this.stack.shift());
        }
        onattribname(_e408115c538a, _85308e43d297) {
          this.startIndex = _e408115c538a;
          let _0948873bd781 = this.getSlice(_e408115c538a, _85308e43d297);
          this.attribname = this.lowerCaseAttributeNames ? _0948873bd781.toLowerCase() : _0948873bd781;
        }
        onattribdata(_e408115c538a, _85308e43d297) {
          this.attribvalue += this.getSlice(_e408115c538a, _85308e43d297);
        }
        onattribentity(_e408115c538a) {
          this.attribvalue += (0, _06df19f8be6e.MK)(_e408115c538a);
        }
        onattribend(_e408115c538a, _85308e43d297) {
          var _0948873bd781, _06df19f8be6e;
          this.endIndex = _85308e43d297, null == (_06df19f8be6e = (_0948873bd781 = this.cbs).onattribute) || _06df19f8be6e.call(_0948873bd781, this.attribname, this.attribvalue, _e408115c538a === _6c53fc11c1e7.X.Double ? '"' : _e408115c538a === _6c53fc11c1e7.X.Single ? "'" : _e408115c538a === _6c53fc11c1e7.X.NoValue ? void 0 : null), 
          this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), 
          this.attribvalue = "";
        }
        getInstructionName(_e408115c538a) {
          let _85308e43d297 = _e408115c538a.search(_6c881511c692), _0948873bd781 = _85308e43d297 < 0 ? _e408115c538a : _e408115c538a.substr(0, _85308e43d297);
          return this.lowerCaseTagNames && (_0948873bd781 = _0948873bd781.toLowerCase()), 
          _0948873bd781;
        }
        ondeclaration(_e408115c538a, _85308e43d297) {
          this.endIndex = _85308e43d297;
          let _0948873bd781 = this.getSlice(_e408115c538a, _85308e43d297);
          if (this.cbs.onprocessinginstruction) {
            let _e408115c538a = this.getInstructionName(_0948873bd781);
            this.cbs.onprocessinginstruction(`!${_e408115c538a}`, `!${_0948873bd781}`);
          }
          this.startIndex = _85308e43d297 + 1;
        }
        onprocessinginstruction(_e408115c538a, _85308e43d297) {
          this.endIndex = _85308e43d297;
          let _0948873bd781 = this.getSlice(_e408115c538a, _85308e43d297);
          if (this.cbs.onprocessinginstruction) {
            let _e408115c538a = this.getInstructionName(_0948873bd781);
            this.cbs.onprocessinginstruction(`?${_e408115c538a}`, `?${_0948873bd781}`);
          }
          this.startIndex = _85308e43d297 + 1;
        }
        oncomment(_e408115c538a, _85308e43d297, _0948873bd781) {
          var _6c53fc11c1e7, _06df19f8be6e, _fbbba1a672e2, _1087e8da3d1c;
          this.endIndex = _85308e43d297, null == (_06df19f8be6e = (_6c53fc11c1e7 = this.cbs).oncomment) || _06df19f8be6e.call(_6c53fc11c1e7, this.getSlice(_e408115c538a, _85308e43d297 - _0948873bd781)), 
          null == (_1087e8da3d1c = (_fbbba1a672e2 = this.cbs).oncommentend) || _1087e8da3d1c.call(_fbbba1a672e2), 
          this.startIndex = _85308e43d297 + 1;
        }
        oncdata(_e408115c538a, _85308e43d297, _0948873bd781) {
          var _6c53fc11c1e7, _06df19f8be6e, _fbbba1a672e2, _1087e8da3d1c, _ce231c24b42d, _5cb021885ef6, _2b09e1ca183a, _f59cf6266889, _1e156e012532, _39d3eae51e3c;
          this.endIndex = _85308e43d297;
          let _687b012f5f4d = this.getSlice(_e408115c538a, _85308e43d297 - _0948873bd781);
          !this.htmlMode || this.options.recognizeCDATA ? (null == (_06df19f8be6e = (_6c53fc11c1e7 = this.cbs).oncdatastart) || _06df19f8be6e.call(_6c53fc11c1e7), 
          null == (_1087e8da3d1c = (_fbbba1a672e2 = this.cbs).ontext) || _1087e8da3d1c.call(_fbbba1a672e2, _687b012f5f4d), 
          null == (_5cb021885ef6 = (_ce231c24b42d = this.cbs).oncdataend) || _5cb021885ef6.call(_ce231c24b42d)) : (null == (_f59cf6266889 = (_2b09e1ca183a = this.cbs).oncomment) || _f59cf6266889.call(_2b09e1ca183a, `[CDATA[${_687b012f5f4d}]]`), 
          null == (_39d3eae51e3c = (_1e156e012532 = this.cbs).oncommentend) || _39d3eae51e3c.call(_1e156e012532)), 
          this.startIndex = _85308e43d297 + 1;
        }
        onend() {
          var _e408115c538a, _85308e43d297;
          if (this.cbs.onclosetag) {
            this.endIndex = this.startIndex;
            for (let _e408115c538a = 0; _e408115c538a < this.stack.length; _e408115c538a++) this.cbs.onclosetag(this.stack[_e408115c538a], !0);
          }
          null == (_85308e43d297 = (_e408115c538a = this.cbs).onend) || _85308e43d297.call(_e408115c538a);
        }
        reset() {
          var _e408115c538a, _85308e43d297, _0948873bd781, _6c53fc11c1e7;
          null == (_85308e43d297 = (_e408115c538a = this.cbs).onreset) || _85308e43d297.call(_e408115c538a), 
          this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, 
          this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, null == (_6c53fc11c1e7 = (_0948873bd781 = this.cbs).onparserinit) || _6c53fc11c1e7.call(_0948873bd781, this), 
          this.buffers.length = 0, this.foreignContext.length = 0, this.foreignContext.unshift(!this.htmlMode), 
          this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1;
        }
        parseComplete(_e408115c538a) {
          this.reset(), this.end(_e408115c538a);
        }
        getSlice(_e408115c538a, _85308e43d297) {
          for (;_e408115c538a - this.bufferOffset >= this.buffers[0].length; ) this.shiftBuffer();
          let _0948873bd781 = this.buffers[0].slice(_e408115c538a - this.bufferOffset, _85308e43d297 - this.bufferOffset);
          for (;_85308e43d297 - this.bufferOffset > this.buffers[0].length; ) this.shiftBuffer(), 
          _0948873bd781 += this.buffers[0].slice(0, _85308e43d297 - this.bufferOffset);
          return _0948873bd781;
        }
        shiftBuffer() {
          this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift();
        }
        write(_e408115c538a) {
          var _85308e43d297, _0948873bd781;
          if (this.ended) {
            null == (_0948873bd781 = (_85308e43d297 = this.cbs).onerror) || _0948873bd781.call(_85308e43d297, Error(".write() after done!"));
            return;
          }
          this.buffers.push(_e408115c538a), this.tokenizer.running && (this.tokenizer.write(_e408115c538a), 
          this.writeIndex++);
        }
        end(_e408115c538a) {
          var _85308e43d297, _0948873bd781;
          if (this.ended) {
            null == (_0948873bd781 = (_85308e43d297 = this.cbs).onerror) || _0948873bd781.call(_85308e43d297, Error(".end() after done!"));
            return;
          }
          _e408115c538a && this.write(_e408115c538a), this.ended = !0, this.tokenizer.end();
        }
        pause() {
          this.tokenizer.pause();
        }
        resume() {
          for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length; ) this.tokenizer.write(this.buffers[this.writeIndex++]);
          this.ended && this.tokenizer.end();
        }
        parseChunk(_e408115c538a) {
          this.write(_e408115c538a);
        }
        done(_e408115c538a) {
          this.end(_e408115c538a);
        }
      }
    },
    5645: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.d(_85308e43d297, {
        A: () => p,
        X: () => _5cb021885ef6
      });
      var _6c53fc11c1e7, _06df19f8be6e, _fbbba1a672e2, _1087e8da3d1c, _ce231c24b42d, _5cb021885ef6, _2b09e1ca183a = _0948873bd781(2990);
      function u(_e408115c538a) {
        return _e408115c538a === _1087e8da3d1c.Space || _e408115c538a === _1087e8da3d1c.NewLine || _e408115c538a === _1087e8da3d1c.Tab || _e408115c538a === _1087e8da3d1c.FormFeed || _e408115c538a === _1087e8da3d1c.CarriageReturn;
      }
      function d(_e408115c538a) {
        return _e408115c538a === _1087e8da3d1c.Slash || _e408115c538a === _1087e8da3d1c.Gt || u(_e408115c538a);
      }
      (_6c53fc11c1e7 = _1087e8da3d1c || (_1087e8da3d1c = {}))[_6c53fc11c1e7.Tab = 9] = "Tab", 
      _6c53fc11c1e7[_6c53fc11c1e7.NewLine = 10] = "NewLine", _6c53fc11c1e7[_6c53fc11c1e7.FormFeed = 12] = "FormFeed", 
      _6c53fc11c1e7[_6c53fc11c1e7.CarriageReturn = 13] = "CarriageReturn", _6c53fc11c1e7[_6c53fc11c1e7.Space = 32] = "Space", 
      _6c53fc11c1e7[_6c53fc11c1e7.ExclamationMark = 33] = "ExclamationMark", _6c53fc11c1e7[_6c53fc11c1e7.Number = 35] = "Number", 
      _6c53fc11c1e7[_6c53fc11c1e7.Amp = 38] = "Amp", _6c53fc11c1e7[_6c53fc11c1e7.SingleQuote = 39] = "SingleQuote", 
      _6c53fc11c1e7[_6c53fc11c1e7.DoubleQuote = 34] = "DoubleQuote", _6c53fc11c1e7[_6c53fc11c1e7.Dash = 45] = "Dash", 
      _6c53fc11c1e7[_6c53fc11c1e7.Slash = 47] = "Slash", _6c53fc11c1e7[_6c53fc11c1e7.Zero = 48] = "Zero", 
      _6c53fc11c1e7[_6c53fc11c1e7.Nine = 57] = "Nine", _6c53fc11c1e7[_6c53fc11c1e7.Semi = 59] = "Semi", 
      _6c53fc11c1e7[_6c53fc11c1e7.Lt = 60] = "Lt", _6c53fc11c1e7[_6c53fc11c1e7.Eq = 61] = "Eq", 
      _6c53fc11c1e7[_6c53fc11c1e7.Gt = 62] = "Gt", _6c53fc11c1e7[_6c53fc11c1e7.Questionmark = 63] = "Questionmark", 
      _6c53fc11c1e7[_6c53fc11c1e7.UpperA = 65] = "UpperA", _6c53fc11c1e7[_6c53fc11c1e7.LowerA = 97] = "LowerA", 
      _6c53fc11c1e7[_6c53fc11c1e7.UpperF = 70] = "UpperF", _6c53fc11c1e7[_6c53fc11c1e7.LowerF = 102] = "LowerF", 
      _6c53fc11c1e7[_6c53fc11c1e7.UpperZ = 90] = "UpperZ", _6c53fc11c1e7[_6c53fc11c1e7.LowerZ = 122] = "LowerZ", 
      _6c53fc11c1e7[_6c53fc11c1e7.LowerX = 120] = "LowerX", _6c53fc11c1e7[_6c53fc11c1e7.OpeningSquareBracket = 91] = "OpeningSquareBracket", 
      (_06df19f8be6e = _ce231c24b42d || (_ce231c24b42d = {}))[_06df19f8be6e.Text = 1] = "Text", 
      _06df19f8be6e[_06df19f8be6e.BeforeTagName = 2] = "BeforeTagName", _06df19f8be6e[_06df19f8be6e.InTagName = 3] = "InTagName", 
      _06df19f8be6e[_06df19f8be6e.InSelfClosingTag = 4] = "InSelfClosingTag", _06df19f8be6e[_06df19f8be6e.BeforeClosingTagName = 5] = "BeforeClosingTagName", 
      _06df19f8be6e[_06df19f8be6e.InClosingTagName = 6] = "InClosingTagName", _06df19f8be6e[_06df19f8be6e.AfterClosingTagName = 7] = "AfterClosingTagName", 
      _06df19f8be6e[_06df19f8be6e.BeforeAttributeName = 8] = "BeforeAttributeName", _06df19f8be6e[_06df19f8be6e.InAttributeName = 9] = "InAttributeName", 
      _06df19f8be6e[_06df19f8be6e.AfterAttributeName = 10] = "AfterAttributeName", _06df19f8be6e[_06df19f8be6e.BeforeAttributeValue = 11] = "BeforeAttributeValue", 
      _06df19f8be6e[_06df19f8be6e.InAttributeValueDq = 12] = "InAttributeValueDq", _06df19f8be6e[_06df19f8be6e.InAttributeValueSq = 13] = "InAttributeValueSq", 
      _06df19f8be6e[_06df19f8be6e.InAttributeValueNq = 14] = "InAttributeValueNq", _06df19f8be6e[_06df19f8be6e.BeforeDeclaration = 15] = "BeforeDeclaration", 
      _06df19f8be6e[_06df19f8be6e.InDeclaration = 16] = "InDeclaration", _06df19f8be6e[_06df19f8be6e.InProcessingInstruction = 17] = "InProcessingInstruction", 
      _06df19f8be6e[_06df19f8be6e.BeforeComment = 18] = "BeforeComment", _06df19f8be6e[_06df19f8be6e.CDATASequence = 19] = "CDATASequence", 
      _06df19f8be6e[_06df19f8be6e.InSpecialComment = 20] = "InSpecialComment", _06df19f8be6e[_06df19f8be6e.InCommentLike = 21] = "InCommentLike", 
      _06df19f8be6e[_06df19f8be6e.BeforeSpecialS = 22] = "BeforeSpecialS", _06df19f8be6e[_06df19f8be6e.BeforeSpecialT = 23] = "BeforeSpecialT", 
      _06df19f8be6e[_06df19f8be6e.SpecialStartSequence = 24] = "SpecialStartSequence", 
      _06df19f8be6e[_06df19f8be6e.InSpecialTag = 25] = "InSpecialTag", _06df19f8be6e[_06df19f8be6e.InEntity = 26] = "InEntity", 
      (_fbbba1a672e2 = _5cb021885ef6 || (_5cb021885ef6 = {}))[_fbbba1a672e2.NoValue = 0] = "NoValue", 
      _fbbba1a672e2[_fbbba1a672e2.Unquoted = 1] = "Unquoted", _fbbba1a672e2[_fbbba1a672e2.Single = 2] = "Single", 
      _fbbba1a672e2[_fbbba1a672e2.Double = 3] = "Double";
      let _f59cf6266889 = {
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
        constructor({xmlMode: _e408115c538a = !1, decodeEntities: _85308e43d297 = !0}, _0948873bd781) {
          this.cbs = _0948873bd781, this.state = _ce231c24b42d.Text, this.buffer = "", this.sectionStart = 0, 
          this.index = 0, this.entityStart = 0, this.baseState = _ce231c24b42d.Text, this.isSpecial = !1, 
          this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, 
          this.xmlMode = _e408115c538a, this.decodeEntities = _85308e43d297, this.entityDecoder = new _2b09e1ca183a.Wf(_e408115c538a ? _2b09e1ca183a.sr : _2b09e1ca183a.qN, (_e408115c538a, _85308e43d297) => this.emitCodePoint(_e408115c538a, _85308e43d297));
        }
        reset() {
          this.state = _ce231c24b42d.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, 
          this.baseState = _ce231c24b42d.Text, this.currentSequence = void 0, this.running = !0, 
          this.offset = 0;
        }
        write(_e408115c538a) {
          this.offset += this.buffer.length, this.buffer = _e408115c538a, this.parse();
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
        stateText(_e408115c538a) {
          _e408115c538a === _1087e8da3d1c.Lt || !this.decodeEntities && this.fastForwardTo(_1087e8da3d1c.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), 
          this.state = _ce231c24b42d.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && _e408115c538a === _1087e8da3d1c.Amp && this.startEntity();
        }
        stateSpecialStartSequence(_e408115c538a) {
          let _85308e43d297 = this.sequenceIndex === this.currentSequence.length;
          if (_85308e43d297 ? d(_e408115c538a) : (32 | _e408115c538a) === this.currentSequence[this.sequenceIndex]) {
            if (!_85308e43d297) return void this.sequenceIndex++;
          } else this.isSpecial = !1;
          this.sequenceIndex = 0, this.state = _ce231c24b42d.InTagName, this.stateInTagName(_e408115c538a);
        }
        stateInSpecialTag(_e408115c538a) {
          if (this.sequenceIndex === this.currentSequence.length) {
            if (_e408115c538a === _1087e8da3d1c.Gt || u(_e408115c538a)) {
              let _85308e43d297 = this.index - this.currentSequence.length;
              if (this.sectionStart < _85308e43d297) {
                let _e408115c538a = this.index;
                this.index = _85308e43d297, this.cbs.ontext(this.sectionStart, _85308e43d297), this.index = _e408115c538a;
              }
              this.isSpecial = !1, this.sectionStart = _85308e43d297 + 2, this.stateInClosingTagName(_e408115c538a);
              return;
            }
            this.sequenceIndex = 0;
          }
          (32 | _e408115c538a) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : 0 === this.sequenceIndex ? this.currentSequence === _f59cf6266889.TitleEnd ? this.decodeEntities && _e408115c538a === _1087e8da3d1c.Amp && this.startEntity() : this.fastForwardTo(_1087e8da3d1c.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = Number(_e408115c538a === _1087e8da3d1c.Lt);
        }
        stateCDATASequence(_e408115c538a) {
          _e408115c538a === _f59cf6266889.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === _f59cf6266889.Cdata.length && (this.state = _ce231c24b42d.InCommentLike, 
          this.currentSequence = _f59cf6266889.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, 
          this.state = _ce231c24b42d.InDeclaration, this.stateInDeclaration(_e408115c538a));
        }
        fastForwardTo(_e408115c538a) {
          for (;++this.index < this.buffer.length + this.offset; ) if (this.buffer.charCodeAt(this.index - this.offset) === _e408115c538a) return !0;
          return this.index = this.buffer.length + this.offset - 1, !1;
        }
        stateInCommentLike(_e408115c538a) {
          _e408115c538a === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === _f59cf6266889.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), 
          this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = _ce231c24b42d.Text) : 0 === this.sequenceIndex ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : _e408115c538a !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
        }
        isTagStartChar(_e408115c538a) {
          return this.xmlMode ? !d(_e408115c538a) : _e408115c538a >= _1087e8da3d1c.LowerA && _e408115c538a <= _1087e8da3d1c.LowerZ || _e408115c538a >= _1087e8da3d1c.UpperA && _e408115c538a <= _1087e8da3d1c.UpperZ;
        }
        startSpecial(_e408115c538a, _85308e43d297) {
          this.isSpecial = !0, this.currentSequence = _e408115c538a, this.sequenceIndex = _85308e43d297, 
          this.state = _ce231c24b42d.SpecialStartSequence;
        }
        stateBeforeTagName(_e408115c538a) {
          if (_e408115c538a === _1087e8da3d1c.ExclamationMark) this.state = _ce231c24b42d.BeforeDeclaration, 
          this.sectionStart = this.index + 1; else if (_e408115c538a === _1087e8da3d1c.Questionmark) this.state = _ce231c24b42d.InProcessingInstruction, 
          this.sectionStart = this.index + 1; else if (this.isTagStartChar(_e408115c538a)) {
            let _85308e43d297 = 32 | _e408115c538a;
            this.sectionStart = this.index, this.xmlMode ? this.state = _ce231c24b42d.InTagName : _85308e43d297 === _f59cf6266889.ScriptEnd[2] ? this.state = _ce231c24b42d.BeforeSpecialS : _85308e43d297 === _f59cf6266889.TitleEnd[2] || _85308e43d297 === _f59cf6266889.XmpEnd[2] ? this.state = _ce231c24b42d.BeforeSpecialT : this.state = _ce231c24b42d.InTagName;
          } else _e408115c538a === _1087e8da3d1c.Slash ? this.state = _ce231c24b42d.BeforeClosingTagName : (this.state = _ce231c24b42d.Text, 
          this.stateText(_e408115c538a));
        }
        stateInTagName(_e408115c538a) {
          d(_e408115c538a) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, 
          this.state = _ce231c24b42d.BeforeAttributeName, this.stateBeforeAttributeName(_e408115c538a));
        }
        stateBeforeClosingTagName(_e408115c538a) {
          u(_e408115c538a) || (_e408115c538a === _1087e8da3d1c.Gt ? this.state = _ce231c24b42d.Text : (this.state = this.isTagStartChar(_e408115c538a) ? _ce231c24b42d.InClosingTagName : _ce231c24b42d.InSpecialComment, 
          this.sectionStart = this.index));
        }
        stateInClosingTagName(_e408115c538a) {
          (_e408115c538a === _1087e8da3d1c.Gt || u(_e408115c538a)) && (this.cbs.onclosetag(this.sectionStart, this.index), 
          this.sectionStart = -1, this.state = _ce231c24b42d.AfterClosingTagName, this.stateAfterClosingTagName(_e408115c538a));
        }
        stateAfterClosingTagName(_e408115c538a) {
          (_e408115c538a === _1087e8da3d1c.Gt || this.fastForwardTo(_1087e8da3d1c.Gt)) && (this.state = _ce231c24b42d.Text, 
          this.sectionStart = this.index + 1);
        }
        stateBeforeAttributeName(_e408115c538a) {
          _e408115c538a === _1087e8da3d1c.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = _ce231c24b42d.InSpecialTag, 
          this.sequenceIndex = 0) : this.state = _ce231c24b42d.Text, this.sectionStart = this.index + 1) : _e408115c538a === _1087e8da3d1c.Slash ? this.state = _ce231c24b42d.InSelfClosingTag : u(_e408115c538a) || (this.state = _ce231c24b42d.InAttributeName, 
          this.sectionStart = this.index);
        }
        stateInSelfClosingTag(_e408115c538a) {
          _e408115c538a === _1087e8da3d1c.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = _ce231c24b42d.Text, 
          this.sectionStart = this.index + 1, this.isSpecial = !1) : u(_e408115c538a) || (this.state = _ce231c24b42d.BeforeAttributeName, 
          this.stateBeforeAttributeName(_e408115c538a));
        }
        stateInAttributeName(_e408115c538a) {
          (_e408115c538a === _1087e8da3d1c.Eq || d(_e408115c538a)) && (this.cbs.onattribname(this.sectionStart, this.index), 
          this.sectionStart = this.index, this.state = _ce231c24b42d.AfterAttributeName, this.stateAfterAttributeName(_e408115c538a));
        }
        stateAfterAttributeName(_e408115c538a) {
          _e408115c538a === _1087e8da3d1c.Eq ? this.state = _ce231c24b42d.BeforeAttributeValue : _e408115c538a === _1087e8da3d1c.Slash || _e408115c538a === _1087e8da3d1c.Gt ? (this.cbs.onattribend(_5cb021885ef6.NoValue, this.sectionStart), 
          this.sectionStart = -1, this.state = _ce231c24b42d.BeforeAttributeName, this.stateBeforeAttributeName(_e408115c538a)) : u(_e408115c538a) || (this.cbs.onattribend(_5cb021885ef6.NoValue, this.sectionStart), 
          this.state = _ce231c24b42d.InAttributeName, this.sectionStart = this.index);
        }
        stateBeforeAttributeValue(_e408115c538a) {
          _e408115c538a === _1087e8da3d1c.DoubleQuote ? (this.state = _ce231c24b42d.InAttributeValueDq, 
          this.sectionStart = this.index + 1) : _e408115c538a === _1087e8da3d1c.SingleQuote ? (this.state = _ce231c24b42d.InAttributeValueSq, 
          this.sectionStart = this.index + 1) : u(_e408115c538a) || (this.sectionStart = this.index, 
          this.state = _ce231c24b42d.InAttributeValueNq, this.stateInAttributeValueNoQuotes(_e408115c538a));
        }
        handleInAttributeValue(_e408115c538a, _85308e43d297) {
          _e408115c538a === _85308e43d297 || !this.decodeEntities && this.fastForwardTo(_85308e43d297) ? (this.cbs.onattribdata(this.sectionStart, this.index), 
          this.sectionStart = -1, this.cbs.onattribend(_85308e43d297 === _1087e8da3d1c.DoubleQuote ? _5cb021885ef6.Double : _5cb021885ef6.Single, this.index + 1), 
          this.state = _ce231c24b42d.BeforeAttributeName) : this.decodeEntities && _e408115c538a === _1087e8da3d1c.Amp && this.startEntity();
        }
        stateInAttributeValueDoubleQuotes(_e408115c538a) {
          this.handleInAttributeValue(_e408115c538a, _1087e8da3d1c.DoubleQuote);
        }
        stateInAttributeValueSingleQuotes(_e408115c538a) {
          this.handleInAttributeValue(_e408115c538a, _1087e8da3d1c.SingleQuote);
        }
        stateInAttributeValueNoQuotes(_e408115c538a) {
          u(_e408115c538a) || _e408115c538a === _1087e8da3d1c.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), 
          this.sectionStart = -1, this.cbs.onattribend(_5cb021885ef6.Unquoted, this.index), 
          this.state = _ce231c24b42d.BeforeAttributeName, this.stateBeforeAttributeName(_e408115c538a)) : this.decodeEntities && _e408115c538a === _1087e8da3d1c.Amp && this.startEntity();
        }
        stateBeforeDeclaration(_e408115c538a) {
          _e408115c538a === _1087e8da3d1c.OpeningSquareBracket ? (this.state = _ce231c24b42d.CDATASequence, 
          this.sequenceIndex = 0) : this.state = _e408115c538a === _1087e8da3d1c.Dash ? _ce231c24b42d.BeforeComment : _ce231c24b42d.InDeclaration;
        }
        stateInDeclaration(_e408115c538a) {
          (_e408115c538a === _1087e8da3d1c.Gt || this.fastForwardTo(_1087e8da3d1c.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), 
          this.state = _ce231c24b42d.Text, this.sectionStart = this.index + 1);
        }
        stateInProcessingInstruction(_e408115c538a) {
          (_e408115c538a === _1087e8da3d1c.Gt || this.fastForwardTo(_1087e8da3d1c.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), 
          this.state = _ce231c24b42d.Text, this.sectionStart = this.index + 1);
        }
        stateBeforeComment(_e408115c538a) {
          _e408115c538a === _1087e8da3d1c.Dash ? (this.state = _ce231c24b42d.InCommentLike, 
          this.currentSequence = _f59cf6266889.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = _ce231c24b42d.InDeclaration;
        }
        stateInSpecialComment(_e408115c538a) {
          (_e408115c538a === _1087e8da3d1c.Gt || this.fastForwardTo(_1087e8da3d1c.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), 
          this.state = _ce231c24b42d.Text, this.sectionStart = this.index + 1);
        }
        stateBeforeSpecialS(_e408115c538a) {
          let _85308e43d297 = 32 | _e408115c538a;
          _85308e43d297 === _f59cf6266889.ScriptEnd[3] ? this.startSpecial(_f59cf6266889.ScriptEnd, 4) : _85308e43d297 === _f59cf6266889.StyleEnd[3] ? this.startSpecial(_f59cf6266889.StyleEnd, 4) : (this.state = _ce231c24b42d.InTagName, 
          this.stateInTagName(_e408115c538a));
        }
        stateBeforeSpecialT(_e408115c538a) {
          switch (32 | _e408115c538a) {
           case _f59cf6266889.TitleEnd[3]:
            this.startSpecial(_f59cf6266889.TitleEnd, 4);
            break;

           case _f59cf6266889.TextareaEnd[3]:
            this.startSpecial(_f59cf6266889.TextareaEnd, 4);
            break;

           case _f59cf6266889.XmpEnd[3]:
            this.startSpecial(_f59cf6266889.XmpEnd, 4);
            break;

           default:
            this.state = _ce231c24b42d.InTagName, this.stateInTagName(_e408115c538a);
          }
        }
        startEntity() {
          this.baseState = this.state, this.state = _ce231c24b42d.InEntity, this.entityStart = this.index, 
          this.entityDecoder.startEntity(this.xmlMode ? _2b09e1ca183a.FJ.Strict : this.baseState === _ce231c24b42d.Text || this.baseState === _ce231c24b42d.InSpecialTag ? _2b09e1ca183a.FJ.Legacy : _2b09e1ca183a.FJ.Attribute);
        }
        stateInEntity() {
          let _e408115c538a = this.entityDecoder.write(this.buffer, this.index - this.offset);
          _e408115c538a >= 0 ? (this.state = this.baseState, 0 === _e408115c538a && (this.index = this.entityStart)) : this.index = this.offset + this.buffer.length - 1;
        }
        cleanup() {
          this.running && this.sectionStart !== this.index && (this.state === _ce231c24b42d.Text || this.state === _ce231c24b42d.InSpecialTag && 0 === this.sequenceIndex ? (this.cbs.ontext(this.sectionStart, this.index), 
          this.sectionStart = this.index) : (this.state === _ce231c24b42d.InAttributeValueDq || this.state === _ce231c24b42d.InAttributeValueSq || this.state === _ce231c24b42d.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), 
          this.sectionStart = this.index));
        }
        shouldContinue() {
          return this.index < this.buffer.length + this.offset && this.running;
        }
        parse() {
          for (;this.shouldContinue(); ) {
            let _e408115c538a = this.buffer.charCodeAt(this.index - this.offset);
            switch (this.state) {
             case _ce231c24b42d.Text:
              this.stateText(_e408115c538a);
              break;

             case _ce231c24b42d.SpecialStartSequence:
              this.stateSpecialStartSequence(_e408115c538a);
              break;

             case _ce231c24b42d.InSpecialTag:
              this.stateInSpecialTag(_e408115c538a);
              break;

             case _ce231c24b42d.CDATASequence:
              this.stateCDATASequence(_e408115c538a);
              break;

             case _ce231c24b42d.InAttributeValueDq:
              this.stateInAttributeValueDoubleQuotes(_e408115c538a);
              break;

             case _ce231c24b42d.InAttributeName:
              this.stateInAttributeName(_e408115c538a);
              break;

             case _ce231c24b42d.InCommentLike:
              this.stateInCommentLike(_e408115c538a);
              break;

             case _ce231c24b42d.InSpecialComment:
              this.stateInSpecialComment(_e408115c538a);
              break;

             case _ce231c24b42d.BeforeAttributeName:
              this.stateBeforeAttributeName(_e408115c538a);
              break;

             case _ce231c24b42d.InTagName:
              this.stateInTagName(_e408115c538a);
              break;

             case _ce231c24b42d.InClosingTagName:
              this.stateInClosingTagName(_e408115c538a);
              break;

             case _ce231c24b42d.BeforeTagName:
              this.stateBeforeTagName(_e408115c538a);
              break;

             case _ce231c24b42d.AfterAttributeName:
              this.stateAfterAttributeName(_e408115c538a);
              break;

             case _ce231c24b42d.InAttributeValueSq:
              this.stateInAttributeValueSingleQuotes(_e408115c538a);
              break;

             case _ce231c24b42d.BeforeAttributeValue:
              this.stateBeforeAttributeValue(_e408115c538a);
              break;

             case _ce231c24b42d.BeforeClosingTagName:
              this.stateBeforeClosingTagName(_e408115c538a);
              break;

             case _ce231c24b42d.AfterClosingTagName:
              this.stateAfterClosingTagName(_e408115c538a);
              break;

             case _ce231c24b42d.BeforeSpecialS:
              this.stateBeforeSpecialS(_e408115c538a);
              break;

             case _ce231c24b42d.BeforeSpecialT:
              this.stateBeforeSpecialT(_e408115c538a);
              break;

             case _ce231c24b42d.InAttributeValueNq:
              this.stateInAttributeValueNoQuotes(_e408115c538a);
              break;

             case _ce231c24b42d.InSelfClosingTag:
              this.stateInSelfClosingTag(_e408115c538a);
              break;

             case _ce231c24b42d.InDeclaration:
              this.stateInDeclaration(_e408115c538a);
              break;

             case _ce231c24b42d.BeforeDeclaration:
              this.stateBeforeDeclaration(_e408115c538a);
              break;

             case _ce231c24b42d.BeforeComment:
              this.stateBeforeComment(_e408115c538a);
              break;

             case _ce231c24b42d.InProcessingInstruction:
              this.stateInProcessingInstruction(_e408115c538a);
              break;

             case _ce231c24b42d.InEntity:
              this.stateInEntity();
            }
            this.index++;
          }
          this.cleanup();
        }
        finish() {
          this.state === _ce231c24b42d.InEntity && (this.entityDecoder.end(), this.state = this.baseState), 
          this.handleTrailingData(), this.cbs.onend();
        }
        handleTrailingData() {
          let _e408115c538a = this.buffer.length + this.offset;
          this.sectionStart >= _e408115c538a || (this.state === _ce231c24b42d.InCommentLike ? this.currentSequence === _f59cf6266889.CdataEnd ? this.cbs.oncdata(this.sectionStart, _e408115c538a, 0) : this.cbs.oncomment(this.sectionStart, _e408115c538a, 0) : this.state === _ce231c24b42d.InTagName || this.state === _ce231c24b42d.BeforeAttributeName || this.state === _ce231c24b42d.BeforeAttributeValue || this.state === _ce231c24b42d.AfterAttributeName || this.state === _ce231c24b42d.InAttributeName || this.state === _ce231c24b42d.InAttributeValueSq || this.state === _ce231c24b42d.InAttributeValueDq || this.state === _ce231c24b42d.InAttributeValueNq || this.state === _ce231c24b42d.InClosingTagName || this.cbs.ontext(this.sectionStart, _e408115c538a));
        }
        emitCodePoint(_e408115c538a, _85308e43d297) {
          this.baseState !== _ce231c24b42d.Text && this.baseState !== _ce231c24b42d.InSpecialTag ? (this.sectionStart < this.entityStart && this.cbs.onattribdata(this.sectionStart, this.entityStart), 
          this.sectionStart = this.entityStart + _85308e43d297, this.index = this.sectionStart - 1, 
          this.cbs.onattribentity(_e408115c538a)) : (this.sectionStart < this.entityStart && this.cbs.ontext(this.sectionStart, this.entityStart), 
          this.sectionStart = this.entityStart + _85308e43d297, this.index = this.sectionStart - 1, 
          this.cbs.ontextentity(_e408115c538a, this.sectionStart));
        }
      }
    },
    3808: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.d(_85308e43d297, {
        RJ: () => _06df19f8be6e,
        iX: () => _6c53fc11c1e7.i
      });
      var _6c53fc11c1e7 = _0948873bd781(4645);
      _0948873bd781(8866), _0948873bd781(5645);
      var _06df19f8be6e = _0948873bd781(2743);
      _0948873bd781(4993);
    },
    6570: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      let _6c53fc11c1e7, _06df19f8be6e, _fbbba1a672e2, _1087e8da3d1c;
      _0948873bd781.d(_85308e43d297, {
        P2: () => f
      });
      let o = (_e408115c538a, _85308e43d297) => _85308e43d297.some(_85308e43d297 => _e408115c538a instanceof _85308e43d297), _ce231c24b42d = new WeakMap, _5cb021885ef6 = new WeakMap, _2b09e1ca183a = new WeakMap, _f59cf6266889 = {
        get(_e408115c538a, _85308e43d297, _0948873bd781) {
          if (_e408115c538a instanceof IDBTransaction) {
            if ("done" === _85308e43d297) return _ce231c24b42d.get(_e408115c538a);
            if ("store" === _85308e43d297) return _0948873bd781.objectStoreNames[1] ? void 0 : _0948873bd781.objectStore(_0948873bd781.objectStoreNames[0]);
          }
          return h(_e408115c538a[_85308e43d297]);
        },
        set: (_e408115c538a, _85308e43d297, _0948873bd781) => (_e408115c538a[_85308e43d297] = _0948873bd781, 
        !0),
        has: (_e408115c538a, _85308e43d297) => _e408115c538a instanceof IDBTransaction && ("done" === _85308e43d297 || "store" === _85308e43d297) || _85308e43d297 in _e408115c538a
      };
      function h(_e408115c538a) {
        if (_e408115c538a instanceof IDBRequest) {
          let _85308e43d297;
          return _85308e43d297 = new Promise((_85308e43d297, _0948873bd781) => {
            let n = () => {
              _e408115c538a.removeEventListener("success", i), _e408115c538a.removeEventListener("error", a);
            }, i = () => {
              _85308e43d297(h(_e408115c538a.result)), n();
            }, a = () => {
              _0948873bd781(_e408115c538a.error), n();
            };
            _e408115c538a.addEventListener("success", i), _e408115c538a.addEventListener("error", a);
          }), _2b09e1ca183a.set(_85308e43d297, _e408115c538a), _85308e43d297;
        }
        if (_5cb021885ef6.has(_e408115c538a)) return _5cb021885ef6.get(_e408115c538a);
        let _85308e43d297 = function(_e408115c538a) {
          if ("function" == typeof _e408115c538a) return (_06df19f8be6e || (_06df19f8be6e = [ IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey ])).includes(_e408115c538a) ? function(..._85308e43d297) {
            return _e408115c538a.apply(p(this), _85308e43d297), h(this.request);
          } : function(..._85308e43d297) {
            return h(_e408115c538a.apply(p(this), _85308e43d297));
          };
          return (_e408115c538a instanceof IDBTransaction && function(_e408115c538a) {
            if (_ce231c24b42d.has(_e408115c538a)) return;
            let _85308e43d297 = new Promise((_85308e43d297, _0948873bd781) => {
              let n = () => {
                _e408115c538a.removeEventListener("complete", i), _e408115c538a.removeEventListener("error", a), 
                _e408115c538a.removeEventListener("abort", a);
              }, i = () => {
                _85308e43d297(), n();
              }, a = () => {
                _0948873bd781(_e408115c538a.error || new DOMException("AbortError", "AbortError")), 
                n();
              };
              _e408115c538a.addEventListener("complete", i), _e408115c538a.addEventListener("error", a), 
              _e408115c538a.addEventListener("abort", a);
            });
            _ce231c24b42d.set(_e408115c538a, _85308e43d297);
          }(_e408115c538a), o(_e408115c538a, _6c53fc11c1e7 || (_6c53fc11c1e7 = [ IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction ]))) ? new Proxy(_e408115c538a, _f59cf6266889) : _e408115c538a;
        }(_e408115c538a);
        return _85308e43d297 !== _e408115c538a && (_5cb021885ef6.set(_e408115c538a, _85308e43d297), 
        _2b09e1ca183a.set(_85308e43d297, _e408115c538a)), _85308e43d297;
      }
      let p = _e408115c538a => _2b09e1ca183a.get(_e408115c538a);
      function f(_e408115c538a, _85308e43d297, {blocked: _0948873bd781, upgrade: _6c53fc11c1e7, blocking: _06df19f8be6e, terminated: _fbbba1a672e2} = {}) {
        let _1087e8da3d1c = indexedDB.open(_e408115c538a, _85308e43d297), _ce231c24b42d = h(_1087e8da3d1c);
        return _6c53fc11c1e7 && _1087e8da3d1c.addEventListener("upgradeneeded", _e408115c538a => {
          _6c53fc11c1e7(h(_1087e8da3d1c.result), _e408115c538a.oldVersion, _e408115c538a.newVersion, h(_1087e8da3d1c.transaction), _e408115c538a);
        }), _0948873bd781 && _1087e8da3d1c.addEventListener("blocked", _e408115c538a => _0948873bd781(_e408115c538a.oldVersion, _e408115c538a.newVersion, _e408115c538a)), 
        _ce231c24b42d.then(_e408115c538a => {
          _fbbba1a672e2 && _e408115c538a.addEventListener("close", () => _fbbba1a672e2()), 
          _06df19f8be6e && _e408115c538a.addEventListener("versionchange", _e408115c538a => _06df19f8be6e(_e408115c538a.oldVersion, _e408115c538a.newVersion, _e408115c538a));
        }).catch(() => {}), _ce231c24b42d;
      }
      let _1e156e012532 = [ "get", "getKey", "getAll", "getAllKeys", "count" ], _39d3eae51e3c = [ "put", "add", "delete", "clear" ], _687b012f5f4d = new Map;
      function b(_e408115c538a, _85308e43d297) {
        if (!(_e408115c538a instanceof IDBDatabase && !(_85308e43d297 in _e408115c538a) && "string" == typeof _85308e43d297)) return;
        if (_687b012f5f4d.get(_85308e43d297)) return _687b012f5f4d.get(_85308e43d297);
        let _0948873bd781 = _85308e43d297.replace(/FromIndex$/, ""), _6c53fc11c1e7 = _85308e43d297 !== _0948873bd781, _06df19f8be6e = _39d3eae51e3c.includes(_0948873bd781);
        if (!(_0948873bd781 in (_6c53fc11c1e7 ? IDBIndex : IDBObjectStore).prototype) || !(_06df19f8be6e || _1e156e012532.includes(_0948873bd781))) return;
        let a = async function(_e408115c538a, ..._85308e43d297) {
          let _fbbba1a672e2 = this.transaction(_e408115c538a, _06df19f8be6e ? "readwrite" : "readonly"), _1087e8da3d1c = _fbbba1a672e2.store;
          return _6c53fc11c1e7 && (_1087e8da3d1c = _1087e8da3d1c.index(_85308e43d297.shift())), 
          (await Promise.all([ _1087e8da3d1c[_0948873bd781](..._85308e43d297), _06df19f8be6e && _fbbba1a672e2.done ]))[0];
        };
        return _687b012f5f4d.set(_85308e43d297, a), a;
      }
      _f59cf6266889 = {
        ..._fbbba1a672e2 = _f59cf6266889,
        get: (_e408115c538a, _85308e43d297, _0948873bd781) => b(_e408115c538a, _85308e43d297) || _fbbba1a672e2.get(_e408115c538a, _85308e43d297, _0948873bd781),
        has: (_e408115c538a, _85308e43d297) => !!b(_e408115c538a, _85308e43d297) || _fbbba1a672e2.has(_e408115c538a, _85308e43d297)
      };
      let _6c881511c692 = [ "continue", "continuePrimaryKey", "advance" ], _35893396e2ed = {}, _e66e402f8d94 = new WeakMap, _524a958444f0 = new WeakMap, _01dfc7268288 = {
        get(_e408115c538a, _85308e43d297) {
          if (!_6c881511c692.includes(_85308e43d297)) return _e408115c538a[_85308e43d297];
          let _0948873bd781 = _35893396e2ed[_85308e43d297];
          return _0948873bd781 || (_0948873bd781 = _35893396e2ed[_85308e43d297] = function(..._e408115c538a) {
            _e66e402f8d94.set(this, _524a958444f0.get(this)[_85308e43d297](..._e408115c538a));
          }), _0948873bd781;
        }
      };
      async function* T(..._e408115c538a) {
        let _85308e43d297 = this;
        if (_85308e43d297 instanceof IDBCursor || (_85308e43d297 = await _85308e43d297.openCursor(..._e408115c538a)), 
        !_85308e43d297) return;
        let _0948873bd781 = new Proxy(_85308e43d297, _01dfc7268288);
        for (_524a958444f0.set(_0948873bd781, _85308e43d297), _2b09e1ca183a.set(_0948873bd781, p(_85308e43d297)); _85308e43d297; ) yield _0948873bd781, 
        _85308e43d297 = await (_e66e402f8d94.get(_0948873bd781) || _85308e43d297.continue()), 
        _e66e402f8d94.delete(_0948873bd781);
      }
      function k(_e408115c538a, _85308e43d297) {
        return _85308e43d297 === Symbol.asyncIterator && o(_e408115c538a, [ IDBIndex, IDBObjectStore, IDBCursor ]) || "iterate" === _85308e43d297 && o(_e408115c538a, [ IDBIndex, IDBObjectStore ]);
      }
      _f59cf6266889 = {
        ..._1087e8da3d1c = _f59cf6266889,
        get: (_e408115c538a, _85308e43d297, _0948873bd781) => k(_e408115c538a, _85308e43d297) ? T : _1087e8da3d1c.get(_e408115c538a, _85308e43d297, _0948873bd781),
        has: (_e408115c538a, _85308e43d297) => k(_e408115c538a, _85308e43d297) || _1087e8da3d1c.has(_e408115c538a, _85308e43d297)
      };
    },
    1652: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      _0948873bd781.d(_85308e43d297, {
        N: () => n
      });
      function n() {
        return "10000000000".replace(/[018]/g, _e408115c538a => (_e408115c538a ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> _e408115c538a / 4).toString(16));
      }
    },
    3907: function(_e408115c538a, _85308e43d297, _0948873bd781) {
      let _6c53fc11c1e7;
      _0948873bd781.d(_85308e43d297, {
        LW: () => b,
        QR: () => x
      });
      var _06df19f8be6e = _0948873bd781(1652);
      function a(_e408115c538a, _85308e43d297) {
        try {
          return _e408115c538a.apply(this, _85308e43d297);
        } catch (_e408115c538a) {
          let _85308e43d297, _0948873bd781 = (_85308e43d297 = _6c53fc11c1e7.__externref_table_alloc(), 
          _6c53fc11c1e7.__wbindgen_export_2.set(_85308e43d297, _e408115c538a), _85308e43d297);
          _6c53fc11c1e7.__wbindgen_exn_store(_0948873bd781);
        }
      }
      let _fbbba1a672e2 = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
      }) : {
        decode: () => {
          throw Error("TextDecoder not available");
        }
      };
      "undefined" != typeof TextDecoder && _fbbba1a672e2.decode();
      let _1087e8da3d1c = null;
      function l() {
        return (null === _1087e8da3d1c || 0 === _1087e8da3d1c.byteLength) && (_1087e8da3d1c = new Uint8Array(_6c53fc11c1e7.memory.buffer)), 
        _1087e8da3d1c;
      }
      function c(_e408115c538a, _85308e43d297) {
        return _e408115c538a >>>= 0, _fbbba1a672e2.decode(l().subarray(_e408115c538a, _e408115c538a + _85308e43d297));
      }
      let _ce231c24b42d = 0, _5cb021885ef6 = "undefined" != typeof TextEncoder ? new TextEncoder("utf-8") : {
        encode: () => {
          throw Error("TextEncoder not available");
        }
      }, _2b09e1ca183a = "function" == typeof _5cb021885ef6.encodeInto ? function(_e408115c538a, _85308e43d297) {
        return _5cb021885ef6.encodeInto(_e408115c538a, _85308e43d297);
      } : function(_e408115c538a, _85308e43d297) {
        let _0948873bd781 = _5cb021885ef6.encode(_e408115c538a);
        return _85308e43d297.set(_0948873bd781), {
          read: _e408115c538a.length,
          written: _0948873bd781.length
        };
      };
      function p(_e408115c538a, _85308e43d297, _0948873bd781) {
        if (void 0 === _0948873bd781) {
          let _0948873bd781 = _5cb021885ef6.encode(_e408115c538a), _6c53fc11c1e7 = _85308e43d297(_0948873bd781.length, 1) >>> 0;
          return l().subarray(_6c53fc11c1e7, _6c53fc11c1e7 + _0948873bd781.length).set(_0948873bd781), 
          _ce231c24b42d = _0948873bd781.length, _6c53fc11c1e7;
        }
        let _6c53fc11c1e7 = _e408115c538a.length, _06df19f8be6e = _85308e43d297(_6c53fc11c1e7, 1) >>> 0, _fbbba1a672e2 = l(), _1087e8da3d1c = 0;
        for (;_1087e8da3d1c < _6c53fc11c1e7; _1087e8da3d1c++) {
          let _85308e43d297 = _e408115c538a.charCodeAt(_1087e8da3d1c);
          if (_85308e43d297 > 127) break;
          _fbbba1a672e2[_06df19f8be6e + _1087e8da3d1c] = _85308e43d297;
        }
        if (_1087e8da3d1c !== _6c53fc11c1e7) {
          0 !== _1087e8da3d1c && (_e408115c538a = _e408115c538a.slice(_1087e8da3d1c)), _06df19f8be6e = _0948873bd781(_06df19f8be6e, _6c53fc11c1e7, _6c53fc11c1e7 = _1087e8da3d1c + 3 * _e408115c538a.length, 1) >>> 0;
          let _85308e43d297 = _2b09e1ca183a(_e408115c538a, l().subarray(_06df19f8be6e + _1087e8da3d1c, _06df19f8be6e + _6c53fc11c1e7));
          _1087e8da3d1c += _85308e43d297.written, _06df19f8be6e = _0948873bd781(_06df19f8be6e, _6c53fc11c1e7, _1087e8da3d1c, 1) >>> 0;
        }
        return _ce231c24b42d = _1087e8da3d1c, _06df19f8be6e;
      }
      let _f59cf6266889 = null;
      function g() {
        return (null === _f59cf6266889 || !0 === _f59cf6266889.buffer.detached || void 0 === _f59cf6266889.buffer.detached && _f59cf6266889.buffer !== _6c53fc11c1e7.memory.buffer) && (_f59cf6266889 = new DataView(_6c53fc11c1e7.memory.buffer)), 
        _f59cf6266889;
      }
      function m(_e408115c538a) {
        let _85308e43d297 = _6c53fc11c1e7.__wbindgen_export_2.get(_e408115c538a);
        return _6c53fc11c1e7.__externref_table_dealloc(_e408115c538a), _85308e43d297;
      }
      let _1e156e012532 = "undefined" == typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry(_e408115c538a => _6c53fc11c1e7.__wbg_rewriter_free(_e408115c538a >>> 0, 1));
      class b {
        __destroy_into_raw() {
          let _e408115c538a = this.__wbg_ptr;
          return this.__wbg_ptr = 0, _1e156e012532.unregister(this), _e408115c538a;
        }
        free() {
          let _e408115c538a = this.__destroy_into_raw();
          _6c53fc11c1e7.__wbg_rewriter_free(_e408115c538a, 0);
        }
        rewrite_js(_e408115c538a, _85308e43d297, _0948873bd781, _06df19f8be6e) {
          let _fbbba1a672e2 = p(_e408115c538a, _6c53fc11c1e7.__wbindgen_malloc, _6c53fc11c1e7.__wbindgen_realloc), _1087e8da3d1c = _ce231c24b42d, _5cb021885ef6 = p(_85308e43d297, _6c53fc11c1e7.__wbindgen_malloc, _6c53fc11c1e7.__wbindgen_realloc), _2b09e1ca183a = _ce231c24b42d, _f59cf6266889 = p(_0948873bd781, _6c53fc11c1e7.__wbindgen_malloc, _6c53fc11c1e7.__wbindgen_realloc), _1e156e012532 = _ce231c24b42d, _39d3eae51e3c = _6c53fc11c1e7.rewriter_rewrite_js(this.__wbg_ptr, _fbbba1a672e2, _1087e8da3d1c, _5cb021885ef6, _2b09e1ca183a, _f59cf6266889, _1e156e012532, _06df19f8be6e);
          if (_39d3eae51e3c[2]) throw m(_39d3eae51e3c[1]);
          return m(_39d3eae51e3c[0]);
        }
        rewrite_js_bytes(_e408115c538a, _85308e43d297, _0948873bd781, _06df19f8be6e) {
          let _fbbba1a672e2, _1087e8da3d1c = (_fbbba1a672e2 = (0, _6c53fc11c1e7.__wbindgen_malloc)(+_e408115c538a.length, 1) >>> 0, 
          l().set(_e408115c538a, _fbbba1a672e2 / 1), _ce231c24b42d = _e408115c538a.length, 
          _fbbba1a672e2), _5cb021885ef6 = _ce231c24b42d, _2b09e1ca183a = p(_85308e43d297, _6c53fc11c1e7.__wbindgen_malloc, _6c53fc11c1e7.__wbindgen_realloc), _f59cf6266889 = _ce231c24b42d, _1e156e012532 = p(_0948873bd781, _6c53fc11c1e7.__wbindgen_malloc, _6c53fc11c1e7.__wbindgen_realloc), _39d3eae51e3c = _ce231c24b42d, _687b012f5f4d = _6c53fc11c1e7.rewriter_rewrite_js_bytes(this.__wbg_ptr, _1087e8da3d1c, _5cb021885ef6, _2b09e1ca183a, _f59cf6266889, _1e156e012532, _39d3eae51e3c, _06df19f8be6e);
          if (_687b012f5f4d[2]) throw m(_687b012f5f4d[1]);
          return m(_687b012f5f4d[0]);
        }
        constructor(_e408115c538a) {
          const _85308e43d297 = _6c53fc11c1e7.rewriter_new(_e408115c538a);
          if (_85308e43d297[2]) throw m(_85308e43d297[1]);
          return this.__wbg_ptr = _85308e43d297[0] >>> 0, _1e156e012532.register(this, this.__wbg_ptr, this), 
          this;
        }
      }
      async function w(_e408115c538a, _85308e43d297) {
        if ("function" == typeof Response && _e408115c538a instanceof Response) {
          if ("function" == typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(_e408115c538a, _85308e43d297);
          } catch (_85308e43d297) {
            if ("application/wasm" != _e408115c538a.headers.get("Content-Type")) console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", _85308e43d297); else throw _85308e43d297;
          }
          let _0948873bd781 = await _e408115c538a.arrayBuffer();
          return await WebAssembly.instantiate(_0948873bd781, _85308e43d297);
        }
        {
          let _0948873bd781 = await WebAssembly.instantiate(_e408115c538a, _85308e43d297);
          return _0948873bd781 instanceof WebAssembly.Instance ? {
            instance: _0948873bd781,
            module: _e408115c538a
          } : _0948873bd781;
        }
      }
      function S() {
        let _e408115c538a = {};
        return _e408115c538a.wbg = {}, _e408115c538a.wbg.__wbg_buffer_609cc3eee51ed158 = function(_e408115c538a) {
          return _e408115c538a.buffer;
        }, _e408115c538a.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
          return a(function(_e408115c538a, _85308e43d297, _0948873bd781) {
            return _e408115c538a.call(_85308e43d297, _0948873bd781);
          }, arguments);
        }, _e408115c538a.wbg.__wbg_call_833bed5770ea2041 = function() {
          return a(function(_e408115c538a, _85308e43d297, _0948873bd781, _6c53fc11c1e7) {
            return _e408115c538a.call(_85308e43d297, _0948873bd781, _6c53fc11c1e7);
          }, arguments);
        }, _e408115c538a.wbg.__wbg_get_67b2ba62fc30de12 = function() {
          return a(function(_e408115c538a, _85308e43d297) {
            return Reflect.get(_e408115c538a, _85308e43d297);
          }, arguments);
        }, _e408115c538a.wbg.__wbg_new_405e22f390576ce2 = function() {
          return {};
        }, _e408115c538a.wbg.__wbg_new_78feb108b6472713 = function() {
          return [];
        }, _e408115c538a.wbg.__wbg_new_9ffbe0a71eff35e3 = function() {
          return a(function(_e408115c538a, _85308e43d297) {
            return new URL(c(_e408115c538a, _85308e43d297));
          }, arguments);
        }, _e408115c538a.wbg.__wbg_new_a12002a7f91c75be = function(_e408115c538a) {
          return new Uint8Array(_e408115c538a);
        }, _e408115c538a.wbg.__wbg_newwithbase_161c299e7a34e2eb = function() {
          return a(function(_e408115c538a, _85308e43d297, _0948873bd781, _6c53fc11c1e7) {
            return new URL(c(_e408115c538a, _85308e43d297), c(_0948873bd781, _6c53fc11c1e7));
          }, arguments);
        }, _e408115c538a.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(_e408115c538a, _85308e43d297, _0948873bd781) {
          return new Uint8Array(_e408115c538a, _85308e43d297 >>> 0, _0948873bd781 >>> 0);
        }, _e408115c538a.wbg.__wbg_scramtag_3a255d78b157986d = function(_e408115c538a) {
          let _85308e43d297 = p((0, _06df19f8be6e.N)(), _6c53fc11c1e7.__wbindgen_malloc, _6c53fc11c1e7.__wbindgen_realloc), _0948873bd781 = _ce231c24b42d;
          g().setInt32(_e408115c538a + 4, _0948873bd781, !0), g().setInt32(_e408115c538a + 0, _85308e43d297, !0);
        }, _e408115c538a.wbg.__wbg_set_bb8cecf6a62b9f46 = function() {
          return a(function(_e408115c538a, _85308e43d297, _0948873bd781) {
            return Reflect.set(_e408115c538a, _85308e43d297, _0948873bd781);
          }, arguments);
        }, _e408115c538a.wbg.__wbg_toString_5285597960676b7b = function(_e408115c538a) {
          return _e408115c538a.toString();
        }, _e408115c538a.wbg.__wbg_toString_c813bbd34d063839 = function(_e408115c538a) {
          return _e408115c538a.toString();
        }, _e408115c538a.wbg.__wbindgen_boolean_get = function(_e408115c538a) {
          return "boolean" == typeof _e408115c538a ? +!!_e408115c538a : 2;
        }, _e408115c538a.wbg.__wbindgen_error_new = function(_e408115c538a, _85308e43d297) {
          return Error(c(_e408115c538a, _85308e43d297));
        }, _e408115c538a.wbg.__wbindgen_init_externref_table = function() {
          let _e408115c538a = _6c53fc11c1e7.__wbindgen_export_2, _85308e43d297 = _e408115c538a.grow(4);
          _e408115c538a.set(0, void 0), _e408115c538a.set(_85308e43d297 + 0, void 0), _e408115c538a.set(_85308e43d297 + 1, null), 
          _e408115c538a.set(_85308e43d297 + 2, !0), _e408115c538a.set(_85308e43d297 + 3, !1);
        }, _e408115c538a.wbg.__wbindgen_is_function = function(_e408115c538a) {
          return "function" == typeof _e408115c538a;
        }, _e408115c538a.wbg.__wbindgen_memory = function() {
          return _6c53fc11c1e7.memory;
        }, _e408115c538a.wbg.__wbindgen_string_get = function(_e408115c538a, _85308e43d297) {
          let _0948873bd781 = "string" == typeof _85308e43d297 ? _85308e43d297 : void 0;
          var _06df19f8be6e = null == _0948873bd781 ? 0 : p(_0948873bd781, _6c53fc11c1e7.__wbindgen_malloc, _6c53fc11c1e7.__wbindgen_realloc), _fbbba1a672e2 = _ce231c24b42d;
          g().setInt32(_e408115c538a + 4, _fbbba1a672e2, !0), g().setInt32(_e408115c538a + 0, _06df19f8be6e, !0);
        }, _e408115c538a.wbg.__wbindgen_string_new = function(_e408115c538a, _85308e43d297) {
          return c(_e408115c538a, _85308e43d297);
        }, _e408115c538a.wbg.__wbindgen_throw = function(_e408115c538a, _85308e43d297) {
          throw Error(c(_e408115c538a, _85308e43d297));
        }, _e408115c538a;
      }
      function v(_e408115c538a, _85308e43d297) {
        return _6c53fc11c1e7 = _e408115c538a.exports, E.__wbindgen_wasm_module = _85308e43d297, 
        _f59cf6266889 = null, _1087e8da3d1c = null, _6c53fc11c1e7.__wbindgen_start(), _6c53fc11c1e7;
      }
      function x(_e408115c538a) {
        if (void 0 !== _6c53fc11c1e7) return _6c53fc11c1e7;
        void 0 !== _e408115c538a && (Object.getPrototypeOf(_e408115c538a) === Object.prototype ? ({module: _e408115c538a} = _e408115c538a) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
        let _85308e43d297 = S();
        return _e408115c538a instanceof WebAssembly.Module || (_e408115c538a = new WebAssembly.Module(_e408115c538a)), 
        v(new WebAssembly.Instance(_e408115c538a, _85308e43d297), _e408115c538a);
      }
      async function E(_e408115c538a) {
        if (void 0 !== _6c53fc11c1e7) return _6c53fc11c1e7;
        void 0 !== _e408115c538a && (Object.getPrototypeOf(_e408115c538a) === Object.prototype ? ({module_or_path: _e408115c538a} = _e408115c538a) : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), 
        void 0 === _e408115c538a && (_e408115c538a = new URL("wasm_bg.wasm", ""));
        let _85308e43d297 = S();
        ("string" == typeof _e408115c538a || "function" == typeof Request && _e408115c538a instanceof Request || "function" == typeof URL && _e408115c538a instanceof URL) && (_e408115c538a = fetch(_e408115c538a));
        let {instance: _0948873bd781, module: _06df19f8be6e} = await w(await _e408115c538a, _85308e43d297);
        return v(_0948873bd781, _06df19f8be6e);
      }
    }
  }, _85308e43d297 = {};
  function r(_0948873bd781) {
    var _6c53fc11c1e7 = _85308e43d297[_0948873bd781];
    if (void 0 !== _6c53fc11c1e7) return _6c53fc11c1e7.exports;
    var _06df19f8be6e = _85308e43d297[_0948873bd781] = {
      exports: {}
    };
    return _e408115c538a[_0948873bd781](_06df19f8be6e, _06df19f8be6e.exports, r), _06df19f8be6e.exports;
  }
  r.n = _e408115c538a => {
    var _85308e43d297 = _e408115c538a && _e408115c538a.__esModule ? () => _e408115c538a.default : () => _e408115c538a;
    return r.d(_85308e43d297, {
      a: _85308e43d297
    }), _85308e43d297;
  }, r.d = (_e408115c538a, _85308e43d297) => {
    for (var _0948873bd781 in _85308e43d297) r.o(_85308e43d297, _0948873bd781) && !r.o(_e408115c538a, _0948873bd781) && Object.defineProperty(_e408115c538a, _0948873bd781, {
      enumerable: !0,
      get: _85308e43d297[_0948873bd781]
    });
  }, r.o = (_e408115c538a, _85308e43d297) => Object.prototype.hasOwnProperty.call(_e408115c538a, _85308e43d297), 
  r.r = _e408115c538a => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(_e408115c538a, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(_e408115c538a, "__esModule", {
      value: !0
    });
  }, globalThis.$studyjetRequire = function(_e408115c538a) {
    return r(409)(_e408115c538a);
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
