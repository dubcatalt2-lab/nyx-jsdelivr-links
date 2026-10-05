(() => {
  var _8eeac2780070 = {
    4322: function(_8eeac2780070) {
      var _d975dc811624 = {
        decodeValues: !0,
        map: !1,
        silent: !1
      };
      function r(_8eeac2780070) {
        return "string" == typeof _8eeac2780070 && !!_8eeac2780070.trim();
      }
      function n(_8eeac2780070, _ebf358b75a0b) {
        var _fae22887acec, _bbaa3660c6e1, _0486c8e5ad30, _c5b4b25078d6, _4d778195d27f = _8eeac2780070.split(";").filter(r), _9fc5b21180bb = (_fae22887acec = _4d778195d27f.shift(), 
        _bbaa3660c6e1 = "", _0486c8e5ad30 = "", (_c5b4b25078d6 = _fae22887acec.split("=")).length > 1 ? (_bbaa3660c6e1 = _c5b4b25078d6.shift(), 
        _0486c8e5ad30 = _c5b4b25078d6.join("=")) : _0486c8e5ad30 = _fae22887acec, {
          name: _bbaa3660c6e1,
          value: _0486c8e5ad30
        }), _6c0b4fee9c25 = _9fc5b21180bb.name, _fb4ea2a6f85c = _9fc5b21180bb.value;
        _ebf358b75a0b = _ebf358b75a0b ? Object.assign({}, _d975dc811624, _ebf358b75a0b) : _d975dc811624;
        try {
          _fb4ea2a6f85c = _ebf358b75a0b.decodeValues ? decodeURIComponent(_fb4ea2a6f85c) : _fb4ea2a6f85c;
        } catch (_8eeac2780070) {
          console.error("set-cookie-parser encountered an error while decoding a cookie with value '" + _fb4ea2a6f85c + "'. Set options.decodeValues to false to disable this feature.", _8eeac2780070);
        }
        var _fe5e93e0a07e = {
          name: _6c0b4fee9c25,
          value: _fb4ea2a6f85c
        };
        return _4d778195d27f.forEach(function(_8eeac2780070) {
          var _d975dc811624 = _8eeac2780070.split("="), _ebf358b75a0b = _d975dc811624.shift().trimLeft().toLowerCase(), _fae22887acec = _d975dc811624.join("=");
          "expires" === _ebf358b75a0b ? _fe5e93e0a07e.expires = new Date(_fae22887acec) : "max-age" === _ebf358b75a0b ? _fe5e93e0a07e.maxAge = parseInt(_fae22887acec, 10) : "secure" === _ebf358b75a0b ? _fe5e93e0a07e.secure = !0 : "httponly" === _ebf358b75a0b ? _fe5e93e0a07e.httpOnly = !0 : "samesite" === _ebf358b75a0b ? _fe5e93e0a07e.sameSite = _fae22887acec : "partitioned" === _ebf358b75a0b ? _fe5e93e0a07e.partitioned = !0 : _fe5e93e0a07e[_ebf358b75a0b] = _fae22887acec;
        }), _fe5e93e0a07e;
      }
      function i(_8eeac2780070, _ebf358b75a0b) {
        if (_ebf358b75a0b = _ebf358b75a0b ? Object.assign({}, _d975dc811624, _ebf358b75a0b) : _d975dc811624, 
        !_8eeac2780070) if (!_ebf358b75a0b.map) return []; else return {};
        if (_8eeac2780070.headers) if ("function" == typeof _8eeac2780070.headers.getSetCookie) _8eeac2780070 = _8eeac2780070.headers.getSetCookie(); else if (_8eeac2780070.headers["set-cookie"]) _8eeac2780070 = _8eeac2780070.headers["set-cookie"]; else {
          var _fae22887acec = _8eeac2780070.headers[Object.keys(_8eeac2780070.headers).find(function(_8eeac2780070) {
            return "set-cookie" === _8eeac2780070.toLowerCase();
          })];
          _fae22887acec || !_8eeac2780070.headers.cookie || _ebf358b75a0b.silent || console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."), 
          _8eeac2780070 = _fae22887acec;
        }
        return (Array.isArray(_8eeac2780070) || (_8eeac2780070 = [ _8eeac2780070 ]), _ebf358b75a0b.map) ? _8eeac2780070.filter(r).reduce(function(_8eeac2780070, _d975dc811624) {
          var _fae22887acec = n(_d975dc811624, _ebf358b75a0b);
          return _8eeac2780070[_fae22887acec.name] = _fae22887acec, _8eeac2780070;
        }, {}) : _8eeac2780070.filter(r).map(function(_8eeac2780070) {
          return n(_8eeac2780070, _ebf358b75a0b);
        });
      }
      _8eeac2780070.exports = i, _8eeac2780070.exports.parse = i, _8eeac2780070.exports.parseString = n, 
      _8eeac2780070.exports.splitCookiesString = function(_8eeac2780070) {
        if (Array.isArray(_8eeac2780070)) return _8eeac2780070;
        if ("string" != typeof _8eeac2780070) return [];
        var _d975dc811624, _ebf358b75a0b, _fae22887acec, _bbaa3660c6e1, _0486c8e5ad30, _c5b4b25078d6 = [], _4d778195d27f = 0;
        function l() {
          for (;_4d778195d27f < _8eeac2780070.length && /\s/.test(_8eeac2780070.charAt(_4d778195d27f)); ) _4d778195d27f += 1;
          return _4d778195d27f < _8eeac2780070.length;
        }
        for (;_4d778195d27f < _8eeac2780070.length; ) {
          for (_d975dc811624 = _4d778195d27f, _0486c8e5ad30 = !1; l(); ) if ("," === (_ebf358b75a0b = _8eeac2780070.charAt(_4d778195d27f))) {
            for (_fae22887acec = _4d778195d27f, _4d778195d27f += 1, l(), _bbaa3660c6e1 = _4d778195d27f; _4d778195d27f < _8eeac2780070.length && "=" !== (_ebf358b75a0b = _8eeac2780070.charAt(_4d778195d27f)) && ";" !== _ebf358b75a0b && "," !== _ebf358b75a0b; ) _4d778195d27f += 1;
            _4d778195d27f < _8eeac2780070.length && "=" === _8eeac2780070.charAt(_4d778195d27f) ? (_0486c8e5ad30 = !0, 
            _4d778195d27f = _bbaa3660c6e1, _c5b4b25078d6.push(_8eeac2780070.substring(_d975dc811624, _fae22887acec)), 
            _d975dc811624 = _4d778195d27f) : _4d778195d27f = _fae22887acec + 1;
          } else _4d778195d27f += 1;
          (!_0486c8e5ad30 || _4d778195d27f >= _8eeac2780070.length) && _c5b4b25078d6.push(_8eeac2780070.substring(_d975dc811624, _8eeac2780070.length));
        }
        return _c5b4b25078d6;
      };
    },
    7302: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      var _fae22887acec = {
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
      function i(_8eeac2780070) {
        return _ebf358b75a0b(a(_8eeac2780070));
      }
      function a(_8eeac2780070) {
        if (!_ebf358b75a0b.o(_fae22887acec, _8eeac2780070)) {
          var _d975dc811624 = Error("Cannot find module '" + _8eeac2780070 + "'");
          throw _d975dc811624.code = "MODULE_NOT_FOUND", _d975dc811624;
        }
        return _fae22887acec[_8eeac2780070];
      }
      i.keys = function() {
        return Object.keys(_fae22887acec);
      }, i.resolve = a, _8eeac2780070.exports = i, i.id = 7302;
    },
    409: function(_8eeac2780070) {
      function t(_8eeac2780070) {
        var _d975dc811624 = Error("Cannot find module '" + _8eeac2780070 + "'");
        throw _d975dc811624.code = "MODULE_NOT_FOUND", _d975dc811624;
      }
      t.keys = () => [], t.resolve = t, t.id = 409, _8eeac2780070.exports = t;
    },
    336: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        StudyJetClient: () => g
      });
      var _fae22887acec = _ebf358b75a0b(2794), _bbaa3660c6e1 = _ebf358b75a0b(94), _0486c8e5ad30 = _ebf358b75a0b(3696), _c5b4b25078d6 = _ebf358b75a0b(581), _4d778195d27f = _ebf358b75a0b(1862), _9fc5b21180bb = _ebf358b75a0b(1472), _6c0b4fee9c25 = _ebf358b75a0b(37), _fb4ea2a6f85c = _ebf358b75a0b(3831), _fe5e93e0a07e = _ebf358b75a0b(1323), _11590423c4ed = _ebf358b75a0b(1229), _8a98072c4f6f = _ebf358b75a0b(4110), _a3a9859aeb07 = _ebf358b75a0b(8665).A;
      class g {
        global;
        locationProxy;
        serviceWorker;
        bare;
        natives;
        descriptors;
        wrapfn;
        cookieStore=new _fb4ea2a6f85c.k;
        eventcallbacks=new Map;
        meta;
        box;
        constructor(_8eeac2780070) {
          if (this.global = _8eeac2780070, _fae22887acec.pX in _8eeac2780070) throw console.error("attempted to initialize a studyjet client, but one is already loaded - this is very bad"), 
          Error();
          if (_fe5e93e0a07e.iswindow) {
            try {
              _fae22887acec.pX in _8eeac2780070.parent && (this.box = _8eeac2780070.parent[_fae22887acec.pX].box);
            } catch {}
            try {
              _fae22887acec.pX in _8eeac2780070.top && (this.box = _8eeac2780070.top[_fae22887acec.pX].box);
            } catch {}
            try {
              _8eeac2780070.opener && _fae22887acec.pX in _8eeac2780070.opener && (this.box = _8eeac2780070.opener[_fae22887acec.pX].box);
            } catch {}
            this.box || (_a3a9859aeb07.warn("Creating SingletonBox"), this.box = new _11590423c4ed.SingletonBox(this));
          } else this.box = new _11590423c4ed.SingletonBox(this);
          this.box.registerClient(this, _8eeac2780070), _fe5e93e0a07e.iswindow ? this.bare = new _8a98072c4f6f.Ay : this.bare = new _8a98072c4f6f.Ay(new Promise(_8eeac2780070 => {
            addEventListener("message", ({data: _d975dc811624}) => {
              "object" == typeof _d975dc811624 && "$studyjet$type" in _d975dc811624 && "baremuxinit" === _d975dc811624.$studyjet$type && _8eeac2780070(_d975dc811624.port);
            });
          })), this.serviceWorker = this.global.navigator.serviceWorker, _fe5e93e0a07e.iswindow && (_8eeac2780070.document[_fae22887acec.pX] = this), 
          this.wrapfn = (0, _c5b4b25078d6.createWrapFn)(this, _8eeac2780070), this.natives = {
            store: new Proxy({}, {
              get: (_8eeac2780070, _d975dc811624) => {
                if (_d975dc811624 in _8eeac2780070) return _8eeac2780070[_d975dc811624];
                let _ebf358b75a0b = _d975dc811624.split("."), _fae22887acec = _ebf358b75a0b.pop(), _bbaa3660c6e1 = _ebf358b75a0b.reduce((_8eeac2780070, _d975dc811624) => _8eeac2780070?.[_d975dc811624], this.global);
                if (!_bbaa3660c6e1) return;
                let _0486c8e5ad30 = Reflect.get(_bbaa3660c6e1, _fae22887acec);
                return _8eeac2780070[_d975dc811624] = _0486c8e5ad30, _8eeac2780070[_d975dc811624];
              }
            }),
            construct(_8eeac2780070, ..._d975dc811624) {
              let _ebf358b75a0b = this.store[_8eeac2780070];
              return _ebf358b75a0b ? new _ebf358b75a0b(..._d975dc811624) : null;
            },
            call(_8eeac2780070, _d975dc811624, ..._ebf358b75a0b) {
              let _fae22887acec = this.store[_8eeac2780070];
              return _fae22887acec ? _fae22887acec.call(_d975dc811624, ..._ebf358b75a0b) : null;
            }
          }, this.descriptors = {
            store: new Proxy({}, {
              get: (_8eeac2780070, _ebf358b75a0b) => {
                if (_ebf358b75a0b in _8eeac2780070) return _8eeac2780070[_ebf358b75a0b];
                let _fae22887acec = _ebf358b75a0b.split("."), _bbaa3660c6e1 = _fae22887acec.pop(), _0486c8e5ad30 = _fae22887acec.reduce((_8eeac2780070, _d975dc811624) => _8eeac2780070?.[_d975dc811624], this.global);
                if (!_0486c8e5ad30) return;
                let _c5b4b25078d6 = _d975dc811624.natives.call("Object.getOwnPropertyDescriptor", null, _0486c8e5ad30, _bbaa3660c6e1);
                return _8eeac2780070[_ebf358b75a0b] = _c5b4b25078d6, _8eeac2780070[_ebf358b75a0b];
              }
            }),
            get(_8eeac2780070, _d975dc811624) {
              let _ebf358b75a0b = this.store[_8eeac2780070];
              return _ebf358b75a0b ? _ebf358b75a0b.get.call(_d975dc811624) : null;
            },
            set(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
              let _fae22887acec = this.store[_8eeac2780070];
              if (!_fae22887acec) return null;
              _fae22887acec.set.call(_d975dc811624, _ebf358b75a0b);
            }
          };
          const _d975dc811624 = this;
          this.meta = {
            get origin() {
              return _d975dc811624.url;
            },
            get base() {
              if (_fe5e93e0a07e.iswindow) {
                const _8eeac2780070 = _d975dc811624.natives.call("Document.prototype.querySelector", _d975dc811624.global.document, "base");
                if (_8eeac2780070) {
                  let _ebf358b75a0b = _8eeac2780070.getAttribute("href");
                  if (!_ebf358b75a0b) return _d975dc811624.url;
                  const _fae22887acec = _ebf358b75a0b.indexOf("#");
                  if (!(_ebf358b75a0b = _ebf358b75a0b.substring(0, -1 === _fae22887acec ? void 0 : _fae22887acec))) return _d975dc811624.url;
                  return new URL(_ebf358b75a0b, _d975dc811624.url.origin);
                }
              }
              return _d975dc811624.url;
            },
            get topFrameName() {
              if (!_fe5e93e0a07e.iswindow) throw Error("topFrameName was called from a worker?");
              let _8eeac2780070 = _d975dc811624.global;
              if (_8eeac2780070.parent.window == _8eeac2780070.window) return null;
              for (;_8eeac2780070.parent.window !== _8eeac2780070.window && _8eeac2780070.parent.window[_fae22887acec.pX]; ) _8eeac2780070 = _8eeac2780070.parent.window;
              const _ebf358b75a0b = _8eeac2780070[_fae22887acec.pX].descriptors.get("window.frameElement", _8eeac2780070);
              if (!_ebf358b75a0b) return null;
              if (!_ebf358b75a0b.name) return console.error("YOU NEED TO USE `new StudyJetFrame()`! DIRECT IFRAMES WILL NOT WORK"), 
              null;
              return _ebf358b75a0b.name;
            },
            get parentFrameName() {
              if (!_fe5e93e0a07e.iswindow) throw Error("parentFrameName was called from a worker?");
              if (_d975dc811624.global.parent.window == _d975dc811624.global.window) return null;
              let _8eeac2780070 = _d975dc811624.global.parent.window;
              if (_8eeac2780070[_fae22887acec.pX]) {
                const _d975dc811624 = _8eeac2780070[_fae22887acec.pX].descriptors.get("window.frameElement", _8eeac2780070);
                if (!_d975dc811624) return null;
                if (!_d975dc811624.name) return console.error("YOU NEED TO USE `new StudyJetFrame()`! DIRECT IFRAMES WILL NOT WORK"), 
                null;
                return _d975dc811624.name;
              }
              {
                const _8eeac2780070 = _d975dc811624.descriptors.get("window.frameElement", _d975dc811624.global);
                if (!_8eeac2780070.name) return console.error("YOU NEED TO USE `new StudyJetFrame()`! DIRECT IFRAMES WILL NOT WORK"), 
                null;
                return _8eeac2780070.name;
              }
            }
          }, this.locationProxy = (0, _0486c8e5ad30.createLocationProxy)(this, _8eeac2780070), 
          _8eeac2780070[_fae22887acec.pX] = this;
        }
        get frame() {
          if (!_fe5e93e0a07e.iswindow) return null;
          let _8eeac2780070 = this.descriptors.get("window.frameElement", this.global);
          if (!_8eeac2780070) return null;
          let _d975dc811624 = _8eeac2780070[_fae22887acec.zr];
          if (!_d975dc811624) {
            let _8eeac2780070 = this.global.window;
            for (;_8eeac2780070.parent !== _8eeac2780070; ) {
              let _d975dc811624 = _8eeac2780070[_fae22887acec.pX].descriptors.get("window.frameElement", _8eeac2780070);
              if (!_d975dc811624) return null;
              if (_d975dc811624 && _d975dc811624[_fae22887acec.zr]) return _d975dc811624[_fae22887acec.zr];
              _8eeac2780070 = _8eeac2780070.parent.window;
            }
          }
          return _d975dc811624;
        }
        get isSubframe() {
          if (!_fe5e93e0a07e.iswindow) return !1;
          let _8eeac2780070 = this.descriptors.get("window.frameElement", this.global);
          return !!_8eeac2780070 && !_8eeac2780070[_fae22887acec.zr];
        }
        loadcookies(_8eeac2780070) {
          this.cookieStore.load(_8eeac2780070);
        }
        hook() {
          let _8eeac2780070 = _ebf358b75a0b(7302), _d975dc811624 = [];
          for (let _ebf358b75a0b of _8eeac2780070.keys()) {
            let _fae22887acec = _8eeac2780070(_ebf358b75a0b);
            _ebf358b75a0b.endsWith(".ts") && (_ebf358b75a0b.startsWith("./dom/") && "window" in this.global || _ebf358b75a0b.startsWith("./worker/") && "WorkerGlobalScope" in this.global || _ebf358b75a0b.startsWith("./shared/")) && _d975dc811624.push(_fae22887acec);
          }
          for (let _8eeac2780070 of (_d975dc811624.sort((_8eeac2780070, _d975dc811624) => (_8eeac2780070.order || 0) - (_d975dc811624.order || 0)), 
          _d975dc811624)) !_8eeac2780070.enabled || _8eeac2780070.enabled(this) ? _8eeac2780070.default(this, this.global) : _8eeac2780070.disabled && _8eeac2780070.disabled(this, this.global);
        }
        get url() {
          return new URL((0, _9fc5b21180bb.v2)(this.global.location.href));
        }
        set url(_8eeac2780070) {
          _8eeac2780070 instanceof URL && (_8eeac2780070 = _8eeac2780070.toString());
          let _d975dc811624 = new _4d778195d27f.NavigateEvent(_8eeac2780070);
          this.frame && this.frame.dispatchEvent(_d975dc811624), _d975dc811624.defaultPrevented || (this.global.location.href = (0, 
          _9fc5b21180bb.Oy)(_d975dc811624.url, this.meta));
        }
        Proxy(_8eeac2780070, _d975dc811624) {
          if (Array.isArray(_8eeac2780070)) {
            for (let _ebf358b75a0b of _8eeac2780070) this.Proxy(_ebf358b75a0b, _d975dc811624);
            return;
          }
          let _ebf358b75a0b = _8eeac2780070.split("."), _fae22887acec = _ebf358b75a0b.pop(), _bbaa3660c6e1 = _ebf358b75a0b.reduce((_8eeac2780070, _d975dc811624) => _8eeac2780070?.[_d975dc811624], this.global);
          if (_bbaa3660c6e1) {
            if (!(_8eeac2780070 in this.natives.store)) {
              let _d975dc811624 = Reflect.get(_bbaa3660c6e1, _fae22887acec);
              this.natives.store[_8eeac2780070] = _d975dc811624;
            }
            this.RawProxy(_bbaa3660c6e1, _fae22887acec, _d975dc811624);
          }
        }
        RawProxy(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
          if (!_8eeac2780070 || !_d975dc811624 || !Reflect.has(_8eeac2780070, _d975dc811624)) return;
          let _fae22887acec = Reflect.get(_8eeac2780070, _d975dc811624);
          delete _8eeac2780070[_d975dc811624];
          let _0486c8e5ad30 = {};
          _ebf358b75a0b.construct && (_0486c8e5ad30.construct = function(_8eeac2780070, _d975dc811624, _fae22887acec) {
            let _bbaa3660c6e1, _0486c8e5ad30 = !1, _c5b4b25078d6 = {
              fn: _8eeac2780070,
              this: null,
              args: _d975dc811624,
              newTarget: _fae22887acec,
              return: _8eeac2780070 => {
                _0486c8e5ad30 = !0, _bbaa3660c6e1 = _8eeac2780070;
              },
              call: () => (_0486c8e5ad30 = !0, _bbaa3660c6e1 = Reflect.construct(_c5b4b25078d6.fn, _c5b4b25078d6.args, _c5b4b25078d6.newTarget))
            };
            return (_ebf358b75a0b.construct(_c5b4b25078d6), _0486c8e5ad30) ? _bbaa3660c6e1 : Reflect.construct(_c5b4b25078d6.fn, _c5b4b25078d6.args, _c5b4b25078d6.newTarget);
          }), _ebf358b75a0b.apply && (_0486c8e5ad30.apply = (_8eeac2780070, _d975dc811624, _fae22887acec) => {
            let _bbaa3660c6e1, _0486c8e5ad30 = !1, _c5b4b25078d6 = {
              fn: _8eeac2780070,
              this: _d975dc811624,
              args: _fae22887acec,
              newTarget: null,
              return: _8eeac2780070 => {
                _0486c8e5ad30 = !0, _bbaa3660c6e1 = _8eeac2780070;
              },
              call: () => (_0486c8e5ad30 = !0, _bbaa3660c6e1 = Reflect.apply(_c5b4b25078d6.fn, _c5b4b25078d6.this, _c5b4b25078d6.args))
            }, _4d778195d27f = Error.prepareStackTrace;
            Error.prepareStackTrace = function(_8eeac2780070, _d975dc811624) {
              if (_d975dc811624[0].getFileName() && !_d975dc811624[0].getFileName().startsWith(location.origin + _6c0b4fee9c25.$W.prefix)) return {
                stack: _8eeac2780070.stack
              };
            };
            try {
              _ebf358b75a0b.apply(_c5b4b25078d6);
            } catch (_8eeac2780070) {
              if (_8eeac2780070 instanceof Error) if (_8eeac2780070.stack instanceof Object) {
                if (_8eeac2780070.stack = _8eeac2780070.stack.stack, console.error("ERROR FROM STUDYJET INTERNALS", _8eeac2780070), 
                !(0, _6c0b4fee9c25.U5)("allowFailedIntercepts", this.url)) throw _8eeac2780070;
              } else throw _8eeac2780070; else throw _8eeac2780070;
            }
            return (Error.prepareStackTrace = _4d778195d27f, _0486c8e5ad30) ? _bbaa3660c6e1 : Reflect.apply(_c5b4b25078d6.fn, _c5b4b25078d6.this, _c5b4b25078d6.args);
          }), _0486c8e5ad30.getOwnPropertyDescriptor = _bbaa3660c6e1.getOwnPropertyDescriptorHandler, 
          _8eeac2780070[_d975dc811624] = new Proxy(_fae22887acec, _0486c8e5ad30);
        }
        Trap(_8eeac2780070, _d975dc811624) {
          if (Array.isArray(_8eeac2780070)) {
            for (let _ebf358b75a0b of _8eeac2780070) this.Trap(_ebf358b75a0b, _d975dc811624);
            return;
          }
          let _ebf358b75a0b = _8eeac2780070.split("."), _fae22887acec = _ebf358b75a0b.pop(), _bbaa3660c6e1 = _ebf358b75a0b.reduce((_8eeac2780070, _d975dc811624) => _8eeac2780070?.[_d975dc811624], this.global);
          if (!_bbaa3660c6e1) return;
          let _0486c8e5ad30 = this.natives.call("Object.getOwnPropertyDescriptor", null, _bbaa3660c6e1, _fae22887acec);
          return this.descriptors.store[_8eeac2780070] = _0486c8e5ad30, this.RawTrap(_bbaa3660c6e1, _fae22887acec, _d975dc811624);
        }
        RawTrap(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
          if (!_8eeac2780070 || !_d975dc811624 || !Reflect.has(_8eeac2780070, _d975dc811624)) return;
          let _fae22887acec = this.natives.call("Object.getOwnPropertyDescriptor", null, _8eeac2780070, _d975dc811624), _bbaa3660c6e1 = {
            this: null,
            get: function() {
              return _fae22887acec && _fae22887acec.get.call(this.this);
            },
            set: function(_8eeac2780070) {
              _fae22887acec && _fae22887acec.set.call(this.this, _8eeac2780070);
            }
          };
          delete _8eeac2780070[_d975dc811624];
          let _0486c8e5ad30 = {};
          return _ebf358b75a0b.get ? _0486c8e5ad30.get = function() {
            return _bbaa3660c6e1.this = this, _ebf358b75a0b.get(_bbaa3660c6e1);
          } : _fae22887acec?.get && (_0486c8e5ad30.get = _fae22887acec.get), _ebf358b75a0b.set ? _0486c8e5ad30.set = function(_8eeac2780070) {
            _bbaa3660c6e1.this = this, _ebf358b75a0b.set(_bbaa3660c6e1, _8eeac2780070);
          } : _fae22887acec?.set && (_0486c8e5ad30.set = _fae22887acec.set), _ebf358b75a0b.enumerable ? _0486c8e5ad30.enumerable = _ebf358b75a0b.enumerable : _fae22887acec?.enumerable && (_0486c8e5ad30.enumerable = _fae22887acec.enumerable), 
          _ebf358b75a0b.configurable ? _0486c8e5ad30.configurable = _ebf358b75a0b.configurable : _fae22887acec?.configurable && (_0486c8e5ad30.configurable = _fae22887acec.configurable), 
          Object.defineProperty(_8eeac2780070, _d975dc811624, _0486c8e5ad30), _fae22887acec;
        }
      }
    },
    1077: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      function n(_8eeac2780070, _d975dc811624) {
        _8eeac2780070.Trap("Element.prototype.attributes", {
          get(_8eeac2780070) {
            let _d975dc811624 = _8eeac2780070.get(), _ebf358b75a0b = new Proxy(_d975dc811624, {
              get(_8eeac2780070, _fae22887acec, _bbaa3660c6e1) {
                let _0486c8e5ad30 = Reflect.get(_8eeac2780070, _fae22887acec);
                return "length" === _fae22887acec ? Object.keys(_ebf358b75a0b).length : "getNamedItem" === _fae22887acec ? _8eeac2780070 => _ebf358b75a0b[_8eeac2780070] : "getNamedItemNS" === _fae22887acec ? (_8eeac2780070, _d975dc811624) => _ebf358b75a0b[`${_8eeac2780070}:${_d975dc811624}`] : _fae22887acec in NamedNodeMap.prototype && "function" == typeof _0486c8e5ad30 ? new Proxy(_0486c8e5ad30, {
                  apply: (_8eeac2780070, _fae22887acec, _bbaa3660c6e1) => _fae22887acec === _ebf358b75a0b ? Reflect.apply(_8eeac2780070, _d975dc811624, _bbaa3660c6e1) : Reflect.apply(_8eeac2780070, _fae22887acec, _bbaa3660c6e1)
                }) : "string" != typeof _fae22887acec && "number" != typeof _fae22887acec || isNaN(Number(_fae22887acec)) ? this.has(_8eeac2780070, _fae22887acec) ? _0486c8e5ad30 : void 0 : _d975dc811624[Object.keys(_ebf358b75a0b)[_fae22887acec]];
              },
              ownKeys(_8eeac2780070) {
                return Reflect.ownKeys(_8eeac2780070).filter(_d975dc811624 => this.has(_8eeac2780070, _d975dc811624));
              },
              has: (_8eeac2780070, _ebf358b75a0b) => "symbol" == typeof _ebf358b75a0b ? Reflect.has(_8eeac2780070, _ebf358b75a0b) : !(_ebf358b75a0b.startsWith("studyjet-attr-") || _d975dc811624[_ebf358b75a0b]?.name?.startsWith("studyjet-attr-")) && Reflect.has(_8eeac2780070, _ebf358b75a0b)
            });
            return _ebf358b75a0b;
          }
        }), _8eeac2780070.Trap([ "Attr.prototype.value", "Attr.prototype.nodeValue" ], {
          get: _8eeac2780070 => _8eeac2780070.this?.ownerElement ? _8eeac2780070.this.ownerElement.getAttribute(_8eeac2780070.this.name) : _8eeac2780070.get(),
          set: (_8eeac2780070, _d975dc811624) => _8eeac2780070.this?.ownerElement ? _8eeac2780070.this.ownerElement.setAttribute(_8eeac2780070.this.name, _d975dc811624) : _8eeac2780070.set(_d975dc811624)
        });
      }
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        default: () => n
      });
    },
    7430: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        default: () => i
      });
      var _fae22887acec = _ebf358b75a0b(1472);
      function i(_8eeac2780070, _d975dc811624) {
        _8eeac2780070.Proxy("Navigator.prototype.sendBeacon", {
          apply(_d975dc811624) {
            _d975dc811624.args[0] = (0, _fae22887acec.Oy)(_d975dc811624.args[0], _8eeac2780070.meta);
          }
        });
      }
    },
    9116: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      function n(_8eeac2780070, _d975dc811624) {
        _8eeac2780070.serviceWorker.addEventListener("message", ({data: _d975dc811624}) => {
          if ("studyjet$type" in _d975dc811624 && "cookie" === _d975dc811624.studyjet$type) {
            _8eeac2780070.cookieStore.setCookies([ _d975dc811624.cookie ], new URL(_d975dc811624.url));
            let _ebf358b75a0b = {
              studyjet$token: _d975dc811624.studyjet$token,
              studyjet$type: "cookie"
            };
            _8eeac2780070.serviceWorker.controller.postMessage(_ebf358b75a0b);
          }
        }), _8eeac2780070.Trap("Document.prototype.cookie", {
          get: () => _8eeac2780070.cookieStore.getCookies(_8eeac2780070.url, !0),
          set(_d975dc811624, _ebf358b75a0b) {
            _8eeac2780070.cookieStore.setCookies([ _ebf358b75a0b ], _8eeac2780070.url);
            let _fae22887acec = _8eeac2780070.descriptors.get("ServiceWorkerContainer.prototype.controller", _8eeac2780070.serviceWorker);
            _fae22887acec && _8eeac2780070.natives.call("ServiceWorker.prototype.postMessage", _fae22887acec, {
              studyjet$type: "cookie",
              cookie: _ebf358b75a0b,
              url: _8eeac2780070.url.href
            });
          }
        }), delete _d975dc811624.cookieStore;
      }
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        default: () => n
      });
    },
    6447: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        default: () => i
      });
      var _fae22887acec = _ebf358b75a0b(2614);
      function i(_8eeac2780070) {
        _8eeac2780070.Proxy("CSSStyleDeclaration.prototype.setProperty", {
          apply(_d975dc811624) {
            _d975dc811624.args[1] && (_d975dc811624.args[1] = (0, _fae22887acec.s)(_d975dc811624.args[1], _8eeac2780070.meta));
          }
        }), _8eeac2780070.Proxy("CSSStyleDeclaration.prototype.getPropertyValue", {
          apply(_8eeac2780070) {
            let _d975dc811624 = _8eeac2780070.call();
            if (!_d975dc811624) return _d975dc811624;
            _8eeac2780070.return((0, _fae22887acec.f)(_d975dc811624));
          }
        }), _8eeac2780070.Trap("CSSStyleDeclaration.prototype.cssText", {
          set(_d975dc811624, _ebf358b75a0b) {
            _d975dc811624.set((0, _fae22887acec.s)(_ebf358b75a0b, _8eeac2780070.meta));
          },
          get: _8eeac2780070 => (0, _fae22887acec.f)(_8eeac2780070.get())
        }), _8eeac2780070.Proxy("CSSStyleSheet.prototype.insertRule", {
          apply(_d975dc811624) {
            _d975dc811624.args[0] = (0, _fae22887acec.s)(_d975dc811624.args[0], _8eeac2780070.meta);
          }
        }), _8eeac2780070.Proxy("CSSStyleSheet.prototype.replace", {
          apply(_d975dc811624) {
            _d975dc811624.args[0] = (0, _fae22887acec.s)(_d975dc811624.args[0], _8eeac2780070.meta);
          }
        }), _8eeac2780070.Proxy("CSSStyleSheet.prototype.replaceSync", {
          apply(_d975dc811624) {
            _d975dc811624.args[0] = (0, _fae22887acec.s)(_d975dc811624.args[0], _8eeac2780070.meta);
          }
        }), _8eeac2780070.Trap("CSSRule.prototype.cssText", {
          set(_d975dc811624, _ebf358b75a0b) {
            _d975dc811624.set((0, _fae22887acec.s)(_ebf358b75a0b, _8eeac2780070.meta));
          },
          get: _8eeac2780070 => (0, _fae22887acec.f)(_8eeac2780070.get())
        }), _8eeac2780070.Proxy("CSSStyleValue.parse", {
          apply(_d975dc811624) {
            _d975dc811624.args[1] && (_d975dc811624.args[1] = (0, _fae22887acec.s)(_d975dc811624.args[1], _8eeac2780070.meta));
          }
        }), _8eeac2780070.Trap("HTMLElement.prototype.style", {
          get(_d975dc811624) {
            let _ebf358b75a0b = _d975dc811624.get();
            return new Proxy(_ebf358b75a0b, {
              get(_8eeac2780070, _d975dc811624) {
                let _bbaa3660c6e1 = Reflect.get(_8eeac2780070, _d975dc811624);
                return "function" == typeof _bbaa3660c6e1 ? new Proxy(_bbaa3660c6e1, {
                  apply: (_8eeac2780070, _d975dc811624, _fae22887acec) => Reflect.apply(_8eeac2780070, _ebf358b75a0b, _fae22887acec)
                }) : _d975dc811624 in CSSStyleDeclaration.prototype || !_bbaa3660c6e1 ? _bbaa3660c6e1 : (0, 
                _fae22887acec.f)(_bbaa3660c6e1);
              },
              set: (_d975dc811624, _ebf358b75a0b, _bbaa3660c6e1) => "cssText" == _ebf358b75a0b || "" == _bbaa3660c6e1 || "string" != typeof _bbaa3660c6e1 ? Reflect.set(_d975dc811624, _ebf358b75a0b, _bbaa3660c6e1) : Reflect.set(_d975dc811624, _ebf358b75a0b, (0, 
              _fae22887acec.s)(_bbaa3660c6e1, _8eeac2780070.meta))
            });
          },
          set(_8eeac2780070, _d975dc811624) {
            _8eeac2780070.set(_d975dc811624);
          }
        });
      }
    },
    5351: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        default: () => i
      });
      var _fae22887acec = _ebf358b75a0b(884);
      function i(_8eeac2780070, _d975dc811624) {
        let _ebf358b75a0b = String;
        _8eeac2780070.Proxy([ "Document.prototype.querySelector", "Document.prototype.querySelectorAll" ], {
          apply(_8eeac2780070) {
            _8eeac2780070.args[0] = _ebf358b75a0b(_8eeac2780070.args[0]).replace(/((?:^|\s)\b\w+\[(?:src|href|data-href))[\^]?(=['"]?(?:https?[:])?\/\/)/, "$1*$2");
          }
        }), _8eeac2780070.Proxy("Document.prototype.write", {
          apply(_d975dc811624) {
            if (_d975dc811624.args[0]) try {
              _d975dc811624.args[0] = (0, _fae22887acec.Qs)(_d975dc811624.args[0], _8eeac2780070.cookieStore, _8eeac2780070.meta, !1);
            } catch {}
          }
        }), _8eeac2780070.Trap("Document.prototype.referrer", {
          get: () => _8eeac2780070.url.toString()
        }), _8eeac2780070.Proxy("Document.prototype.writeln", {
          apply(_d975dc811624) {
            if (_d975dc811624.args[0]) try {
              _d975dc811624.args[0] = (0, _fae22887acec.Qs)(_d975dc811624.args[0], _8eeac2780070.cookieStore, _8eeac2780070.meta, !1);
            } catch {}
          }
        }), _8eeac2780070.Proxy("Document.prototype.parseHTMLUnsafe", {
          apply(_d975dc811624) {
            if (_d975dc811624.args[0]) try {
              _d975dc811624.args[0] = (0, _fae22887acec.Qs)(_d975dc811624.args[0], _8eeac2780070.cookieStore, _8eeac2780070.meta, !1);
            } catch {}
          }
        });
      }
    },
    7828: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        default: () => h
      });
      var _fae22887acec = _ebf358b75a0b(2393), _bbaa3660c6e1 = _ebf358b75a0b(2614), _0486c8e5ad30 = _ebf358b75a0b(884), _c5b4b25078d6 = _ebf358b75a0b(1478), _4d778195d27f = _ebf358b75a0b(1472), _9fc5b21180bb = _ebf358b75a0b(2794), _6c0b4fee9c25 = _ebf358b75a0b(3255);
      let _fb4ea2a6f85c = new TextEncoder;
      function d(_8eeac2780070) {
        return btoa(Array.from(_8eeac2780070, _8eeac2780070 => String.fromCodePoint(_8eeac2780070)).join(""));
      }
      function h(_8eeac2780070, _d975dc811624) {
        let _ebf358b75a0b = {
          nonce: [ _d975dc811624.HTMLElement ],
          integrity: [ _d975dc811624.HTMLScriptElement, _d975dc811624.HTMLLinkElement ],
          csp: [ _d975dc811624.HTMLIFrameElement ],
          credentialless: [ _d975dc811624.HTMLIFrameElement ],
          src: [ _d975dc811624.HTMLImageElement, _d975dc811624.HTMLMediaElement, _d975dc811624.HTMLIFrameElement, _d975dc811624.HTMLFrameElement, _d975dc811624.HTMLEmbedElement, _d975dc811624.HTMLScriptElement, _d975dc811624.HTMLSourceElement ],
          href: [ _d975dc811624.HTMLAnchorElement, _d975dc811624.HTMLLinkElement ],
          data: [ _d975dc811624.HTMLObjectElement ],
          action: [ _d975dc811624.HTMLFormElement ],
          formaction: [ _d975dc811624.HTMLButtonElement, _d975dc811624.HTMLInputElement ],
          srcdoc: [ _d975dc811624.HTMLIFrameElement ],
          poster: [ _d975dc811624.HTMLVideoElement ],
          imagesrcset: [ _d975dc811624.HTMLLinkElement ]
        }, _fe5e93e0a07e = [ _d975dc811624.HTMLAnchorElement.prototype, _d975dc811624.HTMLAreaElement.prototype ], _11590423c4ed = [ _8eeac2780070.natives.call("Object.getOwnPropertyDescriptor", null, _d975dc811624.HTMLAnchorElement.prototype, "href"), _8eeac2780070.natives.call("Object.getOwnPropertyDescriptor", null, _d975dc811624.HTMLAreaElement.prototype, "href") ];
        for (let _d975dc811624 of Object.keys(_ebf358b75a0b)) for (let _fae22887acec of _ebf358b75a0b[_d975dc811624]) {
          let _ebf358b75a0b = _8eeac2780070.natives.call("Object.getOwnPropertyDescriptor", null, _fae22887acec.prototype, _d975dc811624);
          Object.defineProperty(_fae22887acec.prototype, _d975dc811624, {
            get() {
              return [ "src", "data", "href", "action", "formaction" ].includes(_d975dc811624) ? (0, 
              _4d778195d27f.v2)(_ebf358b75a0b.get.call(this)) : _ebf358b75a0b.get.call(this);
            },
            set(_8eeac2780070) {
              return this.setAttribute(_d975dc811624, _8eeac2780070);
            }
          });
        }
        for (let _d975dc811624 of [ "protocol", "hash", "host", "hostname", "origin", "pathname", "port", "search" ]) for (let _ebf358b75a0b in _fe5e93e0a07e) {
          let _fae22887acec = _fe5e93e0a07e[_ebf358b75a0b], _bbaa3660c6e1 = _11590423c4ed[_ebf358b75a0b];
          _8eeac2780070.RawTrap(_fae22887acec, _d975dc811624, {
            get(_8eeac2780070) {
              let _ebf358b75a0b = _bbaa3660c6e1.get.call(_8eeac2780070.this);
              return _ebf358b75a0b ? new URL((0, _4d778195d27f.v2)(_ebf358b75a0b))[_d975dc811624] : _ebf358b75a0b;
            }
          });
        }
        _8eeac2780070.Trap("Node.prototype.baseURI", {
          get(_d975dc811624) {
            let _ebf358b75a0b = _d975dc811624.this, _fae22887acec = _ebf358b75a0b.ownerDocument?.querySelector("base");
            return (_ebf358b75a0b instanceof Document && (_fae22887acec = _ebf358b75a0b.querySelector("base")), 
            _fae22887acec) ? new URL(_fae22887acec.href, _8eeac2780070.url.origin).href : _8eeac2780070.url.origin;
          },
          set: (_8eeac2780070, _d975dc811624) => !1
        }), _8eeac2780070.Proxy("Element.prototype.getAttribute", {
          apply(_d975dc811624) {
            let [_ebf358b75a0b] = _d975dc811624.args;
            if (_ebf358b75a0b.startsWith("studyjet-attr")) return _d975dc811624.return(null);
            if (_8eeac2780070.natives.call("Element.prototype.hasAttribute", _d975dc811624.this, `studyjet-attr-${_ebf358b75a0b}`)) {
              let _8eeac2780070 = _d975dc811624.fn.call(_d975dc811624.this, `studyjet-attr-${_ebf358b75a0b}`);
              return null === _8eeac2780070 ? _d975dc811624.return("") : _d975dc811624.return(_8eeac2780070);
            }
          }
        }), _8eeac2780070.Proxy("Element.prototype.getAttributeNames", {
          apply(_8eeac2780070) {
            let _d975dc811624 = _8eeac2780070.call().filter(_8eeac2780070 => !_8eeac2780070.startsWith("studyjet-attr"));
            _8eeac2780070.return(_d975dc811624);
          }
        }), _8eeac2780070.Proxy("Element.prototype.getAttributeNode", {
          apply(_8eeac2780070) {
            if (_8eeac2780070.args[0].startsWith("studyjet-attr")) return _8eeac2780070.return(null);
          }
        }), _8eeac2780070.Proxy("Element.prototype.hasAttribute", {
          apply(_8eeac2780070) {
            if (_8eeac2780070.args[0].startsWith("studyjet-attr")) return _8eeac2780070.return(!1);
          }
        }), _8eeac2780070.Proxy("Element.prototype.setAttribute", {
          apply(_d975dc811624) {
            let [_ebf358b75a0b, _bbaa3660c6e1] = _d975dc811624.args, _0486c8e5ad30 = _fae22887acec.V.find(_8eeac2780070 => {
              let _fae22887acec = _8eeac2780070[_ebf358b75a0b.toLowerCase()];
              return !!_fae22887acec && ("*" === _fae22887acec || "function" != typeof _fae22887acec && _fae22887acec.includes(_d975dc811624.this.tagName.toLowerCase()));
            });
            if (_0486c8e5ad30) {
              let _fae22887acec = _0486c8e5ad30.fn(_bbaa3660c6e1, _8eeac2780070.meta, _8eeac2780070.cookieStore);
              if (null == _fae22887acec) {
                _8eeac2780070.natives.call("Element.prototype.removeAttribute", _d975dc811624.this, _ebf358b75a0b), 
                _d975dc811624.return(void 0);
                return;
              }
              _d975dc811624.args[1] = _fae22887acec, _d975dc811624.fn.call(_d975dc811624.this, `studyjet-attr-${_d975dc811624.args[0]}`, _bbaa3660c6e1);
            }
          }
        }), _8eeac2780070.Proxy("Element.prototype.setAttributeNode", {
          apply(_8eeac2780070) {}
        }), _8eeac2780070.Proxy("Element.prototype.setAttributeNS", {
          apply(_d975dc811624) {
            let [_ebf358b75a0b, _bbaa3660c6e1, _0486c8e5ad30] = _d975dc811624.args, _c5b4b25078d6 = _fae22887acec.V.find(_8eeac2780070 => {
              let _ebf358b75a0b = _8eeac2780070[_bbaa3660c6e1.toLowerCase()];
              return !!_ebf358b75a0b && ("*" === _ebf358b75a0b || "function" != typeof _ebf358b75a0b && _ebf358b75a0b.includes(_d975dc811624.this.tagName.toLowerCase()));
            });
            _c5b4b25078d6 && (_d975dc811624.args[2] = _c5b4b25078d6.fn(_0486c8e5ad30, _8eeac2780070.meta, _8eeac2780070.cookieStore), 
            _8eeac2780070.natives.call("Element.prototype.setAttribute", _d975dc811624.this, `studyjet-attr-${_d975dc811624.args[1]}`, _0486c8e5ad30));
          }
        }), _8eeac2780070.Trap("SVGAnimatedString.prototype.baseVal", {
          get(_8eeac2780070) {
            let _d975dc811624 = _8eeac2780070.get();
            return _d975dc811624 ? (0, _4d778195d27f.v2)(_d975dc811624) : _d975dc811624;
          },
          set(_d975dc811624, _ebf358b75a0b) {
            _d975dc811624.set((0, _4d778195d27f.Oy)(_ebf358b75a0b, _8eeac2780070.meta));
          }
        }), _8eeac2780070.Trap("SVGAnimatedString.prototype.animVal", {
          get(_8eeac2780070) {
            let _d975dc811624 = _8eeac2780070.get();
            return _d975dc811624 ? (0, _4d778195d27f.v2)(_d975dc811624) : _d975dc811624;
          }
        }), _8eeac2780070.Proxy("Element.prototype.removeAttribute", {
          apply(_d975dc811624) {
            if (_d975dc811624.args[0].startsWith("studyjet-attr")) return _d975dc811624.return(void 0);
            _8eeac2780070.natives.call("Element.prototype.hasAttribute", _d975dc811624.this, _d975dc811624.args[0]) && _d975dc811624.fn.call(_d975dc811624.this, `studyjet-attr-${_d975dc811624.args[0]}`);
          }
        }), _8eeac2780070.Proxy("Element.prototype.toggleAttribute", {
          apply(_d975dc811624) {
            if (_d975dc811624.args[0].startsWith("studyjet-attr")) return _d975dc811624.return(!1);
            _8eeac2780070.natives.call("Element.prototype.hasAttribute", _d975dc811624.this, _d975dc811624.args[0]) && _d975dc811624.fn.call(_d975dc811624.this, `studyjet-attr-${_d975dc811624.args[0]}`);
          }
        }), _8eeac2780070.Trap("Element.prototype.innerHTML", {
          set(_ebf358b75a0b, _fae22887acec) {
            let _4d778195d27f;
            if (_ebf358b75a0b.this instanceof _d975dc811624.HTMLScriptElement) _4d778195d27f = (0, 
            _c5b4b25078d6.o)(_fae22887acec, "(anonymous script element)", _8eeac2780070.meta), 
            _8eeac2780070.natives.call("Element.prototype.setAttribute", _ebf358b75a0b.this, "studyjet-attr-script-source-src", d(_fb4ea2a6f85c.encode(_4d778195d27f))); else if (_ebf358b75a0b.this instanceof _d975dc811624.HTMLStyleElement) _4d778195d27f = (0, 
            _bbaa3660c6e1.s)(_fae22887acec, _8eeac2780070.meta); else try {
              _4d778195d27f = (0, _0486c8e5ad30.Qs)(_fae22887acec, _8eeac2780070.cookieStore, _8eeac2780070.meta);
            } catch {
              _4d778195d27f = _fae22887acec;
            }
            _ebf358b75a0b.set(_4d778195d27f);
          },
          get(_ebf358b75a0b) {
            if (_ebf358b75a0b.this instanceof _d975dc811624.HTMLScriptElement) {
              let _d975dc811624 = _8eeac2780070.natives.call("Element.prototype.getAttribute", _ebf358b75a0b.this, "studyjet-attr-script-source-src");
              return _d975dc811624 ? atob(_d975dc811624) : _ebf358b75a0b.get();
            }
            return _ebf358b75a0b.this instanceof _d975dc811624.HTMLStyleElement ? _ebf358b75a0b.get() : (0, 
            _0486c8e5ad30.nK)(_ebf358b75a0b.get());
          }
        }), _8eeac2780070.Trap("Node.prototype.textContent", {
          set(_ebf358b75a0b, _fae22887acec) {
            if (_ebf358b75a0b.this instanceof _d975dc811624.HTMLScriptElement) {
              let _d975dc811624 = (0, _c5b4b25078d6.o)(_fae22887acec, "(anonymous script element)", _8eeac2780070.meta);
              return _8eeac2780070.natives.call("Element.prototype.setAttribute", _ebf358b75a0b.this, "studyjet-attr-script-source-src", d(_fb4ea2a6f85c.encode(_d975dc811624))), 
              _ebf358b75a0b.set(_d975dc811624);
            }
            return _ebf358b75a0b.this instanceof _d975dc811624.HTMLStyleElement ? _ebf358b75a0b.set((0, 
            _bbaa3660c6e1.s)(_fae22887acec, _8eeac2780070.meta)) : _ebf358b75a0b.set(_fae22887acec);
          },
          get(_ebf358b75a0b) {
            if (_ebf358b75a0b.this instanceof _d975dc811624.HTMLScriptElement) {
              let _d975dc811624 = _8eeac2780070.natives.call("Element.prototype.getAttribute", _ebf358b75a0b.this, "studyjet-attr-script-source-src");
              return _d975dc811624 ? atob(_d975dc811624) : _ebf358b75a0b.get();
            }
            return _ebf358b75a0b.this instanceof _d975dc811624.HTMLStyleElement ? (0, _bbaa3660c6e1.f)(_ebf358b75a0b.get()) : _ebf358b75a0b.get();
          }
        }), _8eeac2780070.Trap("Element.prototype.outerHTML", {
          set(_d975dc811624, _ebf358b75a0b) {
            _d975dc811624.set((0, _0486c8e5ad30.Qs)(_ebf358b75a0b, _8eeac2780070.cookieStore, _8eeac2780070.meta));
          },
          get: _8eeac2780070 => (0, _0486c8e5ad30.nK)(_8eeac2780070.get())
        }), _8eeac2780070.Proxy("Element.prototype.setHTMLUnsafe", {
          apply(_d975dc811624) {
            try {
              _d975dc811624.args[0] = (0, _0486c8e5ad30.Qs)(_d975dc811624.args[0], _8eeac2780070.cookieStore, _8eeac2780070.meta, !1);
            } catch {}
          }
        }), _8eeac2780070.Proxy("Element.prototype.getHTML", {
          apply(_8eeac2780070) {
            _8eeac2780070.return((0, _0486c8e5ad30.nK)(_8eeac2780070.call()));
          }
        }), _8eeac2780070.Proxy("Element.prototype.insertAdjacentHTML", {
          apply(_d975dc811624) {
            if (_d975dc811624.args[1]) try {
              _d975dc811624.args[1] = (0, _0486c8e5ad30.Qs)(_d975dc811624.args[1], _8eeac2780070.cookieStore, _8eeac2780070.meta, !1);
            } catch {}
          }
        }), _8eeac2780070.Proxy("Audio", {
          construct(_d975dc811624) {
            _d975dc811624.args[0] && (_d975dc811624.args[0] = (0, _4d778195d27f.Oy)(_d975dc811624.args[0], _8eeac2780070.meta));
          }
        }), _8eeac2780070.Proxy("Text.prototype.appendData", {
          apply(_d975dc811624) {
            _d975dc811624.this.parentElement?.tagName === "STYLE" && (_d975dc811624.args[0] = (0, 
            _bbaa3660c6e1.s)(_d975dc811624.args[0], _8eeac2780070.meta));
          }
        }), _8eeac2780070.Proxy("Text.prototype.insertData", {
          apply(_d975dc811624) {
            _d975dc811624.this.parentElement?.tagName === "STYLE" && (_d975dc811624.args[1] = (0, 
            _bbaa3660c6e1.s)(_d975dc811624.args[1], _8eeac2780070.meta));
          }
        }), _8eeac2780070.Proxy("Text.prototype.replaceData", {
          apply(_d975dc811624) {
            _d975dc811624.this.parentElement?.tagName === "STYLE" && (_d975dc811624.args[2] = (0, 
            _bbaa3660c6e1.s)(_d975dc811624.args[2], _8eeac2780070.meta));
          }
        }), _8eeac2780070.Trap("Text.prototype.wholeText", {
          get: _8eeac2780070 => _8eeac2780070.this.parentElement?.tagName === "STYLE" ? (0, 
          _bbaa3660c6e1.f)(_8eeac2780070.get()) : _8eeac2780070.get(),
          set: (_d975dc811624, _ebf358b75a0b) => _d975dc811624.this.parentElement?.tagName === "STYLE" ? _d975dc811624.set((0, 
          _bbaa3660c6e1.s)(_ebf358b75a0b, _8eeac2780070.meta)) : _d975dc811624.set(_ebf358b75a0b)
        }), _8eeac2780070.Trap([ "HTMLIFrameElement.prototype.contentWindow", "HTMLFrameElement.prototype.contentWindow", "HTMLObjectElement.prototype.contentWindow", "HTMLEmbedElement.prototype.contentWindow" ], {
          get(_8eeac2780070) {
            let _d975dc811624 = _8eeac2780070.get();
            return _d975dc811624 && (_9fc5b21180bb.pX in _d975dc811624 || new _6c0b4fee9c25.StudyJetClient(_d975dc811624).hook()), 
            _d975dc811624;
          }
        }), _8eeac2780070.Trap([ "HTMLIFrameElement.prototype.contentDocument", "HTMLFrameElement.prototype.contentDocument", "HTMLObjectElement.prototype.contentDocument", "HTMLEmbedElement.prototype.contentDocument" ], {
          get(_d975dc811624) {
            let _ebf358b75a0b = _8eeac2780070.descriptors.get(`${_d975dc811624.this.constructor.name}.prototype.contentWindow`, _d975dc811624.this);
            return _ebf358b75a0b ? (_9fc5b21180bb.pX in _ebf358b75a0b || new _6c0b4fee9c25.StudyJetClient(_ebf358b75a0b).hook(), 
            _ebf358b75a0b.document) : _ebf358b75a0b;
          }
        }), _8eeac2780070.Proxy([ "HTMLIFrameElement.prototype.getSVGDocument", "HTMLObjectElement.prototype.getSVGDocument", "HTMLEmbedElement.prototype.getSVGDocument" ], {
          apply(_8eeac2780070) {
            if (_8eeac2780070.call()) return _8eeac2780070.return(_8eeac2780070.this.contentDocument);
          }
        }), _8eeac2780070.Proxy("DOMParser.prototype.parseFromString", {
          apply(_d975dc811624) {
            if ("text/html" === _d975dc811624.args[1]) try {
              _d975dc811624.args[0] = (0, _0486c8e5ad30.Qs)(_d975dc811624.args[0], _8eeac2780070.cookieStore, _8eeac2780070.meta, !1);
            } catch {}
          }
        });
      }
    },
    5426: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        default: () => i
      });
      var _fae22887acec = _ebf358b75a0b(2614);
      function i(_8eeac2780070, _d975dc811624) {
        _8eeac2780070.Proxy("FontFace", {
          construct(_d975dc811624) {
            _d975dc811624.args[1] = (0, _fae22887acec.s)(_d975dc811624.args[1], _8eeac2780070.meta);
          }
        });
      }
    },
    5465: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        default: () => i
      });
      var _fae22887acec = _ebf358b75a0b(884);
      function i(_8eeac2780070, _d975dc811624) {
        _8eeac2780070.Proxy("Range.prototype.createContextualFragment", {
          apply(_d975dc811624) {
            _d975dc811624.args[0] = (0, _fae22887acec.Qs)(_d975dc811624.args[0], _8eeac2780070.cookieStore, _8eeac2780070.meta);
          }
        });
      }
    },
    9804: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        default: () => s
      });
      var _fae22887acec = _ebf358b75a0b(1472), _bbaa3660c6e1 = _ebf358b75a0b(1862), _0486c8e5ad30 = _ebf358b75a0b(2794);
      function s(_8eeac2780070, _d975dc811624) {
        _8eeac2780070.Proxy([ "History.prototype.pushState", "History.prototype.replaceState" ], {
          apply(_d975dc811624) {
            (_d975dc811624.args[2] || "" === _d975dc811624.args[2]) && (_d975dc811624.args[2] = (0, 
            _fae22887acec.Oy)(_d975dc811624.args[2], _8eeac2780070.meta)), _d975dc811624.call();
            let {constructor: {constructor: _ebf358b75a0b}} = _d975dc811624.this, _c5b4b25078d6 = _ebf358b75a0b("return globalThis")(), _4d778195d27f = _c5b4b25078d6[_0486c8e5ad30.pX];
            if (_c5b4b25078d6.name === _8eeac2780070.meta.topFrameName) {
              let _d975dc811624 = new _bbaa3660c6e1.UrlChangeEvent(_4d778195d27f.url.href);
              _8eeac2780070.frame?.dispatchEvent(_d975dc811624);
            }
          }
        });
      }
    },
    7758: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        default: () => s
      });
      var _fae22887acec = _ebf358b75a0b(3255), _bbaa3660c6e1 = _ebf358b75a0b(2794), _0486c8e5ad30 = _ebf358b75a0b(1472);
      function s(_8eeac2780070) {
        _8eeac2780070.Proxy("window.open", {
          apply(_d975dc811624) {
            _d975dc811624.args[0] && (_d975dc811624.args[0] = (0, _0486c8e5ad30.Oy)(_d975dc811624.args[0], _8eeac2780070.meta)), 
            ("_top" === _d975dc811624.args[1] || "_unfencedTop" === _d975dc811624.args[1]) && (_d975dc811624.args[1] = _8eeac2780070.meta.topFrameName), 
            "_parent" === _d975dc811624.args[1] && (_d975dc811624.args[1] = _8eeac2780070.meta.parentFrameName);
            let _ebf358b75a0b = _d975dc811624.call();
            if (!_ebf358b75a0b) return _d975dc811624.return(_ebf358b75a0b);
            if (_bbaa3660c6e1.pX in _ebf358b75a0b) return _d975dc811624.return(_ebf358b75a0b[_bbaa3660c6e1.pX].global);
            {
              let _8eeac2780070 = new _fae22887acec.StudyJetClient(_ebf358b75a0b);
              return _8eeac2780070.hook(), _d975dc811624.return(_8eeac2780070.global);
            }
          }
        }), _8eeac2780070.Trap("window.frameElement", {
          get(_8eeac2780070) {
            let _d975dc811624 = _8eeac2780070.get();
            return _d975dc811624 ? _d975dc811624.ownerDocument.defaultView[_bbaa3660c6e1.pX] ? _d975dc811624 : null : _d975dc811624;
          }
        });
      }
    },
    6012: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      function n(_8eeac2780070, _d975dc811624) {
        _8eeac2780070.Trap("origin", {
          get: () => _8eeac2780070.url.origin,
          set: () => !1
        }), _8eeac2780070.Trap("Document.prototype.URL", {
          get: () => _8eeac2780070.url.href,
          set: () => !1
        }), _8eeac2780070.Trap("Document.prototype.documentURI", {
          get: () => _8eeac2780070.url.href,
          set: () => !1
        }), _8eeac2780070.Trap("Document.prototype.domain", {
          get: () => _8eeac2780070.url.hostname,
          set: () => !1
        });
      }
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        default: () => n
      });
    },
    6286: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        default: () => a
      });
      var _fae22887acec = _ebf358b75a0b(1472), _bbaa3660c6e1 = _ebf358b75a0b(37);
      function a(_8eeac2780070, _d975dc811624) {
        _8eeac2780070.Trap("PerformanceEntry.prototype.name", {
          get(_8eeac2780070) {
            let _d975dc811624 = _8eeac2780070.get();
            return _d975dc811624 && _d975dc811624.startsWith(location.origin + _bbaa3660c6e1.$W.prefix) ? (0, 
            _fae22887acec.v2)(_d975dc811624) : _d975dc811624;
          }
        }), _8eeac2780070.Proxy([ "Performance.prototype.getEntries", "Performance.prototype.getEntriesByType", "Performance.prototype.getEntriesByName", "PerformanceObserverEntryList.prototype.getEntries", "PerformanceObserverEntryList.prototype.getEntriesByType", "PerformanceObserverEntryList.prototype.getEntriesByName" ], {
          apply(_8eeac2780070) {
            let _d975dc811624 = _8eeac2780070.call();
            return _8eeac2780070.return(_d975dc811624.filter(_8eeac2780070 => {
              for (let _d975dc811624 of Object.values(_bbaa3660c6e1.$W.files)) if (_8eeac2780070.name.startsWith(location.origin + _d975dc811624)) return !1;
              return !0;
            }));
          }
        });
      }
    },
    1974: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        default: () => i
      });
      var _fae22887acec = _ebf358b75a0b(1472);
      function i(_8eeac2780070, _d975dc811624) {
        _8eeac2780070.Proxy("Navigator.prototype.registerProtocolHandler", {
          apply(_d975dc811624) {
            _d975dc811624.args[1] = (0, _fae22887acec.Oy)(_d975dc811624.args[1], _8eeac2780070.meta);
          }
        }), _8eeac2780070.Proxy("Navigator.prototype.unregisterProtocolHandler", {
          apply(_d975dc811624) {
            _d975dc811624.args[1] = (0, _fae22887acec.Oy)(_d975dc811624.args[1], _8eeac2780070.meta);
          }
        });
      }
    },
    9201: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        default: () => l,
        disabled: () => o,
        enabled: () => s,
        order: () => _0486c8e5ad30
      });
      var _fae22887acec = _ebf358b75a0b(37), _bbaa3660c6e1 = _ebf358b75a0b(1472);
      let _0486c8e5ad30 = 2, s = _8eeac2780070 => (0, _fae22887acec.U5)("serviceworkers", _8eeac2780070.url);
      function o(_8eeac2780070, _d975dc811624) {
        Reflect.deleteProperty(Navigator.prototype, "serviceWorker");
      }
      function l(_8eeac2780070, _d975dc811624) {
        let _ebf358b75a0b = new WeakMap;
        _8eeac2780070.Proxy("EventTarget.prototype.addEventListener", {
          apply(_8eeac2780070) {
            _ebf358b75a0b.get(_8eeac2780070.this) && _8eeac2780070.return(void 0);
          }
        }), _8eeac2780070.Proxy("EventTarget.prototype.removeEventListener", {
          apply(_8eeac2780070) {
            _ebf358b75a0b.get(_8eeac2780070.this) && _8eeac2780070.return(void 0);
          }
        }), _8eeac2780070.Proxy("ServiceWorkerContainer.prototype.getRegistration", {
          apply(_8eeac2780070) {
            _8eeac2780070.return(new Promise(_8eeac2780070 => _8eeac2780070(registration)));
          }
        }), _8eeac2780070.Proxy("ServiceWorkerContainer.prototype.getRegistrations", {
          apply(_8eeac2780070) {
            _8eeac2780070.return(new Promise(_8eeac2780070 => _8eeac2780070([ registration ])));
          }
        }), _8eeac2780070.Trap("ServiceWorkerContainer.prototype.ready", {
          get: _8eeac2780070 => new Promise(_8eeac2780070 => _8eeac2780070(registration))
        }), _8eeac2780070.Trap("ServiceWorkerContainer.prototype.controller", {
          get: _8eeac2780070 => registration?.active
        }), _8eeac2780070.Proxy("ServiceWorkerContainer.prototype.register", {
          apply(_d975dc811624) {
            let _fae22887acec = new EventTarget;
            Object.setPrototypeOf(_fae22887acec, self.ServiceWorkerRegistration.prototype), 
            _fae22887acec.constructor = _d975dc811624.fn;
            let _0486c8e5ad30 = (0, _bbaa3660c6e1.Oy)(_d975dc811624.args[0], _8eeac2780070.meta) + "?dest=serviceworker";
            _d975dc811624.args[1] && "module" === _d975dc811624.args[1].type && (_0486c8e5ad30 += "&type=module");
            let _c5b4b25078d6 = _8eeac2780070.natives.construct("SharedWorker", _0486c8e5ad30).port, _4d778195d27f = {
              scope: _d975dc811624.args[0],
              active: _c5b4b25078d6
            }, _9fc5b21180bb = _8eeac2780070.descriptors.get("ServiceWorkerContainer.prototype.controller", _8eeac2780070.serviceWorker);
            _8eeac2780070.natives.call("ServiceWorker.prototype.postMessage", _9fc5b21180bb, {
              studyjet$type: "registerServiceWorker",
              port: _c5b4b25078d6,
              origin: _8eeac2780070.url.origin
            }, [ _c5b4b25078d6 ]), _ebf358b75a0b.set(_fae22887acec, _4d778195d27f), _d975dc811624.return(new Promise(_8eeac2780070 => _8eeac2780070(_fae22887acec)));
          }
        });
      }
    },
    5289: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      function n(_8eeac2780070, _d975dc811624) {
        let _ebf358b75a0b = {
          get(_d975dc811624, _ebf358b75a0b) {
            switch (_ebf358b75a0b) {
             case "getItem":
              return _ebf358b75a0b => _d975dc811624.getItem(_8eeac2780070.url.host + "@" + _ebf358b75a0b);

             case "setItem":
              return (_ebf358b75a0b, _fae22887acec) => _d975dc811624.setItem(_8eeac2780070.url.host + "@" + _ebf358b75a0b, _fae22887acec);

             case "removeItem":
              return _ebf358b75a0b => _d975dc811624.removeItem(_8eeac2780070.url.host + "@" + _ebf358b75a0b);

             case "clear":
              return () => {
                for (let _ebf358b75a0b in Object.keys(_d975dc811624)) _ebf358b75a0b.startsWith(_8eeac2780070.url.host) && _d975dc811624.removeItem(_ebf358b75a0b);
              };

             case "key":
              return _ebf358b75a0b => {
                let _fae22887acec = Object.keys(_d975dc811624).filter(_d975dc811624 => _d975dc811624.startsWith(_8eeac2780070.url.host));
                return _d975dc811624.getItem(_fae22887acec[_ebf358b75a0b]);
              };

             case "length":
              return Object.keys(_d975dc811624).filter(_d975dc811624 => _d975dc811624.startsWith(_8eeac2780070.url.host)).length;

             default:
              if (_ebf358b75a0b in Object.prototype || "symbol" == typeof _ebf358b75a0b) return Reflect.get(_d975dc811624, _ebf358b75a0b);
              return _d975dc811624.getItem(_8eeac2780070.url.host + "@" + _ebf358b75a0b);
            }
          },
          set: (_d975dc811624, _ebf358b75a0b, _fae22887acec) => (_d975dc811624.setItem(_8eeac2780070.url.host + "@" + _ebf358b75a0b, _fae22887acec), 
          !0),
          ownKeys: _d975dc811624 => Reflect.ownKeys(_d975dc811624).filter(_d975dc811624 => "string" == typeof _d975dc811624 && _d975dc811624.startsWith(_8eeac2780070.url.host)).map(_d975dc811624 => "string" == typeof _d975dc811624 ? _d975dc811624.substring(_8eeac2780070.url.host.length + 1) : _d975dc811624),
          getOwnPropertyDescriptor: (_d975dc811624, _ebf358b75a0b) => ({
            value: _d975dc811624.getItem(_8eeac2780070.url.host + "@" + _ebf358b75a0b),
            enumerable: !0,
            configurable: !0,
            writable: !0
          }),
          defineProperty: (_d975dc811624, _ebf358b75a0b, _fae22887acec) => (_d975dc811624.setItem(_8eeac2780070.url.host + "@" + _ebf358b75a0b, _fae22887acec.value), 
          !0)
        };
        _d975dc811624.localStorage;
        let _fae22887acec = new Proxy(_d975dc811624.localStorage, _ebf358b75a0b), _bbaa3660c6e1 = new Proxy(_d975dc811624.sessionStorage, _ebf358b75a0b);
        delete _d975dc811624.localStorage, delete _d975dc811624.sessionStorage, _d975dc811624.localStorage = _fae22887acec, 
        _d975dc811624.sessionStorage = _bbaa3660c6e1;
      }
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        default: () => n
      });
    },
    1323: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        isdedicated: () => _11590423c4ed,
        isemulatedsw: () => _a3a9859aeb07,
        isshared: () => _8a98072c4f6f,
        issw: () => _fe5e93e0a07e,
        iswindow: () => _6c0b4fee9c25,
        isworker: () => _fb4ea2a6f85c,
        loadAndHook: () => g
      });
      var _fae22887acec = _ebf358b75a0b(37), _bbaa3660c6e1 = _ebf358b75a0b(2794), _0486c8e5ad30 = _ebf358b75a0b(3255), _c5b4b25078d6 = _ebf358b75a0b(1862), _4d778195d27f = _ebf358b75a0b(8409), _9fc5b21180bb = _ebf358b75a0b(8665).A;
      let _6c0b4fee9c25 = "window" in globalThis && window instanceof Window, _fb4ea2a6f85c = "WorkerGlobalScope" in globalThis, _fe5e93e0a07e = "ServiceWorkerGlobalScope" in globalThis, _11590423c4ed = "DedicatedWorkerGlobalScope" in globalThis, _8a98072c4f6f = "SharedWorkerGlobalScope" in globalThis, _a3a9859aeb07 = "location" in globalThis && "serviceworker" === new URL(globalThis.location.href).searchParams.get("dest");
      function g(_8eeac2780070) {
        if ((0, _fae22887acec.Nk)(_8eeac2780070), _9fc5b21180bb.log("initializing studyjet client"), 
        !(_bbaa3660c6e1.pX in globalThis)) {
          (0, _fae22887acec.Ec)();
          let _8eeac2780070 = new _0486c8e5ad30.StudyJetClient(globalThis), _d975dc811624 = globalThis.frameElement;
          _d975dc811624 && !_d975dc811624.name && (_d975dc811624.name = `${Array(8).fill(0).map(() => Math.floor(36 * Math.random()).toString(36)).join("")}`), 
          globalThis.COOKIE && _8eeac2780070.loadcookies(globalThis.COOKIE), _8eeac2780070.hook(), 
          _a3a9859aeb07 && new _4d778195d27f.StudyJetServiceWorkerRuntime(_8eeac2780070).hook();
          let _ebf358b75a0b = new _c5b4b25078d6.StudyJetContextEvent(_8eeac2780070.global.window, _8eeac2780070);
          _8eeac2780070.frame?.dispatchEvent(_ebf358b75a0b);
          let _bbaa3660c6e1 = new _c5b4b25078d6.UrlChangeEvent(_8eeac2780070.url.href);
          _8eeac2780070.isSubframe || _8eeac2780070.frame?.dispatchEvent(_bbaa3660c6e1);
        }
        Reflect.deleteProperty(globalThis, "WASM"), Reflect.deleteProperty(globalThis, "COOKIE");
      }
    },
    1862: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        NavigateEvent: () => i,
        StudyJetContextEvent: () => s,
        StudyJetGlobalDownloadEvent: () => n,
        UrlChangeEvent: () => a
      });
      class n extends Event {
        download;
        type="download";
        constructor(_8eeac2780070) {
          super("download"), this.download = _8eeac2780070;
        }
      }
      class i extends Event {
        url;
        type="navigate";
        constructor(_8eeac2780070) {
          super("navigate"), this.url = _8eeac2780070;
        }
      }
      class a extends Event {
        url;
        type="urlchange";
        constructor(_8eeac2780070) {
          super("urlchange"), this.url = _8eeac2780070;
        }
      }
      class s extends Event {
        window;
        client;
        type="contextInit";
        constructor(_8eeac2780070, _d975dc811624) {
          super("contextInit"), this.window = _8eeac2780070, this.client = _d975dc811624;
        }
      }
    },
    94: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      function n(_8eeac2780070, _d975dc811624) {
        return Reflect.getOwnPropertyDescriptor(_8eeac2780070, _d975dc811624);
      }
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        getOwnPropertyDescriptorHandler: () => n
      });
    },
    3255: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        NavigateEvent: () => _0486c8e5ad30.NavigateEvent,
        StudyJetClient: () => _fae22887acec.StudyJetClient,
        StudyJetContextEvent: () => _0486c8e5ad30.StudyJetContextEvent,
        StudyJetGlobalDownloadEvent: () => _0486c8e5ad30.StudyJetGlobalDownloadEvent,
        StudyJetServiceWorkerRuntime: () => _9fc5b21180bb.StudyJetServiceWorkerRuntime,
        UrlChangeEvent: () => _0486c8e5ad30.UrlChangeEvent,
        createLocationProxy: () => _4d778195d27f.createLocationProxy,
        getOwnPropertyDescriptorHandler: () => _c5b4b25078d6.getOwnPropertyDescriptorHandler,
        isdedicated: () => _bbaa3660c6e1.isdedicated,
        isemulatedsw: () => _bbaa3660c6e1.isemulatedsw,
        isshared: () => _bbaa3660c6e1.isshared,
        issw: () => _bbaa3660c6e1.issw,
        iswindow: () => _bbaa3660c6e1.iswindow,
        isworker: () => _bbaa3660c6e1.isworker,
        loadAndHook: () => _bbaa3660c6e1.loadAndHook
      });
      var _fae22887acec = _ebf358b75a0b(336), _bbaa3660c6e1 = _ebf358b75a0b(1323), _0486c8e5ad30 = _ebf358b75a0b(1862), _c5b4b25078d6 = _ebf358b75a0b(94), _4d778195d27f = _ebf358b75a0b(3696), _9fc5b21180bb = _ebf358b75a0b(8409);
      _ebf358b75a0b(3255);
    },
    3696: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        createLocationProxy: () => s
      });
      var _fae22887acec = _ebf358b75a0b(1862), _bbaa3660c6e1 = _ebf358b75a0b(1472), _0486c8e5ad30 = _ebf358b75a0b(1323);
      function s(_8eeac2780070, _d975dc811624) {
        let _ebf358b75a0b = _0486c8e5ad30.iswindow ? _d975dc811624.Location : _d975dc811624.WorkerLocation, _c5b4b25078d6 = {};
        Object.setPrototypeOf(_c5b4b25078d6, _ebf358b75a0b.prototype), _c5b4b25078d6.constructor = _ebf358b75a0b;
        let _4d778195d27f = _0486c8e5ad30.iswindow ? _d975dc811624.location : _ebf358b75a0b.prototype;
        for (let _ebf358b75a0b of [ "protocol", "hash", "host", "hostname", "href", "origin", "pathname", "port", "search" ]) {
          let _bbaa3660c6e1 = _8eeac2780070.natives.call("Object.getOwnPropertyDescriptor", null, _4d778195d27f, _ebf358b75a0b);
          if (!_bbaa3660c6e1) continue;
          let _0486c8e5ad30 = {
            configurable: !1,
            enumerable: !0
          };
          _bbaa3660c6e1.get && (_0486c8e5ad30.get = new Proxy(_bbaa3660c6e1.get, {
            apply: () => _8eeac2780070.url[_ebf358b75a0b]
          })), _bbaa3660c6e1.set && (_0486c8e5ad30.set = new Proxy(_bbaa3660c6e1.set, {
            apply(_bbaa3660c6e1, _0486c8e5ad30, _c5b4b25078d6) {
              if ("href" === _ebf358b75a0b) {
                _8eeac2780070.url = _c5b4b25078d6[0];
                return;
              }
              if ("hash" === _ebf358b75a0b) {
                _d975dc811624.location.hash = _c5b4b25078d6[0];
                let _ebf358b75a0b = new _fae22887acec.UrlChangeEvent(_8eeac2780070.url.href);
                _8eeac2780070.isSubframe || _8eeac2780070.frame?.dispatchEvent(_ebf358b75a0b);
                return;
              }
              let _4d778195d27f = new URL(_8eeac2780070.url.href);
              _4d778195d27f[_ebf358b75a0b] = _c5b4b25078d6[0], _8eeac2780070.url = _4d778195d27f;
            }
          })), Object.defineProperty(_c5b4b25078d6, _ebf358b75a0b, _0486c8e5ad30);
        }
        return _c5b4b25078d6.toString = new Proxy(_d975dc811624.location.toString, {
          apply: () => _8eeac2780070.url.href
        }), _d975dc811624.location.valueOf && (_c5b4b25078d6.valueOf = new Proxy(_d975dc811624.location.valueOf, {
          apply: () => _8eeac2780070.url.href
        })), _d975dc811624.location.assign && (_c5b4b25078d6.assign = new Proxy(_d975dc811624.location.assign, {
          apply(_ebf358b75a0b, _0486c8e5ad30, _c5b4b25078d6) {
            _c5b4b25078d6[0] = (0, _bbaa3660c6e1.Oy)(_c5b4b25078d6[0], _8eeac2780070.meta), 
            Reflect.apply(_ebf358b75a0b, _d975dc811624.location, _c5b4b25078d6);
            let _4d778195d27f = new _fae22887acec.UrlChangeEvent(_8eeac2780070.url.href);
            _8eeac2780070.isSubframe || _8eeac2780070.frame?.dispatchEvent(_4d778195d27f);
          }
        })), _d975dc811624.location.reload && (_c5b4b25078d6.reload = new Proxy(_d975dc811624.location.reload, {
          apply(_8eeac2780070, _ebf358b75a0b, _fae22887acec) {
            Reflect.apply(_8eeac2780070, _d975dc811624.location, _fae22887acec);
          }
        })), _d975dc811624.location.replace && (_c5b4b25078d6.replace = new Proxy(_d975dc811624.location.replace, {
          apply(_ebf358b75a0b, _0486c8e5ad30, _c5b4b25078d6) {
            _c5b4b25078d6[0] = (0, _bbaa3660c6e1.Oy)(_c5b4b25078d6[0], _8eeac2780070.meta), 
            Reflect.apply(_ebf358b75a0b, _d975dc811624.location, _c5b4b25078d6);
            let _4d778195d27f = new _fae22887acec.UrlChangeEvent(_8eeac2780070.url.href);
            _8eeac2780070.isSubframe || _8eeac2780070.frame?.dispatchEvent(_4d778195d27f);
          }
        })), _c5b4b25078d6;
      }
    },
    8382: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      function n(_8eeac2780070) {
        _8eeac2780070.Proxy("console.clear", {
          apply(_8eeac2780070) {
            _8eeac2780070.return(void 0);
          }
        });
        let _d975dc811624 = console.log;
        _8eeac2780070.Trap("console.log", {
          set(_8eeac2780070, _d975dc811624) {},
          get: _8eeac2780070 => _d975dc811624
        });
      }
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        default: () => n
      });
    },
    4634: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        default: () => i
      });
      var _fae22887acec = _ebf358b75a0b(1472);
      function i(_8eeac2780070) {
        _8eeac2780070.Proxy("URL.createObjectURL", {
          apply(_d975dc811624) {
            let _ebf358b75a0b = _d975dc811624.call();
            _ebf358b75a0b.startsWith("blob:") ? _d975dc811624.return((0, _fae22887acec.IP)(_ebf358b75a0b, _8eeac2780070.meta)) : _d975dc811624.return(_ebf358b75a0b);
          }
        }), _8eeac2780070.Proxy("URL.revokeObjectURL", {
          apply(_8eeac2780070) {
            _8eeac2780070.args[0] = (0, _fae22887acec.$n)(_8eeac2780070.args[0]);
          }
        });
      }
    },
    5026: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        default: () => i
      });
      var _fae22887acec = _ebf358b75a0b(1472);
      function i(_8eeac2780070, _d975dc811624) {
        _8eeac2780070.Proxy("CacheStorage.prototype.open", {
          apply(_d975dc811624) {
            _d975dc811624.args[0] = `${_8eeac2780070.url.origin}@${_d975dc811624.args[0]}`;
          }
        }), _8eeac2780070.Proxy("CacheStorage.prototype.has", {
          apply(_d975dc811624) {
            _d975dc811624.args[0] = `${_8eeac2780070.url.origin}@${_d975dc811624.args[0]}`;
          }
        }), _8eeac2780070.Proxy("CacheStorage.prototype.match", {
          apply(_d975dc811624) {
            ("string" == typeof _d975dc811624.args[0] || _d975dc811624.args[0] instanceof URL) && (_d975dc811624.args[0] = (0, 
            _fae22887acec.Oy)(_d975dc811624.args[0], _8eeac2780070.meta));
          }
        }), _8eeac2780070.Proxy("CacheStorage.prototype.delete", {
          apply(_d975dc811624) {
            _d975dc811624.args[0] = `${_8eeac2780070.url.origin}@${_d975dc811624.args[0]}`;
          }
        }), _8eeac2780070.Proxy("Cache.prototype.add", {
          apply(_d975dc811624) {
            ("string" == typeof _d975dc811624.args[0] || _d975dc811624.args[0] instanceof URL) && (_d975dc811624.args[0] = (0, 
            _fae22887acec.Oy)(_d975dc811624.args[0], _8eeac2780070.meta));
          }
        }), _8eeac2780070.Proxy("Cache.prototype.addAll", {
          apply(_d975dc811624) {
            for (let _ebf358b75a0b = 0; _ebf358b75a0b < _d975dc811624.args[0].length; _ebf358b75a0b++) ("string" == typeof _d975dc811624.args[0][_ebf358b75a0b] || _d975dc811624.args[0][_ebf358b75a0b] instanceof URL) && (_d975dc811624.args[0][_ebf358b75a0b] = (0, 
            _fae22887acec.Oy)(_d975dc811624.args[0][_ebf358b75a0b], _8eeac2780070.meta));
          }
        }), _8eeac2780070.Proxy("Cache.prototype.put", {
          apply(_d975dc811624) {
            ("string" == typeof _d975dc811624.args[0] || _d975dc811624.args[0] instanceof URL) && (_d975dc811624.args[0] = (0, 
            _fae22887acec.Oy)(_d975dc811624.args[0], _8eeac2780070.meta));
          }
        }), _8eeac2780070.Proxy("Cache.prototype.match", {
          apply(_d975dc811624) {
            ("string" == typeof _d975dc811624.args[0] || _d975dc811624.args[0] instanceof URL) && (_d975dc811624.args[0] = (0, 
            _fae22887acec.Oy)(_d975dc811624.args[0], _8eeac2780070.meta));
          }
        }), _8eeac2780070.Proxy("Cache.prototype.matchAll", {
          apply(_d975dc811624) {
            (_d975dc811624.args[0] && "string" == typeof _d975dc811624.args[0] || _d975dc811624.args[0] && _d975dc811624.args[0] instanceof URL) && (_d975dc811624.args[0] = (0, 
            _fae22887acec.Oy)(_d975dc811624.args[0], _8eeac2780070.meta));
          }
        }), _8eeac2780070.Proxy("Cache.prototype.keys", {
          apply(_d975dc811624) {
            (_d975dc811624.args[0] && "string" == typeof _d975dc811624.args[0] || _d975dc811624.args[0] && _d975dc811624.args[0] instanceof URL) && (_d975dc811624.args[0] = (0, 
            _fae22887acec.Oy)(_d975dc811624.args[0], _8eeac2780070.meta));
          }
        }), _8eeac2780070.Proxy("Cache.prototype.delete", {
          apply(_d975dc811624) {
            ("string" == typeof _d975dc811624.args[0] || _d975dc811624.args[0] instanceof URL) && (_d975dc811624.args[0] = (0, 
            _fae22887acec.Oy)(_d975dc811624.args[0], _8eeac2780070.meta));
          }
        });
      }
    },
    6627: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        default: () => i
      });
      var _fae22887acec = _ebf358b75a0b(1323);
      function i(_8eeac2780070, _d975dc811624) {
        let r = _8eeac2780070 => {
          let _ebf358b75a0b = _8eeac2780070.split("."), _fae22887acec = _ebf358b75a0b.pop(), _bbaa3660c6e1 = _ebf358b75a0b.reduce((_8eeac2780070, _d975dc811624) => _8eeac2780070?.[_d975dc811624], _d975dc811624);
          _bbaa3660c6e1 && _fae22887acec && _fae22887acec in _bbaa3660c6e1 && delete _bbaa3660c6e1[_fae22887acec];
        };
        r("BarcodeDetector"), r("FaceDetector"), r("TextDetector"), _fae22887acec.iswindow && r("ServiceWorkerRegistration.prototype.sync"), 
        _fae22887acec.isemulatedsw && (r("SyncManager"), r("SyncEvent")), r("TrustedHTML"), 
        r("TrustedScript"), r("TrustedScriptURL"), r("TrustedTypePolicy"), r("TrustedTypePolicyFactory"), 
        _d975dc811624.__defineGetter__("trustedTypes", () => void 0), r("Navigator.prototype.joinAdInterestGroup"), 
        _fae22887acec.iswindow && (r("MediaDevices.prototype.setCaptureHandleConfig"), r("Navigator.prototype.bluetooth"), 
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
    582: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        argdbg: () => a,
        default: () => s,
        enabled: () => i
      });
      var _fae22887acec = _ebf358b75a0b(37);
      let i = _8eeac2780070 => (0, _fae22887acec.U5)("captureErrors", _8eeac2780070.url);
      function a(_8eeac2780070, _d975dc811624 = []) {
        switch (typeof _8eeac2780070) {
         case "string":
          break;

         case "object":
          if (_8eeac2780070 && _8eeac2780070[Symbol.iterator] && "function" == typeof _8eeac2780070[Symbol.iterator]) for (let _ebf358b75a0b in _8eeac2780070) {
            let _fae22887acec = Object.getOwnPropertyDescriptor(_8eeac2780070, _ebf358b75a0b);
            if (_fae22887acec && _fae22887acec.get) continue;
            let _bbaa3660c6e1 = _8eeac2780070[_ebf358b75a0b];
            _d975dc811624.includes(_bbaa3660c6e1) || (_d975dc811624.push(_bbaa3660c6e1), a(_bbaa3660c6e1, _d975dc811624));
          }
        }
      }
      function s(_8eeac2780070, _d975dc811624) {
        let _ebf358b75a0b = console.warn;
        _d975dc811624.$scramerr = function(_8eeac2780070) {
          _ebf358b75a0b("CAUGHT ERROR", _8eeac2780070);
        }, _d975dc811624.$scramdbg = function(_8eeac2780070, _d975dc811624) {
          return _8eeac2780070 && "object" == typeof _8eeac2780070 && _8eeac2780070.length > 0 && a(_8eeac2780070), 
          a(_d975dc811624), _d975dc811624;
        }, _8eeac2780070.Proxy("Promise.prototype.catch", {
          apply(_8eeac2780070) {
            _8eeac2780070.args[0] && (_8eeac2780070.args[0] = new Proxy(_8eeac2780070.args[0], {
              apply(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
                Reflect.apply(_8eeac2780070, _d975dc811624, _ebf358b75a0b);
              }
            }));
          }
        });
      }
    },
    6143: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        default: () => s,
        enabled: () => a
      });
      var _fae22887acec = _ebf358b75a0b(37), _bbaa3660c6e1 = _ebf358b75a0b(1472);
      let a = _8eeac2780070 => (0, _fae22887acec.U5)("cleanErrors", _8eeac2780070.url);
      function s(_8eeac2780070, _d975dc811624) {
        let r = (_8eeac2780070, _d975dc811624) => {
          let _ebf358b75a0b = _8eeac2780070.stack;
          for (let _8eeac2780070 = 0; _8eeac2780070 < _d975dc811624.length; _8eeac2780070++) {
            let _0486c8e5ad30 = _d975dc811624[_8eeac2780070].getFileName();
            try {
              if (_0486c8e5ad30.endsWith(_fae22887acec.$W.files.all)) {
                let _8eeac2780070 = _ebf358b75a0b.split("\n"), _d975dc811624 = _8eeac2780070.find(_8eeac2780070 => _8eeac2780070.includes(_0486c8e5ad30));
                _8eeac2780070.splice(_d975dc811624, 1), _ebf358b75a0b = _8eeac2780070.join("\n");
                continue;
              }
            } catch {}
            try {
              _ebf358b75a0b = _ebf358b75a0b.replaceAll(_0486c8e5ad30, (0, _bbaa3660c6e1.v2)(_0486c8e5ad30));
            } catch {}
          }
          return _ebf358b75a0b;
        };
        _8eeac2780070.Trap("Error.prepareStackTrace", {
          get: _8eeac2780070 => r,
          set(_8eeac2780070) {}
        });
      }
    },
    591: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        default: () => a,
        indirectEval: () => s
      });
      var _fae22887acec = _ebf358b75a0b(37), _bbaa3660c6e1 = _ebf358b75a0b(1478);
      function a(_8eeac2780070, _d975dc811624) {
        Object.defineProperty(_d975dc811624, _fae22887acec.$W.globals.rewritefn, {
          value: function(_d975dc811624) {
            return "string" != typeof _d975dc811624 ? _d975dc811624 : (0, _bbaa3660c6e1.o)(_d975dc811624, "(direct eval proxy)", _8eeac2780070.meta);
          },
          writable: !1,
          configurable: !1
        });
      }
      function s(_8eeac2780070, _d975dc811624) {
        let _ebf358b75a0b;
        return "string" != typeof _d975dc811624 ? _d975dc811624 : ("accounts.google.com" === this.url.hostname ? (console.log("USING STRICT EVAL - BOTGUARD"), 
        _ebf358b75a0b = Function(`\n\t\t\t"use strict";\n\t\t\treturn eval;\n\t\t`)) : _ebf358b75a0b = this.global.eval, 
        _ebf358b75a0b((0, _bbaa3660c6e1.o)(_d975dc811624, "(indirect eval proxy)", this.meta)));
      }
    },
    3481: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        default: () => o
      });
      var _fae22887acec = _ebf358b75a0b(1323), _bbaa3660c6e1 = _ebf358b75a0b(1472), _0486c8e5ad30 = _ebf358b75a0b(94);
      let _c5b4b25078d6 = Symbol.for("studyjet original onevent function");
      function o(_8eeac2780070, _d975dc811624) {
        let _ebf358b75a0b = {
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
              return "object" == typeof this.data && "$studyjet$origin" in this.data ? this.data.$studyjet$origin : _8eeac2780070.url.origin;
            },
            data() {
              return "object" == typeof this.data && "$studyjet$data" in this.data ? this.data.$studyjet$data : this.data;
            }
          },
          hashchange: {
            oldURL() {
              return (0, _bbaa3660c6e1.v2)(this.oldURL);
            },
            newURL() {
              return (0, _bbaa3660c6e1.v2)(this.newURL);
            }
          },
          storage: {
            _init() {
              return this.key.startsWith(_8eeac2780070.url.host + "@");
            },
            key() {
              return this.key.substring(this.key.indexOf("@") + 1);
            },
            url() {
              return (0, _bbaa3660c6e1.v2)(this.url);
            }
          }
        };
        function o(_8eeac2780070) {
          return new Proxy(_8eeac2780070, {
            apply(_8eeac2780070, _fae22887acec, _bbaa3660c6e1) {
              let _c5b4b25078d6 = _bbaa3660c6e1[0];
              if (_c5b4b25078d6.isTrusted) {
                let _8eeac2780070 = _c5b4b25078d6.type;
                if (_8eeac2780070 in _ebf358b75a0b) {
                  let _d975dc811624 = _ebf358b75a0b[_8eeac2780070];
                  if (_d975dc811624._init && !1 === _d975dc811624._init.call(_c5b4b25078d6)) return;
                  _bbaa3660c6e1[0] = new Proxy(_c5b4b25078d6, {
                    get(_8eeac2780070, _ebf358b75a0b, _fae22887acec) {
                      let _bbaa3660c6e1 = Reflect.get(_8eeac2780070, _ebf358b75a0b);
                      return _ebf358b75a0b in _d975dc811624 ? _d975dc811624[_ebf358b75a0b].call(_8eeac2780070) : "function" == typeof _bbaa3660c6e1 ? new Proxy(_bbaa3660c6e1, {
                        apply: (_8eeac2780070, _d975dc811624, _ebf358b75a0b) => _d975dc811624 === _fae22887acec ? Reflect.apply(_8eeac2780070, _c5b4b25078d6, _ebf358b75a0b) : Reflect.apply(_8eeac2780070, _d975dc811624, _ebf358b75a0b)
                      }) : _bbaa3660c6e1;
                    },
                    getOwnPropertyDescriptor: _0486c8e5ad30.getOwnPropertyDescriptorHandler
                  });
                }
              }
              return _d975dc811624.event || Object.defineProperty(_d975dc811624, "event", {
                get: () => _bbaa3660c6e1[0],
                configurable: !0
              }), Reflect.apply(_8eeac2780070, _fae22887acec, _bbaa3660c6e1);
            },
            getOwnPropertyDescriptor: _0486c8e5ad30.getOwnPropertyDescriptorHandler
          });
        }
        _8eeac2780070.Proxy("EventTarget.prototype.addEventListener", {
          apply(_d975dc811624) {
            if ("function" != typeof _d975dc811624.args[1]) return;
            let _ebf358b75a0b = _d975dc811624.args[1], _fae22887acec = o(_ebf358b75a0b);
            _d975dc811624.args[1] = _fae22887acec;
            let _bbaa3660c6e1 = _8eeac2780070.eventcallbacks.get(_d975dc811624.this);
            (_bbaa3660c6e1 ||= []).push({
              event: _d975dc811624.args[0],
              originalCallback: _ebf358b75a0b,
              proxiedCallback: _fae22887acec
            }), _8eeac2780070.eventcallbacks.set(_d975dc811624.this, _bbaa3660c6e1);
          }
        }), _8eeac2780070.Proxy("EventTarget.prototype.removeEventListener", {
          apply(_d975dc811624) {
            if ("function" != typeof _d975dc811624.args[1]) return;
            let _ebf358b75a0b = _8eeac2780070.eventcallbacks.get(_d975dc811624.this);
            if (!_ebf358b75a0b) return;
            let _fae22887acec = _ebf358b75a0b.findIndex(_8eeac2780070 => _8eeac2780070.event === _d975dc811624.args[0] && _8eeac2780070.originalCallback === _d975dc811624.args[1]);
            if (-1 === _fae22887acec) return;
            let _bbaa3660c6e1 = _ebf358b75a0b.splice(_fae22887acec, 1);
            _8eeac2780070.eventcallbacks.set(_d975dc811624.this, _ebf358b75a0b), _d975dc811624.args[1] = _bbaa3660c6e1[0].proxiedCallback;
          }
        });
        let _4d778195d27f = [ _d975dc811624.self, _d975dc811624.MessagePort.prototype ];
        for (let _bbaa3660c6e1 of (_fae22887acec.iswindow && _4d778195d27f.push(_d975dc811624.HTMLElement.prototype), 
        _d975dc811624.Worker && _4d778195d27f.push(_d975dc811624.Worker.prototype), _4d778195d27f)) for (let _d975dc811624 of Reflect.ownKeys(_bbaa3660c6e1)) if ("string" == typeof _d975dc811624 && _d975dc811624.startsWith("on") && _ebf358b75a0b[_d975dc811624.slice(2)]) {
          let _ebf358b75a0b = _8eeac2780070.natives.call("Object.getOwnPropertyDescriptor", null, _bbaa3660c6e1, _d975dc811624);
          if (!_ebf358b75a0b.get || !_ebf358b75a0b.set || !_ebf358b75a0b.configurable) continue;
          _8eeac2780070.RawTrap(_bbaa3660c6e1, _d975dc811624, {
            get(_8eeac2780070) {
              return this[_c5b4b25078d6] ? this[_c5b4b25078d6] : _8eeac2780070.get();
            },
            set(_8eeac2780070, _d975dc811624) {
              if (this[_c5b4b25078d6] = _d975dc811624, "function" != typeof _d975dc811624) return _8eeac2780070.set(_d975dc811624);
              _8eeac2780070.set(o(_d975dc811624));
            }
          });
        }
      }
    },
    249: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        default: () => a
      });
      var _fae22887acec = _ebf358b75a0b(1478);
      function i(_8eeac2780070, _d975dc811624) {
        let _ebf358b75a0b = _8eeac2780070.call().toString(), _bbaa3660c6e1 = (0, _fae22887acec.o)(`return ${_ebf358b75a0b}`, "(function proxy)", _d975dc811624.meta);
        _8eeac2780070.return(_8eeac2780070.fn(_bbaa3660c6e1)());
      }
      function a(_8eeac2780070, _d975dc811624) {
        let _ebf358b75a0b = {
          apply(_d975dc811624) {
            i(_d975dc811624, _8eeac2780070);
          },
          construct(_d975dc811624) {
            i(_d975dc811624, _8eeac2780070);
          }
        };
        _8eeac2780070.Proxy("Function", _ebf358b75a0b);
        let _fae22887acec = _8eeac2780070.natives.call("eval", null, "(function () {})").constructor, _bbaa3660c6e1 = _8eeac2780070.natives.call("eval", null, "(async function () {})").constructor, _0486c8e5ad30 = _8eeac2780070.natives.call("eval", null, "(function* () {})").constructor, _c5b4b25078d6 = _8eeac2780070.natives.call("eval", null, "(async function* () {})").constructor;
        _8eeac2780070.RawProxy(_fae22887acec.prototype, "constructor", _ebf358b75a0b), _8eeac2780070.RawProxy(_bbaa3660c6e1.prototype, "constructor", _ebf358b75a0b), 
        _8eeac2780070.RawProxy(_0486c8e5ad30.prototype, "constructor", _ebf358b75a0b), _8eeac2780070.RawProxy(_c5b4b25078d6.prototype, "constructor", _ebf358b75a0b);
      }
    },
    2468: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        default: () => a
      });
      var _fae22887acec = _ebf358b75a0b(37), _bbaa3660c6e1 = _ebf358b75a0b(1472);
      function a(_8eeac2780070, _d975dc811624) {
        let _ebf358b75a0b = _8eeac2780070.natives.call("Function", null, "url", "return import(url)");
        Object.defineProperty(_d975dc811624, _fae22887acec.$W.globals.importfn, {
          value: function(_d975dc811624, _fae22887acec) {
            let _0486c8e5ad30 = new URL(_fae22887acec, _d975dc811624).href;
            return _fae22887acec.includes(":") || _fae22887acec.startsWith("/") || _fae22887acec.startsWith(".") || _fae22887acec.startsWith("..") ? _ebf358b75a0b(`${(0, 
            _bbaa3660c6e1.Oy)(_0486c8e5ad30, _8eeac2780070.meta)}?type=module`) : _ebf358b75a0b(_fae22887acec);
          },
          writable: !1,
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_d975dc811624, _fae22887acec.$W.globals.metafn, {
          value: function(_8eeac2780070, _d975dc811624) {
            return _8eeac2780070.url = _d975dc811624, _8eeac2780070.resolve = function(_8eeac2780070) {
              return new URL(_8eeac2780070, _d975dc811624).href;
            }, _8eeac2780070;
          },
          writable: !1,
          configurable: !1,
          enumerable: !1
        });
      }
    },
    4338: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      function n(_8eeac2780070) {
        _8eeac2780070.Proxy("IDBFactory.prototype.open", {
          apply(_d975dc811624) {
            _d975dc811624.args[0] = `${_8eeac2780070.url.origin}@${_d975dc811624.args[0]}`;
          }
        }), _8eeac2780070.Trap("IDBDatabase.prototype.name", {
          get(_8eeac2780070) {
            let _d975dc811624 = _8eeac2780070.get();
            return _d975dc811624.substring(_d975dc811624.indexOf("@") + 1);
          }
        });
      }
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        default: () => n
      });
    },
    6593: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      function n(_8eeac2780070) {
        _8eeac2780070.Proxy("StorageManager.prototype.getDirectory", {
          apply(_d975dc811624) {
            let _ebf358b75a0b = _d975dc811624.call();
            _d975dc811624.return((async () => {
              let _d975dc811624 = await _ebf358b75a0b, _fae22887acec = await _d975dc811624.getDirectoryHandle(`${_8eeac2780070.url.origin.replace(/\/|\s|\./g, "-")}`, {
                create: !0
              });
              return Object.defineProperty(_fae22887acec, "name", {
                value: "",
                writable: !1
              }), _fae22887acec;
            })());
          }
        });
      }
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        default: () => n
      });
    },
    1320: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        default: () => s
      });
      var _fae22887acec = _ebf358b75a0b(1323), _bbaa3660c6e1 = _ebf358b75a0b(2794), _0486c8e5ad30 = _ebf358b75a0b(1914);
      function s(_8eeac2780070) {
        _fae22887acec.iswindow && _8eeac2780070.Proxy("window.postMessage", {
          apply(_8eeac2780070) {
            let {constructor: {constructor: _d975dc811624}} = "object" == typeof _8eeac2780070.args[0] && null !== _8eeac2780070.args[0] ? _8eeac2780070.args[0] : "object" == typeof _8eeac2780070.args[2] && null !== _8eeac2780070.args[2] ? _8eeac2780070.args[2] : _8eeac2780070.this && _0486c8e5ad30.POLLUTANT in _8eeac2780070.this && "object" == typeof _8eeac2780070.this[_0486c8e5ad30.POLLUTANT] && null !== _8eeac2780070.this[_0486c8e5ad30.POLLUTANT] ? _8eeac2780070.this[_0486c8e5ad30.POLLUTANT] : {}, _ebf358b75a0b = _d975dc811624("return globalThis")()[_bbaa3660c6e1.pX], _fae22887acec = _d975dc811624("...args", "this(...args)");
            _8eeac2780070.args[0] = {
              $studyjet$messagetype: "window",
              $studyjet$origin: _ebf358b75a0b.url.origin,
              $studyjet$data: _8eeac2780070.args[0]
            }, "string" == typeof _8eeac2780070.args[1] && (_8eeac2780070.args[1] = "*"), "object" == typeof _8eeac2780070.args[1] && (_8eeac2780070.args[1].targetOrigin = "*"), 
            _8eeac2780070.return(_fae22887acec.call(_8eeac2780070.fn, ..._8eeac2780070.args));
          }
        });
        let _d975dc811624 = [ "MessagePort.prototype.postMessage" ];
        self.Worker && _d975dc811624.push("Worker.prototype.postMessage"), _fae22887acec.iswindow || _d975dc811624.push("self.postMessage"), 
        _8eeac2780070.Proxy(_d975dc811624, {
          apply(_8eeac2780070) {
            _8eeac2780070.args[0] = {
              $studyjet$messagetype: "worker",
              $studyjet$data: _8eeac2780070.args[0]
            };
          }
        });
      }
    },
    1914: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        POLLUTANT: () => _bbaa3660c6e1,
        default: () => a
      });
      var _fae22887acec = _ebf358b75a0b(37);
      let _bbaa3660c6e1 = Symbol.for("studyjet realm pollutant");
      function a(_8eeac2780070, _d975dc811624) {
        Object.defineProperty(_d975dc811624.Object.prototype, _fae22887acec.$W.globals.setrealmfn, {
          value(_8eeac2780070) {
            return Object.defineProperty(this, _bbaa3660c6e1, {
              value: _8eeac2780070,
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
    9701: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        default: () => i
      });
      var _fae22887acec = _ebf358b75a0b(1472);
      function i(_8eeac2780070) {
        _8eeac2780070.Proxy("EventSource", {
          construct(_d975dc811624) {
            _d975dc811624.args[0] = (0, _fae22887acec.Oy)(_d975dc811624.args[0], _8eeac2780070.meta);
          }
        }), _8eeac2780070.Trap("EventSource.prototype.url", {
          get(_8eeac2780070) {
            (0, _fae22887acec.v2)(_8eeac2780070.get());
          }
        });
      }
    },
    6972: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        default: () => a
      });
      var _fae22887acec = _ebf358b75a0b(1323), _bbaa3660c6e1 = _ebf358b75a0b(1472);
      function a(_8eeac2780070) {
        _8eeac2780070.Proxy("fetch", {
          apply(_d975dc811624) {
            ("string" == typeof _d975dc811624.args[0] || _d975dc811624.args[0] instanceof URL) && (_d975dc811624.args[0] = (0, 
            _bbaa3660c6e1.Oy)(_d975dc811624.args[0], _8eeac2780070.meta), _fae22887acec.isemulatedsw && (_d975dc811624.args[0] += "?from=swruntime"));
          }
        }), _8eeac2780070.Proxy("Request", {
          construct(_d975dc811624) {
            ("string" == typeof _d975dc811624.args[0] || _d975dc811624.args[0] instanceof URL) && (_d975dc811624.args[0] = (0, 
            _bbaa3660c6e1.Oy)(_d975dc811624.args[0], _8eeac2780070.meta), _fae22887acec.isemulatedsw && (_d975dc811624.args[0] += "?from=swruntime"));
          }
        }), _8eeac2780070.Trap("Response.prototype.url", {
          get: _8eeac2780070 => (0, _bbaa3660c6e1.v2)(_8eeac2780070.get())
        }), _8eeac2780070.Trap("Request.prototype.url", {
          get: _8eeac2780070 => (0, _bbaa3660c6e1.v2)(_8eeac2780070.get())
        });
      }
    },
    9931: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      function n(_8eeac2780070, _d975dc811624) {
        let _ebf358b75a0b = new WeakMap, _fae22887acec = new WeakMap;
        _8eeac2780070.Proxy("WebSocket", {
          construct(_fae22887acec) {
            let _bbaa3660c6e1 = new EventTarget;
            Object.setPrototypeOf(_bbaa3660c6e1, _fae22887acec.fn.prototype), _bbaa3660c6e1.constructor = _fae22887acec.fn;
            let _0486c8e5ad30 = _8eeac2780070.bare.createWebSocket(_fae22887acec.args[0], _fae22887acec.args[1], null, {
              "User-Agent": _d975dc811624.navigator.userAgent,
              Origin: _8eeac2780070.url.origin
            }), _c5b4b25078d6 = {
              extensions: "",
              protocol: "",
              url: _fae22887acec.args[0],
              binaryType: "blob",
              barews: _0486c8e5ad30,
              onclose: null,
              onerror: null,
              onmessage: null,
              onopen: null
            };
            function o(_8eeac2780070) {
              _c5b4b25078d6["on" + _8eeac2780070.type]?.(new Proxy(_8eeac2780070, {
                get: (_8eeac2780070, _d975dc811624) => "isTrusted" === _d975dc811624 || Reflect.get(_8eeac2780070, _d975dc811624)
              })), _bbaa3660c6e1.dispatchEvent(_8eeac2780070);
            }
            _0486c8e5ad30.addEventListener("open", () => {
              o(new Event("open"));
            }), _0486c8e5ad30.addEventListener("close", _8eeac2780070 => {
              o(new CloseEvent("close", _8eeac2780070));
            }), _0486c8e5ad30.addEventListener("message", async _8eeac2780070 => {
              let _d975dc811624 = _8eeac2780070.data;
              "string" == typeof _d975dc811624 || ("byteLength" in _d975dc811624 ? "blob" === _c5b4b25078d6.binaryType ? _d975dc811624 = new Blob([ _d975dc811624 ]) : Object.setPrototypeOf(_d975dc811624, ArrayBuffer.prototype) : "arrayBuffer" in _d975dc811624 && "arraybuffer" === _c5b4b25078d6.binaryType && Object.setPrototypeOf(_d975dc811624 = await _d975dc811624.arrayBuffer(), ArrayBuffer.prototype)), 
              o(new MessageEvent("message", {
                data: _d975dc811624,
                origin: _8eeac2780070.origin,
                lastEventId: _8eeac2780070.lastEventId,
                source: _8eeac2780070.source,
                ports: _8eeac2780070.ports
              }));
            }), _0486c8e5ad30.addEventListener("error", () => {
              o(new Event("error"));
            }), _ebf358b75a0b.set(_bbaa3660c6e1, _c5b4b25078d6), _fae22887acec.return(_bbaa3660c6e1);
          }
        }), _8eeac2780070.Trap("WebSocket.prototype.binaryType", {
          get: _8eeac2780070 => _ebf358b75a0b.get(_8eeac2780070.this).binaryType,
          set(_8eeac2780070, _d975dc811624) {
            let _fae22887acec = _ebf358b75a0b.get(_8eeac2780070.this);
            ("blob" === _d975dc811624 || "arraybuffer" === _d975dc811624) && (_fae22887acec.binaryType = _d975dc811624);
          }
        }), _8eeac2780070.Trap("WebSocket.prototype.bufferedAmount", {
          get: () => 0
        }), _8eeac2780070.Trap("WebSocket.prototype.extensions", {
          get: _8eeac2780070 => _ebf358b75a0b.get(_8eeac2780070.this).extensions
        }), _8eeac2780070.Trap("WebSocket.prototype.onclose", {
          get: _8eeac2780070 => _ebf358b75a0b.get(_8eeac2780070.this).onclose,
          set(_8eeac2780070, _d975dc811624) {
            _ebf358b75a0b.get(_8eeac2780070.this).onclose = _d975dc811624;
          }
        }), _8eeac2780070.Trap("WebSocket.prototype.onerror", {
          get: _8eeac2780070 => _ebf358b75a0b.get(_8eeac2780070.this).onerror,
          set(_8eeac2780070, _d975dc811624) {
            _ebf358b75a0b.get(_8eeac2780070.this).onerror = _d975dc811624;
          }
        }), _8eeac2780070.Trap("WebSocket.prototype.onmessage", {
          get: _8eeac2780070 => _ebf358b75a0b.get(_8eeac2780070.this).onmessage,
          set(_8eeac2780070, _d975dc811624) {
            _ebf358b75a0b.get(_8eeac2780070.this).onmessage = _d975dc811624;
          }
        }), _8eeac2780070.Trap("WebSocket.prototype.onopen", {
          get: _8eeac2780070 => _ebf358b75a0b.get(_8eeac2780070.this).onopen,
          set(_8eeac2780070, _d975dc811624) {
            _ebf358b75a0b.get(_8eeac2780070.this).onopen = _d975dc811624;
          }
        }), _8eeac2780070.Trap("WebSocket.prototype.url", {
          get: _8eeac2780070 => _ebf358b75a0b.get(_8eeac2780070.this).url
        }), _8eeac2780070.Trap("WebSocket.prototype.protocol", {
          get: _8eeac2780070 => _ebf358b75a0b.get(_8eeac2780070.this).protocol
        }), _8eeac2780070.Trap("WebSocket.prototype.readyState", {
          get: _8eeac2780070 => _ebf358b75a0b.get(_8eeac2780070.this).barews.readyState
        }), _8eeac2780070.Proxy("WebSocket.prototype.send", {
          apply(_8eeac2780070) {
            let _d975dc811624 = _ebf358b75a0b.get(_8eeac2780070.this);
            _8eeac2780070.return(_d975dc811624.barews.send(_8eeac2780070.args[0]));
          }
        }), _8eeac2780070.Proxy("WebSocket.prototype.close", {
          apply(_8eeac2780070) {
            let _d975dc811624 = _ebf358b75a0b.get(_8eeac2780070.this);
            void 0 === _8eeac2780070.args[0] && (_8eeac2780070.args[0] = 1e3), void 0 === _8eeac2780070.args[1] && (_8eeac2780070.args[1] = ""), 
            _8eeac2780070.return(_d975dc811624.barews.close(_8eeac2780070.args[0], _8eeac2780070.args[1]));
          }
        }), _8eeac2780070.Proxy("WebSocketStream", {
          construct(_ebf358b75a0b) {
            let _bbaa3660c6e1, _0486c8e5ad30, _c5b4b25078d6, _4d778195d27f = {};
            Object.setPrototypeOf(_4d778195d27f, _ebf358b75a0b.fn.prototype), _4d778195d27f.constructor = _ebf358b75a0b.fn;
            let _9fc5b21180bb = _8eeac2780070.bare.createWebSocket(_ebf358b75a0b.args[0], _ebf358b75a0b.args[1], null, {
              "User-Agent": _d975dc811624.navigator.userAgent,
              Origin: _8eeac2780070.url.origin
            });
            _ebf358b75a0b.args[1]?.signal.addEventListener("abort", () => {
              _9fc5b21180bb.close(1e3, "");
            });
            let _6c0b4fee9c25 = {
              extensions: "",
              protocol: "",
              url: _ebf358b75a0b.args[0],
              barews: _9fc5b21180bb,
              opened: new Promise((_8eeac2780070, _d975dc811624) => {
                _bbaa3660c6e1 = _8eeac2780070, _c5b4b25078d6 = _d975dc811624;
              }),
              closed: new Promise(_8eeac2780070 => {
                _0486c8e5ad30 = _8eeac2780070;
              }),
              readable: new ReadableStream({
                start(_8eeac2780070) {
                  _9fc5b21180bb.addEventListener("message", async _d975dc811624 => {
                    let _ebf358b75a0b = _d975dc811624.data;
                    "string" == typeof _ebf358b75a0b || ("byteLength" in _ebf358b75a0b ? Object.setPrototypeOf(_ebf358b75a0b, ArrayBuffer.prototype) : "arrayBuffer" in _ebf358b75a0b && Object.setPrototypeOf(_ebf358b75a0b = await _ebf358b75a0b.arrayBuffer(), ArrayBuffer.prototype)), 
                    _8eeac2780070.enqueue(_ebf358b75a0b);
                  });
                }
              }),
              writable: new WritableStream({
                write(_8eeac2780070) {
                  _9fc5b21180bb.send(_8eeac2780070);
                }
              })
            };
            _9fc5b21180bb.addEventListener("open", () => {
              _bbaa3660c6e1({
                readable: _6c0b4fee9c25.readable,
                writable: _6c0b4fee9c25.writable,
                extensions: _6c0b4fee9c25.extensions,
                protocol: _6c0b4fee9c25.protocol
              });
            }), _9fc5b21180bb.addEventListener("close", _8eeac2780070 => {
              _0486c8e5ad30({
                code: _8eeac2780070.code,
                reason: _8eeac2780070.reason
              });
            }), _9fc5b21180bb.addEventListener("error", _8eeac2780070 => {
              _c5b4b25078d6(_8eeac2780070);
            }), _fae22887acec.set(_4d778195d27f, _6c0b4fee9c25), _ebf358b75a0b.return(_4d778195d27f);
          }
        }), _8eeac2780070.Trap("WebSocketStream.prototype.closed", {
          get: _8eeac2780070 => _fae22887acec.get(_8eeac2780070.this).closed
        }), _8eeac2780070.Trap("WebSocketStream.prototype.opened", {
          get: _8eeac2780070 => _fae22887acec.get(_8eeac2780070.this).opened
        }), _8eeac2780070.Trap("WebSocketStream.prototype.url", {
          get: _8eeac2780070 => _fae22887acec.get(_8eeac2780070.this).url
        }), _8eeac2780070.Proxy("WebSocketStream.prototype.close", {
          apply(_8eeac2780070) {
            let _d975dc811624 = _fae22887acec.get(_8eeac2780070.this);
            return _8eeac2780070.args[0] ? (void 0 === _8eeac2780070.args[0].closeCode && (_8eeac2780070.args[0].closeCode = 1e3), 
            void 0 === _8eeac2780070.args[0].reason && (_8eeac2780070.args[0].reason = ""), 
            _8eeac2780070.return(_d975dc811624.barews.close(_8eeac2780070.args[0].closeCode, _8eeac2780070.args[0].reason))) : _8eeac2780070.return(_d975dc811624.barews.close(1e3, ""));
          }
        });
      }
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        default: () => n
      });
    },
    248: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        default: () => a
      });
      var _fae22887acec = _ebf358b75a0b(37), _bbaa3660c6e1 = _ebf358b75a0b(1472);
      function a(_8eeac2780070, _d975dc811624) {
        let _ebf358b75a0b;
        _d975dc811624.Worker && (0, _fae22887acec.U5)("syncxhr", _8eeac2780070.url) && (_ebf358b75a0b = _8eeac2780070.natives.construct("Worker", _fae22887acec.$W.files.sync));
        let _0486c8e5ad30 = Symbol("xhr original args"), _c5b4b25078d6 = Symbol("xhr headers");
        _8eeac2780070.Proxy("XMLHttpRequest.prototype.open", {
          apply(_d975dc811624) {
            _d975dc811624.args[1] && (_d975dc811624.args[1] = (0, _bbaa3660c6e1.Oy)(_d975dc811624.args[1], _8eeac2780070.meta)), 
            void 0 === _d975dc811624.args[2] && (_d975dc811624.args[2] = !0), _d975dc811624.this[_0486c8e5ad30] = _d975dc811624.args;
          }
        }), _8eeac2780070.Proxy("XMLHttpRequest.prototype.setRequestHeader", {
          apply(_8eeac2780070) {
            (_8eeac2780070.this[_c5b4b25078d6] || (_8eeac2780070.this[_c5b4b25078d6] = {}))[_8eeac2780070.args[0]] = _8eeac2780070.args[1];
          }
        }), _8eeac2780070.Proxy("XMLHttpRequest.prototype.send", {
          apply(_d975dc811624) {
            let _bbaa3660c6e1 = _d975dc811624.this[_0486c8e5ad30];
            if (!_bbaa3660c6e1 || _bbaa3660c6e1[2]) return;
            if (!(0, _fae22887acec.U5)("syncxhr", _8eeac2780070.url)) return console.warn("ignoring request - sync xhr disabled in flags"), 
            _d975dc811624.return(void 0);
            let _4d778195d27f = new SharedArrayBuffer(1024, {
              maxByteLength: 2147483647
            }), _9fc5b21180bb = new DataView(_4d778195d27f);
            _8eeac2780070.natives.call("Worker.prototype.postMessage", _ebf358b75a0b, {
              sab: _4d778195d27f,
              args: _bbaa3660c6e1,
              headers: _d975dc811624.this[_c5b4b25078d6],
              body: _d975dc811624.args[0]
            });
            let _6c0b4fee9c25 = performance.now();
            for (;0 === _9fc5b21180bb.getUint8(0); ) if (performance.now() - _6c0b4fee9c25 > 1e3) throw Error("xhr timeout");
            let _fb4ea2a6f85c = _9fc5b21180bb.getUint16(1), _fe5e93e0a07e = _9fc5b21180bb.getUint32(3), _11590423c4ed = new Uint8Array(_fe5e93e0a07e);
            _11590423c4ed.set(new Uint8Array(_4d778195d27f.slice(7, 7 + _fe5e93e0a07e)));
            let _8a98072c4f6f = (new TextDecoder).decode(_11590423c4ed), _a3a9859aeb07 = _9fc5b21180bb.getUint32(7 + _fe5e93e0a07e), _53ae19a12317 = new Uint8Array(_a3a9859aeb07);
            _53ae19a12317.set(new Uint8Array(_4d778195d27f.slice(11 + _fe5e93e0a07e, 11 + _fe5e93e0a07e + _a3a9859aeb07)));
            let _40551bb2b499 = (new TextDecoder).decode(_53ae19a12317);
            _8eeac2780070.RawTrap(_d975dc811624.this, "status", {
              get: () => _fb4ea2a6f85c
            }), _8eeac2780070.RawTrap(_d975dc811624.this, "responseText", {
              get: () => _40551bb2b499
            }), _8eeac2780070.RawTrap(_d975dc811624.this, "response", {
              get: () => "arraybuffer" === _d975dc811624.this.responseType ? _53ae19a12317.buffer : _40551bb2b499
            }), _8eeac2780070.RawTrap(_d975dc811624.this, "responseXML", {
              get: () => (new DOMParser).parseFromString(_40551bb2b499, "text/xml")
            }), _8eeac2780070.RawTrap(_d975dc811624.this, "getAllResponseHeaders", {
              get: () => () => _8a98072c4f6f
            }), _8eeac2780070.RawTrap(_d975dc811624.this, "getResponseHeader", {
              get: () => _8eeac2780070 => {
                let _d975dc811624 = RegExp(`^${_8eeac2780070}: (.*)$`, "m").exec(_8a98072c4f6f);
                return _d975dc811624 ? _d975dc811624[1] : null;
              }
            }), _d975dc811624.return(void 0);
          }
        }), _8eeac2780070.Trap("XMLHttpRequest.prototype.responseURL", {
          get: _8eeac2780070 => (0, _bbaa3660c6e1.v2)(_8eeac2780070.get())
        });
      }
    },
    7418: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        default: () => i
      });
      var _fae22887acec = _ebf358b75a0b(1478);
      function i(_8eeac2780070, _d975dc811624) {
        _8eeac2780070.Proxy([ "setTimeout", "setInterval" ], {
          apply(_d975dc811624) {
            _d975dc811624.args.length > 0 && "string" == typeof _d975dc811624.args[0] && (_d975dc811624.args[0] = (0, 
            _fae22887acec.o)(_d975dc811624.args[0], "(setTimeout string eval)", _8eeac2780070.meta));
          }
        });
      }
    },
    7791: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        default: () => o,
        enabled: () => s
      });
      var _fae22887acec = _ebf358b75a0b(37), _bbaa3660c6e1 = _ebf358b75a0b(8665).A;
      let _0486c8e5ad30 = "/*scramtag ", s = _8eeac2780070 => (0, _fae22887acec.U5)("sourcemaps", _8eeac2780070.url);
      function o(_8eeac2780070, _d975dc811624) {
        Object.defineProperty(_d975dc811624, _fae22887acec.$W.globals.pushsourcemapfn, {
          value: (_d975dc811624, _ebf358b75a0b) => {
            let _fae22887acec = performance.now();
            !function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
              let _fae22887acec = Uint8Array.from(_d975dc811624), _bbaa3660c6e1 = new DataView(_fae22887acec.buffer), _0486c8e5ad30 = new TextDecoder("utf-8"), _c5b4b25078d6 = [], _4d778195d27f = _bbaa3660c6e1.getUint32(0, !0), _9fc5b21180bb = 4;
              for (let _8eeac2780070 = 0; _8eeac2780070 < _4d778195d27f; _8eeac2780070++) {
                let _8eeac2780070 = _bbaa3660c6e1.getUint32(_9fc5b21180bb, !0);
                _9fc5b21180bb += 4;
                let _d975dc811624 = _bbaa3660c6e1.getUint32(_9fc5b21180bb, !0);
                _9fc5b21180bb += 4;
                let _ebf358b75a0b = _bbaa3660c6e1.getUint8(_9fc5b21180bb);
                if (_9fc5b21180bb += 1, 0 == _ebf358b75a0b) _c5b4b25078d6.push({
                  type: _ebf358b75a0b,
                  start: _8eeac2780070,
                  size: _d975dc811624
                }); else if (1 == _ebf358b75a0b) {
                  let _4d778195d27f = _8eeac2780070 + _d975dc811624, _6c0b4fee9c25 = _bbaa3660c6e1.getUint32(_9fc5b21180bb, !0);
                  _9fc5b21180bb += 4;
                  let _fb4ea2a6f85c = _0486c8e5ad30.decode(_fae22887acec.subarray(_9fc5b21180bb, _9fc5b21180bb + _6c0b4fee9c25));
                  _c5b4b25078d6.push({
                    type: _ebf358b75a0b,
                    start: _8eeac2780070,
                    end: _4d778195d27f,
                    str: _fb4ea2a6f85c
                  });
                }
              }
              _8eeac2780070.box.sourcemaps[_ebf358b75a0b] = _c5b4b25078d6;
            }(_8eeac2780070, _d975dc811624, _ebf358b75a0b), _bbaa3660c6e1.time(_8eeac2780070.meta, _fae22887acec, `scramtag parse for ${_ebf358b75a0b}`);
          },
          enumerable: !1,
          writable: !1,
          configurable: !1
        }), _8eeac2780070.Proxy("Function.prototype.toString", {
          apply(_d975dc811624) {
            performance.now(), function(_8eeac2780070, _d975dc811624) {
              let _ebf358b75a0b = _d975dc811624.fn.call(_d975dc811624.this), _fae22887acec = function(_8eeac2780070) {
                let _d975dc811624 = _8eeac2780070.indexOf(_0486c8e5ad30);
                if (-1 === _d975dc811624) return null;
                let _ebf358b75a0b = _8eeac2780070.indexOf("*/", _d975dc811624);
                if (-1 === _ebf358b75a0b) throw console.log(_8eeac2780070, _d975dc811624, _ebf358b75a0b), 
                Error("unreachable");
                let _fae22887acec = _8eeac2780070.substring(_d975dc811624 + 2, _ebf358b75a0b).split(" ");
                if (3 !== _fae22887acec.length || "scramtag" !== _fae22887acec[0] || !Number.isSafeInteger(+_fae22887acec[1])) throw console.log(_8eeac2780070, _d975dc811624, _ebf358b75a0b, _fae22887acec), 
                Error("invalid tag");
                return [ _fae22887acec[2], _d975dc811624, +_fae22887acec[1] ];
              }(_ebf358b75a0b);
              if (!_fae22887acec) return _d975dc811624.return(_ebf358b75a0b);
              let [_bbaa3660c6e1, _c5b4b25078d6, _4d778195d27f] = _fae22887acec, _9fc5b21180bb = _4d778195d27f - _c5b4b25078d6, _6c0b4fee9c25 = _9fc5b21180bb + _ebf358b75a0b.length, _fb4ea2a6f85c = _8eeac2780070.box.sourcemaps[_bbaa3660c6e1];
              if (!_fb4ea2a6f85c) return console.warn("failed to get rewrites for tag", _bbaa3660c6e1), 
              _d975dc811624.return(_ebf358b75a0b);
              let _fe5e93e0a07e = 0;
              for (;_fe5e93e0a07e < _fb4ea2a6f85c.length; ) if (_fb4ea2a6f85c[_fe5e93e0a07e].start < _9fc5b21180bb) _fe5e93e0a07e++; else break;
              let _11590423c4ed = _fe5e93e0a07e;
              for (;_11590423c4ed < _fb4ea2a6f85c.length; ) if (function(_8eeac2780070) {
                if (0 === _8eeac2780070.type) return _8eeac2780070.start + _8eeac2780070.size;
                if (1 === _8eeac2780070.type) return _8eeac2780070.end;
                throw "unreachable";
              }(_fb4ea2a6f85c[_11590423c4ed]) < _6c0b4fee9c25) _11590423c4ed++; else break;
              let _8a98072c4f6f = _fb4ea2a6f85c.slice(_fe5e93e0a07e, _11590423c4ed), _a3a9859aeb07 = "", _53ae19a12317 = 0;
              for (let _8eeac2780070 of _8a98072c4f6f) if (_a3a9859aeb07 += _ebf358b75a0b.slice(_53ae19a12317, _8eeac2780070.start - _9fc5b21180bb), 
              0 === _8eeac2780070.type) _53ae19a12317 = _8eeac2780070.start + _8eeac2780070.size - _9fc5b21180bb; else if (1 === _8eeac2780070.type) _a3a9859aeb07 += _8eeac2780070.str, 
              _53ae19a12317 = _8eeac2780070.end - _9fc5b21180bb; else throw "unreachable";
              _a3a9859aeb07 += _ebf358b75a0b.slice(_53ae19a12317), _a3a9859aeb07 = _a3a9859aeb07.replace(`${_0486c8e5ad30}${_4d778195d27f} ${_bbaa3660c6e1}*/`, ""), 
              _d975dc811624.return(_a3a9859aeb07);
            }(_8eeac2780070, _d975dc811624);
          }
        });
      }
    },
    9399: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        default: () => a
      });
      var _fae22887acec = _ebf358b75a0b(4110), _bbaa3660c6e1 = _ebf358b75a0b(1472);
      function a(_8eeac2780070, _d975dc811624) {
        _8eeac2780070.Proxy("Worker", {
          construct(_d975dc811624) {
            _d975dc811624.args[0] = (0, _bbaa3660c6e1.Oy)(_d975dc811624.args[0], _8eeac2780070.meta) + "?dest=worker", 
            _d975dc811624.args[1] && "module" === _d975dc811624.args[1].type && (_d975dc811624.args[0] += "&type=module");
            let _ebf358b75a0b = _d975dc811624.call(), _0486c8e5ad30 = new _fae22887acec.DD;
            (async () => {
              let _d975dc811624 = await _0486c8e5ad30.getInnerPort();
              _8eeac2780070.natives.call("Worker.prototype.postMessage", _ebf358b75a0b, {
                $studyjet$type: "baremuxinit",
                port: _d975dc811624
              }, [ _d975dc811624 ]);
            })();
          }
        }), _8eeac2780070.Proxy("SharedWorker", {
          construct(_d975dc811624) {
            _d975dc811624.args[0] = (0, _bbaa3660c6e1.Oy)(_d975dc811624.args[0], _8eeac2780070.meta) + "?dest=sharedworker", 
            _d975dc811624.args[1] && "string" == typeof _d975dc811624.args[1] && (_d975dc811624.args[1] = `${_8eeac2780070.url.origin}@${_d975dc811624.args[1]}`), 
            _d975dc811624.args[1] && "object" == typeof _d975dc811624.args[1] && ("module" === _d975dc811624.args[1].type && (_d975dc811624.args[0] += "&type=module"), 
            _d975dc811624.args[1].name && (_d975dc811624.args[1].name = `${_8eeac2780070.url.origin}@${_d975dc811624.args[1].name}`));
            let _ebf358b75a0b = _d975dc811624.call(), _0486c8e5ad30 = new _fae22887acec.DD;
            (async () => {
              let _d975dc811624 = await _0486c8e5ad30.getInnerPort();
              _8eeac2780070.natives.call("MessagePort.prototype.postMessage", _ebf358b75a0b.port, {
                $studyjet$type: "baremuxinit",
                port: _d975dc811624
              }, [ _d975dc811624 ]);
            })();
          }
        }), _8eeac2780070.Proxy("Worklet.prototype.addModule", {
          apply(_d975dc811624) {
            _d975dc811624.args[0] && (_d975dc811624.args[0] = (0, _bbaa3660c6e1.Oy)(_d975dc811624.args[0], _8eeac2780070.meta) + "?dest=worklet");
          }
        });
      }
    },
    581: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        createWrapFn: () => o,
        default: () => c,
        order: () => _4d778195d27f
      });
      var _fae22887acec = _ebf358b75a0b(1323), _bbaa3660c6e1 = _ebf358b75a0b(2794), _0486c8e5ad30 = _ebf358b75a0b(37), _c5b4b25078d6 = _ebf358b75a0b(591);
      function o(_8eeac2780070, _d975dc811624) {
        return function(_ebf358b75a0b, _0486c8e5ad30) {
          if (_ebf358b75a0b === _d975dc811624.location) return _8eeac2780070.locationProxy;
          if (_ebf358b75a0b === _d975dc811624.eval) return _c5b4b25078d6.indirectEval.bind(_8eeac2780070, _0486c8e5ad30);
          if (_fae22887acec.iswindow) {
            if (_ebf358b75a0b === _d975dc811624.parent) if (_bbaa3660c6e1.pX in _d975dc811624.parent) return _d975dc811624.parent; else return _d975dc811624; else if (_ebf358b75a0b === _d975dc811624.top) {
              let _8eeac2780070 = _d975dc811624;
              for (;;) {
                let _d975dc811624 = _8eeac2780070.parent.self;
                if (_d975dc811624 === _8eeac2780070 || !(_bbaa3660c6e1.pX in _d975dc811624)) break;
                _8eeac2780070 = _d975dc811624;
              }
              return _8eeac2780070;
            }
          }
          return _ebf358b75a0b;
        };
      }
      let _4d778195d27f = 4;
      function c(_8eeac2780070, _d975dc811624) {
        Object.defineProperty(_d975dc811624, _0486c8e5ad30.$W.globals.wrapfn, {
          value: _8eeac2780070.wrapfn,
          writable: !1,
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_d975dc811624, _0486c8e5ad30.$W.globals.wrappropertyfn, {
          value: function(_8eeac2780070) {
            return "location" === _8eeac2780070 || "parent" === _8eeac2780070 || "top" === _8eeac2780070 || "eval" === _8eeac2780070 ? _0486c8e5ad30.$W.globals.wrappropertybase + _8eeac2780070 : _8eeac2780070;
          },
          writable: !1,
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_d975dc811624, _0486c8e5ad30.$W.globals.cleanrestfn, {
          value: function(_8eeac2780070) {},
          writable: !1,
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_d975dc811624.Object.prototype, _0486c8e5ad30.$W.globals.wrappropertybase + "location", {
          get: function() {
            return this === _d975dc811624 || this === _d975dc811624.document ? _8eeac2780070.locationProxy : this.location;
          },
          set(_ebf358b75a0b) {
            if (this === _d975dc811624 || this === _d975dc811624.document) {
              _8eeac2780070.url = _ebf358b75a0b;
              return;
            }
            this.location = _ebf358b75a0b;
          },
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_d975dc811624.Object.prototype, _0486c8e5ad30.$W.globals.wrappropertybase + "parent", {
          get: function() {
            return _8eeac2780070.wrapfn(this.parent, !1);
          },
          set(_8eeac2780070) {
            this.parent = _8eeac2780070;
          },
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_d975dc811624.Object.prototype, _0486c8e5ad30.$W.globals.wrappropertybase + "top", {
          get: function() {
            return _8eeac2780070.wrapfn(this.top, !1);
          },
          set(_8eeac2780070) {
            this.top = _8eeac2780070;
          },
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_d975dc811624.Object.prototype, _0486c8e5ad30.$W.globals.wrappropertybase + "eval", {
          get: function() {
            return _8eeac2780070.wrapfn(this.eval, !0);
          },
          set(_8eeac2780070) {
            this.eval = _8eeac2780070;
          },
          configurable: !1,
          enumerable: !1
        }), _d975dc811624.$scramitize = function(_8eeac2780070) {
          return location, _fae22887acec.iswindow && _d975dc811624.top, "string" == typeof _8eeac2780070 && _8eeac2780070.includes("studyjet"), 
          "string" == typeof _8eeac2780070 && _8eeac2780070.includes(location.origin), _8eeac2780070;
        }, Object.defineProperty(_d975dc811624, _0486c8e5ad30.$W.globals.trysetfn, {
          value: function(_ebf358b75a0b, _fae22887acec, _bbaa3660c6e1) {
            return _ebf358b75a0b instanceof _d975dc811624.Location && (_8eeac2780070.locationProxy.href = _bbaa3660c6e1, 
            !0);
          },
          writable: !1,
          configurable: !1
        });
      }
    },
    1229: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        SingletonBox: () => n
      });
      class n {
        ownerclient;
        clients=[];
        globals=new Map;
        documents=new Map;
        locations=new Map;
        sourcemaps={};
        constructor(_8eeac2780070) {
          this.ownerclient = _8eeac2780070;
        }
        registerClient(_8eeac2780070, _d975dc811624) {
          this.clients.push(_8eeac2780070), this.globals.set(_d975dc811624, _8eeac2780070), 
          this.documents.set(_d975dc811624.document, _8eeac2780070), this.locations.set(_d975dc811624.location, _8eeac2780070);
        }
      }
    },
    8409: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        StudyJetServiceWorkerRuntime: () => a
      });
      var _fae22887acec = _ebf358b75a0b(1472), _bbaa3660c6e1 = _ebf358b75a0b(8665).A;
      class a {
        client;
        recvport;
        constructor(_8eeac2780070) {
          this.client = _8eeac2780070, self.onconnect = _d975dc811624 => {
            let _ebf358b75a0b = _d975dc811624.ports[0];
            _bbaa3660c6e1.log("sw", "connected"), _ebf358b75a0b.addEventListener("message", _d975dc811624 => {
              console.log("sw", _d975dc811624.data), "studyjet$type" in _d975dc811624.data && ("init" === _d975dc811624.data.studyjet$type ? (this.recvport = _d975dc811624.data.studyjet$port, 
              this.recvport.postMessage({
                studyjet$type: "init"
              })) : s.call(this, _8eeac2780070, _d975dc811624.data));
            }), _ebf358b75a0b.start();
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
              dispatchEvent: _8eeac2780070 => !1
            },
            showNotification: async () => {},
            unregister: async () => !0,
            update: async () => {},
            installing: null,
            waiting: null
          }, this.client.global.ServiceWorkerGlobalScope = this.client.global;
        }
      }
      function s(_8eeac2780070, _d975dc811624) {
        let _ebf358b75a0b = this.recvport, _0486c8e5ad30 = _d975dc811624.studyjet$type, _c5b4b25078d6 = _d975dc811624.studyjet$token, _4d778195d27f = _8eeac2780070.eventcallbacks.get(self);
        if ("fetch" === _0486c8e5ad30) {
          _bbaa3660c6e1.log("ee", _d975dc811624);
          let _0486c8e5ad30 = _4d778195d27f.filter(_8eeac2780070 => "fetch" === _8eeac2780070.event);
          if (!_0486c8e5ad30) return;
          for (let _4d778195d27f of _0486c8e5ad30) {
            let _0486c8e5ad30 = _d975dc811624.studyjet$request, _9fc5b21180bb = new _8eeac2780070.natives.Request((0, 
            _fae22887acec.v2)(_0486c8e5ad30.url), {
              body: _0486c8e5ad30.body,
              headers: new Headers(_0486c8e5ad30.headers),
              method: _0486c8e5ad30.method,
              mode: "same-origin"
            });
            Object.defineProperty(_9fc5b21180bb, "destination", {
              value: _0486c8e5ad30.destinitation
            });
            let _6c0b4fee9c25 = new Event("fetch");
            _6c0b4fee9c25.request = _9fc5b21180bb;
            let _fb4ea2a6f85c = !1;
            _6c0b4fee9c25.respondWith = _8eeac2780070 => {
              _fb4ea2a6f85c = !0, (async () => {
                let _d975dc811624 = {
                  studyjet$type: "fetch",
                  studyjet$token: _c5b4b25078d6,
                  studyjet$response: {
                    body: (_8eeac2780070 = await _8eeac2780070).body,
                    headers: Array.from(_8eeac2780070.headers.entries()),
                    status: _8eeac2780070.status,
                    statusText: _8eeac2780070.statusText
                  }
                };
                _bbaa3660c6e1.log("sw", "responding", _d975dc811624), _ebf358b75a0b.postMessage(_d975dc811624, [ _8eeac2780070.body ]);
              })();
            }, _bbaa3660c6e1.log("to fn", _6c0b4fee9c25), _4d778195d27f.proxiedCallback(new Proxy(_6c0b4fee9c25, {
              get: (_8eeac2780070, _d975dc811624, _ebf358b75a0b) => "isTrusted" === _d975dc811624 || Reflect.get(_8eeac2780070, _d975dc811624)
            })), _fb4ea2a6f85c || (console.log("sw", "no response"), _ebf358b75a0b.postMessage({
              studyjet$type: "fetch",
              studyjet$token: _c5b4b25078d6,
              studyjet$response: !1
            }));
          }
        }
      }
    },
    9353: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        default: () => i
      });
      var _fae22887acec = _ebf358b75a0b(1472);
      function i(_8eeac2780070) {
        _8eeac2780070.Proxy("importScripts", {
          apply(_d975dc811624) {
            for (let _ebf358b75a0b in _d975dc811624.args) _d975dc811624.args[_ebf358b75a0b] = (0, 
            _fae22887acec.Oy)(_d975dc811624.args[_ebf358b75a0b], _8eeac2780070.meta);
          }
        });
      }
    },
    3402: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.d(_d975dc811624, {
        q: () => l
      });
      var _fae22887acec = _ebf358b75a0b(37), _bbaa3660c6e1 = _ebf358b75a0b(4869), _0486c8e5ad30 = _ebf358b75a0b(6570), _c5b4b25078d6 = _ebf358b75a0b(1862), _4d778195d27f = _ebf358b75a0b(8665).A;
      class l extends EventTarget {
        db;
        constructor(_8eeac2780070) {
          super();
          const t = (_8eeac2780070, _d975dc811624) => {
            for (let _ebf358b75a0b in _d975dc811624) _d975dc811624[_ebf358b75a0b] instanceof Object && _ebf358b75a0b in _8eeac2780070 && Object.assign(_d975dc811624[_ebf358b75a0b], t(_8eeac2780070[_ebf358b75a0b], _d975dc811624[_ebf358b75a0b]));
            return Object.assign(_8eeac2780070 || {}, _d975dc811624);
          }, _d975dc811624 = t({
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
              encode: _8eeac2780070 => _8eeac2780070 ? encodeURIComponent(_8eeac2780070) : _8eeac2780070,
              decode: _8eeac2780070 => _8eeac2780070 ? decodeURIComponent(_8eeac2780070) : _8eeac2780070
            }
          }, _8eeac2780070);
          _d975dc811624.codec.encode = _d975dc811624.codec.encode.toString(), _d975dc811624.codec.decode = _d975dc811624.codec.decode.toString(), 
          (0, _fae22887acec.Nk)(_d975dc811624);
        }
        async init() {
          (0, _fae22887acec.Ec)(), await this.openIDB(), navigator.serviceWorker.controller?.postMessage({
            studyjet$type: "loadConfig",
            config: _fae22887acec.$W
          }), _4d778195d27f.log("config loaded"), navigator.serviceWorker.addEventListener("message", _8eeac2780070 => {
            if (!("studyjet$type" in _8eeac2780070.data)) return;
            let _d975dc811624 = _8eeac2780070.data;
            "download" === _d975dc811624.studyjet$type && this.dispatchEvent(new _c5b4b25078d6.StudyJetGlobalDownloadEvent(_d975dc811624.download));
          });
        }
        createFrame(_8eeac2780070) {
          return _8eeac2780070 || (_8eeac2780070 = document.createElement("iframe")), new _bbaa3660c6e1.X(this, _8eeac2780070);
        }
        encodeUrl(_8eeac2780070) {
          if ("string" == typeof _8eeac2780070 && (_8eeac2780070 = new URL(_8eeac2780070)), 
          "http:" != _8eeac2780070.protocol && "https:" != _8eeac2780070.protocol) return _8eeac2780070.href;
          let _d975dc811624 = (0, _fae22887acec.hD)(_8eeac2780070.hash.slice(1));
          return _8eeac2780070.hash = "", _fae22887acec.$W.prefix + (0, _fae22887acec.hD)(_8eeac2780070.href) + (_d975dc811624 ? "#" + _d975dc811624 : "");
        }
        decodeUrl(_8eeac2780070) {
          _8eeac2780070 instanceof URL && (_8eeac2780070 = _8eeac2780070.toString());
          let _d975dc811624 = location.origin + _fae22887acec.$W.prefix;
          return (0, _fae22887acec.P_)(_8eeac2780070.slice(_d975dc811624.length));
        }
        async openIDB() {
          let _8eeac2780070 = await (0, _0486c8e5ad30.P2)("@d7a6431b92e", 1, {
            upgrade(_8eeac2780070) {
              _8eeac2780070.objectStoreNames.contains("config") || _8eeac2780070.createObjectStore("config"), 
              _8eeac2780070.objectStoreNames.contains("cookies") || _8eeac2780070.createObjectStore("cookies"), 
              _8eeac2780070.objectStoreNames.contains("redirectTrackers") || _8eeac2780070.createObjectStore("redirectTrackers"), 
              _8eeac2780070.objectStoreNames.contains("referrerPolicies") || _8eeac2780070.createObjectStore("referrerPolicies"), 
              _8eeac2780070.objectStoreNames.contains("publicSuffixList") || _8eeac2780070.createObjectStore("publicSuffixList");
            }
          });
          return this.db = _8eeac2780070, await this.#_8eeac2780070(), _8eeac2780070;
        }
        async #_8eeac2780070() {
          this.db ? await this.db.put("config", _fae22887acec.$W, "config") : console.error("Store not ready!");
        }
        async modifyConfig(_8eeac2780070) {
          (0, _fae22887acec.Nk)(Object.assign({}, _fae22887acec.$W, _8eeac2780070)), (0, _fae22887acec.Ec)(), 
          await this.#_8eeac2780070(), navigator.serviceWorker.controller?.postMessage({
            studyjet$type: "loadConfig",
            config: _fae22887acec.$W
          });
        }
        addEventListener(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
          super.addEventListener(_8eeac2780070, _d975dc811624, _ebf358b75a0b);
        }
      }
    },
    4869: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.d(_d975dc811624, {
        X: () => a
      });
      var _fae22887acec = _ebf358b75a0b(2794), _bbaa3660c6e1 = _ebf358b75a0b(8665).A;
      class a extends EventTarget {
        controller;
        frame;
        constructor(_8eeac2780070, _d975dc811624) {
          super(), this.controller = _8eeac2780070, this.frame = _d975dc811624, _d975dc811624.name = `${Array(8).fill(0).map(() => Math.floor(36 * Math.random()).toString(36)).join("")}`, 
          _d975dc811624[_fae22887acec.zr] = this;
        }
        get client() {
          return this.frame.contentWindow.window[_fae22887acec.pX];
        }
        get url() {
          return this.client.url;
        }
        go(_8eeac2780070) {
          _8eeac2780070 instanceof URL && (_8eeac2780070 = _8eeac2780070.toString()), _bbaa3660c6e1.log("navigated to", _8eeac2780070), 
          this.frame.src = this.controller.encodeUrl(_8eeac2780070);
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
        addEventListener(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
          super.addEventListener(_8eeac2780070, _d975dc811624, _ebf358b75a0b);
        }
      }
    },
    9052: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        StudyJetController: () => _bbaa3660c6e1.q,
        StudyJetFrame: () => _fae22887acec.X
      });
      var _fae22887acec = _ebf358b75a0b(4869), _bbaa3660c6e1 = _ebf358b75a0b(3402);
      console.warn("you are using the last version of studyjet v1, if possible, please upgrade to v2 for better performance and more features");
    },
    8665: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.d(_d975dc811624, {
        A: () => _bbaa3660c6e1
      });
      let _fae22887acec = {
        log: console.log,
        warn: console.warn,
        error: console.error,
        debug: console.debug,
        info: console.info
      }, _bbaa3660c6e1 = {
        fmt: function(_8eeac2780070, _d975dc811624, ..._ebf358b75a0b) {
          let _fae22887acec = Error.prepareStackTrace;
          Error.prepareStackTrace = (_8eeac2780070, _d975dc811624) => {
            _d975dc811624.shift(), _d975dc811624.shift(), _d975dc811624.shift();
            let _ebf358b75a0b = "";
            for (let _8eeac2780070 = 1; _8eeac2780070 < Math.min(2, _d975dc811624.length); _8eeac2780070++) _d975dc811624[_8eeac2780070].getFunctionName() && (_ebf358b75a0b += `${_d975dc811624[_8eeac2780070].getFunctionName()} -> ` + _ebf358b75a0b);
            return _ebf358b75a0b + (_d975dc811624[0].getFunctionName() || "Anonymous");
          };
          let _bbaa3660c6e1 = function() {
            try {
              throw Error();
            } catch (_8eeac2780070) {
              return _8eeac2780070.stack;
            }
          }();
          Error.prepareStackTrace = _fae22887acec, this.print(_8eeac2780070, _bbaa3660c6e1, _d975dc811624, ..._ebf358b75a0b);
        },
        print(_8eeac2780070, _d975dc811624, _ebf358b75a0b, ..._bbaa3660c6e1) {
          (_fae22887acec[_8eeac2780070] || _fae22887acec.log)(`%c${_d975dc811624}%c ${_ebf358b75a0b}`, `\n  \tbackground-color: ${{
            log: "#000",
            warn: "#f80",
            error: "#f00",
            debug: "transparent"
          }[_8eeac2780070]};\n  \tcolor: ${{
            log: "#fff",
            warn: "#fff",
            error: "#fff",
            debug: "gray"
          }[_8eeac2780070]};\n  \tpadding: ${{
            log: 2,
            warn: 4,
            error: 4,
            debug: 0
          }[_8eeac2780070]}px;\n  \tfont-weight: bold;\n  \tfont-family: monospace;\n  \tfont-size: 0.9em;\n  `, `${"debug" === _8eeac2780070 ? "color: gray" : ""}`, ..._bbaa3660c6e1);
        },
        log: function(_8eeac2780070, ..._d975dc811624) {
          this.fmt("log", _8eeac2780070, ..._d975dc811624);
        },
        warn: function(_8eeac2780070, ..._d975dc811624) {
          this.fmt("warn", _8eeac2780070, ..._d975dc811624);
        },
        error: function(_8eeac2780070, ..._d975dc811624) {
          this.fmt("error", _8eeac2780070, ..._d975dc811624);
        },
        debug: function(_8eeac2780070, ..._d975dc811624) {
          this.fmt("debug", _8eeac2780070, ..._d975dc811624);
        },
        time(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {}
      };
    },
    3831: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.d(_d975dc811624, {
        k: () => a
      });
      var _fae22887acec = _ebf358b75a0b(4322), _bbaa3660c6e1 = _ebf358b75a0b.n(_fae22887acec);
      class a {
        cookies={};
        setCookies(_8eeac2780070, _d975dc811624) {
          for (let _ebf358b75a0b of _8eeac2780070) {
            let _8eeac2780070 = _bbaa3660c6e1()(_ebf358b75a0b), _fae22887acec = {
              domain: _8eeac2780070.domain,
              sameSite: _8eeac2780070.sameSite,
              ..._8eeac2780070[0]
            };
            _fae22887acec.domain || (_fae22887acec.domain = "." + _d975dc811624.hostname), _fae22887acec.domain.startsWith(".") || (_fae22887acec.domain = "." + _fae22887acec.domain), 
            _fae22887acec.path || (_fae22887acec.path = "/"), _fae22887acec.sameSite || (_fae22887acec.sameSite = "lax"), 
            _fae22887acec.expires && (_fae22887acec.expires = _fae22887acec.expires.toString());
            let _0486c8e5ad30 = `${_fae22887acec.domain}@${_fae22887acec.path}@${_fae22887acec.name}`;
            this.cookies[_0486c8e5ad30] = _fae22887acec;
          }
        }
        getCookies(_8eeac2780070, _d975dc811624) {
          let _ebf358b75a0b = new Date, _fae22887acec = Object.values(this.cookies), _bbaa3660c6e1 = [];
          for (let _0486c8e5ad30 of _fae22887acec) {
            if (_0486c8e5ad30.expires && new Date(_0486c8e5ad30.expires) < _ebf358b75a0b) {
              delete this.cookies[`${_0486c8e5ad30.domain}@${_0486c8e5ad30.path}@${_0486c8e5ad30.name}`];
              continue;
            }
            (!_0486c8e5ad30.secure || "https:" === _8eeac2780070.protocol) && (!_0486c8e5ad30.httpOnly || !_d975dc811624) && _8eeac2780070.pathname.startsWith(_0486c8e5ad30.path) && (!_0486c8e5ad30.domain.startsWith(".") || _8eeac2780070.hostname.endsWith(_0486c8e5ad30.domain.slice(1))) && _bbaa3660c6e1.push(_0486c8e5ad30);
          }
          return _bbaa3660c6e1.map(_8eeac2780070 => `${_8eeac2780070.name}=${_8eeac2780070.value}`).join("; ");
        }
        load(_8eeac2780070) {
          if ("object" == typeof _8eeac2780070) return _8eeac2780070;
          this.cookies = JSON.parse(_8eeac2780070);
        }
        dump() {
          return JSON.stringify(this.cookies);
        }
      }
    },
    1427: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.d(_d975dc811624, {
        u: () => n
      });
      class n {
        headers={};
        set(_8eeac2780070, _d975dc811624) {
          this.headers[_8eeac2780070.toLowerCase()] = _d975dc811624;
        }
      }
    },
    2393: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.d(_d975dc811624, {
        V: () => _c5b4b25078d6
      });
      var _fae22887acec = _ebf358b75a0b(2614), _bbaa3660c6e1 = _ebf358b75a0b(884), _0486c8e5ad30 = _ebf358b75a0b(1472);
      let _c5b4b25078d6 = [ {
        fn: (_8eeac2780070, _d975dc811624) => (0, _0486c8e5ad30.Oy)(_8eeac2780070, _d975dc811624),
        src: [ "embed", "script", "img", "frame", "source", "input", "track" ],
        href: [ "a", "link", "area", "use", "image" ],
        data: [ "object" ],
        action: [ "form" ],
        formaction: [ "button", "input", "textarea", "submit" ],
        poster: [ "video" ],
        "xlink:href": [ "image" ]
      }, {
        fn: (_8eeac2780070, _d975dc811624) => (0, _0486c8e5ad30.Oy)(_8eeac2780070, _d975dc811624),
        src: [ "iframe" ]
      }, {
        fn: (_8eeac2780070, _d975dc811624) => null,
        sandbox: [ "iframe" ]
      }, {
        fn: (_8eeac2780070, _d975dc811624) => _8eeac2780070.startsWith("blob:") ? (0, _0486c8e5ad30.$n)(_8eeac2780070) : (0, 
        _0486c8e5ad30.Oy)(_8eeac2780070, _d975dc811624),
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
        fn: (_8eeac2780070, _d975dc811624) => (0, _bbaa3660c6e1.PV)(_8eeac2780070, _d975dc811624),
        srcset: [ "img", "source" ],
        imagesrcset: [ "link" ]
      }, {
        fn: (_8eeac2780070, _d975dc811624, _ebf358b75a0b) => (0, _bbaa3660c6e1.Qs)(_8eeac2780070, _ebf358b75a0b, {
          origin: new URL(_d975dc811624.origin.origin),
          base: new URL(_d975dc811624.origin.origin)
        }, !0),
        srcdoc: [ "iframe" ]
      }, {
        fn: (_8eeac2780070, _d975dc811624) => (0, _fae22887acec.s)(_8eeac2780070, _d975dc811624),
        style: "*"
      }, {
        fn: (_8eeac2780070, _d975dc811624) => "_top" === _8eeac2780070 || "_unfencedTop" === _8eeac2780070 ? _d975dc811624.topFrameName : "_parent" === _8eeac2780070 ? _d975dc811624.parentFrameName : _8eeac2780070,
        target: [ "a", "base" ]
      } ];
    },
    37: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      let _fae22887acec, _bbaa3660c6e1, _0486c8e5ad30;
      _ebf358b75a0b.d(_d975dc811624, {
        $W: () => _0486c8e5ad30,
        Ec: () => o,
        Nk: () => c,
        P_: () => _bbaa3660c6e1,
        U5: () => l,
        hD: () => _fae22887acec
      }), _ebf358b75a0b(2393), _ebf358b75a0b(9381), _ebf358b75a0b(2416);
      let _c5b4b25078d6 = Function;
      function o() {
        _fae22887acec = _c5b4b25078d6(`return ${_0486c8e5ad30.codec.encode}`)(), _bbaa3660c6e1 = _c5b4b25078d6(`return ${_0486c8e5ad30.codec.decode}`)();
      }
      function l(_8eeac2780070, _d975dc811624) {
        let _ebf358b75a0b = _0486c8e5ad30.flags[_8eeac2780070];
        for (let _ebf358b75a0b in _0486c8e5ad30.siteFlags) {
          let _fae22887acec = _0486c8e5ad30.siteFlags[_ebf358b75a0b];
          if (new RegExp(_ebf358b75a0b).test(_d975dc811624.href) && _8eeac2780070 in _fae22887acec) return _fae22887acec[_8eeac2780070];
        }
        return _ebf358b75a0b;
      }
      function c(_8eeac2780070) {
        _0486c8e5ad30 = _8eeac2780070, o();
      }
    },
    2614: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.d(_d975dc811624, {
        f: () => a,
        s: () => i
      });
      var _fae22887acec = _ebf358b75a0b(1472);
      function i(_8eeac2780070, _d975dc811624) {
        return s("rewrite", _8eeac2780070, _d975dc811624);
      }
      function a(_8eeac2780070) {
        return s("unrewrite", _8eeac2780070);
      }
      function s(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
        return (_d975dc811624 = (_d975dc811624 = new String(_d975dc811624).toString()).replace(/url\(['"]?(.+?)['"]?\)/gm, (_d975dc811624, _bbaa3660c6e1) => {
          let _0486c8e5ad30 = "rewrite" === _8eeac2780070 ? (0, _fae22887acec.Oy)(_bbaa3660c6e1.trim(), _ebf358b75a0b) : (0, 
          _fae22887acec.v2)(_bbaa3660c6e1.trim());
          return _d975dc811624.replace(_bbaa3660c6e1, _0486c8e5ad30);
        })).replace(/@import\s+(url\s*?\(.{0,9999}?\)|['"].{0,9999}?['"]|.{0,9999}?)($|\s|;)/gm, (_d975dc811624, _bbaa3660c6e1) => _d975dc811624.replace(_bbaa3660c6e1, _bbaa3660c6e1.replace(/^(url\(['"]?|['"]|)(.+?)(['"]|['"]?\)|)$/gm, (_d975dc811624, _bbaa3660c6e1, _0486c8e5ad30, _c5b4b25078d6) => {
          if (_bbaa3660c6e1.startsWith("url")) return _d975dc811624;
          let _4d778195d27f = "rewrite" === _8eeac2780070 ? (0, _fae22887acec.Oy)(_0486c8e5ad30.trim(), _ebf358b75a0b) : (0, 
          _fae22887acec.v2)(_0486c8e5ad30.trim());
          return `${_bbaa3660c6e1}${_4d778195d27f}${_c5b4b25078d6}`;
        })));
      }
    },
    4435: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.d(_d975dc811624, {
        l: () => l
      });
      var _fae22887acec = _ebf358b75a0b(1472), _bbaa3660c6e1 = _ebf358b75a0b(8228);
      let _0486c8e5ad30 = new Set([ "cross-origin-embedder-policy", "cross-origin-opener-policy", "cross-origin-resource-policy", "content-security-policy", "content-security-policy-report-only", "expect-ct", "feature-policy", "origin-isolation", "strict-transport-security", "upgrade-insecure-requests", "x-content-type-options", "x-download-options", "x-frame-options", "x-permitted-cross-domain-policies", "x-powered-by", "x-xss-protection", "clear-site-data" ]), _c5b4b25078d6 = new Set([ "location", "content-location", "referer" ]);
      function o(_8eeac2780070, _d975dc811624) {
        return _8eeac2780070.replace(/<(.*)>/gi, _8eeac2780070 => (0, _fae22887acec.Oy)(_8eeac2780070, _d975dc811624));
      }
      async function l(_8eeac2780070, _d975dc811624, _ebf358b75a0b, _4d778195d27f) {
        let _9fc5b21180bb = {};
        for (let _d975dc811624 in _8eeac2780070) _9fc5b21180bb[_d975dc811624.toLowerCase()] = _8eeac2780070[_d975dc811624];
        for (let _8eeac2780070 of _0486c8e5ad30) delete _9fc5b21180bb[_8eeac2780070];
        for (let _8eeac2780070 of _c5b4b25078d6) _9fc5b21180bb[_8eeac2780070] && (_9fc5b21180bb[_8eeac2780070] = (0, 
        _fae22887acec.Oy)(_9fc5b21180bb[_8eeac2780070]?.toString(), _d975dc811624));
        if ("string" == typeof _9fc5b21180bb.link ? _9fc5b21180bb.link = o(_9fc5b21180bb.link, _d975dc811624) : Array.isArray(_9fc5b21180bb.link) && (_9fc5b21180bb.link = _9fc5b21180bb.link.map(_8eeac2780070 => o(_8eeac2780070, _d975dc811624))), 
        "string" == typeof _9fc5b21180bb.referer) {
          let _8eeac2780070 = new URL(_9fc5b21180bb.referer), _ebf358b75a0b = await _4d778195d27f.get(_8eeac2780070.href);
          if (_ebf358b75a0b) {
            let _fae22887acec = _ebf358b75a0b.policy.toLowerCase().split(",").map(_8eeac2780070 => _8eeac2780070.trim());
            _fae22887acec.includes("no-referrer") || _fae22887acec.includes("no-referrer-when-downgrade") && "http:" === _d975dc811624.origin.protocol && "https:" === _8eeac2780070.protocol ? delete _9fc5b21180bb.referer : _fae22887acec.includes("origin") ? _9fc5b21180bb.referer = _8eeac2780070.origin : _fae22887acec.includes("origin-when-cross-origin") ? _8eeac2780070.origin !== _d975dc811624.origin.origin ? _9fc5b21180bb.referer = _8eeac2780070.origin : _9fc5b21180bb.referer = _8eeac2780070.href : _fae22887acec.includes("same-origin") ? _8eeac2780070.origin === _d975dc811624.origin.origin ? _9fc5b21180bb.referer = _8eeac2780070.href : delete _9fc5b21180bb.referer : _fae22887acec.includes("strict-origin") ? "http:" === _d975dc811624.origin.protocol && "https:" === _8eeac2780070.protocol ? delete _9fc5b21180bb.referer : _9fc5b21180bb.referer = _8eeac2780070.origin : _8eeac2780070.origin === _d975dc811624.origin.origin ? _9fc5b21180bb.referer = _8eeac2780070.href : "http:" === _d975dc811624.origin.protocol && "https:" === _8eeac2780070.protocol ? delete _9fc5b21180bb.referer : _9fc5b21180bb.referer = _8eeac2780070.origin;
          }
        }
        return "string" == typeof _9fc5b21180bb["sec-fetch-dest"] && "" === _9fc5b21180bb["sec-fetch-dest"] && (_9fc5b21180bb["sec-fetch-dest"] = "empty"), 
        "string" == typeof _9fc5b21180bb["sec-fetch-site"] && "none" !== _9fc5b21180bb["sec-fetch-site"] && ("string" == typeof _9fc5b21180bb.referer ? _9fc5b21180bb["sec-fetch-site"] = await (0, 
        _bbaa3660c6e1.ps)(_d975dc811624, new URL(_9fc5b21180bb.referer), _ebf358b75a0b) : (console.warn("Missing referrer header; can't rewrite sec-fetch-site properly. Falling back to unsafe deletion."), 
        delete _9fc5b21180bb["sec-fetch-site"])), _9fc5b21180bb;
      }
    },
    884: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.d(_d975dc811624, {
        PV: () => m,
        Qs: () => f,
        Uk: () => h,
        nK: () => g
      });
      var _fae22887acec = _ebf358b75a0b(3808), _bbaa3660c6e1 = _ebf358b75a0b(8866), _0486c8e5ad30 = _ebf358b75a0b(6498), _c5b4b25078d6 = _ebf358b75a0b(1472), _4d778195d27f = _ebf358b75a0b(2614), _9fc5b21180bb = _ebf358b75a0b(1478), _6c0b4fee9c25 = _ebf358b75a0b(37), _fb4ea2a6f85c = _ebf358b75a0b(2393), _fe5e93e0a07e = _ebf358b75a0b(8665).A;
      function h(_8eeac2780070, _d975dc811624) {
        let _ebf358b75a0b = JSON.stringify(_8eeac2780070.dump()), _fae22887acec = `\n\t\tself.COOKIE = ${_ebf358b75a0b};\n\t\t$studyjetLoadClient().loadAndHook(${JSON.stringify(_6c0b4fee9c25.$W)});\n\t\tif ("document" in self && document?.currentScript) {\n\t\t\tdocument.currentScript.remove();\n\t\t}\n\t`, _bbaa3660c6e1 = y(_11590423c4ed.encode(_fae22887acec));
        return [ _d975dc811624(_6c0b4fee9c25.$W.files.wasm), _d975dc811624(_6c0b4fee9c25.$W.files.all), _d975dc811624("data:application/javascript;base64," + _bbaa3660c6e1) ];
      }
      let _11590423c4ed = new TextEncoder;
      function f(_8eeac2780070, _d975dc811624, _ebf358b75a0b, _6c0b4fee9c25 = !1) {
        let _a3a9859aeb07 = performance.now(), _53ae19a12317 = function(_8eeac2780070, _d975dc811624, _ebf358b75a0b, _6c0b4fee9c25 = !1) {
          let _fe5e93e0a07e = new _bbaa3660c6e1.DV((_8eeac2780070, _d975dc811624) => _d975dc811624), _a3a9859aeb07 = new _fae22887acec.iX(_fe5e93e0a07e);
          if (_a3a9859aeb07.write(_8eeac2780070), _a3a9859aeb07.end(), function e(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
            if ("base" === _8eeac2780070.name && void 0 !== _8eeac2780070.attribs.href && (_ebf358b75a0b.base = new URL(_8eeac2780070.attribs.href, _ebf358b75a0b.origin)), 
            _8eeac2780070.attribs) {
              for (let _fae22887acec of _fb4ea2a6f85c.V) for (let _bbaa3660c6e1 in _fae22887acec) {
                let _0486c8e5ad30 = _fae22887acec[_bbaa3660c6e1.toLowerCase()];
                if ("function" != typeof _0486c8e5ad30 && ("*" === _0486c8e5ad30 || _0486c8e5ad30.includes(_8eeac2780070.name)) && void 0 !== _8eeac2780070.attribs[_bbaa3660c6e1]) {
                  let _0486c8e5ad30 = _8eeac2780070.attribs[_bbaa3660c6e1], _c5b4b25078d6 = _fae22887acec.fn(_0486c8e5ad30, _ebf358b75a0b, _d975dc811624);
                  null === _c5b4b25078d6 ? delete _8eeac2780070.attribs[_bbaa3660c6e1] : _8eeac2780070.attribs[_bbaa3660c6e1] = _c5b4b25078d6, 
                  _8eeac2780070.attribs[`studyjet-attr-${_bbaa3660c6e1}`] = _0486c8e5ad30;
                }
              }
              for (let [_d975dc811624, _fae22887acec] of Object.entries(_8eeac2780070.attribs)) _8a98072c4f6f.includes(_d975dc811624) && (_8eeac2780070.attribs[`studyjet-attr-${_d975dc811624}`] = _fae22887acec, 
              _8eeac2780070.attribs[_d975dc811624] = (0, _9fc5b21180bb.o)(_fae22887acec, `(inline ${_d975dc811624} on element)`, _ebf358b75a0b));
            }
            if ("style" === _8eeac2780070.name && void 0 !== _8eeac2780070.children[0] && (_8eeac2780070.children[0].data = (0, 
            _4d778195d27f.s)(_8eeac2780070.children[0].data, _ebf358b75a0b)), "script" === _8eeac2780070.name && "module" === _8eeac2780070.attribs.type && _8eeac2780070.attribs.src && (_8eeac2780070.attribs.src = _8eeac2780070.attribs.src + "?type=module"), 
            "script" === _8eeac2780070.name && "importmap" === _8eeac2780070.attribs.type && void 0 !== _8eeac2780070.children[0]) {
              let _d975dc811624 = _8eeac2780070.children[0].data;
              try {
                let _fae22887acec = JSON.parse(_d975dc811624);
                if (_fae22887acec.imports) for (let _8eeac2780070 in _fae22887acec.imports) {
                  let _d975dc811624 = _fae22887acec.imports[_8eeac2780070];
                  "string" == typeof _d975dc811624 && (_d975dc811624 = (0, _c5b4b25078d6.Oy)(_d975dc811624, _ebf358b75a0b), 
                  _fae22887acec.imports[_8eeac2780070] = _d975dc811624);
                }
                _8eeac2780070.children[0].data = JSON.stringify(_fae22887acec);
              } catch (e) {
                console.error("Failed to parse importmap JSON:", e);
              }
            }
            if ("script" === _8eeac2780070.name && /(application|text)\/javascript|module|undefined/.test(_8eeac2780070.attribs.type) && void 0 !== _8eeac2780070.children[0]) {
              let _d975dc811624 = _8eeac2780070.children[0].data, _fae22887acec = "module" === _8eeac2780070.attribs.type;
              _8eeac2780070.attribs["studyjet-attr-script-source-src"] = y(_11590423c4ed.encode(_d975dc811624)), 
              _d975dc811624 = _d975dc811624.replace(/<!--[\s\S]*?-->/g, ""), _8eeac2780070.children[0].data = (0, 
              _9fc5b21180bb.o)(_d975dc811624, "(inline script element)", _ebf358b75a0b, _fae22887acec);
            }
            if ("meta" === _8eeac2780070.name && void 0 !== _8eeac2780070.attribs["http-equiv"]) {
              if ("content-security-policy" === _8eeac2780070.attribs["http-equiv"].toLowerCase()) _8eeac2780070 = new _bbaa3660c6e1.Mw(_8eeac2780070.attribs.content); else if ("refresh" === _8eeac2780070.attribs["http-equiv"] && _8eeac2780070.attribs.content.includes("url")) {
                let _d975dc811624 = _8eeac2780070.attribs.content.split("url=");
                _d975dc811624[1] && (_d975dc811624[1] = (0, _c5b4b25078d6.Oy)(_d975dc811624[1].trim(), _ebf358b75a0b)), 
                _8eeac2780070.attribs.content = _d975dc811624.join("url=");
              }
            }
            if (_8eeac2780070.childNodes) for (let _fae22887acec in _8eeac2780070.childNodes) _8eeac2780070.childNodes[_fae22887acec] = e(_8eeac2780070.childNodes[_fae22887acec], _d975dc811624, _ebf358b75a0b);
            return _8eeac2780070;
          }(_fe5e93e0a07e.root, _d975dc811624, _ebf358b75a0b), _6c0b4fee9c25) {
            let _8eeac2780070 = function e(_8eeac2780070) {
              if (_8eeac2780070.type === _fae22887acec.RJ.vw && "head" === _8eeac2780070.name) return _8eeac2780070;
              if (_8eeac2780070.childNodes) for (let _d975dc811624 of _8eeac2780070.childNodes) {
                let _8eeac2780070 = e(_d975dc811624);
                if (_8eeac2780070) return _8eeac2780070;
              }
              return null;
            }(_fe5e93e0a07e.root);
            _8eeac2780070 || (_8eeac2780070 = new _bbaa3660c6e1.Hg("head", {}, []), _fe5e93e0a07e.root.children.unshift(_8eeac2780070)), 
            _8eeac2780070.children.unshift(...h(_d975dc811624, _8eeac2780070 => new _bbaa3660c6e1.Hg("script", {
              src: _8eeac2780070
            })));
          }
          return (0, _0486c8e5ad30.A)(_fe5e93e0a07e.root, {
            encodeEntities: "utf8",
            decodeEntities: !1
          });
        }(_8eeac2780070, _d975dc811624, _ebf358b75a0b, _6c0b4fee9c25);
        return _fe5e93e0a07e.time(_ebf358b75a0b, _a3a9859aeb07, "html rewrite"), _53ae19a12317;
      }
      function g(_8eeac2780070) {
        let _d975dc811624 = new _bbaa3660c6e1.DV((_8eeac2780070, _d975dc811624) => _d975dc811624), _ebf358b75a0b = new _fae22887acec.iX(_d975dc811624);
        return _ebf358b75a0b.write(_8eeac2780070), _ebf358b75a0b.end(), !function e(_8eeac2780070) {
          if ("attribs" in _8eeac2780070) for (let _d975dc811624 in _8eeac2780070.attribs) {
            if ("studyjet-attr-script-source-src" == _d975dc811624) {
              _8eeac2780070.children[0] && "data" in _8eeac2780070.children[0] && (_8eeac2780070.children[0].data = atob(_8eeac2780070.attribs[_d975dc811624]));
              continue;
            }
            _d975dc811624.startsWith("studyjet-attr-") && (_8eeac2780070.attribs[_d975dc811624.slice(14)] = _8eeac2780070.attribs[_d975dc811624], 
            delete _8eeac2780070.attribs[_d975dc811624]);
          }
          if ("childNodes" in _8eeac2780070) for (let _d975dc811624 of _8eeac2780070.childNodes) e(_d975dc811624);
        }(_d975dc811624.root), (0, _0486c8e5ad30.A)(_d975dc811624.root, {
          decodeEntities: !1
        });
      }
      function m(_8eeac2780070, _d975dc811624) {
        return _8eeac2780070.split(/ .*,/).map(_8eeac2780070 => _8eeac2780070.trim()).map(_8eeac2780070 => {
          let [_ebf358b75a0b, ..._fae22887acec] = _8eeac2780070.split(/\s+/), _bbaa3660c6e1 = (0, 
          _c5b4b25078d6.Oy)(_ebf358b75a0b.trim(), _d975dc811624);
          return _fae22887acec.length > 0 ? `${_bbaa3660c6e1} ${_fae22887acec.join(" ")}` : _bbaa3660c6e1;
        }).join(", ");
      }
      function y(_8eeac2780070) {
        return btoa(Array.from(_8eeac2780070, _8eeac2780070 => String.fromCodePoint(_8eeac2780070)).join(""));
      }
      let _8a98072c4f6f = [ "onbeforexrselect", "onabort", "onbeforeinput", "onbeforematch", "onbeforetoggle", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncontentvisibilityautostatechange", "oncontextlost", "oncontextmenu", "oncontextrestored", "oncuechange", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "onformdata", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onresize", "onscroll", "onsecuritypolicyviolation", "onseeked", "onseeking", "onselect", "onslotchange", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "onvolumechange", "onwaiting", "onwebkitanimationend", "onwebkitanimationiteration", "onwebkitanimationstart", "onwebkittransitionend", "onwheel", "onauxclick", "ongotpointercapture", "onlostpointercapture", "onpointerdown", "onpointermove", "onpointerrawupdate", "onpointerup", "onpointercancel", "onpointerover", "onpointerout", "onpointerenter", "onpointerleave", "onselectstart", "onselectionchange", "onanimationend", "onanimationiteration", "onanimationstart", "ontransitionrun", "ontransitionstart", "ontransitionend", "ontransitioncancel", "oncopy", "oncut", "onpaste", "onscrollend", "onscrollsnapchange", "onscrollsnapchanging" ];
    },
    9381: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b(2614), _ebf358b75a0b(4435), _ebf358b75a0b(884), _ebf358b75a0b(1478), 
      _ebf358b75a0b(1472), _ebf358b75a0b(2015), _ebf358b75a0b(1561);
    },
    1478: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.d(_d975dc811624, {
        o: () => s
      });
      var _fae22887acec = _ebf358b75a0b(37), _bbaa3660c6e1 = _ebf358b75a0b(1561), _0486c8e5ad30 = _ebf358b75a0b(8665).A;
      function s(_8eeac2780070, _d975dc811624, _ebf358b75a0b, _c5b4b25078d6 = !1) {
        try {
          let _4d778195d27f = function(_8eeac2780070, _d975dc811624, _ebf358b75a0b, _fae22887acec = !1) {
            return function(_8eeac2780070, _d975dc811624, _ebf358b75a0b, _fae22887acec) {
              let [_c5b4b25078d6, _4d778195d27f] = (0, _bbaa3660c6e1.nb)(_ebf358b75a0b);
              try {
                let _4d778195d27f, _9fc5b21180bb = performance.now();
                _4d778195d27f = "string" == typeof _8eeac2780070 ? _c5b4b25078d6.rewrite_js(_8eeac2780070, _ebf358b75a0b.base.href, _d975dc811624 || "(unknown)", _fae22887acec) : _c5b4b25078d6.rewrite_js_bytes(_8eeac2780070, _ebf358b75a0b.base.href, _d975dc811624 || "(unknown)", _fae22887acec), 
                _0486c8e5ad30.time(_ebf358b75a0b, _9fc5b21180bb, `oxc rewrite for "${_d975dc811624 || "(unknown)"}"`);
                let {js: _6c0b4fee9c25, map: _fb4ea2a6f85c, scramtag: _fe5e93e0a07e, errors: _11590423c4ed} = _4d778195d27f;
                return {
                  js: "string" == typeof _8eeac2780070 ? _bbaa3660c6e1.su.decode(_6c0b4fee9c25) : _6c0b4fee9c25,
                  tag: _fe5e93e0a07e,
                  map: _fb4ea2a6f85c,
                  errors: _11590423c4ed
                };
              } finally {
                _4d778195d27f();
              }
            }(_8eeac2780070, _d975dc811624, _ebf358b75a0b, _fae22887acec);
          }(_8eeac2780070, _d975dc811624, _ebf358b75a0b, _c5b4b25078d6), _9fc5b21180bb = _4d778195d27f.js;
          if ((0, _fae22887acec.U5)("sourcemaps", _ebf358b75a0b.base)) {
            let _8eeac2780070 = globalThis[_fae22887acec.$W.globals.pushsourcemapfn];
            if (_8eeac2780070) _8eeac2780070(Array.from(_4d778195d27f.map), _4d778195d27f.tag); else {
              _9fc5b21180bb instanceof Uint8Array && (_9fc5b21180bb = (new TextDecoder).decode(_9fc5b21180bb));
              let _8eeac2780070 = `${_fae22887acec.$W.globals.pushsourcemapfn}([${_4d778195d27f.map.join(",")}], "${_4d778195d27f.tag}");`, _d975dc811624 = /^\s*(['"])use strict\1;?/;
              _9fc5b21180bb = _d975dc811624.test(_9fc5b21180bb) ? _9fc5b21180bb.replace(_d975dc811624, `$&\n${_8eeac2780070}`) : `${_8eeac2780070}\n${_9fc5b21180bb}`;
            }
          }
          if ((0, _fae22887acec.U5)("rewriterLogs", _ebf358b75a0b.base)) for (let _8eeac2780070 of _4d778195d27f.errors) console.error("oxc parse error", _8eeac2780070);
          return _9fc5b21180bb;
        } catch (_0486c8e5ad30) {
          if (console.warn("failed rewriting js for", _d975dc811624 || "(unknown)", _0486c8e5ad30.message, _8eeac2780070 instanceof Uint8Array ? _bbaa3660c6e1.su.decode(_8eeac2780070) : _8eeac2780070), 
          (0, _fae22887acec.U5)("allowInvalidJs", _ebf358b75a0b.base)) return _8eeac2780070;
          throw _0486c8e5ad30;
        }
      }
      Error.stackTraceLimit = 50;
    },
    1472: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.d(_d975dc811624, {
        $n: () => o,
        IP: () => s,
        Oy: () => l,
        v2: () => c
      });
      var _fae22887acec = _ebf358b75a0b(37), _bbaa3660c6e1 = _ebf358b75a0b(1478);
      function a(_8eeac2780070, _d975dc811624) {
        try {
          return new URL(_8eeac2780070, _d975dc811624);
        } catch {
          return null;
        }
      }
      function s(_8eeac2780070, _d975dc811624) {
        let _ebf358b75a0b = new URL(_8eeac2780070.substring(5));
        return "blob:" + _d975dc811624.origin.origin + _ebf358b75a0b.pathname;
      }
      function o(_8eeac2780070) {
        let _d975dc811624 = new URL(_8eeac2780070.substring(5));
        return "blob:" + location.origin + _d975dc811624.pathname;
      }
      function l(_8eeac2780070, _d975dc811624) {
        if (_8eeac2780070 instanceof URL && (_8eeac2780070 = _8eeac2780070.toString()), 
        _8eeac2780070.startsWith("javascript:")) return "javascript:" + (0, _bbaa3660c6e1.o)(_8eeac2780070.slice(11), "(javascript: url)", _d975dc811624);
        {
          if (_8eeac2780070.startsWith("blob:") || _8eeac2780070.startsWith("data:")) return location.origin + _fae22887acec.$W.prefix + _8eeac2780070;
          if (_8eeac2780070.startsWith("mailto:") || _8eeac2780070.startsWith("about:")) return _8eeac2780070;
          let _ebf358b75a0b = _d975dc811624.base.href;
          _ebf358b75a0b.startsWith("about:") && (_ebf358b75a0b = c(self.location.href));
          let _bbaa3660c6e1 = a(_8eeac2780070, _ebf358b75a0b);
          if (!_bbaa3660c6e1) return _8eeac2780070;
          let _0486c8e5ad30 = (0, _fae22887acec.hD)(_bbaa3660c6e1.hash.slice(1));
          return _bbaa3660c6e1.hash = "", location.origin + _fae22887acec.$W.prefix + (0, 
          _fae22887acec.hD)(_bbaa3660c6e1.href) + (_0486c8e5ad30 ? "#" + _0486c8e5ad30 : "");
        }
      }
      function c(_8eeac2780070) {
        _8eeac2780070 instanceof URL && (_8eeac2780070 = _8eeac2780070.toString());
        let _d975dc811624 = location.origin + _fae22887acec.$W.prefix;
        if (_8eeac2780070.startsWith("javascript:")) return _8eeac2780070;
        {
          if (_8eeac2780070.startsWith("blob:")) return _8eeac2780070;
          if (_8eeac2780070.startsWith(_d975dc811624 + "blob:") || _8eeac2780070.startsWith(_d975dc811624 + "data:")) return _8eeac2780070.substring(_d975dc811624.length);
          if (_8eeac2780070.startsWith("mailto:") || _8eeac2780070.startsWith("about:")) return _8eeac2780070;
          let _ebf358b75a0b = a(_8eeac2780070);
          if (!_ebf358b75a0b) return _8eeac2780070;
          let _bbaa3660c6e1 = (0, _fae22887acec.P_)(_ebf358b75a0b.hash.slice(1));
          return _ebf358b75a0b.hash = "", (0, _fae22887acec.P_)(_ebf358b75a0b.href.slice(_d975dc811624.length) + (_bbaa3660c6e1 ? "#" + _bbaa3660c6e1 : ""));
        }
      }
    },
    1561: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      let _fae22887acec;
      _ebf358b75a0b.d(_d975dc811624, {
        n$: () => d,
        nb: () => g,
        su: () => _fe5e93e0a07e
      });
      var _bbaa3660c6e1 = _ebf358b75a0b(3907), _0486c8e5ad30 = _ebf358b75a0b(37), _c5b4b25078d6 = _ebf358b75a0b(1472), _4d778195d27f = _ebf358b75a0b(2393), _9fc5b21180bb = _ebf358b75a0b(2614), _6c0b4fee9c25 = _ebf358b75a0b(1478), _fb4ea2a6f85c = _ebf358b75a0b(884);
      async function d() {
        _fae22887acec = new Uint8Array(await fetch(_0486c8e5ad30.$W.files.wasm).then(_8eeac2780070 => _8eeac2780070.arrayBuffer()));
      }
      self.WASM && (_fae22887acec = Uint8Array.from(atob(self.WASM), _8eeac2780070 => _8eeac2780070.charCodeAt(0)));
      let _fe5e93e0a07e = new TextDecoder, _11590423c4ed = "\0asm".split("").map(_8eeac2780070 => _8eeac2780070.charCodeAt(0)), _8a98072c4f6f = [];
      function g(_8eeac2780070) {
        let _d975dc811624;
        if (!(_fae22887acec instanceof Uint8Array)) throw Error("rewriter wasm not found (was it fetched correctly?)");
        if (![ ..._fae22887acec.slice(0, 4) ].every((_8eeac2780070, _d975dc811624) => _8eeac2780070 === _11590423c4ed[_d975dc811624])) throw Error("rewriter wasm does not have wasm magic (was it fetched correctly?)\nrewriter wasm contents: " + _fe5e93e0a07e.decode(_fae22887acec));
        (0, _bbaa3660c6e1.QR)({
          module: new WebAssembly.Module(_fae22887acec)
        });
        let _ebf358b75a0b = _8a98072c4f6f.findIndex(_8eeac2780070 => !_8eeac2780070.inUse), _a3a9859aeb07 = _8a98072c4f6f.length;
        return -1 === _ebf358b75a0b ? ((0, _0486c8e5ad30.U5)("rewriterLogs", _8eeac2780070.base) && console.log(`creating new rewriter, ${_a3a9859aeb07} rewriters made already`), 
        _d975dc811624 = {
          rewriter: new _bbaa3660c6e1.LW({
            config: _0486c8e5ad30.$W,
            shared: {
              rewrite: {
                htmlRules: _4d778195d27f.V,
                rewriteUrl: _c5b4b25078d6.Oy,
                rewriteCss: _9fc5b21180bb.s,
                rewriteJs: _6c0b4fee9c25.o,
                getHtmlInjectCode(_8eeac2780070, _d975dc811624) {
                  let _ebf358b75a0b = (0, _fb4ea2a6f85c.Uk)(_8eeac2780070, _8eeac2780070 => `<script src="${_8eeac2780070}"><\/script>`).join("");
                  return _d975dc811624 ? `<head>${_ebf358b75a0b}</head>` : _ebf358b75a0b;
                }
              }
            },
            flagEnabled: _0486c8e5ad30.U5,
            codec: {
              encode: _0486c8e5ad30.hD,
              decode: _0486c8e5ad30.P_
            }
          }),
          inUse: !1
        }, _8a98072c4f6f.push(_d975dc811624)) : ((0, _0486c8e5ad30.U5)("rewriterLogs", _8eeac2780070.base) && console.log(`using cached rewriter ${_ebf358b75a0b} from list of ${_a3a9859aeb07} rewriters`), 
        _d975dc811624 = _8a98072c4f6f[_ebf358b75a0b]), _d975dc811624.inUse = !0, [ _d975dc811624.rewriter, () => _d975dc811624.inUse = !1 ];
      }
    },
    2015: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.d(_d975dc811624, {
        i: () => a
      });
      var _fae22887acec = _ebf358b75a0b(37), _bbaa3660c6e1 = _ebf358b75a0b(1478);
      function a(_8eeac2780070, _d975dc811624, _ebf358b75a0b, _0486c8e5ad30) {
        let _c5b4b25078d6 = "", _4d778195d27f = "module" === _d975dc811624, l = _8eeac2780070 => {
          _4d778195d27f ? _c5b4b25078d6 += `import "${_fae22887acec.$W.files[_8eeac2780070]}"\n` : _c5b4b25078d6 += `importScripts("${_fae22887acec.$W.files[_8eeac2780070]}");\n`;
        };
        l("wasm"), l("all"), _c5b4b25078d6 += `$studyjetLoadClient().loadAndHook(${JSON.stringify(_fae22887acec.$W)});`;
        let _9fc5b21180bb = (0, _bbaa3660c6e1.o)(_8eeac2780070, _ebf358b75a0b, _0486c8e5ad30, _4d778195d27f);
        return _9fc5b21180bb instanceof Uint8Array && (_9fc5b21180bb = (new TextDecoder).decode(_9fc5b21180bb)), 
        _c5b4b25078d6 += _9fc5b21180bb;
      }
    },
    6684: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.d(_d975dc811624, {
        Sn: () => h,
        YH: () => u,
        Yq: () => f,
        hU: () => d,
        pL: () => p,
        rj: () => c
      });
      var _fae22887acec = _ebf358b75a0b(6570);
      let _bbaa3660c6e1 = {
        none: 0,
        "same-origin": 1,
        "same-site": 2,
        "cross-site": 3
      };
      async function a() {
        return (0, _fae22887acec.P2)("@d7a6431b92e", 1);
      }
      async function s(_8eeac2780070) {
        let _d975dc811624 = await a();
        return await _d975dc811624.get("redirectTrackers", _8eeac2780070) || null;
      }
      async function o(_8eeac2780070, _d975dc811624) {
        let _ebf358b75a0b = await a();
        await _ebf358b75a0b.put("redirectTrackers", _d975dc811624, _8eeac2780070);
      }
      async function l(_8eeac2780070) {
        let _d975dc811624 = await a();
        await _d975dc811624.delete("redirectTrackers", _8eeac2780070);
      }
      async function c(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
        await s(_8eeac2780070) || await o(_8eeac2780070, {
          originalReferrer: _d975dc811624 || "",
          mostRestrictiveSite: _ebf358b75a0b,
          referrerPolicy: "",
          chainStarted: Date.now()
        });
      }
      async function u(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
        let _fae22887acec = await s(_8eeac2780070);
        _fae22887acec && (await l(_8eeac2780070), _ebf358b75a0b && (_fae22887acec.referrerPolicy = _ebf358b75a0b), 
        await o(_d975dc811624, _fae22887acec));
      }
      async function d(_8eeac2780070, _d975dc811624) {
        let _ebf358b75a0b = await s(_8eeac2780070);
        if (!_ebf358b75a0b) return _d975dc811624;
        let _fae22887acec = _bbaa3660c6e1[_ebf358b75a0b.mostRestrictiveSite];
        return (_bbaa3660c6e1[_d975dc811624] ?? 0) > _fae22887acec ? (_ebf358b75a0b.mostRestrictiveSite = _d975dc811624, 
        await o(_8eeac2780070, _ebf358b75a0b), _d975dc811624) : _ebf358b75a0b.mostRestrictiveSite;
      }
      async function h(_8eeac2780070) {
        await l(_8eeac2780070);
      }
      async function p(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
        let _fae22887acec = await a();
        await _fae22887acec.put("referrerPolicies", {
          policy: _d975dc811624,
          referrer: _ebf358b75a0b
        }, _8eeac2780070);
      }
      async function f(_8eeac2780070) {
        let _d975dc811624 = await a();
        return await _d975dc811624.get("referrerPolicies", _8eeac2780070) || null;
      }
    },
    2416: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b(6684), _ebf358b75a0b(8228);
    },
    8228: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.d(_d975dc811624, {
        ps: () => l
      });
      var _fae22887acec = _ebf358b75a0b(6570);
      let _bbaa3660c6e1 = "publicSuffixList";
      async function a() {
        return (0, _fae22887acec.P2)("@d7a6431b92e", 1);
      }
      async function s() {
        let _8eeac2780070 = await a();
        return await _8eeac2780070.get("publicSuffixList", _bbaa3660c6e1) || null;
      }
      async function o(_8eeac2780070) {
        let _d975dc811624 = await a();
        await _d975dc811624.put("publicSuffixList", {
          data: _8eeac2780070,
          expiry: Date.now() + 36e5
        }, _bbaa3660c6e1);
      }
      async function l(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
        return _d975dc811624 ? _8eeac2780070.origin.origin === _d975dc811624.origin ? "same-origin" : await c(_8eeac2780070.origin, _d975dc811624, _ebf358b75a0b) ? "same-site" : "cross-site" : "none";
      }
      async function c(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
        return await u(_8eeac2780070, _ebf358b75a0b) === await u(_d975dc811624, _ebf358b75a0b);
      }
      async function u(_8eeac2780070, _d975dc811624) {
        let _ebf358b75a0b = await d(_d975dc811624), _fae22887acec = _8eeac2780070.hostname.toLowerCase().split("."), _bbaa3660c6e1 = "", _0486c8e5ad30 = !1;
        for (let _8eeac2780070 of _ebf358b75a0b) {
          let _d975dc811624 = _8eeac2780070.startsWith("!") ? _8eeac2780070.substring(1) : _8eeac2780070;
          if (function(_8eeac2780070, _d975dc811624) {
            if (_8eeac2780070.length < _d975dc811624.length) return !1;
            let _ebf358b75a0b = _8eeac2780070.length - _d975dc811624.length;
            for (let _fae22887acec = 0; _fae22887acec < _d975dc811624.length; _fae22887acec++) {
              let _bbaa3660c6e1 = _8eeac2780070[_ebf358b75a0b + _fae22887acec], _0486c8e5ad30 = _d975dc811624[_fae22887acec];
              if ("*" !== _0486c8e5ad30 && _bbaa3660c6e1 !== _0486c8e5ad30) return !1;
            }
            return !0;
          }(_fae22887acec, _d975dc811624.split("."))) {
            if (_8eeac2780070.startsWith("!")) {
              _bbaa3660c6e1 = _d975dc811624, _0486c8e5ad30 = !0;
              break;
            }
            !_0486c8e5ad30 && _d975dc811624.length > _bbaa3660c6e1.length && (_bbaa3660c6e1 = _d975dc811624);
          }
        }
        if (!_bbaa3660c6e1) return _fae22887acec.slice(-2).join(".");
        let _c5b4b25078d6 = _bbaa3660c6e1.split(".").length, _4d778195d27f = _0486c8e5ad30 ? _c5b4b25078d6 : _c5b4b25078d6 + 1;
        return _fae22887acec.slice(-_4d778195d27f).join(".");
      }
      async function d(_8eeac2780070) {
        let _d975dc811624, _ebf358b75a0b = await s();
        if (_ebf358b75a0b && Date.now() < _ebf358b75a0b.expiry) return _ebf358b75a0b.data;
        try {
          _d975dc811624 = await _8eeac2780070.fetch("https://publicsuffix.org/list/public_suffix_list.dat");
        } catch (_8eeac2780070) {
          throw Error(`Failed to fetch public suffix list: ${_8eeac2780070}`);
        }
        let _fae22887acec = (await _d975dc811624.text()).split("\n").map(_8eeac2780070 => {
          let _d975dc811624 = _8eeac2780070.trim(), _ebf358b75a0b = _d975dc811624.indexOf(" ");
          return _ebf358b75a0b > -1 ? _d975dc811624.substring(0, _ebf358b75a0b) : _d975dc811624;
        }).filter(_8eeac2780070 => _8eeac2780070 && !_8eeac2780070.startsWith("//"));
        return await o(_fae22887acec), _fae22887acec;
      }
    },
    2794: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.d(_d975dc811624, {
        pX: () => _fae22887acec,
        zr: () => _bbaa3660c6e1
      });
      let _fae22887acec = Symbol.for("studyjet client global"), _bbaa3660c6e1 = Symbol.for("studyjet frame handle");
    },
    5956: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      function n(_8eeac2780070, _d975dc811624) {
        let _ebf358b75a0b = `\n                errorTrace.value = ${JSON.stringify(_8eeac2780070)};\n                fetchedURL.textContent = ${JSON.stringify(_d975dc811624)};\n                for (const node of document.querySelectorAll("#hostname")) node.textContent = ${JSON.stringify(location.hostname)};\n                reload.addEventListener("click", () => location.reload());\n                version.textContent = ${JSON.stringify(globalThis.$studyjetVersion?.version || "unknown")};\n                build.textContent = ${JSON.stringify(globalThis.$studyjetVersion?.build || "unknown")};\n\n                document.getElementById('copy-button').addEventListener('click', async () => {\n                    const text = document.getElementById('errorTrace').value;\n                    await navigator.clipboard.writeText(text);\n                    const btn = document.getElementById('copy-button');\n                    btn.textContent = 'Copied!';\n                    setTimeout(() => btn.textContent = 'Copy', 2000);\n                });\n        `;
        return `<!DOCTYPE html>\n            <html>\n                <head>\n                    <meta charset="utf-8" />\n                    <title>StudyJet</title>\n                    <style>\n                    :root {\n                        --deep: #080602;\n                        --shallow: #181412;\n                        --beach: #f1e8e1;\n                        --shore: #b1a8a1;\n                        --accent: #ffa938;\n                        --font-sans: -apple-system, system-ui, BlinkMacSystemFont, sans-serif;\n                        --font-monospace: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n                    }\n\n                    *:not(div,p,span,ul,li,i,span) {\n                        background-color: var(--deep);\n                        color: var(--beach);\n                        font-family: var(--font-sans);\n                    }\n\n                    textarea,\n                    button {\n                        background-color: var(--shallow);\n                        border-radius: 0.6em;\n                        padding: 0.6em;\n                        border: none;\n                        appearance: none;\n                        font-family: var(--font-sans);\n                        color: var(--beach);\n                    }\n\n                    button.primary {\n                        background-color: var(--accent);\n                        color: var(--deep);\n                        font-weight: bold;\n                    }\n\n                    textarea {\n                        resize: none;\n                        height: 20em;\n                        text-align: left;\n                        font-family: var(--font-monospace);\n                    }\n\n                    body {\n                        width: 100vw;\n                        height: 100vh;\n                        justify-content: center;\n                        align-items: center;\n                    }\n\n                    body,\n                    html,\n                    #inner {\n                        display: flex;\n                        align-items: center;\n                        flex-direction: column;\n                        gap: 0.5em;\n                        overflow: hidden;\n                    }\n\n                    #inner {\n                        z-index: 100;\n                    }\n\n                    #cover {\n                        position: absolute;\n                        width: 100%;\n                        height: 100%;\n                        background-color: color-mix(in srgb, var(--deep) 70%, transparent);\n                        z-index: 99;\n                    }\n\n                    #info {\n                        display: flex;\n                        flex-direction: row;\n                        align-items: flex-start;\n                        gap: 1em;\n                    }\n\n                    #version-wrapper {\n                        width: auto;\n                        text-align: right;\n                        position: absolute;\n                        top: 0.5rem;\n                        right: 0.5rem;\n                        font-size: 0.8rem;\n                        color: var(--shore)!important;\n                        i {\n                            background-color: color-mix(in srgb, var(--deep), transparent 50%);\n                            border-radius: 9999px;\n                            padding: 0.2em 0.5em;\n                        }\n                        z-index: 101;\n                    }\n\n                    #errorTrace-wrapper {\n                        position: relative;\n                        width: fit-content;\n                    }\n\n                    #copy-button {\n                        position: absolute;\n                        top: 0.5em;\n                        right: 0.5em;\n                        padding: 0.23em;\n                        cursor: pointer;\n                        opacity: 0;\n                        transition: opacity 0.4s;\n                        font-size: 0.9em;\n                    }\n\n                    #errorTrace-wrapper:hover #copy-button {\n                        opacity: 1;\n                    }\n                    </style>\n                </head>\n                <body>\n                    <div id="cover"></div>\n                    <div id="inner">\n                        <h1 id="errorTitle">Uh oh!</h1>\n                        <p>There was an error loading <b id="fetchedURL"></b></p>\n                        \x3c!-- <p id="errorMessage">Internal Server Error</p> --\x3e\n\n                        <div id="info">\n                            <div id="errorTrace-wrapper">\n                                <textarea id="errorTrace" cols="40" rows="10" readonly></textarea>\n                                <button id="copy-button" class="primary">Copy</button>\n                            </div>\n                            <div id="troubleshooting">\n                                <p>Try:</p>\n                                <ul>\n                                    <li>Checking your internet connection</li>\n                                    <li>Verifying you entered the correct address</li>\n                                    <li>Clearing the site data</li>\n                                    <li>Contacting <b id="hostname"></b>'s administrator</li>\n                                    <li>Verify the server isn't censored</li>\n                                </ul>\n                                <p>If you're the administrator of <b id="hostname"></b>, try:</p>\n                                    <ul>\n                                    <li>Restarting your server</li>\n                                    <li>Updating StudyJet</li>\n                                    <li>Troubleshooting the error on the <a href="https://github.com/MercuryWorkshop/studyjet" target="_blank">GitHub repository</a></li>\n                                </ul>\n                            </div>\n                        </div>\n                        <br>\n                        <button id="reload" class="primary">Reload</button>\n                    </div>\n                    <p id="version-wrapper"><i>StudyJet v<span id="version"></span> (build <span id="build"></span>)</i></p>\n                    <script src="${"data:application/javascript," + encodeURIComponent(_ebf358b75a0b)}"><\/script>\n                </body>\n            </html>\n        `;
      }
      function i(_8eeac2780070, _d975dc811624) {
        let _ebf358b75a0b = {
          "content-type": "text/html"
        };
        return crossOriginIsolated && (_ebf358b75a0b["Cross-Origin-Embedder-Policy"] = "require-corp"), 
        new Response(n(String(_8eeac2780070), _d975dc811624), {
          status: 500,
          headers: _ebf358b75a0b
        });
      }
      _ebf358b75a0b.d(_d975dc811624, {
        B: () => n,
        v: () => i
      });
    },
    1403: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.d(_d975dc811624, {
        H: () => n
      });
      class n {
        handle;
        origin;
        syncToken=0;
        promises={};
        messageChannel=new MessageChannel;
        connected=!1;
        constructor(_8eeac2780070, _d975dc811624) {
          this.handle = _8eeac2780070, this.origin = _d975dc811624, this.messageChannel.port1.addEventListener("message", _8eeac2780070 => {
            "studyjet$type" in _8eeac2780070.data && ("init" === _8eeac2780070.data.studyjet$type ? this.connected = !0 : this.handleMessage(_8eeac2780070.data));
          }), this.messageChannel.port1.start(), this.handle.postMessage({
            studyjet$type: "init",
            studyjet$port: this.messageChannel.port2
          }, [ this.messageChannel.port2 ]);
        }
        handleMessage(_8eeac2780070) {
          let _d975dc811624 = this.promises[_8eeac2780070.studyjet$token];
          _d975dc811624 && (_d975dc811624(_8eeac2780070), delete this.promises[_8eeac2780070.studyjet$token]);
        }
        async fetch(_8eeac2780070) {
          let _d975dc811624 = this.syncToken++, _ebf358b75a0b = {
            studyjet$type: "fetch",
            studyjet$token: _d975dc811624,
            studyjet$request: {
              url: _8eeac2780070.url,
              body: _8eeac2780070.body,
              headers: Array.from(_8eeac2780070.headers.entries()),
              method: _8eeac2780070.method,
              mode: _8eeac2780070.mode,
              destinitation: _8eeac2780070.destination
            }
          }, _fae22887acec = _8eeac2780070.body ? [ _8eeac2780070.body ] : [];
          this.handle.postMessage(_ebf358b75a0b, _fae22887acec);
          let {studyjet$response: _bbaa3660c6e1} = await new Promise(_8eeac2780070 => {
            this.promises[_d975dc811624] = _8eeac2780070;
          });
          return !!_bbaa3660c6e1 && new Response(_bbaa3660c6e1.body, {
            headers: _bbaa3660c6e1.headers,
            status: _bbaa3660c6e1.status,
            statusText: _bbaa3660c6e1.statusText
          });
        }
      }
    },
    5790: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.d(_d975dc811624, {
        Pf: () => m,
        V3: () => S,
        dT: () => w
      });
      var _fae22887acec = _ebf358b75a0b(5956), _bbaa3660c6e1 = _ebf358b75a0b(8228), _0486c8e5ad30 = _ebf358b75a0b(6684), _c5b4b25078d6 = _ebf358b75a0b(1472), _4d778195d27f = _ebf358b75a0b(1478), _9fc5b21180bb = _ebf358b75a0b(1427), _6c0b4fee9c25 = _ebf358b75a0b(37), _fb4ea2a6f85c = _ebf358b75a0b(4435), _fe5e93e0a07e = _ebf358b75a0b(884), _11590423c4ed = _ebf358b75a0b(2614), _8a98072c4f6f = _ebf358b75a0b(2015), _a3a9859aeb07 = _ebf358b75a0b(8665).A;
      function g(_8eeac2780070) {
        return _8eeac2780070.status >= 300 && _8eeac2780070.status < 400;
      }
      async function m(_8eeac2780070, _d975dc811624) {
        try {
          let _ebf358b75a0b, _fae22887acec, _4d778195d27f = new URL(_8eeac2780070.url);
          if (_4d778195d27f.pathname === this.config.files.wasm) return fetch(this.config.files.wasm).then(async _8eeac2780070 => {
            let _d975dc811624 = await _8eeac2780070.arrayBuffer(), _ebf358b75a0b = btoa(new Uint8Array(_d975dc811624).reduce((_8eeac2780070, _d975dc811624) => (_8eeac2780070.push(String.fromCharCode(_d975dc811624)), 
            _8eeac2780070), []).join("")), _fae22887acec = "";
            return _fae22887acec += `if ('document' in self && document.currentScript) { document.currentScript.remove(); }\nself.WASM = '${_ebf358b75a0b}';`, 
            new Response(_fae22887acec, {
              headers: {
                "content-type": "text/javascript"
              }
            });
          });
          let _fb4ea2a6f85c = "", _fe5e93e0a07e = {};
          for (let [_8eeac2780070, _d975dc811624] of [ ..._4d778195d27f.searchParams.entries() ]) {
            switch (_8eeac2780070) {
             case "type":
              _fb4ea2a6f85c = _d975dc811624;
              break;

             case "dest":
              break;

             case "topFrame":
              _ebf358b75a0b = _d975dc811624;
              break;

             case "parentFrame":
              _fae22887acec = _d975dc811624;
              break;

             default:
              _a3a9859aeb07.warn(`${_4d778195d27f.href} extraneous query parameter ${_8eeac2780070}. Assuming <form> element`), 
              _fe5e93e0a07e[_8eeac2780070] = _d975dc811624;
            }
            _4d778195d27f.searchParams.delete(_8eeac2780070);
          }
          let _11590423c4ed = new URL((0, _c5b4b25078d6.v2)(_4d778195d27f));
          for (let [_8eeac2780070, _d975dc811624] of Object.entries(_fe5e93e0a07e)) _11590423c4ed.searchParams.set(_8eeac2780070, _d975dc811624);
          let _8a98072c4f6f = {
            origin: _11590423c4ed,
            base: _11590423c4ed,
            topFrameName: _ebf358b75a0b,
            parentFrameName: _fae22887acec
          };
          if (_4d778195d27f.pathname.startsWith(`${this.config.prefix}blob:`) || _4d778195d27f.pathname.startsWith(`${this.config.prefix}data:`)) {
            let _d975dc811624, _ebf358b75a0b = _4d778195d27f.pathname.substring(this.config.prefix.length);
            _ebf358b75a0b.startsWith("blob:") && (_ebf358b75a0b = (0, _c5b4b25078d6.$n)(_ebf358b75a0b));
            let _fae22887acec = await fetch(_ebf358b75a0b, {});
            _fae22887acec.finalURL = _ebf358b75a0b.startsWith("blob:") ? _ebf358b75a0b : "(data url)", 
            _fae22887acec.body && (_d975dc811624 = await b(_fae22887acec, _8a98072c4f6f, _8eeac2780070.destination, _fb4ea2a6f85c, this.cookieStore));
            let _bbaa3660c6e1 = Object.fromEntries(_fae22887acec.headers.entries());
            return crossOriginIsolated && (_bbaa3660c6e1["Cross-Origin-Opener-Policy"] = "same-origin", 
            _bbaa3660c6e1["Cross-Origin-Embedder-Policy"] = "require-corp"), new Response(_d975dc811624, {
              status: _fae22887acec.status,
              statusText: _fae22887acec.statusText,
              headers: _bbaa3660c6e1
            });
          }
          let _53ae19a12317 = this.serviceWorkers.find(_8eeac2780070 => _8eeac2780070.origin === _11590423c4ed.origin);
          if (_53ae19a12317?.connected && "swruntime" !== _4d778195d27f.searchParams.get("from")) {
            let _d975dc811624 = await _53ae19a12317.fetch(_8eeac2780070);
            if (_d975dc811624) return _d975dc811624;
          }
          if (_11590423c4ed.origin === new URL(_8eeac2780070.url).origin) throw Error("attempted to fetch from same origin - this means the site has obtained a reference to the real origin, aborting");
          let _40551bb2b499 = new _9fc5b21180bb.u;
          for (let [_d975dc811624, _ebf358b75a0b] of _8eeac2780070.headers.entries()) _40551bb2b499.set(_d975dc811624, _ebf358b75a0b);
          if (_d975dc811624 && new URL(_d975dc811624.url).pathname.startsWith(_6c0b4fee9c25.$W.prefix)) {
            let _8eeac2780070 = new URL((0, _c5b4b25078d6.v2)(_d975dc811624.url));
            _8eeac2780070.toString().includes("youtube.com") || (_40551bb2b499.set("Referer", _8eeac2780070.href), 
            _40551bb2b499.set("Origin", _8eeac2780070.origin));
          }
          let _90bc60a01687 = this.cookieStore.getCookies(_11590423c4ed, !1);
          _90bc60a01687.length && _40551bb2b499.set("Cookie", _90bc60a01687);
          let _34a6d0f2557b = !1;
          if ("iframe" === _8eeac2780070.destination && "navigate" === _8eeac2780070.mode && _8eeac2780070.referrer && "no-referrer" !== _8eeac2780070.referrer && _8eeac2780070.referrer !== location.origin + _6c0b4fee9c25.$W.prefix + "no-referrer") {
            let _d975dc811624 = _8eeac2780070.referrer, _ebf358b75a0b = await self.clients.matchAll({
              type: "window"
            });
            for (;_d975dc811624; ) {
              if (!_d975dc811624.includes(_6c0b4fee9c25.$W.prefix)) {
                _34a6d0f2557b = !0;
                break;
              }
              let _8eeac2780070 = _ebf358b75a0b.find(_8eeac2780070 => _8eeac2780070.url === _d975dc811624), _fae22887acec = await (0, 
              _0486c8e5ad30.Yq)(_d975dc811624);
              if (!_fae22887acec || !_fae22887acec.referrer) {
                _8eeac2780070 && _d975dc811624.startsWith(location.origin) && (_34a6d0f2557b = !0);
                break;
              }
              if (_8eeac2780070 && "nested" === _8eeac2780070.frameType) _d975dc811624 = _fae22887acec.referrer; else break;
            }
          }
          _34a6d0f2557b ? (_40551bb2b499.set("Sec-Fetch-Dest", "document"), _40551bb2b499.set("Sec-Fetch-Mode", "navigate")) : (_40551bb2b499.set("Sec-Fetch-Dest", _8eeac2780070.destination || "empty"), 
          _40551bb2b499.set("Sec-Fetch-Mode", _8eeac2780070.mode));
          let _3476d0b8ffc2 = "none";
          if (_8eeac2780070.referrer && "" !== _8eeac2780070.referrer && "no-referrer" !== _8eeac2780070.referrer && _8eeac2780070.referrer !== location.origin + _6c0b4fee9c25.$W.prefix + "no-referrer" && _8eeac2780070.referrer.includes(_6c0b4fee9c25.$W.prefix)) {
            let _d975dc811624 = (0, _c5b4b25078d6.v2)(_8eeac2780070.referrer);
            if (_d975dc811624) {
              let _8eeac2780070 = new URL(_d975dc811624);
              _3476d0b8ffc2 = await (0, _bbaa3660c6e1.ps)(_8a98072c4f6f, _8eeac2780070, this.client);
            }
          }
          await (0, _0486c8e5ad30.rj)(_11590423c4ed.toString(), _8eeac2780070.referrer ? (0, 
          _c5b4b25078d6.v2)(_8eeac2780070.referrer) : null, _3476d0b8ffc2), _40551bb2b499.set("Sec-Fetch-Site", await (0, 
          _0486c8e5ad30.hU)(_11590423c4ed.toString(), _3476d0b8ffc2));
          let _5b5d6ae17cf1 = new S(_11590423c4ed, _40551bb2b499.headers, _8eeac2780070.body, _8eeac2780070.method, _8eeac2780070.destination, _d975dc811624);
          this.dispatchEvent(_5b5d6ae17cf1);
          let _cdababdb6416 = await _5b5d6ae17cf1.response || await this.client.fetch(_5b5d6ae17cf1.url, {
            method: _5b5d6ae17cf1.method,
            body: _5b5d6ae17cf1.body,
            headers: _5b5d6ae17cf1.requestHeaders,
            credentials: "omit",
            mode: "cors" === _8eeac2780070.mode ? _8eeac2780070.mode : "same-origin",
            cache: _8eeac2780070.cache,
            redirect: "manual",
            duplex: "half"
          });
          return _cdababdb6416.finalURL = _5b5d6ae17cf1.url.href, await y(_11590423c4ed, _8a98072c4f6f, _fb4ea2a6f85c, _8eeac2780070.destination, _8eeac2780070.mode, _cdababdb6416, this.cookieStore, _d975dc811624, this.client, this, _8eeac2780070.referrer);
        } catch (_d975dc811624) {
          let _ebf358b75a0b = {
            message: _d975dc811624.message,
            url: _8eeac2780070.url,
            destination: _8eeac2780070.destination
          };
          if (_d975dc811624.cause && (_ebf358b75a0b.cause = _d975dc811624.cause, _d975dc811624.cause instanceof AggregateError && (_ebf358b75a0b.causeErrors = _d975dc811624.cause.errors)), 
          _d975dc811624.stack && (_ebf358b75a0b.stack = _d975dc811624.stack), console.error("ERROR FROM SERVICE WORKER FETCH: ", _ebf358b75a0b), 
          console.error(_d975dc811624), ![ "document", "iframe" ].includes(_8eeac2780070.destination)) return new Response(void 0, {
            status: 500
          });
          let _bbaa3660c6e1 = Object.entries(_ebf358b75a0b).map(([_8eeac2780070, _d975dc811624]) => `${_8eeac2780070.charAt(0).toUpperCase() + _8eeac2780070.slice(1)}: ${_d975dc811624}`).join("\n\n");
          return (0, _fae22887acec.v)(_bbaa3660c6e1, (0, _c5b4b25078d6.v2)(_8eeac2780070.url));
        }
      }
      async function y(_8eeac2780070, _d975dc811624, _ebf358b75a0b, _fae22887acec, _4d778195d27f, _9fc5b21180bb, _fe5e93e0a07e, _11590423c4ed, _8a98072c4f6f, _a3a9859aeb07, _53ae19a12317) {
        let _40551bb2b499, _90bc60a01687 = "navigate" === _4d778195d27f && [ "document", "iframe" ].includes(_fae22887acec), _34a6d0f2557b = await (0, 
        _fb4ea2a6f85c.l)(_9fc5b21180bb.rawHeaders, _d975dc811624, _8a98072c4f6f, {
          get: _0486c8e5ad30.Yq,
          set: _0486c8e5ad30.pL
        });
        if (_90bc60a01687 && _34a6d0f2557b["referrer-policy"] && _53ae19a12317 && await (0, 
        _0486c8e5ad30.pL)(_8eeac2780070.href, _34a6d0f2557b["referrer-policy"], _53ae19a12317), 
        g(_9fc5b21180bb)) {
          let _d975dc811624 = new URL((0, _c5b4b25078d6.v2)(_34a6d0f2557b.location));
          await (0, _0486c8e5ad30.YH)(_8eeac2780070.toString(), _d975dc811624.toString(), _34a6d0f2557b["referrer-policy"]);
          let _fae22887acec = await (0, _bbaa3660c6e1.ps)({
            origin: _d975dc811624,
            base: _d975dc811624
          }, _8eeac2780070, _8a98072c4f6f);
          if (await (0, _0486c8e5ad30.hU)(_d975dc811624.toString(), _fae22887acec), _ebf358b75a0b) {
            let _8eeac2780070 = new URL(_34a6d0f2557b.location);
            _8eeac2780070.searchParams.set("type", _ebf358b75a0b), _34a6d0f2557b.location = _8eeac2780070.href;
          }
        }
        let _3476d0b8ffc2 = _34a6d0f2557b["set-cookie"] || [];
        for (let _d975dc811624 in _3476d0b8ffc2) if (_11590423c4ed) {
          let _ebf358b75a0b = _a3a9859aeb07.dispatch(_11590423c4ed, {
            studyjet$type: "cookie",
            cookie: _d975dc811624,
            url: _8eeac2780070.href
          });
          "document" !== _fae22887acec && "iframe" !== _fae22887acec && await _ebf358b75a0b;
        }
        for (let _d975dc811624 in await _fe5e93e0a07e.setCookies(_3476d0b8ffc2 instanceof Array ? _3476d0b8ffc2 : [ _3476d0b8ffc2 ], _8eeac2780070), 
        _34a6d0f2557b) Array.isArray(_34a6d0f2557b[_d975dc811624]) && (_34a6d0f2557b[_d975dc811624] = _34a6d0f2557b[_d975dc811624][0]);
        if (function(_8eeac2780070, _d975dc811624) {
          if ([ "document", "iframe" ].includes(_d975dc811624)) {
            let _d975dc811624 = _8eeac2780070["content-disposition"];
            if (_d975dc811624) {
              if ("inline" !== _d975dc811624) return !0;
            } else {
              let _d975dc811624 = _8eeac2780070["content-type"]?.split(";")[0].trim().toLowerCase();
              if (_d975dc811624 && ![ "text/html", "text/plain", "text/css", "text/javascript", "text/xml", "application/javascript", "application/json", "application/xml", "application/pdf" ].includes(_d975dc811624) && !_d975dc811624.startsWith("text") && !_d975dc811624.startsWith("image") && !_d975dc811624.startsWith("font") && !_d975dc811624.startsWith("video")) return !0;
            }
          }
          return !1;
        }(_34a6d0f2557b, _fae22887acec) && !g(_9fc5b21180bb)) if ((0, _6c0b4fee9c25.U5)("interceptDownloads", _8eeac2780070)) {
          if (!_11590423c4ed) throw Error("cant find client");
          let _d975dc811624 = null, _ebf358b75a0b = _34a6d0f2557b["content-disposition"];
          if ("string" == typeof _ebf358b75a0b) {
            let _8eeac2780070 = _ebf358b75a0b.match(/filename=["']?([^"';\n]*)["']?/i);
            _8eeac2780070 && _8eeac2780070[1] && (_d975dc811624 = _8eeac2780070[1]);
          }
          let _fae22887acec = _34a6d0f2557b["content-length"], _bbaa3660c6e1 = await clients.matchAll({});
          if ((_bbaa3660c6e1 = _bbaa3660c6e1.filter(_8eeac2780070 => !_8eeac2780070.url.includes(_6c0b4fee9c25.$W.prefix))).length < 1) throw Error("couldn't find a controller client to dispatch download to");
          let _0486c8e5ad30 = {
            filename: _d975dc811624,
            url: _8eeac2780070.href,
            type: _34a6d0f2557b["content-type"],
            body: _9fc5b21180bb.body,
            length: Number(_fae22887acec)
          };
          _bbaa3660c6e1[0].postMessage({
            studyjet$type: "download",
            download: _0486c8e5ad30
          }, [ _9fc5b21180bb.body ]), await new Promise(() => {});
        } else {
          let _8eeac2780070 = _34a6d0f2557b["content-disposition"];
          if (!/\s*?((inline|attachment);\s*?)filename=/i.test(_8eeac2780070)) {
            let _d975dc811624 = /^\s*?attachment/i.test(_8eeac2780070) ? "attachment" : "inline", [_ebf358b75a0b] = new URL(_9fc5b21180bb.finalURL).pathname.split("/").slice(-1);
            _34a6d0f2557b["content-disposition"] = `${_d975dc811624}; filename=${JSON.stringify(_ebf358b75a0b)}`;
          }
        }
        _9fc5b21180bb.body && !g(_9fc5b21180bb) && (_40551bb2b499 = await b(_9fc5b21180bb, _d975dc811624, _fae22887acec, _ebf358b75a0b, _fe5e93e0a07e)), 
        "text/event-stream" === _34a6d0f2557b.accept && (_34a6d0f2557b["content-type"] = "text/event-stream"), 
        delete _34a6d0f2557b["permissions-policy"], crossOriginIsolated && [ "document", "iframe", "worker", "sharedworker", "style", "script" ].includes(_fae22887acec) && (_34a6d0f2557b["Cross-Origin-Embedder-Policy"] = "require-corp", 
        _34a6d0f2557b["Cross-Origin-Opener-Policy"] = "same-origin");
        let _5b5d6ae17cf1 = new w(_40551bb2b499, _34a6d0f2557b, _9fc5b21180bb.status, _9fc5b21180bb.statusText, _fae22887acec, _8eeac2780070, _9fc5b21180bb, _11590423c4ed);
        return _a3a9859aeb07.dispatchEvent(_5b5d6ae17cf1), g(_9fc5b21180bb) || await (0, 
        _0486c8e5ad30.Sn)(_8eeac2780070.toString()), new Response(_5b5d6ae17cf1.responseBody, {
          headers: _5b5d6ae17cf1.responseHeaders,
          status: _5b5d6ae17cf1.status,
          statusText: _5b5d6ae17cf1.statusText
        });
      }
      async function b(_8eeac2780070, _d975dc811624, _ebf358b75a0b, _fae22887acec, _bbaa3660c6e1) {
        switch (_ebf358b75a0b) {
         case "iframe":
         case "document":
          if (_8eeac2780070.headers.get("content-type")?.startsWith("text/html")) return (0, 
          _fe5e93e0a07e.Qs)(await _8eeac2780070.text(), _bbaa3660c6e1, _d975dc811624, !0);
          return _8eeac2780070.body;

         case "script":
          return (0, _4d778195d27f.o)(new Uint8Array(await _8eeac2780070.arrayBuffer()), _8eeac2780070.finalURL, _d975dc811624, "module" === _fae22887acec);

         case "style":
          return (0, _11590423c4ed.s)(await _8eeac2780070.text(), _d975dc811624);

         case "sharedworker":
         case "worker":
          return (0, _8a98072c4f6f.i)(new Uint8Array(await _8eeac2780070.arrayBuffer()), _fae22887acec, _8eeac2780070.finalURL, _d975dc811624);

         default:
          return _8eeac2780070.body;
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
        constructor(_8eeac2780070, _d975dc811624, _ebf358b75a0b, _fae22887acec, _bbaa3660c6e1, _0486c8e5ad30, _c5b4b25078d6, _4d778195d27f) {
          super("handleResponse"), this.responseBody = _8eeac2780070, this.responseHeaders = _d975dc811624, 
          this.status = _ebf358b75a0b, this.statusText = _fae22887acec, this.destination = _bbaa3660c6e1, 
          this.url = _0486c8e5ad30, this.rawResponse = _c5b4b25078d6, this.client = _4d778195d27f;
        }
      }
      class S extends Event {
        url;
        requestHeaders;
        body;
        method;
        destination;
        client;
        constructor(_8eeac2780070, _d975dc811624, _ebf358b75a0b, _fae22887acec, _bbaa3660c6e1, _0486c8e5ad30) {
          super("request"), this.url = _8eeac2780070, this.requestHeaders = _d975dc811624, 
          this.body = _ebf358b75a0b, this.method = _fae22887acec, this.destination = _bbaa3660c6e1, 
          this.client = _0486c8e5ad30;
        }
        response;
      }
    },
    7510: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.r(_d975dc811624), _ebf358b75a0b.d(_d975dc811624, {
        FakeServiceWorker: () => _fae22887acec.H,
        StudyJetHandleResponseEvent: () => _bbaa3660c6e1.dT,
        StudyJetRequestEvent: () => _bbaa3660c6e1.V3,
        StudyJetServiceWorker: () => d,
        errorTemplate: () => _fb4ea2a6f85c.B,
        handleFetch: () => _bbaa3660c6e1.Pf,
        renderError: () => _fb4ea2a6f85c.v
      });
      var _fae22887acec = _ebf358b75a0b(1403), _bbaa3660c6e1 = _ebf358b75a0b(5790), _0486c8e5ad30 = _ebf358b75a0b(4110), _c5b4b25078d6 = _ebf358b75a0b(1561), _4d778195d27f = _ebf358b75a0b(3831), _9fc5b21180bb = _ebf358b75a0b(6570), _6c0b4fee9c25 = _ebf358b75a0b(37), _fb4ea2a6f85c = _ebf358b75a0b(5956);
      class d extends EventTarget {
        client;
        config;
        syncPool={};
        synctoken=0;
        cookieStore=new _4d778195d27f.k;
        serviceWorkers=[];
        constructor() {
          super(), this.client = new _0486c8e5ad30.Ay, (async () => {
            let _8eeac2780070 = await (0, _9fc5b21180bb.P2)("@d7a6431b92e", 1), _d975dc811624 = await _8eeac2780070.get("cookies", "cookies");
            _d975dc811624 && this.cookieStore.load(_d975dc811624);
          })(), addEventListener("message", async ({data: _8eeac2780070}) => {
            if ("studyjet$type" in _8eeac2780070) {
              if ("studyjet$token" in _8eeac2780070) {
                let _d975dc811624 = this.syncPool[_8eeac2780070.studyjet$token];
                delete this.syncPool[_8eeac2780070.studyjet$token], _d975dc811624(_8eeac2780070);
                return;
              }
              if ("registerServiceWorker" === _8eeac2780070.studyjet$type) return void this.serviceWorkers.push(new _fae22887acec.H(_8eeac2780070.port, _8eeac2780070.origin));
              if ("cookie" === _8eeac2780070.studyjet$type) {
                this.cookieStore.setCookies([ _8eeac2780070.cookie ], new URL(_8eeac2780070.url));
                let _d975dc811624 = await (0, _9fc5b21180bb.P2)("@d7a6431b92e", 1);
                await _d975dc811624.put("cookies", JSON.parse(this.cookieStore.dump()), "cookies");
              }
              "loadConfig" === _8eeac2780070.studyjet$type && (this.config = _8eeac2780070.config);
            }
          });
        }
        async dispatch(_8eeac2780070, _d975dc811624) {
          let _ebf358b75a0b, _fae22887acec = this.synctoken++, _bbaa3660c6e1 = new Promise(_8eeac2780070 => _ebf358b75a0b = _8eeac2780070);
          return this.syncPool[_fae22887acec] = _ebf358b75a0b, _d975dc811624.studyjet$token = _fae22887acec, 
          _8eeac2780070.postMessage(_d975dc811624), await _bbaa3660c6e1;
        }
        async loadConfig() {
          if (this.config) return;
          let _8eeac2780070 = await (0, _9fc5b21180bb.P2)("@d7a6431b92e", 1);
          this.config = await _8eeac2780070.get("config", "config"), this.config && ((0, _6c0b4fee9c25.Nk)(this.config), 
          await (0, _c5b4b25078d6.n$)());
        }
        route({request: _8eeac2780070}) {
          return !!_8eeac2780070.url.startsWith(location.origin + this.config.prefix) || !!_8eeac2780070.url.startsWith(location.origin + this.config.files.wasm);
        }
        async fetch({request: _8eeac2780070, clientId: _d975dc811624}) {
          this.config || await this.loadConfig();
          let _ebf358b75a0b = await self.clients.get(_d975dc811624);
          return _bbaa3660c6e1.Pf.call(this, _8eeac2780070, _ebf358b75a0b);
        }
      }
    },
    4110: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.d(_d975dc811624, {
        Ay: () => S,
        DD: () => w
      });
      let _fae22887acec = globalThis.fetch, _bbaa3660c6e1 = globalThis.SharedWorker, _0486c8e5ad30 = globalThis.localStorage, _c5b4b25078d6 = globalThis.navigator.serviceWorker, _4d778195d27f = MessagePort.prototype.postMessage, _9fc5b21180bb = {
        prototype: {
          send: WebSocket.prototype.send
        },
        CLOSED: WebSocket.CLOSED,
        CLOSING: WebSocket.CLOSING,
        CONNECTING: WebSocket.CONNECTING,
        OPEN: WebSocket.OPEN
      };
      async function c() {
        let _8eeac2780070 = Promise.race([ Promise.any((await self.clients.matchAll({
          type: "window",
          includeUncontrolled: !0
        })).map(async _8eeac2780070 => {
          let _d975dc811624, _ebf358b75a0b = await (_d975dc811624 = new MessageChannel, new Promise(_ebf358b75a0b => {
            _8eeac2780070.postMessage({
              type: "getPort",
              port: _d975dc811624.port2
            }, [ _d975dc811624.port2 ]), _d975dc811624.port1.onmessage = _8eeac2780070 => {
              _ebf358b75a0b(_8eeac2780070.data);
            };
          }));
          return await u(_ebf358b75a0b), _ebf358b75a0b;
        })), new Promise((_8eeac2780070, _d975dc811624) => setTimeout(_d975dc811624, 1e3, TypeError("timeout"))) ]);
        try {
          return await _8eeac2780070;
        } catch (_8eeac2780070) {
          if (_8eeac2780070 instanceof AggregateError) throw console.error("bare-mux: failed to get a bare-mux SharedWorker MessagePort as all clients returned an invalid MessagePort."), 
          Error("All clients returned an invalid MessagePort.", {
            cause: _8eeac2780070
          });
          return console.warn("bare-mux: failed to get a bare-mux SharedWorker MessagePort within 1s, retrying"), 
          await c();
        }
      }
      function u(_8eeac2780070) {
        let _d975dc811624 = new MessageChannel, _ebf358b75a0b = new Promise((_8eeac2780070, _ebf358b75a0b) => {
          _d975dc811624.port1.onmessage = _d975dc811624 => {
            "pong" === _d975dc811624.data.type && _8eeac2780070();
          }, setTimeout(_ebf358b75a0b, 1500);
        });
        return _4d778195d27f.call(_8eeac2780070, {
          message: {
            type: "ping"
          },
          port: _d975dc811624.port2
        }, [ _d975dc811624.port2 ]), _ebf358b75a0b;
      }
      function d(_8eeac2780070, _d975dc811624) {
        let _ebf358b75a0b = new _bbaa3660c6e1(_8eeac2780070, "ridgewood-stem-worker");
        return _d975dc811624 && _c5b4b25078d6.addEventListener("message", _d975dc811624 => {
          if ("getPort" === _d975dc811624.data.type && _d975dc811624.data.port) {
            console.debug("bare-mux: recieved request for port from sw");
            let _ebf358b75a0b = new _bbaa3660c6e1(_8eeac2780070, "ridgewood-stem-worker");
            _4d778195d27f.call(_d975dc811624.data.port, _ebf358b75a0b.port, [ _ebf358b75a0b.port ]);
          }
        }), _ebf358b75a0b.port;
      }
      let _6c0b4fee9c25 = null;
      class p {
        channel;
        port;
        workerPath;
        constructor(_8eeac2780070) {
          this.channel = new BroadcastChannel("bare-mux"), _8eeac2780070 instanceof MessagePort || _8eeac2780070 instanceof Promise ? this.port = _8eeac2780070 : this.createChannel(_8eeac2780070, !0);
        }
        createChannel(_8eeac2780070, _d975dc811624) {
          if (self.clients) this.port = c(), this.channel.onmessage = _8eeac2780070 => {
            "refreshPort" === _8eeac2780070.data.type && (this.port = c());
          }; else if (_8eeac2780070 && SharedWorker) {
            if (!_8eeac2780070.startsWith("/") && !_8eeac2780070.includes(":")) throw Error("Invalid URL. Must be absolute or start at the root.");
            this.port = d(_8eeac2780070, _d975dc811624), console.debug("bare-mux: setting localStorage bare-mux-path to", _8eeac2780070), 
            _0486c8e5ad30["bare-mux-path"] = _8eeac2780070;
          } else {
            if (!SharedWorker) throw Error("Unable to get a channel to the SharedWorker.");
            {
              let _8eeac2780070 = _0486c8e5ad30["bare-mux-path"];
              if (console.debug("bare-mux: got localStorage bare-mux-path:", _8eeac2780070), !_8eeac2780070) throw Error("Unable to get bare-mux workerPath from localStorage.");
              this.port = d(_8eeac2780070, _d975dc811624);
            }
          }
        }
        async sendMessage(_8eeac2780070, _d975dc811624) {
          this.port instanceof Promise && (this.port = await this.port);
          try {
            await u(this.port);
          } catch {
            return console.warn("bare-mux: Failed to get a ping response from the worker within 1.5s. Assuming port is dead."), 
            this.createChannel(), await this.sendMessage(_8eeac2780070, _d975dc811624);
          }
          let _ebf358b75a0b = new MessageChannel, _fae22887acec = [ _ebf358b75a0b.port2, ..._d975dc811624 || [] ], _bbaa3660c6e1 = new Promise((_8eeac2780070, _d975dc811624) => {
            _ebf358b75a0b.port1.onmessage = _ebf358b75a0b => {
              let _fae22887acec = _ebf358b75a0b.data;
              "error" === _fae22887acec.type ? _d975dc811624(_fae22887acec.error) : _8eeac2780070(_fae22887acec);
            };
          });
          return _4d778195d27f.call(this.port, {
            message: _8eeac2780070,
            port: _ebf358b75a0b.port2
          }, _fae22887acec), await _bbaa3660c6e1;
        }
      }
      class f extends EventTarget {
        protocols;
        url;
        readyState=_9fc5b21180bb.CONNECTING;
        channel;
        constructor(_8eeac2780070, _d975dc811624 = [], _ebf358b75a0b, _fae22887acec) {
          super(), this.protocols = _d975dc811624, this.url = _8eeac2780070.toString(), this.protocols = _d975dc811624;
          const i = _8eeac2780070 => {
            this.protocols = _8eeac2780070, this.readyState = _9fc5b21180bb.OPEN;
            let _d975dc811624 = new Event("open");
            this.dispatchEvent(_d975dc811624);
          }, a = async _8eeac2780070 => {
            let _d975dc811624 = new MessageEvent("message", {
              data: _8eeac2780070
            });
            this.dispatchEvent(_d975dc811624);
          }, s = (_8eeac2780070, _d975dc811624) => {
            this.readyState = _9fc5b21180bb.CLOSED;
            let _ebf358b75a0b = new CloseEvent("close", {
              code: _8eeac2780070,
              reason: _d975dc811624
            });
            this.dispatchEvent(_ebf358b75a0b);
          }, o = () => {
            this.readyState = _9fc5b21180bb.CLOSED;
            let _8eeac2780070 = new Event("error");
            this.dispatchEvent(_8eeac2780070);
          };
          this.channel = new MessageChannel, this.channel.port1.onmessage = _8eeac2780070 => {
            "open" === _8eeac2780070.data.type ? i(_8eeac2780070.data.args[0]) : "message" === _8eeac2780070.data.type ? a(_8eeac2780070.data.args[0]) : "close" === _8eeac2780070.data.type ? s(_8eeac2780070.data.args[0], _8eeac2780070.data.args[1]) : "error" === _8eeac2780070.data.type && o();
          }, _ebf358b75a0b.sendMessage({
            type: "websocket",
            websocket: {
              url: _8eeac2780070.toString(),
              protocols: _d975dc811624,
              requestHeaders: _fae22887acec,
              channel: this.channel.port2
            }
          }, [ this.channel.port2 ]);
        }
        send(..._8eeac2780070) {
          if (this.readyState === _9fc5b21180bb.CONNECTING) throw new DOMException("Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.");
          let _d975dc811624 = _8eeac2780070[0];
          _d975dc811624.buffer && (_d975dc811624 = _d975dc811624.buffer.slice(_d975dc811624.byteOffset, _d975dc811624.byteOffset + _d975dc811624.byteLength)), 
          _4d778195d27f.call(this.channel.port1, {
            type: "data",
            data: _d975dc811624
          }, _d975dc811624 instanceof ArrayBuffer ? [ _d975dc811624 ] : []);
        }
        close(_8eeac2780070, _d975dc811624) {
          _4d778195d27f.call(this.channel.port1, {
            type: "close",
            closeCode: _8eeac2780070,
            closeReason: _d975dc811624
          });
        }
      }
      function g(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
        console.error(`error while processing '${_ebf358b75a0b}': `, _d975dc811624), _8eeac2780070.postMessage({
          type: "error",
          error: _d975dc811624
        });
      }
      let _fb4ea2a6f85c = [ "ws:", "wss:" ], _fe5e93e0a07e = [ 101, 204, 205, 304 ], _11590423c4ed = [ 301, 302, 303, 307, 308 ];
      class w {
        worker;
        constructor(_8eeac2780070) {
          this.worker = new p(_8eeac2780070);
        }
        async getTransport() {
          return (await this.worker.sendMessage({
            type: "get"
          })).name;
        }
        async setTransport(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
          await this.setManualTransport(`\n\t\t\tconst { default: BareTransport } = await import("${_8eeac2780070}");\n\t\t\treturn [BareTransport, "${_8eeac2780070}"];\n\t\t`, _d975dc811624, _ebf358b75a0b);
        }
        async setManualTransport(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
          if ("bare-mux-remote" === _8eeac2780070) throw Error("Use setRemoteTransport.");
          await this.worker.sendMessage({
            type: "set",
            client: {
              function: _8eeac2780070,
              args: _d975dc811624
            }
          }, _ebf358b75a0b);
        }
        async setRemoteTransport(_8eeac2780070, _d975dc811624) {
          let _ebf358b75a0b = new MessageChannel;
          _ebf358b75a0b.port1.onmessage = async _d975dc811624 => {
            let _ebf358b75a0b = _d975dc811624.data.port, _fae22887acec = _d975dc811624.data.message;
            if ("fetch" === _fae22887acec.type) try {
              _8eeac2780070.ready || await _8eeac2780070.init(), await async function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
                let _fae22887acec = await _ebf358b75a0b.request(new URL(_8eeac2780070.fetch.remote), _8eeac2780070.fetch.method, _8eeac2780070.fetch.body, _8eeac2780070.fetch.headers, null);
                if (!function() {
                  if (null === _6c0b4fee9c25) {
                    let _8eeac2780070, _d975dc811624 = new MessageChannel, _ebf358b75a0b = new ReadableStream;
                    try {
                      _4d778195d27f.call(_d975dc811624.port1, _ebf358b75a0b, [ _ebf358b75a0b ]), _8eeac2780070 = !0;
                    } catch (_d975dc811624) {
                      _8eeac2780070 = !1;
                    }
                    return _6c0b4fee9c25 = _8eeac2780070, _8eeac2780070;
                  }
                  return _6c0b4fee9c25;
                }() && _fae22887acec.body instanceof ReadableStream) {
                  let _8eeac2780070 = new Response(_fae22887acec.body);
                  _fae22887acec.body = await _8eeac2780070.arrayBuffer();
                }
                _fae22887acec.body instanceof ReadableStream || _fae22887acec.body instanceof ArrayBuffer ? _4d778195d27f.call(_d975dc811624, {
                  type: "fetch",
                  fetch: _fae22887acec
                }, [ _fae22887acec.body ]) : _4d778195d27f.call(_d975dc811624, {
                  type: "fetch",
                  fetch: _fae22887acec
                });
              }(_fae22887acec, _ebf358b75a0b, _8eeac2780070);
            } catch (_8eeac2780070) {
              g(_ebf358b75a0b, _8eeac2780070, "fetch");
            } else if ("websocket" === _fae22887acec.type) try {
              _8eeac2780070.ready || await _8eeac2780070.init(), await async function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
                let [_fae22887acec, _bbaa3660c6e1] = _ebf358b75a0b.connect(new URL(_8eeac2780070.websocket.url), _8eeac2780070.websocket.protocols, _8eeac2780070.websocket.requestHeaders, _d975dc811624 => {
                  _4d778195d27f.call(_8eeac2780070.websocket.channel, {
                    type: "open",
                    args: [ _d975dc811624 ]
                  });
                }, _d975dc811624 => {
                  _d975dc811624 instanceof ArrayBuffer ? _4d778195d27f.call(_8eeac2780070.websocket.channel, {
                    type: "message",
                    args: [ _d975dc811624 ]
                  }, [ _d975dc811624 ]) : _4d778195d27f.call(_8eeac2780070.websocket.channel, {
                    type: "message",
                    args: [ _d975dc811624 ]
                  });
                }, (_d975dc811624, _ebf358b75a0b) => {
                  _4d778195d27f.call(_8eeac2780070.websocket.channel, {
                    type: "close",
                    args: [ _d975dc811624, _ebf358b75a0b ]
                  });
                }, _d975dc811624 => {
                  _4d778195d27f.call(_8eeac2780070.websocket.channel, {
                    type: "error",
                    args: [ _d975dc811624 ]
                  });
                });
                _8eeac2780070.websocket.channel.onmessage = _8eeac2780070 => {
                  "data" === _8eeac2780070.data.type ? _fae22887acec(_8eeac2780070.data.data) : "close" === _8eeac2780070.data.type && _bbaa3660c6e1(_8eeac2780070.data.closeCode, _8eeac2780070.data.closeReason);
                }, _4d778195d27f.call(_d975dc811624, {
                  type: "websocket"
                });
              }(_fae22887acec, _ebf358b75a0b, _8eeac2780070);
            } catch (_8eeac2780070) {
              g(_ebf358b75a0b, _8eeac2780070, "websocket");
            }
          }, await this.worker.sendMessage({
            type: "set",
            client: {
              function: "bare-mux-remote",
              args: [ _ebf358b75a0b.port2, _d975dc811624 ]
            }
          }, [ _ebf358b75a0b.port2 ]);
        }
        getInnerPort() {
          return this.worker.port;
        }
      }
      class S {
        worker;
        constructor(_8eeac2780070) {
          this.worker = new p(_8eeac2780070);
        }
        createWebSocket(_8eeac2780070, _d975dc811624 = [], _ebf358b75a0b, _fae22887acec) {
          try {
            _8eeac2780070 = new URL(_8eeac2780070);
          } catch (_d975dc811624) {
            throw new DOMException(`Faiiled to construct 'WebSocket': The URL '${_8eeac2780070}' is invalid.`);
          }
          if (!_fb4ea2a6f85c.includes(_8eeac2780070.protocol)) throw new DOMException(`Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '${_8eeac2780070.protocol}' is not allowed.`);
          for (let _8eeac2780070 of (Array.isArray(_d975dc811624) || (_d975dc811624 = [ _d975dc811624 ]), 
          _d975dc811624 = _d975dc811624.map(String))) if (!function(_8eeac2780070) {
            for (let _d975dc811624 = 0; _d975dc811624 < _8eeac2780070.length; _d975dc811624++) {
              let _ebf358b75a0b = _8eeac2780070[_d975dc811624];
              if (!"!#$%&'*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz|~".includes(_ebf358b75a0b)) return !1;
            }
            return !0;
          }(_8eeac2780070)) throw new DOMException(`Failed to construct 'WebSocket': The subprotocol '${_8eeac2780070}' is invalid.`);
          return _fae22887acec = _fae22887acec || {}, new f(_8eeac2780070, _d975dc811624, this.worker, _fae22887acec);
        }
        async fetch(_8eeac2780070, _d975dc811624) {
          let _ebf358b75a0b = new Request(_8eeac2780070, _d975dc811624), _bbaa3660c6e1 = _d975dc811624?.headers || _ebf358b75a0b.headers, _0486c8e5ad30 = _bbaa3660c6e1 instanceof Headers ? Object.fromEntries(_bbaa3660c6e1) : _bbaa3660c6e1, _c5b4b25078d6 = _ebf358b75a0b.body, _4d778195d27f = new URL(_ebf358b75a0b.url);
          if (_4d778195d27f.protocol.startsWith("blob:")) {
            let _8eeac2780070 = await _fae22887acec(_4d778195d27f), _d975dc811624 = new Response(_8eeac2780070.body, _8eeac2780070);
            return _d975dc811624.rawHeaders = Object.fromEntries(_8eeac2780070.headers), _d975dc811624.rawResponse = {
              body: _8eeac2780070.body,
              headers: Object.fromEntries(_8eeac2780070.headers),
              status: _8eeac2780070.status,
              statusText: _8eeac2780070.statusText
            }, _d975dc811624.finalURL = _4d778195d27f.toString(), _d975dc811624;
          }
          for (let _8eeac2780070 = 0; ;_8eeac2780070++) {
            let _fae22887acec = (await this.worker.sendMessage({
              type: "fetch",
              fetch: {
                remote: _4d778195d27f.toString(),
                method: _ebf358b75a0b.method,
                headers: _0486c8e5ad30,
                body: _c5b4b25078d6 || void 0
              }
            }, _c5b4b25078d6 ? [ _c5b4b25078d6 ] : [])).fetch, _bbaa3660c6e1 = new Response(_fe5e93e0a07e.includes(_fae22887acec.status) ? void 0 : _fae22887acec.body, {
              headers: new Headers(_fae22887acec.headers),
              status: _fae22887acec.status,
              statusText: _fae22887acec.statusText
            });
            _bbaa3660c6e1.rawHeaders = _fae22887acec.headers, _bbaa3660c6e1.rawResponse = _fae22887acec, 
            _bbaa3660c6e1.finalURL = _4d778195d27f.toString();
            let _9fc5b21180bb = _d975dc811624?.redirect || _ebf358b75a0b.redirect;
            if (!_11590423c4ed.includes(_bbaa3660c6e1.status)) return _bbaa3660c6e1;
            switch (_9fc5b21180bb) {
             case "follow":
              {
                let _d975dc811624 = _bbaa3660c6e1.headers.get("location");
                if (20 > _8eeac2780070 && null !== _d975dc811624) {
                  _4d778195d27f = new URL(_d975dc811624, _4d778195d27f);
                  continue;
                }
                throw TypeError("Failed to fetch");
              }

             case "error":
              throw TypeError("Failed to fetch");

             case "manual":
              return _bbaa3660c6e1;
            }
          }
        }
      }
      console.debug("bare-mux: running v2.1.9 (build dc9dc6e)");
    },
    8832: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.d(_d975dc811624, {
        H: () => _fae22887acec,
        L: () => _bbaa3660c6e1
      });
      let _fae22887acec = new Map([ "altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath" ].map(_8eeac2780070 => [ _8eeac2780070.toLowerCase(), _8eeac2780070 ])), _bbaa3660c6e1 = new Map([ "definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan" ].map(_8eeac2780070 => [ _8eeac2780070.toLowerCase(), _8eeac2780070 ]));
    },
    6498: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.d(_d975dc811624, {
        A: () => _9fc5b21180bb
      });
      var _fae22887acec = _ebf358b75a0b(2743), _bbaa3660c6e1 = _ebf358b75a0b(8466), _0486c8e5ad30 = _ebf358b75a0b(8832);
      let _c5b4b25078d6 = new Set([ "style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript" ]);
      function o(_8eeac2780070) {
        return _8eeac2780070.replace(/"/g, "&quot;");
      }
      let _4d778195d27f = new Set([ "area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr" ]), _9fc5b21180bb = function e(_8eeac2780070, _d975dc811624 = {}) {
        let _ebf358b75a0b = "length" in _8eeac2780070 ? _8eeac2780070 : [ _8eeac2780070 ], _9fc5b21180bb = "";
        for (let _8eeac2780070 = 0; _8eeac2780070 < _ebf358b75a0b.length; _8eeac2780070++) _9fc5b21180bb += function(_8eeac2780070, _d975dc811624) {
          var _ebf358b75a0b, _9fc5b21180bb, _fe5e93e0a07e;
          switch (_8eeac2780070.type) {
           case _fae22887acec.bL:
            return e(_8eeac2780070.children, _d975dc811624);

           case _fae22887acec.fl:
           case _fae22887acec.WL:
            return _ebf358b75a0b = _8eeac2780070, `<${_ebf358b75a0b.data}>`;

           case _fae22887acec.Mw:
            return _9fc5b21180bb = _8eeac2780070, `\x3c!--${_9fc5b21180bb.data}--\x3e`;

           case _fae22887acec.KB:
            return _fe5e93e0a07e = _8eeac2780070, `<![CDATA[${_fe5e93e0a07e.children[0].data}]]>`;

           case _fae22887acec.eF:
           case _fae22887acec.OF:
           case _fae22887acec.vw:
            return function(_8eeac2780070, _d975dc811624) {
              var _ebf358b75a0b;
              "foreign" === _d975dc811624.xmlMode && (_8eeac2780070.name = null != (_ebf358b75a0b = _0486c8e5ad30.H.get(_8eeac2780070.name)) ? _ebf358b75a0b : _8eeac2780070.name, 
              _8eeac2780070.parent && _6c0b4fee9c25.has(_8eeac2780070.parent.name) && (_d975dc811624 = {
                ..._d975dc811624,
                xmlMode: !1
              })), !_d975dc811624.xmlMode && _fb4ea2a6f85c.has(_8eeac2780070.name) && (_d975dc811624 = {
                ..._d975dc811624,
                xmlMode: "foreign"
              });
              let _fae22887acec = `<${_8eeac2780070.name}`, _c5b4b25078d6 = function(_8eeac2780070, _d975dc811624) {
                var _ebf358b75a0b;
                if (!_8eeac2780070) return;
                let _fae22887acec = (null != (_ebf358b75a0b = _d975dc811624.encodeEntities) ? _ebf358b75a0b : _d975dc811624.decodeEntities) === !1 ? o : _d975dc811624.xmlMode || "utf8" !== _d975dc811624.encodeEntities ? _bbaa3660c6e1.WY : _bbaa3660c6e1.Gj;
                return Object.keys(_8eeac2780070).map(_ebf358b75a0b => {
                  var _bbaa3660c6e1, _c5b4b25078d6;
                  let _4d778195d27f = null != (_bbaa3660c6e1 = _8eeac2780070[_ebf358b75a0b]) ? _bbaa3660c6e1 : "";
                  return ("foreign" === _d975dc811624.xmlMode && (_ebf358b75a0b = null != (_c5b4b25078d6 = _0486c8e5ad30.L.get(_ebf358b75a0b)) ? _c5b4b25078d6 : _ebf358b75a0b), 
                  _d975dc811624.emptyAttrs || _d975dc811624.xmlMode || "" !== _4d778195d27f) ? `${_ebf358b75a0b}="${_fae22887acec(_4d778195d27f)}"` : _ebf358b75a0b;
                }).join(" ");
              }(_8eeac2780070.attribs, _d975dc811624);
              return _c5b4b25078d6 && (_fae22887acec += ` ${_c5b4b25078d6}`), 0 === _8eeac2780070.children.length && (_d975dc811624.xmlMode ? !1 !== _d975dc811624.selfClosingTags : _d975dc811624.selfClosingTags && _4d778195d27f.has(_8eeac2780070.name)) ? (_d975dc811624.xmlMode || (_fae22887acec += " "), 
              _fae22887acec += "/>") : (_fae22887acec += ">", _8eeac2780070.children.length > 0 && (_fae22887acec += e(_8eeac2780070.children, _d975dc811624)), 
              (_d975dc811624.xmlMode || !_4d778195d27f.has(_8eeac2780070.name)) && (_fae22887acec += `</${_8eeac2780070.name}>`)), 
              _fae22887acec;
            }(_8eeac2780070, _d975dc811624);

           case _fae22887acec.EY:
            return function(_8eeac2780070, _d975dc811624) {
              var _ebf358b75a0b;
              let _fae22887acec = _8eeac2780070.data || "";
              return (null != (_ebf358b75a0b = _d975dc811624.encodeEntities) ? _ebf358b75a0b : _d975dc811624.decodeEntities) === !1 || !_d975dc811624.xmlMode && _8eeac2780070.parent && _c5b4b25078d6.has(_8eeac2780070.parent.name) || (_fae22887acec = _d975dc811624.xmlMode || "utf8" !== _d975dc811624.encodeEntities ? (0, 
              _bbaa3660c6e1.WY)(_fae22887acec) : (0, _bbaa3660c6e1.X1)(_fae22887acec)), _fae22887acec;
            }(_8eeac2780070, _d975dc811624);
          }
        }(_ebf358b75a0b[_8eeac2780070], _d975dc811624);
        return _9fc5b21180bb;
      }, _6c0b4fee9c25 = new Set([ "mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title" ]), _fb4ea2a6f85c = new Set([ "svg", "math" ]);
    },
    2743: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      var _fae22887acec, _bbaa3660c6e1;
      function a(_8eeac2780070) {
        return _8eeac2780070.type === _fae22887acec.Tag || _8eeac2780070.type === _fae22887acec.Script || _8eeac2780070.type === _fae22887acec.Style;
      }
      _ebf358b75a0b.d(_d975dc811624, {
        EY: () => _c5b4b25078d6,
        KB: () => _11590423c4ed,
        Mw: () => _9fc5b21180bb,
        OF: () => _fb4ea2a6f85c,
        RJ: () => _fae22887acec,
        WL: () => _4d778195d27f,
        bL: () => _0486c8e5ad30,
        dz: () => a,
        eF: () => _6c0b4fee9c25,
        fl: () => _8a98072c4f6f,
        vw: () => _fe5e93e0a07e
      }), (_bbaa3660c6e1 = _fae22887acec || (_fae22887acec = {})).Root = "root", _bbaa3660c6e1.Text = "text", 
      _bbaa3660c6e1.Directive = "directive", _bbaa3660c6e1.Comment = "comment", _bbaa3660c6e1.Script = "script", 
      _bbaa3660c6e1.Style = "style", _bbaa3660c6e1.Tag = "tag", _bbaa3660c6e1.CDATA = "cdata", 
      _bbaa3660c6e1.Doctype = "doctype";
      let _0486c8e5ad30 = _fae22887acec.Root, _c5b4b25078d6 = _fae22887acec.Text, _4d778195d27f = _fae22887acec.Directive, _9fc5b21180bb = _fae22887acec.Comment, _6c0b4fee9c25 = _fae22887acec.Script, _fb4ea2a6f85c = _fae22887acec.Style, _fe5e93e0a07e = _fae22887acec.Tag, _11590423c4ed = _fae22887acec.CDATA, _8a98072c4f6f = _fae22887acec.Doctype;
    },
    8866: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.d(_d975dc811624, {
        DV: () => s,
        Hg: () => _bbaa3660c6e1.Hg,
        Mw: () => _bbaa3660c6e1.Mw
      });
      var _fae22887acec = _ebf358b75a0b(2743), _bbaa3660c6e1 = _ebf358b75a0b(6072);
      let _0486c8e5ad30 = {
        withStartIndices: !1,
        withEndIndices: !1,
        xmlMode: !1
      };
      class s {
        constructor(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
          this.dom = [], this.root = new _bbaa3660c6e1.yo(this.dom), this.done = !1, this.tagStack = [ this.root ], 
          this.lastNode = null, this.parser = null, "function" == typeof _d975dc811624 && (_ebf358b75a0b = _d975dc811624, 
          _d975dc811624 = _0486c8e5ad30), "object" == typeof _8eeac2780070 && (_d975dc811624 = _8eeac2780070, 
          _8eeac2780070 = void 0), this.callback = null != _8eeac2780070 ? _8eeac2780070 : null, 
          this.options = null != _d975dc811624 ? _d975dc811624 : _0486c8e5ad30, this.elementCB = null != _ebf358b75a0b ? _ebf358b75a0b : null;
        }
        onparserinit(_8eeac2780070) {
          this.parser = _8eeac2780070;
        }
        onreset() {
          this.dom = [], this.root = new _bbaa3660c6e1.yo(this.dom), this.done = !1, this.tagStack = [ this.root ], 
          this.lastNode = null, this.parser = null;
        }
        onend() {
          this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
        }
        onerror(_8eeac2780070) {
          this.handleCallback(_8eeac2780070);
        }
        onclosetag() {
          this.lastNode = null;
          let _8eeac2780070 = this.tagStack.pop();
          this.options.withEndIndices && (_8eeac2780070.endIndex = this.parser.endIndex), 
          this.elementCB && this.elementCB(_8eeac2780070);
        }
        onopentag(_8eeac2780070, _d975dc811624) {
          let _ebf358b75a0b = this.options.xmlMode ? _fae22887acec.RJ.Tag : void 0, _0486c8e5ad30 = new _bbaa3660c6e1.Hg(_8eeac2780070, _d975dc811624, void 0, _ebf358b75a0b);
          this.addNode(_0486c8e5ad30), this.tagStack.push(_0486c8e5ad30);
        }
        ontext(_8eeac2780070) {
          let {lastNode: _d975dc811624} = this;
          if (_d975dc811624 && _d975dc811624.type === _fae22887acec.RJ.Text) _d975dc811624.data += _8eeac2780070, 
          this.options.withEndIndices && (_d975dc811624.endIndex = this.parser.endIndex); else {
            let _d975dc811624 = new _bbaa3660c6e1.EY(_8eeac2780070);
            this.addNode(_d975dc811624), this.lastNode = _d975dc811624;
          }
        }
        oncomment(_8eeac2780070) {
          if (this.lastNode && this.lastNode.type === _fae22887acec.RJ.Comment) {
            this.lastNode.data += _8eeac2780070;
            return;
          }
          let _d975dc811624 = new _bbaa3660c6e1.Mw(_8eeac2780070);
          this.addNode(_d975dc811624), this.lastNode = _d975dc811624;
        }
        oncommentend() {
          this.lastNode = null;
        }
        oncdatastart() {
          let _8eeac2780070 = new _bbaa3660c6e1.EY(""), _d975dc811624 = new _bbaa3660c6e1.KB([ _8eeac2780070 ]);
          this.addNode(_d975dc811624), _8eeac2780070.parent = _d975dc811624, this.lastNode = _8eeac2780070;
        }
        oncdataend() {
          this.lastNode = null;
        }
        onprocessinginstruction(_8eeac2780070, _d975dc811624) {
          let _ebf358b75a0b = new _bbaa3660c6e1.Cd(_8eeac2780070, _d975dc811624);
          this.addNode(_ebf358b75a0b);
        }
        handleCallback(_8eeac2780070) {
          if ("function" == typeof this.callback) this.callback(_8eeac2780070, this.dom); else if (_8eeac2780070) throw _8eeac2780070;
        }
        addNode(_8eeac2780070) {
          let _d975dc811624 = this.tagStack[this.tagStack.length - 1], _ebf358b75a0b = _d975dc811624.children[_d975dc811624.children.length - 1];
          this.options.withStartIndices && (_8eeac2780070.startIndex = this.parser.startIndex), 
          this.options.withEndIndices && (_8eeac2780070.endIndex = this.parser.endIndex), 
          _d975dc811624.children.push(_8eeac2780070), _ebf358b75a0b && (_8eeac2780070.prev = _ebf358b75a0b, 
          _ebf358b75a0b.next = _8eeac2780070), _8eeac2780070.parent = _d975dc811624, this.lastNode = null;
        }
      }
    },
    6072: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.d(_d975dc811624, {
        Cd: () => l,
        EY: () => s,
        Hg: () => h,
        KB: () => u,
        Mw: () => o,
        yo: () => d
      });
      var _fae22887acec = _ebf358b75a0b(2743);
      class i {
        constructor() {
          this.parent = null, this.prev = null, this.next = null, this.startIndex = null, 
          this.endIndex = null;
        }
        get parentNode() {
          return this.parent;
        }
        set parentNode(_8eeac2780070) {
          this.parent = _8eeac2780070;
        }
        get previousSibling() {
          return this.prev;
        }
        set previousSibling(_8eeac2780070) {
          this.prev = _8eeac2780070;
        }
        get nextSibling() {
          return this.next;
        }
        set nextSibling(_8eeac2780070) {
          this.next = _8eeac2780070;
        }
        cloneNode(_8eeac2780070 = !1) {
          return p(this, _8eeac2780070);
        }
      }
      class a extends i {
        constructor(_8eeac2780070) {
          super(), this.data = _8eeac2780070;
        }
        get nodeValue() {
          return this.data;
        }
        set nodeValue(_8eeac2780070) {
          this.data = _8eeac2780070;
        }
      }
      class s extends a {
        constructor() {
          super(...arguments), this.type = _fae22887acec.RJ.Text;
        }
        get nodeType() {
          return 3;
        }
      }
      class o extends a {
        constructor() {
          super(...arguments), this.type = _fae22887acec.RJ.Comment;
        }
        get nodeType() {
          return 8;
        }
      }
      class l extends a {
        constructor(_8eeac2780070, _d975dc811624) {
          super(_d975dc811624), this.name = _8eeac2780070, this.type = _fae22887acec.RJ.Directive;
        }
        get nodeType() {
          return 1;
        }
      }
      class c extends i {
        constructor(_8eeac2780070) {
          super(), this.children = _8eeac2780070;
        }
        get firstChild() {
          var _8eeac2780070;
          return null != (_8eeac2780070 = this.children[0]) ? _8eeac2780070 : null;
        }
        get lastChild() {
          return this.children.length > 0 ? this.children[this.children.length - 1] : null;
        }
        get childNodes() {
          return this.children;
        }
        set childNodes(_8eeac2780070) {
          this.children = _8eeac2780070;
        }
      }
      class u extends c {
        constructor() {
          super(...arguments), this.type = _fae22887acec.RJ.CDATA;
        }
        get nodeType() {
          return 4;
        }
      }
      class d extends c {
        constructor() {
          super(...arguments), this.type = _fae22887acec.RJ.Root;
        }
        get nodeType() {
          return 9;
        }
      }
      class h extends c {
        constructor(_8eeac2780070, _d975dc811624, _ebf358b75a0b = [], _bbaa3660c6e1 = ("script" === _8eeac2780070 ? _fae22887acec.RJ.Script : "style" === _8eeac2780070 ? _fae22887acec.RJ.Style : _fae22887acec.RJ.Tag)) {
          super(_ebf358b75a0b), this.name = _8eeac2780070, this.attribs = _d975dc811624, this.type = _bbaa3660c6e1;
        }
        get nodeType() {
          return 1;
        }
        get tagName() {
          return this.name;
        }
        set tagName(_8eeac2780070) {
          this.name = _8eeac2780070;
        }
        get attributes() {
          return Object.keys(this.attribs).map(_8eeac2780070 => {
            var _d975dc811624, _ebf358b75a0b;
            return {
              name: _8eeac2780070,
              value: this.attribs[_8eeac2780070],
              namespace: null == (_d975dc811624 = this["x-attribsNamespace"]) ? void 0 : _d975dc811624[_8eeac2780070],
              prefix: null == (_ebf358b75a0b = this["x-attribsPrefix"]) ? void 0 : _ebf358b75a0b[_8eeac2780070]
            };
          });
        }
      }
      function p(_8eeac2780070, _d975dc811624 = !1) {
        let _ebf358b75a0b;
        if (_8eeac2780070.type === _fae22887acec.RJ.Text) _ebf358b75a0b = new s(_8eeac2780070.data); else if (_8eeac2780070.type === _fae22887acec.RJ.Comment) _ebf358b75a0b = new o(_8eeac2780070.data); else if ((0, 
        _fae22887acec.dz)(_8eeac2780070)) {
          let _fae22887acec = _d975dc811624 ? f(_8eeac2780070.children) : [], _bbaa3660c6e1 = new h(_8eeac2780070.name, {
            ..._8eeac2780070.attribs
          }, _fae22887acec);
          _fae22887acec.forEach(_8eeac2780070 => _8eeac2780070.parent = _bbaa3660c6e1), null != _8eeac2780070.namespace && (_bbaa3660c6e1.namespace = _8eeac2780070.namespace), 
          _8eeac2780070["x-attribsNamespace"] && (_bbaa3660c6e1["x-attribsNamespace"] = {
            ..._8eeac2780070["x-attribsNamespace"]
          }), _8eeac2780070["x-attribsPrefix"] && (_bbaa3660c6e1["x-attribsPrefix"] = {
            ..._8eeac2780070["x-attribsPrefix"]
          }), _ebf358b75a0b = _bbaa3660c6e1;
        } else if (_8eeac2780070.type === _fae22887acec.RJ.CDATA) {
          let _fae22887acec = _d975dc811624 ? f(_8eeac2780070.children) : [], _bbaa3660c6e1 = new u(_fae22887acec);
          _fae22887acec.forEach(_8eeac2780070 => _8eeac2780070.parent = _bbaa3660c6e1), _ebf358b75a0b = _bbaa3660c6e1;
        } else if (_8eeac2780070.type === _fae22887acec.RJ.Root) {
          let _fae22887acec = _d975dc811624 ? f(_8eeac2780070.children) : [], _bbaa3660c6e1 = new d(_fae22887acec);
          _fae22887acec.forEach(_8eeac2780070 => _8eeac2780070.parent = _bbaa3660c6e1), _8eeac2780070["x-mode"] && (_bbaa3660c6e1["x-mode"] = _8eeac2780070["x-mode"]), 
          _ebf358b75a0b = _bbaa3660c6e1;
        } else if (_8eeac2780070.type === _fae22887acec.RJ.Directive) {
          let _d975dc811624 = new l(_8eeac2780070.name, _8eeac2780070.data);
          null != _8eeac2780070["x-name"] && (_d975dc811624["x-name"] = _8eeac2780070["x-name"], 
          _d975dc811624["x-publicId"] = _8eeac2780070["x-publicId"], _d975dc811624["x-systemId"] = _8eeac2780070["x-systemId"]), 
          _ebf358b75a0b = _d975dc811624;
        } else throw Error(`Not implemented yet: ${_8eeac2780070.type}`);
        return _ebf358b75a0b.startIndex = _8eeac2780070.startIndex, _ebf358b75a0b.endIndex = _8eeac2780070.endIndex, 
        null != _8eeac2780070.sourceCodeLocation && (_ebf358b75a0b.sourceCodeLocation = _8eeac2780070.sourceCodeLocation), 
        _ebf358b75a0b;
      }
      function f(_8eeac2780070) {
        let _d975dc811624 = _8eeac2780070.map(_8eeac2780070 => p(_8eeac2780070, !0));
        for (let _8eeac2780070 = 1; _8eeac2780070 < _d975dc811624.length; _8eeac2780070++) _d975dc811624[_8eeac2780070].prev = _d975dc811624[_8eeac2780070 - 1], 
        _d975dc811624[_8eeac2780070 - 1].next = _d975dc811624[_8eeac2780070];
        return _d975dc811624;
      }
    },
    3256: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b(5016), _ebf358b75a0b(1050);
    },
    6812: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      var _fae22887acec, _bbaa3660c6e1;
      _ebf358b75a0b(8866), (_bbaa3660c6e1 = _fae22887acec || (_fae22887acec = {}))[_bbaa3660c6e1.DISCONNECTED = 1] = "DISCONNECTED", 
      _bbaa3660c6e1[_bbaa3660c6e1.PRECEDING = 2] = "PRECEDING", _bbaa3660c6e1[_bbaa3660c6e1.FOLLOWING = 4] = "FOLLOWING", 
      _bbaa3660c6e1[_bbaa3660c6e1.CONTAINS = 8] = "CONTAINS", _bbaa3660c6e1[_bbaa3660c6e1.CONTAINED_BY = 16] = "CONTAINED_BY";
    },
    4993: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b(5016), _ebf358b75a0b(4647), _ebf358b75a0b(9861), _ebf358b75a0b(1050), 
      _ebf358b75a0b(6812), _ebf358b75a0b(3256), _ebf358b75a0b(8866);
    },
    1050: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b(8866), _ebf358b75a0b(9861);
    },
    9861: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b(8866);
    },
    5016: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b(8866), _ebf358b75a0b(6498), _ebf358b75a0b(2743);
    },
    4647: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b(8866);
    },
    2146: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      var _fae22887acec;
      _ebf358b75a0b.d(_d975dc811624, {
        MK: () => _0486c8e5ad30,
        y6: () => s
      });
      let _bbaa3660c6e1 = new Map([ [ 0, 65533 ], [ 128, 8364 ], [ 130, 8218 ], [ 131, 402 ], [ 132, 8222 ], [ 133, 8230 ], [ 134, 8224 ], [ 135, 8225 ], [ 136, 710 ], [ 137, 8240 ], [ 138, 352 ], [ 139, 8249 ], [ 140, 338 ], [ 142, 381 ], [ 145, 8216 ], [ 146, 8217 ], [ 147, 8220 ], [ 148, 8221 ], [ 149, 8226 ], [ 150, 8211 ], [ 151, 8212 ], [ 152, 732 ], [ 153, 8482 ], [ 154, 353 ], [ 155, 8250 ], [ 156, 339 ], [ 158, 382 ], [ 159, 376 ] ]), _0486c8e5ad30 = null != (_fae22887acec = String.fromCodePoint) ? _fae22887acec : function(_8eeac2780070) {
        let _d975dc811624 = "";
        return _8eeac2780070 > 65535 && (_8eeac2780070 -= 65536, _d975dc811624 += String.fromCharCode(_8eeac2780070 >>> 10 & 1023 | 55296), 
        _8eeac2780070 = 56320 | 1023 & _8eeac2780070), _d975dc811624 += String.fromCharCode(_8eeac2780070);
      };
      function s(_8eeac2780070) {
        var _d975dc811624;
        return _8eeac2780070 >= 55296 && _8eeac2780070 <= 57343 || _8eeac2780070 > 1114111 ? 65533 : null != (_d975dc811624 = _bbaa3660c6e1.get(_8eeac2780070)) ? _d975dc811624 : _8eeac2780070;
      }
    },
    2990: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.d(_d975dc811624, {
        FJ: () => _fb4ea2a6f85c,
        MK: () => _8a98072c4f6f.MK,
        Wf: () => g,
        qN: () => _fe5e93e0a07e.q,
        sr: () => _11590423c4ed.s
      });
      var _fae22887acec, _bbaa3660c6e1, _0486c8e5ad30, _c5b4b25078d6, _4d778195d27f, _9fc5b21180bb, _6c0b4fee9c25, _fb4ea2a6f85c, _fe5e93e0a07e = _ebf358b75a0b(7259), _11590423c4ed = _ebf358b75a0b(5949), _8a98072c4f6f = _ebf358b75a0b(2146);
      function f(_8eeac2780070) {
        return _8eeac2780070 >= _4d778195d27f.ZERO && _8eeac2780070 <= _4d778195d27f.NINE;
      }
      (_fae22887acec = _4d778195d27f || (_4d778195d27f = {}))[_fae22887acec.NUM = 35] = "NUM", 
      _fae22887acec[_fae22887acec.SEMI = 59] = "SEMI", _fae22887acec[_fae22887acec.EQUALS = 61] = "EQUALS", 
      _fae22887acec[_fae22887acec.ZERO = 48] = "ZERO", _fae22887acec[_fae22887acec.NINE = 57] = "NINE", 
      _fae22887acec[_fae22887acec.LOWER_A = 97] = "LOWER_A", _fae22887acec[_fae22887acec.LOWER_F = 102] = "LOWER_F", 
      _fae22887acec[_fae22887acec.LOWER_X = 120] = "LOWER_X", _fae22887acec[_fae22887acec.LOWER_Z = 122] = "LOWER_Z", 
      _fae22887acec[_fae22887acec.UPPER_A = 65] = "UPPER_A", _fae22887acec[_fae22887acec.UPPER_F = 70] = "UPPER_F", 
      _fae22887acec[_fae22887acec.UPPER_Z = 90] = "UPPER_Z", (_bbaa3660c6e1 = _9fc5b21180bb || (_9fc5b21180bb = {}))[_bbaa3660c6e1.VALUE_LENGTH = 49152] = "VALUE_LENGTH", 
      _bbaa3660c6e1[_bbaa3660c6e1.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", _bbaa3660c6e1[_bbaa3660c6e1.JUMP_TABLE = 127] = "JUMP_TABLE", 
      (_0486c8e5ad30 = _6c0b4fee9c25 || (_6c0b4fee9c25 = {}))[_0486c8e5ad30.EntityStart = 0] = "EntityStart", 
      _0486c8e5ad30[_0486c8e5ad30.NumericStart = 1] = "NumericStart", _0486c8e5ad30[_0486c8e5ad30.NumericDecimal = 2] = "NumericDecimal", 
      _0486c8e5ad30[_0486c8e5ad30.NumericHex = 3] = "NumericHex", _0486c8e5ad30[_0486c8e5ad30.NamedEntity = 4] = "NamedEntity", 
      (_c5b4b25078d6 = _fb4ea2a6f85c || (_fb4ea2a6f85c = {}))[_c5b4b25078d6.Legacy = 0] = "Legacy", 
      _c5b4b25078d6[_c5b4b25078d6.Strict = 1] = "Strict", _c5b4b25078d6[_c5b4b25078d6.Attribute = 2] = "Attribute";
      class g {
        constructor(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
          this.decodeTree = _8eeac2780070, this.emitCodePoint = _d975dc811624, this.errors = _ebf358b75a0b, 
          this.state = _6c0b4fee9c25.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, 
          this.excess = 1, this.decodeMode = _fb4ea2a6f85c.Strict;
        }
        startEntity(_8eeac2780070) {
          this.decodeMode = _8eeac2780070, this.state = _6c0b4fee9c25.EntityStart, this.result = 0, 
          this.treeIndex = 0, this.excess = 1, this.consumed = 1;
        }
        write(_8eeac2780070, _d975dc811624) {
          switch (this.state) {
           case _6c0b4fee9c25.EntityStart:
            if (_8eeac2780070.charCodeAt(_d975dc811624) === _4d778195d27f.NUM) return this.state = _6c0b4fee9c25.NumericStart, 
            this.consumed += 1, this.stateNumericStart(_8eeac2780070, _d975dc811624 + 1);
            return this.state = _6c0b4fee9c25.NamedEntity, this.stateNamedEntity(_8eeac2780070, _d975dc811624);

           case _6c0b4fee9c25.NumericStart:
            return this.stateNumericStart(_8eeac2780070, _d975dc811624);

           case _6c0b4fee9c25.NumericDecimal:
            return this.stateNumericDecimal(_8eeac2780070, _d975dc811624);

           case _6c0b4fee9c25.NumericHex:
            return this.stateNumericHex(_8eeac2780070, _d975dc811624);

           case _6c0b4fee9c25.NamedEntity:
            return this.stateNamedEntity(_8eeac2780070, _d975dc811624);
          }
        }
        stateNumericStart(_8eeac2780070, _d975dc811624) {
          return _d975dc811624 >= _8eeac2780070.length ? -1 : (32 | _8eeac2780070.charCodeAt(_d975dc811624)) === _4d778195d27f.LOWER_X ? (this.state = _6c0b4fee9c25.NumericHex, 
          this.consumed += 1, this.stateNumericHex(_8eeac2780070, _d975dc811624 + 1)) : (this.state = _6c0b4fee9c25.NumericDecimal, 
          this.stateNumericDecimal(_8eeac2780070, _d975dc811624));
        }
        addToNumericResult(_8eeac2780070, _d975dc811624, _ebf358b75a0b, _fae22887acec) {
          if (_d975dc811624 !== _ebf358b75a0b) {
            let _bbaa3660c6e1 = _ebf358b75a0b - _d975dc811624;
            this.result = this.result * Math.pow(_fae22887acec, _bbaa3660c6e1) + Number.parseInt(_8eeac2780070.substr(_d975dc811624, _bbaa3660c6e1), _fae22887acec), 
            this.consumed += _bbaa3660c6e1;
          }
        }
        stateNumericHex(_8eeac2780070, _d975dc811624) {
          let _ebf358b75a0b = _d975dc811624;
          for (;_d975dc811624 < _8eeac2780070.length; ) {
            var _fae22887acec;
            let _bbaa3660c6e1 = _8eeac2780070.charCodeAt(_d975dc811624);
            if (!f(_bbaa3660c6e1) && (!((_fae22887acec = _bbaa3660c6e1) >= _4d778195d27f.UPPER_A) || !(_fae22887acec <= _4d778195d27f.UPPER_F)) && (!(_fae22887acec >= _4d778195d27f.LOWER_A) || !(_fae22887acec <= _4d778195d27f.LOWER_F))) return this.addToNumericResult(_8eeac2780070, _ebf358b75a0b, _d975dc811624, 16), 
            this.emitNumericEntity(_bbaa3660c6e1, 3);
            _d975dc811624 += 1;
          }
          return this.addToNumericResult(_8eeac2780070, _ebf358b75a0b, _d975dc811624, 16), 
          -1;
        }
        stateNumericDecimal(_8eeac2780070, _d975dc811624) {
          let _ebf358b75a0b = _d975dc811624;
          for (;_d975dc811624 < _8eeac2780070.length; ) {
            let _fae22887acec = _8eeac2780070.charCodeAt(_d975dc811624);
            if (!f(_fae22887acec)) return this.addToNumericResult(_8eeac2780070, _ebf358b75a0b, _d975dc811624, 10), 
            this.emitNumericEntity(_fae22887acec, 2);
            _d975dc811624 += 1;
          }
          return this.addToNumericResult(_8eeac2780070, _ebf358b75a0b, _d975dc811624, 10), 
          -1;
        }
        emitNumericEntity(_8eeac2780070, _d975dc811624) {
          var _ebf358b75a0b;
          if (this.consumed <= _d975dc811624) return null == (_ebf358b75a0b = this.errors) || _ebf358b75a0b.absenceOfDigitsInNumericCharacterReference(this.consumed), 
          0;
          if (_8eeac2780070 === _4d778195d27f.SEMI) this.consumed += 1; else if (this.decodeMode === _fb4ea2a6f85c.Strict) return 0;
          return this.emitCodePoint((0, _8a98072c4f6f.y6)(this.result), this.consumed), this.errors && (_8eeac2780070 !== _4d778195d27f.SEMI && this.errors.missingSemicolonAfterCharacterReference(), 
          this.errors.validateNumericCharacterReference(this.result)), this.consumed;
        }
        stateNamedEntity(_8eeac2780070, _d975dc811624) {
          let {decodeTree: _ebf358b75a0b} = this, _fae22887acec = _ebf358b75a0b[this.treeIndex], _bbaa3660c6e1 = (_fae22887acec & _9fc5b21180bb.VALUE_LENGTH) >> 14;
          for (;_d975dc811624 < _8eeac2780070.length; _d975dc811624++, this.excess++) {
            let _0486c8e5ad30 = _8eeac2780070.charCodeAt(_d975dc811624);
            if (this.treeIndex = function(_8eeac2780070, _d975dc811624, _ebf358b75a0b, _fae22887acec) {
              let _bbaa3660c6e1 = (_d975dc811624 & _9fc5b21180bb.BRANCH_LENGTH) >> 7, _0486c8e5ad30 = _d975dc811624 & _9fc5b21180bb.JUMP_TABLE;
              if (0 === _bbaa3660c6e1) return 0 !== _0486c8e5ad30 && _fae22887acec === _0486c8e5ad30 ? _ebf358b75a0b : -1;
              if (_0486c8e5ad30) {
                let _d975dc811624 = _fae22887acec - _0486c8e5ad30;
                return _d975dc811624 < 0 || _d975dc811624 >= _bbaa3660c6e1 ? -1 : _8eeac2780070[_ebf358b75a0b + _d975dc811624] - 1;
              }
              let _c5b4b25078d6 = _ebf358b75a0b, _4d778195d27f = _c5b4b25078d6 + _bbaa3660c6e1 - 1;
              for (;_c5b4b25078d6 <= _4d778195d27f; ) {
                let _d975dc811624 = _c5b4b25078d6 + _4d778195d27f >>> 1, _ebf358b75a0b = _8eeac2780070[_d975dc811624];
                if (_ebf358b75a0b < _fae22887acec) _c5b4b25078d6 = _d975dc811624 + 1; else {
                  if (!(_ebf358b75a0b > _fae22887acec)) return _8eeac2780070[_d975dc811624 + _bbaa3660c6e1];
                  _4d778195d27f = _d975dc811624 - 1;
                }
              }
              return -1;
            }(_ebf358b75a0b, _fae22887acec, this.treeIndex + Math.max(1, _bbaa3660c6e1), _0486c8e5ad30), 
            this.treeIndex < 0) return 0 === this.result || this.decodeMode === _fb4ea2a6f85c.Attribute && (0 === _bbaa3660c6e1 || function(_8eeac2780070) {
              var _d975dc811624;
              return _8eeac2780070 === _4d778195d27f.EQUALS || (_d975dc811624 = _8eeac2780070) >= _4d778195d27f.UPPER_A && _d975dc811624 <= _4d778195d27f.UPPER_Z || _d975dc811624 >= _4d778195d27f.LOWER_A && _d975dc811624 <= _4d778195d27f.LOWER_Z || f(_d975dc811624);
            }(_0486c8e5ad30)) ? 0 : this.emitNotTerminatedNamedEntity();
            if (0 != (_bbaa3660c6e1 = ((_fae22887acec = _ebf358b75a0b[this.treeIndex]) & _9fc5b21180bb.VALUE_LENGTH) >> 14)) {
              if (_0486c8e5ad30 === _4d778195d27f.SEMI) return this.emitNamedEntityData(this.treeIndex, _bbaa3660c6e1, this.consumed + this.excess);
              this.decodeMode !== _fb4ea2a6f85c.Strict && (this.result = this.treeIndex, this.consumed += this.excess, 
              this.excess = 0);
            }
          }
          return -1;
        }
        emitNotTerminatedNamedEntity() {
          var _8eeac2780070;
          let {result: _d975dc811624, decodeTree: _ebf358b75a0b} = this, _fae22887acec = (_ebf358b75a0b[_d975dc811624] & _9fc5b21180bb.VALUE_LENGTH) >> 14;
          return this.emitNamedEntityData(_d975dc811624, _fae22887acec, this.consumed), null == (_8eeac2780070 = this.errors) || _8eeac2780070.missingSemicolonAfterCharacterReference(), 
          this.consumed;
        }
        emitNamedEntityData(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
          let {decodeTree: _fae22887acec} = this;
          return this.emitCodePoint(1 === _d975dc811624 ? _fae22887acec[_8eeac2780070] & ~_9fc5b21180bb.VALUE_LENGTH : _fae22887acec[_8eeac2780070 + 1], _ebf358b75a0b), 
          3 === _d975dc811624 && this.emitCodePoint(_fae22887acec[_8eeac2780070 + 2], _ebf358b75a0b), 
          _ebf358b75a0b;
        }
        end() {
          var _8eeac2780070;
          switch (this.state) {
           case _6c0b4fee9c25.NamedEntity:
            return 0 !== this.result && (this.decodeMode !== _fb4ea2a6f85c.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;

           case _6c0b4fee9c25.NumericDecimal:
            return this.emitNumericEntity(0, 2);

           case _6c0b4fee9c25.NumericHex:
            return this.emitNumericEntity(0, 3);

           case _6c0b4fee9c25.NumericStart:
            return null == (_8eeac2780070 = this.errors) || _8eeac2780070.absenceOfDigitsInNumericCharacterReference(this.consumed), 
            0;

           case _6c0b4fee9c25.EntityStart:
            return 0;
          }
        }
      }
    },
    466: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b(9496), _ebf358b75a0b(747);
    },
    747: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.d(_d975dc811624, {
        Gj: () => _c5b4b25078d6,
        WY: () => s,
        X1: () => _4d778195d27f
      });
      let _fae22887acec = /["$&'<>\u0080-\uFFFF]/g, _bbaa3660c6e1 = new Map([ [ 34, "&quot;" ], [ 38, "&amp;" ], [ 39, "&apos;" ], [ 60, "&lt;" ], [ 62, "&gt;" ] ]), _0486c8e5ad30 = null == String.prototype.codePointAt ? (_8eeac2780070, _d975dc811624) => (64512 & _8eeac2780070.charCodeAt(_d975dc811624)) == 55296 ? (_8eeac2780070.charCodeAt(_d975dc811624) - 55296) * 1024 + _8eeac2780070.charCodeAt(_d975dc811624 + 1) - 56320 + 65536 : _8eeac2780070.charCodeAt(_d975dc811624) : (_8eeac2780070, _d975dc811624) => _8eeac2780070.codePointAt(_d975dc811624);
      function s(_8eeac2780070) {
        let _d975dc811624, _ebf358b75a0b = "", _c5b4b25078d6 = 0;
        for (;null !== (_d975dc811624 = _fae22887acec.exec(_8eeac2780070)); ) {
          let {index: _4d778195d27f} = _d975dc811624, _9fc5b21180bb = _8eeac2780070.charCodeAt(_4d778195d27f), _6c0b4fee9c25 = _bbaa3660c6e1.get(_9fc5b21180bb);
          void 0 === _6c0b4fee9c25 ? (_ebf358b75a0b += `${_8eeac2780070.substring(_c5b4b25078d6, _4d778195d27f)}&#x${_0486c8e5ad30(_8eeac2780070, _4d778195d27f).toString(16)};`, 
          _c5b4b25078d6 = _fae22887acec.lastIndex += Number((64512 & _9fc5b21180bb) == 55296)) : (_ebf358b75a0b += _8eeac2780070.substring(_c5b4b25078d6, _4d778195d27f) + _6c0b4fee9c25, 
          _c5b4b25078d6 = _4d778195d27f + 1);
        }
        return _ebf358b75a0b + _8eeac2780070.substr(_c5b4b25078d6);
      }
      function o(_8eeac2780070, _d975dc811624) {
        return function(_ebf358b75a0b) {
          let _fae22887acec, _bbaa3660c6e1 = 0, _0486c8e5ad30 = "";
          for (;_fae22887acec = _8eeac2780070.exec(_ebf358b75a0b); ) _bbaa3660c6e1 !== _fae22887acec.index && (_0486c8e5ad30 += _ebf358b75a0b.substring(_bbaa3660c6e1, _fae22887acec.index)), 
          _0486c8e5ad30 += _d975dc811624.get(_fae22887acec[0].charCodeAt(0)), _bbaa3660c6e1 = _fae22887acec.index + 1;
          return _0486c8e5ad30 + _ebf358b75a0b.substring(_bbaa3660c6e1);
        };
      }
      let _c5b4b25078d6 = o(/["&\u00A0]/g, new Map([ [ 34, "&quot;" ], [ 38, "&amp;" ], [ 160, "&nbsp;" ] ])), _4d778195d27f = o(/[&<>\u00A0]/g, new Map([ [ 38, "&amp;" ], [ 60, "&lt;" ], [ 62, "&gt;" ], [ 160, "&nbsp;" ] ]));
    },
    7259: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.d(_d975dc811624, {
        q: () => _fae22887acec
      });
      let _fae22887acec = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(_8eeac2780070 => _8eeac2780070.charCodeAt(0)));
    },
    5949: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.d(_d975dc811624, {
        s: () => _fae22887acec
      });
      let _fae22887acec = new Uint16Array("Ȁaglq\tɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(_8eeac2780070 => _8eeac2780070.charCodeAt(0)));
    },
    9496: function() {},
    8466: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.d(_d975dc811624, {
        Gj: () => _4d778195d27f.Gj,
        WY: () => _4d778195d27f.WY,
        X1: () => _4d778195d27f.X1
      }), _ebf358b75a0b(2990), _ebf358b75a0b(466);
      var _fae22887acec, _bbaa3660c6e1, _0486c8e5ad30, _c5b4b25078d6, _4d778195d27f = _ebf358b75a0b(747);
      (_fae22887acec = _0486c8e5ad30 || (_0486c8e5ad30 = {}))[_fae22887acec.XML = 0] = "XML", 
      _fae22887acec[_fae22887acec.HTML = 1] = "HTML", (_bbaa3660c6e1 = _c5b4b25078d6 || (_c5b4b25078d6 = {}))[_bbaa3660c6e1.UTF8 = 0] = "UTF8", 
      _bbaa3660c6e1[_bbaa3660c6e1.ASCII = 1] = "ASCII", _bbaa3660c6e1[_bbaa3660c6e1.Extensive = 2] = "Extensive", 
      _bbaa3660c6e1[_bbaa3660c6e1.Attribute = 3] = "Attribute", _bbaa3660c6e1[_bbaa3660c6e1.Text = 4] = "Text";
    },
    4645: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.d(_d975dc811624, {
        i: () => g
      });
      var _fae22887acec = _ebf358b75a0b(5645), _bbaa3660c6e1 = _ebf358b75a0b(2990);
      let _0486c8e5ad30 = new Set([ "input", "option", "optgroup", "select", "button", "datalist", "textarea" ]), _c5b4b25078d6 = new Set([ "p" ]), _4d778195d27f = new Set([ "thead", "tbody" ]), _9fc5b21180bb = new Set([ "dd", "dt" ]), _6c0b4fee9c25 = new Set([ "rt", "rp" ]), _fb4ea2a6f85c = new Map([ [ "tr", new Set([ "tr", "th", "td" ]) ], [ "th", new Set([ "th" ]) ], [ "td", new Set([ "thead", "th", "td" ]) ], [ "body", new Set([ "head", "link", "script" ]) ], [ "li", new Set([ "li" ]) ], [ "p", _c5b4b25078d6 ], [ "h1", _c5b4b25078d6 ], [ "h2", _c5b4b25078d6 ], [ "h3", _c5b4b25078d6 ], [ "h4", _c5b4b25078d6 ], [ "h5", _c5b4b25078d6 ], [ "h6", _c5b4b25078d6 ], [ "select", _0486c8e5ad30 ], [ "input", _0486c8e5ad30 ], [ "output", _0486c8e5ad30 ], [ "button", _0486c8e5ad30 ], [ "datalist", _0486c8e5ad30 ], [ "textarea", _0486c8e5ad30 ], [ "option", new Set([ "option" ]) ], [ "optgroup", new Set([ "optgroup", "option" ]) ], [ "dd", _9fc5b21180bb ], [ "dt", _9fc5b21180bb ], [ "address", _c5b4b25078d6 ], [ "article", _c5b4b25078d6 ], [ "aside", _c5b4b25078d6 ], [ "blockquote", _c5b4b25078d6 ], [ "details", _c5b4b25078d6 ], [ "div", _c5b4b25078d6 ], [ "dl", _c5b4b25078d6 ], [ "fieldset", _c5b4b25078d6 ], [ "figcaption", _c5b4b25078d6 ], [ "figure", _c5b4b25078d6 ], [ "footer", _c5b4b25078d6 ], [ "form", _c5b4b25078d6 ], [ "header", _c5b4b25078d6 ], [ "hr", _c5b4b25078d6 ], [ "main", _c5b4b25078d6 ], [ "nav", _c5b4b25078d6 ], [ "ol", _c5b4b25078d6 ], [ "pre", _c5b4b25078d6 ], [ "section", _c5b4b25078d6 ], [ "table", _c5b4b25078d6 ], [ "ul", _c5b4b25078d6 ], [ "rt", _6c0b4fee9c25 ], [ "rp", _6c0b4fee9c25 ], [ "tbody", _4d778195d27f ], [ "tfoot", _4d778195d27f ] ]), _fe5e93e0a07e = new Set([ "area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr" ]), _11590423c4ed = new Set([ "math", "svg" ]), _8a98072c4f6f = new Set([ "mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title" ]), _a3a9859aeb07 = /\s|\//;
      class g {
        constructor(_8eeac2780070, _d975dc811624 = {}) {
          var _ebf358b75a0b, _bbaa3660c6e1, _0486c8e5ad30, _c5b4b25078d6, _4d778195d27f, _9fc5b21180bb;
          this.options = _d975dc811624, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, 
          this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, 
          this.stack = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, 
          this.ended = !1, this.cbs = null != _8eeac2780070 ? _8eeac2780070 : {}, this.htmlMode = !this.options.xmlMode, 
          this.lowerCaseTagNames = null != (_ebf358b75a0b = _d975dc811624.lowerCaseTags) ? _ebf358b75a0b : this.htmlMode, 
          this.lowerCaseAttributeNames = null != (_bbaa3660c6e1 = _d975dc811624.lowerCaseAttributeNames) ? _bbaa3660c6e1 : this.htmlMode, 
          this.recognizeSelfClosing = null != (_0486c8e5ad30 = _d975dc811624.recognizeSelfClosing) ? _0486c8e5ad30 : !this.htmlMode, 
          this.tokenizer = new (null != (_c5b4b25078d6 = _d975dc811624.Tokenizer) ? _c5b4b25078d6 : _fae22887acec.A)(this.options, this), 
          this.foreignContext = [ !this.htmlMode ], null == (_9fc5b21180bb = (_4d778195d27f = this.cbs).onparserinit) || _9fc5b21180bb.call(_4d778195d27f, this);
        }
        ontext(_8eeac2780070, _d975dc811624) {
          var _ebf358b75a0b, _fae22887acec;
          let _bbaa3660c6e1 = this.getSlice(_8eeac2780070, _d975dc811624);
          this.endIndex = _d975dc811624 - 1, null == (_fae22887acec = (_ebf358b75a0b = this.cbs).ontext) || _fae22887acec.call(_ebf358b75a0b, _bbaa3660c6e1), 
          this.startIndex = _d975dc811624;
        }
        ontextentity(_8eeac2780070, _d975dc811624) {
          var _ebf358b75a0b, _fae22887acec;
          this.endIndex = _d975dc811624 - 1, null == (_fae22887acec = (_ebf358b75a0b = this.cbs).ontext) || _fae22887acec.call(_ebf358b75a0b, (0, 
          _bbaa3660c6e1.MK)(_8eeac2780070)), this.startIndex = _d975dc811624;
        }
        isVoidElement(_8eeac2780070) {
          return this.htmlMode && _fe5e93e0a07e.has(_8eeac2780070);
        }
        onopentagname(_8eeac2780070, _d975dc811624) {
          this.endIndex = _d975dc811624;
          let _ebf358b75a0b = this.getSlice(_8eeac2780070, _d975dc811624);
          this.lowerCaseTagNames && (_ebf358b75a0b = _ebf358b75a0b.toLowerCase()), this.emitOpenTag(_ebf358b75a0b);
        }
        emitOpenTag(_8eeac2780070) {
          var _d975dc811624, _ebf358b75a0b, _fae22887acec, _bbaa3660c6e1;
          this.openTagStart = this.startIndex, this.tagname = _8eeac2780070;
          let _0486c8e5ad30 = this.htmlMode && _fb4ea2a6f85c.get(_8eeac2780070);
          if (_0486c8e5ad30) for (;this.stack.length > 0 && _0486c8e5ad30.has(this.stack[0]); ) {
            let _8eeac2780070 = this.stack.shift();
            null == (_ebf358b75a0b = (_d975dc811624 = this.cbs).onclosetag) || _ebf358b75a0b.call(_d975dc811624, _8eeac2780070, !0);
          }
          !this.isVoidElement(_8eeac2780070) && (this.stack.unshift(_8eeac2780070), this.htmlMode && (_11590423c4ed.has(_8eeac2780070) ? this.foreignContext.unshift(!0) : _8a98072c4f6f.has(_8eeac2780070) && this.foreignContext.unshift(!1))), 
          null == (_bbaa3660c6e1 = (_fae22887acec = this.cbs).onopentagname) || _bbaa3660c6e1.call(_fae22887acec, _8eeac2780070), 
          this.cbs.onopentag && (this.attribs = {});
        }
        endOpenTag(_8eeac2780070) {
          var _d975dc811624, _ebf358b75a0b;
          this.startIndex = this.openTagStart, this.attribs && (null == (_ebf358b75a0b = (_d975dc811624 = this.cbs).onopentag) || _ebf358b75a0b.call(_d975dc811624, this.tagname, this.attribs, _8eeac2780070), 
          this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), 
          this.tagname = "";
        }
        onopentagend(_8eeac2780070) {
          this.endIndex = _8eeac2780070, this.endOpenTag(!1), this.startIndex = _8eeac2780070 + 1;
        }
        onclosetag(_8eeac2780070, _d975dc811624) {
          var _ebf358b75a0b, _fae22887acec, _bbaa3660c6e1, _0486c8e5ad30, _c5b4b25078d6, _4d778195d27f, _9fc5b21180bb, _6c0b4fee9c25;
          this.endIndex = _d975dc811624;
          let _fb4ea2a6f85c = this.getSlice(_8eeac2780070, _d975dc811624);
          if (this.lowerCaseTagNames && (_fb4ea2a6f85c = _fb4ea2a6f85c.toLowerCase()), this.htmlMode && (_11590423c4ed.has(_fb4ea2a6f85c) || _8a98072c4f6f.has(_fb4ea2a6f85c)) && this.foreignContext.shift(), 
          this.isVoidElement(_fb4ea2a6f85c)) this.htmlMode && "br" === _fb4ea2a6f85c && (null == (_0486c8e5ad30 = (_bbaa3660c6e1 = this.cbs).onopentagname) || _0486c8e5ad30.call(_bbaa3660c6e1, "br"), 
          null == (_4d778195d27f = (_c5b4b25078d6 = this.cbs).onopentag) || _4d778195d27f.call(_c5b4b25078d6, "br", {}, !0), 
          null == (_6c0b4fee9c25 = (_9fc5b21180bb = this.cbs).onclosetag) || _6c0b4fee9c25.call(_9fc5b21180bb, "br", !1)); else {
            let _8eeac2780070 = this.stack.indexOf(_fb4ea2a6f85c);
            if (-1 !== _8eeac2780070) for (let _d975dc811624 = 0; _d975dc811624 <= _8eeac2780070; _d975dc811624++) {
              let _bbaa3660c6e1 = this.stack.shift();
              null == (_fae22887acec = (_ebf358b75a0b = this.cbs).onclosetag) || _fae22887acec.call(_ebf358b75a0b, _bbaa3660c6e1, _d975dc811624 !== _8eeac2780070);
            } else this.htmlMode && "p" === _fb4ea2a6f85c && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
          }
          this.startIndex = _d975dc811624 + 1;
        }
        onselfclosingtag(_8eeac2780070) {
          this.endIndex = _8eeac2780070, this.recognizeSelfClosing || this.foreignContext[0] ? (this.closeCurrentTag(!1), 
          this.startIndex = _8eeac2780070 + 1) : this.onopentagend(_8eeac2780070);
        }
        closeCurrentTag(_8eeac2780070) {
          var _d975dc811624, _ebf358b75a0b;
          let _fae22887acec = this.tagname;
          this.endOpenTag(_8eeac2780070), this.stack[0] === _fae22887acec && (null == (_ebf358b75a0b = (_d975dc811624 = this.cbs).onclosetag) || _ebf358b75a0b.call(_d975dc811624, _fae22887acec, !_8eeac2780070), 
          this.stack.shift());
        }
        onattribname(_8eeac2780070, _d975dc811624) {
          this.startIndex = _8eeac2780070;
          let _ebf358b75a0b = this.getSlice(_8eeac2780070, _d975dc811624);
          this.attribname = this.lowerCaseAttributeNames ? _ebf358b75a0b.toLowerCase() : _ebf358b75a0b;
        }
        onattribdata(_8eeac2780070, _d975dc811624) {
          this.attribvalue += this.getSlice(_8eeac2780070, _d975dc811624);
        }
        onattribentity(_8eeac2780070) {
          this.attribvalue += (0, _bbaa3660c6e1.MK)(_8eeac2780070);
        }
        onattribend(_8eeac2780070, _d975dc811624) {
          var _ebf358b75a0b, _bbaa3660c6e1;
          this.endIndex = _d975dc811624, null == (_bbaa3660c6e1 = (_ebf358b75a0b = this.cbs).onattribute) || _bbaa3660c6e1.call(_ebf358b75a0b, this.attribname, this.attribvalue, _8eeac2780070 === _fae22887acec.X.Double ? '"' : _8eeac2780070 === _fae22887acec.X.Single ? "'" : _8eeac2780070 === _fae22887acec.X.NoValue ? void 0 : null), 
          this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), 
          this.attribvalue = "";
        }
        getInstructionName(_8eeac2780070) {
          let _d975dc811624 = _8eeac2780070.search(_a3a9859aeb07), _ebf358b75a0b = _d975dc811624 < 0 ? _8eeac2780070 : _8eeac2780070.substr(0, _d975dc811624);
          return this.lowerCaseTagNames && (_ebf358b75a0b = _ebf358b75a0b.toLowerCase()), 
          _ebf358b75a0b;
        }
        ondeclaration(_8eeac2780070, _d975dc811624) {
          this.endIndex = _d975dc811624;
          let _ebf358b75a0b = this.getSlice(_8eeac2780070, _d975dc811624);
          if (this.cbs.onprocessinginstruction) {
            let _8eeac2780070 = this.getInstructionName(_ebf358b75a0b);
            this.cbs.onprocessinginstruction(`!${_8eeac2780070}`, `!${_ebf358b75a0b}`);
          }
          this.startIndex = _d975dc811624 + 1;
        }
        onprocessinginstruction(_8eeac2780070, _d975dc811624) {
          this.endIndex = _d975dc811624;
          let _ebf358b75a0b = this.getSlice(_8eeac2780070, _d975dc811624);
          if (this.cbs.onprocessinginstruction) {
            let _8eeac2780070 = this.getInstructionName(_ebf358b75a0b);
            this.cbs.onprocessinginstruction(`?${_8eeac2780070}`, `?${_ebf358b75a0b}`);
          }
          this.startIndex = _d975dc811624 + 1;
        }
        oncomment(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
          var _fae22887acec, _bbaa3660c6e1, _0486c8e5ad30, _c5b4b25078d6;
          this.endIndex = _d975dc811624, null == (_bbaa3660c6e1 = (_fae22887acec = this.cbs).oncomment) || _bbaa3660c6e1.call(_fae22887acec, this.getSlice(_8eeac2780070, _d975dc811624 - _ebf358b75a0b)), 
          null == (_c5b4b25078d6 = (_0486c8e5ad30 = this.cbs).oncommentend) || _c5b4b25078d6.call(_0486c8e5ad30), 
          this.startIndex = _d975dc811624 + 1;
        }
        oncdata(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
          var _fae22887acec, _bbaa3660c6e1, _0486c8e5ad30, _c5b4b25078d6, _4d778195d27f, _9fc5b21180bb, _6c0b4fee9c25, _fb4ea2a6f85c, _fe5e93e0a07e, _11590423c4ed;
          this.endIndex = _d975dc811624;
          let _8a98072c4f6f = this.getSlice(_8eeac2780070, _d975dc811624 - _ebf358b75a0b);
          !this.htmlMode || this.options.recognizeCDATA ? (null == (_bbaa3660c6e1 = (_fae22887acec = this.cbs).oncdatastart) || _bbaa3660c6e1.call(_fae22887acec), 
          null == (_c5b4b25078d6 = (_0486c8e5ad30 = this.cbs).ontext) || _c5b4b25078d6.call(_0486c8e5ad30, _8a98072c4f6f), 
          null == (_9fc5b21180bb = (_4d778195d27f = this.cbs).oncdataend) || _9fc5b21180bb.call(_4d778195d27f)) : (null == (_fb4ea2a6f85c = (_6c0b4fee9c25 = this.cbs).oncomment) || _fb4ea2a6f85c.call(_6c0b4fee9c25, `[CDATA[${_8a98072c4f6f}]]`), 
          null == (_11590423c4ed = (_fe5e93e0a07e = this.cbs).oncommentend) || _11590423c4ed.call(_fe5e93e0a07e)), 
          this.startIndex = _d975dc811624 + 1;
        }
        onend() {
          var _8eeac2780070, _d975dc811624;
          if (this.cbs.onclosetag) {
            this.endIndex = this.startIndex;
            for (let _8eeac2780070 = 0; _8eeac2780070 < this.stack.length; _8eeac2780070++) this.cbs.onclosetag(this.stack[_8eeac2780070], !0);
          }
          null == (_d975dc811624 = (_8eeac2780070 = this.cbs).onend) || _d975dc811624.call(_8eeac2780070);
        }
        reset() {
          var _8eeac2780070, _d975dc811624, _ebf358b75a0b, _fae22887acec;
          null == (_d975dc811624 = (_8eeac2780070 = this.cbs).onreset) || _d975dc811624.call(_8eeac2780070), 
          this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, 
          this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, null == (_fae22887acec = (_ebf358b75a0b = this.cbs).onparserinit) || _fae22887acec.call(_ebf358b75a0b, this), 
          this.buffers.length = 0, this.foreignContext.length = 0, this.foreignContext.unshift(!this.htmlMode), 
          this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1;
        }
        parseComplete(_8eeac2780070) {
          this.reset(), this.end(_8eeac2780070);
        }
        getSlice(_8eeac2780070, _d975dc811624) {
          for (;_8eeac2780070 - this.bufferOffset >= this.buffers[0].length; ) this.shiftBuffer();
          let _ebf358b75a0b = this.buffers[0].slice(_8eeac2780070 - this.bufferOffset, _d975dc811624 - this.bufferOffset);
          for (;_d975dc811624 - this.bufferOffset > this.buffers[0].length; ) this.shiftBuffer(), 
          _ebf358b75a0b += this.buffers[0].slice(0, _d975dc811624 - this.bufferOffset);
          return _ebf358b75a0b;
        }
        shiftBuffer() {
          this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift();
        }
        write(_8eeac2780070) {
          var _d975dc811624, _ebf358b75a0b;
          if (this.ended) {
            null == (_ebf358b75a0b = (_d975dc811624 = this.cbs).onerror) || _ebf358b75a0b.call(_d975dc811624, Error(".write() after done!"));
            return;
          }
          this.buffers.push(_8eeac2780070), this.tokenizer.running && (this.tokenizer.write(_8eeac2780070), 
          this.writeIndex++);
        }
        end(_8eeac2780070) {
          var _d975dc811624, _ebf358b75a0b;
          if (this.ended) {
            null == (_ebf358b75a0b = (_d975dc811624 = this.cbs).onerror) || _ebf358b75a0b.call(_d975dc811624, Error(".end() after done!"));
            return;
          }
          _8eeac2780070 && this.write(_8eeac2780070), this.ended = !0, this.tokenizer.end();
        }
        pause() {
          this.tokenizer.pause();
        }
        resume() {
          for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length; ) this.tokenizer.write(this.buffers[this.writeIndex++]);
          this.ended && this.tokenizer.end();
        }
        parseChunk(_8eeac2780070) {
          this.write(_8eeac2780070);
        }
        done(_8eeac2780070) {
          this.end(_8eeac2780070);
        }
      }
    },
    5645: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.d(_d975dc811624, {
        A: () => p,
        X: () => _9fc5b21180bb
      });
      var _fae22887acec, _bbaa3660c6e1, _0486c8e5ad30, _c5b4b25078d6, _4d778195d27f, _9fc5b21180bb, _6c0b4fee9c25 = _ebf358b75a0b(2990);
      function u(_8eeac2780070) {
        return _8eeac2780070 === _c5b4b25078d6.Space || _8eeac2780070 === _c5b4b25078d6.NewLine || _8eeac2780070 === _c5b4b25078d6.Tab || _8eeac2780070 === _c5b4b25078d6.FormFeed || _8eeac2780070 === _c5b4b25078d6.CarriageReturn;
      }
      function d(_8eeac2780070) {
        return _8eeac2780070 === _c5b4b25078d6.Slash || _8eeac2780070 === _c5b4b25078d6.Gt || u(_8eeac2780070);
      }
      (_fae22887acec = _c5b4b25078d6 || (_c5b4b25078d6 = {}))[_fae22887acec.Tab = 9] = "Tab", 
      _fae22887acec[_fae22887acec.NewLine = 10] = "NewLine", _fae22887acec[_fae22887acec.FormFeed = 12] = "FormFeed", 
      _fae22887acec[_fae22887acec.CarriageReturn = 13] = "CarriageReturn", _fae22887acec[_fae22887acec.Space = 32] = "Space", 
      _fae22887acec[_fae22887acec.ExclamationMark = 33] = "ExclamationMark", _fae22887acec[_fae22887acec.Number = 35] = "Number", 
      _fae22887acec[_fae22887acec.Amp = 38] = "Amp", _fae22887acec[_fae22887acec.SingleQuote = 39] = "SingleQuote", 
      _fae22887acec[_fae22887acec.DoubleQuote = 34] = "DoubleQuote", _fae22887acec[_fae22887acec.Dash = 45] = "Dash", 
      _fae22887acec[_fae22887acec.Slash = 47] = "Slash", _fae22887acec[_fae22887acec.Zero = 48] = "Zero", 
      _fae22887acec[_fae22887acec.Nine = 57] = "Nine", _fae22887acec[_fae22887acec.Semi = 59] = "Semi", 
      _fae22887acec[_fae22887acec.Lt = 60] = "Lt", _fae22887acec[_fae22887acec.Eq = 61] = "Eq", 
      _fae22887acec[_fae22887acec.Gt = 62] = "Gt", _fae22887acec[_fae22887acec.Questionmark = 63] = "Questionmark", 
      _fae22887acec[_fae22887acec.UpperA = 65] = "UpperA", _fae22887acec[_fae22887acec.LowerA = 97] = "LowerA", 
      _fae22887acec[_fae22887acec.UpperF = 70] = "UpperF", _fae22887acec[_fae22887acec.LowerF = 102] = "LowerF", 
      _fae22887acec[_fae22887acec.UpperZ = 90] = "UpperZ", _fae22887acec[_fae22887acec.LowerZ = 122] = "LowerZ", 
      _fae22887acec[_fae22887acec.LowerX = 120] = "LowerX", _fae22887acec[_fae22887acec.OpeningSquareBracket = 91] = "OpeningSquareBracket", 
      (_bbaa3660c6e1 = _4d778195d27f || (_4d778195d27f = {}))[_bbaa3660c6e1.Text = 1] = "Text", 
      _bbaa3660c6e1[_bbaa3660c6e1.BeforeTagName = 2] = "BeforeTagName", _bbaa3660c6e1[_bbaa3660c6e1.InTagName = 3] = "InTagName", 
      _bbaa3660c6e1[_bbaa3660c6e1.InSelfClosingTag = 4] = "InSelfClosingTag", _bbaa3660c6e1[_bbaa3660c6e1.BeforeClosingTagName = 5] = "BeforeClosingTagName", 
      _bbaa3660c6e1[_bbaa3660c6e1.InClosingTagName = 6] = "InClosingTagName", _bbaa3660c6e1[_bbaa3660c6e1.AfterClosingTagName = 7] = "AfterClosingTagName", 
      _bbaa3660c6e1[_bbaa3660c6e1.BeforeAttributeName = 8] = "BeforeAttributeName", _bbaa3660c6e1[_bbaa3660c6e1.InAttributeName = 9] = "InAttributeName", 
      _bbaa3660c6e1[_bbaa3660c6e1.AfterAttributeName = 10] = "AfterAttributeName", _bbaa3660c6e1[_bbaa3660c6e1.BeforeAttributeValue = 11] = "BeforeAttributeValue", 
      _bbaa3660c6e1[_bbaa3660c6e1.InAttributeValueDq = 12] = "InAttributeValueDq", _bbaa3660c6e1[_bbaa3660c6e1.InAttributeValueSq = 13] = "InAttributeValueSq", 
      _bbaa3660c6e1[_bbaa3660c6e1.InAttributeValueNq = 14] = "InAttributeValueNq", _bbaa3660c6e1[_bbaa3660c6e1.BeforeDeclaration = 15] = "BeforeDeclaration", 
      _bbaa3660c6e1[_bbaa3660c6e1.InDeclaration = 16] = "InDeclaration", _bbaa3660c6e1[_bbaa3660c6e1.InProcessingInstruction = 17] = "InProcessingInstruction", 
      _bbaa3660c6e1[_bbaa3660c6e1.BeforeComment = 18] = "BeforeComment", _bbaa3660c6e1[_bbaa3660c6e1.CDATASequence = 19] = "CDATASequence", 
      _bbaa3660c6e1[_bbaa3660c6e1.InSpecialComment = 20] = "InSpecialComment", _bbaa3660c6e1[_bbaa3660c6e1.InCommentLike = 21] = "InCommentLike", 
      _bbaa3660c6e1[_bbaa3660c6e1.BeforeSpecialS = 22] = "BeforeSpecialS", _bbaa3660c6e1[_bbaa3660c6e1.BeforeSpecialT = 23] = "BeforeSpecialT", 
      _bbaa3660c6e1[_bbaa3660c6e1.SpecialStartSequence = 24] = "SpecialStartSequence", 
      _bbaa3660c6e1[_bbaa3660c6e1.InSpecialTag = 25] = "InSpecialTag", _bbaa3660c6e1[_bbaa3660c6e1.InEntity = 26] = "InEntity", 
      (_0486c8e5ad30 = _9fc5b21180bb || (_9fc5b21180bb = {}))[_0486c8e5ad30.NoValue = 0] = "NoValue", 
      _0486c8e5ad30[_0486c8e5ad30.Unquoted = 1] = "Unquoted", _0486c8e5ad30[_0486c8e5ad30.Single = 2] = "Single", 
      _0486c8e5ad30[_0486c8e5ad30.Double = 3] = "Double";
      let _fb4ea2a6f85c = {
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
        constructor({xmlMode: _8eeac2780070 = !1, decodeEntities: _d975dc811624 = !0}, _ebf358b75a0b) {
          this.cbs = _ebf358b75a0b, this.state = _4d778195d27f.Text, this.buffer = "", this.sectionStart = 0, 
          this.index = 0, this.entityStart = 0, this.baseState = _4d778195d27f.Text, this.isSpecial = !1, 
          this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, 
          this.xmlMode = _8eeac2780070, this.decodeEntities = _d975dc811624, this.entityDecoder = new _6c0b4fee9c25.Wf(_8eeac2780070 ? _6c0b4fee9c25.sr : _6c0b4fee9c25.qN, (_8eeac2780070, _d975dc811624) => this.emitCodePoint(_8eeac2780070, _d975dc811624));
        }
        reset() {
          this.state = _4d778195d27f.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, 
          this.baseState = _4d778195d27f.Text, this.currentSequence = void 0, this.running = !0, 
          this.offset = 0;
        }
        write(_8eeac2780070) {
          this.offset += this.buffer.length, this.buffer = _8eeac2780070, this.parse();
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
        stateText(_8eeac2780070) {
          _8eeac2780070 === _c5b4b25078d6.Lt || !this.decodeEntities && this.fastForwardTo(_c5b4b25078d6.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), 
          this.state = _4d778195d27f.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && _8eeac2780070 === _c5b4b25078d6.Amp && this.startEntity();
        }
        stateSpecialStartSequence(_8eeac2780070) {
          let _d975dc811624 = this.sequenceIndex === this.currentSequence.length;
          if (_d975dc811624 ? d(_8eeac2780070) : (32 | _8eeac2780070) === this.currentSequence[this.sequenceIndex]) {
            if (!_d975dc811624) return void this.sequenceIndex++;
          } else this.isSpecial = !1;
          this.sequenceIndex = 0, this.state = _4d778195d27f.InTagName, this.stateInTagName(_8eeac2780070);
        }
        stateInSpecialTag(_8eeac2780070) {
          if (this.sequenceIndex === this.currentSequence.length) {
            if (_8eeac2780070 === _c5b4b25078d6.Gt || u(_8eeac2780070)) {
              let _d975dc811624 = this.index - this.currentSequence.length;
              if (this.sectionStart < _d975dc811624) {
                let _8eeac2780070 = this.index;
                this.index = _d975dc811624, this.cbs.ontext(this.sectionStart, _d975dc811624), this.index = _8eeac2780070;
              }
              this.isSpecial = !1, this.sectionStart = _d975dc811624 + 2, this.stateInClosingTagName(_8eeac2780070);
              return;
            }
            this.sequenceIndex = 0;
          }
          (32 | _8eeac2780070) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : 0 === this.sequenceIndex ? this.currentSequence === _fb4ea2a6f85c.TitleEnd ? this.decodeEntities && _8eeac2780070 === _c5b4b25078d6.Amp && this.startEntity() : this.fastForwardTo(_c5b4b25078d6.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = Number(_8eeac2780070 === _c5b4b25078d6.Lt);
        }
        stateCDATASequence(_8eeac2780070) {
          _8eeac2780070 === _fb4ea2a6f85c.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === _fb4ea2a6f85c.Cdata.length && (this.state = _4d778195d27f.InCommentLike, 
          this.currentSequence = _fb4ea2a6f85c.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, 
          this.state = _4d778195d27f.InDeclaration, this.stateInDeclaration(_8eeac2780070));
        }
        fastForwardTo(_8eeac2780070) {
          for (;++this.index < this.buffer.length + this.offset; ) if (this.buffer.charCodeAt(this.index - this.offset) === _8eeac2780070) return !0;
          return this.index = this.buffer.length + this.offset - 1, !1;
        }
        stateInCommentLike(_8eeac2780070) {
          _8eeac2780070 === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === _fb4ea2a6f85c.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), 
          this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = _4d778195d27f.Text) : 0 === this.sequenceIndex ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : _8eeac2780070 !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
        }
        isTagStartChar(_8eeac2780070) {
          return this.xmlMode ? !d(_8eeac2780070) : _8eeac2780070 >= _c5b4b25078d6.LowerA && _8eeac2780070 <= _c5b4b25078d6.LowerZ || _8eeac2780070 >= _c5b4b25078d6.UpperA && _8eeac2780070 <= _c5b4b25078d6.UpperZ;
        }
        startSpecial(_8eeac2780070, _d975dc811624) {
          this.isSpecial = !0, this.currentSequence = _8eeac2780070, this.sequenceIndex = _d975dc811624, 
          this.state = _4d778195d27f.SpecialStartSequence;
        }
        stateBeforeTagName(_8eeac2780070) {
          if (_8eeac2780070 === _c5b4b25078d6.ExclamationMark) this.state = _4d778195d27f.BeforeDeclaration, 
          this.sectionStart = this.index + 1; else if (_8eeac2780070 === _c5b4b25078d6.Questionmark) this.state = _4d778195d27f.InProcessingInstruction, 
          this.sectionStart = this.index + 1; else if (this.isTagStartChar(_8eeac2780070)) {
            let _d975dc811624 = 32 | _8eeac2780070;
            this.sectionStart = this.index, this.xmlMode ? this.state = _4d778195d27f.InTagName : _d975dc811624 === _fb4ea2a6f85c.ScriptEnd[2] ? this.state = _4d778195d27f.BeforeSpecialS : _d975dc811624 === _fb4ea2a6f85c.TitleEnd[2] || _d975dc811624 === _fb4ea2a6f85c.XmpEnd[2] ? this.state = _4d778195d27f.BeforeSpecialT : this.state = _4d778195d27f.InTagName;
          } else _8eeac2780070 === _c5b4b25078d6.Slash ? this.state = _4d778195d27f.BeforeClosingTagName : (this.state = _4d778195d27f.Text, 
          this.stateText(_8eeac2780070));
        }
        stateInTagName(_8eeac2780070) {
          d(_8eeac2780070) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, 
          this.state = _4d778195d27f.BeforeAttributeName, this.stateBeforeAttributeName(_8eeac2780070));
        }
        stateBeforeClosingTagName(_8eeac2780070) {
          u(_8eeac2780070) || (_8eeac2780070 === _c5b4b25078d6.Gt ? this.state = _4d778195d27f.Text : (this.state = this.isTagStartChar(_8eeac2780070) ? _4d778195d27f.InClosingTagName : _4d778195d27f.InSpecialComment, 
          this.sectionStart = this.index));
        }
        stateInClosingTagName(_8eeac2780070) {
          (_8eeac2780070 === _c5b4b25078d6.Gt || u(_8eeac2780070)) && (this.cbs.onclosetag(this.sectionStart, this.index), 
          this.sectionStart = -1, this.state = _4d778195d27f.AfterClosingTagName, this.stateAfterClosingTagName(_8eeac2780070));
        }
        stateAfterClosingTagName(_8eeac2780070) {
          (_8eeac2780070 === _c5b4b25078d6.Gt || this.fastForwardTo(_c5b4b25078d6.Gt)) && (this.state = _4d778195d27f.Text, 
          this.sectionStart = this.index + 1);
        }
        stateBeforeAttributeName(_8eeac2780070) {
          _8eeac2780070 === _c5b4b25078d6.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = _4d778195d27f.InSpecialTag, 
          this.sequenceIndex = 0) : this.state = _4d778195d27f.Text, this.sectionStart = this.index + 1) : _8eeac2780070 === _c5b4b25078d6.Slash ? this.state = _4d778195d27f.InSelfClosingTag : u(_8eeac2780070) || (this.state = _4d778195d27f.InAttributeName, 
          this.sectionStart = this.index);
        }
        stateInSelfClosingTag(_8eeac2780070) {
          _8eeac2780070 === _c5b4b25078d6.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = _4d778195d27f.Text, 
          this.sectionStart = this.index + 1, this.isSpecial = !1) : u(_8eeac2780070) || (this.state = _4d778195d27f.BeforeAttributeName, 
          this.stateBeforeAttributeName(_8eeac2780070));
        }
        stateInAttributeName(_8eeac2780070) {
          (_8eeac2780070 === _c5b4b25078d6.Eq || d(_8eeac2780070)) && (this.cbs.onattribname(this.sectionStart, this.index), 
          this.sectionStart = this.index, this.state = _4d778195d27f.AfterAttributeName, this.stateAfterAttributeName(_8eeac2780070));
        }
        stateAfterAttributeName(_8eeac2780070) {
          _8eeac2780070 === _c5b4b25078d6.Eq ? this.state = _4d778195d27f.BeforeAttributeValue : _8eeac2780070 === _c5b4b25078d6.Slash || _8eeac2780070 === _c5b4b25078d6.Gt ? (this.cbs.onattribend(_9fc5b21180bb.NoValue, this.sectionStart), 
          this.sectionStart = -1, this.state = _4d778195d27f.BeforeAttributeName, this.stateBeforeAttributeName(_8eeac2780070)) : u(_8eeac2780070) || (this.cbs.onattribend(_9fc5b21180bb.NoValue, this.sectionStart), 
          this.state = _4d778195d27f.InAttributeName, this.sectionStart = this.index);
        }
        stateBeforeAttributeValue(_8eeac2780070) {
          _8eeac2780070 === _c5b4b25078d6.DoubleQuote ? (this.state = _4d778195d27f.InAttributeValueDq, 
          this.sectionStart = this.index + 1) : _8eeac2780070 === _c5b4b25078d6.SingleQuote ? (this.state = _4d778195d27f.InAttributeValueSq, 
          this.sectionStart = this.index + 1) : u(_8eeac2780070) || (this.sectionStart = this.index, 
          this.state = _4d778195d27f.InAttributeValueNq, this.stateInAttributeValueNoQuotes(_8eeac2780070));
        }
        handleInAttributeValue(_8eeac2780070, _d975dc811624) {
          _8eeac2780070 === _d975dc811624 || !this.decodeEntities && this.fastForwardTo(_d975dc811624) ? (this.cbs.onattribdata(this.sectionStart, this.index), 
          this.sectionStart = -1, this.cbs.onattribend(_d975dc811624 === _c5b4b25078d6.DoubleQuote ? _9fc5b21180bb.Double : _9fc5b21180bb.Single, this.index + 1), 
          this.state = _4d778195d27f.BeforeAttributeName) : this.decodeEntities && _8eeac2780070 === _c5b4b25078d6.Amp && this.startEntity();
        }
        stateInAttributeValueDoubleQuotes(_8eeac2780070) {
          this.handleInAttributeValue(_8eeac2780070, _c5b4b25078d6.DoubleQuote);
        }
        stateInAttributeValueSingleQuotes(_8eeac2780070) {
          this.handleInAttributeValue(_8eeac2780070, _c5b4b25078d6.SingleQuote);
        }
        stateInAttributeValueNoQuotes(_8eeac2780070) {
          u(_8eeac2780070) || _8eeac2780070 === _c5b4b25078d6.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), 
          this.sectionStart = -1, this.cbs.onattribend(_9fc5b21180bb.Unquoted, this.index), 
          this.state = _4d778195d27f.BeforeAttributeName, this.stateBeforeAttributeName(_8eeac2780070)) : this.decodeEntities && _8eeac2780070 === _c5b4b25078d6.Amp && this.startEntity();
        }
        stateBeforeDeclaration(_8eeac2780070) {
          _8eeac2780070 === _c5b4b25078d6.OpeningSquareBracket ? (this.state = _4d778195d27f.CDATASequence, 
          this.sequenceIndex = 0) : this.state = _8eeac2780070 === _c5b4b25078d6.Dash ? _4d778195d27f.BeforeComment : _4d778195d27f.InDeclaration;
        }
        stateInDeclaration(_8eeac2780070) {
          (_8eeac2780070 === _c5b4b25078d6.Gt || this.fastForwardTo(_c5b4b25078d6.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), 
          this.state = _4d778195d27f.Text, this.sectionStart = this.index + 1);
        }
        stateInProcessingInstruction(_8eeac2780070) {
          (_8eeac2780070 === _c5b4b25078d6.Gt || this.fastForwardTo(_c5b4b25078d6.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), 
          this.state = _4d778195d27f.Text, this.sectionStart = this.index + 1);
        }
        stateBeforeComment(_8eeac2780070) {
          _8eeac2780070 === _c5b4b25078d6.Dash ? (this.state = _4d778195d27f.InCommentLike, 
          this.currentSequence = _fb4ea2a6f85c.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = _4d778195d27f.InDeclaration;
        }
        stateInSpecialComment(_8eeac2780070) {
          (_8eeac2780070 === _c5b4b25078d6.Gt || this.fastForwardTo(_c5b4b25078d6.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), 
          this.state = _4d778195d27f.Text, this.sectionStart = this.index + 1);
        }
        stateBeforeSpecialS(_8eeac2780070) {
          let _d975dc811624 = 32 | _8eeac2780070;
          _d975dc811624 === _fb4ea2a6f85c.ScriptEnd[3] ? this.startSpecial(_fb4ea2a6f85c.ScriptEnd, 4) : _d975dc811624 === _fb4ea2a6f85c.StyleEnd[3] ? this.startSpecial(_fb4ea2a6f85c.StyleEnd, 4) : (this.state = _4d778195d27f.InTagName, 
          this.stateInTagName(_8eeac2780070));
        }
        stateBeforeSpecialT(_8eeac2780070) {
          switch (32 | _8eeac2780070) {
           case _fb4ea2a6f85c.TitleEnd[3]:
            this.startSpecial(_fb4ea2a6f85c.TitleEnd, 4);
            break;

           case _fb4ea2a6f85c.TextareaEnd[3]:
            this.startSpecial(_fb4ea2a6f85c.TextareaEnd, 4);
            break;

           case _fb4ea2a6f85c.XmpEnd[3]:
            this.startSpecial(_fb4ea2a6f85c.XmpEnd, 4);
            break;

           default:
            this.state = _4d778195d27f.InTagName, this.stateInTagName(_8eeac2780070);
          }
        }
        startEntity() {
          this.baseState = this.state, this.state = _4d778195d27f.InEntity, this.entityStart = this.index, 
          this.entityDecoder.startEntity(this.xmlMode ? _6c0b4fee9c25.FJ.Strict : this.baseState === _4d778195d27f.Text || this.baseState === _4d778195d27f.InSpecialTag ? _6c0b4fee9c25.FJ.Legacy : _6c0b4fee9c25.FJ.Attribute);
        }
        stateInEntity() {
          let _8eeac2780070 = this.entityDecoder.write(this.buffer, this.index - this.offset);
          _8eeac2780070 >= 0 ? (this.state = this.baseState, 0 === _8eeac2780070 && (this.index = this.entityStart)) : this.index = this.offset + this.buffer.length - 1;
        }
        cleanup() {
          this.running && this.sectionStart !== this.index && (this.state === _4d778195d27f.Text || this.state === _4d778195d27f.InSpecialTag && 0 === this.sequenceIndex ? (this.cbs.ontext(this.sectionStart, this.index), 
          this.sectionStart = this.index) : (this.state === _4d778195d27f.InAttributeValueDq || this.state === _4d778195d27f.InAttributeValueSq || this.state === _4d778195d27f.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), 
          this.sectionStart = this.index));
        }
        shouldContinue() {
          return this.index < this.buffer.length + this.offset && this.running;
        }
        parse() {
          for (;this.shouldContinue(); ) {
            let _8eeac2780070 = this.buffer.charCodeAt(this.index - this.offset);
            switch (this.state) {
             case _4d778195d27f.Text:
              this.stateText(_8eeac2780070);
              break;

             case _4d778195d27f.SpecialStartSequence:
              this.stateSpecialStartSequence(_8eeac2780070);
              break;

             case _4d778195d27f.InSpecialTag:
              this.stateInSpecialTag(_8eeac2780070);
              break;

             case _4d778195d27f.CDATASequence:
              this.stateCDATASequence(_8eeac2780070);
              break;

             case _4d778195d27f.InAttributeValueDq:
              this.stateInAttributeValueDoubleQuotes(_8eeac2780070);
              break;

             case _4d778195d27f.InAttributeName:
              this.stateInAttributeName(_8eeac2780070);
              break;

             case _4d778195d27f.InCommentLike:
              this.stateInCommentLike(_8eeac2780070);
              break;

             case _4d778195d27f.InSpecialComment:
              this.stateInSpecialComment(_8eeac2780070);
              break;

             case _4d778195d27f.BeforeAttributeName:
              this.stateBeforeAttributeName(_8eeac2780070);
              break;

             case _4d778195d27f.InTagName:
              this.stateInTagName(_8eeac2780070);
              break;

             case _4d778195d27f.InClosingTagName:
              this.stateInClosingTagName(_8eeac2780070);
              break;

             case _4d778195d27f.BeforeTagName:
              this.stateBeforeTagName(_8eeac2780070);
              break;

             case _4d778195d27f.AfterAttributeName:
              this.stateAfterAttributeName(_8eeac2780070);
              break;

             case _4d778195d27f.InAttributeValueSq:
              this.stateInAttributeValueSingleQuotes(_8eeac2780070);
              break;

             case _4d778195d27f.BeforeAttributeValue:
              this.stateBeforeAttributeValue(_8eeac2780070);
              break;

             case _4d778195d27f.BeforeClosingTagName:
              this.stateBeforeClosingTagName(_8eeac2780070);
              break;

             case _4d778195d27f.AfterClosingTagName:
              this.stateAfterClosingTagName(_8eeac2780070);
              break;

             case _4d778195d27f.BeforeSpecialS:
              this.stateBeforeSpecialS(_8eeac2780070);
              break;

             case _4d778195d27f.BeforeSpecialT:
              this.stateBeforeSpecialT(_8eeac2780070);
              break;

             case _4d778195d27f.InAttributeValueNq:
              this.stateInAttributeValueNoQuotes(_8eeac2780070);
              break;

             case _4d778195d27f.InSelfClosingTag:
              this.stateInSelfClosingTag(_8eeac2780070);
              break;

             case _4d778195d27f.InDeclaration:
              this.stateInDeclaration(_8eeac2780070);
              break;

             case _4d778195d27f.BeforeDeclaration:
              this.stateBeforeDeclaration(_8eeac2780070);
              break;

             case _4d778195d27f.BeforeComment:
              this.stateBeforeComment(_8eeac2780070);
              break;

             case _4d778195d27f.InProcessingInstruction:
              this.stateInProcessingInstruction(_8eeac2780070);
              break;

             case _4d778195d27f.InEntity:
              this.stateInEntity();
            }
            this.index++;
          }
          this.cleanup();
        }
        finish() {
          this.state === _4d778195d27f.InEntity && (this.entityDecoder.end(), this.state = this.baseState), 
          this.handleTrailingData(), this.cbs.onend();
        }
        handleTrailingData() {
          let _8eeac2780070 = this.buffer.length + this.offset;
          this.sectionStart >= _8eeac2780070 || (this.state === _4d778195d27f.InCommentLike ? this.currentSequence === _fb4ea2a6f85c.CdataEnd ? this.cbs.oncdata(this.sectionStart, _8eeac2780070, 0) : this.cbs.oncomment(this.sectionStart, _8eeac2780070, 0) : this.state === _4d778195d27f.InTagName || this.state === _4d778195d27f.BeforeAttributeName || this.state === _4d778195d27f.BeforeAttributeValue || this.state === _4d778195d27f.AfterAttributeName || this.state === _4d778195d27f.InAttributeName || this.state === _4d778195d27f.InAttributeValueSq || this.state === _4d778195d27f.InAttributeValueDq || this.state === _4d778195d27f.InAttributeValueNq || this.state === _4d778195d27f.InClosingTagName || this.cbs.ontext(this.sectionStart, _8eeac2780070));
        }
        emitCodePoint(_8eeac2780070, _d975dc811624) {
          this.baseState !== _4d778195d27f.Text && this.baseState !== _4d778195d27f.InSpecialTag ? (this.sectionStart < this.entityStart && this.cbs.onattribdata(this.sectionStart, this.entityStart), 
          this.sectionStart = this.entityStart + _d975dc811624, this.index = this.sectionStart - 1, 
          this.cbs.onattribentity(_8eeac2780070)) : (this.sectionStart < this.entityStart && this.cbs.ontext(this.sectionStart, this.entityStart), 
          this.sectionStart = this.entityStart + _d975dc811624, this.index = this.sectionStart - 1, 
          this.cbs.ontextentity(_8eeac2780070, this.sectionStart));
        }
      }
    },
    3808: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.d(_d975dc811624, {
        RJ: () => _bbaa3660c6e1,
        iX: () => _fae22887acec.i
      });
      var _fae22887acec = _ebf358b75a0b(4645);
      _ebf358b75a0b(8866), _ebf358b75a0b(5645);
      var _bbaa3660c6e1 = _ebf358b75a0b(2743);
      _ebf358b75a0b(4993);
    },
    6570: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      let _fae22887acec, _bbaa3660c6e1, _0486c8e5ad30, _c5b4b25078d6;
      _ebf358b75a0b.d(_d975dc811624, {
        P2: () => f
      });
      let o = (_8eeac2780070, _d975dc811624) => _d975dc811624.some(_d975dc811624 => _8eeac2780070 instanceof _d975dc811624), _4d778195d27f = new WeakMap, _9fc5b21180bb = new WeakMap, _6c0b4fee9c25 = new WeakMap, _fb4ea2a6f85c = {
        get(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
          if (_8eeac2780070 instanceof IDBTransaction) {
            if ("done" === _d975dc811624) return _4d778195d27f.get(_8eeac2780070);
            if ("store" === _d975dc811624) return _ebf358b75a0b.objectStoreNames[1] ? void 0 : _ebf358b75a0b.objectStore(_ebf358b75a0b.objectStoreNames[0]);
          }
          return h(_8eeac2780070[_d975dc811624]);
        },
        set: (_8eeac2780070, _d975dc811624, _ebf358b75a0b) => (_8eeac2780070[_d975dc811624] = _ebf358b75a0b, 
        !0),
        has: (_8eeac2780070, _d975dc811624) => _8eeac2780070 instanceof IDBTransaction && ("done" === _d975dc811624 || "store" === _d975dc811624) || _d975dc811624 in _8eeac2780070
      };
      function h(_8eeac2780070) {
        if (_8eeac2780070 instanceof IDBRequest) {
          let _d975dc811624;
          return _d975dc811624 = new Promise((_d975dc811624, _ebf358b75a0b) => {
            let n = () => {
              _8eeac2780070.removeEventListener("success", i), _8eeac2780070.removeEventListener("error", a);
            }, i = () => {
              _d975dc811624(h(_8eeac2780070.result)), n();
            }, a = () => {
              _ebf358b75a0b(_8eeac2780070.error), n();
            };
            _8eeac2780070.addEventListener("success", i), _8eeac2780070.addEventListener("error", a);
          }), _6c0b4fee9c25.set(_d975dc811624, _8eeac2780070), _d975dc811624;
        }
        if (_9fc5b21180bb.has(_8eeac2780070)) return _9fc5b21180bb.get(_8eeac2780070);
        let _d975dc811624 = function(_8eeac2780070) {
          if ("function" == typeof _8eeac2780070) return (_bbaa3660c6e1 || (_bbaa3660c6e1 = [ IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey ])).includes(_8eeac2780070) ? function(..._d975dc811624) {
            return _8eeac2780070.apply(p(this), _d975dc811624), h(this.request);
          } : function(..._d975dc811624) {
            return h(_8eeac2780070.apply(p(this), _d975dc811624));
          };
          return (_8eeac2780070 instanceof IDBTransaction && function(_8eeac2780070) {
            if (_4d778195d27f.has(_8eeac2780070)) return;
            let _d975dc811624 = new Promise((_d975dc811624, _ebf358b75a0b) => {
              let n = () => {
                _8eeac2780070.removeEventListener("complete", i), _8eeac2780070.removeEventListener("error", a), 
                _8eeac2780070.removeEventListener("abort", a);
              }, i = () => {
                _d975dc811624(), n();
              }, a = () => {
                _ebf358b75a0b(_8eeac2780070.error || new DOMException("AbortError", "AbortError")), 
                n();
              };
              _8eeac2780070.addEventListener("complete", i), _8eeac2780070.addEventListener("error", a), 
              _8eeac2780070.addEventListener("abort", a);
            });
            _4d778195d27f.set(_8eeac2780070, _d975dc811624);
          }(_8eeac2780070), o(_8eeac2780070, _fae22887acec || (_fae22887acec = [ IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction ]))) ? new Proxy(_8eeac2780070, _fb4ea2a6f85c) : _8eeac2780070;
        }(_8eeac2780070);
        return _d975dc811624 !== _8eeac2780070 && (_9fc5b21180bb.set(_8eeac2780070, _d975dc811624), 
        _6c0b4fee9c25.set(_d975dc811624, _8eeac2780070)), _d975dc811624;
      }
      let p = _8eeac2780070 => _6c0b4fee9c25.get(_8eeac2780070);
      function f(_8eeac2780070, _d975dc811624, {blocked: _ebf358b75a0b, upgrade: _fae22887acec, blocking: _bbaa3660c6e1, terminated: _0486c8e5ad30} = {}) {
        let _c5b4b25078d6 = indexedDB.open(_8eeac2780070, _d975dc811624), _4d778195d27f = h(_c5b4b25078d6);
        return _fae22887acec && _c5b4b25078d6.addEventListener("upgradeneeded", _8eeac2780070 => {
          _fae22887acec(h(_c5b4b25078d6.result), _8eeac2780070.oldVersion, _8eeac2780070.newVersion, h(_c5b4b25078d6.transaction), _8eeac2780070);
        }), _ebf358b75a0b && _c5b4b25078d6.addEventListener("blocked", _8eeac2780070 => _ebf358b75a0b(_8eeac2780070.oldVersion, _8eeac2780070.newVersion, _8eeac2780070)), 
        _4d778195d27f.then(_8eeac2780070 => {
          _0486c8e5ad30 && _8eeac2780070.addEventListener("close", () => _0486c8e5ad30()), 
          _bbaa3660c6e1 && _8eeac2780070.addEventListener("versionchange", _8eeac2780070 => _bbaa3660c6e1(_8eeac2780070.oldVersion, _8eeac2780070.newVersion, _8eeac2780070));
        }).catch(() => {}), _4d778195d27f;
      }
      let _fe5e93e0a07e = [ "get", "getKey", "getAll", "getAllKeys", "count" ], _11590423c4ed = [ "put", "add", "delete", "clear" ], _8a98072c4f6f = new Map;
      function b(_8eeac2780070, _d975dc811624) {
        if (!(_8eeac2780070 instanceof IDBDatabase && !(_d975dc811624 in _8eeac2780070) && "string" == typeof _d975dc811624)) return;
        if (_8a98072c4f6f.get(_d975dc811624)) return _8a98072c4f6f.get(_d975dc811624);
        let _ebf358b75a0b = _d975dc811624.replace(/FromIndex$/, ""), _fae22887acec = _d975dc811624 !== _ebf358b75a0b, _bbaa3660c6e1 = _11590423c4ed.includes(_ebf358b75a0b);
        if (!(_ebf358b75a0b in (_fae22887acec ? IDBIndex : IDBObjectStore).prototype) || !(_bbaa3660c6e1 || _fe5e93e0a07e.includes(_ebf358b75a0b))) return;
        let a = async function(_8eeac2780070, ..._d975dc811624) {
          let _0486c8e5ad30 = this.transaction(_8eeac2780070, _bbaa3660c6e1 ? "readwrite" : "readonly"), _c5b4b25078d6 = _0486c8e5ad30.store;
          return _fae22887acec && (_c5b4b25078d6 = _c5b4b25078d6.index(_d975dc811624.shift())), 
          (await Promise.all([ _c5b4b25078d6[_ebf358b75a0b](..._d975dc811624), _bbaa3660c6e1 && _0486c8e5ad30.done ]))[0];
        };
        return _8a98072c4f6f.set(_d975dc811624, a), a;
      }
      _fb4ea2a6f85c = {
        ..._0486c8e5ad30 = _fb4ea2a6f85c,
        get: (_8eeac2780070, _d975dc811624, _ebf358b75a0b) => b(_8eeac2780070, _d975dc811624) || _0486c8e5ad30.get(_8eeac2780070, _d975dc811624, _ebf358b75a0b),
        has: (_8eeac2780070, _d975dc811624) => !!b(_8eeac2780070, _d975dc811624) || _0486c8e5ad30.has(_8eeac2780070, _d975dc811624)
      };
      let _a3a9859aeb07 = [ "continue", "continuePrimaryKey", "advance" ], _53ae19a12317 = {}, _40551bb2b499 = new WeakMap, _90bc60a01687 = new WeakMap, _34a6d0f2557b = {
        get(_8eeac2780070, _d975dc811624) {
          if (!_a3a9859aeb07.includes(_d975dc811624)) return _8eeac2780070[_d975dc811624];
          let _ebf358b75a0b = _53ae19a12317[_d975dc811624];
          return _ebf358b75a0b || (_ebf358b75a0b = _53ae19a12317[_d975dc811624] = function(..._8eeac2780070) {
            _40551bb2b499.set(this, _90bc60a01687.get(this)[_d975dc811624](..._8eeac2780070));
          }), _ebf358b75a0b;
        }
      };
      async function* T(..._8eeac2780070) {
        let _d975dc811624 = this;
        if (_d975dc811624 instanceof IDBCursor || (_d975dc811624 = await _d975dc811624.openCursor(..._8eeac2780070)), 
        !_d975dc811624) return;
        let _ebf358b75a0b = new Proxy(_d975dc811624, _34a6d0f2557b);
        for (_90bc60a01687.set(_ebf358b75a0b, _d975dc811624), _6c0b4fee9c25.set(_ebf358b75a0b, p(_d975dc811624)); _d975dc811624; ) yield _ebf358b75a0b, 
        _d975dc811624 = await (_40551bb2b499.get(_ebf358b75a0b) || _d975dc811624.continue()), 
        _40551bb2b499.delete(_ebf358b75a0b);
      }
      function k(_8eeac2780070, _d975dc811624) {
        return _d975dc811624 === Symbol.asyncIterator && o(_8eeac2780070, [ IDBIndex, IDBObjectStore, IDBCursor ]) || "iterate" === _d975dc811624 && o(_8eeac2780070, [ IDBIndex, IDBObjectStore ]);
      }
      _fb4ea2a6f85c = {
        ..._c5b4b25078d6 = _fb4ea2a6f85c,
        get: (_8eeac2780070, _d975dc811624, _ebf358b75a0b) => k(_8eeac2780070, _d975dc811624) ? T : _c5b4b25078d6.get(_8eeac2780070, _d975dc811624, _ebf358b75a0b),
        has: (_8eeac2780070, _d975dc811624) => k(_8eeac2780070, _d975dc811624) || _c5b4b25078d6.has(_8eeac2780070, _d975dc811624)
      };
    },
    1652: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      _ebf358b75a0b.d(_d975dc811624, {
        N: () => n
      });
      function n() {
        return "10000000000".replace(/[018]/g, _8eeac2780070 => (_8eeac2780070 ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> _8eeac2780070 / 4).toString(16));
      }
    },
    3907: function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
      let _fae22887acec;
      _ebf358b75a0b.d(_d975dc811624, {
        LW: () => b,
        QR: () => x
      });
      var _bbaa3660c6e1 = _ebf358b75a0b(1652);
      function a(_8eeac2780070, _d975dc811624) {
        try {
          return _8eeac2780070.apply(this, _d975dc811624);
        } catch (_8eeac2780070) {
          let _d975dc811624, _ebf358b75a0b = (_d975dc811624 = _fae22887acec.__externref_table_alloc(), 
          _fae22887acec.__wbindgen_export_2.set(_d975dc811624, _8eeac2780070), _d975dc811624);
          _fae22887acec.__wbindgen_exn_store(_ebf358b75a0b);
        }
      }
      let _0486c8e5ad30 = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
      }) : {
        decode: () => {
          throw Error("TextDecoder not available");
        }
      };
      "undefined" != typeof TextDecoder && _0486c8e5ad30.decode();
      let _c5b4b25078d6 = null;
      function l() {
        return (null === _c5b4b25078d6 || 0 === _c5b4b25078d6.byteLength) && (_c5b4b25078d6 = new Uint8Array(_fae22887acec.memory.buffer)), 
        _c5b4b25078d6;
      }
      function c(_8eeac2780070, _d975dc811624) {
        return _8eeac2780070 >>>= 0, _0486c8e5ad30.decode(l().subarray(_8eeac2780070, _8eeac2780070 + _d975dc811624));
      }
      let _4d778195d27f = 0, _9fc5b21180bb = "undefined" != typeof TextEncoder ? new TextEncoder("utf-8") : {
        encode: () => {
          throw Error("TextEncoder not available");
        }
      }, _6c0b4fee9c25 = "function" == typeof _9fc5b21180bb.encodeInto ? function(_8eeac2780070, _d975dc811624) {
        return _9fc5b21180bb.encodeInto(_8eeac2780070, _d975dc811624);
      } : function(_8eeac2780070, _d975dc811624) {
        let _ebf358b75a0b = _9fc5b21180bb.encode(_8eeac2780070);
        return _d975dc811624.set(_ebf358b75a0b), {
          read: _8eeac2780070.length,
          written: _ebf358b75a0b.length
        };
      };
      function p(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
        if (void 0 === _ebf358b75a0b) {
          let _ebf358b75a0b = _9fc5b21180bb.encode(_8eeac2780070), _fae22887acec = _d975dc811624(_ebf358b75a0b.length, 1) >>> 0;
          return l().subarray(_fae22887acec, _fae22887acec + _ebf358b75a0b.length).set(_ebf358b75a0b), 
          _4d778195d27f = _ebf358b75a0b.length, _fae22887acec;
        }
        let _fae22887acec = _8eeac2780070.length, _bbaa3660c6e1 = _d975dc811624(_fae22887acec, 1) >>> 0, _0486c8e5ad30 = l(), _c5b4b25078d6 = 0;
        for (;_c5b4b25078d6 < _fae22887acec; _c5b4b25078d6++) {
          let _d975dc811624 = _8eeac2780070.charCodeAt(_c5b4b25078d6);
          if (_d975dc811624 > 127) break;
          _0486c8e5ad30[_bbaa3660c6e1 + _c5b4b25078d6] = _d975dc811624;
        }
        if (_c5b4b25078d6 !== _fae22887acec) {
          0 !== _c5b4b25078d6 && (_8eeac2780070 = _8eeac2780070.slice(_c5b4b25078d6)), _bbaa3660c6e1 = _ebf358b75a0b(_bbaa3660c6e1, _fae22887acec, _fae22887acec = _c5b4b25078d6 + 3 * _8eeac2780070.length, 1) >>> 0;
          let _d975dc811624 = _6c0b4fee9c25(_8eeac2780070, l().subarray(_bbaa3660c6e1 + _c5b4b25078d6, _bbaa3660c6e1 + _fae22887acec));
          _c5b4b25078d6 += _d975dc811624.written, _bbaa3660c6e1 = _ebf358b75a0b(_bbaa3660c6e1, _fae22887acec, _c5b4b25078d6, 1) >>> 0;
        }
        return _4d778195d27f = _c5b4b25078d6, _bbaa3660c6e1;
      }
      let _fb4ea2a6f85c = null;
      function g() {
        return (null === _fb4ea2a6f85c || !0 === _fb4ea2a6f85c.buffer.detached || void 0 === _fb4ea2a6f85c.buffer.detached && _fb4ea2a6f85c.buffer !== _fae22887acec.memory.buffer) && (_fb4ea2a6f85c = new DataView(_fae22887acec.memory.buffer)), 
        _fb4ea2a6f85c;
      }
      function m(_8eeac2780070) {
        let _d975dc811624 = _fae22887acec.__wbindgen_export_2.get(_8eeac2780070);
        return _fae22887acec.__externref_table_dealloc(_8eeac2780070), _d975dc811624;
      }
      let _fe5e93e0a07e = "undefined" == typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry(_8eeac2780070 => _fae22887acec.__wbg_rewriter_free(_8eeac2780070 >>> 0, 1));
      class b {
        __destroy_into_raw() {
          let _8eeac2780070 = this.__wbg_ptr;
          return this.__wbg_ptr = 0, _fe5e93e0a07e.unregister(this), _8eeac2780070;
        }
        free() {
          let _8eeac2780070 = this.__destroy_into_raw();
          _fae22887acec.__wbg_rewriter_free(_8eeac2780070, 0);
        }
        rewrite_js(_8eeac2780070, _d975dc811624, _ebf358b75a0b, _bbaa3660c6e1) {
          let _0486c8e5ad30 = p(_8eeac2780070, _fae22887acec.__wbindgen_malloc, _fae22887acec.__wbindgen_realloc), _c5b4b25078d6 = _4d778195d27f, _9fc5b21180bb = p(_d975dc811624, _fae22887acec.__wbindgen_malloc, _fae22887acec.__wbindgen_realloc), _6c0b4fee9c25 = _4d778195d27f, _fb4ea2a6f85c = p(_ebf358b75a0b, _fae22887acec.__wbindgen_malloc, _fae22887acec.__wbindgen_realloc), _fe5e93e0a07e = _4d778195d27f, _11590423c4ed = _fae22887acec.rewriter_rewrite_js(this.__wbg_ptr, _0486c8e5ad30, _c5b4b25078d6, _9fc5b21180bb, _6c0b4fee9c25, _fb4ea2a6f85c, _fe5e93e0a07e, _bbaa3660c6e1);
          if (_11590423c4ed[2]) throw m(_11590423c4ed[1]);
          return m(_11590423c4ed[0]);
        }
        rewrite_js_bytes(_8eeac2780070, _d975dc811624, _ebf358b75a0b, _bbaa3660c6e1) {
          let _0486c8e5ad30, _c5b4b25078d6 = (_0486c8e5ad30 = (0, _fae22887acec.__wbindgen_malloc)(+_8eeac2780070.length, 1) >>> 0, 
          l().set(_8eeac2780070, _0486c8e5ad30 / 1), _4d778195d27f = _8eeac2780070.length, 
          _0486c8e5ad30), _9fc5b21180bb = _4d778195d27f, _6c0b4fee9c25 = p(_d975dc811624, _fae22887acec.__wbindgen_malloc, _fae22887acec.__wbindgen_realloc), _fb4ea2a6f85c = _4d778195d27f, _fe5e93e0a07e = p(_ebf358b75a0b, _fae22887acec.__wbindgen_malloc, _fae22887acec.__wbindgen_realloc), _11590423c4ed = _4d778195d27f, _8a98072c4f6f = _fae22887acec.rewriter_rewrite_js_bytes(this.__wbg_ptr, _c5b4b25078d6, _9fc5b21180bb, _6c0b4fee9c25, _fb4ea2a6f85c, _fe5e93e0a07e, _11590423c4ed, _bbaa3660c6e1);
          if (_8a98072c4f6f[2]) throw m(_8a98072c4f6f[1]);
          return m(_8a98072c4f6f[0]);
        }
        constructor(_8eeac2780070) {
          const _d975dc811624 = _fae22887acec.rewriter_new(_8eeac2780070);
          if (_d975dc811624[2]) throw m(_d975dc811624[1]);
          return this.__wbg_ptr = _d975dc811624[0] >>> 0, _fe5e93e0a07e.register(this, this.__wbg_ptr, this), 
          this;
        }
      }
      async function w(_8eeac2780070, _d975dc811624) {
        if ("function" == typeof Response && _8eeac2780070 instanceof Response) {
          if ("function" == typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(_8eeac2780070, _d975dc811624);
          } catch (_d975dc811624) {
            if ("application/wasm" != _8eeac2780070.headers.get("Content-Type")) console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", _d975dc811624); else throw _d975dc811624;
          }
          let _ebf358b75a0b = await _8eeac2780070.arrayBuffer();
          return await WebAssembly.instantiate(_ebf358b75a0b, _d975dc811624);
        }
        {
          let _ebf358b75a0b = await WebAssembly.instantiate(_8eeac2780070, _d975dc811624);
          return _ebf358b75a0b instanceof WebAssembly.Instance ? {
            instance: _ebf358b75a0b,
            module: _8eeac2780070
          } : _ebf358b75a0b;
        }
      }
      function S() {
        let _8eeac2780070 = {};
        return _8eeac2780070.wbg = {}, _8eeac2780070.wbg.__wbg_buffer_609cc3eee51ed158 = function(_8eeac2780070) {
          return _8eeac2780070.buffer;
        }, _8eeac2780070.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
          return a(function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
            return _8eeac2780070.call(_d975dc811624, _ebf358b75a0b);
          }, arguments);
        }, _8eeac2780070.wbg.__wbg_call_833bed5770ea2041 = function() {
          return a(function(_8eeac2780070, _d975dc811624, _ebf358b75a0b, _fae22887acec) {
            return _8eeac2780070.call(_d975dc811624, _ebf358b75a0b, _fae22887acec);
          }, arguments);
        }, _8eeac2780070.wbg.__wbg_get_67b2ba62fc30de12 = function() {
          return a(function(_8eeac2780070, _d975dc811624) {
            return Reflect.get(_8eeac2780070, _d975dc811624);
          }, arguments);
        }, _8eeac2780070.wbg.__wbg_new_405e22f390576ce2 = function() {
          return {};
        }, _8eeac2780070.wbg.__wbg_new_78feb108b6472713 = function() {
          return [];
        }, _8eeac2780070.wbg.__wbg_new_9ffbe0a71eff35e3 = function() {
          return a(function(_8eeac2780070, _d975dc811624) {
            return new URL(c(_8eeac2780070, _d975dc811624));
          }, arguments);
        }, _8eeac2780070.wbg.__wbg_new_a12002a7f91c75be = function(_8eeac2780070) {
          return new Uint8Array(_8eeac2780070);
        }, _8eeac2780070.wbg.__wbg_newwithbase_161c299e7a34e2eb = function() {
          return a(function(_8eeac2780070, _d975dc811624, _ebf358b75a0b, _fae22887acec) {
            return new URL(c(_8eeac2780070, _d975dc811624), c(_ebf358b75a0b, _fae22887acec));
          }, arguments);
        }, _8eeac2780070.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
          return new Uint8Array(_8eeac2780070, _d975dc811624 >>> 0, _ebf358b75a0b >>> 0);
        }, _8eeac2780070.wbg.__wbg_scramtag_3a255d78b157986d = function(_8eeac2780070) {
          let _d975dc811624 = p((0, _bbaa3660c6e1.N)(), _fae22887acec.__wbindgen_malloc, _fae22887acec.__wbindgen_realloc), _ebf358b75a0b = _4d778195d27f;
          g().setInt32(_8eeac2780070 + 4, _ebf358b75a0b, !0), g().setInt32(_8eeac2780070 + 0, _d975dc811624, !0);
        }, _8eeac2780070.wbg.__wbg_set_bb8cecf6a62b9f46 = function() {
          return a(function(_8eeac2780070, _d975dc811624, _ebf358b75a0b) {
            return Reflect.set(_8eeac2780070, _d975dc811624, _ebf358b75a0b);
          }, arguments);
        }, _8eeac2780070.wbg.__wbg_toString_5285597960676b7b = function(_8eeac2780070) {
          return _8eeac2780070.toString();
        }, _8eeac2780070.wbg.__wbg_toString_c813bbd34d063839 = function(_8eeac2780070) {
          return _8eeac2780070.toString();
        }, _8eeac2780070.wbg.__wbindgen_boolean_get = function(_8eeac2780070) {
          return "boolean" == typeof _8eeac2780070 ? +!!_8eeac2780070 : 2;
        }, _8eeac2780070.wbg.__wbindgen_error_new = function(_8eeac2780070, _d975dc811624) {
          return Error(c(_8eeac2780070, _d975dc811624));
        }, _8eeac2780070.wbg.__wbindgen_init_externref_table = function() {
          let _8eeac2780070 = _fae22887acec.__wbindgen_export_2, _d975dc811624 = _8eeac2780070.grow(4);
          _8eeac2780070.set(0, void 0), _8eeac2780070.set(_d975dc811624 + 0, void 0), _8eeac2780070.set(_d975dc811624 + 1, null), 
          _8eeac2780070.set(_d975dc811624 + 2, !0), _8eeac2780070.set(_d975dc811624 + 3, !1);
        }, _8eeac2780070.wbg.__wbindgen_is_function = function(_8eeac2780070) {
          return "function" == typeof _8eeac2780070;
        }, _8eeac2780070.wbg.__wbindgen_memory = function() {
          return _fae22887acec.memory;
        }, _8eeac2780070.wbg.__wbindgen_string_get = function(_8eeac2780070, _d975dc811624) {
          let _ebf358b75a0b = "string" == typeof _d975dc811624 ? _d975dc811624 : void 0;
          var _bbaa3660c6e1 = null == _ebf358b75a0b ? 0 : p(_ebf358b75a0b, _fae22887acec.__wbindgen_malloc, _fae22887acec.__wbindgen_realloc), _0486c8e5ad30 = _4d778195d27f;
          g().setInt32(_8eeac2780070 + 4, _0486c8e5ad30, !0), g().setInt32(_8eeac2780070 + 0, _bbaa3660c6e1, !0);
        }, _8eeac2780070.wbg.__wbindgen_string_new = function(_8eeac2780070, _d975dc811624) {
          return c(_8eeac2780070, _d975dc811624);
        }, _8eeac2780070.wbg.__wbindgen_throw = function(_8eeac2780070, _d975dc811624) {
          throw Error(c(_8eeac2780070, _d975dc811624));
        }, _8eeac2780070;
      }
      function v(_8eeac2780070, _d975dc811624) {
        return _fae22887acec = _8eeac2780070.exports, E.__wbindgen_wasm_module = _d975dc811624, 
        _fb4ea2a6f85c = null, _c5b4b25078d6 = null, _fae22887acec.__wbindgen_start(), _fae22887acec;
      }
      function x(_8eeac2780070) {
        if (void 0 !== _fae22887acec) return _fae22887acec;
        void 0 !== _8eeac2780070 && (Object.getPrototypeOf(_8eeac2780070) === Object.prototype ? ({module: _8eeac2780070} = _8eeac2780070) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
        let _d975dc811624 = S();
        return _8eeac2780070 instanceof WebAssembly.Module || (_8eeac2780070 = new WebAssembly.Module(_8eeac2780070)), 
        v(new WebAssembly.Instance(_8eeac2780070, _d975dc811624), _8eeac2780070);
      }
      async function E(_8eeac2780070) {
        if (void 0 !== _fae22887acec) return _fae22887acec;
        void 0 !== _8eeac2780070 && (Object.getPrototypeOf(_8eeac2780070) === Object.prototype ? ({module_or_path: _8eeac2780070} = _8eeac2780070) : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), 
        void 0 === _8eeac2780070 && (_8eeac2780070 = new URL("wasm_bg.wasm", ""));
        let _d975dc811624 = S();
        ("string" == typeof _8eeac2780070 || "function" == typeof Request && _8eeac2780070 instanceof Request || "function" == typeof URL && _8eeac2780070 instanceof URL) && (_8eeac2780070 = fetch(_8eeac2780070));
        let {instance: _ebf358b75a0b, module: _bbaa3660c6e1} = await w(await _8eeac2780070, _d975dc811624);
        return v(_ebf358b75a0b, _bbaa3660c6e1);
      }
    }
  }, _d975dc811624 = {};
  function r(_ebf358b75a0b) {
    var _fae22887acec = _d975dc811624[_ebf358b75a0b];
    if (void 0 !== _fae22887acec) return _fae22887acec.exports;
    var _bbaa3660c6e1 = _d975dc811624[_ebf358b75a0b] = {
      exports: {}
    };
    return _8eeac2780070[_ebf358b75a0b](_bbaa3660c6e1, _bbaa3660c6e1.exports, r), _bbaa3660c6e1.exports;
  }
  r.n = _8eeac2780070 => {
    var _d975dc811624 = _8eeac2780070 && _8eeac2780070.__esModule ? () => _8eeac2780070.default : () => _8eeac2780070;
    return r.d(_d975dc811624, {
      a: _d975dc811624
    }), _d975dc811624;
  }, r.d = (_8eeac2780070, _d975dc811624) => {
    for (var _ebf358b75a0b in _d975dc811624) r.o(_d975dc811624, _ebf358b75a0b) && !r.o(_8eeac2780070, _ebf358b75a0b) && Object.defineProperty(_8eeac2780070, _ebf358b75a0b, {
      enumerable: !0,
      get: _d975dc811624[_ebf358b75a0b]
    });
  }, r.o = (_8eeac2780070, _d975dc811624) => Object.prototype.hasOwnProperty.call(_8eeac2780070, _d975dc811624), 
  r.r = _8eeac2780070 => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(_8eeac2780070, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(_8eeac2780070, "__esModule", {
      value: !0
    });
  }, globalThis.$studyjetRequire = function(_8eeac2780070) {
    return r(409)(_8eeac2780070);
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
