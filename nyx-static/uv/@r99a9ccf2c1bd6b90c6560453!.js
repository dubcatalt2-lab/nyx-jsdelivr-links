"use strict";

(() => {
  var _8ffa921e40eb = Object.create;
  var _c331fbac9a70 = Object.defineProperty;
  var _f9d1bc577e59 = Object.getOwnPropertyDescriptor;
  var _fdd1e7c9091b = Object.getOwnPropertyNames;
  var _0c2d9a15385c = Object.getPrototypeOf, _53f7585e9797 = Object.prototype.hasOwnProperty;
  var et = (_8ffa921e40eb, _c331fbac9a70) => () => (_c331fbac9a70 || _8ffa921e40eb((_c331fbac9a70 = {
    exports: {}
  }).exports, _c331fbac9a70), _c331fbac9a70.exports);
  var tt = (_8ffa921e40eb, _0c2d9a15385c, _e434b087a60b, _c0b656f59244) => {
    if (_0c2d9a15385c && typeof _0c2d9a15385c == "object" || typeof _0c2d9a15385c == "function") for (let _11297093c840 of _fdd1e7c9091b(_0c2d9a15385c)) !_53f7585e9797.call(_8ffa921e40eb, _11297093c840) && _11297093c840 !== _e434b087a60b && _c331fbac9a70(_8ffa921e40eb, _11297093c840, {
      get: () => _0c2d9a15385c[_11297093c840],
      enumerable: !(_c0b656f59244 = _f9d1bc577e59(_0c2d9a15385c, _11297093c840)) || _c0b656f59244.enumerable
    });
    return _8ffa921e40eb;
  };
  var m = (_f9d1bc577e59, _fdd1e7c9091b, _53f7585e9797) => (_53f7585e9797 = _f9d1bc577e59 != null ? _8ffa921e40eb(_0c2d9a15385c(_f9d1bc577e59)) : {}, 
  tt(_fdd1e7c9091b || !_f9d1bc577e59 || !_f9d1bc577e59.__esModule ? _c331fbac9a70(_53f7585e9797, "default", {
    value: _f9d1bc577e59,
    enumerable: !0
  }) : _53f7585e9797, _f9d1bc577e59));
  var _e434b087a60b = et((_8ffa921e40eb, _c331fbac9a70) => {
    "use strict";
    var _f9d1bc577e59 = typeof Reflect == "object" ? Reflect : null, _fdd1e7c9091b = _f9d1bc577e59 && typeof _f9d1bc577e59.apply == "function" ? _f9d1bc577e59.apply : function(_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) {
      return Function.prototype.apply.call(_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59);
    }, _0c2d9a15385c;
    _f9d1bc577e59 && typeof _f9d1bc577e59.ownKeys == "function" ? _0c2d9a15385c = _f9d1bc577e59.ownKeys : Object.getOwnPropertySymbols ? _0c2d9a15385c = function(_8ffa921e40eb) {
      return Object.getOwnPropertyNames(_8ffa921e40eb).concat(Object.getOwnPropertySymbols(_8ffa921e40eb));
    } : _0c2d9a15385c = function(_8ffa921e40eb) {
      return Object.getOwnPropertyNames(_8ffa921e40eb);
    };
    function rt(_8ffa921e40eb) {
      console && console.warn && console.warn(_8ffa921e40eb);
    }
    var _53f7585e9797 = Number.isNaN || function(_8ffa921e40eb) {
      return _8ffa921e40eb !== _8ffa921e40eb;
    };
    function d() {
      d.init.call(this);
    }
    _c331fbac9a70.exports = d;
    _c331fbac9a70.exports.once = st;
    d.EventEmitter = d;
    d.prototype._events = void 0;
    d.prototype._eventsCount = 0;
    d.prototype._maxListeners = void 0;
    var _e434b087a60b = 10;
    function P(_8ffa921e40eb) {
      if (typeof _8ffa921e40eb != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof _8ffa921e40eb);
    }
    Object.defineProperty(d, "defaultMaxListeners", {
      enumerable: !0,
      get: function() {
        return _e434b087a60b;
      },
      set: function(_8ffa921e40eb) {
        if (typeof _8ffa921e40eb != "number" || _8ffa921e40eb < 0 || _53f7585e9797(_8ffa921e40eb)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + _8ffa921e40eb + ".");
        _e434b087a60b = _8ffa921e40eb;
      }
    });
    d.init = function() {
      (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), 
      this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
    };
    d.prototype.setMaxListeners = function(_8ffa921e40eb) {
      if (typeof _8ffa921e40eb != "number" || _8ffa921e40eb < 0 || _53f7585e9797(_8ffa921e40eb)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + _8ffa921e40eb + ".");
      return this._maxListeners = _8ffa921e40eb, this;
    };
    function J(_8ffa921e40eb) {
      return _8ffa921e40eb._maxListeners === void 0 ? d.defaultMaxListeners : _8ffa921e40eb._maxListeners;
    }
    d.prototype.getMaxListeners = function() {
      return J(this);
    };
    d.prototype.emit = function(_8ffa921e40eb) {
      for (var _c331fbac9a70 = [], _f9d1bc577e59 = 1; _f9d1bc577e59 < arguments.length; _f9d1bc577e59++) _c331fbac9a70.push(arguments[_f9d1bc577e59]);
      var _0c2d9a15385c = _8ffa921e40eb === "error", _53f7585e9797 = this._events;
      if (_53f7585e9797 !== void 0) _0c2d9a15385c = _0c2d9a15385c && _53f7585e9797.error === void 0; else if (!_0c2d9a15385c) return !1;
      if (_0c2d9a15385c) {
        var _e434b087a60b;
        if (_c331fbac9a70.length > 0 && (_e434b087a60b = _c331fbac9a70[0]), _e434b087a60b instanceof Error) throw _e434b087a60b;
        var _c0b656f59244 = new Error("Unhandled error." + (_e434b087a60b ? " (" + _e434b087a60b.message + ")" : ""));
        throw _c0b656f59244.context = _e434b087a60b, _c0b656f59244;
      }
      var _11297093c840 = _53f7585e9797[_8ffa921e40eb];
      if (_11297093c840 === void 0) return !1;
      if (typeof _11297093c840 == "function") _fdd1e7c9091b(_11297093c840, this, _c331fbac9a70); else for (var _f417c1c28204 = _11297093c840.length, _b2d9840f3e8e = re(_11297093c840, _f417c1c28204), _f9d1bc577e59 = 0; _f9d1bc577e59 < _f417c1c28204; ++_f9d1bc577e59) _fdd1e7c9091b(_b2d9840f3e8e[_f9d1bc577e59], this, _c331fbac9a70);
      return !0;
    };
    function Y(_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59, _fdd1e7c9091b) {
      var _0c2d9a15385c, _53f7585e9797, _e434b087a60b;
      if (P(_f9d1bc577e59), _53f7585e9797 = _8ffa921e40eb._events, _53f7585e9797 === void 0 ? (_53f7585e9797 = _8ffa921e40eb._events = Object.create(null), 
      _8ffa921e40eb._eventsCount = 0) : (_53f7585e9797.newListener !== void 0 && (_8ffa921e40eb.emit("newListener", _c331fbac9a70, _f9d1bc577e59.listener ? _f9d1bc577e59.listener : _f9d1bc577e59), 
      _53f7585e9797 = _8ffa921e40eb._events), _e434b087a60b = _53f7585e9797[_c331fbac9a70]), 
      _e434b087a60b === void 0) _e434b087a60b = _53f7585e9797[_c331fbac9a70] = _f9d1bc577e59, 
      ++_8ffa921e40eb._eventsCount; else if (typeof _e434b087a60b == "function" ? _e434b087a60b = _53f7585e9797[_c331fbac9a70] = _fdd1e7c9091b ? [ _f9d1bc577e59, _e434b087a60b ] : [ _e434b087a60b, _f9d1bc577e59 ] : _fdd1e7c9091b ? _e434b087a60b.unshift(_f9d1bc577e59) : _e434b087a60b.push(_f9d1bc577e59), 
      _0c2d9a15385c = J(_8ffa921e40eb), _0c2d9a15385c > 0 && _e434b087a60b.length > _0c2d9a15385c && !_e434b087a60b.warned) {
        _e434b087a60b.warned = !0;
        var _c0b656f59244 = new Error("Possible EventEmitter memory leak detected. " + _e434b087a60b.length + " " + String(_c331fbac9a70) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        _c0b656f59244.name = "MaxListenersExceededWarning", _c0b656f59244.emitter = _8ffa921e40eb, 
        _c0b656f59244.type = _c331fbac9a70, _c0b656f59244.count = _e434b087a60b.length, 
        rt(_c0b656f59244);
      }
      return _8ffa921e40eb;
    }
    d.prototype.addListener = function(_8ffa921e40eb, _c331fbac9a70) {
      return Y(this, _8ffa921e40eb, _c331fbac9a70, !1);
    };
    d.prototype.on = d.prototype.addListener;
    d.prototype.prependListener = function(_8ffa921e40eb, _c331fbac9a70) {
      return Y(this, _8ffa921e40eb, _c331fbac9a70, !0);
    };
    function ot() {
      if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 
      arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
    }
    function Z(_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) {
      var _fdd1e7c9091b = {
        fired: !1,
        wrapFn: void 0,
        target: _8ffa921e40eb,
        type: _c331fbac9a70,
        listener: _f9d1bc577e59
      }, _0c2d9a15385c = ot.bind(_fdd1e7c9091b);
      return _0c2d9a15385c.listener = _f9d1bc577e59, _fdd1e7c9091b.wrapFn = _0c2d9a15385c, 
      _0c2d9a15385c;
    }
    d.prototype.once = function(_8ffa921e40eb, _c331fbac9a70) {
      return P(_c331fbac9a70), this.on(_8ffa921e40eb, Z(this, _8ffa921e40eb, _c331fbac9a70)), 
      this;
    };
    d.prototype.prependOnceListener = function(_8ffa921e40eb, _c331fbac9a70) {
      return P(_c331fbac9a70), this.prependListener(_8ffa921e40eb, Z(this, _8ffa921e40eb, _c331fbac9a70)), 
      this;
    };
    d.prototype.removeListener = function(_8ffa921e40eb, _c331fbac9a70) {
      var _f9d1bc577e59, _fdd1e7c9091b, _0c2d9a15385c, _53f7585e9797, _e434b087a60b;
      if (P(_c331fbac9a70), _fdd1e7c9091b = this._events, _fdd1e7c9091b === void 0) return this;
      if (_f9d1bc577e59 = _fdd1e7c9091b[_8ffa921e40eb], _f9d1bc577e59 === void 0) return this;
      if (_f9d1bc577e59 === _c331fbac9a70 || _f9d1bc577e59.listener === _c331fbac9a70) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete _fdd1e7c9091b[_8ffa921e40eb], 
      _fdd1e7c9091b.removeListener && this.emit("removeListener", _8ffa921e40eb, _f9d1bc577e59.listener || _c331fbac9a70)); else if (typeof _f9d1bc577e59 != "function") {
        for (_0c2d9a15385c = -1, _53f7585e9797 = _f9d1bc577e59.length - 1; _53f7585e9797 >= 0; _53f7585e9797--) if (_f9d1bc577e59[_53f7585e9797] === _c331fbac9a70 || _f9d1bc577e59[_53f7585e9797].listener === _c331fbac9a70) {
          _e434b087a60b = _f9d1bc577e59[_53f7585e9797].listener, _0c2d9a15385c = _53f7585e9797;
          break;
        }
        if (_0c2d9a15385c < 0) return this;
        _0c2d9a15385c === 0 ? _f9d1bc577e59.shift() : nt(_f9d1bc577e59, _0c2d9a15385c), 
        _f9d1bc577e59.length === 1 && (_fdd1e7c9091b[_8ffa921e40eb] = _f9d1bc577e59[0]), 
        _fdd1e7c9091b.removeListener !== void 0 && this.emit("removeListener", _8ffa921e40eb, _e434b087a60b || _c331fbac9a70);
      }
      return this;
    };
    d.prototype.off = d.prototype.removeListener;
    d.prototype.removeAllListeners = function(_8ffa921e40eb) {
      var _c331fbac9a70, _f9d1bc577e59, _fdd1e7c9091b;
      if (_f9d1bc577e59 = this._events, _f9d1bc577e59 === void 0) return this;
      if (_f9d1bc577e59.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), 
      this._eventsCount = 0) : _f9d1bc577e59[_8ffa921e40eb] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete _f9d1bc577e59[_8ffa921e40eb]), 
      this;
      if (arguments.length === 0) {
        var _0c2d9a15385c = Object.keys(_f9d1bc577e59), _53f7585e9797;
        for (_fdd1e7c9091b = 0; _fdd1e7c9091b < _0c2d9a15385c.length; ++_fdd1e7c9091b) _53f7585e9797 = _0c2d9a15385c[_fdd1e7c9091b], 
        _53f7585e9797 !== "removeListener" && this.removeAllListeners(_53f7585e9797);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), 
        this._eventsCount = 0, this;
      }
      if (_c331fbac9a70 = _f9d1bc577e59[_8ffa921e40eb], typeof _c331fbac9a70 == "function") this.removeListener(_8ffa921e40eb, _c331fbac9a70); else if (_c331fbac9a70 !== void 0) for (_fdd1e7c9091b = _c331fbac9a70.length - 1; _fdd1e7c9091b >= 0; _fdd1e7c9091b--) this.removeListener(_8ffa921e40eb, _c331fbac9a70[_fdd1e7c9091b]);
      return this;
    };
    function ee(_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) {
      var _fdd1e7c9091b = _8ffa921e40eb._events;
      if (_fdd1e7c9091b === void 0) return [];
      var _0c2d9a15385c = _fdd1e7c9091b[_c331fbac9a70];
      return _0c2d9a15385c === void 0 ? [] : typeof _0c2d9a15385c == "function" ? _f9d1bc577e59 ? [ _0c2d9a15385c.listener || _0c2d9a15385c ] : [ _0c2d9a15385c ] : _f9d1bc577e59 ? it(_0c2d9a15385c) : re(_0c2d9a15385c, _0c2d9a15385c.length);
    }
    d.prototype.listeners = function(_8ffa921e40eb) {
      return ee(this, _8ffa921e40eb, !0);
    };
    d.prototype.rawListeners = function(_8ffa921e40eb) {
      return ee(this, _8ffa921e40eb, !1);
    };
    d.listenerCount = function(_8ffa921e40eb, _c331fbac9a70) {
      return typeof _8ffa921e40eb.listenerCount == "function" ? _8ffa921e40eb.listenerCount(_c331fbac9a70) : te.call(_8ffa921e40eb, _c331fbac9a70);
    };
    d.prototype.listenerCount = te;
    function te(_8ffa921e40eb) {
      var _c331fbac9a70 = this._events;
      if (_c331fbac9a70 !== void 0) {
        var _f9d1bc577e59 = _c331fbac9a70[_8ffa921e40eb];
        if (typeof _f9d1bc577e59 == "function") return 1;
        if (_f9d1bc577e59 !== void 0) return _f9d1bc577e59.length;
      }
      return 0;
    }
    d.prototype.eventNames = function() {
      return this._eventsCount > 0 ? _0c2d9a15385c(this._events) : [];
    };
    function re(_8ffa921e40eb, _c331fbac9a70) {
      for (var _f9d1bc577e59 = new Array(_c331fbac9a70), _fdd1e7c9091b = 0; _fdd1e7c9091b < _c331fbac9a70; ++_fdd1e7c9091b) _f9d1bc577e59[_fdd1e7c9091b] = _8ffa921e40eb[_fdd1e7c9091b];
      return _f9d1bc577e59;
    }
    function nt(_8ffa921e40eb, _c331fbac9a70) {
      for (;_c331fbac9a70 + 1 < _8ffa921e40eb.length; _c331fbac9a70++) _8ffa921e40eb[_c331fbac9a70] = _8ffa921e40eb[_c331fbac9a70 + 1];
      _8ffa921e40eb.pop();
    }
    function it(_8ffa921e40eb) {
      for (var _c331fbac9a70 = new Array(_8ffa921e40eb.length), _f9d1bc577e59 = 0; _f9d1bc577e59 < _c331fbac9a70.length; ++_f9d1bc577e59) _c331fbac9a70[_f9d1bc577e59] = _8ffa921e40eb[_f9d1bc577e59].listener || _8ffa921e40eb[_f9d1bc577e59];
      return _c331fbac9a70;
    }
    function st(_8ffa921e40eb, _c331fbac9a70) {
      return new Promise(function(_f9d1bc577e59, _fdd1e7c9091b) {
        function n(_f9d1bc577e59) {
          _8ffa921e40eb.removeListener(_c331fbac9a70, o), _fdd1e7c9091b(_f9d1bc577e59);
        }
        function o() {
          typeof _8ffa921e40eb.removeListener == "function" && _8ffa921e40eb.removeListener("error", n), 
          _f9d1bc577e59([].slice.call(arguments));
        }
        oe(_8ffa921e40eb, _c331fbac9a70, o, {
          once: !0
        }), _c331fbac9a70 !== "error" && at(_8ffa921e40eb, n, {
          once: !0
        });
      });
    }
    function at(_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) {
      typeof _8ffa921e40eb.on == "function" && oe(_8ffa921e40eb, "error", _c331fbac9a70, _f9d1bc577e59);
    }
    function oe(_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59, _fdd1e7c9091b) {
      if (typeof _8ffa921e40eb.on == "function") _fdd1e7c9091b.once ? _8ffa921e40eb.once(_c331fbac9a70, _f9d1bc577e59) : _8ffa921e40eb.on(_c331fbac9a70, _f9d1bc577e59); else if (typeof _8ffa921e40eb.addEventListener == "function") _8ffa921e40eb.addEventListener(_c331fbac9a70, function n(_0c2d9a15385c) {
        _fdd1e7c9091b.once && _8ffa921e40eb.removeEventListener(_c331fbac9a70, n), _f9d1bc577e59(_0c2d9a15385c);
      }); else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof _8ffa921e40eb);
    }
  });
  var _c0b656f59244 = m(_e434b087a60b(), 1);
  var _11297093c840 = class {
    #_8ffa921e40eb;
    #_c331fbac9a70;
    constructor(_8ffa921e40eb = {}, _c331fbac9a70 = null, _f9d1bc577e59 = null) {
      this.#_8ffa921e40eb = !1, this.#_c331fbac9a70 = null, this.data = _8ffa921e40eb, 
      this.target = _c331fbac9a70, this.that = _f9d1bc577e59;
    }
    get intercepted() {
      return this.#_8ffa921e40eb;
    }
    get returnValue() {
      return this.#_c331fbac9a70;
    }
    respondWith(_8ffa921e40eb) {
      this.#_c331fbac9a70 = _8ffa921e40eb, this.#_8ffa921e40eb = !0;
    }
  }, _f417c1c28204 = _11297093c840;
  var _b2d9840f3e8e = class extends _c0b656f59244.default {
    constructor(_8ffa921e40eb) {
      super(), this.ctx = _8ffa921e40eb, this.window = _8ffa921e40eb.window, this.document = this.window.document, 
      this.Document = this.window.Document || {}, this.DOMParser = this.window.DOMParser || {}, 
      this.docProto = this.Document.prototype || {}, this.domProto = this.DOMParser.prototype || {}, 
      this.title = _8ffa921e40eb.nativeMethods.getOwnPropertyDescriptor(this.docProto, "title"), 
      this.cookie = _8ffa921e40eb.nativeMethods.getOwnPropertyDescriptor(this.docProto, "cookie"), 
      this.referrer = _8ffa921e40eb.nativeMethods.getOwnPropertyDescriptor(this.docProto, "referrer"), 
      this.domain = _8ffa921e40eb.nativeMethods.getOwnPropertyDescriptor(this.docProto, "domain"), 
      this.documentURI = _8ffa921e40eb.nativeMethods.getOwnPropertyDescriptor(this.docProto, "documentURI"), 
      this.write = this.docProto.write, this.writeln = this.docProto.writeln, this.querySelector = this.docProto.querySelector, 
      this.querySelectorAll = this.docProto.querySelectorAll, this.parseFromString = this.domProto.parseFromString, 
      this.URL = _8ffa921e40eb.nativeMethods.getOwnPropertyDescriptor(this.docProto, "URL");
    }
    overrideParseFromString() {
      this.ctx.override(this.domProto, "parseFromString", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (2 > _f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b, _0c2d9a15385c] = _f9d1bc577e59, _53f7585e9797 = new _f417c1c28204({
          string: _fdd1e7c9091b,
          type: _0c2d9a15385c
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("parseFromString", _53f7585e9797), _53f7585e9797.intercepted ? _53f7585e9797.returnValue : _53f7585e9797.target.call(_53f7585e9797.that, _53f7585e9797.data.string, _53f7585e9797.data.type);
      });
    }
    overrideQuerySelector() {
      this.ctx.override(this.docProto, "querySelector", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (!_f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b] = _f9d1bc577e59, _0c2d9a15385c = new _f417c1c28204({
          selectors: _fdd1e7c9091b
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("querySelector", _0c2d9a15385c), _0c2d9a15385c.intercepted ? _0c2d9a15385c.returnValue : _0c2d9a15385c.target.call(_0c2d9a15385c.that, _0c2d9a15385c.data.selectors);
      });
    }
    overrideDomain() {
      this.ctx.overrideDescriptor(this.docProto, "domain", {
        get: (_8ffa921e40eb, _c331fbac9a70) => {
          let _f9d1bc577e59 = new _f417c1c28204({
            value: _8ffa921e40eb.call(_c331fbac9a70)
          }, _8ffa921e40eb, _c331fbac9a70);
          return this.emit("getDomain", _f9d1bc577e59), _f9d1bc577e59.intercepted ? _f9d1bc577e59.returnValue : _f9d1bc577e59.data.value;
        },
        set: (_8ffa921e40eb, _c331fbac9a70, [_f9d1bc577e59]) => {
          let _fdd1e7c9091b = new _f417c1c28204({
            value: _f9d1bc577e59
          }, _8ffa921e40eb, _c331fbac9a70);
          return this.emit("setDomain", _fdd1e7c9091b), _fdd1e7c9091b.intercepted ? _fdd1e7c9091b.returnValue : _fdd1e7c9091b.target.call(_fdd1e7c9091b.that, _fdd1e7c9091b.data.value);
        }
      });
    }
    overrideReferrer() {
      this.ctx.overrideDescriptor(this.docProto, "referrer", {
        get: (_8ffa921e40eb, _c331fbac9a70) => {
          let _f9d1bc577e59 = new _f417c1c28204({
            value: _8ffa921e40eb.call(_c331fbac9a70)
          }, _8ffa921e40eb, _c331fbac9a70);
          return this.emit("referrer", _f9d1bc577e59), _f9d1bc577e59.intercepted ? _f9d1bc577e59.returnValue : _f9d1bc577e59.data.value;
        }
      });
    }
    overrideCreateTreeWalker() {
      this.ctx.override(this.docProto, "createTreeWalker", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (!_f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b, _0c2d9a15385c = 4294967295, _53f7585e9797, _e434b087a60b] = _f9d1bc577e59, _c0b656f59244 = new _f417c1c28204({
          root: _fdd1e7c9091b,
          show: _0c2d9a15385c,
          filter: _53f7585e9797,
          expandEntityReferences: _e434b087a60b
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("createTreeWalker", _c0b656f59244), _c0b656f59244.intercepted ? _c0b656f59244.returnValue : _c0b656f59244.target.call(_c0b656f59244.that, _c0b656f59244.data.root, _c0b656f59244.data.show, _c0b656f59244.data.filter, _c0b656f59244.data.expandEntityReferences);
      });
    }
    overrideWrite() {
      this.ctx.override(this.docProto, "write", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (!_f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [..._fdd1e7c9091b] = _f9d1bc577e59, _0c2d9a15385c = new _f417c1c28204({
          html: _fdd1e7c9091b
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("write", _0c2d9a15385c), _0c2d9a15385c.intercepted ? _0c2d9a15385c.returnValue : _0c2d9a15385c.target.apply(_0c2d9a15385c.that, _0c2d9a15385c.data.html);
      }), this.ctx.override(this.docProto, "writeln", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (!_f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [..._fdd1e7c9091b] = _f9d1bc577e59, _0c2d9a15385c = new _f417c1c28204({
          html: _fdd1e7c9091b
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("writeln", _0c2d9a15385c), _0c2d9a15385c.intercepted ? _0c2d9a15385c.returnValue : _0c2d9a15385c.target.apply(_0c2d9a15385c.that, _0c2d9a15385c.data.html);
      });
    }
    overrideDocumentURI() {
      this.ctx.overrideDescriptor(this.docProto, "documentURI", {
        get: (_8ffa921e40eb, _c331fbac9a70) => {
          let _f9d1bc577e59 = new _f417c1c28204({
            value: _8ffa921e40eb.call(_c331fbac9a70)
          }, _8ffa921e40eb, _c331fbac9a70);
          return this.emit("documentURI", _f9d1bc577e59), _f9d1bc577e59.intercepted ? _f9d1bc577e59.returnValue : _f9d1bc577e59.data.value;
        }
      });
    }
    overrideURL() {
      this.ctx.overrideDescriptor(this.docProto, "URL", {
        get: (_8ffa921e40eb, _c331fbac9a70) => {
          let _f9d1bc577e59 = new _f417c1c28204({
            value: _8ffa921e40eb.call(_c331fbac9a70)
          }, _8ffa921e40eb, _c331fbac9a70);
          return this.emit("url", _f9d1bc577e59), _f9d1bc577e59.intercepted ? _f9d1bc577e59.returnValue : _f9d1bc577e59.data.value;
        }
      });
    }
    overrideCookie() {
      this.ctx.overrideDescriptor(this.docProto, "cookie", {
        get: (_8ffa921e40eb, _c331fbac9a70) => {
          let _f9d1bc577e59 = new _f417c1c28204({
            value: _8ffa921e40eb.call(_c331fbac9a70)
          }, _8ffa921e40eb, _c331fbac9a70);
          return this.emit("getCookie", _f9d1bc577e59), _f9d1bc577e59.intercepted ? _f9d1bc577e59.returnValue : _f9d1bc577e59.data.value;
        },
        set: (_8ffa921e40eb, _c331fbac9a70, [_f9d1bc577e59]) => {
          let _fdd1e7c9091b = new _f417c1c28204({
            value: _f9d1bc577e59
          }, _8ffa921e40eb, _c331fbac9a70);
          return this.emit("setCookie", _fdd1e7c9091b), _fdd1e7c9091b.intercepted ? _fdd1e7c9091b.returnValue : _fdd1e7c9091b.target.call(_fdd1e7c9091b.that, _fdd1e7c9091b.data.value);
        }
      });
    }
    overrideTitle() {
      this.ctx.overrideDescriptor(this.docProto, "title", {
        get: (_8ffa921e40eb, _c331fbac9a70) => {
          let _f9d1bc577e59 = new _f417c1c28204({
            value: _8ffa921e40eb.call(_c331fbac9a70)
          }, _8ffa921e40eb, _c331fbac9a70);
          return this.emit("getTitle", _f9d1bc577e59), _f9d1bc577e59.intercepted ? _f9d1bc577e59.returnValue : _f9d1bc577e59.data.value;
        },
        set: (_8ffa921e40eb, _c331fbac9a70, [_f9d1bc577e59]) => {
          let _fdd1e7c9091b = new _f417c1c28204({
            value: _f9d1bc577e59
          }, _8ffa921e40eb, _c331fbac9a70);
          return this.emit("setTitle", _fdd1e7c9091b), _fdd1e7c9091b.intercepted ? _fdd1e7c9091b.returnValue : _fdd1e7c9091b.target.call(_fdd1e7c9091b.that, _fdd1e7c9091b.data.value);
        }
      });
    }
  }, _432d3a50f9bf = _b2d9840f3e8e;
  var _6fa51b82c788 = m(_e434b087a60b(), 1);
  var _0ef1c0177571 = class extends _6fa51b82c788.default {
    constructor(_8ffa921e40eb) {
      super(), this.ctx = _8ffa921e40eb, this.window = _8ffa921e40eb.window, this.Audio = this.window.Audio, 
      this.Element = this.window.Element, this.elemProto = this.Element ? this.Element.prototype : {}, 
      this.innerHTML = _8ffa921e40eb.nativeMethods.getOwnPropertyDescriptor(this.elemProto, "innerHTML"), 
      this.outerHTML = _8ffa921e40eb.nativeMethods.getOwnPropertyDescriptor(this.elemProto, "outerHTML"), 
      this.setAttribute = this.elemProto.setAttribute, this.getAttribute = this.elemProto.getAttribute, 
      this.removeAttribute = this.elemProto.removeAttribute, this.hasAttribute = this.elemProto.hasAttribute, 
      this.querySelector = this.elemProto.querySelector, this.querySelectorAll = this.elemProto.querySelectorAll, 
      this.insertAdjacentHTML = this.elemProto.insertAdjacentHTML, this.insertAdjacentText = this.elemProto.insertAdjacentText;
    }
    overrideQuerySelector() {
      this.ctx.override(this.elemProto, "querySelector", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (!_f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b] = _f9d1bc577e59, _0c2d9a15385c = new _f417c1c28204({
          selectors: _fdd1e7c9091b
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("querySelector", _0c2d9a15385c), _0c2d9a15385c.intercepted ? _0c2d9a15385c.returnValue : _0c2d9a15385c.target.call(_0c2d9a15385c.that, _0c2d9a15385c.data.selectors);
      });
    }
    overrideAttribute() {
      this.ctx.override(this.elemProto, "getAttribute", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (!_f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b] = _f9d1bc577e59, _0c2d9a15385c = new _f417c1c28204({
          name: _fdd1e7c9091b
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("getAttribute", _0c2d9a15385c), _0c2d9a15385c.intercepted ? _0c2d9a15385c.returnValue : _0c2d9a15385c.target.call(_0c2d9a15385c.that, _0c2d9a15385c.data.name);
      }), this.ctx.override(this.elemProto, "setAttribute", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (2 > _f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b, _0c2d9a15385c] = _f9d1bc577e59, _53f7585e9797 = new _f417c1c28204({
          name: _fdd1e7c9091b,
          value: _0c2d9a15385c
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("setAttribute", _53f7585e9797), _53f7585e9797.intercepted ? _53f7585e9797.returnValue : _53f7585e9797.target.call(_53f7585e9797.that, _53f7585e9797.data.name, _53f7585e9797.data.value);
      }), this.ctx.override(this.elemProto, "hasAttribute", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (!_f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b] = _f9d1bc577e59, _0c2d9a15385c = new _f417c1c28204({
          name: _fdd1e7c9091b
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("hasAttribute", _0c2d9a15385c), _0c2d9a15385c.intercepted ? _0c2d9a15385c.returnValue : _0c2d9a15385c.target.call(_0c2d9a15385c.that, _0c2d9a15385c.data.name);
      }), this.ctx.override(this.elemProto, "removeAttribute", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (!_f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b] = _f9d1bc577e59, _0c2d9a15385c = new _f417c1c28204({
          name: _fdd1e7c9091b
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("removeAttribute", _0c2d9a15385c), _0c2d9a15385c.intercepted ? _0c2d9a15385c.returnValue : _0c2d9a15385c.target.call(_0c2d9a15385c.that, _0c2d9a15385c.data.name);
      });
    }
    overrideAudio() {
      this.ctx.override(this.window, "Audio", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (!_f9d1bc577e59.length) return new _8ffa921e40eb(..._f9d1bc577e59);
        let [_fdd1e7c9091b] = _f9d1bc577e59, _0c2d9a15385c = new _f417c1c28204({
          url: _fdd1e7c9091b
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("audio", _0c2d9a15385c), _0c2d9a15385c.intercepted ? _0c2d9a15385c.returnValue : new _0c2d9a15385c.target(_0c2d9a15385c.data.url);
      }, !0);
    }
    overrideHtml() {
      this.hookProperty(this.Element, "innerHTML", {
        get: (_8ffa921e40eb, _c331fbac9a70) => {
          let _f9d1bc577e59 = new _f417c1c28204({
            value: _8ffa921e40eb.call(_c331fbac9a70)
          }, _8ffa921e40eb, _c331fbac9a70);
          return this.emit("getInnerHTML", _f9d1bc577e59), _f9d1bc577e59.intercepted ? _f9d1bc577e59.returnValue : _f9d1bc577e59.data.value;
        },
        set: (_8ffa921e40eb, _c331fbac9a70, [_f9d1bc577e59]) => {
          let _fdd1e7c9091b = new _f417c1c28204({
            value: _f9d1bc577e59
          }, _8ffa921e40eb, _c331fbac9a70);
          if (this.emit("setInnerHTML", _fdd1e7c9091b), _fdd1e7c9091b.intercepted) return _fdd1e7c9091b.returnValue;
          _8ffa921e40eb.call(_c331fbac9a70, _fdd1e7c9091b.data.value);
        }
      }), this.hookProperty(this.Element, "outerHTML", {
        get: (_8ffa921e40eb, _c331fbac9a70) => {
          let _f9d1bc577e59 = new _f417c1c28204({
            value: _8ffa921e40eb.call(_c331fbac9a70)
          }, _8ffa921e40eb, _c331fbac9a70);
          return this.emit("getOuterHTML", _f9d1bc577e59), _f9d1bc577e59.intercepted ? _f9d1bc577e59.returnValue : _f9d1bc577e59.data.value;
        },
        set: (_8ffa921e40eb, _c331fbac9a70, [_f9d1bc577e59]) => {
          let _fdd1e7c9091b = new _f417c1c28204({
            value: _f9d1bc577e59
          }, _8ffa921e40eb, _c331fbac9a70);
          if (this.emit("setOuterHTML", _fdd1e7c9091b), _fdd1e7c9091b.intercepted) return _fdd1e7c9091b.returnValue;
          _8ffa921e40eb.call(_c331fbac9a70, _fdd1e7c9091b.data.value);
        }
      });
    }
    overrideInsertAdjacentHTML() {
      this.ctx.override(this.elemProto, "insertAdjacentHTML", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (2 > _f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b, _0c2d9a15385c] = _f9d1bc577e59, _53f7585e9797 = new _f417c1c28204({
          position: _fdd1e7c9091b,
          html: _0c2d9a15385c
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("insertAdjacentHTML", _53f7585e9797), _53f7585e9797.intercepted ? _53f7585e9797.returnValue : _53f7585e9797.target.call(_53f7585e9797.that, _53f7585e9797.data.position, _53f7585e9797.data.html);
      });
    }
    overrideInsertAdjacentText() {
      this.ctx.override(this.elemProto, "insertAdjacentText", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (2 > _f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b, _0c2d9a15385c] = _f9d1bc577e59, _53f7585e9797 = new _f417c1c28204({
          position: _fdd1e7c9091b,
          text: _0c2d9a15385c
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("insertAdjacentText", _53f7585e9797), _53f7585e9797.intercepted ? _53f7585e9797.returnValue : _53f7585e9797.target.call(_53f7585e9797.that, _53f7585e9797.data.position, _53f7585e9797.data.text);
      });
    }
    hookProperty(_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) {
      if (!_8ffa921e40eb) return !1;
      if (this.ctx.nativeMethods.isArray(_8ffa921e40eb)) {
        for (let _fdd1e7c9091b of _8ffa921e40eb) this.hookProperty(_fdd1e7c9091b, _c331fbac9a70, _f9d1bc577e59);
        return !0;
      }
      let _fdd1e7c9091b = _8ffa921e40eb.prototype;
      return this.ctx.overrideDescriptor(_fdd1e7c9091b, _c331fbac9a70, _f9d1bc577e59), 
      !0;
    }
  }, _b03f52af3e7e = _0ef1c0177571;
  var _72660037b31e = m(_e434b087a60b(), 1);
  var _d6b4d252c716 = class extends _72660037b31e.default {
    constructor(_8ffa921e40eb) {
      super(), this.ctx = _8ffa921e40eb, this.window = _8ffa921e40eb.window, this.Node = _8ffa921e40eb.window.Node || {}, 
      this.nodeProto = this.Node.prototype || {}, this.compareDocumentPosition = this.nodeProto.compareDocumentPosition, 
      this.contains = this.nodeProto.contains, this.insertBefore = this.nodeProto.insertBefore, 
      this.replaceChild = this.nodeProto.replaceChild, this.append = this.nodeProto.append, 
      this.appendChild = this.nodeProto.appendChild, this.removeChild = this.nodeProto.removeChild, 
      this.textContent = _8ffa921e40eb.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "textContent"), 
      this.parentNode = _8ffa921e40eb.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "parentNode"), 
      this.parentElement = _8ffa921e40eb.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "parentElement"), 
      this.childNodes = _8ffa921e40eb.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "childNodes"), 
      this.baseURI = _8ffa921e40eb.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "baseURI"), 
      this.previousSibling = _8ffa921e40eb.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "previousSibling"), 
      this.ownerDocument = _8ffa921e40eb.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "ownerDocument");
    }
    overrideTextContent() {
      this.ctx.overrideDescriptor(this.nodeProto, "textContent", {
        get: (_8ffa921e40eb, _c331fbac9a70) => {
          let _f9d1bc577e59 = new _f417c1c28204({
            value: _8ffa921e40eb.call(_c331fbac9a70)
          }, _8ffa921e40eb, _c331fbac9a70);
          return this.emit("getTextContent", _f9d1bc577e59), _f9d1bc577e59.intercepted ? _f9d1bc577e59.returnValue : _f9d1bc577e59.data.value;
        },
        set: (_8ffa921e40eb, _c331fbac9a70, [_f9d1bc577e59]) => {
          let _fdd1e7c9091b = new _f417c1c28204({
            value: _f9d1bc577e59
          }, _8ffa921e40eb, _c331fbac9a70);
          if (this.emit("setTextContent", _fdd1e7c9091b), _fdd1e7c9091b.intercepted) return _fdd1e7c9091b.returnValue;
          _8ffa921e40eb.call(_c331fbac9a70, _fdd1e7c9091b.data.value);
        }
      });
    }
    overrideAppend() {
      this.ctx.override(this.nodeProto, "append", (_8ffa921e40eb, _c331fbac9a70, [..._f9d1bc577e59]) => {
        let _fdd1e7c9091b = new _f417c1c28204({
          nodes: _f9d1bc577e59
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("append", _fdd1e7c9091b), _fdd1e7c9091b.intercepted ? _fdd1e7c9091b.returnValue : _fdd1e7c9091b.target.call(_fdd1e7c9091b.that, _fdd1e7c9091b.data.nodes);
      }), this.ctx.override(this.nodeProto, "appendChild", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (!_f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b] = _f9d1bc577e59, _0c2d9a15385c = new _f417c1c28204({
          node: _fdd1e7c9091b
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("appendChild", _0c2d9a15385c), _0c2d9a15385c.intercepted ? _0c2d9a15385c.returnValue : _0c2d9a15385c.target.call(_0c2d9a15385c.that, _0c2d9a15385c.data.node);
      });
    }
    overrideBaseURI() {
      this.ctx.overrideDescriptor(this.nodeProto, "baseURI", {
        get: (_8ffa921e40eb, _c331fbac9a70) => {
          let _f9d1bc577e59 = new _f417c1c28204({
            value: _8ffa921e40eb.call(_c331fbac9a70)
          }, _8ffa921e40eb, _c331fbac9a70);
          return this.emit("baseURI", _f9d1bc577e59), _f9d1bc577e59.intercepted ? _f9d1bc577e59.returnValue : _f9d1bc577e59.data.value;
        }
      });
    }
    overrideParent() {
      this.ctx.overrideDescriptor(this.nodeProto, "parentNode", {
        get: (_8ffa921e40eb, _c331fbac9a70) => {
          let _f9d1bc577e59 = new _f417c1c28204({
            node: _8ffa921e40eb.call(_c331fbac9a70)
          }, _8ffa921e40eb, _c331fbac9a70);
          return this.emit("parentNode", _f9d1bc577e59), _f9d1bc577e59.intercepted ? _f9d1bc577e59.returnValue : _f9d1bc577e59.data.node;
        }
      }), this.ctx.overrideDescriptor(this.nodeProto, "parentElement", {
        get: (_8ffa921e40eb, _c331fbac9a70) => {
          let _f9d1bc577e59 = new _f417c1c28204({
            element: _8ffa921e40eb.call(_c331fbac9a70)
          }, _8ffa921e40eb, _c331fbac9a70);
          return this.emit("parentElement", _f9d1bc577e59), _f9d1bc577e59.intercepted ? _f9d1bc577e59.returnValue : _f9d1bc577e59.data.node;
        }
      });
    }
    overrideOwnerDocument() {
      this.ctx.overrideDescriptor(this.nodeProto, "ownerDocument", {
        get: (_8ffa921e40eb, _c331fbac9a70) => {
          let _f9d1bc577e59 = new _f417c1c28204({
            document: _8ffa921e40eb.call(_c331fbac9a70)
          }, _8ffa921e40eb, _c331fbac9a70);
          return this.emit("ownerDocument", _f9d1bc577e59), _f9d1bc577e59.intercepted ? _f9d1bc577e59.returnValue : _f9d1bc577e59.data.document;
        }
      });
    }
    overrideCompareDocumentPosit1ion() {
      this.ctx.override(this.nodeProto, "compareDocumentPosition", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (!_f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b] = _f9d1bc577e59, _0c2d9a15385c = new _f417c1c28204({
          node: _fdd1e7c9091b
        }, _8ffa921e40eb, _c331fbac9a70);
        return _0c2d9a15385c.intercepted ? _0c2d9a15385c.returnValue : _0c2d9a15385c.target.call(_0c2d9a15385c.that, _0c2d9a15385c.data.node);
      });
    }
    overrideChildMethods() {
      this.ctx.override(this.nodeProto, "removeChild");
    }
  }, _06d9bdca66cc = _d6b4d252c716;
  var _a1a89872662c = m(_e434b087a60b(), 1);
  var _8cc135e4e6b3 = class extends _a1a89872662c.default {
    constructor(_8ffa921e40eb) {
      super(), this.ctx = _8ffa921e40eb, this.window = _8ffa921e40eb.window, this.Attr = this.window.Attr || {}, 
      this.attrProto = this.Attr.prototype || {}, this.value = _8ffa921e40eb.nativeMethods.getOwnPropertyDescriptor(this.attrProto, "value"), 
      this.name = _8ffa921e40eb.nativeMethods.getOwnPropertyDescriptor(this.attrProto, "name"), 
      this.getNamedItem = this.attrProto.getNamedItem || null, this.setNamedItem = this.attrProto.setNamedItem || null, 
      this.removeNamedItem = this.attrProto.removeNamedItem || null, this.getNamedItemNS = this.attrProto.getNamedItemNS || null, 
      this.setNamedItemNS = this.attrProto.setNamedItemNS || null, this.removeNamedItemNS = this.attrProto.removeNamedItemNS || null, 
      this.item = this.attrProto.item || null;
    }
    overrideNameValue() {
      this.ctx.overrideDescriptor(this.attrProto, "name", {
        get: (_8ffa921e40eb, _c331fbac9a70) => {
          let _f9d1bc577e59 = new _f417c1c28204({
            value: _8ffa921e40eb.call(_c331fbac9a70)
          }, _8ffa921e40eb, _c331fbac9a70);
          return this.emit("name", _f9d1bc577e59), _f9d1bc577e59.intercepted ? _f9d1bc577e59.returnValue : _f9d1bc577e59.data.value;
        }
      }), this.ctx.overrideDescriptor(this.attrProto, "value", {
        get: (_8ffa921e40eb, _c331fbac9a70) => {
          let _f9d1bc577e59 = new _f417c1c28204({
            name: this.name.get.call(_c331fbac9a70),
            value: _8ffa921e40eb.call(_c331fbac9a70)
          }, _8ffa921e40eb, _c331fbac9a70);
          return this.emit("getValue", _f9d1bc577e59), _f9d1bc577e59.intercepted ? _f9d1bc577e59.returnValue : _f9d1bc577e59.data.value;
        },
        set: (_8ffa921e40eb, _c331fbac9a70, [_f9d1bc577e59]) => {
          let _fdd1e7c9091b = new _f417c1c28204({
            name: this.name.get.call(_c331fbac9a70),
            value: _f9d1bc577e59
          }, _8ffa921e40eb, _c331fbac9a70);
          if (this.emit("setValue", _fdd1e7c9091b), _fdd1e7c9091b.intercepted) return _fdd1e7c9091b.returnValue;
          _fdd1e7c9091b.target.call(_fdd1e7c9091b.that, _fdd1e7c9091b.data.value);
        }
      });
    }
    overrideItemMethods() {
      this.ctx.override(this.attrProto, "getNamedItem", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (!_f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b] = _f9d1bc577e59, _0c2d9a15385c = new _f417c1c28204({
          name: _fdd1e7c9091b
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("getNamedItem", _0c2d9a15385c), _0c2d9a15385c.intercepted ? _0c2d9a15385c.returnValue : _0c2d9a15385c.target.call(_0c2d9a15385c.that, _0c2d9a15385c.data.name);
      }), this.ctx.override(this.attrProto, "setNamedItem", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (2 > _f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b, _0c2d9a15385c] = _f9d1bc577e59, _53f7585e9797 = new _f417c1c28204({
          name: _fdd1e7c9091b,
          value: _0c2d9a15385c
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("setNamedItem", _53f7585e9797), _53f7585e9797.intercepted ? _53f7585e9797.returnValue : _53f7585e9797.target.call(_53f7585e9797.that, _53f7585e9797.data.name, _53f7585e9797.data.value);
      }), this.ctx.override(this.attrProto, "removeNamedItem", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (!_f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b] = _f9d1bc577e59, _0c2d9a15385c = new _f417c1c28204({
          name: _fdd1e7c9091b
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("removeNamedItem", _0c2d9a15385c), _0c2d9a15385c.intercepted ? _0c2d9a15385c.returnValue : _0c2d9a15385c.target.call(_0c2d9a15385c.that, _0c2d9a15385c.data.name);
      }), this.ctx.override(this.attrProto, "item", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (!_f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b] = _f9d1bc577e59, _0c2d9a15385c = new _f417c1c28204({
          index: _fdd1e7c9091b
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("item", _0c2d9a15385c), _0c2d9a15385c.intercepted ? _0c2d9a15385c.returnValue : _0c2d9a15385c.target.call(_0c2d9a15385c.that, _0c2d9a15385c.data.name);
      }), this.ctx.override(this.attrProto, "getNamedItemNS", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (2 > _f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b, _0c2d9a15385c] = _f9d1bc577e59, _53f7585e9797 = new _f417c1c28204({
          namespace: _fdd1e7c9091b,
          localName: _0c2d9a15385c
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("getNamedItemNS", _53f7585e9797), _53f7585e9797.intercepted ? _53f7585e9797.returnValue : _53f7585e9797.target.call(_53f7585e9797.that, _53f7585e9797.data.namespace, _53f7585e9797.data.localName);
      }), this.ctx.override(this.attrProto, "setNamedItemNS", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (!_f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b] = _f9d1bc577e59, _0c2d9a15385c = new _f417c1c28204({
          attr: _fdd1e7c9091b
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("setNamedItemNS", _0c2d9a15385c), _0c2d9a15385c.intercepted ? _0c2d9a15385c.returnValue : _0c2d9a15385c.target.call(_0c2d9a15385c.that, _0c2d9a15385c.data.name);
      }), this.ctx.override(this.attrProto, "removeNamedItemNS", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (2 > _f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b, _0c2d9a15385c] = _f9d1bc577e59, _53f7585e9797 = new _f417c1c28204({
          namespace: _fdd1e7c9091b,
          localName: _0c2d9a15385c
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("removeNamedItemNS", _53f7585e9797), _53f7585e9797.intercepted ? _53f7585e9797.returnValue : _53f7585e9797.target.call(_53f7585e9797.that, _53f7585e9797.data.namespace, _53f7585e9797.data.localName);
      });
    }
  }, _5c718aa4723a = _8cc135e4e6b3;
  var _c1fab5c800bd = m(_e434b087a60b(), 1);
  var _faf43c81355f = class extends _c1fab5c800bd.default {
    constructor(_8ffa921e40eb) {
      super(), this.ctx = _8ffa921e40eb, this.window = _8ffa921e40eb.window, this.Function = this.window.Function, 
      this.fnProto = this.Function.prototype, this.toString = this.fnProto.toString, this.fnStrings = _8ffa921e40eb.fnStrings, 
      this.call = this.fnProto.call, this.apply = this.fnProto.apply, this.bind = this.fnProto.bind;
    }
    overrideFunction() {
      this.ctx.override(this.window, "Function", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (!_f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let _fdd1e7c9091b = _f9d1bc577e59[_f9d1bc577e59.length - 1], _0c2d9a15385c = [];
        for (let _8ffa921e40eb = 0; _8ffa921e40eb < _f9d1bc577e59.length - 1; _8ffa921e40eb++) _0c2d9a15385c.push(_f9d1bc577e59[_8ffa921e40eb]);
        let _53f7585e9797 = new _f417c1c28204({
          script: _fdd1e7c9091b,
          args: _0c2d9a15385c
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("function", _53f7585e9797), _53f7585e9797.intercepted ? _53f7585e9797.returnValue : _53f7585e9797.target.call(_53f7585e9797.that, ..._53f7585e9797.data.args, _53f7585e9797.data.script);
      }, !0);
    }
    overrideToString() {
      this.ctx.override(this.fnProto, "toString", (_8ffa921e40eb, _c331fbac9a70) => {
        let _f9d1bc577e59 = new _f417c1c28204({
          fn: _c331fbac9a70
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("toString", _f9d1bc577e59), _f9d1bc577e59.intercepted ? _f9d1bc577e59.returnValue : _f9d1bc577e59.target.call(_f9d1bc577e59.data.fn);
      });
    }
  }, _1e68dadf9922 = _faf43c81355f;
  var _addbc3c18c44 = m(_e434b087a60b(), 1);
  var _86950410d420 = class extends _addbc3c18c44.default {
    constructor(_8ffa921e40eb) {
      super(), this.ctx = _8ffa921e40eb, this.window = _8ffa921e40eb.window, this.Object = this.window.Object, 
      this.getOwnPropertyDescriptors = this.Object.getOwnPropertyDescriptors, this.getOwnPropertyDescriptor = this.Object.getOwnPropertyDescriptor, 
      this.getOwnPropertyNames = this.Object.getOwnPropertyNames;
    }
    overrideGetPropertyNames() {
      this.ctx.override(this.Object, "getOwnPropertyNames", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (!_f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b] = _f9d1bc577e59, _0c2d9a15385c = new _f417c1c28204({
          names: _8ffa921e40eb.call(_c331fbac9a70, _fdd1e7c9091b)
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("getOwnPropertyNames", _0c2d9a15385c), _0c2d9a15385c.intercepted ? _0c2d9a15385c.returnValue : _0c2d9a15385c.data.names;
      });
    }
    overrideGetOwnPropertyDescriptors() {
      this.ctx.override(this.Object, "getOwnPropertyDescriptors", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (!_f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b] = _f9d1bc577e59, _0c2d9a15385c = new _f417c1c28204({
          descriptors: _8ffa921e40eb.call(_c331fbac9a70, _fdd1e7c9091b)
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("getOwnPropertyDescriptors", _0c2d9a15385c), _0c2d9a15385c.intercepted ? _0c2d9a15385c.returnValue : _0c2d9a15385c.data.descriptors;
      });
    }
  }, _bb217456d169 = _86950410d420;
  var _2c9d62878b60 = m(_e434b087a60b(), 1);
  var _8990998dce87 = class extends _2c9d62878b60.default {
    constructor(_8ffa921e40eb) {
      super(), this.ctx = _8ffa921e40eb, this.window = _8ffa921e40eb.window, this.fetch = this.window.fetch, 
      this.Request = this.window.Request, this.Response = this.window.Response, this.Headers = this.window.Headers, 
      this.reqProto = this.Request ? this.Request.prototype : {}, this.resProto = this.Response ? this.Response.prototype : {}, 
      this.headersProto = this.Headers ? this.Headers.prototype : {}, this.reqUrl = _8ffa921e40eb.nativeMethods.getOwnPropertyDescriptor(this.reqProto, "url"), 
      this.resUrl = _8ffa921e40eb.nativeMethods.getOwnPropertyDescriptor(this.resProto, "url"), 
      this.reqHeaders = _8ffa921e40eb.nativeMethods.getOwnPropertyDescriptor(this.reqProto, "headers"), 
      this.resHeaders = _8ffa921e40eb.nativeMethods.getOwnPropertyDescriptor(this.resProto, "headers");
    }
    override() {
      return this.overrideRequest(), this.overrideUrl(), this.overrideHeaders(), !0;
    }
    overrideRequest() {
      return this.fetch ? (this.ctx.override(this.window, "fetch", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (!_f9d1bc577e59.length || _f9d1bc577e59[0] instanceof this.Request) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b, _0c2d9a15385c = {}] = _f9d1bc577e59, _53f7585e9797 = new _f417c1c28204({
          input: _fdd1e7c9091b,
          options: _0c2d9a15385c
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("request", _53f7585e9797), _53f7585e9797.intercepted ? _53f7585e9797.returnValue : _53f7585e9797.target.call(_53f7585e9797.that, _53f7585e9797.data.input, _53f7585e9797.data.options);
      }), this.ctx.override(this.window, "Request", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (!_f9d1bc577e59.length) return new _8ffa921e40eb(..._f9d1bc577e59);
        let [_fdd1e7c9091b, _0c2d9a15385c = {}] = _f9d1bc577e59, _53f7585e9797 = new _f417c1c28204({
          input: _fdd1e7c9091b,
          options: _0c2d9a15385c
        }, _8ffa921e40eb);
        return this.emit("request", _53f7585e9797), _53f7585e9797.intercepted ? _53f7585e9797.returnValue : new _53f7585e9797.target(_53f7585e9797.data.input, _53f7585e9797.data.options);
      }, !0), !0) : !1;
    }
    overrideUrl() {
      return this.ctx.overrideDescriptor(this.reqProto, "url", {
        get: (_8ffa921e40eb, _c331fbac9a70) => {
          let _f9d1bc577e59 = new _f417c1c28204({
            value: _8ffa921e40eb.call(_c331fbac9a70)
          }, _8ffa921e40eb, _c331fbac9a70);
          return this.emit("requestUrl", _f9d1bc577e59), _f9d1bc577e59.intercepted ? _f9d1bc577e59.returnValue : _f9d1bc577e59.data.value;
        }
      }), this.ctx.overrideDescriptor(this.resProto, "url", {
        get: (_8ffa921e40eb, _c331fbac9a70) => {
          let _f9d1bc577e59 = new _f417c1c28204({
            value: _8ffa921e40eb.call(_c331fbac9a70)
          }, _8ffa921e40eb, _c331fbac9a70);
          return this.emit("responseUrl", _f9d1bc577e59), _f9d1bc577e59.intercepted ? _f9d1bc577e59.returnValue : _f9d1bc577e59.data.value;
        }
      }), !0;
    }
    overrideHeaders() {
      return this.Headers ? (this.ctx.overrideDescriptor(this.reqProto, "headers", {
        get: (_8ffa921e40eb, _c331fbac9a70) => {
          let _f9d1bc577e59 = new _f417c1c28204({
            value: _8ffa921e40eb.call(_c331fbac9a70)
          }, _8ffa921e40eb, _c331fbac9a70);
          return this.emit("requestHeaders", _f9d1bc577e59), _f9d1bc577e59.intercepted ? _f9d1bc577e59.returnValue : _f9d1bc577e59.data.value;
        }
      }), this.ctx.overrideDescriptor(this.resProto, "headers", {
        get: (_8ffa921e40eb, _c331fbac9a70) => {
          let _f9d1bc577e59 = new _f417c1c28204({
            value: _8ffa921e40eb.call(_c331fbac9a70)
          }, _8ffa921e40eb, _c331fbac9a70);
          return this.emit("responseHeaders", _f9d1bc577e59), _f9d1bc577e59.intercepted ? _f9d1bc577e59.returnValue : _f9d1bc577e59.data.value;
        }
      }), this.ctx.override(this.headersProto, "get", (_8ffa921e40eb, _c331fbac9a70, [_f9d1bc577e59]) => {
        if (!_f9d1bc577e59) return _8ffa921e40eb.call(_c331fbac9a70);
        let _fdd1e7c9091b = new _f417c1c28204({
          name: _f9d1bc577e59,
          value: _8ffa921e40eb.call(_c331fbac9a70, _f9d1bc577e59)
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("getHeader", _fdd1e7c9091b), _fdd1e7c9091b.intercepted ? _fdd1e7c9091b.returnValue : _fdd1e7c9091b.data.value;
      }), this.ctx.override(this.headersProto, "set", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (2 > _f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b, _0c2d9a15385c] = _f9d1bc577e59, _53f7585e9797 = new _f417c1c28204({
          name: _fdd1e7c9091b,
          value: _0c2d9a15385c
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("setHeader", _53f7585e9797), _53f7585e9797.intercepted ? _53f7585e9797.returnValue : _53f7585e9797.target.call(_53f7585e9797.that, _53f7585e9797.data.name, _53f7585e9797.data.value);
      }), this.ctx.override(this.headersProto, "has", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (!_f9d1bc577e59.length) return _8ffa921e40eb.call(_c331fbac9a70);
        let [_fdd1e7c9091b] = _f9d1bc577e59, _0c2d9a15385c = new _f417c1c28204({
          name: _fdd1e7c9091b,
          value: _8ffa921e40eb.call(_c331fbac9a70, _fdd1e7c9091b)
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("hasHeader", _0c2d9a15385c), _0c2d9a15385c.intercepted ? _0c2d9a15385c.returnValue : _0c2d9a15385c.data;
      }), this.ctx.override(this.headersProto, "append", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (2 > _f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b, _0c2d9a15385c] = _f9d1bc577e59, _53f7585e9797 = new _f417c1c28204({
          name: _fdd1e7c9091b,
          value: _0c2d9a15385c
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("appendHeader", _53f7585e9797), _53f7585e9797.intercepted ? _53f7585e9797.returnValue : _53f7585e9797.target.call(_53f7585e9797.that, _53f7585e9797.data.name, _53f7585e9797.data.value);
      }), this.ctx.override(this.headersProto, "delete", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (!_f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b] = _f9d1bc577e59, _0c2d9a15385c = new _f417c1c28204({
          name: _fdd1e7c9091b
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("deleteHeader", _0c2d9a15385c), _0c2d9a15385c.intercepted ? _0c2d9a15385c.returnValue : _0c2d9a15385c.target.call(_0c2d9a15385c.that, _0c2d9a15385c.data.name);
      }), !0) : !1;
    }
  }, _e1aa48d3f0d2 = _8990998dce87;
  var _6413e925e365 = m(_e434b087a60b(), 1);
  var _b820d08011dc = class extends _6413e925e365.default {
    constructor(_8ffa921e40eb) {
      super(), this.ctx = _8ffa921e40eb, this.window = _8ffa921e40eb.window, this.XMLHttpRequest = this.window.XMLHttpRequest, 
      this.xhrProto = this.window.XMLHttpRequest ? this.window.XMLHttpRequest.prototype : {}, 
      this.open = this.xhrProto.open, this.abort = this.xhrProto.abort, this.send = this.xhrProto.send, 
      this.overrideMimeType = this.xhrProto.overrideMimeType, this.getAllResponseHeaders = this.xhrProto.getAllResponseHeaders, 
      this.getResponseHeader = this.xhrProto.getResponseHeader, this.setRequestHeader = this.xhrProto.setRequestHeader, 
      this.responseURL = _8ffa921e40eb.nativeMethods.getOwnPropertyDescriptor(this.xhrProto, "responseURL"), 
      this.responseText = _8ffa921e40eb.nativeMethods.getOwnPropertyDescriptor(this.xhrProto, "responseText");
    }
    override() {
      this.overrideOpen(), this.overrideSend(), this.overrideMimeType(), this.overrideGetResHeader(), 
      this.overrideGetResHeaders(), this.overrideSetReqHeader();
    }
    overrideOpen() {
      this.ctx.override(this.xhrProto, "open", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (2 > _f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b, _0c2d9a15385c, _53f7585e9797 = !0, _e434b087a60b = null, _c0b656f59244 = null] = _f9d1bc577e59, _11297093c840 = new _f417c1c28204({
          method: _fdd1e7c9091b,
          input: _0c2d9a15385c,
          async: _53f7585e9797,
          user: _e434b087a60b,
          password: _c0b656f59244
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("open", _11297093c840), _11297093c840.intercepted ? _11297093c840.returnValue : _11297093c840.target.call(_11297093c840.that, _11297093c840.data.method, _11297093c840.data.input, _11297093c840.data.async, _11297093c840.data.user, _11297093c840.data.password);
      });
    }
    overrideResponseUrl() {
      this.ctx.overrideDescriptor(this.xhrProto, "responseURL", {
        get: (_8ffa921e40eb, _c331fbac9a70) => {
          let _f9d1bc577e59 = new _f417c1c28204({
            value: _8ffa921e40eb.call(_c331fbac9a70)
          }, _8ffa921e40eb, _c331fbac9a70);
          return this.emit("responseUrl", _f9d1bc577e59), _f9d1bc577e59.intercepted ? _f9d1bc577e59.returnValue : _f9d1bc577e59.data.value;
        }
      });
    }
    overrideSend() {
      this.ctx.override(this.xhrProto, "send", (_8ffa921e40eb, _c331fbac9a70, [_f9d1bc577e59 = null]) => {
        let _fdd1e7c9091b = new _f417c1c28204({
          body: _f9d1bc577e59
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("send", _fdd1e7c9091b), _fdd1e7c9091b.intercepted ? _fdd1e7c9091b.returnValue : _fdd1e7c9091b.target.call(_fdd1e7c9091b.that, _fdd1e7c9091b.data.body);
      });
    }
    overrideSetReqHeader() {
      this.ctx.override(this.xhrProto, "setRequestHeader", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (2 > _f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b, _0c2d9a15385c] = _f9d1bc577e59, _53f7585e9797 = new _f417c1c28204({
          name: _fdd1e7c9091b,
          value: _0c2d9a15385c
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("setReqHeader", _53f7585e9797), _53f7585e9797.intercepted ? _53f7585e9797.returnValue : _53f7585e9797.target.call(_53f7585e9797.that, _53f7585e9797.data.name, _53f7585e9797.data.value);
      });
    }
    overrideGetResHeaders() {
      this.ctx.override(this.xhrProto, "getAllResponseHeaders", (_8ffa921e40eb, _c331fbac9a70) => {
        let _f9d1bc577e59 = new _f417c1c28204({
          value: _8ffa921e40eb.call(_c331fbac9a70)
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("getAllResponseHeaders", _f9d1bc577e59), _f9d1bc577e59.intercepted ? _f9d1bc577e59.returnValue : _f9d1bc577e59.data.value;
      });
    }
    overrideGetResHeader() {
      this.ctx.override(this.xhrProto, "getResponseHeader", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (!_f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b] = _f9d1bc577e59, _0c2d9a15385c = new _f417c1c28204({
          name: _fdd1e7c9091b,
          value: _8ffa921e40eb.call(_c331fbac9a70, _fdd1e7c9091b)
        }, _8ffa921e40eb, _c331fbac9a70);
        return _0c2d9a15385c.intercepted ? _0c2d9a15385c.returnValue : _0c2d9a15385c.data.value;
      });
    }
  }, _4128a83cdffc = _b820d08011dc;
  var _6fbcebe73c7b = m(_e434b087a60b(), 1);
  var _42ffa46ac3b2 = class extends _6fbcebe73c7b.default {
    constructor(_8ffa921e40eb) {
      super(), this.ctx = _8ffa921e40eb, this.window = _8ffa921e40eb.window, this.EventSource = this.window.EventSource || {}, 
      this.esProto = this.EventSource.prototype || {}, this.url = _8ffa921e40eb.nativeMethods.getOwnPropertyDescriptor(this.esProto, "url"), 
      this.CONNECTING = 0, this.OPEN = 1, this.CLOSED = 2;
    }
    overrideConstruct() {
      this.ctx.override(this.window, "EventSource", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (!_f9d1bc577e59.length) return new _8ffa921e40eb(..._f9d1bc577e59);
        let [_fdd1e7c9091b, _0c2d9a15385c = {}] = _f9d1bc577e59, _53f7585e9797 = new _f417c1c28204({
          url: _fdd1e7c9091b,
          config: _0c2d9a15385c
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("construct", _53f7585e9797), _53f7585e9797.intercepted ? _53f7585e9797.returnValue : new _53f7585e9797.target(_53f7585e9797.data.url, _53f7585e9797.data.config);
      }, !0), "EventSource" in this.window && (this.window.EventSource.CONNECTING = this.CONNECTING, 
      this.window.EventSource.OPEN = this.OPEN, this.window.EventSource.CLOSED = this.CLOSED);
    }
    overrideUrl() {
      this.ctx.overrideDescriptor(this.esProto, "url", {
        get: (_8ffa921e40eb, _c331fbac9a70) => {
          let _f9d1bc577e59 = new _f417c1c28204({
            value: _8ffa921e40eb.call(_c331fbac9a70)
          }, _8ffa921e40eb, _c331fbac9a70);
          return this.emit("url", _f9d1bc577e59), _f9d1bc577e59.data.value;
        }
      });
    }
  }, _466101f3972a = _42ffa46ac3b2;
  var _9a1a1b082c98 = m(_e434b087a60b(), 1);
  var _e3baeaadec64 = class extends _9a1a1b082c98.default {
    constructor(_8ffa921e40eb) {
      super(), this.ctx = _8ffa921e40eb, this.window = this.ctx.window, this.History = this.window.History, 
      this.history = this.window.history, this.historyProto = this.History ? this.History.prototype : {}, 
      this.pushState = this.historyProto.pushState, this.replaceState = this.historyProto.replaceState, 
      this.go = this.historyProto.go, this.back = this.historyProto.back, this.forward = this.historyProto.forward;
    }
    override() {
      this.overridePushState(), this.overrideReplaceState(), this.overrideGo(), this.overrideForward(), 
      this.overrideBack();
    }
    overridePushState() {
      this.ctx.override(this.historyProto, "pushState", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (2 > _f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b, _0c2d9a15385c, _53f7585e9797 = ""] = _f9d1bc577e59, _e434b087a60b = new _f417c1c28204({
          state: _fdd1e7c9091b,
          title: _0c2d9a15385c,
          url: _53f7585e9797
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("pushState", _e434b087a60b), _e434b087a60b.intercepted ? _e434b087a60b.returnValue : _e434b087a60b.target.call(_e434b087a60b.that, _e434b087a60b.data.state, _e434b087a60b.data.title, _e434b087a60b.data.url);
      });
    }
    overrideReplaceState() {
      this.ctx.override(this.historyProto, "replaceState", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (2 > _f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b, _0c2d9a15385c, _53f7585e9797 = ""] = _f9d1bc577e59, _e434b087a60b = new _f417c1c28204({
          state: _fdd1e7c9091b,
          title: _0c2d9a15385c,
          url: _53f7585e9797
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("replaceState", _e434b087a60b), _e434b087a60b.intercepted ? _e434b087a60b.returnValue : _e434b087a60b.target.call(_e434b087a60b.that, _e434b087a60b.data.state, _e434b087a60b.data.title, _e434b087a60b.data.url);
      });
    }
    overrideGo() {
      this.ctx.override(this.historyProto, "go", (_8ffa921e40eb, _c331fbac9a70, [_f9d1bc577e59]) => {
        let _fdd1e7c9091b = new _f417c1c28204({
          delta: _f9d1bc577e59
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("go", _fdd1e7c9091b), _fdd1e7c9091b.intercepted ? _fdd1e7c9091b.returnValue : _fdd1e7c9091b.target.call(_fdd1e7c9091b.that, _fdd1e7c9091b.data.delta);
      });
    }
    overrideForward() {
      this.ctx.override(this.historyProto, "forward", (_8ffa921e40eb, _c331fbac9a70) => {
        let _f9d1bc577e59 = new _f417c1c28204(null, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("forward", _f9d1bc577e59), _f9d1bc577e59.intercepted ? _f9d1bc577e59.returnValue : _f9d1bc577e59.target.call(_f9d1bc577e59.that);
      });
    }
    overrideBack() {
      this.ctx.override(this.historyProto, "back", (_8ffa921e40eb, _c331fbac9a70) => {
        let _f9d1bc577e59 = new _f417c1c28204(null, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("back", _f9d1bc577e59), _f9d1bc577e59.intercepted ? _f9d1bc577e59.returnValue : _f9d1bc577e59.target.call(_f9d1bc577e59.that);
      });
    }
  }, _5ca30de275a3 = _e3baeaadec64;
  var _fb65a2a7ea4e = m(_e434b087a60b(), 1), _8d872c055461 = class extends _fb65a2a7ea4e.default {
    constructor(_8ffa921e40eb) {
      super(), this.ctx = _8ffa921e40eb, this.window = _8ffa921e40eb.window, this.location = this.window.location, 
      this.WorkerLocation = this.ctx.worker ? this.window.WorkerLocation : null, this.workerLocProto = this.WorkerLocation ? this.WorkerLocation.prototype : {}, 
      this.keys = [ "href", "protocol", "host", "hostname", "port", "pathname", "search", "hash", "origin" ], 
      this.HashChangeEvent = this.window.HashChangeEvent || null, this.href = this.WorkerLocation ? _8ffa921e40eb.nativeMethods.getOwnPropertyDescriptor(this.workerLocProto, "href") : _8ffa921e40eb.nativeMethods.getOwnPropertyDescriptor(this.location, "href");
    }
    overrideWorkerLocation(_8ffa921e40eb) {
      if (!this.WorkerLocation) return !1;
      let _c331fbac9a70 = this;
      for (let _f9d1bc577e59 of this.keys) this.ctx.overrideDescriptor(this.workerLocProto, _f9d1bc577e59, {
        get: () => _8ffa921e40eb(_c331fbac9a70.href.get.call(this.location))[_f9d1bc577e59]
      });
      return !0;
    }
    emulate(_8ffa921e40eb, _c331fbac9a70) {
      let _f9d1bc577e59 = {}, _fdd1e7c9091b = this;
      for (let _0c2d9a15385c of _fdd1e7c9091b.keys) this.ctx.nativeMethods.defineProperty(_f9d1bc577e59, _0c2d9a15385c, {
        get() {
          return _8ffa921e40eb(_fdd1e7c9091b.href.get.call(_fdd1e7c9091b.location))[_0c2d9a15385c];
        },
        set: _0c2d9a15385c !== "origin" ? function(_8ffa921e40eb) {
          switch (_0c2d9a15385c) {
           case "href":
            _fdd1e7c9091b.location.href = _c331fbac9a70(_8ffa921e40eb);
            break;

           case "hash":
            _fdd1e7c9091b.emit("hashchange", _f9d1bc577e59.href, _8ffa921e40eb.trim().startsWith("#") ? new URL(_8ffa921e40eb.trim(), _f9d1bc577e59.href).href : new URL("#" + _8ffa921e40eb.trim(), _f9d1bc577e59.href).href, _fdd1e7c9091b);
            break;

           default:
            {
              let _53f7585e9797 = new URL(_f9d1bc577e59.href);
              _53f7585e9797[_0c2d9a15385c] = _8ffa921e40eb, _fdd1e7c9091b.location.href = _c331fbac9a70(_53f7585e9797.href);
            }
            break;
          }
        } : void 0,
        configurable: !1,
        enumerable: !0
      });
      return "reload" in this.location && this.ctx.nativeMethods.defineProperty(_f9d1bc577e59, "reload", {
        value: this.ctx.wrap(this.location, "reload", (_8ffa921e40eb, _c331fbac9a70) => _8ffa921e40eb.call(_c331fbac9a70 === _f9d1bc577e59 ? this.location : _c331fbac9a70)),
        writable: !1,
        enumerable: !0
      }), "replace" in this.location && this.ctx.nativeMethods.defineProperty(_f9d1bc577e59, "replace", {
        value: this.ctx.wrap(this.location, "assign", (_8ffa921e40eb, _fdd1e7c9091b, _0c2d9a15385c) => {
          (!_0c2d9a15385c.length || _fdd1e7c9091b !== _f9d1bc577e59) && _8ffa921e40eb.call(_fdd1e7c9091b), 
          _fdd1e7c9091b = this.location;
          let [_53f7585e9797] = _0c2d9a15385c, _e434b087a60b = new URL(_53f7585e9797, _f9d1bc577e59.href);
          return _8ffa921e40eb.call(_fdd1e7c9091b === _f9d1bc577e59 ? this.location : _fdd1e7c9091b, _c331fbac9a70(_e434b087a60b.href));
        }),
        writable: !1,
        enumerable: !0
      }), "assign" in this.location && this.ctx.nativeMethods.defineProperty(_f9d1bc577e59, "assign", {
        value: this.ctx.wrap(this.location, "assign", (_8ffa921e40eb, _fdd1e7c9091b, _0c2d9a15385c) => {
          (!_0c2d9a15385c.length || _fdd1e7c9091b !== _f9d1bc577e59) && _8ffa921e40eb.call(_fdd1e7c9091b), 
          _fdd1e7c9091b = this.location;
          let [_53f7585e9797] = _0c2d9a15385c, _e434b087a60b = new URL(_53f7585e9797, _f9d1bc577e59.href);
          return _8ffa921e40eb.call(_fdd1e7c9091b === _f9d1bc577e59 ? this.location : _fdd1e7c9091b, _c331fbac9a70(_e434b087a60b.href));
        }),
        writable: !1,
        enumerable: !0
      }), "ancestorOrigins" in this.location && this.ctx.nativeMethods.defineProperty(_f9d1bc577e59, "ancestorOrigins", {
        get() {
          let _8ffa921e40eb = [];
          return _fdd1e7c9091b.window.DOMStringList && _fdd1e7c9091b.ctx.nativeMethods.setPrototypeOf(_8ffa921e40eb, _fdd1e7c9091b.window.DOMStringList.prototype), 
          _8ffa921e40eb;
        },
        set: void 0,
        enumerable: !0
      }), this.ctx.nativeMethods.defineProperty(_f9d1bc577e59, "toString", {
        value: this.ctx.wrap(this.location, "toString", () => _f9d1bc577e59.href),
        enumerable: !0,
        writable: !1
      }), this.ctx.nativeMethods.defineProperty(_f9d1bc577e59, Symbol.toPrimitive, {
        value: () => _f9d1bc577e59.href,
        writable: !1,
        enumerable: !1
      }), this.ctx.window.Location && this.ctx.nativeMethods.setPrototypeOf(_f9d1bc577e59, this.ctx.window.Location.prototype), 
      _f9d1bc577e59;
    }
  }, _b0a4f6c11445 = _8d872c055461;
  var _05b8f011d70f = m(_e434b087a60b(), 1);
  var _12c4b24078e3 = class extends _05b8f011d70f.default {
    constructor(_8ffa921e40eb) {
      super(), this.ctx = _8ffa921e40eb, this.window = this.ctx.window, this.postMessage = this.window.postMessage, 
      this.MessageEvent = this.window.MessageEvent || {}, this.MessagePort = this.window.MessagePort || {}, 
      this.mpProto = this.MessagePort.prototype || {}, this.mpPostMessage = this.mpProto.postMessage, 
      this.messageProto = this.MessageEvent.prototype || {}, this.messageData = _8ffa921e40eb.nativeMethods.getOwnPropertyDescriptor(this.messageProto, "data"), 
      this.messageOrigin = _8ffa921e40eb.nativeMethods.getOwnPropertyDescriptor(this.messageProto, "origin");
    }
    overridePostMessage() {
      this.ctx.override(this.window, "postMessage", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (!_f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let _fdd1e7c9091b, _0c2d9a15385c, _53f7585e9797;
        this.ctx.worker ? [_fdd1e7c9091b, _53f7585e9797 = []] = _f9d1bc577e59 : [_fdd1e7c9091b, _0c2d9a15385c, _53f7585e9797 = []] = _f9d1bc577e59;
        let _e434b087a60b = new _f417c1c28204({
          message: _fdd1e7c9091b,
          origin: _0c2d9a15385c,
          transfer: _53f7585e9797,
          worker: this.ctx.worker
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("postMessage", _e434b087a60b), _e434b087a60b.intercepted ? _e434b087a60b.returnValue : this.ctx.worker ? _e434b087a60b.target.call(_e434b087a60b.that, _e434b087a60b.data.message, _e434b087a60b.data.transfer) : _e434b087a60b.target.call(_e434b087a60b.that, _e434b087a60b.data.message, _e434b087a60b.data.origin, _e434b087a60b.data.transfer);
      });
    }
    wrapPostMessage(_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59 = !1) {
      return this.ctx.wrap(_8ffa921e40eb, _c331fbac9a70, (_c331fbac9a70, _fdd1e7c9091b, _0c2d9a15385c) => {
        if (this.ctx.worker ? !_0c2d9a15385c.length : 2 > _0c2d9a15385c) return _c331fbac9a70.apply(_fdd1e7c9091b, _0c2d9a15385c);
        let _53f7585e9797, _e434b087a60b, _c0b656f59244;
        _f9d1bc577e59 ? ([_53f7585e9797, _c0b656f59244 = []] = _0c2d9a15385c, _e434b087a60b = null) : [_53f7585e9797, _e434b087a60b, _c0b656f59244 = []] = _0c2d9a15385c;
        let _11297093c840 = new _f417c1c28204({
          message: _53f7585e9797,
          origin: _e434b087a60b,
          transfer: _c0b656f59244,
          worker: this.ctx.worker
        }, _c331fbac9a70, _8ffa921e40eb);
        return this.emit("postMessage", _11297093c840), _11297093c840.intercepted ? _11297093c840.returnValue : _f9d1bc577e59 ? _11297093c840.target.call(_11297093c840.that, _11297093c840.data.message, _11297093c840.data.transfer) : _11297093c840.target.call(_11297093c840.that, _11297093c840.data.message, _11297093c840.data.origin, _11297093c840.data.transfer);
      });
    }
    overrideMessageOrigin() {
      this.ctx.overrideDescriptor(this.messageProto, "origin", {
        get: (_8ffa921e40eb, _c331fbac9a70) => {
          let _f9d1bc577e59 = new _f417c1c28204({
            value: _8ffa921e40eb.call(_c331fbac9a70)
          }, _8ffa921e40eb, _c331fbac9a70);
          return this.emit("origin", _f9d1bc577e59), _f9d1bc577e59.intercepted ? _f9d1bc577e59.returnValue : _f9d1bc577e59.data.value;
        }
      });
    }
    overrideMessageData() {
      this.ctx.overrideDescriptor(this.messageProto, "data", {
        get: (_8ffa921e40eb, _c331fbac9a70) => {
          let _f9d1bc577e59 = new _f417c1c28204({
            value: _8ffa921e40eb.call(_c331fbac9a70)
          }, _8ffa921e40eb, _c331fbac9a70);
          return this.emit("data", _f9d1bc577e59), _f9d1bc577e59.intercepted ? _f9d1bc577e59.returnValue : _f9d1bc577e59.data.value;
        }
      });
    }
  }, _037d5ed47948 = _12c4b24078e3;
  var _cb15b3f9e88c = m(_e434b087a60b(), 1);
  var _5160602ac929 = class extends _cb15b3f9e88c.default {
    constructor(_8ffa921e40eb) {
      super(), this.ctx = _8ffa921e40eb, this.window = _8ffa921e40eb.window, this.navigator = this.window.navigator, 
      this.Navigator = this.window.Navigator || {}, this.navProto = this.Navigator.prototype || {}, 
      this.sendBeacon = this.navProto.sendBeacon;
    }
    overrideSendBeacon() {
      this.ctx.override(this.navProto, "sendBeacon", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (!_f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b, _0c2d9a15385c = ""] = _f9d1bc577e59, _53f7585e9797 = new _f417c1c28204({
          url: _fdd1e7c9091b,
          data: _0c2d9a15385c
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("sendBeacon", _53f7585e9797), _53f7585e9797.intercepted ? _53f7585e9797.returnValue : _53f7585e9797.target.call(_53f7585e9797.that, _53f7585e9797.data.url, _53f7585e9797.data.data);
      });
    }
  }, _8e8375b1d046 = _5160602ac929;
  var _6a362cf30681 = m(_e434b087a60b(), 1);
  var _857259c7a37b = globalThis.fetch, _815b3cf2d7d0 = globalThis.SharedWorker, _5e0d3e44b687 = globalThis.localStorage, _a2730d69fede = globalThis.navigator.serviceWorker, _df7be027a452 = MessagePort.prototype.postMessage, _b7632281677a = {
    prototype: {
      send: WebSocket.prototype.send
    },
    CLOSED: WebSocket.CLOSED,
    CLOSING: WebSocket.CLOSING,
    CONNECTING: WebSocket.CONNECTING,
    OPEN: WebSocket.OPEN
  };
  async function W() {
    let _8ffa921e40eb = (await self.clients.matchAll({
      type: "window",
      includeUncontrolled: !0
    })).map(async _8ffa921e40eb => {
      let _c331fbac9a70 = await function(_8ffa921e40eb) {
        let _c331fbac9a70 = new MessageChannel;
        return new Promise(_f9d1bc577e59 => {
          _8ffa921e40eb.postMessage({
            type: "getPort",
            port: _c331fbac9a70.port2
          }, [ _c331fbac9a70.port2 ]), _c331fbac9a70.port1.onmessage = _8ffa921e40eb => {
            _f9d1bc577e59(_8ffa921e40eb.data);
          };
        });
      }(_8ffa921e40eb);
      return await Ie(_c331fbac9a70), _c331fbac9a70;
    }), _c331fbac9a70 = Promise.race([ Promise.any(_8ffa921e40eb), new Promise((_8ffa921e40eb, _c331fbac9a70) => setTimeout(_c331fbac9a70, 1e3, new TypeError("timeout"))) ]);
    try {
      return await _c331fbac9a70;
    } catch (_8ffa921e40eb) {
      if (_8ffa921e40eb instanceof AggregateError) throw console.error("bare-mux: failed to get a bare-mux SharedWorker MessagePort as all clients returned an invalid MessagePort."), 
      new Error("All clients returned an invalid MessagePort.");
      return console.warn("bare-mux: failed to get a bare-mux SharedWorker MessagePort within 1s, retrying"), 
      await W();
    }
  }
  function Ie(_8ffa921e40eb) {
    let _c331fbac9a70 = new MessageChannel, _f9d1bc577e59 = new Promise((_8ffa921e40eb, _f9d1bc577e59) => {
      _c331fbac9a70.port1.onmessage = _c331fbac9a70 => {
        _c331fbac9a70.data.type === "pong" && _8ffa921e40eb();
      }, setTimeout(_f9d1bc577e59, 1500);
    });
    return _df7be027a452.call(_8ffa921e40eb, {
      message: {
        type: "ping"
      },
      port: _c331fbac9a70.port2
    }, [ _c331fbac9a70.port2 ]), _f9d1bc577e59;
  }
  function Ve(_8ffa921e40eb, _c331fbac9a70) {
    let _f9d1bc577e59 = new _815b3cf2d7d0(_8ffa921e40eb, "ridgewood-stem-worker");
    return _c331fbac9a70 && _a2730d69fede.addEventListener("message", _c331fbac9a70 => {
      if (_c331fbac9a70.data.type === "getPort" && _c331fbac9a70.data.port) {
        console.debug("bare-mux: recieved request for port from sw");
        let _f9d1bc577e59 = new _815b3cf2d7d0(_8ffa921e40eb, "ridgewood-stem-worker");
        _df7be027a452.call(_c331fbac9a70.data.port, _f9d1bc577e59.port, [ _f9d1bc577e59.port ]);
      }
    }), _f9d1bc577e59.port;
  }
  var _fcfa9d497815 = null;
  function lt() {
    if (_fcfa9d497815 === null) {
      let _8ffa921e40eb = new MessageChannel, _c331fbac9a70 = new ReadableStream, _f9d1bc577e59;
      try {
        _df7be027a452.call(_8ffa921e40eb.port1, _c331fbac9a70, [ _c331fbac9a70 ]), _f9d1bc577e59 = !0;
      } catch {
        _f9d1bc577e59 = !1;
      }
      return _fcfa9d497815 = _f9d1bc577e59, _f9d1bc577e59;
    }
    return _fcfa9d497815;
  }
  var _a476aecd2b96 = class {
    constructor(_8ffa921e40eb) {
      this.channel = new BroadcastChannel("bare-mux"), _8ffa921e40eb instanceof MessagePort || _8ffa921e40eb instanceof Promise ? this.port = _8ffa921e40eb : this.createChannel(_8ffa921e40eb, !0);
    }
    createChannel(_8ffa921e40eb, _c331fbac9a70) {
      if (self.clients) this.port = W(), this.channel.onmessage = _8ffa921e40eb => {
        _8ffa921e40eb.data.type === "refreshPort" && (this.port = W());
      }; else if (_8ffa921e40eb && SharedWorker) {
        if (!_8ffa921e40eb.startsWith("/") && !_8ffa921e40eb.includes("://")) throw new Error("Invalid URL. Must be absolute or start at the root.");
        this.port = Ve(_8ffa921e40eb, _c331fbac9a70), console.debug("bare-mux: setting localStorage bare-mux-path to", _8ffa921e40eb), 
        _5e0d3e44b687["bare-mux-path"] = _8ffa921e40eb;
      } else {
        if (!SharedWorker) throw new Error("Unable to get a channel to the SharedWorker.");
        {
          let _8ffa921e40eb = _5e0d3e44b687["bare-mux-path"];
          if (console.debug("bare-mux: got localStorage bare-mux-path:", _8ffa921e40eb), !_8ffa921e40eb) throw new Error("Unable to get bare-mux workerPath from localStorage.");
          this.port = Ve(_8ffa921e40eb, _c331fbac9a70);
        }
      }
    }
    async sendMessage(_8ffa921e40eb, _c331fbac9a70) {
      this.port instanceof Promise && (this.port = await this.port);
      try {
        await Ie(this.port);
      } catch {
        return console.warn("bare-mux: Failed to get a ping response from the worker within 1.5s. Assuming port is dead."), 
        this.createChannel(), await this.sendMessage(_8ffa921e40eb, _c331fbac9a70);
      }
      let _f9d1bc577e59 = new MessageChannel, _fdd1e7c9091b = [ _f9d1bc577e59.port2, ..._c331fbac9a70 || [] ], _0c2d9a15385c = new Promise((_8ffa921e40eb, _c331fbac9a70) => {
        _f9d1bc577e59.port1.onmessage = _f9d1bc577e59 => {
          let _fdd1e7c9091b = _f9d1bc577e59.data;
          _fdd1e7c9091b.type === "error" ? _c331fbac9a70(_fdd1e7c9091b.error) : _8ffa921e40eb(_fdd1e7c9091b);
        };
      });
      return _df7be027a452.call(this.port, {
        message: _8ffa921e40eb,
        port: _f9d1bc577e59.port2
      }, _fdd1e7c9091b), await _0c2d9a15385c;
    }
  };
  function Ce(_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) {
    console.error(`error while processing '${_f9d1bc577e59}': `, _c331fbac9a70), _8ffa921e40eb.postMessage({
      type: "error",
      error: _c331fbac9a70
    });
  }
  var _aa0ff0c7551e = class {
    constructor(_8ffa921e40eb) {
      this.worker = new _a476aecd2b96(_8ffa921e40eb);
    }
    async getTransport() {
      return (await this.worker.sendMessage({
        type: "get"
      })).name;
    }
    async setTransport(_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) {
      await this.setManualTransport(`\n\t\t\tconst { default: BareTransport } = await import("${_8ffa921e40eb}");\n\t\t\treturn [BareTransport, "${_8ffa921e40eb}"];\n\t\t`, _c331fbac9a70, _f9d1bc577e59);
    }
    async setManualTransport(_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) {
      if (_8ffa921e40eb === "bare-mux-remote") throw new Error("Use setRemoteTransport.");
      await this.worker.sendMessage({
        type: "set",
        client: {
          function: _8ffa921e40eb,
          args: _c331fbac9a70
        }
      }, _f9d1bc577e59);
    }
    async setRemoteTransport(_8ffa921e40eb, _c331fbac9a70) {
      let _f9d1bc577e59 = new MessageChannel;
      _f9d1bc577e59.port1.onmessage = async _c331fbac9a70 => {
        let _f9d1bc577e59 = _c331fbac9a70.data.port, _fdd1e7c9091b = _c331fbac9a70.data.message;
        if (_fdd1e7c9091b.type === "fetch") try {
          _8ffa921e40eb.ready || await _8ffa921e40eb.init(), await async function(_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) {
            let _fdd1e7c9091b = await _f9d1bc577e59.request(new URL(_8ffa921e40eb.fetch.remote), _8ffa921e40eb.fetch.method, _8ffa921e40eb.fetch.body, _8ffa921e40eb.fetch.headers, null);
            if (!lt() && _fdd1e7c9091b.body instanceof ReadableStream) {
              let _8ffa921e40eb = new Response(_fdd1e7c9091b.body);
              _fdd1e7c9091b.body = await _8ffa921e40eb.arrayBuffer();
            }
            _fdd1e7c9091b.body instanceof ReadableStream || _fdd1e7c9091b.body instanceof ArrayBuffer ? _df7be027a452.call(_c331fbac9a70, {
              type: "fetch",
              fetch: _fdd1e7c9091b
            }, [ _fdd1e7c9091b.body ]) : _df7be027a452.call(_c331fbac9a70, {
              type: "fetch",
              fetch: _fdd1e7c9091b
            });
          }(_fdd1e7c9091b, _f9d1bc577e59, _8ffa921e40eb);
        } catch (_8ffa921e40eb) {
          Ce(_f9d1bc577e59, _8ffa921e40eb, "fetch");
        } else if (_fdd1e7c9091b.type === "websocket") try {
          _8ffa921e40eb.ready || await _8ffa921e40eb.init(), await async function(_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) {
            let [_fdd1e7c9091b, _0c2d9a15385c] = _f9d1bc577e59.connect(new URL(_8ffa921e40eb.websocket.url), _8ffa921e40eb.websocket.protocols, _8ffa921e40eb.websocket.requestHeaders, _c331fbac9a70 => {
              _df7be027a452.call(_8ffa921e40eb.websocket.channel, {
                type: "open",
                args: [ _c331fbac9a70 ]
              });
            }, _c331fbac9a70 => {
              _c331fbac9a70 instanceof ArrayBuffer ? _df7be027a452.call(_8ffa921e40eb.websocket.channel, {
                type: "message",
                args: [ _c331fbac9a70 ]
              }, [ _c331fbac9a70 ]) : _df7be027a452.call(_8ffa921e40eb.websocket.channel, {
                type: "message",
                args: [ _c331fbac9a70 ]
              });
            }, (_c331fbac9a70, _f9d1bc577e59) => {
              _df7be027a452.call(_8ffa921e40eb.websocket.channel, {
                type: "close",
                args: [ _c331fbac9a70, _f9d1bc577e59 ]
              });
            }, _c331fbac9a70 => {
              _df7be027a452.call(_8ffa921e40eb.websocket.channel, {
                type: "error",
                args: [ _c331fbac9a70 ]
              });
            });
            _8ffa921e40eb.websocket.channel.onmessage = _8ffa921e40eb => {
              _8ffa921e40eb.data.type === "data" ? _fdd1e7c9091b(_8ffa921e40eb.data.data) : _8ffa921e40eb.data.type === "close" && _0c2d9a15385c(_8ffa921e40eb.data.closeCode, _8ffa921e40eb.data.closeReason);
            }, _df7be027a452.call(_c331fbac9a70, {
              type: "websocket"
            });
          }(_fdd1e7c9091b, _f9d1bc577e59, _8ffa921e40eb);
        } catch (_8ffa921e40eb) {
          Ce(_f9d1bc577e59, _8ffa921e40eb, "websocket");
        }
      }, await this.worker.sendMessage({
        type: "set",
        client: {
          function: "bare-mux-remote",
          args: [ _f9d1bc577e59.port2, _c331fbac9a70 ]
        }
      }, [ _f9d1bc577e59.port2 ]);
    }
    getInnerPort() {
      return this.worker.port;
    }
  };
  console.debug("bare-mux: running v2.1.6 (build 4b7607b)");
  var _8989cbfb18fa = class extends _6a362cf30681.default {
    constructor(_8ffa921e40eb) {
      super(), this.ctx = _8ffa921e40eb, this.window = _8ffa921e40eb.window, this.Worker = this.window.Worker || {}, 
      this.Worklet = this.window.Worklet || {}, this.workletProto = this.Worklet.prototype || {}, 
      this.workerProto = this.Worker.prototype || {}, this.postMessage = this.workerProto.postMessage, 
      this.terminate = this.workerProto.terminate, this.addModule = this.workletProto.addModule;
    }
    overrideWorker() {
      this.ctx.override(this.window, "Worker", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (!_f9d1bc577e59.length) return new _8ffa921e40eb(..._f9d1bc577e59);
        let [_fdd1e7c9091b, _0c2d9a15385c = {}] = _f9d1bc577e59, _53f7585e9797 = new _f417c1c28204({
          url: _fdd1e7c9091b,
          options: _0c2d9a15385c
        }, _8ffa921e40eb, _c331fbac9a70);
        if (this.emit("worker", _53f7585e9797), _53f7585e9797.intercepted) return _53f7585e9797.returnValue;
        let _e434b087a60b = new _53f7585e9797.target(_53f7585e9797.data.url, _53f7585e9797.data.options), _c0b656f59244 = new _aa0ff0c7551e;
        return (async () => {
          let _8ffa921e40eb = await _c0b656f59244.getInnerPort();
          _e434b087a60b.postMessage({
            __uv$type: "baremuxinit",
            port: _8ffa921e40eb
          }, [ _8ffa921e40eb ]);
        })(), _e434b087a60b;
      }, !0);
    }
    overrideAddModule() {
      this.ctx.override(this.workletProto, "addModule", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (!_f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b, _0c2d9a15385c = {}] = _f9d1bc577e59, _53f7585e9797 = new _f417c1c28204({
          url: _fdd1e7c9091b,
          options: _0c2d9a15385c
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("addModule", _53f7585e9797), _53f7585e9797.intercepted ? _53f7585e9797.returnValue : _53f7585e9797.target.call(_53f7585e9797.that, _53f7585e9797.data.url, _53f7585e9797.data.options);
      });
    }
    overridePostMessage() {
      this.ctx.override(this.workerProto, "postMessage", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (!_f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b, _0c2d9a15385c = []] = _f9d1bc577e59, _53f7585e9797 = new _f417c1c28204({
          message: _fdd1e7c9091b,
          transfer: _0c2d9a15385c
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("postMessage", _53f7585e9797), _53f7585e9797.intercepted ? _53f7585e9797.returnValue : _53f7585e9797.target.call(_53f7585e9797.that, _53f7585e9797.data.message, _53f7585e9797.data.transfer);
      });
    }
    overrideImportScripts() {
      this.ctx.override(this.window, "importScripts", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (!_f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let _fdd1e7c9091b = new _f417c1c28204({
          scripts: _f9d1bc577e59
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("importScripts", _fdd1e7c9091b), _fdd1e7c9091b.intercepted ? _fdd1e7c9091b.returnValue : _fdd1e7c9091b.target.apply(_fdd1e7c9091b.that, _fdd1e7c9091b.data.scripts);
      });
    }
  }, _eae49f9b84b7 = _8989cbfb18fa;
  var _878ebbbf9850 = m(_e434b087a60b(), 1);
  var _cb668ee6953a = class extends _878ebbbf9850.default {
    constructor(_8ffa921e40eb) {
      super(), this.ctx = _8ffa921e40eb, this.window = this.ctx.window, this.URL = this.window.URL || {}, 
      this.createObjectURL = this.URL.createObjectURL, this.revokeObjectURL = this.URL.revokeObjectURL;
    }
    overrideObjectURL() {
      this.ctx.override(this.URL, "createObjectURL", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (!_f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b] = _f9d1bc577e59, _0c2d9a15385c = new _f417c1c28204({
          object: _fdd1e7c9091b
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("createObjectURL", _0c2d9a15385c), _0c2d9a15385c.intercepted ? _0c2d9a15385c.returnValue : _0c2d9a15385c.target.call(_0c2d9a15385c.that, _0c2d9a15385c.data.object);
      }), this.ctx.override(this.URL, "revokeObjectURL", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (!_f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b] = _f9d1bc577e59, _0c2d9a15385c = new _f417c1c28204({
          url: _fdd1e7c9091b
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("revokeObjectURL", _0c2d9a15385c), _0c2d9a15385c.intercepted ? _0c2d9a15385c.returnValue : _0c2d9a15385c.target.call(_0c2d9a15385c.that, _0c2d9a15385c.data.url);
      });
    }
  }, _8482f147b8d1 = _cb668ee6953a;
  var _edb05ff8811a = m(_e434b087a60b(), 1);
  var _379d6ca46034 = m(_e434b087a60b(), 1);
  var _15adffd2a8ea = class extends _379d6ca46034.default {
    constructor(_8ffa921e40eb) {
      super(), this.ctx = _8ffa921e40eb, this.window = _8ffa921e40eb.window, this.localStorage = this.window.localStorage || null, 
      this.sessionStorage = this.window.sessionStorage || null, this.Storage = this.window.Storage || {}, 
      this.storeProto = this.Storage.prototype || {}, this.getItem = this.storeProto.getItem || null, 
      this.setItem = this.storeProto.setItem || null, this.removeItem = this.storeProto.removeItem || null, 
      this.clear = this.storeProto.clear || null, this.key = this.storeProto.key || null, 
      this.methods = [ "key", "getItem", "setItem", "removeItem", "clear" ], this.wrappers = new _8ffa921e40eb.nativeMethods.Map;
    }
    overrideMethods() {
      this.ctx.override(this.storeProto, "getItem", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (!_f9d1bc577e59.length) return _8ffa921e40eb.apply(this.wrappers.get(_c331fbac9a70) || _c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b] = _f9d1bc577e59, _0c2d9a15385c = new _f417c1c28204({
          name: _fdd1e7c9091b
        }, _8ffa921e40eb, this.wrappers.get(_c331fbac9a70) || _c331fbac9a70);
        return this.emit("getItem", _0c2d9a15385c), _0c2d9a15385c.intercepted ? _0c2d9a15385c.returnValue : _0c2d9a15385c.target.call(_0c2d9a15385c.that, _0c2d9a15385c.data.name);
      }), this.ctx.override(this.storeProto, "setItem", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (2 > _f9d1bc577e59.length) return _8ffa921e40eb.apply(this.wrappers.get(_c331fbac9a70) || _c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b, _0c2d9a15385c] = _f9d1bc577e59, _53f7585e9797 = new _f417c1c28204({
          name: _fdd1e7c9091b,
          value: _0c2d9a15385c
        }, _8ffa921e40eb, this.wrappers.get(_c331fbac9a70) || _c331fbac9a70);
        return this.emit("setItem", _53f7585e9797), _53f7585e9797.intercepted ? _53f7585e9797.returnValue : _53f7585e9797.target.call(_53f7585e9797.that, _53f7585e9797.data.name, _53f7585e9797.data.value);
      }), this.ctx.override(this.storeProto, "removeItem", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (!_f9d1bc577e59.length) return _8ffa921e40eb.apply(this.wrappers.get(_c331fbac9a70) || _c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b] = _f9d1bc577e59, _0c2d9a15385c = new _f417c1c28204({
          name: _fdd1e7c9091b
        }, _8ffa921e40eb, this.wrappers.get(_c331fbac9a70) || _c331fbac9a70);
        return this.emit("removeItem", _0c2d9a15385c), _0c2d9a15385c.intercepted ? _0c2d9a15385c.returnValue : _0c2d9a15385c.target.call(_0c2d9a15385c.that, _0c2d9a15385c.data.name);
      }), this.ctx.override(this.storeProto, "clear", (_8ffa921e40eb, _c331fbac9a70) => {
        let _f9d1bc577e59 = new _f417c1c28204(null, _8ffa921e40eb, this.wrappers.get(_c331fbac9a70) || _c331fbac9a70);
        return this.emit("clear", _f9d1bc577e59), _f9d1bc577e59.intercepted ? _f9d1bc577e59.returnValue : _f9d1bc577e59.target.call(_f9d1bc577e59.that);
      }), this.ctx.override(this.storeProto, "key", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (!_f9d1bc577e59.length) return _8ffa921e40eb.apply(this.wrappers.get(_c331fbac9a70) || _c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b] = _f9d1bc577e59, _0c2d9a15385c = new _f417c1c28204({
          index: _fdd1e7c9091b
        }, _8ffa921e40eb, this.wrappers.get(_c331fbac9a70) || _c331fbac9a70);
        return this.emit("key", _0c2d9a15385c), _0c2d9a15385c.intercepted ? _0c2d9a15385c.returnValue : _0c2d9a15385c.target.call(_0c2d9a15385c.that, _0c2d9a15385c.data.index);
      });
    }
    overrideLength() {
      this.ctx.overrideDescriptor(this.storeProto, "length", {
        get: (_8ffa921e40eb, _c331fbac9a70) => {
          let _f9d1bc577e59 = new _f417c1c28204({
            length: _8ffa921e40eb.call(this.wrappers.get(_c331fbac9a70) || _c331fbac9a70)
          }, _8ffa921e40eb, this.wrappers.get(_c331fbac9a70) || _c331fbac9a70);
          return this.emit("length", _f9d1bc577e59), _f9d1bc577e59.intercepted ? _f9d1bc577e59.returnValue : _f9d1bc577e59.data.length;
        }
      });
    }
    emulate(_8ffa921e40eb, _c331fbac9a70 = {}) {
      this.ctx.nativeMethods.setPrototypeOf(_c331fbac9a70, this.storeProto);
      let _f9d1bc577e59 = new this.ctx.window.Proxy(_c331fbac9a70, {
        get: (_c331fbac9a70, _f9d1bc577e59) => {
          if (_f9d1bc577e59 in this.storeProto || typeof _f9d1bc577e59 == "symbol") return _8ffa921e40eb[_f9d1bc577e59];
          let _fdd1e7c9091b = new _f417c1c28204({
            name: _f9d1bc577e59
          }, null, _8ffa921e40eb);
          return this.emit("get", _fdd1e7c9091b), _fdd1e7c9091b.intercepted ? _fdd1e7c9091b.returnValue : _8ffa921e40eb[_fdd1e7c9091b.data.name];
        },
        set: (_c331fbac9a70, _f9d1bc577e59, _fdd1e7c9091b) => {
          if (_f9d1bc577e59 in this.storeProto || typeof _f9d1bc577e59 == "symbol") return _8ffa921e40eb[_f9d1bc577e59] = _fdd1e7c9091b;
          let _0c2d9a15385c = new _f417c1c28204({
            name: _f9d1bc577e59,
            value: _fdd1e7c9091b
          }, null, _8ffa921e40eb);
          return this.emit("set", _0c2d9a15385c), _0c2d9a15385c.intercepted ? _0c2d9a15385c.returnValue : _8ffa921e40eb[_0c2d9a15385c.data.name] = _0c2d9a15385c.data.value;
        },
        deleteProperty: (_c331fbac9a70, _f9d1bc577e59) => {
          if (typeof _f9d1bc577e59 == "symbol") return delete _8ffa921e40eb[_f9d1bc577e59];
          let _fdd1e7c9091b = new _f417c1c28204({
            name: _f9d1bc577e59
          }, null, _8ffa921e40eb);
          return this.emit("delete", _fdd1e7c9091b), _fdd1e7c9091b.intercepted ? _fdd1e7c9091b.returnValue : delete _8ffa921e40eb[_fdd1e7c9091b.data.name];
        }
      });
      return this.wrappers.set(_f9d1bc577e59, _8ffa921e40eb), this.ctx.nativeMethods.setPrototypeOf(_f9d1bc577e59, this.storeProto), 
      _f9d1bc577e59;
    }
  }, _f0b92d4b4e69 = _15adffd2a8ea;
  var _6394aec57d86 = m(_e434b087a60b(), 1);
  var _a66b92ae5a45 = class extends _6394aec57d86.default {
    constructor(_8ffa921e40eb) {
      super(), this.ctx = _8ffa921e40eb, this.window = _8ffa921e40eb.window, this.CSSStyleDeclaration = this.window.CSSStyleDeclaration || {}, 
      this.cssStyleProto = this.CSSStyleDeclaration.prototype || {}, this.getPropertyValue = this.cssStyleProto.getPropertyValue || null, 
      this.setProperty = this.cssStyleProto.setProperty || null, this.cssText - _8ffa921e40eb.nativeMethods.getOwnPropertyDescriptors(this.cssStyleProto, "cssText"), 
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
      this.ctx.override(this.cssStyleProto, "getPropertyValue", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (!_f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b] = _f9d1bc577e59, _0c2d9a15385c = new _f417c1c28204({
          property: _fdd1e7c9091b
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("getPropertyValue", _0c2d9a15385c), _0c2d9a15385c.intercepted ? _0c2d9a15385c.returnValue : _0c2d9a15385c.target.call(_0c2d9a15385c.that, _0c2d9a15385c.data.property);
      }), this.ctx.override(this.cssStyleProto, "setProperty", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (2 > _f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b, _0c2d9a15385c] = _f9d1bc577e59, _53f7585e9797 = new _f417c1c28204({
          property: _fdd1e7c9091b,
          value: _0c2d9a15385c
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("setProperty", _53f7585e9797), _53f7585e9797.intercepted ? _53f7585e9797.returnValue : _53f7585e9797.target.call(_53f7585e9797.that, _53f7585e9797.data.property, _53f7585e9797.data.value);
      });
    }
    overrideCssText() {
      this.ctx.overrideDescriptor(this.cssStyleProto, "cssText", {
        get: (_8ffa921e40eb, _c331fbac9a70) => {
          let _f9d1bc577e59 = new _f417c1c28204({
            value: _8ffa921e40eb.call(_c331fbac9a70)
          }, _8ffa921e40eb, _c331fbac9a70);
          return this.emit("getCssText", _f9d1bc577e59), _f9d1bc577e59.intercepted ? _f9d1bc577e59.returnValue : _f9d1bc577e59.data.value;
        },
        set: (_8ffa921e40eb, _c331fbac9a70, [_f9d1bc577e59]) => {
          let _fdd1e7c9091b = new _f417c1c28204({
            value: _f9d1bc577e59
          }, _8ffa921e40eb, _c331fbac9a70);
          return this.emit("setCssText", _fdd1e7c9091b), _fdd1e7c9091b.intercepted ? _fdd1e7c9091b.returnValue : _fdd1e7c9091b.target.call(_fdd1e7c9091b.that, _fdd1e7c9091b.data.value);
        }
      });
    }
  }, _4991d92e0be9 = _a66b92ae5a45;
  var _a7fc4eb90bdb = m(_e434b087a60b(), 1);
  var _7c592f069f0e = class extends _a7fc4eb90bdb.default {
    constructor(_8ffa921e40eb) {
      super(), this.ctx = _8ffa921e40eb, this.window = this.ctx.window, this.IDBDatabase = this.window.IDBDatabase || {}, 
      this.idbDatabaseProto = this.IDBDatabase.prototype || {}, this.IDBFactory = this.window.IDBFactory || {}, 
      this.idbFactoryProto = this.IDBFactory.prototype || {}, this.open = this.idbFactoryProto.open;
    }
    overrideOpen() {
      this.ctx.override(this.IDBFactory.prototype, "open", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        if (!_f9d1bc577e59.length || !_f9d1bc577e59.length) return _8ffa921e40eb.apply(_c331fbac9a70, _f9d1bc577e59);
        let [_fdd1e7c9091b, _0c2d9a15385c] = _f9d1bc577e59, _53f7585e9797 = new _f417c1c28204({
          name: _fdd1e7c9091b,
          version: _0c2d9a15385c
        }, _8ffa921e40eb, _c331fbac9a70);
        return this.emit("idbFactoryOpen", _53f7585e9797), _53f7585e9797.intercepted ? _53f7585e9797.returnValue : _53f7585e9797.target.call(_53f7585e9797.that, _53f7585e9797.data.name, _53f7585e9797.data.version);
      });
    }
    overrideName() {
      this.ctx.overrideDescriptor(this.idbDatabaseProto, "name", {
        get: (_8ffa921e40eb, _c331fbac9a70) => {
          let _f9d1bc577e59 = new _f417c1c28204({
            value: _8ffa921e40eb.call(_c331fbac9a70)
          }, _8ffa921e40eb, _c331fbac9a70);
          return this.emit("idbFactoryName", _f9d1bc577e59), _f9d1bc577e59.intercepted ? _f9d1bc577e59.returnValue : _f9d1bc577e59.data.value;
        }
      });
    }
  }, _227bb279a807 = _7c592f069f0e;
  var _dc7bd7855171 = m(_e434b087a60b(), 1);
  var _a136717114b2 = class extends _dc7bd7855171.default {
    constructor(_8ffa921e40eb) {
      super(), this.ctx = _8ffa921e40eb, this.window = _8ffa921e40eb.window, this.WebSocket = this.window.WebSocket || {}, 
      this.wsProto = this.WebSocket.prototype, this.CONNECTING = WebSocket.CONNECTING, 
      this.OPEN = WebSocket.OPEN, this.CLOSING = WebSocket.CLOSING, this.CLOSED = WebSocket.CLOSED, 
      this.socketmap = new WeakMap;
    }
    overrideWebSocket(_8ffa921e40eb) {
      this.ctx.override(this.window, "WebSocket", (_c331fbac9a70, _f9d1bc577e59, _fdd1e7c9091b) => {
        let _0c2d9a15385c = new EventTarget;
        Object.setPrototypeOf(_0c2d9a15385c, this.WebSocket.prototype), _0c2d9a15385c.constructor = this.WebSocket;
        let i = _8ffa921e40eb => new Proxy(_8ffa921e40eb, {
          get(_8ffa921e40eb, _c331fbac9a70) {
            return _c331fbac9a70 === "isTrusted" ? !0 : Reflect.get(_8ffa921e40eb, _c331fbac9a70);
          }
        }), _53f7585e9797 = _8ffa921e40eb.createWebSocket(_fdd1e7c9091b[0], _fdd1e7c9091b[1], null, {
          "User-Agent": navigator.userAgent,
          Origin: __uv.meta.url.origin
        }), _e434b087a60b = {
          extensions: "",
          protocol: "",
          url: _fdd1e7c9091b[0],
          binaryType: "blob",
          barews: _53f7585e9797
        };
        function u(_8ffa921e40eb) {
          _e434b087a60b["on" + _8ffa921e40eb.type]?.(i(_8ffa921e40eb)), _0c2d9a15385c.dispatchEvent(_8ffa921e40eb);
        }
        return _53f7585e9797.addEventListener("open", () => {
          u(new Event("open"));
        }), _53f7585e9797.addEventListener("close", _8ffa921e40eb => {
          u(new CloseEvent("close", _8ffa921e40eb));
        }), _53f7585e9797.addEventListener("message", async _8ffa921e40eb => {
          let _c331fbac9a70 = _8ffa921e40eb.data;
          typeof _c331fbac9a70 == "string" || ("byteLength" in _c331fbac9a70 ? _e434b087a60b.binaryType === "blob" ? _c331fbac9a70 = new Blob([ _c331fbac9a70 ]) : Object.setPrototypeOf(_c331fbac9a70, ArrayBuffer.prototype) : "arrayBuffer" in _c331fbac9a70 && _e434b087a60b.binaryType === "arraybuffer" && (_c331fbac9a70 = await _c331fbac9a70.arrayBuffer(), 
          Object.setPrototypeOf(_c331fbac9a70, ArrayBuffer.prototype)));
          let _f9d1bc577e59 = new MessageEvent("message", {
            data: _c331fbac9a70,
            origin: _8ffa921e40eb.origin,
            lastEventId: _8ffa921e40eb.lastEventId,
            source: _8ffa921e40eb.source,
            ports: _8ffa921e40eb.ports
          });
          u(_f9d1bc577e59);
        }), _53f7585e9797.addEventListener("error", () => {
          u(new Event("error"));
        }), this.socketmap.set(_0c2d9a15385c, _e434b087a60b), _0c2d9a15385c;
      }, !0), this.ctx.overrideDescriptor(this.wsProto, "binaryType", {
        get: (_8ffa921e40eb, _c331fbac9a70) => this.socketmap.get(_c331fbac9a70).binaryType,
        set: (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
          let _fdd1e7c9091b = this.socketmap.get(_c331fbac9a70);
          (_f9d1bc577e59[0] === "blob" || _f9d1bc577e59[0] === "arraybuffer") && (_fdd1e7c9091b.binaryType = _f9d1bc577e59[0]);
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "bufferedAmount", {
        get: (_8ffa921e40eb, _c331fbac9a70) => 0
      }), this.ctx.overrideDescriptor(this.wsProto, "extensions", {
        get: (_8ffa921e40eb, _c331fbac9a70) => this.socketmap.get(_c331fbac9a70).extensions
      }), this.ctx.overrideDescriptor(this.wsProto, "onclose", {
        get: (_8ffa921e40eb, _c331fbac9a70) => this.socketmap.get(_c331fbac9a70).onclose,
        set: (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
          let _fdd1e7c9091b = this.socketmap.get(_c331fbac9a70);
          _fdd1e7c9091b.onclose = _f9d1bc577e59[0];
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "onerror", {
        get: (_8ffa921e40eb, _c331fbac9a70) => this.socketmap.get(_c331fbac9a70).onerror,
        set: (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
          let _fdd1e7c9091b = this.socketmap.get(_c331fbac9a70);
          _fdd1e7c9091b.onerror = _f9d1bc577e59[0];
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "onmessage", {
        get: (_8ffa921e40eb, _c331fbac9a70) => this.socketmap.get(_c331fbac9a70).onmessage,
        set: (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
          let _fdd1e7c9091b = this.socketmap.get(_c331fbac9a70);
          _fdd1e7c9091b.onmessage = _f9d1bc577e59[0];
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "onopen", {
        get: (_8ffa921e40eb, _c331fbac9a70) => this.socketmap.get(_c331fbac9a70).onopen,
        set: (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
          let _fdd1e7c9091b = this.socketmap.get(_c331fbac9a70);
          _fdd1e7c9091b.onopen = _f9d1bc577e59[0];
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "url", {
        get: (_8ffa921e40eb, _c331fbac9a70) => this.socketmap.get(_c331fbac9a70).url
      }), this.ctx.overrideDescriptor(this.wsProto, "protocol", {
        get: (_8ffa921e40eb, _c331fbac9a70) => this.socketmap.get(_c331fbac9a70).protocol
      }), this.ctx.overrideDescriptor(this.wsProto, "readyState", {
        get: (_8ffa921e40eb, _c331fbac9a70) => this.socketmap.get(_c331fbac9a70).barews.readyState
      }), this.ctx.override(this.wsProto, "send", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => this.socketmap.get(_c331fbac9a70).barews.send(_f9d1bc577e59[0]), !1), 
      this.ctx.override(this.wsProto, "close", (_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59) => {
        let _fdd1e7c9091b = this.socketmap.get(_c331fbac9a70);
        return _f9d1bc577e59[0] === void 0 && (_f9d1bc577e59[0] = 1e3), _f9d1bc577e59[1] === void 0 && (_f9d1bc577e59[1] = ""), 
        _fdd1e7c9091b.barews.close(_f9d1bc577e59[0], _f9d1bc577e59[1]);
      }, !1);
    }
  }, _6566ab8f6e1c = _a136717114b2;
  var _e9f29270fdfe = class extends _edb05ff8811a.default {
    constructor(_8ffa921e40eb = self, _c331fbac9a70, _f9d1bc577e59 = !_8ffa921e40eb.window) {
      super(), this.window = _8ffa921e40eb, this.nativeMethods = {
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
      }, this.worker = _f9d1bc577e59, this.bareClient = _c331fbac9a70, this.fetch = new _e1aa48d3f0d2(this), 
      this.xhr = new _4128a83cdffc(this), this.idb = new _227bb279a807(this), this.history = new _5ca30de275a3(this), 
      this.element = new _b03f52af3e7e(this), this.node = new _06d9bdca66cc(this), this.document = new _432d3a50f9bf(this), 
      this.function = new _1e68dadf9922(this), this.object = new _bb217456d169(this), 
      this.websocket = new _6566ab8f6e1c(this), this.message = new _037d5ed47948(this), 
      this.navigator = new _8e8375b1d046(this), this.eventSource = new _466101f3972a(this), 
      this.attribute = new _5c718aa4723a(this), this.url = new _8482f147b8d1(this), this.workers = new _eae49f9b84b7(this), 
      this.location = new _b0a4f6c11445(this), this.storage = new _f0b92d4b4e69(this), 
      this.style = new _4991d92e0be9(this);
    }
    override(_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59, _fdd1e7c9091b) {
      let _0c2d9a15385c = this.wrap(_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59, _fdd1e7c9091b);
      return _8ffa921e40eb[_c331fbac9a70] = _0c2d9a15385c, _0c2d9a15385c;
    }
    overrideDescriptor(_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59 = {}) {
      let _fdd1e7c9091b = this.wrapDescriptor(_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59);
      return _fdd1e7c9091b ? (this.nativeMethods.defineProperty(_8ffa921e40eb, _c331fbac9a70, _fdd1e7c9091b), 
      _fdd1e7c9091b) : {};
    }
    wrap(_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59, _fdd1e7c9091b = !1) {
      let _0c2d9a15385c = _8ffa921e40eb[_c331fbac9a70];
      if (!_0c2d9a15385c) return _0c2d9a15385c;
      let _53f7585e9797 = "prototype" in _0c2d9a15385c ? function() {
        return _f9d1bc577e59(_0c2d9a15385c, this, [ ...arguments ]);
      } : {
        attach() {
          return _f9d1bc577e59(_0c2d9a15385c, this, [ ...arguments ]);
        }
      }.attach;
      return _fdd1e7c9091b && (_53f7585e9797.prototype = _0c2d9a15385c.prototype, _53f7585e9797.prototype.constructor = _53f7585e9797), 
      this.emit("wrap", _0c2d9a15385c, _53f7585e9797, _fdd1e7c9091b), _53f7585e9797;
    }
    wrapDescriptor(_8ffa921e40eb, _c331fbac9a70, _f9d1bc577e59 = {}) {
      let _fdd1e7c9091b = this.nativeMethods.getOwnPropertyDescriptor(_8ffa921e40eb, _c331fbac9a70);
      if (!_fdd1e7c9091b) return !1;
      for (let _8ffa921e40eb in _f9d1bc577e59) _8ffa921e40eb in _fdd1e7c9091b && (_8ffa921e40eb === "get" || _8ffa921e40eb === "set" ? _fdd1e7c9091b[_8ffa921e40eb] = this.wrap(_fdd1e7c9091b, _8ffa921e40eb, _f9d1bc577e59[_8ffa921e40eb]) : _fdd1e7c9091b[_8ffa921e40eb] = typeof _f9d1bc577e59[_8ffa921e40eb] == "function" ? _f9d1bc577e59[_8ffa921e40eb](_fdd1e7c9091b[_8ffa921e40eb]) : _f9d1bc577e59[_8ffa921e40eb]);
      return _fdd1e7c9091b;
    }
  }, _47471ed8f839 = _e9f29270fdfe;
  typeof self == "object" && (self.UVClient = _e9f29270fdfe);
})();
