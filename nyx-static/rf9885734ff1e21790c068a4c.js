(() => {
  if ("\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" == typeof window || window.\u{5f}\u{5f}\u{6e}\u{79}\u{78}\u{53}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74}\u{47}\u{75}\u{61}\u{72}\u{64}\u{73}) return;
  window.\u{5f}\u{5f}\u{6e}\u{79}\u{78}\u{53}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74}\u{47}\u{75}\u{61}\u{72}\u{64}\u{73} = !0;
  const _d82bbc64add1 = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "\x74\x72\x75\x73\x74\x65\x64\x54\x79\x70\x65\x73", {
      configurable: !0,
      value: {
        createPolicy: (_d82bbc64add1, _f90f2959a5d9 = {}) => ({
          createHTML: _d82bbc64add1 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _f90f2959a5d9.createHTML ? _f90f2959a5d9.createHTML(_d82bbc64add1) : _d82bbc64add1,
          createScript: _d82bbc64add1 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _f90f2959a5d9.createScript ? _f90f2959a5d9.createScript(_d82bbc64add1) : _d82bbc64add1,
          createScriptURL: _d82bbc64add1 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _f90f2959a5d9.createScriptURL ? _f90f2959a5d9.createScriptURL(_d82bbc64add1) : _d82bbc64add1
        })
      }
    });
  } catch {}
  try {
    const _d82bbc64add1 = Object.getOwnPropertyDescriptor(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74"), _f90f2959a5d9 = document.createElement("\x73\x63\x72\x69\x70\x74");
    _f90f2959a5d9.setAttribute("\x6e\x6f\x6e\x63\x65", ""), Object.defineProperty(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74", {
      configurable: !0,
      get() {
        let _d8480162968a = null;
        try {
          _d8480162968a = _d82bbc64add1?.get?.call(this) || null;
        } catch {}
        return _d8480162968a || this.querySelector?.("\x73\x63\x72\x69\x70\x74\x5b\x73\x72\x63\x5d\x2c\x73\x63\x72\x69\x70\x74") || _f90f2959a5d9;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const _0x87f761_0 = _d82bbc64add1 => !(!_d82bbc64add1 || !_d82bbc64add1.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_d82bbc64add1.tagName || "")), _0x87f761_1 = _d82bbc64add1 => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_d82bbc64add1?.tagName || "") ? String(_d82bbc64add1.value || "").slice(_d82bbc64add1.selectionStart || 0, _d82bbc64add1.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, _0x87f761_2 = (_d82bbc64add1, _f90f2959a5d9) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_d82bbc64add1?.tagName || "")) {
            const _d8480162968a = _d82bbc64add1.selectionStart || 0, _e0df6584d06a = _d82bbc64add1.selectionEnd || 0, _47eef748105b = String(_d82bbc64add1.value || "");
            _d82bbc64add1.value = _47eef748105b.slice(0, _d8480162968a) + _f90f2959a5d9 + _47eef748105b.slice(_e0df6584d06a);
            const _c3c5e237f68b = _d8480162968a + String(_f90f2959a5d9).length;
            return _d82bbc64add1.setSelectionRange(_c3c5e237f68b, _c3c5e237f68b), void _d82bbc64add1.dispatchEvent(new Event("\x69\x6e\x70\x75\x74", {
              bubbles: !0
            }));
          }
          document.execCommand?.("\x69\x6e\x73\x65\x72\x74\x54\x65\x78\x74", !1, _f90f2959a5d9);
        } catch {}
      }, _0x87f761_3 = async _d82bbc64add1 => {
        try {
          await (navigator.clipboard?.writeText(String(_d82bbc64add1 || "")));
        } catch {
          try {
            document.execCommand?.("\x63\x6f\x70\x79");
          } catch {}
        }
      }, _d82bbc64add1 = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _f90f2959a5d9 = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), _0x87f761_6 = _d8480162968a => {
        try {
          _d82bbc64add1?.postMessage(_d8480162968a, "\x2a");
        } catch {}
        try {
          _f90f2959a5d9 && _f90f2959a5d9 !== _d82bbc64add1 && _f90f2959a5d9.postMessage(_d8480162968a, "\x2a");
        } catch {}
        try {
          window.parent?.postMessage(_d8480162968a, "\x2a");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_d8480162968a, "\x2a");
        } catch {}
      };
      window.addEventListener("\x6b\x65\x79\x64\x6f\x77\x6e", _d82bbc64add1 => {
        const _f90f2959a5d9 = String(_d82bbc64add1.key || "").toLowerCase();
        if (_d82bbc64add1.altKey && !_d82bbc64add1.ctrlKey && !_d82bbc64add1.metaKey && 2 !== _d82bbc64add1.location && "\x61\x6c\x74" === _f90f2959a5d9) return _d82bbc64add1.preventDefault(), 
        _d82bbc64add1.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x70\x72\x69\x6d\x65"
        });
        if (_d82bbc64add1.altKey && !_d82bbc64add1.ctrlKey && !_d82bbc64add1.metaKey && 2 !== _d82bbc64add1.location && _0x87f761_0(_d82bbc64add1.target) && /^[acxvzy]$/.test(_f90f2959a5d9)) {
          if (_d82bbc64add1.preventDefault(), _d82bbc64add1.stopPropagation(), "\x61" === _f90f2959a5d9) return void (_d82bbc64add1.target?.select ? _d82bbc64add1.target.select() : document.execCommand?.("\x73\x65\x6c\x65\x63\x74\x41\x6c\x6c"));
          if ("\x63" === _f90f2959a5d9) return void _0x87f761_3(_0x87f761_1(_d82bbc64add1.target));
          if ("\x78" === _f90f2959a5d9) {
            const _f90f2959a5d9 = _0x87f761_1(_d82bbc64add1.target);
            return _0x87f761_3(_f90f2959a5d9), void _0x87f761_2(_d82bbc64add1.target, "");
          }
          if ("\x76" === _f90f2959a5d9) return void navigator.clipboard?.readText?.().then(_f90f2959a5d9 => _0x87f761_2(_d82bbc64add1.target, _f90f2959a5d9)).catch(() => {
            try {
              document.execCommand?.("\x70\x61\x73\x74\x65");
            } catch {}
          });
          if ("\x7a" === _f90f2959a5d9) return void document.execCommand?.("\x75\x6e\x64\x6f");
          if ("\x79" === _f90f2959a5d9) return void document.execCommand?.("\x72\x65\x64\x6f");
        }
        return !_d82bbc64add1.altKey || _d82bbc64add1.ctrlKey || _d82bbc64add1.metaKey || 2 === _d82bbc64add1.location || !/^[1-9]$/.test(_f90f2959a5d9) && ![ "\x6c", "\x64", "\x74", "\x77", "\x72", "\x61\x72\x72\x6f\x77\x6c\x65\x66\x74", "\x61\x72\x72\x6f\x77\x72\x69\x67\x68\x74", "\x74\x61\x62" ].includes(_f90f2959a5d9) ? void 0 : (_d82bbc64add1.preventDefault(), 
        _d82bbc64add1.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x73\x68\x6f\x72\x74\x63\x75\x74",
          key: _f90f2959a5d9,
          code: _d82bbc64add1.code || "",
          location: _d82bbc64add1.location || 0,
          shiftKey: !!_d82bbc64add1.shiftKey
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
  }, _0x87f761_2 = _d82bbc64add1 => {
    if (!_d82bbc64add1) return !1;
    try {
      return _d82bbc64add1.document.open(), _d82bbc64add1.document.write("\x3c\x21\x64\x6f\x63\x74\x79\x70\x65\x20\x68\x74\x6d\x6c\x3e\x3c\x68\x74\x6d\x6c\x3e\x3c\x68\x65\x61\x64\x3e\x3c\x6d\x65\x74\x61\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x22\x75\x74\x66\x2d\x38\x22\x3e\x3c\x6d\x65\x74\x61\x20\x6e\x61\x6d\x65\x3d\x22\x76\x69\x65\x77\x70\x6f\x72\x74\x22\x20\x63\x6f\x6e\x74\x65\x6e\x74\x3d\x22\x77\x69\x64\x74\x68\x3d\x64\x65\x76\x69\x63\x65\x2d\x77\x69\x64\x74\x68\x2c\x69\x6e\x69\x74\x69\x61\x6c\x2d\x73\x63\x61\x6c\x65\x3d\x31\x22\x3e\x3c\x74\x69\x74\x6c\x65\x3e\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61\x3c\x2f\x74\x69\x74\x6c\x65\x3e\x3c\x73\x74\x79\x6c\x65\x3e\x68\x74\x6d\x6c\x2c\x62\x6f\x64\x79\x7b\x6d\x61\x72\x67\x69\x6e\x3a\x30\x3b\x77\x69\x64\x74\x68\x3a\x31\x30\x30\x25\x3b\x68\x65\x69\x67\x68\x74\x3a\x31\x30\x30\x25\x3b\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x3a\x23\x66\x66\x66\x3b\x63\x6f\x6c\x6f\x72\x3a\x23\x31\x31\x31\x3b\x66\x6f\x6e\x74\x3a\x32\x38\x70\x78\x20\x52\x61\x6c\x65\x77\x61\x79\x2c\x41\x72\x69\x61\x6c\x2c\x73\x61\x6e\x73\x2d\x73\x65\x72\x69\x66\x7d\x62\x6f\x64\x79\x7b\x64\x69\x73\x70\x6c\x61\x79\x3a\x67\x72\x69\x64\x3b\x70\x6c\x61\x63\x65\x2d\x69\x74\x65\x6d\x73\x3a\x63\x65\x6e\x74\x65\x72\x3b\x74\x65\x78\x74\x2d\x61\x6c\x69\x67\x6e\x3a\x63\x65\x6e\x74\x65\x72\x7d\x6d\x61\x69\x6e\x7b\x70\x61\x64\x64\x69\x6e\x67\x3a\x32\x34\x70\x78\x7d\x3c\x2f\x73\x74\x79\x6c\x65\x3e\x3c\x2f\x68\x65\x61\x64\x3e\x3c\x62\x6f\x64\x79\x3e\x3c\x6d\x61\x69\x6e\x3e\x61\x72\x65\x20\x79\x6f\x75\x20\x74\x72\x79\x69\x6e\x67\x20\x74\x6f\x20\x68\x61\x63\x6b\x20\x6d\x65\x20\x73\x63\x61\x6d\x6d\x61\x3f\x3f\x3f\x3c\x2f\x6d\x61\x69\x6e\x3e\x3c\x2f\x62\x6f\x64\x79\x3e\x3c\x2f\x68\x74\x6d\x6c\x3e"), 
      _d82bbc64add1.document.close(), _d82bbc64add1.focus?.(), !0;
    } catch {
      return !1;
    }
  }, _0x87f761_3 = () => {
    const _d82bbc64add1 = null;
    return {
      closed: !1,
      focus() {
        try {
          _d82bbc64add1?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _d82bbc64add1?.blur?.();
        } catch {}
      },
      close() {
        try {
          _d82bbc64add1?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return _0x87f761_2(_d82bbc64add1), this;
        },
        write() {
          _0x87f761_2(_d82bbc64add1);
        },
        writeln() {
          _0x87f761_2(_d82bbc64add1);
        },
        close() {
          _0x87f761_2(_d82bbc64add1);
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
          _0x87f761_2(_d82bbc64add1);
        },
        toString: () => "\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61"
      }
    };
  }, _0x87f761_4 = _d82bbc64add1 => {
    const _f90f2959a5d9 = String(_d82bbc64add1 || "").trim();
    if (/^(?:blob|data):/i.test(_f90f2959a5d9)) return !1;
    const _d8480162968a = _f90f2959a5d9.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_d8480162968a);
  }, _0x87f761_5 = (_d82bbc64add1, _f90f2959a5d9 = "") => {
    const _d8480162968a = String(_d82bbc64add1 || "").trim();
    if (!_d8480162968a || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "\x6e\x79\x78\x3a\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x2d\x72\x65\x71\x75\x65\x73\x74",
        url: _d8480162968a,
        filename: String(_f90f2959a5d9 || ""),
        sourceUrl: String(location.href || "")
      }, "\x2a"), !0;
    } catch {
      return !1;
    }
  };
  let _0x87f761_6 = (..._f90f2959a5d9) => _0x87f761_4(_f90f2959a5d9[0]) && _0x87f761_5(_f90f2959a5d9[0]) ? null : !_0x87f761_1() && _d82bbc64add1 ? _d82bbc64add1(..._f90f2959a5d9) : _0x87f761_3();
  try {
    "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _d82bbc64add1 && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof \u{50}\u{72}\u{6f}\u{78}\u{79} && (_0x87f761_6 = new \u{50}\u{72}\u{6f}\u{78}\u{79}(_d82bbc64add1, {
      apply: (_d82bbc64add1, _f90f2959a5d9, _d8480162968a) => _0x87f761_4(_d8480162968a[0]) && _0x87f761_5(_d8480162968a[0]) ? null : _0x87f761_1() ? _0x87f761_3() : Reflect.apply(_d82bbc64add1, _f90f2959a5d9, _d8480162968a),
      construct(_d82bbc64add1, _f90f2959a5d9, _d8480162968a) {
        if (!_0x87f761_1()) try {
          return Reflect.construct(_d82bbc64add1, _f90f2959a5d9, _d8480162968a);
        } catch {
          return Reflect.apply(_d82bbc64add1, window, _f90f2959a5d9);
        }
        return _0x87f761_3();
      },
      get: (_d82bbc64add1, _f90f2959a5d9, _d8480162968a) => "\x5f\x5f\x6e\x79\x78\x50\x6f\x70\x75\x70\x47\x75\x61\x72\x64" === _f90f2959a5d9 || ("\x74\x6f\x53\x74\x72\x69\x6e\x67" === _f90f2959a5d9 ? () => "\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x6f\x70\x65\x6e\x28\x29\x20\x7b\x20\x5b\x6e\x61\x74\x69\x76\x65\x20\x63\x6f\x64\x65\x5d\x20\x7d" : Reflect.get(_d82bbc64add1, _f90f2959a5d9, _d8480162968a))
    }));
  } catch {}
  const _0x87f761_7 = _d82bbc64add1 => {
    const _f90f2959a5d9 = String(_d82bbc64add1 || "").toLowerCase();
    return _f90f2959a5d9 && ![ "\x5f\x73\x65\x6c\x66", "\x5f\x70\x61\x72\x65\x6e\x74", "\x5f\x74\x6f\x70" ].includes(_f90f2959a5d9);
  }, _0x87f761_8 = _d82bbc64add1 => !!_d82bbc64add1 && (!!_d82bbc64add1.hasAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || _0x87f761_4(_d82bbc64add1.href || _d82bbc64add1.getAttribute("\x68\x72\x65\x66") || ""));
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
    const _d82bbc64add1 = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!_0x87f761_8(this) || !_0x87f761_5(this.href || this.getAttribute("\x68\x72\x65\x66"), this.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "")) {
        if (!_0x87f761_1() || !_0x87f761_7(this.target)) return _d82bbc64add1.call(this);
        _0x87f761_3();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("\x63\x6c\x69\x63\x6b", _d82bbc64add1 => {
    const _f90f2959a5d9 = _d82bbc64add1.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_f90f2959a5d9) return _0x87f761_8(_f90f2959a5d9) && _0x87f761_5(_f90f2959a5d9.href || _f90f2959a5d9.getAttribute("\x68\x72\x65\x66"), _f90f2959a5d9.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_d82bbc64add1.preventDefault(), 
    void _d82bbc64add1.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_f90f2959a5d9.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_d82bbc64add1.preventDefault(), 
    _d82bbc64add1.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x61\x75\x78\x63\x6c\x69\x63\x6b", _d82bbc64add1 => {
    const _f90f2959a5d9 = _d82bbc64add1.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_f90f2959a5d9) return _0x87f761_8(_f90f2959a5d9) && _0x87f761_5(_f90f2959a5d9.href || _f90f2959a5d9.getAttribute("\x68\x72\x65\x66"), _f90f2959a5d9.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_d82bbc64add1.preventDefault(), 
    void _d82bbc64add1.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_f90f2959a5d9.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_d82bbc64add1.preventDefault(), 
    _d82bbc64add1.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x73\x75\x62\x6d\x69\x74", _d82bbc64add1 => {
    if (!_0x87f761_1()) return;
    const _f90f2959a5d9 = _d82bbc64add1.target;
    _f90f2959a5d9 && "\x46\x4f\x52\x4d" === String(_f90f2959a5d9.tagName || "").toUpperCase() && _0x87f761_7(_f90f2959a5d9.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_d82bbc64add1.preventDefault(), 
    _d82bbc64add1.stopImmediatePropagation(), _0x87f761_3());
  }, !0));
  const _0x87f761_9 = _d82bbc64add1 => {
    const _f90f2959a5d9 = window[_d82bbc64add1];
    if ("\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _f90f2959a5d9 && !_f90f2959a5d9.__nyxWrapped) try {
      Object.setPrototypeOf(_0x87f761_2, _f90f2959a5d9), _0x87f761_2.prototype = _f90f2959a5d9.prototype, 
      Object.defineProperty(_0x87f761_2, "\x5f\x5f\x6e\x79\x78\x57\x72\x61\x70\x70\x65\x64", {
        value: !0
      }), window[_d82bbc64add1] = _0x87f761_2;
    } catch {}
    function _0x87f761_2(_d82bbc64add1, _d8480162968a, _e0df6584d06a) {
      let _47eef748105b = Number(_d82bbc64add1), _c3c5e237f68b = Number(_d8480162968a);
      return (!Number.isFinite(_47eef748105b) || _47eef748105b < 0) && (_47eef748105b = 0), 
      (!Number.isFinite(_c3c5e237f68b) || _c3c5e237f68b <= _47eef748105b) && (_c3c5e237f68b = _47eef748105b + .001), 
      Reflect.construct(_f90f2959a5d9, [ _47eef748105b, _c3c5e237f68b, null == _e0df6584d06a ? "" : String(_e0df6584d06a) ], new.target || _0x87f761_2);
    }
  };
  _0x87f761_9("\x56\x54\x54\x43\x75\x65"), _0x87f761_9("\x54\x65\x78\x74\x54\x72\x61\x63\x6b\x43\x75\x65");
})();
