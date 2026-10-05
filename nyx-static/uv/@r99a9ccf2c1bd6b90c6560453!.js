"use strict";

(() => {
  var _82344dbcb8cc = Object.create;
  var _361d506d96b6 = Object.defineProperty;
  var _975aace6d4ba = Object.getOwnPropertyDescriptor;
  var _25c9e28880a6 = Object.getOwnPropertyNames;
  var _0379e95aaabd = Object.getPrototypeOf, _d92d6e54f516 = Object.prototype.hasOwnProperty;
  var et = (_82344dbcb8cc, _361d506d96b6) => () => (_361d506d96b6 || _82344dbcb8cc((_361d506d96b6 = {
    exports: {}
  }).exports, _361d506d96b6), _361d506d96b6.exports);
  var tt = (_82344dbcb8cc, _0379e95aaabd, _0d3402e587ac, _cd61c2c759b1) => {
    if (_0379e95aaabd && typeof _0379e95aaabd == "object" || typeof _0379e95aaabd == "function") for (let _5d2f90686d0b of _25c9e28880a6(_0379e95aaabd)) !_d92d6e54f516.call(_82344dbcb8cc, _5d2f90686d0b) && _5d2f90686d0b !== _0d3402e587ac && _361d506d96b6(_82344dbcb8cc, _5d2f90686d0b, {
      get: () => _0379e95aaabd[_5d2f90686d0b],
      enumerable: !(_cd61c2c759b1 = _975aace6d4ba(_0379e95aaabd, _5d2f90686d0b)) || _cd61c2c759b1.enumerable
    });
    return _82344dbcb8cc;
  };
  var m = (_975aace6d4ba, _25c9e28880a6, _d92d6e54f516) => (_d92d6e54f516 = _975aace6d4ba != null ? _82344dbcb8cc(_0379e95aaabd(_975aace6d4ba)) : {}, 
  tt(_25c9e28880a6 || !_975aace6d4ba || !_975aace6d4ba.__esModule ? _361d506d96b6(_d92d6e54f516, "default", {
    value: _975aace6d4ba,
    enumerable: !0
  }) : _d92d6e54f516, _975aace6d4ba));
  var _0d3402e587ac = et((_82344dbcb8cc, _361d506d96b6) => {
    "use strict";
    var _975aace6d4ba = typeof Reflect == "object" ? Reflect : null, _25c9e28880a6 = _975aace6d4ba && typeof _975aace6d4ba.apply == "function" ? _975aace6d4ba.apply : function(_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) {
      return Function.prototype.apply.call(_82344dbcb8cc, _361d506d96b6, _975aace6d4ba);
    }, _0379e95aaabd;
    _975aace6d4ba && typeof _975aace6d4ba.ownKeys == "function" ? _0379e95aaabd = _975aace6d4ba.ownKeys : Object.getOwnPropertySymbols ? _0379e95aaabd = function(_82344dbcb8cc) {
      return Object.getOwnPropertyNames(_82344dbcb8cc).concat(Object.getOwnPropertySymbols(_82344dbcb8cc));
    } : _0379e95aaabd = function(_82344dbcb8cc) {
      return Object.getOwnPropertyNames(_82344dbcb8cc);
    };
    function rt(_82344dbcb8cc) {
      console && console.warn && console.warn(_82344dbcb8cc);
    }
    var _d92d6e54f516 = Number.isNaN || function(_82344dbcb8cc) {
      return _82344dbcb8cc !== _82344dbcb8cc;
    };
    function d() {
      d.init.call(this);
    }
    _361d506d96b6.exports = d;
    _361d506d96b6.exports.once = st;
    d.EventEmitter = d;
    d.prototype._events = void 0;
    d.prototype._eventsCount = 0;
    d.prototype._maxListeners = void 0;
    var _0d3402e587ac = 10;
    function P(_82344dbcb8cc) {
      if (typeof _82344dbcb8cc != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof _82344dbcb8cc);
    }
    Object.defineProperty(d, "defaultMaxListeners", {
      enumerable: !0,
      get: function() {
        return _0d3402e587ac;
      },
      set: function(_82344dbcb8cc) {
        if (typeof _82344dbcb8cc != "number" || _82344dbcb8cc < 0 || _d92d6e54f516(_82344dbcb8cc)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + _82344dbcb8cc + ".");
        _0d3402e587ac = _82344dbcb8cc;
      }
    });
    d.init = function() {
      (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), 
      this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
    };
    d.prototype.setMaxListeners = function(_82344dbcb8cc) {
      if (typeof _82344dbcb8cc != "number" || _82344dbcb8cc < 0 || _d92d6e54f516(_82344dbcb8cc)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + _82344dbcb8cc + ".");
      return this._maxListeners = _82344dbcb8cc, this;
    };
    function J(_82344dbcb8cc) {
      return _82344dbcb8cc._maxListeners === void 0 ? d.defaultMaxListeners : _82344dbcb8cc._maxListeners;
    }
    d.prototype.getMaxListeners = function() {
      return J(this);
    };
    d.prototype.emit = function(_82344dbcb8cc) {
      for (var _361d506d96b6 = [], _975aace6d4ba = 1; _975aace6d4ba < arguments.length; _975aace6d4ba++) _361d506d96b6.push(arguments[_975aace6d4ba]);
      var _0379e95aaabd = _82344dbcb8cc === "error", _d92d6e54f516 = this._events;
      if (_d92d6e54f516 !== void 0) _0379e95aaabd = _0379e95aaabd && _d92d6e54f516.error === void 0; else if (!_0379e95aaabd) return !1;
      if (_0379e95aaabd) {
        var _0d3402e587ac;
        if (_361d506d96b6.length > 0 && (_0d3402e587ac = _361d506d96b6[0]), _0d3402e587ac instanceof Error) throw _0d3402e587ac;
        var _cd61c2c759b1 = new Error("Unhandled error." + (_0d3402e587ac ? " (" + _0d3402e587ac.message + ")" : ""));
        throw _cd61c2c759b1.context = _0d3402e587ac, _cd61c2c759b1;
      }
      var _5d2f90686d0b = _d92d6e54f516[_82344dbcb8cc];
      if (_5d2f90686d0b === void 0) return !1;
      if (typeof _5d2f90686d0b == "function") _25c9e28880a6(_5d2f90686d0b, this, _361d506d96b6); else for (var _6a7610c279e1 = _5d2f90686d0b.length, _09844238d1a1 = re(_5d2f90686d0b, _6a7610c279e1), _975aace6d4ba = 0; _975aace6d4ba < _6a7610c279e1; ++_975aace6d4ba) _25c9e28880a6(_09844238d1a1[_975aace6d4ba], this, _361d506d96b6);
      return !0;
    };
    function Y(_82344dbcb8cc, _361d506d96b6, _975aace6d4ba, _25c9e28880a6) {
      var _0379e95aaabd, _d92d6e54f516, _0d3402e587ac;
      if (P(_975aace6d4ba), _d92d6e54f516 = _82344dbcb8cc._events, _d92d6e54f516 === void 0 ? (_d92d6e54f516 = _82344dbcb8cc._events = Object.create(null), 
      _82344dbcb8cc._eventsCount = 0) : (_d92d6e54f516.newListener !== void 0 && (_82344dbcb8cc.emit("newListener", _361d506d96b6, _975aace6d4ba.listener ? _975aace6d4ba.listener : _975aace6d4ba), 
      _d92d6e54f516 = _82344dbcb8cc._events), _0d3402e587ac = _d92d6e54f516[_361d506d96b6]), 
      _0d3402e587ac === void 0) _0d3402e587ac = _d92d6e54f516[_361d506d96b6] = _975aace6d4ba, 
      ++_82344dbcb8cc._eventsCount; else if (typeof _0d3402e587ac == "function" ? _0d3402e587ac = _d92d6e54f516[_361d506d96b6] = _25c9e28880a6 ? [ _975aace6d4ba, _0d3402e587ac ] : [ _0d3402e587ac, _975aace6d4ba ] : _25c9e28880a6 ? _0d3402e587ac.unshift(_975aace6d4ba) : _0d3402e587ac.push(_975aace6d4ba), 
      _0379e95aaabd = J(_82344dbcb8cc), _0379e95aaabd > 0 && _0d3402e587ac.length > _0379e95aaabd && !_0d3402e587ac.warned) {
        _0d3402e587ac.warned = !0;
        var _cd61c2c759b1 = new Error("Possible EventEmitter memory leak detected. " + _0d3402e587ac.length + " " + String(_361d506d96b6) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        _cd61c2c759b1.name = "MaxListenersExceededWarning", _cd61c2c759b1.emitter = _82344dbcb8cc, 
        _cd61c2c759b1.type = _361d506d96b6, _cd61c2c759b1.count = _0d3402e587ac.length, 
        rt(_cd61c2c759b1);
      }
      return _82344dbcb8cc;
    }
    d.prototype.addListener = function(_82344dbcb8cc, _361d506d96b6) {
      return Y(this, _82344dbcb8cc, _361d506d96b6, !1);
    };
    d.prototype.on = d.prototype.addListener;
    d.prototype.prependListener = function(_82344dbcb8cc, _361d506d96b6) {
      return Y(this, _82344dbcb8cc, _361d506d96b6, !0);
    };
    function ot() {
      if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 
      arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
    }
    function Z(_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) {
      var _25c9e28880a6 = {
        fired: !1,
        wrapFn: void 0,
        target: _82344dbcb8cc,
        type: _361d506d96b6,
        listener: _975aace6d4ba
      }, _0379e95aaabd = ot.bind(_25c9e28880a6);
      return _0379e95aaabd.listener = _975aace6d4ba, _25c9e28880a6.wrapFn = _0379e95aaabd, 
      _0379e95aaabd;
    }
    d.prototype.once = function(_82344dbcb8cc, _361d506d96b6) {
      return P(_361d506d96b6), this.on(_82344dbcb8cc, Z(this, _82344dbcb8cc, _361d506d96b6)), 
      this;
    };
    d.prototype.prependOnceListener = function(_82344dbcb8cc, _361d506d96b6) {
      return P(_361d506d96b6), this.prependListener(_82344dbcb8cc, Z(this, _82344dbcb8cc, _361d506d96b6)), 
      this;
    };
    d.prototype.removeListener = function(_82344dbcb8cc, _361d506d96b6) {
      var _975aace6d4ba, _25c9e28880a6, _0379e95aaabd, _d92d6e54f516, _0d3402e587ac;
      if (P(_361d506d96b6), _25c9e28880a6 = this._events, _25c9e28880a6 === void 0) return this;
      if (_975aace6d4ba = _25c9e28880a6[_82344dbcb8cc], _975aace6d4ba === void 0) return this;
      if (_975aace6d4ba === _361d506d96b6 || _975aace6d4ba.listener === _361d506d96b6) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete _25c9e28880a6[_82344dbcb8cc], 
      _25c9e28880a6.removeListener && this.emit("removeListener", _82344dbcb8cc, _975aace6d4ba.listener || _361d506d96b6)); else if (typeof _975aace6d4ba != "function") {
        for (_0379e95aaabd = -1, _d92d6e54f516 = _975aace6d4ba.length - 1; _d92d6e54f516 >= 0; _d92d6e54f516--) if (_975aace6d4ba[_d92d6e54f516] === _361d506d96b6 || _975aace6d4ba[_d92d6e54f516].listener === _361d506d96b6) {
          _0d3402e587ac = _975aace6d4ba[_d92d6e54f516].listener, _0379e95aaabd = _d92d6e54f516;
          break;
        }
        if (_0379e95aaabd < 0) return this;
        _0379e95aaabd === 0 ? _975aace6d4ba.shift() : nt(_975aace6d4ba, _0379e95aaabd), 
        _975aace6d4ba.length === 1 && (_25c9e28880a6[_82344dbcb8cc] = _975aace6d4ba[0]), 
        _25c9e28880a6.removeListener !== void 0 && this.emit("removeListener", _82344dbcb8cc, _0d3402e587ac || _361d506d96b6);
      }
      return this;
    };
    d.prototype.off = d.prototype.removeListener;
    d.prototype.removeAllListeners = function(_82344dbcb8cc) {
      var _361d506d96b6, _975aace6d4ba, _25c9e28880a6;
      if (_975aace6d4ba = this._events, _975aace6d4ba === void 0) return this;
      if (_975aace6d4ba.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), 
      this._eventsCount = 0) : _975aace6d4ba[_82344dbcb8cc] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete _975aace6d4ba[_82344dbcb8cc]), 
      this;
      if (arguments.length === 0) {
        var _0379e95aaabd = Object.keys(_975aace6d4ba), _d92d6e54f516;
        for (_25c9e28880a6 = 0; _25c9e28880a6 < _0379e95aaabd.length; ++_25c9e28880a6) _d92d6e54f516 = _0379e95aaabd[_25c9e28880a6], 
        _d92d6e54f516 !== "removeListener" && this.removeAllListeners(_d92d6e54f516);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), 
        this._eventsCount = 0, this;
      }
      if (_361d506d96b6 = _975aace6d4ba[_82344dbcb8cc], typeof _361d506d96b6 == "function") this.removeListener(_82344dbcb8cc, _361d506d96b6); else if (_361d506d96b6 !== void 0) for (_25c9e28880a6 = _361d506d96b6.length - 1; _25c9e28880a6 >= 0; _25c9e28880a6--) this.removeListener(_82344dbcb8cc, _361d506d96b6[_25c9e28880a6]);
      return this;
    };
    function ee(_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) {
      var _25c9e28880a6 = _82344dbcb8cc._events;
      if (_25c9e28880a6 === void 0) return [];
      var _0379e95aaabd = _25c9e28880a6[_361d506d96b6];
      return _0379e95aaabd === void 0 ? [] : typeof _0379e95aaabd == "function" ? _975aace6d4ba ? [ _0379e95aaabd.listener || _0379e95aaabd ] : [ _0379e95aaabd ] : _975aace6d4ba ? it(_0379e95aaabd) : re(_0379e95aaabd, _0379e95aaabd.length);
    }
    d.prototype.listeners = function(_82344dbcb8cc) {
      return ee(this, _82344dbcb8cc, !0);
    };
    d.prototype.rawListeners = function(_82344dbcb8cc) {
      return ee(this, _82344dbcb8cc, !1);
    };
    d.listenerCount = function(_82344dbcb8cc, _361d506d96b6) {
      return typeof _82344dbcb8cc.listenerCount == "function" ? _82344dbcb8cc.listenerCount(_361d506d96b6) : te.call(_82344dbcb8cc, _361d506d96b6);
    };
    d.prototype.listenerCount = te;
    function te(_82344dbcb8cc) {
      var _361d506d96b6 = this._events;
      if (_361d506d96b6 !== void 0) {
        var _975aace6d4ba = _361d506d96b6[_82344dbcb8cc];
        if (typeof _975aace6d4ba == "function") return 1;
        if (_975aace6d4ba !== void 0) return _975aace6d4ba.length;
      }
      return 0;
    }
    d.prototype.eventNames = function() {
      return this._eventsCount > 0 ? _0379e95aaabd(this._events) : [];
    };
    function re(_82344dbcb8cc, _361d506d96b6) {
      for (var _975aace6d4ba = new Array(_361d506d96b6), _25c9e28880a6 = 0; _25c9e28880a6 < _361d506d96b6; ++_25c9e28880a6) _975aace6d4ba[_25c9e28880a6] = _82344dbcb8cc[_25c9e28880a6];
      return _975aace6d4ba;
    }
    function nt(_82344dbcb8cc, _361d506d96b6) {
      for (;_361d506d96b6 + 1 < _82344dbcb8cc.length; _361d506d96b6++) _82344dbcb8cc[_361d506d96b6] = _82344dbcb8cc[_361d506d96b6 + 1];
      _82344dbcb8cc.pop();
    }
    function it(_82344dbcb8cc) {
      for (var _361d506d96b6 = new Array(_82344dbcb8cc.length), _975aace6d4ba = 0; _975aace6d4ba < _361d506d96b6.length; ++_975aace6d4ba) _361d506d96b6[_975aace6d4ba] = _82344dbcb8cc[_975aace6d4ba].listener || _82344dbcb8cc[_975aace6d4ba];
      return _361d506d96b6;
    }
    function st(_82344dbcb8cc, _361d506d96b6) {
      return new Promise(function(_975aace6d4ba, _25c9e28880a6) {
        function n(_975aace6d4ba) {
          _82344dbcb8cc.removeListener(_361d506d96b6, o), _25c9e28880a6(_975aace6d4ba);
        }
        function o() {
          typeof _82344dbcb8cc.removeListener == "function" && _82344dbcb8cc.removeListener("error", n), 
          _975aace6d4ba([].slice.call(arguments));
        }
        oe(_82344dbcb8cc, _361d506d96b6, o, {
          once: !0
        }), _361d506d96b6 !== "error" && at(_82344dbcb8cc, n, {
          once: !0
        });
      });
    }
    function at(_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) {
      typeof _82344dbcb8cc.on == "function" && oe(_82344dbcb8cc, "error", _361d506d96b6, _975aace6d4ba);
    }
    function oe(_82344dbcb8cc, _361d506d96b6, _975aace6d4ba, _25c9e28880a6) {
      if (typeof _82344dbcb8cc.on == "function") _25c9e28880a6.once ? _82344dbcb8cc.once(_361d506d96b6, _975aace6d4ba) : _82344dbcb8cc.on(_361d506d96b6, _975aace6d4ba); else if (typeof _82344dbcb8cc.addEventListener == "function") _82344dbcb8cc.addEventListener(_361d506d96b6, function n(_0379e95aaabd) {
        _25c9e28880a6.once && _82344dbcb8cc.removeEventListener(_361d506d96b6, n), _975aace6d4ba(_0379e95aaabd);
      }); else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof _82344dbcb8cc);
    }
  });
  var _cd61c2c759b1 = m(_0d3402e587ac(), 1);
  var _5d2f90686d0b = class {
    #_82344dbcb8cc;
    #_361d506d96b6;
    constructor(_82344dbcb8cc = {}, _361d506d96b6 = null, _975aace6d4ba = null) {
      this.#_82344dbcb8cc = !1, this.#_361d506d96b6 = null, this.data = _82344dbcb8cc, 
      this.target = _361d506d96b6, this.that = _975aace6d4ba;
    }
    get intercepted() {
      return this.#_82344dbcb8cc;
    }
    get returnValue() {
      return this.#_361d506d96b6;
    }
    respondWith(_82344dbcb8cc) {
      this.#_361d506d96b6 = _82344dbcb8cc, this.#_82344dbcb8cc = !0;
    }
  }, _6a7610c279e1 = _5d2f90686d0b;
  var _09844238d1a1 = class extends _cd61c2c759b1.default {
    constructor(_82344dbcb8cc) {
      super(), this.ctx = _82344dbcb8cc, this.window = _82344dbcb8cc.window, this.document = this.window.document, 
      this.Document = this.window.Document || {}, this.DOMParser = this.window.DOMParser || {}, 
      this.docProto = this.Document.prototype || {}, this.domProto = this.DOMParser.prototype || {}, 
      this.title = _82344dbcb8cc.nativeMethods.getOwnPropertyDescriptor(this.docProto, "title"), 
      this.cookie = _82344dbcb8cc.nativeMethods.getOwnPropertyDescriptor(this.docProto, "cookie"), 
      this.referrer = _82344dbcb8cc.nativeMethods.getOwnPropertyDescriptor(this.docProto, "referrer"), 
      this.domain = _82344dbcb8cc.nativeMethods.getOwnPropertyDescriptor(this.docProto, "domain"), 
      this.documentURI = _82344dbcb8cc.nativeMethods.getOwnPropertyDescriptor(this.docProto, "documentURI"), 
      this.write = this.docProto.write, this.writeln = this.docProto.writeln, this.querySelector = this.docProto.querySelector, 
      this.querySelectorAll = this.docProto.querySelectorAll, this.parseFromString = this.domProto.parseFromString, 
      this.URL = _82344dbcb8cc.nativeMethods.getOwnPropertyDescriptor(this.docProto, "URL");
    }
    overrideParseFromString() {
      this.ctx.override(this.domProto, "parseFromString", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (2 > _975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6, _0379e95aaabd] = _975aace6d4ba, _d92d6e54f516 = new _6a7610c279e1({
          string: _25c9e28880a6,
          type: _0379e95aaabd
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("parseFromString", _d92d6e54f516), _d92d6e54f516.intercepted ? _d92d6e54f516.returnValue : _d92d6e54f516.target.call(_d92d6e54f516.that, _d92d6e54f516.data.string, _d92d6e54f516.data.type);
      });
    }
    overrideQuerySelector() {
      this.ctx.override(this.docProto, "querySelector", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (!_975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6] = _975aace6d4ba, _0379e95aaabd = new _6a7610c279e1({
          selectors: _25c9e28880a6
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("querySelector", _0379e95aaabd), _0379e95aaabd.intercepted ? _0379e95aaabd.returnValue : _0379e95aaabd.target.call(_0379e95aaabd.that, _0379e95aaabd.data.selectors);
      });
    }
    overrideDomain() {
      this.ctx.overrideDescriptor(this.docProto, "domain", {
        get: (_82344dbcb8cc, _361d506d96b6) => {
          let _975aace6d4ba = new _6a7610c279e1({
            value: _82344dbcb8cc.call(_361d506d96b6)
          }, _82344dbcb8cc, _361d506d96b6);
          return this.emit("getDomain", _975aace6d4ba), _975aace6d4ba.intercepted ? _975aace6d4ba.returnValue : _975aace6d4ba.data.value;
        },
        set: (_82344dbcb8cc, _361d506d96b6, [_975aace6d4ba]) => {
          let _25c9e28880a6 = new _6a7610c279e1({
            value: _975aace6d4ba
          }, _82344dbcb8cc, _361d506d96b6);
          return this.emit("setDomain", _25c9e28880a6), _25c9e28880a6.intercepted ? _25c9e28880a6.returnValue : _25c9e28880a6.target.call(_25c9e28880a6.that, _25c9e28880a6.data.value);
        }
      });
    }
    overrideReferrer() {
      this.ctx.overrideDescriptor(this.docProto, "referrer", {
        get: (_82344dbcb8cc, _361d506d96b6) => {
          let _975aace6d4ba = new _6a7610c279e1({
            value: _82344dbcb8cc.call(_361d506d96b6)
          }, _82344dbcb8cc, _361d506d96b6);
          return this.emit("referrer", _975aace6d4ba), _975aace6d4ba.intercepted ? _975aace6d4ba.returnValue : _975aace6d4ba.data.value;
        }
      });
    }
    overrideCreateTreeWalker() {
      this.ctx.override(this.docProto, "createTreeWalker", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (!_975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6, _0379e95aaabd = 4294967295, _d92d6e54f516, _0d3402e587ac] = _975aace6d4ba, _cd61c2c759b1 = new _6a7610c279e1({
          root: _25c9e28880a6,
          show: _0379e95aaabd,
          filter: _d92d6e54f516,
          expandEntityReferences: _0d3402e587ac
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("createTreeWalker", _cd61c2c759b1), _cd61c2c759b1.intercepted ? _cd61c2c759b1.returnValue : _cd61c2c759b1.target.call(_cd61c2c759b1.that, _cd61c2c759b1.data.root, _cd61c2c759b1.data.show, _cd61c2c759b1.data.filter, _cd61c2c759b1.data.expandEntityReferences);
      });
    }
    overrideWrite() {
      this.ctx.override(this.docProto, "write", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (!_975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [..._25c9e28880a6] = _975aace6d4ba, _0379e95aaabd = new _6a7610c279e1({
          html: _25c9e28880a6
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("write", _0379e95aaabd), _0379e95aaabd.intercepted ? _0379e95aaabd.returnValue : _0379e95aaabd.target.apply(_0379e95aaabd.that, _0379e95aaabd.data.html);
      }), this.ctx.override(this.docProto, "writeln", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (!_975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [..._25c9e28880a6] = _975aace6d4ba, _0379e95aaabd = new _6a7610c279e1({
          html: _25c9e28880a6
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("writeln", _0379e95aaabd), _0379e95aaabd.intercepted ? _0379e95aaabd.returnValue : _0379e95aaabd.target.apply(_0379e95aaabd.that, _0379e95aaabd.data.html);
      });
    }
    overrideDocumentURI() {
      this.ctx.overrideDescriptor(this.docProto, "documentURI", {
        get: (_82344dbcb8cc, _361d506d96b6) => {
          let _975aace6d4ba = new _6a7610c279e1({
            value: _82344dbcb8cc.call(_361d506d96b6)
          }, _82344dbcb8cc, _361d506d96b6);
          return this.emit("documentURI", _975aace6d4ba), _975aace6d4ba.intercepted ? _975aace6d4ba.returnValue : _975aace6d4ba.data.value;
        }
      });
    }
    overrideURL() {
      this.ctx.overrideDescriptor(this.docProto, "URL", {
        get: (_82344dbcb8cc, _361d506d96b6) => {
          let _975aace6d4ba = new _6a7610c279e1({
            value: _82344dbcb8cc.call(_361d506d96b6)
          }, _82344dbcb8cc, _361d506d96b6);
          return this.emit("url", _975aace6d4ba), _975aace6d4ba.intercepted ? _975aace6d4ba.returnValue : _975aace6d4ba.data.value;
        }
      });
    }
    overrideCookie() {
      this.ctx.overrideDescriptor(this.docProto, "cookie", {
        get: (_82344dbcb8cc, _361d506d96b6) => {
          let _975aace6d4ba = new _6a7610c279e1({
            value: _82344dbcb8cc.call(_361d506d96b6)
          }, _82344dbcb8cc, _361d506d96b6);
          return this.emit("getCookie", _975aace6d4ba), _975aace6d4ba.intercepted ? _975aace6d4ba.returnValue : _975aace6d4ba.data.value;
        },
        set: (_82344dbcb8cc, _361d506d96b6, [_975aace6d4ba]) => {
          let _25c9e28880a6 = new _6a7610c279e1({
            value: _975aace6d4ba
          }, _82344dbcb8cc, _361d506d96b6);
          return this.emit("setCookie", _25c9e28880a6), _25c9e28880a6.intercepted ? _25c9e28880a6.returnValue : _25c9e28880a6.target.call(_25c9e28880a6.that, _25c9e28880a6.data.value);
        }
      });
    }
    overrideTitle() {
      this.ctx.overrideDescriptor(this.docProto, "title", {
        get: (_82344dbcb8cc, _361d506d96b6) => {
          let _975aace6d4ba = new _6a7610c279e1({
            value: _82344dbcb8cc.call(_361d506d96b6)
          }, _82344dbcb8cc, _361d506d96b6);
          return this.emit("getTitle", _975aace6d4ba), _975aace6d4ba.intercepted ? _975aace6d4ba.returnValue : _975aace6d4ba.data.value;
        },
        set: (_82344dbcb8cc, _361d506d96b6, [_975aace6d4ba]) => {
          let _25c9e28880a6 = new _6a7610c279e1({
            value: _975aace6d4ba
          }, _82344dbcb8cc, _361d506d96b6);
          return this.emit("setTitle", _25c9e28880a6), _25c9e28880a6.intercepted ? _25c9e28880a6.returnValue : _25c9e28880a6.target.call(_25c9e28880a6.that, _25c9e28880a6.data.value);
        }
      });
    }
  }, _c94bb5133033 = _09844238d1a1;
  var _45f4c4d04d7a = m(_0d3402e587ac(), 1);
  var _ff483495f71c = class extends _45f4c4d04d7a.default {
    constructor(_82344dbcb8cc) {
      super(), this.ctx = _82344dbcb8cc, this.window = _82344dbcb8cc.window, this.Audio = this.window.Audio, 
      this.Element = this.window.Element, this.elemProto = this.Element ? this.Element.prototype : {}, 
      this.innerHTML = _82344dbcb8cc.nativeMethods.getOwnPropertyDescriptor(this.elemProto, "innerHTML"), 
      this.outerHTML = _82344dbcb8cc.nativeMethods.getOwnPropertyDescriptor(this.elemProto, "outerHTML"), 
      this.setAttribute = this.elemProto.setAttribute, this.getAttribute = this.elemProto.getAttribute, 
      this.removeAttribute = this.elemProto.removeAttribute, this.hasAttribute = this.elemProto.hasAttribute, 
      this.querySelector = this.elemProto.querySelector, this.querySelectorAll = this.elemProto.querySelectorAll, 
      this.insertAdjacentHTML = this.elemProto.insertAdjacentHTML, this.insertAdjacentText = this.elemProto.insertAdjacentText;
    }
    overrideQuerySelector() {
      this.ctx.override(this.elemProto, "querySelector", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (!_975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6] = _975aace6d4ba, _0379e95aaabd = new _6a7610c279e1({
          selectors: _25c9e28880a6
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("querySelector", _0379e95aaabd), _0379e95aaabd.intercepted ? _0379e95aaabd.returnValue : _0379e95aaabd.target.call(_0379e95aaabd.that, _0379e95aaabd.data.selectors);
      });
    }
    overrideAttribute() {
      this.ctx.override(this.elemProto, "getAttribute", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (!_975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6] = _975aace6d4ba, _0379e95aaabd = new _6a7610c279e1({
          name: _25c9e28880a6
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("getAttribute", _0379e95aaabd), _0379e95aaabd.intercepted ? _0379e95aaabd.returnValue : _0379e95aaabd.target.call(_0379e95aaabd.that, _0379e95aaabd.data.name);
      }), this.ctx.override(this.elemProto, "setAttribute", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (2 > _975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6, _0379e95aaabd] = _975aace6d4ba, _d92d6e54f516 = new _6a7610c279e1({
          name: _25c9e28880a6,
          value: _0379e95aaabd
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("setAttribute", _d92d6e54f516), _d92d6e54f516.intercepted ? _d92d6e54f516.returnValue : _d92d6e54f516.target.call(_d92d6e54f516.that, _d92d6e54f516.data.name, _d92d6e54f516.data.value);
      }), this.ctx.override(this.elemProto, "hasAttribute", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (!_975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6] = _975aace6d4ba, _0379e95aaabd = new _6a7610c279e1({
          name: _25c9e28880a6
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("hasAttribute", _0379e95aaabd), _0379e95aaabd.intercepted ? _0379e95aaabd.returnValue : _0379e95aaabd.target.call(_0379e95aaabd.that, _0379e95aaabd.data.name);
      }), this.ctx.override(this.elemProto, "removeAttribute", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (!_975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6] = _975aace6d4ba, _0379e95aaabd = new _6a7610c279e1({
          name: _25c9e28880a6
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("removeAttribute", _0379e95aaabd), _0379e95aaabd.intercepted ? _0379e95aaabd.returnValue : _0379e95aaabd.target.call(_0379e95aaabd.that, _0379e95aaabd.data.name);
      });
    }
    overrideAudio() {
      this.ctx.override(this.window, "Audio", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (!_975aace6d4ba.length) return new _82344dbcb8cc(..._975aace6d4ba);
        let [_25c9e28880a6] = _975aace6d4ba, _0379e95aaabd = new _6a7610c279e1({
          url: _25c9e28880a6
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("audio", _0379e95aaabd), _0379e95aaabd.intercepted ? _0379e95aaabd.returnValue : new _0379e95aaabd.target(_0379e95aaabd.data.url);
      }, !0);
    }
    overrideHtml() {
      this.hookProperty(this.Element, "innerHTML", {
        get: (_82344dbcb8cc, _361d506d96b6) => {
          let _975aace6d4ba = new _6a7610c279e1({
            value: _82344dbcb8cc.call(_361d506d96b6)
          }, _82344dbcb8cc, _361d506d96b6);
          return this.emit("getInnerHTML", _975aace6d4ba), _975aace6d4ba.intercepted ? _975aace6d4ba.returnValue : _975aace6d4ba.data.value;
        },
        set: (_82344dbcb8cc, _361d506d96b6, [_975aace6d4ba]) => {
          let _25c9e28880a6 = new _6a7610c279e1({
            value: _975aace6d4ba
          }, _82344dbcb8cc, _361d506d96b6);
          if (this.emit("setInnerHTML", _25c9e28880a6), _25c9e28880a6.intercepted) return _25c9e28880a6.returnValue;
          _82344dbcb8cc.call(_361d506d96b6, _25c9e28880a6.data.value);
        }
      }), this.hookProperty(this.Element, "outerHTML", {
        get: (_82344dbcb8cc, _361d506d96b6) => {
          let _975aace6d4ba = new _6a7610c279e1({
            value: _82344dbcb8cc.call(_361d506d96b6)
          }, _82344dbcb8cc, _361d506d96b6);
          return this.emit("getOuterHTML", _975aace6d4ba), _975aace6d4ba.intercepted ? _975aace6d4ba.returnValue : _975aace6d4ba.data.value;
        },
        set: (_82344dbcb8cc, _361d506d96b6, [_975aace6d4ba]) => {
          let _25c9e28880a6 = new _6a7610c279e1({
            value: _975aace6d4ba
          }, _82344dbcb8cc, _361d506d96b6);
          if (this.emit("setOuterHTML", _25c9e28880a6), _25c9e28880a6.intercepted) return _25c9e28880a6.returnValue;
          _82344dbcb8cc.call(_361d506d96b6, _25c9e28880a6.data.value);
        }
      });
    }
    overrideInsertAdjacentHTML() {
      this.ctx.override(this.elemProto, "insertAdjacentHTML", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (2 > _975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6, _0379e95aaabd] = _975aace6d4ba, _d92d6e54f516 = new _6a7610c279e1({
          position: _25c9e28880a6,
          html: _0379e95aaabd
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("insertAdjacentHTML", _d92d6e54f516), _d92d6e54f516.intercepted ? _d92d6e54f516.returnValue : _d92d6e54f516.target.call(_d92d6e54f516.that, _d92d6e54f516.data.position, _d92d6e54f516.data.html);
      });
    }
    overrideInsertAdjacentText() {
      this.ctx.override(this.elemProto, "insertAdjacentText", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (2 > _975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6, _0379e95aaabd] = _975aace6d4ba, _d92d6e54f516 = new _6a7610c279e1({
          position: _25c9e28880a6,
          text: _0379e95aaabd
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("insertAdjacentText", _d92d6e54f516), _d92d6e54f516.intercepted ? _d92d6e54f516.returnValue : _d92d6e54f516.target.call(_d92d6e54f516.that, _d92d6e54f516.data.position, _d92d6e54f516.data.text);
      });
    }
    hookProperty(_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) {
      if (!_82344dbcb8cc) return !1;
      if (this.ctx.nativeMethods.isArray(_82344dbcb8cc)) {
        for (let _25c9e28880a6 of _82344dbcb8cc) this.hookProperty(_25c9e28880a6, _361d506d96b6, _975aace6d4ba);
        return !0;
      }
      let _25c9e28880a6 = _82344dbcb8cc.prototype;
      return this.ctx.overrideDescriptor(_25c9e28880a6, _361d506d96b6, _975aace6d4ba), 
      !0;
    }
  }, _15005d961edf = _ff483495f71c;
  var _e0d4ede0a55d = m(_0d3402e587ac(), 1);
  var _53c812af4364 = class extends _e0d4ede0a55d.default {
    constructor(_82344dbcb8cc) {
      super(), this.ctx = _82344dbcb8cc, this.window = _82344dbcb8cc.window, this.Node = _82344dbcb8cc.window.Node || {}, 
      this.nodeProto = this.Node.prototype || {}, this.compareDocumentPosition = this.nodeProto.compareDocumentPosition, 
      this.contains = this.nodeProto.contains, this.insertBefore = this.nodeProto.insertBefore, 
      this.replaceChild = this.nodeProto.replaceChild, this.append = this.nodeProto.append, 
      this.appendChild = this.nodeProto.appendChild, this.removeChild = this.nodeProto.removeChild, 
      this.textContent = _82344dbcb8cc.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "textContent"), 
      this.parentNode = _82344dbcb8cc.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "parentNode"), 
      this.parentElement = _82344dbcb8cc.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "parentElement"), 
      this.childNodes = _82344dbcb8cc.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "childNodes"), 
      this.baseURI = _82344dbcb8cc.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "baseURI"), 
      this.previousSibling = _82344dbcb8cc.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "previousSibling"), 
      this.ownerDocument = _82344dbcb8cc.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "ownerDocument");
    }
    overrideTextContent() {
      this.ctx.overrideDescriptor(this.nodeProto, "textContent", {
        get: (_82344dbcb8cc, _361d506d96b6) => {
          let _975aace6d4ba = new _6a7610c279e1({
            value: _82344dbcb8cc.call(_361d506d96b6)
          }, _82344dbcb8cc, _361d506d96b6);
          return this.emit("getTextContent", _975aace6d4ba), _975aace6d4ba.intercepted ? _975aace6d4ba.returnValue : _975aace6d4ba.data.value;
        },
        set: (_82344dbcb8cc, _361d506d96b6, [_975aace6d4ba]) => {
          let _25c9e28880a6 = new _6a7610c279e1({
            value: _975aace6d4ba
          }, _82344dbcb8cc, _361d506d96b6);
          if (this.emit("setTextContent", _25c9e28880a6), _25c9e28880a6.intercepted) return _25c9e28880a6.returnValue;
          _82344dbcb8cc.call(_361d506d96b6, _25c9e28880a6.data.value);
        }
      });
    }
    overrideAppend() {
      this.ctx.override(this.nodeProto, "append", (_82344dbcb8cc, _361d506d96b6, [..._975aace6d4ba]) => {
        let _25c9e28880a6 = new _6a7610c279e1({
          nodes: _975aace6d4ba
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("append", _25c9e28880a6), _25c9e28880a6.intercepted ? _25c9e28880a6.returnValue : _25c9e28880a6.target.call(_25c9e28880a6.that, _25c9e28880a6.data.nodes);
      }), this.ctx.override(this.nodeProto, "appendChild", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (!_975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6] = _975aace6d4ba, _0379e95aaabd = new _6a7610c279e1({
          node: _25c9e28880a6
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("appendChild", _0379e95aaabd), _0379e95aaabd.intercepted ? _0379e95aaabd.returnValue : _0379e95aaabd.target.call(_0379e95aaabd.that, _0379e95aaabd.data.node);
      });
    }
    overrideBaseURI() {
      this.ctx.overrideDescriptor(this.nodeProto, "baseURI", {
        get: (_82344dbcb8cc, _361d506d96b6) => {
          let _975aace6d4ba = new _6a7610c279e1({
            value: _82344dbcb8cc.call(_361d506d96b6)
          }, _82344dbcb8cc, _361d506d96b6);
          return this.emit("baseURI", _975aace6d4ba), _975aace6d4ba.intercepted ? _975aace6d4ba.returnValue : _975aace6d4ba.data.value;
        }
      });
    }
    overrideParent() {
      this.ctx.overrideDescriptor(this.nodeProto, "parentNode", {
        get: (_82344dbcb8cc, _361d506d96b6) => {
          let _975aace6d4ba = new _6a7610c279e1({
            node: _82344dbcb8cc.call(_361d506d96b6)
          }, _82344dbcb8cc, _361d506d96b6);
          return this.emit("parentNode", _975aace6d4ba), _975aace6d4ba.intercepted ? _975aace6d4ba.returnValue : _975aace6d4ba.data.node;
        }
      }), this.ctx.overrideDescriptor(this.nodeProto, "parentElement", {
        get: (_82344dbcb8cc, _361d506d96b6) => {
          let _975aace6d4ba = new _6a7610c279e1({
            element: _82344dbcb8cc.call(_361d506d96b6)
          }, _82344dbcb8cc, _361d506d96b6);
          return this.emit("parentElement", _975aace6d4ba), _975aace6d4ba.intercepted ? _975aace6d4ba.returnValue : _975aace6d4ba.data.node;
        }
      });
    }
    overrideOwnerDocument() {
      this.ctx.overrideDescriptor(this.nodeProto, "ownerDocument", {
        get: (_82344dbcb8cc, _361d506d96b6) => {
          let _975aace6d4ba = new _6a7610c279e1({
            document: _82344dbcb8cc.call(_361d506d96b6)
          }, _82344dbcb8cc, _361d506d96b6);
          return this.emit("ownerDocument", _975aace6d4ba), _975aace6d4ba.intercepted ? _975aace6d4ba.returnValue : _975aace6d4ba.data.document;
        }
      });
    }
    overrideCompareDocumentPosit1ion() {
      this.ctx.override(this.nodeProto, "compareDocumentPosition", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (!_975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6] = _975aace6d4ba, _0379e95aaabd = new _6a7610c279e1({
          node: _25c9e28880a6
        }, _82344dbcb8cc, _361d506d96b6);
        return _0379e95aaabd.intercepted ? _0379e95aaabd.returnValue : _0379e95aaabd.target.call(_0379e95aaabd.that, _0379e95aaabd.data.node);
      });
    }
    overrideChildMethods() {
      this.ctx.override(this.nodeProto, "removeChild");
    }
  }, _bbb76c978319 = _53c812af4364;
  var _afc440612c1d = m(_0d3402e587ac(), 1);
  var _49579e555c5e = class extends _afc440612c1d.default {
    constructor(_82344dbcb8cc) {
      super(), this.ctx = _82344dbcb8cc, this.window = _82344dbcb8cc.window, this.Attr = this.window.Attr || {}, 
      this.attrProto = this.Attr.prototype || {}, this.value = _82344dbcb8cc.nativeMethods.getOwnPropertyDescriptor(this.attrProto, "value"), 
      this.name = _82344dbcb8cc.nativeMethods.getOwnPropertyDescriptor(this.attrProto, "name"), 
      this.getNamedItem = this.attrProto.getNamedItem || null, this.setNamedItem = this.attrProto.setNamedItem || null, 
      this.removeNamedItem = this.attrProto.removeNamedItem || null, this.getNamedItemNS = this.attrProto.getNamedItemNS || null, 
      this.setNamedItemNS = this.attrProto.setNamedItemNS || null, this.removeNamedItemNS = this.attrProto.removeNamedItemNS || null, 
      this.item = this.attrProto.item || null;
    }
    overrideNameValue() {
      this.ctx.overrideDescriptor(this.attrProto, "name", {
        get: (_82344dbcb8cc, _361d506d96b6) => {
          let _975aace6d4ba = new _6a7610c279e1({
            value: _82344dbcb8cc.call(_361d506d96b6)
          }, _82344dbcb8cc, _361d506d96b6);
          return this.emit("name", _975aace6d4ba), _975aace6d4ba.intercepted ? _975aace6d4ba.returnValue : _975aace6d4ba.data.value;
        }
      }), this.ctx.overrideDescriptor(this.attrProto, "value", {
        get: (_82344dbcb8cc, _361d506d96b6) => {
          let _975aace6d4ba = new _6a7610c279e1({
            name: this.name.get.call(_361d506d96b6),
            value: _82344dbcb8cc.call(_361d506d96b6)
          }, _82344dbcb8cc, _361d506d96b6);
          return this.emit("getValue", _975aace6d4ba), _975aace6d4ba.intercepted ? _975aace6d4ba.returnValue : _975aace6d4ba.data.value;
        },
        set: (_82344dbcb8cc, _361d506d96b6, [_975aace6d4ba]) => {
          let _25c9e28880a6 = new _6a7610c279e1({
            name: this.name.get.call(_361d506d96b6),
            value: _975aace6d4ba
          }, _82344dbcb8cc, _361d506d96b6);
          if (this.emit("setValue", _25c9e28880a6), _25c9e28880a6.intercepted) return _25c9e28880a6.returnValue;
          _25c9e28880a6.target.call(_25c9e28880a6.that, _25c9e28880a6.data.value);
        }
      });
    }
    overrideItemMethods() {
      this.ctx.override(this.attrProto, "getNamedItem", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (!_975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6] = _975aace6d4ba, _0379e95aaabd = new _6a7610c279e1({
          name: _25c9e28880a6
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("getNamedItem", _0379e95aaabd), _0379e95aaabd.intercepted ? _0379e95aaabd.returnValue : _0379e95aaabd.target.call(_0379e95aaabd.that, _0379e95aaabd.data.name);
      }), this.ctx.override(this.attrProto, "setNamedItem", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (2 > _975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6, _0379e95aaabd] = _975aace6d4ba, _d92d6e54f516 = new _6a7610c279e1({
          name: _25c9e28880a6,
          value: _0379e95aaabd
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("setNamedItem", _d92d6e54f516), _d92d6e54f516.intercepted ? _d92d6e54f516.returnValue : _d92d6e54f516.target.call(_d92d6e54f516.that, _d92d6e54f516.data.name, _d92d6e54f516.data.value);
      }), this.ctx.override(this.attrProto, "removeNamedItem", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (!_975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6] = _975aace6d4ba, _0379e95aaabd = new _6a7610c279e1({
          name: _25c9e28880a6
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("removeNamedItem", _0379e95aaabd), _0379e95aaabd.intercepted ? _0379e95aaabd.returnValue : _0379e95aaabd.target.call(_0379e95aaabd.that, _0379e95aaabd.data.name);
      }), this.ctx.override(this.attrProto, "item", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (!_975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6] = _975aace6d4ba, _0379e95aaabd = new _6a7610c279e1({
          index: _25c9e28880a6
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("item", _0379e95aaabd), _0379e95aaabd.intercepted ? _0379e95aaabd.returnValue : _0379e95aaabd.target.call(_0379e95aaabd.that, _0379e95aaabd.data.name);
      }), this.ctx.override(this.attrProto, "getNamedItemNS", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (2 > _975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6, _0379e95aaabd] = _975aace6d4ba, _d92d6e54f516 = new _6a7610c279e1({
          namespace: _25c9e28880a6,
          localName: _0379e95aaabd
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("getNamedItemNS", _d92d6e54f516), _d92d6e54f516.intercepted ? _d92d6e54f516.returnValue : _d92d6e54f516.target.call(_d92d6e54f516.that, _d92d6e54f516.data.namespace, _d92d6e54f516.data.localName);
      }), this.ctx.override(this.attrProto, "setNamedItemNS", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (!_975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6] = _975aace6d4ba, _0379e95aaabd = new _6a7610c279e1({
          attr: _25c9e28880a6
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("setNamedItemNS", _0379e95aaabd), _0379e95aaabd.intercepted ? _0379e95aaabd.returnValue : _0379e95aaabd.target.call(_0379e95aaabd.that, _0379e95aaabd.data.name);
      }), this.ctx.override(this.attrProto, "removeNamedItemNS", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (2 > _975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6, _0379e95aaabd] = _975aace6d4ba, _d92d6e54f516 = new _6a7610c279e1({
          namespace: _25c9e28880a6,
          localName: _0379e95aaabd
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("removeNamedItemNS", _d92d6e54f516), _d92d6e54f516.intercepted ? _d92d6e54f516.returnValue : _d92d6e54f516.target.call(_d92d6e54f516.that, _d92d6e54f516.data.namespace, _d92d6e54f516.data.localName);
      });
    }
  }, _1b2c03745f50 = _49579e555c5e;
  var _86c947a95a3b = m(_0d3402e587ac(), 1);
  var _055df9115620 = class extends _86c947a95a3b.default {
    constructor(_82344dbcb8cc) {
      super(), this.ctx = _82344dbcb8cc, this.window = _82344dbcb8cc.window, this.Function = this.window.Function, 
      this.fnProto = this.Function.prototype, this.toString = this.fnProto.toString, this.fnStrings = _82344dbcb8cc.fnStrings, 
      this.call = this.fnProto.call, this.apply = this.fnProto.apply, this.bind = this.fnProto.bind;
    }
    overrideFunction() {
      this.ctx.override(this.window, "Function", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (!_975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let _25c9e28880a6 = _975aace6d4ba[_975aace6d4ba.length - 1], _0379e95aaabd = [];
        for (let _82344dbcb8cc = 0; _82344dbcb8cc < _975aace6d4ba.length - 1; _82344dbcb8cc++) _0379e95aaabd.push(_975aace6d4ba[_82344dbcb8cc]);
        let _d92d6e54f516 = new _6a7610c279e1({
          script: _25c9e28880a6,
          args: _0379e95aaabd
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("function", _d92d6e54f516), _d92d6e54f516.intercepted ? _d92d6e54f516.returnValue : _d92d6e54f516.target.call(_d92d6e54f516.that, ..._d92d6e54f516.data.args, _d92d6e54f516.data.script);
      }, !0);
    }
    overrideToString() {
      this.ctx.override(this.fnProto, "toString", (_82344dbcb8cc, _361d506d96b6) => {
        let _975aace6d4ba = new _6a7610c279e1({
          fn: _361d506d96b6
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("toString", _975aace6d4ba), _975aace6d4ba.intercepted ? _975aace6d4ba.returnValue : _975aace6d4ba.target.call(_975aace6d4ba.data.fn);
      });
    }
  }, _89cac9590f58 = _055df9115620;
  var _c759a5b3fb66 = m(_0d3402e587ac(), 1);
  var _ac078065594c = class extends _c759a5b3fb66.default {
    constructor(_82344dbcb8cc) {
      super(), this.ctx = _82344dbcb8cc, this.window = _82344dbcb8cc.window, this.Object = this.window.Object, 
      this.getOwnPropertyDescriptors = this.Object.getOwnPropertyDescriptors, this.getOwnPropertyDescriptor = this.Object.getOwnPropertyDescriptor, 
      this.getOwnPropertyNames = this.Object.getOwnPropertyNames;
    }
    overrideGetPropertyNames() {
      this.ctx.override(this.Object, "getOwnPropertyNames", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (!_975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6] = _975aace6d4ba, _0379e95aaabd = new _6a7610c279e1({
          names: _82344dbcb8cc.call(_361d506d96b6, _25c9e28880a6)
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("getOwnPropertyNames", _0379e95aaabd), _0379e95aaabd.intercepted ? _0379e95aaabd.returnValue : _0379e95aaabd.data.names;
      });
    }
    overrideGetOwnPropertyDescriptors() {
      this.ctx.override(this.Object, "getOwnPropertyDescriptors", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (!_975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6] = _975aace6d4ba, _0379e95aaabd = new _6a7610c279e1({
          descriptors: _82344dbcb8cc.call(_361d506d96b6, _25c9e28880a6)
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("getOwnPropertyDescriptors", _0379e95aaabd), _0379e95aaabd.intercepted ? _0379e95aaabd.returnValue : _0379e95aaabd.data.descriptors;
      });
    }
  }, _f5a720c0d799 = _ac078065594c;
  var _923cf9f0d147 = m(_0d3402e587ac(), 1);
  var _db7005fb9836 = class extends _923cf9f0d147.default {
    constructor(_82344dbcb8cc) {
      super(), this.ctx = _82344dbcb8cc, this.window = _82344dbcb8cc.window, this.fetch = this.window.fetch, 
      this.Request = this.window.Request, this.Response = this.window.Response, this.Headers = this.window.Headers, 
      this.reqProto = this.Request ? this.Request.prototype : {}, this.resProto = this.Response ? this.Response.prototype : {}, 
      this.headersProto = this.Headers ? this.Headers.prototype : {}, this.reqUrl = _82344dbcb8cc.nativeMethods.getOwnPropertyDescriptor(this.reqProto, "url"), 
      this.resUrl = _82344dbcb8cc.nativeMethods.getOwnPropertyDescriptor(this.resProto, "url"), 
      this.reqHeaders = _82344dbcb8cc.nativeMethods.getOwnPropertyDescriptor(this.reqProto, "headers"), 
      this.resHeaders = _82344dbcb8cc.nativeMethods.getOwnPropertyDescriptor(this.resProto, "headers");
    }
    override() {
      return this.overrideRequest(), this.overrideUrl(), this.overrideHeaders(), !0;
    }
    overrideRequest() {
      return this.fetch ? (this.ctx.override(this.window, "fetch", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (!_975aace6d4ba.length || _975aace6d4ba[0] instanceof this.Request) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6, _0379e95aaabd = {}] = _975aace6d4ba, _d92d6e54f516 = new _6a7610c279e1({
          input: _25c9e28880a6,
          options: _0379e95aaabd
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("request", _d92d6e54f516), _d92d6e54f516.intercepted ? _d92d6e54f516.returnValue : _d92d6e54f516.target.call(_d92d6e54f516.that, _d92d6e54f516.data.input, _d92d6e54f516.data.options);
      }), this.ctx.override(this.window, "Request", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (!_975aace6d4ba.length) return new _82344dbcb8cc(..._975aace6d4ba);
        let [_25c9e28880a6, _0379e95aaabd = {}] = _975aace6d4ba, _d92d6e54f516 = new _6a7610c279e1({
          input: _25c9e28880a6,
          options: _0379e95aaabd
        }, _82344dbcb8cc);
        return this.emit("request", _d92d6e54f516), _d92d6e54f516.intercepted ? _d92d6e54f516.returnValue : new _d92d6e54f516.target(_d92d6e54f516.data.input, _d92d6e54f516.data.options);
      }, !0), !0) : !1;
    }
    overrideUrl() {
      return this.ctx.overrideDescriptor(this.reqProto, "url", {
        get: (_82344dbcb8cc, _361d506d96b6) => {
          let _975aace6d4ba = new _6a7610c279e1({
            value: _82344dbcb8cc.call(_361d506d96b6)
          }, _82344dbcb8cc, _361d506d96b6);
          return this.emit("requestUrl", _975aace6d4ba), _975aace6d4ba.intercepted ? _975aace6d4ba.returnValue : _975aace6d4ba.data.value;
        }
      }), this.ctx.overrideDescriptor(this.resProto, "url", {
        get: (_82344dbcb8cc, _361d506d96b6) => {
          let _975aace6d4ba = new _6a7610c279e1({
            value: _82344dbcb8cc.call(_361d506d96b6)
          }, _82344dbcb8cc, _361d506d96b6);
          return this.emit("responseUrl", _975aace6d4ba), _975aace6d4ba.intercepted ? _975aace6d4ba.returnValue : _975aace6d4ba.data.value;
        }
      }), !0;
    }
    overrideHeaders() {
      return this.Headers ? (this.ctx.overrideDescriptor(this.reqProto, "headers", {
        get: (_82344dbcb8cc, _361d506d96b6) => {
          let _975aace6d4ba = new _6a7610c279e1({
            value: _82344dbcb8cc.call(_361d506d96b6)
          }, _82344dbcb8cc, _361d506d96b6);
          return this.emit("requestHeaders", _975aace6d4ba), _975aace6d4ba.intercepted ? _975aace6d4ba.returnValue : _975aace6d4ba.data.value;
        }
      }), this.ctx.overrideDescriptor(this.resProto, "headers", {
        get: (_82344dbcb8cc, _361d506d96b6) => {
          let _975aace6d4ba = new _6a7610c279e1({
            value: _82344dbcb8cc.call(_361d506d96b6)
          }, _82344dbcb8cc, _361d506d96b6);
          return this.emit("responseHeaders", _975aace6d4ba), _975aace6d4ba.intercepted ? _975aace6d4ba.returnValue : _975aace6d4ba.data.value;
        }
      }), this.ctx.override(this.headersProto, "get", (_82344dbcb8cc, _361d506d96b6, [_975aace6d4ba]) => {
        if (!_975aace6d4ba) return _82344dbcb8cc.call(_361d506d96b6);
        let _25c9e28880a6 = new _6a7610c279e1({
          name: _975aace6d4ba,
          value: _82344dbcb8cc.call(_361d506d96b6, _975aace6d4ba)
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("getHeader", _25c9e28880a6), _25c9e28880a6.intercepted ? _25c9e28880a6.returnValue : _25c9e28880a6.data.value;
      }), this.ctx.override(this.headersProto, "set", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (2 > _975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6, _0379e95aaabd] = _975aace6d4ba, _d92d6e54f516 = new _6a7610c279e1({
          name: _25c9e28880a6,
          value: _0379e95aaabd
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("setHeader", _d92d6e54f516), _d92d6e54f516.intercepted ? _d92d6e54f516.returnValue : _d92d6e54f516.target.call(_d92d6e54f516.that, _d92d6e54f516.data.name, _d92d6e54f516.data.value);
      }), this.ctx.override(this.headersProto, "has", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (!_975aace6d4ba.length) return _82344dbcb8cc.call(_361d506d96b6);
        let [_25c9e28880a6] = _975aace6d4ba, _0379e95aaabd = new _6a7610c279e1({
          name: _25c9e28880a6,
          value: _82344dbcb8cc.call(_361d506d96b6, _25c9e28880a6)
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("hasHeader", _0379e95aaabd), _0379e95aaabd.intercepted ? _0379e95aaabd.returnValue : _0379e95aaabd.data;
      }), this.ctx.override(this.headersProto, "append", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (2 > _975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6, _0379e95aaabd] = _975aace6d4ba, _d92d6e54f516 = new _6a7610c279e1({
          name: _25c9e28880a6,
          value: _0379e95aaabd
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("appendHeader", _d92d6e54f516), _d92d6e54f516.intercepted ? _d92d6e54f516.returnValue : _d92d6e54f516.target.call(_d92d6e54f516.that, _d92d6e54f516.data.name, _d92d6e54f516.data.value);
      }), this.ctx.override(this.headersProto, "delete", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (!_975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6] = _975aace6d4ba, _0379e95aaabd = new _6a7610c279e1({
          name: _25c9e28880a6
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("deleteHeader", _0379e95aaabd), _0379e95aaabd.intercepted ? _0379e95aaabd.returnValue : _0379e95aaabd.target.call(_0379e95aaabd.that, _0379e95aaabd.data.name);
      }), !0) : !1;
    }
  }, _9efccd75062b = _db7005fb9836;
  var _3201f8535856 = m(_0d3402e587ac(), 1);
  var _714fb547aa35 = class extends _3201f8535856.default {
    constructor(_82344dbcb8cc) {
      super(), this.ctx = _82344dbcb8cc, this.window = _82344dbcb8cc.window, this.XMLHttpRequest = this.window.XMLHttpRequest, 
      this.xhrProto = this.window.XMLHttpRequest ? this.window.XMLHttpRequest.prototype : {}, 
      this.open = this.xhrProto.open, this.abort = this.xhrProto.abort, this.send = this.xhrProto.send, 
      this.overrideMimeType = this.xhrProto.overrideMimeType, this.getAllResponseHeaders = this.xhrProto.getAllResponseHeaders, 
      this.getResponseHeader = this.xhrProto.getResponseHeader, this.setRequestHeader = this.xhrProto.setRequestHeader, 
      this.responseURL = _82344dbcb8cc.nativeMethods.getOwnPropertyDescriptor(this.xhrProto, "responseURL"), 
      this.responseText = _82344dbcb8cc.nativeMethods.getOwnPropertyDescriptor(this.xhrProto, "responseText");
    }
    override() {
      this.overrideOpen(), this.overrideSend(), this.overrideMimeType(), this.overrideGetResHeader(), 
      this.overrideGetResHeaders(), this.overrideSetReqHeader();
    }
    overrideOpen() {
      this.ctx.override(this.xhrProto, "open", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (2 > _975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6, _0379e95aaabd, _d92d6e54f516 = !0, _0d3402e587ac = null, _cd61c2c759b1 = null] = _975aace6d4ba, _5d2f90686d0b = new _6a7610c279e1({
          method: _25c9e28880a6,
          input: _0379e95aaabd,
          async: _d92d6e54f516,
          user: _0d3402e587ac,
          password: _cd61c2c759b1
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("open", _5d2f90686d0b), _5d2f90686d0b.intercepted ? _5d2f90686d0b.returnValue : _5d2f90686d0b.target.call(_5d2f90686d0b.that, _5d2f90686d0b.data.method, _5d2f90686d0b.data.input, _5d2f90686d0b.data.async, _5d2f90686d0b.data.user, _5d2f90686d0b.data.password);
      });
    }
    overrideResponseUrl() {
      this.ctx.overrideDescriptor(this.xhrProto, "responseURL", {
        get: (_82344dbcb8cc, _361d506d96b6) => {
          let _975aace6d4ba = new _6a7610c279e1({
            value: _82344dbcb8cc.call(_361d506d96b6)
          }, _82344dbcb8cc, _361d506d96b6);
          return this.emit("responseUrl", _975aace6d4ba), _975aace6d4ba.intercepted ? _975aace6d4ba.returnValue : _975aace6d4ba.data.value;
        }
      });
    }
    overrideSend() {
      this.ctx.override(this.xhrProto, "send", (_82344dbcb8cc, _361d506d96b6, [_975aace6d4ba = null]) => {
        let _25c9e28880a6 = new _6a7610c279e1({
          body: _975aace6d4ba
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("send", _25c9e28880a6), _25c9e28880a6.intercepted ? _25c9e28880a6.returnValue : _25c9e28880a6.target.call(_25c9e28880a6.that, _25c9e28880a6.data.body);
      });
    }
    overrideSetReqHeader() {
      this.ctx.override(this.xhrProto, "setRequestHeader", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (2 > _975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6, _0379e95aaabd] = _975aace6d4ba, _d92d6e54f516 = new _6a7610c279e1({
          name: _25c9e28880a6,
          value: _0379e95aaabd
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("setReqHeader", _d92d6e54f516), _d92d6e54f516.intercepted ? _d92d6e54f516.returnValue : _d92d6e54f516.target.call(_d92d6e54f516.that, _d92d6e54f516.data.name, _d92d6e54f516.data.value);
      });
    }
    overrideGetResHeaders() {
      this.ctx.override(this.xhrProto, "getAllResponseHeaders", (_82344dbcb8cc, _361d506d96b6) => {
        let _975aace6d4ba = new _6a7610c279e1({
          value: _82344dbcb8cc.call(_361d506d96b6)
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("getAllResponseHeaders", _975aace6d4ba), _975aace6d4ba.intercepted ? _975aace6d4ba.returnValue : _975aace6d4ba.data.value;
      });
    }
    overrideGetResHeader() {
      this.ctx.override(this.xhrProto, "getResponseHeader", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (!_975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6] = _975aace6d4ba, _0379e95aaabd = new _6a7610c279e1({
          name: _25c9e28880a6,
          value: _82344dbcb8cc.call(_361d506d96b6, _25c9e28880a6)
        }, _82344dbcb8cc, _361d506d96b6);
        return _0379e95aaabd.intercepted ? _0379e95aaabd.returnValue : _0379e95aaabd.data.value;
      });
    }
  }, _ce793791e7ee = _714fb547aa35;
  var _687b8601ce3e = m(_0d3402e587ac(), 1);
  var _b49998ff41b8 = class extends _687b8601ce3e.default {
    constructor(_82344dbcb8cc) {
      super(), this.ctx = _82344dbcb8cc, this.window = _82344dbcb8cc.window, this.EventSource = this.window.EventSource || {}, 
      this.esProto = this.EventSource.prototype || {}, this.url = _82344dbcb8cc.nativeMethods.getOwnPropertyDescriptor(this.esProto, "url"), 
      this.CONNECTING = 0, this.OPEN = 1, this.CLOSED = 2;
    }
    overrideConstruct() {
      this.ctx.override(this.window, "EventSource", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (!_975aace6d4ba.length) return new _82344dbcb8cc(..._975aace6d4ba);
        let [_25c9e28880a6, _0379e95aaabd = {}] = _975aace6d4ba, _d92d6e54f516 = new _6a7610c279e1({
          url: _25c9e28880a6,
          config: _0379e95aaabd
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("construct", _d92d6e54f516), _d92d6e54f516.intercepted ? _d92d6e54f516.returnValue : new _d92d6e54f516.target(_d92d6e54f516.data.url, _d92d6e54f516.data.config);
      }, !0), "EventSource" in this.window && (this.window.EventSource.CONNECTING = this.CONNECTING, 
      this.window.EventSource.OPEN = this.OPEN, this.window.EventSource.CLOSED = this.CLOSED);
    }
    overrideUrl() {
      this.ctx.overrideDescriptor(this.esProto, "url", {
        get: (_82344dbcb8cc, _361d506d96b6) => {
          let _975aace6d4ba = new _6a7610c279e1({
            value: _82344dbcb8cc.call(_361d506d96b6)
          }, _82344dbcb8cc, _361d506d96b6);
          return this.emit("url", _975aace6d4ba), _975aace6d4ba.data.value;
        }
      });
    }
  }, _63fb112d140d = _b49998ff41b8;
  var _401b8b5f8d4f = m(_0d3402e587ac(), 1);
  var _10ad9c7556c0 = class extends _401b8b5f8d4f.default {
    constructor(_82344dbcb8cc) {
      super(), this.ctx = _82344dbcb8cc, this.window = this.ctx.window, this.History = this.window.History, 
      this.history = this.window.history, this.historyProto = this.History ? this.History.prototype : {}, 
      this.pushState = this.historyProto.pushState, this.replaceState = this.historyProto.replaceState, 
      this.go = this.historyProto.go, this.back = this.historyProto.back, this.forward = this.historyProto.forward;
    }
    override() {
      this.overridePushState(), this.overrideReplaceState(), this.overrideGo(), this.overrideForward(), 
      this.overrideBack();
    }
    overridePushState() {
      this.ctx.override(this.historyProto, "pushState", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (2 > _975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6, _0379e95aaabd, _d92d6e54f516 = ""] = _975aace6d4ba, _0d3402e587ac = new _6a7610c279e1({
          state: _25c9e28880a6,
          title: _0379e95aaabd,
          url: _d92d6e54f516
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("pushState", _0d3402e587ac), _0d3402e587ac.intercepted ? _0d3402e587ac.returnValue : _0d3402e587ac.target.call(_0d3402e587ac.that, _0d3402e587ac.data.state, _0d3402e587ac.data.title, _0d3402e587ac.data.url);
      });
    }
    overrideReplaceState() {
      this.ctx.override(this.historyProto, "replaceState", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (2 > _975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6, _0379e95aaabd, _d92d6e54f516 = ""] = _975aace6d4ba, _0d3402e587ac = new _6a7610c279e1({
          state: _25c9e28880a6,
          title: _0379e95aaabd,
          url: _d92d6e54f516
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("replaceState", _0d3402e587ac), _0d3402e587ac.intercepted ? _0d3402e587ac.returnValue : _0d3402e587ac.target.call(_0d3402e587ac.that, _0d3402e587ac.data.state, _0d3402e587ac.data.title, _0d3402e587ac.data.url);
      });
    }
    overrideGo() {
      this.ctx.override(this.historyProto, "go", (_82344dbcb8cc, _361d506d96b6, [_975aace6d4ba]) => {
        let _25c9e28880a6 = new _6a7610c279e1({
          delta: _975aace6d4ba
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("go", _25c9e28880a6), _25c9e28880a6.intercepted ? _25c9e28880a6.returnValue : _25c9e28880a6.target.call(_25c9e28880a6.that, _25c9e28880a6.data.delta);
      });
    }
    overrideForward() {
      this.ctx.override(this.historyProto, "forward", (_82344dbcb8cc, _361d506d96b6) => {
        let _975aace6d4ba = new _6a7610c279e1(null, _82344dbcb8cc, _361d506d96b6);
        return this.emit("forward", _975aace6d4ba), _975aace6d4ba.intercepted ? _975aace6d4ba.returnValue : _975aace6d4ba.target.call(_975aace6d4ba.that);
      });
    }
    overrideBack() {
      this.ctx.override(this.historyProto, "back", (_82344dbcb8cc, _361d506d96b6) => {
        let _975aace6d4ba = new _6a7610c279e1(null, _82344dbcb8cc, _361d506d96b6);
        return this.emit("back", _975aace6d4ba), _975aace6d4ba.intercepted ? _975aace6d4ba.returnValue : _975aace6d4ba.target.call(_975aace6d4ba.that);
      });
    }
  }, _81d5ba82c687 = _10ad9c7556c0;
  var _c03c86339428 = m(_0d3402e587ac(), 1), _97dd91d2ca10 = class extends _c03c86339428.default {
    constructor(_82344dbcb8cc) {
      super(), this.ctx = _82344dbcb8cc, this.window = _82344dbcb8cc.window, this.location = this.window.location, 
      this.WorkerLocation = this.ctx.worker ? this.window.WorkerLocation : null, this.workerLocProto = this.WorkerLocation ? this.WorkerLocation.prototype : {}, 
      this.keys = [ "href", "protocol", "host", "hostname", "port", "pathname", "search", "hash", "origin" ], 
      this.HashChangeEvent = this.window.HashChangeEvent || null, this.href = this.WorkerLocation ? _82344dbcb8cc.nativeMethods.getOwnPropertyDescriptor(this.workerLocProto, "href") : _82344dbcb8cc.nativeMethods.getOwnPropertyDescriptor(this.location, "href");
    }
    overrideWorkerLocation(_82344dbcb8cc) {
      if (!this.WorkerLocation) return !1;
      let _361d506d96b6 = this;
      for (let _975aace6d4ba of this.keys) this.ctx.overrideDescriptor(this.workerLocProto, _975aace6d4ba, {
        get: () => _82344dbcb8cc(_361d506d96b6.href.get.call(this.location))[_975aace6d4ba]
      });
      return !0;
    }
    emulate(_82344dbcb8cc, _361d506d96b6) {
      let _975aace6d4ba = {}, _25c9e28880a6 = this;
      for (let _0379e95aaabd of _25c9e28880a6.keys) this.ctx.nativeMethods.defineProperty(_975aace6d4ba, _0379e95aaabd, {
        get() {
          return _82344dbcb8cc(_25c9e28880a6.href.get.call(_25c9e28880a6.location))[_0379e95aaabd];
        },
        set: _0379e95aaabd !== "origin" ? function(_82344dbcb8cc) {
          switch (_0379e95aaabd) {
           case "href":
            _25c9e28880a6.location.href = _361d506d96b6(_82344dbcb8cc);
            break;

           case "hash":
            _25c9e28880a6.emit("hashchange", _975aace6d4ba.href, _82344dbcb8cc.trim().startsWith("#") ? new URL(_82344dbcb8cc.trim(), _975aace6d4ba.href).href : new URL("#" + _82344dbcb8cc.trim(), _975aace6d4ba.href).href, _25c9e28880a6);
            break;

           default:
            {
              let _d92d6e54f516 = new URL(_975aace6d4ba.href);
              _d92d6e54f516[_0379e95aaabd] = _82344dbcb8cc, _25c9e28880a6.location.href = _361d506d96b6(_d92d6e54f516.href);
            }
            break;
          }
        } : void 0,
        configurable: !1,
        enumerable: !0
      });
      return "reload" in this.location && this.ctx.nativeMethods.defineProperty(_975aace6d4ba, "reload", {
        value: this.ctx.wrap(this.location, "reload", (_82344dbcb8cc, _361d506d96b6) => _82344dbcb8cc.call(_361d506d96b6 === _975aace6d4ba ? this.location : _361d506d96b6)),
        writable: !1,
        enumerable: !0
      }), "replace" in this.location && this.ctx.nativeMethods.defineProperty(_975aace6d4ba, "replace", {
        value: this.ctx.wrap(this.location, "assign", (_82344dbcb8cc, _25c9e28880a6, _0379e95aaabd) => {
          (!_0379e95aaabd.length || _25c9e28880a6 !== _975aace6d4ba) && _82344dbcb8cc.call(_25c9e28880a6), 
          _25c9e28880a6 = this.location;
          let [_d92d6e54f516] = _0379e95aaabd, _0d3402e587ac = new URL(_d92d6e54f516, _975aace6d4ba.href);
          return _82344dbcb8cc.call(_25c9e28880a6 === _975aace6d4ba ? this.location : _25c9e28880a6, _361d506d96b6(_0d3402e587ac.href));
        }),
        writable: !1,
        enumerable: !0
      }), "assign" in this.location && this.ctx.nativeMethods.defineProperty(_975aace6d4ba, "assign", {
        value: this.ctx.wrap(this.location, "assign", (_82344dbcb8cc, _25c9e28880a6, _0379e95aaabd) => {
          (!_0379e95aaabd.length || _25c9e28880a6 !== _975aace6d4ba) && _82344dbcb8cc.call(_25c9e28880a6), 
          _25c9e28880a6 = this.location;
          let [_d92d6e54f516] = _0379e95aaabd, _0d3402e587ac = new URL(_d92d6e54f516, _975aace6d4ba.href);
          return _82344dbcb8cc.call(_25c9e28880a6 === _975aace6d4ba ? this.location : _25c9e28880a6, _361d506d96b6(_0d3402e587ac.href));
        }),
        writable: !1,
        enumerable: !0
      }), "ancestorOrigins" in this.location && this.ctx.nativeMethods.defineProperty(_975aace6d4ba, "ancestorOrigins", {
        get() {
          let _82344dbcb8cc = [];
          return _25c9e28880a6.window.DOMStringList && _25c9e28880a6.ctx.nativeMethods.setPrototypeOf(_82344dbcb8cc, _25c9e28880a6.window.DOMStringList.prototype), 
          _82344dbcb8cc;
        },
        set: void 0,
        enumerable: !0
      }), this.ctx.nativeMethods.defineProperty(_975aace6d4ba, "toString", {
        value: this.ctx.wrap(this.location, "toString", () => _975aace6d4ba.href),
        enumerable: !0,
        writable: !1
      }), this.ctx.nativeMethods.defineProperty(_975aace6d4ba, Symbol.toPrimitive, {
        value: () => _975aace6d4ba.href,
        writable: !1,
        enumerable: !1
      }), this.ctx.window.Location && this.ctx.nativeMethods.setPrototypeOf(_975aace6d4ba, this.ctx.window.Location.prototype), 
      _975aace6d4ba;
    }
  }, _d149d429c8e3 = _97dd91d2ca10;
  var _dcbdaf678766 = m(_0d3402e587ac(), 1);
  var _2d6a5a3b4ffa = class extends _dcbdaf678766.default {
    constructor(_82344dbcb8cc) {
      super(), this.ctx = _82344dbcb8cc, this.window = this.ctx.window, this.postMessage = this.window.postMessage, 
      this.MessageEvent = this.window.MessageEvent || {}, this.MessagePort = this.window.MessagePort || {}, 
      this.mpProto = this.MessagePort.prototype || {}, this.mpPostMessage = this.mpProto.postMessage, 
      this.messageProto = this.MessageEvent.prototype || {}, this.messageData = _82344dbcb8cc.nativeMethods.getOwnPropertyDescriptor(this.messageProto, "data"), 
      this.messageOrigin = _82344dbcb8cc.nativeMethods.getOwnPropertyDescriptor(this.messageProto, "origin");
    }
    overridePostMessage() {
      this.ctx.override(this.window, "postMessage", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (!_975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let _25c9e28880a6, _0379e95aaabd, _d92d6e54f516;
        this.ctx.worker ? [_25c9e28880a6, _d92d6e54f516 = []] = _975aace6d4ba : [_25c9e28880a6, _0379e95aaabd, _d92d6e54f516 = []] = _975aace6d4ba;
        let _0d3402e587ac = new _6a7610c279e1({
          message: _25c9e28880a6,
          origin: _0379e95aaabd,
          transfer: _d92d6e54f516,
          worker: this.ctx.worker
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("postMessage", _0d3402e587ac), _0d3402e587ac.intercepted ? _0d3402e587ac.returnValue : this.ctx.worker ? _0d3402e587ac.target.call(_0d3402e587ac.that, _0d3402e587ac.data.message, _0d3402e587ac.data.transfer) : _0d3402e587ac.target.call(_0d3402e587ac.that, _0d3402e587ac.data.message, _0d3402e587ac.data.origin, _0d3402e587ac.data.transfer);
      });
    }
    wrapPostMessage(_82344dbcb8cc, _361d506d96b6, _975aace6d4ba = !1) {
      return this.ctx.wrap(_82344dbcb8cc, _361d506d96b6, (_361d506d96b6, _25c9e28880a6, _0379e95aaabd) => {
        if (this.ctx.worker ? !_0379e95aaabd.length : 2 > _0379e95aaabd) return _361d506d96b6.apply(_25c9e28880a6, _0379e95aaabd);
        let _d92d6e54f516, _0d3402e587ac, _cd61c2c759b1;
        _975aace6d4ba ? ([_d92d6e54f516, _cd61c2c759b1 = []] = _0379e95aaabd, _0d3402e587ac = null) : [_d92d6e54f516, _0d3402e587ac, _cd61c2c759b1 = []] = _0379e95aaabd;
        let _5d2f90686d0b = new _6a7610c279e1({
          message: _d92d6e54f516,
          origin: _0d3402e587ac,
          transfer: _cd61c2c759b1,
          worker: this.ctx.worker
        }, _361d506d96b6, _82344dbcb8cc);
        return this.emit("postMessage", _5d2f90686d0b), _5d2f90686d0b.intercepted ? _5d2f90686d0b.returnValue : _975aace6d4ba ? _5d2f90686d0b.target.call(_5d2f90686d0b.that, _5d2f90686d0b.data.message, _5d2f90686d0b.data.transfer) : _5d2f90686d0b.target.call(_5d2f90686d0b.that, _5d2f90686d0b.data.message, _5d2f90686d0b.data.origin, _5d2f90686d0b.data.transfer);
      });
    }
    overrideMessageOrigin() {
      this.ctx.overrideDescriptor(this.messageProto, "origin", {
        get: (_82344dbcb8cc, _361d506d96b6) => {
          let _975aace6d4ba = new _6a7610c279e1({
            value: _82344dbcb8cc.call(_361d506d96b6)
          }, _82344dbcb8cc, _361d506d96b6);
          return this.emit("origin", _975aace6d4ba), _975aace6d4ba.intercepted ? _975aace6d4ba.returnValue : _975aace6d4ba.data.value;
        }
      });
    }
    overrideMessageData() {
      this.ctx.overrideDescriptor(this.messageProto, "data", {
        get: (_82344dbcb8cc, _361d506d96b6) => {
          let _975aace6d4ba = new _6a7610c279e1({
            value: _82344dbcb8cc.call(_361d506d96b6)
          }, _82344dbcb8cc, _361d506d96b6);
          return this.emit("data", _975aace6d4ba), _975aace6d4ba.intercepted ? _975aace6d4ba.returnValue : _975aace6d4ba.data.value;
        }
      });
    }
  }, _2a9d160ea9b6 = _2d6a5a3b4ffa;
  var _ce7ecd927403 = m(_0d3402e587ac(), 1);
  var _17ef5b65bdef = class extends _ce7ecd927403.default {
    constructor(_82344dbcb8cc) {
      super(), this.ctx = _82344dbcb8cc, this.window = _82344dbcb8cc.window, this.navigator = this.window.navigator, 
      this.Navigator = this.window.Navigator || {}, this.navProto = this.Navigator.prototype || {}, 
      this.sendBeacon = this.navProto.sendBeacon;
    }
    overrideSendBeacon() {
      this.ctx.override(this.navProto, "sendBeacon", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (!_975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6, _0379e95aaabd = ""] = _975aace6d4ba, _d92d6e54f516 = new _6a7610c279e1({
          url: _25c9e28880a6,
          data: _0379e95aaabd
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("sendBeacon", _d92d6e54f516), _d92d6e54f516.intercepted ? _d92d6e54f516.returnValue : _d92d6e54f516.target.call(_d92d6e54f516.that, _d92d6e54f516.data.url, _d92d6e54f516.data.data);
      });
    }
  }, _39ac429ccf4d = _17ef5b65bdef;
  var _d6f62dc00856 = m(_0d3402e587ac(), 1);
  var _9909a927cc27 = globalThis.fetch, _1b451199c5e6 = globalThis.SharedWorker, _ce292a519bb4 = globalThis.localStorage, _d525338ce653 = globalThis.navigator.serviceWorker, _1bfb445437e6 = MessagePort.prototype.postMessage, _8b2da99f2afc = {
    prototype: {
      send: WebSocket.prototype.send
    },
    CLOSED: WebSocket.CLOSED,
    CLOSING: WebSocket.CLOSING,
    CONNECTING: WebSocket.CONNECTING,
    OPEN: WebSocket.OPEN
  };
  async function W() {
    let _82344dbcb8cc = (await self.clients.matchAll({
      type: "window",
      includeUncontrolled: !0
    })).map(async _82344dbcb8cc => {
      let _361d506d96b6 = await function(_82344dbcb8cc) {
        let _361d506d96b6 = new MessageChannel;
        return new Promise(_975aace6d4ba => {
          _82344dbcb8cc.postMessage({
            type: "getPort",
            port: _361d506d96b6.port2
          }, [ _361d506d96b6.port2 ]), _361d506d96b6.port1.onmessage = _82344dbcb8cc => {
            _975aace6d4ba(_82344dbcb8cc.data);
          };
        });
      }(_82344dbcb8cc);
      return await Ie(_361d506d96b6), _361d506d96b6;
    }), _361d506d96b6 = Promise.race([ Promise.any(_82344dbcb8cc), new Promise((_82344dbcb8cc, _361d506d96b6) => setTimeout(_361d506d96b6, 1e3, new TypeError("timeout"))) ]);
    try {
      return await _361d506d96b6;
    } catch (_82344dbcb8cc) {
      if (_82344dbcb8cc instanceof AggregateError) throw console.error("bare-mux: failed to get a bare-mux SharedWorker MessagePort as all clients returned an invalid MessagePort."), 
      new Error("All clients returned an invalid MessagePort.");
      return console.warn("bare-mux: failed to get a bare-mux SharedWorker MessagePort within 1s, retrying"), 
      await W();
    }
  }
  function Ie(_82344dbcb8cc) {
    let _361d506d96b6 = new MessageChannel, _975aace6d4ba = new Promise((_82344dbcb8cc, _975aace6d4ba) => {
      _361d506d96b6.port1.onmessage = _361d506d96b6 => {
        _361d506d96b6.data.type === "pong" && _82344dbcb8cc();
      }, setTimeout(_975aace6d4ba, 1500);
    });
    return _1bfb445437e6.call(_82344dbcb8cc, {
      message: {
        type: "ping"
      },
      port: _361d506d96b6.port2
    }, [ _361d506d96b6.port2 ]), _975aace6d4ba;
  }
  function Ve(_82344dbcb8cc, _361d506d96b6) {
    let _975aace6d4ba = new _1b451199c5e6(_82344dbcb8cc, "ridgewood-stem-worker");
    return _361d506d96b6 && _d525338ce653.addEventListener("message", _361d506d96b6 => {
      if (_361d506d96b6.data.type === "getPort" && _361d506d96b6.data.port) {
        console.debug("bare-mux: recieved request for port from sw");
        let _975aace6d4ba = new _1b451199c5e6(_82344dbcb8cc, "ridgewood-stem-worker");
        _1bfb445437e6.call(_361d506d96b6.data.port, _975aace6d4ba.port, [ _975aace6d4ba.port ]);
      }
    }), _975aace6d4ba.port;
  }
  var _986f49db2826 = null;
  function lt() {
    if (_986f49db2826 === null) {
      let _82344dbcb8cc = new MessageChannel, _361d506d96b6 = new ReadableStream, _975aace6d4ba;
      try {
        _1bfb445437e6.call(_82344dbcb8cc.port1, _361d506d96b6, [ _361d506d96b6 ]), _975aace6d4ba = !0;
      } catch {
        _975aace6d4ba = !1;
      }
      return _986f49db2826 = _975aace6d4ba, _975aace6d4ba;
    }
    return _986f49db2826;
  }
  var _5e54479b99cd = class {
    constructor(_82344dbcb8cc) {
      this.channel = new BroadcastChannel("bare-mux"), _82344dbcb8cc instanceof MessagePort || _82344dbcb8cc instanceof Promise ? this.port = _82344dbcb8cc : this.createChannel(_82344dbcb8cc, !0);
    }
    createChannel(_82344dbcb8cc, _361d506d96b6) {
      if (self.clients) this.port = W(), this.channel.onmessage = _82344dbcb8cc => {
        _82344dbcb8cc.data.type === "refreshPort" && (this.port = W());
      }; else if (_82344dbcb8cc && SharedWorker) {
        if (!_82344dbcb8cc.startsWith("/") && !_82344dbcb8cc.includes("://")) throw new Error("Invalid URL. Must be absolute or start at the root.");
        this.port = Ve(_82344dbcb8cc, _361d506d96b6), console.debug("bare-mux: setting localStorage bare-mux-path to", _82344dbcb8cc), 
        _ce292a519bb4["bare-mux-path"] = _82344dbcb8cc;
      } else {
        if (!SharedWorker) throw new Error("Unable to get a channel to the SharedWorker.");
        {
          let _82344dbcb8cc = _ce292a519bb4["bare-mux-path"];
          if (console.debug("bare-mux: got localStorage bare-mux-path:", _82344dbcb8cc), !_82344dbcb8cc) throw new Error("Unable to get bare-mux workerPath from localStorage.");
          this.port = Ve(_82344dbcb8cc, _361d506d96b6);
        }
      }
    }
    async sendMessage(_82344dbcb8cc, _361d506d96b6) {
      this.port instanceof Promise && (this.port = await this.port);
      try {
        await Ie(this.port);
      } catch {
        return console.warn("bare-mux: Failed to get a ping response from the worker within 1.5s. Assuming port is dead."), 
        this.createChannel(), await this.sendMessage(_82344dbcb8cc, _361d506d96b6);
      }
      let _975aace6d4ba = new MessageChannel, _25c9e28880a6 = [ _975aace6d4ba.port2, ..._361d506d96b6 || [] ], _0379e95aaabd = new Promise((_82344dbcb8cc, _361d506d96b6) => {
        _975aace6d4ba.port1.onmessage = _975aace6d4ba => {
          let _25c9e28880a6 = _975aace6d4ba.data;
          _25c9e28880a6.type === "error" ? _361d506d96b6(_25c9e28880a6.error) : _82344dbcb8cc(_25c9e28880a6);
        };
      });
      return _1bfb445437e6.call(this.port, {
        message: _82344dbcb8cc,
        port: _975aace6d4ba.port2
      }, _25c9e28880a6), await _0379e95aaabd;
    }
  };
  function Ce(_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) {
    console.error(`error while processing '${_975aace6d4ba}': `, _361d506d96b6), _82344dbcb8cc.postMessage({
      type: "error",
      error: _361d506d96b6
    });
  }
  var _4953347b1604 = class {
    constructor(_82344dbcb8cc) {
      this.worker = new _5e54479b99cd(_82344dbcb8cc);
    }
    async getTransport() {
      return (await this.worker.sendMessage({
        type: "get"
      })).name;
    }
    async setTransport(_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) {
      await this.setManualTransport(`\n\t\t\tconst { default: BareTransport } = await import("${_82344dbcb8cc}");\n\t\t\treturn [BareTransport, "${_82344dbcb8cc}"];\n\t\t`, _361d506d96b6, _975aace6d4ba);
    }
    async setManualTransport(_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) {
      if (_82344dbcb8cc === "bare-mux-remote") throw new Error("Use setRemoteTransport.");
      await this.worker.sendMessage({
        type: "set",
        client: {
          function: _82344dbcb8cc,
          args: _361d506d96b6
        }
      }, _975aace6d4ba);
    }
    async setRemoteTransport(_82344dbcb8cc, _361d506d96b6) {
      let _975aace6d4ba = new MessageChannel;
      _975aace6d4ba.port1.onmessage = async _361d506d96b6 => {
        let _975aace6d4ba = _361d506d96b6.data.port, _25c9e28880a6 = _361d506d96b6.data.message;
        if (_25c9e28880a6.type === "fetch") try {
          _82344dbcb8cc.ready || await _82344dbcb8cc.init(), await async function(_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) {
            let _25c9e28880a6 = await _975aace6d4ba.request(new URL(_82344dbcb8cc.fetch.remote), _82344dbcb8cc.fetch.method, _82344dbcb8cc.fetch.body, _82344dbcb8cc.fetch.headers, null);
            if (!lt() && _25c9e28880a6.body instanceof ReadableStream) {
              let _82344dbcb8cc = new Response(_25c9e28880a6.body);
              _25c9e28880a6.body = await _82344dbcb8cc.arrayBuffer();
            }
            _25c9e28880a6.body instanceof ReadableStream || _25c9e28880a6.body instanceof ArrayBuffer ? _1bfb445437e6.call(_361d506d96b6, {
              type: "fetch",
              fetch: _25c9e28880a6
            }, [ _25c9e28880a6.body ]) : _1bfb445437e6.call(_361d506d96b6, {
              type: "fetch",
              fetch: _25c9e28880a6
            });
          }(_25c9e28880a6, _975aace6d4ba, _82344dbcb8cc);
        } catch (_82344dbcb8cc) {
          Ce(_975aace6d4ba, _82344dbcb8cc, "fetch");
        } else if (_25c9e28880a6.type === "websocket") try {
          _82344dbcb8cc.ready || await _82344dbcb8cc.init(), await async function(_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) {
            let [_25c9e28880a6, _0379e95aaabd] = _975aace6d4ba.connect(new URL(_82344dbcb8cc.websocket.url), _82344dbcb8cc.websocket.protocols, _82344dbcb8cc.websocket.requestHeaders, _361d506d96b6 => {
              _1bfb445437e6.call(_82344dbcb8cc.websocket.channel, {
                type: "open",
                args: [ _361d506d96b6 ]
              });
            }, _361d506d96b6 => {
              _361d506d96b6 instanceof ArrayBuffer ? _1bfb445437e6.call(_82344dbcb8cc.websocket.channel, {
                type: "message",
                args: [ _361d506d96b6 ]
              }, [ _361d506d96b6 ]) : _1bfb445437e6.call(_82344dbcb8cc.websocket.channel, {
                type: "message",
                args: [ _361d506d96b6 ]
              });
            }, (_361d506d96b6, _975aace6d4ba) => {
              _1bfb445437e6.call(_82344dbcb8cc.websocket.channel, {
                type: "close",
                args: [ _361d506d96b6, _975aace6d4ba ]
              });
            }, _361d506d96b6 => {
              _1bfb445437e6.call(_82344dbcb8cc.websocket.channel, {
                type: "error",
                args: [ _361d506d96b6 ]
              });
            });
            _82344dbcb8cc.websocket.channel.onmessage = _82344dbcb8cc => {
              _82344dbcb8cc.data.type === "data" ? _25c9e28880a6(_82344dbcb8cc.data.data) : _82344dbcb8cc.data.type === "close" && _0379e95aaabd(_82344dbcb8cc.data.closeCode, _82344dbcb8cc.data.closeReason);
            }, _1bfb445437e6.call(_361d506d96b6, {
              type: "websocket"
            });
          }(_25c9e28880a6, _975aace6d4ba, _82344dbcb8cc);
        } catch (_82344dbcb8cc) {
          Ce(_975aace6d4ba, _82344dbcb8cc, "websocket");
        }
      }, await this.worker.sendMessage({
        type: "set",
        client: {
          function: "bare-mux-remote",
          args: [ _975aace6d4ba.port2, _361d506d96b6 ]
        }
      }, [ _975aace6d4ba.port2 ]);
    }
    getInnerPort() {
      return this.worker.port;
    }
  };
  console.debug("bare-mux: running v2.1.6 (build 4b7607b)");
  var _05dd5104fbcd = class extends _d6f62dc00856.default {
    constructor(_82344dbcb8cc) {
      super(), this.ctx = _82344dbcb8cc, this.window = _82344dbcb8cc.window, this.Worker = this.window.Worker || {}, 
      this.Worklet = this.window.Worklet || {}, this.workletProto = this.Worklet.prototype || {}, 
      this.workerProto = this.Worker.prototype || {}, this.postMessage = this.workerProto.postMessage, 
      this.terminate = this.workerProto.terminate, this.addModule = this.workletProto.addModule;
    }
    overrideWorker() {
      this.ctx.override(this.window, "Worker", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (!_975aace6d4ba.length) return new _82344dbcb8cc(..._975aace6d4ba);
        let [_25c9e28880a6, _0379e95aaabd = {}] = _975aace6d4ba, _d92d6e54f516 = new _6a7610c279e1({
          url: _25c9e28880a6,
          options: _0379e95aaabd
        }, _82344dbcb8cc, _361d506d96b6);
        if (this.emit("worker", _d92d6e54f516), _d92d6e54f516.intercepted) return _d92d6e54f516.returnValue;
        let _0d3402e587ac = new _d92d6e54f516.target(_d92d6e54f516.data.url, _d92d6e54f516.data.options), _cd61c2c759b1 = new _4953347b1604;
        return (async () => {
          let _82344dbcb8cc = await _cd61c2c759b1.getInnerPort();
          _0d3402e587ac.postMessage({
            __uv$type: "baremuxinit",
            port: _82344dbcb8cc
          }, [ _82344dbcb8cc ]);
        })(), _0d3402e587ac;
      }, !0);
    }
    overrideAddModule() {
      this.ctx.override(this.workletProto, "addModule", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (!_975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6, _0379e95aaabd = {}] = _975aace6d4ba, _d92d6e54f516 = new _6a7610c279e1({
          url: _25c9e28880a6,
          options: _0379e95aaabd
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("addModule", _d92d6e54f516), _d92d6e54f516.intercepted ? _d92d6e54f516.returnValue : _d92d6e54f516.target.call(_d92d6e54f516.that, _d92d6e54f516.data.url, _d92d6e54f516.data.options);
      });
    }
    overridePostMessage() {
      this.ctx.override(this.workerProto, "postMessage", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (!_975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6, _0379e95aaabd = []] = _975aace6d4ba, _d92d6e54f516 = new _6a7610c279e1({
          message: _25c9e28880a6,
          transfer: _0379e95aaabd
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("postMessage", _d92d6e54f516), _d92d6e54f516.intercepted ? _d92d6e54f516.returnValue : _d92d6e54f516.target.call(_d92d6e54f516.that, _d92d6e54f516.data.message, _d92d6e54f516.data.transfer);
      });
    }
    overrideImportScripts() {
      this.ctx.override(this.window, "importScripts", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (!_975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let _25c9e28880a6 = new _6a7610c279e1({
          scripts: _975aace6d4ba
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("importScripts", _25c9e28880a6), _25c9e28880a6.intercepted ? _25c9e28880a6.returnValue : _25c9e28880a6.target.apply(_25c9e28880a6.that, _25c9e28880a6.data.scripts);
      });
    }
  }, _4fc2c59bb4a3 = _05dd5104fbcd;
  var _0bf6aaff67c8 = m(_0d3402e587ac(), 1);
  var _f9ac31fd0b8b = class extends _0bf6aaff67c8.default {
    constructor(_82344dbcb8cc) {
      super(), this.ctx = _82344dbcb8cc, this.window = this.ctx.window, this.URL = this.window.URL || {}, 
      this.createObjectURL = this.URL.createObjectURL, this.revokeObjectURL = this.URL.revokeObjectURL;
    }
    overrideObjectURL() {
      this.ctx.override(this.URL, "createObjectURL", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (!_975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6] = _975aace6d4ba, _0379e95aaabd = new _6a7610c279e1({
          object: _25c9e28880a6
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("createObjectURL", _0379e95aaabd), _0379e95aaabd.intercepted ? _0379e95aaabd.returnValue : _0379e95aaabd.target.call(_0379e95aaabd.that, _0379e95aaabd.data.object);
      }), this.ctx.override(this.URL, "revokeObjectURL", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (!_975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6] = _975aace6d4ba, _0379e95aaabd = new _6a7610c279e1({
          url: _25c9e28880a6
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("revokeObjectURL", _0379e95aaabd), _0379e95aaabd.intercepted ? _0379e95aaabd.returnValue : _0379e95aaabd.target.call(_0379e95aaabd.that, _0379e95aaabd.data.url);
      });
    }
  }, _a5b4db9b3d41 = _f9ac31fd0b8b;
  var _be0ac459e2f9 = m(_0d3402e587ac(), 1);
  var _0ea5f0abb378 = m(_0d3402e587ac(), 1);
  var _1a985be3c634 = class extends _0ea5f0abb378.default {
    constructor(_82344dbcb8cc) {
      super(), this.ctx = _82344dbcb8cc, this.window = _82344dbcb8cc.window, this.localStorage = this.window.localStorage || null, 
      this.sessionStorage = this.window.sessionStorage || null, this.Storage = this.window.Storage || {}, 
      this.storeProto = this.Storage.prototype || {}, this.getItem = this.storeProto.getItem || null, 
      this.setItem = this.storeProto.setItem || null, this.removeItem = this.storeProto.removeItem || null, 
      this.clear = this.storeProto.clear || null, this.key = this.storeProto.key || null, 
      this.methods = [ "key", "getItem", "setItem", "removeItem", "clear" ], this.wrappers = new _82344dbcb8cc.nativeMethods.Map;
    }
    overrideMethods() {
      this.ctx.override(this.storeProto, "getItem", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (!_975aace6d4ba.length) return _82344dbcb8cc.apply(this.wrappers.get(_361d506d96b6) || _361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6] = _975aace6d4ba, _0379e95aaabd = new _6a7610c279e1({
          name: _25c9e28880a6
        }, _82344dbcb8cc, this.wrappers.get(_361d506d96b6) || _361d506d96b6);
        return this.emit("getItem", _0379e95aaabd), _0379e95aaabd.intercepted ? _0379e95aaabd.returnValue : _0379e95aaabd.target.call(_0379e95aaabd.that, _0379e95aaabd.data.name);
      }), this.ctx.override(this.storeProto, "setItem", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (2 > _975aace6d4ba.length) return _82344dbcb8cc.apply(this.wrappers.get(_361d506d96b6) || _361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6, _0379e95aaabd] = _975aace6d4ba, _d92d6e54f516 = new _6a7610c279e1({
          name: _25c9e28880a6,
          value: _0379e95aaabd
        }, _82344dbcb8cc, this.wrappers.get(_361d506d96b6) || _361d506d96b6);
        return this.emit("setItem", _d92d6e54f516), _d92d6e54f516.intercepted ? _d92d6e54f516.returnValue : _d92d6e54f516.target.call(_d92d6e54f516.that, _d92d6e54f516.data.name, _d92d6e54f516.data.value);
      }), this.ctx.override(this.storeProto, "removeItem", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (!_975aace6d4ba.length) return _82344dbcb8cc.apply(this.wrappers.get(_361d506d96b6) || _361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6] = _975aace6d4ba, _0379e95aaabd = new _6a7610c279e1({
          name: _25c9e28880a6
        }, _82344dbcb8cc, this.wrappers.get(_361d506d96b6) || _361d506d96b6);
        return this.emit("removeItem", _0379e95aaabd), _0379e95aaabd.intercepted ? _0379e95aaabd.returnValue : _0379e95aaabd.target.call(_0379e95aaabd.that, _0379e95aaabd.data.name);
      }), this.ctx.override(this.storeProto, "clear", (_82344dbcb8cc, _361d506d96b6) => {
        let _975aace6d4ba = new _6a7610c279e1(null, _82344dbcb8cc, this.wrappers.get(_361d506d96b6) || _361d506d96b6);
        return this.emit("clear", _975aace6d4ba), _975aace6d4ba.intercepted ? _975aace6d4ba.returnValue : _975aace6d4ba.target.call(_975aace6d4ba.that);
      }), this.ctx.override(this.storeProto, "key", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (!_975aace6d4ba.length) return _82344dbcb8cc.apply(this.wrappers.get(_361d506d96b6) || _361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6] = _975aace6d4ba, _0379e95aaabd = new _6a7610c279e1({
          index: _25c9e28880a6
        }, _82344dbcb8cc, this.wrappers.get(_361d506d96b6) || _361d506d96b6);
        return this.emit("key", _0379e95aaabd), _0379e95aaabd.intercepted ? _0379e95aaabd.returnValue : _0379e95aaabd.target.call(_0379e95aaabd.that, _0379e95aaabd.data.index);
      });
    }
    overrideLength() {
      this.ctx.overrideDescriptor(this.storeProto, "length", {
        get: (_82344dbcb8cc, _361d506d96b6) => {
          let _975aace6d4ba = new _6a7610c279e1({
            length: _82344dbcb8cc.call(this.wrappers.get(_361d506d96b6) || _361d506d96b6)
          }, _82344dbcb8cc, this.wrappers.get(_361d506d96b6) || _361d506d96b6);
          return this.emit("length", _975aace6d4ba), _975aace6d4ba.intercepted ? _975aace6d4ba.returnValue : _975aace6d4ba.data.length;
        }
      });
    }
    emulate(_82344dbcb8cc, _361d506d96b6 = {}) {
      this.ctx.nativeMethods.setPrototypeOf(_361d506d96b6, this.storeProto);
      let _975aace6d4ba = new this.ctx.window.Proxy(_361d506d96b6, {
        get: (_361d506d96b6, _975aace6d4ba) => {
          if (_975aace6d4ba in this.storeProto || typeof _975aace6d4ba == "symbol") return _82344dbcb8cc[_975aace6d4ba];
          let _25c9e28880a6 = new _6a7610c279e1({
            name: _975aace6d4ba
          }, null, _82344dbcb8cc);
          return this.emit("get", _25c9e28880a6), _25c9e28880a6.intercepted ? _25c9e28880a6.returnValue : _82344dbcb8cc[_25c9e28880a6.data.name];
        },
        set: (_361d506d96b6, _975aace6d4ba, _25c9e28880a6) => {
          if (_975aace6d4ba in this.storeProto || typeof _975aace6d4ba == "symbol") return _82344dbcb8cc[_975aace6d4ba] = _25c9e28880a6;
          let _0379e95aaabd = new _6a7610c279e1({
            name: _975aace6d4ba,
            value: _25c9e28880a6
          }, null, _82344dbcb8cc);
          return this.emit("set", _0379e95aaabd), _0379e95aaabd.intercepted ? _0379e95aaabd.returnValue : _82344dbcb8cc[_0379e95aaabd.data.name] = _0379e95aaabd.data.value;
        },
        deleteProperty: (_361d506d96b6, _975aace6d4ba) => {
          if (typeof _975aace6d4ba == "symbol") return delete _82344dbcb8cc[_975aace6d4ba];
          let _25c9e28880a6 = new _6a7610c279e1({
            name: _975aace6d4ba
          }, null, _82344dbcb8cc);
          return this.emit("delete", _25c9e28880a6), _25c9e28880a6.intercepted ? _25c9e28880a6.returnValue : delete _82344dbcb8cc[_25c9e28880a6.data.name];
        }
      });
      return this.wrappers.set(_975aace6d4ba, _82344dbcb8cc), this.ctx.nativeMethods.setPrototypeOf(_975aace6d4ba, this.storeProto), 
      _975aace6d4ba;
    }
  }, _4c6ce6cc88d2 = _1a985be3c634;
  var _35b038df1aff = m(_0d3402e587ac(), 1);
  var _df7d15dcaf73 = class extends _35b038df1aff.default {
    constructor(_82344dbcb8cc) {
      super(), this.ctx = _82344dbcb8cc, this.window = _82344dbcb8cc.window, this.CSSStyleDeclaration = this.window.CSSStyleDeclaration || {}, 
      this.cssStyleProto = this.CSSStyleDeclaration.prototype || {}, this.getPropertyValue = this.cssStyleProto.getPropertyValue || null, 
      this.setProperty = this.cssStyleProto.setProperty || null, this.cssText - _82344dbcb8cc.nativeMethods.getOwnPropertyDescriptors(this.cssStyleProto, "cssText"), 
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
      this.ctx.override(this.cssStyleProto, "getPropertyValue", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (!_975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6] = _975aace6d4ba, _0379e95aaabd = new _6a7610c279e1({
          property: _25c9e28880a6
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("getPropertyValue", _0379e95aaabd), _0379e95aaabd.intercepted ? _0379e95aaabd.returnValue : _0379e95aaabd.target.call(_0379e95aaabd.that, _0379e95aaabd.data.property);
      }), this.ctx.override(this.cssStyleProto, "setProperty", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (2 > _975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6, _0379e95aaabd] = _975aace6d4ba, _d92d6e54f516 = new _6a7610c279e1({
          property: _25c9e28880a6,
          value: _0379e95aaabd
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("setProperty", _d92d6e54f516), _d92d6e54f516.intercepted ? _d92d6e54f516.returnValue : _d92d6e54f516.target.call(_d92d6e54f516.that, _d92d6e54f516.data.property, _d92d6e54f516.data.value);
      });
    }
    overrideCssText() {
      this.ctx.overrideDescriptor(this.cssStyleProto, "cssText", {
        get: (_82344dbcb8cc, _361d506d96b6) => {
          let _975aace6d4ba = new _6a7610c279e1({
            value: _82344dbcb8cc.call(_361d506d96b6)
          }, _82344dbcb8cc, _361d506d96b6);
          return this.emit("getCssText", _975aace6d4ba), _975aace6d4ba.intercepted ? _975aace6d4ba.returnValue : _975aace6d4ba.data.value;
        },
        set: (_82344dbcb8cc, _361d506d96b6, [_975aace6d4ba]) => {
          let _25c9e28880a6 = new _6a7610c279e1({
            value: _975aace6d4ba
          }, _82344dbcb8cc, _361d506d96b6);
          return this.emit("setCssText", _25c9e28880a6), _25c9e28880a6.intercepted ? _25c9e28880a6.returnValue : _25c9e28880a6.target.call(_25c9e28880a6.that, _25c9e28880a6.data.value);
        }
      });
    }
  }, _84a28dfce788 = _df7d15dcaf73;
  var _4112e88e4c15 = m(_0d3402e587ac(), 1);
  var _ef3b7f26a464 = class extends _4112e88e4c15.default {
    constructor(_82344dbcb8cc) {
      super(), this.ctx = _82344dbcb8cc, this.window = this.ctx.window, this.IDBDatabase = this.window.IDBDatabase || {}, 
      this.idbDatabaseProto = this.IDBDatabase.prototype || {}, this.IDBFactory = this.window.IDBFactory || {}, 
      this.idbFactoryProto = this.IDBFactory.prototype || {}, this.open = this.idbFactoryProto.open;
    }
    overrideOpen() {
      this.ctx.override(this.IDBFactory.prototype, "open", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        if (!_975aace6d4ba.length || !_975aace6d4ba.length) return _82344dbcb8cc.apply(_361d506d96b6, _975aace6d4ba);
        let [_25c9e28880a6, _0379e95aaabd] = _975aace6d4ba, _d92d6e54f516 = new _6a7610c279e1({
          name: _25c9e28880a6,
          version: _0379e95aaabd
        }, _82344dbcb8cc, _361d506d96b6);
        return this.emit("idbFactoryOpen", _d92d6e54f516), _d92d6e54f516.intercepted ? _d92d6e54f516.returnValue : _d92d6e54f516.target.call(_d92d6e54f516.that, _d92d6e54f516.data.name, _d92d6e54f516.data.version);
      });
    }
    overrideName() {
      this.ctx.overrideDescriptor(this.idbDatabaseProto, "name", {
        get: (_82344dbcb8cc, _361d506d96b6) => {
          let _975aace6d4ba = new _6a7610c279e1({
            value: _82344dbcb8cc.call(_361d506d96b6)
          }, _82344dbcb8cc, _361d506d96b6);
          return this.emit("idbFactoryName", _975aace6d4ba), _975aace6d4ba.intercepted ? _975aace6d4ba.returnValue : _975aace6d4ba.data.value;
        }
      });
    }
  }, _88ba7c271e1f = _ef3b7f26a464;
  var _022aa68f8352 = m(_0d3402e587ac(), 1);
  var _eab4cb622ee9 = class extends _022aa68f8352.default {
    constructor(_82344dbcb8cc) {
      super(), this.ctx = _82344dbcb8cc, this.window = _82344dbcb8cc.window, this.WebSocket = this.window.WebSocket || {}, 
      this.wsProto = this.WebSocket.prototype, this.CONNECTING = WebSocket.CONNECTING, 
      this.OPEN = WebSocket.OPEN, this.CLOSING = WebSocket.CLOSING, this.CLOSED = WebSocket.CLOSED, 
      this.socketmap = new WeakMap;
    }
    overrideWebSocket(_82344dbcb8cc) {
      this.ctx.override(this.window, "WebSocket", (_361d506d96b6, _975aace6d4ba, _25c9e28880a6) => {
        let _0379e95aaabd = new EventTarget;
        Object.setPrototypeOf(_0379e95aaabd, this.WebSocket.prototype), _0379e95aaabd.constructor = this.WebSocket;
        let i = _82344dbcb8cc => new Proxy(_82344dbcb8cc, {
          get(_82344dbcb8cc, _361d506d96b6) {
            return _361d506d96b6 === "isTrusted" ? !0 : Reflect.get(_82344dbcb8cc, _361d506d96b6);
          }
        }), _d92d6e54f516 = _82344dbcb8cc.createWebSocket(_25c9e28880a6[0], _25c9e28880a6[1], null, {
          "User-Agent": navigator.userAgent,
          Origin: __uv.meta.url.origin
        }), _0d3402e587ac = {
          extensions: "",
          protocol: "",
          url: _25c9e28880a6[0],
          binaryType: "blob",
          barews: _d92d6e54f516
        };
        function u(_82344dbcb8cc) {
          _0d3402e587ac["on" + _82344dbcb8cc.type]?.(i(_82344dbcb8cc)), _0379e95aaabd.dispatchEvent(_82344dbcb8cc);
        }
        return _d92d6e54f516.addEventListener("open", () => {
          u(new Event("open"));
        }), _d92d6e54f516.addEventListener("close", _82344dbcb8cc => {
          u(new CloseEvent("close", _82344dbcb8cc));
        }), _d92d6e54f516.addEventListener("message", async _82344dbcb8cc => {
          let _361d506d96b6 = _82344dbcb8cc.data;
          typeof _361d506d96b6 == "string" || ("byteLength" in _361d506d96b6 ? _0d3402e587ac.binaryType === "blob" ? _361d506d96b6 = new Blob([ _361d506d96b6 ]) : Object.setPrototypeOf(_361d506d96b6, ArrayBuffer.prototype) : "arrayBuffer" in _361d506d96b6 && _0d3402e587ac.binaryType === "arraybuffer" && (_361d506d96b6 = await _361d506d96b6.arrayBuffer(), 
          Object.setPrototypeOf(_361d506d96b6, ArrayBuffer.prototype)));
          let _975aace6d4ba = new MessageEvent("message", {
            data: _361d506d96b6,
            origin: _82344dbcb8cc.origin,
            lastEventId: _82344dbcb8cc.lastEventId,
            source: _82344dbcb8cc.source,
            ports: _82344dbcb8cc.ports
          });
          u(_975aace6d4ba);
        }), _d92d6e54f516.addEventListener("error", () => {
          u(new Event("error"));
        }), this.socketmap.set(_0379e95aaabd, _0d3402e587ac), _0379e95aaabd;
      }, !0), this.ctx.overrideDescriptor(this.wsProto, "binaryType", {
        get: (_82344dbcb8cc, _361d506d96b6) => this.socketmap.get(_361d506d96b6).binaryType,
        set: (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
          let _25c9e28880a6 = this.socketmap.get(_361d506d96b6);
          (_975aace6d4ba[0] === "blob" || _975aace6d4ba[0] === "arraybuffer") && (_25c9e28880a6.binaryType = _975aace6d4ba[0]);
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "bufferedAmount", {
        get: (_82344dbcb8cc, _361d506d96b6) => 0
      }), this.ctx.overrideDescriptor(this.wsProto, "extensions", {
        get: (_82344dbcb8cc, _361d506d96b6) => this.socketmap.get(_361d506d96b6).extensions
      }), this.ctx.overrideDescriptor(this.wsProto, "onclose", {
        get: (_82344dbcb8cc, _361d506d96b6) => this.socketmap.get(_361d506d96b6).onclose,
        set: (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
          let _25c9e28880a6 = this.socketmap.get(_361d506d96b6);
          _25c9e28880a6.onclose = _975aace6d4ba[0];
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "onerror", {
        get: (_82344dbcb8cc, _361d506d96b6) => this.socketmap.get(_361d506d96b6).onerror,
        set: (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
          let _25c9e28880a6 = this.socketmap.get(_361d506d96b6);
          _25c9e28880a6.onerror = _975aace6d4ba[0];
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "onmessage", {
        get: (_82344dbcb8cc, _361d506d96b6) => this.socketmap.get(_361d506d96b6).onmessage,
        set: (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
          let _25c9e28880a6 = this.socketmap.get(_361d506d96b6);
          _25c9e28880a6.onmessage = _975aace6d4ba[0];
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "onopen", {
        get: (_82344dbcb8cc, _361d506d96b6) => this.socketmap.get(_361d506d96b6).onopen,
        set: (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
          let _25c9e28880a6 = this.socketmap.get(_361d506d96b6);
          _25c9e28880a6.onopen = _975aace6d4ba[0];
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "url", {
        get: (_82344dbcb8cc, _361d506d96b6) => this.socketmap.get(_361d506d96b6).url
      }), this.ctx.overrideDescriptor(this.wsProto, "protocol", {
        get: (_82344dbcb8cc, _361d506d96b6) => this.socketmap.get(_361d506d96b6).protocol
      }), this.ctx.overrideDescriptor(this.wsProto, "readyState", {
        get: (_82344dbcb8cc, _361d506d96b6) => this.socketmap.get(_361d506d96b6).barews.readyState
      }), this.ctx.override(this.wsProto, "send", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => this.socketmap.get(_361d506d96b6).barews.send(_975aace6d4ba[0]), !1), 
      this.ctx.override(this.wsProto, "close", (_82344dbcb8cc, _361d506d96b6, _975aace6d4ba) => {
        let _25c9e28880a6 = this.socketmap.get(_361d506d96b6);
        return _975aace6d4ba[0] === void 0 && (_975aace6d4ba[0] = 1e3), _975aace6d4ba[1] === void 0 && (_975aace6d4ba[1] = ""), 
        _25c9e28880a6.barews.close(_975aace6d4ba[0], _975aace6d4ba[1]);
      }, !1);
    }
  }, _e11d1256cd01 = _eab4cb622ee9;
  var _559fbc48e152 = class extends _be0ac459e2f9.default {
    constructor(_82344dbcb8cc = self, _361d506d96b6, _975aace6d4ba = !_82344dbcb8cc.window) {
      super(), this.window = _82344dbcb8cc, this.nativeMethods = {
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
      }, this.worker = _975aace6d4ba, this.bareClient = _361d506d96b6, this.fetch = new _9efccd75062b(this), 
      this.xhr = new _ce793791e7ee(this), this.idb = new _88ba7c271e1f(this), this.history = new _81d5ba82c687(this), 
      this.element = new _15005d961edf(this), this.node = new _bbb76c978319(this), this.document = new _c94bb5133033(this), 
      this.function = new _89cac9590f58(this), this.object = new _f5a720c0d799(this), 
      this.websocket = new _e11d1256cd01(this), this.message = new _2a9d160ea9b6(this), 
      this.navigator = new _39ac429ccf4d(this), this.eventSource = new _63fb112d140d(this), 
      this.attribute = new _1b2c03745f50(this), this.url = new _a5b4db9b3d41(this), this.workers = new _4fc2c59bb4a3(this), 
      this.location = new _d149d429c8e3(this), this.storage = new _4c6ce6cc88d2(this), 
      this.style = new _84a28dfce788(this);
    }
    override(_82344dbcb8cc, _361d506d96b6, _975aace6d4ba, _25c9e28880a6) {
      let _0379e95aaabd = this.wrap(_82344dbcb8cc, _361d506d96b6, _975aace6d4ba, _25c9e28880a6);
      return _82344dbcb8cc[_361d506d96b6] = _0379e95aaabd, _0379e95aaabd;
    }
    overrideDescriptor(_82344dbcb8cc, _361d506d96b6, _975aace6d4ba = {}) {
      let _25c9e28880a6 = this.wrapDescriptor(_82344dbcb8cc, _361d506d96b6, _975aace6d4ba);
      return _25c9e28880a6 ? (this.nativeMethods.defineProperty(_82344dbcb8cc, _361d506d96b6, _25c9e28880a6), 
      _25c9e28880a6) : {};
    }
    wrap(_82344dbcb8cc, _361d506d96b6, _975aace6d4ba, _25c9e28880a6 = !1) {
      let _0379e95aaabd = _82344dbcb8cc[_361d506d96b6];
      if (!_0379e95aaabd) return _0379e95aaabd;
      let _d92d6e54f516 = "prototype" in _0379e95aaabd ? function() {
        return _975aace6d4ba(_0379e95aaabd, this, [ ...arguments ]);
      } : {
        attach() {
          return _975aace6d4ba(_0379e95aaabd, this, [ ...arguments ]);
        }
      }.attach;
      return _25c9e28880a6 && (_d92d6e54f516.prototype = _0379e95aaabd.prototype, _d92d6e54f516.prototype.constructor = _d92d6e54f516), 
      this.emit("wrap", _0379e95aaabd, _d92d6e54f516, _25c9e28880a6), _d92d6e54f516;
    }
    wrapDescriptor(_82344dbcb8cc, _361d506d96b6, _975aace6d4ba = {}) {
      let _25c9e28880a6 = this.nativeMethods.getOwnPropertyDescriptor(_82344dbcb8cc, _361d506d96b6);
      if (!_25c9e28880a6) return !1;
      for (let _82344dbcb8cc in _975aace6d4ba) _82344dbcb8cc in _25c9e28880a6 && (_82344dbcb8cc === "get" || _82344dbcb8cc === "set" ? _25c9e28880a6[_82344dbcb8cc] = this.wrap(_25c9e28880a6, _82344dbcb8cc, _975aace6d4ba[_82344dbcb8cc]) : _25c9e28880a6[_82344dbcb8cc] = typeof _975aace6d4ba[_82344dbcb8cc] == "function" ? _975aace6d4ba[_82344dbcb8cc](_25c9e28880a6[_82344dbcb8cc]) : _975aace6d4ba[_82344dbcb8cc]);
      return _25c9e28880a6;
    }
  }, _7b973e58bb31 = _559fbc48e152;
  typeof self == "object" && (self.UVClient = _559fbc48e152);
})();
