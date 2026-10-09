(() => {
  if ("\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" == typeof window || window.\u{5f}\u{5f}\u{6e}\u{79}\u{78}\u{53}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74}\u{47}\u{75}\u{61}\u{72}\u{64}\u{73}) return;
  window.\u{5f}\u{5f}\u{6e}\u{79}\u{78}\u{53}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74}\u{47}\u{75}\u{61}\u{72}\u{64}\u{73} = !0;
  const _c34e53e1a8d4 = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "\x74\x72\x75\x73\x74\x65\x64\x54\x79\x70\x65\x73", {
      configurable: !0,
      value: {
        createPolicy: (_c34e53e1a8d4, _ab3b86de1acd = {}) => ({
          createHTML: _c34e53e1a8d4 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _ab3b86de1acd.createHTML ? _ab3b86de1acd.createHTML(_c34e53e1a8d4) : _c34e53e1a8d4,
          createScript: _c34e53e1a8d4 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _ab3b86de1acd.createScript ? _ab3b86de1acd.createScript(_c34e53e1a8d4) : _c34e53e1a8d4,
          createScriptURL: _c34e53e1a8d4 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _ab3b86de1acd.createScriptURL ? _ab3b86de1acd.createScriptURL(_c34e53e1a8d4) : _c34e53e1a8d4
        })
      }
    });
  } catch {}
  try {
    const _c34e53e1a8d4 = Object.getOwnPropertyDescriptor(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74"), _ab3b86de1acd = document.createElement("\x73\x63\x72\x69\x70\x74");
    _ab3b86de1acd.setAttribute("\x6e\x6f\x6e\x63\x65", ""), Object.defineProperty(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74", {
      configurable: !0,
      get() {
        let _552b719f6d8c = null;
        try {
          _552b719f6d8c = _c34e53e1a8d4?.get?.call(this) || null;
        } catch {}
        return _552b719f6d8c || this.querySelector?.("\x73\x63\x72\x69\x70\x74\x5b\x73\x72\x63\x5d\x2c\x73\x63\x72\x69\x70\x74") || _ab3b86de1acd;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const _0x87f761_0 = _c34e53e1a8d4 => !(!_c34e53e1a8d4 || !_c34e53e1a8d4.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_c34e53e1a8d4.tagName || "")), _0x87f761_1 = _c34e53e1a8d4 => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_c34e53e1a8d4?.tagName || "") ? String(_c34e53e1a8d4.value || "").slice(_c34e53e1a8d4.selectionStart || 0, _c34e53e1a8d4.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, _0x87f761_2 = (_c34e53e1a8d4, _ab3b86de1acd) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_c34e53e1a8d4?.tagName || "")) {
            const _552b719f6d8c = _c34e53e1a8d4.selectionStart || 0, _afabfecc2d99 = _c34e53e1a8d4.selectionEnd || 0, _c45bcff19bd5 = String(_c34e53e1a8d4.value || "");
            _c34e53e1a8d4.value = _c45bcff19bd5.slice(0, _552b719f6d8c) + _ab3b86de1acd + _c45bcff19bd5.slice(_afabfecc2d99);
            const _5b3d78640d6a = _552b719f6d8c + String(_ab3b86de1acd).length;
            return _c34e53e1a8d4.setSelectionRange(_5b3d78640d6a, _5b3d78640d6a), void _c34e53e1a8d4.dispatchEvent(new Event("\x69\x6e\x70\x75\x74", {
              bubbles: !0
            }));
          }
          document.execCommand?.("\x69\x6e\x73\x65\x72\x74\x54\x65\x78\x74", !1, _ab3b86de1acd);
        } catch {}
      }, _0x87f761_3 = async _c34e53e1a8d4 => {
        try {
          await (navigator.clipboard?.writeText(String(_c34e53e1a8d4 || "")));
        } catch {
          try {
            document.execCommand?.("\x63\x6f\x70\x79");
          } catch {}
        }
      }, _c34e53e1a8d4 = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _ab3b86de1acd = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), _0x87f761_6 = _552b719f6d8c => {
        try {
          _c34e53e1a8d4?.postMessage(_552b719f6d8c, "\x2a");
        } catch {}
        try {
          _ab3b86de1acd && _ab3b86de1acd !== _c34e53e1a8d4 && _ab3b86de1acd.postMessage(_552b719f6d8c, "\x2a");
        } catch {}
        try {
          window.parent?.postMessage(_552b719f6d8c, "\x2a");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_552b719f6d8c, "\x2a");
        } catch {}
      };
      window.addEventListener("\x6b\x65\x79\x64\x6f\x77\x6e", _c34e53e1a8d4 => {
        const _ab3b86de1acd = String(_c34e53e1a8d4.key || "").toLowerCase();
        if (_c34e53e1a8d4.altKey && !_c34e53e1a8d4.ctrlKey && !_c34e53e1a8d4.metaKey && 2 !== _c34e53e1a8d4.location && "\x61\x6c\x74" === _ab3b86de1acd) return _c34e53e1a8d4.preventDefault(), 
        _c34e53e1a8d4.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x70\x72\x69\x6d\x65"
        });
        if (_c34e53e1a8d4.altKey && !_c34e53e1a8d4.ctrlKey && !_c34e53e1a8d4.metaKey && 2 !== _c34e53e1a8d4.location && _0x87f761_0(_c34e53e1a8d4.target) && /^[acxvzy]$/.test(_ab3b86de1acd)) {
          if (_c34e53e1a8d4.preventDefault(), _c34e53e1a8d4.stopPropagation(), "\x61" === _ab3b86de1acd) return void (_c34e53e1a8d4.target?.select ? _c34e53e1a8d4.target.select() : document.execCommand?.("\x73\x65\x6c\x65\x63\x74\x41\x6c\x6c"));
          if ("\x63" === _ab3b86de1acd) return void _0x87f761_3(_0x87f761_1(_c34e53e1a8d4.target));
          if ("\x78" === _ab3b86de1acd) {
            const _ab3b86de1acd = _0x87f761_1(_c34e53e1a8d4.target);
            return _0x87f761_3(_ab3b86de1acd), void _0x87f761_2(_c34e53e1a8d4.target, "");
          }
          if ("\x76" === _ab3b86de1acd) return void navigator.clipboard?.readText?.().then(_ab3b86de1acd => _0x87f761_2(_c34e53e1a8d4.target, _ab3b86de1acd)).catch(() => {
            try {
              document.execCommand?.("\x70\x61\x73\x74\x65");
            } catch {}
          });
          if ("\x7a" === _ab3b86de1acd) return void document.execCommand?.("\x75\x6e\x64\x6f");
          if ("\x79" === _ab3b86de1acd) return void document.execCommand?.("\x72\x65\x64\x6f");
        }
        return !_c34e53e1a8d4.altKey || _c34e53e1a8d4.ctrlKey || _c34e53e1a8d4.metaKey || 2 === _c34e53e1a8d4.location || !/^[1-9]$/.test(_ab3b86de1acd) && ![ "\x6c", "\x64", "\x74", "\x77", "\x72", "\x61\x72\x72\x6f\x77\x6c\x65\x66\x74", "\x61\x72\x72\x6f\x77\x72\x69\x67\x68\x74", "\x74\x61\x62" ].includes(_ab3b86de1acd) ? void 0 : (_c34e53e1a8d4.preventDefault(), 
        _c34e53e1a8d4.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x73\x68\x6f\x72\x74\x63\x75\x74",
          key: _ab3b86de1acd,
          code: _c34e53e1a8d4.code || "",
          location: _c34e53e1a8d4.location || 0,
          shiftKey: !!_c34e53e1a8d4.shiftKey
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
  }, _0x87f761_2 = _c34e53e1a8d4 => {
    if (!_c34e53e1a8d4) return !1;
    try {
      return _c34e53e1a8d4.document.open(), _c34e53e1a8d4.document.write("\x3c\x21\x64\x6f\x63\x74\x79\x70\x65\x20\x68\x74\x6d\x6c\x3e\x3c\x68\x74\x6d\x6c\x3e\x3c\x68\x65\x61\x64\x3e\x3c\x6d\x65\x74\x61\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x22\x75\x74\x66\x2d\x38\x22\x3e\x3c\x6d\x65\x74\x61\x20\x6e\x61\x6d\x65\x3d\x22\x76\x69\x65\x77\x70\x6f\x72\x74\x22\x20\x63\x6f\x6e\x74\x65\x6e\x74\x3d\x22\x77\x69\x64\x74\x68\x3d\x64\x65\x76\x69\x63\x65\x2d\x77\x69\x64\x74\x68\x2c\x69\x6e\x69\x74\x69\x61\x6c\x2d\x73\x63\x61\x6c\x65\x3d\x31\x22\x3e\x3c\x74\x69\x74\x6c\x65\x3e\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61\x3c\x2f\x74\x69\x74\x6c\x65\x3e\x3c\x73\x74\x79\x6c\x65\x3e\x68\x74\x6d\x6c\x2c\x62\x6f\x64\x79\x7b\x6d\x61\x72\x67\x69\x6e\x3a\x30\x3b\x77\x69\x64\x74\x68\x3a\x31\x30\x30\x25\x3b\x68\x65\x69\x67\x68\x74\x3a\x31\x30\x30\x25\x3b\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x3a\x23\x66\x66\x66\x3b\x63\x6f\x6c\x6f\x72\x3a\x23\x31\x31\x31\x3b\x66\x6f\x6e\x74\x3a\x32\x38\x70\x78\x20\x52\x61\x6c\x65\x77\x61\x79\x2c\x41\x72\x69\x61\x6c\x2c\x73\x61\x6e\x73\x2d\x73\x65\x72\x69\x66\x7d\x62\x6f\x64\x79\x7b\x64\x69\x73\x70\x6c\x61\x79\x3a\x67\x72\x69\x64\x3b\x70\x6c\x61\x63\x65\x2d\x69\x74\x65\x6d\x73\x3a\x63\x65\x6e\x74\x65\x72\x3b\x74\x65\x78\x74\x2d\x61\x6c\x69\x67\x6e\x3a\x63\x65\x6e\x74\x65\x72\x7d\x6d\x61\x69\x6e\x7b\x70\x61\x64\x64\x69\x6e\x67\x3a\x32\x34\x70\x78\x7d\x3c\x2f\x73\x74\x79\x6c\x65\x3e\x3c\x2f\x68\x65\x61\x64\x3e\x3c\x62\x6f\x64\x79\x3e\x3c\x6d\x61\x69\x6e\x3e\x61\x72\x65\x20\x79\x6f\x75\x20\x74\x72\x79\x69\x6e\x67\x20\x74\x6f\x20\x68\x61\x63\x6b\x20\x6d\x65\x20\x73\x63\x61\x6d\x6d\x61\x3f\x3f\x3f\x3c\x2f\x6d\x61\x69\x6e\x3e\x3c\x2f\x62\x6f\x64\x79\x3e\x3c\x2f\x68\x74\x6d\x6c\x3e"), 
      _c34e53e1a8d4.document.close(), _c34e53e1a8d4.focus?.(), !0;
    } catch {
      return !1;
    }
  }, _0x87f761_3 = () => {
    const _c34e53e1a8d4 = null;
    return {
      closed: !1,
      focus() {
        try {
          _c34e53e1a8d4?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _c34e53e1a8d4?.blur?.();
        } catch {}
      },
      close() {
        try {
          _c34e53e1a8d4?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return _0x87f761_2(_c34e53e1a8d4), this;
        },
        write() {
          _0x87f761_2(_c34e53e1a8d4);
        },
        writeln() {
          _0x87f761_2(_c34e53e1a8d4);
        },
        close() {
          _0x87f761_2(_c34e53e1a8d4);
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
          _0x87f761_2(_c34e53e1a8d4);
        },
        toString: () => "\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61"
      }
    };
  }, _0x87f761_4 = _c34e53e1a8d4 => {
    const _ab3b86de1acd = String(_c34e53e1a8d4 || "").trim();
    if (/^(?:blob|data):/i.test(_ab3b86de1acd)) return !1;
    const _552b719f6d8c = _ab3b86de1acd.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_552b719f6d8c);
  }, _0x87f761_5 = (_c34e53e1a8d4, _ab3b86de1acd = "") => {
    const _552b719f6d8c = String(_c34e53e1a8d4 || "").trim();
    if (!_552b719f6d8c || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "\x6e\x79\x78\x3a\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x2d\x72\x65\x71\x75\x65\x73\x74",
        url: _552b719f6d8c,
        filename: String(_ab3b86de1acd || ""),
        sourceUrl: String(location.href || "")
      }, "\x2a"), !0;
    } catch {
      return !1;
    }
  };
  let _0x87f761_6 = (..._ab3b86de1acd) => _0x87f761_4(_ab3b86de1acd[0]) && _0x87f761_5(_ab3b86de1acd[0]) ? null : !_0x87f761_1() && _c34e53e1a8d4 ? _c34e53e1a8d4(..._ab3b86de1acd) : _0x87f761_3();
  try {
    "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _c34e53e1a8d4 && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof \u{50}\u{72}\u{6f}\u{78}\u{79} && (_0x87f761_6 = new \u{50}\u{72}\u{6f}\u{78}\u{79}(_c34e53e1a8d4, {
      apply: (_c34e53e1a8d4, _ab3b86de1acd, _552b719f6d8c) => _0x87f761_4(_552b719f6d8c[0]) && _0x87f761_5(_552b719f6d8c[0]) ? null : _0x87f761_1() ? _0x87f761_3() : Reflect.apply(_c34e53e1a8d4, _ab3b86de1acd, _552b719f6d8c),
      construct(_c34e53e1a8d4, _ab3b86de1acd, _552b719f6d8c) {
        if (!_0x87f761_1()) try {
          return Reflect.construct(_c34e53e1a8d4, _ab3b86de1acd, _552b719f6d8c);
        } catch {
          return Reflect.apply(_c34e53e1a8d4, window, _ab3b86de1acd);
        }
        return _0x87f761_3();
      },
      get: (_c34e53e1a8d4, _ab3b86de1acd, _552b719f6d8c) => "\x5f\x5f\x6e\x79\x78\x50\x6f\x70\x75\x70\x47\x75\x61\x72\x64" === _ab3b86de1acd || ("\x74\x6f\x53\x74\x72\x69\x6e\x67" === _ab3b86de1acd ? () => "\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x6f\x70\x65\x6e\x28\x29\x20\x7b\x20\x5b\x6e\x61\x74\x69\x76\x65\x20\x63\x6f\x64\x65\x5d\x20\x7d" : Reflect.get(_c34e53e1a8d4, _ab3b86de1acd, _552b719f6d8c))
    }));
  } catch {}
  const _0x87f761_7 = _c34e53e1a8d4 => {
    const _ab3b86de1acd = String(_c34e53e1a8d4 || "").toLowerCase();
    return _ab3b86de1acd && ![ "\x5f\x73\x65\x6c\x66", "\x5f\x70\x61\x72\x65\x6e\x74", "\x5f\x74\x6f\x70" ].includes(_ab3b86de1acd);
  }, _0x87f761_8 = _c34e53e1a8d4 => !!_c34e53e1a8d4 && (!!_c34e53e1a8d4.hasAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || _0x87f761_4(_c34e53e1a8d4.href || _c34e53e1a8d4.getAttribute("\x68\x72\x65\x66") || ""));
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
    const _c34e53e1a8d4 = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!_0x87f761_8(this) || !_0x87f761_5(this.href || this.getAttribute("\x68\x72\x65\x66"), this.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "")) {
        if (!_0x87f761_1() || !_0x87f761_7(this.target)) return _c34e53e1a8d4.call(this);
        _0x87f761_3();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("\x63\x6c\x69\x63\x6b", _c34e53e1a8d4 => {
    const _ab3b86de1acd = _c34e53e1a8d4.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_ab3b86de1acd) return _0x87f761_8(_ab3b86de1acd) && _0x87f761_5(_ab3b86de1acd.href || _ab3b86de1acd.getAttribute("\x68\x72\x65\x66"), _ab3b86de1acd.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_c34e53e1a8d4.preventDefault(), 
    void _c34e53e1a8d4.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_ab3b86de1acd.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_c34e53e1a8d4.preventDefault(), 
    _c34e53e1a8d4.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x61\x75\x78\x63\x6c\x69\x63\x6b", _c34e53e1a8d4 => {
    const _ab3b86de1acd = _c34e53e1a8d4.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_ab3b86de1acd) return _0x87f761_8(_ab3b86de1acd) && _0x87f761_5(_ab3b86de1acd.href || _ab3b86de1acd.getAttribute("\x68\x72\x65\x66"), _ab3b86de1acd.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_c34e53e1a8d4.preventDefault(), 
    void _c34e53e1a8d4.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_ab3b86de1acd.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_c34e53e1a8d4.preventDefault(), 
    _c34e53e1a8d4.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x73\x75\x62\x6d\x69\x74", _c34e53e1a8d4 => {
    if (!_0x87f761_1()) return;
    const _ab3b86de1acd = _c34e53e1a8d4.target;
    _ab3b86de1acd && "\x46\x4f\x52\x4d" === String(_ab3b86de1acd.tagName || "").toUpperCase() && _0x87f761_7(_ab3b86de1acd.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_c34e53e1a8d4.preventDefault(), 
    _c34e53e1a8d4.stopImmediatePropagation(), _0x87f761_3());
  }, !0));
  const _0x87f761_9 = _c34e53e1a8d4 => {
    const _ab3b86de1acd = window[_c34e53e1a8d4];
    if ("\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _ab3b86de1acd && !_ab3b86de1acd.__nyxWrapped) try {
      Object.setPrototypeOf(_0x87f761_2, _ab3b86de1acd), _0x87f761_2.prototype = _ab3b86de1acd.prototype, 
      Object.defineProperty(_0x87f761_2, "\x5f\x5f\x6e\x79\x78\x57\x72\x61\x70\x70\x65\x64", {
        value: !0
      }), window[_c34e53e1a8d4] = _0x87f761_2;
    } catch {}
    function _0x87f761_2(_c34e53e1a8d4, _552b719f6d8c, _afabfecc2d99) {
      let _c45bcff19bd5 = Number(_c34e53e1a8d4), _5b3d78640d6a = Number(_552b719f6d8c);
      return (!Number.isFinite(_c45bcff19bd5) || _c45bcff19bd5 < 0) && (_c45bcff19bd5 = 0), 
      (!Number.isFinite(_5b3d78640d6a) || _5b3d78640d6a <= _c45bcff19bd5) && (_5b3d78640d6a = _c45bcff19bd5 + .001), 
      Reflect.construct(_ab3b86de1acd, [ _c45bcff19bd5, _5b3d78640d6a, null == _afabfecc2d99 ? "" : String(_afabfecc2d99) ], new.target || _0x87f761_2);
    }
  };
  _0x87f761_9("\x56\x54\x54\x43\x75\x65"), _0x87f761_9("\x54\x65\x78\x74\x54\x72\x61\x63\x6b\x43\x75\x65");
})();
