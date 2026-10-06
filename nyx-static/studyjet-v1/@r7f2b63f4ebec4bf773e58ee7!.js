(() => {
  var _564d09f0fe7a = {
    4322: function(_564d09f0fe7a) {
      var _cd89175f9633 = {
        decodeValues: !0,
        map: !1,
        silent: !1
      };
      function r(_564d09f0fe7a) {
        return "string" == typeof _564d09f0fe7a && !!_564d09f0fe7a.trim();
      }
      function n(_564d09f0fe7a, _91a2259ffea9) {
        var _bed23b1c4e71, _e29815aa94d6, _d879eb489a78, _d75b4034184e, _eced61b9ace5 = _564d09f0fe7a.split(";").filter(r), _775f64df6c74 = (_bed23b1c4e71 = _eced61b9ace5.shift(), 
        _e29815aa94d6 = "", _d879eb489a78 = "", (_d75b4034184e = _bed23b1c4e71.split("=")).length > 1 ? (_e29815aa94d6 = _d75b4034184e.shift(), 
        _d879eb489a78 = _d75b4034184e.join("=")) : _d879eb489a78 = _bed23b1c4e71, {
          name: _e29815aa94d6,
          value: _d879eb489a78
        }), _90a7406a509b = _775f64df6c74.name, _029290fe381e = _775f64df6c74.value;
        _91a2259ffea9 = _91a2259ffea9 ? Object.assign({}, _cd89175f9633, _91a2259ffea9) : _cd89175f9633;
        try {
          _029290fe381e = _91a2259ffea9.decodeValues ? decodeURIComponent(_029290fe381e) : _029290fe381e;
        } catch (_564d09f0fe7a) {
          console.error("set-cookie-parser encountered an error while decoding a cookie with value '" + _029290fe381e + "'. Set options.decodeValues to false to disable this feature.", _564d09f0fe7a);
        }
        var _bad94b9ba2d5 = {
          name: _90a7406a509b,
          value: _029290fe381e
        };
        return _eced61b9ace5.forEach(function(_564d09f0fe7a) {
          var _cd89175f9633 = _564d09f0fe7a.split("="), _91a2259ffea9 = _cd89175f9633.shift().trimLeft().toLowerCase(), _bed23b1c4e71 = _cd89175f9633.join("=");
          "expires" === _91a2259ffea9 ? _bad94b9ba2d5.expires = new Date(_bed23b1c4e71) : "max-age" === _91a2259ffea9 ? _bad94b9ba2d5.maxAge = parseInt(_bed23b1c4e71, 10) : "secure" === _91a2259ffea9 ? _bad94b9ba2d5.secure = !0 : "httponly" === _91a2259ffea9 ? _bad94b9ba2d5.httpOnly = !0 : "samesite" === _91a2259ffea9 ? _bad94b9ba2d5.sameSite = _bed23b1c4e71 : "partitioned" === _91a2259ffea9 ? _bad94b9ba2d5.partitioned = !0 : _bad94b9ba2d5[_91a2259ffea9] = _bed23b1c4e71;
        }), _bad94b9ba2d5;
      }
      function i(_564d09f0fe7a, _91a2259ffea9) {
        if (_91a2259ffea9 = _91a2259ffea9 ? Object.assign({}, _cd89175f9633, _91a2259ffea9) : _cd89175f9633, 
        !_564d09f0fe7a) if (!_91a2259ffea9.map) return []; else return {};
        if (_564d09f0fe7a.headers) if ("function" == typeof _564d09f0fe7a.headers.getSetCookie) _564d09f0fe7a = _564d09f0fe7a.headers.getSetCookie(); else if (_564d09f0fe7a.headers["set-cookie"]) _564d09f0fe7a = _564d09f0fe7a.headers["set-cookie"]; else {
          var _bed23b1c4e71 = _564d09f0fe7a.headers[Object.keys(_564d09f0fe7a.headers).find(function(_564d09f0fe7a) {
            return "set-cookie" === _564d09f0fe7a.toLowerCase();
          })];
          _bed23b1c4e71 || !_564d09f0fe7a.headers.cookie || _91a2259ffea9.silent || console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."), 
          _564d09f0fe7a = _bed23b1c4e71;
        }
        return (Array.isArray(_564d09f0fe7a) || (_564d09f0fe7a = [ _564d09f0fe7a ]), _91a2259ffea9.map) ? _564d09f0fe7a.filter(r).reduce(function(_564d09f0fe7a, _cd89175f9633) {
          var _bed23b1c4e71 = n(_cd89175f9633, _91a2259ffea9);
          return _564d09f0fe7a[_bed23b1c4e71.name] = _bed23b1c4e71, _564d09f0fe7a;
        }, {}) : _564d09f0fe7a.filter(r).map(function(_564d09f0fe7a) {
          return n(_564d09f0fe7a, _91a2259ffea9);
        });
      }
      _564d09f0fe7a.exports = i, _564d09f0fe7a.exports.parse = i, _564d09f0fe7a.exports.parseString = n, 
      _564d09f0fe7a.exports.splitCookiesString = function(_564d09f0fe7a) {
        if (Array.isArray(_564d09f0fe7a)) return _564d09f0fe7a;
        if ("string" != typeof _564d09f0fe7a) return [];
        var _cd89175f9633, _91a2259ffea9, _bed23b1c4e71, _e29815aa94d6, _d879eb489a78, _d75b4034184e = [], _eced61b9ace5 = 0;
        function l() {
          for (;_eced61b9ace5 < _564d09f0fe7a.length && /\s/.test(_564d09f0fe7a.charAt(_eced61b9ace5)); ) _eced61b9ace5 += 1;
          return _eced61b9ace5 < _564d09f0fe7a.length;
        }
        for (;_eced61b9ace5 < _564d09f0fe7a.length; ) {
          for (_cd89175f9633 = _eced61b9ace5, _d879eb489a78 = !1; l(); ) if ("," === (_91a2259ffea9 = _564d09f0fe7a.charAt(_eced61b9ace5))) {
            for (_bed23b1c4e71 = _eced61b9ace5, _eced61b9ace5 += 1, l(), _e29815aa94d6 = _eced61b9ace5; _eced61b9ace5 < _564d09f0fe7a.length && "=" !== (_91a2259ffea9 = _564d09f0fe7a.charAt(_eced61b9ace5)) && ";" !== _91a2259ffea9 && "," !== _91a2259ffea9; ) _eced61b9ace5 += 1;
            _eced61b9ace5 < _564d09f0fe7a.length && "=" === _564d09f0fe7a.charAt(_eced61b9ace5) ? (_d879eb489a78 = !0, 
            _eced61b9ace5 = _e29815aa94d6, _d75b4034184e.push(_564d09f0fe7a.substring(_cd89175f9633, _bed23b1c4e71)), 
            _cd89175f9633 = _eced61b9ace5) : _eced61b9ace5 = _bed23b1c4e71 + 1;
          } else _eced61b9ace5 += 1;
          (!_d879eb489a78 || _eced61b9ace5 >= _564d09f0fe7a.length) && _d75b4034184e.push(_564d09f0fe7a.substring(_cd89175f9633, _564d09f0fe7a.length));
        }
        return _d75b4034184e;
      };
    },
    7302: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      var _bed23b1c4e71 = {
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
      function i(_564d09f0fe7a) {
        return _91a2259ffea9(a(_564d09f0fe7a));
      }
      function a(_564d09f0fe7a) {
        if (!_91a2259ffea9.o(_bed23b1c4e71, _564d09f0fe7a)) {
          var _cd89175f9633 = Error("Cannot find module '" + _564d09f0fe7a + "'");
          throw _cd89175f9633.code = "MODULE_NOT_FOUND", _cd89175f9633;
        }
        return _bed23b1c4e71[_564d09f0fe7a];
      }
      i.keys = function() {
        return Object.keys(_bed23b1c4e71);
      }, i.resolve = a, _564d09f0fe7a.exports = i, i.id = 7302;
    },
    409: function(_564d09f0fe7a) {
      function t(_564d09f0fe7a) {
        var _cd89175f9633 = Error("Cannot find module '" + _564d09f0fe7a + "'");
        throw _cd89175f9633.code = "MODULE_NOT_FOUND", _cd89175f9633;
      }
      t.keys = () => [], t.resolve = t, t.id = 409, _564d09f0fe7a.exports = t;
    },
    336: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        StudyJetClient: () => g
      });
      var _bed23b1c4e71 = _91a2259ffea9(2794), _e29815aa94d6 = _91a2259ffea9(94), _d879eb489a78 = _91a2259ffea9(3696), _d75b4034184e = _91a2259ffea9(581), _eced61b9ace5 = _91a2259ffea9(1862), _775f64df6c74 = _91a2259ffea9(1472), _90a7406a509b = _91a2259ffea9(37), _029290fe381e = _91a2259ffea9(3831), _bad94b9ba2d5 = _91a2259ffea9(1323), _5452948ead4c = _91a2259ffea9(1229), _5695a624e761 = _91a2259ffea9(4110), _45080c7acefd = _91a2259ffea9(8665).A;
      class g {
        global;
        locationProxy;
        serviceWorker;
        bare;
        natives;
        descriptors;
        wrapfn;
        cookieStore=new _029290fe381e.k;
        eventcallbacks=new Map;
        meta;
        box;
        constructor(_564d09f0fe7a) {
          if (this.global = _564d09f0fe7a, _bed23b1c4e71.pX in _564d09f0fe7a) throw console.error("attempted to initialize a studyjet client, but one is already loaded - this is very bad"), 
          Error();
          if (_bad94b9ba2d5.iswindow) {
            try {
              _bed23b1c4e71.pX in _564d09f0fe7a.parent && (this.box = _564d09f0fe7a.parent[_bed23b1c4e71.pX].box);
            } catch {}
            try {
              _bed23b1c4e71.pX in _564d09f0fe7a.top && (this.box = _564d09f0fe7a.top[_bed23b1c4e71.pX].box);
            } catch {}
            try {
              _564d09f0fe7a.opener && _bed23b1c4e71.pX in _564d09f0fe7a.opener && (this.box = _564d09f0fe7a.opener[_bed23b1c4e71.pX].box);
            } catch {}
            this.box || (_45080c7acefd.warn("Creating SingletonBox"), this.box = new _5452948ead4c.SingletonBox(this));
          } else this.box = new _5452948ead4c.SingletonBox(this);
          this.box.registerClient(this, _564d09f0fe7a), _bad94b9ba2d5.iswindow ? this.bare = new _5695a624e761.Ay : this.bare = new _5695a624e761.Ay(new Promise(_564d09f0fe7a => {
            addEventListener("message", ({data: _cd89175f9633}) => {
              "object" == typeof _cd89175f9633 && "$studyjet$type" in _cd89175f9633 && "baremuxinit" === _cd89175f9633.$studyjet$type && _564d09f0fe7a(_cd89175f9633.port);
            });
          })), this.serviceWorker = this.global.navigator.serviceWorker, _bad94b9ba2d5.iswindow && (_564d09f0fe7a.document[_bed23b1c4e71.pX] = this), 
          this.wrapfn = (0, _d75b4034184e.createWrapFn)(this, _564d09f0fe7a), this.natives = {
            store: new Proxy({}, {
              get: (_564d09f0fe7a, _cd89175f9633) => {
                if (_cd89175f9633 in _564d09f0fe7a) return _564d09f0fe7a[_cd89175f9633];
                let _91a2259ffea9 = _cd89175f9633.split("."), _bed23b1c4e71 = _91a2259ffea9.pop(), _e29815aa94d6 = _91a2259ffea9.reduce((_564d09f0fe7a, _cd89175f9633) => _564d09f0fe7a?.[_cd89175f9633], this.global);
                if (!_e29815aa94d6) return;
                let _d879eb489a78 = Reflect.get(_e29815aa94d6, _bed23b1c4e71);
                return _564d09f0fe7a[_cd89175f9633] = _d879eb489a78, _564d09f0fe7a[_cd89175f9633];
              }
            }),
            construct(_564d09f0fe7a, ..._cd89175f9633) {
              let _91a2259ffea9 = this.store[_564d09f0fe7a];
              return _91a2259ffea9 ? new _91a2259ffea9(..._cd89175f9633) : null;
            },
            call(_564d09f0fe7a, _cd89175f9633, ..._91a2259ffea9) {
              let _bed23b1c4e71 = this.store[_564d09f0fe7a];
              return _bed23b1c4e71 ? _bed23b1c4e71.call(_cd89175f9633, ..._91a2259ffea9) : null;
            }
          }, this.descriptors = {
            store: new Proxy({}, {
              get: (_564d09f0fe7a, _91a2259ffea9) => {
                if (_91a2259ffea9 in _564d09f0fe7a) return _564d09f0fe7a[_91a2259ffea9];
                let _bed23b1c4e71 = _91a2259ffea9.split("."), _e29815aa94d6 = _bed23b1c4e71.pop(), _d879eb489a78 = _bed23b1c4e71.reduce((_564d09f0fe7a, _cd89175f9633) => _564d09f0fe7a?.[_cd89175f9633], this.global);
                if (!_d879eb489a78) return;
                let _d75b4034184e = _cd89175f9633.natives.call("Object.getOwnPropertyDescriptor", null, _d879eb489a78, _e29815aa94d6);
                return _564d09f0fe7a[_91a2259ffea9] = _d75b4034184e, _564d09f0fe7a[_91a2259ffea9];
              }
            }),
            get(_564d09f0fe7a, _cd89175f9633) {
              let _91a2259ffea9 = this.store[_564d09f0fe7a];
              return _91a2259ffea9 ? _91a2259ffea9.get.call(_cd89175f9633) : null;
            },
            set(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
              let _bed23b1c4e71 = this.store[_564d09f0fe7a];
              if (!_bed23b1c4e71) return null;
              _bed23b1c4e71.set.call(_cd89175f9633, _91a2259ffea9);
            }
          };
          const _cd89175f9633 = this;
          this.meta = {
            get origin() {
              return _cd89175f9633.url;
            },
            get base() {
              if (_bad94b9ba2d5.iswindow) {
                const _564d09f0fe7a = _cd89175f9633.natives.call("Document.prototype.querySelector", _cd89175f9633.global.document, "base");
                if (_564d09f0fe7a) {
                  let _91a2259ffea9 = _564d09f0fe7a.getAttribute("href");
                  if (!_91a2259ffea9) return _cd89175f9633.url;
                  const _bed23b1c4e71 = _91a2259ffea9.indexOf("#");
                  if (!(_91a2259ffea9 = _91a2259ffea9.substring(0, -1 === _bed23b1c4e71 ? void 0 : _bed23b1c4e71))) return _cd89175f9633.url;
                  return new URL(_91a2259ffea9, _cd89175f9633.url.origin);
                }
              }
              return _cd89175f9633.url;
            },
            get topFrameName() {
              if (!_bad94b9ba2d5.iswindow) throw Error("topFrameName was called from a worker?");
              let _564d09f0fe7a = _cd89175f9633.global;
              if (_564d09f0fe7a.parent.window == _564d09f0fe7a.window) return null;
              for (;_564d09f0fe7a.parent.window !== _564d09f0fe7a.window && _564d09f0fe7a.parent.window[_bed23b1c4e71.pX]; ) _564d09f0fe7a = _564d09f0fe7a.parent.window;
              const _91a2259ffea9 = _564d09f0fe7a[_bed23b1c4e71.pX].descriptors.get("window.frameElement", _564d09f0fe7a);
              if (!_91a2259ffea9) return null;
              if (!_91a2259ffea9.name) return console.error("YOU NEED TO USE `new StudyJetFrame()`! DIRECT IFRAMES WILL NOT WORK"), 
              null;
              return _91a2259ffea9.name;
            },
            get parentFrameName() {
              if (!_bad94b9ba2d5.iswindow) throw Error("parentFrameName was called from a worker?");
              if (_cd89175f9633.global.parent.window == _cd89175f9633.global.window) return null;
              let _564d09f0fe7a = _cd89175f9633.global.parent.window;
              if (_564d09f0fe7a[_bed23b1c4e71.pX]) {
                const _cd89175f9633 = _564d09f0fe7a[_bed23b1c4e71.pX].descriptors.get("window.frameElement", _564d09f0fe7a);
                if (!_cd89175f9633) return null;
                if (!_cd89175f9633.name) return console.error("YOU NEED TO USE `new StudyJetFrame()`! DIRECT IFRAMES WILL NOT WORK"), 
                null;
                return _cd89175f9633.name;
              }
              {
                const _564d09f0fe7a = _cd89175f9633.descriptors.get("window.frameElement", _cd89175f9633.global);
                if (!_564d09f0fe7a.name) return console.error("YOU NEED TO USE `new StudyJetFrame()`! DIRECT IFRAMES WILL NOT WORK"), 
                null;
                return _564d09f0fe7a.name;
              }
            }
          }, this.locationProxy = (0, _d879eb489a78.createLocationProxy)(this, _564d09f0fe7a), 
          _564d09f0fe7a[_bed23b1c4e71.pX] = this;
        }
        get frame() {
          if (!_bad94b9ba2d5.iswindow) return null;
          let _564d09f0fe7a = this.descriptors.get("window.frameElement", this.global);
          if (!_564d09f0fe7a) return null;
          let _cd89175f9633 = _564d09f0fe7a[_bed23b1c4e71.zr];
          if (!_cd89175f9633) {
            let _564d09f0fe7a = this.global.window;
            for (;_564d09f0fe7a.parent !== _564d09f0fe7a; ) {
              let _cd89175f9633 = _564d09f0fe7a[_bed23b1c4e71.pX].descriptors.get("window.frameElement", _564d09f0fe7a);
              if (!_cd89175f9633) return null;
              if (_cd89175f9633 && _cd89175f9633[_bed23b1c4e71.zr]) return _cd89175f9633[_bed23b1c4e71.zr];
              _564d09f0fe7a = _564d09f0fe7a.parent.window;
            }
          }
          return _cd89175f9633;
        }
        get isSubframe() {
          if (!_bad94b9ba2d5.iswindow) return !1;
          let _564d09f0fe7a = this.descriptors.get("window.frameElement", this.global);
          return !!_564d09f0fe7a && !_564d09f0fe7a[_bed23b1c4e71.zr];
        }
        loadcookies(_564d09f0fe7a) {
          this.cookieStore.load(_564d09f0fe7a);
        }
        hook() {
          let _564d09f0fe7a = _91a2259ffea9(7302), _cd89175f9633 = [];
          for (let _91a2259ffea9 of _564d09f0fe7a.keys()) {
            let _bed23b1c4e71 = _564d09f0fe7a(_91a2259ffea9);
            _91a2259ffea9.endsWith(".ts") && (_91a2259ffea9.startsWith("./dom/") && "window" in this.global || _91a2259ffea9.startsWith("./worker/") && "WorkerGlobalScope" in this.global || _91a2259ffea9.startsWith("./shared/")) && _cd89175f9633.push(_bed23b1c4e71);
          }
          for (let _564d09f0fe7a of (_cd89175f9633.sort((_564d09f0fe7a, _cd89175f9633) => (_564d09f0fe7a.order || 0) - (_cd89175f9633.order || 0)), 
          _cd89175f9633)) !_564d09f0fe7a.enabled || _564d09f0fe7a.enabled(this) ? _564d09f0fe7a.default(this, this.global) : _564d09f0fe7a.disabled && _564d09f0fe7a.disabled(this, this.global);
        }
        get url() {
          return new URL((0, _775f64df6c74.v2)(this.global.location.href));
        }
        set url(_564d09f0fe7a) {
          _564d09f0fe7a instanceof URL && (_564d09f0fe7a = _564d09f0fe7a.toString());
          let _cd89175f9633 = new _eced61b9ace5.NavigateEvent(_564d09f0fe7a);
          this.frame && this.frame.dispatchEvent(_cd89175f9633), _cd89175f9633.defaultPrevented || (this.global.location.href = (0, 
          _775f64df6c74.Oy)(_cd89175f9633.url, this.meta));
        }
        Proxy(_564d09f0fe7a, _cd89175f9633) {
          if (Array.isArray(_564d09f0fe7a)) {
            for (let _91a2259ffea9 of _564d09f0fe7a) this.Proxy(_91a2259ffea9, _cd89175f9633);
            return;
          }
          let _91a2259ffea9 = _564d09f0fe7a.split("."), _bed23b1c4e71 = _91a2259ffea9.pop(), _e29815aa94d6 = _91a2259ffea9.reduce((_564d09f0fe7a, _cd89175f9633) => _564d09f0fe7a?.[_cd89175f9633], this.global);
          if (_e29815aa94d6) {
            if (!(_564d09f0fe7a in this.natives.store)) {
              let _cd89175f9633 = Reflect.get(_e29815aa94d6, _bed23b1c4e71);
              this.natives.store[_564d09f0fe7a] = _cd89175f9633;
            }
            this.RawProxy(_e29815aa94d6, _bed23b1c4e71, _cd89175f9633);
          }
        }
        RawProxy(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
          if (!_564d09f0fe7a || !_cd89175f9633 || !Reflect.has(_564d09f0fe7a, _cd89175f9633)) return;
          let _bed23b1c4e71 = Reflect.get(_564d09f0fe7a, _cd89175f9633);
          delete _564d09f0fe7a[_cd89175f9633];
          let _d879eb489a78 = {};
          _91a2259ffea9.construct && (_d879eb489a78.construct = function(_564d09f0fe7a, _cd89175f9633, _bed23b1c4e71) {
            let _e29815aa94d6, _d879eb489a78 = !1, _d75b4034184e = {
              fn: _564d09f0fe7a,
              this: null,
              args: _cd89175f9633,
              newTarget: _bed23b1c4e71,
              return: _564d09f0fe7a => {
                _d879eb489a78 = !0, _e29815aa94d6 = _564d09f0fe7a;
              },
              call: () => (_d879eb489a78 = !0, _e29815aa94d6 = Reflect.construct(_d75b4034184e.fn, _d75b4034184e.args, _d75b4034184e.newTarget))
            };
            return (_91a2259ffea9.construct(_d75b4034184e), _d879eb489a78) ? _e29815aa94d6 : Reflect.construct(_d75b4034184e.fn, _d75b4034184e.args, _d75b4034184e.newTarget);
          }), _91a2259ffea9.apply && (_d879eb489a78.apply = (_564d09f0fe7a, _cd89175f9633, _bed23b1c4e71) => {
            let _e29815aa94d6, _d879eb489a78 = !1, _d75b4034184e = {
              fn: _564d09f0fe7a,
              this: _cd89175f9633,
              args: _bed23b1c4e71,
              newTarget: null,
              return: _564d09f0fe7a => {
                _d879eb489a78 = !0, _e29815aa94d6 = _564d09f0fe7a;
              },
              call: () => (_d879eb489a78 = !0, _e29815aa94d6 = Reflect.apply(_d75b4034184e.fn, _d75b4034184e.this, _d75b4034184e.args))
            }, _eced61b9ace5 = Error.prepareStackTrace;
            Error.prepareStackTrace = function(_564d09f0fe7a, _cd89175f9633) {
              if (_cd89175f9633[0].getFileName() && !_cd89175f9633[0].getFileName().startsWith(location.origin + _90a7406a509b.$W.prefix)) return {
                stack: _564d09f0fe7a.stack
              };
            };
            try {
              _91a2259ffea9.apply(_d75b4034184e);
            } catch (_564d09f0fe7a) {
              if (_564d09f0fe7a instanceof Error) if (_564d09f0fe7a.stack instanceof Object) {
                if (_564d09f0fe7a.stack = _564d09f0fe7a.stack.stack, console.error("ERROR FROM STUDYJET INTERNALS", _564d09f0fe7a), 
                !(0, _90a7406a509b.U5)("allowFailedIntercepts", this.url)) throw _564d09f0fe7a;
              } else throw _564d09f0fe7a; else throw _564d09f0fe7a;
            }
            return (Error.prepareStackTrace = _eced61b9ace5, _d879eb489a78) ? _e29815aa94d6 : Reflect.apply(_d75b4034184e.fn, _d75b4034184e.this, _d75b4034184e.args);
          }), _d879eb489a78.getOwnPropertyDescriptor = _e29815aa94d6.getOwnPropertyDescriptorHandler, 
          _564d09f0fe7a[_cd89175f9633] = new Proxy(_bed23b1c4e71, _d879eb489a78);
        }
        Trap(_564d09f0fe7a, _cd89175f9633) {
          if (Array.isArray(_564d09f0fe7a)) {
            for (let _91a2259ffea9 of _564d09f0fe7a) this.Trap(_91a2259ffea9, _cd89175f9633);
            return;
          }
          let _91a2259ffea9 = _564d09f0fe7a.split("."), _bed23b1c4e71 = _91a2259ffea9.pop(), _e29815aa94d6 = _91a2259ffea9.reduce((_564d09f0fe7a, _cd89175f9633) => _564d09f0fe7a?.[_cd89175f9633], this.global);
          if (!_e29815aa94d6) return;
          let _d879eb489a78 = this.natives.call("Object.getOwnPropertyDescriptor", null, _e29815aa94d6, _bed23b1c4e71);
          return this.descriptors.store[_564d09f0fe7a] = _d879eb489a78, this.RawTrap(_e29815aa94d6, _bed23b1c4e71, _cd89175f9633);
        }
        RawTrap(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
          if (!_564d09f0fe7a || !_cd89175f9633 || !Reflect.has(_564d09f0fe7a, _cd89175f9633)) return;
          let _bed23b1c4e71 = this.natives.call("Object.getOwnPropertyDescriptor", null, _564d09f0fe7a, _cd89175f9633), _e29815aa94d6 = {
            this: null,
            get: function() {
              return _bed23b1c4e71 && _bed23b1c4e71.get.call(this.this);
            },
            set: function(_564d09f0fe7a) {
              _bed23b1c4e71 && _bed23b1c4e71.set.call(this.this, _564d09f0fe7a);
            }
          };
          delete _564d09f0fe7a[_cd89175f9633];
          let _d879eb489a78 = {};
          return _91a2259ffea9.get ? _d879eb489a78.get = function() {
            return _e29815aa94d6.this = this, _91a2259ffea9.get(_e29815aa94d6);
          } : _bed23b1c4e71?.get && (_d879eb489a78.get = _bed23b1c4e71.get), _91a2259ffea9.set ? _d879eb489a78.set = function(_564d09f0fe7a) {
            _e29815aa94d6.this = this, _91a2259ffea9.set(_e29815aa94d6, _564d09f0fe7a);
          } : _bed23b1c4e71?.set && (_d879eb489a78.set = _bed23b1c4e71.set), _91a2259ffea9.enumerable ? _d879eb489a78.enumerable = _91a2259ffea9.enumerable : _bed23b1c4e71?.enumerable && (_d879eb489a78.enumerable = _bed23b1c4e71.enumerable), 
          _91a2259ffea9.configurable ? _d879eb489a78.configurable = _91a2259ffea9.configurable : _bed23b1c4e71?.configurable && (_d879eb489a78.configurable = _bed23b1c4e71.configurable), 
          Object.defineProperty(_564d09f0fe7a, _cd89175f9633, _d879eb489a78), _bed23b1c4e71;
        }
      }
    },
    1077: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      function n(_564d09f0fe7a, _cd89175f9633) {
        _564d09f0fe7a.Trap("Element.prototype.attributes", {
          get(_564d09f0fe7a) {
            let _cd89175f9633 = _564d09f0fe7a.get(), _91a2259ffea9 = new Proxy(_cd89175f9633, {
              get(_564d09f0fe7a, _bed23b1c4e71, _e29815aa94d6) {
                let _d879eb489a78 = Reflect.get(_564d09f0fe7a, _bed23b1c4e71);
                return "length" === _bed23b1c4e71 ? Object.keys(_91a2259ffea9).length : "getNamedItem" === _bed23b1c4e71 ? _564d09f0fe7a => _91a2259ffea9[_564d09f0fe7a] : "getNamedItemNS" === _bed23b1c4e71 ? (_564d09f0fe7a, _cd89175f9633) => _91a2259ffea9[`${_564d09f0fe7a}:${_cd89175f9633}`] : _bed23b1c4e71 in NamedNodeMap.prototype && "function" == typeof _d879eb489a78 ? new Proxy(_d879eb489a78, {
                  apply: (_564d09f0fe7a, _bed23b1c4e71, _e29815aa94d6) => _bed23b1c4e71 === _91a2259ffea9 ? Reflect.apply(_564d09f0fe7a, _cd89175f9633, _e29815aa94d6) : Reflect.apply(_564d09f0fe7a, _bed23b1c4e71, _e29815aa94d6)
                }) : "string" != typeof _bed23b1c4e71 && "number" != typeof _bed23b1c4e71 || isNaN(Number(_bed23b1c4e71)) ? this.has(_564d09f0fe7a, _bed23b1c4e71) ? _d879eb489a78 : void 0 : _cd89175f9633[Object.keys(_91a2259ffea9)[_bed23b1c4e71]];
              },
              ownKeys(_564d09f0fe7a) {
                return Reflect.ownKeys(_564d09f0fe7a).filter(_cd89175f9633 => this.has(_564d09f0fe7a, _cd89175f9633));
              },
              has: (_564d09f0fe7a, _91a2259ffea9) => "symbol" == typeof _91a2259ffea9 ? Reflect.has(_564d09f0fe7a, _91a2259ffea9) : !(_91a2259ffea9.startsWith("studyjet-attr-") || _cd89175f9633[_91a2259ffea9]?.name?.startsWith("studyjet-attr-")) && Reflect.has(_564d09f0fe7a, _91a2259ffea9)
            });
            return _91a2259ffea9;
          }
        }), _564d09f0fe7a.Trap([ "Attr.prototype.value", "Attr.prototype.nodeValue" ], {
          get: _564d09f0fe7a => _564d09f0fe7a.this?.ownerElement ? _564d09f0fe7a.this.ownerElement.getAttribute(_564d09f0fe7a.this.name) : _564d09f0fe7a.get(),
          set: (_564d09f0fe7a, _cd89175f9633) => _564d09f0fe7a.this?.ownerElement ? _564d09f0fe7a.this.ownerElement.setAttribute(_564d09f0fe7a.this.name, _cd89175f9633) : _564d09f0fe7a.set(_cd89175f9633)
        });
      }
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        default: () => n
      });
    },
    7430: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        default: () => i
      });
      var _bed23b1c4e71 = _91a2259ffea9(1472);
      function i(_564d09f0fe7a, _cd89175f9633) {
        _564d09f0fe7a.Proxy("Navigator.prototype.sendBeacon", {
          apply(_cd89175f9633) {
            _cd89175f9633.args[0] = (0, _bed23b1c4e71.Oy)(_cd89175f9633.args[0], _564d09f0fe7a.meta);
          }
        });
      }
    },
    9116: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      function n(_564d09f0fe7a, _cd89175f9633) {
        _564d09f0fe7a.serviceWorker.addEventListener("message", ({data: _cd89175f9633}) => {
          if ("studyjet$type" in _cd89175f9633 && "cookie" === _cd89175f9633.studyjet$type) {
            _564d09f0fe7a.cookieStore.setCookies([ _cd89175f9633.cookie ], new URL(_cd89175f9633.url));
            let _91a2259ffea9 = {
              studyjet$token: _cd89175f9633.studyjet$token,
              studyjet$type: "cookie"
            };
            _564d09f0fe7a.serviceWorker.controller.postMessage(_91a2259ffea9);
          }
        }), _564d09f0fe7a.Trap("Document.prototype.cookie", {
          get: () => _564d09f0fe7a.cookieStore.getCookies(_564d09f0fe7a.url, !0),
          set(_cd89175f9633, _91a2259ffea9) {
            _564d09f0fe7a.cookieStore.setCookies([ _91a2259ffea9 ], _564d09f0fe7a.url);
            let _bed23b1c4e71 = _564d09f0fe7a.descriptors.get("ServiceWorkerContainer.prototype.controller", _564d09f0fe7a.serviceWorker);
            _bed23b1c4e71 && _564d09f0fe7a.natives.call("ServiceWorker.prototype.postMessage", _bed23b1c4e71, {
              studyjet$type: "cookie",
              cookie: _91a2259ffea9,
              url: _564d09f0fe7a.url.href
            });
          }
        }), delete _cd89175f9633.cookieStore;
      }
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        default: () => n
      });
    },
    6447: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        default: () => i
      });
      var _bed23b1c4e71 = _91a2259ffea9(2614);
      function i(_564d09f0fe7a) {
        _564d09f0fe7a.Proxy("CSSStyleDeclaration.prototype.setProperty", {
          apply(_cd89175f9633) {
            _cd89175f9633.args[1] && (_cd89175f9633.args[1] = (0, _bed23b1c4e71.s)(_cd89175f9633.args[1], _564d09f0fe7a.meta));
          }
        }), _564d09f0fe7a.Proxy("CSSStyleDeclaration.prototype.getPropertyValue", {
          apply(_564d09f0fe7a) {
            let _cd89175f9633 = _564d09f0fe7a.call();
            if (!_cd89175f9633) return _cd89175f9633;
            _564d09f0fe7a.return((0, _bed23b1c4e71.f)(_cd89175f9633));
          }
        }), _564d09f0fe7a.Trap("CSSStyleDeclaration.prototype.cssText", {
          set(_cd89175f9633, _91a2259ffea9) {
            _cd89175f9633.set((0, _bed23b1c4e71.s)(_91a2259ffea9, _564d09f0fe7a.meta));
          },
          get: _564d09f0fe7a => (0, _bed23b1c4e71.f)(_564d09f0fe7a.get())
        }), _564d09f0fe7a.Proxy("CSSStyleSheet.prototype.insertRule", {
          apply(_cd89175f9633) {
            _cd89175f9633.args[0] = (0, _bed23b1c4e71.s)(_cd89175f9633.args[0], _564d09f0fe7a.meta);
          }
        }), _564d09f0fe7a.Proxy("CSSStyleSheet.prototype.replace", {
          apply(_cd89175f9633) {
            _cd89175f9633.args[0] = (0, _bed23b1c4e71.s)(_cd89175f9633.args[0], _564d09f0fe7a.meta);
          }
        }), _564d09f0fe7a.Proxy("CSSStyleSheet.prototype.replaceSync", {
          apply(_cd89175f9633) {
            _cd89175f9633.args[0] = (0, _bed23b1c4e71.s)(_cd89175f9633.args[0], _564d09f0fe7a.meta);
          }
        }), _564d09f0fe7a.Trap("CSSRule.prototype.cssText", {
          set(_cd89175f9633, _91a2259ffea9) {
            _cd89175f9633.set((0, _bed23b1c4e71.s)(_91a2259ffea9, _564d09f0fe7a.meta));
          },
          get: _564d09f0fe7a => (0, _bed23b1c4e71.f)(_564d09f0fe7a.get())
        }), _564d09f0fe7a.Proxy("CSSStyleValue.parse", {
          apply(_cd89175f9633) {
            _cd89175f9633.args[1] && (_cd89175f9633.args[1] = (0, _bed23b1c4e71.s)(_cd89175f9633.args[1], _564d09f0fe7a.meta));
          }
        }), _564d09f0fe7a.Trap("HTMLElement.prototype.style", {
          get(_cd89175f9633) {
            let _91a2259ffea9 = _cd89175f9633.get();
            return new Proxy(_91a2259ffea9, {
              get(_564d09f0fe7a, _cd89175f9633) {
                let _e29815aa94d6 = Reflect.get(_564d09f0fe7a, _cd89175f9633);
                return "function" == typeof _e29815aa94d6 ? new Proxy(_e29815aa94d6, {
                  apply: (_564d09f0fe7a, _cd89175f9633, _bed23b1c4e71) => Reflect.apply(_564d09f0fe7a, _91a2259ffea9, _bed23b1c4e71)
                }) : _cd89175f9633 in CSSStyleDeclaration.prototype || !_e29815aa94d6 ? _e29815aa94d6 : (0, 
                _bed23b1c4e71.f)(_e29815aa94d6);
              },
              set: (_cd89175f9633, _91a2259ffea9, _e29815aa94d6) => "cssText" == _91a2259ffea9 || "" == _e29815aa94d6 || "string" != typeof _e29815aa94d6 ? Reflect.set(_cd89175f9633, _91a2259ffea9, _e29815aa94d6) : Reflect.set(_cd89175f9633, _91a2259ffea9, (0, 
              _bed23b1c4e71.s)(_e29815aa94d6, _564d09f0fe7a.meta))
            });
          },
          set(_564d09f0fe7a, _cd89175f9633) {
            _564d09f0fe7a.set(_cd89175f9633);
          }
        });
      }
    },
    5351: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        default: () => i
      });
      var _bed23b1c4e71 = _91a2259ffea9(884);
      function i(_564d09f0fe7a, _cd89175f9633) {
        let _91a2259ffea9 = String;
        _564d09f0fe7a.Proxy([ "Document.prototype.querySelector", "Document.prototype.querySelectorAll" ], {
          apply(_564d09f0fe7a) {
            _564d09f0fe7a.args[0] = _91a2259ffea9(_564d09f0fe7a.args[0]).replace(/((?:^|\s)\b\w+\[(?:src|href|data-href))[\^]?(=['"]?(?:https?[:])?\/\/)/, "$1*$2");
          }
        }), _564d09f0fe7a.Proxy("Document.prototype.write", {
          apply(_cd89175f9633) {
            if (_cd89175f9633.args[0]) try {
              _cd89175f9633.args[0] = (0, _bed23b1c4e71.Qs)(_cd89175f9633.args[0], _564d09f0fe7a.cookieStore, _564d09f0fe7a.meta, !1);
            } catch {}
          }
        }), _564d09f0fe7a.Trap("Document.prototype.referrer", {
          get: () => _564d09f0fe7a.url.toString()
        }), _564d09f0fe7a.Proxy("Document.prototype.writeln", {
          apply(_cd89175f9633) {
            if (_cd89175f9633.args[0]) try {
              _cd89175f9633.args[0] = (0, _bed23b1c4e71.Qs)(_cd89175f9633.args[0], _564d09f0fe7a.cookieStore, _564d09f0fe7a.meta, !1);
            } catch {}
          }
        }), _564d09f0fe7a.Proxy("Document.prototype.parseHTMLUnsafe", {
          apply(_cd89175f9633) {
            if (_cd89175f9633.args[0]) try {
              _cd89175f9633.args[0] = (0, _bed23b1c4e71.Qs)(_cd89175f9633.args[0], _564d09f0fe7a.cookieStore, _564d09f0fe7a.meta, !1);
            } catch {}
          }
        });
      }
    },
    7828: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        default: () => h
      });
      var _bed23b1c4e71 = _91a2259ffea9(2393), _e29815aa94d6 = _91a2259ffea9(2614), _d879eb489a78 = _91a2259ffea9(884), _d75b4034184e = _91a2259ffea9(1478), _eced61b9ace5 = _91a2259ffea9(1472), _775f64df6c74 = _91a2259ffea9(2794), _90a7406a509b = _91a2259ffea9(3255);
      let _029290fe381e = new TextEncoder;
      function d(_564d09f0fe7a) {
        return btoa(Array.from(_564d09f0fe7a, _564d09f0fe7a => String.fromCodePoint(_564d09f0fe7a)).join(""));
      }
      function h(_564d09f0fe7a, _cd89175f9633) {
        let _91a2259ffea9 = {
          nonce: [ _cd89175f9633.HTMLElement ],
          integrity: [ _cd89175f9633.HTMLScriptElement, _cd89175f9633.HTMLLinkElement ],
          csp: [ _cd89175f9633.HTMLIFrameElement ],
          credentialless: [ _cd89175f9633.HTMLIFrameElement ],
          src: [ _cd89175f9633.HTMLImageElement, _cd89175f9633.HTMLMediaElement, _cd89175f9633.HTMLIFrameElement, _cd89175f9633.HTMLFrameElement, _cd89175f9633.HTMLEmbedElement, _cd89175f9633.HTMLScriptElement, _cd89175f9633.HTMLSourceElement ],
          href: [ _cd89175f9633.HTMLAnchorElement, _cd89175f9633.HTMLLinkElement ],
          data: [ _cd89175f9633.HTMLObjectElement ],
          action: [ _cd89175f9633.HTMLFormElement ],
          formaction: [ _cd89175f9633.HTMLButtonElement, _cd89175f9633.HTMLInputElement ],
          srcdoc: [ _cd89175f9633.HTMLIFrameElement ],
          poster: [ _cd89175f9633.HTMLVideoElement ],
          imagesrcset: [ _cd89175f9633.HTMLLinkElement ]
        }, _bad94b9ba2d5 = [ _cd89175f9633.HTMLAnchorElement.prototype, _cd89175f9633.HTMLAreaElement.prototype ], _5452948ead4c = [ _564d09f0fe7a.natives.call("Object.getOwnPropertyDescriptor", null, _cd89175f9633.HTMLAnchorElement.prototype, "href"), _564d09f0fe7a.natives.call("Object.getOwnPropertyDescriptor", null, _cd89175f9633.HTMLAreaElement.prototype, "href") ];
        for (let _cd89175f9633 of Object.keys(_91a2259ffea9)) for (let _bed23b1c4e71 of _91a2259ffea9[_cd89175f9633]) {
          let _91a2259ffea9 = _564d09f0fe7a.natives.call("Object.getOwnPropertyDescriptor", null, _bed23b1c4e71.prototype, _cd89175f9633);
          Object.defineProperty(_bed23b1c4e71.prototype, _cd89175f9633, {
            get() {
              return [ "src", "data", "href", "action", "formaction" ].includes(_cd89175f9633) ? (0, 
              _eced61b9ace5.v2)(_91a2259ffea9.get.call(this)) : _91a2259ffea9.get.call(this);
            },
            set(_564d09f0fe7a) {
              return this.setAttribute(_cd89175f9633, _564d09f0fe7a);
            }
          });
        }
        for (let _cd89175f9633 of [ "protocol", "hash", "host", "hostname", "origin", "pathname", "port", "search" ]) for (let _91a2259ffea9 in _bad94b9ba2d5) {
          let _bed23b1c4e71 = _bad94b9ba2d5[_91a2259ffea9], _e29815aa94d6 = _5452948ead4c[_91a2259ffea9];
          _564d09f0fe7a.RawTrap(_bed23b1c4e71, _cd89175f9633, {
            get(_564d09f0fe7a) {
              let _91a2259ffea9 = _e29815aa94d6.get.call(_564d09f0fe7a.this);
              return _91a2259ffea9 ? new URL((0, _eced61b9ace5.v2)(_91a2259ffea9))[_cd89175f9633] : _91a2259ffea9;
            }
          });
        }
        _564d09f0fe7a.Trap("Node.prototype.baseURI", {
          get(_cd89175f9633) {
            let _91a2259ffea9 = _cd89175f9633.this, _bed23b1c4e71 = _91a2259ffea9.ownerDocument?.querySelector("base");
            return (_91a2259ffea9 instanceof Document && (_bed23b1c4e71 = _91a2259ffea9.querySelector("base")), 
            _bed23b1c4e71) ? new URL(_bed23b1c4e71.href, _564d09f0fe7a.url.origin).href : _564d09f0fe7a.url.origin;
          },
          set: (_564d09f0fe7a, _cd89175f9633) => !1
        }), _564d09f0fe7a.Proxy("Element.prototype.getAttribute", {
          apply(_cd89175f9633) {
            let [_91a2259ffea9] = _cd89175f9633.args;
            if (_91a2259ffea9.startsWith("studyjet-attr")) return _cd89175f9633.return(null);
            if (_564d09f0fe7a.natives.call("Element.prototype.hasAttribute", _cd89175f9633.this, `studyjet-attr-${_91a2259ffea9}`)) {
              let _564d09f0fe7a = _cd89175f9633.fn.call(_cd89175f9633.this, `studyjet-attr-${_91a2259ffea9}`);
              return null === _564d09f0fe7a ? _cd89175f9633.return("") : _cd89175f9633.return(_564d09f0fe7a);
            }
          }
        }), _564d09f0fe7a.Proxy("Element.prototype.getAttributeNames", {
          apply(_564d09f0fe7a) {
            let _cd89175f9633 = _564d09f0fe7a.call().filter(_564d09f0fe7a => !_564d09f0fe7a.startsWith("studyjet-attr"));
            _564d09f0fe7a.return(_cd89175f9633);
          }
        }), _564d09f0fe7a.Proxy("Element.prototype.getAttributeNode", {
          apply(_564d09f0fe7a) {
            if (_564d09f0fe7a.args[0].startsWith("studyjet-attr")) return _564d09f0fe7a.return(null);
          }
        }), _564d09f0fe7a.Proxy("Element.prototype.hasAttribute", {
          apply(_564d09f0fe7a) {
            if (_564d09f0fe7a.args[0].startsWith("studyjet-attr")) return _564d09f0fe7a.return(!1);
          }
        }), _564d09f0fe7a.Proxy("Element.prototype.setAttribute", {
          apply(_cd89175f9633) {
            let [_91a2259ffea9, _e29815aa94d6] = _cd89175f9633.args, _d879eb489a78 = _bed23b1c4e71.V.find(_564d09f0fe7a => {
              let _bed23b1c4e71 = _564d09f0fe7a[_91a2259ffea9.toLowerCase()];
              return !!_bed23b1c4e71 && ("*" === _bed23b1c4e71 || "function" != typeof _bed23b1c4e71 && _bed23b1c4e71.includes(_cd89175f9633.this.tagName.toLowerCase()));
            });
            if (_d879eb489a78) {
              let _bed23b1c4e71 = _d879eb489a78.fn(_e29815aa94d6, _564d09f0fe7a.meta, _564d09f0fe7a.cookieStore);
              if (null == _bed23b1c4e71) {
                _564d09f0fe7a.natives.call("Element.prototype.removeAttribute", _cd89175f9633.this, _91a2259ffea9), 
                _cd89175f9633.return(void 0);
                return;
              }
              _cd89175f9633.args[1] = _bed23b1c4e71, _cd89175f9633.fn.call(_cd89175f9633.this, `studyjet-attr-${_cd89175f9633.args[0]}`, _e29815aa94d6);
            }
          }
        }), _564d09f0fe7a.Proxy("Element.prototype.setAttributeNode", {
          apply(_564d09f0fe7a) {}
        }), _564d09f0fe7a.Proxy("Element.prototype.setAttributeNS", {
          apply(_cd89175f9633) {
            let [_91a2259ffea9, _e29815aa94d6, _d879eb489a78] = _cd89175f9633.args, _d75b4034184e = _bed23b1c4e71.V.find(_564d09f0fe7a => {
              let _91a2259ffea9 = _564d09f0fe7a[_e29815aa94d6.toLowerCase()];
              return !!_91a2259ffea9 && ("*" === _91a2259ffea9 || "function" != typeof _91a2259ffea9 && _91a2259ffea9.includes(_cd89175f9633.this.tagName.toLowerCase()));
            });
            _d75b4034184e && (_cd89175f9633.args[2] = _d75b4034184e.fn(_d879eb489a78, _564d09f0fe7a.meta, _564d09f0fe7a.cookieStore), 
            _564d09f0fe7a.natives.call("Element.prototype.setAttribute", _cd89175f9633.this, `studyjet-attr-${_cd89175f9633.args[1]}`, _d879eb489a78));
          }
        }), _564d09f0fe7a.Trap("SVGAnimatedString.prototype.baseVal", {
          get(_564d09f0fe7a) {
            let _cd89175f9633 = _564d09f0fe7a.get();
            return _cd89175f9633 ? (0, _eced61b9ace5.v2)(_cd89175f9633) : _cd89175f9633;
          },
          set(_cd89175f9633, _91a2259ffea9) {
            _cd89175f9633.set((0, _eced61b9ace5.Oy)(_91a2259ffea9, _564d09f0fe7a.meta));
          }
        }), _564d09f0fe7a.Trap("SVGAnimatedString.prototype.animVal", {
          get(_564d09f0fe7a) {
            let _cd89175f9633 = _564d09f0fe7a.get();
            return _cd89175f9633 ? (0, _eced61b9ace5.v2)(_cd89175f9633) : _cd89175f9633;
          }
        }), _564d09f0fe7a.Proxy("Element.prototype.removeAttribute", {
          apply(_cd89175f9633) {
            if (_cd89175f9633.args[0].startsWith("studyjet-attr")) return _cd89175f9633.return(void 0);
            _564d09f0fe7a.natives.call("Element.prototype.hasAttribute", _cd89175f9633.this, _cd89175f9633.args[0]) && _cd89175f9633.fn.call(_cd89175f9633.this, `studyjet-attr-${_cd89175f9633.args[0]}`);
          }
        }), _564d09f0fe7a.Proxy("Element.prototype.toggleAttribute", {
          apply(_cd89175f9633) {
            if (_cd89175f9633.args[0].startsWith("studyjet-attr")) return _cd89175f9633.return(!1);
            _564d09f0fe7a.natives.call("Element.prototype.hasAttribute", _cd89175f9633.this, _cd89175f9633.args[0]) && _cd89175f9633.fn.call(_cd89175f9633.this, `studyjet-attr-${_cd89175f9633.args[0]}`);
          }
        }), _564d09f0fe7a.Trap("Element.prototype.innerHTML", {
          set(_91a2259ffea9, _bed23b1c4e71) {
            let _eced61b9ace5;
            if (_91a2259ffea9.this instanceof _cd89175f9633.HTMLScriptElement) _eced61b9ace5 = (0, 
            _d75b4034184e.o)(_bed23b1c4e71, "(anonymous script element)", _564d09f0fe7a.meta), 
            _564d09f0fe7a.natives.call("Element.prototype.setAttribute", _91a2259ffea9.this, "studyjet-attr-script-source-src", d(_029290fe381e.encode(_eced61b9ace5))); else if (_91a2259ffea9.this instanceof _cd89175f9633.HTMLStyleElement) _eced61b9ace5 = (0, 
            _e29815aa94d6.s)(_bed23b1c4e71, _564d09f0fe7a.meta); else try {
              _eced61b9ace5 = (0, _d879eb489a78.Qs)(_bed23b1c4e71, _564d09f0fe7a.cookieStore, _564d09f0fe7a.meta);
            } catch {
              _eced61b9ace5 = _bed23b1c4e71;
            }
            _91a2259ffea9.set(_eced61b9ace5);
          },
          get(_91a2259ffea9) {
            if (_91a2259ffea9.this instanceof _cd89175f9633.HTMLScriptElement) {
              let _cd89175f9633 = _564d09f0fe7a.natives.call("Element.prototype.getAttribute", _91a2259ffea9.this, "studyjet-attr-script-source-src");
              return _cd89175f9633 ? atob(_cd89175f9633) : _91a2259ffea9.get();
            }
            return _91a2259ffea9.this instanceof _cd89175f9633.HTMLStyleElement ? _91a2259ffea9.get() : (0, 
            _d879eb489a78.nK)(_91a2259ffea9.get());
          }
        }), _564d09f0fe7a.Trap("Node.prototype.textContent", {
          set(_91a2259ffea9, _bed23b1c4e71) {
            if (_91a2259ffea9.this instanceof _cd89175f9633.HTMLScriptElement) {
              let _cd89175f9633 = (0, _d75b4034184e.o)(_bed23b1c4e71, "(anonymous script element)", _564d09f0fe7a.meta);
              return _564d09f0fe7a.natives.call("Element.prototype.setAttribute", _91a2259ffea9.this, "studyjet-attr-script-source-src", d(_029290fe381e.encode(_cd89175f9633))), 
              _91a2259ffea9.set(_cd89175f9633);
            }
            return _91a2259ffea9.this instanceof _cd89175f9633.HTMLStyleElement ? _91a2259ffea9.set((0, 
            _e29815aa94d6.s)(_bed23b1c4e71, _564d09f0fe7a.meta)) : _91a2259ffea9.set(_bed23b1c4e71);
          },
          get(_91a2259ffea9) {
            if (_91a2259ffea9.this instanceof _cd89175f9633.HTMLScriptElement) {
              let _cd89175f9633 = _564d09f0fe7a.natives.call("Element.prototype.getAttribute", _91a2259ffea9.this, "studyjet-attr-script-source-src");
              return _cd89175f9633 ? atob(_cd89175f9633) : _91a2259ffea9.get();
            }
            return _91a2259ffea9.this instanceof _cd89175f9633.HTMLStyleElement ? (0, _e29815aa94d6.f)(_91a2259ffea9.get()) : _91a2259ffea9.get();
          }
        }), _564d09f0fe7a.Trap("Element.prototype.outerHTML", {
          set(_cd89175f9633, _91a2259ffea9) {
            _cd89175f9633.set((0, _d879eb489a78.Qs)(_91a2259ffea9, _564d09f0fe7a.cookieStore, _564d09f0fe7a.meta));
          },
          get: _564d09f0fe7a => (0, _d879eb489a78.nK)(_564d09f0fe7a.get())
        }), _564d09f0fe7a.Proxy("Element.prototype.setHTMLUnsafe", {
          apply(_cd89175f9633) {
            try {
              _cd89175f9633.args[0] = (0, _d879eb489a78.Qs)(_cd89175f9633.args[0], _564d09f0fe7a.cookieStore, _564d09f0fe7a.meta, !1);
            } catch {}
          }
        }), _564d09f0fe7a.Proxy("Element.prototype.getHTML", {
          apply(_564d09f0fe7a) {
            _564d09f0fe7a.return((0, _d879eb489a78.nK)(_564d09f0fe7a.call()));
          }
        }), _564d09f0fe7a.Proxy("Element.prototype.insertAdjacentHTML", {
          apply(_cd89175f9633) {
            if (_cd89175f9633.args[1]) try {
              _cd89175f9633.args[1] = (0, _d879eb489a78.Qs)(_cd89175f9633.args[1], _564d09f0fe7a.cookieStore, _564d09f0fe7a.meta, !1);
            } catch {}
          }
        }), _564d09f0fe7a.Proxy("Audio", {
          construct(_cd89175f9633) {
            _cd89175f9633.args[0] && (_cd89175f9633.args[0] = (0, _eced61b9ace5.Oy)(_cd89175f9633.args[0], _564d09f0fe7a.meta));
          }
        }), _564d09f0fe7a.Proxy("Text.prototype.appendData", {
          apply(_cd89175f9633) {
            _cd89175f9633.this.parentElement?.tagName === "STYLE" && (_cd89175f9633.args[0] = (0, 
            _e29815aa94d6.s)(_cd89175f9633.args[0], _564d09f0fe7a.meta));
          }
        }), _564d09f0fe7a.Proxy("Text.prototype.insertData", {
          apply(_cd89175f9633) {
            _cd89175f9633.this.parentElement?.tagName === "STYLE" && (_cd89175f9633.args[1] = (0, 
            _e29815aa94d6.s)(_cd89175f9633.args[1], _564d09f0fe7a.meta));
          }
        }), _564d09f0fe7a.Proxy("Text.prototype.replaceData", {
          apply(_cd89175f9633) {
            _cd89175f9633.this.parentElement?.tagName === "STYLE" && (_cd89175f9633.args[2] = (0, 
            _e29815aa94d6.s)(_cd89175f9633.args[2], _564d09f0fe7a.meta));
          }
        }), _564d09f0fe7a.Trap("Text.prototype.wholeText", {
          get: _564d09f0fe7a => _564d09f0fe7a.this.parentElement?.tagName === "STYLE" ? (0, 
          _e29815aa94d6.f)(_564d09f0fe7a.get()) : _564d09f0fe7a.get(),
          set: (_cd89175f9633, _91a2259ffea9) => _cd89175f9633.this.parentElement?.tagName === "STYLE" ? _cd89175f9633.set((0, 
          _e29815aa94d6.s)(_91a2259ffea9, _564d09f0fe7a.meta)) : _cd89175f9633.set(_91a2259ffea9)
        }), _564d09f0fe7a.Trap([ "HTMLIFrameElement.prototype.contentWindow", "HTMLFrameElement.prototype.contentWindow", "HTMLObjectElement.prototype.contentWindow", "HTMLEmbedElement.prototype.contentWindow" ], {
          get(_564d09f0fe7a) {
            let _cd89175f9633 = _564d09f0fe7a.get();
            return _cd89175f9633 && (_775f64df6c74.pX in _cd89175f9633 || new _90a7406a509b.StudyJetClient(_cd89175f9633).hook()), 
            _cd89175f9633;
          }
        }), _564d09f0fe7a.Trap([ "HTMLIFrameElement.prototype.contentDocument", "HTMLFrameElement.prototype.contentDocument", "HTMLObjectElement.prototype.contentDocument", "HTMLEmbedElement.prototype.contentDocument" ], {
          get(_cd89175f9633) {
            let _91a2259ffea9 = _564d09f0fe7a.descriptors.get(`${_cd89175f9633.this.constructor.name}.prototype.contentWindow`, _cd89175f9633.this);
            return _91a2259ffea9 ? (_775f64df6c74.pX in _91a2259ffea9 || new _90a7406a509b.StudyJetClient(_91a2259ffea9).hook(), 
            _91a2259ffea9.document) : _91a2259ffea9;
          }
        }), _564d09f0fe7a.Proxy([ "HTMLIFrameElement.prototype.getSVGDocument", "HTMLObjectElement.prototype.getSVGDocument", "HTMLEmbedElement.prototype.getSVGDocument" ], {
          apply(_564d09f0fe7a) {
            if (_564d09f0fe7a.call()) return _564d09f0fe7a.return(_564d09f0fe7a.this.contentDocument);
          }
        }), _564d09f0fe7a.Proxy("DOMParser.prototype.parseFromString", {
          apply(_cd89175f9633) {
            if ("text/html" === _cd89175f9633.args[1]) try {
              _cd89175f9633.args[0] = (0, _d879eb489a78.Qs)(_cd89175f9633.args[0], _564d09f0fe7a.cookieStore, _564d09f0fe7a.meta, !1);
            } catch {}
          }
        });
      }
    },
    5426: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        default: () => i
      });
      var _bed23b1c4e71 = _91a2259ffea9(2614);
      function i(_564d09f0fe7a, _cd89175f9633) {
        _564d09f0fe7a.Proxy("FontFace", {
          construct(_cd89175f9633) {
            _cd89175f9633.args[1] = (0, _bed23b1c4e71.s)(_cd89175f9633.args[1], _564d09f0fe7a.meta);
          }
        });
      }
    },
    5465: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        default: () => i
      });
      var _bed23b1c4e71 = _91a2259ffea9(884);
      function i(_564d09f0fe7a, _cd89175f9633) {
        _564d09f0fe7a.Proxy("Range.prototype.createContextualFragment", {
          apply(_cd89175f9633) {
            _cd89175f9633.args[0] = (0, _bed23b1c4e71.Qs)(_cd89175f9633.args[0], _564d09f0fe7a.cookieStore, _564d09f0fe7a.meta);
          }
        });
      }
    },
    9804: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        default: () => s
      });
      var _bed23b1c4e71 = _91a2259ffea9(1472), _e29815aa94d6 = _91a2259ffea9(1862), _d879eb489a78 = _91a2259ffea9(2794);
      function s(_564d09f0fe7a, _cd89175f9633) {
        _564d09f0fe7a.Proxy([ "History.prototype.pushState", "History.prototype.replaceState" ], {
          apply(_cd89175f9633) {
            (_cd89175f9633.args[2] || "" === _cd89175f9633.args[2]) && (_cd89175f9633.args[2] = (0, 
            _bed23b1c4e71.Oy)(_cd89175f9633.args[2], _564d09f0fe7a.meta)), _cd89175f9633.call();
            let {constructor: {constructor: _91a2259ffea9}} = _cd89175f9633.this, _d75b4034184e = _91a2259ffea9("return globalThis")(), _eced61b9ace5 = _d75b4034184e[_d879eb489a78.pX];
            if (_d75b4034184e.name === _564d09f0fe7a.meta.topFrameName) {
              let _cd89175f9633 = new _e29815aa94d6.UrlChangeEvent(_eced61b9ace5.url.href);
              _564d09f0fe7a.frame?.dispatchEvent(_cd89175f9633);
            }
          }
        });
      }
    },
    7758: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        default: () => s
      });
      var _bed23b1c4e71 = _91a2259ffea9(3255), _e29815aa94d6 = _91a2259ffea9(2794), _d879eb489a78 = _91a2259ffea9(1472);
      function s(_564d09f0fe7a) {
        _564d09f0fe7a.Proxy("window.open", {
          apply(_cd89175f9633) {
            _cd89175f9633.args[0] && (_cd89175f9633.args[0] = (0, _d879eb489a78.Oy)(_cd89175f9633.args[0], _564d09f0fe7a.meta)), 
            ("_top" === _cd89175f9633.args[1] || "_unfencedTop" === _cd89175f9633.args[1]) && (_cd89175f9633.args[1] = _564d09f0fe7a.meta.topFrameName), 
            "_parent" === _cd89175f9633.args[1] && (_cd89175f9633.args[1] = _564d09f0fe7a.meta.parentFrameName);
            let _91a2259ffea9 = _cd89175f9633.call();
            if (!_91a2259ffea9) return _cd89175f9633.return(_91a2259ffea9);
            if (_e29815aa94d6.pX in _91a2259ffea9) return _cd89175f9633.return(_91a2259ffea9[_e29815aa94d6.pX].global);
            {
              let _564d09f0fe7a = new _bed23b1c4e71.StudyJetClient(_91a2259ffea9);
              return _564d09f0fe7a.hook(), _cd89175f9633.return(_564d09f0fe7a.global);
            }
          }
        }), _564d09f0fe7a.Trap("window.frameElement", {
          get(_564d09f0fe7a) {
            let _cd89175f9633 = _564d09f0fe7a.get();
            return _cd89175f9633 ? _cd89175f9633.ownerDocument.defaultView[_e29815aa94d6.pX] ? _cd89175f9633 : null : _cd89175f9633;
          }
        });
      }
    },
    6012: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      function n(_564d09f0fe7a, _cd89175f9633) {
        _564d09f0fe7a.Trap("origin", {
          get: () => _564d09f0fe7a.url.origin,
          set: () => !1
        }), _564d09f0fe7a.Trap("Document.prototype.URL", {
          get: () => _564d09f0fe7a.url.href,
          set: () => !1
        }), _564d09f0fe7a.Trap("Document.prototype.documentURI", {
          get: () => _564d09f0fe7a.url.href,
          set: () => !1
        }), _564d09f0fe7a.Trap("Document.prototype.domain", {
          get: () => _564d09f0fe7a.url.hostname,
          set: () => !1
        });
      }
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        default: () => n
      });
    },
    6286: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        default: () => a
      });
      var _bed23b1c4e71 = _91a2259ffea9(1472), _e29815aa94d6 = _91a2259ffea9(37);
      function a(_564d09f0fe7a, _cd89175f9633) {
        _564d09f0fe7a.Trap("PerformanceEntry.prototype.name", {
          get(_564d09f0fe7a) {
            let _cd89175f9633 = _564d09f0fe7a.get();
            return _cd89175f9633 && _cd89175f9633.startsWith(location.origin + _e29815aa94d6.$W.prefix) ? (0, 
            _bed23b1c4e71.v2)(_cd89175f9633) : _cd89175f9633;
          }
        }), _564d09f0fe7a.Proxy([ "Performance.prototype.getEntries", "Performance.prototype.getEntriesByType", "Performance.prototype.getEntriesByName", "PerformanceObserverEntryList.prototype.getEntries", "PerformanceObserverEntryList.prototype.getEntriesByType", "PerformanceObserverEntryList.prototype.getEntriesByName" ], {
          apply(_564d09f0fe7a) {
            let _cd89175f9633 = _564d09f0fe7a.call();
            return _564d09f0fe7a.return(_cd89175f9633.filter(_564d09f0fe7a => {
              for (let _cd89175f9633 of Object.values(_e29815aa94d6.$W.files)) if (_564d09f0fe7a.name.startsWith(location.origin + _cd89175f9633)) return !1;
              return !0;
            }));
          }
        });
      }
    },
    1974: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        default: () => i
      });
      var _bed23b1c4e71 = _91a2259ffea9(1472);
      function i(_564d09f0fe7a, _cd89175f9633) {
        _564d09f0fe7a.Proxy("Navigator.prototype.registerProtocolHandler", {
          apply(_cd89175f9633) {
            _cd89175f9633.args[1] = (0, _bed23b1c4e71.Oy)(_cd89175f9633.args[1], _564d09f0fe7a.meta);
          }
        }), _564d09f0fe7a.Proxy("Navigator.prototype.unregisterProtocolHandler", {
          apply(_cd89175f9633) {
            _cd89175f9633.args[1] = (0, _bed23b1c4e71.Oy)(_cd89175f9633.args[1], _564d09f0fe7a.meta);
          }
        });
      }
    },
    9201: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        default: () => l,
        disabled: () => o,
        enabled: () => s,
        order: () => _d879eb489a78
      });
      var _bed23b1c4e71 = _91a2259ffea9(37), _e29815aa94d6 = _91a2259ffea9(1472);
      let _d879eb489a78 = 2, s = _564d09f0fe7a => (0, _bed23b1c4e71.U5)("serviceworkers", _564d09f0fe7a.url);
      function o(_564d09f0fe7a, _cd89175f9633) {
        Reflect.deleteProperty(Navigator.prototype, "serviceWorker");
      }
      function l(_564d09f0fe7a, _cd89175f9633) {
        let _91a2259ffea9 = new WeakMap;
        _564d09f0fe7a.Proxy("EventTarget.prototype.addEventListener", {
          apply(_564d09f0fe7a) {
            _91a2259ffea9.get(_564d09f0fe7a.this) && _564d09f0fe7a.return(void 0);
          }
        }), _564d09f0fe7a.Proxy("EventTarget.prototype.removeEventListener", {
          apply(_564d09f0fe7a) {
            _91a2259ffea9.get(_564d09f0fe7a.this) && _564d09f0fe7a.return(void 0);
          }
        }), _564d09f0fe7a.Proxy("ServiceWorkerContainer.prototype.getRegistration", {
          apply(_564d09f0fe7a) {
            _564d09f0fe7a.return(new Promise(_564d09f0fe7a => _564d09f0fe7a(registration)));
          }
        }), _564d09f0fe7a.Proxy("ServiceWorkerContainer.prototype.getRegistrations", {
          apply(_564d09f0fe7a) {
            _564d09f0fe7a.return(new Promise(_564d09f0fe7a => _564d09f0fe7a([ registration ])));
          }
        }), _564d09f0fe7a.Trap("ServiceWorkerContainer.prototype.ready", {
          get: _564d09f0fe7a => new Promise(_564d09f0fe7a => _564d09f0fe7a(registration))
        }), _564d09f0fe7a.Trap("ServiceWorkerContainer.prototype.controller", {
          get: _564d09f0fe7a => registration?.active
        }), _564d09f0fe7a.Proxy("ServiceWorkerContainer.prototype.register", {
          apply(_cd89175f9633) {
            let _bed23b1c4e71 = new EventTarget;
            Object.setPrototypeOf(_bed23b1c4e71, self.ServiceWorkerRegistration.prototype), 
            _bed23b1c4e71.constructor = _cd89175f9633.fn;
            let _d879eb489a78 = (0, _e29815aa94d6.Oy)(_cd89175f9633.args[0], _564d09f0fe7a.meta) + "?dest=serviceworker";
            _cd89175f9633.args[1] && "module" === _cd89175f9633.args[1].type && (_d879eb489a78 += "&type=module");
            let _d75b4034184e = _564d09f0fe7a.natives.construct("SharedWorker", _d879eb489a78).port, _eced61b9ace5 = {
              scope: _cd89175f9633.args[0],
              active: _d75b4034184e
            }, _775f64df6c74 = _564d09f0fe7a.descriptors.get("ServiceWorkerContainer.prototype.controller", _564d09f0fe7a.serviceWorker);
            _564d09f0fe7a.natives.call("ServiceWorker.prototype.postMessage", _775f64df6c74, {
              studyjet$type: "registerServiceWorker",
              port: _d75b4034184e,
              origin: _564d09f0fe7a.url.origin
            }, [ _d75b4034184e ]), _91a2259ffea9.set(_bed23b1c4e71, _eced61b9ace5), _cd89175f9633.return(new Promise(_564d09f0fe7a => _564d09f0fe7a(_bed23b1c4e71)));
          }
        });
      }
    },
    5289: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      function n(_564d09f0fe7a, _cd89175f9633) {
        let _91a2259ffea9 = {
          get(_cd89175f9633, _91a2259ffea9) {
            switch (_91a2259ffea9) {
             case "getItem":
              return _91a2259ffea9 => _cd89175f9633.getItem(_564d09f0fe7a.url.host + "@" + _91a2259ffea9);

             case "setItem":
              return (_91a2259ffea9, _bed23b1c4e71) => _cd89175f9633.setItem(_564d09f0fe7a.url.host + "@" + _91a2259ffea9, _bed23b1c4e71);

             case "removeItem":
              return _91a2259ffea9 => _cd89175f9633.removeItem(_564d09f0fe7a.url.host + "@" + _91a2259ffea9);

             case "clear":
              return () => {
                for (let _91a2259ffea9 in Object.keys(_cd89175f9633)) _91a2259ffea9.startsWith(_564d09f0fe7a.url.host) && _cd89175f9633.removeItem(_91a2259ffea9);
              };

             case "key":
              return _91a2259ffea9 => {
                let _bed23b1c4e71 = Object.keys(_cd89175f9633).filter(_cd89175f9633 => _cd89175f9633.startsWith(_564d09f0fe7a.url.host));
                return _cd89175f9633.getItem(_bed23b1c4e71[_91a2259ffea9]);
              };

             case "length":
              return Object.keys(_cd89175f9633).filter(_cd89175f9633 => _cd89175f9633.startsWith(_564d09f0fe7a.url.host)).length;

             default:
              if (_91a2259ffea9 in Object.prototype || "symbol" == typeof _91a2259ffea9) return Reflect.get(_cd89175f9633, _91a2259ffea9);
              return _cd89175f9633.getItem(_564d09f0fe7a.url.host + "@" + _91a2259ffea9);
            }
          },
          set: (_cd89175f9633, _91a2259ffea9, _bed23b1c4e71) => (_cd89175f9633.setItem(_564d09f0fe7a.url.host + "@" + _91a2259ffea9, _bed23b1c4e71), 
          !0),
          ownKeys: _cd89175f9633 => Reflect.ownKeys(_cd89175f9633).filter(_cd89175f9633 => "string" == typeof _cd89175f9633 && _cd89175f9633.startsWith(_564d09f0fe7a.url.host)).map(_cd89175f9633 => "string" == typeof _cd89175f9633 ? _cd89175f9633.substring(_564d09f0fe7a.url.host.length + 1) : _cd89175f9633),
          getOwnPropertyDescriptor: (_cd89175f9633, _91a2259ffea9) => ({
            value: _cd89175f9633.getItem(_564d09f0fe7a.url.host + "@" + _91a2259ffea9),
            enumerable: !0,
            configurable: !0,
            writable: !0
          }),
          defineProperty: (_cd89175f9633, _91a2259ffea9, _bed23b1c4e71) => (_cd89175f9633.setItem(_564d09f0fe7a.url.host + "@" + _91a2259ffea9, _bed23b1c4e71.value), 
          !0)
        };
        _cd89175f9633.localStorage;
        let _bed23b1c4e71 = new Proxy(_cd89175f9633.localStorage, _91a2259ffea9), _e29815aa94d6 = new Proxy(_cd89175f9633.sessionStorage, _91a2259ffea9);
        delete _cd89175f9633.localStorage, delete _cd89175f9633.sessionStorage, _cd89175f9633.localStorage = _bed23b1c4e71, 
        _cd89175f9633.sessionStorage = _e29815aa94d6;
      }
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        default: () => n
      });
    },
    1323: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        isdedicated: () => _5452948ead4c,
        isemulatedsw: () => _45080c7acefd,
        isshared: () => _5695a624e761,
        issw: () => _bad94b9ba2d5,
        iswindow: () => _90a7406a509b,
        isworker: () => _029290fe381e,
        loadAndHook: () => g
      });
      var _bed23b1c4e71 = _91a2259ffea9(37), _e29815aa94d6 = _91a2259ffea9(2794), _d879eb489a78 = _91a2259ffea9(3255), _d75b4034184e = _91a2259ffea9(1862), _eced61b9ace5 = _91a2259ffea9(8409), _775f64df6c74 = _91a2259ffea9(8665).A;
      let _90a7406a509b = "window" in globalThis && window instanceof Window, _029290fe381e = "WorkerGlobalScope" in globalThis, _bad94b9ba2d5 = "ServiceWorkerGlobalScope" in globalThis, _5452948ead4c = "DedicatedWorkerGlobalScope" in globalThis, _5695a624e761 = "SharedWorkerGlobalScope" in globalThis, _45080c7acefd = "location" in globalThis && "serviceworker" === new URL(globalThis.location.href).searchParams.get("dest");
      function g(_564d09f0fe7a) {
        if ((0, _bed23b1c4e71.Nk)(_564d09f0fe7a), _775f64df6c74.log("initializing studyjet client"), 
        !(_e29815aa94d6.pX in globalThis)) {
          (0, _bed23b1c4e71.Ec)();
          let _564d09f0fe7a = new _d879eb489a78.StudyJetClient(globalThis), _cd89175f9633 = globalThis.frameElement;
          _cd89175f9633 && !_cd89175f9633.name && (_cd89175f9633.name = `${Array(8).fill(0).map(() => Math.floor(36 * Math.random()).toString(36)).join("")}`), 
          globalThis.COOKIE && _564d09f0fe7a.loadcookies(globalThis.COOKIE), _564d09f0fe7a.hook(), 
          _45080c7acefd && new _eced61b9ace5.StudyJetServiceWorkerRuntime(_564d09f0fe7a).hook();
          let _91a2259ffea9 = new _d75b4034184e.StudyJetContextEvent(_564d09f0fe7a.global.window, _564d09f0fe7a);
          _564d09f0fe7a.frame?.dispatchEvent(_91a2259ffea9);
          let _e29815aa94d6 = new _d75b4034184e.UrlChangeEvent(_564d09f0fe7a.url.href);
          _564d09f0fe7a.isSubframe || _564d09f0fe7a.frame?.dispatchEvent(_e29815aa94d6);
        }
        Reflect.deleteProperty(globalThis, "WASM"), Reflect.deleteProperty(globalThis, "COOKIE");
      }
    },
    1862: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        NavigateEvent: () => i,
        StudyJetContextEvent: () => s,
        StudyJetGlobalDownloadEvent: () => n,
        UrlChangeEvent: () => a
      });
      class n extends Event {
        download;
        type="download";
        constructor(_564d09f0fe7a) {
          super("download"), this.download = _564d09f0fe7a;
        }
      }
      class i extends Event {
        url;
        type="navigate";
        constructor(_564d09f0fe7a) {
          super("navigate"), this.url = _564d09f0fe7a;
        }
      }
      class a extends Event {
        url;
        type="urlchange";
        constructor(_564d09f0fe7a) {
          super("urlchange"), this.url = _564d09f0fe7a;
        }
      }
      class s extends Event {
        window;
        client;
        type="contextInit";
        constructor(_564d09f0fe7a, _cd89175f9633) {
          super("contextInit"), this.window = _564d09f0fe7a, this.client = _cd89175f9633;
        }
      }
    },
    94: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      function n(_564d09f0fe7a, _cd89175f9633) {
        return Reflect.getOwnPropertyDescriptor(_564d09f0fe7a, _cd89175f9633);
      }
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        getOwnPropertyDescriptorHandler: () => n
      });
    },
    3255: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        NavigateEvent: () => _d879eb489a78.NavigateEvent,
        StudyJetClient: () => _bed23b1c4e71.StudyJetClient,
        StudyJetContextEvent: () => _d879eb489a78.StudyJetContextEvent,
        StudyJetGlobalDownloadEvent: () => _d879eb489a78.StudyJetGlobalDownloadEvent,
        StudyJetServiceWorkerRuntime: () => _775f64df6c74.StudyJetServiceWorkerRuntime,
        UrlChangeEvent: () => _d879eb489a78.UrlChangeEvent,
        createLocationProxy: () => _eced61b9ace5.createLocationProxy,
        getOwnPropertyDescriptorHandler: () => _d75b4034184e.getOwnPropertyDescriptorHandler,
        isdedicated: () => _e29815aa94d6.isdedicated,
        isemulatedsw: () => _e29815aa94d6.isemulatedsw,
        isshared: () => _e29815aa94d6.isshared,
        issw: () => _e29815aa94d6.issw,
        iswindow: () => _e29815aa94d6.iswindow,
        isworker: () => _e29815aa94d6.isworker,
        loadAndHook: () => _e29815aa94d6.loadAndHook
      });
      var _bed23b1c4e71 = _91a2259ffea9(336), _e29815aa94d6 = _91a2259ffea9(1323), _d879eb489a78 = _91a2259ffea9(1862), _d75b4034184e = _91a2259ffea9(94), _eced61b9ace5 = _91a2259ffea9(3696), _775f64df6c74 = _91a2259ffea9(8409);
      _91a2259ffea9(3255);
    },
    3696: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        createLocationProxy: () => s
      });
      var _bed23b1c4e71 = _91a2259ffea9(1862), _e29815aa94d6 = _91a2259ffea9(1472), _d879eb489a78 = _91a2259ffea9(1323);
      function s(_564d09f0fe7a, _cd89175f9633) {
        let _91a2259ffea9 = _d879eb489a78.iswindow ? _cd89175f9633.Location : _cd89175f9633.WorkerLocation, _d75b4034184e = {};
        Object.setPrototypeOf(_d75b4034184e, _91a2259ffea9.prototype), _d75b4034184e.constructor = _91a2259ffea9;
        let _eced61b9ace5 = _d879eb489a78.iswindow ? _cd89175f9633.location : _91a2259ffea9.prototype;
        for (let _91a2259ffea9 of [ "protocol", "hash", "host", "hostname", "href", "origin", "pathname", "port", "search" ]) {
          let _e29815aa94d6 = _564d09f0fe7a.natives.call("Object.getOwnPropertyDescriptor", null, _eced61b9ace5, _91a2259ffea9);
          if (!_e29815aa94d6) continue;
          let _d879eb489a78 = {
            configurable: !1,
            enumerable: !0
          };
          _e29815aa94d6.get && (_d879eb489a78.get = new Proxy(_e29815aa94d6.get, {
            apply: () => _564d09f0fe7a.url[_91a2259ffea9]
          })), _e29815aa94d6.set && (_d879eb489a78.set = new Proxy(_e29815aa94d6.set, {
            apply(_e29815aa94d6, _d879eb489a78, _d75b4034184e) {
              if ("href" === _91a2259ffea9) {
                _564d09f0fe7a.url = _d75b4034184e[0];
                return;
              }
              if ("hash" === _91a2259ffea9) {
                _cd89175f9633.location.hash = _d75b4034184e[0];
                let _91a2259ffea9 = new _bed23b1c4e71.UrlChangeEvent(_564d09f0fe7a.url.href);
                _564d09f0fe7a.isSubframe || _564d09f0fe7a.frame?.dispatchEvent(_91a2259ffea9);
                return;
              }
              let _eced61b9ace5 = new URL(_564d09f0fe7a.url.href);
              _eced61b9ace5[_91a2259ffea9] = _d75b4034184e[0], _564d09f0fe7a.url = _eced61b9ace5;
            }
          })), Object.defineProperty(_d75b4034184e, _91a2259ffea9, _d879eb489a78);
        }
        return _d75b4034184e.toString = new Proxy(_cd89175f9633.location.toString, {
          apply: () => _564d09f0fe7a.url.href
        }), _cd89175f9633.location.valueOf && (_d75b4034184e.valueOf = new Proxy(_cd89175f9633.location.valueOf, {
          apply: () => _564d09f0fe7a.url.href
        })), _cd89175f9633.location.assign && (_d75b4034184e.assign = new Proxy(_cd89175f9633.location.assign, {
          apply(_91a2259ffea9, _d879eb489a78, _d75b4034184e) {
            _d75b4034184e[0] = (0, _e29815aa94d6.Oy)(_d75b4034184e[0], _564d09f0fe7a.meta), 
            Reflect.apply(_91a2259ffea9, _cd89175f9633.location, _d75b4034184e);
            let _eced61b9ace5 = new _bed23b1c4e71.UrlChangeEvent(_564d09f0fe7a.url.href);
            _564d09f0fe7a.isSubframe || _564d09f0fe7a.frame?.dispatchEvent(_eced61b9ace5);
          }
        })), _cd89175f9633.location.reload && (_d75b4034184e.reload = new Proxy(_cd89175f9633.location.reload, {
          apply(_564d09f0fe7a, _91a2259ffea9, _bed23b1c4e71) {
            Reflect.apply(_564d09f0fe7a, _cd89175f9633.location, _bed23b1c4e71);
          }
        })), _cd89175f9633.location.replace && (_d75b4034184e.replace = new Proxy(_cd89175f9633.location.replace, {
          apply(_91a2259ffea9, _d879eb489a78, _d75b4034184e) {
            _d75b4034184e[0] = (0, _e29815aa94d6.Oy)(_d75b4034184e[0], _564d09f0fe7a.meta), 
            Reflect.apply(_91a2259ffea9, _cd89175f9633.location, _d75b4034184e);
            let _eced61b9ace5 = new _bed23b1c4e71.UrlChangeEvent(_564d09f0fe7a.url.href);
            _564d09f0fe7a.isSubframe || _564d09f0fe7a.frame?.dispatchEvent(_eced61b9ace5);
          }
        })), _d75b4034184e;
      }
    },
    8382: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      function n(_564d09f0fe7a) {
        _564d09f0fe7a.Proxy("console.clear", {
          apply(_564d09f0fe7a) {
            _564d09f0fe7a.return(void 0);
          }
        });
        let _cd89175f9633 = console.log;
        _564d09f0fe7a.Trap("console.log", {
          set(_564d09f0fe7a, _cd89175f9633) {},
          get: _564d09f0fe7a => _cd89175f9633
        });
      }
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        default: () => n
      });
    },
    4634: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        default: () => i
      });
      var _bed23b1c4e71 = _91a2259ffea9(1472);
      function i(_564d09f0fe7a) {
        _564d09f0fe7a.Proxy("URL.createObjectURL", {
          apply(_cd89175f9633) {
            let _91a2259ffea9 = _cd89175f9633.call();
            _91a2259ffea9.startsWith("blob:") ? _cd89175f9633.return((0, _bed23b1c4e71.IP)(_91a2259ffea9, _564d09f0fe7a.meta)) : _cd89175f9633.return(_91a2259ffea9);
          }
        }), _564d09f0fe7a.Proxy("URL.revokeObjectURL", {
          apply(_564d09f0fe7a) {
            _564d09f0fe7a.args[0] = (0, _bed23b1c4e71.$n)(_564d09f0fe7a.args[0]);
          }
        });
      }
    },
    5026: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        default: () => i
      });
      var _bed23b1c4e71 = _91a2259ffea9(1472);
      function i(_564d09f0fe7a, _cd89175f9633) {
        _564d09f0fe7a.Proxy("CacheStorage.prototype.open", {
          apply(_cd89175f9633) {
            _cd89175f9633.args[0] = `${_564d09f0fe7a.url.origin}@${_cd89175f9633.args[0]}`;
          }
        }), _564d09f0fe7a.Proxy("CacheStorage.prototype.has", {
          apply(_cd89175f9633) {
            _cd89175f9633.args[0] = `${_564d09f0fe7a.url.origin}@${_cd89175f9633.args[0]}`;
          }
        }), _564d09f0fe7a.Proxy("CacheStorage.prototype.match", {
          apply(_cd89175f9633) {
            ("string" == typeof _cd89175f9633.args[0] || _cd89175f9633.args[0] instanceof URL) && (_cd89175f9633.args[0] = (0, 
            _bed23b1c4e71.Oy)(_cd89175f9633.args[0], _564d09f0fe7a.meta));
          }
        }), _564d09f0fe7a.Proxy("CacheStorage.prototype.delete", {
          apply(_cd89175f9633) {
            _cd89175f9633.args[0] = `${_564d09f0fe7a.url.origin}@${_cd89175f9633.args[0]}`;
          }
        }), _564d09f0fe7a.Proxy("Cache.prototype.add", {
          apply(_cd89175f9633) {
            ("string" == typeof _cd89175f9633.args[0] || _cd89175f9633.args[0] instanceof URL) && (_cd89175f9633.args[0] = (0, 
            _bed23b1c4e71.Oy)(_cd89175f9633.args[0], _564d09f0fe7a.meta));
          }
        }), _564d09f0fe7a.Proxy("Cache.prototype.addAll", {
          apply(_cd89175f9633) {
            for (let _91a2259ffea9 = 0; _91a2259ffea9 < _cd89175f9633.args[0].length; _91a2259ffea9++) ("string" == typeof _cd89175f9633.args[0][_91a2259ffea9] || _cd89175f9633.args[0][_91a2259ffea9] instanceof URL) && (_cd89175f9633.args[0][_91a2259ffea9] = (0, 
            _bed23b1c4e71.Oy)(_cd89175f9633.args[0][_91a2259ffea9], _564d09f0fe7a.meta));
          }
        }), _564d09f0fe7a.Proxy("Cache.prototype.put", {
          apply(_cd89175f9633) {
            ("string" == typeof _cd89175f9633.args[0] || _cd89175f9633.args[0] instanceof URL) && (_cd89175f9633.args[0] = (0, 
            _bed23b1c4e71.Oy)(_cd89175f9633.args[0], _564d09f0fe7a.meta));
          }
        }), _564d09f0fe7a.Proxy("Cache.prototype.match", {
          apply(_cd89175f9633) {
            ("string" == typeof _cd89175f9633.args[0] || _cd89175f9633.args[0] instanceof URL) && (_cd89175f9633.args[0] = (0, 
            _bed23b1c4e71.Oy)(_cd89175f9633.args[0], _564d09f0fe7a.meta));
          }
        }), _564d09f0fe7a.Proxy("Cache.prototype.matchAll", {
          apply(_cd89175f9633) {
            (_cd89175f9633.args[0] && "string" == typeof _cd89175f9633.args[0] || _cd89175f9633.args[0] && _cd89175f9633.args[0] instanceof URL) && (_cd89175f9633.args[0] = (0, 
            _bed23b1c4e71.Oy)(_cd89175f9633.args[0], _564d09f0fe7a.meta));
          }
        }), _564d09f0fe7a.Proxy("Cache.prototype.keys", {
          apply(_cd89175f9633) {
            (_cd89175f9633.args[0] && "string" == typeof _cd89175f9633.args[0] || _cd89175f9633.args[0] && _cd89175f9633.args[0] instanceof URL) && (_cd89175f9633.args[0] = (0, 
            _bed23b1c4e71.Oy)(_cd89175f9633.args[0], _564d09f0fe7a.meta));
          }
        }), _564d09f0fe7a.Proxy("Cache.prototype.delete", {
          apply(_cd89175f9633) {
            ("string" == typeof _cd89175f9633.args[0] || _cd89175f9633.args[0] instanceof URL) && (_cd89175f9633.args[0] = (0, 
            _bed23b1c4e71.Oy)(_cd89175f9633.args[0], _564d09f0fe7a.meta));
          }
        });
      }
    },
    6627: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        default: () => i
      });
      var _bed23b1c4e71 = _91a2259ffea9(1323);
      function i(_564d09f0fe7a, _cd89175f9633) {
        let r = _564d09f0fe7a => {
          let _91a2259ffea9 = _564d09f0fe7a.split("."), _bed23b1c4e71 = _91a2259ffea9.pop(), _e29815aa94d6 = _91a2259ffea9.reduce((_564d09f0fe7a, _cd89175f9633) => _564d09f0fe7a?.[_cd89175f9633], _cd89175f9633);
          _e29815aa94d6 && _bed23b1c4e71 && _bed23b1c4e71 in _e29815aa94d6 && delete _e29815aa94d6[_bed23b1c4e71];
        };
        r("BarcodeDetector"), r("FaceDetector"), r("TextDetector"), _bed23b1c4e71.iswindow && r("ServiceWorkerRegistration.prototype.sync"), 
        _bed23b1c4e71.isemulatedsw && (r("SyncManager"), r("SyncEvent")), r("TrustedHTML"), 
        r("TrustedScript"), r("TrustedScriptURL"), r("TrustedTypePolicy"), r("TrustedTypePolicyFactory"), 
        _cd89175f9633.__defineGetter__("trustedTypes", () => void 0), r("Navigator.prototype.joinAdInterestGroup"), 
        _bed23b1c4e71.iswindow && (r("MediaDevices.prototype.setCaptureHandleConfig"), r("Navigator.prototype.bluetooth"), 
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
    582: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        argdbg: () => a,
        default: () => s,
        enabled: () => i
      });
      var _bed23b1c4e71 = _91a2259ffea9(37);
      let i = _564d09f0fe7a => (0, _bed23b1c4e71.U5)("captureErrors", _564d09f0fe7a.url);
      function a(_564d09f0fe7a, _cd89175f9633 = []) {
        switch (typeof _564d09f0fe7a) {
         case "string":
          break;

         case "object":
          if (_564d09f0fe7a && _564d09f0fe7a[Symbol.iterator] && "function" == typeof _564d09f0fe7a[Symbol.iterator]) for (let _91a2259ffea9 in _564d09f0fe7a) {
            let _bed23b1c4e71 = Object.getOwnPropertyDescriptor(_564d09f0fe7a, _91a2259ffea9);
            if (_bed23b1c4e71 && _bed23b1c4e71.get) continue;
            let _e29815aa94d6 = _564d09f0fe7a[_91a2259ffea9];
            _cd89175f9633.includes(_e29815aa94d6) || (_cd89175f9633.push(_e29815aa94d6), a(_e29815aa94d6, _cd89175f9633));
          }
        }
      }
      function s(_564d09f0fe7a, _cd89175f9633) {
        let _91a2259ffea9 = console.warn;
        _cd89175f9633.$scramerr = function(_564d09f0fe7a) {
          _91a2259ffea9("CAUGHT ERROR", _564d09f0fe7a);
        }, _cd89175f9633.$scramdbg = function(_564d09f0fe7a, _cd89175f9633) {
          return _564d09f0fe7a && "object" == typeof _564d09f0fe7a && _564d09f0fe7a.length > 0 && a(_564d09f0fe7a), 
          a(_cd89175f9633), _cd89175f9633;
        }, _564d09f0fe7a.Proxy("Promise.prototype.catch", {
          apply(_564d09f0fe7a) {
            _564d09f0fe7a.args[0] && (_564d09f0fe7a.args[0] = new Proxy(_564d09f0fe7a.args[0], {
              apply(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
                Reflect.apply(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9);
              }
            }));
          }
        });
      }
    },
    6143: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        default: () => s,
        enabled: () => a
      });
      var _bed23b1c4e71 = _91a2259ffea9(37), _e29815aa94d6 = _91a2259ffea9(1472);
      let a = _564d09f0fe7a => (0, _bed23b1c4e71.U5)("cleanErrors", _564d09f0fe7a.url);
      function s(_564d09f0fe7a, _cd89175f9633) {
        let r = (_564d09f0fe7a, _cd89175f9633) => {
          let _91a2259ffea9 = _564d09f0fe7a.stack;
          for (let _564d09f0fe7a = 0; _564d09f0fe7a < _cd89175f9633.length; _564d09f0fe7a++) {
            let _d879eb489a78 = _cd89175f9633[_564d09f0fe7a].getFileName();
            try {
              if (_d879eb489a78.endsWith(_bed23b1c4e71.$W.files.all)) {
                let _564d09f0fe7a = _91a2259ffea9.split("\n"), _cd89175f9633 = _564d09f0fe7a.find(_564d09f0fe7a => _564d09f0fe7a.includes(_d879eb489a78));
                _564d09f0fe7a.splice(_cd89175f9633, 1), _91a2259ffea9 = _564d09f0fe7a.join("\n");
                continue;
              }
            } catch {}
            try {
              _91a2259ffea9 = _91a2259ffea9.replaceAll(_d879eb489a78, (0, _e29815aa94d6.v2)(_d879eb489a78));
            } catch {}
          }
          return _91a2259ffea9;
        };
        _564d09f0fe7a.Trap("Error.prepareStackTrace", {
          get: _564d09f0fe7a => r,
          set(_564d09f0fe7a) {}
        });
      }
    },
    591: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        default: () => a,
        indirectEval: () => s
      });
      var _bed23b1c4e71 = _91a2259ffea9(37), _e29815aa94d6 = _91a2259ffea9(1478);
      function a(_564d09f0fe7a, _cd89175f9633) {
        Object.defineProperty(_cd89175f9633, _bed23b1c4e71.$W.globals.rewritefn, {
          value: function(_cd89175f9633) {
            return "string" != typeof _cd89175f9633 ? _cd89175f9633 : (0, _e29815aa94d6.o)(_cd89175f9633, "(direct eval proxy)", _564d09f0fe7a.meta);
          },
          writable: !1,
          configurable: !1
        });
      }
      function s(_564d09f0fe7a, _cd89175f9633) {
        let _91a2259ffea9;
        return "string" != typeof _cd89175f9633 ? _cd89175f9633 : ("accounts.google.com" === this.url.hostname ? (console.log("USING STRICT EVAL - BOTGUARD"), 
        _91a2259ffea9 = Function(`\n\t\t\t"use strict";\n\t\t\treturn eval;\n\t\t`)) : _91a2259ffea9 = this.global.eval, 
        _91a2259ffea9((0, _e29815aa94d6.o)(_cd89175f9633, "(indirect eval proxy)", this.meta)));
      }
    },
    3481: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        default: () => o
      });
      var _bed23b1c4e71 = _91a2259ffea9(1323), _e29815aa94d6 = _91a2259ffea9(1472), _d879eb489a78 = _91a2259ffea9(94);
      let _d75b4034184e = Symbol.for("studyjet original onevent function");
      function o(_564d09f0fe7a, _cd89175f9633) {
        let _91a2259ffea9 = {
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
              return "object" == typeof this.data && "$studyjet$origin" in this.data ? this.data.$studyjet$origin : _564d09f0fe7a.url.origin;
            },
            data() {
              return "object" == typeof this.data && "$studyjet$data" in this.data ? this.data.$studyjet$data : this.data;
            }
          },
          hashchange: {
            oldURL() {
              return (0, _e29815aa94d6.v2)(this.oldURL);
            },
            newURL() {
              return (0, _e29815aa94d6.v2)(this.newURL);
            }
          },
          storage: {
            _init() {
              return this.key.startsWith(_564d09f0fe7a.url.host + "@");
            },
            key() {
              return this.key.substring(this.key.indexOf("@") + 1);
            },
            url() {
              return (0, _e29815aa94d6.v2)(this.url);
            }
          }
        };
        function o(_564d09f0fe7a) {
          return new Proxy(_564d09f0fe7a, {
            apply(_564d09f0fe7a, _bed23b1c4e71, _e29815aa94d6) {
              let _d75b4034184e = _e29815aa94d6[0];
              if (_d75b4034184e.isTrusted) {
                let _564d09f0fe7a = _d75b4034184e.type;
                if (_564d09f0fe7a in _91a2259ffea9) {
                  let _cd89175f9633 = _91a2259ffea9[_564d09f0fe7a];
                  if (_cd89175f9633._init && !1 === _cd89175f9633._init.call(_d75b4034184e)) return;
                  _e29815aa94d6[0] = new Proxy(_d75b4034184e, {
                    get(_564d09f0fe7a, _91a2259ffea9, _bed23b1c4e71) {
                      let _e29815aa94d6 = Reflect.get(_564d09f0fe7a, _91a2259ffea9);
                      return _91a2259ffea9 in _cd89175f9633 ? _cd89175f9633[_91a2259ffea9].call(_564d09f0fe7a) : "function" == typeof _e29815aa94d6 ? new Proxy(_e29815aa94d6, {
                        apply: (_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) => _cd89175f9633 === _bed23b1c4e71 ? Reflect.apply(_564d09f0fe7a, _d75b4034184e, _91a2259ffea9) : Reflect.apply(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9)
                      }) : _e29815aa94d6;
                    },
                    getOwnPropertyDescriptor: _d879eb489a78.getOwnPropertyDescriptorHandler
                  });
                }
              }
              return _cd89175f9633.event || Object.defineProperty(_cd89175f9633, "event", {
                get: () => _e29815aa94d6[0],
                configurable: !0
              }), Reflect.apply(_564d09f0fe7a, _bed23b1c4e71, _e29815aa94d6);
            },
            getOwnPropertyDescriptor: _d879eb489a78.getOwnPropertyDescriptorHandler
          });
        }
        _564d09f0fe7a.Proxy("EventTarget.prototype.addEventListener", {
          apply(_cd89175f9633) {
            if ("function" != typeof _cd89175f9633.args[1]) return;
            let _91a2259ffea9 = _cd89175f9633.args[1], _bed23b1c4e71 = o(_91a2259ffea9);
            _cd89175f9633.args[1] = _bed23b1c4e71;
            let _e29815aa94d6 = _564d09f0fe7a.eventcallbacks.get(_cd89175f9633.this);
            (_e29815aa94d6 ||= []).push({
              event: _cd89175f9633.args[0],
              originalCallback: _91a2259ffea9,
              proxiedCallback: _bed23b1c4e71
            }), _564d09f0fe7a.eventcallbacks.set(_cd89175f9633.this, _e29815aa94d6);
          }
        }), _564d09f0fe7a.Proxy("EventTarget.prototype.removeEventListener", {
          apply(_cd89175f9633) {
            if ("function" != typeof _cd89175f9633.args[1]) return;
            let _91a2259ffea9 = _564d09f0fe7a.eventcallbacks.get(_cd89175f9633.this);
            if (!_91a2259ffea9) return;
            let _bed23b1c4e71 = _91a2259ffea9.findIndex(_564d09f0fe7a => _564d09f0fe7a.event === _cd89175f9633.args[0] && _564d09f0fe7a.originalCallback === _cd89175f9633.args[1]);
            if (-1 === _bed23b1c4e71) return;
            let _e29815aa94d6 = _91a2259ffea9.splice(_bed23b1c4e71, 1);
            _564d09f0fe7a.eventcallbacks.set(_cd89175f9633.this, _91a2259ffea9), _cd89175f9633.args[1] = _e29815aa94d6[0].proxiedCallback;
          }
        });
        let _eced61b9ace5 = [ _cd89175f9633.self, _cd89175f9633.MessagePort.prototype ];
        for (let _e29815aa94d6 of (_bed23b1c4e71.iswindow && _eced61b9ace5.push(_cd89175f9633.HTMLElement.prototype), 
        _cd89175f9633.Worker && _eced61b9ace5.push(_cd89175f9633.Worker.prototype), _eced61b9ace5)) for (let _cd89175f9633 of Reflect.ownKeys(_e29815aa94d6)) if ("string" == typeof _cd89175f9633 && _cd89175f9633.startsWith("on") && _91a2259ffea9[_cd89175f9633.slice(2)]) {
          let _91a2259ffea9 = _564d09f0fe7a.natives.call("Object.getOwnPropertyDescriptor", null, _e29815aa94d6, _cd89175f9633);
          if (!_91a2259ffea9.get || !_91a2259ffea9.set || !_91a2259ffea9.configurable) continue;
          _564d09f0fe7a.RawTrap(_e29815aa94d6, _cd89175f9633, {
            get(_564d09f0fe7a) {
              return this[_d75b4034184e] ? this[_d75b4034184e] : _564d09f0fe7a.get();
            },
            set(_564d09f0fe7a, _cd89175f9633) {
              if (this[_d75b4034184e] = _cd89175f9633, "function" != typeof _cd89175f9633) return _564d09f0fe7a.set(_cd89175f9633);
              _564d09f0fe7a.set(o(_cd89175f9633));
            }
          });
        }
      }
    },
    249: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        default: () => a
      });
      var _bed23b1c4e71 = _91a2259ffea9(1478);
      function i(_564d09f0fe7a, _cd89175f9633) {
        let _91a2259ffea9 = _564d09f0fe7a.call().toString(), _e29815aa94d6 = (0, _bed23b1c4e71.o)(`return ${_91a2259ffea9}`, "(function proxy)", _cd89175f9633.meta);
        _564d09f0fe7a.return(_564d09f0fe7a.fn(_e29815aa94d6)());
      }
      function a(_564d09f0fe7a, _cd89175f9633) {
        let _91a2259ffea9 = {
          apply(_cd89175f9633) {
            i(_cd89175f9633, _564d09f0fe7a);
          },
          construct(_cd89175f9633) {
            i(_cd89175f9633, _564d09f0fe7a);
          }
        };
        _564d09f0fe7a.Proxy("Function", _91a2259ffea9);
        let _bed23b1c4e71 = _564d09f0fe7a.natives.call("eval", null, "(function () {})").constructor, _e29815aa94d6 = _564d09f0fe7a.natives.call("eval", null, "(async function () {})").constructor, _d879eb489a78 = _564d09f0fe7a.natives.call("eval", null, "(function* () {})").constructor, _d75b4034184e = _564d09f0fe7a.natives.call("eval", null, "(async function* () {})").constructor;
        _564d09f0fe7a.RawProxy(_bed23b1c4e71.prototype, "constructor", _91a2259ffea9), _564d09f0fe7a.RawProxy(_e29815aa94d6.prototype, "constructor", _91a2259ffea9), 
        _564d09f0fe7a.RawProxy(_d879eb489a78.prototype, "constructor", _91a2259ffea9), _564d09f0fe7a.RawProxy(_d75b4034184e.prototype, "constructor", _91a2259ffea9);
      }
    },
    2468: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        default: () => a
      });
      var _bed23b1c4e71 = _91a2259ffea9(37), _e29815aa94d6 = _91a2259ffea9(1472);
      function a(_564d09f0fe7a, _cd89175f9633) {
        let _91a2259ffea9 = _564d09f0fe7a.natives.call("Function", null, "url", "return import(url)");
        Object.defineProperty(_cd89175f9633, _bed23b1c4e71.$W.globals.importfn, {
          value: function(_cd89175f9633, _bed23b1c4e71) {
            let _d879eb489a78 = new URL(_bed23b1c4e71, _cd89175f9633).href;
            return _bed23b1c4e71.includes(":") || _bed23b1c4e71.startsWith("/") || _bed23b1c4e71.startsWith(".") || _bed23b1c4e71.startsWith("..") ? _91a2259ffea9(`${(0, 
            _e29815aa94d6.Oy)(_d879eb489a78, _564d09f0fe7a.meta)}?type=module`) : _91a2259ffea9(_bed23b1c4e71);
          },
          writable: !1,
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_cd89175f9633, _bed23b1c4e71.$W.globals.metafn, {
          value: function(_564d09f0fe7a, _cd89175f9633) {
            return _564d09f0fe7a.url = _cd89175f9633, _564d09f0fe7a.resolve = function(_564d09f0fe7a) {
              return new URL(_564d09f0fe7a, _cd89175f9633).href;
            }, _564d09f0fe7a;
          },
          writable: !1,
          configurable: !1,
          enumerable: !1
        });
      }
    },
    4338: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      function n(_564d09f0fe7a) {
        _564d09f0fe7a.Proxy("IDBFactory.prototype.open", {
          apply(_cd89175f9633) {
            _cd89175f9633.args[0] = `${_564d09f0fe7a.url.origin}@${_cd89175f9633.args[0]}`;
          }
        }), _564d09f0fe7a.Trap("IDBDatabase.prototype.name", {
          get(_564d09f0fe7a) {
            let _cd89175f9633 = _564d09f0fe7a.get();
            return _cd89175f9633.substring(_cd89175f9633.indexOf("@") + 1);
          }
        });
      }
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        default: () => n
      });
    },
    6593: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      function n(_564d09f0fe7a) {
        _564d09f0fe7a.Proxy("StorageManager.prototype.getDirectory", {
          apply(_cd89175f9633) {
            let _91a2259ffea9 = _cd89175f9633.call();
            _cd89175f9633.return((async () => {
              let _cd89175f9633 = await _91a2259ffea9, _bed23b1c4e71 = await _cd89175f9633.getDirectoryHandle(`${_564d09f0fe7a.url.origin.replace(/\/|\s|\./g, "-")}`, {
                create: !0
              });
              return Object.defineProperty(_bed23b1c4e71, "name", {
                value: "",
                writable: !1
              }), _bed23b1c4e71;
            })());
          }
        });
      }
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        default: () => n
      });
    },
    1320: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        default: () => s
      });
      var _bed23b1c4e71 = _91a2259ffea9(1323), _e29815aa94d6 = _91a2259ffea9(2794), _d879eb489a78 = _91a2259ffea9(1914);
      function s(_564d09f0fe7a) {
        _bed23b1c4e71.iswindow && _564d09f0fe7a.Proxy("window.postMessage", {
          apply(_564d09f0fe7a) {
            let {constructor: {constructor: _cd89175f9633}} = "object" == typeof _564d09f0fe7a.args[0] && null !== _564d09f0fe7a.args[0] ? _564d09f0fe7a.args[0] : "object" == typeof _564d09f0fe7a.args[2] && null !== _564d09f0fe7a.args[2] ? _564d09f0fe7a.args[2] : _564d09f0fe7a.this && _d879eb489a78.POLLUTANT in _564d09f0fe7a.this && "object" == typeof _564d09f0fe7a.this[_d879eb489a78.POLLUTANT] && null !== _564d09f0fe7a.this[_d879eb489a78.POLLUTANT] ? _564d09f0fe7a.this[_d879eb489a78.POLLUTANT] : {}, _91a2259ffea9 = _cd89175f9633("return globalThis")()[_e29815aa94d6.pX], _bed23b1c4e71 = _cd89175f9633("...args", "this(...args)");
            _564d09f0fe7a.args[0] = {
              $studyjet$messagetype: "window",
              $studyjet$origin: _91a2259ffea9.url.origin,
              $studyjet$data: _564d09f0fe7a.args[0]
            }, "string" == typeof _564d09f0fe7a.args[1] && (_564d09f0fe7a.args[1] = "*"), "object" == typeof _564d09f0fe7a.args[1] && (_564d09f0fe7a.args[1].targetOrigin = "*"), 
            _564d09f0fe7a.return(_bed23b1c4e71.call(_564d09f0fe7a.fn, ..._564d09f0fe7a.args));
          }
        });
        let _cd89175f9633 = [ "MessagePort.prototype.postMessage" ];
        self.Worker && _cd89175f9633.push("Worker.prototype.postMessage"), _bed23b1c4e71.iswindow || _cd89175f9633.push("self.postMessage"), 
        _564d09f0fe7a.Proxy(_cd89175f9633, {
          apply(_564d09f0fe7a) {
            _564d09f0fe7a.args[0] = {
              $studyjet$messagetype: "worker",
              $studyjet$data: _564d09f0fe7a.args[0]
            };
          }
        });
      }
    },
    1914: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        POLLUTANT: () => _e29815aa94d6,
        default: () => a
      });
      var _bed23b1c4e71 = _91a2259ffea9(37);
      let _e29815aa94d6 = Symbol.for("studyjet realm pollutant");
      function a(_564d09f0fe7a, _cd89175f9633) {
        Object.defineProperty(_cd89175f9633.Object.prototype, _bed23b1c4e71.$W.globals.setrealmfn, {
          value(_564d09f0fe7a) {
            return Object.defineProperty(this, _e29815aa94d6, {
              value: _564d09f0fe7a,
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
    9701: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        default: () => i
      });
      var _bed23b1c4e71 = _91a2259ffea9(1472);
      function i(_564d09f0fe7a) {
        _564d09f0fe7a.Proxy("EventSource", {
          construct(_cd89175f9633) {
            _cd89175f9633.args[0] = (0, _bed23b1c4e71.Oy)(_cd89175f9633.args[0], _564d09f0fe7a.meta);
          }
        }), _564d09f0fe7a.Trap("EventSource.prototype.url", {
          get(_564d09f0fe7a) {
            (0, _bed23b1c4e71.v2)(_564d09f0fe7a.get());
          }
        });
      }
    },
    6972: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        default: () => a
      });
      var _bed23b1c4e71 = _91a2259ffea9(1323), _e29815aa94d6 = _91a2259ffea9(1472);
      function a(_564d09f0fe7a) {
        _564d09f0fe7a.Proxy("fetch", {
          apply(_cd89175f9633) {
            ("string" == typeof _cd89175f9633.args[0] || _cd89175f9633.args[0] instanceof URL) && (_cd89175f9633.args[0] = (0, 
            _e29815aa94d6.Oy)(_cd89175f9633.args[0], _564d09f0fe7a.meta), _bed23b1c4e71.isemulatedsw && (_cd89175f9633.args[0] += "?from=swruntime"));
          }
        }), _564d09f0fe7a.Proxy("Request", {
          construct(_cd89175f9633) {
            ("string" == typeof _cd89175f9633.args[0] || _cd89175f9633.args[0] instanceof URL) && (_cd89175f9633.args[0] = (0, 
            _e29815aa94d6.Oy)(_cd89175f9633.args[0], _564d09f0fe7a.meta), _bed23b1c4e71.isemulatedsw && (_cd89175f9633.args[0] += "?from=swruntime"));
          }
        }), _564d09f0fe7a.Trap("Response.prototype.url", {
          get: _564d09f0fe7a => (0, _e29815aa94d6.v2)(_564d09f0fe7a.get())
        }), _564d09f0fe7a.Trap("Request.prototype.url", {
          get: _564d09f0fe7a => (0, _e29815aa94d6.v2)(_564d09f0fe7a.get())
        });
      }
    },
    9931: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      function n(_564d09f0fe7a, _cd89175f9633) {
        let _91a2259ffea9 = new WeakMap, _bed23b1c4e71 = new WeakMap;
        _564d09f0fe7a.Proxy("WebSocket", {
          construct(_bed23b1c4e71) {
            let _e29815aa94d6 = new EventTarget;
            Object.setPrototypeOf(_e29815aa94d6, _bed23b1c4e71.fn.prototype), _e29815aa94d6.constructor = _bed23b1c4e71.fn;
            let _d879eb489a78 = _564d09f0fe7a.bare.createWebSocket(_bed23b1c4e71.args[0], _bed23b1c4e71.args[1], null, {
              "User-Agent": _cd89175f9633.navigator.userAgent,
              Origin: _564d09f0fe7a.url.origin
            }), _d75b4034184e = {
              extensions: "",
              protocol: "",
              url: _bed23b1c4e71.args[0],
              binaryType: "blob",
              barews: _d879eb489a78,
              onclose: null,
              onerror: null,
              onmessage: null,
              onopen: null
            };
            function o(_564d09f0fe7a) {
              _d75b4034184e["on" + _564d09f0fe7a.type]?.(new Proxy(_564d09f0fe7a, {
                get: (_564d09f0fe7a, _cd89175f9633) => "isTrusted" === _cd89175f9633 || Reflect.get(_564d09f0fe7a, _cd89175f9633)
              })), _e29815aa94d6.dispatchEvent(_564d09f0fe7a);
            }
            _d879eb489a78.addEventListener("open", () => {
              o(new Event("open"));
            }), _d879eb489a78.addEventListener("close", _564d09f0fe7a => {
              o(new CloseEvent("close", _564d09f0fe7a));
            }), _d879eb489a78.addEventListener("message", async _564d09f0fe7a => {
              let _cd89175f9633 = _564d09f0fe7a.data;
              "string" == typeof _cd89175f9633 || ("byteLength" in _cd89175f9633 ? "blob" === _d75b4034184e.binaryType ? _cd89175f9633 = new Blob([ _cd89175f9633 ]) : Object.setPrototypeOf(_cd89175f9633, ArrayBuffer.prototype) : "arrayBuffer" in _cd89175f9633 && "arraybuffer" === _d75b4034184e.binaryType && Object.setPrototypeOf(_cd89175f9633 = await _cd89175f9633.arrayBuffer(), ArrayBuffer.prototype)), 
              o(new MessageEvent("message", {
                data: _cd89175f9633,
                origin: _564d09f0fe7a.origin,
                lastEventId: _564d09f0fe7a.lastEventId,
                source: _564d09f0fe7a.source,
                ports: _564d09f0fe7a.ports
              }));
            }), _d879eb489a78.addEventListener("error", () => {
              o(new Event("error"));
            }), _91a2259ffea9.set(_e29815aa94d6, _d75b4034184e), _bed23b1c4e71.return(_e29815aa94d6);
          }
        }), _564d09f0fe7a.Trap("WebSocket.prototype.binaryType", {
          get: _564d09f0fe7a => _91a2259ffea9.get(_564d09f0fe7a.this).binaryType,
          set(_564d09f0fe7a, _cd89175f9633) {
            let _bed23b1c4e71 = _91a2259ffea9.get(_564d09f0fe7a.this);
            ("blob" === _cd89175f9633 || "arraybuffer" === _cd89175f9633) && (_bed23b1c4e71.binaryType = _cd89175f9633);
          }
        }), _564d09f0fe7a.Trap("WebSocket.prototype.bufferedAmount", {
          get: () => 0
        }), _564d09f0fe7a.Trap("WebSocket.prototype.extensions", {
          get: _564d09f0fe7a => _91a2259ffea9.get(_564d09f0fe7a.this).extensions
        }), _564d09f0fe7a.Trap("WebSocket.prototype.onclose", {
          get: _564d09f0fe7a => _91a2259ffea9.get(_564d09f0fe7a.this).onclose,
          set(_564d09f0fe7a, _cd89175f9633) {
            _91a2259ffea9.get(_564d09f0fe7a.this).onclose = _cd89175f9633;
          }
        }), _564d09f0fe7a.Trap("WebSocket.prototype.onerror", {
          get: _564d09f0fe7a => _91a2259ffea9.get(_564d09f0fe7a.this).onerror,
          set(_564d09f0fe7a, _cd89175f9633) {
            _91a2259ffea9.get(_564d09f0fe7a.this).onerror = _cd89175f9633;
          }
        }), _564d09f0fe7a.Trap("WebSocket.prototype.onmessage", {
          get: _564d09f0fe7a => _91a2259ffea9.get(_564d09f0fe7a.this).onmessage,
          set(_564d09f0fe7a, _cd89175f9633) {
            _91a2259ffea9.get(_564d09f0fe7a.this).onmessage = _cd89175f9633;
          }
        }), _564d09f0fe7a.Trap("WebSocket.prototype.onopen", {
          get: _564d09f0fe7a => _91a2259ffea9.get(_564d09f0fe7a.this).onopen,
          set(_564d09f0fe7a, _cd89175f9633) {
            _91a2259ffea9.get(_564d09f0fe7a.this).onopen = _cd89175f9633;
          }
        }), _564d09f0fe7a.Trap("WebSocket.prototype.url", {
          get: _564d09f0fe7a => _91a2259ffea9.get(_564d09f0fe7a.this).url
        }), _564d09f0fe7a.Trap("WebSocket.prototype.protocol", {
          get: _564d09f0fe7a => _91a2259ffea9.get(_564d09f0fe7a.this).protocol
        }), _564d09f0fe7a.Trap("WebSocket.prototype.readyState", {
          get: _564d09f0fe7a => _91a2259ffea9.get(_564d09f0fe7a.this).barews.readyState
        }), _564d09f0fe7a.Proxy("WebSocket.prototype.send", {
          apply(_564d09f0fe7a) {
            let _cd89175f9633 = _91a2259ffea9.get(_564d09f0fe7a.this);
            _564d09f0fe7a.return(_cd89175f9633.barews.send(_564d09f0fe7a.args[0]));
          }
        }), _564d09f0fe7a.Proxy("WebSocket.prototype.close", {
          apply(_564d09f0fe7a) {
            let _cd89175f9633 = _91a2259ffea9.get(_564d09f0fe7a.this);
            void 0 === _564d09f0fe7a.args[0] && (_564d09f0fe7a.args[0] = 1e3), void 0 === _564d09f0fe7a.args[1] && (_564d09f0fe7a.args[1] = ""), 
            _564d09f0fe7a.return(_cd89175f9633.barews.close(_564d09f0fe7a.args[0], _564d09f0fe7a.args[1]));
          }
        }), _564d09f0fe7a.Proxy("WebSocketStream", {
          construct(_91a2259ffea9) {
            let _e29815aa94d6, _d879eb489a78, _d75b4034184e, _eced61b9ace5 = {};
            Object.setPrototypeOf(_eced61b9ace5, _91a2259ffea9.fn.prototype), _eced61b9ace5.constructor = _91a2259ffea9.fn;
            let _775f64df6c74 = _564d09f0fe7a.bare.createWebSocket(_91a2259ffea9.args[0], _91a2259ffea9.args[1], null, {
              "User-Agent": _cd89175f9633.navigator.userAgent,
              Origin: _564d09f0fe7a.url.origin
            });
            _91a2259ffea9.args[1]?.signal.addEventListener("abort", () => {
              _775f64df6c74.close(1e3, "");
            });
            let _90a7406a509b = {
              extensions: "",
              protocol: "",
              url: _91a2259ffea9.args[0],
              barews: _775f64df6c74,
              opened: new Promise((_564d09f0fe7a, _cd89175f9633) => {
                _e29815aa94d6 = _564d09f0fe7a, _d75b4034184e = _cd89175f9633;
              }),
              closed: new Promise(_564d09f0fe7a => {
                _d879eb489a78 = _564d09f0fe7a;
              }),
              readable: new ReadableStream({
                start(_564d09f0fe7a) {
                  _775f64df6c74.addEventListener("message", async _cd89175f9633 => {
                    let _91a2259ffea9 = _cd89175f9633.data;
                    "string" == typeof _91a2259ffea9 || ("byteLength" in _91a2259ffea9 ? Object.setPrototypeOf(_91a2259ffea9, ArrayBuffer.prototype) : "arrayBuffer" in _91a2259ffea9 && Object.setPrototypeOf(_91a2259ffea9 = await _91a2259ffea9.arrayBuffer(), ArrayBuffer.prototype)), 
                    _564d09f0fe7a.enqueue(_91a2259ffea9);
                  });
                }
              }),
              writable: new WritableStream({
                write(_564d09f0fe7a) {
                  _775f64df6c74.send(_564d09f0fe7a);
                }
              })
            };
            _775f64df6c74.addEventListener("open", () => {
              _e29815aa94d6({
                readable: _90a7406a509b.readable,
                writable: _90a7406a509b.writable,
                extensions: _90a7406a509b.extensions,
                protocol: _90a7406a509b.protocol
              });
            }), _775f64df6c74.addEventListener("close", _564d09f0fe7a => {
              _d879eb489a78({
                code: _564d09f0fe7a.code,
                reason: _564d09f0fe7a.reason
              });
            }), _775f64df6c74.addEventListener("error", _564d09f0fe7a => {
              _d75b4034184e(_564d09f0fe7a);
            }), _bed23b1c4e71.set(_eced61b9ace5, _90a7406a509b), _91a2259ffea9.return(_eced61b9ace5);
          }
        }), _564d09f0fe7a.Trap("WebSocketStream.prototype.closed", {
          get: _564d09f0fe7a => _bed23b1c4e71.get(_564d09f0fe7a.this).closed
        }), _564d09f0fe7a.Trap("WebSocketStream.prototype.opened", {
          get: _564d09f0fe7a => _bed23b1c4e71.get(_564d09f0fe7a.this).opened
        }), _564d09f0fe7a.Trap("WebSocketStream.prototype.url", {
          get: _564d09f0fe7a => _bed23b1c4e71.get(_564d09f0fe7a.this).url
        }), _564d09f0fe7a.Proxy("WebSocketStream.prototype.close", {
          apply(_564d09f0fe7a) {
            let _cd89175f9633 = _bed23b1c4e71.get(_564d09f0fe7a.this);
            return _564d09f0fe7a.args[0] ? (void 0 === _564d09f0fe7a.args[0].closeCode && (_564d09f0fe7a.args[0].closeCode = 1e3), 
            void 0 === _564d09f0fe7a.args[0].reason && (_564d09f0fe7a.args[0].reason = ""), 
            _564d09f0fe7a.return(_cd89175f9633.barews.close(_564d09f0fe7a.args[0].closeCode, _564d09f0fe7a.args[0].reason))) : _564d09f0fe7a.return(_cd89175f9633.barews.close(1e3, ""));
          }
        });
      }
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        default: () => n
      });
    },
    248: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        default: () => a
      });
      var _bed23b1c4e71 = _91a2259ffea9(37), _e29815aa94d6 = _91a2259ffea9(1472);
      function a(_564d09f0fe7a, _cd89175f9633) {
        let _91a2259ffea9;
        _cd89175f9633.Worker && (0, _bed23b1c4e71.U5)("syncxhr", _564d09f0fe7a.url) && (_91a2259ffea9 = _564d09f0fe7a.natives.construct("Worker", _bed23b1c4e71.$W.files.sync));
        let _d879eb489a78 = Symbol("xhr original args"), _d75b4034184e = Symbol("xhr headers");
        _564d09f0fe7a.Proxy("XMLHttpRequest.prototype.open", {
          apply(_cd89175f9633) {
            _cd89175f9633.args[1] && (_cd89175f9633.args[1] = (0, _e29815aa94d6.Oy)(_cd89175f9633.args[1], _564d09f0fe7a.meta)), 
            void 0 === _cd89175f9633.args[2] && (_cd89175f9633.args[2] = !0), _cd89175f9633.this[_d879eb489a78] = _cd89175f9633.args;
          }
        }), _564d09f0fe7a.Proxy("XMLHttpRequest.prototype.setRequestHeader", {
          apply(_564d09f0fe7a) {
            (_564d09f0fe7a.this[_d75b4034184e] || (_564d09f0fe7a.this[_d75b4034184e] = {}))[_564d09f0fe7a.args[0]] = _564d09f0fe7a.args[1];
          }
        }), _564d09f0fe7a.Proxy("XMLHttpRequest.prototype.send", {
          apply(_cd89175f9633) {
            let _e29815aa94d6 = _cd89175f9633.this[_d879eb489a78];
            if (!_e29815aa94d6 || _e29815aa94d6[2]) return;
            if (!(0, _bed23b1c4e71.U5)("syncxhr", _564d09f0fe7a.url)) return console.warn("ignoring request - sync xhr disabled in flags"), 
            _cd89175f9633.return(void 0);
            let _eced61b9ace5 = new SharedArrayBuffer(1024, {
              maxByteLength: 2147483647
            }), _775f64df6c74 = new DataView(_eced61b9ace5);
            _564d09f0fe7a.natives.call("Worker.prototype.postMessage", _91a2259ffea9, {
              sab: _eced61b9ace5,
              args: _e29815aa94d6,
              headers: _cd89175f9633.this[_d75b4034184e],
              body: _cd89175f9633.args[0]
            });
            let _90a7406a509b = performance.now();
            for (;0 === _775f64df6c74.getUint8(0); ) if (performance.now() - _90a7406a509b > 1e3) throw Error("xhr timeout");
            let _029290fe381e = _775f64df6c74.getUint16(1), _bad94b9ba2d5 = _775f64df6c74.getUint32(3), _5452948ead4c = new Uint8Array(_bad94b9ba2d5);
            _5452948ead4c.set(new Uint8Array(_eced61b9ace5.slice(7, 7 + _bad94b9ba2d5)));
            let _5695a624e761 = (new TextDecoder).decode(_5452948ead4c), _45080c7acefd = _775f64df6c74.getUint32(7 + _bad94b9ba2d5), _d296cf17d9e2 = new Uint8Array(_45080c7acefd);
            _d296cf17d9e2.set(new Uint8Array(_eced61b9ace5.slice(11 + _bad94b9ba2d5, 11 + _bad94b9ba2d5 + _45080c7acefd)));
            let _5c1b0936347c = (new TextDecoder).decode(_d296cf17d9e2);
            _564d09f0fe7a.RawTrap(_cd89175f9633.this, "status", {
              get: () => _029290fe381e
            }), _564d09f0fe7a.RawTrap(_cd89175f9633.this, "responseText", {
              get: () => _5c1b0936347c
            }), _564d09f0fe7a.RawTrap(_cd89175f9633.this, "response", {
              get: () => "arraybuffer" === _cd89175f9633.this.responseType ? _d296cf17d9e2.buffer : _5c1b0936347c
            }), _564d09f0fe7a.RawTrap(_cd89175f9633.this, "responseXML", {
              get: () => (new DOMParser).parseFromString(_5c1b0936347c, "text/xml")
            }), _564d09f0fe7a.RawTrap(_cd89175f9633.this, "getAllResponseHeaders", {
              get: () => () => _5695a624e761
            }), _564d09f0fe7a.RawTrap(_cd89175f9633.this, "getResponseHeader", {
              get: () => _564d09f0fe7a => {
                let _cd89175f9633 = RegExp(`^${_564d09f0fe7a}: (.*)$`, "m").exec(_5695a624e761);
                return _cd89175f9633 ? _cd89175f9633[1] : null;
              }
            }), _cd89175f9633.return(void 0);
          }
        }), _564d09f0fe7a.Trap("XMLHttpRequest.prototype.responseURL", {
          get: _564d09f0fe7a => (0, _e29815aa94d6.v2)(_564d09f0fe7a.get())
        });
      }
    },
    7418: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        default: () => i
      });
      var _bed23b1c4e71 = _91a2259ffea9(1478);
      function i(_564d09f0fe7a, _cd89175f9633) {
        _564d09f0fe7a.Proxy([ "setTimeout", "setInterval" ], {
          apply(_cd89175f9633) {
            _cd89175f9633.args.length > 0 && "string" == typeof _cd89175f9633.args[0] && (_cd89175f9633.args[0] = (0, 
            _bed23b1c4e71.o)(_cd89175f9633.args[0], "(setTimeout string eval)", _564d09f0fe7a.meta));
          }
        });
      }
    },
    7791: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        default: () => o,
        enabled: () => s
      });
      var _bed23b1c4e71 = _91a2259ffea9(37), _e29815aa94d6 = _91a2259ffea9(8665).A;
      let _d879eb489a78 = "/*scramtag ", s = _564d09f0fe7a => (0, _bed23b1c4e71.U5)("sourcemaps", _564d09f0fe7a.url);
      function o(_564d09f0fe7a, _cd89175f9633) {
        Object.defineProperty(_cd89175f9633, _bed23b1c4e71.$W.globals.pushsourcemapfn, {
          value: (_cd89175f9633, _91a2259ffea9) => {
            let _bed23b1c4e71 = performance.now();
            !function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
              let _bed23b1c4e71 = Uint8Array.from(_cd89175f9633), _e29815aa94d6 = new DataView(_bed23b1c4e71.buffer), _d879eb489a78 = new TextDecoder("utf-8"), _d75b4034184e = [], _eced61b9ace5 = _e29815aa94d6.getUint32(0, !0), _775f64df6c74 = 4;
              for (let _564d09f0fe7a = 0; _564d09f0fe7a < _eced61b9ace5; _564d09f0fe7a++) {
                let _564d09f0fe7a = _e29815aa94d6.getUint32(_775f64df6c74, !0);
                _775f64df6c74 += 4;
                let _cd89175f9633 = _e29815aa94d6.getUint32(_775f64df6c74, !0);
                _775f64df6c74 += 4;
                let _91a2259ffea9 = _e29815aa94d6.getUint8(_775f64df6c74);
                if (_775f64df6c74 += 1, 0 == _91a2259ffea9) _d75b4034184e.push({
                  type: _91a2259ffea9,
                  start: _564d09f0fe7a,
                  size: _cd89175f9633
                }); else if (1 == _91a2259ffea9) {
                  let _eced61b9ace5 = _564d09f0fe7a + _cd89175f9633, _90a7406a509b = _e29815aa94d6.getUint32(_775f64df6c74, !0);
                  _775f64df6c74 += 4;
                  let _029290fe381e = _d879eb489a78.decode(_bed23b1c4e71.subarray(_775f64df6c74, _775f64df6c74 + _90a7406a509b));
                  _d75b4034184e.push({
                    type: _91a2259ffea9,
                    start: _564d09f0fe7a,
                    end: _eced61b9ace5,
                    str: _029290fe381e
                  });
                }
              }
              _564d09f0fe7a.box.sourcemaps[_91a2259ffea9] = _d75b4034184e;
            }(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9), _e29815aa94d6.time(_564d09f0fe7a.meta, _bed23b1c4e71, `scramtag parse for ${_91a2259ffea9}`);
          },
          enumerable: !1,
          writable: !1,
          configurable: !1
        }), _564d09f0fe7a.Proxy("Function.prototype.toString", {
          apply(_cd89175f9633) {
            performance.now(), function(_564d09f0fe7a, _cd89175f9633) {
              let _91a2259ffea9 = _cd89175f9633.fn.call(_cd89175f9633.this), _bed23b1c4e71 = function(_564d09f0fe7a) {
                let _cd89175f9633 = _564d09f0fe7a.indexOf(_d879eb489a78);
                if (-1 === _cd89175f9633) return null;
                let _91a2259ffea9 = _564d09f0fe7a.indexOf("*/", _cd89175f9633);
                if (-1 === _91a2259ffea9) throw console.log(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9), 
                Error("unreachable");
                let _bed23b1c4e71 = _564d09f0fe7a.substring(_cd89175f9633 + 2, _91a2259ffea9).split(" ");
                if (3 !== _bed23b1c4e71.length || "scramtag" !== _bed23b1c4e71[0] || !Number.isSafeInteger(+_bed23b1c4e71[1])) throw console.log(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9, _bed23b1c4e71), 
                Error("invalid tag");
                return [ _bed23b1c4e71[2], _cd89175f9633, +_bed23b1c4e71[1] ];
              }(_91a2259ffea9);
              if (!_bed23b1c4e71) return _cd89175f9633.return(_91a2259ffea9);
              let [_e29815aa94d6, _d75b4034184e, _eced61b9ace5] = _bed23b1c4e71, _775f64df6c74 = _eced61b9ace5 - _d75b4034184e, _90a7406a509b = _775f64df6c74 + _91a2259ffea9.length, _029290fe381e = _564d09f0fe7a.box.sourcemaps[_e29815aa94d6];
              if (!_029290fe381e) return console.warn("failed to get rewrites for tag", _e29815aa94d6), 
              _cd89175f9633.return(_91a2259ffea9);
              let _bad94b9ba2d5 = 0;
              for (;_bad94b9ba2d5 < _029290fe381e.length; ) if (_029290fe381e[_bad94b9ba2d5].start < _775f64df6c74) _bad94b9ba2d5++; else break;
              let _5452948ead4c = _bad94b9ba2d5;
              for (;_5452948ead4c < _029290fe381e.length; ) if (function(_564d09f0fe7a) {
                if (0 === _564d09f0fe7a.type) return _564d09f0fe7a.start + _564d09f0fe7a.size;
                if (1 === _564d09f0fe7a.type) return _564d09f0fe7a.end;
                throw "unreachable";
              }(_029290fe381e[_5452948ead4c]) < _90a7406a509b) _5452948ead4c++; else break;
              let _5695a624e761 = _029290fe381e.slice(_bad94b9ba2d5, _5452948ead4c), _45080c7acefd = "", _d296cf17d9e2 = 0;
              for (let _564d09f0fe7a of _5695a624e761) if (_45080c7acefd += _91a2259ffea9.slice(_d296cf17d9e2, _564d09f0fe7a.start - _775f64df6c74), 
              0 === _564d09f0fe7a.type) _d296cf17d9e2 = _564d09f0fe7a.start + _564d09f0fe7a.size - _775f64df6c74; else if (1 === _564d09f0fe7a.type) _45080c7acefd += _564d09f0fe7a.str, 
              _d296cf17d9e2 = _564d09f0fe7a.end - _775f64df6c74; else throw "unreachable";
              _45080c7acefd += _91a2259ffea9.slice(_d296cf17d9e2), _45080c7acefd = _45080c7acefd.replace(`${_d879eb489a78}${_eced61b9ace5} ${_e29815aa94d6}*/`, ""), 
              _cd89175f9633.return(_45080c7acefd);
            }(_564d09f0fe7a, _cd89175f9633);
          }
        });
      }
    },
    9399: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        default: () => a
      });
      var _bed23b1c4e71 = _91a2259ffea9(4110), _e29815aa94d6 = _91a2259ffea9(1472);
      function a(_564d09f0fe7a, _cd89175f9633) {
        _564d09f0fe7a.Proxy("Worker", {
          construct(_cd89175f9633) {
            _cd89175f9633.args[0] = (0, _e29815aa94d6.Oy)(_cd89175f9633.args[0], _564d09f0fe7a.meta) + "?dest=worker", 
            _cd89175f9633.args[1] && "module" === _cd89175f9633.args[1].type && (_cd89175f9633.args[0] += "&type=module");
            let _91a2259ffea9 = _cd89175f9633.call(), _d879eb489a78 = new _bed23b1c4e71.DD;
            (async () => {
              let _cd89175f9633 = await _d879eb489a78.getInnerPort();
              _564d09f0fe7a.natives.call("Worker.prototype.postMessage", _91a2259ffea9, {
                $studyjet$type: "baremuxinit",
                port: _cd89175f9633
              }, [ _cd89175f9633 ]);
            })();
          }
        }), _564d09f0fe7a.Proxy("SharedWorker", {
          construct(_cd89175f9633) {
            _cd89175f9633.args[0] = (0, _e29815aa94d6.Oy)(_cd89175f9633.args[0], _564d09f0fe7a.meta) + "?dest=sharedworker", 
            _cd89175f9633.args[1] && "string" == typeof _cd89175f9633.args[1] && (_cd89175f9633.args[1] = `${_564d09f0fe7a.url.origin}@${_cd89175f9633.args[1]}`), 
            _cd89175f9633.args[1] && "object" == typeof _cd89175f9633.args[1] && ("module" === _cd89175f9633.args[1].type && (_cd89175f9633.args[0] += "&type=module"), 
            _cd89175f9633.args[1].name && (_cd89175f9633.args[1].name = `${_564d09f0fe7a.url.origin}@${_cd89175f9633.args[1].name}`));
            let _91a2259ffea9 = _cd89175f9633.call(), _d879eb489a78 = new _bed23b1c4e71.DD;
            (async () => {
              let _cd89175f9633 = await _d879eb489a78.getInnerPort();
              _564d09f0fe7a.natives.call("MessagePort.prototype.postMessage", _91a2259ffea9.port, {
                $studyjet$type: "baremuxinit",
                port: _cd89175f9633
              }, [ _cd89175f9633 ]);
            })();
          }
        }), _564d09f0fe7a.Proxy("Worklet.prototype.addModule", {
          apply(_cd89175f9633) {
            _cd89175f9633.args[0] && (_cd89175f9633.args[0] = (0, _e29815aa94d6.Oy)(_cd89175f9633.args[0], _564d09f0fe7a.meta) + "?dest=worklet");
          }
        });
      }
    },
    581: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        createWrapFn: () => o,
        default: () => c,
        order: () => _eced61b9ace5
      });
      var _bed23b1c4e71 = _91a2259ffea9(1323), _e29815aa94d6 = _91a2259ffea9(2794), _d879eb489a78 = _91a2259ffea9(37), _d75b4034184e = _91a2259ffea9(591);
      function o(_564d09f0fe7a, _cd89175f9633) {
        return function(_91a2259ffea9, _d879eb489a78) {
          if (_91a2259ffea9 === _cd89175f9633.location) return _564d09f0fe7a.locationProxy;
          if (_91a2259ffea9 === _cd89175f9633.eval) return _d75b4034184e.indirectEval.bind(_564d09f0fe7a, _d879eb489a78);
          if (_bed23b1c4e71.iswindow) {
            if (_91a2259ffea9 === _cd89175f9633.parent) if (_e29815aa94d6.pX in _cd89175f9633.parent) return _cd89175f9633.parent; else return _cd89175f9633; else if (_91a2259ffea9 === _cd89175f9633.top) {
              let _564d09f0fe7a = _cd89175f9633;
              for (;;) {
                let _cd89175f9633 = _564d09f0fe7a.parent.self;
                if (_cd89175f9633 === _564d09f0fe7a || !(_e29815aa94d6.pX in _cd89175f9633)) break;
                _564d09f0fe7a = _cd89175f9633;
              }
              return _564d09f0fe7a;
            }
          }
          return _91a2259ffea9;
        };
      }
      let _eced61b9ace5 = 4;
      function c(_564d09f0fe7a, _cd89175f9633) {
        Object.defineProperty(_cd89175f9633, _d879eb489a78.$W.globals.wrapfn, {
          value: _564d09f0fe7a.wrapfn,
          writable: !1,
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_cd89175f9633, _d879eb489a78.$W.globals.wrappropertyfn, {
          value: function(_564d09f0fe7a) {
            return "location" === _564d09f0fe7a || "parent" === _564d09f0fe7a || "top" === _564d09f0fe7a || "eval" === _564d09f0fe7a ? _d879eb489a78.$W.globals.wrappropertybase + _564d09f0fe7a : _564d09f0fe7a;
          },
          writable: !1,
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_cd89175f9633, _d879eb489a78.$W.globals.cleanrestfn, {
          value: function(_564d09f0fe7a) {},
          writable: !1,
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_cd89175f9633.Object.prototype, _d879eb489a78.$W.globals.wrappropertybase + "location", {
          get: function() {
            return this === _cd89175f9633 || this === _cd89175f9633.document ? _564d09f0fe7a.locationProxy : this.location;
          },
          set(_91a2259ffea9) {
            if (this === _cd89175f9633 || this === _cd89175f9633.document) {
              _564d09f0fe7a.url = _91a2259ffea9;
              return;
            }
            this.location = _91a2259ffea9;
          },
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_cd89175f9633.Object.prototype, _d879eb489a78.$W.globals.wrappropertybase + "parent", {
          get: function() {
            return _564d09f0fe7a.wrapfn(this.parent, !1);
          },
          set(_564d09f0fe7a) {
            this.parent = _564d09f0fe7a;
          },
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_cd89175f9633.Object.prototype, _d879eb489a78.$W.globals.wrappropertybase + "top", {
          get: function() {
            return _564d09f0fe7a.wrapfn(this.top, !1);
          },
          set(_564d09f0fe7a) {
            this.top = _564d09f0fe7a;
          },
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_cd89175f9633.Object.prototype, _d879eb489a78.$W.globals.wrappropertybase + "eval", {
          get: function() {
            return _564d09f0fe7a.wrapfn(this.eval, !0);
          },
          set(_564d09f0fe7a) {
            this.eval = _564d09f0fe7a;
          },
          configurable: !1,
          enumerable: !1
        }), _cd89175f9633.$scramitize = function(_564d09f0fe7a) {
          return location, _bed23b1c4e71.iswindow && _cd89175f9633.top, "string" == typeof _564d09f0fe7a && _564d09f0fe7a.includes("studyjet"), 
          "string" == typeof _564d09f0fe7a && _564d09f0fe7a.includes(location.origin), _564d09f0fe7a;
        }, Object.defineProperty(_cd89175f9633, _d879eb489a78.$W.globals.trysetfn, {
          value: function(_91a2259ffea9, _bed23b1c4e71, _e29815aa94d6) {
            return _91a2259ffea9 instanceof _cd89175f9633.Location && (_564d09f0fe7a.locationProxy.href = _e29815aa94d6, 
            !0);
          },
          writable: !1,
          configurable: !1
        });
      }
    },
    1229: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        SingletonBox: () => n
      });
      class n {
        ownerclient;
        clients=[];
        globals=new Map;
        documents=new Map;
        locations=new Map;
        sourcemaps={};
        constructor(_564d09f0fe7a) {
          this.ownerclient = _564d09f0fe7a;
        }
        registerClient(_564d09f0fe7a, _cd89175f9633) {
          this.clients.push(_564d09f0fe7a), this.globals.set(_cd89175f9633, _564d09f0fe7a), 
          this.documents.set(_cd89175f9633.document, _564d09f0fe7a), this.locations.set(_cd89175f9633.location, _564d09f0fe7a);
        }
      }
    },
    8409: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        StudyJetServiceWorkerRuntime: () => a
      });
      var _bed23b1c4e71 = _91a2259ffea9(1472), _e29815aa94d6 = _91a2259ffea9(8665).A;
      class a {
        client;
        recvport;
        constructor(_564d09f0fe7a) {
          this.client = _564d09f0fe7a, self.onconnect = _cd89175f9633 => {
            let _91a2259ffea9 = _cd89175f9633.ports[0];
            _e29815aa94d6.log("sw", "connected"), _91a2259ffea9.addEventListener("message", _cd89175f9633 => {
              console.log("sw", _cd89175f9633.data), "studyjet$type" in _cd89175f9633.data && ("init" === _cd89175f9633.data.studyjet$type ? (this.recvport = _cd89175f9633.data.studyjet$port, 
              this.recvport.postMessage({
                studyjet$type: "init"
              })) : s.call(this, _564d09f0fe7a, _cd89175f9633.data));
            }), _91a2259ffea9.start();
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
              dispatchEvent: _564d09f0fe7a => !1
            },
            showNotification: async () => {},
            unregister: async () => !0,
            update: async () => {},
            installing: null,
            waiting: null
          }, this.client.global.ServiceWorkerGlobalScope = this.client.global;
        }
      }
      function s(_564d09f0fe7a, _cd89175f9633) {
        let _91a2259ffea9 = this.recvport, _d879eb489a78 = _cd89175f9633.studyjet$type, _d75b4034184e = _cd89175f9633.studyjet$token, _eced61b9ace5 = _564d09f0fe7a.eventcallbacks.get(self);
        if ("fetch" === _d879eb489a78) {
          _e29815aa94d6.log("ee", _cd89175f9633);
          let _d879eb489a78 = _eced61b9ace5.filter(_564d09f0fe7a => "fetch" === _564d09f0fe7a.event);
          if (!_d879eb489a78) return;
          for (let _eced61b9ace5 of _d879eb489a78) {
            let _d879eb489a78 = _cd89175f9633.studyjet$request, _775f64df6c74 = new _564d09f0fe7a.natives.Request((0, 
            _bed23b1c4e71.v2)(_d879eb489a78.url), {
              body: _d879eb489a78.body,
              headers: new Headers(_d879eb489a78.headers),
              method: _d879eb489a78.method,
              mode: "same-origin"
            });
            Object.defineProperty(_775f64df6c74, "destination", {
              value: _d879eb489a78.destinitation
            });
            let _90a7406a509b = new Event("fetch");
            _90a7406a509b.request = _775f64df6c74;
            let _029290fe381e = !1;
            _90a7406a509b.respondWith = _564d09f0fe7a => {
              _029290fe381e = !0, (async () => {
                let _cd89175f9633 = {
                  studyjet$type: "fetch",
                  studyjet$token: _d75b4034184e,
                  studyjet$response: {
                    body: (_564d09f0fe7a = await _564d09f0fe7a).body,
                    headers: Array.from(_564d09f0fe7a.headers.entries()),
                    status: _564d09f0fe7a.status,
                    statusText: _564d09f0fe7a.statusText
                  }
                };
                _e29815aa94d6.log("sw", "responding", _cd89175f9633), _91a2259ffea9.postMessage(_cd89175f9633, [ _564d09f0fe7a.body ]);
              })();
            }, _e29815aa94d6.log("to fn", _90a7406a509b), _eced61b9ace5.proxiedCallback(new Proxy(_90a7406a509b, {
              get: (_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) => "isTrusted" === _cd89175f9633 || Reflect.get(_564d09f0fe7a, _cd89175f9633)
            })), _029290fe381e || (console.log("sw", "no response"), _91a2259ffea9.postMessage({
              studyjet$type: "fetch",
              studyjet$token: _d75b4034184e,
              studyjet$response: !1
            }));
          }
        }
      }
    },
    9353: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        default: () => i
      });
      var _bed23b1c4e71 = _91a2259ffea9(1472);
      function i(_564d09f0fe7a) {
        _564d09f0fe7a.Proxy("importScripts", {
          apply(_cd89175f9633) {
            for (let _91a2259ffea9 in _cd89175f9633.args) _cd89175f9633.args[_91a2259ffea9] = (0, 
            _bed23b1c4e71.Oy)(_cd89175f9633.args[_91a2259ffea9], _564d09f0fe7a.meta);
          }
        });
      }
    },
    3402: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.d(_cd89175f9633, {
        q: () => l
      });
      var _bed23b1c4e71 = _91a2259ffea9(37), _e29815aa94d6 = _91a2259ffea9(4869), _d879eb489a78 = _91a2259ffea9(6570), _d75b4034184e = _91a2259ffea9(1862), _eced61b9ace5 = _91a2259ffea9(8665).A;
      class l extends EventTarget {
        db;
        constructor(_564d09f0fe7a) {
          super();
          const t = (_564d09f0fe7a, _cd89175f9633) => {
            for (let _91a2259ffea9 in _cd89175f9633) _cd89175f9633[_91a2259ffea9] instanceof Object && _91a2259ffea9 in _564d09f0fe7a && Object.assign(_cd89175f9633[_91a2259ffea9], t(_564d09f0fe7a[_91a2259ffea9], _cd89175f9633[_91a2259ffea9]));
            return Object.assign(_564d09f0fe7a || {}, _cd89175f9633);
          }, _cd89175f9633 = t({
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
              encode: _564d09f0fe7a => _564d09f0fe7a ? encodeURIComponent(_564d09f0fe7a) : _564d09f0fe7a,
              decode: _564d09f0fe7a => _564d09f0fe7a ? decodeURIComponent(_564d09f0fe7a) : _564d09f0fe7a
            }
          }, _564d09f0fe7a);
          _cd89175f9633.codec.encode = _cd89175f9633.codec.encode.toString(), _cd89175f9633.codec.decode = _cd89175f9633.codec.decode.toString(), 
          (0, _bed23b1c4e71.Nk)(_cd89175f9633);
        }
        async init() {
          (0, _bed23b1c4e71.Ec)(), await this.openIDB(), navigator.serviceWorker.controller?.postMessage({
            studyjet$type: "loadConfig",
            config: _bed23b1c4e71.$W
          }), _eced61b9ace5.log("config loaded"), navigator.serviceWorker.addEventListener("message", _564d09f0fe7a => {
            if (!("studyjet$type" in _564d09f0fe7a.data)) return;
            let _cd89175f9633 = _564d09f0fe7a.data;
            "download" === _cd89175f9633.studyjet$type && this.dispatchEvent(new _d75b4034184e.StudyJetGlobalDownloadEvent(_cd89175f9633.download));
          });
        }
        createFrame(_564d09f0fe7a) {
          return _564d09f0fe7a || (_564d09f0fe7a = document.createElement("iframe")), new _e29815aa94d6.X(this, _564d09f0fe7a);
        }
        encodeUrl(_564d09f0fe7a) {
          if ("string" == typeof _564d09f0fe7a && (_564d09f0fe7a = new URL(_564d09f0fe7a)), 
          "http:" != _564d09f0fe7a.protocol && "https:" != _564d09f0fe7a.protocol) return _564d09f0fe7a.href;
          let _cd89175f9633 = (0, _bed23b1c4e71.hD)(_564d09f0fe7a.hash.slice(1));
          return _564d09f0fe7a.hash = "", _bed23b1c4e71.$W.prefix + (0, _bed23b1c4e71.hD)(_564d09f0fe7a.href) + (_cd89175f9633 ? "#" + _cd89175f9633 : "");
        }
        decodeUrl(_564d09f0fe7a) {
          _564d09f0fe7a instanceof URL && (_564d09f0fe7a = _564d09f0fe7a.toString());
          let _cd89175f9633 = location.origin + _bed23b1c4e71.$W.prefix;
          return (0, _bed23b1c4e71.P_)(_564d09f0fe7a.slice(_cd89175f9633.length));
        }
        async openIDB() {
          let _564d09f0fe7a = await (0, _d879eb489a78.P2)("@d7a6431b92e", 1, {
            upgrade(_564d09f0fe7a) {
              _564d09f0fe7a.objectStoreNames.contains("config") || _564d09f0fe7a.createObjectStore("config"), 
              _564d09f0fe7a.objectStoreNames.contains("cookies") || _564d09f0fe7a.createObjectStore("cookies"), 
              _564d09f0fe7a.objectStoreNames.contains("redirectTrackers") || _564d09f0fe7a.createObjectStore("redirectTrackers"), 
              _564d09f0fe7a.objectStoreNames.contains("referrerPolicies") || _564d09f0fe7a.createObjectStore("referrerPolicies"), 
              _564d09f0fe7a.objectStoreNames.contains("publicSuffixList") || _564d09f0fe7a.createObjectStore("publicSuffixList");
            }
          });
          return this.db = _564d09f0fe7a, await this.#_564d09f0fe7a(), _564d09f0fe7a;
        }
        async #_564d09f0fe7a() {
          this.db ? await this.db.put("config", _bed23b1c4e71.$W, "config") : console.error("Store not ready!");
        }
        async modifyConfig(_564d09f0fe7a) {
          (0, _bed23b1c4e71.Nk)(Object.assign({}, _bed23b1c4e71.$W, _564d09f0fe7a)), (0, _bed23b1c4e71.Ec)(), 
          await this.#_564d09f0fe7a(), navigator.serviceWorker.controller?.postMessage({
            studyjet$type: "loadConfig",
            config: _bed23b1c4e71.$W
          });
        }
        addEventListener(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
          super.addEventListener(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9);
        }
      }
    },
    4869: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.d(_cd89175f9633, {
        X: () => a
      });
      var _bed23b1c4e71 = _91a2259ffea9(2794), _e29815aa94d6 = _91a2259ffea9(8665).A;
      class a extends EventTarget {
        controller;
        frame;
        constructor(_564d09f0fe7a, _cd89175f9633) {
          super(), this.controller = _564d09f0fe7a, this.frame = _cd89175f9633, _cd89175f9633.name = `${Array(8).fill(0).map(() => Math.floor(36 * Math.random()).toString(36)).join("")}`, 
          _cd89175f9633[_bed23b1c4e71.zr] = this;
        }
        get client() {
          return this.frame.contentWindow.window[_bed23b1c4e71.pX];
        }
        get url() {
          return this.client.url;
        }
        go(_564d09f0fe7a) {
          _564d09f0fe7a instanceof URL && (_564d09f0fe7a = _564d09f0fe7a.toString()), _e29815aa94d6.log("navigated to", _564d09f0fe7a), 
          this.frame.src = this.controller.encodeUrl(_564d09f0fe7a);
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
        addEventListener(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
          super.addEventListener(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9);
        }
      }
    },
    9052: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        StudyJetController: () => _e29815aa94d6.q,
        StudyJetFrame: () => _bed23b1c4e71.X
      });
      var _bed23b1c4e71 = _91a2259ffea9(4869), _e29815aa94d6 = _91a2259ffea9(3402);
      console.warn("you are using the last version of studyjet v1, if possible, please upgrade to v2 for better performance and more features");
    },
    8665: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.d(_cd89175f9633, {
        A: () => _e29815aa94d6
      });
      let _bed23b1c4e71 = {
        log: console.log,
        warn: console.warn,
        error: console.error,
        debug: console.debug,
        info: console.info
      }, _e29815aa94d6 = {
        fmt: function(_564d09f0fe7a, _cd89175f9633, ..._91a2259ffea9) {
          let _bed23b1c4e71 = Error.prepareStackTrace;
          Error.prepareStackTrace = (_564d09f0fe7a, _cd89175f9633) => {
            _cd89175f9633.shift(), _cd89175f9633.shift(), _cd89175f9633.shift();
            let _91a2259ffea9 = "";
            for (let _564d09f0fe7a = 1; _564d09f0fe7a < Math.min(2, _cd89175f9633.length); _564d09f0fe7a++) _cd89175f9633[_564d09f0fe7a].getFunctionName() && (_91a2259ffea9 += `${_cd89175f9633[_564d09f0fe7a].getFunctionName()} -> ` + _91a2259ffea9);
            return _91a2259ffea9 + (_cd89175f9633[0].getFunctionName() || "Anonymous");
          };
          let _e29815aa94d6 = function() {
            try {
              throw Error();
            } catch (_564d09f0fe7a) {
              return _564d09f0fe7a.stack;
            }
          }();
          Error.prepareStackTrace = _bed23b1c4e71, this.print(_564d09f0fe7a, _e29815aa94d6, _cd89175f9633, ..._91a2259ffea9);
        },
        print(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9, ..._e29815aa94d6) {
          (_bed23b1c4e71[_564d09f0fe7a] || _bed23b1c4e71.log)(`%c${_cd89175f9633}%c ${_91a2259ffea9}`, `\n  \tbackground-color: ${{
            log: "#000",
            warn: "#f80",
            error: "#f00",
            debug: "transparent"
          }[_564d09f0fe7a]};\n  \tcolor: ${{
            log: "#fff",
            warn: "#fff",
            error: "#fff",
            debug: "gray"
          }[_564d09f0fe7a]};\n  \tpadding: ${{
            log: 2,
            warn: 4,
            error: 4,
            debug: 0
          }[_564d09f0fe7a]}px;\n  \tfont-weight: bold;\n  \tfont-family: monospace;\n  \tfont-size: 0.9em;\n  `, `${"debug" === _564d09f0fe7a ? "color: gray" : ""}`, ..._e29815aa94d6);
        },
        log: function(_564d09f0fe7a, ..._cd89175f9633) {
          this.fmt("log", _564d09f0fe7a, ..._cd89175f9633);
        },
        warn: function(_564d09f0fe7a, ..._cd89175f9633) {
          this.fmt("warn", _564d09f0fe7a, ..._cd89175f9633);
        },
        error: function(_564d09f0fe7a, ..._cd89175f9633) {
          this.fmt("error", _564d09f0fe7a, ..._cd89175f9633);
        },
        debug: function(_564d09f0fe7a, ..._cd89175f9633) {
          this.fmt("debug", _564d09f0fe7a, ..._cd89175f9633);
        },
        time(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {}
      };
    },
    3831: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.d(_cd89175f9633, {
        k: () => a
      });
      var _bed23b1c4e71 = _91a2259ffea9(4322), _e29815aa94d6 = _91a2259ffea9.n(_bed23b1c4e71);
      class a {
        cookies={};
        setCookies(_564d09f0fe7a, _cd89175f9633) {
          for (let _91a2259ffea9 of _564d09f0fe7a) {
            let _564d09f0fe7a = _e29815aa94d6()(_91a2259ffea9), _bed23b1c4e71 = {
              domain: _564d09f0fe7a.domain,
              sameSite: _564d09f0fe7a.sameSite,
              ..._564d09f0fe7a[0]
            };
            _bed23b1c4e71.domain || (_bed23b1c4e71.domain = "." + _cd89175f9633.hostname), _bed23b1c4e71.domain.startsWith(".") || (_bed23b1c4e71.domain = "." + _bed23b1c4e71.domain), 
            _bed23b1c4e71.path || (_bed23b1c4e71.path = "/"), _bed23b1c4e71.sameSite || (_bed23b1c4e71.sameSite = "lax"), 
            _bed23b1c4e71.expires && (_bed23b1c4e71.expires = _bed23b1c4e71.expires.toString());
            let _d879eb489a78 = `${_bed23b1c4e71.domain}@${_bed23b1c4e71.path}@${_bed23b1c4e71.name}`;
            this.cookies[_d879eb489a78] = _bed23b1c4e71;
          }
        }
        getCookies(_564d09f0fe7a, _cd89175f9633) {
          let _91a2259ffea9 = new Date, _bed23b1c4e71 = Object.values(this.cookies), _e29815aa94d6 = [];
          for (let _d879eb489a78 of _bed23b1c4e71) {
            if (_d879eb489a78.expires && new Date(_d879eb489a78.expires) < _91a2259ffea9) {
              delete this.cookies[`${_d879eb489a78.domain}@${_d879eb489a78.path}@${_d879eb489a78.name}`];
              continue;
            }
            (!_d879eb489a78.secure || "https:" === _564d09f0fe7a.protocol) && (!_d879eb489a78.httpOnly || !_cd89175f9633) && _564d09f0fe7a.pathname.startsWith(_d879eb489a78.path) && (!_d879eb489a78.domain.startsWith(".") || _564d09f0fe7a.hostname.endsWith(_d879eb489a78.domain.slice(1))) && _e29815aa94d6.push(_d879eb489a78);
          }
          return _e29815aa94d6.map(_564d09f0fe7a => `${_564d09f0fe7a.name}=${_564d09f0fe7a.value}`).join("; ");
        }
        load(_564d09f0fe7a) {
          if ("object" == typeof _564d09f0fe7a) return _564d09f0fe7a;
          this.cookies = JSON.parse(_564d09f0fe7a);
        }
        dump() {
          return JSON.stringify(this.cookies);
        }
      }
    },
    1427: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.d(_cd89175f9633, {
        u: () => n
      });
      class n {
        headers={};
        set(_564d09f0fe7a, _cd89175f9633) {
          this.headers[_564d09f0fe7a.toLowerCase()] = _cd89175f9633;
        }
      }
    },
    2393: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.d(_cd89175f9633, {
        V: () => _d75b4034184e
      });
      var _bed23b1c4e71 = _91a2259ffea9(2614), _e29815aa94d6 = _91a2259ffea9(884), _d879eb489a78 = _91a2259ffea9(1472);
      let _d75b4034184e = [ {
        fn: (_564d09f0fe7a, _cd89175f9633) => (0, _d879eb489a78.Oy)(_564d09f0fe7a, _cd89175f9633),
        src: [ "embed", "script", "img", "frame", "source", "input", "track" ],
        href: [ "a", "link", "area", "use", "image" ],
        data: [ "object" ],
        action: [ "form" ],
        formaction: [ "button", "input", "textarea", "submit" ],
        poster: [ "video" ],
        "xlink:href": [ "image" ]
      }, {
        fn: (_564d09f0fe7a, _cd89175f9633) => (0, _d879eb489a78.Oy)(_564d09f0fe7a, _cd89175f9633),
        src: [ "iframe" ]
      }, {
        fn: (_564d09f0fe7a, _cd89175f9633) => null,
        sandbox: [ "iframe" ]
      }, {
        fn: (_564d09f0fe7a, _cd89175f9633) => _564d09f0fe7a.startsWith("blob:") ? (0, _d879eb489a78.$n)(_564d09f0fe7a) : (0, 
        _d879eb489a78.Oy)(_564d09f0fe7a, _cd89175f9633),
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
        fn: (_564d09f0fe7a, _cd89175f9633) => (0, _e29815aa94d6.PV)(_564d09f0fe7a, _cd89175f9633),
        srcset: [ "img", "source" ],
        imagesrcset: [ "link" ]
      }, {
        fn: (_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) => (0, _e29815aa94d6.Qs)(_564d09f0fe7a, _91a2259ffea9, {
          origin: new URL(_cd89175f9633.origin.origin),
          base: new URL(_cd89175f9633.origin.origin)
        }, !0),
        srcdoc: [ "iframe" ]
      }, {
        fn: (_564d09f0fe7a, _cd89175f9633) => (0, _bed23b1c4e71.s)(_564d09f0fe7a, _cd89175f9633),
        style: "*"
      }, {
        fn: (_564d09f0fe7a, _cd89175f9633) => "_top" === _564d09f0fe7a || "_unfencedTop" === _564d09f0fe7a ? _cd89175f9633.topFrameName : "_parent" === _564d09f0fe7a ? _cd89175f9633.parentFrameName : _564d09f0fe7a,
        target: [ "a", "base" ]
      } ];
    },
    37: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      let _bed23b1c4e71, _e29815aa94d6, _d879eb489a78;
      _91a2259ffea9.d(_cd89175f9633, {
        $W: () => _d879eb489a78,
        Ec: () => o,
        Nk: () => c,
        P_: () => _e29815aa94d6,
        U5: () => l,
        hD: () => _bed23b1c4e71
      }), _91a2259ffea9(2393), _91a2259ffea9(9381), _91a2259ffea9(2416);
      let _d75b4034184e = Function;
      function o() {
        _bed23b1c4e71 = _d75b4034184e(`return ${_d879eb489a78.codec.encode}`)(), _e29815aa94d6 = _d75b4034184e(`return ${_d879eb489a78.codec.decode}`)();
      }
      function l(_564d09f0fe7a, _cd89175f9633) {
        let _91a2259ffea9 = _d879eb489a78.flags[_564d09f0fe7a];
        for (let _91a2259ffea9 in _d879eb489a78.siteFlags) {
          let _bed23b1c4e71 = _d879eb489a78.siteFlags[_91a2259ffea9];
          if (new RegExp(_91a2259ffea9).test(_cd89175f9633.href) && _564d09f0fe7a in _bed23b1c4e71) return _bed23b1c4e71[_564d09f0fe7a];
        }
        return _91a2259ffea9;
      }
      function c(_564d09f0fe7a) {
        _d879eb489a78 = _564d09f0fe7a, o();
      }
    },
    2614: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.d(_cd89175f9633, {
        f: () => a,
        s: () => i
      });
      var _bed23b1c4e71 = _91a2259ffea9(1472);
      function i(_564d09f0fe7a, _cd89175f9633) {
        return s("rewrite", _564d09f0fe7a, _cd89175f9633);
      }
      function a(_564d09f0fe7a) {
        return s("unrewrite", _564d09f0fe7a);
      }
      function s(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
        return (_cd89175f9633 = (_cd89175f9633 = new String(_cd89175f9633).toString()).replace(/url\(['"]?(.+?)['"]?\)/gm, (_cd89175f9633, _e29815aa94d6) => {
          let _d879eb489a78 = "rewrite" === _564d09f0fe7a ? (0, _bed23b1c4e71.Oy)(_e29815aa94d6.trim(), _91a2259ffea9) : (0, 
          _bed23b1c4e71.v2)(_e29815aa94d6.trim());
          return _cd89175f9633.replace(_e29815aa94d6, _d879eb489a78);
        })).replace(/@import\s+(url\s*?\(.{0,9999}?\)|['"].{0,9999}?['"]|.{0,9999}?)($|\s|;)/gm, (_cd89175f9633, _e29815aa94d6) => _cd89175f9633.replace(_e29815aa94d6, _e29815aa94d6.replace(/^(url\(['"]?|['"]|)(.+?)(['"]|['"]?\)|)$/gm, (_cd89175f9633, _e29815aa94d6, _d879eb489a78, _d75b4034184e) => {
          if (_e29815aa94d6.startsWith("url")) return _cd89175f9633;
          let _eced61b9ace5 = "rewrite" === _564d09f0fe7a ? (0, _bed23b1c4e71.Oy)(_d879eb489a78.trim(), _91a2259ffea9) : (0, 
          _bed23b1c4e71.v2)(_d879eb489a78.trim());
          return `${_e29815aa94d6}${_eced61b9ace5}${_d75b4034184e}`;
        })));
      }
    },
    4435: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.d(_cd89175f9633, {
        l: () => l
      });
      var _bed23b1c4e71 = _91a2259ffea9(1472), _e29815aa94d6 = _91a2259ffea9(8228);
      let _d879eb489a78 = new Set([ "cross-origin-embedder-policy", "cross-origin-opener-policy", "cross-origin-resource-policy", "content-security-policy", "content-security-policy-report-only", "expect-ct", "feature-policy", "origin-isolation", "strict-transport-security", "upgrade-insecure-requests", "x-content-type-options", "x-download-options", "x-frame-options", "x-permitted-cross-domain-policies", "x-powered-by", "x-xss-protection", "clear-site-data" ]), _d75b4034184e = new Set([ "location", "content-location", "referer" ]);
      function o(_564d09f0fe7a, _cd89175f9633) {
        return _564d09f0fe7a.replace(/<(.*)>/gi, _564d09f0fe7a => (0, _bed23b1c4e71.Oy)(_564d09f0fe7a, _cd89175f9633));
      }
      async function l(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9, _eced61b9ace5) {
        let _775f64df6c74 = {};
        for (let _cd89175f9633 in _564d09f0fe7a) _775f64df6c74[_cd89175f9633.toLowerCase()] = _564d09f0fe7a[_cd89175f9633];
        for (let _564d09f0fe7a of _d879eb489a78) delete _775f64df6c74[_564d09f0fe7a];
        for (let _564d09f0fe7a of _d75b4034184e) _775f64df6c74[_564d09f0fe7a] && (_775f64df6c74[_564d09f0fe7a] = (0, 
        _bed23b1c4e71.Oy)(_775f64df6c74[_564d09f0fe7a]?.toString(), _cd89175f9633));
        if ("string" == typeof _775f64df6c74.link ? _775f64df6c74.link = o(_775f64df6c74.link, _cd89175f9633) : Array.isArray(_775f64df6c74.link) && (_775f64df6c74.link = _775f64df6c74.link.map(_564d09f0fe7a => o(_564d09f0fe7a, _cd89175f9633))), 
        "string" == typeof _775f64df6c74.referer) {
          let _564d09f0fe7a = new URL(_775f64df6c74.referer), _91a2259ffea9 = await _eced61b9ace5.get(_564d09f0fe7a.href);
          if (_91a2259ffea9) {
            let _bed23b1c4e71 = _91a2259ffea9.policy.toLowerCase().split(",").map(_564d09f0fe7a => _564d09f0fe7a.trim());
            _bed23b1c4e71.includes("no-referrer") || _bed23b1c4e71.includes("no-referrer-when-downgrade") && "http:" === _cd89175f9633.origin.protocol && "https:" === _564d09f0fe7a.protocol ? delete _775f64df6c74.referer : _bed23b1c4e71.includes("origin") ? _775f64df6c74.referer = _564d09f0fe7a.origin : _bed23b1c4e71.includes("origin-when-cross-origin") ? _564d09f0fe7a.origin !== _cd89175f9633.origin.origin ? _775f64df6c74.referer = _564d09f0fe7a.origin : _775f64df6c74.referer = _564d09f0fe7a.href : _bed23b1c4e71.includes("same-origin") ? _564d09f0fe7a.origin === _cd89175f9633.origin.origin ? _775f64df6c74.referer = _564d09f0fe7a.href : delete _775f64df6c74.referer : _bed23b1c4e71.includes("strict-origin") ? "http:" === _cd89175f9633.origin.protocol && "https:" === _564d09f0fe7a.protocol ? delete _775f64df6c74.referer : _775f64df6c74.referer = _564d09f0fe7a.origin : _564d09f0fe7a.origin === _cd89175f9633.origin.origin ? _775f64df6c74.referer = _564d09f0fe7a.href : "http:" === _cd89175f9633.origin.protocol && "https:" === _564d09f0fe7a.protocol ? delete _775f64df6c74.referer : _775f64df6c74.referer = _564d09f0fe7a.origin;
          }
        }
        return "string" == typeof _775f64df6c74["sec-fetch-dest"] && "" === _775f64df6c74["sec-fetch-dest"] && (_775f64df6c74["sec-fetch-dest"] = "empty"), 
        "string" == typeof _775f64df6c74["sec-fetch-site"] && "none" !== _775f64df6c74["sec-fetch-site"] && ("string" == typeof _775f64df6c74.referer ? _775f64df6c74["sec-fetch-site"] = await (0, 
        _e29815aa94d6.ps)(_cd89175f9633, new URL(_775f64df6c74.referer), _91a2259ffea9) : (console.warn("Missing referrer header; can't rewrite sec-fetch-site properly. Falling back to unsafe deletion."), 
        delete _775f64df6c74["sec-fetch-site"])), _775f64df6c74;
      }
    },
    884: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.d(_cd89175f9633, {
        PV: () => m,
        Qs: () => f,
        Uk: () => h,
        nK: () => g
      });
      var _bed23b1c4e71 = _91a2259ffea9(3808), _e29815aa94d6 = _91a2259ffea9(8866), _d879eb489a78 = _91a2259ffea9(6498), _d75b4034184e = _91a2259ffea9(1472), _eced61b9ace5 = _91a2259ffea9(2614), _775f64df6c74 = _91a2259ffea9(1478), _90a7406a509b = _91a2259ffea9(37), _029290fe381e = _91a2259ffea9(2393), _bad94b9ba2d5 = _91a2259ffea9(8665).A;
      function h(_564d09f0fe7a, _cd89175f9633) {
        let _91a2259ffea9 = JSON.stringify(_564d09f0fe7a.dump()), _bed23b1c4e71 = `\n\t\tself.COOKIE = ${_91a2259ffea9};\n\t\t$studyjetLoadClient().loadAndHook(${JSON.stringify(_90a7406a509b.$W)});\n\t\tif ("document" in self && document?.currentScript) {\n\t\t\tdocument.currentScript.remove();\n\t\t}\n\t`, _e29815aa94d6 = y(_5452948ead4c.encode(_bed23b1c4e71));
        return [ _cd89175f9633(_90a7406a509b.$W.files.wasm), _cd89175f9633(_90a7406a509b.$W.files.all), _cd89175f9633("data:application/javascript;base64," + _e29815aa94d6) ];
      }
      let _5452948ead4c = new TextEncoder;
      function f(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9, _90a7406a509b = !1) {
        let _45080c7acefd = performance.now(), _d296cf17d9e2 = function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9, _90a7406a509b = !1) {
          let _bad94b9ba2d5 = new _e29815aa94d6.DV((_564d09f0fe7a, _cd89175f9633) => _cd89175f9633), _45080c7acefd = new _bed23b1c4e71.iX(_bad94b9ba2d5);
          if (_45080c7acefd.write(_564d09f0fe7a), _45080c7acefd.end(), function e(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
            if ("base" === _564d09f0fe7a.name && void 0 !== _564d09f0fe7a.attribs.href && (_91a2259ffea9.base = new URL(_564d09f0fe7a.attribs.href, _91a2259ffea9.origin)), 
            _564d09f0fe7a.attribs) {
              for (let _bed23b1c4e71 of _029290fe381e.V) for (let _e29815aa94d6 in _bed23b1c4e71) {
                let _d879eb489a78 = _bed23b1c4e71[_e29815aa94d6.toLowerCase()];
                if ("function" != typeof _d879eb489a78 && ("*" === _d879eb489a78 || _d879eb489a78.includes(_564d09f0fe7a.name)) && void 0 !== _564d09f0fe7a.attribs[_e29815aa94d6]) {
                  let _d879eb489a78 = _564d09f0fe7a.attribs[_e29815aa94d6], _d75b4034184e = _bed23b1c4e71.fn(_d879eb489a78, _91a2259ffea9, _cd89175f9633);
                  null === _d75b4034184e ? delete _564d09f0fe7a.attribs[_e29815aa94d6] : _564d09f0fe7a.attribs[_e29815aa94d6] = _d75b4034184e, 
                  _564d09f0fe7a.attribs[`studyjet-attr-${_e29815aa94d6}`] = _d879eb489a78;
                }
              }
              for (let [_cd89175f9633, _bed23b1c4e71] of Object.entries(_564d09f0fe7a.attribs)) _5695a624e761.includes(_cd89175f9633) && (_564d09f0fe7a.attribs[`studyjet-attr-${_cd89175f9633}`] = _bed23b1c4e71, 
              _564d09f0fe7a.attribs[_cd89175f9633] = (0, _775f64df6c74.o)(_bed23b1c4e71, `(inline ${_cd89175f9633} on element)`, _91a2259ffea9));
            }
            if ("style" === _564d09f0fe7a.name && void 0 !== _564d09f0fe7a.children[0] && (_564d09f0fe7a.children[0].data = (0, 
            _eced61b9ace5.s)(_564d09f0fe7a.children[0].data, _91a2259ffea9)), "script" === _564d09f0fe7a.name && "module" === _564d09f0fe7a.attribs.type && _564d09f0fe7a.attribs.src && (_564d09f0fe7a.attribs.src = _564d09f0fe7a.attribs.src + "?type=module"), 
            "script" === _564d09f0fe7a.name && "importmap" === _564d09f0fe7a.attribs.type && void 0 !== _564d09f0fe7a.children[0]) {
              let _cd89175f9633 = _564d09f0fe7a.children[0].data;
              try {
                let _bed23b1c4e71 = JSON.parse(_cd89175f9633);
                if (_bed23b1c4e71.imports) for (let _564d09f0fe7a in _bed23b1c4e71.imports) {
                  let _cd89175f9633 = _bed23b1c4e71.imports[_564d09f0fe7a];
                  "string" == typeof _cd89175f9633 && (_cd89175f9633 = (0, _d75b4034184e.Oy)(_cd89175f9633, _91a2259ffea9), 
                  _bed23b1c4e71.imports[_564d09f0fe7a] = _cd89175f9633);
                }
                _564d09f0fe7a.children[0].data = JSON.stringify(_bed23b1c4e71);
              } catch (e) {
                console.error("Failed to parse importmap JSON:", e);
              }
            }
            if ("script" === _564d09f0fe7a.name && /(application|text)\/javascript|module|undefined/.test(_564d09f0fe7a.attribs.type) && void 0 !== _564d09f0fe7a.children[0]) {
              let _cd89175f9633 = _564d09f0fe7a.children[0].data, _bed23b1c4e71 = "module" === _564d09f0fe7a.attribs.type;
              _564d09f0fe7a.attribs["studyjet-attr-script-source-src"] = y(_5452948ead4c.encode(_cd89175f9633)), 
              _cd89175f9633 = _cd89175f9633.replace(/<!--[\s\S]*?-->/g, ""), _564d09f0fe7a.children[0].data = (0, 
              _775f64df6c74.o)(_cd89175f9633, "(inline script element)", _91a2259ffea9, _bed23b1c4e71);
            }
            if ("meta" === _564d09f0fe7a.name && void 0 !== _564d09f0fe7a.attribs["http-equiv"]) {
              if ("content-security-policy" === _564d09f0fe7a.attribs["http-equiv"].toLowerCase()) _564d09f0fe7a = new _e29815aa94d6.Mw(_564d09f0fe7a.attribs.content); else if ("refresh" === _564d09f0fe7a.attribs["http-equiv"] && _564d09f0fe7a.attribs.content.includes("url")) {
                let _cd89175f9633 = _564d09f0fe7a.attribs.content.split("url=");
                _cd89175f9633[1] && (_cd89175f9633[1] = (0, _d75b4034184e.Oy)(_cd89175f9633[1].trim(), _91a2259ffea9)), 
                _564d09f0fe7a.attribs.content = _cd89175f9633.join("url=");
              }
            }
            if (_564d09f0fe7a.childNodes) for (let _bed23b1c4e71 in _564d09f0fe7a.childNodes) _564d09f0fe7a.childNodes[_bed23b1c4e71] = e(_564d09f0fe7a.childNodes[_bed23b1c4e71], _cd89175f9633, _91a2259ffea9);
            return _564d09f0fe7a;
          }(_bad94b9ba2d5.root, _cd89175f9633, _91a2259ffea9), _90a7406a509b) {
            let _564d09f0fe7a = function e(_564d09f0fe7a) {
              if (_564d09f0fe7a.type === _bed23b1c4e71.RJ.vw && "head" === _564d09f0fe7a.name) return _564d09f0fe7a;
              if (_564d09f0fe7a.childNodes) for (let _cd89175f9633 of _564d09f0fe7a.childNodes) {
                let _564d09f0fe7a = e(_cd89175f9633);
                if (_564d09f0fe7a) return _564d09f0fe7a;
              }
              return null;
            }(_bad94b9ba2d5.root);
            _564d09f0fe7a || (_564d09f0fe7a = new _e29815aa94d6.Hg("head", {}, []), _bad94b9ba2d5.root.children.unshift(_564d09f0fe7a)), 
            _564d09f0fe7a.children.unshift(...h(_cd89175f9633, _564d09f0fe7a => new _e29815aa94d6.Hg("script", {
              src: _564d09f0fe7a
            })));
          }
          return (0, _d879eb489a78.A)(_bad94b9ba2d5.root, {
            encodeEntities: "utf8",
            decodeEntities: !1
          });
        }(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9, _90a7406a509b);
        return _bad94b9ba2d5.time(_91a2259ffea9, _45080c7acefd, "html rewrite"), _d296cf17d9e2;
      }
      function g(_564d09f0fe7a) {
        let _cd89175f9633 = new _e29815aa94d6.DV((_564d09f0fe7a, _cd89175f9633) => _cd89175f9633), _91a2259ffea9 = new _bed23b1c4e71.iX(_cd89175f9633);
        return _91a2259ffea9.write(_564d09f0fe7a), _91a2259ffea9.end(), !function e(_564d09f0fe7a) {
          if ("attribs" in _564d09f0fe7a) for (let _cd89175f9633 in _564d09f0fe7a.attribs) {
            if ("studyjet-attr-script-source-src" == _cd89175f9633) {
              _564d09f0fe7a.children[0] && "data" in _564d09f0fe7a.children[0] && (_564d09f0fe7a.children[0].data = atob(_564d09f0fe7a.attribs[_cd89175f9633]));
              continue;
            }
            _cd89175f9633.startsWith("studyjet-attr-") && (_564d09f0fe7a.attribs[_cd89175f9633.slice(14)] = _564d09f0fe7a.attribs[_cd89175f9633], 
            delete _564d09f0fe7a.attribs[_cd89175f9633]);
          }
          if ("childNodes" in _564d09f0fe7a) for (let _cd89175f9633 of _564d09f0fe7a.childNodes) e(_cd89175f9633);
        }(_cd89175f9633.root), (0, _d879eb489a78.A)(_cd89175f9633.root, {
          decodeEntities: !1
        });
      }
      function m(_564d09f0fe7a, _cd89175f9633) {
        return _564d09f0fe7a.split(/ .*,/).map(_564d09f0fe7a => _564d09f0fe7a.trim()).map(_564d09f0fe7a => {
          let [_91a2259ffea9, ..._bed23b1c4e71] = _564d09f0fe7a.split(/\s+/), _e29815aa94d6 = (0, 
          _d75b4034184e.Oy)(_91a2259ffea9.trim(), _cd89175f9633);
          return _bed23b1c4e71.length > 0 ? `${_e29815aa94d6} ${_bed23b1c4e71.join(" ")}` : _e29815aa94d6;
        }).join(", ");
      }
      function y(_564d09f0fe7a) {
        return btoa(Array.from(_564d09f0fe7a, _564d09f0fe7a => String.fromCodePoint(_564d09f0fe7a)).join(""));
      }
      let _5695a624e761 = [ "onbeforexrselect", "onabort", "onbeforeinput", "onbeforematch", "onbeforetoggle", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncontentvisibilityautostatechange", "oncontextlost", "oncontextmenu", "oncontextrestored", "oncuechange", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "onformdata", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onresize", "onscroll", "onsecuritypolicyviolation", "onseeked", "onseeking", "onselect", "onslotchange", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "onvolumechange", "onwaiting", "onwebkitanimationend", "onwebkitanimationiteration", "onwebkitanimationstart", "onwebkittransitionend", "onwheel", "onauxclick", "ongotpointercapture", "onlostpointercapture", "onpointerdown", "onpointermove", "onpointerrawupdate", "onpointerup", "onpointercancel", "onpointerover", "onpointerout", "onpointerenter", "onpointerleave", "onselectstart", "onselectionchange", "onanimationend", "onanimationiteration", "onanimationstart", "ontransitionrun", "ontransitionstart", "ontransitionend", "ontransitioncancel", "oncopy", "oncut", "onpaste", "onscrollend", "onscrollsnapchange", "onscrollsnapchanging" ];
    },
    9381: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9(2614), _91a2259ffea9(4435), _91a2259ffea9(884), _91a2259ffea9(1478), 
      _91a2259ffea9(1472), _91a2259ffea9(2015), _91a2259ffea9(1561);
    },
    1478: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.d(_cd89175f9633, {
        o: () => s
      });
      var _bed23b1c4e71 = _91a2259ffea9(37), _e29815aa94d6 = _91a2259ffea9(1561), _d879eb489a78 = _91a2259ffea9(8665).A;
      function s(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9, _d75b4034184e = !1) {
        try {
          let _eced61b9ace5 = function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9, _bed23b1c4e71 = !1) {
            return function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9, _bed23b1c4e71) {
              let [_d75b4034184e, _eced61b9ace5] = (0, _e29815aa94d6.nb)(_91a2259ffea9);
              try {
                let _eced61b9ace5, _775f64df6c74 = performance.now();
                _eced61b9ace5 = "string" == typeof _564d09f0fe7a ? _d75b4034184e.rewrite_js(_564d09f0fe7a, _91a2259ffea9.base.href, _cd89175f9633 || "(unknown)", _bed23b1c4e71) : _d75b4034184e.rewrite_js_bytes(_564d09f0fe7a, _91a2259ffea9.base.href, _cd89175f9633 || "(unknown)", _bed23b1c4e71), 
                _d879eb489a78.time(_91a2259ffea9, _775f64df6c74, `oxc rewrite for "${_cd89175f9633 || "(unknown)"}"`);
                let {js: _90a7406a509b, map: _029290fe381e, scramtag: _bad94b9ba2d5, errors: _5452948ead4c} = _eced61b9ace5;
                return {
                  js: "string" == typeof _564d09f0fe7a ? _e29815aa94d6.su.decode(_90a7406a509b) : _90a7406a509b,
                  tag: _bad94b9ba2d5,
                  map: _029290fe381e,
                  errors: _5452948ead4c
                };
              } finally {
                _eced61b9ace5();
              }
            }(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9, _bed23b1c4e71);
          }(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9, _d75b4034184e), _775f64df6c74 = _eced61b9ace5.js;
          if ((0, _bed23b1c4e71.U5)("sourcemaps", _91a2259ffea9.base)) {
            let _564d09f0fe7a = globalThis[_bed23b1c4e71.$W.globals.pushsourcemapfn];
            if (_564d09f0fe7a) _564d09f0fe7a(Array.from(_eced61b9ace5.map), _eced61b9ace5.tag); else {
              _775f64df6c74 instanceof Uint8Array && (_775f64df6c74 = (new TextDecoder).decode(_775f64df6c74));
              let _564d09f0fe7a = `${_bed23b1c4e71.$W.globals.pushsourcemapfn}([${_eced61b9ace5.map.join(",")}], "${_eced61b9ace5.tag}");`, _cd89175f9633 = /^\s*(['"])use strict\1;?/;
              _775f64df6c74 = _cd89175f9633.test(_775f64df6c74) ? _775f64df6c74.replace(_cd89175f9633, `$&\n${_564d09f0fe7a}`) : `${_564d09f0fe7a}\n${_775f64df6c74}`;
            }
          }
          if ((0, _bed23b1c4e71.U5)("rewriterLogs", _91a2259ffea9.base)) for (let _564d09f0fe7a of _eced61b9ace5.errors) console.error("oxc parse error", _564d09f0fe7a);
          return _775f64df6c74;
        } catch (_d879eb489a78) {
          if (console.warn("failed rewriting js for", _cd89175f9633 || "(unknown)", _d879eb489a78.message, _564d09f0fe7a instanceof Uint8Array ? _e29815aa94d6.su.decode(_564d09f0fe7a) : _564d09f0fe7a), 
          (0, _bed23b1c4e71.U5)("allowInvalidJs", _91a2259ffea9.base)) return _564d09f0fe7a;
          throw _d879eb489a78;
        }
      }
      Error.stackTraceLimit = 50;
    },
    1472: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.d(_cd89175f9633, {
        $n: () => o,
        IP: () => s,
        Oy: () => l,
        v2: () => c
      });
      var _bed23b1c4e71 = _91a2259ffea9(37), _e29815aa94d6 = _91a2259ffea9(1478);
      function a(_564d09f0fe7a, _cd89175f9633) {
        try {
          return new URL(_564d09f0fe7a, _cd89175f9633);
        } catch {
          return null;
        }
      }
      function s(_564d09f0fe7a, _cd89175f9633) {
        let _91a2259ffea9 = new URL(_564d09f0fe7a.substring(5));
        return "blob:" + _cd89175f9633.origin.origin + _91a2259ffea9.pathname;
      }
      function o(_564d09f0fe7a) {
        let _cd89175f9633 = new URL(_564d09f0fe7a.substring(5));
        return "blob:" + location.origin + _cd89175f9633.pathname;
      }
      function l(_564d09f0fe7a, _cd89175f9633) {
        if (_564d09f0fe7a instanceof URL && (_564d09f0fe7a = _564d09f0fe7a.toString()), 
        _564d09f0fe7a.startsWith("javascript:")) return "javascript:" + (0, _e29815aa94d6.o)(_564d09f0fe7a.slice(11), "(javascript: url)", _cd89175f9633);
        {
          if (_564d09f0fe7a.startsWith("blob:") || _564d09f0fe7a.startsWith("data:")) return location.origin + _bed23b1c4e71.$W.prefix + _564d09f0fe7a;
          if (_564d09f0fe7a.startsWith("mailto:") || _564d09f0fe7a.startsWith("about:")) return _564d09f0fe7a;
          let _91a2259ffea9 = _cd89175f9633.base.href;
          _91a2259ffea9.startsWith("about:") && (_91a2259ffea9 = c(self.location.href));
          let _e29815aa94d6 = a(_564d09f0fe7a, _91a2259ffea9);
          if (!_e29815aa94d6) return _564d09f0fe7a;
          let _d879eb489a78 = (0, _bed23b1c4e71.hD)(_e29815aa94d6.hash.slice(1));
          return _e29815aa94d6.hash = "", location.origin + _bed23b1c4e71.$W.prefix + (0, 
          _bed23b1c4e71.hD)(_e29815aa94d6.href) + (_d879eb489a78 ? "#" + _d879eb489a78 : "");
        }
      }
      function c(_564d09f0fe7a) {
        _564d09f0fe7a instanceof URL && (_564d09f0fe7a = _564d09f0fe7a.toString());
        let _cd89175f9633 = location.origin + _bed23b1c4e71.$W.prefix;
        if (_564d09f0fe7a.startsWith("javascript:")) return _564d09f0fe7a;
        {
          if (_564d09f0fe7a.startsWith("blob:")) return _564d09f0fe7a;
          if (_564d09f0fe7a.startsWith(_cd89175f9633 + "blob:") || _564d09f0fe7a.startsWith(_cd89175f9633 + "data:")) return _564d09f0fe7a.substring(_cd89175f9633.length);
          if (_564d09f0fe7a.startsWith("mailto:") || _564d09f0fe7a.startsWith("about:")) return _564d09f0fe7a;
          let _91a2259ffea9 = a(_564d09f0fe7a);
          if (!_91a2259ffea9) return _564d09f0fe7a;
          let _e29815aa94d6 = (0, _bed23b1c4e71.P_)(_91a2259ffea9.hash.slice(1));
          return _91a2259ffea9.hash = "", (0, _bed23b1c4e71.P_)(_91a2259ffea9.href.slice(_cd89175f9633.length) + (_e29815aa94d6 ? "#" + _e29815aa94d6 : ""));
        }
      }
    },
    1561: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      let _bed23b1c4e71;
      _91a2259ffea9.d(_cd89175f9633, {
        n$: () => d,
        nb: () => g,
        su: () => _bad94b9ba2d5
      });
      var _e29815aa94d6 = _91a2259ffea9(3907), _d879eb489a78 = _91a2259ffea9(37), _d75b4034184e = _91a2259ffea9(1472), _eced61b9ace5 = _91a2259ffea9(2393), _775f64df6c74 = _91a2259ffea9(2614), _90a7406a509b = _91a2259ffea9(1478), _029290fe381e = _91a2259ffea9(884);
      async function d() {
        _bed23b1c4e71 = new Uint8Array(await fetch(_d879eb489a78.$W.files.wasm).then(_564d09f0fe7a => _564d09f0fe7a.arrayBuffer()));
      }
      self.WASM && (_bed23b1c4e71 = Uint8Array.from(atob(self.WASM), _564d09f0fe7a => _564d09f0fe7a.charCodeAt(0)));
      let _bad94b9ba2d5 = new TextDecoder, _5452948ead4c = "\0asm".split("").map(_564d09f0fe7a => _564d09f0fe7a.charCodeAt(0)), _5695a624e761 = [];
      function g(_564d09f0fe7a) {
        let _cd89175f9633;
        if (!(_bed23b1c4e71 instanceof Uint8Array)) throw Error("rewriter wasm not found (was it fetched correctly?)");
        if (![ ..._bed23b1c4e71.slice(0, 4) ].every((_564d09f0fe7a, _cd89175f9633) => _564d09f0fe7a === _5452948ead4c[_cd89175f9633])) throw Error("rewriter wasm does not have wasm magic (was it fetched correctly?)\nrewriter wasm contents: " + _bad94b9ba2d5.decode(_bed23b1c4e71));
        (0, _e29815aa94d6.QR)({
          module: new WebAssembly.Module(_bed23b1c4e71)
        });
        let _91a2259ffea9 = _5695a624e761.findIndex(_564d09f0fe7a => !_564d09f0fe7a.inUse), _45080c7acefd = _5695a624e761.length;
        return -1 === _91a2259ffea9 ? ((0, _d879eb489a78.U5)("rewriterLogs", _564d09f0fe7a.base) && console.log(`creating new rewriter, ${_45080c7acefd} rewriters made already`), 
        _cd89175f9633 = {
          rewriter: new _e29815aa94d6.LW({
            config: _d879eb489a78.$W,
            shared: {
              rewrite: {
                htmlRules: _eced61b9ace5.V,
                rewriteUrl: _d75b4034184e.Oy,
                rewriteCss: _775f64df6c74.s,
                rewriteJs: _90a7406a509b.o,
                getHtmlInjectCode(_564d09f0fe7a, _cd89175f9633) {
                  let _91a2259ffea9 = (0, _029290fe381e.Uk)(_564d09f0fe7a, _564d09f0fe7a => `<script src="${_564d09f0fe7a}"><\/script>`).join("");
                  return _cd89175f9633 ? `<head>${_91a2259ffea9}</head>` : _91a2259ffea9;
                }
              }
            },
            flagEnabled: _d879eb489a78.U5,
            codec: {
              encode: _d879eb489a78.hD,
              decode: _d879eb489a78.P_
            }
          }),
          inUse: !1
        }, _5695a624e761.push(_cd89175f9633)) : ((0, _d879eb489a78.U5)("rewriterLogs", _564d09f0fe7a.base) && console.log(`using cached rewriter ${_91a2259ffea9} from list of ${_45080c7acefd} rewriters`), 
        _cd89175f9633 = _5695a624e761[_91a2259ffea9]), _cd89175f9633.inUse = !0, [ _cd89175f9633.rewriter, () => _cd89175f9633.inUse = !1 ];
      }
    },
    2015: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.d(_cd89175f9633, {
        i: () => a
      });
      var _bed23b1c4e71 = _91a2259ffea9(37), _e29815aa94d6 = _91a2259ffea9(1478);
      function a(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9, _d879eb489a78) {
        let _d75b4034184e = "", _eced61b9ace5 = "module" === _cd89175f9633, l = _564d09f0fe7a => {
          _eced61b9ace5 ? _d75b4034184e += `import "${_bed23b1c4e71.$W.files[_564d09f0fe7a]}"\n` : _d75b4034184e += `importScripts("${_bed23b1c4e71.$W.files[_564d09f0fe7a]}");\n`;
        };
        l("wasm"), l("all"), _d75b4034184e += `$studyjetLoadClient().loadAndHook(${JSON.stringify(_bed23b1c4e71.$W)});`;
        let _775f64df6c74 = (0, _e29815aa94d6.o)(_564d09f0fe7a, _91a2259ffea9, _d879eb489a78, _eced61b9ace5);
        return _775f64df6c74 instanceof Uint8Array && (_775f64df6c74 = (new TextDecoder).decode(_775f64df6c74)), 
        _d75b4034184e += _775f64df6c74;
      }
    },
    6684: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.d(_cd89175f9633, {
        Sn: () => h,
        YH: () => u,
        Yq: () => f,
        hU: () => d,
        pL: () => p,
        rj: () => c
      });
      var _bed23b1c4e71 = _91a2259ffea9(6570);
      let _e29815aa94d6 = {
        none: 0,
        "same-origin": 1,
        "same-site": 2,
        "cross-site": 3
      };
      async function a() {
        return (0, _bed23b1c4e71.P2)("@d7a6431b92e", 1);
      }
      async function s(_564d09f0fe7a) {
        let _cd89175f9633 = await a();
        return await _cd89175f9633.get("redirectTrackers", _564d09f0fe7a) || null;
      }
      async function o(_564d09f0fe7a, _cd89175f9633) {
        let _91a2259ffea9 = await a();
        await _91a2259ffea9.put("redirectTrackers", _cd89175f9633, _564d09f0fe7a);
      }
      async function l(_564d09f0fe7a) {
        let _cd89175f9633 = await a();
        await _cd89175f9633.delete("redirectTrackers", _564d09f0fe7a);
      }
      async function c(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
        await s(_564d09f0fe7a) || await o(_564d09f0fe7a, {
          originalReferrer: _cd89175f9633 || "",
          mostRestrictiveSite: _91a2259ffea9,
          referrerPolicy: "",
          chainStarted: Date.now()
        });
      }
      async function u(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
        let _bed23b1c4e71 = await s(_564d09f0fe7a);
        _bed23b1c4e71 && (await l(_564d09f0fe7a), _91a2259ffea9 && (_bed23b1c4e71.referrerPolicy = _91a2259ffea9), 
        await o(_cd89175f9633, _bed23b1c4e71));
      }
      async function d(_564d09f0fe7a, _cd89175f9633) {
        let _91a2259ffea9 = await s(_564d09f0fe7a);
        if (!_91a2259ffea9) return _cd89175f9633;
        let _bed23b1c4e71 = _e29815aa94d6[_91a2259ffea9.mostRestrictiveSite];
        return (_e29815aa94d6[_cd89175f9633] ?? 0) > _bed23b1c4e71 ? (_91a2259ffea9.mostRestrictiveSite = _cd89175f9633, 
        await o(_564d09f0fe7a, _91a2259ffea9), _cd89175f9633) : _91a2259ffea9.mostRestrictiveSite;
      }
      async function h(_564d09f0fe7a) {
        await l(_564d09f0fe7a);
      }
      async function p(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
        let _bed23b1c4e71 = await a();
        await _bed23b1c4e71.put("referrerPolicies", {
          policy: _cd89175f9633,
          referrer: _91a2259ffea9
        }, _564d09f0fe7a);
      }
      async function f(_564d09f0fe7a) {
        let _cd89175f9633 = await a();
        return await _cd89175f9633.get("referrerPolicies", _564d09f0fe7a) || null;
      }
    },
    2416: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9(6684), _91a2259ffea9(8228);
    },
    8228: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.d(_cd89175f9633, {
        ps: () => l
      });
      var _bed23b1c4e71 = _91a2259ffea9(6570);
      let _e29815aa94d6 = "publicSuffixList";
      async function a() {
        return (0, _bed23b1c4e71.P2)("@d7a6431b92e", 1);
      }
      async function s() {
        let _564d09f0fe7a = await a();
        return await _564d09f0fe7a.get("publicSuffixList", _e29815aa94d6) || null;
      }
      async function o(_564d09f0fe7a) {
        let _cd89175f9633 = await a();
        await _cd89175f9633.put("publicSuffixList", {
          data: _564d09f0fe7a,
          expiry: Date.now() + 36e5
        }, _e29815aa94d6);
      }
      async function l(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
        return _cd89175f9633 ? _564d09f0fe7a.origin.origin === _cd89175f9633.origin ? "same-origin" : await c(_564d09f0fe7a.origin, _cd89175f9633, _91a2259ffea9) ? "same-site" : "cross-site" : "none";
      }
      async function c(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
        return await u(_564d09f0fe7a, _91a2259ffea9) === await u(_cd89175f9633, _91a2259ffea9);
      }
      async function u(_564d09f0fe7a, _cd89175f9633) {
        let _91a2259ffea9 = await d(_cd89175f9633), _bed23b1c4e71 = _564d09f0fe7a.hostname.toLowerCase().split("."), _e29815aa94d6 = "", _d879eb489a78 = !1;
        for (let _564d09f0fe7a of _91a2259ffea9) {
          let _cd89175f9633 = _564d09f0fe7a.startsWith("!") ? _564d09f0fe7a.substring(1) : _564d09f0fe7a;
          if (function(_564d09f0fe7a, _cd89175f9633) {
            if (_564d09f0fe7a.length < _cd89175f9633.length) return !1;
            let _91a2259ffea9 = _564d09f0fe7a.length - _cd89175f9633.length;
            for (let _bed23b1c4e71 = 0; _bed23b1c4e71 < _cd89175f9633.length; _bed23b1c4e71++) {
              let _e29815aa94d6 = _564d09f0fe7a[_91a2259ffea9 + _bed23b1c4e71], _d879eb489a78 = _cd89175f9633[_bed23b1c4e71];
              if ("*" !== _d879eb489a78 && _e29815aa94d6 !== _d879eb489a78) return !1;
            }
            return !0;
          }(_bed23b1c4e71, _cd89175f9633.split("."))) {
            if (_564d09f0fe7a.startsWith("!")) {
              _e29815aa94d6 = _cd89175f9633, _d879eb489a78 = !0;
              break;
            }
            !_d879eb489a78 && _cd89175f9633.length > _e29815aa94d6.length && (_e29815aa94d6 = _cd89175f9633);
          }
        }
        if (!_e29815aa94d6) return _bed23b1c4e71.slice(-2).join(".");
        let _d75b4034184e = _e29815aa94d6.split(".").length, _eced61b9ace5 = _d879eb489a78 ? _d75b4034184e : _d75b4034184e + 1;
        return _bed23b1c4e71.slice(-_eced61b9ace5).join(".");
      }
      async function d(_564d09f0fe7a) {
        let _cd89175f9633, _91a2259ffea9 = await s();
        if (_91a2259ffea9 && Date.now() < _91a2259ffea9.expiry) return _91a2259ffea9.data;
        try {
          _cd89175f9633 = await _564d09f0fe7a.fetch("https://publicsuffix.org/list/public_suffix_list.dat");
        } catch (_564d09f0fe7a) {
          throw Error(`Failed to fetch public suffix list: ${_564d09f0fe7a}`);
        }
        let _bed23b1c4e71 = (await _cd89175f9633.text()).split("\n").map(_564d09f0fe7a => {
          let _cd89175f9633 = _564d09f0fe7a.trim(), _91a2259ffea9 = _cd89175f9633.indexOf(" ");
          return _91a2259ffea9 > -1 ? _cd89175f9633.substring(0, _91a2259ffea9) : _cd89175f9633;
        }).filter(_564d09f0fe7a => _564d09f0fe7a && !_564d09f0fe7a.startsWith("//"));
        return await o(_bed23b1c4e71), _bed23b1c4e71;
      }
    },
    2794: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.d(_cd89175f9633, {
        pX: () => _bed23b1c4e71,
        zr: () => _e29815aa94d6
      });
      let _bed23b1c4e71 = Symbol.for("studyjet client global"), _e29815aa94d6 = Symbol.for("studyjet frame handle");
    },
    5956: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      function n(_564d09f0fe7a, _cd89175f9633) {
        let _91a2259ffea9 = `\n                errorTrace.value = ${JSON.stringify(_564d09f0fe7a)};\n                fetchedURL.textContent = ${JSON.stringify(_cd89175f9633)};\n                for (const node of document.querySelectorAll("#hostname")) node.textContent = ${JSON.stringify(location.hostname)};\n                reload.addEventListener("click", () => location.reload());\n                version.textContent = ${JSON.stringify(globalThis.$studyjetVersion?.version || "unknown")};\n                build.textContent = ${JSON.stringify(globalThis.$studyjetVersion?.build || "unknown")};\n\n                document.getElementById('copy-button').addEventListener('click', async () => {\n                    const text = document.getElementById('errorTrace').value;\n                    await navigator.clipboard.writeText(text);\n                    const btn = document.getElementById('copy-button');\n                    btn.textContent = 'Copied!';\n                    setTimeout(() => btn.textContent = 'Copy', 2000);\n                });\n        `;
        return `<!DOCTYPE html>\n            <html>\n                <head>\n                    <meta charset="utf-8" />\n                    <title>StudyJet</title>\n                    <style>\n                    :root {\n                        --deep: #080602;\n                        --shallow: #181412;\n                        --beach: #f1e8e1;\n                        --shore: #b1a8a1;\n                        --accent: #ffa938;\n                        --font-sans: -apple-system, system-ui, BlinkMacSystemFont, sans-serif;\n                        --font-monospace: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n                    }\n\n                    *:not(div,p,span,ul,li,i,span) {\n                        background-color: var(--deep);\n                        color: var(--beach);\n                        font-family: var(--font-sans);\n                    }\n\n                    textarea,\n                    button {\n                        background-color: var(--shallow);\n                        border-radius: 0.6em;\n                        padding: 0.6em;\n                        border: none;\n                        appearance: none;\n                        font-family: var(--font-sans);\n                        color: var(--beach);\n                    }\n\n                    button.primary {\n                        background-color: var(--accent);\n                        color: var(--deep);\n                        font-weight: bold;\n                    }\n\n                    textarea {\n                        resize: none;\n                        height: 20em;\n                        text-align: left;\n                        font-family: var(--font-monospace);\n                    }\n\n                    body {\n                        width: 100vw;\n                        height: 100vh;\n                        justify-content: center;\n                        align-items: center;\n                    }\n\n                    body,\n                    html,\n                    #inner {\n                        display: flex;\n                        align-items: center;\n                        flex-direction: column;\n                        gap: 0.5em;\n                        overflow: hidden;\n                    }\n\n                    #inner {\n                        z-index: 100;\n                    }\n\n                    #cover {\n                        position: absolute;\n                        width: 100%;\n                        height: 100%;\n                        background-color: color-mix(in srgb, var(--deep) 70%, transparent);\n                        z-index: 99;\n                    }\n\n                    #info {\n                        display: flex;\n                        flex-direction: row;\n                        align-items: flex-start;\n                        gap: 1em;\n                    }\n\n                    #version-wrapper {\n                        width: auto;\n                        text-align: right;\n                        position: absolute;\n                        top: 0.5rem;\n                        right: 0.5rem;\n                        font-size: 0.8rem;\n                        color: var(--shore)!important;\n                        i {\n                            background-color: color-mix(in srgb, var(--deep), transparent 50%);\n                            border-radius: 9999px;\n                            padding: 0.2em 0.5em;\n                        }\n                        z-index: 101;\n                    }\n\n                    #errorTrace-wrapper {\n                        position: relative;\n                        width: fit-content;\n                    }\n\n                    #copy-button {\n                        position: absolute;\n                        top: 0.5em;\n                        right: 0.5em;\n                        padding: 0.23em;\n                        cursor: pointer;\n                        opacity: 0;\n                        transition: opacity 0.4s;\n                        font-size: 0.9em;\n                    }\n\n                    #errorTrace-wrapper:hover #copy-button {\n                        opacity: 1;\n                    }\n                    </style>\n                </head>\n                <body>\n                    <div id="cover"></div>\n                    <div id="inner">\n                        <h1 id="errorTitle">Uh oh!</h1>\n                        <p>There was an error loading <b id="fetchedURL"></b></p>\n                        \x3c!-- <p id="errorMessage">Internal Server Error</p> --\x3e\n\n                        <div id="info">\n                            <div id="errorTrace-wrapper">\n                                <textarea id="errorTrace" cols="40" rows="10" readonly></textarea>\n                                <button id="copy-button" class="primary">Copy</button>\n                            </div>\n                            <div id="troubleshooting">\n                                <p>Try:</p>\n                                <ul>\n                                    <li>Checking your internet connection</li>\n                                    <li>Verifying you entered the correct address</li>\n                                    <li>Clearing the site data</li>\n                                    <li>Contacting <b id="hostname"></b>'s administrator</li>\n                                    <li>Verify the server isn't censored</li>\n                                </ul>\n                                <p>If you're the administrator of <b id="hostname"></b>, try:</p>\n                                    <ul>\n                                    <li>Restarting your server</li>\n                                    <li>Updating StudyJet</li>\n                                    <li>Troubleshooting the error on the <a href="https://github.com/MercuryWorkshop/studyjet" target="_blank">GitHub repository</a></li>\n                                </ul>\n                            </div>\n                        </div>\n                        <br>\n                        <button id="reload" class="primary">Reload</button>\n                    </div>\n                    <p id="version-wrapper"><i>StudyJet v<span id="version"></span> (build <span id="build"></span>)</i></p>\n                    <script src="${"data:application/javascript," + encodeURIComponent(_91a2259ffea9)}"><\/script>\n                </body>\n            </html>\n        `;
      }
      function i(_564d09f0fe7a, _cd89175f9633) {
        let _91a2259ffea9 = {
          "content-type": "text/html"
        };
        return crossOriginIsolated && (_91a2259ffea9["Cross-Origin-Embedder-Policy"] = "require-corp"), 
        new Response(n(String(_564d09f0fe7a), _cd89175f9633), {
          status: 500,
          headers: _91a2259ffea9
        });
      }
      _91a2259ffea9.d(_cd89175f9633, {
        B: () => n,
        v: () => i
      });
    },
    1403: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.d(_cd89175f9633, {
        H: () => n
      });
      class n {
        handle;
        origin;
        syncToken=0;
        promises={};
        messageChannel=new MessageChannel;
        connected=!1;
        constructor(_564d09f0fe7a, _cd89175f9633) {
          this.handle = _564d09f0fe7a, this.origin = _cd89175f9633, this.messageChannel.port1.addEventListener("message", _564d09f0fe7a => {
            "studyjet$type" in _564d09f0fe7a.data && ("init" === _564d09f0fe7a.data.studyjet$type ? this.connected = !0 : this.handleMessage(_564d09f0fe7a.data));
          }), this.messageChannel.port1.start(), this.handle.postMessage({
            studyjet$type: "init",
            studyjet$port: this.messageChannel.port2
          }, [ this.messageChannel.port2 ]);
        }
        handleMessage(_564d09f0fe7a) {
          let _cd89175f9633 = this.promises[_564d09f0fe7a.studyjet$token];
          _cd89175f9633 && (_cd89175f9633(_564d09f0fe7a), delete this.promises[_564d09f0fe7a.studyjet$token]);
        }
        async fetch(_564d09f0fe7a) {
          let _cd89175f9633 = this.syncToken++, _91a2259ffea9 = {
            studyjet$type: "fetch",
            studyjet$token: _cd89175f9633,
            studyjet$request: {
              url: _564d09f0fe7a.url,
              body: _564d09f0fe7a.body,
              headers: Array.from(_564d09f0fe7a.headers.entries()),
              method: _564d09f0fe7a.method,
              mode: _564d09f0fe7a.mode,
              destinitation: _564d09f0fe7a.destination
            }
          }, _bed23b1c4e71 = _564d09f0fe7a.body ? [ _564d09f0fe7a.body ] : [];
          this.handle.postMessage(_91a2259ffea9, _bed23b1c4e71);
          let {studyjet$response: _e29815aa94d6} = await new Promise(_564d09f0fe7a => {
            this.promises[_cd89175f9633] = _564d09f0fe7a;
          });
          return !!_e29815aa94d6 && new Response(_e29815aa94d6.body, {
            headers: _e29815aa94d6.headers,
            status: _e29815aa94d6.status,
            statusText: _e29815aa94d6.statusText
          });
        }
      }
    },
    5790: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.d(_cd89175f9633, {
        Pf: () => m,
        V3: () => S,
        dT: () => w
      });
      var _bed23b1c4e71 = _91a2259ffea9(5956), _e29815aa94d6 = _91a2259ffea9(8228), _d879eb489a78 = _91a2259ffea9(6684), _d75b4034184e = _91a2259ffea9(1472), _eced61b9ace5 = _91a2259ffea9(1478), _775f64df6c74 = _91a2259ffea9(1427), _90a7406a509b = _91a2259ffea9(37), _029290fe381e = _91a2259ffea9(4435), _bad94b9ba2d5 = _91a2259ffea9(884), _5452948ead4c = _91a2259ffea9(2614), _5695a624e761 = _91a2259ffea9(2015), _45080c7acefd = _91a2259ffea9(8665).A;
      function g(_564d09f0fe7a) {
        return _564d09f0fe7a.status >= 300 && _564d09f0fe7a.status < 400;
      }
      async function m(_564d09f0fe7a, _cd89175f9633) {
        try {
          let _91a2259ffea9, _bed23b1c4e71, _eced61b9ace5 = new URL(_564d09f0fe7a.url);
          if (_eced61b9ace5.pathname === this.config.files.wasm) return fetch(this.config.files.wasm).then(async _564d09f0fe7a => {
            let _cd89175f9633 = await _564d09f0fe7a.arrayBuffer(), _91a2259ffea9 = btoa(new Uint8Array(_cd89175f9633).reduce((_564d09f0fe7a, _cd89175f9633) => (_564d09f0fe7a.push(String.fromCharCode(_cd89175f9633)), 
            _564d09f0fe7a), []).join("")), _bed23b1c4e71 = "";
            return _bed23b1c4e71 += `if ('document' in self && document.currentScript) { document.currentScript.remove(); }\nself.WASM = '${_91a2259ffea9}';`, 
            new Response(_bed23b1c4e71, {
              headers: {
                "content-type": "text/javascript"
              }
            });
          });
          let _029290fe381e = "", _bad94b9ba2d5 = {};
          for (let [_564d09f0fe7a, _cd89175f9633] of [ ..._eced61b9ace5.searchParams.entries() ]) {
            switch (_564d09f0fe7a) {
             case "type":
              _029290fe381e = _cd89175f9633;
              break;

             case "dest":
              break;

             case "topFrame":
              _91a2259ffea9 = _cd89175f9633;
              break;

             case "parentFrame":
              _bed23b1c4e71 = _cd89175f9633;
              break;

             default:
              _45080c7acefd.warn(`${_eced61b9ace5.href} extraneous query parameter ${_564d09f0fe7a}. Assuming <form> element`), 
              _bad94b9ba2d5[_564d09f0fe7a] = _cd89175f9633;
            }
            _eced61b9ace5.searchParams.delete(_564d09f0fe7a);
          }
          let _5452948ead4c = new URL((0, _d75b4034184e.v2)(_eced61b9ace5));
          for (let [_564d09f0fe7a, _cd89175f9633] of Object.entries(_bad94b9ba2d5)) _5452948ead4c.searchParams.set(_564d09f0fe7a, _cd89175f9633);
          let _5695a624e761 = {
            origin: _5452948ead4c,
            base: _5452948ead4c,
            topFrameName: _91a2259ffea9,
            parentFrameName: _bed23b1c4e71
          };
          if (_eced61b9ace5.pathname.startsWith(`${this.config.prefix}blob:`) || _eced61b9ace5.pathname.startsWith(`${this.config.prefix}data:`)) {
            let _cd89175f9633, _91a2259ffea9 = _eced61b9ace5.pathname.substring(this.config.prefix.length);
            _91a2259ffea9.startsWith("blob:") && (_91a2259ffea9 = (0, _d75b4034184e.$n)(_91a2259ffea9));
            let _bed23b1c4e71 = await fetch(_91a2259ffea9, {});
            _bed23b1c4e71.finalURL = _91a2259ffea9.startsWith("blob:") ? _91a2259ffea9 : "(data url)", 
            _bed23b1c4e71.body && (_cd89175f9633 = await b(_bed23b1c4e71, _5695a624e761, _564d09f0fe7a.destination, _029290fe381e, this.cookieStore));
            let _e29815aa94d6 = Object.fromEntries(_bed23b1c4e71.headers.entries());
            return crossOriginIsolated && (_e29815aa94d6["Cross-Origin-Opener-Policy"] = "same-origin", 
            _e29815aa94d6["Cross-Origin-Embedder-Policy"] = "require-corp"), new Response(_cd89175f9633, {
              status: _bed23b1c4e71.status,
              statusText: _bed23b1c4e71.statusText,
              headers: _e29815aa94d6
            });
          }
          let _d296cf17d9e2 = this.serviceWorkers.find(_564d09f0fe7a => _564d09f0fe7a.origin === _5452948ead4c.origin);
          if (_d296cf17d9e2?.connected && "swruntime" !== _eced61b9ace5.searchParams.get("from")) {
            let _cd89175f9633 = await _d296cf17d9e2.fetch(_564d09f0fe7a);
            if (_cd89175f9633) return _cd89175f9633;
          }
          if (_5452948ead4c.origin === new URL(_564d09f0fe7a.url).origin) throw Error("attempted to fetch from same origin - this means the site has obtained a reference to the real origin, aborting");
          let _5c1b0936347c = new _775f64df6c74.u;
          for (let [_cd89175f9633, _91a2259ffea9] of _564d09f0fe7a.headers.entries()) _5c1b0936347c.set(_cd89175f9633, _91a2259ffea9);
          if (_cd89175f9633 && new URL(_cd89175f9633.url).pathname.startsWith(_90a7406a509b.$W.prefix)) {
            let _564d09f0fe7a = new URL((0, _d75b4034184e.v2)(_cd89175f9633.url));
            _564d09f0fe7a.toString().includes("youtube.com") || (_5c1b0936347c.set("Referer", _564d09f0fe7a.href), 
            _5c1b0936347c.set("Origin", _564d09f0fe7a.origin));
          }
          let _7b12d72b7dbd = this.cookieStore.getCookies(_5452948ead4c, !1);
          _7b12d72b7dbd.length && _5c1b0936347c.set("Cookie", _7b12d72b7dbd);
          let _20b30412704a = !1;
          if ("iframe" === _564d09f0fe7a.destination && "navigate" === _564d09f0fe7a.mode && _564d09f0fe7a.referrer && "no-referrer" !== _564d09f0fe7a.referrer && _564d09f0fe7a.referrer !== location.origin + _90a7406a509b.$W.prefix + "no-referrer") {
            let _cd89175f9633 = _564d09f0fe7a.referrer, _91a2259ffea9 = await self.clients.matchAll({
              type: "window"
            });
            for (;_cd89175f9633; ) {
              if (!_cd89175f9633.includes(_90a7406a509b.$W.prefix)) {
                _20b30412704a = !0;
                break;
              }
              let _564d09f0fe7a = _91a2259ffea9.find(_564d09f0fe7a => _564d09f0fe7a.url === _cd89175f9633), _bed23b1c4e71 = await (0, 
              _d879eb489a78.Yq)(_cd89175f9633);
              if (!_bed23b1c4e71 || !_bed23b1c4e71.referrer) {
                _564d09f0fe7a && _cd89175f9633.startsWith(location.origin) && (_20b30412704a = !0);
                break;
              }
              if (_564d09f0fe7a && "nested" === _564d09f0fe7a.frameType) _cd89175f9633 = _bed23b1c4e71.referrer; else break;
            }
          }
          _20b30412704a ? (_5c1b0936347c.set("Sec-Fetch-Dest", "document"), _5c1b0936347c.set("Sec-Fetch-Mode", "navigate")) : (_5c1b0936347c.set("Sec-Fetch-Dest", _564d09f0fe7a.destination || "empty"), 
          _5c1b0936347c.set("Sec-Fetch-Mode", _564d09f0fe7a.mode));
          let _b5be100de146 = "none";
          if (_564d09f0fe7a.referrer && "" !== _564d09f0fe7a.referrer && "no-referrer" !== _564d09f0fe7a.referrer && _564d09f0fe7a.referrer !== location.origin + _90a7406a509b.$W.prefix + "no-referrer" && _564d09f0fe7a.referrer.includes(_90a7406a509b.$W.prefix)) {
            let _cd89175f9633 = (0, _d75b4034184e.v2)(_564d09f0fe7a.referrer);
            if (_cd89175f9633) {
              let _564d09f0fe7a = new URL(_cd89175f9633);
              _b5be100de146 = await (0, _e29815aa94d6.ps)(_5695a624e761, _564d09f0fe7a, this.client);
            }
          }
          await (0, _d879eb489a78.rj)(_5452948ead4c.toString(), _564d09f0fe7a.referrer ? (0, 
          _d75b4034184e.v2)(_564d09f0fe7a.referrer) : null, _b5be100de146), _5c1b0936347c.set("Sec-Fetch-Site", await (0, 
          _d879eb489a78.hU)(_5452948ead4c.toString(), _b5be100de146));
          let _0ca58fe238f7 = new S(_5452948ead4c, _5c1b0936347c.headers, _564d09f0fe7a.body, _564d09f0fe7a.method, _564d09f0fe7a.destination, _cd89175f9633);
          this.dispatchEvent(_0ca58fe238f7);
          let _7a20418fa422 = await _0ca58fe238f7.response || await this.client.fetch(_0ca58fe238f7.url, {
            method: _0ca58fe238f7.method,
            body: _0ca58fe238f7.body,
            headers: _0ca58fe238f7.requestHeaders,
            credentials: "omit",
            mode: "cors" === _564d09f0fe7a.mode ? _564d09f0fe7a.mode : "same-origin",
            cache: _564d09f0fe7a.cache,
            redirect: "manual",
            duplex: "half"
          });
          return _7a20418fa422.finalURL = _0ca58fe238f7.url.href, await y(_5452948ead4c, _5695a624e761, _029290fe381e, _564d09f0fe7a.destination, _564d09f0fe7a.mode, _7a20418fa422, this.cookieStore, _cd89175f9633, this.client, this, _564d09f0fe7a.referrer);
        } catch (_cd89175f9633) {
          let _91a2259ffea9 = {
            message: _cd89175f9633.message,
            url: _564d09f0fe7a.url,
            destination: _564d09f0fe7a.destination
          };
          if (_cd89175f9633.cause && (_91a2259ffea9.cause = _cd89175f9633.cause, _cd89175f9633.cause instanceof AggregateError && (_91a2259ffea9.causeErrors = _cd89175f9633.cause.errors)), 
          _cd89175f9633.stack && (_91a2259ffea9.stack = _cd89175f9633.stack), console.error("ERROR FROM SERVICE WORKER FETCH: ", _91a2259ffea9), 
          console.error(_cd89175f9633), ![ "document", "iframe" ].includes(_564d09f0fe7a.destination)) return new Response(void 0, {
            status: 500
          });
          let _e29815aa94d6 = Object.entries(_91a2259ffea9).map(([_564d09f0fe7a, _cd89175f9633]) => `${_564d09f0fe7a.charAt(0).toUpperCase() + _564d09f0fe7a.slice(1)}: ${_cd89175f9633}`).join("\n\n");
          return (0, _bed23b1c4e71.v)(_e29815aa94d6, (0, _d75b4034184e.v2)(_564d09f0fe7a.url));
        }
      }
      async function y(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9, _bed23b1c4e71, _eced61b9ace5, _775f64df6c74, _bad94b9ba2d5, _5452948ead4c, _5695a624e761, _45080c7acefd, _d296cf17d9e2) {
        let _5c1b0936347c, _7b12d72b7dbd = "navigate" === _eced61b9ace5 && [ "document", "iframe" ].includes(_bed23b1c4e71), _20b30412704a = await (0, 
        _029290fe381e.l)(_775f64df6c74.rawHeaders, _cd89175f9633, _5695a624e761, {
          get: _d879eb489a78.Yq,
          set: _d879eb489a78.pL
        });
        if (_7b12d72b7dbd && _20b30412704a["referrer-policy"] && _d296cf17d9e2 && await (0, 
        _d879eb489a78.pL)(_564d09f0fe7a.href, _20b30412704a["referrer-policy"], _d296cf17d9e2), 
        g(_775f64df6c74)) {
          let _cd89175f9633 = new URL((0, _d75b4034184e.v2)(_20b30412704a.location));
          await (0, _d879eb489a78.YH)(_564d09f0fe7a.toString(), _cd89175f9633.toString(), _20b30412704a["referrer-policy"]);
          let _bed23b1c4e71 = await (0, _e29815aa94d6.ps)({
            origin: _cd89175f9633,
            base: _cd89175f9633
          }, _564d09f0fe7a, _5695a624e761);
          if (await (0, _d879eb489a78.hU)(_cd89175f9633.toString(), _bed23b1c4e71), _91a2259ffea9) {
            let _564d09f0fe7a = new URL(_20b30412704a.location);
            _564d09f0fe7a.searchParams.set("type", _91a2259ffea9), _20b30412704a.location = _564d09f0fe7a.href;
          }
        }
        let _b5be100de146 = _20b30412704a["set-cookie"] || [];
        for (let _cd89175f9633 in _b5be100de146) if (_5452948ead4c) {
          let _91a2259ffea9 = _45080c7acefd.dispatch(_5452948ead4c, {
            studyjet$type: "cookie",
            cookie: _cd89175f9633,
            url: _564d09f0fe7a.href
          });
          "document" !== _bed23b1c4e71 && "iframe" !== _bed23b1c4e71 && await _91a2259ffea9;
        }
        for (let _cd89175f9633 in await _bad94b9ba2d5.setCookies(_b5be100de146 instanceof Array ? _b5be100de146 : [ _b5be100de146 ], _564d09f0fe7a), 
        _20b30412704a) Array.isArray(_20b30412704a[_cd89175f9633]) && (_20b30412704a[_cd89175f9633] = _20b30412704a[_cd89175f9633][0]);
        if (function(_564d09f0fe7a, _cd89175f9633) {
          if ([ "document", "iframe" ].includes(_cd89175f9633)) {
            let _cd89175f9633 = _564d09f0fe7a["content-disposition"];
            if (_cd89175f9633) {
              if ("inline" !== _cd89175f9633) return !0;
            } else {
              let _cd89175f9633 = _564d09f0fe7a["content-type"]?.split(";")[0].trim().toLowerCase();
              if (_cd89175f9633 && ![ "text/html", "text/plain", "text/css", "text/javascript", "text/xml", "application/javascript", "application/json", "application/xml", "application/pdf" ].includes(_cd89175f9633) && !_cd89175f9633.startsWith("text") && !_cd89175f9633.startsWith("image") && !_cd89175f9633.startsWith("font") && !_cd89175f9633.startsWith("video")) return !0;
            }
          }
          return !1;
        }(_20b30412704a, _bed23b1c4e71) && !g(_775f64df6c74)) if ((0, _90a7406a509b.U5)("interceptDownloads", _564d09f0fe7a)) {
          if (!_5452948ead4c) throw Error("cant find client");
          let _cd89175f9633 = null, _91a2259ffea9 = _20b30412704a["content-disposition"];
          if ("string" == typeof _91a2259ffea9) {
            let _564d09f0fe7a = _91a2259ffea9.match(/filename=["']?([^"';\n]*)["']?/i);
            _564d09f0fe7a && _564d09f0fe7a[1] && (_cd89175f9633 = _564d09f0fe7a[1]);
          }
          let _bed23b1c4e71 = _20b30412704a["content-length"], _e29815aa94d6 = await clients.matchAll({});
          if ((_e29815aa94d6 = _e29815aa94d6.filter(_564d09f0fe7a => !_564d09f0fe7a.url.includes(_90a7406a509b.$W.prefix))).length < 1) throw Error("couldn't find a controller client to dispatch download to");
          let _d879eb489a78 = {
            filename: _cd89175f9633,
            url: _564d09f0fe7a.href,
            type: _20b30412704a["content-type"],
            body: _775f64df6c74.body,
            length: Number(_bed23b1c4e71)
          };
          _e29815aa94d6[0].postMessage({
            studyjet$type: "download",
            download: _d879eb489a78
          }, [ _775f64df6c74.body ]), await new Promise(() => {});
        } else {
          let _564d09f0fe7a = _20b30412704a["content-disposition"];
          if (!/\s*?((inline|attachment);\s*?)filename=/i.test(_564d09f0fe7a)) {
            let _cd89175f9633 = /^\s*?attachment/i.test(_564d09f0fe7a) ? "attachment" : "inline", [_91a2259ffea9] = new URL(_775f64df6c74.finalURL).pathname.split("/").slice(-1);
            _20b30412704a["content-disposition"] = `${_cd89175f9633}; filename=${JSON.stringify(_91a2259ffea9)}`;
          }
        }
        _775f64df6c74.body && !g(_775f64df6c74) && (_5c1b0936347c = await b(_775f64df6c74, _cd89175f9633, _bed23b1c4e71, _91a2259ffea9, _bad94b9ba2d5)), 
        "text/event-stream" === _20b30412704a.accept && (_20b30412704a["content-type"] = "text/event-stream"), 
        delete _20b30412704a["permissions-policy"], crossOriginIsolated && [ "document", "iframe", "worker", "sharedworker", "style", "script" ].includes(_bed23b1c4e71) && (_20b30412704a["Cross-Origin-Embedder-Policy"] = "require-corp", 
        _20b30412704a["Cross-Origin-Opener-Policy"] = "same-origin");
        let _0ca58fe238f7 = new w(_5c1b0936347c, _20b30412704a, _775f64df6c74.status, _775f64df6c74.statusText, _bed23b1c4e71, _564d09f0fe7a, _775f64df6c74, _5452948ead4c);
        return _45080c7acefd.dispatchEvent(_0ca58fe238f7), g(_775f64df6c74) || await (0, 
        _d879eb489a78.Sn)(_564d09f0fe7a.toString()), new Response(_0ca58fe238f7.responseBody, {
          headers: _0ca58fe238f7.responseHeaders,
          status: _0ca58fe238f7.status,
          statusText: _0ca58fe238f7.statusText
        });
      }
      async function b(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9, _bed23b1c4e71, _e29815aa94d6) {
        switch (_91a2259ffea9) {
         case "iframe":
         case "document":
          if (_564d09f0fe7a.headers.get("content-type")?.startsWith("text/html")) return (0, 
          _bad94b9ba2d5.Qs)(await _564d09f0fe7a.text(), _e29815aa94d6, _cd89175f9633, !0);
          return _564d09f0fe7a.body;

         case "script":
          return (0, _eced61b9ace5.o)(new Uint8Array(await _564d09f0fe7a.arrayBuffer()), _564d09f0fe7a.finalURL, _cd89175f9633, "module" === _bed23b1c4e71);

         case "style":
          return (0, _5452948ead4c.s)(await _564d09f0fe7a.text(), _cd89175f9633);

         case "sharedworker":
         case "worker":
          return (0, _5695a624e761.i)(new Uint8Array(await _564d09f0fe7a.arrayBuffer()), _bed23b1c4e71, _564d09f0fe7a.finalURL, _cd89175f9633);

         default:
          return _564d09f0fe7a.body;
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
        constructor(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9, _bed23b1c4e71, _e29815aa94d6, _d879eb489a78, _d75b4034184e, _eced61b9ace5) {
          super("handleResponse"), this.responseBody = _564d09f0fe7a, this.responseHeaders = _cd89175f9633, 
          this.status = _91a2259ffea9, this.statusText = _bed23b1c4e71, this.destination = _e29815aa94d6, 
          this.url = _d879eb489a78, this.rawResponse = _d75b4034184e, this.client = _eced61b9ace5;
        }
      }
      class S extends Event {
        url;
        requestHeaders;
        body;
        method;
        destination;
        client;
        constructor(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9, _bed23b1c4e71, _e29815aa94d6, _d879eb489a78) {
          super("request"), this.url = _564d09f0fe7a, this.requestHeaders = _cd89175f9633, 
          this.body = _91a2259ffea9, this.method = _bed23b1c4e71, this.destination = _e29815aa94d6, 
          this.client = _d879eb489a78;
        }
        response;
      }
    },
    7510: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.r(_cd89175f9633), _91a2259ffea9.d(_cd89175f9633, {
        FakeServiceWorker: () => _bed23b1c4e71.H,
        StudyJetHandleResponseEvent: () => _e29815aa94d6.dT,
        StudyJetRequestEvent: () => _e29815aa94d6.V3,
        StudyJetServiceWorker: () => d,
        errorTemplate: () => _029290fe381e.B,
        handleFetch: () => _e29815aa94d6.Pf,
        renderError: () => _029290fe381e.v
      });
      var _bed23b1c4e71 = _91a2259ffea9(1403), _e29815aa94d6 = _91a2259ffea9(5790), _d879eb489a78 = _91a2259ffea9(4110), _d75b4034184e = _91a2259ffea9(1561), _eced61b9ace5 = _91a2259ffea9(3831), _775f64df6c74 = _91a2259ffea9(6570), _90a7406a509b = _91a2259ffea9(37), _029290fe381e = _91a2259ffea9(5956);
      class d extends EventTarget {
        client;
        config;
        syncPool={};
        synctoken=0;
        cookieStore=new _eced61b9ace5.k;
        serviceWorkers=[];
        constructor() {
          super(), this.client = new _d879eb489a78.Ay, (async () => {
            let _564d09f0fe7a = await (0, _775f64df6c74.P2)("@d7a6431b92e", 1), _cd89175f9633 = await _564d09f0fe7a.get("cookies", "cookies");
            _cd89175f9633 && this.cookieStore.load(_cd89175f9633);
          })(), addEventListener("message", async ({data: _564d09f0fe7a}) => {
            if ("studyjet$type" in _564d09f0fe7a) {
              if ("studyjet$token" in _564d09f0fe7a) {
                let _cd89175f9633 = this.syncPool[_564d09f0fe7a.studyjet$token];
                delete this.syncPool[_564d09f0fe7a.studyjet$token], _cd89175f9633(_564d09f0fe7a);
                return;
              }
              if ("registerServiceWorker" === _564d09f0fe7a.studyjet$type) return void this.serviceWorkers.push(new _bed23b1c4e71.H(_564d09f0fe7a.port, _564d09f0fe7a.origin));
              if ("cookie" === _564d09f0fe7a.studyjet$type) {
                this.cookieStore.setCookies([ _564d09f0fe7a.cookie ], new URL(_564d09f0fe7a.url));
                let _cd89175f9633 = await (0, _775f64df6c74.P2)("@d7a6431b92e", 1);
                await _cd89175f9633.put("cookies", JSON.parse(this.cookieStore.dump()), "cookies");
              }
              "loadConfig" === _564d09f0fe7a.studyjet$type && (this.config = _564d09f0fe7a.config);
            }
          });
        }
        async dispatch(_564d09f0fe7a, _cd89175f9633) {
          let _91a2259ffea9, _bed23b1c4e71 = this.synctoken++, _e29815aa94d6 = new Promise(_564d09f0fe7a => _91a2259ffea9 = _564d09f0fe7a);
          return this.syncPool[_bed23b1c4e71] = _91a2259ffea9, _cd89175f9633.studyjet$token = _bed23b1c4e71, 
          _564d09f0fe7a.postMessage(_cd89175f9633), await _e29815aa94d6;
        }
        async loadConfig() {
          if (this.config) return;
          let _564d09f0fe7a = await (0, _775f64df6c74.P2)("@d7a6431b92e", 1);
          this.config = await _564d09f0fe7a.get("config", "config"), this.config && ((0, _90a7406a509b.Nk)(this.config), 
          await (0, _d75b4034184e.n$)());
        }
        route({request: _564d09f0fe7a}) {
          return !!_564d09f0fe7a.url.startsWith(location.origin + this.config.prefix) || !!_564d09f0fe7a.url.startsWith(location.origin + this.config.files.wasm);
        }
        async fetch({request: _564d09f0fe7a, clientId: _cd89175f9633}) {
          this.config || await this.loadConfig();
          let _91a2259ffea9 = await self.clients.get(_cd89175f9633);
          return _e29815aa94d6.Pf.call(this, _564d09f0fe7a, _91a2259ffea9);
        }
      }
    },
    4110: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.d(_cd89175f9633, {
        Ay: () => S,
        DD: () => w
      });
      let _bed23b1c4e71 = globalThis.fetch, _e29815aa94d6 = globalThis.SharedWorker, _d879eb489a78 = globalThis.localStorage, _d75b4034184e = globalThis.navigator.serviceWorker, _eced61b9ace5 = MessagePort.prototype.postMessage, _775f64df6c74 = {
        prototype: {
          send: WebSocket.prototype.send
        },
        CLOSED: WebSocket.CLOSED,
        CLOSING: WebSocket.CLOSING,
        CONNECTING: WebSocket.CONNECTING,
        OPEN: WebSocket.OPEN
      };
      async function c() {
        let _564d09f0fe7a = Promise.race([ Promise.any((await self.clients.matchAll({
          type: "window",
          includeUncontrolled: !0
        })).map(async _564d09f0fe7a => {
          let _cd89175f9633, _91a2259ffea9 = await (_cd89175f9633 = new MessageChannel, new Promise(_91a2259ffea9 => {
            _564d09f0fe7a.postMessage({
              type: "getPort",
              port: _cd89175f9633.port2
            }, [ _cd89175f9633.port2 ]), _cd89175f9633.port1.onmessage = _564d09f0fe7a => {
              _91a2259ffea9(_564d09f0fe7a.data);
            };
          }));
          return await u(_91a2259ffea9), _91a2259ffea9;
        })), new Promise((_564d09f0fe7a, _cd89175f9633) => setTimeout(_cd89175f9633, 1e3, TypeError("timeout"))) ]);
        try {
          return await _564d09f0fe7a;
        } catch (_564d09f0fe7a) {
          if (_564d09f0fe7a instanceof AggregateError) throw console.error("bare-mux: failed to get a bare-mux SharedWorker MessagePort as all clients returned an invalid MessagePort."), 
          Error("All clients returned an invalid MessagePort.", {
            cause: _564d09f0fe7a
          });
          return console.warn("bare-mux: failed to get a bare-mux SharedWorker MessagePort within 1s, retrying"), 
          await c();
        }
      }
      function u(_564d09f0fe7a) {
        let _cd89175f9633 = new MessageChannel, _91a2259ffea9 = new Promise((_564d09f0fe7a, _91a2259ffea9) => {
          _cd89175f9633.port1.onmessage = _cd89175f9633 => {
            "pong" === _cd89175f9633.data.type && _564d09f0fe7a();
          }, setTimeout(_91a2259ffea9, 1500);
        });
        return _eced61b9ace5.call(_564d09f0fe7a, {
          message: {
            type: "ping"
          },
          port: _cd89175f9633.port2
        }, [ _cd89175f9633.port2 ]), _91a2259ffea9;
      }
      function d(_564d09f0fe7a, _cd89175f9633) {
        let _91a2259ffea9 = new _e29815aa94d6(_564d09f0fe7a, "ridgewood-stem-worker");
        return _cd89175f9633 && _d75b4034184e.addEventListener("message", _cd89175f9633 => {
          if ("getPort" === _cd89175f9633.data.type && _cd89175f9633.data.port) {
            console.debug("bare-mux: recieved request for port from sw");
            let _91a2259ffea9 = new _e29815aa94d6(_564d09f0fe7a, "ridgewood-stem-worker");
            _eced61b9ace5.call(_cd89175f9633.data.port, _91a2259ffea9.port, [ _91a2259ffea9.port ]);
          }
        }), _91a2259ffea9.port;
      }
      let _90a7406a509b = null;
      class p {
        channel;
        port;
        workerPath;
        constructor(_564d09f0fe7a) {
          this.channel = new BroadcastChannel("bare-mux"), _564d09f0fe7a instanceof MessagePort || _564d09f0fe7a instanceof Promise ? this.port = _564d09f0fe7a : this.createChannel(_564d09f0fe7a, !0);
        }
        createChannel(_564d09f0fe7a, _cd89175f9633) {
          if (self.clients) this.port = c(), this.channel.onmessage = _564d09f0fe7a => {
            "refreshPort" === _564d09f0fe7a.data.type && (this.port = c());
          }; else if (_564d09f0fe7a && SharedWorker) {
            if (!_564d09f0fe7a.startsWith("/") && !_564d09f0fe7a.includes(":")) throw Error("Invalid URL. Must be absolute or start at the root.");
            this.port = d(_564d09f0fe7a, _cd89175f9633), console.debug("bare-mux: setting localStorage bare-mux-path to", _564d09f0fe7a), 
            _d879eb489a78["bare-mux-path"] = _564d09f0fe7a;
          } else {
            if (!SharedWorker) throw Error("Unable to get a channel to the SharedWorker.");
            {
              let _564d09f0fe7a = _d879eb489a78["bare-mux-path"];
              if (console.debug("bare-mux: got localStorage bare-mux-path:", _564d09f0fe7a), !_564d09f0fe7a) throw Error("Unable to get bare-mux workerPath from localStorage.");
              this.port = d(_564d09f0fe7a, _cd89175f9633);
            }
          }
        }
        async sendMessage(_564d09f0fe7a, _cd89175f9633) {
          this.port instanceof Promise && (this.port = await this.port);
          try {
            await u(this.port);
          } catch {
            return console.warn("bare-mux: Failed to get a ping response from the worker within 1.5s. Assuming port is dead."), 
            this.createChannel(), await this.sendMessage(_564d09f0fe7a, _cd89175f9633);
          }
          let _91a2259ffea9 = new MessageChannel, _bed23b1c4e71 = [ _91a2259ffea9.port2, ..._cd89175f9633 || [] ], _e29815aa94d6 = new Promise((_564d09f0fe7a, _cd89175f9633) => {
            _91a2259ffea9.port1.onmessage = _91a2259ffea9 => {
              let _bed23b1c4e71 = _91a2259ffea9.data;
              "error" === _bed23b1c4e71.type ? _cd89175f9633(_bed23b1c4e71.error) : _564d09f0fe7a(_bed23b1c4e71);
            };
          });
          return _eced61b9ace5.call(this.port, {
            message: _564d09f0fe7a,
            port: _91a2259ffea9.port2
          }, _bed23b1c4e71), await _e29815aa94d6;
        }
      }
      class f extends EventTarget {
        protocols;
        url;
        readyState=_775f64df6c74.CONNECTING;
        channel;
        constructor(_564d09f0fe7a, _cd89175f9633 = [], _91a2259ffea9, _bed23b1c4e71) {
          super(), this.protocols = _cd89175f9633, this.url = _564d09f0fe7a.toString(), this.protocols = _cd89175f9633;
          const i = _564d09f0fe7a => {
            this.protocols = _564d09f0fe7a, this.readyState = _775f64df6c74.OPEN;
            let _cd89175f9633 = new Event("open");
            this.dispatchEvent(_cd89175f9633);
          }, a = async _564d09f0fe7a => {
            let _cd89175f9633 = new MessageEvent("message", {
              data: _564d09f0fe7a
            });
            this.dispatchEvent(_cd89175f9633);
          }, s = (_564d09f0fe7a, _cd89175f9633) => {
            this.readyState = _775f64df6c74.CLOSED;
            let _91a2259ffea9 = new CloseEvent("close", {
              code: _564d09f0fe7a,
              reason: _cd89175f9633
            });
            this.dispatchEvent(_91a2259ffea9);
          }, o = () => {
            this.readyState = _775f64df6c74.CLOSED;
            let _564d09f0fe7a = new Event("error");
            this.dispatchEvent(_564d09f0fe7a);
          };
          this.channel = new MessageChannel, this.channel.port1.onmessage = _564d09f0fe7a => {
            "open" === _564d09f0fe7a.data.type ? i(_564d09f0fe7a.data.args[0]) : "message" === _564d09f0fe7a.data.type ? a(_564d09f0fe7a.data.args[0]) : "close" === _564d09f0fe7a.data.type ? s(_564d09f0fe7a.data.args[0], _564d09f0fe7a.data.args[1]) : "error" === _564d09f0fe7a.data.type && o();
          }, _91a2259ffea9.sendMessage({
            type: "websocket",
            websocket: {
              url: _564d09f0fe7a.toString(),
              protocols: _cd89175f9633,
              requestHeaders: _bed23b1c4e71,
              channel: this.channel.port2
            }
          }, [ this.channel.port2 ]);
        }
        send(..._564d09f0fe7a) {
          if (this.readyState === _775f64df6c74.CONNECTING) throw new DOMException("Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.");
          let _cd89175f9633 = _564d09f0fe7a[0];
          _cd89175f9633.buffer && (_cd89175f9633 = _cd89175f9633.buffer.slice(_cd89175f9633.byteOffset, _cd89175f9633.byteOffset + _cd89175f9633.byteLength)), 
          _eced61b9ace5.call(this.channel.port1, {
            type: "data",
            data: _cd89175f9633
          }, _cd89175f9633 instanceof ArrayBuffer ? [ _cd89175f9633 ] : []);
        }
        close(_564d09f0fe7a, _cd89175f9633) {
          _eced61b9ace5.call(this.channel.port1, {
            type: "close",
            closeCode: _564d09f0fe7a,
            closeReason: _cd89175f9633
          });
        }
      }
      function g(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
        console.error(`error while processing '${_91a2259ffea9}': `, _cd89175f9633), _564d09f0fe7a.postMessage({
          type: "error",
          error: _cd89175f9633
        });
      }
      let _029290fe381e = [ "ws:", "wss:" ], _bad94b9ba2d5 = [ 101, 204, 205, 304 ], _5452948ead4c = [ 301, 302, 303, 307, 308 ];
      class w {
        worker;
        constructor(_564d09f0fe7a) {
          this.worker = new p(_564d09f0fe7a);
        }
        async getTransport() {
          return (await this.worker.sendMessage({
            type: "get"
          })).name;
        }
        async setTransport(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
          await this.setManualTransport(`\n\t\t\tconst { default: BareTransport } = await import("${_564d09f0fe7a}");\n\t\t\treturn [BareTransport, "${_564d09f0fe7a}"];\n\t\t`, _cd89175f9633, _91a2259ffea9);
        }
        async setManualTransport(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
          if ("bare-mux-remote" === _564d09f0fe7a) throw Error("Use setRemoteTransport.");
          await this.worker.sendMessage({
            type: "set",
            client: {
              function: _564d09f0fe7a,
              args: _cd89175f9633
            }
          }, _91a2259ffea9);
        }
        async setRemoteTransport(_564d09f0fe7a, _cd89175f9633) {
          let _91a2259ffea9 = new MessageChannel;
          _91a2259ffea9.port1.onmessage = async _cd89175f9633 => {
            let _91a2259ffea9 = _cd89175f9633.data.port, _bed23b1c4e71 = _cd89175f9633.data.message;
            if ("fetch" === _bed23b1c4e71.type) try {
              _564d09f0fe7a.ready || await _564d09f0fe7a.init(), await async function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
                let _bed23b1c4e71 = await _91a2259ffea9.request(new URL(_564d09f0fe7a.fetch.remote), _564d09f0fe7a.fetch.method, _564d09f0fe7a.fetch.body, _564d09f0fe7a.fetch.headers, null);
                if (!function() {
                  if (null === _90a7406a509b) {
                    let _564d09f0fe7a, _cd89175f9633 = new MessageChannel, _91a2259ffea9 = new ReadableStream;
                    try {
                      _eced61b9ace5.call(_cd89175f9633.port1, _91a2259ffea9, [ _91a2259ffea9 ]), _564d09f0fe7a = !0;
                    } catch (_cd89175f9633) {
                      _564d09f0fe7a = !1;
                    }
                    return _90a7406a509b = _564d09f0fe7a, _564d09f0fe7a;
                  }
                  return _90a7406a509b;
                }() && _bed23b1c4e71.body instanceof ReadableStream) {
                  let _564d09f0fe7a = new Response(_bed23b1c4e71.body);
                  _bed23b1c4e71.body = await _564d09f0fe7a.arrayBuffer();
                }
                _bed23b1c4e71.body instanceof ReadableStream || _bed23b1c4e71.body instanceof ArrayBuffer ? _eced61b9ace5.call(_cd89175f9633, {
                  type: "fetch",
                  fetch: _bed23b1c4e71
                }, [ _bed23b1c4e71.body ]) : _eced61b9ace5.call(_cd89175f9633, {
                  type: "fetch",
                  fetch: _bed23b1c4e71
                });
              }(_bed23b1c4e71, _91a2259ffea9, _564d09f0fe7a);
            } catch (_564d09f0fe7a) {
              g(_91a2259ffea9, _564d09f0fe7a, "fetch");
            } else if ("websocket" === _bed23b1c4e71.type) try {
              _564d09f0fe7a.ready || await _564d09f0fe7a.init(), await async function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
                let [_bed23b1c4e71, _e29815aa94d6] = _91a2259ffea9.connect(new URL(_564d09f0fe7a.websocket.url), _564d09f0fe7a.websocket.protocols, _564d09f0fe7a.websocket.requestHeaders, _cd89175f9633 => {
                  _eced61b9ace5.call(_564d09f0fe7a.websocket.channel, {
                    type: "open",
                    args: [ _cd89175f9633 ]
                  });
                }, _cd89175f9633 => {
                  _cd89175f9633 instanceof ArrayBuffer ? _eced61b9ace5.call(_564d09f0fe7a.websocket.channel, {
                    type: "message",
                    args: [ _cd89175f9633 ]
                  }, [ _cd89175f9633 ]) : _eced61b9ace5.call(_564d09f0fe7a.websocket.channel, {
                    type: "message",
                    args: [ _cd89175f9633 ]
                  });
                }, (_cd89175f9633, _91a2259ffea9) => {
                  _eced61b9ace5.call(_564d09f0fe7a.websocket.channel, {
                    type: "close",
                    args: [ _cd89175f9633, _91a2259ffea9 ]
                  });
                }, _cd89175f9633 => {
                  _eced61b9ace5.call(_564d09f0fe7a.websocket.channel, {
                    type: "error",
                    args: [ _cd89175f9633 ]
                  });
                });
                _564d09f0fe7a.websocket.channel.onmessage = _564d09f0fe7a => {
                  "data" === _564d09f0fe7a.data.type ? _bed23b1c4e71(_564d09f0fe7a.data.data) : "close" === _564d09f0fe7a.data.type && _e29815aa94d6(_564d09f0fe7a.data.closeCode, _564d09f0fe7a.data.closeReason);
                }, _eced61b9ace5.call(_cd89175f9633, {
                  type: "websocket"
                });
              }(_bed23b1c4e71, _91a2259ffea9, _564d09f0fe7a);
            } catch (_564d09f0fe7a) {
              g(_91a2259ffea9, _564d09f0fe7a, "websocket");
            }
          }, await this.worker.sendMessage({
            type: "set",
            client: {
              function: "bare-mux-remote",
              args: [ _91a2259ffea9.port2, _cd89175f9633 ]
            }
          }, [ _91a2259ffea9.port2 ]);
        }
        getInnerPort() {
          return this.worker.port;
        }
      }
      class S {
        worker;
        constructor(_564d09f0fe7a) {
          this.worker = new p(_564d09f0fe7a);
        }
        createWebSocket(_564d09f0fe7a, _cd89175f9633 = [], _91a2259ffea9, _bed23b1c4e71) {
          try {
            _564d09f0fe7a = new URL(_564d09f0fe7a);
          } catch (_cd89175f9633) {
            throw new DOMException(`Faiiled to construct 'WebSocket': The URL '${_564d09f0fe7a}' is invalid.`);
          }
          if (!_029290fe381e.includes(_564d09f0fe7a.protocol)) throw new DOMException(`Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '${_564d09f0fe7a.protocol}' is not allowed.`);
          for (let _564d09f0fe7a of (Array.isArray(_cd89175f9633) || (_cd89175f9633 = [ _cd89175f9633 ]), 
          _cd89175f9633 = _cd89175f9633.map(String))) if (!function(_564d09f0fe7a) {
            for (let _cd89175f9633 = 0; _cd89175f9633 < _564d09f0fe7a.length; _cd89175f9633++) {
              let _91a2259ffea9 = _564d09f0fe7a[_cd89175f9633];
              if (!"!#$%&'*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz|~".includes(_91a2259ffea9)) return !1;
            }
            return !0;
          }(_564d09f0fe7a)) throw new DOMException(`Failed to construct 'WebSocket': The subprotocol '${_564d09f0fe7a}' is invalid.`);
          return _bed23b1c4e71 = _bed23b1c4e71 || {}, new f(_564d09f0fe7a, _cd89175f9633, this.worker, _bed23b1c4e71);
        }
        async fetch(_564d09f0fe7a, _cd89175f9633) {
          let _91a2259ffea9 = new Request(_564d09f0fe7a, _cd89175f9633), _e29815aa94d6 = _cd89175f9633?.headers || _91a2259ffea9.headers, _d879eb489a78 = _e29815aa94d6 instanceof Headers ? Object.fromEntries(_e29815aa94d6) : _e29815aa94d6, _d75b4034184e = _91a2259ffea9.body, _eced61b9ace5 = new URL(_91a2259ffea9.url);
          if (_eced61b9ace5.protocol.startsWith("blob:")) {
            let _564d09f0fe7a = await _bed23b1c4e71(_eced61b9ace5), _cd89175f9633 = new Response(_564d09f0fe7a.body, _564d09f0fe7a);
            return _cd89175f9633.rawHeaders = Object.fromEntries(_564d09f0fe7a.headers), _cd89175f9633.rawResponse = {
              body: _564d09f0fe7a.body,
              headers: Object.fromEntries(_564d09f0fe7a.headers),
              status: _564d09f0fe7a.status,
              statusText: _564d09f0fe7a.statusText
            }, _cd89175f9633.finalURL = _eced61b9ace5.toString(), _cd89175f9633;
          }
          for (let _564d09f0fe7a = 0; ;_564d09f0fe7a++) {
            let _bed23b1c4e71 = (await this.worker.sendMessage({
              type: "fetch",
              fetch: {
                remote: _eced61b9ace5.toString(),
                method: _91a2259ffea9.method,
                headers: _d879eb489a78,
                body: _d75b4034184e || void 0
              }
            }, _d75b4034184e ? [ _d75b4034184e ] : [])).fetch, _e29815aa94d6 = new Response(_bad94b9ba2d5.includes(_bed23b1c4e71.status) ? void 0 : _bed23b1c4e71.body, {
              headers: new Headers(_bed23b1c4e71.headers),
              status: _bed23b1c4e71.status,
              statusText: _bed23b1c4e71.statusText
            });
            _e29815aa94d6.rawHeaders = _bed23b1c4e71.headers, _e29815aa94d6.rawResponse = _bed23b1c4e71, 
            _e29815aa94d6.finalURL = _eced61b9ace5.toString();
            let _775f64df6c74 = _cd89175f9633?.redirect || _91a2259ffea9.redirect;
            if (!_5452948ead4c.includes(_e29815aa94d6.status)) return _e29815aa94d6;
            switch (_775f64df6c74) {
             case "follow":
              {
                let _cd89175f9633 = _e29815aa94d6.headers.get("location");
                if (20 > _564d09f0fe7a && null !== _cd89175f9633) {
                  _eced61b9ace5 = new URL(_cd89175f9633, _eced61b9ace5);
                  continue;
                }
                throw TypeError("Failed to fetch");
              }

             case "error":
              throw TypeError("Failed to fetch");

             case "manual":
              return _e29815aa94d6;
            }
          }
        }
      }
      console.debug("bare-mux: running v2.1.9 (build dc9dc6e)");
    },
    8832: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.d(_cd89175f9633, {
        H: () => _bed23b1c4e71,
        L: () => _e29815aa94d6
      });
      let _bed23b1c4e71 = new Map([ "altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath" ].map(_564d09f0fe7a => [ _564d09f0fe7a.toLowerCase(), _564d09f0fe7a ])), _e29815aa94d6 = new Map([ "definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan" ].map(_564d09f0fe7a => [ _564d09f0fe7a.toLowerCase(), _564d09f0fe7a ]));
    },
    6498: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.d(_cd89175f9633, {
        A: () => _775f64df6c74
      });
      var _bed23b1c4e71 = _91a2259ffea9(2743), _e29815aa94d6 = _91a2259ffea9(8466), _d879eb489a78 = _91a2259ffea9(8832);
      let _d75b4034184e = new Set([ "style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript" ]);
      function o(_564d09f0fe7a) {
        return _564d09f0fe7a.replace(/"/g, "&quot;");
      }
      let _eced61b9ace5 = new Set([ "area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr" ]), _775f64df6c74 = function e(_564d09f0fe7a, _cd89175f9633 = {}) {
        let _91a2259ffea9 = "length" in _564d09f0fe7a ? _564d09f0fe7a : [ _564d09f0fe7a ], _775f64df6c74 = "";
        for (let _564d09f0fe7a = 0; _564d09f0fe7a < _91a2259ffea9.length; _564d09f0fe7a++) _775f64df6c74 += function(_564d09f0fe7a, _cd89175f9633) {
          var _91a2259ffea9, _775f64df6c74, _bad94b9ba2d5;
          switch (_564d09f0fe7a.type) {
           case _bed23b1c4e71.bL:
            return e(_564d09f0fe7a.children, _cd89175f9633);

           case _bed23b1c4e71.fl:
           case _bed23b1c4e71.WL:
            return _91a2259ffea9 = _564d09f0fe7a, `<${_91a2259ffea9.data}>`;

           case _bed23b1c4e71.Mw:
            return _775f64df6c74 = _564d09f0fe7a, `\x3c!--${_775f64df6c74.data}--\x3e`;

           case _bed23b1c4e71.KB:
            return _bad94b9ba2d5 = _564d09f0fe7a, `<![CDATA[${_bad94b9ba2d5.children[0].data}]]>`;

           case _bed23b1c4e71.eF:
           case _bed23b1c4e71.OF:
           case _bed23b1c4e71.vw:
            return function(_564d09f0fe7a, _cd89175f9633) {
              var _91a2259ffea9;
              "foreign" === _cd89175f9633.xmlMode && (_564d09f0fe7a.name = null != (_91a2259ffea9 = _d879eb489a78.H.get(_564d09f0fe7a.name)) ? _91a2259ffea9 : _564d09f0fe7a.name, 
              _564d09f0fe7a.parent && _90a7406a509b.has(_564d09f0fe7a.parent.name) && (_cd89175f9633 = {
                ..._cd89175f9633,
                xmlMode: !1
              })), !_cd89175f9633.xmlMode && _029290fe381e.has(_564d09f0fe7a.name) && (_cd89175f9633 = {
                ..._cd89175f9633,
                xmlMode: "foreign"
              });
              let _bed23b1c4e71 = `<${_564d09f0fe7a.name}`, _d75b4034184e = function(_564d09f0fe7a, _cd89175f9633) {
                var _91a2259ffea9;
                if (!_564d09f0fe7a) return;
                let _bed23b1c4e71 = (null != (_91a2259ffea9 = _cd89175f9633.encodeEntities) ? _91a2259ffea9 : _cd89175f9633.decodeEntities) === !1 ? o : _cd89175f9633.xmlMode || "utf8" !== _cd89175f9633.encodeEntities ? _e29815aa94d6.WY : _e29815aa94d6.Gj;
                return Object.keys(_564d09f0fe7a).map(_91a2259ffea9 => {
                  var _e29815aa94d6, _d75b4034184e;
                  let _eced61b9ace5 = null != (_e29815aa94d6 = _564d09f0fe7a[_91a2259ffea9]) ? _e29815aa94d6 : "";
                  return ("foreign" === _cd89175f9633.xmlMode && (_91a2259ffea9 = null != (_d75b4034184e = _d879eb489a78.L.get(_91a2259ffea9)) ? _d75b4034184e : _91a2259ffea9), 
                  _cd89175f9633.emptyAttrs || _cd89175f9633.xmlMode || "" !== _eced61b9ace5) ? `${_91a2259ffea9}="${_bed23b1c4e71(_eced61b9ace5)}"` : _91a2259ffea9;
                }).join(" ");
              }(_564d09f0fe7a.attribs, _cd89175f9633);
              return _d75b4034184e && (_bed23b1c4e71 += ` ${_d75b4034184e}`), 0 === _564d09f0fe7a.children.length && (_cd89175f9633.xmlMode ? !1 !== _cd89175f9633.selfClosingTags : _cd89175f9633.selfClosingTags && _eced61b9ace5.has(_564d09f0fe7a.name)) ? (_cd89175f9633.xmlMode || (_bed23b1c4e71 += " "), 
              _bed23b1c4e71 += "/>") : (_bed23b1c4e71 += ">", _564d09f0fe7a.children.length > 0 && (_bed23b1c4e71 += e(_564d09f0fe7a.children, _cd89175f9633)), 
              (_cd89175f9633.xmlMode || !_eced61b9ace5.has(_564d09f0fe7a.name)) && (_bed23b1c4e71 += `</${_564d09f0fe7a.name}>`)), 
              _bed23b1c4e71;
            }(_564d09f0fe7a, _cd89175f9633);

           case _bed23b1c4e71.EY:
            return function(_564d09f0fe7a, _cd89175f9633) {
              var _91a2259ffea9;
              let _bed23b1c4e71 = _564d09f0fe7a.data || "";
              return (null != (_91a2259ffea9 = _cd89175f9633.encodeEntities) ? _91a2259ffea9 : _cd89175f9633.decodeEntities) === !1 || !_cd89175f9633.xmlMode && _564d09f0fe7a.parent && _d75b4034184e.has(_564d09f0fe7a.parent.name) || (_bed23b1c4e71 = _cd89175f9633.xmlMode || "utf8" !== _cd89175f9633.encodeEntities ? (0, 
              _e29815aa94d6.WY)(_bed23b1c4e71) : (0, _e29815aa94d6.X1)(_bed23b1c4e71)), _bed23b1c4e71;
            }(_564d09f0fe7a, _cd89175f9633);
          }
        }(_91a2259ffea9[_564d09f0fe7a], _cd89175f9633);
        return _775f64df6c74;
      }, _90a7406a509b = new Set([ "mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title" ]), _029290fe381e = new Set([ "svg", "math" ]);
    },
    2743: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      var _bed23b1c4e71, _e29815aa94d6;
      function a(_564d09f0fe7a) {
        return _564d09f0fe7a.type === _bed23b1c4e71.Tag || _564d09f0fe7a.type === _bed23b1c4e71.Script || _564d09f0fe7a.type === _bed23b1c4e71.Style;
      }
      _91a2259ffea9.d(_cd89175f9633, {
        EY: () => _d75b4034184e,
        KB: () => _5452948ead4c,
        Mw: () => _775f64df6c74,
        OF: () => _029290fe381e,
        RJ: () => _bed23b1c4e71,
        WL: () => _eced61b9ace5,
        bL: () => _d879eb489a78,
        dz: () => a,
        eF: () => _90a7406a509b,
        fl: () => _5695a624e761,
        vw: () => _bad94b9ba2d5
      }), (_e29815aa94d6 = _bed23b1c4e71 || (_bed23b1c4e71 = {})).Root = "root", _e29815aa94d6.Text = "text", 
      _e29815aa94d6.Directive = "directive", _e29815aa94d6.Comment = "comment", _e29815aa94d6.Script = "script", 
      _e29815aa94d6.Style = "style", _e29815aa94d6.Tag = "tag", _e29815aa94d6.CDATA = "cdata", 
      _e29815aa94d6.Doctype = "doctype";
      let _d879eb489a78 = _bed23b1c4e71.Root, _d75b4034184e = _bed23b1c4e71.Text, _eced61b9ace5 = _bed23b1c4e71.Directive, _775f64df6c74 = _bed23b1c4e71.Comment, _90a7406a509b = _bed23b1c4e71.Script, _029290fe381e = _bed23b1c4e71.Style, _bad94b9ba2d5 = _bed23b1c4e71.Tag, _5452948ead4c = _bed23b1c4e71.CDATA, _5695a624e761 = _bed23b1c4e71.Doctype;
    },
    8866: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.d(_cd89175f9633, {
        DV: () => s,
        Hg: () => _e29815aa94d6.Hg,
        Mw: () => _e29815aa94d6.Mw
      });
      var _bed23b1c4e71 = _91a2259ffea9(2743), _e29815aa94d6 = _91a2259ffea9(6072);
      let _d879eb489a78 = {
        withStartIndices: !1,
        withEndIndices: !1,
        xmlMode: !1
      };
      class s {
        constructor(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
          this.dom = [], this.root = new _e29815aa94d6.yo(this.dom), this.done = !1, this.tagStack = [ this.root ], 
          this.lastNode = null, this.parser = null, "function" == typeof _cd89175f9633 && (_91a2259ffea9 = _cd89175f9633, 
          _cd89175f9633 = _d879eb489a78), "object" == typeof _564d09f0fe7a && (_cd89175f9633 = _564d09f0fe7a, 
          _564d09f0fe7a = void 0), this.callback = null != _564d09f0fe7a ? _564d09f0fe7a : null, 
          this.options = null != _cd89175f9633 ? _cd89175f9633 : _d879eb489a78, this.elementCB = null != _91a2259ffea9 ? _91a2259ffea9 : null;
        }
        onparserinit(_564d09f0fe7a) {
          this.parser = _564d09f0fe7a;
        }
        onreset() {
          this.dom = [], this.root = new _e29815aa94d6.yo(this.dom), this.done = !1, this.tagStack = [ this.root ], 
          this.lastNode = null, this.parser = null;
        }
        onend() {
          this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
        }
        onerror(_564d09f0fe7a) {
          this.handleCallback(_564d09f0fe7a);
        }
        onclosetag() {
          this.lastNode = null;
          let _564d09f0fe7a = this.tagStack.pop();
          this.options.withEndIndices && (_564d09f0fe7a.endIndex = this.parser.endIndex), 
          this.elementCB && this.elementCB(_564d09f0fe7a);
        }
        onopentag(_564d09f0fe7a, _cd89175f9633) {
          let _91a2259ffea9 = this.options.xmlMode ? _bed23b1c4e71.RJ.Tag : void 0, _d879eb489a78 = new _e29815aa94d6.Hg(_564d09f0fe7a, _cd89175f9633, void 0, _91a2259ffea9);
          this.addNode(_d879eb489a78), this.tagStack.push(_d879eb489a78);
        }
        ontext(_564d09f0fe7a) {
          let {lastNode: _cd89175f9633} = this;
          if (_cd89175f9633 && _cd89175f9633.type === _bed23b1c4e71.RJ.Text) _cd89175f9633.data += _564d09f0fe7a, 
          this.options.withEndIndices && (_cd89175f9633.endIndex = this.parser.endIndex); else {
            let _cd89175f9633 = new _e29815aa94d6.EY(_564d09f0fe7a);
            this.addNode(_cd89175f9633), this.lastNode = _cd89175f9633;
          }
        }
        oncomment(_564d09f0fe7a) {
          if (this.lastNode && this.lastNode.type === _bed23b1c4e71.RJ.Comment) {
            this.lastNode.data += _564d09f0fe7a;
            return;
          }
          let _cd89175f9633 = new _e29815aa94d6.Mw(_564d09f0fe7a);
          this.addNode(_cd89175f9633), this.lastNode = _cd89175f9633;
        }
        oncommentend() {
          this.lastNode = null;
        }
        oncdatastart() {
          let _564d09f0fe7a = new _e29815aa94d6.EY(""), _cd89175f9633 = new _e29815aa94d6.KB([ _564d09f0fe7a ]);
          this.addNode(_cd89175f9633), _564d09f0fe7a.parent = _cd89175f9633, this.lastNode = _564d09f0fe7a;
        }
        oncdataend() {
          this.lastNode = null;
        }
        onprocessinginstruction(_564d09f0fe7a, _cd89175f9633) {
          let _91a2259ffea9 = new _e29815aa94d6.Cd(_564d09f0fe7a, _cd89175f9633);
          this.addNode(_91a2259ffea9);
        }
        handleCallback(_564d09f0fe7a) {
          if ("function" == typeof this.callback) this.callback(_564d09f0fe7a, this.dom); else if (_564d09f0fe7a) throw _564d09f0fe7a;
        }
        addNode(_564d09f0fe7a) {
          let _cd89175f9633 = this.tagStack[this.tagStack.length - 1], _91a2259ffea9 = _cd89175f9633.children[_cd89175f9633.children.length - 1];
          this.options.withStartIndices && (_564d09f0fe7a.startIndex = this.parser.startIndex), 
          this.options.withEndIndices && (_564d09f0fe7a.endIndex = this.parser.endIndex), 
          _cd89175f9633.children.push(_564d09f0fe7a), _91a2259ffea9 && (_564d09f0fe7a.prev = _91a2259ffea9, 
          _91a2259ffea9.next = _564d09f0fe7a), _564d09f0fe7a.parent = _cd89175f9633, this.lastNode = null;
        }
      }
    },
    6072: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.d(_cd89175f9633, {
        Cd: () => l,
        EY: () => s,
        Hg: () => h,
        KB: () => u,
        Mw: () => o,
        yo: () => d
      });
      var _bed23b1c4e71 = _91a2259ffea9(2743);
      class i {
        constructor() {
          this.parent = null, this.prev = null, this.next = null, this.startIndex = null, 
          this.endIndex = null;
        }
        get parentNode() {
          return this.parent;
        }
        set parentNode(_564d09f0fe7a) {
          this.parent = _564d09f0fe7a;
        }
        get previousSibling() {
          return this.prev;
        }
        set previousSibling(_564d09f0fe7a) {
          this.prev = _564d09f0fe7a;
        }
        get nextSibling() {
          return this.next;
        }
        set nextSibling(_564d09f0fe7a) {
          this.next = _564d09f0fe7a;
        }
        cloneNode(_564d09f0fe7a = !1) {
          return p(this, _564d09f0fe7a);
        }
      }
      class a extends i {
        constructor(_564d09f0fe7a) {
          super(), this.data = _564d09f0fe7a;
        }
        get nodeValue() {
          return this.data;
        }
        set nodeValue(_564d09f0fe7a) {
          this.data = _564d09f0fe7a;
        }
      }
      class s extends a {
        constructor() {
          super(...arguments), this.type = _bed23b1c4e71.RJ.Text;
        }
        get nodeType() {
          return 3;
        }
      }
      class o extends a {
        constructor() {
          super(...arguments), this.type = _bed23b1c4e71.RJ.Comment;
        }
        get nodeType() {
          return 8;
        }
      }
      class l extends a {
        constructor(_564d09f0fe7a, _cd89175f9633) {
          super(_cd89175f9633), this.name = _564d09f0fe7a, this.type = _bed23b1c4e71.RJ.Directive;
        }
        get nodeType() {
          return 1;
        }
      }
      class c extends i {
        constructor(_564d09f0fe7a) {
          super(), this.children = _564d09f0fe7a;
        }
        get firstChild() {
          var _564d09f0fe7a;
          return null != (_564d09f0fe7a = this.children[0]) ? _564d09f0fe7a : null;
        }
        get lastChild() {
          return this.children.length > 0 ? this.children[this.children.length - 1] : null;
        }
        get childNodes() {
          return this.children;
        }
        set childNodes(_564d09f0fe7a) {
          this.children = _564d09f0fe7a;
        }
      }
      class u extends c {
        constructor() {
          super(...arguments), this.type = _bed23b1c4e71.RJ.CDATA;
        }
        get nodeType() {
          return 4;
        }
      }
      class d extends c {
        constructor() {
          super(...arguments), this.type = _bed23b1c4e71.RJ.Root;
        }
        get nodeType() {
          return 9;
        }
      }
      class h extends c {
        constructor(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9 = [], _e29815aa94d6 = ("script" === _564d09f0fe7a ? _bed23b1c4e71.RJ.Script : "style" === _564d09f0fe7a ? _bed23b1c4e71.RJ.Style : _bed23b1c4e71.RJ.Tag)) {
          super(_91a2259ffea9), this.name = _564d09f0fe7a, this.attribs = _cd89175f9633, this.type = _e29815aa94d6;
        }
        get nodeType() {
          return 1;
        }
        get tagName() {
          return this.name;
        }
        set tagName(_564d09f0fe7a) {
          this.name = _564d09f0fe7a;
        }
        get attributes() {
          return Object.keys(this.attribs).map(_564d09f0fe7a => {
            var _cd89175f9633, _91a2259ffea9;
            return {
              name: _564d09f0fe7a,
              value: this.attribs[_564d09f0fe7a],
              namespace: null == (_cd89175f9633 = this["x-attribsNamespace"]) ? void 0 : _cd89175f9633[_564d09f0fe7a],
              prefix: null == (_91a2259ffea9 = this["x-attribsPrefix"]) ? void 0 : _91a2259ffea9[_564d09f0fe7a]
            };
          });
        }
      }
      function p(_564d09f0fe7a, _cd89175f9633 = !1) {
        let _91a2259ffea9;
        if (_564d09f0fe7a.type === _bed23b1c4e71.RJ.Text) _91a2259ffea9 = new s(_564d09f0fe7a.data); else if (_564d09f0fe7a.type === _bed23b1c4e71.RJ.Comment) _91a2259ffea9 = new o(_564d09f0fe7a.data); else if ((0, 
        _bed23b1c4e71.dz)(_564d09f0fe7a)) {
          let _bed23b1c4e71 = _cd89175f9633 ? f(_564d09f0fe7a.children) : [], _e29815aa94d6 = new h(_564d09f0fe7a.name, {
            ..._564d09f0fe7a.attribs
          }, _bed23b1c4e71);
          _bed23b1c4e71.forEach(_564d09f0fe7a => _564d09f0fe7a.parent = _e29815aa94d6), null != _564d09f0fe7a.namespace && (_e29815aa94d6.namespace = _564d09f0fe7a.namespace), 
          _564d09f0fe7a["x-attribsNamespace"] && (_e29815aa94d6["x-attribsNamespace"] = {
            ..._564d09f0fe7a["x-attribsNamespace"]
          }), _564d09f0fe7a["x-attribsPrefix"] && (_e29815aa94d6["x-attribsPrefix"] = {
            ..._564d09f0fe7a["x-attribsPrefix"]
          }), _91a2259ffea9 = _e29815aa94d6;
        } else if (_564d09f0fe7a.type === _bed23b1c4e71.RJ.CDATA) {
          let _bed23b1c4e71 = _cd89175f9633 ? f(_564d09f0fe7a.children) : [], _e29815aa94d6 = new u(_bed23b1c4e71);
          _bed23b1c4e71.forEach(_564d09f0fe7a => _564d09f0fe7a.parent = _e29815aa94d6), _91a2259ffea9 = _e29815aa94d6;
        } else if (_564d09f0fe7a.type === _bed23b1c4e71.RJ.Root) {
          let _bed23b1c4e71 = _cd89175f9633 ? f(_564d09f0fe7a.children) : [], _e29815aa94d6 = new d(_bed23b1c4e71);
          _bed23b1c4e71.forEach(_564d09f0fe7a => _564d09f0fe7a.parent = _e29815aa94d6), _564d09f0fe7a["x-mode"] && (_e29815aa94d6["x-mode"] = _564d09f0fe7a["x-mode"]), 
          _91a2259ffea9 = _e29815aa94d6;
        } else if (_564d09f0fe7a.type === _bed23b1c4e71.RJ.Directive) {
          let _cd89175f9633 = new l(_564d09f0fe7a.name, _564d09f0fe7a.data);
          null != _564d09f0fe7a["x-name"] && (_cd89175f9633["x-name"] = _564d09f0fe7a["x-name"], 
          _cd89175f9633["x-publicId"] = _564d09f0fe7a["x-publicId"], _cd89175f9633["x-systemId"] = _564d09f0fe7a["x-systemId"]), 
          _91a2259ffea9 = _cd89175f9633;
        } else throw Error(`Not implemented yet: ${_564d09f0fe7a.type}`);
        return _91a2259ffea9.startIndex = _564d09f0fe7a.startIndex, _91a2259ffea9.endIndex = _564d09f0fe7a.endIndex, 
        null != _564d09f0fe7a.sourceCodeLocation && (_91a2259ffea9.sourceCodeLocation = _564d09f0fe7a.sourceCodeLocation), 
        _91a2259ffea9;
      }
      function f(_564d09f0fe7a) {
        let _cd89175f9633 = _564d09f0fe7a.map(_564d09f0fe7a => p(_564d09f0fe7a, !0));
        for (let _564d09f0fe7a = 1; _564d09f0fe7a < _cd89175f9633.length; _564d09f0fe7a++) _cd89175f9633[_564d09f0fe7a].prev = _cd89175f9633[_564d09f0fe7a - 1], 
        _cd89175f9633[_564d09f0fe7a - 1].next = _cd89175f9633[_564d09f0fe7a];
        return _cd89175f9633;
      }
    },
    3256: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9(5016), _91a2259ffea9(1050);
    },
    6812: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      var _bed23b1c4e71, _e29815aa94d6;
      _91a2259ffea9(8866), (_e29815aa94d6 = _bed23b1c4e71 || (_bed23b1c4e71 = {}))[_e29815aa94d6.DISCONNECTED = 1] = "DISCONNECTED", 
      _e29815aa94d6[_e29815aa94d6.PRECEDING = 2] = "PRECEDING", _e29815aa94d6[_e29815aa94d6.FOLLOWING = 4] = "FOLLOWING", 
      _e29815aa94d6[_e29815aa94d6.CONTAINS = 8] = "CONTAINS", _e29815aa94d6[_e29815aa94d6.CONTAINED_BY = 16] = "CONTAINED_BY";
    },
    4993: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9(5016), _91a2259ffea9(4647), _91a2259ffea9(9861), _91a2259ffea9(1050), 
      _91a2259ffea9(6812), _91a2259ffea9(3256), _91a2259ffea9(8866);
    },
    1050: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9(8866), _91a2259ffea9(9861);
    },
    9861: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9(8866);
    },
    5016: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9(8866), _91a2259ffea9(6498), _91a2259ffea9(2743);
    },
    4647: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9(8866);
    },
    2146: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      var _bed23b1c4e71;
      _91a2259ffea9.d(_cd89175f9633, {
        MK: () => _d879eb489a78,
        y6: () => s
      });
      let _e29815aa94d6 = new Map([ [ 0, 65533 ], [ 128, 8364 ], [ 130, 8218 ], [ 131, 402 ], [ 132, 8222 ], [ 133, 8230 ], [ 134, 8224 ], [ 135, 8225 ], [ 136, 710 ], [ 137, 8240 ], [ 138, 352 ], [ 139, 8249 ], [ 140, 338 ], [ 142, 381 ], [ 145, 8216 ], [ 146, 8217 ], [ 147, 8220 ], [ 148, 8221 ], [ 149, 8226 ], [ 150, 8211 ], [ 151, 8212 ], [ 152, 732 ], [ 153, 8482 ], [ 154, 353 ], [ 155, 8250 ], [ 156, 339 ], [ 158, 382 ], [ 159, 376 ] ]), _d879eb489a78 = null != (_bed23b1c4e71 = String.fromCodePoint) ? _bed23b1c4e71 : function(_564d09f0fe7a) {
        let _cd89175f9633 = "";
        return _564d09f0fe7a > 65535 && (_564d09f0fe7a -= 65536, _cd89175f9633 += String.fromCharCode(_564d09f0fe7a >>> 10 & 1023 | 55296), 
        _564d09f0fe7a = 56320 | 1023 & _564d09f0fe7a), _cd89175f9633 += String.fromCharCode(_564d09f0fe7a);
      };
      function s(_564d09f0fe7a) {
        var _cd89175f9633;
        return _564d09f0fe7a >= 55296 && _564d09f0fe7a <= 57343 || _564d09f0fe7a > 1114111 ? 65533 : null != (_cd89175f9633 = _e29815aa94d6.get(_564d09f0fe7a)) ? _cd89175f9633 : _564d09f0fe7a;
      }
    },
    2990: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.d(_cd89175f9633, {
        FJ: () => _029290fe381e,
        MK: () => _5695a624e761.MK,
        Wf: () => g,
        qN: () => _bad94b9ba2d5.q,
        sr: () => _5452948ead4c.s
      });
      var _bed23b1c4e71, _e29815aa94d6, _d879eb489a78, _d75b4034184e, _eced61b9ace5, _775f64df6c74, _90a7406a509b, _029290fe381e, _bad94b9ba2d5 = _91a2259ffea9(7259), _5452948ead4c = _91a2259ffea9(5949), _5695a624e761 = _91a2259ffea9(2146);
      function f(_564d09f0fe7a) {
        return _564d09f0fe7a >= _eced61b9ace5.ZERO && _564d09f0fe7a <= _eced61b9ace5.NINE;
      }
      (_bed23b1c4e71 = _eced61b9ace5 || (_eced61b9ace5 = {}))[_bed23b1c4e71.NUM = 35] = "NUM", 
      _bed23b1c4e71[_bed23b1c4e71.SEMI = 59] = "SEMI", _bed23b1c4e71[_bed23b1c4e71.EQUALS = 61] = "EQUALS", 
      _bed23b1c4e71[_bed23b1c4e71.ZERO = 48] = "ZERO", _bed23b1c4e71[_bed23b1c4e71.NINE = 57] = "NINE", 
      _bed23b1c4e71[_bed23b1c4e71.LOWER_A = 97] = "LOWER_A", _bed23b1c4e71[_bed23b1c4e71.LOWER_F = 102] = "LOWER_F", 
      _bed23b1c4e71[_bed23b1c4e71.LOWER_X = 120] = "LOWER_X", _bed23b1c4e71[_bed23b1c4e71.LOWER_Z = 122] = "LOWER_Z", 
      _bed23b1c4e71[_bed23b1c4e71.UPPER_A = 65] = "UPPER_A", _bed23b1c4e71[_bed23b1c4e71.UPPER_F = 70] = "UPPER_F", 
      _bed23b1c4e71[_bed23b1c4e71.UPPER_Z = 90] = "UPPER_Z", (_e29815aa94d6 = _775f64df6c74 || (_775f64df6c74 = {}))[_e29815aa94d6.VALUE_LENGTH = 49152] = "VALUE_LENGTH", 
      _e29815aa94d6[_e29815aa94d6.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", _e29815aa94d6[_e29815aa94d6.JUMP_TABLE = 127] = "JUMP_TABLE", 
      (_d879eb489a78 = _90a7406a509b || (_90a7406a509b = {}))[_d879eb489a78.EntityStart = 0] = "EntityStart", 
      _d879eb489a78[_d879eb489a78.NumericStart = 1] = "NumericStart", _d879eb489a78[_d879eb489a78.NumericDecimal = 2] = "NumericDecimal", 
      _d879eb489a78[_d879eb489a78.NumericHex = 3] = "NumericHex", _d879eb489a78[_d879eb489a78.NamedEntity = 4] = "NamedEntity", 
      (_d75b4034184e = _029290fe381e || (_029290fe381e = {}))[_d75b4034184e.Legacy = 0] = "Legacy", 
      _d75b4034184e[_d75b4034184e.Strict = 1] = "Strict", _d75b4034184e[_d75b4034184e.Attribute = 2] = "Attribute";
      class g {
        constructor(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
          this.decodeTree = _564d09f0fe7a, this.emitCodePoint = _cd89175f9633, this.errors = _91a2259ffea9, 
          this.state = _90a7406a509b.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, 
          this.excess = 1, this.decodeMode = _029290fe381e.Strict;
        }
        startEntity(_564d09f0fe7a) {
          this.decodeMode = _564d09f0fe7a, this.state = _90a7406a509b.EntityStart, this.result = 0, 
          this.treeIndex = 0, this.excess = 1, this.consumed = 1;
        }
        write(_564d09f0fe7a, _cd89175f9633) {
          switch (this.state) {
           case _90a7406a509b.EntityStart:
            if (_564d09f0fe7a.charCodeAt(_cd89175f9633) === _eced61b9ace5.NUM) return this.state = _90a7406a509b.NumericStart, 
            this.consumed += 1, this.stateNumericStart(_564d09f0fe7a, _cd89175f9633 + 1);
            return this.state = _90a7406a509b.NamedEntity, this.stateNamedEntity(_564d09f0fe7a, _cd89175f9633);

           case _90a7406a509b.NumericStart:
            return this.stateNumericStart(_564d09f0fe7a, _cd89175f9633);

           case _90a7406a509b.NumericDecimal:
            return this.stateNumericDecimal(_564d09f0fe7a, _cd89175f9633);

           case _90a7406a509b.NumericHex:
            return this.stateNumericHex(_564d09f0fe7a, _cd89175f9633);

           case _90a7406a509b.NamedEntity:
            return this.stateNamedEntity(_564d09f0fe7a, _cd89175f9633);
          }
        }
        stateNumericStart(_564d09f0fe7a, _cd89175f9633) {
          return _cd89175f9633 >= _564d09f0fe7a.length ? -1 : (32 | _564d09f0fe7a.charCodeAt(_cd89175f9633)) === _eced61b9ace5.LOWER_X ? (this.state = _90a7406a509b.NumericHex, 
          this.consumed += 1, this.stateNumericHex(_564d09f0fe7a, _cd89175f9633 + 1)) : (this.state = _90a7406a509b.NumericDecimal, 
          this.stateNumericDecimal(_564d09f0fe7a, _cd89175f9633));
        }
        addToNumericResult(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9, _bed23b1c4e71) {
          if (_cd89175f9633 !== _91a2259ffea9) {
            let _e29815aa94d6 = _91a2259ffea9 - _cd89175f9633;
            this.result = this.result * Math.pow(_bed23b1c4e71, _e29815aa94d6) + Number.parseInt(_564d09f0fe7a.substr(_cd89175f9633, _e29815aa94d6), _bed23b1c4e71), 
            this.consumed += _e29815aa94d6;
          }
        }
        stateNumericHex(_564d09f0fe7a, _cd89175f9633) {
          let _91a2259ffea9 = _cd89175f9633;
          for (;_cd89175f9633 < _564d09f0fe7a.length; ) {
            var _bed23b1c4e71;
            let _e29815aa94d6 = _564d09f0fe7a.charCodeAt(_cd89175f9633);
            if (!f(_e29815aa94d6) && (!((_bed23b1c4e71 = _e29815aa94d6) >= _eced61b9ace5.UPPER_A) || !(_bed23b1c4e71 <= _eced61b9ace5.UPPER_F)) && (!(_bed23b1c4e71 >= _eced61b9ace5.LOWER_A) || !(_bed23b1c4e71 <= _eced61b9ace5.LOWER_F))) return this.addToNumericResult(_564d09f0fe7a, _91a2259ffea9, _cd89175f9633, 16), 
            this.emitNumericEntity(_e29815aa94d6, 3);
            _cd89175f9633 += 1;
          }
          return this.addToNumericResult(_564d09f0fe7a, _91a2259ffea9, _cd89175f9633, 16), 
          -1;
        }
        stateNumericDecimal(_564d09f0fe7a, _cd89175f9633) {
          let _91a2259ffea9 = _cd89175f9633;
          for (;_cd89175f9633 < _564d09f0fe7a.length; ) {
            let _bed23b1c4e71 = _564d09f0fe7a.charCodeAt(_cd89175f9633);
            if (!f(_bed23b1c4e71)) return this.addToNumericResult(_564d09f0fe7a, _91a2259ffea9, _cd89175f9633, 10), 
            this.emitNumericEntity(_bed23b1c4e71, 2);
            _cd89175f9633 += 1;
          }
          return this.addToNumericResult(_564d09f0fe7a, _91a2259ffea9, _cd89175f9633, 10), 
          -1;
        }
        emitNumericEntity(_564d09f0fe7a, _cd89175f9633) {
          var _91a2259ffea9;
          if (this.consumed <= _cd89175f9633) return null == (_91a2259ffea9 = this.errors) || _91a2259ffea9.absenceOfDigitsInNumericCharacterReference(this.consumed), 
          0;
          if (_564d09f0fe7a === _eced61b9ace5.SEMI) this.consumed += 1; else if (this.decodeMode === _029290fe381e.Strict) return 0;
          return this.emitCodePoint((0, _5695a624e761.y6)(this.result), this.consumed), this.errors && (_564d09f0fe7a !== _eced61b9ace5.SEMI && this.errors.missingSemicolonAfterCharacterReference(), 
          this.errors.validateNumericCharacterReference(this.result)), this.consumed;
        }
        stateNamedEntity(_564d09f0fe7a, _cd89175f9633) {
          let {decodeTree: _91a2259ffea9} = this, _bed23b1c4e71 = _91a2259ffea9[this.treeIndex], _e29815aa94d6 = (_bed23b1c4e71 & _775f64df6c74.VALUE_LENGTH) >> 14;
          for (;_cd89175f9633 < _564d09f0fe7a.length; _cd89175f9633++, this.excess++) {
            let _d879eb489a78 = _564d09f0fe7a.charCodeAt(_cd89175f9633);
            if (this.treeIndex = function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9, _bed23b1c4e71) {
              let _e29815aa94d6 = (_cd89175f9633 & _775f64df6c74.BRANCH_LENGTH) >> 7, _d879eb489a78 = _cd89175f9633 & _775f64df6c74.JUMP_TABLE;
              if (0 === _e29815aa94d6) return 0 !== _d879eb489a78 && _bed23b1c4e71 === _d879eb489a78 ? _91a2259ffea9 : -1;
              if (_d879eb489a78) {
                let _cd89175f9633 = _bed23b1c4e71 - _d879eb489a78;
                return _cd89175f9633 < 0 || _cd89175f9633 >= _e29815aa94d6 ? -1 : _564d09f0fe7a[_91a2259ffea9 + _cd89175f9633] - 1;
              }
              let _d75b4034184e = _91a2259ffea9, _eced61b9ace5 = _d75b4034184e + _e29815aa94d6 - 1;
              for (;_d75b4034184e <= _eced61b9ace5; ) {
                let _cd89175f9633 = _d75b4034184e + _eced61b9ace5 >>> 1, _91a2259ffea9 = _564d09f0fe7a[_cd89175f9633];
                if (_91a2259ffea9 < _bed23b1c4e71) _d75b4034184e = _cd89175f9633 + 1; else {
                  if (!(_91a2259ffea9 > _bed23b1c4e71)) return _564d09f0fe7a[_cd89175f9633 + _e29815aa94d6];
                  _eced61b9ace5 = _cd89175f9633 - 1;
                }
              }
              return -1;
            }(_91a2259ffea9, _bed23b1c4e71, this.treeIndex + Math.max(1, _e29815aa94d6), _d879eb489a78), 
            this.treeIndex < 0) return 0 === this.result || this.decodeMode === _029290fe381e.Attribute && (0 === _e29815aa94d6 || function(_564d09f0fe7a) {
              var _cd89175f9633;
              return _564d09f0fe7a === _eced61b9ace5.EQUALS || (_cd89175f9633 = _564d09f0fe7a) >= _eced61b9ace5.UPPER_A && _cd89175f9633 <= _eced61b9ace5.UPPER_Z || _cd89175f9633 >= _eced61b9ace5.LOWER_A && _cd89175f9633 <= _eced61b9ace5.LOWER_Z || f(_cd89175f9633);
            }(_d879eb489a78)) ? 0 : this.emitNotTerminatedNamedEntity();
            if (0 != (_e29815aa94d6 = ((_bed23b1c4e71 = _91a2259ffea9[this.treeIndex]) & _775f64df6c74.VALUE_LENGTH) >> 14)) {
              if (_d879eb489a78 === _eced61b9ace5.SEMI) return this.emitNamedEntityData(this.treeIndex, _e29815aa94d6, this.consumed + this.excess);
              this.decodeMode !== _029290fe381e.Strict && (this.result = this.treeIndex, this.consumed += this.excess, 
              this.excess = 0);
            }
          }
          return -1;
        }
        emitNotTerminatedNamedEntity() {
          var _564d09f0fe7a;
          let {result: _cd89175f9633, decodeTree: _91a2259ffea9} = this, _bed23b1c4e71 = (_91a2259ffea9[_cd89175f9633] & _775f64df6c74.VALUE_LENGTH) >> 14;
          return this.emitNamedEntityData(_cd89175f9633, _bed23b1c4e71, this.consumed), null == (_564d09f0fe7a = this.errors) || _564d09f0fe7a.missingSemicolonAfterCharacterReference(), 
          this.consumed;
        }
        emitNamedEntityData(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
          let {decodeTree: _bed23b1c4e71} = this;
          return this.emitCodePoint(1 === _cd89175f9633 ? _bed23b1c4e71[_564d09f0fe7a] & ~_775f64df6c74.VALUE_LENGTH : _bed23b1c4e71[_564d09f0fe7a + 1], _91a2259ffea9), 
          3 === _cd89175f9633 && this.emitCodePoint(_bed23b1c4e71[_564d09f0fe7a + 2], _91a2259ffea9), 
          _91a2259ffea9;
        }
        end() {
          var _564d09f0fe7a;
          switch (this.state) {
           case _90a7406a509b.NamedEntity:
            return 0 !== this.result && (this.decodeMode !== _029290fe381e.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;

           case _90a7406a509b.NumericDecimal:
            return this.emitNumericEntity(0, 2);

           case _90a7406a509b.NumericHex:
            return this.emitNumericEntity(0, 3);

           case _90a7406a509b.NumericStart:
            return null == (_564d09f0fe7a = this.errors) || _564d09f0fe7a.absenceOfDigitsInNumericCharacterReference(this.consumed), 
            0;

           case _90a7406a509b.EntityStart:
            return 0;
          }
        }
      }
    },
    466: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9(9496), _91a2259ffea9(747);
    },
    747: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.d(_cd89175f9633, {
        Gj: () => _d75b4034184e,
        WY: () => s,
        X1: () => _eced61b9ace5
      });
      let _bed23b1c4e71 = /["$&'<>\u0080-\uFFFF]/g, _e29815aa94d6 = new Map([ [ 34, "&quot;" ], [ 38, "&amp;" ], [ 39, "&apos;" ], [ 60, "&lt;" ], [ 62, "&gt;" ] ]), _d879eb489a78 = null == String.prototype.codePointAt ? (_564d09f0fe7a, _cd89175f9633) => (64512 & _564d09f0fe7a.charCodeAt(_cd89175f9633)) == 55296 ? (_564d09f0fe7a.charCodeAt(_cd89175f9633) - 55296) * 1024 + _564d09f0fe7a.charCodeAt(_cd89175f9633 + 1) - 56320 + 65536 : _564d09f0fe7a.charCodeAt(_cd89175f9633) : (_564d09f0fe7a, _cd89175f9633) => _564d09f0fe7a.codePointAt(_cd89175f9633);
      function s(_564d09f0fe7a) {
        let _cd89175f9633, _91a2259ffea9 = "", _d75b4034184e = 0;
        for (;null !== (_cd89175f9633 = _bed23b1c4e71.exec(_564d09f0fe7a)); ) {
          let {index: _eced61b9ace5} = _cd89175f9633, _775f64df6c74 = _564d09f0fe7a.charCodeAt(_eced61b9ace5), _90a7406a509b = _e29815aa94d6.get(_775f64df6c74);
          void 0 === _90a7406a509b ? (_91a2259ffea9 += `${_564d09f0fe7a.substring(_d75b4034184e, _eced61b9ace5)}&#x${_d879eb489a78(_564d09f0fe7a, _eced61b9ace5).toString(16)};`, 
          _d75b4034184e = _bed23b1c4e71.lastIndex += Number((64512 & _775f64df6c74) == 55296)) : (_91a2259ffea9 += _564d09f0fe7a.substring(_d75b4034184e, _eced61b9ace5) + _90a7406a509b, 
          _d75b4034184e = _eced61b9ace5 + 1);
        }
        return _91a2259ffea9 + _564d09f0fe7a.substr(_d75b4034184e);
      }
      function o(_564d09f0fe7a, _cd89175f9633) {
        return function(_91a2259ffea9) {
          let _bed23b1c4e71, _e29815aa94d6 = 0, _d879eb489a78 = "";
          for (;_bed23b1c4e71 = _564d09f0fe7a.exec(_91a2259ffea9); ) _e29815aa94d6 !== _bed23b1c4e71.index && (_d879eb489a78 += _91a2259ffea9.substring(_e29815aa94d6, _bed23b1c4e71.index)), 
          _d879eb489a78 += _cd89175f9633.get(_bed23b1c4e71[0].charCodeAt(0)), _e29815aa94d6 = _bed23b1c4e71.index + 1;
          return _d879eb489a78 + _91a2259ffea9.substring(_e29815aa94d6);
        };
      }
      let _d75b4034184e = o(/["&\u00A0]/g, new Map([ [ 34, "&quot;" ], [ 38, "&amp;" ], [ 160, "&nbsp;" ] ])), _eced61b9ace5 = o(/[&<>\u00A0]/g, new Map([ [ 38, "&amp;" ], [ 60, "&lt;" ], [ 62, "&gt;" ], [ 160, "&nbsp;" ] ]));
    },
    7259: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.d(_cd89175f9633, {
        q: () => _bed23b1c4e71
      });
      let _bed23b1c4e71 = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(_564d09f0fe7a => _564d09f0fe7a.charCodeAt(0)));
    },
    5949: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.d(_cd89175f9633, {
        s: () => _bed23b1c4e71
      });
      let _bed23b1c4e71 = new Uint16Array("Ȁaglq\tɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(_564d09f0fe7a => _564d09f0fe7a.charCodeAt(0)));
    },
    9496: function() {},
    8466: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.d(_cd89175f9633, {
        Gj: () => _eced61b9ace5.Gj,
        WY: () => _eced61b9ace5.WY,
        X1: () => _eced61b9ace5.X1
      }), _91a2259ffea9(2990), _91a2259ffea9(466);
      var _bed23b1c4e71, _e29815aa94d6, _d879eb489a78, _d75b4034184e, _eced61b9ace5 = _91a2259ffea9(747);
      (_bed23b1c4e71 = _d879eb489a78 || (_d879eb489a78 = {}))[_bed23b1c4e71.XML = 0] = "XML", 
      _bed23b1c4e71[_bed23b1c4e71.HTML = 1] = "HTML", (_e29815aa94d6 = _d75b4034184e || (_d75b4034184e = {}))[_e29815aa94d6.UTF8 = 0] = "UTF8", 
      _e29815aa94d6[_e29815aa94d6.ASCII = 1] = "ASCII", _e29815aa94d6[_e29815aa94d6.Extensive = 2] = "Extensive", 
      _e29815aa94d6[_e29815aa94d6.Attribute = 3] = "Attribute", _e29815aa94d6[_e29815aa94d6.Text = 4] = "Text";
    },
    4645: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.d(_cd89175f9633, {
        i: () => g
      });
      var _bed23b1c4e71 = _91a2259ffea9(5645), _e29815aa94d6 = _91a2259ffea9(2990);
      let _d879eb489a78 = new Set([ "input", "option", "optgroup", "select", "button", "datalist", "textarea" ]), _d75b4034184e = new Set([ "p" ]), _eced61b9ace5 = new Set([ "thead", "tbody" ]), _775f64df6c74 = new Set([ "dd", "dt" ]), _90a7406a509b = new Set([ "rt", "rp" ]), _029290fe381e = new Map([ [ "tr", new Set([ "tr", "th", "td" ]) ], [ "th", new Set([ "th" ]) ], [ "td", new Set([ "thead", "th", "td" ]) ], [ "body", new Set([ "head", "link", "script" ]) ], [ "li", new Set([ "li" ]) ], [ "p", _d75b4034184e ], [ "h1", _d75b4034184e ], [ "h2", _d75b4034184e ], [ "h3", _d75b4034184e ], [ "h4", _d75b4034184e ], [ "h5", _d75b4034184e ], [ "h6", _d75b4034184e ], [ "select", _d879eb489a78 ], [ "input", _d879eb489a78 ], [ "output", _d879eb489a78 ], [ "button", _d879eb489a78 ], [ "datalist", _d879eb489a78 ], [ "textarea", _d879eb489a78 ], [ "option", new Set([ "option" ]) ], [ "optgroup", new Set([ "optgroup", "option" ]) ], [ "dd", _775f64df6c74 ], [ "dt", _775f64df6c74 ], [ "address", _d75b4034184e ], [ "article", _d75b4034184e ], [ "aside", _d75b4034184e ], [ "blockquote", _d75b4034184e ], [ "details", _d75b4034184e ], [ "div", _d75b4034184e ], [ "dl", _d75b4034184e ], [ "fieldset", _d75b4034184e ], [ "figcaption", _d75b4034184e ], [ "figure", _d75b4034184e ], [ "footer", _d75b4034184e ], [ "form", _d75b4034184e ], [ "header", _d75b4034184e ], [ "hr", _d75b4034184e ], [ "main", _d75b4034184e ], [ "nav", _d75b4034184e ], [ "ol", _d75b4034184e ], [ "pre", _d75b4034184e ], [ "section", _d75b4034184e ], [ "table", _d75b4034184e ], [ "ul", _d75b4034184e ], [ "rt", _90a7406a509b ], [ "rp", _90a7406a509b ], [ "tbody", _eced61b9ace5 ], [ "tfoot", _eced61b9ace5 ] ]), _bad94b9ba2d5 = new Set([ "area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr" ]), _5452948ead4c = new Set([ "math", "svg" ]), _5695a624e761 = new Set([ "mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title" ]), _45080c7acefd = /\s|\//;
      class g {
        constructor(_564d09f0fe7a, _cd89175f9633 = {}) {
          var _91a2259ffea9, _e29815aa94d6, _d879eb489a78, _d75b4034184e, _eced61b9ace5, _775f64df6c74;
          this.options = _cd89175f9633, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, 
          this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, 
          this.stack = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, 
          this.ended = !1, this.cbs = null != _564d09f0fe7a ? _564d09f0fe7a : {}, this.htmlMode = !this.options.xmlMode, 
          this.lowerCaseTagNames = null != (_91a2259ffea9 = _cd89175f9633.lowerCaseTags) ? _91a2259ffea9 : this.htmlMode, 
          this.lowerCaseAttributeNames = null != (_e29815aa94d6 = _cd89175f9633.lowerCaseAttributeNames) ? _e29815aa94d6 : this.htmlMode, 
          this.recognizeSelfClosing = null != (_d879eb489a78 = _cd89175f9633.recognizeSelfClosing) ? _d879eb489a78 : !this.htmlMode, 
          this.tokenizer = new (null != (_d75b4034184e = _cd89175f9633.Tokenizer) ? _d75b4034184e : _bed23b1c4e71.A)(this.options, this), 
          this.foreignContext = [ !this.htmlMode ], null == (_775f64df6c74 = (_eced61b9ace5 = this.cbs).onparserinit) || _775f64df6c74.call(_eced61b9ace5, this);
        }
        ontext(_564d09f0fe7a, _cd89175f9633) {
          var _91a2259ffea9, _bed23b1c4e71;
          let _e29815aa94d6 = this.getSlice(_564d09f0fe7a, _cd89175f9633);
          this.endIndex = _cd89175f9633 - 1, null == (_bed23b1c4e71 = (_91a2259ffea9 = this.cbs).ontext) || _bed23b1c4e71.call(_91a2259ffea9, _e29815aa94d6), 
          this.startIndex = _cd89175f9633;
        }
        ontextentity(_564d09f0fe7a, _cd89175f9633) {
          var _91a2259ffea9, _bed23b1c4e71;
          this.endIndex = _cd89175f9633 - 1, null == (_bed23b1c4e71 = (_91a2259ffea9 = this.cbs).ontext) || _bed23b1c4e71.call(_91a2259ffea9, (0, 
          _e29815aa94d6.MK)(_564d09f0fe7a)), this.startIndex = _cd89175f9633;
        }
        isVoidElement(_564d09f0fe7a) {
          return this.htmlMode && _bad94b9ba2d5.has(_564d09f0fe7a);
        }
        onopentagname(_564d09f0fe7a, _cd89175f9633) {
          this.endIndex = _cd89175f9633;
          let _91a2259ffea9 = this.getSlice(_564d09f0fe7a, _cd89175f9633);
          this.lowerCaseTagNames && (_91a2259ffea9 = _91a2259ffea9.toLowerCase()), this.emitOpenTag(_91a2259ffea9);
        }
        emitOpenTag(_564d09f0fe7a) {
          var _cd89175f9633, _91a2259ffea9, _bed23b1c4e71, _e29815aa94d6;
          this.openTagStart = this.startIndex, this.tagname = _564d09f0fe7a;
          let _d879eb489a78 = this.htmlMode && _029290fe381e.get(_564d09f0fe7a);
          if (_d879eb489a78) for (;this.stack.length > 0 && _d879eb489a78.has(this.stack[0]); ) {
            let _564d09f0fe7a = this.stack.shift();
            null == (_91a2259ffea9 = (_cd89175f9633 = this.cbs).onclosetag) || _91a2259ffea9.call(_cd89175f9633, _564d09f0fe7a, !0);
          }
          !this.isVoidElement(_564d09f0fe7a) && (this.stack.unshift(_564d09f0fe7a), this.htmlMode && (_5452948ead4c.has(_564d09f0fe7a) ? this.foreignContext.unshift(!0) : _5695a624e761.has(_564d09f0fe7a) && this.foreignContext.unshift(!1))), 
          null == (_e29815aa94d6 = (_bed23b1c4e71 = this.cbs).onopentagname) || _e29815aa94d6.call(_bed23b1c4e71, _564d09f0fe7a), 
          this.cbs.onopentag && (this.attribs = {});
        }
        endOpenTag(_564d09f0fe7a) {
          var _cd89175f9633, _91a2259ffea9;
          this.startIndex = this.openTagStart, this.attribs && (null == (_91a2259ffea9 = (_cd89175f9633 = this.cbs).onopentag) || _91a2259ffea9.call(_cd89175f9633, this.tagname, this.attribs, _564d09f0fe7a), 
          this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), 
          this.tagname = "";
        }
        onopentagend(_564d09f0fe7a) {
          this.endIndex = _564d09f0fe7a, this.endOpenTag(!1), this.startIndex = _564d09f0fe7a + 1;
        }
        onclosetag(_564d09f0fe7a, _cd89175f9633) {
          var _91a2259ffea9, _bed23b1c4e71, _e29815aa94d6, _d879eb489a78, _d75b4034184e, _eced61b9ace5, _775f64df6c74, _90a7406a509b;
          this.endIndex = _cd89175f9633;
          let _029290fe381e = this.getSlice(_564d09f0fe7a, _cd89175f9633);
          if (this.lowerCaseTagNames && (_029290fe381e = _029290fe381e.toLowerCase()), this.htmlMode && (_5452948ead4c.has(_029290fe381e) || _5695a624e761.has(_029290fe381e)) && this.foreignContext.shift(), 
          this.isVoidElement(_029290fe381e)) this.htmlMode && "br" === _029290fe381e && (null == (_d879eb489a78 = (_e29815aa94d6 = this.cbs).onopentagname) || _d879eb489a78.call(_e29815aa94d6, "br"), 
          null == (_eced61b9ace5 = (_d75b4034184e = this.cbs).onopentag) || _eced61b9ace5.call(_d75b4034184e, "br", {}, !0), 
          null == (_90a7406a509b = (_775f64df6c74 = this.cbs).onclosetag) || _90a7406a509b.call(_775f64df6c74, "br", !1)); else {
            let _564d09f0fe7a = this.stack.indexOf(_029290fe381e);
            if (-1 !== _564d09f0fe7a) for (let _cd89175f9633 = 0; _cd89175f9633 <= _564d09f0fe7a; _cd89175f9633++) {
              let _e29815aa94d6 = this.stack.shift();
              null == (_bed23b1c4e71 = (_91a2259ffea9 = this.cbs).onclosetag) || _bed23b1c4e71.call(_91a2259ffea9, _e29815aa94d6, _cd89175f9633 !== _564d09f0fe7a);
            } else this.htmlMode && "p" === _029290fe381e && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
          }
          this.startIndex = _cd89175f9633 + 1;
        }
        onselfclosingtag(_564d09f0fe7a) {
          this.endIndex = _564d09f0fe7a, this.recognizeSelfClosing || this.foreignContext[0] ? (this.closeCurrentTag(!1), 
          this.startIndex = _564d09f0fe7a + 1) : this.onopentagend(_564d09f0fe7a);
        }
        closeCurrentTag(_564d09f0fe7a) {
          var _cd89175f9633, _91a2259ffea9;
          let _bed23b1c4e71 = this.tagname;
          this.endOpenTag(_564d09f0fe7a), this.stack[0] === _bed23b1c4e71 && (null == (_91a2259ffea9 = (_cd89175f9633 = this.cbs).onclosetag) || _91a2259ffea9.call(_cd89175f9633, _bed23b1c4e71, !_564d09f0fe7a), 
          this.stack.shift());
        }
        onattribname(_564d09f0fe7a, _cd89175f9633) {
          this.startIndex = _564d09f0fe7a;
          let _91a2259ffea9 = this.getSlice(_564d09f0fe7a, _cd89175f9633);
          this.attribname = this.lowerCaseAttributeNames ? _91a2259ffea9.toLowerCase() : _91a2259ffea9;
        }
        onattribdata(_564d09f0fe7a, _cd89175f9633) {
          this.attribvalue += this.getSlice(_564d09f0fe7a, _cd89175f9633);
        }
        onattribentity(_564d09f0fe7a) {
          this.attribvalue += (0, _e29815aa94d6.MK)(_564d09f0fe7a);
        }
        onattribend(_564d09f0fe7a, _cd89175f9633) {
          var _91a2259ffea9, _e29815aa94d6;
          this.endIndex = _cd89175f9633, null == (_e29815aa94d6 = (_91a2259ffea9 = this.cbs).onattribute) || _e29815aa94d6.call(_91a2259ffea9, this.attribname, this.attribvalue, _564d09f0fe7a === _bed23b1c4e71.X.Double ? '"' : _564d09f0fe7a === _bed23b1c4e71.X.Single ? "'" : _564d09f0fe7a === _bed23b1c4e71.X.NoValue ? void 0 : null), 
          this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), 
          this.attribvalue = "";
        }
        getInstructionName(_564d09f0fe7a) {
          let _cd89175f9633 = _564d09f0fe7a.search(_45080c7acefd), _91a2259ffea9 = _cd89175f9633 < 0 ? _564d09f0fe7a : _564d09f0fe7a.substr(0, _cd89175f9633);
          return this.lowerCaseTagNames && (_91a2259ffea9 = _91a2259ffea9.toLowerCase()), 
          _91a2259ffea9;
        }
        ondeclaration(_564d09f0fe7a, _cd89175f9633) {
          this.endIndex = _cd89175f9633;
          let _91a2259ffea9 = this.getSlice(_564d09f0fe7a, _cd89175f9633);
          if (this.cbs.onprocessinginstruction) {
            let _564d09f0fe7a = this.getInstructionName(_91a2259ffea9);
            this.cbs.onprocessinginstruction(`!${_564d09f0fe7a}`, `!${_91a2259ffea9}`);
          }
          this.startIndex = _cd89175f9633 + 1;
        }
        onprocessinginstruction(_564d09f0fe7a, _cd89175f9633) {
          this.endIndex = _cd89175f9633;
          let _91a2259ffea9 = this.getSlice(_564d09f0fe7a, _cd89175f9633);
          if (this.cbs.onprocessinginstruction) {
            let _564d09f0fe7a = this.getInstructionName(_91a2259ffea9);
            this.cbs.onprocessinginstruction(`?${_564d09f0fe7a}`, `?${_91a2259ffea9}`);
          }
          this.startIndex = _cd89175f9633 + 1;
        }
        oncomment(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
          var _bed23b1c4e71, _e29815aa94d6, _d879eb489a78, _d75b4034184e;
          this.endIndex = _cd89175f9633, null == (_e29815aa94d6 = (_bed23b1c4e71 = this.cbs).oncomment) || _e29815aa94d6.call(_bed23b1c4e71, this.getSlice(_564d09f0fe7a, _cd89175f9633 - _91a2259ffea9)), 
          null == (_d75b4034184e = (_d879eb489a78 = this.cbs).oncommentend) || _d75b4034184e.call(_d879eb489a78), 
          this.startIndex = _cd89175f9633 + 1;
        }
        oncdata(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
          var _bed23b1c4e71, _e29815aa94d6, _d879eb489a78, _d75b4034184e, _eced61b9ace5, _775f64df6c74, _90a7406a509b, _029290fe381e, _bad94b9ba2d5, _5452948ead4c;
          this.endIndex = _cd89175f9633;
          let _5695a624e761 = this.getSlice(_564d09f0fe7a, _cd89175f9633 - _91a2259ffea9);
          !this.htmlMode || this.options.recognizeCDATA ? (null == (_e29815aa94d6 = (_bed23b1c4e71 = this.cbs).oncdatastart) || _e29815aa94d6.call(_bed23b1c4e71), 
          null == (_d75b4034184e = (_d879eb489a78 = this.cbs).ontext) || _d75b4034184e.call(_d879eb489a78, _5695a624e761), 
          null == (_775f64df6c74 = (_eced61b9ace5 = this.cbs).oncdataend) || _775f64df6c74.call(_eced61b9ace5)) : (null == (_029290fe381e = (_90a7406a509b = this.cbs).oncomment) || _029290fe381e.call(_90a7406a509b, `[CDATA[${_5695a624e761}]]`), 
          null == (_5452948ead4c = (_bad94b9ba2d5 = this.cbs).oncommentend) || _5452948ead4c.call(_bad94b9ba2d5)), 
          this.startIndex = _cd89175f9633 + 1;
        }
        onend() {
          var _564d09f0fe7a, _cd89175f9633;
          if (this.cbs.onclosetag) {
            this.endIndex = this.startIndex;
            for (let _564d09f0fe7a = 0; _564d09f0fe7a < this.stack.length; _564d09f0fe7a++) this.cbs.onclosetag(this.stack[_564d09f0fe7a], !0);
          }
          null == (_cd89175f9633 = (_564d09f0fe7a = this.cbs).onend) || _cd89175f9633.call(_564d09f0fe7a);
        }
        reset() {
          var _564d09f0fe7a, _cd89175f9633, _91a2259ffea9, _bed23b1c4e71;
          null == (_cd89175f9633 = (_564d09f0fe7a = this.cbs).onreset) || _cd89175f9633.call(_564d09f0fe7a), 
          this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, 
          this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, null == (_bed23b1c4e71 = (_91a2259ffea9 = this.cbs).onparserinit) || _bed23b1c4e71.call(_91a2259ffea9, this), 
          this.buffers.length = 0, this.foreignContext.length = 0, this.foreignContext.unshift(!this.htmlMode), 
          this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1;
        }
        parseComplete(_564d09f0fe7a) {
          this.reset(), this.end(_564d09f0fe7a);
        }
        getSlice(_564d09f0fe7a, _cd89175f9633) {
          for (;_564d09f0fe7a - this.bufferOffset >= this.buffers[0].length; ) this.shiftBuffer();
          let _91a2259ffea9 = this.buffers[0].slice(_564d09f0fe7a - this.bufferOffset, _cd89175f9633 - this.bufferOffset);
          for (;_cd89175f9633 - this.bufferOffset > this.buffers[0].length; ) this.shiftBuffer(), 
          _91a2259ffea9 += this.buffers[0].slice(0, _cd89175f9633 - this.bufferOffset);
          return _91a2259ffea9;
        }
        shiftBuffer() {
          this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift();
        }
        write(_564d09f0fe7a) {
          var _cd89175f9633, _91a2259ffea9;
          if (this.ended) {
            null == (_91a2259ffea9 = (_cd89175f9633 = this.cbs).onerror) || _91a2259ffea9.call(_cd89175f9633, Error(".write() after done!"));
            return;
          }
          this.buffers.push(_564d09f0fe7a), this.tokenizer.running && (this.tokenizer.write(_564d09f0fe7a), 
          this.writeIndex++);
        }
        end(_564d09f0fe7a) {
          var _cd89175f9633, _91a2259ffea9;
          if (this.ended) {
            null == (_91a2259ffea9 = (_cd89175f9633 = this.cbs).onerror) || _91a2259ffea9.call(_cd89175f9633, Error(".end() after done!"));
            return;
          }
          _564d09f0fe7a && this.write(_564d09f0fe7a), this.ended = !0, this.tokenizer.end();
        }
        pause() {
          this.tokenizer.pause();
        }
        resume() {
          for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length; ) this.tokenizer.write(this.buffers[this.writeIndex++]);
          this.ended && this.tokenizer.end();
        }
        parseChunk(_564d09f0fe7a) {
          this.write(_564d09f0fe7a);
        }
        done(_564d09f0fe7a) {
          this.end(_564d09f0fe7a);
        }
      }
    },
    5645: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.d(_cd89175f9633, {
        A: () => p,
        X: () => _775f64df6c74
      });
      var _bed23b1c4e71, _e29815aa94d6, _d879eb489a78, _d75b4034184e, _eced61b9ace5, _775f64df6c74, _90a7406a509b = _91a2259ffea9(2990);
      function u(_564d09f0fe7a) {
        return _564d09f0fe7a === _d75b4034184e.Space || _564d09f0fe7a === _d75b4034184e.NewLine || _564d09f0fe7a === _d75b4034184e.Tab || _564d09f0fe7a === _d75b4034184e.FormFeed || _564d09f0fe7a === _d75b4034184e.CarriageReturn;
      }
      function d(_564d09f0fe7a) {
        return _564d09f0fe7a === _d75b4034184e.Slash || _564d09f0fe7a === _d75b4034184e.Gt || u(_564d09f0fe7a);
      }
      (_bed23b1c4e71 = _d75b4034184e || (_d75b4034184e = {}))[_bed23b1c4e71.Tab = 9] = "Tab", 
      _bed23b1c4e71[_bed23b1c4e71.NewLine = 10] = "NewLine", _bed23b1c4e71[_bed23b1c4e71.FormFeed = 12] = "FormFeed", 
      _bed23b1c4e71[_bed23b1c4e71.CarriageReturn = 13] = "CarriageReturn", _bed23b1c4e71[_bed23b1c4e71.Space = 32] = "Space", 
      _bed23b1c4e71[_bed23b1c4e71.ExclamationMark = 33] = "ExclamationMark", _bed23b1c4e71[_bed23b1c4e71.Number = 35] = "Number", 
      _bed23b1c4e71[_bed23b1c4e71.Amp = 38] = "Amp", _bed23b1c4e71[_bed23b1c4e71.SingleQuote = 39] = "SingleQuote", 
      _bed23b1c4e71[_bed23b1c4e71.DoubleQuote = 34] = "DoubleQuote", _bed23b1c4e71[_bed23b1c4e71.Dash = 45] = "Dash", 
      _bed23b1c4e71[_bed23b1c4e71.Slash = 47] = "Slash", _bed23b1c4e71[_bed23b1c4e71.Zero = 48] = "Zero", 
      _bed23b1c4e71[_bed23b1c4e71.Nine = 57] = "Nine", _bed23b1c4e71[_bed23b1c4e71.Semi = 59] = "Semi", 
      _bed23b1c4e71[_bed23b1c4e71.Lt = 60] = "Lt", _bed23b1c4e71[_bed23b1c4e71.Eq = 61] = "Eq", 
      _bed23b1c4e71[_bed23b1c4e71.Gt = 62] = "Gt", _bed23b1c4e71[_bed23b1c4e71.Questionmark = 63] = "Questionmark", 
      _bed23b1c4e71[_bed23b1c4e71.UpperA = 65] = "UpperA", _bed23b1c4e71[_bed23b1c4e71.LowerA = 97] = "LowerA", 
      _bed23b1c4e71[_bed23b1c4e71.UpperF = 70] = "UpperF", _bed23b1c4e71[_bed23b1c4e71.LowerF = 102] = "LowerF", 
      _bed23b1c4e71[_bed23b1c4e71.UpperZ = 90] = "UpperZ", _bed23b1c4e71[_bed23b1c4e71.LowerZ = 122] = "LowerZ", 
      _bed23b1c4e71[_bed23b1c4e71.LowerX = 120] = "LowerX", _bed23b1c4e71[_bed23b1c4e71.OpeningSquareBracket = 91] = "OpeningSquareBracket", 
      (_e29815aa94d6 = _eced61b9ace5 || (_eced61b9ace5 = {}))[_e29815aa94d6.Text = 1] = "Text", 
      _e29815aa94d6[_e29815aa94d6.BeforeTagName = 2] = "BeforeTagName", _e29815aa94d6[_e29815aa94d6.InTagName = 3] = "InTagName", 
      _e29815aa94d6[_e29815aa94d6.InSelfClosingTag = 4] = "InSelfClosingTag", _e29815aa94d6[_e29815aa94d6.BeforeClosingTagName = 5] = "BeforeClosingTagName", 
      _e29815aa94d6[_e29815aa94d6.InClosingTagName = 6] = "InClosingTagName", _e29815aa94d6[_e29815aa94d6.AfterClosingTagName = 7] = "AfterClosingTagName", 
      _e29815aa94d6[_e29815aa94d6.BeforeAttributeName = 8] = "BeforeAttributeName", _e29815aa94d6[_e29815aa94d6.InAttributeName = 9] = "InAttributeName", 
      _e29815aa94d6[_e29815aa94d6.AfterAttributeName = 10] = "AfterAttributeName", _e29815aa94d6[_e29815aa94d6.BeforeAttributeValue = 11] = "BeforeAttributeValue", 
      _e29815aa94d6[_e29815aa94d6.InAttributeValueDq = 12] = "InAttributeValueDq", _e29815aa94d6[_e29815aa94d6.InAttributeValueSq = 13] = "InAttributeValueSq", 
      _e29815aa94d6[_e29815aa94d6.InAttributeValueNq = 14] = "InAttributeValueNq", _e29815aa94d6[_e29815aa94d6.BeforeDeclaration = 15] = "BeforeDeclaration", 
      _e29815aa94d6[_e29815aa94d6.InDeclaration = 16] = "InDeclaration", _e29815aa94d6[_e29815aa94d6.InProcessingInstruction = 17] = "InProcessingInstruction", 
      _e29815aa94d6[_e29815aa94d6.BeforeComment = 18] = "BeforeComment", _e29815aa94d6[_e29815aa94d6.CDATASequence = 19] = "CDATASequence", 
      _e29815aa94d6[_e29815aa94d6.InSpecialComment = 20] = "InSpecialComment", _e29815aa94d6[_e29815aa94d6.InCommentLike = 21] = "InCommentLike", 
      _e29815aa94d6[_e29815aa94d6.BeforeSpecialS = 22] = "BeforeSpecialS", _e29815aa94d6[_e29815aa94d6.BeforeSpecialT = 23] = "BeforeSpecialT", 
      _e29815aa94d6[_e29815aa94d6.SpecialStartSequence = 24] = "SpecialStartSequence", 
      _e29815aa94d6[_e29815aa94d6.InSpecialTag = 25] = "InSpecialTag", _e29815aa94d6[_e29815aa94d6.InEntity = 26] = "InEntity", 
      (_d879eb489a78 = _775f64df6c74 || (_775f64df6c74 = {}))[_d879eb489a78.NoValue = 0] = "NoValue", 
      _d879eb489a78[_d879eb489a78.Unquoted = 1] = "Unquoted", _d879eb489a78[_d879eb489a78.Single = 2] = "Single", 
      _d879eb489a78[_d879eb489a78.Double = 3] = "Double";
      let _029290fe381e = {
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
        constructor({xmlMode: _564d09f0fe7a = !1, decodeEntities: _cd89175f9633 = !0}, _91a2259ffea9) {
          this.cbs = _91a2259ffea9, this.state = _eced61b9ace5.Text, this.buffer = "", this.sectionStart = 0, 
          this.index = 0, this.entityStart = 0, this.baseState = _eced61b9ace5.Text, this.isSpecial = !1, 
          this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, 
          this.xmlMode = _564d09f0fe7a, this.decodeEntities = _cd89175f9633, this.entityDecoder = new _90a7406a509b.Wf(_564d09f0fe7a ? _90a7406a509b.sr : _90a7406a509b.qN, (_564d09f0fe7a, _cd89175f9633) => this.emitCodePoint(_564d09f0fe7a, _cd89175f9633));
        }
        reset() {
          this.state = _eced61b9ace5.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, 
          this.baseState = _eced61b9ace5.Text, this.currentSequence = void 0, this.running = !0, 
          this.offset = 0;
        }
        write(_564d09f0fe7a) {
          this.offset += this.buffer.length, this.buffer = _564d09f0fe7a, this.parse();
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
        stateText(_564d09f0fe7a) {
          _564d09f0fe7a === _d75b4034184e.Lt || !this.decodeEntities && this.fastForwardTo(_d75b4034184e.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), 
          this.state = _eced61b9ace5.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && _564d09f0fe7a === _d75b4034184e.Amp && this.startEntity();
        }
        stateSpecialStartSequence(_564d09f0fe7a) {
          let _cd89175f9633 = this.sequenceIndex === this.currentSequence.length;
          if (_cd89175f9633 ? d(_564d09f0fe7a) : (32 | _564d09f0fe7a) === this.currentSequence[this.sequenceIndex]) {
            if (!_cd89175f9633) return void this.sequenceIndex++;
          } else this.isSpecial = !1;
          this.sequenceIndex = 0, this.state = _eced61b9ace5.InTagName, this.stateInTagName(_564d09f0fe7a);
        }
        stateInSpecialTag(_564d09f0fe7a) {
          if (this.sequenceIndex === this.currentSequence.length) {
            if (_564d09f0fe7a === _d75b4034184e.Gt || u(_564d09f0fe7a)) {
              let _cd89175f9633 = this.index - this.currentSequence.length;
              if (this.sectionStart < _cd89175f9633) {
                let _564d09f0fe7a = this.index;
                this.index = _cd89175f9633, this.cbs.ontext(this.sectionStart, _cd89175f9633), this.index = _564d09f0fe7a;
              }
              this.isSpecial = !1, this.sectionStart = _cd89175f9633 + 2, this.stateInClosingTagName(_564d09f0fe7a);
              return;
            }
            this.sequenceIndex = 0;
          }
          (32 | _564d09f0fe7a) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : 0 === this.sequenceIndex ? this.currentSequence === _029290fe381e.TitleEnd ? this.decodeEntities && _564d09f0fe7a === _d75b4034184e.Amp && this.startEntity() : this.fastForwardTo(_d75b4034184e.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = Number(_564d09f0fe7a === _d75b4034184e.Lt);
        }
        stateCDATASequence(_564d09f0fe7a) {
          _564d09f0fe7a === _029290fe381e.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === _029290fe381e.Cdata.length && (this.state = _eced61b9ace5.InCommentLike, 
          this.currentSequence = _029290fe381e.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, 
          this.state = _eced61b9ace5.InDeclaration, this.stateInDeclaration(_564d09f0fe7a));
        }
        fastForwardTo(_564d09f0fe7a) {
          for (;++this.index < this.buffer.length + this.offset; ) if (this.buffer.charCodeAt(this.index - this.offset) === _564d09f0fe7a) return !0;
          return this.index = this.buffer.length + this.offset - 1, !1;
        }
        stateInCommentLike(_564d09f0fe7a) {
          _564d09f0fe7a === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === _029290fe381e.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), 
          this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = _eced61b9ace5.Text) : 0 === this.sequenceIndex ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : _564d09f0fe7a !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
        }
        isTagStartChar(_564d09f0fe7a) {
          return this.xmlMode ? !d(_564d09f0fe7a) : _564d09f0fe7a >= _d75b4034184e.LowerA && _564d09f0fe7a <= _d75b4034184e.LowerZ || _564d09f0fe7a >= _d75b4034184e.UpperA && _564d09f0fe7a <= _d75b4034184e.UpperZ;
        }
        startSpecial(_564d09f0fe7a, _cd89175f9633) {
          this.isSpecial = !0, this.currentSequence = _564d09f0fe7a, this.sequenceIndex = _cd89175f9633, 
          this.state = _eced61b9ace5.SpecialStartSequence;
        }
        stateBeforeTagName(_564d09f0fe7a) {
          if (_564d09f0fe7a === _d75b4034184e.ExclamationMark) this.state = _eced61b9ace5.BeforeDeclaration, 
          this.sectionStart = this.index + 1; else if (_564d09f0fe7a === _d75b4034184e.Questionmark) this.state = _eced61b9ace5.InProcessingInstruction, 
          this.sectionStart = this.index + 1; else if (this.isTagStartChar(_564d09f0fe7a)) {
            let _cd89175f9633 = 32 | _564d09f0fe7a;
            this.sectionStart = this.index, this.xmlMode ? this.state = _eced61b9ace5.InTagName : _cd89175f9633 === _029290fe381e.ScriptEnd[2] ? this.state = _eced61b9ace5.BeforeSpecialS : _cd89175f9633 === _029290fe381e.TitleEnd[2] || _cd89175f9633 === _029290fe381e.XmpEnd[2] ? this.state = _eced61b9ace5.BeforeSpecialT : this.state = _eced61b9ace5.InTagName;
          } else _564d09f0fe7a === _d75b4034184e.Slash ? this.state = _eced61b9ace5.BeforeClosingTagName : (this.state = _eced61b9ace5.Text, 
          this.stateText(_564d09f0fe7a));
        }
        stateInTagName(_564d09f0fe7a) {
          d(_564d09f0fe7a) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, 
          this.state = _eced61b9ace5.BeforeAttributeName, this.stateBeforeAttributeName(_564d09f0fe7a));
        }
        stateBeforeClosingTagName(_564d09f0fe7a) {
          u(_564d09f0fe7a) || (_564d09f0fe7a === _d75b4034184e.Gt ? this.state = _eced61b9ace5.Text : (this.state = this.isTagStartChar(_564d09f0fe7a) ? _eced61b9ace5.InClosingTagName : _eced61b9ace5.InSpecialComment, 
          this.sectionStart = this.index));
        }
        stateInClosingTagName(_564d09f0fe7a) {
          (_564d09f0fe7a === _d75b4034184e.Gt || u(_564d09f0fe7a)) && (this.cbs.onclosetag(this.sectionStart, this.index), 
          this.sectionStart = -1, this.state = _eced61b9ace5.AfterClosingTagName, this.stateAfterClosingTagName(_564d09f0fe7a));
        }
        stateAfterClosingTagName(_564d09f0fe7a) {
          (_564d09f0fe7a === _d75b4034184e.Gt || this.fastForwardTo(_d75b4034184e.Gt)) && (this.state = _eced61b9ace5.Text, 
          this.sectionStart = this.index + 1);
        }
        stateBeforeAttributeName(_564d09f0fe7a) {
          _564d09f0fe7a === _d75b4034184e.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = _eced61b9ace5.InSpecialTag, 
          this.sequenceIndex = 0) : this.state = _eced61b9ace5.Text, this.sectionStart = this.index + 1) : _564d09f0fe7a === _d75b4034184e.Slash ? this.state = _eced61b9ace5.InSelfClosingTag : u(_564d09f0fe7a) || (this.state = _eced61b9ace5.InAttributeName, 
          this.sectionStart = this.index);
        }
        stateInSelfClosingTag(_564d09f0fe7a) {
          _564d09f0fe7a === _d75b4034184e.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = _eced61b9ace5.Text, 
          this.sectionStart = this.index + 1, this.isSpecial = !1) : u(_564d09f0fe7a) || (this.state = _eced61b9ace5.BeforeAttributeName, 
          this.stateBeforeAttributeName(_564d09f0fe7a));
        }
        stateInAttributeName(_564d09f0fe7a) {
          (_564d09f0fe7a === _d75b4034184e.Eq || d(_564d09f0fe7a)) && (this.cbs.onattribname(this.sectionStart, this.index), 
          this.sectionStart = this.index, this.state = _eced61b9ace5.AfterAttributeName, this.stateAfterAttributeName(_564d09f0fe7a));
        }
        stateAfterAttributeName(_564d09f0fe7a) {
          _564d09f0fe7a === _d75b4034184e.Eq ? this.state = _eced61b9ace5.BeforeAttributeValue : _564d09f0fe7a === _d75b4034184e.Slash || _564d09f0fe7a === _d75b4034184e.Gt ? (this.cbs.onattribend(_775f64df6c74.NoValue, this.sectionStart), 
          this.sectionStart = -1, this.state = _eced61b9ace5.BeforeAttributeName, this.stateBeforeAttributeName(_564d09f0fe7a)) : u(_564d09f0fe7a) || (this.cbs.onattribend(_775f64df6c74.NoValue, this.sectionStart), 
          this.state = _eced61b9ace5.InAttributeName, this.sectionStart = this.index);
        }
        stateBeforeAttributeValue(_564d09f0fe7a) {
          _564d09f0fe7a === _d75b4034184e.DoubleQuote ? (this.state = _eced61b9ace5.InAttributeValueDq, 
          this.sectionStart = this.index + 1) : _564d09f0fe7a === _d75b4034184e.SingleQuote ? (this.state = _eced61b9ace5.InAttributeValueSq, 
          this.sectionStart = this.index + 1) : u(_564d09f0fe7a) || (this.sectionStart = this.index, 
          this.state = _eced61b9ace5.InAttributeValueNq, this.stateInAttributeValueNoQuotes(_564d09f0fe7a));
        }
        handleInAttributeValue(_564d09f0fe7a, _cd89175f9633) {
          _564d09f0fe7a === _cd89175f9633 || !this.decodeEntities && this.fastForwardTo(_cd89175f9633) ? (this.cbs.onattribdata(this.sectionStart, this.index), 
          this.sectionStart = -1, this.cbs.onattribend(_cd89175f9633 === _d75b4034184e.DoubleQuote ? _775f64df6c74.Double : _775f64df6c74.Single, this.index + 1), 
          this.state = _eced61b9ace5.BeforeAttributeName) : this.decodeEntities && _564d09f0fe7a === _d75b4034184e.Amp && this.startEntity();
        }
        stateInAttributeValueDoubleQuotes(_564d09f0fe7a) {
          this.handleInAttributeValue(_564d09f0fe7a, _d75b4034184e.DoubleQuote);
        }
        stateInAttributeValueSingleQuotes(_564d09f0fe7a) {
          this.handleInAttributeValue(_564d09f0fe7a, _d75b4034184e.SingleQuote);
        }
        stateInAttributeValueNoQuotes(_564d09f0fe7a) {
          u(_564d09f0fe7a) || _564d09f0fe7a === _d75b4034184e.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), 
          this.sectionStart = -1, this.cbs.onattribend(_775f64df6c74.Unquoted, this.index), 
          this.state = _eced61b9ace5.BeforeAttributeName, this.stateBeforeAttributeName(_564d09f0fe7a)) : this.decodeEntities && _564d09f0fe7a === _d75b4034184e.Amp && this.startEntity();
        }
        stateBeforeDeclaration(_564d09f0fe7a) {
          _564d09f0fe7a === _d75b4034184e.OpeningSquareBracket ? (this.state = _eced61b9ace5.CDATASequence, 
          this.sequenceIndex = 0) : this.state = _564d09f0fe7a === _d75b4034184e.Dash ? _eced61b9ace5.BeforeComment : _eced61b9ace5.InDeclaration;
        }
        stateInDeclaration(_564d09f0fe7a) {
          (_564d09f0fe7a === _d75b4034184e.Gt || this.fastForwardTo(_d75b4034184e.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), 
          this.state = _eced61b9ace5.Text, this.sectionStart = this.index + 1);
        }
        stateInProcessingInstruction(_564d09f0fe7a) {
          (_564d09f0fe7a === _d75b4034184e.Gt || this.fastForwardTo(_d75b4034184e.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), 
          this.state = _eced61b9ace5.Text, this.sectionStart = this.index + 1);
        }
        stateBeforeComment(_564d09f0fe7a) {
          _564d09f0fe7a === _d75b4034184e.Dash ? (this.state = _eced61b9ace5.InCommentLike, 
          this.currentSequence = _029290fe381e.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = _eced61b9ace5.InDeclaration;
        }
        stateInSpecialComment(_564d09f0fe7a) {
          (_564d09f0fe7a === _d75b4034184e.Gt || this.fastForwardTo(_d75b4034184e.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), 
          this.state = _eced61b9ace5.Text, this.sectionStart = this.index + 1);
        }
        stateBeforeSpecialS(_564d09f0fe7a) {
          let _cd89175f9633 = 32 | _564d09f0fe7a;
          _cd89175f9633 === _029290fe381e.ScriptEnd[3] ? this.startSpecial(_029290fe381e.ScriptEnd, 4) : _cd89175f9633 === _029290fe381e.StyleEnd[3] ? this.startSpecial(_029290fe381e.StyleEnd, 4) : (this.state = _eced61b9ace5.InTagName, 
          this.stateInTagName(_564d09f0fe7a));
        }
        stateBeforeSpecialT(_564d09f0fe7a) {
          switch (32 | _564d09f0fe7a) {
           case _029290fe381e.TitleEnd[3]:
            this.startSpecial(_029290fe381e.TitleEnd, 4);
            break;

           case _029290fe381e.TextareaEnd[3]:
            this.startSpecial(_029290fe381e.TextareaEnd, 4);
            break;

           case _029290fe381e.XmpEnd[3]:
            this.startSpecial(_029290fe381e.XmpEnd, 4);
            break;

           default:
            this.state = _eced61b9ace5.InTagName, this.stateInTagName(_564d09f0fe7a);
          }
        }
        startEntity() {
          this.baseState = this.state, this.state = _eced61b9ace5.InEntity, this.entityStart = this.index, 
          this.entityDecoder.startEntity(this.xmlMode ? _90a7406a509b.FJ.Strict : this.baseState === _eced61b9ace5.Text || this.baseState === _eced61b9ace5.InSpecialTag ? _90a7406a509b.FJ.Legacy : _90a7406a509b.FJ.Attribute);
        }
        stateInEntity() {
          let _564d09f0fe7a = this.entityDecoder.write(this.buffer, this.index - this.offset);
          _564d09f0fe7a >= 0 ? (this.state = this.baseState, 0 === _564d09f0fe7a && (this.index = this.entityStart)) : this.index = this.offset + this.buffer.length - 1;
        }
        cleanup() {
          this.running && this.sectionStart !== this.index && (this.state === _eced61b9ace5.Text || this.state === _eced61b9ace5.InSpecialTag && 0 === this.sequenceIndex ? (this.cbs.ontext(this.sectionStart, this.index), 
          this.sectionStart = this.index) : (this.state === _eced61b9ace5.InAttributeValueDq || this.state === _eced61b9ace5.InAttributeValueSq || this.state === _eced61b9ace5.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), 
          this.sectionStart = this.index));
        }
        shouldContinue() {
          return this.index < this.buffer.length + this.offset && this.running;
        }
        parse() {
          for (;this.shouldContinue(); ) {
            let _564d09f0fe7a = this.buffer.charCodeAt(this.index - this.offset);
            switch (this.state) {
             case _eced61b9ace5.Text:
              this.stateText(_564d09f0fe7a);
              break;

             case _eced61b9ace5.SpecialStartSequence:
              this.stateSpecialStartSequence(_564d09f0fe7a);
              break;

             case _eced61b9ace5.InSpecialTag:
              this.stateInSpecialTag(_564d09f0fe7a);
              break;

             case _eced61b9ace5.CDATASequence:
              this.stateCDATASequence(_564d09f0fe7a);
              break;

             case _eced61b9ace5.InAttributeValueDq:
              this.stateInAttributeValueDoubleQuotes(_564d09f0fe7a);
              break;

             case _eced61b9ace5.InAttributeName:
              this.stateInAttributeName(_564d09f0fe7a);
              break;

             case _eced61b9ace5.InCommentLike:
              this.stateInCommentLike(_564d09f0fe7a);
              break;

             case _eced61b9ace5.InSpecialComment:
              this.stateInSpecialComment(_564d09f0fe7a);
              break;

             case _eced61b9ace5.BeforeAttributeName:
              this.stateBeforeAttributeName(_564d09f0fe7a);
              break;

             case _eced61b9ace5.InTagName:
              this.stateInTagName(_564d09f0fe7a);
              break;

             case _eced61b9ace5.InClosingTagName:
              this.stateInClosingTagName(_564d09f0fe7a);
              break;

             case _eced61b9ace5.BeforeTagName:
              this.stateBeforeTagName(_564d09f0fe7a);
              break;

             case _eced61b9ace5.AfterAttributeName:
              this.stateAfterAttributeName(_564d09f0fe7a);
              break;

             case _eced61b9ace5.InAttributeValueSq:
              this.stateInAttributeValueSingleQuotes(_564d09f0fe7a);
              break;

             case _eced61b9ace5.BeforeAttributeValue:
              this.stateBeforeAttributeValue(_564d09f0fe7a);
              break;

             case _eced61b9ace5.BeforeClosingTagName:
              this.stateBeforeClosingTagName(_564d09f0fe7a);
              break;

             case _eced61b9ace5.AfterClosingTagName:
              this.stateAfterClosingTagName(_564d09f0fe7a);
              break;

             case _eced61b9ace5.BeforeSpecialS:
              this.stateBeforeSpecialS(_564d09f0fe7a);
              break;

             case _eced61b9ace5.BeforeSpecialT:
              this.stateBeforeSpecialT(_564d09f0fe7a);
              break;

             case _eced61b9ace5.InAttributeValueNq:
              this.stateInAttributeValueNoQuotes(_564d09f0fe7a);
              break;

             case _eced61b9ace5.InSelfClosingTag:
              this.stateInSelfClosingTag(_564d09f0fe7a);
              break;

             case _eced61b9ace5.InDeclaration:
              this.stateInDeclaration(_564d09f0fe7a);
              break;

             case _eced61b9ace5.BeforeDeclaration:
              this.stateBeforeDeclaration(_564d09f0fe7a);
              break;

             case _eced61b9ace5.BeforeComment:
              this.stateBeforeComment(_564d09f0fe7a);
              break;

             case _eced61b9ace5.InProcessingInstruction:
              this.stateInProcessingInstruction(_564d09f0fe7a);
              break;

             case _eced61b9ace5.InEntity:
              this.stateInEntity();
            }
            this.index++;
          }
          this.cleanup();
        }
        finish() {
          this.state === _eced61b9ace5.InEntity && (this.entityDecoder.end(), this.state = this.baseState), 
          this.handleTrailingData(), this.cbs.onend();
        }
        handleTrailingData() {
          let _564d09f0fe7a = this.buffer.length + this.offset;
          this.sectionStart >= _564d09f0fe7a || (this.state === _eced61b9ace5.InCommentLike ? this.currentSequence === _029290fe381e.CdataEnd ? this.cbs.oncdata(this.sectionStart, _564d09f0fe7a, 0) : this.cbs.oncomment(this.sectionStart, _564d09f0fe7a, 0) : this.state === _eced61b9ace5.InTagName || this.state === _eced61b9ace5.BeforeAttributeName || this.state === _eced61b9ace5.BeforeAttributeValue || this.state === _eced61b9ace5.AfterAttributeName || this.state === _eced61b9ace5.InAttributeName || this.state === _eced61b9ace5.InAttributeValueSq || this.state === _eced61b9ace5.InAttributeValueDq || this.state === _eced61b9ace5.InAttributeValueNq || this.state === _eced61b9ace5.InClosingTagName || this.cbs.ontext(this.sectionStart, _564d09f0fe7a));
        }
        emitCodePoint(_564d09f0fe7a, _cd89175f9633) {
          this.baseState !== _eced61b9ace5.Text && this.baseState !== _eced61b9ace5.InSpecialTag ? (this.sectionStart < this.entityStart && this.cbs.onattribdata(this.sectionStart, this.entityStart), 
          this.sectionStart = this.entityStart + _cd89175f9633, this.index = this.sectionStart - 1, 
          this.cbs.onattribentity(_564d09f0fe7a)) : (this.sectionStart < this.entityStart && this.cbs.ontext(this.sectionStart, this.entityStart), 
          this.sectionStart = this.entityStart + _cd89175f9633, this.index = this.sectionStart - 1, 
          this.cbs.ontextentity(_564d09f0fe7a, this.sectionStart));
        }
      }
    },
    3808: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.d(_cd89175f9633, {
        RJ: () => _e29815aa94d6,
        iX: () => _bed23b1c4e71.i
      });
      var _bed23b1c4e71 = _91a2259ffea9(4645);
      _91a2259ffea9(8866), _91a2259ffea9(5645);
      var _e29815aa94d6 = _91a2259ffea9(2743);
      _91a2259ffea9(4993);
    },
    6570: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      let _bed23b1c4e71, _e29815aa94d6, _d879eb489a78, _d75b4034184e;
      _91a2259ffea9.d(_cd89175f9633, {
        P2: () => f
      });
      let o = (_564d09f0fe7a, _cd89175f9633) => _cd89175f9633.some(_cd89175f9633 => _564d09f0fe7a instanceof _cd89175f9633), _eced61b9ace5 = new WeakMap, _775f64df6c74 = new WeakMap, _90a7406a509b = new WeakMap, _029290fe381e = {
        get(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
          if (_564d09f0fe7a instanceof IDBTransaction) {
            if ("done" === _cd89175f9633) return _eced61b9ace5.get(_564d09f0fe7a);
            if ("store" === _cd89175f9633) return _91a2259ffea9.objectStoreNames[1] ? void 0 : _91a2259ffea9.objectStore(_91a2259ffea9.objectStoreNames[0]);
          }
          return h(_564d09f0fe7a[_cd89175f9633]);
        },
        set: (_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) => (_564d09f0fe7a[_cd89175f9633] = _91a2259ffea9, 
        !0),
        has: (_564d09f0fe7a, _cd89175f9633) => _564d09f0fe7a instanceof IDBTransaction && ("done" === _cd89175f9633 || "store" === _cd89175f9633) || _cd89175f9633 in _564d09f0fe7a
      };
      function h(_564d09f0fe7a) {
        if (_564d09f0fe7a instanceof IDBRequest) {
          let _cd89175f9633;
          return _cd89175f9633 = new Promise((_cd89175f9633, _91a2259ffea9) => {
            let n = () => {
              _564d09f0fe7a.removeEventListener("success", i), _564d09f0fe7a.removeEventListener("error", a);
            }, i = () => {
              _cd89175f9633(h(_564d09f0fe7a.result)), n();
            }, a = () => {
              _91a2259ffea9(_564d09f0fe7a.error), n();
            };
            _564d09f0fe7a.addEventListener("success", i), _564d09f0fe7a.addEventListener("error", a);
          }), _90a7406a509b.set(_cd89175f9633, _564d09f0fe7a), _cd89175f9633;
        }
        if (_775f64df6c74.has(_564d09f0fe7a)) return _775f64df6c74.get(_564d09f0fe7a);
        let _cd89175f9633 = function(_564d09f0fe7a) {
          if ("function" == typeof _564d09f0fe7a) return (_e29815aa94d6 || (_e29815aa94d6 = [ IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey ])).includes(_564d09f0fe7a) ? function(..._cd89175f9633) {
            return _564d09f0fe7a.apply(p(this), _cd89175f9633), h(this.request);
          } : function(..._cd89175f9633) {
            return h(_564d09f0fe7a.apply(p(this), _cd89175f9633));
          };
          return (_564d09f0fe7a instanceof IDBTransaction && function(_564d09f0fe7a) {
            if (_eced61b9ace5.has(_564d09f0fe7a)) return;
            let _cd89175f9633 = new Promise((_cd89175f9633, _91a2259ffea9) => {
              let n = () => {
                _564d09f0fe7a.removeEventListener("complete", i), _564d09f0fe7a.removeEventListener("error", a), 
                _564d09f0fe7a.removeEventListener("abort", a);
              }, i = () => {
                _cd89175f9633(), n();
              }, a = () => {
                _91a2259ffea9(_564d09f0fe7a.error || new DOMException("AbortError", "AbortError")), 
                n();
              };
              _564d09f0fe7a.addEventListener("complete", i), _564d09f0fe7a.addEventListener("error", a), 
              _564d09f0fe7a.addEventListener("abort", a);
            });
            _eced61b9ace5.set(_564d09f0fe7a, _cd89175f9633);
          }(_564d09f0fe7a), o(_564d09f0fe7a, _bed23b1c4e71 || (_bed23b1c4e71 = [ IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction ]))) ? new Proxy(_564d09f0fe7a, _029290fe381e) : _564d09f0fe7a;
        }(_564d09f0fe7a);
        return _cd89175f9633 !== _564d09f0fe7a && (_775f64df6c74.set(_564d09f0fe7a, _cd89175f9633), 
        _90a7406a509b.set(_cd89175f9633, _564d09f0fe7a)), _cd89175f9633;
      }
      let p = _564d09f0fe7a => _90a7406a509b.get(_564d09f0fe7a);
      function f(_564d09f0fe7a, _cd89175f9633, {blocked: _91a2259ffea9, upgrade: _bed23b1c4e71, blocking: _e29815aa94d6, terminated: _d879eb489a78} = {}) {
        let _d75b4034184e = indexedDB.open(_564d09f0fe7a, _cd89175f9633), _eced61b9ace5 = h(_d75b4034184e);
        return _bed23b1c4e71 && _d75b4034184e.addEventListener("upgradeneeded", _564d09f0fe7a => {
          _bed23b1c4e71(h(_d75b4034184e.result), _564d09f0fe7a.oldVersion, _564d09f0fe7a.newVersion, h(_d75b4034184e.transaction), _564d09f0fe7a);
        }), _91a2259ffea9 && _d75b4034184e.addEventListener("blocked", _564d09f0fe7a => _91a2259ffea9(_564d09f0fe7a.oldVersion, _564d09f0fe7a.newVersion, _564d09f0fe7a)), 
        _eced61b9ace5.then(_564d09f0fe7a => {
          _d879eb489a78 && _564d09f0fe7a.addEventListener("close", () => _d879eb489a78()), 
          _e29815aa94d6 && _564d09f0fe7a.addEventListener("versionchange", _564d09f0fe7a => _e29815aa94d6(_564d09f0fe7a.oldVersion, _564d09f0fe7a.newVersion, _564d09f0fe7a));
        }).catch(() => {}), _eced61b9ace5;
      }
      let _bad94b9ba2d5 = [ "get", "getKey", "getAll", "getAllKeys", "count" ], _5452948ead4c = [ "put", "add", "delete", "clear" ], _5695a624e761 = new Map;
      function b(_564d09f0fe7a, _cd89175f9633) {
        if (!(_564d09f0fe7a instanceof IDBDatabase && !(_cd89175f9633 in _564d09f0fe7a) && "string" == typeof _cd89175f9633)) return;
        if (_5695a624e761.get(_cd89175f9633)) return _5695a624e761.get(_cd89175f9633);
        let _91a2259ffea9 = _cd89175f9633.replace(/FromIndex$/, ""), _bed23b1c4e71 = _cd89175f9633 !== _91a2259ffea9, _e29815aa94d6 = _5452948ead4c.includes(_91a2259ffea9);
        if (!(_91a2259ffea9 in (_bed23b1c4e71 ? IDBIndex : IDBObjectStore).prototype) || !(_e29815aa94d6 || _bad94b9ba2d5.includes(_91a2259ffea9))) return;
        let a = async function(_564d09f0fe7a, ..._cd89175f9633) {
          let _d879eb489a78 = this.transaction(_564d09f0fe7a, _e29815aa94d6 ? "readwrite" : "readonly"), _d75b4034184e = _d879eb489a78.store;
          return _bed23b1c4e71 && (_d75b4034184e = _d75b4034184e.index(_cd89175f9633.shift())), 
          (await Promise.all([ _d75b4034184e[_91a2259ffea9](..._cd89175f9633), _e29815aa94d6 && _d879eb489a78.done ]))[0];
        };
        return _5695a624e761.set(_cd89175f9633, a), a;
      }
      _029290fe381e = {
        ..._d879eb489a78 = _029290fe381e,
        get: (_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) => b(_564d09f0fe7a, _cd89175f9633) || _d879eb489a78.get(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9),
        has: (_564d09f0fe7a, _cd89175f9633) => !!b(_564d09f0fe7a, _cd89175f9633) || _d879eb489a78.has(_564d09f0fe7a, _cd89175f9633)
      };
      let _45080c7acefd = [ "continue", "continuePrimaryKey", "advance" ], _d296cf17d9e2 = {}, _5c1b0936347c = new WeakMap, _7b12d72b7dbd = new WeakMap, _20b30412704a = {
        get(_564d09f0fe7a, _cd89175f9633) {
          if (!_45080c7acefd.includes(_cd89175f9633)) return _564d09f0fe7a[_cd89175f9633];
          let _91a2259ffea9 = _d296cf17d9e2[_cd89175f9633];
          return _91a2259ffea9 || (_91a2259ffea9 = _d296cf17d9e2[_cd89175f9633] = function(..._564d09f0fe7a) {
            _5c1b0936347c.set(this, _7b12d72b7dbd.get(this)[_cd89175f9633](..._564d09f0fe7a));
          }), _91a2259ffea9;
        }
      };
      async function* T(..._564d09f0fe7a) {
        let _cd89175f9633 = this;
        if (_cd89175f9633 instanceof IDBCursor || (_cd89175f9633 = await _cd89175f9633.openCursor(..._564d09f0fe7a)), 
        !_cd89175f9633) return;
        let _91a2259ffea9 = new Proxy(_cd89175f9633, _20b30412704a);
        for (_7b12d72b7dbd.set(_91a2259ffea9, _cd89175f9633), _90a7406a509b.set(_91a2259ffea9, p(_cd89175f9633)); _cd89175f9633; ) yield _91a2259ffea9, 
        _cd89175f9633 = await (_5c1b0936347c.get(_91a2259ffea9) || _cd89175f9633.continue()), 
        _5c1b0936347c.delete(_91a2259ffea9);
      }
      function k(_564d09f0fe7a, _cd89175f9633) {
        return _cd89175f9633 === Symbol.asyncIterator && o(_564d09f0fe7a, [ IDBIndex, IDBObjectStore, IDBCursor ]) || "iterate" === _cd89175f9633 && o(_564d09f0fe7a, [ IDBIndex, IDBObjectStore ]);
      }
      _029290fe381e = {
        ..._d75b4034184e = _029290fe381e,
        get: (_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) => k(_564d09f0fe7a, _cd89175f9633) ? T : _d75b4034184e.get(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9),
        has: (_564d09f0fe7a, _cd89175f9633) => k(_564d09f0fe7a, _cd89175f9633) || _d75b4034184e.has(_564d09f0fe7a, _cd89175f9633)
      };
    },
    1652: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      _91a2259ffea9.d(_cd89175f9633, {
        N: () => n
      });
      function n() {
        return "10000000000".replace(/[018]/g, _564d09f0fe7a => (_564d09f0fe7a ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> _564d09f0fe7a / 4).toString(16));
      }
    },
    3907: function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
      let _bed23b1c4e71;
      _91a2259ffea9.d(_cd89175f9633, {
        LW: () => b,
        QR: () => x
      });
      var _e29815aa94d6 = _91a2259ffea9(1652);
      function a(_564d09f0fe7a, _cd89175f9633) {
        try {
          return _564d09f0fe7a.apply(this, _cd89175f9633);
        } catch (_564d09f0fe7a) {
          let _cd89175f9633, _91a2259ffea9 = (_cd89175f9633 = _bed23b1c4e71.__externref_table_alloc(), 
          _bed23b1c4e71.__wbindgen_export_2.set(_cd89175f9633, _564d09f0fe7a), _cd89175f9633);
          _bed23b1c4e71.__wbindgen_exn_store(_91a2259ffea9);
        }
      }
      let _d879eb489a78 = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
      }) : {
        decode: () => {
          throw Error("TextDecoder not available");
        }
      };
      "undefined" != typeof TextDecoder && _d879eb489a78.decode();
      let _d75b4034184e = null;
      function l() {
        return (null === _d75b4034184e || 0 === _d75b4034184e.byteLength) && (_d75b4034184e = new Uint8Array(_bed23b1c4e71.memory.buffer)), 
        _d75b4034184e;
      }
      function c(_564d09f0fe7a, _cd89175f9633) {
        return _564d09f0fe7a >>>= 0, _d879eb489a78.decode(l().subarray(_564d09f0fe7a, _564d09f0fe7a + _cd89175f9633));
      }
      let _eced61b9ace5 = 0, _775f64df6c74 = "undefined" != typeof TextEncoder ? new TextEncoder("utf-8") : {
        encode: () => {
          throw Error("TextEncoder not available");
        }
      }, _90a7406a509b = "function" == typeof _775f64df6c74.encodeInto ? function(_564d09f0fe7a, _cd89175f9633) {
        return _775f64df6c74.encodeInto(_564d09f0fe7a, _cd89175f9633);
      } : function(_564d09f0fe7a, _cd89175f9633) {
        let _91a2259ffea9 = _775f64df6c74.encode(_564d09f0fe7a);
        return _cd89175f9633.set(_91a2259ffea9), {
          read: _564d09f0fe7a.length,
          written: _91a2259ffea9.length
        };
      };
      function p(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
        if (void 0 === _91a2259ffea9) {
          let _91a2259ffea9 = _775f64df6c74.encode(_564d09f0fe7a), _bed23b1c4e71 = _cd89175f9633(_91a2259ffea9.length, 1) >>> 0;
          return l().subarray(_bed23b1c4e71, _bed23b1c4e71 + _91a2259ffea9.length).set(_91a2259ffea9), 
          _eced61b9ace5 = _91a2259ffea9.length, _bed23b1c4e71;
        }
        let _bed23b1c4e71 = _564d09f0fe7a.length, _e29815aa94d6 = _cd89175f9633(_bed23b1c4e71, 1) >>> 0, _d879eb489a78 = l(), _d75b4034184e = 0;
        for (;_d75b4034184e < _bed23b1c4e71; _d75b4034184e++) {
          let _cd89175f9633 = _564d09f0fe7a.charCodeAt(_d75b4034184e);
          if (_cd89175f9633 > 127) break;
          _d879eb489a78[_e29815aa94d6 + _d75b4034184e] = _cd89175f9633;
        }
        if (_d75b4034184e !== _bed23b1c4e71) {
          0 !== _d75b4034184e && (_564d09f0fe7a = _564d09f0fe7a.slice(_d75b4034184e)), _e29815aa94d6 = _91a2259ffea9(_e29815aa94d6, _bed23b1c4e71, _bed23b1c4e71 = _d75b4034184e + 3 * _564d09f0fe7a.length, 1) >>> 0;
          let _cd89175f9633 = _90a7406a509b(_564d09f0fe7a, l().subarray(_e29815aa94d6 + _d75b4034184e, _e29815aa94d6 + _bed23b1c4e71));
          _d75b4034184e += _cd89175f9633.written, _e29815aa94d6 = _91a2259ffea9(_e29815aa94d6, _bed23b1c4e71, _d75b4034184e, 1) >>> 0;
        }
        return _eced61b9ace5 = _d75b4034184e, _e29815aa94d6;
      }
      let _029290fe381e = null;
      function g() {
        return (null === _029290fe381e || !0 === _029290fe381e.buffer.detached || void 0 === _029290fe381e.buffer.detached && _029290fe381e.buffer !== _bed23b1c4e71.memory.buffer) && (_029290fe381e = new DataView(_bed23b1c4e71.memory.buffer)), 
        _029290fe381e;
      }
      function m(_564d09f0fe7a) {
        let _cd89175f9633 = _bed23b1c4e71.__wbindgen_export_2.get(_564d09f0fe7a);
        return _bed23b1c4e71.__externref_table_dealloc(_564d09f0fe7a), _cd89175f9633;
      }
      let _bad94b9ba2d5 = "undefined" == typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry(_564d09f0fe7a => _bed23b1c4e71.__wbg_rewriter_free(_564d09f0fe7a >>> 0, 1));
      class b {
        __destroy_into_raw() {
          let _564d09f0fe7a = this.__wbg_ptr;
          return this.__wbg_ptr = 0, _bad94b9ba2d5.unregister(this), _564d09f0fe7a;
        }
        free() {
          let _564d09f0fe7a = this.__destroy_into_raw();
          _bed23b1c4e71.__wbg_rewriter_free(_564d09f0fe7a, 0);
        }
        rewrite_js(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9, _e29815aa94d6) {
          let _d879eb489a78 = p(_564d09f0fe7a, _bed23b1c4e71.__wbindgen_malloc, _bed23b1c4e71.__wbindgen_realloc), _d75b4034184e = _eced61b9ace5, _775f64df6c74 = p(_cd89175f9633, _bed23b1c4e71.__wbindgen_malloc, _bed23b1c4e71.__wbindgen_realloc), _90a7406a509b = _eced61b9ace5, _029290fe381e = p(_91a2259ffea9, _bed23b1c4e71.__wbindgen_malloc, _bed23b1c4e71.__wbindgen_realloc), _bad94b9ba2d5 = _eced61b9ace5, _5452948ead4c = _bed23b1c4e71.rewriter_rewrite_js(this.__wbg_ptr, _d879eb489a78, _d75b4034184e, _775f64df6c74, _90a7406a509b, _029290fe381e, _bad94b9ba2d5, _e29815aa94d6);
          if (_5452948ead4c[2]) throw m(_5452948ead4c[1]);
          return m(_5452948ead4c[0]);
        }
        rewrite_js_bytes(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9, _e29815aa94d6) {
          let _d879eb489a78, _d75b4034184e = (_d879eb489a78 = (0, _bed23b1c4e71.__wbindgen_malloc)(+_564d09f0fe7a.length, 1) >>> 0, 
          l().set(_564d09f0fe7a, _d879eb489a78 / 1), _eced61b9ace5 = _564d09f0fe7a.length, 
          _d879eb489a78), _775f64df6c74 = _eced61b9ace5, _90a7406a509b = p(_cd89175f9633, _bed23b1c4e71.__wbindgen_malloc, _bed23b1c4e71.__wbindgen_realloc), _029290fe381e = _eced61b9ace5, _bad94b9ba2d5 = p(_91a2259ffea9, _bed23b1c4e71.__wbindgen_malloc, _bed23b1c4e71.__wbindgen_realloc), _5452948ead4c = _eced61b9ace5, _5695a624e761 = _bed23b1c4e71.rewriter_rewrite_js_bytes(this.__wbg_ptr, _d75b4034184e, _775f64df6c74, _90a7406a509b, _029290fe381e, _bad94b9ba2d5, _5452948ead4c, _e29815aa94d6);
          if (_5695a624e761[2]) throw m(_5695a624e761[1]);
          return m(_5695a624e761[0]);
        }
        constructor(_564d09f0fe7a) {
          const _cd89175f9633 = _bed23b1c4e71.rewriter_new(_564d09f0fe7a);
          if (_cd89175f9633[2]) throw m(_cd89175f9633[1]);
          return this.__wbg_ptr = _cd89175f9633[0] >>> 0, _bad94b9ba2d5.register(this, this.__wbg_ptr, this), 
          this;
        }
      }
      async function w(_564d09f0fe7a, _cd89175f9633) {
        if ("function" == typeof Response && _564d09f0fe7a instanceof Response) {
          if ("function" == typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(_564d09f0fe7a, _cd89175f9633);
          } catch (_cd89175f9633) {
            if ("application/wasm" != _564d09f0fe7a.headers.get("Content-Type")) console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", _cd89175f9633); else throw _cd89175f9633;
          }
          let _91a2259ffea9 = await _564d09f0fe7a.arrayBuffer();
          return await WebAssembly.instantiate(_91a2259ffea9, _cd89175f9633);
        }
        {
          let _91a2259ffea9 = await WebAssembly.instantiate(_564d09f0fe7a, _cd89175f9633);
          return _91a2259ffea9 instanceof WebAssembly.Instance ? {
            instance: _91a2259ffea9,
            module: _564d09f0fe7a
          } : _91a2259ffea9;
        }
      }
      function S() {
        let _564d09f0fe7a = {};
        return _564d09f0fe7a.wbg = {}, _564d09f0fe7a.wbg.__wbg_buffer_609cc3eee51ed158 = function(_564d09f0fe7a) {
          return _564d09f0fe7a.buffer;
        }, _564d09f0fe7a.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
          return a(function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
            return _564d09f0fe7a.call(_cd89175f9633, _91a2259ffea9);
          }, arguments);
        }, _564d09f0fe7a.wbg.__wbg_call_833bed5770ea2041 = function() {
          return a(function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9, _bed23b1c4e71) {
            return _564d09f0fe7a.call(_cd89175f9633, _91a2259ffea9, _bed23b1c4e71);
          }, arguments);
        }, _564d09f0fe7a.wbg.__wbg_get_67b2ba62fc30de12 = function() {
          return a(function(_564d09f0fe7a, _cd89175f9633) {
            return Reflect.get(_564d09f0fe7a, _cd89175f9633);
          }, arguments);
        }, _564d09f0fe7a.wbg.__wbg_new_405e22f390576ce2 = function() {
          return {};
        }, _564d09f0fe7a.wbg.__wbg_new_78feb108b6472713 = function() {
          return [];
        }, _564d09f0fe7a.wbg.__wbg_new_9ffbe0a71eff35e3 = function() {
          return a(function(_564d09f0fe7a, _cd89175f9633) {
            return new URL(c(_564d09f0fe7a, _cd89175f9633));
          }, arguments);
        }, _564d09f0fe7a.wbg.__wbg_new_a12002a7f91c75be = function(_564d09f0fe7a) {
          return new Uint8Array(_564d09f0fe7a);
        }, _564d09f0fe7a.wbg.__wbg_newwithbase_161c299e7a34e2eb = function() {
          return a(function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9, _bed23b1c4e71) {
            return new URL(c(_564d09f0fe7a, _cd89175f9633), c(_91a2259ffea9, _bed23b1c4e71));
          }, arguments);
        }, _564d09f0fe7a.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
          return new Uint8Array(_564d09f0fe7a, _cd89175f9633 >>> 0, _91a2259ffea9 >>> 0);
        }, _564d09f0fe7a.wbg.__wbg_scramtag_3a255d78b157986d = function(_564d09f0fe7a) {
          let _cd89175f9633 = p((0, _e29815aa94d6.N)(), _bed23b1c4e71.__wbindgen_malloc, _bed23b1c4e71.__wbindgen_realloc), _91a2259ffea9 = _eced61b9ace5;
          g().setInt32(_564d09f0fe7a + 4, _91a2259ffea9, !0), g().setInt32(_564d09f0fe7a + 0, _cd89175f9633, !0);
        }, _564d09f0fe7a.wbg.__wbg_set_bb8cecf6a62b9f46 = function() {
          return a(function(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9) {
            return Reflect.set(_564d09f0fe7a, _cd89175f9633, _91a2259ffea9);
          }, arguments);
        }, _564d09f0fe7a.wbg.__wbg_toString_5285597960676b7b = function(_564d09f0fe7a) {
          return _564d09f0fe7a.toString();
        }, _564d09f0fe7a.wbg.__wbg_toString_c813bbd34d063839 = function(_564d09f0fe7a) {
          return _564d09f0fe7a.toString();
        }, _564d09f0fe7a.wbg.__wbindgen_boolean_get = function(_564d09f0fe7a) {
          return "boolean" == typeof _564d09f0fe7a ? +!!_564d09f0fe7a : 2;
        }, _564d09f0fe7a.wbg.__wbindgen_error_new = function(_564d09f0fe7a, _cd89175f9633) {
          return Error(c(_564d09f0fe7a, _cd89175f9633));
        }, _564d09f0fe7a.wbg.__wbindgen_init_externref_table = function() {
          let _564d09f0fe7a = _bed23b1c4e71.__wbindgen_export_2, _cd89175f9633 = _564d09f0fe7a.grow(4);
          _564d09f0fe7a.set(0, void 0), _564d09f0fe7a.set(_cd89175f9633 + 0, void 0), _564d09f0fe7a.set(_cd89175f9633 + 1, null), 
          _564d09f0fe7a.set(_cd89175f9633 + 2, !0), _564d09f0fe7a.set(_cd89175f9633 + 3, !1);
        }, _564d09f0fe7a.wbg.__wbindgen_is_function = function(_564d09f0fe7a) {
          return "function" == typeof _564d09f0fe7a;
        }, _564d09f0fe7a.wbg.__wbindgen_memory = function() {
          return _bed23b1c4e71.memory;
        }, _564d09f0fe7a.wbg.__wbindgen_string_get = function(_564d09f0fe7a, _cd89175f9633) {
          let _91a2259ffea9 = "string" == typeof _cd89175f9633 ? _cd89175f9633 : void 0;
          var _e29815aa94d6 = null == _91a2259ffea9 ? 0 : p(_91a2259ffea9, _bed23b1c4e71.__wbindgen_malloc, _bed23b1c4e71.__wbindgen_realloc), _d879eb489a78 = _eced61b9ace5;
          g().setInt32(_564d09f0fe7a + 4, _d879eb489a78, !0), g().setInt32(_564d09f0fe7a + 0, _e29815aa94d6, !0);
        }, _564d09f0fe7a.wbg.__wbindgen_string_new = function(_564d09f0fe7a, _cd89175f9633) {
          return c(_564d09f0fe7a, _cd89175f9633);
        }, _564d09f0fe7a.wbg.__wbindgen_throw = function(_564d09f0fe7a, _cd89175f9633) {
          throw Error(c(_564d09f0fe7a, _cd89175f9633));
        }, _564d09f0fe7a;
      }
      function v(_564d09f0fe7a, _cd89175f9633) {
        return _bed23b1c4e71 = _564d09f0fe7a.exports, E.__wbindgen_wasm_module = _cd89175f9633, 
        _029290fe381e = null, _d75b4034184e = null, _bed23b1c4e71.__wbindgen_start(), _bed23b1c4e71;
      }
      function x(_564d09f0fe7a) {
        if (void 0 !== _bed23b1c4e71) return _bed23b1c4e71;
        void 0 !== _564d09f0fe7a && (Object.getPrototypeOf(_564d09f0fe7a) === Object.prototype ? ({module: _564d09f0fe7a} = _564d09f0fe7a) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
        let _cd89175f9633 = S();
        return _564d09f0fe7a instanceof WebAssembly.Module || (_564d09f0fe7a = new WebAssembly.Module(_564d09f0fe7a)), 
        v(new WebAssembly.Instance(_564d09f0fe7a, _cd89175f9633), _564d09f0fe7a);
      }
      async function E(_564d09f0fe7a) {
        if (void 0 !== _bed23b1c4e71) return _bed23b1c4e71;
        void 0 !== _564d09f0fe7a && (Object.getPrototypeOf(_564d09f0fe7a) === Object.prototype ? ({module_or_path: _564d09f0fe7a} = _564d09f0fe7a) : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), 
        void 0 === _564d09f0fe7a && (_564d09f0fe7a = new URL("wasm_bg.wasm", ""));
        let _cd89175f9633 = S();
        ("string" == typeof _564d09f0fe7a || "function" == typeof Request && _564d09f0fe7a instanceof Request || "function" == typeof URL && _564d09f0fe7a instanceof URL) && (_564d09f0fe7a = fetch(_564d09f0fe7a));
        let {instance: _91a2259ffea9, module: _e29815aa94d6} = await w(await _564d09f0fe7a, _cd89175f9633);
        return v(_91a2259ffea9, _e29815aa94d6);
      }
    }
  }, _cd89175f9633 = {};
  function r(_91a2259ffea9) {
    var _bed23b1c4e71 = _cd89175f9633[_91a2259ffea9];
    if (void 0 !== _bed23b1c4e71) return _bed23b1c4e71.exports;
    var _e29815aa94d6 = _cd89175f9633[_91a2259ffea9] = {
      exports: {}
    };
    return _564d09f0fe7a[_91a2259ffea9](_e29815aa94d6, _e29815aa94d6.exports, r), _e29815aa94d6.exports;
  }
  r.n = _564d09f0fe7a => {
    var _cd89175f9633 = _564d09f0fe7a && _564d09f0fe7a.__esModule ? () => _564d09f0fe7a.default : () => _564d09f0fe7a;
    return r.d(_cd89175f9633, {
      a: _cd89175f9633
    }), _cd89175f9633;
  }, r.d = (_564d09f0fe7a, _cd89175f9633) => {
    for (var _91a2259ffea9 in _cd89175f9633) r.o(_cd89175f9633, _91a2259ffea9) && !r.o(_564d09f0fe7a, _91a2259ffea9) && Object.defineProperty(_564d09f0fe7a, _91a2259ffea9, {
      enumerable: !0,
      get: _cd89175f9633[_91a2259ffea9]
    });
  }, r.o = (_564d09f0fe7a, _cd89175f9633) => Object.prototype.hasOwnProperty.call(_564d09f0fe7a, _cd89175f9633), 
  r.r = _564d09f0fe7a => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(_564d09f0fe7a, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(_564d09f0fe7a, "__esModule", {
      value: !0
    });
  }, globalThis.$studyjetRequire = function(_564d09f0fe7a) {
    return r(409)(_564d09f0fe7a);
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
