(() => {
  if ("\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" == typeof window || window.\u{5f}\u{5f}\u{6e}\u{79}\u{78}\u{53}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74}\u{47}\u{75}\u{61}\u{72}\u{64}\u{73}) return;
  window.\u{5f}\u{5f}\u{6e}\u{79}\u{78}\u{53}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74}\u{47}\u{75}\u{61}\u{72}\u{64}\u{73} = !0;
  const _a0727e0a9876 = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "\x74\x72\x75\x73\x74\x65\x64\x54\x79\x70\x65\x73", {
      configurable: !0,
      value: {
        createPolicy: (_a0727e0a9876, _6ab5c2800a9b = {}) => ({
          createHTML: _a0727e0a9876 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _6ab5c2800a9b.createHTML ? _6ab5c2800a9b.createHTML(_a0727e0a9876) : _a0727e0a9876,
          createScript: _a0727e0a9876 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _6ab5c2800a9b.createScript ? _6ab5c2800a9b.createScript(_a0727e0a9876) : _a0727e0a9876,
          createScriptURL: _a0727e0a9876 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _6ab5c2800a9b.createScriptURL ? _6ab5c2800a9b.createScriptURL(_a0727e0a9876) : _a0727e0a9876
        })
      }
    });
  } catch {}
  try {
    const _a0727e0a9876 = Object.getOwnPropertyDescriptor(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74"), _6ab5c2800a9b = document.createElement("\x73\x63\x72\x69\x70\x74");
    _6ab5c2800a9b.setAttribute("\x6e\x6f\x6e\x63\x65", ""), Object.defineProperty(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74", {
      configurable: !0,
      get() {
        let _8b2d95fdb00f = null;
        try {
          _8b2d95fdb00f = _a0727e0a9876?.get?.call(this) || null;
        } catch {}
        return _8b2d95fdb00f || this.querySelector?.("\x73\x63\x72\x69\x70\x74\x5b\x73\x72\x63\x5d\x2c\x73\x63\x72\x69\x70\x74") || _6ab5c2800a9b;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const _0x87f761_0 = _a0727e0a9876 => !(!_a0727e0a9876 || !_a0727e0a9876.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_a0727e0a9876.tagName || "")), _0x87f761_1 = _a0727e0a9876 => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_a0727e0a9876?.tagName || "") ? String(_a0727e0a9876.value || "").slice(_a0727e0a9876.selectionStart || 0, _a0727e0a9876.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, _0x87f761_2 = (_a0727e0a9876, _6ab5c2800a9b) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_a0727e0a9876?.tagName || "")) {
            const _8b2d95fdb00f = _a0727e0a9876.selectionStart || 0, _b0b9b4c5940d = _a0727e0a9876.selectionEnd || 0, _2a743ce8eca1 = String(_a0727e0a9876.value || "");
            _a0727e0a9876.value = _2a743ce8eca1.slice(0, _8b2d95fdb00f) + _6ab5c2800a9b + _2a743ce8eca1.slice(_b0b9b4c5940d);
            const _871db46f3721 = _8b2d95fdb00f + String(_6ab5c2800a9b).length;
            return _a0727e0a9876.setSelectionRange(_871db46f3721, _871db46f3721), void _a0727e0a9876.dispatchEvent(new Event("\x69\x6e\x70\x75\x74", {
              bubbles: !0
            }));
          }
          document.execCommand?.("\x69\x6e\x73\x65\x72\x74\x54\x65\x78\x74", !1, _6ab5c2800a9b);
        } catch {}
      }, _0x87f761_3 = async _a0727e0a9876 => {
        try {
          await (navigator.clipboard?.writeText(String(_a0727e0a9876 || "")));
        } catch {
          try {
            document.execCommand?.("\x63\x6f\x70\x79");
          } catch {}
        }
      }, _a0727e0a9876 = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _6ab5c2800a9b = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), _0x87f761_6 = _8b2d95fdb00f => {
        try {
          _a0727e0a9876?.postMessage(_8b2d95fdb00f, "\x2a");
        } catch {}
        try {
          _6ab5c2800a9b && _6ab5c2800a9b !== _a0727e0a9876 && _6ab5c2800a9b.postMessage(_8b2d95fdb00f, "\x2a");
        } catch {}
        try {
          window.parent?.postMessage(_8b2d95fdb00f, "\x2a");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_8b2d95fdb00f, "\x2a");
        } catch {}
      };
      window.addEventListener("\x6b\x65\x79\x64\x6f\x77\x6e", _a0727e0a9876 => {
        const _6ab5c2800a9b = String(_a0727e0a9876.key || "").toLowerCase();
        if (_a0727e0a9876.altKey && !_a0727e0a9876.ctrlKey && !_a0727e0a9876.metaKey && 2 !== _a0727e0a9876.location && "\x61\x6c\x74" === _6ab5c2800a9b) return _a0727e0a9876.preventDefault(), 
        _a0727e0a9876.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x70\x72\x69\x6d\x65"
        });
        if (_a0727e0a9876.altKey && !_a0727e0a9876.ctrlKey && !_a0727e0a9876.metaKey && 2 !== _a0727e0a9876.location && _0x87f761_0(_a0727e0a9876.target) && /^[acxvzy]$/.test(_6ab5c2800a9b)) {
          if (_a0727e0a9876.preventDefault(), _a0727e0a9876.stopPropagation(), "\x61" === _6ab5c2800a9b) return void (_a0727e0a9876.target?.select ? _a0727e0a9876.target.select() : document.execCommand?.("\x73\x65\x6c\x65\x63\x74\x41\x6c\x6c"));
          if ("\x63" === _6ab5c2800a9b) return void _0x87f761_3(_0x87f761_1(_a0727e0a9876.target));
          if ("\x78" === _6ab5c2800a9b) {
            const _6ab5c2800a9b = _0x87f761_1(_a0727e0a9876.target);
            return _0x87f761_3(_6ab5c2800a9b), void _0x87f761_2(_a0727e0a9876.target, "");
          }
          if ("\x76" === _6ab5c2800a9b) return void navigator.clipboard?.readText?.().then(_6ab5c2800a9b => _0x87f761_2(_a0727e0a9876.target, _6ab5c2800a9b)).catch(() => {
            try {
              document.execCommand?.("\x70\x61\x73\x74\x65");
            } catch {}
          });
          if ("\x7a" === _6ab5c2800a9b) return void document.execCommand?.("\x75\x6e\x64\x6f");
          if ("\x79" === _6ab5c2800a9b) return void document.execCommand?.("\x72\x65\x64\x6f");
        }
        return !_a0727e0a9876.altKey || _a0727e0a9876.ctrlKey || _a0727e0a9876.metaKey || 2 === _a0727e0a9876.location || !/^[1-9]$/.test(_6ab5c2800a9b) && ![ "\x6c", "\x64", "\x74", "\x77", "\x72", "\x61\x72\x72\x6f\x77\x6c\x65\x66\x74", "\x61\x72\x72\x6f\x77\x72\x69\x67\x68\x74", "\x74\x61\x62" ].includes(_6ab5c2800a9b) ? void 0 : (_a0727e0a9876.preventDefault(), 
        _a0727e0a9876.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x73\x68\x6f\x72\x74\x63\x75\x74",
          key: _6ab5c2800a9b,
          code: _a0727e0a9876.code || "",
          location: _a0727e0a9876.location || 0,
          shiftKey: !!_a0727e0a9876.shiftKey
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
  }, _0x87f761_2 = _a0727e0a9876 => {
    if (!_a0727e0a9876) return !1;
    try {
      return _a0727e0a9876.document.open(), _a0727e0a9876.document.write("\x3c\x21\x64\x6f\x63\x74\x79\x70\x65\x20\x68\x74\x6d\x6c\x3e\x3c\x68\x74\x6d\x6c\x3e\x3c\x68\x65\x61\x64\x3e\x3c\x6d\x65\x74\x61\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x22\x75\x74\x66\x2d\x38\x22\x3e\x3c\x6d\x65\x74\x61\x20\x6e\x61\x6d\x65\x3d\x22\x76\x69\x65\x77\x70\x6f\x72\x74\x22\x20\x63\x6f\x6e\x74\x65\x6e\x74\x3d\x22\x77\x69\x64\x74\x68\x3d\x64\x65\x76\x69\x63\x65\x2d\x77\x69\x64\x74\x68\x2c\x69\x6e\x69\x74\x69\x61\x6c\x2d\x73\x63\x61\x6c\x65\x3d\x31\x22\x3e\x3c\x74\x69\x74\x6c\x65\x3e\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61\x3c\x2f\x74\x69\x74\x6c\x65\x3e\x3c\x73\x74\x79\x6c\x65\x3e\x68\x74\x6d\x6c\x2c\x62\x6f\x64\x79\x7b\x6d\x61\x72\x67\x69\x6e\x3a\x30\x3b\x77\x69\x64\x74\x68\x3a\x31\x30\x30\x25\x3b\x68\x65\x69\x67\x68\x74\x3a\x31\x30\x30\x25\x3b\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x3a\x23\x66\x66\x66\x3b\x63\x6f\x6c\x6f\x72\x3a\x23\x31\x31\x31\x3b\x66\x6f\x6e\x74\x3a\x32\x38\x70\x78\x20\x52\x61\x6c\x65\x77\x61\x79\x2c\x41\x72\x69\x61\x6c\x2c\x73\x61\x6e\x73\x2d\x73\x65\x72\x69\x66\x7d\x62\x6f\x64\x79\x7b\x64\x69\x73\x70\x6c\x61\x79\x3a\x67\x72\x69\x64\x3b\x70\x6c\x61\x63\x65\x2d\x69\x74\x65\x6d\x73\x3a\x63\x65\x6e\x74\x65\x72\x3b\x74\x65\x78\x74\x2d\x61\x6c\x69\x67\x6e\x3a\x63\x65\x6e\x74\x65\x72\x7d\x6d\x61\x69\x6e\x7b\x70\x61\x64\x64\x69\x6e\x67\x3a\x32\x34\x70\x78\x7d\x3c\x2f\x73\x74\x79\x6c\x65\x3e\x3c\x2f\x68\x65\x61\x64\x3e\x3c\x62\x6f\x64\x79\x3e\x3c\x6d\x61\x69\x6e\x3e\x61\x72\x65\x20\x79\x6f\x75\x20\x74\x72\x79\x69\x6e\x67\x20\x74\x6f\x20\x68\x61\x63\x6b\x20\x6d\x65\x20\x73\x63\x61\x6d\x6d\x61\x3f\x3f\x3f\x3c\x2f\x6d\x61\x69\x6e\x3e\x3c\x2f\x62\x6f\x64\x79\x3e\x3c\x2f\x68\x74\x6d\x6c\x3e"), 
      _a0727e0a9876.document.close(), _a0727e0a9876.focus?.(), !0;
    } catch {
      return !1;
    }
  }, _0x87f761_3 = () => {
    const _a0727e0a9876 = null;
    return {
      closed: !1,
      focus() {
        try {
          _a0727e0a9876?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _a0727e0a9876?.blur?.();
        } catch {}
      },
      close() {
        try {
          _a0727e0a9876?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return _0x87f761_2(_a0727e0a9876), this;
        },
        write() {
          _0x87f761_2(_a0727e0a9876);
        },
        writeln() {
          _0x87f761_2(_a0727e0a9876);
        },
        close() {
          _0x87f761_2(_a0727e0a9876);
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
          _0x87f761_2(_a0727e0a9876);
        },
        toString: () => "\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61"
      }
    };
  }, _0x87f761_4 = _a0727e0a9876 => {
    const _6ab5c2800a9b = String(_a0727e0a9876 || "").trim();
    if (/^(?:blob|data):/i.test(_6ab5c2800a9b)) return !1;
    const _8b2d95fdb00f = _6ab5c2800a9b.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_8b2d95fdb00f);
  }, _0x87f761_5 = (_a0727e0a9876, _6ab5c2800a9b = "") => {
    const _8b2d95fdb00f = String(_a0727e0a9876 || "").trim();
    if (!_8b2d95fdb00f || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "\x6e\x79\x78\x3a\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x2d\x72\x65\x71\x75\x65\x73\x74",
        url: _8b2d95fdb00f,
        filename: String(_6ab5c2800a9b || ""),
        sourceUrl: String(location.href || "")
      }, "\x2a"), !0;
    } catch {
      return !1;
    }
  };
  let _0x87f761_6 = (..._6ab5c2800a9b) => _0x87f761_4(_6ab5c2800a9b[0]) && _0x87f761_5(_6ab5c2800a9b[0]) ? null : !_0x87f761_1() && _a0727e0a9876 ? _a0727e0a9876(..._6ab5c2800a9b) : _0x87f761_3();
  try {
    "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _a0727e0a9876 && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof \u{50}\u{72}\u{6f}\u{78}\u{79} && (_0x87f761_6 = new \u{50}\u{72}\u{6f}\u{78}\u{79}(_a0727e0a9876, {
      apply: (_a0727e0a9876, _6ab5c2800a9b, _8b2d95fdb00f) => _0x87f761_4(_8b2d95fdb00f[0]) && _0x87f761_5(_8b2d95fdb00f[0]) ? null : _0x87f761_1() ? _0x87f761_3() : Reflect.apply(_a0727e0a9876, _6ab5c2800a9b, _8b2d95fdb00f),
      construct(_a0727e0a9876, _6ab5c2800a9b, _8b2d95fdb00f) {
        if (!_0x87f761_1()) try {
          return Reflect.construct(_a0727e0a9876, _6ab5c2800a9b, _8b2d95fdb00f);
        } catch {
          return Reflect.apply(_a0727e0a9876, window, _6ab5c2800a9b);
        }
        return _0x87f761_3();
      },
      get: (_a0727e0a9876, _6ab5c2800a9b, _8b2d95fdb00f) => "\x5f\x5f\x6e\x79\x78\x50\x6f\x70\x75\x70\x47\x75\x61\x72\x64" === _6ab5c2800a9b || ("\x74\x6f\x53\x74\x72\x69\x6e\x67" === _6ab5c2800a9b ? () => "\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x6f\x70\x65\x6e\x28\x29\x20\x7b\x20\x5b\x6e\x61\x74\x69\x76\x65\x20\x63\x6f\x64\x65\x5d\x20\x7d" : Reflect.get(_a0727e0a9876, _6ab5c2800a9b, _8b2d95fdb00f))
    }));
  } catch {}
  const _0x87f761_7 = _a0727e0a9876 => {
    const _6ab5c2800a9b = String(_a0727e0a9876 || "").toLowerCase();
    return _6ab5c2800a9b && ![ "\x5f\x73\x65\x6c\x66", "\x5f\x70\x61\x72\x65\x6e\x74", "\x5f\x74\x6f\x70" ].includes(_6ab5c2800a9b);
  }, _0x87f761_8 = _a0727e0a9876 => !!_a0727e0a9876 && (!!_a0727e0a9876.hasAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || _0x87f761_4(_a0727e0a9876.href || _a0727e0a9876.getAttribute("\x68\x72\x65\x66") || ""));
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
    const _a0727e0a9876 = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!_0x87f761_8(this) || !_0x87f761_5(this.href || this.getAttribute("\x68\x72\x65\x66"), this.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "")) {
        if (!_0x87f761_1() || !_0x87f761_7(this.target)) return _a0727e0a9876.call(this);
        _0x87f761_3();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("\x63\x6c\x69\x63\x6b", _a0727e0a9876 => {
    const _6ab5c2800a9b = _a0727e0a9876.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_6ab5c2800a9b) return _0x87f761_8(_6ab5c2800a9b) && _0x87f761_5(_6ab5c2800a9b.href || _6ab5c2800a9b.getAttribute("\x68\x72\x65\x66"), _6ab5c2800a9b.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_a0727e0a9876.preventDefault(), 
    void _a0727e0a9876.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_6ab5c2800a9b.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_a0727e0a9876.preventDefault(), 
    _a0727e0a9876.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x61\x75\x78\x63\x6c\x69\x63\x6b", _a0727e0a9876 => {
    const _6ab5c2800a9b = _a0727e0a9876.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_6ab5c2800a9b) return _0x87f761_8(_6ab5c2800a9b) && _0x87f761_5(_6ab5c2800a9b.href || _6ab5c2800a9b.getAttribute("\x68\x72\x65\x66"), _6ab5c2800a9b.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_a0727e0a9876.preventDefault(), 
    void _a0727e0a9876.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_6ab5c2800a9b.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_a0727e0a9876.preventDefault(), 
    _a0727e0a9876.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x73\x75\x62\x6d\x69\x74", _a0727e0a9876 => {
    if (!_0x87f761_1()) return;
    const _6ab5c2800a9b = _a0727e0a9876.target;
    _6ab5c2800a9b && "\x46\x4f\x52\x4d" === String(_6ab5c2800a9b.tagName || "").toUpperCase() && _0x87f761_7(_6ab5c2800a9b.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_a0727e0a9876.preventDefault(), 
    _a0727e0a9876.stopImmediatePropagation(), _0x87f761_3());
  }, !0));
  const _0x87f761_9 = _a0727e0a9876 => {
    const _6ab5c2800a9b = window[_a0727e0a9876];
    if ("\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _6ab5c2800a9b && !_6ab5c2800a9b.__nyxWrapped) try {
      Object.setPrototypeOf(_0x87f761_2, _6ab5c2800a9b), _0x87f761_2.prototype = _6ab5c2800a9b.prototype, 
      Object.defineProperty(_0x87f761_2, "\x5f\x5f\x6e\x79\x78\x57\x72\x61\x70\x70\x65\x64", {
        value: !0
      }), window[_a0727e0a9876] = _0x87f761_2;
    } catch {}
    function _0x87f761_2(_a0727e0a9876, _8b2d95fdb00f, _b0b9b4c5940d) {
      let _2a743ce8eca1 = Number(_a0727e0a9876), _871db46f3721 = Number(_8b2d95fdb00f);
      return (!Number.isFinite(_2a743ce8eca1) || _2a743ce8eca1 < 0) && (_2a743ce8eca1 = 0), 
      (!Number.isFinite(_871db46f3721) || _871db46f3721 <= _2a743ce8eca1) && (_871db46f3721 = _2a743ce8eca1 + .001), 
      Reflect.construct(_6ab5c2800a9b, [ _2a743ce8eca1, _871db46f3721, null == _b0b9b4c5940d ? "" : String(_b0b9b4c5940d) ], new.target || _0x87f761_2);
    }
  };
  _0x87f761_9("\x56\x54\x54\x43\x75\x65"), _0x87f761_9("\x54\x65\x78\x74\x54\x72\x61\x63\x6b\x43\x75\x65");
})();
