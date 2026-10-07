(() => {
  if ("\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" == typeof window || window.__nyxStudyJetGuards) return;
  window.__nyxStudyJetGuards = !0;
  const _57d69baed7a0 = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "\x74\x72\x75\x73\x74\x65\x64\x54\x79\x70\x65\x73", {
      configurable: !0,
      value: {
        createPolicy: (_57d69baed7a0, _ee1328a81602 = {}) => ({
          createHTML: _57d69baed7a0 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _ee1328a81602.createHTML ? _ee1328a81602.createHTML(_57d69baed7a0) : _57d69baed7a0,
          createScript: _57d69baed7a0 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _ee1328a81602.createScript ? _ee1328a81602.createScript(_57d69baed7a0) : _57d69baed7a0,
          createScriptURL: _57d69baed7a0 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _ee1328a81602.createScriptURL ? _ee1328a81602.createScriptURL(_57d69baed7a0) : _57d69baed7a0
        })
      }
    });
  } catch {}
  try {
    const _57d69baed7a0 = Object.getOwnPropertyDescriptor(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74"), _ee1328a81602 = document.createElement("\x73\x63\x72\x69\x70\x74");
    _ee1328a81602.setAttribute("\x6e\x6f\x6e\x63\x65", ""), Object.defineProperty(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74", {
      configurable: !0,
      get() {
        let _800ebfcb6df9 = null;
        try {
          _800ebfcb6df9 = _57d69baed7a0?.get?.call(this) || null;
        } catch {}
        return _800ebfcb6df9 || this.querySelector?.("\x73\x63\x72\x69\x70\x74\x5b\x73\x72\x63\x5d\x2c\x73\x63\x72\x69\x70\x74") || _ee1328a81602;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const _0x87f761_0 = _57d69baed7a0 => !(!_57d69baed7a0 || !_57d69baed7a0.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_57d69baed7a0.tagName || "")), _0x87f761_1 = _57d69baed7a0 => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_57d69baed7a0?.tagName || "") ? String(_57d69baed7a0.value || "").slice(_57d69baed7a0.selectionStart || 0, _57d69baed7a0.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, _0x87f761_2 = (_57d69baed7a0, _ee1328a81602) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_57d69baed7a0?.tagName || "")) {
            const _800ebfcb6df9 = _57d69baed7a0.selectionStart || 0, _3ba8e603c731 = _57d69baed7a0.selectionEnd || 0, _c9b07e379198 = String(_57d69baed7a0.value || "");
            _57d69baed7a0.value = _c9b07e379198.slice(0, _800ebfcb6df9) + _ee1328a81602 + _c9b07e379198.slice(_3ba8e603c731);
            const _b18810576743 = _800ebfcb6df9 + String(_ee1328a81602).length;
            return _57d69baed7a0.setSelectionRange(_b18810576743, _b18810576743), void _57d69baed7a0.dispatchEvent(new Event("\x69\x6e\x70\x75\x74", {
              bubbles: !0
            }));
          }
          document.execCommand?.("\x69\x6e\x73\x65\x72\x74\x54\x65\x78\x74", !1, _ee1328a81602);
        } catch {}
      }, _0x87f761_3 = async _57d69baed7a0 => {
        try {
          await (navigator.clipboard?.writeText(String(_57d69baed7a0 || "")));
        } catch {
          try {
            document.execCommand?.("\x63\x6f\x70\x79");
          } catch {}
        }
      }, _57d69baed7a0 = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _ee1328a81602 = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), _0x87f761_6 = _800ebfcb6df9 => {
        try {
          _57d69baed7a0?.postMessage(_800ebfcb6df9, "\x2a");
        } catch {}
        try {
          _ee1328a81602 && _ee1328a81602 !== _57d69baed7a0 && _ee1328a81602.postMessage(_800ebfcb6df9, "\x2a");
        } catch {}
        try {
          window.parent?.postMessage(_800ebfcb6df9, "\x2a");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_800ebfcb6df9, "\x2a");
        } catch {}
      };
      window.addEventListener("\x6b\x65\x79\x64\x6f\x77\x6e", _57d69baed7a0 => {
        const _ee1328a81602 = String(_57d69baed7a0.key || "").toLowerCase();
        if (_57d69baed7a0.altKey && !_57d69baed7a0.ctrlKey && !_57d69baed7a0.metaKey && 2 !== _57d69baed7a0.location && "\x61\x6c\x74" === _ee1328a81602) return _57d69baed7a0.preventDefault(), 
        _57d69baed7a0.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x70\x72\x69\x6d\x65"
        });
        if (_57d69baed7a0.altKey && !_57d69baed7a0.ctrlKey && !_57d69baed7a0.metaKey && 2 !== _57d69baed7a0.location && _0x87f761_0(_57d69baed7a0.target) && /^[acxvzy]$/.test(_ee1328a81602)) {
          if (_57d69baed7a0.preventDefault(), _57d69baed7a0.stopPropagation(), "\x61" === _ee1328a81602) return void (_57d69baed7a0.target?.select ? _57d69baed7a0.target.select() : document.execCommand?.("\x73\x65\x6c\x65\x63\x74\x41\x6c\x6c"));
          if ("\x63" === _ee1328a81602) return void _0x87f761_3(_0x87f761_1(_57d69baed7a0.target));
          if ("\x78" === _ee1328a81602) {
            const _ee1328a81602 = _0x87f761_1(_57d69baed7a0.target);
            return _0x87f761_3(_ee1328a81602), void _0x87f761_2(_57d69baed7a0.target, "");
          }
          if ("\x76" === _ee1328a81602) return void navigator.clipboard?.readText?.().then(_ee1328a81602 => _0x87f761_2(_57d69baed7a0.target, _ee1328a81602)).catch(() => {
            try {
              document.execCommand?.("\x70\x61\x73\x74\x65");
            } catch {}
          });
          if ("\x7a" === _ee1328a81602) return void document.execCommand?.("\x75\x6e\x64\x6f");
          if ("\x79" === _ee1328a81602) return void document.execCommand?.("\x72\x65\x64\x6f");
        }
        return !_57d69baed7a0.altKey || _57d69baed7a0.ctrlKey || _57d69baed7a0.metaKey || 2 === _57d69baed7a0.location || !/^[1-9]$/.test(_ee1328a81602) && ![ "\x6c", "\x64", "\x74", "\x77", "\x72", "\x61\x72\x72\x6f\x77\x6c\x65\x66\x74", "\x61\x72\x72\x6f\x77\x72\x69\x67\x68\x74", "\x74\x61\x62" ].includes(_ee1328a81602) ? void 0 : (_57d69baed7a0.preventDefault(), 
        _57d69baed7a0.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x73\x68\x6f\x72\x74\x63\x75\x74",
          key: _ee1328a81602,
          code: _57d69baed7a0.code || "",
          location: _57d69baed7a0.location || 0,
          shiftKey: !!_57d69baed7a0.shiftKey
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
  }, _0x87f761_2 = _57d69baed7a0 => {
    if (!_57d69baed7a0) return !1;
    try {
      return _57d69baed7a0.document.open(), _57d69baed7a0.document.write("\x3c\x21\x64\x6f\x63\x74\x79\x70\x65\x20\x68\x74\x6d\x6c\x3e\x3c\x68\x74\x6d\x6c\x3e\x3c\x68\x65\x61\x64\x3e\x3c\x6d\x65\x74\x61\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x22\x75\x74\x66\x2d\x38\x22\x3e\x3c\x6d\x65\x74\x61\x20\x6e\x61\x6d\x65\x3d\x22\x76\x69\x65\x77\x70\x6f\x72\x74\x22\x20\x63\x6f\x6e\x74\x65\x6e\x74\x3d\x22\x77\x69\x64\x74\x68\x3d\x64\x65\x76\x69\x63\x65\x2d\x77\x69\x64\x74\x68\x2c\x69\x6e\x69\x74\x69\x61\x6c\x2d\x73\x63\x61\x6c\x65\x3d\x31\x22\x3e\x3c\x74\x69\x74\x6c\x65\x3e\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61\x3c\x2f\x74\x69\x74\x6c\x65\x3e\x3c\x73\x74\x79\x6c\x65\x3e\x68\x74\x6d\x6c\x2c\x62\x6f\x64\x79\x7b\x6d\x61\x72\x67\x69\x6e\x3a\x30\x3b\x77\x69\x64\x74\x68\x3a\x31\x30\x30\x25\x3b\x68\x65\x69\x67\x68\x74\x3a\x31\x30\x30\x25\x3b\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x3a\x23\x66\x66\x66\x3b\x63\x6f\x6c\x6f\x72\x3a\x23\x31\x31\x31\x3b\x66\x6f\x6e\x74\x3a\x32\x38\x70\x78\x20\x52\x61\x6c\x65\x77\x61\x79\x2c\x41\x72\x69\x61\x6c\x2c\x73\x61\x6e\x73\x2d\x73\x65\x72\x69\x66\x7d\x62\x6f\x64\x79\x7b\x64\x69\x73\x70\x6c\x61\x79\x3a\x67\x72\x69\x64\x3b\x70\x6c\x61\x63\x65\x2d\x69\x74\x65\x6d\x73\x3a\x63\x65\x6e\x74\x65\x72\x3b\x74\x65\x78\x74\x2d\x61\x6c\x69\x67\x6e\x3a\x63\x65\x6e\x74\x65\x72\x7d\x6d\x61\x69\x6e\x7b\x70\x61\x64\x64\x69\x6e\x67\x3a\x32\x34\x70\x78\x7d\x3c\x2f\x73\x74\x79\x6c\x65\x3e\x3c\x2f\x68\x65\x61\x64\x3e\x3c\x62\x6f\x64\x79\x3e\x3c\x6d\x61\x69\x6e\x3e\x61\x72\x65\x20\x79\x6f\x75\x20\x74\x72\x79\x69\x6e\x67\x20\x74\x6f\x20\x68\x61\x63\x6b\x20\x6d\x65\x20\x73\x63\x61\x6d\x6d\x61\x3f\x3f\x3f\x3c\x2f\x6d\x61\x69\x6e\x3e\x3c\x2f\x62\x6f\x64\x79\x3e\x3c\x2f\x68\x74\x6d\x6c\x3e"), 
      _57d69baed7a0.document.close(), _57d69baed7a0.focus?.(), !0;
    } catch {
      return !1;
    }
  }, _0x87f761_3 = () => {
    const _57d69baed7a0 = null;
    return {
      closed: !1,
      focus() {
        try {
          _57d69baed7a0?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _57d69baed7a0?.blur?.();
        } catch {}
      },
      close() {
        try {
          _57d69baed7a0?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return _0x87f761_2(_57d69baed7a0), this;
        },
        write() {
          _0x87f761_2(_57d69baed7a0);
        },
        writeln() {
          _0x87f761_2(_57d69baed7a0);
        },
        close() {
          _0x87f761_2(_57d69baed7a0);
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
          _0x87f761_2(_57d69baed7a0);
        },
        toString: () => "\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61"
      }
    };
  }, _0x87f761_4 = _57d69baed7a0 => {
    const _ee1328a81602 = String(_57d69baed7a0 || "").trim();
    if (/^(?:blob|data):/i.test(_ee1328a81602)) return !1;
    const _800ebfcb6df9 = _ee1328a81602.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_800ebfcb6df9);
  }, _0x87f761_5 = (_57d69baed7a0, _ee1328a81602 = "") => {
    const _800ebfcb6df9 = String(_57d69baed7a0 || "").trim();
    if (!_800ebfcb6df9 || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "\x6e\x79\x78\x3a\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x2d\x72\x65\x71\x75\x65\x73\x74",
        url: _800ebfcb6df9,
        filename: String(_ee1328a81602 || ""),
        sourceUrl: String(location.href || "")
      }, "\x2a"), !0;
    } catch {
      return !1;
    }
  };
  let _0x87f761_6 = (..._ee1328a81602) => _0x87f761_4(_ee1328a81602[0]) && _0x87f761_5(_ee1328a81602[0]) ? null : !_0x87f761_1() && _57d69baed7a0 ? _57d69baed7a0(..._ee1328a81602) : _0x87f761_3();
  try {
    "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _57d69baed7a0 && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof \u{50}\u{72}\u{6f}\u{78}\u{79} && (_0x87f761_6 = new \u{50}\u{72}\u{6f}\u{78}\u{79}(_57d69baed7a0, {
      apply: (_57d69baed7a0, _ee1328a81602, _800ebfcb6df9) => _0x87f761_4(_800ebfcb6df9[0]) && _0x87f761_5(_800ebfcb6df9[0]) ? null : _0x87f761_1() ? _0x87f761_3() : Reflect.apply(_57d69baed7a0, _ee1328a81602, _800ebfcb6df9),
      construct(_57d69baed7a0, _ee1328a81602, _800ebfcb6df9) {
        if (!_0x87f761_1()) try {
          return Reflect.construct(_57d69baed7a0, _ee1328a81602, _800ebfcb6df9);
        } catch {
          return Reflect.apply(_57d69baed7a0, window, _ee1328a81602);
        }
        return _0x87f761_3();
      },
      get: (_57d69baed7a0, _ee1328a81602, _800ebfcb6df9) => "\x5f\x5f\x6e\x79\x78\x50\x6f\x70\x75\x70\x47\x75\x61\x72\x64" === _ee1328a81602 || ("\x74\x6f\x53\x74\x72\x69\x6e\x67" === _ee1328a81602 ? () => "\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x6f\x70\x65\x6e\x28\x29\x20\x7b\x20\x5b\x6e\x61\x74\x69\x76\x65\x20\x63\x6f\x64\x65\x5d\x20\x7d" : Reflect.get(_57d69baed7a0, _ee1328a81602, _800ebfcb6df9))
    }));
  } catch {}
  const _0x87f761_7 = _57d69baed7a0 => {
    const _ee1328a81602 = String(_57d69baed7a0 || "").toLowerCase();
    return _ee1328a81602 && ![ "\x5f\x73\x65\x6c\x66", "\x5f\x70\x61\x72\x65\x6e\x74", "\x5f\x74\x6f\x70" ].includes(_ee1328a81602);
  }, _0x87f761_8 = _57d69baed7a0 => !!_57d69baed7a0 && (!!_57d69baed7a0.hasAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || _0x87f761_4(_57d69baed7a0.href || _57d69baed7a0.getAttribute("\x68\x72\x65\x66") || ""));
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
    const _57d69baed7a0 = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!_0x87f761_8(this) || !_0x87f761_5(this.href || this.getAttribute("\x68\x72\x65\x66"), this.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "")) {
        if (!_0x87f761_1() || !_0x87f761_7(this.target)) return _57d69baed7a0.call(this);
        _0x87f761_3();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("\x63\x6c\x69\x63\x6b", _57d69baed7a0 => {
    const _ee1328a81602 = _57d69baed7a0.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_ee1328a81602) return _0x87f761_8(_ee1328a81602) && _0x87f761_5(_ee1328a81602.href || _ee1328a81602.getAttribute("\x68\x72\x65\x66"), _ee1328a81602.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_57d69baed7a0.preventDefault(), 
    void _57d69baed7a0.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_ee1328a81602.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_57d69baed7a0.preventDefault(), 
    _57d69baed7a0.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x61\x75\x78\x63\x6c\x69\x63\x6b", _57d69baed7a0 => {
    const _ee1328a81602 = _57d69baed7a0.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_ee1328a81602) return _0x87f761_8(_ee1328a81602) && _0x87f761_5(_ee1328a81602.href || _ee1328a81602.getAttribute("\x68\x72\x65\x66"), _ee1328a81602.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_57d69baed7a0.preventDefault(), 
    void _57d69baed7a0.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_ee1328a81602.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_57d69baed7a0.preventDefault(), 
    _57d69baed7a0.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x73\x75\x62\x6d\x69\x74", _57d69baed7a0 => {
    if (!_0x87f761_1()) return;
    const _ee1328a81602 = _57d69baed7a0.target;
    _ee1328a81602 && "\x46\x4f\x52\x4d" === String(_ee1328a81602.tagName || "").toUpperCase() && _0x87f761_7(_ee1328a81602.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_57d69baed7a0.preventDefault(), 
    _57d69baed7a0.stopImmediatePropagation(), _0x87f761_3());
  }, !0));
  const _0x87f761_9 = _57d69baed7a0 => {
    const _ee1328a81602 = window[_57d69baed7a0];
    if ("\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _ee1328a81602 && !_ee1328a81602.__nyxWrapped) try {
      Object.setPrototypeOf(_0x87f761_2, _ee1328a81602), _0x87f761_2.prototype = _ee1328a81602.prototype, 
      Object.defineProperty(_0x87f761_2, "\x5f\x5f\x6e\x79\x78\x57\x72\x61\x70\x70\x65\x64", {
        value: !0
      }), window[_57d69baed7a0] = _0x87f761_2;
    } catch {}
    function _0x87f761_2(_57d69baed7a0, _800ebfcb6df9, _3ba8e603c731) {
      let _c9b07e379198 = Number(_57d69baed7a0), _b18810576743 = Number(_800ebfcb6df9);
      return (!Number.isFinite(_c9b07e379198) || _c9b07e379198 < 0) && (_c9b07e379198 = 0), 
      (!Number.isFinite(_b18810576743) || _b18810576743 <= _c9b07e379198) && (_b18810576743 = _c9b07e379198 + .001), 
      Reflect.construct(_ee1328a81602, [ _c9b07e379198, _b18810576743, null == _3ba8e603c731 ? "" : String(_3ba8e603c731) ], new.target || _0x87f761_2);
    }
  };
  _0x87f761_9("\x56\x54\x54\x43\x75\x65"), _0x87f761_9("\x54\x65\x78\x74\x54\x72\x61\x63\x6b\x43\x75\x65");
})();
