(() => {
  var _1d3a38243eaf = {
    4322: function(_1d3a38243eaf) {
      var _1e85f3a9716c = {
        decodeValues: !0,
        map: !1,
        silent: !1
      };
      function r(_1d3a38243eaf) {
        return "string" == typeof _1d3a38243eaf && !!_1d3a38243eaf.trim();
      }
      function n(_1d3a38243eaf, _315f273def32) {
        var _4e0975a1482c, _3bdf3e120ffd, _ee61174f6deb, _a609a4c7d80c, _f5fe395ebb04 = _1d3a38243eaf.split(";").filter(r), _5a5cce1642e9 = (_4e0975a1482c = _f5fe395ebb04.shift(), 
        _3bdf3e120ffd = "", _ee61174f6deb = "", (_a609a4c7d80c = _4e0975a1482c.split("=")).length > 1 ? (_3bdf3e120ffd = _a609a4c7d80c.shift(), 
        _ee61174f6deb = _a609a4c7d80c.join("=")) : _ee61174f6deb = _4e0975a1482c, {
          name: _3bdf3e120ffd,
          value: _ee61174f6deb
        }), _64f2b2ef4558 = _5a5cce1642e9.name, _611b46e2fd2a = _5a5cce1642e9.value;
        _315f273def32 = _315f273def32 ? Object.assign({}, _1e85f3a9716c, _315f273def32) : _1e85f3a9716c;
        try {
          _611b46e2fd2a = _315f273def32.decodeValues ? decodeURIComponent(_611b46e2fd2a) : _611b46e2fd2a;
        } catch (_1d3a38243eaf) {
          console.error("set-cookie-parser encountered an error while decoding a cookie with value '" + _611b46e2fd2a + "'. Set options.decodeValues to false to disable this feature.", _1d3a38243eaf);
        }
        var _e853f5e31d91 = {
          name: _64f2b2ef4558,
          value: _611b46e2fd2a
        };
        return _f5fe395ebb04.forEach(function(_1d3a38243eaf) {
          var _1e85f3a9716c = _1d3a38243eaf.split("="), _315f273def32 = _1e85f3a9716c.shift().trimLeft().toLowerCase(), _4e0975a1482c = _1e85f3a9716c.join("=");
          "expires" === _315f273def32 ? _e853f5e31d91.expires = new Date(_4e0975a1482c) : "max-age" === _315f273def32 ? _e853f5e31d91.maxAge = parseInt(_4e0975a1482c, 10) : "secure" === _315f273def32 ? _e853f5e31d91.secure = !0 : "httponly" === _315f273def32 ? _e853f5e31d91.httpOnly = !0 : "samesite" === _315f273def32 ? _e853f5e31d91.sameSite = _4e0975a1482c : "partitioned" === _315f273def32 ? _e853f5e31d91.partitioned = !0 : _e853f5e31d91[_315f273def32] = _4e0975a1482c;
        }), _e853f5e31d91;
      }
      function i(_1d3a38243eaf, _315f273def32) {
        if (_315f273def32 = _315f273def32 ? Object.assign({}, _1e85f3a9716c, _315f273def32) : _1e85f3a9716c, 
        !_1d3a38243eaf) if (!_315f273def32.map) return []; else return {};
        if (_1d3a38243eaf.headers) if ("function" == typeof _1d3a38243eaf.headers.getSetCookie) _1d3a38243eaf = _1d3a38243eaf.headers.getSetCookie(); else if (_1d3a38243eaf.headers["set-cookie"]) _1d3a38243eaf = _1d3a38243eaf.headers["set-cookie"]; else {
          var _4e0975a1482c = _1d3a38243eaf.headers[Object.keys(_1d3a38243eaf.headers).find(function(_1d3a38243eaf) {
            return "set-cookie" === _1d3a38243eaf.toLowerCase();
          })];
          _4e0975a1482c || !_1d3a38243eaf.headers.cookie || _315f273def32.silent || console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."), 
          _1d3a38243eaf = _4e0975a1482c;
        }
        return (Array.isArray(_1d3a38243eaf) || (_1d3a38243eaf = [ _1d3a38243eaf ]), _315f273def32.map) ? _1d3a38243eaf.filter(r).reduce(function(_1d3a38243eaf, _1e85f3a9716c) {
          var _4e0975a1482c = n(_1e85f3a9716c, _315f273def32);
          return _1d3a38243eaf[_4e0975a1482c.name] = _4e0975a1482c, _1d3a38243eaf;
        }, {}) : _1d3a38243eaf.filter(r).map(function(_1d3a38243eaf) {
          return n(_1d3a38243eaf, _315f273def32);
        });
      }
      _1d3a38243eaf.exports = i, _1d3a38243eaf.exports.parse = i, _1d3a38243eaf.exports.parseString = n, 
      _1d3a38243eaf.exports.splitCookiesString = function(_1d3a38243eaf) {
        if (Array.isArray(_1d3a38243eaf)) return _1d3a38243eaf;
        if ("string" != typeof _1d3a38243eaf) return [];
        var _1e85f3a9716c, _315f273def32, _4e0975a1482c, _3bdf3e120ffd, _ee61174f6deb, _a609a4c7d80c = [], _f5fe395ebb04 = 0;
        function l() {
          for (;_f5fe395ebb04 < _1d3a38243eaf.length && /\s/.test(_1d3a38243eaf.charAt(_f5fe395ebb04)); ) _f5fe395ebb04 += 1;
          return _f5fe395ebb04 < _1d3a38243eaf.length;
        }
        for (;_f5fe395ebb04 < _1d3a38243eaf.length; ) {
          for (_1e85f3a9716c = _f5fe395ebb04, _ee61174f6deb = !1; l(); ) if ("," === (_315f273def32 = _1d3a38243eaf.charAt(_f5fe395ebb04))) {
            for (_4e0975a1482c = _f5fe395ebb04, _f5fe395ebb04 += 1, l(), _3bdf3e120ffd = _f5fe395ebb04; _f5fe395ebb04 < _1d3a38243eaf.length && "=" !== (_315f273def32 = _1d3a38243eaf.charAt(_f5fe395ebb04)) && ";" !== _315f273def32 && "," !== _315f273def32; ) _f5fe395ebb04 += 1;
            _f5fe395ebb04 < _1d3a38243eaf.length && "=" === _1d3a38243eaf.charAt(_f5fe395ebb04) ? (_ee61174f6deb = !0, 
            _f5fe395ebb04 = _3bdf3e120ffd, _a609a4c7d80c.push(_1d3a38243eaf.substring(_1e85f3a9716c, _4e0975a1482c)), 
            _1e85f3a9716c = _f5fe395ebb04) : _f5fe395ebb04 = _4e0975a1482c + 1;
          } else _f5fe395ebb04 += 1;
          (!_ee61174f6deb || _f5fe395ebb04 >= _1d3a38243eaf.length) && _a609a4c7d80c.push(_1d3a38243eaf.substring(_1e85f3a9716c, _1d3a38243eaf.length));
        }
        return _a609a4c7d80c;
      };
    },
    7302: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      var _4e0975a1482c = {
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
      function i(_1d3a38243eaf) {
        return _315f273def32(a(_1d3a38243eaf));
      }
      function a(_1d3a38243eaf) {
        if (!_315f273def32.o(_4e0975a1482c, _1d3a38243eaf)) {
          var _1e85f3a9716c = Error("Cannot find module '" + _1d3a38243eaf + "'");
          throw _1e85f3a9716c.code = "MODULE_NOT_FOUND", _1e85f3a9716c;
        }
        return _4e0975a1482c[_1d3a38243eaf];
      }
      i.keys = function() {
        return Object.keys(_4e0975a1482c);
      }, i.resolve = a, _1d3a38243eaf.exports = i, i.id = 7302;
    },
    409: function(_1d3a38243eaf) {
      function t(_1d3a38243eaf) {
        var _1e85f3a9716c = Error("Cannot find module '" + _1d3a38243eaf + "'");
        throw _1e85f3a9716c.code = "MODULE_NOT_FOUND", _1e85f3a9716c;
      }
      t.keys = () => [], t.resolve = t, t.id = 409, _1d3a38243eaf.exports = t;
    },
    336: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        StudyJetClient: () => g
      });
      var _4e0975a1482c = _315f273def32(2794), _3bdf3e120ffd = _315f273def32(94), _ee61174f6deb = _315f273def32(3696), _a609a4c7d80c = _315f273def32(581), _f5fe395ebb04 = _315f273def32(1862), _5a5cce1642e9 = _315f273def32(1472), _64f2b2ef4558 = _315f273def32(37), _611b46e2fd2a = _315f273def32(3831), _e853f5e31d91 = _315f273def32(1323), _3c266443ddce = _315f273def32(1229), _a9bd71b7ce50 = _315f273def32(4110), _542e5e0773c9 = _315f273def32(8665).A;
      class g {
        global;
        locationProxy;
        serviceWorker;
        bare;
        natives;
        descriptors;
        wrapfn;
        cookieStore=new _611b46e2fd2a.k;
        eventcallbacks=new Map;
        meta;
        box;
        constructor(_1d3a38243eaf) {
          if (this.global = _1d3a38243eaf, _4e0975a1482c.pX in _1d3a38243eaf) throw console.error("attempted to initialize a studyjet client, but one is already loaded - this is very bad"), 
          Error();
          if (_e853f5e31d91.iswindow) {
            try {
              _4e0975a1482c.pX in _1d3a38243eaf.parent && (this.box = _1d3a38243eaf.parent[_4e0975a1482c.pX].box);
            } catch {}
            try {
              _4e0975a1482c.pX in _1d3a38243eaf.top && (this.box = _1d3a38243eaf.top[_4e0975a1482c.pX].box);
            } catch {}
            try {
              _1d3a38243eaf.opener && _4e0975a1482c.pX in _1d3a38243eaf.opener && (this.box = _1d3a38243eaf.opener[_4e0975a1482c.pX].box);
            } catch {}
            this.box || (_542e5e0773c9.warn("Creating SingletonBox"), this.box = new _3c266443ddce.SingletonBox(this));
          } else this.box = new _3c266443ddce.SingletonBox(this);
          this.box.registerClient(this, _1d3a38243eaf), _e853f5e31d91.iswindow ? this.bare = new _a9bd71b7ce50.Ay : this.bare = new _a9bd71b7ce50.Ay(new Promise(_1d3a38243eaf => {
            addEventListener("message", ({data: _1e85f3a9716c}) => {
              "object" == typeof _1e85f3a9716c && "$studyjet$type" in _1e85f3a9716c && "baremuxinit" === _1e85f3a9716c.$studyjet$type && _1d3a38243eaf(_1e85f3a9716c.port);
            });
          })), this.serviceWorker = this.global.navigator.serviceWorker, _e853f5e31d91.iswindow && (_1d3a38243eaf.document[_4e0975a1482c.pX] = this), 
          this.wrapfn = (0, _a609a4c7d80c.createWrapFn)(this, _1d3a38243eaf), this.natives = {
            store: new Proxy({}, {
              get: (_1d3a38243eaf, _1e85f3a9716c) => {
                if (_1e85f3a9716c in _1d3a38243eaf) return _1d3a38243eaf[_1e85f3a9716c];
                let _315f273def32 = _1e85f3a9716c.split("."), _4e0975a1482c = _315f273def32.pop(), _3bdf3e120ffd = _315f273def32.reduce((_1d3a38243eaf, _1e85f3a9716c) => _1d3a38243eaf?.[_1e85f3a9716c], this.global);
                if (!_3bdf3e120ffd) return;
                let _ee61174f6deb = Reflect.get(_3bdf3e120ffd, _4e0975a1482c);
                return _1d3a38243eaf[_1e85f3a9716c] = _ee61174f6deb, _1d3a38243eaf[_1e85f3a9716c];
              }
            }),
            construct(_1d3a38243eaf, ..._1e85f3a9716c) {
              let _315f273def32 = this.store[_1d3a38243eaf];
              return _315f273def32 ? new _315f273def32(..._1e85f3a9716c) : null;
            },
            call(_1d3a38243eaf, _1e85f3a9716c, ..._315f273def32) {
              let _4e0975a1482c = this.store[_1d3a38243eaf];
              return _4e0975a1482c ? _4e0975a1482c.call(_1e85f3a9716c, ..._315f273def32) : null;
            }
          }, this.descriptors = {
            store: new Proxy({}, {
              get: (_1d3a38243eaf, _315f273def32) => {
                if (_315f273def32 in _1d3a38243eaf) return _1d3a38243eaf[_315f273def32];
                let _4e0975a1482c = _315f273def32.split("."), _3bdf3e120ffd = _4e0975a1482c.pop(), _ee61174f6deb = _4e0975a1482c.reduce((_1d3a38243eaf, _1e85f3a9716c) => _1d3a38243eaf?.[_1e85f3a9716c], this.global);
                if (!_ee61174f6deb) return;
                let _a609a4c7d80c = _1e85f3a9716c.natives.call("Object.getOwnPropertyDescriptor", null, _ee61174f6deb, _3bdf3e120ffd);
                return _1d3a38243eaf[_315f273def32] = _a609a4c7d80c, _1d3a38243eaf[_315f273def32];
              }
            }),
            get(_1d3a38243eaf, _1e85f3a9716c) {
              let _315f273def32 = this.store[_1d3a38243eaf];
              return _315f273def32 ? _315f273def32.get.call(_1e85f3a9716c) : null;
            },
            set(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
              let _4e0975a1482c = this.store[_1d3a38243eaf];
              if (!_4e0975a1482c) return null;
              _4e0975a1482c.set.call(_1e85f3a9716c, _315f273def32);
            }
          };
          const _1e85f3a9716c = this;
          this.meta = {
            get origin() {
              return _1e85f3a9716c.url;
            },
            get base() {
              if (_e853f5e31d91.iswindow) {
                const _1d3a38243eaf = _1e85f3a9716c.natives.call("Document.prototype.querySelector", _1e85f3a9716c.global.document, "base");
                if (_1d3a38243eaf) {
                  let _315f273def32 = _1d3a38243eaf.getAttribute("href");
                  if (!_315f273def32) return _1e85f3a9716c.url;
                  const _4e0975a1482c = _315f273def32.indexOf("#");
                  if (!(_315f273def32 = _315f273def32.substring(0, -1 === _4e0975a1482c ? void 0 : _4e0975a1482c))) return _1e85f3a9716c.url;
                  return new URL(_315f273def32, _1e85f3a9716c.url.origin);
                }
              }
              return _1e85f3a9716c.url;
            },
            get topFrameName() {
              if (!_e853f5e31d91.iswindow) throw Error("topFrameName was called from a worker?");
              let _1d3a38243eaf = _1e85f3a9716c.global;
              if (_1d3a38243eaf.parent.window == _1d3a38243eaf.window) return null;
              for (;_1d3a38243eaf.parent.window !== _1d3a38243eaf.window && _1d3a38243eaf.parent.window[_4e0975a1482c.pX]; ) _1d3a38243eaf = _1d3a38243eaf.parent.window;
              const _315f273def32 = _1d3a38243eaf[_4e0975a1482c.pX].descriptors.get("window.frameElement", _1d3a38243eaf);
              if (!_315f273def32) return null;
              if (!_315f273def32.name) return console.error("YOU NEED TO USE `new StudyJetFrame()`! DIRECT IFRAMES WILL NOT WORK"), 
              null;
              return _315f273def32.name;
            },
            get parentFrameName() {
              if (!_e853f5e31d91.iswindow) throw Error("parentFrameName was called from a worker?");
              if (_1e85f3a9716c.global.parent.window == _1e85f3a9716c.global.window) return null;
              let _1d3a38243eaf = _1e85f3a9716c.global.parent.window;
              if (_1d3a38243eaf[_4e0975a1482c.pX]) {
                const _1e85f3a9716c = _1d3a38243eaf[_4e0975a1482c.pX].descriptors.get("window.frameElement", _1d3a38243eaf);
                if (!_1e85f3a9716c) return null;
                if (!_1e85f3a9716c.name) return console.error("YOU NEED TO USE `new StudyJetFrame()`! DIRECT IFRAMES WILL NOT WORK"), 
                null;
                return _1e85f3a9716c.name;
              }
              {
                const _1d3a38243eaf = _1e85f3a9716c.descriptors.get("window.frameElement", _1e85f3a9716c.global);
                if (!_1d3a38243eaf.name) return console.error("YOU NEED TO USE `new StudyJetFrame()`! DIRECT IFRAMES WILL NOT WORK"), 
                null;
                return _1d3a38243eaf.name;
              }
            }
          }, this.locationProxy = (0, _ee61174f6deb.createLocationProxy)(this, _1d3a38243eaf), 
          _1d3a38243eaf[_4e0975a1482c.pX] = this;
        }
        get frame() {
          if (!_e853f5e31d91.iswindow) return null;
          let _1d3a38243eaf = this.descriptors.get("window.frameElement", this.global);
          if (!_1d3a38243eaf) return null;
          let _1e85f3a9716c = _1d3a38243eaf[_4e0975a1482c.zr];
          if (!_1e85f3a9716c) {
            let _1d3a38243eaf = this.global.window;
            for (;_1d3a38243eaf.parent !== _1d3a38243eaf; ) {
              let _1e85f3a9716c = _1d3a38243eaf[_4e0975a1482c.pX].descriptors.get("window.frameElement", _1d3a38243eaf);
              if (!_1e85f3a9716c) return null;
              if (_1e85f3a9716c && _1e85f3a9716c[_4e0975a1482c.zr]) return _1e85f3a9716c[_4e0975a1482c.zr];
              _1d3a38243eaf = _1d3a38243eaf.parent.window;
            }
          }
          return _1e85f3a9716c;
        }
        get isSubframe() {
          if (!_e853f5e31d91.iswindow) return !1;
          let _1d3a38243eaf = this.descriptors.get("window.frameElement", this.global);
          return !!_1d3a38243eaf && !_1d3a38243eaf[_4e0975a1482c.zr];
        }
        loadcookies(_1d3a38243eaf) {
          this.cookieStore.load(_1d3a38243eaf);
        }
        hook() {
          let _1d3a38243eaf = _315f273def32(7302), _1e85f3a9716c = [];
          for (let _315f273def32 of _1d3a38243eaf.keys()) {
            let _4e0975a1482c = _1d3a38243eaf(_315f273def32);
            _315f273def32.endsWith(".ts") && (_315f273def32.startsWith("./dom/") && "window" in this.global || _315f273def32.startsWith("./worker/") && "WorkerGlobalScope" in this.global || _315f273def32.startsWith("./shared/")) && _1e85f3a9716c.push(_4e0975a1482c);
          }
          for (let _1d3a38243eaf of (_1e85f3a9716c.sort((_1d3a38243eaf, _1e85f3a9716c) => (_1d3a38243eaf.order || 0) - (_1e85f3a9716c.order || 0)), 
          _1e85f3a9716c)) !_1d3a38243eaf.enabled || _1d3a38243eaf.enabled(this) ? _1d3a38243eaf.default(this, this.global) : _1d3a38243eaf.disabled && _1d3a38243eaf.disabled(this, this.global);
        }
        get url() {
          return new URL((0, _5a5cce1642e9.v2)(this.global.location.href));
        }
        set url(_1d3a38243eaf) {
          _1d3a38243eaf instanceof URL && (_1d3a38243eaf = _1d3a38243eaf.toString());
          let _1e85f3a9716c = new _f5fe395ebb04.NavigateEvent(_1d3a38243eaf);
          this.frame && this.frame.dispatchEvent(_1e85f3a9716c), _1e85f3a9716c.defaultPrevented || (this.global.location.href = (0, 
          _5a5cce1642e9.Oy)(_1e85f3a9716c.url, this.meta));
        }
        Proxy(_1d3a38243eaf, _1e85f3a9716c) {
          if (Array.isArray(_1d3a38243eaf)) {
            for (let _315f273def32 of _1d3a38243eaf) this.Proxy(_315f273def32, _1e85f3a9716c);
            return;
          }
          let _315f273def32 = _1d3a38243eaf.split("."), _4e0975a1482c = _315f273def32.pop(), _3bdf3e120ffd = _315f273def32.reduce((_1d3a38243eaf, _1e85f3a9716c) => _1d3a38243eaf?.[_1e85f3a9716c], this.global);
          if (_3bdf3e120ffd) {
            if (!(_1d3a38243eaf in this.natives.store)) {
              let _1e85f3a9716c = Reflect.get(_3bdf3e120ffd, _4e0975a1482c);
              this.natives.store[_1d3a38243eaf] = _1e85f3a9716c;
            }
            this.RawProxy(_3bdf3e120ffd, _4e0975a1482c, _1e85f3a9716c);
          }
        }
        RawProxy(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
          if (!_1d3a38243eaf || !_1e85f3a9716c || !Reflect.has(_1d3a38243eaf, _1e85f3a9716c)) return;
          let _4e0975a1482c = Reflect.get(_1d3a38243eaf, _1e85f3a9716c);
          delete _1d3a38243eaf[_1e85f3a9716c];
          let _ee61174f6deb = {};
          _315f273def32.construct && (_ee61174f6deb.construct = function(_1d3a38243eaf, _1e85f3a9716c, _4e0975a1482c) {
            let _3bdf3e120ffd, _ee61174f6deb = !1, _a609a4c7d80c = {
              fn: _1d3a38243eaf,
              this: null,
              args: _1e85f3a9716c,
              newTarget: _4e0975a1482c,
              return: _1d3a38243eaf => {
                _ee61174f6deb = !0, _3bdf3e120ffd = _1d3a38243eaf;
              },
              call: () => (_ee61174f6deb = !0, _3bdf3e120ffd = Reflect.construct(_a609a4c7d80c.fn, _a609a4c7d80c.args, _a609a4c7d80c.newTarget))
            };
            return (_315f273def32.construct(_a609a4c7d80c), _ee61174f6deb) ? _3bdf3e120ffd : Reflect.construct(_a609a4c7d80c.fn, _a609a4c7d80c.args, _a609a4c7d80c.newTarget);
          }), _315f273def32.apply && (_ee61174f6deb.apply = (_1d3a38243eaf, _1e85f3a9716c, _4e0975a1482c) => {
            let _3bdf3e120ffd, _ee61174f6deb = !1, _a609a4c7d80c = {
              fn: _1d3a38243eaf,
              this: _1e85f3a9716c,
              args: _4e0975a1482c,
              newTarget: null,
              return: _1d3a38243eaf => {
                _ee61174f6deb = !0, _3bdf3e120ffd = _1d3a38243eaf;
              },
              call: () => (_ee61174f6deb = !0, _3bdf3e120ffd = Reflect.apply(_a609a4c7d80c.fn, _a609a4c7d80c.this, _a609a4c7d80c.args))
            }, _f5fe395ebb04 = Error.prepareStackTrace;
            Error.prepareStackTrace = function(_1d3a38243eaf, _1e85f3a9716c) {
              if (_1e85f3a9716c[0].getFileName() && !_1e85f3a9716c[0].getFileName().startsWith(location.origin + _64f2b2ef4558.$W.prefix)) return {
                stack: _1d3a38243eaf.stack
              };
            };
            try {
              _315f273def32.apply(_a609a4c7d80c);
            } catch (_1d3a38243eaf) {
              if (_1d3a38243eaf instanceof Error) if (_1d3a38243eaf.stack instanceof Object) {
                if (_1d3a38243eaf.stack = _1d3a38243eaf.stack.stack, console.error("ERROR FROM STUDYJET INTERNALS", _1d3a38243eaf), 
                !(0, _64f2b2ef4558.U5)("allowFailedIntercepts", this.url)) throw _1d3a38243eaf;
              } else throw _1d3a38243eaf; else throw _1d3a38243eaf;
            }
            return (Error.prepareStackTrace = _f5fe395ebb04, _ee61174f6deb) ? _3bdf3e120ffd : Reflect.apply(_a609a4c7d80c.fn, _a609a4c7d80c.this, _a609a4c7d80c.args);
          }), _ee61174f6deb.getOwnPropertyDescriptor = _3bdf3e120ffd.getOwnPropertyDescriptorHandler, 
          _1d3a38243eaf[_1e85f3a9716c] = new Proxy(_4e0975a1482c, _ee61174f6deb);
        }
        Trap(_1d3a38243eaf, _1e85f3a9716c) {
          if (Array.isArray(_1d3a38243eaf)) {
            for (let _315f273def32 of _1d3a38243eaf) this.Trap(_315f273def32, _1e85f3a9716c);
            return;
          }
          let _315f273def32 = _1d3a38243eaf.split("."), _4e0975a1482c = _315f273def32.pop(), _3bdf3e120ffd = _315f273def32.reduce((_1d3a38243eaf, _1e85f3a9716c) => _1d3a38243eaf?.[_1e85f3a9716c], this.global);
          if (!_3bdf3e120ffd) return;
          let _ee61174f6deb = this.natives.call("Object.getOwnPropertyDescriptor", null, _3bdf3e120ffd, _4e0975a1482c);
          return this.descriptors.store[_1d3a38243eaf] = _ee61174f6deb, this.RawTrap(_3bdf3e120ffd, _4e0975a1482c, _1e85f3a9716c);
        }
        RawTrap(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
          if (!_1d3a38243eaf || !_1e85f3a9716c || !Reflect.has(_1d3a38243eaf, _1e85f3a9716c)) return;
          let _4e0975a1482c = this.natives.call("Object.getOwnPropertyDescriptor", null, _1d3a38243eaf, _1e85f3a9716c), _3bdf3e120ffd = {
            this: null,
            get: function() {
              return _4e0975a1482c && _4e0975a1482c.get.call(this.this);
            },
            set: function(_1d3a38243eaf) {
              _4e0975a1482c && _4e0975a1482c.set.call(this.this, _1d3a38243eaf);
            }
          };
          delete _1d3a38243eaf[_1e85f3a9716c];
          let _ee61174f6deb = {};
          return _315f273def32.get ? _ee61174f6deb.get = function() {
            return _3bdf3e120ffd.this = this, _315f273def32.get(_3bdf3e120ffd);
          } : _4e0975a1482c?.get && (_ee61174f6deb.get = _4e0975a1482c.get), _315f273def32.set ? _ee61174f6deb.set = function(_1d3a38243eaf) {
            _3bdf3e120ffd.this = this, _315f273def32.set(_3bdf3e120ffd, _1d3a38243eaf);
          } : _4e0975a1482c?.set && (_ee61174f6deb.set = _4e0975a1482c.set), _315f273def32.enumerable ? _ee61174f6deb.enumerable = _315f273def32.enumerable : _4e0975a1482c?.enumerable && (_ee61174f6deb.enumerable = _4e0975a1482c.enumerable), 
          _315f273def32.configurable ? _ee61174f6deb.configurable = _315f273def32.configurable : _4e0975a1482c?.configurable && (_ee61174f6deb.configurable = _4e0975a1482c.configurable), 
          Object.defineProperty(_1d3a38243eaf, _1e85f3a9716c, _ee61174f6deb), _4e0975a1482c;
        }
      }
    },
    1077: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      function n(_1d3a38243eaf, _1e85f3a9716c) {
        _1d3a38243eaf.Trap("Element.prototype.attributes", {
          get(_1d3a38243eaf) {
            let _1e85f3a9716c = _1d3a38243eaf.get(), _315f273def32 = new Proxy(_1e85f3a9716c, {
              get(_1d3a38243eaf, _4e0975a1482c, _3bdf3e120ffd) {
                let _ee61174f6deb = Reflect.get(_1d3a38243eaf, _4e0975a1482c);
                return "length" === _4e0975a1482c ? Object.keys(_315f273def32).length : "getNamedItem" === _4e0975a1482c ? _1d3a38243eaf => _315f273def32[_1d3a38243eaf] : "getNamedItemNS" === _4e0975a1482c ? (_1d3a38243eaf, _1e85f3a9716c) => _315f273def32[`${_1d3a38243eaf}:${_1e85f3a9716c}`] : _4e0975a1482c in NamedNodeMap.prototype && "function" == typeof _ee61174f6deb ? new Proxy(_ee61174f6deb, {
                  apply: (_1d3a38243eaf, _4e0975a1482c, _3bdf3e120ffd) => _4e0975a1482c === _315f273def32 ? Reflect.apply(_1d3a38243eaf, _1e85f3a9716c, _3bdf3e120ffd) : Reflect.apply(_1d3a38243eaf, _4e0975a1482c, _3bdf3e120ffd)
                }) : "string" != typeof _4e0975a1482c && "number" != typeof _4e0975a1482c || isNaN(Number(_4e0975a1482c)) ? this.has(_1d3a38243eaf, _4e0975a1482c) ? _ee61174f6deb : void 0 : _1e85f3a9716c[Object.keys(_315f273def32)[_4e0975a1482c]];
              },
              ownKeys(_1d3a38243eaf) {
                return Reflect.ownKeys(_1d3a38243eaf).filter(_1e85f3a9716c => this.has(_1d3a38243eaf, _1e85f3a9716c));
              },
              has: (_1d3a38243eaf, _315f273def32) => "symbol" == typeof _315f273def32 ? Reflect.has(_1d3a38243eaf, _315f273def32) : !(_315f273def32.startsWith("studyjet-attr-") || _1e85f3a9716c[_315f273def32]?.name?.startsWith("studyjet-attr-")) && Reflect.has(_1d3a38243eaf, _315f273def32)
            });
            return _315f273def32;
          }
        }), _1d3a38243eaf.Trap([ "Attr.prototype.value", "Attr.prototype.nodeValue" ], {
          get: _1d3a38243eaf => _1d3a38243eaf.this?.ownerElement ? _1d3a38243eaf.this.ownerElement.getAttribute(_1d3a38243eaf.this.name) : _1d3a38243eaf.get(),
          set: (_1d3a38243eaf, _1e85f3a9716c) => _1d3a38243eaf.this?.ownerElement ? _1d3a38243eaf.this.ownerElement.setAttribute(_1d3a38243eaf.this.name, _1e85f3a9716c) : _1d3a38243eaf.set(_1e85f3a9716c)
        });
      }
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        default: () => n
      });
    },
    7430: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        default: () => i
      });
      var _4e0975a1482c = _315f273def32(1472);
      function i(_1d3a38243eaf, _1e85f3a9716c) {
        _1d3a38243eaf.Proxy("Navigator.prototype.sendBeacon", {
          apply(_1e85f3a9716c) {
            _1e85f3a9716c.args[0] = (0, _4e0975a1482c.Oy)(_1e85f3a9716c.args[0], _1d3a38243eaf.meta);
          }
        });
      }
    },
    9116: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      function n(_1d3a38243eaf, _1e85f3a9716c) {
        _1d3a38243eaf.serviceWorker.addEventListener("message", ({data: _1e85f3a9716c}) => {
          if ("studyjet$type" in _1e85f3a9716c && "cookie" === _1e85f3a9716c.studyjet$type) {
            _1d3a38243eaf.cookieStore.setCookies([ _1e85f3a9716c.cookie ], new URL(_1e85f3a9716c.url));
            let _315f273def32 = {
              studyjet$token: _1e85f3a9716c.studyjet$token,
              studyjet$type: "cookie"
            };
            _1d3a38243eaf.serviceWorker.controller.postMessage(_315f273def32);
          }
        }), _1d3a38243eaf.Trap("Document.prototype.cookie", {
          get: () => _1d3a38243eaf.cookieStore.getCookies(_1d3a38243eaf.url, !0),
          set(_1e85f3a9716c, _315f273def32) {
            _1d3a38243eaf.cookieStore.setCookies([ _315f273def32 ], _1d3a38243eaf.url);
            let _4e0975a1482c = _1d3a38243eaf.descriptors.get("ServiceWorkerContainer.prototype.controller", _1d3a38243eaf.serviceWorker);
            _4e0975a1482c && _1d3a38243eaf.natives.call("ServiceWorker.prototype.postMessage", _4e0975a1482c, {
              studyjet$type: "cookie",
              cookie: _315f273def32,
              url: _1d3a38243eaf.url.href
            });
          }
        }), delete _1e85f3a9716c.cookieStore;
      }
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        default: () => n
      });
    },
    6447: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        default: () => i
      });
      var _4e0975a1482c = _315f273def32(2614);
      function i(_1d3a38243eaf) {
        _1d3a38243eaf.Proxy("CSSStyleDeclaration.prototype.setProperty", {
          apply(_1e85f3a9716c) {
            _1e85f3a9716c.args[1] && (_1e85f3a9716c.args[1] = (0, _4e0975a1482c.s)(_1e85f3a9716c.args[1], _1d3a38243eaf.meta));
          }
        }), _1d3a38243eaf.Proxy("CSSStyleDeclaration.prototype.getPropertyValue", {
          apply(_1d3a38243eaf) {
            let _1e85f3a9716c = _1d3a38243eaf.call();
            if (!_1e85f3a9716c) return _1e85f3a9716c;
            _1d3a38243eaf.return((0, _4e0975a1482c.f)(_1e85f3a9716c));
          }
        }), _1d3a38243eaf.Trap("CSSStyleDeclaration.prototype.cssText", {
          set(_1e85f3a9716c, _315f273def32) {
            _1e85f3a9716c.set((0, _4e0975a1482c.s)(_315f273def32, _1d3a38243eaf.meta));
          },
          get: _1d3a38243eaf => (0, _4e0975a1482c.f)(_1d3a38243eaf.get())
        }), _1d3a38243eaf.Proxy("CSSStyleSheet.prototype.insertRule", {
          apply(_1e85f3a9716c) {
            _1e85f3a9716c.args[0] = (0, _4e0975a1482c.s)(_1e85f3a9716c.args[0], _1d3a38243eaf.meta);
          }
        }), _1d3a38243eaf.Proxy("CSSStyleSheet.prototype.replace", {
          apply(_1e85f3a9716c) {
            _1e85f3a9716c.args[0] = (0, _4e0975a1482c.s)(_1e85f3a9716c.args[0], _1d3a38243eaf.meta);
          }
        }), _1d3a38243eaf.Proxy("CSSStyleSheet.prototype.replaceSync", {
          apply(_1e85f3a9716c) {
            _1e85f3a9716c.args[0] = (0, _4e0975a1482c.s)(_1e85f3a9716c.args[0], _1d3a38243eaf.meta);
          }
        }), _1d3a38243eaf.Trap("CSSRule.prototype.cssText", {
          set(_1e85f3a9716c, _315f273def32) {
            _1e85f3a9716c.set((0, _4e0975a1482c.s)(_315f273def32, _1d3a38243eaf.meta));
          },
          get: _1d3a38243eaf => (0, _4e0975a1482c.f)(_1d3a38243eaf.get())
        }), _1d3a38243eaf.Proxy("CSSStyleValue.parse", {
          apply(_1e85f3a9716c) {
            _1e85f3a9716c.args[1] && (_1e85f3a9716c.args[1] = (0, _4e0975a1482c.s)(_1e85f3a9716c.args[1], _1d3a38243eaf.meta));
          }
        }), _1d3a38243eaf.Trap("HTMLElement.prototype.style", {
          get(_1e85f3a9716c) {
            let _315f273def32 = _1e85f3a9716c.get();
            return new Proxy(_315f273def32, {
              get(_1d3a38243eaf, _1e85f3a9716c) {
                let _3bdf3e120ffd = Reflect.get(_1d3a38243eaf, _1e85f3a9716c);
                return "function" == typeof _3bdf3e120ffd ? new Proxy(_3bdf3e120ffd, {
                  apply: (_1d3a38243eaf, _1e85f3a9716c, _4e0975a1482c) => Reflect.apply(_1d3a38243eaf, _315f273def32, _4e0975a1482c)
                }) : _1e85f3a9716c in CSSStyleDeclaration.prototype || !_3bdf3e120ffd ? _3bdf3e120ffd : (0, 
                _4e0975a1482c.f)(_3bdf3e120ffd);
              },
              set: (_1e85f3a9716c, _315f273def32, _3bdf3e120ffd) => "cssText" == _315f273def32 || "" == _3bdf3e120ffd || "string" != typeof _3bdf3e120ffd ? Reflect.set(_1e85f3a9716c, _315f273def32, _3bdf3e120ffd) : Reflect.set(_1e85f3a9716c, _315f273def32, (0, 
              _4e0975a1482c.s)(_3bdf3e120ffd, _1d3a38243eaf.meta))
            });
          },
          set(_1d3a38243eaf, _1e85f3a9716c) {
            _1d3a38243eaf.set(_1e85f3a9716c);
          }
        });
      }
    },
    5351: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        default: () => i
      });
      var _4e0975a1482c = _315f273def32(884);
      function i(_1d3a38243eaf, _1e85f3a9716c) {
        let _315f273def32 = String;
        _1d3a38243eaf.Proxy([ "Document.prototype.querySelector", "Document.prototype.querySelectorAll" ], {
          apply(_1d3a38243eaf) {
            _1d3a38243eaf.args[0] = _315f273def32(_1d3a38243eaf.args[0]).replace(/((?:^|\s)\b\w+\[(?:src|href|data-href))[\^]?(=['"]?(?:https?[:])?\/\/)/, "$1*$2");
          }
        }), _1d3a38243eaf.Proxy("Document.prototype.write", {
          apply(_1e85f3a9716c) {
            if (_1e85f3a9716c.args[0]) try {
              _1e85f3a9716c.args[0] = (0, _4e0975a1482c.Qs)(_1e85f3a9716c.args[0], _1d3a38243eaf.cookieStore, _1d3a38243eaf.meta, !1);
            } catch {}
          }
        }), _1d3a38243eaf.Trap("Document.prototype.referrer", {
          get: () => _1d3a38243eaf.url.toString()
        }), _1d3a38243eaf.Proxy("Document.prototype.writeln", {
          apply(_1e85f3a9716c) {
            if (_1e85f3a9716c.args[0]) try {
              _1e85f3a9716c.args[0] = (0, _4e0975a1482c.Qs)(_1e85f3a9716c.args[0], _1d3a38243eaf.cookieStore, _1d3a38243eaf.meta, !1);
            } catch {}
          }
        }), _1d3a38243eaf.Proxy("Document.prototype.parseHTMLUnsafe", {
          apply(_1e85f3a9716c) {
            if (_1e85f3a9716c.args[0]) try {
              _1e85f3a9716c.args[0] = (0, _4e0975a1482c.Qs)(_1e85f3a9716c.args[0], _1d3a38243eaf.cookieStore, _1d3a38243eaf.meta, !1);
            } catch {}
          }
        });
      }
    },
    7828: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        default: () => h
      });
      var _4e0975a1482c = _315f273def32(2393), _3bdf3e120ffd = _315f273def32(2614), _ee61174f6deb = _315f273def32(884), _a609a4c7d80c = _315f273def32(1478), _f5fe395ebb04 = _315f273def32(1472), _5a5cce1642e9 = _315f273def32(2794), _64f2b2ef4558 = _315f273def32(3255);
      let _611b46e2fd2a = new TextEncoder;
      function d(_1d3a38243eaf) {
        return btoa(Array.from(_1d3a38243eaf, _1d3a38243eaf => String.fromCodePoint(_1d3a38243eaf)).join(""));
      }
      function h(_1d3a38243eaf, _1e85f3a9716c) {
        let _315f273def32 = {
          nonce: [ _1e85f3a9716c.HTMLElement ],
          integrity: [ _1e85f3a9716c.HTMLScriptElement, _1e85f3a9716c.HTMLLinkElement ],
          csp: [ _1e85f3a9716c.HTMLIFrameElement ],
          credentialless: [ _1e85f3a9716c.HTMLIFrameElement ],
          src: [ _1e85f3a9716c.HTMLImageElement, _1e85f3a9716c.HTMLMediaElement, _1e85f3a9716c.HTMLIFrameElement, _1e85f3a9716c.HTMLFrameElement, _1e85f3a9716c.HTMLEmbedElement, _1e85f3a9716c.HTMLScriptElement, _1e85f3a9716c.HTMLSourceElement ],
          href: [ _1e85f3a9716c.HTMLAnchorElement, _1e85f3a9716c.HTMLLinkElement ],
          data: [ _1e85f3a9716c.HTMLObjectElement ],
          action: [ _1e85f3a9716c.HTMLFormElement ],
          formaction: [ _1e85f3a9716c.HTMLButtonElement, _1e85f3a9716c.HTMLInputElement ],
          srcdoc: [ _1e85f3a9716c.HTMLIFrameElement ],
          poster: [ _1e85f3a9716c.HTMLVideoElement ],
          imagesrcset: [ _1e85f3a9716c.HTMLLinkElement ]
        }, _e853f5e31d91 = [ _1e85f3a9716c.HTMLAnchorElement.prototype, _1e85f3a9716c.HTMLAreaElement.prototype ], _3c266443ddce = [ _1d3a38243eaf.natives.call("Object.getOwnPropertyDescriptor", null, _1e85f3a9716c.HTMLAnchorElement.prototype, "href"), _1d3a38243eaf.natives.call("Object.getOwnPropertyDescriptor", null, _1e85f3a9716c.HTMLAreaElement.prototype, "href") ];
        for (let _1e85f3a9716c of Object.keys(_315f273def32)) for (let _4e0975a1482c of _315f273def32[_1e85f3a9716c]) {
          let _315f273def32 = _1d3a38243eaf.natives.call("Object.getOwnPropertyDescriptor", null, _4e0975a1482c.prototype, _1e85f3a9716c);
          Object.defineProperty(_4e0975a1482c.prototype, _1e85f3a9716c, {
            get() {
              return [ "src", "data", "href", "action", "formaction" ].includes(_1e85f3a9716c) ? (0, 
              _f5fe395ebb04.v2)(_315f273def32.get.call(this)) : _315f273def32.get.call(this);
            },
            set(_1d3a38243eaf) {
              return this.setAttribute(_1e85f3a9716c, _1d3a38243eaf);
            }
          });
        }
        for (let _1e85f3a9716c of [ "protocol", "hash", "host", "hostname", "origin", "pathname", "port", "search" ]) for (let _315f273def32 in _e853f5e31d91) {
          let _4e0975a1482c = _e853f5e31d91[_315f273def32], _3bdf3e120ffd = _3c266443ddce[_315f273def32];
          _1d3a38243eaf.RawTrap(_4e0975a1482c, _1e85f3a9716c, {
            get(_1d3a38243eaf) {
              let _315f273def32 = _3bdf3e120ffd.get.call(_1d3a38243eaf.this);
              return _315f273def32 ? new URL((0, _f5fe395ebb04.v2)(_315f273def32))[_1e85f3a9716c] : _315f273def32;
            }
          });
        }
        _1d3a38243eaf.Trap("Node.prototype.baseURI", {
          get(_1e85f3a9716c) {
            let _315f273def32 = _1e85f3a9716c.this, _4e0975a1482c = _315f273def32.ownerDocument?.querySelector("base");
            return (_315f273def32 instanceof Document && (_4e0975a1482c = _315f273def32.querySelector("base")), 
            _4e0975a1482c) ? new URL(_4e0975a1482c.href, _1d3a38243eaf.url.origin).href : _1d3a38243eaf.url.origin;
          },
          set: (_1d3a38243eaf, _1e85f3a9716c) => !1
        }), _1d3a38243eaf.Proxy("Element.prototype.getAttribute", {
          apply(_1e85f3a9716c) {
            let [_315f273def32] = _1e85f3a9716c.args;
            if (_315f273def32.startsWith("studyjet-attr")) return _1e85f3a9716c.return(null);
            if (_1d3a38243eaf.natives.call("Element.prototype.hasAttribute", _1e85f3a9716c.this, `studyjet-attr-${_315f273def32}`)) {
              let _1d3a38243eaf = _1e85f3a9716c.fn.call(_1e85f3a9716c.this, `studyjet-attr-${_315f273def32}`);
              return null === _1d3a38243eaf ? _1e85f3a9716c.return("") : _1e85f3a9716c.return(_1d3a38243eaf);
            }
          }
        }), _1d3a38243eaf.Proxy("Element.prototype.getAttributeNames", {
          apply(_1d3a38243eaf) {
            let _1e85f3a9716c = _1d3a38243eaf.call().filter(_1d3a38243eaf => !_1d3a38243eaf.startsWith("studyjet-attr"));
            _1d3a38243eaf.return(_1e85f3a9716c);
          }
        }), _1d3a38243eaf.Proxy("Element.prototype.getAttributeNode", {
          apply(_1d3a38243eaf) {
            if (_1d3a38243eaf.args[0].startsWith("studyjet-attr")) return _1d3a38243eaf.return(null);
          }
        }), _1d3a38243eaf.Proxy("Element.prototype.hasAttribute", {
          apply(_1d3a38243eaf) {
            if (_1d3a38243eaf.args[0].startsWith("studyjet-attr")) return _1d3a38243eaf.return(!1);
          }
        }), _1d3a38243eaf.Proxy("Element.prototype.setAttribute", {
          apply(_1e85f3a9716c) {
            let [_315f273def32, _3bdf3e120ffd] = _1e85f3a9716c.args, _ee61174f6deb = _4e0975a1482c.V.find(_1d3a38243eaf => {
              let _4e0975a1482c = _1d3a38243eaf[_315f273def32.toLowerCase()];
              return !!_4e0975a1482c && ("*" === _4e0975a1482c || "function" != typeof _4e0975a1482c && _4e0975a1482c.includes(_1e85f3a9716c.this.tagName.toLowerCase()));
            });
            if (_ee61174f6deb) {
              let _4e0975a1482c = _ee61174f6deb.fn(_3bdf3e120ffd, _1d3a38243eaf.meta, _1d3a38243eaf.cookieStore);
              if (null == _4e0975a1482c) {
                _1d3a38243eaf.natives.call("Element.prototype.removeAttribute", _1e85f3a9716c.this, _315f273def32), 
                _1e85f3a9716c.return(void 0);
                return;
              }
              _1e85f3a9716c.args[1] = _4e0975a1482c, _1e85f3a9716c.fn.call(_1e85f3a9716c.this, `studyjet-attr-${_1e85f3a9716c.args[0]}`, _3bdf3e120ffd);
            }
          }
        }), _1d3a38243eaf.Proxy("Element.prototype.setAttributeNode", {
          apply(_1d3a38243eaf) {}
        }), _1d3a38243eaf.Proxy("Element.prototype.setAttributeNS", {
          apply(_1e85f3a9716c) {
            let [_315f273def32, _3bdf3e120ffd, _ee61174f6deb] = _1e85f3a9716c.args, _a609a4c7d80c = _4e0975a1482c.V.find(_1d3a38243eaf => {
              let _315f273def32 = _1d3a38243eaf[_3bdf3e120ffd.toLowerCase()];
              return !!_315f273def32 && ("*" === _315f273def32 || "function" != typeof _315f273def32 && _315f273def32.includes(_1e85f3a9716c.this.tagName.toLowerCase()));
            });
            _a609a4c7d80c && (_1e85f3a9716c.args[2] = _a609a4c7d80c.fn(_ee61174f6deb, _1d3a38243eaf.meta, _1d3a38243eaf.cookieStore), 
            _1d3a38243eaf.natives.call("Element.prototype.setAttribute", _1e85f3a9716c.this, `studyjet-attr-${_1e85f3a9716c.args[1]}`, _ee61174f6deb));
          }
        }), _1d3a38243eaf.Trap("SVGAnimatedString.prototype.baseVal", {
          get(_1d3a38243eaf) {
            let _1e85f3a9716c = _1d3a38243eaf.get();
            return _1e85f3a9716c ? (0, _f5fe395ebb04.v2)(_1e85f3a9716c) : _1e85f3a9716c;
          },
          set(_1e85f3a9716c, _315f273def32) {
            _1e85f3a9716c.set((0, _f5fe395ebb04.Oy)(_315f273def32, _1d3a38243eaf.meta));
          }
        }), _1d3a38243eaf.Trap("SVGAnimatedString.prototype.animVal", {
          get(_1d3a38243eaf) {
            let _1e85f3a9716c = _1d3a38243eaf.get();
            return _1e85f3a9716c ? (0, _f5fe395ebb04.v2)(_1e85f3a9716c) : _1e85f3a9716c;
          }
        }), _1d3a38243eaf.Proxy("Element.prototype.removeAttribute", {
          apply(_1e85f3a9716c) {
            if (_1e85f3a9716c.args[0].startsWith("studyjet-attr")) return _1e85f3a9716c.return(void 0);
            _1d3a38243eaf.natives.call("Element.prototype.hasAttribute", _1e85f3a9716c.this, _1e85f3a9716c.args[0]) && _1e85f3a9716c.fn.call(_1e85f3a9716c.this, `studyjet-attr-${_1e85f3a9716c.args[0]}`);
          }
        }), _1d3a38243eaf.Proxy("Element.prototype.toggleAttribute", {
          apply(_1e85f3a9716c) {
            if (_1e85f3a9716c.args[0].startsWith("studyjet-attr")) return _1e85f3a9716c.return(!1);
            _1d3a38243eaf.natives.call("Element.prototype.hasAttribute", _1e85f3a9716c.this, _1e85f3a9716c.args[0]) && _1e85f3a9716c.fn.call(_1e85f3a9716c.this, `studyjet-attr-${_1e85f3a9716c.args[0]}`);
          }
        }), _1d3a38243eaf.Trap("Element.prototype.innerHTML", {
          set(_315f273def32, _4e0975a1482c) {
            let _f5fe395ebb04;
            if (_315f273def32.this instanceof _1e85f3a9716c.HTMLScriptElement) _f5fe395ebb04 = (0, 
            _a609a4c7d80c.o)(_4e0975a1482c, "(anonymous script element)", _1d3a38243eaf.meta), 
            _1d3a38243eaf.natives.call("Element.prototype.setAttribute", _315f273def32.this, "studyjet-attr-script-source-src", d(_611b46e2fd2a.encode(_f5fe395ebb04))); else if (_315f273def32.this instanceof _1e85f3a9716c.HTMLStyleElement) _f5fe395ebb04 = (0, 
            _3bdf3e120ffd.s)(_4e0975a1482c, _1d3a38243eaf.meta); else try {
              _f5fe395ebb04 = (0, _ee61174f6deb.Qs)(_4e0975a1482c, _1d3a38243eaf.cookieStore, _1d3a38243eaf.meta);
            } catch {
              _f5fe395ebb04 = _4e0975a1482c;
            }
            _315f273def32.set(_f5fe395ebb04);
          },
          get(_315f273def32) {
            if (_315f273def32.this instanceof _1e85f3a9716c.HTMLScriptElement) {
              let _1e85f3a9716c = _1d3a38243eaf.natives.call("Element.prototype.getAttribute", _315f273def32.this, "studyjet-attr-script-source-src");
              return _1e85f3a9716c ? atob(_1e85f3a9716c) : _315f273def32.get();
            }
            return _315f273def32.this instanceof _1e85f3a9716c.HTMLStyleElement ? _315f273def32.get() : (0, 
            _ee61174f6deb.nK)(_315f273def32.get());
          }
        }), _1d3a38243eaf.Trap("Node.prototype.textContent", {
          set(_315f273def32, _4e0975a1482c) {
            if (_315f273def32.this instanceof _1e85f3a9716c.HTMLScriptElement) {
              let _1e85f3a9716c = (0, _a609a4c7d80c.o)(_4e0975a1482c, "(anonymous script element)", _1d3a38243eaf.meta);
              return _1d3a38243eaf.natives.call("Element.prototype.setAttribute", _315f273def32.this, "studyjet-attr-script-source-src", d(_611b46e2fd2a.encode(_1e85f3a9716c))), 
              _315f273def32.set(_1e85f3a9716c);
            }
            return _315f273def32.this instanceof _1e85f3a9716c.HTMLStyleElement ? _315f273def32.set((0, 
            _3bdf3e120ffd.s)(_4e0975a1482c, _1d3a38243eaf.meta)) : _315f273def32.set(_4e0975a1482c);
          },
          get(_315f273def32) {
            if (_315f273def32.this instanceof _1e85f3a9716c.HTMLScriptElement) {
              let _1e85f3a9716c = _1d3a38243eaf.natives.call("Element.prototype.getAttribute", _315f273def32.this, "studyjet-attr-script-source-src");
              return _1e85f3a9716c ? atob(_1e85f3a9716c) : _315f273def32.get();
            }
            return _315f273def32.this instanceof _1e85f3a9716c.HTMLStyleElement ? (0, _3bdf3e120ffd.f)(_315f273def32.get()) : _315f273def32.get();
          }
        }), _1d3a38243eaf.Trap("Element.prototype.outerHTML", {
          set(_1e85f3a9716c, _315f273def32) {
            _1e85f3a9716c.set((0, _ee61174f6deb.Qs)(_315f273def32, _1d3a38243eaf.cookieStore, _1d3a38243eaf.meta));
          },
          get: _1d3a38243eaf => (0, _ee61174f6deb.nK)(_1d3a38243eaf.get())
        }), _1d3a38243eaf.Proxy("Element.prototype.setHTMLUnsafe", {
          apply(_1e85f3a9716c) {
            try {
              _1e85f3a9716c.args[0] = (0, _ee61174f6deb.Qs)(_1e85f3a9716c.args[0], _1d3a38243eaf.cookieStore, _1d3a38243eaf.meta, !1);
            } catch {}
          }
        }), _1d3a38243eaf.Proxy("Element.prototype.getHTML", {
          apply(_1d3a38243eaf) {
            _1d3a38243eaf.return((0, _ee61174f6deb.nK)(_1d3a38243eaf.call()));
          }
        }), _1d3a38243eaf.Proxy("Element.prototype.insertAdjacentHTML", {
          apply(_1e85f3a9716c) {
            if (_1e85f3a9716c.args[1]) try {
              _1e85f3a9716c.args[1] = (0, _ee61174f6deb.Qs)(_1e85f3a9716c.args[1], _1d3a38243eaf.cookieStore, _1d3a38243eaf.meta, !1);
            } catch {}
          }
        }), _1d3a38243eaf.Proxy("Audio", {
          construct(_1e85f3a9716c) {
            _1e85f3a9716c.args[0] && (_1e85f3a9716c.args[0] = (0, _f5fe395ebb04.Oy)(_1e85f3a9716c.args[0], _1d3a38243eaf.meta));
          }
        }), _1d3a38243eaf.Proxy("Text.prototype.appendData", {
          apply(_1e85f3a9716c) {
            _1e85f3a9716c.this.parentElement?.tagName === "STYLE" && (_1e85f3a9716c.args[0] = (0, 
            _3bdf3e120ffd.s)(_1e85f3a9716c.args[0], _1d3a38243eaf.meta));
          }
        }), _1d3a38243eaf.Proxy("Text.prototype.insertData", {
          apply(_1e85f3a9716c) {
            _1e85f3a9716c.this.parentElement?.tagName === "STYLE" && (_1e85f3a9716c.args[1] = (0, 
            _3bdf3e120ffd.s)(_1e85f3a9716c.args[1], _1d3a38243eaf.meta));
          }
        }), _1d3a38243eaf.Proxy("Text.prototype.replaceData", {
          apply(_1e85f3a9716c) {
            _1e85f3a9716c.this.parentElement?.tagName === "STYLE" && (_1e85f3a9716c.args[2] = (0, 
            _3bdf3e120ffd.s)(_1e85f3a9716c.args[2], _1d3a38243eaf.meta));
          }
        }), _1d3a38243eaf.Trap("Text.prototype.wholeText", {
          get: _1d3a38243eaf => _1d3a38243eaf.this.parentElement?.tagName === "STYLE" ? (0, 
          _3bdf3e120ffd.f)(_1d3a38243eaf.get()) : _1d3a38243eaf.get(),
          set: (_1e85f3a9716c, _315f273def32) => _1e85f3a9716c.this.parentElement?.tagName === "STYLE" ? _1e85f3a9716c.set((0, 
          _3bdf3e120ffd.s)(_315f273def32, _1d3a38243eaf.meta)) : _1e85f3a9716c.set(_315f273def32)
        }), _1d3a38243eaf.Trap([ "HTMLIFrameElement.prototype.contentWindow", "HTMLFrameElement.prototype.contentWindow", "HTMLObjectElement.prototype.contentWindow", "HTMLEmbedElement.prototype.contentWindow" ], {
          get(_1d3a38243eaf) {
            let _1e85f3a9716c = _1d3a38243eaf.get();
            return _1e85f3a9716c && (_5a5cce1642e9.pX in _1e85f3a9716c || new _64f2b2ef4558.StudyJetClient(_1e85f3a9716c).hook()), 
            _1e85f3a9716c;
          }
        }), _1d3a38243eaf.Trap([ "HTMLIFrameElement.prototype.contentDocument", "HTMLFrameElement.prototype.contentDocument", "HTMLObjectElement.prototype.contentDocument", "HTMLEmbedElement.prototype.contentDocument" ], {
          get(_1e85f3a9716c) {
            let _315f273def32 = _1d3a38243eaf.descriptors.get(`${_1e85f3a9716c.this.constructor.name}.prototype.contentWindow`, _1e85f3a9716c.this);
            return _315f273def32 ? (_5a5cce1642e9.pX in _315f273def32 || new _64f2b2ef4558.StudyJetClient(_315f273def32).hook(), 
            _315f273def32.document) : _315f273def32;
          }
        }), _1d3a38243eaf.Proxy([ "HTMLIFrameElement.prototype.getSVGDocument", "HTMLObjectElement.prototype.getSVGDocument", "HTMLEmbedElement.prototype.getSVGDocument" ], {
          apply(_1d3a38243eaf) {
            if (_1d3a38243eaf.call()) return _1d3a38243eaf.return(_1d3a38243eaf.this.contentDocument);
          }
        }), _1d3a38243eaf.Proxy("DOMParser.prototype.parseFromString", {
          apply(_1e85f3a9716c) {
            if ("text/html" === _1e85f3a9716c.args[1]) try {
              _1e85f3a9716c.args[0] = (0, _ee61174f6deb.Qs)(_1e85f3a9716c.args[0], _1d3a38243eaf.cookieStore, _1d3a38243eaf.meta, !1);
            } catch {}
          }
        });
      }
    },
    5426: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        default: () => i
      });
      var _4e0975a1482c = _315f273def32(2614);
      function i(_1d3a38243eaf, _1e85f3a9716c) {
        _1d3a38243eaf.Proxy("FontFace", {
          construct(_1e85f3a9716c) {
            _1e85f3a9716c.args[1] = (0, _4e0975a1482c.s)(_1e85f3a9716c.args[1], _1d3a38243eaf.meta);
          }
        });
      }
    },
    5465: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        default: () => i
      });
      var _4e0975a1482c = _315f273def32(884);
      function i(_1d3a38243eaf, _1e85f3a9716c) {
        _1d3a38243eaf.Proxy("Range.prototype.createContextualFragment", {
          apply(_1e85f3a9716c) {
            _1e85f3a9716c.args[0] = (0, _4e0975a1482c.Qs)(_1e85f3a9716c.args[0], _1d3a38243eaf.cookieStore, _1d3a38243eaf.meta);
          }
        });
      }
    },
    9804: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        default: () => s
      });
      var _4e0975a1482c = _315f273def32(1472), _3bdf3e120ffd = _315f273def32(1862), _ee61174f6deb = _315f273def32(2794);
      function s(_1d3a38243eaf, _1e85f3a9716c) {
        _1d3a38243eaf.Proxy([ "History.prototype.pushState", "History.prototype.replaceState" ], {
          apply(_1e85f3a9716c) {
            (_1e85f3a9716c.args[2] || "" === _1e85f3a9716c.args[2]) && (_1e85f3a9716c.args[2] = (0, 
            _4e0975a1482c.Oy)(_1e85f3a9716c.args[2], _1d3a38243eaf.meta)), _1e85f3a9716c.call();
            let {constructor: {constructor: _315f273def32}} = _1e85f3a9716c.this, _a609a4c7d80c = _315f273def32("return globalThis")(), _f5fe395ebb04 = _a609a4c7d80c[_ee61174f6deb.pX];
            if (_a609a4c7d80c.name === _1d3a38243eaf.meta.topFrameName) {
              let _1e85f3a9716c = new _3bdf3e120ffd.UrlChangeEvent(_f5fe395ebb04.url.href);
              _1d3a38243eaf.frame?.dispatchEvent(_1e85f3a9716c);
            }
          }
        });
      }
    },
    7758: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        default: () => s
      });
      var _4e0975a1482c = _315f273def32(3255), _3bdf3e120ffd = _315f273def32(2794), _ee61174f6deb = _315f273def32(1472);
      function s(_1d3a38243eaf) {
        _1d3a38243eaf.Proxy("window.open", {
          apply(_1e85f3a9716c) {
            _1e85f3a9716c.args[0] && (_1e85f3a9716c.args[0] = (0, _ee61174f6deb.Oy)(_1e85f3a9716c.args[0], _1d3a38243eaf.meta)), 
            ("_top" === _1e85f3a9716c.args[1] || "_unfencedTop" === _1e85f3a9716c.args[1]) && (_1e85f3a9716c.args[1] = _1d3a38243eaf.meta.topFrameName), 
            "_parent" === _1e85f3a9716c.args[1] && (_1e85f3a9716c.args[1] = _1d3a38243eaf.meta.parentFrameName);
            let _315f273def32 = _1e85f3a9716c.call();
            if (!_315f273def32) return _1e85f3a9716c.return(_315f273def32);
            if (_3bdf3e120ffd.pX in _315f273def32) return _1e85f3a9716c.return(_315f273def32[_3bdf3e120ffd.pX].global);
            {
              let _1d3a38243eaf = new _4e0975a1482c.StudyJetClient(_315f273def32);
              return _1d3a38243eaf.hook(), _1e85f3a9716c.return(_1d3a38243eaf.global);
            }
          }
        }), _1d3a38243eaf.Trap("window.frameElement", {
          get(_1d3a38243eaf) {
            let _1e85f3a9716c = _1d3a38243eaf.get();
            return _1e85f3a9716c ? _1e85f3a9716c.ownerDocument.defaultView[_3bdf3e120ffd.pX] ? _1e85f3a9716c : null : _1e85f3a9716c;
          }
        });
      }
    },
    6012: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      function n(_1d3a38243eaf, _1e85f3a9716c) {
        _1d3a38243eaf.Trap("origin", {
          get: () => _1d3a38243eaf.url.origin,
          set: () => !1
        }), _1d3a38243eaf.Trap("Document.prototype.URL", {
          get: () => _1d3a38243eaf.url.href,
          set: () => !1
        }), _1d3a38243eaf.Trap("Document.prototype.documentURI", {
          get: () => _1d3a38243eaf.url.href,
          set: () => !1
        }), _1d3a38243eaf.Trap("Document.prototype.domain", {
          get: () => _1d3a38243eaf.url.hostname,
          set: () => !1
        });
      }
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        default: () => n
      });
    },
    6286: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        default: () => a
      });
      var _4e0975a1482c = _315f273def32(1472), _3bdf3e120ffd = _315f273def32(37);
      function a(_1d3a38243eaf, _1e85f3a9716c) {
        _1d3a38243eaf.Trap("PerformanceEntry.prototype.name", {
          get(_1d3a38243eaf) {
            let _1e85f3a9716c = _1d3a38243eaf.get();
            return _1e85f3a9716c && _1e85f3a9716c.startsWith(location.origin + _3bdf3e120ffd.$W.prefix) ? (0, 
            _4e0975a1482c.v2)(_1e85f3a9716c) : _1e85f3a9716c;
          }
        }), _1d3a38243eaf.Proxy([ "Performance.prototype.getEntries", "Performance.prototype.getEntriesByType", "Performance.prototype.getEntriesByName", "PerformanceObserverEntryList.prototype.getEntries", "PerformanceObserverEntryList.prototype.getEntriesByType", "PerformanceObserverEntryList.prototype.getEntriesByName" ], {
          apply(_1d3a38243eaf) {
            let _1e85f3a9716c = _1d3a38243eaf.call();
            return _1d3a38243eaf.return(_1e85f3a9716c.filter(_1d3a38243eaf => {
              for (let _1e85f3a9716c of Object.values(_3bdf3e120ffd.$W.files)) if (_1d3a38243eaf.name.startsWith(location.origin + _1e85f3a9716c)) return !1;
              return !0;
            }));
          }
        });
      }
    },
    1974: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        default: () => i
      });
      var _4e0975a1482c = _315f273def32(1472);
      function i(_1d3a38243eaf, _1e85f3a9716c) {
        _1d3a38243eaf.Proxy("Navigator.prototype.registerProtocolHandler", {
          apply(_1e85f3a9716c) {
            _1e85f3a9716c.args[1] = (0, _4e0975a1482c.Oy)(_1e85f3a9716c.args[1], _1d3a38243eaf.meta);
          }
        }), _1d3a38243eaf.Proxy("Navigator.prototype.unregisterProtocolHandler", {
          apply(_1e85f3a9716c) {
            _1e85f3a9716c.args[1] = (0, _4e0975a1482c.Oy)(_1e85f3a9716c.args[1], _1d3a38243eaf.meta);
          }
        });
      }
    },
    9201: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        default: () => l,
        disabled: () => o,
        enabled: () => s,
        order: () => _ee61174f6deb
      });
      var _4e0975a1482c = _315f273def32(37), _3bdf3e120ffd = _315f273def32(1472);
      let _ee61174f6deb = 2, s = _1d3a38243eaf => (0, _4e0975a1482c.U5)("serviceworkers", _1d3a38243eaf.url);
      function o(_1d3a38243eaf, _1e85f3a9716c) {
        Reflect.deleteProperty(Navigator.prototype, "serviceWorker");
      }
      function l(_1d3a38243eaf, _1e85f3a9716c) {
        let _315f273def32 = new WeakMap;
        _1d3a38243eaf.Proxy("EventTarget.prototype.addEventListener", {
          apply(_1d3a38243eaf) {
            _315f273def32.get(_1d3a38243eaf.this) && _1d3a38243eaf.return(void 0);
          }
        }), _1d3a38243eaf.Proxy("EventTarget.prototype.removeEventListener", {
          apply(_1d3a38243eaf) {
            _315f273def32.get(_1d3a38243eaf.this) && _1d3a38243eaf.return(void 0);
          }
        }), _1d3a38243eaf.Proxy("ServiceWorkerContainer.prototype.getRegistration", {
          apply(_1d3a38243eaf) {
            _1d3a38243eaf.return(new Promise(_1d3a38243eaf => _1d3a38243eaf(registration)));
          }
        }), _1d3a38243eaf.Proxy("ServiceWorkerContainer.prototype.getRegistrations", {
          apply(_1d3a38243eaf) {
            _1d3a38243eaf.return(new Promise(_1d3a38243eaf => _1d3a38243eaf([ registration ])));
          }
        }), _1d3a38243eaf.Trap("ServiceWorkerContainer.prototype.ready", {
          get: _1d3a38243eaf => new Promise(_1d3a38243eaf => _1d3a38243eaf(registration))
        }), _1d3a38243eaf.Trap("ServiceWorkerContainer.prototype.controller", {
          get: _1d3a38243eaf => registration?.active
        }), _1d3a38243eaf.Proxy("ServiceWorkerContainer.prototype.register", {
          apply(_1e85f3a9716c) {
            let _4e0975a1482c = new EventTarget;
            Object.setPrototypeOf(_4e0975a1482c, self.ServiceWorkerRegistration.prototype), 
            _4e0975a1482c.constructor = _1e85f3a9716c.fn;
            let _ee61174f6deb = (0, _3bdf3e120ffd.Oy)(_1e85f3a9716c.args[0], _1d3a38243eaf.meta) + "?dest=serviceworker";
            _1e85f3a9716c.args[1] && "module" === _1e85f3a9716c.args[1].type && (_ee61174f6deb += "&type=module");
            let _a609a4c7d80c = _1d3a38243eaf.natives.construct("SharedWorker", _ee61174f6deb).port, _f5fe395ebb04 = {
              scope: _1e85f3a9716c.args[0],
              active: _a609a4c7d80c
            }, _5a5cce1642e9 = _1d3a38243eaf.descriptors.get("ServiceWorkerContainer.prototype.controller", _1d3a38243eaf.serviceWorker);
            _1d3a38243eaf.natives.call("ServiceWorker.prototype.postMessage", _5a5cce1642e9, {
              studyjet$type: "registerServiceWorker",
              port: _a609a4c7d80c,
              origin: _1d3a38243eaf.url.origin
            }, [ _a609a4c7d80c ]), _315f273def32.set(_4e0975a1482c, _f5fe395ebb04), _1e85f3a9716c.return(new Promise(_1d3a38243eaf => _1d3a38243eaf(_4e0975a1482c)));
          }
        });
      }
    },
    5289: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      function n(_1d3a38243eaf, _1e85f3a9716c) {
        let _315f273def32 = {
          get(_1e85f3a9716c, _315f273def32) {
            switch (_315f273def32) {
             case "getItem":
              return _315f273def32 => _1e85f3a9716c.getItem(_1d3a38243eaf.url.host + "@" + _315f273def32);

             case "setItem":
              return (_315f273def32, _4e0975a1482c) => _1e85f3a9716c.setItem(_1d3a38243eaf.url.host + "@" + _315f273def32, _4e0975a1482c);

             case "removeItem":
              return _315f273def32 => _1e85f3a9716c.removeItem(_1d3a38243eaf.url.host + "@" + _315f273def32);

             case "clear":
              return () => {
                for (let _315f273def32 in Object.keys(_1e85f3a9716c)) _315f273def32.startsWith(_1d3a38243eaf.url.host) && _1e85f3a9716c.removeItem(_315f273def32);
              };

             case "key":
              return _315f273def32 => {
                let _4e0975a1482c = Object.keys(_1e85f3a9716c).filter(_1e85f3a9716c => _1e85f3a9716c.startsWith(_1d3a38243eaf.url.host));
                return _1e85f3a9716c.getItem(_4e0975a1482c[_315f273def32]);
              };

             case "length":
              return Object.keys(_1e85f3a9716c).filter(_1e85f3a9716c => _1e85f3a9716c.startsWith(_1d3a38243eaf.url.host)).length;

             default:
              if (_315f273def32 in Object.prototype || "symbol" == typeof _315f273def32) return Reflect.get(_1e85f3a9716c, _315f273def32);
              return _1e85f3a9716c.getItem(_1d3a38243eaf.url.host + "@" + _315f273def32);
            }
          },
          set: (_1e85f3a9716c, _315f273def32, _4e0975a1482c) => (_1e85f3a9716c.setItem(_1d3a38243eaf.url.host + "@" + _315f273def32, _4e0975a1482c), 
          !0),
          ownKeys: _1e85f3a9716c => Reflect.ownKeys(_1e85f3a9716c).filter(_1e85f3a9716c => "string" == typeof _1e85f3a9716c && _1e85f3a9716c.startsWith(_1d3a38243eaf.url.host)).map(_1e85f3a9716c => "string" == typeof _1e85f3a9716c ? _1e85f3a9716c.substring(_1d3a38243eaf.url.host.length + 1) : _1e85f3a9716c),
          getOwnPropertyDescriptor: (_1e85f3a9716c, _315f273def32) => ({
            value: _1e85f3a9716c.getItem(_1d3a38243eaf.url.host + "@" + _315f273def32),
            enumerable: !0,
            configurable: !0,
            writable: !0
          }),
          defineProperty: (_1e85f3a9716c, _315f273def32, _4e0975a1482c) => (_1e85f3a9716c.setItem(_1d3a38243eaf.url.host + "@" + _315f273def32, _4e0975a1482c.value), 
          !0)
        };
        _1e85f3a9716c.localStorage;
        let _4e0975a1482c = new Proxy(_1e85f3a9716c.localStorage, _315f273def32), _3bdf3e120ffd = new Proxy(_1e85f3a9716c.sessionStorage, _315f273def32);
        delete _1e85f3a9716c.localStorage, delete _1e85f3a9716c.sessionStorage, _1e85f3a9716c.localStorage = _4e0975a1482c, 
        _1e85f3a9716c.sessionStorage = _3bdf3e120ffd;
      }
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        default: () => n
      });
    },
    1323: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        isdedicated: () => _3c266443ddce,
        isemulatedsw: () => _542e5e0773c9,
        isshared: () => _a9bd71b7ce50,
        issw: () => _e853f5e31d91,
        iswindow: () => _64f2b2ef4558,
        isworker: () => _611b46e2fd2a,
        loadAndHook: () => g
      });
      var _4e0975a1482c = _315f273def32(37), _3bdf3e120ffd = _315f273def32(2794), _ee61174f6deb = _315f273def32(3255), _a609a4c7d80c = _315f273def32(1862), _f5fe395ebb04 = _315f273def32(8409), _5a5cce1642e9 = _315f273def32(8665).A;
      let _64f2b2ef4558 = "window" in globalThis && window instanceof Window, _611b46e2fd2a = "WorkerGlobalScope" in globalThis, _e853f5e31d91 = "ServiceWorkerGlobalScope" in globalThis, _3c266443ddce = "DedicatedWorkerGlobalScope" in globalThis, _a9bd71b7ce50 = "SharedWorkerGlobalScope" in globalThis, _542e5e0773c9 = "location" in globalThis && "serviceworker" === new URL(globalThis.location.href).searchParams.get("dest");
      function g(_1d3a38243eaf) {
        if ((0, _4e0975a1482c.Nk)(_1d3a38243eaf), _5a5cce1642e9.log("initializing studyjet client"), 
        !(_3bdf3e120ffd.pX in globalThis)) {
          (0, _4e0975a1482c.Ec)();
          let _1d3a38243eaf = new _ee61174f6deb.StudyJetClient(globalThis), _1e85f3a9716c = globalThis.frameElement;
          _1e85f3a9716c && !_1e85f3a9716c.name && (_1e85f3a9716c.name = `${Array(8).fill(0).map(() => Math.floor(36 * Math.random()).toString(36)).join("")}`), 
          globalThis.COOKIE && _1d3a38243eaf.loadcookies(globalThis.COOKIE), _1d3a38243eaf.hook(), 
          _542e5e0773c9 && new _f5fe395ebb04.StudyJetServiceWorkerRuntime(_1d3a38243eaf).hook();
          let _315f273def32 = new _a609a4c7d80c.StudyJetContextEvent(_1d3a38243eaf.global.window, _1d3a38243eaf);
          _1d3a38243eaf.frame?.dispatchEvent(_315f273def32);
          let _3bdf3e120ffd = new _a609a4c7d80c.UrlChangeEvent(_1d3a38243eaf.url.href);
          _1d3a38243eaf.isSubframe || _1d3a38243eaf.frame?.dispatchEvent(_3bdf3e120ffd);
        }
        Reflect.deleteProperty(globalThis, "WASM"), Reflect.deleteProperty(globalThis, "COOKIE");
      }
    },
    1862: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        NavigateEvent: () => i,
        StudyJetContextEvent: () => s,
        StudyJetGlobalDownloadEvent: () => n,
        UrlChangeEvent: () => a
      });
      class n extends Event {
        download;
        type="download";
        constructor(_1d3a38243eaf) {
          super("download"), this.download = _1d3a38243eaf;
        }
      }
      class i extends Event {
        url;
        type="navigate";
        constructor(_1d3a38243eaf) {
          super("navigate"), this.url = _1d3a38243eaf;
        }
      }
      class a extends Event {
        url;
        type="urlchange";
        constructor(_1d3a38243eaf) {
          super("urlchange"), this.url = _1d3a38243eaf;
        }
      }
      class s extends Event {
        window;
        client;
        type="contextInit";
        constructor(_1d3a38243eaf, _1e85f3a9716c) {
          super("contextInit"), this.window = _1d3a38243eaf, this.client = _1e85f3a9716c;
        }
      }
    },
    94: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      function n(_1d3a38243eaf, _1e85f3a9716c) {
        return Reflect.getOwnPropertyDescriptor(_1d3a38243eaf, _1e85f3a9716c);
      }
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        getOwnPropertyDescriptorHandler: () => n
      });
    },
    3255: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        NavigateEvent: () => _ee61174f6deb.NavigateEvent,
        StudyJetClient: () => _4e0975a1482c.StudyJetClient,
        StudyJetContextEvent: () => _ee61174f6deb.StudyJetContextEvent,
        StudyJetGlobalDownloadEvent: () => _ee61174f6deb.StudyJetGlobalDownloadEvent,
        StudyJetServiceWorkerRuntime: () => _5a5cce1642e9.StudyJetServiceWorkerRuntime,
        UrlChangeEvent: () => _ee61174f6deb.UrlChangeEvent,
        createLocationProxy: () => _f5fe395ebb04.createLocationProxy,
        getOwnPropertyDescriptorHandler: () => _a609a4c7d80c.getOwnPropertyDescriptorHandler,
        isdedicated: () => _3bdf3e120ffd.isdedicated,
        isemulatedsw: () => _3bdf3e120ffd.isemulatedsw,
        isshared: () => _3bdf3e120ffd.isshared,
        issw: () => _3bdf3e120ffd.issw,
        iswindow: () => _3bdf3e120ffd.iswindow,
        isworker: () => _3bdf3e120ffd.isworker,
        loadAndHook: () => _3bdf3e120ffd.loadAndHook
      });
      var _4e0975a1482c = _315f273def32(336), _3bdf3e120ffd = _315f273def32(1323), _ee61174f6deb = _315f273def32(1862), _a609a4c7d80c = _315f273def32(94), _f5fe395ebb04 = _315f273def32(3696), _5a5cce1642e9 = _315f273def32(8409);
      _315f273def32(3255);
    },
    3696: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        createLocationProxy: () => s
      });
      var _4e0975a1482c = _315f273def32(1862), _3bdf3e120ffd = _315f273def32(1472), _ee61174f6deb = _315f273def32(1323);
      function s(_1d3a38243eaf, _1e85f3a9716c) {
        let _315f273def32 = _ee61174f6deb.iswindow ? _1e85f3a9716c.Location : _1e85f3a9716c.WorkerLocation, _a609a4c7d80c = {};
        Object.setPrototypeOf(_a609a4c7d80c, _315f273def32.prototype), _a609a4c7d80c.constructor = _315f273def32;
        let _f5fe395ebb04 = _ee61174f6deb.iswindow ? _1e85f3a9716c.location : _315f273def32.prototype;
        for (let _315f273def32 of [ "protocol", "hash", "host", "hostname", "href", "origin", "pathname", "port", "search" ]) {
          let _3bdf3e120ffd = _1d3a38243eaf.natives.call("Object.getOwnPropertyDescriptor", null, _f5fe395ebb04, _315f273def32);
          if (!_3bdf3e120ffd) continue;
          let _ee61174f6deb = {
            configurable: !1,
            enumerable: !0
          };
          _3bdf3e120ffd.get && (_ee61174f6deb.get = new Proxy(_3bdf3e120ffd.get, {
            apply: () => _1d3a38243eaf.url[_315f273def32]
          })), _3bdf3e120ffd.set && (_ee61174f6deb.set = new Proxy(_3bdf3e120ffd.set, {
            apply(_3bdf3e120ffd, _ee61174f6deb, _a609a4c7d80c) {
              if ("href" === _315f273def32) {
                _1d3a38243eaf.url = _a609a4c7d80c[0];
                return;
              }
              if ("hash" === _315f273def32) {
                _1e85f3a9716c.location.hash = _a609a4c7d80c[0];
                let _315f273def32 = new _4e0975a1482c.UrlChangeEvent(_1d3a38243eaf.url.href);
                _1d3a38243eaf.isSubframe || _1d3a38243eaf.frame?.dispatchEvent(_315f273def32);
                return;
              }
              let _f5fe395ebb04 = new URL(_1d3a38243eaf.url.href);
              _f5fe395ebb04[_315f273def32] = _a609a4c7d80c[0], _1d3a38243eaf.url = _f5fe395ebb04;
            }
          })), Object.defineProperty(_a609a4c7d80c, _315f273def32, _ee61174f6deb);
        }
        return _a609a4c7d80c.toString = new Proxy(_1e85f3a9716c.location.toString, {
          apply: () => _1d3a38243eaf.url.href
        }), _1e85f3a9716c.location.valueOf && (_a609a4c7d80c.valueOf = new Proxy(_1e85f3a9716c.location.valueOf, {
          apply: () => _1d3a38243eaf.url.href
        })), _1e85f3a9716c.location.assign && (_a609a4c7d80c.assign = new Proxy(_1e85f3a9716c.location.assign, {
          apply(_315f273def32, _ee61174f6deb, _a609a4c7d80c) {
            _a609a4c7d80c[0] = (0, _3bdf3e120ffd.Oy)(_a609a4c7d80c[0], _1d3a38243eaf.meta), 
            Reflect.apply(_315f273def32, _1e85f3a9716c.location, _a609a4c7d80c);
            let _f5fe395ebb04 = new _4e0975a1482c.UrlChangeEvent(_1d3a38243eaf.url.href);
            _1d3a38243eaf.isSubframe || _1d3a38243eaf.frame?.dispatchEvent(_f5fe395ebb04);
          }
        })), _1e85f3a9716c.location.reload && (_a609a4c7d80c.reload = new Proxy(_1e85f3a9716c.location.reload, {
          apply(_1d3a38243eaf, _315f273def32, _4e0975a1482c) {
            Reflect.apply(_1d3a38243eaf, _1e85f3a9716c.location, _4e0975a1482c);
          }
        })), _1e85f3a9716c.location.replace && (_a609a4c7d80c.replace = new Proxy(_1e85f3a9716c.location.replace, {
          apply(_315f273def32, _ee61174f6deb, _a609a4c7d80c) {
            _a609a4c7d80c[0] = (0, _3bdf3e120ffd.Oy)(_a609a4c7d80c[0], _1d3a38243eaf.meta), 
            Reflect.apply(_315f273def32, _1e85f3a9716c.location, _a609a4c7d80c);
            let _f5fe395ebb04 = new _4e0975a1482c.UrlChangeEvent(_1d3a38243eaf.url.href);
            _1d3a38243eaf.isSubframe || _1d3a38243eaf.frame?.dispatchEvent(_f5fe395ebb04);
          }
        })), _a609a4c7d80c;
      }
    },
    8382: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      function n(_1d3a38243eaf) {
        _1d3a38243eaf.Proxy("console.clear", {
          apply(_1d3a38243eaf) {
            _1d3a38243eaf.return(void 0);
          }
        });
        let _1e85f3a9716c = console.log;
        _1d3a38243eaf.Trap("console.log", {
          set(_1d3a38243eaf, _1e85f3a9716c) {},
          get: _1d3a38243eaf => _1e85f3a9716c
        });
      }
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        default: () => n
      });
    },
    4634: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        default: () => i
      });
      var _4e0975a1482c = _315f273def32(1472);
      function i(_1d3a38243eaf) {
        _1d3a38243eaf.Proxy("URL.createObjectURL", {
          apply(_1e85f3a9716c) {
            let _315f273def32 = _1e85f3a9716c.call();
            _315f273def32.startsWith("blob:") ? _1e85f3a9716c.return((0, _4e0975a1482c.IP)(_315f273def32, _1d3a38243eaf.meta)) : _1e85f3a9716c.return(_315f273def32);
          }
        }), _1d3a38243eaf.Proxy("URL.revokeObjectURL", {
          apply(_1d3a38243eaf) {
            _1d3a38243eaf.args[0] = (0, _4e0975a1482c.$n)(_1d3a38243eaf.args[0]);
          }
        });
      }
    },
    5026: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        default: () => i
      });
      var _4e0975a1482c = _315f273def32(1472);
      function i(_1d3a38243eaf, _1e85f3a9716c) {
        _1d3a38243eaf.Proxy("CacheStorage.prototype.open", {
          apply(_1e85f3a9716c) {
            _1e85f3a9716c.args[0] = `${_1d3a38243eaf.url.origin}@${_1e85f3a9716c.args[0]}`;
          }
        }), _1d3a38243eaf.Proxy("CacheStorage.prototype.has", {
          apply(_1e85f3a9716c) {
            _1e85f3a9716c.args[0] = `${_1d3a38243eaf.url.origin}@${_1e85f3a9716c.args[0]}`;
          }
        }), _1d3a38243eaf.Proxy("CacheStorage.prototype.match", {
          apply(_1e85f3a9716c) {
            ("string" == typeof _1e85f3a9716c.args[0] || _1e85f3a9716c.args[0] instanceof URL) && (_1e85f3a9716c.args[0] = (0, 
            _4e0975a1482c.Oy)(_1e85f3a9716c.args[0], _1d3a38243eaf.meta));
          }
        }), _1d3a38243eaf.Proxy("CacheStorage.prototype.delete", {
          apply(_1e85f3a9716c) {
            _1e85f3a9716c.args[0] = `${_1d3a38243eaf.url.origin}@${_1e85f3a9716c.args[0]}`;
          }
        }), _1d3a38243eaf.Proxy("Cache.prototype.add", {
          apply(_1e85f3a9716c) {
            ("string" == typeof _1e85f3a9716c.args[0] || _1e85f3a9716c.args[0] instanceof URL) && (_1e85f3a9716c.args[0] = (0, 
            _4e0975a1482c.Oy)(_1e85f3a9716c.args[0], _1d3a38243eaf.meta));
          }
        }), _1d3a38243eaf.Proxy("Cache.prototype.addAll", {
          apply(_1e85f3a9716c) {
            for (let _315f273def32 = 0; _315f273def32 < _1e85f3a9716c.args[0].length; _315f273def32++) ("string" == typeof _1e85f3a9716c.args[0][_315f273def32] || _1e85f3a9716c.args[0][_315f273def32] instanceof URL) && (_1e85f3a9716c.args[0][_315f273def32] = (0, 
            _4e0975a1482c.Oy)(_1e85f3a9716c.args[0][_315f273def32], _1d3a38243eaf.meta));
          }
        }), _1d3a38243eaf.Proxy("Cache.prototype.put", {
          apply(_1e85f3a9716c) {
            ("string" == typeof _1e85f3a9716c.args[0] || _1e85f3a9716c.args[0] instanceof URL) && (_1e85f3a9716c.args[0] = (0, 
            _4e0975a1482c.Oy)(_1e85f3a9716c.args[0], _1d3a38243eaf.meta));
          }
        }), _1d3a38243eaf.Proxy("Cache.prototype.match", {
          apply(_1e85f3a9716c) {
            ("string" == typeof _1e85f3a9716c.args[0] || _1e85f3a9716c.args[0] instanceof URL) && (_1e85f3a9716c.args[0] = (0, 
            _4e0975a1482c.Oy)(_1e85f3a9716c.args[0], _1d3a38243eaf.meta));
          }
        }), _1d3a38243eaf.Proxy("Cache.prototype.matchAll", {
          apply(_1e85f3a9716c) {
            (_1e85f3a9716c.args[0] && "string" == typeof _1e85f3a9716c.args[0] || _1e85f3a9716c.args[0] && _1e85f3a9716c.args[0] instanceof URL) && (_1e85f3a9716c.args[0] = (0, 
            _4e0975a1482c.Oy)(_1e85f3a9716c.args[0], _1d3a38243eaf.meta));
          }
        }), _1d3a38243eaf.Proxy("Cache.prototype.keys", {
          apply(_1e85f3a9716c) {
            (_1e85f3a9716c.args[0] && "string" == typeof _1e85f3a9716c.args[0] || _1e85f3a9716c.args[0] && _1e85f3a9716c.args[0] instanceof URL) && (_1e85f3a9716c.args[0] = (0, 
            _4e0975a1482c.Oy)(_1e85f3a9716c.args[0], _1d3a38243eaf.meta));
          }
        }), _1d3a38243eaf.Proxy("Cache.prototype.delete", {
          apply(_1e85f3a9716c) {
            ("string" == typeof _1e85f3a9716c.args[0] || _1e85f3a9716c.args[0] instanceof URL) && (_1e85f3a9716c.args[0] = (0, 
            _4e0975a1482c.Oy)(_1e85f3a9716c.args[0], _1d3a38243eaf.meta));
          }
        });
      }
    },
    6627: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        default: () => i
      });
      var _4e0975a1482c = _315f273def32(1323);
      function i(_1d3a38243eaf, _1e85f3a9716c) {
        let r = _1d3a38243eaf => {
          let _315f273def32 = _1d3a38243eaf.split("."), _4e0975a1482c = _315f273def32.pop(), _3bdf3e120ffd = _315f273def32.reduce((_1d3a38243eaf, _1e85f3a9716c) => _1d3a38243eaf?.[_1e85f3a9716c], _1e85f3a9716c);
          _3bdf3e120ffd && _4e0975a1482c && _4e0975a1482c in _3bdf3e120ffd && delete _3bdf3e120ffd[_4e0975a1482c];
        };
        r("BarcodeDetector"), r("FaceDetector"), r("TextDetector"), _4e0975a1482c.iswindow && r("ServiceWorkerRegistration.prototype.sync"), 
        _4e0975a1482c.isemulatedsw && (r("SyncManager"), r("SyncEvent")), r("TrustedHTML"), 
        r("TrustedScript"), r("TrustedScriptURL"), r("TrustedTypePolicy"), r("TrustedTypePolicyFactory"), 
        _1e85f3a9716c.__defineGetter__("trustedTypes", () => void 0), r("Navigator.prototype.joinAdInterestGroup"), 
        _4e0975a1482c.iswindow && (r("MediaDevices.prototype.setCaptureHandleConfig"), r("Navigator.prototype.bluetooth"), 
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
    582: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        argdbg: () => a,
        default: () => s,
        enabled: () => i
      });
      var _4e0975a1482c = _315f273def32(37);
      let i = _1d3a38243eaf => (0, _4e0975a1482c.U5)("captureErrors", _1d3a38243eaf.url);
      function a(_1d3a38243eaf, _1e85f3a9716c = []) {
        switch (typeof _1d3a38243eaf) {
         case "string":
          break;

         case "object":
          if (_1d3a38243eaf && _1d3a38243eaf[Symbol.iterator] && "function" == typeof _1d3a38243eaf[Symbol.iterator]) for (let _315f273def32 in _1d3a38243eaf) {
            let _4e0975a1482c = Object.getOwnPropertyDescriptor(_1d3a38243eaf, _315f273def32);
            if (_4e0975a1482c && _4e0975a1482c.get) continue;
            let _3bdf3e120ffd = _1d3a38243eaf[_315f273def32];
            _1e85f3a9716c.includes(_3bdf3e120ffd) || (_1e85f3a9716c.push(_3bdf3e120ffd), a(_3bdf3e120ffd, _1e85f3a9716c));
          }
        }
      }
      function s(_1d3a38243eaf, _1e85f3a9716c) {
        let _315f273def32 = console.warn;
        _1e85f3a9716c.$scramerr = function(_1d3a38243eaf) {
          _315f273def32("CAUGHT ERROR", _1d3a38243eaf);
        }, _1e85f3a9716c.$scramdbg = function(_1d3a38243eaf, _1e85f3a9716c) {
          return _1d3a38243eaf && "object" == typeof _1d3a38243eaf && _1d3a38243eaf.length > 0 && a(_1d3a38243eaf), 
          a(_1e85f3a9716c), _1e85f3a9716c;
        }, _1d3a38243eaf.Proxy("Promise.prototype.catch", {
          apply(_1d3a38243eaf) {
            _1d3a38243eaf.args[0] && (_1d3a38243eaf.args[0] = new Proxy(_1d3a38243eaf.args[0], {
              apply(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
                Reflect.apply(_1d3a38243eaf, _1e85f3a9716c, _315f273def32);
              }
            }));
          }
        });
      }
    },
    6143: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        default: () => s,
        enabled: () => a
      });
      var _4e0975a1482c = _315f273def32(37), _3bdf3e120ffd = _315f273def32(1472);
      let a = _1d3a38243eaf => (0, _4e0975a1482c.U5)("cleanErrors", _1d3a38243eaf.url);
      function s(_1d3a38243eaf, _1e85f3a9716c) {
        let r = (_1d3a38243eaf, _1e85f3a9716c) => {
          let _315f273def32 = _1d3a38243eaf.stack;
          for (let _1d3a38243eaf = 0; _1d3a38243eaf < _1e85f3a9716c.length; _1d3a38243eaf++) {
            let _ee61174f6deb = _1e85f3a9716c[_1d3a38243eaf].getFileName();
            try {
              if (_ee61174f6deb.endsWith(_4e0975a1482c.$W.files.all)) {
                let _1d3a38243eaf = _315f273def32.split("\n"), _1e85f3a9716c = _1d3a38243eaf.find(_1d3a38243eaf => _1d3a38243eaf.includes(_ee61174f6deb));
                _1d3a38243eaf.splice(_1e85f3a9716c, 1), _315f273def32 = _1d3a38243eaf.join("\n");
                continue;
              }
            } catch {}
            try {
              _315f273def32 = _315f273def32.replaceAll(_ee61174f6deb, (0, _3bdf3e120ffd.v2)(_ee61174f6deb));
            } catch {}
          }
          return _315f273def32;
        };
        _1d3a38243eaf.Trap("Error.prepareStackTrace", {
          get: _1d3a38243eaf => r,
          set(_1d3a38243eaf) {}
        });
      }
    },
    591: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        default: () => a,
        indirectEval: () => s
      });
      var _4e0975a1482c = _315f273def32(37), _3bdf3e120ffd = _315f273def32(1478);
      function a(_1d3a38243eaf, _1e85f3a9716c) {
        Object.defineProperty(_1e85f3a9716c, _4e0975a1482c.$W.globals.rewritefn, {
          value: function(_1e85f3a9716c) {
            return "string" != typeof _1e85f3a9716c ? _1e85f3a9716c : (0, _3bdf3e120ffd.o)(_1e85f3a9716c, "(direct eval proxy)", _1d3a38243eaf.meta);
          },
          writable: !1,
          configurable: !1
        });
      }
      function s(_1d3a38243eaf, _1e85f3a9716c) {
        let _315f273def32;
        return "string" != typeof _1e85f3a9716c ? _1e85f3a9716c : ("accounts.google.com" === this.url.hostname ? (console.log("USING STRICT EVAL - BOTGUARD"), 
        _315f273def32 = Function(`\n\t\t\t"use strict";\n\t\t\treturn eval;\n\t\t`)) : _315f273def32 = this.global.eval, 
        _315f273def32((0, _3bdf3e120ffd.o)(_1e85f3a9716c, "(indirect eval proxy)", this.meta)));
      }
    },
    3481: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        default: () => o
      });
      var _4e0975a1482c = _315f273def32(1323), _3bdf3e120ffd = _315f273def32(1472), _ee61174f6deb = _315f273def32(94);
      let _a609a4c7d80c = Symbol.for("studyjet original onevent function");
      function o(_1d3a38243eaf, _1e85f3a9716c) {
        let _315f273def32 = {
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
              return "object" == typeof this.data && "$studyjet$origin" in this.data ? this.data.$studyjet$origin : _1d3a38243eaf.url.origin;
            },
            data() {
              return "object" == typeof this.data && "$studyjet$data" in this.data ? this.data.$studyjet$data : this.data;
            }
          },
          hashchange: {
            oldURL() {
              return (0, _3bdf3e120ffd.v2)(this.oldURL);
            },
            newURL() {
              return (0, _3bdf3e120ffd.v2)(this.newURL);
            }
          },
          storage: {
            _init() {
              return this.key.startsWith(_1d3a38243eaf.url.host + "@");
            },
            key() {
              return this.key.substring(this.key.indexOf("@") + 1);
            },
            url() {
              return (0, _3bdf3e120ffd.v2)(this.url);
            }
          }
        };
        function o(_1d3a38243eaf) {
          return new Proxy(_1d3a38243eaf, {
            apply(_1d3a38243eaf, _4e0975a1482c, _3bdf3e120ffd) {
              let _a609a4c7d80c = _3bdf3e120ffd[0];
              if (_a609a4c7d80c.isTrusted) {
                let _1d3a38243eaf = _a609a4c7d80c.type;
                if (_1d3a38243eaf in _315f273def32) {
                  let _1e85f3a9716c = _315f273def32[_1d3a38243eaf];
                  if (_1e85f3a9716c._init && !1 === _1e85f3a9716c._init.call(_a609a4c7d80c)) return;
                  _3bdf3e120ffd[0] = new Proxy(_a609a4c7d80c, {
                    get(_1d3a38243eaf, _315f273def32, _4e0975a1482c) {
                      let _3bdf3e120ffd = Reflect.get(_1d3a38243eaf, _315f273def32);
                      return _315f273def32 in _1e85f3a9716c ? _1e85f3a9716c[_315f273def32].call(_1d3a38243eaf) : "function" == typeof _3bdf3e120ffd ? new Proxy(_3bdf3e120ffd, {
                        apply: (_1d3a38243eaf, _1e85f3a9716c, _315f273def32) => _1e85f3a9716c === _4e0975a1482c ? Reflect.apply(_1d3a38243eaf, _a609a4c7d80c, _315f273def32) : Reflect.apply(_1d3a38243eaf, _1e85f3a9716c, _315f273def32)
                      }) : _3bdf3e120ffd;
                    },
                    getOwnPropertyDescriptor: _ee61174f6deb.getOwnPropertyDescriptorHandler
                  });
                }
              }
              return _1e85f3a9716c.event || Object.defineProperty(_1e85f3a9716c, "event", {
                get: () => _3bdf3e120ffd[0],
                configurable: !0
              }), Reflect.apply(_1d3a38243eaf, _4e0975a1482c, _3bdf3e120ffd);
            },
            getOwnPropertyDescriptor: _ee61174f6deb.getOwnPropertyDescriptorHandler
          });
        }
        _1d3a38243eaf.Proxy("EventTarget.prototype.addEventListener", {
          apply(_1e85f3a9716c) {
            if ("function" != typeof _1e85f3a9716c.args[1]) return;
            let _315f273def32 = _1e85f3a9716c.args[1], _4e0975a1482c = o(_315f273def32);
            _1e85f3a9716c.args[1] = _4e0975a1482c;
            let _3bdf3e120ffd = _1d3a38243eaf.eventcallbacks.get(_1e85f3a9716c.this);
            (_3bdf3e120ffd ||= []).push({
              event: _1e85f3a9716c.args[0],
              originalCallback: _315f273def32,
              proxiedCallback: _4e0975a1482c
            }), _1d3a38243eaf.eventcallbacks.set(_1e85f3a9716c.this, _3bdf3e120ffd);
          }
        }), _1d3a38243eaf.Proxy("EventTarget.prototype.removeEventListener", {
          apply(_1e85f3a9716c) {
            if ("function" != typeof _1e85f3a9716c.args[1]) return;
            let _315f273def32 = _1d3a38243eaf.eventcallbacks.get(_1e85f3a9716c.this);
            if (!_315f273def32) return;
            let _4e0975a1482c = _315f273def32.findIndex(_1d3a38243eaf => _1d3a38243eaf.event === _1e85f3a9716c.args[0] && _1d3a38243eaf.originalCallback === _1e85f3a9716c.args[1]);
            if (-1 === _4e0975a1482c) return;
            let _3bdf3e120ffd = _315f273def32.splice(_4e0975a1482c, 1);
            _1d3a38243eaf.eventcallbacks.set(_1e85f3a9716c.this, _315f273def32), _1e85f3a9716c.args[1] = _3bdf3e120ffd[0].proxiedCallback;
          }
        });
        let _f5fe395ebb04 = [ _1e85f3a9716c.self, _1e85f3a9716c.MessagePort.prototype ];
        for (let _3bdf3e120ffd of (_4e0975a1482c.iswindow && _f5fe395ebb04.push(_1e85f3a9716c.HTMLElement.prototype), 
        _1e85f3a9716c.Worker && _f5fe395ebb04.push(_1e85f3a9716c.Worker.prototype), _f5fe395ebb04)) for (let _1e85f3a9716c of Reflect.ownKeys(_3bdf3e120ffd)) if ("string" == typeof _1e85f3a9716c && _1e85f3a9716c.startsWith("on") && _315f273def32[_1e85f3a9716c.slice(2)]) {
          let _315f273def32 = _1d3a38243eaf.natives.call("Object.getOwnPropertyDescriptor", null, _3bdf3e120ffd, _1e85f3a9716c);
          if (!_315f273def32.get || !_315f273def32.set || !_315f273def32.configurable) continue;
          _1d3a38243eaf.RawTrap(_3bdf3e120ffd, _1e85f3a9716c, {
            get(_1d3a38243eaf) {
              return this[_a609a4c7d80c] ? this[_a609a4c7d80c] : _1d3a38243eaf.get();
            },
            set(_1d3a38243eaf, _1e85f3a9716c) {
              if (this[_a609a4c7d80c] = _1e85f3a9716c, "function" != typeof _1e85f3a9716c) return _1d3a38243eaf.set(_1e85f3a9716c);
              _1d3a38243eaf.set(o(_1e85f3a9716c));
            }
          });
        }
      }
    },
    249: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        default: () => a
      });
      var _4e0975a1482c = _315f273def32(1478);
      function i(_1d3a38243eaf, _1e85f3a9716c) {
        let _315f273def32 = _1d3a38243eaf.call().toString(), _3bdf3e120ffd = (0, _4e0975a1482c.o)(`return ${_315f273def32}`, "(function proxy)", _1e85f3a9716c.meta);
        _1d3a38243eaf.return(_1d3a38243eaf.fn(_3bdf3e120ffd)());
      }
      function a(_1d3a38243eaf, _1e85f3a9716c) {
        let _315f273def32 = {
          apply(_1e85f3a9716c) {
            i(_1e85f3a9716c, _1d3a38243eaf);
          },
          construct(_1e85f3a9716c) {
            i(_1e85f3a9716c, _1d3a38243eaf);
          }
        };
        _1d3a38243eaf.Proxy("Function", _315f273def32);
        let _4e0975a1482c = _1d3a38243eaf.natives.call("eval", null, "(function () {})").constructor, _3bdf3e120ffd = _1d3a38243eaf.natives.call("eval", null, "(async function () {})").constructor, _ee61174f6deb = _1d3a38243eaf.natives.call("eval", null, "(function* () {})").constructor, _a609a4c7d80c = _1d3a38243eaf.natives.call("eval", null, "(async function* () {})").constructor;
        _1d3a38243eaf.RawProxy(_4e0975a1482c.prototype, "constructor", _315f273def32), _1d3a38243eaf.RawProxy(_3bdf3e120ffd.prototype, "constructor", _315f273def32), 
        _1d3a38243eaf.RawProxy(_ee61174f6deb.prototype, "constructor", _315f273def32), _1d3a38243eaf.RawProxy(_a609a4c7d80c.prototype, "constructor", _315f273def32);
      }
    },
    2468: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        default: () => a
      });
      var _4e0975a1482c = _315f273def32(37), _3bdf3e120ffd = _315f273def32(1472);
      function a(_1d3a38243eaf, _1e85f3a9716c) {
        let _315f273def32 = _1d3a38243eaf.natives.call("Function", null, "url", "return import(url)");
        Object.defineProperty(_1e85f3a9716c, _4e0975a1482c.$W.globals.importfn, {
          value: function(_1e85f3a9716c, _4e0975a1482c) {
            let _ee61174f6deb = new URL(_4e0975a1482c, _1e85f3a9716c).href;
            return _4e0975a1482c.includes(":") || _4e0975a1482c.startsWith("/") || _4e0975a1482c.startsWith(".") || _4e0975a1482c.startsWith("..") ? _315f273def32(`${(0, 
            _3bdf3e120ffd.Oy)(_ee61174f6deb, _1d3a38243eaf.meta)}?type=module`) : _315f273def32(_4e0975a1482c);
          },
          writable: !1,
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_1e85f3a9716c, _4e0975a1482c.$W.globals.metafn, {
          value: function(_1d3a38243eaf, _1e85f3a9716c) {
            return _1d3a38243eaf.url = _1e85f3a9716c, _1d3a38243eaf.resolve = function(_1d3a38243eaf) {
              return new URL(_1d3a38243eaf, _1e85f3a9716c).href;
            }, _1d3a38243eaf;
          },
          writable: !1,
          configurable: !1,
          enumerable: !1
        });
      }
    },
    4338: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      function n(_1d3a38243eaf) {
        _1d3a38243eaf.Proxy("IDBFactory.prototype.open", {
          apply(_1e85f3a9716c) {
            _1e85f3a9716c.args[0] = `${_1d3a38243eaf.url.origin}@${_1e85f3a9716c.args[0]}`;
          }
        }), _1d3a38243eaf.Trap("IDBDatabase.prototype.name", {
          get(_1d3a38243eaf) {
            let _1e85f3a9716c = _1d3a38243eaf.get();
            return _1e85f3a9716c.substring(_1e85f3a9716c.indexOf("@") + 1);
          }
        });
      }
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        default: () => n
      });
    },
    6593: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      function n(_1d3a38243eaf) {
        _1d3a38243eaf.Proxy("StorageManager.prototype.getDirectory", {
          apply(_1e85f3a9716c) {
            let _315f273def32 = _1e85f3a9716c.call();
            _1e85f3a9716c.return((async () => {
              let _1e85f3a9716c = await _315f273def32, _4e0975a1482c = await _1e85f3a9716c.getDirectoryHandle(`${_1d3a38243eaf.url.origin.replace(/\/|\s|\./g, "-")}`, {
                create: !0
              });
              return Object.defineProperty(_4e0975a1482c, "name", {
                value: "",
                writable: !1
              }), _4e0975a1482c;
            })());
          }
        });
      }
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        default: () => n
      });
    },
    1320: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        default: () => s
      });
      var _4e0975a1482c = _315f273def32(1323), _3bdf3e120ffd = _315f273def32(2794), _ee61174f6deb = _315f273def32(1914);
      function s(_1d3a38243eaf) {
        _4e0975a1482c.iswindow && _1d3a38243eaf.Proxy("window.postMessage", {
          apply(_1d3a38243eaf) {
            let {constructor: {constructor: _1e85f3a9716c}} = "object" == typeof _1d3a38243eaf.args[0] && null !== _1d3a38243eaf.args[0] ? _1d3a38243eaf.args[0] : "object" == typeof _1d3a38243eaf.args[2] && null !== _1d3a38243eaf.args[2] ? _1d3a38243eaf.args[2] : _1d3a38243eaf.this && _ee61174f6deb.POLLUTANT in _1d3a38243eaf.this && "object" == typeof _1d3a38243eaf.this[_ee61174f6deb.POLLUTANT] && null !== _1d3a38243eaf.this[_ee61174f6deb.POLLUTANT] ? _1d3a38243eaf.this[_ee61174f6deb.POLLUTANT] : {}, _315f273def32 = _1e85f3a9716c("return globalThis")()[_3bdf3e120ffd.pX], _4e0975a1482c = _1e85f3a9716c("...args", "this(...args)");
            _1d3a38243eaf.args[0] = {
              $studyjet$messagetype: "window",
              $studyjet$origin: _315f273def32.url.origin,
              $studyjet$data: _1d3a38243eaf.args[0]
            }, "string" == typeof _1d3a38243eaf.args[1] && (_1d3a38243eaf.args[1] = "*"), "object" == typeof _1d3a38243eaf.args[1] && (_1d3a38243eaf.args[1].targetOrigin = "*"), 
            _1d3a38243eaf.return(_4e0975a1482c.call(_1d3a38243eaf.fn, ..._1d3a38243eaf.args));
          }
        });
        let _1e85f3a9716c = [ "MessagePort.prototype.postMessage" ];
        self.Worker && _1e85f3a9716c.push("Worker.prototype.postMessage"), _4e0975a1482c.iswindow || _1e85f3a9716c.push("self.postMessage"), 
        _1d3a38243eaf.Proxy(_1e85f3a9716c, {
          apply(_1d3a38243eaf) {
            _1d3a38243eaf.args[0] = {
              $studyjet$messagetype: "worker",
              $studyjet$data: _1d3a38243eaf.args[0]
            };
          }
        });
      }
    },
    1914: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        POLLUTANT: () => _3bdf3e120ffd,
        default: () => a
      });
      var _4e0975a1482c = _315f273def32(37);
      let _3bdf3e120ffd = Symbol.for("studyjet realm pollutant");
      function a(_1d3a38243eaf, _1e85f3a9716c) {
        Object.defineProperty(_1e85f3a9716c.Object.prototype, _4e0975a1482c.$W.globals.setrealmfn, {
          value(_1d3a38243eaf) {
            return Object.defineProperty(this, _3bdf3e120ffd, {
              value: _1d3a38243eaf,
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
    9701: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        default: () => i
      });
      var _4e0975a1482c = _315f273def32(1472);
      function i(_1d3a38243eaf) {
        _1d3a38243eaf.Proxy("EventSource", {
          construct(_1e85f3a9716c) {
            _1e85f3a9716c.args[0] = (0, _4e0975a1482c.Oy)(_1e85f3a9716c.args[0], _1d3a38243eaf.meta);
          }
        }), _1d3a38243eaf.Trap("EventSource.prototype.url", {
          get(_1d3a38243eaf) {
            (0, _4e0975a1482c.v2)(_1d3a38243eaf.get());
          }
        });
      }
    },
    6972: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        default: () => a
      });
      var _4e0975a1482c = _315f273def32(1323), _3bdf3e120ffd = _315f273def32(1472);
      function a(_1d3a38243eaf) {
        _1d3a38243eaf.Proxy("fetch", {
          apply(_1e85f3a9716c) {
            ("string" == typeof _1e85f3a9716c.args[0] || _1e85f3a9716c.args[0] instanceof URL) && (_1e85f3a9716c.args[0] = (0, 
            _3bdf3e120ffd.Oy)(_1e85f3a9716c.args[0], _1d3a38243eaf.meta), _4e0975a1482c.isemulatedsw && (_1e85f3a9716c.args[0] += "?from=swruntime"));
          }
        }), _1d3a38243eaf.Proxy("Request", {
          construct(_1e85f3a9716c) {
            ("string" == typeof _1e85f3a9716c.args[0] || _1e85f3a9716c.args[0] instanceof URL) && (_1e85f3a9716c.args[0] = (0, 
            _3bdf3e120ffd.Oy)(_1e85f3a9716c.args[0], _1d3a38243eaf.meta), _4e0975a1482c.isemulatedsw && (_1e85f3a9716c.args[0] += "?from=swruntime"));
          }
        }), _1d3a38243eaf.Trap("Response.prototype.url", {
          get: _1d3a38243eaf => (0, _3bdf3e120ffd.v2)(_1d3a38243eaf.get())
        }), _1d3a38243eaf.Trap("Request.prototype.url", {
          get: _1d3a38243eaf => (0, _3bdf3e120ffd.v2)(_1d3a38243eaf.get())
        });
      }
    },
    9931: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      function n(_1d3a38243eaf, _1e85f3a9716c) {
        let _315f273def32 = new WeakMap, _4e0975a1482c = new WeakMap;
        _1d3a38243eaf.Proxy("WebSocket", {
          construct(_4e0975a1482c) {
            let _3bdf3e120ffd = new EventTarget;
            Object.setPrototypeOf(_3bdf3e120ffd, _4e0975a1482c.fn.prototype), _3bdf3e120ffd.constructor = _4e0975a1482c.fn;
            let _ee61174f6deb = _1d3a38243eaf.bare.createWebSocket(_4e0975a1482c.args[0], _4e0975a1482c.args[1], null, {
              "User-Agent": _1e85f3a9716c.navigator.userAgent,
              Origin: _1d3a38243eaf.url.origin
            }), _a609a4c7d80c = {
              extensions: "",
              protocol: "",
              url: _4e0975a1482c.args[0],
              binaryType: "blob",
              barews: _ee61174f6deb,
              onclose: null,
              onerror: null,
              onmessage: null,
              onopen: null
            };
            function o(_1d3a38243eaf) {
              _a609a4c7d80c["on" + _1d3a38243eaf.type]?.(new Proxy(_1d3a38243eaf, {
                get: (_1d3a38243eaf, _1e85f3a9716c) => "isTrusted" === _1e85f3a9716c || Reflect.get(_1d3a38243eaf, _1e85f3a9716c)
              })), _3bdf3e120ffd.dispatchEvent(_1d3a38243eaf);
            }
            _ee61174f6deb.addEventListener("open", () => {
              o(new Event("open"));
            }), _ee61174f6deb.addEventListener("close", _1d3a38243eaf => {
              o(new CloseEvent("close", _1d3a38243eaf));
            }), _ee61174f6deb.addEventListener("message", async _1d3a38243eaf => {
              let _1e85f3a9716c = _1d3a38243eaf.data;
              "string" == typeof _1e85f3a9716c || ("byteLength" in _1e85f3a9716c ? "blob" === _a609a4c7d80c.binaryType ? _1e85f3a9716c = new Blob([ _1e85f3a9716c ]) : Object.setPrototypeOf(_1e85f3a9716c, ArrayBuffer.prototype) : "arrayBuffer" in _1e85f3a9716c && "arraybuffer" === _a609a4c7d80c.binaryType && Object.setPrototypeOf(_1e85f3a9716c = await _1e85f3a9716c.arrayBuffer(), ArrayBuffer.prototype)), 
              o(new MessageEvent("message", {
                data: _1e85f3a9716c,
                origin: _1d3a38243eaf.origin,
                lastEventId: _1d3a38243eaf.lastEventId,
                source: _1d3a38243eaf.source,
                ports: _1d3a38243eaf.ports
              }));
            }), _ee61174f6deb.addEventListener("error", () => {
              o(new Event("error"));
            }), _315f273def32.set(_3bdf3e120ffd, _a609a4c7d80c), _4e0975a1482c.return(_3bdf3e120ffd);
          }
        }), _1d3a38243eaf.Trap("WebSocket.prototype.binaryType", {
          get: _1d3a38243eaf => _315f273def32.get(_1d3a38243eaf.this).binaryType,
          set(_1d3a38243eaf, _1e85f3a9716c) {
            let _4e0975a1482c = _315f273def32.get(_1d3a38243eaf.this);
            ("blob" === _1e85f3a9716c || "arraybuffer" === _1e85f3a9716c) && (_4e0975a1482c.binaryType = _1e85f3a9716c);
          }
        }), _1d3a38243eaf.Trap("WebSocket.prototype.bufferedAmount", {
          get: () => 0
        }), _1d3a38243eaf.Trap("WebSocket.prototype.extensions", {
          get: _1d3a38243eaf => _315f273def32.get(_1d3a38243eaf.this).extensions
        }), _1d3a38243eaf.Trap("WebSocket.prototype.onclose", {
          get: _1d3a38243eaf => _315f273def32.get(_1d3a38243eaf.this).onclose,
          set(_1d3a38243eaf, _1e85f3a9716c) {
            _315f273def32.get(_1d3a38243eaf.this).onclose = _1e85f3a9716c;
          }
        }), _1d3a38243eaf.Trap("WebSocket.prototype.onerror", {
          get: _1d3a38243eaf => _315f273def32.get(_1d3a38243eaf.this).onerror,
          set(_1d3a38243eaf, _1e85f3a9716c) {
            _315f273def32.get(_1d3a38243eaf.this).onerror = _1e85f3a9716c;
          }
        }), _1d3a38243eaf.Trap("WebSocket.prototype.onmessage", {
          get: _1d3a38243eaf => _315f273def32.get(_1d3a38243eaf.this).onmessage,
          set(_1d3a38243eaf, _1e85f3a9716c) {
            _315f273def32.get(_1d3a38243eaf.this).onmessage = _1e85f3a9716c;
          }
        }), _1d3a38243eaf.Trap("WebSocket.prototype.onopen", {
          get: _1d3a38243eaf => _315f273def32.get(_1d3a38243eaf.this).onopen,
          set(_1d3a38243eaf, _1e85f3a9716c) {
            _315f273def32.get(_1d3a38243eaf.this).onopen = _1e85f3a9716c;
          }
        }), _1d3a38243eaf.Trap("WebSocket.prototype.url", {
          get: _1d3a38243eaf => _315f273def32.get(_1d3a38243eaf.this).url
        }), _1d3a38243eaf.Trap("WebSocket.prototype.protocol", {
          get: _1d3a38243eaf => _315f273def32.get(_1d3a38243eaf.this).protocol
        }), _1d3a38243eaf.Trap("WebSocket.prototype.readyState", {
          get: _1d3a38243eaf => _315f273def32.get(_1d3a38243eaf.this).barews.readyState
        }), _1d3a38243eaf.Proxy("WebSocket.prototype.send", {
          apply(_1d3a38243eaf) {
            let _1e85f3a9716c = _315f273def32.get(_1d3a38243eaf.this);
            _1d3a38243eaf.return(_1e85f3a9716c.barews.send(_1d3a38243eaf.args[0]));
          }
        }), _1d3a38243eaf.Proxy("WebSocket.prototype.close", {
          apply(_1d3a38243eaf) {
            let _1e85f3a9716c = _315f273def32.get(_1d3a38243eaf.this);
            void 0 === _1d3a38243eaf.args[0] && (_1d3a38243eaf.args[0] = 1e3), void 0 === _1d3a38243eaf.args[1] && (_1d3a38243eaf.args[1] = ""), 
            _1d3a38243eaf.return(_1e85f3a9716c.barews.close(_1d3a38243eaf.args[0], _1d3a38243eaf.args[1]));
          }
        }), _1d3a38243eaf.Proxy("WebSocketStream", {
          construct(_315f273def32) {
            let _3bdf3e120ffd, _ee61174f6deb, _a609a4c7d80c, _f5fe395ebb04 = {};
            Object.setPrototypeOf(_f5fe395ebb04, _315f273def32.fn.prototype), _f5fe395ebb04.constructor = _315f273def32.fn;
            let _5a5cce1642e9 = _1d3a38243eaf.bare.createWebSocket(_315f273def32.args[0], _315f273def32.args[1], null, {
              "User-Agent": _1e85f3a9716c.navigator.userAgent,
              Origin: _1d3a38243eaf.url.origin
            });
            _315f273def32.args[1]?.signal.addEventListener("abort", () => {
              _5a5cce1642e9.close(1e3, "");
            });
            let _64f2b2ef4558 = {
              extensions: "",
              protocol: "",
              url: _315f273def32.args[0],
              barews: _5a5cce1642e9,
              opened: new Promise((_1d3a38243eaf, _1e85f3a9716c) => {
                _3bdf3e120ffd = _1d3a38243eaf, _a609a4c7d80c = _1e85f3a9716c;
              }),
              closed: new Promise(_1d3a38243eaf => {
                _ee61174f6deb = _1d3a38243eaf;
              }),
              readable: new ReadableStream({
                start(_1d3a38243eaf) {
                  _5a5cce1642e9.addEventListener("message", async _1e85f3a9716c => {
                    let _315f273def32 = _1e85f3a9716c.data;
                    "string" == typeof _315f273def32 || ("byteLength" in _315f273def32 ? Object.setPrototypeOf(_315f273def32, ArrayBuffer.prototype) : "arrayBuffer" in _315f273def32 && Object.setPrototypeOf(_315f273def32 = await _315f273def32.arrayBuffer(), ArrayBuffer.prototype)), 
                    _1d3a38243eaf.enqueue(_315f273def32);
                  });
                }
              }),
              writable: new WritableStream({
                write(_1d3a38243eaf) {
                  _5a5cce1642e9.send(_1d3a38243eaf);
                }
              })
            };
            _5a5cce1642e9.addEventListener("open", () => {
              _3bdf3e120ffd({
                readable: _64f2b2ef4558.readable,
                writable: _64f2b2ef4558.writable,
                extensions: _64f2b2ef4558.extensions,
                protocol: _64f2b2ef4558.protocol
              });
            }), _5a5cce1642e9.addEventListener("close", _1d3a38243eaf => {
              _ee61174f6deb({
                code: _1d3a38243eaf.code,
                reason: _1d3a38243eaf.reason
              });
            }), _5a5cce1642e9.addEventListener("error", _1d3a38243eaf => {
              _a609a4c7d80c(_1d3a38243eaf);
            }), _4e0975a1482c.set(_f5fe395ebb04, _64f2b2ef4558), _315f273def32.return(_f5fe395ebb04);
          }
        }), _1d3a38243eaf.Trap("WebSocketStream.prototype.closed", {
          get: _1d3a38243eaf => _4e0975a1482c.get(_1d3a38243eaf.this).closed
        }), _1d3a38243eaf.Trap("WebSocketStream.prototype.opened", {
          get: _1d3a38243eaf => _4e0975a1482c.get(_1d3a38243eaf.this).opened
        }), _1d3a38243eaf.Trap("WebSocketStream.prototype.url", {
          get: _1d3a38243eaf => _4e0975a1482c.get(_1d3a38243eaf.this).url
        }), _1d3a38243eaf.Proxy("WebSocketStream.prototype.close", {
          apply(_1d3a38243eaf) {
            let _1e85f3a9716c = _4e0975a1482c.get(_1d3a38243eaf.this);
            return _1d3a38243eaf.args[0] ? (void 0 === _1d3a38243eaf.args[0].closeCode && (_1d3a38243eaf.args[0].closeCode = 1e3), 
            void 0 === _1d3a38243eaf.args[0].reason && (_1d3a38243eaf.args[0].reason = ""), 
            _1d3a38243eaf.return(_1e85f3a9716c.barews.close(_1d3a38243eaf.args[0].closeCode, _1d3a38243eaf.args[0].reason))) : _1d3a38243eaf.return(_1e85f3a9716c.barews.close(1e3, ""));
          }
        });
      }
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        default: () => n
      });
    },
    248: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        default: () => a
      });
      var _4e0975a1482c = _315f273def32(37), _3bdf3e120ffd = _315f273def32(1472);
      function a(_1d3a38243eaf, _1e85f3a9716c) {
        let _315f273def32;
        _1e85f3a9716c.Worker && (0, _4e0975a1482c.U5)("syncxhr", _1d3a38243eaf.url) && (_315f273def32 = _1d3a38243eaf.natives.construct("Worker", _4e0975a1482c.$W.files.sync));
        let _ee61174f6deb = Symbol("xhr original args"), _a609a4c7d80c = Symbol("xhr headers");
        _1d3a38243eaf.Proxy("XMLHttpRequest.prototype.open", {
          apply(_1e85f3a9716c) {
            _1e85f3a9716c.args[1] && (_1e85f3a9716c.args[1] = (0, _3bdf3e120ffd.Oy)(_1e85f3a9716c.args[1], _1d3a38243eaf.meta)), 
            void 0 === _1e85f3a9716c.args[2] && (_1e85f3a9716c.args[2] = !0), _1e85f3a9716c.this[_ee61174f6deb] = _1e85f3a9716c.args;
          }
        }), _1d3a38243eaf.Proxy("XMLHttpRequest.prototype.setRequestHeader", {
          apply(_1d3a38243eaf) {
            (_1d3a38243eaf.this[_a609a4c7d80c] || (_1d3a38243eaf.this[_a609a4c7d80c] = {}))[_1d3a38243eaf.args[0]] = _1d3a38243eaf.args[1];
          }
        }), _1d3a38243eaf.Proxy("XMLHttpRequest.prototype.send", {
          apply(_1e85f3a9716c) {
            let _3bdf3e120ffd = _1e85f3a9716c.this[_ee61174f6deb];
            if (!_3bdf3e120ffd || _3bdf3e120ffd[2]) return;
            if (!(0, _4e0975a1482c.U5)("syncxhr", _1d3a38243eaf.url)) return console.warn("ignoring request - sync xhr disabled in flags"), 
            _1e85f3a9716c.return(void 0);
            let _f5fe395ebb04 = new SharedArrayBuffer(1024, {
              maxByteLength: 2147483647
            }), _5a5cce1642e9 = new DataView(_f5fe395ebb04);
            _1d3a38243eaf.natives.call("Worker.prototype.postMessage", _315f273def32, {
              sab: _f5fe395ebb04,
              args: _3bdf3e120ffd,
              headers: _1e85f3a9716c.this[_a609a4c7d80c],
              body: _1e85f3a9716c.args[0]
            });
            let _64f2b2ef4558 = performance.now();
            for (;0 === _5a5cce1642e9.getUint8(0); ) if (performance.now() - _64f2b2ef4558 > 1e3) throw Error("xhr timeout");
            let _611b46e2fd2a = _5a5cce1642e9.getUint16(1), _e853f5e31d91 = _5a5cce1642e9.getUint32(3), _3c266443ddce = new Uint8Array(_e853f5e31d91);
            _3c266443ddce.set(new Uint8Array(_f5fe395ebb04.slice(7, 7 + _e853f5e31d91)));
            let _a9bd71b7ce50 = (new TextDecoder).decode(_3c266443ddce), _542e5e0773c9 = _5a5cce1642e9.getUint32(7 + _e853f5e31d91), _81042f72aa99 = new Uint8Array(_542e5e0773c9);
            _81042f72aa99.set(new Uint8Array(_f5fe395ebb04.slice(11 + _e853f5e31d91, 11 + _e853f5e31d91 + _542e5e0773c9)));
            let _6a3515f0c6e8 = (new TextDecoder).decode(_81042f72aa99);
            _1d3a38243eaf.RawTrap(_1e85f3a9716c.this, "status", {
              get: () => _611b46e2fd2a
            }), _1d3a38243eaf.RawTrap(_1e85f3a9716c.this, "responseText", {
              get: () => _6a3515f0c6e8
            }), _1d3a38243eaf.RawTrap(_1e85f3a9716c.this, "response", {
              get: () => "arraybuffer" === _1e85f3a9716c.this.responseType ? _81042f72aa99.buffer : _6a3515f0c6e8
            }), _1d3a38243eaf.RawTrap(_1e85f3a9716c.this, "responseXML", {
              get: () => (new DOMParser).parseFromString(_6a3515f0c6e8, "text/xml")
            }), _1d3a38243eaf.RawTrap(_1e85f3a9716c.this, "getAllResponseHeaders", {
              get: () => () => _a9bd71b7ce50
            }), _1d3a38243eaf.RawTrap(_1e85f3a9716c.this, "getResponseHeader", {
              get: () => _1d3a38243eaf => {
                let _1e85f3a9716c = RegExp(`^${_1d3a38243eaf}: (.*)$`, "m").exec(_a9bd71b7ce50);
                return _1e85f3a9716c ? _1e85f3a9716c[1] : null;
              }
            }), _1e85f3a9716c.return(void 0);
          }
        }), _1d3a38243eaf.Trap("XMLHttpRequest.prototype.responseURL", {
          get: _1d3a38243eaf => (0, _3bdf3e120ffd.v2)(_1d3a38243eaf.get())
        });
      }
    },
    7418: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        default: () => i
      });
      var _4e0975a1482c = _315f273def32(1478);
      function i(_1d3a38243eaf, _1e85f3a9716c) {
        _1d3a38243eaf.Proxy([ "setTimeout", "setInterval" ], {
          apply(_1e85f3a9716c) {
            _1e85f3a9716c.args.length > 0 && "string" == typeof _1e85f3a9716c.args[0] && (_1e85f3a9716c.args[0] = (0, 
            _4e0975a1482c.o)(_1e85f3a9716c.args[0], "(setTimeout string eval)", _1d3a38243eaf.meta));
          }
        });
      }
    },
    7791: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        default: () => o,
        enabled: () => s
      });
      var _4e0975a1482c = _315f273def32(37), _3bdf3e120ffd = _315f273def32(8665).A;
      let _ee61174f6deb = "/*scramtag ", s = _1d3a38243eaf => (0, _4e0975a1482c.U5)("sourcemaps", _1d3a38243eaf.url);
      function o(_1d3a38243eaf, _1e85f3a9716c) {
        Object.defineProperty(_1e85f3a9716c, _4e0975a1482c.$W.globals.pushsourcemapfn, {
          value: (_1e85f3a9716c, _315f273def32) => {
            let _4e0975a1482c = performance.now();
            !function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
              let _4e0975a1482c = Uint8Array.from(_1e85f3a9716c), _3bdf3e120ffd = new DataView(_4e0975a1482c.buffer), _ee61174f6deb = new TextDecoder("utf-8"), _a609a4c7d80c = [], _f5fe395ebb04 = _3bdf3e120ffd.getUint32(0, !0), _5a5cce1642e9 = 4;
              for (let _1d3a38243eaf = 0; _1d3a38243eaf < _f5fe395ebb04; _1d3a38243eaf++) {
                let _1d3a38243eaf = _3bdf3e120ffd.getUint32(_5a5cce1642e9, !0);
                _5a5cce1642e9 += 4;
                let _1e85f3a9716c = _3bdf3e120ffd.getUint32(_5a5cce1642e9, !0);
                _5a5cce1642e9 += 4;
                let _315f273def32 = _3bdf3e120ffd.getUint8(_5a5cce1642e9);
                if (_5a5cce1642e9 += 1, 0 == _315f273def32) _a609a4c7d80c.push({
                  type: _315f273def32,
                  start: _1d3a38243eaf,
                  size: _1e85f3a9716c
                }); else if (1 == _315f273def32) {
                  let _f5fe395ebb04 = _1d3a38243eaf + _1e85f3a9716c, _64f2b2ef4558 = _3bdf3e120ffd.getUint32(_5a5cce1642e9, !0);
                  _5a5cce1642e9 += 4;
                  let _611b46e2fd2a = _ee61174f6deb.decode(_4e0975a1482c.subarray(_5a5cce1642e9, _5a5cce1642e9 + _64f2b2ef4558));
                  _a609a4c7d80c.push({
                    type: _315f273def32,
                    start: _1d3a38243eaf,
                    end: _f5fe395ebb04,
                    str: _611b46e2fd2a
                  });
                }
              }
              _1d3a38243eaf.box.sourcemaps[_315f273def32] = _a609a4c7d80c;
            }(_1d3a38243eaf, _1e85f3a9716c, _315f273def32), _3bdf3e120ffd.time(_1d3a38243eaf.meta, _4e0975a1482c, `scramtag parse for ${_315f273def32}`);
          },
          enumerable: !1,
          writable: !1,
          configurable: !1
        }), _1d3a38243eaf.Proxy("Function.prototype.toString", {
          apply(_1e85f3a9716c) {
            performance.now(), function(_1d3a38243eaf, _1e85f3a9716c) {
              let _315f273def32 = _1e85f3a9716c.fn.call(_1e85f3a9716c.this), _4e0975a1482c = function(_1d3a38243eaf) {
                let _1e85f3a9716c = _1d3a38243eaf.indexOf(_ee61174f6deb);
                if (-1 === _1e85f3a9716c) return null;
                let _315f273def32 = _1d3a38243eaf.indexOf("*/", _1e85f3a9716c);
                if (-1 === _315f273def32) throw console.log(_1d3a38243eaf, _1e85f3a9716c, _315f273def32), 
                Error("unreachable");
                let _4e0975a1482c = _1d3a38243eaf.substring(_1e85f3a9716c + 2, _315f273def32).split(" ");
                if (3 !== _4e0975a1482c.length || "scramtag" !== _4e0975a1482c[0] || !Number.isSafeInteger(+_4e0975a1482c[1])) throw console.log(_1d3a38243eaf, _1e85f3a9716c, _315f273def32, _4e0975a1482c), 
                Error("invalid tag");
                return [ _4e0975a1482c[2], _1e85f3a9716c, +_4e0975a1482c[1] ];
              }(_315f273def32);
              if (!_4e0975a1482c) return _1e85f3a9716c.return(_315f273def32);
              let [_3bdf3e120ffd, _a609a4c7d80c, _f5fe395ebb04] = _4e0975a1482c, _5a5cce1642e9 = _f5fe395ebb04 - _a609a4c7d80c, _64f2b2ef4558 = _5a5cce1642e9 + _315f273def32.length, _611b46e2fd2a = _1d3a38243eaf.box.sourcemaps[_3bdf3e120ffd];
              if (!_611b46e2fd2a) return console.warn("failed to get rewrites for tag", _3bdf3e120ffd), 
              _1e85f3a9716c.return(_315f273def32);
              let _e853f5e31d91 = 0;
              for (;_e853f5e31d91 < _611b46e2fd2a.length; ) if (_611b46e2fd2a[_e853f5e31d91].start < _5a5cce1642e9) _e853f5e31d91++; else break;
              let _3c266443ddce = _e853f5e31d91;
              for (;_3c266443ddce < _611b46e2fd2a.length; ) if (function(_1d3a38243eaf) {
                if (0 === _1d3a38243eaf.type) return _1d3a38243eaf.start + _1d3a38243eaf.size;
                if (1 === _1d3a38243eaf.type) return _1d3a38243eaf.end;
                throw "unreachable";
              }(_611b46e2fd2a[_3c266443ddce]) < _64f2b2ef4558) _3c266443ddce++; else break;
              let _a9bd71b7ce50 = _611b46e2fd2a.slice(_e853f5e31d91, _3c266443ddce), _542e5e0773c9 = "", _81042f72aa99 = 0;
              for (let _1d3a38243eaf of _a9bd71b7ce50) if (_542e5e0773c9 += _315f273def32.slice(_81042f72aa99, _1d3a38243eaf.start - _5a5cce1642e9), 
              0 === _1d3a38243eaf.type) _81042f72aa99 = _1d3a38243eaf.start + _1d3a38243eaf.size - _5a5cce1642e9; else if (1 === _1d3a38243eaf.type) _542e5e0773c9 += _1d3a38243eaf.str, 
              _81042f72aa99 = _1d3a38243eaf.end - _5a5cce1642e9; else throw "unreachable";
              _542e5e0773c9 += _315f273def32.slice(_81042f72aa99), _542e5e0773c9 = _542e5e0773c9.replace(`${_ee61174f6deb}${_f5fe395ebb04} ${_3bdf3e120ffd}*/`, ""), 
              _1e85f3a9716c.return(_542e5e0773c9);
            }(_1d3a38243eaf, _1e85f3a9716c);
          }
        });
      }
    },
    9399: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        default: () => a
      });
      var _4e0975a1482c = _315f273def32(4110), _3bdf3e120ffd = _315f273def32(1472);
      function a(_1d3a38243eaf, _1e85f3a9716c) {
        _1d3a38243eaf.Proxy("Worker", {
          construct(_1e85f3a9716c) {
            _1e85f3a9716c.args[0] = (0, _3bdf3e120ffd.Oy)(_1e85f3a9716c.args[0], _1d3a38243eaf.meta) + "?dest=worker", 
            _1e85f3a9716c.args[1] && "module" === _1e85f3a9716c.args[1].type && (_1e85f3a9716c.args[0] += "&type=module");
            let _315f273def32 = _1e85f3a9716c.call(), _ee61174f6deb = new _4e0975a1482c.DD;
            (async () => {
              let _1e85f3a9716c = await _ee61174f6deb.getInnerPort();
              _1d3a38243eaf.natives.call("Worker.prototype.postMessage", _315f273def32, {
                $studyjet$type: "baremuxinit",
                port: _1e85f3a9716c
              }, [ _1e85f3a9716c ]);
            })();
          }
        }), _1d3a38243eaf.Proxy("SharedWorker", {
          construct(_1e85f3a9716c) {
            _1e85f3a9716c.args[0] = (0, _3bdf3e120ffd.Oy)(_1e85f3a9716c.args[0], _1d3a38243eaf.meta) + "?dest=sharedworker", 
            _1e85f3a9716c.args[1] && "string" == typeof _1e85f3a9716c.args[1] && (_1e85f3a9716c.args[1] = `${_1d3a38243eaf.url.origin}@${_1e85f3a9716c.args[1]}`), 
            _1e85f3a9716c.args[1] && "object" == typeof _1e85f3a9716c.args[1] && ("module" === _1e85f3a9716c.args[1].type && (_1e85f3a9716c.args[0] += "&type=module"), 
            _1e85f3a9716c.args[1].name && (_1e85f3a9716c.args[1].name = `${_1d3a38243eaf.url.origin}@${_1e85f3a9716c.args[1].name}`));
            let _315f273def32 = _1e85f3a9716c.call(), _ee61174f6deb = new _4e0975a1482c.DD;
            (async () => {
              let _1e85f3a9716c = await _ee61174f6deb.getInnerPort();
              _1d3a38243eaf.natives.call("MessagePort.prototype.postMessage", _315f273def32.port, {
                $studyjet$type: "baremuxinit",
                port: _1e85f3a9716c
              }, [ _1e85f3a9716c ]);
            })();
          }
        }), _1d3a38243eaf.Proxy("Worklet.prototype.addModule", {
          apply(_1e85f3a9716c) {
            _1e85f3a9716c.args[0] && (_1e85f3a9716c.args[0] = (0, _3bdf3e120ffd.Oy)(_1e85f3a9716c.args[0], _1d3a38243eaf.meta) + "?dest=worklet");
          }
        });
      }
    },
    581: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        createWrapFn: () => o,
        default: () => c,
        order: () => _f5fe395ebb04
      });
      var _4e0975a1482c = _315f273def32(1323), _3bdf3e120ffd = _315f273def32(2794), _ee61174f6deb = _315f273def32(37), _a609a4c7d80c = _315f273def32(591);
      function o(_1d3a38243eaf, _1e85f3a9716c) {
        return function(_315f273def32, _ee61174f6deb) {
          if (_315f273def32 === _1e85f3a9716c.location) return _1d3a38243eaf.locationProxy;
          if (_315f273def32 === _1e85f3a9716c.eval) return _a609a4c7d80c.indirectEval.bind(_1d3a38243eaf, _ee61174f6deb);
          if (_4e0975a1482c.iswindow) {
            if (_315f273def32 === _1e85f3a9716c.parent) if (_3bdf3e120ffd.pX in _1e85f3a9716c.parent) return _1e85f3a9716c.parent; else return _1e85f3a9716c; else if (_315f273def32 === _1e85f3a9716c.top) {
              let _1d3a38243eaf = _1e85f3a9716c;
              for (;;) {
                let _1e85f3a9716c = _1d3a38243eaf.parent.self;
                if (_1e85f3a9716c === _1d3a38243eaf || !(_3bdf3e120ffd.pX in _1e85f3a9716c)) break;
                _1d3a38243eaf = _1e85f3a9716c;
              }
              return _1d3a38243eaf;
            }
          }
          return _315f273def32;
        };
      }
      let _f5fe395ebb04 = 4;
      function c(_1d3a38243eaf, _1e85f3a9716c) {
        Object.defineProperty(_1e85f3a9716c, _ee61174f6deb.$W.globals.wrapfn, {
          value: _1d3a38243eaf.wrapfn,
          writable: !1,
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_1e85f3a9716c, _ee61174f6deb.$W.globals.wrappropertyfn, {
          value: function(_1d3a38243eaf) {
            return "location" === _1d3a38243eaf || "parent" === _1d3a38243eaf || "top" === _1d3a38243eaf || "eval" === _1d3a38243eaf ? _ee61174f6deb.$W.globals.wrappropertybase + _1d3a38243eaf : _1d3a38243eaf;
          },
          writable: !1,
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_1e85f3a9716c, _ee61174f6deb.$W.globals.cleanrestfn, {
          value: function(_1d3a38243eaf) {},
          writable: !1,
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_1e85f3a9716c.Object.prototype, _ee61174f6deb.$W.globals.wrappropertybase + "location", {
          get: function() {
            return this === _1e85f3a9716c || this === _1e85f3a9716c.document ? _1d3a38243eaf.locationProxy : this.location;
          },
          set(_315f273def32) {
            if (this === _1e85f3a9716c || this === _1e85f3a9716c.document) {
              _1d3a38243eaf.url = _315f273def32;
              return;
            }
            this.location = _315f273def32;
          },
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_1e85f3a9716c.Object.prototype, _ee61174f6deb.$W.globals.wrappropertybase + "parent", {
          get: function() {
            return _1d3a38243eaf.wrapfn(this.parent, !1);
          },
          set(_1d3a38243eaf) {
            this.parent = _1d3a38243eaf;
          },
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_1e85f3a9716c.Object.prototype, _ee61174f6deb.$W.globals.wrappropertybase + "top", {
          get: function() {
            return _1d3a38243eaf.wrapfn(this.top, !1);
          },
          set(_1d3a38243eaf) {
            this.top = _1d3a38243eaf;
          },
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_1e85f3a9716c.Object.prototype, _ee61174f6deb.$W.globals.wrappropertybase + "eval", {
          get: function() {
            return _1d3a38243eaf.wrapfn(this.eval, !0);
          },
          set(_1d3a38243eaf) {
            this.eval = _1d3a38243eaf;
          },
          configurable: !1,
          enumerable: !1
        }), _1e85f3a9716c.$scramitize = function(_1d3a38243eaf) {
          return location, _4e0975a1482c.iswindow && _1e85f3a9716c.top, "string" == typeof _1d3a38243eaf && _1d3a38243eaf.includes("studyjet"), 
          "string" == typeof _1d3a38243eaf && _1d3a38243eaf.includes(location.origin), _1d3a38243eaf;
        }, Object.defineProperty(_1e85f3a9716c, _ee61174f6deb.$W.globals.trysetfn, {
          value: function(_315f273def32, _4e0975a1482c, _3bdf3e120ffd) {
            return _315f273def32 instanceof _1e85f3a9716c.Location && (_1d3a38243eaf.locationProxy.href = _3bdf3e120ffd, 
            !0);
          },
          writable: !1,
          configurable: !1
        });
      }
    },
    1229: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        SingletonBox: () => n
      });
      class n {
        ownerclient;
        clients=[];
        globals=new Map;
        documents=new Map;
        locations=new Map;
        sourcemaps={};
        constructor(_1d3a38243eaf) {
          this.ownerclient = _1d3a38243eaf;
        }
        registerClient(_1d3a38243eaf, _1e85f3a9716c) {
          this.clients.push(_1d3a38243eaf), this.globals.set(_1e85f3a9716c, _1d3a38243eaf), 
          this.documents.set(_1e85f3a9716c.document, _1d3a38243eaf), this.locations.set(_1e85f3a9716c.location, _1d3a38243eaf);
        }
      }
    },
    8409: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        StudyJetServiceWorkerRuntime: () => a
      });
      var _4e0975a1482c = _315f273def32(1472), _3bdf3e120ffd = _315f273def32(8665).A;
      class a {
        client;
        recvport;
        constructor(_1d3a38243eaf) {
          this.client = _1d3a38243eaf, self.onconnect = _1e85f3a9716c => {
            let _315f273def32 = _1e85f3a9716c.ports[0];
            _3bdf3e120ffd.log("sw", "connected"), _315f273def32.addEventListener("message", _1e85f3a9716c => {
              console.log("sw", _1e85f3a9716c.data), "studyjet$type" in _1e85f3a9716c.data && ("init" === _1e85f3a9716c.data.studyjet$type ? (this.recvport = _1e85f3a9716c.data.studyjet$port, 
              this.recvport.postMessage({
                studyjet$type: "init"
              })) : s.call(this, _1d3a38243eaf, _1e85f3a9716c.data));
            }), _315f273def32.start();
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
              dispatchEvent: _1d3a38243eaf => !1
            },
            showNotification: async () => {},
            unregister: async () => !0,
            update: async () => {},
            installing: null,
            waiting: null
          }, this.client.global.ServiceWorkerGlobalScope = this.client.global;
        }
      }
      function s(_1d3a38243eaf, _1e85f3a9716c) {
        let _315f273def32 = this.recvport, _ee61174f6deb = _1e85f3a9716c.studyjet$type, _a609a4c7d80c = _1e85f3a9716c.studyjet$token, _f5fe395ebb04 = _1d3a38243eaf.eventcallbacks.get(self);
        if ("fetch" === _ee61174f6deb) {
          _3bdf3e120ffd.log("ee", _1e85f3a9716c);
          let _ee61174f6deb = _f5fe395ebb04.filter(_1d3a38243eaf => "fetch" === _1d3a38243eaf.event);
          if (!_ee61174f6deb) return;
          for (let _f5fe395ebb04 of _ee61174f6deb) {
            let _ee61174f6deb = _1e85f3a9716c.studyjet$request, _5a5cce1642e9 = new _1d3a38243eaf.natives.Request((0, 
            _4e0975a1482c.v2)(_ee61174f6deb.url), {
              body: _ee61174f6deb.body,
              headers: new Headers(_ee61174f6deb.headers),
              method: _ee61174f6deb.method,
              mode: "same-origin"
            });
            Object.defineProperty(_5a5cce1642e9, "destination", {
              value: _ee61174f6deb.destinitation
            });
            let _64f2b2ef4558 = new Event("fetch");
            _64f2b2ef4558.request = _5a5cce1642e9;
            let _611b46e2fd2a = !1;
            _64f2b2ef4558.respondWith = _1d3a38243eaf => {
              _611b46e2fd2a = !0, (async () => {
                let _1e85f3a9716c = {
                  studyjet$type: "fetch",
                  studyjet$token: _a609a4c7d80c,
                  studyjet$response: {
                    body: (_1d3a38243eaf = await _1d3a38243eaf).body,
                    headers: Array.from(_1d3a38243eaf.headers.entries()),
                    status: _1d3a38243eaf.status,
                    statusText: _1d3a38243eaf.statusText
                  }
                };
                _3bdf3e120ffd.log("sw", "responding", _1e85f3a9716c), _315f273def32.postMessage(_1e85f3a9716c, [ _1d3a38243eaf.body ]);
              })();
            }, _3bdf3e120ffd.log("to fn", _64f2b2ef4558), _f5fe395ebb04.proxiedCallback(new Proxy(_64f2b2ef4558, {
              get: (_1d3a38243eaf, _1e85f3a9716c, _315f273def32) => "isTrusted" === _1e85f3a9716c || Reflect.get(_1d3a38243eaf, _1e85f3a9716c)
            })), _611b46e2fd2a || (console.log("sw", "no response"), _315f273def32.postMessage({
              studyjet$type: "fetch",
              studyjet$token: _a609a4c7d80c,
              studyjet$response: !1
            }));
          }
        }
      }
    },
    9353: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        default: () => i
      });
      var _4e0975a1482c = _315f273def32(1472);
      function i(_1d3a38243eaf) {
        _1d3a38243eaf.Proxy("importScripts", {
          apply(_1e85f3a9716c) {
            for (let _315f273def32 in _1e85f3a9716c.args) _1e85f3a9716c.args[_315f273def32] = (0, 
            _4e0975a1482c.Oy)(_1e85f3a9716c.args[_315f273def32], _1d3a38243eaf.meta);
          }
        });
      }
    },
    3402: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.d(_1e85f3a9716c, {
        q: () => l
      });
      var _4e0975a1482c = _315f273def32(37), _3bdf3e120ffd = _315f273def32(4869), _ee61174f6deb = _315f273def32(6570), _a609a4c7d80c = _315f273def32(1862), _f5fe395ebb04 = _315f273def32(8665).A;
      class l extends EventTarget {
        db;
        constructor(_1d3a38243eaf) {
          super();
          const t = (_1d3a38243eaf, _1e85f3a9716c) => {
            for (let _315f273def32 in _1e85f3a9716c) _1e85f3a9716c[_315f273def32] instanceof Object && _315f273def32 in _1d3a38243eaf && Object.assign(_1e85f3a9716c[_315f273def32], t(_1d3a38243eaf[_315f273def32], _1e85f3a9716c[_315f273def32]));
            return Object.assign(_1d3a38243eaf || {}, _1e85f3a9716c);
          }, _1e85f3a9716c = t({
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
              encode: _1d3a38243eaf => _1d3a38243eaf ? encodeURIComponent(_1d3a38243eaf) : _1d3a38243eaf,
              decode: _1d3a38243eaf => _1d3a38243eaf ? decodeURIComponent(_1d3a38243eaf) : _1d3a38243eaf
            }
          }, _1d3a38243eaf);
          _1e85f3a9716c.codec.encode = _1e85f3a9716c.codec.encode.toString(), _1e85f3a9716c.codec.decode = _1e85f3a9716c.codec.decode.toString(), 
          (0, _4e0975a1482c.Nk)(_1e85f3a9716c);
        }
        async init() {
          (0, _4e0975a1482c.Ec)(), await this.openIDB(), navigator.serviceWorker.controller?.postMessage({
            studyjet$type: "loadConfig",
            config: _4e0975a1482c.$W
          }), _f5fe395ebb04.log("config loaded"), navigator.serviceWorker.addEventListener("message", _1d3a38243eaf => {
            if (!("studyjet$type" in _1d3a38243eaf.data)) return;
            let _1e85f3a9716c = _1d3a38243eaf.data;
            "download" === _1e85f3a9716c.studyjet$type && this.dispatchEvent(new _a609a4c7d80c.StudyJetGlobalDownloadEvent(_1e85f3a9716c.download));
          });
        }
        createFrame(_1d3a38243eaf) {
          return _1d3a38243eaf || (_1d3a38243eaf = document.createElement("iframe")), new _3bdf3e120ffd.X(this, _1d3a38243eaf);
        }
        encodeUrl(_1d3a38243eaf) {
          if ("string" == typeof _1d3a38243eaf && (_1d3a38243eaf = new URL(_1d3a38243eaf)), 
          "http:" != _1d3a38243eaf.protocol && "https:" != _1d3a38243eaf.protocol) return _1d3a38243eaf.href;
          let _1e85f3a9716c = (0, _4e0975a1482c.hD)(_1d3a38243eaf.hash.slice(1));
          return _1d3a38243eaf.hash = "", _4e0975a1482c.$W.prefix + (0, _4e0975a1482c.hD)(_1d3a38243eaf.href) + (_1e85f3a9716c ? "#" + _1e85f3a9716c : "");
        }
        decodeUrl(_1d3a38243eaf) {
          _1d3a38243eaf instanceof URL && (_1d3a38243eaf = _1d3a38243eaf.toString());
          let _1e85f3a9716c = location.origin + _4e0975a1482c.$W.prefix;
          return (0, _4e0975a1482c.P_)(_1d3a38243eaf.slice(_1e85f3a9716c.length));
        }
        async openIDB() {
          let _1d3a38243eaf = await (0, _ee61174f6deb.P2)("@d7a6431b92e", 1, {
            upgrade(_1d3a38243eaf) {
              _1d3a38243eaf.objectStoreNames.contains("config") || _1d3a38243eaf.createObjectStore("config"), 
              _1d3a38243eaf.objectStoreNames.contains("cookies") || _1d3a38243eaf.createObjectStore("cookies"), 
              _1d3a38243eaf.objectStoreNames.contains("redirectTrackers") || _1d3a38243eaf.createObjectStore("redirectTrackers"), 
              _1d3a38243eaf.objectStoreNames.contains("referrerPolicies") || _1d3a38243eaf.createObjectStore("referrerPolicies"), 
              _1d3a38243eaf.objectStoreNames.contains("publicSuffixList") || _1d3a38243eaf.createObjectStore("publicSuffixList");
            }
          });
          return this.db = _1d3a38243eaf, await this.#_1d3a38243eaf(), _1d3a38243eaf;
        }
        async #_1d3a38243eaf() {
          this.db ? await this.db.put("config", _4e0975a1482c.$W, "config") : console.error("Store not ready!");
        }
        async modifyConfig(_1d3a38243eaf) {
          (0, _4e0975a1482c.Nk)(Object.assign({}, _4e0975a1482c.$W, _1d3a38243eaf)), (0, _4e0975a1482c.Ec)(), 
          await this.#_1d3a38243eaf(), navigator.serviceWorker.controller?.postMessage({
            studyjet$type: "loadConfig",
            config: _4e0975a1482c.$W
          });
        }
        addEventListener(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
          super.addEventListener(_1d3a38243eaf, _1e85f3a9716c, _315f273def32);
        }
      }
    },
    4869: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.d(_1e85f3a9716c, {
        X: () => a
      });
      var _4e0975a1482c = _315f273def32(2794), _3bdf3e120ffd = _315f273def32(8665).A;
      class a extends EventTarget {
        controller;
        frame;
        constructor(_1d3a38243eaf, _1e85f3a9716c) {
          super(), this.controller = _1d3a38243eaf, this.frame = _1e85f3a9716c, _1e85f3a9716c.name = `${Array(8).fill(0).map(() => Math.floor(36 * Math.random()).toString(36)).join("")}`, 
          _1e85f3a9716c[_4e0975a1482c.zr] = this;
        }
        get client() {
          return this.frame.contentWindow.window[_4e0975a1482c.pX];
        }
        get url() {
          return this.client.url;
        }
        go(_1d3a38243eaf) {
          _1d3a38243eaf instanceof URL && (_1d3a38243eaf = _1d3a38243eaf.toString()), _3bdf3e120ffd.log("navigated to", _1d3a38243eaf), 
          this.frame.src = this.controller.encodeUrl(_1d3a38243eaf);
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
        addEventListener(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
          super.addEventListener(_1d3a38243eaf, _1e85f3a9716c, _315f273def32);
        }
      }
    },
    9052: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        StudyJetController: () => _3bdf3e120ffd.q,
        StudyJetFrame: () => _4e0975a1482c.X
      });
      var _4e0975a1482c = _315f273def32(4869), _3bdf3e120ffd = _315f273def32(3402);
      console.warn("you are using the last version of studyjet v1, if possible, please upgrade to v2 for better performance and more features");
    },
    8665: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.d(_1e85f3a9716c, {
        A: () => _3bdf3e120ffd
      });
      let _4e0975a1482c = {
        log: console.log,
        warn: console.warn,
        error: console.error,
        debug: console.debug,
        info: console.info
      }, _3bdf3e120ffd = {
        fmt: function(_1d3a38243eaf, _1e85f3a9716c, ..._315f273def32) {
          let _4e0975a1482c = Error.prepareStackTrace;
          Error.prepareStackTrace = (_1d3a38243eaf, _1e85f3a9716c) => {
            _1e85f3a9716c.shift(), _1e85f3a9716c.shift(), _1e85f3a9716c.shift();
            let _315f273def32 = "";
            for (let _1d3a38243eaf = 1; _1d3a38243eaf < Math.min(2, _1e85f3a9716c.length); _1d3a38243eaf++) _1e85f3a9716c[_1d3a38243eaf].getFunctionName() && (_315f273def32 += `${_1e85f3a9716c[_1d3a38243eaf].getFunctionName()} -> ` + _315f273def32);
            return _315f273def32 + (_1e85f3a9716c[0].getFunctionName() || "Anonymous");
          };
          let _3bdf3e120ffd = function() {
            try {
              throw Error();
            } catch (_1d3a38243eaf) {
              return _1d3a38243eaf.stack;
            }
          }();
          Error.prepareStackTrace = _4e0975a1482c, this.print(_1d3a38243eaf, _3bdf3e120ffd, _1e85f3a9716c, ..._315f273def32);
        },
        print(_1d3a38243eaf, _1e85f3a9716c, _315f273def32, ..._3bdf3e120ffd) {
          (_4e0975a1482c[_1d3a38243eaf] || _4e0975a1482c.log)(`%c${_1e85f3a9716c}%c ${_315f273def32}`, `\n  \tbackground-color: ${{
            log: "#000",
            warn: "#f80",
            error: "#f00",
            debug: "transparent"
          }[_1d3a38243eaf]};\n  \tcolor: ${{
            log: "#fff",
            warn: "#fff",
            error: "#fff",
            debug: "gray"
          }[_1d3a38243eaf]};\n  \tpadding: ${{
            log: 2,
            warn: 4,
            error: 4,
            debug: 0
          }[_1d3a38243eaf]}px;\n  \tfont-weight: bold;\n  \tfont-family: monospace;\n  \tfont-size: 0.9em;\n  `, `${"debug" === _1d3a38243eaf ? "color: gray" : ""}`, ..._3bdf3e120ffd);
        },
        log: function(_1d3a38243eaf, ..._1e85f3a9716c) {
          this.fmt("log", _1d3a38243eaf, ..._1e85f3a9716c);
        },
        warn: function(_1d3a38243eaf, ..._1e85f3a9716c) {
          this.fmt("warn", _1d3a38243eaf, ..._1e85f3a9716c);
        },
        error: function(_1d3a38243eaf, ..._1e85f3a9716c) {
          this.fmt("error", _1d3a38243eaf, ..._1e85f3a9716c);
        },
        debug: function(_1d3a38243eaf, ..._1e85f3a9716c) {
          this.fmt("debug", _1d3a38243eaf, ..._1e85f3a9716c);
        },
        time(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {}
      };
    },
    3831: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.d(_1e85f3a9716c, {
        k: () => a
      });
      var _4e0975a1482c = _315f273def32(4322), _3bdf3e120ffd = _315f273def32.n(_4e0975a1482c);
      class a {
        cookies={};
        setCookies(_1d3a38243eaf, _1e85f3a9716c) {
          for (let _315f273def32 of _1d3a38243eaf) {
            let _1d3a38243eaf = _3bdf3e120ffd()(_315f273def32), _4e0975a1482c = {
              domain: _1d3a38243eaf.domain,
              sameSite: _1d3a38243eaf.sameSite,
              ..._1d3a38243eaf[0]
            };
            _4e0975a1482c.domain || (_4e0975a1482c.domain = "." + _1e85f3a9716c.hostname), _4e0975a1482c.domain.startsWith(".") || (_4e0975a1482c.domain = "." + _4e0975a1482c.domain), 
            _4e0975a1482c.path || (_4e0975a1482c.path = "/"), _4e0975a1482c.sameSite || (_4e0975a1482c.sameSite = "lax"), 
            _4e0975a1482c.expires && (_4e0975a1482c.expires = _4e0975a1482c.expires.toString());
            let _ee61174f6deb = `${_4e0975a1482c.domain}@${_4e0975a1482c.path}@${_4e0975a1482c.name}`;
            this.cookies[_ee61174f6deb] = _4e0975a1482c;
          }
        }
        getCookies(_1d3a38243eaf, _1e85f3a9716c) {
          let _315f273def32 = new Date, _4e0975a1482c = Object.values(this.cookies), _3bdf3e120ffd = [];
          for (let _ee61174f6deb of _4e0975a1482c) {
            if (_ee61174f6deb.expires && new Date(_ee61174f6deb.expires) < _315f273def32) {
              delete this.cookies[`${_ee61174f6deb.domain}@${_ee61174f6deb.path}@${_ee61174f6deb.name}`];
              continue;
            }
            (!_ee61174f6deb.secure || "https:" === _1d3a38243eaf.protocol) && (!_ee61174f6deb.httpOnly || !_1e85f3a9716c) && _1d3a38243eaf.pathname.startsWith(_ee61174f6deb.path) && (!_ee61174f6deb.domain.startsWith(".") || _1d3a38243eaf.hostname.endsWith(_ee61174f6deb.domain.slice(1))) && _3bdf3e120ffd.push(_ee61174f6deb);
          }
          return _3bdf3e120ffd.map(_1d3a38243eaf => `${_1d3a38243eaf.name}=${_1d3a38243eaf.value}`).join("; ");
        }
        load(_1d3a38243eaf) {
          if ("object" == typeof _1d3a38243eaf) return _1d3a38243eaf;
          this.cookies = JSON.parse(_1d3a38243eaf);
        }
        dump() {
          return JSON.stringify(this.cookies);
        }
      }
    },
    1427: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.d(_1e85f3a9716c, {
        u: () => n
      });
      class n {
        headers={};
        set(_1d3a38243eaf, _1e85f3a9716c) {
          this.headers[_1d3a38243eaf.toLowerCase()] = _1e85f3a9716c;
        }
      }
    },
    2393: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.d(_1e85f3a9716c, {
        V: () => _a609a4c7d80c
      });
      var _4e0975a1482c = _315f273def32(2614), _3bdf3e120ffd = _315f273def32(884), _ee61174f6deb = _315f273def32(1472);
      let _a609a4c7d80c = [ {
        fn: (_1d3a38243eaf, _1e85f3a9716c) => (0, _ee61174f6deb.Oy)(_1d3a38243eaf, _1e85f3a9716c),
        src: [ "embed", "script", "img", "frame", "source", "input", "track" ],
        href: [ "a", "link", "area", "use", "image" ],
        data: [ "object" ],
        action: [ "form" ],
        formaction: [ "button", "input", "textarea", "submit" ],
        poster: [ "video" ],
        "xlink:href": [ "image" ]
      }, {
        fn: (_1d3a38243eaf, _1e85f3a9716c) => (0, _ee61174f6deb.Oy)(_1d3a38243eaf, _1e85f3a9716c),
        src: [ "iframe" ]
      }, {
        fn: (_1d3a38243eaf, _1e85f3a9716c) => null,
        sandbox: [ "iframe" ]
      }, {
        fn: (_1d3a38243eaf, _1e85f3a9716c) => _1d3a38243eaf.startsWith("blob:") ? (0, _ee61174f6deb.$n)(_1d3a38243eaf) : (0, 
        _ee61174f6deb.Oy)(_1d3a38243eaf, _1e85f3a9716c),
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
        fn: (_1d3a38243eaf, _1e85f3a9716c) => (0, _3bdf3e120ffd.PV)(_1d3a38243eaf, _1e85f3a9716c),
        srcset: [ "img", "source" ],
        imagesrcset: [ "link" ]
      }, {
        fn: (_1d3a38243eaf, _1e85f3a9716c, _315f273def32) => (0, _3bdf3e120ffd.Qs)(_1d3a38243eaf, _315f273def32, {
          origin: new URL(_1e85f3a9716c.origin.origin),
          base: new URL(_1e85f3a9716c.origin.origin)
        }, !0),
        srcdoc: [ "iframe" ]
      }, {
        fn: (_1d3a38243eaf, _1e85f3a9716c) => (0, _4e0975a1482c.s)(_1d3a38243eaf, _1e85f3a9716c),
        style: "*"
      }, {
        fn: (_1d3a38243eaf, _1e85f3a9716c) => "_top" === _1d3a38243eaf || "_unfencedTop" === _1d3a38243eaf ? _1e85f3a9716c.topFrameName : "_parent" === _1d3a38243eaf ? _1e85f3a9716c.parentFrameName : _1d3a38243eaf,
        target: [ "a", "base" ]
      } ];
    },
    37: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      let _4e0975a1482c, _3bdf3e120ffd, _ee61174f6deb;
      _315f273def32.d(_1e85f3a9716c, {
        $W: () => _ee61174f6deb,
        Ec: () => o,
        Nk: () => c,
        P_: () => _3bdf3e120ffd,
        U5: () => l,
        hD: () => _4e0975a1482c
      }), _315f273def32(2393), _315f273def32(9381), _315f273def32(2416);
      let _a609a4c7d80c = Function;
      function o() {
        _4e0975a1482c = _a609a4c7d80c(`return ${_ee61174f6deb.codec.encode}`)(), _3bdf3e120ffd = _a609a4c7d80c(`return ${_ee61174f6deb.codec.decode}`)();
      }
      function l(_1d3a38243eaf, _1e85f3a9716c) {
        let _315f273def32 = _ee61174f6deb.flags[_1d3a38243eaf];
        for (let _315f273def32 in _ee61174f6deb.siteFlags) {
          let _4e0975a1482c = _ee61174f6deb.siteFlags[_315f273def32];
          if (new RegExp(_315f273def32).test(_1e85f3a9716c.href) && _1d3a38243eaf in _4e0975a1482c) return _4e0975a1482c[_1d3a38243eaf];
        }
        return _315f273def32;
      }
      function c(_1d3a38243eaf) {
        _ee61174f6deb = _1d3a38243eaf, o();
      }
    },
    2614: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.d(_1e85f3a9716c, {
        f: () => a,
        s: () => i
      });
      var _4e0975a1482c = _315f273def32(1472);
      function i(_1d3a38243eaf, _1e85f3a9716c) {
        return s("rewrite", _1d3a38243eaf, _1e85f3a9716c);
      }
      function a(_1d3a38243eaf) {
        return s("unrewrite", _1d3a38243eaf);
      }
      function s(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
        return (_1e85f3a9716c = (_1e85f3a9716c = new String(_1e85f3a9716c).toString()).replace(/url\(['"]?(.+?)['"]?\)/gm, (_1e85f3a9716c, _3bdf3e120ffd) => {
          let _ee61174f6deb = "rewrite" === _1d3a38243eaf ? (0, _4e0975a1482c.Oy)(_3bdf3e120ffd.trim(), _315f273def32) : (0, 
          _4e0975a1482c.v2)(_3bdf3e120ffd.trim());
          return _1e85f3a9716c.replace(_3bdf3e120ffd, _ee61174f6deb);
        })).replace(/@import\s+(url\s*?\(.{0,9999}?\)|['"].{0,9999}?['"]|.{0,9999}?)($|\s|;)/gm, (_1e85f3a9716c, _3bdf3e120ffd) => _1e85f3a9716c.replace(_3bdf3e120ffd, _3bdf3e120ffd.replace(/^(url\(['"]?|['"]|)(.+?)(['"]|['"]?\)|)$/gm, (_1e85f3a9716c, _3bdf3e120ffd, _ee61174f6deb, _a609a4c7d80c) => {
          if (_3bdf3e120ffd.startsWith("url")) return _1e85f3a9716c;
          let _f5fe395ebb04 = "rewrite" === _1d3a38243eaf ? (0, _4e0975a1482c.Oy)(_ee61174f6deb.trim(), _315f273def32) : (0, 
          _4e0975a1482c.v2)(_ee61174f6deb.trim());
          return `${_3bdf3e120ffd}${_f5fe395ebb04}${_a609a4c7d80c}`;
        })));
      }
    },
    4435: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.d(_1e85f3a9716c, {
        l: () => l
      });
      var _4e0975a1482c = _315f273def32(1472), _3bdf3e120ffd = _315f273def32(8228);
      let _ee61174f6deb = new Set([ "cross-origin-embedder-policy", "cross-origin-opener-policy", "cross-origin-resource-policy", "content-security-policy", "content-security-policy-report-only", "expect-ct", "feature-policy", "origin-isolation", "strict-transport-security", "upgrade-insecure-requests", "x-content-type-options", "x-download-options", "x-frame-options", "x-permitted-cross-domain-policies", "x-powered-by", "x-xss-protection", "clear-site-data" ]), _a609a4c7d80c = new Set([ "location", "content-location", "referer" ]);
      function o(_1d3a38243eaf, _1e85f3a9716c) {
        return _1d3a38243eaf.replace(/<(.*)>/gi, _1d3a38243eaf => (0, _4e0975a1482c.Oy)(_1d3a38243eaf, _1e85f3a9716c));
      }
      async function l(_1d3a38243eaf, _1e85f3a9716c, _315f273def32, _f5fe395ebb04) {
        let _5a5cce1642e9 = {};
        for (let _1e85f3a9716c in _1d3a38243eaf) _5a5cce1642e9[_1e85f3a9716c.toLowerCase()] = _1d3a38243eaf[_1e85f3a9716c];
        for (let _1d3a38243eaf of _ee61174f6deb) delete _5a5cce1642e9[_1d3a38243eaf];
        for (let _1d3a38243eaf of _a609a4c7d80c) _5a5cce1642e9[_1d3a38243eaf] && (_5a5cce1642e9[_1d3a38243eaf] = (0, 
        _4e0975a1482c.Oy)(_5a5cce1642e9[_1d3a38243eaf]?.toString(), _1e85f3a9716c));
        if ("string" == typeof _5a5cce1642e9.link ? _5a5cce1642e9.link = o(_5a5cce1642e9.link, _1e85f3a9716c) : Array.isArray(_5a5cce1642e9.link) && (_5a5cce1642e9.link = _5a5cce1642e9.link.map(_1d3a38243eaf => o(_1d3a38243eaf, _1e85f3a9716c))), 
        "string" == typeof _5a5cce1642e9.referer) {
          let _1d3a38243eaf = new URL(_5a5cce1642e9.referer), _315f273def32 = await _f5fe395ebb04.get(_1d3a38243eaf.href);
          if (_315f273def32) {
            let _4e0975a1482c = _315f273def32.policy.toLowerCase().split(",").map(_1d3a38243eaf => _1d3a38243eaf.trim());
            _4e0975a1482c.includes("no-referrer") || _4e0975a1482c.includes("no-referrer-when-downgrade") && "http:" === _1e85f3a9716c.origin.protocol && "https:" === _1d3a38243eaf.protocol ? delete _5a5cce1642e9.referer : _4e0975a1482c.includes("origin") ? _5a5cce1642e9.referer = _1d3a38243eaf.origin : _4e0975a1482c.includes("origin-when-cross-origin") ? _1d3a38243eaf.origin !== _1e85f3a9716c.origin.origin ? _5a5cce1642e9.referer = _1d3a38243eaf.origin : _5a5cce1642e9.referer = _1d3a38243eaf.href : _4e0975a1482c.includes("same-origin") ? _1d3a38243eaf.origin === _1e85f3a9716c.origin.origin ? _5a5cce1642e9.referer = _1d3a38243eaf.href : delete _5a5cce1642e9.referer : _4e0975a1482c.includes("strict-origin") ? "http:" === _1e85f3a9716c.origin.protocol && "https:" === _1d3a38243eaf.protocol ? delete _5a5cce1642e9.referer : _5a5cce1642e9.referer = _1d3a38243eaf.origin : _1d3a38243eaf.origin === _1e85f3a9716c.origin.origin ? _5a5cce1642e9.referer = _1d3a38243eaf.href : "http:" === _1e85f3a9716c.origin.protocol && "https:" === _1d3a38243eaf.protocol ? delete _5a5cce1642e9.referer : _5a5cce1642e9.referer = _1d3a38243eaf.origin;
          }
        }
        return "string" == typeof _5a5cce1642e9["sec-fetch-dest"] && "" === _5a5cce1642e9["sec-fetch-dest"] && (_5a5cce1642e9["sec-fetch-dest"] = "empty"), 
        "string" == typeof _5a5cce1642e9["sec-fetch-site"] && "none" !== _5a5cce1642e9["sec-fetch-site"] && ("string" == typeof _5a5cce1642e9.referer ? _5a5cce1642e9["sec-fetch-site"] = await (0, 
        _3bdf3e120ffd.ps)(_1e85f3a9716c, new URL(_5a5cce1642e9.referer), _315f273def32) : (console.warn("Missing referrer header; can't rewrite sec-fetch-site properly. Falling back to unsafe deletion."), 
        delete _5a5cce1642e9["sec-fetch-site"])), _5a5cce1642e9;
      }
    },
    884: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.d(_1e85f3a9716c, {
        PV: () => m,
        Qs: () => f,
        Uk: () => h,
        nK: () => g
      });
      var _4e0975a1482c = _315f273def32(3808), _3bdf3e120ffd = _315f273def32(8866), _ee61174f6deb = _315f273def32(6498), _a609a4c7d80c = _315f273def32(1472), _f5fe395ebb04 = _315f273def32(2614), _5a5cce1642e9 = _315f273def32(1478), _64f2b2ef4558 = _315f273def32(37), _611b46e2fd2a = _315f273def32(2393), _e853f5e31d91 = _315f273def32(8665).A;
      function h(_1d3a38243eaf, _1e85f3a9716c) {
        let _315f273def32 = JSON.stringify(_1d3a38243eaf.dump()), _4e0975a1482c = `\n\t\tself.COOKIE = ${_315f273def32};\n\t\t$studyjetLoadClient().loadAndHook(${JSON.stringify(_64f2b2ef4558.$W)});\n\t\tif ("document" in self && document?.currentScript) {\n\t\t\tdocument.currentScript.remove();\n\t\t}\n\t`, _3bdf3e120ffd = y(_3c266443ddce.encode(_4e0975a1482c));
        return [ _1e85f3a9716c(_64f2b2ef4558.$W.files.wasm), _1e85f3a9716c(_64f2b2ef4558.$W.files.all), _1e85f3a9716c("data:application/javascript;base64," + _3bdf3e120ffd) ];
      }
      let _3c266443ddce = new TextEncoder;
      function f(_1d3a38243eaf, _1e85f3a9716c, _315f273def32, _64f2b2ef4558 = !1) {
        let _542e5e0773c9 = performance.now(), _81042f72aa99 = function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32, _64f2b2ef4558 = !1) {
          let _e853f5e31d91 = new _3bdf3e120ffd.DV((_1d3a38243eaf, _1e85f3a9716c) => _1e85f3a9716c), _542e5e0773c9 = new _4e0975a1482c.iX(_e853f5e31d91);
          if (_542e5e0773c9.write(_1d3a38243eaf), _542e5e0773c9.end(), function e(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
            if ("base" === _1d3a38243eaf.name && void 0 !== _1d3a38243eaf.attribs.href && (_315f273def32.base = new URL(_1d3a38243eaf.attribs.href, _315f273def32.origin)), 
            _1d3a38243eaf.attribs) {
              for (let _4e0975a1482c of _611b46e2fd2a.V) for (let _3bdf3e120ffd in _4e0975a1482c) {
                let _ee61174f6deb = _4e0975a1482c[_3bdf3e120ffd.toLowerCase()];
                if ("function" != typeof _ee61174f6deb && ("*" === _ee61174f6deb || _ee61174f6deb.includes(_1d3a38243eaf.name)) && void 0 !== _1d3a38243eaf.attribs[_3bdf3e120ffd]) {
                  let _ee61174f6deb = _1d3a38243eaf.attribs[_3bdf3e120ffd], _a609a4c7d80c = _4e0975a1482c.fn(_ee61174f6deb, _315f273def32, _1e85f3a9716c);
                  null === _a609a4c7d80c ? delete _1d3a38243eaf.attribs[_3bdf3e120ffd] : _1d3a38243eaf.attribs[_3bdf3e120ffd] = _a609a4c7d80c, 
                  _1d3a38243eaf.attribs[`studyjet-attr-${_3bdf3e120ffd}`] = _ee61174f6deb;
                }
              }
              for (let [_1e85f3a9716c, _4e0975a1482c] of Object.entries(_1d3a38243eaf.attribs)) _a9bd71b7ce50.includes(_1e85f3a9716c) && (_1d3a38243eaf.attribs[`studyjet-attr-${_1e85f3a9716c}`] = _4e0975a1482c, 
              _1d3a38243eaf.attribs[_1e85f3a9716c] = (0, _5a5cce1642e9.o)(_4e0975a1482c, `(inline ${_1e85f3a9716c} on element)`, _315f273def32));
            }
            if ("style" === _1d3a38243eaf.name && void 0 !== _1d3a38243eaf.children[0] && (_1d3a38243eaf.children[0].data = (0, 
            _f5fe395ebb04.s)(_1d3a38243eaf.children[0].data, _315f273def32)), "script" === _1d3a38243eaf.name && "module" === _1d3a38243eaf.attribs.type && _1d3a38243eaf.attribs.src && (_1d3a38243eaf.attribs.src = _1d3a38243eaf.attribs.src + "?type=module"), 
            "script" === _1d3a38243eaf.name && "importmap" === _1d3a38243eaf.attribs.type && void 0 !== _1d3a38243eaf.children[0]) {
              let _1e85f3a9716c = _1d3a38243eaf.children[0].data;
              try {
                let _4e0975a1482c = JSON.parse(_1e85f3a9716c);
                if (_4e0975a1482c.imports) for (let _1d3a38243eaf in _4e0975a1482c.imports) {
                  let _1e85f3a9716c = _4e0975a1482c.imports[_1d3a38243eaf];
                  "string" == typeof _1e85f3a9716c && (_1e85f3a9716c = (0, _a609a4c7d80c.Oy)(_1e85f3a9716c, _315f273def32), 
                  _4e0975a1482c.imports[_1d3a38243eaf] = _1e85f3a9716c);
                }
                _1d3a38243eaf.children[0].data = JSON.stringify(_4e0975a1482c);
              } catch (e) {
                console.error("Failed to parse importmap JSON:", e);
              }
            }
            if ("script" === _1d3a38243eaf.name && /(application|text)\/javascript|module|undefined/.test(_1d3a38243eaf.attribs.type) && void 0 !== _1d3a38243eaf.children[0]) {
              let _1e85f3a9716c = _1d3a38243eaf.children[0].data, _4e0975a1482c = "module" === _1d3a38243eaf.attribs.type;
              _1d3a38243eaf.attribs["studyjet-attr-script-source-src"] = y(_3c266443ddce.encode(_1e85f3a9716c)), 
              _1e85f3a9716c = _1e85f3a9716c.replace(/<!--[\s\S]*?-->/g, ""), _1d3a38243eaf.children[0].data = (0, 
              _5a5cce1642e9.o)(_1e85f3a9716c, "(inline script element)", _315f273def32, _4e0975a1482c);
            }
            if ("meta" === _1d3a38243eaf.name && void 0 !== _1d3a38243eaf.attribs["http-equiv"]) {
              if ("content-security-policy" === _1d3a38243eaf.attribs["http-equiv"].toLowerCase()) _1d3a38243eaf = new _3bdf3e120ffd.Mw(_1d3a38243eaf.attribs.content); else if ("refresh" === _1d3a38243eaf.attribs["http-equiv"] && _1d3a38243eaf.attribs.content.includes("url")) {
                let _1e85f3a9716c = _1d3a38243eaf.attribs.content.split("url=");
                _1e85f3a9716c[1] && (_1e85f3a9716c[1] = (0, _a609a4c7d80c.Oy)(_1e85f3a9716c[1].trim(), _315f273def32)), 
                _1d3a38243eaf.attribs.content = _1e85f3a9716c.join("url=");
              }
            }
            if (_1d3a38243eaf.childNodes) for (let _4e0975a1482c in _1d3a38243eaf.childNodes) _1d3a38243eaf.childNodes[_4e0975a1482c] = e(_1d3a38243eaf.childNodes[_4e0975a1482c], _1e85f3a9716c, _315f273def32);
            return _1d3a38243eaf;
          }(_e853f5e31d91.root, _1e85f3a9716c, _315f273def32), _64f2b2ef4558) {
            let _1d3a38243eaf = function e(_1d3a38243eaf) {
              if (_1d3a38243eaf.type === _4e0975a1482c.RJ.vw && "head" === _1d3a38243eaf.name) return _1d3a38243eaf;
              if (_1d3a38243eaf.childNodes) for (let _1e85f3a9716c of _1d3a38243eaf.childNodes) {
                let _1d3a38243eaf = e(_1e85f3a9716c);
                if (_1d3a38243eaf) return _1d3a38243eaf;
              }
              return null;
            }(_e853f5e31d91.root);
            _1d3a38243eaf || (_1d3a38243eaf = new _3bdf3e120ffd.Hg("head", {}, []), _e853f5e31d91.root.children.unshift(_1d3a38243eaf)), 
            _1d3a38243eaf.children.unshift(...h(_1e85f3a9716c, _1d3a38243eaf => new _3bdf3e120ffd.Hg("script", {
              src: _1d3a38243eaf
            })));
          }
          return (0, _ee61174f6deb.A)(_e853f5e31d91.root, {
            encodeEntities: "utf8",
            decodeEntities: !1
          });
        }(_1d3a38243eaf, _1e85f3a9716c, _315f273def32, _64f2b2ef4558);
        return _e853f5e31d91.time(_315f273def32, _542e5e0773c9, "html rewrite"), _81042f72aa99;
      }
      function g(_1d3a38243eaf) {
        let _1e85f3a9716c = new _3bdf3e120ffd.DV((_1d3a38243eaf, _1e85f3a9716c) => _1e85f3a9716c), _315f273def32 = new _4e0975a1482c.iX(_1e85f3a9716c);
        return _315f273def32.write(_1d3a38243eaf), _315f273def32.end(), !function e(_1d3a38243eaf) {
          if ("attribs" in _1d3a38243eaf) for (let _1e85f3a9716c in _1d3a38243eaf.attribs) {
            if ("studyjet-attr-script-source-src" == _1e85f3a9716c) {
              _1d3a38243eaf.children[0] && "data" in _1d3a38243eaf.children[0] && (_1d3a38243eaf.children[0].data = atob(_1d3a38243eaf.attribs[_1e85f3a9716c]));
              continue;
            }
            _1e85f3a9716c.startsWith("studyjet-attr-") && (_1d3a38243eaf.attribs[_1e85f3a9716c.slice(14)] = _1d3a38243eaf.attribs[_1e85f3a9716c], 
            delete _1d3a38243eaf.attribs[_1e85f3a9716c]);
          }
          if ("childNodes" in _1d3a38243eaf) for (let _1e85f3a9716c of _1d3a38243eaf.childNodes) e(_1e85f3a9716c);
        }(_1e85f3a9716c.root), (0, _ee61174f6deb.A)(_1e85f3a9716c.root, {
          decodeEntities: !1
        });
      }
      function m(_1d3a38243eaf, _1e85f3a9716c) {
        return _1d3a38243eaf.split(/ .*,/).map(_1d3a38243eaf => _1d3a38243eaf.trim()).map(_1d3a38243eaf => {
          let [_315f273def32, ..._4e0975a1482c] = _1d3a38243eaf.split(/\s+/), _3bdf3e120ffd = (0, 
          _a609a4c7d80c.Oy)(_315f273def32.trim(), _1e85f3a9716c);
          return _4e0975a1482c.length > 0 ? `${_3bdf3e120ffd} ${_4e0975a1482c.join(" ")}` : _3bdf3e120ffd;
        }).join(", ");
      }
      function y(_1d3a38243eaf) {
        return btoa(Array.from(_1d3a38243eaf, _1d3a38243eaf => String.fromCodePoint(_1d3a38243eaf)).join(""));
      }
      let _a9bd71b7ce50 = [ "onbeforexrselect", "onabort", "onbeforeinput", "onbeforematch", "onbeforetoggle", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncontentvisibilityautostatechange", "oncontextlost", "oncontextmenu", "oncontextrestored", "oncuechange", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "onformdata", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onresize", "onscroll", "onsecuritypolicyviolation", "onseeked", "onseeking", "onselect", "onslotchange", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "onvolumechange", "onwaiting", "onwebkitanimationend", "onwebkitanimationiteration", "onwebkitanimationstart", "onwebkittransitionend", "onwheel", "onauxclick", "ongotpointercapture", "onlostpointercapture", "onpointerdown", "onpointermove", "onpointerrawupdate", "onpointerup", "onpointercancel", "onpointerover", "onpointerout", "onpointerenter", "onpointerleave", "onselectstart", "onselectionchange", "onanimationend", "onanimationiteration", "onanimationstart", "ontransitionrun", "ontransitionstart", "ontransitionend", "ontransitioncancel", "oncopy", "oncut", "onpaste", "onscrollend", "onscrollsnapchange", "onscrollsnapchanging" ];
    },
    9381: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32(2614), _315f273def32(4435), _315f273def32(884), _315f273def32(1478), 
      _315f273def32(1472), _315f273def32(2015), _315f273def32(1561);
    },
    1478: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.d(_1e85f3a9716c, {
        o: () => s
      });
      var _4e0975a1482c = _315f273def32(37), _3bdf3e120ffd = _315f273def32(1561), _ee61174f6deb = _315f273def32(8665).A;
      function s(_1d3a38243eaf, _1e85f3a9716c, _315f273def32, _a609a4c7d80c = !1) {
        try {
          let _f5fe395ebb04 = function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32, _4e0975a1482c = !1) {
            return function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32, _4e0975a1482c) {
              let [_a609a4c7d80c, _f5fe395ebb04] = (0, _3bdf3e120ffd.nb)(_315f273def32);
              try {
                let _f5fe395ebb04, _5a5cce1642e9 = performance.now();
                _f5fe395ebb04 = "string" == typeof _1d3a38243eaf ? _a609a4c7d80c.rewrite_js(_1d3a38243eaf, _315f273def32.base.href, _1e85f3a9716c || "(unknown)", _4e0975a1482c) : _a609a4c7d80c.rewrite_js_bytes(_1d3a38243eaf, _315f273def32.base.href, _1e85f3a9716c || "(unknown)", _4e0975a1482c), 
                _ee61174f6deb.time(_315f273def32, _5a5cce1642e9, `oxc rewrite for "${_1e85f3a9716c || "(unknown)"}"`);
                let {js: _64f2b2ef4558, map: _611b46e2fd2a, scramtag: _e853f5e31d91, errors: _3c266443ddce} = _f5fe395ebb04;
                return {
                  js: "string" == typeof _1d3a38243eaf ? _3bdf3e120ffd.su.decode(_64f2b2ef4558) : _64f2b2ef4558,
                  tag: _e853f5e31d91,
                  map: _611b46e2fd2a,
                  errors: _3c266443ddce
                };
              } finally {
                _f5fe395ebb04();
              }
            }(_1d3a38243eaf, _1e85f3a9716c, _315f273def32, _4e0975a1482c);
          }(_1d3a38243eaf, _1e85f3a9716c, _315f273def32, _a609a4c7d80c), _5a5cce1642e9 = _f5fe395ebb04.js;
          if ((0, _4e0975a1482c.U5)("sourcemaps", _315f273def32.base)) {
            let _1d3a38243eaf = globalThis[_4e0975a1482c.$W.globals.pushsourcemapfn];
            if (_1d3a38243eaf) _1d3a38243eaf(Array.from(_f5fe395ebb04.map), _f5fe395ebb04.tag); else {
              _5a5cce1642e9 instanceof Uint8Array && (_5a5cce1642e9 = (new TextDecoder).decode(_5a5cce1642e9));
              let _1d3a38243eaf = `${_4e0975a1482c.$W.globals.pushsourcemapfn}([${_f5fe395ebb04.map.join(",")}], "${_f5fe395ebb04.tag}");`, _1e85f3a9716c = /^\s*(['"])use strict\1;?/;
              _5a5cce1642e9 = _1e85f3a9716c.test(_5a5cce1642e9) ? _5a5cce1642e9.replace(_1e85f3a9716c, `$&\n${_1d3a38243eaf}`) : `${_1d3a38243eaf}\n${_5a5cce1642e9}`;
            }
          }
          if ((0, _4e0975a1482c.U5)("rewriterLogs", _315f273def32.base)) for (let _1d3a38243eaf of _f5fe395ebb04.errors) console.error("oxc parse error", _1d3a38243eaf);
          return _5a5cce1642e9;
        } catch (_ee61174f6deb) {
          if (console.warn("failed rewriting js for", _1e85f3a9716c || "(unknown)", _ee61174f6deb.message, _1d3a38243eaf instanceof Uint8Array ? _3bdf3e120ffd.su.decode(_1d3a38243eaf) : _1d3a38243eaf), 
          (0, _4e0975a1482c.U5)("allowInvalidJs", _315f273def32.base)) return _1d3a38243eaf;
          throw _ee61174f6deb;
        }
      }
      Error.stackTraceLimit = 50;
    },
    1472: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.d(_1e85f3a9716c, {
        $n: () => o,
        IP: () => s,
        Oy: () => l,
        v2: () => c
      });
      var _4e0975a1482c = _315f273def32(37), _3bdf3e120ffd = _315f273def32(1478);
      function a(_1d3a38243eaf, _1e85f3a9716c) {
        try {
          return new URL(_1d3a38243eaf, _1e85f3a9716c);
        } catch {
          return null;
        }
      }
      function s(_1d3a38243eaf, _1e85f3a9716c) {
        let _315f273def32 = new URL(_1d3a38243eaf.substring(5));
        return "blob:" + _1e85f3a9716c.origin.origin + _315f273def32.pathname;
      }
      function o(_1d3a38243eaf) {
        let _1e85f3a9716c = new URL(_1d3a38243eaf.substring(5));
        return "blob:" + location.origin + _1e85f3a9716c.pathname;
      }
      function l(_1d3a38243eaf, _1e85f3a9716c) {
        if (_1d3a38243eaf instanceof URL && (_1d3a38243eaf = _1d3a38243eaf.toString()), 
        _1d3a38243eaf.startsWith("javascript:")) return "javascript:" + (0, _3bdf3e120ffd.o)(_1d3a38243eaf.slice(11), "(javascript: url)", _1e85f3a9716c);
        {
          if (_1d3a38243eaf.startsWith("blob:") || _1d3a38243eaf.startsWith("data:")) return location.origin + _4e0975a1482c.$W.prefix + _1d3a38243eaf;
          if (_1d3a38243eaf.startsWith("mailto:") || _1d3a38243eaf.startsWith("about:")) return _1d3a38243eaf;
          let _315f273def32 = _1e85f3a9716c.base.href;
          _315f273def32.startsWith("about:") && (_315f273def32 = c(self.location.href));
          let _3bdf3e120ffd = a(_1d3a38243eaf, _315f273def32);
          if (!_3bdf3e120ffd) return _1d3a38243eaf;
          let _ee61174f6deb = (0, _4e0975a1482c.hD)(_3bdf3e120ffd.hash.slice(1));
          return _3bdf3e120ffd.hash = "", location.origin + _4e0975a1482c.$W.prefix + (0, 
          _4e0975a1482c.hD)(_3bdf3e120ffd.href) + (_ee61174f6deb ? "#" + _ee61174f6deb : "");
        }
      }
      function c(_1d3a38243eaf) {
        _1d3a38243eaf instanceof URL && (_1d3a38243eaf = _1d3a38243eaf.toString());
        let _1e85f3a9716c = location.origin + _4e0975a1482c.$W.prefix;
        if (_1d3a38243eaf.startsWith("javascript:")) return _1d3a38243eaf;
        {
          if (_1d3a38243eaf.startsWith("blob:")) return _1d3a38243eaf;
          if (_1d3a38243eaf.startsWith(_1e85f3a9716c + "blob:") || _1d3a38243eaf.startsWith(_1e85f3a9716c + "data:")) return _1d3a38243eaf.substring(_1e85f3a9716c.length);
          if (_1d3a38243eaf.startsWith("mailto:") || _1d3a38243eaf.startsWith("about:")) return _1d3a38243eaf;
          let _315f273def32 = a(_1d3a38243eaf);
          if (!_315f273def32) return _1d3a38243eaf;
          let _3bdf3e120ffd = (0, _4e0975a1482c.P_)(_315f273def32.hash.slice(1));
          return _315f273def32.hash = "", (0, _4e0975a1482c.P_)(_315f273def32.href.slice(_1e85f3a9716c.length) + (_3bdf3e120ffd ? "#" + _3bdf3e120ffd : ""));
        }
      }
    },
    1561: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      let _4e0975a1482c;
      _315f273def32.d(_1e85f3a9716c, {
        n$: () => d,
        nb: () => g,
        su: () => _e853f5e31d91
      });
      var _3bdf3e120ffd = _315f273def32(3907), _ee61174f6deb = _315f273def32(37), _a609a4c7d80c = _315f273def32(1472), _f5fe395ebb04 = _315f273def32(2393), _5a5cce1642e9 = _315f273def32(2614), _64f2b2ef4558 = _315f273def32(1478), _611b46e2fd2a = _315f273def32(884);
      async function d() {
        _4e0975a1482c = new Uint8Array(await fetch(_ee61174f6deb.$W.files.wasm).then(_1d3a38243eaf => _1d3a38243eaf.arrayBuffer()));
      }
      self.WASM && (_4e0975a1482c = Uint8Array.from(atob(self.WASM), _1d3a38243eaf => _1d3a38243eaf.charCodeAt(0)));
      let _e853f5e31d91 = new TextDecoder, _3c266443ddce = "\0asm".split("").map(_1d3a38243eaf => _1d3a38243eaf.charCodeAt(0)), _a9bd71b7ce50 = [];
      function g(_1d3a38243eaf) {
        let _1e85f3a9716c;
        if (!(_4e0975a1482c instanceof Uint8Array)) throw Error("rewriter wasm not found (was it fetched correctly?)");
        if (![ ..._4e0975a1482c.slice(0, 4) ].every((_1d3a38243eaf, _1e85f3a9716c) => _1d3a38243eaf === _3c266443ddce[_1e85f3a9716c])) throw Error("rewriter wasm does not have wasm magic (was it fetched correctly?)\nrewriter wasm contents: " + _e853f5e31d91.decode(_4e0975a1482c));
        (0, _3bdf3e120ffd.QR)({
          module: new WebAssembly.Module(_4e0975a1482c)
        });
        let _315f273def32 = _a9bd71b7ce50.findIndex(_1d3a38243eaf => !_1d3a38243eaf.inUse), _542e5e0773c9 = _a9bd71b7ce50.length;
        return -1 === _315f273def32 ? ((0, _ee61174f6deb.U5)("rewriterLogs", _1d3a38243eaf.base) && console.log(`creating new rewriter, ${_542e5e0773c9} rewriters made already`), 
        _1e85f3a9716c = {
          rewriter: new _3bdf3e120ffd.LW({
            config: _ee61174f6deb.$W,
            shared: {
              rewrite: {
                htmlRules: _f5fe395ebb04.V,
                rewriteUrl: _a609a4c7d80c.Oy,
                rewriteCss: _5a5cce1642e9.s,
                rewriteJs: _64f2b2ef4558.o,
                getHtmlInjectCode(_1d3a38243eaf, _1e85f3a9716c) {
                  let _315f273def32 = (0, _611b46e2fd2a.Uk)(_1d3a38243eaf, _1d3a38243eaf => `<script src="${_1d3a38243eaf}"><\/script>`).join("");
                  return _1e85f3a9716c ? `<head>${_315f273def32}</head>` : _315f273def32;
                }
              }
            },
            flagEnabled: _ee61174f6deb.U5,
            codec: {
              encode: _ee61174f6deb.hD,
              decode: _ee61174f6deb.P_
            }
          }),
          inUse: !1
        }, _a9bd71b7ce50.push(_1e85f3a9716c)) : ((0, _ee61174f6deb.U5)("rewriterLogs", _1d3a38243eaf.base) && console.log(`using cached rewriter ${_315f273def32} from list of ${_542e5e0773c9} rewriters`), 
        _1e85f3a9716c = _a9bd71b7ce50[_315f273def32]), _1e85f3a9716c.inUse = !0, [ _1e85f3a9716c.rewriter, () => _1e85f3a9716c.inUse = !1 ];
      }
    },
    2015: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.d(_1e85f3a9716c, {
        i: () => a
      });
      var _4e0975a1482c = _315f273def32(37), _3bdf3e120ffd = _315f273def32(1478);
      function a(_1d3a38243eaf, _1e85f3a9716c, _315f273def32, _ee61174f6deb) {
        let _a609a4c7d80c = "", _f5fe395ebb04 = "module" === _1e85f3a9716c, l = _1d3a38243eaf => {
          _f5fe395ebb04 ? _a609a4c7d80c += `import "${_4e0975a1482c.$W.files[_1d3a38243eaf]}"\n` : _a609a4c7d80c += `importScripts("${_4e0975a1482c.$W.files[_1d3a38243eaf]}");\n`;
        };
        l("wasm"), l("all"), _a609a4c7d80c += `$studyjetLoadClient().loadAndHook(${JSON.stringify(_4e0975a1482c.$W)});`;
        let _5a5cce1642e9 = (0, _3bdf3e120ffd.o)(_1d3a38243eaf, _315f273def32, _ee61174f6deb, _f5fe395ebb04);
        return _5a5cce1642e9 instanceof Uint8Array && (_5a5cce1642e9 = (new TextDecoder).decode(_5a5cce1642e9)), 
        _a609a4c7d80c += _5a5cce1642e9;
      }
    },
    6684: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.d(_1e85f3a9716c, {
        Sn: () => h,
        YH: () => u,
        Yq: () => f,
        hU: () => d,
        pL: () => p,
        rj: () => c
      });
      var _4e0975a1482c = _315f273def32(6570);
      let _3bdf3e120ffd = {
        none: 0,
        "same-origin": 1,
        "same-site": 2,
        "cross-site": 3
      };
      async function a() {
        return (0, _4e0975a1482c.P2)("@d7a6431b92e", 1);
      }
      async function s(_1d3a38243eaf) {
        let _1e85f3a9716c = await a();
        return await _1e85f3a9716c.get("redirectTrackers", _1d3a38243eaf) || null;
      }
      async function o(_1d3a38243eaf, _1e85f3a9716c) {
        let _315f273def32 = await a();
        await _315f273def32.put("redirectTrackers", _1e85f3a9716c, _1d3a38243eaf);
      }
      async function l(_1d3a38243eaf) {
        let _1e85f3a9716c = await a();
        await _1e85f3a9716c.delete("redirectTrackers", _1d3a38243eaf);
      }
      async function c(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
        await s(_1d3a38243eaf) || await o(_1d3a38243eaf, {
          originalReferrer: _1e85f3a9716c || "",
          mostRestrictiveSite: _315f273def32,
          referrerPolicy: "",
          chainStarted: Date.now()
        });
      }
      async function u(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
        let _4e0975a1482c = await s(_1d3a38243eaf);
        _4e0975a1482c && (await l(_1d3a38243eaf), _315f273def32 && (_4e0975a1482c.referrerPolicy = _315f273def32), 
        await o(_1e85f3a9716c, _4e0975a1482c));
      }
      async function d(_1d3a38243eaf, _1e85f3a9716c) {
        let _315f273def32 = await s(_1d3a38243eaf);
        if (!_315f273def32) return _1e85f3a9716c;
        let _4e0975a1482c = _3bdf3e120ffd[_315f273def32.mostRestrictiveSite];
        return (_3bdf3e120ffd[_1e85f3a9716c] ?? 0) > _4e0975a1482c ? (_315f273def32.mostRestrictiveSite = _1e85f3a9716c, 
        await o(_1d3a38243eaf, _315f273def32), _1e85f3a9716c) : _315f273def32.mostRestrictiveSite;
      }
      async function h(_1d3a38243eaf) {
        await l(_1d3a38243eaf);
      }
      async function p(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
        let _4e0975a1482c = await a();
        await _4e0975a1482c.put("referrerPolicies", {
          policy: _1e85f3a9716c,
          referrer: _315f273def32
        }, _1d3a38243eaf);
      }
      async function f(_1d3a38243eaf) {
        let _1e85f3a9716c = await a();
        return await _1e85f3a9716c.get("referrerPolicies", _1d3a38243eaf) || null;
      }
    },
    2416: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32(6684), _315f273def32(8228);
    },
    8228: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.d(_1e85f3a9716c, {
        ps: () => l
      });
      var _4e0975a1482c = _315f273def32(6570);
      let _3bdf3e120ffd = "publicSuffixList";
      async function a() {
        return (0, _4e0975a1482c.P2)("@d7a6431b92e", 1);
      }
      async function s() {
        let _1d3a38243eaf = await a();
        return await _1d3a38243eaf.get("publicSuffixList", _3bdf3e120ffd) || null;
      }
      async function o(_1d3a38243eaf) {
        let _1e85f3a9716c = await a();
        await _1e85f3a9716c.put("publicSuffixList", {
          data: _1d3a38243eaf,
          expiry: Date.now() + 36e5
        }, _3bdf3e120ffd);
      }
      async function l(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
        return _1e85f3a9716c ? _1d3a38243eaf.origin.origin === _1e85f3a9716c.origin ? "same-origin" : await c(_1d3a38243eaf.origin, _1e85f3a9716c, _315f273def32) ? "same-site" : "cross-site" : "none";
      }
      async function c(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
        return await u(_1d3a38243eaf, _315f273def32) === await u(_1e85f3a9716c, _315f273def32);
      }
      async function u(_1d3a38243eaf, _1e85f3a9716c) {
        let _315f273def32 = await d(_1e85f3a9716c), _4e0975a1482c = _1d3a38243eaf.hostname.toLowerCase().split("."), _3bdf3e120ffd = "", _ee61174f6deb = !1;
        for (let _1d3a38243eaf of _315f273def32) {
          let _1e85f3a9716c = _1d3a38243eaf.startsWith("!") ? _1d3a38243eaf.substring(1) : _1d3a38243eaf;
          if (function(_1d3a38243eaf, _1e85f3a9716c) {
            if (_1d3a38243eaf.length < _1e85f3a9716c.length) return !1;
            let _315f273def32 = _1d3a38243eaf.length - _1e85f3a9716c.length;
            for (let _4e0975a1482c = 0; _4e0975a1482c < _1e85f3a9716c.length; _4e0975a1482c++) {
              let _3bdf3e120ffd = _1d3a38243eaf[_315f273def32 + _4e0975a1482c], _ee61174f6deb = _1e85f3a9716c[_4e0975a1482c];
              if ("*" !== _ee61174f6deb && _3bdf3e120ffd !== _ee61174f6deb) return !1;
            }
            return !0;
          }(_4e0975a1482c, _1e85f3a9716c.split("."))) {
            if (_1d3a38243eaf.startsWith("!")) {
              _3bdf3e120ffd = _1e85f3a9716c, _ee61174f6deb = !0;
              break;
            }
            !_ee61174f6deb && _1e85f3a9716c.length > _3bdf3e120ffd.length && (_3bdf3e120ffd = _1e85f3a9716c);
          }
        }
        if (!_3bdf3e120ffd) return _4e0975a1482c.slice(-2).join(".");
        let _a609a4c7d80c = _3bdf3e120ffd.split(".").length, _f5fe395ebb04 = _ee61174f6deb ? _a609a4c7d80c : _a609a4c7d80c + 1;
        return _4e0975a1482c.slice(-_f5fe395ebb04).join(".");
      }
      async function d(_1d3a38243eaf) {
        let _1e85f3a9716c, _315f273def32 = await s();
        if (_315f273def32 && Date.now() < _315f273def32.expiry) return _315f273def32.data;
        try {
          _1e85f3a9716c = await _1d3a38243eaf.fetch("https://publicsuffix.org/list/public_suffix_list.dat");
        } catch (_1d3a38243eaf) {
          throw Error(`Failed to fetch public suffix list: ${_1d3a38243eaf}`);
        }
        let _4e0975a1482c = (await _1e85f3a9716c.text()).split("\n").map(_1d3a38243eaf => {
          let _1e85f3a9716c = _1d3a38243eaf.trim(), _315f273def32 = _1e85f3a9716c.indexOf(" ");
          return _315f273def32 > -1 ? _1e85f3a9716c.substring(0, _315f273def32) : _1e85f3a9716c;
        }).filter(_1d3a38243eaf => _1d3a38243eaf && !_1d3a38243eaf.startsWith("//"));
        return await o(_4e0975a1482c), _4e0975a1482c;
      }
    },
    2794: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.d(_1e85f3a9716c, {
        pX: () => _4e0975a1482c,
        zr: () => _3bdf3e120ffd
      });
      let _4e0975a1482c = Symbol.for("studyjet client global"), _3bdf3e120ffd = Symbol.for("studyjet frame handle");
    },
    5956: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      function n(_1d3a38243eaf, _1e85f3a9716c) {
        let _315f273def32 = `\n                errorTrace.value = ${JSON.stringify(_1d3a38243eaf)};\n                fetchedURL.textContent = ${JSON.stringify(_1e85f3a9716c)};\n                for (const node of document.querySelectorAll("#hostname")) node.textContent = ${JSON.stringify(location.hostname)};\n                reload.addEventListener("click", () => location.reload());\n                version.textContent = ${JSON.stringify(globalThis.$studyjetVersion?.version || "unknown")};\n                build.textContent = ${JSON.stringify(globalThis.$studyjetVersion?.build || "unknown")};\n\n                document.getElementById('copy-button').addEventListener('click', async () => {\n                    const text = document.getElementById('errorTrace').value;\n                    await navigator.clipboard.writeText(text);\n                    const btn = document.getElementById('copy-button');\n                    btn.textContent = 'Copied!';\n                    setTimeout(() => btn.textContent = 'Copy', 2000);\n                });\n        `;
        return `<!DOCTYPE html>\n            <html>\n                <head>\n                    <meta charset="utf-8" />\n                    <title>StudyJet</title>\n                    <style>\n                    :root {\n                        --deep: #080602;\n                        --shallow: #181412;\n                        --beach: #f1e8e1;\n                        --shore: #b1a8a1;\n                        --accent: #ffa938;\n                        --font-sans: -apple-system, system-ui, BlinkMacSystemFont, sans-serif;\n                        --font-monospace: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n                    }\n\n                    *:not(div,p,span,ul,li,i,span) {\n                        background-color: var(--deep);\n                        color: var(--beach);\n                        font-family: var(--font-sans);\n                    }\n\n                    textarea,\n                    button {\n                        background-color: var(--shallow);\n                        border-radius: 0.6em;\n                        padding: 0.6em;\n                        border: none;\n                        appearance: none;\n                        font-family: var(--font-sans);\n                        color: var(--beach);\n                    }\n\n                    button.primary {\n                        background-color: var(--accent);\n                        color: var(--deep);\n                        font-weight: bold;\n                    }\n\n                    textarea {\n                        resize: none;\n                        height: 20em;\n                        text-align: left;\n                        font-family: var(--font-monospace);\n                    }\n\n                    body {\n                        width: 100vw;\n                        height: 100vh;\n                        justify-content: center;\n                        align-items: center;\n                    }\n\n                    body,\n                    html,\n                    #inner {\n                        display: flex;\n                        align-items: center;\n                        flex-direction: column;\n                        gap: 0.5em;\n                        overflow: hidden;\n                    }\n\n                    #inner {\n                        z-index: 100;\n                    }\n\n                    #cover {\n                        position: absolute;\n                        width: 100%;\n                        height: 100%;\n                        background-color: color-mix(in srgb, var(--deep) 70%, transparent);\n                        z-index: 99;\n                    }\n\n                    #info {\n                        display: flex;\n                        flex-direction: row;\n                        align-items: flex-start;\n                        gap: 1em;\n                    }\n\n                    #version-wrapper {\n                        width: auto;\n                        text-align: right;\n                        position: absolute;\n                        top: 0.5rem;\n                        right: 0.5rem;\n                        font-size: 0.8rem;\n                        color: var(--shore)!important;\n                        i {\n                            background-color: color-mix(in srgb, var(--deep), transparent 50%);\n                            border-radius: 9999px;\n                            padding: 0.2em 0.5em;\n                        }\n                        z-index: 101;\n                    }\n\n                    #errorTrace-wrapper {\n                        position: relative;\n                        width: fit-content;\n                    }\n\n                    #copy-button {\n                        position: absolute;\n                        top: 0.5em;\n                        right: 0.5em;\n                        padding: 0.23em;\n                        cursor: pointer;\n                        opacity: 0;\n                        transition: opacity 0.4s;\n                        font-size: 0.9em;\n                    }\n\n                    #errorTrace-wrapper:hover #copy-button {\n                        opacity: 1;\n                    }\n                    </style>\n                </head>\n                <body>\n                    <div id="cover"></div>\n                    <div id="inner">\n                        <h1 id="errorTitle">Uh oh!</h1>\n                        <p>There was an error loading <b id="fetchedURL"></b></p>\n                        \x3c!-- <p id="errorMessage">Internal Server Error</p> --\x3e\n\n                        <div id="info">\n                            <div id="errorTrace-wrapper">\n                                <textarea id="errorTrace" cols="40" rows="10" readonly></textarea>\n                                <button id="copy-button" class="primary">Copy</button>\n                            </div>\n                            <div id="troubleshooting">\n                                <p>Try:</p>\n                                <ul>\n                                    <li>Checking your internet connection</li>\n                                    <li>Verifying you entered the correct address</li>\n                                    <li>Clearing the site data</li>\n                                    <li>Contacting <b id="hostname"></b>'s administrator</li>\n                                    <li>Verify the server isn't censored</li>\n                                </ul>\n                                <p>If you're the administrator of <b id="hostname"></b>, try:</p>\n                                    <ul>\n                                    <li>Restarting your server</li>\n                                    <li>Updating StudyJet</li>\n                                    <li>Troubleshooting the error on the <a href="https://github.com/MercuryWorkshop/studyjet" target="_blank">GitHub repository</a></li>\n                                </ul>\n                            </div>\n                        </div>\n                        <br>\n                        <button id="reload" class="primary">Reload</button>\n                    </div>\n                    <p id="version-wrapper"><i>StudyJet v<span id="version"></span> (build <span id="build"></span>)</i></p>\n                    <script src="${"data:application/javascript," + encodeURIComponent(_315f273def32)}"><\/script>\n                </body>\n            </html>\n        `;
      }
      function i(_1d3a38243eaf, _1e85f3a9716c) {
        let _315f273def32 = {
          "content-type": "text/html"
        };
        return crossOriginIsolated && (_315f273def32["Cross-Origin-Embedder-Policy"] = "require-corp"), 
        new Response(n(String(_1d3a38243eaf), _1e85f3a9716c), {
          status: 500,
          headers: _315f273def32
        });
      }
      _315f273def32.d(_1e85f3a9716c, {
        B: () => n,
        v: () => i
      });
    },
    1403: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.d(_1e85f3a9716c, {
        H: () => n
      });
      class n {
        handle;
        origin;
        syncToken=0;
        promises={};
        messageChannel=new MessageChannel;
        connected=!1;
        constructor(_1d3a38243eaf, _1e85f3a9716c) {
          this.handle = _1d3a38243eaf, this.origin = _1e85f3a9716c, this.messageChannel.port1.addEventListener("message", _1d3a38243eaf => {
            "studyjet$type" in _1d3a38243eaf.data && ("init" === _1d3a38243eaf.data.studyjet$type ? this.connected = !0 : this.handleMessage(_1d3a38243eaf.data));
          }), this.messageChannel.port1.start(), this.handle.postMessage({
            studyjet$type: "init",
            studyjet$port: this.messageChannel.port2
          }, [ this.messageChannel.port2 ]);
        }
        handleMessage(_1d3a38243eaf) {
          let _1e85f3a9716c = this.promises[_1d3a38243eaf.studyjet$token];
          _1e85f3a9716c && (_1e85f3a9716c(_1d3a38243eaf), delete this.promises[_1d3a38243eaf.studyjet$token]);
        }
        async fetch(_1d3a38243eaf) {
          let _1e85f3a9716c = this.syncToken++, _315f273def32 = {
            studyjet$type: "fetch",
            studyjet$token: _1e85f3a9716c,
            studyjet$request: {
              url: _1d3a38243eaf.url,
              body: _1d3a38243eaf.body,
              headers: Array.from(_1d3a38243eaf.headers.entries()),
              method: _1d3a38243eaf.method,
              mode: _1d3a38243eaf.mode,
              destinitation: _1d3a38243eaf.destination
            }
          }, _4e0975a1482c = _1d3a38243eaf.body ? [ _1d3a38243eaf.body ] : [];
          this.handle.postMessage(_315f273def32, _4e0975a1482c);
          let {studyjet$response: _3bdf3e120ffd} = await new Promise(_1d3a38243eaf => {
            this.promises[_1e85f3a9716c] = _1d3a38243eaf;
          });
          return !!_3bdf3e120ffd && new Response(_3bdf3e120ffd.body, {
            headers: _3bdf3e120ffd.headers,
            status: _3bdf3e120ffd.status,
            statusText: _3bdf3e120ffd.statusText
          });
        }
      }
    },
    5790: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.d(_1e85f3a9716c, {
        Pf: () => m,
        V3: () => S,
        dT: () => w
      });
      var _4e0975a1482c = _315f273def32(5956), _3bdf3e120ffd = _315f273def32(8228), _ee61174f6deb = _315f273def32(6684), _a609a4c7d80c = _315f273def32(1472), _f5fe395ebb04 = _315f273def32(1478), _5a5cce1642e9 = _315f273def32(1427), _64f2b2ef4558 = _315f273def32(37), _611b46e2fd2a = _315f273def32(4435), _e853f5e31d91 = _315f273def32(884), _3c266443ddce = _315f273def32(2614), _a9bd71b7ce50 = _315f273def32(2015), _542e5e0773c9 = _315f273def32(8665).A;
      function g(_1d3a38243eaf) {
        return _1d3a38243eaf.status >= 300 && _1d3a38243eaf.status < 400;
      }
      async function m(_1d3a38243eaf, _1e85f3a9716c) {
        try {
          let _315f273def32, _4e0975a1482c, _f5fe395ebb04 = new URL(_1d3a38243eaf.url);
          if (_f5fe395ebb04.pathname === this.config.files.wasm) return fetch(this.config.files.wasm).then(async _1d3a38243eaf => {
            let _1e85f3a9716c = await _1d3a38243eaf.arrayBuffer(), _315f273def32 = btoa(new Uint8Array(_1e85f3a9716c).reduce((_1d3a38243eaf, _1e85f3a9716c) => (_1d3a38243eaf.push(String.fromCharCode(_1e85f3a9716c)), 
            _1d3a38243eaf), []).join("")), _4e0975a1482c = "";
            return _4e0975a1482c += `if ('document' in self && document.currentScript) { document.currentScript.remove(); }\nself.WASM = '${_315f273def32}';`, 
            new Response(_4e0975a1482c, {
              headers: {
                "content-type": "text/javascript"
              }
            });
          });
          let _611b46e2fd2a = "", _e853f5e31d91 = {};
          for (let [_1d3a38243eaf, _1e85f3a9716c] of [ ..._f5fe395ebb04.searchParams.entries() ]) {
            switch (_1d3a38243eaf) {
             case "type":
              _611b46e2fd2a = _1e85f3a9716c;
              break;

             case "dest":
              break;

             case "topFrame":
              _315f273def32 = _1e85f3a9716c;
              break;

             case "parentFrame":
              _4e0975a1482c = _1e85f3a9716c;
              break;

             default:
              _542e5e0773c9.warn(`${_f5fe395ebb04.href} extraneous query parameter ${_1d3a38243eaf}. Assuming <form> element`), 
              _e853f5e31d91[_1d3a38243eaf] = _1e85f3a9716c;
            }
            _f5fe395ebb04.searchParams.delete(_1d3a38243eaf);
          }
          let _3c266443ddce = new URL((0, _a609a4c7d80c.v2)(_f5fe395ebb04));
          for (let [_1d3a38243eaf, _1e85f3a9716c] of Object.entries(_e853f5e31d91)) _3c266443ddce.searchParams.set(_1d3a38243eaf, _1e85f3a9716c);
          let _a9bd71b7ce50 = {
            origin: _3c266443ddce,
            base: _3c266443ddce,
            topFrameName: _315f273def32,
            parentFrameName: _4e0975a1482c
          };
          if (_f5fe395ebb04.pathname.startsWith(`${this.config.prefix}blob:`) || _f5fe395ebb04.pathname.startsWith(`${this.config.prefix}data:`)) {
            let _1e85f3a9716c, _315f273def32 = _f5fe395ebb04.pathname.substring(this.config.prefix.length);
            _315f273def32.startsWith("blob:") && (_315f273def32 = (0, _a609a4c7d80c.$n)(_315f273def32));
            let _4e0975a1482c = await fetch(_315f273def32, {});
            _4e0975a1482c.finalURL = _315f273def32.startsWith("blob:") ? _315f273def32 : "(data url)", 
            _4e0975a1482c.body && (_1e85f3a9716c = await b(_4e0975a1482c, _a9bd71b7ce50, _1d3a38243eaf.destination, _611b46e2fd2a, this.cookieStore));
            let _3bdf3e120ffd = Object.fromEntries(_4e0975a1482c.headers.entries());
            return crossOriginIsolated && (_3bdf3e120ffd["Cross-Origin-Opener-Policy"] = "same-origin", 
            _3bdf3e120ffd["Cross-Origin-Embedder-Policy"] = "require-corp"), new Response(_1e85f3a9716c, {
              status: _4e0975a1482c.status,
              statusText: _4e0975a1482c.statusText,
              headers: _3bdf3e120ffd
            });
          }
          let _81042f72aa99 = this.serviceWorkers.find(_1d3a38243eaf => _1d3a38243eaf.origin === _3c266443ddce.origin);
          if (_81042f72aa99?.connected && "swruntime" !== _f5fe395ebb04.searchParams.get("from")) {
            let _1e85f3a9716c = await _81042f72aa99.fetch(_1d3a38243eaf);
            if (_1e85f3a9716c) return _1e85f3a9716c;
          }
          if (_3c266443ddce.origin === new URL(_1d3a38243eaf.url).origin) throw Error("attempted to fetch from same origin - this means the site has obtained a reference to the real origin, aborting");
          let _6a3515f0c6e8 = new _5a5cce1642e9.u;
          for (let [_1e85f3a9716c, _315f273def32] of _1d3a38243eaf.headers.entries()) _6a3515f0c6e8.set(_1e85f3a9716c, _315f273def32);
          if (_1e85f3a9716c && new URL(_1e85f3a9716c.url).pathname.startsWith(_64f2b2ef4558.$W.prefix)) {
            let _1d3a38243eaf = new URL((0, _a609a4c7d80c.v2)(_1e85f3a9716c.url));
            _1d3a38243eaf.toString().includes("youtube.com") || (_6a3515f0c6e8.set("Referer", _1d3a38243eaf.href), 
            _6a3515f0c6e8.set("Origin", _1d3a38243eaf.origin));
          }
          let _907a326e7bbc = this.cookieStore.getCookies(_3c266443ddce, !1);
          _907a326e7bbc.length && _6a3515f0c6e8.set("Cookie", _907a326e7bbc);
          let _50214709afdb = !1;
          if ("iframe" === _1d3a38243eaf.destination && "navigate" === _1d3a38243eaf.mode && _1d3a38243eaf.referrer && "no-referrer" !== _1d3a38243eaf.referrer && _1d3a38243eaf.referrer !== location.origin + _64f2b2ef4558.$W.prefix + "no-referrer") {
            let _1e85f3a9716c = _1d3a38243eaf.referrer, _315f273def32 = await self.clients.matchAll({
              type: "window"
            });
            for (;_1e85f3a9716c; ) {
              if (!_1e85f3a9716c.includes(_64f2b2ef4558.$W.prefix)) {
                _50214709afdb = !0;
                break;
              }
              let _1d3a38243eaf = _315f273def32.find(_1d3a38243eaf => _1d3a38243eaf.url === _1e85f3a9716c), _4e0975a1482c = await (0, 
              _ee61174f6deb.Yq)(_1e85f3a9716c);
              if (!_4e0975a1482c || !_4e0975a1482c.referrer) {
                _1d3a38243eaf && _1e85f3a9716c.startsWith(location.origin) && (_50214709afdb = !0);
                break;
              }
              if (_1d3a38243eaf && "nested" === _1d3a38243eaf.frameType) _1e85f3a9716c = _4e0975a1482c.referrer; else break;
            }
          }
          _50214709afdb ? (_6a3515f0c6e8.set("Sec-Fetch-Dest", "document"), _6a3515f0c6e8.set("Sec-Fetch-Mode", "navigate")) : (_6a3515f0c6e8.set("Sec-Fetch-Dest", _1d3a38243eaf.destination || "empty"), 
          _6a3515f0c6e8.set("Sec-Fetch-Mode", _1d3a38243eaf.mode));
          let _4334c681d75c = "none";
          if (_1d3a38243eaf.referrer && "" !== _1d3a38243eaf.referrer && "no-referrer" !== _1d3a38243eaf.referrer && _1d3a38243eaf.referrer !== location.origin + _64f2b2ef4558.$W.prefix + "no-referrer" && _1d3a38243eaf.referrer.includes(_64f2b2ef4558.$W.prefix)) {
            let _1e85f3a9716c = (0, _a609a4c7d80c.v2)(_1d3a38243eaf.referrer);
            if (_1e85f3a9716c) {
              let _1d3a38243eaf = new URL(_1e85f3a9716c);
              _4334c681d75c = await (0, _3bdf3e120ffd.ps)(_a9bd71b7ce50, _1d3a38243eaf, this.client);
            }
          }
          await (0, _ee61174f6deb.rj)(_3c266443ddce.toString(), _1d3a38243eaf.referrer ? (0, 
          _a609a4c7d80c.v2)(_1d3a38243eaf.referrer) : null, _4334c681d75c), _6a3515f0c6e8.set("Sec-Fetch-Site", await (0, 
          _ee61174f6deb.hU)(_3c266443ddce.toString(), _4334c681d75c));
          let _1aee50024aca = new S(_3c266443ddce, _6a3515f0c6e8.headers, _1d3a38243eaf.body, _1d3a38243eaf.method, _1d3a38243eaf.destination, _1e85f3a9716c);
          this.dispatchEvent(_1aee50024aca);
          let _e2f14af45731 = await _1aee50024aca.response || await this.client.fetch(_1aee50024aca.url, {
            method: _1aee50024aca.method,
            body: _1aee50024aca.body,
            headers: _1aee50024aca.requestHeaders,
            credentials: "omit",
            mode: "cors" === _1d3a38243eaf.mode ? _1d3a38243eaf.mode : "same-origin",
            cache: _1d3a38243eaf.cache,
            redirect: "manual",
            duplex: "half"
          });
          return _e2f14af45731.finalURL = _1aee50024aca.url.href, await y(_3c266443ddce, _a9bd71b7ce50, _611b46e2fd2a, _1d3a38243eaf.destination, _1d3a38243eaf.mode, _e2f14af45731, this.cookieStore, _1e85f3a9716c, this.client, this, _1d3a38243eaf.referrer);
        } catch (_1e85f3a9716c) {
          let _315f273def32 = {
            message: _1e85f3a9716c.message,
            url: _1d3a38243eaf.url,
            destination: _1d3a38243eaf.destination
          };
          if (_1e85f3a9716c.cause && (_315f273def32.cause = _1e85f3a9716c.cause, _1e85f3a9716c.cause instanceof AggregateError && (_315f273def32.causeErrors = _1e85f3a9716c.cause.errors)), 
          _1e85f3a9716c.stack && (_315f273def32.stack = _1e85f3a9716c.stack), console.error("ERROR FROM SERVICE WORKER FETCH: ", _315f273def32), 
          console.error(_1e85f3a9716c), ![ "document", "iframe" ].includes(_1d3a38243eaf.destination)) return new Response(void 0, {
            status: 500
          });
          let _3bdf3e120ffd = Object.entries(_315f273def32).map(([_1d3a38243eaf, _1e85f3a9716c]) => `${_1d3a38243eaf.charAt(0).toUpperCase() + _1d3a38243eaf.slice(1)}: ${_1e85f3a9716c}`).join("\n\n");
          return (0, _4e0975a1482c.v)(_3bdf3e120ffd, (0, _a609a4c7d80c.v2)(_1d3a38243eaf.url));
        }
      }
      async function y(_1d3a38243eaf, _1e85f3a9716c, _315f273def32, _4e0975a1482c, _f5fe395ebb04, _5a5cce1642e9, _e853f5e31d91, _3c266443ddce, _a9bd71b7ce50, _542e5e0773c9, _81042f72aa99) {
        let _6a3515f0c6e8, _907a326e7bbc = "navigate" === _f5fe395ebb04 && [ "document", "iframe" ].includes(_4e0975a1482c), _50214709afdb = await (0, 
        _611b46e2fd2a.l)(_5a5cce1642e9.rawHeaders, _1e85f3a9716c, _a9bd71b7ce50, {
          get: _ee61174f6deb.Yq,
          set: _ee61174f6deb.pL
        });
        if (_907a326e7bbc && _50214709afdb["referrer-policy"] && _81042f72aa99 && await (0, 
        _ee61174f6deb.pL)(_1d3a38243eaf.href, _50214709afdb["referrer-policy"], _81042f72aa99), 
        g(_5a5cce1642e9)) {
          let _1e85f3a9716c = new URL((0, _a609a4c7d80c.v2)(_50214709afdb.location));
          await (0, _ee61174f6deb.YH)(_1d3a38243eaf.toString(), _1e85f3a9716c.toString(), _50214709afdb["referrer-policy"]);
          let _4e0975a1482c = await (0, _3bdf3e120ffd.ps)({
            origin: _1e85f3a9716c,
            base: _1e85f3a9716c
          }, _1d3a38243eaf, _a9bd71b7ce50);
          if (await (0, _ee61174f6deb.hU)(_1e85f3a9716c.toString(), _4e0975a1482c), _315f273def32) {
            let _1d3a38243eaf = new URL(_50214709afdb.location);
            _1d3a38243eaf.searchParams.set("type", _315f273def32), _50214709afdb.location = _1d3a38243eaf.href;
          }
        }
        let _4334c681d75c = _50214709afdb["set-cookie"] || [];
        for (let _1e85f3a9716c in _4334c681d75c) if (_3c266443ddce) {
          let _315f273def32 = _542e5e0773c9.dispatch(_3c266443ddce, {
            studyjet$type: "cookie",
            cookie: _1e85f3a9716c,
            url: _1d3a38243eaf.href
          });
          "document" !== _4e0975a1482c && "iframe" !== _4e0975a1482c && await _315f273def32;
        }
        for (let _1e85f3a9716c in await _e853f5e31d91.setCookies(_4334c681d75c instanceof Array ? _4334c681d75c : [ _4334c681d75c ], _1d3a38243eaf), 
        _50214709afdb) Array.isArray(_50214709afdb[_1e85f3a9716c]) && (_50214709afdb[_1e85f3a9716c] = _50214709afdb[_1e85f3a9716c][0]);
        if (function(_1d3a38243eaf, _1e85f3a9716c) {
          if ([ "document", "iframe" ].includes(_1e85f3a9716c)) {
            let _1e85f3a9716c = _1d3a38243eaf["content-disposition"];
            if (_1e85f3a9716c) {
              if ("inline" !== _1e85f3a9716c) return !0;
            } else {
              let _1e85f3a9716c = _1d3a38243eaf["content-type"]?.split(";")[0].trim().toLowerCase();
              if (_1e85f3a9716c && ![ "text/html", "text/plain", "text/css", "text/javascript", "text/xml", "application/javascript", "application/json", "application/xml", "application/pdf" ].includes(_1e85f3a9716c) && !_1e85f3a9716c.startsWith("text") && !_1e85f3a9716c.startsWith("image") && !_1e85f3a9716c.startsWith("font") && !_1e85f3a9716c.startsWith("video")) return !0;
            }
          }
          return !1;
        }(_50214709afdb, _4e0975a1482c) && !g(_5a5cce1642e9)) if ((0, _64f2b2ef4558.U5)("interceptDownloads", _1d3a38243eaf)) {
          if (!_3c266443ddce) throw Error("cant find client");
          let _1e85f3a9716c = null, _315f273def32 = _50214709afdb["content-disposition"];
          if ("string" == typeof _315f273def32) {
            let _1d3a38243eaf = _315f273def32.match(/filename=["']?([^"';\n]*)["']?/i);
            _1d3a38243eaf && _1d3a38243eaf[1] && (_1e85f3a9716c = _1d3a38243eaf[1]);
          }
          let _4e0975a1482c = _50214709afdb["content-length"], _3bdf3e120ffd = await clients.matchAll({});
          if ((_3bdf3e120ffd = _3bdf3e120ffd.filter(_1d3a38243eaf => !_1d3a38243eaf.url.includes(_64f2b2ef4558.$W.prefix))).length < 1) throw Error("couldn't find a controller client to dispatch download to");
          let _ee61174f6deb = {
            filename: _1e85f3a9716c,
            url: _1d3a38243eaf.href,
            type: _50214709afdb["content-type"],
            body: _5a5cce1642e9.body,
            length: Number(_4e0975a1482c)
          };
          _3bdf3e120ffd[0].postMessage({
            studyjet$type: "download",
            download: _ee61174f6deb
          }, [ _5a5cce1642e9.body ]), await new Promise(() => {});
        } else {
          let _1d3a38243eaf = _50214709afdb["content-disposition"];
          if (!/\s*?((inline|attachment);\s*?)filename=/i.test(_1d3a38243eaf)) {
            let _1e85f3a9716c = /^\s*?attachment/i.test(_1d3a38243eaf) ? "attachment" : "inline", [_315f273def32] = new URL(_5a5cce1642e9.finalURL).pathname.split("/").slice(-1);
            _50214709afdb["content-disposition"] = `${_1e85f3a9716c}; filename=${JSON.stringify(_315f273def32)}`;
          }
        }
        _5a5cce1642e9.body && !g(_5a5cce1642e9) && (_6a3515f0c6e8 = await b(_5a5cce1642e9, _1e85f3a9716c, _4e0975a1482c, _315f273def32, _e853f5e31d91)), 
        "text/event-stream" === _50214709afdb.accept && (_50214709afdb["content-type"] = "text/event-stream"), 
        delete _50214709afdb["permissions-policy"], crossOriginIsolated && [ "document", "iframe", "worker", "sharedworker", "style", "script" ].includes(_4e0975a1482c) && (_50214709afdb["Cross-Origin-Embedder-Policy"] = "require-corp", 
        _50214709afdb["Cross-Origin-Opener-Policy"] = "same-origin");
        let _1aee50024aca = new w(_6a3515f0c6e8, _50214709afdb, _5a5cce1642e9.status, _5a5cce1642e9.statusText, _4e0975a1482c, _1d3a38243eaf, _5a5cce1642e9, _3c266443ddce);
        return _542e5e0773c9.dispatchEvent(_1aee50024aca), g(_5a5cce1642e9) || await (0, 
        _ee61174f6deb.Sn)(_1d3a38243eaf.toString()), new Response(_1aee50024aca.responseBody, {
          headers: _1aee50024aca.responseHeaders,
          status: _1aee50024aca.status,
          statusText: _1aee50024aca.statusText
        });
      }
      async function b(_1d3a38243eaf, _1e85f3a9716c, _315f273def32, _4e0975a1482c, _3bdf3e120ffd) {
        switch (_315f273def32) {
         case "iframe":
         case "document":
          if (_1d3a38243eaf.headers.get("content-type")?.startsWith("text/html")) return (0, 
          _e853f5e31d91.Qs)(await _1d3a38243eaf.text(), _3bdf3e120ffd, _1e85f3a9716c, !0);
          return _1d3a38243eaf.body;

         case "script":
          return (0, _f5fe395ebb04.o)(new Uint8Array(await _1d3a38243eaf.arrayBuffer()), _1d3a38243eaf.finalURL, _1e85f3a9716c, "module" === _4e0975a1482c);

         case "style":
          return (0, _3c266443ddce.s)(await _1d3a38243eaf.text(), _1e85f3a9716c);

         case "sharedworker":
         case "worker":
          return (0, _a9bd71b7ce50.i)(new Uint8Array(await _1d3a38243eaf.arrayBuffer()), _4e0975a1482c, _1d3a38243eaf.finalURL, _1e85f3a9716c);

         default:
          return _1d3a38243eaf.body;
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
        constructor(_1d3a38243eaf, _1e85f3a9716c, _315f273def32, _4e0975a1482c, _3bdf3e120ffd, _ee61174f6deb, _a609a4c7d80c, _f5fe395ebb04) {
          super("handleResponse"), this.responseBody = _1d3a38243eaf, this.responseHeaders = _1e85f3a9716c, 
          this.status = _315f273def32, this.statusText = _4e0975a1482c, this.destination = _3bdf3e120ffd, 
          this.url = _ee61174f6deb, this.rawResponse = _a609a4c7d80c, this.client = _f5fe395ebb04;
        }
      }
      class S extends Event {
        url;
        requestHeaders;
        body;
        method;
        destination;
        client;
        constructor(_1d3a38243eaf, _1e85f3a9716c, _315f273def32, _4e0975a1482c, _3bdf3e120ffd, _ee61174f6deb) {
          super("request"), this.url = _1d3a38243eaf, this.requestHeaders = _1e85f3a9716c, 
          this.body = _315f273def32, this.method = _4e0975a1482c, this.destination = _3bdf3e120ffd, 
          this.client = _ee61174f6deb;
        }
        response;
      }
    },
    7510: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.r(_1e85f3a9716c), _315f273def32.d(_1e85f3a9716c, {
        FakeServiceWorker: () => _4e0975a1482c.H,
        StudyJetHandleResponseEvent: () => _3bdf3e120ffd.dT,
        StudyJetRequestEvent: () => _3bdf3e120ffd.V3,
        StudyJetServiceWorker: () => d,
        errorTemplate: () => _611b46e2fd2a.B,
        handleFetch: () => _3bdf3e120ffd.Pf,
        renderError: () => _611b46e2fd2a.v
      });
      var _4e0975a1482c = _315f273def32(1403), _3bdf3e120ffd = _315f273def32(5790), _ee61174f6deb = _315f273def32(4110), _a609a4c7d80c = _315f273def32(1561), _f5fe395ebb04 = _315f273def32(3831), _5a5cce1642e9 = _315f273def32(6570), _64f2b2ef4558 = _315f273def32(37), _611b46e2fd2a = _315f273def32(5956);
      class d extends EventTarget {
        client;
        config;
        syncPool={};
        synctoken=0;
        cookieStore=new _f5fe395ebb04.k;
        serviceWorkers=[];
        constructor() {
          super(), this.client = new _ee61174f6deb.Ay, (async () => {
            let _1d3a38243eaf = await (0, _5a5cce1642e9.P2)("@d7a6431b92e", 1), _1e85f3a9716c = await _1d3a38243eaf.get("cookies", "cookies");
            _1e85f3a9716c && this.cookieStore.load(_1e85f3a9716c);
          })(), addEventListener("message", async ({data: _1d3a38243eaf}) => {
            if ("studyjet$type" in _1d3a38243eaf) {
              if ("studyjet$token" in _1d3a38243eaf) {
                let _1e85f3a9716c = this.syncPool[_1d3a38243eaf.studyjet$token];
                delete this.syncPool[_1d3a38243eaf.studyjet$token], _1e85f3a9716c(_1d3a38243eaf);
                return;
              }
              if ("registerServiceWorker" === _1d3a38243eaf.studyjet$type) return void this.serviceWorkers.push(new _4e0975a1482c.H(_1d3a38243eaf.port, _1d3a38243eaf.origin));
              if ("cookie" === _1d3a38243eaf.studyjet$type) {
                this.cookieStore.setCookies([ _1d3a38243eaf.cookie ], new URL(_1d3a38243eaf.url));
                let _1e85f3a9716c = await (0, _5a5cce1642e9.P2)("@d7a6431b92e", 1);
                await _1e85f3a9716c.put("cookies", JSON.parse(this.cookieStore.dump()), "cookies");
              }
              "loadConfig" === _1d3a38243eaf.studyjet$type && (this.config = _1d3a38243eaf.config);
            }
          });
        }
        async dispatch(_1d3a38243eaf, _1e85f3a9716c) {
          let _315f273def32, _4e0975a1482c = this.synctoken++, _3bdf3e120ffd = new Promise(_1d3a38243eaf => _315f273def32 = _1d3a38243eaf);
          return this.syncPool[_4e0975a1482c] = _315f273def32, _1e85f3a9716c.studyjet$token = _4e0975a1482c, 
          _1d3a38243eaf.postMessage(_1e85f3a9716c), await _3bdf3e120ffd;
        }
        async loadConfig() {
          if (this.config) return;
          let _1d3a38243eaf = await (0, _5a5cce1642e9.P2)("@d7a6431b92e", 1);
          this.config = await _1d3a38243eaf.get("config", "config"), this.config && ((0, _64f2b2ef4558.Nk)(this.config), 
          await (0, _a609a4c7d80c.n$)());
        }
        route({request: _1d3a38243eaf}) {
          return !!_1d3a38243eaf.url.startsWith(location.origin + this.config.prefix) || !!_1d3a38243eaf.url.startsWith(location.origin + this.config.files.wasm);
        }
        async fetch({request: _1d3a38243eaf, clientId: _1e85f3a9716c}) {
          this.config || await this.loadConfig();
          let _315f273def32 = await self.clients.get(_1e85f3a9716c);
          return _3bdf3e120ffd.Pf.call(this, _1d3a38243eaf, _315f273def32);
        }
      }
    },
    4110: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.d(_1e85f3a9716c, {
        Ay: () => S,
        DD: () => w
      });
      let _4e0975a1482c = globalThis.fetch, _3bdf3e120ffd = globalThis.SharedWorker, _ee61174f6deb = globalThis.localStorage, _a609a4c7d80c = globalThis.navigator.serviceWorker, _f5fe395ebb04 = MessagePort.prototype.postMessage, _5a5cce1642e9 = {
        prototype: {
          send: WebSocket.prototype.send
        },
        CLOSED: WebSocket.CLOSED,
        CLOSING: WebSocket.CLOSING,
        CONNECTING: WebSocket.CONNECTING,
        OPEN: WebSocket.OPEN
      };
      async function c() {
        let _1d3a38243eaf = Promise.race([ Promise.any((await self.clients.matchAll({
          type: "window",
          includeUncontrolled: !0
        })).map(async _1d3a38243eaf => {
          let _1e85f3a9716c, _315f273def32 = await (_1e85f3a9716c = new MessageChannel, new Promise(_315f273def32 => {
            _1d3a38243eaf.postMessage({
              type: "getPort",
              port: _1e85f3a9716c.port2
            }, [ _1e85f3a9716c.port2 ]), _1e85f3a9716c.port1.onmessage = _1d3a38243eaf => {
              _315f273def32(_1d3a38243eaf.data);
            };
          }));
          return await u(_315f273def32), _315f273def32;
        })), new Promise((_1d3a38243eaf, _1e85f3a9716c) => setTimeout(_1e85f3a9716c, 1e3, TypeError("timeout"))) ]);
        try {
          return await _1d3a38243eaf;
        } catch (_1d3a38243eaf) {
          if (_1d3a38243eaf instanceof AggregateError) throw console.error("bare-mux: failed to get a bare-mux SharedWorker MessagePort as all clients returned an invalid MessagePort."), 
          Error("All clients returned an invalid MessagePort.", {
            cause: _1d3a38243eaf
          });
          return console.warn("bare-mux: failed to get a bare-mux SharedWorker MessagePort within 1s, retrying"), 
          await c();
        }
      }
      function u(_1d3a38243eaf) {
        let _1e85f3a9716c = new MessageChannel, _315f273def32 = new Promise((_1d3a38243eaf, _315f273def32) => {
          _1e85f3a9716c.port1.onmessage = _1e85f3a9716c => {
            "pong" === _1e85f3a9716c.data.type && _1d3a38243eaf();
          }, setTimeout(_315f273def32, 1500);
        });
        return _f5fe395ebb04.call(_1d3a38243eaf, {
          message: {
            type: "ping"
          },
          port: _1e85f3a9716c.port2
        }, [ _1e85f3a9716c.port2 ]), _315f273def32;
      }
      function d(_1d3a38243eaf, _1e85f3a9716c) {
        let _315f273def32 = new _3bdf3e120ffd(_1d3a38243eaf, "ridgewood-stem-worker");
        return _1e85f3a9716c && _a609a4c7d80c.addEventListener("message", _1e85f3a9716c => {
          if ("getPort" === _1e85f3a9716c.data.type && _1e85f3a9716c.data.port) {
            console.debug("bare-mux: recieved request for port from sw");
            let _315f273def32 = new _3bdf3e120ffd(_1d3a38243eaf, "ridgewood-stem-worker");
            _f5fe395ebb04.call(_1e85f3a9716c.data.port, _315f273def32.port, [ _315f273def32.port ]);
          }
        }), _315f273def32.port;
      }
      let _64f2b2ef4558 = null;
      class p {
        channel;
        port;
        workerPath;
        constructor(_1d3a38243eaf) {
          this.channel = new BroadcastChannel("bare-mux"), _1d3a38243eaf instanceof MessagePort || _1d3a38243eaf instanceof Promise ? this.port = _1d3a38243eaf : this.createChannel(_1d3a38243eaf, !0);
        }
        createChannel(_1d3a38243eaf, _1e85f3a9716c) {
          if (self.clients) this.port = c(), this.channel.onmessage = _1d3a38243eaf => {
            "refreshPort" === _1d3a38243eaf.data.type && (this.port = c());
          }; else if (_1d3a38243eaf && SharedWorker) {
            if (!_1d3a38243eaf.startsWith("/") && !_1d3a38243eaf.includes(":")) throw Error("Invalid URL. Must be absolute or start at the root.");
            this.port = d(_1d3a38243eaf, _1e85f3a9716c), console.debug("bare-mux: setting localStorage bare-mux-path to", _1d3a38243eaf), 
            _ee61174f6deb["bare-mux-path"] = _1d3a38243eaf;
          } else {
            if (!SharedWorker) throw Error("Unable to get a channel to the SharedWorker.");
            {
              let _1d3a38243eaf = _ee61174f6deb["bare-mux-path"];
              if (console.debug("bare-mux: got localStorage bare-mux-path:", _1d3a38243eaf), !_1d3a38243eaf) throw Error("Unable to get bare-mux workerPath from localStorage.");
              this.port = d(_1d3a38243eaf, _1e85f3a9716c);
            }
          }
        }
        async sendMessage(_1d3a38243eaf, _1e85f3a9716c) {
          this.port instanceof Promise && (this.port = await this.port);
          try {
            await u(this.port);
          } catch {
            return console.warn("bare-mux: Failed to get a ping response from the worker within 1.5s. Assuming port is dead."), 
            this.createChannel(), await this.sendMessage(_1d3a38243eaf, _1e85f3a9716c);
          }
          let _315f273def32 = new MessageChannel, _4e0975a1482c = [ _315f273def32.port2, ..._1e85f3a9716c || [] ], _3bdf3e120ffd = new Promise((_1d3a38243eaf, _1e85f3a9716c) => {
            _315f273def32.port1.onmessage = _315f273def32 => {
              let _4e0975a1482c = _315f273def32.data;
              "error" === _4e0975a1482c.type ? _1e85f3a9716c(_4e0975a1482c.error) : _1d3a38243eaf(_4e0975a1482c);
            };
          });
          return _f5fe395ebb04.call(this.port, {
            message: _1d3a38243eaf,
            port: _315f273def32.port2
          }, _4e0975a1482c), await _3bdf3e120ffd;
        }
      }
      class f extends EventTarget {
        protocols;
        url;
        readyState=_5a5cce1642e9.CONNECTING;
        channel;
        constructor(_1d3a38243eaf, _1e85f3a9716c = [], _315f273def32, _4e0975a1482c) {
          super(), this.protocols = _1e85f3a9716c, this.url = _1d3a38243eaf.toString(), this.protocols = _1e85f3a9716c;
          const i = _1d3a38243eaf => {
            this.protocols = _1d3a38243eaf, this.readyState = _5a5cce1642e9.OPEN;
            let _1e85f3a9716c = new Event("open");
            this.dispatchEvent(_1e85f3a9716c);
          }, a = async _1d3a38243eaf => {
            let _1e85f3a9716c = new MessageEvent("message", {
              data: _1d3a38243eaf
            });
            this.dispatchEvent(_1e85f3a9716c);
          }, s = (_1d3a38243eaf, _1e85f3a9716c) => {
            this.readyState = _5a5cce1642e9.CLOSED;
            let _315f273def32 = new CloseEvent("close", {
              code: _1d3a38243eaf,
              reason: _1e85f3a9716c
            });
            this.dispatchEvent(_315f273def32);
          }, o = () => {
            this.readyState = _5a5cce1642e9.CLOSED;
            let _1d3a38243eaf = new Event("error");
            this.dispatchEvent(_1d3a38243eaf);
          };
          this.channel = new MessageChannel, this.channel.port1.onmessage = _1d3a38243eaf => {
            "open" === _1d3a38243eaf.data.type ? i(_1d3a38243eaf.data.args[0]) : "message" === _1d3a38243eaf.data.type ? a(_1d3a38243eaf.data.args[0]) : "close" === _1d3a38243eaf.data.type ? s(_1d3a38243eaf.data.args[0], _1d3a38243eaf.data.args[1]) : "error" === _1d3a38243eaf.data.type && o();
          }, _315f273def32.sendMessage({
            type: "websocket",
            websocket: {
              url: _1d3a38243eaf.toString(),
              protocols: _1e85f3a9716c,
              requestHeaders: _4e0975a1482c,
              channel: this.channel.port2
            }
          }, [ this.channel.port2 ]);
        }
        send(..._1d3a38243eaf) {
          if (this.readyState === _5a5cce1642e9.CONNECTING) throw new DOMException("Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.");
          let _1e85f3a9716c = _1d3a38243eaf[0];
          _1e85f3a9716c.buffer && (_1e85f3a9716c = _1e85f3a9716c.buffer.slice(_1e85f3a9716c.byteOffset, _1e85f3a9716c.byteOffset + _1e85f3a9716c.byteLength)), 
          _f5fe395ebb04.call(this.channel.port1, {
            type: "data",
            data: _1e85f3a9716c
          }, _1e85f3a9716c instanceof ArrayBuffer ? [ _1e85f3a9716c ] : []);
        }
        close(_1d3a38243eaf, _1e85f3a9716c) {
          _f5fe395ebb04.call(this.channel.port1, {
            type: "close",
            closeCode: _1d3a38243eaf,
            closeReason: _1e85f3a9716c
          });
        }
      }
      function g(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
        console.error(`error while processing '${_315f273def32}': `, _1e85f3a9716c), _1d3a38243eaf.postMessage({
          type: "error",
          error: _1e85f3a9716c
        });
      }
      let _611b46e2fd2a = [ "ws:", "wss:" ], _e853f5e31d91 = [ 101, 204, 205, 304 ], _3c266443ddce = [ 301, 302, 303, 307, 308 ];
      class w {
        worker;
        constructor(_1d3a38243eaf) {
          this.worker = new p(_1d3a38243eaf);
        }
        async getTransport() {
          return (await this.worker.sendMessage({
            type: "get"
          })).name;
        }
        async setTransport(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
          await this.setManualTransport(`\n\t\t\tconst { default: BareTransport } = await import("${_1d3a38243eaf}");\n\t\t\treturn [BareTransport, "${_1d3a38243eaf}"];\n\t\t`, _1e85f3a9716c, _315f273def32);
        }
        async setManualTransport(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
          if ("bare-mux-remote" === _1d3a38243eaf) throw Error("Use setRemoteTransport.");
          await this.worker.sendMessage({
            type: "set",
            client: {
              function: _1d3a38243eaf,
              args: _1e85f3a9716c
            }
          }, _315f273def32);
        }
        async setRemoteTransport(_1d3a38243eaf, _1e85f3a9716c) {
          let _315f273def32 = new MessageChannel;
          _315f273def32.port1.onmessage = async _1e85f3a9716c => {
            let _315f273def32 = _1e85f3a9716c.data.port, _4e0975a1482c = _1e85f3a9716c.data.message;
            if ("fetch" === _4e0975a1482c.type) try {
              _1d3a38243eaf.ready || await _1d3a38243eaf.init(), await async function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
                let _4e0975a1482c = await _315f273def32.request(new URL(_1d3a38243eaf.fetch.remote), _1d3a38243eaf.fetch.method, _1d3a38243eaf.fetch.body, _1d3a38243eaf.fetch.headers, null);
                if (!function() {
                  if (null === _64f2b2ef4558) {
                    let _1d3a38243eaf, _1e85f3a9716c = new MessageChannel, _315f273def32 = new ReadableStream;
                    try {
                      _f5fe395ebb04.call(_1e85f3a9716c.port1, _315f273def32, [ _315f273def32 ]), _1d3a38243eaf = !0;
                    } catch (_1e85f3a9716c) {
                      _1d3a38243eaf = !1;
                    }
                    return _64f2b2ef4558 = _1d3a38243eaf, _1d3a38243eaf;
                  }
                  return _64f2b2ef4558;
                }() && _4e0975a1482c.body instanceof ReadableStream) {
                  let _1d3a38243eaf = new Response(_4e0975a1482c.body);
                  _4e0975a1482c.body = await _1d3a38243eaf.arrayBuffer();
                }
                _4e0975a1482c.body instanceof ReadableStream || _4e0975a1482c.body instanceof ArrayBuffer ? _f5fe395ebb04.call(_1e85f3a9716c, {
                  type: "fetch",
                  fetch: _4e0975a1482c
                }, [ _4e0975a1482c.body ]) : _f5fe395ebb04.call(_1e85f3a9716c, {
                  type: "fetch",
                  fetch: _4e0975a1482c
                });
              }(_4e0975a1482c, _315f273def32, _1d3a38243eaf);
            } catch (_1d3a38243eaf) {
              g(_315f273def32, _1d3a38243eaf, "fetch");
            } else if ("websocket" === _4e0975a1482c.type) try {
              _1d3a38243eaf.ready || await _1d3a38243eaf.init(), await async function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
                let [_4e0975a1482c, _3bdf3e120ffd] = _315f273def32.connect(new URL(_1d3a38243eaf.websocket.url), _1d3a38243eaf.websocket.protocols, _1d3a38243eaf.websocket.requestHeaders, _1e85f3a9716c => {
                  _f5fe395ebb04.call(_1d3a38243eaf.websocket.channel, {
                    type: "open",
                    args: [ _1e85f3a9716c ]
                  });
                }, _1e85f3a9716c => {
                  _1e85f3a9716c instanceof ArrayBuffer ? _f5fe395ebb04.call(_1d3a38243eaf.websocket.channel, {
                    type: "message",
                    args: [ _1e85f3a9716c ]
                  }, [ _1e85f3a9716c ]) : _f5fe395ebb04.call(_1d3a38243eaf.websocket.channel, {
                    type: "message",
                    args: [ _1e85f3a9716c ]
                  });
                }, (_1e85f3a9716c, _315f273def32) => {
                  _f5fe395ebb04.call(_1d3a38243eaf.websocket.channel, {
                    type: "close",
                    args: [ _1e85f3a9716c, _315f273def32 ]
                  });
                }, _1e85f3a9716c => {
                  _f5fe395ebb04.call(_1d3a38243eaf.websocket.channel, {
                    type: "error",
                    args: [ _1e85f3a9716c ]
                  });
                });
                _1d3a38243eaf.websocket.channel.onmessage = _1d3a38243eaf => {
                  "data" === _1d3a38243eaf.data.type ? _4e0975a1482c(_1d3a38243eaf.data.data) : "close" === _1d3a38243eaf.data.type && _3bdf3e120ffd(_1d3a38243eaf.data.closeCode, _1d3a38243eaf.data.closeReason);
                }, _f5fe395ebb04.call(_1e85f3a9716c, {
                  type: "websocket"
                });
              }(_4e0975a1482c, _315f273def32, _1d3a38243eaf);
            } catch (_1d3a38243eaf) {
              g(_315f273def32, _1d3a38243eaf, "websocket");
            }
          }, await this.worker.sendMessage({
            type: "set",
            client: {
              function: "bare-mux-remote",
              args: [ _315f273def32.port2, _1e85f3a9716c ]
            }
          }, [ _315f273def32.port2 ]);
        }
        getInnerPort() {
          return this.worker.port;
        }
      }
      class S {
        worker;
        constructor(_1d3a38243eaf) {
          this.worker = new p(_1d3a38243eaf);
        }
        createWebSocket(_1d3a38243eaf, _1e85f3a9716c = [], _315f273def32, _4e0975a1482c) {
          try {
            _1d3a38243eaf = new URL(_1d3a38243eaf);
          } catch (_1e85f3a9716c) {
            throw new DOMException(`Faiiled to construct 'WebSocket': The URL '${_1d3a38243eaf}' is invalid.`);
          }
          if (!_611b46e2fd2a.includes(_1d3a38243eaf.protocol)) throw new DOMException(`Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '${_1d3a38243eaf.protocol}' is not allowed.`);
          for (let _1d3a38243eaf of (Array.isArray(_1e85f3a9716c) || (_1e85f3a9716c = [ _1e85f3a9716c ]), 
          _1e85f3a9716c = _1e85f3a9716c.map(String))) if (!function(_1d3a38243eaf) {
            for (let _1e85f3a9716c = 0; _1e85f3a9716c < _1d3a38243eaf.length; _1e85f3a9716c++) {
              let _315f273def32 = _1d3a38243eaf[_1e85f3a9716c];
              if (!"!#$%&'*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz|~".includes(_315f273def32)) return !1;
            }
            return !0;
          }(_1d3a38243eaf)) throw new DOMException(`Failed to construct 'WebSocket': The subprotocol '${_1d3a38243eaf}' is invalid.`);
          return _4e0975a1482c = _4e0975a1482c || {}, new f(_1d3a38243eaf, _1e85f3a9716c, this.worker, _4e0975a1482c);
        }
        async fetch(_1d3a38243eaf, _1e85f3a9716c) {
          let _315f273def32 = new Request(_1d3a38243eaf, _1e85f3a9716c), _3bdf3e120ffd = _1e85f3a9716c?.headers || _315f273def32.headers, _ee61174f6deb = _3bdf3e120ffd instanceof Headers ? Object.fromEntries(_3bdf3e120ffd) : _3bdf3e120ffd, _a609a4c7d80c = _315f273def32.body, _f5fe395ebb04 = new URL(_315f273def32.url);
          if (_f5fe395ebb04.protocol.startsWith("blob:")) {
            let _1d3a38243eaf = await _4e0975a1482c(_f5fe395ebb04), _1e85f3a9716c = new Response(_1d3a38243eaf.body, _1d3a38243eaf);
            return _1e85f3a9716c.rawHeaders = Object.fromEntries(_1d3a38243eaf.headers), _1e85f3a9716c.rawResponse = {
              body: _1d3a38243eaf.body,
              headers: Object.fromEntries(_1d3a38243eaf.headers),
              status: _1d3a38243eaf.status,
              statusText: _1d3a38243eaf.statusText
            }, _1e85f3a9716c.finalURL = _f5fe395ebb04.toString(), _1e85f3a9716c;
          }
          for (let _1d3a38243eaf = 0; ;_1d3a38243eaf++) {
            let _4e0975a1482c = (await this.worker.sendMessage({
              type: "fetch",
              fetch: {
                remote: _f5fe395ebb04.toString(),
                method: _315f273def32.method,
                headers: _ee61174f6deb,
                body: _a609a4c7d80c || void 0
              }
            }, _a609a4c7d80c ? [ _a609a4c7d80c ] : [])).fetch, _3bdf3e120ffd = new Response(_e853f5e31d91.includes(_4e0975a1482c.status) ? void 0 : _4e0975a1482c.body, {
              headers: new Headers(_4e0975a1482c.headers),
              status: _4e0975a1482c.status,
              statusText: _4e0975a1482c.statusText
            });
            _3bdf3e120ffd.rawHeaders = _4e0975a1482c.headers, _3bdf3e120ffd.rawResponse = _4e0975a1482c, 
            _3bdf3e120ffd.finalURL = _f5fe395ebb04.toString();
            let _5a5cce1642e9 = _1e85f3a9716c?.redirect || _315f273def32.redirect;
            if (!_3c266443ddce.includes(_3bdf3e120ffd.status)) return _3bdf3e120ffd;
            switch (_5a5cce1642e9) {
             case "follow":
              {
                let _1e85f3a9716c = _3bdf3e120ffd.headers.get("location");
                if (20 > _1d3a38243eaf && null !== _1e85f3a9716c) {
                  _f5fe395ebb04 = new URL(_1e85f3a9716c, _f5fe395ebb04);
                  continue;
                }
                throw TypeError("Failed to fetch");
              }

             case "error":
              throw TypeError("Failed to fetch");

             case "manual":
              return _3bdf3e120ffd;
            }
          }
        }
      }
      console.debug("bare-mux: running v2.1.9 (build dc9dc6e)");
    },
    8832: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.d(_1e85f3a9716c, {
        H: () => _4e0975a1482c,
        L: () => _3bdf3e120ffd
      });
      let _4e0975a1482c = new Map([ "altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath" ].map(_1d3a38243eaf => [ _1d3a38243eaf.toLowerCase(), _1d3a38243eaf ])), _3bdf3e120ffd = new Map([ "definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan" ].map(_1d3a38243eaf => [ _1d3a38243eaf.toLowerCase(), _1d3a38243eaf ]));
    },
    6498: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.d(_1e85f3a9716c, {
        A: () => _5a5cce1642e9
      });
      var _4e0975a1482c = _315f273def32(2743), _3bdf3e120ffd = _315f273def32(8466), _ee61174f6deb = _315f273def32(8832);
      let _a609a4c7d80c = new Set([ "style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript" ]);
      function o(_1d3a38243eaf) {
        return _1d3a38243eaf.replace(/"/g, "&quot;");
      }
      let _f5fe395ebb04 = new Set([ "area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr" ]), _5a5cce1642e9 = function e(_1d3a38243eaf, _1e85f3a9716c = {}) {
        let _315f273def32 = "length" in _1d3a38243eaf ? _1d3a38243eaf : [ _1d3a38243eaf ], _5a5cce1642e9 = "";
        for (let _1d3a38243eaf = 0; _1d3a38243eaf < _315f273def32.length; _1d3a38243eaf++) _5a5cce1642e9 += function(_1d3a38243eaf, _1e85f3a9716c) {
          var _315f273def32, _5a5cce1642e9, _e853f5e31d91;
          switch (_1d3a38243eaf.type) {
           case _4e0975a1482c.bL:
            return e(_1d3a38243eaf.children, _1e85f3a9716c);

           case _4e0975a1482c.fl:
           case _4e0975a1482c.WL:
            return _315f273def32 = _1d3a38243eaf, `<${_315f273def32.data}>`;

           case _4e0975a1482c.Mw:
            return _5a5cce1642e9 = _1d3a38243eaf, `\x3c!--${_5a5cce1642e9.data}--\x3e`;

           case _4e0975a1482c.KB:
            return _e853f5e31d91 = _1d3a38243eaf, `<![CDATA[${_e853f5e31d91.children[0].data}]]>`;

           case _4e0975a1482c.eF:
           case _4e0975a1482c.OF:
           case _4e0975a1482c.vw:
            return function(_1d3a38243eaf, _1e85f3a9716c) {
              var _315f273def32;
              "foreign" === _1e85f3a9716c.xmlMode && (_1d3a38243eaf.name = null != (_315f273def32 = _ee61174f6deb.H.get(_1d3a38243eaf.name)) ? _315f273def32 : _1d3a38243eaf.name, 
              _1d3a38243eaf.parent && _64f2b2ef4558.has(_1d3a38243eaf.parent.name) && (_1e85f3a9716c = {
                ..._1e85f3a9716c,
                xmlMode: !1
              })), !_1e85f3a9716c.xmlMode && _611b46e2fd2a.has(_1d3a38243eaf.name) && (_1e85f3a9716c = {
                ..._1e85f3a9716c,
                xmlMode: "foreign"
              });
              let _4e0975a1482c = `<${_1d3a38243eaf.name}`, _a609a4c7d80c = function(_1d3a38243eaf, _1e85f3a9716c) {
                var _315f273def32;
                if (!_1d3a38243eaf) return;
                let _4e0975a1482c = (null != (_315f273def32 = _1e85f3a9716c.encodeEntities) ? _315f273def32 : _1e85f3a9716c.decodeEntities) === !1 ? o : _1e85f3a9716c.xmlMode || "utf8" !== _1e85f3a9716c.encodeEntities ? _3bdf3e120ffd.WY : _3bdf3e120ffd.Gj;
                return Object.keys(_1d3a38243eaf).map(_315f273def32 => {
                  var _3bdf3e120ffd, _a609a4c7d80c;
                  let _f5fe395ebb04 = null != (_3bdf3e120ffd = _1d3a38243eaf[_315f273def32]) ? _3bdf3e120ffd : "";
                  return ("foreign" === _1e85f3a9716c.xmlMode && (_315f273def32 = null != (_a609a4c7d80c = _ee61174f6deb.L.get(_315f273def32)) ? _a609a4c7d80c : _315f273def32), 
                  _1e85f3a9716c.emptyAttrs || _1e85f3a9716c.xmlMode || "" !== _f5fe395ebb04) ? `${_315f273def32}="${_4e0975a1482c(_f5fe395ebb04)}"` : _315f273def32;
                }).join(" ");
              }(_1d3a38243eaf.attribs, _1e85f3a9716c);
              return _a609a4c7d80c && (_4e0975a1482c += ` ${_a609a4c7d80c}`), 0 === _1d3a38243eaf.children.length && (_1e85f3a9716c.xmlMode ? !1 !== _1e85f3a9716c.selfClosingTags : _1e85f3a9716c.selfClosingTags && _f5fe395ebb04.has(_1d3a38243eaf.name)) ? (_1e85f3a9716c.xmlMode || (_4e0975a1482c += " "), 
              _4e0975a1482c += "/>") : (_4e0975a1482c += ">", _1d3a38243eaf.children.length > 0 && (_4e0975a1482c += e(_1d3a38243eaf.children, _1e85f3a9716c)), 
              (_1e85f3a9716c.xmlMode || !_f5fe395ebb04.has(_1d3a38243eaf.name)) && (_4e0975a1482c += `</${_1d3a38243eaf.name}>`)), 
              _4e0975a1482c;
            }(_1d3a38243eaf, _1e85f3a9716c);

           case _4e0975a1482c.EY:
            return function(_1d3a38243eaf, _1e85f3a9716c) {
              var _315f273def32;
              let _4e0975a1482c = _1d3a38243eaf.data || "";
              return (null != (_315f273def32 = _1e85f3a9716c.encodeEntities) ? _315f273def32 : _1e85f3a9716c.decodeEntities) === !1 || !_1e85f3a9716c.xmlMode && _1d3a38243eaf.parent && _a609a4c7d80c.has(_1d3a38243eaf.parent.name) || (_4e0975a1482c = _1e85f3a9716c.xmlMode || "utf8" !== _1e85f3a9716c.encodeEntities ? (0, 
              _3bdf3e120ffd.WY)(_4e0975a1482c) : (0, _3bdf3e120ffd.X1)(_4e0975a1482c)), _4e0975a1482c;
            }(_1d3a38243eaf, _1e85f3a9716c);
          }
        }(_315f273def32[_1d3a38243eaf], _1e85f3a9716c);
        return _5a5cce1642e9;
      }, _64f2b2ef4558 = new Set([ "mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title" ]), _611b46e2fd2a = new Set([ "svg", "math" ]);
    },
    2743: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      var _4e0975a1482c, _3bdf3e120ffd;
      function a(_1d3a38243eaf) {
        return _1d3a38243eaf.type === _4e0975a1482c.Tag || _1d3a38243eaf.type === _4e0975a1482c.Script || _1d3a38243eaf.type === _4e0975a1482c.Style;
      }
      _315f273def32.d(_1e85f3a9716c, {
        EY: () => _a609a4c7d80c,
        KB: () => _3c266443ddce,
        Mw: () => _5a5cce1642e9,
        OF: () => _611b46e2fd2a,
        RJ: () => _4e0975a1482c,
        WL: () => _f5fe395ebb04,
        bL: () => _ee61174f6deb,
        dz: () => a,
        eF: () => _64f2b2ef4558,
        fl: () => _a9bd71b7ce50,
        vw: () => _e853f5e31d91
      }), (_3bdf3e120ffd = _4e0975a1482c || (_4e0975a1482c = {})).Root = "root", _3bdf3e120ffd.Text = "text", 
      _3bdf3e120ffd.Directive = "directive", _3bdf3e120ffd.Comment = "comment", _3bdf3e120ffd.Script = "script", 
      _3bdf3e120ffd.Style = "style", _3bdf3e120ffd.Tag = "tag", _3bdf3e120ffd.CDATA = "cdata", 
      _3bdf3e120ffd.Doctype = "doctype";
      let _ee61174f6deb = _4e0975a1482c.Root, _a609a4c7d80c = _4e0975a1482c.Text, _f5fe395ebb04 = _4e0975a1482c.Directive, _5a5cce1642e9 = _4e0975a1482c.Comment, _64f2b2ef4558 = _4e0975a1482c.Script, _611b46e2fd2a = _4e0975a1482c.Style, _e853f5e31d91 = _4e0975a1482c.Tag, _3c266443ddce = _4e0975a1482c.CDATA, _a9bd71b7ce50 = _4e0975a1482c.Doctype;
    },
    8866: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.d(_1e85f3a9716c, {
        DV: () => s,
        Hg: () => _3bdf3e120ffd.Hg,
        Mw: () => _3bdf3e120ffd.Mw
      });
      var _4e0975a1482c = _315f273def32(2743), _3bdf3e120ffd = _315f273def32(6072);
      let _ee61174f6deb = {
        withStartIndices: !1,
        withEndIndices: !1,
        xmlMode: !1
      };
      class s {
        constructor(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
          this.dom = [], this.root = new _3bdf3e120ffd.yo(this.dom), this.done = !1, this.tagStack = [ this.root ], 
          this.lastNode = null, this.parser = null, "function" == typeof _1e85f3a9716c && (_315f273def32 = _1e85f3a9716c, 
          _1e85f3a9716c = _ee61174f6deb), "object" == typeof _1d3a38243eaf && (_1e85f3a9716c = _1d3a38243eaf, 
          _1d3a38243eaf = void 0), this.callback = null != _1d3a38243eaf ? _1d3a38243eaf : null, 
          this.options = null != _1e85f3a9716c ? _1e85f3a9716c : _ee61174f6deb, this.elementCB = null != _315f273def32 ? _315f273def32 : null;
        }
        onparserinit(_1d3a38243eaf) {
          this.parser = _1d3a38243eaf;
        }
        onreset() {
          this.dom = [], this.root = new _3bdf3e120ffd.yo(this.dom), this.done = !1, this.tagStack = [ this.root ], 
          this.lastNode = null, this.parser = null;
        }
        onend() {
          this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
        }
        onerror(_1d3a38243eaf) {
          this.handleCallback(_1d3a38243eaf);
        }
        onclosetag() {
          this.lastNode = null;
          let _1d3a38243eaf = this.tagStack.pop();
          this.options.withEndIndices && (_1d3a38243eaf.endIndex = this.parser.endIndex), 
          this.elementCB && this.elementCB(_1d3a38243eaf);
        }
        onopentag(_1d3a38243eaf, _1e85f3a9716c) {
          let _315f273def32 = this.options.xmlMode ? _4e0975a1482c.RJ.Tag : void 0, _ee61174f6deb = new _3bdf3e120ffd.Hg(_1d3a38243eaf, _1e85f3a9716c, void 0, _315f273def32);
          this.addNode(_ee61174f6deb), this.tagStack.push(_ee61174f6deb);
        }
        ontext(_1d3a38243eaf) {
          let {lastNode: _1e85f3a9716c} = this;
          if (_1e85f3a9716c && _1e85f3a9716c.type === _4e0975a1482c.RJ.Text) _1e85f3a9716c.data += _1d3a38243eaf, 
          this.options.withEndIndices && (_1e85f3a9716c.endIndex = this.parser.endIndex); else {
            let _1e85f3a9716c = new _3bdf3e120ffd.EY(_1d3a38243eaf);
            this.addNode(_1e85f3a9716c), this.lastNode = _1e85f3a9716c;
          }
        }
        oncomment(_1d3a38243eaf) {
          if (this.lastNode && this.lastNode.type === _4e0975a1482c.RJ.Comment) {
            this.lastNode.data += _1d3a38243eaf;
            return;
          }
          let _1e85f3a9716c = new _3bdf3e120ffd.Mw(_1d3a38243eaf);
          this.addNode(_1e85f3a9716c), this.lastNode = _1e85f3a9716c;
        }
        oncommentend() {
          this.lastNode = null;
        }
        oncdatastart() {
          let _1d3a38243eaf = new _3bdf3e120ffd.EY(""), _1e85f3a9716c = new _3bdf3e120ffd.KB([ _1d3a38243eaf ]);
          this.addNode(_1e85f3a9716c), _1d3a38243eaf.parent = _1e85f3a9716c, this.lastNode = _1d3a38243eaf;
        }
        oncdataend() {
          this.lastNode = null;
        }
        onprocessinginstruction(_1d3a38243eaf, _1e85f3a9716c) {
          let _315f273def32 = new _3bdf3e120ffd.Cd(_1d3a38243eaf, _1e85f3a9716c);
          this.addNode(_315f273def32);
        }
        handleCallback(_1d3a38243eaf) {
          if ("function" == typeof this.callback) this.callback(_1d3a38243eaf, this.dom); else if (_1d3a38243eaf) throw _1d3a38243eaf;
        }
        addNode(_1d3a38243eaf) {
          let _1e85f3a9716c = this.tagStack[this.tagStack.length - 1], _315f273def32 = _1e85f3a9716c.children[_1e85f3a9716c.children.length - 1];
          this.options.withStartIndices && (_1d3a38243eaf.startIndex = this.parser.startIndex), 
          this.options.withEndIndices && (_1d3a38243eaf.endIndex = this.parser.endIndex), 
          _1e85f3a9716c.children.push(_1d3a38243eaf), _315f273def32 && (_1d3a38243eaf.prev = _315f273def32, 
          _315f273def32.next = _1d3a38243eaf), _1d3a38243eaf.parent = _1e85f3a9716c, this.lastNode = null;
        }
      }
    },
    6072: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.d(_1e85f3a9716c, {
        Cd: () => l,
        EY: () => s,
        Hg: () => h,
        KB: () => u,
        Mw: () => o,
        yo: () => d
      });
      var _4e0975a1482c = _315f273def32(2743);
      class i {
        constructor() {
          this.parent = null, this.prev = null, this.next = null, this.startIndex = null, 
          this.endIndex = null;
        }
        get parentNode() {
          return this.parent;
        }
        set parentNode(_1d3a38243eaf) {
          this.parent = _1d3a38243eaf;
        }
        get previousSibling() {
          return this.prev;
        }
        set previousSibling(_1d3a38243eaf) {
          this.prev = _1d3a38243eaf;
        }
        get nextSibling() {
          return this.next;
        }
        set nextSibling(_1d3a38243eaf) {
          this.next = _1d3a38243eaf;
        }
        cloneNode(_1d3a38243eaf = !1) {
          return p(this, _1d3a38243eaf);
        }
      }
      class a extends i {
        constructor(_1d3a38243eaf) {
          super(), this.data = _1d3a38243eaf;
        }
        get nodeValue() {
          return this.data;
        }
        set nodeValue(_1d3a38243eaf) {
          this.data = _1d3a38243eaf;
        }
      }
      class s extends a {
        constructor() {
          super(...arguments), this.type = _4e0975a1482c.RJ.Text;
        }
        get nodeType() {
          return 3;
        }
      }
      class o extends a {
        constructor() {
          super(...arguments), this.type = _4e0975a1482c.RJ.Comment;
        }
        get nodeType() {
          return 8;
        }
      }
      class l extends a {
        constructor(_1d3a38243eaf, _1e85f3a9716c) {
          super(_1e85f3a9716c), this.name = _1d3a38243eaf, this.type = _4e0975a1482c.RJ.Directive;
        }
        get nodeType() {
          return 1;
        }
      }
      class c extends i {
        constructor(_1d3a38243eaf) {
          super(), this.children = _1d3a38243eaf;
        }
        get firstChild() {
          var _1d3a38243eaf;
          return null != (_1d3a38243eaf = this.children[0]) ? _1d3a38243eaf : null;
        }
        get lastChild() {
          return this.children.length > 0 ? this.children[this.children.length - 1] : null;
        }
        get childNodes() {
          return this.children;
        }
        set childNodes(_1d3a38243eaf) {
          this.children = _1d3a38243eaf;
        }
      }
      class u extends c {
        constructor() {
          super(...arguments), this.type = _4e0975a1482c.RJ.CDATA;
        }
        get nodeType() {
          return 4;
        }
      }
      class d extends c {
        constructor() {
          super(...arguments), this.type = _4e0975a1482c.RJ.Root;
        }
        get nodeType() {
          return 9;
        }
      }
      class h extends c {
        constructor(_1d3a38243eaf, _1e85f3a9716c, _315f273def32 = [], _3bdf3e120ffd = ("script" === _1d3a38243eaf ? _4e0975a1482c.RJ.Script : "style" === _1d3a38243eaf ? _4e0975a1482c.RJ.Style : _4e0975a1482c.RJ.Tag)) {
          super(_315f273def32), this.name = _1d3a38243eaf, this.attribs = _1e85f3a9716c, this.type = _3bdf3e120ffd;
        }
        get nodeType() {
          return 1;
        }
        get tagName() {
          return this.name;
        }
        set tagName(_1d3a38243eaf) {
          this.name = _1d3a38243eaf;
        }
        get attributes() {
          return Object.keys(this.attribs).map(_1d3a38243eaf => {
            var _1e85f3a9716c, _315f273def32;
            return {
              name: _1d3a38243eaf,
              value: this.attribs[_1d3a38243eaf],
              namespace: null == (_1e85f3a9716c = this["x-attribsNamespace"]) ? void 0 : _1e85f3a9716c[_1d3a38243eaf],
              prefix: null == (_315f273def32 = this["x-attribsPrefix"]) ? void 0 : _315f273def32[_1d3a38243eaf]
            };
          });
        }
      }
      function p(_1d3a38243eaf, _1e85f3a9716c = !1) {
        let _315f273def32;
        if (_1d3a38243eaf.type === _4e0975a1482c.RJ.Text) _315f273def32 = new s(_1d3a38243eaf.data); else if (_1d3a38243eaf.type === _4e0975a1482c.RJ.Comment) _315f273def32 = new o(_1d3a38243eaf.data); else if ((0, 
        _4e0975a1482c.dz)(_1d3a38243eaf)) {
          let _4e0975a1482c = _1e85f3a9716c ? f(_1d3a38243eaf.children) : [], _3bdf3e120ffd = new h(_1d3a38243eaf.name, {
            ..._1d3a38243eaf.attribs
          }, _4e0975a1482c);
          _4e0975a1482c.forEach(_1d3a38243eaf => _1d3a38243eaf.parent = _3bdf3e120ffd), null != _1d3a38243eaf.namespace && (_3bdf3e120ffd.namespace = _1d3a38243eaf.namespace), 
          _1d3a38243eaf["x-attribsNamespace"] && (_3bdf3e120ffd["x-attribsNamespace"] = {
            ..._1d3a38243eaf["x-attribsNamespace"]
          }), _1d3a38243eaf["x-attribsPrefix"] && (_3bdf3e120ffd["x-attribsPrefix"] = {
            ..._1d3a38243eaf["x-attribsPrefix"]
          }), _315f273def32 = _3bdf3e120ffd;
        } else if (_1d3a38243eaf.type === _4e0975a1482c.RJ.CDATA) {
          let _4e0975a1482c = _1e85f3a9716c ? f(_1d3a38243eaf.children) : [], _3bdf3e120ffd = new u(_4e0975a1482c);
          _4e0975a1482c.forEach(_1d3a38243eaf => _1d3a38243eaf.parent = _3bdf3e120ffd), _315f273def32 = _3bdf3e120ffd;
        } else if (_1d3a38243eaf.type === _4e0975a1482c.RJ.Root) {
          let _4e0975a1482c = _1e85f3a9716c ? f(_1d3a38243eaf.children) : [], _3bdf3e120ffd = new d(_4e0975a1482c);
          _4e0975a1482c.forEach(_1d3a38243eaf => _1d3a38243eaf.parent = _3bdf3e120ffd), _1d3a38243eaf["x-mode"] && (_3bdf3e120ffd["x-mode"] = _1d3a38243eaf["x-mode"]), 
          _315f273def32 = _3bdf3e120ffd;
        } else if (_1d3a38243eaf.type === _4e0975a1482c.RJ.Directive) {
          let _1e85f3a9716c = new l(_1d3a38243eaf.name, _1d3a38243eaf.data);
          null != _1d3a38243eaf["x-name"] && (_1e85f3a9716c["x-name"] = _1d3a38243eaf["x-name"], 
          _1e85f3a9716c["x-publicId"] = _1d3a38243eaf["x-publicId"], _1e85f3a9716c["x-systemId"] = _1d3a38243eaf["x-systemId"]), 
          _315f273def32 = _1e85f3a9716c;
        } else throw Error(`Not implemented yet: ${_1d3a38243eaf.type}`);
        return _315f273def32.startIndex = _1d3a38243eaf.startIndex, _315f273def32.endIndex = _1d3a38243eaf.endIndex, 
        null != _1d3a38243eaf.sourceCodeLocation && (_315f273def32.sourceCodeLocation = _1d3a38243eaf.sourceCodeLocation), 
        _315f273def32;
      }
      function f(_1d3a38243eaf) {
        let _1e85f3a9716c = _1d3a38243eaf.map(_1d3a38243eaf => p(_1d3a38243eaf, !0));
        for (let _1d3a38243eaf = 1; _1d3a38243eaf < _1e85f3a9716c.length; _1d3a38243eaf++) _1e85f3a9716c[_1d3a38243eaf].prev = _1e85f3a9716c[_1d3a38243eaf - 1], 
        _1e85f3a9716c[_1d3a38243eaf - 1].next = _1e85f3a9716c[_1d3a38243eaf];
        return _1e85f3a9716c;
      }
    },
    3256: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32(5016), _315f273def32(1050);
    },
    6812: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      var _4e0975a1482c, _3bdf3e120ffd;
      _315f273def32(8866), (_3bdf3e120ffd = _4e0975a1482c || (_4e0975a1482c = {}))[_3bdf3e120ffd.DISCONNECTED = 1] = "DISCONNECTED", 
      _3bdf3e120ffd[_3bdf3e120ffd.PRECEDING = 2] = "PRECEDING", _3bdf3e120ffd[_3bdf3e120ffd.FOLLOWING = 4] = "FOLLOWING", 
      _3bdf3e120ffd[_3bdf3e120ffd.CONTAINS = 8] = "CONTAINS", _3bdf3e120ffd[_3bdf3e120ffd.CONTAINED_BY = 16] = "CONTAINED_BY";
    },
    4993: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32(5016), _315f273def32(4647), _315f273def32(9861), _315f273def32(1050), 
      _315f273def32(6812), _315f273def32(3256), _315f273def32(8866);
    },
    1050: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32(8866), _315f273def32(9861);
    },
    9861: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32(8866);
    },
    5016: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32(8866), _315f273def32(6498), _315f273def32(2743);
    },
    4647: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32(8866);
    },
    2146: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      var _4e0975a1482c;
      _315f273def32.d(_1e85f3a9716c, {
        MK: () => _ee61174f6deb,
        y6: () => s
      });
      let _3bdf3e120ffd = new Map([ [ 0, 65533 ], [ 128, 8364 ], [ 130, 8218 ], [ 131, 402 ], [ 132, 8222 ], [ 133, 8230 ], [ 134, 8224 ], [ 135, 8225 ], [ 136, 710 ], [ 137, 8240 ], [ 138, 352 ], [ 139, 8249 ], [ 140, 338 ], [ 142, 381 ], [ 145, 8216 ], [ 146, 8217 ], [ 147, 8220 ], [ 148, 8221 ], [ 149, 8226 ], [ 150, 8211 ], [ 151, 8212 ], [ 152, 732 ], [ 153, 8482 ], [ 154, 353 ], [ 155, 8250 ], [ 156, 339 ], [ 158, 382 ], [ 159, 376 ] ]), _ee61174f6deb = null != (_4e0975a1482c = String.fromCodePoint) ? _4e0975a1482c : function(_1d3a38243eaf) {
        let _1e85f3a9716c = "";
        return _1d3a38243eaf > 65535 && (_1d3a38243eaf -= 65536, _1e85f3a9716c += String.fromCharCode(_1d3a38243eaf >>> 10 & 1023 | 55296), 
        _1d3a38243eaf = 56320 | 1023 & _1d3a38243eaf), _1e85f3a9716c += String.fromCharCode(_1d3a38243eaf);
      };
      function s(_1d3a38243eaf) {
        var _1e85f3a9716c;
        return _1d3a38243eaf >= 55296 && _1d3a38243eaf <= 57343 || _1d3a38243eaf > 1114111 ? 65533 : null != (_1e85f3a9716c = _3bdf3e120ffd.get(_1d3a38243eaf)) ? _1e85f3a9716c : _1d3a38243eaf;
      }
    },
    2990: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.d(_1e85f3a9716c, {
        FJ: () => _611b46e2fd2a,
        MK: () => _a9bd71b7ce50.MK,
        Wf: () => g,
        qN: () => _e853f5e31d91.q,
        sr: () => _3c266443ddce.s
      });
      var _4e0975a1482c, _3bdf3e120ffd, _ee61174f6deb, _a609a4c7d80c, _f5fe395ebb04, _5a5cce1642e9, _64f2b2ef4558, _611b46e2fd2a, _e853f5e31d91 = _315f273def32(7259), _3c266443ddce = _315f273def32(5949), _a9bd71b7ce50 = _315f273def32(2146);
      function f(_1d3a38243eaf) {
        return _1d3a38243eaf >= _f5fe395ebb04.ZERO && _1d3a38243eaf <= _f5fe395ebb04.NINE;
      }
      (_4e0975a1482c = _f5fe395ebb04 || (_f5fe395ebb04 = {}))[_4e0975a1482c.NUM = 35] = "NUM", 
      _4e0975a1482c[_4e0975a1482c.SEMI = 59] = "SEMI", _4e0975a1482c[_4e0975a1482c.EQUALS = 61] = "EQUALS", 
      _4e0975a1482c[_4e0975a1482c.ZERO = 48] = "ZERO", _4e0975a1482c[_4e0975a1482c.NINE = 57] = "NINE", 
      _4e0975a1482c[_4e0975a1482c.LOWER_A = 97] = "LOWER_A", _4e0975a1482c[_4e0975a1482c.LOWER_F = 102] = "LOWER_F", 
      _4e0975a1482c[_4e0975a1482c.LOWER_X = 120] = "LOWER_X", _4e0975a1482c[_4e0975a1482c.LOWER_Z = 122] = "LOWER_Z", 
      _4e0975a1482c[_4e0975a1482c.UPPER_A = 65] = "UPPER_A", _4e0975a1482c[_4e0975a1482c.UPPER_F = 70] = "UPPER_F", 
      _4e0975a1482c[_4e0975a1482c.UPPER_Z = 90] = "UPPER_Z", (_3bdf3e120ffd = _5a5cce1642e9 || (_5a5cce1642e9 = {}))[_3bdf3e120ffd.VALUE_LENGTH = 49152] = "VALUE_LENGTH", 
      _3bdf3e120ffd[_3bdf3e120ffd.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", _3bdf3e120ffd[_3bdf3e120ffd.JUMP_TABLE = 127] = "JUMP_TABLE", 
      (_ee61174f6deb = _64f2b2ef4558 || (_64f2b2ef4558 = {}))[_ee61174f6deb.EntityStart = 0] = "EntityStart", 
      _ee61174f6deb[_ee61174f6deb.NumericStart = 1] = "NumericStart", _ee61174f6deb[_ee61174f6deb.NumericDecimal = 2] = "NumericDecimal", 
      _ee61174f6deb[_ee61174f6deb.NumericHex = 3] = "NumericHex", _ee61174f6deb[_ee61174f6deb.NamedEntity = 4] = "NamedEntity", 
      (_a609a4c7d80c = _611b46e2fd2a || (_611b46e2fd2a = {}))[_a609a4c7d80c.Legacy = 0] = "Legacy", 
      _a609a4c7d80c[_a609a4c7d80c.Strict = 1] = "Strict", _a609a4c7d80c[_a609a4c7d80c.Attribute = 2] = "Attribute";
      class g {
        constructor(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
          this.decodeTree = _1d3a38243eaf, this.emitCodePoint = _1e85f3a9716c, this.errors = _315f273def32, 
          this.state = _64f2b2ef4558.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, 
          this.excess = 1, this.decodeMode = _611b46e2fd2a.Strict;
        }
        startEntity(_1d3a38243eaf) {
          this.decodeMode = _1d3a38243eaf, this.state = _64f2b2ef4558.EntityStart, this.result = 0, 
          this.treeIndex = 0, this.excess = 1, this.consumed = 1;
        }
        write(_1d3a38243eaf, _1e85f3a9716c) {
          switch (this.state) {
           case _64f2b2ef4558.EntityStart:
            if (_1d3a38243eaf.charCodeAt(_1e85f3a9716c) === _f5fe395ebb04.NUM) return this.state = _64f2b2ef4558.NumericStart, 
            this.consumed += 1, this.stateNumericStart(_1d3a38243eaf, _1e85f3a9716c + 1);
            return this.state = _64f2b2ef4558.NamedEntity, this.stateNamedEntity(_1d3a38243eaf, _1e85f3a9716c);

           case _64f2b2ef4558.NumericStart:
            return this.stateNumericStart(_1d3a38243eaf, _1e85f3a9716c);

           case _64f2b2ef4558.NumericDecimal:
            return this.stateNumericDecimal(_1d3a38243eaf, _1e85f3a9716c);

           case _64f2b2ef4558.NumericHex:
            return this.stateNumericHex(_1d3a38243eaf, _1e85f3a9716c);

           case _64f2b2ef4558.NamedEntity:
            return this.stateNamedEntity(_1d3a38243eaf, _1e85f3a9716c);
          }
        }
        stateNumericStart(_1d3a38243eaf, _1e85f3a9716c) {
          return _1e85f3a9716c >= _1d3a38243eaf.length ? -1 : (32 | _1d3a38243eaf.charCodeAt(_1e85f3a9716c)) === _f5fe395ebb04.LOWER_X ? (this.state = _64f2b2ef4558.NumericHex, 
          this.consumed += 1, this.stateNumericHex(_1d3a38243eaf, _1e85f3a9716c + 1)) : (this.state = _64f2b2ef4558.NumericDecimal, 
          this.stateNumericDecimal(_1d3a38243eaf, _1e85f3a9716c));
        }
        addToNumericResult(_1d3a38243eaf, _1e85f3a9716c, _315f273def32, _4e0975a1482c) {
          if (_1e85f3a9716c !== _315f273def32) {
            let _3bdf3e120ffd = _315f273def32 - _1e85f3a9716c;
            this.result = this.result * Math.pow(_4e0975a1482c, _3bdf3e120ffd) + Number.parseInt(_1d3a38243eaf.substr(_1e85f3a9716c, _3bdf3e120ffd), _4e0975a1482c), 
            this.consumed += _3bdf3e120ffd;
          }
        }
        stateNumericHex(_1d3a38243eaf, _1e85f3a9716c) {
          let _315f273def32 = _1e85f3a9716c;
          for (;_1e85f3a9716c < _1d3a38243eaf.length; ) {
            var _4e0975a1482c;
            let _3bdf3e120ffd = _1d3a38243eaf.charCodeAt(_1e85f3a9716c);
            if (!f(_3bdf3e120ffd) && (!((_4e0975a1482c = _3bdf3e120ffd) >= _f5fe395ebb04.UPPER_A) || !(_4e0975a1482c <= _f5fe395ebb04.UPPER_F)) && (!(_4e0975a1482c >= _f5fe395ebb04.LOWER_A) || !(_4e0975a1482c <= _f5fe395ebb04.LOWER_F))) return this.addToNumericResult(_1d3a38243eaf, _315f273def32, _1e85f3a9716c, 16), 
            this.emitNumericEntity(_3bdf3e120ffd, 3);
            _1e85f3a9716c += 1;
          }
          return this.addToNumericResult(_1d3a38243eaf, _315f273def32, _1e85f3a9716c, 16), 
          -1;
        }
        stateNumericDecimal(_1d3a38243eaf, _1e85f3a9716c) {
          let _315f273def32 = _1e85f3a9716c;
          for (;_1e85f3a9716c < _1d3a38243eaf.length; ) {
            let _4e0975a1482c = _1d3a38243eaf.charCodeAt(_1e85f3a9716c);
            if (!f(_4e0975a1482c)) return this.addToNumericResult(_1d3a38243eaf, _315f273def32, _1e85f3a9716c, 10), 
            this.emitNumericEntity(_4e0975a1482c, 2);
            _1e85f3a9716c += 1;
          }
          return this.addToNumericResult(_1d3a38243eaf, _315f273def32, _1e85f3a9716c, 10), 
          -1;
        }
        emitNumericEntity(_1d3a38243eaf, _1e85f3a9716c) {
          var _315f273def32;
          if (this.consumed <= _1e85f3a9716c) return null == (_315f273def32 = this.errors) || _315f273def32.absenceOfDigitsInNumericCharacterReference(this.consumed), 
          0;
          if (_1d3a38243eaf === _f5fe395ebb04.SEMI) this.consumed += 1; else if (this.decodeMode === _611b46e2fd2a.Strict) return 0;
          return this.emitCodePoint((0, _a9bd71b7ce50.y6)(this.result), this.consumed), this.errors && (_1d3a38243eaf !== _f5fe395ebb04.SEMI && this.errors.missingSemicolonAfterCharacterReference(), 
          this.errors.validateNumericCharacterReference(this.result)), this.consumed;
        }
        stateNamedEntity(_1d3a38243eaf, _1e85f3a9716c) {
          let {decodeTree: _315f273def32} = this, _4e0975a1482c = _315f273def32[this.treeIndex], _3bdf3e120ffd = (_4e0975a1482c & _5a5cce1642e9.VALUE_LENGTH) >> 14;
          for (;_1e85f3a9716c < _1d3a38243eaf.length; _1e85f3a9716c++, this.excess++) {
            let _ee61174f6deb = _1d3a38243eaf.charCodeAt(_1e85f3a9716c);
            if (this.treeIndex = function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32, _4e0975a1482c) {
              let _3bdf3e120ffd = (_1e85f3a9716c & _5a5cce1642e9.BRANCH_LENGTH) >> 7, _ee61174f6deb = _1e85f3a9716c & _5a5cce1642e9.JUMP_TABLE;
              if (0 === _3bdf3e120ffd) return 0 !== _ee61174f6deb && _4e0975a1482c === _ee61174f6deb ? _315f273def32 : -1;
              if (_ee61174f6deb) {
                let _1e85f3a9716c = _4e0975a1482c - _ee61174f6deb;
                return _1e85f3a9716c < 0 || _1e85f3a9716c >= _3bdf3e120ffd ? -1 : _1d3a38243eaf[_315f273def32 + _1e85f3a9716c] - 1;
              }
              let _a609a4c7d80c = _315f273def32, _f5fe395ebb04 = _a609a4c7d80c + _3bdf3e120ffd - 1;
              for (;_a609a4c7d80c <= _f5fe395ebb04; ) {
                let _1e85f3a9716c = _a609a4c7d80c + _f5fe395ebb04 >>> 1, _315f273def32 = _1d3a38243eaf[_1e85f3a9716c];
                if (_315f273def32 < _4e0975a1482c) _a609a4c7d80c = _1e85f3a9716c + 1; else {
                  if (!(_315f273def32 > _4e0975a1482c)) return _1d3a38243eaf[_1e85f3a9716c + _3bdf3e120ffd];
                  _f5fe395ebb04 = _1e85f3a9716c - 1;
                }
              }
              return -1;
            }(_315f273def32, _4e0975a1482c, this.treeIndex + Math.max(1, _3bdf3e120ffd), _ee61174f6deb), 
            this.treeIndex < 0) return 0 === this.result || this.decodeMode === _611b46e2fd2a.Attribute && (0 === _3bdf3e120ffd || function(_1d3a38243eaf) {
              var _1e85f3a9716c;
              return _1d3a38243eaf === _f5fe395ebb04.EQUALS || (_1e85f3a9716c = _1d3a38243eaf) >= _f5fe395ebb04.UPPER_A && _1e85f3a9716c <= _f5fe395ebb04.UPPER_Z || _1e85f3a9716c >= _f5fe395ebb04.LOWER_A && _1e85f3a9716c <= _f5fe395ebb04.LOWER_Z || f(_1e85f3a9716c);
            }(_ee61174f6deb)) ? 0 : this.emitNotTerminatedNamedEntity();
            if (0 != (_3bdf3e120ffd = ((_4e0975a1482c = _315f273def32[this.treeIndex]) & _5a5cce1642e9.VALUE_LENGTH) >> 14)) {
              if (_ee61174f6deb === _f5fe395ebb04.SEMI) return this.emitNamedEntityData(this.treeIndex, _3bdf3e120ffd, this.consumed + this.excess);
              this.decodeMode !== _611b46e2fd2a.Strict && (this.result = this.treeIndex, this.consumed += this.excess, 
              this.excess = 0);
            }
          }
          return -1;
        }
        emitNotTerminatedNamedEntity() {
          var _1d3a38243eaf;
          let {result: _1e85f3a9716c, decodeTree: _315f273def32} = this, _4e0975a1482c = (_315f273def32[_1e85f3a9716c] & _5a5cce1642e9.VALUE_LENGTH) >> 14;
          return this.emitNamedEntityData(_1e85f3a9716c, _4e0975a1482c, this.consumed), null == (_1d3a38243eaf = this.errors) || _1d3a38243eaf.missingSemicolonAfterCharacterReference(), 
          this.consumed;
        }
        emitNamedEntityData(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
          let {decodeTree: _4e0975a1482c} = this;
          return this.emitCodePoint(1 === _1e85f3a9716c ? _4e0975a1482c[_1d3a38243eaf] & ~_5a5cce1642e9.VALUE_LENGTH : _4e0975a1482c[_1d3a38243eaf + 1], _315f273def32), 
          3 === _1e85f3a9716c && this.emitCodePoint(_4e0975a1482c[_1d3a38243eaf + 2], _315f273def32), 
          _315f273def32;
        }
        end() {
          var _1d3a38243eaf;
          switch (this.state) {
           case _64f2b2ef4558.NamedEntity:
            return 0 !== this.result && (this.decodeMode !== _611b46e2fd2a.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;

           case _64f2b2ef4558.NumericDecimal:
            return this.emitNumericEntity(0, 2);

           case _64f2b2ef4558.NumericHex:
            return this.emitNumericEntity(0, 3);

           case _64f2b2ef4558.NumericStart:
            return null == (_1d3a38243eaf = this.errors) || _1d3a38243eaf.absenceOfDigitsInNumericCharacterReference(this.consumed), 
            0;

           case _64f2b2ef4558.EntityStart:
            return 0;
          }
        }
      }
    },
    466: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32(9496), _315f273def32(747);
    },
    747: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.d(_1e85f3a9716c, {
        Gj: () => _a609a4c7d80c,
        WY: () => s,
        X1: () => _f5fe395ebb04
      });
      let _4e0975a1482c = /["$&'<>\u0080-\uFFFF]/g, _3bdf3e120ffd = new Map([ [ 34, "&quot;" ], [ 38, "&amp;" ], [ 39, "&apos;" ], [ 60, "&lt;" ], [ 62, "&gt;" ] ]), _ee61174f6deb = null == String.prototype.codePointAt ? (_1d3a38243eaf, _1e85f3a9716c) => (64512 & _1d3a38243eaf.charCodeAt(_1e85f3a9716c)) == 55296 ? (_1d3a38243eaf.charCodeAt(_1e85f3a9716c) - 55296) * 1024 + _1d3a38243eaf.charCodeAt(_1e85f3a9716c + 1) - 56320 + 65536 : _1d3a38243eaf.charCodeAt(_1e85f3a9716c) : (_1d3a38243eaf, _1e85f3a9716c) => _1d3a38243eaf.codePointAt(_1e85f3a9716c);
      function s(_1d3a38243eaf) {
        let _1e85f3a9716c, _315f273def32 = "", _a609a4c7d80c = 0;
        for (;null !== (_1e85f3a9716c = _4e0975a1482c.exec(_1d3a38243eaf)); ) {
          let {index: _f5fe395ebb04} = _1e85f3a9716c, _5a5cce1642e9 = _1d3a38243eaf.charCodeAt(_f5fe395ebb04), _64f2b2ef4558 = _3bdf3e120ffd.get(_5a5cce1642e9);
          void 0 === _64f2b2ef4558 ? (_315f273def32 += `${_1d3a38243eaf.substring(_a609a4c7d80c, _f5fe395ebb04)}&#x${_ee61174f6deb(_1d3a38243eaf, _f5fe395ebb04).toString(16)};`, 
          _a609a4c7d80c = _4e0975a1482c.lastIndex += Number((64512 & _5a5cce1642e9) == 55296)) : (_315f273def32 += _1d3a38243eaf.substring(_a609a4c7d80c, _f5fe395ebb04) + _64f2b2ef4558, 
          _a609a4c7d80c = _f5fe395ebb04 + 1);
        }
        return _315f273def32 + _1d3a38243eaf.substr(_a609a4c7d80c);
      }
      function o(_1d3a38243eaf, _1e85f3a9716c) {
        return function(_315f273def32) {
          let _4e0975a1482c, _3bdf3e120ffd = 0, _ee61174f6deb = "";
          for (;_4e0975a1482c = _1d3a38243eaf.exec(_315f273def32); ) _3bdf3e120ffd !== _4e0975a1482c.index && (_ee61174f6deb += _315f273def32.substring(_3bdf3e120ffd, _4e0975a1482c.index)), 
          _ee61174f6deb += _1e85f3a9716c.get(_4e0975a1482c[0].charCodeAt(0)), _3bdf3e120ffd = _4e0975a1482c.index + 1;
          return _ee61174f6deb + _315f273def32.substring(_3bdf3e120ffd);
        };
      }
      let _a609a4c7d80c = o(/["&\u00A0]/g, new Map([ [ 34, "&quot;" ], [ 38, "&amp;" ], [ 160, "&nbsp;" ] ])), _f5fe395ebb04 = o(/[&<>\u00A0]/g, new Map([ [ 38, "&amp;" ], [ 60, "&lt;" ], [ 62, "&gt;" ], [ 160, "&nbsp;" ] ]));
    },
    7259: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.d(_1e85f3a9716c, {
        q: () => _4e0975a1482c
      });
      let _4e0975a1482c = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(_1d3a38243eaf => _1d3a38243eaf.charCodeAt(0)));
    },
    5949: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.d(_1e85f3a9716c, {
        s: () => _4e0975a1482c
      });
      let _4e0975a1482c = new Uint16Array("Ȁaglq\tɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(_1d3a38243eaf => _1d3a38243eaf.charCodeAt(0)));
    },
    9496: function() {},
    8466: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.d(_1e85f3a9716c, {
        Gj: () => _f5fe395ebb04.Gj,
        WY: () => _f5fe395ebb04.WY,
        X1: () => _f5fe395ebb04.X1
      }), _315f273def32(2990), _315f273def32(466);
      var _4e0975a1482c, _3bdf3e120ffd, _ee61174f6deb, _a609a4c7d80c, _f5fe395ebb04 = _315f273def32(747);
      (_4e0975a1482c = _ee61174f6deb || (_ee61174f6deb = {}))[_4e0975a1482c.XML = 0] = "XML", 
      _4e0975a1482c[_4e0975a1482c.HTML = 1] = "HTML", (_3bdf3e120ffd = _a609a4c7d80c || (_a609a4c7d80c = {}))[_3bdf3e120ffd.UTF8 = 0] = "UTF8", 
      _3bdf3e120ffd[_3bdf3e120ffd.ASCII = 1] = "ASCII", _3bdf3e120ffd[_3bdf3e120ffd.Extensive = 2] = "Extensive", 
      _3bdf3e120ffd[_3bdf3e120ffd.Attribute = 3] = "Attribute", _3bdf3e120ffd[_3bdf3e120ffd.Text = 4] = "Text";
    },
    4645: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.d(_1e85f3a9716c, {
        i: () => g
      });
      var _4e0975a1482c = _315f273def32(5645), _3bdf3e120ffd = _315f273def32(2990);
      let _ee61174f6deb = new Set([ "input", "option", "optgroup", "select", "button", "datalist", "textarea" ]), _a609a4c7d80c = new Set([ "p" ]), _f5fe395ebb04 = new Set([ "thead", "tbody" ]), _5a5cce1642e9 = new Set([ "dd", "dt" ]), _64f2b2ef4558 = new Set([ "rt", "rp" ]), _611b46e2fd2a = new Map([ [ "tr", new Set([ "tr", "th", "td" ]) ], [ "th", new Set([ "th" ]) ], [ "td", new Set([ "thead", "th", "td" ]) ], [ "body", new Set([ "head", "link", "script" ]) ], [ "li", new Set([ "li" ]) ], [ "p", _a609a4c7d80c ], [ "h1", _a609a4c7d80c ], [ "h2", _a609a4c7d80c ], [ "h3", _a609a4c7d80c ], [ "h4", _a609a4c7d80c ], [ "h5", _a609a4c7d80c ], [ "h6", _a609a4c7d80c ], [ "select", _ee61174f6deb ], [ "input", _ee61174f6deb ], [ "output", _ee61174f6deb ], [ "button", _ee61174f6deb ], [ "datalist", _ee61174f6deb ], [ "textarea", _ee61174f6deb ], [ "option", new Set([ "option" ]) ], [ "optgroup", new Set([ "optgroup", "option" ]) ], [ "dd", _5a5cce1642e9 ], [ "dt", _5a5cce1642e9 ], [ "address", _a609a4c7d80c ], [ "article", _a609a4c7d80c ], [ "aside", _a609a4c7d80c ], [ "blockquote", _a609a4c7d80c ], [ "details", _a609a4c7d80c ], [ "div", _a609a4c7d80c ], [ "dl", _a609a4c7d80c ], [ "fieldset", _a609a4c7d80c ], [ "figcaption", _a609a4c7d80c ], [ "figure", _a609a4c7d80c ], [ "footer", _a609a4c7d80c ], [ "form", _a609a4c7d80c ], [ "header", _a609a4c7d80c ], [ "hr", _a609a4c7d80c ], [ "main", _a609a4c7d80c ], [ "nav", _a609a4c7d80c ], [ "ol", _a609a4c7d80c ], [ "pre", _a609a4c7d80c ], [ "section", _a609a4c7d80c ], [ "table", _a609a4c7d80c ], [ "ul", _a609a4c7d80c ], [ "rt", _64f2b2ef4558 ], [ "rp", _64f2b2ef4558 ], [ "tbody", _f5fe395ebb04 ], [ "tfoot", _f5fe395ebb04 ] ]), _e853f5e31d91 = new Set([ "area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr" ]), _3c266443ddce = new Set([ "math", "svg" ]), _a9bd71b7ce50 = new Set([ "mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title" ]), _542e5e0773c9 = /\s|\//;
      class g {
        constructor(_1d3a38243eaf, _1e85f3a9716c = {}) {
          var _315f273def32, _3bdf3e120ffd, _ee61174f6deb, _a609a4c7d80c, _f5fe395ebb04, _5a5cce1642e9;
          this.options = _1e85f3a9716c, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, 
          this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, 
          this.stack = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, 
          this.ended = !1, this.cbs = null != _1d3a38243eaf ? _1d3a38243eaf : {}, this.htmlMode = !this.options.xmlMode, 
          this.lowerCaseTagNames = null != (_315f273def32 = _1e85f3a9716c.lowerCaseTags) ? _315f273def32 : this.htmlMode, 
          this.lowerCaseAttributeNames = null != (_3bdf3e120ffd = _1e85f3a9716c.lowerCaseAttributeNames) ? _3bdf3e120ffd : this.htmlMode, 
          this.recognizeSelfClosing = null != (_ee61174f6deb = _1e85f3a9716c.recognizeSelfClosing) ? _ee61174f6deb : !this.htmlMode, 
          this.tokenizer = new (null != (_a609a4c7d80c = _1e85f3a9716c.Tokenizer) ? _a609a4c7d80c : _4e0975a1482c.A)(this.options, this), 
          this.foreignContext = [ !this.htmlMode ], null == (_5a5cce1642e9 = (_f5fe395ebb04 = this.cbs).onparserinit) || _5a5cce1642e9.call(_f5fe395ebb04, this);
        }
        ontext(_1d3a38243eaf, _1e85f3a9716c) {
          var _315f273def32, _4e0975a1482c;
          let _3bdf3e120ffd = this.getSlice(_1d3a38243eaf, _1e85f3a9716c);
          this.endIndex = _1e85f3a9716c - 1, null == (_4e0975a1482c = (_315f273def32 = this.cbs).ontext) || _4e0975a1482c.call(_315f273def32, _3bdf3e120ffd), 
          this.startIndex = _1e85f3a9716c;
        }
        ontextentity(_1d3a38243eaf, _1e85f3a9716c) {
          var _315f273def32, _4e0975a1482c;
          this.endIndex = _1e85f3a9716c - 1, null == (_4e0975a1482c = (_315f273def32 = this.cbs).ontext) || _4e0975a1482c.call(_315f273def32, (0, 
          _3bdf3e120ffd.MK)(_1d3a38243eaf)), this.startIndex = _1e85f3a9716c;
        }
        isVoidElement(_1d3a38243eaf) {
          return this.htmlMode && _e853f5e31d91.has(_1d3a38243eaf);
        }
        onopentagname(_1d3a38243eaf, _1e85f3a9716c) {
          this.endIndex = _1e85f3a9716c;
          let _315f273def32 = this.getSlice(_1d3a38243eaf, _1e85f3a9716c);
          this.lowerCaseTagNames && (_315f273def32 = _315f273def32.toLowerCase()), this.emitOpenTag(_315f273def32);
        }
        emitOpenTag(_1d3a38243eaf) {
          var _1e85f3a9716c, _315f273def32, _4e0975a1482c, _3bdf3e120ffd;
          this.openTagStart = this.startIndex, this.tagname = _1d3a38243eaf;
          let _ee61174f6deb = this.htmlMode && _611b46e2fd2a.get(_1d3a38243eaf);
          if (_ee61174f6deb) for (;this.stack.length > 0 && _ee61174f6deb.has(this.stack[0]); ) {
            let _1d3a38243eaf = this.stack.shift();
            null == (_315f273def32 = (_1e85f3a9716c = this.cbs).onclosetag) || _315f273def32.call(_1e85f3a9716c, _1d3a38243eaf, !0);
          }
          !this.isVoidElement(_1d3a38243eaf) && (this.stack.unshift(_1d3a38243eaf), this.htmlMode && (_3c266443ddce.has(_1d3a38243eaf) ? this.foreignContext.unshift(!0) : _a9bd71b7ce50.has(_1d3a38243eaf) && this.foreignContext.unshift(!1))), 
          null == (_3bdf3e120ffd = (_4e0975a1482c = this.cbs).onopentagname) || _3bdf3e120ffd.call(_4e0975a1482c, _1d3a38243eaf), 
          this.cbs.onopentag && (this.attribs = {});
        }
        endOpenTag(_1d3a38243eaf) {
          var _1e85f3a9716c, _315f273def32;
          this.startIndex = this.openTagStart, this.attribs && (null == (_315f273def32 = (_1e85f3a9716c = this.cbs).onopentag) || _315f273def32.call(_1e85f3a9716c, this.tagname, this.attribs, _1d3a38243eaf), 
          this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), 
          this.tagname = "";
        }
        onopentagend(_1d3a38243eaf) {
          this.endIndex = _1d3a38243eaf, this.endOpenTag(!1), this.startIndex = _1d3a38243eaf + 1;
        }
        onclosetag(_1d3a38243eaf, _1e85f3a9716c) {
          var _315f273def32, _4e0975a1482c, _3bdf3e120ffd, _ee61174f6deb, _a609a4c7d80c, _f5fe395ebb04, _5a5cce1642e9, _64f2b2ef4558;
          this.endIndex = _1e85f3a9716c;
          let _611b46e2fd2a = this.getSlice(_1d3a38243eaf, _1e85f3a9716c);
          if (this.lowerCaseTagNames && (_611b46e2fd2a = _611b46e2fd2a.toLowerCase()), this.htmlMode && (_3c266443ddce.has(_611b46e2fd2a) || _a9bd71b7ce50.has(_611b46e2fd2a)) && this.foreignContext.shift(), 
          this.isVoidElement(_611b46e2fd2a)) this.htmlMode && "br" === _611b46e2fd2a && (null == (_ee61174f6deb = (_3bdf3e120ffd = this.cbs).onopentagname) || _ee61174f6deb.call(_3bdf3e120ffd, "br"), 
          null == (_f5fe395ebb04 = (_a609a4c7d80c = this.cbs).onopentag) || _f5fe395ebb04.call(_a609a4c7d80c, "br", {}, !0), 
          null == (_64f2b2ef4558 = (_5a5cce1642e9 = this.cbs).onclosetag) || _64f2b2ef4558.call(_5a5cce1642e9, "br", !1)); else {
            let _1d3a38243eaf = this.stack.indexOf(_611b46e2fd2a);
            if (-1 !== _1d3a38243eaf) for (let _1e85f3a9716c = 0; _1e85f3a9716c <= _1d3a38243eaf; _1e85f3a9716c++) {
              let _3bdf3e120ffd = this.stack.shift();
              null == (_4e0975a1482c = (_315f273def32 = this.cbs).onclosetag) || _4e0975a1482c.call(_315f273def32, _3bdf3e120ffd, _1e85f3a9716c !== _1d3a38243eaf);
            } else this.htmlMode && "p" === _611b46e2fd2a && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
          }
          this.startIndex = _1e85f3a9716c + 1;
        }
        onselfclosingtag(_1d3a38243eaf) {
          this.endIndex = _1d3a38243eaf, this.recognizeSelfClosing || this.foreignContext[0] ? (this.closeCurrentTag(!1), 
          this.startIndex = _1d3a38243eaf + 1) : this.onopentagend(_1d3a38243eaf);
        }
        closeCurrentTag(_1d3a38243eaf) {
          var _1e85f3a9716c, _315f273def32;
          let _4e0975a1482c = this.tagname;
          this.endOpenTag(_1d3a38243eaf), this.stack[0] === _4e0975a1482c && (null == (_315f273def32 = (_1e85f3a9716c = this.cbs).onclosetag) || _315f273def32.call(_1e85f3a9716c, _4e0975a1482c, !_1d3a38243eaf), 
          this.stack.shift());
        }
        onattribname(_1d3a38243eaf, _1e85f3a9716c) {
          this.startIndex = _1d3a38243eaf;
          let _315f273def32 = this.getSlice(_1d3a38243eaf, _1e85f3a9716c);
          this.attribname = this.lowerCaseAttributeNames ? _315f273def32.toLowerCase() : _315f273def32;
        }
        onattribdata(_1d3a38243eaf, _1e85f3a9716c) {
          this.attribvalue += this.getSlice(_1d3a38243eaf, _1e85f3a9716c);
        }
        onattribentity(_1d3a38243eaf) {
          this.attribvalue += (0, _3bdf3e120ffd.MK)(_1d3a38243eaf);
        }
        onattribend(_1d3a38243eaf, _1e85f3a9716c) {
          var _315f273def32, _3bdf3e120ffd;
          this.endIndex = _1e85f3a9716c, null == (_3bdf3e120ffd = (_315f273def32 = this.cbs).onattribute) || _3bdf3e120ffd.call(_315f273def32, this.attribname, this.attribvalue, _1d3a38243eaf === _4e0975a1482c.X.Double ? '"' : _1d3a38243eaf === _4e0975a1482c.X.Single ? "'" : _1d3a38243eaf === _4e0975a1482c.X.NoValue ? void 0 : null), 
          this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), 
          this.attribvalue = "";
        }
        getInstructionName(_1d3a38243eaf) {
          let _1e85f3a9716c = _1d3a38243eaf.search(_542e5e0773c9), _315f273def32 = _1e85f3a9716c < 0 ? _1d3a38243eaf : _1d3a38243eaf.substr(0, _1e85f3a9716c);
          return this.lowerCaseTagNames && (_315f273def32 = _315f273def32.toLowerCase()), 
          _315f273def32;
        }
        ondeclaration(_1d3a38243eaf, _1e85f3a9716c) {
          this.endIndex = _1e85f3a9716c;
          let _315f273def32 = this.getSlice(_1d3a38243eaf, _1e85f3a9716c);
          if (this.cbs.onprocessinginstruction) {
            let _1d3a38243eaf = this.getInstructionName(_315f273def32);
            this.cbs.onprocessinginstruction(`!${_1d3a38243eaf}`, `!${_315f273def32}`);
          }
          this.startIndex = _1e85f3a9716c + 1;
        }
        onprocessinginstruction(_1d3a38243eaf, _1e85f3a9716c) {
          this.endIndex = _1e85f3a9716c;
          let _315f273def32 = this.getSlice(_1d3a38243eaf, _1e85f3a9716c);
          if (this.cbs.onprocessinginstruction) {
            let _1d3a38243eaf = this.getInstructionName(_315f273def32);
            this.cbs.onprocessinginstruction(`?${_1d3a38243eaf}`, `?${_315f273def32}`);
          }
          this.startIndex = _1e85f3a9716c + 1;
        }
        oncomment(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
          var _4e0975a1482c, _3bdf3e120ffd, _ee61174f6deb, _a609a4c7d80c;
          this.endIndex = _1e85f3a9716c, null == (_3bdf3e120ffd = (_4e0975a1482c = this.cbs).oncomment) || _3bdf3e120ffd.call(_4e0975a1482c, this.getSlice(_1d3a38243eaf, _1e85f3a9716c - _315f273def32)), 
          null == (_a609a4c7d80c = (_ee61174f6deb = this.cbs).oncommentend) || _a609a4c7d80c.call(_ee61174f6deb), 
          this.startIndex = _1e85f3a9716c + 1;
        }
        oncdata(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
          var _4e0975a1482c, _3bdf3e120ffd, _ee61174f6deb, _a609a4c7d80c, _f5fe395ebb04, _5a5cce1642e9, _64f2b2ef4558, _611b46e2fd2a, _e853f5e31d91, _3c266443ddce;
          this.endIndex = _1e85f3a9716c;
          let _a9bd71b7ce50 = this.getSlice(_1d3a38243eaf, _1e85f3a9716c - _315f273def32);
          !this.htmlMode || this.options.recognizeCDATA ? (null == (_3bdf3e120ffd = (_4e0975a1482c = this.cbs).oncdatastart) || _3bdf3e120ffd.call(_4e0975a1482c), 
          null == (_a609a4c7d80c = (_ee61174f6deb = this.cbs).ontext) || _a609a4c7d80c.call(_ee61174f6deb, _a9bd71b7ce50), 
          null == (_5a5cce1642e9 = (_f5fe395ebb04 = this.cbs).oncdataend) || _5a5cce1642e9.call(_f5fe395ebb04)) : (null == (_611b46e2fd2a = (_64f2b2ef4558 = this.cbs).oncomment) || _611b46e2fd2a.call(_64f2b2ef4558, `[CDATA[${_a9bd71b7ce50}]]`), 
          null == (_3c266443ddce = (_e853f5e31d91 = this.cbs).oncommentend) || _3c266443ddce.call(_e853f5e31d91)), 
          this.startIndex = _1e85f3a9716c + 1;
        }
        onend() {
          var _1d3a38243eaf, _1e85f3a9716c;
          if (this.cbs.onclosetag) {
            this.endIndex = this.startIndex;
            for (let _1d3a38243eaf = 0; _1d3a38243eaf < this.stack.length; _1d3a38243eaf++) this.cbs.onclosetag(this.stack[_1d3a38243eaf], !0);
          }
          null == (_1e85f3a9716c = (_1d3a38243eaf = this.cbs).onend) || _1e85f3a9716c.call(_1d3a38243eaf);
        }
        reset() {
          var _1d3a38243eaf, _1e85f3a9716c, _315f273def32, _4e0975a1482c;
          null == (_1e85f3a9716c = (_1d3a38243eaf = this.cbs).onreset) || _1e85f3a9716c.call(_1d3a38243eaf), 
          this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, 
          this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, null == (_4e0975a1482c = (_315f273def32 = this.cbs).onparserinit) || _4e0975a1482c.call(_315f273def32, this), 
          this.buffers.length = 0, this.foreignContext.length = 0, this.foreignContext.unshift(!this.htmlMode), 
          this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1;
        }
        parseComplete(_1d3a38243eaf) {
          this.reset(), this.end(_1d3a38243eaf);
        }
        getSlice(_1d3a38243eaf, _1e85f3a9716c) {
          for (;_1d3a38243eaf - this.bufferOffset >= this.buffers[0].length; ) this.shiftBuffer();
          let _315f273def32 = this.buffers[0].slice(_1d3a38243eaf - this.bufferOffset, _1e85f3a9716c - this.bufferOffset);
          for (;_1e85f3a9716c - this.bufferOffset > this.buffers[0].length; ) this.shiftBuffer(), 
          _315f273def32 += this.buffers[0].slice(0, _1e85f3a9716c - this.bufferOffset);
          return _315f273def32;
        }
        shiftBuffer() {
          this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift();
        }
        write(_1d3a38243eaf) {
          var _1e85f3a9716c, _315f273def32;
          if (this.ended) {
            null == (_315f273def32 = (_1e85f3a9716c = this.cbs).onerror) || _315f273def32.call(_1e85f3a9716c, Error(".write() after done!"));
            return;
          }
          this.buffers.push(_1d3a38243eaf), this.tokenizer.running && (this.tokenizer.write(_1d3a38243eaf), 
          this.writeIndex++);
        }
        end(_1d3a38243eaf) {
          var _1e85f3a9716c, _315f273def32;
          if (this.ended) {
            null == (_315f273def32 = (_1e85f3a9716c = this.cbs).onerror) || _315f273def32.call(_1e85f3a9716c, Error(".end() after done!"));
            return;
          }
          _1d3a38243eaf && this.write(_1d3a38243eaf), this.ended = !0, this.tokenizer.end();
        }
        pause() {
          this.tokenizer.pause();
        }
        resume() {
          for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length; ) this.tokenizer.write(this.buffers[this.writeIndex++]);
          this.ended && this.tokenizer.end();
        }
        parseChunk(_1d3a38243eaf) {
          this.write(_1d3a38243eaf);
        }
        done(_1d3a38243eaf) {
          this.end(_1d3a38243eaf);
        }
      }
    },
    5645: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.d(_1e85f3a9716c, {
        A: () => p,
        X: () => _5a5cce1642e9
      });
      var _4e0975a1482c, _3bdf3e120ffd, _ee61174f6deb, _a609a4c7d80c, _f5fe395ebb04, _5a5cce1642e9, _64f2b2ef4558 = _315f273def32(2990);
      function u(_1d3a38243eaf) {
        return _1d3a38243eaf === _a609a4c7d80c.Space || _1d3a38243eaf === _a609a4c7d80c.NewLine || _1d3a38243eaf === _a609a4c7d80c.Tab || _1d3a38243eaf === _a609a4c7d80c.FormFeed || _1d3a38243eaf === _a609a4c7d80c.CarriageReturn;
      }
      function d(_1d3a38243eaf) {
        return _1d3a38243eaf === _a609a4c7d80c.Slash || _1d3a38243eaf === _a609a4c7d80c.Gt || u(_1d3a38243eaf);
      }
      (_4e0975a1482c = _a609a4c7d80c || (_a609a4c7d80c = {}))[_4e0975a1482c.Tab = 9] = "Tab", 
      _4e0975a1482c[_4e0975a1482c.NewLine = 10] = "NewLine", _4e0975a1482c[_4e0975a1482c.FormFeed = 12] = "FormFeed", 
      _4e0975a1482c[_4e0975a1482c.CarriageReturn = 13] = "CarriageReturn", _4e0975a1482c[_4e0975a1482c.Space = 32] = "Space", 
      _4e0975a1482c[_4e0975a1482c.ExclamationMark = 33] = "ExclamationMark", _4e0975a1482c[_4e0975a1482c.Number = 35] = "Number", 
      _4e0975a1482c[_4e0975a1482c.Amp = 38] = "Amp", _4e0975a1482c[_4e0975a1482c.SingleQuote = 39] = "SingleQuote", 
      _4e0975a1482c[_4e0975a1482c.DoubleQuote = 34] = "DoubleQuote", _4e0975a1482c[_4e0975a1482c.Dash = 45] = "Dash", 
      _4e0975a1482c[_4e0975a1482c.Slash = 47] = "Slash", _4e0975a1482c[_4e0975a1482c.Zero = 48] = "Zero", 
      _4e0975a1482c[_4e0975a1482c.Nine = 57] = "Nine", _4e0975a1482c[_4e0975a1482c.Semi = 59] = "Semi", 
      _4e0975a1482c[_4e0975a1482c.Lt = 60] = "Lt", _4e0975a1482c[_4e0975a1482c.Eq = 61] = "Eq", 
      _4e0975a1482c[_4e0975a1482c.Gt = 62] = "Gt", _4e0975a1482c[_4e0975a1482c.Questionmark = 63] = "Questionmark", 
      _4e0975a1482c[_4e0975a1482c.UpperA = 65] = "UpperA", _4e0975a1482c[_4e0975a1482c.LowerA = 97] = "LowerA", 
      _4e0975a1482c[_4e0975a1482c.UpperF = 70] = "UpperF", _4e0975a1482c[_4e0975a1482c.LowerF = 102] = "LowerF", 
      _4e0975a1482c[_4e0975a1482c.UpperZ = 90] = "UpperZ", _4e0975a1482c[_4e0975a1482c.LowerZ = 122] = "LowerZ", 
      _4e0975a1482c[_4e0975a1482c.LowerX = 120] = "LowerX", _4e0975a1482c[_4e0975a1482c.OpeningSquareBracket = 91] = "OpeningSquareBracket", 
      (_3bdf3e120ffd = _f5fe395ebb04 || (_f5fe395ebb04 = {}))[_3bdf3e120ffd.Text = 1] = "Text", 
      _3bdf3e120ffd[_3bdf3e120ffd.BeforeTagName = 2] = "BeforeTagName", _3bdf3e120ffd[_3bdf3e120ffd.InTagName = 3] = "InTagName", 
      _3bdf3e120ffd[_3bdf3e120ffd.InSelfClosingTag = 4] = "InSelfClosingTag", _3bdf3e120ffd[_3bdf3e120ffd.BeforeClosingTagName = 5] = "BeforeClosingTagName", 
      _3bdf3e120ffd[_3bdf3e120ffd.InClosingTagName = 6] = "InClosingTagName", _3bdf3e120ffd[_3bdf3e120ffd.AfterClosingTagName = 7] = "AfterClosingTagName", 
      _3bdf3e120ffd[_3bdf3e120ffd.BeforeAttributeName = 8] = "BeforeAttributeName", _3bdf3e120ffd[_3bdf3e120ffd.InAttributeName = 9] = "InAttributeName", 
      _3bdf3e120ffd[_3bdf3e120ffd.AfterAttributeName = 10] = "AfterAttributeName", _3bdf3e120ffd[_3bdf3e120ffd.BeforeAttributeValue = 11] = "BeforeAttributeValue", 
      _3bdf3e120ffd[_3bdf3e120ffd.InAttributeValueDq = 12] = "InAttributeValueDq", _3bdf3e120ffd[_3bdf3e120ffd.InAttributeValueSq = 13] = "InAttributeValueSq", 
      _3bdf3e120ffd[_3bdf3e120ffd.InAttributeValueNq = 14] = "InAttributeValueNq", _3bdf3e120ffd[_3bdf3e120ffd.BeforeDeclaration = 15] = "BeforeDeclaration", 
      _3bdf3e120ffd[_3bdf3e120ffd.InDeclaration = 16] = "InDeclaration", _3bdf3e120ffd[_3bdf3e120ffd.InProcessingInstruction = 17] = "InProcessingInstruction", 
      _3bdf3e120ffd[_3bdf3e120ffd.BeforeComment = 18] = "BeforeComment", _3bdf3e120ffd[_3bdf3e120ffd.CDATASequence = 19] = "CDATASequence", 
      _3bdf3e120ffd[_3bdf3e120ffd.InSpecialComment = 20] = "InSpecialComment", _3bdf3e120ffd[_3bdf3e120ffd.InCommentLike = 21] = "InCommentLike", 
      _3bdf3e120ffd[_3bdf3e120ffd.BeforeSpecialS = 22] = "BeforeSpecialS", _3bdf3e120ffd[_3bdf3e120ffd.BeforeSpecialT = 23] = "BeforeSpecialT", 
      _3bdf3e120ffd[_3bdf3e120ffd.SpecialStartSequence = 24] = "SpecialStartSequence", 
      _3bdf3e120ffd[_3bdf3e120ffd.InSpecialTag = 25] = "InSpecialTag", _3bdf3e120ffd[_3bdf3e120ffd.InEntity = 26] = "InEntity", 
      (_ee61174f6deb = _5a5cce1642e9 || (_5a5cce1642e9 = {}))[_ee61174f6deb.NoValue = 0] = "NoValue", 
      _ee61174f6deb[_ee61174f6deb.Unquoted = 1] = "Unquoted", _ee61174f6deb[_ee61174f6deb.Single = 2] = "Single", 
      _ee61174f6deb[_ee61174f6deb.Double = 3] = "Double";
      let _611b46e2fd2a = {
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
        constructor({xmlMode: _1d3a38243eaf = !1, decodeEntities: _1e85f3a9716c = !0}, _315f273def32) {
          this.cbs = _315f273def32, this.state = _f5fe395ebb04.Text, this.buffer = "", this.sectionStart = 0, 
          this.index = 0, this.entityStart = 0, this.baseState = _f5fe395ebb04.Text, this.isSpecial = !1, 
          this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, 
          this.xmlMode = _1d3a38243eaf, this.decodeEntities = _1e85f3a9716c, this.entityDecoder = new _64f2b2ef4558.Wf(_1d3a38243eaf ? _64f2b2ef4558.sr : _64f2b2ef4558.qN, (_1d3a38243eaf, _1e85f3a9716c) => this.emitCodePoint(_1d3a38243eaf, _1e85f3a9716c));
        }
        reset() {
          this.state = _f5fe395ebb04.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, 
          this.baseState = _f5fe395ebb04.Text, this.currentSequence = void 0, this.running = !0, 
          this.offset = 0;
        }
        write(_1d3a38243eaf) {
          this.offset += this.buffer.length, this.buffer = _1d3a38243eaf, this.parse();
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
        stateText(_1d3a38243eaf) {
          _1d3a38243eaf === _a609a4c7d80c.Lt || !this.decodeEntities && this.fastForwardTo(_a609a4c7d80c.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), 
          this.state = _f5fe395ebb04.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && _1d3a38243eaf === _a609a4c7d80c.Amp && this.startEntity();
        }
        stateSpecialStartSequence(_1d3a38243eaf) {
          let _1e85f3a9716c = this.sequenceIndex === this.currentSequence.length;
          if (_1e85f3a9716c ? d(_1d3a38243eaf) : (32 | _1d3a38243eaf) === this.currentSequence[this.sequenceIndex]) {
            if (!_1e85f3a9716c) return void this.sequenceIndex++;
          } else this.isSpecial = !1;
          this.sequenceIndex = 0, this.state = _f5fe395ebb04.InTagName, this.stateInTagName(_1d3a38243eaf);
        }
        stateInSpecialTag(_1d3a38243eaf) {
          if (this.sequenceIndex === this.currentSequence.length) {
            if (_1d3a38243eaf === _a609a4c7d80c.Gt || u(_1d3a38243eaf)) {
              let _1e85f3a9716c = this.index - this.currentSequence.length;
              if (this.sectionStart < _1e85f3a9716c) {
                let _1d3a38243eaf = this.index;
                this.index = _1e85f3a9716c, this.cbs.ontext(this.sectionStart, _1e85f3a9716c), this.index = _1d3a38243eaf;
              }
              this.isSpecial = !1, this.sectionStart = _1e85f3a9716c + 2, this.stateInClosingTagName(_1d3a38243eaf);
              return;
            }
            this.sequenceIndex = 0;
          }
          (32 | _1d3a38243eaf) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : 0 === this.sequenceIndex ? this.currentSequence === _611b46e2fd2a.TitleEnd ? this.decodeEntities && _1d3a38243eaf === _a609a4c7d80c.Amp && this.startEntity() : this.fastForwardTo(_a609a4c7d80c.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = Number(_1d3a38243eaf === _a609a4c7d80c.Lt);
        }
        stateCDATASequence(_1d3a38243eaf) {
          _1d3a38243eaf === _611b46e2fd2a.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === _611b46e2fd2a.Cdata.length && (this.state = _f5fe395ebb04.InCommentLike, 
          this.currentSequence = _611b46e2fd2a.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, 
          this.state = _f5fe395ebb04.InDeclaration, this.stateInDeclaration(_1d3a38243eaf));
        }
        fastForwardTo(_1d3a38243eaf) {
          for (;++this.index < this.buffer.length + this.offset; ) if (this.buffer.charCodeAt(this.index - this.offset) === _1d3a38243eaf) return !0;
          return this.index = this.buffer.length + this.offset - 1, !1;
        }
        stateInCommentLike(_1d3a38243eaf) {
          _1d3a38243eaf === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === _611b46e2fd2a.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), 
          this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = _f5fe395ebb04.Text) : 0 === this.sequenceIndex ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : _1d3a38243eaf !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
        }
        isTagStartChar(_1d3a38243eaf) {
          return this.xmlMode ? !d(_1d3a38243eaf) : _1d3a38243eaf >= _a609a4c7d80c.LowerA && _1d3a38243eaf <= _a609a4c7d80c.LowerZ || _1d3a38243eaf >= _a609a4c7d80c.UpperA && _1d3a38243eaf <= _a609a4c7d80c.UpperZ;
        }
        startSpecial(_1d3a38243eaf, _1e85f3a9716c) {
          this.isSpecial = !0, this.currentSequence = _1d3a38243eaf, this.sequenceIndex = _1e85f3a9716c, 
          this.state = _f5fe395ebb04.SpecialStartSequence;
        }
        stateBeforeTagName(_1d3a38243eaf) {
          if (_1d3a38243eaf === _a609a4c7d80c.ExclamationMark) this.state = _f5fe395ebb04.BeforeDeclaration, 
          this.sectionStart = this.index + 1; else if (_1d3a38243eaf === _a609a4c7d80c.Questionmark) this.state = _f5fe395ebb04.InProcessingInstruction, 
          this.sectionStart = this.index + 1; else if (this.isTagStartChar(_1d3a38243eaf)) {
            let _1e85f3a9716c = 32 | _1d3a38243eaf;
            this.sectionStart = this.index, this.xmlMode ? this.state = _f5fe395ebb04.InTagName : _1e85f3a9716c === _611b46e2fd2a.ScriptEnd[2] ? this.state = _f5fe395ebb04.BeforeSpecialS : _1e85f3a9716c === _611b46e2fd2a.TitleEnd[2] || _1e85f3a9716c === _611b46e2fd2a.XmpEnd[2] ? this.state = _f5fe395ebb04.BeforeSpecialT : this.state = _f5fe395ebb04.InTagName;
          } else _1d3a38243eaf === _a609a4c7d80c.Slash ? this.state = _f5fe395ebb04.BeforeClosingTagName : (this.state = _f5fe395ebb04.Text, 
          this.stateText(_1d3a38243eaf));
        }
        stateInTagName(_1d3a38243eaf) {
          d(_1d3a38243eaf) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, 
          this.state = _f5fe395ebb04.BeforeAttributeName, this.stateBeforeAttributeName(_1d3a38243eaf));
        }
        stateBeforeClosingTagName(_1d3a38243eaf) {
          u(_1d3a38243eaf) || (_1d3a38243eaf === _a609a4c7d80c.Gt ? this.state = _f5fe395ebb04.Text : (this.state = this.isTagStartChar(_1d3a38243eaf) ? _f5fe395ebb04.InClosingTagName : _f5fe395ebb04.InSpecialComment, 
          this.sectionStart = this.index));
        }
        stateInClosingTagName(_1d3a38243eaf) {
          (_1d3a38243eaf === _a609a4c7d80c.Gt || u(_1d3a38243eaf)) && (this.cbs.onclosetag(this.sectionStart, this.index), 
          this.sectionStart = -1, this.state = _f5fe395ebb04.AfterClosingTagName, this.stateAfterClosingTagName(_1d3a38243eaf));
        }
        stateAfterClosingTagName(_1d3a38243eaf) {
          (_1d3a38243eaf === _a609a4c7d80c.Gt || this.fastForwardTo(_a609a4c7d80c.Gt)) && (this.state = _f5fe395ebb04.Text, 
          this.sectionStart = this.index + 1);
        }
        stateBeforeAttributeName(_1d3a38243eaf) {
          _1d3a38243eaf === _a609a4c7d80c.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = _f5fe395ebb04.InSpecialTag, 
          this.sequenceIndex = 0) : this.state = _f5fe395ebb04.Text, this.sectionStart = this.index + 1) : _1d3a38243eaf === _a609a4c7d80c.Slash ? this.state = _f5fe395ebb04.InSelfClosingTag : u(_1d3a38243eaf) || (this.state = _f5fe395ebb04.InAttributeName, 
          this.sectionStart = this.index);
        }
        stateInSelfClosingTag(_1d3a38243eaf) {
          _1d3a38243eaf === _a609a4c7d80c.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = _f5fe395ebb04.Text, 
          this.sectionStart = this.index + 1, this.isSpecial = !1) : u(_1d3a38243eaf) || (this.state = _f5fe395ebb04.BeforeAttributeName, 
          this.stateBeforeAttributeName(_1d3a38243eaf));
        }
        stateInAttributeName(_1d3a38243eaf) {
          (_1d3a38243eaf === _a609a4c7d80c.Eq || d(_1d3a38243eaf)) && (this.cbs.onattribname(this.sectionStart, this.index), 
          this.sectionStart = this.index, this.state = _f5fe395ebb04.AfterAttributeName, this.stateAfterAttributeName(_1d3a38243eaf));
        }
        stateAfterAttributeName(_1d3a38243eaf) {
          _1d3a38243eaf === _a609a4c7d80c.Eq ? this.state = _f5fe395ebb04.BeforeAttributeValue : _1d3a38243eaf === _a609a4c7d80c.Slash || _1d3a38243eaf === _a609a4c7d80c.Gt ? (this.cbs.onattribend(_5a5cce1642e9.NoValue, this.sectionStart), 
          this.sectionStart = -1, this.state = _f5fe395ebb04.BeforeAttributeName, this.stateBeforeAttributeName(_1d3a38243eaf)) : u(_1d3a38243eaf) || (this.cbs.onattribend(_5a5cce1642e9.NoValue, this.sectionStart), 
          this.state = _f5fe395ebb04.InAttributeName, this.sectionStart = this.index);
        }
        stateBeforeAttributeValue(_1d3a38243eaf) {
          _1d3a38243eaf === _a609a4c7d80c.DoubleQuote ? (this.state = _f5fe395ebb04.InAttributeValueDq, 
          this.sectionStart = this.index + 1) : _1d3a38243eaf === _a609a4c7d80c.SingleQuote ? (this.state = _f5fe395ebb04.InAttributeValueSq, 
          this.sectionStart = this.index + 1) : u(_1d3a38243eaf) || (this.sectionStart = this.index, 
          this.state = _f5fe395ebb04.InAttributeValueNq, this.stateInAttributeValueNoQuotes(_1d3a38243eaf));
        }
        handleInAttributeValue(_1d3a38243eaf, _1e85f3a9716c) {
          _1d3a38243eaf === _1e85f3a9716c || !this.decodeEntities && this.fastForwardTo(_1e85f3a9716c) ? (this.cbs.onattribdata(this.sectionStart, this.index), 
          this.sectionStart = -1, this.cbs.onattribend(_1e85f3a9716c === _a609a4c7d80c.DoubleQuote ? _5a5cce1642e9.Double : _5a5cce1642e9.Single, this.index + 1), 
          this.state = _f5fe395ebb04.BeforeAttributeName) : this.decodeEntities && _1d3a38243eaf === _a609a4c7d80c.Amp && this.startEntity();
        }
        stateInAttributeValueDoubleQuotes(_1d3a38243eaf) {
          this.handleInAttributeValue(_1d3a38243eaf, _a609a4c7d80c.DoubleQuote);
        }
        stateInAttributeValueSingleQuotes(_1d3a38243eaf) {
          this.handleInAttributeValue(_1d3a38243eaf, _a609a4c7d80c.SingleQuote);
        }
        stateInAttributeValueNoQuotes(_1d3a38243eaf) {
          u(_1d3a38243eaf) || _1d3a38243eaf === _a609a4c7d80c.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), 
          this.sectionStart = -1, this.cbs.onattribend(_5a5cce1642e9.Unquoted, this.index), 
          this.state = _f5fe395ebb04.BeforeAttributeName, this.stateBeforeAttributeName(_1d3a38243eaf)) : this.decodeEntities && _1d3a38243eaf === _a609a4c7d80c.Amp && this.startEntity();
        }
        stateBeforeDeclaration(_1d3a38243eaf) {
          _1d3a38243eaf === _a609a4c7d80c.OpeningSquareBracket ? (this.state = _f5fe395ebb04.CDATASequence, 
          this.sequenceIndex = 0) : this.state = _1d3a38243eaf === _a609a4c7d80c.Dash ? _f5fe395ebb04.BeforeComment : _f5fe395ebb04.InDeclaration;
        }
        stateInDeclaration(_1d3a38243eaf) {
          (_1d3a38243eaf === _a609a4c7d80c.Gt || this.fastForwardTo(_a609a4c7d80c.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), 
          this.state = _f5fe395ebb04.Text, this.sectionStart = this.index + 1);
        }
        stateInProcessingInstruction(_1d3a38243eaf) {
          (_1d3a38243eaf === _a609a4c7d80c.Gt || this.fastForwardTo(_a609a4c7d80c.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), 
          this.state = _f5fe395ebb04.Text, this.sectionStart = this.index + 1);
        }
        stateBeforeComment(_1d3a38243eaf) {
          _1d3a38243eaf === _a609a4c7d80c.Dash ? (this.state = _f5fe395ebb04.InCommentLike, 
          this.currentSequence = _611b46e2fd2a.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = _f5fe395ebb04.InDeclaration;
        }
        stateInSpecialComment(_1d3a38243eaf) {
          (_1d3a38243eaf === _a609a4c7d80c.Gt || this.fastForwardTo(_a609a4c7d80c.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), 
          this.state = _f5fe395ebb04.Text, this.sectionStart = this.index + 1);
        }
        stateBeforeSpecialS(_1d3a38243eaf) {
          let _1e85f3a9716c = 32 | _1d3a38243eaf;
          _1e85f3a9716c === _611b46e2fd2a.ScriptEnd[3] ? this.startSpecial(_611b46e2fd2a.ScriptEnd, 4) : _1e85f3a9716c === _611b46e2fd2a.StyleEnd[3] ? this.startSpecial(_611b46e2fd2a.StyleEnd, 4) : (this.state = _f5fe395ebb04.InTagName, 
          this.stateInTagName(_1d3a38243eaf));
        }
        stateBeforeSpecialT(_1d3a38243eaf) {
          switch (32 | _1d3a38243eaf) {
           case _611b46e2fd2a.TitleEnd[3]:
            this.startSpecial(_611b46e2fd2a.TitleEnd, 4);
            break;

           case _611b46e2fd2a.TextareaEnd[3]:
            this.startSpecial(_611b46e2fd2a.TextareaEnd, 4);
            break;

           case _611b46e2fd2a.XmpEnd[3]:
            this.startSpecial(_611b46e2fd2a.XmpEnd, 4);
            break;

           default:
            this.state = _f5fe395ebb04.InTagName, this.stateInTagName(_1d3a38243eaf);
          }
        }
        startEntity() {
          this.baseState = this.state, this.state = _f5fe395ebb04.InEntity, this.entityStart = this.index, 
          this.entityDecoder.startEntity(this.xmlMode ? _64f2b2ef4558.FJ.Strict : this.baseState === _f5fe395ebb04.Text || this.baseState === _f5fe395ebb04.InSpecialTag ? _64f2b2ef4558.FJ.Legacy : _64f2b2ef4558.FJ.Attribute);
        }
        stateInEntity() {
          let _1d3a38243eaf = this.entityDecoder.write(this.buffer, this.index - this.offset);
          _1d3a38243eaf >= 0 ? (this.state = this.baseState, 0 === _1d3a38243eaf && (this.index = this.entityStart)) : this.index = this.offset + this.buffer.length - 1;
        }
        cleanup() {
          this.running && this.sectionStart !== this.index && (this.state === _f5fe395ebb04.Text || this.state === _f5fe395ebb04.InSpecialTag && 0 === this.sequenceIndex ? (this.cbs.ontext(this.sectionStart, this.index), 
          this.sectionStart = this.index) : (this.state === _f5fe395ebb04.InAttributeValueDq || this.state === _f5fe395ebb04.InAttributeValueSq || this.state === _f5fe395ebb04.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), 
          this.sectionStart = this.index));
        }
        shouldContinue() {
          return this.index < this.buffer.length + this.offset && this.running;
        }
        parse() {
          for (;this.shouldContinue(); ) {
            let _1d3a38243eaf = this.buffer.charCodeAt(this.index - this.offset);
            switch (this.state) {
             case _f5fe395ebb04.Text:
              this.stateText(_1d3a38243eaf);
              break;

             case _f5fe395ebb04.SpecialStartSequence:
              this.stateSpecialStartSequence(_1d3a38243eaf);
              break;

             case _f5fe395ebb04.InSpecialTag:
              this.stateInSpecialTag(_1d3a38243eaf);
              break;

             case _f5fe395ebb04.CDATASequence:
              this.stateCDATASequence(_1d3a38243eaf);
              break;

             case _f5fe395ebb04.InAttributeValueDq:
              this.stateInAttributeValueDoubleQuotes(_1d3a38243eaf);
              break;

             case _f5fe395ebb04.InAttributeName:
              this.stateInAttributeName(_1d3a38243eaf);
              break;

             case _f5fe395ebb04.InCommentLike:
              this.stateInCommentLike(_1d3a38243eaf);
              break;

             case _f5fe395ebb04.InSpecialComment:
              this.stateInSpecialComment(_1d3a38243eaf);
              break;

             case _f5fe395ebb04.BeforeAttributeName:
              this.stateBeforeAttributeName(_1d3a38243eaf);
              break;

             case _f5fe395ebb04.InTagName:
              this.stateInTagName(_1d3a38243eaf);
              break;

             case _f5fe395ebb04.InClosingTagName:
              this.stateInClosingTagName(_1d3a38243eaf);
              break;

             case _f5fe395ebb04.BeforeTagName:
              this.stateBeforeTagName(_1d3a38243eaf);
              break;

             case _f5fe395ebb04.AfterAttributeName:
              this.stateAfterAttributeName(_1d3a38243eaf);
              break;

             case _f5fe395ebb04.InAttributeValueSq:
              this.stateInAttributeValueSingleQuotes(_1d3a38243eaf);
              break;

             case _f5fe395ebb04.BeforeAttributeValue:
              this.stateBeforeAttributeValue(_1d3a38243eaf);
              break;

             case _f5fe395ebb04.BeforeClosingTagName:
              this.stateBeforeClosingTagName(_1d3a38243eaf);
              break;

             case _f5fe395ebb04.AfterClosingTagName:
              this.stateAfterClosingTagName(_1d3a38243eaf);
              break;

             case _f5fe395ebb04.BeforeSpecialS:
              this.stateBeforeSpecialS(_1d3a38243eaf);
              break;

             case _f5fe395ebb04.BeforeSpecialT:
              this.stateBeforeSpecialT(_1d3a38243eaf);
              break;

             case _f5fe395ebb04.InAttributeValueNq:
              this.stateInAttributeValueNoQuotes(_1d3a38243eaf);
              break;

             case _f5fe395ebb04.InSelfClosingTag:
              this.stateInSelfClosingTag(_1d3a38243eaf);
              break;

             case _f5fe395ebb04.InDeclaration:
              this.stateInDeclaration(_1d3a38243eaf);
              break;

             case _f5fe395ebb04.BeforeDeclaration:
              this.stateBeforeDeclaration(_1d3a38243eaf);
              break;

             case _f5fe395ebb04.BeforeComment:
              this.stateBeforeComment(_1d3a38243eaf);
              break;

             case _f5fe395ebb04.InProcessingInstruction:
              this.stateInProcessingInstruction(_1d3a38243eaf);
              break;

             case _f5fe395ebb04.InEntity:
              this.stateInEntity();
            }
            this.index++;
          }
          this.cleanup();
        }
        finish() {
          this.state === _f5fe395ebb04.InEntity && (this.entityDecoder.end(), this.state = this.baseState), 
          this.handleTrailingData(), this.cbs.onend();
        }
        handleTrailingData() {
          let _1d3a38243eaf = this.buffer.length + this.offset;
          this.sectionStart >= _1d3a38243eaf || (this.state === _f5fe395ebb04.InCommentLike ? this.currentSequence === _611b46e2fd2a.CdataEnd ? this.cbs.oncdata(this.sectionStart, _1d3a38243eaf, 0) : this.cbs.oncomment(this.sectionStart, _1d3a38243eaf, 0) : this.state === _f5fe395ebb04.InTagName || this.state === _f5fe395ebb04.BeforeAttributeName || this.state === _f5fe395ebb04.BeforeAttributeValue || this.state === _f5fe395ebb04.AfterAttributeName || this.state === _f5fe395ebb04.InAttributeName || this.state === _f5fe395ebb04.InAttributeValueSq || this.state === _f5fe395ebb04.InAttributeValueDq || this.state === _f5fe395ebb04.InAttributeValueNq || this.state === _f5fe395ebb04.InClosingTagName || this.cbs.ontext(this.sectionStart, _1d3a38243eaf));
        }
        emitCodePoint(_1d3a38243eaf, _1e85f3a9716c) {
          this.baseState !== _f5fe395ebb04.Text && this.baseState !== _f5fe395ebb04.InSpecialTag ? (this.sectionStart < this.entityStart && this.cbs.onattribdata(this.sectionStart, this.entityStart), 
          this.sectionStart = this.entityStart + _1e85f3a9716c, this.index = this.sectionStart - 1, 
          this.cbs.onattribentity(_1d3a38243eaf)) : (this.sectionStart < this.entityStart && this.cbs.ontext(this.sectionStart, this.entityStart), 
          this.sectionStart = this.entityStart + _1e85f3a9716c, this.index = this.sectionStart - 1, 
          this.cbs.ontextentity(_1d3a38243eaf, this.sectionStart));
        }
      }
    },
    3808: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.d(_1e85f3a9716c, {
        RJ: () => _3bdf3e120ffd,
        iX: () => _4e0975a1482c.i
      });
      var _4e0975a1482c = _315f273def32(4645);
      _315f273def32(8866), _315f273def32(5645);
      var _3bdf3e120ffd = _315f273def32(2743);
      _315f273def32(4993);
    },
    6570: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      let _4e0975a1482c, _3bdf3e120ffd, _ee61174f6deb, _a609a4c7d80c;
      _315f273def32.d(_1e85f3a9716c, {
        P2: () => f
      });
      let o = (_1d3a38243eaf, _1e85f3a9716c) => _1e85f3a9716c.some(_1e85f3a9716c => _1d3a38243eaf instanceof _1e85f3a9716c), _f5fe395ebb04 = new WeakMap, _5a5cce1642e9 = new WeakMap, _64f2b2ef4558 = new WeakMap, _611b46e2fd2a = {
        get(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
          if (_1d3a38243eaf instanceof IDBTransaction) {
            if ("done" === _1e85f3a9716c) return _f5fe395ebb04.get(_1d3a38243eaf);
            if ("store" === _1e85f3a9716c) return _315f273def32.objectStoreNames[1] ? void 0 : _315f273def32.objectStore(_315f273def32.objectStoreNames[0]);
          }
          return h(_1d3a38243eaf[_1e85f3a9716c]);
        },
        set: (_1d3a38243eaf, _1e85f3a9716c, _315f273def32) => (_1d3a38243eaf[_1e85f3a9716c] = _315f273def32, 
        !0),
        has: (_1d3a38243eaf, _1e85f3a9716c) => _1d3a38243eaf instanceof IDBTransaction && ("done" === _1e85f3a9716c || "store" === _1e85f3a9716c) || _1e85f3a9716c in _1d3a38243eaf
      };
      function h(_1d3a38243eaf) {
        if (_1d3a38243eaf instanceof IDBRequest) {
          let _1e85f3a9716c;
          return _1e85f3a9716c = new Promise((_1e85f3a9716c, _315f273def32) => {
            let n = () => {
              _1d3a38243eaf.removeEventListener("success", i), _1d3a38243eaf.removeEventListener("error", a);
            }, i = () => {
              _1e85f3a9716c(h(_1d3a38243eaf.result)), n();
            }, a = () => {
              _315f273def32(_1d3a38243eaf.error), n();
            };
            _1d3a38243eaf.addEventListener("success", i), _1d3a38243eaf.addEventListener("error", a);
          }), _64f2b2ef4558.set(_1e85f3a9716c, _1d3a38243eaf), _1e85f3a9716c;
        }
        if (_5a5cce1642e9.has(_1d3a38243eaf)) return _5a5cce1642e9.get(_1d3a38243eaf);
        let _1e85f3a9716c = function(_1d3a38243eaf) {
          if ("function" == typeof _1d3a38243eaf) return (_3bdf3e120ffd || (_3bdf3e120ffd = [ IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey ])).includes(_1d3a38243eaf) ? function(..._1e85f3a9716c) {
            return _1d3a38243eaf.apply(p(this), _1e85f3a9716c), h(this.request);
          } : function(..._1e85f3a9716c) {
            return h(_1d3a38243eaf.apply(p(this), _1e85f3a9716c));
          };
          return (_1d3a38243eaf instanceof IDBTransaction && function(_1d3a38243eaf) {
            if (_f5fe395ebb04.has(_1d3a38243eaf)) return;
            let _1e85f3a9716c = new Promise((_1e85f3a9716c, _315f273def32) => {
              let n = () => {
                _1d3a38243eaf.removeEventListener("complete", i), _1d3a38243eaf.removeEventListener("error", a), 
                _1d3a38243eaf.removeEventListener("abort", a);
              }, i = () => {
                _1e85f3a9716c(), n();
              }, a = () => {
                _315f273def32(_1d3a38243eaf.error || new DOMException("AbortError", "AbortError")), 
                n();
              };
              _1d3a38243eaf.addEventListener("complete", i), _1d3a38243eaf.addEventListener("error", a), 
              _1d3a38243eaf.addEventListener("abort", a);
            });
            _f5fe395ebb04.set(_1d3a38243eaf, _1e85f3a9716c);
          }(_1d3a38243eaf), o(_1d3a38243eaf, _4e0975a1482c || (_4e0975a1482c = [ IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction ]))) ? new Proxy(_1d3a38243eaf, _611b46e2fd2a) : _1d3a38243eaf;
        }(_1d3a38243eaf);
        return _1e85f3a9716c !== _1d3a38243eaf && (_5a5cce1642e9.set(_1d3a38243eaf, _1e85f3a9716c), 
        _64f2b2ef4558.set(_1e85f3a9716c, _1d3a38243eaf)), _1e85f3a9716c;
      }
      let p = _1d3a38243eaf => _64f2b2ef4558.get(_1d3a38243eaf);
      function f(_1d3a38243eaf, _1e85f3a9716c, {blocked: _315f273def32, upgrade: _4e0975a1482c, blocking: _3bdf3e120ffd, terminated: _ee61174f6deb} = {}) {
        let _a609a4c7d80c = indexedDB.open(_1d3a38243eaf, _1e85f3a9716c), _f5fe395ebb04 = h(_a609a4c7d80c);
        return _4e0975a1482c && _a609a4c7d80c.addEventListener("upgradeneeded", _1d3a38243eaf => {
          _4e0975a1482c(h(_a609a4c7d80c.result), _1d3a38243eaf.oldVersion, _1d3a38243eaf.newVersion, h(_a609a4c7d80c.transaction), _1d3a38243eaf);
        }), _315f273def32 && _a609a4c7d80c.addEventListener("blocked", _1d3a38243eaf => _315f273def32(_1d3a38243eaf.oldVersion, _1d3a38243eaf.newVersion, _1d3a38243eaf)), 
        _f5fe395ebb04.then(_1d3a38243eaf => {
          _ee61174f6deb && _1d3a38243eaf.addEventListener("close", () => _ee61174f6deb()), 
          _3bdf3e120ffd && _1d3a38243eaf.addEventListener("versionchange", _1d3a38243eaf => _3bdf3e120ffd(_1d3a38243eaf.oldVersion, _1d3a38243eaf.newVersion, _1d3a38243eaf));
        }).catch(() => {}), _f5fe395ebb04;
      }
      let _e853f5e31d91 = [ "get", "getKey", "getAll", "getAllKeys", "count" ], _3c266443ddce = [ "put", "add", "delete", "clear" ], _a9bd71b7ce50 = new Map;
      function b(_1d3a38243eaf, _1e85f3a9716c) {
        if (!(_1d3a38243eaf instanceof IDBDatabase && !(_1e85f3a9716c in _1d3a38243eaf) && "string" == typeof _1e85f3a9716c)) return;
        if (_a9bd71b7ce50.get(_1e85f3a9716c)) return _a9bd71b7ce50.get(_1e85f3a9716c);
        let _315f273def32 = _1e85f3a9716c.replace(/FromIndex$/, ""), _4e0975a1482c = _1e85f3a9716c !== _315f273def32, _3bdf3e120ffd = _3c266443ddce.includes(_315f273def32);
        if (!(_315f273def32 in (_4e0975a1482c ? IDBIndex : IDBObjectStore).prototype) || !(_3bdf3e120ffd || _e853f5e31d91.includes(_315f273def32))) return;
        let a = async function(_1d3a38243eaf, ..._1e85f3a9716c) {
          let _ee61174f6deb = this.transaction(_1d3a38243eaf, _3bdf3e120ffd ? "readwrite" : "readonly"), _a609a4c7d80c = _ee61174f6deb.store;
          return _4e0975a1482c && (_a609a4c7d80c = _a609a4c7d80c.index(_1e85f3a9716c.shift())), 
          (await Promise.all([ _a609a4c7d80c[_315f273def32](..._1e85f3a9716c), _3bdf3e120ffd && _ee61174f6deb.done ]))[0];
        };
        return _a9bd71b7ce50.set(_1e85f3a9716c, a), a;
      }
      _611b46e2fd2a = {
        ..._ee61174f6deb = _611b46e2fd2a,
        get: (_1d3a38243eaf, _1e85f3a9716c, _315f273def32) => b(_1d3a38243eaf, _1e85f3a9716c) || _ee61174f6deb.get(_1d3a38243eaf, _1e85f3a9716c, _315f273def32),
        has: (_1d3a38243eaf, _1e85f3a9716c) => !!b(_1d3a38243eaf, _1e85f3a9716c) || _ee61174f6deb.has(_1d3a38243eaf, _1e85f3a9716c)
      };
      let _542e5e0773c9 = [ "continue", "continuePrimaryKey", "advance" ], _81042f72aa99 = {}, _6a3515f0c6e8 = new WeakMap, _907a326e7bbc = new WeakMap, _50214709afdb = {
        get(_1d3a38243eaf, _1e85f3a9716c) {
          if (!_542e5e0773c9.includes(_1e85f3a9716c)) return _1d3a38243eaf[_1e85f3a9716c];
          let _315f273def32 = _81042f72aa99[_1e85f3a9716c];
          return _315f273def32 || (_315f273def32 = _81042f72aa99[_1e85f3a9716c] = function(..._1d3a38243eaf) {
            _6a3515f0c6e8.set(this, _907a326e7bbc.get(this)[_1e85f3a9716c](..._1d3a38243eaf));
          }), _315f273def32;
        }
      };
      async function* T(..._1d3a38243eaf) {
        let _1e85f3a9716c = this;
        if (_1e85f3a9716c instanceof IDBCursor || (_1e85f3a9716c = await _1e85f3a9716c.openCursor(..._1d3a38243eaf)), 
        !_1e85f3a9716c) return;
        let _315f273def32 = new Proxy(_1e85f3a9716c, _50214709afdb);
        for (_907a326e7bbc.set(_315f273def32, _1e85f3a9716c), _64f2b2ef4558.set(_315f273def32, p(_1e85f3a9716c)); _1e85f3a9716c; ) yield _315f273def32, 
        _1e85f3a9716c = await (_6a3515f0c6e8.get(_315f273def32) || _1e85f3a9716c.continue()), 
        _6a3515f0c6e8.delete(_315f273def32);
      }
      function k(_1d3a38243eaf, _1e85f3a9716c) {
        return _1e85f3a9716c === Symbol.asyncIterator && o(_1d3a38243eaf, [ IDBIndex, IDBObjectStore, IDBCursor ]) || "iterate" === _1e85f3a9716c && o(_1d3a38243eaf, [ IDBIndex, IDBObjectStore ]);
      }
      _611b46e2fd2a = {
        ..._a609a4c7d80c = _611b46e2fd2a,
        get: (_1d3a38243eaf, _1e85f3a9716c, _315f273def32) => k(_1d3a38243eaf, _1e85f3a9716c) ? T : _a609a4c7d80c.get(_1d3a38243eaf, _1e85f3a9716c, _315f273def32),
        has: (_1d3a38243eaf, _1e85f3a9716c) => k(_1d3a38243eaf, _1e85f3a9716c) || _a609a4c7d80c.has(_1d3a38243eaf, _1e85f3a9716c)
      };
    },
    1652: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      _315f273def32.d(_1e85f3a9716c, {
        N: () => n
      });
      function n() {
        return "10000000000".replace(/[018]/g, _1d3a38243eaf => (_1d3a38243eaf ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> _1d3a38243eaf / 4).toString(16));
      }
    },
    3907: function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
      let _4e0975a1482c;
      _315f273def32.d(_1e85f3a9716c, {
        LW: () => b,
        QR: () => x
      });
      var _3bdf3e120ffd = _315f273def32(1652);
      function a(_1d3a38243eaf, _1e85f3a9716c) {
        try {
          return _1d3a38243eaf.apply(this, _1e85f3a9716c);
        } catch (_1d3a38243eaf) {
          let _1e85f3a9716c, _315f273def32 = (_1e85f3a9716c = _4e0975a1482c.__externref_table_alloc(), 
          _4e0975a1482c.__wbindgen_export_2.set(_1e85f3a9716c, _1d3a38243eaf), _1e85f3a9716c);
          _4e0975a1482c.__wbindgen_exn_store(_315f273def32);
        }
      }
      let _ee61174f6deb = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
      }) : {
        decode: () => {
          throw Error("TextDecoder not available");
        }
      };
      "undefined" != typeof TextDecoder && _ee61174f6deb.decode();
      let _a609a4c7d80c = null;
      function l() {
        return (null === _a609a4c7d80c || 0 === _a609a4c7d80c.byteLength) && (_a609a4c7d80c = new Uint8Array(_4e0975a1482c.memory.buffer)), 
        _a609a4c7d80c;
      }
      function c(_1d3a38243eaf, _1e85f3a9716c) {
        return _1d3a38243eaf >>>= 0, _ee61174f6deb.decode(l().subarray(_1d3a38243eaf, _1d3a38243eaf + _1e85f3a9716c));
      }
      let _f5fe395ebb04 = 0, _5a5cce1642e9 = "undefined" != typeof TextEncoder ? new TextEncoder("utf-8") : {
        encode: () => {
          throw Error("TextEncoder not available");
        }
      }, _64f2b2ef4558 = "function" == typeof _5a5cce1642e9.encodeInto ? function(_1d3a38243eaf, _1e85f3a9716c) {
        return _5a5cce1642e9.encodeInto(_1d3a38243eaf, _1e85f3a9716c);
      } : function(_1d3a38243eaf, _1e85f3a9716c) {
        let _315f273def32 = _5a5cce1642e9.encode(_1d3a38243eaf);
        return _1e85f3a9716c.set(_315f273def32), {
          read: _1d3a38243eaf.length,
          written: _315f273def32.length
        };
      };
      function p(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
        if (void 0 === _315f273def32) {
          let _315f273def32 = _5a5cce1642e9.encode(_1d3a38243eaf), _4e0975a1482c = _1e85f3a9716c(_315f273def32.length, 1) >>> 0;
          return l().subarray(_4e0975a1482c, _4e0975a1482c + _315f273def32.length).set(_315f273def32), 
          _f5fe395ebb04 = _315f273def32.length, _4e0975a1482c;
        }
        let _4e0975a1482c = _1d3a38243eaf.length, _3bdf3e120ffd = _1e85f3a9716c(_4e0975a1482c, 1) >>> 0, _ee61174f6deb = l(), _a609a4c7d80c = 0;
        for (;_a609a4c7d80c < _4e0975a1482c; _a609a4c7d80c++) {
          let _1e85f3a9716c = _1d3a38243eaf.charCodeAt(_a609a4c7d80c);
          if (_1e85f3a9716c > 127) break;
          _ee61174f6deb[_3bdf3e120ffd + _a609a4c7d80c] = _1e85f3a9716c;
        }
        if (_a609a4c7d80c !== _4e0975a1482c) {
          0 !== _a609a4c7d80c && (_1d3a38243eaf = _1d3a38243eaf.slice(_a609a4c7d80c)), _3bdf3e120ffd = _315f273def32(_3bdf3e120ffd, _4e0975a1482c, _4e0975a1482c = _a609a4c7d80c + 3 * _1d3a38243eaf.length, 1) >>> 0;
          let _1e85f3a9716c = _64f2b2ef4558(_1d3a38243eaf, l().subarray(_3bdf3e120ffd + _a609a4c7d80c, _3bdf3e120ffd + _4e0975a1482c));
          _a609a4c7d80c += _1e85f3a9716c.written, _3bdf3e120ffd = _315f273def32(_3bdf3e120ffd, _4e0975a1482c, _a609a4c7d80c, 1) >>> 0;
        }
        return _f5fe395ebb04 = _a609a4c7d80c, _3bdf3e120ffd;
      }
      let _611b46e2fd2a = null;
      function g() {
        return (null === _611b46e2fd2a || !0 === _611b46e2fd2a.buffer.detached || void 0 === _611b46e2fd2a.buffer.detached && _611b46e2fd2a.buffer !== _4e0975a1482c.memory.buffer) && (_611b46e2fd2a = new DataView(_4e0975a1482c.memory.buffer)), 
        _611b46e2fd2a;
      }
      function m(_1d3a38243eaf) {
        let _1e85f3a9716c = _4e0975a1482c.__wbindgen_export_2.get(_1d3a38243eaf);
        return _4e0975a1482c.__externref_table_dealloc(_1d3a38243eaf), _1e85f3a9716c;
      }
      let _e853f5e31d91 = "undefined" == typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry(_1d3a38243eaf => _4e0975a1482c.__wbg_rewriter_free(_1d3a38243eaf >>> 0, 1));
      class b {
        __destroy_into_raw() {
          let _1d3a38243eaf = this.__wbg_ptr;
          return this.__wbg_ptr = 0, _e853f5e31d91.unregister(this), _1d3a38243eaf;
        }
        free() {
          let _1d3a38243eaf = this.__destroy_into_raw();
          _4e0975a1482c.__wbg_rewriter_free(_1d3a38243eaf, 0);
        }
        rewrite_js(_1d3a38243eaf, _1e85f3a9716c, _315f273def32, _3bdf3e120ffd) {
          let _ee61174f6deb = p(_1d3a38243eaf, _4e0975a1482c.__wbindgen_malloc, _4e0975a1482c.__wbindgen_realloc), _a609a4c7d80c = _f5fe395ebb04, _5a5cce1642e9 = p(_1e85f3a9716c, _4e0975a1482c.__wbindgen_malloc, _4e0975a1482c.__wbindgen_realloc), _64f2b2ef4558 = _f5fe395ebb04, _611b46e2fd2a = p(_315f273def32, _4e0975a1482c.__wbindgen_malloc, _4e0975a1482c.__wbindgen_realloc), _e853f5e31d91 = _f5fe395ebb04, _3c266443ddce = _4e0975a1482c.rewriter_rewrite_js(this.__wbg_ptr, _ee61174f6deb, _a609a4c7d80c, _5a5cce1642e9, _64f2b2ef4558, _611b46e2fd2a, _e853f5e31d91, _3bdf3e120ffd);
          if (_3c266443ddce[2]) throw m(_3c266443ddce[1]);
          return m(_3c266443ddce[0]);
        }
        rewrite_js_bytes(_1d3a38243eaf, _1e85f3a9716c, _315f273def32, _3bdf3e120ffd) {
          let _ee61174f6deb, _a609a4c7d80c = (_ee61174f6deb = (0, _4e0975a1482c.__wbindgen_malloc)(+_1d3a38243eaf.length, 1) >>> 0, 
          l().set(_1d3a38243eaf, _ee61174f6deb / 1), _f5fe395ebb04 = _1d3a38243eaf.length, 
          _ee61174f6deb), _5a5cce1642e9 = _f5fe395ebb04, _64f2b2ef4558 = p(_1e85f3a9716c, _4e0975a1482c.__wbindgen_malloc, _4e0975a1482c.__wbindgen_realloc), _611b46e2fd2a = _f5fe395ebb04, _e853f5e31d91 = p(_315f273def32, _4e0975a1482c.__wbindgen_malloc, _4e0975a1482c.__wbindgen_realloc), _3c266443ddce = _f5fe395ebb04, _a9bd71b7ce50 = _4e0975a1482c.rewriter_rewrite_js_bytes(this.__wbg_ptr, _a609a4c7d80c, _5a5cce1642e9, _64f2b2ef4558, _611b46e2fd2a, _e853f5e31d91, _3c266443ddce, _3bdf3e120ffd);
          if (_a9bd71b7ce50[2]) throw m(_a9bd71b7ce50[1]);
          return m(_a9bd71b7ce50[0]);
        }
        constructor(_1d3a38243eaf) {
          const _1e85f3a9716c = _4e0975a1482c.rewriter_new(_1d3a38243eaf);
          if (_1e85f3a9716c[2]) throw m(_1e85f3a9716c[1]);
          return this.__wbg_ptr = _1e85f3a9716c[0] >>> 0, _e853f5e31d91.register(this, this.__wbg_ptr, this), 
          this;
        }
      }
      async function w(_1d3a38243eaf, _1e85f3a9716c) {
        if ("function" == typeof Response && _1d3a38243eaf instanceof Response) {
          if ("function" == typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(_1d3a38243eaf, _1e85f3a9716c);
          } catch (_1e85f3a9716c) {
            if ("application/wasm" != _1d3a38243eaf.headers.get("Content-Type")) console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", _1e85f3a9716c); else throw _1e85f3a9716c;
          }
          let _315f273def32 = await _1d3a38243eaf.arrayBuffer();
          return await WebAssembly.instantiate(_315f273def32, _1e85f3a9716c);
        }
        {
          let _315f273def32 = await WebAssembly.instantiate(_1d3a38243eaf, _1e85f3a9716c);
          return _315f273def32 instanceof WebAssembly.Instance ? {
            instance: _315f273def32,
            module: _1d3a38243eaf
          } : _315f273def32;
        }
      }
      function S() {
        let _1d3a38243eaf = {};
        return _1d3a38243eaf.wbg = {}, _1d3a38243eaf.wbg.__wbg_buffer_609cc3eee51ed158 = function(_1d3a38243eaf) {
          return _1d3a38243eaf.buffer;
        }, _1d3a38243eaf.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
          return a(function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
            return _1d3a38243eaf.call(_1e85f3a9716c, _315f273def32);
          }, arguments);
        }, _1d3a38243eaf.wbg.__wbg_call_833bed5770ea2041 = function() {
          return a(function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32, _4e0975a1482c) {
            return _1d3a38243eaf.call(_1e85f3a9716c, _315f273def32, _4e0975a1482c);
          }, arguments);
        }, _1d3a38243eaf.wbg.__wbg_get_67b2ba62fc30de12 = function() {
          return a(function(_1d3a38243eaf, _1e85f3a9716c) {
            return Reflect.get(_1d3a38243eaf, _1e85f3a9716c);
          }, arguments);
        }, _1d3a38243eaf.wbg.__wbg_new_405e22f390576ce2 = function() {
          return {};
        }, _1d3a38243eaf.wbg.__wbg_new_78feb108b6472713 = function() {
          return [];
        }, _1d3a38243eaf.wbg.__wbg_new_9ffbe0a71eff35e3 = function() {
          return a(function(_1d3a38243eaf, _1e85f3a9716c) {
            return new URL(c(_1d3a38243eaf, _1e85f3a9716c));
          }, arguments);
        }, _1d3a38243eaf.wbg.__wbg_new_a12002a7f91c75be = function(_1d3a38243eaf) {
          return new Uint8Array(_1d3a38243eaf);
        }, _1d3a38243eaf.wbg.__wbg_newwithbase_161c299e7a34e2eb = function() {
          return a(function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32, _4e0975a1482c) {
            return new URL(c(_1d3a38243eaf, _1e85f3a9716c), c(_315f273def32, _4e0975a1482c));
          }, arguments);
        }, _1d3a38243eaf.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
          return new Uint8Array(_1d3a38243eaf, _1e85f3a9716c >>> 0, _315f273def32 >>> 0);
        }, _1d3a38243eaf.wbg.__wbg_scramtag_3a255d78b157986d = function(_1d3a38243eaf) {
          let _1e85f3a9716c = p((0, _3bdf3e120ffd.N)(), _4e0975a1482c.__wbindgen_malloc, _4e0975a1482c.__wbindgen_realloc), _315f273def32 = _f5fe395ebb04;
          g().setInt32(_1d3a38243eaf + 4, _315f273def32, !0), g().setInt32(_1d3a38243eaf + 0, _1e85f3a9716c, !0);
        }, _1d3a38243eaf.wbg.__wbg_set_bb8cecf6a62b9f46 = function() {
          return a(function(_1d3a38243eaf, _1e85f3a9716c, _315f273def32) {
            return Reflect.set(_1d3a38243eaf, _1e85f3a9716c, _315f273def32);
          }, arguments);
        }, _1d3a38243eaf.wbg.__wbg_toString_5285597960676b7b = function(_1d3a38243eaf) {
          return _1d3a38243eaf.toString();
        }, _1d3a38243eaf.wbg.__wbg_toString_c813bbd34d063839 = function(_1d3a38243eaf) {
          return _1d3a38243eaf.toString();
        }, _1d3a38243eaf.wbg.__wbindgen_boolean_get = function(_1d3a38243eaf) {
          return "boolean" == typeof _1d3a38243eaf ? +!!_1d3a38243eaf : 2;
        }, _1d3a38243eaf.wbg.__wbindgen_error_new = function(_1d3a38243eaf, _1e85f3a9716c) {
          return Error(c(_1d3a38243eaf, _1e85f3a9716c));
        }, _1d3a38243eaf.wbg.__wbindgen_init_externref_table = function() {
          let _1d3a38243eaf = _4e0975a1482c.__wbindgen_export_2, _1e85f3a9716c = _1d3a38243eaf.grow(4);
          _1d3a38243eaf.set(0, void 0), _1d3a38243eaf.set(_1e85f3a9716c + 0, void 0), _1d3a38243eaf.set(_1e85f3a9716c + 1, null), 
          _1d3a38243eaf.set(_1e85f3a9716c + 2, !0), _1d3a38243eaf.set(_1e85f3a9716c + 3, !1);
        }, _1d3a38243eaf.wbg.__wbindgen_is_function = function(_1d3a38243eaf) {
          return "function" == typeof _1d3a38243eaf;
        }, _1d3a38243eaf.wbg.__wbindgen_memory = function() {
          return _4e0975a1482c.memory;
        }, _1d3a38243eaf.wbg.__wbindgen_string_get = function(_1d3a38243eaf, _1e85f3a9716c) {
          let _315f273def32 = "string" == typeof _1e85f3a9716c ? _1e85f3a9716c : void 0;
          var _3bdf3e120ffd = null == _315f273def32 ? 0 : p(_315f273def32, _4e0975a1482c.__wbindgen_malloc, _4e0975a1482c.__wbindgen_realloc), _ee61174f6deb = _f5fe395ebb04;
          g().setInt32(_1d3a38243eaf + 4, _ee61174f6deb, !0), g().setInt32(_1d3a38243eaf + 0, _3bdf3e120ffd, !0);
        }, _1d3a38243eaf.wbg.__wbindgen_string_new = function(_1d3a38243eaf, _1e85f3a9716c) {
          return c(_1d3a38243eaf, _1e85f3a9716c);
        }, _1d3a38243eaf.wbg.__wbindgen_throw = function(_1d3a38243eaf, _1e85f3a9716c) {
          throw Error(c(_1d3a38243eaf, _1e85f3a9716c));
        }, _1d3a38243eaf;
      }
      function v(_1d3a38243eaf, _1e85f3a9716c) {
        return _4e0975a1482c = _1d3a38243eaf.exports, E.__wbindgen_wasm_module = _1e85f3a9716c, 
        _611b46e2fd2a = null, _a609a4c7d80c = null, _4e0975a1482c.__wbindgen_start(), _4e0975a1482c;
      }
      function x(_1d3a38243eaf) {
        if (void 0 !== _4e0975a1482c) return _4e0975a1482c;
        void 0 !== _1d3a38243eaf && (Object.getPrototypeOf(_1d3a38243eaf) === Object.prototype ? ({module: _1d3a38243eaf} = _1d3a38243eaf) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
        let _1e85f3a9716c = S();
        return _1d3a38243eaf instanceof WebAssembly.Module || (_1d3a38243eaf = new WebAssembly.Module(_1d3a38243eaf)), 
        v(new WebAssembly.Instance(_1d3a38243eaf, _1e85f3a9716c), _1d3a38243eaf);
      }
      async function E(_1d3a38243eaf) {
        if (void 0 !== _4e0975a1482c) return _4e0975a1482c;
        void 0 !== _1d3a38243eaf && (Object.getPrototypeOf(_1d3a38243eaf) === Object.prototype ? ({module_or_path: _1d3a38243eaf} = _1d3a38243eaf) : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), 
        void 0 === _1d3a38243eaf && (_1d3a38243eaf = new URL("wasm_bg.wasm", ""));
        let _1e85f3a9716c = S();
        ("string" == typeof _1d3a38243eaf || "function" == typeof Request && _1d3a38243eaf instanceof Request || "function" == typeof URL && _1d3a38243eaf instanceof URL) && (_1d3a38243eaf = fetch(_1d3a38243eaf));
        let {instance: _315f273def32, module: _3bdf3e120ffd} = await w(await _1d3a38243eaf, _1e85f3a9716c);
        return v(_315f273def32, _3bdf3e120ffd);
      }
    }
  }, _1e85f3a9716c = {};
  function r(_315f273def32) {
    var _4e0975a1482c = _1e85f3a9716c[_315f273def32];
    if (void 0 !== _4e0975a1482c) return _4e0975a1482c.exports;
    var _3bdf3e120ffd = _1e85f3a9716c[_315f273def32] = {
      exports: {}
    };
    return _1d3a38243eaf[_315f273def32](_3bdf3e120ffd, _3bdf3e120ffd.exports, r), _3bdf3e120ffd.exports;
  }
  r.n = _1d3a38243eaf => {
    var _1e85f3a9716c = _1d3a38243eaf && _1d3a38243eaf.__esModule ? () => _1d3a38243eaf.default : () => _1d3a38243eaf;
    return r.d(_1e85f3a9716c, {
      a: _1e85f3a9716c
    }), _1e85f3a9716c;
  }, r.d = (_1d3a38243eaf, _1e85f3a9716c) => {
    for (var _315f273def32 in _1e85f3a9716c) r.o(_1e85f3a9716c, _315f273def32) && !r.o(_1d3a38243eaf, _315f273def32) && Object.defineProperty(_1d3a38243eaf, _315f273def32, {
      enumerable: !0,
      get: _1e85f3a9716c[_315f273def32]
    });
  }, r.o = (_1d3a38243eaf, _1e85f3a9716c) => Object.prototype.hasOwnProperty.call(_1d3a38243eaf, _1e85f3a9716c), 
  r.r = _1d3a38243eaf => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(_1d3a38243eaf, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(_1d3a38243eaf, "__esModule", {
      value: !0
    });
  }, globalThis.$studyjetRequire = function(_1d3a38243eaf) {
    return r(409)(_1d3a38243eaf);
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
