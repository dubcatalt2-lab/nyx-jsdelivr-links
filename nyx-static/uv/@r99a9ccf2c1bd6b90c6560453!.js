"use strict";

(() => {
  var _54578a5fe28e = Object.create;
  var _7850ade6c8cc = Object.defineProperty;
  var _4cf46dea4c5b = Object.getOwnPropertyDescriptor;
  var _9d3b9d29f57c = Object.getOwnPropertyNames;
  var _cecd9bbc6126 = Object.getPrototypeOf, _d7cc09ba4839 = Object.prototype.hasOwnProperty;
  var et = (_54578a5fe28e, _7850ade6c8cc) => () => (_7850ade6c8cc || _54578a5fe28e((_7850ade6c8cc = {
    exports: {}
  }).exports, _7850ade6c8cc), _7850ade6c8cc.exports);
  var tt = (_54578a5fe28e, _cecd9bbc6126, _b1cb6ca01576, _a8578dde15c4) => {
    if (_cecd9bbc6126 && typeof _cecd9bbc6126 == "object" || typeof _cecd9bbc6126 == "function") for (let _e21ee3f2659d of _9d3b9d29f57c(_cecd9bbc6126)) !_d7cc09ba4839.call(_54578a5fe28e, _e21ee3f2659d) && _e21ee3f2659d !== _b1cb6ca01576 && _7850ade6c8cc(_54578a5fe28e, _e21ee3f2659d, {
      get: () => _cecd9bbc6126[_e21ee3f2659d],
      enumerable: !(_a8578dde15c4 = _4cf46dea4c5b(_cecd9bbc6126, _e21ee3f2659d)) || _a8578dde15c4.enumerable
    });
    return _54578a5fe28e;
  };
  var m = (_4cf46dea4c5b, _9d3b9d29f57c, _d7cc09ba4839) => (_d7cc09ba4839 = _4cf46dea4c5b != null ? _54578a5fe28e(_cecd9bbc6126(_4cf46dea4c5b)) : {}, 
  tt(_9d3b9d29f57c || !_4cf46dea4c5b || !_4cf46dea4c5b.__esModule ? _7850ade6c8cc(_d7cc09ba4839, "default", {
    value: _4cf46dea4c5b,
    enumerable: !0
  }) : _d7cc09ba4839, _4cf46dea4c5b));
  var _b1cb6ca01576 = et((_54578a5fe28e, _7850ade6c8cc) => {
    "use strict";
    var _4cf46dea4c5b = typeof Reflect == "object" ? Reflect : null, _9d3b9d29f57c = _4cf46dea4c5b && typeof _4cf46dea4c5b.apply == "function" ? _4cf46dea4c5b.apply : function(_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) {
      return Function.prototype.apply.call(_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b);
    }, _cecd9bbc6126;
    _4cf46dea4c5b && typeof _4cf46dea4c5b.ownKeys == "function" ? _cecd9bbc6126 = _4cf46dea4c5b.ownKeys : Object.getOwnPropertySymbols ? _cecd9bbc6126 = function(_54578a5fe28e) {
      return Object.getOwnPropertyNames(_54578a5fe28e).concat(Object.getOwnPropertySymbols(_54578a5fe28e));
    } : _cecd9bbc6126 = function(_54578a5fe28e) {
      return Object.getOwnPropertyNames(_54578a5fe28e);
    };
    function rt(_54578a5fe28e) {
      console && console.warn && console.warn(_54578a5fe28e);
    }
    var _d7cc09ba4839 = Number.isNaN || function(_54578a5fe28e) {
      return _54578a5fe28e !== _54578a5fe28e;
    };
    function d() {
      d.init.call(this);
    }
    _7850ade6c8cc.exports = d;
    _7850ade6c8cc.exports.once = st;
    d.EventEmitter = d;
    d.prototype._events = void 0;
    d.prototype._eventsCount = 0;
    d.prototype._maxListeners = void 0;
    var _b1cb6ca01576 = 10;
    function P(_54578a5fe28e) {
      if (typeof _54578a5fe28e != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof _54578a5fe28e);
    }
    Object.defineProperty(d, "defaultMaxListeners", {
      enumerable: !0,
      get: function() {
        return _b1cb6ca01576;
      },
      set: function(_54578a5fe28e) {
        if (typeof _54578a5fe28e != "number" || _54578a5fe28e < 0 || _d7cc09ba4839(_54578a5fe28e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + _54578a5fe28e + ".");
        _b1cb6ca01576 = _54578a5fe28e;
      }
    });
    d.init = function() {
      (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), 
      this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
    };
    d.prototype.setMaxListeners = function(_54578a5fe28e) {
      if (typeof _54578a5fe28e != "number" || _54578a5fe28e < 0 || _d7cc09ba4839(_54578a5fe28e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + _54578a5fe28e + ".");
      return this._maxListeners = _54578a5fe28e, this;
    };
    function J(_54578a5fe28e) {
      return _54578a5fe28e._maxListeners === void 0 ? d.defaultMaxListeners : _54578a5fe28e._maxListeners;
    }
    d.prototype.getMaxListeners = function() {
      return J(this);
    };
    d.prototype.emit = function(_54578a5fe28e) {
      for (var _7850ade6c8cc = [], _4cf46dea4c5b = 1; _4cf46dea4c5b < arguments.length; _4cf46dea4c5b++) _7850ade6c8cc.push(arguments[_4cf46dea4c5b]);
      var _cecd9bbc6126 = _54578a5fe28e === "error", _d7cc09ba4839 = this._events;
      if (_d7cc09ba4839 !== void 0) _cecd9bbc6126 = _cecd9bbc6126 && _d7cc09ba4839.error === void 0; else if (!_cecd9bbc6126) return !1;
      if (_cecd9bbc6126) {
        var _b1cb6ca01576;
        if (_7850ade6c8cc.length > 0 && (_b1cb6ca01576 = _7850ade6c8cc[0]), _b1cb6ca01576 instanceof Error) throw _b1cb6ca01576;
        var _a8578dde15c4 = new Error("Unhandled error." + (_b1cb6ca01576 ? " (" + _b1cb6ca01576.message + ")" : ""));
        throw _a8578dde15c4.context = _b1cb6ca01576, _a8578dde15c4;
      }
      var _e21ee3f2659d = _d7cc09ba4839[_54578a5fe28e];
      if (_e21ee3f2659d === void 0) return !1;
      if (typeof _e21ee3f2659d == "function") _9d3b9d29f57c(_e21ee3f2659d, this, _7850ade6c8cc); else for (var _fedc199a9987 = _e21ee3f2659d.length, _4d6b2d124e20 = re(_e21ee3f2659d, _fedc199a9987), _4cf46dea4c5b = 0; _4cf46dea4c5b < _fedc199a9987; ++_4cf46dea4c5b) _9d3b9d29f57c(_4d6b2d124e20[_4cf46dea4c5b], this, _7850ade6c8cc);
      return !0;
    };
    function Y(_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b, _9d3b9d29f57c) {
      var _cecd9bbc6126, _d7cc09ba4839, _b1cb6ca01576;
      if (P(_4cf46dea4c5b), _d7cc09ba4839 = _54578a5fe28e._events, _d7cc09ba4839 === void 0 ? (_d7cc09ba4839 = _54578a5fe28e._events = Object.create(null), 
      _54578a5fe28e._eventsCount = 0) : (_d7cc09ba4839.newListener !== void 0 && (_54578a5fe28e.emit("newListener", _7850ade6c8cc, _4cf46dea4c5b.listener ? _4cf46dea4c5b.listener : _4cf46dea4c5b), 
      _d7cc09ba4839 = _54578a5fe28e._events), _b1cb6ca01576 = _d7cc09ba4839[_7850ade6c8cc]), 
      _b1cb6ca01576 === void 0) _b1cb6ca01576 = _d7cc09ba4839[_7850ade6c8cc] = _4cf46dea4c5b, 
      ++_54578a5fe28e._eventsCount; else if (typeof _b1cb6ca01576 == "function" ? _b1cb6ca01576 = _d7cc09ba4839[_7850ade6c8cc] = _9d3b9d29f57c ? [ _4cf46dea4c5b, _b1cb6ca01576 ] : [ _b1cb6ca01576, _4cf46dea4c5b ] : _9d3b9d29f57c ? _b1cb6ca01576.unshift(_4cf46dea4c5b) : _b1cb6ca01576.push(_4cf46dea4c5b), 
      _cecd9bbc6126 = J(_54578a5fe28e), _cecd9bbc6126 > 0 && _b1cb6ca01576.length > _cecd9bbc6126 && !_b1cb6ca01576.warned) {
        _b1cb6ca01576.warned = !0;
        var _a8578dde15c4 = new Error("Possible EventEmitter memory leak detected. " + _b1cb6ca01576.length + " " + String(_7850ade6c8cc) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        _a8578dde15c4.name = "MaxListenersExceededWarning", _a8578dde15c4.emitter = _54578a5fe28e, 
        _a8578dde15c4.type = _7850ade6c8cc, _a8578dde15c4.count = _b1cb6ca01576.length, 
        rt(_a8578dde15c4);
      }
      return _54578a5fe28e;
    }
    d.prototype.addListener = function(_54578a5fe28e, _7850ade6c8cc) {
      return Y(this, _54578a5fe28e, _7850ade6c8cc, !1);
    };
    d.prototype.on = d.prototype.addListener;
    d.prototype.prependListener = function(_54578a5fe28e, _7850ade6c8cc) {
      return Y(this, _54578a5fe28e, _7850ade6c8cc, !0);
    };
    function ot() {
      if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 
      arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
    }
    function Z(_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) {
      var _9d3b9d29f57c = {
        fired: !1,
        wrapFn: void 0,
        target: _54578a5fe28e,
        type: _7850ade6c8cc,
        listener: _4cf46dea4c5b
      }, _cecd9bbc6126 = ot.bind(_9d3b9d29f57c);
      return _cecd9bbc6126.listener = _4cf46dea4c5b, _9d3b9d29f57c.wrapFn = _cecd9bbc6126, 
      _cecd9bbc6126;
    }
    d.prototype.once = function(_54578a5fe28e, _7850ade6c8cc) {
      return P(_7850ade6c8cc), this.on(_54578a5fe28e, Z(this, _54578a5fe28e, _7850ade6c8cc)), 
      this;
    };
    d.prototype.prependOnceListener = function(_54578a5fe28e, _7850ade6c8cc) {
      return P(_7850ade6c8cc), this.prependListener(_54578a5fe28e, Z(this, _54578a5fe28e, _7850ade6c8cc)), 
      this;
    };
    d.prototype.removeListener = function(_54578a5fe28e, _7850ade6c8cc) {
      var _4cf46dea4c5b, _9d3b9d29f57c, _cecd9bbc6126, _d7cc09ba4839, _b1cb6ca01576;
      if (P(_7850ade6c8cc), _9d3b9d29f57c = this._events, _9d3b9d29f57c === void 0) return this;
      if (_4cf46dea4c5b = _9d3b9d29f57c[_54578a5fe28e], _4cf46dea4c5b === void 0) return this;
      if (_4cf46dea4c5b === _7850ade6c8cc || _4cf46dea4c5b.listener === _7850ade6c8cc) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete _9d3b9d29f57c[_54578a5fe28e], 
      _9d3b9d29f57c.removeListener && this.emit("removeListener", _54578a5fe28e, _4cf46dea4c5b.listener || _7850ade6c8cc)); else if (typeof _4cf46dea4c5b != "function") {
        for (_cecd9bbc6126 = -1, _d7cc09ba4839 = _4cf46dea4c5b.length - 1; _d7cc09ba4839 >= 0; _d7cc09ba4839--) if (_4cf46dea4c5b[_d7cc09ba4839] === _7850ade6c8cc || _4cf46dea4c5b[_d7cc09ba4839].listener === _7850ade6c8cc) {
          _b1cb6ca01576 = _4cf46dea4c5b[_d7cc09ba4839].listener, _cecd9bbc6126 = _d7cc09ba4839;
          break;
        }
        if (_cecd9bbc6126 < 0) return this;
        _cecd9bbc6126 === 0 ? _4cf46dea4c5b.shift() : nt(_4cf46dea4c5b, _cecd9bbc6126), 
        _4cf46dea4c5b.length === 1 && (_9d3b9d29f57c[_54578a5fe28e] = _4cf46dea4c5b[0]), 
        _9d3b9d29f57c.removeListener !== void 0 && this.emit("removeListener", _54578a5fe28e, _b1cb6ca01576 || _7850ade6c8cc);
      }
      return this;
    };
    d.prototype.off = d.prototype.removeListener;
    d.prototype.removeAllListeners = function(_54578a5fe28e) {
      var _7850ade6c8cc, _4cf46dea4c5b, _9d3b9d29f57c;
      if (_4cf46dea4c5b = this._events, _4cf46dea4c5b === void 0) return this;
      if (_4cf46dea4c5b.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), 
      this._eventsCount = 0) : _4cf46dea4c5b[_54578a5fe28e] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete _4cf46dea4c5b[_54578a5fe28e]), 
      this;
      if (arguments.length === 0) {
        var _cecd9bbc6126 = Object.keys(_4cf46dea4c5b), _d7cc09ba4839;
        for (_9d3b9d29f57c = 0; _9d3b9d29f57c < _cecd9bbc6126.length; ++_9d3b9d29f57c) _d7cc09ba4839 = _cecd9bbc6126[_9d3b9d29f57c], 
        _d7cc09ba4839 !== "removeListener" && this.removeAllListeners(_d7cc09ba4839);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), 
        this._eventsCount = 0, this;
      }
      if (_7850ade6c8cc = _4cf46dea4c5b[_54578a5fe28e], typeof _7850ade6c8cc == "function") this.removeListener(_54578a5fe28e, _7850ade6c8cc); else if (_7850ade6c8cc !== void 0) for (_9d3b9d29f57c = _7850ade6c8cc.length - 1; _9d3b9d29f57c >= 0; _9d3b9d29f57c--) this.removeListener(_54578a5fe28e, _7850ade6c8cc[_9d3b9d29f57c]);
      return this;
    };
    function ee(_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) {
      var _9d3b9d29f57c = _54578a5fe28e._events;
      if (_9d3b9d29f57c === void 0) return [];
      var _cecd9bbc6126 = _9d3b9d29f57c[_7850ade6c8cc];
      return _cecd9bbc6126 === void 0 ? [] : typeof _cecd9bbc6126 == "function" ? _4cf46dea4c5b ? [ _cecd9bbc6126.listener || _cecd9bbc6126 ] : [ _cecd9bbc6126 ] : _4cf46dea4c5b ? it(_cecd9bbc6126) : re(_cecd9bbc6126, _cecd9bbc6126.length);
    }
    d.prototype.listeners = function(_54578a5fe28e) {
      return ee(this, _54578a5fe28e, !0);
    };
    d.prototype.rawListeners = function(_54578a5fe28e) {
      return ee(this, _54578a5fe28e, !1);
    };
    d.listenerCount = function(_54578a5fe28e, _7850ade6c8cc) {
      return typeof _54578a5fe28e.listenerCount == "function" ? _54578a5fe28e.listenerCount(_7850ade6c8cc) : te.call(_54578a5fe28e, _7850ade6c8cc);
    };
    d.prototype.listenerCount = te;
    function te(_54578a5fe28e) {
      var _7850ade6c8cc = this._events;
      if (_7850ade6c8cc !== void 0) {
        var _4cf46dea4c5b = _7850ade6c8cc[_54578a5fe28e];
        if (typeof _4cf46dea4c5b == "function") return 1;
        if (_4cf46dea4c5b !== void 0) return _4cf46dea4c5b.length;
      }
      return 0;
    }
    d.prototype.eventNames = function() {
      return this._eventsCount > 0 ? _cecd9bbc6126(this._events) : [];
    };
    function re(_54578a5fe28e, _7850ade6c8cc) {
      for (var _4cf46dea4c5b = new Array(_7850ade6c8cc), _9d3b9d29f57c = 0; _9d3b9d29f57c < _7850ade6c8cc; ++_9d3b9d29f57c) _4cf46dea4c5b[_9d3b9d29f57c] = _54578a5fe28e[_9d3b9d29f57c];
      return _4cf46dea4c5b;
    }
    function nt(_54578a5fe28e, _7850ade6c8cc) {
      for (;_7850ade6c8cc + 1 < _54578a5fe28e.length; _7850ade6c8cc++) _54578a5fe28e[_7850ade6c8cc] = _54578a5fe28e[_7850ade6c8cc + 1];
      _54578a5fe28e.pop();
    }
    function it(_54578a5fe28e) {
      for (var _7850ade6c8cc = new Array(_54578a5fe28e.length), _4cf46dea4c5b = 0; _4cf46dea4c5b < _7850ade6c8cc.length; ++_4cf46dea4c5b) _7850ade6c8cc[_4cf46dea4c5b] = _54578a5fe28e[_4cf46dea4c5b].listener || _54578a5fe28e[_4cf46dea4c5b];
      return _7850ade6c8cc;
    }
    function st(_54578a5fe28e, _7850ade6c8cc) {
      return new Promise(function(_4cf46dea4c5b, _9d3b9d29f57c) {
        function n(_4cf46dea4c5b) {
          _54578a5fe28e.removeListener(_7850ade6c8cc, o), _9d3b9d29f57c(_4cf46dea4c5b);
        }
        function o() {
          typeof _54578a5fe28e.removeListener == "function" && _54578a5fe28e.removeListener("error", n), 
          _4cf46dea4c5b([].slice.call(arguments));
        }
        oe(_54578a5fe28e, _7850ade6c8cc, o, {
          once: !0
        }), _7850ade6c8cc !== "error" && at(_54578a5fe28e, n, {
          once: !0
        });
      });
    }
    function at(_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) {
      typeof _54578a5fe28e.on == "function" && oe(_54578a5fe28e, "error", _7850ade6c8cc, _4cf46dea4c5b);
    }
    function oe(_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b, _9d3b9d29f57c) {
      if (typeof _54578a5fe28e.on == "function") _9d3b9d29f57c.once ? _54578a5fe28e.once(_7850ade6c8cc, _4cf46dea4c5b) : _54578a5fe28e.on(_7850ade6c8cc, _4cf46dea4c5b); else if (typeof _54578a5fe28e.addEventListener == "function") _54578a5fe28e.addEventListener(_7850ade6c8cc, function n(_cecd9bbc6126) {
        _9d3b9d29f57c.once && _54578a5fe28e.removeEventListener(_7850ade6c8cc, n), _4cf46dea4c5b(_cecd9bbc6126);
      }); else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof _54578a5fe28e);
    }
  });
  var _a8578dde15c4 = m(_b1cb6ca01576(), 1);
  var _e21ee3f2659d = class {
    #_54578a5fe28e;
    #_7850ade6c8cc;
    constructor(_54578a5fe28e = {}, _7850ade6c8cc = null, _4cf46dea4c5b = null) {
      this.#_54578a5fe28e = !1, this.#_7850ade6c8cc = null, this.data = _54578a5fe28e, 
      this.target = _7850ade6c8cc, this.that = _4cf46dea4c5b;
    }
    get intercepted() {
      return this.#_54578a5fe28e;
    }
    get returnValue() {
      return this.#_7850ade6c8cc;
    }
    respondWith(_54578a5fe28e) {
      this.#_7850ade6c8cc = _54578a5fe28e, this.#_54578a5fe28e = !0;
    }
  }, _fedc199a9987 = _e21ee3f2659d;
  var _4d6b2d124e20 = class extends _a8578dde15c4.default {
    constructor(_54578a5fe28e) {
      super(), this.ctx = _54578a5fe28e, this.window = _54578a5fe28e.window, this.document = this.window.document, 
      this.Document = this.window.Document || {}, this.DOMParser = this.window.DOMParser || {}, 
      this.docProto = this.Document.prototype || {}, this.domProto = this.DOMParser.prototype || {}, 
      this.title = _54578a5fe28e.nativeMethods.getOwnPropertyDescriptor(this.docProto, "title"), 
      this.cookie = _54578a5fe28e.nativeMethods.getOwnPropertyDescriptor(this.docProto, "cookie"), 
      this.referrer = _54578a5fe28e.nativeMethods.getOwnPropertyDescriptor(this.docProto, "referrer"), 
      this.domain = _54578a5fe28e.nativeMethods.getOwnPropertyDescriptor(this.docProto, "domain"), 
      this.documentURI = _54578a5fe28e.nativeMethods.getOwnPropertyDescriptor(this.docProto, "documentURI"), 
      this.write = this.docProto.write, this.writeln = this.docProto.writeln, this.querySelector = this.docProto.querySelector, 
      this.querySelectorAll = this.docProto.querySelectorAll, this.parseFromString = this.domProto.parseFromString, 
      this.URL = _54578a5fe28e.nativeMethods.getOwnPropertyDescriptor(this.docProto, "URL");
    }
    overrideParseFromString() {
      this.ctx.override(this.domProto, "parseFromString", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (2 > _4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c, _cecd9bbc6126] = _4cf46dea4c5b, _d7cc09ba4839 = new _fedc199a9987({
          string: _9d3b9d29f57c,
          type: _cecd9bbc6126
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("parseFromString", _d7cc09ba4839), _d7cc09ba4839.intercepted ? _d7cc09ba4839.returnValue : _d7cc09ba4839.target.call(_d7cc09ba4839.that, _d7cc09ba4839.data.string, _d7cc09ba4839.data.type);
      });
    }
    overrideQuerySelector() {
      this.ctx.override(this.docProto, "querySelector", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (!_4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c] = _4cf46dea4c5b, _cecd9bbc6126 = new _fedc199a9987({
          selectors: _9d3b9d29f57c
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("querySelector", _cecd9bbc6126), _cecd9bbc6126.intercepted ? _cecd9bbc6126.returnValue : _cecd9bbc6126.target.call(_cecd9bbc6126.that, _cecd9bbc6126.data.selectors);
      });
    }
    overrideDomain() {
      this.ctx.overrideDescriptor(this.docProto, "domain", {
        get: (_54578a5fe28e, _7850ade6c8cc) => {
          let _4cf46dea4c5b = new _fedc199a9987({
            value: _54578a5fe28e.call(_7850ade6c8cc)
          }, _54578a5fe28e, _7850ade6c8cc);
          return this.emit("getDomain", _4cf46dea4c5b), _4cf46dea4c5b.intercepted ? _4cf46dea4c5b.returnValue : _4cf46dea4c5b.data.value;
        },
        set: (_54578a5fe28e, _7850ade6c8cc, [_4cf46dea4c5b]) => {
          let _9d3b9d29f57c = new _fedc199a9987({
            value: _4cf46dea4c5b
          }, _54578a5fe28e, _7850ade6c8cc);
          return this.emit("setDomain", _9d3b9d29f57c), _9d3b9d29f57c.intercepted ? _9d3b9d29f57c.returnValue : _9d3b9d29f57c.target.call(_9d3b9d29f57c.that, _9d3b9d29f57c.data.value);
        }
      });
    }
    overrideReferrer() {
      this.ctx.overrideDescriptor(this.docProto, "referrer", {
        get: (_54578a5fe28e, _7850ade6c8cc) => {
          let _4cf46dea4c5b = new _fedc199a9987({
            value: _54578a5fe28e.call(_7850ade6c8cc)
          }, _54578a5fe28e, _7850ade6c8cc);
          return this.emit("referrer", _4cf46dea4c5b), _4cf46dea4c5b.intercepted ? _4cf46dea4c5b.returnValue : _4cf46dea4c5b.data.value;
        }
      });
    }
    overrideCreateTreeWalker() {
      this.ctx.override(this.docProto, "createTreeWalker", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (!_4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c, _cecd9bbc6126 = 4294967295, _d7cc09ba4839, _b1cb6ca01576] = _4cf46dea4c5b, _a8578dde15c4 = new _fedc199a9987({
          root: _9d3b9d29f57c,
          show: _cecd9bbc6126,
          filter: _d7cc09ba4839,
          expandEntityReferences: _b1cb6ca01576
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("createTreeWalker", _a8578dde15c4), _a8578dde15c4.intercepted ? _a8578dde15c4.returnValue : _a8578dde15c4.target.call(_a8578dde15c4.that, _a8578dde15c4.data.root, _a8578dde15c4.data.show, _a8578dde15c4.data.filter, _a8578dde15c4.data.expandEntityReferences);
      });
    }
    overrideWrite() {
      this.ctx.override(this.docProto, "write", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (!_4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [..._9d3b9d29f57c] = _4cf46dea4c5b, _cecd9bbc6126 = new _fedc199a9987({
          html: _9d3b9d29f57c
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("write", _cecd9bbc6126), _cecd9bbc6126.intercepted ? _cecd9bbc6126.returnValue : _cecd9bbc6126.target.apply(_cecd9bbc6126.that, _cecd9bbc6126.data.html);
      }), this.ctx.override(this.docProto, "writeln", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (!_4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [..._9d3b9d29f57c] = _4cf46dea4c5b, _cecd9bbc6126 = new _fedc199a9987({
          html: _9d3b9d29f57c
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("writeln", _cecd9bbc6126), _cecd9bbc6126.intercepted ? _cecd9bbc6126.returnValue : _cecd9bbc6126.target.apply(_cecd9bbc6126.that, _cecd9bbc6126.data.html);
      });
    }
    overrideDocumentURI() {
      this.ctx.overrideDescriptor(this.docProto, "documentURI", {
        get: (_54578a5fe28e, _7850ade6c8cc) => {
          let _4cf46dea4c5b = new _fedc199a9987({
            value: _54578a5fe28e.call(_7850ade6c8cc)
          }, _54578a5fe28e, _7850ade6c8cc);
          return this.emit("documentURI", _4cf46dea4c5b), _4cf46dea4c5b.intercepted ? _4cf46dea4c5b.returnValue : _4cf46dea4c5b.data.value;
        }
      });
    }
    overrideURL() {
      this.ctx.overrideDescriptor(this.docProto, "URL", {
        get: (_54578a5fe28e, _7850ade6c8cc) => {
          let _4cf46dea4c5b = new _fedc199a9987({
            value: _54578a5fe28e.call(_7850ade6c8cc)
          }, _54578a5fe28e, _7850ade6c8cc);
          return this.emit("url", _4cf46dea4c5b), _4cf46dea4c5b.intercepted ? _4cf46dea4c5b.returnValue : _4cf46dea4c5b.data.value;
        }
      });
    }
    overrideCookie() {
      this.ctx.overrideDescriptor(this.docProto, "cookie", {
        get: (_54578a5fe28e, _7850ade6c8cc) => {
          let _4cf46dea4c5b = new _fedc199a9987({
            value: _54578a5fe28e.call(_7850ade6c8cc)
          }, _54578a5fe28e, _7850ade6c8cc);
          return this.emit("getCookie", _4cf46dea4c5b), _4cf46dea4c5b.intercepted ? _4cf46dea4c5b.returnValue : _4cf46dea4c5b.data.value;
        },
        set: (_54578a5fe28e, _7850ade6c8cc, [_4cf46dea4c5b]) => {
          let _9d3b9d29f57c = new _fedc199a9987({
            value: _4cf46dea4c5b
          }, _54578a5fe28e, _7850ade6c8cc);
          return this.emit("setCookie", _9d3b9d29f57c), _9d3b9d29f57c.intercepted ? _9d3b9d29f57c.returnValue : _9d3b9d29f57c.target.call(_9d3b9d29f57c.that, _9d3b9d29f57c.data.value);
        }
      });
    }
    overrideTitle() {
      this.ctx.overrideDescriptor(this.docProto, "title", {
        get: (_54578a5fe28e, _7850ade6c8cc) => {
          let _4cf46dea4c5b = new _fedc199a9987({
            value: _54578a5fe28e.call(_7850ade6c8cc)
          }, _54578a5fe28e, _7850ade6c8cc);
          return this.emit("getTitle", _4cf46dea4c5b), _4cf46dea4c5b.intercepted ? _4cf46dea4c5b.returnValue : _4cf46dea4c5b.data.value;
        },
        set: (_54578a5fe28e, _7850ade6c8cc, [_4cf46dea4c5b]) => {
          let _9d3b9d29f57c = new _fedc199a9987({
            value: _4cf46dea4c5b
          }, _54578a5fe28e, _7850ade6c8cc);
          return this.emit("setTitle", _9d3b9d29f57c), _9d3b9d29f57c.intercepted ? _9d3b9d29f57c.returnValue : _9d3b9d29f57c.target.call(_9d3b9d29f57c.that, _9d3b9d29f57c.data.value);
        }
      });
    }
  }, _bf63bc55f092 = _4d6b2d124e20;
  var _44adf00f206e = m(_b1cb6ca01576(), 1);
  var _28b8f39bdaab = class extends _44adf00f206e.default {
    constructor(_54578a5fe28e) {
      super(), this.ctx = _54578a5fe28e, this.window = _54578a5fe28e.window, this.Audio = this.window.Audio, 
      this.Element = this.window.Element, this.elemProto = this.Element ? this.Element.prototype : {}, 
      this.innerHTML = _54578a5fe28e.nativeMethods.getOwnPropertyDescriptor(this.elemProto, "innerHTML"), 
      this.outerHTML = _54578a5fe28e.nativeMethods.getOwnPropertyDescriptor(this.elemProto, "outerHTML"), 
      this.setAttribute = this.elemProto.setAttribute, this.getAttribute = this.elemProto.getAttribute, 
      this.removeAttribute = this.elemProto.removeAttribute, this.hasAttribute = this.elemProto.hasAttribute, 
      this.querySelector = this.elemProto.querySelector, this.querySelectorAll = this.elemProto.querySelectorAll, 
      this.insertAdjacentHTML = this.elemProto.insertAdjacentHTML, this.insertAdjacentText = this.elemProto.insertAdjacentText;
    }
    overrideQuerySelector() {
      this.ctx.override(this.elemProto, "querySelector", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (!_4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c] = _4cf46dea4c5b, _cecd9bbc6126 = new _fedc199a9987({
          selectors: _9d3b9d29f57c
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("querySelector", _cecd9bbc6126), _cecd9bbc6126.intercepted ? _cecd9bbc6126.returnValue : _cecd9bbc6126.target.call(_cecd9bbc6126.that, _cecd9bbc6126.data.selectors);
      });
    }
    overrideAttribute() {
      this.ctx.override(this.elemProto, "getAttribute", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (!_4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c] = _4cf46dea4c5b, _cecd9bbc6126 = new _fedc199a9987({
          name: _9d3b9d29f57c
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("getAttribute", _cecd9bbc6126), _cecd9bbc6126.intercepted ? _cecd9bbc6126.returnValue : _cecd9bbc6126.target.call(_cecd9bbc6126.that, _cecd9bbc6126.data.name);
      }), this.ctx.override(this.elemProto, "setAttribute", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (2 > _4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c, _cecd9bbc6126] = _4cf46dea4c5b, _d7cc09ba4839 = new _fedc199a9987({
          name: _9d3b9d29f57c,
          value: _cecd9bbc6126
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("setAttribute", _d7cc09ba4839), _d7cc09ba4839.intercepted ? _d7cc09ba4839.returnValue : _d7cc09ba4839.target.call(_d7cc09ba4839.that, _d7cc09ba4839.data.name, _d7cc09ba4839.data.value);
      }), this.ctx.override(this.elemProto, "hasAttribute", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (!_4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c] = _4cf46dea4c5b, _cecd9bbc6126 = new _fedc199a9987({
          name: _9d3b9d29f57c
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("hasAttribute", _cecd9bbc6126), _cecd9bbc6126.intercepted ? _cecd9bbc6126.returnValue : _cecd9bbc6126.target.call(_cecd9bbc6126.that, _cecd9bbc6126.data.name);
      }), this.ctx.override(this.elemProto, "removeAttribute", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (!_4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c] = _4cf46dea4c5b, _cecd9bbc6126 = new _fedc199a9987({
          name: _9d3b9d29f57c
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("removeAttribute", _cecd9bbc6126), _cecd9bbc6126.intercepted ? _cecd9bbc6126.returnValue : _cecd9bbc6126.target.call(_cecd9bbc6126.that, _cecd9bbc6126.data.name);
      });
    }
    overrideAudio() {
      this.ctx.override(this.window, "Audio", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (!_4cf46dea4c5b.length) return new _54578a5fe28e(..._4cf46dea4c5b);
        let [_9d3b9d29f57c] = _4cf46dea4c5b, _cecd9bbc6126 = new _fedc199a9987({
          url: _9d3b9d29f57c
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("audio", _cecd9bbc6126), _cecd9bbc6126.intercepted ? _cecd9bbc6126.returnValue : new _cecd9bbc6126.target(_cecd9bbc6126.data.url);
      }, !0);
    }
    overrideHtml() {
      this.hookProperty(this.Element, "innerHTML", {
        get: (_54578a5fe28e, _7850ade6c8cc) => {
          let _4cf46dea4c5b = new _fedc199a9987({
            value: _54578a5fe28e.call(_7850ade6c8cc)
          }, _54578a5fe28e, _7850ade6c8cc);
          return this.emit("getInnerHTML", _4cf46dea4c5b), _4cf46dea4c5b.intercepted ? _4cf46dea4c5b.returnValue : _4cf46dea4c5b.data.value;
        },
        set: (_54578a5fe28e, _7850ade6c8cc, [_4cf46dea4c5b]) => {
          let _9d3b9d29f57c = new _fedc199a9987({
            value: _4cf46dea4c5b
          }, _54578a5fe28e, _7850ade6c8cc);
          if (this.emit("setInnerHTML", _9d3b9d29f57c), _9d3b9d29f57c.intercepted) return _9d3b9d29f57c.returnValue;
          _54578a5fe28e.call(_7850ade6c8cc, _9d3b9d29f57c.data.value);
        }
      }), this.hookProperty(this.Element, "outerHTML", {
        get: (_54578a5fe28e, _7850ade6c8cc) => {
          let _4cf46dea4c5b = new _fedc199a9987({
            value: _54578a5fe28e.call(_7850ade6c8cc)
          }, _54578a5fe28e, _7850ade6c8cc);
          return this.emit("getOuterHTML", _4cf46dea4c5b), _4cf46dea4c5b.intercepted ? _4cf46dea4c5b.returnValue : _4cf46dea4c5b.data.value;
        },
        set: (_54578a5fe28e, _7850ade6c8cc, [_4cf46dea4c5b]) => {
          let _9d3b9d29f57c = new _fedc199a9987({
            value: _4cf46dea4c5b
          }, _54578a5fe28e, _7850ade6c8cc);
          if (this.emit("setOuterHTML", _9d3b9d29f57c), _9d3b9d29f57c.intercepted) return _9d3b9d29f57c.returnValue;
          _54578a5fe28e.call(_7850ade6c8cc, _9d3b9d29f57c.data.value);
        }
      });
    }
    overrideInsertAdjacentHTML() {
      this.ctx.override(this.elemProto, "insertAdjacentHTML", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (2 > _4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c, _cecd9bbc6126] = _4cf46dea4c5b, _d7cc09ba4839 = new _fedc199a9987({
          position: _9d3b9d29f57c,
          html: _cecd9bbc6126
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("insertAdjacentHTML", _d7cc09ba4839), _d7cc09ba4839.intercepted ? _d7cc09ba4839.returnValue : _d7cc09ba4839.target.call(_d7cc09ba4839.that, _d7cc09ba4839.data.position, _d7cc09ba4839.data.html);
      });
    }
    overrideInsertAdjacentText() {
      this.ctx.override(this.elemProto, "insertAdjacentText", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (2 > _4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c, _cecd9bbc6126] = _4cf46dea4c5b, _d7cc09ba4839 = new _fedc199a9987({
          position: _9d3b9d29f57c,
          text: _cecd9bbc6126
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("insertAdjacentText", _d7cc09ba4839), _d7cc09ba4839.intercepted ? _d7cc09ba4839.returnValue : _d7cc09ba4839.target.call(_d7cc09ba4839.that, _d7cc09ba4839.data.position, _d7cc09ba4839.data.text);
      });
    }
    hookProperty(_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) {
      if (!_54578a5fe28e) return !1;
      if (this.ctx.nativeMethods.isArray(_54578a5fe28e)) {
        for (let _9d3b9d29f57c of _54578a5fe28e) this.hookProperty(_9d3b9d29f57c, _7850ade6c8cc, _4cf46dea4c5b);
        return !0;
      }
      let _9d3b9d29f57c = _54578a5fe28e.prototype;
      return this.ctx.overrideDescriptor(_9d3b9d29f57c, _7850ade6c8cc, _4cf46dea4c5b), 
      !0;
    }
  }, _8415d837712b = _28b8f39bdaab;
  var _227fe0dd1926 = m(_b1cb6ca01576(), 1);
  var _7a0d603da8b2 = class extends _227fe0dd1926.default {
    constructor(_54578a5fe28e) {
      super(), this.ctx = _54578a5fe28e, this.window = _54578a5fe28e.window, this.Node = _54578a5fe28e.window.Node || {}, 
      this.nodeProto = this.Node.prototype || {}, this.compareDocumentPosition = this.nodeProto.compareDocumentPosition, 
      this.contains = this.nodeProto.contains, this.insertBefore = this.nodeProto.insertBefore, 
      this.replaceChild = this.nodeProto.replaceChild, this.append = this.nodeProto.append, 
      this.appendChild = this.nodeProto.appendChild, this.removeChild = this.nodeProto.removeChild, 
      this.textContent = _54578a5fe28e.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "textContent"), 
      this.parentNode = _54578a5fe28e.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "parentNode"), 
      this.parentElement = _54578a5fe28e.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "parentElement"), 
      this.childNodes = _54578a5fe28e.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "childNodes"), 
      this.baseURI = _54578a5fe28e.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "baseURI"), 
      this.previousSibling = _54578a5fe28e.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "previousSibling"), 
      this.ownerDocument = _54578a5fe28e.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "ownerDocument");
    }
    overrideTextContent() {
      this.ctx.overrideDescriptor(this.nodeProto, "textContent", {
        get: (_54578a5fe28e, _7850ade6c8cc) => {
          let _4cf46dea4c5b = new _fedc199a9987({
            value: _54578a5fe28e.call(_7850ade6c8cc)
          }, _54578a5fe28e, _7850ade6c8cc);
          return this.emit("getTextContent", _4cf46dea4c5b), _4cf46dea4c5b.intercepted ? _4cf46dea4c5b.returnValue : _4cf46dea4c5b.data.value;
        },
        set: (_54578a5fe28e, _7850ade6c8cc, [_4cf46dea4c5b]) => {
          let _9d3b9d29f57c = new _fedc199a9987({
            value: _4cf46dea4c5b
          }, _54578a5fe28e, _7850ade6c8cc);
          if (this.emit("setTextContent", _9d3b9d29f57c), _9d3b9d29f57c.intercepted) return _9d3b9d29f57c.returnValue;
          _54578a5fe28e.call(_7850ade6c8cc, _9d3b9d29f57c.data.value);
        }
      });
    }
    overrideAppend() {
      this.ctx.override(this.nodeProto, "append", (_54578a5fe28e, _7850ade6c8cc, [..._4cf46dea4c5b]) => {
        let _9d3b9d29f57c = new _fedc199a9987({
          nodes: _4cf46dea4c5b
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("append", _9d3b9d29f57c), _9d3b9d29f57c.intercepted ? _9d3b9d29f57c.returnValue : _9d3b9d29f57c.target.call(_9d3b9d29f57c.that, _9d3b9d29f57c.data.nodes);
      }), this.ctx.override(this.nodeProto, "appendChild", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (!_4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c] = _4cf46dea4c5b, _cecd9bbc6126 = new _fedc199a9987({
          node: _9d3b9d29f57c
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("appendChild", _cecd9bbc6126), _cecd9bbc6126.intercepted ? _cecd9bbc6126.returnValue : _cecd9bbc6126.target.call(_cecd9bbc6126.that, _cecd9bbc6126.data.node);
      });
    }
    overrideBaseURI() {
      this.ctx.overrideDescriptor(this.nodeProto, "baseURI", {
        get: (_54578a5fe28e, _7850ade6c8cc) => {
          let _4cf46dea4c5b = new _fedc199a9987({
            value: _54578a5fe28e.call(_7850ade6c8cc)
          }, _54578a5fe28e, _7850ade6c8cc);
          return this.emit("baseURI", _4cf46dea4c5b), _4cf46dea4c5b.intercepted ? _4cf46dea4c5b.returnValue : _4cf46dea4c5b.data.value;
        }
      });
    }
    overrideParent() {
      this.ctx.overrideDescriptor(this.nodeProto, "parentNode", {
        get: (_54578a5fe28e, _7850ade6c8cc) => {
          let _4cf46dea4c5b = new _fedc199a9987({
            node: _54578a5fe28e.call(_7850ade6c8cc)
          }, _54578a5fe28e, _7850ade6c8cc);
          return this.emit("parentNode", _4cf46dea4c5b), _4cf46dea4c5b.intercepted ? _4cf46dea4c5b.returnValue : _4cf46dea4c5b.data.node;
        }
      }), this.ctx.overrideDescriptor(this.nodeProto, "parentElement", {
        get: (_54578a5fe28e, _7850ade6c8cc) => {
          let _4cf46dea4c5b = new _fedc199a9987({
            element: _54578a5fe28e.call(_7850ade6c8cc)
          }, _54578a5fe28e, _7850ade6c8cc);
          return this.emit("parentElement", _4cf46dea4c5b), _4cf46dea4c5b.intercepted ? _4cf46dea4c5b.returnValue : _4cf46dea4c5b.data.node;
        }
      });
    }
    overrideOwnerDocument() {
      this.ctx.overrideDescriptor(this.nodeProto, "ownerDocument", {
        get: (_54578a5fe28e, _7850ade6c8cc) => {
          let _4cf46dea4c5b = new _fedc199a9987({
            document: _54578a5fe28e.call(_7850ade6c8cc)
          }, _54578a5fe28e, _7850ade6c8cc);
          return this.emit("ownerDocument", _4cf46dea4c5b), _4cf46dea4c5b.intercepted ? _4cf46dea4c5b.returnValue : _4cf46dea4c5b.data.document;
        }
      });
    }
    overrideCompareDocumentPosit1ion() {
      this.ctx.override(this.nodeProto, "compareDocumentPosition", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (!_4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c] = _4cf46dea4c5b, _cecd9bbc6126 = new _fedc199a9987({
          node: _9d3b9d29f57c
        }, _54578a5fe28e, _7850ade6c8cc);
        return _cecd9bbc6126.intercepted ? _cecd9bbc6126.returnValue : _cecd9bbc6126.target.call(_cecd9bbc6126.that, _cecd9bbc6126.data.node);
      });
    }
    overrideChildMethods() {
      this.ctx.override(this.nodeProto, "removeChild");
    }
  }, _e8029dd6feb1 = _7a0d603da8b2;
  var _4306300a37f3 = m(_b1cb6ca01576(), 1);
  var _0fbc4aa8c3d6 = class extends _4306300a37f3.default {
    constructor(_54578a5fe28e) {
      super(), this.ctx = _54578a5fe28e, this.window = _54578a5fe28e.window, this.Attr = this.window.Attr || {}, 
      this.attrProto = this.Attr.prototype || {}, this.value = _54578a5fe28e.nativeMethods.getOwnPropertyDescriptor(this.attrProto, "value"), 
      this.name = _54578a5fe28e.nativeMethods.getOwnPropertyDescriptor(this.attrProto, "name"), 
      this.getNamedItem = this.attrProto.getNamedItem || null, this.setNamedItem = this.attrProto.setNamedItem || null, 
      this.removeNamedItem = this.attrProto.removeNamedItem || null, this.getNamedItemNS = this.attrProto.getNamedItemNS || null, 
      this.setNamedItemNS = this.attrProto.setNamedItemNS || null, this.removeNamedItemNS = this.attrProto.removeNamedItemNS || null, 
      this.item = this.attrProto.item || null;
    }
    overrideNameValue() {
      this.ctx.overrideDescriptor(this.attrProto, "name", {
        get: (_54578a5fe28e, _7850ade6c8cc) => {
          let _4cf46dea4c5b = new _fedc199a9987({
            value: _54578a5fe28e.call(_7850ade6c8cc)
          }, _54578a5fe28e, _7850ade6c8cc);
          return this.emit("name", _4cf46dea4c5b), _4cf46dea4c5b.intercepted ? _4cf46dea4c5b.returnValue : _4cf46dea4c5b.data.value;
        }
      }), this.ctx.overrideDescriptor(this.attrProto, "value", {
        get: (_54578a5fe28e, _7850ade6c8cc) => {
          let _4cf46dea4c5b = new _fedc199a9987({
            name: this.name.get.call(_7850ade6c8cc),
            value: _54578a5fe28e.call(_7850ade6c8cc)
          }, _54578a5fe28e, _7850ade6c8cc);
          return this.emit("getValue", _4cf46dea4c5b), _4cf46dea4c5b.intercepted ? _4cf46dea4c5b.returnValue : _4cf46dea4c5b.data.value;
        },
        set: (_54578a5fe28e, _7850ade6c8cc, [_4cf46dea4c5b]) => {
          let _9d3b9d29f57c = new _fedc199a9987({
            name: this.name.get.call(_7850ade6c8cc),
            value: _4cf46dea4c5b
          }, _54578a5fe28e, _7850ade6c8cc);
          if (this.emit("setValue", _9d3b9d29f57c), _9d3b9d29f57c.intercepted) return _9d3b9d29f57c.returnValue;
          _9d3b9d29f57c.target.call(_9d3b9d29f57c.that, _9d3b9d29f57c.data.value);
        }
      });
    }
    overrideItemMethods() {
      this.ctx.override(this.attrProto, "getNamedItem", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (!_4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c] = _4cf46dea4c5b, _cecd9bbc6126 = new _fedc199a9987({
          name: _9d3b9d29f57c
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("getNamedItem", _cecd9bbc6126), _cecd9bbc6126.intercepted ? _cecd9bbc6126.returnValue : _cecd9bbc6126.target.call(_cecd9bbc6126.that, _cecd9bbc6126.data.name);
      }), this.ctx.override(this.attrProto, "setNamedItem", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (2 > _4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c, _cecd9bbc6126] = _4cf46dea4c5b, _d7cc09ba4839 = new _fedc199a9987({
          name: _9d3b9d29f57c,
          value: _cecd9bbc6126
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("setNamedItem", _d7cc09ba4839), _d7cc09ba4839.intercepted ? _d7cc09ba4839.returnValue : _d7cc09ba4839.target.call(_d7cc09ba4839.that, _d7cc09ba4839.data.name, _d7cc09ba4839.data.value);
      }), this.ctx.override(this.attrProto, "removeNamedItem", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (!_4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c] = _4cf46dea4c5b, _cecd9bbc6126 = new _fedc199a9987({
          name: _9d3b9d29f57c
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("removeNamedItem", _cecd9bbc6126), _cecd9bbc6126.intercepted ? _cecd9bbc6126.returnValue : _cecd9bbc6126.target.call(_cecd9bbc6126.that, _cecd9bbc6126.data.name);
      }), this.ctx.override(this.attrProto, "item", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (!_4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c] = _4cf46dea4c5b, _cecd9bbc6126 = new _fedc199a9987({
          index: _9d3b9d29f57c
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("item", _cecd9bbc6126), _cecd9bbc6126.intercepted ? _cecd9bbc6126.returnValue : _cecd9bbc6126.target.call(_cecd9bbc6126.that, _cecd9bbc6126.data.name);
      }), this.ctx.override(this.attrProto, "getNamedItemNS", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (2 > _4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c, _cecd9bbc6126] = _4cf46dea4c5b, _d7cc09ba4839 = new _fedc199a9987({
          namespace: _9d3b9d29f57c,
          localName: _cecd9bbc6126
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("getNamedItemNS", _d7cc09ba4839), _d7cc09ba4839.intercepted ? _d7cc09ba4839.returnValue : _d7cc09ba4839.target.call(_d7cc09ba4839.that, _d7cc09ba4839.data.namespace, _d7cc09ba4839.data.localName);
      }), this.ctx.override(this.attrProto, "setNamedItemNS", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (!_4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c] = _4cf46dea4c5b, _cecd9bbc6126 = new _fedc199a9987({
          attr: _9d3b9d29f57c
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("setNamedItemNS", _cecd9bbc6126), _cecd9bbc6126.intercepted ? _cecd9bbc6126.returnValue : _cecd9bbc6126.target.call(_cecd9bbc6126.that, _cecd9bbc6126.data.name);
      }), this.ctx.override(this.attrProto, "removeNamedItemNS", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (2 > _4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c, _cecd9bbc6126] = _4cf46dea4c5b, _d7cc09ba4839 = new _fedc199a9987({
          namespace: _9d3b9d29f57c,
          localName: _cecd9bbc6126
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("removeNamedItemNS", _d7cc09ba4839), _d7cc09ba4839.intercepted ? _d7cc09ba4839.returnValue : _d7cc09ba4839.target.call(_d7cc09ba4839.that, _d7cc09ba4839.data.namespace, _d7cc09ba4839.data.localName);
      });
    }
  }, _786558f6db74 = _0fbc4aa8c3d6;
  var _36ffdbb5d01e = m(_b1cb6ca01576(), 1);
  var _f700ba1c972e = class extends _36ffdbb5d01e.default {
    constructor(_54578a5fe28e) {
      super(), this.ctx = _54578a5fe28e, this.window = _54578a5fe28e.window, this.Function = this.window.Function, 
      this.fnProto = this.Function.prototype, this.toString = this.fnProto.toString, this.fnStrings = _54578a5fe28e.fnStrings, 
      this.call = this.fnProto.call, this.apply = this.fnProto.apply, this.bind = this.fnProto.bind;
    }
    overrideFunction() {
      this.ctx.override(this.window, "Function", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (!_4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let _9d3b9d29f57c = _4cf46dea4c5b[_4cf46dea4c5b.length - 1], _cecd9bbc6126 = [];
        for (let _54578a5fe28e = 0; _54578a5fe28e < _4cf46dea4c5b.length - 1; _54578a5fe28e++) _cecd9bbc6126.push(_4cf46dea4c5b[_54578a5fe28e]);
        let _d7cc09ba4839 = new _fedc199a9987({
          script: _9d3b9d29f57c,
          args: _cecd9bbc6126
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("function", _d7cc09ba4839), _d7cc09ba4839.intercepted ? _d7cc09ba4839.returnValue : _d7cc09ba4839.target.call(_d7cc09ba4839.that, ..._d7cc09ba4839.data.args, _d7cc09ba4839.data.script);
      }, !0);
    }
    overrideToString() {
      this.ctx.override(this.fnProto, "toString", (_54578a5fe28e, _7850ade6c8cc) => {
        let _4cf46dea4c5b = new _fedc199a9987({
          fn: _7850ade6c8cc
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("toString", _4cf46dea4c5b), _4cf46dea4c5b.intercepted ? _4cf46dea4c5b.returnValue : _4cf46dea4c5b.target.call(_4cf46dea4c5b.data.fn);
      });
    }
  }, _d1921ec4bc4a = _f700ba1c972e;
  var _8df01dc23396 = m(_b1cb6ca01576(), 1);
  var _896eeb344041 = class extends _8df01dc23396.default {
    constructor(_54578a5fe28e) {
      super(), this.ctx = _54578a5fe28e, this.window = _54578a5fe28e.window, this.Object = this.window.Object, 
      this.getOwnPropertyDescriptors = this.Object.getOwnPropertyDescriptors, this.getOwnPropertyDescriptor = this.Object.getOwnPropertyDescriptor, 
      this.getOwnPropertyNames = this.Object.getOwnPropertyNames;
    }
    overrideGetPropertyNames() {
      this.ctx.override(this.Object, "getOwnPropertyNames", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (!_4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c] = _4cf46dea4c5b, _cecd9bbc6126 = new _fedc199a9987({
          names: _54578a5fe28e.call(_7850ade6c8cc, _9d3b9d29f57c)
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("getOwnPropertyNames", _cecd9bbc6126), _cecd9bbc6126.intercepted ? _cecd9bbc6126.returnValue : _cecd9bbc6126.data.names;
      });
    }
    overrideGetOwnPropertyDescriptors() {
      this.ctx.override(this.Object, "getOwnPropertyDescriptors", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (!_4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c] = _4cf46dea4c5b, _cecd9bbc6126 = new _fedc199a9987({
          descriptors: _54578a5fe28e.call(_7850ade6c8cc, _9d3b9d29f57c)
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("getOwnPropertyDescriptors", _cecd9bbc6126), _cecd9bbc6126.intercepted ? _cecd9bbc6126.returnValue : _cecd9bbc6126.data.descriptors;
      });
    }
  }, _001bee5aa5e5 = _896eeb344041;
  var _0197f7c6abf9 = m(_b1cb6ca01576(), 1);
  var _339e8de383b4 = class extends _0197f7c6abf9.default {
    constructor(_54578a5fe28e) {
      super(), this.ctx = _54578a5fe28e, this.window = _54578a5fe28e.window, this.fetch = this.window.fetch, 
      this.Request = this.window.Request, this.Response = this.window.Response, this.Headers = this.window.Headers, 
      this.reqProto = this.Request ? this.Request.prototype : {}, this.resProto = this.Response ? this.Response.prototype : {}, 
      this.headersProto = this.Headers ? this.Headers.prototype : {}, this.reqUrl = _54578a5fe28e.nativeMethods.getOwnPropertyDescriptor(this.reqProto, "url"), 
      this.resUrl = _54578a5fe28e.nativeMethods.getOwnPropertyDescriptor(this.resProto, "url"), 
      this.reqHeaders = _54578a5fe28e.nativeMethods.getOwnPropertyDescriptor(this.reqProto, "headers"), 
      this.resHeaders = _54578a5fe28e.nativeMethods.getOwnPropertyDescriptor(this.resProto, "headers");
    }
    override() {
      return this.overrideRequest(), this.overrideUrl(), this.overrideHeaders(), !0;
    }
    overrideRequest() {
      return this.fetch ? (this.ctx.override(this.window, "fetch", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (!_4cf46dea4c5b.length || _4cf46dea4c5b[0] instanceof this.Request) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c, _cecd9bbc6126 = {}] = _4cf46dea4c5b, _d7cc09ba4839 = new _fedc199a9987({
          input: _9d3b9d29f57c,
          options: _cecd9bbc6126
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("request", _d7cc09ba4839), _d7cc09ba4839.intercepted ? _d7cc09ba4839.returnValue : _d7cc09ba4839.target.call(_d7cc09ba4839.that, _d7cc09ba4839.data.input, _d7cc09ba4839.data.options);
      }), this.ctx.override(this.window, "Request", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (!_4cf46dea4c5b.length) return new _54578a5fe28e(..._4cf46dea4c5b);
        let [_9d3b9d29f57c, _cecd9bbc6126 = {}] = _4cf46dea4c5b, _d7cc09ba4839 = new _fedc199a9987({
          input: _9d3b9d29f57c,
          options: _cecd9bbc6126
        }, _54578a5fe28e);
        return this.emit("request", _d7cc09ba4839), _d7cc09ba4839.intercepted ? _d7cc09ba4839.returnValue : new _d7cc09ba4839.target(_d7cc09ba4839.data.input, _d7cc09ba4839.data.options);
      }, !0), !0) : !1;
    }
    overrideUrl() {
      return this.ctx.overrideDescriptor(this.reqProto, "url", {
        get: (_54578a5fe28e, _7850ade6c8cc) => {
          let _4cf46dea4c5b = new _fedc199a9987({
            value: _54578a5fe28e.call(_7850ade6c8cc)
          }, _54578a5fe28e, _7850ade6c8cc);
          return this.emit("requestUrl", _4cf46dea4c5b), _4cf46dea4c5b.intercepted ? _4cf46dea4c5b.returnValue : _4cf46dea4c5b.data.value;
        }
      }), this.ctx.overrideDescriptor(this.resProto, "url", {
        get: (_54578a5fe28e, _7850ade6c8cc) => {
          let _4cf46dea4c5b = new _fedc199a9987({
            value: _54578a5fe28e.call(_7850ade6c8cc)
          }, _54578a5fe28e, _7850ade6c8cc);
          return this.emit("responseUrl", _4cf46dea4c5b), _4cf46dea4c5b.intercepted ? _4cf46dea4c5b.returnValue : _4cf46dea4c5b.data.value;
        }
      }), !0;
    }
    overrideHeaders() {
      return this.Headers ? (this.ctx.overrideDescriptor(this.reqProto, "headers", {
        get: (_54578a5fe28e, _7850ade6c8cc) => {
          let _4cf46dea4c5b = new _fedc199a9987({
            value: _54578a5fe28e.call(_7850ade6c8cc)
          }, _54578a5fe28e, _7850ade6c8cc);
          return this.emit("requestHeaders", _4cf46dea4c5b), _4cf46dea4c5b.intercepted ? _4cf46dea4c5b.returnValue : _4cf46dea4c5b.data.value;
        }
      }), this.ctx.overrideDescriptor(this.resProto, "headers", {
        get: (_54578a5fe28e, _7850ade6c8cc) => {
          let _4cf46dea4c5b = new _fedc199a9987({
            value: _54578a5fe28e.call(_7850ade6c8cc)
          }, _54578a5fe28e, _7850ade6c8cc);
          return this.emit("responseHeaders", _4cf46dea4c5b), _4cf46dea4c5b.intercepted ? _4cf46dea4c5b.returnValue : _4cf46dea4c5b.data.value;
        }
      }), this.ctx.override(this.headersProto, "get", (_54578a5fe28e, _7850ade6c8cc, [_4cf46dea4c5b]) => {
        if (!_4cf46dea4c5b) return _54578a5fe28e.call(_7850ade6c8cc);
        let _9d3b9d29f57c = new _fedc199a9987({
          name: _4cf46dea4c5b,
          value: _54578a5fe28e.call(_7850ade6c8cc, _4cf46dea4c5b)
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("getHeader", _9d3b9d29f57c), _9d3b9d29f57c.intercepted ? _9d3b9d29f57c.returnValue : _9d3b9d29f57c.data.value;
      }), this.ctx.override(this.headersProto, "set", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (2 > _4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c, _cecd9bbc6126] = _4cf46dea4c5b, _d7cc09ba4839 = new _fedc199a9987({
          name: _9d3b9d29f57c,
          value: _cecd9bbc6126
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("setHeader", _d7cc09ba4839), _d7cc09ba4839.intercepted ? _d7cc09ba4839.returnValue : _d7cc09ba4839.target.call(_d7cc09ba4839.that, _d7cc09ba4839.data.name, _d7cc09ba4839.data.value);
      }), this.ctx.override(this.headersProto, "has", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (!_4cf46dea4c5b.length) return _54578a5fe28e.call(_7850ade6c8cc);
        let [_9d3b9d29f57c] = _4cf46dea4c5b, _cecd9bbc6126 = new _fedc199a9987({
          name: _9d3b9d29f57c,
          value: _54578a5fe28e.call(_7850ade6c8cc, _9d3b9d29f57c)
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("hasHeader", _cecd9bbc6126), _cecd9bbc6126.intercepted ? _cecd9bbc6126.returnValue : _cecd9bbc6126.data;
      }), this.ctx.override(this.headersProto, "append", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (2 > _4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c, _cecd9bbc6126] = _4cf46dea4c5b, _d7cc09ba4839 = new _fedc199a9987({
          name: _9d3b9d29f57c,
          value: _cecd9bbc6126
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("appendHeader", _d7cc09ba4839), _d7cc09ba4839.intercepted ? _d7cc09ba4839.returnValue : _d7cc09ba4839.target.call(_d7cc09ba4839.that, _d7cc09ba4839.data.name, _d7cc09ba4839.data.value);
      }), this.ctx.override(this.headersProto, "delete", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (!_4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c] = _4cf46dea4c5b, _cecd9bbc6126 = new _fedc199a9987({
          name: _9d3b9d29f57c
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("deleteHeader", _cecd9bbc6126), _cecd9bbc6126.intercepted ? _cecd9bbc6126.returnValue : _cecd9bbc6126.target.call(_cecd9bbc6126.that, _cecd9bbc6126.data.name);
      }), !0) : !1;
    }
  }, _ce15d9cf0d2f = _339e8de383b4;
  var _6f1826f18626 = m(_b1cb6ca01576(), 1);
  var _f8d3b05b0bfc = class extends _6f1826f18626.default {
    constructor(_54578a5fe28e) {
      super(), this.ctx = _54578a5fe28e, this.window = _54578a5fe28e.window, this.XMLHttpRequest = this.window.XMLHttpRequest, 
      this.xhrProto = this.window.XMLHttpRequest ? this.window.XMLHttpRequest.prototype : {}, 
      this.open = this.xhrProto.open, this.abort = this.xhrProto.abort, this.send = this.xhrProto.send, 
      this.overrideMimeType = this.xhrProto.overrideMimeType, this.getAllResponseHeaders = this.xhrProto.getAllResponseHeaders, 
      this.getResponseHeader = this.xhrProto.getResponseHeader, this.setRequestHeader = this.xhrProto.setRequestHeader, 
      this.responseURL = _54578a5fe28e.nativeMethods.getOwnPropertyDescriptor(this.xhrProto, "responseURL"), 
      this.responseText = _54578a5fe28e.nativeMethods.getOwnPropertyDescriptor(this.xhrProto, "responseText");
    }
    override() {
      this.overrideOpen(), this.overrideSend(), this.overrideMimeType(), this.overrideGetResHeader(), 
      this.overrideGetResHeaders(), this.overrideSetReqHeader();
    }
    overrideOpen() {
      this.ctx.override(this.xhrProto, "open", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (2 > _4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c, _cecd9bbc6126, _d7cc09ba4839 = !0, _b1cb6ca01576 = null, _a8578dde15c4 = null] = _4cf46dea4c5b, _e21ee3f2659d = new _fedc199a9987({
          method: _9d3b9d29f57c,
          input: _cecd9bbc6126,
          async: _d7cc09ba4839,
          user: _b1cb6ca01576,
          password: _a8578dde15c4
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("open", _e21ee3f2659d), _e21ee3f2659d.intercepted ? _e21ee3f2659d.returnValue : _e21ee3f2659d.target.call(_e21ee3f2659d.that, _e21ee3f2659d.data.method, _e21ee3f2659d.data.input, _e21ee3f2659d.data.async, _e21ee3f2659d.data.user, _e21ee3f2659d.data.password);
      });
    }
    overrideResponseUrl() {
      this.ctx.overrideDescriptor(this.xhrProto, "responseURL", {
        get: (_54578a5fe28e, _7850ade6c8cc) => {
          let _4cf46dea4c5b = new _fedc199a9987({
            value: _54578a5fe28e.call(_7850ade6c8cc)
          }, _54578a5fe28e, _7850ade6c8cc);
          return this.emit("responseUrl", _4cf46dea4c5b), _4cf46dea4c5b.intercepted ? _4cf46dea4c5b.returnValue : _4cf46dea4c5b.data.value;
        }
      });
    }
    overrideSend() {
      this.ctx.override(this.xhrProto, "send", (_54578a5fe28e, _7850ade6c8cc, [_4cf46dea4c5b = null]) => {
        let _9d3b9d29f57c = new _fedc199a9987({
          body: _4cf46dea4c5b
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("send", _9d3b9d29f57c), _9d3b9d29f57c.intercepted ? _9d3b9d29f57c.returnValue : _9d3b9d29f57c.target.call(_9d3b9d29f57c.that, _9d3b9d29f57c.data.body);
      });
    }
    overrideSetReqHeader() {
      this.ctx.override(this.xhrProto, "setRequestHeader", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (2 > _4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c, _cecd9bbc6126] = _4cf46dea4c5b, _d7cc09ba4839 = new _fedc199a9987({
          name: _9d3b9d29f57c,
          value: _cecd9bbc6126
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("setReqHeader", _d7cc09ba4839), _d7cc09ba4839.intercepted ? _d7cc09ba4839.returnValue : _d7cc09ba4839.target.call(_d7cc09ba4839.that, _d7cc09ba4839.data.name, _d7cc09ba4839.data.value);
      });
    }
    overrideGetResHeaders() {
      this.ctx.override(this.xhrProto, "getAllResponseHeaders", (_54578a5fe28e, _7850ade6c8cc) => {
        let _4cf46dea4c5b = new _fedc199a9987({
          value: _54578a5fe28e.call(_7850ade6c8cc)
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("getAllResponseHeaders", _4cf46dea4c5b), _4cf46dea4c5b.intercepted ? _4cf46dea4c5b.returnValue : _4cf46dea4c5b.data.value;
      });
    }
    overrideGetResHeader() {
      this.ctx.override(this.xhrProto, "getResponseHeader", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (!_4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c] = _4cf46dea4c5b, _cecd9bbc6126 = new _fedc199a9987({
          name: _9d3b9d29f57c,
          value: _54578a5fe28e.call(_7850ade6c8cc, _9d3b9d29f57c)
        }, _54578a5fe28e, _7850ade6c8cc);
        return _cecd9bbc6126.intercepted ? _cecd9bbc6126.returnValue : _cecd9bbc6126.data.value;
      });
    }
  }, _c5f07e027c6e = _f8d3b05b0bfc;
  var _08c93bb907b0 = m(_b1cb6ca01576(), 1);
  var _19c3c03018cc = class extends _08c93bb907b0.default {
    constructor(_54578a5fe28e) {
      super(), this.ctx = _54578a5fe28e, this.window = _54578a5fe28e.window, this.EventSource = this.window.EventSource || {}, 
      this.esProto = this.EventSource.prototype || {}, this.url = _54578a5fe28e.nativeMethods.getOwnPropertyDescriptor(this.esProto, "url"), 
      this.CONNECTING = 0, this.OPEN = 1, this.CLOSED = 2;
    }
    overrideConstruct() {
      this.ctx.override(this.window, "EventSource", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (!_4cf46dea4c5b.length) return new _54578a5fe28e(..._4cf46dea4c5b);
        let [_9d3b9d29f57c, _cecd9bbc6126 = {}] = _4cf46dea4c5b, _d7cc09ba4839 = new _fedc199a9987({
          url: _9d3b9d29f57c,
          config: _cecd9bbc6126
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("construct", _d7cc09ba4839), _d7cc09ba4839.intercepted ? _d7cc09ba4839.returnValue : new _d7cc09ba4839.target(_d7cc09ba4839.data.url, _d7cc09ba4839.data.config);
      }, !0), "EventSource" in this.window && (this.window.EventSource.CONNECTING = this.CONNECTING, 
      this.window.EventSource.OPEN = this.OPEN, this.window.EventSource.CLOSED = this.CLOSED);
    }
    overrideUrl() {
      this.ctx.overrideDescriptor(this.esProto, "url", {
        get: (_54578a5fe28e, _7850ade6c8cc) => {
          let _4cf46dea4c5b = new _fedc199a9987({
            value: _54578a5fe28e.call(_7850ade6c8cc)
          }, _54578a5fe28e, _7850ade6c8cc);
          return this.emit("url", _4cf46dea4c5b), _4cf46dea4c5b.data.value;
        }
      });
    }
  }, _7ae00b9641b7 = _19c3c03018cc;
  var _79dc7946849f = m(_b1cb6ca01576(), 1);
  var _6fe5355969e1 = class extends _79dc7946849f.default {
    constructor(_54578a5fe28e) {
      super(), this.ctx = _54578a5fe28e, this.window = this.ctx.window, this.History = this.window.History, 
      this.history = this.window.history, this.historyProto = this.History ? this.History.prototype : {}, 
      this.pushState = this.historyProto.pushState, this.replaceState = this.historyProto.replaceState, 
      this.go = this.historyProto.go, this.back = this.historyProto.back, this.forward = this.historyProto.forward;
    }
    override() {
      this.overridePushState(), this.overrideReplaceState(), this.overrideGo(), this.overrideForward(), 
      this.overrideBack();
    }
    overridePushState() {
      this.ctx.override(this.historyProto, "pushState", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (2 > _4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c, _cecd9bbc6126, _d7cc09ba4839 = ""] = _4cf46dea4c5b, _b1cb6ca01576 = new _fedc199a9987({
          state: _9d3b9d29f57c,
          title: _cecd9bbc6126,
          url: _d7cc09ba4839
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("pushState", _b1cb6ca01576), _b1cb6ca01576.intercepted ? _b1cb6ca01576.returnValue : _b1cb6ca01576.target.call(_b1cb6ca01576.that, _b1cb6ca01576.data.state, _b1cb6ca01576.data.title, _b1cb6ca01576.data.url);
      });
    }
    overrideReplaceState() {
      this.ctx.override(this.historyProto, "replaceState", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (2 > _4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c, _cecd9bbc6126, _d7cc09ba4839 = ""] = _4cf46dea4c5b, _b1cb6ca01576 = new _fedc199a9987({
          state: _9d3b9d29f57c,
          title: _cecd9bbc6126,
          url: _d7cc09ba4839
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("replaceState", _b1cb6ca01576), _b1cb6ca01576.intercepted ? _b1cb6ca01576.returnValue : _b1cb6ca01576.target.call(_b1cb6ca01576.that, _b1cb6ca01576.data.state, _b1cb6ca01576.data.title, _b1cb6ca01576.data.url);
      });
    }
    overrideGo() {
      this.ctx.override(this.historyProto, "go", (_54578a5fe28e, _7850ade6c8cc, [_4cf46dea4c5b]) => {
        let _9d3b9d29f57c = new _fedc199a9987({
          delta: _4cf46dea4c5b
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("go", _9d3b9d29f57c), _9d3b9d29f57c.intercepted ? _9d3b9d29f57c.returnValue : _9d3b9d29f57c.target.call(_9d3b9d29f57c.that, _9d3b9d29f57c.data.delta);
      });
    }
    overrideForward() {
      this.ctx.override(this.historyProto, "forward", (_54578a5fe28e, _7850ade6c8cc) => {
        let _4cf46dea4c5b = new _fedc199a9987(null, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("forward", _4cf46dea4c5b), _4cf46dea4c5b.intercepted ? _4cf46dea4c5b.returnValue : _4cf46dea4c5b.target.call(_4cf46dea4c5b.that);
      });
    }
    overrideBack() {
      this.ctx.override(this.historyProto, "back", (_54578a5fe28e, _7850ade6c8cc) => {
        let _4cf46dea4c5b = new _fedc199a9987(null, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("back", _4cf46dea4c5b), _4cf46dea4c5b.intercepted ? _4cf46dea4c5b.returnValue : _4cf46dea4c5b.target.call(_4cf46dea4c5b.that);
      });
    }
  }, _6efe7b95a7db = _6fe5355969e1;
  var _14ac03a52d0f = m(_b1cb6ca01576(), 1), _206722c2a87d = class extends _14ac03a52d0f.default {
    constructor(_54578a5fe28e) {
      super(), this.ctx = _54578a5fe28e, this.window = _54578a5fe28e.window, this.location = this.window.location, 
      this.WorkerLocation = this.ctx.worker ? this.window.WorkerLocation : null, this.workerLocProto = this.WorkerLocation ? this.WorkerLocation.prototype : {}, 
      this.keys = [ "href", "protocol", "host", "hostname", "port", "pathname", "search", "hash", "origin" ], 
      this.HashChangeEvent = this.window.HashChangeEvent || null, this.href = this.WorkerLocation ? _54578a5fe28e.nativeMethods.getOwnPropertyDescriptor(this.workerLocProto, "href") : _54578a5fe28e.nativeMethods.getOwnPropertyDescriptor(this.location, "href");
    }
    overrideWorkerLocation(_54578a5fe28e) {
      if (!this.WorkerLocation) return !1;
      let _7850ade6c8cc = this;
      for (let _4cf46dea4c5b of this.keys) this.ctx.overrideDescriptor(this.workerLocProto, _4cf46dea4c5b, {
        get: () => _54578a5fe28e(_7850ade6c8cc.href.get.call(this.location))[_4cf46dea4c5b]
      });
      return !0;
    }
    emulate(_54578a5fe28e, _7850ade6c8cc) {
      let _4cf46dea4c5b = {}, _9d3b9d29f57c = this;
      for (let _cecd9bbc6126 of _9d3b9d29f57c.keys) this.ctx.nativeMethods.defineProperty(_4cf46dea4c5b, _cecd9bbc6126, {
        get() {
          return _54578a5fe28e(_9d3b9d29f57c.href.get.call(_9d3b9d29f57c.location))[_cecd9bbc6126];
        },
        set: _cecd9bbc6126 !== "origin" ? function(_54578a5fe28e) {
          switch (_cecd9bbc6126) {
           case "href":
            _9d3b9d29f57c.location.href = _7850ade6c8cc(_54578a5fe28e);
            break;

           case "hash":
            _9d3b9d29f57c.emit("hashchange", _4cf46dea4c5b.href, _54578a5fe28e.trim().startsWith("#") ? new URL(_54578a5fe28e.trim(), _4cf46dea4c5b.href).href : new URL("#" + _54578a5fe28e.trim(), _4cf46dea4c5b.href).href, _9d3b9d29f57c);
            break;

           default:
            {
              let _d7cc09ba4839 = new URL(_4cf46dea4c5b.href);
              _d7cc09ba4839[_cecd9bbc6126] = _54578a5fe28e, _9d3b9d29f57c.location.href = _7850ade6c8cc(_d7cc09ba4839.href);
            }
            break;
          }
        } : void 0,
        configurable: !1,
        enumerable: !0
      });
      return "reload" in this.location && this.ctx.nativeMethods.defineProperty(_4cf46dea4c5b, "reload", {
        value: this.ctx.wrap(this.location, "reload", (_54578a5fe28e, _7850ade6c8cc) => _54578a5fe28e.call(_7850ade6c8cc === _4cf46dea4c5b ? this.location : _7850ade6c8cc)),
        writable: !1,
        enumerable: !0
      }), "replace" in this.location && this.ctx.nativeMethods.defineProperty(_4cf46dea4c5b, "replace", {
        value: this.ctx.wrap(this.location, "assign", (_54578a5fe28e, _9d3b9d29f57c, _cecd9bbc6126) => {
          (!_cecd9bbc6126.length || _9d3b9d29f57c !== _4cf46dea4c5b) && _54578a5fe28e.call(_9d3b9d29f57c), 
          _9d3b9d29f57c = this.location;
          let [_d7cc09ba4839] = _cecd9bbc6126, _b1cb6ca01576 = new URL(_d7cc09ba4839, _4cf46dea4c5b.href);
          return _54578a5fe28e.call(_9d3b9d29f57c === _4cf46dea4c5b ? this.location : _9d3b9d29f57c, _7850ade6c8cc(_b1cb6ca01576.href));
        }),
        writable: !1,
        enumerable: !0
      }), "assign" in this.location && this.ctx.nativeMethods.defineProperty(_4cf46dea4c5b, "assign", {
        value: this.ctx.wrap(this.location, "assign", (_54578a5fe28e, _9d3b9d29f57c, _cecd9bbc6126) => {
          (!_cecd9bbc6126.length || _9d3b9d29f57c !== _4cf46dea4c5b) && _54578a5fe28e.call(_9d3b9d29f57c), 
          _9d3b9d29f57c = this.location;
          let [_d7cc09ba4839] = _cecd9bbc6126, _b1cb6ca01576 = new URL(_d7cc09ba4839, _4cf46dea4c5b.href);
          return _54578a5fe28e.call(_9d3b9d29f57c === _4cf46dea4c5b ? this.location : _9d3b9d29f57c, _7850ade6c8cc(_b1cb6ca01576.href));
        }),
        writable: !1,
        enumerable: !0
      }), "ancestorOrigins" in this.location && this.ctx.nativeMethods.defineProperty(_4cf46dea4c5b, "ancestorOrigins", {
        get() {
          let _54578a5fe28e = [];
          return _9d3b9d29f57c.window.DOMStringList && _9d3b9d29f57c.ctx.nativeMethods.setPrototypeOf(_54578a5fe28e, _9d3b9d29f57c.window.DOMStringList.prototype), 
          _54578a5fe28e;
        },
        set: void 0,
        enumerable: !0
      }), this.ctx.nativeMethods.defineProperty(_4cf46dea4c5b, "toString", {
        value: this.ctx.wrap(this.location, "toString", () => _4cf46dea4c5b.href),
        enumerable: !0,
        writable: !1
      }), this.ctx.nativeMethods.defineProperty(_4cf46dea4c5b, Symbol.toPrimitive, {
        value: () => _4cf46dea4c5b.href,
        writable: !1,
        enumerable: !1
      }), this.ctx.window.Location && this.ctx.nativeMethods.setPrototypeOf(_4cf46dea4c5b, this.ctx.window.Location.prototype), 
      _4cf46dea4c5b;
    }
  }, _2449bc37a551 = _206722c2a87d;
  var _33b229dd93a5 = m(_b1cb6ca01576(), 1);
  var _f4744fbfe5ad = class extends _33b229dd93a5.default {
    constructor(_54578a5fe28e) {
      super(), this.ctx = _54578a5fe28e, this.window = this.ctx.window, this.postMessage = this.window.postMessage, 
      this.MessageEvent = this.window.MessageEvent || {}, this.MessagePort = this.window.MessagePort || {}, 
      this.mpProto = this.MessagePort.prototype || {}, this.mpPostMessage = this.mpProto.postMessage, 
      this.messageProto = this.MessageEvent.prototype || {}, this.messageData = _54578a5fe28e.nativeMethods.getOwnPropertyDescriptor(this.messageProto, "data"), 
      this.messageOrigin = _54578a5fe28e.nativeMethods.getOwnPropertyDescriptor(this.messageProto, "origin");
    }
    overridePostMessage() {
      this.ctx.override(this.window, "postMessage", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (!_4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let _9d3b9d29f57c, _cecd9bbc6126, _d7cc09ba4839;
        this.ctx.worker ? [_9d3b9d29f57c, _d7cc09ba4839 = []] = _4cf46dea4c5b : [_9d3b9d29f57c, _cecd9bbc6126, _d7cc09ba4839 = []] = _4cf46dea4c5b;
        let _b1cb6ca01576 = new _fedc199a9987({
          message: _9d3b9d29f57c,
          origin: _cecd9bbc6126,
          transfer: _d7cc09ba4839,
          worker: this.ctx.worker
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("postMessage", _b1cb6ca01576), _b1cb6ca01576.intercepted ? _b1cb6ca01576.returnValue : this.ctx.worker ? _b1cb6ca01576.target.call(_b1cb6ca01576.that, _b1cb6ca01576.data.message, _b1cb6ca01576.data.transfer) : _b1cb6ca01576.target.call(_b1cb6ca01576.that, _b1cb6ca01576.data.message, _b1cb6ca01576.data.origin, _b1cb6ca01576.data.transfer);
      });
    }
    wrapPostMessage(_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b = !1) {
      return this.ctx.wrap(_54578a5fe28e, _7850ade6c8cc, (_7850ade6c8cc, _9d3b9d29f57c, _cecd9bbc6126) => {
        if (this.ctx.worker ? !_cecd9bbc6126.length : 2 > _cecd9bbc6126) return _7850ade6c8cc.apply(_9d3b9d29f57c, _cecd9bbc6126);
        let _d7cc09ba4839, _b1cb6ca01576, _a8578dde15c4;
        _4cf46dea4c5b ? ([_d7cc09ba4839, _a8578dde15c4 = []] = _cecd9bbc6126, _b1cb6ca01576 = null) : [_d7cc09ba4839, _b1cb6ca01576, _a8578dde15c4 = []] = _cecd9bbc6126;
        let _e21ee3f2659d = new _fedc199a9987({
          message: _d7cc09ba4839,
          origin: _b1cb6ca01576,
          transfer: _a8578dde15c4,
          worker: this.ctx.worker
        }, _7850ade6c8cc, _54578a5fe28e);
        return this.emit("postMessage", _e21ee3f2659d), _e21ee3f2659d.intercepted ? _e21ee3f2659d.returnValue : _4cf46dea4c5b ? _e21ee3f2659d.target.call(_e21ee3f2659d.that, _e21ee3f2659d.data.message, _e21ee3f2659d.data.transfer) : _e21ee3f2659d.target.call(_e21ee3f2659d.that, _e21ee3f2659d.data.message, _e21ee3f2659d.data.origin, _e21ee3f2659d.data.transfer);
      });
    }
    overrideMessageOrigin() {
      this.ctx.overrideDescriptor(this.messageProto, "origin", {
        get: (_54578a5fe28e, _7850ade6c8cc) => {
          let _4cf46dea4c5b = new _fedc199a9987({
            value: _54578a5fe28e.call(_7850ade6c8cc)
          }, _54578a5fe28e, _7850ade6c8cc);
          return this.emit("origin", _4cf46dea4c5b), _4cf46dea4c5b.intercepted ? _4cf46dea4c5b.returnValue : _4cf46dea4c5b.data.value;
        }
      });
    }
    overrideMessageData() {
      this.ctx.overrideDescriptor(this.messageProto, "data", {
        get: (_54578a5fe28e, _7850ade6c8cc) => {
          let _4cf46dea4c5b = new _fedc199a9987({
            value: _54578a5fe28e.call(_7850ade6c8cc)
          }, _54578a5fe28e, _7850ade6c8cc);
          return this.emit("data", _4cf46dea4c5b), _4cf46dea4c5b.intercepted ? _4cf46dea4c5b.returnValue : _4cf46dea4c5b.data.value;
        }
      });
    }
  }, _3f2dfffac987 = _f4744fbfe5ad;
  var _ea56f5ef26be = m(_b1cb6ca01576(), 1);
  var _da4315bb3615 = class extends _ea56f5ef26be.default {
    constructor(_54578a5fe28e) {
      super(), this.ctx = _54578a5fe28e, this.window = _54578a5fe28e.window, this.navigator = this.window.navigator, 
      this.Navigator = this.window.Navigator || {}, this.navProto = this.Navigator.prototype || {}, 
      this.sendBeacon = this.navProto.sendBeacon;
    }
    overrideSendBeacon() {
      this.ctx.override(this.navProto, "sendBeacon", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (!_4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c, _cecd9bbc6126 = ""] = _4cf46dea4c5b, _d7cc09ba4839 = new _fedc199a9987({
          url: _9d3b9d29f57c,
          data: _cecd9bbc6126
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("sendBeacon", _d7cc09ba4839), _d7cc09ba4839.intercepted ? _d7cc09ba4839.returnValue : _d7cc09ba4839.target.call(_d7cc09ba4839.that, _d7cc09ba4839.data.url, _d7cc09ba4839.data.data);
      });
    }
  }, _56b0cb89bd3b = _da4315bb3615;
  var _102b92f86821 = m(_b1cb6ca01576(), 1);
  var _8fc0212b3622 = globalThis.fetch, _7f12fc39f9da = globalThis.SharedWorker, _cf94537fbf6b = globalThis.localStorage, _b6940e0e08f6 = globalThis.navigator.serviceWorker, _c2607b7e21b1 = MessagePort.prototype.postMessage, _5d83c18574ee = {
    prototype: {
      send: WebSocket.prototype.send
    },
    CLOSED: WebSocket.CLOSED,
    CLOSING: WebSocket.CLOSING,
    CONNECTING: WebSocket.CONNECTING,
    OPEN: WebSocket.OPEN
  };
  async function W() {
    let _54578a5fe28e = (await self.clients.matchAll({
      type: "window",
      includeUncontrolled: !0
    })).map(async _54578a5fe28e => {
      let _7850ade6c8cc = await function(_54578a5fe28e) {
        let _7850ade6c8cc = new MessageChannel;
        return new Promise(_4cf46dea4c5b => {
          _54578a5fe28e.postMessage({
            type: "getPort",
            port: _7850ade6c8cc.port2
          }, [ _7850ade6c8cc.port2 ]), _7850ade6c8cc.port1.onmessage = _54578a5fe28e => {
            _4cf46dea4c5b(_54578a5fe28e.data);
          };
        });
      }(_54578a5fe28e);
      return await Ie(_7850ade6c8cc), _7850ade6c8cc;
    }), _7850ade6c8cc = Promise.race([ Promise.any(_54578a5fe28e), new Promise((_54578a5fe28e, _7850ade6c8cc) => setTimeout(_7850ade6c8cc, 1e3, new TypeError("timeout"))) ]);
    try {
      return await _7850ade6c8cc;
    } catch (_54578a5fe28e) {
      if (_54578a5fe28e instanceof AggregateError) throw console.error("bare-mux: failed to get a bare-mux SharedWorker MessagePort as all clients returned an invalid MessagePort."), 
      new Error("All clients returned an invalid MessagePort.");
      return console.warn("bare-mux: failed to get a bare-mux SharedWorker MessagePort within 1s, retrying"), 
      await W();
    }
  }
  function Ie(_54578a5fe28e) {
    let _7850ade6c8cc = new MessageChannel, _4cf46dea4c5b = new Promise((_54578a5fe28e, _4cf46dea4c5b) => {
      _7850ade6c8cc.port1.onmessage = _7850ade6c8cc => {
        _7850ade6c8cc.data.type === "pong" && _54578a5fe28e();
      }, setTimeout(_4cf46dea4c5b, 1500);
    });
    return _c2607b7e21b1.call(_54578a5fe28e, {
      message: {
        type: "ping"
      },
      port: _7850ade6c8cc.port2
    }, [ _7850ade6c8cc.port2 ]), _4cf46dea4c5b;
  }
  function Ve(_54578a5fe28e, _7850ade6c8cc) {
    let _4cf46dea4c5b = new _7f12fc39f9da(_54578a5fe28e, "ridgewood-stem-worker");
    return _7850ade6c8cc && _b6940e0e08f6.addEventListener("message", _7850ade6c8cc => {
      if (_7850ade6c8cc.data.type === "getPort" && _7850ade6c8cc.data.port) {
        console.debug("bare-mux: recieved request for port from sw");
        let _4cf46dea4c5b = new _7f12fc39f9da(_54578a5fe28e, "ridgewood-stem-worker");
        _c2607b7e21b1.call(_7850ade6c8cc.data.port, _4cf46dea4c5b.port, [ _4cf46dea4c5b.port ]);
      }
    }), _4cf46dea4c5b.port;
  }
  var _957ae7aa52f1 = null;
  function lt() {
    if (_957ae7aa52f1 === null) {
      let _54578a5fe28e = new MessageChannel, _7850ade6c8cc = new ReadableStream, _4cf46dea4c5b;
      try {
        _c2607b7e21b1.call(_54578a5fe28e.port1, _7850ade6c8cc, [ _7850ade6c8cc ]), _4cf46dea4c5b = !0;
      } catch {
        _4cf46dea4c5b = !1;
      }
      return _957ae7aa52f1 = _4cf46dea4c5b, _4cf46dea4c5b;
    }
    return _957ae7aa52f1;
  }
  var _388798ec35cc = class {
    constructor(_54578a5fe28e) {
      this.channel = new BroadcastChannel("bare-mux"), _54578a5fe28e instanceof MessagePort || _54578a5fe28e instanceof Promise ? this.port = _54578a5fe28e : this.createChannel(_54578a5fe28e, !0);
    }
    createChannel(_54578a5fe28e, _7850ade6c8cc) {
      if (self.clients) this.port = W(), this.channel.onmessage = _54578a5fe28e => {
        _54578a5fe28e.data.type === "refreshPort" && (this.port = W());
      }; else if (_54578a5fe28e && SharedWorker) {
        if (!_54578a5fe28e.startsWith("/") && !_54578a5fe28e.includes("://")) throw new Error("Invalid URL. Must be absolute or start at the root.");
        this.port = Ve(_54578a5fe28e, _7850ade6c8cc), console.debug("bare-mux: setting localStorage bare-mux-path to", _54578a5fe28e), 
        _cf94537fbf6b["bare-mux-path"] = _54578a5fe28e;
      } else {
        if (!SharedWorker) throw new Error("Unable to get a channel to the SharedWorker.");
        {
          let _54578a5fe28e = _cf94537fbf6b["bare-mux-path"];
          if (console.debug("bare-mux: got localStorage bare-mux-path:", _54578a5fe28e), !_54578a5fe28e) throw new Error("Unable to get bare-mux workerPath from localStorage.");
          this.port = Ve(_54578a5fe28e, _7850ade6c8cc);
        }
      }
    }
    async sendMessage(_54578a5fe28e, _7850ade6c8cc) {
      this.port instanceof Promise && (this.port = await this.port);
      try {
        await Ie(this.port);
      } catch {
        return console.warn("bare-mux: Failed to get a ping response from the worker within 1.5s. Assuming port is dead."), 
        this.createChannel(), await this.sendMessage(_54578a5fe28e, _7850ade6c8cc);
      }
      let _4cf46dea4c5b = new MessageChannel, _9d3b9d29f57c = [ _4cf46dea4c5b.port2, ..._7850ade6c8cc || [] ], _cecd9bbc6126 = new Promise((_54578a5fe28e, _7850ade6c8cc) => {
        _4cf46dea4c5b.port1.onmessage = _4cf46dea4c5b => {
          let _9d3b9d29f57c = _4cf46dea4c5b.data;
          _9d3b9d29f57c.type === "error" ? _7850ade6c8cc(_9d3b9d29f57c.error) : _54578a5fe28e(_9d3b9d29f57c);
        };
      });
      return _c2607b7e21b1.call(this.port, {
        message: _54578a5fe28e,
        port: _4cf46dea4c5b.port2
      }, _9d3b9d29f57c), await _cecd9bbc6126;
    }
  };
  function Ce(_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) {
    console.error(`error while processing '${_4cf46dea4c5b}': `, _7850ade6c8cc), _54578a5fe28e.postMessage({
      type: "error",
      error: _7850ade6c8cc
    });
  }
  var _37ec5324d69a = class {
    constructor(_54578a5fe28e) {
      this.worker = new _388798ec35cc(_54578a5fe28e);
    }
    async getTransport() {
      return (await this.worker.sendMessage({
        type: "get"
      })).name;
    }
    async setTransport(_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) {
      await this.setManualTransport(`\n\t\t\tconst { default: BareTransport } = await import("${_54578a5fe28e}");\n\t\t\treturn [BareTransport, "${_54578a5fe28e}"];\n\t\t`, _7850ade6c8cc, _4cf46dea4c5b);
    }
    async setManualTransport(_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) {
      if (_54578a5fe28e === "bare-mux-remote") throw new Error("Use setRemoteTransport.");
      await this.worker.sendMessage({
        type: "set",
        client: {
          function: _54578a5fe28e,
          args: _7850ade6c8cc
        }
      }, _4cf46dea4c5b);
    }
    async setRemoteTransport(_54578a5fe28e, _7850ade6c8cc) {
      let _4cf46dea4c5b = new MessageChannel;
      _4cf46dea4c5b.port1.onmessage = async _7850ade6c8cc => {
        let _4cf46dea4c5b = _7850ade6c8cc.data.port, _9d3b9d29f57c = _7850ade6c8cc.data.message;
        if (_9d3b9d29f57c.type === "fetch") try {
          _54578a5fe28e.ready || await _54578a5fe28e.init(), await async function(_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) {
            let _9d3b9d29f57c = await _4cf46dea4c5b.request(new URL(_54578a5fe28e.fetch.remote), _54578a5fe28e.fetch.method, _54578a5fe28e.fetch.body, _54578a5fe28e.fetch.headers, null);
            if (!lt() && _9d3b9d29f57c.body instanceof ReadableStream) {
              let _54578a5fe28e = new Response(_9d3b9d29f57c.body);
              _9d3b9d29f57c.body = await _54578a5fe28e.arrayBuffer();
            }
            _9d3b9d29f57c.body instanceof ReadableStream || _9d3b9d29f57c.body instanceof ArrayBuffer ? _c2607b7e21b1.call(_7850ade6c8cc, {
              type: "fetch",
              fetch: _9d3b9d29f57c
            }, [ _9d3b9d29f57c.body ]) : _c2607b7e21b1.call(_7850ade6c8cc, {
              type: "fetch",
              fetch: _9d3b9d29f57c
            });
          }(_9d3b9d29f57c, _4cf46dea4c5b, _54578a5fe28e);
        } catch (_54578a5fe28e) {
          Ce(_4cf46dea4c5b, _54578a5fe28e, "fetch");
        } else if (_9d3b9d29f57c.type === "websocket") try {
          _54578a5fe28e.ready || await _54578a5fe28e.init(), await async function(_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) {
            let [_9d3b9d29f57c, _cecd9bbc6126] = _4cf46dea4c5b.connect(new URL(_54578a5fe28e.websocket.url), _54578a5fe28e.websocket.protocols, _54578a5fe28e.websocket.requestHeaders, _7850ade6c8cc => {
              _c2607b7e21b1.call(_54578a5fe28e.websocket.channel, {
                type: "open",
                args: [ _7850ade6c8cc ]
              });
            }, _7850ade6c8cc => {
              _7850ade6c8cc instanceof ArrayBuffer ? _c2607b7e21b1.call(_54578a5fe28e.websocket.channel, {
                type: "message",
                args: [ _7850ade6c8cc ]
              }, [ _7850ade6c8cc ]) : _c2607b7e21b1.call(_54578a5fe28e.websocket.channel, {
                type: "message",
                args: [ _7850ade6c8cc ]
              });
            }, (_7850ade6c8cc, _4cf46dea4c5b) => {
              _c2607b7e21b1.call(_54578a5fe28e.websocket.channel, {
                type: "close",
                args: [ _7850ade6c8cc, _4cf46dea4c5b ]
              });
            }, _7850ade6c8cc => {
              _c2607b7e21b1.call(_54578a5fe28e.websocket.channel, {
                type: "error",
                args: [ _7850ade6c8cc ]
              });
            });
            _54578a5fe28e.websocket.channel.onmessage = _54578a5fe28e => {
              _54578a5fe28e.data.type === "data" ? _9d3b9d29f57c(_54578a5fe28e.data.data) : _54578a5fe28e.data.type === "close" && _cecd9bbc6126(_54578a5fe28e.data.closeCode, _54578a5fe28e.data.closeReason);
            }, _c2607b7e21b1.call(_7850ade6c8cc, {
              type: "websocket"
            });
          }(_9d3b9d29f57c, _4cf46dea4c5b, _54578a5fe28e);
        } catch (_54578a5fe28e) {
          Ce(_4cf46dea4c5b, _54578a5fe28e, "websocket");
        }
      }, await this.worker.sendMessage({
        type: "set",
        client: {
          function: "bare-mux-remote",
          args: [ _4cf46dea4c5b.port2, _7850ade6c8cc ]
        }
      }, [ _4cf46dea4c5b.port2 ]);
    }
    getInnerPort() {
      return this.worker.port;
    }
  };
  console.debug("bare-mux: running v2.1.6 (build 4b7607b)");
  var _fc4c5c49f1c3 = class extends _102b92f86821.default {
    constructor(_54578a5fe28e) {
      super(), this.ctx = _54578a5fe28e, this.window = _54578a5fe28e.window, this.Worker = this.window.Worker || {}, 
      this.Worklet = this.window.Worklet || {}, this.workletProto = this.Worklet.prototype || {}, 
      this.workerProto = this.Worker.prototype || {}, this.postMessage = this.workerProto.postMessage, 
      this.terminate = this.workerProto.terminate, this.addModule = this.workletProto.addModule;
    }
    overrideWorker() {
      this.ctx.override(this.window, "Worker", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (!_4cf46dea4c5b.length) return new _54578a5fe28e(..._4cf46dea4c5b);
        let [_9d3b9d29f57c, _cecd9bbc6126 = {}] = _4cf46dea4c5b, _d7cc09ba4839 = new _fedc199a9987({
          url: _9d3b9d29f57c,
          options: _cecd9bbc6126
        }, _54578a5fe28e, _7850ade6c8cc);
        if (this.emit("worker", _d7cc09ba4839), _d7cc09ba4839.intercepted) return _d7cc09ba4839.returnValue;
        let _b1cb6ca01576 = new _d7cc09ba4839.target(_d7cc09ba4839.data.url, _d7cc09ba4839.data.options), _a8578dde15c4 = new _37ec5324d69a;
        return (async () => {
          let _54578a5fe28e = await _a8578dde15c4.getInnerPort();
          _b1cb6ca01576.postMessage({
            __uv$type: "baremuxinit",
            port: _54578a5fe28e
          }, [ _54578a5fe28e ]);
        })(), _b1cb6ca01576;
      }, !0);
    }
    overrideAddModule() {
      this.ctx.override(this.workletProto, "addModule", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (!_4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c, _cecd9bbc6126 = {}] = _4cf46dea4c5b, _d7cc09ba4839 = new _fedc199a9987({
          url: _9d3b9d29f57c,
          options: _cecd9bbc6126
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("addModule", _d7cc09ba4839), _d7cc09ba4839.intercepted ? _d7cc09ba4839.returnValue : _d7cc09ba4839.target.call(_d7cc09ba4839.that, _d7cc09ba4839.data.url, _d7cc09ba4839.data.options);
      });
    }
    overridePostMessage() {
      this.ctx.override(this.workerProto, "postMessage", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (!_4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c, _cecd9bbc6126 = []] = _4cf46dea4c5b, _d7cc09ba4839 = new _fedc199a9987({
          message: _9d3b9d29f57c,
          transfer: _cecd9bbc6126
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("postMessage", _d7cc09ba4839), _d7cc09ba4839.intercepted ? _d7cc09ba4839.returnValue : _d7cc09ba4839.target.call(_d7cc09ba4839.that, _d7cc09ba4839.data.message, _d7cc09ba4839.data.transfer);
      });
    }
    overrideImportScripts() {
      this.ctx.override(this.window, "importScripts", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (!_4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let _9d3b9d29f57c = new _fedc199a9987({
          scripts: _4cf46dea4c5b
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("importScripts", _9d3b9d29f57c), _9d3b9d29f57c.intercepted ? _9d3b9d29f57c.returnValue : _9d3b9d29f57c.target.apply(_9d3b9d29f57c.that, _9d3b9d29f57c.data.scripts);
      });
    }
  }, _7c175abf5ce0 = _fc4c5c49f1c3;
  var _727949dcfd77 = m(_b1cb6ca01576(), 1);
  var _fe6aa549a0bd = class extends _727949dcfd77.default {
    constructor(_54578a5fe28e) {
      super(), this.ctx = _54578a5fe28e, this.window = this.ctx.window, this.URL = this.window.URL || {}, 
      this.createObjectURL = this.URL.createObjectURL, this.revokeObjectURL = this.URL.revokeObjectURL;
    }
    overrideObjectURL() {
      this.ctx.override(this.URL, "createObjectURL", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (!_4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c] = _4cf46dea4c5b, _cecd9bbc6126 = new _fedc199a9987({
          object: _9d3b9d29f57c
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("createObjectURL", _cecd9bbc6126), _cecd9bbc6126.intercepted ? _cecd9bbc6126.returnValue : _cecd9bbc6126.target.call(_cecd9bbc6126.that, _cecd9bbc6126.data.object);
      }), this.ctx.override(this.URL, "revokeObjectURL", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (!_4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c] = _4cf46dea4c5b, _cecd9bbc6126 = new _fedc199a9987({
          url: _9d3b9d29f57c
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("revokeObjectURL", _cecd9bbc6126), _cecd9bbc6126.intercepted ? _cecd9bbc6126.returnValue : _cecd9bbc6126.target.call(_cecd9bbc6126.that, _cecd9bbc6126.data.url);
      });
    }
  }, _c9c75f318098 = _fe6aa549a0bd;
  var _4181c61bbd94 = m(_b1cb6ca01576(), 1);
  var _e399508a4e43 = m(_b1cb6ca01576(), 1);
  var _784e9eece979 = class extends _e399508a4e43.default {
    constructor(_54578a5fe28e) {
      super(), this.ctx = _54578a5fe28e, this.window = _54578a5fe28e.window, this.localStorage = this.window.localStorage || null, 
      this.sessionStorage = this.window.sessionStorage || null, this.Storage = this.window.Storage || {}, 
      this.storeProto = this.Storage.prototype || {}, this.getItem = this.storeProto.getItem || null, 
      this.setItem = this.storeProto.setItem || null, this.removeItem = this.storeProto.removeItem || null, 
      this.clear = this.storeProto.clear || null, this.key = this.storeProto.key || null, 
      this.methods = [ "key", "getItem", "setItem", "removeItem", "clear" ], this.wrappers = new _54578a5fe28e.nativeMethods.Map;
    }
    overrideMethods() {
      this.ctx.override(this.storeProto, "getItem", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (!_4cf46dea4c5b.length) return _54578a5fe28e.apply(this.wrappers.get(_7850ade6c8cc) || _7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c] = _4cf46dea4c5b, _cecd9bbc6126 = new _fedc199a9987({
          name: _9d3b9d29f57c
        }, _54578a5fe28e, this.wrappers.get(_7850ade6c8cc) || _7850ade6c8cc);
        return this.emit("getItem", _cecd9bbc6126), _cecd9bbc6126.intercepted ? _cecd9bbc6126.returnValue : _cecd9bbc6126.target.call(_cecd9bbc6126.that, _cecd9bbc6126.data.name);
      }), this.ctx.override(this.storeProto, "setItem", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (2 > _4cf46dea4c5b.length) return _54578a5fe28e.apply(this.wrappers.get(_7850ade6c8cc) || _7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c, _cecd9bbc6126] = _4cf46dea4c5b, _d7cc09ba4839 = new _fedc199a9987({
          name: _9d3b9d29f57c,
          value: _cecd9bbc6126
        }, _54578a5fe28e, this.wrappers.get(_7850ade6c8cc) || _7850ade6c8cc);
        return this.emit("setItem", _d7cc09ba4839), _d7cc09ba4839.intercepted ? _d7cc09ba4839.returnValue : _d7cc09ba4839.target.call(_d7cc09ba4839.that, _d7cc09ba4839.data.name, _d7cc09ba4839.data.value);
      }), this.ctx.override(this.storeProto, "removeItem", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (!_4cf46dea4c5b.length) return _54578a5fe28e.apply(this.wrappers.get(_7850ade6c8cc) || _7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c] = _4cf46dea4c5b, _cecd9bbc6126 = new _fedc199a9987({
          name: _9d3b9d29f57c
        }, _54578a5fe28e, this.wrappers.get(_7850ade6c8cc) || _7850ade6c8cc);
        return this.emit("removeItem", _cecd9bbc6126), _cecd9bbc6126.intercepted ? _cecd9bbc6126.returnValue : _cecd9bbc6126.target.call(_cecd9bbc6126.that, _cecd9bbc6126.data.name);
      }), this.ctx.override(this.storeProto, "clear", (_54578a5fe28e, _7850ade6c8cc) => {
        let _4cf46dea4c5b = new _fedc199a9987(null, _54578a5fe28e, this.wrappers.get(_7850ade6c8cc) || _7850ade6c8cc);
        return this.emit("clear", _4cf46dea4c5b), _4cf46dea4c5b.intercepted ? _4cf46dea4c5b.returnValue : _4cf46dea4c5b.target.call(_4cf46dea4c5b.that);
      }), this.ctx.override(this.storeProto, "key", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (!_4cf46dea4c5b.length) return _54578a5fe28e.apply(this.wrappers.get(_7850ade6c8cc) || _7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c] = _4cf46dea4c5b, _cecd9bbc6126 = new _fedc199a9987({
          index: _9d3b9d29f57c
        }, _54578a5fe28e, this.wrappers.get(_7850ade6c8cc) || _7850ade6c8cc);
        return this.emit("key", _cecd9bbc6126), _cecd9bbc6126.intercepted ? _cecd9bbc6126.returnValue : _cecd9bbc6126.target.call(_cecd9bbc6126.that, _cecd9bbc6126.data.index);
      });
    }
    overrideLength() {
      this.ctx.overrideDescriptor(this.storeProto, "length", {
        get: (_54578a5fe28e, _7850ade6c8cc) => {
          let _4cf46dea4c5b = new _fedc199a9987({
            length: _54578a5fe28e.call(this.wrappers.get(_7850ade6c8cc) || _7850ade6c8cc)
          }, _54578a5fe28e, this.wrappers.get(_7850ade6c8cc) || _7850ade6c8cc);
          return this.emit("length", _4cf46dea4c5b), _4cf46dea4c5b.intercepted ? _4cf46dea4c5b.returnValue : _4cf46dea4c5b.data.length;
        }
      });
    }
    emulate(_54578a5fe28e, _7850ade6c8cc = {}) {
      this.ctx.nativeMethods.setPrototypeOf(_7850ade6c8cc, this.storeProto);
      let _4cf46dea4c5b = new this.ctx.window.Proxy(_7850ade6c8cc, {
        get: (_7850ade6c8cc, _4cf46dea4c5b) => {
          if (_4cf46dea4c5b in this.storeProto || typeof _4cf46dea4c5b == "symbol") return _54578a5fe28e[_4cf46dea4c5b];
          let _9d3b9d29f57c = new _fedc199a9987({
            name: _4cf46dea4c5b
          }, null, _54578a5fe28e);
          return this.emit("get", _9d3b9d29f57c), _9d3b9d29f57c.intercepted ? _9d3b9d29f57c.returnValue : _54578a5fe28e[_9d3b9d29f57c.data.name];
        },
        set: (_7850ade6c8cc, _4cf46dea4c5b, _9d3b9d29f57c) => {
          if (_4cf46dea4c5b in this.storeProto || typeof _4cf46dea4c5b == "symbol") return _54578a5fe28e[_4cf46dea4c5b] = _9d3b9d29f57c;
          let _cecd9bbc6126 = new _fedc199a9987({
            name: _4cf46dea4c5b,
            value: _9d3b9d29f57c
          }, null, _54578a5fe28e);
          return this.emit("set", _cecd9bbc6126), _cecd9bbc6126.intercepted ? _cecd9bbc6126.returnValue : _54578a5fe28e[_cecd9bbc6126.data.name] = _cecd9bbc6126.data.value;
        },
        deleteProperty: (_7850ade6c8cc, _4cf46dea4c5b) => {
          if (typeof _4cf46dea4c5b == "symbol") return delete _54578a5fe28e[_4cf46dea4c5b];
          let _9d3b9d29f57c = new _fedc199a9987({
            name: _4cf46dea4c5b
          }, null, _54578a5fe28e);
          return this.emit("delete", _9d3b9d29f57c), _9d3b9d29f57c.intercepted ? _9d3b9d29f57c.returnValue : delete _54578a5fe28e[_9d3b9d29f57c.data.name];
        }
      });
      return this.wrappers.set(_4cf46dea4c5b, _54578a5fe28e), this.ctx.nativeMethods.setPrototypeOf(_4cf46dea4c5b, this.storeProto), 
      _4cf46dea4c5b;
    }
  }, _2bc0f983f7bc = _784e9eece979;
  var _b043e419294a = m(_b1cb6ca01576(), 1);
  var _4c873623ee28 = class extends _b043e419294a.default {
    constructor(_54578a5fe28e) {
      super(), this.ctx = _54578a5fe28e, this.window = _54578a5fe28e.window, this.CSSStyleDeclaration = this.window.CSSStyleDeclaration || {}, 
      this.cssStyleProto = this.CSSStyleDeclaration.prototype || {}, this.getPropertyValue = this.cssStyleProto.getPropertyValue || null, 
      this.setProperty = this.cssStyleProto.setProperty || null, this.cssText - _54578a5fe28e.nativeMethods.getOwnPropertyDescriptors(this.cssStyleProto, "cssText"), 
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
      this.ctx.override(this.cssStyleProto, "getPropertyValue", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (!_4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c] = _4cf46dea4c5b, _cecd9bbc6126 = new _fedc199a9987({
          property: _9d3b9d29f57c
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("getPropertyValue", _cecd9bbc6126), _cecd9bbc6126.intercepted ? _cecd9bbc6126.returnValue : _cecd9bbc6126.target.call(_cecd9bbc6126.that, _cecd9bbc6126.data.property);
      }), this.ctx.override(this.cssStyleProto, "setProperty", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (2 > _4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c, _cecd9bbc6126] = _4cf46dea4c5b, _d7cc09ba4839 = new _fedc199a9987({
          property: _9d3b9d29f57c,
          value: _cecd9bbc6126
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("setProperty", _d7cc09ba4839), _d7cc09ba4839.intercepted ? _d7cc09ba4839.returnValue : _d7cc09ba4839.target.call(_d7cc09ba4839.that, _d7cc09ba4839.data.property, _d7cc09ba4839.data.value);
      });
    }
    overrideCssText() {
      this.ctx.overrideDescriptor(this.cssStyleProto, "cssText", {
        get: (_54578a5fe28e, _7850ade6c8cc) => {
          let _4cf46dea4c5b = new _fedc199a9987({
            value: _54578a5fe28e.call(_7850ade6c8cc)
          }, _54578a5fe28e, _7850ade6c8cc);
          return this.emit("getCssText", _4cf46dea4c5b), _4cf46dea4c5b.intercepted ? _4cf46dea4c5b.returnValue : _4cf46dea4c5b.data.value;
        },
        set: (_54578a5fe28e, _7850ade6c8cc, [_4cf46dea4c5b]) => {
          let _9d3b9d29f57c = new _fedc199a9987({
            value: _4cf46dea4c5b
          }, _54578a5fe28e, _7850ade6c8cc);
          return this.emit("setCssText", _9d3b9d29f57c), _9d3b9d29f57c.intercepted ? _9d3b9d29f57c.returnValue : _9d3b9d29f57c.target.call(_9d3b9d29f57c.that, _9d3b9d29f57c.data.value);
        }
      });
    }
  }, _c12aeab4416c = _4c873623ee28;
  var _516265174f48 = m(_b1cb6ca01576(), 1);
  var _198fc2284490 = class extends _516265174f48.default {
    constructor(_54578a5fe28e) {
      super(), this.ctx = _54578a5fe28e, this.window = this.ctx.window, this.IDBDatabase = this.window.IDBDatabase || {}, 
      this.idbDatabaseProto = this.IDBDatabase.prototype || {}, this.IDBFactory = this.window.IDBFactory || {}, 
      this.idbFactoryProto = this.IDBFactory.prototype || {}, this.open = this.idbFactoryProto.open;
    }
    overrideOpen() {
      this.ctx.override(this.IDBFactory.prototype, "open", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        if (!_4cf46dea4c5b.length || !_4cf46dea4c5b.length) return _54578a5fe28e.apply(_7850ade6c8cc, _4cf46dea4c5b);
        let [_9d3b9d29f57c, _cecd9bbc6126] = _4cf46dea4c5b, _d7cc09ba4839 = new _fedc199a9987({
          name: _9d3b9d29f57c,
          version: _cecd9bbc6126
        }, _54578a5fe28e, _7850ade6c8cc);
        return this.emit("idbFactoryOpen", _d7cc09ba4839), _d7cc09ba4839.intercepted ? _d7cc09ba4839.returnValue : _d7cc09ba4839.target.call(_d7cc09ba4839.that, _d7cc09ba4839.data.name, _d7cc09ba4839.data.version);
      });
    }
    overrideName() {
      this.ctx.overrideDescriptor(this.idbDatabaseProto, "name", {
        get: (_54578a5fe28e, _7850ade6c8cc) => {
          let _4cf46dea4c5b = new _fedc199a9987({
            value: _54578a5fe28e.call(_7850ade6c8cc)
          }, _54578a5fe28e, _7850ade6c8cc);
          return this.emit("idbFactoryName", _4cf46dea4c5b), _4cf46dea4c5b.intercepted ? _4cf46dea4c5b.returnValue : _4cf46dea4c5b.data.value;
        }
      });
    }
  }, _2ea50c2da037 = _198fc2284490;
  var _db0f5067ea73 = m(_b1cb6ca01576(), 1);
  var _73b9eed6ea60 = class extends _db0f5067ea73.default {
    constructor(_54578a5fe28e) {
      super(), this.ctx = _54578a5fe28e, this.window = _54578a5fe28e.window, this.WebSocket = this.window.WebSocket || {}, 
      this.wsProto = this.WebSocket.prototype, this.CONNECTING = WebSocket.CONNECTING, 
      this.OPEN = WebSocket.OPEN, this.CLOSING = WebSocket.CLOSING, this.CLOSED = WebSocket.CLOSED, 
      this.socketmap = new WeakMap;
    }
    overrideWebSocket(_54578a5fe28e) {
      this.ctx.override(this.window, "WebSocket", (_7850ade6c8cc, _4cf46dea4c5b, _9d3b9d29f57c) => {
        let _cecd9bbc6126 = new EventTarget;
        Object.setPrototypeOf(_cecd9bbc6126, this.WebSocket.prototype), _cecd9bbc6126.constructor = this.WebSocket;
        let i = _54578a5fe28e => new Proxy(_54578a5fe28e, {
          get(_54578a5fe28e, _7850ade6c8cc) {
            return _7850ade6c8cc === "isTrusted" ? !0 : Reflect.get(_54578a5fe28e, _7850ade6c8cc);
          }
        }), _d7cc09ba4839 = _54578a5fe28e.createWebSocket(_9d3b9d29f57c[0], _9d3b9d29f57c[1], null, {
          "User-Agent": navigator.userAgent,
          Origin: __uv.meta.url.origin
        }), _b1cb6ca01576 = {
          extensions: "",
          protocol: "",
          url: _9d3b9d29f57c[0],
          binaryType: "blob",
          barews: _d7cc09ba4839
        };
        function u(_54578a5fe28e) {
          _b1cb6ca01576["on" + _54578a5fe28e.type]?.(i(_54578a5fe28e)), _cecd9bbc6126.dispatchEvent(_54578a5fe28e);
        }
        return _d7cc09ba4839.addEventListener("open", () => {
          u(new Event("open"));
        }), _d7cc09ba4839.addEventListener("close", _54578a5fe28e => {
          u(new CloseEvent("close", _54578a5fe28e));
        }), _d7cc09ba4839.addEventListener("message", async _54578a5fe28e => {
          let _7850ade6c8cc = _54578a5fe28e.data;
          typeof _7850ade6c8cc == "string" || ("byteLength" in _7850ade6c8cc ? _b1cb6ca01576.binaryType === "blob" ? _7850ade6c8cc = new Blob([ _7850ade6c8cc ]) : Object.setPrototypeOf(_7850ade6c8cc, ArrayBuffer.prototype) : "arrayBuffer" in _7850ade6c8cc && _b1cb6ca01576.binaryType === "arraybuffer" && (_7850ade6c8cc = await _7850ade6c8cc.arrayBuffer(), 
          Object.setPrototypeOf(_7850ade6c8cc, ArrayBuffer.prototype)));
          let _4cf46dea4c5b = new MessageEvent("message", {
            data: _7850ade6c8cc,
            origin: _54578a5fe28e.origin,
            lastEventId: _54578a5fe28e.lastEventId,
            source: _54578a5fe28e.source,
            ports: _54578a5fe28e.ports
          });
          u(_4cf46dea4c5b);
        }), _d7cc09ba4839.addEventListener("error", () => {
          u(new Event("error"));
        }), this.socketmap.set(_cecd9bbc6126, _b1cb6ca01576), _cecd9bbc6126;
      }, !0), this.ctx.overrideDescriptor(this.wsProto, "binaryType", {
        get: (_54578a5fe28e, _7850ade6c8cc) => this.socketmap.get(_7850ade6c8cc).binaryType,
        set: (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
          let _9d3b9d29f57c = this.socketmap.get(_7850ade6c8cc);
          (_4cf46dea4c5b[0] === "blob" || _4cf46dea4c5b[0] === "arraybuffer") && (_9d3b9d29f57c.binaryType = _4cf46dea4c5b[0]);
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "bufferedAmount", {
        get: (_54578a5fe28e, _7850ade6c8cc) => 0
      }), this.ctx.overrideDescriptor(this.wsProto, "extensions", {
        get: (_54578a5fe28e, _7850ade6c8cc) => this.socketmap.get(_7850ade6c8cc).extensions
      }), this.ctx.overrideDescriptor(this.wsProto, "onclose", {
        get: (_54578a5fe28e, _7850ade6c8cc) => this.socketmap.get(_7850ade6c8cc).onclose,
        set: (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
          let _9d3b9d29f57c = this.socketmap.get(_7850ade6c8cc);
          _9d3b9d29f57c.onclose = _4cf46dea4c5b[0];
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "onerror", {
        get: (_54578a5fe28e, _7850ade6c8cc) => this.socketmap.get(_7850ade6c8cc).onerror,
        set: (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
          let _9d3b9d29f57c = this.socketmap.get(_7850ade6c8cc);
          _9d3b9d29f57c.onerror = _4cf46dea4c5b[0];
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "onmessage", {
        get: (_54578a5fe28e, _7850ade6c8cc) => this.socketmap.get(_7850ade6c8cc).onmessage,
        set: (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
          let _9d3b9d29f57c = this.socketmap.get(_7850ade6c8cc);
          _9d3b9d29f57c.onmessage = _4cf46dea4c5b[0];
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "onopen", {
        get: (_54578a5fe28e, _7850ade6c8cc) => this.socketmap.get(_7850ade6c8cc).onopen,
        set: (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
          let _9d3b9d29f57c = this.socketmap.get(_7850ade6c8cc);
          _9d3b9d29f57c.onopen = _4cf46dea4c5b[0];
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "url", {
        get: (_54578a5fe28e, _7850ade6c8cc) => this.socketmap.get(_7850ade6c8cc).url
      }), this.ctx.overrideDescriptor(this.wsProto, "protocol", {
        get: (_54578a5fe28e, _7850ade6c8cc) => this.socketmap.get(_7850ade6c8cc).protocol
      }), this.ctx.overrideDescriptor(this.wsProto, "readyState", {
        get: (_54578a5fe28e, _7850ade6c8cc) => this.socketmap.get(_7850ade6c8cc).barews.readyState
      }), this.ctx.override(this.wsProto, "send", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => this.socketmap.get(_7850ade6c8cc).barews.send(_4cf46dea4c5b[0]), !1), 
      this.ctx.override(this.wsProto, "close", (_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b) => {
        let _9d3b9d29f57c = this.socketmap.get(_7850ade6c8cc);
        return _4cf46dea4c5b[0] === void 0 && (_4cf46dea4c5b[0] = 1e3), _4cf46dea4c5b[1] === void 0 && (_4cf46dea4c5b[1] = ""), 
        _9d3b9d29f57c.barews.close(_4cf46dea4c5b[0], _4cf46dea4c5b[1]);
      }, !1);
    }
  }, _c11b27458974 = _73b9eed6ea60;
  var _f696fbc427ea = class extends _4181c61bbd94.default {
    constructor(_54578a5fe28e = self, _7850ade6c8cc, _4cf46dea4c5b = !_54578a5fe28e.window) {
      super(), this.window = _54578a5fe28e, this.nativeMethods = {
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
      }, this.worker = _4cf46dea4c5b, this.bareClient = _7850ade6c8cc, this.fetch = new _ce15d9cf0d2f(this), 
      this.xhr = new _c5f07e027c6e(this), this.idb = new _2ea50c2da037(this), this.history = new _6efe7b95a7db(this), 
      this.element = new _8415d837712b(this), this.node = new _e8029dd6feb1(this), this.document = new _bf63bc55f092(this), 
      this.function = new _d1921ec4bc4a(this), this.object = new _001bee5aa5e5(this), 
      this.websocket = new _c11b27458974(this), this.message = new _3f2dfffac987(this), 
      this.navigator = new _56b0cb89bd3b(this), this.eventSource = new _7ae00b9641b7(this), 
      this.attribute = new _786558f6db74(this), this.url = new _c9c75f318098(this), this.workers = new _7c175abf5ce0(this), 
      this.location = new _2449bc37a551(this), this.storage = new _2bc0f983f7bc(this), 
      this.style = new _c12aeab4416c(this);
    }
    override(_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b, _9d3b9d29f57c) {
      let _cecd9bbc6126 = this.wrap(_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b, _9d3b9d29f57c);
      return _54578a5fe28e[_7850ade6c8cc] = _cecd9bbc6126, _cecd9bbc6126;
    }
    overrideDescriptor(_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b = {}) {
      let _9d3b9d29f57c = this.wrapDescriptor(_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b);
      return _9d3b9d29f57c ? (this.nativeMethods.defineProperty(_54578a5fe28e, _7850ade6c8cc, _9d3b9d29f57c), 
      _9d3b9d29f57c) : {};
    }
    wrap(_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b, _9d3b9d29f57c = !1) {
      let _cecd9bbc6126 = _54578a5fe28e[_7850ade6c8cc];
      if (!_cecd9bbc6126) return _cecd9bbc6126;
      let _d7cc09ba4839 = "prototype" in _cecd9bbc6126 ? function() {
        return _4cf46dea4c5b(_cecd9bbc6126, this, [ ...arguments ]);
      } : {
        attach() {
          return _4cf46dea4c5b(_cecd9bbc6126, this, [ ...arguments ]);
        }
      }.attach;
      return _9d3b9d29f57c && (_d7cc09ba4839.prototype = _cecd9bbc6126.prototype, _d7cc09ba4839.prototype.constructor = _d7cc09ba4839), 
      this.emit("wrap", _cecd9bbc6126, _d7cc09ba4839, _9d3b9d29f57c), _d7cc09ba4839;
    }
    wrapDescriptor(_54578a5fe28e, _7850ade6c8cc, _4cf46dea4c5b = {}) {
      let _9d3b9d29f57c = this.nativeMethods.getOwnPropertyDescriptor(_54578a5fe28e, _7850ade6c8cc);
      if (!_9d3b9d29f57c) return !1;
      for (let _54578a5fe28e in _4cf46dea4c5b) _54578a5fe28e in _9d3b9d29f57c && (_54578a5fe28e === "get" || _54578a5fe28e === "set" ? _9d3b9d29f57c[_54578a5fe28e] = this.wrap(_9d3b9d29f57c, _54578a5fe28e, _4cf46dea4c5b[_54578a5fe28e]) : _9d3b9d29f57c[_54578a5fe28e] = typeof _4cf46dea4c5b[_54578a5fe28e] == "function" ? _4cf46dea4c5b[_54578a5fe28e](_9d3b9d29f57c[_54578a5fe28e]) : _4cf46dea4c5b[_54578a5fe28e]);
      return _9d3b9d29f57c;
    }
  }, _9d69db4aa259 = _f696fbc427ea;
  typeof self == "object" && (self.UVClient = _f696fbc427ea);
})();
