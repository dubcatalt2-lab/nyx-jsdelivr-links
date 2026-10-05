"use strict";

(() => {
  var _8dbc10c2212d = Object.create;
  var _e88556ded714 = Object.defineProperty;
  var _934bd4ea3ba6 = Object.getOwnPropertyDescriptor;
  var _7ca63121ca79 = Object.getOwnPropertyNames;
  var _1746cd833377 = Object.getPrototypeOf, _3fd0e96eed52 = Object.prototype.hasOwnProperty;
  var et = (_8dbc10c2212d, _e88556ded714) => () => (_e88556ded714 || _8dbc10c2212d((_e88556ded714 = {
    exports: {}
  }).exports, _e88556ded714), _e88556ded714.exports);
  var tt = (_8dbc10c2212d, _1746cd833377, _f8c090733b39, _4768674375f7) => {
    if (_1746cd833377 && typeof _1746cd833377 == "object" || typeof _1746cd833377 == "function") for (let _1469c53360cc of _7ca63121ca79(_1746cd833377)) !_3fd0e96eed52.call(_8dbc10c2212d, _1469c53360cc) && _1469c53360cc !== _f8c090733b39 && _e88556ded714(_8dbc10c2212d, _1469c53360cc, {
      get: () => _1746cd833377[_1469c53360cc],
      enumerable: !(_4768674375f7 = _934bd4ea3ba6(_1746cd833377, _1469c53360cc)) || _4768674375f7.enumerable
    });
    return _8dbc10c2212d;
  };
  var m = (_934bd4ea3ba6, _7ca63121ca79, _3fd0e96eed52) => (_3fd0e96eed52 = _934bd4ea3ba6 != null ? _8dbc10c2212d(_1746cd833377(_934bd4ea3ba6)) : {}, 
  tt(_7ca63121ca79 || !_934bd4ea3ba6 || !_934bd4ea3ba6.__esModule ? _e88556ded714(_3fd0e96eed52, "default", {
    value: _934bd4ea3ba6,
    enumerable: !0
  }) : _3fd0e96eed52, _934bd4ea3ba6));
  var _f8c090733b39 = et((_8dbc10c2212d, _e88556ded714) => {
    "use strict";
    var _934bd4ea3ba6 = typeof Reflect == "object" ? Reflect : null, _7ca63121ca79 = _934bd4ea3ba6 && typeof _934bd4ea3ba6.apply == "function" ? _934bd4ea3ba6.apply : function(_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) {
      return Function.prototype.apply.call(_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6);
    }, _1746cd833377;
    _934bd4ea3ba6 && typeof _934bd4ea3ba6.ownKeys == "function" ? _1746cd833377 = _934bd4ea3ba6.ownKeys : Object.getOwnPropertySymbols ? _1746cd833377 = function(_8dbc10c2212d) {
      return Object.getOwnPropertyNames(_8dbc10c2212d).concat(Object.getOwnPropertySymbols(_8dbc10c2212d));
    } : _1746cd833377 = function(_8dbc10c2212d) {
      return Object.getOwnPropertyNames(_8dbc10c2212d);
    };
    function rt(_8dbc10c2212d) {
      console && console.warn && console.warn(_8dbc10c2212d);
    }
    var _3fd0e96eed52 = Number.isNaN || function(_8dbc10c2212d) {
      return _8dbc10c2212d !== _8dbc10c2212d;
    };
    function d() {
      d.init.call(this);
    }
    _e88556ded714.exports = d;
    _e88556ded714.exports.once = st;
    d.EventEmitter = d;
    d.prototype._events = void 0;
    d.prototype._eventsCount = 0;
    d.prototype._maxListeners = void 0;
    var _f8c090733b39 = 10;
    function P(_8dbc10c2212d) {
      if (typeof _8dbc10c2212d != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof _8dbc10c2212d);
    }
    Object.defineProperty(d, "defaultMaxListeners", {
      enumerable: !0,
      get: function() {
        return _f8c090733b39;
      },
      set: function(_8dbc10c2212d) {
        if (typeof _8dbc10c2212d != "number" || _8dbc10c2212d < 0 || _3fd0e96eed52(_8dbc10c2212d)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + _8dbc10c2212d + ".");
        _f8c090733b39 = _8dbc10c2212d;
      }
    });
    d.init = function() {
      (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), 
      this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
    };
    d.prototype.setMaxListeners = function(_8dbc10c2212d) {
      if (typeof _8dbc10c2212d != "number" || _8dbc10c2212d < 0 || _3fd0e96eed52(_8dbc10c2212d)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + _8dbc10c2212d + ".");
      return this._maxListeners = _8dbc10c2212d, this;
    };
    function J(_8dbc10c2212d) {
      return _8dbc10c2212d._maxListeners === void 0 ? d.defaultMaxListeners : _8dbc10c2212d._maxListeners;
    }
    d.prototype.getMaxListeners = function() {
      return J(this);
    };
    d.prototype.emit = function(_8dbc10c2212d) {
      for (var _e88556ded714 = [], _934bd4ea3ba6 = 1; _934bd4ea3ba6 < arguments.length; _934bd4ea3ba6++) _e88556ded714.push(arguments[_934bd4ea3ba6]);
      var _1746cd833377 = _8dbc10c2212d === "error", _3fd0e96eed52 = this._events;
      if (_3fd0e96eed52 !== void 0) _1746cd833377 = _1746cd833377 && _3fd0e96eed52.error === void 0; else if (!_1746cd833377) return !1;
      if (_1746cd833377) {
        var _f8c090733b39;
        if (_e88556ded714.length > 0 && (_f8c090733b39 = _e88556ded714[0]), _f8c090733b39 instanceof Error) throw _f8c090733b39;
        var _4768674375f7 = new Error("Unhandled error." + (_f8c090733b39 ? " (" + _f8c090733b39.message + ")" : ""));
        throw _4768674375f7.context = _f8c090733b39, _4768674375f7;
      }
      var _1469c53360cc = _3fd0e96eed52[_8dbc10c2212d];
      if (_1469c53360cc === void 0) return !1;
      if (typeof _1469c53360cc == "function") _7ca63121ca79(_1469c53360cc, this, _e88556ded714); else for (var _8104aa7a485d = _1469c53360cc.length, _034a867e74dc = re(_1469c53360cc, _8104aa7a485d), _934bd4ea3ba6 = 0; _934bd4ea3ba6 < _8104aa7a485d; ++_934bd4ea3ba6) _7ca63121ca79(_034a867e74dc[_934bd4ea3ba6], this, _e88556ded714);
      return !0;
    };
    function Y(_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6, _7ca63121ca79) {
      var _1746cd833377, _3fd0e96eed52, _f8c090733b39;
      if (P(_934bd4ea3ba6), _3fd0e96eed52 = _8dbc10c2212d._events, _3fd0e96eed52 === void 0 ? (_3fd0e96eed52 = _8dbc10c2212d._events = Object.create(null), 
      _8dbc10c2212d._eventsCount = 0) : (_3fd0e96eed52.newListener !== void 0 && (_8dbc10c2212d.emit("newListener", _e88556ded714, _934bd4ea3ba6.listener ? _934bd4ea3ba6.listener : _934bd4ea3ba6), 
      _3fd0e96eed52 = _8dbc10c2212d._events), _f8c090733b39 = _3fd0e96eed52[_e88556ded714]), 
      _f8c090733b39 === void 0) _f8c090733b39 = _3fd0e96eed52[_e88556ded714] = _934bd4ea3ba6, 
      ++_8dbc10c2212d._eventsCount; else if (typeof _f8c090733b39 == "function" ? _f8c090733b39 = _3fd0e96eed52[_e88556ded714] = _7ca63121ca79 ? [ _934bd4ea3ba6, _f8c090733b39 ] : [ _f8c090733b39, _934bd4ea3ba6 ] : _7ca63121ca79 ? _f8c090733b39.unshift(_934bd4ea3ba6) : _f8c090733b39.push(_934bd4ea3ba6), 
      _1746cd833377 = J(_8dbc10c2212d), _1746cd833377 > 0 && _f8c090733b39.length > _1746cd833377 && !_f8c090733b39.warned) {
        _f8c090733b39.warned = !0;
        var _4768674375f7 = new Error("Possible EventEmitter memory leak detected. " + _f8c090733b39.length + " " + String(_e88556ded714) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        _4768674375f7.name = "MaxListenersExceededWarning", _4768674375f7.emitter = _8dbc10c2212d, 
        _4768674375f7.type = _e88556ded714, _4768674375f7.count = _f8c090733b39.length, 
        rt(_4768674375f7);
      }
      return _8dbc10c2212d;
    }
    d.prototype.addListener = function(_8dbc10c2212d, _e88556ded714) {
      return Y(this, _8dbc10c2212d, _e88556ded714, !1);
    };
    d.prototype.on = d.prototype.addListener;
    d.prototype.prependListener = function(_8dbc10c2212d, _e88556ded714) {
      return Y(this, _8dbc10c2212d, _e88556ded714, !0);
    };
    function ot() {
      if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 
      arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
    }
    function Z(_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) {
      var _7ca63121ca79 = {
        fired: !1,
        wrapFn: void 0,
        target: _8dbc10c2212d,
        type: _e88556ded714,
        listener: _934bd4ea3ba6
      }, _1746cd833377 = ot.bind(_7ca63121ca79);
      return _1746cd833377.listener = _934bd4ea3ba6, _7ca63121ca79.wrapFn = _1746cd833377, 
      _1746cd833377;
    }
    d.prototype.once = function(_8dbc10c2212d, _e88556ded714) {
      return P(_e88556ded714), this.on(_8dbc10c2212d, Z(this, _8dbc10c2212d, _e88556ded714)), 
      this;
    };
    d.prototype.prependOnceListener = function(_8dbc10c2212d, _e88556ded714) {
      return P(_e88556ded714), this.prependListener(_8dbc10c2212d, Z(this, _8dbc10c2212d, _e88556ded714)), 
      this;
    };
    d.prototype.removeListener = function(_8dbc10c2212d, _e88556ded714) {
      var _934bd4ea3ba6, _7ca63121ca79, _1746cd833377, _3fd0e96eed52, _f8c090733b39;
      if (P(_e88556ded714), _7ca63121ca79 = this._events, _7ca63121ca79 === void 0) return this;
      if (_934bd4ea3ba6 = _7ca63121ca79[_8dbc10c2212d], _934bd4ea3ba6 === void 0) return this;
      if (_934bd4ea3ba6 === _e88556ded714 || _934bd4ea3ba6.listener === _e88556ded714) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete _7ca63121ca79[_8dbc10c2212d], 
      _7ca63121ca79.removeListener && this.emit("removeListener", _8dbc10c2212d, _934bd4ea3ba6.listener || _e88556ded714)); else if (typeof _934bd4ea3ba6 != "function") {
        for (_1746cd833377 = -1, _3fd0e96eed52 = _934bd4ea3ba6.length - 1; _3fd0e96eed52 >= 0; _3fd0e96eed52--) if (_934bd4ea3ba6[_3fd0e96eed52] === _e88556ded714 || _934bd4ea3ba6[_3fd0e96eed52].listener === _e88556ded714) {
          _f8c090733b39 = _934bd4ea3ba6[_3fd0e96eed52].listener, _1746cd833377 = _3fd0e96eed52;
          break;
        }
        if (_1746cd833377 < 0) return this;
        _1746cd833377 === 0 ? _934bd4ea3ba6.shift() : nt(_934bd4ea3ba6, _1746cd833377), 
        _934bd4ea3ba6.length === 1 && (_7ca63121ca79[_8dbc10c2212d] = _934bd4ea3ba6[0]), 
        _7ca63121ca79.removeListener !== void 0 && this.emit("removeListener", _8dbc10c2212d, _f8c090733b39 || _e88556ded714);
      }
      return this;
    };
    d.prototype.off = d.prototype.removeListener;
    d.prototype.removeAllListeners = function(_8dbc10c2212d) {
      var _e88556ded714, _934bd4ea3ba6, _7ca63121ca79;
      if (_934bd4ea3ba6 = this._events, _934bd4ea3ba6 === void 0) return this;
      if (_934bd4ea3ba6.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), 
      this._eventsCount = 0) : _934bd4ea3ba6[_8dbc10c2212d] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete _934bd4ea3ba6[_8dbc10c2212d]), 
      this;
      if (arguments.length === 0) {
        var _1746cd833377 = Object.keys(_934bd4ea3ba6), _3fd0e96eed52;
        for (_7ca63121ca79 = 0; _7ca63121ca79 < _1746cd833377.length; ++_7ca63121ca79) _3fd0e96eed52 = _1746cd833377[_7ca63121ca79], 
        _3fd0e96eed52 !== "removeListener" && this.removeAllListeners(_3fd0e96eed52);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), 
        this._eventsCount = 0, this;
      }
      if (_e88556ded714 = _934bd4ea3ba6[_8dbc10c2212d], typeof _e88556ded714 == "function") this.removeListener(_8dbc10c2212d, _e88556ded714); else if (_e88556ded714 !== void 0) for (_7ca63121ca79 = _e88556ded714.length - 1; _7ca63121ca79 >= 0; _7ca63121ca79--) this.removeListener(_8dbc10c2212d, _e88556ded714[_7ca63121ca79]);
      return this;
    };
    function ee(_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) {
      var _7ca63121ca79 = _8dbc10c2212d._events;
      if (_7ca63121ca79 === void 0) return [];
      var _1746cd833377 = _7ca63121ca79[_e88556ded714];
      return _1746cd833377 === void 0 ? [] : typeof _1746cd833377 == "function" ? _934bd4ea3ba6 ? [ _1746cd833377.listener || _1746cd833377 ] : [ _1746cd833377 ] : _934bd4ea3ba6 ? it(_1746cd833377) : re(_1746cd833377, _1746cd833377.length);
    }
    d.prototype.listeners = function(_8dbc10c2212d) {
      return ee(this, _8dbc10c2212d, !0);
    };
    d.prototype.rawListeners = function(_8dbc10c2212d) {
      return ee(this, _8dbc10c2212d, !1);
    };
    d.listenerCount = function(_8dbc10c2212d, _e88556ded714) {
      return typeof _8dbc10c2212d.listenerCount == "function" ? _8dbc10c2212d.listenerCount(_e88556ded714) : te.call(_8dbc10c2212d, _e88556ded714);
    };
    d.prototype.listenerCount = te;
    function te(_8dbc10c2212d) {
      var _e88556ded714 = this._events;
      if (_e88556ded714 !== void 0) {
        var _934bd4ea3ba6 = _e88556ded714[_8dbc10c2212d];
        if (typeof _934bd4ea3ba6 == "function") return 1;
        if (_934bd4ea3ba6 !== void 0) return _934bd4ea3ba6.length;
      }
      return 0;
    }
    d.prototype.eventNames = function() {
      return this._eventsCount > 0 ? _1746cd833377(this._events) : [];
    };
    function re(_8dbc10c2212d, _e88556ded714) {
      for (var _934bd4ea3ba6 = new Array(_e88556ded714), _7ca63121ca79 = 0; _7ca63121ca79 < _e88556ded714; ++_7ca63121ca79) _934bd4ea3ba6[_7ca63121ca79] = _8dbc10c2212d[_7ca63121ca79];
      return _934bd4ea3ba6;
    }
    function nt(_8dbc10c2212d, _e88556ded714) {
      for (;_e88556ded714 + 1 < _8dbc10c2212d.length; _e88556ded714++) _8dbc10c2212d[_e88556ded714] = _8dbc10c2212d[_e88556ded714 + 1];
      _8dbc10c2212d.pop();
    }
    function it(_8dbc10c2212d) {
      for (var _e88556ded714 = new Array(_8dbc10c2212d.length), _934bd4ea3ba6 = 0; _934bd4ea3ba6 < _e88556ded714.length; ++_934bd4ea3ba6) _e88556ded714[_934bd4ea3ba6] = _8dbc10c2212d[_934bd4ea3ba6].listener || _8dbc10c2212d[_934bd4ea3ba6];
      return _e88556ded714;
    }
    function st(_8dbc10c2212d, _e88556ded714) {
      return new Promise(function(_934bd4ea3ba6, _7ca63121ca79) {
        function n(_934bd4ea3ba6) {
          _8dbc10c2212d.removeListener(_e88556ded714, o), _7ca63121ca79(_934bd4ea3ba6);
        }
        function o() {
          typeof _8dbc10c2212d.removeListener == "function" && _8dbc10c2212d.removeListener("error", n), 
          _934bd4ea3ba6([].slice.call(arguments));
        }
        oe(_8dbc10c2212d, _e88556ded714, o, {
          once: !0
        }), _e88556ded714 !== "error" && at(_8dbc10c2212d, n, {
          once: !0
        });
      });
    }
    function at(_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) {
      typeof _8dbc10c2212d.on == "function" && oe(_8dbc10c2212d, "error", _e88556ded714, _934bd4ea3ba6);
    }
    function oe(_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6, _7ca63121ca79) {
      if (typeof _8dbc10c2212d.on == "function") _7ca63121ca79.once ? _8dbc10c2212d.once(_e88556ded714, _934bd4ea3ba6) : _8dbc10c2212d.on(_e88556ded714, _934bd4ea3ba6); else if (typeof _8dbc10c2212d.addEventListener == "function") _8dbc10c2212d.addEventListener(_e88556ded714, function n(_1746cd833377) {
        _7ca63121ca79.once && _8dbc10c2212d.removeEventListener(_e88556ded714, n), _934bd4ea3ba6(_1746cd833377);
      }); else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof _8dbc10c2212d);
    }
  });
  var _4768674375f7 = m(_f8c090733b39(), 1);
  var _1469c53360cc = class {
    #_8dbc10c2212d;
    #_e88556ded714;
    constructor(_8dbc10c2212d = {}, _e88556ded714 = null, _934bd4ea3ba6 = null) {
      this.#_8dbc10c2212d = !1, this.#_e88556ded714 = null, this.data = _8dbc10c2212d, 
      this.target = _e88556ded714, this.that = _934bd4ea3ba6;
    }
    get intercepted() {
      return this.#_8dbc10c2212d;
    }
    get returnValue() {
      return this.#_e88556ded714;
    }
    respondWith(_8dbc10c2212d) {
      this.#_e88556ded714 = _8dbc10c2212d, this.#_8dbc10c2212d = !0;
    }
  }, _8104aa7a485d = _1469c53360cc;
  var _034a867e74dc = class extends _4768674375f7.default {
    constructor(_8dbc10c2212d) {
      super(), this.ctx = _8dbc10c2212d, this.window = _8dbc10c2212d.window, this.document = this.window.document, 
      this.Document = this.window.Document || {}, this.DOMParser = this.window.DOMParser || {}, 
      this.docProto = this.Document.prototype || {}, this.domProto = this.DOMParser.prototype || {}, 
      this.title = _8dbc10c2212d.nativeMethods.getOwnPropertyDescriptor(this.docProto, "title"), 
      this.cookie = _8dbc10c2212d.nativeMethods.getOwnPropertyDescriptor(this.docProto, "cookie"), 
      this.referrer = _8dbc10c2212d.nativeMethods.getOwnPropertyDescriptor(this.docProto, "referrer"), 
      this.domain = _8dbc10c2212d.nativeMethods.getOwnPropertyDescriptor(this.docProto, "domain"), 
      this.documentURI = _8dbc10c2212d.nativeMethods.getOwnPropertyDescriptor(this.docProto, "documentURI"), 
      this.write = this.docProto.write, this.writeln = this.docProto.writeln, this.querySelector = this.docProto.querySelector, 
      this.querySelectorAll = this.docProto.querySelectorAll, this.parseFromString = this.domProto.parseFromString, 
      this.URL = _8dbc10c2212d.nativeMethods.getOwnPropertyDescriptor(this.docProto, "URL");
    }
    overrideParseFromString() {
      this.ctx.override(this.domProto, "parseFromString", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (2 > _934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79, _1746cd833377] = _934bd4ea3ba6, _3fd0e96eed52 = new _8104aa7a485d({
          string: _7ca63121ca79,
          type: _1746cd833377
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("parseFromString", _3fd0e96eed52), _3fd0e96eed52.intercepted ? _3fd0e96eed52.returnValue : _3fd0e96eed52.target.call(_3fd0e96eed52.that, _3fd0e96eed52.data.string, _3fd0e96eed52.data.type);
      });
    }
    overrideQuerySelector() {
      this.ctx.override(this.docProto, "querySelector", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (!_934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79] = _934bd4ea3ba6, _1746cd833377 = new _8104aa7a485d({
          selectors: _7ca63121ca79
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("querySelector", _1746cd833377), _1746cd833377.intercepted ? _1746cd833377.returnValue : _1746cd833377.target.call(_1746cd833377.that, _1746cd833377.data.selectors);
      });
    }
    overrideDomain() {
      this.ctx.overrideDescriptor(this.docProto, "domain", {
        get: (_8dbc10c2212d, _e88556ded714) => {
          let _934bd4ea3ba6 = new _8104aa7a485d({
            value: _8dbc10c2212d.call(_e88556ded714)
          }, _8dbc10c2212d, _e88556ded714);
          return this.emit("getDomain", _934bd4ea3ba6), _934bd4ea3ba6.intercepted ? _934bd4ea3ba6.returnValue : _934bd4ea3ba6.data.value;
        },
        set: (_8dbc10c2212d, _e88556ded714, [_934bd4ea3ba6]) => {
          let _7ca63121ca79 = new _8104aa7a485d({
            value: _934bd4ea3ba6
          }, _8dbc10c2212d, _e88556ded714);
          return this.emit("setDomain", _7ca63121ca79), _7ca63121ca79.intercepted ? _7ca63121ca79.returnValue : _7ca63121ca79.target.call(_7ca63121ca79.that, _7ca63121ca79.data.value);
        }
      });
    }
    overrideReferrer() {
      this.ctx.overrideDescriptor(this.docProto, "referrer", {
        get: (_8dbc10c2212d, _e88556ded714) => {
          let _934bd4ea3ba6 = new _8104aa7a485d({
            value: _8dbc10c2212d.call(_e88556ded714)
          }, _8dbc10c2212d, _e88556ded714);
          return this.emit("referrer", _934bd4ea3ba6), _934bd4ea3ba6.intercepted ? _934bd4ea3ba6.returnValue : _934bd4ea3ba6.data.value;
        }
      });
    }
    overrideCreateTreeWalker() {
      this.ctx.override(this.docProto, "createTreeWalker", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (!_934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79, _1746cd833377 = 4294967295, _3fd0e96eed52, _f8c090733b39] = _934bd4ea3ba6, _4768674375f7 = new _8104aa7a485d({
          root: _7ca63121ca79,
          show: _1746cd833377,
          filter: _3fd0e96eed52,
          expandEntityReferences: _f8c090733b39
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("createTreeWalker", _4768674375f7), _4768674375f7.intercepted ? _4768674375f7.returnValue : _4768674375f7.target.call(_4768674375f7.that, _4768674375f7.data.root, _4768674375f7.data.show, _4768674375f7.data.filter, _4768674375f7.data.expandEntityReferences);
      });
    }
    overrideWrite() {
      this.ctx.override(this.docProto, "write", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (!_934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [..._7ca63121ca79] = _934bd4ea3ba6, _1746cd833377 = new _8104aa7a485d({
          html: _7ca63121ca79
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("write", _1746cd833377), _1746cd833377.intercepted ? _1746cd833377.returnValue : _1746cd833377.target.apply(_1746cd833377.that, _1746cd833377.data.html);
      }), this.ctx.override(this.docProto, "writeln", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (!_934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [..._7ca63121ca79] = _934bd4ea3ba6, _1746cd833377 = new _8104aa7a485d({
          html: _7ca63121ca79
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("writeln", _1746cd833377), _1746cd833377.intercepted ? _1746cd833377.returnValue : _1746cd833377.target.apply(_1746cd833377.that, _1746cd833377.data.html);
      });
    }
    overrideDocumentURI() {
      this.ctx.overrideDescriptor(this.docProto, "documentURI", {
        get: (_8dbc10c2212d, _e88556ded714) => {
          let _934bd4ea3ba6 = new _8104aa7a485d({
            value: _8dbc10c2212d.call(_e88556ded714)
          }, _8dbc10c2212d, _e88556ded714);
          return this.emit("documentURI", _934bd4ea3ba6), _934bd4ea3ba6.intercepted ? _934bd4ea3ba6.returnValue : _934bd4ea3ba6.data.value;
        }
      });
    }
    overrideURL() {
      this.ctx.overrideDescriptor(this.docProto, "URL", {
        get: (_8dbc10c2212d, _e88556ded714) => {
          let _934bd4ea3ba6 = new _8104aa7a485d({
            value: _8dbc10c2212d.call(_e88556ded714)
          }, _8dbc10c2212d, _e88556ded714);
          return this.emit("url", _934bd4ea3ba6), _934bd4ea3ba6.intercepted ? _934bd4ea3ba6.returnValue : _934bd4ea3ba6.data.value;
        }
      });
    }
    overrideCookie() {
      this.ctx.overrideDescriptor(this.docProto, "cookie", {
        get: (_8dbc10c2212d, _e88556ded714) => {
          let _934bd4ea3ba6 = new _8104aa7a485d({
            value: _8dbc10c2212d.call(_e88556ded714)
          }, _8dbc10c2212d, _e88556ded714);
          return this.emit("getCookie", _934bd4ea3ba6), _934bd4ea3ba6.intercepted ? _934bd4ea3ba6.returnValue : _934bd4ea3ba6.data.value;
        },
        set: (_8dbc10c2212d, _e88556ded714, [_934bd4ea3ba6]) => {
          let _7ca63121ca79 = new _8104aa7a485d({
            value: _934bd4ea3ba6
          }, _8dbc10c2212d, _e88556ded714);
          return this.emit("setCookie", _7ca63121ca79), _7ca63121ca79.intercepted ? _7ca63121ca79.returnValue : _7ca63121ca79.target.call(_7ca63121ca79.that, _7ca63121ca79.data.value);
        }
      });
    }
    overrideTitle() {
      this.ctx.overrideDescriptor(this.docProto, "title", {
        get: (_8dbc10c2212d, _e88556ded714) => {
          let _934bd4ea3ba6 = new _8104aa7a485d({
            value: _8dbc10c2212d.call(_e88556ded714)
          }, _8dbc10c2212d, _e88556ded714);
          return this.emit("getTitle", _934bd4ea3ba6), _934bd4ea3ba6.intercepted ? _934bd4ea3ba6.returnValue : _934bd4ea3ba6.data.value;
        },
        set: (_8dbc10c2212d, _e88556ded714, [_934bd4ea3ba6]) => {
          let _7ca63121ca79 = new _8104aa7a485d({
            value: _934bd4ea3ba6
          }, _8dbc10c2212d, _e88556ded714);
          return this.emit("setTitle", _7ca63121ca79), _7ca63121ca79.intercepted ? _7ca63121ca79.returnValue : _7ca63121ca79.target.call(_7ca63121ca79.that, _7ca63121ca79.data.value);
        }
      });
    }
  }, _5bd29dc7bc10 = _034a867e74dc;
  var _9d253d4980cd = m(_f8c090733b39(), 1);
  var _0cc37b1cb67d = class extends _9d253d4980cd.default {
    constructor(_8dbc10c2212d) {
      super(), this.ctx = _8dbc10c2212d, this.window = _8dbc10c2212d.window, this.Audio = this.window.Audio, 
      this.Element = this.window.Element, this.elemProto = this.Element ? this.Element.prototype : {}, 
      this.innerHTML = _8dbc10c2212d.nativeMethods.getOwnPropertyDescriptor(this.elemProto, "innerHTML"), 
      this.outerHTML = _8dbc10c2212d.nativeMethods.getOwnPropertyDescriptor(this.elemProto, "outerHTML"), 
      this.setAttribute = this.elemProto.setAttribute, this.getAttribute = this.elemProto.getAttribute, 
      this.removeAttribute = this.elemProto.removeAttribute, this.hasAttribute = this.elemProto.hasAttribute, 
      this.querySelector = this.elemProto.querySelector, this.querySelectorAll = this.elemProto.querySelectorAll, 
      this.insertAdjacentHTML = this.elemProto.insertAdjacentHTML, this.insertAdjacentText = this.elemProto.insertAdjacentText;
    }
    overrideQuerySelector() {
      this.ctx.override(this.elemProto, "querySelector", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (!_934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79] = _934bd4ea3ba6, _1746cd833377 = new _8104aa7a485d({
          selectors: _7ca63121ca79
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("querySelector", _1746cd833377), _1746cd833377.intercepted ? _1746cd833377.returnValue : _1746cd833377.target.call(_1746cd833377.that, _1746cd833377.data.selectors);
      });
    }
    overrideAttribute() {
      this.ctx.override(this.elemProto, "getAttribute", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (!_934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79] = _934bd4ea3ba6, _1746cd833377 = new _8104aa7a485d({
          name: _7ca63121ca79
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("getAttribute", _1746cd833377), _1746cd833377.intercepted ? _1746cd833377.returnValue : _1746cd833377.target.call(_1746cd833377.that, _1746cd833377.data.name);
      }), this.ctx.override(this.elemProto, "setAttribute", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (2 > _934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79, _1746cd833377] = _934bd4ea3ba6, _3fd0e96eed52 = new _8104aa7a485d({
          name: _7ca63121ca79,
          value: _1746cd833377
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("setAttribute", _3fd0e96eed52), _3fd0e96eed52.intercepted ? _3fd0e96eed52.returnValue : _3fd0e96eed52.target.call(_3fd0e96eed52.that, _3fd0e96eed52.data.name, _3fd0e96eed52.data.value);
      }), this.ctx.override(this.elemProto, "hasAttribute", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (!_934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79] = _934bd4ea3ba6, _1746cd833377 = new _8104aa7a485d({
          name: _7ca63121ca79
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("hasAttribute", _1746cd833377), _1746cd833377.intercepted ? _1746cd833377.returnValue : _1746cd833377.target.call(_1746cd833377.that, _1746cd833377.data.name);
      }), this.ctx.override(this.elemProto, "removeAttribute", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (!_934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79] = _934bd4ea3ba6, _1746cd833377 = new _8104aa7a485d({
          name: _7ca63121ca79
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("removeAttribute", _1746cd833377), _1746cd833377.intercepted ? _1746cd833377.returnValue : _1746cd833377.target.call(_1746cd833377.that, _1746cd833377.data.name);
      });
    }
    overrideAudio() {
      this.ctx.override(this.window, "Audio", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (!_934bd4ea3ba6.length) return new _8dbc10c2212d(..._934bd4ea3ba6);
        let [_7ca63121ca79] = _934bd4ea3ba6, _1746cd833377 = new _8104aa7a485d({
          url: _7ca63121ca79
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("audio", _1746cd833377), _1746cd833377.intercepted ? _1746cd833377.returnValue : new _1746cd833377.target(_1746cd833377.data.url);
      }, !0);
    }
    overrideHtml() {
      this.hookProperty(this.Element, "innerHTML", {
        get: (_8dbc10c2212d, _e88556ded714) => {
          let _934bd4ea3ba6 = new _8104aa7a485d({
            value: _8dbc10c2212d.call(_e88556ded714)
          }, _8dbc10c2212d, _e88556ded714);
          return this.emit("getInnerHTML", _934bd4ea3ba6), _934bd4ea3ba6.intercepted ? _934bd4ea3ba6.returnValue : _934bd4ea3ba6.data.value;
        },
        set: (_8dbc10c2212d, _e88556ded714, [_934bd4ea3ba6]) => {
          let _7ca63121ca79 = new _8104aa7a485d({
            value: _934bd4ea3ba6
          }, _8dbc10c2212d, _e88556ded714);
          if (this.emit("setInnerHTML", _7ca63121ca79), _7ca63121ca79.intercepted) return _7ca63121ca79.returnValue;
          _8dbc10c2212d.call(_e88556ded714, _7ca63121ca79.data.value);
        }
      }), this.hookProperty(this.Element, "outerHTML", {
        get: (_8dbc10c2212d, _e88556ded714) => {
          let _934bd4ea3ba6 = new _8104aa7a485d({
            value: _8dbc10c2212d.call(_e88556ded714)
          }, _8dbc10c2212d, _e88556ded714);
          return this.emit("getOuterHTML", _934bd4ea3ba6), _934bd4ea3ba6.intercepted ? _934bd4ea3ba6.returnValue : _934bd4ea3ba6.data.value;
        },
        set: (_8dbc10c2212d, _e88556ded714, [_934bd4ea3ba6]) => {
          let _7ca63121ca79 = new _8104aa7a485d({
            value: _934bd4ea3ba6
          }, _8dbc10c2212d, _e88556ded714);
          if (this.emit("setOuterHTML", _7ca63121ca79), _7ca63121ca79.intercepted) return _7ca63121ca79.returnValue;
          _8dbc10c2212d.call(_e88556ded714, _7ca63121ca79.data.value);
        }
      });
    }
    overrideInsertAdjacentHTML() {
      this.ctx.override(this.elemProto, "insertAdjacentHTML", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (2 > _934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79, _1746cd833377] = _934bd4ea3ba6, _3fd0e96eed52 = new _8104aa7a485d({
          position: _7ca63121ca79,
          html: _1746cd833377
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("insertAdjacentHTML", _3fd0e96eed52), _3fd0e96eed52.intercepted ? _3fd0e96eed52.returnValue : _3fd0e96eed52.target.call(_3fd0e96eed52.that, _3fd0e96eed52.data.position, _3fd0e96eed52.data.html);
      });
    }
    overrideInsertAdjacentText() {
      this.ctx.override(this.elemProto, "insertAdjacentText", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (2 > _934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79, _1746cd833377] = _934bd4ea3ba6, _3fd0e96eed52 = new _8104aa7a485d({
          position: _7ca63121ca79,
          text: _1746cd833377
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("insertAdjacentText", _3fd0e96eed52), _3fd0e96eed52.intercepted ? _3fd0e96eed52.returnValue : _3fd0e96eed52.target.call(_3fd0e96eed52.that, _3fd0e96eed52.data.position, _3fd0e96eed52.data.text);
      });
    }
    hookProperty(_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) {
      if (!_8dbc10c2212d) return !1;
      if (this.ctx.nativeMethods.isArray(_8dbc10c2212d)) {
        for (let _7ca63121ca79 of _8dbc10c2212d) this.hookProperty(_7ca63121ca79, _e88556ded714, _934bd4ea3ba6);
        return !0;
      }
      let _7ca63121ca79 = _8dbc10c2212d.prototype;
      return this.ctx.overrideDescriptor(_7ca63121ca79, _e88556ded714, _934bd4ea3ba6), 
      !0;
    }
  }, _55867d188621 = _0cc37b1cb67d;
  var _b76f1f08c4be = m(_f8c090733b39(), 1);
  var _3d0b95f70971 = class extends _b76f1f08c4be.default {
    constructor(_8dbc10c2212d) {
      super(), this.ctx = _8dbc10c2212d, this.window = _8dbc10c2212d.window, this.Node = _8dbc10c2212d.window.Node || {}, 
      this.nodeProto = this.Node.prototype || {}, this.compareDocumentPosition = this.nodeProto.compareDocumentPosition, 
      this.contains = this.nodeProto.contains, this.insertBefore = this.nodeProto.insertBefore, 
      this.replaceChild = this.nodeProto.replaceChild, this.append = this.nodeProto.append, 
      this.appendChild = this.nodeProto.appendChild, this.removeChild = this.nodeProto.removeChild, 
      this.textContent = _8dbc10c2212d.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "textContent"), 
      this.parentNode = _8dbc10c2212d.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "parentNode"), 
      this.parentElement = _8dbc10c2212d.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "parentElement"), 
      this.childNodes = _8dbc10c2212d.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "childNodes"), 
      this.baseURI = _8dbc10c2212d.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "baseURI"), 
      this.previousSibling = _8dbc10c2212d.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "previousSibling"), 
      this.ownerDocument = _8dbc10c2212d.nativeMethods.getOwnPropertyDescriptor(this.nodeProto, "ownerDocument");
    }
    overrideTextContent() {
      this.ctx.overrideDescriptor(this.nodeProto, "textContent", {
        get: (_8dbc10c2212d, _e88556ded714) => {
          let _934bd4ea3ba6 = new _8104aa7a485d({
            value: _8dbc10c2212d.call(_e88556ded714)
          }, _8dbc10c2212d, _e88556ded714);
          return this.emit("getTextContent", _934bd4ea3ba6), _934bd4ea3ba6.intercepted ? _934bd4ea3ba6.returnValue : _934bd4ea3ba6.data.value;
        },
        set: (_8dbc10c2212d, _e88556ded714, [_934bd4ea3ba6]) => {
          let _7ca63121ca79 = new _8104aa7a485d({
            value: _934bd4ea3ba6
          }, _8dbc10c2212d, _e88556ded714);
          if (this.emit("setTextContent", _7ca63121ca79), _7ca63121ca79.intercepted) return _7ca63121ca79.returnValue;
          _8dbc10c2212d.call(_e88556ded714, _7ca63121ca79.data.value);
        }
      });
    }
    overrideAppend() {
      this.ctx.override(this.nodeProto, "append", (_8dbc10c2212d, _e88556ded714, [..._934bd4ea3ba6]) => {
        let _7ca63121ca79 = new _8104aa7a485d({
          nodes: _934bd4ea3ba6
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("append", _7ca63121ca79), _7ca63121ca79.intercepted ? _7ca63121ca79.returnValue : _7ca63121ca79.target.call(_7ca63121ca79.that, _7ca63121ca79.data.nodes);
      }), this.ctx.override(this.nodeProto, "appendChild", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (!_934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79] = _934bd4ea3ba6, _1746cd833377 = new _8104aa7a485d({
          node: _7ca63121ca79
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("appendChild", _1746cd833377), _1746cd833377.intercepted ? _1746cd833377.returnValue : _1746cd833377.target.call(_1746cd833377.that, _1746cd833377.data.node);
      });
    }
    overrideBaseURI() {
      this.ctx.overrideDescriptor(this.nodeProto, "baseURI", {
        get: (_8dbc10c2212d, _e88556ded714) => {
          let _934bd4ea3ba6 = new _8104aa7a485d({
            value: _8dbc10c2212d.call(_e88556ded714)
          }, _8dbc10c2212d, _e88556ded714);
          return this.emit("baseURI", _934bd4ea3ba6), _934bd4ea3ba6.intercepted ? _934bd4ea3ba6.returnValue : _934bd4ea3ba6.data.value;
        }
      });
    }
    overrideParent() {
      this.ctx.overrideDescriptor(this.nodeProto, "parentNode", {
        get: (_8dbc10c2212d, _e88556ded714) => {
          let _934bd4ea3ba6 = new _8104aa7a485d({
            node: _8dbc10c2212d.call(_e88556ded714)
          }, _8dbc10c2212d, _e88556ded714);
          return this.emit("parentNode", _934bd4ea3ba6), _934bd4ea3ba6.intercepted ? _934bd4ea3ba6.returnValue : _934bd4ea3ba6.data.node;
        }
      }), this.ctx.overrideDescriptor(this.nodeProto, "parentElement", {
        get: (_8dbc10c2212d, _e88556ded714) => {
          let _934bd4ea3ba6 = new _8104aa7a485d({
            element: _8dbc10c2212d.call(_e88556ded714)
          }, _8dbc10c2212d, _e88556ded714);
          return this.emit("parentElement", _934bd4ea3ba6), _934bd4ea3ba6.intercepted ? _934bd4ea3ba6.returnValue : _934bd4ea3ba6.data.node;
        }
      });
    }
    overrideOwnerDocument() {
      this.ctx.overrideDescriptor(this.nodeProto, "ownerDocument", {
        get: (_8dbc10c2212d, _e88556ded714) => {
          let _934bd4ea3ba6 = new _8104aa7a485d({
            document: _8dbc10c2212d.call(_e88556ded714)
          }, _8dbc10c2212d, _e88556ded714);
          return this.emit("ownerDocument", _934bd4ea3ba6), _934bd4ea3ba6.intercepted ? _934bd4ea3ba6.returnValue : _934bd4ea3ba6.data.document;
        }
      });
    }
    overrideCompareDocumentPosit1ion() {
      this.ctx.override(this.nodeProto, "compareDocumentPosition", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (!_934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79] = _934bd4ea3ba6, _1746cd833377 = new _8104aa7a485d({
          node: _7ca63121ca79
        }, _8dbc10c2212d, _e88556ded714);
        return _1746cd833377.intercepted ? _1746cd833377.returnValue : _1746cd833377.target.call(_1746cd833377.that, _1746cd833377.data.node);
      });
    }
    overrideChildMethods() {
      this.ctx.override(this.nodeProto, "removeChild");
    }
  }, _9fc33e1de435 = _3d0b95f70971;
  var _83d86b99024a = m(_f8c090733b39(), 1);
  var _d5168b0c168f = class extends _83d86b99024a.default {
    constructor(_8dbc10c2212d) {
      super(), this.ctx = _8dbc10c2212d, this.window = _8dbc10c2212d.window, this.Attr = this.window.Attr || {}, 
      this.attrProto = this.Attr.prototype || {}, this.value = _8dbc10c2212d.nativeMethods.getOwnPropertyDescriptor(this.attrProto, "value"), 
      this.name = _8dbc10c2212d.nativeMethods.getOwnPropertyDescriptor(this.attrProto, "name"), 
      this.getNamedItem = this.attrProto.getNamedItem || null, this.setNamedItem = this.attrProto.setNamedItem || null, 
      this.removeNamedItem = this.attrProto.removeNamedItem || null, this.getNamedItemNS = this.attrProto.getNamedItemNS || null, 
      this.setNamedItemNS = this.attrProto.setNamedItemNS || null, this.removeNamedItemNS = this.attrProto.removeNamedItemNS || null, 
      this.item = this.attrProto.item || null;
    }
    overrideNameValue() {
      this.ctx.overrideDescriptor(this.attrProto, "name", {
        get: (_8dbc10c2212d, _e88556ded714) => {
          let _934bd4ea3ba6 = new _8104aa7a485d({
            value: _8dbc10c2212d.call(_e88556ded714)
          }, _8dbc10c2212d, _e88556ded714);
          return this.emit("name", _934bd4ea3ba6), _934bd4ea3ba6.intercepted ? _934bd4ea3ba6.returnValue : _934bd4ea3ba6.data.value;
        }
      }), this.ctx.overrideDescriptor(this.attrProto, "value", {
        get: (_8dbc10c2212d, _e88556ded714) => {
          let _934bd4ea3ba6 = new _8104aa7a485d({
            name: this.name.get.call(_e88556ded714),
            value: _8dbc10c2212d.call(_e88556ded714)
          }, _8dbc10c2212d, _e88556ded714);
          return this.emit("getValue", _934bd4ea3ba6), _934bd4ea3ba6.intercepted ? _934bd4ea3ba6.returnValue : _934bd4ea3ba6.data.value;
        },
        set: (_8dbc10c2212d, _e88556ded714, [_934bd4ea3ba6]) => {
          let _7ca63121ca79 = new _8104aa7a485d({
            name: this.name.get.call(_e88556ded714),
            value: _934bd4ea3ba6
          }, _8dbc10c2212d, _e88556ded714);
          if (this.emit("setValue", _7ca63121ca79), _7ca63121ca79.intercepted) return _7ca63121ca79.returnValue;
          _7ca63121ca79.target.call(_7ca63121ca79.that, _7ca63121ca79.data.value);
        }
      });
    }
    overrideItemMethods() {
      this.ctx.override(this.attrProto, "getNamedItem", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (!_934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79] = _934bd4ea3ba6, _1746cd833377 = new _8104aa7a485d({
          name: _7ca63121ca79
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("getNamedItem", _1746cd833377), _1746cd833377.intercepted ? _1746cd833377.returnValue : _1746cd833377.target.call(_1746cd833377.that, _1746cd833377.data.name);
      }), this.ctx.override(this.attrProto, "setNamedItem", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (2 > _934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79, _1746cd833377] = _934bd4ea3ba6, _3fd0e96eed52 = new _8104aa7a485d({
          name: _7ca63121ca79,
          value: _1746cd833377
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("setNamedItem", _3fd0e96eed52), _3fd0e96eed52.intercepted ? _3fd0e96eed52.returnValue : _3fd0e96eed52.target.call(_3fd0e96eed52.that, _3fd0e96eed52.data.name, _3fd0e96eed52.data.value);
      }), this.ctx.override(this.attrProto, "removeNamedItem", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (!_934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79] = _934bd4ea3ba6, _1746cd833377 = new _8104aa7a485d({
          name: _7ca63121ca79
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("removeNamedItem", _1746cd833377), _1746cd833377.intercepted ? _1746cd833377.returnValue : _1746cd833377.target.call(_1746cd833377.that, _1746cd833377.data.name);
      }), this.ctx.override(this.attrProto, "item", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (!_934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79] = _934bd4ea3ba6, _1746cd833377 = new _8104aa7a485d({
          index: _7ca63121ca79
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("item", _1746cd833377), _1746cd833377.intercepted ? _1746cd833377.returnValue : _1746cd833377.target.call(_1746cd833377.that, _1746cd833377.data.name);
      }), this.ctx.override(this.attrProto, "getNamedItemNS", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (2 > _934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79, _1746cd833377] = _934bd4ea3ba6, _3fd0e96eed52 = new _8104aa7a485d({
          namespace: _7ca63121ca79,
          localName: _1746cd833377
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("getNamedItemNS", _3fd0e96eed52), _3fd0e96eed52.intercepted ? _3fd0e96eed52.returnValue : _3fd0e96eed52.target.call(_3fd0e96eed52.that, _3fd0e96eed52.data.namespace, _3fd0e96eed52.data.localName);
      }), this.ctx.override(this.attrProto, "setNamedItemNS", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (!_934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79] = _934bd4ea3ba6, _1746cd833377 = new _8104aa7a485d({
          attr: _7ca63121ca79
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("setNamedItemNS", _1746cd833377), _1746cd833377.intercepted ? _1746cd833377.returnValue : _1746cd833377.target.call(_1746cd833377.that, _1746cd833377.data.name);
      }), this.ctx.override(this.attrProto, "removeNamedItemNS", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (2 > _934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79, _1746cd833377] = _934bd4ea3ba6, _3fd0e96eed52 = new _8104aa7a485d({
          namespace: _7ca63121ca79,
          localName: _1746cd833377
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("removeNamedItemNS", _3fd0e96eed52), _3fd0e96eed52.intercepted ? _3fd0e96eed52.returnValue : _3fd0e96eed52.target.call(_3fd0e96eed52.that, _3fd0e96eed52.data.namespace, _3fd0e96eed52.data.localName);
      });
    }
  }, _6464406879b2 = _d5168b0c168f;
  var _1f554a89ff07 = m(_f8c090733b39(), 1);
  var _2dc3d3912e6f = class extends _1f554a89ff07.default {
    constructor(_8dbc10c2212d) {
      super(), this.ctx = _8dbc10c2212d, this.window = _8dbc10c2212d.window, this.Function = this.window.Function, 
      this.fnProto = this.Function.prototype, this.toString = this.fnProto.toString, this.fnStrings = _8dbc10c2212d.fnStrings, 
      this.call = this.fnProto.call, this.apply = this.fnProto.apply, this.bind = this.fnProto.bind;
    }
    overrideFunction() {
      this.ctx.override(this.window, "Function", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (!_934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let _7ca63121ca79 = _934bd4ea3ba6[_934bd4ea3ba6.length - 1], _1746cd833377 = [];
        for (let _8dbc10c2212d = 0; _8dbc10c2212d < _934bd4ea3ba6.length - 1; _8dbc10c2212d++) _1746cd833377.push(_934bd4ea3ba6[_8dbc10c2212d]);
        let _3fd0e96eed52 = new _8104aa7a485d({
          script: _7ca63121ca79,
          args: _1746cd833377
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("function", _3fd0e96eed52), _3fd0e96eed52.intercepted ? _3fd0e96eed52.returnValue : _3fd0e96eed52.target.call(_3fd0e96eed52.that, ..._3fd0e96eed52.data.args, _3fd0e96eed52.data.script);
      }, !0);
    }
    overrideToString() {
      this.ctx.override(this.fnProto, "toString", (_8dbc10c2212d, _e88556ded714) => {
        let _934bd4ea3ba6 = new _8104aa7a485d({
          fn: _e88556ded714
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("toString", _934bd4ea3ba6), _934bd4ea3ba6.intercepted ? _934bd4ea3ba6.returnValue : _934bd4ea3ba6.target.call(_934bd4ea3ba6.data.fn);
      });
    }
  }, _919631e57e2d = _2dc3d3912e6f;
  var _ee855375922d = m(_f8c090733b39(), 1);
  var _c2cc83abbb9a = class extends _ee855375922d.default {
    constructor(_8dbc10c2212d) {
      super(), this.ctx = _8dbc10c2212d, this.window = _8dbc10c2212d.window, this.Object = this.window.Object, 
      this.getOwnPropertyDescriptors = this.Object.getOwnPropertyDescriptors, this.getOwnPropertyDescriptor = this.Object.getOwnPropertyDescriptor, 
      this.getOwnPropertyNames = this.Object.getOwnPropertyNames;
    }
    overrideGetPropertyNames() {
      this.ctx.override(this.Object, "getOwnPropertyNames", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (!_934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79] = _934bd4ea3ba6, _1746cd833377 = new _8104aa7a485d({
          names: _8dbc10c2212d.call(_e88556ded714, _7ca63121ca79)
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("getOwnPropertyNames", _1746cd833377), _1746cd833377.intercepted ? _1746cd833377.returnValue : _1746cd833377.data.names;
      });
    }
    overrideGetOwnPropertyDescriptors() {
      this.ctx.override(this.Object, "getOwnPropertyDescriptors", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (!_934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79] = _934bd4ea3ba6, _1746cd833377 = new _8104aa7a485d({
          descriptors: _8dbc10c2212d.call(_e88556ded714, _7ca63121ca79)
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("getOwnPropertyDescriptors", _1746cd833377), _1746cd833377.intercepted ? _1746cd833377.returnValue : _1746cd833377.data.descriptors;
      });
    }
  }, _9f1ad8fd82a2 = _c2cc83abbb9a;
  var _f50d7c0ddb5e = m(_f8c090733b39(), 1);
  var _1434e1bce953 = class extends _f50d7c0ddb5e.default {
    constructor(_8dbc10c2212d) {
      super(), this.ctx = _8dbc10c2212d, this.window = _8dbc10c2212d.window, this.fetch = this.window.fetch, 
      this.Request = this.window.Request, this.Response = this.window.Response, this.Headers = this.window.Headers, 
      this.reqProto = this.Request ? this.Request.prototype : {}, this.resProto = this.Response ? this.Response.prototype : {}, 
      this.headersProto = this.Headers ? this.Headers.prototype : {}, this.reqUrl = _8dbc10c2212d.nativeMethods.getOwnPropertyDescriptor(this.reqProto, "url"), 
      this.resUrl = _8dbc10c2212d.nativeMethods.getOwnPropertyDescriptor(this.resProto, "url"), 
      this.reqHeaders = _8dbc10c2212d.nativeMethods.getOwnPropertyDescriptor(this.reqProto, "headers"), 
      this.resHeaders = _8dbc10c2212d.nativeMethods.getOwnPropertyDescriptor(this.resProto, "headers");
    }
    override() {
      return this.overrideRequest(), this.overrideUrl(), this.overrideHeaders(), !0;
    }
    overrideRequest() {
      return this.fetch ? (this.ctx.override(this.window, "fetch", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (!_934bd4ea3ba6.length || _934bd4ea3ba6[0] instanceof this.Request) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79, _1746cd833377 = {}] = _934bd4ea3ba6, _3fd0e96eed52 = new _8104aa7a485d({
          input: _7ca63121ca79,
          options: _1746cd833377
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("request", _3fd0e96eed52), _3fd0e96eed52.intercepted ? _3fd0e96eed52.returnValue : _3fd0e96eed52.target.call(_3fd0e96eed52.that, _3fd0e96eed52.data.input, _3fd0e96eed52.data.options);
      }), this.ctx.override(this.window, "Request", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (!_934bd4ea3ba6.length) return new _8dbc10c2212d(..._934bd4ea3ba6);
        let [_7ca63121ca79, _1746cd833377 = {}] = _934bd4ea3ba6, _3fd0e96eed52 = new _8104aa7a485d({
          input: _7ca63121ca79,
          options: _1746cd833377
        }, _8dbc10c2212d);
        return this.emit("request", _3fd0e96eed52), _3fd0e96eed52.intercepted ? _3fd0e96eed52.returnValue : new _3fd0e96eed52.target(_3fd0e96eed52.data.input, _3fd0e96eed52.data.options);
      }, !0), !0) : !1;
    }
    overrideUrl() {
      return this.ctx.overrideDescriptor(this.reqProto, "url", {
        get: (_8dbc10c2212d, _e88556ded714) => {
          let _934bd4ea3ba6 = new _8104aa7a485d({
            value: _8dbc10c2212d.call(_e88556ded714)
          }, _8dbc10c2212d, _e88556ded714);
          return this.emit("requestUrl", _934bd4ea3ba6), _934bd4ea3ba6.intercepted ? _934bd4ea3ba6.returnValue : _934bd4ea3ba6.data.value;
        }
      }), this.ctx.overrideDescriptor(this.resProto, "url", {
        get: (_8dbc10c2212d, _e88556ded714) => {
          let _934bd4ea3ba6 = new _8104aa7a485d({
            value: _8dbc10c2212d.call(_e88556ded714)
          }, _8dbc10c2212d, _e88556ded714);
          return this.emit("responseUrl", _934bd4ea3ba6), _934bd4ea3ba6.intercepted ? _934bd4ea3ba6.returnValue : _934bd4ea3ba6.data.value;
        }
      }), !0;
    }
    overrideHeaders() {
      return this.Headers ? (this.ctx.overrideDescriptor(this.reqProto, "headers", {
        get: (_8dbc10c2212d, _e88556ded714) => {
          let _934bd4ea3ba6 = new _8104aa7a485d({
            value: _8dbc10c2212d.call(_e88556ded714)
          }, _8dbc10c2212d, _e88556ded714);
          return this.emit("requestHeaders", _934bd4ea3ba6), _934bd4ea3ba6.intercepted ? _934bd4ea3ba6.returnValue : _934bd4ea3ba6.data.value;
        }
      }), this.ctx.overrideDescriptor(this.resProto, "headers", {
        get: (_8dbc10c2212d, _e88556ded714) => {
          let _934bd4ea3ba6 = new _8104aa7a485d({
            value: _8dbc10c2212d.call(_e88556ded714)
          }, _8dbc10c2212d, _e88556ded714);
          return this.emit("responseHeaders", _934bd4ea3ba6), _934bd4ea3ba6.intercepted ? _934bd4ea3ba6.returnValue : _934bd4ea3ba6.data.value;
        }
      }), this.ctx.override(this.headersProto, "get", (_8dbc10c2212d, _e88556ded714, [_934bd4ea3ba6]) => {
        if (!_934bd4ea3ba6) return _8dbc10c2212d.call(_e88556ded714);
        let _7ca63121ca79 = new _8104aa7a485d({
          name: _934bd4ea3ba6,
          value: _8dbc10c2212d.call(_e88556ded714, _934bd4ea3ba6)
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("getHeader", _7ca63121ca79), _7ca63121ca79.intercepted ? _7ca63121ca79.returnValue : _7ca63121ca79.data.value;
      }), this.ctx.override(this.headersProto, "set", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (2 > _934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79, _1746cd833377] = _934bd4ea3ba6, _3fd0e96eed52 = new _8104aa7a485d({
          name: _7ca63121ca79,
          value: _1746cd833377
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("setHeader", _3fd0e96eed52), _3fd0e96eed52.intercepted ? _3fd0e96eed52.returnValue : _3fd0e96eed52.target.call(_3fd0e96eed52.that, _3fd0e96eed52.data.name, _3fd0e96eed52.data.value);
      }), this.ctx.override(this.headersProto, "has", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (!_934bd4ea3ba6.length) return _8dbc10c2212d.call(_e88556ded714);
        let [_7ca63121ca79] = _934bd4ea3ba6, _1746cd833377 = new _8104aa7a485d({
          name: _7ca63121ca79,
          value: _8dbc10c2212d.call(_e88556ded714, _7ca63121ca79)
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("hasHeader", _1746cd833377), _1746cd833377.intercepted ? _1746cd833377.returnValue : _1746cd833377.data;
      }), this.ctx.override(this.headersProto, "append", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (2 > _934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79, _1746cd833377] = _934bd4ea3ba6, _3fd0e96eed52 = new _8104aa7a485d({
          name: _7ca63121ca79,
          value: _1746cd833377
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("appendHeader", _3fd0e96eed52), _3fd0e96eed52.intercepted ? _3fd0e96eed52.returnValue : _3fd0e96eed52.target.call(_3fd0e96eed52.that, _3fd0e96eed52.data.name, _3fd0e96eed52.data.value);
      }), this.ctx.override(this.headersProto, "delete", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (!_934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79] = _934bd4ea3ba6, _1746cd833377 = new _8104aa7a485d({
          name: _7ca63121ca79
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("deleteHeader", _1746cd833377), _1746cd833377.intercepted ? _1746cd833377.returnValue : _1746cd833377.target.call(_1746cd833377.that, _1746cd833377.data.name);
      }), !0) : !1;
    }
  }, _9199f8b1cdf1 = _1434e1bce953;
  var _382e364e991e = m(_f8c090733b39(), 1);
  var _161e1c71aa63 = class extends _382e364e991e.default {
    constructor(_8dbc10c2212d) {
      super(), this.ctx = _8dbc10c2212d, this.window = _8dbc10c2212d.window, this.XMLHttpRequest = this.window.XMLHttpRequest, 
      this.xhrProto = this.window.XMLHttpRequest ? this.window.XMLHttpRequest.prototype : {}, 
      this.open = this.xhrProto.open, this.abort = this.xhrProto.abort, this.send = this.xhrProto.send, 
      this.overrideMimeType = this.xhrProto.overrideMimeType, this.getAllResponseHeaders = this.xhrProto.getAllResponseHeaders, 
      this.getResponseHeader = this.xhrProto.getResponseHeader, this.setRequestHeader = this.xhrProto.setRequestHeader, 
      this.responseURL = _8dbc10c2212d.nativeMethods.getOwnPropertyDescriptor(this.xhrProto, "responseURL"), 
      this.responseText = _8dbc10c2212d.nativeMethods.getOwnPropertyDescriptor(this.xhrProto, "responseText");
    }
    override() {
      this.overrideOpen(), this.overrideSend(), this.overrideMimeType(), this.overrideGetResHeader(), 
      this.overrideGetResHeaders(), this.overrideSetReqHeader();
    }
    overrideOpen() {
      this.ctx.override(this.xhrProto, "open", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (2 > _934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79, _1746cd833377, _3fd0e96eed52 = !0, _f8c090733b39 = null, _4768674375f7 = null] = _934bd4ea3ba6, _1469c53360cc = new _8104aa7a485d({
          method: _7ca63121ca79,
          input: _1746cd833377,
          async: _3fd0e96eed52,
          user: _f8c090733b39,
          password: _4768674375f7
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("open", _1469c53360cc), _1469c53360cc.intercepted ? _1469c53360cc.returnValue : _1469c53360cc.target.call(_1469c53360cc.that, _1469c53360cc.data.method, _1469c53360cc.data.input, _1469c53360cc.data.async, _1469c53360cc.data.user, _1469c53360cc.data.password);
      });
    }
    overrideResponseUrl() {
      this.ctx.overrideDescriptor(this.xhrProto, "responseURL", {
        get: (_8dbc10c2212d, _e88556ded714) => {
          let _934bd4ea3ba6 = new _8104aa7a485d({
            value: _8dbc10c2212d.call(_e88556ded714)
          }, _8dbc10c2212d, _e88556ded714);
          return this.emit("responseUrl", _934bd4ea3ba6), _934bd4ea3ba6.intercepted ? _934bd4ea3ba6.returnValue : _934bd4ea3ba6.data.value;
        }
      });
    }
    overrideSend() {
      this.ctx.override(this.xhrProto, "send", (_8dbc10c2212d, _e88556ded714, [_934bd4ea3ba6 = null]) => {
        let _7ca63121ca79 = new _8104aa7a485d({
          body: _934bd4ea3ba6
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("send", _7ca63121ca79), _7ca63121ca79.intercepted ? _7ca63121ca79.returnValue : _7ca63121ca79.target.call(_7ca63121ca79.that, _7ca63121ca79.data.body);
      });
    }
    overrideSetReqHeader() {
      this.ctx.override(this.xhrProto, "setRequestHeader", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (2 > _934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79, _1746cd833377] = _934bd4ea3ba6, _3fd0e96eed52 = new _8104aa7a485d({
          name: _7ca63121ca79,
          value: _1746cd833377
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("setReqHeader", _3fd0e96eed52), _3fd0e96eed52.intercepted ? _3fd0e96eed52.returnValue : _3fd0e96eed52.target.call(_3fd0e96eed52.that, _3fd0e96eed52.data.name, _3fd0e96eed52.data.value);
      });
    }
    overrideGetResHeaders() {
      this.ctx.override(this.xhrProto, "getAllResponseHeaders", (_8dbc10c2212d, _e88556ded714) => {
        let _934bd4ea3ba6 = new _8104aa7a485d({
          value: _8dbc10c2212d.call(_e88556ded714)
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("getAllResponseHeaders", _934bd4ea3ba6), _934bd4ea3ba6.intercepted ? _934bd4ea3ba6.returnValue : _934bd4ea3ba6.data.value;
      });
    }
    overrideGetResHeader() {
      this.ctx.override(this.xhrProto, "getResponseHeader", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (!_934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79] = _934bd4ea3ba6, _1746cd833377 = new _8104aa7a485d({
          name: _7ca63121ca79,
          value: _8dbc10c2212d.call(_e88556ded714, _7ca63121ca79)
        }, _8dbc10c2212d, _e88556ded714);
        return _1746cd833377.intercepted ? _1746cd833377.returnValue : _1746cd833377.data.value;
      });
    }
  }, _51ab6e96d929 = _161e1c71aa63;
  var _726c61735d31 = m(_f8c090733b39(), 1);
  var _968907aa5ee0 = class extends _726c61735d31.default {
    constructor(_8dbc10c2212d) {
      super(), this.ctx = _8dbc10c2212d, this.window = _8dbc10c2212d.window, this.EventSource = this.window.EventSource || {}, 
      this.esProto = this.EventSource.prototype || {}, this.url = _8dbc10c2212d.nativeMethods.getOwnPropertyDescriptor(this.esProto, "url"), 
      this.CONNECTING = 0, this.OPEN = 1, this.CLOSED = 2;
    }
    overrideConstruct() {
      this.ctx.override(this.window, "EventSource", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (!_934bd4ea3ba6.length) return new _8dbc10c2212d(..._934bd4ea3ba6);
        let [_7ca63121ca79, _1746cd833377 = {}] = _934bd4ea3ba6, _3fd0e96eed52 = new _8104aa7a485d({
          url: _7ca63121ca79,
          config: _1746cd833377
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("construct", _3fd0e96eed52), _3fd0e96eed52.intercepted ? _3fd0e96eed52.returnValue : new _3fd0e96eed52.target(_3fd0e96eed52.data.url, _3fd0e96eed52.data.config);
      }, !0), "EventSource" in this.window && (this.window.EventSource.CONNECTING = this.CONNECTING, 
      this.window.EventSource.OPEN = this.OPEN, this.window.EventSource.CLOSED = this.CLOSED);
    }
    overrideUrl() {
      this.ctx.overrideDescriptor(this.esProto, "url", {
        get: (_8dbc10c2212d, _e88556ded714) => {
          let _934bd4ea3ba6 = new _8104aa7a485d({
            value: _8dbc10c2212d.call(_e88556ded714)
          }, _8dbc10c2212d, _e88556ded714);
          return this.emit("url", _934bd4ea3ba6), _934bd4ea3ba6.data.value;
        }
      });
    }
  }, _0d6429362bbd = _968907aa5ee0;
  var _e419c6db50b0 = m(_f8c090733b39(), 1);
  var _2e1b5d6f3911 = class extends _e419c6db50b0.default {
    constructor(_8dbc10c2212d) {
      super(), this.ctx = _8dbc10c2212d, this.window = this.ctx.window, this.History = this.window.History, 
      this.history = this.window.history, this.historyProto = this.History ? this.History.prototype : {}, 
      this.pushState = this.historyProto.pushState, this.replaceState = this.historyProto.replaceState, 
      this.go = this.historyProto.go, this.back = this.historyProto.back, this.forward = this.historyProto.forward;
    }
    override() {
      this.overridePushState(), this.overrideReplaceState(), this.overrideGo(), this.overrideForward(), 
      this.overrideBack();
    }
    overridePushState() {
      this.ctx.override(this.historyProto, "pushState", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (2 > _934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79, _1746cd833377, _3fd0e96eed52 = ""] = _934bd4ea3ba6, _f8c090733b39 = new _8104aa7a485d({
          state: _7ca63121ca79,
          title: _1746cd833377,
          url: _3fd0e96eed52
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("pushState", _f8c090733b39), _f8c090733b39.intercepted ? _f8c090733b39.returnValue : _f8c090733b39.target.call(_f8c090733b39.that, _f8c090733b39.data.state, _f8c090733b39.data.title, _f8c090733b39.data.url);
      });
    }
    overrideReplaceState() {
      this.ctx.override(this.historyProto, "replaceState", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (2 > _934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79, _1746cd833377, _3fd0e96eed52 = ""] = _934bd4ea3ba6, _f8c090733b39 = new _8104aa7a485d({
          state: _7ca63121ca79,
          title: _1746cd833377,
          url: _3fd0e96eed52
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("replaceState", _f8c090733b39), _f8c090733b39.intercepted ? _f8c090733b39.returnValue : _f8c090733b39.target.call(_f8c090733b39.that, _f8c090733b39.data.state, _f8c090733b39.data.title, _f8c090733b39.data.url);
      });
    }
    overrideGo() {
      this.ctx.override(this.historyProto, "go", (_8dbc10c2212d, _e88556ded714, [_934bd4ea3ba6]) => {
        let _7ca63121ca79 = new _8104aa7a485d({
          delta: _934bd4ea3ba6
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("go", _7ca63121ca79), _7ca63121ca79.intercepted ? _7ca63121ca79.returnValue : _7ca63121ca79.target.call(_7ca63121ca79.that, _7ca63121ca79.data.delta);
      });
    }
    overrideForward() {
      this.ctx.override(this.historyProto, "forward", (_8dbc10c2212d, _e88556ded714) => {
        let _934bd4ea3ba6 = new _8104aa7a485d(null, _8dbc10c2212d, _e88556ded714);
        return this.emit("forward", _934bd4ea3ba6), _934bd4ea3ba6.intercepted ? _934bd4ea3ba6.returnValue : _934bd4ea3ba6.target.call(_934bd4ea3ba6.that);
      });
    }
    overrideBack() {
      this.ctx.override(this.historyProto, "back", (_8dbc10c2212d, _e88556ded714) => {
        let _934bd4ea3ba6 = new _8104aa7a485d(null, _8dbc10c2212d, _e88556ded714);
        return this.emit("back", _934bd4ea3ba6), _934bd4ea3ba6.intercepted ? _934bd4ea3ba6.returnValue : _934bd4ea3ba6.target.call(_934bd4ea3ba6.that);
      });
    }
  }, _4d7f1ab163cc = _2e1b5d6f3911;
  var _71485af01c08 = m(_f8c090733b39(), 1), _9e872effc9c1 = class extends _71485af01c08.default {
    constructor(_8dbc10c2212d) {
      super(), this.ctx = _8dbc10c2212d, this.window = _8dbc10c2212d.window, this.location = this.window.location, 
      this.WorkerLocation = this.ctx.worker ? this.window.WorkerLocation : null, this.workerLocProto = this.WorkerLocation ? this.WorkerLocation.prototype : {}, 
      this.keys = [ "href", "protocol", "host", "hostname", "port", "pathname", "search", "hash", "origin" ], 
      this.HashChangeEvent = this.window.HashChangeEvent || null, this.href = this.WorkerLocation ? _8dbc10c2212d.nativeMethods.getOwnPropertyDescriptor(this.workerLocProto, "href") : _8dbc10c2212d.nativeMethods.getOwnPropertyDescriptor(this.location, "href");
    }
    overrideWorkerLocation(_8dbc10c2212d) {
      if (!this.WorkerLocation) return !1;
      let _e88556ded714 = this;
      for (let _934bd4ea3ba6 of this.keys) this.ctx.overrideDescriptor(this.workerLocProto, _934bd4ea3ba6, {
        get: () => _8dbc10c2212d(_e88556ded714.href.get.call(this.location))[_934bd4ea3ba6]
      });
      return !0;
    }
    emulate(_8dbc10c2212d, _e88556ded714) {
      let _934bd4ea3ba6 = {}, _7ca63121ca79 = this;
      for (let _1746cd833377 of _7ca63121ca79.keys) this.ctx.nativeMethods.defineProperty(_934bd4ea3ba6, _1746cd833377, {
        get() {
          return _8dbc10c2212d(_7ca63121ca79.href.get.call(_7ca63121ca79.location))[_1746cd833377];
        },
        set: _1746cd833377 !== "origin" ? function(_8dbc10c2212d) {
          switch (_1746cd833377) {
           case "href":
            _7ca63121ca79.location.href = _e88556ded714(_8dbc10c2212d);
            break;

           case "hash":
            _7ca63121ca79.emit("hashchange", _934bd4ea3ba6.href, _8dbc10c2212d.trim().startsWith("#") ? new URL(_8dbc10c2212d.trim(), _934bd4ea3ba6.href).href : new URL("#" + _8dbc10c2212d.trim(), _934bd4ea3ba6.href).href, _7ca63121ca79);
            break;

           default:
            {
              let _3fd0e96eed52 = new URL(_934bd4ea3ba6.href);
              _3fd0e96eed52[_1746cd833377] = _8dbc10c2212d, _7ca63121ca79.location.href = _e88556ded714(_3fd0e96eed52.href);
            }
            break;
          }
        } : void 0,
        configurable: !1,
        enumerable: !0
      });
      return "reload" in this.location && this.ctx.nativeMethods.defineProperty(_934bd4ea3ba6, "reload", {
        value: this.ctx.wrap(this.location, "reload", (_8dbc10c2212d, _e88556ded714) => _8dbc10c2212d.call(_e88556ded714 === _934bd4ea3ba6 ? this.location : _e88556ded714)),
        writable: !1,
        enumerable: !0
      }), "replace" in this.location && this.ctx.nativeMethods.defineProperty(_934bd4ea3ba6, "replace", {
        value: this.ctx.wrap(this.location, "assign", (_8dbc10c2212d, _7ca63121ca79, _1746cd833377) => {
          (!_1746cd833377.length || _7ca63121ca79 !== _934bd4ea3ba6) && _8dbc10c2212d.call(_7ca63121ca79), 
          _7ca63121ca79 = this.location;
          let [_3fd0e96eed52] = _1746cd833377, _f8c090733b39 = new URL(_3fd0e96eed52, _934bd4ea3ba6.href);
          return _8dbc10c2212d.call(_7ca63121ca79 === _934bd4ea3ba6 ? this.location : _7ca63121ca79, _e88556ded714(_f8c090733b39.href));
        }),
        writable: !1,
        enumerable: !0
      }), "assign" in this.location && this.ctx.nativeMethods.defineProperty(_934bd4ea3ba6, "assign", {
        value: this.ctx.wrap(this.location, "assign", (_8dbc10c2212d, _7ca63121ca79, _1746cd833377) => {
          (!_1746cd833377.length || _7ca63121ca79 !== _934bd4ea3ba6) && _8dbc10c2212d.call(_7ca63121ca79), 
          _7ca63121ca79 = this.location;
          let [_3fd0e96eed52] = _1746cd833377, _f8c090733b39 = new URL(_3fd0e96eed52, _934bd4ea3ba6.href);
          return _8dbc10c2212d.call(_7ca63121ca79 === _934bd4ea3ba6 ? this.location : _7ca63121ca79, _e88556ded714(_f8c090733b39.href));
        }),
        writable: !1,
        enumerable: !0
      }), "ancestorOrigins" in this.location && this.ctx.nativeMethods.defineProperty(_934bd4ea3ba6, "ancestorOrigins", {
        get() {
          let _8dbc10c2212d = [];
          return _7ca63121ca79.window.DOMStringList && _7ca63121ca79.ctx.nativeMethods.setPrototypeOf(_8dbc10c2212d, _7ca63121ca79.window.DOMStringList.prototype), 
          _8dbc10c2212d;
        },
        set: void 0,
        enumerable: !0
      }), this.ctx.nativeMethods.defineProperty(_934bd4ea3ba6, "toString", {
        value: this.ctx.wrap(this.location, "toString", () => _934bd4ea3ba6.href),
        enumerable: !0,
        writable: !1
      }), this.ctx.nativeMethods.defineProperty(_934bd4ea3ba6, Symbol.toPrimitive, {
        value: () => _934bd4ea3ba6.href,
        writable: !1,
        enumerable: !1
      }), this.ctx.window.Location && this.ctx.nativeMethods.setPrototypeOf(_934bd4ea3ba6, this.ctx.window.Location.prototype), 
      _934bd4ea3ba6;
    }
  }, _31de2cc223f7 = _9e872effc9c1;
  var _e42e9748ac2a = m(_f8c090733b39(), 1);
  var _e9fc44ab549c = class extends _e42e9748ac2a.default {
    constructor(_8dbc10c2212d) {
      super(), this.ctx = _8dbc10c2212d, this.window = this.ctx.window, this.postMessage = this.window.postMessage, 
      this.MessageEvent = this.window.MessageEvent || {}, this.MessagePort = this.window.MessagePort || {}, 
      this.mpProto = this.MessagePort.prototype || {}, this.mpPostMessage = this.mpProto.postMessage, 
      this.messageProto = this.MessageEvent.prototype || {}, this.messageData = _8dbc10c2212d.nativeMethods.getOwnPropertyDescriptor(this.messageProto, "data"), 
      this.messageOrigin = _8dbc10c2212d.nativeMethods.getOwnPropertyDescriptor(this.messageProto, "origin");
    }
    overridePostMessage() {
      this.ctx.override(this.window, "postMessage", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (!_934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let _7ca63121ca79, _1746cd833377, _3fd0e96eed52;
        this.ctx.worker ? [_7ca63121ca79, _3fd0e96eed52 = []] = _934bd4ea3ba6 : [_7ca63121ca79, _1746cd833377, _3fd0e96eed52 = []] = _934bd4ea3ba6;
        let _f8c090733b39 = new _8104aa7a485d({
          message: _7ca63121ca79,
          origin: _1746cd833377,
          transfer: _3fd0e96eed52,
          worker: this.ctx.worker
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("postMessage", _f8c090733b39), _f8c090733b39.intercepted ? _f8c090733b39.returnValue : this.ctx.worker ? _f8c090733b39.target.call(_f8c090733b39.that, _f8c090733b39.data.message, _f8c090733b39.data.transfer) : _f8c090733b39.target.call(_f8c090733b39.that, _f8c090733b39.data.message, _f8c090733b39.data.origin, _f8c090733b39.data.transfer);
      });
    }
    wrapPostMessage(_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6 = !1) {
      return this.ctx.wrap(_8dbc10c2212d, _e88556ded714, (_e88556ded714, _7ca63121ca79, _1746cd833377) => {
        if (this.ctx.worker ? !_1746cd833377.length : 2 > _1746cd833377) return _e88556ded714.apply(_7ca63121ca79, _1746cd833377);
        let _3fd0e96eed52, _f8c090733b39, _4768674375f7;
        _934bd4ea3ba6 ? ([_3fd0e96eed52, _4768674375f7 = []] = _1746cd833377, _f8c090733b39 = null) : [_3fd0e96eed52, _f8c090733b39, _4768674375f7 = []] = _1746cd833377;
        let _1469c53360cc = new _8104aa7a485d({
          message: _3fd0e96eed52,
          origin: _f8c090733b39,
          transfer: _4768674375f7,
          worker: this.ctx.worker
        }, _e88556ded714, _8dbc10c2212d);
        return this.emit("postMessage", _1469c53360cc), _1469c53360cc.intercepted ? _1469c53360cc.returnValue : _934bd4ea3ba6 ? _1469c53360cc.target.call(_1469c53360cc.that, _1469c53360cc.data.message, _1469c53360cc.data.transfer) : _1469c53360cc.target.call(_1469c53360cc.that, _1469c53360cc.data.message, _1469c53360cc.data.origin, _1469c53360cc.data.transfer);
      });
    }
    overrideMessageOrigin() {
      this.ctx.overrideDescriptor(this.messageProto, "origin", {
        get: (_8dbc10c2212d, _e88556ded714) => {
          let _934bd4ea3ba6 = new _8104aa7a485d({
            value: _8dbc10c2212d.call(_e88556ded714)
          }, _8dbc10c2212d, _e88556ded714);
          return this.emit("origin", _934bd4ea3ba6), _934bd4ea3ba6.intercepted ? _934bd4ea3ba6.returnValue : _934bd4ea3ba6.data.value;
        }
      });
    }
    overrideMessageData() {
      this.ctx.overrideDescriptor(this.messageProto, "data", {
        get: (_8dbc10c2212d, _e88556ded714) => {
          let _934bd4ea3ba6 = new _8104aa7a485d({
            value: _8dbc10c2212d.call(_e88556ded714)
          }, _8dbc10c2212d, _e88556ded714);
          return this.emit("data", _934bd4ea3ba6), _934bd4ea3ba6.intercepted ? _934bd4ea3ba6.returnValue : _934bd4ea3ba6.data.value;
        }
      });
    }
  }, _7a69bbcf31cf = _e9fc44ab549c;
  var _90e60baa6173 = m(_f8c090733b39(), 1);
  var _a9f5227db3e1 = class extends _90e60baa6173.default {
    constructor(_8dbc10c2212d) {
      super(), this.ctx = _8dbc10c2212d, this.window = _8dbc10c2212d.window, this.navigator = this.window.navigator, 
      this.Navigator = this.window.Navigator || {}, this.navProto = this.Navigator.prototype || {}, 
      this.sendBeacon = this.navProto.sendBeacon;
    }
    overrideSendBeacon() {
      this.ctx.override(this.navProto, "sendBeacon", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (!_934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79, _1746cd833377 = ""] = _934bd4ea3ba6, _3fd0e96eed52 = new _8104aa7a485d({
          url: _7ca63121ca79,
          data: _1746cd833377
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("sendBeacon", _3fd0e96eed52), _3fd0e96eed52.intercepted ? _3fd0e96eed52.returnValue : _3fd0e96eed52.target.call(_3fd0e96eed52.that, _3fd0e96eed52.data.url, _3fd0e96eed52.data.data);
      });
    }
  }, _050b56e8c969 = _a9f5227db3e1;
  var _e4ce546c8c59 = m(_f8c090733b39(), 1);
  var _3ead1a87b8fa = globalThis.fetch, _d84b8feb8540 = globalThis.SharedWorker, _9c19915e3090 = globalThis.localStorage, _e6cd4affdd4b = globalThis.navigator.serviceWorker, _f1a1133d8879 = MessagePort.prototype.postMessage, _044df35ae55c = {
    prototype: {
      send: WebSocket.prototype.send
    },
    CLOSED: WebSocket.CLOSED,
    CLOSING: WebSocket.CLOSING,
    CONNECTING: WebSocket.CONNECTING,
    OPEN: WebSocket.OPEN
  };
  async function W() {
    let _8dbc10c2212d = (await self.clients.matchAll({
      type: "window",
      includeUncontrolled: !0
    })).map(async _8dbc10c2212d => {
      let _e88556ded714 = await function(_8dbc10c2212d) {
        let _e88556ded714 = new MessageChannel;
        return new Promise(_934bd4ea3ba6 => {
          _8dbc10c2212d.postMessage({
            type: "getPort",
            port: _e88556ded714.port2
          }, [ _e88556ded714.port2 ]), _e88556ded714.port1.onmessage = _8dbc10c2212d => {
            _934bd4ea3ba6(_8dbc10c2212d.data);
          };
        });
      }(_8dbc10c2212d);
      return await Ie(_e88556ded714), _e88556ded714;
    }), _e88556ded714 = Promise.race([ Promise.any(_8dbc10c2212d), new Promise((_8dbc10c2212d, _e88556ded714) => setTimeout(_e88556ded714, 1e3, new TypeError("timeout"))) ]);
    try {
      return await _e88556ded714;
    } catch (_8dbc10c2212d) {
      if (_8dbc10c2212d instanceof AggregateError) throw console.error("bare-mux: failed to get a bare-mux SharedWorker MessagePort as all clients returned an invalid MessagePort."), 
      new Error("All clients returned an invalid MessagePort.");
      return console.warn("bare-mux: failed to get a bare-mux SharedWorker MessagePort within 1s, retrying"), 
      await W();
    }
  }
  function Ie(_8dbc10c2212d) {
    let _e88556ded714 = new MessageChannel, _934bd4ea3ba6 = new Promise((_8dbc10c2212d, _934bd4ea3ba6) => {
      _e88556ded714.port1.onmessage = _e88556ded714 => {
        _e88556ded714.data.type === "pong" && _8dbc10c2212d();
      }, setTimeout(_934bd4ea3ba6, 1500);
    });
    return _f1a1133d8879.call(_8dbc10c2212d, {
      message: {
        type: "ping"
      },
      port: _e88556ded714.port2
    }, [ _e88556ded714.port2 ]), _934bd4ea3ba6;
  }
  function Ve(_8dbc10c2212d, _e88556ded714) {
    let _934bd4ea3ba6 = new _d84b8feb8540(_8dbc10c2212d, "ridgewood-stem-worker");
    return _e88556ded714 && _e6cd4affdd4b.addEventListener("message", _e88556ded714 => {
      if (_e88556ded714.data.type === "getPort" && _e88556ded714.data.port) {
        console.debug("bare-mux: recieved request for port from sw");
        let _934bd4ea3ba6 = new _d84b8feb8540(_8dbc10c2212d, "ridgewood-stem-worker");
        _f1a1133d8879.call(_e88556ded714.data.port, _934bd4ea3ba6.port, [ _934bd4ea3ba6.port ]);
      }
    }), _934bd4ea3ba6.port;
  }
  var _bf29a13373c9 = null;
  function lt() {
    if (_bf29a13373c9 === null) {
      let _8dbc10c2212d = new MessageChannel, _e88556ded714 = new ReadableStream, _934bd4ea3ba6;
      try {
        _f1a1133d8879.call(_8dbc10c2212d.port1, _e88556ded714, [ _e88556ded714 ]), _934bd4ea3ba6 = !0;
      } catch {
        _934bd4ea3ba6 = !1;
      }
      return _bf29a13373c9 = _934bd4ea3ba6, _934bd4ea3ba6;
    }
    return _bf29a13373c9;
  }
  var _798fd7bd9559 = class {
    constructor(_8dbc10c2212d) {
      this.channel = new BroadcastChannel("bare-mux"), _8dbc10c2212d instanceof MessagePort || _8dbc10c2212d instanceof Promise ? this.port = _8dbc10c2212d : this.createChannel(_8dbc10c2212d, !0);
    }
    createChannel(_8dbc10c2212d, _e88556ded714) {
      if (self.clients) this.port = W(), this.channel.onmessage = _8dbc10c2212d => {
        _8dbc10c2212d.data.type === "refreshPort" && (this.port = W());
      }; else if (_8dbc10c2212d && SharedWorker) {
        if (!_8dbc10c2212d.startsWith("/") && !_8dbc10c2212d.includes("://")) throw new Error("Invalid URL. Must be absolute or start at the root.");
        this.port = Ve(_8dbc10c2212d, _e88556ded714), console.debug("bare-mux: setting localStorage bare-mux-path to", _8dbc10c2212d), 
        _9c19915e3090["bare-mux-path"] = _8dbc10c2212d;
      } else {
        if (!SharedWorker) throw new Error("Unable to get a channel to the SharedWorker.");
        {
          let _8dbc10c2212d = _9c19915e3090["bare-mux-path"];
          if (console.debug("bare-mux: got localStorage bare-mux-path:", _8dbc10c2212d), !_8dbc10c2212d) throw new Error("Unable to get bare-mux workerPath from localStorage.");
          this.port = Ve(_8dbc10c2212d, _e88556ded714);
        }
      }
    }
    async sendMessage(_8dbc10c2212d, _e88556ded714) {
      this.port instanceof Promise && (this.port = await this.port);
      try {
        await Ie(this.port);
      } catch {
        return console.warn("bare-mux: Failed to get a ping response from the worker within 1.5s. Assuming port is dead."), 
        this.createChannel(), await this.sendMessage(_8dbc10c2212d, _e88556ded714);
      }
      let _934bd4ea3ba6 = new MessageChannel, _7ca63121ca79 = [ _934bd4ea3ba6.port2, ..._e88556ded714 || [] ], _1746cd833377 = new Promise((_8dbc10c2212d, _e88556ded714) => {
        _934bd4ea3ba6.port1.onmessage = _934bd4ea3ba6 => {
          let _7ca63121ca79 = _934bd4ea3ba6.data;
          _7ca63121ca79.type === "error" ? _e88556ded714(_7ca63121ca79.error) : _8dbc10c2212d(_7ca63121ca79);
        };
      });
      return _f1a1133d8879.call(this.port, {
        message: _8dbc10c2212d,
        port: _934bd4ea3ba6.port2
      }, _7ca63121ca79), await _1746cd833377;
    }
  };
  function Ce(_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) {
    console.error(`error while processing '${_934bd4ea3ba6}': `, _e88556ded714), _8dbc10c2212d.postMessage({
      type: "error",
      error: _e88556ded714
    });
  }
  var _b62157a4b23c = class {
    constructor(_8dbc10c2212d) {
      this.worker = new _798fd7bd9559(_8dbc10c2212d);
    }
    async getTransport() {
      return (await this.worker.sendMessage({
        type: "get"
      })).name;
    }
    async setTransport(_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) {
      await this.setManualTransport(`\n\t\t\tconst { default: BareTransport } = await import("${_8dbc10c2212d}");\n\t\t\treturn [BareTransport, "${_8dbc10c2212d}"];\n\t\t`, _e88556ded714, _934bd4ea3ba6);
    }
    async setManualTransport(_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) {
      if (_8dbc10c2212d === "bare-mux-remote") throw new Error("Use setRemoteTransport.");
      await this.worker.sendMessage({
        type: "set",
        client: {
          function: _8dbc10c2212d,
          args: _e88556ded714
        }
      }, _934bd4ea3ba6);
    }
    async setRemoteTransport(_8dbc10c2212d, _e88556ded714) {
      let _934bd4ea3ba6 = new MessageChannel;
      _934bd4ea3ba6.port1.onmessage = async _e88556ded714 => {
        let _934bd4ea3ba6 = _e88556ded714.data.port, _7ca63121ca79 = _e88556ded714.data.message;
        if (_7ca63121ca79.type === "fetch") try {
          _8dbc10c2212d.ready || await _8dbc10c2212d.init(), await async function(_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) {
            let _7ca63121ca79 = await _934bd4ea3ba6.request(new URL(_8dbc10c2212d.fetch.remote), _8dbc10c2212d.fetch.method, _8dbc10c2212d.fetch.body, _8dbc10c2212d.fetch.headers, null);
            if (!lt() && _7ca63121ca79.body instanceof ReadableStream) {
              let _8dbc10c2212d = new Response(_7ca63121ca79.body);
              _7ca63121ca79.body = await _8dbc10c2212d.arrayBuffer();
            }
            _7ca63121ca79.body instanceof ReadableStream || _7ca63121ca79.body instanceof ArrayBuffer ? _f1a1133d8879.call(_e88556ded714, {
              type: "fetch",
              fetch: _7ca63121ca79
            }, [ _7ca63121ca79.body ]) : _f1a1133d8879.call(_e88556ded714, {
              type: "fetch",
              fetch: _7ca63121ca79
            });
          }(_7ca63121ca79, _934bd4ea3ba6, _8dbc10c2212d);
        } catch (_8dbc10c2212d) {
          Ce(_934bd4ea3ba6, _8dbc10c2212d, "fetch");
        } else if (_7ca63121ca79.type === "websocket") try {
          _8dbc10c2212d.ready || await _8dbc10c2212d.init(), await async function(_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) {
            let [_7ca63121ca79, _1746cd833377] = _934bd4ea3ba6.connect(new URL(_8dbc10c2212d.websocket.url), _8dbc10c2212d.websocket.protocols, _8dbc10c2212d.websocket.requestHeaders, _e88556ded714 => {
              _f1a1133d8879.call(_8dbc10c2212d.websocket.channel, {
                type: "open",
                args: [ _e88556ded714 ]
              });
            }, _e88556ded714 => {
              _e88556ded714 instanceof ArrayBuffer ? _f1a1133d8879.call(_8dbc10c2212d.websocket.channel, {
                type: "message",
                args: [ _e88556ded714 ]
              }, [ _e88556ded714 ]) : _f1a1133d8879.call(_8dbc10c2212d.websocket.channel, {
                type: "message",
                args: [ _e88556ded714 ]
              });
            }, (_e88556ded714, _934bd4ea3ba6) => {
              _f1a1133d8879.call(_8dbc10c2212d.websocket.channel, {
                type: "close",
                args: [ _e88556ded714, _934bd4ea3ba6 ]
              });
            }, _e88556ded714 => {
              _f1a1133d8879.call(_8dbc10c2212d.websocket.channel, {
                type: "error",
                args: [ _e88556ded714 ]
              });
            });
            _8dbc10c2212d.websocket.channel.onmessage = _8dbc10c2212d => {
              _8dbc10c2212d.data.type === "data" ? _7ca63121ca79(_8dbc10c2212d.data.data) : _8dbc10c2212d.data.type === "close" && _1746cd833377(_8dbc10c2212d.data.closeCode, _8dbc10c2212d.data.closeReason);
            }, _f1a1133d8879.call(_e88556ded714, {
              type: "websocket"
            });
          }(_7ca63121ca79, _934bd4ea3ba6, _8dbc10c2212d);
        } catch (_8dbc10c2212d) {
          Ce(_934bd4ea3ba6, _8dbc10c2212d, "websocket");
        }
      }, await this.worker.sendMessage({
        type: "set",
        client: {
          function: "bare-mux-remote",
          args: [ _934bd4ea3ba6.port2, _e88556ded714 ]
        }
      }, [ _934bd4ea3ba6.port2 ]);
    }
    getInnerPort() {
      return this.worker.port;
    }
  };
  console.debug("bare-mux: running v2.1.6 (build 4b7607b)");
  var _d05b5d95b071 = class extends _e4ce546c8c59.default {
    constructor(_8dbc10c2212d) {
      super(), this.ctx = _8dbc10c2212d, this.window = _8dbc10c2212d.window, this.Worker = this.window.Worker || {}, 
      this.Worklet = this.window.Worklet || {}, this.workletProto = this.Worklet.prototype || {}, 
      this.workerProto = this.Worker.prototype || {}, this.postMessage = this.workerProto.postMessage, 
      this.terminate = this.workerProto.terminate, this.addModule = this.workletProto.addModule;
    }
    overrideWorker() {
      this.ctx.override(this.window, "Worker", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (!_934bd4ea3ba6.length) return new _8dbc10c2212d(..._934bd4ea3ba6);
        let [_7ca63121ca79, _1746cd833377 = {}] = _934bd4ea3ba6, _3fd0e96eed52 = new _8104aa7a485d({
          url: _7ca63121ca79,
          options: _1746cd833377
        }, _8dbc10c2212d, _e88556ded714);
        if (this.emit("worker", _3fd0e96eed52), _3fd0e96eed52.intercepted) return _3fd0e96eed52.returnValue;
        let _f8c090733b39 = new _3fd0e96eed52.target(_3fd0e96eed52.data.url, _3fd0e96eed52.data.options), _4768674375f7 = new _b62157a4b23c;
        return (async () => {
          let _8dbc10c2212d = await _4768674375f7.getInnerPort();
          _f8c090733b39.postMessage({
            __uv$type: "baremuxinit",
            port: _8dbc10c2212d
          }, [ _8dbc10c2212d ]);
        })(), _f8c090733b39;
      }, !0);
    }
    overrideAddModule() {
      this.ctx.override(this.workletProto, "addModule", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (!_934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79, _1746cd833377 = {}] = _934bd4ea3ba6, _3fd0e96eed52 = new _8104aa7a485d({
          url: _7ca63121ca79,
          options: _1746cd833377
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("addModule", _3fd0e96eed52), _3fd0e96eed52.intercepted ? _3fd0e96eed52.returnValue : _3fd0e96eed52.target.call(_3fd0e96eed52.that, _3fd0e96eed52.data.url, _3fd0e96eed52.data.options);
      });
    }
    overridePostMessage() {
      this.ctx.override(this.workerProto, "postMessage", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (!_934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79, _1746cd833377 = []] = _934bd4ea3ba6, _3fd0e96eed52 = new _8104aa7a485d({
          message: _7ca63121ca79,
          transfer: _1746cd833377
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("postMessage", _3fd0e96eed52), _3fd0e96eed52.intercepted ? _3fd0e96eed52.returnValue : _3fd0e96eed52.target.call(_3fd0e96eed52.that, _3fd0e96eed52.data.message, _3fd0e96eed52.data.transfer);
      });
    }
    overrideImportScripts() {
      this.ctx.override(this.window, "importScripts", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (!_934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let _7ca63121ca79 = new _8104aa7a485d({
          scripts: _934bd4ea3ba6
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("importScripts", _7ca63121ca79), _7ca63121ca79.intercepted ? _7ca63121ca79.returnValue : _7ca63121ca79.target.apply(_7ca63121ca79.that, _7ca63121ca79.data.scripts);
      });
    }
  }, _485d2384c16c = _d05b5d95b071;
  var _77ccca80c0ec = m(_f8c090733b39(), 1);
  var _6c5577a8920d = class extends _77ccca80c0ec.default {
    constructor(_8dbc10c2212d) {
      super(), this.ctx = _8dbc10c2212d, this.window = this.ctx.window, this.URL = this.window.URL || {}, 
      this.createObjectURL = this.URL.createObjectURL, this.revokeObjectURL = this.URL.revokeObjectURL;
    }
    overrideObjectURL() {
      this.ctx.override(this.URL, "createObjectURL", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (!_934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79] = _934bd4ea3ba6, _1746cd833377 = new _8104aa7a485d({
          object: _7ca63121ca79
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("createObjectURL", _1746cd833377), _1746cd833377.intercepted ? _1746cd833377.returnValue : _1746cd833377.target.call(_1746cd833377.that, _1746cd833377.data.object);
      }), this.ctx.override(this.URL, "revokeObjectURL", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (!_934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79] = _934bd4ea3ba6, _1746cd833377 = new _8104aa7a485d({
          url: _7ca63121ca79
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("revokeObjectURL", _1746cd833377), _1746cd833377.intercepted ? _1746cd833377.returnValue : _1746cd833377.target.call(_1746cd833377.that, _1746cd833377.data.url);
      });
    }
  }, _f6cd77f79cb8 = _6c5577a8920d;
  var _33984489a0b9 = m(_f8c090733b39(), 1);
  var _3faddf1d0030 = m(_f8c090733b39(), 1);
  var _b25e3437c70a = class extends _3faddf1d0030.default {
    constructor(_8dbc10c2212d) {
      super(), this.ctx = _8dbc10c2212d, this.window = _8dbc10c2212d.window, this.localStorage = this.window.localStorage || null, 
      this.sessionStorage = this.window.sessionStorage || null, this.Storage = this.window.Storage || {}, 
      this.storeProto = this.Storage.prototype || {}, this.getItem = this.storeProto.getItem || null, 
      this.setItem = this.storeProto.setItem || null, this.removeItem = this.storeProto.removeItem || null, 
      this.clear = this.storeProto.clear || null, this.key = this.storeProto.key || null, 
      this.methods = [ "key", "getItem", "setItem", "removeItem", "clear" ], this.wrappers = new _8dbc10c2212d.nativeMethods.Map;
    }
    overrideMethods() {
      this.ctx.override(this.storeProto, "getItem", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (!_934bd4ea3ba6.length) return _8dbc10c2212d.apply(this.wrappers.get(_e88556ded714) || _e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79] = _934bd4ea3ba6, _1746cd833377 = new _8104aa7a485d({
          name: _7ca63121ca79
        }, _8dbc10c2212d, this.wrappers.get(_e88556ded714) || _e88556ded714);
        return this.emit("getItem", _1746cd833377), _1746cd833377.intercepted ? _1746cd833377.returnValue : _1746cd833377.target.call(_1746cd833377.that, _1746cd833377.data.name);
      }), this.ctx.override(this.storeProto, "setItem", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (2 > _934bd4ea3ba6.length) return _8dbc10c2212d.apply(this.wrappers.get(_e88556ded714) || _e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79, _1746cd833377] = _934bd4ea3ba6, _3fd0e96eed52 = new _8104aa7a485d({
          name: _7ca63121ca79,
          value: _1746cd833377
        }, _8dbc10c2212d, this.wrappers.get(_e88556ded714) || _e88556ded714);
        return this.emit("setItem", _3fd0e96eed52), _3fd0e96eed52.intercepted ? _3fd0e96eed52.returnValue : _3fd0e96eed52.target.call(_3fd0e96eed52.that, _3fd0e96eed52.data.name, _3fd0e96eed52.data.value);
      }), this.ctx.override(this.storeProto, "removeItem", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (!_934bd4ea3ba6.length) return _8dbc10c2212d.apply(this.wrappers.get(_e88556ded714) || _e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79] = _934bd4ea3ba6, _1746cd833377 = new _8104aa7a485d({
          name: _7ca63121ca79
        }, _8dbc10c2212d, this.wrappers.get(_e88556ded714) || _e88556ded714);
        return this.emit("removeItem", _1746cd833377), _1746cd833377.intercepted ? _1746cd833377.returnValue : _1746cd833377.target.call(_1746cd833377.that, _1746cd833377.data.name);
      }), this.ctx.override(this.storeProto, "clear", (_8dbc10c2212d, _e88556ded714) => {
        let _934bd4ea3ba6 = new _8104aa7a485d(null, _8dbc10c2212d, this.wrappers.get(_e88556ded714) || _e88556ded714);
        return this.emit("clear", _934bd4ea3ba6), _934bd4ea3ba6.intercepted ? _934bd4ea3ba6.returnValue : _934bd4ea3ba6.target.call(_934bd4ea3ba6.that);
      }), this.ctx.override(this.storeProto, "key", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (!_934bd4ea3ba6.length) return _8dbc10c2212d.apply(this.wrappers.get(_e88556ded714) || _e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79] = _934bd4ea3ba6, _1746cd833377 = new _8104aa7a485d({
          index: _7ca63121ca79
        }, _8dbc10c2212d, this.wrappers.get(_e88556ded714) || _e88556ded714);
        return this.emit("key", _1746cd833377), _1746cd833377.intercepted ? _1746cd833377.returnValue : _1746cd833377.target.call(_1746cd833377.that, _1746cd833377.data.index);
      });
    }
    overrideLength() {
      this.ctx.overrideDescriptor(this.storeProto, "length", {
        get: (_8dbc10c2212d, _e88556ded714) => {
          let _934bd4ea3ba6 = new _8104aa7a485d({
            length: _8dbc10c2212d.call(this.wrappers.get(_e88556ded714) || _e88556ded714)
          }, _8dbc10c2212d, this.wrappers.get(_e88556ded714) || _e88556ded714);
          return this.emit("length", _934bd4ea3ba6), _934bd4ea3ba6.intercepted ? _934bd4ea3ba6.returnValue : _934bd4ea3ba6.data.length;
        }
      });
    }
    emulate(_8dbc10c2212d, _e88556ded714 = {}) {
      this.ctx.nativeMethods.setPrototypeOf(_e88556ded714, this.storeProto);
      let _934bd4ea3ba6 = new this.ctx.window.Proxy(_e88556ded714, {
        get: (_e88556ded714, _934bd4ea3ba6) => {
          if (_934bd4ea3ba6 in this.storeProto || typeof _934bd4ea3ba6 == "symbol") return _8dbc10c2212d[_934bd4ea3ba6];
          let _7ca63121ca79 = new _8104aa7a485d({
            name: _934bd4ea3ba6
          }, null, _8dbc10c2212d);
          return this.emit("get", _7ca63121ca79), _7ca63121ca79.intercepted ? _7ca63121ca79.returnValue : _8dbc10c2212d[_7ca63121ca79.data.name];
        },
        set: (_e88556ded714, _934bd4ea3ba6, _7ca63121ca79) => {
          if (_934bd4ea3ba6 in this.storeProto || typeof _934bd4ea3ba6 == "symbol") return _8dbc10c2212d[_934bd4ea3ba6] = _7ca63121ca79;
          let _1746cd833377 = new _8104aa7a485d({
            name: _934bd4ea3ba6,
            value: _7ca63121ca79
          }, null, _8dbc10c2212d);
          return this.emit("set", _1746cd833377), _1746cd833377.intercepted ? _1746cd833377.returnValue : _8dbc10c2212d[_1746cd833377.data.name] = _1746cd833377.data.value;
        },
        deleteProperty: (_e88556ded714, _934bd4ea3ba6) => {
          if (typeof _934bd4ea3ba6 == "symbol") return delete _8dbc10c2212d[_934bd4ea3ba6];
          let _7ca63121ca79 = new _8104aa7a485d({
            name: _934bd4ea3ba6
          }, null, _8dbc10c2212d);
          return this.emit("delete", _7ca63121ca79), _7ca63121ca79.intercepted ? _7ca63121ca79.returnValue : delete _8dbc10c2212d[_7ca63121ca79.data.name];
        }
      });
      return this.wrappers.set(_934bd4ea3ba6, _8dbc10c2212d), this.ctx.nativeMethods.setPrototypeOf(_934bd4ea3ba6, this.storeProto), 
      _934bd4ea3ba6;
    }
  }, _b7422839c7cf = _b25e3437c70a;
  var _ba14f1e044ea = m(_f8c090733b39(), 1);
  var _56091c6988cf = class extends _ba14f1e044ea.default {
    constructor(_8dbc10c2212d) {
      super(), this.ctx = _8dbc10c2212d, this.window = _8dbc10c2212d.window, this.CSSStyleDeclaration = this.window.CSSStyleDeclaration || {}, 
      this.cssStyleProto = this.CSSStyleDeclaration.prototype || {}, this.getPropertyValue = this.cssStyleProto.getPropertyValue || null, 
      this.setProperty = this.cssStyleProto.setProperty || null, this.cssText - _8dbc10c2212d.nativeMethods.getOwnPropertyDescriptors(this.cssStyleProto, "cssText"), 
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
      this.ctx.override(this.cssStyleProto, "getPropertyValue", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (!_934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79] = _934bd4ea3ba6, _1746cd833377 = new _8104aa7a485d({
          property: _7ca63121ca79
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("getPropertyValue", _1746cd833377), _1746cd833377.intercepted ? _1746cd833377.returnValue : _1746cd833377.target.call(_1746cd833377.that, _1746cd833377.data.property);
      }), this.ctx.override(this.cssStyleProto, "setProperty", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (2 > _934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79, _1746cd833377] = _934bd4ea3ba6, _3fd0e96eed52 = new _8104aa7a485d({
          property: _7ca63121ca79,
          value: _1746cd833377
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("setProperty", _3fd0e96eed52), _3fd0e96eed52.intercepted ? _3fd0e96eed52.returnValue : _3fd0e96eed52.target.call(_3fd0e96eed52.that, _3fd0e96eed52.data.property, _3fd0e96eed52.data.value);
      });
    }
    overrideCssText() {
      this.ctx.overrideDescriptor(this.cssStyleProto, "cssText", {
        get: (_8dbc10c2212d, _e88556ded714) => {
          let _934bd4ea3ba6 = new _8104aa7a485d({
            value: _8dbc10c2212d.call(_e88556ded714)
          }, _8dbc10c2212d, _e88556ded714);
          return this.emit("getCssText", _934bd4ea3ba6), _934bd4ea3ba6.intercepted ? _934bd4ea3ba6.returnValue : _934bd4ea3ba6.data.value;
        },
        set: (_8dbc10c2212d, _e88556ded714, [_934bd4ea3ba6]) => {
          let _7ca63121ca79 = new _8104aa7a485d({
            value: _934bd4ea3ba6
          }, _8dbc10c2212d, _e88556ded714);
          return this.emit("setCssText", _7ca63121ca79), _7ca63121ca79.intercepted ? _7ca63121ca79.returnValue : _7ca63121ca79.target.call(_7ca63121ca79.that, _7ca63121ca79.data.value);
        }
      });
    }
  }, _93b75baa5a20 = _56091c6988cf;
  var _e524df92dbe3 = m(_f8c090733b39(), 1);
  var _d48bd7d5fa90 = class extends _e524df92dbe3.default {
    constructor(_8dbc10c2212d) {
      super(), this.ctx = _8dbc10c2212d, this.window = this.ctx.window, this.IDBDatabase = this.window.IDBDatabase || {}, 
      this.idbDatabaseProto = this.IDBDatabase.prototype || {}, this.IDBFactory = this.window.IDBFactory || {}, 
      this.idbFactoryProto = this.IDBFactory.prototype || {}, this.open = this.idbFactoryProto.open;
    }
    overrideOpen() {
      this.ctx.override(this.IDBFactory.prototype, "open", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        if (!_934bd4ea3ba6.length || !_934bd4ea3ba6.length) return _8dbc10c2212d.apply(_e88556ded714, _934bd4ea3ba6);
        let [_7ca63121ca79, _1746cd833377] = _934bd4ea3ba6, _3fd0e96eed52 = new _8104aa7a485d({
          name: _7ca63121ca79,
          version: _1746cd833377
        }, _8dbc10c2212d, _e88556ded714);
        return this.emit("idbFactoryOpen", _3fd0e96eed52), _3fd0e96eed52.intercepted ? _3fd0e96eed52.returnValue : _3fd0e96eed52.target.call(_3fd0e96eed52.that, _3fd0e96eed52.data.name, _3fd0e96eed52.data.version);
      });
    }
    overrideName() {
      this.ctx.overrideDescriptor(this.idbDatabaseProto, "name", {
        get: (_8dbc10c2212d, _e88556ded714) => {
          let _934bd4ea3ba6 = new _8104aa7a485d({
            value: _8dbc10c2212d.call(_e88556ded714)
          }, _8dbc10c2212d, _e88556ded714);
          return this.emit("idbFactoryName", _934bd4ea3ba6), _934bd4ea3ba6.intercepted ? _934bd4ea3ba6.returnValue : _934bd4ea3ba6.data.value;
        }
      });
    }
  }, _8411bbec4789 = _d48bd7d5fa90;
  var _61258170363d = m(_f8c090733b39(), 1);
  var _41bfed0f794d = class extends _61258170363d.default {
    constructor(_8dbc10c2212d) {
      super(), this.ctx = _8dbc10c2212d, this.window = _8dbc10c2212d.window, this.WebSocket = this.window.WebSocket || {}, 
      this.wsProto = this.WebSocket.prototype, this.CONNECTING = WebSocket.CONNECTING, 
      this.OPEN = WebSocket.OPEN, this.CLOSING = WebSocket.CLOSING, this.CLOSED = WebSocket.CLOSED, 
      this.socketmap = new WeakMap;
    }
    overrideWebSocket(_8dbc10c2212d) {
      this.ctx.override(this.window, "WebSocket", (_e88556ded714, _934bd4ea3ba6, _7ca63121ca79) => {
        let _1746cd833377 = new EventTarget;
        Object.setPrototypeOf(_1746cd833377, this.WebSocket.prototype), _1746cd833377.constructor = this.WebSocket;
        let i = _8dbc10c2212d => new Proxy(_8dbc10c2212d, {
          get(_8dbc10c2212d, _e88556ded714) {
            return _e88556ded714 === "isTrusted" ? !0 : Reflect.get(_8dbc10c2212d, _e88556ded714);
          }
        }), _3fd0e96eed52 = _8dbc10c2212d.createWebSocket(_7ca63121ca79[0], _7ca63121ca79[1], null, {
          "User-Agent": navigator.userAgent,
          Origin: __uv.meta.url.origin
        }), _f8c090733b39 = {
          extensions: "",
          protocol: "",
          url: _7ca63121ca79[0],
          binaryType: "blob",
          barews: _3fd0e96eed52
        };
        function u(_8dbc10c2212d) {
          _f8c090733b39["on" + _8dbc10c2212d.type]?.(i(_8dbc10c2212d)), _1746cd833377.dispatchEvent(_8dbc10c2212d);
        }
        return _3fd0e96eed52.addEventListener("open", () => {
          u(new Event("open"));
        }), _3fd0e96eed52.addEventListener("close", _8dbc10c2212d => {
          u(new CloseEvent("close", _8dbc10c2212d));
        }), _3fd0e96eed52.addEventListener("message", async _8dbc10c2212d => {
          let _e88556ded714 = _8dbc10c2212d.data;
          typeof _e88556ded714 == "string" || ("byteLength" in _e88556ded714 ? _f8c090733b39.binaryType === "blob" ? _e88556ded714 = new Blob([ _e88556ded714 ]) : Object.setPrototypeOf(_e88556ded714, ArrayBuffer.prototype) : "arrayBuffer" in _e88556ded714 && _f8c090733b39.binaryType === "arraybuffer" && (_e88556ded714 = await _e88556ded714.arrayBuffer(), 
          Object.setPrototypeOf(_e88556ded714, ArrayBuffer.prototype)));
          let _934bd4ea3ba6 = new MessageEvent("message", {
            data: _e88556ded714,
            origin: _8dbc10c2212d.origin,
            lastEventId: _8dbc10c2212d.lastEventId,
            source: _8dbc10c2212d.source,
            ports: _8dbc10c2212d.ports
          });
          u(_934bd4ea3ba6);
        }), _3fd0e96eed52.addEventListener("error", () => {
          u(new Event("error"));
        }), this.socketmap.set(_1746cd833377, _f8c090733b39), _1746cd833377;
      }, !0), this.ctx.overrideDescriptor(this.wsProto, "binaryType", {
        get: (_8dbc10c2212d, _e88556ded714) => this.socketmap.get(_e88556ded714).binaryType,
        set: (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
          let _7ca63121ca79 = this.socketmap.get(_e88556ded714);
          (_934bd4ea3ba6[0] === "blob" || _934bd4ea3ba6[0] === "arraybuffer") && (_7ca63121ca79.binaryType = _934bd4ea3ba6[0]);
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "bufferedAmount", {
        get: (_8dbc10c2212d, _e88556ded714) => 0
      }), this.ctx.overrideDescriptor(this.wsProto, "extensions", {
        get: (_8dbc10c2212d, _e88556ded714) => this.socketmap.get(_e88556ded714).extensions
      }), this.ctx.overrideDescriptor(this.wsProto, "onclose", {
        get: (_8dbc10c2212d, _e88556ded714) => this.socketmap.get(_e88556ded714).onclose,
        set: (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
          let _7ca63121ca79 = this.socketmap.get(_e88556ded714);
          _7ca63121ca79.onclose = _934bd4ea3ba6[0];
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "onerror", {
        get: (_8dbc10c2212d, _e88556ded714) => this.socketmap.get(_e88556ded714).onerror,
        set: (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
          let _7ca63121ca79 = this.socketmap.get(_e88556ded714);
          _7ca63121ca79.onerror = _934bd4ea3ba6[0];
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "onmessage", {
        get: (_8dbc10c2212d, _e88556ded714) => this.socketmap.get(_e88556ded714).onmessage,
        set: (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
          let _7ca63121ca79 = this.socketmap.get(_e88556ded714);
          _7ca63121ca79.onmessage = _934bd4ea3ba6[0];
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "onopen", {
        get: (_8dbc10c2212d, _e88556ded714) => this.socketmap.get(_e88556ded714).onopen,
        set: (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
          let _7ca63121ca79 = this.socketmap.get(_e88556ded714);
          _7ca63121ca79.onopen = _934bd4ea3ba6[0];
        }
      }), this.ctx.overrideDescriptor(this.wsProto, "url", {
        get: (_8dbc10c2212d, _e88556ded714) => this.socketmap.get(_e88556ded714).url
      }), this.ctx.overrideDescriptor(this.wsProto, "protocol", {
        get: (_8dbc10c2212d, _e88556ded714) => this.socketmap.get(_e88556ded714).protocol
      }), this.ctx.overrideDescriptor(this.wsProto, "readyState", {
        get: (_8dbc10c2212d, _e88556ded714) => this.socketmap.get(_e88556ded714).barews.readyState
      }), this.ctx.override(this.wsProto, "send", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => this.socketmap.get(_e88556ded714).barews.send(_934bd4ea3ba6[0]), !1), 
      this.ctx.override(this.wsProto, "close", (_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6) => {
        let _7ca63121ca79 = this.socketmap.get(_e88556ded714);
        return _934bd4ea3ba6[0] === void 0 && (_934bd4ea3ba6[0] = 1e3), _934bd4ea3ba6[1] === void 0 && (_934bd4ea3ba6[1] = ""), 
        _7ca63121ca79.barews.close(_934bd4ea3ba6[0], _934bd4ea3ba6[1]);
      }, !1);
    }
  }, _cf1cfd6a50df = _41bfed0f794d;
  var _8dfd0ee3318b = class extends _33984489a0b9.default {
    constructor(_8dbc10c2212d = self, _e88556ded714, _934bd4ea3ba6 = !_8dbc10c2212d.window) {
      super(), this.window = _8dbc10c2212d, this.nativeMethods = {
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
      }, this.worker = _934bd4ea3ba6, this.bareClient = _e88556ded714, this.fetch = new _9199f8b1cdf1(this), 
      this.xhr = new _51ab6e96d929(this), this.idb = new _8411bbec4789(this), this.history = new _4d7f1ab163cc(this), 
      this.element = new _55867d188621(this), this.node = new _9fc33e1de435(this), this.document = new _5bd29dc7bc10(this), 
      this.function = new _919631e57e2d(this), this.object = new _9f1ad8fd82a2(this), 
      this.websocket = new _cf1cfd6a50df(this), this.message = new _7a69bbcf31cf(this), 
      this.navigator = new _050b56e8c969(this), this.eventSource = new _0d6429362bbd(this), 
      this.attribute = new _6464406879b2(this), this.url = new _f6cd77f79cb8(this), this.workers = new _485d2384c16c(this), 
      this.location = new _31de2cc223f7(this), this.storage = new _b7422839c7cf(this), 
      this.style = new _93b75baa5a20(this);
    }
    override(_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6, _7ca63121ca79) {
      let _1746cd833377 = this.wrap(_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6, _7ca63121ca79);
      return _8dbc10c2212d[_e88556ded714] = _1746cd833377, _1746cd833377;
    }
    overrideDescriptor(_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6 = {}) {
      let _7ca63121ca79 = this.wrapDescriptor(_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6);
      return _7ca63121ca79 ? (this.nativeMethods.defineProperty(_8dbc10c2212d, _e88556ded714, _7ca63121ca79), 
      _7ca63121ca79) : {};
    }
    wrap(_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6, _7ca63121ca79 = !1) {
      let _1746cd833377 = _8dbc10c2212d[_e88556ded714];
      if (!_1746cd833377) return _1746cd833377;
      let _3fd0e96eed52 = "prototype" in _1746cd833377 ? function() {
        return _934bd4ea3ba6(_1746cd833377, this, [ ...arguments ]);
      } : {
        attach() {
          return _934bd4ea3ba6(_1746cd833377, this, [ ...arguments ]);
        }
      }.attach;
      return _7ca63121ca79 && (_3fd0e96eed52.prototype = _1746cd833377.prototype, _3fd0e96eed52.prototype.constructor = _3fd0e96eed52), 
      this.emit("wrap", _1746cd833377, _3fd0e96eed52, _7ca63121ca79), _3fd0e96eed52;
    }
    wrapDescriptor(_8dbc10c2212d, _e88556ded714, _934bd4ea3ba6 = {}) {
      let _7ca63121ca79 = this.nativeMethods.getOwnPropertyDescriptor(_8dbc10c2212d, _e88556ded714);
      if (!_7ca63121ca79) return !1;
      for (let _8dbc10c2212d in _934bd4ea3ba6) _8dbc10c2212d in _7ca63121ca79 && (_8dbc10c2212d === "get" || _8dbc10c2212d === "set" ? _7ca63121ca79[_8dbc10c2212d] = this.wrap(_7ca63121ca79, _8dbc10c2212d, _934bd4ea3ba6[_8dbc10c2212d]) : _7ca63121ca79[_8dbc10c2212d] = typeof _934bd4ea3ba6[_8dbc10c2212d] == "function" ? _934bd4ea3ba6[_8dbc10c2212d](_7ca63121ca79[_8dbc10c2212d]) : _934bd4ea3ba6[_8dbc10c2212d]);
      return _7ca63121ca79;
    }
  }, _54eb2e58029e = _8dfd0ee3318b;
  typeof self == "object" && (self.UVClient = _8dfd0ee3318b);
})();
