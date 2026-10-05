"use strict";

(() => {
  var _96d03707f76f = Object.create;
  var _345b86d023ff = Object.defineProperty;
  var _7c28484a67f2 = Object.getOwnPropertyDescriptor;
  var _5966ca9ce684 = Object.getOwnPropertyNames;
  var _ef50f6afc0ab = Object.getPrototypeOf, _a3bae248626a = Object.prototype.hasOwnProperty;
  var et = (_96d03707f76f, _345b86d023ff) => () => (_345b86d023ff || _96d03707f76f((_345b86d023ff = {
    exports: {}
  }).exports, _345b86d023ff), _345b86d023ff.exports);
  var tt = (_96d03707f76f, _ef50f6afc0ab, _30e8a5324ce3, _625544c1eedc) => {
    if (_ef50f6afc0ab && typeof _ef50f6afc0ab == "object" || typeof _ef50f6afc0ab == "function") for (let _53f768076ffa of _5966ca9ce684(_ef50f6afc0ab)) !_a3bae248626a.call(_96d03707f76f, _53f768076ffa) && _53f768076ffa !== _30e8a5324ce3 && _345b86d023ff(_96d03707f76f, _53f768076ffa, {
      get: () => _ef50f6afc0ab[_53f768076ffa],
      enumerable: !(_625544c1eedc = _7c28484a67f2(_ef50f6afc0ab, _53f768076ffa)) || _625544c1eedc.enumerable
    });
    return _96d03707f76f;
  };
  var m = (_7c28484a67f2, _5966ca9ce684, _a3bae248626a) => (_a3bae248626a = _7c28484a67f2 != null ? _96d03707f76f(_ef50f6afc0ab(_7c28484a67f2)) : {}, 
  tt(_5966ca9ce684 || !_7c28484a67f2 || !_7c28484a67f2.__esModule ? _345b86d023ff(_a3bae248626a, "default", {
    value: _7c28484a67f2,
    enumerable: !0
  }) : _a3bae248626a, _7c28484a67f2));
  var _30e8a5324ce3 = et((_96d03707f76f, _345b86d023ff) => {
    "use strict";
    var _7c28484a67f2 = typeof Reflect == "object" ? Reflect : null, _5966ca9ce684 = _7c28484a67f2 && typeof _7c28484a67f2.apply == "function" ? _7c28484a67f2.apply : function(_96d03707f76f, _345b86d023ff, _7c28484a67f2) {
      return Function.prototype.apply.call(_96d03707f76f, _345b86d023ff, _7c28484a67f2);
    }, _ef50f6afc0ab;
    _7c28484a67f2 && typeof _7c28484a67f2.ownKeys == "function" ? _ef50f6afc0ab = _7c28484a67f2.ownKeys : Object.getOwnPropertySymbols ? _ef50f6afc0ab = function(_96d03707f76f) {
      return Object.getOwnPropertyNames(_96d03707f76f).concat(Object.getOwnPropertySymbols(_96d03707f76f));
    } : _ef50f6afc0ab = function(_96d03707f76f) {
      return Object.getOwnPropertyNames(_96d03707f76f);
    };
    function rt(_96d03707f76f) {
      console && console.warn && console.warn(_96d03707f76f);
    }
    var _a3bae248626a = Number.isNaN || function(_96d03707f76f) {
      return _96d03707f76f !== _96d03707f76f;
    };
    function d() {
      d.init.call(this);
    }
    _345b86d023ff.exports = d;
    _345b86d023ff.exports.once = st;
    d.EventEmitter = d;
    d.prototype._events = void 0;
    d.prototype._eventsCount = 0;
    d.prototype._maxListeners = void 0;
    var _30e8a5324ce3 = 10;
    function P(_96d03707f76f) {
      if (typeof _96d03707f76f != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof _96d03707f76f);
    }
    Object.defineProperty(d, "defaultMaxListeners", {
      enumerable: !0,
      get: function() {
        return _30e8a5324ce3;
      },
      set: function(_96d03707f76f) {
        if (typeof _96d03707f76f != "number" || _96d03707f76f < 0 || _a3bae248626a(_96d03707f76f)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + _96d03707f76f + ".");
        _30e8a5324ce3 = _96d03707f76f;
      }
    });
    d.init = function() {
      (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), 
      this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
    };
    d.prototype.setMaxListeners = function(_96d03707f76f) {
      if (typeof _96d03707f76f != "number" || _96d03707f76f < 0 || _a3bae248626a(_96d03707f76f)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + _96d03707f76f + ".");
      return this._maxListeners = _96d03707f76f, this;
    };
    function J(_96d03707f76f) {
      return _96d03707f76f._maxListeners === void 0 ? d.defaultMaxListeners : _96d03707f76f._maxListeners;
    }
    d.prototype.getMaxListeners = function() {
      return J(this);
    };
    d.prototype.emit = function(_96d03707f76f) {
      for (var _345b86d023ff = [], _7c28484a67f2 = 1; _7c28484a67f2 < arguments.length; _7c28484a67f2++) _345b86d023ff.push(arguments[_7c28484a67f2]);
      var _ef50f6afc0ab = _96d03707f76f === "error", _a3bae248626a = this._events;
      if (_a3bae248626a !== void 0) _ef50f6afc0ab = _ef50f6afc0ab && _a3bae248626a.error === void 0; else if (!_ef50f6afc0ab) return !1;
      if (_ef50f6afc0ab) {
        var _30e8a5324ce3;
        if (_345b86d023ff.length > 0 && (_30e8a5324ce3 = _345b86d023ff[0]), _30e8a5324ce3 instanceof Error) throw _30e8a5324ce3;
        var _625544c1eedc = new Error("Unhandled error." + (_30e8a5324ce3 ? " (" + _30e8a5324ce3.message + ")" : ""));
        throw _625544c1eedc.context = _30e8a5324ce3, _625544c1eedc;
      }
      var _53f768076ffa = _a3bae248626a[_96d03707f76f];
      if (_53f768076ffa === void 0) return !1;
      if (typeof _53f768076ffa == "function") _5966ca9ce684(_53f768076ffa, this, _345b86d023ff); else for (var _f5dd47651578 = _53f768076ffa.length, _437c48db3267 = re(_53f768076ffa, _f5dd47651578), _7c28484a67f2 = 0; _7c28484a67f2 < _f5dd47651578; ++_7c28484a67f2) _5966ca9ce684(_437c48db3267[_7c28484a67f2], this, _345b86d023ff);
      return !0;
    };
    function Y(_96d03707f76f, _345b86d023ff, _7c28484a67f2, _5966ca9ce684) {
      var _ef50f6afc0ab, _a3bae248626a, _30e8a5324ce3;
      if (P(_7c28484a67f2), _a3bae248626a = _96d03707f76f._events, _a3bae248626a === void 0 ? (_a3bae248626a = _96d03707f76f._events = Object.create(null), 
      _96d03707f76f._eventsCount = 0) : (_a3bae248626a.newListener !== void 0 && (_96d03707f76f.emit("newListener", _345b86d023ff, _7c28484a67f2.listener ? _7c28484a67f2.listener : _7c28484a67f2), 
      _a3bae248626a = _96d03707f76f._events), _30e8a5324ce3 = _a3bae248626a[_345b86d023ff]), 
      _30e8a5324ce3 === void 0) _30e8a5324ce3 = _a3bae248626a[_345b86d023ff] = _7c28484a67f2, 
      ++_96d03707f76f._eventsCount; else if (typeof _30e8a5324ce3 == "function" ? _30e8a5324ce3 = _a3bae248626a[_345b86d023ff] = _5966ca9ce684 ? [ _7c28484a67f2, _30e8a5324ce3 ] : [ _30e8a5324ce3, _7c28484a67f2 ] : _5966ca9ce684 ? _30e8a5324ce3.unshift(_7c28484a67f2) : _30e8a5324ce3.push(_7c28484a67f2), 
      _ef50f6afc0ab = J(_96d03707f76f), _ef50f6afc0ab > 0 && _30e8a5324ce3.length > _ef50f6afc0ab && !_30e8a5324ce3.warned) {
        _30e8a5324ce3.warned = !0;
        var _625544c1eedc = new Error("Possible EventEmitter memory leak detected. " + _30e8a5324ce3.length + " " + String(_345b86d023ff) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        _625544c1eedc.name = "MaxListenersExceededWarning", _625544c1eedc.emitter = _96d03707f76f, 
        _625544c1eedc.type = _345b86d023ff, _625544c1eedc.count = _30e8a5324ce3.length, 
        rt(_625544c1eedc);
      }
      return _96d03707f76f;
    }
    d.prototype.addListener = function(_96d03707f76f, _345b86d023ff) {
      return Y(this, _96d03707f76f, _345b86d023ff, !1);
    };
    d.prototype.on = d.prototype.addListener;
    d.prototype.prependListener = function(_96d03707f76f, _345b86d023ff) {
      return Y(this, _96d03707f76f, _345b86d023ff, !0);
    };
    function ot() {
      if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 
      arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
    }
    function Z(_96d03707f76f, _345b86d023ff, _7c28484a67f2) {
      var _5966ca9ce684 = {
        fired: !1,
        wrapFn: void 0,
        target: _96d03707f76f,
        type: _345b86d023ff,
        listener: _7c28484a67f2
      }, _ef50f6afc0ab = ot.bind(_5966ca9ce684);
      return _ef50f6afc0ab.listener = _7c28484a67f2, _5966ca9ce684.wrapFn = _ef50f6afc0ab, 
      _ef50f6afc0ab;
    }
    d.prototype.once = function(_96d03707f76f, _345b86d023ff) {
      return P(_345b86d023ff), this.on(_96d03707f76f, Z(this, _96d03707f76f, _345b86d023ff)), 
      this;
    };
    d.prototype.prependOnceListener = function(_96d03707f76f, _345b86d023ff) {
      return P(_345b86d023ff), this.prependListener(_96d03707f76f, Z(this, _96d03707f76f, _345b86d023ff)), 
      this;
    };
    d.prototype.removeListener = function(_96d03707f76f, _345b86d023ff) {
      var _7c28484a67f2, _5966ca9ce684, _ef50f6afc0ab, _a3bae248626a, _30e8a5324ce3;
      if (P(_345b86d023ff), _5966ca9ce684 = this._events, _5966ca9ce684 === void 0) return this;
      if (_7c28484a67f2 = _5966ca9ce684[_96d03707f76f], _7c28484a67f2 === void 0) return this;
      if (_7c28484a67f2 === _345b86d023ff || _7c28484a67f2.listener === _345b86d023ff) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete _5966ca9ce684[_96d03707f76f], 
      _5966ca9ce684.removeListener && this.emit("removeListener", _96d03707f76f, _7c28484a67f2.listener || _345b86d023ff)); else if (typeof _7c28484a67f2 != "function") {
        for (_ef50f6afc0ab = -1, _a3bae248626a = _7c28484a67f2.length - 1; _a3bae248626a >= 0; _a3bae248626a--) if (_7c28484a67f2[_a3bae248626a] === _345b86d023ff || _7c28484a67f2[_a3bae248626a].listener === _345b86d023ff) {
          _30e8a5324ce3 = _7c28484a67f2[_a3bae248626a].listener, _ef50f6afc0ab = _a3bae248626a;
          break;
        }
        if (_ef50f6afc0ab < 0) return this;
        _ef50f6afc0ab === 0 ? _7c28484a67f2.shift() : nt(_7c28484a67f2, _ef50f6afc0ab), 
        _7c28484a67f2.length === 1 && (_5966ca9ce684[_96d03707f76f] = _7c28484a67f2[0]), 
        _5966ca9ce684.removeListener !== void 0 && this.emit("removeListener", _96d03707f76f, _30e8a5324ce3 || _345b86d023ff);
      }
      return this;
    };
    d.prototype.off = d.prototype.removeListener;
    d.prototype.removeAllListeners = function(_96d03707f76f) {
      var _345b86d023ff, _7c28484a67f2, _5966ca9ce684;
      if (_7c28484a67f2 = this._events, _7c28484a67f2 === void 0) return this;
      if (_7c28484a67f2.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), 
      this._eventsCount = 0) : _7c28484a67f2[_96d03707f76f] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete _7c28484a67f2[_96d03707f76f]), 
      this;
      if (arguments.length === 0) {
        var _ef50f6afc0ab = Object.keys(_7c28484a67f2), _a3bae248626a;
        for (_5966ca9ce684 = 0; _5966ca9ce684 < _ef50f6afc0ab.length; ++_5966ca9ce684) _a3bae248626a = _ef50f6afc0ab[_5966ca9ce684], 
        _a3bae248626a !== "removeListener" && this.removeAllListeners(_a3bae248626a);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), 
        this._eventsCount = 0, this;
      }
      if (_345b86d023ff = _7c28484a67f2[_96d03707f76f], typeof _345b86d023ff == "function") this.removeListener(_96d03707f76f, _345b86d023ff); else if (_345b86d023ff !== void 0) for (_5966ca9ce684 = _345b86d023ff.length - 1; _5966ca9ce684 >= 0; _5966ca9ce684--) this.removeListener(_96d03707f76f, _345b86d023ff[_5966ca9ce684]);
      return this;
    };
    function ee(_96d03707f76f, _345b86d023ff, _7c28484a67f2) {
      var _5966ca9ce684 = _96d03707f76f._events;
      if (_5966ca9ce684 === void 0) return [];
      var _ef50f6afc0ab = _5966ca9ce684[_345b86d023ff];
      return _ef50f6afc0ab === void 0 ? [] : typeof _ef50f6afc0ab == "function" ? _7c28484a67f2 ? [ _ef50f6afc0ab.listener || _ef50f6afc0ab ] : [ _ef50f6afc0ab ] : _7c28484a67f2 ? it(_ef50f6afc0ab) : re(_ef50f6afc0ab, _ef50f6afc0ab.length);
    }
    d.prototype.listeners = function(_96d03707f76f) {
      return ee(this, _96d03707f76f, !0);
    };
    d.prototype.rawListeners = function(_96d03707f76f) {
      return ee(this, _96d03707f76f, !1);
    };
    d.listenerCount = function(_96d03707f76f, _345b86d023ff) {
      return typeof _96d03707f76f.listenerCount == "function" ? _96d03707f76f.listenerCount(_345b86d023ff) : te.call(_96d03707f76f, _345b86d023ff);
    };
    d.prototype.listenerCount = te;
    function te(_96d03707f76f) {
      var _345b86d023ff = this._events;
      if (_345b86d023ff !== void 0) {
        var _7c28484a67f2 = _345b86d023ff[_96d03707f76f];
        if (typeof _7c28484a67f2 == "function") return 1;
        if (_7c28484a67f2 !== void 0) return _7c28484a67f2.length;
      }
      return 0;
    }
    d.prototype.eventNames = function() {
      return this._eventsCount > 0 ? _ef50f6afc0ab(this._events) : [];
    };
    function re(_96d03707f76f, _345b86d023ff) {
      for (var _7c28484a67f2 = new Array(_345b86d023ff), _5966ca9ce684 = 0; _5966ca9ce684 < _345b86d023ff; ++_5966ca9ce684) _7c28484a67f2[_5966ca9ce684] = _96d03707f76f[_5966ca9ce684];
      return _7c28484a67f2;
    }
    function nt(_96d03707f76f, _345b86d023ff) {
      for (;_345b86d023ff + 1 < _96d03707f76f.length; _345b86d023ff++) _96d03707f76f[_345b86d023ff] = _96d03707f76f[_345b86d023ff + 1];
      _96d03707f76f.pop();
    }
    function it(_96d03707f76f) {
      for (var _345b86d023ff = new Array(_96d03707f76f.length), _7c28484a67f2 = 0; _7c28484a67f2 < _345b86d023ff.length; ++_7c28484a67f2) _345b86d023ff[_7c28484a67f2] = _96d03707f76f[_7c28484a67f2].listener || _96d03707f76f[_7c28484a67f2];
      return _345b86d023ff;
    }
    function st(_96d03707f76f, _345b86d023ff) {
      return new Promise(function(_7c28484a67f2, _5966ca9ce684) {
        function n(_7c28484a67f2) {
          _96d03707f76f.removeListener(_345b86d023ff, o), _5966ca9ce684(_7c28484a67f2);
        }
        function o() {
          typeof _96d03707f76f.removeListener == "function" && _96d03707f76f.removeListener("error", n), 
          _7c28484a67f2([].slice.call(arguments));
        }
        oe(_96d03707f76f, _345b86d023ff, o, {
          once: !0
        }), _345b86d023ff !== "error" && at(_96d03707f76f, n, {
          once: !0
        });
      });
    }
    function at(_96d03707f76f, _345b86d023ff, _7c28484a67f2) {
      typeof _96d03707f76f.on == "function" && oe(_96d03707f76f, "error", _345b86d023ff, _7c28484a67f2);
    }
    function oe(_96d03707f76f, _345b86d023ff, _7c28484a67f2, _5966ca9ce684) {
      if (typeof _96d03707f76f.on == "function") _5966ca9ce684.once ? _96d03707f76f.once(_345b86d023ff, _7c28484a67f2) : _96d03707f76f.on(_345b86d023ff, _7c28484a67f2); else if (typeof _96d03707f76f.addEventListener == "function") _96d03707f76f.addEventListener(_345b86d023ff, function n(_ef50f6afc0ab) {
        _5966ca9ce684.once && _96d03707f76f.removeEventListener(_345b86d023ff, n), _7c28484a67f2(_ef50f6afc0ab);
      }); else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof _96d03707f76f);
    }
  });
  var _625544c1eedc = m(_30e8a5324ce3(), 1);
  var _53f768076ffa = class {
    #_96d03707f76f;
    #_345b86d023ff;
    constructor(_96d03707f76f = {}, _345b86d023ff = null, _7c28484a67f2 = null) {
      this.#_96d03707f76f = !1, this.#_345b86d023ff = null, this.data = _96d03707f76f, 
      this.target = _345b86d023ff, this.that = _7c28484a67f2;
    }
    get intercepted() {
      return this.#_96d03707f76f;
    }
    get returnValue() {
      return this.#_345b86d023ff;
    }
    respondWith(_96d03707f76f) {
      this.#_345b86d023ff = _96d03707f76f, this.#_96d03707f76f = !0;
    }
  }, _f5dd47651578 = _53f768076ffa;
  var _437c48db3267 = class extends _625544c1eedc.default {
    constructor(_96d03707f76f) {
      super(), this.ctx = _96d03707f76f, this.window = _96d03707f76f.window, this.document = this.window.document, 
      this.Document = this.window.Document || {}, this.DOMParser = this.window.DOMParser || {}, 
      this.docProto = this.Document.prototype || {}, this.domProto = this.DOMParser.prototype || {}, 
      this.title = _96d03707f76f.nativeMethods.getOwnPropertyDescriptor(this.docProto, "title"), 
      this.cookie = _96d03707f76f.nativeMethods.getOwnPropertyDescriptor(this.docProto, "cookie"), 
      this.referrer = _96d03707f76f.nativeMethods.getOwnPropertyDescriptor(this.docProto, "referrer"), 
      this.domain = _96d03707f76f.nativeMethods.getOwnPropertyDescriptor(this.docProto, "domain"), 
      this.documentURI = _96d03707f76f.nativeMethods.getOwnPropertyDescriptor(this.docProto, "documentURI"), 
      this.write = this.docProto.write, this.writeln = this.docProto.writeln, this.querySelector = this.docProto.querySelector, 
      this.querySelectorAll = this.docProto.querySelectorAll, this.parseFromString = this.domProto.parseFromString, 
      this.URL = _96d03707f76f.nativeMethods.getOwnPropertyDescriptor(this.docProto, "URL");
    }
    overrideParseFromString() {
      this.ctx.override(this.domProto, "parseFromString", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (2 > _7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684, _ef50f6afc0ab] = _7c28484a67f2, _a3bae248626a = new _f5dd47651578({
          string: _5966ca9ce684,
          type: _ef50f6afc0ab
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("parseFromString", _a3bae248626a), _a3bae248626a.intercepted ? _a3bae248626a.returnValue : _a3bae248626a.target.call(_a3bae248626a.that, _a3bae248626a.data.string, _a3bae248626a.data.type);
      });
    }
    overrideQuerySelector() {
      this.ctx.override(this.docProto, "querySelector", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (!_7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684] = _7c28484a67f2, _ef50f6afc0ab = new _f5dd47651578({
          selectors: _5966ca9ce684
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("querySelector", _ef50f6afc0ab), _ef50f6afc0ab.intercepted ? _ef50f6afc0ab.returnValue : _ef50f6afc0ab.target.call(_ef50f6afc0ab.that, _ef50f6afc0ab.data.selectors);
      });
    }
    overrideDomain() {
      this.ctx.overrideDescriptor(this.docProto, "domain", {
        get: (_96d03707f76f, _345b86d023ff) => {
          let _7c28484a67f2 = new _f5dd47651578({
            value: _96d03707f76f.call(_345b86d023ff)
          }, _96d03707f76f, _345b86d023ff);
          return this.emit("getDomain", _7c28484a67f2), _7c28484a67f2.intercepted ? _7c28484a67f2.returnValue : _7c28484a67f2.data.value;
        },
        set: (_96d03707f76f, _345b86d023ff, [_7c28484a67f2]) => {
          let _5966ca9ce684 = new _f5dd47651578({
            value: _7c28484a67f2
          }, _96d03707f76f, _345b86d023ff);
          return this.emit("setDomain", _5966ca9ce684), _5966ca9ce684.intercepted ? _5966ca9ce684.returnValue : _5966ca9ce684.target.call(_5966ca9ce684.that, _5966ca9ce684.data.value);
        }
      });
    }
    overrideReferrer() {
      this.ctx.overrideDescriptor(this.docProto, "referrer", {
        get: (_96d03707f76f, _345b86d023ff) => {
          let _7c28484a67f2 = new _f5dd47651578({
            value: _96d03707f76f.call(_345b86d023ff)
          }, _96d03707f76f, _345b86d023ff);
          return this.emit("referrer", _7c28484a67f2), _7c28484a67f2.intercepted ? _7c28484a67f2.returnValue : _7c28484a67f2.data.value;
        }
      });
    }
    overrideCreateTreeWalker() {
      this.ctx.override(this.docProto, "createTreeWalker", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (!_7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684, _ef50f6afc0ab = 4294967295, _a3bae248626a, _30e8a5324ce3] = _7c28484a67f2, _625544c1eedc = new _f5dd47651578({
          root: _5966ca9ce684,
          show: _ef50f6afc0ab,
          filter: _a3bae248626a,
          expandEntityReferences: _30e8a5324ce3
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("createTreeWalker", _625544c1eedc), _625544c1eedc.intercepted ? _625544c1eedc.returnValue : _625544c1eedc.target.call(_625544c1eedc.that, _625544c1eedc.data.root, _625544c1eedc.data.show, _625544c1eedc.data.filter, _625544c1eedc.data.expandEntityReferences);
      });
    }
    overrideWrite() {
      this.ctx.override(this.docProto, "write", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (!_7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [..._5966ca9ce684] = _7c28484a67f2, _ef50f6afc0ab = new _f5dd47651578({
          html: _5966ca9ce684
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("write", _ef50f6afc0ab), _ef50f6afc0ab.intercepted ? _ef50f6afc0ab.returnValue : _ef50f6afc0ab.target.apply(_ef50f6afc0ab.that, _ef50f6afc0ab.data.html);
      }), this.ctx.override(this.docProto, "writeln", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (!_7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [..._5966ca9ce684] = _7c28484a67f2, _ef50f6afc0ab = new _f5dd47651578({
          html: _5966ca9ce684
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("writeln", _ef50f6afc0ab), _ef50f6afc0ab.intercepted ? _ef50f6afc0ab.returnValue : _ef50f6afc0ab.target.apply(_ef50f6afc0ab.that, _ef50f6afc0ab.data.html);
      });
    }
    overrideDocumentURI() {
      this.ctx.overrideDescriptor(this.docProto, "documentURI", {
        get: (_96d03707f76f, _345b86d023ff) => {
          let _7c28484a67f2 = new _f5dd47651578({
            value: _96d03707f76f.call(_345b86d023ff)
          }, _96d03707f76f, _345b86d023ff);
          return this.emit("documentURI", _7c28484a67f2), _7c28484a67f2.intercepted ? _7c28484a67f2.returnValue : _7c28484a67f2.data.value;
        }
      });
    }
    overrideURL() {
      this.ctx.overrideDescriptor(this.docProto, "URL", {
        get: (_96d03707f76f, _345b86d023ff) => {
          let _7c28484a67f2 = new _f5dd47651578({
            value: _96d03707f76f.call(_345b86d023ff)
          }, _96d03707f76f, _345b86d023ff);
          return this.emit("url", _7c28484a67f2), _7c28484a67f2.intercepted ? _7c28484a67f2.returnValue : _7c28484a67f2.data.value;
        }
      });
    }
    overrideCookie() {
      this.ctx.overrideDescriptor(this.docProto, "cookie", {
        get: (_96d03707f76f, _345b86d023ff) => {
          let _7c28484a67f2 = new _f5dd47651578({
            value: _96d03707f76f.call(_345b86d023ff)
          }, _96d03707f76f, _345b86d023ff);
          return this.emit("getCookie", _7c28484a67f2), _7c28484a67f2.intercepted ? _7c28484a67f2.returnValue : _7c28484a67f2.data.value;
        },
        set: (_96d03707f76f, _345b86d023ff, [_7c28484a67f2]) => {
          let _5966ca9ce684 = new _f5dd47651578({
            value: _7c28484a67f2
          }, _96d03707f76f, _345b86d023ff);
          return this.emit("setCookie", _5966ca9ce684), _5966ca9ce684.intercepted ? _5966ca9ce684.returnValue : _5966ca9ce684.target.call(_5966ca9ce684.that, _5966ca9ce684.data.value);
        }
      });
    }
    overrideTitle() {
      this.ctx.overrideDescriptor(this.docProto, "title", {
        get: (_96d03707f76f, _345b86d023ff) => {
          let _7c28484a67f2 = new _f5dd47651578({
            value: _96d03707f76f.call(_345b86d023ff)
          }, _96d03707f76f, _345b86d023ff);
          return this.emit("getTitle", _7c28484a67f2), _7c28484a67f2.intercepted ? _7c28484a67f2.returnValue : _7c28484a67f2.data.value;
        },
        set: (_96d03707f76f, _345b86d023ff, [_7c28484a67f2]) => {
          let _5966ca9ce684 = new _f5dd47651578({
            value: _7c28484a67f2
          }, _96d03707f76f, _345b86d023ff);
          return this.emit("setTitle", _5966ca9ce684), _5966ca9ce684.intercepted ? _5966ca9ce684.returnValue : _5966ca9ce684.target.call(_5966ca9ce684.that, _5966ca9ce684.data.value);
        }
      });
    }
  }, _605dd1c030d1 = _437c48db3267;
  var _58fe9d62b764 = m(_30e8a5324ce3(), 1);
  var _d4ce3c57fe03 = class extends _58fe9d62b764.default {
    constructor(_96d03707f76f) {
      super(), this.ctx = _96d03707f76f, this.window = _96d03707f76f.window, this.Audio = this.window.Audio, 
      this.Element = this.window.Element, this.elemProto = this.Element ? this.Element.prototype : {}, 
      this.innerHTML = _96d03707f76f.nativeMethods.getOwnPropertyDescriptor(this.elemProto, "innerHTML"), 
      this.outerHTML = _96d03707f76f.nativeMethods.getOwnPropertyDescriptor(this.elemProto, "outerHTML"), 
      this.setAttribute = this.elemProto.setAttribute, this.getAttribute = this.elemProto.getAttribute, 
      this.removeAttribute = this.elemProto.removeAttribute, this.hasAttribute = this.elemProto.hasAttribute, 
      this.querySelector = this.elemProto.querySelector, this.querySelectorAll = this.elemProto.querySelectorAll, 
      this.insertAdjacentHTML = this.elemProto.insertAdjacentHTML, this.insertAdjacentText = this.elemProto.insertAdjacentText;
    }
    overrideQuerySelector() {
      this.ctx.override(this.elemProto, "querySelector", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (!_7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684] = _7c28484a67f2, _ef50f6afc0ab = new _f5dd47651578({
          selectors: _5966ca9ce684
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("querySelector", _ef50f6afc0ab), _ef50f6afc0ab.intercepted ? _ef50f6afc0ab.returnValue : _ef50f6afc0ab.target.call(_ef50f6afc0ab.that, _ef50f6afc0ab.data.selectors);
      });
    }
    overrideAttribute() {
      this.ctx.override(this.elemProto, "getAttribute", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (!_7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684] = _7c28484a67f2, _ef50f6afc0ab = new _f5dd47651578({
          name: _5966ca9ce684
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("getAttribute", _ef50f6afc0ab), _ef50f6afc0ab.intercepted ? _ef50f6afc0ab.returnValue : _ef50f6afc0ab.target.call(_ef50f6afc0ab.that, _ef50f6afc0ab.data.name);
      }), this.ctx.override(this.elemProto, "setAttribute", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (2 > _7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684, _ef50f6afc0ab] = _7c28484a67f2, _a3bae248626a = new _f5dd47651578({
          name: _5966ca9ce684,
          value: _ef50f6afc0ab
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("setAttribute", _a3bae248626a), _a3bae248626a.intercepted ? _a3bae248626a.returnValue : _a3bae248626a.target.call(_a3bae248626a.that, _a3bae248626a.data.name, _a3bae248626a.data.value);
      }), this.ctx.override(this.elemProto, "hasAttribute", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (!_7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684] = _7c28484a67f2, _ef50f6afc0ab = new _f5dd47651578({
          name: _5966ca9ce684
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("hasAttribute", _ef50f6afc0ab), _ef50f6afc0ab.intercepted ? _ef50f6afc0ab.returnValue : _ef50f6afc0ab.target.call(_ef50f6afc0ab.that, _ef50f6afc0ab.data.name);
      }), this.ctx.override(this.elemProto, "removeAttribute", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (!_7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684] = _7c28484a67f2, _ef50f6afc0ab = new _f5dd47651578({
          name: _5966ca9ce684
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("removeAttribute", _ef50f6afc0ab), _ef50f6afc0ab.intercepted ? _ef50f6afc0ab.returnValue : _ef50f6afc0ab.target.call(_ef50f6afc0ab.that, _ef50f6afc0ab.data.name);
      });
    }
    overrideAudio() {
      this.ctx.override(this.window, "Audio", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (!_7c28484a67f2.length) return new _96d03707f76f(..._7c28484a67f2);
        let [_5966ca9ce684] = _7c28484a67f2, _ef50f6afc0ab = new _f5dd47651578({
          url: _5966ca9ce684
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("audio", _ef50f6afc0ab), _ef50f6afc0ab.intercepted ? _ef50f6afc0ab.returnValue : new _ef50f6afc0ab.target(_ef50f6afc0ab.data.url);
      }, !0);
    }
    overrideHtml() {
      this.hookProperty(this.Element, "innerHTML", {
        get: (_96d03707f76f, _345b86d023ff) => {
          let _7c28484a67f2 = new _f5dd47651578({
            value: _96d03707f76f.call(_345b86d023ff)
          }, _96d03707f76f, _345b86d023ff);
          return this.emit("getInnerHTML", _7c28484a67f2), _7c28484a67f2.intercepted ? _7c28484a67f2.returnValue : _7c28484a67f2.data.value;
        },
        set: (_96d03707f76f, _345b86d023ff, [_7c28484a67f2]) => {
          let _5966ca9ce684 = new _f5dd47651578({
            value: _7c28484a67f2
          }, _96d03707f76f, _345b86d023ff);
          if (this.emit("setInnerHTML", _5966ca9ce684), _5966ca9ce684.intercepted) return _5966ca9ce684.returnValue;
          _96d03707f76f.call(_345b86d023ff, _5966ca9ce684.data.value);
        }
      }), this.hookProperty(this.Element, "outerHTML", {
        get: (_96d03707f76f, _345b86d023ff) => {
          let _7c28484a67f2 = new _f5dd47651578({
            value: _96d03707f76f.call(_345b86d023ff)
          }, _96d03707f76f, _345b86d023ff);
          return this.emit("getOuterHTML", _7c28484a67f2), _7c28484a67f2.intercepted ? _7c28484a67f2.returnValue : _7c28484a67f2.data.value;
        },
        set: (_96d03707f76f, _345b86d023ff, [_7c28484a67f2]) => {
          let _5966ca9ce684 = new _f5dd47651578({
            value: _7c28484a67f2
          }, _96d03707f76f, _345b86d023ff);
          if (this.emit("setOuterHTML", _5966ca9ce684), _5966ca9ce684.intercepted) return _5966ca9ce684.returnValue;
          _96d03707f76f.call(_345b86d023ff, _5966ca9ce684.data.value);
        }
      });
    }
    overrideInsertAdjacentHTML() {
      this.ctx.override(this.elemProto, "insertAdjacentHTML", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (2 > _7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684, _ef50f6afc0ab] = _7c28484a67f2, _a3bae248626a = new _f5dd47651578({
          position: _5966ca9ce684,
          html: _ef50f6afc0ab
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("insertAdjacentHTML", _a3bae248626a), _a3bae248626a.intercepted ? _a3bae248626a.returnValue : _a3bae248626a.target.call(_a3bae248626a.that, _a3bae248626a.data.position, _a3bae248626a.data.html);
      });
    }
    overrideInsertAdjacentText() {
      this.ctx.override(this.elemProto, "insertAdjacentText", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (2 > _7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684, _ef50f6afc0ab] = _7c28484a67f2, _a3bae248626a = new _f5dd47651578({
          position: _5966ca9ce684,
          text: _ef50f6afc0ab
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("insertAdjacentText", _a3bae248626a), _a3bae248626a.intercepted ? _a3bae248626a.returnValue : _a3bae248626a.target.call(_a3bae248626a.that, _a3bae248626a.data.position, _a3bae248626a.data.text);
      });
    }
    hookProperty(_96d03707f76f, _345b86d023ff, _7c28484a67f2) {
      if (!_96d03707f76f) return !1;
      if (this.ctx.nativeMethods.isArray(_96d03707f76f)) {
        for (let _5966ca9ce684 of _96d03707f76f) this.hookProperty(_5966ca9ce684, _345b86d023ff, _7c28484a67f2);
        return !0;
      }
      let _5966ca9ce684 = _96d03707f76f.prototype;
      return this.ctx.overrideDescriptor(_5966ca9ce684, _345b86d023ff, _7c28484a67f2), 
      !0;
    }
  }, _8ca2f7053b4c = _d4ce3c57fe03;
  var _d4d8538fc8d2 = m(_30e8a5324ce3(), 1);
  var _41474dabe3e8 = class extends _d4d8538fc8d2.default {
    constructor(_96d03707f76f) {
      super(), this.ctx = _96d03707f76f, this.window = _96d03707f76f.window, this.Node = _96d03707f76f.window.Node || {}, 
      this.nodeProto = this.Node.prototype || {}, this.compareDocumentPosition = this.nodeProto.compareDocumentPosition, 
      this.contains = this.nodeProto.contains, this.insertBefore = this.nodeProto.insertBefore, 
      this.replaceChild = this.nodeProto.replaceChild, this.append = this.nodeProto.append, 
      this.appendChild = this.nodeProto.appendChild, this.removeChild = this.nodeProto.removeChild, 
      this.textContent = _96d03707f76f.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "textContent"), 
      this.parentNode = _96d03707f76f.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "parentNode"), 
      this.parentElement = _96d03707f76f.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "parentElement"), 
      this.childNodes = _96d03707f76f.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "childNodes"), 
      this.baseURI = _96d03707f76f.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "baseURI"), 
      this.previousSibling = _96d03707f76f.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "previousSibling"), 
      this.ownerDocument = _96d03707f76f.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "ownerDocument");
    }
    overrideTextContent() {
      this.ctx.overrideDescriptor(this.nodeProto, "textContent", {
        get: (_96d03707f76f, _345b86d023ff) => {
          let _7c28484a67f2 = new _f5dd47651578({
            value: _96d03707f76f.call(_345b86d023ff)
          }, _96d03707f76f, _345b86d023ff);
          return this.emit("getTextContent", _7c28484a67f2), _7c28484a67f2.intercepted ? _7c28484a67f2.returnValue : _7c28484a67f2.data.value;
        },
        set: (_96d03707f76f, _345b86d023ff, [_7c28484a67f2]) => {
          let _5966ca9ce684 = new _f5dd47651578({
            value: _7c28484a67f2
          }, _96d03707f76f, _345b86d023ff);
          if (this.emit("setTextContent", _5966ca9ce684), _5966ca9ce684.intercepted) return _5966ca9ce684.returnValue;
          _96d03707f76f.call(_345b86d023ff, _5966ca9ce684.data.value);
        }
      });
    }
    overrideAppend() {
      this.ctx.override(this.nodeProto, "append", (_96d03707f76f, _345b86d023ff, [..._7c28484a67f2]) => {
        let _5966ca9ce684 = new _f5dd47651578({
          nodes: _7c28484a67f2
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("append", _5966ca9ce684), _5966ca9ce684.intercepted ? _5966ca9ce684.returnValue : _5966ca9ce684.target.call(_5966ca9ce684.that, _5966ca9ce684.data.nodes);
      }), this.ctx.override(this.nodeProto, "appendChild", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (!_7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684] = _7c28484a67f2, _ef50f6afc0ab = new _f5dd47651578({
          node: _5966ca9ce684
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("appendChild", _ef50f6afc0ab), _ef50f6afc0ab.intercepted ? _ef50f6afc0ab.returnValue : _ef50f6afc0ab.target.call(_ef50f6afc0ab.that, _ef50f6afc0ab.data.node);
      });
    }
    overrideBaseURI() {
      this.ctx.overrideDescriptor(this.nodeProto, "baseURI", {
        get: (_96d03707f76f, _345b86d023ff) => {
          let _7c28484a67f2 = new _f5dd47651578({
            value: _96d03707f76f.call(_345b86d023ff)
          }, _96d03707f76f, _345b86d023ff);
          return this.emit("baseURI", _7c28484a67f2), _7c28484a67f2.intercepted ? _7c28484a67f2.returnValue : _7c28484a67f2.data.value;
        }
      });
    }
    overrideParent() {
      this.ctx.overrideDescriptor(this.nodeProto, "parentNode", {
        get: (_96d03707f76f, _345b86d023ff) => {
          let _7c28484a67f2 = new _f5dd47651578({
            node: _96d03707f76f.call(_345b86d023ff)
          }, _96d03707f76f, _345b86d023ff);
          return this.emit("parentNode", _7c28484a67f2), _7c28484a67f2.intercepted ? _7c28484a67f2.returnValue : _7c28484a67f2.data.node;
        }
      }), this.ctx.overrideDescriptor(this.nodeProto, "parentElement", {
        get: (_96d03707f76f, _345b86d023ff) => {
          let _7c28484a67f2 = new _f5dd47651578({
            element: _96d03707f76f.call(_345b86d023ff)
          }, _96d03707f76f, _345b86d023ff);
          return this.emit("parentElement", _7c28484a67f2), _7c28484a67f2.intercepted ? _7c28484a67f2.returnValue : _7c28484a67f2.data.node;
        }
      });
    }
    overrideOwnerDocument() {
      this.ctx.overrideDescriptor(this.nodeProto, "ownerDocument", {
        get: (_96d03707f76f, _345b86d023ff) => {
          let _7c28484a67f2 = new _f5dd47651578({
            document: _96d03707f76f.call(_345b86d023ff)
          }, _96d03707f76f, _345b86d023ff);
          return this.emit("ownerDocument", _7c28484a67f2), _7c28484a67f2.intercepted ? _7c28484a67f2.returnValue : _7c28484a67f2.data.document;
        }
      });
    }
    overrideCompareDocumentPosit1ion() {
      this.ctx.override(this.nodeProto, "compareDocumentPosition", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (!_7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684] = _7c28484a67f2, _ef50f6afc0ab = new _f5dd47651578({
          node: _5966ca9ce684
        }, _96d03707f76f, _345b86d023ff);
        return _ef50f6afc0ab.intercepted ? _ef50f6afc0ab.returnValue : _ef50f6afc0ab.target.call(_ef50f6afc0ab.that, _ef50f6afc0ab.data.node);
      });
    }
    overrideChildMethods() {
      this.ctx.override(this.nodeProto, "removeChild");
    }
  }, _ab25262386f4 = _41474dabe3e8;
  var _5dfb20adb026 = m(_30e8a5324ce3(), 1);
  var _761d9e239632 = class extends _5dfb20adb026.default {
    constructor(_96d03707f76f) {
      super(), this.ctx = _96d03707f76f, this.window = _96d03707f76f.window, this.Attr = this.window.Attr || {}, 
      this.attrProto = this.Attr.prototype || {}, this.value = _96d03707f76f.nativeMethods.getOwnPropertyDescriptor(this.attrProto, "value"), 
      this.name = _96d03707f76f.nativeMethods.getOwnPropertyDescriptor(this.attrProto, "name"), 
      this.getNamedItem = this.attrProto.getNamedItem || null, this.setNamedItem = this.attrProto.setNamedItem || null, 
      this.removeNamedItem = this.attrProto.removeNamedItem || null, this.getNamedItemNS = this.attrProto.getNamedItemNS || null, 
      this.setNamedItemNS = this.attrProto.setNamedItemNS || null, this.removeNamedItemNS = this.attrProto.removeNamedItemNS || null, 
      this.item = this.attrProto.item || null;
    }
    overrideNameValue() {
      this.ctx.overrideDescriptor(this.attrProto, "name", {
        get: (_96d03707f76f, _345b86d023ff) => {
          let _7c28484a67f2 = new _f5dd47651578({
            value: _96d03707f76f.call(_345b86d023ff)
          }, _96d03707f76f, _345b86d023ff);
          return this.emit("name", _7c28484a67f2), _7c28484a67f2.intercepted ? _7c28484a67f2.returnValue : _7c28484a67f2.data.value;
        }
      }), this.ctx.overrideDescriptor(this.attrProto, "value", {
        get: (_96d03707f76f, _345b86d023ff) => {
          let _7c28484a67f2 = new _f5dd47651578({
            name: this.name.get.call(_345b86d023ff),
            value: _96d03707f76f.call(_345b86d023ff)
          }, _96d03707f76f, _345b86d023ff);
          return this.emit("getValue", _7c28484a67f2), _7c28484a67f2.intercepted ? _7c28484a67f2.returnValue : _7c28484a67f2.data.value;
        },
        set: (_96d03707f76f, _345b86d023ff, [_7c28484a67f2]) => {
          let _5966ca9ce684 = new _f5dd47651578({
            name: this.name.get.call(_345b86d023ff),
            value: _7c28484a67f2
          }, _96d03707f76f, _345b86d023ff);
          if (this.emit("setValue", _5966ca9ce684), _5966ca9ce684.intercepted) return _5966ca9ce684.returnValue;
          _5966ca9ce684.target.call(_5966ca9ce684.that, _5966ca9ce684.data.value);
        }
      });
    }
    overrideItemMethods() {
      this.ctx.override(this.attrProto, "getNamedItem", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (!_7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684] = _7c28484a67f2, _ef50f6afc0ab = new _f5dd47651578({
          name: _5966ca9ce684
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("getNamedItem", _ef50f6afc0ab), _ef50f6afc0ab.intercepted ? _ef50f6afc0ab.returnValue : _ef50f6afc0ab.target.call(_ef50f6afc0ab.that, _ef50f6afc0ab.data.name);
      }), this.ctx.override(this.attrProto, "setNamedItem", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (2 > _7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684, _ef50f6afc0ab] = _7c28484a67f2, _a3bae248626a = new _f5dd47651578({
          name: _5966ca9ce684,
          value: _ef50f6afc0ab
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("setNamedItem", _a3bae248626a), _a3bae248626a.intercepted ? _a3bae248626a.returnValue : _a3bae248626a.target.call(_a3bae248626a.that, _a3bae248626a.data.name, _a3bae248626a.data.value);
      }), this.ctx.override(this.attrProto, "removeNamedItem", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (!_7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684] = _7c28484a67f2, _ef50f6afc0ab = new _f5dd47651578({
          name: _5966ca9ce684
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("removeNamedItem", _ef50f6afc0ab), _ef50f6afc0ab.intercepted ? _ef50f6afc0ab.returnValue : _ef50f6afc0ab.target.call(_ef50f6afc0ab.that, _ef50f6afc0ab.data.name);
      }), this.ctx.override(this.attrProto, "item", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (!_7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684] = _7c28484a67f2, _ef50f6afc0ab = new _f5dd47651578({
          index: _5966ca9ce684
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("item", _ef50f6afc0ab), _ef50f6afc0ab.intercepted ? _ef50f6afc0ab.returnValue : _ef50f6afc0ab.target.call(_ef50f6afc0ab.that, _ef50f6afc0ab.data.name);
      }), this.ctx.override(this.attrProto, "getNamedItemNS", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (2 > _7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684, _ef50f6afc0ab] = _7c28484a67f2, _a3bae248626a = new _f5dd47651578({
          namespace: _5966ca9ce684,
          localName: _ef50f6afc0ab
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("getNamedItemNS", _a3bae248626a), _a3bae248626a.intercepted ? _a3bae248626a.returnValue : _a3bae248626a.target.call(_a3bae248626a.that, _a3bae248626a.data.namespace, _a3bae248626a.data.localName);
      }), this.ctx.override(this.attrProto, "setNamedItemNS", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (!_7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684] = _7c28484a67f2, _ef50f6afc0ab = new _f5dd47651578({
          attr: _5966ca9ce684
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("setNamedItemNS", _ef50f6afc0ab), _ef50f6afc0ab.intercepted ? _ef50f6afc0ab.returnValue : _ef50f6afc0ab.target.call(_ef50f6afc0ab.that, _ef50f6afc0ab.data.name);
      }), this.ctx.override(this.attrProto, "removeNamedItemNS", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (2 > _7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684, _ef50f6afc0ab] = _7c28484a67f2, _a3bae248626a = new _f5dd47651578({
          namespace: _5966ca9ce684,
          localName: _ef50f6afc0ab
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("removeNamedItemNS", _a3bae248626a), _a3bae248626a.intercepted ? _a3bae248626a.returnValue : _a3bae248626a.target.call(_a3bae248626a.that, _a3bae248626a.data.namespace, _a3bae248626a.data.localName);
      });
    }
  }, _54e76bafef57 = _761d9e239632;
  var _7c9d6d758a90 = m(_30e8a5324ce3(), 1);
  var _e16f4814b5cf = class extends _7c9d6d758a90.default {
    constructor(_96d03707f76f) {
      super(), this.ctx = _96d03707f76f, this.window = _96d03707f76f.window, this.Function = this.window.Function, 
      this.fnProto = this.Function.prototype, this.toString = this.fnProto.toString, this.fnStrings = _96d03707f76f.fnStrings, 
      this.call = this.fnProto.call, this.apply = this.fnProto.apply, this.bind = this.fnProto.bind;
    }
    overrideFunction() {
      this.ctx.override(this.window, "Function", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (!_7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let _5966ca9ce684 = _7c28484a67f2[_7c28484a67f2.length - 1], _ef50f6afc0ab = [];
        for (let _96d03707f76f = 0; _96d03707f76f < _7c28484a67f2.length - 1; _96d03707f76f++) _ef50f6afc0ab.push(_7c28484a67f2[_96d03707f76f]);
        let _a3bae248626a = new _f5dd47651578({
          script: _5966ca9ce684,
          args: _ef50f6afc0ab
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("function", _a3bae248626a), _a3bae248626a.intercepted ? _a3bae248626a.returnValue : _a3bae248626a.target.call(_a3bae248626a.that, ..._a3bae248626a.data.args, _a3bae248626a.data.script);
      }, !0);
    }
    overrideToString() {
      this.ctx.override(this.fnProto, "toString", (_96d03707f76f, _345b86d023ff) => {
        let _7c28484a67f2 = new _f5dd47651578({
          fn: _345b86d023ff
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("toString", _7c28484a67f2), _7c28484a67f2.intercepted ? _7c28484a67f2.returnValue : _7c28484a67f2.target.call(_7c28484a67f2.data.fn);
      });
    }
  }, _85455cfc576a = _e16f4814b5cf;
  var _28bace1b0e88 = m(_30e8a5324ce3(), 1);
  var _128944513e7d = class extends _28bace1b0e88.default {
    constructor(_96d03707f76f) {
      super(), this.ctx = _96d03707f76f, this.window = _96d03707f76f.window, this.Object = this.window.Object, 
      this.getOwnPropertyDescriptors = this.Object.getOwnPropertyDescriptors, this.getOwnPropertyDescriptor = this.Object.getOwnPropertyDescriptor, 
      this.getOwnPropertyNames = this.Object.getOwnPropertyNames;
    }
    overrideGetPropertyNames() {
      this.ctx.override(this.Object, "getOwnPropertyNames", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (!_7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684] = _7c28484a67f2, _ef50f6afc0ab = new _f5dd47651578({
          names: _96d03707f76f.call(_345b86d023ff, _5966ca9ce684)
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("getOwnPropertyNames", _ef50f6afc0ab), _ef50f6afc0ab.intercepted ? _ef50f6afc0ab.returnValue : _ef50f6afc0ab.data.names;
      });
    }
    overrideGetOwnPropertyDescriptors() {
      this.ctx.override(this.Object, "getOwnPropertyDescriptors", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (!_7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684] = _7c28484a67f2, _ef50f6afc0ab = new _f5dd47651578({
          descriptors: _96d03707f76f.call(_345b86d023ff, _5966ca9ce684)
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("getOwnPropertyDescriptors", _ef50f6afc0ab), _ef50f6afc0ab.intercepted ? _ef50f6afc0ab.returnValue : _ef50f6afc0ab.data.descriptors;
      });
    }
  }, _2a4f540dd508 = _128944513e7d;
  var _160c84e79c36 = m(_30e8a5324ce3(), 1);
  var _83eeeba3bcc2 = class extends _160c84e79c36.default {
    constructor(_96d03707f76f) {
      super(), this.ctx = _96d03707f76f, this.window = _96d03707f76f.window, this.fetch = this.window.fetch, 
      this.Request = this.window.Request, this.Response = this.window.Response, this.Headers = this.window.Headers, 
      this.reqProto = this.Request ? this.Request.prototype : {}, this.resProto = this.Response ? this.Response.prototype : {}, 
      this.headersProto = this.Headers ? this.Headers.prototype : {}, this.reqUrl = _96d03707f76f.nativeMethods.getOwnPropertyDescriptor(this.reqProto, "url"), 
      this.resUrl = _96d03707f76f.nativeMethods.getOwnPropertyDescriptor(this.resProto, "url"), 
      this.reqHeaders = _96d03707f76f.nativeMethods.getOwnPropertyDescriptor(this.reqProto, "headers"), 
      this.resHeaders = _96d03707f76f.nativeMethods.getOwnPropertyDescriptor(this.resProto, "headers");
    }
    override() {
      return this.overrideRequest(), this.overrideUrl(), this.overrideHeaders(), !0;
    }
    overrideRequest() {
      return this.fetch ? (this.ctx.override(this.window, "fetch", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (!_7c28484a67f2.length || _7c28484a67f2[0] instanceof this.Request) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684, _ef50f6afc0ab = {}] = _7c28484a67f2, _a3bae248626a = new _f5dd47651578({
          input: _5966ca9ce684,
          options: _ef50f6afc0ab
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("request", _a3bae248626a), _a3bae248626a.intercepted ? _a3bae248626a.returnValue : _a3bae248626a.target.call(_a3bae248626a.that, _a3bae248626a.data.input, _a3bae248626a.data.options);
      }), this.ctx.override(this.window, "Request", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (!_7c28484a67f2.length) return new _96d03707f76f(..._7c28484a67f2);
        let [_5966ca9ce684, _ef50f6afc0ab = {}] = _7c28484a67f2, _a3bae248626a = new _f5dd47651578({
          input: _5966ca9ce684,
          options: _ef50f6afc0ab
        }, _96d03707f76f);
        return this.emit("request", _a3bae248626a), _a3bae248626a.intercepted ? _a3bae248626a.returnValue : new _a3bae248626a.target(_a3bae248626a.data.input, _a3bae248626a.data.options);
      }, !0), !0) : !1;
    }
    overrideUrl() {
      return this.ctx.overrideDescriptor(this.reqProto, "url", {
        get: (_96d03707f76f, _345b86d023ff) => {
          let _7c28484a67f2 = new _f5dd47651578({
            value: _96d03707f76f.call(_345b86d023ff)
          }, _96d03707f76f, _345b86d023ff);
          return this.emit("requestUrl", _7c28484a67f2), _7c28484a67f2.intercepted ? _7c28484a67f2.returnValue : _7c28484a67f2.data.value;
        }
      }), this.ctx.overrideDescriptor(this.resProto, "url", {
        get: (_96d03707f76f, _345b86d023ff) => {
          let _7c28484a67f2 = new _f5dd47651578({
            value: _96d03707f76f.call(_345b86d023ff)
          }, _96d03707f76f, _345b86d023ff);
          return this.emit("responseUrl", _7c28484a67f2), _7c28484a67f2.intercepted ? _7c28484a67f2.returnValue : _7c28484a67f2.data.value;
        }
      }), !0;
    }
    overrideHeaders() {
      return this.Headers ? (this.ctx.overrideDescriptor(this.reqProto, "headers", {
        get: (_96d03707f76f, _345b86d023ff) => {
          let _7c28484a67f2 = new _f5dd47651578({
            value: _96d03707f76f.call(_345b86d023ff)
          }, _96d03707f76f, _345b86d023ff);
          return this.emit("requestHeaders", _7c28484a67f2), _7c28484a67f2.intercepted ? _7c28484a67f2.returnValue : _7c28484a67f2.data.value;
        }
      }), this.ctx.overrideDescriptor(this.resProto, "headers", {
        get: (_96d03707f76f, _345b86d023ff) => {
          let _7c28484a67f2 = new _f5dd47651578({
            value: _96d03707f76f.call(_345b86d023ff)
          }, _96d03707f76f, _345b86d023ff);
          return this.emit("responseHeaders", _7c28484a67f2), _7c28484a67f2.intercepted ? _7c28484a67f2.returnValue : _7c28484a67f2.data.value;
        }
      }), this.ctx.override(this.headersProto, "get", (_96d03707f76f, _345b86d023ff, [_7c28484a67f2]) => {
        if (!_7c28484a67f2) return _96d03707f76f.call(_345b86d023ff);
        let _5966ca9ce684 = new _f5dd47651578({
          name: _7c28484a67f2,
          value: _96d03707f76f.call(_345b86d023ff, _7c28484a67f2)
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("getHeader", _5966ca9ce684), _5966ca9ce684.intercepted ? _5966ca9ce684.returnValue : _5966ca9ce684.data.value;
      }), this.ctx.override(this.headersProto, "set", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (2 > _7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684, _ef50f6afc0ab] = _7c28484a67f2, _a3bae248626a = new _f5dd47651578({
          name: _5966ca9ce684,
          value: _ef50f6afc0ab
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("setHeader", _a3bae248626a), _a3bae248626a.intercepted ? _a3bae248626a.returnValue : _a3bae248626a.target.call(_a3bae248626a.that, _a3bae248626a.data.name, _a3bae248626a.data.value);
      }), this.ctx.override(this.headersProto, "has", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (!_7c28484a67f2.length) return _96d03707f76f.call(_345b86d023ff);
        let [_5966ca9ce684] = _7c28484a67f2, _ef50f6afc0ab = new _f5dd47651578({
          name: _5966ca9ce684,
          value: _96d03707f76f.call(_345b86d023ff, _5966ca9ce684)
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("hasHeader", _ef50f6afc0ab), _ef50f6afc0ab.intercepted ? _ef50f6afc0ab.returnValue : _ef50f6afc0ab.data;
      }), this.ctx.override(this.headersProto, "append", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (2 > _7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684, _ef50f6afc0ab] = _7c28484a67f2, _a3bae248626a = new _f5dd47651578({
          name: _5966ca9ce684,
          value: _ef50f6afc0ab
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("appendHeader", _a3bae248626a), _a3bae248626a.intercepted ? _a3bae248626a.returnValue : _a3bae248626a.target.call(_a3bae248626a.that, _a3bae248626a.data.name, _a3bae248626a.data.value);
      }), this.ctx.override(this.headersProto, "delete", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (!_7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684] = _7c28484a67f2, _ef50f6afc0ab = new _f5dd47651578({
          name: _5966ca9ce684
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("deleteHeader", _ef50f6afc0ab), _ef50f6afc0ab.intercepted ? _ef50f6afc0ab.returnValue : _ef50f6afc0ab.target.call(_ef50f6afc0ab.that, _ef50f6afc0ab.data.name);
      }), !0) : !1;
    }
  }, _0e5778865cf4 = _83eeeba3bcc2;
  var _da53904310f4 = m(_30e8a5324ce3(), 1);
  var _666aa98db9eb = class extends _da53904310f4.default {
    constructor(_96d03707f76f) {
      super(), this.ctx = _96d03707f76f, this.window = _96d03707f76f.window, this.XMLHttpRequest = this.window.XMLHttpRequest, 
      this.xhrProto = this.window.XMLHttpRequest ? this.window.XMLHttpRequest.prototype : {}, 
      this.open = this.xhrProto.open, this.abort = this.xhrProto.abort, this.send = this.xhrProto.send, 
      this.overrideMimeType = this.xhrProto.overrideMimeType, this.getAllResponseHeaders = this.xhrProto.getAllResponseHeaders, 
      this.getResponseHeader = this.xhrProto.getResponseHeader, this.setRequestHeader = this.xhrProto.setRequestHeader, 
      this.responseURL = _96d03707f76f.nativeMethods.getOwnPropertyDescriptor(this.xhrProto, "responseURL"), 
      this.responseText = _96d03707f76f.nativeMethods.getOwnPropertyDescriptor(this.xhrProto, "responseText");
    }
    override() {
      this.overrideOpen(), this.overrideSend(), this.overrideMimeType(), this.overrideGetResHeader(), 
      this.overrideGetResHeaders(), this.overrideSetReqHeader();
    }
    overrideOpen() {
      this.ctx.override(this.xhrProto, "open", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (2 > _7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684, _ef50f6afc0ab, _a3bae248626a = !0, _30e8a5324ce3 = null, _625544c1eedc = null] = _7c28484a67f2, _53f768076ffa = new _f5dd47651578({
          method: _5966ca9ce684,
          input: _ef50f6afc0ab,
          async: _a3bae248626a,
          user: _30e8a5324ce3,
          password: _625544c1eedc
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("open", _53f768076ffa), _53f768076ffa.intercepted ? _53f768076ffa.returnValue : _53f768076ffa.target.call(_53f768076ffa.that, _53f768076ffa.data.method, _53f768076ffa.data.input, _53f768076ffa.data.async, _53f768076ffa.data.user, _53f768076ffa.data.password);
      });
    }
    overrideResponseUrl() {
      this.ctx.overrideDescriptor(this.xhrProto, "responseURL", {
        get: (_96d03707f76f, _345b86d023ff) => {
          let _7c28484a67f2 = new _f5dd47651578({
            value: _96d03707f76f.call(_345b86d023ff)
          }, _96d03707f76f, _345b86d023ff);
          return this.emit("responseUrl", _7c28484a67f2), _7c28484a67f2.intercepted ? _7c28484a67f2.returnValue : _7c28484a67f2.data.value;
        }
      });
    }
    overrideSend() {
      this.ctx.override(this.xhrProto, "send", (_96d03707f76f, _345b86d023ff, [_7c28484a67f2 = null]) => {
        let _5966ca9ce684 = new _f5dd47651578({
          body: _7c28484a67f2
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("send", _5966ca9ce684), _5966ca9ce684.intercepted ? _5966ca9ce684.returnValue : _5966ca9ce684.target.call(_5966ca9ce684.that, _5966ca9ce684.data.body);
      });
    }
    overrideSetReqHeader() {
      this.ctx.override(this.xhrProto, "setRequestHeader", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (2 > _7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684, _ef50f6afc0ab] = _7c28484a67f2, _a3bae248626a = new _f5dd47651578({
          name: _5966ca9ce684,
          value: _ef50f6afc0ab
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("setReqHeader", _a3bae248626a), _a3bae248626a.intercepted ? _a3bae248626a.returnValue : _a3bae248626a.target.call(_a3bae248626a.that, _a3bae248626a.data.name, _a3bae248626a.data.value);
      });
    }
    overrideGetResHeaders() {
      this.ctx.override(this.xhrProto, "getAllResponseHeaders", (_96d03707f76f, _345b86d023ff) => {
        let _7c28484a67f2 = new _f5dd47651578({
          value: _96d03707f76f.call(_345b86d023ff)
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("getAllResponseHeaders", _7c28484a67f2), _7c28484a67f2.intercepted ? _7c28484a67f2.returnValue : _7c28484a67f2.data.value;
      });
    }
    overrideGetResHeader() {
      this.ctx.override(this.xhrProto, "getResponseHeader", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (!_7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684] = _7c28484a67f2, _ef50f6afc0ab = new _f5dd47651578({
          name: _5966ca9ce684,
          value: _96d03707f76f.call(_345b86d023ff, _5966ca9ce684)
        }, _96d03707f76f, _345b86d023ff);
        return _ef50f6afc0ab.intercepted ? _ef50f6afc0ab.returnValue : _ef50f6afc0ab.data.value;
      });
    }
  }, _cb244729f065 = _666aa98db9eb;
  var _c09c600e1530 = m(_30e8a5324ce3(), 1);
  var _4aaa2348ca03 = class extends _c09c600e1530.default {
    constructor(_96d03707f76f) {
      super(), this.ctx = _96d03707f76f, this.window = _96d03707f76f.window, this.EventSource = this.window.EventSource || {}, 
      this.esProto = this.EventSource.prototype || {}, this.url = _96d03707f76f.nativeMethods.getOwnPropertyDescriptor(this.esProto, "url"), 
      this.CONNECTING = 0, this.OPEN = 1, this.CLOSED = 2;
    }
    overrideConstruct() {
      this.ctx.override(this.window, "EventSource", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (!_7c28484a67f2.length) return new _96d03707f76f(..._7c28484a67f2);
        let [_5966ca9ce684, _ef50f6afc0ab = {}] = _7c28484a67f2, _a3bae248626a = new _f5dd47651578({
          url: _5966ca9ce684,
          config: _ef50f6afc0ab
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("construct", _a3bae248626a), _a3bae248626a.intercepted ? _a3bae248626a.returnValue : new _a3bae248626a.target(_a3bae248626a.data.url, _a3bae248626a.data.config);
      }, !0), "EventSource" in this.window && (this.window.EventSource.CONNECTING = this.CONNECTING, 
      this.window.EventSource.OPEN = this.OPEN, this.window.EventSource.CLOSED = this.CLOSED);
    }
    overrideUrl() {
      this.ctx.overrideDescriptor(this.esProto, "url", {
        get: (_96d03707f76f, _345b86d023ff) => {
          let _7c28484a67f2 = new _f5dd47651578({
            value: _96d03707f76f.call(_345b86d023ff)
          }, _96d03707f76f, _345b86d023ff);
          return this.emit("url", _7c28484a67f2), _7c28484a67f2.data.value;
        }
      });
    }
  }, _38eee7c409ff = _4aaa2348ca03;
  var _1f8bd1a0e035 = m(_30e8a5324ce3(), 1);
  var _a6e2c91c4ba5 = class extends _1f8bd1a0e035.default {
    constructor(_96d03707f76f) {
      super(), this.ctx = _96d03707f76f, this.window = this.ctx.window, this.History = this.window.History, 
      this.history = this.window.history, this.historyProto = this.History ? this.History.prototype : {}, 
      this.pushState = this.historyProto.pushState, this.replaceState = this.historyProto.replaceState, 
      this.go = this.historyProto.go, this.back = this.historyProto.back, this.forward = this.historyProto.forward;
    }
    override() {
      this.overridePushState(), this.overrideReplaceState(), this.overrideGo(), this.overrideForward(), 
      this.overrideBack();
    }
    overridePushState() {
      this.ctx.override(this.historyProto, "pushState", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (2 > _7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684, _ef50f6afc0ab, _a3bae248626a = ""] = _7c28484a67f2, _30e8a5324ce3 = new _f5dd47651578({
          state: _5966ca9ce684,
          title: _ef50f6afc0ab,
          url: _a3bae248626a
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("pushState", _30e8a5324ce3), _30e8a5324ce3.intercepted ? _30e8a5324ce3.returnValue : _30e8a5324ce3.target.call(_30e8a5324ce3.that, _30e8a5324ce3.data.state, _30e8a5324ce3.data.title, _30e8a5324ce3.data.url);
      });
    }
    overrideReplaceState() {
      this.ctx.override(this.historyProto, "replaceState", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (2 > _7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684, _ef50f6afc0ab, _a3bae248626a = ""] = _7c28484a67f2, _30e8a5324ce3 = new _f5dd47651578({
          state: _5966ca9ce684,
          title: _ef50f6afc0ab,
          url: _a3bae248626a
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("replaceState", _30e8a5324ce3), _30e8a5324ce3.intercepted ? _30e8a5324ce3.returnValue : _30e8a5324ce3.target.call(_30e8a5324ce3.that, _30e8a5324ce3.data.state, _30e8a5324ce3.data.title, _30e8a5324ce3.data.url);
      });
    }
    overrideGo() {
      this.ctx.override(this.historyProto, "go", (_96d03707f76f, _345b86d023ff, [_7c28484a67f2]) => {
        let _5966ca9ce684 = new _f5dd47651578({
          delta: _7c28484a67f2
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("go", _5966ca9ce684), _5966ca9ce684.intercepted ? _5966ca9ce684.returnValue : _5966ca9ce684.target.call(_5966ca9ce684.that, _5966ca9ce684.data.delta);
      });
    }
    overrideForward() {
      this.ctx.override(this.historyProto, "forward", (_96d03707f76f, _345b86d023ff) => {
        let _7c28484a67f2 = new _f5dd47651578(null, _96d03707f76f, _345b86d023ff);
        return this.emit("forward", _7c28484a67f2), _7c28484a67f2.intercepted ? _7c28484a67f2.returnValue : _7c28484a67f2.target.call(_7c28484a67f2.that);
      });
    }
    overrideBack() {
      this.ctx.override(this.historyProto, "back", (_96d03707f76f, _345b86d023ff) => {
        let _7c28484a67f2 = new _f5dd47651578(null, _96d03707f76f, _345b86d023ff);
        return this.emit("back", _7c28484a67f2), _7c28484a67f2.intercepted ? _7c28484a67f2.returnValue : _7c28484a67f2.target.call(_7c28484a67f2.that);
      });
    }
  }, _dc6763743b39 = _a6e2c91c4ba5;
  var _5ae0321a730a = m(_30e8a5324ce3(), 1), _cd852cb966c9 = class extends _5ae0321a730a.default {
    constructor(_96d03707f76f) {
      super(), this.ctx = _96d03707f76f, this.window = _96d03707f76f.window, this.location = this.window.location, 
      this.WorkerLocation = this.ctx.worker ? this.window.WorkerLocation : null, this.workerLocProto = this.WorkerLocation ? this.WorkerLocation.prototype : {}, 
      this.keys = [ "href", "protocol", "host", "hostname", "port", "pathname", "search", "hash", "origin" ], 
      this.HashChangeEvent = this.window.HashChangeEvent || null, this.href = this.WorkerLocation ? _96d03707f76f.nativeMethods.getOwnPropertyDescriptor(this.workerLocProto, "href") : _96d03707f76f.nativeMethods.getOwnPropertyDescriptor(this.location, "href");
    }
    overrideWorkerLocation(_96d03707f76f) {
      if (!this.WorkerLocation) return !1;
      let _345b86d023ff = this;
      for (let _7c28484a67f2 of this.keys) this.ctx.overrideDescriptor(this.workerLocProto, _7c28484a67f2, {
        get: () => _96d03707f76f(_345b86d023ff.href.get.call(this.location))[_7c28484a67f2]
      });
      return !0;
    }
    emulate(_96d03707f76f, _345b86d023ff) {
      let _7c28484a67f2 = {}, _5966ca9ce684 = this;
      for (let _ef50f6afc0ab of _5966ca9ce684.keys) this.ctx.nativeMethods.defineProperty(_7c28484a67f2, _ef50f6afc0ab, {
        get() {
          return _96d03707f76f(_5966ca9ce684.href.get.call(_5966ca9ce684.location))[_ef50f6afc0ab];
        },
        set: _ef50f6afc0ab !== "origin" ? function(_96d03707f76f) {
          switch (_ef50f6afc0ab) {
           case "href":
            _5966ca9ce684.location.href = _345b86d023ff(_96d03707f76f);
            break;

           case "hash":
            _5966ca9ce684.emit("hashchange", _7c28484a67f2.href, _96d03707f76f.trim().startsWith("#") ? new URL(_96d03707f76f.trim(), _7c28484a67f2.href).href : new URL("#" + _96d03707f76f.trim(), _7c28484a67f2.href).href, _5966ca9ce684);
            break;

           default:
            {
              let _a3bae248626a = new URL(_7c28484a67f2.href);
              _a3bae248626a[_ef50f6afc0ab] = _96d03707f76f, _5966ca9ce684.location.href = _345b86d023ff(_a3bae248626a.href);
            }
            break;
          }
        } : void 0,
        configurable: !1,
        enumerable: !0
      });
      return "reload" in this.location && this.ctx.nativeMethods.defineProperty(_7c28484a67f2, "reload", {
        value: this.ctx.wrap(this.location, "reload", (_96d03707f76f, _345b86d023ff) => _96d03707f76f.call(_345b86d023ff === _7c28484a67f2 ? this.location : _345b86d023ff)),
        writable: !1,
        enumerable: !0
      }), "replace" in this.location && this.ctx.nativeMethods.defineProperty(_7c28484a67f2, "replace", {
        value: this.ctx.wrap(this.location, "assign", (_96d03707f76f, _5966ca9ce684, _ef50f6afc0ab) => {
          (!_ef50f6afc0ab.length || _5966ca9ce684 !== _7c28484a67f2) && _96d03707f76f.call(_5966ca9ce684), 
          _5966ca9ce684 = this.location;
          let [_a3bae248626a] = _ef50f6afc0ab, _30e8a5324ce3 = new URL(_a3bae248626a, _7c28484a67f2.href);
          return _96d03707f76f.call(_5966ca9ce684 === _7c28484a67f2 ? this.location : _5966ca9ce684, _345b86d023ff(_30e8a5324ce3.href));
        }),
        writable: !1,
        enumerable: !0
      }), "assign" in this.location && this.ctx.nativeMethods.defineProperty(_7c28484a67f2, "assign", {
        value: this.ctx.wrap(this.location, "assign", (_96d03707f76f, _5966ca9ce684, _ef50f6afc0ab) => {
          (!_ef50f6afc0ab.length || _5966ca9ce684 !== _7c28484a67f2) && _96d03707f76f.call(_5966ca9ce684), 
          _5966ca9ce684 = this.location;
          let [_a3bae248626a] = _ef50f6afc0ab, _30e8a5324ce3 = new URL(_a3bae248626a, _7c28484a67f2.href);
          return _96d03707f76f.call(_5966ca9ce684 === _7c28484a67f2 ? this.location : _5966ca9ce684, _345b86d023ff(_30e8a5324ce3.href));
        }),
        writable: !1,
        enumerable: !0
      }), "ancestorOrigins" in this.location && this.ctx.nativeMethods.defineProperty(_7c28484a67f2, "ancestorOrigins", {
        get() {
          let _96d03707f76f = [];
          return _5966ca9ce684.window.DOMStringList && _5966ca9ce684.ctx.nativeMethods.setPrototypeOf(_96d03707f76f, _5966ca9ce684.window.DOMStringList.prototype), 
          _96d03707f76f;
        },
        set: void 0,
        enumerable: !0
      }), this.ctx.nativeMethods.defineProperty(_7c28484a67f2, "toString", {
        value: this.ctx.wrap(this.location, "toString", () => _7c28484a67f2.href),
        enumerable: !0,
        writable: !1
      }), this.ctx.nativeMethods.defineProperty(_7c28484a67f2, Symbol.toPrimitive, {
        value: () => _7c28484a67f2.href,
        writable: !1,
        enumerable: !1
      }), this.ctx.window.Location && this.ctx.nativeMethods.setPrototypeOf(_7c28484a67f2, this.ctx.window.Location.prototype), 
      _7c28484a67f2;
    }
  }, _69105fb74183 = _cd852cb966c9;
  var _fa6d13e1e64d = m(_30e8a5324ce3(), 1);
  var _1962b7aac08e = class extends _fa6d13e1e64d.default {
    constructor(_96d03707f76f) {
      super(), this.ctx = _96d03707f76f, this.window = this.ctx.window, this.postMessage = this.window.postMessage, 
      this.MessageEvent = this.window.MessageEvent || {}, this.MessagePort = this.window.MessagePort || {}, 
      this.mpProto = this.MessagePort.prototype || {}, this.mpPostMessage = this.mpProto.postMessage, 
      this.messageProto = this.MessageEvent.prototype || {}, this.messageData = _96d03707f76f.nativeMethods.getOwnPropertyDescriptor(this.messageProto, "data"), 
      this.messageOrigin = _96d03707f76f.nativeMethods.getOwnPropertyDescriptor(this.messageProto, "origin");
    }
    overridePostMessage() {
      this.ctx.override(this.window, "postMessage", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (!_7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let _5966ca9ce684, _ef50f6afc0ab, _a3bae248626a;
        this.ctx.worker ? [_5966ca9ce684, _a3bae248626a = []] = _7c28484a67f2 : [_5966ca9ce684, _ef50f6afc0ab, _a3bae248626a = []] = _7c28484a67f2;
        let _30e8a5324ce3 = new _f5dd47651578({
          message: _5966ca9ce684,
          origin: _ef50f6afc0ab,
          transfer: _a3bae248626a,
          worker: this.ctx.worker
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("postMessage", _30e8a5324ce3), _30e8a5324ce3.intercepted ? _30e8a5324ce3.returnValue : this.ctx.worker ? _30e8a5324ce3.target.call(_30e8a5324ce3.that, _30e8a5324ce3.data.message, _30e8a5324ce3.data.transfer) : _30e8a5324ce3.target.call(_30e8a5324ce3.that, _30e8a5324ce3.data.message, _30e8a5324ce3.data.origin, _30e8a5324ce3.data.transfer);
      });
    }
    wrapPostMessage(_96d03707f76f, _345b86d023ff, _7c28484a67f2 = !1) {
      return this.ctx.wrap(_96d03707f76f, _345b86d023ff, (_345b86d023ff, _5966ca9ce684, _ef50f6afc0ab) => {
        if (this.ctx.worker ? !_ef50f6afc0ab.length : 2 > _ef50f6afc0ab) return _345b86d023ff.apply(_5966ca9ce684, _ef50f6afc0ab);
        let _a3bae248626a, _30e8a5324ce3, _625544c1eedc;
        _7c28484a67f2 ? ([_a3bae248626a, _625544c1eedc = []] = _ef50f6afc0ab, _30e8a5324ce3 = null) : [_a3bae248626a, _30e8a5324ce3, _625544c1eedc = []] = _ef50f6afc0ab;
        let _53f768076ffa = new _f5dd47651578({
          message: _a3bae248626a,
          origin: _30e8a5324ce3,
          transfer: _625544c1eedc,
          worker: this.ctx.worker
        }, _345b86d023ff, _96d03707f76f);
        return this.emit("postMessage", _53f768076ffa), _53f768076ffa.intercepted ? _53f768076ffa.returnValue : _7c28484a67f2 ? _53f768076ffa.target.call(_53f768076ffa.that, _53f768076ffa.data.message, _53f768076ffa.data.transfer) : _53f768076ffa.target.call(_53f768076ffa.that, _53f768076ffa.data.message, _53f768076ffa.data.origin, _53f768076ffa.data.transfer);
      });
    }
    overrideMessageOrigin() {
      this.ctx.overrideDescriptor(this.messageProto, "origin", {
        get: (_96d03707f76f, _345b86d023ff) => {
          let _7c28484a67f2 = new _f5dd47651578({
            value: _96d03707f76f.call(_345b86d023ff)
          }, _96d03707f76f, _345b86d023ff);
          return this.emit("origin", _7c28484a67f2), _7c28484a67f2.intercepted ? _7c28484a67f2.returnValue : _7c28484a67f2.data.value;
        }
      });
    }
    overrideMessageData() {
      this.ctx.overrideDescriptor(this.messageProto, "data", {
        get: (_96d03707f76f, _345b86d023ff) => {
          let _7c28484a67f2 = new _f5dd47651578({
            value: _96d03707f76f.call(_345b86d023ff)
          }, _96d03707f76f, _345b86d023ff);
          return this.emit("data", _7c28484a67f2), _7c28484a67f2.intercepted ? _7c28484a67f2.returnValue : _7c28484a67f2.data.value;
        }
      });
    }
  }, _9c64d014ebf8 = _1962b7aac08e;
  var _1497600d2cfb = m(_30e8a5324ce3(), 1);
  var _e57c8be2d4f4 = class extends _1497600d2cfb.default {
    constructor(_96d03707f76f) {
      super(), this.ctx = _96d03707f76f, this.window = _96d03707f76f.window, this.navigator = this.window.navigator, 
      this.Navigator = this.window.Navigator || {}, this.navProto = this.Navigator.prototype || {}, 
      this.sendBeacon = this.navProto.sendBeacon;
    }
    overrideSendBeacon() {
      this.ctx.override(this.navProto, "sendBeacon", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (!_7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684, _ef50f6afc0ab = ""] = _7c28484a67f2, _a3bae248626a = new _f5dd47651578({
          url: _5966ca9ce684,
          data: _ef50f6afc0ab
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("sendBeacon", _a3bae248626a), _a3bae248626a.intercepted ? _a3bae248626a.returnValue : _a3bae248626a.target.call(_a3bae248626a.that, _a3bae248626a.data.url, _a3bae248626a.data.data);
      });
    }
  }, _1785ea242807 = _e57c8be2d4f4;
  var _6b2b7a8bd1ad = m(_30e8a5324ce3(), 1);
  var _57e489667fe4 = globalThis.fetch, _1aea9b6a23e3 = globalThis.SharedWorker, _caffc7ca378c = globalThis.localStorage, _ed923f453f93 = globalThis.navigator.serviceWorker, _6ca189e462a4 = MessagePort.prototype.postMessage, _7cb994758546 = {
    prototype: {
      send: WebSocket.prototype.send
    },
    CLOSED: WebSocket.CLOSED,
    CLOSING: WebSocket.CLOSING,
    CONNECTING: WebSocket.CONNECTING,
    OPEN: WebSocket.OPEN
  };
  async function W() {
    let _96d03707f76f = (await self.clients.matchAll({
      type: "window",
      includeUncontrolled: !0
    })).map(async _96d03707f76f => {
      let _345b86d023ff = await function(_96d03707f76f) {
        let _345b86d023ff = new MessageChannel;
        return new Promise(_7c28484a67f2 => {
          _96d03707f76f.postMessage({
            type: "getPort",
            port: _345b86d023ff.port2
          }, [ _345b86d023ff.port2 ]), _345b86d023ff.port1.onmessage = _96d03707f76f => {
            _7c28484a67f2(_96d03707f76f.data);
          };
        });
      }(_96d03707f76f);
      return await Ie(_345b86d023ff), _345b86d023ff;
    }), _345b86d023ff = Promise.race([ Promise.any(_96d03707f76f), new Promise((_96d03707f76f, _345b86d023ff) => setTimeout(_345b86d023ff, 1e3, new TypeError("timeout"))) ]);
    try {
      return await _345b86d023ff;
    } catch (_96d03707f76f) {
      if (_96d03707f76f instanceof AggregateError) throw console.error("bare-mux: failed to get a bare-mux SharedWorker MessagePort as all clients returned an invalid MessagePort."), 
      new Error("All clients returned an invalid MessagePort.");
      return console.warn("bare-mux: failed to get a bare-mux SharedWorker MessagePort within 1s, retrying"), 
      await W();
    }
  }
  function Ie(_96d03707f76f) {
    let _345b86d023ff = new MessageChannel, _7c28484a67f2 = new Promise((_96d03707f76f, _7c28484a67f2) => {
      _345b86d023ff.port1.onmessage = _345b86d023ff => {
        _345b86d023ff.data.type === "pong" && _96d03707f76f();
      }, setTimeout(_7c28484a67f2, 1500);
    });
    return _6ca189e462a4.call(_96d03707f76f, {
      message: {
        type: "ping"
      },
      port: _345b86d023ff.port2
    }, [ _345b86d023ff.port2 ]), _7c28484a67f2;
  }
  function Ve(_96d03707f76f, _345b86d023ff) {
    let _7c28484a67f2 = new _1aea9b6a23e3(_96d03707f76f, "ridgewood-stem-worker");
    return _345b86d023ff && _ed923f453f93.addEventListener("message", _345b86d023ff => {
      if (_345b86d023ff.data.type === "getPort" && _345b86d023ff.data.port) {
        console.debug("bare-mux: recieved request for port from sw");
        let _7c28484a67f2 = new _1aea9b6a23e3(_96d03707f76f, "ridgewood-stem-worker");
        _6ca189e462a4.call(_345b86d023ff.data.port, _7c28484a67f2.port, [ _7c28484a67f2.port ]);
      }
    }), _7c28484a67f2.port;
  }
  var _86ee609fe2a3 = null;
  function lt() {
    if (_86ee609fe2a3 === null) {
      let _96d03707f76f = new MessageChannel, _345b86d023ff = new ReadableStream, _7c28484a67f2;
      try {
        _6ca189e462a4.call(_96d03707f76f.port1, _345b86d023ff, [ _345b86d023ff ]), _7c28484a67f2 = !0;
      } catch {
        _7c28484a67f2 = !1;
      }
      return _86ee609fe2a3 = _7c28484a67f2, _7c28484a67f2;
    }
    return _86ee609fe2a3;
  }
  var _6f22162d0e0f = class {
    constructor(_96d03707f76f) {
      this.channel = new BroadcastChannel("bare-mux"), _96d03707f76f instanceof MessagePort || _96d03707f76f instanceof Promise ? this.port = _96d03707f76f : this.createChannel(_96d03707f76f, !0);
    }
    createChannel(_96d03707f76f, _345b86d023ff) {
      if (self.clients) this.port = W(), this.channel.onmessage = _96d03707f76f => {
        _96d03707f76f.data.type === "refreshPort" && (this.port = W());
      }; else if (_96d03707f76f && SharedWorker) {
        if (!_96d03707f76f.startsWith("/") && !_96d03707f76f.includes("://")) throw new Error("Invalid URL. Must be absolute or start at the root.");
        this.port = Ve(_96d03707f76f, _345b86d023ff), console.debug("bare-mux: setting localStorage bare-mux-path to", _96d03707f76f), 
        _caffc7ca378c["bare-mux-path"] = _96d03707f76f;
      } else {
        if (!SharedWorker) throw new Error("Unable to get a channel to the SharedWorker.");
        {
          let _96d03707f76f = _caffc7ca378c["bare-mux-path"];
          if (console.debug("bare-mux: got localStorage bare-mux-path:", _96d03707f76f), !_96d03707f76f) throw new Error("Unable to get bare-mux workerPath from localStorage.");
          this.port = Ve(_96d03707f76f, _345b86d023ff);
        }
      }
    }
    async sendMessage(_96d03707f76f, _345b86d023ff) {
      this.port instanceof Promise && (this.port = await this.port);
      try {
        await Ie(this.port);
      } catch {
        return console.warn("bare-mux: Failed to get a ping response from the worker within 1.5s. Assuming port is dead."), 
        this.createChannel(), await this.sendMessage(_96d03707f76f, _345b86d023ff);
      }
      let _7c28484a67f2 = new MessageChannel, _5966ca9ce684 = [ _7c28484a67f2.port2, ..._345b86d023ff || [] ], _ef50f6afc0ab = new Promise((_96d03707f76f, _345b86d023ff) => {
        _7c28484a67f2.port1.onmessage = _7c28484a67f2 => {
          let _5966ca9ce684 = _7c28484a67f2.data;
          _5966ca9ce684.type === "error" ? _345b86d023ff(_5966ca9ce684.error) : _96d03707f76f(_5966ca9ce684);
        };
      });
      return _6ca189e462a4.call(this.port, {
        message: _96d03707f76f,
        port: _7c28484a67f2.port2
      }, _5966ca9ce684), await _ef50f6afc0ab;
    }
  };
  function Ce(_96d03707f76f, _345b86d023ff, _7c28484a67f2) {
    console.error(`error while processing '${_7c28484a67f2}': `, _345b86d023ff), _96d03707f76f.postMessage({
      type: "error",
      error: _345b86d023ff
    });
  }
  var _45b805409600 = class {
    constructor(_96d03707f76f) {
      this.worker = new _6f22162d0e0f(_96d03707f76f);
    }
    async getTransport() {
      return (await this.worker.sendMessage({
        type: "get"
      })).name;
    }
    async setTransport(_96d03707f76f, _345b86d023ff, _7c28484a67f2) {
      await this.setManualTransport(`\n\t\t\tconst { default: BareTransport } = await import("${_96d03707f76f}");\n\t\t\treturn [BareTransport, "${_96d03707f76f}"];\n\t\t`, _345b86d023ff, _7c28484a67f2);
    }
    async setManualTransport(_96d03707f76f, _345b86d023ff, _7c28484a67f2) {
      if (_96d03707f76f === "bare-mux-remote") throw new Error("Use setRemoteTransport.");
      await this.worker.sendMessage({
        type: "set",
        client: {
          function: _96d03707f76f,
          args: _345b86d023ff
        }
      }, _7c28484a67f2);
    }
    async setRemoteTransport(_96d03707f76f, _345b86d023ff) {
      let _7c28484a67f2 = new MessageChannel;
      _7c28484a67f2.port1.onmessage = async _345b86d023ff => {
        let _7c28484a67f2 = _345b86d023ff.data.port, _5966ca9ce684 = _345b86d023ff.data.message;
        if (_5966ca9ce684.type === "fetch") try {
          _96d03707f76f.ready || await _96d03707f76f.init(), await async function(_96d03707f76f, _345b86d023ff, _7c28484a67f2) {
            let _5966ca9ce684 = await _7c28484a67f2.request(new URL(_96d03707f76f.fetch.remote), _96d03707f76f.fetch.method, _96d03707f76f.fetch.body, _96d03707f76f.fetch.headers, null);
            if (!lt() && _5966ca9ce684.body instanceof ReadableStream) {
              let _96d03707f76f = new Response(_5966ca9ce684.body);
              _5966ca9ce684.body = await _96d03707f76f.arrayBuffer();
            }
            _5966ca9ce684.body instanceof ReadableStream || _5966ca9ce684.body instanceof ArrayBuffer ? _6ca189e462a4.call(_345b86d023ff, {
              type: "fetch",
              fetch: _5966ca9ce684
            }, [ _5966ca9ce684.body ]) : _6ca189e462a4.call(_345b86d023ff, {
              type: "fetch",
              fetch: _5966ca9ce684
            });
          }(_5966ca9ce684, _7c28484a67f2, _96d03707f76f);
        } catch (_96d03707f76f) {
          Ce(_7c28484a67f2, _96d03707f76f, "fetch");
        } else if (_5966ca9ce684.type === "websocket") try {
          _96d03707f76f.ready || await _96d03707f76f.init(), await async function(_96d03707f76f, _345b86d023ff, _7c28484a67f2) {
            let [_5966ca9ce684, _ef50f6afc0ab] = _7c28484a67f2.connect(new URL(_96d03707f76f.websocket.url), _96d03707f76f.websocket.protocols, _96d03707f76f.websocket.requestHeaders, _345b86d023ff => {
              _6ca189e462a4.call(_96d03707f76f.websocket.channel, {
                type: "open",
                args: [ _345b86d023ff ]
              });
            }, _345b86d023ff => {
              _345b86d023ff instanceof ArrayBuffer ? _6ca189e462a4.call(_96d03707f76f.websocket.channel, {
                type: "message",
                args: [ _345b86d023ff ]
              }, [ _345b86d023ff ]) : _6ca189e462a4.call(_96d03707f76f.websocket.channel, {
                type: "message",
                args: [ _345b86d023ff ]
              });
            }, (_345b86d023ff, _7c28484a67f2) => {
              _6ca189e462a4.call(_96d03707f76f.websocket.channel, {
                type: "close",
                args: [ _345b86d023ff, _7c28484a67f2 ]
              });
            }, _345b86d023ff => {
              _6ca189e462a4.call(_96d03707f76f.websocket.channel, {
                type: "error",
                args: [ _345b86d023ff ]
              });
            });
            _96d03707f76f.websocket.channel.onmessage = _96d03707f76f => {
              _96d03707f76f.data.type === "data" ? _5966ca9ce684(_96d03707f76f.data.data) : _96d03707f76f.data.type === "close" && _ef50f6afc0ab(_96d03707f76f.data.closeCode, _96d03707f76f.data.closeReason);
            }, _6ca189e462a4.call(_345b86d023ff, {
              type: "websocket"
            });
          }(_5966ca9ce684, _7c28484a67f2, _96d03707f76f);
        } catch (_96d03707f76f) {
          Ce(_7c28484a67f2, _96d03707f76f, "websocket");
        }
      }, await this.worker.sendMessage({
        type: "set",
        client: {
          function: "bare-mux-remote",
          args: [ _7c28484a67f2.port2, _345b86d023ff ]
        }
      }, [ _7c28484a67f2.port2 ]);
    }
    getInnerPort() {
      return this.worker.port;
    }
  };
  console.debug("bare-mux: running v2.1.6 (build 4b7607b)");
  var _2cfbbfb62837 = class extends _6b2b7a8bd1ad.default {
    constructor(_96d03707f76f) {
      super(), this.ctx = _96d03707f76f, this.window = _96d03707f76f.window, this.Worker = this.window.Worker || {}, 
      this.Worklet = this.window.Worklet || {}, this.workletProto = this.Worklet.prototype || {}, 
      this.workerProto = this.Worker.prototype || {}, this.postMessage = this.workerProto.postMessage, 
      this.terminate = this.workerProto.terminate, this.addModule = this.workletProto.addModule;
    }
    overrideWorker() {
      this.ctx.override(this.window, "Worker", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (!_7c28484a67f2.length) return new _96d03707f76f(..._7c28484a67f2);
        let [_5966ca9ce684, _ef50f6afc0ab = {}] = _7c28484a67f2, _a3bae248626a = new _f5dd47651578({
          url: _5966ca9ce684,
          options: _ef50f6afc0ab
        }, _96d03707f76f, _345b86d023ff);
        if (this.emit("worker", _a3bae248626a), _a3bae248626a.intercepted) return _a3bae248626a.returnValue;
        let _30e8a5324ce3 = new _a3bae248626a.target(_a3bae248626a.data.url, _a3bae248626a.data.options), _625544c1eedc = new _45b805409600;
        return (async () => {
          let _96d03707f76f = await _625544c1eedc.getInnerPort();
          _30e8a5324ce3.postMessage({
            __uv$type: "baremuxinit",
            port: _96d03707f76f
          }, [ _96d03707f76f ]);
        })(), _30e8a5324ce3;
      }, !0);
    }
    overrideAddModule() {
      this.ctx.override(this.workletProto, "addModule", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (!_7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684, _ef50f6afc0ab = {}] = _7c28484a67f2, _a3bae248626a = new _f5dd47651578({
          url: _5966ca9ce684,
          options: _ef50f6afc0ab
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("addModule", _a3bae248626a), _a3bae248626a.intercepted ? _a3bae248626a.returnValue : _a3bae248626a.target.call(_a3bae248626a.that, _a3bae248626a.data.url, _a3bae248626a.data.options);
      });
    }
    overridePostMessage() {
      this.ctx.override(this.workerProto, "postMessage", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (!_7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684, _ef50f6afc0ab = []] = _7c28484a67f2, _a3bae248626a = new _f5dd47651578({
          message: _5966ca9ce684,
          transfer: _ef50f6afc0ab
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("postMessage", _a3bae248626a), _a3bae248626a.intercepted ? _a3bae248626a.returnValue : _a3bae248626a.target.call(_a3bae248626a.that, _a3bae248626a.data.message, _a3bae248626a.data.transfer);
      });
    }
    overrideImportScripts() {
      this.ctx.override(this.window, "importScripts", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (!_7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let _5966ca9ce684 = new _f5dd47651578({
          scripts: _7c28484a67f2
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("importScripts", _5966ca9ce684), _5966ca9ce684.intercepted ? _5966ca9ce684.returnValue : _5966ca9ce684.target.apply(_5966ca9ce684.that, _5966ca9ce684.data.scripts);
      });
    }
  }, _f366580d0167 = _2cfbbfb62837;
  var _056f9e670b77 = m(_30e8a5324ce3(), 1);
  var _c4e4500a2650 = class extends _056f9e670b77.default {
    constructor(_96d03707f76f) {
      super(), this.ctx = _96d03707f76f, this.window = this.ctx.window, this.URL = this.window.URL || {}, 
      this.createObjectURL = this.URL.createObjectURL, this.revokeObjectURL = this.URL.revokeObjectURL;
    }
    overrideObjectURL() {
      this.ctx.override(this.URL, "createObjectURL", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (!_7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684] = _7c28484a67f2, _ef50f6afc0ab = new _f5dd47651578({
          object: _5966ca9ce684
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("createObjectURL", _ef50f6afc0ab), _ef50f6afc0ab.intercepted ? _ef50f6afc0ab.returnValue : _ef50f6afc0ab.target.call(_ef50f6afc0ab.that, _ef50f6afc0ab.data.object);
      }), this.ctx.override(this.URL, "revokeObjectURL", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (!_7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684] = _7c28484a67f2, _ef50f6afc0ab = new _f5dd47651578({
          url: _5966ca9ce684
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("revokeObjectURL", _ef50f6afc0ab), _ef50f6afc0ab.intercepted ? _ef50f6afc0ab.returnValue : _ef50f6afc0ab.target.call(_ef50f6afc0ab.that, _ef50f6afc0ab.data.url);
      });
    }
  }, _674c88514f54 = _c4e4500a2650;
  var _7ba6c4827bdb = m(_30e8a5324ce3(), 1);
  var _6f19be08773d = m(_30e8a5324ce3(), 1);
  var _ee2bd9a48e43 = class extends _6f19be08773d.default {
    constructor(_96d03707f76f) {
      super(), this.ctx = _96d03707f76f, this.window = _96d03707f76f.window, this.localStorage = this.window.localStorage || null, 
      this.sessionStorage = this.window.sessionStorage || null, this.Storage = this.window.Storage || {}, 
      this.storeProto = this.Storage.prototype || {}, this.getItem = this.storeProto.getItem || null, 
      this.setItem = this.storeProto.setItem || null, this.removeItem = this.storeProto.removeItem || null, 
      this.clear = this.storeProto.clear || null, this.key = this.storeProto.key || null, 
      this.methods = [ "key", "getItem", "setItem", "removeItem", "clear" ], this.wrappers = new _96d03707f76f.nativeMethods.Map;
    }
    overrideMethods() {
      this.ctx.override(this.storeProto, "getItem", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (!_7c28484a67f2.length) return _96d03707f76f.apply(this.wrappers.get(_345b86d023ff) || _345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684] = _7c28484a67f2, _ef50f6afc0ab = new _f5dd47651578({
          name: _5966ca9ce684
        }, _96d03707f76f, this.wrappers.get(_345b86d023ff) || _345b86d023ff);
        return this.emit("getItem", _ef50f6afc0ab), _ef50f6afc0ab.intercepted ? _ef50f6afc0ab.returnValue : _ef50f6afc0ab.target.call(_ef50f6afc0ab.that, _ef50f6afc0ab.data.name);
      }), this.ctx.override(this.storeProto, "setItem", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (2 > _7c28484a67f2.length) return _96d03707f76f.apply(this.wrappers.get(_345b86d023ff) || _345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684, _ef50f6afc0ab] = _7c28484a67f2, _a3bae248626a = new _f5dd47651578({
          name: _5966ca9ce684,
          value: _ef50f6afc0ab
        }, _96d03707f76f, this.wrappers.get(_345b86d023ff) || _345b86d023ff);
        return this.emit("setItem", _a3bae248626a), _a3bae248626a.intercepted ? _a3bae248626a.returnValue : _a3bae248626a.target.call(_a3bae248626a.that, _a3bae248626a.data.name, _a3bae248626a.data.value);
      }), this.ctx.override(this.storeProto, "removeItem", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (!_7c28484a67f2.length) return _96d03707f76f.apply(this.wrappers.get(_345b86d023ff) || _345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684] = _7c28484a67f2, _ef50f6afc0ab = new _f5dd47651578({
          name: _5966ca9ce684
        }, _96d03707f76f, this.wrappers.get(_345b86d023ff) || _345b86d023ff);
        return this.emit("removeItem", _ef50f6afc0ab), _ef50f6afc0ab.intercepted ? _ef50f6afc0ab.returnValue : _ef50f6afc0ab.target.call(_ef50f6afc0ab.that, _ef50f6afc0ab.data.name);
      }), this.ctx.override(this.storeProto, "clear", (_96d03707f76f, _345b86d023ff) => {
        let _7c28484a67f2 = new _f5dd47651578(null, _96d03707f76f, this.wrappers.get(_345b86d023ff) || _345b86d023ff);
        return this.emit("clear", _7c28484a67f2), _7c28484a67f2.intercepted ? _7c28484a67f2.returnValue : _7c28484a67f2.target.call(_7c28484a67f2.that);
      }), this.ctx.override(this.storeProto, "key", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (!_7c28484a67f2.length) return _96d03707f76f.apply(this.wrappers.get(_345b86d023ff) || _345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684] = _7c28484a67f2, _ef50f6afc0ab = new _f5dd47651578({
          index: _5966ca9ce684
        }, _96d03707f76f, this.wrappers.get(_345b86d023ff) || _345b86d023ff);
        return this.emit("key", _ef50f6afc0ab), _ef50f6afc0ab.intercepted ? _ef50f6afc0ab.returnValue : _ef50f6afc0ab.target.call(_ef50f6afc0ab.that, _ef50f6afc0ab.data.index);
      });
    }
    overrideLength() {
      this.ctx.overrideDescriptor(this.storeProto, "length", {
        get: (_96d03707f76f, _345b86d023ff) => {
          let _7c28484a67f2 = new _f5dd47651578({
            length: _96d03707f76f.call(this.wrappers.get(_345b86d023ff) || _345b86d023ff)
          }, _96d03707f76f, this.wrappers.get(_345b86d023ff) || _345b86d023ff);
          return this.emit("length", _7c28484a67f2), _7c28484a67f2.intercepted ? _7c28484a67f2.returnValue : _7c28484a67f2.data.length;
        }
      });
    }
    emulate(_96d03707f76f, _345b86d023ff = {}) {
      this.ctx.nativeMethods.setPrototypeOf(_345b86d023ff, this.storeProto);
      let _7c28484a67f2 = new this.ctx.window.Proxy(_345b86d023ff, {
        get: (_345b86d023ff, _7c28484a67f2) => {
          if (_7c28484a67f2 in this.storeProto || typeof _7c28484a67f2 == "symbol") return _96d03707f76f[_7c28484a67f2];
          let _5966ca9ce684 = new _f5dd47651578({
            name: _7c28484a67f2
          }, null, _96d03707f76f);
          return this.emit("get", _5966ca9ce684), _5966ca9ce684.intercepted ? _5966ca9ce684.returnValue : _96d03707f76f[_5966ca9ce684.data.name];
        },
        set: (_345b86d023ff, _7c28484a67f2, _5966ca9ce684) => {
          if (_7c28484a67f2 in this.storeProto || typeof _7c28484a67f2 == "symbol") return _96d03707f76f[_7c28484a67f2] = _5966ca9ce684;
          let _ef50f6afc0ab = new _f5dd47651578({
            name: _7c28484a67f2,
            value: _5966ca9ce684
          }, null, _96d03707f76f);
          return this.emit("set", _ef50f6afc0ab), _ef50f6afc0ab.intercepted ? _ef50f6afc0ab.returnValue : _96d03707f76f[_ef50f6afc0ab.data.name] = _ef50f6afc0ab.data.value;
        },
        deleteProperty: (_345b86d023ff, _7c28484a67f2) => {
          if (typeof _7c28484a67f2 == "symbol") return delete _96d03707f76f[_7c28484a67f2];
          let _5966ca9ce684 = new _f5dd47651578({
            name: _7c28484a67f2
          }, null, _96d03707f76f);
          return this.emit("delete", _5966ca9ce684), _5966ca9ce684.intercepted ? _5966ca9ce684.returnValue : delete _96d03707f76f[_5966ca9ce684.data.name];
        }
      });
      return this.wrappers.set(_7c28484a67f2, _96d03707f76f), this.ctx.nativeMethods.setPrototypeOf(_7c28484a67f2, this.storeProto), 
      _7c28484a67f2;
    }
  }, _afae99220586 = _ee2bd9a48e43;
  var _5188ec7a2bd9 = m(_30e8a5324ce3(), 1);
  var _60731dd0afed = class extends _5188ec7a2bd9.default {
    constructor(_96d03707f76f) {
      super(), this.ctx = _96d03707f76f, this.window = _96d03707f76f.window, this.CSSStyleDeclaration = this.window.CSSStyleDeclaration || {}, 
      this.cssStyleProto = this.CSSStyleDeclaration.prototype || {}, this.getPropertyValue = this.cssStyleProto.getPropertyValue || null, 
      this.setProperty = this.cssStyleProto.setProperty || null, this.cssText - _96d03707f76f.nativeMethods.getOwnPropertyDescriptors(this.cssStyleProto, "cssText"), 
      this.urlProps = [ "background", "backgroundImage", "borderImage", "borderImageSource", "listStyle", "listStyleImage", "cursor" ], 
      this.dashedUrlProps = [ "background", "background-image", "border-image", "border-image-source", "list-style", "list-style-image", "cursor" ], 
      this.propToDashed = {
        background: "background",
        backgroundImage: "background-image",
        borderImage: "border-image",
        borderImageSource: "border-image-source",
        listStyle: "list-style",
        listStyleImage: "list-style-image",
        cursor: "cursor"
      };
    }
    overrideSetGetProperty() {
      this.ctx.override(this.cssStyleProto, "getPropertyValue", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (!_7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684] = _7c28484a67f2, _ef50f6afc0ab = new _f5dd47651578({
          property: _5966ca9ce684
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("getPropertyValue", _ef50f6afc0ab), _ef50f6afc0ab.intercepted ? _ef50f6afc0ab.returnValue : _ef50f6afc0ab.target.call(_ef50f6afc0ab.that, _ef50f6afc0ab.data.property);
      }), this.ctx.override(this.cssStyleProto, "setProperty", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (2 > _7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684, _ef50f6afc0ab] = _7c28484a67f2, _a3bae248626a = new _f5dd47651578({
          property: _5966ca9ce684,
          value: _ef50f6afc0ab
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("setProperty", _a3bae248626a), _a3bae248626a.intercepted ? _a3bae248626a.returnValue : _a3bae248626a.target.call(_a3bae248626a.that, _a3bae248626a.data.property, _a3bae248626a.data.value);
      });
    }
    overrideCssText() {
      this.ctx.overrideDescriptor(this.cssStyleProto, "cssText", {
        get: (_96d03707f76f, _345b86d023ff) => {
          let _7c28484a67f2 = new _f5dd47651578({
            value: _96d03707f76f.call(_345b86d023ff)
          }, _96d03707f76f, _345b86d023ff);
          return this.emit("getCssText", _7c28484a67f2), _7c28484a67f2.intercepted ? _7c28484a67f2.returnValue : _7c28484a67f2.data.value;
        },
        set: (_96d03707f76f, _345b86d023ff, [_7c28484a67f2]) => {
          let _5966ca9ce684 = new _f5dd47651578({
            value: _7c28484a67f2
          }, _96d03707f76f, _345b86d023ff);
          return this.emit("setCssText", _5966ca9ce684), _5966ca9ce684.intercepted ? _5966ca9ce684.returnValue : _5966ca9ce684.target.call(_5966ca9ce684.that, _5966ca9ce684.data.value);
        }
      });
    }
  }, _6d83f709066d = _60731dd0afed;
  var _1a8c72bcd8e2 = m(_30e8a5324ce3(), 1);
  var _704b729801f4 = class extends _1a8c72bcd8e2.default {
    constructor(_96d03707f76f) {
      super(), this.ctx = _96d03707f76f, this.window = this.ctx.window, this.IDBDatabase = this.window.IDBDatabase || {}, 
      this.idbDatabaseProto = this.IDBDatabase.prototype || {}, this.IDBFactory = this.window.IDBFactory || {}, 
      this.idbFactoryProto = this.IDBFactory.prototype || {}, this.open = this.idbFactoryProto.open;
    }
    overrideOpen() {
      this.ctx.override(this.IDBFactory.prototype, "open", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        if (!_7c28484a67f2.length || !_7c28484a67f2.length) return _96d03707f76f.apply(_345b86d023ff, _7c28484a67f2);
        let [_5966ca9ce684, _ef50f6afc0ab] = _7c28484a67f2, _a3bae248626a = new _f5dd47651578({
          name: _5966ca9ce684,
          version: _ef50f6afc0ab
        }, _96d03707f76f, _345b86d023ff);
        return this.emit("idbFactoryOpen", _a3bae248626a), _a3bae248626a.intercepted ? _a3bae248626a.returnValue : _a3bae248626a.target.call(_a3bae248626a.that, _a3bae248626a.data.name, _a3bae248626a.data.version);
      });
    }
    overrideName() {
      this.ctx.overrideDescriptor(this.idbDatabaseProto, "name", {
        get: (_96d03707f76f, _345b86d023ff) => {
          let _7c28484a67f2 = new _f5dd47651578({
            value: _96d03707f76f.call(_345b86d023ff)
          }, _96d03707f76f, _345b86d023ff);
          return this.emit("idbFactoryName", _7c28484a67f2), _7c28484a67f2.intercepted ? _7c28484a67f2.returnValue : _7c28484a67f2.data.value;
        }
      });
    }
  }, _fe849f9843a0 = _704b729801f4;
  var _90428f152f9e = m(_30e8a5324ce3(), 1);
  var _dc378b315dbb = class extends _90428f152f9e.default {
    constructor(_96d03707f76f) {
      super(), this.ctx = _96d03707f76f, this.window = _96d03707f76f.window, this.WebSocket = this.window.WebSocket || {}, 
      this.wsProto = this.WebSocket.prototype, this.CONNECTING = WebSocket.CONNECTING, 
      this.OPEN = WebSocket.OPEN, this.CLOSING = WebSocket.CLOSING, this.CLOSED = WebSocket.CLOSED, 
      this.socketmap = new WeakMap;
    }
    overrideWebSocket(_96d03707f76f) {
      this.ctx.override(this.window, "WebSocket", (_345b86d023ff, _7c28484a67f2, _5966ca9ce684) => {
        let _ef50f6afc0ab = new EventTarget;
        Object.setPrototypeOf(_ef50f6afc0ab, this.WebSocket.prototype), _ef50f6afc0ab.constructor = this.WebSocket;
        let i = _96d03707f76f => new Proxy(_96d03707f76f, {
          get(_96d03707f76f, _345b86d023ff) {
            return _345b86d023ff === "isTrusted" ? !0 : Reflect.get(_96d03707f76f, _345b86d023ff);
          }
        }), _a3bae248626a = _96d03707f76f.createWebSocket(_5966ca9ce684[0], _5966ca9ce684[1], null, {
          "User-Agent": navigator.userAgent,
          Origin: __uv.meta.url.origin
        }), _30e8a5324ce3 = {
          extensions: "",
          protocol: "",
          url: _5966ca9ce684[0],
          binaryType: "blob",
          barews: _a3bae248626a
        };
        function u(_96d03707f76f) {
          _30e8a5324ce3["on" + _96d03707f76f.type]?.(i(_96d03707f76f)), _ef50f6afc0ab.dispatchEvent(_96d03707f76f);
        }
        return _a3bae248626a.addEventListener("open", () => {
          u(new Event("open"));
        }), _a3bae248626a.addEventListener("close", _96d03707f76f => {
          u(new CloseEvent("close", _96d03707f76f));
        }), _a3bae248626a.addEventListener("message", async _96d03707f76f => {
          let _345b86d023ff = _96d03707f76f.data;
          typeof _345b86d023ff == "string" || ("byteLength" in _345b86d023ff ? _30e8a5324ce3.binaryType === "blob" ? _345b86d023ff = new Blob([ _345b86d023ff ]) : Object.setPrototypeOf(_345b86d023ff, ArrayBuffer.prototype) : "arrayBuffer" in _345b86d023ff && _30e8a5324ce3.binaryType === "arraybuffer" && (_345b86d023ff = await _345b86d023ff.arrayBuffer(), 
          Object.setPrototypeOf(_345b86d023ff, ArrayBuffer.prototype)));
          let _7c28484a67f2 = new MessageEvent("message", {
            data: _345b86d023ff,
            origin: _96d03707f76f.origin,
            lastEventId: _96d03707f76f.lastEventId,
            source: _96d03707f76f.source,
            ports: _96d03707f76f.ports
          });
          u(_7c28484a67f2);
        }), _a3bae248626a.addEventListener("error", () => {
          u(new Event("error"));
        }), this.socketmap.set(_ef50f6afc0ab, _30e8a5324ce3), _ef50f6afc0ab;
      }, !0), this.ctx.overrideDescriptor(this.wsProto, "binaryType", {
        get: (_96d03707f76f, _345b86d023ff) => this.socketmap.get(_345b86d023ff).binaryType,
        set: (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
          let _5966ca9ce684 = this.socketmap.get(_345b86d023ff);
          (_7c28484a67f2[0] === "blob" || _7c28484a67f2[0] === "arraybuffer") && (_5966ca9ce684.binaryType = _7c28484a67f2[0]);
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "bufferedAmount", {
        get: (_96d03707f76f, _345b86d023ff) => 0
      }), this.ctx.overrideDescriptor(this.wsProto, "extensions", {
        get: (_96d03707f76f, _345b86d023ff) => this.socketmap.get(_345b86d023ff).extensions
      }), this.ctx.overrideDescriptor(this.wsProto, "onclose", {
        get: (_96d03707f76f, _345b86d023ff) => this.socketmap.get(_345b86d023ff).onclose,
        set: (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
          let _5966ca9ce684 = this.socketmap.get(_345b86d023ff);
          _5966ca9ce684.onclose = _7c28484a67f2[0];
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "onerror", {
        get: (_96d03707f76f, _345b86d023ff) => this.socketmap.get(_345b86d023ff).onerror,
        set: (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
          let _5966ca9ce684 = this.socketmap.get(_345b86d023ff);
          _5966ca9ce684.onerror = _7c28484a67f2[0];
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "onmessage", {
        get: (_96d03707f76f, _345b86d023ff) => this.socketmap.get(_345b86d023ff).onmessage,
        set: (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
          let _5966ca9ce684 = this.socketmap.get(_345b86d023ff);
          _5966ca9ce684.onmessage = _7c28484a67f2[0];
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "onopen", {
        get: (_96d03707f76f, _345b86d023ff) => this.socketmap.get(_345b86d023ff).onopen,
        set: (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
          let _5966ca9ce684 = this.socketmap.get(_345b86d023ff);
          _5966ca9ce684.onopen = _7c28484a67f2[0];
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "url", {
        get: (_96d03707f76f, _345b86d023ff) => this.socketmap.get(_345b86d023ff).url
      }), this.ctx.overrideDescriptor(this.wsProto, "protocol", {
        get: (_96d03707f76f, _345b86d023ff) => this.socketmap.get(_345b86d023ff).protocol
      }), this.ctx.overrideDescriptor(this.wsProto, "readyState", {
        get: (_96d03707f76f, _345b86d023ff) => this.socketmap.get(_345b86d023ff).barews.readyState
      }), this.ctx.override(this.wsProto, "send", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => this.socketmap.get(_345b86d023ff).barews.send(_7c28484a67f2[0]), !1), 
      this.ctx.override(this.wsProto, "close", (_96d03707f76f, _345b86d023ff, _7c28484a67f2) => {
        let _5966ca9ce684 = this.socketmap.get(_345b86d023ff);
        return _7c28484a67f2[0] === void 0 && (_7c28484a67f2[0] = 1e3), _7c28484a67f2[1] === void 0 && (_7c28484a67f2[1] = ""), 
        _5966ca9ce684.barews.close(_7c28484a67f2[0], _7c28484a67f2[1]);
      }, !1);
    }
  }, _5a3edd75e06f = _dc378b315dbb;
  var _5329b9547148 = class extends _7ba6c4827bdb.default {
    constructor(_96d03707f76f = self, _345b86d023ff, _7c28484a67f2 = !_96d03707f76f.window) {
      super(), this.window = _96d03707f76f, this.nativeMethods = {
        fnToString: this.window.Function.prototype.toString,
        defineProperty: this.window.Object.defineProperty,
        getOwnPropertyDescriptor: this.window.Object.getOwnPropertyDescriptor,
        getOwnPropertyDescriptors: this.window.Object.getOwnPropertyDescriptors,
        getOwnPropertyNames: this.window.Object.getOwnPropertyNames,
        keys: this.window.Object.keys,
        getOwnPropertySymbols: this.window.Object.getOwnPropertySymbols,
        isArray: this.window.Array.isArray,
        setPrototypeOf: this.window.Object.setPrototypeOf,
        isExtensible: this.window.Object.isExtensible,
        Map: this.window.Map,
        Proxy: this.window.Proxy
      }, this.worker = _7c28484a67f2, this.bareClient = _345b86d023ff, this.fetch = new _0e5778865cf4(this), 
      this.xhr = new _cb244729f065(this), this.idb = new _fe849f9843a0(this), this.history = new _dc6763743b39(this), 
      this.element = new _8ca2f7053b4c(this), this.node = new _ab25262386f4(this), this.document = new _605dd1c030d1(this), 
      this.function = new _85455cfc576a(this), this.object = new _2a4f540dd508(this), 
      this.websocket = new _5a3edd75e06f(this), this.message = new _9c64d014ebf8(this), 
      this.navigator = new _1785ea242807(this), this.eventSource = new _38eee7c409ff(this), 
      this.attribute = new _54e76bafef57(this), this.url = new _674c88514f54(this), this.workers = new _f366580d0167(this), 
      this.location = new _69105fb74183(this), this.storage = new _afae99220586(this), 
      this.style = new _6d83f709066d(this);
    }
    override(_96d03707f76f, _345b86d023ff, _7c28484a67f2, _5966ca9ce684) {
      let _ef50f6afc0ab = this.wrap(_96d03707f76f, _345b86d023ff, _7c28484a67f2, _5966ca9ce684);
      return _96d03707f76f[_345b86d023ff] = _ef50f6afc0ab, _ef50f6afc0ab;
    }
    overrideDescriptor(_96d03707f76f, _345b86d023ff, _7c28484a67f2 = {}) {
      let _5966ca9ce684 = this.wrapDescriptor(_96d03707f76f, _345b86d023ff, _7c28484a67f2);
      return _5966ca9ce684 ? (this.nativeMethods.defineProperty(_96d03707f76f, _345b86d023ff, _5966ca9ce684), 
      _5966ca9ce684) : {};
    }
    wrap(_96d03707f76f, _345b86d023ff, _7c28484a67f2, _5966ca9ce684 = !1) {
      let _ef50f6afc0ab = _96d03707f76f[_345b86d023ff];
      if (!_ef50f6afc0ab) return _ef50f6afc0ab;
      let _a3bae248626a = "prototype" in _ef50f6afc0ab ? function() {
        return _7c28484a67f2(_ef50f6afc0ab, this, [ ...arguments ]);
      } : {
        attach() {
          return _7c28484a67f2(_ef50f6afc0ab, this, [ ...arguments ]);
        }
      }.attach;
      return _5966ca9ce684 && (_a3bae248626a.prototype = _ef50f6afc0ab.prototype, _a3bae248626a.prototype.constructor = _a3bae248626a), 
      this.emit("wrap", _ef50f6afc0ab, _a3bae248626a, _5966ca9ce684), _a3bae248626a;
    }
    wrapDescriptor(_96d03707f76f, _345b86d023ff, _7c28484a67f2 = {}) {
      let _5966ca9ce684 = this.nativeMethods.getOwnPropertyDescriptor(_96d03707f76f, _345b86d023ff);
      if (!_5966ca9ce684) return !1;
      for (let _96d03707f76f in _7c28484a67f2) _96d03707f76f in _5966ca9ce684 && (_96d03707f76f === "get" || _96d03707f76f === "set" ? _5966ca9ce684[_96d03707f76f] = this.wrap(_5966ca9ce684, _96d03707f76f, _7c28484a67f2[_96d03707f76f]) : _5966ca9ce684[_96d03707f76f] = typeof _7c28484a67f2[_96d03707f76f] == "function" ? _7c28484a67f2[_96d03707f76f](_5966ca9ce684[_96d03707f76f]) : _7c28484a67f2[_96d03707f76f]);
      return _5966ca9ce684;
    }
  }, _25e515267655 = _5329b9547148;
  typeof self == "object" && (self.UVClient = _5329b9547148);
})();
