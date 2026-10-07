(() => {
  if ("\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" == typeof window || window.__nyxStudyJetGuards) return;
  window.__nyxStudyJetGuards = !0;
  const _129a886a6c7e = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "\x74\x72\x75\x73\x74\x65\x64\x54\x79\x70\x65\x73", {
      configurable: !0,
      value: {
        createPolicy: (_129a886a6c7e, _1d84c5b16c4d = {}) => ({
          createHTML: _129a886a6c7e => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _1d84c5b16c4d.createHTML ? _1d84c5b16c4d.createHTML(_129a886a6c7e) : _129a886a6c7e,
          createScript: _129a886a6c7e => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _1d84c5b16c4d.createScript ? _1d84c5b16c4d.createScript(_129a886a6c7e) : _129a886a6c7e,
          createScriptURL: _129a886a6c7e => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _1d84c5b16c4d.createScriptURL ? _1d84c5b16c4d.createScriptURL(_129a886a6c7e) : _129a886a6c7e
        })
      }
    });
  } catch {}
  try {
    const _129a886a6c7e = Object.getOwnPropertyDescriptor(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74"), _1d84c5b16c4d = document.createElement("\x73\x63\x72\x69\x70\x74");
    _1d84c5b16c4d.setAttribute("\x6e\x6f\x6e\x63\x65", ""), Object.defineProperty(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74", {
      configurable: !0,
      get() {
        let _bf2c6dea5d32 = null;
        try {
          _bf2c6dea5d32 = _129a886a6c7e?.get?.call(this) || null;
        } catch {}
        return _bf2c6dea5d32 || this.querySelector?.("\x73\x63\x72\x69\x70\x74\x5b\x73\x72\x63\x5d\x2c\x73\x63\x72\x69\x70\x74") || _1d84c5b16c4d;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const _0x87f761_0 = _129a886a6c7e => !(!_129a886a6c7e || !_129a886a6c7e.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_129a886a6c7e.tagName || "")), _0x87f761_1 = _129a886a6c7e => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_129a886a6c7e?.tagName || "") ? String(_129a886a6c7e.value || "").slice(_129a886a6c7e.selectionStart || 0, _129a886a6c7e.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, _0x87f761_2 = (_129a886a6c7e, _1d84c5b16c4d) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_129a886a6c7e?.tagName || "")) {
            const _bf2c6dea5d32 = _129a886a6c7e.selectionStart || 0, _6b304d767281 = _129a886a6c7e.selectionEnd || 0, _ad6aeba4ec7f = String(_129a886a6c7e.value || "");
            _129a886a6c7e.value = _ad6aeba4ec7f.slice(0, _bf2c6dea5d32) + _1d84c5b16c4d + _ad6aeba4ec7f.slice(_6b304d767281);
            const _6b67ecdbda9f = _bf2c6dea5d32 + String(_1d84c5b16c4d).length;
            return _129a886a6c7e.setSelectionRange(_6b67ecdbda9f, _6b67ecdbda9f), void _129a886a6c7e.dispatchEvent(new Event("\x69\x6e\x70\x75\x74", {
              bubbles: !0
            }));
          }
          document.execCommand?.("\x69\x6e\x73\x65\x72\x74\x54\x65\x78\x74", !1, _1d84c5b16c4d);
        } catch {}
      }, _0x87f761_3 = async _129a886a6c7e => {
        try {
          await (navigator.clipboard?.writeText(String(_129a886a6c7e || "")));
        } catch {
          try {
            document.execCommand?.("\x63\x6f\x70\x79");
          } catch {}
        }
      }, _129a886a6c7e = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _1d84c5b16c4d = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), _0x87f761_6 = _bf2c6dea5d32 => {
        try {
          _129a886a6c7e?.postMessage(_bf2c6dea5d32, "\x2a");
        } catch {}
        try {
          _1d84c5b16c4d && _1d84c5b16c4d !== _129a886a6c7e && _1d84c5b16c4d.postMessage(_bf2c6dea5d32, "\x2a");
        } catch {}
        try {
          window.parent?.postMessage(_bf2c6dea5d32, "\x2a");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_bf2c6dea5d32, "\x2a");
        } catch {}
      };
      window.addEventListener("\x6b\x65\x79\x64\x6f\x77\x6e", _129a886a6c7e => {
        const _1d84c5b16c4d = String(_129a886a6c7e.key || "").toLowerCase();
        if (_129a886a6c7e.altKey && !_129a886a6c7e.ctrlKey && !_129a886a6c7e.metaKey && 2 !== _129a886a6c7e.location && "\x61\x6c\x74" === _1d84c5b16c4d) return _129a886a6c7e.preventDefault(), 
        _129a886a6c7e.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x70\x72\x69\x6d\x65"
        });
        if (_129a886a6c7e.altKey && !_129a886a6c7e.ctrlKey && !_129a886a6c7e.metaKey && 2 !== _129a886a6c7e.location && _0x87f761_0(_129a886a6c7e.target) && /^[acxvzy]$/.test(_1d84c5b16c4d)) {
          if (_129a886a6c7e.preventDefault(), _129a886a6c7e.stopPropagation(), "\x61" === _1d84c5b16c4d) return void (_129a886a6c7e.target?.select ? _129a886a6c7e.target.select() : document.execCommand?.("\x73\x65\x6c\x65\x63\x74\x41\x6c\x6c"));
          if ("\x63" === _1d84c5b16c4d) return void _0x87f761_3(_0x87f761_1(_129a886a6c7e.target));
          if ("\x78" === _1d84c5b16c4d) {
            const _1d84c5b16c4d = _0x87f761_1(_129a886a6c7e.target);
            return _0x87f761_3(_1d84c5b16c4d), void _0x87f761_2(_129a886a6c7e.target, "");
          }
          if ("\x76" === _1d84c5b16c4d) return void navigator.clipboard?.readText?.().then(_1d84c5b16c4d => _0x87f761_2(_129a886a6c7e.target, _1d84c5b16c4d)).catch(() => {
            try {
              document.execCommand?.("\x70\x61\x73\x74\x65");
            } catch {}
          });
          if ("\x7a" === _1d84c5b16c4d) return void document.execCommand?.("\x75\x6e\x64\x6f");
          if ("\x79" === _1d84c5b16c4d) return void document.execCommand?.("\x72\x65\x64\x6f");
        }
        return !_129a886a6c7e.altKey || _129a886a6c7e.ctrlKey || _129a886a6c7e.metaKey || 2 === _129a886a6c7e.location || !/^[1-9]$/.test(_1d84c5b16c4d) && ![ "\x6c", "\x64", "\x74", "\x77", "\x72", "\x61\x72\x72\x6f\x77\x6c\x65\x66\x74", "\x61\x72\x72\x6f\x77\x72\x69\x67\x68\x74", "\x74\x61\x62" ].includes(_1d84c5b16c4d) ? void 0 : (_129a886a6c7e.preventDefault(), 
        _129a886a6c7e.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x73\x68\x6f\x72\x74\x63\x75\x74",
          key: _1d84c5b16c4d,
          code: _129a886a6c7e.code || "",
          location: _129a886a6c7e.location || 0,
          shiftKey: !!_129a886a6c7e.shiftKey
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
  }, _0x87f761_2 = _129a886a6c7e => {
    if (!_129a886a6c7e) return !1;
    try {
      return _129a886a6c7e.document.open(), _129a886a6c7e.document.write("\x3c\x21\x64\x6f\x63\x74\x79\x70\x65\x20\x68\x74\x6d\x6c\x3e\x3c\x68\x74\x6d\x6c\x3e\x3c\x68\x65\x61\x64\x3e\x3c\x6d\x65\x74\x61\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x22\x75\x74\x66\x2d\x38\x22\x3e\x3c\x6d\x65\x74\x61\x20\x6e\x61\x6d\x65\x3d\x22\x76\x69\x65\x77\x70\x6f\x72\x74\x22\x20\x63\x6f\x6e\x74\x65\x6e\x74\x3d\x22\x77\x69\x64\x74\x68\x3d\x64\x65\x76\x69\x63\x65\x2d\x77\x69\x64\x74\x68\x2c\x69\x6e\x69\x74\x69\x61\x6c\x2d\x73\x63\x61\x6c\x65\x3d\x31\x22\x3e\x3c\x74\x69\x74\x6c\x65\x3e\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61\x3c\x2f\x74\x69\x74\x6c\x65\x3e\x3c\x73\x74\x79\x6c\x65\x3e\x68\x74\x6d\x6c\x2c\x62\x6f\x64\x79\x7b\x6d\x61\x72\x67\x69\x6e\x3a\x30\x3b\x77\x69\x64\x74\x68\x3a\x31\x30\x30\x25\x3b\x68\x65\x69\x67\x68\x74\x3a\x31\x30\x30\x25\x3b\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x3a\x23\x66\x66\x66\x3b\x63\x6f\x6c\x6f\x72\x3a\x23\x31\x31\x31\x3b\x66\x6f\x6e\x74\x3a\x32\x38\x70\x78\x20\x52\x61\x6c\x65\x77\x61\x79\x2c\x41\x72\x69\x61\x6c\x2c\x73\x61\x6e\x73\x2d\x73\x65\x72\x69\x66\x7d\x62\x6f\x64\x79\x7b\x64\x69\x73\x70\x6c\x61\x79\x3a\x67\x72\x69\x64\x3b\x70\x6c\x61\x63\x65\x2d\x69\x74\x65\x6d\x73\x3a\x63\x65\x6e\x74\x65\x72\x3b\x74\x65\x78\x74\x2d\x61\x6c\x69\x67\x6e\x3a\x63\x65\x6e\x74\x65\x72\x7d\x6d\x61\x69\x6e\x7b\x70\x61\x64\x64\x69\x6e\x67\x3a\x32\x34\x70\x78\x7d\x3c\x2f\x73\x74\x79\x6c\x65\x3e\x3c\x2f\x68\x65\x61\x64\x3e\x3c\x62\x6f\x64\x79\x3e\x3c\x6d\x61\x69\x6e\x3e\x61\x72\x65\x20\x79\x6f\x75\x20\x74\x72\x79\x69\x6e\x67\x20\x74\x6f\x20\x68\x61\x63\x6b\x20\x6d\x65\x20\x73\x63\x61\x6d\x6d\x61\x3f\x3f\x3f\x3c\x2f\x6d\x61\x69\x6e\x3e\x3c\x2f\x62\x6f\x64\x79\x3e\x3c\x2f\x68\x74\x6d\x6c\x3e"), 
      _129a886a6c7e.document.close(), _129a886a6c7e.focus?.(), !0;
    } catch {
      return !1;
    }
  }, _0x87f761_3 = () => {
    const _129a886a6c7e = null;
    return {
      closed: !1,
      focus() {
        try {
          _129a886a6c7e?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _129a886a6c7e?.blur?.();
        } catch {}
      },
      close() {
        try {
          _129a886a6c7e?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return _0x87f761_2(_129a886a6c7e), this;
        },
        write() {
          _0x87f761_2(_129a886a6c7e);
        },
        writeln() {
          _0x87f761_2(_129a886a6c7e);
        },
        close() {
          _0x87f761_2(_129a886a6c7e);
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
          _0x87f761_2(_129a886a6c7e);
        },
        toString: () => "\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61"
      }
    };
  }, _0x87f761_4 = _129a886a6c7e => {
    const _1d84c5b16c4d = String(_129a886a6c7e || "").trim();
    if (/^(?:blob|data):/i.test(_1d84c5b16c4d)) return !1;
    const _bf2c6dea5d32 = _1d84c5b16c4d.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_bf2c6dea5d32);
  }, _0x87f761_5 = (_129a886a6c7e, _1d84c5b16c4d = "") => {
    const _bf2c6dea5d32 = String(_129a886a6c7e || "").trim();
    if (!_bf2c6dea5d32 || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "\x6e\x79\x78\x3a\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x2d\x72\x65\x71\x75\x65\x73\x74",
        url: _bf2c6dea5d32,
        filename: String(_1d84c5b16c4d || ""),
        sourceUrl: String(location.href || "")
      }, "\x2a"), !0;
    } catch {
      return !1;
    }
  };
  let _0x87f761_6 = (..._1d84c5b16c4d) => _0x87f761_4(_1d84c5b16c4d[0]) && _0x87f761_5(_1d84c5b16c4d[0]) ? null : !_0x87f761_1() && _129a886a6c7e ? _129a886a6c7e(..._1d84c5b16c4d) : _0x87f761_3();
  try {
    "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _129a886a6c7e && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof \u{50}\u{72}\u{6f}\u{78}\u{79} && (_0x87f761_6 = new \u{50}\u{72}\u{6f}\u{78}\u{79}(_129a886a6c7e, {
      apply: (_129a886a6c7e, _1d84c5b16c4d, _bf2c6dea5d32) => _0x87f761_4(_bf2c6dea5d32[0]) && _0x87f761_5(_bf2c6dea5d32[0]) ? null : _0x87f761_1() ? _0x87f761_3() : Reflect.apply(_129a886a6c7e, _1d84c5b16c4d, _bf2c6dea5d32),
      construct(_129a886a6c7e, _1d84c5b16c4d, _bf2c6dea5d32) {
        if (!_0x87f761_1()) try {
          return Reflect.construct(_129a886a6c7e, _1d84c5b16c4d, _bf2c6dea5d32);
        } catch {
          return Reflect.apply(_129a886a6c7e, window, _1d84c5b16c4d);
        }
        return _0x87f761_3();
      },
      get: (_129a886a6c7e, _1d84c5b16c4d, _bf2c6dea5d32) => "\x5f\x5f\x6e\x79\x78\x50\x6f\x70\x75\x70\x47\x75\x61\x72\x64" === _1d84c5b16c4d || ("\x74\x6f\x53\x74\x72\x69\x6e\x67" === _1d84c5b16c4d ? () => "\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x6f\x70\x65\x6e\x28\x29\x20\x7b\x20\x5b\x6e\x61\x74\x69\x76\x65\x20\x63\x6f\x64\x65\x5d\x20\x7d" : Reflect.get(_129a886a6c7e, _1d84c5b16c4d, _bf2c6dea5d32))
    }));
  } catch {}
  const _0x87f761_7 = _129a886a6c7e => {
    const _1d84c5b16c4d = String(_129a886a6c7e || "").toLowerCase();
    return _1d84c5b16c4d && ![ "\x5f\x73\x65\x6c\x66", "\x5f\x70\x61\x72\x65\x6e\x74", "\x5f\x74\x6f\x70" ].includes(_1d84c5b16c4d);
  }, _0x87f761_8 = _129a886a6c7e => !!_129a886a6c7e && (!!_129a886a6c7e.hasAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || _0x87f761_4(_129a886a6c7e.href || _129a886a6c7e.getAttribute("\x68\x72\x65\x66") || ""));
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
    const _129a886a6c7e = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!_0x87f761_8(this) || !_0x87f761_5(this.href || this.getAttribute("\x68\x72\x65\x66"), this.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "")) {
        if (!_0x87f761_1() || !_0x87f761_7(this.target)) return _129a886a6c7e.call(this);
        _0x87f761_3();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("\x63\x6c\x69\x63\x6b", _129a886a6c7e => {
    const _1d84c5b16c4d = _129a886a6c7e.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_1d84c5b16c4d) return _0x87f761_8(_1d84c5b16c4d) && _0x87f761_5(_1d84c5b16c4d.href || _1d84c5b16c4d.getAttribute("\x68\x72\x65\x66"), _1d84c5b16c4d.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_129a886a6c7e.preventDefault(), 
    void _129a886a6c7e.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_1d84c5b16c4d.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_129a886a6c7e.preventDefault(), 
    _129a886a6c7e.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x61\x75\x78\x63\x6c\x69\x63\x6b", _129a886a6c7e => {
    const _1d84c5b16c4d = _129a886a6c7e.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_1d84c5b16c4d) return _0x87f761_8(_1d84c5b16c4d) && _0x87f761_5(_1d84c5b16c4d.href || _1d84c5b16c4d.getAttribute("\x68\x72\x65\x66"), _1d84c5b16c4d.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_129a886a6c7e.preventDefault(), 
    void _129a886a6c7e.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_1d84c5b16c4d.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_129a886a6c7e.preventDefault(), 
    _129a886a6c7e.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x73\x75\x62\x6d\x69\x74", _129a886a6c7e => {
    if (!_0x87f761_1()) return;
    const _1d84c5b16c4d = _129a886a6c7e.target;
    _1d84c5b16c4d && "\x46\x4f\x52\x4d" === String(_1d84c5b16c4d.tagName || "").toUpperCase() && _0x87f761_7(_1d84c5b16c4d.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_129a886a6c7e.preventDefault(), 
    _129a886a6c7e.stopImmediatePropagation(), _0x87f761_3());
  }, !0));
  const _0x87f761_9 = _129a886a6c7e => {
    const _1d84c5b16c4d = window[_129a886a6c7e];
    if ("\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _1d84c5b16c4d && !_1d84c5b16c4d.__nyxWrapped) try {
      Object.setPrototypeOf(_0x87f761_2, _1d84c5b16c4d), _0x87f761_2.prototype = _1d84c5b16c4d.prototype, 
      Object.defineProperty(_0x87f761_2, "\x5f\x5f\x6e\x79\x78\x57\x72\x61\x70\x70\x65\x64", {
        value: !0
      }), window[_129a886a6c7e] = _0x87f761_2;
    } catch {}
    function _0x87f761_2(_129a886a6c7e, _bf2c6dea5d32, _6b304d767281) {
      let _ad6aeba4ec7f = Number(_129a886a6c7e), _6b67ecdbda9f = Number(_bf2c6dea5d32);
      return (!Number.isFinite(_ad6aeba4ec7f) || _ad6aeba4ec7f < 0) && (_ad6aeba4ec7f = 0), 
      (!Number.isFinite(_6b67ecdbda9f) || _6b67ecdbda9f <= _ad6aeba4ec7f) && (_6b67ecdbda9f = _ad6aeba4ec7f + .001), 
      Reflect.construct(_1d84c5b16c4d, [ _ad6aeba4ec7f, _6b67ecdbda9f, null == _6b304d767281 ? "" : String(_6b304d767281) ], new.target || _0x87f761_2);
    }
  };
  _0x87f761_9("\x56\x54\x54\x43\x75\x65"), _0x87f761_9("\x54\x65\x78\x74\x54\x72\x61\x63\x6b\x43\x75\x65");
})();
