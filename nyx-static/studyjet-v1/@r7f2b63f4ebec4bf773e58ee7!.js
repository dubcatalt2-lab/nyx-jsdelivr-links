(() => {
  var _3a5021004442 = {
    4322: function(_3a5021004442) {
      var _271dc742b5dc = {
        decodeValues: !0,
        map: !1,
        silent: !1
      };
      function r(_3a5021004442) {
        return "string" == typeof _3a5021004442 && !!_3a5021004442.trim();
      }
      function n(_3a5021004442, _4a43e396a3cb) {
        var _333044d6fd1e, _5bd11b3c31ff, _b6a548cb3b03, _97105b6bb452, _b5b9693d9c71 = _3a5021004442.split(";").filter(r), _aabd55df2659 = (_333044d6fd1e = _b5b9693d9c71.shift(), 
        _5bd11b3c31ff = "", _b6a548cb3b03 = "", (_97105b6bb452 = _333044d6fd1e.split("=")).length > 1 ? (_5bd11b3c31ff = _97105b6bb452.shift(), 
        _b6a548cb3b03 = _97105b6bb452.join("=")) : _b6a548cb3b03 = _333044d6fd1e, {
          name: _5bd11b3c31ff,
          value: _b6a548cb3b03
        }), _f1f27b0dceb6 = _aabd55df2659.name, _188ac31e3f35 = _aabd55df2659.value;
        _4a43e396a3cb = _4a43e396a3cb ? Object.assign({}, _271dc742b5dc, _4a43e396a3cb) : _271dc742b5dc;
        try {
          _188ac31e3f35 = _4a43e396a3cb.decodeValues ? decodeURIComponent(_188ac31e3f35) : _188ac31e3f35;
        } catch (_3a5021004442) {
          console.error("set-cookie-parser encountered an error while decoding a cookie with value '" + _188ac31e3f35 + "'. Set options.decodeValues to false to disable this feature.", _3a5021004442);
        }
        var _ab0a35acfb91 = {
          name: _f1f27b0dceb6,
          value: _188ac31e3f35
        };
        return _b5b9693d9c71.forEach(function(_3a5021004442) {
          var _271dc742b5dc = _3a5021004442.split("="), _4a43e396a3cb = _271dc742b5dc.shift().trimLeft().toLowerCase(), _333044d6fd1e = _271dc742b5dc.join("=");
          "expires" === _4a43e396a3cb ? _ab0a35acfb91.expires = new Date(_333044d6fd1e) : "max-age" === _4a43e396a3cb ? _ab0a35acfb91.maxAge = parseInt(_333044d6fd1e, 10) : "secure" === _4a43e396a3cb ? _ab0a35acfb91.secure = !0 : "httponly" === _4a43e396a3cb ? _ab0a35acfb91.httpOnly = !0 : "samesite" === _4a43e396a3cb ? _ab0a35acfb91.sameSite = _333044d6fd1e : "partitioned" === _4a43e396a3cb ? _ab0a35acfb91.partitioned = !0 : _ab0a35acfb91[_4a43e396a3cb] = _333044d6fd1e;
        }), _ab0a35acfb91;
      }
      function i(_3a5021004442, _4a43e396a3cb) {
        if (_4a43e396a3cb = _4a43e396a3cb ? Object.assign({}, _271dc742b5dc, _4a43e396a3cb) : _271dc742b5dc, 
        !_3a5021004442) if (!_4a43e396a3cb.map) return []; else return {};
        if (_3a5021004442.headers) if ("function" == typeof _3a5021004442.headers.getSetCookie) _3a5021004442 = _3a5021004442.headers.getSetCookie(); else if (_3a5021004442.headers["set-cookie"]) _3a5021004442 = _3a5021004442.headers["set-cookie"]; else {
          var _333044d6fd1e = _3a5021004442.headers[Object.keys(_3a5021004442.headers).find(function(_3a5021004442) {
            return "set-cookie" === _3a5021004442.toLowerCase();
          })];
          _333044d6fd1e || !_3a5021004442.headers.cookie || _4a43e396a3cb.silent || console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."), 
          _3a5021004442 = _333044d6fd1e;
        }
        return (Array.isArray(_3a5021004442) || (_3a5021004442 = [ _3a5021004442 ]), _4a43e396a3cb.map) ? _3a5021004442.filter(r).reduce(function(_3a5021004442, _271dc742b5dc) {
          var _333044d6fd1e = n(_271dc742b5dc, _4a43e396a3cb);
          return _3a5021004442[_333044d6fd1e.name] = _333044d6fd1e, _3a5021004442;
        }, {}) : _3a5021004442.filter(r).map(function(_3a5021004442) {
          return n(_3a5021004442, _4a43e396a3cb);
        });
      }
      _3a5021004442.exports = i, _3a5021004442.exports.parse = i, _3a5021004442.exports.parseString = n, 
      _3a5021004442.exports.splitCookiesString = function(_3a5021004442) {
        if (Array.isArray(_3a5021004442)) return _3a5021004442;
        if ("string" != typeof _3a5021004442) return [];
        var _271dc742b5dc, _4a43e396a3cb, _333044d6fd1e, _5bd11b3c31ff, _b6a548cb3b03, _97105b6bb452 = [], _b5b9693d9c71 = 0;
        function l() {
          for (;_b5b9693d9c71 < _3a5021004442.length && /\s/.test(_3a5021004442.charAt(_b5b9693d9c71)); ) _b5b9693d9c71 += 1;
          return _b5b9693d9c71 < _3a5021004442.length;
        }
        for (;_b5b9693d9c71 < _3a5021004442.length; ) {
          for (_271dc742b5dc = _b5b9693d9c71, _b6a548cb3b03 = !1; l(); ) if ("," === (_4a43e396a3cb = _3a5021004442.charAt(_b5b9693d9c71))) {
            for (_333044d6fd1e = _b5b9693d9c71, _b5b9693d9c71 += 1, l(), _5bd11b3c31ff = _b5b9693d9c71; _b5b9693d9c71 < _3a5021004442.length && "=" !== (_4a43e396a3cb = _3a5021004442.charAt(_b5b9693d9c71)) && ";" !== _4a43e396a3cb && "," !== _4a43e396a3cb; ) _b5b9693d9c71 += 1;
            _b5b9693d9c71 < _3a5021004442.length && "=" === _3a5021004442.charAt(_b5b9693d9c71) ? (_b6a548cb3b03 = !0, 
            _b5b9693d9c71 = _5bd11b3c31ff, _97105b6bb452.push(_3a5021004442.substring(_271dc742b5dc, _333044d6fd1e)), 
            _271dc742b5dc = _b5b9693d9c71) : _b5b9693d9c71 = _333044d6fd1e + 1;
          } else _b5b9693d9c71 += 1;
          (!_b6a548cb3b03 || _b5b9693d9c71 >= _3a5021004442.length) && _97105b6bb452.push(_3a5021004442.substring(_271dc742b5dc, _3a5021004442.length));
        }
        return _97105b6bb452;
      };
    },
    7302: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      var _333044d6fd1e = {
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
      function i(_3a5021004442) {
        return _4a43e396a3cb(a(_3a5021004442));
      }
      function a(_3a5021004442) {
        if (!_4a43e396a3cb.o(_333044d6fd1e, _3a5021004442)) {
          var _271dc742b5dc = Error("Cannot find module '" + _3a5021004442 + "'");
          throw _271dc742b5dc.code = "MODULE_NOT_FOUND", _271dc742b5dc;
        }
        return _333044d6fd1e[_3a5021004442];
      }
      i.keys = function() {
        return Object.keys(_333044d6fd1e);
      }, i.resolve = a, _3a5021004442.exports = i, i.id = 7302;
    },
    409: function(_3a5021004442) {
      function t(_3a5021004442) {
        var _271dc742b5dc = Error("Cannot find module '" + _3a5021004442 + "'");
        throw _271dc742b5dc.code = "MODULE_NOT_FOUND", _271dc742b5dc;
      }
      t.keys = () => [], t.resolve = t, t.id = 409, _3a5021004442.exports = t;
    },
    336: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        StudyJetClient: () => g
      });
      var _333044d6fd1e = _4a43e396a3cb(2794), _5bd11b3c31ff = _4a43e396a3cb(94), _b6a548cb3b03 = _4a43e396a3cb(3696), _97105b6bb452 = _4a43e396a3cb(581), _b5b9693d9c71 = _4a43e396a3cb(1862), _aabd55df2659 = _4a43e396a3cb(1472), _f1f27b0dceb6 = _4a43e396a3cb(37), _188ac31e3f35 = _4a43e396a3cb(3831), _ab0a35acfb91 = _4a43e396a3cb(1323), _5e52f02aa711 = _4a43e396a3cb(1229), _d5aac0c61341 = _4a43e396a3cb(4110), _8510cd3a9582 = _4a43e396a3cb(8665).A;
      class g {
        global;
        locationProxy;
        serviceWorker;
        bare;
        natives;
        descriptors;
        wrapfn;
        cookieStore=new _188ac31e3f35.k;
        eventcallbacks=new Map;
        meta;
        box;
        constructor(_3a5021004442) {
          if (this.global = _3a5021004442, _333044d6fd1e.pX in _3a5021004442) throw console.error("attempted to initialize a studyjet client, but one is already loaded - this is very bad"), 
          Error();
          if (_ab0a35acfb91.iswindow) {
            try {
              _333044d6fd1e.pX in _3a5021004442.parent && (this.box = _3a5021004442.parent[_333044d6fd1e.pX].box);
            } catch {}
            try {
              _333044d6fd1e.pX in _3a5021004442.top && (this.box = _3a5021004442.top[_333044d6fd1e.pX].box);
            } catch {}
            try {
              _3a5021004442.opener && _333044d6fd1e.pX in _3a5021004442.opener && (this.box = _3a5021004442.opener[_333044d6fd1e.pX].box);
            } catch {}
            this.box || (_8510cd3a9582.warn("Creating SingletonBox"), this.box = new _5e52f02aa711.SingletonBox(this));
          } else this.box = new _5e52f02aa711.SingletonBox(this);
          this.box.registerClient(this, _3a5021004442), _ab0a35acfb91.iswindow ? this.bare = new _d5aac0c61341.Ay : this.bare = new _d5aac0c61341.Ay(new Promise(_3a5021004442 => {
            addEventListener("message", ({data: _271dc742b5dc}) => {
              "object" == typeof _271dc742b5dc && "$studyjet$type" in _271dc742b5dc && "baremuxinit" === _271dc742b5dc.$studyjet$type && _3a5021004442(_271dc742b5dc.port);
            });
          })), this.serviceWorker = this.global.navigator.serviceWorker, _ab0a35acfb91.iswindow && (_3a5021004442.document[_333044d6fd1e.pX] = this), 
          this.wrapfn = (0, _97105b6bb452.createWrapFn)(this, _3a5021004442), this.natives = {
            store: new Proxy({}, {
              get: (_3a5021004442, _271dc742b5dc) => {
                if (_271dc742b5dc in _3a5021004442) return _3a5021004442[_271dc742b5dc];
                let _4a43e396a3cb = _271dc742b5dc.split("."), _333044d6fd1e = _4a43e396a3cb.pop(), _5bd11b3c31ff = _4a43e396a3cb.reduce((_3a5021004442, _271dc742b5dc) => _3a5021004442?.[_271dc742b5dc], this.global);
                if (!_5bd11b3c31ff) return;
                let _b6a548cb3b03 = Reflect.get(_5bd11b3c31ff, _333044d6fd1e);
                return _3a5021004442[_271dc742b5dc] = _b6a548cb3b03, _3a5021004442[_271dc742b5dc];
              }
            }),
            construct(_3a5021004442, ..._271dc742b5dc) {
              let _4a43e396a3cb = this.store[_3a5021004442];
              return _4a43e396a3cb ? new _4a43e396a3cb(..._271dc742b5dc) : null;
            },
            call(_3a5021004442, _271dc742b5dc, ..._4a43e396a3cb) {
              let _333044d6fd1e = this.store[_3a5021004442];
              return _333044d6fd1e ? _333044d6fd1e.call(_271dc742b5dc, ..._4a43e396a3cb) : null;
            }
          }, this.descriptors = {
            store: new Proxy({}, {
              get: (_3a5021004442, _4a43e396a3cb) => {
                if (_4a43e396a3cb in _3a5021004442) return _3a5021004442[_4a43e396a3cb];
                let _333044d6fd1e = _4a43e396a3cb.split("."), _5bd11b3c31ff = _333044d6fd1e.pop(), _b6a548cb3b03 = _333044d6fd1e.reduce((_3a5021004442, _271dc742b5dc) => _3a5021004442?.[_271dc742b5dc], this.global);
                if (!_b6a548cb3b03) return;
                let _97105b6bb452 = _271dc742b5dc.natives.call("Object.getOwnPropertyDescriptor", null, _b6a548cb3b03, _5bd11b3c31ff);
                return _3a5021004442[_4a43e396a3cb] = _97105b6bb452, _3a5021004442[_4a43e396a3cb];
              }
            }),
            get(_3a5021004442, _271dc742b5dc) {
              let _4a43e396a3cb = this.store[_3a5021004442];
              return _4a43e396a3cb ? _4a43e396a3cb.get.call(_271dc742b5dc) : null;
            },
            set(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
              let _333044d6fd1e = this.store[_3a5021004442];
              if (!_333044d6fd1e) return null;
              _333044d6fd1e.set.call(_271dc742b5dc, _4a43e396a3cb);
            }
          };
          const _271dc742b5dc = this;
          this.meta = {
            get origin() {
              return _271dc742b5dc.url;
            },
            get base() {
              if (_ab0a35acfb91.iswindow) {
                const _3a5021004442 = _271dc742b5dc.natives.call("Document.prototype.querySelector", _271dc742b5dc.global.document, "base");
                if (_3a5021004442) {
                  let _4a43e396a3cb = _3a5021004442.getAttribute("href");
                  if (!_4a43e396a3cb) return _271dc742b5dc.url;
                  const _333044d6fd1e = _4a43e396a3cb.indexOf("#");
                  if (!(_4a43e396a3cb = _4a43e396a3cb.substring(0, -1 === _333044d6fd1e ? void 0 : _333044d6fd1e))) return _271dc742b5dc.url;
                  return new URL(_4a43e396a3cb, _271dc742b5dc.url.origin);
                }
              }
              return _271dc742b5dc.url;
            },
            get topFrameName() {
              if (!_ab0a35acfb91.iswindow) throw Error("topFrameName was called from a worker?");
              let _3a5021004442 = _271dc742b5dc.global;
              if (_3a5021004442.parent.window == _3a5021004442.window) return null;
              for (;_3a5021004442.parent.window !== _3a5021004442.window && _3a5021004442.parent.window[_333044d6fd1e.pX]; ) _3a5021004442 = _3a5021004442.parent.window;
              const _4a43e396a3cb = _3a5021004442[_333044d6fd1e.pX].descriptors.get("window.frameElement", _3a5021004442);
              if (!_4a43e396a3cb) return null;
              if (!_4a43e396a3cb.name) return console.error("YOU NEED TO USE `new StudyJetFrame()`! DIRECT IFRAMES WILL NOT WORK"), 
              null;
              return _4a43e396a3cb.name;
            },
            get parentFrameName() {
              if (!_ab0a35acfb91.iswindow) throw Error("parentFrameName was called from a worker?");
              if (_271dc742b5dc.global.parent.window == _271dc742b5dc.global.window) return null;
              let _3a5021004442 = _271dc742b5dc.global.parent.window;
              if (_3a5021004442[_333044d6fd1e.pX]) {
                const _271dc742b5dc = _3a5021004442[_333044d6fd1e.pX].descriptors.get("window.frameElement", _3a5021004442);
                if (!_271dc742b5dc) return null;
                if (!_271dc742b5dc.name) return console.error("YOU NEED TO USE `new StudyJetFrame()`! DIRECT IFRAMES WILL NOT WORK"), 
                null;
                return _271dc742b5dc.name;
              }
              {
                const _3a5021004442 = _271dc742b5dc.descriptors.get("window.frameElement", _271dc742b5dc.global);
                if (!_3a5021004442.name) return console.error("YOU NEED TO USE `new StudyJetFrame()`! DIRECT IFRAMES WILL NOT WORK"), 
                null;
                return _3a5021004442.name;
              }
            }
          }, this.locationProxy = (0, _b6a548cb3b03.createLocationProxy)(this, _3a5021004442), 
          _3a5021004442[_333044d6fd1e.pX] = this;
        }
        get frame() {
          if (!_ab0a35acfb91.iswindow) return null;
          let _3a5021004442 = this.descriptors.get("window.frameElement", this.global);
          if (!_3a5021004442) return null;
          let _271dc742b5dc = _3a5021004442[_333044d6fd1e.zr];
          if (!_271dc742b5dc) {
            let _3a5021004442 = this.global.window;
            for (;_3a5021004442.parent !== _3a5021004442; ) {
              let _271dc742b5dc = _3a5021004442[_333044d6fd1e.pX].descriptors.get("window.frameElement", _3a5021004442);
              if (!_271dc742b5dc) return null;
              if (_271dc742b5dc && _271dc742b5dc[_333044d6fd1e.zr]) return _271dc742b5dc[_333044d6fd1e.zr];
              _3a5021004442 = _3a5021004442.parent.window;
            }
          }
          return _271dc742b5dc;
        }
        get isSubframe() {
          if (!_ab0a35acfb91.iswindow) return !1;
          let _3a5021004442 = this.descriptors.get("window.frameElement", this.global);
          return !!_3a5021004442 && !_3a5021004442[_333044d6fd1e.zr];
        }
        loadcookies(_3a5021004442) {
          this.cookieStore.load(_3a5021004442);
        }
        hook() {
          let _3a5021004442 = _4a43e396a3cb(7302), _271dc742b5dc = [];
          for (let _4a43e396a3cb of _3a5021004442.keys()) {
            let _333044d6fd1e = _3a5021004442(_4a43e396a3cb);
            _4a43e396a3cb.endsWith(".ts") && (_4a43e396a3cb.startsWith("./dom/") && "window" in this.global || _4a43e396a3cb.startsWith("./worker/") && "WorkerGlobalScope" in this.global || _4a43e396a3cb.startsWith("./shared/")) && _271dc742b5dc.push(_333044d6fd1e);
          }
          for (let _3a5021004442 of (_271dc742b5dc.sort((_3a5021004442, _271dc742b5dc) => (_3a5021004442.order || 0) - (_271dc742b5dc.order || 0)), 
          _271dc742b5dc)) !_3a5021004442.enabled || _3a5021004442.enabled(this) ? _3a5021004442.default(this, this.global) : _3a5021004442.disabled && _3a5021004442.disabled(this, this.global);
        }
        get url() {
          return new URL((0, _aabd55df2659.v2)(this.global.location.href));
        }
        set url(_3a5021004442) {
          _3a5021004442 instanceof URL && (_3a5021004442 = _3a5021004442.toString());
          let _271dc742b5dc = new _b5b9693d9c71.NavigateEvent(_3a5021004442);
          this.frame && this.frame.dispatchEvent(_271dc742b5dc), _271dc742b5dc.defaultPrevented || (this.global.location.href = (0, 
          _aabd55df2659.Oy)(_271dc742b5dc.url, this.meta));
        }
        Proxy(_3a5021004442, _271dc742b5dc) {
          if (Array.isArray(_3a5021004442)) {
            for (let _4a43e396a3cb of _3a5021004442) this.Proxy(_4a43e396a3cb, _271dc742b5dc);
            return;
          }
          let _4a43e396a3cb = _3a5021004442.split("."), _333044d6fd1e = _4a43e396a3cb.pop(), _5bd11b3c31ff = _4a43e396a3cb.reduce((_3a5021004442, _271dc742b5dc) => _3a5021004442?.[_271dc742b5dc], this.global);
          if (_5bd11b3c31ff) {
            if (!(_3a5021004442 in this.natives.store)) {
              let _271dc742b5dc = Reflect.get(_5bd11b3c31ff, _333044d6fd1e);
              this.natives.store[_3a5021004442] = _271dc742b5dc;
            }
            this.RawProxy(_5bd11b3c31ff, _333044d6fd1e, _271dc742b5dc);
          }
        }
        RawProxy(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
          if (!_3a5021004442 || !_271dc742b5dc || !Reflect.has(_3a5021004442, _271dc742b5dc)) return;
          let _333044d6fd1e = Reflect.get(_3a5021004442, _271dc742b5dc);
          delete _3a5021004442[_271dc742b5dc];
          let _b6a548cb3b03 = {};
          _4a43e396a3cb.construct && (_b6a548cb3b03.construct = function(_3a5021004442, _271dc742b5dc, _333044d6fd1e) {
            let _5bd11b3c31ff, _b6a548cb3b03 = !1, _97105b6bb452 = {
              fn: _3a5021004442,
              this: null,
              args: _271dc742b5dc,
              newTarget: _333044d6fd1e,
              return: _3a5021004442 => {
                _b6a548cb3b03 = !0, _5bd11b3c31ff = _3a5021004442;
              },
              call: () => (_b6a548cb3b03 = !0, _5bd11b3c31ff = Reflect.construct(_97105b6bb452.fn, _97105b6bb452.args, _97105b6bb452.newTarget))
            };
            return (_4a43e396a3cb.construct(_97105b6bb452), _b6a548cb3b03) ? _5bd11b3c31ff : Reflect.construct(_97105b6bb452.fn, _97105b6bb452.args, _97105b6bb452.newTarget);
          }), _4a43e396a3cb.apply && (_b6a548cb3b03.apply = (_3a5021004442, _271dc742b5dc, _333044d6fd1e) => {
            let _5bd11b3c31ff, _b6a548cb3b03 = !1, _97105b6bb452 = {
              fn: _3a5021004442,
              this: _271dc742b5dc,
              args: _333044d6fd1e,
              newTarget: null,
              return: _3a5021004442 => {
                _b6a548cb3b03 = !0, _5bd11b3c31ff = _3a5021004442;
              },
              call: () => (_b6a548cb3b03 = !0, _5bd11b3c31ff = Reflect.apply(_97105b6bb452.fn, _97105b6bb452.this, _97105b6bb452.args))
            }, _b5b9693d9c71 = Error.prepareStackTrace;
            Error.prepareStackTrace = function(_3a5021004442, _271dc742b5dc) {
              if (_271dc742b5dc[0].getFileName() && !_271dc742b5dc[0].getFileName().startsWith(location.origin + _f1f27b0dceb6.$W.prefix)) return {
                stack: _3a5021004442.stack
              };
            };
            try {
              _4a43e396a3cb.apply(_97105b6bb452);
            } catch (_3a5021004442) {
              if (_3a5021004442 instanceof Error) if (_3a5021004442.stack instanceof Object) {
                if (_3a5021004442.stack = _3a5021004442.stack.stack, console.error("ERROR FROM STUDYJET INTERNALS", _3a5021004442), 
                !(0, _f1f27b0dceb6.U5)("allowFailedIntercepts", this.url)) throw _3a5021004442;
              } else throw _3a5021004442; else throw _3a5021004442;
            }
            return (Error.prepareStackTrace = _b5b9693d9c71, _b6a548cb3b03) ? _5bd11b3c31ff : Reflect.apply(_97105b6bb452.fn, _97105b6bb452.this, _97105b6bb452.args);
          }), _b6a548cb3b03.getOwnPropertyDescriptor = _5bd11b3c31ff.getOwnPropertyDescriptorHandler, 
          _3a5021004442[_271dc742b5dc] = new Proxy(_333044d6fd1e, _b6a548cb3b03);
        }
        Trap(_3a5021004442, _271dc742b5dc) {
          if (Array.isArray(_3a5021004442)) {
            for (let _4a43e396a3cb of _3a5021004442) this.Trap(_4a43e396a3cb, _271dc742b5dc);
            return;
          }
          let _4a43e396a3cb = _3a5021004442.split("."), _333044d6fd1e = _4a43e396a3cb.pop(), _5bd11b3c31ff = _4a43e396a3cb.reduce((_3a5021004442, _271dc742b5dc) => _3a5021004442?.[_271dc742b5dc], this.global);
          if (!_5bd11b3c31ff) return;
          let _b6a548cb3b03 = this.natives.call("Object.getOwnPropertyDescriptor", null, _5bd11b3c31ff, _333044d6fd1e);
          return this.descriptors.store[_3a5021004442] = _b6a548cb3b03, this.RawTrap(_5bd11b3c31ff, _333044d6fd1e, _271dc742b5dc);
        }
        RawTrap(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
          if (!_3a5021004442 || !_271dc742b5dc || !Reflect.has(_3a5021004442, _271dc742b5dc)) return;
          let _333044d6fd1e = this.natives.call("Object.getOwnPropertyDescriptor", null, _3a5021004442, _271dc742b5dc), _5bd11b3c31ff = {
            this: null,
            get: function() {
              return _333044d6fd1e && _333044d6fd1e.get.call(this.this);
            },
            set: function(_3a5021004442) {
              _333044d6fd1e && _333044d6fd1e.set.call(this.this, _3a5021004442);
            }
          };
          delete _3a5021004442[_271dc742b5dc];
          let _b6a548cb3b03 = {};
          return _4a43e396a3cb.get ? _b6a548cb3b03.get = function() {
            return _5bd11b3c31ff.this = this, _4a43e396a3cb.get(_5bd11b3c31ff);
          } : _333044d6fd1e?.get && (_b6a548cb3b03.get = _333044d6fd1e.get), _4a43e396a3cb.set ? _b6a548cb3b03.set = function(_3a5021004442) {
            _5bd11b3c31ff.this = this, _4a43e396a3cb.set(_5bd11b3c31ff, _3a5021004442);
          } : _333044d6fd1e?.set && (_b6a548cb3b03.set = _333044d6fd1e.set), _4a43e396a3cb.enumerable ? _b6a548cb3b03.enumerable = _4a43e396a3cb.enumerable : _333044d6fd1e?.enumerable && (_b6a548cb3b03.enumerable = _333044d6fd1e.enumerable), 
          _4a43e396a3cb.configurable ? _b6a548cb3b03.configurable = _4a43e396a3cb.configurable : _333044d6fd1e?.configurable && (_b6a548cb3b03.configurable = _333044d6fd1e.configurable), 
          Object.defineProperty(_3a5021004442, _271dc742b5dc, _b6a548cb3b03), _333044d6fd1e;
        }
      }
    },
    1077: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      function n(_3a5021004442, _271dc742b5dc) {
        _3a5021004442.Trap("Element.prototype.attributes", {
          get(_3a5021004442) {
            let _271dc742b5dc = _3a5021004442.get(), _4a43e396a3cb = new Proxy(_271dc742b5dc, {
              get(_3a5021004442, _333044d6fd1e, _5bd11b3c31ff) {
                let _b6a548cb3b03 = Reflect.get(_3a5021004442, _333044d6fd1e);
                return "length" === _333044d6fd1e ? Object.keys(_4a43e396a3cb).length : "getNamedItem" === _333044d6fd1e ? _3a5021004442 => _4a43e396a3cb[_3a5021004442] : "getNamedItemNS" === _333044d6fd1e ? (_3a5021004442, _271dc742b5dc) => _4a43e396a3cb[`${_3a5021004442}:${_271dc742b5dc}`] : _333044d6fd1e in NamedNodeMap.prototype && "function" == typeof _b6a548cb3b03 ? new Proxy(_b6a548cb3b03, {
                  apply: (_3a5021004442, _333044d6fd1e, _5bd11b3c31ff) => _333044d6fd1e === _4a43e396a3cb ? Reflect.apply(_3a5021004442, _271dc742b5dc, _5bd11b3c31ff) : Reflect.apply(_3a5021004442, _333044d6fd1e, _5bd11b3c31ff)
                }) : "string" != typeof _333044d6fd1e && "number" != typeof _333044d6fd1e || isNaN(Number(_333044d6fd1e)) ? this.has(_3a5021004442, _333044d6fd1e) ? _b6a548cb3b03 : void 0 : _271dc742b5dc[Object.keys(_4a43e396a3cb)[_333044d6fd1e]];
              },
              ownKeys(_3a5021004442) {
                return Reflect.ownKeys(_3a5021004442).filter(_271dc742b5dc => this.has(_3a5021004442, _271dc742b5dc));
              },
              has: (_3a5021004442, _4a43e396a3cb) => "symbol" == typeof _4a43e396a3cb ? Reflect.has(_3a5021004442, _4a43e396a3cb) : !(_4a43e396a3cb.startsWith("studyjet-attr-") || _271dc742b5dc[_4a43e396a3cb]?.name?.startsWith("studyjet-attr-")) && Reflect.has(_3a5021004442, _4a43e396a3cb)
            });
            return _4a43e396a3cb;
          }
        }), _3a5021004442.Trap([ "Attr.prototype.value", "Attr.prototype.nodeValue" ], {
          get: _3a5021004442 => _3a5021004442.this?.ownerElement ? _3a5021004442.this.ownerElement.getAttribute(_3a5021004442.this.name) : _3a5021004442.get(),
          set: (_3a5021004442, _271dc742b5dc) => _3a5021004442.this?.ownerElement ? _3a5021004442.this.ownerElement.setAttribute(_3a5021004442.this.name, _271dc742b5dc) : _3a5021004442.set(_271dc742b5dc)
        });
      }
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        default: () => n
      });
    },
    7430: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        default: () => i
      });
      var _333044d6fd1e = _4a43e396a3cb(1472);
      function i(_3a5021004442, _271dc742b5dc) {
        _3a5021004442.Proxy("Navigator.prototype.sendBeacon", {
          apply(_271dc742b5dc) {
            _271dc742b5dc.args[0] = (0, _333044d6fd1e.Oy)(_271dc742b5dc.args[0], _3a5021004442.meta);
          }
        });
      }
    },
    9116: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      function n(_3a5021004442, _271dc742b5dc) {
        _3a5021004442.serviceWorker.addEventListener("message", ({data: _271dc742b5dc}) => {
          if ("studyjet$type" in _271dc742b5dc && "cookie" === _271dc742b5dc.studyjet$type) {
            _3a5021004442.cookieStore.setCookies([ _271dc742b5dc.cookie ], new URL(_271dc742b5dc.url));
            let _4a43e396a3cb = {
              studyjet$token: _271dc742b5dc.studyjet$token,
              studyjet$type: "cookie"
            };
            _3a5021004442.serviceWorker.controller.postMessage(_4a43e396a3cb);
          }
        }), _3a5021004442.Trap("Document.prototype.cookie", {
          get: () => _3a5021004442.cookieStore.getCookies(_3a5021004442.url, !0),
          set(_271dc742b5dc, _4a43e396a3cb) {
            _3a5021004442.cookieStore.setCookies([ _4a43e396a3cb ], _3a5021004442.url);
            let _333044d6fd1e = _3a5021004442.descriptors.get("ServiceWorkerContainer.prototype.controller", _3a5021004442.serviceWorker);
            _333044d6fd1e && _3a5021004442.natives.call("ServiceWorker.prototype.postMessage", _333044d6fd1e, {
              studyjet$type: "cookie",
              cookie: _4a43e396a3cb,
              url: _3a5021004442.url.href
            });
          }
        }), delete _271dc742b5dc.cookieStore;
      }
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        default: () => n
      });
    },
    6447: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        default: () => i
      });
      var _333044d6fd1e = _4a43e396a3cb(2614);
      function i(_3a5021004442) {
        _3a5021004442.Proxy("CSSStyleDeclaration.prototype.setProperty", {
          apply(_271dc742b5dc) {
            _271dc742b5dc.args[1] && (_271dc742b5dc.args[1] = (0, _333044d6fd1e.s)(_271dc742b5dc.args[1], _3a5021004442.meta));
          }
        }), _3a5021004442.Proxy("CSSStyleDeclaration.prototype.getPropertyValue", {
          apply(_3a5021004442) {
            let _271dc742b5dc = _3a5021004442.call();
            if (!_271dc742b5dc) return _271dc742b5dc;
            _3a5021004442.return((0, _333044d6fd1e.f)(_271dc742b5dc));
          }
        }), _3a5021004442.Trap("CSSStyleDeclaration.prototype.cssText", {
          set(_271dc742b5dc, _4a43e396a3cb) {
            _271dc742b5dc.set((0, _333044d6fd1e.s)(_4a43e396a3cb, _3a5021004442.meta));
          },
          get: _3a5021004442 => (0, _333044d6fd1e.f)(_3a5021004442.get())
        }), _3a5021004442.Proxy("CSSStyleSheet.prototype.insertRule", {
          apply(_271dc742b5dc) {
            _271dc742b5dc.args[0] = (0, _333044d6fd1e.s)(_271dc742b5dc.args[0], _3a5021004442.meta);
          }
        }), _3a5021004442.Proxy("CSSStyleSheet.prototype.replace", {
          apply(_271dc742b5dc) {
            _271dc742b5dc.args[0] = (0, _333044d6fd1e.s)(_271dc742b5dc.args[0], _3a5021004442.meta);
          }
        }), _3a5021004442.Proxy("CSSStyleSheet.prototype.replaceSync", {
          apply(_271dc742b5dc) {
            _271dc742b5dc.args[0] = (0, _333044d6fd1e.s)(_271dc742b5dc.args[0], _3a5021004442.meta);
          }
        }), _3a5021004442.Trap("CSSRule.prototype.cssText", {
          set(_271dc742b5dc, _4a43e396a3cb) {
            _271dc742b5dc.set((0, _333044d6fd1e.s)(_4a43e396a3cb, _3a5021004442.meta));
          },
          get: _3a5021004442 => (0, _333044d6fd1e.f)(_3a5021004442.get())
        }), _3a5021004442.Proxy("CSSStyleValue.parse", {
          apply(_271dc742b5dc) {
            _271dc742b5dc.args[1] && (_271dc742b5dc.args[1] = (0, _333044d6fd1e.s)(_271dc742b5dc.args[1], _3a5021004442.meta));
          }
        }), _3a5021004442.Trap("HTMLElement.prototype.style", {
          get(_271dc742b5dc) {
            let _4a43e396a3cb = _271dc742b5dc.get();
            return new Proxy(_4a43e396a3cb, {
              get(_3a5021004442, _271dc742b5dc) {
                let _5bd11b3c31ff = Reflect.get(_3a5021004442, _271dc742b5dc);
                return "function" == typeof _5bd11b3c31ff ? new Proxy(_5bd11b3c31ff, {
                  apply: (_3a5021004442, _271dc742b5dc, _333044d6fd1e) => Reflect.apply(_3a5021004442, _4a43e396a3cb, _333044d6fd1e)
                }) : _271dc742b5dc in CSSStyleDeclaration.prototype || !_5bd11b3c31ff ? _5bd11b3c31ff : (0, 
                _333044d6fd1e.f)(_5bd11b3c31ff);
              },
              set: (_271dc742b5dc, _4a43e396a3cb, _5bd11b3c31ff) => "cssText" == _4a43e396a3cb || "" == _5bd11b3c31ff || "string" != typeof _5bd11b3c31ff ? Reflect.set(_271dc742b5dc, _4a43e396a3cb, _5bd11b3c31ff) : Reflect.set(_271dc742b5dc, _4a43e396a3cb, (0, 
              _333044d6fd1e.s)(_5bd11b3c31ff, _3a5021004442.meta))
            });
          },
          set(_3a5021004442, _271dc742b5dc) {
            _3a5021004442.set(_271dc742b5dc);
          }
        });
      }
    },
    5351: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        default: () => i
      });
      var _333044d6fd1e = _4a43e396a3cb(884);
      function i(_3a5021004442, _271dc742b5dc) {
        let _4a43e396a3cb = String;
        _3a5021004442.Proxy([ "Document.prototype.querySelector", "Document.prototype.querySelectorAll" ], {
          apply(_3a5021004442) {
            _3a5021004442.args[0] = _4a43e396a3cb(_3a5021004442.args[0]).replace(/((?:^|\s)\b\w+\[(?:src|href|data-href))[\^]?(=['"]?(?:https?[:])?\/\/)/, "$1*$2");
          }
        }), _3a5021004442.Proxy("Document.prototype.write", {
          apply(_271dc742b5dc) {
            if (_271dc742b5dc.args[0]) try {
              _271dc742b5dc.args[0] = (0, _333044d6fd1e.Qs)(_271dc742b5dc.args[0], _3a5021004442.cookieStore, _3a5021004442.meta, !1);
            } catch {}
          }
        }), _3a5021004442.Trap("Document.prototype.referrer", {
          get: () => _3a5021004442.url.toString()
        }), _3a5021004442.Proxy("Document.prototype.writeln", {
          apply(_271dc742b5dc) {
            if (_271dc742b5dc.args[0]) try {
              _271dc742b5dc.args[0] = (0, _333044d6fd1e.Qs)(_271dc742b5dc.args[0], _3a5021004442.cookieStore, _3a5021004442.meta, !1);
            } catch {}
          }
        }), _3a5021004442.Proxy("Document.prototype.parseHTMLUnsafe", {
          apply(_271dc742b5dc) {
            if (_271dc742b5dc.args[0]) try {
              _271dc742b5dc.args[0] = (0, _333044d6fd1e.Qs)(_271dc742b5dc.args[0], _3a5021004442.cookieStore, _3a5021004442.meta, !1);
            } catch {}
          }
        });
      }
    },
    7828: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        default: () => h
      });
      var _333044d6fd1e = _4a43e396a3cb(2393), _5bd11b3c31ff = _4a43e396a3cb(2614), _b6a548cb3b03 = _4a43e396a3cb(884), _97105b6bb452 = _4a43e396a3cb(1478), _b5b9693d9c71 = _4a43e396a3cb(1472), _aabd55df2659 = _4a43e396a3cb(2794), _f1f27b0dceb6 = _4a43e396a3cb(3255);
      let _188ac31e3f35 = new TextEncoder;
      function d(_3a5021004442) {
        return btoa(Array.from(_3a5021004442, _3a5021004442 => String.fromCodePoint(_3a5021004442)).join(""));
      }
      function h(_3a5021004442, _271dc742b5dc) {
        let _4a43e396a3cb = {
          nonce: [ _271dc742b5dc.HTMLElement ],
          integrity: [ _271dc742b5dc.HTMLScriptElement, _271dc742b5dc.HTMLLinkElement ],
          csp: [ _271dc742b5dc.HTMLIFrameElement ],
          credentialless: [ _271dc742b5dc.HTMLIFrameElement ],
          src: [ _271dc742b5dc.HTMLImageElement, _271dc742b5dc.HTMLMediaElement, _271dc742b5dc.HTMLIFrameElement, _271dc742b5dc.HTMLFrameElement, _271dc742b5dc.HTMLEmbedElement, _271dc742b5dc.HTMLScriptElement, _271dc742b5dc.HTMLSourceElement ],
          href: [ _271dc742b5dc.HTMLAnchorElement, _271dc742b5dc.HTMLLinkElement ],
          data: [ _271dc742b5dc.HTMLObjectElement ],
          action: [ _271dc742b5dc.HTMLFormElement ],
          formaction: [ _271dc742b5dc.HTMLButtonElement, _271dc742b5dc.HTMLInputElement ],
          srcdoc: [ _271dc742b5dc.HTMLIFrameElement ],
          poster: [ _271dc742b5dc.HTMLVideoElement ],
          imagesrcset: [ _271dc742b5dc.HTMLLinkElement ]
        }, _ab0a35acfb91 = [ _271dc742b5dc.HTMLAnchorElement.prototype, _271dc742b5dc.HTMLAreaElement.prototype ], _5e52f02aa711 = [ _3a5021004442.natives.call("Object.getOwnPropertyDescriptor", null, _271dc742b5dc.HTMLAnchorElement.prototype, "href"), _3a5021004442.natives.call("Object.getOwnPropertyDescriptor", null, _271dc742b5dc.HTMLAreaElement.prototype, "href") ];
        for (let _271dc742b5dc of Object.keys(_4a43e396a3cb)) for (let _333044d6fd1e of _4a43e396a3cb[_271dc742b5dc]) {
          let _4a43e396a3cb = _3a5021004442.natives.call("Object.getOwnPropertyDescriptor", null, _333044d6fd1e.prototype, _271dc742b5dc);
          Object.defineProperty(_333044d6fd1e.prototype, _271dc742b5dc, {
            get() {
              return [ "src", "data", "href", "action", "formaction" ].includes(_271dc742b5dc) ? (0, 
              _b5b9693d9c71.v2)(_4a43e396a3cb.get.call(this)) : _4a43e396a3cb.get.call(this);
            },
            set(_3a5021004442) {
              return this.setAttribute(_271dc742b5dc, _3a5021004442);
            }
          });
        }
        for (let _271dc742b5dc of [ "protocol", "hash", "host", "hostname", "origin", "pathname", "port", "search" ]) for (let _4a43e396a3cb in _ab0a35acfb91) {
          let _333044d6fd1e = _ab0a35acfb91[_4a43e396a3cb], _5bd11b3c31ff = _5e52f02aa711[_4a43e396a3cb];
          _3a5021004442.RawTrap(_333044d6fd1e, _271dc742b5dc, {
            get(_3a5021004442) {
              let _4a43e396a3cb = _5bd11b3c31ff.get.call(_3a5021004442.this);
              return _4a43e396a3cb ? new URL((0, _b5b9693d9c71.v2)(_4a43e396a3cb))[_271dc742b5dc] : _4a43e396a3cb;
            }
          });
        }
        _3a5021004442.Trap("Node.prototype.baseURI", {
          get(_271dc742b5dc) {
            let _4a43e396a3cb = _271dc742b5dc.this, _333044d6fd1e = _4a43e396a3cb.ownerDocument?.querySelector("base");
            return (_4a43e396a3cb instanceof Document && (_333044d6fd1e = _4a43e396a3cb.querySelector("base")), 
            _333044d6fd1e) ? new URL(_333044d6fd1e.href, _3a5021004442.url.origin).href : _3a5021004442.url.origin;
          },
          set: (_3a5021004442, _271dc742b5dc) => !1
        }), _3a5021004442.Proxy("Element.prototype.getAttribute", {
          apply(_271dc742b5dc) {
            let [_4a43e396a3cb] = _271dc742b5dc.args;
            if (_4a43e396a3cb.startsWith("studyjet-attr")) return _271dc742b5dc.return(null);
            if (_3a5021004442.natives.call("Element.prototype.hasAttribute", _271dc742b5dc.this, `studyjet-attr-${_4a43e396a3cb}`)) {
              let _3a5021004442 = _271dc742b5dc.fn.call(_271dc742b5dc.this, `studyjet-attr-${_4a43e396a3cb}`);
              return null === _3a5021004442 ? _271dc742b5dc.return("") : _271dc742b5dc.return(_3a5021004442);
            }
          }
        }), _3a5021004442.Proxy("Element.prototype.getAttributeNames", {
          apply(_3a5021004442) {
            let _271dc742b5dc = _3a5021004442.call().filter(_3a5021004442 => !_3a5021004442.startsWith("studyjet-attr"));
            _3a5021004442.return(_271dc742b5dc);
          }
        }), _3a5021004442.Proxy("Element.prototype.getAttributeNode", {
          apply(_3a5021004442) {
            if (_3a5021004442.args[0].startsWith("studyjet-attr")) return _3a5021004442.return(null);
          }
        }), _3a5021004442.Proxy("Element.prototype.hasAttribute", {
          apply(_3a5021004442) {
            if (_3a5021004442.args[0].startsWith("studyjet-attr")) return _3a5021004442.return(!1);
          }
        }), _3a5021004442.Proxy("Element.prototype.setAttribute", {
          apply(_271dc742b5dc) {
            let [_4a43e396a3cb, _5bd11b3c31ff] = _271dc742b5dc.args, _b6a548cb3b03 = _333044d6fd1e.V.find(_3a5021004442 => {
              let _333044d6fd1e = _3a5021004442[_4a43e396a3cb.toLowerCase()];
              return !!_333044d6fd1e && ("*" === _333044d6fd1e || "function" != typeof _333044d6fd1e && _333044d6fd1e.includes(_271dc742b5dc.this.tagName.toLowerCase()));
            });
            if (_b6a548cb3b03) {
              let _333044d6fd1e = _b6a548cb3b03.fn(_5bd11b3c31ff, _3a5021004442.meta, _3a5021004442.cookieStore);
              if (null == _333044d6fd1e) {
                _3a5021004442.natives.call("Element.prototype.removeAttribute", _271dc742b5dc.this, _4a43e396a3cb), 
                _271dc742b5dc.return(void 0);
                return;
              }
              _271dc742b5dc.args[1] = _333044d6fd1e, _271dc742b5dc.fn.call(_271dc742b5dc.this, `studyjet-attr-${_271dc742b5dc.args[0]}`, _5bd11b3c31ff);
            }
          }
        }), _3a5021004442.Proxy("Element.prototype.setAttributeNode", {
          apply(_3a5021004442) {}
        }), _3a5021004442.Proxy("Element.prototype.setAttributeNS", {
          apply(_271dc742b5dc) {
            let [_4a43e396a3cb, _5bd11b3c31ff, _b6a548cb3b03] = _271dc742b5dc.args, _97105b6bb452 = _333044d6fd1e.V.find(_3a5021004442 => {
              let _4a43e396a3cb = _3a5021004442[_5bd11b3c31ff.toLowerCase()];
              return !!_4a43e396a3cb && ("*" === _4a43e396a3cb || "function" != typeof _4a43e396a3cb && _4a43e396a3cb.includes(_271dc742b5dc.this.tagName.toLowerCase()));
            });
            _97105b6bb452 && (_271dc742b5dc.args[2] = _97105b6bb452.fn(_b6a548cb3b03, _3a5021004442.meta, _3a5021004442.cookieStore), 
            _3a5021004442.natives.call("Element.prototype.setAttribute", _271dc742b5dc.this, `studyjet-attr-${_271dc742b5dc.args[1]}`, _b6a548cb3b03));
          }
        }), _3a5021004442.Trap("SVGAnimatedString.prototype.baseVal", {
          get(_3a5021004442) {
            let _271dc742b5dc = _3a5021004442.get();
            return _271dc742b5dc ? (0, _b5b9693d9c71.v2)(_271dc742b5dc) : _271dc742b5dc;
          },
          set(_271dc742b5dc, _4a43e396a3cb) {
            _271dc742b5dc.set((0, _b5b9693d9c71.Oy)(_4a43e396a3cb, _3a5021004442.meta));
          }
        }), _3a5021004442.Trap("SVGAnimatedString.prototype.animVal", {
          get(_3a5021004442) {
            let _271dc742b5dc = _3a5021004442.get();
            return _271dc742b5dc ? (0, _b5b9693d9c71.v2)(_271dc742b5dc) : _271dc742b5dc;
          }
        }), _3a5021004442.Proxy("Element.prototype.removeAttribute", {
          apply(_271dc742b5dc) {
            if (_271dc742b5dc.args[0].startsWith("studyjet-attr")) return _271dc742b5dc.return(void 0);
            _3a5021004442.natives.call("Element.prototype.hasAttribute", _271dc742b5dc.this, _271dc742b5dc.args[0]) && _271dc742b5dc.fn.call(_271dc742b5dc.this, `studyjet-attr-${_271dc742b5dc.args[0]}`);
          }
        }), _3a5021004442.Proxy("Element.prototype.toggleAttribute", {
          apply(_271dc742b5dc) {
            if (_271dc742b5dc.args[0].startsWith("studyjet-attr")) return _271dc742b5dc.return(!1);
            _3a5021004442.natives.call("Element.prototype.hasAttribute", _271dc742b5dc.this, _271dc742b5dc.args[0]) && _271dc742b5dc.fn.call(_271dc742b5dc.this, `studyjet-attr-${_271dc742b5dc.args[0]}`);
          }
        }), _3a5021004442.Trap("Element.prototype.innerHTML", {
          set(_4a43e396a3cb, _333044d6fd1e) {
            let _b5b9693d9c71;
            if (_4a43e396a3cb.this instanceof _271dc742b5dc.HTMLScriptElement) _b5b9693d9c71 = (0, 
            _97105b6bb452.o)(_333044d6fd1e, "(anonymous script element)", _3a5021004442.meta), 
            _3a5021004442.natives.call("Element.prototype.setAttribute", _4a43e396a3cb.this, "studyjet-attr-script-source-src", d(_188ac31e3f35.encode(_b5b9693d9c71))); else if (_4a43e396a3cb.this instanceof _271dc742b5dc.HTMLStyleElement) _b5b9693d9c71 = (0, 
            _5bd11b3c31ff.s)(_333044d6fd1e, _3a5021004442.meta); else try {
              _b5b9693d9c71 = (0, _b6a548cb3b03.Qs)(_333044d6fd1e, _3a5021004442.cookieStore, _3a5021004442.meta);
            } catch {
              _b5b9693d9c71 = _333044d6fd1e;
            }
            _4a43e396a3cb.set(_b5b9693d9c71);
          },
          get(_4a43e396a3cb) {
            if (_4a43e396a3cb.this instanceof _271dc742b5dc.HTMLScriptElement) {
              let _271dc742b5dc = _3a5021004442.natives.call("Element.prototype.getAttribute", _4a43e396a3cb.this, "studyjet-attr-script-source-src");
              return _271dc742b5dc ? atob(_271dc742b5dc) : _4a43e396a3cb.get();
            }
            return _4a43e396a3cb.this instanceof _271dc742b5dc.HTMLStyleElement ? _4a43e396a3cb.get() : (0, 
            _b6a548cb3b03.nK)(_4a43e396a3cb.get());
          }
        }), _3a5021004442.Trap("Node.prototype.textContent", {
          set(_4a43e396a3cb, _333044d6fd1e) {
            if (_4a43e396a3cb.this instanceof _271dc742b5dc.HTMLScriptElement) {
              let _271dc742b5dc = (0, _97105b6bb452.o)(_333044d6fd1e, "(anonymous script element)", _3a5021004442.meta);
              return _3a5021004442.natives.call("Element.prototype.setAttribute", _4a43e396a3cb.this, "studyjet-attr-script-source-src", d(_188ac31e3f35.encode(_271dc742b5dc))), 
              _4a43e396a3cb.set(_271dc742b5dc);
            }
            return _4a43e396a3cb.this instanceof _271dc742b5dc.HTMLStyleElement ? _4a43e396a3cb.set((0, 
            _5bd11b3c31ff.s)(_333044d6fd1e, _3a5021004442.meta)) : _4a43e396a3cb.set(_333044d6fd1e);
          },
          get(_4a43e396a3cb) {
            if (_4a43e396a3cb.this instanceof _271dc742b5dc.HTMLScriptElement) {
              let _271dc742b5dc = _3a5021004442.natives.call("Element.prototype.getAttribute", _4a43e396a3cb.this, "studyjet-attr-script-source-src");
              return _271dc742b5dc ? atob(_271dc742b5dc) : _4a43e396a3cb.get();
            }
            return _4a43e396a3cb.this instanceof _271dc742b5dc.HTMLStyleElement ? (0, _5bd11b3c31ff.f)(_4a43e396a3cb.get()) : _4a43e396a3cb.get();
          }
        }), _3a5021004442.Trap("Element.prototype.outerHTML", {
          set(_271dc742b5dc, _4a43e396a3cb) {
            _271dc742b5dc.set((0, _b6a548cb3b03.Qs)(_4a43e396a3cb, _3a5021004442.cookieStore, _3a5021004442.meta));
          },
          get: _3a5021004442 => (0, _b6a548cb3b03.nK)(_3a5021004442.get())
        }), _3a5021004442.Proxy("Element.prototype.setHTMLUnsafe", {
          apply(_271dc742b5dc) {
            try {
              _271dc742b5dc.args[0] = (0, _b6a548cb3b03.Qs)(_271dc742b5dc.args[0], _3a5021004442.cookieStore, _3a5021004442.meta, !1);
            } catch {}
          }
        }), _3a5021004442.Proxy("Element.prototype.getHTML", {
          apply(_3a5021004442) {
            _3a5021004442.return((0, _b6a548cb3b03.nK)(_3a5021004442.call()));
          }
        }), _3a5021004442.Proxy("Element.prototype.insertAdjacentHTML", {
          apply(_271dc742b5dc) {
            if (_271dc742b5dc.args[1]) try {
              _271dc742b5dc.args[1] = (0, _b6a548cb3b03.Qs)(_271dc742b5dc.args[1], _3a5021004442.cookieStore, _3a5021004442.meta, !1);
            } catch {}
          }
        }), _3a5021004442.Proxy("Audio", {
          construct(_271dc742b5dc) {
            _271dc742b5dc.args[0] && (_271dc742b5dc.args[0] = (0, _b5b9693d9c71.Oy)(_271dc742b5dc.args[0], _3a5021004442.meta));
          }
        }), _3a5021004442.Proxy("Text.prototype.appendData", {
          apply(_271dc742b5dc) {
            _271dc742b5dc.this.parentElement?.tagName === "STYLE" && (_271dc742b5dc.args[0] = (0, 
            _5bd11b3c31ff.s)(_271dc742b5dc.args[0], _3a5021004442.meta));
          }
        }), _3a5021004442.Proxy("Text.prototype.insertData", {
          apply(_271dc742b5dc) {
            _271dc742b5dc.this.parentElement?.tagName === "STYLE" && (_271dc742b5dc.args[1] = (0, 
            _5bd11b3c31ff.s)(_271dc742b5dc.args[1], _3a5021004442.meta));
          }
        }), _3a5021004442.Proxy("Text.prototype.replaceData", {
          apply(_271dc742b5dc) {
            _271dc742b5dc.this.parentElement?.tagName === "STYLE" && (_271dc742b5dc.args[2] = (0, 
            _5bd11b3c31ff.s)(_271dc742b5dc.args[2], _3a5021004442.meta));
          }
        }), _3a5021004442.Trap("Text.prototype.wholeText", {
          get: _3a5021004442 => _3a5021004442.this.parentElement?.tagName === "STYLE" ? (0, 
          _5bd11b3c31ff.f)(_3a5021004442.get()) : _3a5021004442.get(),
          set: (_271dc742b5dc, _4a43e396a3cb) => _271dc742b5dc.this.parentElement?.tagName === "STYLE" ? _271dc742b5dc.set((0, 
          _5bd11b3c31ff.s)(_4a43e396a3cb, _3a5021004442.meta)) : _271dc742b5dc.set(_4a43e396a3cb)
        }), _3a5021004442.Trap([ "HTMLIFrameElement.prototype.contentWindow", "HTMLFrameElement.prototype.contentWindow", "HTMLObjectElement.prototype.contentWindow", "HTMLEmbedElement.prototype.contentWindow" ], {
          get(_3a5021004442) {
            let _271dc742b5dc = _3a5021004442.get();
            return _271dc742b5dc && (_aabd55df2659.pX in _271dc742b5dc || new _f1f27b0dceb6.StudyJetClient(_271dc742b5dc).hook()), 
            _271dc742b5dc;
          }
        }), _3a5021004442.Trap([ "HTMLIFrameElement.prototype.contentDocument", "HTMLFrameElement.prototype.contentDocument", "HTMLObjectElement.prototype.contentDocument", "HTMLEmbedElement.prototype.contentDocument" ], {
          get(_271dc742b5dc) {
            let _4a43e396a3cb = _3a5021004442.descriptors.get(`${_271dc742b5dc.this.constructor.name}.prototype.contentWindow`, _271dc742b5dc.this);
            return _4a43e396a3cb ? (_aabd55df2659.pX in _4a43e396a3cb || new _f1f27b0dceb6.StudyJetClient(_4a43e396a3cb).hook(), 
            _4a43e396a3cb.document) : _4a43e396a3cb;
          }
        }), _3a5021004442.Proxy([ "HTMLIFrameElement.prototype.getSVGDocument", "HTMLObjectElement.prototype.getSVGDocument", "HTMLEmbedElement.prototype.getSVGDocument" ], {
          apply(_3a5021004442) {
            if (_3a5021004442.call()) return _3a5021004442.return(_3a5021004442.this.contentDocument);
          }
        }), _3a5021004442.Proxy("DOMParser.prototype.parseFromString", {
          apply(_271dc742b5dc) {
            if ("text/html" === _271dc742b5dc.args[1]) try {
              _271dc742b5dc.args[0] = (0, _b6a548cb3b03.Qs)(_271dc742b5dc.args[0], _3a5021004442.cookieStore, _3a5021004442.meta, !1);
            } catch {}
          }
        });
      }
    },
    5426: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        default: () => i
      });
      var _333044d6fd1e = _4a43e396a3cb(2614);
      function i(_3a5021004442, _271dc742b5dc) {
        _3a5021004442.Proxy("FontFace", {
          construct(_271dc742b5dc) {
            _271dc742b5dc.args[1] = (0, _333044d6fd1e.s)(_271dc742b5dc.args[1], _3a5021004442.meta);
          }
        });
      }
    },
    5465: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        default: () => i
      });
      var _333044d6fd1e = _4a43e396a3cb(884);
      function i(_3a5021004442, _271dc742b5dc) {
        _3a5021004442.Proxy("Range.prototype.createContextualFragment", {
          apply(_271dc742b5dc) {
            _271dc742b5dc.args[0] = (0, _333044d6fd1e.Qs)(_271dc742b5dc.args[0], _3a5021004442.cookieStore, _3a5021004442.meta);
          }
        });
      }
    },
    9804: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        default: () => s
      });
      var _333044d6fd1e = _4a43e396a3cb(1472), _5bd11b3c31ff = _4a43e396a3cb(1862), _b6a548cb3b03 = _4a43e396a3cb(2794);
      function s(_3a5021004442, _271dc742b5dc) {
        _3a5021004442.Proxy([ "History.prototype.pushState", "History.prototype.replaceState" ], {
          apply(_271dc742b5dc) {
            (_271dc742b5dc.args[2] || "" === _271dc742b5dc.args[2]) && (_271dc742b5dc.args[2] = (0, 
            _333044d6fd1e.Oy)(_271dc742b5dc.args[2], _3a5021004442.meta)), _271dc742b5dc.call();
            let {constructor: {constructor: _4a43e396a3cb}} = _271dc742b5dc.this, _97105b6bb452 = _4a43e396a3cb("return globalThis")(), _b5b9693d9c71 = _97105b6bb452[_b6a548cb3b03.pX];
            if (_97105b6bb452.name === _3a5021004442.meta.topFrameName) {
              let _271dc742b5dc = new _5bd11b3c31ff.UrlChangeEvent(_b5b9693d9c71.url.href);
              _3a5021004442.frame?.dispatchEvent(_271dc742b5dc);
            }
          }
        });
      }
    },
    7758: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        default: () => s
      });
      var _333044d6fd1e = _4a43e396a3cb(3255), _5bd11b3c31ff = _4a43e396a3cb(2794), _b6a548cb3b03 = _4a43e396a3cb(1472);
      function s(_3a5021004442) {
        _3a5021004442.Proxy("window.open", {
          apply(_271dc742b5dc) {
            _271dc742b5dc.args[0] && (_271dc742b5dc.args[0] = (0, _b6a548cb3b03.Oy)(_271dc742b5dc.args[0], _3a5021004442.meta)), 
            ("_top" === _271dc742b5dc.args[1] || "_unfencedTop" === _271dc742b5dc.args[1]) && (_271dc742b5dc.args[1] = _3a5021004442.meta.topFrameName), 
            "_parent" === _271dc742b5dc.args[1] && (_271dc742b5dc.args[1] = _3a5021004442.meta.parentFrameName);
            let _4a43e396a3cb = _271dc742b5dc.call();
            if (!_4a43e396a3cb) return _271dc742b5dc.return(_4a43e396a3cb);
            if (_5bd11b3c31ff.pX in _4a43e396a3cb) return _271dc742b5dc.return(_4a43e396a3cb[_5bd11b3c31ff.pX].global);
            {
              let _3a5021004442 = new _333044d6fd1e.StudyJetClient(_4a43e396a3cb);
              return _3a5021004442.hook(), _271dc742b5dc.return(_3a5021004442.global);
            }
          }
        }), _3a5021004442.Trap("window.frameElement", {
          get(_3a5021004442) {
            let _271dc742b5dc = _3a5021004442.get();
            return _271dc742b5dc ? _271dc742b5dc.ownerDocument.defaultView[_5bd11b3c31ff.pX] ? _271dc742b5dc : null : _271dc742b5dc;
          }
        });
      }
    },
    6012: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      function n(_3a5021004442, _271dc742b5dc) {
        _3a5021004442.Trap("origin", {
          get: () => _3a5021004442.url.origin,
          set: () => !1
        }), _3a5021004442.Trap("Document.prototype.URL", {
          get: () => _3a5021004442.url.href,
          set: () => !1
        }), _3a5021004442.Trap("Document.prototype.documentURI", {
          get: () => _3a5021004442.url.href,
          set: () => !1
        }), _3a5021004442.Trap("Document.prototype.domain", {
          get: () => _3a5021004442.url.hostname,
          set: () => !1
        });
      }
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        default: () => n
      });
    },
    6286: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        default: () => a
      });
      var _333044d6fd1e = _4a43e396a3cb(1472), _5bd11b3c31ff = _4a43e396a3cb(37);
      function a(_3a5021004442, _271dc742b5dc) {
        _3a5021004442.Trap("PerformanceEntry.prototype.name", {
          get(_3a5021004442) {
            let _271dc742b5dc = _3a5021004442.get();
            return _271dc742b5dc && _271dc742b5dc.startsWith(location.origin + _5bd11b3c31ff.$W.prefix) ? (0, 
            _333044d6fd1e.v2)(_271dc742b5dc) : _271dc742b5dc;
          }
        }), _3a5021004442.Proxy([ "Performance.prototype.getEntries", "Performance.prototype.getEntriesByType", "Performance.prototype.getEntriesByName", "PerformanceObserverEntryList.prototype.getEntries", "PerformanceObserverEntryList.prototype.getEntriesByType", "PerformanceObserverEntryList.prototype.getEntriesByName" ], {
          apply(_3a5021004442) {
            let _271dc742b5dc = _3a5021004442.call();
            return _3a5021004442.return(_271dc742b5dc.filter(_3a5021004442 => {
              for (let _271dc742b5dc of Object.values(_5bd11b3c31ff.$W.files)) if (_3a5021004442.name.startsWith(location.origin + _271dc742b5dc)) return !1;
              return !0;
            }));
          }
        });
      }
    },
    1974: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        default: () => i
      });
      var _333044d6fd1e = _4a43e396a3cb(1472);
      function i(_3a5021004442, _271dc742b5dc) {
        _3a5021004442.Proxy("Navigator.prototype.registerProtocolHandler", {
          apply(_271dc742b5dc) {
            _271dc742b5dc.args[1] = (0, _333044d6fd1e.Oy)(_271dc742b5dc.args[1], _3a5021004442.meta);
          }
        }), _3a5021004442.Proxy("Navigator.prototype.unregisterProtocolHandler", {
          apply(_271dc742b5dc) {
            _271dc742b5dc.args[1] = (0, _333044d6fd1e.Oy)(_271dc742b5dc.args[1], _3a5021004442.meta);
          }
        });
      }
    },
    9201: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        default: () => l,
        disabled: () => o,
        enabled: () => s,
        order: () => _b6a548cb3b03
      });
      var _333044d6fd1e = _4a43e396a3cb(37), _5bd11b3c31ff = _4a43e396a3cb(1472);
      let _b6a548cb3b03 = 2, s = _3a5021004442 => (0, _333044d6fd1e.U5)("serviceworkers", _3a5021004442.url);
      function o(_3a5021004442, _271dc742b5dc) {
        Reflect.deleteProperty(Navigator.prototype, "serviceWorker");
      }
      function l(_3a5021004442, _271dc742b5dc) {
        let _4a43e396a3cb = new WeakMap;
        _3a5021004442.Proxy("EventTarget.prototype.addEventListener", {
          apply(_3a5021004442) {
            _4a43e396a3cb.get(_3a5021004442.this) && _3a5021004442.return(void 0);
          }
        }), _3a5021004442.Proxy("EventTarget.prototype.removeEventListener", {
          apply(_3a5021004442) {
            _4a43e396a3cb.get(_3a5021004442.this) && _3a5021004442.return(void 0);
          }
        }), _3a5021004442.Proxy("ServiceWorkerContainer.prototype.getRegistration", {
          apply(_3a5021004442) {
            _3a5021004442.return(new Promise(_3a5021004442 => _3a5021004442(registration)));
          }
        }), _3a5021004442.Proxy("ServiceWorkerContainer.prototype.getRegistrations", {
          apply(_3a5021004442) {
            _3a5021004442.return(new Promise(_3a5021004442 => _3a5021004442([ registration ])));
          }
        }), _3a5021004442.Trap("ServiceWorkerContainer.prototype.ready", {
          get: _3a5021004442 => new Promise(_3a5021004442 => _3a5021004442(registration))
        }), _3a5021004442.Trap("ServiceWorkerContainer.prototype.controller", {
          get: _3a5021004442 => registration?.active
        }), _3a5021004442.Proxy("ServiceWorkerContainer.prototype.register", {
          apply(_271dc742b5dc) {
            let _333044d6fd1e = new EventTarget;
            Object.setPrototypeOf(_333044d6fd1e, self.ServiceWorkerRegistration.prototype), 
            _333044d6fd1e.constructor = _271dc742b5dc.fn;
            let _b6a548cb3b03 = (0, _5bd11b3c31ff.Oy)(_271dc742b5dc.args[0], _3a5021004442.meta) + "?dest=serviceworker";
            _271dc742b5dc.args[1] && "module" === _271dc742b5dc.args[1].type && (_b6a548cb3b03 += "&type=module");
            let _97105b6bb452 = _3a5021004442.natives.construct("SharedWorker", _b6a548cb3b03).port, _b5b9693d9c71 = {
              scope: _271dc742b5dc.args[0],
              active: _97105b6bb452
            }, _aabd55df2659 = _3a5021004442.descriptors.get("ServiceWorkerContainer.prototype.controller", _3a5021004442.serviceWorker);
            _3a5021004442.natives.call("ServiceWorker.prototype.postMessage", _aabd55df2659, {
              studyjet$type: "registerServiceWorker",
              port: _97105b6bb452,
              origin: _3a5021004442.url.origin
            }, [ _97105b6bb452 ]), _4a43e396a3cb.set(_333044d6fd1e, _b5b9693d9c71), _271dc742b5dc.return(new Promise(_3a5021004442 => _3a5021004442(_333044d6fd1e)));
          }
        });
      }
    },
    5289: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      function n(_3a5021004442, _271dc742b5dc) {
        let _4a43e396a3cb = {
          get(_271dc742b5dc, _4a43e396a3cb) {
            switch (_4a43e396a3cb) {
             case "getItem":
              return _4a43e396a3cb => _271dc742b5dc.getItem(_3a5021004442.url.host + "@" + _4a43e396a3cb);

             case "setItem":
              return (_4a43e396a3cb, _333044d6fd1e) => _271dc742b5dc.setItem(_3a5021004442.url.host + "@" + _4a43e396a3cb, _333044d6fd1e);

             case "removeItem":
              return _4a43e396a3cb => _271dc742b5dc.removeItem(_3a5021004442.url.host + "@" + _4a43e396a3cb);

             case "clear":
              return () => {
                for (let _4a43e396a3cb in Object.keys(_271dc742b5dc)) _4a43e396a3cb.startsWith(_3a5021004442.url.host) && _271dc742b5dc.removeItem(_4a43e396a3cb);
              };

             case "key":
              return _4a43e396a3cb => {
                let _333044d6fd1e = Object.keys(_271dc742b5dc).filter(_271dc742b5dc => _271dc742b5dc.startsWith(_3a5021004442.url.host));
                return _271dc742b5dc.getItem(_333044d6fd1e[_4a43e396a3cb]);
              };

             case "length":
              return Object.keys(_271dc742b5dc).filter(_271dc742b5dc => _271dc742b5dc.startsWith(_3a5021004442.url.host)).length;

             default:
              if (_4a43e396a3cb in Object.prototype || "symbol" == typeof _4a43e396a3cb) return Reflect.get(_271dc742b5dc, _4a43e396a3cb);
              return _271dc742b5dc.getItem(_3a5021004442.url.host + "@" + _4a43e396a3cb);
            }
          },
          set: (_271dc742b5dc, _4a43e396a3cb, _333044d6fd1e) => (_271dc742b5dc.setItem(_3a5021004442.url.host + "@" + _4a43e396a3cb, _333044d6fd1e), 
          !0),
          ownKeys: _271dc742b5dc => Reflect.ownKeys(_271dc742b5dc).filter(_271dc742b5dc => "string" == typeof _271dc742b5dc && _271dc742b5dc.startsWith(_3a5021004442.url.host)).map(_271dc742b5dc => "string" == typeof _271dc742b5dc ? _271dc742b5dc.substring(_3a5021004442.url.host.length + 1) : _271dc742b5dc),
          getOwnPropertyDescriptor: (_271dc742b5dc, _4a43e396a3cb) => ({
            value: _271dc742b5dc.getItem(_3a5021004442.url.host + "@" + _4a43e396a3cb),
            enumerable: !0,
            configurable: !0,
            writable: !0
          }),
          defineProperty: (_271dc742b5dc, _4a43e396a3cb, _333044d6fd1e) => (_271dc742b5dc.setItem(_3a5021004442.url.host + "@" + _4a43e396a3cb, _333044d6fd1e.value), 
          !0)
        };
        _271dc742b5dc.localStorage;
        let _333044d6fd1e = new Proxy(_271dc742b5dc.localStorage, _4a43e396a3cb), _5bd11b3c31ff = new Proxy(_271dc742b5dc.sessionStorage, _4a43e396a3cb);
        delete _271dc742b5dc.localStorage, delete _271dc742b5dc.sessionStorage, _271dc742b5dc.localStorage = _333044d6fd1e, 
        _271dc742b5dc.sessionStorage = _5bd11b3c31ff;
      }
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        default: () => n
      });
    },
    1323: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        isdedicated: () => _5e52f02aa711,
        isemulatedsw: () => _8510cd3a9582,
        isshared: () => _d5aac0c61341,
        issw: () => _ab0a35acfb91,
        iswindow: () => _f1f27b0dceb6,
        isworker: () => _188ac31e3f35,
        loadAndHook: () => g
      });
      var _333044d6fd1e = _4a43e396a3cb(37), _5bd11b3c31ff = _4a43e396a3cb(2794), _b6a548cb3b03 = _4a43e396a3cb(3255), _97105b6bb452 = _4a43e396a3cb(1862), _b5b9693d9c71 = _4a43e396a3cb(8409), _aabd55df2659 = _4a43e396a3cb(8665).A;
      let _f1f27b0dceb6 = "window" in globalThis && window instanceof Window, _188ac31e3f35 = "WorkerGlobalScope" in globalThis, _ab0a35acfb91 = "ServiceWorkerGlobalScope" in globalThis, _5e52f02aa711 = "DedicatedWorkerGlobalScope" in globalThis, _d5aac0c61341 = "SharedWorkerGlobalScope" in globalThis, _8510cd3a9582 = "location" in globalThis && "serviceworker" === new URL(globalThis.location.href).searchParams.get("dest");
      function g(_3a5021004442) {
        if ((0, _333044d6fd1e.Nk)(_3a5021004442), _aabd55df2659.log("initializing studyjet client"), 
        !(_5bd11b3c31ff.pX in globalThis)) {
          (0, _333044d6fd1e.Ec)();
          let _3a5021004442 = new _b6a548cb3b03.StudyJetClient(globalThis), _271dc742b5dc = globalThis.frameElement;
          _271dc742b5dc && !_271dc742b5dc.name && (_271dc742b5dc.name = `${Array(8).fill(0).map(() => Math.floor(36 * Math.random()).toString(36)).join("")}`), 
          globalThis.COOKIE && _3a5021004442.loadcookies(globalThis.COOKIE), _3a5021004442.hook(), 
          _8510cd3a9582 && new _b5b9693d9c71.StudyJetServiceWorkerRuntime(_3a5021004442).hook();
          let _4a43e396a3cb = new _97105b6bb452.StudyJetContextEvent(_3a5021004442.global.window, _3a5021004442);
          _3a5021004442.frame?.dispatchEvent(_4a43e396a3cb);
          let _5bd11b3c31ff = new _97105b6bb452.UrlChangeEvent(_3a5021004442.url.href);
          _3a5021004442.isSubframe || _3a5021004442.frame?.dispatchEvent(_5bd11b3c31ff);
        }
        Reflect.deleteProperty(globalThis, "WASM"), Reflect.deleteProperty(globalThis, "COOKIE");
      }
    },
    1862: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        NavigateEvent: () => i,
        StudyJetContextEvent: () => s,
        StudyJetGlobalDownloadEvent: () => n,
        UrlChangeEvent: () => a
      });
      class n extends Event {
        download;
        type="download";
        constructor(_3a5021004442) {
          super("download"), this.download = _3a5021004442;
        }
      }
      class i extends Event {
        url;
        type="navigate";
        constructor(_3a5021004442) {
          super("navigate"), this.url = _3a5021004442;
        }
      }
      class a extends Event {
        url;
        type="urlchange";
        constructor(_3a5021004442) {
          super("urlchange"), this.url = _3a5021004442;
        }
      }
      class s extends Event {
        window;
        client;
        type="contextInit";
        constructor(_3a5021004442, _271dc742b5dc) {
          super("contextInit"), this.window = _3a5021004442, this.client = _271dc742b5dc;
        }
      }
    },
    94: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      function n(_3a5021004442, _271dc742b5dc) {
        return Reflect.getOwnPropertyDescriptor(_3a5021004442, _271dc742b5dc);
      }
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        getOwnPropertyDescriptorHandler: () => n
      });
    },
    3255: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        NavigateEvent: () => _b6a548cb3b03.NavigateEvent,
        StudyJetClient: () => _333044d6fd1e.StudyJetClient,
        StudyJetContextEvent: () => _b6a548cb3b03.StudyJetContextEvent,
        StudyJetGlobalDownloadEvent: () => _b6a548cb3b03.StudyJetGlobalDownloadEvent,
        StudyJetServiceWorkerRuntime: () => _aabd55df2659.StudyJetServiceWorkerRuntime,
        UrlChangeEvent: () => _b6a548cb3b03.UrlChangeEvent,
        createLocationProxy: () => _b5b9693d9c71.createLocationProxy,
        getOwnPropertyDescriptorHandler: () => _97105b6bb452.getOwnPropertyDescriptorHandler,
        isdedicated: () => _5bd11b3c31ff.isdedicated,
        isemulatedsw: () => _5bd11b3c31ff.isemulatedsw,
        isshared: () => _5bd11b3c31ff.isshared,
        issw: () => _5bd11b3c31ff.issw,
        iswindow: () => _5bd11b3c31ff.iswindow,
        isworker: () => _5bd11b3c31ff.isworker,
        loadAndHook: () => _5bd11b3c31ff.loadAndHook
      });
      var _333044d6fd1e = _4a43e396a3cb(336), _5bd11b3c31ff = _4a43e396a3cb(1323), _b6a548cb3b03 = _4a43e396a3cb(1862), _97105b6bb452 = _4a43e396a3cb(94), _b5b9693d9c71 = _4a43e396a3cb(3696), _aabd55df2659 = _4a43e396a3cb(8409);
      _4a43e396a3cb(3255);
    },
    3696: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        createLocationProxy: () => s
      });
      var _333044d6fd1e = _4a43e396a3cb(1862), _5bd11b3c31ff = _4a43e396a3cb(1472), _b6a548cb3b03 = _4a43e396a3cb(1323);
      function s(_3a5021004442, _271dc742b5dc) {
        let _4a43e396a3cb = _b6a548cb3b03.iswindow ? _271dc742b5dc.Location : _271dc742b5dc.WorkerLocation, _97105b6bb452 = {};
        Object.setPrototypeOf(_97105b6bb452, _4a43e396a3cb.prototype), _97105b6bb452.constructor = _4a43e396a3cb;
        let _b5b9693d9c71 = _b6a548cb3b03.iswindow ? _271dc742b5dc.location : _4a43e396a3cb.prototype;
        for (let _4a43e396a3cb of [ "protocol", "hash", "host", "hostname", "href", "origin", "pathname", "port", "search" ]) {
          let _5bd11b3c31ff = _3a5021004442.natives.call("Object.getOwnPropertyDescriptor", null, _b5b9693d9c71, _4a43e396a3cb);
          if (!_5bd11b3c31ff) continue;
          let _b6a548cb3b03 = {
            configurable: !1,
            enumerable: !0
          };
          _5bd11b3c31ff.get && (_b6a548cb3b03.get = new Proxy(_5bd11b3c31ff.get, {
            apply: () => _3a5021004442.url[_4a43e396a3cb]
          })), _5bd11b3c31ff.set && (_b6a548cb3b03.set = new Proxy(_5bd11b3c31ff.set, {
            apply(_5bd11b3c31ff, _b6a548cb3b03, _97105b6bb452) {
              if ("href" === _4a43e396a3cb) {
                _3a5021004442.url = _97105b6bb452[0];
                return;
              }
              if ("hash" === _4a43e396a3cb) {
                _271dc742b5dc.location.hash = _97105b6bb452[0];
                let _4a43e396a3cb = new _333044d6fd1e.UrlChangeEvent(_3a5021004442.url.href);
                _3a5021004442.isSubframe || _3a5021004442.frame?.dispatchEvent(_4a43e396a3cb);
                return;
              }
              let _b5b9693d9c71 = new URL(_3a5021004442.url.href);
              _b5b9693d9c71[_4a43e396a3cb] = _97105b6bb452[0], _3a5021004442.url = _b5b9693d9c71;
            }
          })), Object.defineProperty(_97105b6bb452, _4a43e396a3cb, _b6a548cb3b03);
        }
        return _97105b6bb452.toString = new Proxy(_271dc742b5dc.location.toString, {
          apply: () => _3a5021004442.url.href
        }), _271dc742b5dc.location.valueOf && (_97105b6bb452.valueOf = new Proxy(_271dc742b5dc.location.valueOf, {
          apply: () => _3a5021004442.url.href
        })), _271dc742b5dc.location.assign && (_97105b6bb452.assign = new Proxy(_271dc742b5dc.location.assign, {
          apply(_4a43e396a3cb, _b6a548cb3b03, _97105b6bb452) {
            _97105b6bb452[0] = (0, _5bd11b3c31ff.Oy)(_97105b6bb452[0], _3a5021004442.meta), 
            Reflect.apply(_4a43e396a3cb, _271dc742b5dc.location, _97105b6bb452);
            let _b5b9693d9c71 = new _333044d6fd1e.UrlChangeEvent(_3a5021004442.url.href);
            _3a5021004442.isSubframe || _3a5021004442.frame?.dispatchEvent(_b5b9693d9c71);
          }
        })), _271dc742b5dc.location.reload && (_97105b6bb452.reload = new Proxy(_271dc742b5dc.location.reload, {
          apply(_3a5021004442, _4a43e396a3cb, _333044d6fd1e) {
            Reflect.apply(_3a5021004442, _271dc742b5dc.location, _333044d6fd1e);
          }
        })), _271dc742b5dc.location.replace && (_97105b6bb452.replace = new Proxy(_271dc742b5dc.location.replace, {
          apply(_4a43e396a3cb, _b6a548cb3b03, _97105b6bb452) {
            _97105b6bb452[0] = (0, _5bd11b3c31ff.Oy)(_97105b6bb452[0], _3a5021004442.meta), 
            Reflect.apply(_4a43e396a3cb, _271dc742b5dc.location, _97105b6bb452);
            let _b5b9693d9c71 = new _333044d6fd1e.UrlChangeEvent(_3a5021004442.url.href);
            _3a5021004442.isSubframe || _3a5021004442.frame?.dispatchEvent(_b5b9693d9c71);
          }
        })), _97105b6bb452;
      }
    },
    8382: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      function n(_3a5021004442) {
        _3a5021004442.Proxy("console.clear", {
          apply(_3a5021004442) {
            _3a5021004442.return(void 0);
          }
        });
        let _271dc742b5dc = console.log;
        _3a5021004442.Trap("console.log", {
          set(_3a5021004442, _271dc742b5dc) {},
          get: _3a5021004442 => _271dc742b5dc
        });
      }
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        default: () => n
      });
    },
    4634: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        default: () => i
      });
      var _333044d6fd1e = _4a43e396a3cb(1472);
      function i(_3a5021004442) {
        _3a5021004442.Proxy("URL.createObjectURL", {
          apply(_271dc742b5dc) {
            let _4a43e396a3cb = _271dc742b5dc.call();
            _4a43e396a3cb.startsWith("blob:") ? _271dc742b5dc.return((0, _333044d6fd1e.IP)(_4a43e396a3cb, _3a5021004442.meta)) : _271dc742b5dc.return(_4a43e396a3cb);
          }
        }), _3a5021004442.Proxy("URL.revokeObjectURL", {
          apply(_3a5021004442) {
            _3a5021004442.args[0] = (0, _333044d6fd1e.$n)(_3a5021004442.args[0]);
          }
        });
      }
    },
    5026: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        default: () => i
      });
      var _333044d6fd1e = _4a43e396a3cb(1472);
      function i(_3a5021004442, _271dc742b5dc) {
        _3a5021004442.Proxy("CacheStorage.prototype.open", {
          apply(_271dc742b5dc) {
            _271dc742b5dc.args[0] = `${_3a5021004442.url.origin}@${_271dc742b5dc.args[0]}`;
          }
        }), _3a5021004442.Proxy("CacheStorage.prototype.has", {
          apply(_271dc742b5dc) {
            _271dc742b5dc.args[0] = `${_3a5021004442.url.origin}@${_271dc742b5dc.args[0]}`;
          }
        }), _3a5021004442.Proxy("CacheStorage.prototype.match", {
          apply(_271dc742b5dc) {
            ("string" == typeof _271dc742b5dc.args[0] || _271dc742b5dc.args[0] instanceof URL) && (_271dc742b5dc.args[0] = (0, 
            _333044d6fd1e.Oy)(_271dc742b5dc.args[0], _3a5021004442.meta));
          }
        }), _3a5021004442.Proxy("CacheStorage.prototype.delete", {
          apply(_271dc742b5dc) {
            _271dc742b5dc.args[0] = `${_3a5021004442.url.origin}@${_271dc742b5dc.args[0]}`;
          }
        }), _3a5021004442.Proxy("Cache.prototype.add", {
          apply(_271dc742b5dc) {
            ("string" == typeof _271dc742b5dc.args[0] || _271dc742b5dc.args[0] instanceof URL) && (_271dc742b5dc.args[0] = (0, 
            _333044d6fd1e.Oy)(_271dc742b5dc.args[0], _3a5021004442.meta));
          }
        }), _3a5021004442.Proxy("Cache.prototype.addAll", {
          apply(_271dc742b5dc) {
            for (let _4a43e396a3cb = 0; _4a43e396a3cb < _271dc742b5dc.args[0].length; _4a43e396a3cb++) ("string" == typeof _271dc742b5dc.args[0][_4a43e396a3cb] || _271dc742b5dc.args[0][_4a43e396a3cb] instanceof URL) && (_271dc742b5dc.args[0][_4a43e396a3cb] = (0, 
            _333044d6fd1e.Oy)(_271dc742b5dc.args[0][_4a43e396a3cb], _3a5021004442.meta));
          }
        }), _3a5021004442.Proxy("Cache.prototype.put", {
          apply(_271dc742b5dc) {
            ("string" == typeof _271dc742b5dc.args[0] || _271dc742b5dc.args[0] instanceof URL) && (_271dc742b5dc.args[0] = (0, 
            _333044d6fd1e.Oy)(_271dc742b5dc.args[0], _3a5021004442.meta));
          }
        }), _3a5021004442.Proxy("Cache.prototype.match", {
          apply(_271dc742b5dc) {
            ("string" == typeof _271dc742b5dc.args[0] || _271dc742b5dc.args[0] instanceof URL) && (_271dc742b5dc.args[0] = (0, 
            _333044d6fd1e.Oy)(_271dc742b5dc.args[0], _3a5021004442.meta));
          }
        }), _3a5021004442.Proxy("Cache.prototype.matchAll", {
          apply(_271dc742b5dc) {
            (_271dc742b5dc.args[0] && "string" == typeof _271dc742b5dc.args[0] || _271dc742b5dc.args[0] && _271dc742b5dc.args[0] instanceof URL) && (_271dc742b5dc.args[0] = (0, 
            _333044d6fd1e.Oy)(_271dc742b5dc.args[0], _3a5021004442.meta));
          }
        }), _3a5021004442.Proxy("Cache.prototype.keys", {
          apply(_271dc742b5dc) {
            (_271dc742b5dc.args[0] && "string" == typeof _271dc742b5dc.args[0] || _271dc742b5dc.args[0] && _271dc742b5dc.args[0] instanceof URL) && (_271dc742b5dc.args[0] = (0, 
            _333044d6fd1e.Oy)(_271dc742b5dc.args[0], _3a5021004442.meta));
          }
        }), _3a5021004442.Proxy("Cache.prototype.delete", {
          apply(_271dc742b5dc) {
            ("string" == typeof _271dc742b5dc.args[0] || _271dc742b5dc.args[0] instanceof URL) && (_271dc742b5dc.args[0] = (0, 
            _333044d6fd1e.Oy)(_271dc742b5dc.args[0], _3a5021004442.meta));
          }
        });
      }
    },
    6627: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        default: () => i
      });
      var _333044d6fd1e = _4a43e396a3cb(1323);
      function i(_3a5021004442, _271dc742b5dc) {
        let r = _3a5021004442 => {
          let _4a43e396a3cb = _3a5021004442.split("."), _333044d6fd1e = _4a43e396a3cb.pop(), _5bd11b3c31ff = _4a43e396a3cb.reduce((_3a5021004442, _271dc742b5dc) => _3a5021004442?.[_271dc742b5dc], _271dc742b5dc);
          _5bd11b3c31ff && _333044d6fd1e && _333044d6fd1e in _5bd11b3c31ff && delete _5bd11b3c31ff[_333044d6fd1e];
        };
        r("BarcodeDetector"), r("FaceDetector"), r("TextDetector"), _333044d6fd1e.iswindow && r("ServiceWorkerRegistration.prototype.sync"), 
        _333044d6fd1e.isemulatedsw && (r("SyncManager"), r("SyncEvent")), r("TrustedHTML"), 
        r("TrustedScript"), r("TrustedScriptURL"), r("TrustedTypePolicy"), r("TrustedTypePolicyFactory"), 
        _271dc742b5dc.__defineGetter__("trustedTypes", () => void 0), r("Navigator.prototype.joinAdInterestGroup"), 
        _333044d6fd1e.iswindow && (r("MediaDevices.prototype.setCaptureHandleConfig"), r("Navigator.prototype.bluetooth"), 
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
    582: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        argdbg: () => a,
        default: () => s,
        enabled: () => i
      });
      var _333044d6fd1e = _4a43e396a3cb(37);
      let i = _3a5021004442 => (0, _333044d6fd1e.U5)("captureErrors", _3a5021004442.url);
      function a(_3a5021004442, _271dc742b5dc = []) {
        switch (typeof _3a5021004442) {
         case "string":
          break;

         case "object":
          if (_3a5021004442 && _3a5021004442[Symbol.iterator] && "function" == typeof _3a5021004442[Symbol.iterator]) for (let _4a43e396a3cb in _3a5021004442) {
            let _333044d6fd1e = Object.getOwnPropertyDescriptor(_3a5021004442, _4a43e396a3cb);
            if (_333044d6fd1e && _333044d6fd1e.get) continue;
            let _5bd11b3c31ff = _3a5021004442[_4a43e396a3cb];
            _271dc742b5dc.includes(_5bd11b3c31ff) || (_271dc742b5dc.push(_5bd11b3c31ff), a(_5bd11b3c31ff, _271dc742b5dc));
          }
        }
      }
      function s(_3a5021004442, _271dc742b5dc) {
        let _4a43e396a3cb = console.warn;
        _271dc742b5dc.$scramerr = function(_3a5021004442) {
          _4a43e396a3cb("CAUGHT ERROR", _3a5021004442);
        }, _271dc742b5dc.$scramdbg = function(_3a5021004442, _271dc742b5dc) {
          return _3a5021004442 && "object" == typeof _3a5021004442 && _3a5021004442.length > 0 && a(_3a5021004442), 
          a(_271dc742b5dc), _271dc742b5dc;
        }, _3a5021004442.Proxy("Promise.prototype.catch", {
          apply(_3a5021004442) {
            _3a5021004442.args[0] && (_3a5021004442.args[0] = new Proxy(_3a5021004442.args[0], {
              apply(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
                Reflect.apply(_3a5021004442, _271dc742b5dc, _4a43e396a3cb);
              }
            }));
          }
        });
      }
    },
    6143: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        default: () => s,
        enabled: () => a
      });
      var _333044d6fd1e = _4a43e396a3cb(37), _5bd11b3c31ff = _4a43e396a3cb(1472);
      let a = _3a5021004442 => (0, _333044d6fd1e.U5)("cleanErrors", _3a5021004442.url);
      function s(_3a5021004442, _271dc742b5dc) {
        let r = (_3a5021004442, _271dc742b5dc) => {
          let _4a43e396a3cb = _3a5021004442.stack;
          for (let _3a5021004442 = 0; _3a5021004442 < _271dc742b5dc.length; _3a5021004442++) {
            let _b6a548cb3b03 = _271dc742b5dc[_3a5021004442].getFileName();
            try {
              if (_b6a548cb3b03.endsWith(_333044d6fd1e.$W.files.all)) {
                let _3a5021004442 = _4a43e396a3cb.split("\n"), _271dc742b5dc = _3a5021004442.find(_3a5021004442 => _3a5021004442.includes(_b6a548cb3b03));
                _3a5021004442.splice(_271dc742b5dc, 1), _4a43e396a3cb = _3a5021004442.join("\n");
                continue;
              }
            } catch {}
            try {
              _4a43e396a3cb = _4a43e396a3cb.replaceAll(_b6a548cb3b03, (0, _5bd11b3c31ff.v2)(_b6a548cb3b03));
            } catch {}
          }
          return _4a43e396a3cb;
        };
        _3a5021004442.Trap("Error.prepareStackTrace", {
          get: _3a5021004442 => r,
          set(_3a5021004442) {}
        });
      }
    },
    591: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        default: () => a,
        indirectEval: () => s
      });
      var _333044d6fd1e = _4a43e396a3cb(37), _5bd11b3c31ff = _4a43e396a3cb(1478);
      function a(_3a5021004442, _271dc742b5dc) {
        Object.defineProperty(_271dc742b5dc, _333044d6fd1e.$W.globals.rewritefn, {
          value: function(_271dc742b5dc) {
            return "string" != typeof _271dc742b5dc ? _271dc742b5dc : (0, _5bd11b3c31ff.o)(_271dc742b5dc, "(direct eval proxy)", _3a5021004442.meta);
          },
          writable: !1,
          configurable: !1
        });
      }
      function s(_3a5021004442, _271dc742b5dc) {
        let _4a43e396a3cb;
        return "string" != typeof _271dc742b5dc ? _271dc742b5dc : ("accounts.google.com" === this.url.hostname ? (console.log("USING STRICT EVAL - BOTGUARD"), 
        _4a43e396a3cb = Function(`\n\t\t\t"use strict";\n\t\t\treturn eval;\n\t\t`)) : _4a43e396a3cb = this.global.eval, 
        _4a43e396a3cb((0, _5bd11b3c31ff.o)(_271dc742b5dc, "(indirect eval proxy)", this.meta)));
      }
    },
    3481: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        default: () => o
      });
      var _333044d6fd1e = _4a43e396a3cb(1323), _5bd11b3c31ff = _4a43e396a3cb(1472), _b6a548cb3b03 = _4a43e396a3cb(94);
      let _97105b6bb452 = Symbol.for("studyjet original onevent function");
      function o(_3a5021004442, _271dc742b5dc) {
        let _4a43e396a3cb = {
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
              return "object" == typeof this.data && "$studyjet$origin" in this.data ? this.data.$studyjet$origin : _3a5021004442.url.origin;
            },
            data() {
              return "object" == typeof this.data && "$studyjet$data" in this.data ? this.data.$studyjet$data : this.data;
            }
          },
          hashchange: {
            oldURL() {
              return (0, _5bd11b3c31ff.v2)(this.oldURL);
            },
            newURL() {
              return (0, _5bd11b3c31ff.v2)(this.newURL);
            }
          },
          storage: {
            _init() {
              return this.key.startsWith(_3a5021004442.url.host + "@");
            },
            key() {
              return this.key.substring(this.key.indexOf("@") + 1);
            },
            url() {
              return (0, _5bd11b3c31ff.v2)(this.url);
            }
          }
        };
        function o(_3a5021004442) {
          return new Proxy(_3a5021004442, {
            apply(_3a5021004442, _333044d6fd1e, _5bd11b3c31ff) {
              let _97105b6bb452 = _5bd11b3c31ff[0];
              if (_97105b6bb452.isTrusted) {
                let _3a5021004442 = _97105b6bb452.type;
                if (_3a5021004442 in _4a43e396a3cb) {
                  let _271dc742b5dc = _4a43e396a3cb[_3a5021004442];
                  if (_271dc742b5dc._init && !1 === _271dc742b5dc._init.call(_97105b6bb452)) return;
                  _5bd11b3c31ff[0] = new Proxy(_97105b6bb452, {
                    get(_3a5021004442, _4a43e396a3cb, _333044d6fd1e) {
                      let _5bd11b3c31ff = Reflect.get(_3a5021004442, _4a43e396a3cb);
                      return _4a43e396a3cb in _271dc742b5dc ? _271dc742b5dc[_4a43e396a3cb].call(_3a5021004442) : "function" == typeof _5bd11b3c31ff ? new Proxy(_5bd11b3c31ff, {
                        apply: (_3a5021004442, _271dc742b5dc, _4a43e396a3cb) => _271dc742b5dc === _333044d6fd1e ? Reflect.apply(_3a5021004442, _97105b6bb452, _4a43e396a3cb) : Reflect.apply(_3a5021004442, _271dc742b5dc, _4a43e396a3cb)
                      }) : _5bd11b3c31ff;
                    },
                    getOwnPropertyDescriptor: _b6a548cb3b03.getOwnPropertyDescriptorHandler
                  });
                }
              }
              return _271dc742b5dc.event || Object.defineProperty(_271dc742b5dc, "event", {
                get: () => _5bd11b3c31ff[0],
                configurable: !0
              }), Reflect.apply(_3a5021004442, _333044d6fd1e, _5bd11b3c31ff);
            },
            getOwnPropertyDescriptor: _b6a548cb3b03.getOwnPropertyDescriptorHandler
          });
        }
        _3a5021004442.Proxy("EventTarget.prototype.addEventListener", {
          apply(_271dc742b5dc) {
            if ("function" != typeof _271dc742b5dc.args[1]) return;
            let _4a43e396a3cb = _271dc742b5dc.args[1], _333044d6fd1e = o(_4a43e396a3cb);
            _271dc742b5dc.args[1] = _333044d6fd1e;
            let _5bd11b3c31ff = _3a5021004442.eventcallbacks.get(_271dc742b5dc.this);
            (_5bd11b3c31ff ||= []).push({
              event: _271dc742b5dc.args[0],
              originalCallback: _4a43e396a3cb,
              proxiedCallback: _333044d6fd1e
            }), _3a5021004442.eventcallbacks.set(_271dc742b5dc.this, _5bd11b3c31ff);
          }
        }), _3a5021004442.Proxy("EventTarget.prototype.removeEventListener", {
          apply(_271dc742b5dc) {
            if ("function" != typeof _271dc742b5dc.args[1]) return;
            let _4a43e396a3cb = _3a5021004442.eventcallbacks.get(_271dc742b5dc.this);
            if (!_4a43e396a3cb) return;
            let _333044d6fd1e = _4a43e396a3cb.findIndex(_3a5021004442 => _3a5021004442.event === _271dc742b5dc.args[0] && _3a5021004442.originalCallback === _271dc742b5dc.args[1]);
            if (-1 === _333044d6fd1e) return;
            let _5bd11b3c31ff = _4a43e396a3cb.splice(_333044d6fd1e, 1);
            _3a5021004442.eventcallbacks.set(_271dc742b5dc.this, _4a43e396a3cb), _271dc742b5dc.args[1] = _5bd11b3c31ff[0].proxiedCallback;
          }
        });
        let _b5b9693d9c71 = [ _271dc742b5dc.self, _271dc742b5dc.MessagePort.prototype ];
        for (let _5bd11b3c31ff of (_333044d6fd1e.iswindow && _b5b9693d9c71.push(_271dc742b5dc.HTMLElement.prototype), 
        _271dc742b5dc.Worker && _b5b9693d9c71.push(_271dc742b5dc.Worker.prototype), _b5b9693d9c71)) for (let _271dc742b5dc of Reflect.ownKeys(_5bd11b3c31ff)) if ("string" == typeof _271dc742b5dc && _271dc742b5dc.startsWith("on") && _4a43e396a3cb[_271dc742b5dc.slice(2)]) {
          let _4a43e396a3cb = _3a5021004442.natives.call("Object.getOwnPropertyDescriptor", null, _5bd11b3c31ff, _271dc742b5dc);
          if (!_4a43e396a3cb.get || !_4a43e396a3cb.set || !_4a43e396a3cb.configurable) continue;
          _3a5021004442.RawTrap(_5bd11b3c31ff, _271dc742b5dc, {
            get(_3a5021004442) {
              return this[_97105b6bb452] ? this[_97105b6bb452] : _3a5021004442.get();
            },
            set(_3a5021004442, _271dc742b5dc) {
              if (this[_97105b6bb452] = _271dc742b5dc, "function" != typeof _271dc742b5dc) return _3a5021004442.set(_271dc742b5dc);
              _3a5021004442.set(o(_271dc742b5dc));
            }
          });
        }
      }
    },
    249: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        default: () => a
      });
      var _333044d6fd1e = _4a43e396a3cb(1478);
      function i(_3a5021004442, _271dc742b5dc) {
        let _4a43e396a3cb = _3a5021004442.call().toString(), _5bd11b3c31ff = (0, _333044d6fd1e.o)(`return ${_4a43e396a3cb}`, "(function proxy)", _271dc742b5dc.meta);
        _3a5021004442.return(_3a5021004442.fn(_5bd11b3c31ff)());
      }
      function a(_3a5021004442, _271dc742b5dc) {
        let _4a43e396a3cb = {
          apply(_271dc742b5dc) {
            i(_271dc742b5dc, _3a5021004442);
          },
          construct(_271dc742b5dc) {
            i(_271dc742b5dc, _3a5021004442);
          }
        };
        _3a5021004442.Proxy("Function", _4a43e396a3cb);
        let _333044d6fd1e = _3a5021004442.natives.call("eval", null, "(function () {})").constructor, _5bd11b3c31ff = _3a5021004442.natives.call("eval", null, "(async function () {})").constructor, _b6a548cb3b03 = _3a5021004442.natives.call("eval", null, "(function* () {})").constructor, _97105b6bb452 = _3a5021004442.natives.call("eval", null, "(async function* () {})").constructor;
        _3a5021004442.RawProxy(_333044d6fd1e.prototype, "constructor", _4a43e396a3cb), _3a5021004442.RawProxy(_5bd11b3c31ff.prototype, "constructor", _4a43e396a3cb), 
        _3a5021004442.RawProxy(_b6a548cb3b03.prototype, "constructor", _4a43e396a3cb), _3a5021004442.RawProxy(_97105b6bb452.prototype, "constructor", _4a43e396a3cb);
      }
    },
    2468: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        default: () => a
      });
      var _333044d6fd1e = _4a43e396a3cb(37), _5bd11b3c31ff = _4a43e396a3cb(1472);
      function a(_3a5021004442, _271dc742b5dc) {
        let _4a43e396a3cb = _3a5021004442.natives.call("Function", null, "url", "return import(url)");
        Object.defineProperty(_271dc742b5dc, _333044d6fd1e.$W.globals.importfn, {
          value: function(_271dc742b5dc, _333044d6fd1e) {
            let _b6a548cb3b03 = new URL(_333044d6fd1e, _271dc742b5dc).href;
            return _333044d6fd1e.includes(":") || _333044d6fd1e.startsWith("/") || _333044d6fd1e.startsWith(".") || _333044d6fd1e.startsWith("..") ? _4a43e396a3cb(`${(0, 
            _5bd11b3c31ff.Oy)(_b6a548cb3b03, _3a5021004442.meta)}?type=module`) : _4a43e396a3cb(_333044d6fd1e);
          },
          writable: !1,
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_271dc742b5dc, _333044d6fd1e.$W.globals.metafn, {
          value: function(_3a5021004442, _271dc742b5dc) {
            return _3a5021004442.url = _271dc742b5dc, _3a5021004442.resolve = function(_3a5021004442) {
              return new URL(_3a5021004442, _271dc742b5dc).href;
            }, _3a5021004442;
          },
          writable: !1,
          configurable: !1,
          enumerable: !1
        });
      }
    },
    4338: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      function n(_3a5021004442) {
        _3a5021004442.Proxy("IDBFactory.prototype.open", {
          apply(_271dc742b5dc) {
            _271dc742b5dc.args[0] = `${_3a5021004442.url.origin}@${_271dc742b5dc.args[0]}`;
          }
        }), _3a5021004442.Trap("IDBDatabase.prototype.name", {
          get(_3a5021004442) {
            let _271dc742b5dc = _3a5021004442.get();
            return _271dc742b5dc.substring(_271dc742b5dc.indexOf("@") + 1);
          }
        });
      }
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        default: () => n
      });
    },
    6593: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      function n(_3a5021004442) {
        _3a5021004442.Proxy("StorageManager.prototype.getDirectory", {
          apply(_271dc742b5dc) {
            let _4a43e396a3cb = _271dc742b5dc.call();
            _271dc742b5dc.return((async () => {
              let _271dc742b5dc = await _4a43e396a3cb, _333044d6fd1e = await _271dc742b5dc.getDirectoryHandle(`${_3a5021004442.url.origin.replace(/\/|\s|\./g, "-")}`, {
                create: !0
              });
              return Object.defineProperty(_333044d6fd1e, "name", {
                value: "",
                writable: !1
              }), _333044d6fd1e;
            })());
          }
        });
      }
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        default: () => n
      });
    },
    1320: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        default: () => s
      });
      var _333044d6fd1e = _4a43e396a3cb(1323), _5bd11b3c31ff = _4a43e396a3cb(2794), _b6a548cb3b03 = _4a43e396a3cb(1914);
      function s(_3a5021004442) {
        _333044d6fd1e.iswindow && _3a5021004442.Proxy("window.postMessage", {
          apply(_3a5021004442) {
            let {constructor: {constructor: _271dc742b5dc}} = "object" == typeof _3a5021004442.args[0] && null !== _3a5021004442.args[0] ? _3a5021004442.args[0] : "object" == typeof _3a5021004442.args[2] && null !== _3a5021004442.args[2] ? _3a5021004442.args[2] : _3a5021004442.this && _b6a548cb3b03.POLLUTANT in _3a5021004442.this && "object" == typeof _3a5021004442.this[_b6a548cb3b03.POLLUTANT] && null !== _3a5021004442.this[_b6a548cb3b03.POLLUTANT] ? _3a5021004442.this[_b6a548cb3b03.POLLUTANT] : {}, _4a43e396a3cb = _271dc742b5dc("return globalThis")()[_5bd11b3c31ff.pX], _333044d6fd1e = _271dc742b5dc("...args", "this(...args)");
            _3a5021004442.args[0] = {
              $studyjet$messagetype: "window",
              $studyjet$origin: _4a43e396a3cb.url.origin,
              $studyjet$data: _3a5021004442.args[0]
            }, "string" == typeof _3a5021004442.args[1] && (_3a5021004442.args[1] = "*"), "object" == typeof _3a5021004442.args[1] && (_3a5021004442.args[1].targetOrigin = "*"), 
            _3a5021004442.return(_333044d6fd1e.call(_3a5021004442.fn, ..._3a5021004442.args));
          }
        });
        let _271dc742b5dc = [ "MessagePort.prototype.postMessage" ];
        self.Worker && _271dc742b5dc.push("Worker.prototype.postMessage"), _333044d6fd1e.iswindow || _271dc742b5dc.push("self.postMessage"), 
        _3a5021004442.Proxy(_271dc742b5dc, {
          apply(_3a5021004442) {
            _3a5021004442.args[0] = {
              $studyjet$messagetype: "worker",
              $studyjet$data: _3a5021004442.args[0]
            };
          }
        });
      }
    },
    1914: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        POLLUTANT: () => _5bd11b3c31ff,
        default: () => a
      });
      var _333044d6fd1e = _4a43e396a3cb(37);
      let _5bd11b3c31ff = Symbol.for("studyjet realm pollutant");
      function a(_3a5021004442, _271dc742b5dc) {
        Object.defineProperty(_271dc742b5dc.Object.prototype, _333044d6fd1e.$W.globals.setrealmfn, {
          value(_3a5021004442) {
            return Object.defineProperty(this, _5bd11b3c31ff, {
              value: _3a5021004442,
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
    9701: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        default: () => i
      });
      var _333044d6fd1e = _4a43e396a3cb(1472);
      function i(_3a5021004442) {
        _3a5021004442.Proxy("EventSource", {
          construct(_271dc742b5dc) {
            _271dc742b5dc.args[0] = (0, _333044d6fd1e.Oy)(_271dc742b5dc.args[0], _3a5021004442.meta);
          }
        }), _3a5021004442.Trap("EventSource.prototype.url", {
          get(_3a5021004442) {
            (0, _333044d6fd1e.v2)(_3a5021004442.get());
          }
        });
      }
    },
    6972: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        default: () => a
      });
      var _333044d6fd1e = _4a43e396a3cb(1323), _5bd11b3c31ff = _4a43e396a3cb(1472);
      function a(_3a5021004442) {
        _3a5021004442.Proxy("fetch", {
          apply(_271dc742b5dc) {
            ("string" == typeof _271dc742b5dc.args[0] || _271dc742b5dc.args[0] instanceof URL) && (_271dc742b5dc.args[0] = (0, 
            _5bd11b3c31ff.Oy)(_271dc742b5dc.args[0], _3a5021004442.meta), _333044d6fd1e.isemulatedsw && (_271dc742b5dc.args[0] += "?from=swruntime"));
          }
        }), _3a5021004442.Proxy("Request", {
          construct(_271dc742b5dc) {
            ("string" == typeof _271dc742b5dc.args[0] || _271dc742b5dc.args[0] instanceof URL) && (_271dc742b5dc.args[0] = (0, 
            _5bd11b3c31ff.Oy)(_271dc742b5dc.args[0], _3a5021004442.meta), _333044d6fd1e.isemulatedsw && (_271dc742b5dc.args[0] += "?from=swruntime"));
          }
        }), _3a5021004442.Trap("Response.prototype.url", {
          get: _3a5021004442 => (0, _5bd11b3c31ff.v2)(_3a5021004442.get())
        }), _3a5021004442.Trap("Request.prototype.url", {
          get: _3a5021004442 => (0, _5bd11b3c31ff.v2)(_3a5021004442.get())
        });
      }
    },
    9931: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      function n(_3a5021004442, _271dc742b5dc) {
        let _4a43e396a3cb = new WeakMap, _333044d6fd1e = new WeakMap;
        _3a5021004442.Proxy("WebSocket", {
          construct(_333044d6fd1e) {
            let _5bd11b3c31ff = new EventTarget;
            Object.setPrototypeOf(_5bd11b3c31ff, _333044d6fd1e.fn.prototype), _5bd11b3c31ff.constructor = _333044d6fd1e.fn;
            let _b6a548cb3b03 = _3a5021004442.bare.createWebSocket(_333044d6fd1e.args[0], _333044d6fd1e.args[1], null, {
              "User-Agent": _271dc742b5dc.navigator.userAgent,
              Origin: _3a5021004442.url.origin
            }), _97105b6bb452 = {
              extensions: "",
              protocol: "",
              url: _333044d6fd1e.args[0],
              binaryType: "blob",
              barews: _b6a548cb3b03,
              onclose: null,
              onerror: null,
              onmessage: null,
              onopen: null
            };
            function o(_3a5021004442) {
              _97105b6bb452["on" + _3a5021004442.type]?.(new Proxy(_3a5021004442, {
                get: (_3a5021004442, _271dc742b5dc) => "isTrusted" === _271dc742b5dc || Reflect.get(_3a5021004442, _271dc742b5dc)
              })), _5bd11b3c31ff.dispatchEvent(_3a5021004442);
            }
            _b6a548cb3b03.addEventListener("open", () => {
              o(new Event("open"));
            }), _b6a548cb3b03.addEventListener("close", _3a5021004442 => {
              o(new CloseEvent("close", _3a5021004442));
            }), _b6a548cb3b03.addEventListener("message", async _3a5021004442 => {
              let _271dc742b5dc = _3a5021004442.data;
              "string" == typeof _271dc742b5dc || ("byteLength" in _271dc742b5dc ? "blob" === _97105b6bb452.binaryType ? _271dc742b5dc = new Blob([ _271dc742b5dc ]) : Object.setPrototypeOf(_271dc742b5dc, ArrayBuffer.prototype) : "arrayBuffer" in _271dc742b5dc && "arraybuffer" === _97105b6bb452.binaryType && Object.setPrototypeOf(_271dc742b5dc = await _271dc742b5dc.arrayBuffer(), ArrayBuffer.prototype)), 
              o(new MessageEvent("message", {
                data: _271dc742b5dc,
                origin: _3a5021004442.origin,
                lastEventId: _3a5021004442.lastEventId,
                source: _3a5021004442.source,
                ports: _3a5021004442.ports
              }));
            }), _b6a548cb3b03.addEventListener("error", () => {
              o(new Event("error"));
            }), _4a43e396a3cb.set(_5bd11b3c31ff, _97105b6bb452), _333044d6fd1e.return(_5bd11b3c31ff);
          }
        }), _3a5021004442.Trap("WebSocket.prototype.binaryType", {
          get: _3a5021004442 => _4a43e396a3cb.get(_3a5021004442.this).binaryType,
          set(_3a5021004442, _271dc742b5dc) {
            let _333044d6fd1e = _4a43e396a3cb.get(_3a5021004442.this);
            ("blob" === _271dc742b5dc || "arraybuffer" === _271dc742b5dc) && (_333044d6fd1e.binaryType = _271dc742b5dc);
          }
        }), _3a5021004442.Trap("WebSocket.prototype.bufferedAmount", {
          get: () => 0
        }), _3a5021004442.Trap("WebSocket.prototype.extensions", {
          get: _3a5021004442 => _4a43e396a3cb.get(_3a5021004442.this).extensions
        }), _3a5021004442.Trap("WebSocket.prototype.onclose", {
          get: _3a5021004442 => _4a43e396a3cb.get(_3a5021004442.this).onclose,
          set(_3a5021004442, _271dc742b5dc) {
            _4a43e396a3cb.get(_3a5021004442.this).onclose = _271dc742b5dc;
          }
        }), _3a5021004442.Trap("WebSocket.prototype.onerror", {
          get: _3a5021004442 => _4a43e396a3cb.get(_3a5021004442.this).onerror,
          set(_3a5021004442, _271dc742b5dc) {
            _4a43e396a3cb.get(_3a5021004442.this).onerror = _271dc742b5dc;
          }
        }), _3a5021004442.Trap("WebSocket.prototype.onmessage", {
          get: _3a5021004442 => _4a43e396a3cb.get(_3a5021004442.this).onmessage,
          set(_3a5021004442, _271dc742b5dc) {
            _4a43e396a3cb.get(_3a5021004442.this).onmessage = _271dc742b5dc;
          }
        }), _3a5021004442.Trap("WebSocket.prototype.onopen", {
          get: _3a5021004442 => _4a43e396a3cb.get(_3a5021004442.this).onopen,
          set(_3a5021004442, _271dc742b5dc) {
            _4a43e396a3cb.get(_3a5021004442.this).onopen = _271dc742b5dc;
          }
        }), _3a5021004442.Trap("WebSocket.prototype.url", {
          get: _3a5021004442 => _4a43e396a3cb.get(_3a5021004442.this).url
        }), _3a5021004442.Trap("WebSocket.prototype.protocol", {
          get: _3a5021004442 => _4a43e396a3cb.get(_3a5021004442.this).protocol
        }), _3a5021004442.Trap("WebSocket.prototype.readyState", {
          get: _3a5021004442 => _4a43e396a3cb.get(_3a5021004442.this).barews.readyState
        }), _3a5021004442.Proxy("WebSocket.prototype.send", {
          apply(_3a5021004442) {
            let _271dc742b5dc = _4a43e396a3cb.get(_3a5021004442.this);
            _3a5021004442.return(_271dc742b5dc.barews.send(_3a5021004442.args[0]));
          }
        }), _3a5021004442.Proxy("WebSocket.prototype.close", {
          apply(_3a5021004442) {
            let _271dc742b5dc = _4a43e396a3cb.get(_3a5021004442.this);
            void 0 === _3a5021004442.args[0] && (_3a5021004442.args[0] = 1e3), void 0 === _3a5021004442.args[1] && (_3a5021004442.args[1] = ""), 
            _3a5021004442.return(_271dc742b5dc.barews.close(_3a5021004442.args[0], _3a5021004442.args[1]));
          }
        }), _3a5021004442.Proxy("WebSocketStream", {
          construct(_4a43e396a3cb) {
            let _5bd11b3c31ff, _b6a548cb3b03, _97105b6bb452, _b5b9693d9c71 = {};
            Object.setPrototypeOf(_b5b9693d9c71, _4a43e396a3cb.fn.prototype), _b5b9693d9c71.constructor = _4a43e396a3cb.fn;
            let _aabd55df2659 = _3a5021004442.bare.createWebSocket(_4a43e396a3cb.args[0], _4a43e396a3cb.args[1], null, {
              "User-Agent": _271dc742b5dc.navigator.userAgent,
              Origin: _3a5021004442.url.origin
            });
            _4a43e396a3cb.args[1]?.signal.addEventListener("abort", () => {
              _aabd55df2659.close(1e3, "");
            });
            let _f1f27b0dceb6 = {
              extensions: "",
              protocol: "",
              url: _4a43e396a3cb.args[0],
              barews: _aabd55df2659,
              opened: new Promise((_3a5021004442, _271dc742b5dc) => {
                _5bd11b3c31ff = _3a5021004442, _97105b6bb452 = _271dc742b5dc;
              }),
              closed: new Promise(_3a5021004442 => {
                _b6a548cb3b03 = _3a5021004442;
              }),
              readable: new ReadableStream({
                start(_3a5021004442) {
                  _aabd55df2659.addEventListener("message", async _271dc742b5dc => {
                    let _4a43e396a3cb = _271dc742b5dc.data;
                    "string" == typeof _4a43e396a3cb || ("byteLength" in _4a43e396a3cb ? Object.setPrototypeOf(_4a43e396a3cb, ArrayBuffer.prototype) : "arrayBuffer" in _4a43e396a3cb && Object.setPrototypeOf(_4a43e396a3cb = await _4a43e396a3cb.arrayBuffer(), ArrayBuffer.prototype)), 
                    _3a5021004442.enqueue(_4a43e396a3cb);
                  });
                }
              }),
              writable: new WritableStream({
                write(_3a5021004442) {
                  _aabd55df2659.send(_3a5021004442);
                }
              })
            };
            _aabd55df2659.addEventListener("open", () => {
              _5bd11b3c31ff({
                readable: _f1f27b0dceb6.readable,
                writable: _f1f27b0dceb6.writable,
                extensions: _f1f27b0dceb6.extensions,
                protocol: _f1f27b0dceb6.protocol
              });
            }), _aabd55df2659.addEventListener("close", _3a5021004442 => {
              _b6a548cb3b03({
                code: _3a5021004442.code,
                reason: _3a5021004442.reason
              });
            }), _aabd55df2659.addEventListener("error", _3a5021004442 => {
              _97105b6bb452(_3a5021004442);
            }), _333044d6fd1e.set(_b5b9693d9c71, _f1f27b0dceb6), _4a43e396a3cb.return(_b5b9693d9c71);
          }
        }), _3a5021004442.Trap("WebSocketStream.prototype.closed", {
          get: _3a5021004442 => _333044d6fd1e.get(_3a5021004442.this).closed
        }), _3a5021004442.Trap("WebSocketStream.prototype.opened", {
          get: _3a5021004442 => _333044d6fd1e.get(_3a5021004442.this).opened
        }), _3a5021004442.Trap("WebSocketStream.prototype.url", {
          get: _3a5021004442 => _333044d6fd1e.get(_3a5021004442.this).url
        }), _3a5021004442.Proxy("WebSocketStream.prototype.close", {
          apply(_3a5021004442) {
            let _271dc742b5dc = _333044d6fd1e.get(_3a5021004442.this);
            return _3a5021004442.args[0] ? (void 0 === _3a5021004442.args[0].closeCode && (_3a5021004442.args[0].closeCode = 1e3), 
            void 0 === _3a5021004442.args[0].reason && (_3a5021004442.args[0].reason = ""), 
            _3a5021004442.return(_271dc742b5dc.barews.close(_3a5021004442.args[0].closeCode, _3a5021004442.args[0].reason))) : _3a5021004442.return(_271dc742b5dc.barews.close(1e3, ""));
          }
        });
      }
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        default: () => n
      });
    },
    248: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        default: () => a
      });
      var _333044d6fd1e = _4a43e396a3cb(37), _5bd11b3c31ff = _4a43e396a3cb(1472);
      function a(_3a5021004442, _271dc742b5dc) {
        let _4a43e396a3cb;
        _271dc742b5dc.Worker && (0, _333044d6fd1e.U5)("syncxhr", _3a5021004442.url) && (_4a43e396a3cb = _3a5021004442.natives.construct("Worker", _333044d6fd1e.$W.files.sync));
        let _b6a548cb3b03 = Symbol("xhr original args"), _97105b6bb452 = Symbol("xhr headers");
        _3a5021004442.Proxy("XMLHttpRequest.prototype.open", {
          apply(_271dc742b5dc) {
            _271dc742b5dc.args[1] && (_271dc742b5dc.args[1] = (0, _5bd11b3c31ff.Oy)(_271dc742b5dc.args[1], _3a5021004442.meta)), 
            void 0 === _271dc742b5dc.args[2] && (_271dc742b5dc.args[2] = !0), _271dc742b5dc.this[_b6a548cb3b03] = _271dc742b5dc.args;
          }
        }), _3a5021004442.Proxy("XMLHttpRequest.prototype.setRequestHeader", {
          apply(_3a5021004442) {
            (_3a5021004442.this[_97105b6bb452] || (_3a5021004442.this[_97105b6bb452] = {}))[_3a5021004442.args[0]] = _3a5021004442.args[1];
          }
        }), _3a5021004442.Proxy("XMLHttpRequest.prototype.send", {
          apply(_271dc742b5dc) {
            let _5bd11b3c31ff = _271dc742b5dc.this[_b6a548cb3b03];
            if (!_5bd11b3c31ff || _5bd11b3c31ff[2]) return;
            if (!(0, _333044d6fd1e.U5)("syncxhr", _3a5021004442.url)) return console.warn("ignoring request - sync xhr disabled in flags"), 
            _271dc742b5dc.return(void 0);
            let _b5b9693d9c71 = new SharedArrayBuffer(1024, {
              maxByteLength: 2147483647
            }), _aabd55df2659 = new DataView(_b5b9693d9c71);
            _3a5021004442.natives.call("Worker.prototype.postMessage", _4a43e396a3cb, {
              sab: _b5b9693d9c71,
              args: _5bd11b3c31ff,
              headers: _271dc742b5dc.this[_97105b6bb452],
              body: _271dc742b5dc.args[0]
            });
            let _f1f27b0dceb6 = performance.now();
            for (;0 === _aabd55df2659.getUint8(0); ) if (performance.now() - _f1f27b0dceb6 > 1e3) throw Error("xhr timeout");
            let _188ac31e3f35 = _aabd55df2659.getUint16(1), _ab0a35acfb91 = _aabd55df2659.getUint32(3), _5e52f02aa711 = new Uint8Array(_ab0a35acfb91);
            _5e52f02aa711.set(new Uint8Array(_b5b9693d9c71.slice(7, 7 + _ab0a35acfb91)));
            let _d5aac0c61341 = (new TextDecoder).decode(_5e52f02aa711), _8510cd3a9582 = _aabd55df2659.getUint32(7 + _ab0a35acfb91), _f689ea2de11c = new Uint8Array(_8510cd3a9582);
            _f689ea2de11c.set(new Uint8Array(_b5b9693d9c71.slice(11 + _ab0a35acfb91, 11 + _ab0a35acfb91 + _8510cd3a9582)));
            let _9da61e711a2c = (new TextDecoder).decode(_f689ea2de11c);
            _3a5021004442.RawTrap(_271dc742b5dc.this, "status", {
              get: () => _188ac31e3f35
            }), _3a5021004442.RawTrap(_271dc742b5dc.this, "responseText", {
              get: () => _9da61e711a2c
            }), _3a5021004442.RawTrap(_271dc742b5dc.this, "response", {
              get: () => "arraybuffer" === _271dc742b5dc.this.responseType ? _f689ea2de11c.buffer : _9da61e711a2c
            }), _3a5021004442.RawTrap(_271dc742b5dc.this, "responseXML", {
              get: () => (new DOMParser).parseFromString(_9da61e711a2c, "text/xml")
            }), _3a5021004442.RawTrap(_271dc742b5dc.this, "getAllResponseHeaders", {
              get: () => () => _d5aac0c61341
            }), _3a5021004442.RawTrap(_271dc742b5dc.this, "getResponseHeader", {
              get: () => _3a5021004442 => {
                let _271dc742b5dc = RegExp(`^${_3a5021004442}: (.*)$`, "m").exec(_d5aac0c61341);
                return _271dc742b5dc ? _271dc742b5dc[1] : null;
              }
            }), _271dc742b5dc.return(void 0);
          }
        }), _3a5021004442.Trap("XMLHttpRequest.prototype.responseURL", {
          get: _3a5021004442 => (0, _5bd11b3c31ff.v2)(_3a5021004442.get())
        });
      }
    },
    7418: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        default: () => i
      });
      var _333044d6fd1e = _4a43e396a3cb(1478);
      function i(_3a5021004442, _271dc742b5dc) {
        _3a5021004442.Proxy([ "setTimeout", "setInterval" ], {
          apply(_271dc742b5dc) {
            _271dc742b5dc.args.length > 0 && "string" == typeof _271dc742b5dc.args[0] && (_271dc742b5dc.args[0] = (0, 
            _333044d6fd1e.o)(_271dc742b5dc.args[0], "(setTimeout string eval)", _3a5021004442.meta));
          }
        });
      }
    },
    7791: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        default: () => o,
        enabled: () => s
      });
      var _333044d6fd1e = _4a43e396a3cb(37), _5bd11b3c31ff = _4a43e396a3cb(8665).A;
      let _b6a548cb3b03 = "/*scramtag ", s = _3a5021004442 => (0, _333044d6fd1e.U5)("sourcemaps", _3a5021004442.url);
      function o(_3a5021004442, _271dc742b5dc) {
        Object.defineProperty(_271dc742b5dc, _333044d6fd1e.$W.globals.pushsourcemapfn, {
          value: (_271dc742b5dc, _4a43e396a3cb) => {
            let _333044d6fd1e = performance.now();
            !function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
              let _333044d6fd1e = Uint8Array.from(_271dc742b5dc), _5bd11b3c31ff = new DataView(_333044d6fd1e.buffer), _b6a548cb3b03 = new TextDecoder("utf-8"), _97105b6bb452 = [], _b5b9693d9c71 = _5bd11b3c31ff.getUint32(0, !0), _aabd55df2659 = 4;
              for (let _3a5021004442 = 0; _3a5021004442 < _b5b9693d9c71; _3a5021004442++) {
                let _3a5021004442 = _5bd11b3c31ff.getUint32(_aabd55df2659, !0);
                _aabd55df2659 += 4;
                let _271dc742b5dc = _5bd11b3c31ff.getUint32(_aabd55df2659, !0);
                _aabd55df2659 += 4;
                let _4a43e396a3cb = _5bd11b3c31ff.getUint8(_aabd55df2659);
                if (_aabd55df2659 += 1, 0 == _4a43e396a3cb) _97105b6bb452.push({
                  type: _4a43e396a3cb,
                  start: _3a5021004442,
                  size: _271dc742b5dc
                }); else if (1 == _4a43e396a3cb) {
                  let _b5b9693d9c71 = _3a5021004442 + _271dc742b5dc, _f1f27b0dceb6 = _5bd11b3c31ff.getUint32(_aabd55df2659, !0);
                  _aabd55df2659 += 4;
                  let _188ac31e3f35 = _b6a548cb3b03.decode(_333044d6fd1e.subarray(_aabd55df2659, _aabd55df2659 + _f1f27b0dceb6));
                  _97105b6bb452.push({
                    type: _4a43e396a3cb,
                    start: _3a5021004442,
                    end: _b5b9693d9c71,
                    str: _188ac31e3f35
                  });
                }
              }
              _3a5021004442.box.sourcemaps[_4a43e396a3cb] = _97105b6bb452;
            }(_3a5021004442, _271dc742b5dc, _4a43e396a3cb), _5bd11b3c31ff.time(_3a5021004442.meta, _333044d6fd1e, `scramtag parse for ${_4a43e396a3cb}`);
          },
          enumerable: !1,
          writable: !1,
          configurable: !1
        }), _3a5021004442.Proxy("Function.prototype.toString", {
          apply(_271dc742b5dc) {
            performance.now(), function(_3a5021004442, _271dc742b5dc) {
              let _4a43e396a3cb = _271dc742b5dc.fn.call(_271dc742b5dc.this), _333044d6fd1e = function(_3a5021004442) {
                let _271dc742b5dc = _3a5021004442.indexOf(_b6a548cb3b03);
                if (-1 === _271dc742b5dc) return null;
                let _4a43e396a3cb = _3a5021004442.indexOf("*/", _271dc742b5dc);
                if (-1 === _4a43e396a3cb) throw console.log(_3a5021004442, _271dc742b5dc, _4a43e396a3cb), 
                Error("unreachable");
                let _333044d6fd1e = _3a5021004442.substring(_271dc742b5dc + 2, _4a43e396a3cb).split(" ");
                if (3 !== _333044d6fd1e.length || "scramtag" !== _333044d6fd1e[0] || !Number.isSafeInteger(+_333044d6fd1e[1])) throw console.log(_3a5021004442, _271dc742b5dc, _4a43e396a3cb, _333044d6fd1e), 
                Error("invalid tag");
                return [ _333044d6fd1e[2], _271dc742b5dc, +_333044d6fd1e[1] ];
              }(_4a43e396a3cb);
              if (!_333044d6fd1e) return _271dc742b5dc.return(_4a43e396a3cb);
              let [_5bd11b3c31ff, _97105b6bb452, _b5b9693d9c71] = _333044d6fd1e, _aabd55df2659 = _b5b9693d9c71 - _97105b6bb452, _f1f27b0dceb6 = _aabd55df2659 + _4a43e396a3cb.length, _188ac31e3f35 = _3a5021004442.box.sourcemaps[_5bd11b3c31ff];
              if (!_188ac31e3f35) return console.warn("failed to get rewrites for tag", _5bd11b3c31ff), 
              _271dc742b5dc.return(_4a43e396a3cb);
              let _ab0a35acfb91 = 0;
              for (;_ab0a35acfb91 < _188ac31e3f35.length; ) if (_188ac31e3f35[_ab0a35acfb91].start < _aabd55df2659) _ab0a35acfb91++; else break;
              let _5e52f02aa711 = _ab0a35acfb91;
              for (;_5e52f02aa711 < _188ac31e3f35.length; ) if (function(_3a5021004442) {
                if (0 === _3a5021004442.type) return _3a5021004442.start + _3a5021004442.size;
                if (1 === _3a5021004442.type) return _3a5021004442.end;
                throw "unreachable";
              }(_188ac31e3f35[_5e52f02aa711]) < _f1f27b0dceb6) _5e52f02aa711++; else break;
              let _d5aac0c61341 = _188ac31e3f35.slice(_ab0a35acfb91, _5e52f02aa711), _8510cd3a9582 = "", _f689ea2de11c = 0;
              for (let _3a5021004442 of _d5aac0c61341) if (_8510cd3a9582 += _4a43e396a3cb.slice(_f689ea2de11c, _3a5021004442.start - _aabd55df2659), 
              0 === _3a5021004442.type) _f689ea2de11c = _3a5021004442.start + _3a5021004442.size - _aabd55df2659; else if (1 === _3a5021004442.type) _8510cd3a9582 += _3a5021004442.str, 
              _f689ea2de11c = _3a5021004442.end - _aabd55df2659; else throw "unreachable";
              _8510cd3a9582 += _4a43e396a3cb.slice(_f689ea2de11c), _8510cd3a9582 = _8510cd3a9582.replace(`${_b6a548cb3b03}${_b5b9693d9c71} ${_5bd11b3c31ff}*/`, ""), 
              _271dc742b5dc.return(_8510cd3a9582);
            }(_3a5021004442, _271dc742b5dc);
          }
        });
      }
    },
    9399: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        default: () => a
      });
      var _333044d6fd1e = _4a43e396a3cb(4110), _5bd11b3c31ff = _4a43e396a3cb(1472);
      function a(_3a5021004442, _271dc742b5dc) {
        _3a5021004442.Proxy("Worker", {
          construct(_271dc742b5dc) {
            _271dc742b5dc.args[0] = (0, _5bd11b3c31ff.Oy)(_271dc742b5dc.args[0], _3a5021004442.meta) + "?dest=worker", 
            _271dc742b5dc.args[1] && "module" === _271dc742b5dc.args[1].type && (_271dc742b5dc.args[0] += "&type=module");
            let _4a43e396a3cb = _271dc742b5dc.call(), _b6a548cb3b03 = new _333044d6fd1e.DD;
            (async () => {
              let _271dc742b5dc = await _b6a548cb3b03.getInnerPort();
              _3a5021004442.natives.call("Worker.prototype.postMessage", _4a43e396a3cb, {
                $studyjet$type: "baremuxinit",
                port: _271dc742b5dc
              }, [ _271dc742b5dc ]);
            })();
          }
        }), _3a5021004442.Proxy("SharedWorker", {
          construct(_271dc742b5dc) {
            _271dc742b5dc.args[0] = (0, _5bd11b3c31ff.Oy)(_271dc742b5dc.args[0], _3a5021004442.meta) + "?dest=sharedworker", 
            _271dc742b5dc.args[1] && "string" == typeof _271dc742b5dc.args[1] && (_271dc742b5dc.args[1] = `${_3a5021004442.url.origin}@${_271dc742b5dc.args[1]}`), 
            _271dc742b5dc.args[1] && "object" == typeof _271dc742b5dc.args[1] && ("module" === _271dc742b5dc.args[1].type && (_271dc742b5dc.args[0] += "&type=module"), 
            _271dc742b5dc.args[1].name && (_271dc742b5dc.args[1].name = `${_3a5021004442.url.origin}@${_271dc742b5dc.args[1].name}`));
            let _4a43e396a3cb = _271dc742b5dc.call(), _b6a548cb3b03 = new _333044d6fd1e.DD;
            (async () => {
              let _271dc742b5dc = await _b6a548cb3b03.getInnerPort();
              _3a5021004442.natives.call("MessagePort.prototype.postMessage", _4a43e396a3cb.port, {
                $studyjet$type: "baremuxinit",
                port: _271dc742b5dc
              }, [ _271dc742b5dc ]);
            })();
          }
        }), _3a5021004442.Proxy("Worklet.prototype.addModule", {
          apply(_271dc742b5dc) {
            _271dc742b5dc.args[0] && (_271dc742b5dc.args[0] = (0, _5bd11b3c31ff.Oy)(_271dc742b5dc.args[0], _3a5021004442.meta) + "?dest=worklet");
          }
        });
      }
    },
    581: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        createWrapFn: () => o,
        default: () => c,
        order: () => _b5b9693d9c71
      });
      var _333044d6fd1e = _4a43e396a3cb(1323), _5bd11b3c31ff = _4a43e396a3cb(2794), _b6a548cb3b03 = _4a43e396a3cb(37), _97105b6bb452 = _4a43e396a3cb(591);
      function o(_3a5021004442, _271dc742b5dc) {
        return function(_4a43e396a3cb, _b6a548cb3b03) {
          if (_4a43e396a3cb === _271dc742b5dc.location) return _3a5021004442.locationProxy;
          if (_4a43e396a3cb === _271dc742b5dc.eval) return _97105b6bb452.indirectEval.bind(_3a5021004442, _b6a548cb3b03);
          if (_333044d6fd1e.iswindow) {
            if (_4a43e396a3cb === _271dc742b5dc.parent) if (_5bd11b3c31ff.pX in _271dc742b5dc.parent) return _271dc742b5dc.parent; else return _271dc742b5dc; else if (_4a43e396a3cb === _271dc742b5dc.top) {
              let _3a5021004442 = _271dc742b5dc;
              for (;;) {
                let _271dc742b5dc = _3a5021004442.parent.self;
                if (_271dc742b5dc === _3a5021004442 || !(_5bd11b3c31ff.pX in _271dc742b5dc)) break;
                _3a5021004442 = _271dc742b5dc;
              }
              return _3a5021004442;
            }
          }
          return _4a43e396a3cb;
        };
      }
      let _b5b9693d9c71 = 4;
      function c(_3a5021004442, _271dc742b5dc) {
        Object.defineProperty(_271dc742b5dc, _b6a548cb3b03.$W.globals.wrapfn, {
          value: _3a5021004442.wrapfn,
          writable: !1,
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_271dc742b5dc, _b6a548cb3b03.$W.globals.wrappropertyfn, {
          value: function(_3a5021004442) {
            return "location" === _3a5021004442 || "parent" === _3a5021004442 || "top" === _3a5021004442 || "eval" === _3a5021004442 ? _b6a548cb3b03.$W.globals.wrappropertybase + _3a5021004442 : _3a5021004442;
          },
          writable: !1,
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_271dc742b5dc, _b6a548cb3b03.$W.globals.cleanrestfn, {
          value: function(_3a5021004442) {},
          writable: !1,
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_271dc742b5dc.Object.prototype, _b6a548cb3b03.$W.globals.wrappropertybase + "location", {
          get: function() {
            return this === _271dc742b5dc || this === _271dc742b5dc.document ? _3a5021004442.locationProxy : this.location;
          },
          set(_4a43e396a3cb) {
            if (this === _271dc742b5dc || this === _271dc742b5dc.document) {
              _3a5021004442.url = _4a43e396a3cb;
              return;
            }
            this.location = _4a43e396a3cb;
          },
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_271dc742b5dc.Object.prototype, _b6a548cb3b03.$W.globals.wrappropertybase + "parent", {
          get: function() {
            return _3a5021004442.wrapfn(this.parent, !1);
          },
          set(_3a5021004442) {
            this.parent = _3a5021004442;
          },
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_271dc742b5dc.Object.prototype, _b6a548cb3b03.$W.globals.wrappropertybase + "top", {
          get: function() {
            return _3a5021004442.wrapfn(this.top, !1);
          },
          set(_3a5021004442) {
            this.top = _3a5021004442;
          },
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_271dc742b5dc.Object.prototype, _b6a548cb3b03.$W.globals.wrappropertybase + "eval", {
          get: function() {
            return _3a5021004442.wrapfn(this.eval, !0);
          },
          set(_3a5021004442) {
            this.eval = _3a5021004442;
          },
          configurable: !1,
          enumerable: !1
        }), _271dc742b5dc.$scramitize = function(_3a5021004442) {
          return location, _333044d6fd1e.iswindow && _271dc742b5dc.top, "string" == typeof _3a5021004442 && _3a5021004442.includes("studyjet"), 
          "string" == typeof _3a5021004442 && _3a5021004442.includes(location.origin), _3a5021004442;
        }, Object.defineProperty(_271dc742b5dc, _b6a548cb3b03.$W.globals.trysetfn, {
          value: function(_4a43e396a3cb, _333044d6fd1e, _5bd11b3c31ff) {
            return _4a43e396a3cb instanceof _271dc742b5dc.Location && (_3a5021004442.locationProxy.href = _5bd11b3c31ff, 
            !0);
          },
          writable: !1,
          configurable: !1
        });
      }
    },
    1229: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        SingletonBox: () => n
      });
      class n {
        ownerclient;
        clients=[];
        globals=new Map;
        documents=new Map;
        locations=new Map;
        sourcemaps={};
        constructor(_3a5021004442) {
          this.ownerclient = _3a5021004442;
        }
        registerClient(_3a5021004442, _271dc742b5dc) {
          this.clients.push(_3a5021004442), this.globals.set(_271dc742b5dc, _3a5021004442), 
          this.documents.set(_271dc742b5dc.document, _3a5021004442), this.locations.set(_271dc742b5dc.location, _3a5021004442);
        }
      }
    },
    8409: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        StudyJetServiceWorkerRuntime: () => a
      });
      var _333044d6fd1e = _4a43e396a3cb(1472), _5bd11b3c31ff = _4a43e396a3cb(8665).A;
      class a {
        client;
        recvport;
        constructor(_3a5021004442) {
          this.client = _3a5021004442, self.onconnect = _271dc742b5dc => {
            let _4a43e396a3cb = _271dc742b5dc.ports[0];
            _5bd11b3c31ff.log("sw", "connected"), _4a43e396a3cb.addEventListener("message", _271dc742b5dc => {
              console.log("sw", _271dc742b5dc.data), "studyjet$type" in _271dc742b5dc.data && ("init" === _271dc742b5dc.data.studyjet$type ? (this.recvport = _271dc742b5dc.data.studyjet$port, 
              this.recvport.postMessage({
                studyjet$type: "init"
              })) : s.call(this, _3a5021004442, _271dc742b5dc.data));
            }), _4a43e396a3cb.start();
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
              dispatchEvent: _3a5021004442 => !1
            },
            showNotification: async () => {},
            unregister: async () => !0,
            update: async () => {},
            installing: null,
            waiting: null
          }, this.client.global.ServiceWorkerGlobalScope = this.client.global;
        }
      }
      function s(_3a5021004442, _271dc742b5dc) {
        let _4a43e396a3cb = this.recvport, _b6a548cb3b03 = _271dc742b5dc.studyjet$type, _97105b6bb452 = _271dc742b5dc.studyjet$token, _b5b9693d9c71 = _3a5021004442.eventcallbacks.get(self);
        if ("fetch" === _b6a548cb3b03) {
          _5bd11b3c31ff.log("ee", _271dc742b5dc);
          let _b6a548cb3b03 = _b5b9693d9c71.filter(_3a5021004442 => "fetch" === _3a5021004442.event);
          if (!_b6a548cb3b03) return;
          for (let _b5b9693d9c71 of _b6a548cb3b03) {
            let _b6a548cb3b03 = _271dc742b5dc.studyjet$request, _aabd55df2659 = new _3a5021004442.natives.Request((0, 
            _333044d6fd1e.v2)(_b6a548cb3b03.url), {
              body: _b6a548cb3b03.body,
              headers: new Headers(_b6a548cb3b03.headers),
              method: _b6a548cb3b03.method,
              mode: "same-origin"
            });
            Object.defineProperty(_aabd55df2659, "destination", {
              value: _b6a548cb3b03.destinitation
            });
            let _f1f27b0dceb6 = new Event("fetch");
            _f1f27b0dceb6.request = _aabd55df2659;
            let _188ac31e3f35 = !1;
            _f1f27b0dceb6.respondWith = _3a5021004442 => {
              _188ac31e3f35 = !0, (async () => {
                let _271dc742b5dc = {
                  studyjet$type: "fetch",
                  studyjet$token: _97105b6bb452,
                  studyjet$response: {
                    body: (_3a5021004442 = await _3a5021004442).body,
                    headers: Array.from(_3a5021004442.headers.entries()),
                    status: _3a5021004442.status,
                    statusText: _3a5021004442.statusText
                  }
                };
                _5bd11b3c31ff.log("sw", "responding", _271dc742b5dc), _4a43e396a3cb.postMessage(_271dc742b5dc, [ _3a5021004442.body ]);
              })();
            }, _5bd11b3c31ff.log("to fn", _f1f27b0dceb6), _b5b9693d9c71.proxiedCallback(new Proxy(_f1f27b0dceb6, {
              get: (_3a5021004442, _271dc742b5dc, _4a43e396a3cb) => "isTrusted" === _271dc742b5dc || Reflect.get(_3a5021004442, _271dc742b5dc)
            })), _188ac31e3f35 || (console.log("sw", "no response"), _4a43e396a3cb.postMessage({
              studyjet$type: "fetch",
              studyjet$token: _97105b6bb452,
              studyjet$response: !1
            }));
          }
        }
      }
    },
    9353: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        default: () => i
      });
      var _333044d6fd1e = _4a43e396a3cb(1472);
      function i(_3a5021004442) {
        _3a5021004442.Proxy("importScripts", {
          apply(_271dc742b5dc) {
            for (let _4a43e396a3cb in _271dc742b5dc.args) _271dc742b5dc.args[_4a43e396a3cb] = (0, 
            _333044d6fd1e.Oy)(_271dc742b5dc.args[_4a43e396a3cb], _3a5021004442.meta);
          }
        });
      }
    },
    3402: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.d(_271dc742b5dc, {
        q: () => l
      });
      var _333044d6fd1e = _4a43e396a3cb(37), _5bd11b3c31ff = _4a43e396a3cb(4869), _b6a548cb3b03 = _4a43e396a3cb(6570), _97105b6bb452 = _4a43e396a3cb(1862), _b5b9693d9c71 = _4a43e396a3cb(8665).A;
      class l extends EventTarget {
        db;
        constructor(_3a5021004442) {
          super();
          const t = (_3a5021004442, _271dc742b5dc) => {
            for (let _4a43e396a3cb in _271dc742b5dc) _271dc742b5dc[_4a43e396a3cb] instanceof Object && _4a43e396a3cb in _3a5021004442 && Object.assign(_271dc742b5dc[_4a43e396a3cb], t(_3a5021004442[_4a43e396a3cb], _271dc742b5dc[_4a43e396a3cb]));
            return Object.assign(_3a5021004442 || {}, _271dc742b5dc);
          }, _271dc742b5dc = t({
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
              encode: _3a5021004442 => _3a5021004442 ? encodeURIComponent(_3a5021004442) : _3a5021004442,
              decode: _3a5021004442 => _3a5021004442 ? decodeURIComponent(_3a5021004442) : _3a5021004442
            }
          }, _3a5021004442);
          _271dc742b5dc.codec.encode = _271dc742b5dc.codec.encode.toString(), _271dc742b5dc.codec.decode = _271dc742b5dc.codec.decode.toString(), 
          (0, _333044d6fd1e.Nk)(_271dc742b5dc);
        }
        async init() {
          (0, _333044d6fd1e.Ec)(), await this.openIDB(), navigator.serviceWorker.controller?.postMessage({
            studyjet$type: "loadConfig",
            config: _333044d6fd1e.$W
          }), _b5b9693d9c71.log("config loaded"), navigator.serviceWorker.addEventListener("message", _3a5021004442 => {
            if (!("studyjet$type" in _3a5021004442.data)) return;
            let _271dc742b5dc = _3a5021004442.data;
            "download" === _271dc742b5dc.studyjet$type && this.dispatchEvent(new _97105b6bb452.StudyJetGlobalDownloadEvent(_271dc742b5dc.download));
          });
        }
        createFrame(_3a5021004442) {
          return _3a5021004442 || (_3a5021004442 = document.createElement("iframe")), new _5bd11b3c31ff.X(this, _3a5021004442);
        }
        encodeUrl(_3a5021004442) {
          if ("string" == typeof _3a5021004442 && (_3a5021004442 = new URL(_3a5021004442)), 
          "http:" != _3a5021004442.protocol && "https:" != _3a5021004442.protocol) return _3a5021004442.href;
          let _271dc742b5dc = (0, _333044d6fd1e.hD)(_3a5021004442.hash.slice(1));
          return _3a5021004442.hash = "", _333044d6fd1e.$W.prefix + (0, _333044d6fd1e.hD)(_3a5021004442.href) + (_271dc742b5dc ? "#" + _271dc742b5dc : "");
        }
        decodeUrl(_3a5021004442) {
          _3a5021004442 instanceof URL && (_3a5021004442 = _3a5021004442.toString());
          let _271dc742b5dc = location.origin + _333044d6fd1e.$W.prefix;
          return (0, _333044d6fd1e.P_)(_3a5021004442.slice(_271dc742b5dc.length));
        }
        async openIDB() {
          let _3a5021004442 = await (0, _b6a548cb3b03.P2)("@d7a6431b92e", 1, {
            upgrade(_3a5021004442) {
              _3a5021004442.objectStoreNames.contains("config") || _3a5021004442.createObjectStore("config"), 
              _3a5021004442.objectStoreNames.contains("cookies") || _3a5021004442.createObjectStore("cookies"), 
              _3a5021004442.objectStoreNames.contains("redirectTrackers") || _3a5021004442.createObjectStore("redirectTrackers"), 
              _3a5021004442.objectStoreNames.contains("referrerPolicies") || _3a5021004442.createObjectStore("referrerPolicies"), 
              _3a5021004442.objectStoreNames.contains("publicSuffixList") || _3a5021004442.createObjectStore("publicSuffixList");
            }
          });
          return this.db = _3a5021004442, await this.#_3a5021004442(), _3a5021004442;
        }
        async #_3a5021004442() {
          this.db ? await this.db.put("config", _333044d6fd1e.$W, "config") : console.error("Store not ready!");
        }
        async modifyConfig(_3a5021004442) {
          (0, _333044d6fd1e.Nk)(Object.assign({}, _333044d6fd1e.$W, _3a5021004442)), (0, _333044d6fd1e.Ec)(), 
          await this.#_3a5021004442(), navigator.serviceWorker.controller?.postMessage({
            studyjet$type: "loadConfig",
            config: _333044d6fd1e.$W
          });
        }
        addEventListener(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
          super.addEventListener(_3a5021004442, _271dc742b5dc, _4a43e396a3cb);
        }
      }
    },
    4869: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.d(_271dc742b5dc, {
        X: () => a
      });
      var _333044d6fd1e = _4a43e396a3cb(2794), _5bd11b3c31ff = _4a43e396a3cb(8665).A;
      class a extends EventTarget {
        controller;
        frame;
        constructor(_3a5021004442, _271dc742b5dc) {
          super(), this.controller = _3a5021004442, this.frame = _271dc742b5dc, _271dc742b5dc.name = `${Array(8).fill(0).map(() => Math.floor(36 * Math.random()).toString(36)).join("")}`, 
          _271dc742b5dc[_333044d6fd1e.zr] = this;
        }
        get client() {
          return this.frame.contentWindow.window[_333044d6fd1e.pX];
        }
        get url() {
          return this.client.url;
        }
        go(_3a5021004442) {
          _3a5021004442 instanceof URL && (_3a5021004442 = _3a5021004442.toString()), _5bd11b3c31ff.log("navigated to", _3a5021004442), 
          this.frame.src = this.controller.encodeUrl(_3a5021004442);
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
        addEventListener(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
          super.addEventListener(_3a5021004442, _271dc742b5dc, _4a43e396a3cb);
        }
      }
    },
    9052: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        StudyJetController: () => _5bd11b3c31ff.q,
        StudyJetFrame: () => _333044d6fd1e.X
      });
      var _333044d6fd1e = _4a43e396a3cb(4869), _5bd11b3c31ff = _4a43e396a3cb(3402);
      console.warn("you are using the last version of studyjet v1, if possible, please upgrade to v2 for better performance and more features");
    },
    8665: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.d(_271dc742b5dc, {
        A: () => _5bd11b3c31ff
      });
      let _333044d6fd1e = {
        log: console.log,
        warn: console.warn,
        error: console.error,
        debug: console.debug,
        info: console.info
      }, _5bd11b3c31ff = {
        fmt: function(_3a5021004442, _271dc742b5dc, ..._4a43e396a3cb) {
          let _333044d6fd1e = Error.prepareStackTrace;
          Error.prepareStackTrace = (_3a5021004442, _271dc742b5dc) => {
            _271dc742b5dc.shift(), _271dc742b5dc.shift(), _271dc742b5dc.shift();
            let _4a43e396a3cb = "";
            for (let _3a5021004442 = 1; _3a5021004442 < Math.min(2, _271dc742b5dc.length); _3a5021004442++) _271dc742b5dc[_3a5021004442].getFunctionName() && (_4a43e396a3cb += `${_271dc742b5dc[_3a5021004442].getFunctionName()} -> ` + _4a43e396a3cb);
            return _4a43e396a3cb + (_271dc742b5dc[0].getFunctionName() || "Anonymous");
          };
          let _5bd11b3c31ff = function() {
            try {
              throw Error();
            } catch (_3a5021004442) {
              return _3a5021004442.stack;
            }
          }();
          Error.prepareStackTrace = _333044d6fd1e, this.print(_3a5021004442, _5bd11b3c31ff, _271dc742b5dc, ..._4a43e396a3cb);
        },
        print(_3a5021004442, _271dc742b5dc, _4a43e396a3cb, ..._5bd11b3c31ff) {
          (_333044d6fd1e[_3a5021004442] || _333044d6fd1e.log)(`%c${_271dc742b5dc}%c ${_4a43e396a3cb}`, `\n  \tbackground-color: ${{
            log: "#000",
            warn: "#f80",
            error: "#f00",
            debug: "transparent"
          }[_3a5021004442]};\n  \tcolor: ${{
            log: "#fff",
            warn: "#fff",
            error: "#fff",
            debug: "gray"
          }[_3a5021004442]};\n  \tpadding: ${{
            log: 2,
            warn: 4,
            error: 4,
            debug: 0
          }[_3a5021004442]}px;\n  \tfont-weight: bold;\n  \tfont-family: monospace;\n  \tfont-size: 0.9em;\n  `, `${"debug" === _3a5021004442 ? "color: gray" : ""}`, ..._5bd11b3c31ff);
        },
        log: function(_3a5021004442, ..._271dc742b5dc) {
          this.fmt("log", _3a5021004442, ..._271dc742b5dc);
        },
        warn: function(_3a5021004442, ..._271dc742b5dc) {
          this.fmt("warn", _3a5021004442, ..._271dc742b5dc);
        },
        error: function(_3a5021004442, ..._271dc742b5dc) {
          this.fmt("error", _3a5021004442, ..._271dc742b5dc);
        },
        debug: function(_3a5021004442, ..._271dc742b5dc) {
          this.fmt("debug", _3a5021004442, ..._271dc742b5dc);
        },
        time(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {}
      };
    },
    3831: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.d(_271dc742b5dc, {
        k: () => a
      });
      var _333044d6fd1e = _4a43e396a3cb(4322), _5bd11b3c31ff = _4a43e396a3cb.n(_333044d6fd1e);
      class a {
        cookies={};
        setCookies(_3a5021004442, _271dc742b5dc) {
          for (let _4a43e396a3cb of _3a5021004442) {
            let _3a5021004442 = _5bd11b3c31ff()(_4a43e396a3cb), _333044d6fd1e = {
              domain: _3a5021004442.domain,
              sameSite: _3a5021004442.sameSite,
              ..._3a5021004442[0]
            };
            _333044d6fd1e.domain || (_333044d6fd1e.domain = "." + _271dc742b5dc.hostname), _333044d6fd1e.domain.startsWith(".") || (_333044d6fd1e.domain = "." + _333044d6fd1e.domain), 
            _333044d6fd1e.path || (_333044d6fd1e.path = "/"), _333044d6fd1e.sameSite || (_333044d6fd1e.sameSite = "lax"), 
            _333044d6fd1e.expires && (_333044d6fd1e.expires = _333044d6fd1e.expires.toString());
            let _b6a548cb3b03 = `${_333044d6fd1e.domain}@${_333044d6fd1e.path}@${_333044d6fd1e.name}`;
            this.cookies[_b6a548cb3b03] = _333044d6fd1e;
          }
        }
        getCookies(_3a5021004442, _271dc742b5dc) {
          let _4a43e396a3cb = new Date, _333044d6fd1e = Object.values(this.cookies), _5bd11b3c31ff = [];
          for (let _b6a548cb3b03 of _333044d6fd1e) {
            if (_b6a548cb3b03.expires && new Date(_b6a548cb3b03.expires) < _4a43e396a3cb) {
              delete this.cookies[`${_b6a548cb3b03.domain}@${_b6a548cb3b03.path}@${_b6a548cb3b03.name}`];
              continue;
            }
            (!_b6a548cb3b03.secure || "https:" === _3a5021004442.protocol) && (!_b6a548cb3b03.httpOnly || !_271dc742b5dc) && _3a5021004442.pathname.startsWith(_b6a548cb3b03.path) && (!_b6a548cb3b03.domain.startsWith(".") || _3a5021004442.hostname.endsWith(_b6a548cb3b03.domain.slice(1))) && _5bd11b3c31ff.push(_b6a548cb3b03);
          }
          return _5bd11b3c31ff.map(_3a5021004442 => `${_3a5021004442.name}=${_3a5021004442.value}`).join("; ");
        }
        load(_3a5021004442) {
          if ("object" == typeof _3a5021004442) return _3a5021004442;
          this.cookies = JSON.parse(_3a5021004442);
        }
        dump() {
          return JSON.stringify(this.cookies);
        }
      }
    },
    1427: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.d(_271dc742b5dc, {
        u: () => n
      });
      class n {
        headers={};
        set(_3a5021004442, _271dc742b5dc) {
          this.headers[_3a5021004442.toLowerCase()] = _271dc742b5dc;
        }
      }
    },
    2393: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.d(_271dc742b5dc, {
        V: () => _97105b6bb452
      });
      var _333044d6fd1e = _4a43e396a3cb(2614), _5bd11b3c31ff = _4a43e396a3cb(884), _b6a548cb3b03 = _4a43e396a3cb(1472);
      let _97105b6bb452 = [ {
        fn: (_3a5021004442, _271dc742b5dc) => (0, _b6a548cb3b03.Oy)(_3a5021004442, _271dc742b5dc),
        src: [ "embed", "script", "img", "frame", "source", "input", "track" ],
        href: [ "a", "link", "area", "use", "image" ],
        data: [ "object" ],
        action: [ "form" ],
        formaction: [ "button", "input", "textarea", "submit" ],
        poster: [ "video" ],
        "xlink:href": [ "image" ]
      }, {
        fn: (_3a5021004442, _271dc742b5dc) => (0, _b6a548cb3b03.Oy)(_3a5021004442, _271dc742b5dc),
        src: [ "iframe" ]
      }, {
        fn: (_3a5021004442, _271dc742b5dc) => null,
        sandbox: [ "iframe" ]
      }, {
        fn: (_3a5021004442, _271dc742b5dc) => _3a5021004442.startsWith("blob:") ? (0, _b6a548cb3b03.$n)(_3a5021004442) : (0, 
        _b6a548cb3b03.Oy)(_3a5021004442, _271dc742b5dc),
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
        fn: (_3a5021004442, _271dc742b5dc) => (0, _5bd11b3c31ff.PV)(_3a5021004442, _271dc742b5dc),
        srcset: [ "img", "source" ],
        imagesrcset: [ "link" ]
      }, {
        fn: (_3a5021004442, _271dc742b5dc, _4a43e396a3cb) => (0, _5bd11b3c31ff.Qs)(_3a5021004442, _4a43e396a3cb, {
          origin: new URL(_271dc742b5dc.origin.origin),
          base: new URL(_271dc742b5dc.origin.origin)
        }, !0),
        srcdoc: [ "iframe" ]
      }, {
        fn: (_3a5021004442, _271dc742b5dc) => (0, _333044d6fd1e.s)(_3a5021004442, _271dc742b5dc),
        style: "*"
      }, {
        fn: (_3a5021004442, _271dc742b5dc) => "_top" === _3a5021004442 || "_unfencedTop" === _3a5021004442 ? _271dc742b5dc.topFrameName : "_parent" === _3a5021004442 ? _271dc742b5dc.parentFrameName : _3a5021004442,
        target: [ "a", "base" ]
      } ];
    },
    37: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      let _333044d6fd1e, _5bd11b3c31ff, _b6a548cb3b03;
      _4a43e396a3cb.d(_271dc742b5dc, {
        $W: () => _b6a548cb3b03,
        Ec: () => o,
        Nk: () => c,
        P_: () => _5bd11b3c31ff,
        U5: () => l,
        hD: () => _333044d6fd1e
      }), _4a43e396a3cb(2393), _4a43e396a3cb(9381), _4a43e396a3cb(2416);
      let _97105b6bb452 = Function;
      function o() {
        _333044d6fd1e = _97105b6bb452(`return ${_b6a548cb3b03.codec.encode}`)(), _5bd11b3c31ff = _97105b6bb452(`return ${_b6a548cb3b03.codec.decode}`)();
      }
      function l(_3a5021004442, _271dc742b5dc) {
        let _4a43e396a3cb = _b6a548cb3b03.flags[_3a5021004442];
        for (let _4a43e396a3cb in _b6a548cb3b03.siteFlags) {
          let _333044d6fd1e = _b6a548cb3b03.siteFlags[_4a43e396a3cb];
          if (new RegExp(_4a43e396a3cb).test(_271dc742b5dc.href) && _3a5021004442 in _333044d6fd1e) return _333044d6fd1e[_3a5021004442];
        }
        return _4a43e396a3cb;
      }
      function c(_3a5021004442) {
        _b6a548cb3b03 = _3a5021004442, o();
      }
    },
    2614: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.d(_271dc742b5dc, {
        f: () => a,
        s: () => i
      });
      var _333044d6fd1e = _4a43e396a3cb(1472);
      function i(_3a5021004442, _271dc742b5dc) {
        return s("rewrite", _3a5021004442, _271dc742b5dc);
      }
      function a(_3a5021004442) {
        return s("unrewrite", _3a5021004442);
      }
      function s(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
        return (_271dc742b5dc = (_271dc742b5dc = new String(_271dc742b5dc).toString()).replace(/url\(['"]?(.+?)['"]?\)/gm, (_271dc742b5dc, _5bd11b3c31ff) => {
          let _b6a548cb3b03 = "rewrite" === _3a5021004442 ? (0, _333044d6fd1e.Oy)(_5bd11b3c31ff.trim(), _4a43e396a3cb) : (0, 
          _333044d6fd1e.v2)(_5bd11b3c31ff.trim());
          return _271dc742b5dc.replace(_5bd11b3c31ff, _b6a548cb3b03);
        })).replace(/@import\s+(url\s*?\(.{0,9999}?\)|['"].{0,9999}?['"]|.{0,9999}?)($|\s|;)/gm, (_271dc742b5dc, _5bd11b3c31ff) => _271dc742b5dc.replace(_5bd11b3c31ff, _5bd11b3c31ff.replace(/^(url\(['"]?|['"]|)(.+?)(['"]|['"]?\)|)$/gm, (_271dc742b5dc, _5bd11b3c31ff, _b6a548cb3b03, _97105b6bb452) => {
          if (_5bd11b3c31ff.startsWith("url")) return _271dc742b5dc;
          let _b5b9693d9c71 = "rewrite" === _3a5021004442 ? (0, _333044d6fd1e.Oy)(_b6a548cb3b03.trim(), _4a43e396a3cb) : (0, 
          _333044d6fd1e.v2)(_b6a548cb3b03.trim());
          return `${_5bd11b3c31ff}${_b5b9693d9c71}${_97105b6bb452}`;
        })));
      }
    },
    4435: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.d(_271dc742b5dc, {
        l: () => l
      });
      var _333044d6fd1e = _4a43e396a3cb(1472), _5bd11b3c31ff = _4a43e396a3cb(8228);
      let _b6a548cb3b03 = new Set([ "cross-origin-embedder-policy", "cross-origin-opener-policy", "cross-origin-resource-policy", "content-security-policy", "content-security-policy-report-only", "expect-ct", "feature-policy", "origin-isolation", "strict-transport-security", "upgrade-insecure-requests", "x-content-type-options", "x-download-options", "x-frame-options", "x-permitted-cross-domain-policies", "x-powered-by", "x-xss-protection", "clear-site-data" ]), _97105b6bb452 = new Set([ "location", "content-location", "referer" ]);
      function o(_3a5021004442, _271dc742b5dc) {
        return _3a5021004442.replace(/<(.*)>/gi, _3a5021004442 => (0, _333044d6fd1e.Oy)(_3a5021004442, _271dc742b5dc));
      }
      async function l(_3a5021004442, _271dc742b5dc, _4a43e396a3cb, _b5b9693d9c71) {
        let _aabd55df2659 = {};
        for (let _271dc742b5dc in _3a5021004442) _aabd55df2659[_271dc742b5dc.toLowerCase()] = _3a5021004442[_271dc742b5dc];
        for (let _3a5021004442 of _b6a548cb3b03) delete _aabd55df2659[_3a5021004442];
        for (let _3a5021004442 of _97105b6bb452) _aabd55df2659[_3a5021004442] && (_aabd55df2659[_3a5021004442] = (0, 
        _333044d6fd1e.Oy)(_aabd55df2659[_3a5021004442]?.toString(), _271dc742b5dc));
        if ("string" == typeof _aabd55df2659.link ? _aabd55df2659.link = o(_aabd55df2659.link, _271dc742b5dc) : Array.isArray(_aabd55df2659.link) && (_aabd55df2659.link = _aabd55df2659.link.map(_3a5021004442 => o(_3a5021004442, _271dc742b5dc))), 
        "string" == typeof _aabd55df2659.referer) {
          let _3a5021004442 = new URL(_aabd55df2659.referer), _4a43e396a3cb = await _b5b9693d9c71.get(_3a5021004442.href);
          if (_4a43e396a3cb) {
            let _333044d6fd1e = _4a43e396a3cb.policy.toLowerCase().split(",").map(_3a5021004442 => _3a5021004442.trim());
            _333044d6fd1e.includes("no-referrer") || _333044d6fd1e.includes("no-referrer-when-downgrade") && "http:" === _271dc742b5dc.origin.protocol && "https:" === _3a5021004442.protocol ? delete _aabd55df2659.referer : _333044d6fd1e.includes("origin") ? _aabd55df2659.referer = _3a5021004442.origin : _333044d6fd1e.includes("origin-when-cross-origin") ? _3a5021004442.origin !== _271dc742b5dc.origin.origin ? _aabd55df2659.referer = _3a5021004442.origin : _aabd55df2659.referer = _3a5021004442.href : _333044d6fd1e.includes("same-origin") ? _3a5021004442.origin === _271dc742b5dc.origin.origin ? _aabd55df2659.referer = _3a5021004442.href : delete _aabd55df2659.referer : _333044d6fd1e.includes("strict-origin") ? "http:" === _271dc742b5dc.origin.protocol && "https:" === _3a5021004442.protocol ? delete _aabd55df2659.referer : _aabd55df2659.referer = _3a5021004442.origin : _3a5021004442.origin === _271dc742b5dc.origin.origin ? _aabd55df2659.referer = _3a5021004442.href : "http:" === _271dc742b5dc.origin.protocol && "https:" === _3a5021004442.protocol ? delete _aabd55df2659.referer : _aabd55df2659.referer = _3a5021004442.origin;
          }
        }
        return "string" == typeof _aabd55df2659["sec-fetch-dest"] && "" === _aabd55df2659["sec-fetch-dest"] && (_aabd55df2659["sec-fetch-dest"] = "empty"), 
        "string" == typeof _aabd55df2659["sec-fetch-site"] && "none" !== _aabd55df2659["sec-fetch-site"] && ("string" == typeof _aabd55df2659.referer ? _aabd55df2659["sec-fetch-site"] = await (0, 
        _5bd11b3c31ff.ps)(_271dc742b5dc, new URL(_aabd55df2659.referer), _4a43e396a3cb) : (console.warn("Missing referrer header; can't rewrite sec-fetch-site properly. Falling back to unsafe deletion."), 
        delete _aabd55df2659["sec-fetch-site"])), _aabd55df2659;
      }
    },
    884: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.d(_271dc742b5dc, {
        PV: () => m,
        Qs: () => f,
        Uk: () => h,
        nK: () => g
      });
      var _333044d6fd1e = _4a43e396a3cb(3808), _5bd11b3c31ff = _4a43e396a3cb(8866), _b6a548cb3b03 = _4a43e396a3cb(6498), _97105b6bb452 = _4a43e396a3cb(1472), _b5b9693d9c71 = _4a43e396a3cb(2614), _aabd55df2659 = _4a43e396a3cb(1478), _f1f27b0dceb6 = _4a43e396a3cb(37), _188ac31e3f35 = _4a43e396a3cb(2393), _ab0a35acfb91 = _4a43e396a3cb(8665).A;
      function h(_3a5021004442, _271dc742b5dc) {
        let _4a43e396a3cb = JSON.stringify(_3a5021004442.dump()), _333044d6fd1e = `\n\t\tself.COOKIE = ${_4a43e396a3cb};\n\t\t$studyjetLoadClient().loadAndHook(${JSON.stringify(_f1f27b0dceb6.$W)});\n\t\tif ("document" in self && document?.currentScript) {\n\t\t\tdocument.currentScript.remove();\n\t\t}\n\t`, _5bd11b3c31ff = y(_5e52f02aa711.encode(_333044d6fd1e));
        return [ _271dc742b5dc(_f1f27b0dceb6.$W.files.wasm), _271dc742b5dc(_f1f27b0dceb6.$W.files.all), _271dc742b5dc("data:application/javascript;base64," + _5bd11b3c31ff) ];
      }
      let _5e52f02aa711 = new TextEncoder;
      function f(_3a5021004442, _271dc742b5dc, _4a43e396a3cb, _f1f27b0dceb6 = !1) {
        let _8510cd3a9582 = performance.now(), _f689ea2de11c = function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb, _f1f27b0dceb6 = !1) {
          let _ab0a35acfb91 = new _5bd11b3c31ff.DV((_3a5021004442, _271dc742b5dc) => _271dc742b5dc), _8510cd3a9582 = new _333044d6fd1e.iX(_ab0a35acfb91);
          if (_8510cd3a9582.write(_3a5021004442), _8510cd3a9582.end(), function e(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
            if ("base" === _3a5021004442.name && void 0 !== _3a5021004442.attribs.href && (_4a43e396a3cb.base = new URL(_3a5021004442.attribs.href, _4a43e396a3cb.origin)), 
            _3a5021004442.attribs) {
              for (let _333044d6fd1e of _188ac31e3f35.V) for (let _5bd11b3c31ff in _333044d6fd1e) {
                let _b6a548cb3b03 = _333044d6fd1e[_5bd11b3c31ff.toLowerCase()];
                if ("function" != typeof _b6a548cb3b03 && ("*" === _b6a548cb3b03 || _b6a548cb3b03.includes(_3a5021004442.name)) && void 0 !== _3a5021004442.attribs[_5bd11b3c31ff]) {
                  let _b6a548cb3b03 = _3a5021004442.attribs[_5bd11b3c31ff], _97105b6bb452 = _333044d6fd1e.fn(_b6a548cb3b03, _4a43e396a3cb, _271dc742b5dc);
                  null === _97105b6bb452 ? delete _3a5021004442.attribs[_5bd11b3c31ff] : _3a5021004442.attribs[_5bd11b3c31ff] = _97105b6bb452, 
                  _3a5021004442.attribs[`studyjet-attr-${_5bd11b3c31ff}`] = _b6a548cb3b03;
                }
              }
              for (let [_271dc742b5dc, _333044d6fd1e] of Object.entries(_3a5021004442.attribs)) _d5aac0c61341.includes(_271dc742b5dc) && (_3a5021004442.attribs[`studyjet-attr-${_271dc742b5dc}`] = _333044d6fd1e, 
              _3a5021004442.attribs[_271dc742b5dc] = (0, _aabd55df2659.o)(_333044d6fd1e, `(inline ${_271dc742b5dc} on element)`, _4a43e396a3cb));
            }
            if ("style" === _3a5021004442.name && void 0 !== _3a5021004442.children[0] && (_3a5021004442.children[0].data = (0, 
            _b5b9693d9c71.s)(_3a5021004442.children[0].data, _4a43e396a3cb)), "script" === _3a5021004442.name && "module" === _3a5021004442.attribs.type && _3a5021004442.attribs.src && (_3a5021004442.attribs.src = _3a5021004442.attribs.src + "?type=module"), 
            "script" === _3a5021004442.name && "importmap" === _3a5021004442.attribs.type && void 0 !== _3a5021004442.children[0]) {
              let _271dc742b5dc = _3a5021004442.children[0].data;
              try {
                let _333044d6fd1e = JSON.parse(_271dc742b5dc);
                if (_333044d6fd1e.imports) for (let _3a5021004442 in _333044d6fd1e.imports) {
                  let _271dc742b5dc = _333044d6fd1e.imports[_3a5021004442];
                  "string" == typeof _271dc742b5dc && (_271dc742b5dc = (0, _97105b6bb452.Oy)(_271dc742b5dc, _4a43e396a3cb), 
                  _333044d6fd1e.imports[_3a5021004442] = _271dc742b5dc);
                }
                _3a5021004442.children[0].data = JSON.stringify(_333044d6fd1e);
              } catch (e) {
                console.error("Failed to parse importmap JSON:", e);
              }
            }
            if ("script" === _3a5021004442.name && /(application|text)\/javascript|module|undefined/.test(_3a5021004442.attribs.type) && void 0 !== _3a5021004442.children[0]) {
              let _271dc742b5dc = _3a5021004442.children[0].data, _333044d6fd1e = "module" === _3a5021004442.attribs.type;
              _3a5021004442.attribs["studyjet-attr-script-source-src"] = y(_5e52f02aa711.encode(_271dc742b5dc)), 
              _271dc742b5dc = _271dc742b5dc.replace(/<!--[\s\S]*?-->/g, ""), _3a5021004442.children[0].data = (0, 
              _aabd55df2659.o)(_271dc742b5dc, "(inline script element)", _4a43e396a3cb, _333044d6fd1e);
            }
            if ("meta" === _3a5021004442.name && void 0 !== _3a5021004442.attribs["http-equiv"]) {
              if ("content-security-policy" === _3a5021004442.attribs["http-equiv"].toLowerCase()) _3a5021004442 = new _5bd11b3c31ff.Mw(_3a5021004442.attribs.content); else if ("refresh" === _3a5021004442.attribs["http-equiv"] && _3a5021004442.attribs.content.includes("url")) {
                let _271dc742b5dc = _3a5021004442.attribs.content.split("url=");
                _271dc742b5dc[1] && (_271dc742b5dc[1] = (0, _97105b6bb452.Oy)(_271dc742b5dc[1].trim(), _4a43e396a3cb)), 
                _3a5021004442.attribs.content = _271dc742b5dc.join("url=");
              }
            }
            if (_3a5021004442.childNodes) for (let _333044d6fd1e in _3a5021004442.childNodes) _3a5021004442.childNodes[_333044d6fd1e] = e(_3a5021004442.childNodes[_333044d6fd1e], _271dc742b5dc, _4a43e396a3cb);
            return _3a5021004442;
          }(_ab0a35acfb91.root, _271dc742b5dc, _4a43e396a3cb), _f1f27b0dceb6) {
            let _3a5021004442 = function e(_3a5021004442) {
              if (_3a5021004442.type === _333044d6fd1e.RJ.vw && "head" === _3a5021004442.name) return _3a5021004442;
              if (_3a5021004442.childNodes) for (let _271dc742b5dc of _3a5021004442.childNodes) {
                let _3a5021004442 = e(_271dc742b5dc);
                if (_3a5021004442) return _3a5021004442;
              }
              return null;
            }(_ab0a35acfb91.root);
            _3a5021004442 || (_3a5021004442 = new _5bd11b3c31ff.Hg("head", {}, []), _ab0a35acfb91.root.children.unshift(_3a5021004442)), 
            _3a5021004442.children.unshift(...h(_271dc742b5dc, _3a5021004442 => new _5bd11b3c31ff.Hg("script", {
              src: _3a5021004442
            })));
          }
          return (0, _b6a548cb3b03.A)(_ab0a35acfb91.root, {
            encodeEntities: "utf8",
            decodeEntities: !1
          });
        }(_3a5021004442, _271dc742b5dc, _4a43e396a3cb, _f1f27b0dceb6);
        return _ab0a35acfb91.time(_4a43e396a3cb, _8510cd3a9582, "html rewrite"), _f689ea2de11c;
      }
      function g(_3a5021004442) {
        let _271dc742b5dc = new _5bd11b3c31ff.DV((_3a5021004442, _271dc742b5dc) => _271dc742b5dc), _4a43e396a3cb = new _333044d6fd1e.iX(_271dc742b5dc);
        return _4a43e396a3cb.write(_3a5021004442), _4a43e396a3cb.end(), !function e(_3a5021004442) {
          if ("attribs" in _3a5021004442) for (let _271dc742b5dc in _3a5021004442.attribs) {
            if ("studyjet-attr-script-source-src" == _271dc742b5dc) {
              _3a5021004442.children[0] && "data" in _3a5021004442.children[0] && (_3a5021004442.children[0].data = atob(_3a5021004442.attribs[_271dc742b5dc]));
              continue;
            }
            _271dc742b5dc.startsWith("studyjet-attr-") && (_3a5021004442.attribs[_271dc742b5dc.slice(14)] = _3a5021004442.attribs[_271dc742b5dc], 
            delete _3a5021004442.attribs[_271dc742b5dc]);
          }
          if ("childNodes" in _3a5021004442) for (let _271dc742b5dc of _3a5021004442.childNodes) e(_271dc742b5dc);
        }(_271dc742b5dc.root), (0, _b6a548cb3b03.A)(_271dc742b5dc.root, {
          decodeEntities: !1
        });
      }
      function m(_3a5021004442, _271dc742b5dc) {
        return _3a5021004442.split(/ .*,/).map(_3a5021004442 => _3a5021004442.trim()).map(_3a5021004442 => {
          let [_4a43e396a3cb, ..._333044d6fd1e] = _3a5021004442.split(/\s+/), _5bd11b3c31ff = (0, 
          _97105b6bb452.Oy)(_4a43e396a3cb.trim(), _271dc742b5dc);
          return _333044d6fd1e.length > 0 ? `${_5bd11b3c31ff} ${_333044d6fd1e.join(" ")}` : _5bd11b3c31ff;
        }).join(", ");
      }
      function y(_3a5021004442) {
        return btoa(Array.from(_3a5021004442, _3a5021004442 => String.fromCodePoint(_3a5021004442)).join(""));
      }
      let _d5aac0c61341 = [ "onbeforexrselect", "onabort", "onbeforeinput", "onbeforematch", "onbeforetoggle", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncontentvisibilityautostatechange", "oncontextlost", "oncontextmenu", "oncontextrestored", "oncuechange", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "onformdata", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onresize", "onscroll", "onsecuritypolicyviolation", "onseeked", "onseeking", "onselect", "onslotchange", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "onvolumechange", "onwaiting", "onwebkitanimationend", "onwebkitanimationiteration", "onwebkitanimationstart", "onwebkittransitionend", "onwheel", "onauxclick", "ongotpointercapture", "onlostpointercapture", "onpointerdown", "onpointermove", "onpointerrawupdate", "onpointerup", "onpointercancel", "onpointerover", "onpointerout", "onpointerenter", "onpointerleave", "onselectstart", "onselectionchange", "onanimationend", "onanimationiteration", "onanimationstart", "ontransitionrun", "ontransitionstart", "ontransitionend", "ontransitioncancel", "oncopy", "oncut", "onpaste", "onscrollend", "onscrollsnapchange", "onscrollsnapchanging" ];
    },
    9381: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb(2614), _4a43e396a3cb(4435), _4a43e396a3cb(884), _4a43e396a3cb(1478), 
      _4a43e396a3cb(1472), _4a43e396a3cb(2015), _4a43e396a3cb(1561);
    },
    1478: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.d(_271dc742b5dc, {
        o: () => s
      });
      var _333044d6fd1e = _4a43e396a3cb(37), _5bd11b3c31ff = _4a43e396a3cb(1561), _b6a548cb3b03 = _4a43e396a3cb(8665).A;
      function s(_3a5021004442, _271dc742b5dc, _4a43e396a3cb, _97105b6bb452 = !1) {
        try {
          let _b5b9693d9c71 = function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb, _333044d6fd1e = !1) {
            return function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb, _333044d6fd1e) {
              let [_97105b6bb452, _b5b9693d9c71] = (0, _5bd11b3c31ff.nb)(_4a43e396a3cb);
              try {
                let _b5b9693d9c71, _aabd55df2659 = performance.now();
                _b5b9693d9c71 = "string" == typeof _3a5021004442 ? _97105b6bb452.rewrite_js(_3a5021004442, _4a43e396a3cb.base.href, _271dc742b5dc || "(unknown)", _333044d6fd1e) : _97105b6bb452.rewrite_js_bytes(_3a5021004442, _4a43e396a3cb.base.href, _271dc742b5dc || "(unknown)", _333044d6fd1e), 
                _b6a548cb3b03.time(_4a43e396a3cb, _aabd55df2659, `oxc rewrite for "${_271dc742b5dc || "(unknown)"}"`);
                let {js: _f1f27b0dceb6, map: _188ac31e3f35, scramtag: _ab0a35acfb91, errors: _5e52f02aa711} = _b5b9693d9c71;
                return {
                  js: "string" == typeof _3a5021004442 ? _5bd11b3c31ff.su.decode(_f1f27b0dceb6) : _f1f27b0dceb6,
                  tag: _ab0a35acfb91,
                  map: _188ac31e3f35,
                  errors: _5e52f02aa711
                };
              } finally {
                _b5b9693d9c71();
              }
            }(_3a5021004442, _271dc742b5dc, _4a43e396a3cb, _333044d6fd1e);
          }(_3a5021004442, _271dc742b5dc, _4a43e396a3cb, _97105b6bb452), _aabd55df2659 = _b5b9693d9c71.js;
          if ((0, _333044d6fd1e.U5)("sourcemaps", _4a43e396a3cb.base)) {
            let _3a5021004442 = globalThis[_333044d6fd1e.$W.globals.pushsourcemapfn];
            if (_3a5021004442) _3a5021004442(Array.from(_b5b9693d9c71.map), _b5b9693d9c71.tag); else {
              _aabd55df2659 instanceof Uint8Array && (_aabd55df2659 = (new TextDecoder).decode(_aabd55df2659));
              let _3a5021004442 = `${_333044d6fd1e.$W.globals.pushsourcemapfn}([${_b5b9693d9c71.map.join(",")}], "${_b5b9693d9c71.tag}");`, _271dc742b5dc = /^\s*(['"])use strict\1;?/;
              _aabd55df2659 = _271dc742b5dc.test(_aabd55df2659) ? _aabd55df2659.replace(_271dc742b5dc, `$&\n${_3a5021004442}`) : `${_3a5021004442}\n${_aabd55df2659}`;
            }
          }
          if ((0, _333044d6fd1e.U5)("rewriterLogs", _4a43e396a3cb.base)) for (let _3a5021004442 of _b5b9693d9c71.errors) console.error("oxc parse error", _3a5021004442);
          return _aabd55df2659;
        } catch (_b6a548cb3b03) {
          if (console.warn("failed rewriting js for", _271dc742b5dc || "(unknown)", _b6a548cb3b03.message, _3a5021004442 instanceof Uint8Array ? _5bd11b3c31ff.su.decode(_3a5021004442) : _3a5021004442), 
          (0, _333044d6fd1e.U5)("allowInvalidJs", _4a43e396a3cb.base)) return _3a5021004442;
          throw _b6a548cb3b03;
        }
      }
      Error.stackTraceLimit = 50;
    },
    1472: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.d(_271dc742b5dc, {
        $n: () => o,
        IP: () => s,
        Oy: () => l,
        v2: () => c
      });
      var _333044d6fd1e = _4a43e396a3cb(37), _5bd11b3c31ff = _4a43e396a3cb(1478);
      function a(_3a5021004442, _271dc742b5dc) {
        try {
          return new URL(_3a5021004442, _271dc742b5dc);
        } catch {
          return null;
        }
      }
      function s(_3a5021004442, _271dc742b5dc) {
        let _4a43e396a3cb = new URL(_3a5021004442.substring(5));
        return "blob:" + _271dc742b5dc.origin.origin + _4a43e396a3cb.pathname;
      }
      function o(_3a5021004442) {
        let _271dc742b5dc = new URL(_3a5021004442.substring(5));
        return "blob:" + location.origin + _271dc742b5dc.pathname;
      }
      function l(_3a5021004442, _271dc742b5dc) {
        if (_3a5021004442 instanceof URL && (_3a5021004442 = _3a5021004442.toString()), 
        _3a5021004442.startsWith("javascript:")) return "javascript:" + (0, _5bd11b3c31ff.o)(_3a5021004442.slice(11), "(javascript: url)", _271dc742b5dc);
        {
          if (_3a5021004442.startsWith("blob:") || _3a5021004442.startsWith("data:")) return location.origin + _333044d6fd1e.$W.prefix + _3a5021004442;
          if (_3a5021004442.startsWith("mailto:") || _3a5021004442.startsWith("about:")) return _3a5021004442;
          let _4a43e396a3cb = _271dc742b5dc.base.href;
          _4a43e396a3cb.startsWith("about:") && (_4a43e396a3cb = c(self.location.href));
          let _5bd11b3c31ff = a(_3a5021004442, _4a43e396a3cb);
          if (!_5bd11b3c31ff) return _3a5021004442;
          let _b6a548cb3b03 = (0, _333044d6fd1e.hD)(_5bd11b3c31ff.hash.slice(1));
          return _5bd11b3c31ff.hash = "", location.origin + _333044d6fd1e.$W.prefix + (0, 
          _333044d6fd1e.hD)(_5bd11b3c31ff.href) + (_b6a548cb3b03 ? "#" + _b6a548cb3b03 : "");
        }
      }
      function c(_3a5021004442) {
        _3a5021004442 instanceof URL && (_3a5021004442 = _3a5021004442.toString());
        let _271dc742b5dc = location.origin + _333044d6fd1e.$W.prefix;
        if (_3a5021004442.startsWith("javascript:")) return _3a5021004442;
        {
          if (_3a5021004442.startsWith("blob:")) return _3a5021004442;
          if (_3a5021004442.startsWith(_271dc742b5dc + "blob:") || _3a5021004442.startsWith(_271dc742b5dc + "data:")) return _3a5021004442.substring(_271dc742b5dc.length);
          if (_3a5021004442.startsWith("mailto:") || _3a5021004442.startsWith("about:")) return _3a5021004442;
          let _4a43e396a3cb = a(_3a5021004442);
          if (!_4a43e396a3cb) return _3a5021004442;
          let _5bd11b3c31ff = (0, _333044d6fd1e.P_)(_4a43e396a3cb.hash.slice(1));
          return _4a43e396a3cb.hash = "", (0, _333044d6fd1e.P_)(_4a43e396a3cb.href.slice(_271dc742b5dc.length) + (_5bd11b3c31ff ? "#" + _5bd11b3c31ff : ""));
        }
      }
    },
    1561: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      let _333044d6fd1e;
      _4a43e396a3cb.d(_271dc742b5dc, {
        n$: () => d,
        nb: () => g,
        su: () => _ab0a35acfb91
      });
      var _5bd11b3c31ff = _4a43e396a3cb(3907), _b6a548cb3b03 = _4a43e396a3cb(37), _97105b6bb452 = _4a43e396a3cb(1472), _b5b9693d9c71 = _4a43e396a3cb(2393), _aabd55df2659 = _4a43e396a3cb(2614), _f1f27b0dceb6 = _4a43e396a3cb(1478), _188ac31e3f35 = _4a43e396a3cb(884);
      async function d() {
        _333044d6fd1e = new Uint8Array(await fetch(_b6a548cb3b03.$W.files.wasm).then(_3a5021004442 => _3a5021004442.arrayBuffer()));
      }
      self.WASM && (_333044d6fd1e = Uint8Array.from(atob(self.WASM), _3a5021004442 => _3a5021004442.charCodeAt(0)));
      let _ab0a35acfb91 = new TextDecoder, _5e52f02aa711 = "\0asm".split("").map(_3a5021004442 => _3a5021004442.charCodeAt(0)), _d5aac0c61341 = [];
      function g(_3a5021004442) {
        let _271dc742b5dc;
        if (!(_333044d6fd1e instanceof Uint8Array)) throw Error("rewriter wasm not found (was it fetched correctly?)");
        if (![ ..._333044d6fd1e.slice(0, 4) ].every((_3a5021004442, _271dc742b5dc) => _3a5021004442 === _5e52f02aa711[_271dc742b5dc])) throw Error("rewriter wasm does not have wasm magic (was it fetched correctly?)\nrewriter wasm contents: " + _ab0a35acfb91.decode(_333044d6fd1e));
        (0, _5bd11b3c31ff.QR)({
          module: new WebAssembly.Module(_333044d6fd1e)
        });
        let _4a43e396a3cb = _d5aac0c61341.findIndex(_3a5021004442 => !_3a5021004442.inUse), _8510cd3a9582 = _d5aac0c61341.length;
        return -1 === _4a43e396a3cb ? ((0, _b6a548cb3b03.U5)("rewriterLogs", _3a5021004442.base) && console.log(`creating new rewriter, ${_8510cd3a9582} rewriters made already`), 
        _271dc742b5dc = {
          rewriter: new _5bd11b3c31ff.LW({
            config: _b6a548cb3b03.$W,
            shared: {
              rewrite: {
                htmlRules: _b5b9693d9c71.V,
                rewriteUrl: _97105b6bb452.Oy,
                rewriteCss: _aabd55df2659.s,
                rewriteJs: _f1f27b0dceb6.o,
                getHtmlInjectCode(_3a5021004442, _271dc742b5dc) {
                  let _4a43e396a3cb = (0, _188ac31e3f35.Uk)(_3a5021004442, _3a5021004442 => `<script src="${_3a5021004442}"><\/script>`).join("");
                  return _271dc742b5dc ? `<head>${_4a43e396a3cb}</head>` : _4a43e396a3cb;
                }
              }
            },
            flagEnabled: _b6a548cb3b03.U5,
            codec: {
              encode: _b6a548cb3b03.hD,
              decode: _b6a548cb3b03.P_
            }
          }),
          inUse: !1
        }, _d5aac0c61341.push(_271dc742b5dc)) : ((0, _b6a548cb3b03.U5)("rewriterLogs", _3a5021004442.base) && console.log(`using cached rewriter ${_4a43e396a3cb} from list of ${_8510cd3a9582} rewriters`), 
        _271dc742b5dc = _d5aac0c61341[_4a43e396a3cb]), _271dc742b5dc.inUse = !0, [ _271dc742b5dc.rewriter, () => _271dc742b5dc.inUse = !1 ];
      }
    },
    2015: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.d(_271dc742b5dc, {
        i: () => a
      });
      var _333044d6fd1e = _4a43e396a3cb(37), _5bd11b3c31ff = _4a43e396a3cb(1478);
      function a(_3a5021004442, _271dc742b5dc, _4a43e396a3cb, _b6a548cb3b03) {
        let _97105b6bb452 = "", _b5b9693d9c71 = "module" === _271dc742b5dc, l = _3a5021004442 => {
          _b5b9693d9c71 ? _97105b6bb452 += `import "${_333044d6fd1e.$W.files[_3a5021004442]}"\n` : _97105b6bb452 += `importScripts("${_333044d6fd1e.$W.files[_3a5021004442]}");\n`;
        };
        l("wasm"), l("all"), _97105b6bb452 += `$studyjetLoadClient().loadAndHook(${JSON.stringify(_333044d6fd1e.$W)});`;
        let _aabd55df2659 = (0, _5bd11b3c31ff.o)(_3a5021004442, _4a43e396a3cb, _b6a548cb3b03, _b5b9693d9c71);
        return _aabd55df2659 instanceof Uint8Array && (_aabd55df2659 = (new TextDecoder).decode(_aabd55df2659)), 
        _97105b6bb452 += _aabd55df2659;
      }
    },
    6684: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.d(_271dc742b5dc, {
        Sn: () => h,
        YH: () => u,
        Yq: () => f,
        hU: () => d,
        pL: () => p,
        rj: () => c
      });
      var _333044d6fd1e = _4a43e396a3cb(6570);
      let _5bd11b3c31ff = {
        none: 0,
        "same-origin": 1,
        "same-site": 2,
        "cross-site": 3
      };
      async function a() {
        return (0, _333044d6fd1e.P2)("@d7a6431b92e", 1);
      }
      async function s(_3a5021004442) {
        let _271dc742b5dc = await a();
        return await _271dc742b5dc.get("redirectTrackers", _3a5021004442) || null;
      }
      async function o(_3a5021004442, _271dc742b5dc) {
        let _4a43e396a3cb = await a();
        await _4a43e396a3cb.put("redirectTrackers", _271dc742b5dc, _3a5021004442);
      }
      async function l(_3a5021004442) {
        let _271dc742b5dc = await a();
        await _271dc742b5dc.delete("redirectTrackers", _3a5021004442);
      }
      async function c(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
        await s(_3a5021004442) || await o(_3a5021004442, {
          originalReferrer: _271dc742b5dc || "",
          mostRestrictiveSite: _4a43e396a3cb,
          referrerPolicy: "",
          chainStarted: Date.now()
        });
      }
      async function u(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
        let _333044d6fd1e = await s(_3a5021004442);
        _333044d6fd1e && (await l(_3a5021004442), _4a43e396a3cb && (_333044d6fd1e.referrerPolicy = _4a43e396a3cb), 
        await o(_271dc742b5dc, _333044d6fd1e));
      }
      async function d(_3a5021004442, _271dc742b5dc) {
        let _4a43e396a3cb = await s(_3a5021004442);
        if (!_4a43e396a3cb) return _271dc742b5dc;
        let _333044d6fd1e = _5bd11b3c31ff[_4a43e396a3cb.mostRestrictiveSite];
        return (_5bd11b3c31ff[_271dc742b5dc] ?? 0) > _333044d6fd1e ? (_4a43e396a3cb.mostRestrictiveSite = _271dc742b5dc, 
        await o(_3a5021004442, _4a43e396a3cb), _271dc742b5dc) : _4a43e396a3cb.mostRestrictiveSite;
      }
      async function h(_3a5021004442) {
        await l(_3a5021004442);
      }
      async function p(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
        let _333044d6fd1e = await a();
        await _333044d6fd1e.put("referrerPolicies", {
          policy: _271dc742b5dc,
          referrer: _4a43e396a3cb
        }, _3a5021004442);
      }
      async function f(_3a5021004442) {
        let _271dc742b5dc = await a();
        return await _271dc742b5dc.get("referrerPolicies", _3a5021004442) || null;
      }
    },
    2416: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb(6684), _4a43e396a3cb(8228);
    },
    8228: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.d(_271dc742b5dc, {
        ps: () => l
      });
      var _333044d6fd1e = _4a43e396a3cb(6570);
      let _5bd11b3c31ff = "publicSuffixList";
      async function a() {
        return (0, _333044d6fd1e.P2)("@d7a6431b92e", 1);
      }
      async function s() {
        let _3a5021004442 = await a();
        return await _3a5021004442.get("publicSuffixList", _5bd11b3c31ff) || null;
      }
      async function o(_3a5021004442) {
        let _271dc742b5dc = await a();
        await _271dc742b5dc.put("publicSuffixList", {
          data: _3a5021004442,
          expiry: Date.now() + 36e5
        }, _5bd11b3c31ff);
      }
      async function l(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
        return _271dc742b5dc ? _3a5021004442.origin.origin === _271dc742b5dc.origin ? "same-origin" : await c(_3a5021004442.origin, _271dc742b5dc, _4a43e396a3cb) ? "same-site" : "cross-site" : "none";
      }
      async function c(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
        return await u(_3a5021004442, _4a43e396a3cb) === await u(_271dc742b5dc, _4a43e396a3cb);
      }
      async function u(_3a5021004442, _271dc742b5dc) {
        let _4a43e396a3cb = await d(_271dc742b5dc), _333044d6fd1e = _3a5021004442.hostname.toLowerCase().split("."), _5bd11b3c31ff = "", _b6a548cb3b03 = !1;
        for (let _3a5021004442 of _4a43e396a3cb) {
          let _271dc742b5dc = _3a5021004442.startsWith("!") ? _3a5021004442.substring(1) : _3a5021004442;
          if (function(_3a5021004442, _271dc742b5dc) {
            if (_3a5021004442.length < _271dc742b5dc.length) return !1;
            let _4a43e396a3cb = _3a5021004442.length - _271dc742b5dc.length;
            for (let _333044d6fd1e = 0; _333044d6fd1e < _271dc742b5dc.length; _333044d6fd1e++) {
              let _5bd11b3c31ff = _3a5021004442[_4a43e396a3cb + _333044d6fd1e], _b6a548cb3b03 = _271dc742b5dc[_333044d6fd1e];
              if ("*" !== _b6a548cb3b03 && _5bd11b3c31ff !== _b6a548cb3b03) return !1;
            }
            return !0;
          }(_333044d6fd1e, _271dc742b5dc.split("."))) {
            if (_3a5021004442.startsWith("!")) {
              _5bd11b3c31ff = _271dc742b5dc, _b6a548cb3b03 = !0;
              break;
            }
            !_b6a548cb3b03 && _271dc742b5dc.length > _5bd11b3c31ff.length && (_5bd11b3c31ff = _271dc742b5dc);
          }
        }
        if (!_5bd11b3c31ff) return _333044d6fd1e.slice(-2).join(".");
        let _97105b6bb452 = _5bd11b3c31ff.split(".").length, _b5b9693d9c71 = _b6a548cb3b03 ? _97105b6bb452 : _97105b6bb452 + 1;
        return _333044d6fd1e.slice(-_b5b9693d9c71).join(".");
      }
      async function d(_3a5021004442) {
        let _271dc742b5dc, _4a43e396a3cb = await s();
        if (_4a43e396a3cb && Date.now() < _4a43e396a3cb.expiry) return _4a43e396a3cb.data;
        try {
          _271dc742b5dc = await _3a5021004442.fetch("https://publicsuffix.org/list/public_suffix_list.dat");
        } catch (_3a5021004442) {
          throw Error(`Failed to fetch public suffix list: ${_3a5021004442}`);
        }
        let _333044d6fd1e = (await _271dc742b5dc.text()).split("\n").map(_3a5021004442 => {
          let _271dc742b5dc = _3a5021004442.trim(), _4a43e396a3cb = _271dc742b5dc.indexOf(" ");
          return _4a43e396a3cb > -1 ? _271dc742b5dc.substring(0, _4a43e396a3cb) : _271dc742b5dc;
        }).filter(_3a5021004442 => _3a5021004442 && !_3a5021004442.startsWith("//"));
        return await o(_333044d6fd1e), _333044d6fd1e;
      }
    },
    2794: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.d(_271dc742b5dc, {
        pX: () => _333044d6fd1e,
        zr: () => _5bd11b3c31ff
      });
      let _333044d6fd1e = Symbol.for("studyjet client global"), _5bd11b3c31ff = Symbol.for("studyjet frame handle");
    },
    5956: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      function n(_3a5021004442, _271dc742b5dc) {
        let _4a43e396a3cb = `\n                errorTrace.value = ${JSON.stringify(_3a5021004442)};\n                fetchedURL.textContent = ${JSON.stringify(_271dc742b5dc)};\n                for (const node of document.querySelectorAll("#hostname")) node.textContent = ${JSON.stringify(location.hostname)};\n                reload.addEventListener("click", () => location.reload());\n                version.textContent = ${JSON.stringify(globalThis.$studyjetVersion?.version || "unknown")};\n                build.textContent = ${JSON.stringify(globalThis.$studyjetVersion?.build || "unknown")};\n\n                document.getElementById('copy-button').addEventListener('click', async () => {\n                    const text = document.getElementById('errorTrace').value;\n                    await navigator.clipboard.writeText(text);\n                    const btn = document.getElementById('copy-button');\n                    btn.textContent = 'Copied!';\n                    setTimeout(() => btn.textContent = 'Copy', 2000);\n                });\n        `;
        return `<!DOCTYPE html>\n            <html>\n                <head>\n                    <meta charset="utf-8" />\n                    <title>StudyJet</title>\n                    <style>\n                    :root {\n                        --deep: #080602;\n                        --shallow: #181412;\n                        --beach: #f1e8e1;\n                        --shore: #b1a8a1;\n                        --accent: #ffa938;\n                        --font-sans: -apple-system, system-ui, BlinkMacSystemFont, sans-serif;\n                        --font-monospace: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n                    }\n\n                    *:not(div,p,span,ul,li,i,span) {\n                        background-color: var(--deep);\n                        color: var(--beach);\n                        font-family: var(--font-sans);\n                    }\n\n                    textarea,\n                    button {\n                        background-color: var(--shallow);\n                        border-radius: 0.6em;\n                        padding: 0.6em;\n                        border: none;\n                        appearance: none;\n                        font-family: var(--font-sans);\n                        color: var(--beach);\n                    }\n\n                    button.primary {\n                        background-color: var(--accent);\n                        color: var(--deep);\n                        font-weight: bold;\n                    }\n\n                    textarea {\n                        resize: none;\n                        height: 20em;\n                        text-align: left;\n                        font-family: var(--font-monospace);\n                    }\n\n                    body {\n                        width: 100vw;\n                        height: 100vh;\n                        justify-content: center;\n                        align-items: center;\n                    }\n\n                    body,\n                    html,\n                    #inner {\n                        display: flex;\n                        align-items: center;\n                        flex-direction: column;\n                        gap: 0.5em;\n                        overflow: hidden;\n                    }\n\n                    #inner {\n                        z-index: 100;\n                    }\n\n                    #cover {\n                        position: absolute;\n                        width: 100%;\n                        height: 100%;\n                        background-color: color-mix(in srgb, var(--deep) 70%, transparent);\n                        z-index: 99;\n                    }\n\n                    #info {\n                        display: flex;\n                        flex-direction: row;\n                        align-items: flex-start;\n                        gap: 1em;\n                    }\n\n                    #version-wrapper {\n                        width: auto;\n                        text-align: right;\n                        position: absolute;\n                        top: 0.5rem;\n                        right: 0.5rem;\n                        font-size: 0.8rem;\n                        color: var(--shore)!important;\n                        i {\n                            background-color: color-mix(in srgb, var(--deep), transparent 50%);\n                            border-radius: 9999px;\n                            padding: 0.2em 0.5em;\n                        }\n                        z-index: 101;\n                    }\n\n                    #errorTrace-wrapper {\n                        position: relative;\n                        width: fit-content;\n                    }\n\n                    #copy-button {\n                        position: absolute;\n                        top: 0.5em;\n                        right: 0.5em;\n                        padding: 0.23em;\n                        cursor: pointer;\n                        opacity: 0;\n                        transition: opacity 0.4s;\n                        font-size: 0.9em;\n                    }\n\n                    #errorTrace-wrapper:hover #copy-button {\n                        opacity: 1;\n                    }\n                    </style>\n                </head>\n                <body>\n                    <div id="cover"></div>\n                    <div id="inner">\n                        <h1 id="errorTitle">Uh oh!</h1>\n                        <p>There was an error loading <b id="fetchedURL"></b></p>\n                        \x3c!-- <p id="errorMessage">Internal Server Error</p> --\x3e\n\n                        <div id="info">\n                            <div id="errorTrace-wrapper">\n                                <textarea id="errorTrace" cols="40" rows="10" readonly></textarea>\n                                <button id="copy-button" class="primary">Copy</button>\n                            </div>\n                            <div id="troubleshooting">\n                                <p>Try:</p>\n                                <ul>\n                                    <li>Checking your internet connection</li>\n                                    <li>Verifying you entered the correct address</li>\n                                    <li>Clearing the site data</li>\n                                    <li>Contacting <b id="hostname"></b>'s administrator</li>\n                                    <li>Verify the server isn't censored</li>\n                                </ul>\n                                <p>If you're the administrator of <b id="hostname"></b>, try:</p>\n                                    <ul>\n                                    <li>Restarting your server</li>\n                                    <li>Updating StudyJet</li>\n                                    <li>Troubleshooting the error on the <a href="https://github.com/MercuryWorkshop/studyjet" target="_blank">GitHub repository</a></li>\n                                </ul>\n                            </div>\n                        </div>\n                        <br>\n                        <button id="reload" class="primary">Reload</button>\n                    </div>\n                    <p id="version-wrapper"><i>StudyJet v<span id="version"></span> (build <span id="build"></span>)</i></p>\n                    <script src="${"data:application/javascript," + encodeURIComponent(_4a43e396a3cb)}"><\/script>\n                </body>\n            </html>\n        `;
      }
      function i(_3a5021004442, _271dc742b5dc) {
        let _4a43e396a3cb = {
          "content-type": "text/html"
        };
        return crossOriginIsolated && (_4a43e396a3cb["Cross-Origin-Embedder-Policy"] = "require-corp"), 
        new Response(n(String(_3a5021004442), _271dc742b5dc), {
          status: 500,
          headers: _4a43e396a3cb
        });
      }
      _4a43e396a3cb.d(_271dc742b5dc, {
        B: () => n,
        v: () => i
      });
    },
    1403: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.d(_271dc742b5dc, {
        H: () => n
      });
      class n {
        handle;
        origin;
        syncToken=0;
        promises={};
        messageChannel=new MessageChannel;
        connected=!1;
        constructor(_3a5021004442, _271dc742b5dc) {
          this.handle = _3a5021004442, this.origin = _271dc742b5dc, this.messageChannel.port1.addEventListener("message", _3a5021004442 => {
            "studyjet$type" in _3a5021004442.data && ("init" === _3a5021004442.data.studyjet$type ? this.connected = !0 : this.handleMessage(_3a5021004442.data));
          }), this.messageChannel.port1.start(), this.handle.postMessage({
            studyjet$type: "init",
            studyjet$port: this.messageChannel.port2
          }, [ this.messageChannel.port2 ]);
        }
        handleMessage(_3a5021004442) {
          let _271dc742b5dc = this.promises[_3a5021004442.studyjet$token];
          _271dc742b5dc && (_271dc742b5dc(_3a5021004442), delete this.promises[_3a5021004442.studyjet$token]);
        }
        async fetch(_3a5021004442) {
          let _271dc742b5dc = this.syncToken++, _4a43e396a3cb = {
            studyjet$type: "fetch",
            studyjet$token: _271dc742b5dc,
            studyjet$request: {
              url: _3a5021004442.url,
              body: _3a5021004442.body,
              headers: Array.from(_3a5021004442.headers.entries()),
              method: _3a5021004442.method,
              mode: _3a5021004442.mode,
              destinitation: _3a5021004442.destination
            }
          }, _333044d6fd1e = _3a5021004442.body ? [ _3a5021004442.body ] : [];
          this.handle.postMessage(_4a43e396a3cb, _333044d6fd1e);
          let {studyjet$response: _5bd11b3c31ff} = await new Promise(_3a5021004442 => {
            this.promises[_271dc742b5dc] = _3a5021004442;
          });
          return !!_5bd11b3c31ff && new Response(_5bd11b3c31ff.body, {
            headers: _5bd11b3c31ff.headers,
            status: _5bd11b3c31ff.status,
            statusText: _5bd11b3c31ff.statusText
          });
        }
      }
    },
    5790: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.d(_271dc742b5dc, {
        Pf: () => m,
        V3: () => S,
        dT: () => w
      });
      var _333044d6fd1e = _4a43e396a3cb(5956), _5bd11b3c31ff = _4a43e396a3cb(8228), _b6a548cb3b03 = _4a43e396a3cb(6684), _97105b6bb452 = _4a43e396a3cb(1472), _b5b9693d9c71 = _4a43e396a3cb(1478), _aabd55df2659 = _4a43e396a3cb(1427), _f1f27b0dceb6 = _4a43e396a3cb(37), _188ac31e3f35 = _4a43e396a3cb(4435), _ab0a35acfb91 = _4a43e396a3cb(884), _5e52f02aa711 = _4a43e396a3cb(2614), _d5aac0c61341 = _4a43e396a3cb(2015), _8510cd3a9582 = _4a43e396a3cb(8665).A;
      function g(_3a5021004442) {
        return _3a5021004442.status >= 300 && _3a5021004442.status < 400;
      }
      async function m(_3a5021004442, _271dc742b5dc) {
        try {
          let _4a43e396a3cb, _333044d6fd1e, _b5b9693d9c71 = new URL(_3a5021004442.url);
          if (_b5b9693d9c71.pathname === this.config.files.wasm) return fetch(this.config.files.wasm).then(async _3a5021004442 => {
            let _271dc742b5dc = await _3a5021004442.arrayBuffer(), _4a43e396a3cb = btoa(new Uint8Array(_271dc742b5dc).reduce((_3a5021004442, _271dc742b5dc) => (_3a5021004442.push(String.fromCharCode(_271dc742b5dc)), 
            _3a5021004442), []).join("")), _333044d6fd1e = "";
            return _333044d6fd1e += `if ('document' in self && document.currentScript) { document.currentScript.remove(); }\nself.WASM = '${_4a43e396a3cb}';`, 
            new Response(_333044d6fd1e, {
              headers: {
                "content-type": "text/javascript"
              }
            });
          });
          let _188ac31e3f35 = "", _ab0a35acfb91 = {};
          for (let [_3a5021004442, _271dc742b5dc] of [ ..._b5b9693d9c71.searchParams.entries() ]) {
            switch (_3a5021004442) {
             case "type":
              _188ac31e3f35 = _271dc742b5dc;
              break;

             case "dest":
              break;

             case "topFrame":
              _4a43e396a3cb = _271dc742b5dc;
              break;

             case "parentFrame":
              _333044d6fd1e = _271dc742b5dc;
              break;

             default:
              _8510cd3a9582.warn(`${_b5b9693d9c71.href} extraneous query parameter ${_3a5021004442}. Assuming <form> element`), 
              _ab0a35acfb91[_3a5021004442] = _271dc742b5dc;
            }
            _b5b9693d9c71.searchParams.delete(_3a5021004442);
          }
          let _5e52f02aa711 = new URL((0, _97105b6bb452.v2)(_b5b9693d9c71));
          for (let [_3a5021004442, _271dc742b5dc] of Object.entries(_ab0a35acfb91)) _5e52f02aa711.searchParams.set(_3a5021004442, _271dc742b5dc);
          let _d5aac0c61341 = {
            origin: _5e52f02aa711,
            base: _5e52f02aa711,
            topFrameName: _4a43e396a3cb,
            parentFrameName: _333044d6fd1e
          };
          if (_b5b9693d9c71.pathname.startsWith(`${this.config.prefix}blob:`) || _b5b9693d9c71.pathname.startsWith(`${this.config.prefix}data:`)) {
            let _271dc742b5dc, _4a43e396a3cb = _b5b9693d9c71.pathname.substring(this.config.prefix.length);
            _4a43e396a3cb.startsWith("blob:") && (_4a43e396a3cb = (0, _97105b6bb452.$n)(_4a43e396a3cb));
            let _333044d6fd1e = await fetch(_4a43e396a3cb, {});
            _333044d6fd1e.finalURL = _4a43e396a3cb.startsWith("blob:") ? _4a43e396a3cb : "(data url)", 
            _333044d6fd1e.body && (_271dc742b5dc = await b(_333044d6fd1e, _d5aac0c61341, _3a5021004442.destination, _188ac31e3f35, this.cookieStore));
            let _5bd11b3c31ff = Object.fromEntries(_333044d6fd1e.headers.entries());
            return crossOriginIsolated && (_5bd11b3c31ff["Cross-Origin-Opener-Policy"] = "same-origin", 
            _5bd11b3c31ff["Cross-Origin-Embedder-Policy"] = "require-corp"), new Response(_271dc742b5dc, {
              status: _333044d6fd1e.status,
              statusText: _333044d6fd1e.statusText,
              headers: _5bd11b3c31ff
            });
          }
          let _f689ea2de11c = this.serviceWorkers.find(_3a5021004442 => _3a5021004442.origin === _5e52f02aa711.origin);
          if (_f689ea2de11c?.connected && "swruntime" !== _b5b9693d9c71.searchParams.get("from")) {
            let _271dc742b5dc = await _f689ea2de11c.fetch(_3a5021004442);
            if (_271dc742b5dc) return _271dc742b5dc;
          }
          if (_5e52f02aa711.origin === new URL(_3a5021004442.url).origin) throw Error("attempted to fetch from same origin - this means the site has obtained a reference to the real origin, aborting");
          let _9da61e711a2c = new _aabd55df2659.u;
          for (let [_271dc742b5dc, _4a43e396a3cb] of _3a5021004442.headers.entries()) _9da61e711a2c.set(_271dc742b5dc, _4a43e396a3cb);
          if (_271dc742b5dc && new URL(_271dc742b5dc.url).pathname.startsWith(_f1f27b0dceb6.$W.prefix)) {
            let _3a5021004442 = new URL((0, _97105b6bb452.v2)(_271dc742b5dc.url));
            _3a5021004442.toString().includes("youtube.com") || (_9da61e711a2c.set("Referer", _3a5021004442.href), 
            _9da61e711a2c.set("Origin", _3a5021004442.origin));
          }
          let _8ab3b044b196 = this.cookieStore.getCookies(_5e52f02aa711, !1);
          _8ab3b044b196.length && _9da61e711a2c.set("Cookie", _8ab3b044b196);
          let _f00bc205fdf3 = !1;
          if ("iframe" === _3a5021004442.destination && "navigate" === _3a5021004442.mode && _3a5021004442.referrer && "no-referrer" !== _3a5021004442.referrer && _3a5021004442.referrer !== location.origin + _f1f27b0dceb6.$W.prefix + "no-referrer") {
            let _271dc742b5dc = _3a5021004442.referrer, _4a43e396a3cb = await self.clients.matchAll({
              type: "window"
            });
            for (;_271dc742b5dc; ) {
              if (!_271dc742b5dc.includes(_f1f27b0dceb6.$W.prefix)) {
                _f00bc205fdf3 = !0;
                break;
              }
              let _3a5021004442 = _4a43e396a3cb.find(_3a5021004442 => _3a5021004442.url === _271dc742b5dc), _333044d6fd1e = await (0, 
              _b6a548cb3b03.Yq)(_271dc742b5dc);
              if (!_333044d6fd1e || !_333044d6fd1e.referrer) {
                _3a5021004442 && _271dc742b5dc.startsWith(location.origin) && (_f00bc205fdf3 = !0);
                break;
              }
              if (_3a5021004442 && "nested" === _3a5021004442.frameType) _271dc742b5dc = _333044d6fd1e.referrer; else break;
            }
          }
          _f00bc205fdf3 ? (_9da61e711a2c.set("Sec-Fetch-Dest", "document"), _9da61e711a2c.set("Sec-Fetch-Mode", "navigate")) : (_9da61e711a2c.set("Sec-Fetch-Dest", _3a5021004442.destination || "empty"), 
          _9da61e711a2c.set("Sec-Fetch-Mode", _3a5021004442.mode));
          let _b70505f78c93 = "none";
          if (_3a5021004442.referrer && "" !== _3a5021004442.referrer && "no-referrer" !== _3a5021004442.referrer && _3a5021004442.referrer !== location.origin + _f1f27b0dceb6.$W.prefix + "no-referrer" && _3a5021004442.referrer.includes(_f1f27b0dceb6.$W.prefix)) {
            let _271dc742b5dc = (0, _97105b6bb452.v2)(_3a5021004442.referrer);
            if (_271dc742b5dc) {
              let _3a5021004442 = new URL(_271dc742b5dc);
              _b70505f78c93 = await (0, _5bd11b3c31ff.ps)(_d5aac0c61341, _3a5021004442, this.client);
            }
          }
          await (0, _b6a548cb3b03.rj)(_5e52f02aa711.toString(), _3a5021004442.referrer ? (0, 
          _97105b6bb452.v2)(_3a5021004442.referrer) : null, _b70505f78c93), _9da61e711a2c.set("Sec-Fetch-Site", await (0, 
          _b6a548cb3b03.hU)(_5e52f02aa711.toString(), _b70505f78c93));
          let _949265f9f771 = new S(_5e52f02aa711, _9da61e711a2c.headers, _3a5021004442.body, _3a5021004442.method, _3a5021004442.destination, _271dc742b5dc);
          this.dispatchEvent(_949265f9f771);
          let _06d2c62dd733 = await _949265f9f771.response || await this.client.fetch(_949265f9f771.url, {
            method: _949265f9f771.method,
            body: _949265f9f771.body,
            headers: _949265f9f771.requestHeaders,
            credentials: "omit",
            mode: "cors" === _3a5021004442.mode ? _3a5021004442.mode : "same-origin",
            cache: _3a5021004442.cache,
            redirect: "manual",
            duplex: "half"
          });
          return _06d2c62dd733.finalURL = _949265f9f771.url.href, await y(_5e52f02aa711, _d5aac0c61341, _188ac31e3f35, _3a5021004442.destination, _3a5021004442.mode, _06d2c62dd733, this.cookieStore, _271dc742b5dc, this.client, this, _3a5021004442.referrer);
        } catch (_271dc742b5dc) {
          let _4a43e396a3cb = {
            message: _271dc742b5dc.message,
            url: _3a5021004442.url,
            destination: _3a5021004442.destination
          };
          if (_271dc742b5dc.cause && (_4a43e396a3cb.cause = _271dc742b5dc.cause, _271dc742b5dc.cause instanceof AggregateError && (_4a43e396a3cb.causeErrors = _271dc742b5dc.cause.errors)), 
          _271dc742b5dc.stack && (_4a43e396a3cb.stack = _271dc742b5dc.stack), console.error("ERROR FROM SERVICE WORKER FETCH: ", _4a43e396a3cb), 
          console.error(_271dc742b5dc), ![ "document", "iframe" ].includes(_3a5021004442.destination)) return new Response(void 0, {
            status: 500
          });
          let _5bd11b3c31ff = Object.entries(_4a43e396a3cb).map(([_3a5021004442, _271dc742b5dc]) => `${_3a5021004442.charAt(0).toUpperCase() + _3a5021004442.slice(1)}: ${_271dc742b5dc}`).join("\n\n");
          return (0, _333044d6fd1e.v)(_5bd11b3c31ff, (0, _97105b6bb452.v2)(_3a5021004442.url));
        }
      }
      async function y(_3a5021004442, _271dc742b5dc, _4a43e396a3cb, _333044d6fd1e, _b5b9693d9c71, _aabd55df2659, _ab0a35acfb91, _5e52f02aa711, _d5aac0c61341, _8510cd3a9582, _f689ea2de11c) {
        let _9da61e711a2c, _8ab3b044b196 = "navigate" === _b5b9693d9c71 && [ "document", "iframe" ].includes(_333044d6fd1e), _f00bc205fdf3 = await (0, 
        _188ac31e3f35.l)(_aabd55df2659.rawHeaders, _271dc742b5dc, _d5aac0c61341, {
          get: _b6a548cb3b03.Yq,
          set: _b6a548cb3b03.pL
        });
        if (_8ab3b044b196 && _f00bc205fdf3["referrer-policy"] && _f689ea2de11c && await (0, 
        _b6a548cb3b03.pL)(_3a5021004442.href, _f00bc205fdf3["referrer-policy"], _f689ea2de11c), 
        g(_aabd55df2659)) {
          let _271dc742b5dc = new URL((0, _97105b6bb452.v2)(_f00bc205fdf3.location));
          await (0, _b6a548cb3b03.YH)(_3a5021004442.toString(), _271dc742b5dc.toString(), _f00bc205fdf3["referrer-policy"]);
          let _333044d6fd1e = await (0, _5bd11b3c31ff.ps)({
            origin: _271dc742b5dc,
            base: _271dc742b5dc
          }, _3a5021004442, _d5aac0c61341);
          if (await (0, _b6a548cb3b03.hU)(_271dc742b5dc.toString(), _333044d6fd1e), _4a43e396a3cb) {
            let _3a5021004442 = new URL(_f00bc205fdf3.location);
            _3a5021004442.searchParams.set("type", _4a43e396a3cb), _f00bc205fdf3.location = _3a5021004442.href;
          }
        }
        let _b70505f78c93 = _f00bc205fdf3["set-cookie"] || [];
        for (let _271dc742b5dc in _b70505f78c93) if (_5e52f02aa711) {
          let _4a43e396a3cb = _8510cd3a9582.dispatch(_5e52f02aa711, {
            studyjet$type: "cookie",
            cookie: _271dc742b5dc,
            url: _3a5021004442.href
          });
          "document" !== _333044d6fd1e && "iframe" !== _333044d6fd1e && await _4a43e396a3cb;
        }
        for (let _271dc742b5dc in await _ab0a35acfb91.setCookies(_b70505f78c93 instanceof Array ? _b70505f78c93 : [ _b70505f78c93 ], _3a5021004442), 
        _f00bc205fdf3) Array.isArray(_f00bc205fdf3[_271dc742b5dc]) && (_f00bc205fdf3[_271dc742b5dc] = _f00bc205fdf3[_271dc742b5dc][0]);
        if (function(_3a5021004442, _271dc742b5dc) {
          if ([ "document", "iframe" ].includes(_271dc742b5dc)) {
            let _271dc742b5dc = _3a5021004442["content-disposition"];
            if (_271dc742b5dc) {
              if ("inline" !== _271dc742b5dc) return !0;
            } else {
              let _271dc742b5dc = _3a5021004442["content-type"]?.split(";")[0].trim().toLowerCase();
              if (_271dc742b5dc && ![ "text/html", "text/plain", "text/css", "text/javascript", "text/xml", "application/javascript", "application/json", "application/xml", "application/pdf" ].includes(_271dc742b5dc) && !_271dc742b5dc.startsWith("text") && !_271dc742b5dc.startsWith("image") && !_271dc742b5dc.startsWith("font") && !_271dc742b5dc.startsWith("video")) return !0;
            }
          }
          return !1;
        }(_f00bc205fdf3, _333044d6fd1e) && !g(_aabd55df2659)) if ((0, _f1f27b0dceb6.U5)("interceptDownloads", _3a5021004442)) {
          if (!_5e52f02aa711) throw Error("cant find client");
          let _271dc742b5dc = null, _4a43e396a3cb = _f00bc205fdf3["content-disposition"];
          if ("string" == typeof _4a43e396a3cb) {
            let _3a5021004442 = _4a43e396a3cb.match(/filename=["']?([^"';\n]*)["']?/i);
            _3a5021004442 && _3a5021004442[1] && (_271dc742b5dc = _3a5021004442[1]);
          }
          let _333044d6fd1e = _f00bc205fdf3["content-length"], _5bd11b3c31ff = await clients.matchAll({});
          if ((_5bd11b3c31ff = _5bd11b3c31ff.filter(_3a5021004442 => !_3a5021004442.url.includes(_f1f27b0dceb6.$W.prefix))).length < 1) throw Error("couldn't find a controller client to dispatch download to");
          let _b6a548cb3b03 = {
            filename: _271dc742b5dc,
            url: _3a5021004442.href,
            type: _f00bc205fdf3["content-type"],
            body: _aabd55df2659.body,
            length: Number(_333044d6fd1e)
          };
          _5bd11b3c31ff[0].postMessage({
            studyjet$type: "download",
            download: _b6a548cb3b03
          }, [ _aabd55df2659.body ]), await new Promise(() => {});
        } else {
          let _3a5021004442 = _f00bc205fdf3["content-disposition"];
          if (!/\s*?((inline|attachment);\s*?)filename=/i.test(_3a5021004442)) {
            let _271dc742b5dc = /^\s*?attachment/i.test(_3a5021004442) ? "attachment" : "inline", [_4a43e396a3cb] = new URL(_aabd55df2659.finalURL).pathname.split("/").slice(-1);
            _f00bc205fdf3["content-disposition"] = `${_271dc742b5dc}; filename=${JSON.stringify(_4a43e396a3cb)}`;
          }
        }
        _aabd55df2659.body && !g(_aabd55df2659) && (_9da61e711a2c = await b(_aabd55df2659, _271dc742b5dc, _333044d6fd1e, _4a43e396a3cb, _ab0a35acfb91)), 
        "text/event-stream" === _f00bc205fdf3.accept && (_f00bc205fdf3["content-type"] = "text/event-stream"), 
        delete _f00bc205fdf3["permissions-policy"], crossOriginIsolated && [ "document", "iframe", "worker", "sharedworker", "style", "script" ].includes(_333044d6fd1e) && (_f00bc205fdf3["Cross-Origin-Embedder-Policy"] = "require-corp", 
        _f00bc205fdf3["Cross-Origin-Opener-Policy"] = "same-origin");
        let _949265f9f771 = new w(_9da61e711a2c, _f00bc205fdf3, _aabd55df2659.status, _aabd55df2659.statusText, _333044d6fd1e, _3a5021004442, _aabd55df2659, _5e52f02aa711);
        return _8510cd3a9582.dispatchEvent(_949265f9f771), g(_aabd55df2659) || await (0, 
        _b6a548cb3b03.Sn)(_3a5021004442.toString()), new Response(_949265f9f771.responseBody, {
          headers: _949265f9f771.responseHeaders,
          status: _949265f9f771.status,
          statusText: _949265f9f771.statusText
        });
      }
      async function b(_3a5021004442, _271dc742b5dc, _4a43e396a3cb, _333044d6fd1e, _5bd11b3c31ff) {
        switch (_4a43e396a3cb) {
         case "iframe":
         case "document":
          if (_3a5021004442.headers.get("content-type")?.startsWith("text/html")) return (0, 
          _ab0a35acfb91.Qs)(await _3a5021004442.text(), _5bd11b3c31ff, _271dc742b5dc, !0);
          return _3a5021004442.body;

         case "script":
          return (0, _b5b9693d9c71.o)(new Uint8Array(await _3a5021004442.arrayBuffer()), _3a5021004442.finalURL, _271dc742b5dc, "module" === _333044d6fd1e);

         case "style":
          return (0, _5e52f02aa711.s)(await _3a5021004442.text(), _271dc742b5dc);

         case "sharedworker":
         case "worker":
          return (0, _d5aac0c61341.i)(new Uint8Array(await _3a5021004442.arrayBuffer()), _333044d6fd1e, _3a5021004442.finalURL, _271dc742b5dc);

         default:
          return _3a5021004442.body;
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
        constructor(_3a5021004442, _271dc742b5dc, _4a43e396a3cb, _333044d6fd1e, _5bd11b3c31ff, _b6a548cb3b03, _97105b6bb452, _b5b9693d9c71) {
          super("handleResponse"), this.responseBody = _3a5021004442, this.responseHeaders = _271dc742b5dc, 
          this.status = _4a43e396a3cb, this.statusText = _333044d6fd1e, this.destination = _5bd11b3c31ff, 
          this.url = _b6a548cb3b03, this.rawResponse = _97105b6bb452, this.client = _b5b9693d9c71;
        }
      }
      class S extends Event {
        url;
        requestHeaders;
        body;
        method;
        destination;
        client;
        constructor(_3a5021004442, _271dc742b5dc, _4a43e396a3cb, _333044d6fd1e, _5bd11b3c31ff, _b6a548cb3b03) {
          super("request"), this.url = _3a5021004442, this.requestHeaders = _271dc742b5dc, 
          this.body = _4a43e396a3cb, this.method = _333044d6fd1e, this.destination = _5bd11b3c31ff, 
          this.client = _b6a548cb3b03;
        }
        response;
      }
    },
    7510: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.r(_271dc742b5dc), _4a43e396a3cb.d(_271dc742b5dc, {
        FakeServiceWorker: () => _333044d6fd1e.H,
        StudyJetHandleResponseEvent: () => _5bd11b3c31ff.dT,
        StudyJetRequestEvent: () => _5bd11b3c31ff.V3,
        StudyJetServiceWorker: () => d,
        errorTemplate: () => _188ac31e3f35.B,
        handleFetch: () => _5bd11b3c31ff.Pf,
        renderError: () => _188ac31e3f35.v
      });
      var _333044d6fd1e = _4a43e396a3cb(1403), _5bd11b3c31ff = _4a43e396a3cb(5790), _b6a548cb3b03 = _4a43e396a3cb(4110), _97105b6bb452 = _4a43e396a3cb(1561), _b5b9693d9c71 = _4a43e396a3cb(3831), _aabd55df2659 = _4a43e396a3cb(6570), _f1f27b0dceb6 = _4a43e396a3cb(37), _188ac31e3f35 = _4a43e396a3cb(5956);
      class d extends EventTarget {
        client;
        config;
        syncPool={};
        synctoken=0;
        cookieStore=new _b5b9693d9c71.k;
        serviceWorkers=[];
        constructor() {
          super(), this.client = new _b6a548cb3b03.Ay, (async () => {
            let _3a5021004442 = await (0, _aabd55df2659.P2)("@d7a6431b92e", 1), _271dc742b5dc = await _3a5021004442.get("cookies", "cookies");
            _271dc742b5dc && this.cookieStore.load(_271dc742b5dc);
          })(), addEventListener("message", async ({data: _3a5021004442}) => {
            if ("studyjet$type" in _3a5021004442) {
              if ("studyjet$token" in _3a5021004442) {
                let _271dc742b5dc = this.syncPool[_3a5021004442.studyjet$token];
                delete this.syncPool[_3a5021004442.studyjet$token], _271dc742b5dc(_3a5021004442);
                return;
              }
              if ("registerServiceWorker" === _3a5021004442.studyjet$type) return void this.serviceWorkers.push(new _333044d6fd1e.H(_3a5021004442.port, _3a5021004442.origin));
              if ("cookie" === _3a5021004442.studyjet$type) {
                this.cookieStore.setCookies([ _3a5021004442.cookie ], new URL(_3a5021004442.url));
                let _271dc742b5dc = await (0, _aabd55df2659.P2)("@d7a6431b92e", 1);
                await _271dc742b5dc.put("cookies", JSON.parse(this.cookieStore.dump()), "cookies");
              }
              "loadConfig" === _3a5021004442.studyjet$type && (this.config = _3a5021004442.config);
            }
          });
        }
        async dispatch(_3a5021004442, _271dc742b5dc) {
          let _4a43e396a3cb, _333044d6fd1e = this.synctoken++, _5bd11b3c31ff = new Promise(_3a5021004442 => _4a43e396a3cb = _3a5021004442);
          return this.syncPool[_333044d6fd1e] = _4a43e396a3cb, _271dc742b5dc.studyjet$token = _333044d6fd1e, 
          _3a5021004442.postMessage(_271dc742b5dc), await _5bd11b3c31ff;
        }
        async loadConfig() {
          if (this.config) return;
          let _3a5021004442 = await (0, _aabd55df2659.P2)("@d7a6431b92e", 1);
          this.config = await _3a5021004442.get("config", "config"), this.config && ((0, _f1f27b0dceb6.Nk)(this.config), 
          await (0, _97105b6bb452.n$)());
        }
        route({request: _3a5021004442}) {
          return !!_3a5021004442.url.startsWith(location.origin + this.config.prefix) || !!_3a5021004442.url.startsWith(location.origin + this.config.files.wasm);
        }
        async fetch({request: _3a5021004442, clientId: _271dc742b5dc}) {
          this.config || await this.loadConfig();
          let _4a43e396a3cb = await self.clients.get(_271dc742b5dc);
          return _5bd11b3c31ff.Pf.call(this, _3a5021004442, _4a43e396a3cb);
        }
      }
    },
    4110: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.d(_271dc742b5dc, {
        Ay: () => S,
        DD: () => w
      });
      let _333044d6fd1e = globalThis.fetch, _5bd11b3c31ff = globalThis.SharedWorker, _b6a548cb3b03 = globalThis.localStorage, _97105b6bb452 = globalThis.navigator.serviceWorker, _b5b9693d9c71 = MessagePort.prototype.postMessage, _aabd55df2659 = {
        prototype: {
          send: WebSocket.prototype.send
        },
        CLOSED: WebSocket.CLOSED,
        CLOSING: WebSocket.CLOSING,
        CONNECTING: WebSocket.CONNECTING,
        OPEN: WebSocket.OPEN
      };
      async function c() {
        let _3a5021004442 = Promise.race([ Promise.any((await self.clients.matchAll({
          type: "window",
          includeUncontrolled: !0
        })).map(async _3a5021004442 => {
          let _271dc742b5dc, _4a43e396a3cb = await (_271dc742b5dc = new MessageChannel, new Promise(_4a43e396a3cb => {
            _3a5021004442.postMessage({
              type: "getPort",
              port: _271dc742b5dc.port2
            }, [ _271dc742b5dc.port2 ]), _271dc742b5dc.port1.onmessage = _3a5021004442 => {
              _4a43e396a3cb(_3a5021004442.data);
            };
          }));
          return await u(_4a43e396a3cb), _4a43e396a3cb;
        })), new Promise((_3a5021004442, _271dc742b5dc) => setTimeout(_271dc742b5dc, 1e3, TypeError("timeout"))) ]);
        try {
          return await _3a5021004442;
        } catch (_3a5021004442) {
          if (_3a5021004442 instanceof AggregateError) throw console.error("bare-mux: failed to get a bare-mux SharedWorker MessagePort as all clients returned an invalid MessagePort."), 
          Error("All clients returned an invalid MessagePort.", {
            cause: _3a5021004442
          });
          return console.warn("bare-mux: failed to get a bare-mux SharedWorker MessagePort within 1s, retrying"), 
          await c();
        }
      }
      function u(_3a5021004442) {
        let _271dc742b5dc = new MessageChannel, _4a43e396a3cb = new Promise((_3a5021004442, _4a43e396a3cb) => {
          _271dc742b5dc.port1.onmessage = _271dc742b5dc => {
            "pong" === _271dc742b5dc.data.type && _3a5021004442();
          }, setTimeout(_4a43e396a3cb, 1500);
        });
        return _b5b9693d9c71.call(_3a5021004442, {
          message: {
            type: "ping"
          },
          port: _271dc742b5dc.port2
        }, [ _271dc742b5dc.port2 ]), _4a43e396a3cb;
      }
      function d(_3a5021004442, _271dc742b5dc) {
        let _4a43e396a3cb = new _5bd11b3c31ff(_3a5021004442, "ridgewood-stem-worker");
        return _271dc742b5dc && _97105b6bb452.addEventListener("message", _271dc742b5dc => {
          if ("getPort" === _271dc742b5dc.data.type && _271dc742b5dc.data.port) {
            console.debug("bare-mux: recieved request for port from sw");
            let _4a43e396a3cb = new _5bd11b3c31ff(_3a5021004442, "ridgewood-stem-worker");
            _b5b9693d9c71.call(_271dc742b5dc.data.port, _4a43e396a3cb.port, [ _4a43e396a3cb.port ]);
          }
        }), _4a43e396a3cb.port;
      }
      let _f1f27b0dceb6 = null;
      class p {
        channel;
        port;
        workerPath;
        constructor(_3a5021004442) {
          this.channel = new BroadcastChannel("bare-mux"), _3a5021004442 instanceof MessagePort || _3a5021004442 instanceof Promise ? this.port = _3a5021004442 : this.createChannel(_3a5021004442, !0);
        }
        createChannel(_3a5021004442, _271dc742b5dc) {
          if (self.clients) this.port = c(), this.channel.onmessage = _3a5021004442 => {
            "refreshPort" === _3a5021004442.data.type && (this.port = c());
          }; else if (_3a5021004442 && SharedWorker) {
            if (!_3a5021004442.startsWith("/") && !_3a5021004442.includes(":")) throw Error("Invalid URL. Must be absolute or start at the root.");
            this.port = d(_3a5021004442, _271dc742b5dc), console.debug("bare-mux: setting localStorage bare-mux-path to", _3a5021004442), 
            _b6a548cb3b03["bare-mux-path"] = _3a5021004442;
          } else {
            if (!SharedWorker) throw Error("Unable to get a channel to the SharedWorker.");
            {
              let _3a5021004442 = _b6a548cb3b03["bare-mux-path"];
              if (console.debug("bare-mux: got localStorage bare-mux-path:", _3a5021004442), !_3a5021004442) throw Error("Unable to get bare-mux workerPath from localStorage.");
              this.port = d(_3a5021004442, _271dc742b5dc);
            }
          }
        }
        async sendMessage(_3a5021004442, _271dc742b5dc) {
          this.port instanceof Promise && (this.port = await this.port);
          try {
            await u(this.port);
          } catch {
            return console.warn("bare-mux: Failed to get a ping response from the worker within 1.5s. Assuming port is dead."), 
            this.createChannel(), await this.sendMessage(_3a5021004442, _271dc742b5dc);
          }
          let _4a43e396a3cb = new MessageChannel, _333044d6fd1e = [ _4a43e396a3cb.port2, ..._271dc742b5dc || [] ], _5bd11b3c31ff = new Promise((_3a5021004442, _271dc742b5dc) => {
            _4a43e396a3cb.port1.onmessage = _4a43e396a3cb => {
              let _333044d6fd1e = _4a43e396a3cb.data;
              "error" === _333044d6fd1e.type ? _271dc742b5dc(_333044d6fd1e.error) : _3a5021004442(_333044d6fd1e);
            };
          });
          return _b5b9693d9c71.call(this.port, {
            message: _3a5021004442,
            port: _4a43e396a3cb.port2
          }, _333044d6fd1e), await _5bd11b3c31ff;
        }
      }
      class f extends EventTarget {
        protocols;
        url;
        readyState=_aabd55df2659.CONNECTING;
        channel;
        constructor(_3a5021004442, _271dc742b5dc = [], _4a43e396a3cb, _333044d6fd1e) {
          super(), this.protocols = _271dc742b5dc, this.url = _3a5021004442.toString(), this.protocols = _271dc742b5dc;
          const i = _3a5021004442 => {
            this.protocols = _3a5021004442, this.readyState = _aabd55df2659.OPEN;
            let _271dc742b5dc = new Event("open");
            this.dispatchEvent(_271dc742b5dc);
          }, a = async _3a5021004442 => {
            let _271dc742b5dc = new MessageEvent("message", {
              data: _3a5021004442
            });
            this.dispatchEvent(_271dc742b5dc);
          }, s = (_3a5021004442, _271dc742b5dc) => {
            this.readyState = _aabd55df2659.CLOSED;
            let _4a43e396a3cb = new CloseEvent("close", {
              code: _3a5021004442,
              reason: _271dc742b5dc
            });
            this.dispatchEvent(_4a43e396a3cb);
          }, o = () => {
            this.readyState = _aabd55df2659.CLOSED;
            let _3a5021004442 = new Event("error");
            this.dispatchEvent(_3a5021004442);
          };
          this.channel = new MessageChannel, this.channel.port1.onmessage = _3a5021004442 => {
            "open" === _3a5021004442.data.type ? i(_3a5021004442.data.args[0]) : "message" === _3a5021004442.data.type ? a(_3a5021004442.data.args[0]) : "close" === _3a5021004442.data.type ? s(_3a5021004442.data.args[0], _3a5021004442.data.args[1]) : "error" === _3a5021004442.data.type && o();
          }, _4a43e396a3cb.sendMessage({
            type: "websocket",
            websocket: {
              url: _3a5021004442.toString(),
              protocols: _271dc742b5dc,
              requestHeaders: _333044d6fd1e,
              channel: this.channel.port2
            }
          }, [ this.channel.port2 ]);
        }
        send(..._3a5021004442) {
          if (this.readyState === _aabd55df2659.CONNECTING) throw new DOMException("Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.");
          let _271dc742b5dc = _3a5021004442[0];
          _271dc742b5dc.buffer && (_271dc742b5dc = _271dc742b5dc.buffer.slice(_271dc742b5dc.byteOffset, _271dc742b5dc.byteOffset + _271dc742b5dc.byteLength)), 
          _b5b9693d9c71.call(this.channel.port1, {
            type: "data",
            data: _271dc742b5dc
          }, _271dc742b5dc instanceof ArrayBuffer ? [ _271dc742b5dc ] : []);
        }
        close(_3a5021004442, _271dc742b5dc) {
          _b5b9693d9c71.call(this.channel.port1, {
            type: "close",
            closeCode: _3a5021004442,
            closeReason: _271dc742b5dc
          });
        }
      }
      function g(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
        console.error(`error while processing '${_4a43e396a3cb}': `, _271dc742b5dc), _3a5021004442.postMessage({
          type: "error",
          error: _271dc742b5dc
        });
      }
      let _188ac31e3f35 = [ "ws:", "wss:" ], _ab0a35acfb91 = [ 101, 204, 205, 304 ], _5e52f02aa711 = [ 301, 302, 303, 307, 308 ];
      class w {
        worker;
        constructor(_3a5021004442) {
          this.worker = new p(_3a5021004442);
        }
        async getTransport() {
          return (await this.worker.sendMessage({
            type: "get"
          })).name;
        }
        async setTransport(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
          await this.setManualTransport(`\n\t\t\tconst { default: BareTransport } = await import("${_3a5021004442}");\n\t\t\treturn [BareTransport, "${_3a5021004442}"];\n\t\t`, _271dc742b5dc, _4a43e396a3cb);
        }
        async setManualTransport(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
          if ("bare-mux-remote" === _3a5021004442) throw Error("Use setRemoteTransport.");
          await this.worker.sendMessage({
            type: "set",
            client: {
              function: _3a5021004442,
              args: _271dc742b5dc
            }
          }, _4a43e396a3cb);
        }
        async setRemoteTransport(_3a5021004442, _271dc742b5dc) {
          let _4a43e396a3cb = new MessageChannel;
          _4a43e396a3cb.port1.onmessage = async _271dc742b5dc => {
            let _4a43e396a3cb = _271dc742b5dc.data.port, _333044d6fd1e = _271dc742b5dc.data.message;
            if ("fetch" === _333044d6fd1e.type) try {
              _3a5021004442.ready || await _3a5021004442.init(), await async function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
                let _333044d6fd1e = await _4a43e396a3cb.request(new URL(_3a5021004442.fetch.remote), _3a5021004442.fetch.method, _3a5021004442.fetch.body, _3a5021004442.fetch.headers, null);
                if (!function() {
                  if (null === _f1f27b0dceb6) {
                    let _3a5021004442, _271dc742b5dc = new MessageChannel, _4a43e396a3cb = new ReadableStream;
                    try {
                      _b5b9693d9c71.call(_271dc742b5dc.port1, _4a43e396a3cb, [ _4a43e396a3cb ]), _3a5021004442 = !0;
                    } catch (_271dc742b5dc) {
                      _3a5021004442 = !1;
                    }
                    return _f1f27b0dceb6 = _3a5021004442, _3a5021004442;
                  }
                  return _f1f27b0dceb6;
                }() && _333044d6fd1e.body instanceof ReadableStream) {
                  let _3a5021004442 = new Response(_333044d6fd1e.body);
                  _333044d6fd1e.body = await _3a5021004442.arrayBuffer();
                }
                _333044d6fd1e.body instanceof ReadableStream || _333044d6fd1e.body instanceof ArrayBuffer ? _b5b9693d9c71.call(_271dc742b5dc, {
                  type: "fetch",
                  fetch: _333044d6fd1e
                }, [ _333044d6fd1e.body ]) : _b5b9693d9c71.call(_271dc742b5dc, {
                  type: "fetch",
                  fetch: _333044d6fd1e
                });
              }(_333044d6fd1e, _4a43e396a3cb, _3a5021004442);
            } catch (_3a5021004442) {
              g(_4a43e396a3cb, _3a5021004442, "fetch");
            } else if ("websocket" === _333044d6fd1e.type) try {
              _3a5021004442.ready || await _3a5021004442.init(), await async function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
                let [_333044d6fd1e, _5bd11b3c31ff] = _4a43e396a3cb.connect(new URL(_3a5021004442.websocket.url), _3a5021004442.websocket.protocols, _3a5021004442.websocket.requestHeaders, _271dc742b5dc => {
                  _b5b9693d9c71.call(_3a5021004442.websocket.channel, {
                    type: "open",
                    args: [ _271dc742b5dc ]
                  });
                }, _271dc742b5dc => {
                  _271dc742b5dc instanceof ArrayBuffer ? _b5b9693d9c71.call(_3a5021004442.websocket.channel, {
                    type: "message",
                    args: [ _271dc742b5dc ]
                  }, [ _271dc742b5dc ]) : _b5b9693d9c71.call(_3a5021004442.websocket.channel, {
                    type: "message",
                    args: [ _271dc742b5dc ]
                  });
                }, (_271dc742b5dc, _4a43e396a3cb) => {
                  _b5b9693d9c71.call(_3a5021004442.websocket.channel, {
                    type: "close",
                    args: [ _271dc742b5dc, _4a43e396a3cb ]
                  });
                }, _271dc742b5dc => {
                  _b5b9693d9c71.call(_3a5021004442.websocket.channel, {
                    type: "error",
                    args: [ _271dc742b5dc ]
                  });
                });
                _3a5021004442.websocket.channel.onmessage = _3a5021004442 => {
                  "data" === _3a5021004442.data.type ? _333044d6fd1e(_3a5021004442.data.data) : "close" === _3a5021004442.data.type && _5bd11b3c31ff(_3a5021004442.data.closeCode, _3a5021004442.data.closeReason);
                }, _b5b9693d9c71.call(_271dc742b5dc, {
                  type: "websocket"
                });
              }(_333044d6fd1e, _4a43e396a3cb, _3a5021004442);
            } catch (_3a5021004442) {
              g(_4a43e396a3cb, _3a5021004442, "websocket");
            }
          }, await this.worker.sendMessage({
            type: "set",
            client: {
              function: "bare-mux-remote",
              args: [ _4a43e396a3cb.port2, _271dc742b5dc ]
            }
          }, [ _4a43e396a3cb.port2 ]);
        }
        getInnerPort() {
          return this.worker.port;
        }
      }
      class S {
        worker;
        constructor(_3a5021004442) {
          this.worker = new p(_3a5021004442);
        }
        createWebSocket(_3a5021004442, _271dc742b5dc = [], _4a43e396a3cb, _333044d6fd1e) {
          try {
            _3a5021004442 = new URL(_3a5021004442);
          } catch (_271dc742b5dc) {
            throw new DOMException(`Faiiled to construct 'WebSocket': The URL '${_3a5021004442}' is invalid.`);
          }
          if (!_188ac31e3f35.includes(_3a5021004442.protocol)) throw new DOMException(`Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '${_3a5021004442.protocol}' is not allowed.`);
          for (let _3a5021004442 of (Array.isArray(_271dc742b5dc) || (_271dc742b5dc = [ _271dc742b5dc ]), 
          _271dc742b5dc = _271dc742b5dc.map(String))) if (!function(_3a5021004442) {
            for (let _271dc742b5dc = 0; _271dc742b5dc < _3a5021004442.length; _271dc742b5dc++) {
              let _4a43e396a3cb = _3a5021004442[_271dc742b5dc];
              if (!"!#$%&'*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz|~".includes(_4a43e396a3cb)) return !1;
            }
            return !0;
          }(_3a5021004442)) throw new DOMException(`Failed to construct 'WebSocket': The subprotocol '${_3a5021004442}' is invalid.`);
          return _333044d6fd1e = _333044d6fd1e || {}, new f(_3a5021004442, _271dc742b5dc, this.worker, _333044d6fd1e);
        }
        async fetch(_3a5021004442, _271dc742b5dc) {
          let _4a43e396a3cb = new Request(_3a5021004442, _271dc742b5dc), _5bd11b3c31ff = _271dc742b5dc?.headers || _4a43e396a3cb.headers, _b6a548cb3b03 = _5bd11b3c31ff instanceof Headers ? Object.fromEntries(_5bd11b3c31ff) : _5bd11b3c31ff, _97105b6bb452 = _4a43e396a3cb.body, _b5b9693d9c71 = new URL(_4a43e396a3cb.url);
          if (_b5b9693d9c71.protocol.startsWith("blob:")) {
            let _3a5021004442 = await _333044d6fd1e(_b5b9693d9c71), _271dc742b5dc = new Response(_3a5021004442.body, _3a5021004442);
            return _271dc742b5dc.rawHeaders = Object.fromEntries(_3a5021004442.headers), _271dc742b5dc.rawResponse = {
              body: _3a5021004442.body,
              headers: Object.fromEntries(_3a5021004442.headers),
              status: _3a5021004442.status,
              statusText: _3a5021004442.statusText
            }, _271dc742b5dc.finalURL = _b5b9693d9c71.toString(), _271dc742b5dc;
          }
          for (let _3a5021004442 = 0; ;_3a5021004442++) {
            let _333044d6fd1e = (await this.worker.sendMessage({
              type: "fetch",
              fetch: {
                remote: _b5b9693d9c71.toString(),
                method: _4a43e396a3cb.method,
                headers: _b6a548cb3b03,
                body: _97105b6bb452 || void 0
              }
            }, _97105b6bb452 ? [ _97105b6bb452 ] : [])).fetch, _5bd11b3c31ff = new Response(_ab0a35acfb91.includes(_333044d6fd1e.status) ? void 0 : _333044d6fd1e.body, {
              headers: new Headers(_333044d6fd1e.headers),
              status: _333044d6fd1e.status,
              statusText: _333044d6fd1e.statusText
            });
            _5bd11b3c31ff.rawHeaders = _333044d6fd1e.headers, _5bd11b3c31ff.rawResponse = _333044d6fd1e, 
            _5bd11b3c31ff.finalURL = _b5b9693d9c71.toString();
            let _aabd55df2659 = _271dc742b5dc?.redirect || _4a43e396a3cb.redirect;
            if (!_5e52f02aa711.includes(_5bd11b3c31ff.status)) return _5bd11b3c31ff;
            switch (_aabd55df2659) {
             case "follow":
              {
                let _271dc742b5dc = _5bd11b3c31ff.headers.get("location");
                if (20 > _3a5021004442 && null !== _271dc742b5dc) {
                  _b5b9693d9c71 = new URL(_271dc742b5dc, _b5b9693d9c71);
                  continue;
                }
                throw TypeError("Failed to fetch");
              }

             case "error":
              throw TypeError("Failed to fetch");

             case "manual":
              return _5bd11b3c31ff;
            }
          }
        }
      }
      console.debug("bare-mux: running v2.1.9 (build dc9dc6e)");
    },
    8832: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.d(_271dc742b5dc, {
        H: () => _333044d6fd1e,
        L: () => _5bd11b3c31ff
      });
      let _333044d6fd1e = new Map([ "altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath" ].map(_3a5021004442 => [ _3a5021004442.toLowerCase(), _3a5021004442 ])), _5bd11b3c31ff = new Map([ "definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan" ].map(_3a5021004442 => [ _3a5021004442.toLowerCase(), _3a5021004442 ]));
    },
    6498: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.d(_271dc742b5dc, {
        A: () => _aabd55df2659
      });
      var _333044d6fd1e = _4a43e396a3cb(2743), _5bd11b3c31ff = _4a43e396a3cb(8466), _b6a548cb3b03 = _4a43e396a3cb(8832);
      let _97105b6bb452 = new Set([ "style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript" ]);
      function o(_3a5021004442) {
        return _3a5021004442.replace(/"/g, "&quot;");
      }
      let _b5b9693d9c71 = new Set([ "area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr" ]), _aabd55df2659 = function e(_3a5021004442, _271dc742b5dc = {}) {
        let _4a43e396a3cb = "length" in _3a5021004442 ? _3a5021004442 : [ _3a5021004442 ], _aabd55df2659 = "";
        for (let _3a5021004442 = 0; _3a5021004442 < _4a43e396a3cb.length; _3a5021004442++) _aabd55df2659 += function(_3a5021004442, _271dc742b5dc) {
          var _4a43e396a3cb, _aabd55df2659, _ab0a35acfb91;
          switch (_3a5021004442.type) {
           case _333044d6fd1e.bL:
            return e(_3a5021004442.children, _271dc742b5dc);

           case _333044d6fd1e.fl:
           case _333044d6fd1e.WL:
            return _4a43e396a3cb = _3a5021004442, `<${_4a43e396a3cb.data}>`;

           case _333044d6fd1e.Mw:
            return _aabd55df2659 = _3a5021004442, `\x3c!--${_aabd55df2659.data}--\x3e`;

           case _333044d6fd1e.KB:
            return _ab0a35acfb91 = _3a5021004442, `<![CDATA[${_ab0a35acfb91.children[0].data}]]>`;

           case _333044d6fd1e.eF:
           case _333044d6fd1e.OF:
           case _333044d6fd1e.vw:
            return function(_3a5021004442, _271dc742b5dc) {
              var _4a43e396a3cb;
              "foreign" === _271dc742b5dc.xmlMode && (_3a5021004442.name = null != (_4a43e396a3cb = _b6a548cb3b03.H.get(_3a5021004442.name)) ? _4a43e396a3cb : _3a5021004442.name, 
              _3a5021004442.parent && _f1f27b0dceb6.has(_3a5021004442.parent.name) && (_271dc742b5dc = {
                ..._271dc742b5dc,
                xmlMode: !1
              })), !_271dc742b5dc.xmlMode && _188ac31e3f35.has(_3a5021004442.name) && (_271dc742b5dc = {
                ..._271dc742b5dc,
                xmlMode: "foreign"
              });
              let _333044d6fd1e = `<${_3a5021004442.name}`, _97105b6bb452 = function(_3a5021004442, _271dc742b5dc) {
                var _4a43e396a3cb;
                if (!_3a5021004442) return;
                let _333044d6fd1e = (null != (_4a43e396a3cb = _271dc742b5dc.encodeEntities) ? _4a43e396a3cb : _271dc742b5dc.decodeEntities) === !1 ? o : _271dc742b5dc.xmlMode || "utf8" !== _271dc742b5dc.encodeEntities ? _5bd11b3c31ff.WY : _5bd11b3c31ff.Gj;
                return Object.keys(_3a5021004442).map(_4a43e396a3cb => {
                  var _5bd11b3c31ff, _97105b6bb452;
                  let _b5b9693d9c71 = null != (_5bd11b3c31ff = _3a5021004442[_4a43e396a3cb]) ? _5bd11b3c31ff : "";
                  return ("foreign" === _271dc742b5dc.xmlMode && (_4a43e396a3cb = null != (_97105b6bb452 = _b6a548cb3b03.L.get(_4a43e396a3cb)) ? _97105b6bb452 : _4a43e396a3cb), 
                  _271dc742b5dc.emptyAttrs || _271dc742b5dc.xmlMode || "" !== _b5b9693d9c71) ? `${_4a43e396a3cb}="${_333044d6fd1e(_b5b9693d9c71)}"` : _4a43e396a3cb;
                }).join(" ");
              }(_3a5021004442.attribs, _271dc742b5dc);
              return _97105b6bb452 && (_333044d6fd1e += ` ${_97105b6bb452}`), 0 === _3a5021004442.children.length && (_271dc742b5dc.xmlMode ? !1 !== _271dc742b5dc.selfClosingTags : _271dc742b5dc.selfClosingTags && _b5b9693d9c71.has(_3a5021004442.name)) ? (_271dc742b5dc.xmlMode || (_333044d6fd1e += " "), 
              _333044d6fd1e += "/>") : (_333044d6fd1e += ">", _3a5021004442.children.length > 0 && (_333044d6fd1e += e(_3a5021004442.children, _271dc742b5dc)), 
              (_271dc742b5dc.xmlMode || !_b5b9693d9c71.has(_3a5021004442.name)) && (_333044d6fd1e += `</${_3a5021004442.name}>`)), 
              _333044d6fd1e;
            }(_3a5021004442, _271dc742b5dc);

           case _333044d6fd1e.EY:
            return function(_3a5021004442, _271dc742b5dc) {
              var _4a43e396a3cb;
              let _333044d6fd1e = _3a5021004442.data || "";
              return (null != (_4a43e396a3cb = _271dc742b5dc.encodeEntities) ? _4a43e396a3cb : _271dc742b5dc.decodeEntities) === !1 || !_271dc742b5dc.xmlMode && _3a5021004442.parent && _97105b6bb452.has(_3a5021004442.parent.name) || (_333044d6fd1e = _271dc742b5dc.xmlMode || "utf8" !== _271dc742b5dc.encodeEntities ? (0, 
              _5bd11b3c31ff.WY)(_333044d6fd1e) : (0, _5bd11b3c31ff.X1)(_333044d6fd1e)), _333044d6fd1e;
            }(_3a5021004442, _271dc742b5dc);
          }
        }(_4a43e396a3cb[_3a5021004442], _271dc742b5dc);
        return _aabd55df2659;
      }, _f1f27b0dceb6 = new Set([ "mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title" ]), _188ac31e3f35 = new Set([ "svg", "math" ]);
    },
    2743: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      var _333044d6fd1e, _5bd11b3c31ff;
      function a(_3a5021004442) {
        return _3a5021004442.type === _333044d6fd1e.Tag || _3a5021004442.type === _333044d6fd1e.Script || _3a5021004442.type === _333044d6fd1e.Style;
      }
      _4a43e396a3cb.d(_271dc742b5dc, {
        EY: () => _97105b6bb452,
        KB: () => _5e52f02aa711,
        Mw: () => _aabd55df2659,
        OF: () => _188ac31e3f35,
        RJ: () => _333044d6fd1e,
        WL: () => _b5b9693d9c71,
        bL: () => _b6a548cb3b03,
        dz: () => a,
        eF: () => _f1f27b0dceb6,
        fl: () => _d5aac0c61341,
        vw: () => _ab0a35acfb91
      }), (_5bd11b3c31ff = _333044d6fd1e || (_333044d6fd1e = {})).Root = "root", _5bd11b3c31ff.Text = "text", 
      _5bd11b3c31ff.Directive = "directive", _5bd11b3c31ff.Comment = "comment", _5bd11b3c31ff.Script = "script", 
      _5bd11b3c31ff.Style = "style", _5bd11b3c31ff.Tag = "tag", _5bd11b3c31ff.CDATA = "cdata", 
      _5bd11b3c31ff.Doctype = "doctype";
      let _b6a548cb3b03 = _333044d6fd1e.Root, _97105b6bb452 = _333044d6fd1e.Text, _b5b9693d9c71 = _333044d6fd1e.Directive, _aabd55df2659 = _333044d6fd1e.Comment, _f1f27b0dceb6 = _333044d6fd1e.Script, _188ac31e3f35 = _333044d6fd1e.Style, _ab0a35acfb91 = _333044d6fd1e.Tag, _5e52f02aa711 = _333044d6fd1e.CDATA, _d5aac0c61341 = _333044d6fd1e.Doctype;
    },
    8866: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.d(_271dc742b5dc, {
        DV: () => s,
        Hg: () => _5bd11b3c31ff.Hg,
        Mw: () => _5bd11b3c31ff.Mw
      });
      var _333044d6fd1e = _4a43e396a3cb(2743), _5bd11b3c31ff = _4a43e396a3cb(6072);
      let _b6a548cb3b03 = {
        withStartIndices: !1,
        withEndIndices: !1,
        xmlMode: !1
      };
      class s {
        constructor(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
          this.dom = [], this.root = new _5bd11b3c31ff.yo(this.dom), this.done = !1, this.tagStack = [ this.root ], 
          this.lastNode = null, this.parser = null, "function" == typeof _271dc742b5dc && (_4a43e396a3cb = _271dc742b5dc, 
          _271dc742b5dc = _b6a548cb3b03), "object" == typeof _3a5021004442 && (_271dc742b5dc = _3a5021004442, 
          _3a5021004442 = void 0), this.callback = null != _3a5021004442 ? _3a5021004442 : null, 
          this.options = null != _271dc742b5dc ? _271dc742b5dc : _b6a548cb3b03, this.elementCB = null != _4a43e396a3cb ? _4a43e396a3cb : null;
        }
        onparserinit(_3a5021004442) {
          this.parser = _3a5021004442;
        }
        onreset() {
          this.dom = [], this.root = new _5bd11b3c31ff.yo(this.dom), this.done = !1, this.tagStack = [ this.root ], 
          this.lastNode = null, this.parser = null;
        }
        onend() {
          this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
        }
        onerror(_3a5021004442) {
          this.handleCallback(_3a5021004442);
        }
        onclosetag() {
          this.lastNode = null;
          let _3a5021004442 = this.tagStack.pop();
          this.options.withEndIndices && (_3a5021004442.endIndex = this.parser.endIndex), 
          this.elementCB && this.elementCB(_3a5021004442);
        }
        onopentag(_3a5021004442, _271dc742b5dc) {
          let _4a43e396a3cb = this.options.xmlMode ? _333044d6fd1e.RJ.Tag : void 0, _b6a548cb3b03 = new _5bd11b3c31ff.Hg(_3a5021004442, _271dc742b5dc, void 0, _4a43e396a3cb);
          this.addNode(_b6a548cb3b03), this.tagStack.push(_b6a548cb3b03);
        }
        ontext(_3a5021004442) {
          let {lastNode: _271dc742b5dc} = this;
          if (_271dc742b5dc && _271dc742b5dc.type === _333044d6fd1e.RJ.Text) _271dc742b5dc.data += _3a5021004442, 
          this.options.withEndIndices && (_271dc742b5dc.endIndex = this.parser.endIndex); else {
            let _271dc742b5dc = new _5bd11b3c31ff.EY(_3a5021004442);
            this.addNode(_271dc742b5dc), this.lastNode = _271dc742b5dc;
          }
        }
        oncomment(_3a5021004442) {
          if (this.lastNode && this.lastNode.type === _333044d6fd1e.RJ.Comment) {
            this.lastNode.data += _3a5021004442;
            return;
          }
          let _271dc742b5dc = new _5bd11b3c31ff.Mw(_3a5021004442);
          this.addNode(_271dc742b5dc), this.lastNode = _271dc742b5dc;
        }
        oncommentend() {
          this.lastNode = null;
        }
        oncdatastart() {
          let _3a5021004442 = new _5bd11b3c31ff.EY(""), _271dc742b5dc = new _5bd11b3c31ff.KB([ _3a5021004442 ]);
          this.addNode(_271dc742b5dc), _3a5021004442.parent = _271dc742b5dc, this.lastNode = _3a5021004442;
        }
        oncdataend() {
          this.lastNode = null;
        }
        onprocessinginstruction(_3a5021004442, _271dc742b5dc) {
          let _4a43e396a3cb = new _5bd11b3c31ff.Cd(_3a5021004442, _271dc742b5dc);
          this.addNode(_4a43e396a3cb);
        }
        handleCallback(_3a5021004442) {
          if ("function" == typeof this.callback) this.callback(_3a5021004442, this.dom); else if (_3a5021004442) throw _3a5021004442;
        }
        addNode(_3a5021004442) {
          let _271dc742b5dc = this.tagStack[this.tagStack.length - 1], _4a43e396a3cb = _271dc742b5dc.children[_271dc742b5dc.children.length - 1];
          this.options.withStartIndices && (_3a5021004442.startIndex = this.parser.startIndex), 
          this.options.withEndIndices && (_3a5021004442.endIndex = this.parser.endIndex), 
          _271dc742b5dc.children.push(_3a5021004442), _4a43e396a3cb && (_3a5021004442.prev = _4a43e396a3cb, 
          _4a43e396a3cb.next = _3a5021004442), _3a5021004442.parent = _271dc742b5dc, this.lastNode = null;
        }
      }
    },
    6072: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.d(_271dc742b5dc, {
        Cd: () => l,
        EY: () => s,
        Hg: () => h,
        KB: () => u,
        Mw: () => o,
        yo: () => d
      });
      var _333044d6fd1e = _4a43e396a3cb(2743);
      class i {
        constructor() {
          this.parent = null, this.prev = null, this.next = null, this.startIndex = null, 
          this.endIndex = null;
        }
        get parentNode() {
          return this.parent;
        }
        set parentNode(_3a5021004442) {
          this.parent = _3a5021004442;
        }
        get previousSibling() {
          return this.prev;
        }
        set previousSibling(_3a5021004442) {
          this.prev = _3a5021004442;
        }
        get nextSibling() {
          return this.next;
        }
        set nextSibling(_3a5021004442) {
          this.next = _3a5021004442;
        }
        cloneNode(_3a5021004442 = !1) {
          return p(this, _3a5021004442);
        }
      }
      class a extends i {
        constructor(_3a5021004442) {
          super(), this.data = _3a5021004442;
        }
        get nodeValue() {
          return this.data;
        }
        set nodeValue(_3a5021004442) {
          this.data = _3a5021004442;
        }
      }
      class s extends a {
        constructor() {
          super(...arguments), this.type = _333044d6fd1e.RJ.Text;
        }
        get nodeType() {
          return 3;
        }
      }
      class o extends a {
        constructor() {
          super(...arguments), this.type = _333044d6fd1e.RJ.Comment;
        }
        get nodeType() {
          return 8;
        }
      }
      class l extends a {
        constructor(_3a5021004442, _271dc742b5dc) {
          super(_271dc742b5dc), this.name = _3a5021004442, this.type = _333044d6fd1e.RJ.Directive;
        }
        get nodeType() {
          return 1;
        }
      }
      class c extends i {
        constructor(_3a5021004442) {
          super(), this.children = _3a5021004442;
        }
        get firstChild() {
          var _3a5021004442;
          return null != (_3a5021004442 = this.children[0]) ? _3a5021004442 : null;
        }
        get lastChild() {
          return this.children.length > 0 ? this.children[this.children.length - 1] : null;
        }
        get childNodes() {
          return this.children;
        }
        set childNodes(_3a5021004442) {
          this.children = _3a5021004442;
        }
      }
      class u extends c {
        constructor() {
          super(...arguments), this.type = _333044d6fd1e.RJ.CDATA;
        }
        get nodeType() {
          return 4;
        }
      }
      class d extends c {
        constructor() {
          super(...arguments), this.type = _333044d6fd1e.RJ.Root;
        }
        get nodeType() {
          return 9;
        }
      }
      class h extends c {
        constructor(_3a5021004442, _271dc742b5dc, _4a43e396a3cb = [], _5bd11b3c31ff = ("script" === _3a5021004442 ? _333044d6fd1e.RJ.Script : "style" === _3a5021004442 ? _333044d6fd1e.RJ.Style : _333044d6fd1e.RJ.Tag)) {
          super(_4a43e396a3cb), this.name = _3a5021004442, this.attribs = _271dc742b5dc, this.type = _5bd11b3c31ff;
        }
        get nodeType() {
          return 1;
        }
        get tagName() {
          return this.name;
        }
        set tagName(_3a5021004442) {
          this.name = _3a5021004442;
        }
        get attributes() {
          return Object.keys(this.attribs).map(_3a5021004442 => {
            var _271dc742b5dc, _4a43e396a3cb;
            return {
              name: _3a5021004442,
              value: this.attribs[_3a5021004442],
              namespace: null == (_271dc742b5dc = this["x-attribsNamespace"]) ? void 0 : _271dc742b5dc[_3a5021004442],
              prefix: null == (_4a43e396a3cb = this["x-attribsPrefix"]) ? void 0 : _4a43e396a3cb[_3a5021004442]
            };
          });
        }
      }
      function p(_3a5021004442, _271dc742b5dc = !1) {
        let _4a43e396a3cb;
        if (_3a5021004442.type === _333044d6fd1e.RJ.Text) _4a43e396a3cb = new s(_3a5021004442.data); else if (_3a5021004442.type === _333044d6fd1e.RJ.Comment) _4a43e396a3cb = new o(_3a5021004442.data); else if ((0, 
        _333044d6fd1e.dz)(_3a5021004442)) {
          let _333044d6fd1e = _271dc742b5dc ? f(_3a5021004442.children) : [], _5bd11b3c31ff = new h(_3a5021004442.name, {
            ..._3a5021004442.attribs
          }, _333044d6fd1e);
          _333044d6fd1e.forEach(_3a5021004442 => _3a5021004442.parent = _5bd11b3c31ff), null != _3a5021004442.namespace && (_5bd11b3c31ff.namespace = _3a5021004442.namespace), 
          _3a5021004442["x-attribsNamespace"] && (_5bd11b3c31ff["x-attribsNamespace"] = {
            ..._3a5021004442["x-attribsNamespace"]
          }), _3a5021004442["x-attribsPrefix"] && (_5bd11b3c31ff["x-attribsPrefix"] = {
            ..._3a5021004442["x-attribsPrefix"]
          }), _4a43e396a3cb = _5bd11b3c31ff;
        } else if (_3a5021004442.type === _333044d6fd1e.RJ.CDATA) {
          let _333044d6fd1e = _271dc742b5dc ? f(_3a5021004442.children) : [], _5bd11b3c31ff = new u(_333044d6fd1e);
          _333044d6fd1e.forEach(_3a5021004442 => _3a5021004442.parent = _5bd11b3c31ff), _4a43e396a3cb = _5bd11b3c31ff;
        } else if (_3a5021004442.type === _333044d6fd1e.RJ.Root) {
          let _333044d6fd1e = _271dc742b5dc ? f(_3a5021004442.children) : [], _5bd11b3c31ff = new d(_333044d6fd1e);
          _333044d6fd1e.forEach(_3a5021004442 => _3a5021004442.parent = _5bd11b3c31ff), _3a5021004442["x-mode"] && (_5bd11b3c31ff["x-mode"] = _3a5021004442["x-mode"]), 
          _4a43e396a3cb = _5bd11b3c31ff;
        } else if (_3a5021004442.type === _333044d6fd1e.RJ.Directive) {
          let _271dc742b5dc = new l(_3a5021004442.name, _3a5021004442.data);
          null != _3a5021004442["x-name"] && (_271dc742b5dc["x-name"] = _3a5021004442["x-name"], 
          _271dc742b5dc["x-publicId"] = _3a5021004442["x-publicId"], _271dc742b5dc["x-systemId"] = _3a5021004442["x-systemId"]), 
          _4a43e396a3cb = _271dc742b5dc;
        } else throw Error(`Not implemented yet: ${_3a5021004442.type}`);
        return _4a43e396a3cb.startIndex = _3a5021004442.startIndex, _4a43e396a3cb.endIndex = _3a5021004442.endIndex, 
        null != _3a5021004442.sourceCodeLocation && (_4a43e396a3cb.sourceCodeLocation = _3a5021004442.sourceCodeLocation), 
        _4a43e396a3cb;
      }
      function f(_3a5021004442) {
        let _271dc742b5dc = _3a5021004442.map(_3a5021004442 => p(_3a5021004442, !0));
        for (let _3a5021004442 = 1; _3a5021004442 < _271dc742b5dc.length; _3a5021004442++) _271dc742b5dc[_3a5021004442].prev = _271dc742b5dc[_3a5021004442 - 1], 
        _271dc742b5dc[_3a5021004442 - 1].next = _271dc742b5dc[_3a5021004442];
        return _271dc742b5dc;
      }
    },
    3256: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb(5016), _4a43e396a3cb(1050);
    },
    6812: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      var _333044d6fd1e, _5bd11b3c31ff;
      _4a43e396a3cb(8866), (_5bd11b3c31ff = _333044d6fd1e || (_333044d6fd1e = {}))[_5bd11b3c31ff.DISCONNECTED = 1] = "DISCONNECTED", 
      _5bd11b3c31ff[_5bd11b3c31ff.PRECEDING = 2] = "PRECEDING", _5bd11b3c31ff[_5bd11b3c31ff.FOLLOWING = 4] = "FOLLOWING", 
      _5bd11b3c31ff[_5bd11b3c31ff.CONTAINS = 8] = "CONTAINS", _5bd11b3c31ff[_5bd11b3c31ff.CONTAINED_BY = 16] = "CONTAINED_BY";
    },
    4993: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb(5016), _4a43e396a3cb(4647), _4a43e396a3cb(9861), _4a43e396a3cb(1050), 
      _4a43e396a3cb(6812), _4a43e396a3cb(3256), _4a43e396a3cb(8866);
    },
    1050: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb(8866), _4a43e396a3cb(9861);
    },
    9861: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb(8866);
    },
    5016: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb(8866), _4a43e396a3cb(6498), _4a43e396a3cb(2743);
    },
    4647: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb(8866);
    },
    2146: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      var _333044d6fd1e;
      _4a43e396a3cb.d(_271dc742b5dc, {
        MK: () => _b6a548cb3b03,
        y6: () => s
      });
      let _5bd11b3c31ff = new Map([ [ 0, 65533 ], [ 128, 8364 ], [ 130, 8218 ], [ 131, 402 ], [ 132, 8222 ], [ 133, 8230 ], [ 134, 8224 ], [ 135, 8225 ], [ 136, 710 ], [ 137, 8240 ], [ 138, 352 ], [ 139, 8249 ], [ 140, 338 ], [ 142, 381 ], [ 145, 8216 ], [ 146, 8217 ], [ 147, 8220 ], [ 148, 8221 ], [ 149, 8226 ], [ 150, 8211 ], [ 151, 8212 ], [ 152, 732 ], [ 153, 8482 ], [ 154, 353 ], [ 155, 8250 ], [ 156, 339 ], [ 158, 382 ], [ 159, 376 ] ]), _b6a548cb3b03 = null != (_333044d6fd1e = String.fromCodePoint) ? _333044d6fd1e : function(_3a5021004442) {
        let _271dc742b5dc = "";
        return _3a5021004442 > 65535 && (_3a5021004442 -= 65536, _271dc742b5dc += String.fromCharCode(_3a5021004442 >>> 10 & 1023 | 55296), 
        _3a5021004442 = 56320 | 1023 & _3a5021004442), _271dc742b5dc += String.fromCharCode(_3a5021004442);
      };
      function s(_3a5021004442) {
        var _271dc742b5dc;
        return _3a5021004442 >= 55296 && _3a5021004442 <= 57343 || _3a5021004442 > 1114111 ? 65533 : null != (_271dc742b5dc = _5bd11b3c31ff.get(_3a5021004442)) ? _271dc742b5dc : _3a5021004442;
      }
    },
    2990: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.d(_271dc742b5dc, {
        FJ: () => _188ac31e3f35,
        MK: () => _d5aac0c61341.MK,
        Wf: () => g,
        qN: () => _ab0a35acfb91.q,
        sr: () => _5e52f02aa711.s
      });
      var _333044d6fd1e, _5bd11b3c31ff, _b6a548cb3b03, _97105b6bb452, _b5b9693d9c71, _aabd55df2659, _f1f27b0dceb6, _188ac31e3f35, _ab0a35acfb91 = _4a43e396a3cb(7259), _5e52f02aa711 = _4a43e396a3cb(5949), _d5aac0c61341 = _4a43e396a3cb(2146);
      function f(_3a5021004442) {
        return _3a5021004442 >= _b5b9693d9c71.ZERO && _3a5021004442 <= _b5b9693d9c71.NINE;
      }
      (_333044d6fd1e = _b5b9693d9c71 || (_b5b9693d9c71 = {}))[_333044d6fd1e.NUM = 35] = "NUM", 
      _333044d6fd1e[_333044d6fd1e.SEMI = 59] = "SEMI", _333044d6fd1e[_333044d6fd1e.EQUALS = 61] = "EQUALS", 
      _333044d6fd1e[_333044d6fd1e.ZERO = 48] = "ZERO", _333044d6fd1e[_333044d6fd1e.NINE = 57] = "NINE", 
      _333044d6fd1e[_333044d6fd1e.LOWER_A = 97] = "LOWER_A", _333044d6fd1e[_333044d6fd1e.LOWER_F = 102] = "LOWER_F", 
      _333044d6fd1e[_333044d6fd1e.LOWER_X = 120] = "LOWER_X", _333044d6fd1e[_333044d6fd1e.LOWER_Z = 122] = "LOWER_Z", 
      _333044d6fd1e[_333044d6fd1e.UPPER_A = 65] = "UPPER_A", _333044d6fd1e[_333044d6fd1e.UPPER_F = 70] = "UPPER_F", 
      _333044d6fd1e[_333044d6fd1e.UPPER_Z = 90] = "UPPER_Z", (_5bd11b3c31ff = _aabd55df2659 || (_aabd55df2659 = {}))[_5bd11b3c31ff.VALUE_LENGTH = 49152] = "VALUE_LENGTH", 
      _5bd11b3c31ff[_5bd11b3c31ff.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", _5bd11b3c31ff[_5bd11b3c31ff.JUMP_TABLE = 127] = "JUMP_TABLE", 
      (_b6a548cb3b03 = _f1f27b0dceb6 || (_f1f27b0dceb6 = {}))[_b6a548cb3b03.EntityStart = 0] = "EntityStart", 
      _b6a548cb3b03[_b6a548cb3b03.NumericStart = 1] = "NumericStart", _b6a548cb3b03[_b6a548cb3b03.NumericDecimal = 2] = "NumericDecimal", 
      _b6a548cb3b03[_b6a548cb3b03.NumericHex = 3] = "NumericHex", _b6a548cb3b03[_b6a548cb3b03.NamedEntity = 4] = "NamedEntity", 
      (_97105b6bb452 = _188ac31e3f35 || (_188ac31e3f35 = {}))[_97105b6bb452.Legacy = 0] = "Legacy", 
      _97105b6bb452[_97105b6bb452.Strict = 1] = "Strict", _97105b6bb452[_97105b6bb452.Attribute = 2] = "Attribute";
      class g {
        constructor(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
          this.decodeTree = _3a5021004442, this.emitCodePoint = _271dc742b5dc, this.errors = _4a43e396a3cb, 
          this.state = _f1f27b0dceb6.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, 
          this.excess = 1, this.decodeMode = _188ac31e3f35.Strict;
        }
        startEntity(_3a5021004442) {
          this.decodeMode = _3a5021004442, this.state = _f1f27b0dceb6.EntityStart, this.result = 0, 
          this.treeIndex = 0, this.excess = 1, this.consumed = 1;
        }
        write(_3a5021004442, _271dc742b5dc) {
          switch (this.state) {
           case _f1f27b0dceb6.EntityStart:
            if (_3a5021004442.charCodeAt(_271dc742b5dc) === _b5b9693d9c71.NUM) return this.state = _f1f27b0dceb6.NumericStart, 
            this.consumed += 1, this.stateNumericStart(_3a5021004442, _271dc742b5dc + 1);
            return this.state = _f1f27b0dceb6.NamedEntity, this.stateNamedEntity(_3a5021004442, _271dc742b5dc);

           case _f1f27b0dceb6.NumericStart:
            return this.stateNumericStart(_3a5021004442, _271dc742b5dc);

           case _f1f27b0dceb6.NumericDecimal:
            return this.stateNumericDecimal(_3a5021004442, _271dc742b5dc);

           case _f1f27b0dceb6.NumericHex:
            return this.stateNumericHex(_3a5021004442, _271dc742b5dc);

           case _f1f27b0dceb6.NamedEntity:
            return this.stateNamedEntity(_3a5021004442, _271dc742b5dc);
          }
        }
        stateNumericStart(_3a5021004442, _271dc742b5dc) {
          return _271dc742b5dc >= _3a5021004442.length ? -1 : (32 | _3a5021004442.charCodeAt(_271dc742b5dc)) === _b5b9693d9c71.LOWER_X ? (this.state = _f1f27b0dceb6.NumericHex, 
          this.consumed += 1, this.stateNumericHex(_3a5021004442, _271dc742b5dc + 1)) : (this.state = _f1f27b0dceb6.NumericDecimal, 
          this.stateNumericDecimal(_3a5021004442, _271dc742b5dc));
        }
        addToNumericResult(_3a5021004442, _271dc742b5dc, _4a43e396a3cb, _333044d6fd1e) {
          if (_271dc742b5dc !== _4a43e396a3cb) {
            let _5bd11b3c31ff = _4a43e396a3cb - _271dc742b5dc;
            this.result = this.result * Math.pow(_333044d6fd1e, _5bd11b3c31ff) + Number.parseInt(_3a5021004442.substr(_271dc742b5dc, _5bd11b3c31ff), _333044d6fd1e), 
            this.consumed += _5bd11b3c31ff;
          }
        }
        stateNumericHex(_3a5021004442, _271dc742b5dc) {
          let _4a43e396a3cb = _271dc742b5dc;
          for (;_271dc742b5dc < _3a5021004442.length; ) {
            var _333044d6fd1e;
            let _5bd11b3c31ff = _3a5021004442.charCodeAt(_271dc742b5dc);
            if (!f(_5bd11b3c31ff) && (!((_333044d6fd1e = _5bd11b3c31ff) >= _b5b9693d9c71.UPPER_A) || !(_333044d6fd1e <= _b5b9693d9c71.UPPER_F)) && (!(_333044d6fd1e >= _b5b9693d9c71.LOWER_A) || !(_333044d6fd1e <= _b5b9693d9c71.LOWER_F))) return this.addToNumericResult(_3a5021004442, _4a43e396a3cb, _271dc742b5dc, 16), 
            this.emitNumericEntity(_5bd11b3c31ff, 3);
            _271dc742b5dc += 1;
          }
          return this.addToNumericResult(_3a5021004442, _4a43e396a3cb, _271dc742b5dc, 16), 
          -1;
        }
        stateNumericDecimal(_3a5021004442, _271dc742b5dc) {
          let _4a43e396a3cb = _271dc742b5dc;
          for (;_271dc742b5dc < _3a5021004442.length; ) {
            let _333044d6fd1e = _3a5021004442.charCodeAt(_271dc742b5dc);
            if (!f(_333044d6fd1e)) return this.addToNumericResult(_3a5021004442, _4a43e396a3cb, _271dc742b5dc, 10), 
            this.emitNumericEntity(_333044d6fd1e, 2);
            _271dc742b5dc += 1;
          }
          return this.addToNumericResult(_3a5021004442, _4a43e396a3cb, _271dc742b5dc, 10), 
          -1;
        }
        emitNumericEntity(_3a5021004442, _271dc742b5dc) {
          var _4a43e396a3cb;
          if (this.consumed <= _271dc742b5dc) return null == (_4a43e396a3cb = this.errors) || _4a43e396a3cb.absenceOfDigitsInNumericCharacterReference(this.consumed), 
          0;
          if (_3a5021004442 === _b5b9693d9c71.SEMI) this.consumed += 1; else if (this.decodeMode === _188ac31e3f35.Strict) return 0;
          return this.emitCodePoint((0, _d5aac0c61341.y6)(this.result), this.consumed), this.errors && (_3a5021004442 !== _b5b9693d9c71.SEMI && this.errors.missingSemicolonAfterCharacterReference(), 
          this.errors.validateNumericCharacterReference(this.result)), this.consumed;
        }
        stateNamedEntity(_3a5021004442, _271dc742b5dc) {
          let {decodeTree: _4a43e396a3cb} = this, _333044d6fd1e = _4a43e396a3cb[this.treeIndex], _5bd11b3c31ff = (_333044d6fd1e & _aabd55df2659.VALUE_LENGTH) >> 14;
          for (;_271dc742b5dc < _3a5021004442.length; _271dc742b5dc++, this.excess++) {
            let _b6a548cb3b03 = _3a5021004442.charCodeAt(_271dc742b5dc);
            if (this.treeIndex = function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb, _333044d6fd1e) {
              let _5bd11b3c31ff = (_271dc742b5dc & _aabd55df2659.BRANCH_LENGTH) >> 7, _b6a548cb3b03 = _271dc742b5dc & _aabd55df2659.JUMP_TABLE;
              if (0 === _5bd11b3c31ff) return 0 !== _b6a548cb3b03 && _333044d6fd1e === _b6a548cb3b03 ? _4a43e396a3cb : -1;
              if (_b6a548cb3b03) {
                let _271dc742b5dc = _333044d6fd1e - _b6a548cb3b03;
                return _271dc742b5dc < 0 || _271dc742b5dc >= _5bd11b3c31ff ? -1 : _3a5021004442[_4a43e396a3cb + _271dc742b5dc] - 1;
              }
              let _97105b6bb452 = _4a43e396a3cb, _b5b9693d9c71 = _97105b6bb452 + _5bd11b3c31ff - 1;
              for (;_97105b6bb452 <= _b5b9693d9c71; ) {
                let _271dc742b5dc = _97105b6bb452 + _b5b9693d9c71 >>> 1, _4a43e396a3cb = _3a5021004442[_271dc742b5dc];
                if (_4a43e396a3cb < _333044d6fd1e) _97105b6bb452 = _271dc742b5dc + 1; else {
                  if (!(_4a43e396a3cb > _333044d6fd1e)) return _3a5021004442[_271dc742b5dc + _5bd11b3c31ff];
                  _b5b9693d9c71 = _271dc742b5dc - 1;
                }
              }
              return -1;
            }(_4a43e396a3cb, _333044d6fd1e, this.treeIndex + Math.max(1, _5bd11b3c31ff), _b6a548cb3b03), 
            this.treeIndex < 0) return 0 === this.result || this.decodeMode === _188ac31e3f35.Attribute && (0 === _5bd11b3c31ff || function(_3a5021004442) {
              var _271dc742b5dc;
              return _3a5021004442 === _b5b9693d9c71.EQUALS || (_271dc742b5dc = _3a5021004442) >= _b5b9693d9c71.UPPER_A && _271dc742b5dc <= _b5b9693d9c71.UPPER_Z || _271dc742b5dc >= _b5b9693d9c71.LOWER_A && _271dc742b5dc <= _b5b9693d9c71.LOWER_Z || f(_271dc742b5dc);
            }(_b6a548cb3b03)) ? 0 : this.emitNotTerminatedNamedEntity();
            if (0 != (_5bd11b3c31ff = ((_333044d6fd1e = _4a43e396a3cb[this.treeIndex]) & _aabd55df2659.VALUE_LENGTH) >> 14)) {
              if (_b6a548cb3b03 === _b5b9693d9c71.SEMI) return this.emitNamedEntityData(this.treeIndex, _5bd11b3c31ff, this.consumed + this.excess);
              this.decodeMode !== _188ac31e3f35.Strict && (this.result = this.treeIndex, this.consumed += this.excess, 
              this.excess = 0);
            }
          }
          return -1;
        }
        emitNotTerminatedNamedEntity() {
          var _3a5021004442;
          let {result: _271dc742b5dc, decodeTree: _4a43e396a3cb} = this, _333044d6fd1e = (_4a43e396a3cb[_271dc742b5dc] & _aabd55df2659.VALUE_LENGTH) >> 14;
          return this.emitNamedEntityData(_271dc742b5dc, _333044d6fd1e, this.consumed), null == (_3a5021004442 = this.errors) || _3a5021004442.missingSemicolonAfterCharacterReference(), 
          this.consumed;
        }
        emitNamedEntityData(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
          let {decodeTree: _333044d6fd1e} = this;
          return this.emitCodePoint(1 === _271dc742b5dc ? _333044d6fd1e[_3a5021004442] & ~_aabd55df2659.VALUE_LENGTH : _333044d6fd1e[_3a5021004442 + 1], _4a43e396a3cb), 
          3 === _271dc742b5dc && this.emitCodePoint(_333044d6fd1e[_3a5021004442 + 2], _4a43e396a3cb), 
          _4a43e396a3cb;
        }
        end() {
          var _3a5021004442;
          switch (this.state) {
           case _f1f27b0dceb6.NamedEntity:
            return 0 !== this.result && (this.decodeMode !== _188ac31e3f35.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;

           case _f1f27b0dceb6.NumericDecimal:
            return this.emitNumericEntity(0, 2);

           case _f1f27b0dceb6.NumericHex:
            return this.emitNumericEntity(0, 3);

           case _f1f27b0dceb6.NumericStart:
            return null == (_3a5021004442 = this.errors) || _3a5021004442.absenceOfDigitsInNumericCharacterReference(this.consumed), 
            0;

           case _f1f27b0dceb6.EntityStart:
            return 0;
          }
        }
      }
    },
    466: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb(9496), _4a43e396a3cb(747);
    },
    747: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.d(_271dc742b5dc, {
        Gj: () => _97105b6bb452,
        WY: () => s,
        X1: () => _b5b9693d9c71
      });
      let _333044d6fd1e = /["$&'<>\u0080-\uFFFF]/g, _5bd11b3c31ff = new Map([ [ 34, "&quot;" ], [ 38, "&amp;" ], [ 39, "&apos;" ], [ 60, "&lt;" ], [ 62, "&gt;" ] ]), _b6a548cb3b03 = null == String.prototype.codePointAt ? (_3a5021004442, _271dc742b5dc) => (64512 & _3a5021004442.charCodeAt(_271dc742b5dc)) == 55296 ? (_3a5021004442.charCodeAt(_271dc742b5dc) - 55296) * 1024 + _3a5021004442.charCodeAt(_271dc742b5dc + 1) - 56320 + 65536 : _3a5021004442.charCodeAt(_271dc742b5dc) : (_3a5021004442, _271dc742b5dc) => _3a5021004442.codePointAt(_271dc742b5dc);
      function s(_3a5021004442) {
        let _271dc742b5dc, _4a43e396a3cb = "", _97105b6bb452 = 0;
        for (;null !== (_271dc742b5dc = _333044d6fd1e.exec(_3a5021004442)); ) {
          let {index: _b5b9693d9c71} = _271dc742b5dc, _aabd55df2659 = _3a5021004442.charCodeAt(_b5b9693d9c71), _f1f27b0dceb6 = _5bd11b3c31ff.get(_aabd55df2659);
          void 0 === _f1f27b0dceb6 ? (_4a43e396a3cb += `${_3a5021004442.substring(_97105b6bb452, _b5b9693d9c71)}&#x${_b6a548cb3b03(_3a5021004442, _b5b9693d9c71).toString(16)};`, 
          _97105b6bb452 = _333044d6fd1e.lastIndex += Number((64512 & _aabd55df2659) == 55296)) : (_4a43e396a3cb += _3a5021004442.substring(_97105b6bb452, _b5b9693d9c71) + _f1f27b0dceb6, 
          _97105b6bb452 = _b5b9693d9c71 + 1);
        }
        return _4a43e396a3cb + _3a5021004442.substr(_97105b6bb452);
      }
      function o(_3a5021004442, _271dc742b5dc) {
        return function(_4a43e396a3cb) {
          let _333044d6fd1e, _5bd11b3c31ff = 0, _b6a548cb3b03 = "";
          for (;_333044d6fd1e = _3a5021004442.exec(_4a43e396a3cb); ) _5bd11b3c31ff !== _333044d6fd1e.index && (_b6a548cb3b03 += _4a43e396a3cb.substring(_5bd11b3c31ff, _333044d6fd1e.index)), 
          _b6a548cb3b03 += _271dc742b5dc.get(_333044d6fd1e[0].charCodeAt(0)), _5bd11b3c31ff = _333044d6fd1e.index + 1;
          return _b6a548cb3b03 + _4a43e396a3cb.substring(_5bd11b3c31ff);
        };
      }
      let _97105b6bb452 = o(/["&\u00A0]/g, new Map([ [ 34, "&quot;" ], [ 38, "&amp;" ], [ 160, "&nbsp;" ] ])), _b5b9693d9c71 = o(/[&<>\u00A0]/g, new Map([ [ 38, "&amp;" ], [ 60, "&lt;" ], [ 62, "&gt;" ], [ 160, "&nbsp;" ] ]));
    },
    7259: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.d(_271dc742b5dc, {
        q: () => _333044d6fd1e
      });
      let _333044d6fd1e = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(_3a5021004442 => _3a5021004442.charCodeAt(0)));
    },
    5949: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.d(_271dc742b5dc, {
        s: () => _333044d6fd1e
      });
      let _333044d6fd1e = new Uint16Array("Ȁaglq\tɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(_3a5021004442 => _3a5021004442.charCodeAt(0)));
    },
    9496: function() {},
    8466: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.d(_271dc742b5dc, {
        Gj: () => _b5b9693d9c71.Gj,
        WY: () => _b5b9693d9c71.WY,
        X1: () => _b5b9693d9c71.X1
      }), _4a43e396a3cb(2990), _4a43e396a3cb(466);
      var _333044d6fd1e, _5bd11b3c31ff, _b6a548cb3b03, _97105b6bb452, _b5b9693d9c71 = _4a43e396a3cb(747);
      (_333044d6fd1e = _b6a548cb3b03 || (_b6a548cb3b03 = {}))[_333044d6fd1e.XML = 0] = "XML", 
      _333044d6fd1e[_333044d6fd1e.HTML = 1] = "HTML", (_5bd11b3c31ff = _97105b6bb452 || (_97105b6bb452 = {}))[_5bd11b3c31ff.UTF8 = 0] = "UTF8", 
      _5bd11b3c31ff[_5bd11b3c31ff.ASCII = 1] = "ASCII", _5bd11b3c31ff[_5bd11b3c31ff.Extensive = 2] = "Extensive", 
      _5bd11b3c31ff[_5bd11b3c31ff.Attribute = 3] = "Attribute", _5bd11b3c31ff[_5bd11b3c31ff.Text = 4] = "Text";
    },
    4645: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.d(_271dc742b5dc, {
        i: () => g
      });
      var _333044d6fd1e = _4a43e396a3cb(5645), _5bd11b3c31ff = _4a43e396a3cb(2990);
      let _b6a548cb3b03 = new Set([ "input", "option", "optgroup", "select", "button", "datalist", "textarea" ]), _97105b6bb452 = new Set([ "p" ]), _b5b9693d9c71 = new Set([ "thead", "tbody" ]), _aabd55df2659 = new Set([ "dd", "dt" ]), _f1f27b0dceb6 = new Set([ "rt", "rp" ]), _188ac31e3f35 = new Map([ [ "tr", new Set([ "tr", "th", "td" ]) ], [ "th", new Set([ "th" ]) ], [ "td", new Set([ "thead", "th", "td" ]) ], [ "body", new Set([ "head", "link", "script" ]) ], [ "li", new Set([ "li" ]) ], [ "p", _97105b6bb452 ], [ "h1", _97105b6bb452 ], [ "h2", _97105b6bb452 ], [ "h3", _97105b6bb452 ], [ "h4", _97105b6bb452 ], [ "h5", _97105b6bb452 ], [ "h6", _97105b6bb452 ], [ "select", _b6a548cb3b03 ], [ "input", _b6a548cb3b03 ], [ "output", _b6a548cb3b03 ], [ "button", _b6a548cb3b03 ], [ "datalist", _b6a548cb3b03 ], [ "textarea", _b6a548cb3b03 ], [ "option", new Set([ "option" ]) ], [ "optgroup", new Set([ "optgroup", "option" ]) ], [ "dd", _aabd55df2659 ], [ "dt", _aabd55df2659 ], [ "address", _97105b6bb452 ], [ "article", _97105b6bb452 ], [ "aside", _97105b6bb452 ], [ "blockquote", _97105b6bb452 ], [ "details", _97105b6bb452 ], [ "div", _97105b6bb452 ], [ "dl", _97105b6bb452 ], [ "fieldset", _97105b6bb452 ], [ "figcaption", _97105b6bb452 ], [ "figure", _97105b6bb452 ], [ "footer", _97105b6bb452 ], [ "form", _97105b6bb452 ], [ "header", _97105b6bb452 ], [ "hr", _97105b6bb452 ], [ "main", _97105b6bb452 ], [ "nav", _97105b6bb452 ], [ "ol", _97105b6bb452 ], [ "pre", _97105b6bb452 ], [ "section", _97105b6bb452 ], [ "table", _97105b6bb452 ], [ "ul", _97105b6bb452 ], [ "rt", _f1f27b0dceb6 ], [ "rp", _f1f27b0dceb6 ], [ "tbody", _b5b9693d9c71 ], [ "tfoot", _b5b9693d9c71 ] ]), _ab0a35acfb91 = new Set([ "area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr" ]), _5e52f02aa711 = new Set([ "math", "svg" ]), _d5aac0c61341 = new Set([ "mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title" ]), _8510cd3a9582 = /\s|\//;
      class g {
        constructor(_3a5021004442, _271dc742b5dc = {}) {
          var _4a43e396a3cb, _5bd11b3c31ff, _b6a548cb3b03, _97105b6bb452, _b5b9693d9c71, _aabd55df2659;
          this.options = _271dc742b5dc, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, 
          this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, 
          this.stack = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, 
          this.ended = !1, this.cbs = null != _3a5021004442 ? _3a5021004442 : {}, this.htmlMode = !this.options.xmlMode, 
          this.lowerCaseTagNames = null != (_4a43e396a3cb = _271dc742b5dc.lowerCaseTags) ? _4a43e396a3cb : this.htmlMode, 
          this.lowerCaseAttributeNames = null != (_5bd11b3c31ff = _271dc742b5dc.lowerCaseAttributeNames) ? _5bd11b3c31ff : this.htmlMode, 
          this.recognizeSelfClosing = null != (_b6a548cb3b03 = _271dc742b5dc.recognizeSelfClosing) ? _b6a548cb3b03 : !this.htmlMode, 
          this.tokenizer = new (null != (_97105b6bb452 = _271dc742b5dc.Tokenizer) ? _97105b6bb452 : _333044d6fd1e.A)(this.options, this), 
          this.foreignContext = [ !this.htmlMode ], null == (_aabd55df2659 = (_b5b9693d9c71 = this.cbs).onparserinit) || _aabd55df2659.call(_b5b9693d9c71, this);
        }
        ontext(_3a5021004442, _271dc742b5dc) {
          var _4a43e396a3cb, _333044d6fd1e;
          let _5bd11b3c31ff = this.getSlice(_3a5021004442, _271dc742b5dc);
          this.endIndex = _271dc742b5dc - 1, null == (_333044d6fd1e = (_4a43e396a3cb = this.cbs).ontext) || _333044d6fd1e.call(_4a43e396a3cb, _5bd11b3c31ff), 
          this.startIndex = _271dc742b5dc;
        }
        ontextentity(_3a5021004442, _271dc742b5dc) {
          var _4a43e396a3cb, _333044d6fd1e;
          this.endIndex = _271dc742b5dc - 1, null == (_333044d6fd1e = (_4a43e396a3cb = this.cbs).ontext) || _333044d6fd1e.call(_4a43e396a3cb, (0, 
          _5bd11b3c31ff.MK)(_3a5021004442)), this.startIndex = _271dc742b5dc;
        }
        isVoidElement(_3a5021004442) {
          return this.htmlMode && _ab0a35acfb91.has(_3a5021004442);
        }
        onopentagname(_3a5021004442, _271dc742b5dc) {
          this.endIndex = _271dc742b5dc;
          let _4a43e396a3cb = this.getSlice(_3a5021004442, _271dc742b5dc);
          this.lowerCaseTagNames && (_4a43e396a3cb = _4a43e396a3cb.toLowerCase()), this.emitOpenTag(_4a43e396a3cb);
        }
        emitOpenTag(_3a5021004442) {
          var _271dc742b5dc, _4a43e396a3cb, _333044d6fd1e, _5bd11b3c31ff;
          this.openTagStart = this.startIndex, this.tagname = _3a5021004442;
          let _b6a548cb3b03 = this.htmlMode && _188ac31e3f35.get(_3a5021004442);
          if (_b6a548cb3b03) for (;this.stack.length > 0 && _b6a548cb3b03.has(this.stack[0]); ) {
            let _3a5021004442 = this.stack.shift();
            null == (_4a43e396a3cb = (_271dc742b5dc = this.cbs).onclosetag) || _4a43e396a3cb.call(_271dc742b5dc, _3a5021004442, !0);
          }
          !this.isVoidElement(_3a5021004442) && (this.stack.unshift(_3a5021004442), this.htmlMode && (_5e52f02aa711.has(_3a5021004442) ? this.foreignContext.unshift(!0) : _d5aac0c61341.has(_3a5021004442) && this.foreignContext.unshift(!1))), 
          null == (_5bd11b3c31ff = (_333044d6fd1e = this.cbs).onopentagname) || _5bd11b3c31ff.call(_333044d6fd1e, _3a5021004442), 
          this.cbs.onopentag && (this.attribs = {});
        }
        endOpenTag(_3a5021004442) {
          var _271dc742b5dc, _4a43e396a3cb;
          this.startIndex = this.openTagStart, this.attribs && (null == (_4a43e396a3cb = (_271dc742b5dc = this.cbs).onopentag) || _4a43e396a3cb.call(_271dc742b5dc, this.tagname, this.attribs, _3a5021004442), 
          this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), 
          this.tagname = "";
        }
        onopentagend(_3a5021004442) {
          this.endIndex = _3a5021004442, this.endOpenTag(!1), this.startIndex = _3a5021004442 + 1;
        }
        onclosetag(_3a5021004442, _271dc742b5dc) {
          var _4a43e396a3cb, _333044d6fd1e, _5bd11b3c31ff, _b6a548cb3b03, _97105b6bb452, _b5b9693d9c71, _aabd55df2659, _f1f27b0dceb6;
          this.endIndex = _271dc742b5dc;
          let _188ac31e3f35 = this.getSlice(_3a5021004442, _271dc742b5dc);
          if (this.lowerCaseTagNames && (_188ac31e3f35 = _188ac31e3f35.toLowerCase()), this.htmlMode && (_5e52f02aa711.has(_188ac31e3f35) || _d5aac0c61341.has(_188ac31e3f35)) && this.foreignContext.shift(), 
          this.isVoidElement(_188ac31e3f35)) this.htmlMode && "br" === _188ac31e3f35 && (null == (_b6a548cb3b03 = (_5bd11b3c31ff = this.cbs).onopentagname) || _b6a548cb3b03.call(_5bd11b3c31ff, "br"), 
          null == (_b5b9693d9c71 = (_97105b6bb452 = this.cbs).onopentag) || _b5b9693d9c71.call(_97105b6bb452, "br", {}, !0), 
          null == (_f1f27b0dceb6 = (_aabd55df2659 = this.cbs).onclosetag) || _f1f27b0dceb6.call(_aabd55df2659, "br", !1)); else {
            let _3a5021004442 = this.stack.indexOf(_188ac31e3f35);
            if (-1 !== _3a5021004442) for (let _271dc742b5dc = 0; _271dc742b5dc <= _3a5021004442; _271dc742b5dc++) {
              let _5bd11b3c31ff = this.stack.shift();
              null == (_333044d6fd1e = (_4a43e396a3cb = this.cbs).onclosetag) || _333044d6fd1e.call(_4a43e396a3cb, _5bd11b3c31ff, _271dc742b5dc !== _3a5021004442);
            } else this.htmlMode && "p" === _188ac31e3f35 && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
          }
          this.startIndex = _271dc742b5dc + 1;
        }
        onselfclosingtag(_3a5021004442) {
          this.endIndex = _3a5021004442, this.recognizeSelfClosing || this.foreignContext[0] ? (this.closeCurrentTag(!1), 
          this.startIndex = _3a5021004442 + 1) : this.onopentagend(_3a5021004442);
        }
        closeCurrentTag(_3a5021004442) {
          var _271dc742b5dc, _4a43e396a3cb;
          let _333044d6fd1e = this.tagname;
          this.endOpenTag(_3a5021004442), this.stack[0] === _333044d6fd1e && (null == (_4a43e396a3cb = (_271dc742b5dc = this.cbs).onclosetag) || _4a43e396a3cb.call(_271dc742b5dc, _333044d6fd1e, !_3a5021004442), 
          this.stack.shift());
        }
        onattribname(_3a5021004442, _271dc742b5dc) {
          this.startIndex = _3a5021004442;
          let _4a43e396a3cb = this.getSlice(_3a5021004442, _271dc742b5dc);
          this.attribname = this.lowerCaseAttributeNames ? _4a43e396a3cb.toLowerCase() : _4a43e396a3cb;
        }
        onattribdata(_3a5021004442, _271dc742b5dc) {
          this.attribvalue += this.getSlice(_3a5021004442, _271dc742b5dc);
        }
        onattribentity(_3a5021004442) {
          this.attribvalue += (0, _5bd11b3c31ff.MK)(_3a5021004442);
        }
        onattribend(_3a5021004442, _271dc742b5dc) {
          var _4a43e396a3cb, _5bd11b3c31ff;
          this.endIndex = _271dc742b5dc, null == (_5bd11b3c31ff = (_4a43e396a3cb = this.cbs).onattribute) || _5bd11b3c31ff.call(_4a43e396a3cb, this.attribname, this.attribvalue, _3a5021004442 === _333044d6fd1e.X.Double ? '"' : _3a5021004442 === _333044d6fd1e.X.Single ? "'" : _3a5021004442 === _333044d6fd1e.X.NoValue ? void 0 : null), 
          this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), 
          this.attribvalue = "";
        }
        getInstructionName(_3a5021004442) {
          let _271dc742b5dc = _3a5021004442.search(_8510cd3a9582), _4a43e396a3cb = _271dc742b5dc < 0 ? _3a5021004442 : _3a5021004442.substr(0, _271dc742b5dc);
          return this.lowerCaseTagNames && (_4a43e396a3cb = _4a43e396a3cb.toLowerCase()), 
          _4a43e396a3cb;
        }
        ondeclaration(_3a5021004442, _271dc742b5dc) {
          this.endIndex = _271dc742b5dc;
          let _4a43e396a3cb = this.getSlice(_3a5021004442, _271dc742b5dc);
          if (this.cbs.onprocessinginstruction) {
            let _3a5021004442 = this.getInstructionName(_4a43e396a3cb);
            this.cbs.onprocessinginstruction(`!${_3a5021004442}`, `!${_4a43e396a3cb}`);
          }
          this.startIndex = _271dc742b5dc + 1;
        }
        onprocessinginstruction(_3a5021004442, _271dc742b5dc) {
          this.endIndex = _271dc742b5dc;
          let _4a43e396a3cb = this.getSlice(_3a5021004442, _271dc742b5dc);
          if (this.cbs.onprocessinginstruction) {
            let _3a5021004442 = this.getInstructionName(_4a43e396a3cb);
            this.cbs.onprocessinginstruction(`?${_3a5021004442}`, `?${_4a43e396a3cb}`);
          }
          this.startIndex = _271dc742b5dc + 1;
        }
        oncomment(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
          var _333044d6fd1e, _5bd11b3c31ff, _b6a548cb3b03, _97105b6bb452;
          this.endIndex = _271dc742b5dc, null == (_5bd11b3c31ff = (_333044d6fd1e = this.cbs).oncomment) || _5bd11b3c31ff.call(_333044d6fd1e, this.getSlice(_3a5021004442, _271dc742b5dc - _4a43e396a3cb)), 
          null == (_97105b6bb452 = (_b6a548cb3b03 = this.cbs).oncommentend) || _97105b6bb452.call(_b6a548cb3b03), 
          this.startIndex = _271dc742b5dc + 1;
        }
        oncdata(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
          var _333044d6fd1e, _5bd11b3c31ff, _b6a548cb3b03, _97105b6bb452, _b5b9693d9c71, _aabd55df2659, _f1f27b0dceb6, _188ac31e3f35, _ab0a35acfb91, _5e52f02aa711;
          this.endIndex = _271dc742b5dc;
          let _d5aac0c61341 = this.getSlice(_3a5021004442, _271dc742b5dc - _4a43e396a3cb);
          !this.htmlMode || this.options.recognizeCDATA ? (null == (_5bd11b3c31ff = (_333044d6fd1e = this.cbs).oncdatastart) || _5bd11b3c31ff.call(_333044d6fd1e), 
          null == (_97105b6bb452 = (_b6a548cb3b03 = this.cbs).ontext) || _97105b6bb452.call(_b6a548cb3b03, _d5aac0c61341), 
          null == (_aabd55df2659 = (_b5b9693d9c71 = this.cbs).oncdataend) || _aabd55df2659.call(_b5b9693d9c71)) : (null == (_188ac31e3f35 = (_f1f27b0dceb6 = this.cbs).oncomment) || _188ac31e3f35.call(_f1f27b0dceb6, `[CDATA[${_d5aac0c61341}]]`), 
          null == (_5e52f02aa711 = (_ab0a35acfb91 = this.cbs).oncommentend) || _5e52f02aa711.call(_ab0a35acfb91)), 
          this.startIndex = _271dc742b5dc + 1;
        }
        onend() {
          var _3a5021004442, _271dc742b5dc;
          if (this.cbs.onclosetag) {
            this.endIndex = this.startIndex;
            for (let _3a5021004442 = 0; _3a5021004442 < this.stack.length; _3a5021004442++) this.cbs.onclosetag(this.stack[_3a5021004442], !0);
          }
          null == (_271dc742b5dc = (_3a5021004442 = this.cbs).onend) || _271dc742b5dc.call(_3a5021004442);
        }
        reset() {
          var _3a5021004442, _271dc742b5dc, _4a43e396a3cb, _333044d6fd1e;
          null == (_271dc742b5dc = (_3a5021004442 = this.cbs).onreset) || _271dc742b5dc.call(_3a5021004442), 
          this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, 
          this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, null == (_333044d6fd1e = (_4a43e396a3cb = this.cbs).onparserinit) || _333044d6fd1e.call(_4a43e396a3cb, this), 
          this.buffers.length = 0, this.foreignContext.length = 0, this.foreignContext.unshift(!this.htmlMode), 
          this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1;
        }
        parseComplete(_3a5021004442) {
          this.reset(), this.end(_3a5021004442);
        }
        getSlice(_3a5021004442, _271dc742b5dc) {
          for (;_3a5021004442 - this.bufferOffset >= this.buffers[0].length; ) this.shiftBuffer();
          let _4a43e396a3cb = this.buffers[0].slice(_3a5021004442 - this.bufferOffset, _271dc742b5dc - this.bufferOffset);
          for (;_271dc742b5dc - this.bufferOffset > this.buffers[0].length; ) this.shiftBuffer(), 
          _4a43e396a3cb += this.buffers[0].slice(0, _271dc742b5dc - this.bufferOffset);
          return _4a43e396a3cb;
        }
        shiftBuffer() {
          this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift();
        }
        write(_3a5021004442) {
          var _271dc742b5dc, _4a43e396a3cb;
          if (this.ended) {
            null == (_4a43e396a3cb = (_271dc742b5dc = this.cbs).onerror) || _4a43e396a3cb.call(_271dc742b5dc, Error(".write() after done!"));
            return;
          }
          this.buffers.push(_3a5021004442), this.tokenizer.running && (this.tokenizer.write(_3a5021004442), 
          this.writeIndex++);
        }
        end(_3a5021004442) {
          var _271dc742b5dc, _4a43e396a3cb;
          if (this.ended) {
            null == (_4a43e396a3cb = (_271dc742b5dc = this.cbs).onerror) || _4a43e396a3cb.call(_271dc742b5dc, Error(".end() after done!"));
            return;
          }
          _3a5021004442 && this.write(_3a5021004442), this.ended = !0, this.tokenizer.end();
        }
        pause() {
          this.tokenizer.pause();
        }
        resume() {
          for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length; ) this.tokenizer.write(this.buffers[this.writeIndex++]);
          this.ended && this.tokenizer.end();
        }
        parseChunk(_3a5021004442) {
          this.write(_3a5021004442);
        }
        done(_3a5021004442) {
          this.end(_3a5021004442);
        }
      }
    },
    5645: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.d(_271dc742b5dc, {
        A: () => p,
        X: () => _aabd55df2659
      });
      var _333044d6fd1e, _5bd11b3c31ff, _b6a548cb3b03, _97105b6bb452, _b5b9693d9c71, _aabd55df2659, _f1f27b0dceb6 = _4a43e396a3cb(2990);
      function u(_3a5021004442) {
        return _3a5021004442 === _97105b6bb452.Space || _3a5021004442 === _97105b6bb452.NewLine || _3a5021004442 === _97105b6bb452.Tab || _3a5021004442 === _97105b6bb452.FormFeed || _3a5021004442 === _97105b6bb452.CarriageReturn;
      }
      function d(_3a5021004442) {
        return _3a5021004442 === _97105b6bb452.Slash || _3a5021004442 === _97105b6bb452.Gt || u(_3a5021004442);
      }
      (_333044d6fd1e = _97105b6bb452 || (_97105b6bb452 = {}))[_333044d6fd1e.Tab = 9] = "Tab", 
      _333044d6fd1e[_333044d6fd1e.NewLine = 10] = "NewLine", _333044d6fd1e[_333044d6fd1e.FormFeed = 12] = "FormFeed", 
      _333044d6fd1e[_333044d6fd1e.CarriageReturn = 13] = "CarriageReturn", _333044d6fd1e[_333044d6fd1e.Space = 32] = "Space", 
      _333044d6fd1e[_333044d6fd1e.ExclamationMark = 33] = "ExclamationMark", _333044d6fd1e[_333044d6fd1e.Number = 35] = "Number", 
      _333044d6fd1e[_333044d6fd1e.Amp = 38] = "Amp", _333044d6fd1e[_333044d6fd1e.SingleQuote = 39] = "SingleQuote", 
      _333044d6fd1e[_333044d6fd1e.DoubleQuote = 34] = "DoubleQuote", _333044d6fd1e[_333044d6fd1e.Dash = 45] = "Dash", 
      _333044d6fd1e[_333044d6fd1e.Slash = 47] = "Slash", _333044d6fd1e[_333044d6fd1e.Zero = 48] = "Zero", 
      _333044d6fd1e[_333044d6fd1e.Nine = 57] = "Nine", _333044d6fd1e[_333044d6fd1e.Semi = 59] = "Semi", 
      _333044d6fd1e[_333044d6fd1e.Lt = 60] = "Lt", _333044d6fd1e[_333044d6fd1e.Eq = 61] = "Eq", 
      _333044d6fd1e[_333044d6fd1e.Gt = 62] = "Gt", _333044d6fd1e[_333044d6fd1e.Questionmark = 63] = "Questionmark", 
      _333044d6fd1e[_333044d6fd1e.UpperA = 65] = "UpperA", _333044d6fd1e[_333044d6fd1e.LowerA = 97] = "LowerA", 
      _333044d6fd1e[_333044d6fd1e.UpperF = 70] = "UpperF", _333044d6fd1e[_333044d6fd1e.LowerF = 102] = "LowerF", 
      _333044d6fd1e[_333044d6fd1e.UpperZ = 90] = "UpperZ", _333044d6fd1e[_333044d6fd1e.LowerZ = 122] = "LowerZ", 
      _333044d6fd1e[_333044d6fd1e.LowerX = 120] = "LowerX", _333044d6fd1e[_333044d6fd1e.OpeningSquareBracket = 91] = "OpeningSquareBracket", 
      (_5bd11b3c31ff = _b5b9693d9c71 || (_b5b9693d9c71 = {}))[_5bd11b3c31ff.Text = 1] = "Text", 
      _5bd11b3c31ff[_5bd11b3c31ff.BeforeTagName = 2] = "BeforeTagName", _5bd11b3c31ff[_5bd11b3c31ff.InTagName = 3] = "InTagName", 
      _5bd11b3c31ff[_5bd11b3c31ff.InSelfClosingTag = 4] = "InSelfClosingTag", _5bd11b3c31ff[_5bd11b3c31ff.BeforeClosingTagName = 5] = "BeforeClosingTagName", 
      _5bd11b3c31ff[_5bd11b3c31ff.InClosingTagName = 6] = "InClosingTagName", _5bd11b3c31ff[_5bd11b3c31ff.AfterClosingTagName = 7] = "AfterClosingTagName", 
      _5bd11b3c31ff[_5bd11b3c31ff.BeforeAttributeName = 8] = "BeforeAttributeName", _5bd11b3c31ff[_5bd11b3c31ff.InAttributeName = 9] = "InAttributeName", 
      _5bd11b3c31ff[_5bd11b3c31ff.AfterAttributeName = 10] = "AfterAttributeName", _5bd11b3c31ff[_5bd11b3c31ff.BeforeAttributeValue = 11] = "BeforeAttributeValue", 
      _5bd11b3c31ff[_5bd11b3c31ff.InAttributeValueDq = 12] = "InAttributeValueDq", _5bd11b3c31ff[_5bd11b3c31ff.InAttributeValueSq = 13] = "InAttributeValueSq", 
      _5bd11b3c31ff[_5bd11b3c31ff.InAttributeValueNq = 14] = "InAttributeValueNq", _5bd11b3c31ff[_5bd11b3c31ff.BeforeDeclaration = 15] = "BeforeDeclaration", 
      _5bd11b3c31ff[_5bd11b3c31ff.InDeclaration = 16] = "InDeclaration", _5bd11b3c31ff[_5bd11b3c31ff.InProcessingInstruction = 17] = "InProcessingInstruction", 
      _5bd11b3c31ff[_5bd11b3c31ff.BeforeComment = 18] = "BeforeComment", _5bd11b3c31ff[_5bd11b3c31ff.CDATASequence = 19] = "CDATASequence", 
      _5bd11b3c31ff[_5bd11b3c31ff.InSpecialComment = 20] = "InSpecialComment", _5bd11b3c31ff[_5bd11b3c31ff.InCommentLike = 21] = "InCommentLike", 
      _5bd11b3c31ff[_5bd11b3c31ff.BeforeSpecialS = 22] = "BeforeSpecialS", _5bd11b3c31ff[_5bd11b3c31ff.BeforeSpecialT = 23] = "BeforeSpecialT", 
      _5bd11b3c31ff[_5bd11b3c31ff.SpecialStartSequence = 24] = "SpecialStartSequence", 
      _5bd11b3c31ff[_5bd11b3c31ff.InSpecialTag = 25] = "InSpecialTag", _5bd11b3c31ff[_5bd11b3c31ff.InEntity = 26] = "InEntity", 
      (_b6a548cb3b03 = _aabd55df2659 || (_aabd55df2659 = {}))[_b6a548cb3b03.NoValue = 0] = "NoValue", 
      _b6a548cb3b03[_b6a548cb3b03.Unquoted = 1] = "Unquoted", _b6a548cb3b03[_b6a548cb3b03.Single = 2] = "Single", 
      _b6a548cb3b03[_b6a548cb3b03.Double = 3] = "Double";
      let _188ac31e3f35 = {
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
        constructor({xmlMode: _3a5021004442 = !1, decodeEntities: _271dc742b5dc = !0}, _4a43e396a3cb) {
          this.cbs = _4a43e396a3cb, this.state = _b5b9693d9c71.Text, this.buffer = "", this.sectionStart = 0, 
          this.index = 0, this.entityStart = 0, this.baseState = _b5b9693d9c71.Text, this.isSpecial = !1, 
          this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, 
          this.xmlMode = _3a5021004442, this.decodeEntities = _271dc742b5dc, this.entityDecoder = new _f1f27b0dceb6.Wf(_3a5021004442 ? _f1f27b0dceb6.sr : _f1f27b0dceb6.qN, (_3a5021004442, _271dc742b5dc) => this.emitCodePoint(_3a5021004442, _271dc742b5dc));
        }
        reset() {
          this.state = _b5b9693d9c71.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, 
          this.baseState = _b5b9693d9c71.Text, this.currentSequence = void 0, this.running = !0, 
          this.offset = 0;
        }
        write(_3a5021004442) {
          this.offset += this.buffer.length, this.buffer = _3a5021004442, this.parse();
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
        stateText(_3a5021004442) {
          _3a5021004442 === _97105b6bb452.Lt || !this.decodeEntities && this.fastForwardTo(_97105b6bb452.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), 
          this.state = _b5b9693d9c71.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && _3a5021004442 === _97105b6bb452.Amp && this.startEntity();
        }
        stateSpecialStartSequence(_3a5021004442) {
          let _271dc742b5dc = this.sequenceIndex === this.currentSequence.length;
          if (_271dc742b5dc ? d(_3a5021004442) : (32 | _3a5021004442) === this.currentSequence[this.sequenceIndex]) {
            if (!_271dc742b5dc) return void this.sequenceIndex++;
          } else this.isSpecial = !1;
          this.sequenceIndex = 0, this.state = _b5b9693d9c71.InTagName, this.stateInTagName(_3a5021004442);
        }
        stateInSpecialTag(_3a5021004442) {
          if (this.sequenceIndex === this.currentSequence.length) {
            if (_3a5021004442 === _97105b6bb452.Gt || u(_3a5021004442)) {
              let _271dc742b5dc = this.index - this.currentSequence.length;
              if (this.sectionStart < _271dc742b5dc) {
                let _3a5021004442 = this.index;
                this.index = _271dc742b5dc, this.cbs.ontext(this.sectionStart, _271dc742b5dc), this.index = _3a5021004442;
              }
              this.isSpecial = !1, this.sectionStart = _271dc742b5dc + 2, this.stateInClosingTagName(_3a5021004442);
              return;
            }
            this.sequenceIndex = 0;
          }
          (32 | _3a5021004442) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : 0 === this.sequenceIndex ? this.currentSequence === _188ac31e3f35.TitleEnd ? this.decodeEntities && _3a5021004442 === _97105b6bb452.Amp && this.startEntity() : this.fastForwardTo(_97105b6bb452.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = Number(_3a5021004442 === _97105b6bb452.Lt);
        }
        stateCDATASequence(_3a5021004442) {
          _3a5021004442 === _188ac31e3f35.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === _188ac31e3f35.Cdata.length && (this.state = _b5b9693d9c71.InCommentLike, 
          this.currentSequence = _188ac31e3f35.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, 
          this.state = _b5b9693d9c71.InDeclaration, this.stateInDeclaration(_3a5021004442));
        }
        fastForwardTo(_3a5021004442) {
          for (;++this.index < this.buffer.length + this.offset; ) if (this.buffer.charCodeAt(this.index - this.offset) === _3a5021004442) return !0;
          return this.index = this.buffer.length + this.offset - 1, !1;
        }
        stateInCommentLike(_3a5021004442) {
          _3a5021004442 === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === _188ac31e3f35.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), 
          this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = _b5b9693d9c71.Text) : 0 === this.sequenceIndex ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : _3a5021004442 !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
        }
        isTagStartChar(_3a5021004442) {
          return this.xmlMode ? !d(_3a5021004442) : _3a5021004442 >= _97105b6bb452.LowerA && _3a5021004442 <= _97105b6bb452.LowerZ || _3a5021004442 >= _97105b6bb452.UpperA && _3a5021004442 <= _97105b6bb452.UpperZ;
        }
        startSpecial(_3a5021004442, _271dc742b5dc) {
          this.isSpecial = !0, this.currentSequence = _3a5021004442, this.sequenceIndex = _271dc742b5dc, 
          this.state = _b5b9693d9c71.SpecialStartSequence;
        }
        stateBeforeTagName(_3a5021004442) {
          if (_3a5021004442 === _97105b6bb452.ExclamationMark) this.state = _b5b9693d9c71.BeforeDeclaration, 
          this.sectionStart = this.index + 1; else if (_3a5021004442 === _97105b6bb452.Questionmark) this.state = _b5b9693d9c71.InProcessingInstruction, 
          this.sectionStart = this.index + 1; else if (this.isTagStartChar(_3a5021004442)) {
            let _271dc742b5dc = 32 | _3a5021004442;
            this.sectionStart = this.index, this.xmlMode ? this.state = _b5b9693d9c71.InTagName : _271dc742b5dc === _188ac31e3f35.ScriptEnd[2] ? this.state = _b5b9693d9c71.BeforeSpecialS : _271dc742b5dc === _188ac31e3f35.TitleEnd[2] || _271dc742b5dc === _188ac31e3f35.XmpEnd[2] ? this.state = _b5b9693d9c71.BeforeSpecialT : this.state = _b5b9693d9c71.InTagName;
          } else _3a5021004442 === _97105b6bb452.Slash ? this.state = _b5b9693d9c71.BeforeClosingTagName : (this.state = _b5b9693d9c71.Text, 
          this.stateText(_3a5021004442));
        }
        stateInTagName(_3a5021004442) {
          d(_3a5021004442) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, 
          this.state = _b5b9693d9c71.BeforeAttributeName, this.stateBeforeAttributeName(_3a5021004442));
        }
        stateBeforeClosingTagName(_3a5021004442) {
          u(_3a5021004442) || (_3a5021004442 === _97105b6bb452.Gt ? this.state = _b5b9693d9c71.Text : (this.state = this.isTagStartChar(_3a5021004442) ? _b5b9693d9c71.InClosingTagName : _b5b9693d9c71.InSpecialComment, 
          this.sectionStart = this.index));
        }
        stateInClosingTagName(_3a5021004442) {
          (_3a5021004442 === _97105b6bb452.Gt || u(_3a5021004442)) && (this.cbs.onclosetag(this.sectionStart, this.index), 
          this.sectionStart = -1, this.state = _b5b9693d9c71.AfterClosingTagName, this.stateAfterClosingTagName(_3a5021004442));
        }
        stateAfterClosingTagName(_3a5021004442) {
          (_3a5021004442 === _97105b6bb452.Gt || this.fastForwardTo(_97105b6bb452.Gt)) && (this.state = _b5b9693d9c71.Text, 
          this.sectionStart = this.index + 1);
        }
        stateBeforeAttributeName(_3a5021004442) {
          _3a5021004442 === _97105b6bb452.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = _b5b9693d9c71.InSpecialTag, 
          this.sequenceIndex = 0) : this.state = _b5b9693d9c71.Text, this.sectionStart = this.index + 1) : _3a5021004442 === _97105b6bb452.Slash ? this.state = _b5b9693d9c71.InSelfClosingTag : u(_3a5021004442) || (this.state = _b5b9693d9c71.InAttributeName, 
          this.sectionStart = this.index);
        }
        stateInSelfClosingTag(_3a5021004442) {
          _3a5021004442 === _97105b6bb452.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = _b5b9693d9c71.Text, 
          this.sectionStart = this.index + 1, this.isSpecial = !1) : u(_3a5021004442) || (this.state = _b5b9693d9c71.BeforeAttributeName, 
          this.stateBeforeAttributeName(_3a5021004442));
        }
        stateInAttributeName(_3a5021004442) {
          (_3a5021004442 === _97105b6bb452.Eq || d(_3a5021004442)) && (this.cbs.onattribname(this.sectionStart, this.index), 
          this.sectionStart = this.index, this.state = _b5b9693d9c71.AfterAttributeName, this.stateAfterAttributeName(_3a5021004442));
        }
        stateAfterAttributeName(_3a5021004442) {
          _3a5021004442 === _97105b6bb452.Eq ? this.state = _b5b9693d9c71.BeforeAttributeValue : _3a5021004442 === _97105b6bb452.Slash || _3a5021004442 === _97105b6bb452.Gt ? (this.cbs.onattribend(_aabd55df2659.NoValue, this.sectionStart), 
          this.sectionStart = -1, this.state = _b5b9693d9c71.BeforeAttributeName, this.stateBeforeAttributeName(_3a5021004442)) : u(_3a5021004442) || (this.cbs.onattribend(_aabd55df2659.NoValue, this.sectionStart), 
          this.state = _b5b9693d9c71.InAttributeName, this.sectionStart = this.index);
        }
        stateBeforeAttributeValue(_3a5021004442) {
          _3a5021004442 === _97105b6bb452.DoubleQuote ? (this.state = _b5b9693d9c71.InAttributeValueDq, 
          this.sectionStart = this.index + 1) : _3a5021004442 === _97105b6bb452.SingleQuote ? (this.state = _b5b9693d9c71.InAttributeValueSq, 
          this.sectionStart = this.index + 1) : u(_3a5021004442) || (this.sectionStart = this.index, 
          this.state = _b5b9693d9c71.InAttributeValueNq, this.stateInAttributeValueNoQuotes(_3a5021004442));
        }
        handleInAttributeValue(_3a5021004442, _271dc742b5dc) {
          _3a5021004442 === _271dc742b5dc || !this.decodeEntities && this.fastForwardTo(_271dc742b5dc) ? (this.cbs.onattribdata(this.sectionStart, this.index), 
          this.sectionStart = -1, this.cbs.onattribend(_271dc742b5dc === _97105b6bb452.DoubleQuote ? _aabd55df2659.Double : _aabd55df2659.Single, this.index + 1), 
          this.state = _b5b9693d9c71.BeforeAttributeName) : this.decodeEntities && _3a5021004442 === _97105b6bb452.Amp && this.startEntity();
        }
        stateInAttributeValueDoubleQuotes(_3a5021004442) {
          this.handleInAttributeValue(_3a5021004442, _97105b6bb452.DoubleQuote);
        }
        stateInAttributeValueSingleQuotes(_3a5021004442) {
          this.handleInAttributeValue(_3a5021004442, _97105b6bb452.SingleQuote);
        }
        stateInAttributeValueNoQuotes(_3a5021004442) {
          u(_3a5021004442) || _3a5021004442 === _97105b6bb452.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), 
          this.sectionStart = -1, this.cbs.onattribend(_aabd55df2659.Unquoted, this.index), 
          this.state = _b5b9693d9c71.BeforeAttributeName, this.stateBeforeAttributeName(_3a5021004442)) : this.decodeEntities && _3a5021004442 === _97105b6bb452.Amp && this.startEntity();
        }
        stateBeforeDeclaration(_3a5021004442) {
          _3a5021004442 === _97105b6bb452.OpeningSquareBracket ? (this.state = _b5b9693d9c71.CDATASequence, 
          this.sequenceIndex = 0) : this.state = _3a5021004442 === _97105b6bb452.Dash ? _b5b9693d9c71.BeforeComment : _b5b9693d9c71.InDeclaration;
        }
        stateInDeclaration(_3a5021004442) {
          (_3a5021004442 === _97105b6bb452.Gt || this.fastForwardTo(_97105b6bb452.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), 
          this.state = _b5b9693d9c71.Text, this.sectionStart = this.index + 1);
        }
        stateInProcessingInstruction(_3a5021004442) {
          (_3a5021004442 === _97105b6bb452.Gt || this.fastForwardTo(_97105b6bb452.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), 
          this.state = _b5b9693d9c71.Text, this.sectionStart = this.index + 1);
        }
        stateBeforeComment(_3a5021004442) {
          _3a5021004442 === _97105b6bb452.Dash ? (this.state = _b5b9693d9c71.InCommentLike, 
          this.currentSequence = _188ac31e3f35.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = _b5b9693d9c71.InDeclaration;
        }
        stateInSpecialComment(_3a5021004442) {
          (_3a5021004442 === _97105b6bb452.Gt || this.fastForwardTo(_97105b6bb452.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), 
          this.state = _b5b9693d9c71.Text, this.sectionStart = this.index + 1);
        }
        stateBeforeSpecialS(_3a5021004442) {
          let _271dc742b5dc = 32 | _3a5021004442;
          _271dc742b5dc === _188ac31e3f35.ScriptEnd[3] ? this.startSpecial(_188ac31e3f35.ScriptEnd, 4) : _271dc742b5dc === _188ac31e3f35.StyleEnd[3] ? this.startSpecial(_188ac31e3f35.StyleEnd, 4) : (this.state = _b5b9693d9c71.InTagName, 
          this.stateInTagName(_3a5021004442));
        }
        stateBeforeSpecialT(_3a5021004442) {
          switch (32 | _3a5021004442) {
           case _188ac31e3f35.TitleEnd[3]:
            this.startSpecial(_188ac31e3f35.TitleEnd, 4);
            break;

           case _188ac31e3f35.TextareaEnd[3]:
            this.startSpecial(_188ac31e3f35.TextareaEnd, 4);
            break;

           case _188ac31e3f35.XmpEnd[3]:
            this.startSpecial(_188ac31e3f35.XmpEnd, 4);
            break;

           default:
            this.state = _b5b9693d9c71.InTagName, this.stateInTagName(_3a5021004442);
          }
        }
        startEntity() {
          this.baseState = this.state, this.state = _b5b9693d9c71.InEntity, this.entityStart = this.index, 
          this.entityDecoder.startEntity(this.xmlMode ? _f1f27b0dceb6.FJ.Strict : this.baseState === _b5b9693d9c71.Text || this.baseState === _b5b9693d9c71.InSpecialTag ? _f1f27b0dceb6.FJ.Legacy : _f1f27b0dceb6.FJ.Attribute);
        }
        stateInEntity() {
          let _3a5021004442 = this.entityDecoder.write(this.buffer, this.index - this.offset);
          _3a5021004442 >= 0 ? (this.state = this.baseState, 0 === _3a5021004442 && (this.index = this.entityStart)) : this.index = this.offset + this.buffer.length - 1;
        }
        cleanup() {
          this.running && this.sectionStart !== this.index && (this.state === _b5b9693d9c71.Text || this.state === _b5b9693d9c71.InSpecialTag && 0 === this.sequenceIndex ? (this.cbs.ontext(this.sectionStart, this.index), 
          this.sectionStart = this.index) : (this.state === _b5b9693d9c71.InAttributeValueDq || this.state === _b5b9693d9c71.InAttributeValueSq || this.state === _b5b9693d9c71.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), 
          this.sectionStart = this.index));
        }
        shouldContinue() {
          return this.index < this.buffer.length + this.offset && this.running;
        }
        parse() {
          for (;this.shouldContinue(); ) {
            let _3a5021004442 = this.buffer.charCodeAt(this.index - this.offset);
            switch (this.state) {
             case _b5b9693d9c71.Text:
              this.stateText(_3a5021004442);
              break;

             case _b5b9693d9c71.SpecialStartSequence:
              this.stateSpecialStartSequence(_3a5021004442);
              break;

             case _b5b9693d9c71.InSpecialTag:
              this.stateInSpecialTag(_3a5021004442);
              break;

             case _b5b9693d9c71.CDATASequence:
              this.stateCDATASequence(_3a5021004442);
              break;

             case _b5b9693d9c71.InAttributeValueDq:
              this.stateInAttributeValueDoubleQuotes(_3a5021004442);
              break;

             case _b5b9693d9c71.InAttributeName:
              this.stateInAttributeName(_3a5021004442);
              break;

             case _b5b9693d9c71.InCommentLike:
              this.stateInCommentLike(_3a5021004442);
              break;

             case _b5b9693d9c71.InSpecialComment:
              this.stateInSpecialComment(_3a5021004442);
              break;

             case _b5b9693d9c71.BeforeAttributeName:
              this.stateBeforeAttributeName(_3a5021004442);
              break;

             case _b5b9693d9c71.InTagName:
              this.stateInTagName(_3a5021004442);
              break;

             case _b5b9693d9c71.InClosingTagName:
              this.stateInClosingTagName(_3a5021004442);
              break;

             case _b5b9693d9c71.BeforeTagName:
              this.stateBeforeTagName(_3a5021004442);
              break;

             case _b5b9693d9c71.AfterAttributeName:
              this.stateAfterAttributeName(_3a5021004442);
              break;

             case _b5b9693d9c71.InAttributeValueSq:
              this.stateInAttributeValueSingleQuotes(_3a5021004442);
              break;

             case _b5b9693d9c71.BeforeAttributeValue:
              this.stateBeforeAttributeValue(_3a5021004442);
              break;

             case _b5b9693d9c71.BeforeClosingTagName:
              this.stateBeforeClosingTagName(_3a5021004442);
              break;

             case _b5b9693d9c71.AfterClosingTagName:
              this.stateAfterClosingTagName(_3a5021004442);
              break;

             case _b5b9693d9c71.BeforeSpecialS:
              this.stateBeforeSpecialS(_3a5021004442);
              break;

             case _b5b9693d9c71.BeforeSpecialT:
              this.stateBeforeSpecialT(_3a5021004442);
              break;

             case _b5b9693d9c71.InAttributeValueNq:
              this.stateInAttributeValueNoQuotes(_3a5021004442);
              break;

             case _b5b9693d9c71.InSelfClosingTag:
              this.stateInSelfClosingTag(_3a5021004442);
              break;

             case _b5b9693d9c71.InDeclaration:
              this.stateInDeclaration(_3a5021004442);
              break;

             case _b5b9693d9c71.BeforeDeclaration:
              this.stateBeforeDeclaration(_3a5021004442);
              break;

             case _b5b9693d9c71.BeforeComment:
              this.stateBeforeComment(_3a5021004442);
              break;

             case _b5b9693d9c71.InProcessingInstruction:
              this.stateInProcessingInstruction(_3a5021004442);
              break;

             case _b5b9693d9c71.InEntity:
              this.stateInEntity();
            }
            this.index++;
          }
          this.cleanup();
        }
        finish() {
          this.state === _b5b9693d9c71.InEntity && (this.entityDecoder.end(), this.state = this.baseState), 
          this.handleTrailingData(), this.cbs.onend();
        }
        handleTrailingData() {
          let _3a5021004442 = this.buffer.length + this.offset;
          this.sectionStart >= _3a5021004442 || (this.state === _b5b9693d9c71.InCommentLike ? this.currentSequence === _188ac31e3f35.CdataEnd ? this.cbs.oncdata(this.sectionStart, _3a5021004442, 0) : this.cbs.oncomment(this.sectionStart, _3a5021004442, 0) : this.state === _b5b9693d9c71.InTagName || this.state === _b5b9693d9c71.BeforeAttributeName || this.state === _b5b9693d9c71.BeforeAttributeValue || this.state === _b5b9693d9c71.AfterAttributeName || this.state === _b5b9693d9c71.InAttributeName || this.state === _b5b9693d9c71.InAttributeValueSq || this.state === _b5b9693d9c71.InAttributeValueDq || this.state === _b5b9693d9c71.InAttributeValueNq || this.state === _b5b9693d9c71.InClosingTagName || this.cbs.ontext(this.sectionStart, _3a5021004442));
        }
        emitCodePoint(_3a5021004442, _271dc742b5dc) {
          this.baseState !== _b5b9693d9c71.Text && this.baseState !== _b5b9693d9c71.InSpecialTag ? (this.sectionStart < this.entityStart && this.cbs.onattribdata(this.sectionStart, this.entityStart), 
          this.sectionStart = this.entityStart + _271dc742b5dc, this.index = this.sectionStart - 1, 
          this.cbs.onattribentity(_3a5021004442)) : (this.sectionStart < this.entityStart && this.cbs.ontext(this.sectionStart, this.entityStart), 
          this.sectionStart = this.entityStart + _271dc742b5dc, this.index = this.sectionStart - 1, 
          this.cbs.ontextentity(_3a5021004442, this.sectionStart));
        }
      }
    },
    3808: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.d(_271dc742b5dc, {
        RJ: () => _5bd11b3c31ff,
        iX: () => _333044d6fd1e.i
      });
      var _333044d6fd1e = _4a43e396a3cb(4645);
      _4a43e396a3cb(8866), _4a43e396a3cb(5645);
      var _5bd11b3c31ff = _4a43e396a3cb(2743);
      _4a43e396a3cb(4993);
    },
    6570: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      let _333044d6fd1e, _5bd11b3c31ff, _b6a548cb3b03, _97105b6bb452;
      _4a43e396a3cb.d(_271dc742b5dc, {
        P2: () => f
      });
      let o = (_3a5021004442, _271dc742b5dc) => _271dc742b5dc.some(_271dc742b5dc => _3a5021004442 instanceof _271dc742b5dc), _b5b9693d9c71 = new WeakMap, _aabd55df2659 = new WeakMap, _f1f27b0dceb6 = new WeakMap, _188ac31e3f35 = {
        get(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
          if (_3a5021004442 instanceof IDBTransaction) {
            if ("done" === _271dc742b5dc) return _b5b9693d9c71.get(_3a5021004442);
            if ("store" === _271dc742b5dc) return _4a43e396a3cb.objectStoreNames[1] ? void 0 : _4a43e396a3cb.objectStore(_4a43e396a3cb.objectStoreNames[0]);
          }
          return h(_3a5021004442[_271dc742b5dc]);
        },
        set: (_3a5021004442, _271dc742b5dc, _4a43e396a3cb) => (_3a5021004442[_271dc742b5dc] = _4a43e396a3cb, 
        !0),
        has: (_3a5021004442, _271dc742b5dc) => _3a5021004442 instanceof IDBTransaction && ("done" === _271dc742b5dc || "store" === _271dc742b5dc) || _271dc742b5dc in _3a5021004442
      };
      function h(_3a5021004442) {
        if (_3a5021004442 instanceof IDBRequest) {
          let _271dc742b5dc;
          return _271dc742b5dc = new Promise((_271dc742b5dc, _4a43e396a3cb) => {
            let n = () => {
              _3a5021004442.removeEventListener("success", i), _3a5021004442.removeEventListener("error", a);
            }, i = () => {
              _271dc742b5dc(h(_3a5021004442.result)), n();
            }, a = () => {
              _4a43e396a3cb(_3a5021004442.error), n();
            };
            _3a5021004442.addEventListener("success", i), _3a5021004442.addEventListener("error", a);
          }), _f1f27b0dceb6.set(_271dc742b5dc, _3a5021004442), _271dc742b5dc;
        }
        if (_aabd55df2659.has(_3a5021004442)) return _aabd55df2659.get(_3a5021004442);
        let _271dc742b5dc = function(_3a5021004442) {
          if ("function" == typeof _3a5021004442) return (_5bd11b3c31ff || (_5bd11b3c31ff = [ IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey ])).includes(_3a5021004442) ? function(..._271dc742b5dc) {
            return _3a5021004442.apply(p(this), _271dc742b5dc), h(this.request);
          } : function(..._271dc742b5dc) {
            return h(_3a5021004442.apply(p(this), _271dc742b5dc));
          };
          return (_3a5021004442 instanceof IDBTransaction && function(_3a5021004442) {
            if (_b5b9693d9c71.has(_3a5021004442)) return;
            let _271dc742b5dc = new Promise((_271dc742b5dc, _4a43e396a3cb) => {
              let n = () => {
                _3a5021004442.removeEventListener("complete", i), _3a5021004442.removeEventListener("error", a), 
                _3a5021004442.removeEventListener("abort", a);
              }, i = () => {
                _271dc742b5dc(), n();
              }, a = () => {
                _4a43e396a3cb(_3a5021004442.error || new DOMException("AbortError", "AbortError")), 
                n();
              };
              _3a5021004442.addEventListener("complete", i), _3a5021004442.addEventListener("error", a), 
              _3a5021004442.addEventListener("abort", a);
            });
            _b5b9693d9c71.set(_3a5021004442, _271dc742b5dc);
          }(_3a5021004442), o(_3a5021004442, _333044d6fd1e || (_333044d6fd1e = [ IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction ]))) ? new Proxy(_3a5021004442, _188ac31e3f35) : _3a5021004442;
        }(_3a5021004442);
        return _271dc742b5dc !== _3a5021004442 && (_aabd55df2659.set(_3a5021004442, _271dc742b5dc), 
        _f1f27b0dceb6.set(_271dc742b5dc, _3a5021004442)), _271dc742b5dc;
      }
      let p = _3a5021004442 => _f1f27b0dceb6.get(_3a5021004442);
      function f(_3a5021004442, _271dc742b5dc, {blocked: _4a43e396a3cb, upgrade: _333044d6fd1e, blocking: _5bd11b3c31ff, terminated: _b6a548cb3b03} = {}) {
        let _97105b6bb452 = indexedDB.open(_3a5021004442, _271dc742b5dc), _b5b9693d9c71 = h(_97105b6bb452);
        return _333044d6fd1e && _97105b6bb452.addEventListener("upgradeneeded", _3a5021004442 => {
          _333044d6fd1e(h(_97105b6bb452.result), _3a5021004442.oldVersion, _3a5021004442.newVersion, h(_97105b6bb452.transaction), _3a5021004442);
        }), _4a43e396a3cb && _97105b6bb452.addEventListener("blocked", _3a5021004442 => _4a43e396a3cb(_3a5021004442.oldVersion, _3a5021004442.newVersion, _3a5021004442)), 
        _b5b9693d9c71.then(_3a5021004442 => {
          _b6a548cb3b03 && _3a5021004442.addEventListener("close", () => _b6a548cb3b03()), 
          _5bd11b3c31ff && _3a5021004442.addEventListener("versionchange", _3a5021004442 => _5bd11b3c31ff(_3a5021004442.oldVersion, _3a5021004442.newVersion, _3a5021004442));
        }).catch(() => {}), _b5b9693d9c71;
      }
      let _ab0a35acfb91 = [ "get", "getKey", "getAll", "getAllKeys", "count" ], _5e52f02aa711 = [ "put", "add", "delete", "clear" ], _d5aac0c61341 = new Map;
      function b(_3a5021004442, _271dc742b5dc) {
        if (!(_3a5021004442 instanceof IDBDatabase && !(_271dc742b5dc in _3a5021004442) && "string" == typeof _271dc742b5dc)) return;
        if (_d5aac0c61341.get(_271dc742b5dc)) return _d5aac0c61341.get(_271dc742b5dc);
        let _4a43e396a3cb = _271dc742b5dc.replace(/FromIndex$/, ""), _333044d6fd1e = _271dc742b5dc !== _4a43e396a3cb, _5bd11b3c31ff = _5e52f02aa711.includes(_4a43e396a3cb);
        if (!(_4a43e396a3cb in (_333044d6fd1e ? IDBIndex : IDBObjectStore).prototype) || !(_5bd11b3c31ff || _ab0a35acfb91.includes(_4a43e396a3cb))) return;
        let a = async function(_3a5021004442, ..._271dc742b5dc) {
          let _b6a548cb3b03 = this.transaction(_3a5021004442, _5bd11b3c31ff ? "readwrite" : "readonly"), _97105b6bb452 = _b6a548cb3b03.store;
          return _333044d6fd1e && (_97105b6bb452 = _97105b6bb452.index(_271dc742b5dc.shift())), 
          (await Promise.all([ _97105b6bb452[_4a43e396a3cb](..._271dc742b5dc), _5bd11b3c31ff && _b6a548cb3b03.done ]))[0];
        };
        return _d5aac0c61341.set(_271dc742b5dc, a), a;
      }
      _188ac31e3f35 = {
        ..._b6a548cb3b03 = _188ac31e3f35,
        get: (_3a5021004442, _271dc742b5dc, _4a43e396a3cb) => b(_3a5021004442, _271dc742b5dc) || _b6a548cb3b03.get(_3a5021004442, _271dc742b5dc, _4a43e396a3cb),
        has: (_3a5021004442, _271dc742b5dc) => !!b(_3a5021004442, _271dc742b5dc) || _b6a548cb3b03.has(_3a5021004442, _271dc742b5dc)
      };
      let _8510cd3a9582 = [ "continue", "continuePrimaryKey", "advance" ], _f689ea2de11c = {}, _9da61e711a2c = new WeakMap, _8ab3b044b196 = new WeakMap, _f00bc205fdf3 = {
        get(_3a5021004442, _271dc742b5dc) {
          if (!_8510cd3a9582.includes(_271dc742b5dc)) return _3a5021004442[_271dc742b5dc];
          let _4a43e396a3cb = _f689ea2de11c[_271dc742b5dc];
          return _4a43e396a3cb || (_4a43e396a3cb = _f689ea2de11c[_271dc742b5dc] = function(..._3a5021004442) {
            _9da61e711a2c.set(this, _8ab3b044b196.get(this)[_271dc742b5dc](..._3a5021004442));
          }), _4a43e396a3cb;
        }
      };
      async function* T(..._3a5021004442) {
        let _271dc742b5dc = this;
        if (_271dc742b5dc instanceof IDBCursor || (_271dc742b5dc = await _271dc742b5dc.openCursor(..._3a5021004442)), 
        !_271dc742b5dc) return;
        let _4a43e396a3cb = new Proxy(_271dc742b5dc, _f00bc205fdf3);
        for (_8ab3b044b196.set(_4a43e396a3cb, _271dc742b5dc), _f1f27b0dceb6.set(_4a43e396a3cb, p(_271dc742b5dc)); _271dc742b5dc; ) yield _4a43e396a3cb, 
        _271dc742b5dc = await (_9da61e711a2c.get(_4a43e396a3cb) || _271dc742b5dc.continue()), 
        _9da61e711a2c.delete(_4a43e396a3cb);
      }
      function k(_3a5021004442, _271dc742b5dc) {
        return _271dc742b5dc === Symbol.asyncIterator && o(_3a5021004442, [ IDBIndex, IDBObjectStore, IDBCursor ]) || "iterate" === _271dc742b5dc && o(_3a5021004442, [ IDBIndex, IDBObjectStore ]);
      }
      _188ac31e3f35 = {
        ..._97105b6bb452 = _188ac31e3f35,
        get: (_3a5021004442, _271dc742b5dc, _4a43e396a3cb) => k(_3a5021004442, _271dc742b5dc) ? T : _97105b6bb452.get(_3a5021004442, _271dc742b5dc, _4a43e396a3cb),
        has: (_3a5021004442, _271dc742b5dc) => k(_3a5021004442, _271dc742b5dc) || _97105b6bb452.has(_3a5021004442, _271dc742b5dc)
      };
    },
    1652: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      _4a43e396a3cb.d(_271dc742b5dc, {
        N: () => n
      });
      function n() {
        return "10000000000".replace(/[018]/g, _3a5021004442 => (_3a5021004442 ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> _3a5021004442 / 4).toString(16));
      }
    },
    3907: function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
      let _333044d6fd1e;
      _4a43e396a3cb.d(_271dc742b5dc, {
        LW: () => b,
        QR: () => x
      });
      var _5bd11b3c31ff = _4a43e396a3cb(1652);
      function a(_3a5021004442, _271dc742b5dc) {
        try {
          return _3a5021004442.apply(this, _271dc742b5dc);
        } catch (_3a5021004442) {
          let _271dc742b5dc, _4a43e396a3cb = (_271dc742b5dc = _333044d6fd1e.__externref_table_alloc(), 
          _333044d6fd1e.__wbindgen_export_2.set(_271dc742b5dc, _3a5021004442), _271dc742b5dc);
          _333044d6fd1e.__wbindgen_exn_store(_4a43e396a3cb);
        }
      }
      let _b6a548cb3b03 = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
      }) : {
        decode: () => {
          throw Error("TextDecoder not available");
        }
      };
      "undefined" != typeof TextDecoder && _b6a548cb3b03.decode();
      let _97105b6bb452 = null;
      function l() {
        return (null === _97105b6bb452 || 0 === _97105b6bb452.byteLength) && (_97105b6bb452 = new Uint8Array(_333044d6fd1e.memory.buffer)), 
        _97105b6bb452;
      }
      function c(_3a5021004442, _271dc742b5dc) {
        return _3a5021004442 >>>= 0, _b6a548cb3b03.decode(l().subarray(_3a5021004442, _3a5021004442 + _271dc742b5dc));
      }
      let _b5b9693d9c71 = 0, _aabd55df2659 = "undefined" != typeof TextEncoder ? new TextEncoder("utf-8") : {
        encode: () => {
          throw Error("TextEncoder not available");
        }
      }, _f1f27b0dceb6 = "function" == typeof _aabd55df2659.encodeInto ? function(_3a5021004442, _271dc742b5dc) {
        return _aabd55df2659.encodeInto(_3a5021004442, _271dc742b5dc);
      } : function(_3a5021004442, _271dc742b5dc) {
        let _4a43e396a3cb = _aabd55df2659.encode(_3a5021004442);
        return _271dc742b5dc.set(_4a43e396a3cb), {
          read: _3a5021004442.length,
          written: _4a43e396a3cb.length
        };
      };
      function p(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
        if (void 0 === _4a43e396a3cb) {
          let _4a43e396a3cb = _aabd55df2659.encode(_3a5021004442), _333044d6fd1e = _271dc742b5dc(_4a43e396a3cb.length, 1) >>> 0;
          return l().subarray(_333044d6fd1e, _333044d6fd1e + _4a43e396a3cb.length).set(_4a43e396a3cb), 
          _b5b9693d9c71 = _4a43e396a3cb.length, _333044d6fd1e;
        }
        let _333044d6fd1e = _3a5021004442.length, _5bd11b3c31ff = _271dc742b5dc(_333044d6fd1e, 1) >>> 0, _b6a548cb3b03 = l(), _97105b6bb452 = 0;
        for (;_97105b6bb452 < _333044d6fd1e; _97105b6bb452++) {
          let _271dc742b5dc = _3a5021004442.charCodeAt(_97105b6bb452);
          if (_271dc742b5dc > 127) break;
          _b6a548cb3b03[_5bd11b3c31ff + _97105b6bb452] = _271dc742b5dc;
        }
        if (_97105b6bb452 !== _333044d6fd1e) {
          0 !== _97105b6bb452 && (_3a5021004442 = _3a5021004442.slice(_97105b6bb452)), _5bd11b3c31ff = _4a43e396a3cb(_5bd11b3c31ff, _333044d6fd1e, _333044d6fd1e = _97105b6bb452 + 3 * _3a5021004442.length, 1) >>> 0;
          let _271dc742b5dc = _f1f27b0dceb6(_3a5021004442, l().subarray(_5bd11b3c31ff + _97105b6bb452, _5bd11b3c31ff + _333044d6fd1e));
          _97105b6bb452 += _271dc742b5dc.written, _5bd11b3c31ff = _4a43e396a3cb(_5bd11b3c31ff, _333044d6fd1e, _97105b6bb452, 1) >>> 0;
        }
        return _b5b9693d9c71 = _97105b6bb452, _5bd11b3c31ff;
      }
      let _188ac31e3f35 = null;
      function g() {
        return (null === _188ac31e3f35 || !0 === _188ac31e3f35.buffer.detached || void 0 === _188ac31e3f35.buffer.detached && _188ac31e3f35.buffer !== _333044d6fd1e.memory.buffer) && (_188ac31e3f35 = new DataView(_333044d6fd1e.memory.buffer)), 
        _188ac31e3f35;
      }
      function m(_3a5021004442) {
        let _271dc742b5dc = _333044d6fd1e.__wbindgen_export_2.get(_3a5021004442);
        return _333044d6fd1e.__externref_table_dealloc(_3a5021004442), _271dc742b5dc;
      }
      let _ab0a35acfb91 = "undefined" == typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry(_3a5021004442 => _333044d6fd1e.__wbg_rewriter_free(_3a5021004442 >>> 0, 1));
      class b {
        __destroy_into_raw() {
          let _3a5021004442 = this.__wbg_ptr;
          return this.__wbg_ptr = 0, _ab0a35acfb91.unregister(this), _3a5021004442;
        }
        free() {
          let _3a5021004442 = this.__destroy_into_raw();
          _333044d6fd1e.__wbg_rewriter_free(_3a5021004442, 0);
        }
        rewrite_js(_3a5021004442, _271dc742b5dc, _4a43e396a3cb, _5bd11b3c31ff) {
          let _b6a548cb3b03 = p(_3a5021004442, _333044d6fd1e.__wbindgen_malloc, _333044d6fd1e.__wbindgen_realloc), _97105b6bb452 = _b5b9693d9c71, _aabd55df2659 = p(_271dc742b5dc, _333044d6fd1e.__wbindgen_malloc, _333044d6fd1e.__wbindgen_realloc), _f1f27b0dceb6 = _b5b9693d9c71, _188ac31e3f35 = p(_4a43e396a3cb, _333044d6fd1e.__wbindgen_malloc, _333044d6fd1e.__wbindgen_realloc), _ab0a35acfb91 = _b5b9693d9c71, _5e52f02aa711 = _333044d6fd1e.rewriter_rewrite_js(this.__wbg_ptr, _b6a548cb3b03, _97105b6bb452, _aabd55df2659, _f1f27b0dceb6, _188ac31e3f35, _ab0a35acfb91, _5bd11b3c31ff);
          if (_5e52f02aa711[2]) throw m(_5e52f02aa711[1]);
          return m(_5e52f02aa711[0]);
        }
        rewrite_js_bytes(_3a5021004442, _271dc742b5dc, _4a43e396a3cb, _5bd11b3c31ff) {
          let _b6a548cb3b03, _97105b6bb452 = (_b6a548cb3b03 = (0, _333044d6fd1e.__wbindgen_malloc)(+_3a5021004442.length, 1) >>> 0, 
          l().set(_3a5021004442, _b6a548cb3b03 / 1), _b5b9693d9c71 = _3a5021004442.length, 
          _b6a548cb3b03), _aabd55df2659 = _b5b9693d9c71, _f1f27b0dceb6 = p(_271dc742b5dc, _333044d6fd1e.__wbindgen_malloc, _333044d6fd1e.__wbindgen_realloc), _188ac31e3f35 = _b5b9693d9c71, _ab0a35acfb91 = p(_4a43e396a3cb, _333044d6fd1e.__wbindgen_malloc, _333044d6fd1e.__wbindgen_realloc), _5e52f02aa711 = _b5b9693d9c71, _d5aac0c61341 = _333044d6fd1e.rewriter_rewrite_js_bytes(this.__wbg_ptr, _97105b6bb452, _aabd55df2659, _f1f27b0dceb6, _188ac31e3f35, _ab0a35acfb91, _5e52f02aa711, _5bd11b3c31ff);
          if (_d5aac0c61341[2]) throw m(_d5aac0c61341[1]);
          return m(_d5aac0c61341[0]);
        }
        constructor(_3a5021004442) {
          const _271dc742b5dc = _333044d6fd1e.rewriter_new(_3a5021004442);
          if (_271dc742b5dc[2]) throw m(_271dc742b5dc[1]);
          return this.__wbg_ptr = _271dc742b5dc[0] >>> 0, _ab0a35acfb91.register(this, this.__wbg_ptr, this), 
          this;
        }
      }
      async function w(_3a5021004442, _271dc742b5dc) {
        if ("function" == typeof Response && _3a5021004442 instanceof Response) {
          if ("function" == typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(_3a5021004442, _271dc742b5dc);
          } catch (_271dc742b5dc) {
            if ("application/wasm" != _3a5021004442.headers.get("Content-Type")) console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", _271dc742b5dc); else throw _271dc742b5dc;
          }
          let _4a43e396a3cb = await _3a5021004442.arrayBuffer();
          return await WebAssembly.instantiate(_4a43e396a3cb, _271dc742b5dc);
        }
        {
          let _4a43e396a3cb = await WebAssembly.instantiate(_3a5021004442, _271dc742b5dc);
          return _4a43e396a3cb instanceof WebAssembly.Instance ? {
            instance: _4a43e396a3cb,
            module: _3a5021004442
          } : _4a43e396a3cb;
        }
      }
      function S() {
        let _3a5021004442 = {};
        return _3a5021004442.wbg = {}, _3a5021004442.wbg.__wbg_buffer_609cc3eee51ed158 = function(_3a5021004442) {
          return _3a5021004442.buffer;
        }, _3a5021004442.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
          return a(function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
            return _3a5021004442.call(_271dc742b5dc, _4a43e396a3cb);
          }, arguments);
        }, _3a5021004442.wbg.__wbg_call_833bed5770ea2041 = function() {
          return a(function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb, _333044d6fd1e) {
            return _3a5021004442.call(_271dc742b5dc, _4a43e396a3cb, _333044d6fd1e);
          }, arguments);
        }, _3a5021004442.wbg.__wbg_get_67b2ba62fc30de12 = function() {
          return a(function(_3a5021004442, _271dc742b5dc) {
            return Reflect.get(_3a5021004442, _271dc742b5dc);
          }, arguments);
        }, _3a5021004442.wbg.__wbg_new_405e22f390576ce2 = function() {
          return {};
        }, _3a5021004442.wbg.__wbg_new_78feb108b6472713 = function() {
          return [];
        }, _3a5021004442.wbg.__wbg_new_9ffbe0a71eff35e3 = function() {
          return a(function(_3a5021004442, _271dc742b5dc) {
            return new URL(c(_3a5021004442, _271dc742b5dc));
          }, arguments);
        }, _3a5021004442.wbg.__wbg_new_a12002a7f91c75be = function(_3a5021004442) {
          return new Uint8Array(_3a5021004442);
        }, _3a5021004442.wbg.__wbg_newwithbase_161c299e7a34e2eb = function() {
          return a(function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb, _333044d6fd1e) {
            return new URL(c(_3a5021004442, _271dc742b5dc), c(_4a43e396a3cb, _333044d6fd1e));
          }, arguments);
        }, _3a5021004442.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
          return new Uint8Array(_3a5021004442, _271dc742b5dc >>> 0, _4a43e396a3cb >>> 0);
        }, _3a5021004442.wbg.__wbg_scramtag_3a255d78b157986d = function(_3a5021004442) {
          let _271dc742b5dc = p((0, _5bd11b3c31ff.N)(), _333044d6fd1e.__wbindgen_malloc, _333044d6fd1e.__wbindgen_realloc), _4a43e396a3cb = _b5b9693d9c71;
          g().setInt32(_3a5021004442 + 4, _4a43e396a3cb, !0), g().setInt32(_3a5021004442 + 0, _271dc742b5dc, !0);
        }, _3a5021004442.wbg.__wbg_set_bb8cecf6a62b9f46 = function() {
          return a(function(_3a5021004442, _271dc742b5dc, _4a43e396a3cb) {
            return Reflect.set(_3a5021004442, _271dc742b5dc, _4a43e396a3cb);
          }, arguments);
        }, _3a5021004442.wbg.__wbg_toString_5285597960676b7b = function(_3a5021004442) {
          return _3a5021004442.toString();
        }, _3a5021004442.wbg.__wbg_toString_c813bbd34d063839 = function(_3a5021004442) {
          return _3a5021004442.toString();
        }, _3a5021004442.wbg.__wbindgen_boolean_get = function(_3a5021004442) {
          return "boolean" == typeof _3a5021004442 ? +!!_3a5021004442 : 2;
        }, _3a5021004442.wbg.__wbindgen_error_new = function(_3a5021004442, _271dc742b5dc) {
          return Error(c(_3a5021004442, _271dc742b5dc));
        }, _3a5021004442.wbg.__wbindgen_init_externref_table = function() {
          let _3a5021004442 = _333044d6fd1e.__wbindgen_export_2, _271dc742b5dc = _3a5021004442.grow(4);
          _3a5021004442.set(0, void 0), _3a5021004442.set(_271dc742b5dc + 0, void 0), _3a5021004442.set(_271dc742b5dc + 1, null), 
          _3a5021004442.set(_271dc742b5dc + 2, !0), _3a5021004442.set(_271dc742b5dc + 3, !1);
        }, _3a5021004442.wbg.__wbindgen_is_function = function(_3a5021004442) {
          return "function" == typeof _3a5021004442;
        }, _3a5021004442.wbg.__wbindgen_memory = function() {
          return _333044d6fd1e.memory;
        }, _3a5021004442.wbg.__wbindgen_string_get = function(_3a5021004442, _271dc742b5dc) {
          let _4a43e396a3cb = "string" == typeof _271dc742b5dc ? _271dc742b5dc : void 0;
          var _5bd11b3c31ff = null == _4a43e396a3cb ? 0 : p(_4a43e396a3cb, _333044d6fd1e.__wbindgen_malloc, _333044d6fd1e.__wbindgen_realloc), _b6a548cb3b03 = _b5b9693d9c71;
          g().setInt32(_3a5021004442 + 4, _b6a548cb3b03, !0), g().setInt32(_3a5021004442 + 0, _5bd11b3c31ff, !0);
        }, _3a5021004442.wbg.__wbindgen_string_new = function(_3a5021004442, _271dc742b5dc) {
          return c(_3a5021004442, _271dc742b5dc);
        }, _3a5021004442.wbg.__wbindgen_throw = function(_3a5021004442, _271dc742b5dc) {
          throw Error(c(_3a5021004442, _271dc742b5dc));
        }, _3a5021004442;
      }
      function v(_3a5021004442, _271dc742b5dc) {
        return _333044d6fd1e = _3a5021004442.exports, E.__wbindgen_wasm_module = _271dc742b5dc, 
        _188ac31e3f35 = null, _97105b6bb452 = null, _333044d6fd1e.__wbindgen_start(), _333044d6fd1e;
      }
      function x(_3a5021004442) {
        if (void 0 !== _333044d6fd1e) return _333044d6fd1e;
        void 0 !== _3a5021004442 && (Object.getPrototypeOf(_3a5021004442) === Object.prototype ? ({module: _3a5021004442} = _3a5021004442) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
        let _271dc742b5dc = S();
        return _3a5021004442 instanceof WebAssembly.Module || (_3a5021004442 = new WebAssembly.Module(_3a5021004442)), 
        v(new WebAssembly.Instance(_3a5021004442, _271dc742b5dc), _3a5021004442);
      }
      async function E(_3a5021004442) {
        if (void 0 !== _333044d6fd1e) return _333044d6fd1e;
        void 0 !== _3a5021004442 && (Object.getPrototypeOf(_3a5021004442) === Object.prototype ? ({module_or_path: _3a5021004442} = _3a5021004442) : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), 
        void 0 === _3a5021004442 && (_3a5021004442 = new URL("wasm_bg.wasm", ""));
        let _271dc742b5dc = S();
        ("string" == typeof _3a5021004442 || "function" == typeof Request && _3a5021004442 instanceof Request || "function" == typeof URL && _3a5021004442 instanceof URL) && (_3a5021004442 = fetch(_3a5021004442));
        let {instance: _4a43e396a3cb, module: _5bd11b3c31ff} = await w(await _3a5021004442, _271dc742b5dc);
        return v(_4a43e396a3cb, _5bd11b3c31ff);
      }
    }
  }, _271dc742b5dc = {};
  function r(_4a43e396a3cb) {
    var _333044d6fd1e = _271dc742b5dc[_4a43e396a3cb];
    if (void 0 !== _333044d6fd1e) return _333044d6fd1e.exports;
    var _5bd11b3c31ff = _271dc742b5dc[_4a43e396a3cb] = {
      exports: {}
    };
    return _3a5021004442[_4a43e396a3cb](_5bd11b3c31ff, _5bd11b3c31ff.exports, r), _5bd11b3c31ff.exports;
  }
  r.n = _3a5021004442 => {
    var _271dc742b5dc = _3a5021004442 && _3a5021004442.__esModule ? () => _3a5021004442.default : () => _3a5021004442;
    return r.d(_271dc742b5dc, {
      a: _271dc742b5dc
    }), _271dc742b5dc;
  }, r.d = (_3a5021004442, _271dc742b5dc) => {
    for (var _4a43e396a3cb in _271dc742b5dc) r.o(_271dc742b5dc, _4a43e396a3cb) && !r.o(_3a5021004442, _4a43e396a3cb) && Object.defineProperty(_3a5021004442, _4a43e396a3cb, {
      enumerable: !0,
      get: _271dc742b5dc[_4a43e396a3cb]
    });
  }, r.o = (_3a5021004442, _271dc742b5dc) => Object.prototype.hasOwnProperty.call(_3a5021004442, _271dc742b5dc), 
  r.r = _3a5021004442 => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(_3a5021004442, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(_3a5021004442, "__esModule", {
      value: !0
    });
  }, globalThis.$studyjetRequire = function(_3a5021004442) {
    return r(409)(_3a5021004442);
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
