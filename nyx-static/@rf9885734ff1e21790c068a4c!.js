(() => {
  if ("\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" == typeof window || window.\u{5f}\u{5f}\u{6e}\u{79}\u{78}\u{53}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74}\u{47}\u{75}\u{61}\u{72}\u{64}\u{73}) return;
  window.\u{5f}\u{5f}\u{6e}\u{79}\u{78}\u{53}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74}\u{47}\u{75}\u{61}\u{72}\u{64}\u{73} = !0;
  const _9b9ecba9ff68 = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "\x74\x72\x75\x73\x74\x65\x64\x54\x79\x70\x65\x73", {
      configurable: !0,
      value: {
        createPolicy: (_9b9ecba9ff68, _52c4117bccb6 = {}) => ({
          createHTML: _9b9ecba9ff68 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _52c4117bccb6.createHTML ? _52c4117bccb6.createHTML(_9b9ecba9ff68) : _9b9ecba9ff68,
          createScript: _9b9ecba9ff68 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _52c4117bccb6.createScript ? _52c4117bccb6.createScript(_9b9ecba9ff68) : _9b9ecba9ff68,
          createScriptURL: _9b9ecba9ff68 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _52c4117bccb6.createScriptURL ? _52c4117bccb6.createScriptURL(_9b9ecba9ff68) : _9b9ecba9ff68
        })
      }
    });
  } catch {}
  try {
    const _9b9ecba9ff68 = Object.getOwnPropertyDescriptor(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74"), _52c4117bccb6 = document.createElement("\x73\x63\x72\x69\x70\x74");
    _52c4117bccb6.setAttribute("\x6e\x6f\x6e\x63\x65", ""), Object.defineProperty(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74", {
      configurable: !0,
      get() {
        let _a037753140ac = null;
        try {
          _a037753140ac = _9b9ecba9ff68?.get?.call(this) || null;
        } catch {}
        return _a037753140ac || this.querySelector?.("\x73\x63\x72\x69\x70\x74\x5b\x73\x72\x63\x5d\x2c\x73\x63\x72\x69\x70\x74") || _52c4117bccb6;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const _0x87f761_0 = _9b9ecba9ff68 => !(!_9b9ecba9ff68 || !_9b9ecba9ff68.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_9b9ecba9ff68.tagName || "")), _0x87f761_1 = _9b9ecba9ff68 => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_9b9ecba9ff68?.tagName || "") ? String(_9b9ecba9ff68.value || "").slice(_9b9ecba9ff68.selectionStart || 0, _9b9ecba9ff68.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, _0x87f761_2 = (_9b9ecba9ff68, _52c4117bccb6) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_9b9ecba9ff68?.tagName || "")) {
            const _a037753140ac = _9b9ecba9ff68.selectionStart || 0, _054f6c978689 = _9b9ecba9ff68.selectionEnd || 0, _edaf3701dd9a = String(_9b9ecba9ff68.value || "");
            _9b9ecba9ff68.value = _edaf3701dd9a.slice(0, _a037753140ac) + _52c4117bccb6 + _edaf3701dd9a.slice(_054f6c978689);
            const _eb0c4d89dc06 = _a037753140ac + String(_52c4117bccb6).length;
            return _9b9ecba9ff68.setSelectionRange(_eb0c4d89dc06, _eb0c4d89dc06), void _9b9ecba9ff68.dispatchEvent(new Event("\x69\x6e\x70\x75\x74", {
              bubbles: !0
            }));
          }
          document.execCommand?.("\x69\x6e\x73\x65\x72\x74\x54\x65\x78\x74", !1, _52c4117bccb6);
        } catch {}
      }, _0x87f761_3 = async _9b9ecba9ff68 => {
        try {
          await (navigator.clipboard?.writeText(String(_9b9ecba9ff68 || "")));
        } catch {
          try {
            document.execCommand?.("\x63\x6f\x70\x79");
          } catch {}
        }
      }, _9b9ecba9ff68 = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _52c4117bccb6 = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), _0x87f761_6 = _a037753140ac => {
        try {
          _9b9ecba9ff68?.postMessage(_a037753140ac, "\x2a");
        } catch {}
        try {
          _52c4117bccb6 && _52c4117bccb6 !== _9b9ecba9ff68 && _52c4117bccb6.postMessage(_a037753140ac, "\x2a");
        } catch {}
        try {
          window.parent?.postMessage(_a037753140ac, "\x2a");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_a037753140ac, "\x2a");
        } catch {}
      };
      window.addEventListener("\x6b\x65\x79\x64\x6f\x77\x6e", _9b9ecba9ff68 => {
        const _52c4117bccb6 = String(_9b9ecba9ff68.key || "").toLowerCase();
        if (_9b9ecba9ff68.altKey && !_9b9ecba9ff68.ctrlKey && !_9b9ecba9ff68.metaKey && 2 !== _9b9ecba9ff68.location && "\x61\x6c\x74" === _52c4117bccb6) return _9b9ecba9ff68.preventDefault(), 
        _9b9ecba9ff68.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x70\x72\x69\x6d\x65"
        });
        if (_9b9ecba9ff68.altKey && !_9b9ecba9ff68.ctrlKey && !_9b9ecba9ff68.metaKey && 2 !== _9b9ecba9ff68.location && _0x87f761_0(_9b9ecba9ff68.target) && /^[acxvzy]$/.test(_52c4117bccb6)) {
          if (_9b9ecba9ff68.preventDefault(), _9b9ecba9ff68.stopPropagation(), "\x61" === _52c4117bccb6) return void (_9b9ecba9ff68.target?.select ? _9b9ecba9ff68.target.select() : document.execCommand?.("\x73\x65\x6c\x65\x63\x74\x41\x6c\x6c"));
          if ("\x63" === _52c4117bccb6) return void _0x87f761_3(_0x87f761_1(_9b9ecba9ff68.target));
          if ("\x78" === _52c4117bccb6) {
            const _52c4117bccb6 = _0x87f761_1(_9b9ecba9ff68.target);
            return _0x87f761_3(_52c4117bccb6), void _0x87f761_2(_9b9ecba9ff68.target, "");
          }
          if ("\x76" === _52c4117bccb6) return void navigator.clipboard?.readText?.().then(_52c4117bccb6 => _0x87f761_2(_9b9ecba9ff68.target, _52c4117bccb6)).catch(() => {
            try {
              document.execCommand?.("\x70\x61\x73\x74\x65");
            } catch {}
          });
          if ("\x7a" === _52c4117bccb6) return void document.execCommand?.("\x75\x6e\x64\x6f");
          if ("\x79" === _52c4117bccb6) return void document.execCommand?.("\x72\x65\x64\x6f");
        }
        return !_9b9ecba9ff68.altKey || _9b9ecba9ff68.ctrlKey || _9b9ecba9ff68.metaKey || 2 === _9b9ecba9ff68.location || !/^[1-9]$/.test(_52c4117bccb6) && ![ "\x6c", "\x64", "\x74", "\x77", "\x72", "\x61\x72\x72\x6f\x77\x6c\x65\x66\x74", "\x61\x72\x72\x6f\x77\x72\x69\x67\x68\x74", "\x74\x61\x62" ].includes(_52c4117bccb6) ? void 0 : (_9b9ecba9ff68.preventDefault(), 
        _9b9ecba9ff68.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x73\x68\x6f\x72\x74\x63\x75\x74",
          key: _52c4117bccb6,
          code: _9b9ecba9ff68.code || "",
          location: _9b9ecba9ff68.location || 0,
          shiftKey: !!_9b9ecba9ff68.shiftKey
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
  }, _0x87f761_2 = _9b9ecba9ff68 => {
    if (!_9b9ecba9ff68) return !1;
    try {
      return _9b9ecba9ff68.document.open(), _9b9ecba9ff68.document.write("\x3c\x21\x64\x6f\x63\x74\x79\x70\x65\x20\x68\x74\x6d\x6c\x3e\x3c\x68\x74\x6d\x6c\x3e\x3c\x68\x65\x61\x64\x3e\x3c\x6d\x65\x74\x61\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x22\x75\x74\x66\x2d\x38\x22\x3e\x3c\x6d\x65\x74\x61\x20\x6e\x61\x6d\x65\x3d\x22\x76\x69\x65\x77\x70\x6f\x72\x74\x22\x20\x63\x6f\x6e\x74\x65\x6e\x74\x3d\x22\x77\x69\x64\x74\x68\x3d\x64\x65\x76\x69\x63\x65\x2d\x77\x69\x64\x74\x68\x2c\x69\x6e\x69\x74\x69\x61\x6c\x2d\x73\x63\x61\x6c\x65\x3d\x31\x22\x3e\x3c\x74\x69\x74\x6c\x65\x3e\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61\x3c\x2f\x74\x69\x74\x6c\x65\x3e\x3c\x73\x74\x79\x6c\x65\x3e\x68\x74\x6d\x6c\x2c\x62\x6f\x64\x79\x7b\x6d\x61\x72\x67\x69\x6e\x3a\x30\x3b\x77\x69\x64\x74\x68\x3a\x31\x30\x30\x25\x3b\x68\x65\x69\x67\x68\x74\x3a\x31\x30\x30\x25\x3b\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x3a\x23\x66\x66\x66\x3b\x63\x6f\x6c\x6f\x72\x3a\x23\x31\x31\x31\x3b\x66\x6f\x6e\x74\x3a\x32\x38\x70\x78\x20\x52\x61\x6c\x65\x77\x61\x79\x2c\x41\x72\x69\x61\x6c\x2c\x73\x61\x6e\x73\x2d\x73\x65\x72\x69\x66\x7d\x62\x6f\x64\x79\x7b\x64\x69\x73\x70\x6c\x61\x79\x3a\x67\x72\x69\x64\x3b\x70\x6c\x61\x63\x65\x2d\x69\x74\x65\x6d\x73\x3a\x63\x65\x6e\x74\x65\x72\x3b\x74\x65\x78\x74\x2d\x61\x6c\x69\x67\x6e\x3a\x63\x65\x6e\x74\x65\x72\x7d\x6d\x61\x69\x6e\x7b\x70\x61\x64\x64\x69\x6e\x67\x3a\x32\x34\x70\x78\x7d\x3c\x2f\x73\x74\x79\x6c\x65\x3e\x3c\x2f\x68\x65\x61\x64\x3e\x3c\x62\x6f\x64\x79\x3e\x3c\x6d\x61\x69\x6e\x3e\x61\x72\x65\x20\x79\x6f\x75\x20\x74\x72\x79\x69\x6e\x67\x20\x74\x6f\x20\x68\x61\x63\x6b\x20\x6d\x65\x20\x73\x63\x61\x6d\x6d\x61\x3f\x3f\x3f\x3c\x2f\x6d\x61\x69\x6e\x3e\x3c\x2f\x62\x6f\x64\x79\x3e\x3c\x2f\x68\x74\x6d\x6c\x3e"), 
      _9b9ecba9ff68.document.close(), _9b9ecba9ff68.focus?.(), !0;
    } catch {
      return !1;
    }
  }, _0x87f761_3 = () => {
    const _9b9ecba9ff68 = null;
    return {
      closed: !1,
      focus() {
        try {
          _9b9ecba9ff68?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _9b9ecba9ff68?.blur?.();
        } catch {}
      },
      close() {
        try {
          _9b9ecba9ff68?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return _0x87f761_2(_9b9ecba9ff68), this;
        },
        write() {
          _0x87f761_2(_9b9ecba9ff68);
        },
        writeln() {
          _0x87f761_2(_9b9ecba9ff68);
        },
        close() {
          _0x87f761_2(_9b9ecba9ff68);
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
          _0x87f761_2(_9b9ecba9ff68);
        },
        toString: () => "\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61"
      }
    };
  }, _0x87f761_4 = _9b9ecba9ff68 => {
    const _52c4117bccb6 = String(_9b9ecba9ff68 || "").trim();
    if (/^(?:blob|data):/i.test(_52c4117bccb6)) return !1;
    const _a037753140ac = _52c4117bccb6.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_a037753140ac);
  }, _0x87f761_5 = (_9b9ecba9ff68, _52c4117bccb6 = "") => {
    const _a037753140ac = String(_9b9ecba9ff68 || "").trim();
    if (!_a037753140ac || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "\x6e\x79\x78\x3a\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x2d\x72\x65\x71\x75\x65\x73\x74",
        url: _a037753140ac,
        filename: String(_52c4117bccb6 || ""),
        sourceUrl: String(location.href || "")
      }, "\x2a"), !0;
    } catch {
      return !1;
    }
  };
  let _0x87f761_6 = (..._52c4117bccb6) => _0x87f761_4(_52c4117bccb6[0]) && _0x87f761_5(_52c4117bccb6[0]) ? null : !_0x87f761_1() && _9b9ecba9ff68 ? _9b9ecba9ff68(..._52c4117bccb6) : _0x87f761_3();
  try {
    "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _9b9ecba9ff68 && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof \u{50}\u{72}\u{6f}\u{78}\u{79} && (_0x87f761_6 = new \u{50}\u{72}\u{6f}\u{78}\u{79}(_9b9ecba9ff68, {
      apply: (_9b9ecba9ff68, _52c4117bccb6, _a037753140ac) => _0x87f761_4(_a037753140ac[0]) && _0x87f761_5(_a037753140ac[0]) ? null : _0x87f761_1() ? _0x87f761_3() : Reflect.apply(_9b9ecba9ff68, _52c4117bccb6, _a037753140ac),
      construct(_9b9ecba9ff68, _52c4117bccb6, _a037753140ac) {
        if (!_0x87f761_1()) try {
          return Reflect.construct(_9b9ecba9ff68, _52c4117bccb6, _a037753140ac);
        } catch {
          return Reflect.apply(_9b9ecba9ff68, window, _52c4117bccb6);
        }
        return _0x87f761_3();
      },
      get: (_9b9ecba9ff68, _52c4117bccb6, _a037753140ac) => "\x5f\x5f\x6e\x79\x78\x50\x6f\x70\x75\x70\x47\x75\x61\x72\x64" === _52c4117bccb6 || ("\x74\x6f\x53\x74\x72\x69\x6e\x67" === _52c4117bccb6 ? () => "\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x6f\x70\x65\x6e\x28\x29\x20\x7b\x20\x5b\x6e\x61\x74\x69\x76\x65\x20\x63\x6f\x64\x65\x5d\x20\x7d" : Reflect.get(_9b9ecba9ff68, _52c4117bccb6, _a037753140ac))
    }));
  } catch {}
  const _0x87f761_7 = _9b9ecba9ff68 => {
    const _52c4117bccb6 = String(_9b9ecba9ff68 || "").toLowerCase();
    return _52c4117bccb6 && ![ "\x5f\x73\x65\x6c\x66", "\x5f\x70\x61\x72\x65\x6e\x74", "\x5f\x74\x6f\x70" ].includes(_52c4117bccb6);
  }, _0x87f761_8 = _9b9ecba9ff68 => !!_9b9ecba9ff68 && (!!_9b9ecba9ff68.hasAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || _0x87f761_4(_9b9ecba9ff68.href || _9b9ecba9ff68.getAttribute("\x68\x72\x65\x66") || ""));
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
    const _9b9ecba9ff68 = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!_0x87f761_8(this) || !_0x87f761_5(this.href || this.getAttribute("\x68\x72\x65\x66"), this.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "")) {
        if (!_0x87f761_1() || !_0x87f761_7(this.target)) return _9b9ecba9ff68.call(this);
        _0x87f761_3();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("\x63\x6c\x69\x63\x6b", _9b9ecba9ff68 => {
    const _52c4117bccb6 = _9b9ecba9ff68.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_52c4117bccb6) return _0x87f761_8(_52c4117bccb6) && _0x87f761_5(_52c4117bccb6.href || _52c4117bccb6.getAttribute("\x68\x72\x65\x66"), _52c4117bccb6.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_9b9ecba9ff68.preventDefault(), 
    void _9b9ecba9ff68.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_52c4117bccb6.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_9b9ecba9ff68.preventDefault(), 
    _9b9ecba9ff68.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x61\x75\x78\x63\x6c\x69\x63\x6b", _9b9ecba9ff68 => {
    const _52c4117bccb6 = _9b9ecba9ff68.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_52c4117bccb6) return _0x87f761_8(_52c4117bccb6) && _0x87f761_5(_52c4117bccb6.href || _52c4117bccb6.getAttribute("\x68\x72\x65\x66"), _52c4117bccb6.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_9b9ecba9ff68.preventDefault(), 
    void _9b9ecba9ff68.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_52c4117bccb6.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_9b9ecba9ff68.preventDefault(), 
    _9b9ecba9ff68.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x73\x75\x62\x6d\x69\x74", _9b9ecba9ff68 => {
    if (!_0x87f761_1()) return;
    const _52c4117bccb6 = _9b9ecba9ff68.target;
    _52c4117bccb6 && "\x46\x4f\x52\x4d" === String(_52c4117bccb6.tagName || "").toUpperCase() && _0x87f761_7(_52c4117bccb6.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_9b9ecba9ff68.preventDefault(), 
    _9b9ecba9ff68.stopImmediatePropagation(), _0x87f761_3());
  }, !0));
  const _0x87f761_9 = _9b9ecba9ff68 => {
    const _52c4117bccb6 = window[_9b9ecba9ff68];
    if ("\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _52c4117bccb6 && !_52c4117bccb6.__nyxWrapped) try {
      Object.setPrototypeOf(_0x87f761_2, _52c4117bccb6), _0x87f761_2.prototype = _52c4117bccb6.prototype, 
      Object.defineProperty(_0x87f761_2, "\x5f\x5f\x6e\x79\x78\x57\x72\x61\x70\x70\x65\x64", {
        value: !0
      }), window[_9b9ecba9ff68] = _0x87f761_2;
    } catch {}
    function _0x87f761_2(_9b9ecba9ff68, _a037753140ac, _054f6c978689) {
      let _edaf3701dd9a = Number(_9b9ecba9ff68), _eb0c4d89dc06 = Number(_a037753140ac);
      return (!Number.isFinite(_edaf3701dd9a) || _edaf3701dd9a < 0) && (_edaf3701dd9a = 0), 
      (!Number.isFinite(_eb0c4d89dc06) || _eb0c4d89dc06 <= _edaf3701dd9a) && (_eb0c4d89dc06 = _edaf3701dd9a + .001), 
      Reflect.construct(_52c4117bccb6, [ _edaf3701dd9a, _eb0c4d89dc06, null == _054f6c978689 ? "" : String(_054f6c978689) ], new.target || _0x87f761_2);
    }
  };
  _0x87f761_9("\x56\x54\x54\x43\x75\x65"), _0x87f761_9("\x54\x65\x78\x74\x54\x72\x61\x63\x6b\x43\x75\x65");
})();
