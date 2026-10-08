(() => {
  if ("\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" == typeof window || window.\u{5f}\u{5f}\u{6e}\u{79}\u{78}\u{53}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74}\u{47}\u{75}\u{61}\u{72}\u{64}\u{73}) return;
  window.\u{5f}\u{5f}\u{6e}\u{79}\u{78}\u{53}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74}\u{47}\u{75}\u{61}\u{72}\u{64}\u{73} = !0;
  const _c3643d86e9f6 = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "\x74\x72\x75\x73\x74\x65\x64\x54\x79\x70\x65\x73", {
      configurable: !0,
      value: {
        createPolicy: (_c3643d86e9f6, _e255edda9b4c = {}) => ({
          createHTML: _c3643d86e9f6 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _e255edda9b4c.createHTML ? _e255edda9b4c.createHTML(_c3643d86e9f6) : _c3643d86e9f6,
          createScript: _c3643d86e9f6 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _e255edda9b4c.createScript ? _e255edda9b4c.createScript(_c3643d86e9f6) : _c3643d86e9f6,
          createScriptURL: _c3643d86e9f6 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _e255edda9b4c.createScriptURL ? _e255edda9b4c.createScriptURL(_c3643d86e9f6) : _c3643d86e9f6
        })
      }
    });
  } catch {}
  try {
    const _c3643d86e9f6 = Object.getOwnPropertyDescriptor(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74"), _e255edda9b4c = document.createElement("\x73\x63\x72\x69\x70\x74");
    _e255edda9b4c.setAttribute("\x6e\x6f\x6e\x63\x65", ""), Object.defineProperty(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74", {
      configurable: !0,
      get() {
        let _06a93dc7e5a3 = null;
        try {
          _06a93dc7e5a3 = _c3643d86e9f6?.get?.call(this) || null;
        } catch {}
        return _06a93dc7e5a3 || this.querySelector?.("\x73\x63\x72\x69\x70\x74\x5b\x73\x72\x63\x5d\x2c\x73\x63\x72\x69\x70\x74") || _e255edda9b4c;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const _0x87f761_0 = _c3643d86e9f6 => !(!_c3643d86e9f6 || !_c3643d86e9f6.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_c3643d86e9f6.tagName || "")), _0x87f761_1 = _c3643d86e9f6 => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_c3643d86e9f6?.tagName || "") ? String(_c3643d86e9f6.value || "").slice(_c3643d86e9f6.selectionStart || 0, _c3643d86e9f6.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, _0x87f761_2 = (_c3643d86e9f6, _e255edda9b4c) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_c3643d86e9f6?.tagName || "")) {
            const _06a93dc7e5a3 = _c3643d86e9f6.selectionStart || 0, _d1b79a6571b5 = _c3643d86e9f6.selectionEnd || 0, _1a4ca874d860 = String(_c3643d86e9f6.value || "");
            _c3643d86e9f6.value = _1a4ca874d860.slice(0, _06a93dc7e5a3) + _e255edda9b4c + _1a4ca874d860.slice(_d1b79a6571b5);
            const _757f06d71be4 = _06a93dc7e5a3 + String(_e255edda9b4c).length;
            return _c3643d86e9f6.setSelectionRange(_757f06d71be4, _757f06d71be4), void _c3643d86e9f6.dispatchEvent(new Event("\x69\x6e\x70\x75\x74", {
              bubbles: !0
            }));
          }
          document.execCommand?.("\x69\x6e\x73\x65\x72\x74\x54\x65\x78\x74", !1, _e255edda9b4c);
        } catch {}
      }, _0x87f761_3 = async _c3643d86e9f6 => {
        try {
          await (navigator.clipboard?.writeText(String(_c3643d86e9f6 || "")));
        } catch {
          try {
            document.execCommand?.("\x63\x6f\x70\x79");
          } catch {}
        }
      }, _c3643d86e9f6 = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _e255edda9b4c = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), _0x87f761_6 = _06a93dc7e5a3 => {
        try {
          _c3643d86e9f6?.postMessage(_06a93dc7e5a3, "\x2a");
        } catch {}
        try {
          _e255edda9b4c && _e255edda9b4c !== _c3643d86e9f6 && _e255edda9b4c.postMessage(_06a93dc7e5a3, "\x2a");
        } catch {}
        try {
          window.parent?.postMessage(_06a93dc7e5a3, "\x2a");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_06a93dc7e5a3, "\x2a");
        } catch {}
      };
      window.addEventListener("\x6b\x65\x79\x64\x6f\x77\x6e", _c3643d86e9f6 => {
        const _e255edda9b4c = String(_c3643d86e9f6.key || "").toLowerCase();
        if (_c3643d86e9f6.altKey && !_c3643d86e9f6.ctrlKey && !_c3643d86e9f6.metaKey && 2 !== _c3643d86e9f6.location && "\x61\x6c\x74" === _e255edda9b4c) return _c3643d86e9f6.preventDefault(), 
        _c3643d86e9f6.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x70\x72\x69\x6d\x65"
        });
        if (_c3643d86e9f6.altKey && !_c3643d86e9f6.ctrlKey && !_c3643d86e9f6.metaKey && 2 !== _c3643d86e9f6.location && _0x87f761_0(_c3643d86e9f6.target) && /^[acxvzy]$/.test(_e255edda9b4c)) {
          if (_c3643d86e9f6.preventDefault(), _c3643d86e9f6.stopPropagation(), "\x61" === _e255edda9b4c) return void (_c3643d86e9f6.target?.select ? _c3643d86e9f6.target.select() : document.execCommand?.("\x73\x65\x6c\x65\x63\x74\x41\x6c\x6c"));
          if ("\x63" === _e255edda9b4c) return void _0x87f761_3(_0x87f761_1(_c3643d86e9f6.target));
          if ("\x78" === _e255edda9b4c) {
            const _e255edda9b4c = _0x87f761_1(_c3643d86e9f6.target);
            return _0x87f761_3(_e255edda9b4c), void _0x87f761_2(_c3643d86e9f6.target, "");
          }
          if ("\x76" === _e255edda9b4c) return void navigator.clipboard?.readText?.().then(_e255edda9b4c => _0x87f761_2(_c3643d86e9f6.target, _e255edda9b4c)).catch(() => {
            try {
              document.execCommand?.("\x70\x61\x73\x74\x65");
            } catch {}
          });
          if ("\x7a" === _e255edda9b4c) return void document.execCommand?.("\x75\x6e\x64\x6f");
          if ("\x79" === _e255edda9b4c) return void document.execCommand?.("\x72\x65\x64\x6f");
        }
        return !_c3643d86e9f6.altKey || _c3643d86e9f6.ctrlKey || _c3643d86e9f6.metaKey || 2 === _c3643d86e9f6.location || !/^[1-9]$/.test(_e255edda9b4c) && ![ "\x6c", "\x64", "\x74", "\x77", "\x72", "\x61\x72\x72\x6f\x77\x6c\x65\x66\x74", "\x61\x72\x72\x6f\x77\x72\x69\x67\x68\x74", "\x74\x61\x62" ].includes(_e255edda9b4c) ? void 0 : (_c3643d86e9f6.preventDefault(), 
        _c3643d86e9f6.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x73\x68\x6f\x72\x74\x63\x75\x74",
          key: _e255edda9b4c,
          code: _c3643d86e9f6.code || "",
          location: _c3643d86e9f6.location || 0,
          shiftKey: !!_c3643d86e9f6.shiftKey
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
  }, _0x87f761_2 = _c3643d86e9f6 => {
    if (!_c3643d86e9f6) return !1;
    try {
      return _c3643d86e9f6.document.open(), _c3643d86e9f6.document.write("\x3c\x21\x64\x6f\x63\x74\x79\x70\x65\x20\x68\x74\x6d\x6c\x3e\x3c\x68\x74\x6d\x6c\x3e\x3c\x68\x65\x61\x64\x3e\x3c\x6d\x65\x74\x61\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x22\x75\x74\x66\x2d\x38\x22\x3e\x3c\x6d\x65\x74\x61\x20\x6e\x61\x6d\x65\x3d\x22\x76\x69\x65\x77\x70\x6f\x72\x74\x22\x20\x63\x6f\x6e\x74\x65\x6e\x74\x3d\x22\x77\x69\x64\x74\x68\x3d\x64\x65\x76\x69\x63\x65\x2d\x77\x69\x64\x74\x68\x2c\x69\x6e\x69\x74\x69\x61\x6c\x2d\x73\x63\x61\x6c\x65\x3d\x31\x22\x3e\x3c\x74\x69\x74\x6c\x65\x3e\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61\x3c\x2f\x74\x69\x74\x6c\x65\x3e\x3c\x73\x74\x79\x6c\x65\x3e\x68\x74\x6d\x6c\x2c\x62\x6f\x64\x79\x7b\x6d\x61\x72\x67\x69\x6e\x3a\x30\x3b\x77\x69\x64\x74\x68\x3a\x31\x30\x30\x25\x3b\x68\x65\x69\x67\x68\x74\x3a\x31\x30\x30\x25\x3b\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x3a\x23\x66\x66\x66\x3b\x63\x6f\x6c\x6f\x72\x3a\x23\x31\x31\x31\x3b\x66\x6f\x6e\x74\x3a\x32\x38\x70\x78\x20\x52\x61\x6c\x65\x77\x61\x79\x2c\x41\x72\x69\x61\x6c\x2c\x73\x61\x6e\x73\x2d\x73\x65\x72\x69\x66\x7d\x62\x6f\x64\x79\x7b\x64\x69\x73\x70\x6c\x61\x79\x3a\x67\x72\x69\x64\x3b\x70\x6c\x61\x63\x65\x2d\x69\x74\x65\x6d\x73\x3a\x63\x65\x6e\x74\x65\x72\x3b\x74\x65\x78\x74\x2d\x61\x6c\x69\x67\x6e\x3a\x63\x65\x6e\x74\x65\x72\x7d\x6d\x61\x69\x6e\x7b\x70\x61\x64\x64\x69\x6e\x67\x3a\x32\x34\x70\x78\x7d\x3c\x2f\x73\x74\x79\x6c\x65\x3e\x3c\x2f\x68\x65\x61\x64\x3e\x3c\x62\x6f\x64\x79\x3e\x3c\x6d\x61\x69\x6e\x3e\x61\x72\x65\x20\x79\x6f\x75\x20\x74\x72\x79\x69\x6e\x67\x20\x74\x6f\x20\x68\x61\x63\x6b\x20\x6d\x65\x20\x73\x63\x61\x6d\x6d\x61\x3f\x3f\x3f\x3c\x2f\x6d\x61\x69\x6e\x3e\x3c\x2f\x62\x6f\x64\x79\x3e\x3c\x2f\x68\x74\x6d\x6c\x3e"), 
      _c3643d86e9f6.document.close(), _c3643d86e9f6.focus?.(), !0;
    } catch {
      return !1;
    }
  }, _0x87f761_3 = () => {
    const _c3643d86e9f6 = null;
    return {
      closed: !1,
      focus() {
        try {
          _c3643d86e9f6?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _c3643d86e9f6?.blur?.();
        } catch {}
      },
      close() {
        try {
          _c3643d86e9f6?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return _0x87f761_2(_c3643d86e9f6), this;
        },
        write() {
          _0x87f761_2(_c3643d86e9f6);
        },
        writeln() {
          _0x87f761_2(_c3643d86e9f6);
        },
        close() {
          _0x87f761_2(_c3643d86e9f6);
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
          _0x87f761_2(_c3643d86e9f6);
        },
        toString: () => "\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61"
      }
    };
  }, _0x87f761_4 = _c3643d86e9f6 => {
    const _e255edda9b4c = String(_c3643d86e9f6 || "").trim();
    if (/^(?:blob|data):/i.test(_e255edda9b4c)) return !1;
    const _06a93dc7e5a3 = _e255edda9b4c.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_06a93dc7e5a3);
  }, _0x87f761_5 = (_c3643d86e9f6, _e255edda9b4c = "") => {
    const _06a93dc7e5a3 = String(_c3643d86e9f6 || "").trim();
    if (!_06a93dc7e5a3 || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "\x6e\x79\x78\x3a\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x2d\x72\x65\x71\x75\x65\x73\x74",
        url: _06a93dc7e5a3,
        filename: String(_e255edda9b4c || ""),
        sourceUrl: String(location.href || "")
      }, "\x2a"), !0;
    } catch {
      return !1;
    }
  };
  let _0x87f761_6 = (..._e255edda9b4c) => _0x87f761_4(_e255edda9b4c[0]) && _0x87f761_5(_e255edda9b4c[0]) ? null : !_0x87f761_1() && _c3643d86e9f6 ? _c3643d86e9f6(..._e255edda9b4c) : _0x87f761_3();
  try {
    "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _c3643d86e9f6 && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof \u{50}\u{72}\u{6f}\u{78}\u{79} && (_0x87f761_6 = new \u{50}\u{72}\u{6f}\u{78}\u{79}(_c3643d86e9f6, {
      apply: (_c3643d86e9f6, _e255edda9b4c, _06a93dc7e5a3) => _0x87f761_4(_06a93dc7e5a3[0]) && _0x87f761_5(_06a93dc7e5a3[0]) ? null : _0x87f761_1() ? _0x87f761_3() : Reflect.apply(_c3643d86e9f6, _e255edda9b4c, _06a93dc7e5a3),
      construct(_c3643d86e9f6, _e255edda9b4c, _06a93dc7e5a3) {
        if (!_0x87f761_1()) try {
          return Reflect.construct(_c3643d86e9f6, _e255edda9b4c, _06a93dc7e5a3);
        } catch {
          return Reflect.apply(_c3643d86e9f6, window, _e255edda9b4c);
        }
        return _0x87f761_3();
      },
      get: (_c3643d86e9f6, _e255edda9b4c, _06a93dc7e5a3) => "\x5f\x5f\x6e\x79\x78\x50\x6f\x70\x75\x70\x47\x75\x61\x72\x64" === _e255edda9b4c || ("\x74\x6f\x53\x74\x72\x69\x6e\x67" === _e255edda9b4c ? () => "\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x6f\x70\x65\x6e\x28\x29\x20\x7b\x20\x5b\x6e\x61\x74\x69\x76\x65\x20\x63\x6f\x64\x65\x5d\x20\x7d" : Reflect.get(_c3643d86e9f6, _e255edda9b4c, _06a93dc7e5a3))
    }));
  } catch {}
  const _0x87f761_7 = _c3643d86e9f6 => {
    const _e255edda9b4c = String(_c3643d86e9f6 || "").toLowerCase();
    return _e255edda9b4c && ![ "\x5f\x73\x65\x6c\x66", "\x5f\x70\x61\x72\x65\x6e\x74", "\x5f\x74\x6f\x70" ].includes(_e255edda9b4c);
  }, _0x87f761_8 = _c3643d86e9f6 => !!_c3643d86e9f6 && (!!_c3643d86e9f6.hasAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || _0x87f761_4(_c3643d86e9f6.href || _c3643d86e9f6.getAttribute("\x68\x72\x65\x66") || ""));
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
    const _c3643d86e9f6 = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!_0x87f761_8(this) || !_0x87f761_5(this.href || this.getAttribute("\x68\x72\x65\x66"), this.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "")) {
        if (!_0x87f761_1() || !_0x87f761_7(this.target)) return _c3643d86e9f6.call(this);
        _0x87f761_3();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("\x63\x6c\x69\x63\x6b", _c3643d86e9f6 => {
    const _e255edda9b4c = _c3643d86e9f6.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_e255edda9b4c) return _0x87f761_8(_e255edda9b4c) && _0x87f761_5(_e255edda9b4c.href || _e255edda9b4c.getAttribute("\x68\x72\x65\x66"), _e255edda9b4c.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_c3643d86e9f6.preventDefault(), 
    void _c3643d86e9f6.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_e255edda9b4c.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_c3643d86e9f6.preventDefault(), 
    _c3643d86e9f6.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x61\x75\x78\x63\x6c\x69\x63\x6b", _c3643d86e9f6 => {
    const _e255edda9b4c = _c3643d86e9f6.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_e255edda9b4c) return _0x87f761_8(_e255edda9b4c) && _0x87f761_5(_e255edda9b4c.href || _e255edda9b4c.getAttribute("\x68\x72\x65\x66"), _e255edda9b4c.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_c3643d86e9f6.preventDefault(), 
    void _c3643d86e9f6.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_e255edda9b4c.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_c3643d86e9f6.preventDefault(), 
    _c3643d86e9f6.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x73\x75\x62\x6d\x69\x74", _c3643d86e9f6 => {
    if (!_0x87f761_1()) return;
    const _e255edda9b4c = _c3643d86e9f6.target;
    _e255edda9b4c && "\x46\x4f\x52\x4d" === String(_e255edda9b4c.tagName || "").toUpperCase() && _0x87f761_7(_e255edda9b4c.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_c3643d86e9f6.preventDefault(), 
    _c3643d86e9f6.stopImmediatePropagation(), _0x87f761_3());
  }, !0));
  const _0x87f761_9 = _c3643d86e9f6 => {
    const _e255edda9b4c = window[_c3643d86e9f6];
    if ("\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _e255edda9b4c && !_e255edda9b4c.__nyxWrapped) try {
      Object.setPrototypeOf(_0x87f761_2, _e255edda9b4c), _0x87f761_2.prototype = _e255edda9b4c.prototype, 
      Object.defineProperty(_0x87f761_2, "\x5f\x5f\x6e\x79\x78\x57\x72\x61\x70\x70\x65\x64", {
        value: !0
      }), window[_c3643d86e9f6] = _0x87f761_2;
    } catch {}
    function _0x87f761_2(_c3643d86e9f6, _06a93dc7e5a3, _d1b79a6571b5) {
      let _1a4ca874d860 = Number(_c3643d86e9f6), _757f06d71be4 = Number(_06a93dc7e5a3);
      return (!Number.isFinite(_1a4ca874d860) || _1a4ca874d860 < 0) && (_1a4ca874d860 = 0), 
      (!Number.isFinite(_757f06d71be4) || _757f06d71be4 <= _1a4ca874d860) && (_757f06d71be4 = _1a4ca874d860 + .001), 
      Reflect.construct(_e255edda9b4c, [ _1a4ca874d860, _757f06d71be4, null == _d1b79a6571b5 ? "" : String(_d1b79a6571b5) ], new.target || _0x87f761_2);
    }
  };
  _0x87f761_9("\x56\x54\x54\x43\x75\x65"), _0x87f761_9("\x54\x65\x78\x74\x54\x72\x61\x63\x6b\x43\x75\x65");
})();
