(() => {
  var _f68023e5066c = {
    4322: function(_f68023e5066c) {
      var _34f246cde5be = {
        decodeValues: !0,
        map: !1,
        silent: !1
      };
      function r(_f68023e5066c) {
        return "string" == typeof _f68023e5066c && !!_f68023e5066c.trim();
      }
      function n(_f68023e5066c, _63a45e116e67) {
        var _68051092d66a, _3d842a962905, _2dbb4876c500, _4547843d0a40, _bed2b259674e = _f68023e5066c.split(";").filter(r), _d73671e3fec6 = (_68051092d66a = _bed2b259674e.shift(), 
        _3d842a962905 = "", _2dbb4876c500 = "", (_4547843d0a40 = _68051092d66a.split("=")).length > 1 ? (_3d842a962905 = _4547843d0a40.shift(), 
        _2dbb4876c500 = _4547843d0a40.join("=")) : _2dbb4876c500 = _68051092d66a, {
          name: _3d842a962905,
          value: _2dbb4876c500
        }), _ef72ad0b9c92 = _d73671e3fec6.name, _44f0b1ed911f = _d73671e3fec6.value;
        _63a45e116e67 = _63a45e116e67 ? Object.assign({}, _34f246cde5be, _63a45e116e67) : _34f246cde5be;
        try {
          _44f0b1ed911f = _63a45e116e67.decodeValues ? decodeURIComponent(_44f0b1ed911f) : _44f0b1ed911f;
        } catch (_f68023e5066c) {
          console.error("set-cookie-parser encountered an error while decoding a cookie with value '" + _44f0b1ed911f + "'. Set options.decodeValues to false to disable this feature.", _f68023e5066c);
        }
        var _0a3b7a57b594 = {
          name: _ef72ad0b9c92,
          value: _44f0b1ed911f
        };
        return _bed2b259674e.forEach(function(_f68023e5066c) {
          var _34f246cde5be = _f68023e5066c.split("="), _63a45e116e67 = _34f246cde5be.shift().trimLeft().toLowerCase(), _68051092d66a = _34f246cde5be.join("=");
          "expires" === _63a45e116e67 ? _0a3b7a57b594.expires = new Date(_68051092d66a) : "max-age" === _63a45e116e67 ? _0a3b7a57b594.maxAge = parseInt(_68051092d66a, 10) : "secure" === _63a45e116e67 ? _0a3b7a57b594.secure = !0 : "httponly" === _63a45e116e67 ? _0a3b7a57b594.httpOnly = !0 : "samesite" === _63a45e116e67 ? _0a3b7a57b594.sameSite = _68051092d66a : "partitioned" === _63a45e116e67 ? _0a3b7a57b594.partitioned = !0 : _0a3b7a57b594[_63a45e116e67] = _68051092d66a;
        }), _0a3b7a57b594;
      }
      function i(_f68023e5066c, _63a45e116e67) {
        if (_63a45e116e67 = _63a45e116e67 ? Object.assign({}, _34f246cde5be, _63a45e116e67) : _34f246cde5be, 
        !_f68023e5066c) if (!_63a45e116e67.map) return []; else return {};
        if (_f68023e5066c.headers) if ("function" == typeof _f68023e5066c.headers.getSetCookie) _f68023e5066c = _f68023e5066c.headers.getSetCookie(); else if (_f68023e5066c.headers["set-cookie"]) _f68023e5066c = _f68023e5066c.headers["set-cookie"]; else {
          var _68051092d66a = _f68023e5066c.headers[Object.keys(_f68023e5066c.headers).find(function(_f68023e5066c) {
            return "set-cookie" === _f68023e5066c.toLowerCase();
          })];
          _68051092d66a || !_f68023e5066c.headers.cookie || _63a45e116e67.silent || console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."), 
          _f68023e5066c = _68051092d66a;
        }
        return (Array.isArray(_f68023e5066c) || (_f68023e5066c = [ _f68023e5066c ]), _63a45e116e67.map) ? _f68023e5066c.filter(r).reduce(function(_f68023e5066c, _34f246cde5be) {
          var _68051092d66a = n(_34f246cde5be, _63a45e116e67);
          return _f68023e5066c[_68051092d66a.name] = _68051092d66a, _f68023e5066c;
        }, {}) : _f68023e5066c.filter(r).map(function(_f68023e5066c) {
          return n(_f68023e5066c, _63a45e116e67);
        });
      }
      _f68023e5066c.exports = i, _f68023e5066c.exports.parse = i, _f68023e5066c.exports.parseString = n, 
      _f68023e5066c.exports.splitCookiesString = function(_f68023e5066c) {
        if (Array.isArray(_f68023e5066c)) return _f68023e5066c;
        if ("string" != typeof _f68023e5066c) return [];
        var _34f246cde5be, _63a45e116e67, _68051092d66a, _3d842a962905, _2dbb4876c500, _4547843d0a40 = [], _bed2b259674e = 0;
        function l() {
          for (;_bed2b259674e < _f68023e5066c.length && /\s/.test(_f68023e5066c.charAt(_bed2b259674e)); ) _bed2b259674e += 1;
          return _bed2b259674e < _f68023e5066c.length;
        }
        for (;_bed2b259674e < _f68023e5066c.length; ) {
          for (_34f246cde5be = _bed2b259674e, _2dbb4876c500 = !1; l(); ) if ("," === (_63a45e116e67 = _f68023e5066c.charAt(_bed2b259674e))) {
            for (_68051092d66a = _bed2b259674e, _bed2b259674e += 1, l(), _3d842a962905 = _bed2b259674e; _bed2b259674e < _f68023e5066c.length && "=" !== (_63a45e116e67 = _f68023e5066c.charAt(_bed2b259674e)) && ";" !== _63a45e116e67 && "," !== _63a45e116e67; ) _bed2b259674e += 1;
            _bed2b259674e < _f68023e5066c.length && "=" === _f68023e5066c.charAt(_bed2b259674e) ? (_2dbb4876c500 = !0, 
            _bed2b259674e = _3d842a962905, _4547843d0a40.push(_f68023e5066c.substring(_34f246cde5be, _68051092d66a)), 
            _34f246cde5be = _bed2b259674e) : _bed2b259674e = _68051092d66a + 1;
          } else _bed2b259674e += 1;
          (!_2dbb4876c500 || _bed2b259674e >= _f68023e5066c.length) && _4547843d0a40.push(_f68023e5066c.substring(_34f246cde5be, _f68023e5066c.length));
        }
        return _4547843d0a40;
      };
    },
    7302: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      var _68051092d66a = {
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
      function i(_f68023e5066c) {
        return _63a45e116e67(a(_f68023e5066c));
      }
      function a(_f68023e5066c) {
        if (!_63a45e116e67.o(_68051092d66a, _f68023e5066c)) {
          var _34f246cde5be = Error("Cannot find module '" + _f68023e5066c + "'");
          throw _34f246cde5be.code = "MODULE_NOT_FOUND", _34f246cde5be;
        }
        return _68051092d66a[_f68023e5066c];
      }
      i.keys = function() {
        return Object.keys(_68051092d66a);
      }, i.resolve = a, _f68023e5066c.exports = i, i.id = 7302;
    },
    409: function(_f68023e5066c) {
      function t(_f68023e5066c) {
        var _34f246cde5be = Error("Cannot find module '" + _f68023e5066c + "'");
        throw _34f246cde5be.code = "MODULE_NOT_FOUND", _34f246cde5be;
      }
      t.keys = () => [], t.resolve = t, t.id = 409, _f68023e5066c.exports = t;
    },
    336: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        StudyJetClient: () => g
      });
      var _68051092d66a = _63a45e116e67(2794), _3d842a962905 = _63a45e116e67(94), _2dbb4876c500 = _63a45e116e67(3696), _4547843d0a40 = _63a45e116e67(581), _bed2b259674e = _63a45e116e67(1862), _d73671e3fec6 = _63a45e116e67(1472), _ef72ad0b9c92 = _63a45e116e67(37), _44f0b1ed911f = _63a45e116e67(3831), _0a3b7a57b594 = _63a45e116e67(1323), _3644bb2f5311 = _63a45e116e67(1229), _9acaff0e6a8f = _63a45e116e67(4110), _4a3d65fa17db = _63a45e116e67(8665).A;
      class g {
        global;
        locationProxy;
        serviceWorker;
        bare;
        natives;
        descriptors;
        wrapfn;
        cookieStore=new _44f0b1ed911f.k;
        eventcallbacks=new Map;
        meta;
        box;
        constructor(_f68023e5066c) {
          if (this.global = _f68023e5066c, _68051092d66a.pX in _f68023e5066c) throw console.error("attempted to initialize a studyjet client, but one is already loaded - this is very bad"), 
          Error();
          if (_0a3b7a57b594.iswindow) {
            try {
              _68051092d66a.pX in _f68023e5066c.parent && (this.box = _f68023e5066c.parent[_68051092d66a.pX].box);
            } catch {}
            try {
              _68051092d66a.pX in _f68023e5066c.top && (this.box = _f68023e5066c.top[_68051092d66a.pX].box);
            } catch {}
            try {
              _f68023e5066c.opener && _68051092d66a.pX in _f68023e5066c.opener && (this.box = _f68023e5066c.opener[_68051092d66a.pX].box);
            } catch {}
            this.box || (_4a3d65fa17db.warn("Creating SingletonBox"), this.box = new _3644bb2f5311.SingletonBox(this));
          } else this.box = new _3644bb2f5311.SingletonBox(this);
          this.box.registerClient(this, _f68023e5066c), _0a3b7a57b594.iswindow ? this.bare = new _9acaff0e6a8f.Ay : this.bare = new _9acaff0e6a8f.Ay(new Promise(_f68023e5066c => {
            addEventListener("message", ({data: _34f246cde5be}) => {
              "object" == typeof _34f246cde5be && "$studyjet$type" in _34f246cde5be && "baremuxinit" === _34f246cde5be.$studyjet$type && _f68023e5066c(_34f246cde5be.port);
            });
          })), this.serviceWorker = this.global.navigator.serviceWorker, _0a3b7a57b594.iswindow && (_f68023e5066c.document[_68051092d66a.pX] = this), 
          this.wrapfn = (0, _4547843d0a40.createWrapFn)(this, _f68023e5066c), this.natives = {
            store: new Proxy({}, {
              get: (_f68023e5066c, _34f246cde5be) => {
                if (_34f246cde5be in _f68023e5066c) return _f68023e5066c[_34f246cde5be];
                let _63a45e116e67 = _34f246cde5be.split("."), _68051092d66a = _63a45e116e67.pop(), _3d842a962905 = _63a45e116e67.reduce((_f68023e5066c, _34f246cde5be) => _f68023e5066c?.[_34f246cde5be], this.global);
                if (!_3d842a962905) return;
                let _2dbb4876c500 = Reflect.get(_3d842a962905, _68051092d66a);
                return _f68023e5066c[_34f246cde5be] = _2dbb4876c500, _f68023e5066c[_34f246cde5be];
              }
            }),
            construct(_f68023e5066c, ..._34f246cde5be) {
              let _63a45e116e67 = this.store[_f68023e5066c];
              return _63a45e116e67 ? new _63a45e116e67(..._34f246cde5be) : null;
            },
            call(_f68023e5066c, _34f246cde5be, ..._63a45e116e67) {
              let _68051092d66a = this.store[_f68023e5066c];
              return _68051092d66a ? _68051092d66a.call(_34f246cde5be, ..._63a45e116e67) : null;
            }
          }, this.descriptors = {
            store: new Proxy({}, {
              get: (_f68023e5066c, _63a45e116e67) => {
                if (_63a45e116e67 in _f68023e5066c) return _f68023e5066c[_63a45e116e67];
                let _68051092d66a = _63a45e116e67.split("."), _3d842a962905 = _68051092d66a.pop(), _2dbb4876c500 = _68051092d66a.reduce((_f68023e5066c, _34f246cde5be) => _f68023e5066c?.[_34f246cde5be], this.global);
                if (!_2dbb4876c500) return;
                let _4547843d0a40 = _34f246cde5be.natives.call("Object.getOwnPropertyDescriptor", null, _2dbb4876c500, _3d842a962905);
                return _f68023e5066c[_63a45e116e67] = _4547843d0a40, _f68023e5066c[_63a45e116e67];
              }
            }),
            get(_f68023e5066c, _34f246cde5be) {
              let _63a45e116e67 = this.store[_f68023e5066c];
              return _63a45e116e67 ? _63a45e116e67.get.call(_34f246cde5be) : null;
            },
            set(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
              let _68051092d66a = this.store[_f68023e5066c];
              if (!_68051092d66a) return null;
              _68051092d66a.set.call(_34f246cde5be, _63a45e116e67);
            }
          };
          const _34f246cde5be = this;
          this.meta = {
            get origin() {
              return _34f246cde5be.url;
            },
            get base() {
              if (_0a3b7a57b594.iswindow) {
                const _f68023e5066c = _34f246cde5be.natives.call("Document.prototype.querySelector", _34f246cde5be.global.document, "base");
                if (_f68023e5066c) {
                  let _63a45e116e67 = _f68023e5066c.getAttribute("href");
                  if (!_63a45e116e67) return _34f246cde5be.url;
                  const _68051092d66a = _63a45e116e67.indexOf("#");
                  if (!(_63a45e116e67 = _63a45e116e67.substring(0, -1 === _68051092d66a ? void 0 : _68051092d66a))) return _34f246cde5be.url;
                  return new URL(_63a45e116e67, _34f246cde5be.url.origin);
                }
              }
              return _34f246cde5be.url;
            },
            get topFrameName() {
              if (!_0a3b7a57b594.iswindow) throw Error("topFrameName was called from a worker?");
              let _f68023e5066c = _34f246cde5be.global;
              if (_f68023e5066c.parent.window == _f68023e5066c.window) return null;
              for (;_f68023e5066c.parent.window !== _f68023e5066c.window && _f68023e5066c.parent.window[_68051092d66a.pX]; ) _f68023e5066c = _f68023e5066c.parent.window;
              const _63a45e116e67 = _f68023e5066c[_68051092d66a.pX].descriptors.get("window.frameElement", _f68023e5066c);
              if (!_63a45e116e67) return null;
              if (!_63a45e116e67.name) return console.error("YOU NEED TO USE `new StudyJetFrame()`! DIRECT IFRAMES WILL NOT WORK"), 
              null;
              return _63a45e116e67.name;
            },
            get parentFrameName() {
              if (!_0a3b7a57b594.iswindow) throw Error("parentFrameName was called from a worker?");
              if (_34f246cde5be.global.parent.window == _34f246cde5be.global.window) return null;
              let _f68023e5066c = _34f246cde5be.global.parent.window;
              if (_f68023e5066c[_68051092d66a.pX]) {
                const _34f246cde5be = _f68023e5066c[_68051092d66a.pX].descriptors.get("window.frameElement", _f68023e5066c);
                if (!_34f246cde5be) return null;
                if (!_34f246cde5be.name) return console.error("YOU NEED TO USE `new StudyJetFrame()`! DIRECT IFRAMES WILL NOT WORK"), 
                null;
                return _34f246cde5be.name;
              }
              {
                const _f68023e5066c = _34f246cde5be.descriptors.get("window.frameElement", _34f246cde5be.global);
                if (!_f68023e5066c.name) return console.error("YOU NEED TO USE `new StudyJetFrame()`! DIRECT IFRAMES WILL NOT WORK"), 
                null;
                return _f68023e5066c.name;
              }
            }
          }, this.locationProxy = (0, _2dbb4876c500.createLocationProxy)(this, _f68023e5066c), 
          _f68023e5066c[_68051092d66a.pX] = this;
        }
        get frame() {
          if (!_0a3b7a57b594.iswindow) return null;
          let _f68023e5066c = this.descriptors.get("window.frameElement", this.global);
          if (!_f68023e5066c) return null;
          let _34f246cde5be = _f68023e5066c[_68051092d66a.zr];
          if (!_34f246cde5be) {
            let _f68023e5066c = this.global.window;
            for (;_f68023e5066c.parent !== _f68023e5066c; ) {
              let _34f246cde5be = _f68023e5066c[_68051092d66a.pX].descriptors.get("window.frameElement", _f68023e5066c);
              if (!_34f246cde5be) return null;
              if (_34f246cde5be && _34f246cde5be[_68051092d66a.zr]) return _34f246cde5be[_68051092d66a.zr];
              _f68023e5066c = _f68023e5066c.parent.window;
            }
          }
          return _34f246cde5be;
        }
        get isSubframe() {
          if (!_0a3b7a57b594.iswindow) return !1;
          let _f68023e5066c = this.descriptors.get("window.frameElement", this.global);
          return !!_f68023e5066c && !_f68023e5066c[_68051092d66a.zr];
        }
        loadcookies(_f68023e5066c) {
          this.cookieStore.load(_f68023e5066c);
        }
        hook() {
          let _f68023e5066c = _63a45e116e67(7302), _34f246cde5be = [];
          for (let _63a45e116e67 of _f68023e5066c.keys()) {
            let _68051092d66a = _f68023e5066c(_63a45e116e67);
            _63a45e116e67.endsWith(".ts") && (_63a45e116e67.startsWith("./dom/") && "window" in this.global || _63a45e116e67.startsWith("./worker/") && "WorkerGlobalScope" in this.global || _63a45e116e67.startsWith("./shared/")) && _34f246cde5be.push(_68051092d66a);
          }
          for (let _f68023e5066c of (_34f246cde5be.sort((_f68023e5066c, _34f246cde5be) => (_f68023e5066c.order || 0) - (_34f246cde5be.order || 0)), 
          _34f246cde5be)) !_f68023e5066c.enabled || _f68023e5066c.enabled(this) ? _f68023e5066c.default(this, this.global) : _f68023e5066c.disabled && _f68023e5066c.disabled(this, this.global);
        }
        get url() {
          return new URL((0, _d73671e3fec6.v2)(this.global.location.href));
        }
        set url(_f68023e5066c) {
          _f68023e5066c instanceof URL && (_f68023e5066c = _f68023e5066c.toString());
          let _34f246cde5be = new _bed2b259674e.NavigateEvent(_f68023e5066c);
          this.frame && this.frame.dispatchEvent(_34f246cde5be), _34f246cde5be.defaultPrevented || (this.global.location.href = (0, 
          _d73671e3fec6.Oy)(_34f246cde5be.url, this.meta));
        }
        Proxy(_f68023e5066c, _34f246cde5be) {
          if (Array.isArray(_f68023e5066c)) {
            for (let _63a45e116e67 of _f68023e5066c) this.Proxy(_63a45e116e67, _34f246cde5be);
            return;
          }
          let _63a45e116e67 = _f68023e5066c.split("."), _68051092d66a = _63a45e116e67.pop(), _3d842a962905 = _63a45e116e67.reduce((_f68023e5066c, _34f246cde5be) => _f68023e5066c?.[_34f246cde5be], this.global);
          if (_3d842a962905) {
            if (!(_f68023e5066c in this.natives.store)) {
              let _34f246cde5be = Reflect.get(_3d842a962905, _68051092d66a);
              this.natives.store[_f68023e5066c] = _34f246cde5be;
            }
            this.RawProxy(_3d842a962905, _68051092d66a, _34f246cde5be);
          }
        }
        RawProxy(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
          if (!_f68023e5066c || !_34f246cde5be || !Reflect.has(_f68023e5066c, _34f246cde5be)) return;
          let _68051092d66a = Reflect.get(_f68023e5066c, _34f246cde5be);
          delete _f68023e5066c[_34f246cde5be];
          let _2dbb4876c500 = {};
          _63a45e116e67.construct && (_2dbb4876c500.construct = function(_f68023e5066c, _34f246cde5be, _68051092d66a) {
            let _3d842a962905, _2dbb4876c500 = !1, _4547843d0a40 = {
              fn: _f68023e5066c,
              this: null,
              args: _34f246cde5be,
              newTarget: _68051092d66a,
              return: _f68023e5066c => {
                _2dbb4876c500 = !0, _3d842a962905 = _f68023e5066c;
              },
              call: () => (_2dbb4876c500 = !0, _3d842a962905 = Reflect.construct(_4547843d0a40.fn, _4547843d0a40.args, _4547843d0a40.newTarget))
            };
            return (_63a45e116e67.construct(_4547843d0a40), _2dbb4876c500) ? _3d842a962905 : Reflect.construct(_4547843d0a40.fn, _4547843d0a40.args, _4547843d0a40.newTarget);
          }), _63a45e116e67.apply && (_2dbb4876c500.apply = (_f68023e5066c, _34f246cde5be, _68051092d66a) => {
            let _3d842a962905, _2dbb4876c500 = !1, _4547843d0a40 = {
              fn: _f68023e5066c,
              this: _34f246cde5be,
              args: _68051092d66a,
              newTarget: null,
              return: _f68023e5066c => {
                _2dbb4876c500 = !0, _3d842a962905 = _f68023e5066c;
              },
              call: () => (_2dbb4876c500 = !0, _3d842a962905 = Reflect.apply(_4547843d0a40.fn, _4547843d0a40.this, _4547843d0a40.args))
            }, _bed2b259674e = Error.prepareStackTrace;
            Error.prepareStackTrace = function(_f68023e5066c, _34f246cde5be) {
              if (_34f246cde5be[0].getFileName() && !_34f246cde5be[0].getFileName().startsWith(location.origin + _ef72ad0b9c92.$W.prefix)) return {
                stack: _f68023e5066c.stack
              };
            };
            try {
              _63a45e116e67.apply(_4547843d0a40);
            } catch (_f68023e5066c) {
              if (_f68023e5066c instanceof Error) if (_f68023e5066c.stack instanceof Object) {
                if (_f68023e5066c.stack = _f68023e5066c.stack.stack, console.error("ERROR FROM STUDYJET INTERNALS", _f68023e5066c), 
                !(0, _ef72ad0b9c92.U5)("allowFailedIntercepts", this.url)) throw _f68023e5066c;
              } else throw _f68023e5066c; else throw _f68023e5066c;
            }
            return (Error.prepareStackTrace = _bed2b259674e, _2dbb4876c500) ? _3d842a962905 : Reflect.apply(_4547843d0a40.fn, _4547843d0a40.this, _4547843d0a40.args);
          }), _2dbb4876c500.getOwnPropertyDescriptor = _3d842a962905.getOwnPropertyDescriptorHandler, 
          _f68023e5066c[_34f246cde5be] = new Proxy(_68051092d66a, _2dbb4876c500);
        }
        Trap(_f68023e5066c, _34f246cde5be) {
          if (Array.isArray(_f68023e5066c)) {
            for (let _63a45e116e67 of _f68023e5066c) this.Trap(_63a45e116e67, _34f246cde5be);
            return;
          }
          let _63a45e116e67 = _f68023e5066c.split("."), _68051092d66a = _63a45e116e67.pop(), _3d842a962905 = _63a45e116e67.reduce((_f68023e5066c, _34f246cde5be) => _f68023e5066c?.[_34f246cde5be], this.global);
          if (!_3d842a962905) return;
          let _2dbb4876c500 = this.natives.call("Object.getOwnPropertyDescriptor", null, _3d842a962905, _68051092d66a);
          return this.descriptors.store[_f68023e5066c] = _2dbb4876c500, this.RawTrap(_3d842a962905, _68051092d66a, _34f246cde5be);
        }
        RawTrap(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
          if (!_f68023e5066c || !_34f246cde5be || !Reflect.has(_f68023e5066c, _34f246cde5be)) return;
          let _68051092d66a = this.natives.call("Object.getOwnPropertyDescriptor", null, _f68023e5066c, _34f246cde5be), _3d842a962905 = {
            this: null,
            get: function() {
              return _68051092d66a && _68051092d66a.get.call(this.this);
            },
            set: function(_f68023e5066c) {
              _68051092d66a && _68051092d66a.set.call(this.this, _f68023e5066c);
            }
          };
          delete _f68023e5066c[_34f246cde5be];
          let _2dbb4876c500 = {};
          return _63a45e116e67.get ? _2dbb4876c500.get = function() {
            return _3d842a962905.this = this, _63a45e116e67.get(_3d842a962905);
          } : _68051092d66a?.get && (_2dbb4876c500.get = _68051092d66a.get), _63a45e116e67.set ? _2dbb4876c500.set = function(_f68023e5066c) {
            _3d842a962905.this = this, _63a45e116e67.set(_3d842a962905, _f68023e5066c);
          } : _68051092d66a?.set && (_2dbb4876c500.set = _68051092d66a.set), _63a45e116e67.enumerable ? _2dbb4876c500.enumerable = _63a45e116e67.enumerable : _68051092d66a?.enumerable && (_2dbb4876c500.enumerable = _68051092d66a.enumerable), 
          _63a45e116e67.configurable ? _2dbb4876c500.configurable = _63a45e116e67.configurable : _68051092d66a?.configurable && (_2dbb4876c500.configurable = _68051092d66a.configurable), 
          Object.defineProperty(_f68023e5066c, _34f246cde5be, _2dbb4876c500), _68051092d66a;
        }
      }
    },
    1077: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      function n(_f68023e5066c, _34f246cde5be) {
        _f68023e5066c.Trap("Element.prototype.attributes", {
          get(_f68023e5066c) {
            let _34f246cde5be = _f68023e5066c.get(), _63a45e116e67 = new Proxy(_34f246cde5be, {
              get(_f68023e5066c, _68051092d66a, _3d842a962905) {
                let _2dbb4876c500 = Reflect.get(_f68023e5066c, _68051092d66a);
                return "length" === _68051092d66a ? Object.keys(_63a45e116e67).length : "getNamedItem" === _68051092d66a ? _f68023e5066c => _63a45e116e67[_f68023e5066c] : "getNamedItemNS" === _68051092d66a ? (_f68023e5066c, _34f246cde5be) => _63a45e116e67[`${_f68023e5066c}:${_34f246cde5be}`] : _68051092d66a in NamedNodeMap.prototype && "function" == typeof _2dbb4876c500 ? new Proxy(_2dbb4876c500, {
                  apply: (_f68023e5066c, _68051092d66a, _3d842a962905) => _68051092d66a === _63a45e116e67 ? Reflect.apply(_f68023e5066c, _34f246cde5be, _3d842a962905) : Reflect.apply(_f68023e5066c, _68051092d66a, _3d842a962905)
                }) : "string" != typeof _68051092d66a && "number" != typeof _68051092d66a || isNaN(Number(_68051092d66a)) ? this.has(_f68023e5066c, _68051092d66a) ? _2dbb4876c500 : void 0 : _34f246cde5be[Object.keys(_63a45e116e67)[_68051092d66a]];
              },
              ownKeys(_f68023e5066c) {
                return Reflect.ownKeys(_f68023e5066c).filter(_34f246cde5be => this.has(_f68023e5066c, _34f246cde5be));
              },
              has: (_f68023e5066c, _63a45e116e67) => "symbol" == typeof _63a45e116e67 ? Reflect.has(_f68023e5066c, _63a45e116e67) : !(_63a45e116e67.startsWith("studyjet-attr-") || _34f246cde5be[_63a45e116e67]?.name?.startsWith("studyjet-attr-")) && Reflect.has(_f68023e5066c, _63a45e116e67)
            });
            return _63a45e116e67;
          }
        }), _f68023e5066c.Trap([ "Attr.prototype.value", "Attr.prototype.nodeValue" ], {
          get: _f68023e5066c => _f68023e5066c.this?.ownerElement ? _f68023e5066c.this.ownerElement.getAttribute(_f68023e5066c.this.name) : _f68023e5066c.get(),
          set: (_f68023e5066c, _34f246cde5be) => _f68023e5066c.this?.ownerElement ? _f68023e5066c.this.ownerElement.setAttribute(_f68023e5066c.this.name, _34f246cde5be) : _f68023e5066c.set(_34f246cde5be)
        });
      }
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        default: () => n
      });
    },
    7430: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        default: () => i
      });
      var _68051092d66a = _63a45e116e67(1472);
      function i(_f68023e5066c, _34f246cde5be) {
        _f68023e5066c.Proxy("Navigator.prototype.sendBeacon", {
          apply(_34f246cde5be) {
            _34f246cde5be.args[0] = (0, _68051092d66a.Oy)(_34f246cde5be.args[0], _f68023e5066c.meta);
          }
        });
      }
    },
    9116: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      function n(_f68023e5066c, _34f246cde5be) {
        _f68023e5066c.serviceWorker.addEventListener("message", ({data: _34f246cde5be}) => {
          if ("studyjet$type" in _34f246cde5be && "cookie" === _34f246cde5be.studyjet$type) {
            _f68023e5066c.cookieStore.setCookies([ _34f246cde5be.cookie ], new URL(_34f246cde5be.url));
            let _63a45e116e67 = {
              studyjet$token: _34f246cde5be.studyjet$token,
              studyjet$type: "cookie"
            };
            _f68023e5066c.serviceWorker.controller.postMessage(_63a45e116e67);
          }
        }), _f68023e5066c.Trap("Document.prototype.cookie", {
          get: () => _f68023e5066c.cookieStore.getCookies(_f68023e5066c.url, !0),
          set(_34f246cde5be, _63a45e116e67) {
            _f68023e5066c.cookieStore.setCookies([ _63a45e116e67 ], _f68023e5066c.url);
            let _68051092d66a = _f68023e5066c.descriptors.get("ServiceWorkerContainer.prototype.controller", _f68023e5066c.serviceWorker);
            _68051092d66a && _f68023e5066c.natives.call("ServiceWorker.prototype.postMessage", _68051092d66a, {
              studyjet$type: "cookie",
              cookie: _63a45e116e67,
              url: _f68023e5066c.url.href
            });
          }
        }), delete _34f246cde5be.cookieStore;
      }
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        default: () => n
      });
    },
    6447: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        default: () => i
      });
      var _68051092d66a = _63a45e116e67(2614);
      function i(_f68023e5066c) {
        _f68023e5066c.Proxy("CSSStyleDeclaration.prototype.setProperty", {
          apply(_34f246cde5be) {
            _34f246cde5be.args[1] && (_34f246cde5be.args[1] = (0, _68051092d66a.s)(_34f246cde5be.args[1], _f68023e5066c.meta));
          }
        }), _f68023e5066c.Proxy("CSSStyleDeclaration.prototype.getPropertyValue", {
          apply(_f68023e5066c) {
            let _34f246cde5be = _f68023e5066c.call();
            if (!_34f246cde5be) return _34f246cde5be;
            _f68023e5066c.return((0, _68051092d66a.f)(_34f246cde5be));
          }
        }), _f68023e5066c.Trap("CSSStyleDeclaration.prototype.cssText", {
          set(_34f246cde5be, _63a45e116e67) {
            _34f246cde5be.set((0, _68051092d66a.s)(_63a45e116e67, _f68023e5066c.meta));
          },
          get: _f68023e5066c => (0, _68051092d66a.f)(_f68023e5066c.get())
        }), _f68023e5066c.Proxy("CSSStyleSheet.prototype.insertRule", {
          apply(_34f246cde5be) {
            _34f246cde5be.args[0] = (0, _68051092d66a.s)(_34f246cde5be.args[0], _f68023e5066c.meta);
          }
        }), _f68023e5066c.Proxy("CSSStyleSheet.prototype.replace", {
          apply(_34f246cde5be) {
            _34f246cde5be.args[0] = (0, _68051092d66a.s)(_34f246cde5be.args[0], _f68023e5066c.meta);
          }
        }), _f68023e5066c.Proxy("CSSStyleSheet.prototype.replaceSync", {
          apply(_34f246cde5be) {
            _34f246cde5be.args[0] = (0, _68051092d66a.s)(_34f246cde5be.args[0], _f68023e5066c.meta);
          }
        }), _f68023e5066c.Trap("CSSRule.prototype.cssText", {
          set(_34f246cde5be, _63a45e116e67) {
            _34f246cde5be.set((0, _68051092d66a.s)(_63a45e116e67, _f68023e5066c.meta));
          },
          get: _f68023e5066c => (0, _68051092d66a.f)(_f68023e5066c.get())
        }), _f68023e5066c.Proxy("CSSStyleValue.parse", {
          apply(_34f246cde5be) {
            _34f246cde5be.args[1] && (_34f246cde5be.args[1] = (0, _68051092d66a.s)(_34f246cde5be.args[1], _f68023e5066c.meta));
          }
        }), _f68023e5066c.Trap("HTMLElement.prototype.style", {
          get(_34f246cde5be) {
            let _63a45e116e67 = _34f246cde5be.get();
            return new Proxy(_63a45e116e67, {
              get(_f68023e5066c, _34f246cde5be) {
                let _3d842a962905 = Reflect.get(_f68023e5066c, _34f246cde5be);
                return "function" == typeof _3d842a962905 ? new Proxy(_3d842a962905, {
                  apply: (_f68023e5066c, _34f246cde5be, _68051092d66a) => Reflect.apply(_f68023e5066c, _63a45e116e67, _68051092d66a)
                }) : _34f246cde5be in CSSStyleDeclaration.prototype || !_3d842a962905 ? _3d842a962905 : (0, 
                _68051092d66a.f)(_3d842a962905);
              },
              set: (_34f246cde5be, _63a45e116e67, _3d842a962905) => "cssText" == _63a45e116e67 || "" == _3d842a962905 || "string" != typeof _3d842a962905 ? Reflect.set(_34f246cde5be, _63a45e116e67, _3d842a962905) : Reflect.set(_34f246cde5be, _63a45e116e67, (0, 
              _68051092d66a.s)(_3d842a962905, _f68023e5066c.meta))
            });
          },
          set(_f68023e5066c, _34f246cde5be) {
            _f68023e5066c.set(_34f246cde5be);
          }
        });
      }
    },
    5351: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        default: () => i
      });
      var _68051092d66a = _63a45e116e67(884);
      function i(_f68023e5066c, _34f246cde5be) {
        let _63a45e116e67 = String;
        _f68023e5066c.Proxy([ "Document.prototype.querySelector", "Document.prototype.querySelectorAll" ], {
          apply(_f68023e5066c) {
            _f68023e5066c.args[0] = _63a45e116e67(_f68023e5066c.args[0]).replace(/((?:^|\s)\b\w+\[(?:src|href|data-href))[\^]?(=['"]?(?:https?[:])?\/\/)/, "$1*$2");
          }
        }), _f68023e5066c.Proxy("Document.prototype.write", {
          apply(_34f246cde5be) {
            if (_34f246cde5be.args[0]) try {
              _34f246cde5be.args[0] = (0, _68051092d66a.Qs)(_34f246cde5be.args[0], _f68023e5066c.cookieStore, _f68023e5066c.meta, !1);
            } catch {}
          }
        }), _f68023e5066c.Trap("Document.prototype.referrer", {
          get: () => _f68023e5066c.url.toString()
        }), _f68023e5066c.Proxy("Document.prototype.writeln", {
          apply(_34f246cde5be) {
            if (_34f246cde5be.args[0]) try {
              _34f246cde5be.args[0] = (0, _68051092d66a.Qs)(_34f246cde5be.args[0], _f68023e5066c.cookieStore, _f68023e5066c.meta, !1);
            } catch {}
          }
        }), _f68023e5066c.Proxy("Document.prototype.parseHTMLUnsafe", {
          apply(_34f246cde5be) {
            if (_34f246cde5be.args[0]) try {
              _34f246cde5be.args[0] = (0, _68051092d66a.Qs)(_34f246cde5be.args[0], _f68023e5066c.cookieStore, _f68023e5066c.meta, !1);
            } catch {}
          }
        });
      }
    },
    7828: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        default: () => h
      });
      var _68051092d66a = _63a45e116e67(2393), _3d842a962905 = _63a45e116e67(2614), _2dbb4876c500 = _63a45e116e67(884), _4547843d0a40 = _63a45e116e67(1478), _bed2b259674e = _63a45e116e67(1472), _d73671e3fec6 = _63a45e116e67(2794), _ef72ad0b9c92 = _63a45e116e67(3255);
      let _44f0b1ed911f = new TextEncoder;
      function d(_f68023e5066c) {
        return btoa(Array.from(_f68023e5066c, _f68023e5066c => String.fromCodePoint(_f68023e5066c)).join(""));
      }
      function h(_f68023e5066c, _34f246cde5be) {
        let _63a45e116e67 = {
          nonce: [ _34f246cde5be.HTMLElement ],
          integrity: [ _34f246cde5be.HTMLScriptElement, _34f246cde5be.HTMLLinkElement ],
          csp: [ _34f246cde5be.HTMLIFrameElement ],
          credentialless: [ _34f246cde5be.HTMLIFrameElement ],
          src: [ _34f246cde5be.HTMLImageElement, _34f246cde5be.HTMLMediaElement, _34f246cde5be.HTMLIFrameElement, _34f246cde5be.HTMLFrameElement, _34f246cde5be.HTMLEmbedElement, _34f246cde5be.HTMLScriptElement, _34f246cde5be.HTMLSourceElement ],
          href: [ _34f246cde5be.HTMLAnchorElement, _34f246cde5be.HTMLLinkElement ],
          data: [ _34f246cde5be.HTMLObjectElement ],
          action: [ _34f246cde5be.HTMLFormElement ],
          formaction: [ _34f246cde5be.HTMLButtonElement, _34f246cde5be.HTMLInputElement ],
          srcdoc: [ _34f246cde5be.HTMLIFrameElement ],
          poster: [ _34f246cde5be.HTMLVideoElement ],
          imagesrcset: [ _34f246cde5be.HTMLLinkElement ]
        }, _0a3b7a57b594 = [ _34f246cde5be.HTMLAnchorElement.prototype, _34f246cde5be.HTMLAreaElement.prototype ], _3644bb2f5311 = [ _f68023e5066c.natives.call("Object.getOwnPropertyDescriptor", null, _34f246cde5be.HTMLAnchorElement.prototype, "href"), _f68023e5066c.natives.call("Object.getOwnPropertyDescriptor", null, _34f246cde5be.HTMLAreaElement.prototype, "href") ];
        for (let _34f246cde5be of Object.keys(_63a45e116e67)) for (let _68051092d66a of _63a45e116e67[_34f246cde5be]) {
          let _63a45e116e67 = _f68023e5066c.natives.call("Object.getOwnPropertyDescriptor", null, _68051092d66a.prototype, _34f246cde5be);
          Object.defineProperty(_68051092d66a.prototype, _34f246cde5be, {
            get() {
              return [ "src", "data", "href", "action", "formaction" ].includes(_34f246cde5be) ? (0, 
              _bed2b259674e.v2)(_63a45e116e67.get.call(this)) : _63a45e116e67.get.call(this);
            },
            set(_f68023e5066c) {
              return this.setAttribute(_34f246cde5be, _f68023e5066c);
            }
          });
        }
        for (let _34f246cde5be of [ "protocol", "hash", "host", "hostname", "origin", "pathname", "port", "search" ]) for (let _63a45e116e67 in _0a3b7a57b594) {
          let _68051092d66a = _0a3b7a57b594[_63a45e116e67], _3d842a962905 = _3644bb2f5311[_63a45e116e67];
          _f68023e5066c.RawTrap(_68051092d66a, _34f246cde5be, {
            get(_f68023e5066c) {
              let _63a45e116e67 = _3d842a962905.get.call(_f68023e5066c.this);
              return _63a45e116e67 ? new URL((0, _bed2b259674e.v2)(_63a45e116e67))[_34f246cde5be] : _63a45e116e67;
            }
          });
        }
        _f68023e5066c.Trap("Node.prototype.baseURI", {
          get(_34f246cde5be) {
            let _63a45e116e67 = _34f246cde5be.this, _68051092d66a = _63a45e116e67.ownerDocument?.querySelector("base");
            return (_63a45e116e67 instanceof Document && (_68051092d66a = _63a45e116e67.querySelector("base")), 
            _68051092d66a) ? new URL(_68051092d66a.href, _f68023e5066c.url.origin).href : _f68023e5066c.url.origin;
          },
          set: (_f68023e5066c, _34f246cde5be) => !1
        }), _f68023e5066c.Proxy("Element.prototype.getAttribute", {
          apply(_34f246cde5be) {
            let [_63a45e116e67] = _34f246cde5be.args;
            if (_63a45e116e67.startsWith("studyjet-attr")) return _34f246cde5be.return(null);
            if (_f68023e5066c.natives.call("Element.prototype.hasAttribute", _34f246cde5be.this, `studyjet-attr-${_63a45e116e67}`)) {
              let _f68023e5066c = _34f246cde5be.fn.call(_34f246cde5be.this, `studyjet-attr-${_63a45e116e67}`);
              return null === _f68023e5066c ? _34f246cde5be.return("") : _34f246cde5be.return(_f68023e5066c);
            }
          }
        }), _f68023e5066c.Proxy("Element.prototype.getAttributeNames", {
          apply(_f68023e5066c) {
            let _34f246cde5be = _f68023e5066c.call().filter(_f68023e5066c => !_f68023e5066c.startsWith("studyjet-attr"));
            _f68023e5066c.return(_34f246cde5be);
          }
        }), _f68023e5066c.Proxy("Element.prototype.getAttributeNode", {
          apply(_f68023e5066c) {
            if (_f68023e5066c.args[0].startsWith("studyjet-attr")) return _f68023e5066c.return(null);
          }
        }), _f68023e5066c.Proxy("Element.prototype.hasAttribute", {
          apply(_f68023e5066c) {
            if (_f68023e5066c.args[0].startsWith("studyjet-attr")) return _f68023e5066c.return(!1);
          }
        }), _f68023e5066c.Proxy("Element.prototype.setAttribute", {
          apply(_34f246cde5be) {
            let [_63a45e116e67, _3d842a962905] = _34f246cde5be.args, _2dbb4876c500 = _68051092d66a.V.find(_f68023e5066c => {
              let _68051092d66a = _f68023e5066c[_63a45e116e67.toLowerCase()];
              return !!_68051092d66a && ("*" === _68051092d66a || "function" != typeof _68051092d66a && _68051092d66a.includes(_34f246cde5be.this.tagName.toLowerCase()));
            });
            if (_2dbb4876c500) {
              let _68051092d66a = _2dbb4876c500.fn(_3d842a962905, _f68023e5066c.meta, _f68023e5066c.cookieStore);
              if (null == _68051092d66a) {
                _f68023e5066c.natives.call("Element.prototype.removeAttribute", _34f246cde5be.this, _63a45e116e67), 
                _34f246cde5be.return(void 0);
                return;
              }
              _34f246cde5be.args[1] = _68051092d66a, _34f246cde5be.fn.call(_34f246cde5be.this, `studyjet-attr-${_34f246cde5be.args[0]}`, _3d842a962905);
            }
          }
        }), _f68023e5066c.Proxy("Element.prototype.setAttributeNode", {
          apply(_f68023e5066c) {}
        }), _f68023e5066c.Proxy("Element.prototype.setAttributeNS", {
          apply(_34f246cde5be) {
            let [_63a45e116e67, _3d842a962905, _2dbb4876c500] = _34f246cde5be.args, _4547843d0a40 = _68051092d66a.V.find(_f68023e5066c => {
              let _63a45e116e67 = _f68023e5066c[_3d842a962905.toLowerCase()];
              return !!_63a45e116e67 && ("*" === _63a45e116e67 || "function" != typeof _63a45e116e67 && _63a45e116e67.includes(_34f246cde5be.this.tagName.toLowerCase()));
            });
            _4547843d0a40 && (_34f246cde5be.args[2] = _4547843d0a40.fn(_2dbb4876c500, _f68023e5066c.meta, _f68023e5066c.cookieStore), 
            _f68023e5066c.natives.call("Element.prototype.setAttribute", _34f246cde5be.this, `studyjet-attr-${_34f246cde5be.args[1]}`, _2dbb4876c500));
          }
        }), _f68023e5066c.Trap("SVGAnimatedString.prototype.baseVal", {
          get(_f68023e5066c) {
            let _34f246cde5be = _f68023e5066c.get();
            return _34f246cde5be ? (0, _bed2b259674e.v2)(_34f246cde5be) : _34f246cde5be;
          },
          set(_34f246cde5be, _63a45e116e67) {
            _34f246cde5be.set((0, _bed2b259674e.Oy)(_63a45e116e67, _f68023e5066c.meta));
          }
        }), _f68023e5066c.Trap("SVGAnimatedString.prototype.animVal", {
          get(_f68023e5066c) {
            let _34f246cde5be = _f68023e5066c.get();
            return _34f246cde5be ? (0, _bed2b259674e.v2)(_34f246cde5be) : _34f246cde5be;
          }
        }), _f68023e5066c.Proxy("Element.prototype.removeAttribute", {
          apply(_34f246cde5be) {
            if (_34f246cde5be.args[0].startsWith("studyjet-attr")) return _34f246cde5be.return(void 0);
            _f68023e5066c.natives.call("Element.prototype.hasAttribute", _34f246cde5be.this, _34f246cde5be.args[0]) && _34f246cde5be.fn.call(_34f246cde5be.this, `studyjet-attr-${_34f246cde5be.args[0]}`);
          }
        }), _f68023e5066c.Proxy("Element.prototype.toggleAttribute", {
          apply(_34f246cde5be) {
            if (_34f246cde5be.args[0].startsWith("studyjet-attr")) return _34f246cde5be.return(!1);
            _f68023e5066c.natives.call("Element.prototype.hasAttribute", _34f246cde5be.this, _34f246cde5be.args[0]) && _34f246cde5be.fn.call(_34f246cde5be.this, `studyjet-attr-${_34f246cde5be.args[0]}`);
          }
        }), _f68023e5066c.Trap("Element.prototype.innerHTML", {
          set(_63a45e116e67, _68051092d66a) {
            let _bed2b259674e;
            if (_63a45e116e67.this instanceof _34f246cde5be.HTMLScriptElement) _bed2b259674e = (0, 
            _4547843d0a40.o)(_68051092d66a, "(anonymous script element)", _f68023e5066c.meta), 
            _f68023e5066c.natives.call("Element.prototype.setAttribute", _63a45e116e67.this, "studyjet-attr-script-source-src", d(_44f0b1ed911f.encode(_bed2b259674e))); else if (_63a45e116e67.this instanceof _34f246cde5be.HTMLStyleElement) _bed2b259674e = (0, 
            _3d842a962905.s)(_68051092d66a, _f68023e5066c.meta); else try {
              _bed2b259674e = (0, _2dbb4876c500.Qs)(_68051092d66a, _f68023e5066c.cookieStore, _f68023e5066c.meta);
            } catch {
              _bed2b259674e = _68051092d66a;
            }
            _63a45e116e67.set(_bed2b259674e);
          },
          get(_63a45e116e67) {
            if (_63a45e116e67.this instanceof _34f246cde5be.HTMLScriptElement) {
              let _34f246cde5be = _f68023e5066c.natives.call("Element.prototype.getAttribute", _63a45e116e67.this, "studyjet-attr-script-source-src");
              return _34f246cde5be ? atob(_34f246cde5be) : _63a45e116e67.get();
            }
            return _63a45e116e67.this instanceof _34f246cde5be.HTMLStyleElement ? _63a45e116e67.get() : (0, 
            _2dbb4876c500.nK)(_63a45e116e67.get());
          }
        }), _f68023e5066c.Trap("Node.prototype.textContent", {
          set(_63a45e116e67, _68051092d66a) {
            if (_63a45e116e67.this instanceof _34f246cde5be.HTMLScriptElement) {
              let _34f246cde5be = (0, _4547843d0a40.o)(_68051092d66a, "(anonymous script element)", _f68023e5066c.meta);
              return _f68023e5066c.natives.call("Element.prototype.setAttribute", _63a45e116e67.this, "studyjet-attr-script-source-src", d(_44f0b1ed911f.encode(_34f246cde5be))), 
              _63a45e116e67.set(_34f246cde5be);
            }
            return _63a45e116e67.this instanceof _34f246cde5be.HTMLStyleElement ? _63a45e116e67.set((0, 
            _3d842a962905.s)(_68051092d66a, _f68023e5066c.meta)) : _63a45e116e67.set(_68051092d66a);
          },
          get(_63a45e116e67) {
            if (_63a45e116e67.this instanceof _34f246cde5be.HTMLScriptElement) {
              let _34f246cde5be = _f68023e5066c.natives.call("Element.prototype.getAttribute", _63a45e116e67.this, "studyjet-attr-script-source-src");
              return _34f246cde5be ? atob(_34f246cde5be) : _63a45e116e67.get();
            }
            return _63a45e116e67.this instanceof _34f246cde5be.HTMLStyleElement ? (0, _3d842a962905.f)(_63a45e116e67.get()) : _63a45e116e67.get();
          }
        }), _f68023e5066c.Trap("Element.prototype.outerHTML", {
          set(_34f246cde5be, _63a45e116e67) {
            _34f246cde5be.set((0, _2dbb4876c500.Qs)(_63a45e116e67, _f68023e5066c.cookieStore, _f68023e5066c.meta));
          },
          get: _f68023e5066c => (0, _2dbb4876c500.nK)(_f68023e5066c.get())
        }), _f68023e5066c.Proxy("Element.prototype.setHTMLUnsafe", {
          apply(_34f246cde5be) {
            try {
              _34f246cde5be.args[0] = (0, _2dbb4876c500.Qs)(_34f246cde5be.args[0], _f68023e5066c.cookieStore, _f68023e5066c.meta, !1);
            } catch {}
          }
        }), _f68023e5066c.Proxy("Element.prototype.getHTML", {
          apply(_f68023e5066c) {
            _f68023e5066c.return((0, _2dbb4876c500.nK)(_f68023e5066c.call()));
          }
        }), _f68023e5066c.Proxy("Element.prototype.insertAdjacentHTML", {
          apply(_34f246cde5be) {
            if (_34f246cde5be.args[1]) try {
              _34f246cde5be.args[1] = (0, _2dbb4876c500.Qs)(_34f246cde5be.args[1], _f68023e5066c.cookieStore, _f68023e5066c.meta, !1);
            } catch {}
          }
        }), _f68023e5066c.Proxy("Audio", {
          construct(_34f246cde5be) {
            _34f246cde5be.args[0] && (_34f246cde5be.args[0] = (0, _bed2b259674e.Oy)(_34f246cde5be.args[0], _f68023e5066c.meta));
          }
        }), _f68023e5066c.Proxy("Text.prototype.appendData", {
          apply(_34f246cde5be) {
            _34f246cde5be.this.parentElement?.tagName === "STYLE" && (_34f246cde5be.args[0] = (0, 
            _3d842a962905.s)(_34f246cde5be.args[0], _f68023e5066c.meta));
          }
        }), _f68023e5066c.Proxy("Text.prototype.insertData", {
          apply(_34f246cde5be) {
            _34f246cde5be.this.parentElement?.tagName === "STYLE" && (_34f246cde5be.args[1] = (0, 
            _3d842a962905.s)(_34f246cde5be.args[1], _f68023e5066c.meta));
          }
        }), _f68023e5066c.Proxy("Text.prototype.replaceData", {
          apply(_34f246cde5be) {
            _34f246cde5be.this.parentElement?.tagName === "STYLE" && (_34f246cde5be.args[2] = (0, 
            _3d842a962905.s)(_34f246cde5be.args[2], _f68023e5066c.meta));
          }
        }), _f68023e5066c.Trap("Text.prototype.wholeText", {
          get: _f68023e5066c => _f68023e5066c.this.parentElement?.tagName === "STYLE" ? (0, 
          _3d842a962905.f)(_f68023e5066c.get()) : _f68023e5066c.get(),
          set: (_34f246cde5be, _63a45e116e67) => _34f246cde5be.this.parentElement?.tagName === "STYLE" ? _34f246cde5be.set((0, 
          _3d842a962905.s)(_63a45e116e67, _f68023e5066c.meta)) : _34f246cde5be.set(_63a45e116e67)
        }), _f68023e5066c.Trap([ "HTMLIFrameElement.prototype.contentWindow", "HTMLFrameElement.prototype.contentWindow", "HTMLObjectElement.prototype.contentWindow", "HTMLEmbedElement.prototype.contentWindow" ], {
          get(_f68023e5066c) {
            let _34f246cde5be = _f68023e5066c.get();
            return _34f246cde5be && (_d73671e3fec6.pX in _34f246cde5be || new _ef72ad0b9c92.StudyJetClient(_34f246cde5be).hook()), 
            _34f246cde5be;
          }
        }), _f68023e5066c.Trap([ "HTMLIFrameElement.prototype.contentDocument", "HTMLFrameElement.prototype.contentDocument", "HTMLObjectElement.prototype.contentDocument", "HTMLEmbedElement.prototype.contentDocument" ], {
          get(_34f246cde5be) {
            let _63a45e116e67 = _f68023e5066c.descriptors.get(`${_34f246cde5be.this.constructor.name}.prototype.contentWindow`, _34f246cde5be.this);
            return _63a45e116e67 ? (_d73671e3fec6.pX in _63a45e116e67 || new _ef72ad0b9c92.StudyJetClient(_63a45e116e67).hook(), 
            _63a45e116e67.document) : _63a45e116e67;
          }
        }), _f68023e5066c.Proxy([ "HTMLIFrameElement.prototype.getSVGDocument", "HTMLObjectElement.prototype.getSVGDocument", "HTMLEmbedElement.prototype.getSVGDocument" ], {
          apply(_f68023e5066c) {
            if (_f68023e5066c.call()) return _f68023e5066c.return(_f68023e5066c.this.contentDocument);
          }
        }), _f68023e5066c.Proxy("DOMParser.prototype.parseFromString", {
          apply(_34f246cde5be) {
            if ("text/html" === _34f246cde5be.args[1]) try {
              _34f246cde5be.args[0] = (0, _2dbb4876c500.Qs)(_34f246cde5be.args[0], _f68023e5066c.cookieStore, _f68023e5066c.meta, !1);
            } catch {}
          }
        });
      }
    },
    5426: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        default: () => i
      });
      var _68051092d66a = _63a45e116e67(2614);
      function i(_f68023e5066c, _34f246cde5be) {
        _f68023e5066c.Proxy("FontFace", {
          construct(_34f246cde5be) {
            _34f246cde5be.args[1] = (0, _68051092d66a.s)(_34f246cde5be.args[1], _f68023e5066c.meta);
          }
        });
      }
    },
    5465: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        default: () => i
      });
      var _68051092d66a = _63a45e116e67(884);
      function i(_f68023e5066c, _34f246cde5be) {
        _f68023e5066c.Proxy("Range.prototype.createContextualFragment", {
          apply(_34f246cde5be) {
            _34f246cde5be.args[0] = (0, _68051092d66a.Qs)(_34f246cde5be.args[0], _f68023e5066c.cookieStore, _f68023e5066c.meta);
          }
        });
      }
    },
    9804: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        default: () => s
      });
      var _68051092d66a = _63a45e116e67(1472), _3d842a962905 = _63a45e116e67(1862), _2dbb4876c500 = _63a45e116e67(2794);
      function s(_f68023e5066c, _34f246cde5be) {
        _f68023e5066c.Proxy([ "History.prototype.pushState", "History.prototype.replaceState" ], {
          apply(_34f246cde5be) {
            (_34f246cde5be.args[2] || "" === _34f246cde5be.args[2]) && (_34f246cde5be.args[2] = (0, 
            _68051092d66a.Oy)(_34f246cde5be.args[2], _f68023e5066c.meta)), _34f246cde5be.call();
            let {constructor: {constructor: _63a45e116e67}} = _34f246cde5be.this, _4547843d0a40 = _63a45e116e67("return globalThis")(), _bed2b259674e = _4547843d0a40[_2dbb4876c500.pX];
            if (_4547843d0a40.name === _f68023e5066c.meta.topFrameName) {
              let _34f246cde5be = new _3d842a962905.UrlChangeEvent(_bed2b259674e.url.href);
              _f68023e5066c.frame?.dispatchEvent(_34f246cde5be);
            }
          }
        });
      }
    },
    7758: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        default: () => s
      });
      var _68051092d66a = _63a45e116e67(3255), _3d842a962905 = _63a45e116e67(2794), _2dbb4876c500 = _63a45e116e67(1472);
      function s(_f68023e5066c) {
        _f68023e5066c.Proxy("window.open", {
          apply(_34f246cde5be) {
            _34f246cde5be.args[0] && (_34f246cde5be.args[0] = (0, _2dbb4876c500.Oy)(_34f246cde5be.args[0], _f68023e5066c.meta)), 
            ("_top" === _34f246cde5be.args[1] || "_unfencedTop" === _34f246cde5be.args[1]) && (_34f246cde5be.args[1] = _f68023e5066c.meta.topFrameName), 
            "_parent" === _34f246cde5be.args[1] && (_34f246cde5be.args[1] = _f68023e5066c.meta.parentFrameName);
            let _63a45e116e67 = _34f246cde5be.call();
            if (!_63a45e116e67) return _34f246cde5be.return(_63a45e116e67);
            if (_3d842a962905.pX in _63a45e116e67) return _34f246cde5be.return(_63a45e116e67[_3d842a962905.pX].global);
            {
              let _f68023e5066c = new _68051092d66a.StudyJetClient(_63a45e116e67);
              return _f68023e5066c.hook(), _34f246cde5be.return(_f68023e5066c.global);
            }
          }
        }), _f68023e5066c.Trap("window.frameElement", {
          get(_f68023e5066c) {
            let _34f246cde5be = _f68023e5066c.get();
            return _34f246cde5be ? _34f246cde5be.ownerDocument.defaultView[_3d842a962905.pX] ? _34f246cde5be : null : _34f246cde5be;
          }
        });
      }
    },
    6012: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      function n(_f68023e5066c, _34f246cde5be) {
        _f68023e5066c.Trap("origin", {
          get: () => _f68023e5066c.url.origin,
          set: () => !1
        }), _f68023e5066c.Trap("Document.prototype.URL", {
          get: () => _f68023e5066c.url.href,
          set: () => !1
        }), _f68023e5066c.Trap("Document.prototype.documentURI", {
          get: () => _f68023e5066c.url.href,
          set: () => !1
        }), _f68023e5066c.Trap("Document.prototype.domain", {
          get: () => _f68023e5066c.url.hostname,
          set: () => !1
        });
      }
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        default: () => n
      });
    },
    6286: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        default: () => a
      });
      var _68051092d66a = _63a45e116e67(1472), _3d842a962905 = _63a45e116e67(37);
      function a(_f68023e5066c, _34f246cde5be) {
        _f68023e5066c.Trap("PerformanceEntry.prototype.name", {
          get(_f68023e5066c) {
            let _34f246cde5be = _f68023e5066c.get();
            return _34f246cde5be && _34f246cde5be.startsWith(location.origin + _3d842a962905.$W.prefix) ? (0, 
            _68051092d66a.v2)(_34f246cde5be) : _34f246cde5be;
          }
        }), _f68023e5066c.Proxy([ "Performance.prototype.getEntries", "Performance.prototype.getEntriesByType", "Performance.prototype.getEntriesByName", "PerformanceObserverEntryList.prototype.getEntries", "PerformanceObserverEntryList.prototype.getEntriesByType", "PerformanceObserverEntryList.prototype.getEntriesByName" ], {
          apply(_f68023e5066c) {
            let _34f246cde5be = _f68023e5066c.call();
            return _f68023e5066c.return(_34f246cde5be.filter(_f68023e5066c => {
              for (let _34f246cde5be of Object.values(_3d842a962905.$W.files)) if (_f68023e5066c.name.startsWith(location.origin + _34f246cde5be)) return !1;
              return !0;
            }));
          }
        });
      }
    },
    1974: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        default: () => i
      });
      var _68051092d66a = _63a45e116e67(1472);
      function i(_f68023e5066c, _34f246cde5be) {
        _f68023e5066c.Proxy("Navigator.prototype.registerProtocolHandler", {
          apply(_34f246cde5be) {
            _34f246cde5be.args[1] = (0, _68051092d66a.Oy)(_34f246cde5be.args[1], _f68023e5066c.meta);
          }
        }), _f68023e5066c.Proxy("Navigator.prototype.unregisterProtocolHandler", {
          apply(_34f246cde5be) {
            _34f246cde5be.args[1] = (0, _68051092d66a.Oy)(_34f246cde5be.args[1], _f68023e5066c.meta);
          }
        });
      }
    },
    9201: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        default: () => l,
        disabled: () => o,
        enabled: () => s,
        order: () => _2dbb4876c500
      });
      var _68051092d66a = _63a45e116e67(37), _3d842a962905 = _63a45e116e67(1472);
      let _2dbb4876c500 = 2, s = _f68023e5066c => (0, _68051092d66a.U5)("serviceworkers", _f68023e5066c.url);
      function o(_f68023e5066c, _34f246cde5be) {
        Reflect.deleteProperty(Navigator.prototype, "serviceWorker");
      }
      function l(_f68023e5066c, _34f246cde5be) {
        let _63a45e116e67 = new WeakMap;
        _f68023e5066c.Proxy("EventTarget.prototype.addEventListener", {
          apply(_f68023e5066c) {
            _63a45e116e67.get(_f68023e5066c.this) && _f68023e5066c.return(void 0);
          }
        }), _f68023e5066c.Proxy("EventTarget.prototype.removeEventListener", {
          apply(_f68023e5066c) {
            _63a45e116e67.get(_f68023e5066c.this) && _f68023e5066c.return(void 0);
          }
        }), _f68023e5066c.Proxy("ServiceWorkerContainer.prototype.getRegistration", {
          apply(_f68023e5066c) {
            _f68023e5066c.return(new Promise(_f68023e5066c => _f68023e5066c(registration)));
          }
        }), _f68023e5066c.Proxy("ServiceWorkerContainer.prototype.getRegistrations", {
          apply(_f68023e5066c) {
            _f68023e5066c.return(new Promise(_f68023e5066c => _f68023e5066c([ registration ])));
          }
        }), _f68023e5066c.Trap("ServiceWorkerContainer.prototype.ready", {
          get: _f68023e5066c => new Promise(_f68023e5066c => _f68023e5066c(registration))
        }), _f68023e5066c.Trap("ServiceWorkerContainer.prototype.controller", {
          get: _f68023e5066c => registration?.active
        }), _f68023e5066c.Proxy("ServiceWorkerContainer.prototype.register", {
          apply(_34f246cde5be) {
            let _68051092d66a = new EventTarget;
            Object.setPrototypeOf(_68051092d66a, self.ServiceWorkerRegistration.prototype), 
            _68051092d66a.constructor = _34f246cde5be.fn;
            let _2dbb4876c500 = (0, _3d842a962905.Oy)(_34f246cde5be.args[0], _f68023e5066c.meta) + "?dest=serviceworker";
            _34f246cde5be.args[1] && "module" === _34f246cde5be.args[1].type && (_2dbb4876c500 += "&type=module");
            let _4547843d0a40 = _f68023e5066c.natives.construct("SharedWorker", _2dbb4876c500).port, _bed2b259674e = {
              scope: _34f246cde5be.args[0],
              active: _4547843d0a40
            }, _d73671e3fec6 = _f68023e5066c.descriptors.get("ServiceWorkerContainer.prototype.controller", _f68023e5066c.serviceWorker);
            _f68023e5066c.natives.call("ServiceWorker.prototype.postMessage", _d73671e3fec6, {
              studyjet$type: "registerServiceWorker",
              port: _4547843d0a40,
              origin: _f68023e5066c.url.origin
            }, [ _4547843d0a40 ]), _63a45e116e67.set(_68051092d66a, _bed2b259674e), _34f246cde5be.return(new Promise(_f68023e5066c => _f68023e5066c(_68051092d66a)));
          }
        });
      }
    },
    5289: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      function n(_f68023e5066c, _34f246cde5be) {
        let _63a45e116e67 = {
          get(_34f246cde5be, _63a45e116e67) {
            switch (_63a45e116e67) {
             case "getItem":
              return _63a45e116e67 => _34f246cde5be.getItem(_f68023e5066c.url.host + "@" + _63a45e116e67);

             case "setItem":
              return (_63a45e116e67, _68051092d66a) => _34f246cde5be.setItem(_f68023e5066c.url.host + "@" + _63a45e116e67, _68051092d66a);

             case "removeItem":
              return _63a45e116e67 => _34f246cde5be.removeItem(_f68023e5066c.url.host + "@" + _63a45e116e67);

             case "clear":
              return () => {
                for (let _63a45e116e67 in Object.keys(_34f246cde5be)) _63a45e116e67.startsWith(_f68023e5066c.url.host) && _34f246cde5be.removeItem(_63a45e116e67);
              };

             case "key":
              return _63a45e116e67 => {
                let _68051092d66a = Object.keys(_34f246cde5be).filter(_34f246cde5be => _34f246cde5be.startsWith(_f68023e5066c.url.host));
                return _34f246cde5be.getItem(_68051092d66a[_63a45e116e67]);
              };

             case "length":
              return Object.keys(_34f246cde5be).filter(_34f246cde5be => _34f246cde5be.startsWith(_f68023e5066c.url.host)).length;

             default:
              if (_63a45e116e67 in Object.prototype || "symbol" == typeof _63a45e116e67) return Reflect.get(_34f246cde5be, _63a45e116e67);
              return _34f246cde5be.getItem(_f68023e5066c.url.host + "@" + _63a45e116e67);
            }
          },
          set: (_34f246cde5be, _63a45e116e67, _68051092d66a) => (_34f246cde5be.setItem(_f68023e5066c.url.host + "@" + _63a45e116e67, _68051092d66a), 
          !0),
          ownKeys: _34f246cde5be => Reflect.ownKeys(_34f246cde5be).filter(_34f246cde5be => "string" == typeof _34f246cde5be && _34f246cde5be.startsWith(_f68023e5066c.url.host)).map(_34f246cde5be => "string" == typeof _34f246cde5be ? _34f246cde5be.substring(_f68023e5066c.url.host.length + 1) : _34f246cde5be),
          getOwnPropertyDescriptor: (_34f246cde5be, _63a45e116e67) => ({
            value: _34f246cde5be.getItem(_f68023e5066c.url.host + "@" + _63a45e116e67),
            enumerable: !0,
            configurable: !0,
            writable: !0
          }),
          defineProperty: (_34f246cde5be, _63a45e116e67, _68051092d66a) => (_34f246cde5be.setItem(_f68023e5066c.url.host + "@" + _63a45e116e67, _68051092d66a.value), 
          !0)
        };
        _34f246cde5be.localStorage;
        let _68051092d66a = new Proxy(_34f246cde5be.localStorage, _63a45e116e67), _3d842a962905 = new Proxy(_34f246cde5be.sessionStorage, _63a45e116e67);
        delete _34f246cde5be.localStorage, delete _34f246cde5be.sessionStorage, _34f246cde5be.localStorage = _68051092d66a, 
        _34f246cde5be.sessionStorage = _3d842a962905;
      }
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        default: () => n
      });
    },
    1323: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        isdedicated: () => _3644bb2f5311,
        isemulatedsw: () => _4a3d65fa17db,
        isshared: () => _9acaff0e6a8f,
        issw: () => _0a3b7a57b594,
        iswindow: () => _ef72ad0b9c92,
        isworker: () => _44f0b1ed911f,
        loadAndHook: () => g
      });
      var _68051092d66a = _63a45e116e67(37), _3d842a962905 = _63a45e116e67(2794), _2dbb4876c500 = _63a45e116e67(3255), _4547843d0a40 = _63a45e116e67(1862), _bed2b259674e = _63a45e116e67(8409), _d73671e3fec6 = _63a45e116e67(8665).A;
      let _ef72ad0b9c92 = "window" in globalThis && window instanceof Window, _44f0b1ed911f = "WorkerGlobalScope" in globalThis, _0a3b7a57b594 = "ServiceWorkerGlobalScope" in globalThis, _3644bb2f5311 = "DedicatedWorkerGlobalScope" in globalThis, _9acaff0e6a8f = "SharedWorkerGlobalScope" in globalThis, _4a3d65fa17db = "location" in globalThis && "serviceworker" === new URL(globalThis.location.href).searchParams.get("dest");
      function g(_f68023e5066c) {
        if ((0, _68051092d66a.Nk)(_f68023e5066c), _d73671e3fec6.log("initializing studyjet client"), 
        !(_3d842a962905.pX in globalThis)) {
          (0, _68051092d66a.Ec)();
          let _f68023e5066c = new _2dbb4876c500.StudyJetClient(globalThis), _34f246cde5be = globalThis.frameElement;
          _34f246cde5be && !_34f246cde5be.name && (_34f246cde5be.name = `${Array(8).fill(0).map(() => Math.floor(36 * Math.random()).toString(36)).join("")}`), 
          globalThis.COOKIE && _f68023e5066c.loadcookies(globalThis.COOKIE), _f68023e5066c.hook(), 
          _4a3d65fa17db && new _bed2b259674e.StudyJetServiceWorkerRuntime(_f68023e5066c).hook();
          let _63a45e116e67 = new _4547843d0a40.StudyJetContextEvent(_f68023e5066c.global.window, _f68023e5066c);
          _f68023e5066c.frame?.dispatchEvent(_63a45e116e67);
          let _3d842a962905 = new _4547843d0a40.UrlChangeEvent(_f68023e5066c.url.href);
          _f68023e5066c.isSubframe || _f68023e5066c.frame?.dispatchEvent(_3d842a962905);
        }
        Reflect.deleteProperty(globalThis, "WASM"), Reflect.deleteProperty(globalThis, "COOKIE");
      }
    },
    1862: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        NavigateEvent: () => i,
        StudyJetContextEvent: () => s,
        StudyJetGlobalDownloadEvent: () => n,
        UrlChangeEvent: () => a
      });
      class n extends Event {
        download;
        type="download";
        constructor(_f68023e5066c) {
          super("download"), this.download = _f68023e5066c;
        }
      }
      class i extends Event {
        url;
        type="navigate";
        constructor(_f68023e5066c) {
          super("navigate"), this.url = _f68023e5066c;
        }
      }
      class a extends Event {
        url;
        type="urlchange";
        constructor(_f68023e5066c) {
          super("urlchange"), this.url = _f68023e5066c;
        }
      }
      class s extends Event {
        window;
        client;
        type="contextInit";
        constructor(_f68023e5066c, _34f246cde5be) {
          super("contextInit"), this.window = _f68023e5066c, this.client = _34f246cde5be;
        }
      }
    },
    94: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      function n(_f68023e5066c, _34f246cde5be) {
        return Reflect.getOwnPropertyDescriptor(_f68023e5066c, _34f246cde5be);
      }
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        getOwnPropertyDescriptorHandler: () => n
      });
    },
    3255: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        NavigateEvent: () => _2dbb4876c500.NavigateEvent,
        StudyJetClient: () => _68051092d66a.StudyJetClient,
        StudyJetContextEvent: () => _2dbb4876c500.StudyJetContextEvent,
        StudyJetGlobalDownloadEvent: () => _2dbb4876c500.StudyJetGlobalDownloadEvent,
        StudyJetServiceWorkerRuntime: () => _d73671e3fec6.StudyJetServiceWorkerRuntime,
        UrlChangeEvent: () => _2dbb4876c500.UrlChangeEvent,
        createLocationProxy: () => _bed2b259674e.createLocationProxy,
        getOwnPropertyDescriptorHandler: () => _4547843d0a40.getOwnPropertyDescriptorHandler,
        isdedicated: () => _3d842a962905.isdedicated,
        isemulatedsw: () => _3d842a962905.isemulatedsw,
        isshared: () => _3d842a962905.isshared,
        issw: () => _3d842a962905.issw,
        iswindow: () => _3d842a962905.iswindow,
        isworker: () => _3d842a962905.isworker,
        loadAndHook: () => _3d842a962905.loadAndHook
      });
      var _68051092d66a = _63a45e116e67(336), _3d842a962905 = _63a45e116e67(1323), _2dbb4876c500 = _63a45e116e67(1862), _4547843d0a40 = _63a45e116e67(94), _bed2b259674e = _63a45e116e67(3696), _d73671e3fec6 = _63a45e116e67(8409);
      _63a45e116e67(3255);
    },
    3696: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        createLocationProxy: () => s
      });
      var _68051092d66a = _63a45e116e67(1862), _3d842a962905 = _63a45e116e67(1472), _2dbb4876c500 = _63a45e116e67(1323);
      function s(_f68023e5066c, _34f246cde5be) {
        let _63a45e116e67 = _2dbb4876c500.iswindow ? _34f246cde5be.Location : _34f246cde5be.WorkerLocation, _4547843d0a40 = {};
        Object.setPrototypeOf(_4547843d0a40, _63a45e116e67.prototype), _4547843d0a40.constructor = _63a45e116e67;
        let _bed2b259674e = _2dbb4876c500.iswindow ? _34f246cde5be.location : _63a45e116e67.prototype;
        for (let _63a45e116e67 of [ "protocol", "hash", "host", "hostname", "href", "origin", "pathname", "port", "search" ]) {
          let _3d842a962905 = _f68023e5066c.natives.call("Object.getOwnPropertyDescriptor", null, _bed2b259674e, _63a45e116e67);
          if (!_3d842a962905) continue;
          let _2dbb4876c500 = {
            configurable: !1,
            enumerable: !0
          };
          _3d842a962905.get && (_2dbb4876c500.get = new Proxy(_3d842a962905.get, {
            apply: () => _f68023e5066c.url[_63a45e116e67]
          })), _3d842a962905.set && (_2dbb4876c500.set = new Proxy(_3d842a962905.set, {
            apply(_3d842a962905, _2dbb4876c500, _4547843d0a40) {
              if ("href" === _63a45e116e67) {
                _f68023e5066c.url = _4547843d0a40[0];
                return;
              }
              if ("hash" === _63a45e116e67) {
                _34f246cde5be.location.hash = _4547843d0a40[0];
                let _63a45e116e67 = new _68051092d66a.UrlChangeEvent(_f68023e5066c.url.href);
                _f68023e5066c.isSubframe || _f68023e5066c.frame?.dispatchEvent(_63a45e116e67);
                return;
              }
              let _bed2b259674e = new URL(_f68023e5066c.url.href);
              _bed2b259674e[_63a45e116e67] = _4547843d0a40[0], _f68023e5066c.url = _bed2b259674e;
            }
          })), Object.defineProperty(_4547843d0a40, _63a45e116e67, _2dbb4876c500);
        }
        return _4547843d0a40.toString = new Proxy(_34f246cde5be.location.toString, {
          apply: () => _f68023e5066c.url.href
        }), _34f246cde5be.location.valueOf && (_4547843d0a40.valueOf = new Proxy(_34f246cde5be.location.valueOf, {
          apply: () => _f68023e5066c.url.href
        })), _34f246cde5be.location.assign && (_4547843d0a40.assign = new Proxy(_34f246cde5be.location.assign, {
          apply(_63a45e116e67, _2dbb4876c500, _4547843d0a40) {
            _4547843d0a40[0] = (0, _3d842a962905.Oy)(_4547843d0a40[0], _f68023e5066c.meta), 
            Reflect.apply(_63a45e116e67, _34f246cde5be.location, _4547843d0a40);
            let _bed2b259674e = new _68051092d66a.UrlChangeEvent(_f68023e5066c.url.href);
            _f68023e5066c.isSubframe || _f68023e5066c.frame?.dispatchEvent(_bed2b259674e);
          }
        })), _34f246cde5be.location.reload && (_4547843d0a40.reload = new Proxy(_34f246cde5be.location.reload, {
          apply(_f68023e5066c, _63a45e116e67, _68051092d66a) {
            Reflect.apply(_f68023e5066c, _34f246cde5be.location, _68051092d66a);
          }
        })), _34f246cde5be.location.replace && (_4547843d0a40.replace = new Proxy(_34f246cde5be.location.replace, {
          apply(_63a45e116e67, _2dbb4876c500, _4547843d0a40) {
            _4547843d0a40[0] = (0, _3d842a962905.Oy)(_4547843d0a40[0], _f68023e5066c.meta), 
            Reflect.apply(_63a45e116e67, _34f246cde5be.location, _4547843d0a40);
            let _bed2b259674e = new _68051092d66a.UrlChangeEvent(_f68023e5066c.url.href);
            _f68023e5066c.isSubframe || _f68023e5066c.frame?.dispatchEvent(_bed2b259674e);
          }
        })), _4547843d0a40;
      }
    },
    8382: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      function n(_f68023e5066c) {
        _f68023e5066c.Proxy("console.clear", {
          apply(_f68023e5066c) {
            _f68023e5066c.return(void 0);
          }
        });
        let _34f246cde5be = console.log;
        _f68023e5066c.Trap("console.log", {
          set(_f68023e5066c, _34f246cde5be) {},
          get: _f68023e5066c => _34f246cde5be
        });
      }
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        default: () => n
      });
    },
    4634: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        default: () => i
      });
      var _68051092d66a = _63a45e116e67(1472);
      function i(_f68023e5066c) {
        _f68023e5066c.Proxy("URL.createObjectURL", {
          apply(_34f246cde5be) {
            let _63a45e116e67 = _34f246cde5be.call();
            _63a45e116e67.startsWith("blob:") ? _34f246cde5be.return((0, _68051092d66a.IP)(_63a45e116e67, _f68023e5066c.meta)) : _34f246cde5be.return(_63a45e116e67);
          }
        }), _f68023e5066c.Proxy("URL.revokeObjectURL", {
          apply(_f68023e5066c) {
            _f68023e5066c.args[0] = (0, _68051092d66a.$n)(_f68023e5066c.args[0]);
          }
        });
      }
    },
    5026: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        default: () => i
      });
      var _68051092d66a = _63a45e116e67(1472);
      function i(_f68023e5066c, _34f246cde5be) {
        _f68023e5066c.Proxy("CacheStorage.prototype.open", {
          apply(_34f246cde5be) {
            _34f246cde5be.args[0] = `${_f68023e5066c.url.origin}@${_34f246cde5be.args[0]}`;
          }
        }), _f68023e5066c.Proxy("CacheStorage.prototype.has", {
          apply(_34f246cde5be) {
            _34f246cde5be.args[0] = `${_f68023e5066c.url.origin}@${_34f246cde5be.args[0]}`;
          }
        }), _f68023e5066c.Proxy("CacheStorage.prototype.match", {
          apply(_34f246cde5be) {
            ("string" == typeof _34f246cde5be.args[0] || _34f246cde5be.args[0] instanceof URL) && (_34f246cde5be.args[0] = (0, 
            _68051092d66a.Oy)(_34f246cde5be.args[0], _f68023e5066c.meta));
          }
        }), _f68023e5066c.Proxy("CacheStorage.prototype.delete", {
          apply(_34f246cde5be) {
            _34f246cde5be.args[0] = `${_f68023e5066c.url.origin}@${_34f246cde5be.args[0]}`;
          }
        }), _f68023e5066c.Proxy("Cache.prototype.add", {
          apply(_34f246cde5be) {
            ("string" == typeof _34f246cde5be.args[0] || _34f246cde5be.args[0] instanceof URL) && (_34f246cde5be.args[0] = (0, 
            _68051092d66a.Oy)(_34f246cde5be.args[0], _f68023e5066c.meta));
          }
        }), _f68023e5066c.Proxy("Cache.prototype.addAll", {
          apply(_34f246cde5be) {
            for (let _63a45e116e67 = 0; _63a45e116e67 < _34f246cde5be.args[0].length; _63a45e116e67++) ("string" == typeof _34f246cde5be.args[0][_63a45e116e67] || _34f246cde5be.args[0][_63a45e116e67] instanceof URL) && (_34f246cde5be.args[0][_63a45e116e67] = (0, 
            _68051092d66a.Oy)(_34f246cde5be.args[0][_63a45e116e67], _f68023e5066c.meta));
          }
        }), _f68023e5066c.Proxy("Cache.prototype.put", {
          apply(_34f246cde5be) {
            ("string" == typeof _34f246cde5be.args[0] || _34f246cde5be.args[0] instanceof URL) && (_34f246cde5be.args[0] = (0, 
            _68051092d66a.Oy)(_34f246cde5be.args[0], _f68023e5066c.meta));
          }
        }), _f68023e5066c.Proxy("Cache.prototype.match", {
          apply(_34f246cde5be) {
            ("string" == typeof _34f246cde5be.args[0] || _34f246cde5be.args[0] instanceof URL) && (_34f246cde5be.args[0] = (0, 
            _68051092d66a.Oy)(_34f246cde5be.args[0], _f68023e5066c.meta));
          }
        }), _f68023e5066c.Proxy("Cache.prototype.matchAll", {
          apply(_34f246cde5be) {
            (_34f246cde5be.args[0] && "string" == typeof _34f246cde5be.args[0] || _34f246cde5be.args[0] && _34f246cde5be.args[0] instanceof URL) && (_34f246cde5be.args[0] = (0, 
            _68051092d66a.Oy)(_34f246cde5be.args[0], _f68023e5066c.meta));
          }
        }), _f68023e5066c.Proxy("Cache.prototype.keys", {
          apply(_34f246cde5be) {
            (_34f246cde5be.args[0] && "string" == typeof _34f246cde5be.args[0] || _34f246cde5be.args[0] && _34f246cde5be.args[0] instanceof URL) && (_34f246cde5be.args[0] = (0, 
            _68051092d66a.Oy)(_34f246cde5be.args[0], _f68023e5066c.meta));
          }
        }), _f68023e5066c.Proxy("Cache.prototype.delete", {
          apply(_34f246cde5be) {
            ("string" == typeof _34f246cde5be.args[0] || _34f246cde5be.args[0] instanceof URL) && (_34f246cde5be.args[0] = (0, 
            _68051092d66a.Oy)(_34f246cde5be.args[0], _f68023e5066c.meta));
          }
        });
      }
    },
    6627: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        default: () => i
      });
      var _68051092d66a = _63a45e116e67(1323);
      function i(_f68023e5066c, _34f246cde5be) {
        let r = _f68023e5066c => {
          let _63a45e116e67 = _f68023e5066c.split("."), _68051092d66a = _63a45e116e67.pop(), _3d842a962905 = _63a45e116e67.reduce((_f68023e5066c, _34f246cde5be) => _f68023e5066c?.[_34f246cde5be], _34f246cde5be);
          _3d842a962905 && _68051092d66a && _68051092d66a in _3d842a962905 && delete _3d842a962905[_68051092d66a];
        };
        r("BarcodeDetector"), r("FaceDetector"), r("TextDetector"), _68051092d66a.iswindow && r("ServiceWorkerRegistration.prototype.sync"), 
        _68051092d66a.isemulatedsw && (r("SyncManager"), r("SyncEvent")), r("TrustedHTML"), 
        r("TrustedScript"), r("TrustedScriptURL"), r("TrustedTypePolicy"), r("TrustedTypePolicyFactory"), 
        _34f246cde5be.__defineGetter__("trustedTypes", () => void 0), r("Navigator.prototype.joinAdInterestGroup"), 
        _68051092d66a.iswindow && (r("MediaDevices.prototype.setCaptureHandleConfig"), r("Navigator.prototype.bluetooth"), 
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
    582: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        argdbg: () => a,
        default: () => s,
        enabled: () => i
      });
      var _68051092d66a = _63a45e116e67(37);
      let i = _f68023e5066c => (0, _68051092d66a.U5)("captureErrors", _f68023e5066c.url);
      function a(_f68023e5066c, _34f246cde5be = []) {
        switch (typeof _f68023e5066c) {
         case "string":
          break;

         case "object":
          if (_f68023e5066c && _f68023e5066c[Symbol.iterator] && "function" == typeof _f68023e5066c[Symbol.iterator]) for (let _63a45e116e67 in _f68023e5066c) {
            let _68051092d66a = Object.getOwnPropertyDescriptor(_f68023e5066c, _63a45e116e67);
            if (_68051092d66a && _68051092d66a.get) continue;
            let _3d842a962905 = _f68023e5066c[_63a45e116e67];
            _34f246cde5be.includes(_3d842a962905) || (_34f246cde5be.push(_3d842a962905), a(_3d842a962905, _34f246cde5be));
          }
        }
      }
      function s(_f68023e5066c, _34f246cde5be) {
        let _63a45e116e67 = console.warn;
        _34f246cde5be.$scramerr = function(_f68023e5066c) {
          _63a45e116e67("CAUGHT ERROR", _f68023e5066c);
        }, _34f246cde5be.$scramdbg = function(_f68023e5066c, _34f246cde5be) {
          return _f68023e5066c && "object" == typeof _f68023e5066c && _f68023e5066c.length > 0 && a(_f68023e5066c), 
          a(_34f246cde5be), _34f246cde5be;
        }, _f68023e5066c.Proxy("Promise.prototype.catch", {
          apply(_f68023e5066c) {
            _f68023e5066c.args[0] && (_f68023e5066c.args[0] = new Proxy(_f68023e5066c.args[0], {
              apply(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
                Reflect.apply(_f68023e5066c, _34f246cde5be, _63a45e116e67);
              }
            }));
          }
        });
      }
    },
    6143: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        default: () => s,
        enabled: () => a
      });
      var _68051092d66a = _63a45e116e67(37), _3d842a962905 = _63a45e116e67(1472);
      let a = _f68023e5066c => (0, _68051092d66a.U5)("cleanErrors", _f68023e5066c.url);
      function s(_f68023e5066c, _34f246cde5be) {
        let r = (_f68023e5066c, _34f246cde5be) => {
          let _63a45e116e67 = _f68023e5066c.stack;
          for (let _f68023e5066c = 0; _f68023e5066c < _34f246cde5be.length; _f68023e5066c++) {
            let _2dbb4876c500 = _34f246cde5be[_f68023e5066c].getFileName();
            try {
              if (_2dbb4876c500.endsWith(_68051092d66a.$W.files.all)) {
                let _f68023e5066c = _63a45e116e67.split("\n"), _34f246cde5be = _f68023e5066c.find(_f68023e5066c => _f68023e5066c.includes(_2dbb4876c500));
                _f68023e5066c.splice(_34f246cde5be, 1), _63a45e116e67 = _f68023e5066c.join("\n");
                continue;
              }
            } catch {}
            try {
              _63a45e116e67 = _63a45e116e67.replaceAll(_2dbb4876c500, (0, _3d842a962905.v2)(_2dbb4876c500));
            } catch {}
          }
          return _63a45e116e67;
        };
        _f68023e5066c.Trap("Error.prepareStackTrace", {
          get: _f68023e5066c => r,
          set(_f68023e5066c) {}
        });
      }
    },
    591: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        default: () => a,
        indirectEval: () => s
      });
      var _68051092d66a = _63a45e116e67(37), _3d842a962905 = _63a45e116e67(1478);
      function a(_f68023e5066c, _34f246cde5be) {
        Object.defineProperty(_34f246cde5be, _68051092d66a.$W.globals.rewritefn, {
          value: function(_34f246cde5be) {
            return "string" != typeof _34f246cde5be ? _34f246cde5be : (0, _3d842a962905.o)(_34f246cde5be, "(direct eval proxy)", _f68023e5066c.meta);
          },
          writable: !1,
          configurable: !1
        });
      }
      function s(_f68023e5066c, _34f246cde5be) {
        let _63a45e116e67;
        return "string" != typeof _34f246cde5be ? _34f246cde5be : ("accounts.google.com" === this.url.hostname ? (console.log("USING STRICT EVAL - BOTGUARD"), 
        _63a45e116e67 = Function(`\n\t\t\t"use strict";\n\t\t\treturn eval;\n\t\t`)) : _63a45e116e67 = this.global.eval, 
        _63a45e116e67((0, _3d842a962905.o)(_34f246cde5be, "(indirect eval proxy)", this.meta)));
      }
    },
    3481: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        default: () => o
      });
      var _68051092d66a = _63a45e116e67(1323), _3d842a962905 = _63a45e116e67(1472), _2dbb4876c500 = _63a45e116e67(94);
      let _4547843d0a40 = Symbol.for("studyjet original onevent function");
      function o(_f68023e5066c, _34f246cde5be) {
        let _63a45e116e67 = {
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
              return "object" == typeof this.data && "$studyjet$origin" in this.data ? this.data.$studyjet$origin : _f68023e5066c.url.origin;
            },
            data() {
              return "object" == typeof this.data && "$studyjet$data" in this.data ? this.data.$studyjet$data : this.data;
            }
          },
          hashchange: {
            oldURL() {
              return (0, _3d842a962905.v2)(this.oldURL);
            },
            newURL() {
              return (0, _3d842a962905.v2)(this.newURL);
            }
          },
          storage: {
            _init() {
              return this.key.startsWith(_f68023e5066c.url.host + "@");
            },
            key() {
              return this.key.substring(this.key.indexOf("@") + 1);
            },
            url() {
              return (0, _3d842a962905.v2)(this.url);
            }
          }
        };
        function o(_f68023e5066c) {
          return new Proxy(_f68023e5066c, {
            apply(_f68023e5066c, _68051092d66a, _3d842a962905) {
              let _4547843d0a40 = _3d842a962905[0];
              if (_4547843d0a40.isTrusted) {
                let _f68023e5066c = _4547843d0a40.type;
                if (_f68023e5066c in _63a45e116e67) {
                  let _34f246cde5be = _63a45e116e67[_f68023e5066c];
                  if (_34f246cde5be._init && !1 === _34f246cde5be._init.call(_4547843d0a40)) return;
                  _3d842a962905[0] = new Proxy(_4547843d0a40, {
                    get(_f68023e5066c, _63a45e116e67, _68051092d66a) {
                      let _3d842a962905 = Reflect.get(_f68023e5066c, _63a45e116e67);
                      return _63a45e116e67 in _34f246cde5be ? _34f246cde5be[_63a45e116e67].call(_f68023e5066c) : "function" == typeof _3d842a962905 ? new Proxy(_3d842a962905, {
                        apply: (_f68023e5066c, _34f246cde5be, _63a45e116e67) => _34f246cde5be === _68051092d66a ? Reflect.apply(_f68023e5066c, _4547843d0a40, _63a45e116e67) : Reflect.apply(_f68023e5066c, _34f246cde5be, _63a45e116e67)
                      }) : _3d842a962905;
                    },
                    getOwnPropertyDescriptor: _2dbb4876c500.getOwnPropertyDescriptorHandler
                  });
                }
              }
              return _34f246cde5be.event || Object.defineProperty(_34f246cde5be, "event", {
                get: () => _3d842a962905[0],
                configurable: !0
              }), Reflect.apply(_f68023e5066c, _68051092d66a, _3d842a962905);
            },
            getOwnPropertyDescriptor: _2dbb4876c500.getOwnPropertyDescriptorHandler
          });
        }
        _f68023e5066c.Proxy("EventTarget.prototype.addEventListener", {
          apply(_34f246cde5be) {
            if ("function" != typeof _34f246cde5be.args[1]) return;
            let _63a45e116e67 = _34f246cde5be.args[1], _68051092d66a = o(_63a45e116e67);
            _34f246cde5be.args[1] = _68051092d66a;
            let _3d842a962905 = _f68023e5066c.eventcallbacks.get(_34f246cde5be.this);
            (_3d842a962905 ||= []).push({
              event: _34f246cde5be.args[0],
              originalCallback: _63a45e116e67,
              proxiedCallback: _68051092d66a
            }), _f68023e5066c.eventcallbacks.set(_34f246cde5be.this, _3d842a962905);
          }
        }), _f68023e5066c.Proxy("EventTarget.prototype.removeEventListener", {
          apply(_34f246cde5be) {
            if ("function" != typeof _34f246cde5be.args[1]) return;
            let _63a45e116e67 = _f68023e5066c.eventcallbacks.get(_34f246cde5be.this);
            if (!_63a45e116e67) return;
            let _68051092d66a = _63a45e116e67.findIndex(_f68023e5066c => _f68023e5066c.event === _34f246cde5be.args[0] && _f68023e5066c.originalCallback === _34f246cde5be.args[1]);
            if (-1 === _68051092d66a) return;
            let _3d842a962905 = _63a45e116e67.splice(_68051092d66a, 1);
            _f68023e5066c.eventcallbacks.set(_34f246cde5be.this, _63a45e116e67), _34f246cde5be.args[1] = _3d842a962905[0].proxiedCallback;
          }
        });
        let _bed2b259674e = [ _34f246cde5be.self, _34f246cde5be.MessagePort.prototype ];
        for (let _3d842a962905 of (_68051092d66a.iswindow && _bed2b259674e.push(_34f246cde5be.HTMLElement.prototype), 
        _34f246cde5be.Worker && _bed2b259674e.push(_34f246cde5be.Worker.prototype), _bed2b259674e)) for (let _34f246cde5be of Reflect.ownKeys(_3d842a962905)) if ("string" == typeof _34f246cde5be && _34f246cde5be.startsWith("on") && _63a45e116e67[_34f246cde5be.slice(2)]) {
          let _63a45e116e67 = _f68023e5066c.natives.call("Object.getOwnPropertyDescriptor", null, _3d842a962905, _34f246cde5be);
          if (!_63a45e116e67.get || !_63a45e116e67.set || !_63a45e116e67.configurable) continue;
          _f68023e5066c.RawTrap(_3d842a962905, _34f246cde5be, {
            get(_f68023e5066c) {
              return this[_4547843d0a40] ? this[_4547843d0a40] : _f68023e5066c.get();
            },
            set(_f68023e5066c, _34f246cde5be) {
              if (this[_4547843d0a40] = _34f246cde5be, "function" != typeof _34f246cde5be) return _f68023e5066c.set(_34f246cde5be);
              _f68023e5066c.set(o(_34f246cde5be));
            }
          });
        }
      }
    },
    249: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        default: () => a
      });
      var _68051092d66a = _63a45e116e67(1478);
      function i(_f68023e5066c, _34f246cde5be) {
        let _63a45e116e67 = _f68023e5066c.call().toString(), _3d842a962905 = (0, _68051092d66a.o)(`return ${_63a45e116e67}`, "(function proxy)", _34f246cde5be.meta);
        _f68023e5066c.return(_f68023e5066c.fn(_3d842a962905)());
      }
      function a(_f68023e5066c, _34f246cde5be) {
        let _63a45e116e67 = {
          apply(_34f246cde5be) {
            i(_34f246cde5be, _f68023e5066c);
          },
          construct(_34f246cde5be) {
            i(_34f246cde5be, _f68023e5066c);
          }
        };
        _f68023e5066c.Proxy("Function", _63a45e116e67);
        let _68051092d66a = _f68023e5066c.natives.call("eval", null, "(function () {})").constructor, _3d842a962905 = _f68023e5066c.natives.call("eval", null, "(async function () {})").constructor, _2dbb4876c500 = _f68023e5066c.natives.call("eval", null, "(function* () {})").constructor, _4547843d0a40 = _f68023e5066c.natives.call("eval", null, "(async function* () {})").constructor;
        _f68023e5066c.RawProxy(_68051092d66a.prototype, "constructor", _63a45e116e67), _f68023e5066c.RawProxy(_3d842a962905.prototype, "constructor", _63a45e116e67), 
        _f68023e5066c.RawProxy(_2dbb4876c500.prototype, "constructor", _63a45e116e67), _f68023e5066c.RawProxy(_4547843d0a40.prototype, "constructor", _63a45e116e67);
      }
    },
    2468: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        default: () => a
      });
      var _68051092d66a = _63a45e116e67(37), _3d842a962905 = _63a45e116e67(1472);
      function a(_f68023e5066c, _34f246cde5be) {
        let _63a45e116e67 = _f68023e5066c.natives.call("Function", null, "url", "return import(url)");
        Object.defineProperty(_34f246cde5be, _68051092d66a.$W.globals.importfn, {
          value: function(_34f246cde5be, _68051092d66a) {
            let _2dbb4876c500 = new URL(_68051092d66a, _34f246cde5be).href;
            return _68051092d66a.includes(":") || _68051092d66a.startsWith("/") || _68051092d66a.startsWith(".") || _68051092d66a.startsWith("..") ? _63a45e116e67(`${(0, 
            _3d842a962905.Oy)(_2dbb4876c500, _f68023e5066c.meta)}?type=module`) : _63a45e116e67(_68051092d66a);
          },
          writable: !1,
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_34f246cde5be, _68051092d66a.$W.globals.metafn, {
          value: function(_f68023e5066c, _34f246cde5be) {
            return _f68023e5066c.url = _34f246cde5be, _f68023e5066c.resolve = function(_f68023e5066c) {
              return new URL(_f68023e5066c, _34f246cde5be).href;
            }, _f68023e5066c;
          },
          writable: !1,
          configurable: !1,
          enumerable: !1
        });
      }
    },
    4338: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      function n(_f68023e5066c) {
        _f68023e5066c.Proxy("IDBFactory.prototype.open", {
          apply(_34f246cde5be) {
            _34f246cde5be.args[0] = `${_f68023e5066c.url.origin}@${_34f246cde5be.args[0]}`;
          }
        }), _f68023e5066c.Trap("IDBDatabase.prototype.name", {
          get(_f68023e5066c) {
            let _34f246cde5be = _f68023e5066c.get();
            return _34f246cde5be.substring(_34f246cde5be.indexOf("@") + 1);
          }
        });
      }
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        default: () => n
      });
    },
    6593: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      function n(_f68023e5066c) {
        _f68023e5066c.Proxy("StorageManager.prototype.getDirectory", {
          apply(_34f246cde5be) {
            let _63a45e116e67 = _34f246cde5be.call();
            _34f246cde5be.return((async () => {
              let _34f246cde5be = await _63a45e116e67, _68051092d66a = await _34f246cde5be.getDirectoryHandle(`${_f68023e5066c.url.origin.replace(/\/|\s|\./g, "-")}`, {
                create: !0
              });
              return Object.defineProperty(_68051092d66a, "name", {
                value: "",
                writable: !1
              }), _68051092d66a;
            })());
          }
        });
      }
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        default: () => n
      });
    },
    1320: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        default: () => s
      });
      var _68051092d66a = _63a45e116e67(1323), _3d842a962905 = _63a45e116e67(2794), _2dbb4876c500 = _63a45e116e67(1914);
      function s(_f68023e5066c) {
        _68051092d66a.iswindow && _f68023e5066c.Proxy("window.postMessage", {
          apply(_f68023e5066c) {
            let {constructor: {constructor: _34f246cde5be}} = "object" == typeof _f68023e5066c.args[0] && null !== _f68023e5066c.args[0] ? _f68023e5066c.args[0] : "object" == typeof _f68023e5066c.args[2] && null !== _f68023e5066c.args[2] ? _f68023e5066c.args[2] : _f68023e5066c.this && _2dbb4876c500.POLLUTANT in _f68023e5066c.this && "object" == typeof _f68023e5066c.this[_2dbb4876c500.POLLUTANT] && null !== _f68023e5066c.this[_2dbb4876c500.POLLUTANT] ? _f68023e5066c.this[_2dbb4876c500.POLLUTANT] : {}, _63a45e116e67 = _34f246cde5be("return globalThis")()[_3d842a962905.pX], _68051092d66a = _34f246cde5be("...args", "this(...args)");
            _f68023e5066c.args[0] = {
              $studyjet$messagetype: "window",
              $studyjet$origin: _63a45e116e67.url.origin,
              $studyjet$data: _f68023e5066c.args[0]
            }, "string" == typeof _f68023e5066c.args[1] && (_f68023e5066c.args[1] = "*"), "object" == typeof _f68023e5066c.args[1] && (_f68023e5066c.args[1].targetOrigin = "*"), 
            _f68023e5066c.return(_68051092d66a.call(_f68023e5066c.fn, ..._f68023e5066c.args));
          }
        });
        let _34f246cde5be = [ "MessagePort.prototype.postMessage" ];
        self.Worker && _34f246cde5be.push("Worker.prototype.postMessage"), _68051092d66a.iswindow || _34f246cde5be.push("self.postMessage"), 
        _f68023e5066c.Proxy(_34f246cde5be, {
          apply(_f68023e5066c) {
            _f68023e5066c.args[0] = {
              $studyjet$messagetype: "worker",
              $studyjet$data: _f68023e5066c.args[0]
            };
          }
        });
      }
    },
    1914: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        POLLUTANT: () => _3d842a962905,
        default: () => a
      });
      var _68051092d66a = _63a45e116e67(37);
      let _3d842a962905 = Symbol.for("studyjet realm pollutant");
      function a(_f68023e5066c, _34f246cde5be) {
        Object.defineProperty(_34f246cde5be.Object.prototype, _68051092d66a.$W.globals.setrealmfn, {
          value(_f68023e5066c) {
            return Object.defineProperty(this, _3d842a962905, {
              value: _f68023e5066c,
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
    9701: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        default: () => i
      });
      var _68051092d66a = _63a45e116e67(1472);
      function i(_f68023e5066c) {
        _f68023e5066c.Proxy("EventSource", {
          construct(_34f246cde5be) {
            _34f246cde5be.args[0] = (0, _68051092d66a.Oy)(_34f246cde5be.args[0], _f68023e5066c.meta);
          }
        }), _f68023e5066c.Trap("EventSource.prototype.url", {
          get(_f68023e5066c) {
            (0, _68051092d66a.v2)(_f68023e5066c.get());
          }
        });
      }
    },
    6972: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        default: () => a
      });
      var _68051092d66a = _63a45e116e67(1323), _3d842a962905 = _63a45e116e67(1472);
      function a(_f68023e5066c) {
        _f68023e5066c.Proxy("fetch", {
          apply(_34f246cde5be) {
            ("string" == typeof _34f246cde5be.args[0] || _34f246cde5be.args[0] instanceof URL) && (_34f246cde5be.args[0] = (0, 
            _3d842a962905.Oy)(_34f246cde5be.args[0], _f68023e5066c.meta), _68051092d66a.isemulatedsw && (_34f246cde5be.args[0] += "?from=swruntime"));
          }
        }), _f68023e5066c.Proxy("Request", {
          construct(_34f246cde5be) {
            ("string" == typeof _34f246cde5be.args[0] || _34f246cde5be.args[0] instanceof URL) && (_34f246cde5be.args[0] = (0, 
            _3d842a962905.Oy)(_34f246cde5be.args[0], _f68023e5066c.meta), _68051092d66a.isemulatedsw && (_34f246cde5be.args[0] += "?from=swruntime"));
          }
        }), _f68023e5066c.Trap("Response.prototype.url", {
          get: _f68023e5066c => (0, _3d842a962905.v2)(_f68023e5066c.get())
        }), _f68023e5066c.Trap("Request.prototype.url", {
          get: _f68023e5066c => (0, _3d842a962905.v2)(_f68023e5066c.get())
        });
      }
    },
    9931: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      function n(_f68023e5066c, _34f246cde5be) {
        let _63a45e116e67 = new WeakMap, _68051092d66a = new WeakMap;
        _f68023e5066c.Proxy("WebSocket", {
          construct(_68051092d66a) {
            let _3d842a962905 = new EventTarget;
            Object.setPrototypeOf(_3d842a962905, _68051092d66a.fn.prototype), _3d842a962905.constructor = _68051092d66a.fn;
            let _2dbb4876c500 = _f68023e5066c.bare.createWebSocket(_68051092d66a.args[0], _68051092d66a.args[1], null, {
              "User-Agent": _34f246cde5be.navigator.userAgent,
              Origin: _f68023e5066c.url.origin
            }), _4547843d0a40 = {
              extensions: "",
              protocol: "",
              url: _68051092d66a.args[0],
              binaryType: "blob",
              barews: _2dbb4876c500,
              onclose: null,
              onerror: null,
              onmessage: null,
              onopen: null
            };
            function o(_f68023e5066c) {
              _4547843d0a40["on" + _f68023e5066c.type]?.(new Proxy(_f68023e5066c, {
                get: (_f68023e5066c, _34f246cde5be) => "isTrusted" === _34f246cde5be || Reflect.get(_f68023e5066c, _34f246cde5be)
              })), _3d842a962905.dispatchEvent(_f68023e5066c);
            }
            _2dbb4876c500.addEventListener("open", () => {
              o(new Event("open"));
            }), _2dbb4876c500.addEventListener("close", _f68023e5066c => {
              o(new CloseEvent("close", _f68023e5066c));
            }), _2dbb4876c500.addEventListener("message", async _f68023e5066c => {
              let _34f246cde5be = _f68023e5066c.data;
              "string" == typeof _34f246cde5be || ("byteLength" in _34f246cde5be ? "blob" === _4547843d0a40.binaryType ? _34f246cde5be = new Blob([ _34f246cde5be ]) : Object.setPrototypeOf(_34f246cde5be, ArrayBuffer.prototype) : "arrayBuffer" in _34f246cde5be && "arraybuffer" === _4547843d0a40.binaryType && Object.setPrototypeOf(_34f246cde5be = await _34f246cde5be.arrayBuffer(), ArrayBuffer.prototype)), 
              o(new MessageEvent("message", {
                data: _34f246cde5be,
                origin: _f68023e5066c.origin,
                lastEventId: _f68023e5066c.lastEventId,
                source: _f68023e5066c.source,
                ports: _f68023e5066c.ports
              }));
            }), _2dbb4876c500.addEventListener("error", () => {
              o(new Event("error"));
            }), _63a45e116e67.set(_3d842a962905, _4547843d0a40), _68051092d66a.return(_3d842a962905);
          }
        }), _f68023e5066c.Trap("WebSocket.prototype.binaryType", {
          get: _f68023e5066c => _63a45e116e67.get(_f68023e5066c.this).binaryType,
          set(_f68023e5066c, _34f246cde5be) {
            let _68051092d66a = _63a45e116e67.get(_f68023e5066c.this);
            ("blob" === _34f246cde5be || "arraybuffer" === _34f246cde5be) && (_68051092d66a.binaryType = _34f246cde5be);
          }
        }), _f68023e5066c.Trap("WebSocket.prototype.bufferedAmount", {
          get: () => 0
        }), _f68023e5066c.Trap("WebSocket.prototype.extensions", {
          get: _f68023e5066c => _63a45e116e67.get(_f68023e5066c.this).extensions
        }), _f68023e5066c.Trap("WebSocket.prototype.onclose", {
          get: _f68023e5066c => _63a45e116e67.get(_f68023e5066c.this).onclose,
          set(_f68023e5066c, _34f246cde5be) {
            _63a45e116e67.get(_f68023e5066c.this).onclose = _34f246cde5be;
          }
        }), _f68023e5066c.Trap("WebSocket.prototype.onerror", {
          get: _f68023e5066c => _63a45e116e67.get(_f68023e5066c.this).onerror,
          set(_f68023e5066c, _34f246cde5be) {
            _63a45e116e67.get(_f68023e5066c.this).onerror = _34f246cde5be;
          }
        }), _f68023e5066c.Trap("WebSocket.prototype.onmessage", {
          get: _f68023e5066c => _63a45e116e67.get(_f68023e5066c.this).onmessage,
          set(_f68023e5066c, _34f246cde5be) {
            _63a45e116e67.get(_f68023e5066c.this).onmessage = _34f246cde5be;
          }
        }), _f68023e5066c.Trap("WebSocket.prototype.onopen", {
          get: _f68023e5066c => _63a45e116e67.get(_f68023e5066c.this).onopen,
          set(_f68023e5066c, _34f246cde5be) {
            _63a45e116e67.get(_f68023e5066c.this).onopen = _34f246cde5be;
          }
        }), _f68023e5066c.Trap("WebSocket.prototype.url", {
          get: _f68023e5066c => _63a45e116e67.get(_f68023e5066c.this).url
        }), _f68023e5066c.Trap("WebSocket.prototype.protocol", {
          get: _f68023e5066c => _63a45e116e67.get(_f68023e5066c.this).protocol
        }), _f68023e5066c.Trap("WebSocket.prototype.readyState", {
          get: _f68023e5066c => _63a45e116e67.get(_f68023e5066c.this).barews.readyState
        }), _f68023e5066c.Proxy("WebSocket.prototype.send", {
          apply(_f68023e5066c) {
            let _34f246cde5be = _63a45e116e67.get(_f68023e5066c.this);
            _f68023e5066c.return(_34f246cde5be.barews.send(_f68023e5066c.args[0]));
          }
        }), _f68023e5066c.Proxy("WebSocket.prototype.close", {
          apply(_f68023e5066c) {
            let _34f246cde5be = _63a45e116e67.get(_f68023e5066c.this);
            void 0 === _f68023e5066c.args[0] && (_f68023e5066c.args[0] = 1e3), void 0 === _f68023e5066c.args[1] && (_f68023e5066c.args[1] = ""), 
            _f68023e5066c.return(_34f246cde5be.barews.close(_f68023e5066c.args[0], _f68023e5066c.args[1]));
          }
        }), _f68023e5066c.Proxy("WebSocketStream", {
          construct(_63a45e116e67) {
            let _3d842a962905, _2dbb4876c500, _4547843d0a40, _bed2b259674e = {};
            Object.setPrototypeOf(_bed2b259674e, _63a45e116e67.fn.prototype), _bed2b259674e.constructor = _63a45e116e67.fn;
            let _d73671e3fec6 = _f68023e5066c.bare.createWebSocket(_63a45e116e67.args[0], _63a45e116e67.args[1], null, {
              "User-Agent": _34f246cde5be.navigator.userAgent,
              Origin: _f68023e5066c.url.origin
            });
            _63a45e116e67.args[1]?.signal.addEventListener("abort", () => {
              _d73671e3fec6.close(1e3, "");
            });
            let _ef72ad0b9c92 = {
              extensions: "",
              protocol: "",
              url: _63a45e116e67.args[0],
              barews: _d73671e3fec6,
              opened: new Promise((_f68023e5066c, _34f246cde5be) => {
                _3d842a962905 = _f68023e5066c, _4547843d0a40 = _34f246cde5be;
              }),
              closed: new Promise(_f68023e5066c => {
                _2dbb4876c500 = _f68023e5066c;
              }),
              readable: new ReadableStream({
                start(_f68023e5066c) {
                  _d73671e3fec6.addEventListener("message", async _34f246cde5be => {
                    let _63a45e116e67 = _34f246cde5be.data;
                    "string" == typeof _63a45e116e67 || ("byteLength" in _63a45e116e67 ? Object.setPrototypeOf(_63a45e116e67, ArrayBuffer.prototype) : "arrayBuffer" in _63a45e116e67 && Object.setPrototypeOf(_63a45e116e67 = await _63a45e116e67.arrayBuffer(), ArrayBuffer.prototype)), 
                    _f68023e5066c.enqueue(_63a45e116e67);
                  });
                }
              }),
              writable: new WritableStream({
                write(_f68023e5066c) {
                  _d73671e3fec6.send(_f68023e5066c);
                }
              })
            };
            _d73671e3fec6.addEventListener("open", () => {
              _3d842a962905({
                readable: _ef72ad0b9c92.readable,
                writable: _ef72ad0b9c92.writable,
                extensions: _ef72ad0b9c92.extensions,
                protocol: _ef72ad0b9c92.protocol
              });
            }), _d73671e3fec6.addEventListener("close", _f68023e5066c => {
              _2dbb4876c500({
                code: _f68023e5066c.code,
                reason: _f68023e5066c.reason
              });
            }), _d73671e3fec6.addEventListener("error", _f68023e5066c => {
              _4547843d0a40(_f68023e5066c);
            }), _68051092d66a.set(_bed2b259674e, _ef72ad0b9c92), _63a45e116e67.return(_bed2b259674e);
          }
        }), _f68023e5066c.Trap("WebSocketStream.prototype.closed", {
          get: _f68023e5066c => _68051092d66a.get(_f68023e5066c.this).closed
        }), _f68023e5066c.Trap("WebSocketStream.prototype.opened", {
          get: _f68023e5066c => _68051092d66a.get(_f68023e5066c.this).opened
        }), _f68023e5066c.Trap("WebSocketStream.prototype.url", {
          get: _f68023e5066c => _68051092d66a.get(_f68023e5066c.this).url
        }), _f68023e5066c.Proxy("WebSocketStream.prototype.close", {
          apply(_f68023e5066c) {
            let _34f246cde5be = _68051092d66a.get(_f68023e5066c.this);
            return _f68023e5066c.args[0] ? (void 0 === _f68023e5066c.args[0].closeCode && (_f68023e5066c.args[0].closeCode = 1e3), 
            void 0 === _f68023e5066c.args[0].reason && (_f68023e5066c.args[0].reason = ""), 
            _f68023e5066c.return(_34f246cde5be.barews.close(_f68023e5066c.args[0].closeCode, _f68023e5066c.args[0].reason))) : _f68023e5066c.return(_34f246cde5be.barews.close(1e3, ""));
          }
        });
      }
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        default: () => n
      });
    },
    248: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        default: () => a
      });
      var _68051092d66a = _63a45e116e67(37), _3d842a962905 = _63a45e116e67(1472);
      function a(_f68023e5066c, _34f246cde5be) {
        let _63a45e116e67;
        _34f246cde5be.Worker && (0, _68051092d66a.U5)("syncxhr", _f68023e5066c.url) && (_63a45e116e67 = _f68023e5066c.natives.construct("Worker", _68051092d66a.$W.files.sync));
        let _2dbb4876c500 = Symbol("xhr original args"), _4547843d0a40 = Symbol("xhr headers");
        _f68023e5066c.Proxy("XMLHttpRequest.prototype.open", {
          apply(_34f246cde5be) {
            _34f246cde5be.args[1] && (_34f246cde5be.args[1] = (0, _3d842a962905.Oy)(_34f246cde5be.args[1], _f68023e5066c.meta)), 
            void 0 === _34f246cde5be.args[2] && (_34f246cde5be.args[2] = !0), _34f246cde5be.this[_2dbb4876c500] = _34f246cde5be.args;
          }
        }), _f68023e5066c.Proxy("XMLHttpRequest.prototype.setRequestHeader", {
          apply(_f68023e5066c) {
            (_f68023e5066c.this[_4547843d0a40] || (_f68023e5066c.this[_4547843d0a40] = {}))[_f68023e5066c.args[0]] = _f68023e5066c.args[1];
          }
        }), _f68023e5066c.Proxy("XMLHttpRequest.prototype.send", {
          apply(_34f246cde5be) {
            let _3d842a962905 = _34f246cde5be.this[_2dbb4876c500];
            if (!_3d842a962905 || _3d842a962905[2]) return;
            if (!(0, _68051092d66a.U5)("syncxhr", _f68023e5066c.url)) return console.warn("ignoring request - sync xhr disabled in flags"), 
            _34f246cde5be.return(void 0);
            let _bed2b259674e = new SharedArrayBuffer(1024, {
              maxByteLength: 2147483647
            }), _d73671e3fec6 = new DataView(_bed2b259674e);
            _f68023e5066c.natives.call("Worker.prototype.postMessage", _63a45e116e67, {
              sab: _bed2b259674e,
              args: _3d842a962905,
              headers: _34f246cde5be.this[_4547843d0a40],
              body: _34f246cde5be.args[0]
            });
            let _ef72ad0b9c92 = performance.now();
            for (;0 === _d73671e3fec6.getUint8(0); ) if (performance.now() - _ef72ad0b9c92 > 1e3) throw Error("xhr timeout");
            let _44f0b1ed911f = _d73671e3fec6.getUint16(1), _0a3b7a57b594 = _d73671e3fec6.getUint32(3), _3644bb2f5311 = new Uint8Array(_0a3b7a57b594);
            _3644bb2f5311.set(new Uint8Array(_bed2b259674e.slice(7, 7 + _0a3b7a57b594)));
            let _9acaff0e6a8f = (new TextDecoder).decode(_3644bb2f5311), _4a3d65fa17db = _d73671e3fec6.getUint32(7 + _0a3b7a57b594), _4794763b2606 = new Uint8Array(_4a3d65fa17db);
            _4794763b2606.set(new Uint8Array(_bed2b259674e.slice(11 + _0a3b7a57b594, 11 + _0a3b7a57b594 + _4a3d65fa17db)));
            let _5e74b8896751 = (new TextDecoder).decode(_4794763b2606);
            _f68023e5066c.RawTrap(_34f246cde5be.this, "status", {
              get: () => _44f0b1ed911f
            }), _f68023e5066c.RawTrap(_34f246cde5be.this, "responseText", {
              get: () => _5e74b8896751
            }), _f68023e5066c.RawTrap(_34f246cde5be.this, "response", {
              get: () => "arraybuffer" === _34f246cde5be.this.responseType ? _4794763b2606.buffer : _5e74b8896751
            }), _f68023e5066c.RawTrap(_34f246cde5be.this, "responseXML", {
              get: () => (new DOMParser).parseFromString(_5e74b8896751, "text/xml")
            }), _f68023e5066c.RawTrap(_34f246cde5be.this, "getAllResponseHeaders", {
              get: () => () => _9acaff0e6a8f
            }), _f68023e5066c.RawTrap(_34f246cde5be.this, "getResponseHeader", {
              get: () => _f68023e5066c => {
                let _34f246cde5be = RegExp(`^${_f68023e5066c}: (.*)$`, "m").exec(_9acaff0e6a8f);
                return _34f246cde5be ? _34f246cde5be[1] : null;
              }
            }), _34f246cde5be.return(void 0);
          }
        }), _f68023e5066c.Trap("XMLHttpRequest.prototype.responseURL", {
          get: _f68023e5066c => (0, _3d842a962905.v2)(_f68023e5066c.get())
        });
      }
    },
    7418: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        default: () => i
      });
      var _68051092d66a = _63a45e116e67(1478);
      function i(_f68023e5066c, _34f246cde5be) {
        _f68023e5066c.Proxy([ "setTimeout", "setInterval" ], {
          apply(_34f246cde5be) {
            _34f246cde5be.args.length > 0 && "string" == typeof _34f246cde5be.args[0] && (_34f246cde5be.args[0] = (0, 
            _68051092d66a.o)(_34f246cde5be.args[0], "(setTimeout string eval)", _f68023e5066c.meta));
          }
        });
      }
    },
    7791: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        default: () => o,
        enabled: () => s
      });
      var _68051092d66a = _63a45e116e67(37), _3d842a962905 = _63a45e116e67(8665).A;
      let _2dbb4876c500 = "/*scramtag ", s = _f68023e5066c => (0, _68051092d66a.U5)("sourcemaps", _f68023e5066c.url);
      function o(_f68023e5066c, _34f246cde5be) {
        Object.defineProperty(_34f246cde5be, _68051092d66a.$W.globals.pushsourcemapfn, {
          value: (_34f246cde5be, _63a45e116e67) => {
            let _68051092d66a = performance.now();
            !function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
              let _68051092d66a = Uint8Array.from(_34f246cde5be), _3d842a962905 = new DataView(_68051092d66a.buffer), _2dbb4876c500 = new TextDecoder("utf-8"), _4547843d0a40 = [], _bed2b259674e = _3d842a962905.getUint32(0, !0), _d73671e3fec6 = 4;
              for (let _f68023e5066c = 0; _f68023e5066c < _bed2b259674e; _f68023e5066c++) {
                let _f68023e5066c = _3d842a962905.getUint32(_d73671e3fec6, !0);
                _d73671e3fec6 += 4;
                let _34f246cde5be = _3d842a962905.getUint32(_d73671e3fec6, !0);
                _d73671e3fec6 += 4;
                let _63a45e116e67 = _3d842a962905.getUint8(_d73671e3fec6);
                if (_d73671e3fec6 += 1, 0 == _63a45e116e67) _4547843d0a40.push({
                  type: _63a45e116e67,
                  start: _f68023e5066c,
                  size: _34f246cde5be
                }); else if (1 == _63a45e116e67) {
                  let _bed2b259674e = _f68023e5066c + _34f246cde5be, _ef72ad0b9c92 = _3d842a962905.getUint32(_d73671e3fec6, !0);
                  _d73671e3fec6 += 4;
                  let _44f0b1ed911f = _2dbb4876c500.decode(_68051092d66a.subarray(_d73671e3fec6, _d73671e3fec6 + _ef72ad0b9c92));
                  _4547843d0a40.push({
                    type: _63a45e116e67,
                    start: _f68023e5066c,
                    end: _bed2b259674e,
                    str: _44f0b1ed911f
                  });
                }
              }
              _f68023e5066c.box.sourcemaps[_63a45e116e67] = _4547843d0a40;
            }(_f68023e5066c, _34f246cde5be, _63a45e116e67), _3d842a962905.time(_f68023e5066c.meta, _68051092d66a, `scramtag parse for ${_63a45e116e67}`);
          },
          enumerable: !1,
          writable: !1,
          configurable: !1
        }), _f68023e5066c.Proxy("Function.prototype.toString", {
          apply(_34f246cde5be) {
            performance.now(), function(_f68023e5066c, _34f246cde5be) {
              let _63a45e116e67 = _34f246cde5be.fn.call(_34f246cde5be.this), _68051092d66a = function(_f68023e5066c) {
                let _34f246cde5be = _f68023e5066c.indexOf(_2dbb4876c500);
                if (-1 === _34f246cde5be) return null;
                let _63a45e116e67 = _f68023e5066c.indexOf("*/", _34f246cde5be);
                if (-1 === _63a45e116e67) throw console.log(_f68023e5066c, _34f246cde5be, _63a45e116e67), 
                Error("unreachable");
                let _68051092d66a = _f68023e5066c.substring(_34f246cde5be + 2, _63a45e116e67).split(" ");
                if (3 !== _68051092d66a.length || "scramtag" !== _68051092d66a[0] || !Number.isSafeInteger(+_68051092d66a[1])) throw console.log(_f68023e5066c, _34f246cde5be, _63a45e116e67, _68051092d66a), 
                Error("invalid tag");
                return [ _68051092d66a[2], _34f246cde5be, +_68051092d66a[1] ];
              }(_63a45e116e67);
              if (!_68051092d66a) return _34f246cde5be.return(_63a45e116e67);
              let [_3d842a962905, _4547843d0a40, _bed2b259674e] = _68051092d66a, _d73671e3fec6 = _bed2b259674e - _4547843d0a40, _ef72ad0b9c92 = _d73671e3fec6 + _63a45e116e67.length, _44f0b1ed911f = _f68023e5066c.box.sourcemaps[_3d842a962905];
              if (!_44f0b1ed911f) return console.warn("failed to get rewrites for tag", _3d842a962905), 
              _34f246cde5be.return(_63a45e116e67);
              let _0a3b7a57b594 = 0;
              for (;_0a3b7a57b594 < _44f0b1ed911f.length; ) if (_44f0b1ed911f[_0a3b7a57b594].start < _d73671e3fec6) _0a3b7a57b594++; else break;
              let _3644bb2f5311 = _0a3b7a57b594;
              for (;_3644bb2f5311 < _44f0b1ed911f.length; ) if (function(_f68023e5066c) {
                if (0 === _f68023e5066c.type) return _f68023e5066c.start + _f68023e5066c.size;
                if (1 === _f68023e5066c.type) return _f68023e5066c.end;
                throw "unreachable";
              }(_44f0b1ed911f[_3644bb2f5311]) < _ef72ad0b9c92) _3644bb2f5311++; else break;
              let _9acaff0e6a8f = _44f0b1ed911f.slice(_0a3b7a57b594, _3644bb2f5311), _4a3d65fa17db = "", _4794763b2606 = 0;
              for (let _f68023e5066c of _9acaff0e6a8f) if (_4a3d65fa17db += _63a45e116e67.slice(_4794763b2606, _f68023e5066c.start - _d73671e3fec6), 
              0 === _f68023e5066c.type) _4794763b2606 = _f68023e5066c.start + _f68023e5066c.size - _d73671e3fec6; else if (1 === _f68023e5066c.type) _4a3d65fa17db += _f68023e5066c.str, 
              _4794763b2606 = _f68023e5066c.end - _d73671e3fec6; else throw "unreachable";
              _4a3d65fa17db += _63a45e116e67.slice(_4794763b2606), _4a3d65fa17db = _4a3d65fa17db.replace(`${_2dbb4876c500}${_bed2b259674e} ${_3d842a962905}*/`, ""), 
              _34f246cde5be.return(_4a3d65fa17db);
            }(_f68023e5066c, _34f246cde5be);
          }
        });
      }
    },
    9399: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        default: () => a
      });
      var _68051092d66a = _63a45e116e67(4110), _3d842a962905 = _63a45e116e67(1472);
      function a(_f68023e5066c, _34f246cde5be) {
        _f68023e5066c.Proxy("Worker", {
          construct(_34f246cde5be) {
            _34f246cde5be.args[0] = (0, _3d842a962905.Oy)(_34f246cde5be.args[0], _f68023e5066c.meta) + "?dest=worker", 
            _34f246cde5be.args[1] && "module" === _34f246cde5be.args[1].type && (_34f246cde5be.args[0] += "&type=module");
            let _63a45e116e67 = _34f246cde5be.call(), _2dbb4876c500 = new _68051092d66a.DD;
            (async () => {
              let _34f246cde5be = await _2dbb4876c500.getInnerPort();
              _f68023e5066c.natives.call("Worker.prototype.postMessage", _63a45e116e67, {
                $studyjet$type: "baremuxinit",
                port: _34f246cde5be
              }, [ _34f246cde5be ]);
            })();
          }
        }), _f68023e5066c.Proxy("SharedWorker", {
          construct(_34f246cde5be) {
            _34f246cde5be.args[0] = (0, _3d842a962905.Oy)(_34f246cde5be.args[0], _f68023e5066c.meta) + "?dest=sharedworker", 
            _34f246cde5be.args[1] && "string" == typeof _34f246cde5be.args[1] && (_34f246cde5be.args[1] = `${_f68023e5066c.url.origin}@${_34f246cde5be.args[1]}`), 
            _34f246cde5be.args[1] && "object" == typeof _34f246cde5be.args[1] && ("module" === _34f246cde5be.args[1].type && (_34f246cde5be.args[0] += "&type=module"), 
            _34f246cde5be.args[1].name && (_34f246cde5be.args[1].name = `${_f68023e5066c.url.origin}@${_34f246cde5be.args[1].name}`));
            let _63a45e116e67 = _34f246cde5be.call(), _2dbb4876c500 = new _68051092d66a.DD;
            (async () => {
              let _34f246cde5be = await _2dbb4876c500.getInnerPort();
              _f68023e5066c.natives.call("MessagePort.prototype.postMessage", _63a45e116e67.port, {
                $studyjet$type: "baremuxinit",
                port: _34f246cde5be
              }, [ _34f246cde5be ]);
            })();
          }
        }), _f68023e5066c.Proxy("Worklet.prototype.addModule", {
          apply(_34f246cde5be) {
            _34f246cde5be.args[0] && (_34f246cde5be.args[0] = (0, _3d842a962905.Oy)(_34f246cde5be.args[0], _f68023e5066c.meta) + "?dest=worklet");
          }
        });
      }
    },
    581: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        createWrapFn: () => o,
        default: () => c,
        order: () => _bed2b259674e
      });
      var _68051092d66a = _63a45e116e67(1323), _3d842a962905 = _63a45e116e67(2794), _2dbb4876c500 = _63a45e116e67(37), _4547843d0a40 = _63a45e116e67(591);
      function o(_f68023e5066c, _34f246cde5be) {
        return function(_63a45e116e67, _2dbb4876c500) {
          if (_63a45e116e67 === _34f246cde5be.location) return _f68023e5066c.locationProxy;
          if (_63a45e116e67 === _34f246cde5be.eval) return _4547843d0a40.indirectEval.bind(_f68023e5066c, _2dbb4876c500);
          if (_68051092d66a.iswindow) {
            if (_63a45e116e67 === _34f246cde5be.parent) if (_3d842a962905.pX in _34f246cde5be.parent) return _34f246cde5be.parent; else return _34f246cde5be; else if (_63a45e116e67 === _34f246cde5be.top) {
              let _f68023e5066c = _34f246cde5be;
              for (;;) {
                let _34f246cde5be = _f68023e5066c.parent.self;
                if (_34f246cde5be === _f68023e5066c || !(_3d842a962905.pX in _34f246cde5be)) break;
                _f68023e5066c = _34f246cde5be;
              }
              return _f68023e5066c;
            }
          }
          return _63a45e116e67;
        };
      }
      let _bed2b259674e = 4;
      function c(_f68023e5066c, _34f246cde5be) {
        Object.defineProperty(_34f246cde5be, _2dbb4876c500.$W.globals.wrapfn, {
          value: _f68023e5066c.wrapfn,
          writable: !1,
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_34f246cde5be, _2dbb4876c500.$W.globals.wrappropertyfn, {
          value: function(_f68023e5066c) {
            return "location" === _f68023e5066c || "parent" === _f68023e5066c || "top" === _f68023e5066c || "eval" === _f68023e5066c ? _2dbb4876c500.$W.globals.wrappropertybase + _f68023e5066c : _f68023e5066c;
          },
          writable: !1,
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_34f246cde5be, _2dbb4876c500.$W.globals.cleanrestfn, {
          value: function(_f68023e5066c) {},
          writable: !1,
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_34f246cde5be.Object.prototype, _2dbb4876c500.$W.globals.wrappropertybase + "location", {
          get: function() {
            return this === _34f246cde5be || this === _34f246cde5be.document ? _f68023e5066c.locationProxy : this.location;
          },
          set(_63a45e116e67) {
            if (this === _34f246cde5be || this === _34f246cde5be.document) {
              _f68023e5066c.url = _63a45e116e67;
              return;
            }
            this.location = _63a45e116e67;
          },
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_34f246cde5be.Object.prototype, _2dbb4876c500.$W.globals.wrappropertybase + "parent", {
          get: function() {
            return _f68023e5066c.wrapfn(this.parent, !1);
          },
          set(_f68023e5066c) {
            this.parent = _f68023e5066c;
          },
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_34f246cde5be.Object.prototype, _2dbb4876c500.$W.globals.wrappropertybase + "top", {
          get: function() {
            return _f68023e5066c.wrapfn(this.top, !1);
          },
          set(_f68023e5066c) {
            this.top = _f68023e5066c;
          },
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_34f246cde5be.Object.prototype, _2dbb4876c500.$W.globals.wrappropertybase + "eval", {
          get: function() {
            return _f68023e5066c.wrapfn(this.eval, !0);
          },
          set(_f68023e5066c) {
            this.eval = _f68023e5066c;
          },
          configurable: !1,
          enumerable: !1
        }), _34f246cde5be.$scramitize = function(_f68023e5066c) {
          return location, _68051092d66a.iswindow && _34f246cde5be.top, "string" == typeof _f68023e5066c && _f68023e5066c.includes("studyjet"), 
          "string" == typeof _f68023e5066c && _f68023e5066c.includes(location.origin), _f68023e5066c;
        }, Object.defineProperty(_34f246cde5be, _2dbb4876c500.$W.globals.trysetfn, {
          value: function(_63a45e116e67, _68051092d66a, _3d842a962905) {
            return _63a45e116e67 instanceof _34f246cde5be.Location && (_f68023e5066c.locationProxy.href = _3d842a962905, 
            !0);
          },
          writable: !1,
          configurable: !1
        });
      }
    },
    1229: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        SingletonBox: () => n
      });
      class n {
        ownerclient;
        clients=[];
        globals=new Map;
        documents=new Map;
        locations=new Map;
        sourcemaps={};
        constructor(_f68023e5066c) {
          this.ownerclient = _f68023e5066c;
        }
        registerClient(_f68023e5066c, _34f246cde5be) {
          this.clients.push(_f68023e5066c), this.globals.set(_34f246cde5be, _f68023e5066c), 
          this.documents.set(_34f246cde5be.document, _f68023e5066c), this.locations.set(_34f246cde5be.location, _f68023e5066c);
        }
      }
    },
    8409: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        StudyJetServiceWorkerRuntime: () => a
      });
      var _68051092d66a = _63a45e116e67(1472), _3d842a962905 = _63a45e116e67(8665).A;
      class a {
        client;
        recvport;
        constructor(_f68023e5066c) {
          this.client = _f68023e5066c, self.onconnect = _34f246cde5be => {
            let _63a45e116e67 = _34f246cde5be.ports[0];
            _3d842a962905.log("sw", "connected"), _63a45e116e67.addEventListener("message", _34f246cde5be => {
              console.log("sw", _34f246cde5be.data), "studyjet$type" in _34f246cde5be.data && ("init" === _34f246cde5be.data.studyjet$type ? (this.recvport = _34f246cde5be.data.studyjet$port, 
              this.recvport.postMessage({
                studyjet$type: "init"
              })) : s.call(this, _f68023e5066c, _34f246cde5be.data));
            }), _63a45e116e67.start();
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
              dispatchEvent: _f68023e5066c => !1
            },
            showNotification: async () => {},
            unregister: async () => !0,
            update: async () => {},
            installing: null,
            waiting: null
          }, this.client.global.ServiceWorkerGlobalScope = this.client.global;
        }
      }
      function s(_f68023e5066c, _34f246cde5be) {
        let _63a45e116e67 = this.recvport, _2dbb4876c500 = _34f246cde5be.studyjet$type, _4547843d0a40 = _34f246cde5be.studyjet$token, _bed2b259674e = _f68023e5066c.eventcallbacks.get(self);
        if ("fetch" === _2dbb4876c500) {
          _3d842a962905.log("ee", _34f246cde5be);
          let _2dbb4876c500 = _bed2b259674e.filter(_f68023e5066c => "fetch" === _f68023e5066c.event);
          if (!_2dbb4876c500) return;
          for (let _bed2b259674e of _2dbb4876c500) {
            let _2dbb4876c500 = _34f246cde5be.studyjet$request, _d73671e3fec6 = new _f68023e5066c.natives.Request((0, 
            _68051092d66a.v2)(_2dbb4876c500.url), {
              body: _2dbb4876c500.body,
              headers: new Headers(_2dbb4876c500.headers),
              method: _2dbb4876c500.method,
              mode: "same-origin"
            });
            Object.defineProperty(_d73671e3fec6, "destination", {
              value: _2dbb4876c500.destinitation
            });
            let _ef72ad0b9c92 = new Event("fetch");
            _ef72ad0b9c92.request = _d73671e3fec6;
            let _44f0b1ed911f = !1;
            _ef72ad0b9c92.respondWith = _f68023e5066c => {
              _44f0b1ed911f = !0, (async () => {
                let _34f246cde5be = {
                  studyjet$type: "fetch",
                  studyjet$token: _4547843d0a40,
                  studyjet$response: {
                    body: (_f68023e5066c = await _f68023e5066c).body,
                    headers: Array.from(_f68023e5066c.headers.entries()),
                    status: _f68023e5066c.status,
                    statusText: _f68023e5066c.statusText
                  }
                };
                _3d842a962905.log("sw", "responding", _34f246cde5be), _63a45e116e67.postMessage(_34f246cde5be, [ _f68023e5066c.body ]);
              })();
            }, _3d842a962905.log("to fn", _ef72ad0b9c92), _bed2b259674e.proxiedCallback(new Proxy(_ef72ad0b9c92, {
              get: (_f68023e5066c, _34f246cde5be, _63a45e116e67) => "isTrusted" === _34f246cde5be || Reflect.get(_f68023e5066c, _34f246cde5be)
            })), _44f0b1ed911f || (console.log("sw", "no response"), _63a45e116e67.postMessage({
              studyjet$type: "fetch",
              studyjet$token: _4547843d0a40,
              studyjet$response: !1
            }));
          }
        }
      }
    },
    9353: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        default: () => i
      });
      var _68051092d66a = _63a45e116e67(1472);
      function i(_f68023e5066c) {
        _f68023e5066c.Proxy("importScripts", {
          apply(_34f246cde5be) {
            for (let _63a45e116e67 in _34f246cde5be.args) _34f246cde5be.args[_63a45e116e67] = (0, 
            _68051092d66a.Oy)(_34f246cde5be.args[_63a45e116e67], _f68023e5066c.meta);
          }
        });
      }
    },
    3402: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.d(_34f246cde5be, {
        q: () => l
      });
      var _68051092d66a = _63a45e116e67(37), _3d842a962905 = _63a45e116e67(4869), _2dbb4876c500 = _63a45e116e67(6570), _4547843d0a40 = _63a45e116e67(1862), _bed2b259674e = _63a45e116e67(8665).A;
      class l extends EventTarget {
        db;
        constructor(_f68023e5066c) {
          super();
          const t = (_f68023e5066c, _34f246cde5be) => {
            for (let _63a45e116e67 in _34f246cde5be) _34f246cde5be[_63a45e116e67] instanceof Object && _63a45e116e67 in _f68023e5066c && Object.assign(_34f246cde5be[_63a45e116e67], t(_f68023e5066c[_63a45e116e67], _34f246cde5be[_63a45e116e67]));
            return Object.assign(_f68023e5066c || {}, _34f246cde5be);
          }, _34f246cde5be = t({
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
              encode: _f68023e5066c => _f68023e5066c ? encodeURIComponent(_f68023e5066c) : _f68023e5066c,
              decode: _f68023e5066c => _f68023e5066c ? decodeURIComponent(_f68023e5066c) : _f68023e5066c
            }
          }, _f68023e5066c);
          _34f246cde5be.codec.encode = _34f246cde5be.codec.encode.toString(), _34f246cde5be.codec.decode = _34f246cde5be.codec.decode.toString(), 
          (0, _68051092d66a.Nk)(_34f246cde5be);
        }
        async init() {
          (0, _68051092d66a.Ec)(), await this.openIDB(), navigator.serviceWorker.controller?.postMessage({
            studyjet$type: "loadConfig",
            config: _68051092d66a.$W
          }), _bed2b259674e.log("config loaded"), navigator.serviceWorker.addEventListener("message", _f68023e5066c => {
            if (!("studyjet$type" in _f68023e5066c.data)) return;
            let _34f246cde5be = _f68023e5066c.data;
            "download" === _34f246cde5be.studyjet$type && this.dispatchEvent(new _4547843d0a40.StudyJetGlobalDownloadEvent(_34f246cde5be.download));
          });
        }
        createFrame(_f68023e5066c) {
          return _f68023e5066c || (_f68023e5066c = document.createElement("iframe")), new _3d842a962905.X(this, _f68023e5066c);
        }
        encodeUrl(_f68023e5066c) {
          if ("string" == typeof _f68023e5066c && (_f68023e5066c = new URL(_f68023e5066c)), 
          "http:" != _f68023e5066c.protocol && "https:" != _f68023e5066c.protocol) return _f68023e5066c.href;
          let _34f246cde5be = (0, _68051092d66a.hD)(_f68023e5066c.hash.slice(1));
          return _f68023e5066c.hash = "", _68051092d66a.$W.prefix + (0, _68051092d66a.hD)(_f68023e5066c.href) + (_34f246cde5be ? "#" + _34f246cde5be : "");
        }
        decodeUrl(_f68023e5066c) {
          _f68023e5066c instanceof URL && (_f68023e5066c = _f68023e5066c.toString());
          let _34f246cde5be = location.origin + _68051092d66a.$W.prefix;
          return (0, _68051092d66a.P_)(_f68023e5066c.slice(_34f246cde5be.length));
        }
        async openIDB() {
          let _f68023e5066c = await (0, _2dbb4876c500.P2)("@d7a6431b92e", 1, {
            upgrade(_f68023e5066c) {
              _f68023e5066c.objectStoreNames.contains("config") || _f68023e5066c.createObjectStore("config"), 
              _f68023e5066c.objectStoreNames.contains("cookies") || _f68023e5066c.createObjectStore("cookies"), 
              _f68023e5066c.objectStoreNames.contains("redirectTrackers") || _f68023e5066c.createObjectStore("redirectTrackers"), 
              _f68023e5066c.objectStoreNames.contains("referrerPolicies") || _f68023e5066c.createObjectStore("referrerPolicies"), 
              _f68023e5066c.objectStoreNames.contains("publicSuffixList") || _f68023e5066c.createObjectStore("publicSuffixList");
            }
          });
          return this.db = _f68023e5066c, await this.#_f68023e5066c(), _f68023e5066c;
        }
        async #_f68023e5066c() {
          this.db ? await this.db.put("config", _68051092d66a.$W, "config") : console.error("Store not ready!");
        }
        async modifyConfig(_f68023e5066c) {
          (0, _68051092d66a.Nk)(Object.assign({}, _68051092d66a.$W, _f68023e5066c)), (0, _68051092d66a.Ec)(), 
          await this.#_f68023e5066c(), navigator.serviceWorker.controller?.postMessage({
            studyjet$type: "loadConfig",
            config: _68051092d66a.$W
          });
        }
        addEventListener(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
          super.addEventListener(_f68023e5066c, _34f246cde5be, _63a45e116e67);
        }
      }
    },
    4869: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.d(_34f246cde5be, {
        X: () => a
      });
      var _68051092d66a = _63a45e116e67(2794), _3d842a962905 = _63a45e116e67(8665).A;
      class a extends EventTarget {
        controller;
        frame;
        constructor(_f68023e5066c, _34f246cde5be) {
          super(), this.controller = _f68023e5066c, this.frame = _34f246cde5be, _34f246cde5be.name = `${Array(8).fill(0).map(() => Math.floor(36 * Math.random()).toString(36)).join("")}`, 
          _34f246cde5be[_68051092d66a.zr] = this;
        }
        get client() {
          return this.frame.contentWindow.window[_68051092d66a.pX];
        }
        get url() {
          return this.client.url;
        }
        go(_f68023e5066c) {
          _f68023e5066c instanceof URL && (_f68023e5066c = _f68023e5066c.toString()), _3d842a962905.log("navigated to", _f68023e5066c), 
          this.frame.src = this.controller.encodeUrl(_f68023e5066c);
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
        addEventListener(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
          super.addEventListener(_f68023e5066c, _34f246cde5be, _63a45e116e67);
        }
      }
    },
    9052: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        StudyJetController: () => _3d842a962905.q,
        StudyJetFrame: () => _68051092d66a.X
      });
      var _68051092d66a = _63a45e116e67(4869), _3d842a962905 = _63a45e116e67(3402);
      console.warn("you are using the last version of studyjet v1, if possible, please upgrade to v2 for better performance and more features");
    },
    8665: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.d(_34f246cde5be, {
        A: () => _3d842a962905
      });
      let _68051092d66a = {
        log: console.log,
        warn: console.warn,
        error: console.error,
        debug: console.debug,
        info: console.info
      }, _3d842a962905 = {
        fmt: function(_f68023e5066c, _34f246cde5be, ..._63a45e116e67) {
          let _68051092d66a = Error.prepareStackTrace;
          Error.prepareStackTrace = (_f68023e5066c, _34f246cde5be) => {
            _34f246cde5be.shift(), _34f246cde5be.shift(), _34f246cde5be.shift();
            let _63a45e116e67 = "";
            for (let _f68023e5066c = 1; _f68023e5066c < Math.min(2, _34f246cde5be.length); _f68023e5066c++) _34f246cde5be[_f68023e5066c].getFunctionName() && (_63a45e116e67 += `${_34f246cde5be[_f68023e5066c].getFunctionName()} -> ` + _63a45e116e67);
            return _63a45e116e67 + (_34f246cde5be[0].getFunctionName() || "Anonymous");
          };
          let _3d842a962905 = function() {
            try {
              throw Error();
            } catch (_f68023e5066c) {
              return _f68023e5066c.stack;
            }
          }();
          Error.prepareStackTrace = _68051092d66a, this.print(_f68023e5066c, _3d842a962905, _34f246cde5be, ..._63a45e116e67);
        },
        print(_f68023e5066c, _34f246cde5be, _63a45e116e67, ..._3d842a962905) {
          (_68051092d66a[_f68023e5066c] || _68051092d66a.log)(`%c${_34f246cde5be}%c ${_63a45e116e67}`, `\n  \tbackground-color: ${{
            log: "#000",
            warn: "#f80",
            error: "#f00",
            debug: "transparent"
          }[_f68023e5066c]};\n  \tcolor: ${{
            log: "#fff",
            warn: "#fff",
            error: "#fff",
            debug: "gray"
          }[_f68023e5066c]};\n  \tpadding: ${{
            log: 2,
            warn: 4,
            error: 4,
            debug: 0
          }[_f68023e5066c]}px;\n  \tfont-weight: bold;\n  \tfont-family: monospace;\n  \tfont-size: 0.9em;\n  `, `${"debug" === _f68023e5066c ? "color: gray" : ""}`, ..._3d842a962905);
        },
        log: function(_f68023e5066c, ..._34f246cde5be) {
          this.fmt("log", _f68023e5066c, ..._34f246cde5be);
        },
        warn: function(_f68023e5066c, ..._34f246cde5be) {
          this.fmt("warn", _f68023e5066c, ..._34f246cde5be);
        },
        error: function(_f68023e5066c, ..._34f246cde5be) {
          this.fmt("error", _f68023e5066c, ..._34f246cde5be);
        },
        debug: function(_f68023e5066c, ..._34f246cde5be) {
          this.fmt("debug", _f68023e5066c, ..._34f246cde5be);
        },
        time(_f68023e5066c, _34f246cde5be, _63a45e116e67) {}
      };
    },
    3831: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.d(_34f246cde5be, {
        k: () => a
      });
      var _68051092d66a = _63a45e116e67(4322), _3d842a962905 = _63a45e116e67.n(_68051092d66a);
      class a {
        cookies={};
        setCookies(_f68023e5066c, _34f246cde5be) {
          for (let _63a45e116e67 of _f68023e5066c) {
            let _f68023e5066c = _3d842a962905()(_63a45e116e67), _68051092d66a = {
              domain: _f68023e5066c.domain,
              sameSite: _f68023e5066c.sameSite,
              ..._f68023e5066c[0]
            };
            _68051092d66a.domain || (_68051092d66a.domain = "." + _34f246cde5be.hostname), _68051092d66a.domain.startsWith(".") || (_68051092d66a.domain = "." + _68051092d66a.domain), 
            _68051092d66a.path || (_68051092d66a.path = "/"), _68051092d66a.sameSite || (_68051092d66a.sameSite = "lax"), 
            _68051092d66a.expires && (_68051092d66a.expires = _68051092d66a.expires.toString());
            let _2dbb4876c500 = `${_68051092d66a.domain}@${_68051092d66a.path}@${_68051092d66a.name}`;
            this.cookies[_2dbb4876c500] = _68051092d66a;
          }
        }
        getCookies(_f68023e5066c, _34f246cde5be) {
          let _63a45e116e67 = new Date, _68051092d66a = Object.values(this.cookies), _3d842a962905 = [];
          for (let _2dbb4876c500 of _68051092d66a) {
            if (_2dbb4876c500.expires && new Date(_2dbb4876c500.expires) < _63a45e116e67) {
              delete this.cookies[`${_2dbb4876c500.domain}@${_2dbb4876c500.path}@${_2dbb4876c500.name}`];
              continue;
            }
            (!_2dbb4876c500.secure || "https:" === _f68023e5066c.protocol) && (!_2dbb4876c500.httpOnly || !_34f246cde5be) && _f68023e5066c.pathname.startsWith(_2dbb4876c500.path) && (!_2dbb4876c500.domain.startsWith(".") || _f68023e5066c.hostname.endsWith(_2dbb4876c500.domain.slice(1))) && _3d842a962905.push(_2dbb4876c500);
          }
          return _3d842a962905.map(_f68023e5066c => `${_f68023e5066c.name}=${_f68023e5066c.value}`).join("; ");
        }
        load(_f68023e5066c) {
          if ("object" == typeof _f68023e5066c) return _f68023e5066c;
          this.cookies = JSON.parse(_f68023e5066c);
        }
        dump() {
          return JSON.stringify(this.cookies);
        }
      }
    },
    1427: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.d(_34f246cde5be, {
        u: () => n
      });
      class n {
        headers={};
        set(_f68023e5066c, _34f246cde5be) {
          this.headers[_f68023e5066c.toLowerCase()] = _34f246cde5be;
        }
      }
    },
    2393: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.d(_34f246cde5be, {
        V: () => _4547843d0a40
      });
      var _68051092d66a = _63a45e116e67(2614), _3d842a962905 = _63a45e116e67(884), _2dbb4876c500 = _63a45e116e67(1472);
      let _4547843d0a40 = [ {
        fn: (_f68023e5066c, _34f246cde5be) => (0, _2dbb4876c500.Oy)(_f68023e5066c, _34f246cde5be),
        src: [ "embed", "script", "img", "frame", "source", "input", "track" ],
        href: [ "a", "link", "area", "use", "image" ],
        data: [ "object" ],
        action: [ "form" ],
        formaction: [ "button", "input", "textarea", "submit" ],
        poster: [ "video" ],
        "xlink:href": [ "image" ]
      }, {
        fn: (_f68023e5066c, _34f246cde5be) => (0, _2dbb4876c500.Oy)(_f68023e5066c, _34f246cde5be),
        src: [ "iframe" ]
      }, {
        fn: (_f68023e5066c, _34f246cde5be) => null,
        sandbox: [ "iframe" ]
      }, {
        fn: (_f68023e5066c, _34f246cde5be) => _f68023e5066c.startsWith("blob:") ? (0, _2dbb4876c500.$n)(_f68023e5066c) : (0, 
        _2dbb4876c500.Oy)(_f68023e5066c, _34f246cde5be),
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
        fn: (_f68023e5066c, _34f246cde5be) => (0, _3d842a962905.PV)(_f68023e5066c, _34f246cde5be),
        srcset: [ "img", "source" ],
        imagesrcset: [ "link" ]
      }, {
        fn: (_f68023e5066c, _34f246cde5be, _63a45e116e67) => (0, _3d842a962905.Qs)(_f68023e5066c, _63a45e116e67, {
          origin: new URL(_34f246cde5be.origin.origin),
          base: new URL(_34f246cde5be.origin.origin)
        }, !0),
        srcdoc: [ "iframe" ]
      }, {
        fn: (_f68023e5066c, _34f246cde5be) => (0, _68051092d66a.s)(_f68023e5066c, _34f246cde5be),
        style: "*"
      }, {
        fn: (_f68023e5066c, _34f246cde5be) => "_top" === _f68023e5066c || "_unfencedTop" === _f68023e5066c ? _34f246cde5be.topFrameName : "_parent" === _f68023e5066c ? _34f246cde5be.parentFrameName : _f68023e5066c,
        target: [ "a", "base" ]
      } ];
    },
    37: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      let _68051092d66a, _3d842a962905, _2dbb4876c500;
      _63a45e116e67.d(_34f246cde5be, {
        $W: () => _2dbb4876c500,
        Ec: () => o,
        Nk: () => c,
        P_: () => _3d842a962905,
        U5: () => l,
        hD: () => _68051092d66a
      }), _63a45e116e67(2393), _63a45e116e67(9381), _63a45e116e67(2416);
      let _4547843d0a40 = Function;
      function o() {
        _68051092d66a = _4547843d0a40(`return ${_2dbb4876c500.codec.encode}`)(), _3d842a962905 = _4547843d0a40(`return ${_2dbb4876c500.codec.decode}`)();
      }
      function l(_f68023e5066c, _34f246cde5be) {
        let _63a45e116e67 = _2dbb4876c500.flags[_f68023e5066c];
        for (let _63a45e116e67 in _2dbb4876c500.siteFlags) {
          let _68051092d66a = _2dbb4876c500.siteFlags[_63a45e116e67];
          if (new RegExp(_63a45e116e67).test(_34f246cde5be.href) && _f68023e5066c in _68051092d66a) return _68051092d66a[_f68023e5066c];
        }
        return _63a45e116e67;
      }
      function c(_f68023e5066c) {
        _2dbb4876c500 = _f68023e5066c, o();
      }
    },
    2614: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.d(_34f246cde5be, {
        f: () => a,
        s: () => i
      });
      var _68051092d66a = _63a45e116e67(1472);
      function i(_f68023e5066c, _34f246cde5be) {
        return s("rewrite", _f68023e5066c, _34f246cde5be);
      }
      function a(_f68023e5066c) {
        return s("unrewrite", _f68023e5066c);
      }
      function s(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
        return (_34f246cde5be = (_34f246cde5be = new String(_34f246cde5be).toString()).replace(/url\(['"]?(.+?)['"]?\)/gm, (_34f246cde5be, _3d842a962905) => {
          let _2dbb4876c500 = "rewrite" === _f68023e5066c ? (0, _68051092d66a.Oy)(_3d842a962905.trim(), _63a45e116e67) : (0, 
          _68051092d66a.v2)(_3d842a962905.trim());
          return _34f246cde5be.replace(_3d842a962905, _2dbb4876c500);
        })).replace(/@import\s+(url\s*?\(.{0,9999}?\)|['"].{0,9999}?['"]|.{0,9999}?)($|\s|;)/gm, (_34f246cde5be, _3d842a962905) => _34f246cde5be.replace(_3d842a962905, _3d842a962905.replace(/^(url\(['"]?|['"]|)(.+?)(['"]|['"]?\)|)$/gm, (_34f246cde5be, _3d842a962905, _2dbb4876c500, _4547843d0a40) => {
          if (_3d842a962905.startsWith("url")) return _34f246cde5be;
          let _bed2b259674e = "rewrite" === _f68023e5066c ? (0, _68051092d66a.Oy)(_2dbb4876c500.trim(), _63a45e116e67) : (0, 
          _68051092d66a.v2)(_2dbb4876c500.trim());
          return `${_3d842a962905}${_bed2b259674e}${_4547843d0a40}`;
        })));
      }
    },
    4435: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.d(_34f246cde5be, {
        l: () => l
      });
      var _68051092d66a = _63a45e116e67(1472), _3d842a962905 = _63a45e116e67(8228);
      let _2dbb4876c500 = new Set([ "cross-origin-embedder-policy", "cross-origin-opener-policy", "cross-origin-resource-policy", "content-security-policy", "content-security-policy-report-only", "expect-ct", "feature-policy", "origin-isolation", "strict-transport-security", "upgrade-insecure-requests", "x-content-type-options", "x-download-options", "x-frame-options", "x-permitted-cross-domain-policies", "x-powered-by", "x-xss-protection", "clear-site-data" ]), _4547843d0a40 = new Set([ "location", "content-location", "referer" ]);
      function o(_f68023e5066c, _34f246cde5be) {
        return _f68023e5066c.replace(/<(.*)>/gi, _f68023e5066c => (0, _68051092d66a.Oy)(_f68023e5066c, _34f246cde5be));
      }
      async function l(_f68023e5066c, _34f246cde5be, _63a45e116e67, _bed2b259674e) {
        let _d73671e3fec6 = {};
        for (let _34f246cde5be in _f68023e5066c) _d73671e3fec6[_34f246cde5be.toLowerCase()] = _f68023e5066c[_34f246cde5be];
        for (let _f68023e5066c of _2dbb4876c500) delete _d73671e3fec6[_f68023e5066c];
        for (let _f68023e5066c of _4547843d0a40) _d73671e3fec6[_f68023e5066c] && (_d73671e3fec6[_f68023e5066c] = (0, 
        _68051092d66a.Oy)(_d73671e3fec6[_f68023e5066c]?.toString(), _34f246cde5be));
        if ("string" == typeof _d73671e3fec6.link ? _d73671e3fec6.link = o(_d73671e3fec6.link, _34f246cde5be) : Array.isArray(_d73671e3fec6.link) && (_d73671e3fec6.link = _d73671e3fec6.link.map(_f68023e5066c => o(_f68023e5066c, _34f246cde5be))), 
        "string" == typeof _d73671e3fec6.referer) {
          let _f68023e5066c = new URL(_d73671e3fec6.referer), _63a45e116e67 = await _bed2b259674e.get(_f68023e5066c.href);
          if (_63a45e116e67) {
            let _68051092d66a = _63a45e116e67.policy.toLowerCase().split(",").map(_f68023e5066c => _f68023e5066c.trim());
            _68051092d66a.includes("no-referrer") || _68051092d66a.includes("no-referrer-when-downgrade") && "http:" === _34f246cde5be.origin.protocol && "https:" === _f68023e5066c.protocol ? delete _d73671e3fec6.referer : _68051092d66a.includes("origin") ? _d73671e3fec6.referer = _f68023e5066c.origin : _68051092d66a.includes("origin-when-cross-origin") ? _f68023e5066c.origin !== _34f246cde5be.origin.origin ? _d73671e3fec6.referer = _f68023e5066c.origin : _d73671e3fec6.referer = _f68023e5066c.href : _68051092d66a.includes("same-origin") ? _f68023e5066c.origin === _34f246cde5be.origin.origin ? _d73671e3fec6.referer = _f68023e5066c.href : delete _d73671e3fec6.referer : _68051092d66a.includes("strict-origin") ? "http:" === _34f246cde5be.origin.protocol && "https:" === _f68023e5066c.protocol ? delete _d73671e3fec6.referer : _d73671e3fec6.referer = _f68023e5066c.origin : _f68023e5066c.origin === _34f246cde5be.origin.origin ? _d73671e3fec6.referer = _f68023e5066c.href : "http:" === _34f246cde5be.origin.protocol && "https:" === _f68023e5066c.protocol ? delete _d73671e3fec6.referer : _d73671e3fec6.referer = _f68023e5066c.origin;
          }
        }
        return "string" == typeof _d73671e3fec6["sec-fetch-dest"] && "" === _d73671e3fec6["sec-fetch-dest"] && (_d73671e3fec6["sec-fetch-dest"] = "empty"), 
        "string" == typeof _d73671e3fec6["sec-fetch-site"] && "none" !== _d73671e3fec6["sec-fetch-site"] && ("string" == typeof _d73671e3fec6.referer ? _d73671e3fec6["sec-fetch-site"] = await (0, 
        _3d842a962905.ps)(_34f246cde5be, new URL(_d73671e3fec6.referer), _63a45e116e67) : (console.warn("Missing referrer header; can't rewrite sec-fetch-site properly. Falling back to unsafe deletion."), 
        delete _d73671e3fec6["sec-fetch-site"])), _d73671e3fec6;
      }
    },
    884: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.d(_34f246cde5be, {
        PV: () => m,
        Qs: () => f,
        Uk: () => h,
        nK: () => g
      });
      var _68051092d66a = _63a45e116e67(3808), _3d842a962905 = _63a45e116e67(8866), _2dbb4876c500 = _63a45e116e67(6498), _4547843d0a40 = _63a45e116e67(1472), _bed2b259674e = _63a45e116e67(2614), _d73671e3fec6 = _63a45e116e67(1478), _ef72ad0b9c92 = _63a45e116e67(37), _44f0b1ed911f = _63a45e116e67(2393), _0a3b7a57b594 = _63a45e116e67(8665).A;
      function h(_f68023e5066c, _34f246cde5be) {
        let _63a45e116e67 = JSON.stringify(_f68023e5066c.dump()), _68051092d66a = `\n\t\tself.COOKIE = ${_63a45e116e67};\n\t\t$studyjetLoadClient().loadAndHook(${JSON.stringify(_ef72ad0b9c92.$W)});\n\t\tif ("document" in self && document?.currentScript) {\n\t\t\tdocument.currentScript.remove();\n\t\t}\n\t`, _3d842a962905 = y(_3644bb2f5311.encode(_68051092d66a));
        return [ _34f246cde5be(_ef72ad0b9c92.$W.files.wasm), _34f246cde5be(_ef72ad0b9c92.$W.files.all), _34f246cde5be("data:application/javascript;base64," + _3d842a962905) ];
      }
      let _3644bb2f5311 = new TextEncoder;
      function f(_f68023e5066c, _34f246cde5be, _63a45e116e67, _ef72ad0b9c92 = !1) {
        let _4a3d65fa17db = performance.now(), _4794763b2606 = function(_f68023e5066c, _34f246cde5be, _63a45e116e67, _ef72ad0b9c92 = !1) {
          let _0a3b7a57b594 = new _3d842a962905.DV((_f68023e5066c, _34f246cde5be) => _34f246cde5be), _4a3d65fa17db = new _68051092d66a.iX(_0a3b7a57b594);
          if (_4a3d65fa17db.write(_f68023e5066c), _4a3d65fa17db.end(), function e(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
            if ("base" === _f68023e5066c.name && void 0 !== _f68023e5066c.attribs.href && (_63a45e116e67.base = new URL(_f68023e5066c.attribs.href, _63a45e116e67.origin)), 
            _f68023e5066c.attribs) {
              for (let _68051092d66a of _44f0b1ed911f.V) for (let _3d842a962905 in _68051092d66a) {
                let _2dbb4876c500 = _68051092d66a[_3d842a962905.toLowerCase()];
                if ("function" != typeof _2dbb4876c500 && ("*" === _2dbb4876c500 || _2dbb4876c500.includes(_f68023e5066c.name)) && void 0 !== _f68023e5066c.attribs[_3d842a962905]) {
                  let _2dbb4876c500 = _f68023e5066c.attribs[_3d842a962905], _4547843d0a40 = _68051092d66a.fn(_2dbb4876c500, _63a45e116e67, _34f246cde5be);
                  null === _4547843d0a40 ? delete _f68023e5066c.attribs[_3d842a962905] : _f68023e5066c.attribs[_3d842a962905] = _4547843d0a40, 
                  _f68023e5066c.attribs[`studyjet-attr-${_3d842a962905}`] = _2dbb4876c500;
                }
              }
              for (let [_34f246cde5be, _68051092d66a] of Object.entries(_f68023e5066c.attribs)) _9acaff0e6a8f.includes(_34f246cde5be) && (_f68023e5066c.attribs[`studyjet-attr-${_34f246cde5be}`] = _68051092d66a, 
              _f68023e5066c.attribs[_34f246cde5be] = (0, _d73671e3fec6.o)(_68051092d66a, `(inline ${_34f246cde5be} on element)`, _63a45e116e67));
            }
            if ("style" === _f68023e5066c.name && void 0 !== _f68023e5066c.children[0] && (_f68023e5066c.children[0].data = (0, 
            _bed2b259674e.s)(_f68023e5066c.children[0].data, _63a45e116e67)), "script" === _f68023e5066c.name && "module" === _f68023e5066c.attribs.type && _f68023e5066c.attribs.src && (_f68023e5066c.attribs.src = _f68023e5066c.attribs.src + "?type=module"), 
            "script" === _f68023e5066c.name && "importmap" === _f68023e5066c.attribs.type && void 0 !== _f68023e5066c.children[0]) {
              let _34f246cde5be = _f68023e5066c.children[0].data;
              try {
                let _68051092d66a = JSON.parse(_34f246cde5be);
                if (_68051092d66a.imports) for (let _f68023e5066c in _68051092d66a.imports) {
                  let _34f246cde5be = _68051092d66a.imports[_f68023e5066c];
                  "string" == typeof _34f246cde5be && (_34f246cde5be = (0, _4547843d0a40.Oy)(_34f246cde5be, _63a45e116e67), 
                  _68051092d66a.imports[_f68023e5066c] = _34f246cde5be);
                }
                _f68023e5066c.children[0].data = JSON.stringify(_68051092d66a);
              } catch (e) {
                console.error("Failed to parse importmap JSON:", e);
              }
            }
            if ("script" === _f68023e5066c.name && /(application|text)\/javascript|module|undefined/.test(_f68023e5066c.attribs.type) && void 0 !== _f68023e5066c.children[0]) {
              let _34f246cde5be = _f68023e5066c.children[0].data, _68051092d66a = "module" === _f68023e5066c.attribs.type;
              _f68023e5066c.attribs["studyjet-attr-script-source-src"] = y(_3644bb2f5311.encode(_34f246cde5be)), 
              _34f246cde5be = _34f246cde5be.replace(/<!--[\s\S]*?-->/g, ""), _f68023e5066c.children[0].data = (0, 
              _d73671e3fec6.o)(_34f246cde5be, "(inline script element)", _63a45e116e67, _68051092d66a);
            }
            if ("meta" === _f68023e5066c.name && void 0 !== _f68023e5066c.attribs["http-equiv"]) {
              if ("content-security-policy" === _f68023e5066c.attribs["http-equiv"].toLowerCase()) _f68023e5066c = new _3d842a962905.Mw(_f68023e5066c.attribs.content); else if ("refresh" === _f68023e5066c.attribs["http-equiv"] && _f68023e5066c.attribs.content.includes("url")) {
                let _34f246cde5be = _f68023e5066c.attribs.content.split("url=");
                _34f246cde5be[1] && (_34f246cde5be[1] = (0, _4547843d0a40.Oy)(_34f246cde5be[1].trim(), _63a45e116e67)), 
                _f68023e5066c.attribs.content = _34f246cde5be.join("url=");
              }
            }
            if (_f68023e5066c.childNodes) for (let _68051092d66a in _f68023e5066c.childNodes) _f68023e5066c.childNodes[_68051092d66a] = e(_f68023e5066c.childNodes[_68051092d66a], _34f246cde5be, _63a45e116e67);
            return _f68023e5066c;
          }(_0a3b7a57b594.root, _34f246cde5be, _63a45e116e67), _ef72ad0b9c92) {
            let _f68023e5066c = function e(_f68023e5066c) {
              if (_f68023e5066c.type === _68051092d66a.RJ.vw && "head" === _f68023e5066c.name) return _f68023e5066c;
              if (_f68023e5066c.childNodes) for (let _34f246cde5be of _f68023e5066c.childNodes) {
                let _f68023e5066c = e(_34f246cde5be);
                if (_f68023e5066c) return _f68023e5066c;
              }
              return null;
            }(_0a3b7a57b594.root);
            _f68023e5066c || (_f68023e5066c = new _3d842a962905.Hg("head", {}, []), _0a3b7a57b594.root.children.unshift(_f68023e5066c)), 
            _f68023e5066c.children.unshift(...h(_34f246cde5be, _f68023e5066c => new _3d842a962905.Hg("script", {
              src: _f68023e5066c
            })));
          }
          return (0, _2dbb4876c500.A)(_0a3b7a57b594.root, {
            encodeEntities: "utf8",
            decodeEntities: !1
          });
        }(_f68023e5066c, _34f246cde5be, _63a45e116e67, _ef72ad0b9c92);
        return _0a3b7a57b594.time(_63a45e116e67, _4a3d65fa17db, "html rewrite"), _4794763b2606;
      }
      function g(_f68023e5066c) {
        let _34f246cde5be = new _3d842a962905.DV((_f68023e5066c, _34f246cde5be) => _34f246cde5be), _63a45e116e67 = new _68051092d66a.iX(_34f246cde5be);
        return _63a45e116e67.write(_f68023e5066c), _63a45e116e67.end(), !function e(_f68023e5066c) {
          if ("attribs" in _f68023e5066c) for (let _34f246cde5be in _f68023e5066c.attribs) {
            if ("studyjet-attr-script-source-src" == _34f246cde5be) {
              _f68023e5066c.children[0] && "data" in _f68023e5066c.children[0] && (_f68023e5066c.children[0].data = atob(_f68023e5066c.attribs[_34f246cde5be]));
              continue;
            }
            _34f246cde5be.startsWith("studyjet-attr-") && (_f68023e5066c.attribs[_34f246cde5be.slice(14)] = _f68023e5066c.attribs[_34f246cde5be], 
            delete _f68023e5066c.attribs[_34f246cde5be]);
          }
          if ("childNodes" in _f68023e5066c) for (let _34f246cde5be of _f68023e5066c.childNodes) e(_34f246cde5be);
        }(_34f246cde5be.root), (0, _2dbb4876c500.A)(_34f246cde5be.root, {
          decodeEntities: !1
        });
      }
      function m(_f68023e5066c, _34f246cde5be) {
        return _f68023e5066c.split(/ .*,/).map(_f68023e5066c => _f68023e5066c.trim()).map(_f68023e5066c => {
          let [_63a45e116e67, ..._68051092d66a] = _f68023e5066c.split(/\s+/), _3d842a962905 = (0, 
          _4547843d0a40.Oy)(_63a45e116e67.trim(), _34f246cde5be);
          return _68051092d66a.length > 0 ? `${_3d842a962905} ${_68051092d66a.join(" ")}` : _3d842a962905;
        }).join(", ");
      }
      function y(_f68023e5066c) {
        return btoa(Array.from(_f68023e5066c, _f68023e5066c => String.fromCodePoint(_f68023e5066c)).join(""));
      }
      let _9acaff0e6a8f = [ "onbeforexrselect", "onabort", "onbeforeinput", "onbeforematch", "onbeforetoggle", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncontentvisibilityautostatechange", "oncontextlost", "oncontextmenu", "oncontextrestored", "oncuechange", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "onformdata", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onresize", "onscroll", "onsecuritypolicyviolation", "onseeked", "onseeking", "onselect", "onslotchange", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "onvolumechange", "onwaiting", "onwebkitanimationend", "onwebkitanimationiteration", "onwebkitanimationstart", "onwebkittransitionend", "onwheel", "onauxclick", "ongotpointercapture", "onlostpointercapture", "onpointerdown", "onpointermove", "onpointerrawupdate", "onpointerup", "onpointercancel", "onpointerover", "onpointerout", "onpointerenter", "onpointerleave", "onselectstart", "onselectionchange", "onanimationend", "onanimationiteration", "onanimationstart", "ontransitionrun", "ontransitionstart", "ontransitionend", "ontransitioncancel", "oncopy", "oncut", "onpaste", "onscrollend", "onscrollsnapchange", "onscrollsnapchanging" ];
    },
    9381: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67(2614), _63a45e116e67(4435), _63a45e116e67(884), _63a45e116e67(1478), 
      _63a45e116e67(1472), _63a45e116e67(2015), _63a45e116e67(1561);
    },
    1478: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.d(_34f246cde5be, {
        o: () => s
      });
      var _68051092d66a = _63a45e116e67(37), _3d842a962905 = _63a45e116e67(1561), _2dbb4876c500 = _63a45e116e67(8665).A;
      function s(_f68023e5066c, _34f246cde5be, _63a45e116e67, _4547843d0a40 = !1) {
        try {
          let _bed2b259674e = function(_f68023e5066c, _34f246cde5be, _63a45e116e67, _68051092d66a = !1) {
            return function(_f68023e5066c, _34f246cde5be, _63a45e116e67, _68051092d66a) {
              let [_4547843d0a40, _bed2b259674e] = (0, _3d842a962905.nb)(_63a45e116e67);
              try {
                let _bed2b259674e, _d73671e3fec6 = performance.now();
                _bed2b259674e = "string" == typeof _f68023e5066c ? _4547843d0a40.rewrite_js(_f68023e5066c, _63a45e116e67.base.href, _34f246cde5be || "(unknown)", _68051092d66a) : _4547843d0a40.rewrite_js_bytes(_f68023e5066c, _63a45e116e67.base.href, _34f246cde5be || "(unknown)", _68051092d66a), 
                _2dbb4876c500.time(_63a45e116e67, _d73671e3fec6, `oxc rewrite for "${_34f246cde5be || "(unknown)"}"`);
                let {js: _ef72ad0b9c92, map: _44f0b1ed911f, scramtag: _0a3b7a57b594, errors: _3644bb2f5311} = _bed2b259674e;
                return {
                  js: "string" == typeof _f68023e5066c ? _3d842a962905.su.decode(_ef72ad0b9c92) : _ef72ad0b9c92,
                  tag: _0a3b7a57b594,
                  map: _44f0b1ed911f,
                  errors: _3644bb2f5311
                };
              } finally {
                _bed2b259674e();
              }
            }(_f68023e5066c, _34f246cde5be, _63a45e116e67, _68051092d66a);
          }(_f68023e5066c, _34f246cde5be, _63a45e116e67, _4547843d0a40), _d73671e3fec6 = _bed2b259674e.js;
          if ((0, _68051092d66a.U5)("sourcemaps", _63a45e116e67.base)) {
            let _f68023e5066c = globalThis[_68051092d66a.$W.globals.pushsourcemapfn];
            if (_f68023e5066c) _f68023e5066c(Array.from(_bed2b259674e.map), _bed2b259674e.tag); else {
              _d73671e3fec6 instanceof Uint8Array && (_d73671e3fec6 = (new TextDecoder).decode(_d73671e3fec6));
              let _f68023e5066c = `${_68051092d66a.$W.globals.pushsourcemapfn}([${_bed2b259674e.map.join(",")}], "${_bed2b259674e.tag}");`, _34f246cde5be = /^\s*(['"])use strict\1;?/;
              _d73671e3fec6 = _34f246cde5be.test(_d73671e3fec6) ? _d73671e3fec6.replace(_34f246cde5be, `$&\n${_f68023e5066c}`) : `${_f68023e5066c}\n${_d73671e3fec6}`;
            }
          }
          if ((0, _68051092d66a.U5)("rewriterLogs", _63a45e116e67.base)) for (let _f68023e5066c of _bed2b259674e.errors) console.error("oxc parse error", _f68023e5066c);
          return _d73671e3fec6;
        } catch (_2dbb4876c500) {
          if (console.warn("failed rewriting js for", _34f246cde5be || "(unknown)", _2dbb4876c500.message, _f68023e5066c instanceof Uint8Array ? _3d842a962905.su.decode(_f68023e5066c) : _f68023e5066c), 
          (0, _68051092d66a.U5)("allowInvalidJs", _63a45e116e67.base)) return _f68023e5066c;
          throw _2dbb4876c500;
        }
      }
      Error.stackTraceLimit = 50;
    },
    1472: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.d(_34f246cde5be, {
        $n: () => o,
        IP: () => s,
        Oy: () => l,
        v2: () => c
      });
      var _68051092d66a = _63a45e116e67(37), _3d842a962905 = _63a45e116e67(1478);
      function a(_f68023e5066c, _34f246cde5be) {
        try {
          return new URL(_f68023e5066c, _34f246cde5be);
        } catch {
          return null;
        }
      }
      function s(_f68023e5066c, _34f246cde5be) {
        let _63a45e116e67 = new URL(_f68023e5066c.substring(5));
        return "blob:" + _34f246cde5be.origin.origin + _63a45e116e67.pathname;
      }
      function o(_f68023e5066c) {
        let _34f246cde5be = new URL(_f68023e5066c.substring(5));
        return "blob:" + location.origin + _34f246cde5be.pathname;
      }
      function l(_f68023e5066c, _34f246cde5be) {
        if (_f68023e5066c instanceof URL && (_f68023e5066c = _f68023e5066c.toString()), 
        _f68023e5066c.startsWith("javascript:")) return "javascript:" + (0, _3d842a962905.o)(_f68023e5066c.slice(11), "(javascript: url)", _34f246cde5be);
        {
          if (_f68023e5066c.startsWith("blob:") || _f68023e5066c.startsWith("data:")) return location.origin + _68051092d66a.$W.prefix + _f68023e5066c;
          if (_f68023e5066c.startsWith("mailto:") || _f68023e5066c.startsWith("about:")) return _f68023e5066c;
          let _63a45e116e67 = _34f246cde5be.base.href;
          _63a45e116e67.startsWith("about:") && (_63a45e116e67 = c(self.location.href));
          let _3d842a962905 = a(_f68023e5066c, _63a45e116e67);
          if (!_3d842a962905) return _f68023e5066c;
          let _2dbb4876c500 = (0, _68051092d66a.hD)(_3d842a962905.hash.slice(1));
          return _3d842a962905.hash = "", location.origin + _68051092d66a.$W.prefix + (0, 
          _68051092d66a.hD)(_3d842a962905.href) + (_2dbb4876c500 ? "#" + _2dbb4876c500 : "");
        }
      }
      function c(_f68023e5066c) {
        _f68023e5066c instanceof URL && (_f68023e5066c = _f68023e5066c.toString());
        let _34f246cde5be = location.origin + _68051092d66a.$W.prefix;
        if (_f68023e5066c.startsWith("javascript:")) return _f68023e5066c;
        {
          if (_f68023e5066c.startsWith("blob:")) return _f68023e5066c;
          if (_f68023e5066c.startsWith(_34f246cde5be + "blob:") || _f68023e5066c.startsWith(_34f246cde5be + "data:")) return _f68023e5066c.substring(_34f246cde5be.length);
          if (_f68023e5066c.startsWith("mailto:") || _f68023e5066c.startsWith("about:")) return _f68023e5066c;
          let _63a45e116e67 = a(_f68023e5066c);
          if (!_63a45e116e67) return _f68023e5066c;
          let _3d842a962905 = (0, _68051092d66a.P_)(_63a45e116e67.hash.slice(1));
          return _63a45e116e67.hash = "", (0, _68051092d66a.P_)(_63a45e116e67.href.slice(_34f246cde5be.length) + (_3d842a962905 ? "#" + _3d842a962905 : ""));
        }
      }
    },
    1561: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      let _68051092d66a;
      _63a45e116e67.d(_34f246cde5be, {
        n$: () => d,
        nb: () => g,
        su: () => _0a3b7a57b594
      });
      var _3d842a962905 = _63a45e116e67(3907), _2dbb4876c500 = _63a45e116e67(37), _4547843d0a40 = _63a45e116e67(1472), _bed2b259674e = _63a45e116e67(2393), _d73671e3fec6 = _63a45e116e67(2614), _ef72ad0b9c92 = _63a45e116e67(1478), _44f0b1ed911f = _63a45e116e67(884);
      async function d() {
        _68051092d66a = new Uint8Array(await fetch(_2dbb4876c500.$W.files.wasm).then(_f68023e5066c => _f68023e5066c.arrayBuffer()));
      }
      self.WASM && (_68051092d66a = Uint8Array.from(atob(self.WASM), _f68023e5066c => _f68023e5066c.charCodeAt(0)));
      let _0a3b7a57b594 = new TextDecoder, _3644bb2f5311 = "\0asm".split("").map(_f68023e5066c => _f68023e5066c.charCodeAt(0)), _9acaff0e6a8f = [];
      function g(_f68023e5066c) {
        let _34f246cde5be;
        if (!(_68051092d66a instanceof Uint8Array)) throw Error("rewriter wasm not found (was it fetched correctly?)");
        if (![ ..._68051092d66a.slice(0, 4) ].every((_f68023e5066c, _34f246cde5be) => _f68023e5066c === _3644bb2f5311[_34f246cde5be])) throw Error("rewriter wasm does not have wasm magic (was it fetched correctly?)\nrewriter wasm contents: " + _0a3b7a57b594.decode(_68051092d66a));
        (0, _3d842a962905.QR)({
          module: new WebAssembly.Module(_68051092d66a)
        });
        let _63a45e116e67 = _9acaff0e6a8f.findIndex(_f68023e5066c => !_f68023e5066c.inUse), _4a3d65fa17db = _9acaff0e6a8f.length;
        return -1 === _63a45e116e67 ? ((0, _2dbb4876c500.U5)("rewriterLogs", _f68023e5066c.base) && console.log(`creating new rewriter, ${_4a3d65fa17db} rewriters made already`), 
        _34f246cde5be = {
          rewriter: new _3d842a962905.LW({
            config: _2dbb4876c500.$W,
            shared: {
              rewrite: {
                htmlRules: _bed2b259674e.V,
                rewriteUrl: _4547843d0a40.Oy,
                rewriteCss: _d73671e3fec6.s,
                rewriteJs: _ef72ad0b9c92.o,
                getHtmlInjectCode(_f68023e5066c, _34f246cde5be) {
                  let _63a45e116e67 = (0, _44f0b1ed911f.Uk)(_f68023e5066c, _f68023e5066c => `<script src="${_f68023e5066c}"><\/script>`).join("");
                  return _34f246cde5be ? `<head>${_63a45e116e67}</head>` : _63a45e116e67;
                }
              }
            },
            flagEnabled: _2dbb4876c500.U5,
            codec: {
              encode: _2dbb4876c500.hD,
              decode: _2dbb4876c500.P_
            }
          }),
          inUse: !1
        }, _9acaff0e6a8f.push(_34f246cde5be)) : ((0, _2dbb4876c500.U5)("rewriterLogs", _f68023e5066c.base) && console.log(`using cached rewriter ${_63a45e116e67} from list of ${_4a3d65fa17db} rewriters`), 
        _34f246cde5be = _9acaff0e6a8f[_63a45e116e67]), _34f246cde5be.inUse = !0, [ _34f246cde5be.rewriter, () => _34f246cde5be.inUse = !1 ];
      }
    },
    2015: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.d(_34f246cde5be, {
        i: () => a
      });
      var _68051092d66a = _63a45e116e67(37), _3d842a962905 = _63a45e116e67(1478);
      function a(_f68023e5066c, _34f246cde5be, _63a45e116e67, _2dbb4876c500) {
        let _4547843d0a40 = "", _bed2b259674e = "module" === _34f246cde5be, l = _f68023e5066c => {
          _bed2b259674e ? _4547843d0a40 += `import "${_68051092d66a.$W.files[_f68023e5066c]}"\n` : _4547843d0a40 += `importScripts("${_68051092d66a.$W.files[_f68023e5066c]}");\n`;
        };
        l("wasm"), l("all"), _4547843d0a40 += `$studyjetLoadClient().loadAndHook(${JSON.stringify(_68051092d66a.$W)});`;
        let _d73671e3fec6 = (0, _3d842a962905.o)(_f68023e5066c, _63a45e116e67, _2dbb4876c500, _bed2b259674e);
        return _d73671e3fec6 instanceof Uint8Array && (_d73671e3fec6 = (new TextDecoder).decode(_d73671e3fec6)), 
        _4547843d0a40 += _d73671e3fec6;
      }
    },
    6684: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.d(_34f246cde5be, {
        Sn: () => h,
        YH: () => u,
        Yq: () => f,
        hU: () => d,
        pL: () => p,
        rj: () => c
      });
      var _68051092d66a = _63a45e116e67(6570);
      let _3d842a962905 = {
        none: 0,
        "same-origin": 1,
        "same-site": 2,
        "cross-site": 3
      };
      async function a() {
        return (0, _68051092d66a.P2)("@d7a6431b92e", 1);
      }
      async function s(_f68023e5066c) {
        let _34f246cde5be = await a();
        return await _34f246cde5be.get("redirectTrackers", _f68023e5066c) || null;
      }
      async function o(_f68023e5066c, _34f246cde5be) {
        let _63a45e116e67 = await a();
        await _63a45e116e67.put("redirectTrackers", _34f246cde5be, _f68023e5066c);
      }
      async function l(_f68023e5066c) {
        let _34f246cde5be = await a();
        await _34f246cde5be.delete("redirectTrackers", _f68023e5066c);
      }
      async function c(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
        await s(_f68023e5066c) || await o(_f68023e5066c, {
          originalReferrer: _34f246cde5be || "",
          mostRestrictiveSite: _63a45e116e67,
          referrerPolicy: "",
          chainStarted: Date.now()
        });
      }
      async function u(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
        let _68051092d66a = await s(_f68023e5066c);
        _68051092d66a && (await l(_f68023e5066c), _63a45e116e67 && (_68051092d66a.referrerPolicy = _63a45e116e67), 
        await o(_34f246cde5be, _68051092d66a));
      }
      async function d(_f68023e5066c, _34f246cde5be) {
        let _63a45e116e67 = await s(_f68023e5066c);
        if (!_63a45e116e67) return _34f246cde5be;
        let _68051092d66a = _3d842a962905[_63a45e116e67.mostRestrictiveSite];
        return (_3d842a962905[_34f246cde5be] ?? 0) > _68051092d66a ? (_63a45e116e67.mostRestrictiveSite = _34f246cde5be, 
        await o(_f68023e5066c, _63a45e116e67), _34f246cde5be) : _63a45e116e67.mostRestrictiveSite;
      }
      async function h(_f68023e5066c) {
        await l(_f68023e5066c);
      }
      async function p(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
        let _68051092d66a = await a();
        await _68051092d66a.put("referrerPolicies", {
          policy: _34f246cde5be,
          referrer: _63a45e116e67
        }, _f68023e5066c);
      }
      async function f(_f68023e5066c) {
        let _34f246cde5be = await a();
        return await _34f246cde5be.get("referrerPolicies", _f68023e5066c) || null;
      }
    },
    2416: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67(6684), _63a45e116e67(8228);
    },
    8228: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.d(_34f246cde5be, {
        ps: () => l
      });
      var _68051092d66a = _63a45e116e67(6570);
      let _3d842a962905 = "publicSuffixList";
      async function a() {
        return (0, _68051092d66a.P2)("@d7a6431b92e", 1);
      }
      async function s() {
        let _f68023e5066c = await a();
        return await _f68023e5066c.get("publicSuffixList", _3d842a962905) || null;
      }
      async function o(_f68023e5066c) {
        let _34f246cde5be = await a();
        await _34f246cde5be.put("publicSuffixList", {
          data: _f68023e5066c,
          expiry: Date.now() + 36e5
        }, _3d842a962905);
      }
      async function l(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
        return _34f246cde5be ? _f68023e5066c.origin.origin === _34f246cde5be.origin ? "same-origin" : await c(_f68023e5066c.origin, _34f246cde5be, _63a45e116e67) ? "same-site" : "cross-site" : "none";
      }
      async function c(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
        return await u(_f68023e5066c, _63a45e116e67) === await u(_34f246cde5be, _63a45e116e67);
      }
      async function u(_f68023e5066c, _34f246cde5be) {
        let _63a45e116e67 = await d(_34f246cde5be), _68051092d66a = _f68023e5066c.hostname.toLowerCase().split("."), _3d842a962905 = "", _2dbb4876c500 = !1;
        for (let _f68023e5066c of _63a45e116e67) {
          let _34f246cde5be = _f68023e5066c.startsWith("!") ? _f68023e5066c.substring(1) : _f68023e5066c;
          if (function(_f68023e5066c, _34f246cde5be) {
            if (_f68023e5066c.length < _34f246cde5be.length) return !1;
            let _63a45e116e67 = _f68023e5066c.length - _34f246cde5be.length;
            for (let _68051092d66a = 0; _68051092d66a < _34f246cde5be.length; _68051092d66a++) {
              let _3d842a962905 = _f68023e5066c[_63a45e116e67 + _68051092d66a], _2dbb4876c500 = _34f246cde5be[_68051092d66a];
              if ("*" !== _2dbb4876c500 && _3d842a962905 !== _2dbb4876c500) return !1;
            }
            return !0;
          }(_68051092d66a, _34f246cde5be.split("."))) {
            if (_f68023e5066c.startsWith("!")) {
              _3d842a962905 = _34f246cde5be, _2dbb4876c500 = !0;
              break;
            }
            !_2dbb4876c500 && _34f246cde5be.length > _3d842a962905.length && (_3d842a962905 = _34f246cde5be);
          }
        }
        if (!_3d842a962905) return _68051092d66a.slice(-2).join(".");
        let _4547843d0a40 = _3d842a962905.split(".").length, _bed2b259674e = _2dbb4876c500 ? _4547843d0a40 : _4547843d0a40 + 1;
        return _68051092d66a.slice(-_bed2b259674e).join(".");
      }
      async function d(_f68023e5066c) {
        let _34f246cde5be, _63a45e116e67 = await s();
        if (_63a45e116e67 && Date.now() < _63a45e116e67.expiry) return _63a45e116e67.data;
        try {
          _34f246cde5be = await _f68023e5066c.fetch("https://publicsuffix.org/list/public_suffix_list.dat");
        } catch (_f68023e5066c) {
          throw Error(`Failed to fetch public suffix list: ${_f68023e5066c}`);
        }
        let _68051092d66a = (await _34f246cde5be.text()).split("\n").map(_f68023e5066c => {
          let _34f246cde5be = _f68023e5066c.trim(), _63a45e116e67 = _34f246cde5be.indexOf(" ");
          return _63a45e116e67 > -1 ? _34f246cde5be.substring(0, _63a45e116e67) : _34f246cde5be;
        }).filter(_f68023e5066c => _f68023e5066c && !_f68023e5066c.startsWith("//"));
        return await o(_68051092d66a), _68051092d66a;
      }
    },
    2794: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.d(_34f246cde5be, {
        pX: () => _68051092d66a,
        zr: () => _3d842a962905
      });
      let _68051092d66a = Symbol.for("studyjet client global"), _3d842a962905 = Symbol.for("studyjet frame handle");
    },
    5956: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      function n(_f68023e5066c, _34f246cde5be) {
        let _63a45e116e67 = `\n                errorTrace.value = ${JSON.stringify(_f68023e5066c)};\n                fetchedURL.textContent = ${JSON.stringify(_34f246cde5be)};\n                for (const node of document.querySelectorAll("#hostname")) node.textContent = ${JSON.stringify(location.hostname)};\n                reload.addEventListener("click", () => location.reload());\n                version.textContent = ${JSON.stringify(globalThis.$studyjetVersion?.version || "unknown")};\n                build.textContent = ${JSON.stringify(globalThis.$studyjetVersion?.build || "unknown")};\n\n                document.getElementById('copy-button').addEventListener('click', async () => {\n                    const text = document.getElementById('errorTrace').value;\n                    await navigator.clipboard.writeText(text);\n                    const btn = document.getElementById('copy-button');\n                    btn.textContent = 'Copied!';\n                    setTimeout(() => btn.textContent = 'Copy', 2000);\n                });\n        `;
        return `<!DOCTYPE html>\n            <html>\n                <head>\n                    <meta charset="utf-8" />\n                    <title>StudyJet</title>\n                    <style>\n                    :root {\n                        --deep: #080602;\n                        --shallow: #181412;\n                        --beach: #f1e8e1;\n                        --shore: #b1a8a1;\n                        --accent: #ffa938;\n                        --font-sans: -apple-system, system-ui, BlinkMacSystemFont, sans-serif;\n                        --font-monospace: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n                    }\n\n                    *:not(div,p,span,ul,li,i,span) {\n                        background-color: var(--deep);\n                        color: var(--beach);\n                        font-family: var(--font-sans);\n                    }\n\n                    textarea,\n                    button {\n                        background-color: var(--shallow);\n                        border-radius: 0.6em;\n                        padding: 0.6em;\n                        border: none;\n                        appearance: none;\n                        font-family: var(--font-sans);\n                        color: var(--beach);\n                    }\n\n                    button.primary {\n                        background-color: var(--accent);\n                        color: var(--deep);\n                        font-weight: bold;\n                    }\n\n                    textarea {\n                        resize: none;\n                        height: 20em;\n                        text-align: left;\n                        font-family: var(--font-monospace);\n                    }\n\n                    body {\n                        width: 100vw;\n                        height: 100vh;\n                        justify-content: center;\n                        align-items: center;\n                    }\n\n                    body,\n                    html,\n                    #inner {\n                        display: flex;\n                        align-items: center;\n                        flex-direction: column;\n                        gap: 0.5em;\n                        overflow: hidden;\n                    }\n\n                    #inner {\n                        z-index: 100;\n                    }\n\n                    #cover {\n                        position: absolute;\n                        width: 100%;\n                        height: 100%;\n                        background-color: color-mix(in srgb, var(--deep) 70%, transparent);\n                        z-index: 99;\n                    }\n\n                    #info {\n                        display: flex;\n                        flex-direction: row;\n                        align-items: flex-start;\n                        gap: 1em;\n                    }\n\n                    #version-wrapper {\n                        width: auto;\n                        text-align: right;\n                        position: absolute;\n                        top: 0.5rem;\n                        right: 0.5rem;\n                        font-size: 0.8rem;\n                        color: var(--shore)!important;\n                        i {\n                            background-color: color-mix(in srgb, var(--deep), transparent 50%);\n                            border-radius: 9999px;\n                            padding: 0.2em 0.5em;\n                        }\n                        z-index: 101;\n                    }\n\n                    #errorTrace-wrapper {\n                        position: relative;\n                        width: fit-content;\n                    }\n\n                    #copy-button {\n                        position: absolute;\n                        top: 0.5em;\n                        right: 0.5em;\n                        padding: 0.23em;\n                        cursor: pointer;\n                        opacity: 0;\n                        transition: opacity 0.4s;\n                        font-size: 0.9em;\n                    }\n\n                    #errorTrace-wrapper:hover #copy-button {\n                        opacity: 1;\n                    }\n                    </style>\n                </head>\n                <body>\n                    <div id="cover"></div>\n                    <div id="inner">\n                        <h1 id="errorTitle">Uh oh!</h1>\n                        <p>There was an error loading <b id="fetchedURL"></b></p>\n                        \x3c!-- <p id="errorMessage">Internal Server Error</p> --\x3e\n\n                        <div id="info">\n                            <div id="errorTrace-wrapper">\n                                <textarea id="errorTrace" cols="40" rows="10" readonly></textarea>\n                                <button id="copy-button" class="primary">Copy</button>\n                            </div>\n                            <div id="troubleshooting">\n                                <p>Try:</p>\n                                <ul>\n                                    <li>Checking your internet connection</li>\n                                    <li>Verifying you entered the correct address</li>\n                                    <li>Clearing the site data</li>\n                                    <li>Contacting <b id="hostname"></b>'s administrator</li>\n                                    <li>Verify the server isn't censored</li>\n                                </ul>\n                                <p>If you're the administrator of <b id="hostname"></b>, try:</p>\n                                    <ul>\n                                    <li>Restarting your server</li>\n                                    <li>Updating StudyJet</li>\n                                    <li>Troubleshooting the error on the <a href="https://github.com/MercuryWorkshop/studyjet" target="_blank">GitHub repository</a></li>\n                                </ul>\n                            </div>\n                        </div>\n                        <br>\n                        <button id="reload" class="primary">Reload</button>\n                    </div>\n                    <p id="version-wrapper"><i>StudyJet v<span id="version"></span> (build <span id="build"></span>)</i></p>\n                    <script src="${"data:application/javascript," + encodeURIComponent(_63a45e116e67)}"><\/script>\n                </body>\n            </html>\n        `;
      }
      function i(_f68023e5066c, _34f246cde5be) {
        let _63a45e116e67 = {
          "content-type": "text/html"
        };
        return crossOriginIsolated && (_63a45e116e67["Cross-Origin-Embedder-Policy"] = "require-corp"), 
        new Response(n(String(_f68023e5066c), _34f246cde5be), {
          status: 500,
          headers: _63a45e116e67
        });
      }
      _63a45e116e67.d(_34f246cde5be, {
        B: () => n,
        v: () => i
      });
    },
    1403: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.d(_34f246cde5be, {
        H: () => n
      });
      class n {
        handle;
        origin;
        syncToken=0;
        promises={};
        messageChannel=new MessageChannel;
        connected=!1;
        constructor(_f68023e5066c, _34f246cde5be) {
          this.handle = _f68023e5066c, this.origin = _34f246cde5be, this.messageChannel.port1.addEventListener("message", _f68023e5066c => {
            "studyjet$type" in _f68023e5066c.data && ("init" === _f68023e5066c.data.studyjet$type ? this.connected = !0 : this.handleMessage(_f68023e5066c.data));
          }), this.messageChannel.port1.start(), this.handle.postMessage({
            studyjet$type: "init",
            studyjet$port: this.messageChannel.port2
          }, [ this.messageChannel.port2 ]);
        }
        handleMessage(_f68023e5066c) {
          let _34f246cde5be = this.promises[_f68023e5066c.studyjet$token];
          _34f246cde5be && (_34f246cde5be(_f68023e5066c), delete this.promises[_f68023e5066c.studyjet$token]);
        }
        async fetch(_f68023e5066c) {
          let _34f246cde5be = this.syncToken++, _63a45e116e67 = {
            studyjet$type: "fetch",
            studyjet$token: _34f246cde5be,
            studyjet$request: {
              url: _f68023e5066c.url,
              body: _f68023e5066c.body,
              headers: Array.from(_f68023e5066c.headers.entries()),
              method: _f68023e5066c.method,
              mode: _f68023e5066c.mode,
              destinitation: _f68023e5066c.destination
            }
          }, _68051092d66a = _f68023e5066c.body ? [ _f68023e5066c.body ] : [];
          this.handle.postMessage(_63a45e116e67, _68051092d66a);
          let {studyjet$response: _3d842a962905} = await new Promise(_f68023e5066c => {
            this.promises[_34f246cde5be] = _f68023e5066c;
          });
          return !!_3d842a962905 && new Response(_3d842a962905.body, {
            headers: _3d842a962905.headers,
            status: _3d842a962905.status,
            statusText: _3d842a962905.statusText
          });
        }
      }
    },
    5790: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.d(_34f246cde5be, {
        Pf: () => m,
        V3: () => S,
        dT: () => w
      });
      var _68051092d66a = _63a45e116e67(5956), _3d842a962905 = _63a45e116e67(8228), _2dbb4876c500 = _63a45e116e67(6684), _4547843d0a40 = _63a45e116e67(1472), _bed2b259674e = _63a45e116e67(1478), _d73671e3fec6 = _63a45e116e67(1427), _ef72ad0b9c92 = _63a45e116e67(37), _44f0b1ed911f = _63a45e116e67(4435), _0a3b7a57b594 = _63a45e116e67(884), _3644bb2f5311 = _63a45e116e67(2614), _9acaff0e6a8f = _63a45e116e67(2015), _4a3d65fa17db = _63a45e116e67(8665).A;
      function g(_f68023e5066c) {
        return _f68023e5066c.status >= 300 && _f68023e5066c.status < 400;
      }
      async function m(_f68023e5066c, _34f246cde5be) {
        try {
          let _63a45e116e67, _68051092d66a, _bed2b259674e = new URL(_f68023e5066c.url);
          if (_bed2b259674e.pathname === this.config.files.wasm) return fetch(this.config.files.wasm).then(async _f68023e5066c => {
            let _34f246cde5be = await _f68023e5066c.arrayBuffer(), _63a45e116e67 = btoa(new Uint8Array(_34f246cde5be).reduce((_f68023e5066c, _34f246cde5be) => (_f68023e5066c.push(String.fromCharCode(_34f246cde5be)), 
            _f68023e5066c), []).join("")), _68051092d66a = "";
            return _68051092d66a += `if ('document' in self && document.currentScript) { document.currentScript.remove(); }\nself.WASM = '${_63a45e116e67}';`, 
            new Response(_68051092d66a, {
              headers: {
                "content-type": "text/javascript"
              }
            });
          });
          let _44f0b1ed911f = "", _0a3b7a57b594 = {};
          for (let [_f68023e5066c, _34f246cde5be] of [ ..._bed2b259674e.searchParams.entries() ]) {
            switch (_f68023e5066c) {
             case "type":
              _44f0b1ed911f = _34f246cde5be;
              break;

             case "dest":
              break;

             case "topFrame":
              _63a45e116e67 = _34f246cde5be;
              break;

             case "parentFrame":
              _68051092d66a = _34f246cde5be;
              break;

             default:
              _4a3d65fa17db.warn(`${_bed2b259674e.href} extraneous query parameter ${_f68023e5066c}. Assuming <form> element`), 
              _0a3b7a57b594[_f68023e5066c] = _34f246cde5be;
            }
            _bed2b259674e.searchParams.delete(_f68023e5066c);
          }
          let _3644bb2f5311 = new URL((0, _4547843d0a40.v2)(_bed2b259674e));
          for (let [_f68023e5066c, _34f246cde5be] of Object.entries(_0a3b7a57b594)) _3644bb2f5311.searchParams.set(_f68023e5066c, _34f246cde5be);
          let _9acaff0e6a8f = {
            origin: _3644bb2f5311,
            base: _3644bb2f5311,
            topFrameName: _63a45e116e67,
            parentFrameName: _68051092d66a
          };
          if (_bed2b259674e.pathname.startsWith(`${this.config.prefix}blob:`) || _bed2b259674e.pathname.startsWith(`${this.config.prefix}data:`)) {
            let _34f246cde5be, _63a45e116e67 = _bed2b259674e.pathname.substring(this.config.prefix.length);
            _63a45e116e67.startsWith("blob:") && (_63a45e116e67 = (0, _4547843d0a40.$n)(_63a45e116e67));
            let _68051092d66a = await fetch(_63a45e116e67, {});
            _68051092d66a.finalURL = _63a45e116e67.startsWith("blob:") ? _63a45e116e67 : "(data url)", 
            _68051092d66a.body && (_34f246cde5be = await b(_68051092d66a, _9acaff0e6a8f, _f68023e5066c.destination, _44f0b1ed911f, this.cookieStore));
            let _3d842a962905 = Object.fromEntries(_68051092d66a.headers.entries());
            return crossOriginIsolated && (_3d842a962905["Cross-Origin-Opener-Policy"] = "same-origin", 
            _3d842a962905["Cross-Origin-Embedder-Policy"] = "require-corp"), new Response(_34f246cde5be, {
              status: _68051092d66a.status,
              statusText: _68051092d66a.statusText,
              headers: _3d842a962905
            });
          }
          let _4794763b2606 = this.serviceWorkers.find(_f68023e5066c => _f68023e5066c.origin === _3644bb2f5311.origin);
          if (_4794763b2606?.connected && "swruntime" !== _bed2b259674e.searchParams.get("from")) {
            let _34f246cde5be = await _4794763b2606.fetch(_f68023e5066c);
            if (_34f246cde5be) return _34f246cde5be;
          }
          if (_3644bb2f5311.origin === new URL(_f68023e5066c.url).origin) throw Error("attempted to fetch from same origin - this means the site has obtained a reference to the real origin, aborting");
          let _5e74b8896751 = new _d73671e3fec6.u;
          for (let [_34f246cde5be, _63a45e116e67] of _f68023e5066c.headers.entries()) _5e74b8896751.set(_34f246cde5be, _63a45e116e67);
          if (_34f246cde5be && new URL(_34f246cde5be.url).pathname.startsWith(_ef72ad0b9c92.$W.prefix)) {
            let _f68023e5066c = new URL((0, _4547843d0a40.v2)(_34f246cde5be.url));
            _f68023e5066c.toString().includes("youtube.com") || (_5e74b8896751.set("Referer", _f68023e5066c.href), 
            _5e74b8896751.set("Origin", _f68023e5066c.origin));
          }
          let _e02169115a84 = this.cookieStore.getCookies(_3644bb2f5311, !1);
          _e02169115a84.length && _5e74b8896751.set("Cookie", _e02169115a84);
          let _1a5c44ebdc2b = !1;
          if ("iframe" === _f68023e5066c.destination && "navigate" === _f68023e5066c.mode && _f68023e5066c.referrer && "no-referrer" !== _f68023e5066c.referrer && _f68023e5066c.referrer !== location.origin + _ef72ad0b9c92.$W.prefix + "no-referrer") {
            let _34f246cde5be = _f68023e5066c.referrer, _63a45e116e67 = await self.clients.matchAll({
              type: "window"
            });
            for (;_34f246cde5be; ) {
              if (!_34f246cde5be.includes(_ef72ad0b9c92.$W.prefix)) {
                _1a5c44ebdc2b = !0;
                break;
              }
              let _f68023e5066c = _63a45e116e67.find(_f68023e5066c => _f68023e5066c.url === _34f246cde5be), _68051092d66a = await (0, 
              _2dbb4876c500.Yq)(_34f246cde5be);
              if (!_68051092d66a || !_68051092d66a.referrer) {
                _f68023e5066c && _34f246cde5be.startsWith(location.origin) && (_1a5c44ebdc2b = !0);
                break;
              }
              if (_f68023e5066c && "nested" === _f68023e5066c.frameType) _34f246cde5be = _68051092d66a.referrer; else break;
            }
          }
          _1a5c44ebdc2b ? (_5e74b8896751.set("Sec-Fetch-Dest", "document"), _5e74b8896751.set("Sec-Fetch-Mode", "navigate")) : (_5e74b8896751.set("Sec-Fetch-Dest", _f68023e5066c.destination || "empty"), 
          _5e74b8896751.set("Sec-Fetch-Mode", _f68023e5066c.mode));
          let _c928217920a3 = "none";
          if (_f68023e5066c.referrer && "" !== _f68023e5066c.referrer && "no-referrer" !== _f68023e5066c.referrer && _f68023e5066c.referrer !== location.origin + _ef72ad0b9c92.$W.prefix + "no-referrer" && _f68023e5066c.referrer.includes(_ef72ad0b9c92.$W.prefix)) {
            let _34f246cde5be = (0, _4547843d0a40.v2)(_f68023e5066c.referrer);
            if (_34f246cde5be) {
              let _f68023e5066c = new URL(_34f246cde5be);
              _c928217920a3 = await (0, _3d842a962905.ps)(_9acaff0e6a8f, _f68023e5066c, this.client);
            }
          }
          await (0, _2dbb4876c500.rj)(_3644bb2f5311.toString(), _f68023e5066c.referrer ? (0, 
          _4547843d0a40.v2)(_f68023e5066c.referrer) : null, _c928217920a3), _5e74b8896751.set("Sec-Fetch-Site", await (0, 
          _2dbb4876c500.hU)(_3644bb2f5311.toString(), _c928217920a3));
          let _af58f0790695 = new S(_3644bb2f5311, _5e74b8896751.headers, _f68023e5066c.body, _f68023e5066c.method, _f68023e5066c.destination, _34f246cde5be);
          this.dispatchEvent(_af58f0790695);
          let _f41beb77f36a = await _af58f0790695.response || await this.client.fetch(_af58f0790695.url, {
            method: _af58f0790695.method,
            body: _af58f0790695.body,
            headers: _af58f0790695.requestHeaders,
            credentials: "omit",
            mode: "cors" === _f68023e5066c.mode ? _f68023e5066c.mode : "same-origin",
            cache: _f68023e5066c.cache,
            redirect: "manual",
            duplex: "half"
          });
          return _f41beb77f36a.finalURL = _af58f0790695.url.href, await y(_3644bb2f5311, _9acaff0e6a8f, _44f0b1ed911f, _f68023e5066c.destination, _f68023e5066c.mode, _f41beb77f36a, this.cookieStore, _34f246cde5be, this.client, this, _f68023e5066c.referrer);
        } catch (_34f246cde5be) {
          let _63a45e116e67 = {
            message: _34f246cde5be.message,
            url: _f68023e5066c.url,
            destination: _f68023e5066c.destination
          };
          if (_34f246cde5be.cause && (_63a45e116e67.cause = _34f246cde5be.cause, _34f246cde5be.cause instanceof AggregateError && (_63a45e116e67.causeErrors = _34f246cde5be.cause.errors)), 
          _34f246cde5be.stack && (_63a45e116e67.stack = _34f246cde5be.stack), console.error("ERROR FROM SERVICE WORKER FETCH: ", _63a45e116e67), 
          console.error(_34f246cde5be), ![ "document", "iframe" ].includes(_f68023e5066c.destination)) return new Response(void 0, {
            status: 500
          });
          let _3d842a962905 = Object.entries(_63a45e116e67).map(([_f68023e5066c, _34f246cde5be]) => `${_f68023e5066c.charAt(0).toUpperCase() + _f68023e5066c.slice(1)}: ${_34f246cde5be}`).join("\n\n");
          return (0, _68051092d66a.v)(_3d842a962905, (0, _4547843d0a40.v2)(_f68023e5066c.url));
        }
      }
      async function y(_f68023e5066c, _34f246cde5be, _63a45e116e67, _68051092d66a, _bed2b259674e, _d73671e3fec6, _0a3b7a57b594, _3644bb2f5311, _9acaff0e6a8f, _4a3d65fa17db, _4794763b2606) {
        let _5e74b8896751, _e02169115a84 = "navigate" === _bed2b259674e && [ "document", "iframe" ].includes(_68051092d66a), _1a5c44ebdc2b = await (0, 
        _44f0b1ed911f.l)(_d73671e3fec6.rawHeaders, _34f246cde5be, _9acaff0e6a8f, {
          get: _2dbb4876c500.Yq,
          set: _2dbb4876c500.pL
        });
        if (_e02169115a84 && _1a5c44ebdc2b["referrer-policy"] && _4794763b2606 && await (0, 
        _2dbb4876c500.pL)(_f68023e5066c.href, _1a5c44ebdc2b["referrer-policy"], _4794763b2606), 
        g(_d73671e3fec6)) {
          let _34f246cde5be = new URL((0, _4547843d0a40.v2)(_1a5c44ebdc2b.location));
          await (0, _2dbb4876c500.YH)(_f68023e5066c.toString(), _34f246cde5be.toString(), _1a5c44ebdc2b["referrer-policy"]);
          let _68051092d66a = await (0, _3d842a962905.ps)({
            origin: _34f246cde5be,
            base: _34f246cde5be
          }, _f68023e5066c, _9acaff0e6a8f);
          if (await (0, _2dbb4876c500.hU)(_34f246cde5be.toString(), _68051092d66a), _63a45e116e67) {
            let _f68023e5066c = new URL(_1a5c44ebdc2b.location);
            _f68023e5066c.searchParams.set("type", _63a45e116e67), _1a5c44ebdc2b.location = _f68023e5066c.href;
          }
        }
        let _c928217920a3 = _1a5c44ebdc2b["set-cookie"] || [];
        for (let _34f246cde5be in _c928217920a3) if (_3644bb2f5311) {
          let _63a45e116e67 = _4a3d65fa17db.dispatch(_3644bb2f5311, {
            studyjet$type: "cookie",
            cookie: _34f246cde5be,
            url: _f68023e5066c.href
          });
          "document" !== _68051092d66a && "iframe" !== _68051092d66a && await _63a45e116e67;
        }
        for (let _34f246cde5be in await _0a3b7a57b594.setCookies(_c928217920a3 instanceof Array ? _c928217920a3 : [ _c928217920a3 ], _f68023e5066c), 
        _1a5c44ebdc2b) Array.isArray(_1a5c44ebdc2b[_34f246cde5be]) && (_1a5c44ebdc2b[_34f246cde5be] = _1a5c44ebdc2b[_34f246cde5be][0]);
        if (function(_f68023e5066c, _34f246cde5be) {
          if ([ "document", "iframe" ].includes(_34f246cde5be)) {
            let _34f246cde5be = _f68023e5066c["content-disposition"];
            if (_34f246cde5be) {
              if ("inline" !== _34f246cde5be) return !0;
            } else {
              let _34f246cde5be = _f68023e5066c["content-type"]?.split(";")[0].trim().toLowerCase();
              if (_34f246cde5be && ![ "text/html", "text/plain", "text/css", "text/javascript", "text/xml", "application/javascript", "application/json", "application/xml", "application/pdf" ].includes(_34f246cde5be) && !_34f246cde5be.startsWith("text") && !_34f246cde5be.startsWith("image") && !_34f246cde5be.startsWith("font") && !_34f246cde5be.startsWith("video")) return !0;
            }
          }
          return !1;
        }(_1a5c44ebdc2b, _68051092d66a) && !g(_d73671e3fec6)) if ((0, _ef72ad0b9c92.U5)("interceptDownloads", _f68023e5066c)) {
          if (!_3644bb2f5311) throw Error("cant find client");
          let _34f246cde5be = null, _63a45e116e67 = _1a5c44ebdc2b["content-disposition"];
          if ("string" == typeof _63a45e116e67) {
            let _f68023e5066c = _63a45e116e67.match(/filename=["']?([^"';\n]*)["']?/i);
            _f68023e5066c && _f68023e5066c[1] && (_34f246cde5be = _f68023e5066c[1]);
          }
          let _68051092d66a = _1a5c44ebdc2b["content-length"], _3d842a962905 = await clients.matchAll({});
          if ((_3d842a962905 = _3d842a962905.filter(_f68023e5066c => !_f68023e5066c.url.includes(_ef72ad0b9c92.$W.prefix))).length < 1) throw Error("couldn't find a controller client to dispatch download to");
          let _2dbb4876c500 = {
            filename: _34f246cde5be,
            url: _f68023e5066c.href,
            type: _1a5c44ebdc2b["content-type"],
            body: _d73671e3fec6.body,
            length: Number(_68051092d66a)
          };
          _3d842a962905[0].postMessage({
            studyjet$type: "download",
            download: _2dbb4876c500
          }, [ _d73671e3fec6.body ]), await new Promise(() => {});
        } else {
          let _f68023e5066c = _1a5c44ebdc2b["content-disposition"];
          if (!/\s*?((inline|attachment);\s*?)filename=/i.test(_f68023e5066c)) {
            let _34f246cde5be = /^\s*?attachment/i.test(_f68023e5066c) ? "attachment" : "inline", [_63a45e116e67] = new URL(_d73671e3fec6.finalURL).pathname.split("/").slice(-1);
            _1a5c44ebdc2b["content-disposition"] = `${_34f246cde5be}; filename=${JSON.stringify(_63a45e116e67)}`;
          }
        }
        _d73671e3fec6.body && !g(_d73671e3fec6) && (_5e74b8896751 = await b(_d73671e3fec6, _34f246cde5be, _68051092d66a, _63a45e116e67, _0a3b7a57b594)), 
        "text/event-stream" === _1a5c44ebdc2b.accept && (_1a5c44ebdc2b["content-type"] = "text/event-stream"), 
        delete _1a5c44ebdc2b["permissions-policy"], crossOriginIsolated && [ "document", "iframe", "worker", "sharedworker", "style", "script" ].includes(_68051092d66a) && (_1a5c44ebdc2b["Cross-Origin-Embedder-Policy"] = "require-corp", 
        _1a5c44ebdc2b["Cross-Origin-Opener-Policy"] = "same-origin");
        let _af58f0790695 = new w(_5e74b8896751, _1a5c44ebdc2b, _d73671e3fec6.status, _d73671e3fec6.statusText, _68051092d66a, _f68023e5066c, _d73671e3fec6, _3644bb2f5311);
        return _4a3d65fa17db.dispatchEvent(_af58f0790695), g(_d73671e3fec6) || await (0, 
        _2dbb4876c500.Sn)(_f68023e5066c.toString()), new Response(_af58f0790695.responseBody, {
          headers: _af58f0790695.responseHeaders,
          status: _af58f0790695.status,
          statusText: _af58f0790695.statusText
        });
      }
      async function b(_f68023e5066c, _34f246cde5be, _63a45e116e67, _68051092d66a, _3d842a962905) {
        switch (_63a45e116e67) {
         case "iframe":
         case "document":
          if (_f68023e5066c.headers.get("content-type")?.startsWith("text/html")) return (0, 
          _0a3b7a57b594.Qs)(await _f68023e5066c.text(), _3d842a962905, _34f246cde5be, !0);
          return _f68023e5066c.body;

         case "script":
          return (0, _bed2b259674e.o)(new Uint8Array(await _f68023e5066c.arrayBuffer()), _f68023e5066c.finalURL, _34f246cde5be, "module" === _68051092d66a);

         case "style":
          return (0, _3644bb2f5311.s)(await _f68023e5066c.text(), _34f246cde5be);

         case "sharedworker":
         case "worker":
          return (0, _9acaff0e6a8f.i)(new Uint8Array(await _f68023e5066c.arrayBuffer()), _68051092d66a, _f68023e5066c.finalURL, _34f246cde5be);

         default:
          return _f68023e5066c.body;
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
        constructor(_f68023e5066c, _34f246cde5be, _63a45e116e67, _68051092d66a, _3d842a962905, _2dbb4876c500, _4547843d0a40, _bed2b259674e) {
          super("handleResponse"), this.responseBody = _f68023e5066c, this.responseHeaders = _34f246cde5be, 
          this.status = _63a45e116e67, this.statusText = _68051092d66a, this.destination = _3d842a962905, 
          this.url = _2dbb4876c500, this.rawResponse = _4547843d0a40, this.client = _bed2b259674e;
        }
      }
      class S extends Event {
        url;
        requestHeaders;
        body;
        method;
        destination;
        client;
        constructor(_f68023e5066c, _34f246cde5be, _63a45e116e67, _68051092d66a, _3d842a962905, _2dbb4876c500) {
          super("request"), this.url = _f68023e5066c, this.requestHeaders = _34f246cde5be, 
          this.body = _63a45e116e67, this.method = _68051092d66a, this.destination = _3d842a962905, 
          this.client = _2dbb4876c500;
        }
        response;
      }
    },
    7510: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.r(_34f246cde5be), _63a45e116e67.d(_34f246cde5be, {
        FakeServiceWorker: () => _68051092d66a.H,
        StudyJetHandleResponseEvent: () => _3d842a962905.dT,
        StudyJetRequestEvent: () => _3d842a962905.V3,
        StudyJetServiceWorker: () => d,
        errorTemplate: () => _44f0b1ed911f.B,
        handleFetch: () => _3d842a962905.Pf,
        renderError: () => _44f0b1ed911f.v
      });
      var _68051092d66a = _63a45e116e67(1403), _3d842a962905 = _63a45e116e67(5790), _2dbb4876c500 = _63a45e116e67(4110), _4547843d0a40 = _63a45e116e67(1561), _bed2b259674e = _63a45e116e67(3831), _d73671e3fec6 = _63a45e116e67(6570), _ef72ad0b9c92 = _63a45e116e67(37), _44f0b1ed911f = _63a45e116e67(5956);
      class d extends EventTarget {
        client;
        config;
        syncPool={};
        synctoken=0;
        cookieStore=new _bed2b259674e.k;
        serviceWorkers=[];
        constructor() {
          super(), this.client = new _2dbb4876c500.Ay, (async () => {
            let _f68023e5066c = await (0, _d73671e3fec6.P2)("@d7a6431b92e", 1), _34f246cde5be = await _f68023e5066c.get("cookies", "cookies");
            _34f246cde5be && this.cookieStore.load(_34f246cde5be);
          })(), addEventListener("message", async ({data: _f68023e5066c}) => {
            if ("studyjet$type" in _f68023e5066c) {
              if ("studyjet$token" in _f68023e5066c) {
                let _34f246cde5be = this.syncPool[_f68023e5066c.studyjet$token];
                delete this.syncPool[_f68023e5066c.studyjet$token], _34f246cde5be(_f68023e5066c);
                return;
              }
              if ("registerServiceWorker" === _f68023e5066c.studyjet$type) return void this.serviceWorkers.push(new _68051092d66a.H(_f68023e5066c.port, _f68023e5066c.origin));
              if ("cookie" === _f68023e5066c.studyjet$type) {
                this.cookieStore.setCookies([ _f68023e5066c.cookie ], new URL(_f68023e5066c.url));
                let _34f246cde5be = await (0, _d73671e3fec6.P2)("@d7a6431b92e", 1);
                await _34f246cde5be.put("cookies", JSON.parse(this.cookieStore.dump()), "cookies");
              }
              "loadConfig" === _f68023e5066c.studyjet$type && (this.config = _f68023e5066c.config);
            }
          });
        }
        async dispatch(_f68023e5066c, _34f246cde5be) {
          let _63a45e116e67, _68051092d66a = this.synctoken++, _3d842a962905 = new Promise(_f68023e5066c => _63a45e116e67 = _f68023e5066c);
          return this.syncPool[_68051092d66a] = _63a45e116e67, _34f246cde5be.studyjet$token = _68051092d66a, 
          _f68023e5066c.postMessage(_34f246cde5be), await _3d842a962905;
        }
        async loadConfig() {
          if (this.config) return;
          let _f68023e5066c = await (0, _d73671e3fec6.P2)("@d7a6431b92e", 1);
          this.config = await _f68023e5066c.get("config", "config"), this.config && ((0, _ef72ad0b9c92.Nk)(this.config), 
          await (0, _4547843d0a40.n$)());
        }
        route({request: _f68023e5066c}) {
          return !!_f68023e5066c.url.startsWith(location.origin + this.config.prefix) || !!_f68023e5066c.url.startsWith(location.origin + this.config.files.wasm);
        }
        async fetch({request: _f68023e5066c, clientId: _34f246cde5be}) {
          this.config || await this.loadConfig();
          let _63a45e116e67 = await self.clients.get(_34f246cde5be);
          return _3d842a962905.Pf.call(this, _f68023e5066c, _63a45e116e67);
        }
      }
    },
    4110: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.d(_34f246cde5be, {
        Ay: () => S,
        DD: () => w
      });
      let _68051092d66a = globalThis.fetch, _3d842a962905 = globalThis.SharedWorker, _2dbb4876c500 = globalThis.localStorage, _4547843d0a40 = globalThis.navigator.serviceWorker, _bed2b259674e = MessagePort.prototype.postMessage, _d73671e3fec6 = {
        prototype: {
          send: WebSocket.prototype.send
        },
        CLOSED: WebSocket.CLOSED,
        CLOSING: WebSocket.CLOSING,
        CONNECTING: WebSocket.CONNECTING,
        OPEN: WebSocket.OPEN
      };
      async function c() {
        let _f68023e5066c = Promise.race([ Promise.any((await self.clients.matchAll({
          type: "window",
          includeUncontrolled: !0
        })).map(async _f68023e5066c => {
          let _34f246cde5be, _63a45e116e67 = await (_34f246cde5be = new MessageChannel, new Promise(_63a45e116e67 => {
            _f68023e5066c.postMessage({
              type: "getPort",
              port: _34f246cde5be.port2
            }, [ _34f246cde5be.port2 ]), _34f246cde5be.port1.onmessage = _f68023e5066c => {
              _63a45e116e67(_f68023e5066c.data);
            };
          }));
          return await u(_63a45e116e67), _63a45e116e67;
        })), new Promise((_f68023e5066c, _34f246cde5be) => setTimeout(_34f246cde5be, 1e3, TypeError("timeout"))) ]);
        try {
          return await _f68023e5066c;
        } catch (_f68023e5066c) {
          if (_f68023e5066c instanceof AggregateError) throw console.error("bare-mux: failed to get a bare-mux SharedWorker MessagePort as all clients returned an invalid MessagePort."), 
          Error("All clients returned an invalid MessagePort.", {
            cause: _f68023e5066c
          });
          return console.warn("bare-mux: failed to get a bare-mux SharedWorker MessagePort within 1s, retrying"), 
          await c();
        }
      }
      function u(_f68023e5066c) {
        let _34f246cde5be = new MessageChannel, _63a45e116e67 = new Promise((_f68023e5066c, _63a45e116e67) => {
          _34f246cde5be.port1.onmessage = _34f246cde5be => {
            "pong" === _34f246cde5be.data.type && _f68023e5066c();
          }, setTimeout(_63a45e116e67, 1500);
        });
        return _bed2b259674e.call(_f68023e5066c, {
          message: {
            type: "ping"
          },
          port: _34f246cde5be.port2
        }, [ _34f246cde5be.port2 ]), _63a45e116e67;
      }
      function d(_f68023e5066c, _34f246cde5be) {
        let _63a45e116e67 = new _3d842a962905(_f68023e5066c, "ridgewood-stem-worker");
        return _34f246cde5be && _4547843d0a40.addEventListener("message", _34f246cde5be => {
          if ("getPort" === _34f246cde5be.data.type && _34f246cde5be.data.port) {
            console.debug("bare-mux: recieved request for port from sw");
            let _63a45e116e67 = new _3d842a962905(_f68023e5066c, "ridgewood-stem-worker");
            _bed2b259674e.call(_34f246cde5be.data.port, _63a45e116e67.port, [ _63a45e116e67.port ]);
          }
        }), _63a45e116e67.port;
      }
      let _ef72ad0b9c92 = null;
      class p {
        channel;
        port;
        workerPath;
        constructor(_f68023e5066c) {
          this.channel = new BroadcastChannel("bare-mux"), _f68023e5066c instanceof MessagePort || _f68023e5066c instanceof Promise ? this.port = _f68023e5066c : this.createChannel(_f68023e5066c, !0);
        }
        createChannel(_f68023e5066c, _34f246cde5be) {
          if (self.clients) this.port = c(), this.channel.onmessage = _f68023e5066c => {
            "refreshPort" === _f68023e5066c.data.type && (this.port = c());
          }; else if (_f68023e5066c && SharedWorker) {
            if (!_f68023e5066c.startsWith("/") && !_f68023e5066c.includes(":")) throw Error("Invalid URL. Must be absolute or start at the root.");
            this.port = d(_f68023e5066c, _34f246cde5be), console.debug("bare-mux: setting localStorage bare-mux-path to", _f68023e5066c), 
            _2dbb4876c500["bare-mux-path"] = _f68023e5066c;
          } else {
            if (!SharedWorker) throw Error("Unable to get a channel to the SharedWorker.");
            {
              let _f68023e5066c = _2dbb4876c500["bare-mux-path"];
              if (console.debug("bare-mux: got localStorage bare-mux-path:", _f68023e5066c), !_f68023e5066c) throw Error("Unable to get bare-mux workerPath from localStorage.");
              this.port = d(_f68023e5066c, _34f246cde5be);
            }
          }
        }
        async sendMessage(_f68023e5066c, _34f246cde5be) {
          this.port instanceof Promise && (this.port = await this.port);
          try {
            await u(this.port);
          } catch {
            return console.warn("bare-mux: Failed to get a ping response from the worker within 1.5s. Assuming port is dead."), 
            this.createChannel(), await this.sendMessage(_f68023e5066c, _34f246cde5be);
          }
          let _63a45e116e67 = new MessageChannel, _68051092d66a = [ _63a45e116e67.port2, ..._34f246cde5be || [] ], _3d842a962905 = new Promise((_f68023e5066c, _34f246cde5be) => {
            _63a45e116e67.port1.onmessage = _63a45e116e67 => {
              let _68051092d66a = _63a45e116e67.data;
              "error" === _68051092d66a.type ? _34f246cde5be(_68051092d66a.error) : _f68023e5066c(_68051092d66a);
            };
          });
          return _bed2b259674e.call(this.port, {
            message: _f68023e5066c,
            port: _63a45e116e67.port2
          }, _68051092d66a), await _3d842a962905;
        }
      }
      class f extends EventTarget {
        protocols;
        url;
        readyState=_d73671e3fec6.CONNECTING;
        channel;
        constructor(_f68023e5066c, _34f246cde5be = [], _63a45e116e67, _68051092d66a) {
          super(), this.protocols = _34f246cde5be, this.url = _f68023e5066c.toString(), this.protocols = _34f246cde5be;
          const i = _f68023e5066c => {
            this.protocols = _f68023e5066c, this.readyState = _d73671e3fec6.OPEN;
            let _34f246cde5be = new Event("open");
            this.dispatchEvent(_34f246cde5be);
          }, a = async _f68023e5066c => {
            let _34f246cde5be = new MessageEvent("message", {
              data: _f68023e5066c
            });
            this.dispatchEvent(_34f246cde5be);
          }, s = (_f68023e5066c, _34f246cde5be) => {
            this.readyState = _d73671e3fec6.CLOSED;
            let _63a45e116e67 = new CloseEvent("close", {
              code: _f68023e5066c,
              reason: _34f246cde5be
            });
            this.dispatchEvent(_63a45e116e67);
          }, o = () => {
            this.readyState = _d73671e3fec6.CLOSED;
            let _f68023e5066c = new Event("error");
            this.dispatchEvent(_f68023e5066c);
          };
          this.channel = new MessageChannel, this.channel.port1.onmessage = _f68023e5066c => {
            "open" === _f68023e5066c.data.type ? i(_f68023e5066c.data.args[0]) : "message" === _f68023e5066c.data.type ? a(_f68023e5066c.data.args[0]) : "close" === _f68023e5066c.data.type ? s(_f68023e5066c.data.args[0], _f68023e5066c.data.args[1]) : "error" === _f68023e5066c.data.type && o();
          }, _63a45e116e67.sendMessage({
            type: "websocket",
            websocket: {
              url: _f68023e5066c.toString(),
              protocols: _34f246cde5be,
              requestHeaders: _68051092d66a,
              channel: this.channel.port2
            }
          }, [ this.channel.port2 ]);
        }
        send(..._f68023e5066c) {
          if (this.readyState === _d73671e3fec6.CONNECTING) throw new DOMException("Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.");
          let _34f246cde5be = _f68023e5066c[0];
          _34f246cde5be.buffer && (_34f246cde5be = _34f246cde5be.buffer.slice(_34f246cde5be.byteOffset, _34f246cde5be.byteOffset + _34f246cde5be.byteLength)), 
          _bed2b259674e.call(this.channel.port1, {
            type: "data",
            data: _34f246cde5be
          }, _34f246cde5be instanceof ArrayBuffer ? [ _34f246cde5be ] : []);
        }
        close(_f68023e5066c, _34f246cde5be) {
          _bed2b259674e.call(this.channel.port1, {
            type: "close",
            closeCode: _f68023e5066c,
            closeReason: _34f246cde5be
          });
        }
      }
      function g(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
        console.error(`error while processing '${_63a45e116e67}': `, _34f246cde5be), _f68023e5066c.postMessage({
          type: "error",
          error: _34f246cde5be
        });
      }
      let _44f0b1ed911f = [ "ws:", "wss:" ], _0a3b7a57b594 = [ 101, 204, 205, 304 ], _3644bb2f5311 = [ 301, 302, 303, 307, 308 ];
      class w {
        worker;
        constructor(_f68023e5066c) {
          this.worker = new p(_f68023e5066c);
        }
        async getTransport() {
          return (await this.worker.sendMessage({
            type: "get"
          })).name;
        }
        async setTransport(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
          await this.setManualTransport(`\n\t\t\tconst { default: BareTransport } = await import("${_f68023e5066c}");\n\t\t\treturn [BareTransport, "${_f68023e5066c}"];\n\t\t`, _34f246cde5be, _63a45e116e67);
        }
        async setManualTransport(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
          if ("bare-mux-remote" === _f68023e5066c) throw Error("Use setRemoteTransport.");
          await this.worker.sendMessage({
            type: "set",
            client: {
              function: _f68023e5066c,
              args: _34f246cde5be
            }
          }, _63a45e116e67);
        }
        async setRemoteTransport(_f68023e5066c, _34f246cde5be) {
          let _63a45e116e67 = new MessageChannel;
          _63a45e116e67.port1.onmessage = async _34f246cde5be => {
            let _63a45e116e67 = _34f246cde5be.data.port, _68051092d66a = _34f246cde5be.data.message;
            if ("fetch" === _68051092d66a.type) try {
              _f68023e5066c.ready || await _f68023e5066c.init(), await async function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
                let _68051092d66a = await _63a45e116e67.request(new URL(_f68023e5066c.fetch.remote), _f68023e5066c.fetch.method, _f68023e5066c.fetch.body, _f68023e5066c.fetch.headers, null);
                if (!function() {
                  if (null === _ef72ad0b9c92) {
                    let _f68023e5066c, _34f246cde5be = new MessageChannel, _63a45e116e67 = new ReadableStream;
                    try {
                      _bed2b259674e.call(_34f246cde5be.port1, _63a45e116e67, [ _63a45e116e67 ]), _f68023e5066c = !0;
                    } catch (_34f246cde5be) {
                      _f68023e5066c = !1;
                    }
                    return _ef72ad0b9c92 = _f68023e5066c, _f68023e5066c;
                  }
                  return _ef72ad0b9c92;
                }() && _68051092d66a.body instanceof ReadableStream) {
                  let _f68023e5066c = new Response(_68051092d66a.body);
                  _68051092d66a.body = await _f68023e5066c.arrayBuffer();
                }
                _68051092d66a.body instanceof ReadableStream || _68051092d66a.body instanceof ArrayBuffer ? _bed2b259674e.call(_34f246cde5be, {
                  type: "fetch",
                  fetch: _68051092d66a
                }, [ _68051092d66a.body ]) : _bed2b259674e.call(_34f246cde5be, {
                  type: "fetch",
                  fetch: _68051092d66a
                });
              }(_68051092d66a, _63a45e116e67, _f68023e5066c);
            } catch (_f68023e5066c) {
              g(_63a45e116e67, _f68023e5066c, "fetch");
            } else if ("websocket" === _68051092d66a.type) try {
              _f68023e5066c.ready || await _f68023e5066c.init(), await async function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
                let [_68051092d66a, _3d842a962905] = _63a45e116e67.connect(new URL(_f68023e5066c.websocket.url), _f68023e5066c.websocket.protocols, _f68023e5066c.websocket.requestHeaders, _34f246cde5be => {
                  _bed2b259674e.call(_f68023e5066c.websocket.channel, {
                    type: "open",
                    args: [ _34f246cde5be ]
                  });
                }, _34f246cde5be => {
                  _34f246cde5be instanceof ArrayBuffer ? _bed2b259674e.call(_f68023e5066c.websocket.channel, {
                    type: "message",
                    args: [ _34f246cde5be ]
                  }, [ _34f246cde5be ]) : _bed2b259674e.call(_f68023e5066c.websocket.channel, {
                    type: "message",
                    args: [ _34f246cde5be ]
                  });
                }, (_34f246cde5be, _63a45e116e67) => {
                  _bed2b259674e.call(_f68023e5066c.websocket.channel, {
                    type: "close",
                    args: [ _34f246cde5be, _63a45e116e67 ]
                  });
                }, _34f246cde5be => {
                  _bed2b259674e.call(_f68023e5066c.websocket.channel, {
                    type: "error",
                    args: [ _34f246cde5be ]
                  });
                });
                _f68023e5066c.websocket.channel.onmessage = _f68023e5066c => {
                  "data" === _f68023e5066c.data.type ? _68051092d66a(_f68023e5066c.data.data) : "close" === _f68023e5066c.data.type && _3d842a962905(_f68023e5066c.data.closeCode, _f68023e5066c.data.closeReason);
                }, _bed2b259674e.call(_34f246cde5be, {
                  type: "websocket"
                });
              }(_68051092d66a, _63a45e116e67, _f68023e5066c);
            } catch (_f68023e5066c) {
              g(_63a45e116e67, _f68023e5066c, "websocket");
            }
          }, await this.worker.sendMessage({
            type: "set",
            client: {
              function: "bare-mux-remote",
              args: [ _63a45e116e67.port2, _34f246cde5be ]
            }
          }, [ _63a45e116e67.port2 ]);
        }
        getInnerPort() {
          return this.worker.port;
        }
      }
      class S {
        worker;
        constructor(_f68023e5066c) {
          this.worker = new p(_f68023e5066c);
        }
        createWebSocket(_f68023e5066c, _34f246cde5be = [], _63a45e116e67, _68051092d66a) {
          try {
            _f68023e5066c = new URL(_f68023e5066c);
          } catch (_34f246cde5be) {
            throw new DOMException(`Faiiled to construct 'WebSocket': The URL '${_f68023e5066c}' is invalid.`);
          }
          if (!_44f0b1ed911f.includes(_f68023e5066c.protocol)) throw new DOMException(`Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '${_f68023e5066c.protocol}' is not allowed.`);
          for (let _f68023e5066c of (Array.isArray(_34f246cde5be) || (_34f246cde5be = [ _34f246cde5be ]), 
          _34f246cde5be = _34f246cde5be.map(String))) if (!function(_f68023e5066c) {
            for (let _34f246cde5be = 0; _34f246cde5be < _f68023e5066c.length; _34f246cde5be++) {
              let _63a45e116e67 = _f68023e5066c[_34f246cde5be];
              if (!"!#$%&'*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz|~".includes(_63a45e116e67)) return !1;
            }
            return !0;
          }(_f68023e5066c)) throw new DOMException(`Failed to construct 'WebSocket': The subprotocol '${_f68023e5066c}' is invalid.`);
          return _68051092d66a = _68051092d66a || {}, new f(_f68023e5066c, _34f246cde5be, this.worker, _68051092d66a);
        }
        async fetch(_f68023e5066c, _34f246cde5be) {
          let _63a45e116e67 = new Request(_f68023e5066c, _34f246cde5be), _3d842a962905 = _34f246cde5be?.headers || _63a45e116e67.headers, _2dbb4876c500 = _3d842a962905 instanceof Headers ? Object.fromEntries(_3d842a962905) : _3d842a962905, _4547843d0a40 = _63a45e116e67.body, _bed2b259674e = new URL(_63a45e116e67.url);
          if (_bed2b259674e.protocol.startsWith("blob:")) {
            let _f68023e5066c = await _68051092d66a(_bed2b259674e), _34f246cde5be = new Response(_f68023e5066c.body, _f68023e5066c);
            return _34f246cde5be.rawHeaders = Object.fromEntries(_f68023e5066c.headers), _34f246cde5be.rawResponse = {
              body: _f68023e5066c.body,
              headers: Object.fromEntries(_f68023e5066c.headers),
              status: _f68023e5066c.status,
              statusText: _f68023e5066c.statusText
            }, _34f246cde5be.finalURL = _bed2b259674e.toString(), _34f246cde5be;
          }
          for (let _f68023e5066c = 0; ;_f68023e5066c++) {
            let _68051092d66a = (await this.worker.sendMessage({
              type: "fetch",
              fetch: {
                remote: _bed2b259674e.toString(),
                method: _63a45e116e67.method,
                headers: _2dbb4876c500,
                body: _4547843d0a40 || void 0
              }
            }, _4547843d0a40 ? [ _4547843d0a40 ] : [])).fetch, _3d842a962905 = new Response(_0a3b7a57b594.includes(_68051092d66a.status) ? void 0 : _68051092d66a.body, {
              headers: new Headers(_68051092d66a.headers),
              status: _68051092d66a.status,
              statusText: _68051092d66a.statusText
            });
            _3d842a962905.rawHeaders = _68051092d66a.headers, _3d842a962905.rawResponse = _68051092d66a, 
            _3d842a962905.finalURL = _bed2b259674e.toString();
            let _d73671e3fec6 = _34f246cde5be?.redirect || _63a45e116e67.redirect;
            if (!_3644bb2f5311.includes(_3d842a962905.status)) return _3d842a962905;
            switch (_d73671e3fec6) {
             case "follow":
              {
                let _34f246cde5be = _3d842a962905.headers.get("location");
                if (20 > _f68023e5066c && null !== _34f246cde5be) {
                  _bed2b259674e = new URL(_34f246cde5be, _bed2b259674e);
                  continue;
                }
                throw TypeError("Failed to fetch");
              }

             case "error":
              throw TypeError("Failed to fetch");

             case "manual":
              return _3d842a962905;
            }
          }
        }
      }
      console.debug("bare-mux: running v2.1.9 (build dc9dc6e)");
    },
    8832: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.d(_34f246cde5be, {
        H: () => _68051092d66a,
        L: () => _3d842a962905
      });
      let _68051092d66a = new Map([ "altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath" ].map(_f68023e5066c => [ _f68023e5066c.toLowerCase(), _f68023e5066c ])), _3d842a962905 = new Map([ "definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan" ].map(_f68023e5066c => [ _f68023e5066c.toLowerCase(), _f68023e5066c ]));
    },
    6498: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.d(_34f246cde5be, {
        A: () => _d73671e3fec6
      });
      var _68051092d66a = _63a45e116e67(2743), _3d842a962905 = _63a45e116e67(8466), _2dbb4876c500 = _63a45e116e67(8832);
      let _4547843d0a40 = new Set([ "style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript" ]);
      function o(_f68023e5066c) {
        return _f68023e5066c.replace(/"/g, "&quot;");
      }
      let _bed2b259674e = new Set([ "area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr" ]), _d73671e3fec6 = function e(_f68023e5066c, _34f246cde5be = {}) {
        let _63a45e116e67 = "length" in _f68023e5066c ? _f68023e5066c : [ _f68023e5066c ], _d73671e3fec6 = "";
        for (let _f68023e5066c = 0; _f68023e5066c < _63a45e116e67.length; _f68023e5066c++) _d73671e3fec6 += function(_f68023e5066c, _34f246cde5be) {
          var _63a45e116e67, _d73671e3fec6, _0a3b7a57b594;
          switch (_f68023e5066c.type) {
           case _68051092d66a.bL:
            return e(_f68023e5066c.children, _34f246cde5be);

           case _68051092d66a.fl:
           case _68051092d66a.WL:
            return _63a45e116e67 = _f68023e5066c, `<${_63a45e116e67.data}>`;

           case _68051092d66a.Mw:
            return _d73671e3fec6 = _f68023e5066c, `\x3c!--${_d73671e3fec6.data}--\x3e`;

           case _68051092d66a.KB:
            return _0a3b7a57b594 = _f68023e5066c, `<![CDATA[${_0a3b7a57b594.children[0].data}]]>`;

           case _68051092d66a.eF:
           case _68051092d66a.OF:
           case _68051092d66a.vw:
            return function(_f68023e5066c, _34f246cde5be) {
              var _63a45e116e67;
              "foreign" === _34f246cde5be.xmlMode && (_f68023e5066c.name = null != (_63a45e116e67 = _2dbb4876c500.H.get(_f68023e5066c.name)) ? _63a45e116e67 : _f68023e5066c.name, 
              _f68023e5066c.parent && _ef72ad0b9c92.has(_f68023e5066c.parent.name) && (_34f246cde5be = {
                ..._34f246cde5be,
                xmlMode: !1
              })), !_34f246cde5be.xmlMode && _44f0b1ed911f.has(_f68023e5066c.name) && (_34f246cde5be = {
                ..._34f246cde5be,
                xmlMode: "foreign"
              });
              let _68051092d66a = `<${_f68023e5066c.name}`, _4547843d0a40 = function(_f68023e5066c, _34f246cde5be) {
                var _63a45e116e67;
                if (!_f68023e5066c) return;
                let _68051092d66a = (null != (_63a45e116e67 = _34f246cde5be.encodeEntities) ? _63a45e116e67 : _34f246cde5be.decodeEntities) === !1 ? o : _34f246cde5be.xmlMode || "utf8" !== _34f246cde5be.encodeEntities ? _3d842a962905.WY : _3d842a962905.Gj;
                return Object.keys(_f68023e5066c).map(_63a45e116e67 => {
                  var _3d842a962905, _4547843d0a40;
                  let _bed2b259674e = null != (_3d842a962905 = _f68023e5066c[_63a45e116e67]) ? _3d842a962905 : "";
                  return ("foreign" === _34f246cde5be.xmlMode && (_63a45e116e67 = null != (_4547843d0a40 = _2dbb4876c500.L.get(_63a45e116e67)) ? _4547843d0a40 : _63a45e116e67), 
                  _34f246cde5be.emptyAttrs || _34f246cde5be.xmlMode || "" !== _bed2b259674e) ? `${_63a45e116e67}="${_68051092d66a(_bed2b259674e)}"` : _63a45e116e67;
                }).join(" ");
              }(_f68023e5066c.attribs, _34f246cde5be);
              return _4547843d0a40 && (_68051092d66a += ` ${_4547843d0a40}`), 0 === _f68023e5066c.children.length && (_34f246cde5be.xmlMode ? !1 !== _34f246cde5be.selfClosingTags : _34f246cde5be.selfClosingTags && _bed2b259674e.has(_f68023e5066c.name)) ? (_34f246cde5be.xmlMode || (_68051092d66a += " "), 
              _68051092d66a += "/>") : (_68051092d66a += ">", _f68023e5066c.children.length > 0 && (_68051092d66a += e(_f68023e5066c.children, _34f246cde5be)), 
              (_34f246cde5be.xmlMode || !_bed2b259674e.has(_f68023e5066c.name)) && (_68051092d66a += `</${_f68023e5066c.name}>`)), 
              _68051092d66a;
            }(_f68023e5066c, _34f246cde5be);

           case _68051092d66a.EY:
            return function(_f68023e5066c, _34f246cde5be) {
              var _63a45e116e67;
              let _68051092d66a = _f68023e5066c.data || "";
              return (null != (_63a45e116e67 = _34f246cde5be.encodeEntities) ? _63a45e116e67 : _34f246cde5be.decodeEntities) === !1 || !_34f246cde5be.xmlMode && _f68023e5066c.parent && _4547843d0a40.has(_f68023e5066c.parent.name) || (_68051092d66a = _34f246cde5be.xmlMode || "utf8" !== _34f246cde5be.encodeEntities ? (0, 
              _3d842a962905.WY)(_68051092d66a) : (0, _3d842a962905.X1)(_68051092d66a)), _68051092d66a;
            }(_f68023e5066c, _34f246cde5be);
          }
        }(_63a45e116e67[_f68023e5066c], _34f246cde5be);
        return _d73671e3fec6;
      }, _ef72ad0b9c92 = new Set([ "mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title" ]), _44f0b1ed911f = new Set([ "svg", "math" ]);
    },
    2743: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      var _68051092d66a, _3d842a962905;
      function a(_f68023e5066c) {
        return _f68023e5066c.type === _68051092d66a.Tag || _f68023e5066c.type === _68051092d66a.Script || _f68023e5066c.type === _68051092d66a.Style;
      }
      _63a45e116e67.d(_34f246cde5be, {
        EY: () => _4547843d0a40,
        KB: () => _3644bb2f5311,
        Mw: () => _d73671e3fec6,
        OF: () => _44f0b1ed911f,
        RJ: () => _68051092d66a,
        WL: () => _bed2b259674e,
        bL: () => _2dbb4876c500,
        dz: () => a,
        eF: () => _ef72ad0b9c92,
        fl: () => _9acaff0e6a8f,
        vw: () => _0a3b7a57b594
      }), (_3d842a962905 = _68051092d66a || (_68051092d66a = {})).Root = "root", _3d842a962905.Text = "text", 
      _3d842a962905.Directive = "directive", _3d842a962905.Comment = "comment", _3d842a962905.Script = "script", 
      _3d842a962905.Style = "style", _3d842a962905.Tag = "tag", _3d842a962905.CDATA = "cdata", 
      _3d842a962905.Doctype = "doctype";
      let _2dbb4876c500 = _68051092d66a.Root, _4547843d0a40 = _68051092d66a.Text, _bed2b259674e = _68051092d66a.Directive, _d73671e3fec6 = _68051092d66a.Comment, _ef72ad0b9c92 = _68051092d66a.Script, _44f0b1ed911f = _68051092d66a.Style, _0a3b7a57b594 = _68051092d66a.Tag, _3644bb2f5311 = _68051092d66a.CDATA, _9acaff0e6a8f = _68051092d66a.Doctype;
    },
    8866: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.d(_34f246cde5be, {
        DV: () => s,
        Hg: () => _3d842a962905.Hg,
        Mw: () => _3d842a962905.Mw
      });
      var _68051092d66a = _63a45e116e67(2743), _3d842a962905 = _63a45e116e67(6072);
      let _2dbb4876c500 = {
        withStartIndices: !1,
        withEndIndices: !1,
        xmlMode: !1
      };
      class s {
        constructor(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
          this.dom = [], this.root = new _3d842a962905.yo(this.dom), this.done = !1, this.tagStack = [ this.root ], 
          this.lastNode = null, this.parser = null, "function" == typeof _34f246cde5be && (_63a45e116e67 = _34f246cde5be, 
          _34f246cde5be = _2dbb4876c500), "object" == typeof _f68023e5066c && (_34f246cde5be = _f68023e5066c, 
          _f68023e5066c = void 0), this.callback = null != _f68023e5066c ? _f68023e5066c : null, 
          this.options = null != _34f246cde5be ? _34f246cde5be : _2dbb4876c500, this.elementCB = null != _63a45e116e67 ? _63a45e116e67 : null;
        }
        onparserinit(_f68023e5066c) {
          this.parser = _f68023e5066c;
        }
        onreset() {
          this.dom = [], this.root = new _3d842a962905.yo(this.dom), this.done = !1, this.tagStack = [ this.root ], 
          this.lastNode = null, this.parser = null;
        }
        onend() {
          this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
        }
        onerror(_f68023e5066c) {
          this.handleCallback(_f68023e5066c);
        }
        onclosetag() {
          this.lastNode = null;
          let _f68023e5066c = this.tagStack.pop();
          this.options.withEndIndices && (_f68023e5066c.endIndex = this.parser.endIndex), 
          this.elementCB && this.elementCB(_f68023e5066c);
        }
        onopentag(_f68023e5066c, _34f246cde5be) {
          let _63a45e116e67 = this.options.xmlMode ? _68051092d66a.RJ.Tag : void 0, _2dbb4876c500 = new _3d842a962905.Hg(_f68023e5066c, _34f246cde5be, void 0, _63a45e116e67);
          this.addNode(_2dbb4876c500), this.tagStack.push(_2dbb4876c500);
        }
        ontext(_f68023e5066c) {
          let {lastNode: _34f246cde5be} = this;
          if (_34f246cde5be && _34f246cde5be.type === _68051092d66a.RJ.Text) _34f246cde5be.data += _f68023e5066c, 
          this.options.withEndIndices && (_34f246cde5be.endIndex = this.parser.endIndex); else {
            let _34f246cde5be = new _3d842a962905.EY(_f68023e5066c);
            this.addNode(_34f246cde5be), this.lastNode = _34f246cde5be;
          }
        }
        oncomment(_f68023e5066c) {
          if (this.lastNode && this.lastNode.type === _68051092d66a.RJ.Comment) {
            this.lastNode.data += _f68023e5066c;
            return;
          }
          let _34f246cde5be = new _3d842a962905.Mw(_f68023e5066c);
          this.addNode(_34f246cde5be), this.lastNode = _34f246cde5be;
        }
        oncommentend() {
          this.lastNode = null;
        }
        oncdatastart() {
          let _f68023e5066c = new _3d842a962905.EY(""), _34f246cde5be = new _3d842a962905.KB([ _f68023e5066c ]);
          this.addNode(_34f246cde5be), _f68023e5066c.parent = _34f246cde5be, this.lastNode = _f68023e5066c;
        }
        oncdataend() {
          this.lastNode = null;
        }
        onprocessinginstruction(_f68023e5066c, _34f246cde5be) {
          let _63a45e116e67 = new _3d842a962905.Cd(_f68023e5066c, _34f246cde5be);
          this.addNode(_63a45e116e67);
        }
        handleCallback(_f68023e5066c) {
          if ("function" == typeof this.callback) this.callback(_f68023e5066c, this.dom); else if (_f68023e5066c) throw _f68023e5066c;
        }
        addNode(_f68023e5066c) {
          let _34f246cde5be = this.tagStack[this.tagStack.length - 1], _63a45e116e67 = _34f246cde5be.children[_34f246cde5be.children.length - 1];
          this.options.withStartIndices && (_f68023e5066c.startIndex = this.parser.startIndex), 
          this.options.withEndIndices && (_f68023e5066c.endIndex = this.parser.endIndex), 
          _34f246cde5be.children.push(_f68023e5066c), _63a45e116e67 && (_f68023e5066c.prev = _63a45e116e67, 
          _63a45e116e67.next = _f68023e5066c), _f68023e5066c.parent = _34f246cde5be, this.lastNode = null;
        }
      }
    },
    6072: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.d(_34f246cde5be, {
        Cd: () => l,
        EY: () => s,
        Hg: () => h,
        KB: () => u,
        Mw: () => o,
        yo: () => d
      });
      var _68051092d66a = _63a45e116e67(2743);
      class i {
        constructor() {
          this.parent = null, this.prev = null, this.next = null, this.startIndex = null, 
          this.endIndex = null;
        }
        get parentNode() {
          return this.parent;
        }
        set parentNode(_f68023e5066c) {
          this.parent = _f68023e5066c;
        }
        get previousSibling() {
          return this.prev;
        }
        set previousSibling(_f68023e5066c) {
          this.prev = _f68023e5066c;
        }
        get nextSibling() {
          return this.next;
        }
        set nextSibling(_f68023e5066c) {
          this.next = _f68023e5066c;
        }
        cloneNode(_f68023e5066c = !1) {
          return p(this, _f68023e5066c);
        }
      }
      class a extends i {
        constructor(_f68023e5066c) {
          super(), this.data = _f68023e5066c;
        }
        get nodeValue() {
          return this.data;
        }
        set nodeValue(_f68023e5066c) {
          this.data = _f68023e5066c;
        }
      }
      class s extends a {
        constructor() {
          super(...arguments), this.type = _68051092d66a.RJ.Text;
        }
        get nodeType() {
          return 3;
        }
      }
      class o extends a {
        constructor() {
          super(...arguments), this.type = _68051092d66a.RJ.Comment;
        }
        get nodeType() {
          return 8;
        }
      }
      class l extends a {
        constructor(_f68023e5066c, _34f246cde5be) {
          super(_34f246cde5be), this.name = _f68023e5066c, this.type = _68051092d66a.RJ.Directive;
        }
        get nodeType() {
          return 1;
        }
      }
      class c extends i {
        constructor(_f68023e5066c) {
          super(), this.children = _f68023e5066c;
        }
        get firstChild() {
          var _f68023e5066c;
          return null != (_f68023e5066c = this.children[0]) ? _f68023e5066c : null;
        }
        get lastChild() {
          return this.children.length > 0 ? this.children[this.children.length - 1] : null;
        }
        get childNodes() {
          return this.children;
        }
        set childNodes(_f68023e5066c) {
          this.children = _f68023e5066c;
        }
      }
      class u extends c {
        constructor() {
          super(...arguments), this.type = _68051092d66a.RJ.CDATA;
        }
        get nodeType() {
          return 4;
        }
      }
      class d extends c {
        constructor() {
          super(...arguments), this.type = _68051092d66a.RJ.Root;
        }
        get nodeType() {
          return 9;
        }
      }
      class h extends c {
        constructor(_f68023e5066c, _34f246cde5be, _63a45e116e67 = [], _3d842a962905 = ("script" === _f68023e5066c ? _68051092d66a.RJ.Script : "style" === _f68023e5066c ? _68051092d66a.RJ.Style : _68051092d66a.RJ.Tag)) {
          super(_63a45e116e67), this.name = _f68023e5066c, this.attribs = _34f246cde5be, this.type = _3d842a962905;
        }
        get nodeType() {
          return 1;
        }
        get tagName() {
          return this.name;
        }
        set tagName(_f68023e5066c) {
          this.name = _f68023e5066c;
        }
        get attributes() {
          return Object.keys(this.attribs).map(_f68023e5066c => {
            var _34f246cde5be, _63a45e116e67;
            return {
              name: _f68023e5066c,
              value: this.attribs[_f68023e5066c],
              namespace: null == (_34f246cde5be = this["x-attribsNamespace"]) ? void 0 : _34f246cde5be[_f68023e5066c],
              prefix: null == (_63a45e116e67 = this["x-attribsPrefix"]) ? void 0 : _63a45e116e67[_f68023e5066c]
            };
          });
        }
      }
      function p(_f68023e5066c, _34f246cde5be = !1) {
        let _63a45e116e67;
        if (_f68023e5066c.type === _68051092d66a.RJ.Text) _63a45e116e67 = new s(_f68023e5066c.data); else if (_f68023e5066c.type === _68051092d66a.RJ.Comment) _63a45e116e67 = new o(_f68023e5066c.data); else if ((0, 
        _68051092d66a.dz)(_f68023e5066c)) {
          let _68051092d66a = _34f246cde5be ? f(_f68023e5066c.children) : [], _3d842a962905 = new h(_f68023e5066c.name, {
            ..._f68023e5066c.attribs
          }, _68051092d66a);
          _68051092d66a.forEach(_f68023e5066c => _f68023e5066c.parent = _3d842a962905), null != _f68023e5066c.namespace && (_3d842a962905.namespace = _f68023e5066c.namespace), 
          _f68023e5066c["x-attribsNamespace"] && (_3d842a962905["x-attribsNamespace"] = {
            ..._f68023e5066c["x-attribsNamespace"]
          }), _f68023e5066c["x-attribsPrefix"] && (_3d842a962905["x-attribsPrefix"] = {
            ..._f68023e5066c["x-attribsPrefix"]
          }), _63a45e116e67 = _3d842a962905;
        } else if (_f68023e5066c.type === _68051092d66a.RJ.CDATA) {
          let _68051092d66a = _34f246cde5be ? f(_f68023e5066c.children) : [], _3d842a962905 = new u(_68051092d66a);
          _68051092d66a.forEach(_f68023e5066c => _f68023e5066c.parent = _3d842a962905), _63a45e116e67 = _3d842a962905;
        } else if (_f68023e5066c.type === _68051092d66a.RJ.Root) {
          let _68051092d66a = _34f246cde5be ? f(_f68023e5066c.children) : [], _3d842a962905 = new d(_68051092d66a);
          _68051092d66a.forEach(_f68023e5066c => _f68023e5066c.parent = _3d842a962905), _f68023e5066c["x-mode"] && (_3d842a962905["x-mode"] = _f68023e5066c["x-mode"]), 
          _63a45e116e67 = _3d842a962905;
        } else if (_f68023e5066c.type === _68051092d66a.RJ.Directive) {
          let _34f246cde5be = new l(_f68023e5066c.name, _f68023e5066c.data);
          null != _f68023e5066c["x-name"] && (_34f246cde5be["x-name"] = _f68023e5066c["x-name"], 
          _34f246cde5be["x-publicId"] = _f68023e5066c["x-publicId"], _34f246cde5be["x-systemId"] = _f68023e5066c["x-systemId"]), 
          _63a45e116e67 = _34f246cde5be;
        } else throw Error(`Not implemented yet: ${_f68023e5066c.type}`);
        return _63a45e116e67.startIndex = _f68023e5066c.startIndex, _63a45e116e67.endIndex = _f68023e5066c.endIndex, 
        null != _f68023e5066c.sourceCodeLocation && (_63a45e116e67.sourceCodeLocation = _f68023e5066c.sourceCodeLocation), 
        _63a45e116e67;
      }
      function f(_f68023e5066c) {
        let _34f246cde5be = _f68023e5066c.map(_f68023e5066c => p(_f68023e5066c, !0));
        for (let _f68023e5066c = 1; _f68023e5066c < _34f246cde5be.length; _f68023e5066c++) _34f246cde5be[_f68023e5066c].prev = _34f246cde5be[_f68023e5066c - 1], 
        _34f246cde5be[_f68023e5066c - 1].next = _34f246cde5be[_f68023e5066c];
        return _34f246cde5be;
      }
    },
    3256: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67(5016), _63a45e116e67(1050);
    },
    6812: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      var _68051092d66a, _3d842a962905;
      _63a45e116e67(8866), (_3d842a962905 = _68051092d66a || (_68051092d66a = {}))[_3d842a962905.DISCONNECTED = 1] = "DISCONNECTED", 
      _3d842a962905[_3d842a962905.PRECEDING = 2] = "PRECEDING", _3d842a962905[_3d842a962905.FOLLOWING = 4] = "FOLLOWING", 
      _3d842a962905[_3d842a962905.CONTAINS = 8] = "CONTAINS", _3d842a962905[_3d842a962905.CONTAINED_BY = 16] = "CONTAINED_BY";
    },
    4993: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67(5016), _63a45e116e67(4647), _63a45e116e67(9861), _63a45e116e67(1050), 
      _63a45e116e67(6812), _63a45e116e67(3256), _63a45e116e67(8866);
    },
    1050: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67(8866), _63a45e116e67(9861);
    },
    9861: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67(8866);
    },
    5016: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67(8866), _63a45e116e67(6498), _63a45e116e67(2743);
    },
    4647: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67(8866);
    },
    2146: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      var _68051092d66a;
      _63a45e116e67.d(_34f246cde5be, {
        MK: () => _2dbb4876c500,
        y6: () => s
      });
      let _3d842a962905 = new Map([ [ 0, 65533 ], [ 128, 8364 ], [ 130, 8218 ], [ 131, 402 ], [ 132, 8222 ], [ 133, 8230 ], [ 134, 8224 ], [ 135, 8225 ], [ 136, 710 ], [ 137, 8240 ], [ 138, 352 ], [ 139, 8249 ], [ 140, 338 ], [ 142, 381 ], [ 145, 8216 ], [ 146, 8217 ], [ 147, 8220 ], [ 148, 8221 ], [ 149, 8226 ], [ 150, 8211 ], [ 151, 8212 ], [ 152, 732 ], [ 153, 8482 ], [ 154, 353 ], [ 155, 8250 ], [ 156, 339 ], [ 158, 382 ], [ 159, 376 ] ]), _2dbb4876c500 = null != (_68051092d66a = String.fromCodePoint) ? _68051092d66a : function(_f68023e5066c) {
        let _34f246cde5be = "";
        return _f68023e5066c > 65535 && (_f68023e5066c -= 65536, _34f246cde5be += String.fromCharCode(_f68023e5066c >>> 10 & 1023 | 55296), 
        _f68023e5066c = 56320 | 1023 & _f68023e5066c), _34f246cde5be += String.fromCharCode(_f68023e5066c);
      };
      function s(_f68023e5066c) {
        var _34f246cde5be;
        return _f68023e5066c >= 55296 && _f68023e5066c <= 57343 || _f68023e5066c > 1114111 ? 65533 : null != (_34f246cde5be = _3d842a962905.get(_f68023e5066c)) ? _34f246cde5be : _f68023e5066c;
      }
    },
    2990: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.d(_34f246cde5be, {
        FJ: () => _44f0b1ed911f,
        MK: () => _9acaff0e6a8f.MK,
        Wf: () => g,
        qN: () => _0a3b7a57b594.q,
        sr: () => _3644bb2f5311.s
      });
      var _68051092d66a, _3d842a962905, _2dbb4876c500, _4547843d0a40, _bed2b259674e, _d73671e3fec6, _ef72ad0b9c92, _44f0b1ed911f, _0a3b7a57b594 = _63a45e116e67(7259), _3644bb2f5311 = _63a45e116e67(5949), _9acaff0e6a8f = _63a45e116e67(2146);
      function f(_f68023e5066c) {
        return _f68023e5066c >= _bed2b259674e.ZERO && _f68023e5066c <= _bed2b259674e.NINE;
      }
      (_68051092d66a = _bed2b259674e || (_bed2b259674e = {}))[_68051092d66a.NUM = 35] = "NUM", 
      _68051092d66a[_68051092d66a.SEMI = 59] = "SEMI", _68051092d66a[_68051092d66a.EQUALS = 61] = "EQUALS", 
      _68051092d66a[_68051092d66a.ZERO = 48] = "ZERO", _68051092d66a[_68051092d66a.NINE = 57] = "NINE", 
      _68051092d66a[_68051092d66a.LOWER_A = 97] = "LOWER_A", _68051092d66a[_68051092d66a.LOWER_F = 102] = "LOWER_F", 
      _68051092d66a[_68051092d66a.LOWER_X = 120] = "LOWER_X", _68051092d66a[_68051092d66a.LOWER_Z = 122] = "LOWER_Z", 
      _68051092d66a[_68051092d66a.UPPER_A = 65] = "UPPER_A", _68051092d66a[_68051092d66a.UPPER_F = 70] = "UPPER_F", 
      _68051092d66a[_68051092d66a.UPPER_Z = 90] = "UPPER_Z", (_3d842a962905 = _d73671e3fec6 || (_d73671e3fec6 = {}))[_3d842a962905.VALUE_LENGTH = 49152] = "VALUE_LENGTH", 
      _3d842a962905[_3d842a962905.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", _3d842a962905[_3d842a962905.JUMP_TABLE = 127] = "JUMP_TABLE", 
      (_2dbb4876c500 = _ef72ad0b9c92 || (_ef72ad0b9c92 = {}))[_2dbb4876c500.EntityStart = 0] = "EntityStart", 
      _2dbb4876c500[_2dbb4876c500.NumericStart = 1] = "NumericStart", _2dbb4876c500[_2dbb4876c500.NumericDecimal = 2] = "NumericDecimal", 
      _2dbb4876c500[_2dbb4876c500.NumericHex = 3] = "NumericHex", _2dbb4876c500[_2dbb4876c500.NamedEntity = 4] = "NamedEntity", 
      (_4547843d0a40 = _44f0b1ed911f || (_44f0b1ed911f = {}))[_4547843d0a40.Legacy = 0] = "Legacy", 
      _4547843d0a40[_4547843d0a40.Strict = 1] = "Strict", _4547843d0a40[_4547843d0a40.Attribute = 2] = "Attribute";
      class g {
        constructor(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
          this.decodeTree = _f68023e5066c, this.emitCodePoint = _34f246cde5be, this.errors = _63a45e116e67, 
          this.state = _ef72ad0b9c92.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, 
          this.excess = 1, this.decodeMode = _44f0b1ed911f.Strict;
        }
        startEntity(_f68023e5066c) {
          this.decodeMode = _f68023e5066c, this.state = _ef72ad0b9c92.EntityStart, this.result = 0, 
          this.treeIndex = 0, this.excess = 1, this.consumed = 1;
        }
        write(_f68023e5066c, _34f246cde5be) {
          switch (this.state) {
           case _ef72ad0b9c92.EntityStart:
            if (_f68023e5066c.charCodeAt(_34f246cde5be) === _bed2b259674e.NUM) return this.state = _ef72ad0b9c92.NumericStart, 
            this.consumed += 1, this.stateNumericStart(_f68023e5066c, _34f246cde5be + 1);
            return this.state = _ef72ad0b9c92.NamedEntity, this.stateNamedEntity(_f68023e5066c, _34f246cde5be);

           case _ef72ad0b9c92.NumericStart:
            return this.stateNumericStart(_f68023e5066c, _34f246cde5be);

           case _ef72ad0b9c92.NumericDecimal:
            return this.stateNumericDecimal(_f68023e5066c, _34f246cde5be);

           case _ef72ad0b9c92.NumericHex:
            return this.stateNumericHex(_f68023e5066c, _34f246cde5be);

           case _ef72ad0b9c92.NamedEntity:
            return this.stateNamedEntity(_f68023e5066c, _34f246cde5be);
          }
        }
        stateNumericStart(_f68023e5066c, _34f246cde5be) {
          return _34f246cde5be >= _f68023e5066c.length ? -1 : (32 | _f68023e5066c.charCodeAt(_34f246cde5be)) === _bed2b259674e.LOWER_X ? (this.state = _ef72ad0b9c92.NumericHex, 
          this.consumed += 1, this.stateNumericHex(_f68023e5066c, _34f246cde5be + 1)) : (this.state = _ef72ad0b9c92.NumericDecimal, 
          this.stateNumericDecimal(_f68023e5066c, _34f246cde5be));
        }
        addToNumericResult(_f68023e5066c, _34f246cde5be, _63a45e116e67, _68051092d66a) {
          if (_34f246cde5be !== _63a45e116e67) {
            let _3d842a962905 = _63a45e116e67 - _34f246cde5be;
            this.result = this.result * Math.pow(_68051092d66a, _3d842a962905) + Number.parseInt(_f68023e5066c.substr(_34f246cde5be, _3d842a962905), _68051092d66a), 
            this.consumed += _3d842a962905;
          }
        }
        stateNumericHex(_f68023e5066c, _34f246cde5be) {
          let _63a45e116e67 = _34f246cde5be;
          for (;_34f246cde5be < _f68023e5066c.length; ) {
            var _68051092d66a;
            let _3d842a962905 = _f68023e5066c.charCodeAt(_34f246cde5be);
            if (!f(_3d842a962905) && (!((_68051092d66a = _3d842a962905) >= _bed2b259674e.UPPER_A) || !(_68051092d66a <= _bed2b259674e.UPPER_F)) && (!(_68051092d66a >= _bed2b259674e.LOWER_A) || !(_68051092d66a <= _bed2b259674e.LOWER_F))) return this.addToNumericResult(_f68023e5066c, _63a45e116e67, _34f246cde5be, 16), 
            this.emitNumericEntity(_3d842a962905, 3);
            _34f246cde5be += 1;
          }
          return this.addToNumericResult(_f68023e5066c, _63a45e116e67, _34f246cde5be, 16), 
          -1;
        }
        stateNumericDecimal(_f68023e5066c, _34f246cde5be) {
          let _63a45e116e67 = _34f246cde5be;
          for (;_34f246cde5be < _f68023e5066c.length; ) {
            let _68051092d66a = _f68023e5066c.charCodeAt(_34f246cde5be);
            if (!f(_68051092d66a)) return this.addToNumericResult(_f68023e5066c, _63a45e116e67, _34f246cde5be, 10), 
            this.emitNumericEntity(_68051092d66a, 2);
            _34f246cde5be += 1;
          }
          return this.addToNumericResult(_f68023e5066c, _63a45e116e67, _34f246cde5be, 10), 
          -1;
        }
        emitNumericEntity(_f68023e5066c, _34f246cde5be) {
          var _63a45e116e67;
          if (this.consumed <= _34f246cde5be) return null == (_63a45e116e67 = this.errors) || _63a45e116e67.absenceOfDigitsInNumericCharacterReference(this.consumed), 
          0;
          if (_f68023e5066c === _bed2b259674e.SEMI) this.consumed += 1; else if (this.decodeMode === _44f0b1ed911f.Strict) return 0;
          return this.emitCodePoint((0, _9acaff0e6a8f.y6)(this.result), this.consumed), this.errors && (_f68023e5066c !== _bed2b259674e.SEMI && this.errors.missingSemicolonAfterCharacterReference(), 
          this.errors.validateNumericCharacterReference(this.result)), this.consumed;
        }
        stateNamedEntity(_f68023e5066c, _34f246cde5be) {
          let {decodeTree: _63a45e116e67} = this, _68051092d66a = _63a45e116e67[this.treeIndex], _3d842a962905 = (_68051092d66a & _d73671e3fec6.VALUE_LENGTH) >> 14;
          for (;_34f246cde5be < _f68023e5066c.length; _34f246cde5be++, this.excess++) {
            let _2dbb4876c500 = _f68023e5066c.charCodeAt(_34f246cde5be);
            if (this.treeIndex = function(_f68023e5066c, _34f246cde5be, _63a45e116e67, _68051092d66a) {
              let _3d842a962905 = (_34f246cde5be & _d73671e3fec6.BRANCH_LENGTH) >> 7, _2dbb4876c500 = _34f246cde5be & _d73671e3fec6.JUMP_TABLE;
              if (0 === _3d842a962905) return 0 !== _2dbb4876c500 && _68051092d66a === _2dbb4876c500 ? _63a45e116e67 : -1;
              if (_2dbb4876c500) {
                let _34f246cde5be = _68051092d66a - _2dbb4876c500;
                return _34f246cde5be < 0 || _34f246cde5be >= _3d842a962905 ? -1 : _f68023e5066c[_63a45e116e67 + _34f246cde5be] - 1;
              }
              let _4547843d0a40 = _63a45e116e67, _bed2b259674e = _4547843d0a40 + _3d842a962905 - 1;
              for (;_4547843d0a40 <= _bed2b259674e; ) {
                let _34f246cde5be = _4547843d0a40 + _bed2b259674e >>> 1, _63a45e116e67 = _f68023e5066c[_34f246cde5be];
                if (_63a45e116e67 < _68051092d66a) _4547843d0a40 = _34f246cde5be + 1; else {
                  if (!(_63a45e116e67 > _68051092d66a)) return _f68023e5066c[_34f246cde5be + _3d842a962905];
                  _bed2b259674e = _34f246cde5be - 1;
                }
              }
              return -1;
            }(_63a45e116e67, _68051092d66a, this.treeIndex + Math.max(1, _3d842a962905), _2dbb4876c500), 
            this.treeIndex < 0) return 0 === this.result || this.decodeMode === _44f0b1ed911f.Attribute && (0 === _3d842a962905 || function(_f68023e5066c) {
              var _34f246cde5be;
              return _f68023e5066c === _bed2b259674e.EQUALS || (_34f246cde5be = _f68023e5066c) >= _bed2b259674e.UPPER_A && _34f246cde5be <= _bed2b259674e.UPPER_Z || _34f246cde5be >= _bed2b259674e.LOWER_A && _34f246cde5be <= _bed2b259674e.LOWER_Z || f(_34f246cde5be);
            }(_2dbb4876c500)) ? 0 : this.emitNotTerminatedNamedEntity();
            if (0 != (_3d842a962905 = ((_68051092d66a = _63a45e116e67[this.treeIndex]) & _d73671e3fec6.VALUE_LENGTH) >> 14)) {
              if (_2dbb4876c500 === _bed2b259674e.SEMI) return this.emitNamedEntityData(this.treeIndex, _3d842a962905, this.consumed + this.excess);
              this.decodeMode !== _44f0b1ed911f.Strict && (this.result = this.treeIndex, this.consumed += this.excess, 
              this.excess = 0);
            }
          }
          return -1;
        }
        emitNotTerminatedNamedEntity() {
          var _f68023e5066c;
          let {result: _34f246cde5be, decodeTree: _63a45e116e67} = this, _68051092d66a = (_63a45e116e67[_34f246cde5be] & _d73671e3fec6.VALUE_LENGTH) >> 14;
          return this.emitNamedEntityData(_34f246cde5be, _68051092d66a, this.consumed), null == (_f68023e5066c = this.errors) || _f68023e5066c.missingSemicolonAfterCharacterReference(), 
          this.consumed;
        }
        emitNamedEntityData(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
          let {decodeTree: _68051092d66a} = this;
          return this.emitCodePoint(1 === _34f246cde5be ? _68051092d66a[_f68023e5066c] & ~_d73671e3fec6.VALUE_LENGTH : _68051092d66a[_f68023e5066c + 1], _63a45e116e67), 
          3 === _34f246cde5be && this.emitCodePoint(_68051092d66a[_f68023e5066c + 2], _63a45e116e67), 
          _63a45e116e67;
        }
        end() {
          var _f68023e5066c;
          switch (this.state) {
           case _ef72ad0b9c92.NamedEntity:
            return 0 !== this.result && (this.decodeMode !== _44f0b1ed911f.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;

           case _ef72ad0b9c92.NumericDecimal:
            return this.emitNumericEntity(0, 2);

           case _ef72ad0b9c92.NumericHex:
            return this.emitNumericEntity(0, 3);

           case _ef72ad0b9c92.NumericStart:
            return null == (_f68023e5066c = this.errors) || _f68023e5066c.absenceOfDigitsInNumericCharacterReference(this.consumed), 
            0;

           case _ef72ad0b9c92.EntityStart:
            return 0;
          }
        }
      }
    },
    466: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67(9496), _63a45e116e67(747);
    },
    747: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.d(_34f246cde5be, {
        Gj: () => _4547843d0a40,
        WY: () => s,
        X1: () => _bed2b259674e
      });
      let _68051092d66a = /["$&'<>\u0080-\uFFFF]/g, _3d842a962905 = new Map([ [ 34, "&quot;" ], [ 38, "&amp;" ], [ 39, "&apos;" ], [ 60, "&lt;" ], [ 62, "&gt;" ] ]), _2dbb4876c500 = null == String.prototype.codePointAt ? (_f68023e5066c, _34f246cde5be) => (64512 & _f68023e5066c.charCodeAt(_34f246cde5be)) == 55296 ? (_f68023e5066c.charCodeAt(_34f246cde5be) - 55296) * 1024 + _f68023e5066c.charCodeAt(_34f246cde5be + 1) - 56320 + 65536 : _f68023e5066c.charCodeAt(_34f246cde5be) : (_f68023e5066c, _34f246cde5be) => _f68023e5066c.codePointAt(_34f246cde5be);
      function s(_f68023e5066c) {
        let _34f246cde5be, _63a45e116e67 = "", _4547843d0a40 = 0;
        for (;null !== (_34f246cde5be = _68051092d66a.exec(_f68023e5066c)); ) {
          let {index: _bed2b259674e} = _34f246cde5be, _d73671e3fec6 = _f68023e5066c.charCodeAt(_bed2b259674e), _ef72ad0b9c92 = _3d842a962905.get(_d73671e3fec6);
          void 0 === _ef72ad0b9c92 ? (_63a45e116e67 += `${_f68023e5066c.substring(_4547843d0a40, _bed2b259674e)}&#x${_2dbb4876c500(_f68023e5066c, _bed2b259674e).toString(16)};`, 
          _4547843d0a40 = _68051092d66a.lastIndex += Number((64512 & _d73671e3fec6) == 55296)) : (_63a45e116e67 += _f68023e5066c.substring(_4547843d0a40, _bed2b259674e) + _ef72ad0b9c92, 
          _4547843d0a40 = _bed2b259674e + 1);
        }
        return _63a45e116e67 + _f68023e5066c.substr(_4547843d0a40);
      }
      function o(_f68023e5066c, _34f246cde5be) {
        return function(_63a45e116e67) {
          let _68051092d66a, _3d842a962905 = 0, _2dbb4876c500 = "";
          for (;_68051092d66a = _f68023e5066c.exec(_63a45e116e67); ) _3d842a962905 !== _68051092d66a.index && (_2dbb4876c500 += _63a45e116e67.substring(_3d842a962905, _68051092d66a.index)), 
          _2dbb4876c500 += _34f246cde5be.get(_68051092d66a[0].charCodeAt(0)), _3d842a962905 = _68051092d66a.index + 1;
          return _2dbb4876c500 + _63a45e116e67.substring(_3d842a962905);
        };
      }
      let _4547843d0a40 = o(/["&\u00A0]/g, new Map([ [ 34, "&quot;" ], [ 38, "&amp;" ], [ 160, "&nbsp;" ] ])), _bed2b259674e = o(/[&<>\u00A0]/g, new Map([ [ 38, "&amp;" ], [ 60, "&lt;" ], [ 62, "&gt;" ], [ 160, "&nbsp;" ] ]));
    },
    7259: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.d(_34f246cde5be, {
        q: () => _68051092d66a
      });
      let _68051092d66a = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(_f68023e5066c => _f68023e5066c.charCodeAt(0)));
    },
    5949: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.d(_34f246cde5be, {
        s: () => _68051092d66a
      });
      let _68051092d66a = new Uint16Array("Ȁaglq\tɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(_f68023e5066c => _f68023e5066c.charCodeAt(0)));
    },
    9496: function() {},
    8466: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.d(_34f246cde5be, {
        Gj: () => _bed2b259674e.Gj,
        WY: () => _bed2b259674e.WY,
        X1: () => _bed2b259674e.X1
      }), _63a45e116e67(2990), _63a45e116e67(466);
      var _68051092d66a, _3d842a962905, _2dbb4876c500, _4547843d0a40, _bed2b259674e = _63a45e116e67(747);
      (_68051092d66a = _2dbb4876c500 || (_2dbb4876c500 = {}))[_68051092d66a.XML = 0] = "XML", 
      _68051092d66a[_68051092d66a.HTML = 1] = "HTML", (_3d842a962905 = _4547843d0a40 || (_4547843d0a40 = {}))[_3d842a962905.UTF8 = 0] = "UTF8", 
      _3d842a962905[_3d842a962905.ASCII = 1] = "ASCII", _3d842a962905[_3d842a962905.Extensive = 2] = "Extensive", 
      _3d842a962905[_3d842a962905.Attribute = 3] = "Attribute", _3d842a962905[_3d842a962905.Text = 4] = "Text";
    },
    4645: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.d(_34f246cde5be, {
        i: () => g
      });
      var _68051092d66a = _63a45e116e67(5645), _3d842a962905 = _63a45e116e67(2990);
      let _2dbb4876c500 = new Set([ "input", "option", "optgroup", "select", "button", "datalist", "textarea" ]), _4547843d0a40 = new Set([ "p" ]), _bed2b259674e = new Set([ "thead", "tbody" ]), _d73671e3fec6 = new Set([ "dd", "dt" ]), _ef72ad0b9c92 = new Set([ "rt", "rp" ]), _44f0b1ed911f = new Map([ [ "tr", new Set([ "tr", "th", "td" ]) ], [ "th", new Set([ "th" ]) ], [ "td", new Set([ "thead", "th", "td" ]) ], [ "body", new Set([ "head", "link", "script" ]) ], [ "li", new Set([ "li" ]) ], [ "p", _4547843d0a40 ], [ "h1", _4547843d0a40 ], [ "h2", _4547843d0a40 ], [ "h3", _4547843d0a40 ], [ "h4", _4547843d0a40 ], [ "h5", _4547843d0a40 ], [ "h6", _4547843d0a40 ], [ "select", _2dbb4876c500 ], [ "input", _2dbb4876c500 ], [ "output", _2dbb4876c500 ], [ "button", _2dbb4876c500 ], [ "datalist", _2dbb4876c500 ], [ "textarea", _2dbb4876c500 ], [ "option", new Set([ "option" ]) ], [ "optgroup", new Set([ "optgroup", "option" ]) ], [ "dd", _d73671e3fec6 ], [ "dt", _d73671e3fec6 ], [ "address", _4547843d0a40 ], [ "article", _4547843d0a40 ], [ "aside", _4547843d0a40 ], [ "blockquote", _4547843d0a40 ], [ "details", _4547843d0a40 ], [ "div", _4547843d0a40 ], [ "dl", _4547843d0a40 ], [ "fieldset", _4547843d0a40 ], [ "figcaption", _4547843d0a40 ], [ "figure", _4547843d0a40 ], [ "footer", _4547843d0a40 ], [ "form", _4547843d0a40 ], [ "header", _4547843d0a40 ], [ "hr", _4547843d0a40 ], [ "main", _4547843d0a40 ], [ "nav", _4547843d0a40 ], [ "ol", _4547843d0a40 ], [ "pre", _4547843d0a40 ], [ "section", _4547843d0a40 ], [ "table", _4547843d0a40 ], [ "ul", _4547843d0a40 ], [ "rt", _ef72ad0b9c92 ], [ "rp", _ef72ad0b9c92 ], [ "tbody", _bed2b259674e ], [ "tfoot", _bed2b259674e ] ]), _0a3b7a57b594 = new Set([ "area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr" ]), _3644bb2f5311 = new Set([ "math", "svg" ]), _9acaff0e6a8f = new Set([ "mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title" ]), _4a3d65fa17db = /\s|\//;
      class g {
        constructor(_f68023e5066c, _34f246cde5be = {}) {
          var _63a45e116e67, _3d842a962905, _2dbb4876c500, _4547843d0a40, _bed2b259674e, _d73671e3fec6;
          this.options = _34f246cde5be, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, 
          this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, 
          this.stack = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, 
          this.ended = !1, this.cbs = null != _f68023e5066c ? _f68023e5066c : {}, this.htmlMode = !this.options.xmlMode, 
          this.lowerCaseTagNames = null != (_63a45e116e67 = _34f246cde5be.lowerCaseTags) ? _63a45e116e67 : this.htmlMode, 
          this.lowerCaseAttributeNames = null != (_3d842a962905 = _34f246cde5be.lowerCaseAttributeNames) ? _3d842a962905 : this.htmlMode, 
          this.recognizeSelfClosing = null != (_2dbb4876c500 = _34f246cde5be.recognizeSelfClosing) ? _2dbb4876c500 : !this.htmlMode, 
          this.tokenizer = new (null != (_4547843d0a40 = _34f246cde5be.Tokenizer) ? _4547843d0a40 : _68051092d66a.A)(this.options, this), 
          this.foreignContext = [ !this.htmlMode ], null == (_d73671e3fec6 = (_bed2b259674e = this.cbs).onparserinit) || _d73671e3fec6.call(_bed2b259674e, this);
        }
        ontext(_f68023e5066c, _34f246cde5be) {
          var _63a45e116e67, _68051092d66a;
          let _3d842a962905 = this.getSlice(_f68023e5066c, _34f246cde5be);
          this.endIndex = _34f246cde5be - 1, null == (_68051092d66a = (_63a45e116e67 = this.cbs).ontext) || _68051092d66a.call(_63a45e116e67, _3d842a962905), 
          this.startIndex = _34f246cde5be;
        }
        ontextentity(_f68023e5066c, _34f246cde5be) {
          var _63a45e116e67, _68051092d66a;
          this.endIndex = _34f246cde5be - 1, null == (_68051092d66a = (_63a45e116e67 = this.cbs).ontext) || _68051092d66a.call(_63a45e116e67, (0, 
          _3d842a962905.MK)(_f68023e5066c)), this.startIndex = _34f246cde5be;
        }
        isVoidElement(_f68023e5066c) {
          return this.htmlMode && _0a3b7a57b594.has(_f68023e5066c);
        }
        onopentagname(_f68023e5066c, _34f246cde5be) {
          this.endIndex = _34f246cde5be;
          let _63a45e116e67 = this.getSlice(_f68023e5066c, _34f246cde5be);
          this.lowerCaseTagNames && (_63a45e116e67 = _63a45e116e67.toLowerCase()), this.emitOpenTag(_63a45e116e67);
        }
        emitOpenTag(_f68023e5066c) {
          var _34f246cde5be, _63a45e116e67, _68051092d66a, _3d842a962905;
          this.openTagStart = this.startIndex, this.tagname = _f68023e5066c;
          let _2dbb4876c500 = this.htmlMode && _44f0b1ed911f.get(_f68023e5066c);
          if (_2dbb4876c500) for (;this.stack.length > 0 && _2dbb4876c500.has(this.stack[0]); ) {
            let _f68023e5066c = this.stack.shift();
            null == (_63a45e116e67 = (_34f246cde5be = this.cbs).onclosetag) || _63a45e116e67.call(_34f246cde5be, _f68023e5066c, !0);
          }
          !this.isVoidElement(_f68023e5066c) && (this.stack.unshift(_f68023e5066c), this.htmlMode && (_3644bb2f5311.has(_f68023e5066c) ? this.foreignContext.unshift(!0) : _9acaff0e6a8f.has(_f68023e5066c) && this.foreignContext.unshift(!1))), 
          null == (_3d842a962905 = (_68051092d66a = this.cbs).onopentagname) || _3d842a962905.call(_68051092d66a, _f68023e5066c), 
          this.cbs.onopentag && (this.attribs = {});
        }
        endOpenTag(_f68023e5066c) {
          var _34f246cde5be, _63a45e116e67;
          this.startIndex = this.openTagStart, this.attribs && (null == (_63a45e116e67 = (_34f246cde5be = this.cbs).onopentag) || _63a45e116e67.call(_34f246cde5be, this.tagname, this.attribs, _f68023e5066c), 
          this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), 
          this.tagname = "";
        }
        onopentagend(_f68023e5066c) {
          this.endIndex = _f68023e5066c, this.endOpenTag(!1), this.startIndex = _f68023e5066c + 1;
        }
        onclosetag(_f68023e5066c, _34f246cde5be) {
          var _63a45e116e67, _68051092d66a, _3d842a962905, _2dbb4876c500, _4547843d0a40, _bed2b259674e, _d73671e3fec6, _ef72ad0b9c92;
          this.endIndex = _34f246cde5be;
          let _44f0b1ed911f = this.getSlice(_f68023e5066c, _34f246cde5be);
          if (this.lowerCaseTagNames && (_44f0b1ed911f = _44f0b1ed911f.toLowerCase()), this.htmlMode && (_3644bb2f5311.has(_44f0b1ed911f) || _9acaff0e6a8f.has(_44f0b1ed911f)) && this.foreignContext.shift(), 
          this.isVoidElement(_44f0b1ed911f)) this.htmlMode && "br" === _44f0b1ed911f && (null == (_2dbb4876c500 = (_3d842a962905 = this.cbs).onopentagname) || _2dbb4876c500.call(_3d842a962905, "br"), 
          null == (_bed2b259674e = (_4547843d0a40 = this.cbs).onopentag) || _bed2b259674e.call(_4547843d0a40, "br", {}, !0), 
          null == (_ef72ad0b9c92 = (_d73671e3fec6 = this.cbs).onclosetag) || _ef72ad0b9c92.call(_d73671e3fec6, "br", !1)); else {
            let _f68023e5066c = this.stack.indexOf(_44f0b1ed911f);
            if (-1 !== _f68023e5066c) for (let _34f246cde5be = 0; _34f246cde5be <= _f68023e5066c; _34f246cde5be++) {
              let _3d842a962905 = this.stack.shift();
              null == (_68051092d66a = (_63a45e116e67 = this.cbs).onclosetag) || _68051092d66a.call(_63a45e116e67, _3d842a962905, _34f246cde5be !== _f68023e5066c);
            } else this.htmlMode && "p" === _44f0b1ed911f && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
          }
          this.startIndex = _34f246cde5be + 1;
        }
        onselfclosingtag(_f68023e5066c) {
          this.endIndex = _f68023e5066c, this.recognizeSelfClosing || this.foreignContext[0] ? (this.closeCurrentTag(!1), 
          this.startIndex = _f68023e5066c + 1) : this.onopentagend(_f68023e5066c);
        }
        closeCurrentTag(_f68023e5066c) {
          var _34f246cde5be, _63a45e116e67;
          let _68051092d66a = this.tagname;
          this.endOpenTag(_f68023e5066c), this.stack[0] === _68051092d66a && (null == (_63a45e116e67 = (_34f246cde5be = this.cbs).onclosetag) || _63a45e116e67.call(_34f246cde5be, _68051092d66a, !_f68023e5066c), 
          this.stack.shift());
        }
        onattribname(_f68023e5066c, _34f246cde5be) {
          this.startIndex = _f68023e5066c;
          let _63a45e116e67 = this.getSlice(_f68023e5066c, _34f246cde5be);
          this.attribname = this.lowerCaseAttributeNames ? _63a45e116e67.toLowerCase() : _63a45e116e67;
        }
        onattribdata(_f68023e5066c, _34f246cde5be) {
          this.attribvalue += this.getSlice(_f68023e5066c, _34f246cde5be);
        }
        onattribentity(_f68023e5066c) {
          this.attribvalue += (0, _3d842a962905.MK)(_f68023e5066c);
        }
        onattribend(_f68023e5066c, _34f246cde5be) {
          var _63a45e116e67, _3d842a962905;
          this.endIndex = _34f246cde5be, null == (_3d842a962905 = (_63a45e116e67 = this.cbs).onattribute) || _3d842a962905.call(_63a45e116e67, this.attribname, this.attribvalue, _f68023e5066c === _68051092d66a.X.Double ? '"' : _f68023e5066c === _68051092d66a.X.Single ? "'" : _f68023e5066c === _68051092d66a.X.NoValue ? void 0 : null), 
          this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), 
          this.attribvalue = "";
        }
        getInstructionName(_f68023e5066c) {
          let _34f246cde5be = _f68023e5066c.search(_4a3d65fa17db), _63a45e116e67 = _34f246cde5be < 0 ? _f68023e5066c : _f68023e5066c.substr(0, _34f246cde5be);
          return this.lowerCaseTagNames && (_63a45e116e67 = _63a45e116e67.toLowerCase()), 
          _63a45e116e67;
        }
        ondeclaration(_f68023e5066c, _34f246cde5be) {
          this.endIndex = _34f246cde5be;
          let _63a45e116e67 = this.getSlice(_f68023e5066c, _34f246cde5be);
          if (this.cbs.onprocessinginstruction) {
            let _f68023e5066c = this.getInstructionName(_63a45e116e67);
            this.cbs.onprocessinginstruction(`!${_f68023e5066c}`, `!${_63a45e116e67}`);
          }
          this.startIndex = _34f246cde5be + 1;
        }
        onprocessinginstruction(_f68023e5066c, _34f246cde5be) {
          this.endIndex = _34f246cde5be;
          let _63a45e116e67 = this.getSlice(_f68023e5066c, _34f246cde5be);
          if (this.cbs.onprocessinginstruction) {
            let _f68023e5066c = this.getInstructionName(_63a45e116e67);
            this.cbs.onprocessinginstruction(`?${_f68023e5066c}`, `?${_63a45e116e67}`);
          }
          this.startIndex = _34f246cde5be + 1;
        }
        oncomment(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
          var _68051092d66a, _3d842a962905, _2dbb4876c500, _4547843d0a40;
          this.endIndex = _34f246cde5be, null == (_3d842a962905 = (_68051092d66a = this.cbs).oncomment) || _3d842a962905.call(_68051092d66a, this.getSlice(_f68023e5066c, _34f246cde5be - _63a45e116e67)), 
          null == (_4547843d0a40 = (_2dbb4876c500 = this.cbs).oncommentend) || _4547843d0a40.call(_2dbb4876c500), 
          this.startIndex = _34f246cde5be + 1;
        }
        oncdata(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
          var _68051092d66a, _3d842a962905, _2dbb4876c500, _4547843d0a40, _bed2b259674e, _d73671e3fec6, _ef72ad0b9c92, _44f0b1ed911f, _0a3b7a57b594, _3644bb2f5311;
          this.endIndex = _34f246cde5be;
          let _9acaff0e6a8f = this.getSlice(_f68023e5066c, _34f246cde5be - _63a45e116e67);
          !this.htmlMode || this.options.recognizeCDATA ? (null == (_3d842a962905 = (_68051092d66a = this.cbs).oncdatastart) || _3d842a962905.call(_68051092d66a), 
          null == (_4547843d0a40 = (_2dbb4876c500 = this.cbs).ontext) || _4547843d0a40.call(_2dbb4876c500, _9acaff0e6a8f), 
          null == (_d73671e3fec6 = (_bed2b259674e = this.cbs).oncdataend) || _d73671e3fec6.call(_bed2b259674e)) : (null == (_44f0b1ed911f = (_ef72ad0b9c92 = this.cbs).oncomment) || _44f0b1ed911f.call(_ef72ad0b9c92, `[CDATA[${_9acaff0e6a8f}]]`), 
          null == (_3644bb2f5311 = (_0a3b7a57b594 = this.cbs).oncommentend) || _3644bb2f5311.call(_0a3b7a57b594)), 
          this.startIndex = _34f246cde5be + 1;
        }
        onend() {
          var _f68023e5066c, _34f246cde5be;
          if (this.cbs.onclosetag) {
            this.endIndex = this.startIndex;
            for (let _f68023e5066c = 0; _f68023e5066c < this.stack.length; _f68023e5066c++) this.cbs.onclosetag(this.stack[_f68023e5066c], !0);
          }
          null == (_34f246cde5be = (_f68023e5066c = this.cbs).onend) || _34f246cde5be.call(_f68023e5066c);
        }
        reset() {
          var _f68023e5066c, _34f246cde5be, _63a45e116e67, _68051092d66a;
          null == (_34f246cde5be = (_f68023e5066c = this.cbs).onreset) || _34f246cde5be.call(_f68023e5066c), 
          this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, 
          this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, null == (_68051092d66a = (_63a45e116e67 = this.cbs).onparserinit) || _68051092d66a.call(_63a45e116e67, this), 
          this.buffers.length = 0, this.foreignContext.length = 0, this.foreignContext.unshift(!this.htmlMode), 
          this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1;
        }
        parseComplete(_f68023e5066c) {
          this.reset(), this.end(_f68023e5066c);
        }
        getSlice(_f68023e5066c, _34f246cde5be) {
          for (;_f68023e5066c - this.bufferOffset >= this.buffers[0].length; ) this.shiftBuffer();
          let _63a45e116e67 = this.buffers[0].slice(_f68023e5066c - this.bufferOffset, _34f246cde5be - this.bufferOffset);
          for (;_34f246cde5be - this.bufferOffset > this.buffers[0].length; ) this.shiftBuffer(), 
          _63a45e116e67 += this.buffers[0].slice(0, _34f246cde5be - this.bufferOffset);
          return _63a45e116e67;
        }
        shiftBuffer() {
          this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift();
        }
        write(_f68023e5066c) {
          var _34f246cde5be, _63a45e116e67;
          if (this.ended) {
            null == (_63a45e116e67 = (_34f246cde5be = this.cbs).onerror) || _63a45e116e67.call(_34f246cde5be, Error(".write() after done!"));
            return;
          }
          this.buffers.push(_f68023e5066c), this.tokenizer.running && (this.tokenizer.write(_f68023e5066c), 
          this.writeIndex++);
        }
        end(_f68023e5066c) {
          var _34f246cde5be, _63a45e116e67;
          if (this.ended) {
            null == (_63a45e116e67 = (_34f246cde5be = this.cbs).onerror) || _63a45e116e67.call(_34f246cde5be, Error(".end() after done!"));
            return;
          }
          _f68023e5066c && this.write(_f68023e5066c), this.ended = !0, this.tokenizer.end();
        }
        pause() {
          this.tokenizer.pause();
        }
        resume() {
          for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length; ) this.tokenizer.write(this.buffers[this.writeIndex++]);
          this.ended && this.tokenizer.end();
        }
        parseChunk(_f68023e5066c) {
          this.write(_f68023e5066c);
        }
        done(_f68023e5066c) {
          this.end(_f68023e5066c);
        }
      }
    },
    5645: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.d(_34f246cde5be, {
        A: () => p,
        X: () => _d73671e3fec6
      });
      var _68051092d66a, _3d842a962905, _2dbb4876c500, _4547843d0a40, _bed2b259674e, _d73671e3fec6, _ef72ad0b9c92 = _63a45e116e67(2990);
      function u(_f68023e5066c) {
        return _f68023e5066c === _4547843d0a40.Space || _f68023e5066c === _4547843d0a40.NewLine || _f68023e5066c === _4547843d0a40.Tab || _f68023e5066c === _4547843d0a40.FormFeed || _f68023e5066c === _4547843d0a40.CarriageReturn;
      }
      function d(_f68023e5066c) {
        return _f68023e5066c === _4547843d0a40.Slash || _f68023e5066c === _4547843d0a40.Gt || u(_f68023e5066c);
      }
      (_68051092d66a = _4547843d0a40 || (_4547843d0a40 = {}))[_68051092d66a.Tab = 9] = "Tab", 
      _68051092d66a[_68051092d66a.NewLine = 10] = "NewLine", _68051092d66a[_68051092d66a.FormFeed = 12] = "FormFeed", 
      _68051092d66a[_68051092d66a.CarriageReturn = 13] = "CarriageReturn", _68051092d66a[_68051092d66a.Space = 32] = "Space", 
      _68051092d66a[_68051092d66a.ExclamationMark = 33] = "ExclamationMark", _68051092d66a[_68051092d66a.Number = 35] = "Number", 
      _68051092d66a[_68051092d66a.Amp = 38] = "Amp", _68051092d66a[_68051092d66a.SingleQuote = 39] = "SingleQuote", 
      _68051092d66a[_68051092d66a.DoubleQuote = 34] = "DoubleQuote", _68051092d66a[_68051092d66a.Dash = 45] = "Dash", 
      _68051092d66a[_68051092d66a.Slash = 47] = "Slash", _68051092d66a[_68051092d66a.Zero = 48] = "Zero", 
      _68051092d66a[_68051092d66a.Nine = 57] = "Nine", _68051092d66a[_68051092d66a.Semi = 59] = "Semi", 
      _68051092d66a[_68051092d66a.Lt = 60] = "Lt", _68051092d66a[_68051092d66a.Eq = 61] = "Eq", 
      _68051092d66a[_68051092d66a.Gt = 62] = "Gt", _68051092d66a[_68051092d66a.Questionmark = 63] = "Questionmark", 
      _68051092d66a[_68051092d66a.UpperA = 65] = "UpperA", _68051092d66a[_68051092d66a.LowerA = 97] = "LowerA", 
      _68051092d66a[_68051092d66a.UpperF = 70] = "UpperF", _68051092d66a[_68051092d66a.LowerF = 102] = "LowerF", 
      _68051092d66a[_68051092d66a.UpperZ = 90] = "UpperZ", _68051092d66a[_68051092d66a.LowerZ = 122] = "LowerZ", 
      _68051092d66a[_68051092d66a.LowerX = 120] = "LowerX", _68051092d66a[_68051092d66a.OpeningSquareBracket = 91] = "OpeningSquareBracket", 
      (_3d842a962905 = _bed2b259674e || (_bed2b259674e = {}))[_3d842a962905.Text = 1] = "Text", 
      _3d842a962905[_3d842a962905.BeforeTagName = 2] = "BeforeTagName", _3d842a962905[_3d842a962905.InTagName = 3] = "InTagName", 
      _3d842a962905[_3d842a962905.InSelfClosingTag = 4] = "InSelfClosingTag", _3d842a962905[_3d842a962905.BeforeClosingTagName = 5] = "BeforeClosingTagName", 
      _3d842a962905[_3d842a962905.InClosingTagName = 6] = "InClosingTagName", _3d842a962905[_3d842a962905.AfterClosingTagName = 7] = "AfterClosingTagName", 
      _3d842a962905[_3d842a962905.BeforeAttributeName = 8] = "BeforeAttributeName", _3d842a962905[_3d842a962905.InAttributeName = 9] = "InAttributeName", 
      _3d842a962905[_3d842a962905.AfterAttributeName = 10] = "AfterAttributeName", _3d842a962905[_3d842a962905.BeforeAttributeValue = 11] = "BeforeAttributeValue", 
      _3d842a962905[_3d842a962905.InAttributeValueDq = 12] = "InAttributeValueDq", _3d842a962905[_3d842a962905.InAttributeValueSq = 13] = "InAttributeValueSq", 
      _3d842a962905[_3d842a962905.InAttributeValueNq = 14] = "InAttributeValueNq", _3d842a962905[_3d842a962905.BeforeDeclaration = 15] = "BeforeDeclaration", 
      _3d842a962905[_3d842a962905.InDeclaration = 16] = "InDeclaration", _3d842a962905[_3d842a962905.InProcessingInstruction = 17] = "InProcessingInstruction", 
      _3d842a962905[_3d842a962905.BeforeComment = 18] = "BeforeComment", _3d842a962905[_3d842a962905.CDATASequence = 19] = "CDATASequence", 
      _3d842a962905[_3d842a962905.InSpecialComment = 20] = "InSpecialComment", _3d842a962905[_3d842a962905.InCommentLike = 21] = "InCommentLike", 
      _3d842a962905[_3d842a962905.BeforeSpecialS = 22] = "BeforeSpecialS", _3d842a962905[_3d842a962905.BeforeSpecialT = 23] = "BeforeSpecialT", 
      _3d842a962905[_3d842a962905.SpecialStartSequence = 24] = "SpecialStartSequence", 
      _3d842a962905[_3d842a962905.InSpecialTag = 25] = "InSpecialTag", _3d842a962905[_3d842a962905.InEntity = 26] = "InEntity", 
      (_2dbb4876c500 = _d73671e3fec6 || (_d73671e3fec6 = {}))[_2dbb4876c500.NoValue = 0] = "NoValue", 
      _2dbb4876c500[_2dbb4876c500.Unquoted = 1] = "Unquoted", _2dbb4876c500[_2dbb4876c500.Single = 2] = "Single", 
      _2dbb4876c500[_2dbb4876c500.Double = 3] = "Double";
      let _44f0b1ed911f = {
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
        constructor({xmlMode: _f68023e5066c = !1, decodeEntities: _34f246cde5be = !0}, _63a45e116e67) {
          this.cbs = _63a45e116e67, this.state = _bed2b259674e.Text, this.buffer = "", this.sectionStart = 0, 
          this.index = 0, this.entityStart = 0, this.baseState = _bed2b259674e.Text, this.isSpecial = !1, 
          this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, 
          this.xmlMode = _f68023e5066c, this.decodeEntities = _34f246cde5be, this.entityDecoder = new _ef72ad0b9c92.Wf(_f68023e5066c ? _ef72ad0b9c92.sr : _ef72ad0b9c92.qN, (_f68023e5066c, _34f246cde5be) => this.emitCodePoint(_f68023e5066c, _34f246cde5be));
        }
        reset() {
          this.state = _bed2b259674e.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, 
          this.baseState = _bed2b259674e.Text, this.currentSequence = void 0, this.running = !0, 
          this.offset = 0;
        }
        write(_f68023e5066c) {
          this.offset += this.buffer.length, this.buffer = _f68023e5066c, this.parse();
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
        stateText(_f68023e5066c) {
          _f68023e5066c === _4547843d0a40.Lt || !this.decodeEntities && this.fastForwardTo(_4547843d0a40.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), 
          this.state = _bed2b259674e.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && _f68023e5066c === _4547843d0a40.Amp && this.startEntity();
        }
        stateSpecialStartSequence(_f68023e5066c) {
          let _34f246cde5be = this.sequenceIndex === this.currentSequence.length;
          if (_34f246cde5be ? d(_f68023e5066c) : (32 | _f68023e5066c) === this.currentSequence[this.sequenceIndex]) {
            if (!_34f246cde5be) return void this.sequenceIndex++;
          } else this.isSpecial = !1;
          this.sequenceIndex = 0, this.state = _bed2b259674e.InTagName, this.stateInTagName(_f68023e5066c);
        }
        stateInSpecialTag(_f68023e5066c) {
          if (this.sequenceIndex === this.currentSequence.length) {
            if (_f68023e5066c === _4547843d0a40.Gt || u(_f68023e5066c)) {
              let _34f246cde5be = this.index - this.currentSequence.length;
              if (this.sectionStart < _34f246cde5be) {
                let _f68023e5066c = this.index;
                this.index = _34f246cde5be, this.cbs.ontext(this.sectionStart, _34f246cde5be), this.index = _f68023e5066c;
              }
              this.isSpecial = !1, this.sectionStart = _34f246cde5be + 2, this.stateInClosingTagName(_f68023e5066c);
              return;
            }
            this.sequenceIndex = 0;
          }
          (32 | _f68023e5066c) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : 0 === this.sequenceIndex ? this.currentSequence === _44f0b1ed911f.TitleEnd ? this.decodeEntities && _f68023e5066c === _4547843d0a40.Amp && this.startEntity() : this.fastForwardTo(_4547843d0a40.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = Number(_f68023e5066c === _4547843d0a40.Lt);
        }
        stateCDATASequence(_f68023e5066c) {
          _f68023e5066c === _44f0b1ed911f.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === _44f0b1ed911f.Cdata.length && (this.state = _bed2b259674e.InCommentLike, 
          this.currentSequence = _44f0b1ed911f.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, 
          this.state = _bed2b259674e.InDeclaration, this.stateInDeclaration(_f68023e5066c));
        }
        fastForwardTo(_f68023e5066c) {
          for (;++this.index < this.buffer.length + this.offset; ) if (this.buffer.charCodeAt(this.index - this.offset) === _f68023e5066c) return !0;
          return this.index = this.buffer.length + this.offset - 1, !1;
        }
        stateInCommentLike(_f68023e5066c) {
          _f68023e5066c === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === _44f0b1ed911f.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), 
          this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = _bed2b259674e.Text) : 0 === this.sequenceIndex ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : _f68023e5066c !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
        }
        isTagStartChar(_f68023e5066c) {
          return this.xmlMode ? !d(_f68023e5066c) : _f68023e5066c >= _4547843d0a40.LowerA && _f68023e5066c <= _4547843d0a40.LowerZ || _f68023e5066c >= _4547843d0a40.UpperA && _f68023e5066c <= _4547843d0a40.UpperZ;
        }
        startSpecial(_f68023e5066c, _34f246cde5be) {
          this.isSpecial = !0, this.currentSequence = _f68023e5066c, this.sequenceIndex = _34f246cde5be, 
          this.state = _bed2b259674e.SpecialStartSequence;
        }
        stateBeforeTagName(_f68023e5066c) {
          if (_f68023e5066c === _4547843d0a40.ExclamationMark) this.state = _bed2b259674e.BeforeDeclaration, 
          this.sectionStart = this.index + 1; else if (_f68023e5066c === _4547843d0a40.Questionmark) this.state = _bed2b259674e.InProcessingInstruction, 
          this.sectionStart = this.index + 1; else if (this.isTagStartChar(_f68023e5066c)) {
            let _34f246cde5be = 32 | _f68023e5066c;
            this.sectionStart = this.index, this.xmlMode ? this.state = _bed2b259674e.InTagName : _34f246cde5be === _44f0b1ed911f.ScriptEnd[2] ? this.state = _bed2b259674e.BeforeSpecialS : _34f246cde5be === _44f0b1ed911f.TitleEnd[2] || _34f246cde5be === _44f0b1ed911f.XmpEnd[2] ? this.state = _bed2b259674e.BeforeSpecialT : this.state = _bed2b259674e.InTagName;
          } else _f68023e5066c === _4547843d0a40.Slash ? this.state = _bed2b259674e.BeforeClosingTagName : (this.state = _bed2b259674e.Text, 
          this.stateText(_f68023e5066c));
        }
        stateInTagName(_f68023e5066c) {
          d(_f68023e5066c) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, 
          this.state = _bed2b259674e.BeforeAttributeName, this.stateBeforeAttributeName(_f68023e5066c));
        }
        stateBeforeClosingTagName(_f68023e5066c) {
          u(_f68023e5066c) || (_f68023e5066c === _4547843d0a40.Gt ? this.state = _bed2b259674e.Text : (this.state = this.isTagStartChar(_f68023e5066c) ? _bed2b259674e.InClosingTagName : _bed2b259674e.InSpecialComment, 
          this.sectionStart = this.index));
        }
        stateInClosingTagName(_f68023e5066c) {
          (_f68023e5066c === _4547843d0a40.Gt || u(_f68023e5066c)) && (this.cbs.onclosetag(this.sectionStart, this.index), 
          this.sectionStart = -1, this.state = _bed2b259674e.AfterClosingTagName, this.stateAfterClosingTagName(_f68023e5066c));
        }
        stateAfterClosingTagName(_f68023e5066c) {
          (_f68023e5066c === _4547843d0a40.Gt || this.fastForwardTo(_4547843d0a40.Gt)) && (this.state = _bed2b259674e.Text, 
          this.sectionStart = this.index + 1);
        }
        stateBeforeAttributeName(_f68023e5066c) {
          _f68023e5066c === _4547843d0a40.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = _bed2b259674e.InSpecialTag, 
          this.sequenceIndex = 0) : this.state = _bed2b259674e.Text, this.sectionStart = this.index + 1) : _f68023e5066c === _4547843d0a40.Slash ? this.state = _bed2b259674e.InSelfClosingTag : u(_f68023e5066c) || (this.state = _bed2b259674e.InAttributeName, 
          this.sectionStart = this.index);
        }
        stateInSelfClosingTag(_f68023e5066c) {
          _f68023e5066c === _4547843d0a40.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = _bed2b259674e.Text, 
          this.sectionStart = this.index + 1, this.isSpecial = !1) : u(_f68023e5066c) || (this.state = _bed2b259674e.BeforeAttributeName, 
          this.stateBeforeAttributeName(_f68023e5066c));
        }
        stateInAttributeName(_f68023e5066c) {
          (_f68023e5066c === _4547843d0a40.Eq || d(_f68023e5066c)) && (this.cbs.onattribname(this.sectionStart, this.index), 
          this.sectionStart = this.index, this.state = _bed2b259674e.AfterAttributeName, this.stateAfterAttributeName(_f68023e5066c));
        }
        stateAfterAttributeName(_f68023e5066c) {
          _f68023e5066c === _4547843d0a40.Eq ? this.state = _bed2b259674e.BeforeAttributeValue : _f68023e5066c === _4547843d0a40.Slash || _f68023e5066c === _4547843d0a40.Gt ? (this.cbs.onattribend(_d73671e3fec6.NoValue, this.sectionStart), 
          this.sectionStart = -1, this.state = _bed2b259674e.BeforeAttributeName, this.stateBeforeAttributeName(_f68023e5066c)) : u(_f68023e5066c) || (this.cbs.onattribend(_d73671e3fec6.NoValue, this.sectionStart), 
          this.state = _bed2b259674e.InAttributeName, this.sectionStart = this.index);
        }
        stateBeforeAttributeValue(_f68023e5066c) {
          _f68023e5066c === _4547843d0a40.DoubleQuote ? (this.state = _bed2b259674e.InAttributeValueDq, 
          this.sectionStart = this.index + 1) : _f68023e5066c === _4547843d0a40.SingleQuote ? (this.state = _bed2b259674e.InAttributeValueSq, 
          this.sectionStart = this.index + 1) : u(_f68023e5066c) || (this.sectionStart = this.index, 
          this.state = _bed2b259674e.InAttributeValueNq, this.stateInAttributeValueNoQuotes(_f68023e5066c));
        }
        handleInAttributeValue(_f68023e5066c, _34f246cde5be) {
          _f68023e5066c === _34f246cde5be || !this.decodeEntities && this.fastForwardTo(_34f246cde5be) ? (this.cbs.onattribdata(this.sectionStart, this.index), 
          this.sectionStart = -1, this.cbs.onattribend(_34f246cde5be === _4547843d0a40.DoubleQuote ? _d73671e3fec6.Double : _d73671e3fec6.Single, this.index + 1), 
          this.state = _bed2b259674e.BeforeAttributeName) : this.decodeEntities && _f68023e5066c === _4547843d0a40.Amp && this.startEntity();
        }
        stateInAttributeValueDoubleQuotes(_f68023e5066c) {
          this.handleInAttributeValue(_f68023e5066c, _4547843d0a40.DoubleQuote);
        }
        stateInAttributeValueSingleQuotes(_f68023e5066c) {
          this.handleInAttributeValue(_f68023e5066c, _4547843d0a40.SingleQuote);
        }
        stateInAttributeValueNoQuotes(_f68023e5066c) {
          u(_f68023e5066c) || _f68023e5066c === _4547843d0a40.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), 
          this.sectionStart = -1, this.cbs.onattribend(_d73671e3fec6.Unquoted, this.index), 
          this.state = _bed2b259674e.BeforeAttributeName, this.stateBeforeAttributeName(_f68023e5066c)) : this.decodeEntities && _f68023e5066c === _4547843d0a40.Amp && this.startEntity();
        }
        stateBeforeDeclaration(_f68023e5066c) {
          _f68023e5066c === _4547843d0a40.OpeningSquareBracket ? (this.state = _bed2b259674e.CDATASequence, 
          this.sequenceIndex = 0) : this.state = _f68023e5066c === _4547843d0a40.Dash ? _bed2b259674e.BeforeComment : _bed2b259674e.InDeclaration;
        }
        stateInDeclaration(_f68023e5066c) {
          (_f68023e5066c === _4547843d0a40.Gt || this.fastForwardTo(_4547843d0a40.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), 
          this.state = _bed2b259674e.Text, this.sectionStart = this.index + 1);
        }
        stateInProcessingInstruction(_f68023e5066c) {
          (_f68023e5066c === _4547843d0a40.Gt || this.fastForwardTo(_4547843d0a40.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), 
          this.state = _bed2b259674e.Text, this.sectionStart = this.index + 1);
        }
        stateBeforeComment(_f68023e5066c) {
          _f68023e5066c === _4547843d0a40.Dash ? (this.state = _bed2b259674e.InCommentLike, 
          this.currentSequence = _44f0b1ed911f.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = _bed2b259674e.InDeclaration;
        }
        stateInSpecialComment(_f68023e5066c) {
          (_f68023e5066c === _4547843d0a40.Gt || this.fastForwardTo(_4547843d0a40.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), 
          this.state = _bed2b259674e.Text, this.sectionStart = this.index + 1);
        }
        stateBeforeSpecialS(_f68023e5066c) {
          let _34f246cde5be = 32 | _f68023e5066c;
          _34f246cde5be === _44f0b1ed911f.ScriptEnd[3] ? this.startSpecial(_44f0b1ed911f.ScriptEnd, 4) : _34f246cde5be === _44f0b1ed911f.StyleEnd[3] ? this.startSpecial(_44f0b1ed911f.StyleEnd, 4) : (this.state = _bed2b259674e.InTagName, 
          this.stateInTagName(_f68023e5066c));
        }
        stateBeforeSpecialT(_f68023e5066c) {
          switch (32 | _f68023e5066c) {
           case _44f0b1ed911f.TitleEnd[3]:
            this.startSpecial(_44f0b1ed911f.TitleEnd, 4);
            break;

           case _44f0b1ed911f.TextareaEnd[3]:
            this.startSpecial(_44f0b1ed911f.TextareaEnd, 4);
            break;

           case _44f0b1ed911f.XmpEnd[3]:
            this.startSpecial(_44f0b1ed911f.XmpEnd, 4);
            break;

           default:
            this.state = _bed2b259674e.InTagName, this.stateInTagName(_f68023e5066c);
          }
        }
        startEntity() {
          this.baseState = this.state, this.state = _bed2b259674e.InEntity, this.entityStart = this.index, 
          this.entityDecoder.startEntity(this.xmlMode ? _ef72ad0b9c92.FJ.Strict : this.baseState === _bed2b259674e.Text || this.baseState === _bed2b259674e.InSpecialTag ? _ef72ad0b9c92.FJ.Legacy : _ef72ad0b9c92.FJ.Attribute);
        }
        stateInEntity() {
          let _f68023e5066c = this.entityDecoder.write(this.buffer, this.index - this.offset);
          _f68023e5066c >= 0 ? (this.state = this.baseState, 0 === _f68023e5066c && (this.index = this.entityStart)) : this.index = this.offset + this.buffer.length - 1;
        }
        cleanup() {
          this.running && this.sectionStart !== this.index && (this.state === _bed2b259674e.Text || this.state === _bed2b259674e.InSpecialTag && 0 === this.sequenceIndex ? (this.cbs.ontext(this.sectionStart, this.index), 
          this.sectionStart = this.index) : (this.state === _bed2b259674e.InAttributeValueDq || this.state === _bed2b259674e.InAttributeValueSq || this.state === _bed2b259674e.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), 
          this.sectionStart = this.index));
        }
        shouldContinue() {
          return this.index < this.buffer.length + this.offset && this.running;
        }
        parse() {
          for (;this.shouldContinue(); ) {
            let _f68023e5066c = this.buffer.charCodeAt(this.index - this.offset);
            switch (this.state) {
             case _bed2b259674e.Text:
              this.stateText(_f68023e5066c);
              break;

             case _bed2b259674e.SpecialStartSequence:
              this.stateSpecialStartSequence(_f68023e5066c);
              break;

             case _bed2b259674e.InSpecialTag:
              this.stateInSpecialTag(_f68023e5066c);
              break;

             case _bed2b259674e.CDATASequence:
              this.stateCDATASequence(_f68023e5066c);
              break;

             case _bed2b259674e.InAttributeValueDq:
              this.stateInAttributeValueDoubleQuotes(_f68023e5066c);
              break;

             case _bed2b259674e.InAttributeName:
              this.stateInAttributeName(_f68023e5066c);
              break;

             case _bed2b259674e.InCommentLike:
              this.stateInCommentLike(_f68023e5066c);
              break;

             case _bed2b259674e.InSpecialComment:
              this.stateInSpecialComment(_f68023e5066c);
              break;

             case _bed2b259674e.BeforeAttributeName:
              this.stateBeforeAttributeName(_f68023e5066c);
              break;

             case _bed2b259674e.InTagName:
              this.stateInTagName(_f68023e5066c);
              break;

             case _bed2b259674e.InClosingTagName:
              this.stateInClosingTagName(_f68023e5066c);
              break;

             case _bed2b259674e.BeforeTagName:
              this.stateBeforeTagName(_f68023e5066c);
              break;

             case _bed2b259674e.AfterAttributeName:
              this.stateAfterAttributeName(_f68023e5066c);
              break;

             case _bed2b259674e.InAttributeValueSq:
              this.stateInAttributeValueSingleQuotes(_f68023e5066c);
              break;

             case _bed2b259674e.BeforeAttributeValue:
              this.stateBeforeAttributeValue(_f68023e5066c);
              break;

             case _bed2b259674e.BeforeClosingTagName:
              this.stateBeforeClosingTagName(_f68023e5066c);
              break;

             case _bed2b259674e.AfterClosingTagName:
              this.stateAfterClosingTagName(_f68023e5066c);
              break;

             case _bed2b259674e.BeforeSpecialS:
              this.stateBeforeSpecialS(_f68023e5066c);
              break;

             case _bed2b259674e.BeforeSpecialT:
              this.stateBeforeSpecialT(_f68023e5066c);
              break;

             case _bed2b259674e.InAttributeValueNq:
              this.stateInAttributeValueNoQuotes(_f68023e5066c);
              break;

             case _bed2b259674e.InSelfClosingTag:
              this.stateInSelfClosingTag(_f68023e5066c);
              break;

             case _bed2b259674e.InDeclaration:
              this.stateInDeclaration(_f68023e5066c);
              break;

             case _bed2b259674e.BeforeDeclaration:
              this.stateBeforeDeclaration(_f68023e5066c);
              break;

             case _bed2b259674e.BeforeComment:
              this.stateBeforeComment(_f68023e5066c);
              break;

             case _bed2b259674e.InProcessingInstruction:
              this.stateInProcessingInstruction(_f68023e5066c);
              break;

             case _bed2b259674e.InEntity:
              this.stateInEntity();
            }
            this.index++;
          }
          this.cleanup();
        }
        finish() {
          this.state === _bed2b259674e.InEntity && (this.entityDecoder.end(), this.state = this.baseState), 
          this.handleTrailingData(), this.cbs.onend();
        }
        handleTrailingData() {
          let _f68023e5066c = this.buffer.length + this.offset;
          this.sectionStart >= _f68023e5066c || (this.state === _bed2b259674e.InCommentLike ? this.currentSequence === _44f0b1ed911f.CdataEnd ? this.cbs.oncdata(this.sectionStart, _f68023e5066c, 0) : this.cbs.oncomment(this.sectionStart, _f68023e5066c, 0) : this.state === _bed2b259674e.InTagName || this.state === _bed2b259674e.BeforeAttributeName || this.state === _bed2b259674e.BeforeAttributeValue || this.state === _bed2b259674e.AfterAttributeName || this.state === _bed2b259674e.InAttributeName || this.state === _bed2b259674e.InAttributeValueSq || this.state === _bed2b259674e.InAttributeValueDq || this.state === _bed2b259674e.InAttributeValueNq || this.state === _bed2b259674e.InClosingTagName || this.cbs.ontext(this.sectionStart, _f68023e5066c));
        }
        emitCodePoint(_f68023e5066c, _34f246cde5be) {
          this.baseState !== _bed2b259674e.Text && this.baseState !== _bed2b259674e.InSpecialTag ? (this.sectionStart < this.entityStart && this.cbs.onattribdata(this.sectionStart, this.entityStart), 
          this.sectionStart = this.entityStart + _34f246cde5be, this.index = this.sectionStart - 1, 
          this.cbs.onattribentity(_f68023e5066c)) : (this.sectionStart < this.entityStart && this.cbs.ontext(this.sectionStart, this.entityStart), 
          this.sectionStart = this.entityStart + _34f246cde5be, this.index = this.sectionStart - 1, 
          this.cbs.ontextentity(_f68023e5066c, this.sectionStart));
        }
      }
    },
    3808: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.d(_34f246cde5be, {
        RJ: () => _3d842a962905,
        iX: () => _68051092d66a.i
      });
      var _68051092d66a = _63a45e116e67(4645);
      _63a45e116e67(8866), _63a45e116e67(5645);
      var _3d842a962905 = _63a45e116e67(2743);
      _63a45e116e67(4993);
    },
    6570: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      let _68051092d66a, _3d842a962905, _2dbb4876c500, _4547843d0a40;
      _63a45e116e67.d(_34f246cde5be, {
        P2: () => f
      });
      let o = (_f68023e5066c, _34f246cde5be) => _34f246cde5be.some(_34f246cde5be => _f68023e5066c instanceof _34f246cde5be), _bed2b259674e = new WeakMap, _d73671e3fec6 = new WeakMap, _ef72ad0b9c92 = new WeakMap, _44f0b1ed911f = {
        get(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
          if (_f68023e5066c instanceof IDBTransaction) {
            if ("done" === _34f246cde5be) return _bed2b259674e.get(_f68023e5066c);
            if ("store" === _34f246cde5be) return _63a45e116e67.objectStoreNames[1] ? void 0 : _63a45e116e67.objectStore(_63a45e116e67.objectStoreNames[0]);
          }
          return h(_f68023e5066c[_34f246cde5be]);
        },
        set: (_f68023e5066c, _34f246cde5be, _63a45e116e67) => (_f68023e5066c[_34f246cde5be] = _63a45e116e67, 
        !0),
        has: (_f68023e5066c, _34f246cde5be) => _f68023e5066c instanceof IDBTransaction && ("done" === _34f246cde5be || "store" === _34f246cde5be) || _34f246cde5be in _f68023e5066c
      };
      function h(_f68023e5066c) {
        if (_f68023e5066c instanceof IDBRequest) {
          let _34f246cde5be;
          return _34f246cde5be = new Promise((_34f246cde5be, _63a45e116e67) => {
            let n = () => {
              _f68023e5066c.removeEventListener("success", i), _f68023e5066c.removeEventListener("error", a);
            }, i = () => {
              _34f246cde5be(h(_f68023e5066c.result)), n();
            }, a = () => {
              _63a45e116e67(_f68023e5066c.error), n();
            };
            _f68023e5066c.addEventListener("success", i), _f68023e5066c.addEventListener("error", a);
          }), _ef72ad0b9c92.set(_34f246cde5be, _f68023e5066c), _34f246cde5be;
        }
        if (_d73671e3fec6.has(_f68023e5066c)) return _d73671e3fec6.get(_f68023e5066c);
        let _34f246cde5be = function(_f68023e5066c) {
          if ("function" == typeof _f68023e5066c) return (_3d842a962905 || (_3d842a962905 = [ IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey ])).includes(_f68023e5066c) ? function(..._34f246cde5be) {
            return _f68023e5066c.apply(p(this), _34f246cde5be), h(this.request);
          } : function(..._34f246cde5be) {
            return h(_f68023e5066c.apply(p(this), _34f246cde5be));
          };
          return (_f68023e5066c instanceof IDBTransaction && function(_f68023e5066c) {
            if (_bed2b259674e.has(_f68023e5066c)) return;
            let _34f246cde5be = new Promise((_34f246cde5be, _63a45e116e67) => {
              let n = () => {
                _f68023e5066c.removeEventListener("complete", i), _f68023e5066c.removeEventListener("error", a), 
                _f68023e5066c.removeEventListener("abort", a);
              }, i = () => {
                _34f246cde5be(), n();
              }, a = () => {
                _63a45e116e67(_f68023e5066c.error || new DOMException("AbortError", "AbortError")), 
                n();
              };
              _f68023e5066c.addEventListener("complete", i), _f68023e5066c.addEventListener("error", a), 
              _f68023e5066c.addEventListener("abort", a);
            });
            _bed2b259674e.set(_f68023e5066c, _34f246cde5be);
          }(_f68023e5066c), o(_f68023e5066c, _68051092d66a || (_68051092d66a = [ IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction ]))) ? new Proxy(_f68023e5066c, _44f0b1ed911f) : _f68023e5066c;
        }(_f68023e5066c);
        return _34f246cde5be !== _f68023e5066c && (_d73671e3fec6.set(_f68023e5066c, _34f246cde5be), 
        _ef72ad0b9c92.set(_34f246cde5be, _f68023e5066c)), _34f246cde5be;
      }
      let p = _f68023e5066c => _ef72ad0b9c92.get(_f68023e5066c);
      function f(_f68023e5066c, _34f246cde5be, {blocked: _63a45e116e67, upgrade: _68051092d66a, blocking: _3d842a962905, terminated: _2dbb4876c500} = {}) {
        let _4547843d0a40 = indexedDB.open(_f68023e5066c, _34f246cde5be), _bed2b259674e = h(_4547843d0a40);
        return _68051092d66a && _4547843d0a40.addEventListener("upgradeneeded", _f68023e5066c => {
          _68051092d66a(h(_4547843d0a40.result), _f68023e5066c.oldVersion, _f68023e5066c.newVersion, h(_4547843d0a40.transaction), _f68023e5066c);
        }), _63a45e116e67 && _4547843d0a40.addEventListener("blocked", _f68023e5066c => _63a45e116e67(_f68023e5066c.oldVersion, _f68023e5066c.newVersion, _f68023e5066c)), 
        _bed2b259674e.then(_f68023e5066c => {
          _2dbb4876c500 && _f68023e5066c.addEventListener("close", () => _2dbb4876c500()), 
          _3d842a962905 && _f68023e5066c.addEventListener("versionchange", _f68023e5066c => _3d842a962905(_f68023e5066c.oldVersion, _f68023e5066c.newVersion, _f68023e5066c));
        }).catch(() => {}), _bed2b259674e;
      }
      let _0a3b7a57b594 = [ "get", "getKey", "getAll", "getAllKeys", "count" ], _3644bb2f5311 = [ "put", "add", "delete", "clear" ], _9acaff0e6a8f = new Map;
      function b(_f68023e5066c, _34f246cde5be) {
        if (!(_f68023e5066c instanceof IDBDatabase && !(_34f246cde5be in _f68023e5066c) && "string" == typeof _34f246cde5be)) return;
        if (_9acaff0e6a8f.get(_34f246cde5be)) return _9acaff0e6a8f.get(_34f246cde5be);
        let _63a45e116e67 = _34f246cde5be.replace(/FromIndex$/, ""), _68051092d66a = _34f246cde5be !== _63a45e116e67, _3d842a962905 = _3644bb2f5311.includes(_63a45e116e67);
        if (!(_63a45e116e67 in (_68051092d66a ? IDBIndex : IDBObjectStore).prototype) || !(_3d842a962905 || _0a3b7a57b594.includes(_63a45e116e67))) return;
        let a = async function(_f68023e5066c, ..._34f246cde5be) {
          let _2dbb4876c500 = this.transaction(_f68023e5066c, _3d842a962905 ? "readwrite" : "readonly"), _4547843d0a40 = _2dbb4876c500.store;
          return _68051092d66a && (_4547843d0a40 = _4547843d0a40.index(_34f246cde5be.shift())), 
          (await Promise.all([ _4547843d0a40[_63a45e116e67](..._34f246cde5be), _3d842a962905 && _2dbb4876c500.done ]))[0];
        };
        return _9acaff0e6a8f.set(_34f246cde5be, a), a;
      }
      _44f0b1ed911f = {
        ..._2dbb4876c500 = _44f0b1ed911f,
        get: (_f68023e5066c, _34f246cde5be, _63a45e116e67) => b(_f68023e5066c, _34f246cde5be) || _2dbb4876c500.get(_f68023e5066c, _34f246cde5be, _63a45e116e67),
        has: (_f68023e5066c, _34f246cde5be) => !!b(_f68023e5066c, _34f246cde5be) || _2dbb4876c500.has(_f68023e5066c, _34f246cde5be)
      };
      let _4a3d65fa17db = [ "continue", "continuePrimaryKey", "advance" ], _4794763b2606 = {}, _5e74b8896751 = new WeakMap, _e02169115a84 = new WeakMap, _1a5c44ebdc2b = {
        get(_f68023e5066c, _34f246cde5be) {
          if (!_4a3d65fa17db.includes(_34f246cde5be)) return _f68023e5066c[_34f246cde5be];
          let _63a45e116e67 = _4794763b2606[_34f246cde5be];
          return _63a45e116e67 || (_63a45e116e67 = _4794763b2606[_34f246cde5be] = function(..._f68023e5066c) {
            _5e74b8896751.set(this, _e02169115a84.get(this)[_34f246cde5be](..._f68023e5066c));
          }), _63a45e116e67;
        }
      };
      async function* T(..._f68023e5066c) {
        let _34f246cde5be = this;
        if (_34f246cde5be instanceof IDBCursor || (_34f246cde5be = await _34f246cde5be.openCursor(..._f68023e5066c)), 
        !_34f246cde5be) return;
        let _63a45e116e67 = new Proxy(_34f246cde5be, _1a5c44ebdc2b);
        for (_e02169115a84.set(_63a45e116e67, _34f246cde5be), _ef72ad0b9c92.set(_63a45e116e67, p(_34f246cde5be)); _34f246cde5be; ) yield _63a45e116e67, 
        _34f246cde5be = await (_5e74b8896751.get(_63a45e116e67) || _34f246cde5be.continue()), 
        _5e74b8896751.delete(_63a45e116e67);
      }
      function k(_f68023e5066c, _34f246cde5be) {
        return _34f246cde5be === Symbol.asyncIterator && o(_f68023e5066c, [ IDBIndex, IDBObjectStore, IDBCursor ]) || "iterate" === _34f246cde5be && o(_f68023e5066c, [ IDBIndex, IDBObjectStore ]);
      }
      _44f0b1ed911f = {
        ..._4547843d0a40 = _44f0b1ed911f,
        get: (_f68023e5066c, _34f246cde5be, _63a45e116e67) => k(_f68023e5066c, _34f246cde5be) ? T : _4547843d0a40.get(_f68023e5066c, _34f246cde5be, _63a45e116e67),
        has: (_f68023e5066c, _34f246cde5be) => k(_f68023e5066c, _34f246cde5be) || _4547843d0a40.has(_f68023e5066c, _34f246cde5be)
      };
    },
    1652: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      _63a45e116e67.d(_34f246cde5be, {
        N: () => n
      });
      function n() {
        return "10000000000".replace(/[018]/g, _f68023e5066c => (_f68023e5066c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> _f68023e5066c / 4).toString(16));
      }
    },
    3907: function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
      let _68051092d66a;
      _63a45e116e67.d(_34f246cde5be, {
        LW: () => b,
        QR: () => x
      });
      var _3d842a962905 = _63a45e116e67(1652);
      function a(_f68023e5066c, _34f246cde5be) {
        try {
          return _f68023e5066c.apply(this, _34f246cde5be);
        } catch (_f68023e5066c) {
          let _34f246cde5be, _63a45e116e67 = (_34f246cde5be = _68051092d66a.__externref_table_alloc(), 
          _68051092d66a.__wbindgen_export_2.set(_34f246cde5be, _f68023e5066c), _34f246cde5be);
          _68051092d66a.__wbindgen_exn_store(_63a45e116e67);
        }
      }
      let _2dbb4876c500 = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
      }) : {
        decode: () => {
          throw Error("TextDecoder not available");
        }
      };
      "undefined" != typeof TextDecoder && _2dbb4876c500.decode();
      let _4547843d0a40 = null;
      function l() {
        return (null === _4547843d0a40 || 0 === _4547843d0a40.byteLength) && (_4547843d0a40 = new Uint8Array(_68051092d66a.memory.buffer)), 
        _4547843d0a40;
      }
      function c(_f68023e5066c, _34f246cde5be) {
        return _f68023e5066c >>>= 0, _2dbb4876c500.decode(l().subarray(_f68023e5066c, _f68023e5066c + _34f246cde5be));
      }
      let _bed2b259674e = 0, _d73671e3fec6 = "undefined" != typeof TextEncoder ? new TextEncoder("utf-8") : {
        encode: () => {
          throw Error("TextEncoder not available");
        }
      }, _ef72ad0b9c92 = "function" == typeof _d73671e3fec6.encodeInto ? function(_f68023e5066c, _34f246cde5be) {
        return _d73671e3fec6.encodeInto(_f68023e5066c, _34f246cde5be);
      } : function(_f68023e5066c, _34f246cde5be) {
        let _63a45e116e67 = _d73671e3fec6.encode(_f68023e5066c);
        return _34f246cde5be.set(_63a45e116e67), {
          read: _f68023e5066c.length,
          written: _63a45e116e67.length
        };
      };
      function p(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
        if (void 0 === _63a45e116e67) {
          let _63a45e116e67 = _d73671e3fec6.encode(_f68023e5066c), _68051092d66a = _34f246cde5be(_63a45e116e67.length, 1) >>> 0;
          return l().subarray(_68051092d66a, _68051092d66a + _63a45e116e67.length).set(_63a45e116e67), 
          _bed2b259674e = _63a45e116e67.length, _68051092d66a;
        }
        let _68051092d66a = _f68023e5066c.length, _3d842a962905 = _34f246cde5be(_68051092d66a, 1) >>> 0, _2dbb4876c500 = l(), _4547843d0a40 = 0;
        for (;_4547843d0a40 < _68051092d66a; _4547843d0a40++) {
          let _34f246cde5be = _f68023e5066c.charCodeAt(_4547843d0a40);
          if (_34f246cde5be > 127) break;
          _2dbb4876c500[_3d842a962905 + _4547843d0a40] = _34f246cde5be;
        }
        if (_4547843d0a40 !== _68051092d66a) {
          0 !== _4547843d0a40 && (_f68023e5066c = _f68023e5066c.slice(_4547843d0a40)), _3d842a962905 = _63a45e116e67(_3d842a962905, _68051092d66a, _68051092d66a = _4547843d0a40 + 3 * _f68023e5066c.length, 1) >>> 0;
          let _34f246cde5be = _ef72ad0b9c92(_f68023e5066c, l().subarray(_3d842a962905 + _4547843d0a40, _3d842a962905 + _68051092d66a));
          _4547843d0a40 += _34f246cde5be.written, _3d842a962905 = _63a45e116e67(_3d842a962905, _68051092d66a, _4547843d0a40, 1) >>> 0;
        }
        return _bed2b259674e = _4547843d0a40, _3d842a962905;
      }
      let _44f0b1ed911f = null;
      function g() {
        return (null === _44f0b1ed911f || !0 === _44f0b1ed911f.buffer.detached || void 0 === _44f0b1ed911f.buffer.detached && _44f0b1ed911f.buffer !== _68051092d66a.memory.buffer) && (_44f0b1ed911f = new DataView(_68051092d66a.memory.buffer)), 
        _44f0b1ed911f;
      }
      function m(_f68023e5066c) {
        let _34f246cde5be = _68051092d66a.__wbindgen_export_2.get(_f68023e5066c);
        return _68051092d66a.__externref_table_dealloc(_f68023e5066c), _34f246cde5be;
      }
      let _0a3b7a57b594 = "undefined" == typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry(_f68023e5066c => _68051092d66a.__wbg_rewriter_free(_f68023e5066c >>> 0, 1));
      class b {
        __destroy_into_raw() {
          let _f68023e5066c = this.__wbg_ptr;
          return this.__wbg_ptr = 0, _0a3b7a57b594.unregister(this), _f68023e5066c;
        }
        free() {
          let _f68023e5066c = this.__destroy_into_raw();
          _68051092d66a.__wbg_rewriter_free(_f68023e5066c, 0);
        }
        rewrite_js(_f68023e5066c, _34f246cde5be, _63a45e116e67, _3d842a962905) {
          let _2dbb4876c500 = p(_f68023e5066c, _68051092d66a.__wbindgen_malloc, _68051092d66a.__wbindgen_realloc), _4547843d0a40 = _bed2b259674e, _d73671e3fec6 = p(_34f246cde5be, _68051092d66a.__wbindgen_malloc, _68051092d66a.__wbindgen_realloc), _ef72ad0b9c92 = _bed2b259674e, _44f0b1ed911f = p(_63a45e116e67, _68051092d66a.__wbindgen_malloc, _68051092d66a.__wbindgen_realloc), _0a3b7a57b594 = _bed2b259674e, _3644bb2f5311 = _68051092d66a.rewriter_rewrite_js(this.__wbg_ptr, _2dbb4876c500, _4547843d0a40, _d73671e3fec6, _ef72ad0b9c92, _44f0b1ed911f, _0a3b7a57b594, _3d842a962905);
          if (_3644bb2f5311[2]) throw m(_3644bb2f5311[1]);
          return m(_3644bb2f5311[0]);
        }
        rewrite_js_bytes(_f68023e5066c, _34f246cde5be, _63a45e116e67, _3d842a962905) {
          let _2dbb4876c500, _4547843d0a40 = (_2dbb4876c500 = (0, _68051092d66a.__wbindgen_malloc)(+_f68023e5066c.length, 1) >>> 0, 
          l().set(_f68023e5066c, _2dbb4876c500 / 1), _bed2b259674e = _f68023e5066c.length, 
          _2dbb4876c500), _d73671e3fec6 = _bed2b259674e, _ef72ad0b9c92 = p(_34f246cde5be, _68051092d66a.__wbindgen_malloc, _68051092d66a.__wbindgen_realloc), _44f0b1ed911f = _bed2b259674e, _0a3b7a57b594 = p(_63a45e116e67, _68051092d66a.__wbindgen_malloc, _68051092d66a.__wbindgen_realloc), _3644bb2f5311 = _bed2b259674e, _9acaff0e6a8f = _68051092d66a.rewriter_rewrite_js_bytes(this.__wbg_ptr, _4547843d0a40, _d73671e3fec6, _ef72ad0b9c92, _44f0b1ed911f, _0a3b7a57b594, _3644bb2f5311, _3d842a962905);
          if (_9acaff0e6a8f[2]) throw m(_9acaff0e6a8f[1]);
          return m(_9acaff0e6a8f[0]);
        }
        constructor(_f68023e5066c) {
          const _34f246cde5be = _68051092d66a.rewriter_new(_f68023e5066c);
          if (_34f246cde5be[2]) throw m(_34f246cde5be[1]);
          return this.__wbg_ptr = _34f246cde5be[0] >>> 0, _0a3b7a57b594.register(this, this.__wbg_ptr, this), 
          this;
        }
      }
      async function w(_f68023e5066c, _34f246cde5be) {
        if ("function" == typeof Response && _f68023e5066c instanceof Response) {
          if ("function" == typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(_f68023e5066c, _34f246cde5be);
          } catch (_34f246cde5be) {
            if ("application/wasm" != _f68023e5066c.headers.get("Content-Type")) console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", _34f246cde5be); else throw _34f246cde5be;
          }
          let _63a45e116e67 = await _f68023e5066c.arrayBuffer();
          return await WebAssembly.instantiate(_63a45e116e67, _34f246cde5be);
        }
        {
          let _63a45e116e67 = await WebAssembly.instantiate(_f68023e5066c, _34f246cde5be);
          return _63a45e116e67 instanceof WebAssembly.Instance ? {
            instance: _63a45e116e67,
            module: _f68023e5066c
          } : _63a45e116e67;
        }
      }
      function S() {
        let _f68023e5066c = {};
        return _f68023e5066c.wbg = {}, _f68023e5066c.wbg.__wbg_buffer_609cc3eee51ed158 = function(_f68023e5066c) {
          return _f68023e5066c.buffer;
        }, _f68023e5066c.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
          return a(function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
            return _f68023e5066c.call(_34f246cde5be, _63a45e116e67);
          }, arguments);
        }, _f68023e5066c.wbg.__wbg_call_833bed5770ea2041 = function() {
          return a(function(_f68023e5066c, _34f246cde5be, _63a45e116e67, _68051092d66a) {
            return _f68023e5066c.call(_34f246cde5be, _63a45e116e67, _68051092d66a);
          }, arguments);
        }, _f68023e5066c.wbg.__wbg_get_67b2ba62fc30de12 = function() {
          return a(function(_f68023e5066c, _34f246cde5be) {
            return Reflect.get(_f68023e5066c, _34f246cde5be);
          }, arguments);
        }, _f68023e5066c.wbg.__wbg_new_405e22f390576ce2 = function() {
          return {};
        }, _f68023e5066c.wbg.__wbg_new_78feb108b6472713 = function() {
          return [];
        }, _f68023e5066c.wbg.__wbg_new_9ffbe0a71eff35e3 = function() {
          return a(function(_f68023e5066c, _34f246cde5be) {
            return new URL(c(_f68023e5066c, _34f246cde5be));
          }, arguments);
        }, _f68023e5066c.wbg.__wbg_new_a12002a7f91c75be = function(_f68023e5066c) {
          return new Uint8Array(_f68023e5066c);
        }, _f68023e5066c.wbg.__wbg_newwithbase_161c299e7a34e2eb = function() {
          return a(function(_f68023e5066c, _34f246cde5be, _63a45e116e67, _68051092d66a) {
            return new URL(c(_f68023e5066c, _34f246cde5be), c(_63a45e116e67, _68051092d66a));
          }, arguments);
        }, _f68023e5066c.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
          return new Uint8Array(_f68023e5066c, _34f246cde5be >>> 0, _63a45e116e67 >>> 0);
        }, _f68023e5066c.wbg.__wbg_scramtag_3a255d78b157986d = function(_f68023e5066c) {
          let _34f246cde5be = p((0, _3d842a962905.N)(), _68051092d66a.__wbindgen_malloc, _68051092d66a.__wbindgen_realloc), _63a45e116e67 = _bed2b259674e;
          g().setInt32(_f68023e5066c + 4, _63a45e116e67, !0), g().setInt32(_f68023e5066c + 0, _34f246cde5be, !0);
        }, _f68023e5066c.wbg.__wbg_set_bb8cecf6a62b9f46 = function() {
          return a(function(_f68023e5066c, _34f246cde5be, _63a45e116e67) {
            return Reflect.set(_f68023e5066c, _34f246cde5be, _63a45e116e67);
          }, arguments);
        }, _f68023e5066c.wbg.__wbg_toString_5285597960676b7b = function(_f68023e5066c) {
          return _f68023e5066c.toString();
        }, _f68023e5066c.wbg.__wbg_toString_c813bbd34d063839 = function(_f68023e5066c) {
          return _f68023e5066c.toString();
        }, _f68023e5066c.wbg.__wbindgen_boolean_get = function(_f68023e5066c) {
          return "boolean" == typeof _f68023e5066c ? +!!_f68023e5066c : 2;
        }, _f68023e5066c.wbg.__wbindgen_error_new = function(_f68023e5066c, _34f246cde5be) {
          return Error(c(_f68023e5066c, _34f246cde5be));
        }, _f68023e5066c.wbg.__wbindgen_init_externref_table = function() {
          let _f68023e5066c = _68051092d66a.__wbindgen_export_2, _34f246cde5be = _f68023e5066c.grow(4);
          _f68023e5066c.set(0, void 0), _f68023e5066c.set(_34f246cde5be + 0, void 0), _f68023e5066c.set(_34f246cde5be + 1, null), 
          _f68023e5066c.set(_34f246cde5be + 2, !0), _f68023e5066c.set(_34f246cde5be + 3, !1);
        }, _f68023e5066c.wbg.__wbindgen_is_function = function(_f68023e5066c) {
          return "function" == typeof _f68023e5066c;
        }, _f68023e5066c.wbg.__wbindgen_memory = function() {
          return _68051092d66a.memory;
        }, _f68023e5066c.wbg.__wbindgen_string_get = function(_f68023e5066c, _34f246cde5be) {
          let _63a45e116e67 = "string" == typeof _34f246cde5be ? _34f246cde5be : void 0;
          var _3d842a962905 = null == _63a45e116e67 ? 0 : p(_63a45e116e67, _68051092d66a.__wbindgen_malloc, _68051092d66a.__wbindgen_realloc), _2dbb4876c500 = _bed2b259674e;
          g().setInt32(_f68023e5066c + 4, _2dbb4876c500, !0), g().setInt32(_f68023e5066c + 0, _3d842a962905, !0);
        }, _f68023e5066c.wbg.__wbindgen_string_new = function(_f68023e5066c, _34f246cde5be) {
          return c(_f68023e5066c, _34f246cde5be);
        }, _f68023e5066c.wbg.__wbindgen_throw = function(_f68023e5066c, _34f246cde5be) {
          throw Error(c(_f68023e5066c, _34f246cde5be));
        }, _f68023e5066c;
      }
      function v(_f68023e5066c, _34f246cde5be) {
        return _68051092d66a = _f68023e5066c.exports, E.__wbindgen_wasm_module = _34f246cde5be, 
        _44f0b1ed911f = null, _4547843d0a40 = null, _68051092d66a.__wbindgen_start(), _68051092d66a;
      }
      function x(_f68023e5066c) {
        if (void 0 !== _68051092d66a) return _68051092d66a;
        void 0 !== _f68023e5066c && (Object.getPrototypeOf(_f68023e5066c) === Object.prototype ? ({module: _f68023e5066c} = _f68023e5066c) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
        let _34f246cde5be = S();
        return _f68023e5066c instanceof WebAssembly.Module || (_f68023e5066c = new WebAssembly.Module(_f68023e5066c)), 
        v(new WebAssembly.Instance(_f68023e5066c, _34f246cde5be), _f68023e5066c);
      }
      async function E(_f68023e5066c) {
        if (void 0 !== _68051092d66a) return _68051092d66a;
        void 0 !== _f68023e5066c && (Object.getPrototypeOf(_f68023e5066c) === Object.prototype ? ({module_or_path: _f68023e5066c} = _f68023e5066c) : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), 
        void 0 === _f68023e5066c && (_f68023e5066c = new URL("wasm_bg.wasm", ""));
        let _34f246cde5be = S();
        ("string" == typeof _f68023e5066c || "function" == typeof Request && _f68023e5066c instanceof Request || "function" == typeof URL && _f68023e5066c instanceof URL) && (_f68023e5066c = fetch(_f68023e5066c));
        let {instance: _63a45e116e67, module: _3d842a962905} = await w(await _f68023e5066c, _34f246cde5be);
        return v(_63a45e116e67, _3d842a962905);
      }
    }
  }, _34f246cde5be = {};
  function r(_63a45e116e67) {
    var _68051092d66a = _34f246cde5be[_63a45e116e67];
    if (void 0 !== _68051092d66a) return _68051092d66a.exports;
    var _3d842a962905 = _34f246cde5be[_63a45e116e67] = {
      exports: {}
    };
    return _f68023e5066c[_63a45e116e67](_3d842a962905, _3d842a962905.exports, r), _3d842a962905.exports;
  }
  r.n = _f68023e5066c => {
    var _34f246cde5be = _f68023e5066c && _f68023e5066c.__esModule ? () => _f68023e5066c.default : () => _f68023e5066c;
    return r.d(_34f246cde5be, {
      a: _34f246cde5be
    }), _34f246cde5be;
  }, r.d = (_f68023e5066c, _34f246cde5be) => {
    for (var _63a45e116e67 in _34f246cde5be) r.o(_34f246cde5be, _63a45e116e67) && !r.o(_f68023e5066c, _63a45e116e67) && Object.defineProperty(_f68023e5066c, _63a45e116e67, {
      enumerable: !0,
      get: _34f246cde5be[_63a45e116e67]
    });
  }, r.o = (_f68023e5066c, _34f246cde5be) => Object.prototype.hasOwnProperty.call(_f68023e5066c, _34f246cde5be), 
  r.r = _f68023e5066c => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(_f68023e5066c, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(_f68023e5066c, "__esModule", {
      value: !0
    });
  }, globalThis.$studyjetRequire = function(_f68023e5066c) {
    return r(409)(_f68023e5066c);
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
