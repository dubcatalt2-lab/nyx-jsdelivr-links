(() => {
  if ("\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" == typeof window || window.\u{5f}\u{5f}\u{6e}\u{79}\u{78}\u{53}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74}\u{47}\u{75}\u{61}\u{72}\u{64}\u{73}) return;
  window.\u{5f}\u{5f}\u{6e}\u{79}\u{78}\u{53}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74}\u{47}\u{75}\u{61}\u{72}\u{64}\u{73} = !0;
  const _0c185e0e262d = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "\x74\x72\x75\x73\x74\x65\x64\x54\x79\x70\x65\x73", {
      configurable: !0,
      value: {
        createPolicy: (_0c185e0e262d, _ac0949865c5e = {}) => ({
          createHTML: _0c185e0e262d => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _ac0949865c5e.createHTML ? _ac0949865c5e.createHTML(_0c185e0e262d) : _0c185e0e262d,
          createScript: _0c185e0e262d => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _ac0949865c5e.createScript ? _ac0949865c5e.createScript(_0c185e0e262d) : _0c185e0e262d,
          createScriptURL: _0c185e0e262d => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _ac0949865c5e.createScriptURL ? _ac0949865c5e.createScriptURL(_0c185e0e262d) : _0c185e0e262d
        })
      }
    });
  } catch {}
  try {
    const _0c185e0e262d = Object.getOwnPropertyDescriptor(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74"), _ac0949865c5e = document.createElement("\x73\x63\x72\x69\x70\x74");
    _ac0949865c5e.setAttribute("\x6e\x6f\x6e\x63\x65", ""), Object.defineProperty(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74", {
      configurable: !0,
      get() {
        let _ddf67fabd730 = null;
        try {
          _ddf67fabd730 = _0c185e0e262d?.get?.call(this) || null;
        } catch {}
        return _ddf67fabd730 || this.querySelector?.("\x73\x63\x72\x69\x70\x74\x5b\x73\x72\x63\x5d\x2c\x73\x63\x72\x69\x70\x74") || _ac0949865c5e;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const _0x87f761_0 = _0c185e0e262d => !(!_0c185e0e262d || !_0c185e0e262d.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_0c185e0e262d.tagName || "")), _0x87f761_1 = _0c185e0e262d => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_0c185e0e262d?.tagName || "") ? String(_0c185e0e262d.value || "").slice(_0c185e0e262d.selectionStart || 0, _0c185e0e262d.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, _0x87f761_2 = (_0c185e0e262d, _ac0949865c5e) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_0c185e0e262d?.tagName || "")) {
            const _ddf67fabd730 = _0c185e0e262d.selectionStart || 0, _bdf00ddec719 = _0c185e0e262d.selectionEnd || 0, _8493ca82a1db = String(_0c185e0e262d.value || "");
            _0c185e0e262d.value = _8493ca82a1db.slice(0, _ddf67fabd730) + _ac0949865c5e + _8493ca82a1db.slice(_bdf00ddec719);
            const _a33eb7a5d718 = _ddf67fabd730 + String(_ac0949865c5e).length;
            return _0c185e0e262d.setSelectionRange(_a33eb7a5d718, _a33eb7a5d718), void _0c185e0e262d.dispatchEvent(new Event("\x69\x6e\x70\x75\x74", {
              bubbles: !0
            }));
          }
          document.execCommand?.("\x69\x6e\x73\x65\x72\x74\x54\x65\x78\x74", !1, _ac0949865c5e);
        } catch {}
      }, _0x87f761_3 = async _0c185e0e262d => {
        try {
          await (navigator.clipboard?.writeText(String(_0c185e0e262d || "")));
        } catch {
          try {
            document.execCommand?.("\x63\x6f\x70\x79");
          } catch {}
        }
      }, _0c185e0e262d = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _ac0949865c5e = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), _0x87f761_6 = _ddf67fabd730 => {
        try {
          _0c185e0e262d?.postMessage(_ddf67fabd730, "\x2a");
        } catch {}
        try {
          _ac0949865c5e && _ac0949865c5e !== _0c185e0e262d && _ac0949865c5e.postMessage(_ddf67fabd730, "\x2a");
        } catch {}
        try {
          window.parent?.postMessage(_ddf67fabd730, "\x2a");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_ddf67fabd730, "\x2a");
        } catch {}
      };
      window.addEventListener("\x6b\x65\x79\x64\x6f\x77\x6e", _0c185e0e262d => {
        const _ac0949865c5e = String(_0c185e0e262d.key || "").toLowerCase();
        if (_0c185e0e262d.altKey && !_0c185e0e262d.ctrlKey && !_0c185e0e262d.metaKey && 2 !== _0c185e0e262d.location && "\x61\x6c\x74" === _ac0949865c5e) return _0c185e0e262d.preventDefault(), 
        _0c185e0e262d.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x70\x72\x69\x6d\x65"
        });
        if (_0c185e0e262d.altKey && !_0c185e0e262d.ctrlKey && !_0c185e0e262d.metaKey && 2 !== _0c185e0e262d.location && _0x87f761_0(_0c185e0e262d.target) && /^[acxvzy]$/.test(_ac0949865c5e)) {
          if (_0c185e0e262d.preventDefault(), _0c185e0e262d.stopPropagation(), "\x61" === _ac0949865c5e) return void (_0c185e0e262d.target?.select ? _0c185e0e262d.target.select() : document.execCommand?.("\x73\x65\x6c\x65\x63\x74\x41\x6c\x6c"));
          if ("\x63" === _ac0949865c5e) return void _0x87f761_3(_0x87f761_1(_0c185e0e262d.target));
          if ("\x78" === _ac0949865c5e) {
            const _ac0949865c5e = _0x87f761_1(_0c185e0e262d.target);
            return _0x87f761_3(_ac0949865c5e), void _0x87f761_2(_0c185e0e262d.target, "");
          }
          if ("\x76" === _ac0949865c5e) return void navigator.clipboard?.readText?.().then(_ac0949865c5e => _0x87f761_2(_0c185e0e262d.target, _ac0949865c5e)).catch(() => {
            try {
              document.execCommand?.("\x70\x61\x73\x74\x65");
            } catch {}
          });
          if ("\x7a" === _ac0949865c5e) return void document.execCommand?.("\x75\x6e\x64\x6f");
          if ("\x79" === _ac0949865c5e) return void document.execCommand?.("\x72\x65\x64\x6f");
        }
        return !_0c185e0e262d.altKey || _0c185e0e262d.ctrlKey || _0c185e0e262d.metaKey || 2 === _0c185e0e262d.location || !/^[1-9]$/.test(_ac0949865c5e) && ![ "\x6c", "\x64", "\x74", "\x77", "\x72", "\x61\x72\x72\x6f\x77\x6c\x65\x66\x74", "\x61\x72\x72\x6f\x77\x72\x69\x67\x68\x74", "\x74\x61\x62" ].includes(_ac0949865c5e) ? void 0 : (_0c185e0e262d.preventDefault(), 
        _0c185e0e262d.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x73\x68\x6f\x72\x74\x63\x75\x74",
          key: _ac0949865c5e,
          code: _0c185e0e262d.code || "",
          location: _0c185e0e262d.location || 0,
          shiftKey: !!_0c185e0e262d.shiftKey
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
  }, _0x87f761_2 = _0c185e0e262d => {
    if (!_0c185e0e262d) return !1;
    try {
      return _0c185e0e262d.document.open(), _0c185e0e262d.document.write("\x3c\x21\x64\x6f\x63\x74\x79\x70\x65\x20\x68\x74\x6d\x6c\x3e\x3c\x68\x74\x6d\x6c\x3e\x3c\x68\x65\x61\x64\x3e\x3c\x6d\x65\x74\x61\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x22\x75\x74\x66\x2d\x38\x22\x3e\x3c\x6d\x65\x74\x61\x20\x6e\x61\x6d\x65\x3d\x22\x76\x69\x65\x77\x70\x6f\x72\x74\x22\x20\x63\x6f\x6e\x74\x65\x6e\x74\x3d\x22\x77\x69\x64\x74\x68\x3d\x64\x65\x76\x69\x63\x65\x2d\x77\x69\x64\x74\x68\x2c\x69\x6e\x69\x74\x69\x61\x6c\x2d\x73\x63\x61\x6c\x65\x3d\x31\x22\x3e\x3c\x74\x69\x74\x6c\x65\x3e\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61\x3c\x2f\x74\x69\x74\x6c\x65\x3e\x3c\x73\x74\x79\x6c\x65\x3e\x68\x74\x6d\x6c\x2c\x62\x6f\x64\x79\x7b\x6d\x61\x72\x67\x69\x6e\x3a\x30\x3b\x77\x69\x64\x74\x68\x3a\x31\x30\x30\x25\x3b\x68\x65\x69\x67\x68\x74\x3a\x31\x30\x30\x25\x3b\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x3a\x23\x66\x66\x66\x3b\x63\x6f\x6c\x6f\x72\x3a\x23\x31\x31\x31\x3b\x66\x6f\x6e\x74\x3a\x32\x38\x70\x78\x20\x52\x61\x6c\x65\x77\x61\x79\x2c\x41\x72\x69\x61\x6c\x2c\x73\x61\x6e\x73\x2d\x73\x65\x72\x69\x66\x7d\x62\x6f\x64\x79\x7b\x64\x69\x73\x70\x6c\x61\x79\x3a\x67\x72\x69\x64\x3b\x70\x6c\x61\x63\x65\x2d\x69\x74\x65\x6d\x73\x3a\x63\x65\x6e\x74\x65\x72\x3b\x74\x65\x78\x74\x2d\x61\x6c\x69\x67\x6e\x3a\x63\x65\x6e\x74\x65\x72\x7d\x6d\x61\x69\x6e\x7b\x70\x61\x64\x64\x69\x6e\x67\x3a\x32\x34\x70\x78\x7d\x3c\x2f\x73\x74\x79\x6c\x65\x3e\x3c\x2f\x68\x65\x61\x64\x3e\x3c\x62\x6f\x64\x79\x3e\x3c\x6d\x61\x69\x6e\x3e\x61\x72\x65\x20\x79\x6f\x75\x20\x74\x72\x79\x69\x6e\x67\x20\x74\x6f\x20\x68\x61\x63\x6b\x20\x6d\x65\x20\x73\x63\x61\x6d\x6d\x61\x3f\x3f\x3f\x3c\x2f\x6d\x61\x69\x6e\x3e\x3c\x2f\x62\x6f\x64\x79\x3e\x3c\x2f\x68\x74\x6d\x6c\x3e"), 
      _0c185e0e262d.document.close(), _0c185e0e262d.focus?.(), !0;
    } catch {
      return !1;
    }
  }, _0x87f761_3 = () => {
    const _0c185e0e262d = null;
    return {
      closed: !1,
      focus() {
        try {
          _0c185e0e262d?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _0c185e0e262d?.blur?.();
        } catch {}
      },
      close() {
        try {
          _0c185e0e262d?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return _0x87f761_2(_0c185e0e262d), this;
        },
        write() {
          _0x87f761_2(_0c185e0e262d);
        },
        writeln() {
          _0x87f761_2(_0c185e0e262d);
        },
        close() {
          _0x87f761_2(_0c185e0e262d);
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
          _0x87f761_2(_0c185e0e262d);
        },
        toString: () => "\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61"
      }
    };
  }, _0x87f761_4 = _0c185e0e262d => {
    const _ac0949865c5e = String(_0c185e0e262d || "").trim();
    if (/^(?:blob|data):/i.test(_ac0949865c5e)) return !1;
    const _ddf67fabd730 = _ac0949865c5e.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_ddf67fabd730);
  }, _0x87f761_5 = (_0c185e0e262d, _ac0949865c5e = "") => {
    const _ddf67fabd730 = String(_0c185e0e262d || "").trim();
    if (!_ddf67fabd730 || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "\x6e\x79\x78\x3a\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x2d\x72\x65\x71\x75\x65\x73\x74",
        url: _ddf67fabd730,
        filename: String(_ac0949865c5e || ""),
        sourceUrl: String(location.href || "")
      }, "\x2a"), !0;
    } catch {
      return !1;
    }
  };
  let _0x87f761_6 = (..._ac0949865c5e) => _0x87f761_4(_ac0949865c5e[0]) && _0x87f761_5(_ac0949865c5e[0]) ? null : !_0x87f761_1() && _0c185e0e262d ? _0c185e0e262d(..._ac0949865c5e) : _0x87f761_3();
  try {
    "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _0c185e0e262d && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof \u{50}\u{72}\u{6f}\u{78}\u{79} && (_0x87f761_6 = new \u{50}\u{72}\u{6f}\u{78}\u{79}(_0c185e0e262d, {
      apply: (_0c185e0e262d, _ac0949865c5e, _ddf67fabd730) => _0x87f761_4(_ddf67fabd730[0]) && _0x87f761_5(_ddf67fabd730[0]) ? null : _0x87f761_1() ? _0x87f761_3() : Reflect.apply(_0c185e0e262d, _ac0949865c5e, _ddf67fabd730),
      construct(_0c185e0e262d, _ac0949865c5e, _ddf67fabd730) {
        if (!_0x87f761_1()) try {
          return Reflect.construct(_0c185e0e262d, _ac0949865c5e, _ddf67fabd730);
        } catch {
          return Reflect.apply(_0c185e0e262d, window, _ac0949865c5e);
        }
        return _0x87f761_3();
      },
      get: (_0c185e0e262d, _ac0949865c5e, _ddf67fabd730) => "\x5f\x5f\x6e\x79\x78\x50\x6f\x70\x75\x70\x47\x75\x61\x72\x64" === _ac0949865c5e || ("\x74\x6f\x53\x74\x72\x69\x6e\x67" === _ac0949865c5e ? () => "\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x6f\x70\x65\x6e\x28\x29\x20\x7b\x20\x5b\x6e\x61\x74\x69\x76\x65\x20\x63\x6f\x64\x65\x5d\x20\x7d" : Reflect.get(_0c185e0e262d, _ac0949865c5e, _ddf67fabd730))
    }));
  } catch {}
  const _0x87f761_7 = _0c185e0e262d => {
    const _ac0949865c5e = String(_0c185e0e262d || "").toLowerCase();
    return _ac0949865c5e && ![ "\x5f\x73\x65\x6c\x66", "\x5f\x70\x61\x72\x65\x6e\x74", "\x5f\x74\x6f\x70" ].includes(_ac0949865c5e);
  }, _0x87f761_8 = _0c185e0e262d => !!_0c185e0e262d && (!!_0c185e0e262d.hasAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || _0x87f761_4(_0c185e0e262d.href || _0c185e0e262d.getAttribute("\x68\x72\x65\x66") || ""));
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
    const _0c185e0e262d = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!_0x87f761_8(this) || !_0x87f761_5(this.href || this.getAttribute("\x68\x72\x65\x66"), this.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "")) {
        if (!_0x87f761_1() || !_0x87f761_7(this.target)) return _0c185e0e262d.call(this);
        _0x87f761_3();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("\x63\x6c\x69\x63\x6b", _0c185e0e262d => {
    const _ac0949865c5e = _0c185e0e262d.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_ac0949865c5e) return _0x87f761_8(_ac0949865c5e) && _0x87f761_5(_ac0949865c5e.href || _ac0949865c5e.getAttribute("\x68\x72\x65\x66"), _ac0949865c5e.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_0c185e0e262d.preventDefault(), 
    void _0c185e0e262d.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_ac0949865c5e.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_0c185e0e262d.preventDefault(), 
    _0c185e0e262d.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x61\x75\x78\x63\x6c\x69\x63\x6b", _0c185e0e262d => {
    const _ac0949865c5e = _0c185e0e262d.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_ac0949865c5e) return _0x87f761_8(_ac0949865c5e) && _0x87f761_5(_ac0949865c5e.href || _ac0949865c5e.getAttribute("\x68\x72\x65\x66"), _ac0949865c5e.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_0c185e0e262d.preventDefault(), 
    void _0c185e0e262d.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_ac0949865c5e.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_0c185e0e262d.preventDefault(), 
    _0c185e0e262d.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x73\x75\x62\x6d\x69\x74", _0c185e0e262d => {
    if (!_0x87f761_1()) return;
    const _ac0949865c5e = _0c185e0e262d.target;
    _ac0949865c5e && "\x46\x4f\x52\x4d" === String(_ac0949865c5e.tagName || "").toUpperCase() && _0x87f761_7(_ac0949865c5e.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_0c185e0e262d.preventDefault(), 
    _0c185e0e262d.stopImmediatePropagation(), _0x87f761_3());
  }, !0));
  const _0x87f761_9 = _0c185e0e262d => {
    const _ac0949865c5e = window[_0c185e0e262d];
    if ("\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _ac0949865c5e && !_ac0949865c5e.__nyxWrapped) try {
      Object.setPrototypeOf(_0x87f761_2, _ac0949865c5e), _0x87f761_2.prototype = _ac0949865c5e.prototype, 
      Object.defineProperty(_0x87f761_2, "\x5f\x5f\x6e\x79\x78\x57\x72\x61\x70\x70\x65\x64", {
        value: !0
      }), window[_0c185e0e262d] = _0x87f761_2;
    } catch {}
    function _0x87f761_2(_0c185e0e262d, _ddf67fabd730, _bdf00ddec719) {
      let _8493ca82a1db = Number(_0c185e0e262d), _a33eb7a5d718 = Number(_ddf67fabd730);
      return (!Number.isFinite(_8493ca82a1db) || _8493ca82a1db < 0) && (_8493ca82a1db = 0), 
      (!Number.isFinite(_a33eb7a5d718) || _a33eb7a5d718 <= _8493ca82a1db) && (_a33eb7a5d718 = _8493ca82a1db + .001), 
      Reflect.construct(_ac0949865c5e, [ _8493ca82a1db, _a33eb7a5d718, null == _bdf00ddec719 ? "" : String(_bdf00ddec719) ], new.target || _0x87f761_2);
    }
  };
  _0x87f761_9("\x56\x54\x54\x43\x75\x65"), _0x87f761_9("\x54\x65\x78\x74\x54\x72\x61\x63\x6b\x43\x75\x65");
})();
