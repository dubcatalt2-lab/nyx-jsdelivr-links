(() => {
  if ("\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" == typeof window || window.\u{5f}\u{5f}\u{6e}\u{79}\u{78}\u{53}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74}\u{47}\u{75}\u{61}\u{72}\u{64}\u{73}) return;
  window.\u{5f}\u{5f}\u{6e}\u{79}\u{78}\u{53}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74}\u{47}\u{75}\u{61}\u{72}\u{64}\u{73} = !0;
  const _5381c97232da = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "\x74\x72\x75\x73\x74\x65\x64\x54\x79\x70\x65\x73", {
      configurable: !0,
      value: {
        createPolicy: (_5381c97232da, _ffe5f5c42c8a = {}) => ({
          createHTML: _5381c97232da => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _ffe5f5c42c8a.createHTML ? _ffe5f5c42c8a.createHTML(_5381c97232da) : _5381c97232da,
          createScript: _5381c97232da => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _ffe5f5c42c8a.createScript ? _ffe5f5c42c8a.createScript(_5381c97232da) : _5381c97232da,
          createScriptURL: _5381c97232da => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _ffe5f5c42c8a.createScriptURL ? _ffe5f5c42c8a.createScriptURL(_5381c97232da) : _5381c97232da
        })
      }
    });
  } catch {}
  try {
    const _5381c97232da = Object.getOwnPropertyDescriptor(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74"), _ffe5f5c42c8a = document.createElement("\x73\x63\x72\x69\x70\x74");
    _ffe5f5c42c8a.setAttribute("\x6e\x6f\x6e\x63\x65", ""), Object.defineProperty(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74", {
      configurable: !0,
      get() {
        let _77a910e05347 = null;
        try {
          _77a910e05347 = _5381c97232da?.get?.call(this) || null;
        } catch {}
        return _77a910e05347 || this.querySelector?.("\x73\x63\x72\x69\x70\x74\x5b\x73\x72\x63\x5d\x2c\x73\x63\x72\x69\x70\x74") || _ffe5f5c42c8a;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const _0x87f761_0 = _5381c97232da => !(!_5381c97232da || !_5381c97232da.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_5381c97232da.tagName || "")), _0x87f761_1 = _5381c97232da => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_5381c97232da?.tagName || "") ? String(_5381c97232da.value || "").slice(_5381c97232da.selectionStart || 0, _5381c97232da.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, _0x87f761_2 = (_5381c97232da, _ffe5f5c42c8a) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_5381c97232da?.tagName || "")) {
            const _77a910e05347 = _5381c97232da.selectionStart || 0, _568659ea6a3b = _5381c97232da.selectionEnd || 0, _6991dad78cc8 = String(_5381c97232da.value || "");
            _5381c97232da.value = _6991dad78cc8.slice(0, _77a910e05347) + _ffe5f5c42c8a + _6991dad78cc8.slice(_568659ea6a3b);
            const _6904c21c31fb = _77a910e05347 + String(_ffe5f5c42c8a).length;
            return _5381c97232da.setSelectionRange(_6904c21c31fb, _6904c21c31fb), void _5381c97232da.dispatchEvent(new Event("\x69\x6e\x70\x75\x74", {
              bubbles: !0
            }));
          }
          document.execCommand?.("\x69\x6e\x73\x65\x72\x74\x54\x65\x78\x74", !1, _ffe5f5c42c8a);
        } catch {}
      }, _0x87f761_3 = async _5381c97232da => {
        try {
          await (navigator.clipboard?.writeText(String(_5381c97232da || "")));
        } catch {
          try {
            document.execCommand?.("\x63\x6f\x70\x79");
          } catch {}
        }
      }, _5381c97232da = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _ffe5f5c42c8a = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), _0x87f761_6 = _77a910e05347 => {
        try {
          _5381c97232da?.postMessage(_77a910e05347, "\x2a");
        } catch {}
        try {
          _ffe5f5c42c8a && _ffe5f5c42c8a !== _5381c97232da && _ffe5f5c42c8a.postMessage(_77a910e05347, "\x2a");
        } catch {}
        try {
          window.parent?.postMessage(_77a910e05347, "\x2a");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_77a910e05347, "\x2a");
        } catch {}
      };
      window.addEventListener("\x6b\x65\x79\x64\x6f\x77\x6e", _5381c97232da => {
        const _ffe5f5c42c8a = String(_5381c97232da.key || "").toLowerCase();
        if (_5381c97232da.altKey && !_5381c97232da.ctrlKey && !_5381c97232da.metaKey && 2 !== _5381c97232da.location && "\x61\x6c\x74" === _ffe5f5c42c8a) return _5381c97232da.preventDefault(), 
        _5381c97232da.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x70\x72\x69\x6d\x65"
        });
        if (_5381c97232da.altKey && !_5381c97232da.ctrlKey && !_5381c97232da.metaKey && 2 !== _5381c97232da.location && _0x87f761_0(_5381c97232da.target) && /^[acxvzy]$/.test(_ffe5f5c42c8a)) {
          if (_5381c97232da.preventDefault(), _5381c97232da.stopPropagation(), "\x61" === _ffe5f5c42c8a) return void (_5381c97232da.target?.select ? _5381c97232da.target.select() : document.execCommand?.("\x73\x65\x6c\x65\x63\x74\x41\x6c\x6c"));
          if ("\x63" === _ffe5f5c42c8a) return void _0x87f761_3(_0x87f761_1(_5381c97232da.target));
          if ("\x78" === _ffe5f5c42c8a) {
            const _ffe5f5c42c8a = _0x87f761_1(_5381c97232da.target);
            return _0x87f761_3(_ffe5f5c42c8a), void _0x87f761_2(_5381c97232da.target, "");
          }
          if ("\x76" === _ffe5f5c42c8a) return void navigator.clipboard?.readText?.().then(_ffe5f5c42c8a => _0x87f761_2(_5381c97232da.target, _ffe5f5c42c8a)).catch(() => {
            try {
              document.execCommand?.("\x70\x61\x73\x74\x65");
            } catch {}
          });
          if ("\x7a" === _ffe5f5c42c8a) return void document.execCommand?.("\x75\x6e\x64\x6f");
          if ("\x79" === _ffe5f5c42c8a) return void document.execCommand?.("\x72\x65\x64\x6f");
        }
        return !_5381c97232da.altKey || _5381c97232da.ctrlKey || _5381c97232da.metaKey || 2 === _5381c97232da.location || !/^[1-9]$/.test(_ffe5f5c42c8a) && ![ "\x6c", "\x64", "\x74", "\x77", "\x72", "\x61\x72\x72\x6f\x77\x6c\x65\x66\x74", "\x61\x72\x72\x6f\x77\x72\x69\x67\x68\x74", "\x74\x61\x62" ].includes(_ffe5f5c42c8a) ? void 0 : (_5381c97232da.preventDefault(), 
        _5381c97232da.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x73\x68\x6f\x72\x74\x63\x75\x74",
          key: _ffe5f5c42c8a,
          code: _5381c97232da.code || "",
          location: _5381c97232da.location || 0,
          shiftKey: !!_5381c97232da.shiftKey
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
  }, _0x87f761_2 = _5381c97232da => {
    if (!_5381c97232da) return !1;
    try {
      return _5381c97232da.document.open(), _5381c97232da.document.write("\x3c\x21\x64\x6f\x63\x74\x79\x70\x65\x20\x68\x74\x6d\x6c\x3e\x3c\x68\x74\x6d\x6c\x3e\x3c\x68\x65\x61\x64\x3e\x3c\x6d\x65\x74\x61\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x22\x75\x74\x66\x2d\x38\x22\x3e\x3c\x6d\x65\x74\x61\x20\x6e\x61\x6d\x65\x3d\x22\x76\x69\x65\x77\x70\x6f\x72\x74\x22\x20\x63\x6f\x6e\x74\x65\x6e\x74\x3d\x22\x77\x69\x64\x74\x68\x3d\x64\x65\x76\x69\x63\x65\x2d\x77\x69\x64\x74\x68\x2c\x69\x6e\x69\x74\x69\x61\x6c\x2d\x73\x63\x61\x6c\x65\x3d\x31\x22\x3e\x3c\x74\x69\x74\x6c\x65\x3e\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61\x3c\x2f\x74\x69\x74\x6c\x65\x3e\x3c\x73\x74\x79\x6c\x65\x3e\x68\x74\x6d\x6c\x2c\x62\x6f\x64\x79\x7b\x6d\x61\x72\x67\x69\x6e\x3a\x30\x3b\x77\x69\x64\x74\x68\x3a\x31\x30\x30\x25\x3b\x68\x65\x69\x67\x68\x74\x3a\x31\x30\x30\x25\x3b\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x3a\x23\x66\x66\x66\x3b\x63\x6f\x6c\x6f\x72\x3a\x23\x31\x31\x31\x3b\x66\x6f\x6e\x74\x3a\x32\x38\x70\x78\x20\x52\x61\x6c\x65\x77\x61\x79\x2c\x41\x72\x69\x61\x6c\x2c\x73\x61\x6e\x73\x2d\x73\x65\x72\x69\x66\x7d\x62\x6f\x64\x79\x7b\x64\x69\x73\x70\x6c\x61\x79\x3a\x67\x72\x69\x64\x3b\x70\x6c\x61\x63\x65\x2d\x69\x74\x65\x6d\x73\x3a\x63\x65\x6e\x74\x65\x72\x3b\x74\x65\x78\x74\x2d\x61\x6c\x69\x67\x6e\x3a\x63\x65\x6e\x74\x65\x72\x7d\x6d\x61\x69\x6e\x7b\x70\x61\x64\x64\x69\x6e\x67\x3a\x32\x34\x70\x78\x7d\x3c\x2f\x73\x74\x79\x6c\x65\x3e\x3c\x2f\x68\x65\x61\x64\x3e\x3c\x62\x6f\x64\x79\x3e\x3c\x6d\x61\x69\x6e\x3e\x61\x72\x65\x20\x79\x6f\x75\x20\x74\x72\x79\x69\x6e\x67\x20\x74\x6f\x20\x68\x61\x63\x6b\x20\x6d\x65\x20\x73\x63\x61\x6d\x6d\x61\x3f\x3f\x3f\x3c\x2f\x6d\x61\x69\x6e\x3e\x3c\x2f\x62\x6f\x64\x79\x3e\x3c\x2f\x68\x74\x6d\x6c\x3e"), 
      _5381c97232da.document.close(), _5381c97232da.focus?.(), !0;
    } catch {
      return !1;
    }
  }, _0x87f761_3 = () => {
    const _5381c97232da = null;
    return {
      closed: !1,
      focus() {
        try {
          _5381c97232da?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _5381c97232da?.blur?.();
        } catch {}
      },
      close() {
        try {
          _5381c97232da?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return _0x87f761_2(_5381c97232da), this;
        },
        write() {
          _0x87f761_2(_5381c97232da);
        },
        writeln() {
          _0x87f761_2(_5381c97232da);
        },
        close() {
          _0x87f761_2(_5381c97232da);
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
          _0x87f761_2(_5381c97232da);
        },
        toString: () => "\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61"
      }
    };
  }, _0x87f761_4 = _5381c97232da => {
    const _ffe5f5c42c8a = String(_5381c97232da || "").trim();
    if (/^(?:blob|data):/i.test(_ffe5f5c42c8a)) return !1;
    const _77a910e05347 = _ffe5f5c42c8a.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_77a910e05347);
  }, _0x87f761_5 = (_5381c97232da, _ffe5f5c42c8a = "") => {
    const _77a910e05347 = String(_5381c97232da || "").trim();
    if (!_77a910e05347 || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "\x6e\x79\x78\x3a\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x2d\x72\x65\x71\x75\x65\x73\x74",
        url: _77a910e05347,
        filename: String(_ffe5f5c42c8a || ""),
        sourceUrl: String(location.href || "")
      }, "\x2a"), !0;
    } catch {
      return !1;
    }
  };
  let _0x87f761_6 = (..._ffe5f5c42c8a) => _0x87f761_4(_ffe5f5c42c8a[0]) && _0x87f761_5(_ffe5f5c42c8a[0]) ? null : !_0x87f761_1() && _5381c97232da ? _5381c97232da(..._ffe5f5c42c8a) : _0x87f761_3();
  try {
    "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _5381c97232da && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof \u{50}\u{72}\u{6f}\u{78}\u{79} && (_0x87f761_6 = new \u{50}\u{72}\u{6f}\u{78}\u{79}(_5381c97232da, {
      apply: (_5381c97232da, _ffe5f5c42c8a, _77a910e05347) => _0x87f761_4(_77a910e05347[0]) && _0x87f761_5(_77a910e05347[0]) ? null : _0x87f761_1() ? _0x87f761_3() : Reflect.apply(_5381c97232da, _ffe5f5c42c8a, _77a910e05347),
      construct(_5381c97232da, _ffe5f5c42c8a, _77a910e05347) {
        if (!_0x87f761_1()) try {
          return Reflect.construct(_5381c97232da, _ffe5f5c42c8a, _77a910e05347);
        } catch {
          return Reflect.apply(_5381c97232da, window, _ffe5f5c42c8a);
        }
        return _0x87f761_3();
      },
      get: (_5381c97232da, _ffe5f5c42c8a, _77a910e05347) => "\x5f\x5f\x6e\x79\x78\x50\x6f\x70\x75\x70\x47\x75\x61\x72\x64" === _ffe5f5c42c8a || ("\x74\x6f\x53\x74\x72\x69\x6e\x67" === _ffe5f5c42c8a ? () => "\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x6f\x70\x65\x6e\x28\x29\x20\x7b\x20\x5b\x6e\x61\x74\x69\x76\x65\x20\x63\x6f\x64\x65\x5d\x20\x7d" : Reflect.get(_5381c97232da, _ffe5f5c42c8a, _77a910e05347))
    }));
  } catch {}
  const _0x87f761_7 = _5381c97232da => {
    const _ffe5f5c42c8a = String(_5381c97232da || "").toLowerCase();
    return _ffe5f5c42c8a && ![ "\x5f\x73\x65\x6c\x66", "\x5f\x70\x61\x72\x65\x6e\x74", "\x5f\x74\x6f\x70" ].includes(_ffe5f5c42c8a);
  }, _0x87f761_8 = _5381c97232da => !!_5381c97232da && (!!_5381c97232da.hasAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || _0x87f761_4(_5381c97232da.href || _5381c97232da.getAttribute("\x68\x72\x65\x66") || ""));
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
    const _5381c97232da = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!_0x87f761_8(this) || !_0x87f761_5(this.href || this.getAttribute("\x68\x72\x65\x66"), this.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "")) {
        if (!_0x87f761_1() || !_0x87f761_7(this.target)) return _5381c97232da.call(this);
        _0x87f761_3();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("\x63\x6c\x69\x63\x6b", _5381c97232da => {
    const _ffe5f5c42c8a = _5381c97232da.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_ffe5f5c42c8a) return _0x87f761_8(_ffe5f5c42c8a) && _0x87f761_5(_ffe5f5c42c8a.href || _ffe5f5c42c8a.getAttribute("\x68\x72\x65\x66"), _ffe5f5c42c8a.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_5381c97232da.preventDefault(), 
    void _5381c97232da.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_ffe5f5c42c8a.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_5381c97232da.preventDefault(), 
    _5381c97232da.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x61\x75\x78\x63\x6c\x69\x63\x6b", _5381c97232da => {
    const _ffe5f5c42c8a = _5381c97232da.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_ffe5f5c42c8a) return _0x87f761_8(_ffe5f5c42c8a) && _0x87f761_5(_ffe5f5c42c8a.href || _ffe5f5c42c8a.getAttribute("\x68\x72\x65\x66"), _ffe5f5c42c8a.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_5381c97232da.preventDefault(), 
    void _5381c97232da.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_ffe5f5c42c8a.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_5381c97232da.preventDefault(), 
    _5381c97232da.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x73\x75\x62\x6d\x69\x74", _5381c97232da => {
    if (!_0x87f761_1()) return;
    const _ffe5f5c42c8a = _5381c97232da.target;
    _ffe5f5c42c8a && "\x46\x4f\x52\x4d" === String(_ffe5f5c42c8a.tagName || "").toUpperCase() && _0x87f761_7(_ffe5f5c42c8a.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_5381c97232da.preventDefault(), 
    _5381c97232da.stopImmediatePropagation(), _0x87f761_3());
  }, !0));
  const _0x87f761_9 = _5381c97232da => {
    const _ffe5f5c42c8a = window[_5381c97232da];
    if ("\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _ffe5f5c42c8a && !_ffe5f5c42c8a.__nyxWrapped) try {
      Object.setPrototypeOf(_0x87f761_2, _ffe5f5c42c8a), _0x87f761_2.prototype = _ffe5f5c42c8a.prototype, 
      Object.defineProperty(_0x87f761_2, "\x5f\x5f\x6e\x79\x78\x57\x72\x61\x70\x70\x65\x64", {
        value: !0
      }), window[_5381c97232da] = _0x87f761_2;
    } catch {}
    function _0x87f761_2(_5381c97232da, _77a910e05347, _568659ea6a3b) {
      let _6991dad78cc8 = Number(_5381c97232da), _6904c21c31fb = Number(_77a910e05347);
      return (!Number.isFinite(_6991dad78cc8) || _6991dad78cc8 < 0) && (_6991dad78cc8 = 0), 
      (!Number.isFinite(_6904c21c31fb) || _6904c21c31fb <= _6991dad78cc8) && (_6904c21c31fb = _6991dad78cc8 + .001), 
      Reflect.construct(_ffe5f5c42c8a, [ _6991dad78cc8, _6904c21c31fb, null == _568659ea6a3b ? "" : String(_568659ea6a3b) ], new.target || _0x87f761_2);
    }
  };
  _0x87f761_9("\x56\x54\x54\x43\x75\x65"), _0x87f761_9("\x54\x65\x78\x74\x54\x72\x61\x63\x6b\x43\x75\x65");
})();
