(() => {
  if ("\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" == typeof window || window.__nyxStudyJetGuards) return;
  window.__nyxStudyJetGuards = !0;
  const _53802b5066ca = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "\x74\x72\x75\x73\x74\x65\x64\x54\x79\x70\x65\x73", {
      configurable: !0,
      value: {
        createPolicy: (_53802b5066ca, _54df4d47a4aa = {}) => ({
          createHTML: _53802b5066ca => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _54df4d47a4aa.createHTML ? _54df4d47a4aa.createHTML(_53802b5066ca) : _53802b5066ca,
          createScript: _53802b5066ca => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _54df4d47a4aa.createScript ? _54df4d47a4aa.createScript(_53802b5066ca) : _53802b5066ca,
          createScriptURL: _53802b5066ca => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _54df4d47a4aa.createScriptURL ? _54df4d47a4aa.createScriptURL(_53802b5066ca) : _53802b5066ca
        })
      }
    });
  } catch {}
  try {
    const _53802b5066ca = Object.getOwnPropertyDescriptor(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74"), _54df4d47a4aa = document.createElement("\x73\x63\x72\x69\x70\x74");
    _54df4d47a4aa.setAttribute("\x6e\x6f\x6e\x63\x65", ""), Object.defineProperty(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74", {
      configurable: !0,
      get() {
        let _7e51f4064944 = null;
        try {
          _7e51f4064944 = _53802b5066ca?.get?.call(this) || null;
        } catch {}
        return _7e51f4064944 || this.querySelector?.("\x73\x63\x72\x69\x70\x74\x5b\x73\x72\x63\x5d\x2c\x73\x63\x72\x69\x70\x74") || _54df4d47a4aa;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const _0x87f761_0 = _53802b5066ca => !(!_53802b5066ca || !_53802b5066ca.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_53802b5066ca.tagName || "")), _0x87f761_1 = _53802b5066ca => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_53802b5066ca?.tagName || "") ? String(_53802b5066ca.value || "").slice(_53802b5066ca.selectionStart || 0, _53802b5066ca.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, _0x87f761_2 = (_53802b5066ca, _54df4d47a4aa) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_53802b5066ca?.tagName || "")) {
            const _7e51f4064944 = _53802b5066ca.selectionStart || 0, _146303dfda4c = _53802b5066ca.selectionEnd || 0, _20be21038c4e = String(_53802b5066ca.value || "");
            _53802b5066ca.value = _20be21038c4e.slice(0, _7e51f4064944) + _54df4d47a4aa + _20be21038c4e.slice(_146303dfda4c);
            const _55521fe69049 = _7e51f4064944 + String(_54df4d47a4aa).length;
            return _53802b5066ca.setSelectionRange(_55521fe69049, _55521fe69049), void _53802b5066ca.dispatchEvent(new Event("\x69\x6e\x70\x75\x74", {
              bubbles: !0
            }));
          }
          document.execCommand?.("\x69\x6e\x73\x65\x72\x74\x54\x65\x78\x74", !1, _54df4d47a4aa);
        } catch {}
      }, _0x87f761_3 = async _53802b5066ca => {
        try {
          await (navigator.clipboard?.writeText(String(_53802b5066ca || "")));
        } catch {
          try {
            document.execCommand?.("\x63\x6f\x70\x79");
          } catch {}
        }
      }, _53802b5066ca = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _54df4d47a4aa = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), _0x87f761_6 = _7e51f4064944 => {
        try {
          _53802b5066ca?.postMessage(_7e51f4064944, "\x2a");
        } catch {}
        try {
          _54df4d47a4aa && _54df4d47a4aa !== _53802b5066ca && _54df4d47a4aa.postMessage(_7e51f4064944, "\x2a");
        } catch {}
        try {
          window.parent?.postMessage(_7e51f4064944, "\x2a");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_7e51f4064944, "\x2a");
        } catch {}
      };
      window.addEventListener("\x6b\x65\x79\x64\x6f\x77\x6e", _53802b5066ca => {
        const _54df4d47a4aa = String(_53802b5066ca.key || "").toLowerCase();
        if (_53802b5066ca.altKey && !_53802b5066ca.ctrlKey && !_53802b5066ca.metaKey && 2 !== _53802b5066ca.location && "\x61\x6c\x74" === _54df4d47a4aa) return _53802b5066ca.preventDefault(), 
        _53802b5066ca.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x70\x72\x69\x6d\x65"
        });
        if (_53802b5066ca.altKey && !_53802b5066ca.ctrlKey && !_53802b5066ca.metaKey && 2 !== _53802b5066ca.location && _0x87f761_0(_53802b5066ca.target) && /^[acxvzy]$/.test(_54df4d47a4aa)) {
          if (_53802b5066ca.preventDefault(), _53802b5066ca.stopPropagation(), "\x61" === _54df4d47a4aa) return void (_53802b5066ca.target?.select ? _53802b5066ca.target.select() : document.execCommand?.("\x73\x65\x6c\x65\x63\x74\x41\x6c\x6c"));
          if ("\x63" === _54df4d47a4aa) return void _0x87f761_3(_0x87f761_1(_53802b5066ca.target));
          if ("\x78" === _54df4d47a4aa) {
            const _54df4d47a4aa = _0x87f761_1(_53802b5066ca.target);
            return _0x87f761_3(_54df4d47a4aa), void _0x87f761_2(_53802b5066ca.target, "");
          }
          if ("\x76" === _54df4d47a4aa) return void navigator.clipboard?.readText?.().then(_54df4d47a4aa => _0x87f761_2(_53802b5066ca.target, _54df4d47a4aa)).catch(() => {
            try {
              document.execCommand?.("\x70\x61\x73\x74\x65");
            } catch {}
          });
          if ("\x7a" === _54df4d47a4aa) return void document.execCommand?.("\x75\x6e\x64\x6f");
          if ("\x79" === _54df4d47a4aa) return void document.execCommand?.("\x72\x65\x64\x6f");
        }
        return !_53802b5066ca.altKey || _53802b5066ca.ctrlKey || _53802b5066ca.metaKey || 2 === _53802b5066ca.location || !/^[1-9]$/.test(_54df4d47a4aa) && ![ "\x6c", "\x64", "\x74", "\x77", "\x72", "\x61\x72\x72\x6f\x77\x6c\x65\x66\x74", "\x61\x72\x72\x6f\x77\x72\x69\x67\x68\x74", "\x74\x61\x62" ].includes(_54df4d47a4aa) ? void 0 : (_53802b5066ca.preventDefault(), 
        _53802b5066ca.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x73\x68\x6f\x72\x74\x63\x75\x74",
          key: _54df4d47a4aa,
          code: _53802b5066ca.code || "",
          location: _53802b5066ca.location || 0,
          shiftKey: !!_53802b5066ca.shiftKey
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
  }, _0x87f761_2 = _53802b5066ca => {
    if (!_53802b5066ca) return !1;
    try {
      return _53802b5066ca.document.open(), _53802b5066ca.document.write("\x3c\x21\x64\x6f\x63\x74\x79\x70\x65\x20\x68\x74\x6d\x6c\x3e\x3c\x68\x74\x6d\x6c\x3e\x3c\x68\x65\x61\x64\x3e\x3c\x6d\x65\x74\x61\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x22\x75\x74\x66\x2d\x38\x22\x3e\x3c\x6d\x65\x74\x61\x20\x6e\x61\x6d\x65\x3d\x22\x76\x69\x65\x77\x70\x6f\x72\x74\x22\x20\x63\x6f\x6e\x74\x65\x6e\x74\x3d\x22\x77\x69\x64\x74\x68\x3d\x64\x65\x76\x69\x63\x65\x2d\x77\x69\x64\x74\x68\x2c\x69\x6e\x69\x74\x69\x61\x6c\x2d\x73\x63\x61\x6c\x65\x3d\x31\x22\x3e\x3c\x74\x69\x74\x6c\x65\x3e\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61\x3c\x2f\x74\x69\x74\x6c\x65\x3e\x3c\x73\x74\x79\x6c\x65\x3e\x68\x74\x6d\x6c\x2c\x62\x6f\x64\x79\x7b\x6d\x61\x72\x67\x69\x6e\x3a\x30\x3b\x77\x69\x64\x74\x68\x3a\x31\x30\x30\x25\x3b\x68\x65\x69\x67\x68\x74\x3a\x31\x30\x30\x25\x3b\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x3a\x23\x66\x66\x66\x3b\x63\x6f\x6c\x6f\x72\x3a\x23\x31\x31\x31\x3b\x66\x6f\x6e\x74\x3a\x32\x38\x70\x78\x20\x52\x61\x6c\x65\x77\x61\x79\x2c\x41\x72\x69\x61\x6c\x2c\x73\x61\x6e\x73\x2d\x73\x65\x72\x69\x66\x7d\x62\x6f\x64\x79\x7b\x64\x69\x73\x70\x6c\x61\x79\x3a\x67\x72\x69\x64\x3b\x70\x6c\x61\x63\x65\x2d\x69\x74\x65\x6d\x73\x3a\x63\x65\x6e\x74\x65\x72\x3b\x74\x65\x78\x74\x2d\x61\x6c\x69\x67\x6e\x3a\x63\x65\x6e\x74\x65\x72\x7d\x6d\x61\x69\x6e\x7b\x70\x61\x64\x64\x69\x6e\x67\x3a\x32\x34\x70\x78\x7d\x3c\x2f\x73\x74\x79\x6c\x65\x3e\x3c\x2f\x68\x65\x61\x64\x3e\x3c\x62\x6f\x64\x79\x3e\x3c\x6d\x61\x69\x6e\x3e\x61\x72\x65\x20\x79\x6f\x75\x20\x74\x72\x79\x69\x6e\x67\x20\x74\x6f\x20\x68\x61\x63\x6b\x20\x6d\x65\x20\x73\x63\x61\x6d\x6d\x61\x3f\x3f\x3f\x3c\x2f\x6d\x61\x69\x6e\x3e\x3c\x2f\x62\x6f\x64\x79\x3e\x3c\x2f\x68\x74\x6d\x6c\x3e"), 
      _53802b5066ca.document.close(), _53802b5066ca.focus?.(), !0;
    } catch {
      return !1;
    }
  }, _0x87f761_3 = () => {
    const _53802b5066ca = null;
    return {
      closed: !1,
      focus() {
        try {
          _53802b5066ca?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _53802b5066ca?.blur?.();
        } catch {}
      },
      close() {
        try {
          _53802b5066ca?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return _0x87f761_2(_53802b5066ca), this;
        },
        write() {
          _0x87f761_2(_53802b5066ca);
        },
        writeln() {
          _0x87f761_2(_53802b5066ca);
        },
        close() {
          _0x87f761_2(_53802b5066ca);
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
          _0x87f761_2(_53802b5066ca);
        },
        toString: () => "\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61"
      }
    };
  }, _0x87f761_4 = _53802b5066ca => {
    const _54df4d47a4aa = String(_53802b5066ca || "").trim();
    if (/^(?:blob|data):/i.test(_54df4d47a4aa)) return !1;
    const _7e51f4064944 = _54df4d47a4aa.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_7e51f4064944);
  }, _0x87f761_5 = (_53802b5066ca, _54df4d47a4aa = "") => {
    const _7e51f4064944 = String(_53802b5066ca || "").trim();
    if (!_7e51f4064944 || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "\x6e\x79\x78\x3a\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x2d\x72\x65\x71\x75\x65\x73\x74",
        url: _7e51f4064944,
        filename: String(_54df4d47a4aa || ""),
        sourceUrl: String(location.href || "")
      }, "\x2a"), !0;
    } catch {
      return !1;
    }
  };
  let _0x87f761_6 = (..._54df4d47a4aa) => _0x87f761_4(_54df4d47a4aa[0]) && _0x87f761_5(_54df4d47a4aa[0]) ? null : !_0x87f761_1() && _53802b5066ca ? _53802b5066ca(..._54df4d47a4aa) : _0x87f761_3();
  try {
    "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _53802b5066ca && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof \u{50}\u{72}\u{6f}\u{78}\u{79} && (_0x87f761_6 = new \u{50}\u{72}\u{6f}\u{78}\u{79}(_53802b5066ca, {
      apply: (_53802b5066ca, _54df4d47a4aa, _7e51f4064944) => _0x87f761_4(_7e51f4064944[0]) && _0x87f761_5(_7e51f4064944[0]) ? null : _0x87f761_1() ? _0x87f761_3() : Reflect.apply(_53802b5066ca, _54df4d47a4aa, _7e51f4064944),
      construct(_53802b5066ca, _54df4d47a4aa, _7e51f4064944) {
        if (!_0x87f761_1()) try {
          return Reflect.construct(_53802b5066ca, _54df4d47a4aa, _7e51f4064944);
        } catch {
          return Reflect.apply(_53802b5066ca, window, _54df4d47a4aa);
        }
        return _0x87f761_3();
      },
      get: (_53802b5066ca, _54df4d47a4aa, _7e51f4064944) => "\x5f\x5f\x6e\x79\x78\x50\x6f\x70\x75\x70\x47\x75\x61\x72\x64" === _54df4d47a4aa || ("\x74\x6f\x53\x74\x72\x69\x6e\x67" === _54df4d47a4aa ? () => "\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x6f\x70\x65\x6e\x28\x29\x20\x7b\x20\x5b\x6e\x61\x74\x69\x76\x65\x20\x63\x6f\x64\x65\x5d\x20\x7d" : Reflect.get(_53802b5066ca, _54df4d47a4aa, _7e51f4064944))
    }));
  } catch {}
  const _0x87f761_7 = _53802b5066ca => {
    const _54df4d47a4aa = String(_53802b5066ca || "").toLowerCase();
    return _54df4d47a4aa && ![ "\x5f\x73\x65\x6c\x66", "\x5f\x70\x61\x72\x65\x6e\x74", "\x5f\x74\x6f\x70" ].includes(_54df4d47a4aa);
  }, _0x87f761_8 = _53802b5066ca => !!_53802b5066ca && (!!_53802b5066ca.hasAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || _0x87f761_4(_53802b5066ca.href || _53802b5066ca.getAttribute("\x68\x72\x65\x66") || ""));
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
    const _53802b5066ca = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!_0x87f761_8(this) || !_0x87f761_5(this.href || this.getAttribute("\x68\x72\x65\x66"), this.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "")) {
        if (!_0x87f761_1() || !_0x87f761_7(this.target)) return _53802b5066ca.call(this);
        _0x87f761_3();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("\x63\x6c\x69\x63\x6b", _53802b5066ca => {
    const _54df4d47a4aa = _53802b5066ca.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_54df4d47a4aa) return _0x87f761_8(_54df4d47a4aa) && _0x87f761_5(_54df4d47a4aa.href || _54df4d47a4aa.getAttribute("\x68\x72\x65\x66"), _54df4d47a4aa.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_53802b5066ca.preventDefault(), 
    void _53802b5066ca.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_54df4d47a4aa.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_53802b5066ca.preventDefault(), 
    _53802b5066ca.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x61\x75\x78\x63\x6c\x69\x63\x6b", _53802b5066ca => {
    const _54df4d47a4aa = _53802b5066ca.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_54df4d47a4aa) return _0x87f761_8(_54df4d47a4aa) && _0x87f761_5(_54df4d47a4aa.href || _54df4d47a4aa.getAttribute("\x68\x72\x65\x66"), _54df4d47a4aa.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_53802b5066ca.preventDefault(), 
    void _53802b5066ca.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_54df4d47a4aa.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_53802b5066ca.preventDefault(), 
    _53802b5066ca.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x73\x75\x62\x6d\x69\x74", _53802b5066ca => {
    if (!_0x87f761_1()) return;
    const _54df4d47a4aa = _53802b5066ca.target;
    _54df4d47a4aa && "\x46\x4f\x52\x4d" === String(_54df4d47a4aa.tagName || "").toUpperCase() && _0x87f761_7(_54df4d47a4aa.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_53802b5066ca.preventDefault(), 
    _53802b5066ca.stopImmediatePropagation(), _0x87f761_3());
  }, !0));
  const _0x87f761_9 = _53802b5066ca => {
    const _54df4d47a4aa = window[_53802b5066ca];
    if ("\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _54df4d47a4aa && !_54df4d47a4aa.__nyxWrapped) try {
      Object.setPrototypeOf(_0x87f761_2, _54df4d47a4aa), _0x87f761_2.prototype = _54df4d47a4aa.prototype, 
      Object.defineProperty(_0x87f761_2, "\x5f\x5f\x6e\x79\x78\x57\x72\x61\x70\x70\x65\x64", {
        value: !0
      }), window[_53802b5066ca] = _0x87f761_2;
    } catch {}
    function _0x87f761_2(_53802b5066ca, _7e51f4064944, _146303dfda4c) {
      let _20be21038c4e = Number(_53802b5066ca), _55521fe69049 = Number(_7e51f4064944);
      return (!Number.isFinite(_20be21038c4e) || _20be21038c4e < 0) && (_20be21038c4e = 0), 
      (!Number.isFinite(_55521fe69049) || _55521fe69049 <= _20be21038c4e) && (_55521fe69049 = _20be21038c4e + .001), 
      Reflect.construct(_54df4d47a4aa, [ _20be21038c4e, _55521fe69049, null == _146303dfda4c ? "" : String(_146303dfda4c) ], new.target || _0x87f761_2);
    }
  };
  _0x87f761_9("\x56\x54\x54\x43\x75\x65"), _0x87f761_9("\x54\x65\x78\x74\x54\x72\x61\x63\x6b\x43\x75\x65");
})();
