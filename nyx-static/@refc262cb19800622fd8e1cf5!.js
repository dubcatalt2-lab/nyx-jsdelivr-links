(() => {
  if ("\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" == typeof window || window.__nyxStudyJetGuards) return;
  window.__nyxStudyJetGuards = !0;
  const _d7f9c0876dfb = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "\x74\x72\x75\x73\x74\x65\x64\x54\x79\x70\x65\x73", {
      configurable: !0,
      value: {
        createPolicy: (_d7f9c0876dfb, _996b3a64f840 = {}) => ({
          createHTML: _d7f9c0876dfb => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _996b3a64f840.createHTML ? _996b3a64f840.createHTML(_d7f9c0876dfb) : _d7f9c0876dfb,
          createScript: _d7f9c0876dfb => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _996b3a64f840.createScript ? _996b3a64f840.createScript(_d7f9c0876dfb) : _d7f9c0876dfb,
          createScriptURL: _d7f9c0876dfb => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _996b3a64f840.createScriptURL ? _996b3a64f840.createScriptURL(_d7f9c0876dfb) : _d7f9c0876dfb
        })
      }
    });
  } catch {}
  try {
    const _d7f9c0876dfb = Object.getOwnPropertyDescriptor(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74"), _996b3a64f840 = document.createElement("\x73\x63\x72\x69\x70\x74");
    _996b3a64f840.setAttribute("\x6e\x6f\x6e\x63\x65", ""), Object.defineProperty(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74", {
      configurable: !0,
      get() {
        let _e1dfaa01e78a = null;
        try {
          _e1dfaa01e78a = _d7f9c0876dfb?.get?.call(this) || null;
        } catch {}
        return _e1dfaa01e78a || this.querySelector?.("\x73\x63\x72\x69\x70\x74\x5b\x73\x72\x63\x5d\x2c\x73\x63\x72\x69\x70\x74") || _996b3a64f840;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const _0x87f761_0 = _d7f9c0876dfb => !(!_d7f9c0876dfb || !_d7f9c0876dfb.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_d7f9c0876dfb.tagName || "")), _0x87f761_1 = _d7f9c0876dfb => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_d7f9c0876dfb?.tagName || "") ? String(_d7f9c0876dfb.value || "").slice(_d7f9c0876dfb.selectionStart || 0, _d7f9c0876dfb.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, _0x87f761_2 = (_d7f9c0876dfb, _996b3a64f840) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_d7f9c0876dfb?.tagName || "")) {
            const _e1dfaa01e78a = _d7f9c0876dfb.selectionStart || 0, _0a005f528bd9 = _d7f9c0876dfb.selectionEnd || 0, _785cb4df09d9 = String(_d7f9c0876dfb.value || "");
            _d7f9c0876dfb.value = _785cb4df09d9.slice(0, _e1dfaa01e78a) + _996b3a64f840 + _785cb4df09d9.slice(_0a005f528bd9);
            const _1ba1a74ec19f = _e1dfaa01e78a + String(_996b3a64f840).length;
            return _d7f9c0876dfb.setSelectionRange(_1ba1a74ec19f, _1ba1a74ec19f), void _d7f9c0876dfb.dispatchEvent(new Event("\x69\x6e\x70\x75\x74", {
              bubbles: !0
            }));
          }
          document.execCommand?.("\x69\x6e\x73\x65\x72\x74\x54\x65\x78\x74", !1, _996b3a64f840);
        } catch {}
      }, _0x87f761_3 = async _d7f9c0876dfb => {
        try {
          await (navigator.clipboard?.writeText(String(_d7f9c0876dfb || "")));
        } catch {
          try {
            document.execCommand?.("\x63\x6f\x70\x79");
          } catch {}
        }
      }, _d7f9c0876dfb = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _996b3a64f840 = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), _0x87f761_6 = _e1dfaa01e78a => {
        try {
          _d7f9c0876dfb?.postMessage(_e1dfaa01e78a, "\x2a");
        } catch {}
        try {
          _996b3a64f840 && _996b3a64f840 !== _d7f9c0876dfb && _996b3a64f840.postMessage(_e1dfaa01e78a, "\x2a");
        } catch {}
        try {
          window.parent?.postMessage(_e1dfaa01e78a, "\x2a");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_e1dfaa01e78a, "\x2a");
        } catch {}
      };
      window.addEventListener("\x6b\x65\x79\x64\x6f\x77\x6e", _d7f9c0876dfb => {
        const _996b3a64f840 = String(_d7f9c0876dfb.key || "").toLowerCase();
        if (_d7f9c0876dfb.altKey && !_d7f9c0876dfb.ctrlKey && !_d7f9c0876dfb.metaKey && 2 !== _d7f9c0876dfb.location && "\x61\x6c\x74" === _996b3a64f840) return _d7f9c0876dfb.preventDefault(), 
        _d7f9c0876dfb.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x70\x72\x69\x6d\x65"
        });
        if (_d7f9c0876dfb.altKey && !_d7f9c0876dfb.ctrlKey && !_d7f9c0876dfb.metaKey && 2 !== _d7f9c0876dfb.location && _0x87f761_0(_d7f9c0876dfb.target) && /^[acxvzy]$/.test(_996b3a64f840)) {
          if (_d7f9c0876dfb.preventDefault(), _d7f9c0876dfb.stopPropagation(), "\x61" === _996b3a64f840) return void (_d7f9c0876dfb.target?.select ? _d7f9c0876dfb.target.select() : document.execCommand?.("\x73\x65\x6c\x65\x63\x74\x41\x6c\x6c"));
          if ("\x63" === _996b3a64f840) return void _0x87f761_3(_0x87f761_1(_d7f9c0876dfb.target));
          if ("\x78" === _996b3a64f840) {
            const _996b3a64f840 = _0x87f761_1(_d7f9c0876dfb.target);
            return _0x87f761_3(_996b3a64f840), void _0x87f761_2(_d7f9c0876dfb.target, "");
          }
          if ("\x76" === _996b3a64f840) return void navigator.clipboard?.readText?.().then(_996b3a64f840 => _0x87f761_2(_d7f9c0876dfb.target, _996b3a64f840)).catch(() => {
            try {
              document.execCommand?.("\x70\x61\x73\x74\x65");
            } catch {}
          });
          if ("\x7a" === _996b3a64f840) return void document.execCommand?.("\x75\x6e\x64\x6f");
          if ("\x79" === _996b3a64f840) return void document.execCommand?.("\x72\x65\x64\x6f");
        }
        return !_d7f9c0876dfb.altKey || _d7f9c0876dfb.ctrlKey || _d7f9c0876dfb.metaKey || 2 === _d7f9c0876dfb.location || !/^[1-9]$/.test(_996b3a64f840) && ![ "\x6c", "\x64", "\x74", "\x77", "\x72", "\x61\x72\x72\x6f\x77\x6c\x65\x66\x74", "\x61\x72\x72\x6f\x77\x72\x69\x67\x68\x74", "\x74\x61\x62" ].includes(_996b3a64f840) ? void 0 : (_d7f9c0876dfb.preventDefault(), 
        _d7f9c0876dfb.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x73\x68\x6f\x72\x74\x63\x75\x74",
          key: _996b3a64f840,
          code: _d7f9c0876dfb.code || "",
          location: _d7f9c0876dfb.location || 0,
          shiftKey: !!_d7f9c0876dfb.shiftKey
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
  }, _0x87f761_2 = _d7f9c0876dfb => {
    if (!_d7f9c0876dfb) return !1;
    try {
      return _d7f9c0876dfb.document.open(), _d7f9c0876dfb.document.write("\x3c\x21\x64\x6f\x63\x74\x79\x70\x65\x20\x68\x74\x6d\x6c\x3e\x3c\x68\x74\x6d\x6c\x3e\x3c\x68\x65\x61\x64\x3e\x3c\x6d\x65\x74\x61\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x22\x75\x74\x66\x2d\x38\x22\x3e\x3c\x6d\x65\x74\x61\x20\x6e\x61\x6d\x65\x3d\x22\x76\x69\x65\x77\x70\x6f\x72\x74\x22\x20\x63\x6f\x6e\x74\x65\x6e\x74\x3d\x22\x77\x69\x64\x74\x68\x3d\x64\x65\x76\x69\x63\x65\x2d\x77\x69\x64\x74\x68\x2c\x69\x6e\x69\x74\x69\x61\x6c\x2d\x73\x63\x61\x6c\x65\x3d\x31\x22\x3e\x3c\x74\x69\x74\x6c\x65\x3e\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61\x3c\x2f\x74\x69\x74\x6c\x65\x3e\x3c\x73\x74\x79\x6c\x65\x3e\x68\x74\x6d\x6c\x2c\x62\x6f\x64\x79\x7b\x6d\x61\x72\x67\x69\x6e\x3a\x30\x3b\x77\x69\x64\x74\x68\x3a\x31\x30\x30\x25\x3b\x68\x65\x69\x67\x68\x74\x3a\x31\x30\x30\x25\x3b\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x3a\x23\x66\x66\x66\x3b\x63\x6f\x6c\x6f\x72\x3a\x23\x31\x31\x31\x3b\x66\x6f\x6e\x74\x3a\x32\x38\x70\x78\x20\x52\x61\x6c\x65\x77\x61\x79\x2c\x41\x72\x69\x61\x6c\x2c\x73\x61\x6e\x73\x2d\x73\x65\x72\x69\x66\x7d\x62\x6f\x64\x79\x7b\x64\x69\x73\x70\x6c\x61\x79\x3a\x67\x72\x69\x64\x3b\x70\x6c\x61\x63\x65\x2d\x69\x74\x65\x6d\x73\x3a\x63\x65\x6e\x74\x65\x72\x3b\x74\x65\x78\x74\x2d\x61\x6c\x69\x67\x6e\x3a\x63\x65\x6e\x74\x65\x72\x7d\x6d\x61\x69\x6e\x7b\x70\x61\x64\x64\x69\x6e\x67\x3a\x32\x34\x70\x78\x7d\x3c\x2f\x73\x74\x79\x6c\x65\x3e\x3c\x2f\x68\x65\x61\x64\x3e\x3c\x62\x6f\x64\x79\x3e\x3c\x6d\x61\x69\x6e\x3e\x61\x72\x65\x20\x79\x6f\x75\x20\x74\x72\x79\x69\x6e\x67\x20\x74\x6f\x20\x68\x61\x63\x6b\x20\x6d\x65\x20\x73\x63\x61\x6d\x6d\x61\x3f\x3f\x3f\x3c\x2f\x6d\x61\x69\x6e\x3e\x3c\x2f\x62\x6f\x64\x79\x3e\x3c\x2f\x68\x74\x6d\x6c\x3e"), 
      _d7f9c0876dfb.document.close(), _d7f9c0876dfb.focus?.(), !0;
    } catch {
      return !1;
    }
  }, _0x87f761_3 = () => {
    const _d7f9c0876dfb = null;
    return {
      closed: !1,
      focus() {
        try {
          _d7f9c0876dfb?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _d7f9c0876dfb?.blur?.();
        } catch {}
      },
      close() {
        try {
          _d7f9c0876dfb?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return _0x87f761_2(_d7f9c0876dfb), this;
        },
        write() {
          _0x87f761_2(_d7f9c0876dfb);
        },
        writeln() {
          _0x87f761_2(_d7f9c0876dfb);
        },
        close() {
          _0x87f761_2(_d7f9c0876dfb);
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
          _0x87f761_2(_d7f9c0876dfb);
        },
        toString: () => "\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61"
      }
    };
  }, _0x87f761_4 = _d7f9c0876dfb => {
    const _996b3a64f840 = String(_d7f9c0876dfb || "").trim();
    if (/^(?:blob|data):/i.test(_996b3a64f840)) return !1;
    const _e1dfaa01e78a = _996b3a64f840.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_e1dfaa01e78a);
  }, _0x87f761_5 = (_d7f9c0876dfb, _996b3a64f840 = "") => {
    const _e1dfaa01e78a = String(_d7f9c0876dfb || "").trim();
    if (!_e1dfaa01e78a || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "\x6e\x79\x78\x3a\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x2d\x72\x65\x71\x75\x65\x73\x74",
        url: _e1dfaa01e78a,
        filename: String(_996b3a64f840 || ""),
        sourceUrl: String(location.href || "")
      }, "\x2a"), !0;
    } catch {
      return !1;
    }
  };
  let _0x87f761_6 = (..._996b3a64f840) => _0x87f761_4(_996b3a64f840[0]) && _0x87f761_5(_996b3a64f840[0]) ? null : !_0x87f761_1() && _d7f9c0876dfb ? _d7f9c0876dfb(..._996b3a64f840) : _0x87f761_3();
  try {
    "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _d7f9c0876dfb && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof \u{50}\u{72}\u{6f}\u{78}\u{79} && (_0x87f761_6 = new \u{50}\u{72}\u{6f}\u{78}\u{79}(_d7f9c0876dfb, {
      apply: (_d7f9c0876dfb, _996b3a64f840, _e1dfaa01e78a) => _0x87f761_4(_e1dfaa01e78a[0]) && _0x87f761_5(_e1dfaa01e78a[0]) ? null : _0x87f761_1() ? _0x87f761_3() : Reflect.apply(_d7f9c0876dfb, _996b3a64f840, _e1dfaa01e78a),
      construct(_d7f9c0876dfb, _996b3a64f840, _e1dfaa01e78a) {
        if (!_0x87f761_1()) try {
          return Reflect.construct(_d7f9c0876dfb, _996b3a64f840, _e1dfaa01e78a);
        } catch {
          return Reflect.apply(_d7f9c0876dfb, window, _996b3a64f840);
        }
        return _0x87f761_3();
      },
      get: (_d7f9c0876dfb, _996b3a64f840, _e1dfaa01e78a) => "\x5f\x5f\x6e\x79\x78\x50\x6f\x70\x75\x70\x47\x75\x61\x72\x64" === _996b3a64f840 || ("\x74\x6f\x53\x74\x72\x69\x6e\x67" === _996b3a64f840 ? () => "\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x6f\x70\x65\x6e\x28\x29\x20\x7b\x20\x5b\x6e\x61\x74\x69\x76\x65\x20\x63\x6f\x64\x65\x5d\x20\x7d" : Reflect.get(_d7f9c0876dfb, _996b3a64f840, _e1dfaa01e78a))
    }));
  } catch {}
  const _0x87f761_7 = _d7f9c0876dfb => {
    const _996b3a64f840 = String(_d7f9c0876dfb || "").toLowerCase();
    return _996b3a64f840 && ![ "\x5f\x73\x65\x6c\x66", "\x5f\x70\x61\x72\x65\x6e\x74", "\x5f\x74\x6f\x70" ].includes(_996b3a64f840);
  }, _0x87f761_8 = _d7f9c0876dfb => !!_d7f9c0876dfb && (!!_d7f9c0876dfb.hasAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || _0x87f761_4(_d7f9c0876dfb.href || _d7f9c0876dfb.getAttribute("\x68\x72\x65\x66") || ""));
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
    const _d7f9c0876dfb = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!_0x87f761_8(this) || !_0x87f761_5(this.href || this.getAttribute("\x68\x72\x65\x66"), this.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "")) {
        if (!_0x87f761_1() || !_0x87f761_7(this.target)) return _d7f9c0876dfb.call(this);
        _0x87f761_3();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("\x63\x6c\x69\x63\x6b", _d7f9c0876dfb => {
    const _996b3a64f840 = _d7f9c0876dfb.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_996b3a64f840) return _0x87f761_8(_996b3a64f840) && _0x87f761_5(_996b3a64f840.href || _996b3a64f840.getAttribute("\x68\x72\x65\x66"), _996b3a64f840.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_d7f9c0876dfb.preventDefault(), 
    void _d7f9c0876dfb.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_996b3a64f840.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_d7f9c0876dfb.preventDefault(), 
    _d7f9c0876dfb.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x61\x75\x78\x63\x6c\x69\x63\x6b", _d7f9c0876dfb => {
    const _996b3a64f840 = _d7f9c0876dfb.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_996b3a64f840) return _0x87f761_8(_996b3a64f840) && _0x87f761_5(_996b3a64f840.href || _996b3a64f840.getAttribute("\x68\x72\x65\x66"), _996b3a64f840.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_d7f9c0876dfb.preventDefault(), 
    void _d7f9c0876dfb.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_996b3a64f840.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_d7f9c0876dfb.preventDefault(), 
    _d7f9c0876dfb.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x73\x75\x62\x6d\x69\x74", _d7f9c0876dfb => {
    if (!_0x87f761_1()) return;
    const _996b3a64f840 = _d7f9c0876dfb.target;
    _996b3a64f840 && "\x46\x4f\x52\x4d" === String(_996b3a64f840.tagName || "").toUpperCase() && _0x87f761_7(_996b3a64f840.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_d7f9c0876dfb.preventDefault(), 
    _d7f9c0876dfb.stopImmediatePropagation(), _0x87f761_3());
  }, !0));
  const _0x87f761_9 = _d7f9c0876dfb => {
    const _996b3a64f840 = window[_d7f9c0876dfb];
    if ("\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _996b3a64f840 && !_996b3a64f840.__nyxWrapped) try {
      Object.setPrototypeOf(_0x87f761_2, _996b3a64f840), _0x87f761_2.prototype = _996b3a64f840.prototype, 
      Object.defineProperty(_0x87f761_2, "\x5f\x5f\x6e\x79\x78\x57\x72\x61\x70\x70\x65\x64", {
        value: !0
      }), window[_d7f9c0876dfb] = _0x87f761_2;
    } catch {}
    function _0x87f761_2(_d7f9c0876dfb, _e1dfaa01e78a, _0a005f528bd9) {
      let _785cb4df09d9 = Number(_d7f9c0876dfb), _1ba1a74ec19f = Number(_e1dfaa01e78a);
      return (!Number.isFinite(_785cb4df09d9) || _785cb4df09d9 < 0) && (_785cb4df09d9 = 0), 
      (!Number.isFinite(_1ba1a74ec19f) || _1ba1a74ec19f <= _785cb4df09d9) && (_1ba1a74ec19f = _785cb4df09d9 + .001), 
      Reflect.construct(_996b3a64f840, [ _785cb4df09d9, _1ba1a74ec19f, null == _0a005f528bd9 ? "" : String(_0a005f528bd9) ], new.target || _0x87f761_2);
    }
  };
  _0x87f761_9("\x56\x54\x54\x43\x75\x65"), _0x87f761_9("\x54\x65\x78\x74\x54\x72\x61\x63\x6b\x43\x75\x65");
})();
