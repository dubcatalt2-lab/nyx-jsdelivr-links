"use strict";

(() => {
  var _b1776b8882e0 = Object.create;
  var _4522fc282214 = Object.defineProperty;
  var _404f414d01f7 = Object.getOwnPropertyDescriptor;
  var _23ac0537eeb3 = Object.getOwnPropertyNames;
  var _06ee9fa6f608 = Object.getPrototypeOf, _b7f6c481f580 = Object.prototype.hasOwnProperty;
  var et = (_b1776b8882e0, _4522fc282214) => () => (_4522fc282214 || _b1776b8882e0((_4522fc282214 = {
    exports: {}
  }).exports, _4522fc282214), _4522fc282214.exports);
  var tt = (_b1776b8882e0, _06ee9fa6f608, _2590fc921eda, _4fbc0a4bdc7c) => {
    if (_06ee9fa6f608 && typeof _06ee9fa6f608 == "object" || typeof _06ee9fa6f608 == "function") for (let _8d74d4deb501 of _23ac0537eeb3(_06ee9fa6f608)) !_b7f6c481f580.call(_b1776b8882e0, _8d74d4deb501) && _8d74d4deb501 !== _2590fc921eda && _4522fc282214(_b1776b8882e0, _8d74d4deb501, {
      get: () => _06ee9fa6f608[_8d74d4deb501],
      enumerable: !(_4fbc0a4bdc7c = _404f414d01f7(_06ee9fa6f608, _8d74d4deb501)) || _4fbc0a4bdc7c.enumerable
    });
    return _b1776b8882e0;
  };
  var m = (_404f414d01f7, _23ac0537eeb3, _b7f6c481f580) => (_b7f6c481f580 = _404f414d01f7 != null ? _b1776b8882e0(_06ee9fa6f608(_404f414d01f7)) : {}, 
  tt(_23ac0537eeb3 || !_404f414d01f7 || !_404f414d01f7.__esModule ? _4522fc282214(_b7f6c481f580, "default", {
    value: _404f414d01f7,
    enumerable: !0
  }) : _b7f6c481f580, _404f414d01f7));
  var _2590fc921eda = et((_b1776b8882e0, _4522fc282214) => {
    "use strict";
    var _404f414d01f7 = typeof Reflect == "object" ? Reflect : null, _23ac0537eeb3 = _404f414d01f7 && typeof _404f414d01f7.apply == "function" ? _404f414d01f7.apply : function(_b1776b8882e0, _4522fc282214, _404f414d01f7) {
      return Function.prototype.apply.call(_b1776b8882e0, _4522fc282214, _404f414d01f7);
    }, _06ee9fa6f608;
    _404f414d01f7 && typeof _404f414d01f7.ownKeys == "function" ? _06ee9fa6f608 = _404f414d01f7.ownKeys : Object.getOwnPropertySymbols ? _06ee9fa6f608 = function(_b1776b8882e0) {
      return Object.getOwnPropertyNames(_b1776b8882e0).concat(Object.getOwnPropertySymbols(_b1776b8882e0));
    } : _06ee9fa6f608 = function(_b1776b8882e0) {
      return Object.getOwnPropertyNames(_b1776b8882e0);
    };
    function rt(_b1776b8882e0) {
      console && console.warn && console.warn(_b1776b8882e0);
    }
    var _b7f6c481f580 = Number.isNaN || function(_b1776b8882e0) {
      return _b1776b8882e0 !== _b1776b8882e0;
    };
    function d() {
      d.init.call(this);
    }
    _4522fc282214.exports = d;
    _4522fc282214.exports.once = st;
    d.EventEmitter = d;
    d.prototype._events = void 0;
    d.prototype._eventsCount = 0;
    d.prototype._maxListeners = void 0;
    var _2590fc921eda = 10;
    function P(_b1776b8882e0) {
      if (typeof _b1776b8882e0 != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof _b1776b8882e0);
    }
    Object.defineProperty(d, "defaultMaxListeners", {
      enumerable: !0,
      get: function() {
        return _2590fc921eda;
      },
      set: function(_b1776b8882e0) {
        if (typeof _b1776b8882e0 != "number" || _b1776b8882e0 < 0 || _b7f6c481f580(_b1776b8882e0)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + _b1776b8882e0 + ".");
        _2590fc921eda = _b1776b8882e0;
      }
    });
    d.init = function() {
      (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), 
      this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
    };
    d.prototype.setMaxListeners = function(_b1776b8882e0) {
      if (typeof _b1776b8882e0 != "number" || _b1776b8882e0 < 0 || _b7f6c481f580(_b1776b8882e0)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + _b1776b8882e0 + ".");
      return this._maxListeners = _b1776b8882e0, this;
    };
    function J(_b1776b8882e0) {
      return _b1776b8882e0._maxListeners === void 0 ? d.defaultMaxListeners : _b1776b8882e0._maxListeners;
    }
    d.prototype.getMaxListeners = function() {
      return J(this);
    };
    d.prototype.emit = function(_b1776b8882e0) {
      for (var _4522fc282214 = [], _404f414d01f7 = 1; _404f414d01f7 < arguments.length; _404f414d01f7++) _4522fc282214.push(arguments[_404f414d01f7]);
      var _06ee9fa6f608 = _b1776b8882e0 === "error", _b7f6c481f580 = this._events;
      if (_b7f6c481f580 !== void 0) _06ee9fa6f608 = _06ee9fa6f608 && _b7f6c481f580.error === void 0; else if (!_06ee9fa6f608) return !1;
      if (_06ee9fa6f608) {
        var _2590fc921eda;
        if (_4522fc282214.length > 0 && (_2590fc921eda = _4522fc282214[0]), _2590fc921eda instanceof Error) throw _2590fc921eda;
        var _4fbc0a4bdc7c = new Error("Unhandled error." + (_2590fc921eda ? " (" + _2590fc921eda.message + ")" : ""));
        throw _4fbc0a4bdc7c.context = _2590fc921eda, _4fbc0a4bdc7c;
      }
      var _8d74d4deb501 = _b7f6c481f580[_b1776b8882e0];
      if (_8d74d4deb501 === void 0) return !1;
      if (typeof _8d74d4deb501 == "function") _23ac0537eeb3(_8d74d4deb501, this, _4522fc282214); else for (var _f24be14b0412 = _8d74d4deb501.length, _8ee8042ab65b = re(_8d74d4deb501, _f24be14b0412), _404f414d01f7 = 0; _404f414d01f7 < _f24be14b0412; ++_404f414d01f7) _23ac0537eeb3(_8ee8042ab65b[_404f414d01f7], this, _4522fc282214);
      return !0;
    };
    function Y(_b1776b8882e0, _4522fc282214, _404f414d01f7, _23ac0537eeb3) {
      var _06ee9fa6f608, _b7f6c481f580, _2590fc921eda;
      if (P(_404f414d01f7), _b7f6c481f580 = _b1776b8882e0._events, _b7f6c481f580 === void 0 ? (_b7f6c481f580 = _b1776b8882e0._events = Object.create(null), 
      _b1776b8882e0._eventsCount = 0) : (_b7f6c481f580.newListener !== void 0 && (_b1776b8882e0.emit("newListener", _4522fc282214, _404f414d01f7.listener ? _404f414d01f7.listener : _404f414d01f7), 
      _b7f6c481f580 = _b1776b8882e0._events), _2590fc921eda = _b7f6c481f580[_4522fc282214]), 
      _2590fc921eda === void 0) _2590fc921eda = _b7f6c481f580[_4522fc282214] = _404f414d01f7, 
      ++_b1776b8882e0._eventsCount; else if (typeof _2590fc921eda == "function" ? _2590fc921eda = _b7f6c481f580[_4522fc282214] = _23ac0537eeb3 ? [ _404f414d01f7, _2590fc921eda ] : [ _2590fc921eda, _404f414d01f7 ] : _23ac0537eeb3 ? _2590fc921eda.unshift(_404f414d01f7) : _2590fc921eda.push(_404f414d01f7), 
      _06ee9fa6f608 = J(_b1776b8882e0), _06ee9fa6f608 > 0 && _2590fc921eda.length > _06ee9fa6f608 && !_2590fc921eda.warned) {
        _2590fc921eda.warned = !0;
        var _4fbc0a4bdc7c = new Error("Possible EventEmitter memory leak detected. " + _2590fc921eda.length + " " + String(_4522fc282214) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        _4fbc0a4bdc7c.name = "MaxListenersExceededWarning", _4fbc0a4bdc7c.emitter = _b1776b8882e0, 
        _4fbc0a4bdc7c.type = _4522fc282214, _4fbc0a4bdc7c.count = _2590fc921eda.length, 
        rt(_4fbc0a4bdc7c);
      }
      return _b1776b8882e0;
    }
    d.prototype.addListener = function(_b1776b8882e0, _4522fc282214) {
      return Y(this, _b1776b8882e0, _4522fc282214, !1);
    };
    d.prototype.on = d.prototype.addListener;
    d.prototype.prependListener = function(_b1776b8882e0, _4522fc282214) {
      return Y(this, _b1776b8882e0, _4522fc282214, !0);
    };
    function ot() {
      if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 
      arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
    }
    function Z(_b1776b8882e0, _4522fc282214, _404f414d01f7) {
      var _23ac0537eeb3 = {
        fired: !1,
        wrapFn: void 0,
        target: _b1776b8882e0,
        type: _4522fc282214,
        listener: _404f414d01f7
      }, _06ee9fa6f608 = ot.bind(_23ac0537eeb3);
      return _06ee9fa6f608.listener = _404f414d01f7, _23ac0537eeb3.wrapFn = _06ee9fa6f608, 
      _06ee9fa6f608;
    }
    d.prototype.once = function(_b1776b8882e0, _4522fc282214) {
      return P(_4522fc282214), this.on(_b1776b8882e0, Z(this, _b1776b8882e0, _4522fc282214)), 
      this;
    };
    d.prototype.prependOnceListener = function(_b1776b8882e0, _4522fc282214) {
      return P(_4522fc282214), this.prependListener(_b1776b8882e0, Z(this, _b1776b8882e0, _4522fc282214)), 
      this;
    };
    d.prototype.removeListener = function(_b1776b8882e0, _4522fc282214) {
      var _404f414d01f7, _23ac0537eeb3, _06ee9fa6f608, _b7f6c481f580, _2590fc921eda;
      if (P(_4522fc282214), _23ac0537eeb3 = this._events, _23ac0537eeb3 === void 0) return this;
      if (_404f414d01f7 = _23ac0537eeb3[_b1776b8882e0], _404f414d01f7 === void 0) return this;
      if (_404f414d01f7 === _4522fc282214 || _404f414d01f7.listener === _4522fc282214) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete _23ac0537eeb3[_b1776b8882e0], 
      _23ac0537eeb3.removeListener && this.emit("removeListener", _b1776b8882e0, _404f414d01f7.listener || _4522fc282214)); else if (typeof _404f414d01f7 != "function") {
        for (_06ee9fa6f608 = -1, _b7f6c481f580 = _404f414d01f7.length - 1; _b7f6c481f580 >= 0; _b7f6c481f580--) if (_404f414d01f7[_b7f6c481f580] === _4522fc282214 || _404f414d01f7[_b7f6c481f580].listener === _4522fc282214) {
          _2590fc921eda = _404f414d01f7[_b7f6c481f580].listener, _06ee9fa6f608 = _b7f6c481f580;
          break;
        }
        if (_06ee9fa6f608 < 0) return this;
        _06ee9fa6f608 === 0 ? _404f414d01f7.shift() : nt(_404f414d01f7, _06ee9fa6f608), 
        _404f414d01f7.length === 1 && (_23ac0537eeb3[_b1776b8882e0] = _404f414d01f7[0]), 
        _23ac0537eeb3.removeListener !== void 0 && this.emit("removeListener", _b1776b8882e0, _2590fc921eda || _4522fc282214);
      }
      return this;
    };
    d.prototype.off = d.prototype.removeListener;
    d.prototype.removeAllListeners = function(_b1776b8882e0) {
      var _4522fc282214, _404f414d01f7, _23ac0537eeb3;
      if (_404f414d01f7 = this._events, _404f414d01f7 === void 0) return this;
      if (_404f414d01f7.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), 
      this._eventsCount = 0) : _404f414d01f7[_b1776b8882e0] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete _404f414d01f7[_b1776b8882e0]), 
      this;
      if (arguments.length === 0) {
        var _06ee9fa6f608 = Object.keys(_404f414d01f7), _b7f6c481f580;
        for (_23ac0537eeb3 = 0; _23ac0537eeb3 < _06ee9fa6f608.length; ++_23ac0537eeb3) _b7f6c481f580 = _06ee9fa6f608[_23ac0537eeb3], 
        _b7f6c481f580 !== "removeListener" && this.removeAllListeners(_b7f6c481f580);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), 
        this._eventsCount = 0, this;
      }
      if (_4522fc282214 = _404f414d01f7[_b1776b8882e0], typeof _4522fc282214 == "function") this.removeListener(_b1776b8882e0, _4522fc282214); else if (_4522fc282214 !== void 0) for (_23ac0537eeb3 = _4522fc282214.length - 1; _23ac0537eeb3 >= 0; _23ac0537eeb3--) this.removeListener(_b1776b8882e0, _4522fc282214[_23ac0537eeb3]);
      return this;
    };
    function ee(_b1776b8882e0, _4522fc282214, _404f414d01f7) {
      var _23ac0537eeb3 = _b1776b8882e0._events;
      if (_23ac0537eeb3 === void 0) return [];
      var _06ee9fa6f608 = _23ac0537eeb3[_4522fc282214];
      return _06ee9fa6f608 === void 0 ? [] : typeof _06ee9fa6f608 == "function" ? _404f414d01f7 ? [ _06ee9fa6f608.listener || _06ee9fa6f608 ] : [ _06ee9fa6f608 ] : _404f414d01f7 ? it(_06ee9fa6f608) : re(_06ee9fa6f608, _06ee9fa6f608.length);
    }
    d.prototype.listeners = function(_b1776b8882e0) {
      return ee(this, _b1776b8882e0, !0);
    };
    d.prototype.rawListeners = function(_b1776b8882e0) {
      return ee(this, _b1776b8882e0, !1);
    };
    d.listenerCount = function(_b1776b8882e0, _4522fc282214) {
      return typeof _b1776b8882e0.listenerCount == "function" ? _b1776b8882e0.listenerCount(_4522fc282214) : te.call(_b1776b8882e0, _4522fc282214);
    };
    d.prototype.listenerCount = te;
    function te(_b1776b8882e0) {
      var _4522fc282214 = this._events;
      if (_4522fc282214 !== void 0) {
        var _404f414d01f7 = _4522fc282214[_b1776b8882e0];
        if (typeof _404f414d01f7 == "function") return 1;
        if (_404f414d01f7 !== void 0) return _404f414d01f7.length;
      }
      return 0;
    }
    d.prototype.eventNames = function() {
      return this._eventsCount > 0 ? _06ee9fa6f608(this._events) : [];
    };
    function re(_b1776b8882e0, _4522fc282214) {
      for (var _404f414d01f7 = new Array(_4522fc282214), _23ac0537eeb3 = 0; _23ac0537eeb3 < _4522fc282214; ++_23ac0537eeb3) _404f414d01f7[_23ac0537eeb3] = _b1776b8882e0[_23ac0537eeb3];
      return _404f414d01f7;
    }
    function nt(_b1776b8882e0, _4522fc282214) {
      for (;_4522fc282214 + 1 < _b1776b8882e0.length; _4522fc282214++) _b1776b8882e0[_4522fc282214] = _b1776b8882e0[_4522fc282214 + 1];
      _b1776b8882e0.pop();
    }
    function it(_b1776b8882e0) {
      for (var _4522fc282214 = new Array(_b1776b8882e0.length), _404f414d01f7 = 0; _404f414d01f7 < _4522fc282214.length; ++_404f414d01f7) _4522fc282214[_404f414d01f7] = _b1776b8882e0[_404f414d01f7].listener || _b1776b8882e0[_404f414d01f7];
      return _4522fc282214;
    }
    function st(_b1776b8882e0, _4522fc282214) {
      return new Promise(function(_404f414d01f7, _23ac0537eeb3) {
        function n(_404f414d01f7) {
          _b1776b8882e0.removeListener(_4522fc282214, o), _23ac0537eeb3(_404f414d01f7);
        }
        function o() {
          typeof _b1776b8882e0.removeListener == "function" && _b1776b8882e0.removeListener("error", n), 
          _404f414d01f7([].slice.call(arguments));
        }
        oe(_b1776b8882e0, _4522fc282214, o, {
          once: !0
        }), _4522fc282214 !== "error" && at(_b1776b8882e0, n, {
          once: !0
        });
      });
    }
    function at(_b1776b8882e0, _4522fc282214, _404f414d01f7) {
      typeof _b1776b8882e0.on == "function" && oe(_b1776b8882e0, "error", _4522fc282214, _404f414d01f7);
    }
    function oe(_b1776b8882e0, _4522fc282214, _404f414d01f7, _23ac0537eeb3) {
      if (typeof _b1776b8882e0.on == "function") _23ac0537eeb3.once ? _b1776b8882e0.once(_4522fc282214, _404f414d01f7) : _b1776b8882e0.on(_4522fc282214, _404f414d01f7); else if (typeof _b1776b8882e0.addEventListener == "function") _b1776b8882e0.addEventListener(_4522fc282214, function n(_06ee9fa6f608) {
        _23ac0537eeb3.once && _b1776b8882e0.removeEventListener(_4522fc282214, n), _404f414d01f7(_06ee9fa6f608);
      }); else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof _b1776b8882e0);
    }
  });
  var _4fbc0a4bdc7c = m(_2590fc921eda(), 1);
  var _8d74d4deb501 = class {
    #_b1776b8882e0;
    #_4522fc282214;
    constructor(_b1776b8882e0 = {}, _4522fc282214 = null, _404f414d01f7 = null) {
      this.#_b1776b8882e0 = !1, this.#_4522fc282214 = null, this.data = _b1776b8882e0, 
      this.target = _4522fc282214, this.that = _404f414d01f7;
    }
    get intercepted() {
      return this.#_b1776b8882e0;
    }
    get returnValue() {
      return this.#_4522fc282214;
    }
    respondWith(_b1776b8882e0) {
      this.#_4522fc282214 = _b1776b8882e0, this.#_b1776b8882e0 = !0;
    }
  }, _f24be14b0412 = _8d74d4deb501;
  var _8ee8042ab65b = class extends _4fbc0a4bdc7c.default {
    constructor(_b1776b8882e0) {
      super(), this.ctx = _b1776b8882e0, this.window = _b1776b8882e0.window, this.document = this.window.document, 
      this.Document = this.window.Document || {}, this.DOMParser = this.window.DOMParser || {}, 
      this.docProto = this.Document.prototype || {}, this.domProto = this.DOMParser.prototype || {}, 
      this.title = _b1776b8882e0.nativeMethods.getOwnPropertyDescriptor(this.docProto, "title"), 
      this.cookie = _b1776b8882e0.nativeMethods.getOwnPropertyDescriptor(this.docProto, "cookie"), 
      this.referrer = _b1776b8882e0.nativeMethods.getOwnPropertyDescriptor(this.docProto, "referrer"), 
      this.domain = _b1776b8882e0.nativeMethods.getOwnPropertyDescriptor(this.docProto, "domain"), 
      this.documentURI = _b1776b8882e0.nativeMethods.getOwnPropertyDescriptor(this.docProto, "documentURI"), 
      this.write = this.docProto.write, this.writeln = this.docProto.writeln, this.querySelector = this.docProto.querySelector, 
      this.querySelectorAll = this.docProto.querySelectorAll, this.parseFromString = this.domProto.parseFromString, 
      this.URL = _b1776b8882e0.nativeMethods.getOwnPropertyDescriptor(this.docProto, "URL");
    }
    overrideParseFromString() {
      this.ctx.override(this.domProto, "parseFromString", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (2 > _404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3, _06ee9fa6f608] = _404f414d01f7, _b7f6c481f580 = new _f24be14b0412({
          string: _23ac0537eeb3,
          type: _06ee9fa6f608
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("parseFromString", _b7f6c481f580), _b7f6c481f580.intercepted ? _b7f6c481f580.returnValue : _b7f6c481f580.target.call(_b7f6c481f580.that, _b7f6c481f580.data.string, _b7f6c481f580.data.type);
      });
    }
    overrideQuerySelector() {
      this.ctx.override(this.docProto, "querySelector", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (!_404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3] = _404f414d01f7, _06ee9fa6f608 = new _f24be14b0412({
          selectors: _23ac0537eeb3
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("querySelector", _06ee9fa6f608), _06ee9fa6f608.intercepted ? _06ee9fa6f608.returnValue : _06ee9fa6f608.target.call(_06ee9fa6f608.that, _06ee9fa6f608.data.selectors);
      });
    }
    overrideDomain() {
      this.ctx.overrideDescriptor(this.docProto, "domain", {
        get: (_b1776b8882e0, _4522fc282214) => {
          let _404f414d01f7 = new _f24be14b0412({
            value: _b1776b8882e0.call(_4522fc282214)
          }, _b1776b8882e0, _4522fc282214);
          return this.emit("getDomain", _404f414d01f7), _404f414d01f7.intercepted ? _404f414d01f7.returnValue : _404f414d01f7.data.value;
        },
        set: (_b1776b8882e0, _4522fc282214, [_404f414d01f7]) => {
          let _23ac0537eeb3 = new _f24be14b0412({
            value: _404f414d01f7
          }, _b1776b8882e0, _4522fc282214);
          return this.emit("setDomain", _23ac0537eeb3), _23ac0537eeb3.intercepted ? _23ac0537eeb3.returnValue : _23ac0537eeb3.target.call(_23ac0537eeb3.that, _23ac0537eeb3.data.value);
        }
      });
    }
    overrideReferrer() {
      this.ctx.overrideDescriptor(this.docProto, "referrer", {
        get: (_b1776b8882e0, _4522fc282214) => {
          let _404f414d01f7 = new _f24be14b0412({
            value: _b1776b8882e0.call(_4522fc282214)
          }, _b1776b8882e0, _4522fc282214);
          return this.emit("referrer", _404f414d01f7), _404f414d01f7.intercepted ? _404f414d01f7.returnValue : _404f414d01f7.data.value;
        }
      });
    }
    overrideCreateTreeWalker() {
      this.ctx.override(this.docProto, "createTreeWalker", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (!_404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3, _06ee9fa6f608 = 4294967295, _b7f6c481f580, _2590fc921eda] = _404f414d01f7, _4fbc0a4bdc7c = new _f24be14b0412({
          root: _23ac0537eeb3,
          show: _06ee9fa6f608,
          filter: _b7f6c481f580,
          expandEntityReferences: _2590fc921eda
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("createTreeWalker", _4fbc0a4bdc7c), _4fbc0a4bdc7c.intercepted ? _4fbc0a4bdc7c.returnValue : _4fbc0a4bdc7c.target.call(_4fbc0a4bdc7c.that, _4fbc0a4bdc7c.data.root, _4fbc0a4bdc7c.data.show, _4fbc0a4bdc7c.data.filter, _4fbc0a4bdc7c.data.expandEntityReferences);
      });
    }
    overrideWrite() {
      this.ctx.override(this.docProto, "write", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (!_404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [..._23ac0537eeb3] = _404f414d01f7, _06ee9fa6f608 = new _f24be14b0412({
          html: _23ac0537eeb3
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("write", _06ee9fa6f608), _06ee9fa6f608.intercepted ? _06ee9fa6f608.returnValue : _06ee9fa6f608.target.apply(_06ee9fa6f608.that, _06ee9fa6f608.data.html);
      }), this.ctx.override(this.docProto, "writeln", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (!_404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [..._23ac0537eeb3] = _404f414d01f7, _06ee9fa6f608 = new _f24be14b0412({
          html: _23ac0537eeb3
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("writeln", _06ee9fa6f608), _06ee9fa6f608.intercepted ? _06ee9fa6f608.returnValue : _06ee9fa6f608.target.apply(_06ee9fa6f608.that, _06ee9fa6f608.data.html);
      });
    }
    overrideDocumentURI() {
      this.ctx.overrideDescriptor(this.docProto, "documentURI", {
        get: (_b1776b8882e0, _4522fc282214) => {
          let _404f414d01f7 = new _f24be14b0412({
            value: _b1776b8882e0.call(_4522fc282214)
          }, _b1776b8882e0, _4522fc282214);
          return this.emit("documentURI", _404f414d01f7), _404f414d01f7.intercepted ? _404f414d01f7.returnValue : _404f414d01f7.data.value;
        }
      });
    }
    overrideURL() {
      this.ctx.overrideDescriptor(this.docProto, "URL", {
        get: (_b1776b8882e0, _4522fc282214) => {
          let _404f414d01f7 = new _f24be14b0412({
            value: _b1776b8882e0.call(_4522fc282214)
          }, _b1776b8882e0, _4522fc282214);
          return this.emit("url", _404f414d01f7), _404f414d01f7.intercepted ? _404f414d01f7.returnValue : _404f414d01f7.data.value;
        }
      });
    }
    overrideCookie() {
      this.ctx.overrideDescriptor(this.docProto, "cookie", {
        get: (_b1776b8882e0, _4522fc282214) => {
          let _404f414d01f7 = new _f24be14b0412({
            value: _b1776b8882e0.call(_4522fc282214)
          }, _b1776b8882e0, _4522fc282214);
          return this.emit("getCookie", _404f414d01f7), _404f414d01f7.intercepted ? _404f414d01f7.returnValue : _404f414d01f7.data.value;
        },
        set: (_b1776b8882e0, _4522fc282214, [_404f414d01f7]) => {
          let _23ac0537eeb3 = new _f24be14b0412({
            value: _404f414d01f7
          }, _b1776b8882e0, _4522fc282214);
          return this.emit("setCookie", _23ac0537eeb3), _23ac0537eeb3.intercepted ? _23ac0537eeb3.returnValue : _23ac0537eeb3.target.call(_23ac0537eeb3.that, _23ac0537eeb3.data.value);
        }
      });
    }
    overrideTitle() {
      this.ctx.overrideDescriptor(this.docProto, "title", {
        get: (_b1776b8882e0, _4522fc282214) => {
          let _404f414d01f7 = new _f24be14b0412({
            value: _b1776b8882e0.call(_4522fc282214)
          }, _b1776b8882e0, _4522fc282214);
          return this.emit("getTitle", _404f414d01f7), _404f414d01f7.intercepted ? _404f414d01f7.returnValue : _404f414d01f7.data.value;
        },
        set: (_b1776b8882e0, _4522fc282214, [_404f414d01f7]) => {
          let _23ac0537eeb3 = new _f24be14b0412({
            value: _404f414d01f7
          }, _b1776b8882e0, _4522fc282214);
          return this.emit("setTitle", _23ac0537eeb3), _23ac0537eeb3.intercepted ? _23ac0537eeb3.returnValue : _23ac0537eeb3.target.call(_23ac0537eeb3.that, _23ac0537eeb3.data.value);
        }
      });
    }
  }, _db81e7219598 = _8ee8042ab65b;
  var _ec9323e2aadb = m(_2590fc921eda(), 1);
  var _50cee8b4a38a = class extends _ec9323e2aadb.default {
    constructor(_b1776b8882e0) {
      super(), this.ctx = _b1776b8882e0, this.window = _b1776b8882e0.window, this.Audio = this.window.Audio, 
      this.Element = this.window.Element, this.elemProto = this.Element ? this.Element.prototype : {}, 
      this.innerHTML = _b1776b8882e0.nativeMethods.getOwnPropertyDescriptor(this.elemProto, "innerHTML"), 
      this.outerHTML = _b1776b8882e0.nativeMethods.getOwnPropertyDescriptor(this.elemProto, "outerHTML"), 
      this.setAttribute = this.elemProto.setAttribute, this.getAttribute = this.elemProto.getAttribute, 
      this.removeAttribute = this.elemProto.removeAttribute, this.hasAttribute = this.elemProto.hasAttribute, 
      this.querySelector = this.elemProto.querySelector, this.querySelectorAll = this.elemProto.querySelectorAll, 
      this.insertAdjacentHTML = this.elemProto.insertAdjacentHTML, this.insertAdjacentText = this.elemProto.insertAdjacentText;
    }
    overrideQuerySelector() {
      this.ctx.override(this.elemProto, "querySelector", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (!_404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3] = _404f414d01f7, _06ee9fa6f608 = new _f24be14b0412({
          selectors: _23ac0537eeb3
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("querySelector", _06ee9fa6f608), _06ee9fa6f608.intercepted ? _06ee9fa6f608.returnValue : _06ee9fa6f608.target.call(_06ee9fa6f608.that, _06ee9fa6f608.data.selectors);
      });
    }
    overrideAttribute() {
      this.ctx.override(this.elemProto, "getAttribute", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (!_404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3] = _404f414d01f7, _06ee9fa6f608 = new _f24be14b0412({
          name: _23ac0537eeb3
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("getAttribute", _06ee9fa6f608), _06ee9fa6f608.intercepted ? _06ee9fa6f608.returnValue : _06ee9fa6f608.target.call(_06ee9fa6f608.that, _06ee9fa6f608.data.name);
      }), this.ctx.override(this.elemProto, "setAttribute", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (2 > _404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3, _06ee9fa6f608] = _404f414d01f7, _b7f6c481f580 = new _f24be14b0412({
          name: _23ac0537eeb3,
          value: _06ee9fa6f608
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("setAttribute", _b7f6c481f580), _b7f6c481f580.intercepted ? _b7f6c481f580.returnValue : _b7f6c481f580.target.call(_b7f6c481f580.that, _b7f6c481f580.data.name, _b7f6c481f580.data.value);
      }), this.ctx.override(this.elemProto, "hasAttribute", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (!_404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3] = _404f414d01f7, _06ee9fa6f608 = new _f24be14b0412({
          name: _23ac0537eeb3
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("hasAttribute", _06ee9fa6f608), _06ee9fa6f608.intercepted ? _06ee9fa6f608.returnValue : _06ee9fa6f608.target.call(_06ee9fa6f608.that, _06ee9fa6f608.data.name);
      }), this.ctx.override(this.elemProto, "removeAttribute", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (!_404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3] = _404f414d01f7, _06ee9fa6f608 = new _f24be14b0412({
          name: _23ac0537eeb3
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("removeAttribute", _06ee9fa6f608), _06ee9fa6f608.intercepted ? _06ee9fa6f608.returnValue : _06ee9fa6f608.target.call(_06ee9fa6f608.that, _06ee9fa6f608.data.name);
      });
    }
    overrideAudio() {
      this.ctx.override(this.window, "Audio", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (!_404f414d01f7.length) return new _b1776b8882e0(..._404f414d01f7);
        let [_23ac0537eeb3] = _404f414d01f7, _06ee9fa6f608 = new _f24be14b0412({
          url: _23ac0537eeb3
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("audio", _06ee9fa6f608), _06ee9fa6f608.intercepted ? _06ee9fa6f608.returnValue : new _06ee9fa6f608.target(_06ee9fa6f608.data.url);
      }, !0);
    }
    overrideHtml() {
      this.hookProperty(this.Element, "innerHTML", {
        get: (_b1776b8882e0, _4522fc282214) => {
          let _404f414d01f7 = new _f24be14b0412({
            value: _b1776b8882e0.call(_4522fc282214)
          }, _b1776b8882e0, _4522fc282214);
          return this.emit("getInnerHTML", _404f414d01f7), _404f414d01f7.intercepted ? _404f414d01f7.returnValue : _404f414d01f7.data.value;
        },
        set: (_b1776b8882e0, _4522fc282214, [_404f414d01f7]) => {
          let _23ac0537eeb3 = new _f24be14b0412({
            value: _404f414d01f7
          }, _b1776b8882e0, _4522fc282214);
          if (this.emit("setInnerHTML", _23ac0537eeb3), _23ac0537eeb3.intercepted) return _23ac0537eeb3.returnValue;
          _b1776b8882e0.call(_4522fc282214, _23ac0537eeb3.data.value);
        }
      }), this.hookProperty(this.Element, "outerHTML", {
        get: (_b1776b8882e0, _4522fc282214) => {
          let _404f414d01f7 = new _f24be14b0412({
            value: _b1776b8882e0.call(_4522fc282214)
          }, _b1776b8882e0, _4522fc282214);
          return this.emit("getOuterHTML", _404f414d01f7), _404f414d01f7.intercepted ? _404f414d01f7.returnValue : _404f414d01f7.data.value;
        },
        set: (_b1776b8882e0, _4522fc282214, [_404f414d01f7]) => {
          let _23ac0537eeb3 = new _f24be14b0412({
            value: _404f414d01f7
          }, _b1776b8882e0, _4522fc282214);
          if (this.emit("setOuterHTML", _23ac0537eeb3), _23ac0537eeb3.intercepted) return _23ac0537eeb3.returnValue;
          _b1776b8882e0.call(_4522fc282214, _23ac0537eeb3.data.value);
        }
      });
    }
    overrideInsertAdjacentHTML() {
      this.ctx.override(this.elemProto, "insertAdjacentHTML", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (2 > _404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3, _06ee9fa6f608] = _404f414d01f7, _b7f6c481f580 = new _f24be14b0412({
          position: _23ac0537eeb3,
          html: _06ee9fa6f608
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("insertAdjacentHTML", _b7f6c481f580), _b7f6c481f580.intercepted ? _b7f6c481f580.returnValue : _b7f6c481f580.target.call(_b7f6c481f580.that, _b7f6c481f580.data.position, _b7f6c481f580.data.html);
      });
    }
    overrideInsertAdjacentText() {
      this.ctx.override(this.elemProto, "insertAdjacentText", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (2 > _404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3, _06ee9fa6f608] = _404f414d01f7, _b7f6c481f580 = new _f24be14b0412({
          position: _23ac0537eeb3,
          text: _06ee9fa6f608
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("insertAdjacentText", _b7f6c481f580), _b7f6c481f580.intercepted ? _b7f6c481f580.returnValue : _b7f6c481f580.target.call(_b7f6c481f580.that, _b7f6c481f580.data.position, _b7f6c481f580.data.text);
      });
    }
    hookProperty(_b1776b8882e0, _4522fc282214, _404f414d01f7) {
      if (!_b1776b8882e0) return !1;
      if (this.ctx.nativeMethods.isArray(_b1776b8882e0)) {
        for (let _23ac0537eeb3 of _b1776b8882e0) this.hookProperty(_23ac0537eeb3, _4522fc282214, _404f414d01f7);
        return !0;
      }
      let _23ac0537eeb3 = _b1776b8882e0.prototype;
      return this.ctx.overrideDescriptor(_23ac0537eeb3, _4522fc282214, _404f414d01f7), 
      !0;
    }
  }, _09ee667fb9e7 = _50cee8b4a38a;
  var _05fbbe38b651 = m(_2590fc921eda(), 1);
  var _c5d514de2b67 = class extends _05fbbe38b651.default {
    constructor(_b1776b8882e0) {
      super(), this.ctx = _b1776b8882e0, this.window = _b1776b8882e0.window, this.Node = _b1776b8882e0.window.Node || {}, 
      this.nodeProto = this.Node.prototype || {}, this.compareDocumentPosition = this.nodeProto.compareDocumentPosition, 
      this.contains = this.nodeProto.contains, this.insertBefore = this.nodeProto.insertBefore, 
      this.replaceChild = this.nodeProto.replaceChild, this.append = this.nodeProto.append, 
      this.appendChild = this.nodeProto.appendChild, this.removeChild = this.nodeProto.removeChild, 
      this.textContent = _b1776b8882e0.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "textContent"), 
      this.parentNode = _b1776b8882e0.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "parentNode"), 
      this.parentElement = _b1776b8882e0.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "parentElement"), 
      this.childNodes = _b1776b8882e0.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "childNodes"), 
      this.baseURI = _b1776b8882e0.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "baseURI"), 
      this.previousSibling = _b1776b8882e0.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "previousSibling"), 
      this.ownerDocument = _b1776b8882e0.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "ownerDocument");
    }
    overrideTextContent() {
      this.ctx.overrideDescriptor(this.nodeProto, "textContent", {
        get: (_b1776b8882e0, _4522fc282214) => {
          let _404f414d01f7 = new _f24be14b0412({
            value: _b1776b8882e0.call(_4522fc282214)
          }, _b1776b8882e0, _4522fc282214);
          return this.emit("getTextContent", _404f414d01f7), _404f414d01f7.intercepted ? _404f414d01f7.returnValue : _404f414d01f7.data.value;
        },
        set: (_b1776b8882e0, _4522fc282214, [_404f414d01f7]) => {
          let _23ac0537eeb3 = new _f24be14b0412({
            value: _404f414d01f7
          }, _b1776b8882e0, _4522fc282214);
          if (this.emit("setTextContent", _23ac0537eeb3), _23ac0537eeb3.intercepted) return _23ac0537eeb3.returnValue;
          _b1776b8882e0.call(_4522fc282214, _23ac0537eeb3.data.value);
        }
      });
    }
    overrideAppend() {
      this.ctx.override(this.nodeProto, "append", (_b1776b8882e0, _4522fc282214, [..._404f414d01f7]) => {
        let _23ac0537eeb3 = new _f24be14b0412({
          nodes: _404f414d01f7
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("append", _23ac0537eeb3), _23ac0537eeb3.intercepted ? _23ac0537eeb3.returnValue : _23ac0537eeb3.target.call(_23ac0537eeb3.that, _23ac0537eeb3.data.nodes);
      }), this.ctx.override(this.nodeProto, "appendChild", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (!_404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3] = _404f414d01f7, _06ee9fa6f608 = new _f24be14b0412({
          node: _23ac0537eeb3
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("appendChild", _06ee9fa6f608), _06ee9fa6f608.intercepted ? _06ee9fa6f608.returnValue : _06ee9fa6f608.target.call(_06ee9fa6f608.that, _06ee9fa6f608.data.node);
      });
    }
    overrideBaseURI() {
      this.ctx.overrideDescriptor(this.nodeProto, "baseURI", {
        get: (_b1776b8882e0, _4522fc282214) => {
          let _404f414d01f7 = new _f24be14b0412({
            value: _b1776b8882e0.call(_4522fc282214)
          }, _b1776b8882e0, _4522fc282214);
          return this.emit("baseURI", _404f414d01f7), _404f414d01f7.intercepted ? _404f414d01f7.returnValue : _404f414d01f7.data.value;
        }
      });
    }
    overrideParent() {
      this.ctx.overrideDescriptor(this.nodeProto, "parentNode", {
        get: (_b1776b8882e0, _4522fc282214) => {
          let _404f414d01f7 = new _f24be14b0412({
            node: _b1776b8882e0.call(_4522fc282214)
          }, _b1776b8882e0, _4522fc282214);
          return this.emit("parentNode", _404f414d01f7), _404f414d01f7.intercepted ? _404f414d01f7.returnValue : _404f414d01f7.data.node;
        }
      }), this.ctx.overrideDescriptor(this.nodeProto, "parentElement", {
        get: (_b1776b8882e0, _4522fc282214) => {
          let _404f414d01f7 = new _f24be14b0412({
            element: _b1776b8882e0.call(_4522fc282214)
          }, _b1776b8882e0, _4522fc282214);
          return this.emit("parentElement", _404f414d01f7), _404f414d01f7.intercepted ? _404f414d01f7.returnValue : _404f414d01f7.data.node;
        }
      });
    }
    overrideOwnerDocument() {
      this.ctx.overrideDescriptor(this.nodeProto, "ownerDocument", {
        get: (_b1776b8882e0, _4522fc282214) => {
          let _404f414d01f7 = new _f24be14b0412({
            document: _b1776b8882e0.call(_4522fc282214)
          }, _b1776b8882e0, _4522fc282214);
          return this.emit("ownerDocument", _404f414d01f7), _404f414d01f7.intercepted ? _404f414d01f7.returnValue : _404f414d01f7.data.document;
        }
      });
    }
    overrideCompareDocumentPosit1ion() {
      this.ctx.override(this.nodeProto, "compareDocumentPosition", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (!_404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3] = _404f414d01f7, _06ee9fa6f608 = new _f24be14b0412({
          node: _23ac0537eeb3
        }, _b1776b8882e0, _4522fc282214);
        return _06ee9fa6f608.intercepted ? _06ee9fa6f608.returnValue : _06ee9fa6f608.target.call(_06ee9fa6f608.that, _06ee9fa6f608.data.node);
      });
    }
    overrideChildMethods() {
      this.ctx.override(this.nodeProto, "removeChild");
    }
  }, _161617b8b022 = _c5d514de2b67;
  var _7468d49e5a56 = m(_2590fc921eda(), 1);
  var _2a62e947ed1a = class extends _7468d49e5a56.default {
    constructor(_b1776b8882e0) {
      super(), this.ctx = _b1776b8882e0, this.window = _b1776b8882e0.window, this.Attr = this.window.Attr || {}, 
      this.attrProto = this.Attr.prototype || {}, this.value = _b1776b8882e0.nativeMethods.getOwnPropertyDescriptor(this.attrProto, "value"), 
      this.name = _b1776b8882e0.nativeMethods.getOwnPropertyDescriptor(this.attrProto, "name"), 
      this.getNamedItem = this.attrProto.getNamedItem || null, this.setNamedItem = this.attrProto.setNamedItem || null, 
      this.removeNamedItem = this.attrProto.removeNamedItem || null, this.getNamedItemNS = this.attrProto.getNamedItemNS || null, 
      this.setNamedItemNS = this.attrProto.setNamedItemNS || null, this.removeNamedItemNS = this.attrProto.removeNamedItemNS || null, 
      this.item = this.attrProto.item || null;
    }
    overrideNameValue() {
      this.ctx.overrideDescriptor(this.attrProto, "name", {
        get: (_b1776b8882e0, _4522fc282214) => {
          let _404f414d01f7 = new _f24be14b0412({
            value: _b1776b8882e0.call(_4522fc282214)
          }, _b1776b8882e0, _4522fc282214);
          return this.emit("name", _404f414d01f7), _404f414d01f7.intercepted ? _404f414d01f7.returnValue : _404f414d01f7.data.value;
        }
      }), this.ctx.overrideDescriptor(this.attrProto, "value", {
        get: (_b1776b8882e0, _4522fc282214) => {
          let _404f414d01f7 = new _f24be14b0412({
            name: this.name.get.call(_4522fc282214),
            value: _b1776b8882e0.call(_4522fc282214)
          }, _b1776b8882e0, _4522fc282214);
          return this.emit("getValue", _404f414d01f7), _404f414d01f7.intercepted ? _404f414d01f7.returnValue : _404f414d01f7.data.value;
        },
        set: (_b1776b8882e0, _4522fc282214, [_404f414d01f7]) => {
          let _23ac0537eeb3 = new _f24be14b0412({
            name: this.name.get.call(_4522fc282214),
            value: _404f414d01f7
          }, _b1776b8882e0, _4522fc282214);
          if (this.emit("setValue", _23ac0537eeb3), _23ac0537eeb3.intercepted) return _23ac0537eeb3.returnValue;
          _23ac0537eeb3.target.call(_23ac0537eeb3.that, _23ac0537eeb3.data.value);
        }
      });
    }
    overrideItemMethods() {
      this.ctx.override(this.attrProto, "getNamedItem", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (!_404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3] = _404f414d01f7, _06ee9fa6f608 = new _f24be14b0412({
          name: _23ac0537eeb3
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("getNamedItem", _06ee9fa6f608), _06ee9fa6f608.intercepted ? _06ee9fa6f608.returnValue : _06ee9fa6f608.target.call(_06ee9fa6f608.that, _06ee9fa6f608.data.name);
      }), this.ctx.override(this.attrProto, "setNamedItem", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (2 > _404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3, _06ee9fa6f608] = _404f414d01f7, _b7f6c481f580 = new _f24be14b0412({
          name: _23ac0537eeb3,
          value: _06ee9fa6f608
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("setNamedItem", _b7f6c481f580), _b7f6c481f580.intercepted ? _b7f6c481f580.returnValue : _b7f6c481f580.target.call(_b7f6c481f580.that, _b7f6c481f580.data.name, _b7f6c481f580.data.value);
      }), this.ctx.override(this.attrProto, "removeNamedItem", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (!_404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3] = _404f414d01f7, _06ee9fa6f608 = new _f24be14b0412({
          name: _23ac0537eeb3
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("removeNamedItem", _06ee9fa6f608), _06ee9fa6f608.intercepted ? _06ee9fa6f608.returnValue : _06ee9fa6f608.target.call(_06ee9fa6f608.that, _06ee9fa6f608.data.name);
      }), this.ctx.override(this.attrProto, "item", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (!_404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3] = _404f414d01f7, _06ee9fa6f608 = new _f24be14b0412({
          index: _23ac0537eeb3
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("item", _06ee9fa6f608), _06ee9fa6f608.intercepted ? _06ee9fa6f608.returnValue : _06ee9fa6f608.target.call(_06ee9fa6f608.that, _06ee9fa6f608.data.name);
      }), this.ctx.override(this.attrProto, "getNamedItemNS", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (2 > _404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3, _06ee9fa6f608] = _404f414d01f7, _b7f6c481f580 = new _f24be14b0412({
          namespace: _23ac0537eeb3,
          localName: _06ee9fa6f608
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("getNamedItemNS", _b7f6c481f580), _b7f6c481f580.intercepted ? _b7f6c481f580.returnValue : _b7f6c481f580.target.call(_b7f6c481f580.that, _b7f6c481f580.data.namespace, _b7f6c481f580.data.localName);
      }), this.ctx.override(this.attrProto, "setNamedItemNS", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (!_404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3] = _404f414d01f7, _06ee9fa6f608 = new _f24be14b0412({
          attr: _23ac0537eeb3
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("setNamedItemNS", _06ee9fa6f608), _06ee9fa6f608.intercepted ? _06ee9fa6f608.returnValue : _06ee9fa6f608.target.call(_06ee9fa6f608.that, _06ee9fa6f608.data.name);
      }), this.ctx.override(this.attrProto, "removeNamedItemNS", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (2 > _404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3, _06ee9fa6f608] = _404f414d01f7, _b7f6c481f580 = new _f24be14b0412({
          namespace: _23ac0537eeb3,
          localName: _06ee9fa6f608
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("removeNamedItemNS", _b7f6c481f580), _b7f6c481f580.intercepted ? _b7f6c481f580.returnValue : _b7f6c481f580.target.call(_b7f6c481f580.that, _b7f6c481f580.data.namespace, _b7f6c481f580.data.localName);
      });
    }
  }, _09938c6972f7 = _2a62e947ed1a;
  var _0d1f51e94b5c = m(_2590fc921eda(), 1);
  var _f59e47112104 = class extends _0d1f51e94b5c.default {
    constructor(_b1776b8882e0) {
      super(), this.ctx = _b1776b8882e0, this.window = _b1776b8882e0.window, this.Function = this.window.Function, 
      this.fnProto = this.Function.prototype, this.toString = this.fnProto.toString, this.fnStrings = _b1776b8882e0.fnStrings, 
      this.call = this.fnProto.call, this.apply = this.fnProto.apply, this.bind = this.fnProto.bind;
    }
    overrideFunction() {
      this.ctx.override(this.window, "Function", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (!_404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let _23ac0537eeb3 = _404f414d01f7[_404f414d01f7.length - 1], _06ee9fa6f608 = [];
        for (let _b1776b8882e0 = 0; _b1776b8882e0 < _404f414d01f7.length - 1; _b1776b8882e0++) _06ee9fa6f608.push(_404f414d01f7[_b1776b8882e0]);
        let _b7f6c481f580 = new _f24be14b0412({
          script: _23ac0537eeb3,
          args: _06ee9fa6f608
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("function", _b7f6c481f580), _b7f6c481f580.intercepted ? _b7f6c481f580.returnValue : _b7f6c481f580.target.call(_b7f6c481f580.that, ..._b7f6c481f580.data.args, _b7f6c481f580.data.script);
      }, !0);
    }
    overrideToString() {
      this.ctx.override(this.fnProto, "toString", (_b1776b8882e0, _4522fc282214) => {
        let _404f414d01f7 = new _f24be14b0412({
          fn: _4522fc282214
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("toString", _404f414d01f7), _404f414d01f7.intercepted ? _404f414d01f7.returnValue : _404f414d01f7.target.call(_404f414d01f7.data.fn);
      });
    }
  }, _500f7fa33d42 = _f59e47112104;
  var _b6cd78cffa27 = m(_2590fc921eda(), 1);
  var _b2ba14493f98 = class extends _b6cd78cffa27.default {
    constructor(_b1776b8882e0) {
      super(), this.ctx = _b1776b8882e0, this.window = _b1776b8882e0.window, this.Object = this.window.Object, 
      this.getOwnPropertyDescriptors = this.Object.getOwnPropertyDescriptors, this.getOwnPropertyDescriptor = this.Object.getOwnPropertyDescriptor, 
      this.getOwnPropertyNames = this.Object.getOwnPropertyNames;
    }
    overrideGetPropertyNames() {
      this.ctx.override(this.Object, "getOwnPropertyNames", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (!_404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3] = _404f414d01f7, _06ee9fa6f608 = new _f24be14b0412({
          names: _b1776b8882e0.call(_4522fc282214, _23ac0537eeb3)
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("getOwnPropertyNames", _06ee9fa6f608), _06ee9fa6f608.intercepted ? _06ee9fa6f608.returnValue : _06ee9fa6f608.data.names;
      });
    }
    overrideGetOwnPropertyDescriptors() {
      this.ctx.override(this.Object, "getOwnPropertyDescriptors", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (!_404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3] = _404f414d01f7, _06ee9fa6f608 = new _f24be14b0412({
          descriptors: _b1776b8882e0.call(_4522fc282214, _23ac0537eeb3)
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("getOwnPropertyDescriptors", _06ee9fa6f608), _06ee9fa6f608.intercepted ? _06ee9fa6f608.returnValue : _06ee9fa6f608.data.descriptors;
      });
    }
  }, _280dd1b7a219 = _b2ba14493f98;
  var _feb3f34c3040 = m(_2590fc921eda(), 1);
  var _9917621d29d2 = class extends _feb3f34c3040.default {
    constructor(_b1776b8882e0) {
      super(), this.ctx = _b1776b8882e0, this.window = _b1776b8882e0.window, this.fetch = this.window.fetch, 
      this.Request = this.window.Request, this.Response = this.window.Response, this.Headers = this.window.Headers, 
      this.reqProto = this.Request ? this.Request.prototype : {}, this.resProto = this.Response ? this.Response.prototype : {}, 
      this.headersProto = this.Headers ? this.Headers.prototype : {}, this.reqUrl = _b1776b8882e0.nativeMethods.getOwnPropertyDescriptor(this.reqProto, "url"), 
      this.resUrl = _b1776b8882e0.nativeMethods.getOwnPropertyDescriptor(this.resProto, "url"), 
      this.reqHeaders = _b1776b8882e0.nativeMethods.getOwnPropertyDescriptor(this.reqProto, "headers"), 
      this.resHeaders = _b1776b8882e0.nativeMethods.getOwnPropertyDescriptor(this.resProto, "headers");
    }
    override() {
      return this.overrideRequest(), this.overrideUrl(), this.overrideHeaders(), !0;
    }
    overrideRequest() {
      return this.fetch ? (this.ctx.override(this.window, "fetch", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (!_404f414d01f7.length || _404f414d01f7[0] instanceof this.Request) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3, _06ee9fa6f608 = {}] = _404f414d01f7, _b7f6c481f580 = new _f24be14b0412({
          input: _23ac0537eeb3,
          options: _06ee9fa6f608
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("request", _b7f6c481f580), _b7f6c481f580.intercepted ? _b7f6c481f580.returnValue : _b7f6c481f580.target.call(_b7f6c481f580.that, _b7f6c481f580.data.input, _b7f6c481f580.data.options);
      }), this.ctx.override(this.window, "Request", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (!_404f414d01f7.length) return new _b1776b8882e0(..._404f414d01f7);
        let [_23ac0537eeb3, _06ee9fa6f608 = {}] = _404f414d01f7, _b7f6c481f580 = new _f24be14b0412({
          input: _23ac0537eeb3,
          options: _06ee9fa6f608
        }, _b1776b8882e0);
        return this.emit("request", _b7f6c481f580), _b7f6c481f580.intercepted ? _b7f6c481f580.returnValue : new _b7f6c481f580.target(_b7f6c481f580.data.input, _b7f6c481f580.data.options);
      }, !0), !0) : !1;
    }
    overrideUrl() {
      return this.ctx.overrideDescriptor(this.reqProto, "url", {
        get: (_b1776b8882e0, _4522fc282214) => {
          let _404f414d01f7 = new _f24be14b0412({
            value: _b1776b8882e0.call(_4522fc282214)
          }, _b1776b8882e0, _4522fc282214);
          return this.emit("requestUrl", _404f414d01f7), _404f414d01f7.intercepted ? _404f414d01f7.returnValue : _404f414d01f7.data.value;
        }
      }), this.ctx.overrideDescriptor(this.resProto, "url", {
        get: (_b1776b8882e0, _4522fc282214) => {
          let _404f414d01f7 = new _f24be14b0412({
            value: _b1776b8882e0.call(_4522fc282214)
          }, _b1776b8882e0, _4522fc282214);
          return this.emit("responseUrl", _404f414d01f7), _404f414d01f7.intercepted ? _404f414d01f7.returnValue : _404f414d01f7.data.value;
        }
      }), !0;
    }
    overrideHeaders() {
      return this.Headers ? (this.ctx.overrideDescriptor(this.reqProto, "headers", {
        get: (_b1776b8882e0, _4522fc282214) => {
          let _404f414d01f7 = new _f24be14b0412({
            value: _b1776b8882e0.call(_4522fc282214)
          }, _b1776b8882e0, _4522fc282214);
          return this.emit("requestHeaders", _404f414d01f7), _404f414d01f7.intercepted ? _404f414d01f7.returnValue : _404f414d01f7.data.value;
        }
      }), this.ctx.overrideDescriptor(this.resProto, "headers", {
        get: (_b1776b8882e0, _4522fc282214) => {
          let _404f414d01f7 = new _f24be14b0412({
            value: _b1776b8882e0.call(_4522fc282214)
          }, _b1776b8882e0, _4522fc282214);
          return this.emit("responseHeaders", _404f414d01f7), _404f414d01f7.intercepted ? _404f414d01f7.returnValue : _404f414d01f7.data.value;
        }
      }), this.ctx.override(this.headersProto, "get", (_b1776b8882e0, _4522fc282214, [_404f414d01f7]) => {
        if (!_404f414d01f7) return _b1776b8882e0.call(_4522fc282214);
        let _23ac0537eeb3 = new _f24be14b0412({
          name: _404f414d01f7,
          value: _b1776b8882e0.call(_4522fc282214, _404f414d01f7)
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("getHeader", _23ac0537eeb3), _23ac0537eeb3.intercepted ? _23ac0537eeb3.returnValue : _23ac0537eeb3.data.value;
      }), this.ctx.override(this.headersProto, "set", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (2 > _404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3, _06ee9fa6f608] = _404f414d01f7, _b7f6c481f580 = new _f24be14b0412({
          name: _23ac0537eeb3,
          value: _06ee9fa6f608
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("setHeader", _b7f6c481f580), _b7f6c481f580.intercepted ? _b7f6c481f580.returnValue : _b7f6c481f580.target.call(_b7f6c481f580.that, _b7f6c481f580.data.name, _b7f6c481f580.data.value);
      }), this.ctx.override(this.headersProto, "has", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (!_404f414d01f7.length) return _b1776b8882e0.call(_4522fc282214);
        let [_23ac0537eeb3] = _404f414d01f7, _06ee9fa6f608 = new _f24be14b0412({
          name: _23ac0537eeb3,
          value: _b1776b8882e0.call(_4522fc282214, _23ac0537eeb3)
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("hasHeader", _06ee9fa6f608), _06ee9fa6f608.intercepted ? _06ee9fa6f608.returnValue : _06ee9fa6f608.data;
      }), this.ctx.override(this.headersProto, "append", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (2 > _404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3, _06ee9fa6f608] = _404f414d01f7, _b7f6c481f580 = new _f24be14b0412({
          name: _23ac0537eeb3,
          value: _06ee9fa6f608
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("appendHeader", _b7f6c481f580), _b7f6c481f580.intercepted ? _b7f6c481f580.returnValue : _b7f6c481f580.target.call(_b7f6c481f580.that, _b7f6c481f580.data.name, _b7f6c481f580.data.value);
      }), this.ctx.override(this.headersProto, "delete", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (!_404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3] = _404f414d01f7, _06ee9fa6f608 = new _f24be14b0412({
          name: _23ac0537eeb3
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("deleteHeader", _06ee9fa6f608), _06ee9fa6f608.intercepted ? _06ee9fa6f608.returnValue : _06ee9fa6f608.target.call(_06ee9fa6f608.that, _06ee9fa6f608.data.name);
      }), !0) : !1;
    }
  }, _3ed33fadef2b = _9917621d29d2;
  var _98c5f0ac3098 = m(_2590fc921eda(), 1);
  var _906c6b106451 = class extends _98c5f0ac3098.default {
    constructor(_b1776b8882e0) {
      super(), this.ctx = _b1776b8882e0, this.window = _b1776b8882e0.window, this.XMLHttpRequest = this.window.XMLHttpRequest, 
      this.xhrProto = this.window.XMLHttpRequest ? this.window.XMLHttpRequest.prototype : {}, 
      this.open = this.xhrProto.open, this.abort = this.xhrProto.abort, this.send = this.xhrProto.send, 
      this.overrideMimeType = this.xhrProto.overrideMimeType, this.getAllResponseHeaders = this.xhrProto.getAllResponseHeaders, 
      this.getResponseHeader = this.xhrProto.getResponseHeader, this.setRequestHeader = this.xhrProto.setRequestHeader, 
      this.responseURL = _b1776b8882e0.nativeMethods.getOwnPropertyDescriptor(this.xhrProto, "responseURL"), 
      this.responseText = _b1776b8882e0.nativeMethods.getOwnPropertyDescriptor(this.xhrProto, "responseText");
    }
    override() {
      this.overrideOpen(), this.overrideSend(), this.overrideMimeType(), this.overrideGetResHeader(), 
      this.overrideGetResHeaders(), this.overrideSetReqHeader();
    }
    overrideOpen() {
      this.ctx.override(this.xhrProto, "open", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (2 > _404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3, _06ee9fa6f608, _b7f6c481f580 = !0, _2590fc921eda = null, _4fbc0a4bdc7c = null] = _404f414d01f7, _8d74d4deb501 = new _f24be14b0412({
          method: _23ac0537eeb3,
          input: _06ee9fa6f608,
          async: _b7f6c481f580,
          user: _2590fc921eda,
          password: _4fbc0a4bdc7c
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("open", _8d74d4deb501), _8d74d4deb501.intercepted ? _8d74d4deb501.returnValue : _8d74d4deb501.target.call(_8d74d4deb501.that, _8d74d4deb501.data.method, _8d74d4deb501.data.input, _8d74d4deb501.data.async, _8d74d4deb501.data.user, _8d74d4deb501.data.password);
      });
    }
    overrideResponseUrl() {
      this.ctx.overrideDescriptor(this.xhrProto, "responseURL", {
        get: (_b1776b8882e0, _4522fc282214) => {
          let _404f414d01f7 = new _f24be14b0412({
            value: _b1776b8882e0.call(_4522fc282214)
          }, _b1776b8882e0, _4522fc282214);
          return this.emit("responseUrl", _404f414d01f7), _404f414d01f7.intercepted ? _404f414d01f7.returnValue : _404f414d01f7.data.value;
        }
      });
    }
    overrideSend() {
      this.ctx.override(this.xhrProto, "send", (_b1776b8882e0, _4522fc282214, [_404f414d01f7 = null]) => {
        let _23ac0537eeb3 = new _f24be14b0412({
          body: _404f414d01f7
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("send", _23ac0537eeb3), _23ac0537eeb3.intercepted ? _23ac0537eeb3.returnValue : _23ac0537eeb3.target.call(_23ac0537eeb3.that, _23ac0537eeb3.data.body);
      });
    }
    overrideSetReqHeader() {
      this.ctx.override(this.xhrProto, "setRequestHeader", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (2 > _404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3, _06ee9fa6f608] = _404f414d01f7, _b7f6c481f580 = new _f24be14b0412({
          name: _23ac0537eeb3,
          value: _06ee9fa6f608
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("setReqHeader", _b7f6c481f580), _b7f6c481f580.intercepted ? _b7f6c481f580.returnValue : _b7f6c481f580.target.call(_b7f6c481f580.that, _b7f6c481f580.data.name, _b7f6c481f580.data.value);
      });
    }
    overrideGetResHeaders() {
      this.ctx.override(this.xhrProto, "getAllResponseHeaders", (_b1776b8882e0, _4522fc282214) => {
        let _404f414d01f7 = new _f24be14b0412({
          value: _b1776b8882e0.call(_4522fc282214)
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("getAllResponseHeaders", _404f414d01f7), _404f414d01f7.intercepted ? _404f414d01f7.returnValue : _404f414d01f7.data.value;
      });
    }
    overrideGetResHeader() {
      this.ctx.override(this.xhrProto, "getResponseHeader", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (!_404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3] = _404f414d01f7, _06ee9fa6f608 = new _f24be14b0412({
          name: _23ac0537eeb3,
          value: _b1776b8882e0.call(_4522fc282214, _23ac0537eeb3)
        }, _b1776b8882e0, _4522fc282214);
        return _06ee9fa6f608.intercepted ? _06ee9fa6f608.returnValue : _06ee9fa6f608.data.value;
      });
    }
  }, _297a90f283c5 = _906c6b106451;
  var _a8258e426683 = m(_2590fc921eda(), 1);
  var _bb41ea5c11da = class extends _a8258e426683.default {
    constructor(_b1776b8882e0) {
      super(), this.ctx = _b1776b8882e0, this.window = _b1776b8882e0.window, this.EventSource = this.window.EventSource || {}, 
      this.esProto = this.EventSource.prototype || {}, this.url = _b1776b8882e0.nativeMethods.getOwnPropertyDescriptor(this.esProto, "url"), 
      this.CONNECTING = 0, this.OPEN = 1, this.CLOSED = 2;
    }
    overrideConstruct() {
      this.ctx.override(this.window, "EventSource", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (!_404f414d01f7.length) return new _b1776b8882e0(..._404f414d01f7);
        let [_23ac0537eeb3, _06ee9fa6f608 = {}] = _404f414d01f7, _b7f6c481f580 = new _f24be14b0412({
          url: _23ac0537eeb3,
          config: _06ee9fa6f608
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("construct", _b7f6c481f580), _b7f6c481f580.intercepted ? _b7f6c481f580.returnValue : new _b7f6c481f580.target(_b7f6c481f580.data.url, _b7f6c481f580.data.config);
      }, !0), "EventSource" in this.window && (this.window.EventSource.CONNECTING = this.CONNECTING, 
      this.window.EventSource.OPEN = this.OPEN, this.window.EventSource.CLOSED = this.CLOSED);
    }
    overrideUrl() {
      this.ctx.overrideDescriptor(this.esProto, "url", {
        get: (_b1776b8882e0, _4522fc282214) => {
          let _404f414d01f7 = new _f24be14b0412({
            value: _b1776b8882e0.call(_4522fc282214)
          }, _b1776b8882e0, _4522fc282214);
          return this.emit("url", _404f414d01f7), _404f414d01f7.data.value;
        }
      });
    }
  }, _4abf94ad6361 = _bb41ea5c11da;
  var _66ec15770884 = m(_2590fc921eda(), 1);
  var _ea50759469a0 = class extends _66ec15770884.default {
    constructor(_b1776b8882e0) {
      super(), this.ctx = _b1776b8882e0, this.window = this.ctx.window, this.History = this.window.History, 
      this.history = this.window.history, this.historyProto = this.History ? this.History.prototype : {}, 
      this.pushState = this.historyProto.pushState, this.replaceState = this.historyProto.replaceState, 
      this.go = this.historyProto.go, this.back = this.historyProto.back, this.forward = this.historyProto.forward;
    }
    override() {
      this.overridePushState(), this.overrideReplaceState(), this.overrideGo(), this.overrideForward(), 
      this.overrideBack();
    }
    overridePushState() {
      this.ctx.override(this.historyProto, "pushState", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (2 > _404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3, _06ee9fa6f608, _b7f6c481f580 = ""] = _404f414d01f7, _2590fc921eda = new _f24be14b0412({
          state: _23ac0537eeb3,
          title: _06ee9fa6f608,
          url: _b7f6c481f580
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("pushState", _2590fc921eda), _2590fc921eda.intercepted ? _2590fc921eda.returnValue : _2590fc921eda.target.call(_2590fc921eda.that, _2590fc921eda.data.state, _2590fc921eda.data.title, _2590fc921eda.data.url);
      });
    }
    overrideReplaceState() {
      this.ctx.override(this.historyProto, "replaceState", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (2 > _404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3, _06ee9fa6f608, _b7f6c481f580 = ""] = _404f414d01f7, _2590fc921eda = new _f24be14b0412({
          state: _23ac0537eeb3,
          title: _06ee9fa6f608,
          url: _b7f6c481f580
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("replaceState", _2590fc921eda), _2590fc921eda.intercepted ? _2590fc921eda.returnValue : _2590fc921eda.target.call(_2590fc921eda.that, _2590fc921eda.data.state, _2590fc921eda.data.title, _2590fc921eda.data.url);
      });
    }
    overrideGo() {
      this.ctx.override(this.historyProto, "go", (_b1776b8882e0, _4522fc282214, [_404f414d01f7]) => {
        let _23ac0537eeb3 = new _f24be14b0412({
          delta: _404f414d01f7
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("go", _23ac0537eeb3), _23ac0537eeb3.intercepted ? _23ac0537eeb3.returnValue : _23ac0537eeb3.target.call(_23ac0537eeb3.that, _23ac0537eeb3.data.delta);
      });
    }
    overrideForward() {
      this.ctx.override(this.historyProto, "forward", (_b1776b8882e0, _4522fc282214) => {
        let _404f414d01f7 = new _f24be14b0412(null, _b1776b8882e0, _4522fc282214);
        return this.emit("forward", _404f414d01f7), _404f414d01f7.intercepted ? _404f414d01f7.returnValue : _404f414d01f7.target.call(_404f414d01f7.that);
      });
    }
    overrideBack() {
      this.ctx.override(this.historyProto, "back", (_b1776b8882e0, _4522fc282214) => {
        let _404f414d01f7 = new _f24be14b0412(null, _b1776b8882e0, _4522fc282214);
        return this.emit("back", _404f414d01f7), _404f414d01f7.intercepted ? _404f414d01f7.returnValue : _404f414d01f7.target.call(_404f414d01f7.that);
      });
    }
  }, _d2a91b896644 = _ea50759469a0;
  var _db66ec90e3c5 = m(_2590fc921eda(), 1), _3be8b4d5c5fe = class extends _db66ec90e3c5.default {
    constructor(_b1776b8882e0) {
      super(), this.ctx = _b1776b8882e0, this.window = _b1776b8882e0.window, this.location = this.window.location, 
      this.WorkerLocation = this.ctx.worker ? this.window.WorkerLocation : null, this.workerLocProto = this.WorkerLocation ? this.WorkerLocation.prototype : {}, 
      this.keys = [ "href", "protocol", "host", "hostname", "port", "pathname", "search", "hash", "origin" ], 
      this.HashChangeEvent = this.window.HashChangeEvent || null, this.href = this.WorkerLocation ? _b1776b8882e0.nativeMethods.getOwnPropertyDescriptor(this.workerLocProto, "href") : _b1776b8882e0.nativeMethods.getOwnPropertyDescriptor(this.location, "href");
    }
    overrideWorkerLocation(_b1776b8882e0) {
      if (!this.WorkerLocation) return !1;
      let _4522fc282214 = this;
      for (let _404f414d01f7 of this.keys) this.ctx.overrideDescriptor(this.workerLocProto, _404f414d01f7, {
        get: () => _b1776b8882e0(_4522fc282214.href.get.call(this.location))[_404f414d01f7]
      });
      return !0;
    }
    emulate(_b1776b8882e0, _4522fc282214) {
      let _404f414d01f7 = {}, _23ac0537eeb3 = this;
      for (let _06ee9fa6f608 of _23ac0537eeb3.keys) this.ctx.nativeMethods.defineProperty(_404f414d01f7, _06ee9fa6f608, {
        get() {
          return _b1776b8882e0(_23ac0537eeb3.href.get.call(_23ac0537eeb3.location))[_06ee9fa6f608];
        },
        set: _06ee9fa6f608 !== "origin" ? function(_b1776b8882e0) {
          switch (_06ee9fa6f608) {
           case "href":
            _23ac0537eeb3.location.href = _4522fc282214(_b1776b8882e0);
            break;

           case "hash":
            _23ac0537eeb3.emit("hashchange", _404f414d01f7.href, _b1776b8882e0.trim().startsWith("#") ? new URL(_b1776b8882e0.trim(), _404f414d01f7.href).href : new URL("#" + _b1776b8882e0.trim(), _404f414d01f7.href).href, _23ac0537eeb3);
            break;

           default:
            {
              let _b7f6c481f580 = new URL(_404f414d01f7.href);
              _b7f6c481f580[_06ee9fa6f608] = _b1776b8882e0, _23ac0537eeb3.location.href = _4522fc282214(_b7f6c481f580.href);
            }
            break;
          }
        } : void 0,
        configurable: !1,
        enumerable: !0
      });
      return "reload" in this.location && this.ctx.nativeMethods.defineProperty(_404f414d01f7, "reload", {
        value: this.ctx.wrap(this.location, "reload", (_b1776b8882e0, _4522fc282214) => _b1776b8882e0.call(_4522fc282214 === _404f414d01f7 ? this.location : _4522fc282214)),
        writable: !1,
        enumerable: !0
      }), "replace" in this.location && this.ctx.nativeMethods.defineProperty(_404f414d01f7, "replace", {
        value: this.ctx.wrap(this.location, "assign", (_b1776b8882e0, _23ac0537eeb3, _06ee9fa6f608) => {
          (!_06ee9fa6f608.length || _23ac0537eeb3 !== _404f414d01f7) && _b1776b8882e0.call(_23ac0537eeb3), 
          _23ac0537eeb3 = this.location;
          let [_b7f6c481f580] = _06ee9fa6f608, _2590fc921eda = new URL(_b7f6c481f580, _404f414d01f7.href);
          return _b1776b8882e0.call(_23ac0537eeb3 === _404f414d01f7 ? this.location : _23ac0537eeb3, _4522fc282214(_2590fc921eda.href));
        }),
        writable: !1,
        enumerable: !0
      }), "assign" in this.location && this.ctx.nativeMethods.defineProperty(_404f414d01f7, "assign", {
        value: this.ctx.wrap(this.location, "assign", (_b1776b8882e0, _23ac0537eeb3, _06ee9fa6f608) => {
          (!_06ee9fa6f608.length || _23ac0537eeb3 !== _404f414d01f7) && _b1776b8882e0.call(_23ac0537eeb3), 
          _23ac0537eeb3 = this.location;
          let [_b7f6c481f580] = _06ee9fa6f608, _2590fc921eda = new URL(_b7f6c481f580, _404f414d01f7.href);
          return _b1776b8882e0.call(_23ac0537eeb3 === _404f414d01f7 ? this.location : _23ac0537eeb3, _4522fc282214(_2590fc921eda.href));
        }),
        writable: !1,
        enumerable: !0
      }), "ancestorOrigins" in this.location && this.ctx.nativeMethods.defineProperty(_404f414d01f7, "ancestorOrigins", {
        get() {
          let _b1776b8882e0 = [];
          return _23ac0537eeb3.window.DOMStringList && _23ac0537eeb3.ctx.nativeMethods.setPrototypeOf(_b1776b8882e0, _23ac0537eeb3.window.DOMStringList.prototype), 
          _b1776b8882e0;
        },
        set: void 0,
        enumerable: !0
      }), this.ctx.nativeMethods.defineProperty(_404f414d01f7, "toString", {
        value: this.ctx.wrap(this.location, "toString", () => _404f414d01f7.href),
        enumerable: !0,
        writable: !1
      }), this.ctx.nativeMethods.defineProperty(_404f414d01f7, Symbol.toPrimitive, {
        value: () => _404f414d01f7.href,
        writable: !1,
        enumerable: !1
      }), this.ctx.window.Location && this.ctx.nativeMethods.setPrototypeOf(_404f414d01f7, this.ctx.window.Location.prototype), 
      _404f414d01f7;
    }
  }, _c7ef1e5fe02d = _3be8b4d5c5fe;
  var _a5586df0915b = m(_2590fc921eda(), 1);
  var _b1f654a31e9c = class extends _a5586df0915b.default {
    constructor(_b1776b8882e0) {
      super(), this.ctx = _b1776b8882e0, this.window = this.ctx.window, this.postMessage = this.window.postMessage, 
      this.MessageEvent = this.window.MessageEvent || {}, this.MessagePort = this.window.MessagePort || {}, 
      this.mpProto = this.MessagePort.prototype || {}, this.mpPostMessage = this.mpProto.postMessage, 
      this.messageProto = this.MessageEvent.prototype || {}, this.messageData = _b1776b8882e0.nativeMethods.getOwnPropertyDescriptor(this.messageProto, "data"), 
      this.messageOrigin = _b1776b8882e0.nativeMethods.getOwnPropertyDescriptor(this.messageProto, "origin");
    }
    overridePostMessage() {
      this.ctx.override(this.window, "postMessage", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (!_404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let _23ac0537eeb3, _06ee9fa6f608, _b7f6c481f580;
        this.ctx.worker ? [_23ac0537eeb3, _b7f6c481f580 = []] = _404f414d01f7 : [_23ac0537eeb3, _06ee9fa6f608, _b7f6c481f580 = []] = _404f414d01f7;
        let _2590fc921eda = new _f24be14b0412({
          message: _23ac0537eeb3,
          origin: _06ee9fa6f608,
          transfer: _b7f6c481f580,
          worker: this.ctx.worker
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("postMessage", _2590fc921eda), _2590fc921eda.intercepted ? _2590fc921eda.returnValue : this.ctx.worker ? _2590fc921eda.target.call(_2590fc921eda.that, _2590fc921eda.data.message, _2590fc921eda.data.transfer) : _2590fc921eda.target.call(_2590fc921eda.that, _2590fc921eda.data.message, _2590fc921eda.data.origin, _2590fc921eda.data.transfer);
      });
    }
    wrapPostMessage(_b1776b8882e0, _4522fc282214, _404f414d01f7 = !1) {
      return this.ctx.wrap(_b1776b8882e0, _4522fc282214, (_4522fc282214, _23ac0537eeb3, _06ee9fa6f608) => {
        if (this.ctx.worker ? !_06ee9fa6f608.length : 2 > _06ee9fa6f608) return _4522fc282214.apply(_23ac0537eeb3, _06ee9fa6f608);
        let _b7f6c481f580, _2590fc921eda, _4fbc0a4bdc7c;
        _404f414d01f7 ? ([_b7f6c481f580, _4fbc0a4bdc7c = []] = _06ee9fa6f608, _2590fc921eda = null) : [_b7f6c481f580, _2590fc921eda, _4fbc0a4bdc7c = []] = _06ee9fa6f608;
        let _8d74d4deb501 = new _f24be14b0412({
          message: _b7f6c481f580,
          origin: _2590fc921eda,
          transfer: _4fbc0a4bdc7c,
          worker: this.ctx.worker
        }, _4522fc282214, _b1776b8882e0);
        return this.emit("postMessage", _8d74d4deb501), _8d74d4deb501.intercepted ? _8d74d4deb501.returnValue : _404f414d01f7 ? _8d74d4deb501.target.call(_8d74d4deb501.that, _8d74d4deb501.data.message, _8d74d4deb501.data.transfer) : _8d74d4deb501.target.call(_8d74d4deb501.that, _8d74d4deb501.data.message, _8d74d4deb501.data.origin, _8d74d4deb501.data.transfer);
      });
    }
    overrideMessageOrigin() {
      this.ctx.overrideDescriptor(this.messageProto, "origin", {
        get: (_b1776b8882e0, _4522fc282214) => {
          let _404f414d01f7 = new _f24be14b0412({
            value: _b1776b8882e0.call(_4522fc282214)
          }, _b1776b8882e0, _4522fc282214);
          return this.emit("origin", _404f414d01f7), _404f414d01f7.intercepted ? _404f414d01f7.returnValue : _404f414d01f7.data.value;
        }
      });
    }
    overrideMessageData() {
      this.ctx.overrideDescriptor(this.messageProto, "data", {
        get: (_b1776b8882e0, _4522fc282214) => {
          let _404f414d01f7 = new _f24be14b0412({
            value: _b1776b8882e0.call(_4522fc282214)
          }, _b1776b8882e0, _4522fc282214);
          return this.emit("data", _404f414d01f7), _404f414d01f7.intercepted ? _404f414d01f7.returnValue : _404f414d01f7.data.value;
        }
      });
    }
  }, _96f64885e87a = _b1f654a31e9c;
  var _4e8b5d5b024f = m(_2590fc921eda(), 1);
  var _eccb5dfed16c = class extends _4e8b5d5b024f.default {
    constructor(_b1776b8882e0) {
      super(), this.ctx = _b1776b8882e0, this.window = _b1776b8882e0.window, this.navigator = this.window.navigator, 
      this.Navigator = this.window.Navigator || {}, this.navProto = this.Navigator.prototype || {}, 
      this.sendBeacon = this.navProto.sendBeacon;
    }
    overrideSendBeacon() {
      this.ctx.override(this.navProto, "sendBeacon", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (!_404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3, _06ee9fa6f608 = ""] = _404f414d01f7, _b7f6c481f580 = new _f24be14b0412({
          url: _23ac0537eeb3,
          data: _06ee9fa6f608
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("sendBeacon", _b7f6c481f580), _b7f6c481f580.intercepted ? _b7f6c481f580.returnValue : _b7f6c481f580.target.call(_b7f6c481f580.that, _b7f6c481f580.data.url, _b7f6c481f580.data.data);
      });
    }
  }, _e6634bcf3236 = _eccb5dfed16c;
  var _eb148d978f52 = m(_2590fc921eda(), 1);
  var _2db250478fbf = globalThis.fetch, _b7c79c1914c7 = globalThis.SharedWorker, _ef4fbdd39a29 = globalThis.localStorage, _d39ae6efa3ca = globalThis.navigator.serviceWorker, _f0e94951a7c3 = MessagePort.prototype.postMessage, _6d66144a9be0 = {
    prototype: {
      send: WebSocket.prototype.send
    },
    CLOSED: WebSocket.CLOSED,
    CLOSING: WebSocket.CLOSING,
    CONNECTING: WebSocket.CONNECTING,
    OPEN: WebSocket.OPEN
  };
  async function W() {
    let _b1776b8882e0 = (await self.clients.matchAll({
      type: "window",
      includeUncontrolled: !0
    })).map(async _b1776b8882e0 => {
      let _4522fc282214 = await function(_b1776b8882e0) {
        let _4522fc282214 = new MessageChannel;
        return new Promise(_404f414d01f7 => {
          _b1776b8882e0.postMessage({
            type: "getPort",
            port: _4522fc282214.port2
          }, [ _4522fc282214.port2 ]), _4522fc282214.port1.onmessage = _b1776b8882e0 => {
            _404f414d01f7(_b1776b8882e0.data);
          };
        });
      }(_b1776b8882e0);
      return await Ie(_4522fc282214), _4522fc282214;
    }), _4522fc282214 = Promise.race([ Promise.any(_b1776b8882e0), new Promise((_b1776b8882e0, _4522fc282214) => setTimeout(_4522fc282214, 1e3, new TypeError("timeout"))) ]);
    try {
      return await _4522fc282214;
    } catch (_b1776b8882e0) {
      if (_b1776b8882e0 instanceof AggregateError) throw console.error("bare-mux: failed to get a bare-mux SharedWorker MessagePort as all clients returned an invalid MessagePort."), 
      new Error("All clients returned an invalid MessagePort.");
      return console.warn("bare-mux: failed to get a bare-mux SharedWorker MessagePort within 1s, retrying"), 
      await W();
    }
  }
  function Ie(_b1776b8882e0) {
    let _4522fc282214 = new MessageChannel, _404f414d01f7 = new Promise((_b1776b8882e0, _404f414d01f7) => {
      _4522fc282214.port1.onmessage = _4522fc282214 => {
        _4522fc282214.data.type === "pong" && _b1776b8882e0();
      }, setTimeout(_404f414d01f7, 1500);
    });
    return _f0e94951a7c3.call(_b1776b8882e0, {
      message: {
        type: "ping"
      },
      port: _4522fc282214.port2
    }, [ _4522fc282214.port2 ]), _404f414d01f7;
  }
  function Ve(_b1776b8882e0, _4522fc282214) {
    let _404f414d01f7 = new _b7c79c1914c7(_b1776b8882e0, "ridgewood-stem-worker");
    return _4522fc282214 && _d39ae6efa3ca.addEventListener("message", _4522fc282214 => {
      if (_4522fc282214.data.type === "getPort" && _4522fc282214.data.port) {
        console.debug("bare-mux: recieved request for port from sw");
        let _404f414d01f7 = new _b7c79c1914c7(_b1776b8882e0, "ridgewood-stem-worker");
        _f0e94951a7c3.call(_4522fc282214.data.port, _404f414d01f7.port, [ _404f414d01f7.port ]);
      }
    }), _404f414d01f7.port;
  }
  var _6c24e39b35bd = null;
  function lt() {
    if (_6c24e39b35bd === null) {
      let _b1776b8882e0 = new MessageChannel, _4522fc282214 = new ReadableStream, _404f414d01f7;
      try {
        _f0e94951a7c3.call(_b1776b8882e0.port1, _4522fc282214, [ _4522fc282214 ]), _404f414d01f7 = !0;
      } catch {
        _404f414d01f7 = !1;
      }
      return _6c24e39b35bd = _404f414d01f7, _404f414d01f7;
    }
    return _6c24e39b35bd;
  }
  var _6a40b6e6292f = class {
    constructor(_b1776b8882e0) {
      this.channel = new BroadcastChannel("bare-mux"), _b1776b8882e0 instanceof MessagePort || _b1776b8882e0 instanceof Promise ? this.port = _b1776b8882e0 : this.createChannel(_b1776b8882e0, !0);
    }
    createChannel(_b1776b8882e0, _4522fc282214) {
      if (self.clients) this.port = W(), this.channel.onmessage = _b1776b8882e0 => {
        _b1776b8882e0.data.type === "refreshPort" && (this.port = W());
      }; else if (_b1776b8882e0 && SharedWorker) {
        if (!_b1776b8882e0.startsWith("/") && !_b1776b8882e0.includes("://")) throw new Error("Invalid URL. Must be absolute or start at the root.");
        this.port = Ve(_b1776b8882e0, _4522fc282214), console.debug("bare-mux: setting localStorage bare-mux-path to", _b1776b8882e0), 
        _ef4fbdd39a29["bare-mux-path"] = _b1776b8882e0;
      } else {
        if (!SharedWorker) throw new Error("Unable to get a channel to the SharedWorker.");
        {
          let _b1776b8882e0 = _ef4fbdd39a29["bare-mux-path"];
          if (console.debug("bare-mux: got localStorage bare-mux-path:", _b1776b8882e0), !_b1776b8882e0) throw new Error("Unable to get bare-mux workerPath from localStorage.");
          this.port = Ve(_b1776b8882e0, _4522fc282214);
        }
      }
    }
    async sendMessage(_b1776b8882e0, _4522fc282214) {
      this.port instanceof Promise && (this.port = await this.port);
      try {
        await Ie(this.port);
      } catch {
        return console.warn("bare-mux: Failed to get a ping response from the worker within 1.5s. Assuming port is dead."), 
        this.createChannel(), await this.sendMessage(_b1776b8882e0, _4522fc282214);
      }
      let _404f414d01f7 = new MessageChannel, _23ac0537eeb3 = [ _404f414d01f7.port2, ..._4522fc282214 || [] ], _06ee9fa6f608 = new Promise((_b1776b8882e0, _4522fc282214) => {
        _404f414d01f7.port1.onmessage = _404f414d01f7 => {
          let _23ac0537eeb3 = _404f414d01f7.data;
          _23ac0537eeb3.type === "error" ? _4522fc282214(_23ac0537eeb3.error) : _b1776b8882e0(_23ac0537eeb3);
        };
      });
      return _f0e94951a7c3.call(this.port, {
        message: _b1776b8882e0,
        port: _404f414d01f7.port2
      }, _23ac0537eeb3), await _06ee9fa6f608;
    }
  };
  function Ce(_b1776b8882e0, _4522fc282214, _404f414d01f7) {
    console.error(`error while processing '${_404f414d01f7}': `, _4522fc282214), _b1776b8882e0.postMessage({
      type: "error",
      error: _4522fc282214
    });
  }
  var _f0f76e6c4383 = class {
    constructor(_b1776b8882e0) {
      this.worker = new _6a40b6e6292f(_b1776b8882e0);
    }
    async getTransport() {
      return (await this.worker.sendMessage({
        type: "get"
      })).name;
    }
    async setTransport(_b1776b8882e0, _4522fc282214, _404f414d01f7) {
      await this.setManualTransport(`\n\t\t\tconst { default: BareTransport } = await import("${_b1776b8882e0}");\n\t\t\treturn [BareTransport, "${_b1776b8882e0}"];\n\t\t`, _4522fc282214, _404f414d01f7);
    }
    async setManualTransport(_b1776b8882e0, _4522fc282214, _404f414d01f7) {
      if (_b1776b8882e0 === "bare-mux-remote") throw new Error("Use setRemoteTransport.");
      await this.worker.sendMessage({
        type: "set",
        client: {
          function: _b1776b8882e0,
          args: _4522fc282214
        }
      }, _404f414d01f7);
    }
    async setRemoteTransport(_b1776b8882e0, _4522fc282214) {
      let _404f414d01f7 = new MessageChannel;
      _404f414d01f7.port1.onmessage = async _4522fc282214 => {
        let _404f414d01f7 = _4522fc282214.data.port, _23ac0537eeb3 = _4522fc282214.data.message;
        if (_23ac0537eeb3.type === "fetch") try {
          _b1776b8882e0.ready || await _b1776b8882e0.init(), await async function(_b1776b8882e0, _4522fc282214, _404f414d01f7) {
            let _23ac0537eeb3 = await _404f414d01f7.request(new URL(_b1776b8882e0.fetch.remote), _b1776b8882e0.fetch.method, _b1776b8882e0.fetch.body, _b1776b8882e0.fetch.headers, null);
            if (!lt() && _23ac0537eeb3.body instanceof ReadableStream) {
              let _b1776b8882e0 = new Response(_23ac0537eeb3.body);
              _23ac0537eeb3.body = await _b1776b8882e0.arrayBuffer();
            }
            _23ac0537eeb3.body instanceof ReadableStream || _23ac0537eeb3.body instanceof ArrayBuffer ? _f0e94951a7c3.call(_4522fc282214, {
              type: "fetch",
              fetch: _23ac0537eeb3
            }, [ _23ac0537eeb3.body ]) : _f0e94951a7c3.call(_4522fc282214, {
              type: "fetch",
              fetch: _23ac0537eeb3
            });
          }(_23ac0537eeb3, _404f414d01f7, _b1776b8882e0);
        } catch (_b1776b8882e0) {
          Ce(_404f414d01f7, _b1776b8882e0, "fetch");
        } else if (_23ac0537eeb3.type === "websocket") try {
          _b1776b8882e0.ready || await _b1776b8882e0.init(), await async function(_b1776b8882e0, _4522fc282214, _404f414d01f7) {
            let [_23ac0537eeb3, _06ee9fa6f608] = _404f414d01f7.connect(new URL(_b1776b8882e0.websocket.url), _b1776b8882e0.websocket.protocols, _b1776b8882e0.websocket.requestHeaders, _4522fc282214 => {
              _f0e94951a7c3.call(_b1776b8882e0.websocket.channel, {
                type: "open",
                args: [ _4522fc282214 ]
              });
            }, _4522fc282214 => {
              _4522fc282214 instanceof ArrayBuffer ? _f0e94951a7c3.call(_b1776b8882e0.websocket.channel, {
                type: "message",
                args: [ _4522fc282214 ]
              }, [ _4522fc282214 ]) : _f0e94951a7c3.call(_b1776b8882e0.websocket.channel, {
                type: "message",
                args: [ _4522fc282214 ]
              });
            }, (_4522fc282214, _404f414d01f7) => {
              _f0e94951a7c3.call(_b1776b8882e0.websocket.channel, {
                type: "close",
                args: [ _4522fc282214, _404f414d01f7 ]
              });
            }, _4522fc282214 => {
              _f0e94951a7c3.call(_b1776b8882e0.websocket.channel, {
                type: "error",
                args: [ _4522fc282214 ]
              });
            });
            _b1776b8882e0.websocket.channel.onmessage = _b1776b8882e0 => {
              _b1776b8882e0.data.type === "data" ? _23ac0537eeb3(_b1776b8882e0.data.data) : _b1776b8882e0.data.type === "close" && _06ee9fa6f608(_b1776b8882e0.data.closeCode, _b1776b8882e0.data.closeReason);
            }, _f0e94951a7c3.call(_4522fc282214, {
              type: "websocket"
            });
          }(_23ac0537eeb3, _404f414d01f7, _b1776b8882e0);
        } catch (_b1776b8882e0) {
          Ce(_404f414d01f7, _b1776b8882e0, "websocket");
        }
      }, await this.worker.sendMessage({
        type: "set",
        client: {
          function: "bare-mux-remote",
          args: [ _404f414d01f7.port2, _4522fc282214 ]
        }
      }, [ _404f414d01f7.port2 ]);
    }
    getInnerPort() {
      return this.worker.port;
    }
  };
  console.debug("bare-mux: running v2.1.6 (build 4b7607b)");
  var _6aa37fb508f8 = class extends _eb148d978f52.default {
    constructor(_b1776b8882e0) {
      super(), this.ctx = _b1776b8882e0, this.window = _b1776b8882e0.window, this.Worker = this.window.Worker || {}, 
      this.Worklet = this.window.Worklet || {}, this.workletProto = this.Worklet.prototype || {}, 
      this.workerProto = this.Worker.prototype || {}, this.postMessage = this.workerProto.postMessage, 
      this.terminate = this.workerProto.terminate, this.addModule = this.workletProto.addModule;
    }
    overrideWorker() {
      this.ctx.override(this.window, "Worker", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (!_404f414d01f7.length) return new _b1776b8882e0(..._404f414d01f7);
        let [_23ac0537eeb3, _06ee9fa6f608 = {}] = _404f414d01f7, _b7f6c481f580 = new _f24be14b0412({
          url: _23ac0537eeb3,
          options: _06ee9fa6f608
        }, _b1776b8882e0, _4522fc282214);
        if (this.emit("worker", _b7f6c481f580), _b7f6c481f580.intercepted) return _b7f6c481f580.returnValue;
        let _2590fc921eda = new _b7f6c481f580.target(_b7f6c481f580.data.url, _b7f6c481f580.data.options), _4fbc0a4bdc7c = new _f0f76e6c4383;
        return (async () => {
          let _b1776b8882e0 = await _4fbc0a4bdc7c.getInnerPort();
          _2590fc921eda.postMessage({
            __uv$type: "baremuxinit",
            port: _b1776b8882e0
          }, [ _b1776b8882e0 ]);
        })(), _2590fc921eda;
      }, !0);
    }
    overrideAddModule() {
      this.ctx.override(this.workletProto, "addModule", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (!_404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3, _06ee9fa6f608 = {}] = _404f414d01f7, _b7f6c481f580 = new _f24be14b0412({
          url: _23ac0537eeb3,
          options: _06ee9fa6f608
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("addModule", _b7f6c481f580), _b7f6c481f580.intercepted ? _b7f6c481f580.returnValue : _b7f6c481f580.target.call(_b7f6c481f580.that, _b7f6c481f580.data.url, _b7f6c481f580.data.options);
      });
    }
    overridePostMessage() {
      this.ctx.override(this.workerProto, "postMessage", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (!_404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3, _06ee9fa6f608 = []] = _404f414d01f7, _b7f6c481f580 = new _f24be14b0412({
          message: _23ac0537eeb3,
          transfer: _06ee9fa6f608
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("postMessage", _b7f6c481f580), _b7f6c481f580.intercepted ? _b7f6c481f580.returnValue : _b7f6c481f580.target.call(_b7f6c481f580.that, _b7f6c481f580.data.message, _b7f6c481f580.data.transfer);
      });
    }
    overrideImportScripts() {
      this.ctx.override(this.window, "importScripts", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (!_404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let _23ac0537eeb3 = new _f24be14b0412({
          scripts: _404f414d01f7
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("importScripts", _23ac0537eeb3), _23ac0537eeb3.intercepted ? _23ac0537eeb3.returnValue : _23ac0537eeb3.target.apply(_23ac0537eeb3.that, _23ac0537eeb3.data.scripts);
      });
    }
  }, _94426ec53ef3 = _6aa37fb508f8;
  var _93c601cb0551 = m(_2590fc921eda(), 1);
  var _d2ab3e82035c = class extends _93c601cb0551.default {
    constructor(_b1776b8882e0) {
      super(), this.ctx = _b1776b8882e0, this.window = this.ctx.window, this.URL = this.window.URL || {}, 
      this.createObjectURL = this.URL.createObjectURL, this.revokeObjectURL = this.URL.revokeObjectURL;
    }
    overrideObjectURL() {
      this.ctx.override(this.URL, "createObjectURL", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (!_404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3] = _404f414d01f7, _06ee9fa6f608 = new _f24be14b0412({
          object: _23ac0537eeb3
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("createObjectURL", _06ee9fa6f608), _06ee9fa6f608.intercepted ? _06ee9fa6f608.returnValue : _06ee9fa6f608.target.call(_06ee9fa6f608.that, _06ee9fa6f608.data.object);
      }), this.ctx.override(this.URL, "revokeObjectURL", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (!_404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3] = _404f414d01f7, _06ee9fa6f608 = new _f24be14b0412({
          url: _23ac0537eeb3
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("revokeObjectURL", _06ee9fa6f608), _06ee9fa6f608.intercepted ? _06ee9fa6f608.returnValue : _06ee9fa6f608.target.call(_06ee9fa6f608.that, _06ee9fa6f608.data.url);
      });
    }
  }, _c788eaf5e562 = _d2ab3e82035c;
  var _581a6d4aaac2 = m(_2590fc921eda(), 1);
  var _519692c66d22 = m(_2590fc921eda(), 1);
  var _10520c129a5f = class extends _519692c66d22.default {
    constructor(_b1776b8882e0) {
      super(), this.ctx = _b1776b8882e0, this.window = _b1776b8882e0.window, this.localStorage = this.window.localStorage || null, 
      this.sessionStorage = this.window.sessionStorage || null, this.Storage = this.window.Storage || {}, 
      this.storeProto = this.Storage.prototype || {}, this.getItem = this.storeProto.getItem || null, 
      this.setItem = this.storeProto.setItem || null, this.removeItem = this.storeProto.removeItem || null, 
      this.clear = this.storeProto.clear || null, this.key = this.storeProto.key || null, 
      this.methods = [ "key", "getItem", "setItem", "removeItem", "clear" ], this.wrappers = new _b1776b8882e0.nativeMethods.Map;
    }
    overrideMethods() {
      this.ctx.override(this.storeProto, "getItem", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (!_404f414d01f7.length) return _b1776b8882e0.apply(this.wrappers.get(_4522fc282214) || _4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3] = _404f414d01f7, _06ee9fa6f608 = new _f24be14b0412({
          name: _23ac0537eeb3
        }, _b1776b8882e0, this.wrappers.get(_4522fc282214) || _4522fc282214);
        return this.emit("getItem", _06ee9fa6f608), _06ee9fa6f608.intercepted ? _06ee9fa6f608.returnValue : _06ee9fa6f608.target.call(_06ee9fa6f608.that, _06ee9fa6f608.data.name);
      }), this.ctx.override(this.storeProto, "setItem", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (2 > _404f414d01f7.length) return _b1776b8882e0.apply(this.wrappers.get(_4522fc282214) || _4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3, _06ee9fa6f608] = _404f414d01f7, _b7f6c481f580 = new _f24be14b0412({
          name: _23ac0537eeb3,
          value: _06ee9fa6f608
        }, _b1776b8882e0, this.wrappers.get(_4522fc282214) || _4522fc282214);
        return this.emit("setItem", _b7f6c481f580), _b7f6c481f580.intercepted ? _b7f6c481f580.returnValue : _b7f6c481f580.target.call(_b7f6c481f580.that, _b7f6c481f580.data.name, _b7f6c481f580.data.value);
      }), this.ctx.override(this.storeProto, "removeItem", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (!_404f414d01f7.length) return _b1776b8882e0.apply(this.wrappers.get(_4522fc282214) || _4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3] = _404f414d01f7, _06ee9fa6f608 = new _f24be14b0412({
          name: _23ac0537eeb3
        }, _b1776b8882e0, this.wrappers.get(_4522fc282214) || _4522fc282214);
        return this.emit("removeItem", _06ee9fa6f608), _06ee9fa6f608.intercepted ? _06ee9fa6f608.returnValue : _06ee9fa6f608.target.call(_06ee9fa6f608.that, _06ee9fa6f608.data.name);
      }), this.ctx.override(this.storeProto, "clear", (_b1776b8882e0, _4522fc282214) => {
        let _404f414d01f7 = new _f24be14b0412(null, _b1776b8882e0, this.wrappers.get(_4522fc282214) || _4522fc282214);
        return this.emit("clear", _404f414d01f7), _404f414d01f7.intercepted ? _404f414d01f7.returnValue : _404f414d01f7.target.call(_404f414d01f7.that);
      }), this.ctx.override(this.storeProto, "key", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (!_404f414d01f7.length) return _b1776b8882e0.apply(this.wrappers.get(_4522fc282214) || _4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3] = _404f414d01f7, _06ee9fa6f608 = new _f24be14b0412({
          index: _23ac0537eeb3
        }, _b1776b8882e0, this.wrappers.get(_4522fc282214) || _4522fc282214);
        return this.emit("key", _06ee9fa6f608), _06ee9fa6f608.intercepted ? _06ee9fa6f608.returnValue : _06ee9fa6f608.target.call(_06ee9fa6f608.that, _06ee9fa6f608.data.index);
      });
    }
    overrideLength() {
      this.ctx.overrideDescriptor(this.storeProto, "length", {
        get: (_b1776b8882e0, _4522fc282214) => {
          let _404f414d01f7 = new _f24be14b0412({
            length: _b1776b8882e0.call(this.wrappers.get(_4522fc282214) || _4522fc282214)
          }, _b1776b8882e0, this.wrappers.get(_4522fc282214) || _4522fc282214);
          return this.emit("length", _404f414d01f7), _404f414d01f7.intercepted ? _404f414d01f7.returnValue : _404f414d01f7.data.length;
        }
      });
    }
    emulate(_b1776b8882e0, _4522fc282214 = {}) {
      this.ctx.nativeMethods.setPrototypeOf(_4522fc282214, this.storeProto);
      let _404f414d01f7 = new this.ctx.window.Proxy(_4522fc282214, {
        get: (_4522fc282214, _404f414d01f7) => {
          if (_404f414d01f7 in this.storeProto || typeof _404f414d01f7 == "symbol") return _b1776b8882e0[_404f414d01f7];
          let _23ac0537eeb3 = new _f24be14b0412({
            name: _404f414d01f7
          }, null, _b1776b8882e0);
          return this.emit("get", _23ac0537eeb3), _23ac0537eeb3.intercepted ? _23ac0537eeb3.returnValue : _b1776b8882e0[_23ac0537eeb3.data.name];
        },
        set: (_4522fc282214, _404f414d01f7, _23ac0537eeb3) => {
          if (_404f414d01f7 in this.storeProto || typeof _404f414d01f7 == "symbol") return _b1776b8882e0[_404f414d01f7] = _23ac0537eeb3;
          let _06ee9fa6f608 = new _f24be14b0412({
            name: _404f414d01f7,
            value: _23ac0537eeb3
          }, null, _b1776b8882e0);
          return this.emit("set", _06ee9fa6f608), _06ee9fa6f608.intercepted ? _06ee9fa6f608.returnValue : _b1776b8882e0[_06ee9fa6f608.data.name] = _06ee9fa6f608.data.value;
        },
        deleteProperty: (_4522fc282214, _404f414d01f7) => {
          if (typeof _404f414d01f7 == "symbol") return delete _b1776b8882e0[_404f414d01f7];
          let _23ac0537eeb3 = new _f24be14b0412({
            name: _404f414d01f7
          }, null, _b1776b8882e0);
          return this.emit("delete", _23ac0537eeb3), _23ac0537eeb3.intercepted ? _23ac0537eeb3.returnValue : delete _b1776b8882e0[_23ac0537eeb3.data.name];
        }
      });
      return this.wrappers.set(_404f414d01f7, _b1776b8882e0), this.ctx.nativeMethods.setPrototypeOf(_404f414d01f7, this.storeProto), 
      _404f414d01f7;
    }
  }, _0914541b0582 = _10520c129a5f;
  var _e6f3648f205c = m(_2590fc921eda(), 1);
  var _79efff23d184 = class extends _e6f3648f205c.default {
    constructor(_b1776b8882e0) {
      super(), this.ctx = _b1776b8882e0, this.window = _b1776b8882e0.window, this.CSSStyleDeclaration = this.window.CSSStyleDeclaration || {}, 
      this.cssStyleProto = this.CSSStyleDeclaration.prototype || {}, this.getPropertyValue = this.cssStyleProto.getPropertyValue || null, 
      this.setProperty = this.cssStyleProto.setProperty || null, this.cssText - _b1776b8882e0.nativeMethods.getOwnPropertyDescriptors(this.cssStyleProto, "cssText"), 
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
      this.ctx.override(this.cssStyleProto, "getPropertyValue", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (!_404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3] = _404f414d01f7, _06ee9fa6f608 = new _f24be14b0412({
          property: _23ac0537eeb3
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("getPropertyValue", _06ee9fa6f608), _06ee9fa6f608.intercepted ? _06ee9fa6f608.returnValue : _06ee9fa6f608.target.call(_06ee9fa6f608.that, _06ee9fa6f608.data.property);
      }), this.ctx.override(this.cssStyleProto, "setProperty", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (2 > _404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3, _06ee9fa6f608] = _404f414d01f7, _b7f6c481f580 = new _f24be14b0412({
          property: _23ac0537eeb3,
          value: _06ee9fa6f608
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("setProperty", _b7f6c481f580), _b7f6c481f580.intercepted ? _b7f6c481f580.returnValue : _b7f6c481f580.target.call(_b7f6c481f580.that, _b7f6c481f580.data.property, _b7f6c481f580.data.value);
      });
    }
    overrideCssText() {
      this.ctx.overrideDescriptor(this.cssStyleProto, "cssText", {
        get: (_b1776b8882e0, _4522fc282214) => {
          let _404f414d01f7 = new _f24be14b0412({
            value: _b1776b8882e0.call(_4522fc282214)
          }, _b1776b8882e0, _4522fc282214);
          return this.emit("getCssText", _404f414d01f7), _404f414d01f7.intercepted ? _404f414d01f7.returnValue : _404f414d01f7.data.value;
        },
        set: (_b1776b8882e0, _4522fc282214, [_404f414d01f7]) => {
          let _23ac0537eeb3 = new _f24be14b0412({
            value: _404f414d01f7
          }, _b1776b8882e0, _4522fc282214);
          return this.emit("setCssText", _23ac0537eeb3), _23ac0537eeb3.intercepted ? _23ac0537eeb3.returnValue : _23ac0537eeb3.target.call(_23ac0537eeb3.that, _23ac0537eeb3.data.value);
        }
      });
    }
  }, _53fafe06104c = _79efff23d184;
  var _65d376d04e18 = m(_2590fc921eda(), 1);
  var _40360135bc7d = class extends _65d376d04e18.default {
    constructor(_b1776b8882e0) {
      super(), this.ctx = _b1776b8882e0, this.window = this.ctx.window, this.IDBDatabase = this.window.IDBDatabase || {}, 
      this.idbDatabaseProto = this.IDBDatabase.prototype || {}, this.IDBFactory = this.window.IDBFactory || {}, 
      this.idbFactoryProto = this.IDBFactory.prototype || {}, this.open = this.idbFactoryProto.open;
    }
    overrideOpen() {
      this.ctx.override(this.IDBFactory.prototype, "open", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        if (!_404f414d01f7.length || !_404f414d01f7.length) return _b1776b8882e0.apply(_4522fc282214, _404f414d01f7);
        let [_23ac0537eeb3, _06ee9fa6f608] = _404f414d01f7, _b7f6c481f580 = new _f24be14b0412({
          name: _23ac0537eeb3,
          version: _06ee9fa6f608
        }, _b1776b8882e0, _4522fc282214);
        return this.emit("idbFactoryOpen", _b7f6c481f580), _b7f6c481f580.intercepted ? _b7f6c481f580.returnValue : _b7f6c481f580.target.call(_b7f6c481f580.that, _b7f6c481f580.data.name, _b7f6c481f580.data.version);
      });
    }
    overrideName() {
      this.ctx.overrideDescriptor(this.idbDatabaseProto, "name", {
        get: (_b1776b8882e0, _4522fc282214) => {
          let _404f414d01f7 = new _f24be14b0412({
            value: _b1776b8882e0.call(_4522fc282214)
          }, _b1776b8882e0, _4522fc282214);
          return this.emit("idbFactoryName", _404f414d01f7), _404f414d01f7.intercepted ? _404f414d01f7.returnValue : _404f414d01f7.data.value;
        }
      });
    }
  }, _5223361ce06d = _40360135bc7d;
  var _1dfa60e8db46 = m(_2590fc921eda(), 1);
  var _f506181de4ce = class extends _1dfa60e8db46.default {
    constructor(_b1776b8882e0) {
      super(), this.ctx = _b1776b8882e0, this.window = _b1776b8882e0.window, this.WebSocket = this.window.WebSocket || {}, 
      this.wsProto = this.WebSocket.prototype, this.CONNECTING = WebSocket.CONNECTING, 
      this.OPEN = WebSocket.OPEN, this.CLOSING = WebSocket.CLOSING, this.CLOSED = WebSocket.CLOSED, 
      this.socketmap = new WeakMap;
    }
    overrideWebSocket(_b1776b8882e0) {
      this.ctx.override(this.window, "WebSocket", (_4522fc282214, _404f414d01f7, _23ac0537eeb3) => {
        let _06ee9fa6f608 = new EventTarget;
        Object.setPrototypeOf(_06ee9fa6f608, this.WebSocket.prototype), _06ee9fa6f608.constructor = this.WebSocket;
        let i = _b1776b8882e0 => new Proxy(_b1776b8882e0, {
          get(_b1776b8882e0, _4522fc282214) {
            return _4522fc282214 === "isTrusted" ? !0 : Reflect.get(_b1776b8882e0, _4522fc282214);
          }
        }), _b7f6c481f580 = _b1776b8882e0.createWebSocket(_23ac0537eeb3[0], _23ac0537eeb3[1], null, {
          "User-Agent": navigator.userAgent,
          Origin: __uv.meta.url.origin
        }), _2590fc921eda = {
          extensions: "",
          protocol: "",
          url: _23ac0537eeb3[0],
          binaryType: "blob",
          barews: _b7f6c481f580
        };
        function u(_b1776b8882e0) {
          _2590fc921eda["on" + _b1776b8882e0.type]?.(i(_b1776b8882e0)), _06ee9fa6f608.dispatchEvent(_b1776b8882e0);
        }
        return _b7f6c481f580.addEventListener("open", () => {
          u(new Event("open"));
        }), _b7f6c481f580.addEventListener("close", _b1776b8882e0 => {
          u(new CloseEvent("close", _b1776b8882e0));
        }), _b7f6c481f580.addEventListener("message", async _b1776b8882e0 => {
          let _4522fc282214 = _b1776b8882e0.data;
          typeof _4522fc282214 == "string" || ("byteLength" in _4522fc282214 ? _2590fc921eda.binaryType === "blob" ? _4522fc282214 = new Blob([ _4522fc282214 ]) : Object.setPrototypeOf(_4522fc282214, ArrayBuffer.prototype) : "arrayBuffer" in _4522fc282214 && _2590fc921eda.binaryType === "arraybuffer" && (_4522fc282214 = await _4522fc282214.arrayBuffer(), 
          Object.setPrototypeOf(_4522fc282214, ArrayBuffer.prototype)));
          let _404f414d01f7 = new MessageEvent("message", {
            data: _4522fc282214,
            origin: _b1776b8882e0.origin,
            lastEventId: _b1776b8882e0.lastEventId,
            source: _b1776b8882e0.source,
            ports: _b1776b8882e0.ports
          });
          u(_404f414d01f7);
        }), _b7f6c481f580.addEventListener("error", () => {
          u(new Event("error"));
        }), this.socketmap.set(_06ee9fa6f608, _2590fc921eda), _06ee9fa6f608;
      }, !0), this.ctx.overrideDescriptor(this.wsProto, "binaryType", {
        get: (_b1776b8882e0, _4522fc282214) => this.socketmap.get(_4522fc282214).binaryType,
        set: (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
          let _23ac0537eeb3 = this.socketmap.get(_4522fc282214);
          (_404f414d01f7[0] === "blob" || _404f414d01f7[0] === "arraybuffer") && (_23ac0537eeb3.binaryType = _404f414d01f7[0]);
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "bufferedAmount", {
        get: (_b1776b8882e0, _4522fc282214) => 0
      }), this.ctx.overrideDescriptor(this.wsProto, "extensions", {
        get: (_b1776b8882e0, _4522fc282214) => this.socketmap.get(_4522fc282214).extensions
      }), this.ctx.overrideDescriptor(this.wsProto, "onclose", {
        get: (_b1776b8882e0, _4522fc282214) => this.socketmap.get(_4522fc282214).onclose,
        set: (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
          let _23ac0537eeb3 = this.socketmap.get(_4522fc282214);
          _23ac0537eeb3.onclose = _404f414d01f7[0];
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "onerror", {
        get: (_b1776b8882e0, _4522fc282214) => this.socketmap.get(_4522fc282214).onerror,
        set: (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
          let _23ac0537eeb3 = this.socketmap.get(_4522fc282214);
          _23ac0537eeb3.onerror = _404f414d01f7[0];
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "onmessage", {
        get: (_b1776b8882e0, _4522fc282214) => this.socketmap.get(_4522fc282214).onmessage,
        set: (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
          let _23ac0537eeb3 = this.socketmap.get(_4522fc282214);
          _23ac0537eeb3.onmessage = _404f414d01f7[0];
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "onopen", {
        get: (_b1776b8882e0, _4522fc282214) => this.socketmap.get(_4522fc282214).onopen,
        set: (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
          let _23ac0537eeb3 = this.socketmap.get(_4522fc282214);
          _23ac0537eeb3.onopen = _404f414d01f7[0];
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "url", {
        get: (_b1776b8882e0, _4522fc282214) => this.socketmap.get(_4522fc282214).url
      }), this.ctx.overrideDescriptor(this.wsProto, "protocol", {
        get: (_b1776b8882e0, _4522fc282214) => this.socketmap.get(_4522fc282214).protocol
      }), this.ctx.overrideDescriptor(this.wsProto, "readyState", {
        get: (_b1776b8882e0, _4522fc282214) => this.socketmap.get(_4522fc282214).barews.readyState
      }), this.ctx.override(this.wsProto, "send", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => this.socketmap.get(_4522fc282214).barews.send(_404f414d01f7[0]), !1), 
      this.ctx.override(this.wsProto, "close", (_b1776b8882e0, _4522fc282214, _404f414d01f7) => {
        let _23ac0537eeb3 = this.socketmap.get(_4522fc282214);
        return _404f414d01f7[0] === void 0 && (_404f414d01f7[0] = 1e3), _404f414d01f7[1] === void 0 && (_404f414d01f7[1] = ""), 
        _23ac0537eeb3.barews.close(_404f414d01f7[0], _404f414d01f7[1]);
      }, !1);
    }
  }, _828a8b4b1884 = _f506181de4ce;
  var _0238a9c0ce2e = class extends _581a6d4aaac2.default {
    constructor(_b1776b8882e0 = self, _4522fc282214, _404f414d01f7 = !_b1776b8882e0.window) {
      super(), this.window = _b1776b8882e0, this.nativeMethods = {
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
      }, this.worker = _404f414d01f7, this.bareClient = _4522fc282214, this.fetch = new _3ed33fadef2b(this), 
      this.xhr = new _297a90f283c5(this), this.idb = new _5223361ce06d(this), this.history = new _d2a91b896644(this), 
      this.element = new _09ee667fb9e7(this), this.node = new _161617b8b022(this), this.document = new _db81e7219598(this), 
      this.function = new _500f7fa33d42(this), this.object = new _280dd1b7a219(this), 
      this.websocket = new _828a8b4b1884(this), this.message = new _96f64885e87a(this), 
      this.navigator = new _e6634bcf3236(this), this.eventSource = new _4abf94ad6361(this), 
      this.attribute = new _09938c6972f7(this), this.url = new _c788eaf5e562(this), this.workers = new _94426ec53ef3(this), 
      this.location = new _c7ef1e5fe02d(this), this.storage = new _0914541b0582(this), 
      this.style = new _53fafe06104c(this);
    }
    override(_b1776b8882e0, _4522fc282214, _404f414d01f7, _23ac0537eeb3) {
      let _06ee9fa6f608 = this.wrap(_b1776b8882e0, _4522fc282214, _404f414d01f7, _23ac0537eeb3);
      return _b1776b8882e0[_4522fc282214] = _06ee9fa6f608, _06ee9fa6f608;
    }
    overrideDescriptor(_b1776b8882e0, _4522fc282214, _404f414d01f7 = {}) {
      let _23ac0537eeb3 = this.wrapDescriptor(_b1776b8882e0, _4522fc282214, _404f414d01f7);
      return _23ac0537eeb3 ? (this.nativeMethods.defineProperty(_b1776b8882e0, _4522fc282214, _23ac0537eeb3), 
      _23ac0537eeb3) : {};
    }
    wrap(_b1776b8882e0, _4522fc282214, _404f414d01f7, _23ac0537eeb3 = !1) {
      let _06ee9fa6f608 = _b1776b8882e0[_4522fc282214];
      if (!_06ee9fa6f608) return _06ee9fa6f608;
      let _b7f6c481f580 = "prototype" in _06ee9fa6f608 ? function() {
        return _404f414d01f7(_06ee9fa6f608, this, [ ...arguments ]);
      } : {
        attach() {
          return _404f414d01f7(_06ee9fa6f608, this, [ ...arguments ]);
        }
      }.attach;
      return _23ac0537eeb3 && (_b7f6c481f580.prototype = _06ee9fa6f608.prototype, _b7f6c481f580.prototype.constructor = _b7f6c481f580), 
      this.emit("wrap", _06ee9fa6f608, _b7f6c481f580, _23ac0537eeb3), _b7f6c481f580;
    }
    wrapDescriptor(_b1776b8882e0, _4522fc282214, _404f414d01f7 = {}) {
      let _23ac0537eeb3 = this.nativeMethods.getOwnPropertyDescriptor(_b1776b8882e0, _4522fc282214);
      if (!_23ac0537eeb3) return !1;
      for (let _b1776b8882e0 in _404f414d01f7) _b1776b8882e0 in _23ac0537eeb3 && (_b1776b8882e0 === "get" || _b1776b8882e0 === "set" ? _23ac0537eeb3[_b1776b8882e0] = this.wrap(_23ac0537eeb3, _b1776b8882e0, _404f414d01f7[_b1776b8882e0]) : _23ac0537eeb3[_b1776b8882e0] = typeof _404f414d01f7[_b1776b8882e0] == "function" ? _404f414d01f7[_b1776b8882e0](_23ac0537eeb3[_b1776b8882e0]) : _404f414d01f7[_b1776b8882e0]);
      return _23ac0537eeb3;
    }
  }, _e07103c08d31 = _0238a9c0ce2e;
  typeof self == "object" && (self.UVClient = _0238a9c0ce2e);
})();
