(() => {
  if ("\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" == typeof window || window.__nyxStudyJetGuards) return;
  window.__nyxStudyJetGuards = !0;
  const _e3a8c23acfb1 = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "\x74\x72\x75\x73\x74\x65\x64\x54\x79\x70\x65\x73", {
      configurable: !0,
      value: {
        createPolicy: (_e3a8c23acfb1, _43a11b07dbba = {}) => ({
          createHTML: _e3a8c23acfb1 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _43a11b07dbba.createHTML ? _43a11b07dbba.createHTML(_e3a8c23acfb1) : _e3a8c23acfb1,
          createScript: _e3a8c23acfb1 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _43a11b07dbba.createScript ? _43a11b07dbba.createScript(_e3a8c23acfb1) : _e3a8c23acfb1,
          createScriptURL: _e3a8c23acfb1 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _43a11b07dbba.createScriptURL ? _43a11b07dbba.createScriptURL(_e3a8c23acfb1) : _e3a8c23acfb1
        })
      }
    });
  } catch {}
  try {
    const _e3a8c23acfb1 = Object.getOwnPropertyDescriptor(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74"), _43a11b07dbba = document.createElement("\x73\x63\x72\x69\x70\x74");
    _43a11b07dbba.setAttribute("\x6e\x6f\x6e\x63\x65", ""), Object.defineProperty(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74", {
      configurable: !0,
      get() {
        let _edf47f6d25fa = null;
        try {
          _edf47f6d25fa = _e3a8c23acfb1?.get?.call(this) || null;
        } catch {}
        return _edf47f6d25fa || this.querySelector?.("\x73\x63\x72\x69\x70\x74\x5b\x73\x72\x63\x5d\x2c\x73\x63\x72\x69\x70\x74") || _43a11b07dbba;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const _0x87f761_0 = _e3a8c23acfb1 => !(!_e3a8c23acfb1 || !_e3a8c23acfb1.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_e3a8c23acfb1.tagName || "")), _0x87f761_1 = _e3a8c23acfb1 => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_e3a8c23acfb1?.tagName || "") ? String(_e3a8c23acfb1.value || "").slice(_e3a8c23acfb1.selectionStart || 0, _e3a8c23acfb1.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, _0x87f761_2 = (_e3a8c23acfb1, _43a11b07dbba) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_e3a8c23acfb1?.tagName || "")) {
            const _edf47f6d25fa = _e3a8c23acfb1.selectionStart || 0, _3f1f10bc1533 = _e3a8c23acfb1.selectionEnd || 0, _a3acbb7014a9 = String(_e3a8c23acfb1.value || "");
            _e3a8c23acfb1.value = _a3acbb7014a9.slice(0, _edf47f6d25fa) + _43a11b07dbba + _a3acbb7014a9.slice(_3f1f10bc1533);
            const _9d3e804e03ee = _edf47f6d25fa + String(_43a11b07dbba).length;
            return _e3a8c23acfb1.setSelectionRange(_9d3e804e03ee, _9d3e804e03ee), void _e3a8c23acfb1.dispatchEvent(new Event("\x69\x6e\x70\x75\x74", {
              bubbles: !0
            }));
          }
          document.execCommand?.("\x69\x6e\x73\x65\x72\x74\x54\x65\x78\x74", !1, _43a11b07dbba);
        } catch {}
      }, _0x87f761_3 = async _e3a8c23acfb1 => {
        try {
          await (navigator.clipboard?.writeText(String(_e3a8c23acfb1 || "")));
        } catch {
          try {
            document.execCommand?.("\x63\x6f\x70\x79");
          } catch {}
        }
      }, _e3a8c23acfb1 = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _43a11b07dbba = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), _0x87f761_6 = _edf47f6d25fa => {
        try {
          _e3a8c23acfb1?.postMessage(_edf47f6d25fa, "\x2a");
        } catch {}
        try {
          _43a11b07dbba && _43a11b07dbba !== _e3a8c23acfb1 && _43a11b07dbba.postMessage(_edf47f6d25fa, "\x2a");
        } catch {}
        try {
          window.parent?.postMessage(_edf47f6d25fa, "\x2a");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_edf47f6d25fa, "\x2a");
        } catch {}
      };
      window.addEventListener("\x6b\x65\x79\x64\x6f\x77\x6e", _e3a8c23acfb1 => {
        const _43a11b07dbba = String(_e3a8c23acfb1.key || "").toLowerCase();
        if (_e3a8c23acfb1.altKey && !_e3a8c23acfb1.ctrlKey && !_e3a8c23acfb1.metaKey && 2 !== _e3a8c23acfb1.location && "\x61\x6c\x74" === _43a11b07dbba) return _e3a8c23acfb1.preventDefault(), 
        _e3a8c23acfb1.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x70\x72\x69\x6d\x65"
        });
        if (_e3a8c23acfb1.altKey && !_e3a8c23acfb1.ctrlKey && !_e3a8c23acfb1.metaKey && 2 !== _e3a8c23acfb1.location && _0x87f761_0(_e3a8c23acfb1.target) && /^[acxvzy]$/.test(_43a11b07dbba)) {
          if (_e3a8c23acfb1.preventDefault(), _e3a8c23acfb1.stopPropagation(), "\x61" === _43a11b07dbba) return void (_e3a8c23acfb1.target?.select ? _e3a8c23acfb1.target.select() : document.execCommand?.("\x73\x65\x6c\x65\x63\x74\x41\x6c\x6c"));
          if ("\x63" === _43a11b07dbba) return void _0x87f761_3(_0x87f761_1(_e3a8c23acfb1.target));
          if ("\x78" === _43a11b07dbba) {
            const _43a11b07dbba = _0x87f761_1(_e3a8c23acfb1.target);
            return _0x87f761_3(_43a11b07dbba), void _0x87f761_2(_e3a8c23acfb1.target, "");
          }
          if ("\x76" === _43a11b07dbba) return void navigator.clipboard?.readText?.().then(_43a11b07dbba => _0x87f761_2(_e3a8c23acfb1.target, _43a11b07dbba)).catch(() => {
            try {
              document.execCommand?.("\x70\x61\x73\x74\x65");
            } catch {}
          });
          if ("\x7a" === _43a11b07dbba) return void document.execCommand?.("\x75\x6e\x64\x6f");
          if ("\x79" === _43a11b07dbba) return void document.execCommand?.("\x72\x65\x64\x6f");
        }
        return !_e3a8c23acfb1.altKey || _e3a8c23acfb1.ctrlKey || _e3a8c23acfb1.metaKey || 2 === _e3a8c23acfb1.location || !/^[1-9]$/.test(_43a11b07dbba) && ![ "\x6c", "\x64", "\x74", "\x77", "\x72", "\x61\x72\x72\x6f\x77\x6c\x65\x66\x74", "\x61\x72\x72\x6f\x77\x72\x69\x67\x68\x74", "\x74\x61\x62" ].includes(_43a11b07dbba) ? void 0 : (_e3a8c23acfb1.preventDefault(), 
        _e3a8c23acfb1.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x73\x68\x6f\x72\x74\x63\x75\x74",
          key: _43a11b07dbba,
          code: _e3a8c23acfb1.code || "",
          location: _e3a8c23acfb1.location || 0,
          shiftKey: !!_e3a8c23acfb1.shiftKey
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
  }, _0x87f761_2 = _e3a8c23acfb1 => {
    if (!_e3a8c23acfb1) return !1;
    try {
      return _e3a8c23acfb1.document.open(), _e3a8c23acfb1.document.write("\x3c\x21\x64\x6f\x63\x74\x79\x70\x65\x20\x68\x74\x6d\x6c\x3e\x3c\x68\x74\x6d\x6c\x3e\x3c\x68\x65\x61\x64\x3e\x3c\x6d\x65\x74\x61\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x22\x75\x74\x66\x2d\x38\x22\x3e\x3c\x6d\x65\x74\x61\x20\x6e\x61\x6d\x65\x3d\x22\x76\x69\x65\x77\x70\x6f\x72\x74\x22\x20\x63\x6f\x6e\x74\x65\x6e\x74\x3d\x22\x77\x69\x64\x74\x68\x3d\x64\x65\x76\x69\x63\x65\x2d\x77\x69\x64\x74\x68\x2c\x69\x6e\x69\x74\x69\x61\x6c\x2d\x73\x63\x61\x6c\x65\x3d\x31\x22\x3e\x3c\x74\x69\x74\x6c\x65\x3e\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61\x3c\x2f\x74\x69\x74\x6c\x65\x3e\x3c\x73\x74\x79\x6c\x65\x3e\x68\x74\x6d\x6c\x2c\x62\x6f\x64\x79\x7b\x6d\x61\x72\x67\x69\x6e\x3a\x30\x3b\x77\x69\x64\x74\x68\x3a\x31\x30\x30\x25\x3b\x68\x65\x69\x67\x68\x74\x3a\x31\x30\x30\x25\x3b\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x3a\x23\x66\x66\x66\x3b\x63\x6f\x6c\x6f\x72\x3a\x23\x31\x31\x31\x3b\x66\x6f\x6e\x74\x3a\x32\x38\x70\x78\x20\x52\x61\x6c\x65\x77\x61\x79\x2c\x41\x72\x69\x61\x6c\x2c\x73\x61\x6e\x73\x2d\x73\x65\x72\x69\x66\x7d\x62\x6f\x64\x79\x7b\x64\x69\x73\x70\x6c\x61\x79\x3a\x67\x72\x69\x64\x3b\x70\x6c\x61\x63\x65\x2d\x69\x74\x65\x6d\x73\x3a\x63\x65\x6e\x74\x65\x72\x3b\x74\x65\x78\x74\x2d\x61\x6c\x69\x67\x6e\x3a\x63\x65\x6e\x74\x65\x72\x7d\x6d\x61\x69\x6e\x7b\x70\x61\x64\x64\x69\x6e\x67\x3a\x32\x34\x70\x78\x7d\x3c\x2f\x73\x74\x79\x6c\x65\x3e\x3c\x2f\x68\x65\x61\x64\x3e\x3c\x62\x6f\x64\x79\x3e\x3c\x6d\x61\x69\x6e\x3e\x61\x72\x65\x20\x79\x6f\x75\x20\x74\x72\x79\x69\x6e\x67\x20\x74\x6f\x20\x68\x61\x63\x6b\x20\x6d\x65\x20\x73\x63\x61\x6d\x6d\x61\x3f\x3f\x3f\x3c\x2f\x6d\x61\x69\x6e\x3e\x3c\x2f\x62\x6f\x64\x79\x3e\x3c\x2f\x68\x74\x6d\x6c\x3e"), 
      _e3a8c23acfb1.document.close(), _e3a8c23acfb1.focus?.(), !0;
    } catch {
      return !1;
    }
  }, _0x87f761_3 = () => {
    const _e3a8c23acfb1 = null;
    return {
      closed: !1,
      focus() {
        try {
          _e3a8c23acfb1?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _e3a8c23acfb1?.blur?.();
        } catch {}
      },
      close() {
        try {
          _e3a8c23acfb1?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return _0x87f761_2(_e3a8c23acfb1), this;
        },
        write() {
          _0x87f761_2(_e3a8c23acfb1);
        },
        writeln() {
          _0x87f761_2(_e3a8c23acfb1);
        },
        close() {
          _0x87f761_2(_e3a8c23acfb1);
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
          _0x87f761_2(_e3a8c23acfb1);
        },
        toString: () => "\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61"
      }
    };
  }, _0x87f761_4 = _e3a8c23acfb1 => {
    const _43a11b07dbba = String(_e3a8c23acfb1 || "").trim();
    if (/^(?:blob|data):/i.test(_43a11b07dbba)) return !1;
    const _edf47f6d25fa = _43a11b07dbba.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_edf47f6d25fa);
  }, _0x87f761_5 = (_e3a8c23acfb1, _43a11b07dbba = "") => {
    const _edf47f6d25fa = String(_e3a8c23acfb1 || "").trim();
    if (!_edf47f6d25fa || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "\x6e\x79\x78\x3a\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x2d\x72\x65\x71\x75\x65\x73\x74",
        url: _edf47f6d25fa,
        filename: String(_43a11b07dbba || ""),
        sourceUrl: String(location.href || "")
      }, "\x2a"), !0;
    } catch {
      return !1;
    }
  };
  let _0x87f761_6 = (..._43a11b07dbba) => _0x87f761_4(_43a11b07dbba[0]) && _0x87f761_5(_43a11b07dbba[0]) ? null : !_0x87f761_1() && _e3a8c23acfb1 ? _e3a8c23acfb1(..._43a11b07dbba) : _0x87f761_3();
  try {
    "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _e3a8c23acfb1 && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof \u{50}\u{72}\u{6f}\u{78}\u{79} && (_0x87f761_6 = new \u{50}\u{72}\u{6f}\u{78}\u{79}(_e3a8c23acfb1, {
      apply: (_e3a8c23acfb1, _43a11b07dbba, _edf47f6d25fa) => _0x87f761_4(_edf47f6d25fa[0]) && _0x87f761_5(_edf47f6d25fa[0]) ? null : _0x87f761_1() ? _0x87f761_3() : Reflect.apply(_e3a8c23acfb1, _43a11b07dbba, _edf47f6d25fa),
      construct(_e3a8c23acfb1, _43a11b07dbba, _edf47f6d25fa) {
        if (!_0x87f761_1()) try {
          return Reflect.construct(_e3a8c23acfb1, _43a11b07dbba, _edf47f6d25fa);
        } catch {
          return Reflect.apply(_e3a8c23acfb1, window, _43a11b07dbba);
        }
        return _0x87f761_3();
      },
      get: (_e3a8c23acfb1, _43a11b07dbba, _edf47f6d25fa) => "\x5f\x5f\x6e\x79\x78\x50\x6f\x70\x75\x70\x47\x75\x61\x72\x64" === _43a11b07dbba || ("\x74\x6f\x53\x74\x72\x69\x6e\x67" === _43a11b07dbba ? () => "\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x6f\x70\x65\x6e\x28\x29\x20\x7b\x20\x5b\x6e\x61\x74\x69\x76\x65\x20\x63\x6f\x64\x65\x5d\x20\x7d" : Reflect.get(_e3a8c23acfb1, _43a11b07dbba, _edf47f6d25fa))
    }));
  } catch {}
  const _0x87f761_7 = _e3a8c23acfb1 => {
    const _43a11b07dbba = String(_e3a8c23acfb1 || "").toLowerCase();
    return _43a11b07dbba && ![ "\x5f\x73\x65\x6c\x66", "\x5f\x70\x61\x72\x65\x6e\x74", "\x5f\x74\x6f\x70" ].includes(_43a11b07dbba);
  }, _0x87f761_8 = _e3a8c23acfb1 => !!_e3a8c23acfb1 && (!!_e3a8c23acfb1.hasAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || _0x87f761_4(_e3a8c23acfb1.href || _e3a8c23acfb1.getAttribute("\x68\x72\x65\x66") || ""));
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
    const _e3a8c23acfb1 = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!_0x87f761_8(this) || !_0x87f761_5(this.href || this.getAttribute("\x68\x72\x65\x66"), this.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "")) {
        if (!_0x87f761_1() || !_0x87f761_7(this.target)) return _e3a8c23acfb1.call(this);
        _0x87f761_3();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("\x63\x6c\x69\x63\x6b", _e3a8c23acfb1 => {
    const _43a11b07dbba = _e3a8c23acfb1.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_43a11b07dbba) return _0x87f761_8(_43a11b07dbba) && _0x87f761_5(_43a11b07dbba.href || _43a11b07dbba.getAttribute("\x68\x72\x65\x66"), _43a11b07dbba.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_e3a8c23acfb1.preventDefault(), 
    void _e3a8c23acfb1.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_43a11b07dbba.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_e3a8c23acfb1.preventDefault(), 
    _e3a8c23acfb1.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x61\x75\x78\x63\x6c\x69\x63\x6b", _e3a8c23acfb1 => {
    const _43a11b07dbba = _e3a8c23acfb1.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_43a11b07dbba) return _0x87f761_8(_43a11b07dbba) && _0x87f761_5(_43a11b07dbba.href || _43a11b07dbba.getAttribute("\x68\x72\x65\x66"), _43a11b07dbba.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_e3a8c23acfb1.preventDefault(), 
    void _e3a8c23acfb1.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_43a11b07dbba.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_e3a8c23acfb1.preventDefault(), 
    _e3a8c23acfb1.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x73\x75\x62\x6d\x69\x74", _e3a8c23acfb1 => {
    if (!_0x87f761_1()) return;
    const _43a11b07dbba = _e3a8c23acfb1.target;
    _43a11b07dbba && "\x46\x4f\x52\x4d" === String(_43a11b07dbba.tagName || "").toUpperCase() && _0x87f761_7(_43a11b07dbba.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_e3a8c23acfb1.preventDefault(), 
    _e3a8c23acfb1.stopImmediatePropagation(), _0x87f761_3());
  }, !0));
  const _0x87f761_9 = _e3a8c23acfb1 => {
    const _43a11b07dbba = window[_e3a8c23acfb1];
    if ("\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _43a11b07dbba && !_43a11b07dbba.__nyxWrapped) try {
      Object.setPrototypeOf(_0x87f761_2, _43a11b07dbba), _0x87f761_2.prototype = _43a11b07dbba.prototype, 
      Object.defineProperty(_0x87f761_2, "\x5f\x5f\x6e\x79\x78\x57\x72\x61\x70\x70\x65\x64", {
        value: !0
      }), window[_e3a8c23acfb1] = _0x87f761_2;
    } catch {}
    function _0x87f761_2(_e3a8c23acfb1, _edf47f6d25fa, _3f1f10bc1533) {
      let _a3acbb7014a9 = Number(_e3a8c23acfb1), _9d3e804e03ee = Number(_edf47f6d25fa);
      return (!Number.isFinite(_a3acbb7014a9) || _a3acbb7014a9 < 0) && (_a3acbb7014a9 = 0), 
      (!Number.isFinite(_9d3e804e03ee) || _9d3e804e03ee <= _a3acbb7014a9) && (_9d3e804e03ee = _a3acbb7014a9 + .001), 
      Reflect.construct(_43a11b07dbba, [ _a3acbb7014a9, _9d3e804e03ee, null == _3f1f10bc1533 ? "" : String(_3f1f10bc1533) ], new.target || _0x87f761_2);
    }
  };
  _0x87f761_9("\x56\x54\x54\x43\x75\x65"), _0x87f761_9("\x54\x65\x78\x74\x54\x72\x61\x63\x6b\x43\x75\x65");
})();
