(() => {
  if ("\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" == typeof window || window.__nyxStudyJetGuards) return;
  window.__nyxStudyJetGuards = !0;
  const _b98e6d93d9ff = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "\x74\x72\x75\x73\x74\x65\x64\x54\x79\x70\x65\x73", {
      configurable: !0,
      value: {
        createPolicy: (_b98e6d93d9ff, _f31dac319f83 = {}) => ({
          createHTML: _b98e6d93d9ff => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _f31dac319f83.createHTML ? _f31dac319f83.createHTML(_b98e6d93d9ff) : _b98e6d93d9ff,
          createScript: _b98e6d93d9ff => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _f31dac319f83.createScript ? _f31dac319f83.createScript(_b98e6d93d9ff) : _b98e6d93d9ff,
          createScriptURL: _b98e6d93d9ff => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _f31dac319f83.createScriptURL ? _f31dac319f83.createScriptURL(_b98e6d93d9ff) : _b98e6d93d9ff
        })
      }
    });
  } catch {}
  try {
    const _b98e6d93d9ff = Object.getOwnPropertyDescriptor(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74"), _f31dac319f83 = document.createElement("\x73\x63\x72\x69\x70\x74");
    _f31dac319f83.setAttribute("\x6e\x6f\x6e\x63\x65", ""), Object.defineProperty(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74", {
      configurable: !0,
      get() {
        let _66df9ac1a907 = null;
        try {
          _66df9ac1a907 = _b98e6d93d9ff?.get?.call(this) || null;
        } catch {}
        return _66df9ac1a907 || this.querySelector?.("\x73\x63\x72\x69\x70\x74\x5b\x73\x72\x63\x5d\x2c\x73\x63\x72\x69\x70\x74") || _f31dac319f83;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const _0x87f761_0 = _b98e6d93d9ff => !(!_b98e6d93d9ff || !_b98e6d93d9ff.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_b98e6d93d9ff.tagName || "")), _0x87f761_1 = _b98e6d93d9ff => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_b98e6d93d9ff?.tagName || "") ? String(_b98e6d93d9ff.value || "").slice(_b98e6d93d9ff.selectionStart || 0, _b98e6d93d9ff.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, _0x87f761_2 = (_b98e6d93d9ff, _f31dac319f83) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_b98e6d93d9ff?.tagName || "")) {
            const _66df9ac1a907 = _b98e6d93d9ff.selectionStart || 0, _bce63f43ee73 = _b98e6d93d9ff.selectionEnd || 0, _fa32e9f0f5a8 = String(_b98e6d93d9ff.value || "");
            _b98e6d93d9ff.value = _fa32e9f0f5a8.slice(0, _66df9ac1a907) + _f31dac319f83 + _fa32e9f0f5a8.slice(_bce63f43ee73);
            const _1291137fa703 = _66df9ac1a907 + String(_f31dac319f83).length;
            return _b98e6d93d9ff.setSelectionRange(_1291137fa703, _1291137fa703), void _b98e6d93d9ff.dispatchEvent(new Event("\x69\x6e\x70\x75\x74", {
              bubbles: !0
            }));
          }
          document.execCommand?.("\x69\x6e\x73\x65\x72\x74\x54\x65\x78\x74", !1, _f31dac319f83);
        } catch {}
      }, _0x87f761_3 = async _b98e6d93d9ff => {
        try {
          await (navigator.clipboard?.writeText(String(_b98e6d93d9ff || "")));
        } catch {
          try {
            document.execCommand?.("\x63\x6f\x70\x79");
          } catch {}
        }
      }, _b98e6d93d9ff = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _f31dac319f83 = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), _0x87f761_6 = _66df9ac1a907 => {
        try {
          _b98e6d93d9ff?.postMessage(_66df9ac1a907, "\x2a");
        } catch {}
        try {
          _f31dac319f83 && _f31dac319f83 !== _b98e6d93d9ff && _f31dac319f83.postMessage(_66df9ac1a907, "\x2a");
        } catch {}
        try {
          window.parent?.postMessage(_66df9ac1a907, "\x2a");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_66df9ac1a907, "\x2a");
        } catch {}
      };
      window.addEventListener("\x6b\x65\x79\x64\x6f\x77\x6e", _b98e6d93d9ff => {
        const _f31dac319f83 = String(_b98e6d93d9ff.key || "").toLowerCase();
        if (_b98e6d93d9ff.altKey && !_b98e6d93d9ff.ctrlKey && !_b98e6d93d9ff.metaKey && 2 !== _b98e6d93d9ff.location && "\x61\x6c\x74" === _f31dac319f83) return _b98e6d93d9ff.preventDefault(), 
        _b98e6d93d9ff.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x70\x72\x69\x6d\x65"
        });
        if (_b98e6d93d9ff.altKey && !_b98e6d93d9ff.ctrlKey && !_b98e6d93d9ff.metaKey && 2 !== _b98e6d93d9ff.location && _0x87f761_0(_b98e6d93d9ff.target) && /^[acxvzy]$/.test(_f31dac319f83)) {
          if (_b98e6d93d9ff.preventDefault(), _b98e6d93d9ff.stopPropagation(), "\x61" === _f31dac319f83) return void (_b98e6d93d9ff.target?.select ? _b98e6d93d9ff.target.select() : document.execCommand?.("\x73\x65\x6c\x65\x63\x74\x41\x6c\x6c"));
          if ("\x63" === _f31dac319f83) return void _0x87f761_3(_0x87f761_1(_b98e6d93d9ff.target));
          if ("\x78" === _f31dac319f83) {
            const _f31dac319f83 = _0x87f761_1(_b98e6d93d9ff.target);
            return _0x87f761_3(_f31dac319f83), void _0x87f761_2(_b98e6d93d9ff.target, "");
          }
          if ("\x76" === _f31dac319f83) return void navigator.clipboard?.readText?.().then(_f31dac319f83 => _0x87f761_2(_b98e6d93d9ff.target, _f31dac319f83)).catch(() => {
            try {
              document.execCommand?.("\x70\x61\x73\x74\x65");
            } catch {}
          });
          if ("\x7a" === _f31dac319f83) return void document.execCommand?.("\x75\x6e\x64\x6f");
          if ("\x79" === _f31dac319f83) return void document.execCommand?.("\x72\x65\x64\x6f");
        }
        return !_b98e6d93d9ff.altKey || _b98e6d93d9ff.ctrlKey || _b98e6d93d9ff.metaKey || 2 === _b98e6d93d9ff.location || !/^[1-9]$/.test(_f31dac319f83) && ![ "\x6c", "\x64", "\x74", "\x77", "\x72", "\x61\x72\x72\x6f\x77\x6c\x65\x66\x74", "\x61\x72\x72\x6f\x77\x72\x69\x67\x68\x74", "\x74\x61\x62" ].includes(_f31dac319f83) ? void 0 : (_b98e6d93d9ff.preventDefault(), 
        _b98e6d93d9ff.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x73\x68\x6f\x72\x74\x63\x75\x74",
          key: _f31dac319f83,
          code: _b98e6d93d9ff.code || "",
          location: _b98e6d93d9ff.location || 0,
          shiftKey: !!_b98e6d93d9ff.shiftKey
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
  }, _0x87f761_2 = _b98e6d93d9ff => {
    if (!_b98e6d93d9ff) return !1;
    try {
      return _b98e6d93d9ff.document.open(), _b98e6d93d9ff.document.write("\x3c\x21\x64\x6f\x63\x74\x79\x70\x65\x20\x68\x74\x6d\x6c\x3e\x3c\x68\x74\x6d\x6c\x3e\x3c\x68\x65\x61\x64\x3e\x3c\x6d\x65\x74\x61\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x22\x75\x74\x66\x2d\x38\x22\x3e\x3c\x6d\x65\x74\x61\x20\x6e\x61\x6d\x65\x3d\x22\x76\x69\x65\x77\x70\x6f\x72\x74\x22\x20\x63\x6f\x6e\x74\x65\x6e\x74\x3d\x22\x77\x69\x64\x74\x68\x3d\x64\x65\x76\x69\x63\x65\x2d\x77\x69\x64\x74\x68\x2c\x69\x6e\x69\x74\x69\x61\x6c\x2d\x73\x63\x61\x6c\x65\x3d\x31\x22\x3e\x3c\x74\x69\x74\x6c\x65\x3e\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61\x3c\x2f\x74\x69\x74\x6c\x65\x3e\x3c\x73\x74\x79\x6c\x65\x3e\x68\x74\x6d\x6c\x2c\x62\x6f\x64\x79\x7b\x6d\x61\x72\x67\x69\x6e\x3a\x30\x3b\x77\x69\x64\x74\x68\x3a\x31\x30\x30\x25\x3b\x68\x65\x69\x67\x68\x74\x3a\x31\x30\x30\x25\x3b\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x3a\x23\x66\x66\x66\x3b\x63\x6f\x6c\x6f\x72\x3a\x23\x31\x31\x31\x3b\x66\x6f\x6e\x74\x3a\x32\x38\x70\x78\x20\x52\x61\x6c\x65\x77\x61\x79\x2c\x41\x72\x69\x61\x6c\x2c\x73\x61\x6e\x73\x2d\x73\x65\x72\x69\x66\x7d\x62\x6f\x64\x79\x7b\x64\x69\x73\x70\x6c\x61\x79\x3a\x67\x72\x69\x64\x3b\x70\x6c\x61\x63\x65\x2d\x69\x74\x65\x6d\x73\x3a\x63\x65\x6e\x74\x65\x72\x3b\x74\x65\x78\x74\x2d\x61\x6c\x69\x67\x6e\x3a\x63\x65\x6e\x74\x65\x72\x7d\x6d\x61\x69\x6e\x7b\x70\x61\x64\x64\x69\x6e\x67\x3a\x32\x34\x70\x78\x7d\x3c\x2f\x73\x74\x79\x6c\x65\x3e\x3c\x2f\x68\x65\x61\x64\x3e\x3c\x62\x6f\x64\x79\x3e\x3c\x6d\x61\x69\x6e\x3e\x61\x72\x65\x20\x79\x6f\x75\x20\x74\x72\x79\x69\x6e\x67\x20\x74\x6f\x20\x68\x61\x63\x6b\x20\x6d\x65\x20\x73\x63\x61\x6d\x6d\x61\x3f\x3f\x3f\x3c\x2f\x6d\x61\x69\x6e\x3e\x3c\x2f\x62\x6f\x64\x79\x3e\x3c\x2f\x68\x74\x6d\x6c\x3e"), 
      _b98e6d93d9ff.document.close(), _b98e6d93d9ff.focus?.(), !0;
    } catch {
      return !1;
    }
  }, _0x87f761_3 = () => {
    const _b98e6d93d9ff = null;
    return {
      closed: !1,
      focus() {
        try {
          _b98e6d93d9ff?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _b98e6d93d9ff?.blur?.();
        } catch {}
      },
      close() {
        try {
          _b98e6d93d9ff?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return _0x87f761_2(_b98e6d93d9ff), this;
        },
        write() {
          _0x87f761_2(_b98e6d93d9ff);
        },
        writeln() {
          _0x87f761_2(_b98e6d93d9ff);
        },
        close() {
          _0x87f761_2(_b98e6d93d9ff);
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
          _0x87f761_2(_b98e6d93d9ff);
        },
        toString: () => "\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61"
      }
    };
  }, _0x87f761_4 = _b98e6d93d9ff => {
    const _f31dac319f83 = String(_b98e6d93d9ff || "").trim();
    if (/^(?:blob|data):/i.test(_f31dac319f83)) return !1;
    const _66df9ac1a907 = _f31dac319f83.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_66df9ac1a907);
  }, _0x87f761_5 = (_b98e6d93d9ff, _f31dac319f83 = "") => {
    const _66df9ac1a907 = String(_b98e6d93d9ff || "").trim();
    if (!_66df9ac1a907 || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "\x6e\x79\x78\x3a\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x2d\x72\x65\x71\x75\x65\x73\x74",
        url: _66df9ac1a907,
        filename: String(_f31dac319f83 || ""),
        sourceUrl: String(location.href || "")
      }, "\x2a"), !0;
    } catch {
      return !1;
    }
  };
  let _0x87f761_6 = (..._f31dac319f83) => _0x87f761_4(_f31dac319f83[0]) && _0x87f761_5(_f31dac319f83[0]) ? null : !_0x87f761_1() && _b98e6d93d9ff ? _b98e6d93d9ff(..._f31dac319f83) : _0x87f761_3();
  try {
    "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _b98e6d93d9ff && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof \u{50}\u{72}\u{6f}\u{78}\u{79} && (_0x87f761_6 = new \u{50}\u{72}\u{6f}\u{78}\u{79}(_b98e6d93d9ff, {
      apply: (_b98e6d93d9ff, _f31dac319f83, _66df9ac1a907) => _0x87f761_4(_66df9ac1a907[0]) && _0x87f761_5(_66df9ac1a907[0]) ? null : _0x87f761_1() ? _0x87f761_3() : Reflect.apply(_b98e6d93d9ff, _f31dac319f83, _66df9ac1a907),
      construct(_b98e6d93d9ff, _f31dac319f83, _66df9ac1a907) {
        if (!_0x87f761_1()) try {
          return Reflect.construct(_b98e6d93d9ff, _f31dac319f83, _66df9ac1a907);
        } catch {
          return Reflect.apply(_b98e6d93d9ff, window, _f31dac319f83);
        }
        return _0x87f761_3();
      },
      get: (_b98e6d93d9ff, _f31dac319f83, _66df9ac1a907) => "\x5f\x5f\x6e\x79\x78\x50\x6f\x70\x75\x70\x47\x75\x61\x72\x64" === _f31dac319f83 || ("\x74\x6f\x53\x74\x72\x69\x6e\x67" === _f31dac319f83 ? () => "\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x6f\x70\x65\x6e\x28\x29\x20\x7b\x20\x5b\x6e\x61\x74\x69\x76\x65\x20\x63\x6f\x64\x65\x5d\x20\x7d" : Reflect.get(_b98e6d93d9ff, _f31dac319f83, _66df9ac1a907))
    }));
  } catch {}
  const _0x87f761_7 = _b98e6d93d9ff => {
    const _f31dac319f83 = String(_b98e6d93d9ff || "").toLowerCase();
    return _f31dac319f83 && ![ "\x5f\x73\x65\x6c\x66", "\x5f\x70\x61\x72\x65\x6e\x74", "\x5f\x74\x6f\x70" ].includes(_f31dac319f83);
  }, _0x87f761_8 = _b98e6d93d9ff => !!_b98e6d93d9ff && (!!_b98e6d93d9ff.hasAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || _0x87f761_4(_b98e6d93d9ff.href || _b98e6d93d9ff.getAttribute("\x68\x72\x65\x66") || ""));
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
    const _b98e6d93d9ff = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!_0x87f761_8(this) || !_0x87f761_5(this.href || this.getAttribute("\x68\x72\x65\x66"), this.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "")) {
        if (!_0x87f761_1() || !_0x87f761_7(this.target)) return _b98e6d93d9ff.call(this);
        _0x87f761_3();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("\x63\x6c\x69\x63\x6b", _b98e6d93d9ff => {
    const _f31dac319f83 = _b98e6d93d9ff.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_f31dac319f83) return _0x87f761_8(_f31dac319f83) && _0x87f761_5(_f31dac319f83.href || _f31dac319f83.getAttribute("\x68\x72\x65\x66"), _f31dac319f83.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_b98e6d93d9ff.preventDefault(), 
    void _b98e6d93d9ff.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_f31dac319f83.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_b98e6d93d9ff.preventDefault(), 
    _b98e6d93d9ff.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x61\x75\x78\x63\x6c\x69\x63\x6b", _b98e6d93d9ff => {
    const _f31dac319f83 = _b98e6d93d9ff.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_f31dac319f83) return _0x87f761_8(_f31dac319f83) && _0x87f761_5(_f31dac319f83.href || _f31dac319f83.getAttribute("\x68\x72\x65\x66"), _f31dac319f83.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_b98e6d93d9ff.preventDefault(), 
    void _b98e6d93d9ff.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_f31dac319f83.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_b98e6d93d9ff.preventDefault(), 
    _b98e6d93d9ff.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x73\x75\x62\x6d\x69\x74", _b98e6d93d9ff => {
    if (!_0x87f761_1()) return;
    const _f31dac319f83 = _b98e6d93d9ff.target;
    _f31dac319f83 && "\x46\x4f\x52\x4d" === String(_f31dac319f83.tagName || "").toUpperCase() && _0x87f761_7(_f31dac319f83.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_b98e6d93d9ff.preventDefault(), 
    _b98e6d93d9ff.stopImmediatePropagation(), _0x87f761_3());
  }, !0));
  const _0x87f761_9 = _b98e6d93d9ff => {
    const _f31dac319f83 = window[_b98e6d93d9ff];
    if ("\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _f31dac319f83 && !_f31dac319f83.__nyxWrapped) try {
      Object.setPrototypeOf(_0x87f761_2, _f31dac319f83), _0x87f761_2.prototype = _f31dac319f83.prototype, 
      Object.defineProperty(_0x87f761_2, "\x5f\x5f\x6e\x79\x78\x57\x72\x61\x70\x70\x65\x64", {
        value: !0
      }), window[_b98e6d93d9ff] = _0x87f761_2;
    } catch {}
    function _0x87f761_2(_b98e6d93d9ff, _66df9ac1a907, _bce63f43ee73) {
      let _fa32e9f0f5a8 = Number(_b98e6d93d9ff), _1291137fa703 = Number(_66df9ac1a907);
      return (!Number.isFinite(_fa32e9f0f5a8) || _fa32e9f0f5a8 < 0) && (_fa32e9f0f5a8 = 0), 
      (!Number.isFinite(_1291137fa703) || _1291137fa703 <= _fa32e9f0f5a8) && (_1291137fa703 = _fa32e9f0f5a8 + .001), 
      Reflect.construct(_f31dac319f83, [ _fa32e9f0f5a8, _1291137fa703, null == _bce63f43ee73 ? "" : String(_bce63f43ee73) ], new.target || _0x87f761_2);
    }
  };
  _0x87f761_9("\x56\x54\x54\x43\x75\x65"), _0x87f761_9("\x54\x65\x78\x74\x54\x72\x61\x63\x6b\x43\x75\x65");
})();
