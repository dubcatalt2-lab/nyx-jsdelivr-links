"use strict";

(() => {
  var _3f045e0fccd3 = Object.create;
  var _1f100573b15c = Object.defineProperty;
  var _15854d55a4f2 = Object.getOwnPropertyDescriptor;
  var _5f004e3cc4ac = Object.getOwnPropertyNames;
  var _9a592ffbcc2c = Object.getPrototypeOf, _24a0205889f3 = Object.prototype.hasOwnProperty;
  var et = (_3f045e0fccd3, _1f100573b15c) => () => (_1f100573b15c || _3f045e0fccd3((_1f100573b15c = {
    exports: {}
  }).exports, _1f100573b15c), _1f100573b15c.exports);
  var tt = (_3f045e0fccd3, _9a592ffbcc2c, _98ba96af03cb, _6b0bca94d690) => {
    if (_9a592ffbcc2c && typeof _9a592ffbcc2c == "object" || typeof _9a592ffbcc2c == "function") for (let _131c63f51932 of _5f004e3cc4ac(_9a592ffbcc2c)) !_24a0205889f3.call(_3f045e0fccd3, _131c63f51932) && _131c63f51932 !== _98ba96af03cb && _1f100573b15c(_3f045e0fccd3, _131c63f51932, {
      get: () => _9a592ffbcc2c[_131c63f51932],
      enumerable: !(_6b0bca94d690 = _15854d55a4f2(_9a592ffbcc2c, _131c63f51932)) || _6b0bca94d690.enumerable
    });
    return _3f045e0fccd3;
  };
  var m = (_15854d55a4f2, _5f004e3cc4ac, _24a0205889f3) => (_24a0205889f3 = _15854d55a4f2 != null ? _3f045e0fccd3(_9a592ffbcc2c(_15854d55a4f2)) : {}, 
  tt(_5f004e3cc4ac || !_15854d55a4f2 || !_15854d55a4f2.__esModule ? _1f100573b15c(_24a0205889f3, "default", {
    value: _15854d55a4f2,
    enumerable: !0
  }) : _24a0205889f3, _15854d55a4f2));
  var _98ba96af03cb = et((_3f045e0fccd3, _1f100573b15c) => {
    "use strict";
    var _15854d55a4f2 = typeof Reflect == "object" ? Reflect : null, _5f004e3cc4ac = _15854d55a4f2 && typeof _15854d55a4f2.apply == "function" ? _15854d55a4f2.apply : function(_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) {
      return Function.prototype.apply.call(_3f045e0fccd3, _1f100573b15c, _15854d55a4f2);
    }, _9a592ffbcc2c;
    _15854d55a4f2 && typeof _15854d55a4f2.ownKeys == "function" ? _9a592ffbcc2c = _15854d55a4f2.ownKeys : Object.getOwnPropertySymbols ? _9a592ffbcc2c = function(_3f045e0fccd3) {
      return Object.getOwnPropertyNames(_3f045e0fccd3).concat(Object.getOwnPropertySymbols(_3f045e0fccd3));
    } : _9a592ffbcc2c = function(_3f045e0fccd3) {
      return Object.getOwnPropertyNames(_3f045e0fccd3);
    };
    function rt(_3f045e0fccd3) {
      console && console.warn && console.warn(_3f045e0fccd3);
    }
    var _24a0205889f3 = Number.isNaN || function(_3f045e0fccd3) {
      return _3f045e0fccd3 !== _3f045e0fccd3;
    };
    function d() {
      d.init.call(this);
    }
    _1f100573b15c.exports = d;
    _1f100573b15c.exports.once = st;
    d.EventEmitter = d;
    d.prototype._events = void 0;
    d.prototype._eventsCount = 0;
    d.prototype._maxListeners = void 0;
    var _98ba96af03cb = 10;
    function P(_3f045e0fccd3) {
      if (typeof _3f045e0fccd3 != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof _3f045e0fccd3);
    }
    Object.defineProperty(d, "defaultMaxListeners", {
      enumerable: !0,
      get: function() {
        return _98ba96af03cb;
      },
      set: function(_3f045e0fccd3) {
        if (typeof _3f045e0fccd3 != "number" || _3f045e0fccd3 < 0 || _24a0205889f3(_3f045e0fccd3)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + _3f045e0fccd3 + ".");
        _98ba96af03cb = _3f045e0fccd3;
      }
    });
    d.init = function() {
      (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), 
      this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
    };
    d.prototype.setMaxListeners = function(_3f045e0fccd3) {
      if (typeof _3f045e0fccd3 != "number" || _3f045e0fccd3 < 0 || _24a0205889f3(_3f045e0fccd3)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + _3f045e0fccd3 + ".");
      return this._maxListeners = _3f045e0fccd3, this;
    };
    function J(_3f045e0fccd3) {
      return _3f045e0fccd3._maxListeners === void 0 ? d.defaultMaxListeners : _3f045e0fccd3._maxListeners;
    }
    d.prototype.getMaxListeners = function() {
      return J(this);
    };
    d.prototype.emit = function(_3f045e0fccd3) {
      for (var _1f100573b15c = [], _15854d55a4f2 = 1; _15854d55a4f2 < arguments.length; _15854d55a4f2++) _1f100573b15c.push(arguments[_15854d55a4f2]);
      var _9a592ffbcc2c = _3f045e0fccd3 === "error", _24a0205889f3 = this._events;
      if (_24a0205889f3 !== void 0) _9a592ffbcc2c = _9a592ffbcc2c && _24a0205889f3.error === void 0; else if (!_9a592ffbcc2c) return !1;
      if (_9a592ffbcc2c) {
        var _98ba96af03cb;
        if (_1f100573b15c.length > 0 && (_98ba96af03cb = _1f100573b15c[0]), _98ba96af03cb instanceof Error) throw _98ba96af03cb;
        var _6b0bca94d690 = new Error("Unhandled error." + (_98ba96af03cb ? " (" + _98ba96af03cb.message + ")" : ""));
        throw _6b0bca94d690.context = _98ba96af03cb, _6b0bca94d690;
      }
      var _131c63f51932 = _24a0205889f3[_3f045e0fccd3];
      if (_131c63f51932 === void 0) return !1;
      if (typeof _131c63f51932 == "function") _5f004e3cc4ac(_131c63f51932, this, _1f100573b15c); else for (var _e89dfe68b14b = _131c63f51932.length, _26990659d446 = re(_131c63f51932, _e89dfe68b14b), _15854d55a4f2 = 0; _15854d55a4f2 < _e89dfe68b14b; ++_15854d55a4f2) _5f004e3cc4ac(_26990659d446[_15854d55a4f2], this, _1f100573b15c);
      return !0;
    };
    function Y(_3f045e0fccd3, _1f100573b15c, _15854d55a4f2, _5f004e3cc4ac) {
      var _9a592ffbcc2c, _24a0205889f3, _98ba96af03cb;
      if (P(_15854d55a4f2), _24a0205889f3 = _3f045e0fccd3._events, _24a0205889f3 === void 0 ? (_24a0205889f3 = _3f045e0fccd3._events = Object.create(null), 
      _3f045e0fccd3._eventsCount = 0) : (_24a0205889f3.newListener !== void 0 && (_3f045e0fccd3.emit("newListener", _1f100573b15c, _15854d55a4f2.listener ? _15854d55a4f2.listener : _15854d55a4f2), 
      _24a0205889f3 = _3f045e0fccd3._events), _98ba96af03cb = _24a0205889f3[_1f100573b15c]), 
      _98ba96af03cb === void 0) _98ba96af03cb = _24a0205889f3[_1f100573b15c] = _15854d55a4f2, 
      ++_3f045e0fccd3._eventsCount; else if (typeof _98ba96af03cb == "function" ? _98ba96af03cb = _24a0205889f3[_1f100573b15c] = _5f004e3cc4ac ? [ _15854d55a4f2, _98ba96af03cb ] : [ _98ba96af03cb, _15854d55a4f2 ] : _5f004e3cc4ac ? _98ba96af03cb.unshift(_15854d55a4f2) : _98ba96af03cb.push(_15854d55a4f2), 
      _9a592ffbcc2c = J(_3f045e0fccd3), _9a592ffbcc2c > 0 && _98ba96af03cb.length > _9a592ffbcc2c && !_98ba96af03cb.warned) {
        _98ba96af03cb.warned = !0;
        var _6b0bca94d690 = new Error("Possible EventEmitter memory leak detected. " + _98ba96af03cb.length + " " + String(_1f100573b15c) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        _6b0bca94d690.name = "MaxListenersExceededWarning", _6b0bca94d690.emitter = _3f045e0fccd3, 
        _6b0bca94d690.type = _1f100573b15c, _6b0bca94d690.count = _98ba96af03cb.length, 
        rt(_6b0bca94d690);
      }
      return _3f045e0fccd3;
    }
    d.prototype.addListener = function(_3f045e0fccd3, _1f100573b15c) {
      return Y(this, _3f045e0fccd3, _1f100573b15c, !1);
    };
    d.prototype.on = d.prototype.addListener;
    d.prototype.prependListener = function(_3f045e0fccd3, _1f100573b15c) {
      return Y(this, _3f045e0fccd3, _1f100573b15c, !0);
    };
    function ot() {
      if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 
      arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
    }
    function Z(_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) {
      var _5f004e3cc4ac = {
        fired: !1,
        wrapFn: void 0,
        target: _3f045e0fccd3,
        type: _1f100573b15c,
        listener: _15854d55a4f2
      }, _9a592ffbcc2c = ot.bind(_5f004e3cc4ac);
      return _9a592ffbcc2c.listener = _15854d55a4f2, _5f004e3cc4ac.wrapFn = _9a592ffbcc2c, 
      _9a592ffbcc2c;
    }
    d.prototype.once = function(_3f045e0fccd3, _1f100573b15c) {
      return P(_1f100573b15c), this.on(_3f045e0fccd3, Z(this, _3f045e0fccd3, _1f100573b15c)), 
      this;
    };
    d.prototype.prependOnceListener = function(_3f045e0fccd3, _1f100573b15c) {
      return P(_1f100573b15c), this.prependListener(_3f045e0fccd3, Z(this, _3f045e0fccd3, _1f100573b15c)), 
      this;
    };
    d.prototype.removeListener = function(_3f045e0fccd3, _1f100573b15c) {
      var _15854d55a4f2, _5f004e3cc4ac, _9a592ffbcc2c, _24a0205889f3, _98ba96af03cb;
      if (P(_1f100573b15c), _5f004e3cc4ac = this._events, _5f004e3cc4ac === void 0) return this;
      if (_15854d55a4f2 = _5f004e3cc4ac[_3f045e0fccd3], _15854d55a4f2 === void 0) return this;
      if (_15854d55a4f2 === _1f100573b15c || _15854d55a4f2.listener === _1f100573b15c) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete _5f004e3cc4ac[_3f045e0fccd3], 
      _5f004e3cc4ac.removeListener && this.emit("removeListener", _3f045e0fccd3, _15854d55a4f2.listener || _1f100573b15c)); else if (typeof _15854d55a4f2 != "function") {
        for (_9a592ffbcc2c = -1, _24a0205889f3 = _15854d55a4f2.length - 1; _24a0205889f3 >= 0; _24a0205889f3--) if (_15854d55a4f2[_24a0205889f3] === _1f100573b15c || _15854d55a4f2[_24a0205889f3].listener === _1f100573b15c) {
          _98ba96af03cb = _15854d55a4f2[_24a0205889f3].listener, _9a592ffbcc2c = _24a0205889f3;
          break;
        }
        if (_9a592ffbcc2c < 0) return this;
        _9a592ffbcc2c === 0 ? _15854d55a4f2.shift() : nt(_15854d55a4f2, _9a592ffbcc2c), 
        _15854d55a4f2.length === 1 && (_5f004e3cc4ac[_3f045e0fccd3] = _15854d55a4f2[0]), 
        _5f004e3cc4ac.removeListener !== void 0 && this.emit("removeListener", _3f045e0fccd3, _98ba96af03cb || _1f100573b15c);
      }
      return this;
    };
    d.prototype.off = d.prototype.removeListener;
    d.prototype.removeAllListeners = function(_3f045e0fccd3) {
      var _1f100573b15c, _15854d55a4f2, _5f004e3cc4ac;
      if (_15854d55a4f2 = this._events, _15854d55a4f2 === void 0) return this;
      if (_15854d55a4f2.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), 
      this._eventsCount = 0) : _15854d55a4f2[_3f045e0fccd3] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete _15854d55a4f2[_3f045e0fccd3]), 
      this;
      if (arguments.length === 0) {
        var _9a592ffbcc2c = Object.keys(_15854d55a4f2), _24a0205889f3;
        for (_5f004e3cc4ac = 0; _5f004e3cc4ac < _9a592ffbcc2c.length; ++_5f004e3cc4ac) _24a0205889f3 = _9a592ffbcc2c[_5f004e3cc4ac], 
        _24a0205889f3 !== "removeListener" && this.removeAllListeners(_24a0205889f3);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), 
        this._eventsCount = 0, this;
      }
      if (_1f100573b15c = _15854d55a4f2[_3f045e0fccd3], typeof _1f100573b15c == "function") this.removeListener(_3f045e0fccd3, _1f100573b15c); else if (_1f100573b15c !== void 0) for (_5f004e3cc4ac = _1f100573b15c.length - 1; _5f004e3cc4ac >= 0; _5f004e3cc4ac--) this.removeListener(_3f045e0fccd3, _1f100573b15c[_5f004e3cc4ac]);
      return this;
    };
    function ee(_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) {
      var _5f004e3cc4ac = _3f045e0fccd3._events;
      if (_5f004e3cc4ac === void 0) return [];
      var _9a592ffbcc2c = _5f004e3cc4ac[_1f100573b15c];
      return _9a592ffbcc2c === void 0 ? [] : typeof _9a592ffbcc2c == "function" ? _15854d55a4f2 ? [ _9a592ffbcc2c.listener || _9a592ffbcc2c ] : [ _9a592ffbcc2c ] : _15854d55a4f2 ? it(_9a592ffbcc2c) : re(_9a592ffbcc2c, _9a592ffbcc2c.length);
    }
    d.prototype.listeners = function(_3f045e0fccd3) {
      return ee(this, _3f045e0fccd3, !0);
    };
    d.prototype.rawListeners = function(_3f045e0fccd3) {
      return ee(this, _3f045e0fccd3, !1);
    };
    d.listenerCount = function(_3f045e0fccd3, _1f100573b15c) {
      return typeof _3f045e0fccd3.listenerCount == "function" ? _3f045e0fccd3.listenerCount(_1f100573b15c) : te.call(_3f045e0fccd3, _1f100573b15c);
    };
    d.prototype.listenerCount = te;
    function te(_3f045e0fccd3) {
      var _1f100573b15c = this._events;
      if (_1f100573b15c !== void 0) {
        var _15854d55a4f2 = _1f100573b15c[_3f045e0fccd3];
        if (typeof _15854d55a4f2 == "function") return 1;
        if (_15854d55a4f2 !== void 0) return _15854d55a4f2.length;
      }
      return 0;
    }
    d.prototype.eventNames = function() {
      return this._eventsCount > 0 ? _9a592ffbcc2c(this._events) : [];
    };
    function re(_3f045e0fccd3, _1f100573b15c) {
      for (var _15854d55a4f2 = new Array(_1f100573b15c), _5f004e3cc4ac = 0; _5f004e3cc4ac < _1f100573b15c; ++_5f004e3cc4ac) _15854d55a4f2[_5f004e3cc4ac] = _3f045e0fccd3[_5f004e3cc4ac];
      return _15854d55a4f2;
    }
    function nt(_3f045e0fccd3, _1f100573b15c) {
      for (;_1f100573b15c + 1 < _3f045e0fccd3.length; _1f100573b15c++) _3f045e0fccd3[_1f100573b15c] = _3f045e0fccd3[_1f100573b15c + 1];
      _3f045e0fccd3.pop();
    }
    function it(_3f045e0fccd3) {
      for (var _1f100573b15c = new Array(_3f045e0fccd3.length), _15854d55a4f2 = 0; _15854d55a4f2 < _1f100573b15c.length; ++_15854d55a4f2) _1f100573b15c[_15854d55a4f2] = _3f045e0fccd3[_15854d55a4f2].listener || _3f045e0fccd3[_15854d55a4f2];
      return _1f100573b15c;
    }
    function st(_3f045e0fccd3, _1f100573b15c) {
      return new Promise(function(_15854d55a4f2, _5f004e3cc4ac) {
        function n(_15854d55a4f2) {
          _3f045e0fccd3.removeListener(_1f100573b15c, o), _5f004e3cc4ac(_15854d55a4f2);
        }
        function o() {
          typeof _3f045e0fccd3.removeListener == "function" && _3f045e0fccd3.removeListener("error", n), 
          _15854d55a4f2([].slice.call(arguments));
        }
        oe(_3f045e0fccd3, _1f100573b15c, o, {
          once: !0
        }), _1f100573b15c !== "error" && at(_3f045e0fccd3, n, {
          once: !0
        });
      });
    }
    function at(_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) {
      typeof _3f045e0fccd3.on == "function" && oe(_3f045e0fccd3, "error", _1f100573b15c, _15854d55a4f2);
    }
    function oe(_3f045e0fccd3, _1f100573b15c, _15854d55a4f2, _5f004e3cc4ac) {
      if (typeof _3f045e0fccd3.on == "function") _5f004e3cc4ac.once ? _3f045e0fccd3.once(_1f100573b15c, _15854d55a4f2) : _3f045e0fccd3.on(_1f100573b15c, _15854d55a4f2); else if (typeof _3f045e0fccd3.addEventListener == "function") _3f045e0fccd3.addEventListener(_1f100573b15c, function n(_9a592ffbcc2c) {
        _5f004e3cc4ac.once && _3f045e0fccd3.removeEventListener(_1f100573b15c, n), _15854d55a4f2(_9a592ffbcc2c);
      }); else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof _3f045e0fccd3);
    }
  });
  var _6b0bca94d690 = m(_98ba96af03cb(), 1);
  var _131c63f51932 = class {
    #_3f045e0fccd3;
    #_1f100573b15c;
    constructor(_3f045e0fccd3 = {}, _1f100573b15c = null, _15854d55a4f2 = null) {
      this.#_3f045e0fccd3 = !1, this.#_1f100573b15c = null, this.data = _3f045e0fccd3, 
      this.target = _1f100573b15c, this.that = _15854d55a4f2;
    }
    get intercepted() {
      return this.#_3f045e0fccd3;
    }
    get returnValue() {
      return this.#_1f100573b15c;
    }
    respondWith(_3f045e0fccd3) {
      this.#_1f100573b15c = _3f045e0fccd3, this.#_3f045e0fccd3 = !0;
    }
  }, _e89dfe68b14b = _131c63f51932;
  var _26990659d446 = class extends _6b0bca94d690.default {
    constructor(_3f045e0fccd3) {
      super(), this.ctx = _3f045e0fccd3, this.window = _3f045e0fccd3.window, this.document = this.window.document, 
      this.Document = this.window.Document || {}, this.DOMParser = this.window.DOMParser || {}, 
      this.docProto = this.Document.prototype || {}, this.domProto = this.DOMParser.prototype || {}, 
      this.title = _3f045e0fccd3.nativeMethods.getOwnPropertyDescriptor(this.docProto, "title"), 
      this.cookie = _3f045e0fccd3.nativeMethods.getOwnPropertyDescriptor(this.docProto, "cookie"), 
      this.referrer = _3f045e0fccd3.nativeMethods.getOwnPropertyDescriptor(this.docProto, "referrer"), 
      this.domain = _3f045e0fccd3.nativeMethods.getOwnPropertyDescriptor(this.docProto, "domain"), 
      this.documentURI = _3f045e0fccd3.nativeMethods.getOwnPropertyDescriptor(this.docProto, "documentURI"), 
      this.write = this.docProto.write, this.writeln = this.docProto.writeln, this.querySelector = this.docProto.querySelector, 
      this.querySelectorAll = this.docProto.querySelectorAll, this.parseFromString = this.domProto.parseFromString, 
      this.URL = _3f045e0fccd3.nativeMethods.getOwnPropertyDescriptor(this.docProto, "URL");
    }
    overrideParseFromString() {
      this.ctx.override(this.domProto, "parseFromString", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (2 > _15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac, _9a592ffbcc2c] = _15854d55a4f2, _24a0205889f3 = new _e89dfe68b14b({
          string: _5f004e3cc4ac,
          type: _9a592ffbcc2c
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("parseFromString", _24a0205889f3), _24a0205889f3.intercepted ? _24a0205889f3.returnValue : _24a0205889f3.target.call(_24a0205889f3.that, _24a0205889f3.data.string, _24a0205889f3.data.type);
      });
    }
    overrideQuerySelector() {
      this.ctx.override(this.docProto, "querySelector", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (!_15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac] = _15854d55a4f2, _9a592ffbcc2c = new _e89dfe68b14b({
          selectors: _5f004e3cc4ac
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("querySelector", _9a592ffbcc2c), _9a592ffbcc2c.intercepted ? _9a592ffbcc2c.returnValue : _9a592ffbcc2c.target.call(_9a592ffbcc2c.that, _9a592ffbcc2c.data.selectors);
      });
    }
    overrideDomain() {
      this.ctx.overrideDescriptor(this.docProto, "domain", {
        get: (_3f045e0fccd3, _1f100573b15c) => {
          let _15854d55a4f2 = new _e89dfe68b14b({
            value: _3f045e0fccd3.call(_1f100573b15c)
          }, _3f045e0fccd3, _1f100573b15c);
          return this.emit("getDomain", _15854d55a4f2), _15854d55a4f2.intercepted ? _15854d55a4f2.returnValue : _15854d55a4f2.data.value;
        },
        set: (_3f045e0fccd3, _1f100573b15c, [_15854d55a4f2]) => {
          let _5f004e3cc4ac = new _e89dfe68b14b({
            value: _15854d55a4f2
          }, _3f045e0fccd3, _1f100573b15c);
          return this.emit("setDomain", _5f004e3cc4ac), _5f004e3cc4ac.intercepted ? _5f004e3cc4ac.returnValue : _5f004e3cc4ac.target.call(_5f004e3cc4ac.that, _5f004e3cc4ac.data.value);
        }
      });
    }
    overrideReferrer() {
      this.ctx.overrideDescriptor(this.docProto, "referrer", {
        get: (_3f045e0fccd3, _1f100573b15c) => {
          let _15854d55a4f2 = new _e89dfe68b14b({
            value: _3f045e0fccd3.call(_1f100573b15c)
          }, _3f045e0fccd3, _1f100573b15c);
          return this.emit("referrer", _15854d55a4f2), _15854d55a4f2.intercepted ? _15854d55a4f2.returnValue : _15854d55a4f2.data.value;
        }
      });
    }
    overrideCreateTreeWalker() {
      this.ctx.override(this.docProto, "createTreeWalker", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (!_15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac, _9a592ffbcc2c = 4294967295, _24a0205889f3, _98ba96af03cb] = _15854d55a4f2, _6b0bca94d690 = new _e89dfe68b14b({
          root: _5f004e3cc4ac,
          show: _9a592ffbcc2c,
          filter: _24a0205889f3,
          expandEntityReferences: _98ba96af03cb
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("createTreeWalker", _6b0bca94d690), _6b0bca94d690.intercepted ? _6b0bca94d690.returnValue : _6b0bca94d690.target.call(_6b0bca94d690.that, _6b0bca94d690.data.root, _6b0bca94d690.data.show, _6b0bca94d690.data.filter, _6b0bca94d690.data.expandEntityReferences);
      });
    }
    overrideWrite() {
      this.ctx.override(this.docProto, "write", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (!_15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [..._5f004e3cc4ac] = _15854d55a4f2, _9a592ffbcc2c = new _e89dfe68b14b({
          html: _5f004e3cc4ac
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("write", _9a592ffbcc2c), _9a592ffbcc2c.intercepted ? _9a592ffbcc2c.returnValue : _9a592ffbcc2c.target.apply(_9a592ffbcc2c.that, _9a592ffbcc2c.data.html);
      }), this.ctx.override(this.docProto, "writeln", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (!_15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [..._5f004e3cc4ac] = _15854d55a4f2, _9a592ffbcc2c = new _e89dfe68b14b({
          html: _5f004e3cc4ac
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("writeln", _9a592ffbcc2c), _9a592ffbcc2c.intercepted ? _9a592ffbcc2c.returnValue : _9a592ffbcc2c.target.apply(_9a592ffbcc2c.that, _9a592ffbcc2c.data.html);
      });
    }
    overrideDocumentURI() {
      this.ctx.overrideDescriptor(this.docProto, "documentURI", {
        get: (_3f045e0fccd3, _1f100573b15c) => {
          let _15854d55a4f2 = new _e89dfe68b14b({
            value: _3f045e0fccd3.call(_1f100573b15c)
          }, _3f045e0fccd3, _1f100573b15c);
          return this.emit("documentURI", _15854d55a4f2), _15854d55a4f2.intercepted ? _15854d55a4f2.returnValue : _15854d55a4f2.data.value;
        }
      });
    }
    overrideURL() {
      this.ctx.overrideDescriptor(this.docProto, "URL", {
        get: (_3f045e0fccd3, _1f100573b15c) => {
          let _15854d55a4f2 = new _e89dfe68b14b({
            value: _3f045e0fccd3.call(_1f100573b15c)
          }, _3f045e0fccd3, _1f100573b15c);
          return this.emit("url", _15854d55a4f2), _15854d55a4f2.intercepted ? _15854d55a4f2.returnValue : _15854d55a4f2.data.value;
        }
      });
    }
    overrideCookie() {
      this.ctx.overrideDescriptor(this.docProto, "cookie", {
        get: (_3f045e0fccd3, _1f100573b15c) => {
          let _15854d55a4f2 = new _e89dfe68b14b({
            value: _3f045e0fccd3.call(_1f100573b15c)
          }, _3f045e0fccd3, _1f100573b15c);
          return this.emit("getCookie", _15854d55a4f2), _15854d55a4f2.intercepted ? _15854d55a4f2.returnValue : _15854d55a4f2.data.value;
        },
        set: (_3f045e0fccd3, _1f100573b15c, [_15854d55a4f2]) => {
          let _5f004e3cc4ac = new _e89dfe68b14b({
            value: _15854d55a4f2
          }, _3f045e0fccd3, _1f100573b15c);
          return this.emit("setCookie", _5f004e3cc4ac), _5f004e3cc4ac.intercepted ? _5f004e3cc4ac.returnValue : _5f004e3cc4ac.target.call(_5f004e3cc4ac.that, _5f004e3cc4ac.data.value);
        }
      });
    }
    overrideTitle() {
      this.ctx.overrideDescriptor(this.docProto, "title", {
        get: (_3f045e0fccd3, _1f100573b15c) => {
          let _15854d55a4f2 = new _e89dfe68b14b({
            value: _3f045e0fccd3.call(_1f100573b15c)
          }, _3f045e0fccd3, _1f100573b15c);
          return this.emit("getTitle", _15854d55a4f2), _15854d55a4f2.intercepted ? _15854d55a4f2.returnValue : _15854d55a4f2.data.value;
        },
        set: (_3f045e0fccd3, _1f100573b15c, [_15854d55a4f2]) => {
          let _5f004e3cc4ac = new _e89dfe68b14b({
            value: _15854d55a4f2
          }, _3f045e0fccd3, _1f100573b15c);
          return this.emit("setTitle", _5f004e3cc4ac), _5f004e3cc4ac.intercepted ? _5f004e3cc4ac.returnValue : _5f004e3cc4ac.target.call(_5f004e3cc4ac.that, _5f004e3cc4ac.data.value);
        }
      });
    }
  }, _32a0026ad374 = _26990659d446;
  var _c74f824525fb = m(_98ba96af03cb(), 1);
  var _2670734b5e0a = class extends _c74f824525fb.default {
    constructor(_3f045e0fccd3) {
      super(), this.ctx = _3f045e0fccd3, this.window = _3f045e0fccd3.window, this.Audio = this.window.Audio, 
      this.Element = this.window.Element, this.elemProto = this.Element ? this.Element.prototype : {}, 
      this.innerHTML = _3f045e0fccd3.nativeMethods.getOwnPropertyDescriptor(this.elemProto, "innerHTML"), 
      this.outerHTML = _3f045e0fccd3.nativeMethods.getOwnPropertyDescriptor(this.elemProto, "outerHTML"), 
      this.setAttribute = this.elemProto.setAttribute, this.getAttribute = this.elemProto.getAttribute, 
      this.removeAttribute = this.elemProto.removeAttribute, this.hasAttribute = this.elemProto.hasAttribute, 
      this.querySelector = this.elemProto.querySelector, this.querySelectorAll = this.elemProto.querySelectorAll, 
      this.insertAdjacentHTML = this.elemProto.insertAdjacentHTML, this.insertAdjacentText = this.elemProto.insertAdjacentText;
    }
    overrideQuerySelector() {
      this.ctx.override(this.elemProto, "querySelector", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (!_15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac] = _15854d55a4f2, _9a592ffbcc2c = new _e89dfe68b14b({
          selectors: _5f004e3cc4ac
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("querySelector", _9a592ffbcc2c), _9a592ffbcc2c.intercepted ? _9a592ffbcc2c.returnValue : _9a592ffbcc2c.target.call(_9a592ffbcc2c.that, _9a592ffbcc2c.data.selectors);
      });
    }
    overrideAttribute() {
      this.ctx.override(this.elemProto, "getAttribute", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (!_15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac] = _15854d55a4f2, _9a592ffbcc2c = new _e89dfe68b14b({
          name: _5f004e3cc4ac
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("getAttribute", _9a592ffbcc2c), _9a592ffbcc2c.intercepted ? _9a592ffbcc2c.returnValue : _9a592ffbcc2c.target.call(_9a592ffbcc2c.that, _9a592ffbcc2c.data.name);
      }), this.ctx.override(this.elemProto, "setAttribute", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (2 > _15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac, _9a592ffbcc2c] = _15854d55a4f2, _24a0205889f3 = new _e89dfe68b14b({
          name: _5f004e3cc4ac,
          value: _9a592ffbcc2c
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("setAttribute", _24a0205889f3), _24a0205889f3.intercepted ? _24a0205889f3.returnValue : _24a0205889f3.target.call(_24a0205889f3.that, _24a0205889f3.data.name, _24a0205889f3.data.value);
      }), this.ctx.override(this.elemProto, "hasAttribute", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (!_15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac] = _15854d55a4f2, _9a592ffbcc2c = new _e89dfe68b14b({
          name: _5f004e3cc4ac
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("hasAttribute", _9a592ffbcc2c), _9a592ffbcc2c.intercepted ? _9a592ffbcc2c.returnValue : _9a592ffbcc2c.target.call(_9a592ffbcc2c.that, _9a592ffbcc2c.data.name);
      }), this.ctx.override(this.elemProto, "removeAttribute", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (!_15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac] = _15854d55a4f2, _9a592ffbcc2c = new _e89dfe68b14b({
          name: _5f004e3cc4ac
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("removeAttribute", _9a592ffbcc2c), _9a592ffbcc2c.intercepted ? _9a592ffbcc2c.returnValue : _9a592ffbcc2c.target.call(_9a592ffbcc2c.that, _9a592ffbcc2c.data.name);
      });
    }
    overrideAudio() {
      this.ctx.override(this.window, "Audio", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (!_15854d55a4f2.length) return new _3f045e0fccd3(..._15854d55a4f2);
        let [_5f004e3cc4ac] = _15854d55a4f2, _9a592ffbcc2c = new _e89dfe68b14b({
          url: _5f004e3cc4ac
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("audio", _9a592ffbcc2c), _9a592ffbcc2c.intercepted ? _9a592ffbcc2c.returnValue : new _9a592ffbcc2c.target(_9a592ffbcc2c.data.url);
      }, !0);
    }
    overrideHtml() {
      this.hookProperty(this.Element, "innerHTML", {
        get: (_3f045e0fccd3, _1f100573b15c) => {
          let _15854d55a4f2 = new _e89dfe68b14b({
            value: _3f045e0fccd3.call(_1f100573b15c)
          }, _3f045e0fccd3, _1f100573b15c);
          return this.emit("getInnerHTML", _15854d55a4f2), _15854d55a4f2.intercepted ? _15854d55a4f2.returnValue : _15854d55a4f2.data.value;
        },
        set: (_3f045e0fccd3, _1f100573b15c, [_15854d55a4f2]) => {
          let _5f004e3cc4ac = new _e89dfe68b14b({
            value: _15854d55a4f2
          }, _3f045e0fccd3, _1f100573b15c);
          if (this.emit("setInnerHTML", _5f004e3cc4ac), _5f004e3cc4ac.intercepted) return _5f004e3cc4ac.returnValue;
          _3f045e0fccd3.call(_1f100573b15c, _5f004e3cc4ac.data.value);
        }
      }), this.hookProperty(this.Element, "outerHTML", {
        get: (_3f045e0fccd3, _1f100573b15c) => {
          let _15854d55a4f2 = new _e89dfe68b14b({
            value: _3f045e0fccd3.call(_1f100573b15c)
          }, _3f045e0fccd3, _1f100573b15c);
          return this.emit("getOuterHTML", _15854d55a4f2), _15854d55a4f2.intercepted ? _15854d55a4f2.returnValue : _15854d55a4f2.data.value;
        },
        set: (_3f045e0fccd3, _1f100573b15c, [_15854d55a4f2]) => {
          let _5f004e3cc4ac = new _e89dfe68b14b({
            value: _15854d55a4f2
          }, _3f045e0fccd3, _1f100573b15c);
          if (this.emit("setOuterHTML", _5f004e3cc4ac), _5f004e3cc4ac.intercepted) return _5f004e3cc4ac.returnValue;
          _3f045e0fccd3.call(_1f100573b15c, _5f004e3cc4ac.data.value);
        }
      });
    }
    overrideInsertAdjacentHTML() {
      this.ctx.override(this.elemProto, "insertAdjacentHTML", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (2 > _15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac, _9a592ffbcc2c] = _15854d55a4f2, _24a0205889f3 = new _e89dfe68b14b({
          position: _5f004e3cc4ac,
          html: _9a592ffbcc2c
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("insertAdjacentHTML", _24a0205889f3), _24a0205889f3.intercepted ? _24a0205889f3.returnValue : _24a0205889f3.target.call(_24a0205889f3.that, _24a0205889f3.data.position, _24a0205889f3.data.html);
      });
    }
    overrideInsertAdjacentText() {
      this.ctx.override(this.elemProto, "insertAdjacentText", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (2 > _15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac, _9a592ffbcc2c] = _15854d55a4f2, _24a0205889f3 = new _e89dfe68b14b({
          position: _5f004e3cc4ac,
          text: _9a592ffbcc2c
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("insertAdjacentText", _24a0205889f3), _24a0205889f3.intercepted ? _24a0205889f3.returnValue : _24a0205889f3.target.call(_24a0205889f3.that, _24a0205889f3.data.position, _24a0205889f3.data.text);
      });
    }
    hookProperty(_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) {
      if (!_3f045e0fccd3) return !1;
      if (this.ctx.nativeMethods.isArray(_3f045e0fccd3)) {
        for (let _5f004e3cc4ac of _3f045e0fccd3) this.hookProperty(_5f004e3cc4ac, _1f100573b15c, _15854d55a4f2);
        return !0;
      }
      let _5f004e3cc4ac = _3f045e0fccd3.prototype;
      return this.ctx.overrideDescriptor(_5f004e3cc4ac, _1f100573b15c, _15854d55a4f2), 
      !0;
    }
  }, _60843a65f570 = _2670734b5e0a;
  var _aff884a0bf9f = m(_98ba96af03cb(), 1);
  var _964dfabbe114 = class extends _aff884a0bf9f.default {
    constructor(_3f045e0fccd3) {
      super(), this.ctx = _3f045e0fccd3, this.window = _3f045e0fccd3.window, this.Node = _3f045e0fccd3.window.Node || {}, 
      this.nodeProto = this.Node.prototype || {}, this.compareDocumentPosition = this.nodeProto.compareDocumentPosition, 
      this.contains = this.nodeProto.contains, this.insertBefore = this.nodeProto.insertBefore, 
      this.replaceChild = this.nodeProto.replaceChild, this.append = this.nodeProto.append, 
      this.appendChild = this.nodeProto.appendChild, this.removeChild = this.nodeProto.removeChild, 
      this.textContent = _3f045e0fccd3.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "textContent"), 
      this.parentNode = _3f045e0fccd3.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "parentNode"), 
      this.parentElement = _3f045e0fccd3.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "parentElement"), 
      this.childNodes = _3f045e0fccd3.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "childNodes"), 
      this.baseURI = _3f045e0fccd3.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "baseURI"), 
      this.previousSibling = _3f045e0fccd3.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "previousSibling"), 
      this.ownerDocument = _3f045e0fccd3.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "ownerDocument");
    }
    overrideTextContent() {
      this.ctx.overrideDescriptor(this.nodeProto, "textContent", {
        get: (_3f045e0fccd3, _1f100573b15c) => {
          let _15854d55a4f2 = new _e89dfe68b14b({
            value: _3f045e0fccd3.call(_1f100573b15c)
          }, _3f045e0fccd3, _1f100573b15c);
          return this.emit("getTextContent", _15854d55a4f2), _15854d55a4f2.intercepted ? _15854d55a4f2.returnValue : _15854d55a4f2.data.value;
        },
        set: (_3f045e0fccd3, _1f100573b15c, [_15854d55a4f2]) => {
          let _5f004e3cc4ac = new _e89dfe68b14b({
            value: _15854d55a4f2
          }, _3f045e0fccd3, _1f100573b15c);
          if (this.emit("setTextContent", _5f004e3cc4ac), _5f004e3cc4ac.intercepted) return _5f004e3cc4ac.returnValue;
          _3f045e0fccd3.call(_1f100573b15c, _5f004e3cc4ac.data.value);
        }
      });
    }
    overrideAppend() {
      this.ctx.override(this.nodeProto, "append", (_3f045e0fccd3, _1f100573b15c, [..._15854d55a4f2]) => {
        let _5f004e3cc4ac = new _e89dfe68b14b({
          nodes: _15854d55a4f2
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("append", _5f004e3cc4ac), _5f004e3cc4ac.intercepted ? _5f004e3cc4ac.returnValue : _5f004e3cc4ac.target.call(_5f004e3cc4ac.that, _5f004e3cc4ac.data.nodes);
      }), this.ctx.override(this.nodeProto, "appendChild", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (!_15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac] = _15854d55a4f2, _9a592ffbcc2c = new _e89dfe68b14b({
          node: _5f004e3cc4ac
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("appendChild", _9a592ffbcc2c), _9a592ffbcc2c.intercepted ? _9a592ffbcc2c.returnValue : _9a592ffbcc2c.target.call(_9a592ffbcc2c.that, _9a592ffbcc2c.data.node);
      });
    }
    overrideBaseURI() {
      this.ctx.overrideDescriptor(this.nodeProto, "baseURI", {
        get: (_3f045e0fccd3, _1f100573b15c) => {
          let _15854d55a4f2 = new _e89dfe68b14b({
            value: _3f045e0fccd3.call(_1f100573b15c)
          }, _3f045e0fccd3, _1f100573b15c);
          return this.emit("baseURI", _15854d55a4f2), _15854d55a4f2.intercepted ? _15854d55a4f2.returnValue : _15854d55a4f2.data.value;
        }
      });
    }
    overrideParent() {
      this.ctx.overrideDescriptor(this.nodeProto, "parentNode", {
        get: (_3f045e0fccd3, _1f100573b15c) => {
          let _15854d55a4f2 = new _e89dfe68b14b({
            node: _3f045e0fccd3.call(_1f100573b15c)
          }, _3f045e0fccd3, _1f100573b15c);
          return this.emit("parentNode", _15854d55a4f2), _15854d55a4f2.intercepted ? _15854d55a4f2.returnValue : _15854d55a4f2.data.node;
        }
      }), this.ctx.overrideDescriptor(this.nodeProto, "parentElement", {
        get: (_3f045e0fccd3, _1f100573b15c) => {
          let _15854d55a4f2 = new _e89dfe68b14b({
            element: _3f045e0fccd3.call(_1f100573b15c)
          }, _3f045e0fccd3, _1f100573b15c);
          return this.emit("parentElement", _15854d55a4f2), _15854d55a4f2.intercepted ? _15854d55a4f2.returnValue : _15854d55a4f2.data.node;
        }
      });
    }
    overrideOwnerDocument() {
      this.ctx.overrideDescriptor(this.nodeProto, "ownerDocument", {
        get: (_3f045e0fccd3, _1f100573b15c) => {
          let _15854d55a4f2 = new _e89dfe68b14b({
            document: _3f045e0fccd3.call(_1f100573b15c)
          }, _3f045e0fccd3, _1f100573b15c);
          return this.emit("ownerDocument", _15854d55a4f2), _15854d55a4f2.intercepted ? _15854d55a4f2.returnValue : _15854d55a4f2.data.document;
        }
      });
    }
    overrideCompareDocumentPosit1ion() {
      this.ctx.override(this.nodeProto, "compareDocumentPosition", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (!_15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac] = _15854d55a4f2, _9a592ffbcc2c = new _e89dfe68b14b({
          node: _5f004e3cc4ac
        }, _3f045e0fccd3, _1f100573b15c);
        return _9a592ffbcc2c.intercepted ? _9a592ffbcc2c.returnValue : _9a592ffbcc2c.target.call(_9a592ffbcc2c.that, _9a592ffbcc2c.data.node);
      });
    }
    overrideChildMethods() {
      this.ctx.override(this.nodeProto, "removeChild");
    }
  }, _b97655f6364d = _964dfabbe114;
  var _a8582b310dc6 = m(_98ba96af03cb(), 1);
  var _eaed6e74328d = class extends _a8582b310dc6.default {
    constructor(_3f045e0fccd3) {
      super(), this.ctx = _3f045e0fccd3, this.window = _3f045e0fccd3.window, this.Attr = this.window.Attr || {}, 
      this.attrProto = this.Attr.prototype || {}, this.value = _3f045e0fccd3.nativeMethods.getOwnPropertyDescriptor(this.attrProto, "value"), 
      this.name = _3f045e0fccd3.nativeMethods.getOwnPropertyDescriptor(this.attrProto, "name"), 
      this.getNamedItem = this.attrProto.getNamedItem || null, this.setNamedItem = this.attrProto.setNamedItem || null, 
      this.removeNamedItem = this.attrProto.removeNamedItem || null, this.getNamedItemNS = this.attrProto.getNamedItemNS || null, 
      this.setNamedItemNS = this.attrProto.setNamedItemNS || null, this.removeNamedItemNS = this.attrProto.removeNamedItemNS || null, 
      this.item = this.attrProto.item || null;
    }
    overrideNameValue() {
      this.ctx.overrideDescriptor(this.attrProto, "name", {
        get: (_3f045e0fccd3, _1f100573b15c) => {
          let _15854d55a4f2 = new _e89dfe68b14b({
            value: _3f045e0fccd3.call(_1f100573b15c)
          }, _3f045e0fccd3, _1f100573b15c);
          return this.emit("name", _15854d55a4f2), _15854d55a4f2.intercepted ? _15854d55a4f2.returnValue : _15854d55a4f2.data.value;
        }
      }), this.ctx.overrideDescriptor(this.attrProto, "value", {
        get: (_3f045e0fccd3, _1f100573b15c) => {
          let _15854d55a4f2 = new _e89dfe68b14b({
            name: this.name.get.call(_1f100573b15c),
            value: _3f045e0fccd3.call(_1f100573b15c)
          }, _3f045e0fccd3, _1f100573b15c);
          return this.emit("getValue", _15854d55a4f2), _15854d55a4f2.intercepted ? _15854d55a4f2.returnValue : _15854d55a4f2.data.value;
        },
        set: (_3f045e0fccd3, _1f100573b15c, [_15854d55a4f2]) => {
          let _5f004e3cc4ac = new _e89dfe68b14b({
            name: this.name.get.call(_1f100573b15c),
            value: _15854d55a4f2
          }, _3f045e0fccd3, _1f100573b15c);
          if (this.emit("setValue", _5f004e3cc4ac), _5f004e3cc4ac.intercepted) return _5f004e3cc4ac.returnValue;
          _5f004e3cc4ac.target.call(_5f004e3cc4ac.that, _5f004e3cc4ac.data.value);
        }
      });
    }
    overrideItemMethods() {
      this.ctx.override(this.attrProto, "getNamedItem", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (!_15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac] = _15854d55a4f2, _9a592ffbcc2c = new _e89dfe68b14b({
          name: _5f004e3cc4ac
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("getNamedItem", _9a592ffbcc2c), _9a592ffbcc2c.intercepted ? _9a592ffbcc2c.returnValue : _9a592ffbcc2c.target.call(_9a592ffbcc2c.that, _9a592ffbcc2c.data.name);
      }), this.ctx.override(this.attrProto, "setNamedItem", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (2 > _15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac, _9a592ffbcc2c] = _15854d55a4f2, _24a0205889f3 = new _e89dfe68b14b({
          name: _5f004e3cc4ac,
          value: _9a592ffbcc2c
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("setNamedItem", _24a0205889f3), _24a0205889f3.intercepted ? _24a0205889f3.returnValue : _24a0205889f3.target.call(_24a0205889f3.that, _24a0205889f3.data.name, _24a0205889f3.data.value);
      }), this.ctx.override(this.attrProto, "removeNamedItem", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (!_15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac] = _15854d55a4f2, _9a592ffbcc2c = new _e89dfe68b14b({
          name: _5f004e3cc4ac
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("removeNamedItem", _9a592ffbcc2c), _9a592ffbcc2c.intercepted ? _9a592ffbcc2c.returnValue : _9a592ffbcc2c.target.call(_9a592ffbcc2c.that, _9a592ffbcc2c.data.name);
      }), this.ctx.override(this.attrProto, "item", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (!_15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac] = _15854d55a4f2, _9a592ffbcc2c = new _e89dfe68b14b({
          index: _5f004e3cc4ac
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("item", _9a592ffbcc2c), _9a592ffbcc2c.intercepted ? _9a592ffbcc2c.returnValue : _9a592ffbcc2c.target.call(_9a592ffbcc2c.that, _9a592ffbcc2c.data.name);
      }), this.ctx.override(this.attrProto, "getNamedItemNS", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (2 > _15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac, _9a592ffbcc2c] = _15854d55a4f2, _24a0205889f3 = new _e89dfe68b14b({
          namespace: _5f004e3cc4ac,
          localName: _9a592ffbcc2c
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("getNamedItemNS", _24a0205889f3), _24a0205889f3.intercepted ? _24a0205889f3.returnValue : _24a0205889f3.target.call(_24a0205889f3.that, _24a0205889f3.data.namespace, _24a0205889f3.data.localName);
      }), this.ctx.override(this.attrProto, "setNamedItemNS", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (!_15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac] = _15854d55a4f2, _9a592ffbcc2c = new _e89dfe68b14b({
          attr: _5f004e3cc4ac
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("setNamedItemNS", _9a592ffbcc2c), _9a592ffbcc2c.intercepted ? _9a592ffbcc2c.returnValue : _9a592ffbcc2c.target.call(_9a592ffbcc2c.that, _9a592ffbcc2c.data.name);
      }), this.ctx.override(this.attrProto, "removeNamedItemNS", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (2 > _15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac, _9a592ffbcc2c] = _15854d55a4f2, _24a0205889f3 = new _e89dfe68b14b({
          namespace: _5f004e3cc4ac,
          localName: _9a592ffbcc2c
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("removeNamedItemNS", _24a0205889f3), _24a0205889f3.intercepted ? _24a0205889f3.returnValue : _24a0205889f3.target.call(_24a0205889f3.that, _24a0205889f3.data.namespace, _24a0205889f3.data.localName);
      });
    }
  }, _f4b8122d1c12 = _eaed6e74328d;
  var _f88a4f4dd48f = m(_98ba96af03cb(), 1);
  var _a6f1bacf193d = class extends _f88a4f4dd48f.default {
    constructor(_3f045e0fccd3) {
      super(), this.ctx = _3f045e0fccd3, this.window = _3f045e0fccd3.window, this.Function = this.window.Function, 
      this.fnProto = this.Function.prototype, this.toString = this.fnProto.toString, this.fnStrings = _3f045e0fccd3.fnStrings, 
      this.call = this.fnProto.call, this.apply = this.fnProto.apply, this.bind = this.fnProto.bind;
    }
    overrideFunction() {
      this.ctx.override(this.window, "Function", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (!_15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let _5f004e3cc4ac = _15854d55a4f2[_15854d55a4f2.length - 1], _9a592ffbcc2c = [];
        for (let _3f045e0fccd3 = 0; _3f045e0fccd3 < _15854d55a4f2.length - 1; _3f045e0fccd3++) _9a592ffbcc2c.push(_15854d55a4f2[_3f045e0fccd3]);
        let _24a0205889f3 = new _e89dfe68b14b({
          script: _5f004e3cc4ac,
          args: _9a592ffbcc2c
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("function", _24a0205889f3), _24a0205889f3.intercepted ? _24a0205889f3.returnValue : _24a0205889f3.target.call(_24a0205889f3.that, ..._24a0205889f3.data.args, _24a0205889f3.data.script);
      }, !0);
    }
    overrideToString() {
      this.ctx.override(this.fnProto, "toString", (_3f045e0fccd3, _1f100573b15c) => {
        let _15854d55a4f2 = new _e89dfe68b14b({
          fn: _1f100573b15c
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("toString", _15854d55a4f2), _15854d55a4f2.intercepted ? _15854d55a4f2.returnValue : _15854d55a4f2.target.call(_15854d55a4f2.data.fn);
      });
    }
  }, _1bbe072c9259 = _a6f1bacf193d;
  var _09c679183b54 = m(_98ba96af03cb(), 1);
  var _bb5d42388817 = class extends _09c679183b54.default {
    constructor(_3f045e0fccd3) {
      super(), this.ctx = _3f045e0fccd3, this.window = _3f045e0fccd3.window, this.Object = this.window.Object, 
      this.getOwnPropertyDescriptors = this.Object.getOwnPropertyDescriptors, this.getOwnPropertyDescriptor = this.Object.getOwnPropertyDescriptor, 
      this.getOwnPropertyNames = this.Object.getOwnPropertyNames;
    }
    overrideGetPropertyNames() {
      this.ctx.override(this.Object, "getOwnPropertyNames", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (!_15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac] = _15854d55a4f2, _9a592ffbcc2c = new _e89dfe68b14b({
          names: _3f045e0fccd3.call(_1f100573b15c, _5f004e3cc4ac)
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("getOwnPropertyNames", _9a592ffbcc2c), _9a592ffbcc2c.intercepted ? _9a592ffbcc2c.returnValue : _9a592ffbcc2c.data.names;
      });
    }
    overrideGetOwnPropertyDescriptors() {
      this.ctx.override(this.Object, "getOwnPropertyDescriptors", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (!_15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac] = _15854d55a4f2, _9a592ffbcc2c = new _e89dfe68b14b({
          descriptors: _3f045e0fccd3.call(_1f100573b15c, _5f004e3cc4ac)
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("getOwnPropertyDescriptors", _9a592ffbcc2c), _9a592ffbcc2c.intercepted ? _9a592ffbcc2c.returnValue : _9a592ffbcc2c.data.descriptors;
      });
    }
  }, _e4314ad36418 = _bb5d42388817;
  var _cfc56e97bd86 = m(_98ba96af03cb(), 1);
  var _194b4979872e = class extends _cfc56e97bd86.default {
    constructor(_3f045e0fccd3) {
      super(), this.ctx = _3f045e0fccd3, this.window = _3f045e0fccd3.window, this.fetch = this.window.fetch, 
      this.Request = this.window.Request, this.Response = this.window.Response, this.Headers = this.window.Headers, 
      this.reqProto = this.Request ? this.Request.prototype : {}, this.resProto = this.Response ? this.Response.prototype : {}, 
      this.headersProto = this.Headers ? this.Headers.prototype : {}, this.reqUrl = _3f045e0fccd3.nativeMethods.getOwnPropertyDescriptor(this.reqProto, "url"), 
      this.resUrl = _3f045e0fccd3.nativeMethods.getOwnPropertyDescriptor(this.resProto, "url"), 
      this.reqHeaders = _3f045e0fccd3.nativeMethods.getOwnPropertyDescriptor(this.reqProto, "headers"), 
      this.resHeaders = _3f045e0fccd3.nativeMethods.getOwnPropertyDescriptor(this.resProto, "headers");
    }
    override() {
      return this.overrideRequest(), this.overrideUrl(), this.overrideHeaders(), !0;
    }
    overrideRequest() {
      return this.fetch ? (this.ctx.override(this.window, "fetch", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (!_15854d55a4f2.length || _15854d55a4f2[0] instanceof this.Request) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac, _9a592ffbcc2c = {}] = _15854d55a4f2, _24a0205889f3 = new _e89dfe68b14b({
          input: _5f004e3cc4ac,
          options: _9a592ffbcc2c
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("request", _24a0205889f3), _24a0205889f3.intercepted ? _24a0205889f3.returnValue : _24a0205889f3.target.call(_24a0205889f3.that, _24a0205889f3.data.input, _24a0205889f3.data.options);
      }), this.ctx.override(this.window, "Request", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (!_15854d55a4f2.length) return new _3f045e0fccd3(..._15854d55a4f2);
        let [_5f004e3cc4ac, _9a592ffbcc2c = {}] = _15854d55a4f2, _24a0205889f3 = new _e89dfe68b14b({
          input: _5f004e3cc4ac,
          options: _9a592ffbcc2c
        }, _3f045e0fccd3);
        return this.emit("request", _24a0205889f3), _24a0205889f3.intercepted ? _24a0205889f3.returnValue : new _24a0205889f3.target(_24a0205889f3.data.input, _24a0205889f3.data.options);
      }, !0), !0) : !1;
    }
    overrideUrl() {
      return this.ctx.overrideDescriptor(this.reqProto, "url", {
        get: (_3f045e0fccd3, _1f100573b15c) => {
          let _15854d55a4f2 = new _e89dfe68b14b({
            value: _3f045e0fccd3.call(_1f100573b15c)
          }, _3f045e0fccd3, _1f100573b15c);
          return this.emit("requestUrl", _15854d55a4f2), _15854d55a4f2.intercepted ? _15854d55a4f2.returnValue : _15854d55a4f2.data.value;
        }
      }), this.ctx.overrideDescriptor(this.resProto, "url", {
        get: (_3f045e0fccd3, _1f100573b15c) => {
          let _15854d55a4f2 = new _e89dfe68b14b({
            value: _3f045e0fccd3.call(_1f100573b15c)
          }, _3f045e0fccd3, _1f100573b15c);
          return this.emit("responseUrl", _15854d55a4f2), _15854d55a4f2.intercepted ? _15854d55a4f2.returnValue : _15854d55a4f2.data.value;
        }
      }), !0;
    }
    overrideHeaders() {
      return this.Headers ? (this.ctx.overrideDescriptor(this.reqProto, "headers", {
        get: (_3f045e0fccd3, _1f100573b15c) => {
          let _15854d55a4f2 = new _e89dfe68b14b({
            value: _3f045e0fccd3.call(_1f100573b15c)
          }, _3f045e0fccd3, _1f100573b15c);
          return this.emit("requestHeaders", _15854d55a4f2), _15854d55a4f2.intercepted ? _15854d55a4f2.returnValue : _15854d55a4f2.data.value;
        }
      }), this.ctx.overrideDescriptor(this.resProto, "headers", {
        get: (_3f045e0fccd3, _1f100573b15c) => {
          let _15854d55a4f2 = new _e89dfe68b14b({
            value: _3f045e0fccd3.call(_1f100573b15c)
          }, _3f045e0fccd3, _1f100573b15c);
          return this.emit("responseHeaders", _15854d55a4f2), _15854d55a4f2.intercepted ? _15854d55a4f2.returnValue : _15854d55a4f2.data.value;
        }
      }), this.ctx.override(this.headersProto, "get", (_3f045e0fccd3, _1f100573b15c, [_15854d55a4f2]) => {
        if (!_15854d55a4f2) return _3f045e0fccd3.call(_1f100573b15c);
        let _5f004e3cc4ac = new _e89dfe68b14b({
          name: _15854d55a4f2,
          value: _3f045e0fccd3.call(_1f100573b15c, _15854d55a4f2)
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("getHeader", _5f004e3cc4ac), _5f004e3cc4ac.intercepted ? _5f004e3cc4ac.returnValue : _5f004e3cc4ac.data.value;
      }), this.ctx.override(this.headersProto, "set", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (2 > _15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac, _9a592ffbcc2c] = _15854d55a4f2, _24a0205889f3 = new _e89dfe68b14b({
          name: _5f004e3cc4ac,
          value: _9a592ffbcc2c
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("setHeader", _24a0205889f3), _24a0205889f3.intercepted ? _24a0205889f3.returnValue : _24a0205889f3.target.call(_24a0205889f3.that, _24a0205889f3.data.name, _24a0205889f3.data.value);
      }), this.ctx.override(this.headersProto, "has", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (!_15854d55a4f2.length) return _3f045e0fccd3.call(_1f100573b15c);
        let [_5f004e3cc4ac] = _15854d55a4f2, _9a592ffbcc2c = new _e89dfe68b14b({
          name: _5f004e3cc4ac,
          value: _3f045e0fccd3.call(_1f100573b15c, _5f004e3cc4ac)
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("hasHeader", _9a592ffbcc2c), _9a592ffbcc2c.intercepted ? _9a592ffbcc2c.returnValue : _9a592ffbcc2c.data;
      }), this.ctx.override(this.headersProto, "append", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (2 > _15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac, _9a592ffbcc2c] = _15854d55a4f2, _24a0205889f3 = new _e89dfe68b14b({
          name: _5f004e3cc4ac,
          value: _9a592ffbcc2c
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("appendHeader", _24a0205889f3), _24a0205889f3.intercepted ? _24a0205889f3.returnValue : _24a0205889f3.target.call(_24a0205889f3.that, _24a0205889f3.data.name, _24a0205889f3.data.value);
      }), this.ctx.override(this.headersProto, "delete", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (!_15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac] = _15854d55a4f2, _9a592ffbcc2c = new _e89dfe68b14b({
          name: _5f004e3cc4ac
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("deleteHeader", _9a592ffbcc2c), _9a592ffbcc2c.intercepted ? _9a592ffbcc2c.returnValue : _9a592ffbcc2c.target.call(_9a592ffbcc2c.that, _9a592ffbcc2c.data.name);
      }), !0) : !1;
    }
  }, _93c68abd7eb9 = _194b4979872e;
  var _79fcdd4fee75 = m(_98ba96af03cb(), 1);
  var _a895fb02f0ab = class extends _79fcdd4fee75.default {
    constructor(_3f045e0fccd3) {
      super(), this.ctx = _3f045e0fccd3, this.window = _3f045e0fccd3.window, this.XMLHttpRequest = this.window.XMLHttpRequest, 
      this.xhrProto = this.window.XMLHttpRequest ? this.window.XMLHttpRequest.prototype : {}, 
      this.open = this.xhrProto.open, this.abort = this.xhrProto.abort, this.send = this.xhrProto.send, 
      this.overrideMimeType = this.xhrProto.overrideMimeType, this.getAllResponseHeaders = this.xhrProto.getAllResponseHeaders, 
      this.getResponseHeader = this.xhrProto.getResponseHeader, this.setRequestHeader = this.xhrProto.setRequestHeader, 
      this.responseURL = _3f045e0fccd3.nativeMethods.getOwnPropertyDescriptor(this.xhrProto, "responseURL"), 
      this.responseText = _3f045e0fccd3.nativeMethods.getOwnPropertyDescriptor(this.xhrProto, "responseText");
    }
    override() {
      this.overrideOpen(), this.overrideSend(), this.overrideMimeType(), this.overrideGetResHeader(), 
      this.overrideGetResHeaders(), this.overrideSetReqHeader();
    }
    overrideOpen() {
      this.ctx.override(this.xhrProto, "open", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (2 > _15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac, _9a592ffbcc2c, _24a0205889f3 = !0, _98ba96af03cb = null, _6b0bca94d690 = null] = _15854d55a4f2, _131c63f51932 = new _e89dfe68b14b({
          method: _5f004e3cc4ac,
          input: _9a592ffbcc2c,
          async: _24a0205889f3,
          user: _98ba96af03cb,
          password: _6b0bca94d690
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("open", _131c63f51932), _131c63f51932.intercepted ? _131c63f51932.returnValue : _131c63f51932.target.call(_131c63f51932.that, _131c63f51932.data.method, _131c63f51932.data.input, _131c63f51932.data.async, _131c63f51932.data.user, _131c63f51932.data.password);
      });
    }
    overrideResponseUrl() {
      this.ctx.overrideDescriptor(this.xhrProto, "responseURL", {
        get: (_3f045e0fccd3, _1f100573b15c) => {
          let _15854d55a4f2 = new _e89dfe68b14b({
            value: _3f045e0fccd3.call(_1f100573b15c)
          }, _3f045e0fccd3, _1f100573b15c);
          return this.emit("responseUrl", _15854d55a4f2), _15854d55a4f2.intercepted ? _15854d55a4f2.returnValue : _15854d55a4f2.data.value;
        }
      });
    }
    overrideSend() {
      this.ctx.override(this.xhrProto, "send", (_3f045e0fccd3, _1f100573b15c, [_15854d55a4f2 = null]) => {
        let _5f004e3cc4ac = new _e89dfe68b14b({
          body: _15854d55a4f2
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("send", _5f004e3cc4ac), _5f004e3cc4ac.intercepted ? _5f004e3cc4ac.returnValue : _5f004e3cc4ac.target.call(_5f004e3cc4ac.that, _5f004e3cc4ac.data.body);
      });
    }
    overrideSetReqHeader() {
      this.ctx.override(this.xhrProto, "setRequestHeader", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (2 > _15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac, _9a592ffbcc2c] = _15854d55a4f2, _24a0205889f3 = new _e89dfe68b14b({
          name: _5f004e3cc4ac,
          value: _9a592ffbcc2c
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("setReqHeader", _24a0205889f3), _24a0205889f3.intercepted ? _24a0205889f3.returnValue : _24a0205889f3.target.call(_24a0205889f3.that, _24a0205889f3.data.name, _24a0205889f3.data.value);
      });
    }
    overrideGetResHeaders() {
      this.ctx.override(this.xhrProto, "getAllResponseHeaders", (_3f045e0fccd3, _1f100573b15c) => {
        let _15854d55a4f2 = new _e89dfe68b14b({
          value: _3f045e0fccd3.call(_1f100573b15c)
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("getAllResponseHeaders", _15854d55a4f2), _15854d55a4f2.intercepted ? _15854d55a4f2.returnValue : _15854d55a4f2.data.value;
      });
    }
    overrideGetResHeader() {
      this.ctx.override(this.xhrProto, "getResponseHeader", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (!_15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac] = _15854d55a4f2, _9a592ffbcc2c = new _e89dfe68b14b({
          name: _5f004e3cc4ac,
          value: _3f045e0fccd3.call(_1f100573b15c, _5f004e3cc4ac)
        }, _3f045e0fccd3, _1f100573b15c);
        return _9a592ffbcc2c.intercepted ? _9a592ffbcc2c.returnValue : _9a592ffbcc2c.data.value;
      });
    }
  }, _9475ac8f6dcc = _a895fb02f0ab;
  var _35760059d77f = m(_98ba96af03cb(), 1);
  var _4e1994e7b815 = class extends _35760059d77f.default {
    constructor(_3f045e0fccd3) {
      super(), this.ctx = _3f045e0fccd3, this.window = _3f045e0fccd3.window, this.EventSource = this.window.EventSource || {}, 
      this.esProto = this.EventSource.prototype || {}, this.url = _3f045e0fccd3.nativeMethods.getOwnPropertyDescriptor(this.esProto, "url"), 
      this.CONNECTING = 0, this.OPEN = 1, this.CLOSED = 2;
    }
    overrideConstruct() {
      this.ctx.override(this.window, "EventSource", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (!_15854d55a4f2.length) return new _3f045e0fccd3(..._15854d55a4f2);
        let [_5f004e3cc4ac, _9a592ffbcc2c = {}] = _15854d55a4f2, _24a0205889f3 = new _e89dfe68b14b({
          url: _5f004e3cc4ac,
          config: _9a592ffbcc2c
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("construct", _24a0205889f3), _24a0205889f3.intercepted ? _24a0205889f3.returnValue : new _24a0205889f3.target(_24a0205889f3.data.url, _24a0205889f3.data.config);
      }, !0), "EventSource" in this.window && (this.window.EventSource.CONNECTING = this.CONNECTING, 
      this.window.EventSource.OPEN = this.OPEN, this.window.EventSource.CLOSED = this.CLOSED);
    }
    overrideUrl() {
      this.ctx.overrideDescriptor(this.esProto, "url", {
        get: (_3f045e0fccd3, _1f100573b15c) => {
          let _15854d55a4f2 = new _e89dfe68b14b({
            value: _3f045e0fccd3.call(_1f100573b15c)
          }, _3f045e0fccd3, _1f100573b15c);
          return this.emit("url", _15854d55a4f2), _15854d55a4f2.data.value;
        }
      });
    }
  }, _9f46b14b4b17 = _4e1994e7b815;
  var _36e3b59ac3a6 = m(_98ba96af03cb(), 1);
  var _b56b7a161002 = class extends _36e3b59ac3a6.default {
    constructor(_3f045e0fccd3) {
      super(), this.ctx = _3f045e0fccd3, this.window = this.ctx.window, this.History = this.window.History, 
      this.history = this.window.history, this.historyProto = this.History ? this.History.prototype : {}, 
      this.pushState = this.historyProto.pushState, this.replaceState = this.historyProto.replaceState, 
      this.go = this.historyProto.go, this.back = this.historyProto.back, this.forward = this.historyProto.forward;
    }
    override() {
      this.overridePushState(), this.overrideReplaceState(), this.overrideGo(), this.overrideForward(), 
      this.overrideBack();
    }
    overridePushState() {
      this.ctx.override(this.historyProto, "pushState", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (2 > _15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac, _9a592ffbcc2c, _24a0205889f3 = ""] = _15854d55a4f2, _98ba96af03cb = new _e89dfe68b14b({
          state: _5f004e3cc4ac,
          title: _9a592ffbcc2c,
          url: _24a0205889f3
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("pushState", _98ba96af03cb), _98ba96af03cb.intercepted ? _98ba96af03cb.returnValue : _98ba96af03cb.target.call(_98ba96af03cb.that, _98ba96af03cb.data.state, _98ba96af03cb.data.title, _98ba96af03cb.data.url);
      });
    }
    overrideReplaceState() {
      this.ctx.override(this.historyProto, "replaceState", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (2 > _15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac, _9a592ffbcc2c, _24a0205889f3 = ""] = _15854d55a4f2, _98ba96af03cb = new _e89dfe68b14b({
          state: _5f004e3cc4ac,
          title: _9a592ffbcc2c,
          url: _24a0205889f3
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("replaceState", _98ba96af03cb), _98ba96af03cb.intercepted ? _98ba96af03cb.returnValue : _98ba96af03cb.target.call(_98ba96af03cb.that, _98ba96af03cb.data.state, _98ba96af03cb.data.title, _98ba96af03cb.data.url);
      });
    }
    overrideGo() {
      this.ctx.override(this.historyProto, "go", (_3f045e0fccd3, _1f100573b15c, [_15854d55a4f2]) => {
        let _5f004e3cc4ac = new _e89dfe68b14b({
          delta: _15854d55a4f2
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("go", _5f004e3cc4ac), _5f004e3cc4ac.intercepted ? _5f004e3cc4ac.returnValue : _5f004e3cc4ac.target.call(_5f004e3cc4ac.that, _5f004e3cc4ac.data.delta);
      });
    }
    overrideForward() {
      this.ctx.override(this.historyProto, "forward", (_3f045e0fccd3, _1f100573b15c) => {
        let _15854d55a4f2 = new _e89dfe68b14b(null, _3f045e0fccd3, _1f100573b15c);
        return this.emit("forward", _15854d55a4f2), _15854d55a4f2.intercepted ? _15854d55a4f2.returnValue : _15854d55a4f2.target.call(_15854d55a4f2.that);
      });
    }
    overrideBack() {
      this.ctx.override(this.historyProto, "back", (_3f045e0fccd3, _1f100573b15c) => {
        let _15854d55a4f2 = new _e89dfe68b14b(null, _3f045e0fccd3, _1f100573b15c);
        return this.emit("back", _15854d55a4f2), _15854d55a4f2.intercepted ? _15854d55a4f2.returnValue : _15854d55a4f2.target.call(_15854d55a4f2.that);
      });
    }
  }, _53bcef4665d8 = _b56b7a161002;
  var _2c362d67fcdf = m(_98ba96af03cb(), 1), _4a4b8646537f = class extends _2c362d67fcdf.default {
    constructor(_3f045e0fccd3) {
      super(), this.ctx = _3f045e0fccd3, this.window = _3f045e0fccd3.window, this.location = this.window.location, 
      this.WorkerLocation = this.ctx.worker ? this.window.WorkerLocation : null, this.workerLocProto = this.WorkerLocation ? this.WorkerLocation.prototype : {}, 
      this.keys = [ "href", "protocol", "host", "hostname", "port", "pathname", "search", "hash", "origin" ], 
      this.HashChangeEvent = this.window.HashChangeEvent || null, this.href = this.WorkerLocation ? _3f045e0fccd3.nativeMethods.getOwnPropertyDescriptor(this.workerLocProto, "href") : _3f045e0fccd3.nativeMethods.getOwnPropertyDescriptor(this.location, "href");
    }
    overrideWorkerLocation(_3f045e0fccd3) {
      if (!this.WorkerLocation) return !1;
      let _1f100573b15c = this;
      for (let _15854d55a4f2 of this.keys) this.ctx.overrideDescriptor(this.workerLocProto, _15854d55a4f2, {
        get: () => _3f045e0fccd3(_1f100573b15c.href.get.call(this.location))[_15854d55a4f2]
      });
      return !0;
    }
    emulate(_3f045e0fccd3, _1f100573b15c) {
      let _15854d55a4f2 = {}, _5f004e3cc4ac = this;
      for (let _9a592ffbcc2c of _5f004e3cc4ac.keys) this.ctx.nativeMethods.defineProperty(_15854d55a4f2, _9a592ffbcc2c, {
        get() {
          return _3f045e0fccd3(_5f004e3cc4ac.href.get.call(_5f004e3cc4ac.location))[_9a592ffbcc2c];
        },
        set: _9a592ffbcc2c !== "origin" ? function(_3f045e0fccd3) {
          switch (_9a592ffbcc2c) {
           case "href":
            _5f004e3cc4ac.location.href = _1f100573b15c(_3f045e0fccd3);
            break;

           case "hash":
            _5f004e3cc4ac.emit("hashchange", _15854d55a4f2.href, _3f045e0fccd3.trim().startsWith("#") ? new URL(_3f045e0fccd3.trim(), _15854d55a4f2.href).href : new URL("#" + _3f045e0fccd3.trim(), _15854d55a4f2.href).href, _5f004e3cc4ac);
            break;

           default:
            {
              let _24a0205889f3 = new URL(_15854d55a4f2.href);
              _24a0205889f3[_9a592ffbcc2c] = _3f045e0fccd3, _5f004e3cc4ac.location.href = _1f100573b15c(_24a0205889f3.href);
            }
            break;
          }
        } : void 0,
        configurable: !1,
        enumerable: !0
      });
      return "reload" in this.location && this.ctx.nativeMethods.defineProperty(_15854d55a4f2, "reload", {
        value: this.ctx.wrap(this.location, "reload", (_3f045e0fccd3, _1f100573b15c) => _3f045e0fccd3.call(_1f100573b15c === _15854d55a4f2 ? this.location : _1f100573b15c)),
        writable: !1,
        enumerable: !0
      }), "replace" in this.location && this.ctx.nativeMethods.defineProperty(_15854d55a4f2, "replace", {
        value: this.ctx.wrap(this.location, "assign", (_3f045e0fccd3, _5f004e3cc4ac, _9a592ffbcc2c) => {
          (!_9a592ffbcc2c.length || _5f004e3cc4ac !== _15854d55a4f2) && _3f045e0fccd3.call(_5f004e3cc4ac), 
          _5f004e3cc4ac = this.location;
          let [_24a0205889f3] = _9a592ffbcc2c, _98ba96af03cb = new URL(_24a0205889f3, _15854d55a4f2.href);
          return _3f045e0fccd3.call(_5f004e3cc4ac === _15854d55a4f2 ? this.location : _5f004e3cc4ac, _1f100573b15c(_98ba96af03cb.href));
        }),
        writable: !1,
        enumerable: !0
      }), "assign" in this.location && this.ctx.nativeMethods.defineProperty(_15854d55a4f2, "assign", {
        value: this.ctx.wrap(this.location, "assign", (_3f045e0fccd3, _5f004e3cc4ac, _9a592ffbcc2c) => {
          (!_9a592ffbcc2c.length || _5f004e3cc4ac !== _15854d55a4f2) && _3f045e0fccd3.call(_5f004e3cc4ac), 
          _5f004e3cc4ac = this.location;
          let [_24a0205889f3] = _9a592ffbcc2c, _98ba96af03cb = new URL(_24a0205889f3, _15854d55a4f2.href);
          return _3f045e0fccd3.call(_5f004e3cc4ac === _15854d55a4f2 ? this.location : _5f004e3cc4ac, _1f100573b15c(_98ba96af03cb.href));
        }),
        writable: !1,
        enumerable: !0
      }), "ancestorOrigins" in this.location && this.ctx.nativeMethods.defineProperty(_15854d55a4f2, "ancestorOrigins", {
        get() {
          let _3f045e0fccd3 = [];
          return _5f004e3cc4ac.window.DOMStringList && _5f004e3cc4ac.ctx.nativeMethods.setPrototypeOf(_3f045e0fccd3, _5f004e3cc4ac.window.DOMStringList.prototype), 
          _3f045e0fccd3;
        },
        set: void 0,
        enumerable: !0
      }), this.ctx.nativeMethods.defineProperty(_15854d55a4f2, "toString", {
        value: this.ctx.wrap(this.location, "toString", () => _15854d55a4f2.href),
        enumerable: !0,
        writable: !1
      }), this.ctx.nativeMethods.defineProperty(_15854d55a4f2, Symbol.toPrimitive, {
        value: () => _15854d55a4f2.href,
        writable: !1,
        enumerable: !1
      }), this.ctx.window.Location && this.ctx.nativeMethods.setPrototypeOf(_15854d55a4f2, this.ctx.window.Location.prototype), 
      _15854d55a4f2;
    }
  }, _27f98150050b = _4a4b8646537f;
  var _1d10264f5ed2 = m(_98ba96af03cb(), 1);
  var _71758a2b765b = class extends _1d10264f5ed2.default {
    constructor(_3f045e0fccd3) {
      super(), this.ctx = _3f045e0fccd3, this.window = this.ctx.window, this.postMessage = this.window.postMessage, 
      this.MessageEvent = this.window.MessageEvent || {}, this.MessagePort = this.window.MessagePort || {}, 
      this.mpProto = this.MessagePort.prototype || {}, this.mpPostMessage = this.mpProto.postMessage, 
      this.messageProto = this.MessageEvent.prototype || {}, this.messageData = _3f045e0fccd3.nativeMethods.getOwnPropertyDescriptor(this.messageProto, "data"), 
      this.messageOrigin = _3f045e0fccd3.nativeMethods.getOwnPropertyDescriptor(this.messageProto, "origin");
    }
    overridePostMessage() {
      this.ctx.override(this.window, "postMessage", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (!_15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let _5f004e3cc4ac, _9a592ffbcc2c, _24a0205889f3;
        this.ctx.worker ? [_5f004e3cc4ac, _24a0205889f3 = []] = _15854d55a4f2 : [_5f004e3cc4ac, _9a592ffbcc2c, _24a0205889f3 = []] = _15854d55a4f2;
        let _98ba96af03cb = new _e89dfe68b14b({
          message: _5f004e3cc4ac,
          origin: _9a592ffbcc2c,
          transfer: _24a0205889f3,
          worker: this.ctx.worker
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("postMessage", _98ba96af03cb), _98ba96af03cb.intercepted ? _98ba96af03cb.returnValue : this.ctx.worker ? _98ba96af03cb.target.call(_98ba96af03cb.that, _98ba96af03cb.data.message, _98ba96af03cb.data.transfer) : _98ba96af03cb.target.call(_98ba96af03cb.that, _98ba96af03cb.data.message, _98ba96af03cb.data.origin, _98ba96af03cb.data.transfer);
      });
    }
    wrapPostMessage(_3f045e0fccd3, _1f100573b15c, _15854d55a4f2 = !1) {
      return this.ctx.wrap(_3f045e0fccd3, _1f100573b15c, (_1f100573b15c, _5f004e3cc4ac, _9a592ffbcc2c) => {
        if (this.ctx.worker ? !_9a592ffbcc2c.length : 2 > _9a592ffbcc2c) return _1f100573b15c.apply(_5f004e3cc4ac, _9a592ffbcc2c);
        let _24a0205889f3, _98ba96af03cb, _6b0bca94d690;
        _15854d55a4f2 ? ([_24a0205889f3, _6b0bca94d690 = []] = _9a592ffbcc2c, _98ba96af03cb = null) : [_24a0205889f3, _98ba96af03cb, _6b0bca94d690 = []] = _9a592ffbcc2c;
        let _131c63f51932 = new _e89dfe68b14b({
          message: _24a0205889f3,
          origin: _98ba96af03cb,
          transfer: _6b0bca94d690,
          worker: this.ctx.worker
        }, _1f100573b15c, _3f045e0fccd3);
        return this.emit("postMessage", _131c63f51932), _131c63f51932.intercepted ? _131c63f51932.returnValue : _15854d55a4f2 ? _131c63f51932.target.call(_131c63f51932.that, _131c63f51932.data.message, _131c63f51932.data.transfer) : _131c63f51932.target.call(_131c63f51932.that, _131c63f51932.data.message, _131c63f51932.data.origin, _131c63f51932.data.transfer);
      });
    }
    overrideMessageOrigin() {
      this.ctx.overrideDescriptor(this.messageProto, "origin", {
        get: (_3f045e0fccd3, _1f100573b15c) => {
          let _15854d55a4f2 = new _e89dfe68b14b({
            value: _3f045e0fccd3.call(_1f100573b15c)
          }, _3f045e0fccd3, _1f100573b15c);
          return this.emit("origin", _15854d55a4f2), _15854d55a4f2.intercepted ? _15854d55a4f2.returnValue : _15854d55a4f2.data.value;
        }
      });
    }
    overrideMessageData() {
      this.ctx.overrideDescriptor(this.messageProto, "data", {
        get: (_3f045e0fccd3, _1f100573b15c) => {
          let _15854d55a4f2 = new _e89dfe68b14b({
            value: _3f045e0fccd3.call(_1f100573b15c)
          }, _3f045e0fccd3, _1f100573b15c);
          return this.emit("data", _15854d55a4f2), _15854d55a4f2.intercepted ? _15854d55a4f2.returnValue : _15854d55a4f2.data.value;
        }
      });
    }
  }, _21a8ceec13b5 = _71758a2b765b;
  var _1833a01c8ce4 = m(_98ba96af03cb(), 1);
  var _80a9c60ee513 = class extends _1833a01c8ce4.default {
    constructor(_3f045e0fccd3) {
      super(), this.ctx = _3f045e0fccd3, this.window = _3f045e0fccd3.window, this.navigator = this.window.navigator, 
      this.Navigator = this.window.Navigator || {}, this.navProto = this.Navigator.prototype || {}, 
      this.sendBeacon = this.navProto.sendBeacon;
    }
    overrideSendBeacon() {
      this.ctx.override(this.navProto, "sendBeacon", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (!_15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac, _9a592ffbcc2c = ""] = _15854d55a4f2, _24a0205889f3 = new _e89dfe68b14b({
          url: _5f004e3cc4ac,
          data: _9a592ffbcc2c
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("sendBeacon", _24a0205889f3), _24a0205889f3.intercepted ? _24a0205889f3.returnValue : _24a0205889f3.target.call(_24a0205889f3.that, _24a0205889f3.data.url, _24a0205889f3.data.data);
      });
    }
  }, _5537c30fc712 = _80a9c60ee513;
  var _530201e61384 = m(_98ba96af03cb(), 1);
  var _692a7504911c = globalThis.fetch, _94f35476098b = globalThis.SharedWorker, _f08ff555601c = globalThis.localStorage, _8575fc3d2230 = globalThis.navigator.serviceWorker, _0a98ae1d96b4 = MessagePort.prototype.postMessage, _d8353aad14b2 = {
    prototype: {
      send: WebSocket.prototype.send
    },
    CLOSED: WebSocket.CLOSED,
    CLOSING: WebSocket.CLOSING,
    CONNECTING: WebSocket.CONNECTING,
    OPEN: WebSocket.OPEN
  };
  async function W() {
    let _3f045e0fccd3 = (await self.clients.matchAll({
      type: "window",
      includeUncontrolled: !0
    })).map(async _3f045e0fccd3 => {
      let _1f100573b15c = await function(_3f045e0fccd3) {
        let _1f100573b15c = new MessageChannel;
        return new Promise(_15854d55a4f2 => {
          _3f045e0fccd3.postMessage({
            type: "getPort",
            port: _1f100573b15c.port2
          }, [ _1f100573b15c.port2 ]), _1f100573b15c.port1.onmessage = _3f045e0fccd3 => {
            _15854d55a4f2(_3f045e0fccd3.data);
          };
        });
      }(_3f045e0fccd3);
      return await Ie(_1f100573b15c), _1f100573b15c;
    }), _1f100573b15c = Promise.race([ Promise.any(_3f045e0fccd3), new Promise((_3f045e0fccd3, _1f100573b15c) => setTimeout(_1f100573b15c, 1e3, new TypeError("timeout"))) ]);
    try {
      return await _1f100573b15c;
    } catch (_3f045e0fccd3) {
      if (_3f045e0fccd3 instanceof AggregateError) throw console.error("bare-mux: failed to get a bare-mux SharedWorker MessagePort as all clients returned an invalid MessagePort."), 
      new Error("All clients returned an invalid MessagePort.");
      return console.warn("bare-mux: failed to get a bare-mux SharedWorker MessagePort within 1s, retrying"), 
      await W();
    }
  }
  function Ie(_3f045e0fccd3) {
    let _1f100573b15c = new MessageChannel, _15854d55a4f2 = new Promise((_3f045e0fccd3, _15854d55a4f2) => {
      _1f100573b15c.port1.onmessage = _1f100573b15c => {
        _1f100573b15c.data.type === "pong" && _3f045e0fccd3();
      }, setTimeout(_15854d55a4f2, 1500);
    });
    return _0a98ae1d96b4.call(_3f045e0fccd3, {
      message: {
        type: "ping"
      },
      port: _1f100573b15c.port2
    }, [ _1f100573b15c.port2 ]), _15854d55a4f2;
  }
  function Ve(_3f045e0fccd3, _1f100573b15c) {
    let _15854d55a4f2 = new _94f35476098b(_3f045e0fccd3, "ridgewood-stem-worker");
    return _1f100573b15c && _8575fc3d2230.addEventListener("message", _1f100573b15c => {
      if (_1f100573b15c.data.type === "getPort" && _1f100573b15c.data.port) {
        console.debug("bare-mux: recieved request for port from sw");
        let _15854d55a4f2 = new _94f35476098b(_3f045e0fccd3, "ridgewood-stem-worker");
        _0a98ae1d96b4.call(_1f100573b15c.data.port, _15854d55a4f2.port, [ _15854d55a4f2.port ]);
      }
    }), _15854d55a4f2.port;
  }
  var _7c3f206a8bbc = null;
  function lt() {
    if (_7c3f206a8bbc === null) {
      let _3f045e0fccd3 = new MessageChannel, _1f100573b15c = new ReadableStream, _15854d55a4f2;
      try {
        _0a98ae1d96b4.call(_3f045e0fccd3.port1, _1f100573b15c, [ _1f100573b15c ]), _15854d55a4f2 = !0;
      } catch {
        _15854d55a4f2 = !1;
      }
      return _7c3f206a8bbc = _15854d55a4f2, _15854d55a4f2;
    }
    return _7c3f206a8bbc;
  }
  var _994a09f8566e = class {
    constructor(_3f045e0fccd3) {
      this.channel = new BroadcastChannel("bare-mux"), _3f045e0fccd3 instanceof MessagePort || _3f045e0fccd3 instanceof Promise ? this.port = _3f045e0fccd3 : this.createChannel(_3f045e0fccd3, !0);
    }
    createChannel(_3f045e0fccd3, _1f100573b15c) {
      if (self.clients) this.port = W(), this.channel.onmessage = _3f045e0fccd3 => {
        _3f045e0fccd3.data.type === "refreshPort" && (this.port = W());
      }; else if (_3f045e0fccd3 && SharedWorker) {
        if (!_3f045e0fccd3.startsWith("/") && !_3f045e0fccd3.includes("://")) throw new Error("Invalid URL. Must be absolute or start at the root.");
        this.port = Ve(_3f045e0fccd3, _1f100573b15c), console.debug("bare-mux: setting localStorage bare-mux-path to", _3f045e0fccd3), 
        _f08ff555601c["bare-mux-path"] = _3f045e0fccd3;
      } else {
        if (!SharedWorker) throw new Error("Unable to get a channel to the SharedWorker.");
        {
          let _3f045e0fccd3 = _f08ff555601c["bare-mux-path"];
          if (console.debug("bare-mux: got localStorage bare-mux-path:", _3f045e0fccd3), !_3f045e0fccd3) throw new Error("Unable to get bare-mux workerPath from localStorage.");
          this.port = Ve(_3f045e0fccd3, _1f100573b15c);
        }
      }
    }
    async sendMessage(_3f045e0fccd3, _1f100573b15c) {
      this.port instanceof Promise && (this.port = await this.port);
      try {
        await Ie(this.port);
      } catch {
        return console.warn("bare-mux: Failed to get a ping response from the worker within 1.5s. Assuming port is dead."), 
        this.createChannel(), await this.sendMessage(_3f045e0fccd3, _1f100573b15c);
      }
      let _15854d55a4f2 = new MessageChannel, _5f004e3cc4ac = [ _15854d55a4f2.port2, ..._1f100573b15c || [] ], _9a592ffbcc2c = new Promise((_3f045e0fccd3, _1f100573b15c) => {
        _15854d55a4f2.port1.onmessage = _15854d55a4f2 => {
          let _5f004e3cc4ac = _15854d55a4f2.data;
          _5f004e3cc4ac.type === "error" ? _1f100573b15c(_5f004e3cc4ac.error) : _3f045e0fccd3(_5f004e3cc4ac);
        };
      });
      return _0a98ae1d96b4.call(this.port, {
        message: _3f045e0fccd3,
        port: _15854d55a4f2.port2
      }, _5f004e3cc4ac), await _9a592ffbcc2c;
    }
  };
  function Ce(_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) {
    console.error(`error while processing '${_15854d55a4f2}': `, _1f100573b15c), _3f045e0fccd3.postMessage({
      type: "error",
      error: _1f100573b15c
    });
  }
  var _2a71df4a6a98 = class {
    constructor(_3f045e0fccd3) {
      this.worker = new _994a09f8566e(_3f045e0fccd3);
    }
    async getTransport() {
      return (await this.worker.sendMessage({
        type: "get"
      })).name;
    }
    async setTransport(_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) {
      await this.setManualTransport(`\n\t\t\tconst { default: BareTransport } = await import("${_3f045e0fccd3}");\n\t\t\treturn [BareTransport, "${_3f045e0fccd3}"];\n\t\t`, _1f100573b15c, _15854d55a4f2);
    }
    async setManualTransport(_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) {
      if (_3f045e0fccd3 === "bare-mux-remote") throw new Error("Use setRemoteTransport.");
      await this.worker.sendMessage({
        type: "set",
        client: {
          function: _3f045e0fccd3,
          args: _1f100573b15c
        }
      }, _15854d55a4f2);
    }
    async setRemoteTransport(_3f045e0fccd3, _1f100573b15c) {
      let _15854d55a4f2 = new MessageChannel;
      _15854d55a4f2.port1.onmessage = async _1f100573b15c => {
        let _15854d55a4f2 = _1f100573b15c.data.port, _5f004e3cc4ac = _1f100573b15c.data.message;
        if (_5f004e3cc4ac.type === "fetch") try {
          _3f045e0fccd3.ready || await _3f045e0fccd3.init(), await async function(_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) {
            let _5f004e3cc4ac = await _15854d55a4f2.request(new URL(_3f045e0fccd3.fetch.remote), _3f045e0fccd3.fetch.method, _3f045e0fccd3.fetch.body, _3f045e0fccd3.fetch.headers, null);
            if (!lt() && _5f004e3cc4ac.body instanceof ReadableStream) {
              let _3f045e0fccd3 = new Response(_5f004e3cc4ac.body);
              _5f004e3cc4ac.body = await _3f045e0fccd3.arrayBuffer();
            }
            _5f004e3cc4ac.body instanceof ReadableStream || _5f004e3cc4ac.body instanceof ArrayBuffer ? _0a98ae1d96b4.call(_1f100573b15c, {
              type: "fetch",
              fetch: _5f004e3cc4ac
            }, [ _5f004e3cc4ac.body ]) : _0a98ae1d96b4.call(_1f100573b15c, {
              type: "fetch",
              fetch: _5f004e3cc4ac
            });
          }(_5f004e3cc4ac, _15854d55a4f2, _3f045e0fccd3);
        } catch (_3f045e0fccd3) {
          Ce(_15854d55a4f2, _3f045e0fccd3, "fetch");
        } else if (_5f004e3cc4ac.type === "websocket") try {
          _3f045e0fccd3.ready || await _3f045e0fccd3.init(), await async function(_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) {
            let [_5f004e3cc4ac, _9a592ffbcc2c] = _15854d55a4f2.connect(new URL(_3f045e0fccd3.websocket.url), _3f045e0fccd3.websocket.protocols, _3f045e0fccd3.websocket.requestHeaders, _1f100573b15c => {
              _0a98ae1d96b4.call(_3f045e0fccd3.websocket.channel, {
                type: "open",
                args: [ _1f100573b15c ]
              });
            }, _1f100573b15c => {
              _1f100573b15c instanceof ArrayBuffer ? _0a98ae1d96b4.call(_3f045e0fccd3.websocket.channel, {
                type: "message",
                args: [ _1f100573b15c ]
              }, [ _1f100573b15c ]) : _0a98ae1d96b4.call(_3f045e0fccd3.websocket.channel, {
                type: "message",
                args: [ _1f100573b15c ]
              });
            }, (_1f100573b15c, _15854d55a4f2) => {
              _0a98ae1d96b4.call(_3f045e0fccd3.websocket.channel, {
                type: "close",
                args: [ _1f100573b15c, _15854d55a4f2 ]
              });
            }, _1f100573b15c => {
              _0a98ae1d96b4.call(_3f045e0fccd3.websocket.channel, {
                type: "error",
                args: [ _1f100573b15c ]
              });
            });
            _3f045e0fccd3.websocket.channel.onmessage = _3f045e0fccd3 => {
              _3f045e0fccd3.data.type === "data" ? _5f004e3cc4ac(_3f045e0fccd3.data.data) : _3f045e0fccd3.data.type === "close" && _9a592ffbcc2c(_3f045e0fccd3.data.closeCode, _3f045e0fccd3.data.closeReason);
            }, _0a98ae1d96b4.call(_1f100573b15c, {
              type: "websocket"
            });
          }(_5f004e3cc4ac, _15854d55a4f2, _3f045e0fccd3);
        } catch (_3f045e0fccd3) {
          Ce(_15854d55a4f2, _3f045e0fccd3, "websocket");
        }
      }, await this.worker.sendMessage({
        type: "set",
        client: {
          function: "bare-mux-remote",
          args: [ _15854d55a4f2.port2, _1f100573b15c ]
        }
      }, [ _15854d55a4f2.port2 ]);
    }
    getInnerPort() {
      return this.worker.port;
    }
  };
  console.debug("bare-mux: running v2.1.6 (build 4b7607b)");
  var _17d499a2c8ae = class extends _530201e61384.default {
    constructor(_3f045e0fccd3) {
      super(), this.ctx = _3f045e0fccd3, this.window = _3f045e0fccd3.window, this.Worker = this.window.Worker || {}, 
      this.Worklet = this.window.Worklet || {}, this.workletProto = this.Worklet.prototype || {}, 
      this.workerProto = this.Worker.prototype || {}, this.postMessage = this.workerProto.postMessage, 
      this.terminate = this.workerProto.terminate, this.addModule = this.workletProto.addModule;
    }
    overrideWorker() {
      this.ctx.override(this.window, "Worker", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (!_15854d55a4f2.length) return new _3f045e0fccd3(..._15854d55a4f2);
        let [_5f004e3cc4ac, _9a592ffbcc2c = {}] = _15854d55a4f2, _24a0205889f3 = new _e89dfe68b14b({
          url: _5f004e3cc4ac,
          options: _9a592ffbcc2c
        }, _3f045e0fccd3, _1f100573b15c);
        if (this.emit("worker", _24a0205889f3), _24a0205889f3.intercepted) return _24a0205889f3.returnValue;
        let _98ba96af03cb = new _24a0205889f3.target(_24a0205889f3.data.url, _24a0205889f3.data.options), _6b0bca94d690 = new _2a71df4a6a98;
        return (async () => {
          let _3f045e0fccd3 = await _6b0bca94d690.getInnerPort();
          _98ba96af03cb.postMessage({
            __uv$type: "baremuxinit",
            port: _3f045e0fccd3
          }, [ _3f045e0fccd3 ]);
        })(), _98ba96af03cb;
      }, !0);
    }
    overrideAddModule() {
      this.ctx.override(this.workletProto, "addModule", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (!_15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac, _9a592ffbcc2c = {}] = _15854d55a4f2, _24a0205889f3 = new _e89dfe68b14b({
          url: _5f004e3cc4ac,
          options: _9a592ffbcc2c
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("addModule", _24a0205889f3), _24a0205889f3.intercepted ? _24a0205889f3.returnValue : _24a0205889f3.target.call(_24a0205889f3.that, _24a0205889f3.data.url, _24a0205889f3.data.options);
      });
    }
    overridePostMessage() {
      this.ctx.override(this.workerProto, "postMessage", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (!_15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac, _9a592ffbcc2c = []] = _15854d55a4f2, _24a0205889f3 = new _e89dfe68b14b({
          message: _5f004e3cc4ac,
          transfer: _9a592ffbcc2c
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("postMessage", _24a0205889f3), _24a0205889f3.intercepted ? _24a0205889f3.returnValue : _24a0205889f3.target.call(_24a0205889f3.that, _24a0205889f3.data.message, _24a0205889f3.data.transfer);
      });
    }
    overrideImportScripts() {
      this.ctx.override(this.window, "importScripts", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (!_15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let _5f004e3cc4ac = new _e89dfe68b14b({
          scripts: _15854d55a4f2
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("importScripts", _5f004e3cc4ac), _5f004e3cc4ac.intercepted ? _5f004e3cc4ac.returnValue : _5f004e3cc4ac.target.apply(_5f004e3cc4ac.that, _5f004e3cc4ac.data.scripts);
      });
    }
  }, _eaa01948284d = _17d499a2c8ae;
  var _21626a16696b = m(_98ba96af03cb(), 1);
  var _7351620dffc7 = class extends _21626a16696b.default {
    constructor(_3f045e0fccd3) {
      super(), this.ctx = _3f045e0fccd3, this.window = this.ctx.window, this.URL = this.window.URL || {}, 
      this.createObjectURL = this.URL.createObjectURL, this.revokeObjectURL = this.URL.revokeObjectURL;
    }
    overrideObjectURL() {
      this.ctx.override(this.URL, "createObjectURL", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (!_15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac] = _15854d55a4f2, _9a592ffbcc2c = new _e89dfe68b14b({
          object: _5f004e3cc4ac
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("createObjectURL", _9a592ffbcc2c), _9a592ffbcc2c.intercepted ? _9a592ffbcc2c.returnValue : _9a592ffbcc2c.target.call(_9a592ffbcc2c.that, _9a592ffbcc2c.data.object);
      }), this.ctx.override(this.URL, "revokeObjectURL", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (!_15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac] = _15854d55a4f2, _9a592ffbcc2c = new _e89dfe68b14b({
          url: _5f004e3cc4ac
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("revokeObjectURL", _9a592ffbcc2c), _9a592ffbcc2c.intercepted ? _9a592ffbcc2c.returnValue : _9a592ffbcc2c.target.call(_9a592ffbcc2c.that, _9a592ffbcc2c.data.url);
      });
    }
  }, _15e17f4931db = _7351620dffc7;
  var _6a10f764748c = m(_98ba96af03cb(), 1);
  var _f2aa7c370a17 = m(_98ba96af03cb(), 1);
  var _c97a722cbd6a = class extends _f2aa7c370a17.default {
    constructor(_3f045e0fccd3) {
      super(), this.ctx = _3f045e0fccd3, this.window = _3f045e0fccd3.window, this.localStorage = this.window.localStorage || null, 
      this.sessionStorage = this.window.sessionStorage || null, this.Storage = this.window.Storage || {}, 
      this.storeProto = this.Storage.prototype || {}, this.getItem = this.storeProto.getItem || null, 
      this.setItem = this.storeProto.setItem || null, this.removeItem = this.storeProto.removeItem || null, 
      this.clear = this.storeProto.clear || null, this.key = this.storeProto.key || null, 
      this.methods = [ "key", "getItem", "setItem", "removeItem", "clear" ], this.wrappers = new _3f045e0fccd3.nativeMethods.Map;
    }
    overrideMethods() {
      this.ctx.override(this.storeProto, "getItem", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (!_15854d55a4f2.length) return _3f045e0fccd3.apply(this.wrappers.get(_1f100573b15c) || _1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac] = _15854d55a4f2, _9a592ffbcc2c = new _e89dfe68b14b({
          name: _5f004e3cc4ac
        }, _3f045e0fccd3, this.wrappers.get(_1f100573b15c) || _1f100573b15c);
        return this.emit("getItem", _9a592ffbcc2c), _9a592ffbcc2c.intercepted ? _9a592ffbcc2c.returnValue : _9a592ffbcc2c.target.call(_9a592ffbcc2c.that, _9a592ffbcc2c.data.name);
      }), this.ctx.override(this.storeProto, "setItem", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (2 > _15854d55a4f2.length) return _3f045e0fccd3.apply(this.wrappers.get(_1f100573b15c) || _1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac, _9a592ffbcc2c] = _15854d55a4f2, _24a0205889f3 = new _e89dfe68b14b({
          name: _5f004e3cc4ac,
          value: _9a592ffbcc2c
        }, _3f045e0fccd3, this.wrappers.get(_1f100573b15c) || _1f100573b15c);
        return this.emit("setItem", _24a0205889f3), _24a0205889f3.intercepted ? _24a0205889f3.returnValue : _24a0205889f3.target.call(_24a0205889f3.that, _24a0205889f3.data.name, _24a0205889f3.data.value);
      }), this.ctx.override(this.storeProto, "removeItem", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (!_15854d55a4f2.length) return _3f045e0fccd3.apply(this.wrappers.get(_1f100573b15c) || _1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac] = _15854d55a4f2, _9a592ffbcc2c = new _e89dfe68b14b({
          name: _5f004e3cc4ac
        }, _3f045e0fccd3, this.wrappers.get(_1f100573b15c) || _1f100573b15c);
        return this.emit("removeItem", _9a592ffbcc2c), _9a592ffbcc2c.intercepted ? _9a592ffbcc2c.returnValue : _9a592ffbcc2c.target.call(_9a592ffbcc2c.that, _9a592ffbcc2c.data.name);
      }), this.ctx.override(this.storeProto, "clear", (_3f045e0fccd3, _1f100573b15c) => {
        let _15854d55a4f2 = new _e89dfe68b14b(null, _3f045e0fccd3, this.wrappers.get(_1f100573b15c) || _1f100573b15c);
        return this.emit("clear", _15854d55a4f2), _15854d55a4f2.intercepted ? _15854d55a4f2.returnValue : _15854d55a4f2.target.call(_15854d55a4f2.that);
      }), this.ctx.override(this.storeProto, "key", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (!_15854d55a4f2.length) return _3f045e0fccd3.apply(this.wrappers.get(_1f100573b15c) || _1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac] = _15854d55a4f2, _9a592ffbcc2c = new _e89dfe68b14b({
          index: _5f004e3cc4ac
        }, _3f045e0fccd3, this.wrappers.get(_1f100573b15c) || _1f100573b15c);
        return this.emit("key", _9a592ffbcc2c), _9a592ffbcc2c.intercepted ? _9a592ffbcc2c.returnValue : _9a592ffbcc2c.target.call(_9a592ffbcc2c.that, _9a592ffbcc2c.data.index);
      });
    }
    overrideLength() {
      this.ctx.overrideDescriptor(this.storeProto, "length", {
        get: (_3f045e0fccd3, _1f100573b15c) => {
          let _15854d55a4f2 = new _e89dfe68b14b({
            length: _3f045e0fccd3.call(this.wrappers.get(_1f100573b15c) || _1f100573b15c)
          }, _3f045e0fccd3, this.wrappers.get(_1f100573b15c) || _1f100573b15c);
          return this.emit("length", _15854d55a4f2), _15854d55a4f2.intercepted ? _15854d55a4f2.returnValue : _15854d55a4f2.data.length;
        }
      });
    }
    emulate(_3f045e0fccd3, _1f100573b15c = {}) {
      this.ctx.nativeMethods.setPrototypeOf(_1f100573b15c, this.storeProto);
      let _15854d55a4f2 = new this.ctx.window.Proxy(_1f100573b15c, {
        get: (_1f100573b15c, _15854d55a4f2) => {
          if (_15854d55a4f2 in this.storeProto || typeof _15854d55a4f2 == "symbol") return _3f045e0fccd3[_15854d55a4f2];
          let _5f004e3cc4ac = new _e89dfe68b14b({
            name: _15854d55a4f2
          }, null, _3f045e0fccd3);
          return this.emit("get", _5f004e3cc4ac), _5f004e3cc4ac.intercepted ? _5f004e3cc4ac.returnValue : _3f045e0fccd3[_5f004e3cc4ac.data.name];
        },
        set: (_1f100573b15c, _15854d55a4f2, _5f004e3cc4ac) => {
          if (_15854d55a4f2 in this.storeProto || typeof _15854d55a4f2 == "symbol") return _3f045e0fccd3[_15854d55a4f2] = _5f004e3cc4ac;
          let _9a592ffbcc2c = new _e89dfe68b14b({
            name: _15854d55a4f2,
            value: _5f004e3cc4ac
          }, null, _3f045e0fccd3);
          return this.emit("set", _9a592ffbcc2c), _9a592ffbcc2c.intercepted ? _9a592ffbcc2c.returnValue : _3f045e0fccd3[_9a592ffbcc2c.data.name] = _9a592ffbcc2c.data.value;
        },
        deleteProperty: (_1f100573b15c, _15854d55a4f2) => {
          if (typeof _15854d55a4f2 == "symbol") return delete _3f045e0fccd3[_15854d55a4f2];
          let _5f004e3cc4ac = new _e89dfe68b14b({
            name: _15854d55a4f2
          }, null, _3f045e0fccd3);
          return this.emit("delete", _5f004e3cc4ac), _5f004e3cc4ac.intercepted ? _5f004e3cc4ac.returnValue : delete _3f045e0fccd3[_5f004e3cc4ac.data.name];
        }
      });
      return this.wrappers.set(_15854d55a4f2, _3f045e0fccd3), this.ctx.nativeMethods.setPrototypeOf(_15854d55a4f2, this.storeProto), 
      _15854d55a4f2;
    }
  }, _aa8ad2cd3c41 = _c97a722cbd6a;
  var _847403c61f72 = m(_98ba96af03cb(), 1);
  var _28321595a6de = class extends _847403c61f72.default {
    constructor(_3f045e0fccd3) {
      super(), this.ctx = _3f045e0fccd3, this.window = _3f045e0fccd3.window, this.CSSStyleDeclaration = this.window.CSSStyleDeclaration || {}, 
      this.cssStyleProto = this.CSSStyleDeclaration.prototype || {}, this.getPropertyValue = this.cssStyleProto.getPropertyValue || null, 
      this.setProperty = this.cssStyleProto.setProperty || null, this.cssText - _3f045e0fccd3.nativeMethods.getOwnPropertyDescriptors(this.cssStyleProto, "cssText"), 
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
      this.ctx.override(this.cssStyleProto, "getPropertyValue", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (!_15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac] = _15854d55a4f2, _9a592ffbcc2c = new _e89dfe68b14b({
          property: _5f004e3cc4ac
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("getPropertyValue", _9a592ffbcc2c), _9a592ffbcc2c.intercepted ? _9a592ffbcc2c.returnValue : _9a592ffbcc2c.target.call(_9a592ffbcc2c.that, _9a592ffbcc2c.data.property);
      }), this.ctx.override(this.cssStyleProto, "setProperty", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (2 > _15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac, _9a592ffbcc2c] = _15854d55a4f2, _24a0205889f3 = new _e89dfe68b14b({
          property: _5f004e3cc4ac,
          value: _9a592ffbcc2c
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("setProperty", _24a0205889f3), _24a0205889f3.intercepted ? _24a0205889f3.returnValue : _24a0205889f3.target.call(_24a0205889f3.that, _24a0205889f3.data.property, _24a0205889f3.data.value);
      });
    }
    overrideCssText() {
      this.ctx.overrideDescriptor(this.cssStyleProto, "cssText", {
        get: (_3f045e0fccd3, _1f100573b15c) => {
          let _15854d55a4f2 = new _e89dfe68b14b({
            value: _3f045e0fccd3.call(_1f100573b15c)
          }, _3f045e0fccd3, _1f100573b15c);
          return this.emit("getCssText", _15854d55a4f2), _15854d55a4f2.intercepted ? _15854d55a4f2.returnValue : _15854d55a4f2.data.value;
        },
        set: (_3f045e0fccd3, _1f100573b15c, [_15854d55a4f2]) => {
          let _5f004e3cc4ac = new _e89dfe68b14b({
            value: _15854d55a4f2
          }, _3f045e0fccd3, _1f100573b15c);
          return this.emit("setCssText", _5f004e3cc4ac), _5f004e3cc4ac.intercepted ? _5f004e3cc4ac.returnValue : _5f004e3cc4ac.target.call(_5f004e3cc4ac.that, _5f004e3cc4ac.data.value);
        }
      });
    }
  }, _83cbc2e964d0 = _28321595a6de;
  var _3fdedefb45ae = m(_98ba96af03cb(), 1);
  var _5cd0bd3d3a13 = class extends _3fdedefb45ae.default {
    constructor(_3f045e0fccd3) {
      super(), this.ctx = _3f045e0fccd3, this.window = this.ctx.window, this.IDBDatabase = this.window.IDBDatabase || {}, 
      this.idbDatabaseProto = this.IDBDatabase.prototype || {}, this.IDBFactory = this.window.IDBFactory || {}, 
      this.idbFactoryProto = this.IDBFactory.prototype || {}, this.open = this.idbFactoryProto.open;
    }
    overrideOpen() {
      this.ctx.override(this.IDBFactory.prototype, "open", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        if (!_15854d55a4f2.length || !_15854d55a4f2.length) return _3f045e0fccd3.apply(_1f100573b15c, _15854d55a4f2);
        let [_5f004e3cc4ac, _9a592ffbcc2c] = _15854d55a4f2, _24a0205889f3 = new _e89dfe68b14b({
          name: _5f004e3cc4ac,
          version: _9a592ffbcc2c
        }, _3f045e0fccd3, _1f100573b15c);
        return this.emit("idbFactoryOpen", _24a0205889f3), _24a0205889f3.intercepted ? _24a0205889f3.returnValue : _24a0205889f3.target.call(_24a0205889f3.that, _24a0205889f3.data.name, _24a0205889f3.data.version);
      });
    }
    overrideName() {
      this.ctx.overrideDescriptor(this.idbDatabaseProto, "name", {
        get: (_3f045e0fccd3, _1f100573b15c) => {
          let _15854d55a4f2 = new _e89dfe68b14b({
            value: _3f045e0fccd3.call(_1f100573b15c)
          }, _3f045e0fccd3, _1f100573b15c);
          return this.emit("idbFactoryName", _15854d55a4f2), _15854d55a4f2.intercepted ? _15854d55a4f2.returnValue : _15854d55a4f2.data.value;
        }
      });
    }
  }, _ba3c132c826d = _5cd0bd3d3a13;
  var _867e5c775f36 = m(_98ba96af03cb(), 1);
  var _0f045ae04629 = class extends _867e5c775f36.default {
    constructor(_3f045e0fccd3) {
      super(), this.ctx = _3f045e0fccd3, this.window = _3f045e0fccd3.window, this.WebSocket = this.window.WebSocket || {}, 
      this.wsProto = this.WebSocket.prototype, this.CONNECTING = WebSocket.CONNECTING, 
      this.OPEN = WebSocket.OPEN, this.CLOSING = WebSocket.CLOSING, this.CLOSED = WebSocket.CLOSED, 
      this.socketmap = new WeakMap;
    }
    overrideWebSocket(_3f045e0fccd3) {
      this.ctx.override(this.window, "WebSocket", (_1f100573b15c, _15854d55a4f2, _5f004e3cc4ac) => {
        let _9a592ffbcc2c = new EventTarget;
        Object.setPrototypeOf(_9a592ffbcc2c, this.WebSocket.prototype), _9a592ffbcc2c.constructor = this.WebSocket;
        let i = _3f045e0fccd3 => new Proxy(_3f045e0fccd3, {
          get(_3f045e0fccd3, _1f100573b15c) {
            return _1f100573b15c === "isTrusted" ? !0 : Reflect.get(_3f045e0fccd3, _1f100573b15c);
          }
        }), _24a0205889f3 = _3f045e0fccd3.createWebSocket(_5f004e3cc4ac[0], _5f004e3cc4ac[1], null, {
          "User-Agent": navigator.userAgent,
          Origin: __uv.meta.url.origin
        }), _98ba96af03cb = {
          extensions: "",
          protocol: "",
          url: _5f004e3cc4ac[0],
          binaryType: "blob",
          barews: _24a0205889f3
        };
        function u(_3f045e0fccd3) {
          _98ba96af03cb["on" + _3f045e0fccd3.type]?.(i(_3f045e0fccd3)), _9a592ffbcc2c.dispatchEvent(_3f045e0fccd3);
        }
        return _24a0205889f3.addEventListener("open", () => {
          u(new Event("open"));
        }), _24a0205889f3.addEventListener("close", _3f045e0fccd3 => {
          u(new CloseEvent("close", _3f045e0fccd3));
        }), _24a0205889f3.addEventListener("message", async _3f045e0fccd3 => {
          let _1f100573b15c = _3f045e0fccd3.data;
          typeof _1f100573b15c == "string" || ("byteLength" in _1f100573b15c ? _98ba96af03cb.binaryType === "blob" ? _1f100573b15c = new Blob([ _1f100573b15c ]) : Object.setPrototypeOf(_1f100573b15c, ArrayBuffer.prototype) : "arrayBuffer" in _1f100573b15c && _98ba96af03cb.binaryType === "arraybuffer" && (_1f100573b15c = await _1f100573b15c.arrayBuffer(), 
          Object.setPrototypeOf(_1f100573b15c, ArrayBuffer.prototype)));
          let _15854d55a4f2 = new MessageEvent("message", {
            data: _1f100573b15c,
            origin: _3f045e0fccd3.origin,
            lastEventId: _3f045e0fccd3.lastEventId,
            source: _3f045e0fccd3.source,
            ports: _3f045e0fccd3.ports
          });
          u(_15854d55a4f2);
        }), _24a0205889f3.addEventListener("error", () => {
          u(new Event("error"));
        }), this.socketmap.set(_9a592ffbcc2c, _98ba96af03cb), _9a592ffbcc2c;
      }, !0), this.ctx.overrideDescriptor(this.wsProto, "binaryType", {
        get: (_3f045e0fccd3, _1f100573b15c) => this.socketmap.get(_1f100573b15c).binaryType,
        set: (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
          let _5f004e3cc4ac = this.socketmap.get(_1f100573b15c);
          (_15854d55a4f2[0] === "blob" || _15854d55a4f2[0] === "arraybuffer") && (_5f004e3cc4ac.binaryType = _15854d55a4f2[0]);
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "bufferedAmount", {
        get: (_3f045e0fccd3, _1f100573b15c) => 0
      }), this.ctx.overrideDescriptor(this.wsProto, "extensions", {
        get: (_3f045e0fccd3, _1f100573b15c) => this.socketmap.get(_1f100573b15c).extensions
      }), this.ctx.overrideDescriptor(this.wsProto, "onclose", {
        get: (_3f045e0fccd3, _1f100573b15c) => this.socketmap.get(_1f100573b15c).onclose,
        set: (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
          let _5f004e3cc4ac = this.socketmap.get(_1f100573b15c);
          _5f004e3cc4ac.onclose = _15854d55a4f2[0];
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "onerror", {
        get: (_3f045e0fccd3, _1f100573b15c) => this.socketmap.get(_1f100573b15c).onerror,
        set: (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
          let _5f004e3cc4ac = this.socketmap.get(_1f100573b15c);
          _5f004e3cc4ac.onerror = _15854d55a4f2[0];
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "onmessage", {
        get: (_3f045e0fccd3, _1f100573b15c) => this.socketmap.get(_1f100573b15c).onmessage,
        set: (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
          let _5f004e3cc4ac = this.socketmap.get(_1f100573b15c);
          _5f004e3cc4ac.onmessage = _15854d55a4f2[0];
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "onopen", {
        get: (_3f045e0fccd3, _1f100573b15c) => this.socketmap.get(_1f100573b15c).onopen,
        set: (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
          let _5f004e3cc4ac = this.socketmap.get(_1f100573b15c);
          _5f004e3cc4ac.onopen = _15854d55a4f2[0];
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "url", {
        get: (_3f045e0fccd3, _1f100573b15c) => this.socketmap.get(_1f100573b15c).url
      }), this.ctx.overrideDescriptor(this.wsProto, "protocol", {
        get: (_3f045e0fccd3, _1f100573b15c) => this.socketmap.get(_1f100573b15c).protocol
      }), this.ctx.overrideDescriptor(this.wsProto, "readyState", {
        get: (_3f045e0fccd3, _1f100573b15c) => this.socketmap.get(_1f100573b15c).barews.readyState
      }), this.ctx.override(this.wsProto, "send", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => this.socketmap.get(_1f100573b15c).barews.send(_15854d55a4f2[0]), !1), 
      this.ctx.override(this.wsProto, "close", (_3f045e0fccd3, _1f100573b15c, _15854d55a4f2) => {
        let _5f004e3cc4ac = this.socketmap.get(_1f100573b15c);
        return _15854d55a4f2[0] === void 0 && (_15854d55a4f2[0] = 1e3), _15854d55a4f2[1] === void 0 && (_15854d55a4f2[1] = ""), 
        _5f004e3cc4ac.barews.close(_15854d55a4f2[0], _15854d55a4f2[1]);
      }, !1);
    }
  }, _301f14ea5845 = _0f045ae04629;
  var _04344c361234 = class extends _6a10f764748c.default {
    constructor(_3f045e0fccd3 = self, _1f100573b15c, _15854d55a4f2 = !_3f045e0fccd3.window) {
      super(), this.window = _3f045e0fccd3, this.nativeMethods = {
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
      }, this.worker = _15854d55a4f2, this.bareClient = _1f100573b15c, this.fetch = new _93c68abd7eb9(this), 
      this.xhr = new _9475ac8f6dcc(this), this.idb = new _ba3c132c826d(this), this.history = new _53bcef4665d8(this), 
      this.element = new _60843a65f570(this), this.node = new _b97655f6364d(this), this.document = new _32a0026ad374(this), 
      this.function = new _1bbe072c9259(this), this.object = new _e4314ad36418(this), 
      this.websocket = new _301f14ea5845(this), this.message = new _21a8ceec13b5(this), 
      this.navigator = new _5537c30fc712(this), this.eventSource = new _9f46b14b4b17(this), 
      this.attribute = new _f4b8122d1c12(this), this.url = new _15e17f4931db(this), this.workers = new _eaa01948284d(this), 
      this.location = new _27f98150050b(this), this.storage = new _aa8ad2cd3c41(this), 
      this.style = new _83cbc2e964d0(this);
    }
    override(_3f045e0fccd3, _1f100573b15c, _15854d55a4f2, _5f004e3cc4ac) {
      let _9a592ffbcc2c = this.wrap(_3f045e0fccd3, _1f100573b15c, _15854d55a4f2, _5f004e3cc4ac);
      return _3f045e0fccd3[_1f100573b15c] = _9a592ffbcc2c, _9a592ffbcc2c;
    }
    overrideDescriptor(_3f045e0fccd3, _1f100573b15c, _15854d55a4f2 = {}) {
      let _5f004e3cc4ac = this.wrapDescriptor(_3f045e0fccd3, _1f100573b15c, _15854d55a4f2);
      return _5f004e3cc4ac ? (this.nativeMethods.defineProperty(_3f045e0fccd3, _1f100573b15c, _5f004e3cc4ac), 
      _5f004e3cc4ac) : {};
    }
    wrap(_3f045e0fccd3, _1f100573b15c, _15854d55a4f2, _5f004e3cc4ac = !1) {
      let _9a592ffbcc2c = _3f045e0fccd3[_1f100573b15c];
      if (!_9a592ffbcc2c) return _9a592ffbcc2c;
      let _24a0205889f3 = "prototype" in _9a592ffbcc2c ? function() {
        return _15854d55a4f2(_9a592ffbcc2c, this, [ ...arguments ]);
      } : {
        attach() {
          return _15854d55a4f2(_9a592ffbcc2c, this, [ ...arguments ]);
        }
      }.attach;
      return _5f004e3cc4ac && (_24a0205889f3.prototype = _9a592ffbcc2c.prototype, _24a0205889f3.prototype.constructor = _24a0205889f3), 
      this.emit("wrap", _9a592ffbcc2c, _24a0205889f3, _5f004e3cc4ac), _24a0205889f3;
    }
    wrapDescriptor(_3f045e0fccd3, _1f100573b15c, _15854d55a4f2 = {}) {
      let _5f004e3cc4ac = this.nativeMethods.getOwnPropertyDescriptor(_3f045e0fccd3, _1f100573b15c);
      if (!_5f004e3cc4ac) return !1;
      for (let _3f045e0fccd3 in _15854d55a4f2) _3f045e0fccd3 in _5f004e3cc4ac && (_3f045e0fccd3 === "get" || _3f045e0fccd3 === "set" ? _5f004e3cc4ac[_3f045e0fccd3] = this.wrap(_5f004e3cc4ac, _3f045e0fccd3, _15854d55a4f2[_3f045e0fccd3]) : _5f004e3cc4ac[_3f045e0fccd3] = typeof _15854d55a4f2[_3f045e0fccd3] == "function" ? _15854d55a4f2[_3f045e0fccd3](_5f004e3cc4ac[_3f045e0fccd3]) : _15854d55a4f2[_3f045e0fccd3]);
      return _5f004e3cc4ac;
    }
  }, _2e29e7fcada8 = _04344c361234;
  typeof self == "object" && (self.UVClient = _04344c361234);
})();
