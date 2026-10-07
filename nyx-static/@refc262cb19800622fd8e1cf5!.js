(() => {
  if ("\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" == typeof window || window.__nyxStudyJetGuards) return;
  window.__nyxStudyJetGuards = !0;
  const _0bda193a2608 = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "\x74\x72\x75\x73\x74\x65\x64\x54\x79\x70\x65\x73", {
      configurable: !0,
      value: {
        createPolicy: (_0bda193a2608, _45e96694c22d = {}) => ({
          createHTML: _0bda193a2608 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _45e96694c22d.createHTML ? _45e96694c22d.createHTML(_0bda193a2608) : _0bda193a2608,
          createScript: _0bda193a2608 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _45e96694c22d.createScript ? _45e96694c22d.createScript(_0bda193a2608) : _0bda193a2608,
          createScriptURL: _0bda193a2608 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _45e96694c22d.createScriptURL ? _45e96694c22d.createScriptURL(_0bda193a2608) : _0bda193a2608
        })
      }
    });
  } catch {}
  try {
    const _0bda193a2608 = Object.getOwnPropertyDescriptor(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74"), _45e96694c22d = document.createElement("\x73\x63\x72\x69\x70\x74");
    _45e96694c22d.setAttribute("\x6e\x6f\x6e\x63\x65", ""), Object.defineProperty(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74", {
      configurable: !0,
      get() {
        let _94df9ad09e27 = null;
        try {
          _94df9ad09e27 = _0bda193a2608?.get?.call(this) || null;
        } catch {}
        return _94df9ad09e27 || this.querySelector?.("\x73\x63\x72\x69\x70\x74\x5b\x73\x72\x63\x5d\x2c\x73\x63\x72\x69\x70\x74") || _45e96694c22d;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const _0x87f761_0 = _0bda193a2608 => !(!_0bda193a2608 || !_0bda193a2608.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_0bda193a2608.tagName || "")), _0x87f761_1 = _0bda193a2608 => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_0bda193a2608?.tagName || "") ? String(_0bda193a2608.value || "").slice(_0bda193a2608.selectionStart || 0, _0bda193a2608.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, _0x87f761_2 = (_0bda193a2608, _45e96694c22d) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_0bda193a2608?.tagName || "")) {
            const _94df9ad09e27 = _0bda193a2608.selectionStart || 0, _0dd7caee545e = _0bda193a2608.selectionEnd || 0, _b540ee05bb3d = String(_0bda193a2608.value || "");
            _0bda193a2608.value = _b540ee05bb3d.slice(0, _94df9ad09e27) + _45e96694c22d + _b540ee05bb3d.slice(_0dd7caee545e);
            const _1c195a476b25 = _94df9ad09e27 + String(_45e96694c22d).length;
            return _0bda193a2608.setSelectionRange(_1c195a476b25, _1c195a476b25), void _0bda193a2608.dispatchEvent(new Event("\x69\x6e\x70\x75\x74", {
              bubbles: !0
            }));
          }
          document.execCommand?.("\x69\x6e\x73\x65\x72\x74\x54\x65\x78\x74", !1, _45e96694c22d);
        } catch {}
      }, _0x87f761_3 = async _0bda193a2608 => {
        try {
          await (navigator.clipboard?.writeText(String(_0bda193a2608 || "")));
        } catch {
          try {
            document.execCommand?.("\x63\x6f\x70\x79");
          } catch {}
        }
      }, _0bda193a2608 = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _45e96694c22d = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), _0x87f761_6 = _94df9ad09e27 => {
        try {
          _0bda193a2608?.postMessage(_94df9ad09e27, "\x2a");
        } catch {}
        try {
          _45e96694c22d && _45e96694c22d !== _0bda193a2608 && _45e96694c22d.postMessage(_94df9ad09e27, "\x2a");
        } catch {}
        try {
          window.parent?.postMessage(_94df9ad09e27, "\x2a");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_94df9ad09e27, "\x2a");
        } catch {}
      };
      window.addEventListener("\x6b\x65\x79\x64\x6f\x77\x6e", _0bda193a2608 => {
        const _45e96694c22d = String(_0bda193a2608.key || "").toLowerCase();
        if (_0bda193a2608.altKey && !_0bda193a2608.ctrlKey && !_0bda193a2608.metaKey && 2 !== _0bda193a2608.location && "\x61\x6c\x74" === _45e96694c22d) return _0bda193a2608.preventDefault(), 
        _0bda193a2608.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x70\x72\x69\x6d\x65"
        });
        if (_0bda193a2608.altKey && !_0bda193a2608.ctrlKey && !_0bda193a2608.metaKey && 2 !== _0bda193a2608.location && _0x87f761_0(_0bda193a2608.target) && /^[acxvzy]$/.test(_45e96694c22d)) {
          if (_0bda193a2608.preventDefault(), _0bda193a2608.stopPropagation(), "\x61" === _45e96694c22d) return void (_0bda193a2608.target?.select ? _0bda193a2608.target.select() : document.execCommand?.("\x73\x65\x6c\x65\x63\x74\x41\x6c\x6c"));
          if ("\x63" === _45e96694c22d) return void _0x87f761_3(_0x87f761_1(_0bda193a2608.target));
          if ("\x78" === _45e96694c22d) {
            const _45e96694c22d = _0x87f761_1(_0bda193a2608.target);
            return _0x87f761_3(_45e96694c22d), void _0x87f761_2(_0bda193a2608.target, "");
          }
          if ("\x76" === _45e96694c22d) return void navigator.clipboard?.readText?.().then(_45e96694c22d => _0x87f761_2(_0bda193a2608.target, _45e96694c22d)).catch(() => {
            try {
              document.execCommand?.("\x70\x61\x73\x74\x65");
            } catch {}
          });
          if ("\x7a" === _45e96694c22d) return void document.execCommand?.("\x75\x6e\x64\x6f");
          if ("\x79" === _45e96694c22d) return void document.execCommand?.("\x72\x65\x64\x6f");
        }
        return !_0bda193a2608.altKey || _0bda193a2608.ctrlKey || _0bda193a2608.metaKey || 2 === _0bda193a2608.location || !/^[1-9]$/.test(_45e96694c22d) && ![ "\x6c", "\x64", "\x74", "\x77", "\x72", "\x61\x72\x72\x6f\x77\x6c\x65\x66\x74", "\x61\x72\x72\x6f\x77\x72\x69\x67\x68\x74", "\x74\x61\x62" ].includes(_45e96694c22d) ? void 0 : (_0bda193a2608.preventDefault(), 
        _0bda193a2608.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x73\x68\x6f\x72\x74\x63\x75\x74",
          key: _45e96694c22d,
          code: _0bda193a2608.code || "",
          location: _0bda193a2608.location || 0,
          shiftKey: !!_0bda193a2608.shiftKey
        }));
      }, !0);
    }
  } catch {}
  const _0x87f761_1 = () => {
    try {
      return !1 !== JSON.parse(localStorage.getItem("\x6e\x79\x78\x2e\x70\x6f\x70\x75\x70\x50\x72\x6f\x74\x65\x63\x74\x69\x6f\x6e") ?? "\x74\x72\x75\x65");
    } catch {
      return !0;
    }
  }, _0x87f761_2 = _0bda193a2608 => {
    if (!_0bda193a2608) return !1;
    try {
      return _0bda193a2608.document.open(), _0bda193a2608.document.write("\x3c\x21\x64\x6f\x63\x74\x79\x70\x65\x20\x68\x74\x6d\x6c\x3e\x3c\x68\x74\x6d\x6c\x3e\x3c\x68\x65\x61\x64\x3e\x3c\x6d\x65\x74\x61\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x22\x75\x74\x66\x2d\x38\x22\x3e\x3c\x6d\x65\x74\x61\x20\x6e\x61\x6d\x65\x3d\x22\x76\x69\x65\x77\x70\x6f\x72\x74\x22\x20\x63\x6f\x6e\x74\x65\x6e\x74\x3d\x22\x77\x69\x64\x74\x68\x3d\x64\x65\x76\x69\x63\x65\x2d\x77\x69\x64\x74\x68\x2c\x69\x6e\x69\x74\x69\x61\x6c\x2d\x73\x63\x61\x6c\x65\x3d\x31\x22\x3e\x3c\x74\x69\x74\x6c\x65\x3e\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61\x3c\x2f\x74\x69\x74\x6c\x65\x3e\x3c\x73\x74\x79\x6c\x65\x3e\x68\x74\x6d\x6c\x2c\x62\x6f\x64\x79\x7b\x6d\x61\x72\x67\x69\x6e\x3a\x30\x3b\x77\x69\x64\x74\x68\x3a\x31\x30\x30\x25\x3b\x68\x65\x69\x67\x68\x74\x3a\x31\x30\x30\x25\x3b\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x3a\x23\x66\x66\x66\x3b\x63\x6f\x6c\x6f\x72\x3a\x23\x31\x31\x31\x3b\x66\x6f\x6e\x74\x3a\x32\x38\x70\x78\x20\x52\x61\x6c\x65\x77\x61\x79\x2c\x41\x72\x69\x61\x6c\x2c\x73\x61\x6e\x73\x2d\x73\x65\x72\x69\x66\x7d\x62\x6f\x64\x79\x7b\x64\x69\x73\x70\x6c\x61\x79\x3a\x67\x72\x69\x64\x3b\x70\x6c\x61\x63\x65\x2d\x69\x74\x65\x6d\x73\x3a\x63\x65\x6e\x74\x65\x72\x3b\x74\x65\x78\x74\x2d\x61\x6c\x69\x67\x6e\x3a\x63\x65\x6e\x74\x65\x72\x7d\x6d\x61\x69\x6e\x7b\x70\x61\x64\x64\x69\x6e\x67\x3a\x32\x34\x70\x78\x7d\x3c\x2f\x73\x74\x79\x6c\x65\x3e\x3c\x2f\x68\x65\x61\x64\x3e\x3c\x62\x6f\x64\x79\x3e\x3c\x6d\x61\x69\x6e\x3e\x61\x72\x65\x20\x79\x6f\x75\x20\x74\x72\x79\x69\x6e\x67\x20\x74\x6f\x20\x68\x61\x63\x6b\x20\x6d\x65\x20\x73\x63\x61\x6d\x6d\x61\x3f\x3f\x3f\x3c\x2f\x6d\x61\x69\x6e\x3e\x3c\x2f\x62\x6f\x64\x79\x3e\x3c\x2f\x68\x74\x6d\x6c\x3e"), 
      _0bda193a2608.document.close(), _0bda193a2608.focus?.(), !0;
    } catch {
      return !1;
    }
  }, _0x87f761_3 = () => {
    const _0bda193a2608 = null;
    return {
      closed: !1,
      focus() {
        try {
          _0bda193a2608?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _0bda193a2608?.blur?.();
        } catch {}
      },
      close() {
        try {
          _0bda193a2608?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return _0x87f761_2(_0bda193a2608), this;
        },
        write() {
          _0x87f761_2(_0bda193a2608);
        },
        writeln() {
          _0x87f761_2(_0bda193a2608);
        },
        close() {
          _0x87f761_2(_0bda193a2608);
        }
      },
      location: {
        href: "\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61",
        assign() {
          _0x87f761_3();
        },
        replace() {
          _0x87f761_3();
        },
        reload() {
          _0x87f761_2(_0bda193a2608);
        },
        toString: () => "\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61"
      }
    };
  }, _0x87f761_4 = _0bda193a2608 => {
    const _45e96694c22d = String(_0bda193a2608 || "").trim();
    if (/^(?:blob|data):/i.test(_45e96694c22d)) return !1;
    const _94df9ad09e27 = _45e96694c22d.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_94df9ad09e27);
  }, _0x87f761_5 = (_0bda193a2608, _45e96694c22d = "") => {
    const _94df9ad09e27 = String(_0bda193a2608 || "").trim();
    if (!_94df9ad09e27 || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "\x6e\x79\x78\x3a\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x2d\x72\x65\x71\x75\x65\x73\x74",
        url: _94df9ad09e27,
        filename: String(_45e96694c22d || ""),
        sourceUrl: String(location.href || "")
      }, "\x2a"), !0;
    } catch {
      return !1;
    }
  };
  let _0x87f761_6 = (..._45e96694c22d) => _0x87f761_4(_45e96694c22d[0]) && _0x87f761_5(_45e96694c22d[0]) ? null : !_0x87f761_1() && _0bda193a2608 ? _0bda193a2608(..._45e96694c22d) : _0x87f761_3();
  try {
    "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _0bda193a2608 && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof Proxy && (_0x87f761_6 = new Proxy(_0bda193a2608, {
      apply: (_0bda193a2608, _45e96694c22d, _94df9ad09e27) => _0x87f761_4(_94df9ad09e27[0]) && _0x87f761_5(_94df9ad09e27[0]) ? null : _0x87f761_1() ? _0x87f761_3() : Reflect.apply(_0bda193a2608, _45e96694c22d, _94df9ad09e27),
      construct(_0bda193a2608, _45e96694c22d, _94df9ad09e27) {
        if (!_0x87f761_1()) try {
          return Reflect.construct(_0bda193a2608, _45e96694c22d, _94df9ad09e27);
        } catch {
          return Reflect.apply(_0bda193a2608, window, _45e96694c22d);
        }
        return _0x87f761_3();
      },
      get: (_0bda193a2608, _45e96694c22d, _94df9ad09e27) => "\x5f\x5f\x6e\x79\x78\x50\x6f\x70\x75\x70\x47\x75\x61\x72\x64" === _45e96694c22d || ("\x74\x6f\x53\x74\x72\x69\x6e\x67" === _45e96694c22d ? () => "\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x6f\x70\x65\x6e\x28\x29\x20\x7b\x20\x5b\x6e\x61\x74\x69\x76\x65\x20\x63\x6f\x64\x65\x5d\x20\x7d" : Reflect.get(_0bda193a2608, _45e96694c22d, _94df9ad09e27))
    }));
  } catch {}
  const _0x87f761_7 = _0bda193a2608 => {
    const _45e96694c22d = String(_0bda193a2608 || "").toLowerCase();
    return _45e96694c22d && ![ "\x5f\x73\x65\x6c\x66", "\x5f\x70\x61\x72\x65\x6e\x74", "\x5f\x74\x6f\x70" ].includes(_45e96694c22d);
  }, _0x87f761_8 = _0bda193a2608 => !!_0bda193a2608 && (!!_0bda193a2608.hasAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || _0x87f761_4(_0bda193a2608.href || _0bda193a2608.getAttribute("\x68\x72\x65\x66") || ""));
  try {
    Object.defineProperty(window, "\x6f\x70\x65\x6e", {
      value: _0x87f761_6,
      writable: !0,
      configurable: !0
    });
  } catch {
    window.open = _0x87f761_6;
  }
  try {
    const _0bda193a2608 = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!_0x87f761_8(this) || !_0x87f761_5(this.href || this.getAttribute("\x68\x72\x65\x66"), this.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "")) {
        if (!_0x87f761_1() || !_0x87f761_7(this.target)) return _0bda193a2608.call(this);
        _0x87f761_3();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("\x63\x6c\x69\x63\x6b", _0bda193a2608 => {
    const _45e96694c22d = _0bda193a2608.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_45e96694c22d) return _0x87f761_8(_45e96694c22d) && _0x87f761_5(_45e96694c22d.href || _45e96694c22d.getAttribute("\x68\x72\x65\x66"), _45e96694c22d.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_0bda193a2608.preventDefault(), 
    void _0bda193a2608.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_45e96694c22d.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_0bda193a2608.preventDefault(), 
    _0bda193a2608.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x61\x75\x78\x63\x6c\x69\x63\x6b", _0bda193a2608 => {
    const _45e96694c22d = _0bda193a2608.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_45e96694c22d) return _0x87f761_8(_45e96694c22d) && _0x87f761_5(_45e96694c22d.href || _45e96694c22d.getAttribute("\x68\x72\x65\x66"), _45e96694c22d.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_0bda193a2608.preventDefault(), 
    void _0bda193a2608.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_45e96694c22d.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_0bda193a2608.preventDefault(), 
    _0bda193a2608.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x73\x75\x62\x6d\x69\x74", _0bda193a2608 => {
    if (!_0x87f761_1()) return;
    const _45e96694c22d = _0bda193a2608.target;
    _45e96694c22d && "\x46\x4f\x52\x4d" === String(_45e96694c22d.tagName || "").toUpperCase() && _0x87f761_7(_45e96694c22d.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_0bda193a2608.preventDefault(), 
    _0bda193a2608.stopImmediatePropagation(), _0x87f761_3());
  }, !0));
  const _0x87f761_9 = _0bda193a2608 => {
    const _45e96694c22d = window[_0bda193a2608];
    if ("\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _45e96694c22d && !_45e96694c22d.__nyxWrapped) try {
      Object.setPrototypeOf(_0x87f761_2, _45e96694c22d), _0x87f761_2.prototype = _45e96694c22d.prototype, 
      Object.defineProperty(_0x87f761_2, "\x5f\x5f\x6e\x79\x78\x57\x72\x61\x70\x70\x65\x64", {
        value: !0
      }), window[_0bda193a2608] = _0x87f761_2;
    } catch {}
    function _0x87f761_2(_0bda193a2608, _94df9ad09e27, _0dd7caee545e) {
      let _b540ee05bb3d = Number(_0bda193a2608), _1c195a476b25 = Number(_94df9ad09e27);
      return (!Number.isFinite(_b540ee05bb3d) || _b540ee05bb3d < 0) && (_b540ee05bb3d = 0), 
      (!Number.isFinite(_1c195a476b25) || _1c195a476b25 <= _b540ee05bb3d) && (_1c195a476b25 = _b540ee05bb3d + .001), 
      Reflect.construct(_45e96694c22d, [ _b540ee05bb3d, _1c195a476b25, null == _0dd7caee545e ? "" : String(_0dd7caee545e) ], new.target || _0x87f761_2);
    }
  };
  _0x87f761_9("\x56\x54\x54\x43\x75\x65"), _0x87f761_9("\x54\x65\x78\x74\x54\x72\x61\x63\x6b\x43\x75\x65");
})();
