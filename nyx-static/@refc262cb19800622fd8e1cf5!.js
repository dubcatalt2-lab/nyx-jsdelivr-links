(() => {
  if ("\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" == typeof window || window.__nyxStudyJetGuards) return;
  window.__nyxStudyJetGuards = !0;
  const _595609e06870 = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "\x74\x72\x75\x73\x74\x65\x64\x54\x79\x70\x65\x73", {
      configurable: !0,
      value: {
        createPolicy: (_595609e06870, _0bf207d203b1 = {}) => ({
          createHTML: _595609e06870 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _0bf207d203b1.createHTML ? _0bf207d203b1.createHTML(_595609e06870) : _595609e06870,
          createScript: _595609e06870 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _0bf207d203b1.createScript ? _0bf207d203b1.createScript(_595609e06870) : _595609e06870,
          createScriptURL: _595609e06870 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _0bf207d203b1.createScriptURL ? _0bf207d203b1.createScriptURL(_595609e06870) : _595609e06870
        })
      }
    });
  } catch {}
  try {
    const _595609e06870 = Object.getOwnPropertyDescriptor(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74"), _0bf207d203b1 = document.createElement("\x73\x63\x72\x69\x70\x74");
    _0bf207d203b1.setAttribute("\x6e\x6f\x6e\x63\x65", ""), Object.defineProperty(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74", {
      configurable: !0,
      get() {
        let _2c95f3469974 = null;
        try {
          _2c95f3469974 = _595609e06870?.get?.call(this) || null;
        } catch {}
        return _2c95f3469974 || this.querySelector?.("\x73\x63\x72\x69\x70\x74\x5b\x73\x72\x63\x5d\x2c\x73\x63\x72\x69\x70\x74") || _0bf207d203b1;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const _0x87f761_0 = _595609e06870 => !(!_595609e06870 || !_595609e06870.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_595609e06870.tagName || "")), _0x87f761_1 = _595609e06870 => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_595609e06870?.tagName || "") ? String(_595609e06870.value || "").slice(_595609e06870.selectionStart || 0, _595609e06870.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, _0x87f761_2 = (_595609e06870, _0bf207d203b1) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_595609e06870?.tagName || "")) {
            const _2c95f3469974 = _595609e06870.selectionStart || 0, _b78c63b0855d = _595609e06870.selectionEnd || 0, _a0c35dd486e9 = String(_595609e06870.value || "");
            _595609e06870.value = _a0c35dd486e9.slice(0, _2c95f3469974) + _0bf207d203b1 + _a0c35dd486e9.slice(_b78c63b0855d);
            const _d496ec8fe0be = _2c95f3469974 + String(_0bf207d203b1).length;
            return _595609e06870.setSelectionRange(_d496ec8fe0be, _d496ec8fe0be), void _595609e06870.dispatchEvent(new Event("\x69\x6e\x70\x75\x74", {
              bubbles: !0
            }));
          }
          document.execCommand?.("\x69\x6e\x73\x65\x72\x74\x54\x65\x78\x74", !1, _0bf207d203b1);
        } catch {}
      }, _0x87f761_3 = async _595609e06870 => {
        try {
          await (navigator.clipboard?.writeText(String(_595609e06870 || "")));
        } catch {
          try {
            document.execCommand?.("\x63\x6f\x70\x79");
          } catch {}
        }
      }, _595609e06870 = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _0bf207d203b1 = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), _0x87f761_6 = _2c95f3469974 => {
        try {
          _595609e06870?.postMessage(_2c95f3469974, "\x2a");
        } catch {}
        try {
          _0bf207d203b1 && _0bf207d203b1 !== _595609e06870 && _0bf207d203b1.postMessage(_2c95f3469974, "\x2a");
        } catch {}
        try {
          window.parent?.postMessage(_2c95f3469974, "\x2a");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_2c95f3469974, "\x2a");
        } catch {}
      };
      window.addEventListener("\x6b\x65\x79\x64\x6f\x77\x6e", _595609e06870 => {
        const _0bf207d203b1 = String(_595609e06870.key || "").toLowerCase();
        if (_595609e06870.altKey && !_595609e06870.ctrlKey && !_595609e06870.metaKey && 2 !== _595609e06870.location && "\x61\x6c\x74" === _0bf207d203b1) return _595609e06870.preventDefault(), 
        _595609e06870.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x70\x72\x69\x6d\x65"
        });
        if (_595609e06870.altKey && !_595609e06870.ctrlKey && !_595609e06870.metaKey && 2 !== _595609e06870.location && _0x87f761_0(_595609e06870.target) && /^[acxvzy]$/.test(_0bf207d203b1)) {
          if (_595609e06870.preventDefault(), _595609e06870.stopPropagation(), "\x61" === _0bf207d203b1) return void (_595609e06870.target?.select ? _595609e06870.target.select() : document.execCommand?.("\x73\x65\x6c\x65\x63\x74\x41\x6c\x6c"));
          if ("\x63" === _0bf207d203b1) return void _0x87f761_3(_0x87f761_1(_595609e06870.target));
          if ("\x78" === _0bf207d203b1) {
            const _0bf207d203b1 = _0x87f761_1(_595609e06870.target);
            return _0x87f761_3(_0bf207d203b1), void _0x87f761_2(_595609e06870.target, "");
          }
          if ("\x76" === _0bf207d203b1) return void navigator.clipboard?.readText?.().then(_0bf207d203b1 => _0x87f761_2(_595609e06870.target, _0bf207d203b1)).catch(() => {
            try {
              document.execCommand?.("\x70\x61\x73\x74\x65");
            } catch {}
          });
          if ("\x7a" === _0bf207d203b1) return void document.execCommand?.("\x75\x6e\x64\x6f");
          if ("\x79" === _0bf207d203b1) return void document.execCommand?.("\x72\x65\x64\x6f");
        }
        return !_595609e06870.altKey || _595609e06870.ctrlKey || _595609e06870.metaKey || 2 === _595609e06870.location || !/^[1-9]$/.test(_0bf207d203b1) && ![ "\x6c", "\x64", "\x74", "\x77", "\x72", "\x61\x72\x72\x6f\x77\x6c\x65\x66\x74", "\x61\x72\x72\x6f\x77\x72\x69\x67\x68\x74", "\x74\x61\x62" ].includes(_0bf207d203b1) ? void 0 : (_595609e06870.preventDefault(), 
        _595609e06870.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x73\x68\x6f\x72\x74\x63\x75\x74",
          key: _0bf207d203b1,
          code: _595609e06870.code || "",
          location: _595609e06870.location || 0,
          shiftKey: !!_595609e06870.shiftKey
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
  }, _0x87f761_2 = _595609e06870 => {
    if (!_595609e06870) return !1;
    try {
      return _595609e06870.document.open(), _595609e06870.document.write("\x3c\x21\x64\x6f\x63\x74\x79\x70\x65\x20\x68\x74\x6d\x6c\x3e\x3c\x68\x74\x6d\x6c\x3e\x3c\x68\x65\x61\x64\x3e\x3c\x6d\x65\x74\x61\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x22\x75\x74\x66\x2d\x38\x22\x3e\x3c\x6d\x65\x74\x61\x20\x6e\x61\x6d\x65\x3d\x22\x76\x69\x65\x77\x70\x6f\x72\x74\x22\x20\x63\x6f\x6e\x74\x65\x6e\x74\x3d\x22\x77\x69\x64\x74\x68\x3d\x64\x65\x76\x69\x63\x65\x2d\x77\x69\x64\x74\x68\x2c\x69\x6e\x69\x74\x69\x61\x6c\x2d\x73\x63\x61\x6c\x65\x3d\x31\x22\x3e\x3c\x74\x69\x74\x6c\x65\x3e\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61\x3c\x2f\x74\x69\x74\x6c\x65\x3e\x3c\x73\x74\x79\x6c\x65\x3e\x68\x74\x6d\x6c\x2c\x62\x6f\x64\x79\x7b\x6d\x61\x72\x67\x69\x6e\x3a\x30\x3b\x77\x69\x64\x74\x68\x3a\x31\x30\x30\x25\x3b\x68\x65\x69\x67\x68\x74\x3a\x31\x30\x30\x25\x3b\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x3a\x23\x66\x66\x66\x3b\x63\x6f\x6c\x6f\x72\x3a\x23\x31\x31\x31\x3b\x66\x6f\x6e\x74\x3a\x32\x38\x70\x78\x20\x52\x61\x6c\x65\x77\x61\x79\x2c\x41\x72\x69\x61\x6c\x2c\x73\x61\x6e\x73\x2d\x73\x65\x72\x69\x66\x7d\x62\x6f\x64\x79\x7b\x64\x69\x73\x70\x6c\x61\x79\x3a\x67\x72\x69\x64\x3b\x70\x6c\x61\x63\x65\x2d\x69\x74\x65\x6d\x73\x3a\x63\x65\x6e\x74\x65\x72\x3b\x74\x65\x78\x74\x2d\x61\x6c\x69\x67\x6e\x3a\x63\x65\x6e\x74\x65\x72\x7d\x6d\x61\x69\x6e\x7b\x70\x61\x64\x64\x69\x6e\x67\x3a\x32\x34\x70\x78\x7d\x3c\x2f\x73\x74\x79\x6c\x65\x3e\x3c\x2f\x68\x65\x61\x64\x3e\x3c\x62\x6f\x64\x79\x3e\x3c\x6d\x61\x69\x6e\x3e\x61\x72\x65\x20\x79\x6f\x75\x20\x74\x72\x79\x69\x6e\x67\x20\x74\x6f\x20\x68\x61\x63\x6b\x20\x6d\x65\x20\x73\x63\x61\x6d\x6d\x61\x3f\x3f\x3f\x3c\x2f\x6d\x61\x69\x6e\x3e\x3c\x2f\x62\x6f\x64\x79\x3e\x3c\x2f\x68\x74\x6d\x6c\x3e"), 
      _595609e06870.document.close(), _595609e06870.focus?.(), !0;
    } catch {
      return !1;
    }
  }, _0x87f761_3 = () => {
    const _595609e06870 = null;
    return {
      closed: !1,
      focus() {
        try {
          _595609e06870?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _595609e06870?.blur?.();
        } catch {}
      },
      close() {
        try {
          _595609e06870?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return _0x87f761_2(_595609e06870), this;
        },
        write() {
          _0x87f761_2(_595609e06870);
        },
        writeln() {
          _0x87f761_2(_595609e06870);
        },
        close() {
          _0x87f761_2(_595609e06870);
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
          _0x87f761_2(_595609e06870);
        },
        toString: () => "\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61"
      }
    };
  }, _0x87f761_4 = _595609e06870 => {
    const _0bf207d203b1 = String(_595609e06870 || "").trim();
    if (/^(?:blob|data):/i.test(_0bf207d203b1)) return !1;
    const _2c95f3469974 = _0bf207d203b1.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_2c95f3469974);
  }, _0x87f761_5 = (_595609e06870, _0bf207d203b1 = "") => {
    const _2c95f3469974 = String(_595609e06870 || "").trim();
    if (!_2c95f3469974 || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "\x6e\x79\x78\x3a\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x2d\x72\x65\x71\x75\x65\x73\x74",
        url: _2c95f3469974,
        filename: String(_0bf207d203b1 || ""),
        sourceUrl: String(location.href || "")
      }, "\x2a"), !0;
    } catch {
      return !1;
    }
  };
  let _0x87f761_6 = (..._0bf207d203b1) => _0x87f761_4(_0bf207d203b1[0]) && _0x87f761_5(_0bf207d203b1[0]) ? null : !_0x87f761_1() && _595609e06870 ? _595609e06870(..._0bf207d203b1) : _0x87f761_3();
  try {
    "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _595609e06870 && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof \u{50}\u{72}\u{6f}\u{78}\u{79} && (_0x87f761_6 = new \u{50}\u{72}\u{6f}\u{78}\u{79}(_595609e06870, {
      apply: (_595609e06870, _0bf207d203b1, _2c95f3469974) => _0x87f761_4(_2c95f3469974[0]) && _0x87f761_5(_2c95f3469974[0]) ? null : _0x87f761_1() ? _0x87f761_3() : Reflect.apply(_595609e06870, _0bf207d203b1, _2c95f3469974),
      construct(_595609e06870, _0bf207d203b1, _2c95f3469974) {
        if (!_0x87f761_1()) try {
          return Reflect.construct(_595609e06870, _0bf207d203b1, _2c95f3469974);
        } catch {
          return Reflect.apply(_595609e06870, window, _0bf207d203b1);
        }
        return _0x87f761_3();
      },
      get: (_595609e06870, _0bf207d203b1, _2c95f3469974) => "\x5f\x5f\x6e\x79\x78\x50\x6f\x70\x75\x70\x47\x75\x61\x72\x64" === _0bf207d203b1 || ("\x74\x6f\x53\x74\x72\x69\x6e\x67" === _0bf207d203b1 ? () => "\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x6f\x70\x65\x6e\x28\x29\x20\x7b\x20\x5b\x6e\x61\x74\x69\x76\x65\x20\x63\x6f\x64\x65\x5d\x20\x7d" : Reflect.get(_595609e06870, _0bf207d203b1, _2c95f3469974))
    }));
  } catch {}
  const _0x87f761_7 = _595609e06870 => {
    const _0bf207d203b1 = String(_595609e06870 || "").toLowerCase();
    return _0bf207d203b1 && ![ "\x5f\x73\x65\x6c\x66", "\x5f\x70\x61\x72\x65\x6e\x74", "\x5f\x74\x6f\x70" ].includes(_0bf207d203b1);
  }, _0x87f761_8 = _595609e06870 => !!_595609e06870 && (!!_595609e06870.hasAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || _0x87f761_4(_595609e06870.href || _595609e06870.getAttribute("\x68\x72\x65\x66") || ""));
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
    const _595609e06870 = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!_0x87f761_8(this) || !_0x87f761_5(this.href || this.getAttribute("\x68\x72\x65\x66"), this.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "")) {
        if (!_0x87f761_1() || !_0x87f761_7(this.target)) return _595609e06870.call(this);
        _0x87f761_3();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("\x63\x6c\x69\x63\x6b", _595609e06870 => {
    const _0bf207d203b1 = _595609e06870.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_0bf207d203b1) return _0x87f761_8(_0bf207d203b1) && _0x87f761_5(_0bf207d203b1.href || _0bf207d203b1.getAttribute("\x68\x72\x65\x66"), _0bf207d203b1.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_595609e06870.preventDefault(), 
    void _595609e06870.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_0bf207d203b1.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_595609e06870.preventDefault(), 
    _595609e06870.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x61\x75\x78\x63\x6c\x69\x63\x6b", _595609e06870 => {
    const _0bf207d203b1 = _595609e06870.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_0bf207d203b1) return _0x87f761_8(_0bf207d203b1) && _0x87f761_5(_0bf207d203b1.href || _0bf207d203b1.getAttribute("\x68\x72\x65\x66"), _0bf207d203b1.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_595609e06870.preventDefault(), 
    void _595609e06870.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_0bf207d203b1.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_595609e06870.preventDefault(), 
    _595609e06870.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x73\x75\x62\x6d\x69\x74", _595609e06870 => {
    if (!_0x87f761_1()) return;
    const _0bf207d203b1 = _595609e06870.target;
    _0bf207d203b1 && "\x46\x4f\x52\x4d" === String(_0bf207d203b1.tagName || "").toUpperCase() && _0x87f761_7(_0bf207d203b1.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_595609e06870.preventDefault(), 
    _595609e06870.stopImmediatePropagation(), _0x87f761_3());
  }, !0));
  const _0x87f761_9 = _595609e06870 => {
    const _0bf207d203b1 = window[_595609e06870];
    if ("\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _0bf207d203b1 && !_0bf207d203b1.__nyxWrapped) try {
      Object.setPrototypeOf(_0x87f761_2, _0bf207d203b1), _0x87f761_2.prototype = _0bf207d203b1.prototype, 
      Object.defineProperty(_0x87f761_2, "\x5f\x5f\x6e\x79\x78\x57\x72\x61\x70\x70\x65\x64", {
        value: !0
      }), window[_595609e06870] = _0x87f761_2;
    } catch {}
    function _0x87f761_2(_595609e06870, _2c95f3469974, _b78c63b0855d) {
      let _a0c35dd486e9 = Number(_595609e06870), _d496ec8fe0be = Number(_2c95f3469974);
      return (!Number.isFinite(_a0c35dd486e9) || _a0c35dd486e9 < 0) && (_a0c35dd486e9 = 0), 
      (!Number.isFinite(_d496ec8fe0be) || _d496ec8fe0be <= _a0c35dd486e9) && (_d496ec8fe0be = _a0c35dd486e9 + .001), 
      Reflect.construct(_0bf207d203b1, [ _a0c35dd486e9, _d496ec8fe0be, null == _b78c63b0855d ? "" : String(_b78c63b0855d) ], new.target || _0x87f761_2);
    }
  };
  _0x87f761_9("\x56\x54\x54\x43\x75\x65"), _0x87f761_9("\x54\x65\x78\x74\x54\x72\x61\x63\x6b\x43\x75\x65");
})();
