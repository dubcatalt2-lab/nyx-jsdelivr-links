(() => {
  if ("\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" == typeof window || window.__nyxStudyJetGuards) return;
  window.__nyxStudyJetGuards = !0;
  const _4a236c1a4539 = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "\x74\x72\x75\x73\x74\x65\x64\x54\x79\x70\x65\x73", {
      configurable: !0,
      value: {
        createPolicy: (_4a236c1a4539, _20a5b3941a94 = {}) => ({
          createHTML: _4a236c1a4539 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _20a5b3941a94.createHTML ? _20a5b3941a94.createHTML(_4a236c1a4539) : _4a236c1a4539,
          createScript: _4a236c1a4539 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _20a5b3941a94.createScript ? _20a5b3941a94.createScript(_4a236c1a4539) : _4a236c1a4539,
          createScriptURL: _4a236c1a4539 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _20a5b3941a94.createScriptURL ? _20a5b3941a94.createScriptURL(_4a236c1a4539) : _4a236c1a4539
        })
      }
    });
  } catch {}
  try {
    const _4a236c1a4539 = Object.getOwnPropertyDescriptor(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74"), _20a5b3941a94 = document.createElement("\x73\x63\x72\x69\x70\x74");
    _20a5b3941a94.setAttribute("\x6e\x6f\x6e\x63\x65", ""), Object.defineProperty(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74", {
      configurable: !0,
      get() {
        let _d2cf901907f7 = null;
        try {
          _d2cf901907f7 = _4a236c1a4539?.get?.call(this) || null;
        } catch {}
        return _d2cf901907f7 || this.querySelector?.("\x73\x63\x72\x69\x70\x74\x5b\x73\x72\x63\x5d\x2c\x73\x63\x72\x69\x70\x74") || _20a5b3941a94;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const _0x87f761_0 = _4a236c1a4539 => !(!_4a236c1a4539 || !_4a236c1a4539.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_4a236c1a4539.tagName || "")), _0x87f761_1 = _4a236c1a4539 => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_4a236c1a4539?.tagName || "") ? String(_4a236c1a4539.value || "").slice(_4a236c1a4539.selectionStart || 0, _4a236c1a4539.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, _0x87f761_2 = (_4a236c1a4539, _20a5b3941a94) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_4a236c1a4539?.tagName || "")) {
            const _d2cf901907f7 = _4a236c1a4539.selectionStart || 0, _9b1730892aa6 = _4a236c1a4539.selectionEnd || 0, _2687bff96b96 = String(_4a236c1a4539.value || "");
            _4a236c1a4539.value = _2687bff96b96.slice(0, _d2cf901907f7) + _20a5b3941a94 + _2687bff96b96.slice(_9b1730892aa6);
            const _f13313c35ab9 = _d2cf901907f7 + String(_20a5b3941a94).length;
            return _4a236c1a4539.setSelectionRange(_f13313c35ab9, _f13313c35ab9), void _4a236c1a4539.dispatchEvent(new Event("\x69\x6e\x70\x75\x74", {
              bubbles: !0
            }));
          }
          document.execCommand?.("\x69\x6e\x73\x65\x72\x74\x54\x65\x78\x74", !1, _20a5b3941a94);
        } catch {}
      }, _0x87f761_3 = async _4a236c1a4539 => {
        try {
          await (navigator.clipboard?.writeText(String(_4a236c1a4539 || "")));
        } catch {
          try {
            document.execCommand?.("\x63\x6f\x70\x79");
          } catch {}
        }
      }, _4a236c1a4539 = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _20a5b3941a94 = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), _0x87f761_6 = _d2cf901907f7 => {
        try {
          _4a236c1a4539?.postMessage(_d2cf901907f7, "\x2a");
        } catch {}
        try {
          _20a5b3941a94 && _20a5b3941a94 !== _4a236c1a4539 && _20a5b3941a94.postMessage(_d2cf901907f7, "\x2a");
        } catch {}
        try {
          window.parent?.postMessage(_d2cf901907f7, "\x2a");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_d2cf901907f7, "\x2a");
        } catch {}
      };
      window.addEventListener("\x6b\x65\x79\x64\x6f\x77\x6e", _4a236c1a4539 => {
        const _20a5b3941a94 = String(_4a236c1a4539.key || "").toLowerCase();
        if (_4a236c1a4539.altKey && !_4a236c1a4539.ctrlKey && !_4a236c1a4539.metaKey && 2 !== _4a236c1a4539.location && "\x61\x6c\x74" === _20a5b3941a94) return _4a236c1a4539.preventDefault(), 
        _4a236c1a4539.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x70\x72\x69\x6d\x65"
        });
        if (_4a236c1a4539.altKey && !_4a236c1a4539.ctrlKey && !_4a236c1a4539.metaKey && 2 !== _4a236c1a4539.location && _0x87f761_0(_4a236c1a4539.target) && /^[acxvzy]$/.test(_20a5b3941a94)) {
          if (_4a236c1a4539.preventDefault(), _4a236c1a4539.stopPropagation(), "\x61" === _20a5b3941a94) return void (_4a236c1a4539.target?.select ? _4a236c1a4539.target.select() : document.execCommand?.("\x73\x65\x6c\x65\x63\x74\x41\x6c\x6c"));
          if ("\x63" === _20a5b3941a94) return void _0x87f761_3(_0x87f761_1(_4a236c1a4539.target));
          if ("\x78" === _20a5b3941a94) {
            const _20a5b3941a94 = _0x87f761_1(_4a236c1a4539.target);
            return _0x87f761_3(_20a5b3941a94), void _0x87f761_2(_4a236c1a4539.target, "");
          }
          if ("\x76" === _20a5b3941a94) return void navigator.clipboard?.readText?.().then(_20a5b3941a94 => _0x87f761_2(_4a236c1a4539.target, _20a5b3941a94)).catch(() => {
            try {
              document.execCommand?.("\x70\x61\x73\x74\x65");
            } catch {}
          });
          if ("\x7a" === _20a5b3941a94) return void document.execCommand?.("\x75\x6e\x64\x6f");
          if ("\x79" === _20a5b3941a94) return void document.execCommand?.("\x72\x65\x64\x6f");
        }
        return !_4a236c1a4539.altKey || _4a236c1a4539.ctrlKey || _4a236c1a4539.metaKey || 2 === _4a236c1a4539.location || !/^[1-9]$/.test(_20a5b3941a94) && ![ "\x6c", "\x64", "\x74", "\x77", "\x72", "\x61\x72\x72\x6f\x77\x6c\x65\x66\x74", "\x61\x72\x72\x6f\x77\x72\x69\x67\x68\x74", "\x74\x61\x62" ].includes(_20a5b3941a94) ? void 0 : (_4a236c1a4539.preventDefault(), 
        _4a236c1a4539.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x73\x68\x6f\x72\x74\x63\x75\x74",
          key: _20a5b3941a94,
          code: _4a236c1a4539.code || "",
          location: _4a236c1a4539.location || 0,
          shiftKey: !!_4a236c1a4539.shiftKey
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
  }, _0x87f761_2 = _4a236c1a4539 => {
    if (!_4a236c1a4539) return !1;
    try {
      return _4a236c1a4539.document.open(), _4a236c1a4539.document.write("\x3c\x21\x64\x6f\x63\x74\x79\x70\x65\x20\x68\x74\x6d\x6c\x3e\x3c\x68\x74\x6d\x6c\x3e\x3c\x68\x65\x61\x64\x3e\x3c\x6d\x65\x74\x61\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x22\x75\x74\x66\x2d\x38\x22\x3e\x3c\x6d\x65\x74\x61\x20\x6e\x61\x6d\x65\x3d\x22\x76\x69\x65\x77\x70\x6f\x72\x74\x22\x20\x63\x6f\x6e\x74\x65\x6e\x74\x3d\x22\x77\x69\x64\x74\x68\x3d\x64\x65\x76\x69\x63\x65\x2d\x77\x69\x64\x74\x68\x2c\x69\x6e\x69\x74\x69\x61\x6c\x2d\x73\x63\x61\x6c\x65\x3d\x31\x22\x3e\x3c\x74\x69\x74\x6c\x65\x3e\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61\x3c\x2f\x74\x69\x74\x6c\x65\x3e\x3c\x73\x74\x79\x6c\x65\x3e\x68\x74\x6d\x6c\x2c\x62\x6f\x64\x79\x7b\x6d\x61\x72\x67\x69\x6e\x3a\x30\x3b\x77\x69\x64\x74\x68\x3a\x31\x30\x30\x25\x3b\x68\x65\x69\x67\x68\x74\x3a\x31\x30\x30\x25\x3b\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x3a\x23\x66\x66\x66\x3b\x63\x6f\x6c\x6f\x72\x3a\x23\x31\x31\x31\x3b\x66\x6f\x6e\x74\x3a\x32\x38\x70\x78\x20\x52\x61\x6c\x65\x77\x61\x79\x2c\x41\x72\x69\x61\x6c\x2c\x73\x61\x6e\x73\x2d\x73\x65\x72\x69\x66\x7d\x62\x6f\x64\x79\x7b\x64\x69\x73\x70\x6c\x61\x79\x3a\x67\x72\x69\x64\x3b\x70\x6c\x61\x63\x65\x2d\x69\x74\x65\x6d\x73\x3a\x63\x65\x6e\x74\x65\x72\x3b\x74\x65\x78\x74\x2d\x61\x6c\x69\x67\x6e\x3a\x63\x65\x6e\x74\x65\x72\x7d\x6d\x61\x69\x6e\x7b\x70\x61\x64\x64\x69\x6e\x67\x3a\x32\x34\x70\x78\x7d\x3c\x2f\x73\x74\x79\x6c\x65\x3e\x3c\x2f\x68\x65\x61\x64\x3e\x3c\x62\x6f\x64\x79\x3e\x3c\x6d\x61\x69\x6e\x3e\x61\x72\x65\x20\x79\x6f\x75\x20\x74\x72\x79\x69\x6e\x67\x20\x74\x6f\x20\x68\x61\x63\x6b\x20\x6d\x65\x20\x73\x63\x61\x6d\x6d\x61\x3f\x3f\x3f\x3c\x2f\x6d\x61\x69\x6e\x3e\x3c\x2f\x62\x6f\x64\x79\x3e\x3c\x2f\x68\x74\x6d\x6c\x3e"), 
      _4a236c1a4539.document.close(), _4a236c1a4539.focus?.(), !0;
    } catch {
      return !1;
    }
  }, _0x87f761_3 = () => {
    const _4a236c1a4539 = null;
    return {
      closed: !1,
      focus() {
        try {
          _4a236c1a4539?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _4a236c1a4539?.blur?.();
        } catch {}
      },
      close() {
        try {
          _4a236c1a4539?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return _0x87f761_2(_4a236c1a4539), this;
        },
        write() {
          _0x87f761_2(_4a236c1a4539);
        },
        writeln() {
          _0x87f761_2(_4a236c1a4539);
        },
        close() {
          _0x87f761_2(_4a236c1a4539);
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
          _0x87f761_2(_4a236c1a4539);
        },
        toString: () => "\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61"
      }
    };
  }, _0x87f761_4 = _4a236c1a4539 => {
    const _20a5b3941a94 = String(_4a236c1a4539 || "").trim();
    if (/^(?:blob|data):/i.test(_20a5b3941a94)) return !1;
    const _d2cf901907f7 = _20a5b3941a94.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_d2cf901907f7);
  }, _0x87f761_5 = (_4a236c1a4539, _20a5b3941a94 = "") => {
    const _d2cf901907f7 = String(_4a236c1a4539 || "").trim();
    if (!_d2cf901907f7 || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "\x6e\x79\x78\x3a\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x2d\x72\x65\x71\x75\x65\x73\x74",
        url: _d2cf901907f7,
        filename: String(_20a5b3941a94 || ""),
        sourceUrl: String(location.href || "")
      }, "\x2a"), !0;
    } catch {
      return !1;
    }
  };
  let _0x87f761_6 = (..._20a5b3941a94) => _0x87f761_4(_20a5b3941a94[0]) && _0x87f761_5(_20a5b3941a94[0]) ? null : !_0x87f761_1() && _4a236c1a4539 ? _4a236c1a4539(..._20a5b3941a94) : _0x87f761_3();
  try {
    "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _4a236c1a4539 && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof \u{50}\u{72}\u{6f}\u{78}\u{79} && (_0x87f761_6 = new \u{50}\u{72}\u{6f}\u{78}\u{79}(_4a236c1a4539, {
      apply: (_4a236c1a4539, _20a5b3941a94, _d2cf901907f7) => _0x87f761_4(_d2cf901907f7[0]) && _0x87f761_5(_d2cf901907f7[0]) ? null : _0x87f761_1() ? _0x87f761_3() : Reflect.apply(_4a236c1a4539, _20a5b3941a94, _d2cf901907f7),
      construct(_4a236c1a4539, _20a5b3941a94, _d2cf901907f7) {
        if (!_0x87f761_1()) try {
          return Reflect.construct(_4a236c1a4539, _20a5b3941a94, _d2cf901907f7);
        } catch {
          return Reflect.apply(_4a236c1a4539, window, _20a5b3941a94);
        }
        return _0x87f761_3();
      },
      get: (_4a236c1a4539, _20a5b3941a94, _d2cf901907f7) => "\x5f\x5f\x6e\x79\x78\x50\x6f\x70\x75\x70\x47\x75\x61\x72\x64" === _20a5b3941a94 || ("\x74\x6f\x53\x74\x72\x69\x6e\x67" === _20a5b3941a94 ? () => "\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x6f\x70\x65\x6e\x28\x29\x20\x7b\x20\x5b\x6e\x61\x74\x69\x76\x65\x20\x63\x6f\x64\x65\x5d\x20\x7d" : Reflect.get(_4a236c1a4539, _20a5b3941a94, _d2cf901907f7))
    }));
  } catch {}
  const _0x87f761_7 = _4a236c1a4539 => {
    const _20a5b3941a94 = String(_4a236c1a4539 || "").toLowerCase();
    return _20a5b3941a94 && ![ "\x5f\x73\x65\x6c\x66", "\x5f\x70\x61\x72\x65\x6e\x74", "\x5f\x74\x6f\x70" ].includes(_20a5b3941a94);
  }, _0x87f761_8 = _4a236c1a4539 => !!_4a236c1a4539 && (!!_4a236c1a4539.hasAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || _0x87f761_4(_4a236c1a4539.href || _4a236c1a4539.getAttribute("\x68\x72\x65\x66") || ""));
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
    const _4a236c1a4539 = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!_0x87f761_8(this) || !_0x87f761_5(this.href || this.getAttribute("\x68\x72\x65\x66"), this.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "")) {
        if (!_0x87f761_1() || !_0x87f761_7(this.target)) return _4a236c1a4539.call(this);
        _0x87f761_3();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("\x63\x6c\x69\x63\x6b", _4a236c1a4539 => {
    const _20a5b3941a94 = _4a236c1a4539.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_20a5b3941a94) return _0x87f761_8(_20a5b3941a94) && _0x87f761_5(_20a5b3941a94.href || _20a5b3941a94.getAttribute("\x68\x72\x65\x66"), _20a5b3941a94.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_4a236c1a4539.preventDefault(), 
    void _4a236c1a4539.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_20a5b3941a94.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_4a236c1a4539.preventDefault(), 
    _4a236c1a4539.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x61\x75\x78\x63\x6c\x69\x63\x6b", _4a236c1a4539 => {
    const _20a5b3941a94 = _4a236c1a4539.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_20a5b3941a94) return _0x87f761_8(_20a5b3941a94) && _0x87f761_5(_20a5b3941a94.href || _20a5b3941a94.getAttribute("\x68\x72\x65\x66"), _20a5b3941a94.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_4a236c1a4539.preventDefault(), 
    void _4a236c1a4539.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_20a5b3941a94.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_4a236c1a4539.preventDefault(), 
    _4a236c1a4539.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x73\x75\x62\x6d\x69\x74", _4a236c1a4539 => {
    if (!_0x87f761_1()) return;
    const _20a5b3941a94 = _4a236c1a4539.target;
    _20a5b3941a94 && "\x46\x4f\x52\x4d" === String(_20a5b3941a94.tagName || "").toUpperCase() && _0x87f761_7(_20a5b3941a94.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_4a236c1a4539.preventDefault(), 
    _4a236c1a4539.stopImmediatePropagation(), _0x87f761_3());
  }, !0));
  const _0x87f761_9 = _4a236c1a4539 => {
    const _20a5b3941a94 = window[_4a236c1a4539];
    if ("\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _20a5b3941a94 && !_20a5b3941a94.__nyxWrapped) try {
      Object.setPrototypeOf(_0x87f761_2, _20a5b3941a94), _0x87f761_2.prototype = _20a5b3941a94.prototype, 
      Object.defineProperty(_0x87f761_2, "\x5f\x5f\x6e\x79\x78\x57\x72\x61\x70\x70\x65\x64", {
        value: !0
      }), window[_4a236c1a4539] = _0x87f761_2;
    } catch {}
    function _0x87f761_2(_4a236c1a4539, _d2cf901907f7, _9b1730892aa6) {
      let _2687bff96b96 = Number(_4a236c1a4539), _f13313c35ab9 = Number(_d2cf901907f7);
      return (!Number.isFinite(_2687bff96b96) || _2687bff96b96 < 0) && (_2687bff96b96 = 0), 
      (!Number.isFinite(_f13313c35ab9) || _f13313c35ab9 <= _2687bff96b96) && (_f13313c35ab9 = _2687bff96b96 + .001), 
      Reflect.construct(_20a5b3941a94, [ _2687bff96b96, _f13313c35ab9, null == _9b1730892aa6 ? "" : String(_9b1730892aa6) ], new.target || _0x87f761_2);
    }
  };
  _0x87f761_9("\x56\x54\x54\x43\x75\x65"), _0x87f761_9("\x54\x65\x78\x74\x54\x72\x61\x63\x6b\x43\x75\x65");
})();
