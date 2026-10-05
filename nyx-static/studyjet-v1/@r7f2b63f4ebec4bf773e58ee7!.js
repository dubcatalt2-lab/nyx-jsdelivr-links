(() => {
  var _35dc78c6b3fd = {
    4322: function(_35dc78c6b3fd) {
      var _fe6bed7cb749 = {
        decodeValues: !0,
        map: !1,
        silent: !1
      };
      function r(_35dc78c6b3fd) {
        return "string" == typeof _35dc78c6b3fd && !!_35dc78c6b3fd.trim();
      }
      function n(_35dc78c6b3fd, _6c6fe0dec40b) {
        var _678bf849a9d5, _8be84367f9d6, _6ef14f166da3, _d7b934a245ce, _c2df18134758 = _35dc78c6b3fd.split(";").filter(r), _50e0514e3a09 = (_678bf849a9d5 = _c2df18134758.shift(), 
        _8be84367f9d6 = "", _6ef14f166da3 = "", (_d7b934a245ce = _678bf849a9d5.split("=")).length > 1 ? (_8be84367f9d6 = _d7b934a245ce.shift(), 
        _6ef14f166da3 = _d7b934a245ce.join("=")) : _6ef14f166da3 = _678bf849a9d5, {
          name: _8be84367f9d6,
          value: _6ef14f166da3
        }), _713844858620 = _50e0514e3a09.name, _eef48ff38eca = _50e0514e3a09.value;
        _6c6fe0dec40b = _6c6fe0dec40b ? Object.assign({}, _fe6bed7cb749, _6c6fe0dec40b) : _fe6bed7cb749;
        try {
          _eef48ff38eca = _6c6fe0dec40b.decodeValues ? decodeURIComponent(_eef48ff38eca) : _eef48ff38eca;
        } catch (_35dc78c6b3fd) {
          console.error("set-cookie-parser encountered an error while decoding a cookie with value '" + _eef48ff38eca + "'. Set options.decodeValues to false to disable this feature.", _35dc78c6b3fd);
        }
        var _9281ea692b11 = {
          name: _713844858620,
          value: _eef48ff38eca
        };
        return _c2df18134758.forEach(function(_35dc78c6b3fd) {
          var _fe6bed7cb749 = _35dc78c6b3fd.split("="), _6c6fe0dec40b = _fe6bed7cb749.shift().trimLeft().toLowerCase(), _678bf849a9d5 = _fe6bed7cb749.join("=");
          "expires" === _6c6fe0dec40b ? _9281ea692b11.expires = new Date(_678bf849a9d5) : "max-age" === _6c6fe0dec40b ? _9281ea692b11.maxAge = parseInt(_678bf849a9d5, 10) : "secure" === _6c6fe0dec40b ? _9281ea692b11.secure = !0 : "httponly" === _6c6fe0dec40b ? _9281ea692b11.httpOnly = !0 : "samesite" === _6c6fe0dec40b ? _9281ea692b11.sameSite = _678bf849a9d5 : "partitioned" === _6c6fe0dec40b ? _9281ea692b11.partitioned = !0 : _9281ea692b11[_6c6fe0dec40b] = _678bf849a9d5;
        }), _9281ea692b11;
      }
      function i(_35dc78c6b3fd, _6c6fe0dec40b) {
        if (_6c6fe0dec40b = _6c6fe0dec40b ? Object.assign({}, _fe6bed7cb749, _6c6fe0dec40b) : _fe6bed7cb749, 
        !_35dc78c6b3fd) if (!_6c6fe0dec40b.map) return []; else return {};
        if (_35dc78c6b3fd.headers) if ("function" == typeof _35dc78c6b3fd.headers.getSetCookie) _35dc78c6b3fd = _35dc78c6b3fd.headers.getSetCookie(); else if (_35dc78c6b3fd.headers["set-cookie"]) _35dc78c6b3fd = _35dc78c6b3fd.headers["set-cookie"]; else {
          var _678bf849a9d5 = _35dc78c6b3fd.headers[Object.keys(_35dc78c6b3fd.headers).find(function(_35dc78c6b3fd) {
            return "set-cookie" === _35dc78c6b3fd.toLowerCase();
          })];
          _678bf849a9d5 || !_35dc78c6b3fd.headers.cookie || _6c6fe0dec40b.silent || console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."), 
          _35dc78c6b3fd = _678bf849a9d5;
        }
        return (Array.isArray(_35dc78c6b3fd) || (_35dc78c6b3fd = [ _35dc78c6b3fd ]), _6c6fe0dec40b.map) ? _35dc78c6b3fd.filter(r).reduce(function(_35dc78c6b3fd, _fe6bed7cb749) {
          var _678bf849a9d5 = n(_fe6bed7cb749, _6c6fe0dec40b);
          return _35dc78c6b3fd[_678bf849a9d5.name] = _678bf849a9d5, _35dc78c6b3fd;
        }, {}) : _35dc78c6b3fd.filter(r).map(function(_35dc78c6b3fd) {
          return n(_35dc78c6b3fd, _6c6fe0dec40b);
        });
      }
      _35dc78c6b3fd.exports = i, _35dc78c6b3fd.exports.parse = i, _35dc78c6b3fd.exports.parseString = n, 
      _35dc78c6b3fd.exports.splitCookiesString = function(_35dc78c6b3fd) {
        if (Array.isArray(_35dc78c6b3fd)) return _35dc78c6b3fd;
        if ("string" != typeof _35dc78c6b3fd) return [];
        var _fe6bed7cb749, _6c6fe0dec40b, _678bf849a9d5, _8be84367f9d6, _6ef14f166da3, _d7b934a245ce = [], _c2df18134758 = 0;
        function l() {
          for (;_c2df18134758 < _35dc78c6b3fd.length && /\s/.test(_35dc78c6b3fd.charAt(_c2df18134758)); ) _c2df18134758 += 1;
          return _c2df18134758 < _35dc78c6b3fd.length;
        }
        for (;_c2df18134758 < _35dc78c6b3fd.length; ) {
          for (_fe6bed7cb749 = _c2df18134758, _6ef14f166da3 = !1; l(); ) if ("," === (_6c6fe0dec40b = _35dc78c6b3fd.charAt(_c2df18134758))) {
            for (_678bf849a9d5 = _c2df18134758, _c2df18134758 += 1, l(), _8be84367f9d6 = _c2df18134758; _c2df18134758 < _35dc78c6b3fd.length && "=" !== (_6c6fe0dec40b = _35dc78c6b3fd.charAt(_c2df18134758)) && ";" !== _6c6fe0dec40b && "," !== _6c6fe0dec40b; ) _c2df18134758 += 1;
            _c2df18134758 < _35dc78c6b3fd.length && "=" === _35dc78c6b3fd.charAt(_c2df18134758) ? (_6ef14f166da3 = !0, 
            _c2df18134758 = _8be84367f9d6, _d7b934a245ce.push(_35dc78c6b3fd.substring(_fe6bed7cb749, _678bf849a9d5)), 
            _fe6bed7cb749 = _c2df18134758) : _c2df18134758 = _678bf849a9d5 + 1;
          } else _c2df18134758 += 1;
          (!_6ef14f166da3 || _c2df18134758 >= _35dc78c6b3fd.length) && _d7b934a245ce.push(_35dc78c6b3fd.substring(_fe6bed7cb749, _35dc78c6b3fd.length));
        }
        return _d7b934a245ce;
      };
    },
    7302: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      var _678bf849a9d5 = {
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
      function i(_35dc78c6b3fd) {
        return _6c6fe0dec40b(a(_35dc78c6b3fd));
      }
      function a(_35dc78c6b3fd) {
        if (!_6c6fe0dec40b.o(_678bf849a9d5, _35dc78c6b3fd)) {
          var _fe6bed7cb749 = Error("Cannot find module '" + _35dc78c6b3fd + "'");
          throw _fe6bed7cb749.code = "MODULE_NOT_FOUND", _fe6bed7cb749;
        }
        return _678bf849a9d5[_35dc78c6b3fd];
      }
      i.keys = function() {
        return Object.keys(_678bf849a9d5);
      }, i.resolve = a, _35dc78c6b3fd.exports = i, i.id = 7302;
    },
    409: function(_35dc78c6b3fd) {
      function t(_35dc78c6b3fd) {
        var _fe6bed7cb749 = Error("Cannot find module '" + _35dc78c6b3fd + "'");
        throw _fe6bed7cb749.code = "MODULE_NOT_FOUND", _fe6bed7cb749;
      }
      t.keys = () => [], t.resolve = t, t.id = 409, _35dc78c6b3fd.exports = t;
    },
    336: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        StudyJetClient: () => g
      });
      var _678bf849a9d5 = _6c6fe0dec40b(2794), _8be84367f9d6 = _6c6fe0dec40b(94), _6ef14f166da3 = _6c6fe0dec40b(3696), _d7b934a245ce = _6c6fe0dec40b(581), _c2df18134758 = _6c6fe0dec40b(1862), _50e0514e3a09 = _6c6fe0dec40b(1472), _713844858620 = _6c6fe0dec40b(37), _eef48ff38eca = _6c6fe0dec40b(3831), _9281ea692b11 = _6c6fe0dec40b(1323), _539a9fec78eb = _6c6fe0dec40b(1229), _f78db6fdbb58 = _6c6fe0dec40b(4110), _4f8d3fc53b00 = _6c6fe0dec40b(8665).A;
      class g {
        global;
        locationProxy;
        serviceWorker;
        bare;
        natives;
        descriptors;
        wrapfn;
        cookieStore=new _eef48ff38eca.k;
        eventcallbacks=new Map;
        meta;
        box;
        constructor(_35dc78c6b3fd) {
          if (this.global = _35dc78c6b3fd, _678bf849a9d5.pX in _35dc78c6b3fd) throw console.error("attempted to initialize a studyjet client, but one is already loaded - this is very bad"), 
          Error();
          if (_9281ea692b11.iswindow) {
            try {
              _678bf849a9d5.pX in _35dc78c6b3fd.parent && (this.box = _35dc78c6b3fd.parent[_678bf849a9d5.pX].box);
            } catch {}
            try {
              _678bf849a9d5.pX in _35dc78c6b3fd.top && (this.box = _35dc78c6b3fd.top[_678bf849a9d5.pX].box);
            } catch {}
            try {
              _35dc78c6b3fd.opener && _678bf849a9d5.pX in _35dc78c6b3fd.opener && (this.box = _35dc78c6b3fd.opener[_678bf849a9d5.pX].box);
            } catch {}
            this.box || (_4f8d3fc53b00.warn("Creating SingletonBox"), this.box = new _539a9fec78eb.SingletonBox(this));
          } else this.box = new _539a9fec78eb.SingletonBox(this);
          this.box.registerClient(this, _35dc78c6b3fd), _9281ea692b11.iswindow ? this.bare = new _f78db6fdbb58.Ay : this.bare = new _f78db6fdbb58.Ay(new Promise(_35dc78c6b3fd => {
            addEventListener("message", ({data: _fe6bed7cb749}) => {
              "object" == typeof _fe6bed7cb749 && "$studyjet$type" in _fe6bed7cb749 && "baremuxinit" === _fe6bed7cb749.$studyjet$type && _35dc78c6b3fd(_fe6bed7cb749.port);
            });
          })), this.serviceWorker = this.global.navigator.serviceWorker, _9281ea692b11.iswindow && (_35dc78c6b3fd.document[_678bf849a9d5.pX] = this), 
          this.wrapfn = (0, _d7b934a245ce.createWrapFn)(this, _35dc78c6b3fd), this.natives = {
            store: new Proxy({}, {
              get: (_35dc78c6b3fd, _fe6bed7cb749) => {
                if (_fe6bed7cb749 in _35dc78c6b3fd) return _35dc78c6b3fd[_fe6bed7cb749];
                let _6c6fe0dec40b = _fe6bed7cb749.split("."), _678bf849a9d5 = _6c6fe0dec40b.pop(), _8be84367f9d6 = _6c6fe0dec40b.reduce((_35dc78c6b3fd, _fe6bed7cb749) => _35dc78c6b3fd?.[_fe6bed7cb749], this.global);
                if (!_8be84367f9d6) return;
                let _6ef14f166da3 = Reflect.get(_8be84367f9d6, _678bf849a9d5);
                return _35dc78c6b3fd[_fe6bed7cb749] = _6ef14f166da3, _35dc78c6b3fd[_fe6bed7cb749];
              }
            }),
            construct(_35dc78c6b3fd, ..._fe6bed7cb749) {
              let _6c6fe0dec40b = this.store[_35dc78c6b3fd];
              return _6c6fe0dec40b ? new _6c6fe0dec40b(..._fe6bed7cb749) : null;
            },
            call(_35dc78c6b3fd, _fe6bed7cb749, ..._6c6fe0dec40b) {
              let _678bf849a9d5 = this.store[_35dc78c6b3fd];
              return _678bf849a9d5 ? _678bf849a9d5.call(_fe6bed7cb749, ..._6c6fe0dec40b) : null;
            }
          }, this.descriptors = {
            store: new Proxy({}, {
              get: (_35dc78c6b3fd, _6c6fe0dec40b) => {
                if (_6c6fe0dec40b in _35dc78c6b3fd) return _35dc78c6b3fd[_6c6fe0dec40b];
                let _678bf849a9d5 = _6c6fe0dec40b.split("."), _8be84367f9d6 = _678bf849a9d5.pop(), _6ef14f166da3 = _678bf849a9d5.reduce((_35dc78c6b3fd, _fe6bed7cb749) => _35dc78c6b3fd?.[_fe6bed7cb749], this.global);
                if (!_6ef14f166da3) return;
                let _d7b934a245ce = _fe6bed7cb749.natives.call("Object.getOwnPropertyDescriptor", null, _6ef14f166da3, _8be84367f9d6);
                return _35dc78c6b3fd[_6c6fe0dec40b] = _d7b934a245ce, _35dc78c6b3fd[_6c6fe0dec40b];
              }
            }),
            get(_35dc78c6b3fd, _fe6bed7cb749) {
              let _6c6fe0dec40b = this.store[_35dc78c6b3fd];
              return _6c6fe0dec40b ? _6c6fe0dec40b.get.call(_fe6bed7cb749) : null;
            },
            set(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
              let _678bf849a9d5 = this.store[_35dc78c6b3fd];
              if (!_678bf849a9d5) return null;
              _678bf849a9d5.set.call(_fe6bed7cb749, _6c6fe0dec40b);
            }
          };
          const _fe6bed7cb749 = this;
          this.meta = {
            get origin() {
              return _fe6bed7cb749.url;
            },
            get base() {
              if (_9281ea692b11.iswindow) {
                const _35dc78c6b3fd = _fe6bed7cb749.natives.call("Document.prototype.querySelector", _fe6bed7cb749.global.document, "base");
                if (_35dc78c6b3fd) {
                  let _6c6fe0dec40b = _35dc78c6b3fd.getAttribute("href");
                  if (!_6c6fe0dec40b) return _fe6bed7cb749.url;
                  const _678bf849a9d5 = _6c6fe0dec40b.indexOf("#");
                  if (!(_6c6fe0dec40b = _6c6fe0dec40b.substring(0, -1 === _678bf849a9d5 ? void 0 : _678bf849a9d5))) return _fe6bed7cb749.url;
                  return new URL(_6c6fe0dec40b, _fe6bed7cb749.url.origin);
                }
              }
              return _fe6bed7cb749.url;
            },
            get topFrameName() {
              if (!_9281ea692b11.iswindow) throw Error("topFrameName was called from a worker?");
              let _35dc78c6b3fd = _fe6bed7cb749.global;
              if (_35dc78c6b3fd.parent.window == _35dc78c6b3fd.window) return null;
              for (;_35dc78c6b3fd.parent.window !== _35dc78c6b3fd.window && _35dc78c6b3fd.parent.window[_678bf849a9d5.pX]; ) _35dc78c6b3fd = _35dc78c6b3fd.parent.window;
              const _6c6fe0dec40b = _35dc78c6b3fd[_678bf849a9d5.pX].descriptors.get("window.frameElement", _35dc78c6b3fd);
              if (!_6c6fe0dec40b) return null;
              if (!_6c6fe0dec40b.name) return console.error("YOU NEED TO USE `new StudyJetFrame()`! DIRECT IFRAMES WILL NOT WORK"), 
              null;
              return _6c6fe0dec40b.name;
            },
            get parentFrameName() {
              if (!_9281ea692b11.iswindow) throw Error("parentFrameName was called from a worker?");
              if (_fe6bed7cb749.global.parent.window == _fe6bed7cb749.global.window) return null;
              let _35dc78c6b3fd = _fe6bed7cb749.global.parent.window;
              if (_35dc78c6b3fd[_678bf849a9d5.pX]) {
                const _fe6bed7cb749 = _35dc78c6b3fd[_678bf849a9d5.pX].descriptors.get("window.frameElement", _35dc78c6b3fd);
                if (!_fe6bed7cb749) return null;
                if (!_fe6bed7cb749.name) return console.error("YOU NEED TO USE `new StudyJetFrame()`! DIRECT IFRAMES WILL NOT WORK"), 
                null;
                return _fe6bed7cb749.name;
              }
              {
                const _35dc78c6b3fd = _fe6bed7cb749.descriptors.get("window.frameElement", _fe6bed7cb749.global);
                if (!_35dc78c6b3fd.name) return console.error("YOU NEED TO USE `new StudyJetFrame()`! DIRECT IFRAMES WILL NOT WORK"), 
                null;
                return _35dc78c6b3fd.name;
              }
            }
          }, this.locationProxy = (0, _6ef14f166da3.createLocationProxy)(this, _35dc78c6b3fd), 
          _35dc78c6b3fd[_678bf849a9d5.pX] = this;
        }
        get frame() {
          if (!_9281ea692b11.iswindow) return null;
          let _35dc78c6b3fd = this.descriptors.get("window.frameElement", this.global);
          if (!_35dc78c6b3fd) return null;
          let _fe6bed7cb749 = _35dc78c6b3fd[_678bf849a9d5.zr];
          if (!_fe6bed7cb749) {
            let _35dc78c6b3fd = this.global.window;
            for (;_35dc78c6b3fd.parent !== _35dc78c6b3fd; ) {
              let _fe6bed7cb749 = _35dc78c6b3fd[_678bf849a9d5.pX].descriptors.get("window.frameElement", _35dc78c6b3fd);
              if (!_fe6bed7cb749) return null;
              if (_fe6bed7cb749 && _fe6bed7cb749[_678bf849a9d5.zr]) return _fe6bed7cb749[_678bf849a9d5.zr];
              _35dc78c6b3fd = _35dc78c6b3fd.parent.window;
            }
          }
          return _fe6bed7cb749;
        }
        get isSubframe() {
          if (!_9281ea692b11.iswindow) return !1;
          let _35dc78c6b3fd = this.descriptors.get("window.frameElement", this.global);
          return !!_35dc78c6b3fd && !_35dc78c6b3fd[_678bf849a9d5.zr];
        }
        loadcookies(_35dc78c6b3fd) {
          this.cookieStore.load(_35dc78c6b3fd);
        }
        hook() {
          let _35dc78c6b3fd = _6c6fe0dec40b(7302), _fe6bed7cb749 = [];
          for (let _6c6fe0dec40b of _35dc78c6b3fd.keys()) {
            let _678bf849a9d5 = _35dc78c6b3fd(_6c6fe0dec40b);
            _6c6fe0dec40b.endsWith(".ts") && (_6c6fe0dec40b.startsWith("./dom/") && "window" in this.global || _6c6fe0dec40b.startsWith("./worker/") && "WorkerGlobalScope" in this.global || _6c6fe0dec40b.startsWith("./shared/")) && _fe6bed7cb749.push(_678bf849a9d5);
          }
          for (let _35dc78c6b3fd of (_fe6bed7cb749.sort((_35dc78c6b3fd, _fe6bed7cb749) => (_35dc78c6b3fd.order || 0) - (_fe6bed7cb749.order || 0)), 
          _fe6bed7cb749)) !_35dc78c6b3fd.enabled || _35dc78c6b3fd.enabled(this) ? _35dc78c6b3fd.default(this, this.global) : _35dc78c6b3fd.disabled && _35dc78c6b3fd.disabled(this, this.global);
        }
        get url() {
          return new URL((0, _50e0514e3a09.v2)(this.global.location.href));
        }
        set url(_35dc78c6b3fd) {
          _35dc78c6b3fd instanceof URL && (_35dc78c6b3fd = _35dc78c6b3fd.toString());
          let _fe6bed7cb749 = new _c2df18134758.NavigateEvent(_35dc78c6b3fd);
          this.frame && this.frame.dispatchEvent(_fe6bed7cb749), _fe6bed7cb749.defaultPrevented || (this.global.location.href = (0, 
          _50e0514e3a09.Oy)(_fe6bed7cb749.url, this.meta));
        }
        Proxy(_35dc78c6b3fd, _fe6bed7cb749) {
          if (Array.isArray(_35dc78c6b3fd)) {
            for (let _6c6fe0dec40b of _35dc78c6b3fd) this.Proxy(_6c6fe0dec40b, _fe6bed7cb749);
            return;
          }
          let _6c6fe0dec40b = _35dc78c6b3fd.split("."), _678bf849a9d5 = _6c6fe0dec40b.pop(), _8be84367f9d6 = _6c6fe0dec40b.reduce((_35dc78c6b3fd, _fe6bed7cb749) => _35dc78c6b3fd?.[_fe6bed7cb749], this.global);
          if (_8be84367f9d6) {
            if (!(_35dc78c6b3fd in this.natives.store)) {
              let _fe6bed7cb749 = Reflect.get(_8be84367f9d6, _678bf849a9d5);
              this.natives.store[_35dc78c6b3fd] = _fe6bed7cb749;
            }
            this.RawProxy(_8be84367f9d6, _678bf849a9d5, _fe6bed7cb749);
          }
        }
        RawProxy(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
          if (!_35dc78c6b3fd || !_fe6bed7cb749 || !Reflect.has(_35dc78c6b3fd, _fe6bed7cb749)) return;
          let _678bf849a9d5 = Reflect.get(_35dc78c6b3fd, _fe6bed7cb749);
          delete _35dc78c6b3fd[_fe6bed7cb749];
          let _6ef14f166da3 = {};
          _6c6fe0dec40b.construct && (_6ef14f166da3.construct = function(_35dc78c6b3fd, _fe6bed7cb749, _678bf849a9d5) {
            let _8be84367f9d6, _6ef14f166da3 = !1, _d7b934a245ce = {
              fn: _35dc78c6b3fd,
              this: null,
              args: _fe6bed7cb749,
              newTarget: _678bf849a9d5,
              return: _35dc78c6b3fd => {
                _6ef14f166da3 = !0, _8be84367f9d6 = _35dc78c6b3fd;
              },
              call: () => (_6ef14f166da3 = !0, _8be84367f9d6 = Reflect.construct(_d7b934a245ce.fn, _d7b934a245ce.args, _d7b934a245ce.newTarget))
            };
            return (_6c6fe0dec40b.construct(_d7b934a245ce), _6ef14f166da3) ? _8be84367f9d6 : Reflect.construct(_d7b934a245ce.fn, _d7b934a245ce.args, _d7b934a245ce.newTarget);
          }), _6c6fe0dec40b.apply && (_6ef14f166da3.apply = (_35dc78c6b3fd, _fe6bed7cb749, _678bf849a9d5) => {
            let _8be84367f9d6, _6ef14f166da3 = !1, _d7b934a245ce = {
              fn: _35dc78c6b3fd,
              this: _fe6bed7cb749,
              args: _678bf849a9d5,
              newTarget: null,
              return: _35dc78c6b3fd => {
                _6ef14f166da3 = !0, _8be84367f9d6 = _35dc78c6b3fd;
              },
              call: () => (_6ef14f166da3 = !0, _8be84367f9d6 = Reflect.apply(_d7b934a245ce.fn, _d7b934a245ce.this, _d7b934a245ce.args))
            }, _c2df18134758 = Error.prepareStackTrace;
            Error.prepareStackTrace = function(_35dc78c6b3fd, _fe6bed7cb749) {
              if (_fe6bed7cb749[0].getFileName() && !_fe6bed7cb749[0].getFileName().startsWith(location.origin + _713844858620.$W.prefix)) return {
                stack: _35dc78c6b3fd.stack
              };
            };
            try {
              _6c6fe0dec40b.apply(_d7b934a245ce);
            } catch (_35dc78c6b3fd) {
              if (_35dc78c6b3fd instanceof Error) if (_35dc78c6b3fd.stack instanceof Object) {
                if (_35dc78c6b3fd.stack = _35dc78c6b3fd.stack.stack, console.error("ERROR FROM STUDYJET INTERNALS", _35dc78c6b3fd), 
                !(0, _713844858620.U5)("allowFailedIntercepts", this.url)) throw _35dc78c6b3fd;
              } else throw _35dc78c6b3fd; else throw _35dc78c6b3fd;
            }
            return (Error.prepareStackTrace = _c2df18134758, _6ef14f166da3) ? _8be84367f9d6 : Reflect.apply(_d7b934a245ce.fn, _d7b934a245ce.this, _d7b934a245ce.args);
          }), _6ef14f166da3.getOwnPropertyDescriptor = _8be84367f9d6.getOwnPropertyDescriptorHandler, 
          _35dc78c6b3fd[_fe6bed7cb749] = new Proxy(_678bf849a9d5, _6ef14f166da3);
        }
        Trap(_35dc78c6b3fd, _fe6bed7cb749) {
          if (Array.isArray(_35dc78c6b3fd)) {
            for (let _6c6fe0dec40b of _35dc78c6b3fd) this.Trap(_6c6fe0dec40b, _fe6bed7cb749);
            return;
          }
          let _6c6fe0dec40b = _35dc78c6b3fd.split("."), _678bf849a9d5 = _6c6fe0dec40b.pop(), _8be84367f9d6 = _6c6fe0dec40b.reduce((_35dc78c6b3fd, _fe6bed7cb749) => _35dc78c6b3fd?.[_fe6bed7cb749], this.global);
          if (!_8be84367f9d6) return;
          let _6ef14f166da3 = this.natives.call("Object.getOwnPropertyDescriptor", null, _8be84367f9d6, _678bf849a9d5);
          return this.descriptors.store[_35dc78c6b3fd] = _6ef14f166da3, this.RawTrap(_8be84367f9d6, _678bf849a9d5, _fe6bed7cb749);
        }
        RawTrap(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
          if (!_35dc78c6b3fd || !_fe6bed7cb749 || !Reflect.has(_35dc78c6b3fd, _fe6bed7cb749)) return;
          let _678bf849a9d5 = this.natives.call("Object.getOwnPropertyDescriptor", null, _35dc78c6b3fd, _fe6bed7cb749), _8be84367f9d6 = {
            this: null,
            get: function() {
              return _678bf849a9d5 && _678bf849a9d5.get.call(this.this);
            },
            set: function(_35dc78c6b3fd) {
              _678bf849a9d5 && _678bf849a9d5.set.call(this.this, _35dc78c6b3fd);
            }
          };
          delete _35dc78c6b3fd[_fe6bed7cb749];
          let _6ef14f166da3 = {};
          return _6c6fe0dec40b.get ? _6ef14f166da3.get = function() {
            return _8be84367f9d6.this = this, _6c6fe0dec40b.get(_8be84367f9d6);
          } : _678bf849a9d5?.get && (_6ef14f166da3.get = _678bf849a9d5.get), _6c6fe0dec40b.set ? _6ef14f166da3.set = function(_35dc78c6b3fd) {
            _8be84367f9d6.this = this, _6c6fe0dec40b.set(_8be84367f9d6, _35dc78c6b3fd);
          } : _678bf849a9d5?.set && (_6ef14f166da3.set = _678bf849a9d5.set), _6c6fe0dec40b.enumerable ? _6ef14f166da3.enumerable = _6c6fe0dec40b.enumerable : _678bf849a9d5?.enumerable && (_6ef14f166da3.enumerable = _678bf849a9d5.enumerable), 
          _6c6fe0dec40b.configurable ? _6ef14f166da3.configurable = _6c6fe0dec40b.configurable : _678bf849a9d5?.configurable && (_6ef14f166da3.configurable = _678bf849a9d5.configurable), 
          Object.defineProperty(_35dc78c6b3fd, _fe6bed7cb749, _6ef14f166da3), _678bf849a9d5;
        }
      }
    },
    1077: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      function n(_35dc78c6b3fd, _fe6bed7cb749) {
        _35dc78c6b3fd.Trap("Element.prototype.attributes", {
          get(_35dc78c6b3fd) {
            let _fe6bed7cb749 = _35dc78c6b3fd.get(), _6c6fe0dec40b = new Proxy(_fe6bed7cb749, {
              get(_35dc78c6b3fd, _678bf849a9d5, _8be84367f9d6) {
                let _6ef14f166da3 = Reflect.get(_35dc78c6b3fd, _678bf849a9d5);
                return "length" === _678bf849a9d5 ? Object.keys(_6c6fe0dec40b).length : "getNamedItem" === _678bf849a9d5 ? _35dc78c6b3fd => _6c6fe0dec40b[_35dc78c6b3fd] : "getNamedItemNS" === _678bf849a9d5 ? (_35dc78c6b3fd, _fe6bed7cb749) => _6c6fe0dec40b[`${_35dc78c6b3fd}:${_fe6bed7cb749}`] : _678bf849a9d5 in NamedNodeMap.prototype && "function" == typeof _6ef14f166da3 ? new Proxy(_6ef14f166da3, {
                  apply: (_35dc78c6b3fd, _678bf849a9d5, _8be84367f9d6) => _678bf849a9d5 === _6c6fe0dec40b ? Reflect.apply(_35dc78c6b3fd, _fe6bed7cb749, _8be84367f9d6) : Reflect.apply(_35dc78c6b3fd, _678bf849a9d5, _8be84367f9d6)
                }) : "string" != typeof _678bf849a9d5 && "number" != typeof _678bf849a9d5 || isNaN(Number(_678bf849a9d5)) ? this.has(_35dc78c6b3fd, _678bf849a9d5) ? _6ef14f166da3 : void 0 : _fe6bed7cb749[Object.keys(_6c6fe0dec40b)[_678bf849a9d5]];
              },
              ownKeys(_35dc78c6b3fd) {
                return Reflect.ownKeys(_35dc78c6b3fd).filter(_fe6bed7cb749 => this.has(_35dc78c6b3fd, _fe6bed7cb749));
              },
              has: (_35dc78c6b3fd, _6c6fe0dec40b) => "symbol" == typeof _6c6fe0dec40b ? Reflect.has(_35dc78c6b3fd, _6c6fe0dec40b) : !(_6c6fe0dec40b.startsWith("studyjet-attr-") || _fe6bed7cb749[_6c6fe0dec40b]?.name?.startsWith("studyjet-attr-")) && Reflect.has(_35dc78c6b3fd, _6c6fe0dec40b)
            });
            return _6c6fe0dec40b;
          }
        }), _35dc78c6b3fd.Trap([ "Attr.prototype.value", "Attr.prototype.nodeValue" ], {
          get: _35dc78c6b3fd => _35dc78c6b3fd.this?.ownerElement ? _35dc78c6b3fd.this.ownerElement.getAttribute(_35dc78c6b3fd.this.name) : _35dc78c6b3fd.get(),
          set: (_35dc78c6b3fd, _fe6bed7cb749) => _35dc78c6b3fd.this?.ownerElement ? _35dc78c6b3fd.this.ownerElement.setAttribute(_35dc78c6b3fd.this.name, _fe6bed7cb749) : _35dc78c6b3fd.set(_fe6bed7cb749)
        });
      }
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        default: () => n
      });
    },
    7430: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        default: () => i
      });
      var _678bf849a9d5 = _6c6fe0dec40b(1472);
      function i(_35dc78c6b3fd, _fe6bed7cb749) {
        _35dc78c6b3fd.Proxy("Navigator.prototype.sendBeacon", {
          apply(_fe6bed7cb749) {
            _fe6bed7cb749.args[0] = (0, _678bf849a9d5.Oy)(_fe6bed7cb749.args[0], _35dc78c6b3fd.meta);
          }
        });
      }
    },
    9116: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      function n(_35dc78c6b3fd, _fe6bed7cb749) {
        _35dc78c6b3fd.serviceWorker.addEventListener("message", ({data: _fe6bed7cb749}) => {
          if ("studyjet$type" in _fe6bed7cb749 && "cookie" === _fe6bed7cb749.studyjet$type) {
            _35dc78c6b3fd.cookieStore.setCookies([ _fe6bed7cb749.cookie ], new URL(_fe6bed7cb749.url));
            let _6c6fe0dec40b = {
              studyjet$token: _fe6bed7cb749.studyjet$token,
              studyjet$type: "cookie"
            };
            _35dc78c6b3fd.serviceWorker.controller.postMessage(_6c6fe0dec40b);
          }
        }), _35dc78c6b3fd.Trap("Document.prototype.cookie", {
          get: () => _35dc78c6b3fd.cookieStore.getCookies(_35dc78c6b3fd.url, !0),
          set(_fe6bed7cb749, _6c6fe0dec40b) {
            _35dc78c6b3fd.cookieStore.setCookies([ _6c6fe0dec40b ], _35dc78c6b3fd.url);
            let _678bf849a9d5 = _35dc78c6b3fd.descriptors.get("ServiceWorkerContainer.prototype.controller", _35dc78c6b3fd.serviceWorker);
            _678bf849a9d5 && _35dc78c6b3fd.natives.call("ServiceWorker.prototype.postMessage", _678bf849a9d5, {
              studyjet$type: "cookie",
              cookie: _6c6fe0dec40b,
              url: _35dc78c6b3fd.url.href
            });
          }
        }), delete _fe6bed7cb749.cookieStore;
      }
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        default: () => n
      });
    },
    6447: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        default: () => i
      });
      var _678bf849a9d5 = _6c6fe0dec40b(2614);
      function i(_35dc78c6b3fd) {
        _35dc78c6b3fd.Proxy("CSSStyleDeclaration.prototype.setProperty", {
          apply(_fe6bed7cb749) {
            _fe6bed7cb749.args[1] && (_fe6bed7cb749.args[1] = (0, _678bf849a9d5.s)(_fe6bed7cb749.args[1], _35dc78c6b3fd.meta));
          }
        }), _35dc78c6b3fd.Proxy("CSSStyleDeclaration.prototype.getPropertyValue", {
          apply(_35dc78c6b3fd) {
            let _fe6bed7cb749 = _35dc78c6b3fd.call();
            if (!_fe6bed7cb749) return _fe6bed7cb749;
            _35dc78c6b3fd.return((0, _678bf849a9d5.f)(_fe6bed7cb749));
          }
        }), _35dc78c6b3fd.Trap("CSSStyleDeclaration.prototype.cssText", {
          set(_fe6bed7cb749, _6c6fe0dec40b) {
            _fe6bed7cb749.set((0, _678bf849a9d5.s)(_6c6fe0dec40b, _35dc78c6b3fd.meta));
          },
          get: _35dc78c6b3fd => (0, _678bf849a9d5.f)(_35dc78c6b3fd.get())
        }), _35dc78c6b3fd.Proxy("CSSStyleSheet.prototype.insertRule", {
          apply(_fe6bed7cb749) {
            _fe6bed7cb749.args[0] = (0, _678bf849a9d5.s)(_fe6bed7cb749.args[0], _35dc78c6b3fd.meta);
          }
        }), _35dc78c6b3fd.Proxy("CSSStyleSheet.prototype.replace", {
          apply(_fe6bed7cb749) {
            _fe6bed7cb749.args[0] = (0, _678bf849a9d5.s)(_fe6bed7cb749.args[0], _35dc78c6b3fd.meta);
          }
        }), _35dc78c6b3fd.Proxy("CSSStyleSheet.prototype.replaceSync", {
          apply(_fe6bed7cb749) {
            _fe6bed7cb749.args[0] = (0, _678bf849a9d5.s)(_fe6bed7cb749.args[0], _35dc78c6b3fd.meta);
          }
        }), _35dc78c6b3fd.Trap("CSSRule.prototype.cssText", {
          set(_fe6bed7cb749, _6c6fe0dec40b) {
            _fe6bed7cb749.set((0, _678bf849a9d5.s)(_6c6fe0dec40b, _35dc78c6b3fd.meta));
          },
          get: _35dc78c6b3fd => (0, _678bf849a9d5.f)(_35dc78c6b3fd.get())
        }), _35dc78c6b3fd.Proxy("CSSStyleValue.parse", {
          apply(_fe6bed7cb749) {
            _fe6bed7cb749.args[1] && (_fe6bed7cb749.args[1] = (0, _678bf849a9d5.s)(_fe6bed7cb749.args[1], _35dc78c6b3fd.meta));
          }
        }), _35dc78c6b3fd.Trap("HTMLElement.prototype.style", {
          get(_fe6bed7cb749) {
            let _6c6fe0dec40b = _fe6bed7cb749.get();
            return new Proxy(_6c6fe0dec40b, {
              get(_35dc78c6b3fd, _fe6bed7cb749) {
                let _8be84367f9d6 = Reflect.get(_35dc78c6b3fd, _fe6bed7cb749);
                return "function" == typeof _8be84367f9d6 ? new Proxy(_8be84367f9d6, {
                  apply: (_35dc78c6b3fd, _fe6bed7cb749, _678bf849a9d5) => Reflect.apply(_35dc78c6b3fd, _6c6fe0dec40b, _678bf849a9d5)
                }) : _fe6bed7cb749 in CSSStyleDeclaration.prototype || !_8be84367f9d6 ? _8be84367f9d6 : (0, 
                _678bf849a9d5.f)(_8be84367f9d6);
              },
              set: (_fe6bed7cb749, _6c6fe0dec40b, _8be84367f9d6) => "cssText" == _6c6fe0dec40b || "" == _8be84367f9d6 || "string" != typeof _8be84367f9d6 ? Reflect.set(_fe6bed7cb749, _6c6fe0dec40b, _8be84367f9d6) : Reflect.set(_fe6bed7cb749, _6c6fe0dec40b, (0, 
              _678bf849a9d5.s)(_8be84367f9d6, _35dc78c6b3fd.meta))
            });
          },
          set(_35dc78c6b3fd, _fe6bed7cb749) {
            _35dc78c6b3fd.set(_fe6bed7cb749);
          }
        });
      }
    },
    5351: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        default: () => i
      });
      var _678bf849a9d5 = _6c6fe0dec40b(884);
      function i(_35dc78c6b3fd, _fe6bed7cb749) {
        let _6c6fe0dec40b = String;
        _35dc78c6b3fd.Proxy([ "Document.prototype.querySelector", "Document.prototype.querySelectorAll" ], {
          apply(_35dc78c6b3fd) {
            _35dc78c6b3fd.args[0] = _6c6fe0dec40b(_35dc78c6b3fd.args[0]).replace(/((?:^|\s)\b\w+\[(?:src|href|data-href))[\^]?(=['"]?(?:https?[:])?\/\/)/, "$1*$2");
          }
        }), _35dc78c6b3fd.Proxy("Document.prototype.write", {
          apply(_fe6bed7cb749) {
            if (_fe6bed7cb749.args[0]) try {
              _fe6bed7cb749.args[0] = (0, _678bf849a9d5.Qs)(_fe6bed7cb749.args[0], _35dc78c6b3fd.cookieStore, _35dc78c6b3fd.meta, !1);
            } catch {}
          }
        }), _35dc78c6b3fd.Trap("Document.prototype.referrer", {
          get: () => _35dc78c6b3fd.url.toString()
        }), _35dc78c6b3fd.Proxy("Document.prototype.writeln", {
          apply(_fe6bed7cb749) {
            if (_fe6bed7cb749.args[0]) try {
              _fe6bed7cb749.args[0] = (0, _678bf849a9d5.Qs)(_fe6bed7cb749.args[0], _35dc78c6b3fd.cookieStore, _35dc78c6b3fd.meta, !1);
            } catch {}
          }
        }), _35dc78c6b3fd.Proxy("Document.prototype.parseHTMLUnsafe", {
          apply(_fe6bed7cb749) {
            if (_fe6bed7cb749.args[0]) try {
              _fe6bed7cb749.args[0] = (0, _678bf849a9d5.Qs)(_fe6bed7cb749.args[0], _35dc78c6b3fd.cookieStore, _35dc78c6b3fd.meta, !1);
            } catch {}
          }
        });
      }
    },
    7828: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        default: () => h
      });
      var _678bf849a9d5 = _6c6fe0dec40b(2393), _8be84367f9d6 = _6c6fe0dec40b(2614), _6ef14f166da3 = _6c6fe0dec40b(884), _d7b934a245ce = _6c6fe0dec40b(1478), _c2df18134758 = _6c6fe0dec40b(1472), _50e0514e3a09 = _6c6fe0dec40b(2794), _713844858620 = _6c6fe0dec40b(3255);
      let _eef48ff38eca = new TextEncoder;
      function d(_35dc78c6b3fd) {
        return btoa(Array.from(_35dc78c6b3fd, _35dc78c6b3fd => String.fromCodePoint(_35dc78c6b3fd)).join(""));
      }
      function h(_35dc78c6b3fd, _fe6bed7cb749) {
        let _6c6fe0dec40b = {
          nonce: [ _fe6bed7cb749.HTMLElement ],
          integrity: [ _fe6bed7cb749.HTMLScriptElement, _fe6bed7cb749.HTMLLinkElement ],
          csp: [ _fe6bed7cb749.HTMLIFrameElement ],
          credentialless: [ _fe6bed7cb749.HTMLIFrameElement ],
          src: [ _fe6bed7cb749.HTMLImageElement, _fe6bed7cb749.HTMLMediaElement, _fe6bed7cb749.HTMLIFrameElement, _fe6bed7cb749.HTMLFrameElement, _fe6bed7cb749.HTMLEmbedElement, _fe6bed7cb749.HTMLScriptElement, _fe6bed7cb749.HTMLSourceElement ],
          href: [ _fe6bed7cb749.HTMLAnchorElement, _fe6bed7cb749.HTMLLinkElement ],
          data: [ _fe6bed7cb749.HTMLObjectElement ],
          action: [ _fe6bed7cb749.HTMLFormElement ],
          formaction: [ _fe6bed7cb749.HTMLButtonElement, _fe6bed7cb749.HTMLInputElement ],
          srcdoc: [ _fe6bed7cb749.HTMLIFrameElement ],
          poster: [ _fe6bed7cb749.HTMLVideoElement ],
          imagesrcset: [ _fe6bed7cb749.HTMLLinkElement ]
        }, _9281ea692b11 = [ _fe6bed7cb749.HTMLAnchorElement.prototype, _fe6bed7cb749.HTMLAreaElement.prototype ], _539a9fec78eb = [ _35dc78c6b3fd.natives.call("Object.getOwnPropertyDescriptor", null, _fe6bed7cb749.HTMLAnchorElement.prototype, "href"), _35dc78c6b3fd.natives.call("Object.getOwnPropertyDescriptor", null, _fe6bed7cb749.HTMLAreaElement.prototype, "href") ];
        for (let _fe6bed7cb749 of Object.keys(_6c6fe0dec40b)) for (let _678bf849a9d5 of _6c6fe0dec40b[_fe6bed7cb749]) {
          let _6c6fe0dec40b = _35dc78c6b3fd.natives.call("Object.getOwnPropertyDescriptor", null, _678bf849a9d5.prototype, _fe6bed7cb749);
          Object.defineProperty(_678bf849a9d5.prototype, _fe6bed7cb749, {
            get() {
              return [ "src", "data", "href", "action", "formaction" ].includes(_fe6bed7cb749) ? (0, 
              _c2df18134758.v2)(_6c6fe0dec40b.get.call(this)) : _6c6fe0dec40b.get.call(this);
            },
            set(_35dc78c6b3fd) {
              return this.setAttribute(_fe6bed7cb749, _35dc78c6b3fd);
            }
          });
        }
        for (let _fe6bed7cb749 of [ "protocol", "hash", "host", "hostname", "origin", "pathname", "port", "search" ]) for (let _6c6fe0dec40b in _9281ea692b11) {
          let _678bf849a9d5 = _9281ea692b11[_6c6fe0dec40b], _8be84367f9d6 = _539a9fec78eb[_6c6fe0dec40b];
          _35dc78c6b3fd.RawTrap(_678bf849a9d5, _fe6bed7cb749, {
            get(_35dc78c6b3fd) {
              let _6c6fe0dec40b = _8be84367f9d6.get.call(_35dc78c6b3fd.this);
              return _6c6fe0dec40b ? new URL((0, _c2df18134758.v2)(_6c6fe0dec40b))[_fe6bed7cb749] : _6c6fe0dec40b;
            }
          });
        }
        _35dc78c6b3fd.Trap("Node.prototype.baseURI", {
          get(_fe6bed7cb749) {
            let _6c6fe0dec40b = _fe6bed7cb749.this, _678bf849a9d5 = _6c6fe0dec40b.ownerDocument?.querySelector("base");
            return (_6c6fe0dec40b instanceof Document && (_678bf849a9d5 = _6c6fe0dec40b.querySelector("base")), 
            _678bf849a9d5) ? new URL(_678bf849a9d5.href, _35dc78c6b3fd.url.origin).href : _35dc78c6b3fd.url.origin;
          },
          set: (_35dc78c6b3fd, _fe6bed7cb749) => !1
        }), _35dc78c6b3fd.Proxy("Element.prototype.getAttribute", {
          apply(_fe6bed7cb749) {
            let [_6c6fe0dec40b] = _fe6bed7cb749.args;
            if (_6c6fe0dec40b.startsWith("studyjet-attr")) return _fe6bed7cb749.return(null);
            if (_35dc78c6b3fd.natives.call("Element.prototype.hasAttribute", _fe6bed7cb749.this, `studyjet-attr-${_6c6fe0dec40b}`)) {
              let _35dc78c6b3fd = _fe6bed7cb749.fn.call(_fe6bed7cb749.this, `studyjet-attr-${_6c6fe0dec40b}`);
              return null === _35dc78c6b3fd ? _fe6bed7cb749.return("") : _fe6bed7cb749.return(_35dc78c6b3fd);
            }
          }
        }), _35dc78c6b3fd.Proxy("Element.prototype.getAttributeNames", {
          apply(_35dc78c6b3fd) {
            let _fe6bed7cb749 = _35dc78c6b3fd.call().filter(_35dc78c6b3fd => !_35dc78c6b3fd.startsWith("studyjet-attr"));
            _35dc78c6b3fd.return(_fe6bed7cb749);
          }
        }), _35dc78c6b3fd.Proxy("Element.prototype.getAttributeNode", {
          apply(_35dc78c6b3fd) {
            if (_35dc78c6b3fd.args[0].startsWith("studyjet-attr")) return _35dc78c6b3fd.return(null);
          }
        }), _35dc78c6b3fd.Proxy("Element.prototype.hasAttribute", {
          apply(_35dc78c6b3fd) {
            if (_35dc78c6b3fd.args[0].startsWith("studyjet-attr")) return _35dc78c6b3fd.return(!1);
          }
        }), _35dc78c6b3fd.Proxy("Element.prototype.setAttribute", {
          apply(_fe6bed7cb749) {
            let [_6c6fe0dec40b, _8be84367f9d6] = _fe6bed7cb749.args, _6ef14f166da3 = _678bf849a9d5.V.find(_35dc78c6b3fd => {
              let _678bf849a9d5 = _35dc78c6b3fd[_6c6fe0dec40b.toLowerCase()];
              return !!_678bf849a9d5 && ("*" === _678bf849a9d5 || "function" != typeof _678bf849a9d5 && _678bf849a9d5.includes(_fe6bed7cb749.this.tagName.toLowerCase()));
            });
            if (_6ef14f166da3) {
              let _678bf849a9d5 = _6ef14f166da3.fn(_8be84367f9d6, _35dc78c6b3fd.meta, _35dc78c6b3fd.cookieStore);
              if (null == _678bf849a9d5) {
                _35dc78c6b3fd.natives.call("Element.prototype.removeAttribute", _fe6bed7cb749.this, _6c6fe0dec40b), 
                _fe6bed7cb749.return(void 0);
                return;
              }
              _fe6bed7cb749.args[1] = _678bf849a9d5, _fe6bed7cb749.fn.call(_fe6bed7cb749.this, `studyjet-attr-${_fe6bed7cb749.args[0]}`, _8be84367f9d6);
            }
          }
        }), _35dc78c6b3fd.Proxy("Element.prototype.setAttributeNode", {
          apply(_35dc78c6b3fd) {}
        }), _35dc78c6b3fd.Proxy("Element.prototype.setAttributeNS", {
          apply(_fe6bed7cb749) {
            let [_6c6fe0dec40b, _8be84367f9d6, _6ef14f166da3] = _fe6bed7cb749.args, _d7b934a245ce = _678bf849a9d5.V.find(_35dc78c6b3fd => {
              let _6c6fe0dec40b = _35dc78c6b3fd[_8be84367f9d6.toLowerCase()];
              return !!_6c6fe0dec40b && ("*" === _6c6fe0dec40b || "function" != typeof _6c6fe0dec40b && _6c6fe0dec40b.includes(_fe6bed7cb749.this.tagName.toLowerCase()));
            });
            _d7b934a245ce && (_fe6bed7cb749.args[2] = _d7b934a245ce.fn(_6ef14f166da3, _35dc78c6b3fd.meta, _35dc78c6b3fd.cookieStore), 
            _35dc78c6b3fd.natives.call("Element.prototype.setAttribute", _fe6bed7cb749.this, `studyjet-attr-${_fe6bed7cb749.args[1]}`, _6ef14f166da3));
          }
        }), _35dc78c6b3fd.Trap("SVGAnimatedString.prototype.baseVal", {
          get(_35dc78c6b3fd) {
            let _fe6bed7cb749 = _35dc78c6b3fd.get();
            return _fe6bed7cb749 ? (0, _c2df18134758.v2)(_fe6bed7cb749) : _fe6bed7cb749;
          },
          set(_fe6bed7cb749, _6c6fe0dec40b) {
            _fe6bed7cb749.set((0, _c2df18134758.Oy)(_6c6fe0dec40b, _35dc78c6b3fd.meta));
          }
        }), _35dc78c6b3fd.Trap("SVGAnimatedString.prototype.animVal", {
          get(_35dc78c6b3fd) {
            let _fe6bed7cb749 = _35dc78c6b3fd.get();
            return _fe6bed7cb749 ? (0, _c2df18134758.v2)(_fe6bed7cb749) : _fe6bed7cb749;
          }
        }), _35dc78c6b3fd.Proxy("Element.prototype.removeAttribute", {
          apply(_fe6bed7cb749) {
            if (_fe6bed7cb749.args[0].startsWith("studyjet-attr")) return _fe6bed7cb749.return(void 0);
            _35dc78c6b3fd.natives.call("Element.prototype.hasAttribute", _fe6bed7cb749.this, _fe6bed7cb749.args[0]) && _fe6bed7cb749.fn.call(_fe6bed7cb749.this, `studyjet-attr-${_fe6bed7cb749.args[0]}`);
          }
        }), _35dc78c6b3fd.Proxy("Element.prototype.toggleAttribute", {
          apply(_fe6bed7cb749) {
            if (_fe6bed7cb749.args[0].startsWith("studyjet-attr")) return _fe6bed7cb749.return(!1);
            _35dc78c6b3fd.natives.call("Element.prototype.hasAttribute", _fe6bed7cb749.this, _fe6bed7cb749.args[0]) && _fe6bed7cb749.fn.call(_fe6bed7cb749.this, `studyjet-attr-${_fe6bed7cb749.args[0]}`);
          }
        }), _35dc78c6b3fd.Trap("Element.prototype.innerHTML", {
          set(_6c6fe0dec40b, _678bf849a9d5) {
            let _c2df18134758;
            if (_6c6fe0dec40b.this instanceof _fe6bed7cb749.HTMLScriptElement) _c2df18134758 = (0, 
            _d7b934a245ce.o)(_678bf849a9d5, "(anonymous script element)", _35dc78c6b3fd.meta), 
            _35dc78c6b3fd.natives.call("Element.prototype.setAttribute", _6c6fe0dec40b.this, "studyjet-attr-script-source-src", d(_eef48ff38eca.encode(_c2df18134758))); else if (_6c6fe0dec40b.this instanceof _fe6bed7cb749.HTMLStyleElement) _c2df18134758 = (0, 
            _8be84367f9d6.s)(_678bf849a9d5, _35dc78c6b3fd.meta); else try {
              _c2df18134758 = (0, _6ef14f166da3.Qs)(_678bf849a9d5, _35dc78c6b3fd.cookieStore, _35dc78c6b3fd.meta);
            } catch {
              _c2df18134758 = _678bf849a9d5;
            }
            _6c6fe0dec40b.set(_c2df18134758);
          },
          get(_6c6fe0dec40b) {
            if (_6c6fe0dec40b.this instanceof _fe6bed7cb749.HTMLScriptElement) {
              let _fe6bed7cb749 = _35dc78c6b3fd.natives.call("Element.prototype.getAttribute", _6c6fe0dec40b.this, "studyjet-attr-script-source-src");
              return _fe6bed7cb749 ? atob(_fe6bed7cb749) : _6c6fe0dec40b.get();
            }
            return _6c6fe0dec40b.this instanceof _fe6bed7cb749.HTMLStyleElement ? _6c6fe0dec40b.get() : (0, 
            _6ef14f166da3.nK)(_6c6fe0dec40b.get());
          }
        }), _35dc78c6b3fd.Trap("Node.prototype.textContent", {
          set(_6c6fe0dec40b, _678bf849a9d5) {
            if (_6c6fe0dec40b.this instanceof _fe6bed7cb749.HTMLScriptElement) {
              let _fe6bed7cb749 = (0, _d7b934a245ce.o)(_678bf849a9d5, "(anonymous script element)", _35dc78c6b3fd.meta);
              return _35dc78c6b3fd.natives.call("Element.prototype.setAttribute", _6c6fe0dec40b.this, "studyjet-attr-script-source-src", d(_eef48ff38eca.encode(_fe6bed7cb749))), 
              _6c6fe0dec40b.set(_fe6bed7cb749);
            }
            return _6c6fe0dec40b.this instanceof _fe6bed7cb749.HTMLStyleElement ? _6c6fe0dec40b.set((0, 
            _8be84367f9d6.s)(_678bf849a9d5, _35dc78c6b3fd.meta)) : _6c6fe0dec40b.set(_678bf849a9d5);
          },
          get(_6c6fe0dec40b) {
            if (_6c6fe0dec40b.this instanceof _fe6bed7cb749.HTMLScriptElement) {
              let _fe6bed7cb749 = _35dc78c6b3fd.natives.call("Element.prototype.getAttribute", _6c6fe0dec40b.this, "studyjet-attr-script-source-src");
              return _fe6bed7cb749 ? atob(_fe6bed7cb749) : _6c6fe0dec40b.get();
            }
            return _6c6fe0dec40b.this instanceof _fe6bed7cb749.HTMLStyleElement ? (0, _8be84367f9d6.f)(_6c6fe0dec40b.get()) : _6c6fe0dec40b.get();
          }
        }), _35dc78c6b3fd.Trap("Element.prototype.outerHTML", {
          set(_fe6bed7cb749, _6c6fe0dec40b) {
            _fe6bed7cb749.set((0, _6ef14f166da3.Qs)(_6c6fe0dec40b, _35dc78c6b3fd.cookieStore, _35dc78c6b3fd.meta));
          },
          get: _35dc78c6b3fd => (0, _6ef14f166da3.nK)(_35dc78c6b3fd.get())
        }), _35dc78c6b3fd.Proxy("Element.prototype.setHTMLUnsafe", {
          apply(_fe6bed7cb749) {
            try {
              _fe6bed7cb749.args[0] = (0, _6ef14f166da3.Qs)(_fe6bed7cb749.args[0], _35dc78c6b3fd.cookieStore, _35dc78c6b3fd.meta, !1);
            } catch {}
          }
        }), _35dc78c6b3fd.Proxy("Element.prototype.getHTML", {
          apply(_35dc78c6b3fd) {
            _35dc78c6b3fd.return((0, _6ef14f166da3.nK)(_35dc78c6b3fd.call()));
          }
        }), _35dc78c6b3fd.Proxy("Element.prototype.insertAdjacentHTML", {
          apply(_fe6bed7cb749) {
            if (_fe6bed7cb749.args[1]) try {
              _fe6bed7cb749.args[1] = (0, _6ef14f166da3.Qs)(_fe6bed7cb749.args[1], _35dc78c6b3fd.cookieStore, _35dc78c6b3fd.meta, !1);
            } catch {}
          }
        }), _35dc78c6b3fd.Proxy("Audio", {
          construct(_fe6bed7cb749) {
            _fe6bed7cb749.args[0] && (_fe6bed7cb749.args[0] = (0, _c2df18134758.Oy)(_fe6bed7cb749.args[0], _35dc78c6b3fd.meta));
          }
        }), _35dc78c6b3fd.Proxy("Text.prototype.appendData", {
          apply(_fe6bed7cb749) {
            _fe6bed7cb749.this.parentElement?.tagName === "STYLE" && (_fe6bed7cb749.args[0] = (0, 
            _8be84367f9d6.s)(_fe6bed7cb749.args[0], _35dc78c6b3fd.meta));
          }
        }), _35dc78c6b3fd.Proxy("Text.prototype.insertData", {
          apply(_fe6bed7cb749) {
            _fe6bed7cb749.this.parentElement?.tagName === "STYLE" && (_fe6bed7cb749.args[1] = (0, 
            _8be84367f9d6.s)(_fe6bed7cb749.args[1], _35dc78c6b3fd.meta));
          }
        }), _35dc78c6b3fd.Proxy("Text.prototype.replaceData", {
          apply(_fe6bed7cb749) {
            _fe6bed7cb749.this.parentElement?.tagName === "STYLE" && (_fe6bed7cb749.args[2] = (0, 
            _8be84367f9d6.s)(_fe6bed7cb749.args[2], _35dc78c6b3fd.meta));
          }
        }), _35dc78c6b3fd.Trap("Text.prototype.wholeText", {
          get: _35dc78c6b3fd => _35dc78c6b3fd.this.parentElement?.tagName === "STYLE" ? (0, 
          _8be84367f9d6.f)(_35dc78c6b3fd.get()) : _35dc78c6b3fd.get(),
          set: (_fe6bed7cb749, _6c6fe0dec40b) => _fe6bed7cb749.this.parentElement?.tagName === "STYLE" ? _fe6bed7cb749.set((0, 
          _8be84367f9d6.s)(_6c6fe0dec40b, _35dc78c6b3fd.meta)) : _fe6bed7cb749.set(_6c6fe0dec40b)
        }), _35dc78c6b3fd.Trap([ "HTMLIFrameElement.prototype.contentWindow", "HTMLFrameElement.prototype.contentWindow", "HTMLObjectElement.prototype.contentWindow", "HTMLEmbedElement.prototype.contentWindow" ], {
          get(_35dc78c6b3fd) {
            let _fe6bed7cb749 = _35dc78c6b3fd.get();
            return _fe6bed7cb749 && (_50e0514e3a09.pX in _fe6bed7cb749 || new _713844858620.StudyJetClient(_fe6bed7cb749).hook()), 
            _fe6bed7cb749;
          }
        }), _35dc78c6b3fd.Trap([ "HTMLIFrameElement.prototype.contentDocument", "HTMLFrameElement.prototype.contentDocument", "HTMLObjectElement.prototype.contentDocument", "HTMLEmbedElement.prototype.contentDocument" ], {
          get(_fe6bed7cb749) {
            let _6c6fe0dec40b = _35dc78c6b3fd.descriptors.get(`${_fe6bed7cb749.this.constructor.name}.prototype.contentWindow`, _fe6bed7cb749.this);
            return _6c6fe0dec40b ? (_50e0514e3a09.pX in _6c6fe0dec40b || new _713844858620.StudyJetClient(_6c6fe0dec40b).hook(), 
            _6c6fe0dec40b.document) : _6c6fe0dec40b;
          }
        }), _35dc78c6b3fd.Proxy([ "HTMLIFrameElement.prototype.getSVGDocument", "HTMLObjectElement.prototype.getSVGDocument", "HTMLEmbedElement.prototype.getSVGDocument" ], {
          apply(_35dc78c6b3fd) {
            if (_35dc78c6b3fd.call()) return _35dc78c6b3fd.return(_35dc78c6b3fd.this.contentDocument);
          }
        }), _35dc78c6b3fd.Proxy("DOMParser.prototype.parseFromString", {
          apply(_fe6bed7cb749) {
            if ("text/html" === _fe6bed7cb749.args[1]) try {
              _fe6bed7cb749.args[0] = (0, _6ef14f166da3.Qs)(_fe6bed7cb749.args[0], _35dc78c6b3fd.cookieStore, _35dc78c6b3fd.meta, !1);
            } catch {}
          }
        });
      }
    },
    5426: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        default: () => i
      });
      var _678bf849a9d5 = _6c6fe0dec40b(2614);
      function i(_35dc78c6b3fd, _fe6bed7cb749) {
        _35dc78c6b3fd.Proxy("FontFace", {
          construct(_fe6bed7cb749) {
            _fe6bed7cb749.args[1] = (0, _678bf849a9d5.s)(_fe6bed7cb749.args[1], _35dc78c6b3fd.meta);
          }
        });
      }
    },
    5465: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        default: () => i
      });
      var _678bf849a9d5 = _6c6fe0dec40b(884);
      function i(_35dc78c6b3fd, _fe6bed7cb749) {
        _35dc78c6b3fd.Proxy("Range.prototype.createContextualFragment", {
          apply(_fe6bed7cb749) {
            _fe6bed7cb749.args[0] = (0, _678bf849a9d5.Qs)(_fe6bed7cb749.args[0], _35dc78c6b3fd.cookieStore, _35dc78c6b3fd.meta);
          }
        });
      }
    },
    9804: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        default: () => s
      });
      var _678bf849a9d5 = _6c6fe0dec40b(1472), _8be84367f9d6 = _6c6fe0dec40b(1862), _6ef14f166da3 = _6c6fe0dec40b(2794);
      function s(_35dc78c6b3fd, _fe6bed7cb749) {
        _35dc78c6b3fd.Proxy([ "History.prototype.pushState", "History.prototype.replaceState" ], {
          apply(_fe6bed7cb749) {
            (_fe6bed7cb749.args[2] || "" === _fe6bed7cb749.args[2]) && (_fe6bed7cb749.args[2] = (0, 
            _678bf849a9d5.Oy)(_fe6bed7cb749.args[2], _35dc78c6b3fd.meta)), _fe6bed7cb749.call();
            let {constructor: {constructor: _6c6fe0dec40b}} = _fe6bed7cb749.this, _d7b934a245ce = _6c6fe0dec40b("return globalThis")(), _c2df18134758 = _d7b934a245ce[_6ef14f166da3.pX];
            if (_d7b934a245ce.name === _35dc78c6b3fd.meta.topFrameName) {
              let _fe6bed7cb749 = new _8be84367f9d6.UrlChangeEvent(_c2df18134758.url.href);
              _35dc78c6b3fd.frame?.dispatchEvent(_fe6bed7cb749);
            }
          }
        });
      }
    },
    7758: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        default: () => s
      });
      var _678bf849a9d5 = _6c6fe0dec40b(3255), _8be84367f9d6 = _6c6fe0dec40b(2794), _6ef14f166da3 = _6c6fe0dec40b(1472);
      function s(_35dc78c6b3fd) {
        _35dc78c6b3fd.Proxy("window.open", {
          apply(_fe6bed7cb749) {
            _fe6bed7cb749.args[0] && (_fe6bed7cb749.args[0] = (0, _6ef14f166da3.Oy)(_fe6bed7cb749.args[0], _35dc78c6b3fd.meta)), 
            ("_top" === _fe6bed7cb749.args[1] || "_unfencedTop" === _fe6bed7cb749.args[1]) && (_fe6bed7cb749.args[1] = _35dc78c6b3fd.meta.topFrameName), 
            "_parent" === _fe6bed7cb749.args[1] && (_fe6bed7cb749.args[1] = _35dc78c6b3fd.meta.parentFrameName);
            let _6c6fe0dec40b = _fe6bed7cb749.call();
            if (!_6c6fe0dec40b) return _fe6bed7cb749.return(_6c6fe0dec40b);
            if (_8be84367f9d6.pX in _6c6fe0dec40b) return _fe6bed7cb749.return(_6c6fe0dec40b[_8be84367f9d6.pX].global);
            {
              let _35dc78c6b3fd = new _678bf849a9d5.StudyJetClient(_6c6fe0dec40b);
              return _35dc78c6b3fd.hook(), _fe6bed7cb749.return(_35dc78c6b3fd.global);
            }
          }
        }), _35dc78c6b3fd.Trap("window.frameElement", {
          get(_35dc78c6b3fd) {
            let _fe6bed7cb749 = _35dc78c6b3fd.get();
            return _fe6bed7cb749 ? _fe6bed7cb749.ownerDocument.defaultView[_8be84367f9d6.pX] ? _fe6bed7cb749 : null : _fe6bed7cb749;
          }
        });
      }
    },
    6012: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      function n(_35dc78c6b3fd, _fe6bed7cb749) {
        _35dc78c6b3fd.Trap("origin", {
          get: () => _35dc78c6b3fd.url.origin,
          set: () => !1
        }), _35dc78c6b3fd.Trap("Document.prototype.URL", {
          get: () => _35dc78c6b3fd.url.href,
          set: () => !1
        }), _35dc78c6b3fd.Trap("Document.prototype.documentURI", {
          get: () => _35dc78c6b3fd.url.href,
          set: () => !1
        }), _35dc78c6b3fd.Trap("Document.prototype.domain", {
          get: () => _35dc78c6b3fd.url.hostname,
          set: () => !1
        });
      }
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        default: () => n
      });
    },
    6286: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        default: () => a
      });
      var _678bf849a9d5 = _6c6fe0dec40b(1472), _8be84367f9d6 = _6c6fe0dec40b(37);
      function a(_35dc78c6b3fd, _fe6bed7cb749) {
        _35dc78c6b3fd.Trap("PerformanceEntry.prototype.name", {
          get(_35dc78c6b3fd) {
            let _fe6bed7cb749 = _35dc78c6b3fd.get();
            return _fe6bed7cb749 && _fe6bed7cb749.startsWith(location.origin + _8be84367f9d6.$W.prefix) ? (0, 
            _678bf849a9d5.v2)(_fe6bed7cb749) : _fe6bed7cb749;
          }
        }), _35dc78c6b3fd.Proxy([ "Performance.prototype.getEntries", "Performance.prototype.getEntriesByType", "Performance.prototype.getEntriesByName", "PerformanceObserverEntryList.prototype.getEntries", "PerformanceObserverEntryList.prototype.getEntriesByType", "PerformanceObserverEntryList.prototype.getEntriesByName" ], {
          apply(_35dc78c6b3fd) {
            let _fe6bed7cb749 = _35dc78c6b3fd.call();
            return _35dc78c6b3fd.return(_fe6bed7cb749.filter(_35dc78c6b3fd => {
              for (let _fe6bed7cb749 of Object.values(_8be84367f9d6.$W.files)) if (_35dc78c6b3fd.name.startsWith(location.origin + _fe6bed7cb749)) return !1;
              return !0;
            }));
          }
        });
      }
    },
    1974: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        default: () => i
      });
      var _678bf849a9d5 = _6c6fe0dec40b(1472);
      function i(_35dc78c6b3fd, _fe6bed7cb749) {
        _35dc78c6b3fd.Proxy("Navigator.prototype.registerProtocolHandler", {
          apply(_fe6bed7cb749) {
            _fe6bed7cb749.args[1] = (0, _678bf849a9d5.Oy)(_fe6bed7cb749.args[1], _35dc78c6b3fd.meta);
          }
        }), _35dc78c6b3fd.Proxy("Navigator.prototype.unregisterProtocolHandler", {
          apply(_fe6bed7cb749) {
            _fe6bed7cb749.args[1] = (0, _678bf849a9d5.Oy)(_fe6bed7cb749.args[1], _35dc78c6b3fd.meta);
          }
        });
      }
    },
    9201: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        default: () => l,
        disabled: () => o,
        enabled: () => s,
        order: () => _6ef14f166da3
      });
      var _678bf849a9d5 = _6c6fe0dec40b(37), _8be84367f9d6 = _6c6fe0dec40b(1472);
      let _6ef14f166da3 = 2, s = _35dc78c6b3fd => (0, _678bf849a9d5.U5)("serviceworkers", _35dc78c6b3fd.url);
      function o(_35dc78c6b3fd, _fe6bed7cb749) {
        Reflect.deleteProperty(Navigator.prototype, "serviceWorker");
      }
      function l(_35dc78c6b3fd, _fe6bed7cb749) {
        let _6c6fe0dec40b = new WeakMap;
        _35dc78c6b3fd.Proxy("EventTarget.prototype.addEventListener", {
          apply(_35dc78c6b3fd) {
            _6c6fe0dec40b.get(_35dc78c6b3fd.this) && _35dc78c6b3fd.return(void 0);
          }
        }), _35dc78c6b3fd.Proxy("EventTarget.prototype.removeEventListener", {
          apply(_35dc78c6b3fd) {
            _6c6fe0dec40b.get(_35dc78c6b3fd.this) && _35dc78c6b3fd.return(void 0);
          }
        }), _35dc78c6b3fd.Proxy("ServiceWorkerContainer.prototype.getRegistration", {
          apply(_35dc78c6b3fd) {
            _35dc78c6b3fd.return(new Promise(_35dc78c6b3fd => _35dc78c6b3fd(registration)));
          }
        }), _35dc78c6b3fd.Proxy("ServiceWorkerContainer.prototype.getRegistrations", {
          apply(_35dc78c6b3fd) {
            _35dc78c6b3fd.return(new Promise(_35dc78c6b3fd => _35dc78c6b3fd([ registration ])));
          }
        }), _35dc78c6b3fd.Trap("ServiceWorkerContainer.prototype.ready", {
          get: _35dc78c6b3fd => new Promise(_35dc78c6b3fd => _35dc78c6b3fd(registration))
        }), _35dc78c6b3fd.Trap("ServiceWorkerContainer.prototype.controller", {
          get: _35dc78c6b3fd => registration?.active
        }), _35dc78c6b3fd.Proxy("ServiceWorkerContainer.prototype.register", {
          apply(_fe6bed7cb749) {
            let _678bf849a9d5 = new EventTarget;
            Object.setPrototypeOf(_678bf849a9d5, self.ServiceWorkerRegistration.prototype), 
            _678bf849a9d5.constructor = _fe6bed7cb749.fn;
            let _6ef14f166da3 = (0, _8be84367f9d6.Oy)(_fe6bed7cb749.args[0], _35dc78c6b3fd.meta) + "?dest=serviceworker";
            _fe6bed7cb749.args[1] && "module" === _fe6bed7cb749.args[1].type && (_6ef14f166da3 += "&type=module");
            let _d7b934a245ce = _35dc78c6b3fd.natives.construct("SharedWorker", _6ef14f166da3).port, _c2df18134758 = {
              scope: _fe6bed7cb749.args[0],
              active: _d7b934a245ce
            }, _50e0514e3a09 = _35dc78c6b3fd.descriptors.get("ServiceWorkerContainer.prototype.controller", _35dc78c6b3fd.serviceWorker);
            _35dc78c6b3fd.natives.call("ServiceWorker.prototype.postMessage", _50e0514e3a09, {
              studyjet$type: "registerServiceWorker",
              port: _d7b934a245ce,
              origin: _35dc78c6b3fd.url.origin
            }, [ _d7b934a245ce ]), _6c6fe0dec40b.set(_678bf849a9d5, _c2df18134758), _fe6bed7cb749.return(new Promise(_35dc78c6b3fd => _35dc78c6b3fd(_678bf849a9d5)));
          }
        });
      }
    },
    5289: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      function n(_35dc78c6b3fd, _fe6bed7cb749) {
        let _6c6fe0dec40b = {
          get(_fe6bed7cb749, _6c6fe0dec40b) {
            switch (_6c6fe0dec40b) {
             case "getItem":
              return _6c6fe0dec40b => _fe6bed7cb749.getItem(_35dc78c6b3fd.url.host + "@" + _6c6fe0dec40b);

             case "setItem":
              return (_6c6fe0dec40b, _678bf849a9d5) => _fe6bed7cb749.setItem(_35dc78c6b3fd.url.host + "@" + _6c6fe0dec40b, _678bf849a9d5);

             case "removeItem":
              return _6c6fe0dec40b => _fe6bed7cb749.removeItem(_35dc78c6b3fd.url.host + "@" + _6c6fe0dec40b);

             case "clear":
              return () => {
                for (let _6c6fe0dec40b in Object.keys(_fe6bed7cb749)) _6c6fe0dec40b.startsWith(_35dc78c6b3fd.url.host) && _fe6bed7cb749.removeItem(_6c6fe0dec40b);
              };

             case "key":
              return _6c6fe0dec40b => {
                let _678bf849a9d5 = Object.keys(_fe6bed7cb749).filter(_fe6bed7cb749 => _fe6bed7cb749.startsWith(_35dc78c6b3fd.url.host));
                return _fe6bed7cb749.getItem(_678bf849a9d5[_6c6fe0dec40b]);
              };

             case "length":
              return Object.keys(_fe6bed7cb749).filter(_fe6bed7cb749 => _fe6bed7cb749.startsWith(_35dc78c6b3fd.url.host)).length;

             default:
              if (_6c6fe0dec40b in Object.prototype || "symbol" == typeof _6c6fe0dec40b) return Reflect.get(_fe6bed7cb749, _6c6fe0dec40b);
              return _fe6bed7cb749.getItem(_35dc78c6b3fd.url.host + "@" + _6c6fe0dec40b);
            }
          },
          set: (_fe6bed7cb749, _6c6fe0dec40b, _678bf849a9d5) => (_fe6bed7cb749.setItem(_35dc78c6b3fd.url.host + "@" + _6c6fe0dec40b, _678bf849a9d5), 
          !0),
          ownKeys: _fe6bed7cb749 => Reflect.ownKeys(_fe6bed7cb749).filter(_fe6bed7cb749 => "string" == typeof _fe6bed7cb749 && _fe6bed7cb749.startsWith(_35dc78c6b3fd.url.host)).map(_fe6bed7cb749 => "string" == typeof _fe6bed7cb749 ? _fe6bed7cb749.substring(_35dc78c6b3fd.url.host.length + 1) : _fe6bed7cb749),
          getOwnPropertyDescriptor: (_fe6bed7cb749, _6c6fe0dec40b) => ({
            value: _fe6bed7cb749.getItem(_35dc78c6b3fd.url.host + "@" + _6c6fe0dec40b),
            enumerable: !0,
            configurable: !0,
            writable: !0
          }),
          defineProperty: (_fe6bed7cb749, _6c6fe0dec40b, _678bf849a9d5) => (_fe6bed7cb749.setItem(_35dc78c6b3fd.url.host + "@" + _6c6fe0dec40b, _678bf849a9d5.value), 
          !0)
        };
        _fe6bed7cb749.localStorage;
        let _678bf849a9d5 = new Proxy(_fe6bed7cb749.localStorage, _6c6fe0dec40b), _8be84367f9d6 = new Proxy(_fe6bed7cb749.sessionStorage, _6c6fe0dec40b);
        delete _fe6bed7cb749.localStorage, delete _fe6bed7cb749.sessionStorage, _fe6bed7cb749.localStorage = _678bf849a9d5, 
        _fe6bed7cb749.sessionStorage = _8be84367f9d6;
      }
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        default: () => n
      });
    },
    1323: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        isdedicated: () => _539a9fec78eb,
        isemulatedsw: () => _4f8d3fc53b00,
        isshared: () => _f78db6fdbb58,
        issw: () => _9281ea692b11,
        iswindow: () => _713844858620,
        isworker: () => _eef48ff38eca,
        loadAndHook: () => g
      });
      var _678bf849a9d5 = _6c6fe0dec40b(37), _8be84367f9d6 = _6c6fe0dec40b(2794), _6ef14f166da3 = _6c6fe0dec40b(3255), _d7b934a245ce = _6c6fe0dec40b(1862), _c2df18134758 = _6c6fe0dec40b(8409), _50e0514e3a09 = _6c6fe0dec40b(8665).A;
      let _713844858620 = "window" in globalThis && window instanceof Window, _eef48ff38eca = "WorkerGlobalScope" in globalThis, _9281ea692b11 = "ServiceWorkerGlobalScope" in globalThis, _539a9fec78eb = "DedicatedWorkerGlobalScope" in globalThis, _f78db6fdbb58 = "SharedWorkerGlobalScope" in globalThis, _4f8d3fc53b00 = "location" in globalThis && "serviceworker" === new URL(globalThis.location.href).searchParams.get("dest");
      function g(_35dc78c6b3fd) {
        if ((0, _678bf849a9d5.Nk)(_35dc78c6b3fd), _50e0514e3a09.log("initializing studyjet client"), 
        !(_8be84367f9d6.pX in globalThis)) {
          (0, _678bf849a9d5.Ec)();
          let _35dc78c6b3fd = new _6ef14f166da3.StudyJetClient(globalThis), _fe6bed7cb749 = globalThis.frameElement;
          _fe6bed7cb749 && !_fe6bed7cb749.name && (_fe6bed7cb749.name = `${Array(8).fill(0).map(() => Math.floor(36 * Math.random()).toString(36)).join("")}`), 
          globalThis.COOKIE && _35dc78c6b3fd.loadcookies(globalThis.COOKIE), _35dc78c6b3fd.hook(), 
          _4f8d3fc53b00 && new _c2df18134758.StudyJetServiceWorkerRuntime(_35dc78c6b3fd).hook();
          let _6c6fe0dec40b = new _d7b934a245ce.StudyJetContextEvent(_35dc78c6b3fd.global.window, _35dc78c6b3fd);
          _35dc78c6b3fd.frame?.dispatchEvent(_6c6fe0dec40b);
          let _8be84367f9d6 = new _d7b934a245ce.UrlChangeEvent(_35dc78c6b3fd.url.href);
          _35dc78c6b3fd.isSubframe || _35dc78c6b3fd.frame?.dispatchEvent(_8be84367f9d6);
        }
        Reflect.deleteProperty(globalThis, "WASM"), Reflect.deleteProperty(globalThis, "COOKIE");
      }
    },
    1862: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        NavigateEvent: () => i,
        StudyJetContextEvent: () => s,
        StudyJetGlobalDownloadEvent: () => n,
        UrlChangeEvent: () => a
      });
      class n extends Event {
        download;
        type="download";
        constructor(_35dc78c6b3fd) {
          super("download"), this.download = _35dc78c6b3fd;
        }
      }
      class i extends Event {
        url;
        type="navigate";
        constructor(_35dc78c6b3fd) {
          super("navigate"), this.url = _35dc78c6b3fd;
        }
      }
      class a extends Event {
        url;
        type="urlchange";
        constructor(_35dc78c6b3fd) {
          super("urlchange"), this.url = _35dc78c6b3fd;
        }
      }
      class s extends Event {
        window;
        client;
        type="contextInit";
        constructor(_35dc78c6b3fd, _fe6bed7cb749) {
          super("contextInit"), this.window = _35dc78c6b3fd, this.client = _fe6bed7cb749;
        }
      }
    },
    94: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      function n(_35dc78c6b3fd, _fe6bed7cb749) {
        return Reflect.getOwnPropertyDescriptor(_35dc78c6b3fd, _fe6bed7cb749);
      }
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        getOwnPropertyDescriptorHandler: () => n
      });
    },
    3255: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        NavigateEvent: () => _6ef14f166da3.NavigateEvent,
        StudyJetClient: () => _678bf849a9d5.StudyJetClient,
        StudyJetContextEvent: () => _6ef14f166da3.StudyJetContextEvent,
        StudyJetGlobalDownloadEvent: () => _6ef14f166da3.StudyJetGlobalDownloadEvent,
        StudyJetServiceWorkerRuntime: () => _50e0514e3a09.StudyJetServiceWorkerRuntime,
        UrlChangeEvent: () => _6ef14f166da3.UrlChangeEvent,
        createLocationProxy: () => _c2df18134758.createLocationProxy,
        getOwnPropertyDescriptorHandler: () => _d7b934a245ce.getOwnPropertyDescriptorHandler,
        isdedicated: () => _8be84367f9d6.isdedicated,
        isemulatedsw: () => _8be84367f9d6.isemulatedsw,
        isshared: () => _8be84367f9d6.isshared,
        issw: () => _8be84367f9d6.issw,
        iswindow: () => _8be84367f9d6.iswindow,
        isworker: () => _8be84367f9d6.isworker,
        loadAndHook: () => _8be84367f9d6.loadAndHook
      });
      var _678bf849a9d5 = _6c6fe0dec40b(336), _8be84367f9d6 = _6c6fe0dec40b(1323), _6ef14f166da3 = _6c6fe0dec40b(1862), _d7b934a245ce = _6c6fe0dec40b(94), _c2df18134758 = _6c6fe0dec40b(3696), _50e0514e3a09 = _6c6fe0dec40b(8409);
      _6c6fe0dec40b(3255);
    },
    3696: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        createLocationProxy: () => s
      });
      var _678bf849a9d5 = _6c6fe0dec40b(1862), _8be84367f9d6 = _6c6fe0dec40b(1472), _6ef14f166da3 = _6c6fe0dec40b(1323);
      function s(_35dc78c6b3fd, _fe6bed7cb749) {
        let _6c6fe0dec40b = _6ef14f166da3.iswindow ? _fe6bed7cb749.Location : _fe6bed7cb749.WorkerLocation, _d7b934a245ce = {};
        Object.setPrototypeOf(_d7b934a245ce, _6c6fe0dec40b.prototype), _d7b934a245ce.constructor = _6c6fe0dec40b;
        let _c2df18134758 = _6ef14f166da3.iswindow ? _fe6bed7cb749.location : _6c6fe0dec40b.prototype;
        for (let _6c6fe0dec40b of [ "protocol", "hash", "host", "hostname", "href", "origin", "pathname", "port", "search" ]) {
          let _8be84367f9d6 = _35dc78c6b3fd.natives.call("Object.getOwnPropertyDescriptor", null, _c2df18134758, _6c6fe0dec40b);
          if (!_8be84367f9d6) continue;
          let _6ef14f166da3 = {
            configurable: !1,
            enumerable: !0
          };
          _8be84367f9d6.get && (_6ef14f166da3.get = new Proxy(_8be84367f9d6.get, {
            apply: () => _35dc78c6b3fd.url[_6c6fe0dec40b]
          })), _8be84367f9d6.set && (_6ef14f166da3.set = new Proxy(_8be84367f9d6.set, {
            apply(_8be84367f9d6, _6ef14f166da3, _d7b934a245ce) {
              if ("href" === _6c6fe0dec40b) {
                _35dc78c6b3fd.url = _d7b934a245ce[0];
                return;
              }
              if ("hash" === _6c6fe0dec40b) {
                _fe6bed7cb749.location.hash = _d7b934a245ce[0];
                let _6c6fe0dec40b = new _678bf849a9d5.UrlChangeEvent(_35dc78c6b3fd.url.href);
                _35dc78c6b3fd.isSubframe || _35dc78c6b3fd.frame?.dispatchEvent(_6c6fe0dec40b);
                return;
              }
              let _c2df18134758 = new URL(_35dc78c6b3fd.url.href);
              _c2df18134758[_6c6fe0dec40b] = _d7b934a245ce[0], _35dc78c6b3fd.url = _c2df18134758;
            }
          })), Object.defineProperty(_d7b934a245ce, _6c6fe0dec40b, _6ef14f166da3);
        }
        return _d7b934a245ce.toString = new Proxy(_fe6bed7cb749.location.toString, {
          apply: () => _35dc78c6b3fd.url.href
        }), _fe6bed7cb749.location.valueOf && (_d7b934a245ce.valueOf = new Proxy(_fe6bed7cb749.location.valueOf, {
          apply: () => _35dc78c6b3fd.url.href
        })), _fe6bed7cb749.location.assign && (_d7b934a245ce.assign = new Proxy(_fe6bed7cb749.location.assign, {
          apply(_6c6fe0dec40b, _6ef14f166da3, _d7b934a245ce) {
            _d7b934a245ce[0] = (0, _8be84367f9d6.Oy)(_d7b934a245ce[0], _35dc78c6b3fd.meta), 
            Reflect.apply(_6c6fe0dec40b, _fe6bed7cb749.location, _d7b934a245ce);
            let _c2df18134758 = new _678bf849a9d5.UrlChangeEvent(_35dc78c6b3fd.url.href);
            _35dc78c6b3fd.isSubframe || _35dc78c6b3fd.frame?.dispatchEvent(_c2df18134758);
          }
        })), _fe6bed7cb749.location.reload && (_d7b934a245ce.reload = new Proxy(_fe6bed7cb749.location.reload, {
          apply(_35dc78c6b3fd, _6c6fe0dec40b, _678bf849a9d5) {
            Reflect.apply(_35dc78c6b3fd, _fe6bed7cb749.location, _678bf849a9d5);
          }
        })), _fe6bed7cb749.location.replace && (_d7b934a245ce.replace = new Proxy(_fe6bed7cb749.location.replace, {
          apply(_6c6fe0dec40b, _6ef14f166da3, _d7b934a245ce) {
            _d7b934a245ce[0] = (0, _8be84367f9d6.Oy)(_d7b934a245ce[0], _35dc78c6b3fd.meta), 
            Reflect.apply(_6c6fe0dec40b, _fe6bed7cb749.location, _d7b934a245ce);
            let _c2df18134758 = new _678bf849a9d5.UrlChangeEvent(_35dc78c6b3fd.url.href);
            _35dc78c6b3fd.isSubframe || _35dc78c6b3fd.frame?.dispatchEvent(_c2df18134758);
          }
        })), _d7b934a245ce;
      }
    },
    8382: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      function n(_35dc78c6b3fd) {
        _35dc78c6b3fd.Proxy("console.clear", {
          apply(_35dc78c6b3fd) {
            _35dc78c6b3fd.return(void 0);
          }
        });
        let _fe6bed7cb749 = console.log;
        _35dc78c6b3fd.Trap("console.log", {
          set(_35dc78c6b3fd, _fe6bed7cb749) {},
          get: _35dc78c6b3fd => _fe6bed7cb749
        });
      }
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        default: () => n
      });
    },
    4634: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        default: () => i
      });
      var _678bf849a9d5 = _6c6fe0dec40b(1472);
      function i(_35dc78c6b3fd) {
        _35dc78c6b3fd.Proxy("URL.createObjectURL", {
          apply(_fe6bed7cb749) {
            let _6c6fe0dec40b = _fe6bed7cb749.call();
            _6c6fe0dec40b.startsWith("blob:") ? _fe6bed7cb749.return((0, _678bf849a9d5.IP)(_6c6fe0dec40b, _35dc78c6b3fd.meta)) : _fe6bed7cb749.return(_6c6fe0dec40b);
          }
        }), _35dc78c6b3fd.Proxy("URL.revokeObjectURL", {
          apply(_35dc78c6b3fd) {
            _35dc78c6b3fd.args[0] = (0, _678bf849a9d5.$n)(_35dc78c6b3fd.args[0]);
          }
        });
      }
    },
    5026: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        default: () => i
      });
      var _678bf849a9d5 = _6c6fe0dec40b(1472);
      function i(_35dc78c6b3fd, _fe6bed7cb749) {
        _35dc78c6b3fd.Proxy("CacheStorage.prototype.open", {
          apply(_fe6bed7cb749) {
            _fe6bed7cb749.args[0] = `${_35dc78c6b3fd.url.origin}@${_fe6bed7cb749.args[0]}`;
          }
        }), _35dc78c6b3fd.Proxy("CacheStorage.prototype.has", {
          apply(_fe6bed7cb749) {
            _fe6bed7cb749.args[0] = `${_35dc78c6b3fd.url.origin}@${_fe6bed7cb749.args[0]}`;
          }
        }), _35dc78c6b3fd.Proxy("CacheStorage.prototype.match", {
          apply(_fe6bed7cb749) {
            ("string" == typeof _fe6bed7cb749.args[0] || _fe6bed7cb749.args[0] instanceof URL) && (_fe6bed7cb749.args[0] = (0, 
            _678bf849a9d5.Oy)(_fe6bed7cb749.args[0], _35dc78c6b3fd.meta));
          }
        }), _35dc78c6b3fd.Proxy("CacheStorage.prototype.delete", {
          apply(_fe6bed7cb749) {
            _fe6bed7cb749.args[0] = `${_35dc78c6b3fd.url.origin}@${_fe6bed7cb749.args[0]}`;
          }
        }), _35dc78c6b3fd.Proxy("Cache.prototype.add", {
          apply(_fe6bed7cb749) {
            ("string" == typeof _fe6bed7cb749.args[0] || _fe6bed7cb749.args[0] instanceof URL) && (_fe6bed7cb749.args[0] = (0, 
            _678bf849a9d5.Oy)(_fe6bed7cb749.args[0], _35dc78c6b3fd.meta));
          }
        }), _35dc78c6b3fd.Proxy("Cache.prototype.addAll", {
          apply(_fe6bed7cb749) {
            for (let _6c6fe0dec40b = 0; _6c6fe0dec40b < _fe6bed7cb749.args[0].length; _6c6fe0dec40b++) ("string" == typeof _fe6bed7cb749.args[0][_6c6fe0dec40b] || _fe6bed7cb749.args[0][_6c6fe0dec40b] instanceof URL) && (_fe6bed7cb749.args[0][_6c6fe0dec40b] = (0, 
            _678bf849a9d5.Oy)(_fe6bed7cb749.args[0][_6c6fe0dec40b], _35dc78c6b3fd.meta));
          }
        }), _35dc78c6b3fd.Proxy("Cache.prototype.put", {
          apply(_fe6bed7cb749) {
            ("string" == typeof _fe6bed7cb749.args[0] || _fe6bed7cb749.args[0] instanceof URL) && (_fe6bed7cb749.args[0] = (0, 
            _678bf849a9d5.Oy)(_fe6bed7cb749.args[0], _35dc78c6b3fd.meta));
          }
        }), _35dc78c6b3fd.Proxy("Cache.prototype.match", {
          apply(_fe6bed7cb749) {
            ("string" == typeof _fe6bed7cb749.args[0] || _fe6bed7cb749.args[0] instanceof URL) && (_fe6bed7cb749.args[0] = (0, 
            _678bf849a9d5.Oy)(_fe6bed7cb749.args[0], _35dc78c6b3fd.meta));
          }
        }), _35dc78c6b3fd.Proxy("Cache.prototype.matchAll", {
          apply(_fe6bed7cb749) {
            (_fe6bed7cb749.args[0] && "string" == typeof _fe6bed7cb749.args[0] || _fe6bed7cb749.args[0] && _fe6bed7cb749.args[0] instanceof URL) && (_fe6bed7cb749.args[0] = (0, 
            _678bf849a9d5.Oy)(_fe6bed7cb749.args[0], _35dc78c6b3fd.meta));
          }
        }), _35dc78c6b3fd.Proxy("Cache.prototype.keys", {
          apply(_fe6bed7cb749) {
            (_fe6bed7cb749.args[0] && "string" == typeof _fe6bed7cb749.args[0] || _fe6bed7cb749.args[0] && _fe6bed7cb749.args[0] instanceof URL) && (_fe6bed7cb749.args[0] = (0, 
            _678bf849a9d5.Oy)(_fe6bed7cb749.args[0], _35dc78c6b3fd.meta));
          }
        }), _35dc78c6b3fd.Proxy("Cache.prototype.delete", {
          apply(_fe6bed7cb749) {
            ("string" == typeof _fe6bed7cb749.args[0] || _fe6bed7cb749.args[0] instanceof URL) && (_fe6bed7cb749.args[0] = (0, 
            _678bf849a9d5.Oy)(_fe6bed7cb749.args[0], _35dc78c6b3fd.meta));
          }
        });
      }
    },
    6627: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        default: () => i
      });
      var _678bf849a9d5 = _6c6fe0dec40b(1323);
      function i(_35dc78c6b3fd, _fe6bed7cb749) {
        let r = _35dc78c6b3fd => {
          let _6c6fe0dec40b = _35dc78c6b3fd.split("."), _678bf849a9d5 = _6c6fe0dec40b.pop(), _8be84367f9d6 = _6c6fe0dec40b.reduce((_35dc78c6b3fd, _fe6bed7cb749) => _35dc78c6b3fd?.[_fe6bed7cb749], _fe6bed7cb749);
          _8be84367f9d6 && _678bf849a9d5 && _678bf849a9d5 in _8be84367f9d6 && delete _8be84367f9d6[_678bf849a9d5];
        };
        r("BarcodeDetector"), r("FaceDetector"), r("TextDetector"), _678bf849a9d5.iswindow && r("ServiceWorkerRegistration.prototype.sync"), 
        _678bf849a9d5.isemulatedsw && (r("SyncManager"), r("SyncEvent")), r("TrustedHTML"), 
        r("TrustedScript"), r("TrustedScriptURL"), r("TrustedTypePolicy"), r("TrustedTypePolicyFactory"), 
        _fe6bed7cb749.__defineGetter__("trustedTypes", () => void 0), r("Navigator.prototype.joinAdInterestGroup"), 
        _678bf849a9d5.iswindow && (r("MediaDevices.prototype.setCaptureHandleConfig"), r("Navigator.prototype.bluetooth"), 
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
    582: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        argdbg: () => a,
        default: () => s,
        enabled: () => i
      });
      var _678bf849a9d5 = _6c6fe0dec40b(37);
      let i = _35dc78c6b3fd => (0, _678bf849a9d5.U5)("captureErrors", _35dc78c6b3fd.url);
      function a(_35dc78c6b3fd, _fe6bed7cb749 = []) {
        switch (typeof _35dc78c6b3fd) {
         case "string":
          break;

         case "object":
          if (_35dc78c6b3fd && _35dc78c6b3fd[Symbol.iterator] && "function" == typeof _35dc78c6b3fd[Symbol.iterator]) for (let _6c6fe0dec40b in _35dc78c6b3fd) {
            let _678bf849a9d5 = Object.getOwnPropertyDescriptor(_35dc78c6b3fd, _6c6fe0dec40b);
            if (_678bf849a9d5 && _678bf849a9d5.get) continue;
            let _8be84367f9d6 = _35dc78c6b3fd[_6c6fe0dec40b];
            _fe6bed7cb749.includes(_8be84367f9d6) || (_fe6bed7cb749.push(_8be84367f9d6), a(_8be84367f9d6, _fe6bed7cb749));
          }
        }
      }
      function s(_35dc78c6b3fd, _fe6bed7cb749) {
        let _6c6fe0dec40b = console.warn;
        _fe6bed7cb749.$scramerr = function(_35dc78c6b3fd) {
          _6c6fe0dec40b("CAUGHT ERROR", _35dc78c6b3fd);
        }, _fe6bed7cb749.$scramdbg = function(_35dc78c6b3fd, _fe6bed7cb749) {
          return _35dc78c6b3fd && "object" == typeof _35dc78c6b3fd && _35dc78c6b3fd.length > 0 && a(_35dc78c6b3fd), 
          a(_fe6bed7cb749), _fe6bed7cb749;
        }, _35dc78c6b3fd.Proxy("Promise.prototype.catch", {
          apply(_35dc78c6b3fd) {
            _35dc78c6b3fd.args[0] && (_35dc78c6b3fd.args[0] = new Proxy(_35dc78c6b3fd.args[0], {
              apply(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
                Reflect.apply(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b);
              }
            }));
          }
        });
      }
    },
    6143: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        default: () => s,
        enabled: () => a
      });
      var _678bf849a9d5 = _6c6fe0dec40b(37), _8be84367f9d6 = _6c6fe0dec40b(1472);
      let a = _35dc78c6b3fd => (0, _678bf849a9d5.U5)("cleanErrors", _35dc78c6b3fd.url);
      function s(_35dc78c6b3fd, _fe6bed7cb749) {
        let r = (_35dc78c6b3fd, _fe6bed7cb749) => {
          let _6c6fe0dec40b = _35dc78c6b3fd.stack;
          for (let _35dc78c6b3fd = 0; _35dc78c6b3fd < _fe6bed7cb749.length; _35dc78c6b3fd++) {
            let _6ef14f166da3 = _fe6bed7cb749[_35dc78c6b3fd].getFileName();
            try {
              if (_6ef14f166da3.endsWith(_678bf849a9d5.$W.files.all)) {
                let _35dc78c6b3fd = _6c6fe0dec40b.split("\n"), _fe6bed7cb749 = _35dc78c6b3fd.find(_35dc78c6b3fd => _35dc78c6b3fd.includes(_6ef14f166da3));
                _35dc78c6b3fd.splice(_fe6bed7cb749, 1), _6c6fe0dec40b = _35dc78c6b3fd.join("\n");
                continue;
              }
            } catch {}
            try {
              _6c6fe0dec40b = _6c6fe0dec40b.replaceAll(_6ef14f166da3, (0, _8be84367f9d6.v2)(_6ef14f166da3));
            } catch {}
          }
          return _6c6fe0dec40b;
        };
        _35dc78c6b3fd.Trap("Error.prepareStackTrace", {
          get: _35dc78c6b3fd => r,
          set(_35dc78c6b3fd) {}
        });
      }
    },
    591: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        default: () => a,
        indirectEval: () => s
      });
      var _678bf849a9d5 = _6c6fe0dec40b(37), _8be84367f9d6 = _6c6fe0dec40b(1478);
      function a(_35dc78c6b3fd, _fe6bed7cb749) {
        Object.defineProperty(_fe6bed7cb749, _678bf849a9d5.$W.globals.rewritefn, {
          value: function(_fe6bed7cb749) {
            return "string" != typeof _fe6bed7cb749 ? _fe6bed7cb749 : (0, _8be84367f9d6.o)(_fe6bed7cb749, "(direct eval proxy)", _35dc78c6b3fd.meta);
          },
          writable: !1,
          configurable: !1
        });
      }
      function s(_35dc78c6b3fd, _fe6bed7cb749) {
        let _6c6fe0dec40b;
        return "string" != typeof _fe6bed7cb749 ? _fe6bed7cb749 : ("accounts.google.com" === this.url.hostname ? (console.log("USING STRICT EVAL - BOTGUARD"), 
        _6c6fe0dec40b = Function(`\n\t\t\t"use strict";\n\t\t\treturn eval;\n\t\t`)) : _6c6fe0dec40b = this.global.eval, 
        _6c6fe0dec40b((0, _8be84367f9d6.o)(_fe6bed7cb749, "(indirect eval proxy)", this.meta)));
      }
    },
    3481: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        default: () => o
      });
      var _678bf849a9d5 = _6c6fe0dec40b(1323), _8be84367f9d6 = _6c6fe0dec40b(1472), _6ef14f166da3 = _6c6fe0dec40b(94);
      let _d7b934a245ce = Symbol.for("studyjet original onevent function");
      function o(_35dc78c6b3fd, _fe6bed7cb749) {
        let _6c6fe0dec40b = {
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
              return "object" == typeof this.data && "$studyjet$origin" in this.data ? this.data.$studyjet$origin : _35dc78c6b3fd.url.origin;
            },
            data() {
              return "object" == typeof this.data && "$studyjet$data" in this.data ? this.data.$studyjet$data : this.data;
            }
          },
          hashchange: {
            oldURL() {
              return (0, _8be84367f9d6.v2)(this.oldURL);
            },
            newURL() {
              return (0, _8be84367f9d6.v2)(this.newURL);
            }
          },
          storage: {
            _init() {
              return this.key.startsWith(_35dc78c6b3fd.url.host + "@");
            },
            key() {
              return this.key.substring(this.key.indexOf("@") + 1);
            },
            url() {
              return (0, _8be84367f9d6.v2)(this.url);
            }
          }
        };
        function o(_35dc78c6b3fd) {
          return new Proxy(_35dc78c6b3fd, {
            apply(_35dc78c6b3fd, _678bf849a9d5, _8be84367f9d6) {
              let _d7b934a245ce = _8be84367f9d6[0];
              if (_d7b934a245ce.isTrusted) {
                let _35dc78c6b3fd = _d7b934a245ce.type;
                if (_35dc78c6b3fd in _6c6fe0dec40b) {
                  let _fe6bed7cb749 = _6c6fe0dec40b[_35dc78c6b3fd];
                  if (_fe6bed7cb749._init && !1 === _fe6bed7cb749._init.call(_d7b934a245ce)) return;
                  _8be84367f9d6[0] = new Proxy(_d7b934a245ce, {
                    get(_35dc78c6b3fd, _6c6fe0dec40b, _678bf849a9d5) {
                      let _8be84367f9d6 = Reflect.get(_35dc78c6b3fd, _6c6fe0dec40b);
                      return _6c6fe0dec40b in _fe6bed7cb749 ? _fe6bed7cb749[_6c6fe0dec40b].call(_35dc78c6b3fd) : "function" == typeof _8be84367f9d6 ? new Proxy(_8be84367f9d6, {
                        apply: (_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) => _fe6bed7cb749 === _678bf849a9d5 ? Reflect.apply(_35dc78c6b3fd, _d7b934a245ce, _6c6fe0dec40b) : Reflect.apply(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b)
                      }) : _8be84367f9d6;
                    },
                    getOwnPropertyDescriptor: _6ef14f166da3.getOwnPropertyDescriptorHandler
                  });
                }
              }
              return _fe6bed7cb749.event || Object.defineProperty(_fe6bed7cb749, "event", {
                get: () => _8be84367f9d6[0],
                configurable: !0
              }), Reflect.apply(_35dc78c6b3fd, _678bf849a9d5, _8be84367f9d6);
            },
            getOwnPropertyDescriptor: _6ef14f166da3.getOwnPropertyDescriptorHandler
          });
        }
        _35dc78c6b3fd.Proxy("EventTarget.prototype.addEventListener", {
          apply(_fe6bed7cb749) {
            if ("function" != typeof _fe6bed7cb749.args[1]) return;
            let _6c6fe0dec40b = _fe6bed7cb749.args[1], _678bf849a9d5 = o(_6c6fe0dec40b);
            _fe6bed7cb749.args[1] = _678bf849a9d5;
            let _8be84367f9d6 = _35dc78c6b3fd.eventcallbacks.get(_fe6bed7cb749.this);
            (_8be84367f9d6 ||= []).push({
              event: _fe6bed7cb749.args[0],
              originalCallback: _6c6fe0dec40b,
              proxiedCallback: _678bf849a9d5
            }), _35dc78c6b3fd.eventcallbacks.set(_fe6bed7cb749.this, _8be84367f9d6);
          }
        }), _35dc78c6b3fd.Proxy("EventTarget.prototype.removeEventListener", {
          apply(_fe6bed7cb749) {
            if ("function" != typeof _fe6bed7cb749.args[1]) return;
            let _6c6fe0dec40b = _35dc78c6b3fd.eventcallbacks.get(_fe6bed7cb749.this);
            if (!_6c6fe0dec40b) return;
            let _678bf849a9d5 = _6c6fe0dec40b.findIndex(_35dc78c6b3fd => _35dc78c6b3fd.event === _fe6bed7cb749.args[0] && _35dc78c6b3fd.originalCallback === _fe6bed7cb749.args[1]);
            if (-1 === _678bf849a9d5) return;
            let _8be84367f9d6 = _6c6fe0dec40b.splice(_678bf849a9d5, 1);
            _35dc78c6b3fd.eventcallbacks.set(_fe6bed7cb749.this, _6c6fe0dec40b), _fe6bed7cb749.args[1] = _8be84367f9d6[0].proxiedCallback;
          }
        });
        let _c2df18134758 = [ _fe6bed7cb749.self, _fe6bed7cb749.MessagePort.prototype ];
        for (let _8be84367f9d6 of (_678bf849a9d5.iswindow && _c2df18134758.push(_fe6bed7cb749.HTMLElement.prototype), 
        _fe6bed7cb749.Worker && _c2df18134758.push(_fe6bed7cb749.Worker.prototype), _c2df18134758)) for (let _fe6bed7cb749 of Reflect.ownKeys(_8be84367f9d6)) if ("string" == typeof _fe6bed7cb749 && _fe6bed7cb749.startsWith("on") && _6c6fe0dec40b[_fe6bed7cb749.slice(2)]) {
          let _6c6fe0dec40b = _35dc78c6b3fd.natives.call("Object.getOwnPropertyDescriptor", null, _8be84367f9d6, _fe6bed7cb749);
          if (!_6c6fe0dec40b.get || !_6c6fe0dec40b.set || !_6c6fe0dec40b.configurable) continue;
          _35dc78c6b3fd.RawTrap(_8be84367f9d6, _fe6bed7cb749, {
            get(_35dc78c6b3fd) {
              return this[_d7b934a245ce] ? this[_d7b934a245ce] : _35dc78c6b3fd.get();
            },
            set(_35dc78c6b3fd, _fe6bed7cb749) {
              if (this[_d7b934a245ce] = _fe6bed7cb749, "function" != typeof _fe6bed7cb749) return _35dc78c6b3fd.set(_fe6bed7cb749);
              _35dc78c6b3fd.set(o(_fe6bed7cb749));
            }
          });
        }
      }
    },
    249: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        default: () => a
      });
      var _678bf849a9d5 = _6c6fe0dec40b(1478);
      function i(_35dc78c6b3fd, _fe6bed7cb749) {
        let _6c6fe0dec40b = _35dc78c6b3fd.call().toString(), _8be84367f9d6 = (0, _678bf849a9d5.o)(`return ${_6c6fe0dec40b}`, "(function proxy)", _fe6bed7cb749.meta);
        _35dc78c6b3fd.return(_35dc78c6b3fd.fn(_8be84367f9d6)());
      }
      function a(_35dc78c6b3fd, _fe6bed7cb749) {
        let _6c6fe0dec40b = {
          apply(_fe6bed7cb749) {
            i(_fe6bed7cb749, _35dc78c6b3fd);
          },
          construct(_fe6bed7cb749) {
            i(_fe6bed7cb749, _35dc78c6b3fd);
          }
        };
        _35dc78c6b3fd.Proxy("Function", _6c6fe0dec40b);
        let _678bf849a9d5 = _35dc78c6b3fd.natives.call("eval", null, "(function () {})").constructor, _8be84367f9d6 = _35dc78c6b3fd.natives.call("eval", null, "(async function () {})").constructor, _6ef14f166da3 = _35dc78c6b3fd.natives.call("eval", null, "(function* () {})").constructor, _d7b934a245ce = _35dc78c6b3fd.natives.call("eval", null, "(async function* () {})").constructor;
        _35dc78c6b3fd.RawProxy(_678bf849a9d5.prototype, "constructor", _6c6fe0dec40b), _35dc78c6b3fd.RawProxy(_8be84367f9d6.prototype, "constructor", _6c6fe0dec40b), 
        _35dc78c6b3fd.RawProxy(_6ef14f166da3.prototype, "constructor", _6c6fe0dec40b), _35dc78c6b3fd.RawProxy(_d7b934a245ce.prototype, "constructor", _6c6fe0dec40b);
      }
    },
    2468: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        default: () => a
      });
      var _678bf849a9d5 = _6c6fe0dec40b(37), _8be84367f9d6 = _6c6fe0dec40b(1472);
      function a(_35dc78c6b3fd, _fe6bed7cb749) {
        let _6c6fe0dec40b = _35dc78c6b3fd.natives.call("Function", null, "url", "return import(url)");
        Object.defineProperty(_fe6bed7cb749, _678bf849a9d5.$W.globals.importfn, {
          value: function(_fe6bed7cb749, _678bf849a9d5) {
            let _6ef14f166da3 = new URL(_678bf849a9d5, _fe6bed7cb749).href;
            return _678bf849a9d5.includes(":") || _678bf849a9d5.startsWith("/") || _678bf849a9d5.startsWith(".") || _678bf849a9d5.startsWith("..") ? _6c6fe0dec40b(`${(0, 
            _8be84367f9d6.Oy)(_6ef14f166da3, _35dc78c6b3fd.meta)}?type=module`) : _6c6fe0dec40b(_678bf849a9d5);
          },
          writable: !1,
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_fe6bed7cb749, _678bf849a9d5.$W.globals.metafn, {
          value: function(_35dc78c6b3fd, _fe6bed7cb749) {
            return _35dc78c6b3fd.url = _fe6bed7cb749, _35dc78c6b3fd.resolve = function(_35dc78c6b3fd) {
              return new URL(_35dc78c6b3fd, _fe6bed7cb749).href;
            }, _35dc78c6b3fd;
          },
          writable: !1,
          configurable: !1,
          enumerable: !1
        });
      }
    },
    4338: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      function n(_35dc78c6b3fd) {
        _35dc78c6b3fd.Proxy("IDBFactory.prototype.open", {
          apply(_fe6bed7cb749) {
            _fe6bed7cb749.args[0] = `${_35dc78c6b3fd.url.origin}@${_fe6bed7cb749.args[0]}`;
          }
        }), _35dc78c6b3fd.Trap("IDBDatabase.prototype.name", {
          get(_35dc78c6b3fd) {
            let _fe6bed7cb749 = _35dc78c6b3fd.get();
            return _fe6bed7cb749.substring(_fe6bed7cb749.indexOf("@") + 1);
          }
        });
      }
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        default: () => n
      });
    },
    6593: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      function n(_35dc78c6b3fd) {
        _35dc78c6b3fd.Proxy("StorageManager.prototype.getDirectory", {
          apply(_fe6bed7cb749) {
            let _6c6fe0dec40b = _fe6bed7cb749.call();
            _fe6bed7cb749.return((async () => {
              let _fe6bed7cb749 = await _6c6fe0dec40b, _678bf849a9d5 = await _fe6bed7cb749.getDirectoryHandle(`${_35dc78c6b3fd.url.origin.replace(/\/|\s|\./g, "-")}`, {
                create: !0
              });
              return Object.defineProperty(_678bf849a9d5, "name", {
                value: "",
                writable: !1
              }), _678bf849a9d5;
            })());
          }
        });
      }
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        default: () => n
      });
    },
    1320: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        default: () => s
      });
      var _678bf849a9d5 = _6c6fe0dec40b(1323), _8be84367f9d6 = _6c6fe0dec40b(2794), _6ef14f166da3 = _6c6fe0dec40b(1914);
      function s(_35dc78c6b3fd) {
        _678bf849a9d5.iswindow && _35dc78c6b3fd.Proxy("window.postMessage", {
          apply(_35dc78c6b3fd) {
            let {constructor: {constructor: _fe6bed7cb749}} = "object" == typeof _35dc78c6b3fd.args[0] && null !== _35dc78c6b3fd.args[0] ? _35dc78c6b3fd.args[0] : "object" == typeof _35dc78c6b3fd.args[2] && null !== _35dc78c6b3fd.args[2] ? _35dc78c6b3fd.args[2] : _35dc78c6b3fd.this && _6ef14f166da3.POLLUTANT in _35dc78c6b3fd.this && "object" == typeof _35dc78c6b3fd.this[_6ef14f166da3.POLLUTANT] && null !== _35dc78c6b3fd.this[_6ef14f166da3.POLLUTANT] ? _35dc78c6b3fd.this[_6ef14f166da3.POLLUTANT] : {}, _6c6fe0dec40b = _fe6bed7cb749("return globalThis")()[_8be84367f9d6.pX], _678bf849a9d5 = _fe6bed7cb749("...args", "this(...args)");
            _35dc78c6b3fd.args[0] = {
              $studyjet$messagetype: "window",
              $studyjet$origin: _6c6fe0dec40b.url.origin,
              $studyjet$data: _35dc78c6b3fd.args[0]
            }, "string" == typeof _35dc78c6b3fd.args[1] && (_35dc78c6b3fd.args[1] = "*"), "object" == typeof _35dc78c6b3fd.args[1] && (_35dc78c6b3fd.args[1].targetOrigin = "*"), 
            _35dc78c6b3fd.return(_678bf849a9d5.call(_35dc78c6b3fd.fn, ..._35dc78c6b3fd.args));
          }
        });
        let _fe6bed7cb749 = [ "MessagePort.prototype.postMessage" ];
        self.Worker && _fe6bed7cb749.push("Worker.prototype.postMessage"), _678bf849a9d5.iswindow || _fe6bed7cb749.push("self.postMessage"), 
        _35dc78c6b3fd.Proxy(_fe6bed7cb749, {
          apply(_35dc78c6b3fd) {
            _35dc78c6b3fd.args[0] = {
              $studyjet$messagetype: "worker",
              $studyjet$data: _35dc78c6b3fd.args[0]
            };
          }
        });
      }
    },
    1914: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        POLLUTANT: () => _8be84367f9d6,
        default: () => a
      });
      var _678bf849a9d5 = _6c6fe0dec40b(37);
      let _8be84367f9d6 = Symbol.for("studyjet realm pollutant");
      function a(_35dc78c6b3fd, _fe6bed7cb749) {
        Object.defineProperty(_fe6bed7cb749.Object.prototype, _678bf849a9d5.$W.globals.setrealmfn, {
          value(_35dc78c6b3fd) {
            return Object.defineProperty(this, _8be84367f9d6, {
              value: _35dc78c6b3fd,
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
    9701: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        default: () => i
      });
      var _678bf849a9d5 = _6c6fe0dec40b(1472);
      function i(_35dc78c6b3fd) {
        _35dc78c6b3fd.Proxy("EventSource", {
          construct(_fe6bed7cb749) {
            _fe6bed7cb749.args[0] = (0, _678bf849a9d5.Oy)(_fe6bed7cb749.args[0], _35dc78c6b3fd.meta);
          }
        }), _35dc78c6b3fd.Trap("EventSource.prototype.url", {
          get(_35dc78c6b3fd) {
            (0, _678bf849a9d5.v2)(_35dc78c6b3fd.get());
          }
        });
      }
    },
    6972: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        default: () => a
      });
      var _678bf849a9d5 = _6c6fe0dec40b(1323), _8be84367f9d6 = _6c6fe0dec40b(1472);
      function a(_35dc78c6b3fd) {
        _35dc78c6b3fd.Proxy("fetch", {
          apply(_fe6bed7cb749) {
            ("string" == typeof _fe6bed7cb749.args[0] || _fe6bed7cb749.args[0] instanceof URL) && (_fe6bed7cb749.args[0] = (0, 
            _8be84367f9d6.Oy)(_fe6bed7cb749.args[0], _35dc78c6b3fd.meta), _678bf849a9d5.isemulatedsw && (_fe6bed7cb749.args[0] += "?from=swruntime"));
          }
        }), _35dc78c6b3fd.Proxy("Request", {
          construct(_fe6bed7cb749) {
            ("string" == typeof _fe6bed7cb749.args[0] || _fe6bed7cb749.args[0] instanceof URL) && (_fe6bed7cb749.args[0] = (0, 
            _8be84367f9d6.Oy)(_fe6bed7cb749.args[0], _35dc78c6b3fd.meta), _678bf849a9d5.isemulatedsw && (_fe6bed7cb749.args[0] += "?from=swruntime"));
          }
        }), _35dc78c6b3fd.Trap("Response.prototype.url", {
          get: _35dc78c6b3fd => (0, _8be84367f9d6.v2)(_35dc78c6b3fd.get())
        }), _35dc78c6b3fd.Trap("Request.prototype.url", {
          get: _35dc78c6b3fd => (0, _8be84367f9d6.v2)(_35dc78c6b3fd.get())
        });
      }
    },
    9931: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      function n(_35dc78c6b3fd, _fe6bed7cb749) {
        let _6c6fe0dec40b = new WeakMap, _678bf849a9d5 = new WeakMap;
        _35dc78c6b3fd.Proxy("WebSocket", {
          construct(_678bf849a9d5) {
            let _8be84367f9d6 = new EventTarget;
            Object.setPrototypeOf(_8be84367f9d6, _678bf849a9d5.fn.prototype), _8be84367f9d6.constructor = _678bf849a9d5.fn;
            let _6ef14f166da3 = _35dc78c6b3fd.bare.createWebSocket(_678bf849a9d5.args[0], _678bf849a9d5.args[1], null, {
              "User-Agent": _fe6bed7cb749.navigator.userAgent,
              Origin: _35dc78c6b3fd.url.origin
            }), _d7b934a245ce = {
              extensions: "",
              protocol: "",
              url: _678bf849a9d5.args[0],
              binaryType: "blob",
              barews: _6ef14f166da3,
              onclose: null,
              onerror: null,
              onmessage: null,
              onopen: null
            };
            function o(_35dc78c6b3fd) {
              _d7b934a245ce["on" + _35dc78c6b3fd.type]?.(new Proxy(_35dc78c6b3fd, {
                get: (_35dc78c6b3fd, _fe6bed7cb749) => "isTrusted" === _fe6bed7cb749 || Reflect.get(_35dc78c6b3fd, _fe6bed7cb749)
              })), _8be84367f9d6.dispatchEvent(_35dc78c6b3fd);
            }
            _6ef14f166da3.addEventListener("open", () => {
              o(new Event("open"));
            }), _6ef14f166da3.addEventListener("close", _35dc78c6b3fd => {
              o(new CloseEvent("close", _35dc78c6b3fd));
            }), _6ef14f166da3.addEventListener("message", async _35dc78c6b3fd => {
              let _fe6bed7cb749 = _35dc78c6b3fd.data;
              "string" == typeof _fe6bed7cb749 || ("byteLength" in _fe6bed7cb749 ? "blob" === _d7b934a245ce.binaryType ? _fe6bed7cb749 = new Blob([ _fe6bed7cb749 ]) : Object.setPrototypeOf(_fe6bed7cb749, ArrayBuffer.prototype) : "arrayBuffer" in _fe6bed7cb749 && "arraybuffer" === _d7b934a245ce.binaryType && Object.setPrototypeOf(_fe6bed7cb749 = await _fe6bed7cb749.arrayBuffer(), ArrayBuffer.prototype)), 
              o(new MessageEvent("message", {
                data: _fe6bed7cb749,
                origin: _35dc78c6b3fd.origin,
                lastEventId: _35dc78c6b3fd.lastEventId,
                source: _35dc78c6b3fd.source,
                ports: _35dc78c6b3fd.ports
              }));
            }), _6ef14f166da3.addEventListener("error", () => {
              o(new Event("error"));
            }), _6c6fe0dec40b.set(_8be84367f9d6, _d7b934a245ce), _678bf849a9d5.return(_8be84367f9d6);
          }
        }), _35dc78c6b3fd.Trap("WebSocket.prototype.binaryType", {
          get: _35dc78c6b3fd => _6c6fe0dec40b.get(_35dc78c6b3fd.this).binaryType,
          set(_35dc78c6b3fd, _fe6bed7cb749) {
            let _678bf849a9d5 = _6c6fe0dec40b.get(_35dc78c6b3fd.this);
            ("blob" === _fe6bed7cb749 || "arraybuffer" === _fe6bed7cb749) && (_678bf849a9d5.binaryType = _fe6bed7cb749);
          }
        }), _35dc78c6b3fd.Trap("WebSocket.prototype.bufferedAmount", {
          get: () => 0
        }), _35dc78c6b3fd.Trap("WebSocket.prototype.extensions", {
          get: _35dc78c6b3fd => _6c6fe0dec40b.get(_35dc78c6b3fd.this).extensions
        }), _35dc78c6b3fd.Trap("WebSocket.prototype.onclose", {
          get: _35dc78c6b3fd => _6c6fe0dec40b.get(_35dc78c6b3fd.this).onclose,
          set(_35dc78c6b3fd, _fe6bed7cb749) {
            _6c6fe0dec40b.get(_35dc78c6b3fd.this).onclose = _fe6bed7cb749;
          }
        }), _35dc78c6b3fd.Trap("WebSocket.prototype.onerror", {
          get: _35dc78c6b3fd => _6c6fe0dec40b.get(_35dc78c6b3fd.this).onerror,
          set(_35dc78c6b3fd, _fe6bed7cb749) {
            _6c6fe0dec40b.get(_35dc78c6b3fd.this).onerror = _fe6bed7cb749;
          }
        }), _35dc78c6b3fd.Trap("WebSocket.prototype.onmessage", {
          get: _35dc78c6b3fd => _6c6fe0dec40b.get(_35dc78c6b3fd.this).onmessage,
          set(_35dc78c6b3fd, _fe6bed7cb749) {
            _6c6fe0dec40b.get(_35dc78c6b3fd.this).onmessage = _fe6bed7cb749;
          }
        }), _35dc78c6b3fd.Trap("WebSocket.prototype.onopen", {
          get: _35dc78c6b3fd => _6c6fe0dec40b.get(_35dc78c6b3fd.this).onopen,
          set(_35dc78c6b3fd, _fe6bed7cb749) {
            _6c6fe0dec40b.get(_35dc78c6b3fd.this).onopen = _fe6bed7cb749;
          }
        }), _35dc78c6b3fd.Trap("WebSocket.prototype.url", {
          get: _35dc78c6b3fd => _6c6fe0dec40b.get(_35dc78c6b3fd.this).url
        }), _35dc78c6b3fd.Trap("WebSocket.prototype.protocol", {
          get: _35dc78c6b3fd => _6c6fe0dec40b.get(_35dc78c6b3fd.this).protocol
        }), _35dc78c6b3fd.Trap("WebSocket.prototype.readyState", {
          get: _35dc78c6b3fd => _6c6fe0dec40b.get(_35dc78c6b3fd.this).barews.readyState
        }), _35dc78c6b3fd.Proxy("WebSocket.prototype.send", {
          apply(_35dc78c6b3fd) {
            let _fe6bed7cb749 = _6c6fe0dec40b.get(_35dc78c6b3fd.this);
            _35dc78c6b3fd.return(_fe6bed7cb749.barews.send(_35dc78c6b3fd.args[0]));
          }
        }), _35dc78c6b3fd.Proxy("WebSocket.prototype.close", {
          apply(_35dc78c6b3fd) {
            let _fe6bed7cb749 = _6c6fe0dec40b.get(_35dc78c6b3fd.this);
            void 0 === _35dc78c6b3fd.args[0] && (_35dc78c6b3fd.args[0] = 1e3), void 0 === _35dc78c6b3fd.args[1] && (_35dc78c6b3fd.args[1] = ""), 
            _35dc78c6b3fd.return(_fe6bed7cb749.barews.close(_35dc78c6b3fd.args[0], _35dc78c6b3fd.args[1]));
          }
        }), _35dc78c6b3fd.Proxy("WebSocketStream", {
          construct(_6c6fe0dec40b) {
            let _8be84367f9d6, _6ef14f166da3, _d7b934a245ce, _c2df18134758 = {};
            Object.setPrototypeOf(_c2df18134758, _6c6fe0dec40b.fn.prototype), _c2df18134758.constructor = _6c6fe0dec40b.fn;
            let _50e0514e3a09 = _35dc78c6b3fd.bare.createWebSocket(_6c6fe0dec40b.args[0], _6c6fe0dec40b.args[1], null, {
              "User-Agent": _fe6bed7cb749.navigator.userAgent,
              Origin: _35dc78c6b3fd.url.origin
            });
            _6c6fe0dec40b.args[1]?.signal.addEventListener("abort", () => {
              _50e0514e3a09.close(1e3, "");
            });
            let _713844858620 = {
              extensions: "",
              protocol: "",
              url: _6c6fe0dec40b.args[0],
              barews: _50e0514e3a09,
              opened: new Promise((_35dc78c6b3fd, _fe6bed7cb749) => {
                _8be84367f9d6 = _35dc78c6b3fd, _d7b934a245ce = _fe6bed7cb749;
              }),
              closed: new Promise(_35dc78c6b3fd => {
                _6ef14f166da3 = _35dc78c6b3fd;
              }),
              readable: new ReadableStream({
                start(_35dc78c6b3fd) {
                  _50e0514e3a09.addEventListener("message", async _fe6bed7cb749 => {
                    let _6c6fe0dec40b = _fe6bed7cb749.data;
                    "string" == typeof _6c6fe0dec40b || ("byteLength" in _6c6fe0dec40b ? Object.setPrototypeOf(_6c6fe0dec40b, ArrayBuffer.prototype) : "arrayBuffer" in _6c6fe0dec40b && Object.setPrototypeOf(_6c6fe0dec40b = await _6c6fe0dec40b.arrayBuffer(), ArrayBuffer.prototype)), 
                    _35dc78c6b3fd.enqueue(_6c6fe0dec40b);
                  });
                }
              }),
              writable: new WritableStream({
                write(_35dc78c6b3fd) {
                  _50e0514e3a09.send(_35dc78c6b3fd);
                }
              })
            };
            _50e0514e3a09.addEventListener("open", () => {
              _8be84367f9d6({
                readable: _713844858620.readable,
                writable: _713844858620.writable,
                extensions: _713844858620.extensions,
                protocol: _713844858620.protocol
              });
            }), _50e0514e3a09.addEventListener("close", _35dc78c6b3fd => {
              _6ef14f166da3({
                code: _35dc78c6b3fd.code,
                reason: _35dc78c6b3fd.reason
              });
            }), _50e0514e3a09.addEventListener("error", _35dc78c6b3fd => {
              _d7b934a245ce(_35dc78c6b3fd);
            }), _678bf849a9d5.set(_c2df18134758, _713844858620), _6c6fe0dec40b.return(_c2df18134758);
          }
        }), _35dc78c6b3fd.Trap("WebSocketStream.prototype.closed", {
          get: _35dc78c6b3fd => _678bf849a9d5.get(_35dc78c6b3fd.this).closed
        }), _35dc78c6b3fd.Trap("WebSocketStream.prototype.opened", {
          get: _35dc78c6b3fd => _678bf849a9d5.get(_35dc78c6b3fd.this).opened
        }), _35dc78c6b3fd.Trap("WebSocketStream.prototype.url", {
          get: _35dc78c6b3fd => _678bf849a9d5.get(_35dc78c6b3fd.this).url
        }), _35dc78c6b3fd.Proxy("WebSocketStream.prototype.close", {
          apply(_35dc78c6b3fd) {
            let _fe6bed7cb749 = _678bf849a9d5.get(_35dc78c6b3fd.this);
            return _35dc78c6b3fd.args[0] ? (void 0 === _35dc78c6b3fd.args[0].closeCode && (_35dc78c6b3fd.args[0].closeCode = 1e3), 
            void 0 === _35dc78c6b3fd.args[0].reason && (_35dc78c6b3fd.args[0].reason = ""), 
            _35dc78c6b3fd.return(_fe6bed7cb749.barews.close(_35dc78c6b3fd.args[0].closeCode, _35dc78c6b3fd.args[0].reason))) : _35dc78c6b3fd.return(_fe6bed7cb749.barews.close(1e3, ""));
          }
        });
      }
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        default: () => n
      });
    },
    248: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        default: () => a
      });
      var _678bf849a9d5 = _6c6fe0dec40b(37), _8be84367f9d6 = _6c6fe0dec40b(1472);
      function a(_35dc78c6b3fd, _fe6bed7cb749) {
        let _6c6fe0dec40b;
        _fe6bed7cb749.Worker && (0, _678bf849a9d5.U5)("syncxhr", _35dc78c6b3fd.url) && (_6c6fe0dec40b = _35dc78c6b3fd.natives.construct("Worker", _678bf849a9d5.$W.files.sync));
        let _6ef14f166da3 = Symbol("xhr original args"), _d7b934a245ce = Symbol("xhr headers");
        _35dc78c6b3fd.Proxy("XMLHttpRequest.prototype.open", {
          apply(_fe6bed7cb749) {
            _fe6bed7cb749.args[1] && (_fe6bed7cb749.args[1] = (0, _8be84367f9d6.Oy)(_fe6bed7cb749.args[1], _35dc78c6b3fd.meta)), 
            void 0 === _fe6bed7cb749.args[2] && (_fe6bed7cb749.args[2] = !0), _fe6bed7cb749.this[_6ef14f166da3] = _fe6bed7cb749.args;
          }
        }), _35dc78c6b3fd.Proxy("XMLHttpRequest.prototype.setRequestHeader", {
          apply(_35dc78c6b3fd) {
            (_35dc78c6b3fd.this[_d7b934a245ce] || (_35dc78c6b3fd.this[_d7b934a245ce] = {}))[_35dc78c6b3fd.args[0]] = _35dc78c6b3fd.args[1];
          }
        }), _35dc78c6b3fd.Proxy("XMLHttpRequest.prototype.send", {
          apply(_fe6bed7cb749) {
            let _8be84367f9d6 = _fe6bed7cb749.this[_6ef14f166da3];
            if (!_8be84367f9d6 || _8be84367f9d6[2]) return;
            if (!(0, _678bf849a9d5.U5)("syncxhr", _35dc78c6b3fd.url)) return console.warn("ignoring request - sync xhr disabled in flags"), 
            _fe6bed7cb749.return(void 0);
            let _c2df18134758 = new SharedArrayBuffer(1024, {
              maxByteLength: 2147483647
            }), _50e0514e3a09 = new DataView(_c2df18134758);
            _35dc78c6b3fd.natives.call("Worker.prototype.postMessage", _6c6fe0dec40b, {
              sab: _c2df18134758,
              args: _8be84367f9d6,
              headers: _fe6bed7cb749.this[_d7b934a245ce],
              body: _fe6bed7cb749.args[0]
            });
            let _713844858620 = performance.now();
            for (;0 === _50e0514e3a09.getUint8(0); ) if (performance.now() - _713844858620 > 1e3) throw Error("xhr timeout");
            let _eef48ff38eca = _50e0514e3a09.getUint16(1), _9281ea692b11 = _50e0514e3a09.getUint32(3), _539a9fec78eb = new Uint8Array(_9281ea692b11);
            _539a9fec78eb.set(new Uint8Array(_c2df18134758.slice(7, 7 + _9281ea692b11)));
            let _f78db6fdbb58 = (new TextDecoder).decode(_539a9fec78eb), _4f8d3fc53b00 = _50e0514e3a09.getUint32(7 + _9281ea692b11), _22bd8222854e = new Uint8Array(_4f8d3fc53b00);
            _22bd8222854e.set(new Uint8Array(_c2df18134758.slice(11 + _9281ea692b11, 11 + _9281ea692b11 + _4f8d3fc53b00)));
            let _5e75ad780ef0 = (new TextDecoder).decode(_22bd8222854e);
            _35dc78c6b3fd.RawTrap(_fe6bed7cb749.this, "status", {
              get: () => _eef48ff38eca
            }), _35dc78c6b3fd.RawTrap(_fe6bed7cb749.this, "responseText", {
              get: () => _5e75ad780ef0
            }), _35dc78c6b3fd.RawTrap(_fe6bed7cb749.this, "response", {
              get: () => "arraybuffer" === _fe6bed7cb749.this.responseType ? _22bd8222854e.buffer : _5e75ad780ef0
            }), _35dc78c6b3fd.RawTrap(_fe6bed7cb749.this, "responseXML", {
              get: () => (new DOMParser).parseFromString(_5e75ad780ef0, "text/xml")
            }), _35dc78c6b3fd.RawTrap(_fe6bed7cb749.this, "getAllResponseHeaders", {
              get: () => () => _f78db6fdbb58
            }), _35dc78c6b3fd.RawTrap(_fe6bed7cb749.this, "getResponseHeader", {
              get: () => _35dc78c6b3fd => {
                let _fe6bed7cb749 = RegExp(`^${_35dc78c6b3fd}: (.*)$`, "m").exec(_f78db6fdbb58);
                return _fe6bed7cb749 ? _fe6bed7cb749[1] : null;
              }
            }), _fe6bed7cb749.return(void 0);
          }
        }), _35dc78c6b3fd.Trap("XMLHttpRequest.prototype.responseURL", {
          get: _35dc78c6b3fd => (0, _8be84367f9d6.v2)(_35dc78c6b3fd.get())
        });
      }
    },
    7418: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        default: () => i
      });
      var _678bf849a9d5 = _6c6fe0dec40b(1478);
      function i(_35dc78c6b3fd, _fe6bed7cb749) {
        _35dc78c6b3fd.Proxy([ "setTimeout", "setInterval" ], {
          apply(_fe6bed7cb749) {
            _fe6bed7cb749.args.length > 0 && "string" == typeof _fe6bed7cb749.args[0] && (_fe6bed7cb749.args[0] = (0, 
            _678bf849a9d5.o)(_fe6bed7cb749.args[0], "(setTimeout string eval)", _35dc78c6b3fd.meta));
          }
        });
      }
    },
    7791: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        default: () => o,
        enabled: () => s
      });
      var _678bf849a9d5 = _6c6fe0dec40b(37), _8be84367f9d6 = _6c6fe0dec40b(8665).A;
      let _6ef14f166da3 = "/*scramtag ", s = _35dc78c6b3fd => (0, _678bf849a9d5.U5)("sourcemaps", _35dc78c6b3fd.url);
      function o(_35dc78c6b3fd, _fe6bed7cb749) {
        Object.defineProperty(_fe6bed7cb749, _678bf849a9d5.$W.globals.pushsourcemapfn, {
          value: (_fe6bed7cb749, _6c6fe0dec40b) => {
            let _678bf849a9d5 = performance.now();
            !function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
              let _678bf849a9d5 = Uint8Array.from(_fe6bed7cb749), _8be84367f9d6 = new DataView(_678bf849a9d5.buffer), _6ef14f166da3 = new TextDecoder("utf-8"), _d7b934a245ce = [], _c2df18134758 = _8be84367f9d6.getUint32(0, !0), _50e0514e3a09 = 4;
              for (let _35dc78c6b3fd = 0; _35dc78c6b3fd < _c2df18134758; _35dc78c6b3fd++) {
                let _35dc78c6b3fd = _8be84367f9d6.getUint32(_50e0514e3a09, !0);
                _50e0514e3a09 += 4;
                let _fe6bed7cb749 = _8be84367f9d6.getUint32(_50e0514e3a09, !0);
                _50e0514e3a09 += 4;
                let _6c6fe0dec40b = _8be84367f9d6.getUint8(_50e0514e3a09);
                if (_50e0514e3a09 += 1, 0 == _6c6fe0dec40b) _d7b934a245ce.push({
                  type: _6c6fe0dec40b,
                  start: _35dc78c6b3fd,
                  size: _fe6bed7cb749
                }); else if (1 == _6c6fe0dec40b) {
                  let _c2df18134758 = _35dc78c6b3fd + _fe6bed7cb749, _713844858620 = _8be84367f9d6.getUint32(_50e0514e3a09, !0);
                  _50e0514e3a09 += 4;
                  let _eef48ff38eca = _6ef14f166da3.decode(_678bf849a9d5.subarray(_50e0514e3a09, _50e0514e3a09 + _713844858620));
                  _d7b934a245ce.push({
                    type: _6c6fe0dec40b,
                    start: _35dc78c6b3fd,
                    end: _c2df18134758,
                    str: _eef48ff38eca
                  });
                }
              }
              _35dc78c6b3fd.box.sourcemaps[_6c6fe0dec40b] = _d7b934a245ce;
            }(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b), _8be84367f9d6.time(_35dc78c6b3fd.meta, _678bf849a9d5, `scramtag parse for ${_6c6fe0dec40b}`);
          },
          enumerable: !1,
          writable: !1,
          configurable: !1
        }), _35dc78c6b3fd.Proxy("Function.prototype.toString", {
          apply(_fe6bed7cb749) {
            performance.now(), function(_35dc78c6b3fd, _fe6bed7cb749) {
              let _6c6fe0dec40b = _fe6bed7cb749.fn.call(_fe6bed7cb749.this), _678bf849a9d5 = function(_35dc78c6b3fd) {
                let _fe6bed7cb749 = _35dc78c6b3fd.indexOf(_6ef14f166da3);
                if (-1 === _fe6bed7cb749) return null;
                let _6c6fe0dec40b = _35dc78c6b3fd.indexOf("*/", _fe6bed7cb749);
                if (-1 === _6c6fe0dec40b) throw console.log(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b), 
                Error("unreachable");
                let _678bf849a9d5 = _35dc78c6b3fd.substring(_fe6bed7cb749 + 2, _6c6fe0dec40b).split(" ");
                if (3 !== _678bf849a9d5.length || "scramtag" !== _678bf849a9d5[0] || !Number.isSafeInteger(+_678bf849a9d5[1])) throw console.log(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b, _678bf849a9d5), 
                Error("invalid tag");
                return [ _678bf849a9d5[2], _fe6bed7cb749, +_678bf849a9d5[1] ];
              }(_6c6fe0dec40b);
              if (!_678bf849a9d5) return _fe6bed7cb749.return(_6c6fe0dec40b);
              let [_8be84367f9d6, _d7b934a245ce, _c2df18134758] = _678bf849a9d5, _50e0514e3a09 = _c2df18134758 - _d7b934a245ce, _713844858620 = _50e0514e3a09 + _6c6fe0dec40b.length, _eef48ff38eca = _35dc78c6b3fd.box.sourcemaps[_8be84367f9d6];
              if (!_eef48ff38eca) return console.warn("failed to get rewrites for tag", _8be84367f9d6), 
              _fe6bed7cb749.return(_6c6fe0dec40b);
              let _9281ea692b11 = 0;
              for (;_9281ea692b11 < _eef48ff38eca.length; ) if (_eef48ff38eca[_9281ea692b11].start < _50e0514e3a09) _9281ea692b11++; else break;
              let _539a9fec78eb = _9281ea692b11;
              for (;_539a9fec78eb < _eef48ff38eca.length; ) if (function(_35dc78c6b3fd) {
                if (0 === _35dc78c6b3fd.type) return _35dc78c6b3fd.start + _35dc78c6b3fd.size;
                if (1 === _35dc78c6b3fd.type) return _35dc78c6b3fd.end;
                throw "unreachable";
              }(_eef48ff38eca[_539a9fec78eb]) < _713844858620) _539a9fec78eb++; else break;
              let _f78db6fdbb58 = _eef48ff38eca.slice(_9281ea692b11, _539a9fec78eb), _4f8d3fc53b00 = "", _22bd8222854e = 0;
              for (let _35dc78c6b3fd of _f78db6fdbb58) if (_4f8d3fc53b00 += _6c6fe0dec40b.slice(_22bd8222854e, _35dc78c6b3fd.start - _50e0514e3a09), 
              0 === _35dc78c6b3fd.type) _22bd8222854e = _35dc78c6b3fd.start + _35dc78c6b3fd.size - _50e0514e3a09; else if (1 === _35dc78c6b3fd.type) _4f8d3fc53b00 += _35dc78c6b3fd.str, 
              _22bd8222854e = _35dc78c6b3fd.end - _50e0514e3a09; else throw "unreachable";
              _4f8d3fc53b00 += _6c6fe0dec40b.slice(_22bd8222854e), _4f8d3fc53b00 = _4f8d3fc53b00.replace(`${_6ef14f166da3}${_c2df18134758} ${_8be84367f9d6}*/`, ""), 
              _fe6bed7cb749.return(_4f8d3fc53b00);
            }(_35dc78c6b3fd, _fe6bed7cb749);
          }
        });
      }
    },
    9399: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        default: () => a
      });
      var _678bf849a9d5 = _6c6fe0dec40b(4110), _8be84367f9d6 = _6c6fe0dec40b(1472);
      function a(_35dc78c6b3fd, _fe6bed7cb749) {
        _35dc78c6b3fd.Proxy("Worker", {
          construct(_fe6bed7cb749) {
            _fe6bed7cb749.args[0] = (0, _8be84367f9d6.Oy)(_fe6bed7cb749.args[0], _35dc78c6b3fd.meta) + "?dest=worker", 
            _fe6bed7cb749.args[1] && "module" === _fe6bed7cb749.args[1].type && (_fe6bed7cb749.args[0] += "&type=module");
            let _6c6fe0dec40b = _fe6bed7cb749.call(), _6ef14f166da3 = new _678bf849a9d5.DD;
            (async () => {
              let _fe6bed7cb749 = await _6ef14f166da3.getInnerPort();
              _35dc78c6b3fd.natives.call("Worker.prototype.postMessage", _6c6fe0dec40b, {
                $studyjet$type: "baremuxinit",
                port: _fe6bed7cb749
              }, [ _fe6bed7cb749 ]);
            })();
          }
        }), _35dc78c6b3fd.Proxy("SharedWorker", {
          construct(_fe6bed7cb749) {
            _fe6bed7cb749.args[0] = (0, _8be84367f9d6.Oy)(_fe6bed7cb749.args[0], _35dc78c6b3fd.meta) + "?dest=sharedworker", 
            _fe6bed7cb749.args[1] && "string" == typeof _fe6bed7cb749.args[1] && (_fe6bed7cb749.args[1] = `${_35dc78c6b3fd.url.origin}@${_fe6bed7cb749.args[1]}`), 
            _fe6bed7cb749.args[1] && "object" == typeof _fe6bed7cb749.args[1] && ("module" === _fe6bed7cb749.args[1].type && (_fe6bed7cb749.args[0] += "&type=module"), 
            _fe6bed7cb749.args[1].name && (_fe6bed7cb749.args[1].name = `${_35dc78c6b3fd.url.origin}@${_fe6bed7cb749.args[1].name}`));
            let _6c6fe0dec40b = _fe6bed7cb749.call(), _6ef14f166da3 = new _678bf849a9d5.DD;
            (async () => {
              let _fe6bed7cb749 = await _6ef14f166da3.getInnerPort();
              _35dc78c6b3fd.natives.call("MessagePort.prototype.postMessage", _6c6fe0dec40b.port, {
                $studyjet$type: "baremuxinit",
                port: _fe6bed7cb749
              }, [ _fe6bed7cb749 ]);
            })();
          }
        }), _35dc78c6b3fd.Proxy("Worklet.prototype.addModule", {
          apply(_fe6bed7cb749) {
            _fe6bed7cb749.args[0] && (_fe6bed7cb749.args[0] = (0, _8be84367f9d6.Oy)(_fe6bed7cb749.args[0], _35dc78c6b3fd.meta) + "?dest=worklet");
          }
        });
      }
    },
    581: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        createWrapFn: () => o,
        default: () => c,
        order: () => _c2df18134758
      });
      var _678bf849a9d5 = _6c6fe0dec40b(1323), _8be84367f9d6 = _6c6fe0dec40b(2794), _6ef14f166da3 = _6c6fe0dec40b(37), _d7b934a245ce = _6c6fe0dec40b(591);
      function o(_35dc78c6b3fd, _fe6bed7cb749) {
        return function(_6c6fe0dec40b, _6ef14f166da3) {
          if (_6c6fe0dec40b === _fe6bed7cb749.location) return _35dc78c6b3fd.locationProxy;
          if (_6c6fe0dec40b === _fe6bed7cb749.eval) return _d7b934a245ce.indirectEval.bind(_35dc78c6b3fd, _6ef14f166da3);
          if (_678bf849a9d5.iswindow) {
            if (_6c6fe0dec40b === _fe6bed7cb749.parent) if (_8be84367f9d6.pX in _fe6bed7cb749.parent) return _fe6bed7cb749.parent; else return _fe6bed7cb749; else if (_6c6fe0dec40b === _fe6bed7cb749.top) {
              let _35dc78c6b3fd = _fe6bed7cb749;
              for (;;) {
                let _fe6bed7cb749 = _35dc78c6b3fd.parent.self;
                if (_fe6bed7cb749 === _35dc78c6b3fd || !(_8be84367f9d6.pX in _fe6bed7cb749)) break;
                _35dc78c6b3fd = _fe6bed7cb749;
              }
              return _35dc78c6b3fd;
            }
          }
          return _6c6fe0dec40b;
        };
      }
      let _c2df18134758 = 4;
      function c(_35dc78c6b3fd, _fe6bed7cb749) {
        Object.defineProperty(_fe6bed7cb749, _6ef14f166da3.$W.globals.wrapfn, {
          value: _35dc78c6b3fd.wrapfn,
          writable: !1,
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_fe6bed7cb749, _6ef14f166da3.$W.globals.wrappropertyfn, {
          value: function(_35dc78c6b3fd) {
            return "location" === _35dc78c6b3fd || "parent" === _35dc78c6b3fd || "top" === _35dc78c6b3fd || "eval" === _35dc78c6b3fd ? _6ef14f166da3.$W.globals.wrappropertybase + _35dc78c6b3fd : _35dc78c6b3fd;
          },
          writable: !1,
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_fe6bed7cb749, _6ef14f166da3.$W.globals.cleanrestfn, {
          value: function(_35dc78c6b3fd) {},
          writable: !1,
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_fe6bed7cb749.Object.prototype, _6ef14f166da3.$W.globals.wrappropertybase + "location", {
          get: function() {
            return this === _fe6bed7cb749 || this === _fe6bed7cb749.document ? _35dc78c6b3fd.locationProxy : this.location;
          },
          set(_6c6fe0dec40b) {
            if (this === _fe6bed7cb749 || this === _fe6bed7cb749.document) {
              _35dc78c6b3fd.url = _6c6fe0dec40b;
              return;
            }
            this.location = _6c6fe0dec40b;
          },
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_fe6bed7cb749.Object.prototype, _6ef14f166da3.$W.globals.wrappropertybase + "parent", {
          get: function() {
            return _35dc78c6b3fd.wrapfn(this.parent, !1);
          },
          set(_35dc78c6b3fd) {
            this.parent = _35dc78c6b3fd;
          },
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_fe6bed7cb749.Object.prototype, _6ef14f166da3.$W.globals.wrappropertybase + "top", {
          get: function() {
            return _35dc78c6b3fd.wrapfn(this.top, !1);
          },
          set(_35dc78c6b3fd) {
            this.top = _35dc78c6b3fd;
          },
          configurable: !1,
          enumerable: !1
        }), Object.defineProperty(_fe6bed7cb749.Object.prototype, _6ef14f166da3.$W.globals.wrappropertybase + "eval", {
          get: function() {
            return _35dc78c6b3fd.wrapfn(this.eval, !0);
          },
          set(_35dc78c6b3fd) {
            this.eval = _35dc78c6b3fd;
          },
          configurable: !1,
          enumerable: !1
        }), _fe6bed7cb749.$scramitize = function(_35dc78c6b3fd) {
          return location, _678bf849a9d5.iswindow && _fe6bed7cb749.top, "string" == typeof _35dc78c6b3fd && _35dc78c6b3fd.includes("studyjet"), 
          "string" == typeof _35dc78c6b3fd && _35dc78c6b3fd.includes(location.origin), _35dc78c6b3fd;
        }, Object.defineProperty(_fe6bed7cb749, _6ef14f166da3.$W.globals.trysetfn, {
          value: function(_6c6fe0dec40b, _678bf849a9d5, _8be84367f9d6) {
            return _6c6fe0dec40b instanceof _fe6bed7cb749.Location && (_35dc78c6b3fd.locationProxy.href = _8be84367f9d6, 
            !0);
          },
          writable: !1,
          configurable: !1
        });
      }
    },
    1229: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        SingletonBox: () => n
      });
      class n {
        ownerclient;
        clients=[];
        globals=new Map;
        documents=new Map;
        locations=new Map;
        sourcemaps={};
        constructor(_35dc78c6b3fd) {
          this.ownerclient = _35dc78c6b3fd;
        }
        registerClient(_35dc78c6b3fd, _fe6bed7cb749) {
          this.clients.push(_35dc78c6b3fd), this.globals.set(_fe6bed7cb749, _35dc78c6b3fd), 
          this.documents.set(_fe6bed7cb749.document, _35dc78c6b3fd), this.locations.set(_fe6bed7cb749.location, _35dc78c6b3fd);
        }
      }
    },
    8409: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        StudyJetServiceWorkerRuntime: () => a
      });
      var _678bf849a9d5 = _6c6fe0dec40b(1472), _8be84367f9d6 = _6c6fe0dec40b(8665).A;
      class a {
        client;
        recvport;
        constructor(_35dc78c6b3fd) {
          this.client = _35dc78c6b3fd, self.onconnect = _fe6bed7cb749 => {
            let _6c6fe0dec40b = _fe6bed7cb749.ports[0];
            _8be84367f9d6.log("sw", "connected"), _6c6fe0dec40b.addEventListener("message", _fe6bed7cb749 => {
              console.log("sw", _fe6bed7cb749.data), "studyjet$type" in _fe6bed7cb749.data && ("init" === _fe6bed7cb749.data.studyjet$type ? (this.recvport = _fe6bed7cb749.data.studyjet$port, 
              this.recvport.postMessage({
                studyjet$type: "init"
              })) : s.call(this, _35dc78c6b3fd, _fe6bed7cb749.data));
            }), _6c6fe0dec40b.start();
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
              dispatchEvent: _35dc78c6b3fd => !1
            },
            showNotification: async () => {},
            unregister: async () => !0,
            update: async () => {},
            installing: null,
            waiting: null
          }, this.client.global.ServiceWorkerGlobalScope = this.client.global;
        }
      }
      function s(_35dc78c6b3fd, _fe6bed7cb749) {
        let _6c6fe0dec40b = this.recvport, _6ef14f166da3 = _fe6bed7cb749.studyjet$type, _d7b934a245ce = _fe6bed7cb749.studyjet$token, _c2df18134758 = _35dc78c6b3fd.eventcallbacks.get(self);
        if ("fetch" === _6ef14f166da3) {
          _8be84367f9d6.log("ee", _fe6bed7cb749);
          let _6ef14f166da3 = _c2df18134758.filter(_35dc78c6b3fd => "fetch" === _35dc78c6b3fd.event);
          if (!_6ef14f166da3) return;
          for (let _c2df18134758 of _6ef14f166da3) {
            let _6ef14f166da3 = _fe6bed7cb749.studyjet$request, _50e0514e3a09 = new _35dc78c6b3fd.natives.Request((0, 
            _678bf849a9d5.v2)(_6ef14f166da3.url), {
              body: _6ef14f166da3.body,
              headers: new Headers(_6ef14f166da3.headers),
              method: _6ef14f166da3.method,
              mode: "same-origin"
            });
            Object.defineProperty(_50e0514e3a09, "destination", {
              value: _6ef14f166da3.destinitation
            });
            let _713844858620 = new Event("fetch");
            _713844858620.request = _50e0514e3a09;
            let _eef48ff38eca = !1;
            _713844858620.respondWith = _35dc78c6b3fd => {
              _eef48ff38eca = !0, (async () => {
                let _fe6bed7cb749 = {
                  studyjet$type: "fetch",
                  studyjet$token: _d7b934a245ce,
                  studyjet$response: {
                    body: (_35dc78c6b3fd = await _35dc78c6b3fd).body,
                    headers: Array.from(_35dc78c6b3fd.headers.entries()),
                    status: _35dc78c6b3fd.status,
                    statusText: _35dc78c6b3fd.statusText
                  }
                };
                _8be84367f9d6.log("sw", "responding", _fe6bed7cb749), _6c6fe0dec40b.postMessage(_fe6bed7cb749, [ _35dc78c6b3fd.body ]);
              })();
            }, _8be84367f9d6.log("to fn", _713844858620), _c2df18134758.proxiedCallback(new Proxy(_713844858620, {
              get: (_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) => "isTrusted" === _fe6bed7cb749 || Reflect.get(_35dc78c6b3fd, _fe6bed7cb749)
            })), _eef48ff38eca || (console.log("sw", "no response"), _6c6fe0dec40b.postMessage({
              studyjet$type: "fetch",
              studyjet$token: _d7b934a245ce,
              studyjet$response: !1
            }));
          }
        }
      }
    },
    9353: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        default: () => i
      });
      var _678bf849a9d5 = _6c6fe0dec40b(1472);
      function i(_35dc78c6b3fd) {
        _35dc78c6b3fd.Proxy("importScripts", {
          apply(_fe6bed7cb749) {
            for (let _6c6fe0dec40b in _fe6bed7cb749.args) _fe6bed7cb749.args[_6c6fe0dec40b] = (0, 
            _678bf849a9d5.Oy)(_fe6bed7cb749.args[_6c6fe0dec40b], _35dc78c6b3fd.meta);
          }
        });
      }
    },
    3402: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.d(_fe6bed7cb749, {
        q: () => l
      });
      var _678bf849a9d5 = _6c6fe0dec40b(37), _8be84367f9d6 = _6c6fe0dec40b(4869), _6ef14f166da3 = _6c6fe0dec40b(6570), _d7b934a245ce = _6c6fe0dec40b(1862), _c2df18134758 = _6c6fe0dec40b(8665).A;
      class l extends EventTarget {
        db;
        constructor(_35dc78c6b3fd) {
          super();
          const t = (_35dc78c6b3fd, _fe6bed7cb749) => {
            for (let _6c6fe0dec40b in _fe6bed7cb749) _fe6bed7cb749[_6c6fe0dec40b] instanceof Object && _6c6fe0dec40b in _35dc78c6b3fd && Object.assign(_fe6bed7cb749[_6c6fe0dec40b], t(_35dc78c6b3fd[_6c6fe0dec40b], _fe6bed7cb749[_6c6fe0dec40b]));
            return Object.assign(_35dc78c6b3fd || {}, _fe6bed7cb749);
          }, _fe6bed7cb749 = t({
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
              encode: _35dc78c6b3fd => _35dc78c6b3fd ? encodeURIComponent(_35dc78c6b3fd) : _35dc78c6b3fd,
              decode: _35dc78c6b3fd => _35dc78c6b3fd ? decodeURIComponent(_35dc78c6b3fd) : _35dc78c6b3fd
            }
          }, _35dc78c6b3fd);
          _fe6bed7cb749.codec.encode = _fe6bed7cb749.codec.encode.toString(), _fe6bed7cb749.codec.decode = _fe6bed7cb749.codec.decode.toString(), 
          (0, _678bf849a9d5.Nk)(_fe6bed7cb749);
        }
        async init() {
          (0, _678bf849a9d5.Ec)(), await this.openIDB(), navigator.serviceWorker.controller?.postMessage({
            studyjet$type: "loadConfig",
            config: _678bf849a9d5.$W
          }), _c2df18134758.log("config loaded"), navigator.serviceWorker.addEventListener("message", _35dc78c6b3fd => {
            if (!("studyjet$type" in _35dc78c6b3fd.data)) return;
            let _fe6bed7cb749 = _35dc78c6b3fd.data;
            "download" === _fe6bed7cb749.studyjet$type && this.dispatchEvent(new _d7b934a245ce.StudyJetGlobalDownloadEvent(_fe6bed7cb749.download));
          });
        }
        createFrame(_35dc78c6b3fd) {
          return _35dc78c6b3fd || (_35dc78c6b3fd = document.createElement("iframe")), new _8be84367f9d6.X(this, _35dc78c6b3fd);
        }
        encodeUrl(_35dc78c6b3fd) {
          if ("string" == typeof _35dc78c6b3fd && (_35dc78c6b3fd = new URL(_35dc78c6b3fd)), 
          "http:" != _35dc78c6b3fd.protocol && "https:" != _35dc78c6b3fd.protocol) return _35dc78c6b3fd.href;
          let _fe6bed7cb749 = (0, _678bf849a9d5.hD)(_35dc78c6b3fd.hash.slice(1));
          return _35dc78c6b3fd.hash = "", _678bf849a9d5.$W.prefix + (0, _678bf849a9d5.hD)(_35dc78c6b3fd.href) + (_fe6bed7cb749 ? "#" + _fe6bed7cb749 : "");
        }
        decodeUrl(_35dc78c6b3fd) {
          _35dc78c6b3fd instanceof URL && (_35dc78c6b3fd = _35dc78c6b3fd.toString());
          let _fe6bed7cb749 = location.origin + _678bf849a9d5.$W.prefix;
          return (0, _678bf849a9d5.P_)(_35dc78c6b3fd.slice(_fe6bed7cb749.length));
        }
        async openIDB() {
          let _35dc78c6b3fd = await (0, _6ef14f166da3.P2)("@d7a6431b92e", 1, {
            upgrade(_35dc78c6b3fd) {
              _35dc78c6b3fd.objectStoreNames.contains("config") || _35dc78c6b3fd.createObjectStore("config"), 
              _35dc78c6b3fd.objectStoreNames.contains("cookies") || _35dc78c6b3fd.createObjectStore("cookies"), 
              _35dc78c6b3fd.objectStoreNames.contains("redirectTrackers") || _35dc78c6b3fd.createObjectStore("redirectTrackers"), 
              _35dc78c6b3fd.objectStoreNames.contains("referrerPolicies") || _35dc78c6b3fd.createObjectStore("referrerPolicies"), 
              _35dc78c6b3fd.objectStoreNames.contains("publicSuffixList") || _35dc78c6b3fd.createObjectStore("publicSuffixList");
            }
          });
          return this.db = _35dc78c6b3fd, await this.#_35dc78c6b3fd(), _35dc78c6b3fd;
        }
        async #_35dc78c6b3fd() {
          this.db ? await this.db.put("config", _678bf849a9d5.$W, "config") : console.error("Store not ready!");
        }
        async modifyConfig(_35dc78c6b3fd) {
          (0, _678bf849a9d5.Nk)(Object.assign({}, _678bf849a9d5.$W, _35dc78c6b3fd)), (0, _678bf849a9d5.Ec)(), 
          await this.#_35dc78c6b3fd(), navigator.serviceWorker.controller?.postMessage({
            studyjet$type: "loadConfig",
            config: _678bf849a9d5.$W
          });
        }
        addEventListener(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
          super.addEventListener(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b);
        }
      }
    },
    4869: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.d(_fe6bed7cb749, {
        X: () => a
      });
      var _678bf849a9d5 = _6c6fe0dec40b(2794), _8be84367f9d6 = _6c6fe0dec40b(8665).A;
      class a extends EventTarget {
        controller;
        frame;
        constructor(_35dc78c6b3fd, _fe6bed7cb749) {
          super(), this.controller = _35dc78c6b3fd, this.frame = _fe6bed7cb749, _fe6bed7cb749.name = `${Array(8).fill(0).map(() => Math.floor(36 * Math.random()).toString(36)).join("")}`, 
          _fe6bed7cb749[_678bf849a9d5.zr] = this;
        }
        get client() {
          return this.frame.contentWindow.window[_678bf849a9d5.pX];
        }
        get url() {
          return this.client.url;
        }
        go(_35dc78c6b3fd) {
          _35dc78c6b3fd instanceof URL && (_35dc78c6b3fd = _35dc78c6b3fd.toString()), _8be84367f9d6.log("navigated to", _35dc78c6b3fd), 
          this.frame.src = this.controller.encodeUrl(_35dc78c6b3fd);
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
        addEventListener(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
          super.addEventListener(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b);
        }
      }
    },
    9052: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        StudyJetController: () => _8be84367f9d6.q,
        StudyJetFrame: () => _678bf849a9d5.X
      });
      var _678bf849a9d5 = _6c6fe0dec40b(4869), _8be84367f9d6 = _6c6fe0dec40b(3402);
      console.warn("you are using the last version of studyjet v1, if possible, please upgrade to v2 for better performance and more features");
    },
    8665: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.d(_fe6bed7cb749, {
        A: () => _8be84367f9d6
      });
      let _678bf849a9d5 = {
        log: console.log,
        warn: console.warn,
        error: console.error,
        debug: console.debug,
        info: console.info
      }, _8be84367f9d6 = {
        fmt: function(_35dc78c6b3fd, _fe6bed7cb749, ..._6c6fe0dec40b) {
          let _678bf849a9d5 = Error.prepareStackTrace;
          Error.prepareStackTrace = (_35dc78c6b3fd, _fe6bed7cb749) => {
            _fe6bed7cb749.shift(), _fe6bed7cb749.shift(), _fe6bed7cb749.shift();
            let _6c6fe0dec40b = "";
            for (let _35dc78c6b3fd = 1; _35dc78c6b3fd < Math.min(2, _fe6bed7cb749.length); _35dc78c6b3fd++) _fe6bed7cb749[_35dc78c6b3fd].getFunctionName() && (_6c6fe0dec40b += `${_fe6bed7cb749[_35dc78c6b3fd].getFunctionName()} -> ` + _6c6fe0dec40b);
            return _6c6fe0dec40b + (_fe6bed7cb749[0].getFunctionName() || "Anonymous");
          };
          let _8be84367f9d6 = function() {
            try {
              throw Error();
            } catch (_35dc78c6b3fd) {
              return _35dc78c6b3fd.stack;
            }
          }();
          Error.prepareStackTrace = _678bf849a9d5, this.print(_35dc78c6b3fd, _8be84367f9d6, _fe6bed7cb749, ..._6c6fe0dec40b);
        },
        print(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b, ..._8be84367f9d6) {
          (_678bf849a9d5[_35dc78c6b3fd] || _678bf849a9d5.log)(`%c${_fe6bed7cb749}%c ${_6c6fe0dec40b}`, `\n  \tbackground-color: ${{
            log: "#000",
            warn: "#f80",
            error: "#f00",
            debug: "transparent"
          }[_35dc78c6b3fd]};\n  \tcolor: ${{
            log: "#fff",
            warn: "#fff",
            error: "#fff",
            debug: "gray"
          }[_35dc78c6b3fd]};\n  \tpadding: ${{
            log: 2,
            warn: 4,
            error: 4,
            debug: 0
          }[_35dc78c6b3fd]}px;\n  \tfont-weight: bold;\n  \tfont-family: monospace;\n  \tfont-size: 0.9em;\n  `, `${"debug" === _35dc78c6b3fd ? "color: gray" : ""}`, ..._8be84367f9d6);
        },
        log: function(_35dc78c6b3fd, ..._fe6bed7cb749) {
          this.fmt("log", _35dc78c6b3fd, ..._fe6bed7cb749);
        },
        warn: function(_35dc78c6b3fd, ..._fe6bed7cb749) {
          this.fmt("warn", _35dc78c6b3fd, ..._fe6bed7cb749);
        },
        error: function(_35dc78c6b3fd, ..._fe6bed7cb749) {
          this.fmt("error", _35dc78c6b3fd, ..._fe6bed7cb749);
        },
        debug: function(_35dc78c6b3fd, ..._fe6bed7cb749) {
          this.fmt("debug", _35dc78c6b3fd, ..._fe6bed7cb749);
        },
        time(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {}
      };
    },
    3831: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.d(_fe6bed7cb749, {
        k: () => a
      });
      var _678bf849a9d5 = _6c6fe0dec40b(4322), _8be84367f9d6 = _6c6fe0dec40b.n(_678bf849a9d5);
      class a {
        cookies={};
        setCookies(_35dc78c6b3fd, _fe6bed7cb749) {
          for (let _6c6fe0dec40b of _35dc78c6b3fd) {
            let _35dc78c6b3fd = _8be84367f9d6()(_6c6fe0dec40b), _678bf849a9d5 = {
              domain: _35dc78c6b3fd.domain,
              sameSite: _35dc78c6b3fd.sameSite,
              ..._35dc78c6b3fd[0]
            };
            _678bf849a9d5.domain || (_678bf849a9d5.domain = "." + _fe6bed7cb749.hostname), _678bf849a9d5.domain.startsWith(".") || (_678bf849a9d5.domain = "." + _678bf849a9d5.domain), 
            _678bf849a9d5.path || (_678bf849a9d5.path = "/"), _678bf849a9d5.sameSite || (_678bf849a9d5.sameSite = "lax"), 
            _678bf849a9d5.expires && (_678bf849a9d5.expires = _678bf849a9d5.expires.toString());
            let _6ef14f166da3 = `${_678bf849a9d5.domain}@${_678bf849a9d5.path}@${_678bf849a9d5.name}`;
            this.cookies[_6ef14f166da3] = _678bf849a9d5;
          }
        }
        getCookies(_35dc78c6b3fd, _fe6bed7cb749) {
          let _6c6fe0dec40b = new Date, _678bf849a9d5 = Object.values(this.cookies), _8be84367f9d6 = [];
          for (let _6ef14f166da3 of _678bf849a9d5) {
            if (_6ef14f166da3.expires && new Date(_6ef14f166da3.expires) < _6c6fe0dec40b) {
              delete this.cookies[`${_6ef14f166da3.domain}@${_6ef14f166da3.path}@${_6ef14f166da3.name}`];
              continue;
            }
            (!_6ef14f166da3.secure || "https:" === _35dc78c6b3fd.protocol) && (!_6ef14f166da3.httpOnly || !_fe6bed7cb749) && _35dc78c6b3fd.pathname.startsWith(_6ef14f166da3.path) && (!_6ef14f166da3.domain.startsWith(".") || _35dc78c6b3fd.hostname.endsWith(_6ef14f166da3.domain.slice(1))) && _8be84367f9d6.push(_6ef14f166da3);
          }
          return _8be84367f9d6.map(_35dc78c6b3fd => `${_35dc78c6b3fd.name}=${_35dc78c6b3fd.value}`).join("; ");
        }
        load(_35dc78c6b3fd) {
          if ("object" == typeof _35dc78c6b3fd) return _35dc78c6b3fd;
          this.cookies = JSON.parse(_35dc78c6b3fd);
        }
        dump() {
          return JSON.stringify(this.cookies);
        }
      }
    },
    1427: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.d(_fe6bed7cb749, {
        u: () => n
      });
      class n {
        headers={};
        set(_35dc78c6b3fd, _fe6bed7cb749) {
          this.headers[_35dc78c6b3fd.toLowerCase()] = _fe6bed7cb749;
        }
      }
    },
    2393: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.d(_fe6bed7cb749, {
        V: () => _d7b934a245ce
      });
      var _678bf849a9d5 = _6c6fe0dec40b(2614), _8be84367f9d6 = _6c6fe0dec40b(884), _6ef14f166da3 = _6c6fe0dec40b(1472);
      let _d7b934a245ce = [ {
        fn: (_35dc78c6b3fd, _fe6bed7cb749) => (0, _6ef14f166da3.Oy)(_35dc78c6b3fd, _fe6bed7cb749),
        src: [ "embed", "script", "img", "frame", "source", "input", "track" ],
        href: [ "a", "link", "area", "use", "image" ],
        data: [ "object" ],
        action: [ "form" ],
        formaction: [ "button", "input", "textarea", "submit" ],
        poster: [ "video" ],
        "xlink:href": [ "image" ]
      }, {
        fn: (_35dc78c6b3fd, _fe6bed7cb749) => (0, _6ef14f166da3.Oy)(_35dc78c6b3fd, _fe6bed7cb749),
        src: [ "iframe" ]
      }, {
        fn: (_35dc78c6b3fd, _fe6bed7cb749) => null,
        sandbox: [ "iframe" ]
      }, {
        fn: (_35dc78c6b3fd, _fe6bed7cb749) => _35dc78c6b3fd.startsWith("blob:") ? (0, _6ef14f166da3.$n)(_35dc78c6b3fd) : (0, 
        _6ef14f166da3.Oy)(_35dc78c6b3fd, _fe6bed7cb749),
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
        fn: (_35dc78c6b3fd, _fe6bed7cb749) => (0, _8be84367f9d6.PV)(_35dc78c6b3fd, _fe6bed7cb749),
        srcset: [ "img", "source" ],
        imagesrcset: [ "link" ]
      }, {
        fn: (_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) => (0, _8be84367f9d6.Qs)(_35dc78c6b3fd, _6c6fe0dec40b, {
          origin: new URL(_fe6bed7cb749.origin.origin),
          base: new URL(_fe6bed7cb749.origin.origin)
        }, !0),
        srcdoc: [ "iframe" ]
      }, {
        fn: (_35dc78c6b3fd, _fe6bed7cb749) => (0, _678bf849a9d5.s)(_35dc78c6b3fd, _fe6bed7cb749),
        style: "*"
      }, {
        fn: (_35dc78c6b3fd, _fe6bed7cb749) => "_top" === _35dc78c6b3fd || "_unfencedTop" === _35dc78c6b3fd ? _fe6bed7cb749.topFrameName : "_parent" === _35dc78c6b3fd ? _fe6bed7cb749.parentFrameName : _35dc78c6b3fd,
        target: [ "a", "base" ]
      } ];
    },
    37: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      let _678bf849a9d5, _8be84367f9d6, _6ef14f166da3;
      _6c6fe0dec40b.d(_fe6bed7cb749, {
        $W: () => _6ef14f166da3,
        Ec: () => o,
        Nk: () => c,
        P_: () => _8be84367f9d6,
        U5: () => l,
        hD: () => _678bf849a9d5
      }), _6c6fe0dec40b(2393), _6c6fe0dec40b(9381), _6c6fe0dec40b(2416);
      let _d7b934a245ce = Function;
      function o() {
        _678bf849a9d5 = _d7b934a245ce(`return ${_6ef14f166da3.codec.encode}`)(), _8be84367f9d6 = _d7b934a245ce(`return ${_6ef14f166da3.codec.decode}`)();
      }
      function l(_35dc78c6b3fd, _fe6bed7cb749) {
        let _6c6fe0dec40b = _6ef14f166da3.flags[_35dc78c6b3fd];
        for (let _6c6fe0dec40b in _6ef14f166da3.siteFlags) {
          let _678bf849a9d5 = _6ef14f166da3.siteFlags[_6c6fe0dec40b];
          if (new RegExp(_6c6fe0dec40b).test(_fe6bed7cb749.href) && _35dc78c6b3fd in _678bf849a9d5) return _678bf849a9d5[_35dc78c6b3fd];
        }
        return _6c6fe0dec40b;
      }
      function c(_35dc78c6b3fd) {
        _6ef14f166da3 = _35dc78c6b3fd, o();
      }
    },
    2614: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.d(_fe6bed7cb749, {
        f: () => a,
        s: () => i
      });
      var _678bf849a9d5 = _6c6fe0dec40b(1472);
      function i(_35dc78c6b3fd, _fe6bed7cb749) {
        return s("rewrite", _35dc78c6b3fd, _fe6bed7cb749);
      }
      function a(_35dc78c6b3fd) {
        return s("unrewrite", _35dc78c6b3fd);
      }
      function s(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
        return (_fe6bed7cb749 = (_fe6bed7cb749 = new String(_fe6bed7cb749).toString()).replace(/url\(['"]?(.+?)['"]?\)/gm, (_fe6bed7cb749, _8be84367f9d6) => {
          let _6ef14f166da3 = "rewrite" === _35dc78c6b3fd ? (0, _678bf849a9d5.Oy)(_8be84367f9d6.trim(), _6c6fe0dec40b) : (0, 
          _678bf849a9d5.v2)(_8be84367f9d6.trim());
          return _fe6bed7cb749.replace(_8be84367f9d6, _6ef14f166da3);
        })).replace(/@import\s+(url\s*?\(.{0,9999}?\)|['"].{0,9999}?['"]|.{0,9999}?)($|\s|;)/gm, (_fe6bed7cb749, _8be84367f9d6) => _fe6bed7cb749.replace(_8be84367f9d6, _8be84367f9d6.replace(/^(url\(['"]?|['"]|)(.+?)(['"]|['"]?\)|)$/gm, (_fe6bed7cb749, _8be84367f9d6, _6ef14f166da3, _d7b934a245ce) => {
          if (_8be84367f9d6.startsWith("url")) return _fe6bed7cb749;
          let _c2df18134758 = "rewrite" === _35dc78c6b3fd ? (0, _678bf849a9d5.Oy)(_6ef14f166da3.trim(), _6c6fe0dec40b) : (0, 
          _678bf849a9d5.v2)(_6ef14f166da3.trim());
          return `${_8be84367f9d6}${_c2df18134758}${_d7b934a245ce}`;
        })));
      }
    },
    4435: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.d(_fe6bed7cb749, {
        l: () => l
      });
      var _678bf849a9d5 = _6c6fe0dec40b(1472), _8be84367f9d6 = _6c6fe0dec40b(8228);
      let _6ef14f166da3 = new Set([ "cross-origin-embedder-policy", "cross-origin-opener-policy", "cross-origin-resource-policy", "content-security-policy", "content-security-policy-report-only", "expect-ct", "feature-policy", "origin-isolation", "strict-transport-security", "upgrade-insecure-requests", "x-content-type-options", "x-download-options", "x-frame-options", "x-permitted-cross-domain-policies", "x-powered-by", "x-xss-protection", "clear-site-data" ]), _d7b934a245ce = new Set([ "location", "content-location", "referer" ]);
      function o(_35dc78c6b3fd, _fe6bed7cb749) {
        return _35dc78c6b3fd.replace(/<(.*)>/gi, _35dc78c6b3fd => (0, _678bf849a9d5.Oy)(_35dc78c6b3fd, _fe6bed7cb749));
      }
      async function l(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b, _c2df18134758) {
        let _50e0514e3a09 = {};
        for (let _fe6bed7cb749 in _35dc78c6b3fd) _50e0514e3a09[_fe6bed7cb749.toLowerCase()] = _35dc78c6b3fd[_fe6bed7cb749];
        for (let _35dc78c6b3fd of _6ef14f166da3) delete _50e0514e3a09[_35dc78c6b3fd];
        for (let _35dc78c6b3fd of _d7b934a245ce) _50e0514e3a09[_35dc78c6b3fd] && (_50e0514e3a09[_35dc78c6b3fd] = (0, 
        _678bf849a9d5.Oy)(_50e0514e3a09[_35dc78c6b3fd]?.toString(), _fe6bed7cb749));
        if ("string" == typeof _50e0514e3a09.link ? _50e0514e3a09.link = o(_50e0514e3a09.link, _fe6bed7cb749) : Array.isArray(_50e0514e3a09.link) && (_50e0514e3a09.link = _50e0514e3a09.link.map(_35dc78c6b3fd => o(_35dc78c6b3fd, _fe6bed7cb749))), 
        "string" == typeof _50e0514e3a09.referer) {
          let _35dc78c6b3fd = new URL(_50e0514e3a09.referer), _6c6fe0dec40b = await _c2df18134758.get(_35dc78c6b3fd.href);
          if (_6c6fe0dec40b) {
            let _678bf849a9d5 = _6c6fe0dec40b.policy.toLowerCase().split(",").map(_35dc78c6b3fd => _35dc78c6b3fd.trim());
            _678bf849a9d5.includes("no-referrer") || _678bf849a9d5.includes("no-referrer-when-downgrade") && "http:" === _fe6bed7cb749.origin.protocol && "https:" === _35dc78c6b3fd.protocol ? delete _50e0514e3a09.referer : _678bf849a9d5.includes("origin") ? _50e0514e3a09.referer = _35dc78c6b3fd.origin : _678bf849a9d5.includes("origin-when-cross-origin") ? _35dc78c6b3fd.origin !== _fe6bed7cb749.origin.origin ? _50e0514e3a09.referer = _35dc78c6b3fd.origin : _50e0514e3a09.referer = _35dc78c6b3fd.href : _678bf849a9d5.includes("same-origin") ? _35dc78c6b3fd.origin === _fe6bed7cb749.origin.origin ? _50e0514e3a09.referer = _35dc78c6b3fd.href : delete _50e0514e3a09.referer : _678bf849a9d5.includes("strict-origin") ? "http:" === _fe6bed7cb749.origin.protocol && "https:" === _35dc78c6b3fd.protocol ? delete _50e0514e3a09.referer : _50e0514e3a09.referer = _35dc78c6b3fd.origin : _35dc78c6b3fd.origin === _fe6bed7cb749.origin.origin ? _50e0514e3a09.referer = _35dc78c6b3fd.href : "http:" === _fe6bed7cb749.origin.protocol && "https:" === _35dc78c6b3fd.protocol ? delete _50e0514e3a09.referer : _50e0514e3a09.referer = _35dc78c6b3fd.origin;
          }
        }
        return "string" == typeof _50e0514e3a09["sec-fetch-dest"] && "" === _50e0514e3a09["sec-fetch-dest"] && (_50e0514e3a09["sec-fetch-dest"] = "empty"), 
        "string" == typeof _50e0514e3a09["sec-fetch-site"] && "none" !== _50e0514e3a09["sec-fetch-site"] && ("string" == typeof _50e0514e3a09.referer ? _50e0514e3a09["sec-fetch-site"] = await (0, 
        _8be84367f9d6.ps)(_fe6bed7cb749, new URL(_50e0514e3a09.referer), _6c6fe0dec40b) : (console.warn("Missing referrer header; can't rewrite sec-fetch-site properly. Falling back to unsafe deletion."), 
        delete _50e0514e3a09["sec-fetch-site"])), _50e0514e3a09;
      }
    },
    884: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.d(_fe6bed7cb749, {
        PV: () => m,
        Qs: () => f,
        Uk: () => h,
        nK: () => g
      });
      var _678bf849a9d5 = _6c6fe0dec40b(3808), _8be84367f9d6 = _6c6fe0dec40b(8866), _6ef14f166da3 = _6c6fe0dec40b(6498), _d7b934a245ce = _6c6fe0dec40b(1472), _c2df18134758 = _6c6fe0dec40b(2614), _50e0514e3a09 = _6c6fe0dec40b(1478), _713844858620 = _6c6fe0dec40b(37), _eef48ff38eca = _6c6fe0dec40b(2393), _9281ea692b11 = _6c6fe0dec40b(8665).A;
      function h(_35dc78c6b3fd, _fe6bed7cb749) {
        let _6c6fe0dec40b = JSON.stringify(_35dc78c6b3fd.dump()), _678bf849a9d5 = `\n\t\tself.COOKIE = ${_6c6fe0dec40b};\n\t\t$studyjetLoadClient().loadAndHook(${JSON.stringify(_713844858620.$W)});\n\t\tif ("document" in self && document?.currentScript) {\n\t\t\tdocument.currentScript.remove();\n\t\t}\n\t`, _8be84367f9d6 = y(_539a9fec78eb.encode(_678bf849a9d5));
        return [ _fe6bed7cb749(_713844858620.$W.files.wasm), _fe6bed7cb749(_713844858620.$W.files.all), _fe6bed7cb749("data:application/javascript;base64," + _8be84367f9d6) ];
      }
      let _539a9fec78eb = new TextEncoder;
      function f(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b, _713844858620 = !1) {
        let _4f8d3fc53b00 = performance.now(), _22bd8222854e = function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b, _713844858620 = !1) {
          let _9281ea692b11 = new _8be84367f9d6.DV((_35dc78c6b3fd, _fe6bed7cb749) => _fe6bed7cb749), _4f8d3fc53b00 = new _678bf849a9d5.iX(_9281ea692b11);
          if (_4f8d3fc53b00.write(_35dc78c6b3fd), _4f8d3fc53b00.end(), function e(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
            if ("base" === _35dc78c6b3fd.name && void 0 !== _35dc78c6b3fd.attribs.href && (_6c6fe0dec40b.base = new URL(_35dc78c6b3fd.attribs.href, _6c6fe0dec40b.origin)), 
            _35dc78c6b3fd.attribs) {
              for (let _678bf849a9d5 of _eef48ff38eca.V) for (let _8be84367f9d6 in _678bf849a9d5) {
                let _6ef14f166da3 = _678bf849a9d5[_8be84367f9d6.toLowerCase()];
                if ("function" != typeof _6ef14f166da3 && ("*" === _6ef14f166da3 || _6ef14f166da3.includes(_35dc78c6b3fd.name)) && void 0 !== _35dc78c6b3fd.attribs[_8be84367f9d6]) {
                  let _6ef14f166da3 = _35dc78c6b3fd.attribs[_8be84367f9d6], _d7b934a245ce = _678bf849a9d5.fn(_6ef14f166da3, _6c6fe0dec40b, _fe6bed7cb749);
                  null === _d7b934a245ce ? delete _35dc78c6b3fd.attribs[_8be84367f9d6] : _35dc78c6b3fd.attribs[_8be84367f9d6] = _d7b934a245ce, 
                  _35dc78c6b3fd.attribs[`studyjet-attr-${_8be84367f9d6}`] = _6ef14f166da3;
                }
              }
              for (let [_fe6bed7cb749, _678bf849a9d5] of Object.entries(_35dc78c6b3fd.attribs)) _f78db6fdbb58.includes(_fe6bed7cb749) && (_35dc78c6b3fd.attribs[`studyjet-attr-${_fe6bed7cb749}`] = _678bf849a9d5, 
              _35dc78c6b3fd.attribs[_fe6bed7cb749] = (0, _50e0514e3a09.o)(_678bf849a9d5, `(inline ${_fe6bed7cb749} on element)`, _6c6fe0dec40b));
            }
            if ("style" === _35dc78c6b3fd.name && void 0 !== _35dc78c6b3fd.children[0] && (_35dc78c6b3fd.children[0].data = (0, 
            _c2df18134758.s)(_35dc78c6b3fd.children[0].data, _6c6fe0dec40b)), "script" === _35dc78c6b3fd.name && "module" === _35dc78c6b3fd.attribs.type && _35dc78c6b3fd.attribs.src && (_35dc78c6b3fd.attribs.src = _35dc78c6b3fd.attribs.src + "?type=module"), 
            "script" === _35dc78c6b3fd.name && "importmap" === _35dc78c6b3fd.attribs.type && void 0 !== _35dc78c6b3fd.children[0]) {
              let _fe6bed7cb749 = _35dc78c6b3fd.children[0].data;
              try {
                let _678bf849a9d5 = JSON.parse(_fe6bed7cb749);
                if (_678bf849a9d5.imports) for (let _35dc78c6b3fd in _678bf849a9d5.imports) {
                  let _fe6bed7cb749 = _678bf849a9d5.imports[_35dc78c6b3fd];
                  "string" == typeof _fe6bed7cb749 && (_fe6bed7cb749 = (0, _d7b934a245ce.Oy)(_fe6bed7cb749, _6c6fe0dec40b), 
                  _678bf849a9d5.imports[_35dc78c6b3fd] = _fe6bed7cb749);
                }
                _35dc78c6b3fd.children[0].data = JSON.stringify(_678bf849a9d5);
              } catch (e) {
                console.error("Failed to parse importmap JSON:", e);
              }
            }
            if ("script" === _35dc78c6b3fd.name && /(application|text)\/javascript|module|undefined/.test(_35dc78c6b3fd.attribs.type) && void 0 !== _35dc78c6b3fd.children[0]) {
              let _fe6bed7cb749 = _35dc78c6b3fd.children[0].data, _678bf849a9d5 = "module" === _35dc78c6b3fd.attribs.type;
              _35dc78c6b3fd.attribs["studyjet-attr-script-source-src"] = y(_539a9fec78eb.encode(_fe6bed7cb749)), 
              _fe6bed7cb749 = _fe6bed7cb749.replace(/<!--[\s\S]*?-->/g, ""), _35dc78c6b3fd.children[0].data = (0, 
              _50e0514e3a09.o)(_fe6bed7cb749, "(inline script element)", _6c6fe0dec40b, _678bf849a9d5);
            }
            if ("meta" === _35dc78c6b3fd.name && void 0 !== _35dc78c6b3fd.attribs["http-equiv"]) {
              if ("content-security-policy" === _35dc78c6b3fd.attribs["http-equiv"].toLowerCase()) _35dc78c6b3fd = new _8be84367f9d6.Mw(_35dc78c6b3fd.attribs.content); else if ("refresh" === _35dc78c6b3fd.attribs["http-equiv"] && _35dc78c6b3fd.attribs.content.includes("url")) {
                let _fe6bed7cb749 = _35dc78c6b3fd.attribs.content.split("url=");
                _fe6bed7cb749[1] && (_fe6bed7cb749[1] = (0, _d7b934a245ce.Oy)(_fe6bed7cb749[1].trim(), _6c6fe0dec40b)), 
                _35dc78c6b3fd.attribs.content = _fe6bed7cb749.join("url=");
              }
            }
            if (_35dc78c6b3fd.childNodes) for (let _678bf849a9d5 in _35dc78c6b3fd.childNodes) _35dc78c6b3fd.childNodes[_678bf849a9d5] = e(_35dc78c6b3fd.childNodes[_678bf849a9d5], _fe6bed7cb749, _6c6fe0dec40b);
            return _35dc78c6b3fd;
          }(_9281ea692b11.root, _fe6bed7cb749, _6c6fe0dec40b), _713844858620) {
            let _35dc78c6b3fd = function e(_35dc78c6b3fd) {
              if (_35dc78c6b3fd.type === _678bf849a9d5.RJ.vw && "head" === _35dc78c6b3fd.name) return _35dc78c6b3fd;
              if (_35dc78c6b3fd.childNodes) for (let _fe6bed7cb749 of _35dc78c6b3fd.childNodes) {
                let _35dc78c6b3fd = e(_fe6bed7cb749);
                if (_35dc78c6b3fd) return _35dc78c6b3fd;
              }
              return null;
            }(_9281ea692b11.root);
            _35dc78c6b3fd || (_35dc78c6b3fd = new _8be84367f9d6.Hg("head", {}, []), _9281ea692b11.root.children.unshift(_35dc78c6b3fd)), 
            _35dc78c6b3fd.children.unshift(...h(_fe6bed7cb749, _35dc78c6b3fd => new _8be84367f9d6.Hg("script", {
              src: _35dc78c6b3fd
            })));
          }
          return (0, _6ef14f166da3.A)(_9281ea692b11.root, {
            encodeEntities: "utf8",
            decodeEntities: !1
          });
        }(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b, _713844858620);
        return _9281ea692b11.time(_6c6fe0dec40b, _4f8d3fc53b00, "html rewrite"), _22bd8222854e;
      }
      function g(_35dc78c6b3fd) {
        let _fe6bed7cb749 = new _8be84367f9d6.DV((_35dc78c6b3fd, _fe6bed7cb749) => _fe6bed7cb749), _6c6fe0dec40b = new _678bf849a9d5.iX(_fe6bed7cb749);
        return _6c6fe0dec40b.write(_35dc78c6b3fd), _6c6fe0dec40b.end(), !function e(_35dc78c6b3fd) {
          if ("attribs" in _35dc78c6b3fd) for (let _fe6bed7cb749 in _35dc78c6b3fd.attribs) {
            if ("studyjet-attr-script-source-src" == _fe6bed7cb749) {
              _35dc78c6b3fd.children[0] && "data" in _35dc78c6b3fd.children[0] && (_35dc78c6b3fd.children[0].data = atob(_35dc78c6b3fd.attribs[_fe6bed7cb749]));
              continue;
            }
            _fe6bed7cb749.startsWith("studyjet-attr-") && (_35dc78c6b3fd.attribs[_fe6bed7cb749.slice(14)] = _35dc78c6b3fd.attribs[_fe6bed7cb749], 
            delete _35dc78c6b3fd.attribs[_fe6bed7cb749]);
          }
          if ("childNodes" in _35dc78c6b3fd) for (let _fe6bed7cb749 of _35dc78c6b3fd.childNodes) e(_fe6bed7cb749);
        }(_fe6bed7cb749.root), (0, _6ef14f166da3.A)(_fe6bed7cb749.root, {
          decodeEntities: !1
        });
      }
      function m(_35dc78c6b3fd, _fe6bed7cb749) {
        return _35dc78c6b3fd.split(/ .*,/).map(_35dc78c6b3fd => _35dc78c6b3fd.trim()).map(_35dc78c6b3fd => {
          let [_6c6fe0dec40b, ..._678bf849a9d5] = _35dc78c6b3fd.split(/\s+/), _8be84367f9d6 = (0, 
          _d7b934a245ce.Oy)(_6c6fe0dec40b.trim(), _fe6bed7cb749);
          return _678bf849a9d5.length > 0 ? `${_8be84367f9d6} ${_678bf849a9d5.join(" ")}` : _8be84367f9d6;
        }).join(", ");
      }
      function y(_35dc78c6b3fd) {
        return btoa(Array.from(_35dc78c6b3fd, _35dc78c6b3fd => String.fromCodePoint(_35dc78c6b3fd)).join(""));
      }
      let _f78db6fdbb58 = [ "onbeforexrselect", "onabort", "onbeforeinput", "onbeforematch", "onbeforetoggle", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncontentvisibilityautostatechange", "oncontextlost", "oncontextmenu", "oncontextrestored", "oncuechange", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "onformdata", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onresize", "onscroll", "onsecuritypolicyviolation", "onseeked", "onseeking", "onselect", "onslotchange", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "onvolumechange", "onwaiting", "onwebkitanimationend", "onwebkitanimationiteration", "onwebkitanimationstart", "onwebkittransitionend", "onwheel", "onauxclick", "ongotpointercapture", "onlostpointercapture", "onpointerdown", "onpointermove", "onpointerrawupdate", "onpointerup", "onpointercancel", "onpointerover", "onpointerout", "onpointerenter", "onpointerleave", "onselectstart", "onselectionchange", "onanimationend", "onanimationiteration", "onanimationstart", "ontransitionrun", "ontransitionstart", "ontransitionend", "ontransitioncancel", "oncopy", "oncut", "onpaste", "onscrollend", "onscrollsnapchange", "onscrollsnapchanging" ];
    },
    9381: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b(2614), _6c6fe0dec40b(4435), _6c6fe0dec40b(884), _6c6fe0dec40b(1478), 
      _6c6fe0dec40b(1472), _6c6fe0dec40b(2015), _6c6fe0dec40b(1561);
    },
    1478: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.d(_fe6bed7cb749, {
        o: () => s
      });
      var _678bf849a9d5 = _6c6fe0dec40b(37), _8be84367f9d6 = _6c6fe0dec40b(1561), _6ef14f166da3 = _6c6fe0dec40b(8665).A;
      function s(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b, _d7b934a245ce = !1) {
        try {
          let _c2df18134758 = function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b, _678bf849a9d5 = !1) {
            return function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b, _678bf849a9d5) {
              let [_d7b934a245ce, _c2df18134758] = (0, _8be84367f9d6.nb)(_6c6fe0dec40b);
              try {
                let _c2df18134758, _50e0514e3a09 = performance.now();
                _c2df18134758 = "string" == typeof _35dc78c6b3fd ? _d7b934a245ce.rewrite_js(_35dc78c6b3fd, _6c6fe0dec40b.base.href, _fe6bed7cb749 || "(unknown)", _678bf849a9d5) : _d7b934a245ce.rewrite_js_bytes(_35dc78c6b3fd, _6c6fe0dec40b.base.href, _fe6bed7cb749 || "(unknown)", _678bf849a9d5), 
                _6ef14f166da3.time(_6c6fe0dec40b, _50e0514e3a09, `oxc rewrite for "${_fe6bed7cb749 || "(unknown)"}"`);
                let {js: _713844858620, map: _eef48ff38eca, scramtag: _9281ea692b11, errors: _539a9fec78eb} = _c2df18134758;
                return {
                  js: "string" == typeof _35dc78c6b3fd ? _8be84367f9d6.su.decode(_713844858620) : _713844858620,
                  tag: _9281ea692b11,
                  map: _eef48ff38eca,
                  errors: _539a9fec78eb
                };
              } finally {
                _c2df18134758();
              }
            }(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b, _678bf849a9d5);
          }(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b, _d7b934a245ce), _50e0514e3a09 = _c2df18134758.js;
          if ((0, _678bf849a9d5.U5)("sourcemaps", _6c6fe0dec40b.base)) {
            let _35dc78c6b3fd = globalThis[_678bf849a9d5.$W.globals.pushsourcemapfn];
            if (_35dc78c6b3fd) _35dc78c6b3fd(Array.from(_c2df18134758.map), _c2df18134758.tag); else {
              _50e0514e3a09 instanceof Uint8Array && (_50e0514e3a09 = (new TextDecoder).decode(_50e0514e3a09));
              let _35dc78c6b3fd = `${_678bf849a9d5.$W.globals.pushsourcemapfn}([${_c2df18134758.map.join(",")}], "${_c2df18134758.tag}");`, _fe6bed7cb749 = /^\s*(['"])use strict\1;?/;
              _50e0514e3a09 = _fe6bed7cb749.test(_50e0514e3a09) ? _50e0514e3a09.replace(_fe6bed7cb749, `$&\n${_35dc78c6b3fd}`) : `${_35dc78c6b3fd}\n${_50e0514e3a09}`;
            }
          }
          if ((0, _678bf849a9d5.U5)("rewriterLogs", _6c6fe0dec40b.base)) for (let _35dc78c6b3fd of _c2df18134758.errors) console.error("oxc parse error", _35dc78c6b3fd);
          return _50e0514e3a09;
        } catch (_6ef14f166da3) {
          if (console.warn("failed rewriting js for", _fe6bed7cb749 || "(unknown)", _6ef14f166da3.message, _35dc78c6b3fd instanceof Uint8Array ? _8be84367f9d6.su.decode(_35dc78c6b3fd) : _35dc78c6b3fd), 
          (0, _678bf849a9d5.U5)("allowInvalidJs", _6c6fe0dec40b.base)) return _35dc78c6b3fd;
          throw _6ef14f166da3;
        }
      }
      Error.stackTraceLimit = 50;
    },
    1472: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.d(_fe6bed7cb749, {
        $n: () => o,
        IP: () => s,
        Oy: () => l,
        v2: () => c
      });
      var _678bf849a9d5 = _6c6fe0dec40b(37), _8be84367f9d6 = _6c6fe0dec40b(1478);
      function a(_35dc78c6b3fd, _fe6bed7cb749) {
        try {
          return new URL(_35dc78c6b3fd, _fe6bed7cb749);
        } catch {
          return null;
        }
      }
      function s(_35dc78c6b3fd, _fe6bed7cb749) {
        let _6c6fe0dec40b = new URL(_35dc78c6b3fd.substring(5));
        return "blob:" + _fe6bed7cb749.origin.origin + _6c6fe0dec40b.pathname;
      }
      function o(_35dc78c6b3fd) {
        let _fe6bed7cb749 = new URL(_35dc78c6b3fd.substring(5));
        return "blob:" + location.origin + _fe6bed7cb749.pathname;
      }
      function l(_35dc78c6b3fd, _fe6bed7cb749) {
        if (_35dc78c6b3fd instanceof URL && (_35dc78c6b3fd = _35dc78c6b3fd.toString()), 
        _35dc78c6b3fd.startsWith("javascript:")) return "javascript:" + (0, _8be84367f9d6.o)(_35dc78c6b3fd.slice(11), "(javascript: url)", _fe6bed7cb749);
        {
          if (_35dc78c6b3fd.startsWith("blob:") || _35dc78c6b3fd.startsWith("data:")) return location.origin + _678bf849a9d5.$W.prefix + _35dc78c6b3fd;
          if (_35dc78c6b3fd.startsWith("mailto:") || _35dc78c6b3fd.startsWith("about:")) return _35dc78c6b3fd;
          let _6c6fe0dec40b = _fe6bed7cb749.base.href;
          _6c6fe0dec40b.startsWith("about:") && (_6c6fe0dec40b = c(self.location.href));
          let _8be84367f9d6 = a(_35dc78c6b3fd, _6c6fe0dec40b);
          if (!_8be84367f9d6) return _35dc78c6b3fd;
          let _6ef14f166da3 = (0, _678bf849a9d5.hD)(_8be84367f9d6.hash.slice(1));
          return _8be84367f9d6.hash = "", location.origin + _678bf849a9d5.$W.prefix + (0, 
          _678bf849a9d5.hD)(_8be84367f9d6.href) + (_6ef14f166da3 ? "#" + _6ef14f166da3 : "");
        }
      }
      function c(_35dc78c6b3fd) {
        _35dc78c6b3fd instanceof URL && (_35dc78c6b3fd = _35dc78c6b3fd.toString());
        let _fe6bed7cb749 = location.origin + _678bf849a9d5.$W.prefix;
        if (_35dc78c6b3fd.startsWith("javascript:")) return _35dc78c6b3fd;
        {
          if (_35dc78c6b3fd.startsWith("blob:")) return _35dc78c6b3fd;
          if (_35dc78c6b3fd.startsWith(_fe6bed7cb749 + "blob:") || _35dc78c6b3fd.startsWith(_fe6bed7cb749 + "data:")) return _35dc78c6b3fd.substring(_fe6bed7cb749.length);
          if (_35dc78c6b3fd.startsWith("mailto:") || _35dc78c6b3fd.startsWith("about:")) return _35dc78c6b3fd;
          let _6c6fe0dec40b = a(_35dc78c6b3fd);
          if (!_6c6fe0dec40b) return _35dc78c6b3fd;
          let _8be84367f9d6 = (0, _678bf849a9d5.P_)(_6c6fe0dec40b.hash.slice(1));
          return _6c6fe0dec40b.hash = "", (0, _678bf849a9d5.P_)(_6c6fe0dec40b.href.slice(_fe6bed7cb749.length) + (_8be84367f9d6 ? "#" + _8be84367f9d6 : ""));
        }
      }
    },
    1561: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      let _678bf849a9d5;
      _6c6fe0dec40b.d(_fe6bed7cb749, {
        n$: () => d,
        nb: () => g,
        su: () => _9281ea692b11
      });
      var _8be84367f9d6 = _6c6fe0dec40b(3907), _6ef14f166da3 = _6c6fe0dec40b(37), _d7b934a245ce = _6c6fe0dec40b(1472), _c2df18134758 = _6c6fe0dec40b(2393), _50e0514e3a09 = _6c6fe0dec40b(2614), _713844858620 = _6c6fe0dec40b(1478), _eef48ff38eca = _6c6fe0dec40b(884);
      async function d() {
        _678bf849a9d5 = new Uint8Array(await fetch(_6ef14f166da3.$W.files.wasm).then(_35dc78c6b3fd => _35dc78c6b3fd.arrayBuffer()));
      }
      self.WASM && (_678bf849a9d5 = Uint8Array.from(atob(self.WASM), _35dc78c6b3fd => _35dc78c6b3fd.charCodeAt(0)));
      let _9281ea692b11 = new TextDecoder, _539a9fec78eb = "\0asm".split("").map(_35dc78c6b3fd => _35dc78c6b3fd.charCodeAt(0)), _f78db6fdbb58 = [];
      function g(_35dc78c6b3fd) {
        let _fe6bed7cb749;
        if (!(_678bf849a9d5 instanceof Uint8Array)) throw Error("rewriter wasm not found (was it fetched correctly?)");
        if (![ ..._678bf849a9d5.slice(0, 4) ].every((_35dc78c6b3fd, _fe6bed7cb749) => _35dc78c6b3fd === _539a9fec78eb[_fe6bed7cb749])) throw Error("rewriter wasm does not have wasm magic (was it fetched correctly?)\nrewriter wasm contents: " + _9281ea692b11.decode(_678bf849a9d5));
        (0, _8be84367f9d6.QR)({
          module: new WebAssembly.Module(_678bf849a9d5)
        });
        let _6c6fe0dec40b = _f78db6fdbb58.findIndex(_35dc78c6b3fd => !_35dc78c6b3fd.inUse), _4f8d3fc53b00 = _f78db6fdbb58.length;
        return -1 === _6c6fe0dec40b ? ((0, _6ef14f166da3.U5)("rewriterLogs", _35dc78c6b3fd.base) && console.log(`creating new rewriter, ${_4f8d3fc53b00} rewriters made already`), 
        _fe6bed7cb749 = {
          rewriter: new _8be84367f9d6.LW({
            config: _6ef14f166da3.$W,
            shared: {
              rewrite: {
                htmlRules: _c2df18134758.V,
                rewriteUrl: _d7b934a245ce.Oy,
                rewriteCss: _50e0514e3a09.s,
                rewriteJs: _713844858620.o,
                getHtmlInjectCode(_35dc78c6b3fd, _fe6bed7cb749) {
                  let _6c6fe0dec40b = (0, _eef48ff38eca.Uk)(_35dc78c6b3fd, _35dc78c6b3fd => `<script src="${_35dc78c6b3fd}"><\/script>`).join("");
                  return _fe6bed7cb749 ? `<head>${_6c6fe0dec40b}</head>` : _6c6fe0dec40b;
                }
              }
            },
            flagEnabled: _6ef14f166da3.U5,
            codec: {
              encode: _6ef14f166da3.hD,
              decode: _6ef14f166da3.P_
            }
          }),
          inUse: !1
        }, _f78db6fdbb58.push(_fe6bed7cb749)) : ((0, _6ef14f166da3.U5)("rewriterLogs", _35dc78c6b3fd.base) && console.log(`using cached rewriter ${_6c6fe0dec40b} from list of ${_4f8d3fc53b00} rewriters`), 
        _fe6bed7cb749 = _f78db6fdbb58[_6c6fe0dec40b]), _fe6bed7cb749.inUse = !0, [ _fe6bed7cb749.rewriter, () => _fe6bed7cb749.inUse = !1 ];
      }
    },
    2015: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.d(_fe6bed7cb749, {
        i: () => a
      });
      var _678bf849a9d5 = _6c6fe0dec40b(37), _8be84367f9d6 = _6c6fe0dec40b(1478);
      function a(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b, _6ef14f166da3) {
        let _d7b934a245ce = "", _c2df18134758 = "module" === _fe6bed7cb749, l = _35dc78c6b3fd => {
          _c2df18134758 ? _d7b934a245ce += `import "${_678bf849a9d5.$W.files[_35dc78c6b3fd]}"\n` : _d7b934a245ce += `importScripts("${_678bf849a9d5.$W.files[_35dc78c6b3fd]}");\n`;
        };
        l("wasm"), l("all"), _d7b934a245ce += `$studyjetLoadClient().loadAndHook(${JSON.stringify(_678bf849a9d5.$W)});`;
        let _50e0514e3a09 = (0, _8be84367f9d6.o)(_35dc78c6b3fd, _6c6fe0dec40b, _6ef14f166da3, _c2df18134758);
        return _50e0514e3a09 instanceof Uint8Array && (_50e0514e3a09 = (new TextDecoder).decode(_50e0514e3a09)), 
        _d7b934a245ce += _50e0514e3a09;
      }
    },
    6684: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.d(_fe6bed7cb749, {
        Sn: () => h,
        YH: () => u,
        Yq: () => f,
        hU: () => d,
        pL: () => p,
        rj: () => c
      });
      var _678bf849a9d5 = _6c6fe0dec40b(6570);
      let _8be84367f9d6 = {
        none: 0,
        "same-origin": 1,
        "same-site": 2,
        "cross-site": 3
      };
      async function a() {
        return (0, _678bf849a9d5.P2)("@d7a6431b92e", 1);
      }
      async function s(_35dc78c6b3fd) {
        let _fe6bed7cb749 = await a();
        return await _fe6bed7cb749.get("redirectTrackers", _35dc78c6b3fd) || null;
      }
      async function o(_35dc78c6b3fd, _fe6bed7cb749) {
        let _6c6fe0dec40b = await a();
        await _6c6fe0dec40b.put("redirectTrackers", _fe6bed7cb749, _35dc78c6b3fd);
      }
      async function l(_35dc78c6b3fd) {
        let _fe6bed7cb749 = await a();
        await _fe6bed7cb749.delete("redirectTrackers", _35dc78c6b3fd);
      }
      async function c(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
        await s(_35dc78c6b3fd) || await o(_35dc78c6b3fd, {
          originalReferrer: _fe6bed7cb749 || "",
          mostRestrictiveSite: _6c6fe0dec40b,
          referrerPolicy: "",
          chainStarted: Date.now()
        });
      }
      async function u(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
        let _678bf849a9d5 = await s(_35dc78c6b3fd);
        _678bf849a9d5 && (await l(_35dc78c6b3fd), _6c6fe0dec40b && (_678bf849a9d5.referrerPolicy = _6c6fe0dec40b), 
        await o(_fe6bed7cb749, _678bf849a9d5));
      }
      async function d(_35dc78c6b3fd, _fe6bed7cb749) {
        let _6c6fe0dec40b = await s(_35dc78c6b3fd);
        if (!_6c6fe0dec40b) return _fe6bed7cb749;
        let _678bf849a9d5 = _8be84367f9d6[_6c6fe0dec40b.mostRestrictiveSite];
        return (_8be84367f9d6[_fe6bed7cb749] ?? 0) > _678bf849a9d5 ? (_6c6fe0dec40b.mostRestrictiveSite = _fe6bed7cb749, 
        await o(_35dc78c6b3fd, _6c6fe0dec40b), _fe6bed7cb749) : _6c6fe0dec40b.mostRestrictiveSite;
      }
      async function h(_35dc78c6b3fd) {
        await l(_35dc78c6b3fd);
      }
      async function p(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
        let _678bf849a9d5 = await a();
        await _678bf849a9d5.put("referrerPolicies", {
          policy: _fe6bed7cb749,
          referrer: _6c6fe0dec40b
        }, _35dc78c6b3fd);
      }
      async function f(_35dc78c6b3fd) {
        let _fe6bed7cb749 = await a();
        return await _fe6bed7cb749.get("referrerPolicies", _35dc78c6b3fd) || null;
      }
    },
    2416: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b(6684), _6c6fe0dec40b(8228);
    },
    8228: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.d(_fe6bed7cb749, {
        ps: () => l
      });
      var _678bf849a9d5 = _6c6fe0dec40b(6570);
      let _8be84367f9d6 = "publicSuffixList";
      async function a() {
        return (0, _678bf849a9d5.P2)("@d7a6431b92e", 1);
      }
      async function s() {
        let _35dc78c6b3fd = await a();
        return await _35dc78c6b3fd.get("publicSuffixList", _8be84367f9d6) || null;
      }
      async function o(_35dc78c6b3fd) {
        let _fe6bed7cb749 = await a();
        await _fe6bed7cb749.put("publicSuffixList", {
          data: _35dc78c6b3fd,
          expiry: Date.now() + 36e5
        }, _8be84367f9d6);
      }
      async function l(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
        return _fe6bed7cb749 ? _35dc78c6b3fd.origin.origin === _fe6bed7cb749.origin ? "same-origin" : await c(_35dc78c6b3fd.origin, _fe6bed7cb749, _6c6fe0dec40b) ? "same-site" : "cross-site" : "none";
      }
      async function c(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
        return await u(_35dc78c6b3fd, _6c6fe0dec40b) === await u(_fe6bed7cb749, _6c6fe0dec40b);
      }
      async function u(_35dc78c6b3fd, _fe6bed7cb749) {
        let _6c6fe0dec40b = await d(_fe6bed7cb749), _678bf849a9d5 = _35dc78c6b3fd.hostname.toLowerCase().split("."), _8be84367f9d6 = "", _6ef14f166da3 = !1;
        for (let _35dc78c6b3fd of _6c6fe0dec40b) {
          let _fe6bed7cb749 = _35dc78c6b3fd.startsWith("!") ? _35dc78c6b3fd.substring(1) : _35dc78c6b3fd;
          if (function(_35dc78c6b3fd, _fe6bed7cb749) {
            if (_35dc78c6b3fd.length < _fe6bed7cb749.length) return !1;
            let _6c6fe0dec40b = _35dc78c6b3fd.length - _fe6bed7cb749.length;
            for (let _678bf849a9d5 = 0; _678bf849a9d5 < _fe6bed7cb749.length; _678bf849a9d5++) {
              let _8be84367f9d6 = _35dc78c6b3fd[_6c6fe0dec40b + _678bf849a9d5], _6ef14f166da3 = _fe6bed7cb749[_678bf849a9d5];
              if ("*" !== _6ef14f166da3 && _8be84367f9d6 !== _6ef14f166da3) return !1;
            }
            return !0;
          }(_678bf849a9d5, _fe6bed7cb749.split("."))) {
            if (_35dc78c6b3fd.startsWith("!")) {
              _8be84367f9d6 = _fe6bed7cb749, _6ef14f166da3 = !0;
              break;
            }
            !_6ef14f166da3 && _fe6bed7cb749.length > _8be84367f9d6.length && (_8be84367f9d6 = _fe6bed7cb749);
          }
        }
        if (!_8be84367f9d6) return _678bf849a9d5.slice(-2).join(".");
        let _d7b934a245ce = _8be84367f9d6.split(".").length, _c2df18134758 = _6ef14f166da3 ? _d7b934a245ce : _d7b934a245ce + 1;
        return _678bf849a9d5.slice(-_c2df18134758).join(".");
      }
      async function d(_35dc78c6b3fd) {
        let _fe6bed7cb749, _6c6fe0dec40b = await s();
        if (_6c6fe0dec40b && Date.now() < _6c6fe0dec40b.expiry) return _6c6fe0dec40b.data;
        try {
          _fe6bed7cb749 = await _35dc78c6b3fd.fetch("https://publicsuffix.org/list/public_suffix_list.dat");
        } catch (_35dc78c6b3fd) {
          throw Error(`Failed to fetch public suffix list: ${_35dc78c6b3fd}`);
        }
        let _678bf849a9d5 = (await _fe6bed7cb749.text()).split("\n").map(_35dc78c6b3fd => {
          let _fe6bed7cb749 = _35dc78c6b3fd.trim(), _6c6fe0dec40b = _fe6bed7cb749.indexOf(" ");
          return _6c6fe0dec40b > -1 ? _fe6bed7cb749.substring(0, _6c6fe0dec40b) : _fe6bed7cb749;
        }).filter(_35dc78c6b3fd => _35dc78c6b3fd && !_35dc78c6b3fd.startsWith("//"));
        return await o(_678bf849a9d5), _678bf849a9d5;
      }
    },
    2794: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.d(_fe6bed7cb749, {
        pX: () => _678bf849a9d5,
        zr: () => _8be84367f9d6
      });
      let _678bf849a9d5 = Symbol.for("studyjet client global"), _8be84367f9d6 = Symbol.for("studyjet frame handle");
    },
    5956: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      function n(_35dc78c6b3fd, _fe6bed7cb749) {
        let _6c6fe0dec40b = `\n                errorTrace.value = ${JSON.stringify(_35dc78c6b3fd)};\n                fetchedURL.textContent = ${JSON.stringify(_fe6bed7cb749)};\n                for (const node of document.querySelectorAll("#hostname")) node.textContent = ${JSON.stringify(location.hostname)};\n                reload.addEventListener("click", () => location.reload());\n                version.textContent = ${JSON.stringify(globalThis.$studyjetVersion?.version || "unknown")};\n                build.textContent = ${JSON.stringify(globalThis.$studyjetVersion?.build || "unknown")};\n\n                document.getElementById('copy-button').addEventListener('click', async () => {\n                    const text = document.getElementById('errorTrace').value;\n                    await navigator.clipboard.writeText(text);\n                    const btn = document.getElementById('copy-button');\n                    btn.textContent = 'Copied!';\n                    setTimeout(() => btn.textContent = 'Copy', 2000);\n                });\n        `;
        return `<!DOCTYPE html>\n            <html>\n                <head>\n                    <meta charset="utf-8" />\n                    <title>StudyJet</title>\n                    <style>\n                    :root {\n                        --deep: #080602;\n                        --shallow: #181412;\n                        --beach: #f1e8e1;\n                        --shore: #b1a8a1;\n                        --accent: #ffa938;\n                        --font-sans: -apple-system, system-ui, BlinkMacSystemFont, sans-serif;\n                        --font-monospace: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n                    }\n\n                    *:not(div,p,span,ul,li,i,span) {\n                        background-color: var(--deep);\n                        color: var(--beach);\n                        font-family: var(--font-sans);\n                    }\n\n                    textarea,\n                    button {\n                        background-color: var(--shallow);\n                        border-radius: 0.6em;\n                        padding: 0.6em;\n                        border: none;\n                        appearance: none;\n                        font-family: var(--font-sans);\n                        color: var(--beach);\n                    }\n\n                    button.primary {\n                        background-color: var(--accent);\n                        color: var(--deep);\n                        font-weight: bold;\n                    }\n\n                    textarea {\n                        resize: none;\n                        height: 20em;\n                        text-align: left;\n                        font-family: var(--font-monospace);\n                    }\n\n                    body {\n                        width: 100vw;\n                        height: 100vh;\n                        justify-content: center;\n                        align-items: center;\n                    }\n\n                    body,\n                    html,\n                    #inner {\n                        display: flex;\n                        align-items: center;\n                        flex-direction: column;\n                        gap: 0.5em;\n                        overflow: hidden;\n                    }\n\n                    #inner {\n                        z-index: 100;\n                    }\n\n                    #cover {\n                        position: absolute;\n                        width: 100%;\n                        height: 100%;\n                        background-color: color-mix(in srgb, var(--deep) 70%, transparent);\n                        z-index: 99;\n                    }\n\n                    #info {\n                        display: flex;\n                        flex-direction: row;\n                        align-items: flex-start;\n                        gap: 1em;\n                    }\n\n                    #version-wrapper {\n                        width: auto;\n                        text-align: right;\n                        position: absolute;\n                        top: 0.5rem;\n                        right: 0.5rem;\n                        font-size: 0.8rem;\n                        color: var(--shore)!important;\n                        i {\n                            background-color: color-mix(in srgb, var(--deep), transparent 50%);\n                            border-radius: 9999px;\n                            padding: 0.2em 0.5em;\n                        }\n                        z-index: 101;\n                    }\n\n                    #errorTrace-wrapper {\n                        position: relative;\n                        width: fit-content;\n                    }\n\n                    #copy-button {\n                        position: absolute;\n                        top: 0.5em;\n                        right: 0.5em;\n                        padding: 0.23em;\n                        cursor: pointer;\n                        opacity: 0;\n                        transition: opacity 0.4s;\n                        font-size: 0.9em;\n                    }\n\n                    #errorTrace-wrapper:hover #copy-button {\n                        opacity: 1;\n                    }\n                    </style>\n                </head>\n                <body>\n                    <div id="cover"></div>\n                    <div id="inner">\n                        <h1 id="errorTitle">Uh oh!</h1>\n                        <p>There was an error loading <b id="fetchedURL"></b></p>\n                        \x3c!-- <p id="errorMessage">Internal Server Error</p> --\x3e\n\n                        <div id="info">\n                            <div id="errorTrace-wrapper">\n                                <textarea id="errorTrace" cols="40" rows="10" readonly></textarea>\n                                <button id="copy-button" class="primary">Copy</button>\n                            </div>\n                            <div id="troubleshooting">\n                                <p>Try:</p>\n                                <ul>\n                                    <li>Checking your internet connection</li>\n                                    <li>Verifying you entered the correct address</li>\n                                    <li>Clearing the site data</li>\n                                    <li>Contacting <b id="hostname"></b>'s administrator</li>\n                                    <li>Verify the server isn't censored</li>\n                                </ul>\n                                <p>If you're the administrator of <b id="hostname"></b>, try:</p>\n                                    <ul>\n                                    <li>Restarting your server</li>\n                                    <li>Updating StudyJet</li>\n                                    <li>Troubleshooting the error on the <a href="https://github.com/MercuryWorkshop/studyjet" target="_blank">GitHub repository</a></li>\n                                </ul>\n                            </div>\n                        </div>\n                        <br>\n                        <button id="reload" class="primary">Reload</button>\n                    </div>\n                    <p id="version-wrapper"><i>StudyJet v<span id="version"></span> (build <span id="build"></span>)</i></p>\n                    <script src="${"data:application/javascript," + encodeURIComponent(_6c6fe0dec40b)}"><\/script>\n                </body>\n            </html>\n        `;
      }
      function i(_35dc78c6b3fd, _fe6bed7cb749) {
        let _6c6fe0dec40b = {
          "content-type": "text/html"
        };
        return crossOriginIsolated && (_6c6fe0dec40b["Cross-Origin-Embedder-Policy"] = "require-corp"), 
        new Response(n(String(_35dc78c6b3fd), _fe6bed7cb749), {
          status: 500,
          headers: _6c6fe0dec40b
        });
      }
      _6c6fe0dec40b.d(_fe6bed7cb749, {
        B: () => n,
        v: () => i
      });
    },
    1403: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.d(_fe6bed7cb749, {
        H: () => n
      });
      class n {
        handle;
        origin;
        syncToken=0;
        promises={};
        messageChannel=new MessageChannel;
        connected=!1;
        constructor(_35dc78c6b3fd, _fe6bed7cb749) {
          this.handle = _35dc78c6b3fd, this.origin = _fe6bed7cb749, this.messageChannel.port1.addEventListener("message", _35dc78c6b3fd => {
            "studyjet$type" in _35dc78c6b3fd.data && ("init" === _35dc78c6b3fd.data.studyjet$type ? this.connected = !0 : this.handleMessage(_35dc78c6b3fd.data));
          }), this.messageChannel.port1.start(), this.handle.postMessage({
            studyjet$type: "init",
            studyjet$port: this.messageChannel.port2
          }, [ this.messageChannel.port2 ]);
        }
        handleMessage(_35dc78c6b3fd) {
          let _fe6bed7cb749 = this.promises[_35dc78c6b3fd.studyjet$token];
          _fe6bed7cb749 && (_fe6bed7cb749(_35dc78c6b3fd), delete this.promises[_35dc78c6b3fd.studyjet$token]);
        }
        async fetch(_35dc78c6b3fd) {
          let _fe6bed7cb749 = this.syncToken++, _6c6fe0dec40b = {
            studyjet$type: "fetch",
            studyjet$token: _fe6bed7cb749,
            studyjet$request: {
              url: _35dc78c6b3fd.url,
              body: _35dc78c6b3fd.body,
              headers: Array.from(_35dc78c6b3fd.headers.entries()),
              method: _35dc78c6b3fd.method,
              mode: _35dc78c6b3fd.mode,
              destinitation: _35dc78c6b3fd.destination
            }
          }, _678bf849a9d5 = _35dc78c6b3fd.body ? [ _35dc78c6b3fd.body ] : [];
          this.handle.postMessage(_6c6fe0dec40b, _678bf849a9d5);
          let {studyjet$response: _8be84367f9d6} = await new Promise(_35dc78c6b3fd => {
            this.promises[_fe6bed7cb749] = _35dc78c6b3fd;
          });
          return !!_8be84367f9d6 && new Response(_8be84367f9d6.body, {
            headers: _8be84367f9d6.headers,
            status: _8be84367f9d6.status,
            statusText: _8be84367f9d6.statusText
          });
        }
      }
    },
    5790: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.d(_fe6bed7cb749, {
        Pf: () => m,
        V3: () => S,
        dT: () => w
      });
      var _678bf849a9d5 = _6c6fe0dec40b(5956), _8be84367f9d6 = _6c6fe0dec40b(8228), _6ef14f166da3 = _6c6fe0dec40b(6684), _d7b934a245ce = _6c6fe0dec40b(1472), _c2df18134758 = _6c6fe0dec40b(1478), _50e0514e3a09 = _6c6fe0dec40b(1427), _713844858620 = _6c6fe0dec40b(37), _eef48ff38eca = _6c6fe0dec40b(4435), _9281ea692b11 = _6c6fe0dec40b(884), _539a9fec78eb = _6c6fe0dec40b(2614), _f78db6fdbb58 = _6c6fe0dec40b(2015), _4f8d3fc53b00 = _6c6fe0dec40b(8665).A;
      function g(_35dc78c6b3fd) {
        return _35dc78c6b3fd.status >= 300 && _35dc78c6b3fd.status < 400;
      }
      async function m(_35dc78c6b3fd, _fe6bed7cb749) {
        try {
          let _6c6fe0dec40b, _678bf849a9d5, _c2df18134758 = new URL(_35dc78c6b3fd.url);
          if (_c2df18134758.pathname === this.config.files.wasm) return fetch(this.config.files.wasm).then(async _35dc78c6b3fd => {
            let _fe6bed7cb749 = await _35dc78c6b3fd.arrayBuffer(), _6c6fe0dec40b = btoa(new Uint8Array(_fe6bed7cb749).reduce((_35dc78c6b3fd, _fe6bed7cb749) => (_35dc78c6b3fd.push(String.fromCharCode(_fe6bed7cb749)), 
            _35dc78c6b3fd), []).join("")), _678bf849a9d5 = "";
            return _678bf849a9d5 += `if ('document' in self && document.currentScript) { document.currentScript.remove(); }\nself.WASM = '${_6c6fe0dec40b}';`, 
            new Response(_678bf849a9d5, {
              headers: {
                "content-type": "text/javascript"
              }
            });
          });
          let _eef48ff38eca = "", _9281ea692b11 = {};
          for (let [_35dc78c6b3fd, _fe6bed7cb749] of [ ..._c2df18134758.searchParams.entries() ]) {
            switch (_35dc78c6b3fd) {
             case "type":
              _eef48ff38eca = _fe6bed7cb749;
              break;

             case "dest":
              break;

             case "topFrame":
              _6c6fe0dec40b = _fe6bed7cb749;
              break;

             case "parentFrame":
              _678bf849a9d5 = _fe6bed7cb749;
              break;

             default:
              _4f8d3fc53b00.warn(`${_c2df18134758.href} extraneous query parameter ${_35dc78c6b3fd}. Assuming <form> element`), 
              _9281ea692b11[_35dc78c6b3fd] = _fe6bed7cb749;
            }
            _c2df18134758.searchParams.delete(_35dc78c6b3fd);
          }
          let _539a9fec78eb = new URL((0, _d7b934a245ce.v2)(_c2df18134758));
          for (let [_35dc78c6b3fd, _fe6bed7cb749] of Object.entries(_9281ea692b11)) _539a9fec78eb.searchParams.set(_35dc78c6b3fd, _fe6bed7cb749);
          let _f78db6fdbb58 = {
            origin: _539a9fec78eb,
            base: _539a9fec78eb,
            topFrameName: _6c6fe0dec40b,
            parentFrameName: _678bf849a9d5
          };
          if (_c2df18134758.pathname.startsWith(`${this.config.prefix}blob:`) || _c2df18134758.pathname.startsWith(`${this.config.prefix}data:`)) {
            let _fe6bed7cb749, _6c6fe0dec40b = _c2df18134758.pathname.substring(this.config.prefix.length);
            _6c6fe0dec40b.startsWith("blob:") && (_6c6fe0dec40b = (0, _d7b934a245ce.$n)(_6c6fe0dec40b));
            let _678bf849a9d5 = await fetch(_6c6fe0dec40b, {});
            _678bf849a9d5.finalURL = _6c6fe0dec40b.startsWith("blob:") ? _6c6fe0dec40b : "(data url)", 
            _678bf849a9d5.body && (_fe6bed7cb749 = await b(_678bf849a9d5, _f78db6fdbb58, _35dc78c6b3fd.destination, _eef48ff38eca, this.cookieStore));
            let _8be84367f9d6 = Object.fromEntries(_678bf849a9d5.headers.entries());
            return crossOriginIsolated && (_8be84367f9d6["Cross-Origin-Opener-Policy"] = "same-origin", 
            _8be84367f9d6["Cross-Origin-Embedder-Policy"] = "require-corp"), new Response(_fe6bed7cb749, {
              status: _678bf849a9d5.status,
              statusText: _678bf849a9d5.statusText,
              headers: _8be84367f9d6
            });
          }
          let _22bd8222854e = this.serviceWorkers.find(_35dc78c6b3fd => _35dc78c6b3fd.origin === _539a9fec78eb.origin);
          if (_22bd8222854e?.connected && "swruntime" !== _c2df18134758.searchParams.get("from")) {
            let _fe6bed7cb749 = await _22bd8222854e.fetch(_35dc78c6b3fd);
            if (_fe6bed7cb749) return _fe6bed7cb749;
          }
          if (_539a9fec78eb.origin === new URL(_35dc78c6b3fd.url).origin) throw Error("attempted to fetch from same origin - this means the site has obtained a reference to the real origin, aborting");
          let _5e75ad780ef0 = new _50e0514e3a09.u;
          for (let [_fe6bed7cb749, _6c6fe0dec40b] of _35dc78c6b3fd.headers.entries()) _5e75ad780ef0.set(_fe6bed7cb749, _6c6fe0dec40b);
          if (_fe6bed7cb749 && new URL(_fe6bed7cb749.url).pathname.startsWith(_713844858620.$W.prefix)) {
            let _35dc78c6b3fd = new URL((0, _d7b934a245ce.v2)(_fe6bed7cb749.url));
            _35dc78c6b3fd.toString().includes("youtube.com") || (_5e75ad780ef0.set("Referer", _35dc78c6b3fd.href), 
            _5e75ad780ef0.set("Origin", _35dc78c6b3fd.origin));
          }
          let _9ac47b884040 = this.cookieStore.getCookies(_539a9fec78eb, !1);
          _9ac47b884040.length && _5e75ad780ef0.set("Cookie", _9ac47b884040);
          let _2bcfbbdee91d = !1;
          if ("iframe" === _35dc78c6b3fd.destination && "navigate" === _35dc78c6b3fd.mode && _35dc78c6b3fd.referrer && "no-referrer" !== _35dc78c6b3fd.referrer && _35dc78c6b3fd.referrer !== location.origin + _713844858620.$W.prefix + "no-referrer") {
            let _fe6bed7cb749 = _35dc78c6b3fd.referrer, _6c6fe0dec40b = await self.clients.matchAll({
              type: "window"
            });
            for (;_fe6bed7cb749; ) {
              if (!_fe6bed7cb749.includes(_713844858620.$W.prefix)) {
                _2bcfbbdee91d = !0;
                break;
              }
              let _35dc78c6b3fd = _6c6fe0dec40b.find(_35dc78c6b3fd => _35dc78c6b3fd.url === _fe6bed7cb749), _678bf849a9d5 = await (0, 
              _6ef14f166da3.Yq)(_fe6bed7cb749);
              if (!_678bf849a9d5 || !_678bf849a9d5.referrer) {
                _35dc78c6b3fd && _fe6bed7cb749.startsWith(location.origin) && (_2bcfbbdee91d = !0);
                break;
              }
              if (_35dc78c6b3fd && "nested" === _35dc78c6b3fd.frameType) _fe6bed7cb749 = _678bf849a9d5.referrer; else break;
            }
          }
          _2bcfbbdee91d ? (_5e75ad780ef0.set("Sec-Fetch-Dest", "document"), _5e75ad780ef0.set("Sec-Fetch-Mode", "navigate")) : (_5e75ad780ef0.set("Sec-Fetch-Dest", _35dc78c6b3fd.destination || "empty"), 
          _5e75ad780ef0.set("Sec-Fetch-Mode", _35dc78c6b3fd.mode));
          let _36e04618841c = "none";
          if (_35dc78c6b3fd.referrer && "" !== _35dc78c6b3fd.referrer && "no-referrer" !== _35dc78c6b3fd.referrer && _35dc78c6b3fd.referrer !== location.origin + _713844858620.$W.prefix + "no-referrer" && _35dc78c6b3fd.referrer.includes(_713844858620.$W.prefix)) {
            let _fe6bed7cb749 = (0, _d7b934a245ce.v2)(_35dc78c6b3fd.referrer);
            if (_fe6bed7cb749) {
              let _35dc78c6b3fd = new URL(_fe6bed7cb749);
              _36e04618841c = await (0, _8be84367f9d6.ps)(_f78db6fdbb58, _35dc78c6b3fd, this.client);
            }
          }
          await (0, _6ef14f166da3.rj)(_539a9fec78eb.toString(), _35dc78c6b3fd.referrer ? (0, 
          _d7b934a245ce.v2)(_35dc78c6b3fd.referrer) : null, _36e04618841c), _5e75ad780ef0.set("Sec-Fetch-Site", await (0, 
          _6ef14f166da3.hU)(_539a9fec78eb.toString(), _36e04618841c));
          let _52051e062535 = new S(_539a9fec78eb, _5e75ad780ef0.headers, _35dc78c6b3fd.body, _35dc78c6b3fd.method, _35dc78c6b3fd.destination, _fe6bed7cb749);
          this.dispatchEvent(_52051e062535);
          let _171e22796cd9 = await _52051e062535.response || await this.client.fetch(_52051e062535.url, {
            method: _52051e062535.method,
            body: _52051e062535.body,
            headers: _52051e062535.requestHeaders,
            credentials: "omit",
            mode: "cors" === _35dc78c6b3fd.mode ? _35dc78c6b3fd.mode : "same-origin",
            cache: _35dc78c6b3fd.cache,
            redirect: "manual",
            duplex: "half"
          });
          return _171e22796cd9.finalURL = _52051e062535.url.href, await y(_539a9fec78eb, _f78db6fdbb58, _eef48ff38eca, _35dc78c6b3fd.destination, _35dc78c6b3fd.mode, _171e22796cd9, this.cookieStore, _fe6bed7cb749, this.client, this, _35dc78c6b3fd.referrer);
        } catch (_fe6bed7cb749) {
          let _6c6fe0dec40b = {
            message: _fe6bed7cb749.message,
            url: _35dc78c6b3fd.url,
            destination: _35dc78c6b3fd.destination
          };
          if (_fe6bed7cb749.cause && (_6c6fe0dec40b.cause = _fe6bed7cb749.cause, _fe6bed7cb749.cause instanceof AggregateError && (_6c6fe0dec40b.causeErrors = _fe6bed7cb749.cause.errors)), 
          _fe6bed7cb749.stack && (_6c6fe0dec40b.stack = _fe6bed7cb749.stack), console.error("ERROR FROM SERVICE WORKER FETCH: ", _6c6fe0dec40b), 
          console.error(_fe6bed7cb749), ![ "document", "iframe" ].includes(_35dc78c6b3fd.destination)) return new Response(void 0, {
            status: 500
          });
          let _8be84367f9d6 = Object.entries(_6c6fe0dec40b).map(([_35dc78c6b3fd, _fe6bed7cb749]) => `${_35dc78c6b3fd.charAt(0).toUpperCase() + _35dc78c6b3fd.slice(1)}: ${_fe6bed7cb749}`).join("\n\n");
          return (0, _678bf849a9d5.v)(_8be84367f9d6, (0, _d7b934a245ce.v2)(_35dc78c6b3fd.url));
        }
      }
      async function y(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b, _678bf849a9d5, _c2df18134758, _50e0514e3a09, _9281ea692b11, _539a9fec78eb, _f78db6fdbb58, _4f8d3fc53b00, _22bd8222854e) {
        let _5e75ad780ef0, _9ac47b884040 = "navigate" === _c2df18134758 && [ "document", "iframe" ].includes(_678bf849a9d5), _2bcfbbdee91d = await (0, 
        _eef48ff38eca.l)(_50e0514e3a09.rawHeaders, _fe6bed7cb749, _f78db6fdbb58, {
          get: _6ef14f166da3.Yq,
          set: _6ef14f166da3.pL
        });
        if (_9ac47b884040 && _2bcfbbdee91d["referrer-policy"] && _22bd8222854e && await (0, 
        _6ef14f166da3.pL)(_35dc78c6b3fd.href, _2bcfbbdee91d["referrer-policy"], _22bd8222854e), 
        g(_50e0514e3a09)) {
          let _fe6bed7cb749 = new URL((0, _d7b934a245ce.v2)(_2bcfbbdee91d.location));
          await (0, _6ef14f166da3.YH)(_35dc78c6b3fd.toString(), _fe6bed7cb749.toString(), _2bcfbbdee91d["referrer-policy"]);
          let _678bf849a9d5 = await (0, _8be84367f9d6.ps)({
            origin: _fe6bed7cb749,
            base: _fe6bed7cb749
          }, _35dc78c6b3fd, _f78db6fdbb58);
          if (await (0, _6ef14f166da3.hU)(_fe6bed7cb749.toString(), _678bf849a9d5), _6c6fe0dec40b) {
            let _35dc78c6b3fd = new URL(_2bcfbbdee91d.location);
            _35dc78c6b3fd.searchParams.set("type", _6c6fe0dec40b), _2bcfbbdee91d.location = _35dc78c6b3fd.href;
          }
        }
        let _36e04618841c = _2bcfbbdee91d["set-cookie"] || [];
        for (let _fe6bed7cb749 in _36e04618841c) if (_539a9fec78eb) {
          let _6c6fe0dec40b = _4f8d3fc53b00.dispatch(_539a9fec78eb, {
            studyjet$type: "cookie",
            cookie: _fe6bed7cb749,
            url: _35dc78c6b3fd.href
          });
          "document" !== _678bf849a9d5 && "iframe" !== _678bf849a9d5 && await _6c6fe0dec40b;
        }
        for (let _fe6bed7cb749 in await _9281ea692b11.setCookies(_36e04618841c instanceof Array ? _36e04618841c : [ _36e04618841c ], _35dc78c6b3fd), 
        _2bcfbbdee91d) Array.isArray(_2bcfbbdee91d[_fe6bed7cb749]) && (_2bcfbbdee91d[_fe6bed7cb749] = _2bcfbbdee91d[_fe6bed7cb749][0]);
        if (function(_35dc78c6b3fd, _fe6bed7cb749) {
          if ([ "document", "iframe" ].includes(_fe6bed7cb749)) {
            let _fe6bed7cb749 = _35dc78c6b3fd["content-disposition"];
            if (_fe6bed7cb749) {
              if ("inline" !== _fe6bed7cb749) return !0;
            } else {
              let _fe6bed7cb749 = _35dc78c6b3fd["content-type"]?.split(";")[0].trim().toLowerCase();
              if (_fe6bed7cb749 && ![ "text/html", "text/plain", "text/css", "text/javascript", "text/xml", "application/javascript", "application/json", "application/xml", "application/pdf" ].includes(_fe6bed7cb749) && !_fe6bed7cb749.startsWith("text") && !_fe6bed7cb749.startsWith("image") && !_fe6bed7cb749.startsWith("font") && !_fe6bed7cb749.startsWith("video")) return !0;
            }
          }
          return !1;
        }(_2bcfbbdee91d, _678bf849a9d5) && !g(_50e0514e3a09)) if ((0, _713844858620.U5)("interceptDownloads", _35dc78c6b3fd)) {
          if (!_539a9fec78eb) throw Error("cant find client");
          let _fe6bed7cb749 = null, _6c6fe0dec40b = _2bcfbbdee91d["content-disposition"];
          if ("string" == typeof _6c6fe0dec40b) {
            let _35dc78c6b3fd = _6c6fe0dec40b.match(/filename=["']?([^"';\n]*)["']?/i);
            _35dc78c6b3fd && _35dc78c6b3fd[1] && (_fe6bed7cb749 = _35dc78c6b3fd[1]);
          }
          let _678bf849a9d5 = _2bcfbbdee91d["content-length"], _8be84367f9d6 = await clients.matchAll({});
          if ((_8be84367f9d6 = _8be84367f9d6.filter(_35dc78c6b3fd => !_35dc78c6b3fd.url.includes(_713844858620.$W.prefix))).length < 1) throw Error("couldn't find a controller client to dispatch download to");
          let _6ef14f166da3 = {
            filename: _fe6bed7cb749,
            url: _35dc78c6b3fd.href,
            type: _2bcfbbdee91d["content-type"],
            body: _50e0514e3a09.body,
            length: Number(_678bf849a9d5)
          };
          _8be84367f9d6[0].postMessage({
            studyjet$type: "download",
            download: _6ef14f166da3
          }, [ _50e0514e3a09.body ]), await new Promise(() => {});
        } else {
          let _35dc78c6b3fd = _2bcfbbdee91d["content-disposition"];
          if (!/\s*?((inline|attachment);\s*?)filename=/i.test(_35dc78c6b3fd)) {
            let _fe6bed7cb749 = /^\s*?attachment/i.test(_35dc78c6b3fd) ? "attachment" : "inline", [_6c6fe0dec40b] = new URL(_50e0514e3a09.finalURL).pathname.split("/").slice(-1);
            _2bcfbbdee91d["content-disposition"] = `${_fe6bed7cb749}; filename=${JSON.stringify(_6c6fe0dec40b)}`;
          }
        }
        _50e0514e3a09.body && !g(_50e0514e3a09) && (_5e75ad780ef0 = await b(_50e0514e3a09, _fe6bed7cb749, _678bf849a9d5, _6c6fe0dec40b, _9281ea692b11)), 
        "text/event-stream" === _2bcfbbdee91d.accept && (_2bcfbbdee91d["content-type"] = "text/event-stream"), 
        delete _2bcfbbdee91d["permissions-policy"], crossOriginIsolated && [ "document", "iframe", "worker", "sharedworker", "style", "script" ].includes(_678bf849a9d5) && (_2bcfbbdee91d["Cross-Origin-Embedder-Policy"] = "require-corp", 
        _2bcfbbdee91d["Cross-Origin-Opener-Policy"] = "same-origin");
        let _52051e062535 = new w(_5e75ad780ef0, _2bcfbbdee91d, _50e0514e3a09.status, _50e0514e3a09.statusText, _678bf849a9d5, _35dc78c6b3fd, _50e0514e3a09, _539a9fec78eb);
        return _4f8d3fc53b00.dispatchEvent(_52051e062535), g(_50e0514e3a09) || await (0, 
        _6ef14f166da3.Sn)(_35dc78c6b3fd.toString()), new Response(_52051e062535.responseBody, {
          headers: _52051e062535.responseHeaders,
          status: _52051e062535.status,
          statusText: _52051e062535.statusText
        });
      }
      async function b(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b, _678bf849a9d5, _8be84367f9d6) {
        switch (_6c6fe0dec40b) {
         case "iframe":
         case "document":
          if (_35dc78c6b3fd.headers.get("content-type")?.startsWith("text/html")) return (0, 
          _9281ea692b11.Qs)(await _35dc78c6b3fd.text(), _8be84367f9d6, _fe6bed7cb749, !0);
          return _35dc78c6b3fd.body;

         case "script":
          return (0, _c2df18134758.o)(new Uint8Array(await _35dc78c6b3fd.arrayBuffer()), _35dc78c6b3fd.finalURL, _fe6bed7cb749, "module" === _678bf849a9d5);

         case "style":
          return (0, _539a9fec78eb.s)(await _35dc78c6b3fd.text(), _fe6bed7cb749);

         case "sharedworker":
         case "worker":
          return (0, _f78db6fdbb58.i)(new Uint8Array(await _35dc78c6b3fd.arrayBuffer()), _678bf849a9d5, _35dc78c6b3fd.finalURL, _fe6bed7cb749);

         default:
          return _35dc78c6b3fd.body;
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
        constructor(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b, _678bf849a9d5, _8be84367f9d6, _6ef14f166da3, _d7b934a245ce, _c2df18134758) {
          super("handleResponse"), this.responseBody = _35dc78c6b3fd, this.responseHeaders = _fe6bed7cb749, 
          this.status = _6c6fe0dec40b, this.statusText = _678bf849a9d5, this.destination = _8be84367f9d6, 
          this.url = _6ef14f166da3, this.rawResponse = _d7b934a245ce, this.client = _c2df18134758;
        }
      }
      class S extends Event {
        url;
        requestHeaders;
        body;
        method;
        destination;
        client;
        constructor(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b, _678bf849a9d5, _8be84367f9d6, _6ef14f166da3) {
          super("request"), this.url = _35dc78c6b3fd, this.requestHeaders = _fe6bed7cb749, 
          this.body = _6c6fe0dec40b, this.method = _678bf849a9d5, this.destination = _8be84367f9d6, 
          this.client = _6ef14f166da3;
        }
        response;
      }
    },
    7510: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.r(_fe6bed7cb749), _6c6fe0dec40b.d(_fe6bed7cb749, {
        FakeServiceWorker: () => _678bf849a9d5.H,
        StudyJetHandleResponseEvent: () => _8be84367f9d6.dT,
        StudyJetRequestEvent: () => _8be84367f9d6.V3,
        StudyJetServiceWorker: () => d,
        errorTemplate: () => _eef48ff38eca.B,
        handleFetch: () => _8be84367f9d6.Pf,
        renderError: () => _eef48ff38eca.v
      });
      var _678bf849a9d5 = _6c6fe0dec40b(1403), _8be84367f9d6 = _6c6fe0dec40b(5790), _6ef14f166da3 = _6c6fe0dec40b(4110), _d7b934a245ce = _6c6fe0dec40b(1561), _c2df18134758 = _6c6fe0dec40b(3831), _50e0514e3a09 = _6c6fe0dec40b(6570), _713844858620 = _6c6fe0dec40b(37), _eef48ff38eca = _6c6fe0dec40b(5956);
      class d extends EventTarget {
        client;
        config;
        syncPool={};
        synctoken=0;
        cookieStore=new _c2df18134758.k;
        serviceWorkers=[];
        constructor() {
          super(), this.client = new _6ef14f166da3.Ay, (async () => {
            let _35dc78c6b3fd = await (0, _50e0514e3a09.P2)("@d7a6431b92e", 1), _fe6bed7cb749 = await _35dc78c6b3fd.get("cookies", "cookies");
            _fe6bed7cb749 && this.cookieStore.load(_fe6bed7cb749);
          })(), addEventListener("message", async ({data: _35dc78c6b3fd}) => {
            if ("studyjet$type" in _35dc78c6b3fd) {
              if ("studyjet$token" in _35dc78c6b3fd) {
                let _fe6bed7cb749 = this.syncPool[_35dc78c6b3fd.studyjet$token];
                delete this.syncPool[_35dc78c6b3fd.studyjet$token], _fe6bed7cb749(_35dc78c6b3fd);
                return;
              }
              if ("registerServiceWorker" === _35dc78c6b3fd.studyjet$type) return void this.serviceWorkers.push(new _678bf849a9d5.H(_35dc78c6b3fd.port, _35dc78c6b3fd.origin));
              if ("cookie" === _35dc78c6b3fd.studyjet$type) {
                this.cookieStore.setCookies([ _35dc78c6b3fd.cookie ], new URL(_35dc78c6b3fd.url));
                let _fe6bed7cb749 = await (0, _50e0514e3a09.P2)("@d7a6431b92e", 1);
                await _fe6bed7cb749.put("cookies", JSON.parse(this.cookieStore.dump()), "cookies");
              }
              "loadConfig" === _35dc78c6b3fd.studyjet$type && (this.config = _35dc78c6b3fd.config);
            }
          });
        }
        async dispatch(_35dc78c6b3fd, _fe6bed7cb749) {
          let _6c6fe0dec40b, _678bf849a9d5 = this.synctoken++, _8be84367f9d6 = new Promise(_35dc78c6b3fd => _6c6fe0dec40b = _35dc78c6b3fd);
          return this.syncPool[_678bf849a9d5] = _6c6fe0dec40b, _fe6bed7cb749.studyjet$token = _678bf849a9d5, 
          _35dc78c6b3fd.postMessage(_fe6bed7cb749), await _8be84367f9d6;
        }
        async loadConfig() {
          if (this.config) return;
          let _35dc78c6b3fd = await (0, _50e0514e3a09.P2)("@d7a6431b92e", 1);
          this.config = await _35dc78c6b3fd.get("config", "config"), this.config && ((0, _713844858620.Nk)(this.config), 
          await (0, _d7b934a245ce.n$)());
        }
        route({request: _35dc78c6b3fd}) {
          return !!_35dc78c6b3fd.url.startsWith(location.origin + this.config.prefix) || !!_35dc78c6b3fd.url.startsWith(location.origin + this.config.files.wasm);
        }
        async fetch({request: _35dc78c6b3fd, clientId: _fe6bed7cb749}) {
          this.config || await this.loadConfig();
          let _6c6fe0dec40b = await self.clients.get(_fe6bed7cb749);
          return _8be84367f9d6.Pf.call(this, _35dc78c6b3fd, _6c6fe0dec40b);
        }
      }
    },
    4110: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.d(_fe6bed7cb749, {
        Ay: () => S,
        DD: () => w
      });
      let _678bf849a9d5 = globalThis.fetch, _8be84367f9d6 = globalThis.SharedWorker, _6ef14f166da3 = globalThis.localStorage, _d7b934a245ce = globalThis.navigator.serviceWorker, _c2df18134758 = MessagePort.prototype.postMessage, _50e0514e3a09 = {
        prototype: {
          send: WebSocket.prototype.send
        },
        CLOSED: WebSocket.CLOSED,
        CLOSING: WebSocket.CLOSING,
        CONNECTING: WebSocket.CONNECTING,
        OPEN: WebSocket.OPEN
      };
      async function c() {
        let _35dc78c6b3fd = Promise.race([ Promise.any((await self.clients.matchAll({
          type: "window",
          includeUncontrolled: !0
        })).map(async _35dc78c6b3fd => {
          let _fe6bed7cb749, _6c6fe0dec40b = await (_fe6bed7cb749 = new MessageChannel, new Promise(_6c6fe0dec40b => {
            _35dc78c6b3fd.postMessage({
              type: "getPort",
              port: _fe6bed7cb749.port2
            }, [ _fe6bed7cb749.port2 ]), _fe6bed7cb749.port1.onmessage = _35dc78c6b3fd => {
              _6c6fe0dec40b(_35dc78c6b3fd.data);
            };
          }));
          return await u(_6c6fe0dec40b), _6c6fe0dec40b;
        })), new Promise((_35dc78c6b3fd, _fe6bed7cb749) => setTimeout(_fe6bed7cb749, 1e3, TypeError("timeout"))) ]);
        try {
          return await _35dc78c6b3fd;
        } catch (_35dc78c6b3fd) {
          if (_35dc78c6b3fd instanceof AggregateError) throw console.error("bare-mux: failed to get a bare-mux SharedWorker MessagePort as all clients returned an invalid MessagePort."), 
          Error("All clients returned an invalid MessagePort.", {
            cause: _35dc78c6b3fd
          });
          return console.warn("bare-mux: failed to get a bare-mux SharedWorker MessagePort within 1s, retrying"), 
          await c();
        }
      }
      function u(_35dc78c6b3fd) {
        let _fe6bed7cb749 = new MessageChannel, _6c6fe0dec40b = new Promise((_35dc78c6b3fd, _6c6fe0dec40b) => {
          _fe6bed7cb749.port1.onmessage = _fe6bed7cb749 => {
            "pong" === _fe6bed7cb749.data.type && _35dc78c6b3fd();
          }, setTimeout(_6c6fe0dec40b, 1500);
        });
        return _c2df18134758.call(_35dc78c6b3fd, {
          message: {
            type: "ping"
          },
          port: _fe6bed7cb749.port2
        }, [ _fe6bed7cb749.port2 ]), _6c6fe0dec40b;
      }
      function d(_35dc78c6b3fd, _fe6bed7cb749) {
        let _6c6fe0dec40b = new _8be84367f9d6(_35dc78c6b3fd, "ridgewood-stem-worker");
        return _fe6bed7cb749 && _d7b934a245ce.addEventListener("message", _fe6bed7cb749 => {
          if ("getPort" === _fe6bed7cb749.data.type && _fe6bed7cb749.data.port) {
            console.debug("bare-mux: recieved request for port from sw");
            let _6c6fe0dec40b = new _8be84367f9d6(_35dc78c6b3fd, "ridgewood-stem-worker");
            _c2df18134758.call(_fe6bed7cb749.data.port, _6c6fe0dec40b.port, [ _6c6fe0dec40b.port ]);
          }
        }), _6c6fe0dec40b.port;
      }
      let _713844858620 = null;
      class p {
        channel;
        port;
        workerPath;
        constructor(_35dc78c6b3fd) {
          this.channel = new BroadcastChannel("bare-mux"), _35dc78c6b3fd instanceof MessagePort || _35dc78c6b3fd instanceof Promise ? this.port = _35dc78c6b3fd : this.createChannel(_35dc78c6b3fd, !0);
        }
        createChannel(_35dc78c6b3fd, _fe6bed7cb749) {
          if (self.clients) this.port = c(), this.channel.onmessage = _35dc78c6b3fd => {
            "refreshPort" === _35dc78c6b3fd.data.type && (this.port = c());
          }; else if (_35dc78c6b3fd && SharedWorker) {
            if (!_35dc78c6b3fd.startsWith("/") && !_35dc78c6b3fd.includes(":")) throw Error("Invalid URL. Must be absolute or start at the root.");
            this.port = d(_35dc78c6b3fd, _fe6bed7cb749), console.debug("bare-mux: setting localStorage bare-mux-path to", _35dc78c6b3fd), 
            _6ef14f166da3["bare-mux-path"] = _35dc78c6b3fd;
          } else {
            if (!SharedWorker) throw Error("Unable to get a channel to the SharedWorker.");
            {
              let _35dc78c6b3fd = _6ef14f166da3["bare-mux-path"];
              if (console.debug("bare-mux: got localStorage bare-mux-path:", _35dc78c6b3fd), !_35dc78c6b3fd) throw Error("Unable to get bare-mux workerPath from localStorage.");
              this.port = d(_35dc78c6b3fd, _fe6bed7cb749);
            }
          }
        }
        async sendMessage(_35dc78c6b3fd, _fe6bed7cb749) {
          this.port instanceof Promise && (this.port = await this.port);
          try {
            await u(this.port);
          } catch {
            return console.warn("bare-mux: Failed to get a ping response from the worker within 1.5s. Assuming port is dead."), 
            this.createChannel(), await this.sendMessage(_35dc78c6b3fd, _fe6bed7cb749);
          }
          let _6c6fe0dec40b = new MessageChannel, _678bf849a9d5 = [ _6c6fe0dec40b.port2, ..._fe6bed7cb749 || [] ], _8be84367f9d6 = new Promise((_35dc78c6b3fd, _fe6bed7cb749) => {
            _6c6fe0dec40b.port1.onmessage = _6c6fe0dec40b => {
              let _678bf849a9d5 = _6c6fe0dec40b.data;
              "error" === _678bf849a9d5.type ? _fe6bed7cb749(_678bf849a9d5.error) : _35dc78c6b3fd(_678bf849a9d5);
            };
          });
          return _c2df18134758.call(this.port, {
            message: _35dc78c6b3fd,
            port: _6c6fe0dec40b.port2
          }, _678bf849a9d5), await _8be84367f9d6;
        }
      }
      class f extends EventTarget {
        protocols;
        url;
        readyState=_50e0514e3a09.CONNECTING;
        channel;
        constructor(_35dc78c6b3fd, _fe6bed7cb749 = [], _6c6fe0dec40b, _678bf849a9d5) {
          super(), this.protocols = _fe6bed7cb749, this.url = _35dc78c6b3fd.toString(), this.protocols = _fe6bed7cb749;
          const i = _35dc78c6b3fd => {
            this.protocols = _35dc78c6b3fd, this.readyState = _50e0514e3a09.OPEN;
            let _fe6bed7cb749 = new Event("open");
            this.dispatchEvent(_fe6bed7cb749);
          }, a = async _35dc78c6b3fd => {
            let _fe6bed7cb749 = new MessageEvent("message", {
              data: _35dc78c6b3fd
            });
            this.dispatchEvent(_fe6bed7cb749);
          }, s = (_35dc78c6b3fd, _fe6bed7cb749) => {
            this.readyState = _50e0514e3a09.CLOSED;
            let _6c6fe0dec40b = new CloseEvent("close", {
              code: _35dc78c6b3fd,
              reason: _fe6bed7cb749
            });
            this.dispatchEvent(_6c6fe0dec40b);
          }, o = () => {
            this.readyState = _50e0514e3a09.CLOSED;
            let _35dc78c6b3fd = new Event("error");
            this.dispatchEvent(_35dc78c6b3fd);
          };
          this.channel = new MessageChannel, this.channel.port1.onmessage = _35dc78c6b3fd => {
            "open" === _35dc78c6b3fd.data.type ? i(_35dc78c6b3fd.data.args[0]) : "message" === _35dc78c6b3fd.data.type ? a(_35dc78c6b3fd.data.args[0]) : "close" === _35dc78c6b3fd.data.type ? s(_35dc78c6b3fd.data.args[0], _35dc78c6b3fd.data.args[1]) : "error" === _35dc78c6b3fd.data.type && o();
          }, _6c6fe0dec40b.sendMessage({
            type: "websocket",
            websocket: {
              url: _35dc78c6b3fd.toString(),
              protocols: _fe6bed7cb749,
              requestHeaders: _678bf849a9d5,
              channel: this.channel.port2
            }
          }, [ this.channel.port2 ]);
        }
        send(..._35dc78c6b3fd) {
          if (this.readyState === _50e0514e3a09.CONNECTING) throw new DOMException("Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.");
          let _fe6bed7cb749 = _35dc78c6b3fd[0];
          _fe6bed7cb749.buffer && (_fe6bed7cb749 = _fe6bed7cb749.buffer.slice(_fe6bed7cb749.byteOffset, _fe6bed7cb749.byteOffset + _fe6bed7cb749.byteLength)), 
          _c2df18134758.call(this.channel.port1, {
            type: "data",
            data: _fe6bed7cb749
          }, _fe6bed7cb749 instanceof ArrayBuffer ? [ _fe6bed7cb749 ] : []);
        }
        close(_35dc78c6b3fd, _fe6bed7cb749) {
          _c2df18134758.call(this.channel.port1, {
            type: "close",
            closeCode: _35dc78c6b3fd,
            closeReason: _fe6bed7cb749
          });
        }
      }
      function g(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
        console.error(`error while processing '${_6c6fe0dec40b}': `, _fe6bed7cb749), _35dc78c6b3fd.postMessage({
          type: "error",
          error: _fe6bed7cb749
        });
      }
      let _eef48ff38eca = [ "ws:", "wss:" ], _9281ea692b11 = [ 101, 204, 205, 304 ], _539a9fec78eb = [ 301, 302, 303, 307, 308 ];
      class w {
        worker;
        constructor(_35dc78c6b3fd) {
          this.worker = new p(_35dc78c6b3fd);
        }
        async getTransport() {
          return (await this.worker.sendMessage({
            type: "get"
          })).name;
        }
        async setTransport(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
          await this.setManualTransport(`\n\t\t\tconst { default: BareTransport } = await import("${_35dc78c6b3fd}");\n\t\t\treturn [BareTransport, "${_35dc78c6b3fd}"];\n\t\t`, _fe6bed7cb749, _6c6fe0dec40b);
        }
        async setManualTransport(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
          if ("bare-mux-remote" === _35dc78c6b3fd) throw Error("Use setRemoteTransport.");
          await this.worker.sendMessage({
            type: "set",
            client: {
              function: _35dc78c6b3fd,
              args: _fe6bed7cb749
            }
          }, _6c6fe0dec40b);
        }
        async setRemoteTransport(_35dc78c6b3fd, _fe6bed7cb749) {
          let _6c6fe0dec40b = new MessageChannel;
          _6c6fe0dec40b.port1.onmessage = async _fe6bed7cb749 => {
            let _6c6fe0dec40b = _fe6bed7cb749.data.port, _678bf849a9d5 = _fe6bed7cb749.data.message;
            if ("fetch" === _678bf849a9d5.type) try {
              _35dc78c6b3fd.ready || await _35dc78c6b3fd.init(), await async function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
                let _678bf849a9d5 = await _6c6fe0dec40b.request(new URL(_35dc78c6b3fd.fetch.remote), _35dc78c6b3fd.fetch.method, _35dc78c6b3fd.fetch.body, _35dc78c6b3fd.fetch.headers, null);
                if (!function() {
                  if (null === _713844858620) {
                    let _35dc78c6b3fd, _fe6bed7cb749 = new MessageChannel, _6c6fe0dec40b = new ReadableStream;
                    try {
                      _c2df18134758.call(_fe6bed7cb749.port1, _6c6fe0dec40b, [ _6c6fe0dec40b ]), _35dc78c6b3fd = !0;
                    } catch (_fe6bed7cb749) {
                      _35dc78c6b3fd = !1;
                    }
                    return _713844858620 = _35dc78c6b3fd, _35dc78c6b3fd;
                  }
                  return _713844858620;
                }() && _678bf849a9d5.body instanceof ReadableStream) {
                  let _35dc78c6b3fd = new Response(_678bf849a9d5.body);
                  _678bf849a9d5.body = await _35dc78c6b3fd.arrayBuffer();
                }
                _678bf849a9d5.body instanceof ReadableStream || _678bf849a9d5.body instanceof ArrayBuffer ? _c2df18134758.call(_fe6bed7cb749, {
                  type: "fetch",
                  fetch: _678bf849a9d5
                }, [ _678bf849a9d5.body ]) : _c2df18134758.call(_fe6bed7cb749, {
                  type: "fetch",
                  fetch: _678bf849a9d5
                });
              }(_678bf849a9d5, _6c6fe0dec40b, _35dc78c6b3fd);
            } catch (_35dc78c6b3fd) {
              g(_6c6fe0dec40b, _35dc78c6b3fd, "fetch");
            } else if ("websocket" === _678bf849a9d5.type) try {
              _35dc78c6b3fd.ready || await _35dc78c6b3fd.init(), await async function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
                let [_678bf849a9d5, _8be84367f9d6] = _6c6fe0dec40b.connect(new URL(_35dc78c6b3fd.websocket.url), _35dc78c6b3fd.websocket.protocols, _35dc78c6b3fd.websocket.requestHeaders, _fe6bed7cb749 => {
                  _c2df18134758.call(_35dc78c6b3fd.websocket.channel, {
                    type: "open",
                    args: [ _fe6bed7cb749 ]
                  });
                }, _fe6bed7cb749 => {
                  _fe6bed7cb749 instanceof ArrayBuffer ? _c2df18134758.call(_35dc78c6b3fd.websocket.channel, {
                    type: "message",
                    args: [ _fe6bed7cb749 ]
                  }, [ _fe6bed7cb749 ]) : _c2df18134758.call(_35dc78c6b3fd.websocket.channel, {
                    type: "message",
                    args: [ _fe6bed7cb749 ]
                  });
                }, (_fe6bed7cb749, _6c6fe0dec40b) => {
                  _c2df18134758.call(_35dc78c6b3fd.websocket.channel, {
                    type: "close",
                    args: [ _fe6bed7cb749, _6c6fe0dec40b ]
                  });
                }, _fe6bed7cb749 => {
                  _c2df18134758.call(_35dc78c6b3fd.websocket.channel, {
                    type: "error",
                    args: [ _fe6bed7cb749 ]
                  });
                });
                _35dc78c6b3fd.websocket.channel.onmessage = _35dc78c6b3fd => {
                  "data" === _35dc78c6b3fd.data.type ? _678bf849a9d5(_35dc78c6b3fd.data.data) : "close" === _35dc78c6b3fd.data.type && _8be84367f9d6(_35dc78c6b3fd.data.closeCode, _35dc78c6b3fd.data.closeReason);
                }, _c2df18134758.call(_fe6bed7cb749, {
                  type: "websocket"
                });
              }(_678bf849a9d5, _6c6fe0dec40b, _35dc78c6b3fd);
            } catch (_35dc78c6b3fd) {
              g(_6c6fe0dec40b, _35dc78c6b3fd, "websocket");
            }
          }, await this.worker.sendMessage({
            type: "set",
            client: {
              function: "bare-mux-remote",
              args: [ _6c6fe0dec40b.port2, _fe6bed7cb749 ]
            }
          }, [ _6c6fe0dec40b.port2 ]);
        }
        getInnerPort() {
          return this.worker.port;
        }
      }
      class S {
        worker;
        constructor(_35dc78c6b3fd) {
          this.worker = new p(_35dc78c6b3fd);
        }
        createWebSocket(_35dc78c6b3fd, _fe6bed7cb749 = [], _6c6fe0dec40b, _678bf849a9d5) {
          try {
            _35dc78c6b3fd = new URL(_35dc78c6b3fd);
          } catch (_fe6bed7cb749) {
            throw new DOMException(`Faiiled to construct 'WebSocket': The URL '${_35dc78c6b3fd}' is invalid.`);
          }
          if (!_eef48ff38eca.includes(_35dc78c6b3fd.protocol)) throw new DOMException(`Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '${_35dc78c6b3fd.protocol}' is not allowed.`);
          for (let _35dc78c6b3fd of (Array.isArray(_fe6bed7cb749) || (_fe6bed7cb749 = [ _fe6bed7cb749 ]), 
          _fe6bed7cb749 = _fe6bed7cb749.map(String))) if (!function(_35dc78c6b3fd) {
            for (let _fe6bed7cb749 = 0; _fe6bed7cb749 < _35dc78c6b3fd.length; _fe6bed7cb749++) {
              let _6c6fe0dec40b = _35dc78c6b3fd[_fe6bed7cb749];
              if (!"!#$%&'*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz|~".includes(_6c6fe0dec40b)) return !1;
            }
            return !0;
          }(_35dc78c6b3fd)) throw new DOMException(`Failed to construct 'WebSocket': The subprotocol '${_35dc78c6b3fd}' is invalid.`);
          return _678bf849a9d5 = _678bf849a9d5 || {}, new f(_35dc78c6b3fd, _fe6bed7cb749, this.worker, _678bf849a9d5);
        }
        async fetch(_35dc78c6b3fd, _fe6bed7cb749) {
          let _6c6fe0dec40b = new Request(_35dc78c6b3fd, _fe6bed7cb749), _8be84367f9d6 = _fe6bed7cb749?.headers || _6c6fe0dec40b.headers, _6ef14f166da3 = _8be84367f9d6 instanceof Headers ? Object.fromEntries(_8be84367f9d6) : _8be84367f9d6, _d7b934a245ce = _6c6fe0dec40b.body, _c2df18134758 = new URL(_6c6fe0dec40b.url);
          if (_c2df18134758.protocol.startsWith("blob:")) {
            let _35dc78c6b3fd = await _678bf849a9d5(_c2df18134758), _fe6bed7cb749 = new Response(_35dc78c6b3fd.body, _35dc78c6b3fd);
            return _fe6bed7cb749.rawHeaders = Object.fromEntries(_35dc78c6b3fd.headers), _fe6bed7cb749.rawResponse = {
              body: _35dc78c6b3fd.body,
              headers: Object.fromEntries(_35dc78c6b3fd.headers),
              status: _35dc78c6b3fd.status,
              statusText: _35dc78c6b3fd.statusText
            }, _fe6bed7cb749.finalURL = _c2df18134758.toString(), _fe6bed7cb749;
          }
          for (let _35dc78c6b3fd = 0; ;_35dc78c6b3fd++) {
            let _678bf849a9d5 = (await this.worker.sendMessage({
              type: "fetch",
              fetch: {
                remote: _c2df18134758.toString(),
                method: _6c6fe0dec40b.method,
                headers: _6ef14f166da3,
                body: _d7b934a245ce || void 0
              }
            }, _d7b934a245ce ? [ _d7b934a245ce ] : [])).fetch, _8be84367f9d6 = new Response(_9281ea692b11.includes(_678bf849a9d5.status) ? void 0 : _678bf849a9d5.body, {
              headers: new Headers(_678bf849a9d5.headers),
              status: _678bf849a9d5.status,
              statusText: _678bf849a9d5.statusText
            });
            _8be84367f9d6.rawHeaders = _678bf849a9d5.headers, _8be84367f9d6.rawResponse = _678bf849a9d5, 
            _8be84367f9d6.finalURL = _c2df18134758.toString();
            let _50e0514e3a09 = _fe6bed7cb749?.redirect || _6c6fe0dec40b.redirect;
            if (!_539a9fec78eb.includes(_8be84367f9d6.status)) return _8be84367f9d6;
            switch (_50e0514e3a09) {
             case "follow":
              {
                let _fe6bed7cb749 = _8be84367f9d6.headers.get("location");
                if (20 > _35dc78c6b3fd && null !== _fe6bed7cb749) {
                  _c2df18134758 = new URL(_fe6bed7cb749, _c2df18134758);
                  continue;
                }
                throw TypeError("Failed to fetch");
              }

             case "error":
              throw TypeError("Failed to fetch");

             case "manual":
              return _8be84367f9d6;
            }
          }
        }
      }
      console.debug("bare-mux: running v2.1.9 (build dc9dc6e)");
    },
    8832: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.d(_fe6bed7cb749, {
        H: () => _678bf849a9d5,
        L: () => _8be84367f9d6
      });
      let _678bf849a9d5 = new Map([ "altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath" ].map(_35dc78c6b3fd => [ _35dc78c6b3fd.toLowerCase(), _35dc78c6b3fd ])), _8be84367f9d6 = new Map([ "definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan" ].map(_35dc78c6b3fd => [ _35dc78c6b3fd.toLowerCase(), _35dc78c6b3fd ]));
    },
    6498: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.d(_fe6bed7cb749, {
        A: () => _50e0514e3a09
      });
      var _678bf849a9d5 = _6c6fe0dec40b(2743), _8be84367f9d6 = _6c6fe0dec40b(8466), _6ef14f166da3 = _6c6fe0dec40b(8832);
      let _d7b934a245ce = new Set([ "style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript" ]);
      function o(_35dc78c6b3fd) {
        return _35dc78c6b3fd.replace(/"/g, "&quot;");
      }
      let _c2df18134758 = new Set([ "area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr" ]), _50e0514e3a09 = function e(_35dc78c6b3fd, _fe6bed7cb749 = {}) {
        let _6c6fe0dec40b = "length" in _35dc78c6b3fd ? _35dc78c6b3fd : [ _35dc78c6b3fd ], _50e0514e3a09 = "";
        for (let _35dc78c6b3fd = 0; _35dc78c6b3fd < _6c6fe0dec40b.length; _35dc78c6b3fd++) _50e0514e3a09 += function(_35dc78c6b3fd, _fe6bed7cb749) {
          var _6c6fe0dec40b, _50e0514e3a09, _9281ea692b11;
          switch (_35dc78c6b3fd.type) {
           case _678bf849a9d5.bL:
            return e(_35dc78c6b3fd.children, _fe6bed7cb749);

           case _678bf849a9d5.fl:
           case _678bf849a9d5.WL:
            return _6c6fe0dec40b = _35dc78c6b3fd, `<${_6c6fe0dec40b.data}>`;

           case _678bf849a9d5.Mw:
            return _50e0514e3a09 = _35dc78c6b3fd, `\x3c!--${_50e0514e3a09.data}--\x3e`;

           case _678bf849a9d5.KB:
            return _9281ea692b11 = _35dc78c6b3fd, `<![CDATA[${_9281ea692b11.children[0].data}]]>`;

           case _678bf849a9d5.eF:
           case _678bf849a9d5.OF:
           case _678bf849a9d5.vw:
            return function(_35dc78c6b3fd, _fe6bed7cb749) {
              var _6c6fe0dec40b;
              "foreign" === _fe6bed7cb749.xmlMode && (_35dc78c6b3fd.name = null != (_6c6fe0dec40b = _6ef14f166da3.H.get(_35dc78c6b3fd.name)) ? _6c6fe0dec40b : _35dc78c6b3fd.name, 
              _35dc78c6b3fd.parent && _713844858620.has(_35dc78c6b3fd.parent.name) && (_fe6bed7cb749 = {
                ..._fe6bed7cb749,
                xmlMode: !1
              })), !_fe6bed7cb749.xmlMode && _eef48ff38eca.has(_35dc78c6b3fd.name) && (_fe6bed7cb749 = {
                ..._fe6bed7cb749,
                xmlMode: "foreign"
              });
              let _678bf849a9d5 = `<${_35dc78c6b3fd.name}`, _d7b934a245ce = function(_35dc78c6b3fd, _fe6bed7cb749) {
                var _6c6fe0dec40b;
                if (!_35dc78c6b3fd) return;
                let _678bf849a9d5 = (null != (_6c6fe0dec40b = _fe6bed7cb749.encodeEntities) ? _6c6fe0dec40b : _fe6bed7cb749.decodeEntities) === !1 ? o : _fe6bed7cb749.xmlMode || "utf8" !== _fe6bed7cb749.encodeEntities ? _8be84367f9d6.WY : _8be84367f9d6.Gj;
                return Object.keys(_35dc78c6b3fd).map(_6c6fe0dec40b => {
                  var _8be84367f9d6, _d7b934a245ce;
                  let _c2df18134758 = null != (_8be84367f9d6 = _35dc78c6b3fd[_6c6fe0dec40b]) ? _8be84367f9d6 : "";
                  return ("foreign" === _fe6bed7cb749.xmlMode && (_6c6fe0dec40b = null != (_d7b934a245ce = _6ef14f166da3.L.get(_6c6fe0dec40b)) ? _d7b934a245ce : _6c6fe0dec40b), 
                  _fe6bed7cb749.emptyAttrs || _fe6bed7cb749.xmlMode || "" !== _c2df18134758) ? `${_6c6fe0dec40b}="${_678bf849a9d5(_c2df18134758)}"` : _6c6fe0dec40b;
                }).join(" ");
              }(_35dc78c6b3fd.attribs, _fe6bed7cb749);
              return _d7b934a245ce && (_678bf849a9d5 += ` ${_d7b934a245ce}`), 0 === _35dc78c6b3fd.children.length && (_fe6bed7cb749.xmlMode ? !1 !== _fe6bed7cb749.selfClosingTags : _fe6bed7cb749.selfClosingTags && _c2df18134758.has(_35dc78c6b3fd.name)) ? (_fe6bed7cb749.xmlMode || (_678bf849a9d5 += " "), 
              _678bf849a9d5 += "/>") : (_678bf849a9d5 += ">", _35dc78c6b3fd.children.length > 0 && (_678bf849a9d5 += e(_35dc78c6b3fd.children, _fe6bed7cb749)), 
              (_fe6bed7cb749.xmlMode || !_c2df18134758.has(_35dc78c6b3fd.name)) && (_678bf849a9d5 += `</${_35dc78c6b3fd.name}>`)), 
              _678bf849a9d5;
            }(_35dc78c6b3fd, _fe6bed7cb749);

           case _678bf849a9d5.EY:
            return function(_35dc78c6b3fd, _fe6bed7cb749) {
              var _6c6fe0dec40b;
              let _678bf849a9d5 = _35dc78c6b3fd.data || "";
              return (null != (_6c6fe0dec40b = _fe6bed7cb749.encodeEntities) ? _6c6fe0dec40b : _fe6bed7cb749.decodeEntities) === !1 || !_fe6bed7cb749.xmlMode && _35dc78c6b3fd.parent && _d7b934a245ce.has(_35dc78c6b3fd.parent.name) || (_678bf849a9d5 = _fe6bed7cb749.xmlMode || "utf8" !== _fe6bed7cb749.encodeEntities ? (0, 
              _8be84367f9d6.WY)(_678bf849a9d5) : (0, _8be84367f9d6.X1)(_678bf849a9d5)), _678bf849a9d5;
            }(_35dc78c6b3fd, _fe6bed7cb749);
          }
        }(_6c6fe0dec40b[_35dc78c6b3fd], _fe6bed7cb749);
        return _50e0514e3a09;
      }, _713844858620 = new Set([ "mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title" ]), _eef48ff38eca = new Set([ "svg", "math" ]);
    },
    2743: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      var _678bf849a9d5, _8be84367f9d6;
      function a(_35dc78c6b3fd) {
        return _35dc78c6b3fd.type === _678bf849a9d5.Tag || _35dc78c6b3fd.type === _678bf849a9d5.Script || _35dc78c6b3fd.type === _678bf849a9d5.Style;
      }
      _6c6fe0dec40b.d(_fe6bed7cb749, {
        EY: () => _d7b934a245ce,
        KB: () => _539a9fec78eb,
        Mw: () => _50e0514e3a09,
        OF: () => _eef48ff38eca,
        RJ: () => _678bf849a9d5,
        WL: () => _c2df18134758,
        bL: () => _6ef14f166da3,
        dz: () => a,
        eF: () => _713844858620,
        fl: () => _f78db6fdbb58,
        vw: () => _9281ea692b11
      }), (_8be84367f9d6 = _678bf849a9d5 || (_678bf849a9d5 = {})).Root = "root", _8be84367f9d6.Text = "text", 
      _8be84367f9d6.Directive = "directive", _8be84367f9d6.Comment = "comment", _8be84367f9d6.Script = "script", 
      _8be84367f9d6.Style = "style", _8be84367f9d6.Tag = "tag", _8be84367f9d6.CDATA = "cdata", 
      _8be84367f9d6.Doctype = "doctype";
      let _6ef14f166da3 = _678bf849a9d5.Root, _d7b934a245ce = _678bf849a9d5.Text, _c2df18134758 = _678bf849a9d5.Directive, _50e0514e3a09 = _678bf849a9d5.Comment, _713844858620 = _678bf849a9d5.Script, _eef48ff38eca = _678bf849a9d5.Style, _9281ea692b11 = _678bf849a9d5.Tag, _539a9fec78eb = _678bf849a9d5.CDATA, _f78db6fdbb58 = _678bf849a9d5.Doctype;
    },
    8866: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.d(_fe6bed7cb749, {
        DV: () => s,
        Hg: () => _8be84367f9d6.Hg,
        Mw: () => _8be84367f9d6.Mw
      });
      var _678bf849a9d5 = _6c6fe0dec40b(2743), _8be84367f9d6 = _6c6fe0dec40b(6072);
      let _6ef14f166da3 = {
        withStartIndices: !1,
        withEndIndices: !1,
        xmlMode: !1
      };
      class s {
        constructor(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
          this.dom = [], this.root = new _8be84367f9d6.yo(this.dom), this.done = !1, this.tagStack = [ this.root ], 
          this.lastNode = null, this.parser = null, "function" == typeof _fe6bed7cb749 && (_6c6fe0dec40b = _fe6bed7cb749, 
          _fe6bed7cb749 = _6ef14f166da3), "object" == typeof _35dc78c6b3fd && (_fe6bed7cb749 = _35dc78c6b3fd, 
          _35dc78c6b3fd = void 0), this.callback = null != _35dc78c6b3fd ? _35dc78c6b3fd : null, 
          this.options = null != _fe6bed7cb749 ? _fe6bed7cb749 : _6ef14f166da3, this.elementCB = null != _6c6fe0dec40b ? _6c6fe0dec40b : null;
        }
        onparserinit(_35dc78c6b3fd) {
          this.parser = _35dc78c6b3fd;
        }
        onreset() {
          this.dom = [], this.root = new _8be84367f9d6.yo(this.dom), this.done = !1, this.tagStack = [ this.root ], 
          this.lastNode = null, this.parser = null;
        }
        onend() {
          this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
        }
        onerror(_35dc78c6b3fd) {
          this.handleCallback(_35dc78c6b3fd);
        }
        onclosetag() {
          this.lastNode = null;
          let _35dc78c6b3fd = this.tagStack.pop();
          this.options.withEndIndices && (_35dc78c6b3fd.endIndex = this.parser.endIndex), 
          this.elementCB && this.elementCB(_35dc78c6b3fd);
        }
        onopentag(_35dc78c6b3fd, _fe6bed7cb749) {
          let _6c6fe0dec40b = this.options.xmlMode ? _678bf849a9d5.RJ.Tag : void 0, _6ef14f166da3 = new _8be84367f9d6.Hg(_35dc78c6b3fd, _fe6bed7cb749, void 0, _6c6fe0dec40b);
          this.addNode(_6ef14f166da3), this.tagStack.push(_6ef14f166da3);
        }
        ontext(_35dc78c6b3fd) {
          let {lastNode: _fe6bed7cb749} = this;
          if (_fe6bed7cb749 && _fe6bed7cb749.type === _678bf849a9d5.RJ.Text) _fe6bed7cb749.data += _35dc78c6b3fd, 
          this.options.withEndIndices && (_fe6bed7cb749.endIndex = this.parser.endIndex); else {
            let _fe6bed7cb749 = new _8be84367f9d6.EY(_35dc78c6b3fd);
            this.addNode(_fe6bed7cb749), this.lastNode = _fe6bed7cb749;
          }
        }
        oncomment(_35dc78c6b3fd) {
          if (this.lastNode && this.lastNode.type === _678bf849a9d5.RJ.Comment) {
            this.lastNode.data += _35dc78c6b3fd;
            return;
          }
          let _fe6bed7cb749 = new _8be84367f9d6.Mw(_35dc78c6b3fd);
          this.addNode(_fe6bed7cb749), this.lastNode = _fe6bed7cb749;
        }
        oncommentend() {
          this.lastNode = null;
        }
        oncdatastart() {
          let _35dc78c6b3fd = new _8be84367f9d6.EY(""), _fe6bed7cb749 = new _8be84367f9d6.KB([ _35dc78c6b3fd ]);
          this.addNode(_fe6bed7cb749), _35dc78c6b3fd.parent = _fe6bed7cb749, this.lastNode = _35dc78c6b3fd;
        }
        oncdataend() {
          this.lastNode = null;
        }
        onprocessinginstruction(_35dc78c6b3fd, _fe6bed7cb749) {
          let _6c6fe0dec40b = new _8be84367f9d6.Cd(_35dc78c6b3fd, _fe6bed7cb749);
          this.addNode(_6c6fe0dec40b);
        }
        handleCallback(_35dc78c6b3fd) {
          if ("function" == typeof this.callback) this.callback(_35dc78c6b3fd, this.dom); else if (_35dc78c6b3fd) throw _35dc78c6b3fd;
        }
        addNode(_35dc78c6b3fd) {
          let _fe6bed7cb749 = this.tagStack[this.tagStack.length - 1], _6c6fe0dec40b = _fe6bed7cb749.children[_fe6bed7cb749.children.length - 1];
          this.options.withStartIndices && (_35dc78c6b3fd.startIndex = this.parser.startIndex), 
          this.options.withEndIndices && (_35dc78c6b3fd.endIndex = this.parser.endIndex), 
          _fe6bed7cb749.children.push(_35dc78c6b3fd), _6c6fe0dec40b && (_35dc78c6b3fd.prev = _6c6fe0dec40b, 
          _6c6fe0dec40b.next = _35dc78c6b3fd), _35dc78c6b3fd.parent = _fe6bed7cb749, this.lastNode = null;
        }
      }
    },
    6072: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.d(_fe6bed7cb749, {
        Cd: () => l,
        EY: () => s,
        Hg: () => h,
        KB: () => u,
        Mw: () => o,
        yo: () => d
      });
      var _678bf849a9d5 = _6c6fe0dec40b(2743);
      class i {
        constructor() {
          this.parent = null, this.prev = null, this.next = null, this.startIndex = null, 
          this.endIndex = null;
        }
        get parentNode() {
          return this.parent;
        }
        set parentNode(_35dc78c6b3fd) {
          this.parent = _35dc78c6b3fd;
        }
        get previousSibling() {
          return this.prev;
        }
        set previousSibling(_35dc78c6b3fd) {
          this.prev = _35dc78c6b3fd;
        }
        get nextSibling() {
          return this.next;
        }
        set nextSibling(_35dc78c6b3fd) {
          this.next = _35dc78c6b3fd;
        }
        cloneNode(_35dc78c6b3fd = !1) {
          return p(this, _35dc78c6b3fd);
        }
      }
      class a extends i {
        constructor(_35dc78c6b3fd) {
          super(), this.data = _35dc78c6b3fd;
        }
        get nodeValue() {
          return this.data;
        }
        set nodeValue(_35dc78c6b3fd) {
          this.data = _35dc78c6b3fd;
        }
      }
      class s extends a {
        constructor() {
          super(...arguments), this.type = _678bf849a9d5.RJ.Text;
        }
        get nodeType() {
          return 3;
        }
      }
      class o extends a {
        constructor() {
          super(...arguments), this.type = _678bf849a9d5.RJ.Comment;
        }
        get nodeType() {
          return 8;
        }
      }
      class l extends a {
        constructor(_35dc78c6b3fd, _fe6bed7cb749) {
          super(_fe6bed7cb749), this.name = _35dc78c6b3fd, this.type = _678bf849a9d5.RJ.Directive;
        }
        get nodeType() {
          return 1;
        }
      }
      class c extends i {
        constructor(_35dc78c6b3fd) {
          super(), this.children = _35dc78c6b3fd;
        }
        get firstChild() {
          var _35dc78c6b3fd;
          return null != (_35dc78c6b3fd = this.children[0]) ? _35dc78c6b3fd : null;
        }
        get lastChild() {
          return this.children.length > 0 ? this.children[this.children.length - 1] : null;
        }
        get childNodes() {
          return this.children;
        }
        set childNodes(_35dc78c6b3fd) {
          this.children = _35dc78c6b3fd;
        }
      }
      class u extends c {
        constructor() {
          super(...arguments), this.type = _678bf849a9d5.RJ.CDATA;
        }
        get nodeType() {
          return 4;
        }
      }
      class d extends c {
        constructor() {
          super(...arguments), this.type = _678bf849a9d5.RJ.Root;
        }
        get nodeType() {
          return 9;
        }
      }
      class h extends c {
        constructor(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b = [], _8be84367f9d6 = ("script" === _35dc78c6b3fd ? _678bf849a9d5.RJ.Script : "style" === _35dc78c6b3fd ? _678bf849a9d5.RJ.Style : _678bf849a9d5.RJ.Tag)) {
          super(_6c6fe0dec40b), this.name = _35dc78c6b3fd, this.attribs = _fe6bed7cb749, this.type = _8be84367f9d6;
        }
        get nodeType() {
          return 1;
        }
        get tagName() {
          return this.name;
        }
        set tagName(_35dc78c6b3fd) {
          this.name = _35dc78c6b3fd;
        }
        get attributes() {
          return Object.keys(this.attribs).map(_35dc78c6b3fd => {
            var _fe6bed7cb749, _6c6fe0dec40b;
            return {
              name: _35dc78c6b3fd,
              value: this.attribs[_35dc78c6b3fd],
              namespace: null == (_fe6bed7cb749 = this["x-attribsNamespace"]) ? void 0 : _fe6bed7cb749[_35dc78c6b3fd],
              prefix: null == (_6c6fe0dec40b = this["x-attribsPrefix"]) ? void 0 : _6c6fe0dec40b[_35dc78c6b3fd]
            };
          });
        }
      }
      function p(_35dc78c6b3fd, _fe6bed7cb749 = !1) {
        let _6c6fe0dec40b;
        if (_35dc78c6b3fd.type === _678bf849a9d5.RJ.Text) _6c6fe0dec40b = new s(_35dc78c6b3fd.data); else if (_35dc78c6b3fd.type === _678bf849a9d5.RJ.Comment) _6c6fe0dec40b = new o(_35dc78c6b3fd.data); else if ((0, 
        _678bf849a9d5.dz)(_35dc78c6b3fd)) {
          let _678bf849a9d5 = _fe6bed7cb749 ? f(_35dc78c6b3fd.children) : [], _8be84367f9d6 = new h(_35dc78c6b3fd.name, {
            ..._35dc78c6b3fd.attribs
          }, _678bf849a9d5);
          _678bf849a9d5.forEach(_35dc78c6b3fd => _35dc78c6b3fd.parent = _8be84367f9d6), null != _35dc78c6b3fd.namespace && (_8be84367f9d6.namespace = _35dc78c6b3fd.namespace), 
          _35dc78c6b3fd["x-attribsNamespace"] && (_8be84367f9d6["x-attribsNamespace"] = {
            ..._35dc78c6b3fd["x-attribsNamespace"]
          }), _35dc78c6b3fd["x-attribsPrefix"] && (_8be84367f9d6["x-attribsPrefix"] = {
            ..._35dc78c6b3fd["x-attribsPrefix"]
          }), _6c6fe0dec40b = _8be84367f9d6;
        } else if (_35dc78c6b3fd.type === _678bf849a9d5.RJ.CDATA) {
          let _678bf849a9d5 = _fe6bed7cb749 ? f(_35dc78c6b3fd.children) : [], _8be84367f9d6 = new u(_678bf849a9d5);
          _678bf849a9d5.forEach(_35dc78c6b3fd => _35dc78c6b3fd.parent = _8be84367f9d6), _6c6fe0dec40b = _8be84367f9d6;
        } else if (_35dc78c6b3fd.type === _678bf849a9d5.RJ.Root) {
          let _678bf849a9d5 = _fe6bed7cb749 ? f(_35dc78c6b3fd.children) : [], _8be84367f9d6 = new d(_678bf849a9d5);
          _678bf849a9d5.forEach(_35dc78c6b3fd => _35dc78c6b3fd.parent = _8be84367f9d6), _35dc78c6b3fd["x-mode"] && (_8be84367f9d6["x-mode"] = _35dc78c6b3fd["x-mode"]), 
          _6c6fe0dec40b = _8be84367f9d6;
        } else if (_35dc78c6b3fd.type === _678bf849a9d5.RJ.Directive) {
          let _fe6bed7cb749 = new l(_35dc78c6b3fd.name, _35dc78c6b3fd.data);
          null != _35dc78c6b3fd["x-name"] && (_fe6bed7cb749["x-name"] = _35dc78c6b3fd["x-name"], 
          _fe6bed7cb749["x-publicId"] = _35dc78c6b3fd["x-publicId"], _fe6bed7cb749["x-systemId"] = _35dc78c6b3fd["x-systemId"]), 
          _6c6fe0dec40b = _fe6bed7cb749;
        } else throw Error(`Not implemented yet: ${_35dc78c6b3fd.type}`);
        return _6c6fe0dec40b.startIndex = _35dc78c6b3fd.startIndex, _6c6fe0dec40b.endIndex = _35dc78c6b3fd.endIndex, 
        null != _35dc78c6b3fd.sourceCodeLocation && (_6c6fe0dec40b.sourceCodeLocation = _35dc78c6b3fd.sourceCodeLocation), 
        _6c6fe0dec40b;
      }
      function f(_35dc78c6b3fd) {
        let _fe6bed7cb749 = _35dc78c6b3fd.map(_35dc78c6b3fd => p(_35dc78c6b3fd, !0));
        for (let _35dc78c6b3fd = 1; _35dc78c6b3fd < _fe6bed7cb749.length; _35dc78c6b3fd++) _fe6bed7cb749[_35dc78c6b3fd].prev = _fe6bed7cb749[_35dc78c6b3fd - 1], 
        _fe6bed7cb749[_35dc78c6b3fd - 1].next = _fe6bed7cb749[_35dc78c6b3fd];
        return _fe6bed7cb749;
      }
    },
    3256: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b(5016), _6c6fe0dec40b(1050);
    },
    6812: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      var _678bf849a9d5, _8be84367f9d6;
      _6c6fe0dec40b(8866), (_8be84367f9d6 = _678bf849a9d5 || (_678bf849a9d5 = {}))[_8be84367f9d6.DISCONNECTED = 1] = "DISCONNECTED", 
      _8be84367f9d6[_8be84367f9d6.PRECEDING = 2] = "PRECEDING", _8be84367f9d6[_8be84367f9d6.FOLLOWING = 4] = "FOLLOWING", 
      _8be84367f9d6[_8be84367f9d6.CONTAINS = 8] = "CONTAINS", _8be84367f9d6[_8be84367f9d6.CONTAINED_BY = 16] = "CONTAINED_BY";
    },
    4993: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b(5016), _6c6fe0dec40b(4647), _6c6fe0dec40b(9861), _6c6fe0dec40b(1050), 
      _6c6fe0dec40b(6812), _6c6fe0dec40b(3256), _6c6fe0dec40b(8866);
    },
    1050: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b(8866), _6c6fe0dec40b(9861);
    },
    9861: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b(8866);
    },
    5016: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b(8866), _6c6fe0dec40b(6498), _6c6fe0dec40b(2743);
    },
    4647: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b(8866);
    },
    2146: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      var _678bf849a9d5;
      _6c6fe0dec40b.d(_fe6bed7cb749, {
        MK: () => _6ef14f166da3,
        y6: () => s
      });
      let _8be84367f9d6 = new Map([ [ 0, 65533 ], [ 128, 8364 ], [ 130, 8218 ], [ 131, 402 ], [ 132, 8222 ], [ 133, 8230 ], [ 134, 8224 ], [ 135, 8225 ], [ 136, 710 ], [ 137, 8240 ], [ 138, 352 ], [ 139, 8249 ], [ 140, 338 ], [ 142, 381 ], [ 145, 8216 ], [ 146, 8217 ], [ 147, 8220 ], [ 148, 8221 ], [ 149, 8226 ], [ 150, 8211 ], [ 151, 8212 ], [ 152, 732 ], [ 153, 8482 ], [ 154, 353 ], [ 155, 8250 ], [ 156, 339 ], [ 158, 382 ], [ 159, 376 ] ]), _6ef14f166da3 = null != (_678bf849a9d5 = String.fromCodePoint) ? _678bf849a9d5 : function(_35dc78c6b3fd) {
        let _fe6bed7cb749 = "";
        return _35dc78c6b3fd > 65535 && (_35dc78c6b3fd -= 65536, _fe6bed7cb749 += String.fromCharCode(_35dc78c6b3fd >>> 10 & 1023 | 55296), 
        _35dc78c6b3fd = 56320 | 1023 & _35dc78c6b3fd), _fe6bed7cb749 += String.fromCharCode(_35dc78c6b3fd);
      };
      function s(_35dc78c6b3fd) {
        var _fe6bed7cb749;
        return _35dc78c6b3fd >= 55296 && _35dc78c6b3fd <= 57343 || _35dc78c6b3fd > 1114111 ? 65533 : null != (_fe6bed7cb749 = _8be84367f9d6.get(_35dc78c6b3fd)) ? _fe6bed7cb749 : _35dc78c6b3fd;
      }
    },
    2990: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.d(_fe6bed7cb749, {
        FJ: () => _eef48ff38eca,
        MK: () => _f78db6fdbb58.MK,
        Wf: () => g,
        qN: () => _9281ea692b11.q,
        sr: () => _539a9fec78eb.s
      });
      var _678bf849a9d5, _8be84367f9d6, _6ef14f166da3, _d7b934a245ce, _c2df18134758, _50e0514e3a09, _713844858620, _eef48ff38eca, _9281ea692b11 = _6c6fe0dec40b(7259), _539a9fec78eb = _6c6fe0dec40b(5949), _f78db6fdbb58 = _6c6fe0dec40b(2146);
      function f(_35dc78c6b3fd) {
        return _35dc78c6b3fd >= _c2df18134758.ZERO && _35dc78c6b3fd <= _c2df18134758.NINE;
      }
      (_678bf849a9d5 = _c2df18134758 || (_c2df18134758 = {}))[_678bf849a9d5.NUM = 35] = "NUM", 
      _678bf849a9d5[_678bf849a9d5.SEMI = 59] = "SEMI", _678bf849a9d5[_678bf849a9d5.EQUALS = 61] = "EQUALS", 
      _678bf849a9d5[_678bf849a9d5.ZERO = 48] = "ZERO", _678bf849a9d5[_678bf849a9d5.NINE = 57] = "NINE", 
      _678bf849a9d5[_678bf849a9d5.LOWER_A = 97] = "LOWER_A", _678bf849a9d5[_678bf849a9d5.LOWER_F = 102] = "LOWER_F", 
      _678bf849a9d5[_678bf849a9d5.LOWER_X = 120] = "LOWER_X", _678bf849a9d5[_678bf849a9d5.LOWER_Z = 122] = "LOWER_Z", 
      _678bf849a9d5[_678bf849a9d5.UPPER_A = 65] = "UPPER_A", _678bf849a9d5[_678bf849a9d5.UPPER_F = 70] = "UPPER_F", 
      _678bf849a9d5[_678bf849a9d5.UPPER_Z = 90] = "UPPER_Z", (_8be84367f9d6 = _50e0514e3a09 || (_50e0514e3a09 = {}))[_8be84367f9d6.VALUE_LENGTH = 49152] = "VALUE_LENGTH", 
      _8be84367f9d6[_8be84367f9d6.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", _8be84367f9d6[_8be84367f9d6.JUMP_TABLE = 127] = "JUMP_TABLE", 
      (_6ef14f166da3 = _713844858620 || (_713844858620 = {}))[_6ef14f166da3.EntityStart = 0] = "EntityStart", 
      _6ef14f166da3[_6ef14f166da3.NumericStart = 1] = "NumericStart", _6ef14f166da3[_6ef14f166da3.NumericDecimal = 2] = "NumericDecimal", 
      _6ef14f166da3[_6ef14f166da3.NumericHex = 3] = "NumericHex", _6ef14f166da3[_6ef14f166da3.NamedEntity = 4] = "NamedEntity", 
      (_d7b934a245ce = _eef48ff38eca || (_eef48ff38eca = {}))[_d7b934a245ce.Legacy = 0] = "Legacy", 
      _d7b934a245ce[_d7b934a245ce.Strict = 1] = "Strict", _d7b934a245ce[_d7b934a245ce.Attribute = 2] = "Attribute";
      class g {
        constructor(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
          this.decodeTree = _35dc78c6b3fd, this.emitCodePoint = _fe6bed7cb749, this.errors = _6c6fe0dec40b, 
          this.state = _713844858620.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, 
          this.excess = 1, this.decodeMode = _eef48ff38eca.Strict;
        }
        startEntity(_35dc78c6b3fd) {
          this.decodeMode = _35dc78c6b3fd, this.state = _713844858620.EntityStart, this.result = 0, 
          this.treeIndex = 0, this.excess = 1, this.consumed = 1;
        }
        write(_35dc78c6b3fd, _fe6bed7cb749) {
          switch (this.state) {
           case _713844858620.EntityStart:
            if (_35dc78c6b3fd.charCodeAt(_fe6bed7cb749) === _c2df18134758.NUM) return this.state = _713844858620.NumericStart, 
            this.consumed += 1, this.stateNumericStart(_35dc78c6b3fd, _fe6bed7cb749 + 1);
            return this.state = _713844858620.NamedEntity, this.stateNamedEntity(_35dc78c6b3fd, _fe6bed7cb749);

           case _713844858620.NumericStart:
            return this.stateNumericStart(_35dc78c6b3fd, _fe6bed7cb749);

           case _713844858620.NumericDecimal:
            return this.stateNumericDecimal(_35dc78c6b3fd, _fe6bed7cb749);

           case _713844858620.NumericHex:
            return this.stateNumericHex(_35dc78c6b3fd, _fe6bed7cb749);

           case _713844858620.NamedEntity:
            return this.stateNamedEntity(_35dc78c6b3fd, _fe6bed7cb749);
          }
        }
        stateNumericStart(_35dc78c6b3fd, _fe6bed7cb749) {
          return _fe6bed7cb749 >= _35dc78c6b3fd.length ? -1 : (32 | _35dc78c6b3fd.charCodeAt(_fe6bed7cb749)) === _c2df18134758.LOWER_X ? (this.state = _713844858620.NumericHex, 
          this.consumed += 1, this.stateNumericHex(_35dc78c6b3fd, _fe6bed7cb749 + 1)) : (this.state = _713844858620.NumericDecimal, 
          this.stateNumericDecimal(_35dc78c6b3fd, _fe6bed7cb749));
        }
        addToNumericResult(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b, _678bf849a9d5) {
          if (_fe6bed7cb749 !== _6c6fe0dec40b) {
            let _8be84367f9d6 = _6c6fe0dec40b - _fe6bed7cb749;
            this.result = this.result * Math.pow(_678bf849a9d5, _8be84367f9d6) + Number.parseInt(_35dc78c6b3fd.substr(_fe6bed7cb749, _8be84367f9d6), _678bf849a9d5), 
            this.consumed += _8be84367f9d6;
          }
        }
        stateNumericHex(_35dc78c6b3fd, _fe6bed7cb749) {
          let _6c6fe0dec40b = _fe6bed7cb749;
          for (;_fe6bed7cb749 < _35dc78c6b3fd.length; ) {
            var _678bf849a9d5;
            let _8be84367f9d6 = _35dc78c6b3fd.charCodeAt(_fe6bed7cb749);
            if (!f(_8be84367f9d6) && (!((_678bf849a9d5 = _8be84367f9d6) >= _c2df18134758.UPPER_A) || !(_678bf849a9d5 <= _c2df18134758.UPPER_F)) && (!(_678bf849a9d5 >= _c2df18134758.LOWER_A) || !(_678bf849a9d5 <= _c2df18134758.LOWER_F))) return this.addToNumericResult(_35dc78c6b3fd, _6c6fe0dec40b, _fe6bed7cb749, 16), 
            this.emitNumericEntity(_8be84367f9d6, 3);
            _fe6bed7cb749 += 1;
          }
          return this.addToNumericResult(_35dc78c6b3fd, _6c6fe0dec40b, _fe6bed7cb749, 16), 
          -1;
        }
        stateNumericDecimal(_35dc78c6b3fd, _fe6bed7cb749) {
          let _6c6fe0dec40b = _fe6bed7cb749;
          for (;_fe6bed7cb749 < _35dc78c6b3fd.length; ) {
            let _678bf849a9d5 = _35dc78c6b3fd.charCodeAt(_fe6bed7cb749);
            if (!f(_678bf849a9d5)) return this.addToNumericResult(_35dc78c6b3fd, _6c6fe0dec40b, _fe6bed7cb749, 10), 
            this.emitNumericEntity(_678bf849a9d5, 2);
            _fe6bed7cb749 += 1;
          }
          return this.addToNumericResult(_35dc78c6b3fd, _6c6fe0dec40b, _fe6bed7cb749, 10), 
          -1;
        }
        emitNumericEntity(_35dc78c6b3fd, _fe6bed7cb749) {
          var _6c6fe0dec40b;
          if (this.consumed <= _fe6bed7cb749) return null == (_6c6fe0dec40b = this.errors) || _6c6fe0dec40b.absenceOfDigitsInNumericCharacterReference(this.consumed), 
          0;
          if (_35dc78c6b3fd === _c2df18134758.SEMI) this.consumed += 1; else if (this.decodeMode === _eef48ff38eca.Strict) return 0;
          return this.emitCodePoint((0, _f78db6fdbb58.y6)(this.result), this.consumed), this.errors && (_35dc78c6b3fd !== _c2df18134758.SEMI && this.errors.missingSemicolonAfterCharacterReference(), 
          this.errors.validateNumericCharacterReference(this.result)), this.consumed;
        }
        stateNamedEntity(_35dc78c6b3fd, _fe6bed7cb749) {
          let {decodeTree: _6c6fe0dec40b} = this, _678bf849a9d5 = _6c6fe0dec40b[this.treeIndex], _8be84367f9d6 = (_678bf849a9d5 & _50e0514e3a09.VALUE_LENGTH) >> 14;
          for (;_fe6bed7cb749 < _35dc78c6b3fd.length; _fe6bed7cb749++, this.excess++) {
            let _6ef14f166da3 = _35dc78c6b3fd.charCodeAt(_fe6bed7cb749);
            if (this.treeIndex = function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b, _678bf849a9d5) {
              let _8be84367f9d6 = (_fe6bed7cb749 & _50e0514e3a09.BRANCH_LENGTH) >> 7, _6ef14f166da3 = _fe6bed7cb749 & _50e0514e3a09.JUMP_TABLE;
              if (0 === _8be84367f9d6) return 0 !== _6ef14f166da3 && _678bf849a9d5 === _6ef14f166da3 ? _6c6fe0dec40b : -1;
              if (_6ef14f166da3) {
                let _fe6bed7cb749 = _678bf849a9d5 - _6ef14f166da3;
                return _fe6bed7cb749 < 0 || _fe6bed7cb749 >= _8be84367f9d6 ? -1 : _35dc78c6b3fd[_6c6fe0dec40b + _fe6bed7cb749] - 1;
              }
              let _d7b934a245ce = _6c6fe0dec40b, _c2df18134758 = _d7b934a245ce + _8be84367f9d6 - 1;
              for (;_d7b934a245ce <= _c2df18134758; ) {
                let _fe6bed7cb749 = _d7b934a245ce + _c2df18134758 >>> 1, _6c6fe0dec40b = _35dc78c6b3fd[_fe6bed7cb749];
                if (_6c6fe0dec40b < _678bf849a9d5) _d7b934a245ce = _fe6bed7cb749 + 1; else {
                  if (!(_6c6fe0dec40b > _678bf849a9d5)) return _35dc78c6b3fd[_fe6bed7cb749 + _8be84367f9d6];
                  _c2df18134758 = _fe6bed7cb749 - 1;
                }
              }
              return -1;
            }(_6c6fe0dec40b, _678bf849a9d5, this.treeIndex + Math.max(1, _8be84367f9d6), _6ef14f166da3), 
            this.treeIndex < 0) return 0 === this.result || this.decodeMode === _eef48ff38eca.Attribute && (0 === _8be84367f9d6 || function(_35dc78c6b3fd) {
              var _fe6bed7cb749;
              return _35dc78c6b3fd === _c2df18134758.EQUALS || (_fe6bed7cb749 = _35dc78c6b3fd) >= _c2df18134758.UPPER_A && _fe6bed7cb749 <= _c2df18134758.UPPER_Z || _fe6bed7cb749 >= _c2df18134758.LOWER_A && _fe6bed7cb749 <= _c2df18134758.LOWER_Z || f(_fe6bed7cb749);
            }(_6ef14f166da3)) ? 0 : this.emitNotTerminatedNamedEntity();
            if (0 != (_8be84367f9d6 = ((_678bf849a9d5 = _6c6fe0dec40b[this.treeIndex]) & _50e0514e3a09.VALUE_LENGTH) >> 14)) {
              if (_6ef14f166da3 === _c2df18134758.SEMI) return this.emitNamedEntityData(this.treeIndex, _8be84367f9d6, this.consumed + this.excess);
              this.decodeMode !== _eef48ff38eca.Strict && (this.result = this.treeIndex, this.consumed += this.excess, 
              this.excess = 0);
            }
          }
          return -1;
        }
        emitNotTerminatedNamedEntity() {
          var _35dc78c6b3fd;
          let {result: _fe6bed7cb749, decodeTree: _6c6fe0dec40b} = this, _678bf849a9d5 = (_6c6fe0dec40b[_fe6bed7cb749] & _50e0514e3a09.VALUE_LENGTH) >> 14;
          return this.emitNamedEntityData(_fe6bed7cb749, _678bf849a9d5, this.consumed), null == (_35dc78c6b3fd = this.errors) || _35dc78c6b3fd.missingSemicolonAfterCharacterReference(), 
          this.consumed;
        }
        emitNamedEntityData(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
          let {decodeTree: _678bf849a9d5} = this;
          return this.emitCodePoint(1 === _fe6bed7cb749 ? _678bf849a9d5[_35dc78c6b3fd] & ~_50e0514e3a09.VALUE_LENGTH : _678bf849a9d5[_35dc78c6b3fd + 1], _6c6fe0dec40b), 
          3 === _fe6bed7cb749 && this.emitCodePoint(_678bf849a9d5[_35dc78c6b3fd + 2], _6c6fe0dec40b), 
          _6c6fe0dec40b;
        }
        end() {
          var _35dc78c6b3fd;
          switch (this.state) {
           case _713844858620.NamedEntity:
            return 0 !== this.result && (this.decodeMode !== _eef48ff38eca.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;

           case _713844858620.NumericDecimal:
            return this.emitNumericEntity(0, 2);

           case _713844858620.NumericHex:
            return this.emitNumericEntity(0, 3);

           case _713844858620.NumericStart:
            return null == (_35dc78c6b3fd = this.errors) || _35dc78c6b3fd.absenceOfDigitsInNumericCharacterReference(this.consumed), 
            0;

           case _713844858620.EntityStart:
            return 0;
          }
        }
      }
    },
    466: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b(9496), _6c6fe0dec40b(747);
    },
    747: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.d(_fe6bed7cb749, {
        Gj: () => _d7b934a245ce,
        WY: () => s,
        X1: () => _c2df18134758
      });
      let _678bf849a9d5 = /["$&'<>\u0080-\uFFFF]/g, _8be84367f9d6 = new Map([ [ 34, "&quot;" ], [ 38, "&amp;" ], [ 39, "&apos;" ], [ 60, "&lt;" ], [ 62, "&gt;" ] ]), _6ef14f166da3 = null == String.prototype.codePointAt ? (_35dc78c6b3fd, _fe6bed7cb749) => (64512 & _35dc78c6b3fd.charCodeAt(_fe6bed7cb749)) == 55296 ? (_35dc78c6b3fd.charCodeAt(_fe6bed7cb749) - 55296) * 1024 + _35dc78c6b3fd.charCodeAt(_fe6bed7cb749 + 1) - 56320 + 65536 : _35dc78c6b3fd.charCodeAt(_fe6bed7cb749) : (_35dc78c6b3fd, _fe6bed7cb749) => _35dc78c6b3fd.codePointAt(_fe6bed7cb749);
      function s(_35dc78c6b3fd) {
        let _fe6bed7cb749, _6c6fe0dec40b = "", _d7b934a245ce = 0;
        for (;null !== (_fe6bed7cb749 = _678bf849a9d5.exec(_35dc78c6b3fd)); ) {
          let {index: _c2df18134758} = _fe6bed7cb749, _50e0514e3a09 = _35dc78c6b3fd.charCodeAt(_c2df18134758), _713844858620 = _8be84367f9d6.get(_50e0514e3a09);
          void 0 === _713844858620 ? (_6c6fe0dec40b += `${_35dc78c6b3fd.substring(_d7b934a245ce, _c2df18134758)}&#x${_6ef14f166da3(_35dc78c6b3fd, _c2df18134758).toString(16)};`, 
          _d7b934a245ce = _678bf849a9d5.lastIndex += Number((64512 & _50e0514e3a09) == 55296)) : (_6c6fe0dec40b += _35dc78c6b3fd.substring(_d7b934a245ce, _c2df18134758) + _713844858620, 
          _d7b934a245ce = _c2df18134758 + 1);
        }
        return _6c6fe0dec40b + _35dc78c6b3fd.substr(_d7b934a245ce);
      }
      function o(_35dc78c6b3fd, _fe6bed7cb749) {
        return function(_6c6fe0dec40b) {
          let _678bf849a9d5, _8be84367f9d6 = 0, _6ef14f166da3 = "";
          for (;_678bf849a9d5 = _35dc78c6b3fd.exec(_6c6fe0dec40b); ) _8be84367f9d6 !== _678bf849a9d5.index && (_6ef14f166da3 += _6c6fe0dec40b.substring(_8be84367f9d6, _678bf849a9d5.index)), 
          _6ef14f166da3 += _fe6bed7cb749.get(_678bf849a9d5[0].charCodeAt(0)), _8be84367f9d6 = _678bf849a9d5.index + 1;
          return _6ef14f166da3 + _6c6fe0dec40b.substring(_8be84367f9d6);
        };
      }
      let _d7b934a245ce = o(/["&\u00A0]/g, new Map([ [ 34, "&quot;" ], [ 38, "&amp;" ], [ 160, "&nbsp;" ] ])), _c2df18134758 = o(/[&<>\u00A0]/g, new Map([ [ 38, "&amp;" ], [ 60, "&lt;" ], [ 62, "&gt;" ], [ 160, "&nbsp;" ] ]));
    },
    7259: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.d(_fe6bed7cb749, {
        q: () => _678bf849a9d5
      });
      let _678bf849a9d5 = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(_35dc78c6b3fd => _35dc78c6b3fd.charCodeAt(0)));
    },
    5949: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.d(_fe6bed7cb749, {
        s: () => _678bf849a9d5
      });
      let _678bf849a9d5 = new Uint16Array("Ȁaglq\tɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(_35dc78c6b3fd => _35dc78c6b3fd.charCodeAt(0)));
    },
    9496: function() {},
    8466: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.d(_fe6bed7cb749, {
        Gj: () => _c2df18134758.Gj,
        WY: () => _c2df18134758.WY,
        X1: () => _c2df18134758.X1
      }), _6c6fe0dec40b(2990), _6c6fe0dec40b(466);
      var _678bf849a9d5, _8be84367f9d6, _6ef14f166da3, _d7b934a245ce, _c2df18134758 = _6c6fe0dec40b(747);
      (_678bf849a9d5 = _6ef14f166da3 || (_6ef14f166da3 = {}))[_678bf849a9d5.XML = 0] = "XML", 
      _678bf849a9d5[_678bf849a9d5.HTML = 1] = "HTML", (_8be84367f9d6 = _d7b934a245ce || (_d7b934a245ce = {}))[_8be84367f9d6.UTF8 = 0] = "UTF8", 
      _8be84367f9d6[_8be84367f9d6.ASCII = 1] = "ASCII", _8be84367f9d6[_8be84367f9d6.Extensive = 2] = "Extensive", 
      _8be84367f9d6[_8be84367f9d6.Attribute = 3] = "Attribute", _8be84367f9d6[_8be84367f9d6.Text = 4] = "Text";
    },
    4645: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.d(_fe6bed7cb749, {
        i: () => g
      });
      var _678bf849a9d5 = _6c6fe0dec40b(5645), _8be84367f9d6 = _6c6fe0dec40b(2990);
      let _6ef14f166da3 = new Set([ "input", "option", "optgroup", "select", "button", "datalist", "textarea" ]), _d7b934a245ce = new Set([ "p" ]), _c2df18134758 = new Set([ "thead", "tbody" ]), _50e0514e3a09 = new Set([ "dd", "dt" ]), _713844858620 = new Set([ "rt", "rp" ]), _eef48ff38eca = new Map([ [ "tr", new Set([ "tr", "th", "td" ]) ], [ "th", new Set([ "th" ]) ], [ "td", new Set([ "thead", "th", "td" ]) ], [ "body", new Set([ "head", "link", "script" ]) ], [ "li", new Set([ "li" ]) ], [ "p", _d7b934a245ce ], [ "h1", _d7b934a245ce ], [ "h2", _d7b934a245ce ], [ "h3", _d7b934a245ce ], [ "h4", _d7b934a245ce ], [ "h5", _d7b934a245ce ], [ "h6", _d7b934a245ce ], [ "select", _6ef14f166da3 ], [ "input", _6ef14f166da3 ], [ "output", _6ef14f166da3 ], [ "button", _6ef14f166da3 ], [ "datalist", _6ef14f166da3 ], [ "textarea", _6ef14f166da3 ], [ "option", new Set([ "option" ]) ], [ "optgroup", new Set([ "optgroup", "option" ]) ], [ "dd", _50e0514e3a09 ], [ "dt", _50e0514e3a09 ], [ "address", _d7b934a245ce ], [ "article", _d7b934a245ce ], [ "aside", _d7b934a245ce ], [ "blockquote", _d7b934a245ce ], [ "details", _d7b934a245ce ], [ "div", _d7b934a245ce ], [ "dl", _d7b934a245ce ], [ "fieldset", _d7b934a245ce ], [ "figcaption", _d7b934a245ce ], [ "figure", _d7b934a245ce ], [ "footer", _d7b934a245ce ], [ "form", _d7b934a245ce ], [ "header", _d7b934a245ce ], [ "hr", _d7b934a245ce ], [ "main", _d7b934a245ce ], [ "nav", _d7b934a245ce ], [ "ol", _d7b934a245ce ], [ "pre", _d7b934a245ce ], [ "section", _d7b934a245ce ], [ "table", _d7b934a245ce ], [ "ul", _d7b934a245ce ], [ "rt", _713844858620 ], [ "rp", _713844858620 ], [ "tbody", _c2df18134758 ], [ "tfoot", _c2df18134758 ] ]), _9281ea692b11 = new Set([ "area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr" ]), _539a9fec78eb = new Set([ "math", "svg" ]), _f78db6fdbb58 = new Set([ "mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title" ]), _4f8d3fc53b00 = /\s|\//;
      class g {
        constructor(_35dc78c6b3fd, _fe6bed7cb749 = {}) {
          var _6c6fe0dec40b, _8be84367f9d6, _6ef14f166da3, _d7b934a245ce, _c2df18134758, _50e0514e3a09;
          this.options = _fe6bed7cb749, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, 
          this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, 
          this.stack = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, 
          this.ended = !1, this.cbs = null != _35dc78c6b3fd ? _35dc78c6b3fd : {}, this.htmlMode = !this.options.xmlMode, 
          this.lowerCaseTagNames = null != (_6c6fe0dec40b = _fe6bed7cb749.lowerCaseTags) ? _6c6fe0dec40b : this.htmlMode, 
          this.lowerCaseAttributeNames = null != (_8be84367f9d6 = _fe6bed7cb749.lowerCaseAttributeNames) ? _8be84367f9d6 : this.htmlMode, 
          this.recognizeSelfClosing = null != (_6ef14f166da3 = _fe6bed7cb749.recognizeSelfClosing) ? _6ef14f166da3 : !this.htmlMode, 
          this.tokenizer = new (null != (_d7b934a245ce = _fe6bed7cb749.Tokenizer) ? _d7b934a245ce : _678bf849a9d5.A)(this.options, this), 
          this.foreignContext = [ !this.htmlMode ], null == (_50e0514e3a09 = (_c2df18134758 = this.cbs).onparserinit) || _50e0514e3a09.call(_c2df18134758, this);
        }
        ontext(_35dc78c6b3fd, _fe6bed7cb749) {
          var _6c6fe0dec40b, _678bf849a9d5;
          let _8be84367f9d6 = this.getSlice(_35dc78c6b3fd, _fe6bed7cb749);
          this.endIndex = _fe6bed7cb749 - 1, null == (_678bf849a9d5 = (_6c6fe0dec40b = this.cbs).ontext) || _678bf849a9d5.call(_6c6fe0dec40b, _8be84367f9d6), 
          this.startIndex = _fe6bed7cb749;
        }
        ontextentity(_35dc78c6b3fd, _fe6bed7cb749) {
          var _6c6fe0dec40b, _678bf849a9d5;
          this.endIndex = _fe6bed7cb749 - 1, null == (_678bf849a9d5 = (_6c6fe0dec40b = this.cbs).ontext) || _678bf849a9d5.call(_6c6fe0dec40b, (0, 
          _8be84367f9d6.MK)(_35dc78c6b3fd)), this.startIndex = _fe6bed7cb749;
        }
        isVoidElement(_35dc78c6b3fd) {
          return this.htmlMode && _9281ea692b11.has(_35dc78c6b3fd);
        }
        onopentagname(_35dc78c6b3fd, _fe6bed7cb749) {
          this.endIndex = _fe6bed7cb749;
          let _6c6fe0dec40b = this.getSlice(_35dc78c6b3fd, _fe6bed7cb749);
          this.lowerCaseTagNames && (_6c6fe0dec40b = _6c6fe0dec40b.toLowerCase()), this.emitOpenTag(_6c6fe0dec40b);
        }
        emitOpenTag(_35dc78c6b3fd) {
          var _fe6bed7cb749, _6c6fe0dec40b, _678bf849a9d5, _8be84367f9d6;
          this.openTagStart = this.startIndex, this.tagname = _35dc78c6b3fd;
          let _6ef14f166da3 = this.htmlMode && _eef48ff38eca.get(_35dc78c6b3fd);
          if (_6ef14f166da3) for (;this.stack.length > 0 && _6ef14f166da3.has(this.stack[0]); ) {
            let _35dc78c6b3fd = this.stack.shift();
            null == (_6c6fe0dec40b = (_fe6bed7cb749 = this.cbs).onclosetag) || _6c6fe0dec40b.call(_fe6bed7cb749, _35dc78c6b3fd, !0);
          }
          !this.isVoidElement(_35dc78c6b3fd) && (this.stack.unshift(_35dc78c6b3fd), this.htmlMode && (_539a9fec78eb.has(_35dc78c6b3fd) ? this.foreignContext.unshift(!0) : _f78db6fdbb58.has(_35dc78c6b3fd) && this.foreignContext.unshift(!1))), 
          null == (_8be84367f9d6 = (_678bf849a9d5 = this.cbs).onopentagname) || _8be84367f9d6.call(_678bf849a9d5, _35dc78c6b3fd), 
          this.cbs.onopentag && (this.attribs = {});
        }
        endOpenTag(_35dc78c6b3fd) {
          var _fe6bed7cb749, _6c6fe0dec40b;
          this.startIndex = this.openTagStart, this.attribs && (null == (_6c6fe0dec40b = (_fe6bed7cb749 = this.cbs).onopentag) || _6c6fe0dec40b.call(_fe6bed7cb749, this.tagname, this.attribs, _35dc78c6b3fd), 
          this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), 
          this.tagname = "";
        }
        onopentagend(_35dc78c6b3fd) {
          this.endIndex = _35dc78c6b3fd, this.endOpenTag(!1), this.startIndex = _35dc78c6b3fd + 1;
        }
        onclosetag(_35dc78c6b3fd, _fe6bed7cb749) {
          var _6c6fe0dec40b, _678bf849a9d5, _8be84367f9d6, _6ef14f166da3, _d7b934a245ce, _c2df18134758, _50e0514e3a09, _713844858620;
          this.endIndex = _fe6bed7cb749;
          let _eef48ff38eca = this.getSlice(_35dc78c6b3fd, _fe6bed7cb749);
          if (this.lowerCaseTagNames && (_eef48ff38eca = _eef48ff38eca.toLowerCase()), this.htmlMode && (_539a9fec78eb.has(_eef48ff38eca) || _f78db6fdbb58.has(_eef48ff38eca)) && this.foreignContext.shift(), 
          this.isVoidElement(_eef48ff38eca)) this.htmlMode && "br" === _eef48ff38eca && (null == (_6ef14f166da3 = (_8be84367f9d6 = this.cbs).onopentagname) || _6ef14f166da3.call(_8be84367f9d6, "br"), 
          null == (_c2df18134758 = (_d7b934a245ce = this.cbs).onopentag) || _c2df18134758.call(_d7b934a245ce, "br", {}, !0), 
          null == (_713844858620 = (_50e0514e3a09 = this.cbs).onclosetag) || _713844858620.call(_50e0514e3a09, "br", !1)); else {
            let _35dc78c6b3fd = this.stack.indexOf(_eef48ff38eca);
            if (-1 !== _35dc78c6b3fd) for (let _fe6bed7cb749 = 0; _fe6bed7cb749 <= _35dc78c6b3fd; _fe6bed7cb749++) {
              let _8be84367f9d6 = this.stack.shift();
              null == (_678bf849a9d5 = (_6c6fe0dec40b = this.cbs).onclosetag) || _678bf849a9d5.call(_6c6fe0dec40b, _8be84367f9d6, _fe6bed7cb749 !== _35dc78c6b3fd);
            } else this.htmlMode && "p" === _eef48ff38eca && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
          }
          this.startIndex = _fe6bed7cb749 + 1;
        }
        onselfclosingtag(_35dc78c6b3fd) {
          this.endIndex = _35dc78c6b3fd, this.recognizeSelfClosing || this.foreignContext[0] ? (this.closeCurrentTag(!1), 
          this.startIndex = _35dc78c6b3fd + 1) : this.onopentagend(_35dc78c6b3fd);
        }
        closeCurrentTag(_35dc78c6b3fd) {
          var _fe6bed7cb749, _6c6fe0dec40b;
          let _678bf849a9d5 = this.tagname;
          this.endOpenTag(_35dc78c6b3fd), this.stack[0] === _678bf849a9d5 && (null == (_6c6fe0dec40b = (_fe6bed7cb749 = this.cbs).onclosetag) || _6c6fe0dec40b.call(_fe6bed7cb749, _678bf849a9d5, !_35dc78c6b3fd), 
          this.stack.shift());
        }
        onattribname(_35dc78c6b3fd, _fe6bed7cb749) {
          this.startIndex = _35dc78c6b3fd;
          let _6c6fe0dec40b = this.getSlice(_35dc78c6b3fd, _fe6bed7cb749);
          this.attribname = this.lowerCaseAttributeNames ? _6c6fe0dec40b.toLowerCase() : _6c6fe0dec40b;
        }
        onattribdata(_35dc78c6b3fd, _fe6bed7cb749) {
          this.attribvalue += this.getSlice(_35dc78c6b3fd, _fe6bed7cb749);
        }
        onattribentity(_35dc78c6b3fd) {
          this.attribvalue += (0, _8be84367f9d6.MK)(_35dc78c6b3fd);
        }
        onattribend(_35dc78c6b3fd, _fe6bed7cb749) {
          var _6c6fe0dec40b, _8be84367f9d6;
          this.endIndex = _fe6bed7cb749, null == (_8be84367f9d6 = (_6c6fe0dec40b = this.cbs).onattribute) || _8be84367f9d6.call(_6c6fe0dec40b, this.attribname, this.attribvalue, _35dc78c6b3fd === _678bf849a9d5.X.Double ? '"' : _35dc78c6b3fd === _678bf849a9d5.X.Single ? "'" : _35dc78c6b3fd === _678bf849a9d5.X.NoValue ? void 0 : null), 
          this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), 
          this.attribvalue = "";
        }
        getInstructionName(_35dc78c6b3fd) {
          let _fe6bed7cb749 = _35dc78c6b3fd.search(_4f8d3fc53b00), _6c6fe0dec40b = _fe6bed7cb749 < 0 ? _35dc78c6b3fd : _35dc78c6b3fd.substr(0, _fe6bed7cb749);
          return this.lowerCaseTagNames && (_6c6fe0dec40b = _6c6fe0dec40b.toLowerCase()), 
          _6c6fe0dec40b;
        }
        ondeclaration(_35dc78c6b3fd, _fe6bed7cb749) {
          this.endIndex = _fe6bed7cb749;
          let _6c6fe0dec40b = this.getSlice(_35dc78c6b3fd, _fe6bed7cb749);
          if (this.cbs.onprocessinginstruction) {
            let _35dc78c6b3fd = this.getInstructionName(_6c6fe0dec40b);
            this.cbs.onprocessinginstruction(`!${_35dc78c6b3fd}`, `!${_6c6fe0dec40b}`);
          }
          this.startIndex = _fe6bed7cb749 + 1;
        }
        onprocessinginstruction(_35dc78c6b3fd, _fe6bed7cb749) {
          this.endIndex = _fe6bed7cb749;
          let _6c6fe0dec40b = this.getSlice(_35dc78c6b3fd, _fe6bed7cb749);
          if (this.cbs.onprocessinginstruction) {
            let _35dc78c6b3fd = this.getInstructionName(_6c6fe0dec40b);
            this.cbs.onprocessinginstruction(`?${_35dc78c6b3fd}`, `?${_6c6fe0dec40b}`);
          }
          this.startIndex = _fe6bed7cb749 + 1;
        }
        oncomment(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
          var _678bf849a9d5, _8be84367f9d6, _6ef14f166da3, _d7b934a245ce;
          this.endIndex = _fe6bed7cb749, null == (_8be84367f9d6 = (_678bf849a9d5 = this.cbs).oncomment) || _8be84367f9d6.call(_678bf849a9d5, this.getSlice(_35dc78c6b3fd, _fe6bed7cb749 - _6c6fe0dec40b)), 
          null == (_d7b934a245ce = (_6ef14f166da3 = this.cbs).oncommentend) || _d7b934a245ce.call(_6ef14f166da3), 
          this.startIndex = _fe6bed7cb749 + 1;
        }
        oncdata(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
          var _678bf849a9d5, _8be84367f9d6, _6ef14f166da3, _d7b934a245ce, _c2df18134758, _50e0514e3a09, _713844858620, _eef48ff38eca, _9281ea692b11, _539a9fec78eb;
          this.endIndex = _fe6bed7cb749;
          let _f78db6fdbb58 = this.getSlice(_35dc78c6b3fd, _fe6bed7cb749 - _6c6fe0dec40b);
          !this.htmlMode || this.options.recognizeCDATA ? (null == (_8be84367f9d6 = (_678bf849a9d5 = this.cbs).oncdatastart) || _8be84367f9d6.call(_678bf849a9d5), 
          null == (_d7b934a245ce = (_6ef14f166da3 = this.cbs).ontext) || _d7b934a245ce.call(_6ef14f166da3, _f78db6fdbb58), 
          null == (_50e0514e3a09 = (_c2df18134758 = this.cbs).oncdataend) || _50e0514e3a09.call(_c2df18134758)) : (null == (_eef48ff38eca = (_713844858620 = this.cbs).oncomment) || _eef48ff38eca.call(_713844858620, `[CDATA[${_f78db6fdbb58}]]`), 
          null == (_539a9fec78eb = (_9281ea692b11 = this.cbs).oncommentend) || _539a9fec78eb.call(_9281ea692b11)), 
          this.startIndex = _fe6bed7cb749 + 1;
        }
        onend() {
          var _35dc78c6b3fd, _fe6bed7cb749;
          if (this.cbs.onclosetag) {
            this.endIndex = this.startIndex;
            for (let _35dc78c6b3fd = 0; _35dc78c6b3fd < this.stack.length; _35dc78c6b3fd++) this.cbs.onclosetag(this.stack[_35dc78c6b3fd], !0);
          }
          null == (_fe6bed7cb749 = (_35dc78c6b3fd = this.cbs).onend) || _fe6bed7cb749.call(_35dc78c6b3fd);
        }
        reset() {
          var _35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b, _678bf849a9d5;
          null == (_fe6bed7cb749 = (_35dc78c6b3fd = this.cbs).onreset) || _fe6bed7cb749.call(_35dc78c6b3fd), 
          this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, 
          this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, null == (_678bf849a9d5 = (_6c6fe0dec40b = this.cbs).onparserinit) || _678bf849a9d5.call(_6c6fe0dec40b, this), 
          this.buffers.length = 0, this.foreignContext.length = 0, this.foreignContext.unshift(!this.htmlMode), 
          this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1;
        }
        parseComplete(_35dc78c6b3fd) {
          this.reset(), this.end(_35dc78c6b3fd);
        }
        getSlice(_35dc78c6b3fd, _fe6bed7cb749) {
          for (;_35dc78c6b3fd - this.bufferOffset >= this.buffers[0].length; ) this.shiftBuffer();
          let _6c6fe0dec40b = this.buffers[0].slice(_35dc78c6b3fd - this.bufferOffset, _fe6bed7cb749 - this.bufferOffset);
          for (;_fe6bed7cb749 - this.bufferOffset > this.buffers[0].length; ) this.shiftBuffer(), 
          _6c6fe0dec40b += this.buffers[0].slice(0, _fe6bed7cb749 - this.bufferOffset);
          return _6c6fe0dec40b;
        }
        shiftBuffer() {
          this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift();
        }
        write(_35dc78c6b3fd) {
          var _fe6bed7cb749, _6c6fe0dec40b;
          if (this.ended) {
            null == (_6c6fe0dec40b = (_fe6bed7cb749 = this.cbs).onerror) || _6c6fe0dec40b.call(_fe6bed7cb749, Error(".write() after done!"));
            return;
          }
          this.buffers.push(_35dc78c6b3fd), this.tokenizer.running && (this.tokenizer.write(_35dc78c6b3fd), 
          this.writeIndex++);
        }
        end(_35dc78c6b3fd) {
          var _fe6bed7cb749, _6c6fe0dec40b;
          if (this.ended) {
            null == (_6c6fe0dec40b = (_fe6bed7cb749 = this.cbs).onerror) || _6c6fe0dec40b.call(_fe6bed7cb749, Error(".end() after done!"));
            return;
          }
          _35dc78c6b3fd && this.write(_35dc78c6b3fd), this.ended = !0, this.tokenizer.end();
        }
        pause() {
          this.tokenizer.pause();
        }
        resume() {
          for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length; ) this.tokenizer.write(this.buffers[this.writeIndex++]);
          this.ended && this.tokenizer.end();
        }
        parseChunk(_35dc78c6b3fd) {
          this.write(_35dc78c6b3fd);
        }
        done(_35dc78c6b3fd) {
          this.end(_35dc78c6b3fd);
        }
      }
    },
    5645: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.d(_fe6bed7cb749, {
        A: () => p,
        X: () => _50e0514e3a09
      });
      var _678bf849a9d5, _8be84367f9d6, _6ef14f166da3, _d7b934a245ce, _c2df18134758, _50e0514e3a09, _713844858620 = _6c6fe0dec40b(2990);
      function u(_35dc78c6b3fd) {
        return _35dc78c6b3fd === _d7b934a245ce.Space || _35dc78c6b3fd === _d7b934a245ce.NewLine || _35dc78c6b3fd === _d7b934a245ce.Tab || _35dc78c6b3fd === _d7b934a245ce.FormFeed || _35dc78c6b3fd === _d7b934a245ce.CarriageReturn;
      }
      function d(_35dc78c6b3fd) {
        return _35dc78c6b3fd === _d7b934a245ce.Slash || _35dc78c6b3fd === _d7b934a245ce.Gt || u(_35dc78c6b3fd);
      }
      (_678bf849a9d5 = _d7b934a245ce || (_d7b934a245ce = {}))[_678bf849a9d5.Tab = 9] = "Tab", 
      _678bf849a9d5[_678bf849a9d5.NewLine = 10] = "NewLine", _678bf849a9d5[_678bf849a9d5.FormFeed = 12] = "FormFeed", 
      _678bf849a9d5[_678bf849a9d5.CarriageReturn = 13] = "CarriageReturn", _678bf849a9d5[_678bf849a9d5.Space = 32] = "Space", 
      _678bf849a9d5[_678bf849a9d5.ExclamationMark = 33] = "ExclamationMark", _678bf849a9d5[_678bf849a9d5.Number = 35] = "Number", 
      _678bf849a9d5[_678bf849a9d5.Amp = 38] = "Amp", _678bf849a9d5[_678bf849a9d5.SingleQuote = 39] = "SingleQuote", 
      _678bf849a9d5[_678bf849a9d5.DoubleQuote = 34] = "DoubleQuote", _678bf849a9d5[_678bf849a9d5.Dash = 45] = "Dash", 
      _678bf849a9d5[_678bf849a9d5.Slash = 47] = "Slash", _678bf849a9d5[_678bf849a9d5.Zero = 48] = "Zero", 
      _678bf849a9d5[_678bf849a9d5.Nine = 57] = "Nine", _678bf849a9d5[_678bf849a9d5.Semi = 59] = "Semi", 
      _678bf849a9d5[_678bf849a9d5.Lt = 60] = "Lt", _678bf849a9d5[_678bf849a9d5.Eq = 61] = "Eq", 
      _678bf849a9d5[_678bf849a9d5.Gt = 62] = "Gt", _678bf849a9d5[_678bf849a9d5.Questionmark = 63] = "Questionmark", 
      _678bf849a9d5[_678bf849a9d5.UpperA = 65] = "UpperA", _678bf849a9d5[_678bf849a9d5.LowerA = 97] = "LowerA", 
      _678bf849a9d5[_678bf849a9d5.UpperF = 70] = "UpperF", _678bf849a9d5[_678bf849a9d5.LowerF = 102] = "LowerF", 
      _678bf849a9d5[_678bf849a9d5.UpperZ = 90] = "UpperZ", _678bf849a9d5[_678bf849a9d5.LowerZ = 122] = "LowerZ", 
      _678bf849a9d5[_678bf849a9d5.LowerX = 120] = "LowerX", _678bf849a9d5[_678bf849a9d5.OpeningSquareBracket = 91] = "OpeningSquareBracket", 
      (_8be84367f9d6 = _c2df18134758 || (_c2df18134758 = {}))[_8be84367f9d6.Text = 1] = "Text", 
      _8be84367f9d6[_8be84367f9d6.BeforeTagName = 2] = "BeforeTagName", _8be84367f9d6[_8be84367f9d6.InTagName = 3] = "InTagName", 
      _8be84367f9d6[_8be84367f9d6.InSelfClosingTag = 4] = "InSelfClosingTag", _8be84367f9d6[_8be84367f9d6.BeforeClosingTagName = 5] = "BeforeClosingTagName", 
      _8be84367f9d6[_8be84367f9d6.InClosingTagName = 6] = "InClosingTagName", _8be84367f9d6[_8be84367f9d6.AfterClosingTagName = 7] = "AfterClosingTagName", 
      _8be84367f9d6[_8be84367f9d6.BeforeAttributeName = 8] = "BeforeAttributeName", _8be84367f9d6[_8be84367f9d6.InAttributeName = 9] = "InAttributeName", 
      _8be84367f9d6[_8be84367f9d6.AfterAttributeName = 10] = "AfterAttributeName", _8be84367f9d6[_8be84367f9d6.BeforeAttributeValue = 11] = "BeforeAttributeValue", 
      _8be84367f9d6[_8be84367f9d6.InAttributeValueDq = 12] = "InAttributeValueDq", _8be84367f9d6[_8be84367f9d6.InAttributeValueSq = 13] = "InAttributeValueSq", 
      _8be84367f9d6[_8be84367f9d6.InAttributeValueNq = 14] = "InAttributeValueNq", _8be84367f9d6[_8be84367f9d6.BeforeDeclaration = 15] = "BeforeDeclaration", 
      _8be84367f9d6[_8be84367f9d6.InDeclaration = 16] = "InDeclaration", _8be84367f9d6[_8be84367f9d6.InProcessingInstruction = 17] = "InProcessingInstruction", 
      _8be84367f9d6[_8be84367f9d6.BeforeComment = 18] = "BeforeComment", _8be84367f9d6[_8be84367f9d6.CDATASequence = 19] = "CDATASequence", 
      _8be84367f9d6[_8be84367f9d6.InSpecialComment = 20] = "InSpecialComment", _8be84367f9d6[_8be84367f9d6.InCommentLike = 21] = "InCommentLike", 
      _8be84367f9d6[_8be84367f9d6.BeforeSpecialS = 22] = "BeforeSpecialS", _8be84367f9d6[_8be84367f9d6.BeforeSpecialT = 23] = "BeforeSpecialT", 
      _8be84367f9d6[_8be84367f9d6.SpecialStartSequence = 24] = "SpecialStartSequence", 
      _8be84367f9d6[_8be84367f9d6.InSpecialTag = 25] = "InSpecialTag", _8be84367f9d6[_8be84367f9d6.InEntity = 26] = "InEntity", 
      (_6ef14f166da3 = _50e0514e3a09 || (_50e0514e3a09 = {}))[_6ef14f166da3.NoValue = 0] = "NoValue", 
      _6ef14f166da3[_6ef14f166da3.Unquoted = 1] = "Unquoted", _6ef14f166da3[_6ef14f166da3.Single = 2] = "Single", 
      _6ef14f166da3[_6ef14f166da3.Double = 3] = "Double";
      let _eef48ff38eca = {
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
        constructor({xmlMode: _35dc78c6b3fd = !1, decodeEntities: _fe6bed7cb749 = !0}, _6c6fe0dec40b) {
          this.cbs = _6c6fe0dec40b, this.state = _c2df18134758.Text, this.buffer = "", this.sectionStart = 0, 
          this.index = 0, this.entityStart = 0, this.baseState = _c2df18134758.Text, this.isSpecial = !1, 
          this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, 
          this.xmlMode = _35dc78c6b3fd, this.decodeEntities = _fe6bed7cb749, this.entityDecoder = new _713844858620.Wf(_35dc78c6b3fd ? _713844858620.sr : _713844858620.qN, (_35dc78c6b3fd, _fe6bed7cb749) => this.emitCodePoint(_35dc78c6b3fd, _fe6bed7cb749));
        }
        reset() {
          this.state = _c2df18134758.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, 
          this.baseState = _c2df18134758.Text, this.currentSequence = void 0, this.running = !0, 
          this.offset = 0;
        }
        write(_35dc78c6b3fd) {
          this.offset += this.buffer.length, this.buffer = _35dc78c6b3fd, this.parse();
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
        stateText(_35dc78c6b3fd) {
          _35dc78c6b3fd === _d7b934a245ce.Lt || !this.decodeEntities && this.fastForwardTo(_d7b934a245ce.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), 
          this.state = _c2df18134758.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && _35dc78c6b3fd === _d7b934a245ce.Amp && this.startEntity();
        }
        stateSpecialStartSequence(_35dc78c6b3fd) {
          let _fe6bed7cb749 = this.sequenceIndex === this.currentSequence.length;
          if (_fe6bed7cb749 ? d(_35dc78c6b3fd) : (32 | _35dc78c6b3fd) === this.currentSequence[this.sequenceIndex]) {
            if (!_fe6bed7cb749) return void this.sequenceIndex++;
          } else this.isSpecial = !1;
          this.sequenceIndex = 0, this.state = _c2df18134758.InTagName, this.stateInTagName(_35dc78c6b3fd);
        }
        stateInSpecialTag(_35dc78c6b3fd) {
          if (this.sequenceIndex === this.currentSequence.length) {
            if (_35dc78c6b3fd === _d7b934a245ce.Gt || u(_35dc78c6b3fd)) {
              let _fe6bed7cb749 = this.index - this.currentSequence.length;
              if (this.sectionStart < _fe6bed7cb749) {
                let _35dc78c6b3fd = this.index;
                this.index = _fe6bed7cb749, this.cbs.ontext(this.sectionStart, _fe6bed7cb749), this.index = _35dc78c6b3fd;
              }
              this.isSpecial = !1, this.sectionStart = _fe6bed7cb749 + 2, this.stateInClosingTagName(_35dc78c6b3fd);
              return;
            }
            this.sequenceIndex = 0;
          }
          (32 | _35dc78c6b3fd) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : 0 === this.sequenceIndex ? this.currentSequence === _eef48ff38eca.TitleEnd ? this.decodeEntities && _35dc78c6b3fd === _d7b934a245ce.Amp && this.startEntity() : this.fastForwardTo(_d7b934a245ce.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = Number(_35dc78c6b3fd === _d7b934a245ce.Lt);
        }
        stateCDATASequence(_35dc78c6b3fd) {
          _35dc78c6b3fd === _eef48ff38eca.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === _eef48ff38eca.Cdata.length && (this.state = _c2df18134758.InCommentLike, 
          this.currentSequence = _eef48ff38eca.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, 
          this.state = _c2df18134758.InDeclaration, this.stateInDeclaration(_35dc78c6b3fd));
        }
        fastForwardTo(_35dc78c6b3fd) {
          for (;++this.index < this.buffer.length + this.offset; ) if (this.buffer.charCodeAt(this.index - this.offset) === _35dc78c6b3fd) return !0;
          return this.index = this.buffer.length + this.offset - 1, !1;
        }
        stateInCommentLike(_35dc78c6b3fd) {
          _35dc78c6b3fd === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === _eef48ff38eca.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), 
          this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = _c2df18134758.Text) : 0 === this.sequenceIndex ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : _35dc78c6b3fd !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
        }
        isTagStartChar(_35dc78c6b3fd) {
          return this.xmlMode ? !d(_35dc78c6b3fd) : _35dc78c6b3fd >= _d7b934a245ce.LowerA && _35dc78c6b3fd <= _d7b934a245ce.LowerZ || _35dc78c6b3fd >= _d7b934a245ce.UpperA && _35dc78c6b3fd <= _d7b934a245ce.UpperZ;
        }
        startSpecial(_35dc78c6b3fd, _fe6bed7cb749) {
          this.isSpecial = !0, this.currentSequence = _35dc78c6b3fd, this.sequenceIndex = _fe6bed7cb749, 
          this.state = _c2df18134758.SpecialStartSequence;
        }
        stateBeforeTagName(_35dc78c6b3fd) {
          if (_35dc78c6b3fd === _d7b934a245ce.ExclamationMark) this.state = _c2df18134758.BeforeDeclaration, 
          this.sectionStart = this.index + 1; else if (_35dc78c6b3fd === _d7b934a245ce.Questionmark) this.state = _c2df18134758.InProcessingInstruction, 
          this.sectionStart = this.index + 1; else if (this.isTagStartChar(_35dc78c6b3fd)) {
            let _fe6bed7cb749 = 32 | _35dc78c6b3fd;
            this.sectionStart = this.index, this.xmlMode ? this.state = _c2df18134758.InTagName : _fe6bed7cb749 === _eef48ff38eca.ScriptEnd[2] ? this.state = _c2df18134758.BeforeSpecialS : _fe6bed7cb749 === _eef48ff38eca.TitleEnd[2] || _fe6bed7cb749 === _eef48ff38eca.XmpEnd[2] ? this.state = _c2df18134758.BeforeSpecialT : this.state = _c2df18134758.InTagName;
          } else _35dc78c6b3fd === _d7b934a245ce.Slash ? this.state = _c2df18134758.BeforeClosingTagName : (this.state = _c2df18134758.Text, 
          this.stateText(_35dc78c6b3fd));
        }
        stateInTagName(_35dc78c6b3fd) {
          d(_35dc78c6b3fd) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, 
          this.state = _c2df18134758.BeforeAttributeName, this.stateBeforeAttributeName(_35dc78c6b3fd));
        }
        stateBeforeClosingTagName(_35dc78c6b3fd) {
          u(_35dc78c6b3fd) || (_35dc78c6b3fd === _d7b934a245ce.Gt ? this.state = _c2df18134758.Text : (this.state = this.isTagStartChar(_35dc78c6b3fd) ? _c2df18134758.InClosingTagName : _c2df18134758.InSpecialComment, 
          this.sectionStart = this.index));
        }
        stateInClosingTagName(_35dc78c6b3fd) {
          (_35dc78c6b3fd === _d7b934a245ce.Gt || u(_35dc78c6b3fd)) && (this.cbs.onclosetag(this.sectionStart, this.index), 
          this.sectionStart = -1, this.state = _c2df18134758.AfterClosingTagName, this.stateAfterClosingTagName(_35dc78c6b3fd));
        }
        stateAfterClosingTagName(_35dc78c6b3fd) {
          (_35dc78c6b3fd === _d7b934a245ce.Gt || this.fastForwardTo(_d7b934a245ce.Gt)) && (this.state = _c2df18134758.Text, 
          this.sectionStart = this.index + 1);
        }
        stateBeforeAttributeName(_35dc78c6b3fd) {
          _35dc78c6b3fd === _d7b934a245ce.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = _c2df18134758.InSpecialTag, 
          this.sequenceIndex = 0) : this.state = _c2df18134758.Text, this.sectionStart = this.index + 1) : _35dc78c6b3fd === _d7b934a245ce.Slash ? this.state = _c2df18134758.InSelfClosingTag : u(_35dc78c6b3fd) || (this.state = _c2df18134758.InAttributeName, 
          this.sectionStart = this.index);
        }
        stateInSelfClosingTag(_35dc78c6b3fd) {
          _35dc78c6b3fd === _d7b934a245ce.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = _c2df18134758.Text, 
          this.sectionStart = this.index + 1, this.isSpecial = !1) : u(_35dc78c6b3fd) || (this.state = _c2df18134758.BeforeAttributeName, 
          this.stateBeforeAttributeName(_35dc78c6b3fd));
        }
        stateInAttributeName(_35dc78c6b3fd) {
          (_35dc78c6b3fd === _d7b934a245ce.Eq || d(_35dc78c6b3fd)) && (this.cbs.onattribname(this.sectionStart, this.index), 
          this.sectionStart = this.index, this.state = _c2df18134758.AfterAttributeName, this.stateAfterAttributeName(_35dc78c6b3fd));
        }
        stateAfterAttributeName(_35dc78c6b3fd) {
          _35dc78c6b3fd === _d7b934a245ce.Eq ? this.state = _c2df18134758.BeforeAttributeValue : _35dc78c6b3fd === _d7b934a245ce.Slash || _35dc78c6b3fd === _d7b934a245ce.Gt ? (this.cbs.onattribend(_50e0514e3a09.NoValue, this.sectionStart), 
          this.sectionStart = -1, this.state = _c2df18134758.BeforeAttributeName, this.stateBeforeAttributeName(_35dc78c6b3fd)) : u(_35dc78c6b3fd) || (this.cbs.onattribend(_50e0514e3a09.NoValue, this.sectionStart), 
          this.state = _c2df18134758.InAttributeName, this.sectionStart = this.index);
        }
        stateBeforeAttributeValue(_35dc78c6b3fd) {
          _35dc78c6b3fd === _d7b934a245ce.DoubleQuote ? (this.state = _c2df18134758.InAttributeValueDq, 
          this.sectionStart = this.index + 1) : _35dc78c6b3fd === _d7b934a245ce.SingleQuote ? (this.state = _c2df18134758.InAttributeValueSq, 
          this.sectionStart = this.index + 1) : u(_35dc78c6b3fd) || (this.sectionStart = this.index, 
          this.state = _c2df18134758.InAttributeValueNq, this.stateInAttributeValueNoQuotes(_35dc78c6b3fd));
        }
        handleInAttributeValue(_35dc78c6b3fd, _fe6bed7cb749) {
          _35dc78c6b3fd === _fe6bed7cb749 || !this.decodeEntities && this.fastForwardTo(_fe6bed7cb749) ? (this.cbs.onattribdata(this.sectionStart, this.index), 
          this.sectionStart = -1, this.cbs.onattribend(_fe6bed7cb749 === _d7b934a245ce.DoubleQuote ? _50e0514e3a09.Double : _50e0514e3a09.Single, this.index + 1), 
          this.state = _c2df18134758.BeforeAttributeName) : this.decodeEntities && _35dc78c6b3fd === _d7b934a245ce.Amp && this.startEntity();
        }
        stateInAttributeValueDoubleQuotes(_35dc78c6b3fd) {
          this.handleInAttributeValue(_35dc78c6b3fd, _d7b934a245ce.DoubleQuote);
        }
        stateInAttributeValueSingleQuotes(_35dc78c6b3fd) {
          this.handleInAttributeValue(_35dc78c6b3fd, _d7b934a245ce.SingleQuote);
        }
        stateInAttributeValueNoQuotes(_35dc78c6b3fd) {
          u(_35dc78c6b3fd) || _35dc78c6b3fd === _d7b934a245ce.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), 
          this.sectionStart = -1, this.cbs.onattribend(_50e0514e3a09.Unquoted, this.index), 
          this.state = _c2df18134758.BeforeAttributeName, this.stateBeforeAttributeName(_35dc78c6b3fd)) : this.decodeEntities && _35dc78c6b3fd === _d7b934a245ce.Amp && this.startEntity();
        }
        stateBeforeDeclaration(_35dc78c6b3fd) {
          _35dc78c6b3fd === _d7b934a245ce.OpeningSquareBracket ? (this.state = _c2df18134758.CDATASequence, 
          this.sequenceIndex = 0) : this.state = _35dc78c6b3fd === _d7b934a245ce.Dash ? _c2df18134758.BeforeComment : _c2df18134758.InDeclaration;
        }
        stateInDeclaration(_35dc78c6b3fd) {
          (_35dc78c6b3fd === _d7b934a245ce.Gt || this.fastForwardTo(_d7b934a245ce.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), 
          this.state = _c2df18134758.Text, this.sectionStart = this.index + 1);
        }
        stateInProcessingInstruction(_35dc78c6b3fd) {
          (_35dc78c6b3fd === _d7b934a245ce.Gt || this.fastForwardTo(_d7b934a245ce.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), 
          this.state = _c2df18134758.Text, this.sectionStart = this.index + 1);
        }
        stateBeforeComment(_35dc78c6b3fd) {
          _35dc78c6b3fd === _d7b934a245ce.Dash ? (this.state = _c2df18134758.InCommentLike, 
          this.currentSequence = _eef48ff38eca.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = _c2df18134758.InDeclaration;
        }
        stateInSpecialComment(_35dc78c6b3fd) {
          (_35dc78c6b3fd === _d7b934a245ce.Gt || this.fastForwardTo(_d7b934a245ce.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), 
          this.state = _c2df18134758.Text, this.sectionStart = this.index + 1);
        }
        stateBeforeSpecialS(_35dc78c6b3fd) {
          let _fe6bed7cb749 = 32 | _35dc78c6b3fd;
          _fe6bed7cb749 === _eef48ff38eca.ScriptEnd[3] ? this.startSpecial(_eef48ff38eca.ScriptEnd, 4) : _fe6bed7cb749 === _eef48ff38eca.StyleEnd[3] ? this.startSpecial(_eef48ff38eca.StyleEnd, 4) : (this.state = _c2df18134758.InTagName, 
          this.stateInTagName(_35dc78c6b3fd));
        }
        stateBeforeSpecialT(_35dc78c6b3fd) {
          switch (32 | _35dc78c6b3fd) {
           case _eef48ff38eca.TitleEnd[3]:
            this.startSpecial(_eef48ff38eca.TitleEnd, 4);
            break;

           case _eef48ff38eca.TextareaEnd[3]:
            this.startSpecial(_eef48ff38eca.TextareaEnd, 4);
            break;

           case _eef48ff38eca.XmpEnd[3]:
            this.startSpecial(_eef48ff38eca.XmpEnd, 4);
            break;

           default:
            this.state = _c2df18134758.InTagName, this.stateInTagName(_35dc78c6b3fd);
          }
        }
        startEntity() {
          this.baseState = this.state, this.state = _c2df18134758.InEntity, this.entityStart = this.index, 
          this.entityDecoder.startEntity(this.xmlMode ? _713844858620.FJ.Strict : this.baseState === _c2df18134758.Text || this.baseState === _c2df18134758.InSpecialTag ? _713844858620.FJ.Legacy : _713844858620.FJ.Attribute);
        }
        stateInEntity() {
          let _35dc78c6b3fd = this.entityDecoder.write(this.buffer, this.index - this.offset);
          _35dc78c6b3fd >= 0 ? (this.state = this.baseState, 0 === _35dc78c6b3fd && (this.index = this.entityStart)) : this.index = this.offset + this.buffer.length - 1;
        }
        cleanup() {
          this.running && this.sectionStart !== this.index && (this.state === _c2df18134758.Text || this.state === _c2df18134758.InSpecialTag && 0 === this.sequenceIndex ? (this.cbs.ontext(this.sectionStart, this.index), 
          this.sectionStart = this.index) : (this.state === _c2df18134758.InAttributeValueDq || this.state === _c2df18134758.InAttributeValueSq || this.state === _c2df18134758.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), 
          this.sectionStart = this.index));
        }
        shouldContinue() {
          return this.index < this.buffer.length + this.offset && this.running;
        }
        parse() {
          for (;this.shouldContinue(); ) {
            let _35dc78c6b3fd = this.buffer.charCodeAt(this.index - this.offset);
            switch (this.state) {
             case _c2df18134758.Text:
              this.stateText(_35dc78c6b3fd);
              break;

             case _c2df18134758.SpecialStartSequence:
              this.stateSpecialStartSequence(_35dc78c6b3fd);
              break;

             case _c2df18134758.InSpecialTag:
              this.stateInSpecialTag(_35dc78c6b3fd);
              break;

             case _c2df18134758.CDATASequence:
              this.stateCDATASequence(_35dc78c6b3fd);
              break;

             case _c2df18134758.InAttributeValueDq:
              this.stateInAttributeValueDoubleQuotes(_35dc78c6b3fd);
              break;

             case _c2df18134758.InAttributeName:
              this.stateInAttributeName(_35dc78c6b3fd);
              break;

             case _c2df18134758.InCommentLike:
              this.stateInCommentLike(_35dc78c6b3fd);
              break;

             case _c2df18134758.InSpecialComment:
              this.stateInSpecialComment(_35dc78c6b3fd);
              break;

             case _c2df18134758.BeforeAttributeName:
              this.stateBeforeAttributeName(_35dc78c6b3fd);
              break;

             case _c2df18134758.InTagName:
              this.stateInTagName(_35dc78c6b3fd);
              break;

             case _c2df18134758.InClosingTagName:
              this.stateInClosingTagName(_35dc78c6b3fd);
              break;

             case _c2df18134758.BeforeTagName:
              this.stateBeforeTagName(_35dc78c6b3fd);
              break;

             case _c2df18134758.AfterAttributeName:
              this.stateAfterAttributeName(_35dc78c6b3fd);
              break;

             case _c2df18134758.InAttributeValueSq:
              this.stateInAttributeValueSingleQuotes(_35dc78c6b3fd);
              break;

             case _c2df18134758.BeforeAttributeValue:
              this.stateBeforeAttributeValue(_35dc78c6b3fd);
              break;

             case _c2df18134758.BeforeClosingTagName:
              this.stateBeforeClosingTagName(_35dc78c6b3fd);
              break;

             case _c2df18134758.AfterClosingTagName:
              this.stateAfterClosingTagName(_35dc78c6b3fd);
              break;

             case _c2df18134758.BeforeSpecialS:
              this.stateBeforeSpecialS(_35dc78c6b3fd);
              break;

             case _c2df18134758.BeforeSpecialT:
              this.stateBeforeSpecialT(_35dc78c6b3fd);
              break;

             case _c2df18134758.InAttributeValueNq:
              this.stateInAttributeValueNoQuotes(_35dc78c6b3fd);
              break;

             case _c2df18134758.InSelfClosingTag:
              this.stateInSelfClosingTag(_35dc78c6b3fd);
              break;

             case _c2df18134758.InDeclaration:
              this.stateInDeclaration(_35dc78c6b3fd);
              break;

             case _c2df18134758.BeforeDeclaration:
              this.stateBeforeDeclaration(_35dc78c6b3fd);
              break;

             case _c2df18134758.BeforeComment:
              this.stateBeforeComment(_35dc78c6b3fd);
              break;

             case _c2df18134758.InProcessingInstruction:
              this.stateInProcessingInstruction(_35dc78c6b3fd);
              break;

             case _c2df18134758.InEntity:
              this.stateInEntity();
            }
            this.index++;
          }
          this.cleanup();
        }
        finish() {
          this.state === _c2df18134758.InEntity && (this.entityDecoder.end(), this.state = this.baseState), 
          this.handleTrailingData(), this.cbs.onend();
        }
        handleTrailingData() {
          let _35dc78c6b3fd = this.buffer.length + this.offset;
          this.sectionStart >= _35dc78c6b3fd || (this.state === _c2df18134758.InCommentLike ? this.currentSequence === _eef48ff38eca.CdataEnd ? this.cbs.oncdata(this.sectionStart, _35dc78c6b3fd, 0) : this.cbs.oncomment(this.sectionStart, _35dc78c6b3fd, 0) : this.state === _c2df18134758.InTagName || this.state === _c2df18134758.BeforeAttributeName || this.state === _c2df18134758.BeforeAttributeValue || this.state === _c2df18134758.AfterAttributeName || this.state === _c2df18134758.InAttributeName || this.state === _c2df18134758.InAttributeValueSq || this.state === _c2df18134758.InAttributeValueDq || this.state === _c2df18134758.InAttributeValueNq || this.state === _c2df18134758.InClosingTagName || this.cbs.ontext(this.sectionStart, _35dc78c6b3fd));
        }
        emitCodePoint(_35dc78c6b3fd, _fe6bed7cb749) {
          this.baseState !== _c2df18134758.Text && this.baseState !== _c2df18134758.InSpecialTag ? (this.sectionStart < this.entityStart && this.cbs.onattribdata(this.sectionStart, this.entityStart), 
          this.sectionStart = this.entityStart + _fe6bed7cb749, this.index = this.sectionStart - 1, 
          this.cbs.onattribentity(_35dc78c6b3fd)) : (this.sectionStart < this.entityStart && this.cbs.ontext(this.sectionStart, this.entityStart), 
          this.sectionStart = this.entityStart + _fe6bed7cb749, this.index = this.sectionStart - 1, 
          this.cbs.ontextentity(_35dc78c6b3fd, this.sectionStart));
        }
      }
    },
    3808: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.d(_fe6bed7cb749, {
        RJ: () => _8be84367f9d6,
        iX: () => _678bf849a9d5.i
      });
      var _678bf849a9d5 = _6c6fe0dec40b(4645);
      _6c6fe0dec40b(8866), _6c6fe0dec40b(5645);
      var _8be84367f9d6 = _6c6fe0dec40b(2743);
      _6c6fe0dec40b(4993);
    },
    6570: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      let _678bf849a9d5, _8be84367f9d6, _6ef14f166da3, _d7b934a245ce;
      _6c6fe0dec40b.d(_fe6bed7cb749, {
        P2: () => f
      });
      let o = (_35dc78c6b3fd, _fe6bed7cb749) => _fe6bed7cb749.some(_fe6bed7cb749 => _35dc78c6b3fd instanceof _fe6bed7cb749), _c2df18134758 = new WeakMap, _50e0514e3a09 = new WeakMap, _713844858620 = new WeakMap, _eef48ff38eca = {
        get(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
          if (_35dc78c6b3fd instanceof IDBTransaction) {
            if ("done" === _fe6bed7cb749) return _c2df18134758.get(_35dc78c6b3fd);
            if ("store" === _fe6bed7cb749) return _6c6fe0dec40b.objectStoreNames[1] ? void 0 : _6c6fe0dec40b.objectStore(_6c6fe0dec40b.objectStoreNames[0]);
          }
          return h(_35dc78c6b3fd[_fe6bed7cb749]);
        },
        set: (_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) => (_35dc78c6b3fd[_fe6bed7cb749] = _6c6fe0dec40b, 
        !0),
        has: (_35dc78c6b3fd, _fe6bed7cb749) => _35dc78c6b3fd instanceof IDBTransaction && ("done" === _fe6bed7cb749 || "store" === _fe6bed7cb749) || _fe6bed7cb749 in _35dc78c6b3fd
      };
      function h(_35dc78c6b3fd) {
        if (_35dc78c6b3fd instanceof IDBRequest) {
          let _fe6bed7cb749;
          return _fe6bed7cb749 = new Promise((_fe6bed7cb749, _6c6fe0dec40b) => {
            let n = () => {
              _35dc78c6b3fd.removeEventListener("success", i), _35dc78c6b3fd.removeEventListener("error", a);
            }, i = () => {
              _fe6bed7cb749(h(_35dc78c6b3fd.result)), n();
            }, a = () => {
              _6c6fe0dec40b(_35dc78c6b3fd.error), n();
            };
            _35dc78c6b3fd.addEventListener("success", i), _35dc78c6b3fd.addEventListener("error", a);
          }), _713844858620.set(_fe6bed7cb749, _35dc78c6b3fd), _fe6bed7cb749;
        }
        if (_50e0514e3a09.has(_35dc78c6b3fd)) return _50e0514e3a09.get(_35dc78c6b3fd);
        let _fe6bed7cb749 = function(_35dc78c6b3fd) {
          if ("function" == typeof _35dc78c6b3fd) return (_8be84367f9d6 || (_8be84367f9d6 = [ IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey ])).includes(_35dc78c6b3fd) ? function(..._fe6bed7cb749) {
            return _35dc78c6b3fd.apply(p(this), _fe6bed7cb749), h(this.request);
          } : function(..._fe6bed7cb749) {
            return h(_35dc78c6b3fd.apply(p(this), _fe6bed7cb749));
          };
          return (_35dc78c6b3fd instanceof IDBTransaction && function(_35dc78c6b3fd) {
            if (_c2df18134758.has(_35dc78c6b3fd)) return;
            let _fe6bed7cb749 = new Promise((_fe6bed7cb749, _6c6fe0dec40b) => {
              let n = () => {
                _35dc78c6b3fd.removeEventListener("complete", i), _35dc78c6b3fd.removeEventListener("error", a), 
                _35dc78c6b3fd.removeEventListener("abort", a);
              }, i = () => {
                _fe6bed7cb749(), n();
              }, a = () => {
                _6c6fe0dec40b(_35dc78c6b3fd.error || new DOMException("AbortError", "AbortError")), 
                n();
              };
              _35dc78c6b3fd.addEventListener("complete", i), _35dc78c6b3fd.addEventListener("error", a), 
              _35dc78c6b3fd.addEventListener("abort", a);
            });
            _c2df18134758.set(_35dc78c6b3fd, _fe6bed7cb749);
          }(_35dc78c6b3fd), o(_35dc78c6b3fd, _678bf849a9d5 || (_678bf849a9d5 = [ IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction ]))) ? new Proxy(_35dc78c6b3fd, _eef48ff38eca) : _35dc78c6b3fd;
        }(_35dc78c6b3fd);
        return _fe6bed7cb749 !== _35dc78c6b3fd && (_50e0514e3a09.set(_35dc78c6b3fd, _fe6bed7cb749), 
        _713844858620.set(_fe6bed7cb749, _35dc78c6b3fd)), _fe6bed7cb749;
      }
      let p = _35dc78c6b3fd => _713844858620.get(_35dc78c6b3fd);
      function f(_35dc78c6b3fd, _fe6bed7cb749, {blocked: _6c6fe0dec40b, upgrade: _678bf849a9d5, blocking: _8be84367f9d6, terminated: _6ef14f166da3} = {}) {
        let _d7b934a245ce = indexedDB.open(_35dc78c6b3fd, _fe6bed7cb749), _c2df18134758 = h(_d7b934a245ce);
        return _678bf849a9d5 && _d7b934a245ce.addEventListener("upgradeneeded", _35dc78c6b3fd => {
          _678bf849a9d5(h(_d7b934a245ce.result), _35dc78c6b3fd.oldVersion, _35dc78c6b3fd.newVersion, h(_d7b934a245ce.transaction), _35dc78c6b3fd);
        }), _6c6fe0dec40b && _d7b934a245ce.addEventListener("blocked", _35dc78c6b3fd => _6c6fe0dec40b(_35dc78c6b3fd.oldVersion, _35dc78c6b3fd.newVersion, _35dc78c6b3fd)), 
        _c2df18134758.then(_35dc78c6b3fd => {
          _6ef14f166da3 && _35dc78c6b3fd.addEventListener("close", () => _6ef14f166da3()), 
          _8be84367f9d6 && _35dc78c6b3fd.addEventListener("versionchange", _35dc78c6b3fd => _8be84367f9d6(_35dc78c6b3fd.oldVersion, _35dc78c6b3fd.newVersion, _35dc78c6b3fd));
        }).catch(() => {}), _c2df18134758;
      }
      let _9281ea692b11 = [ "get", "getKey", "getAll", "getAllKeys", "count" ], _539a9fec78eb = [ "put", "add", "delete", "clear" ], _f78db6fdbb58 = new Map;
      function b(_35dc78c6b3fd, _fe6bed7cb749) {
        if (!(_35dc78c6b3fd instanceof IDBDatabase && !(_fe6bed7cb749 in _35dc78c6b3fd) && "string" == typeof _fe6bed7cb749)) return;
        if (_f78db6fdbb58.get(_fe6bed7cb749)) return _f78db6fdbb58.get(_fe6bed7cb749);
        let _6c6fe0dec40b = _fe6bed7cb749.replace(/FromIndex$/, ""), _678bf849a9d5 = _fe6bed7cb749 !== _6c6fe0dec40b, _8be84367f9d6 = _539a9fec78eb.includes(_6c6fe0dec40b);
        if (!(_6c6fe0dec40b in (_678bf849a9d5 ? IDBIndex : IDBObjectStore).prototype) || !(_8be84367f9d6 || _9281ea692b11.includes(_6c6fe0dec40b))) return;
        let a = async function(_35dc78c6b3fd, ..._fe6bed7cb749) {
          let _6ef14f166da3 = this.transaction(_35dc78c6b3fd, _8be84367f9d6 ? "readwrite" : "readonly"), _d7b934a245ce = _6ef14f166da3.store;
          return _678bf849a9d5 && (_d7b934a245ce = _d7b934a245ce.index(_fe6bed7cb749.shift())), 
          (await Promise.all([ _d7b934a245ce[_6c6fe0dec40b](..._fe6bed7cb749), _8be84367f9d6 && _6ef14f166da3.done ]))[0];
        };
        return _f78db6fdbb58.set(_fe6bed7cb749, a), a;
      }
      _eef48ff38eca = {
        ..._6ef14f166da3 = _eef48ff38eca,
        get: (_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) => b(_35dc78c6b3fd, _fe6bed7cb749) || _6ef14f166da3.get(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b),
        has: (_35dc78c6b3fd, _fe6bed7cb749) => !!b(_35dc78c6b3fd, _fe6bed7cb749) || _6ef14f166da3.has(_35dc78c6b3fd, _fe6bed7cb749)
      };
      let _4f8d3fc53b00 = [ "continue", "continuePrimaryKey", "advance" ], _22bd8222854e = {}, _5e75ad780ef0 = new WeakMap, _9ac47b884040 = new WeakMap, _2bcfbbdee91d = {
        get(_35dc78c6b3fd, _fe6bed7cb749) {
          if (!_4f8d3fc53b00.includes(_fe6bed7cb749)) return _35dc78c6b3fd[_fe6bed7cb749];
          let _6c6fe0dec40b = _22bd8222854e[_fe6bed7cb749];
          return _6c6fe0dec40b || (_6c6fe0dec40b = _22bd8222854e[_fe6bed7cb749] = function(..._35dc78c6b3fd) {
            _5e75ad780ef0.set(this, _9ac47b884040.get(this)[_fe6bed7cb749](..._35dc78c6b3fd));
          }), _6c6fe0dec40b;
        }
      };
      async function* T(..._35dc78c6b3fd) {
        let _fe6bed7cb749 = this;
        if (_fe6bed7cb749 instanceof IDBCursor || (_fe6bed7cb749 = await _fe6bed7cb749.openCursor(..._35dc78c6b3fd)), 
        !_fe6bed7cb749) return;
        let _6c6fe0dec40b = new Proxy(_fe6bed7cb749, _2bcfbbdee91d);
        for (_9ac47b884040.set(_6c6fe0dec40b, _fe6bed7cb749), _713844858620.set(_6c6fe0dec40b, p(_fe6bed7cb749)); _fe6bed7cb749; ) yield _6c6fe0dec40b, 
        _fe6bed7cb749 = await (_5e75ad780ef0.get(_6c6fe0dec40b) || _fe6bed7cb749.continue()), 
        _5e75ad780ef0.delete(_6c6fe0dec40b);
      }
      function k(_35dc78c6b3fd, _fe6bed7cb749) {
        return _fe6bed7cb749 === Symbol.asyncIterator && o(_35dc78c6b3fd, [ IDBIndex, IDBObjectStore, IDBCursor ]) || "iterate" === _fe6bed7cb749 && o(_35dc78c6b3fd, [ IDBIndex, IDBObjectStore ]);
      }
      _eef48ff38eca = {
        ..._d7b934a245ce = _eef48ff38eca,
        get: (_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) => k(_35dc78c6b3fd, _fe6bed7cb749) ? T : _d7b934a245ce.get(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b),
        has: (_35dc78c6b3fd, _fe6bed7cb749) => k(_35dc78c6b3fd, _fe6bed7cb749) || _d7b934a245ce.has(_35dc78c6b3fd, _fe6bed7cb749)
      };
    },
    1652: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      _6c6fe0dec40b.d(_fe6bed7cb749, {
        N: () => n
      });
      function n() {
        return "10000000000".replace(/[018]/g, _35dc78c6b3fd => (_35dc78c6b3fd ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> _35dc78c6b3fd / 4).toString(16));
      }
    },
    3907: function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
      let _678bf849a9d5;
      _6c6fe0dec40b.d(_fe6bed7cb749, {
        LW: () => b,
        QR: () => x
      });
      var _8be84367f9d6 = _6c6fe0dec40b(1652);
      function a(_35dc78c6b3fd, _fe6bed7cb749) {
        try {
          return _35dc78c6b3fd.apply(this, _fe6bed7cb749);
        } catch (_35dc78c6b3fd) {
          let _fe6bed7cb749, _6c6fe0dec40b = (_fe6bed7cb749 = _678bf849a9d5.__externref_table_alloc(), 
          _678bf849a9d5.__wbindgen_export_2.set(_fe6bed7cb749, _35dc78c6b3fd), _fe6bed7cb749);
          _678bf849a9d5.__wbindgen_exn_store(_6c6fe0dec40b);
        }
      }
      let _6ef14f166da3 = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
      }) : {
        decode: () => {
          throw Error("TextDecoder not available");
        }
      };
      "undefined" != typeof TextDecoder && _6ef14f166da3.decode();
      let _d7b934a245ce = null;
      function l() {
        return (null === _d7b934a245ce || 0 === _d7b934a245ce.byteLength) && (_d7b934a245ce = new Uint8Array(_678bf849a9d5.memory.buffer)), 
        _d7b934a245ce;
      }
      function c(_35dc78c6b3fd, _fe6bed7cb749) {
        return _35dc78c6b3fd >>>= 0, _6ef14f166da3.decode(l().subarray(_35dc78c6b3fd, _35dc78c6b3fd + _fe6bed7cb749));
      }
      let _c2df18134758 = 0, _50e0514e3a09 = "undefined" != typeof TextEncoder ? new TextEncoder("utf-8") : {
        encode: () => {
          throw Error("TextEncoder not available");
        }
      }, _713844858620 = "function" == typeof _50e0514e3a09.encodeInto ? function(_35dc78c6b3fd, _fe6bed7cb749) {
        return _50e0514e3a09.encodeInto(_35dc78c6b3fd, _fe6bed7cb749);
      } : function(_35dc78c6b3fd, _fe6bed7cb749) {
        let _6c6fe0dec40b = _50e0514e3a09.encode(_35dc78c6b3fd);
        return _fe6bed7cb749.set(_6c6fe0dec40b), {
          read: _35dc78c6b3fd.length,
          written: _6c6fe0dec40b.length
        };
      };
      function p(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
        if (void 0 === _6c6fe0dec40b) {
          let _6c6fe0dec40b = _50e0514e3a09.encode(_35dc78c6b3fd), _678bf849a9d5 = _fe6bed7cb749(_6c6fe0dec40b.length, 1) >>> 0;
          return l().subarray(_678bf849a9d5, _678bf849a9d5 + _6c6fe0dec40b.length).set(_6c6fe0dec40b), 
          _c2df18134758 = _6c6fe0dec40b.length, _678bf849a9d5;
        }
        let _678bf849a9d5 = _35dc78c6b3fd.length, _8be84367f9d6 = _fe6bed7cb749(_678bf849a9d5, 1) >>> 0, _6ef14f166da3 = l(), _d7b934a245ce = 0;
        for (;_d7b934a245ce < _678bf849a9d5; _d7b934a245ce++) {
          let _fe6bed7cb749 = _35dc78c6b3fd.charCodeAt(_d7b934a245ce);
          if (_fe6bed7cb749 > 127) break;
          _6ef14f166da3[_8be84367f9d6 + _d7b934a245ce] = _fe6bed7cb749;
        }
        if (_d7b934a245ce !== _678bf849a9d5) {
          0 !== _d7b934a245ce && (_35dc78c6b3fd = _35dc78c6b3fd.slice(_d7b934a245ce)), _8be84367f9d6 = _6c6fe0dec40b(_8be84367f9d6, _678bf849a9d5, _678bf849a9d5 = _d7b934a245ce + 3 * _35dc78c6b3fd.length, 1) >>> 0;
          let _fe6bed7cb749 = _713844858620(_35dc78c6b3fd, l().subarray(_8be84367f9d6 + _d7b934a245ce, _8be84367f9d6 + _678bf849a9d5));
          _d7b934a245ce += _fe6bed7cb749.written, _8be84367f9d6 = _6c6fe0dec40b(_8be84367f9d6, _678bf849a9d5, _d7b934a245ce, 1) >>> 0;
        }
        return _c2df18134758 = _d7b934a245ce, _8be84367f9d6;
      }
      let _eef48ff38eca = null;
      function g() {
        return (null === _eef48ff38eca || !0 === _eef48ff38eca.buffer.detached || void 0 === _eef48ff38eca.buffer.detached && _eef48ff38eca.buffer !== _678bf849a9d5.memory.buffer) && (_eef48ff38eca = new DataView(_678bf849a9d5.memory.buffer)), 
        _eef48ff38eca;
      }
      function m(_35dc78c6b3fd) {
        let _fe6bed7cb749 = _678bf849a9d5.__wbindgen_export_2.get(_35dc78c6b3fd);
        return _678bf849a9d5.__externref_table_dealloc(_35dc78c6b3fd), _fe6bed7cb749;
      }
      let _9281ea692b11 = "undefined" == typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry(_35dc78c6b3fd => _678bf849a9d5.__wbg_rewriter_free(_35dc78c6b3fd >>> 0, 1));
      class b {
        __destroy_into_raw() {
          let _35dc78c6b3fd = this.__wbg_ptr;
          return this.__wbg_ptr = 0, _9281ea692b11.unregister(this), _35dc78c6b3fd;
        }
        free() {
          let _35dc78c6b3fd = this.__destroy_into_raw();
          _678bf849a9d5.__wbg_rewriter_free(_35dc78c6b3fd, 0);
        }
        rewrite_js(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b, _8be84367f9d6) {
          let _6ef14f166da3 = p(_35dc78c6b3fd, _678bf849a9d5.__wbindgen_malloc, _678bf849a9d5.__wbindgen_realloc), _d7b934a245ce = _c2df18134758, _50e0514e3a09 = p(_fe6bed7cb749, _678bf849a9d5.__wbindgen_malloc, _678bf849a9d5.__wbindgen_realloc), _713844858620 = _c2df18134758, _eef48ff38eca = p(_6c6fe0dec40b, _678bf849a9d5.__wbindgen_malloc, _678bf849a9d5.__wbindgen_realloc), _9281ea692b11 = _c2df18134758, _539a9fec78eb = _678bf849a9d5.rewriter_rewrite_js(this.__wbg_ptr, _6ef14f166da3, _d7b934a245ce, _50e0514e3a09, _713844858620, _eef48ff38eca, _9281ea692b11, _8be84367f9d6);
          if (_539a9fec78eb[2]) throw m(_539a9fec78eb[1]);
          return m(_539a9fec78eb[0]);
        }
        rewrite_js_bytes(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b, _8be84367f9d6) {
          let _6ef14f166da3, _d7b934a245ce = (_6ef14f166da3 = (0, _678bf849a9d5.__wbindgen_malloc)(+_35dc78c6b3fd.length, 1) >>> 0, 
          l().set(_35dc78c6b3fd, _6ef14f166da3 / 1), _c2df18134758 = _35dc78c6b3fd.length, 
          _6ef14f166da3), _50e0514e3a09 = _c2df18134758, _713844858620 = p(_fe6bed7cb749, _678bf849a9d5.__wbindgen_malloc, _678bf849a9d5.__wbindgen_realloc), _eef48ff38eca = _c2df18134758, _9281ea692b11 = p(_6c6fe0dec40b, _678bf849a9d5.__wbindgen_malloc, _678bf849a9d5.__wbindgen_realloc), _539a9fec78eb = _c2df18134758, _f78db6fdbb58 = _678bf849a9d5.rewriter_rewrite_js_bytes(this.__wbg_ptr, _d7b934a245ce, _50e0514e3a09, _713844858620, _eef48ff38eca, _9281ea692b11, _539a9fec78eb, _8be84367f9d6);
          if (_f78db6fdbb58[2]) throw m(_f78db6fdbb58[1]);
          return m(_f78db6fdbb58[0]);
        }
        constructor(_35dc78c6b3fd) {
          const _fe6bed7cb749 = _678bf849a9d5.rewriter_new(_35dc78c6b3fd);
          if (_fe6bed7cb749[2]) throw m(_fe6bed7cb749[1]);
          return this.__wbg_ptr = _fe6bed7cb749[0] >>> 0, _9281ea692b11.register(this, this.__wbg_ptr, this), 
          this;
        }
      }
      async function w(_35dc78c6b3fd, _fe6bed7cb749) {
        if ("function" == typeof Response && _35dc78c6b3fd instanceof Response) {
          if ("function" == typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(_35dc78c6b3fd, _fe6bed7cb749);
          } catch (_fe6bed7cb749) {
            if ("application/wasm" != _35dc78c6b3fd.headers.get("Content-Type")) console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", _fe6bed7cb749); else throw _fe6bed7cb749;
          }
          let _6c6fe0dec40b = await _35dc78c6b3fd.arrayBuffer();
          return await WebAssembly.instantiate(_6c6fe0dec40b, _fe6bed7cb749);
        }
        {
          let _6c6fe0dec40b = await WebAssembly.instantiate(_35dc78c6b3fd, _fe6bed7cb749);
          return _6c6fe0dec40b instanceof WebAssembly.Instance ? {
            instance: _6c6fe0dec40b,
            module: _35dc78c6b3fd
          } : _6c6fe0dec40b;
        }
      }
      function S() {
        let _35dc78c6b3fd = {};
        return _35dc78c6b3fd.wbg = {}, _35dc78c6b3fd.wbg.__wbg_buffer_609cc3eee51ed158 = function(_35dc78c6b3fd) {
          return _35dc78c6b3fd.buffer;
        }, _35dc78c6b3fd.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
          return a(function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
            return _35dc78c6b3fd.call(_fe6bed7cb749, _6c6fe0dec40b);
          }, arguments);
        }, _35dc78c6b3fd.wbg.__wbg_call_833bed5770ea2041 = function() {
          return a(function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b, _678bf849a9d5) {
            return _35dc78c6b3fd.call(_fe6bed7cb749, _6c6fe0dec40b, _678bf849a9d5);
          }, arguments);
        }, _35dc78c6b3fd.wbg.__wbg_get_67b2ba62fc30de12 = function() {
          return a(function(_35dc78c6b3fd, _fe6bed7cb749) {
            return Reflect.get(_35dc78c6b3fd, _fe6bed7cb749);
          }, arguments);
        }, _35dc78c6b3fd.wbg.__wbg_new_405e22f390576ce2 = function() {
          return {};
        }, _35dc78c6b3fd.wbg.__wbg_new_78feb108b6472713 = function() {
          return [];
        }, _35dc78c6b3fd.wbg.__wbg_new_9ffbe0a71eff35e3 = function() {
          return a(function(_35dc78c6b3fd, _fe6bed7cb749) {
            return new URL(c(_35dc78c6b3fd, _fe6bed7cb749));
          }, arguments);
        }, _35dc78c6b3fd.wbg.__wbg_new_a12002a7f91c75be = function(_35dc78c6b3fd) {
          return new Uint8Array(_35dc78c6b3fd);
        }, _35dc78c6b3fd.wbg.__wbg_newwithbase_161c299e7a34e2eb = function() {
          return a(function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b, _678bf849a9d5) {
            return new URL(c(_35dc78c6b3fd, _fe6bed7cb749), c(_6c6fe0dec40b, _678bf849a9d5));
          }, arguments);
        }, _35dc78c6b3fd.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
          return new Uint8Array(_35dc78c6b3fd, _fe6bed7cb749 >>> 0, _6c6fe0dec40b >>> 0);
        }, _35dc78c6b3fd.wbg.__wbg_scramtag_3a255d78b157986d = function(_35dc78c6b3fd) {
          let _fe6bed7cb749 = p((0, _8be84367f9d6.N)(), _678bf849a9d5.__wbindgen_malloc, _678bf849a9d5.__wbindgen_realloc), _6c6fe0dec40b = _c2df18134758;
          g().setInt32(_35dc78c6b3fd + 4, _6c6fe0dec40b, !0), g().setInt32(_35dc78c6b3fd + 0, _fe6bed7cb749, !0);
        }, _35dc78c6b3fd.wbg.__wbg_set_bb8cecf6a62b9f46 = function() {
          return a(function(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b) {
            return Reflect.set(_35dc78c6b3fd, _fe6bed7cb749, _6c6fe0dec40b);
          }, arguments);
        }, _35dc78c6b3fd.wbg.__wbg_toString_5285597960676b7b = function(_35dc78c6b3fd) {
          return _35dc78c6b3fd.toString();
        }, _35dc78c6b3fd.wbg.__wbg_toString_c813bbd34d063839 = function(_35dc78c6b3fd) {
          return _35dc78c6b3fd.toString();
        }, _35dc78c6b3fd.wbg.__wbindgen_boolean_get = function(_35dc78c6b3fd) {
          return "boolean" == typeof _35dc78c6b3fd ? +!!_35dc78c6b3fd : 2;
        }, _35dc78c6b3fd.wbg.__wbindgen_error_new = function(_35dc78c6b3fd, _fe6bed7cb749) {
          return Error(c(_35dc78c6b3fd, _fe6bed7cb749));
        }, _35dc78c6b3fd.wbg.__wbindgen_init_externref_table = function() {
          let _35dc78c6b3fd = _678bf849a9d5.__wbindgen_export_2, _fe6bed7cb749 = _35dc78c6b3fd.grow(4);
          _35dc78c6b3fd.set(0, void 0), _35dc78c6b3fd.set(_fe6bed7cb749 + 0, void 0), _35dc78c6b3fd.set(_fe6bed7cb749 + 1, null), 
          _35dc78c6b3fd.set(_fe6bed7cb749 + 2, !0), _35dc78c6b3fd.set(_fe6bed7cb749 + 3, !1);
        }, _35dc78c6b3fd.wbg.__wbindgen_is_function = function(_35dc78c6b3fd) {
          return "function" == typeof _35dc78c6b3fd;
        }, _35dc78c6b3fd.wbg.__wbindgen_memory = function() {
          return _678bf849a9d5.memory;
        }, _35dc78c6b3fd.wbg.__wbindgen_string_get = function(_35dc78c6b3fd, _fe6bed7cb749) {
          let _6c6fe0dec40b = "string" == typeof _fe6bed7cb749 ? _fe6bed7cb749 : void 0;
          var _8be84367f9d6 = null == _6c6fe0dec40b ? 0 : p(_6c6fe0dec40b, _678bf849a9d5.__wbindgen_malloc, _678bf849a9d5.__wbindgen_realloc), _6ef14f166da3 = _c2df18134758;
          g().setInt32(_35dc78c6b3fd + 4, _6ef14f166da3, !0), g().setInt32(_35dc78c6b3fd + 0, _8be84367f9d6, !0);
        }, _35dc78c6b3fd.wbg.__wbindgen_string_new = function(_35dc78c6b3fd, _fe6bed7cb749) {
          return c(_35dc78c6b3fd, _fe6bed7cb749);
        }, _35dc78c6b3fd.wbg.__wbindgen_throw = function(_35dc78c6b3fd, _fe6bed7cb749) {
          throw Error(c(_35dc78c6b3fd, _fe6bed7cb749));
        }, _35dc78c6b3fd;
      }
      function v(_35dc78c6b3fd, _fe6bed7cb749) {
        return _678bf849a9d5 = _35dc78c6b3fd.exports, E.__wbindgen_wasm_module = _fe6bed7cb749, 
        _eef48ff38eca = null, _d7b934a245ce = null, _678bf849a9d5.__wbindgen_start(), _678bf849a9d5;
      }
      function x(_35dc78c6b3fd) {
        if (void 0 !== _678bf849a9d5) return _678bf849a9d5;
        void 0 !== _35dc78c6b3fd && (Object.getPrototypeOf(_35dc78c6b3fd) === Object.prototype ? ({module: _35dc78c6b3fd} = _35dc78c6b3fd) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
        let _fe6bed7cb749 = S();
        return _35dc78c6b3fd instanceof WebAssembly.Module || (_35dc78c6b3fd = new WebAssembly.Module(_35dc78c6b3fd)), 
        v(new WebAssembly.Instance(_35dc78c6b3fd, _fe6bed7cb749), _35dc78c6b3fd);
      }
      async function E(_35dc78c6b3fd) {
        if (void 0 !== _678bf849a9d5) return _678bf849a9d5;
        void 0 !== _35dc78c6b3fd && (Object.getPrototypeOf(_35dc78c6b3fd) === Object.prototype ? ({module_or_path: _35dc78c6b3fd} = _35dc78c6b3fd) : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), 
        void 0 === _35dc78c6b3fd && (_35dc78c6b3fd = new URL("wasm_bg.wasm", ""));
        let _fe6bed7cb749 = S();
        ("string" == typeof _35dc78c6b3fd || "function" == typeof Request && _35dc78c6b3fd instanceof Request || "function" == typeof URL && _35dc78c6b3fd instanceof URL) && (_35dc78c6b3fd = fetch(_35dc78c6b3fd));
        let {instance: _6c6fe0dec40b, module: _8be84367f9d6} = await w(await _35dc78c6b3fd, _fe6bed7cb749);
        return v(_6c6fe0dec40b, _8be84367f9d6);
      }
    }
  }, _fe6bed7cb749 = {};
  function r(_6c6fe0dec40b) {
    var _678bf849a9d5 = _fe6bed7cb749[_6c6fe0dec40b];
    if (void 0 !== _678bf849a9d5) return _678bf849a9d5.exports;
    var _8be84367f9d6 = _fe6bed7cb749[_6c6fe0dec40b] = {
      exports: {}
    };
    return _35dc78c6b3fd[_6c6fe0dec40b](_8be84367f9d6, _8be84367f9d6.exports, r), _8be84367f9d6.exports;
  }
  r.n = _35dc78c6b3fd => {
    var _fe6bed7cb749 = _35dc78c6b3fd && _35dc78c6b3fd.__esModule ? () => _35dc78c6b3fd.default : () => _35dc78c6b3fd;
    return r.d(_fe6bed7cb749, {
      a: _fe6bed7cb749
    }), _fe6bed7cb749;
  }, r.d = (_35dc78c6b3fd, _fe6bed7cb749) => {
    for (var _6c6fe0dec40b in _fe6bed7cb749) r.o(_fe6bed7cb749, _6c6fe0dec40b) && !r.o(_35dc78c6b3fd, _6c6fe0dec40b) && Object.defineProperty(_35dc78c6b3fd, _6c6fe0dec40b, {
      enumerable: !0,
      get: _fe6bed7cb749[_6c6fe0dec40b]
    });
  }, r.o = (_35dc78c6b3fd, _fe6bed7cb749) => Object.prototype.hasOwnProperty.call(_35dc78c6b3fd, _fe6bed7cb749), 
  r.r = _35dc78c6b3fd => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(_35dc78c6b3fd, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(_35dc78c6b3fd, "__esModule", {
      value: !0
    });
  }, globalThis.$studyjetRequire = function(_35dc78c6b3fd) {
    return r(409)(_35dc78c6b3fd);
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
