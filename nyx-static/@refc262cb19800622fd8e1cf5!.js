(() => {
  if ("\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" == typeof window || window.__nyxStudyJetGuards) return;
  window.__nyxStudyJetGuards = !0;
  const _baa03a75fd8e = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "\x74\x72\x75\x73\x74\x65\x64\x54\x79\x70\x65\x73", {
      configurable: !0,
      value: {
        createPolicy: (_baa03a75fd8e, _c0e3734cc228 = {}) => ({
          createHTML: _baa03a75fd8e => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _c0e3734cc228.createHTML ? _c0e3734cc228.createHTML(_baa03a75fd8e) : _baa03a75fd8e,
          createScript: _baa03a75fd8e => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _c0e3734cc228.createScript ? _c0e3734cc228.createScript(_baa03a75fd8e) : _baa03a75fd8e,
          createScriptURL: _baa03a75fd8e => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _c0e3734cc228.createScriptURL ? _c0e3734cc228.createScriptURL(_baa03a75fd8e) : _baa03a75fd8e
        })
      }
    });
  } catch {}
  try {
    const _baa03a75fd8e = Object.getOwnPropertyDescriptor(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74"), _c0e3734cc228 = document.createElement("\x73\x63\x72\x69\x70\x74");
    _c0e3734cc228.setAttribute("\x6e\x6f\x6e\x63\x65", ""), Object.defineProperty(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74", {
      configurable: !0,
      get() {
        let _48b8729e11e7 = null;
        try {
          _48b8729e11e7 = _baa03a75fd8e?.get?.call(this) || null;
        } catch {}
        return _48b8729e11e7 || this.querySelector?.("\x73\x63\x72\x69\x70\x74\x5b\x73\x72\x63\x5d\x2c\x73\x63\x72\x69\x70\x74") || _c0e3734cc228;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const _0x87f761_0 = _baa03a75fd8e => !(!_baa03a75fd8e || !_baa03a75fd8e.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_baa03a75fd8e.tagName || "")), _0x87f761_1 = _baa03a75fd8e => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_baa03a75fd8e?.tagName || "") ? String(_baa03a75fd8e.value || "").slice(_baa03a75fd8e.selectionStart || 0, _baa03a75fd8e.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, _0x87f761_2 = (_baa03a75fd8e, _c0e3734cc228) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_baa03a75fd8e?.tagName || "")) {
            const _48b8729e11e7 = _baa03a75fd8e.selectionStart || 0, _675ae4468a17 = _baa03a75fd8e.selectionEnd || 0, _ce68daa16a4d = String(_baa03a75fd8e.value || "");
            _baa03a75fd8e.value = _ce68daa16a4d.slice(0, _48b8729e11e7) + _c0e3734cc228 + _ce68daa16a4d.slice(_675ae4468a17);
            const _61f1f1f5d103 = _48b8729e11e7 + String(_c0e3734cc228).length;
            return _baa03a75fd8e.setSelectionRange(_61f1f1f5d103, _61f1f1f5d103), void _baa03a75fd8e.dispatchEvent(new Event("\x69\x6e\x70\x75\x74", {
              bubbles: !0
            }));
          }
          document.execCommand?.("\x69\x6e\x73\x65\x72\x74\x54\x65\x78\x74", !1, _c0e3734cc228);
        } catch {}
      }, _0x87f761_3 = async _baa03a75fd8e => {
        try {
          await (navigator.clipboard?.writeText(String(_baa03a75fd8e || "")));
        } catch {
          try {
            document.execCommand?.("\x63\x6f\x70\x79");
          } catch {}
        }
      }, _baa03a75fd8e = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _c0e3734cc228 = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), _0x87f761_6 = _48b8729e11e7 => {
        try {
          _baa03a75fd8e?.postMessage(_48b8729e11e7, "\x2a");
        } catch {}
        try {
          _c0e3734cc228 && _c0e3734cc228 !== _baa03a75fd8e && _c0e3734cc228.postMessage(_48b8729e11e7, "\x2a");
        } catch {}
        try {
          window.parent?.postMessage(_48b8729e11e7, "\x2a");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_48b8729e11e7, "\x2a");
        } catch {}
      };
      window.addEventListener("\x6b\x65\x79\x64\x6f\x77\x6e", _baa03a75fd8e => {
        const _c0e3734cc228 = String(_baa03a75fd8e.key || "").toLowerCase();
        if (_baa03a75fd8e.altKey && !_baa03a75fd8e.ctrlKey && !_baa03a75fd8e.metaKey && 2 !== _baa03a75fd8e.location && "\x61\x6c\x74" === _c0e3734cc228) return _baa03a75fd8e.preventDefault(), 
        _baa03a75fd8e.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x70\x72\x69\x6d\x65"
        });
        if (_baa03a75fd8e.altKey && !_baa03a75fd8e.ctrlKey && !_baa03a75fd8e.metaKey && 2 !== _baa03a75fd8e.location && _0x87f761_0(_baa03a75fd8e.target) && /^[acxvzy]$/.test(_c0e3734cc228)) {
          if (_baa03a75fd8e.preventDefault(), _baa03a75fd8e.stopPropagation(), "\x61" === _c0e3734cc228) return void (_baa03a75fd8e.target?.select ? _baa03a75fd8e.target.select() : document.execCommand?.("\x73\x65\x6c\x65\x63\x74\x41\x6c\x6c"));
          if ("\x63" === _c0e3734cc228) return void _0x87f761_3(_0x87f761_1(_baa03a75fd8e.target));
          if ("\x78" === _c0e3734cc228) {
            const _c0e3734cc228 = _0x87f761_1(_baa03a75fd8e.target);
            return _0x87f761_3(_c0e3734cc228), void _0x87f761_2(_baa03a75fd8e.target, "");
          }
          if ("\x76" === _c0e3734cc228) return void navigator.clipboard?.readText?.().then(_c0e3734cc228 => _0x87f761_2(_baa03a75fd8e.target, _c0e3734cc228)).catch(() => {
            try {
              document.execCommand?.("\x70\x61\x73\x74\x65");
            } catch {}
          });
          if ("\x7a" === _c0e3734cc228) return void document.execCommand?.("\x75\x6e\x64\x6f");
          if ("\x79" === _c0e3734cc228) return void document.execCommand?.("\x72\x65\x64\x6f");
        }
        return !_baa03a75fd8e.altKey || _baa03a75fd8e.ctrlKey || _baa03a75fd8e.metaKey || 2 === _baa03a75fd8e.location || !/^[1-9]$/.test(_c0e3734cc228) && ![ "\x6c", "\x64", "\x74", "\x77", "\x72", "\x61\x72\x72\x6f\x77\x6c\x65\x66\x74", "\x61\x72\x72\x6f\x77\x72\x69\x67\x68\x74", "\x74\x61\x62" ].includes(_c0e3734cc228) ? void 0 : (_baa03a75fd8e.preventDefault(), 
        _baa03a75fd8e.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x73\x68\x6f\x72\x74\x63\x75\x74",
          key: _c0e3734cc228,
          code: _baa03a75fd8e.code || "",
          location: _baa03a75fd8e.location || 0,
          shiftKey: !!_baa03a75fd8e.shiftKey
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
  }, _0x87f761_2 = _baa03a75fd8e => {
    if (!_baa03a75fd8e) return !1;
    try {
      return _baa03a75fd8e.document.open(), _baa03a75fd8e.document.write("\x3c\x21\x64\x6f\x63\x74\x79\x70\x65\x20\x68\x74\x6d\x6c\x3e\x3c\x68\x74\x6d\x6c\x3e\x3c\x68\x65\x61\x64\x3e\x3c\x6d\x65\x74\x61\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x22\x75\x74\x66\x2d\x38\x22\x3e\x3c\x6d\x65\x74\x61\x20\x6e\x61\x6d\x65\x3d\x22\x76\x69\x65\x77\x70\x6f\x72\x74\x22\x20\x63\x6f\x6e\x74\x65\x6e\x74\x3d\x22\x77\x69\x64\x74\x68\x3d\x64\x65\x76\x69\x63\x65\x2d\x77\x69\x64\x74\x68\x2c\x69\x6e\x69\x74\x69\x61\x6c\x2d\x73\x63\x61\x6c\x65\x3d\x31\x22\x3e\x3c\x74\x69\x74\x6c\x65\x3e\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61\x3c\x2f\x74\x69\x74\x6c\x65\x3e\x3c\x73\x74\x79\x6c\x65\x3e\x68\x74\x6d\x6c\x2c\x62\x6f\x64\x79\x7b\x6d\x61\x72\x67\x69\x6e\x3a\x30\x3b\x77\x69\x64\x74\x68\x3a\x31\x30\x30\x25\x3b\x68\x65\x69\x67\x68\x74\x3a\x31\x30\x30\x25\x3b\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x3a\x23\x66\x66\x66\x3b\x63\x6f\x6c\x6f\x72\x3a\x23\x31\x31\x31\x3b\x66\x6f\x6e\x74\x3a\x32\x38\x70\x78\x20\x52\x61\x6c\x65\x77\x61\x79\x2c\x41\x72\x69\x61\x6c\x2c\x73\x61\x6e\x73\x2d\x73\x65\x72\x69\x66\x7d\x62\x6f\x64\x79\x7b\x64\x69\x73\x70\x6c\x61\x79\x3a\x67\x72\x69\x64\x3b\x70\x6c\x61\x63\x65\x2d\x69\x74\x65\x6d\x73\x3a\x63\x65\x6e\x74\x65\x72\x3b\x74\x65\x78\x74\x2d\x61\x6c\x69\x67\x6e\x3a\x63\x65\x6e\x74\x65\x72\x7d\x6d\x61\x69\x6e\x7b\x70\x61\x64\x64\x69\x6e\x67\x3a\x32\x34\x70\x78\x7d\x3c\x2f\x73\x74\x79\x6c\x65\x3e\x3c\x2f\x68\x65\x61\x64\x3e\x3c\x62\x6f\x64\x79\x3e\x3c\x6d\x61\x69\x6e\x3e\x61\x72\x65\x20\x79\x6f\x75\x20\x74\x72\x79\x69\x6e\x67\x20\x74\x6f\x20\x68\x61\x63\x6b\x20\x6d\x65\x20\x73\x63\x61\x6d\x6d\x61\x3f\x3f\x3f\x3c\x2f\x6d\x61\x69\x6e\x3e\x3c\x2f\x62\x6f\x64\x79\x3e\x3c\x2f\x68\x74\x6d\x6c\x3e"), 
      _baa03a75fd8e.document.close(), _baa03a75fd8e.focus?.(), !0;
    } catch {
      return !1;
    }
  }, _0x87f761_3 = () => {
    const _baa03a75fd8e = null;
    return {
      closed: !1,
      focus() {
        try {
          _baa03a75fd8e?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _baa03a75fd8e?.blur?.();
        } catch {}
      },
      close() {
        try {
          _baa03a75fd8e?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return _0x87f761_2(_baa03a75fd8e), this;
        },
        write() {
          _0x87f761_2(_baa03a75fd8e);
        },
        writeln() {
          _0x87f761_2(_baa03a75fd8e);
        },
        close() {
          _0x87f761_2(_baa03a75fd8e);
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
          _0x87f761_2(_baa03a75fd8e);
        },
        toString: () => "\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61"
      }
    };
  }, _0x87f761_4 = _baa03a75fd8e => {
    const _c0e3734cc228 = String(_baa03a75fd8e || "").trim();
    if (/^(?:blob|data):/i.test(_c0e3734cc228)) return !1;
    const _48b8729e11e7 = _c0e3734cc228.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_48b8729e11e7);
  }, _0x87f761_5 = (_baa03a75fd8e, _c0e3734cc228 = "") => {
    const _48b8729e11e7 = String(_baa03a75fd8e || "").trim();
    if (!_48b8729e11e7 || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "\x6e\x79\x78\x3a\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x2d\x72\x65\x71\x75\x65\x73\x74",
        url: _48b8729e11e7,
        filename: String(_c0e3734cc228 || ""),
        sourceUrl: String(location.href || "")
      }, "\x2a"), !0;
    } catch {
      return !1;
    }
  };
  let _0x87f761_6 = (..._c0e3734cc228) => _0x87f761_4(_c0e3734cc228[0]) && _0x87f761_5(_c0e3734cc228[0]) ? null : !_0x87f761_1() && _baa03a75fd8e ? _baa03a75fd8e(..._c0e3734cc228) : _0x87f761_3();
  try {
    "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _baa03a75fd8e && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof \u{50}\u{72}\u{6f}\u{78}\u{79} && (_0x87f761_6 = new \u{50}\u{72}\u{6f}\u{78}\u{79}(_baa03a75fd8e, {
      apply: (_baa03a75fd8e, _c0e3734cc228, _48b8729e11e7) => _0x87f761_4(_48b8729e11e7[0]) && _0x87f761_5(_48b8729e11e7[0]) ? null : _0x87f761_1() ? _0x87f761_3() : Reflect.apply(_baa03a75fd8e, _c0e3734cc228, _48b8729e11e7),
      construct(_baa03a75fd8e, _c0e3734cc228, _48b8729e11e7) {
        if (!_0x87f761_1()) try {
          return Reflect.construct(_baa03a75fd8e, _c0e3734cc228, _48b8729e11e7);
        } catch {
          return Reflect.apply(_baa03a75fd8e, window, _c0e3734cc228);
        }
        return _0x87f761_3();
      },
      get: (_baa03a75fd8e, _c0e3734cc228, _48b8729e11e7) => "\x5f\x5f\x6e\x79\x78\x50\x6f\x70\x75\x70\x47\x75\x61\x72\x64" === _c0e3734cc228 || ("\x74\x6f\x53\x74\x72\x69\x6e\x67" === _c0e3734cc228 ? () => "\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x6f\x70\x65\x6e\x28\x29\x20\x7b\x20\x5b\x6e\x61\x74\x69\x76\x65\x20\x63\x6f\x64\x65\x5d\x20\x7d" : Reflect.get(_baa03a75fd8e, _c0e3734cc228, _48b8729e11e7))
    }));
  } catch {}
  const _0x87f761_7 = _baa03a75fd8e => {
    const _c0e3734cc228 = String(_baa03a75fd8e || "").toLowerCase();
    return _c0e3734cc228 && ![ "\x5f\x73\x65\x6c\x66", "\x5f\x70\x61\x72\x65\x6e\x74", "\x5f\x74\x6f\x70" ].includes(_c0e3734cc228);
  }, _0x87f761_8 = _baa03a75fd8e => !!_baa03a75fd8e && (!!_baa03a75fd8e.hasAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || _0x87f761_4(_baa03a75fd8e.href || _baa03a75fd8e.getAttribute("\x68\x72\x65\x66") || ""));
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
    const _baa03a75fd8e = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!_0x87f761_8(this) || !_0x87f761_5(this.href || this.getAttribute("\x68\x72\x65\x66"), this.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "")) {
        if (!_0x87f761_1() || !_0x87f761_7(this.target)) return _baa03a75fd8e.call(this);
        _0x87f761_3();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("\x63\x6c\x69\x63\x6b", _baa03a75fd8e => {
    const _c0e3734cc228 = _baa03a75fd8e.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_c0e3734cc228) return _0x87f761_8(_c0e3734cc228) && _0x87f761_5(_c0e3734cc228.href || _c0e3734cc228.getAttribute("\x68\x72\x65\x66"), _c0e3734cc228.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_baa03a75fd8e.preventDefault(), 
    void _baa03a75fd8e.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_c0e3734cc228.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_baa03a75fd8e.preventDefault(), 
    _baa03a75fd8e.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x61\x75\x78\x63\x6c\x69\x63\x6b", _baa03a75fd8e => {
    const _c0e3734cc228 = _baa03a75fd8e.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_c0e3734cc228) return _0x87f761_8(_c0e3734cc228) && _0x87f761_5(_c0e3734cc228.href || _c0e3734cc228.getAttribute("\x68\x72\x65\x66"), _c0e3734cc228.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_baa03a75fd8e.preventDefault(), 
    void _baa03a75fd8e.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_c0e3734cc228.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_baa03a75fd8e.preventDefault(), 
    _baa03a75fd8e.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x73\x75\x62\x6d\x69\x74", _baa03a75fd8e => {
    if (!_0x87f761_1()) return;
    const _c0e3734cc228 = _baa03a75fd8e.target;
    _c0e3734cc228 && "\x46\x4f\x52\x4d" === String(_c0e3734cc228.tagName || "").toUpperCase() && _0x87f761_7(_c0e3734cc228.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_baa03a75fd8e.preventDefault(), 
    _baa03a75fd8e.stopImmediatePropagation(), _0x87f761_3());
  }, !0));
  const _0x87f761_9 = _baa03a75fd8e => {
    const _c0e3734cc228 = window[_baa03a75fd8e];
    if ("\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _c0e3734cc228 && !_c0e3734cc228.__nyxWrapped) try {
      Object.setPrototypeOf(_0x87f761_2, _c0e3734cc228), _0x87f761_2.prototype = _c0e3734cc228.prototype, 
      Object.defineProperty(_0x87f761_2, "\x5f\x5f\x6e\x79\x78\x57\x72\x61\x70\x70\x65\x64", {
        value: !0
      }), window[_baa03a75fd8e] = _0x87f761_2;
    } catch {}
    function _0x87f761_2(_baa03a75fd8e, _48b8729e11e7, _675ae4468a17) {
      let _ce68daa16a4d = Number(_baa03a75fd8e), _61f1f1f5d103 = Number(_48b8729e11e7);
      return (!Number.isFinite(_ce68daa16a4d) || _ce68daa16a4d < 0) && (_ce68daa16a4d = 0), 
      (!Number.isFinite(_61f1f1f5d103) || _61f1f1f5d103 <= _ce68daa16a4d) && (_61f1f1f5d103 = _ce68daa16a4d + .001), 
      Reflect.construct(_c0e3734cc228, [ _ce68daa16a4d, _61f1f1f5d103, null == _675ae4468a17 ? "" : String(_675ae4468a17) ], new.target || _0x87f761_2);
    }
  };
  _0x87f761_9("\x56\x54\x54\x43\x75\x65"), _0x87f761_9("\x54\x65\x78\x74\x54\x72\x61\x63\x6b\x43\x75\x65");
})();
