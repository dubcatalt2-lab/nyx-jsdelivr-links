(() => {
  if ("\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" == typeof window || window.\u{5f}\u{5f}\u{6e}\u{79}\u{78}\u{53}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74}\u{47}\u{75}\u{61}\u{72}\u{64}\u{73}) return;
  window.\u{5f}\u{5f}\u{6e}\u{79}\u{78}\u{53}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74}\u{47}\u{75}\u{61}\u{72}\u{64}\u{73} = !0;
  const _8c00968b6c10 = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "\x74\x72\x75\x73\x74\x65\x64\x54\x79\x70\x65\x73", {
      configurable: !0,
      value: {
        createPolicy: (_8c00968b6c10, _dbf91083615f = {}) => ({
          createHTML: _8c00968b6c10 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _dbf91083615f.createHTML ? _dbf91083615f.createHTML(_8c00968b6c10) : _8c00968b6c10,
          createScript: _8c00968b6c10 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _dbf91083615f.createScript ? _dbf91083615f.createScript(_8c00968b6c10) : _8c00968b6c10,
          createScriptURL: _8c00968b6c10 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _dbf91083615f.createScriptURL ? _dbf91083615f.createScriptURL(_8c00968b6c10) : _8c00968b6c10
        })
      }
    });
  } catch {}
  try {
    const _8c00968b6c10 = Object.getOwnPropertyDescriptor(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74"), _dbf91083615f = document.createElement("\x73\x63\x72\x69\x70\x74");
    _dbf91083615f.setAttribute("\x6e\x6f\x6e\x63\x65", ""), Object.defineProperty(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74", {
      configurable: !0,
      get() {
        let _54f28770ab56 = null;
        try {
          _54f28770ab56 = _8c00968b6c10?.get?.call(this) || null;
        } catch {}
        return _54f28770ab56 || this.querySelector?.("\x73\x63\x72\x69\x70\x74\x5b\x73\x72\x63\x5d\x2c\x73\x63\x72\x69\x70\x74") || _dbf91083615f;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const _0x87f761_0 = _8c00968b6c10 => !(!_8c00968b6c10 || !_8c00968b6c10.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_8c00968b6c10.tagName || "")), _0x87f761_1 = _8c00968b6c10 => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_8c00968b6c10?.tagName || "") ? String(_8c00968b6c10.value || "").slice(_8c00968b6c10.selectionStart || 0, _8c00968b6c10.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, _0x87f761_2 = (_8c00968b6c10, _dbf91083615f) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_8c00968b6c10?.tagName || "")) {
            const _54f28770ab56 = _8c00968b6c10.selectionStart || 0, _8486e4fe976a = _8c00968b6c10.selectionEnd || 0, _b8b8c44dbb97 = String(_8c00968b6c10.value || "");
            _8c00968b6c10.value = _b8b8c44dbb97.slice(0, _54f28770ab56) + _dbf91083615f + _b8b8c44dbb97.slice(_8486e4fe976a);
            const _bc9943f78d49 = _54f28770ab56 + String(_dbf91083615f).length;
            return _8c00968b6c10.setSelectionRange(_bc9943f78d49, _bc9943f78d49), void _8c00968b6c10.dispatchEvent(new Event("\x69\x6e\x70\x75\x74", {
              bubbles: !0
            }));
          }
          document.execCommand?.("\x69\x6e\x73\x65\x72\x74\x54\x65\x78\x74", !1, _dbf91083615f);
        } catch {}
      }, _0x87f761_3 = async _8c00968b6c10 => {
        try {
          await (navigator.clipboard?.writeText(String(_8c00968b6c10 || "")));
        } catch {
          try {
            document.execCommand?.("\x63\x6f\x70\x79");
          } catch {}
        }
      }, _8c00968b6c10 = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _dbf91083615f = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), _0x87f761_6 = _54f28770ab56 => {
        try {
          _8c00968b6c10?.postMessage(_54f28770ab56, "\x2a");
        } catch {}
        try {
          _dbf91083615f && _dbf91083615f !== _8c00968b6c10 && _dbf91083615f.postMessage(_54f28770ab56, "\x2a");
        } catch {}
        try {
          window.parent?.postMessage(_54f28770ab56, "\x2a");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_54f28770ab56, "\x2a");
        } catch {}
      };
      window.addEventListener("\x6b\x65\x79\x64\x6f\x77\x6e", _8c00968b6c10 => {
        const _dbf91083615f = String(_8c00968b6c10.key || "").toLowerCase();
        if (_8c00968b6c10.altKey && !_8c00968b6c10.ctrlKey && !_8c00968b6c10.metaKey && 2 !== _8c00968b6c10.location && "\x61\x6c\x74" === _dbf91083615f) return _8c00968b6c10.preventDefault(), 
        _8c00968b6c10.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x70\x72\x69\x6d\x65"
        });
        if (_8c00968b6c10.altKey && !_8c00968b6c10.ctrlKey && !_8c00968b6c10.metaKey && 2 !== _8c00968b6c10.location && _0x87f761_0(_8c00968b6c10.target) && /^[acxvzy]$/.test(_dbf91083615f)) {
          if (_8c00968b6c10.preventDefault(), _8c00968b6c10.stopPropagation(), "\x61" === _dbf91083615f) return void (_8c00968b6c10.target?.select ? _8c00968b6c10.target.select() : document.execCommand?.("\x73\x65\x6c\x65\x63\x74\x41\x6c\x6c"));
          if ("\x63" === _dbf91083615f) return void _0x87f761_3(_0x87f761_1(_8c00968b6c10.target));
          if ("\x78" === _dbf91083615f) {
            const _dbf91083615f = _0x87f761_1(_8c00968b6c10.target);
            return _0x87f761_3(_dbf91083615f), void _0x87f761_2(_8c00968b6c10.target, "");
          }
          if ("\x76" === _dbf91083615f) return void navigator.clipboard?.readText?.().then(_dbf91083615f => _0x87f761_2(_8c00968b6c10.target, _dbf91083615f)).catch(() => {
            try {
              document.execCommand?.("\x70\x61\x73\x74\x65");
            } catch {}
          });
          if ("\x7a" === _dbf91083615f) return void document.execCommand?.("\x75\x6e\x64\x6f");
          if ("\x79" === _dbf91083615f) return void document.execCommand?.("\x72\x65\x64\x6f");
        }
        return !_8c00968b6c10.altKey || _8c00968b6c10.ctrlKey || _8c00968b6c10.metaKey || 2 === _8c00968b6c10.location || !/^[1-9]$/.test(_dbf91083615f) && ![ "\x6c", "\x64", "\x74", "\x77", "\x72", "\x61\x72\x72\x6f\x77\x6c\x65\x66\x74", "\x61\x72\x72\x6f\x77\x72\x69\x67\x68\x74", "\x74\x61\x62" ].includes(_dbf91083615f) ? void 0 : (_8c00968b6c10.preventDefault(), 
        _8c00968b6c10.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x73\x68\x6f\x72\x74\x63\x75\x74",
          key: _dbf91083615f,
          code: _8c00968b6c10.code || "",
          location: _8c00968b6c10.location || 0,
          shiftKey: !!_8c00968b6c10.shiftKey
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
  }, _0x87f761_2 = _8c00968b6c10 => {
    if (!_8c00968b6c10) return !1;
    try {
      return _8c00968b6c10.document.open(), _8c00968b6c10.document.write("\x3c\x21\x64\x6f\x63\x74\x79\x70\x65\x20\x68\x74\x6d\x6c\x3e\x3c\x68\x74\x6d\x6c\x3e\x3c\x68\x65\x61\x64\x3e\x3c\x6d\x65\x74\x61\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x22\x75\x74\x66\x2d\x38\x22\x3e\x3c\x6d\x65\x74\x61\x20\x6e\x61\x6d\x65\x3d\x22\x76\x69\x65\x77\x70\x6f\x72\x74\x22\x20\x63\x6f\x6e\x74\x65\x6e\x74\x3d\x22\x77\x69\x64\x74\x68\x3d\x64\x65\x76\x69\x63\x65\x2d\x77\x69\x64\x74\x68\x2c\x69\x6e\x69\x74\x69\x61\x6c\x2d\x73\x63\x61\x6c\x65\x3d\x31\x22\x3e\x3c\x74\x69\x74\x6c\x65\x3e\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61\x3c\x2f\x74\x69\x74\x6c\x65\x3e\x3c\x73\x74\x79\x6c\x65\x3e\x68\x74\x6d\x6c\x2c\x62\x6f\x64\x79\x7b\x6d\x61\x72\x67\x69\x6e\x3a\x30\x3b\x77\x69\x64\x74\x68\x3a\x31\x30\x30\x25\x3b\x68\x65\x69\x67\x68\x74\x3a\x31\x30\x30\x25\x3b\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x3a\x23\x66\x66\x66\x3b\x63\x6f\x6c\x6f\x72\x3a\x23\x31\x31\x31\x3b\x66\x6f\x6e\x74\x3a\x32\x38\x70\x78\x20\x52\x61\x6c\x65\x77\x61\x79\x2c\x41\x72\x69\x61\x6c\x2c\x73\x61\x6e\x73\x2d\x73\x65\x72\x69\x66\x7d\x62\x6f\x64\x79\x7b\x64\x69\x73\x70\x6c\x61\x79\x3a\x67\x72\x69\x64\x3b\x70\x6c\x61\x63\x65\x2d\x69\x74\x65\x6d\x73\x3a\x63\x65\x6e\x74\x65\x72\x3b\x74\x65\x78\x74\x2d\x61\x6c\x69\x67\x6e\x3a\x63\x65\x6e\x74\x65\x72\x7d\x6d\x61\x69\x6e\x7b\x70\x61\x64\x64\x69\x6e\x67\x3a\x32\x34\x70\x78\x7d\x3c\x2f\x73\x74\x79\x6c\x65\x3e\x3c\x2f\x68\x65\x61\x64\x3e\x3c\x62\x6f\x64\x79\x3e\x3c\x6d\x61\x69\x6e\x3e\x61\x72\x65\x20\x79\x6f\x75\x20\x74\x72\x79\x69\x6e\x67\x20\x74\x6f\x20\x68\x61\x63\x6b\x20\x6d\x65\x20\x73\x63\x61\x6d\x6d\x61\x3f\x3f\x3f\x3c\x2f\x6d\x61\x69\x6e\x3e\x3c\x2f\x62\x6f\x64\x79\x3e\x3c\x2f\x68\x74\x6d\x6c\x3e"), 
      _8c00968b6c10.document.close(), _8c00968b6c10.focus?.(), !0;
    } catch {
      return !1;
    }
  }, _0x87f761_3 = () => {
    const _8c00968b6c10 = null;
    return {
      closed: !1,
      focus() {
        try {
          _8c00968b6c10?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _8c00968b6c10?.blur?.();
        } catch {}
      },
      close() {
        try {
          _8c00968b6c10?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return _0x87f761_2(_8c00968b6c10), this;
        },
        write() {
          _0x87f761_2(_8c00968b6c10);
        },
        writeln() {
          _0x87f761_2(_8c00968b6c10);
        },
        close() {
          _0x87f761_2(_8c00968b6c10);
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
          _0x87f761_2(_8c00968b6c10);
        },
        toString: () => "\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61"
      }
    };
  }, _0x87f761_4 = _8c00968b6c10 => {
    const _dbf91083615f = String(_8c00968b6c10 || "").trim();
    if (/^(?:blob|data):/i.test(_dbf91083615f)) return !1;
    const _54f28770ab56 = _dbf91083615f.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_54f28770ab56);
  }, _0x87f761_5 = (_8c00968b6c10, _dbf91083615f = "") => {
    const _54f28770ab56 = String(_8c00968b6c10 || "").trim();
    if (!_54f28770ab56 || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "\x6e\x79\x78\x3a\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x2d\x72\x65\x71\x75\x65\x73\x74",
        url: _54f28770ab56,
        filename: String(_dbf91083615f || ""),
        sourceUrl: String(location.href || "")
      }, "\x2a"), !0;
    } catch {
      return !1;
    }
  };
  let _0x87f761_6 = (..._dbf91083615f) => _0x87f761_4(_dbf91083615f[0]) && _0x87f761_5(_dbf91083615f[0]) ? null : !_0x87f761_1() && _8c00968b6c10 ? _8c00968b6c10(..._dbf91083615f) : _0x87f761_3();
  try {
    "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _8c00968b6c10 && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof \u{50}\u{72}\u{6f}\u{78}\u{79} && (_0x87f761_6 = new \u{50}\u{72}\u{6f}\u{78}\u{79}(_8c00968b6c10, {
      apply: (_8c00968b6c10, _dbf91083615f, _54f28770ab56) => _0x87f761_4(_54f28770ab56[0]) && _0x87f761_5(_54f28770ab56[0]) ? null : _0x87f761_1() ? _0x87f761_3() : Reflect.apply(_8c00968b6c10, _dbf91083615f, _54f28770ab56),
      construct(_8c00968b6c10, _dbf91083615f, _54f28770ab56) {
        if (!_0x87f761_1()) try {
          return Reflect.construct(_8c00968b6c10, _dbf91083615f, _54f28770ab56);
        } catch {
          return Reflect.apply(_8c00968b6c10, window, _dbf91083615f);
        }
        return _0x87f761_3();
      },
      get: (_8c00968b6c10, _dbf91083615f, _54f28770ab56) => "\x5f\x5f\x6e\x79\x78\x50\x6f\x70\x75\x70\x47\x75\x61\x72\x64" === _dbf91083615f || ("\x74\x6f\x53\x74\x72\x69\x6e\x67" === _dbf91083615f ? () => "\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x6f\x70\x65\x6e\x28\x29\x20\x7b\x20\x5b\x6e\x61\x74\x69\x76\x65\x20\x63\x6f\x64\x65\x5d\x20\x7d" : Reflect.get(_8c00968b6c10, _dbf91083615f, _54f28770ab56))
    }));
  } catch {}
  const _0x87f761_7 = _8c00968b6c10 => {
    const _dbf91083615f = String(_8c00968b6c10 || "").toLowerCase();
    return _dbf91083615f && ![ "\x5f\x73\x65\x6c\x66", "\x5f\x70\x61\x72\x65\x6e\x74", "\x5f\x74\x6f\x70" ].includes(_dbf91083615f);
  }, _0x87f761_8 = _8c00968b6c10 => !!_8c00968b6c10 && (!!_8c00968b6c10.hasAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || _0x87f761_4(_8c00968b6c10.href || _8c00968b6c10.getAttribute("\x68\x72\x65\x66") || ""));
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
    const _8c00968b6c10 = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!_0x87f761_8(this) || !_0x87f761_5(this.href || this.getAttribute("\x68\x72\x65\x66"), this.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "")) {
        if (!_0x87f761_1() || !_0x87f761_7(this.target)) return _8c00968b6c10.call(this);
        _0x87f761_3();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("\x63\x6c\x69\x63\x6b", _8c00968b6c10 => {
    const _dbf91083615f = _8c00968b6c10.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_dbf91083615f) return _0x87f761_8(_dbf91083615f) && _0x87f761_5(_dbf91083615f.href || _dbf91083615f.getAttribute("\x68\x72\x65\x66"), _dbf91083615f.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_8c00968b6c10.preventDefault(), 
    void _8c00968b6c10.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_dbf91083615f.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_8c00968b6c10.preventDefault(), 
    _8c00968b6c10.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x61\x75\x78\x63\x6c\x69\x63\x6b", _8c00968b6c10 => {
    const _dbf91083615f = _8c00968b6c10.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_dbf91083615f) return _0x87f761_8(_dbf91083615f) && _0x87f761_5(_dbf91083615f.href || _dbf91083615f.getAttribute("\x68\x72\x65\x66"), _dbf91083615f.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_8c00968b6c10.preventDefault(), 
    void _8c00968b6c10.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_dbf91083615f.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_8c00968b6c10.preventDefault(), 
    _8c00968b6c10.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x73\x75\x62\x6d\x69\x74", _8c00968b6c10 => {
    if (!_0x87f761_1()) return;
    const _dbf91083615f = _8c00968b6c10.target;
    _dbf91083615f && "\x46\x4f\x52\x4d" === String(_dbf91083615f.tagName || "").toUpperCase() && _0x87f761_7(_dbf91083615f.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_8c00968b6c10.preventDefault(), 
    _8c00968b6c10.stopImmediatePropagation(), _0x87f761_3());
  }, !0));
  const _0x87f761_9 = _8c00968b6c10 => {
    const _dbf91083615f = window[_8c00968b6c10];
    if ("\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _dbf91083615f && !_dbf91083615f.__nyxWrapped) try {
      Object.setPrototypeOf(_0x87f761_2, _dbf91083615f), _0x87f761_2.prototype = _dbf91083615f.prototype, 
      Object.defineProperty(_0x87f761_2, "\x5f\x5f\x6e\x79\x78\x57\x72\x61\x70\x70\x65\x64", {
        value: !0
      }), window[_8c00968b6c10] = _0x87f761_2;
    } catch {}
    function _0x87f761_2(_8c00968b6c10, _54f28770ab56, _8486e4fe976a) {
      let _b8b8c44dbb97 = Number(_8c00968b6c10), _bc9943f78d49 = Number(_54f28770ab56);
      return (!Number.isFinite(_b8b8c44dbb97) || _b8b8c44dbb97 < 0) && (_b8b8c44dbb97 = 0), 
      (!Number.isFinite(_bc9943f78d49) || _bc9943f78d49 <= _b8b8c44dbb97) && (_bc9943f78d49 = _b8b8c44dbb97 + .001), 
      Reflect.construct(_dbf91083615f, [ _b8b8c44dbb97, _bc9943f78d49, null == _8486e4fe976a ? "" : String(_8486e4fe976a) ], new.target || _0x87f761_2);
    }
  };
  _0x87f761_9("\x56\x54\x54\x43\x75\x65"), _0x87f761_9("\x54\x65\x78\x74\x54\x72\x61\x63\x6b\x43\x75\x65");
})();
