(() => {
  if ("\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" == typeof window || window.\u{5f}\u{5f}\u{6e}\u{79}\u{78}\u{53}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74}\u{47}\u{75}\u{61}\u{72}\u{64}\u{73}) return;
  window.\u{5f}\u{5f}\u{6e}\u{79}\u{78}\u{53}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74}\u{47}\u{75}\u{61}\u{72}\u{64}\u{73} = !0;
  const _d1dcf488203e = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "\x74\x72\x75\x73\x74\x65\x64\x54\x79\x70\x65\x73", {
      configurable: !0,
      value: {
        createPolicy: (_d1dcf488203e, _b697adcdf952 = {}) => ({
          createHTML: _d1dcf488203e => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _b697adcdf952.createHTML ? _b697adcdf952.createHTML(_d1dcf488203e) : _d1dcf488203e,
          createScript: _d1dcf488203e => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _b697adcdf952.createScript ? _b697adcdf952.createScript(_d1dcf488203e) : _d1dcf488203e,
          createScriptURL: _d1dcf488203e => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _b697adcdf952.createScriptURL ? _b697adcdf952.createScriptURL(_d1dcf488203e) : _d1dcf488203e
        })
      }
    });
  } catch {}
  try {
    const _d1dcf488203e = Object.getOwnPropertyDescriptor(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74"), _b697adcdf952 = document.createElement("\x73\x63\x72\x69\x70\x74");
    _b697adcdf952.setAttribute("\x6e\x6f\x6e\x63\x65", ""), Object.defineProperty(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74", {
      configurable: !0,
      get() {
        let _9f7e707a5e21 = null;
        try {
          _9f7e707a5e21 = _d1dcf488203e?.get?.call(this) || null;
        } catch {}
        return _9f7e707a5e21 || this.querySelector?.("\x73\x63\x72\x69\x70\x74\x5b\x73\x72\x63\x5d\x2c\x73\x63\x72\x69\x70\x74") || _b697adcdf952;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const _0x87f761_0 = _d1dcf488203e => !(!_d1dcf488203e || !_d1dcf488203e.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_d1dcf488203e.tagName || "")), _0x87f761_1 = _d1dcf488203e => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_d1dcf488203e?.tagName || "") ? String(_d1dcf488203e.value || "").slice(_d1dcf488203e.selectionStart || 0, _d1dcf488203e.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, _0x87f761_2 = (_d1dcf488203e, _b697adcdf952) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_d1dcf488203e?.tagName || "")) {
            const _9f7e707a5e21 = _d1dcf488203e.selectionStart || 0, _d9971ff6fbef = _d1dcf488203e.selectionEnd || 0, _e1d47b827739 = String(_d1dcf488203e.value || "");
            _d1dcf488203e.value = _e1d47b827739.slice(0, _9f7e707a5e21) + _b697adcdf952 + _e1d47b827739.slice(_d9971ff6fbef);
            const _6f1b3da26630 = _9f7e707a5e21 + String(_b697adcdf952).length;
            return _d1dcf488203e.setSelectionRange(_6f1b3da26630, _6f1b3da26630), void _d1dcf488203e.dispatchEvent(new Event("\x69\x6e\x70\x75\x74", {
              bubbles: !0
            }));
          }
          document.execCommand?.("\x69\x6e\x73\x65\x72\x74\x54\x65\x78\x74", !1, _b697adcdf952);
        } catch {}
      }, _0x87f761_3 = async _d1dcf488203e => {
        try {
          await (navigator.clipboard?.writeText(String(_d1dcf488203e || "")));
        } catch {
          try {
            document.execCommand?.("\x63\x6f\x70\x79");
          } catch {}
        }
      }, _d1dcf488203e = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _b697adcdf952 = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), _0x87f761_6 = _9f7e707a5e21 => {
        try {
          _d1dcf488203e?.postMessage(_9f7e707a5e21, "\x2a");
        } catch {}
        try {
          _b697adcdf952 && _b697adcdf952 !== _d1dcf488203e && _b697adcdf952.postMessage(_9f7e707a5e21, "\x2a");
        } catch {}
        try {
          window.parent?.postMessage(_9f7e707a5e21, "\x2a");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_9f7e707a5e21, "\x2a");
        } catch {}
      };
      window.addEventListener("\x6b\x65\x79\x64\x6f\x77\x6e", _d1dcf488203e => {
        const _b697adcdf952 = String(_d1dcf488203e.key || "").toLowerCase();
        if (_d1dcf488203e.altKey && !_d1dcf488203e.ctrlKey && !_d1dcf488203e.metaKey && 2 !== _d1dcf488203e.location && "\x61\x6c\x74" === _b697adcdf952) return _d1dcf488203e.preventDefault(), 
        _d1dcf488203e.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x70\x72\x69\x6d\x65"
        });
        if (_d1dcf488203e.altKey && !_d1dcf488203e.ctrlKey && !_d1dcf488203e.metaKey && 2 !== _d1dcf488203e.location && _0x87f761_0(_d1dcf488203e.target) && /^[acxvzy]$/.test(_b697adcdf952)) {
          if (_d1dcf488203e.preventDefault(), _d1dcf488203e.stopPropagation(), "\x61" === _b697adcdf952) return void (_d1dcf488203e.target?.select ? _d1dcf488203e.target.select() : document.execCommand?.("\x73\x65\x6c\x65\x63\x74\x41\x6c\x6c"));
          if ("\x63" === _b697adcdf952) return void _0x87f761_3(_0x87f761_1(_d1dcf488203e.target));
          if ("\x78" === _b697adcdf952) {
            const _b697adcdf952 = _0x87f761_1(_d1dcf488203e.target);
            return _0x87f761_3(_b697adcdf952), void _0x87f761_2(_d1dcf488203e.target, "");
          }
          if ("\x76" === _b697adcdf952) return void navigator.clipboard?.readText?.().then(_b697adcdf952 => _0x87f761_2(_d1dcf488203e.target, _b697adcdf952)).catch(() => {
            try {
              document.execCommand?.("\x70\x61\x73\x74\x65");
            } catch {}
          });
          if ("\x7a" === _b697adcdf952) return void document.execCommand?.("\x75\x6e\x64\x6f");
          if ("\x79" === _b697adcdf952) return void document.execCommand?.("\x72\x65\x64\x6f");
        }
        return !_d1dcf488203e.altKey || _d1dcf488203e.ctrlKey || _d1dcf488203e.metaKey || 2 === _d1dcf488203e.location || !/^[1-9]$/.test(_b697adcdf952) && ![ "\x6c", "\x64", "\x74", "\x77", "\x72", "\x61\x72\x72\x6f\x77\x6c\x65\x66\x74", "\x61\x72\x72\x6f\x77\x72\x69\x67\x68\x74", "\x74\x61\x62" ].includes(_b697adcdf952) ? void 0 : (_d1dcf488203e.preventDefault(), 
        _d1dcf488203e.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x73\x68\x6f\x72\x74\x63\x75\x74",
          key: _b697adcdf952,
          code: _d1dcf488203e.code || "",
          location: _d1dcf488203e.location || 0,
          shiftKey: !!_d1dcf488203e.shiftKey
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
  }, _0x87f761_2 = _d1dcf488203e => {
    if (!_d1dcf488203e) return !1;
    try {
      return _d1dcf488203e.document.open(), _d1dcf488203e.document.write("\x3c\x21\x64\x6f\x63\x74\x79\x70\x65\x20\x68\x74\x6d\x6c\x3e\x3c\x68\x74\x6d\x6c\x3e\x3c\x68\x65\x61\x64\x3e\x3c\x6d\x65\x74\x61\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x22\x75\x74\x66\x2d\x38\x22\x3e\x3c\x6d\x65\x74\x61\x20\x6e\x61\x6d\x65\x3d\x22\x76\x69\x65\x77\x70\x6f\x72\x74\x22\x20\x63\x6f\x6e\x74\x65\x6e\x74\x3d\x22\x77\x69\x64\x74\x68\x3d\x64\x65\x76\x69\x63\x65\x2d\x77\x69\x64\x74\x68\x2c\x69\x6e\x69\x74\x69\x61\x6c\x2d\x73\x63\x61\x6c\x65\x3d\x31\x22\x3e\x3c\x74\x69\x74\x6c\x65\x3e\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61\x3c\x2f\x74\x69\x74\x6c\x65\x3e\x3c\x73\x74\x79\x6c\x65\x3e\x68\x74\x6d\x6c\x2c\x62\x6f\x64\x79\x7b\x6d\x61\x72\x67\x69\x6e\x3a\x30\x3b\x77\x69\x64\x74\x68\x3a\x31\x30\x30\x25\x3b\x68\x65\x69\x67\x68\x74\x3a\x31\x30\x30\x25\x3b\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x3a\x23\x66\x66\x66\x3b\x63\x6f\x6c\x6f\x72\x3a\x23\x31\x31\x31\x3b\x66\x6f\x6e\x74\x3a\x32\x38\x70\x78\x20\x52\x61\x6c\x65\x77\x61\x79\x2c\x41\x72\x69\x61\x6c\x2c\x73\x61\x6e\x73\x2d\x73\x65\x72\x69\x66\x7d\x62\x6f\x64\x79\x7b\x64\x69\x73\x70\x6c\x61\x79\x3a\x67\x72\x69\x64\x3b\x70\x6c\x61\x63\x65\x2d\x69\x74\x65\x6d\x73\x3a\x63\x65\x6e\x74\x65\x72\x3b\x74\x65\x78\x74\x2d\x61\x6c\x69\x67\x6e\x3a\x63\x65\x6e\x74\x65\x72\x7d\x6d\x61\x69\x6e\x7b\x70\x61\x64\x64\x69\x6e\x67\x3a\x32\x34\x70\x78\x7d\x3c\x2f\x73\x74\x79\x6c\x65\x3e\x3c\x2f\x68\x65\x61\x64\x3e\x3c\x62\x6f\x64\x79\x3e\x3c\x6d\x61\x69\x6e\x3e\x61\x72\x65\x20\x79\x6f\x75\x20\x74\x72\x79\x69\x6e\x67\x20\x74\x6f\x20\x68\x61\x63\x6b\x20\x6d\x65\x20\x73\x63\x61\x6d\x6d\x61\x3f\x3f\x3f\x3c\x2f\x6d\x61\x69\x6e\x3e\x3c\x2f\x62\x6f\x64\x79\x3e\x3c\x2f\x68\x74\x6d\x6c\x3e"), 
      _d1dcf488203e.document.close(), _d1dcf488203e.focus?.(), !0;
    } catch {
      return !1;
    }
  }, _0x87f761_3 = () => {
    const _d1dcf488203e = null;
    return {
      closed: !1,
      focus() {
        try {
          _d1dcf488203e?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _d1dcf488203e?.blur?.();
        } catch {}
      },
      close() {
        try {
          _d1dcf488203e?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return _0x87f761_2(_d1dcf488203e), this;
        },
        write() {
          _0x87f761_2(_d1dcf488203e);
        },
        writeln() {
          _0x87f761_2(_d1dcf488203e);
        },
        close() {
          _0x87f761_2(_d1dcf488203e);
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
          _0x87f761_2(_d1dcf488203e);
        },
        toString: () => "\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61"
      }
    };
  }, _0x87f761_4 = _d1dcf488203e => {
    const _b697adcdf952 = String(_d1dcf488203e || "").trim();
    if (/^(?:blob|data):/i.test(_b697adcdf952)) return !1;
    const _9f7e707a5e21 = _b697adcdf952.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_9f7e707a5e21);
  }, _0x87f761_5 = (_d1dcf488203e, _b697adcdf952 = "") => {
    const _9f7e707a5e21 = String(_d1dcf488203e || "").trim();
    if (!_9f7e707a5e21 || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "\x6e\x79\x78\x3a\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x2d\x72\x65\x71\x75\x65\x73\x74",
        url: _9f7e707a5e21,
        filename: String(_b697adcdf952 || ""),
        sourceUrl: String(location.href || "")
      }, "\x2a"), !0;
    } catch {
      return !1;
    }
  };
  let _0x87f761_6 = (..._b697adcdf952) => _0x87f761_4(_b697adcdf952[0]) && _0x87f761_5(_b697adcdf952[0]) ? null : !_0x87f761_1() && _d1dcf488203e ? _d1dcf488203e(..._b697adcdf952) : _0x87f761_3();
  try {
    "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _d1dcf488203e && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof \u{50}\u{72}\u{6f}\u{78}\u{79} && (_0x87f761_6 = new \u{50}\u{72}\u{6f}\u{78}\u{79}(_d1dcf488203e, {
      apply: (_d1dcf488203e, _b697adcdf952, _9f7e707a5e21) => _0x87f761_4(_9f7e707a5e21[0]) && _0x87f761_5(_9f7e707a5e21[0]) ? null : _0x87f761_1() ? _0x87f761_3() : Reflect.apply(_d1dcf488203e, _b697adcdf952, _9f7e707a5e21),
      construct(_d1dcf488203e, _b697adcdf952, _9f7e707a5e21) {
        if (!_0x87f761_1()) try {
          return Reflect.construct(_d1dcf488203e, _b697adcdf952, _9f7e707a5e21);
        } catch {
          return Reflect.apply(_d1dcf488203e, window, _b697adcdf952);
        }
        return _0x87f761_3();
      },
      get: (_d1dcf488203e, _b697adcdf952, _9f7e707a5e21) => "\x5f\x5f\x6e\x79\x78\x50\x6f\x70\x75\x70\x47\x75\x61\x72\x64" === _b697adcdf952 || ("\x74\x6f\x53\x74\x72\x69\x6e\x67" === _b697adcdf952 ? () => "\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x6f\x70\x65\x6e\x28\x29\x20\x7b\x20\x5b\x6e\x61\x74\x69\x76\x65\x20\x63\x6f\x64\x65\x5d\x20\x7d" : Reflect.get(_d1dcf488203e, _b697adcdf952, _9f7e707a5e21))
    }));
  } catch {}
  const _0x87f761_7 = _d1dcf488203e => {
    const _b697adcdf952 = String(_d1dcf488203e || "").toLowerCase();
    return _b697adcdf952 && ![ "\x5f\x73\x65\x6c\x66", "\x5f\x70\x61\x72\x65\x6e\x74", "\x5f\x74\x6f\x70" ].includes(_b697adcdf952);
  }, _0x87f761_8 = _d1dcf488203e => !!_d1dcf488203e && (!!_d1dcf488203e.hasAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || _0x87f761_4(_d1dcf488203e.href || _d1dcf488203e.getAttribute("\x68\x72\x65\x66") || ""));
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
    const _d1dcf488203e = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!_0x87f761_8(this) || !_0x87f761_5(this.href || this.getAttribute("\x68\x72\x65\x66"), this.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "")) {
        if (!_0x87f761_1() || !_0x87f761_7(this.target)) return _d1dcf488203e.call(this);
        _0x87f761_3();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("\x63\x6c\x69\x63\x6b", _d1dcf488203e => {
    const _b697adcdf952 = _d1dcf488203e.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_b697adcdf952) return _0x87f761_8(_b697adcdf952) && _0x87f761_5(_b697adcdf952.href || _b697adcdf952.getAttribute("\x68\x72\x65\x66"), _b697adcdf952.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_d1dcf488203e.preventDefault(), 
    void _d1dcf488203e.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_b697adcdf952.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_d1dcf488203e.preventDefault(), 
    _d1dcf488203e.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x61\x75\x78\x63\x6c\x69\x63\x6b", _d1dcf488203e => {
    const _b697adcdf952 = _d1dcf488203e.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_b697adcdf952) return _0x87f761_8(_b697adcdf952) && _0x87f761_5(_b697adcdf952.href || _b697adcdf952.getAttribute("\x68\x72\x65\x66"), _b697adcdf952.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_d1dcf488203e.preventDefault(), 
    void _d1dcf488203e.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_b697adcdf952.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_d1dcf488203e.preventDefault(), 
    _d1dcf488203e.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x73\x75\x62\x6d\x69\x74", _d1dcf488203e => {
    if (!_0x87f761_1()) return;
    const _b697adcdf952 = _d1dcf488203e.target;
    _b697adcdf952 && "\x46\x4f\x52\x4d" === String(_b697adcdf952.tagName || "").toUpperCase() && _0x87f761_7(_b697adcdf952.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_d1dcf488203e.preventDefault(), 
    _d1dcf488203e.stopImmediatePropagation(), _0x87f761_3());
  }, !0));
  const _0x87f761_9 = _d1dcf488203e => {
    const _b697adcdf952 = window[_d1dcf488203e];
    if ("\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _b697adcdf952 && !_b697adcdf952.__nyxWrapped) try {
      Object.setPrototypeOf(_0x87f761_2, _b697adcdf952), _0x87f761_2.prototype = _b697adcdf952.prototype, 
      Object.defineProperty(_0x87f761_2, "\x5f\x5f\x6e\x79\x78\x57\x72\x61\x70\x70\x65\x64", {
        value: !0
      }), window[_d1dcf488203e] = _0x87f761_2;
    } catch {}
    function _0x87f761_2(_d1dcf488203e, _9f7e707a5e21, _d9971ff6fbef) {
      let _e1d47b827739 = Number(_d1dcf488203e), _6f1b3da26630 = Number(_9f7e707a5e21);
      return (!Number.isFinite(_e1d47b827739) || _e1d47b827739 < 0) && (_e1d47b827739 = 0), 
      (!Number.isFinite(_6f1b3da26630) || _6f1b3da26630 <= _e1d47b827739) && (_6f1b3da26630 = _e1d47b827739 + .001), 
      Reflect.construct(_b697adcdf952, [ _e1d47b827739, _6f1b3da26630, null == _d9971ff6fbef ? "" : String(_d9971ff6fbef) ], new.target || _0x87f761_2);
    }
  };
  _0x87f761_9("\x56\x54\x54\x43\x75\x65"), _0x87f761_9("\x54\x65\x78\x74\x54\x72\x61\x63\x6b\x43\x75\x65");
})();
