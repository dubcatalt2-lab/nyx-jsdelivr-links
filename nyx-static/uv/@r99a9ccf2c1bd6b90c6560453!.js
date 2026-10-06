"use strict";

(() => {
  var _50ff65bd3389 = Object.create;
  var _44aaace4f97d = Object.defineProperty;
  var _2a158aef7229 = Object.getOwnPropertyDescriptor;
  var _d4a233116e5e = Object.getOwnPropertyNames;
  var _4422b4c44b29 = Object.getPrototypeOf, _3f203aa00e91 = Object.prototype.hasOwnProperty;
  var et = (_50ff65bd3389, _44aaace4f97d) => () => (_44aaace4f97d || _50ff65bd3389((_44aaace4f97d = {
    exports: {}
  }).exports, _44aaace4f97d), _44aaace4f97d.exports);
  var tt = (_50ff65bd3389, _4422b4c44b29, _ca350ac15a97, _1b4c1b5cc899) => {
    if (_4422b4c44b29 && typeof _4422b4c44b29 == "object" || typeof _4422b4c44b29 == "function") for (let _b2cbd85a9207 of _d4a233116e5e(_4422b4c44b29)) !_3f203aa00e91.call(_50ff65bd3389, _b2cbd85a9207) && _b2cbd85a9207 !== _ca350ac15a97 && _44aaace4f97d(_50ff65bd3389, _b2cbd85a9207, {
      get: () => _4422b4c44b29[_b2cbd85a9207],
      enumerable: !(_1b4c1b5cc899 = _2a158aef7229(_4422b4c44b29, _b2cbd85a9207)) || _1b4c1b5cc899.enumerable
    });
    return _50ff65bd3389;
  };
  var m = (_2a158aef7229, _d4a233116e5e, _3f203aa00e91) => (_3f203aa00e91 = _2a158aef7229 != null ? _50ff65bd3389(_4422b4c44b29(_2a158aef7229)) : {}, 
  tt(_d4a233116e5e || !_2a158aef7229 || !_2a158aef7229.__esModule ? _44aaace4f97d(_3f203aa00e91, "default", {
    value: _2a158aef7229,
    enumerable: !0
  }) : _3f203aa00e91, _2a158aef7229));
  var _ca350ac15a97 = et((_50ff65bd3389, _44aaace4f97d) => {
    "use strict";
    var _2a158aef7229 = typeof Reflect == "object" ? Reflect : null, _d4a233116e5e = _2a158aef7229 && typeof _2a158aef7229.apply == "function" ? _2a158aef7229.apply : function(_50ff65bd3389, _44aaace4f97d, _2a158aef7229) {
      return Function.prototype.apply.call(_50ff65bd3389, _44aaace4f97d, _2a158aef7229);
    }, _4422b4c44b29;
    _2a158aef7229 && typeof _2a158aef7229.ownKeys == "function" ? _4422b4c44b29 = _2a158aef7229.ownKeys : Object.getOwnPropertySymbols ? _4422b4c44b29 = function(_50ff65bd3389) {
      return Object.getOwnPropertyNames(_50ff65bd3389).concat(Object.getOwnPropertySymbols(_50ff65bd3389));
    } : _4422b4c44b29 = function(_50ff65bd3389) {
      return Object.getOwnPropertyNames(_50ff65bd3389);
    };
    function rt(_50ff65bd3389) {
      console && console.warn && console.warn(_50ff65bd3389);
    }
    var _3f203aa00e91 = Number.isNaN || function(_50ff65bd3389) {
      return _50ff65bd3389 !== _50ff65bd3389;
    };
    function d() {
      d.init.call(this);
    }
    _44aaace4f97d.exports = d;
    _44aaace4f97d.exports.once = st;
    d.EventEmitter = d;
    d.prototype._events = void 0;
    d.prototype._eventsCount = 0;
    d.prototype._maxListeners = void 0;
    var _ca350ac15a97 = 10;
    function P(_50ff65bd3389) {
      if (typeof _50ff65bd3389 != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof _50ff65bd3389);
    }
    Object.defineProperty(d, "defaultMaxListeners", {
      enumerable: !0,
      get: function() {
        return _ca350ac15a97;
      },
      set: function(_50ff65bd3389) {
        if (typeof _50ff65bd3389 != "number" || _50ff65bd3389 < 0 || _3f203aa00e91(_50ff65bd3389)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + _50ff65bd3389 + ".");
        _ca350ac15a97 = _50ff65bd3389;
      }
    });
    d.init = function() {
      (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), 
      this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
    };
    d.prototype.setMaxListeners = function(_50ff65bd3389) {
      if (typeof _50ff65bd3389 != "number" || _50ff65bd3389 < 0 || _3f203aa00e91(_50ff65bd3389)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + _50ff65bd3389 + ".");
      return this._maxListeners = _50ff65bd3389, this;
    };
    function J(_50ff65bd3389) {
      return _50ff65bd3389._maxListeners === void 0 ? d.defaultMaxListeners : _50ff65bd3389._maxListeners;
    }
    d.prototype.getMaxListeners = function() {
      return J(this);
    };
    d.prototype.emit = function(_50ff65bd3389) {
      for (var _44aaace4f97d = [], _2a158aef7229 = 1; _2a158aef7229 < arguments.length; _2a158aef7229++) _44aaace4f97d.push(arguments[_2a158aef7229]);
      var _4422b4c44b29 = _50ff65bd3389 === "error", _3f203aa00e91 = this._events;
      if (_3f203aa00e91 !== void 0) _4422b4c44b29 = _4422b4c44b29 && _3f203aa00e91.error === void 0; else if (!_4422b4c44b29) return !1;
      if (_4422b4c44b29) {
        var _ca350ac15a97;
        if (_44aaace4f97d.length > 0 && (_ca350ac15a97 = _44aaace4f97d[0]), _ca350ac15a97 instanceof Error) throw _ca350ac15a97;
        var _1b4c1b5cc899 = new Error("Unhandled error." + (_ca350ac15a97 ? " (" + _ca350ac15a97.message + ")" : ""));
        throw _1b4c1b5cc899.context = _ca350ac15a97, _1b4c1b5cc899;
      }
      var _b2cbd85a9207 = _3f203aa00e91[_50ff65bd3389];
      if (_b2cbd85a9207 === void 0) return !1;
      if (typeof _b2cbd85a9207 == "function") _d4a233116e5e(_b2cbd85a9207, this, _44aaace4f97d); else for (var _3c56f1b98100 = _b2cbd85a9207.length, _c987b2f43fe1 = re(_b2cbd85a9207, _3c56f1b98100), _2a158aef7229 = 0; _2a158aef7229 < _3c56f1b98100; ++_2a158aef7229) _d4a233116e5e(_c987b2f43fe1[_2a158aef7229], this, _44aaace4f97d);
      return !0;
    };
    function Y(_50ff65bd3389, _44aaace4f97d, _2a158aef7229, _d4a233116e5e) {
      var _4422b4c44b29, _3f203aa00e91, _ca350ac15a97;
      if (P(_2a158aef7229), _3f203aa00e91 = _50ff65bd3389._events, _3f203aa00e91 === void 0 ? (_3f203aa00e91 = _50ff65bd3389._events = Object.create(null), 
      _50ff65bd3389._eventsCount = 0) : (_3f203aa00e91.newListener !== void 0 && (_50ff65bd3389.emit("newListener", _44aaace4f97d, _2a158aef7229.listener ? _2a158aef7229.listener : _2a158aef7229), 
      _3f203aa00e91 = _50ff65bd3389._events), _ca350ac15a97 = _3f203aa00e91[_44aaace4f97d]), 
      _ca350ac15a97 === void 0) _ca350ac15a97 = _3f203aa00e91[_44aaace4f97d] = _2a158aef7229, 
      ++_50ff65bd3389._eventsCount; else if (typeof _ca350ac15a97 == "function" ? _ca350ac15a97 = _3f203aa00e91[_44aaace4f97d] = _d4a233116e5e ? [ _2a158aef7229, _ca350ac15a97 ] : [ _ca350ac15a97, _2a158aef7229 ] : _d4a233116e5e ? _ca350ac15a97.unshift(_2a158aef7229) : _ca350ac15a97.push(_2a158aef7229), 
      _4422b4c44b29 = J(_50ff65bd3389), _4422b4c44b29 > 0 && _ca350ac15a97.length > _4422b4c44b29 && !_ca350ac15a97.warned) {
        _ca350ac15a97.warned = !0;
        var _1b4c1b5cc899 = new Error("Possible EventEmitter memory leak detected. " + _ca350ac15a97.length + " " + String(_44aaace4f97d) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        _1b4c1b5cc899.name = "MaxListenersExceededWarning", _1b4c1b5cc899.emitter = _50ff65bd3389, 
        _1b4c1b5cc899.type = _44aaace4f97d, _1b4c1b5cc899.count = _ca350ac15a97.length, 
        rt(_1b4c1b5cc899);
      }
      return _50ff65bd3389;
    }
    d.prototype.addListener = function(_50ff65bd3389, _44aaace4f97d) {
      return Y(this, _50ff65bd3389, _44aaace4f97d, !1);
    };
    d.prototype.on = d.prototype.addListener;
    d.prototype.prependListener = function(_50ff65bd3389, _44aaace4f97d) {
      return Y(this, _50ff65bd3389, _44aaace4f97d, !0);
    };
    function ot() {
      if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 
      arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
    }
    function Z(_50ff65bd3389, _44aaace4f97d, _2a158aef7229) {
      var _d4a233116e5e = {
        fired: !1,
        wrapFn: void 0,
        target: _50ff65bd3389,
        type: _44aaace4f97d,
        listener: _2a158aef7229
      }, _4422b4c44b29 = ot.bind(_d4a233116e5e);
      return _4422b4c44b29.listener = _2a158aef7229, _d4a233116e5e.wrapFn = _4422b4c44b29, 
      _4422b4c44b29;
    }
    d.prototype.once = function(_50ff65bd3389, _44aaace4f97d) {
      return P(_44aaace4f97d), this.on(_50ff65bd3389, Z(this, _50ff65bd3389, _44aaace4f97d)), 
      this;
    };
    d.prototype.prependOnceListener = function(_50ff65bd3389, _44aaace4f97d) {
      return P(_44aaace4f97d), this.prependListener(_50ff65bd3389, Z(this, _50ff65bd3389, _44aaace4f97d)), 
      this;
    };
    d.prototype.removeListener = function(_50ff65bd3389, _44aaace4f97d) {
      var _2a158aef7229, _d4a233116e5e, _4422b4c44b29, _3f203aa00e91, _ca350ac15a97;
      if (P(_44aaace4f97d), _d4a233116e5e = this._events, _d4a233116e5e === void 0) return this;
      if (_2a158aef7229 = _d4a233116e5e[_50ff65bd3389], _2a158aef7229 === void 0) return this;
      if (_2a158aef7229 === _44aaace4f97d || _2a158aef7229.listener === _44aaace4f97d) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete _d4a233116e5e[_50ff65bd3389], 
      _d4a233116e5e.removeListener && this.emit("removeListener", _50ff65bd3389, _2a158aef7229.listener || _44aaace4f97d)); else if (typeof _2a158aef7229 != "function") {
        for (_4422b4c44b29 = -1, _3f203aa00e91 = _2a158aef7229.length - 1; _3f203aa00e91 >= 0; _3f203aa00e91--) if (_2a158aef7229[_3f203aa00e91] === _44aaace4f97d || _2a158aef7229[_3f203aa00e91].listener === _44aaace4f97d) {
          _ca350ac15a97 = _2a158aef7229[_3f203aa00e91].listener, _4422b4c44b29 = _3f203aa00e91;
          break;
        }
        if (_4422b4c44b29 < 0) return this;
        _4422b4c44b29 === 0 ? _2a158aef7229.shift() : nt(_2a158aef7229, _4422b4c44b29), 
        _2a158aef7229.length === 1 && (_d4a233116e5e[_50ff65bd3389] = _2a158aef7229[0]), 
        _d4a233116e5e.removeListener !== void 0 && this.emit("removeListener", _50ff65bd3389, _ca350ac15a97 || _44aaace4f97d);
      }
      return this;
    };
    d.prototype.off = d.prototype.removeListener;
    d.prototype.removeAllListeners = function(_50ff65bd3389) {
      var _44aaace4f97d, _2a158aef7229, _d4a233116e5e;
      if (_2a158aef7229 = this._events, _2a158aef7229 === void 0) return this;
      if (_2a158aef7229.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), 
      this._eventsCount = 0) : _2a158aef7229[_50ff65bd3389] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete _2a158aef7229[_50ff65bd3389]), 
      this;
      if (arguments.length === 0) {
        var _4422b4c44b29 = Object.keys(_2a158aef7229), _3f203aa00e91;
        for (_d4a233116e5e = 0; _d4a233116e5e < _4422b4c44b29.length; ++_d4a233116e5e) _3f203aa00e91 = _4422b4c44b29[_d4a233116e5e], 
        _3f203aa00e91 !== "removeListener" && this.removeAllListeners(_3f203aa00e91);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), 
        this._eventsCount = 0, this;
      }
      if (_44aaace4f97d = _2a158aef7229[_50ff65bd3389], typeof _44aaace4f97d == "function") this.removeListener(_50ff65bd3389, _44aaace4f97d); else if (_44aaace4f97d !== void 0) for (_d4a233116e5e = _44aaace4f97d.length - 1; _d4a233116e5e >= 0; _d4a233116e5e--) this.removeListener(_50ff65bd3389, _44aaace4f97d[_d4a233116e5e]);
      return this;
    };
    function ee(_50ff65bd3389, _44aaace4f97d, _2a158aef7229) {
      var _d4a233116e5e = _50ff65bd3389._events;
      if (_d4a233116e5e === void 0) return [];
      var _4422b4c44b29 = _d4a233116e5e[_44aaace4f97d];
      return _4422b4c44b29 === void 0 ? [] : typeof _4422b4c44b29 == "function" ? _2a158aef7229 ? [ _4422b4c44b29.listener || _4422b4c44b29 ] : [ _4422b4c44b29 ] : _2a158aef7229 ? it(_4422b4c44b29) : re(_4422b4c44b29, _4422b4c44b29.length);
    }
    d.prototype.listeners = function(_50ff65bd3389) {
      return ee(this, _50ff65bd3389, !0);
    };
    d.prototype.rawListeners = function(_50ff65bd3389) {
      return ee(this, _50ff65bd3389, !1);
    };
    d.listenerCount = function(_50ff65bd3389, _44aaace4f97d) {
      return typeof _50ff65bd3389.listenerCount == "function" ? _50ff65bd3389.listenerCount(_44aaace4f97d) : te.call(_50ff65bd3389, _44aaace4f97d);
    };
    d.prototype.listenerCount = te;
    function te(_50ff65bd3389) {
      var _44aaace4f97d = this._events;
      if (_44aaace4f97d !== void 0) {
        var _2a158aef7229 = _44aaace4f97d[_50ff65bd3389];
        if (typeof _2a158aef7229 == "function") return 1;
        if (_2a158aef7229 !== void 0) return _2a158aef7229.length;
      }
      return 0;
    }
    d.prototype.eventNames = function() {
      return this._eventsCount > 0 ? _4422b4c44b29(this._events) : [];
    };
    function re(_50ff65bd3389, _44aaace4f97d) {
      for (var _2a158aef7229 = new Array(_44aaace4f97d), _d4a233116e5e = 0; _d4a233116e5e < _44aaace4f97d; ++_d4a233116e5e) _2a158aef7229[_d4a233116e5e] = _50ff65bd3389[_d4a233116e5e];
      return _2a158aef7229;
    }
    function nt(_50ff65bd3389, _44aaace4f97d) {
      for (;_44aaace4f97d + 1 < _50ff65bd3389.length; _44aaace4f97d++) _50ff65bd3389[_44aaace4f97d] = _50ff65bd3389[_44aaace4f97d + 1];
      _50ff65bd3389.pop();
    }
    function it(_50ff65bd3389) {
      for (var _44aaace4f97d = new Array(_50ff65bd3389.length), _2a158aef7229 = 0; _2a158aef7229 < _44aaace4f97d.length; ++_2a158aef7229) _44aaace4f97d[_2a158aef7229] = _50ff65bd3389[_2a158aef7229].listener || _50ff65bd3389[_2a158aef7229];
      return _44aaace4f97d;
    }
    function st(_50ff65bd3389, _44aaace4f97d) {
      return new Promise(function(_2a158aef7229, _d4a233116e5e) {
        function n(_2a158aef7229) {
          _50ff65bd3389.removeListener(_44aaace4f97d, o), _d4a233116e5e(_2a158aef7229);
        }
        function o() {
          typeof _50ff65bd3389.removeListener == "function" && _50ff65bd3389.removeListener("error", n), 
          _2a158aef7229([].slice.call(arguments));
        }
        oe(_50ff65bd3389, _44aaace4f97d, o, {
          once: !0
        }), _44aaace4f97d !== "error" && at(_50ff65bd3389, n, {
          once: !0
        });
      });
    }
    function at(_50ff65bd3389, _44aaace4f97d, _2a158aef7229) {
      typeof _50ff65bd3389.on == "function" && oe(_50ff65bd3389, "error", _44aaace4f97d, _2a158aef7229);
    }
    function oe(_50ff65bd3389, _44aaace4f97d, _2a158aef7229, _d4a233116e5e) {
      if (typeof _50ff65bd3389.on == "function") _d4a233116e5e.once ? _50ff65bd3389.once(_44aaace4f97d, _2a158aef7229) : _50ff65bd3389.on(_44aaace4f97d, _2a158aef7229); else if (typeof _50ff65bd3389.addEventListener == "function") _50ff65bd3389.addEventListener(_44aaace4f97d, function n(_4422b4c44b29) {
        _d4a233116e5e.once && _50ff65bd3389.removeEventListener(_44aaace4f97d, n), _2a158aef7229(_4422b4c44b29);
      }); else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof _50ff65bd3389);
    }
  });
  var _1b4c1b5cc899 = m(_ca350ac15a97(), 1);
  var _b2cbd85a9207 = class {
    #_50ff65bd3389;
    #_44aaace4f97d;
    constructor(_50ff65bd3389 = {}, _44aaace4f97d = null, _2a158aef7229 = null) {
      this.#_50ff65bd3389 = !1, this.#_44aaace4f97d = null, this.data = _50ff65bd3389, 
      this.target = _44aaace4f97d, this.that = _2a158aef7229;
    }
    get intercepted() {
      return this.#_50ff65bd3389;
    }
    get returnValue() {
      return this.#_44aaace4f97d;
    }
    respondWith(_50ff65bd3389) {
      this.#_44aaace4f97d = _50ff65bd3389, this.#_50ff65bd3389 = !0;
    }
  }, _3c56f1b98100 = _b2cbd85a9207;
  var _c987b2f43fe1 = class extends _1b4c1b5cc899.default {
    constructor(_50ff65bd3389) {
      super(), this.ctx = _50ff65bd3389, this.window = _50ff65bd3389.window, this.document = this.window.document, 
      this.Document = this.window.Document || {}, this.DOMParser = this.window.DOMParser || {}, 
      this.docProto = this.Document.prototype || {}, this.domProto = this.DOMParser.prototype || {}, 
      this.title = _50ff65bd3389.nativeMethods.getOwnPropertyDescriptor(this.docProto, "title"), 
      this.cookie = _50ff65bd3389.nativeMethods.getOwnPropertyDescriptor(this.docProto, "cookie"), 
      this.referrer = _50ff65bd3389.nativeMethods.getOwnPropertyDescriptor(this.docProto, "referrer"), 
      this.domain = _50ff65bd3389.nativeMethods.getOwnPropertyDescriptor(this.docProto, "domain"), 
      this.documentURI = _50ff65bd3389.nativeMethods.getOwnPropertyDescriptor(this.docProto, "documentURI"), 
      this.write = this.docProto.write, this.writeln = this.docProto.writeln, this.querySelector = this.docProto.querySelector, 
      this.querySelectorAll = this.docProto.querySelectorAll, this.parseFromString = this.domProto.parseFromString, 
      this.URL = _50ff65bd3389.nativeMethods.getOwnPropertyDescriptor(this.docProto, "URL");
    }
    overrideParseFromString() {
      this.ctx.override(this.domProto, "parseFromString", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (2 > _2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e, _4422b4c44b29] = _2a158aef7229, _3f203aa00e91 = new _3c56f1b98100({
          string: _d4a233116e5e,
          type: _4422b4c44b29
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("parseFromString", _3f203aa00e91), _3f203aa00e91.intercepted ? _3f203aa00e91.returnValue : _3f203aa00e91.target.call(_3f203aa00e91.that, _3f203aa00e91.data.string, _3f203aa00e91.data.type);
      });
    }
    overrideQuerySelector() {
      this.ctx.override(this.docProto, "querySelector", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (!_2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e] = _2a158aef7229, _4422b4c44b29 = new _3c56f1b98100({
          selectors: _d4a233116e5e
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("querySelector", _4422b4c44b29), _4422b4c44b29.intercepted ? _4422b4c44b29.returnValue : _4422b4c44b29.target.call(_4422b4c44b29.that, _4422b4c44b29.data.selectors);
      });
    }
    overrideDomain() {
      this.ctx.overrideDescriptor(this.docProto, "domain", {
        get: (_50ff65bd3389, _44aaace4f97d) => {
          let _2a158aef7229 = new _3c56f1b98100({
            value: _50ff65bd3389.call(_44aaace4f97d)
          }, _50ff65bd3389, _44aaace4f97d);
          return this.emit("getDomain", _2a158aef7229), _2a158aef7229.intercepted ? _2a158aef7229.returnValue : _2a158aef7229.data.value;
        },
        set: (_50ff65bd3389, _44aaace4f97d, [_2a158aef7229]) => {
          let _d4a233116e5e = new _3c56f1b98100({
            value: _2a158aef7229
          }, _50ff65bd3389, _44aaace4f97d);
          return this.emit("setDomain", _d4a233116e5e), _d4a233116e5e.intercepted ? _d4a233116e5e.returnValue : _d4a233116e5e.target.call(_d4a233116e5e.that, _d4a233116e5e.data.value);
        }
      });
    }
    overrideReferrer() {
      this.ctx.overrideDescriptor(this.docProto, "referrer", {
        get: (_50ff65bd3389, _44aaace4f97d) => {
          let _2a158aef7229 = new _3c56f1b98100({
            value: _50ff65bd3389.call(_44aaace4f97d)
          }, _50ff65bd3389, _44aaace4f97d);
          return this.emit("referrer", _2a158aef7229), _2a158aef7229.intercepted ? _2a158aef7229.returnValue : _2a158aef7229.data.value;
        }
      });
    }
    overrideCreateTreeWalker() {
      this.ctx.override(this.docProto, "createTreeWalker", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (!_2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e, _4422b4c44b29 = 4294967295, _3f203aa00e91, _ca350ac15a97] = _2a158aef7229, _1b4c1b5cc899 = new _3c56f1b98100({
          root: _d4a233116e5e,
          show: _4422b4c44b29,
          filter: _3f203aa00e91,
          expandEntityReferences: _ca350ac15a97
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("createTreeWalker", _1b4c1b5cc899), _1b4c1b5cc899.intercepted ? _1b4c1b5cc899.returnValue : _1b4c1b5cc899.target.call(_1b4c1b5cc899.that, _1b4c1b5cc899.data.root, _1b4c1b5cc899.data.show, _1b4c1b5cc899.data.filter, _1b4c1b5cc899.data.expandEntityReferences);
      });
    }
    overrideWrite() {
      this.ctx.override(this.docProto, "write", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (!_2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [..._d4a233116e5e] = _2a158aef7229, _4422b4c44b29 = new _3c56f1b98100({
          html: _d4a233116e5e
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("write", _4422b4c44b29), _4422b4c44b29.intercepted ? _4422b4c44b29.returnValue : _4422b4c44b29.target.apply(_4422b4c44b29.that, _4422b4c44b29.data.html);
      }), this.ctx.override(this.docProto, "writeln", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (!_2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [..._d4a233116e5e] = _2a158aef7229, _4422b4c44b29 = new _3c56f1b98100({
          html: _d4a233116e5e
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("writeln", _4422b4c44b29), _4422b4c44b29.intercepted ? _4422b4c44b29.returnValue : _4422b4c44b29.target.apply(_4422b4c44b29.that, _4422b4c44b29.data.html);
      });
    }
    overrideDocumentURI() {
      this.ctx.overrideDescriptor(this.docProto, "documentURI", {
        get: (_50ff65bd3389, _44aaace4f97d) => {
          let _2a158aef7229 = new _3c56f1b98100({
            value: _50ff65bd3389.call(_44aaace4f97d)
          }, _50ff65bd3389, _44aaace4f97d);
          return this.emit("documentURI", _2a158aef7229), _2a158aef7229.intercepted ? _2a158aef7229.returnValue : _2a158aef7229.data.value;
        }
      });
    }
    overrideURL() {
      this.ctx.overrideDescriptor(this.docProto, "URL", {
        get: (_50ff65bd3389, _44aaace4f97d) => {
          let _2a158aef7229 = new _3c56f1b98100({
            value: _50ff65bd3389.call(_44aaace4f97d)
          }, _50ff65bd3389, _44aaace4f97d);
          return this.emit("url", _2a158aef7229), _2a158aef7229.intercepted ? _2a158aef7229.returnValue : _2a158aef7229.data.value;
        }
      });
    }
    overrideCookie() {
      this.ctx.overrideDescriptor(this.docProto, "cookie", {
        get: (_50ff65bd3389, _44aaace4f97d) => {
          let _2a158aef7229 = new _3c56f1b98100({
            value: _50ff65bd3389.call(_44aaace4f97d)
          }, _50ff65bd3389, _44aaace4f97d);
          return this.emit("getCookie", _2a158aef7229), _2a158aef7229.intercepted ? _2a158aef7229.returnValue : _2a158aef7229.data.value;
        },
        set: (_50ff65bd3389, _44aaace4f97d, [_2a158aef7229]) => {
          let _d4a233116e5e = new _3c56f1b98100({
            value: _2a158aef7229
          }, _50ff65bd3389, _44aaace4f97d);
          return this.emit("setCookie", _d4a233116e5e), _d4a233116e5e.intercepted ? _d4a233116e5e.returnValue : _d4a233116e5e.target.call(_d4a233116e5e.that, _d4a233116e5e.data.value);
        }
      });
    }
    overrideTitle() {
      this.ctx.overrideDescriptor(this.docProto, "title", {
        get: (_50ff65bd3389, _44aaace4f97d) => {
          let _2a158aef7229 = new _3c56f1b98100({
            value: _50ff65bd3389.call(_44aaace4f97d)
          }, _50ff65bd3389, _44aaace4f97d);
          return this.emit("getTitle", _2a158aef7229), _2a158aef7229.intercepted ? _2a158aef7229.returnValue : _2a158aef7229.data.value;
        },
        set: (_50ff65bd3389, _44aaace4f97d, [_2a158aef7229]) => {
          let _d4a233116e5e = new _3c56f1b98100({
            value: _2a158aef7229
          }, _50ff65bd3389, _44aaace4f97d);
          return this.emit("setTitle", _d4a233116e5e), _d4a233116e5e.intercepted ? _d4a233116e5e.returnValue : _d4a233116e5e.target.call(_d4a233116e5e.that, _d4a233116e5e.data.value);
        }
      });
    }
  }, _c7f2e9df23c4 = _c987b2f43fe1;
  var _5c757caffed6 = m(_ca350ac15a97(), 1);
  var _14906a6e3af6 = class extends _5c757caffed6.default {
    constructor(_50ff65bd3389) {
      super(), this.ctx = _50ff65bd3389, this.window = _50ff65bd3389.window, this.Audio = this.window.Audio, 
      this.Element = this.window.Element, this.elemProto = this.Element ? this.Element.prototype : {}, 
      this.innerHTML = _50ff65bd3389.nativeMethods.getOwnPropertyDescriptor(this.elemProto, "innerHTML"), 
      this.outerHTML = _50ff65bd3389.nativeMethods.getOwnPropertyDescriptor(this.elemProto, "outerHTML"), 
      this.setAttribute = this.elemProto.setAttribute, this.getAttribute = this.elemProto.getAttribute, 
      this.removeAttribute = this.elemProto.removeAttribute, this.hasAttribute = this.elemProto.hasAttribute, 
      this.querySelector = this.elemProto.querySelector, this.querySelectorAll = this.elemProto.querySelectorAll, 
      this.insertAdjacentHTML = this.elemProto.insertAdjacentHTML, this.insertAdjacentText = this.elemProto.insertAdjacentText;
    }
    overrideQuerySelector() {
      this.ctx.override(this.elemProto, "querySelector", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (!_2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e] = _2a158aef7229, _4422b4c44b29 = new _3c56f1b98100({
          selectors: _d4a233116e5e
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("querySelector", _4422b4c44b29), _4422b4c44b29.intercepted ? _4422b4c44b29.returnValue : _4422b4c44b29.target.call(_4422b4c44b29.that, _4422b4c44b29.data.selectors);
      });
    }
    overrideAttribute() {
      this.ctx.override(this.elemProto, "getAttribute", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (!_2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e] = _2a158aef7229, _4422b4c44b29 = new _3c56f1b98100({
          name: _d4a233116e5e
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("getAttribute", _4422b4c44b29), _4422b4c44b29.intercepted ? _4422b4c44b29.returnValue : _4422b4c44b29.target.call(_4422b4c44b29.that, _4422b4c44b29.data.name);
      }), this.ctx.override(this.elemProto, "setAttribute", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (2 > _2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e, _4422b4c44b29] = _2a158aef7229, _3f203aa00e91 = new _3c56f1b98100({
          name: _d4a233116e5e,
          value: _4422b4c44b29
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("setAttribute", _3f203aa00e91), _3f203aa00e91.intercepted ? _3f203aa00e91.returnValue : _3f203aa00e91.target.call(_3f203aa00e91.that, _3f203aa00e91.data.name, _3f203aa00e91.data.value);
      }), this.ctx.override(this.elemProto, "hasAttribute", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (!_2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e] = _2a158aef7229, _4422b4c44b29 = new _3c56f1b98100({
          name: _d4a233116e5e
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("hasAttribute", _4422b4c44b29), _4422b4c44b29.intercepted ? _4422b4c44b29.returnValue : _4422b4c44b29.target.call(_4422b4c44b29.that, _4422b4c44b29.data.name);
      }), this.ctx.override(this.elemProto, "removeAttribute", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (!_2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e] = _2a158aef7229, _4422b4c44b29 = new _3c56f1b98100({
          name: _d4a233116e5e
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("removeAttribute", _4422b4c44b29), _4422b4c44b29.intercepted ? _4422b4c44b29.returnValue : _4422b4c44b29.target.call(_4422b4c44b29.that, _4422b4c44b29.data.name);
      });
    }
    overrideAudio() {
      this.ctx.override(this.window, "Audio", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (!_2a158aef7229.length) return new _50ff65bd3389(..._2a158aef7229);
        let [_d4a233116e5e] = _2a158aef7229, _4422b4c44b29 = new _3c56f1b98100({
          url: _d4a233116e5e
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("audio", _4422b4c44b29), _4422b4c44b29.intercepted ? _4422b4c44b29.returnValue : new _4422b4c44b29.target(_4422b4c44b29.data.url);
      }, !0);
    }
    overrideHtml() {
      this.hookProperty(this.Element, "innerHTML", {
        get: (_50ff65bd3389, _44aaace4f97d) => {
          let _2a158aef7229 = new _3c56f1b98100({
            value: _50ff65bd3389.call(_44aaace4f97d)
          }, _50ff65bd3389, _44aaace4f97d);
          return this.emit("getInnerHTML", _2a158aef7229), _2a158aef7229.intercepted ? _2a158aef7229.returnValue : _2a158aef7229.data.value;
        },
        set: (_50ff65bd3389, _44aaace4f97d, [_2a158aef7229]) => {
          let _d4a233116e5e = new _3c56f1b98100({
            value: _2a158aef7229
          }, _50ff65bd3389, _44aaace4f97d);
          if (this.emit("setInnerHTML", _d4a233116e5e), _d4a233116e5e.intercepted) return _d4a233116e5e.returnValue;
          _50ff65bd3389.call(_44aaace4f97d, _d4a233116e5e.data.value);
        }
      }), this.hookProperty(this.Element, "outerHTML", {
        get: (_50ff65bd3389, _44aaace4f97d) => {
          let _2a158aef7229 = new _3c56f1b98100({
            value: _50ff65bd3389.call(_44aaace4f97d)
          }, _50ff65bd3389, _44aaace4f97d);
          return this.emit("getOuterHTML", _2a158aef7229), _2a158aef7229.intercepted ? _2a158aef7229.returnValue : _2a158aef7229.data.value;
        },
        set: (_50ff65bd3389, _44aaace4f97d, [_2a158aef7229]) => {
          let _d4a233116e5e = new _3c56f1b98100({
            value: _2a158aef7229
          }, _50ff65bd3389, _44aaace4f97d);
          if (this.emit("setOuterHTML", _d4a233116e5e), _d4a233116e5e.intercepted) return _d4a233116e5e.returnValue;
          _50ff65bd3389.call(_44aaace4f97d, _d4a233116e5e.data.value);
        }
      });
    }
    overrideInsertAdjacentHTML() {
      this.ctx.override(this.elemProto, "insertAdjacentHTML", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (2 > _2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e, _4422b4c44b29] = _2a158aef7229, _3f203aa00e91 = new _3c56f1b98100({
          position: _d4a233116e5e,
          html: _4422b4c44b29
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("insertAdjacentHTML", _3f203aa00e91), _3f203aa00e91.intercepted ? _3f203aa00e91.returnValue : _3f203aa00e91.target.call(_3f203aa00e91.that, _3f203aa00e91.data.position, _3f203aa00e91.data.html);
      });
    }
    overrideInsertAdjacentText() {
      this.ctx.override(this.elemProto, "insertAdjacentText", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (2 > _2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e, _4422b4c44b29] = _2a158aef7229, _3f203aa00e91 = new _3c56f1b98100({
          position: _d4a233116e5e,
          text: _4422b4c44b29
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("insertAdjacentText", _3f203aa00e91), _3f203aa00e91.intercepted ? _3f203aa00e91.returnValue : _3f203aa00e91.target.call(_3f203aa00e91.that, _3f203aa00e91.data.position, _3f203aa00e91.data.text);
      });
    }
    hookProperty(_50ff65bd3389, _44aaace4f97d, _2a158aef7229) {
      if (!_50ff65bd3389) return !1;
      if (this.ctx.nativeMethods.isArray(_50ff65bd3389)) {
        for (let _d4a233116e5e of _50ff65bd3389) this.hookProperty(_d4a233116e5e, _44aaace4f97d, _2a158aef7229);
        return !0;
      }
      let _d4a233116e5e = _50ff65bd3389.prototype;
      return this.ctx.overrideDescriptor(_d4a233116e5e, _44aaace4f97d, _2a158aef7229), 
      !0;
    }
  }, _dd73ade84b23 = _14906a6e3af6;
  var _cb66c4c210c1 = m(_ca350ac15a97(), 1);
  var _d35eecde702b = class extends _cb66c4c210c1.default {
    constructor(_50ff65bd3389) {
      super(), this.ctx = _50ff65bd3389, this.window = _50ff65bd3389.window, this.Node = _50ff65bd3389.window.Node || {}, 
      this.nodeProto = this.Node.prototype || {}, this.compareDocumentPosition = this.nodeProto.compareDocumentPosition, 
      this.contains = this.nodeProto.contains, this.insertBefore = this.nodeProto.insertBefore, 
      this.replaceChild = this.nodeProto.replaceChild, this.append = this.nodeProto.append, 
      this.appendChild = this.nodeProto.appendChild, this.removeChild = this.nodeProto.removeChild, 
      this.textContent = _50ff65bd3389.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "textContent"), 
      this.parentNode = _50ff65bd3389.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "parentNode"), 
      this.parentElement = _50ff65bd3389.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "parentElement"), 
      this.childNodes = _50ff65bd3389.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "childNodes"), 
      this.baseURI = _50ff65bd3389.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "baseURI"), 
      this.previousSibling = _50ff65bd3389.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "previousSibling"), 
      this.ownerDocument = _50ff65bd3389.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "ownerDocument");
    }
    overrideTextContent() {
      this.ctx.overrideDescriptor(this.nodeProto, "textContent", {
        get: (_50ff65bd3389, _44aaace4f97d) => {
          let _2a158aef7229 = new _3c56f1b98100({
            value: _50ff65bd3389.call(_44aaace4f97d)
          }, _50ff65bd3389, _44aaace4f97d);
          return this.emit("getTextContent", _2a158aef7229), _2a158aef7229.intercepted ? _2a158aef7229.returnValue : _2a158aef7229.data.value;
        },
        set: (_50ff65bd3389, _44aaace4f97d, [_2a158aef7229]) => {
          let _d4a233116e5e = new _3c56f1b98100({
            value: _2a158aef7229
          }, _50ff65bd3389, _44aaace4f97d);
          if (this.emit("setTextContent", _d4a233116e5e), _d4a233116e5e.intercepted) return _d4a233116e5e.returnValue;
          _50ff65bd3389.call(_44aaace4f97d, _d4a233116e5e.data.value);
        }
      });
    }
    overrideAppend() {
      this.ctx.override(this.nodeProto, "append", (_50ff65bd3389, _44aaace4f97d, [..._2a158aef7229]) => {
        let _d4a233116e5e = new _3c56f1b98100({
          nodes: _2a158aef7229
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("append", _d4a233116e5e), _d4a233116e5e.intercepted ? _d4a233116e5e.returnValue : _d4a233116e5e.target.call(_d4a233116e5e.that, _d4a233116e5e.data.nodes);
      }), this.ctx.override(this.nodeProto, "appendChild", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (!_2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e] = _2a158aef7229, _4422b4c44b29 = new _3c56f1b98100({
          node: _d4a233116e5e
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("appendChild", _4422b4c44b29), _4422b4c44b29.intercepted ? _4422b4c44b29.returnValue : _4422b4c44b29.target.call(_4422b4c44b29.that, _4422b4c44b29.data.node);
      });
    }
    overrideBaseURI() {
      this.ctx.overrideDescriptor(this.nodeProto, "baseURI", {
        get: (_50ff65bd3389, _44aaace4f97d) => {
          let _2a158aef7229 = new _3c56f1b98100({
            value: _50ff65bd3389.call(_44aaace4f97d)
          }, _50ff65bd3389, _44aaace4f97d);
          return this.emit("baseURI", _2a158aef7229), _2a158aef7229.intercepted ? _2a158aef7229.returnValue : _2a158aef7229.data.value;
        }
      });
    }
    overrideParent() {
      this.ctx.overrideDescriptor(this.nodeProto, "parentNode", {
        get: (_50ff65bd3389, _44aaace4f97d) => {
          let _2a158aef7229 = new _3c56f1b98100({
            node: _50ff65bd3389.call(_44aaace4f97d)
          }, _50ff65bd3389, _44aaace4f97d);
          return this.emit("parentNode", _2a158aef7229), _2a158aef7229.intercepted ? _2a158aef7229.returnValue : _2a158aef7229.data.node;
        }
      }), this.ctx.overrideDescriptor(this.nodeProto, "parentElement", {
        get: (_50ff65bd3389, _44aaace4f97d) => {
          let _2a158aef7229 = new _3c56f1b98100({
            element: _50ff65bd3389.call(_44aaace4f97d)
          }, _50ff65bd3389, _44aaace4f97d);
          return this.emit("parentElement", _2a158aef7229), _2a158aef7229.intercepted ? _2a158aef7229.returnValue : _2a158aef7229.data.node;
        }
      });
    }
    overrideOwnerDocument() {
      this.ctx.overrideDescriptor(this.nodeProto, "ownerDocument", {
        get: (_50ff65bd3389, _44aaace4f97d) => {
          let _2a158aef7229 = new _3c56f1b98100({
            document: _50ff65bd3389.call(_44aaace4f97d)
          }, _50ff65bd3389, _44aaace4f97d);
          return this.emit("ownerDocument", _2a158aef7229), _2a158aef7229.intercepted ? _2a158aef7229.returnValue : _2a158aef7229.data.document;
        }
      });
    }
    overrideCompareDocumentPosit1ion() {
      this.ctx.override(this.nodeProto, "compareDocumentPosition", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (!_2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e] = _2a158aef7229, _4422b4c44b29 = new _3c56f1b98100({
          node: _d4a233116e5e
        }, _50ff65bd3389, _44aaace4f97d);
        return _4422b4c44b29.intercepted ? _4422b4c44b29.returnValue : _4422b4c44b29.target.call(_4422b4c44b29.that, _4422b4c44b29.data.node);
      });
    }
    overrideChildMethods() {
      this.ctx.override(this.nodeProto, "removeChild");
    }
  }, _134488cb1940 = _d35eecde702b;
  var _37acd1465352 = m(_ca350ac15a97(), 1);
  var _0491ad6a6fa2 = class extends _37acd1465352.default {
    constructor(_50ff65bd3389) {
      super(), this.ctx = _50ff65bd3389, this.window = _50ff65bd3389.window, this.Attr = this.window.Attr || {}, 
      this.attrProto = this.Attr.prototype || {}, this.value = _50ff65bd3389.nativeMethods.getOwnPropertyDescriptor(this.attrProto, "value"), 
      this.name = _50ff65bd3389.nativeMethods.getOwnPropertyDescriptor(this.attrProto, "name"), 
      this.getNamedItem = this.attrProto.getNamedItem || null, this.setNamedItem = this.attrProto.setNamedItem || null, 
      this.removeNamedItem = this.attrProto.removeNamedItem || null, this.getNamedItemNS = this.attrProto.getNamedItemNS || null, 
      this.setNamedItemNS = this.attrProto.setNamedItemNS || null, this.removeNamedItemNS = this.attrProto.removeNamedItemNS || null, 
      this.item = this.attrProto.item || null;
    }
    overrideNameValue() {
      this.ctx.overrideDescriptor(this.attrProto, "name", {
        get: (_50ff65bd3389, _44aaace4f97d) => {
          let _2a158aef7229 = new _3c56f1b98100({
            value: _50ff65bd3389.call(_44aaace4f97d)
          }, _50ff65bd3389, _44aaace4f97d);
          return this.emit("name", _2a158aef7229), _2a158aef7229.intercepted ? _2a158aef7229.returnValue : _2a158aef7229.data.value;
        }
      }), this.ctx.overrideDescriptor(this.attrProto, "value", {
        get: (_50ff65bd3389, _44aaace4f97d) => {
          let _2a158aef7229 = new _3c56f1b98100({
            name: this.name.get.call(_44aaace4f97d),
            value: _50ff65bd3389.call(_44aaace4f97d)
          }, _50ff65bd3389, _44aaace4f97d);
          return this.emit("getValue", _2a158aef7229), _2a158aef7229.intercepted ? _2a158aef7229.returnValue : _2a158aef7229.data.value;
        },
        set: (_50ff65bd3389, _44aaace4f97d, [_2a158aef7229]) => {
          let _d4a233116e5e = new _3c56f1b98100({
            name: this.name.get.call(_44aaace4f97d),
            value: _2a158aef7229
          }, _50ff65bd3389, _44aaace4f97d);
          if (this.emit("setValue", _d4a233116e5e), _d4a233116e5e.intercepted) return _d4a233116e5e.returnValue;
          _d4a233116e5e.target.call(_d4a233116e5e.that, _d4a233116e5e.data.value);
        }
      });
    }
    overrideItemMethods() {
      this.ctx.override(this.attrProto, "getNamedItem", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (!_2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e] = _2a158aef7229, _4422b4c44b29 = new _3c56f1b98100({
          name: _d4a233116e5e
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("getNamedItem", _4422b4c44b29), _4422b4c44b29.intercepted ? _4422b4c44b29.returnValue : _4422b4c44b29.target.call(_4422b4c44b29.that, _4422b4c44b29.data.name);
      }), this.ctx.override(this.attrProto, "setNamedItem", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (2 > _2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e, _4422b4c44b29] = _2a158aef7229, _3f203aa00e91 = new _3c56f1b98100({
          name: _d4a233116e5e,
          value: _4422b4c44b29
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("setNamedItem", _3f203aa00e91), _3f203aa00e91.intercepted ? _3f203aa00e91.returnValue : _3f203aa00e91.target.call(_3f203aa00e91.that, _3f203aa00e91.data.name, _3f203aa00e91.data.value);
      }), this.ctx.override(this.attrProto, "removeNamedItem", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (!_2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e] = _2a158aef7229, _4422b4c44b29 = new _3c56f1b98100({
          name: _d4a233116e5e
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("removeNamedItem", _4422b4c44b29), _4422b4c44b29.intercepted ? _4422b4c44b29.returnValue : _4422b4c44b29.target.call(_4422b4c44b29.that, _4422b4c44b29.data.name);
      }), this.ctx.override(this.attrProto, "item", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (!_2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e] = _2a158aef7229, _4422b4c44b29 = new _3c56f1b98100({
          index: _d4a233116e5e
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("item", _4422b4c44b29), _4422b4c44b29.intercepted ? _4422b4c44b29.returnValue : _4422b4c44b29.target.call(_4422b4c44b29.that, _4422b4c44b29.data.name);
      }), this.ctx.override(this.attrProto, "getNamedItemNS", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (2 > _2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e, _4422b4c44b29] = _2a158aef7229, _3f203aa00e91 = new _3c56f1b98100({
          namespace: _d4a233116e5e,
          localName: _4422b4c44b29
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("getNamedItemNS", _3f203aa00e91), _3f203aa00e91.intercepted ? _3f203aa00e91.returnValue : _3f203aa00e91.target.call(_3f203aa00e91.that, _3f203aa00e91.data.namespace, _3f203aa00e91.data.localName);
      }), this.ctx.override(this.attrProto, "setNamedItemNS", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (!_2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e] = _2a158aef7229, _4422b4c44b29 = new _3c56f1b98100({
          attr: _d4a233116e5e
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("setNamedItemNS", _4422b4c44b29), _4422b4c44b29.intercepted ? _4422b4c44b29.returnValue : _4422b4c44b29.target.call(_4422b4c44b29.that, _4422b4c44b29.data.name);
      }), this.ctx.override(this.attrProto, "removeNamedItemNS", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (2 > _2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e, _4422b4c44b29] = _2a158aef7229, _3f203aa00e91 = new _3c56f1b98100({
          namespace: _d4a233116e5e,
          localName: _4422b4c44b29
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("removeNamedItemNS", _3f203aa00e91), _3f203aa00e91.intercepted ? _3f203aa00e91.returnValue : _3f203aa00e91.target.call(_3f203aa00e91.that, _3f203aa00e91.data.namespace, _3f203aa00e91.data.localName);
      });
    }
  }, _13a89e219524 = _0491ad6a6fa2;
  var _e159001daf8a = m(_ca350ac15a97(), 1);
  var _a2232fe96abd = class extends _e159001daf8a.default {
    constructor(_50ff65bd3389) {
      super(), this.ctx = _50ff65bd3389, this.window = _50ff65bd3389.window, this.Function = this.window.Function, 
      this.fnProto = this.Function.prototype, this.toString = this.fnProto.toString, this.fnStrings = _50ff65bd3389.fnStrings, 
      this.call = this.fnProto.call, this.apply = this.fnProto.apply, this.bind = this.fnProto.bind;
    }
    overrideFunction() {
      this.ctx.override(this.window, "Function", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (!_2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let _d4a233116e5e = _2a158aef7229[_2a158aef7229.length - 1], _4422b4c44b29 = [];
        for (let _50ff65bd3389 = 0; _50ff65bd3389 < _2a158aef7229.length - 1; _50ff65bd3389++) _4422b4c44b29.push(_2a158aef7229[_50ff65bd3389]);
        let _3f203aa00e91 = new _3c56f1b98100({
          script: _d4a233116e5e,
          args: _4422b4c44b29
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("function", _3f203aa00e91), _3f203aa00e91.intercepted ? _3f203aa00e91.returnValue : _3f203aa00e91.target.call(_3f203aa00e91.that, ..._3f203aa00e91.data.args, _3f203aa00e91.data.script);
      }, !0);
    }
    overrideToString() {
      this.ctx.override(this.fnProto, "toString", (_50ff65bd3389, _44aaace4f97d) => {
        let _2a158aef7229 = new _3c56f1b98100({
          fn: _44aaace4f97d
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("toString", _2a158aef7229), _2a158aef7229.intercepted ? _2a158aef7229.returnValue : _2a158aef7229.target.call(_2a158aef7229.data.fn);
      });
    }
  }, _7da7becbd304 = _a2232fe96abd;
  var _8d7032f5d546 = m(_ca350ac15a97(), 1);
  var _a28f256c8551 = class extends _8d7032f5d546.default {
    constructor(_50ff65bd3389) {
      super(), this.ctx = _50ff65bd3389, this.window = _50ff65bd3389.window, this.Object = this.window.Object, 
      this.getOwnPropertyDescriptors = this.Object.getOwnPropertyDescriptors, this.getOwnPropertyDescriptor = this.Object.getOwnPropertyDescriptor, 
      this.getOwnPropertyNames = this.Object.getOwnPropertyNames;
    }
    overrideGetPropertyNames() {
      this.ctx.override(this.Object, "getOwnPropertyNames", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (!_2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e] = _2a158aef7229, _4422b4c44b29 = new _3c56f1b98100({
          names: _50ff65bd3389.call(_44aaace4f97d, _d4a233116e5e)
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("getOwnPropertyNames", _4422b4c44b29), _4422b4c44b29.intercepted ? _4422b4c44b29.returnValue : _4422b4c44b29.data.names;
      });
    }
    overrideGetOwnPropertyDescriptors() {
      this.ctx.override(this.Object, "getOwnPropertyDescriptors", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (!_2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e] = _2a158aef7229, _4422b4c44b29 = new _3c56f1b98100({
          descriptors: _50ff65bd3389.call(_44aaace4f97d, _d4a233116e5e)
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("getOwnPropertyDescriptors", _4422b4c44b29), _4422b4c44b29.intercepted ? _4422b4c44b29.returnValue : _4422b4c44b29.data.descriptors;
      });
    }
  }, _4baf4b1f7d1f = _a28f256c8551;
  var _e6071df5910c = m(_ca350ac15a97(), 1);
  var _02c96d0fbbbc = class extends _e6071df5910c.default {
    constructor(_50ff65bd3389) {
      super(), this.ctx = _50ff65bd3389, this.window = _50ff65bd3389.window, this.fetch = this.window.fetch, 
      this.Request = this.window.Request, this.Response = this.window.Response, this.Headers = this.window.Headers, 
      this.reqProto = this.Request ? this.Request.prototype : {}, this.resProto = this.Response ? this.Response.prototype : {}, 
      this.headersProto = this.Headers ? this.Headers.prototype : {}, this.reqUrl = _50ff65bd3389.nativeMethods.getOwnPropertyDescriptor(this.reqProto, "url"), 
      this.resUrl = _50ff65bd3389.nativeMethods.getOwnPropertyDescriptor(this.resProto, "url"), 
      this.reqHeaders = _50ff65bd3389.nativeMethods.getOwnPropertyDescriptor(this.reqProto, "headers"), 
      this.resHeaders = _50ff65bd3389.nativeMethods.getOwnPropertyDescriptor(this.resProto, "headers");
    }
    override() {
      return this.overrideRequest(), this.overrideUrl(), this.overrideHeaders(), !0;
    }
    overrideRequest() {
      return this.fetch ? (this.ctx.override(this.window, "fetch", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (!_2a158aef7229.length || _2a158aef7229[0] instanceof this.Request) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e, _4422b4c44b29 = {}] = _2a158aef7229, _3f203aa00e91 = new _3c56f1b98100({
          input: _d4a233116e5e,
          options: _4422b4c44b29
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("request", _3f203aa00e91), _3f203aa00e91.intercepted ? _3f203aa00e91.returnValue : _3f203aa00e91.target.call(_3f203aa00e91.that, _3f203aa00e91.data.input, _3f203aa00e91.data.options);
      }), this.ctx.override(this.window, "Request", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (!_2a158aef7229.length) return new _50ff65bd3389(..._2a158aef7229);
        let [_d4a233116e5e, _4422b4c44b29 = {}] = _2a158aef7229, _3f203aa00e91 = new _3c56f1b98100({
          input: _d4a233116e5e,
          options: _4422b4c44b29
        }, _50ff65bd3389);
        return this.emit("request", _3f203aa00e91), _3f203aa00e91.intercepted ? _3f203aa00e91.returnValue : new _3f203aa00e91.target(_3f203aa00e91.data.input, _3f203aa00e91.data.options);
      }, !0), !0) : !1;
    }
    overrideUrl() {
      return this.ctx.overrideDescriptor(this.reqProto, "url", {
        get: (_50ff65bd3389, _44aaace4f97d) => {
          let _2a158aef7229 = new _3c56f1b98100({
            value: _50ff65bd3389.call(_44aaace4f97d)
          }, _50ff65bd3389, _44aaace4f97d);
          return this.emit("requestUrl", _2a158aef7229), _2a158aef7229.intercepted ? _2a158aef7229.returnValue : _2a158aef7229.data.value;
        }
      }), this.ctx.overrideDescriptor(this.resProto, "url", {
        get: (_50ff65bd3389, _44aaace4f97d) => {
          let _2a158aef7229 = new _3c56f1b98100({
            value: _50ff65bd3389.call(_44aaace4f97d)
          }, _50ff65bd3389, _44aaace4f97d);
          return this.emit("responseUrl", _2a158aef7229), _2a158aef7229.intercepted ? _2a158aef7229.returnValue : _2a158aef7229.data.value;
        }
      }), !0;
    }
    overrideHeaders() {
      return this.Headers ? (this.ctx.overrideDescriptor(this.reqProto, "headers", {
        get: (_50ff65bd3389, _44aaace4f97d) => {
          let _2a158aef7229 = new _3c56f1b98100({
            value: _50ff65bd3389.call(_44aaace4f97d)
          }, _50ff65bd3389, _44aaace4f97d);
          return this.emit("requestHeaders", _2a158aef7229), _2a158aef7229.intercepted ? _2a158aef7229.returnValue : _2a158aef7229.data.value;
        }
      }), this.ctx.overrideDescriptor(this.resProto, "headers", {
        get: (_50ff65bd3389, _44aaace4f97d) => {
          let _2a158aef7229 = new _3c56f1b98100({
            value: _50ff65bd3389.call(_44aaace4f97d)
          }, _50ff65bd3389, _44aaace4f97d);
          return this.emit("responseHeaders", _2a158aef7229), _2a158aef7229.intercepted ? _2a158aef7229.returnValue : _2a158aef7229.data.value;
        }
      }), this.ctx.override(this.headersProto, "get", (_50ff65bd3389, _44aaace4f97d, [_2a158aef7229]) => {
        if (!_2a158aef7229) return _50ff65bd3389.call(_44aaace4f97d);
        let _d4a233116e5e = new _3c56f1b98100({
          name: _2a158aef7229,
          value: _50ff65bd3389.call(_44aaace4f97d, _2a158aef7229)
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("getHeader", _d4a233116e5e), _d4a233116e5e.intercepted ? _d4a233116e5e.returnValue : _d4a233116e5e.data.value;
      }), this.ctx.override(this.headersProto, "set", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (2 > _2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e, _4422b4c44b29] = _2a158aef7229, _3f203aa00e91 = new _3c56f1b98100({
          name: _d4a233116e5e,
          value: _4422b4c44b29
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("setHeader", _3f203aa00e91), _3f203aa00e91.intercepted ? _3f203aa00e91.returnValue : _3f203aa00e91.target.call(_3f203aa00e91.that, _3f203aa00e91.data.name, _3f203aa00e91.data.value);
      }), this.ctx.override(this.headersProto, "has", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (!_2a158aef7229.length) return _50ff65bd3389.call(_44aaace4f97d);
        let [_d4a233116e5e] = _2a158aef7229, _4422b4c44b29 = new _3c56f1b98100({
          name: _d4a233116e5e,
          value: _50ff65bd3389.call(_44aaace4f97d, _d4a233116e5e)
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("hasHeader", _4422b4c44b29), _4422b4c44b29.intercepted ? _4422b4c44b29.returnValue : _4422b4c44b29.data;
      }), this.ctx.override(this.headersProto, "append", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (2 > _2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e, _4422b4c44b29] = _2a158aef7229, _3f203aa00e91 = new _3c56f1b98100({
          name: _d4a233116e5e,
          value: _4422b4c44b29
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("appendHeader", _3f203aa00e91), _3f203aa00e91.intercepted ? _3f203aa00e91.returnValue : _3f203aa00e91.target.call(_3f203aa00e91.that, _3f203aa00e91.data.name, _3f203aa00e91.data.value);
      }), this.ctx.override(this.headersProto, "delete", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (!_2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e] = _2a158aef7229, _4422b4c44b29 = new _3c56f1b98100({
          name: _d4a233116e5e
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("deleteHeader", _4422b4c44b29), _4422b4c44b29.intercepted ? _4422b4c44b29.returnValue : _4422b4c44b29.target.call(_4422b4c44b29.that, _4422b4c44b29.data.name);
      }), !0) : !1;
    }
  }, _00ce5c5a22fc = _02c96d0fbbbc;
  var _539cf63dd3ee = m(_ca350ac15a97(), 1);
  var _81ae833545a1 = class extends _539cf63dd3ee.default {
    constructor(_50ff65bd3389) {
      super(), this.ctx = _50ff65bd3389, this.window = _50ff65bd3389.window, this.XMLHttpRequest = this.window.XMLHttpRequest, 
      this.xhrProto = this.window.XMLHttpRequest ? this.window.XMLHttpRequest.prototype : {}, 
      this.open = this.xhrProto.open, this.abort = this.xhrProto.abort, this.send = this.xhrProto.send, 
      this.overrideMimeType = this.xhrProto.overrideMimeType, this.getAllResponseHeaders = this.xhrProto.getAllResponseHeaders, 
      this.getResponseHeader = this.xhrProto.getResponseHeader, this.setRequestHeader = this.xhrProto.setRequestHeader, 
      this.responseURL = _50ff65bd3389.nativeMethods.getOwnPropertyDescriptor(this.xhrProto, "responseURL"), 
      this.responseText = _50ff65bd3389.nativeMethods.getOwnPropertyDescriptor(this.xhrProto, "responseText");
    }
    override() {
      this.overrideOpen(), this.overrideSend(), this.overrideMimeType(), this.overrideGetResHeader(), 
      this.overrideGetResHeaders(), this.overrideSetReqHeader();
    }
    overrideOpen() {
      this.ctx.override(this.xhrProto, "open", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (2 > _2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e, _4422b4c44b29, _3f203aa00e91 = !0, _ca350ac15a97 = null, _1b4c1b5cc899 = null] = _2a158aef7229, _b2cbd85a9207 = new _3c56f1b98100({
          method: _d4a233116e5e,
          input: _4422b4c44b29,
          async: _3f203aa00e91,
          user: _ca350ac15a97,
          password: _1b4c1b5cc899
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("open", _b2cbd85a9207), _b2cbd85a9207.intercepted ? _b2cbd85a9207.returnValue : _b2cbd85a9207.target.call(_b2cbd85a9207.that, _b2cbd85a9207.data.method, _b2cbd85a9207.data.input, _b2cbd85a9207.data.async, _b2cbd85a9207.data.user, _b2cbd85a9207.data.password);
      });
    }
    overrideResponseUrl() {
      this.ctx.overrideDescriptor(this.xhrProto, "responseURL", {
        get: (_50ff65bd3389, _44aaace4f97d) => {
          let _2a158aef7229 = new _3c56f1b98100({
            value: _50ff65bd3389.call(_44aaace4f97d)
          }, _50ff65bd3389, _44aaace4f97d);
          return this.emit("responseUrl", _2a158aef7229), _2a158aef7229.intercepted ? _2a158aef7229.returnValue : _2a158aef7229.data.value;
        }
      });
    }
    overrideSend() {
      this.ctx.override(this.xhrProto, "send", (_50ff65bd3389, _44aaace4f97d, [_2a158aef7229 = null]) => {
        let _d4a233116e5e = new _3c56f1b98100({
          body: _2a158aef7229
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("send", _d4a233116e5e), _d4a233116e5e.intercepted ? _d4a233116e5e.returnValue : _d4a233116e5e.target.call(_d4a233116e5e.that, _d4a233116e5e.data.body);
      });
    }
    overrideSetReqHeader() {
      this.ctx.override(this.xhrProto, "setRequestHeader", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (2 > _2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e, _4422b4c44b29] = _2a158aef7229, _3f203aa00e91 = new _3c56f1b98100({
          name: _d4a233116e5e,
          value: _4422b4c44b29
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("setReqHeader", _3f203aa00e91), _3f203aa00e91.intercepted ? _3f203aa00e91.returnValue : _3f203aa00e91.target.call(_3f203aa00e91.that, _3f203aa00e91.data.name, _3f203aa00e91.data.value);
      });
    }
    overrideGetResHeaders() {
      this.ctx.override(this.xhrProto, "getAllResponseHeaders", (_50ff65bd3389, _44aaace4f97d) => {
        let _2a158aef7229 = new _3c56f1b98100({
          value: _50ff65bd3389.call(_44aaace4f97d)
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("getAllResponseHeaders", _2a158aef7229), _2a158aef7229.intercepted ? _2a158aef7229.returnValue : _2a158aef7229.data.value;
      });
    }
    overrideGetResHeader() {
      this.ctx.override(this.xhrProto, "getResponseHeader", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (!_2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e] = _2a158aef7229, _4422b4c44b29 = new _3c56f1b98100({
          name: _d4a233116e5e,
          value: _50ff65bd3389.call(_44aaace4f97d, _d4a233116e5e)
        }, _50ff65bd3389, _44aaace4f97d);
        return _4422b4c44b29.intercepted ? _4422b4c44b29.returnValue : _4422b4c44b29.data.value;
      });
    }
  }, _65a9c065fd0c = _81ae833545a1;
  var _fd04027726f9 = m(_ca350ac15a97(), 1);
  var _e2bc9f5dc5f0 = class extends _fd04027726f9.default {
    constructor(_50ff65bd3389) {
      super(), this.ctx = _50ff65bd3389, this.window = _50ff65bd3389.window, this.EventSource = this.window.EventSource || {}, 
      this.esProto = this.EventSource.prototype || {}, this.url = _50ff65bd3389.nativeMethods.getOwnPropertyDescriptor(this.esProto, "url"), 
      this.CONNECTING = 0, this.OPEN = 1, this.CLOSED = 2;
    }
    overrideConstruct() {
      this.ctx.override(this.window, "EventSource", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (!_2a158aef7229.length) return new _50ff65bd3389(..._2a158aef7229);
        let [_d4a233116e5e, _4422b4c44b29 = {}] = _2a158aef7229, _3f203aa00e91 = new _3c56f1b98100({
          url: _d4a233116e5e,
          config: _4422b4c44b29
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("construct", _3f203aa00e91), _3f203aa00e91.intercepted ? _3f203aa00e91.returnValue : new _3f203aa00e91.target(_3f203aa00e91.data.url, _3f203aa00e91.data.config);
      }, !0), "EventSource" in this.window && (this.window.EventSource.CONNECTING = this.CONNECTING, 
      this.window.EventSource.OPEN = this.OPEN, this.window.EventSource.CLOSED = this.CLOSED);
    }
    overrideUrl() {
      this.ctx.overrideDescriptor(this.esProto, "url", {
        get: (_50ff65bd3389, _44aaace4f97d) => {
          let _2a158aef7229 = new _3c56f1b98100({
            value: _50ff65bd3389.call(_44aaace4f97d)
          }, _50ff65bd3389, _44aaace4f97d);
          return this.emit("url", _2a158aef7229), _2a158aef7229.data.value;
        }
      });
    }
  }, _1241aeb923e8 = _e2bc9f5dc5f0;
  var _8a7f68545990 = m(_ca350ac15a97(), 1);
  var _fadbc1a4b94c = class extends _8a7f68545990.default {
    constructor(_50ff65bd3389) {
      super(), this.ctx = _50ff65bd3389, this.window = this.ctx.window, this.History = this.window.History, 
      this.history = this.window.history, this.historyProto = this.History ? this.History.prototype : {}, 
      this.pushState = this.historyProto.pushState, this.replaceState = this.historyProto.replaceState, 
      this.go = this.historyProto.go, this.back = this.historyProto.back, this.forward = this.historyProto.forward;
    }
    override() {
      this.overridePushState(), this.overrideReplaceState(), this.overrideGo(), this.overrideForward(), 
      this.overrideBack();
    }
    overridePushState() {
      this.ctx.override(this.historyProto, "pushState", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (2 > _2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e, _4422b4c44b29, _3f203aa00e91 = ""] = _2a158aef7229, _ca350ac15a97 = new _3c56f1b98100({
          state: _d4a233116e5e,
          title: _4422b4c44b29,
          url: _3f203aa00e91
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("pushState", _ca350ac15a97), _ca350ac15a97.intercepted ? _ca350ac15a97.returnValue : _ca350ac15a97.target.call(_ca350ac15a97.that, _ca350ac15a97.data.state, _ca350ac15a97.data.title, _ca350ac15a97.data.url);
      });
    }
    overrideReplaceState() {
      this.ctx.override(this.historyProto, "replaceState", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (2 > _2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e, _4422b4c44b29, _3f203aa00e91 = ""] = _2a158aef7229, _ca350ac15a97 = new _3c56f1b98100({
          state: _d4a233116e5e,
          title: _4422b4c44b29,
          url: _3f203aa00e91
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("replaceState", _ca350ac15a97), _ca350ac15a97.intercepted ? _ca350ac15a97.returnValue : _ca350ac15a97.target.call(_ca350ac15a97.that, _ca350ac15a97.data.state, _ca350ac15a97.data.title, _ca350ac15a97.data.url);
      });
    }
    overrideGo() {
      this.ctx.override(this.historyProto, "go", (_50ff65bd3389, _44aaace4f97d, [_2a158aef7229]) => {
        let _d4a233116e5e = new _3c56f1b98100({
          delta: _2a158aef7229
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("go", _d4a233116e5e), _d4a233116e5e.intercepted ? _d4a233116e5e.returnValue : _d4a233116e5e.target.call(_d4a233116e5e.that, _d4a233116e5e.data.delta);
      });
    }
    overrideForward() {
      this.ctx.override(this.historyProto, "forward", (_50ff65bd3389, _44aaace4f97d) => {
        let _2a158aef7229 = new _3c56f1b98100(null, _50ff65bd3389, _44aaace4f97d);
        return this.emit("forward", _2a158aef7229), _2a158aef7229.intercepted ? _2a158aef7229.returnValue : _2a158aef7229.target.call(_2a158aef7229.that);
      });
    }
    overrideBack() {
      this.ctx.override(this.historyProto, "back", (_50ff65bd3389, _44aaace4f97d) => {
        let _2a158aef7229 = new _3c56f1b98100(null, _50ff65bd3389, _44aaace4f97d);
        return this.emit("back", _2a158aef7229), _2a158aef7229.intercepted ? _2a158aef7229.returnValue : _2a158aef7229.target.call(_2a158aef7229.that);
      });
    }
  }, _dfd5a125823d = _fadbc1a4b94c;
  var _28bb1da5b1e1 = m(_ca350ac15a97(), 1), _5428375012c3 = class extends _28bb1da5b1e1.default {
    constructor(_50ff65bd3389) {
      super(), this.ctx = _50ff65bd3389, this.window = _50ff65bd3389.window, this.location = this.window.location, 
      this.WorkerLocation = this.ctx.worker ? this.window.WorkerLocation : null, this.workerLocProto = this.WorkerLocation ? this.WorkerLocation.prototype : {}, 
      this.keys = [ "href", "protocol", "host", "hostname", "port", "pathname", "search", "hash", "origin" ], 
      this.HashChangeEvent = this.window.HashChangeEvent || null, this.href = this.WorkerLocation ? _50ff65bd3389.nativeMethods.getOwnPropertyDescriptor(this.workerLocProto, "href") : _50ff65bd3389.nativeMethods.getOwnPropertyDescriptor(this.location, "href");
    }
    overrideWorkerLocation(_50ff65bd3389) {
      if (!this.WorkerLocation) return !1;
      let _44aaace4f97d = this;
      for (let _2a158aef7229 of this.keys) this.ctx.overrideDescriptor(this.workerLocProto, _2a158aef7229, {
        get: () => _50ff65bd3389(_44aaace4f97d.href.get.call(this.location))[_2a158aef7229]
      });
      return !0;
    }
    emulate(_50ff65bd3389, _44aaace4f97d) {
      let _2a158aef7229 = {}, _d4a233116e5e = this;
      for (let _4422b4c44b29 of _d4a233116e5e.keys) this.ctx.nativeMethods.defineProperty(_2a158aef7229, _4422b4c44b29, {
        get() {
          return _50ff65bd3389(_d4a233116e5e.href.get.call(_d4a233116e5e.location))[_4422b4c44b29];
        },
        set: _4422b4c44b29 !== "origin" ? function(_50ff65bd3389) {
          switch (_4422b4c44b29) {
           case "href":
            _d4a233116e5e.location.href = _44aaace4f97d(_50ff65bd3389);
            break;

           case "hash":
            _d4a233116e5e.emit("hashchange", _2a158aef7229.href, _50ff65bd3389.trim().startsWith("#") ? new URL(_50ff65bd3389.trim(), _2a158aef7229.href).href : new URL("#" + _50ff65bd3389.trim(), _2a158aef7229.href).href, _d4a233116e5e);
            break;

           default:
            {
              let _3f203aa00e91 = new URL(_2a158aef7229.href);
              _3f203aa00e91[_4422b4c44b29] = _50ff65bd3389, _d4a233116e5e.location.href = _44aaace4f97d(_3f203aa00e91.href);
            }
            break;
          }
        } : void 0,
        configurable: !1,
        enumerable: !0
      });
      return "reload" in this.location && this.ctx.nativeMethods.defineProperty(_2a158aef7229, "reload", {
        value: this.ctx.wrap(this.location, "reload", (_50ff65bd3389, _44aaace4f97d) => _50ff65bd3389.call(_44aaace4f97d === _2a158aef7229 ? this.location : _44aaace4f97d)),
        writable: !1,
        enumerable: !0
      }), "replace" in this.location && this.ctx.nativeMethods.defineProperty(_2a158aef7229, "replace", {
        value: this.ctx.wrap(this.location, "assign", (_50ff65bd3389, _d4a233116e5e, _4422b4c44b29) => {
          (!_4422b4c44b29.length || _d4a233116e5e !== _2a158aef7229) && _50ff65bd3389.call(_d4a233116e5e), 
          _d4a233116e5e = this.location;
          let [_3f203aa00e91] = _4422b4c44b29, _ca350ac15a97 = new URL(_3f203aa00e91, _2a158aef7229.href);
          return _50ff65bd3389.call(_d4a233116e5e === _2a158aef7229 ? this.location : _d4a233116e5e, _44aaace4f97d(_ca350ac15a97.href));
        }),
        writable: !1,
        enumerable: !0
      }), "assign" in this.location && this.ctx.nativeMethods.defineProperty(_2a158aef7229, "assign", {
        value: this.ctx.wrap(this.location, "assign", (_50ff65bd3389, _d4a233116e5e, _4422b4c44b29) => {
          (!_4422b4c44b29.length || _d4a233116e5e !== _2a158aef7229) && _50ff65bd3389.call(_d4a233116e5e), 
          _d4a233116e5e = this.location;
          let [_3f203aa00e91] = _4422b4c44b29, _ca350ac15a97 = new URL(_3f203aa00e91, _2a158aef7229.href);
          return _50ff65bd3389.call(_d4a233116e5e === _2a158aef7229 ? this.location : _d4a233116e5e, _44aaace4f97d(_ca350ac15a97.href));
        }),
        writable: !1,
        enumerable: !0
      }), "ancestorOrigins" in this.location && this.ctx.nativeMethods.defineProperty(_2a158aef7229, "ancestorOrigins", {
        get() {
          let _50ff65bd3389 = [];
          return _d4a233116e5e.window.DOMStringList && _d4a233116e5e.ctx.nativeMethods.setPrototypeOf(_50ff65bd3389, _d4a233116e5e.window.DOMStringList.prototype), 
          _50ff65bd3389;
        },
        set: void 0,
        enumerable: !0
      }), this.ctx.nativeMethods.defineProperty(_2a158aef7229, "toString", {
        value: this.ctx.wrap(this.location, "toString", () => _2a158aef7229.href),
        enumerable: !0,
        writable: !1
      }), this.ctx.nativeMethods.defineProperty(_2a158aef7229, Symbol.toPrimitive, {
        value: () => _2a158aef7229.href,
        writable: !1,
        enumerable: !1
      }), this.ctx.window.Location && this.ctx.nativeMethods.setPrototypeOf(_2a158aef7229, this.ctx.window.Location.prototype), 
      _2a158aef7229;
    }
  }, _0754639574ff = _5428375012c3;
  var _3cb33cb5767c = m(_ca350ac15a97(), 1);
  var _0d6725afe433 = class extends _3cb33cb5767c.default {
    constructor(_50ff65bd3389) {
      super(), this.ctx = _50ff65bd3389, this.window = this.ctx.window, this.postMessage = this.window.postMessage, 
      this.MessageEvent = this.window.MessageEvent || {}, this.MessagePort = this.window.MessagePort || {}, 
      this.mpProto = this.MessagePort.prototype || {}, this.mpPostMessage = this.mpProto.postMessage, 
      this.messageProto = this.MessageEvent.prototype || {}, this.messageData = _50ff65bd3389.nativeMethods.getOwnPropertyDescriptor(this.messageProto, "data"), 
      this.messageOrigin = _50ff65bd3389.nativeMethods.getOwnPropertyDescriptor(this.messageProto, "origin");
    }
    overridePostMessage() {
      this.ctx.override(this.window, "postMessage", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (!_2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let _d4a233116e5e, _4422b4c44b29, _3f203aa00e91;
        this.ctx.worker ? [_d4a233116e5e, _3f203aa00e91 = []] = _2a158aef7229 : [_d4a233116e5e, _4422b4c44b29, _3f203aa00e91 = []] = _2a158aef7229;
        let _ca350ac15a97 = new _3c56f1b98100({
          message: _d4a233116e5e,
          origin: _4422b4c44b29,
          transfer: _3f203aa00e91,
          worker: this.ctx.worker
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("postMessage", _ca350ac15a97), _ca350ac15a97.intercepted ? _ca350ac15a97.returnValue : this.ctx.worker ? _ca350ac15a97.target.call(_ca350ac15a97.that, _ca350ac15a97.data.message, _ca350ac15a97.data.transfer) : _ca350ac15a97.target.call(_ca350ac15a97.that, _ca350ac15a97.data.message, _ca350ac15a97.data.origin, _ca350ac15a97.data.transfer);
      });
    }
    wrapPostMessage(_50ff65bd3389, _44aaace4f97d, _2a158aef7229 = !1) {
      return this.ctx.wrap(_50ff65bd3389, _44aaace4f97d, (_44aaace4f97d, _d4a233116e5e, _4422b4c44b29) => {
        if (this.ctx.worker ? !_4422b4c44b29.length : 2 > _4422b4c44b29) return _44aaace4f97d.apply(_d4a233116e5e, _4422b4c44b29);
        let _3f203aa00e91, _ca350ac15a97, _1b4c1b5cc899;
        _2a158aef7229 ? ([_3f203aa00e91, _1b4c1b5cc899 = []] = _4422b4c44b29, _ca350ac15a97 = null) : [_3f203aa00e91, _ca350ac15a97, _1b4c1b5cc899 = []] = _4422b4c44b29;
        let _b2cbd85a9207 = new _3c56f1b98100({
          message: _3f203aa00e91,
          origin: _ca350ac15a97,
          transfer: _1b4c1b5cc899,
          worker: this.ctx.worker
        }, _44aaace4f97d, _50ff65bd3389);
        return this.emit("postMessage", _b2cbd85a9207), _b2cbd85a9207.intercepted ? _b2cbd85a9207.returnValue : _2a158aef7229 ? _b2cbd85a9207.target.call(_b2cbd85a9207.that, _b2cbd85a9207.data.message, _b2cbd85a9207.data.transfer) : _b2cbd85a9207.target.call(_b2cbd85a9207.that, _b2cbd85a9207.data.message, _b2cbd85a9207.data.origin, _b2cbd85a9207.data.transfer);
      });
    }
    overrideMessageOrigin() {
      this.ctx.overrideDescriptor(this.messageProto, "origin", {
        get: (_50ff65bd3389, _44aaace4f97d) => {
          let _2a158aef7229 = new _3c56f1b98100({
            value: _50ff65bd3389.call(_44aaace4f97d)
          }, _50ff65bd3389, _44aaace4f97d);
          return this.emit("origin", _2a158aef7229), _2a158aef7229.intercepted ? _2a158aef7229.returnValue : _2a158aef7229.data.value;
        }
      });
    }
    overrideMessageData() {
      this.ctx.overrideDescriptor(this.messageProto, "data", {
        get: (_50ff65bd3389, _44aaace4f97d) => {
          let _2a158aef7229 = new _3c56f1b98100({
            value: _50ff65bd3389.call(_44aaace4f97d)
          }, _50ff65bd3389, _44aaace4f97d);
          return this.emit("data", _2a158aef7229), _2a158aef7229.intercepted ? _2a158aef7229.returnValue : _2a158aef7229.data.value;
        }
      });
    }
  }, _cfd1f5150d79 = _0d6725afe433;
  var _1b27921b73c3 = m(_ca350ac15a97(), 1);
  var _e1f8527da619 = class extends _1b27921b73c3.default {
    constructor(_50ff65bd3389) {
      super(), this.ctx = _50ff65bd3389, this.window = _50ff65bd3389.window, this.navigator = this.window.navigator, 
      this.Navigator = this.window.Navigator || {}, this.navProto = this.Navigator.prototype || {}, 
      this.sendBeacon = this.navProto.sendBeacon;
    }
    overrideSendBeacon() {
      this.ctx.override(this.navProto, "sendBeacon", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (!_2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e, _4422b4c44b29 = ""] = _2a158aef7229, _3f203aa00e91 = new _3c56f1b98100({
          url: _d4a233116e5e,
          data: _4422b4c44b29
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("sendBeacon", _3f203aa00e91), _3f203aa00e91.intercepted ? _3f203aa00e91.returnValue : _3f203aa00e91.target.call(_3f203aa00e91.that, _3f203aa00e91.data.url, _3f203aa00e91.data.data);
      });
    }
  }, _7a434e52b6e5 = _e1f8527da619;
  var _c7f1fda8c8a1 = m(_ca350ac15a97(), 1);
  var _072233853e9c = globalThis.fetch, _5b3722198dec = globalThis.SharedWorker, _444e23cb68b2 = globalThis.localStorage, _52e278a6d20c = globalThis.navigator.serviceWorker, _5ffe7b4caead = MessagePort.prototype.postMessage, _a37b5efc31b0 = {
    prototype: {
      send: WebSocket.prototype.send
    },
    CLOSED: WebSocket.CLOSED,
    CLOSING: WebSocket.CLOSING,
    CONNECTING: WebSocket.CONNECTING,
    OPEN: WebSocket.OPEN
  };
  async function W() {
    let _50ff65bd3389 = (await self.clients.matchAll({
      type: "window",
      includeUncontrolled: !0
    })).map(async _50ff65bd3389 => {
      let _44aaace4f97d = await function(_50ff65bd3389) {
        let _44aaace4f97d = new MessageChannel;
        return new Promise(_2a158aef7229 => {
          _50ff65bd3389.postMessage({
            type: "getPort",
            port: _44aaace4f97d.port2
          }, [ _44aaace4f97d.port2 ]), _44aaace4f97d.port1.onmessage = _50ff65bd3389 => {
            _2a158aef7229(_50ff65bd3389.data);
          };
        });
      }(_50ff65bd3389);
      return await Ie(_44aaace4f97d), _44aaace4f97d;
    }), _44aaace4f97d = Promise.race([ Promise.any(_50ff65bd3389), new Promise((_50ff65bd3389, _44aaace4f97d) => setTimeout(_44aaace4f97d, 1e3, new TypeError("timeout"))) ]);
    try {
      return await _44aaace4f97d;
    } catch (_50ff65bd3389) {
      if (_50ff65bd3389 instanceof AggregateError) throw console.error("bare-mux: failed to get a bare-mux SharedWorker MessagePort as all clients returned an invalid MessagePort."), 
      new Error("All clients returned an invalid MessagePort.");
      return console.warn("bare-mux: failed to get a bare-mux SharedWorker MessagePort within 1s, retrying"), 
      await W();
    }
  }
  function Ie(_50ff65bd3389) {
    let _44aaace4f97d = new MessageChannel, _2a158aef7229 = new Promise((_50ff65bd3389, _2a158aef7229) => {
      _44aaace4f97d.port1.onmessage = _44aaace4f97d => {
        _44aaace4f97d.data.type === "pong" && _50ff65bd3389();
      }, setTimeout(_2a158aef7229, 1500);
    });
    return _5ffe7b4caead.call(_50ff65bd3389, {
      message: {
        type: "ping"
      },
      port: _44aaace4f97d.port2
    }, [ _44aaace4f97d.port2 ]), _2a158aef7229;
  }
  function Ve(_50ff65bd3389, _44aaace4f97d) {
    let _2a158aef7229 = new _5b3722198dec(_50ff65bd3389, "ridgewood-stem-worker");
    return _44aaace4f97d && _52e278a6d20c.addEventListener("message", _44aaace4f97d => {
      if (_44aaace4f97d.data.type === "getPort" && _44aaace4f97d.data.port) {
        console.debug("bare-mux: recieved request for port from sw");
        let _2a158aef7229 = new _5b3722198dec(_50ff65bd3389, "ridgewood-stem-worker");
        _5ffe7b4caead.call(_44aaace4f97d.data.port, _2a158aef7229.port, [ _2a158aef7229.port ]);
      }
    }), _2a158aef7229.port;
  }
  var _7dcc83e040e7 = null;
  function lt() {
    if (_7dcc83e040e7 === null) {
      let _50ff65bd3389 = new MessageChannel, _44aaace4f97d = new ReadableStream, _2a158aef7229;
      try {
        _5ffe7b4caead.call(_50ff65bd3389.port1, _44aaace4f97d, [ _44aaace4f97d ]), _2a158aef7229 = !0;
      } catch {
        _2a158aef7229 = !1;
      }
      return _7dcc83e040e7 = _2a158aef7229, _2a158aef7229;
    }
    return _7dcc83e040e7;
  }
  var _1731497f2198 = class {
    constructor(_50ff65bd3389) {
      this.channel = new BroadcastChannel("bare-mux"), _50ff65bd3389 instanceof MessagePort || _50ff65bd3389 instanceof Promise ? this.port = _50ff65bd3389 : this.createChannel(_50ff65bd3389, !0);
    }
    createChannel(_50ff65bd3389, _44aaace4f97d) {
      if (self.clients) this.port = W(), this.channel.onmessage = _50ff65bd3389 => {
        _50ff65bd3389.data.type === "refreshPort" && (this.port = W());
      }; else if (_50ff65bd3389 && SharedWorker) {
        if (!_50ff65bd3389.startsWith("/") && !_50ff65bd3389.includes("://")) throw new Error("Invalid URL. Must be absolute or start at the root.");
        this.port = Ve(_50ff65bd3389, _44aaace4f97d), console.debug("bare-mux: setting localStorage bare-mux-path to", _50ff65bd3389), 
        _444e23cb68b2["bare-mux-path"] = _50ff65bd3389;
      } else {
        if (!SharedWorker) throw new Error("Unable to get a channel to the SharedWorker.");
        {
          let _50ff65bd3389 = _444e23cb68b2["bare-mux-path"];
          if (console.debug("bare-mux: got localStorage bare-mux-path:", _50ff65bd3389), !_50ff65bd3389) throw new Error("Unable to get bare-mux workerPath from localStorage.");
          this.port = Ve(_50ff65bd3389, _44aaace4f97d);
        }
      }
    }
    async sendMessage(_50ff65bd3389, _44aaace4f97d) {
      this.port instanceof Promise && (this.port = await this.port);
      try {
        await Ie(this.port);
      } catch {
        return console.warn("bare-mux: Failed to get a ping response from the worker within 1.5s. Assuming port is dead."), 
        this.createChannel(), await this.sendMessage(_50ff65bd3389, _44aaace4f97d);
      }
      let _2a158aef7229 = new MessageChannel, _d4a233116e5e = [ _2a158aef7229.port2, ..._44aaace4f97d || [] ], _4422b4c44b29 = new Promise((_50ff65bd3389, _44aaace4f97d) => {
        _2a158aef7229.port1.onmessage = _2a158aef7229 => {
          let _d4a233116e5e = _2a158aef7229.data;
          _d4a233116e5e.type === "error" ? _44aaace4f97d(_d4a233116e5e.error) : _50ff65bd3389(_d4a233116e5e);
        };
      });
      return _5ffe7b4caead.call(this.port, {
        message: _50ff65bd3389,
        port: _2a158aef7229.port2
      }, _d4a233116e5e), await _4422b4c44b29;
    }
  };
  function Ce(_50ff65bd3389, _44aaace4f97d, _2a158aef7229) {
    console.error(`error while processing '${_2a158aef7229}': `, _44aaace4f97d), _50ff65bd3389.postMessage({
      type: "error",
      error: _44aaace4f97d
    });
  }
  var _d922692404ab = class {
    constructor(_50ff65bd3389) {
      this.worker = new _1731497f2198(_50ff65bd3389);
    }
    async getTransport() {
      return (await this.worker.sendMessage({
        type: "get"
      })).name;
    }
    async setTransport(_50ff65bd3389, _44aaace4f97d, _2a158aef7229) {
      await this.setManualTransport(`\n\t\t\tconst { default: BareTransport } = await import("${_50ff65bd3389}");\n\t\t\treturn [BareTransport, "${_50ff65bd3389}"];\n\t\t`, _44aaace4f97d, _2a158aef7229);
    }
    async setManualTransport(_50ff65bd3389, _44aaace4f97d, _2a158aef7229) {
      if (_50ff65bd3389 === "bare-mux-remote") throw new Error("Use setRemoteTransport.");
      await this.worker.sendMessage({
        type: "set",
        client: {
          function: _50ff65bd3389,
          args: _44aaace4f97d
        }
      }, _2a158aef7229);
    }
    async setRemoteTransport(_50ff65bd3389, _44aaace4f97d) {
      let _2a158aef7229 = new MessageChannel;
      _2a158aef7229.port1.onmessage = async _44aaace4f97d => {
        let _2a158aef7229 = _44aaace4f97d.data.port, _d4a233116e5e = _44aaace4f97d.data.message;
        if (_d4a233116e5e.type === "fetch") try {
          _50ff65bd3389.ready || await _50ff65bd3389.init(), await async function(_50ff65bd3389, _44aaace4f97d, _2a158aef7229) {
            let _d4a233116e5e = await _2a158aef7229.request(new URL(_50ff65bd3389.fetch.remote), _50ff65bd3389.fetch.method, _50ff65bd3389.fetch.body, _50ff65bd3389.fetch.headers, null);
            if (!lt() && _d4a233116e5e.body instanceof ReadableStream) {
              let _50ff65bd3389 = new Response(_d4a233116e5e.body);
              _d4a233116e5e.body = await _50ff65bd3389.arrayBuffer();
            }
            _d4a233116e5e.body instanceof ReadableStream || _d4a233116e5e.body instanceof ArrayBuffer ? _5ffe7b4caead.call(_44aaace4f97d, {
              type: "fetch",
              fetch: _d4a233116e5e
            }, [ _d4a233116e5e.body ]) : _5ffe7b4caead.call(_44aaace4f97d, {
              type: "fetch",
              fetch: _d4a233116e5e
            });
          }(_d4a233116e5e, _2a158aef7229, _50ff65bd3389);
        } catch (_50ff65bd3389) {
          Ce(_2a158aef7229, _50ff65bd3389, "fetch");
        } else if (_d4a233116e5e.type === "websocket") try {
          _50ff65bd3389.ready || await _50ff65bd3389.init(), await async function(_50ff65bd3389, _44aaace4f97d, _2a158aef7229) {
            let [_d4a233116e5e, _4422b4c44b29] = _2a158aef7229.connect(new URL(_50ff65bd3389.websocket.url), _50ff65bd3389.websocket.protocols, _50ff65bd3389.websocket.requestHeaders, _44aaace4f97d => {
              _5ffe7b4caead.call(_50ff65bd3389.websocket.channel, {
                type: "open",
                args: [ _44aaace4f97d ]
              });
            }, _44aaace4f97d => {
              _44aaace4f97d instanceof ArrayBuffer ? _5ffe7b4caead.call(_50ff65bd3389.websocket.channel, {
                type: "message",
                args: [ _44aaace4f97d ]
              }, [ _44aaace4f97d ]) : _5ffe7b4caead.call(_50ff65bd3389.websocket.channel, {
                type: "message",
                args: [ _44aaace4f97d ]
              });
            }, (_44aaace4f97d, _2a158aef7229) => {
              _5ffe7b4caead.call(_50ff65bd3389.websocket.channel, {
                type: "close",
                args: [ _44aaace4f97d, _2a158aef7229 ]
              });
            }, _44aaace4f97d => {
              _5ffe7b4caead.call(_50ff65bd3389.websocket.channel, {
                type: "error",
                args: [ _44aaace4f97d ]
              });
            });
            _50ff65bd3389.websocket.channel.onmessage = _50ff65bd3389 => {
              _50ff65bd3389.data.type === "data" ? _d4a233116e5e(_50ff65bd3389.data.data) : _50ff65bd3389.data.type === "close" && _4422b4c44b29(_50ff65bd3389.data.closeCode, _50ff65bd3389.data.closeReason);
            }, _5ffe7b4caead.call(_44aaace4f97d, {
              type: "websocket"
            });
          }(_d4a233116e5e, _2a158aef7229, _50ff65bd3389);
        } catch (_50ff65bd3389) {
          Ce(_2a158aef7229, _50ff65bd3389, "websocket");
        }
      }, await this.worker.sendMessage({
        type: "set",
        client: {
          function: "bare-mux-remote",
          args: [ _2a158aef7229.port2, _44aaace4f97d ]
        }
      }, [ _2a158aef7229.port2 ]);
    }
    getInnerPort() {
      return this.worker.port;
    }
  };
  console.debug("bare-mux: running v2.1.6 (build 4b7607b)");
  var _cd045256f820 = class extends _c7f1fda8c8a1.default {
    constructor(_50ff65bd3389) {
      super(), this.ctx = _50ff65bd3389, this.window = _50ff65bd3389.window, this.Worker = this.window.Worker || {}, 
      this.Worklet = this.window.Worklet || {}, this.workletProto = this.Worklet.prototype || {}, 
      this.workerProto = this.Worker.prototype || {}, this.postMessage = this.workerProto.postMessage, 
      this.terminate = this.workerProto.terminate, this.addModule = this.workletProto.addModule;
    }
    overrideWorker() {
      this.ctx.override(this.window, "Worker", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (!_2a158aef7229.length) return new _50ff65bd3389(..._2a158aef7229);
        let [_d4a233116e5e, _4422b4c44b29 = {}] = _2a158aef7229, _3f203aa00e91 = new _3c56f1b98100({
          url: _d4a233116e5e,
          options: _4422b4c44b29
        }, _50ff65bd3389, _44aaace4f97d);
        if (this.emit("worker", _3f203aa00e91), _3f203aa00e91.intercepted) return _3f203aa00e91.returnValue;
        let _ca350ac15a97 = new _3f203aa00e91.target(_3f203aa00e91.data.url, _3f203aa00e91.data.options), _1b4c1b5cc899 = new _d922692404ab;
        return (async () => {
          let _50ff65bd3389 = await _1b4c1b5cc899.getInnerPort();
          _ca350ac15a97.postMessage({
            __uv$type: "baremuxinit",
            port: _50ff65bd3389
          }, [ _50ff65bd3389 ]);
        })(), _ca350ac15a97;
      }, !0);
    }
    overrideAddModule() {
      this.ctx.override(this.workletProto, "addModule", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (!_2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e, _4422b4c44b29 = {}] = _2a158aef7229, _3f203aa00e91 = new _3c56f1b98100({
          url: _d4a233116e5e,
          options: _4422b4c44b29
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("addModule", _3f203aa00e91), _3f203aa00e91.intercepted ? _3f203aa00e91.returnValue : _3f203aa00e91.target.call(_3f203aa00e91.that, _3f203aa00e91.data.url, _3f203aa00e91.data.options);
      });
    }
    overridePostMessage() {
      this.ctx.override(this.workerProto, "postMessage", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (!_2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e, _4422b4c44b29 = []] = _2a158aef7229, _3f203aa00e91 = new _3c56f1b98100({
          message: _d4a233116e5e,
          transfer: _4422b4c44b29
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("postMessage", _3f203aa00e91), _3f203aa00e91.intercepted ? _3f203aa00e91.returnValue : _3f203aa00e91.target.call(_3f203aa00e91.that, _3f203aa00e91.data.message, _3f203aa00e91.data.transfer);
      });
    }
    overrideImportScripts() {
      this.ctx.override(this.window, "importScripts", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (!_2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let _d4a233116e5e = new _3c56f1b98100({
          scripts: _2a158aef7229
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("importScripts", _d4a233116e5e), _d4a233116e5e.intercepted ? _d4a233116e5e.returnValue : _d4a233116e5e.target.apply(_d4a233116e5e.that, _d4a233116e5e.data.scripts);
      });
    }
  }, _2710dff6fbda = _cd045256f820;
  var _676e9bd03788 = m(_ca350ac15a97(), 1);
  var _de73863e612a = class extends _676e9bd03788.default {
    constructor(_50ff65bd3389) {
      super(), this.ctx = _50ff65bd3389, this.window = this.ctx.window, this.URL = this.window.URL || {}, 
      this.createObjectURL = this.URL.createObjectURL, this.revokeObjectURL = this.URL.revokeObjectURL;
    }
    overrideObjectURL() {
      this.ctx.override(this.URL, "createObjectURL", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (!_2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e] = _2a158aef7229, _4422b4c44b29 = new _3c56f1b98100({
          object: _d4a233116e5e
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("createObjectURL", _4422b4c44b29), _4422b4c44b29.intercepted ? _4422b4c44b29.returnValue : _4422b4c44b29.target.call(_4422b4c44b29.that, _4422b4c44b29.data.object);
      }), this.ctx.override(this.URL, "revokeObjectURL", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (!_2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e] = _2a158aef7229, _4422b4c44b29 = new _3c56f1b98100({
          url: _d4a233116e5e
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("revokeObjectURL", _4422b4c44b29), _4422b4c44b29.intercepted ? _4422b4c44b29.returnValue : _4422b4c44b29.target.call(_4422b4c44b29.that, _4422b4c44b29.data.url);
      });
    }
  }, _e581793735d1 = _de73863e612a;
  var _823cc6ff638f = m(_ca350ac15a97(), 1);
  var _7ec8a14490ea = m(_ca350ac15a97(), 1);
  var _22faec40c155 = class extends _7ec8a14490ea.default {
    constructor(_50ff65bd3389) {
      super(), this.ctx = _50ff65bd3389, this.window = _50ff65bd3389.window, this.localStorage = this.window.localStorage || null, 
      this.sessionStorage = this.window.sessionStorage || null, this.Storage = this.window.Storage || {}, 
      this.storeProto = this.Storage.prototype || {}, this.getItem = this.storeProto.getItem || null, 
      this.setItem = this.storeProto.setItem || null, this.removeItem = this.storeProto.removeItem || null, 
      this.clear = this.storeProto.clear || null, this.key = this.storeProto.key || null, 
      this.methods = [ "key", "getItem", "setItem", "removeItem", "clear" ], this.wrappers = new _50ff65bd3389.nativeMethods.Map;
    }
    overrideMethods() {
      this.ctx.override(this.storeProto, "getItem", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (!_2a158aef7229.length) return _50ff65bd3389.apply(this.wrappers.get(_44aaace4f97d) || _44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e] = _2a158aef7229, _4422b4c44b29 = new _3c56f1b98100({
          name: _d4a233116e5e
        }, _50ff65bd3389, this.wrappers.get(_44aaace4f97d) || _44aaace4f97d);
        return this.emit("getItem", _4422b4c44b29), _4422b4c44b29.intercepted ? _4422b4c44b29.returnValue : _4422b4c44b29.target.call(_4422b4c44b29.that, _4422b4c44b29.data.name);
      }), this.ctx.override(this.storeProto, "setItem", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (2 > _2a158aef7229.length) return _50ff65bd3389.apply(this.wrappers.get(_44aaace4f97d) || _44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e, _4422b4c44b29] = _2a158aef7229, _3f203aa00e91 = new _3c56f1b98100({
          name: _d4a233116e5e,
          value: _4422b4c44b29
        }, _50ff65bd3389, this.wrappers.get(_44aaace4f97d) || _44aaace4f97d);
        return this.emit("setItem", _3f203aa00e91), _3f203aa00e91.intercepted ? _3f203aa00e91.returnValue : _3f203aa00e91.target.call(_3f203aa00e91.that, _3f203aa00e91.data.name, _3f203aa00e91.data.value);
      }), this.ctx.override(this.storeProto, "removeItem", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (!_2a158aef7229.length) return _50ff65bd3389.apply(this.wrappers.get(_44aaace4f97d) || _44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e] = _2a158aef7229, _4422b4c44b29 = new _3c56f1b98100({
          name: _d4a233116e5e
        }, _50ff65bd3389, this.wrappers.get(_44aaace4f97d) || _44aaace4f97d);
        return this.emit("removeItem", _4422b4c44b29), _4422b4c44b29.intercepted ? _4422b4c44b29.returnValue : _4422b4c44b29.target.call(_4422b4c44b29.that, _4422b4c44b29.data.name);
      }), this.ctx.override(this.storeProto, "clear", (_50ff65bd3389, _44aaace4f97d) => {
        let _2a158aef7229 = new _3c56f1b98100(null, _50ff65bd3389, this.wrappers.get(_44aaace4f97d) || _44aaace4f97d);
        return this.emit("clear", _2a158aef7229), _2a158aef7229.intercepted ? _2a158aef7229.returnValue : _2a158aef7229.target.call(_2a158aef7229.that);
      }), this.ctx.override(this.storeProto, "key", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (!_2a158aef7229.length) return _50ff65bd3389.apply(this.wrappers.get(_44aaace4f97d) || _44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e] = _2a158aef7229, _4422b4c44b29 = new _3c56f1b98100({
          index: _d4a233116e5e
        }, _50ff65bd3389, this.wrappers.get(_44aaace4f97d) || _44aaace4f97d);
        return this.emit("key", _4422b4c44b29), _4422b4c44b29.intercepted ? _4422b4c44b29.returnValue : _4422b4c44b29.target.call(_4422b4c44b29.that, _4422b4c44b29.data.index);
      });
    }
    overrideLength() {
      this.ctx.overrideDescriptor(this.storeProto, "length", {
        get: (_50ff65bd3389, _44aaace4f97d) => {
          let _2a158aef7229 = new _3c56f1b98100({
            length: _50ff65bd3389.call(this.wrappers.get(_44aaace4f97d) || _44aaace4f97d)
          }, _50ff65bd3389, this.wrappers.get(_44aaace4f97d) || _44aaace4f97d);
          return this.emit("length", _2a158aef7229), _2a158aef7229.intercepted ? _2a158aef7229.returnValue : _2a158aef7229.data.length;
        }
      });
    }
    emulate(_50ff65bd3389, _44aaace4f97d = {}) {
      this.ctx.nativeMethods.setPrototypeOf(_44aaace4f97d, this.storeProto);
      let _2a158aef7229 = new this.ctx.window.Proxy(_44aaace4f97d, {
        get: (_44aaace4f97d, _2a158aef7229) => {
          if (_2a158aef7229 in this.storeProto || typeof _2a158aef7229 == "symbol") return _50ff65bd3389[_2a158aef7229];
          let _d4a233116e5e = new _3c56f1b98100({
            name: _2a158aef7229
          }, null, _50ff65bd3389);
          return this.emit("get", _d4a233116e5e), _d4a233116e5e.intercepted ? _d4a233116e5e.returnValue : _50ff65bd3389[_d4a233116e5e.data.name];
        },
        set: (_44aaace4f97d, _2a158aef7229, _d4a233116e5e) => {
          if (_2a158aef7229 in this.storeProto || typeof _2a158aef7229 == "symbol") return _50ff65bd3389[_2a158aef7229] = _d4a233116e5e;
          let _4422b4c44b29 = new _3c56f1b98100({
            name: _2a158aef7229,
            value: _d4a233116e5e
          }, null, _50ff65bd3389);
          return this.emit("set", _4422b4c44b29), _4422b4c44b29.intercepted ? _4422b4c44b29.returnValue : _50ff65bd3389[_4422b4c44b29.data.name] = _4422b4c44b29.data.value;
        },
        deleteProperty: (_44aaace4f97d, _2a158aef7229) => {
          if (typeof _2a158aef7229 == "symbol") return delete _50ff65bd3389[_2a158aef7229];
          let _d4a233116e5e = new _3c56f1b98100({
            name: _2a158aef7229
          }, null, _50ff65bd3389);
          return this.emit("delete", _d4a233116e5e), _d4a233116e5e.intercepted ? _d4a233116e5e.returnValue : delete _50ff65bd3389[_d4a233116e5e.data.name];
        }
      });
      return this.wrappers.set(_2a158aef7229, _50ff65bd3389), this.ctx.nativeMethods.setPrototypeOf(_2a158aef7229, this.storeProto), 
      _2a158aef7229;
    }
  }, _43564a056768 = _22faec40c155;
  var _189cb5449b3c = m(_ca350ac15a97(), 1);
  var _634c288594ed = class extends _189cb5449b3c.default {
    constructor(_50ff65bd3389) {
      super(), this.ctx = _50ff65bd3389, this.window = _50ff65bd3389.window, this.CSSStyleDeclaration = this.window.CSSStyleDeclaration || {}, 
      this.cssStyleProto = this.CSSStyleDeclaration.prototype || {}, this.getPropertyValue = this.cssStyleProto.getPropertyValue || null, 
      this.setProperty = this.cssStyleProto.setProperty || null, this.cssText - _50ff65bd3389.nativeMethods.getOwnPropertyDescriptors(this.cssStyleProto, "cssText"), 
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
      this.ctx.override(this.cssStyleProto, "getPropertyValue", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (!_2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e] = _2a158aef7229, _4422b4c44b29 = new _3c56f1b98100({
          property: _d4a233116e5e
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("getPropertyValue", _4422b4c44b29), _4422b4c44b29.intercepted ? _4422b4c44b29.returnValue : _4422b4c44b29.target.call(_4422b4c44b29.that, _4422b4c44b29.data.property);
      }), this.ctx.override(this.cssStyleProto, "setProperty", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (2 > _2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e, _4422b4c44b29] = _2a158aef7229, _3f203aa00e91 = new _3c56f1b98100({
          property: _d4a233116e5e,
          value: _4422b4c44b29
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("setProperty", _3f203aa00e91), _3f203aa00e91.intercepted ? _3f203aa00e91.returnValue : _3f203aa00e91.target.call(_3f203aa00e91.that, _3f203aa00e91.data.property, _3f203aa00e91.data.value);
      });
    }
    overrideCssText() {
      this.ctx.overrideDescriptor(this.cssStyleProto, "cssText", {
        get: (_50ff65bd3389, _44aaace4f97d) => {
          let _2a158aef7229 = new _3c56f1b98100({
            value: _50ff65bd3389.call(_44aaace4f97d)
          }, _50ff65bd3389, _44aaace4f97d);
          return this.emit("getCssText", _2a158aef7229), _2a158aef7229.intercepted ? _2a158aef7229.returnValue : _2a158aef7229.data.value;
        },
        set: (_50ff65bd3389, _44aaace4f97d, [_2a158aef7229]) => {
          let _d4a233116e5e = new _3c56f1b98100({
            value: _2a158aef7229
          }, _50ff65bd3389, _44aaace4f97d);
          return this.emit("setCssText", _d4a233116e5e), _d4a233116e5e.intercepted ? _d4a233116e5e.returnValue : _d4a233116e5e.target.call(_d4a233116e5e.that, _d4a233116e5e.data.value);
        }
      });
    }
  }, _76345af32a96 = _634c288594ed;
  var _ec8229819544 = m(_ca350ac15a97(), 1);
  var _054ad4f91639 = class extends _ec8229819544.default {
    constructor(_50ff65bd3389) {
      super(), this.ctx = _50ff65bd3389, this.window = this.ctx.window, this.IDBDatabase = this.window.IDBDatabase || {}, 
      this.idbDatabaseProto = this.IDBDatabase.prototype || {}, this.IDBFactory = this.window.IDBFactory || {}, 
      this.idbFactoryProto = this.IDBFactory.prototype || {}, this.open = this.idbFactoryProto.open;
    }
    overrideOpen() {
      this.ctx.override(this.IDBFactory.prototype, "open", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        if (!_2a158aef7229.length || !_2a158aef7229.length) return _50ff65bd3389.apply(_44aaace4f97d, _2a158aef7229);
        let [_d4a233116e5e, _4422b4c44b29] = _2a158aef7229, _3f203aa00e91 = new _3c56f1b98100({
          name: _d4a233116e5e,
          version: _4422b4c44b29
        }, _50ff65bd3389, _44aaace4f97d);
        return this.emit("idbFactoryOpen", _3f203aa00e91), _3f203aa00e91.intercepted ? _3f203aa00e91.returnValue : _3f203aa00e91.target.call(_3f203aa00e91.that, _3f203aa00e91.data.name, _3f203aa00e91.data.version);
      });
    }
    overrideName() {
      this.ctx.overrideDescriptor(this.idbDatabaseProto, "name", {
        get: (_50ff65bd3389, _44aaace4f97d) => {
          let _2a158aef7229 = new _3c56f1b98100({
            value: _50ff65bd3389.call(_44aaace4f97d)
          }, _50ff65bd3389, _44aaace4f97d);
          return this.emit("idbFactoryName", _2a158aef7229), _2a158aef7229.intercepted ? _2a158aef7229.returnValue : _2a158aef7229.data.value;
        }
      });
    }
  }, _365140bfa157 = _054ad4f91639;
  var _105e8e39f11e = m(_ca350ac15a97(), 1);
  var _7215b27a7310 = class extends _105e8e39f11e.default {
    constructor(_50ff65bd3389) {
      super(), this.ctx = _50ff65bd3389, this.window = _50ff65bd3389.window, this.WebSocket = this.window.WebSocket || {}, 
      this.wsProto = this.WebSocket.prototype, this.CONNECTING = WebSocket.CONNECTING, 
      this.OPEN = WebSocket.OPEN, this.CLOSING = WebSocket.CLOSING, this.CLOSED = WebSocket.CLOSED, 
      this.socketmap = new WeakMap;
    }
    overrideWebSocket(_50ff65bd3389) {
      this.ctx.override(this.window, "WebSocket", (_44aaace4f97d, _2a158aef7229, _d4a233116e5e) => {
        let _4422b4c44b29 = new EventTarget;
        Object.setPrototypeOf(_4422b4c44b29, this.WebSocket.prototype), _4422b4c44b29.constructor = this.WebSocket;
        let i = _50ff65bd3389 => new Proxy(_50ff65bd3389, {
          get(_50ff65bd3389, _44aaace4f97d) {
            return _44aaace4f97d === "isTrusted" ? !0 : Reflect.get(_50ff65bd3389, _44aaace4f97d);
          }
        }), _3f203aa00e91 = _50ff65bd3389.createWebSocket(_d4a233116e5e[0], _d4a233116e5e[1], null, {
          "User-Agent": navigator.userAgent,
          Origin: __uv.meta.url.origin
        }), _ca350ac15a97 = {
          extensions: "",
          protocol: "",
          url: _d4a233116e5e[0],
          binaryType: "blob",
          barews: _3f203aa00e91
        };
        function u(_50ff65bd3389) {
          _ca350ac15a97["on" + _50ff65bd3389.type]?.(i(_50ff65bd3389)), _4422b4c44b29.dispatchEvent(_50ff65bd3389);
        }
        return _3f203aa00e91.addEventListener("open", () => {
          u(new Event("open"));
        }), _3f203aa00e91.addEventListener("close", _50ff65bd3389 => {
          u(new CloseEvent("close", _50ff65bd3389));
        }), _3f203aa00e91.addEventListener("message", async _50ff65bd3389 => {
          let _44aaace4f97d = _50ff65bd3389.data;
          typeof _44aaace4f97d == "string" || ("byteLength" in _44aaace4f97d ? _ca350ac15a97.binaryType === "blob" ? _44aaace4f97d = new Blob([ _44aaace4f97d ]) : Object.setPrototypeOf(_44aaace4f97d, ArrayBuffer.prototype) : "arrayBuffer" in _44aaace4f97d && _ca350ac15a97.binaryType === "arraybuffer" && (_44aaace4f97d = await _44aaace4f97d.arrayBuffer(), 
          Object.setPrototypeOf(_44aaace4f97d, ArrayBuffer.prototype)));
          let _2a158aef7229 = new MessageEvent("message", {
            data: _44aaace4f97d,
            origin: _50ff65bd3389.origin,
            lastEventId: _50ff65bd3389.lastEventId,
            source: _50ff65bd3389.source,
            ports: _50ff65bd3389.ports
          });
          u(_2a158aef7229);
        }), _3f203aa00e91.addEventListener("error", () => {
          u(new Event("error"));
        }), this.socketmap.set(_4422b4c44b29, _ca350ac15a97), _4422b4c44b29;
      }, !0), this.ctx.overrideDescriptor(this.wsProto, "binaryType", {
        get: (_50ff65bd3389, _44aaace4f97d) => this.socketmap.get(_44aaace4f97d).binaryType,
        set: (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
          let _d4a233116e5e = this.socketmap.get(_44aaace4f97d);
          (_2a158aef7229[0] === "blob" || _2a158aef7229[0] === "arraybuffer") && (_d4a233116e5e.binaryType = _2a158aef7229[0]);
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "bufferedAmount", {
        get: (_50ff65bd3389, _44aaace4f97d) => 0
      }), this.ctx.overrideDescriptor(this.wsProto, "extensions", {
        get: (_50ff65bd3389, _44aaace4f97d) => this.socketmap.get(_44aaace4f97d).extensions
      }), this.ctx.overrideDescriptor(this.wsProto, "onclose", {
        get: (_50ff65bd3389, _44aaace4f97d) => this.socketmap.get(_44aaace4f97d).onclose,
        set: (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
          let _d4a233116e5e = this.socketmap.get(_44aaace4f97d);
          _d4a233116e5e.onclose = _2a158aef7229[0];
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "onerror", {
        get: (_50ff65bd3389, _44aaace4f97d) => this.socketmap.get(_44aaace4f97d).onerror,
        set: (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
          let _d4a233116e5e = this.socketmap.get(_44aaace4f97d);
          _d4a233116e5e.onerror = _2a158aef7229[0];
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "onmessage", {
        get: (_50ff65bd3389, _44aaace4f97d) => this.socketmap.get(_44aaace4f97d).onmessage,
        set: (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
          let _d4a233116e5e = this.socketmap.get(_44aaace4f97d);
          _d4a233116e5e.onmessage = _2a158aef7229[0];
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "onopen", {
        get: (_50ff65bd3389, _44aaace4f97d) => this.socketmap.get(_44aaace4f97d).onopen,
        set: (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
          let _d4a233116e5e = this.socketmap.get(_44aaace4f97d);
          _d4a233116e5e.onopen = _2a158aef7229[0];
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "url", {
        get: (_50ff65bd3389, _44aaace4f97d) => this.socketmap.get(_44aaace4f97d).url
      }), this.ctx.overrideDescriptor(this.wsProto, "protocol", {
        get: (_50ff65bd3389, _44aaace4f97d) => this.socketmap.get(_44aaace4f97d).protocol
      }), this.ctx.overrideDescriptor(this.wsProto, "readyState", {
        get: (_50ff65bd3389, _44aaace4f97d) => this.socketmap.get(_44aaace4f97d).barews.readyState
      }), this.ctx.override(this.wsProto, "send", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => this.socketmap.get(_44aaace4f97d).barews.send(_2a158aef7229[0]), !1), 
      this.ctx.override(this.wsProto, "close", (_50ff65bd3389, _44aaace4f97d, _2a158aef7229) => {
        let _d4a233116e5e = this.socketmap.get(_44aaace4f97d);
        return _2a158aef7229[0] === void 0 && (_2a158aef7229[0] = 1e3), _2a158aef7229[1] === void 0 && (_2a158aef7229[1] = ""), 
        _d4a233116e5e.barews.close(_2a158aef7229[0], _2a158aef7229[1]);
      }, !1);
    }
  }, _2265b657e24b = _7215b27a7310;
  var _5f3cc762b68a = class extends _823cc6ff638f.default {
    constructor(_50ff65bd3389 = self, _44aaace4f97d, _2a158aef7229 = !_50ff65bd3389.window) {
      super(), this.window = _50ff65bd3389, this.nativeMethods = {
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
      }, this.worker = _2a158aef7229, this.bareClient = _44aaace4f97d, this.fetch = new _00ce5c5a22fc(this), 
      this.xhr = new _65a9c065fd0c(this), this.idb = new _365140bfa157(this), this.history = new _dfd5a125823d(this), 
      this.element = new _dd73ade84b23(this), this.node = new _134488cb1940(this), this.document = new _c7f2e9df23c4(this), 
      this.function = new _7da7becbd304(this), this.object = new _4baf4b1f7d1f(this), 
      this.websocket = new _2265b657e24b(this), this.message = new _cfd1f5150d79(this), 
      this.navigator = new _7a434e52b6e5(this), this.eventSource = new _1241aeb923e8(this), 
      this.attribute = new _13a89e219524(this), this.url = new _e581793735d1(this), this.workers = new _2710dff6fbda(this), 
      this.location = new _0754639574ff(this), this.storage = new _43564a056768(this), 
      this.style = new _76345af32a96(this);
    }
    override(_50ff65bd3389, _44aaace4f97d, _2a158aef7229, _d4a233116e5e) {
      let _4422b4c44b29 = this.wrap(_50ff65bd3389, _44aaace4f97d, _2a158aef7229, _d4a233116e5e);
      return _50ff65bd3389[_44aaace4f97d] = _4422b4c44b29, _4422b4c44b29;
    }
    overrideDescriptor(_50ff65bd3389, _44aaace4f97d, _2a158aef7229 = {}) {
      let _d4a233116e5e = this.wrapDescriptor(_50ff65bd3389, _44aaace4f97d, _2a158aef7229);
      return _d4a233116e5e ? (this.nativeMethods.defineProperty(_50ff65bd3389, _44aaace4f97d, _d4a233116e5e), 
      _d4a233116e5e) : {};
    }
    wrap(_50ff65bd3389, _44aaace4f97d, _2a158aef7229, _d4a233116e5e = !1) {
      let _4422b4c44b29 = _50ff65bd3389[_44aaace4f97d];
      if (!_4422b4c44b29) return _4422b4c44b29;
      let _3f203aa00e91 = "prototype" in _4422b4c44b29 ? function() {
        return _2a158aef7229(_4422b4c44b29, this, [ ...arguments ]);
      } : {
        attach() {
          return _2a158aef7229(_4422b4c44b29, this, [ ...arguments ]);
        }
      }.attach;
      return _d4a233116e5e && (_3f203aa00e91.prototype = _4422b4c44b29.prototype, _3f203aa00e91.prototype.constructor = _3f203aa00e91), 
      this.emit("wrap", _4422b4c44b29, _3f203aa00e91, _d4a233116e5e), _3f203aa00e91;
    }
    wrapDescriptor(_50ff65bd3389, _44aaace4f97d, _2a158aef7229 = {}) {
      let _d4a233116e5e = this.nativeMethods.getOwnPropertyDescriptor(_50ff65bd3389, _44aaace4f97d);
      if (!_d4a233116e5e) return !1;
      for (let _50ff65bd3389 in _2a158aef7229) _50ff65bd3389 in _d4a233116e5e && (_50ff65bd3389 === "get" || _50ff65bd3389 === "set" ? _d4a233116e5e[_50ff65bd3389] = this.wrap(_d4a233116e5e, _50ff65bd3389, _2a158aef7229[_50ff65bd3389]) : _d4a233116e5e[_50ff65bd3389] = typeof _2a158aef7229[_50ff65bd3389] == "function" ? _2a158aef7229[_50ff65bd3389](_d4a233116e5e[_50ff65bd3389]) : _2a158aef7229[_50ff65bd3389]);
      return _d4a233116e5e;
    }
  }, _2918c1bca7f2 = _5f3cc762b68a;
  typeof self == "object" && (self.UVClient = _5f3cc762b68a);
})();
