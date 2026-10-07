(() => {
  if ("\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" == typeof window || window.\u{5f}\u{5f}\u{6e}\u{79}\u{78}\u{53}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74}\u{47}\u{75}\u{61}\u{72}\u{64}\u{73}) return;
  window.\u{5f}\u{5f}\u{6e}\u{79}\u{78}\u{53}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74}\u{47}\u{75}\u{61}\u{72}\u{64}\u{73} = !0;
  const _3cdfd1e1b2a2 = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "\x74\x72\x75\x73\x74\x65\x64\x54\x79\x70\x65\x73", {
      configurable: !0,
      value: {
        createPolicy: (_3cdfd1e1b2a2, _8b5ecde52089 = {}) => ({
          createHTML: _3cdfd1e1b2a2 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _8b5ecde52089.createHTML ? _8b5ecde52089.createHTML(_3cdfd1e1b2a2) : _3cdfd1e1b2a2,
          createScript: _3cdfd1e1b2a2 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _8b5ecde52089.createScript ? _8b5ecde52089.createScript(_3cdfd1e1b2a2) : _3cdfd1e1b2a2,
          createScriptURL: _3cdfd1e1b2a2 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _8b5ecde52089.createScriptURL ? _8b5ecde52089.createScriptURL(_3cdfd1e1b2a2) : _3cdfd1e1b2a2
        })
      }
    });
  } catch {}
  try {
    const _3cdfd1e1b2a2 = Object.getOwnPropertyDescriptor(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74"), _8b5ecde52089 = document.createElement("\x73\x63\x72\x69\x70\x74");
    _8b5ecde52089.setAttribute("\x6e\x6f\x6e\x63\x65", ""), Object.defineProperty(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74", {
      configurable: !0,
      get() {
        let _3214f83e50a3 = null;
        try {
          _3214f83e50a3 = _3cdfd1e1b2a2?.get?.call(this) || null;
        } catch {}
        return _3214f83e50a3 || this.querySelector?.("\x73\x63\x72\x69\x70\x74\x5b\x73\x72\x63\x5d\x2c\x73\x63\x72\x69\x70\x74") || _8b5ecde52089;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const _0x87f761_0 = _3cdfd1e1b2a2 => !(!_3cdfd1e1b2a2 || !_3cdfd1e1b2a2.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_3cdfd1e1b2a2.tagName || "")), _0x87f761_1 = _3cdfd1e1b2a2 => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_3cdfd1e1b2a2?.tagName || "") ? String(_3cdfd1e1b2a2.value || "").slice(_3cdfd1e1b2a2.selectionStart || 0, _3cdfd1e1b2a2.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, _0x87f761_2 = (_3cdfd1e1b2a2, _8b5ecde52089) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_3cdfd1e1b2a2?.tagName || "")) {
            const _3214f83e50a3 = _3cdfd1e1b2a2.selectionStart || 0, _b4db05b3b918 = _3cdfd1e1b2a2.selectionEnd || 0, _eb1ed1396422 = String(_3cdfd1e1b2a2.value || "");
            _3cdfd1e1b2a2.value = _eb1ed1396422.slice(0, _3214f83e50a3) + _8b5ecde52089 + _eb1ed1396422.slice(_b4db05b3b918);
            const _a4e1fd40dd95 = _3214f83e50a3 + String(_8b5ecde52089).length;
            return _3cdfd1e1b2a2.setSelectionRange(_a4e1fd40dd95, _a4e1fd40dd95), void _3cdfd1e1b2a2.dispatchEvent(new Event("\x69\x6e\x70\x75\x74", {
              bubbles: !0
            }));
          }
          document.execCommand?.("\x69\x6e\x73\x65\x72\x74\x54\x65\x78\x74", !1, _8b5ecde52089);
        } catch {}
      }, _0x87f761_3 = async _3cdfd1e1b2a2 => {
        try {
          await (navigator.clipboard?.writeText(String(_3cdfd1e1b2a2 || "")));
        } catch {
          try {
            document.execCommand?.("\x63\x6f\x70\x79");
          } catch {}
        }
      }, _3cdfd1e1b2a2 = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _8b5ecde52089 = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), _0x87f761_6 = _3214f83e50a3 => {
        try {
          _3cdfd1e1b2a2?.postMessage(_3214f83e50a3, "\x2a");
        } catch {}
        try {
          _8b5ecde52089 && _8b5ecde52089 !== _3cdfd1e1b2a2 && _8b5ecde52089.postMessage(_3214f83e50a3, "\x2a");
        } catch {}
        try {
          window.parent?.postMessage(_3214f83e50a3, "\x2a");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_3214f83e50a3, "\x2a");
        } catch {}
      };
      window.addEventListener("\x6b\x65\x79\x64\x6f\x77\x6e", _3cdfd1e1b2a2 => {
        const _8b5ecde52089 = String(_3cdfd1e1b2a2.key || "").toLowerCase();
        if (_3cdfd1e1b2a2.altKey && !_3cdfd1e1b2a2.ctrlKey && !_3cdfd1e1b2a2.metaKey && 2 !== _3cdfd1e1b2a2.location && "\x61\x6c\x74" === _8b5ecde52089) return _3cdfd1e1b2a2.preventDefault(), 
        _3cdfd1e1b2a2.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x70\x72\x69\x6d\x65"
        });
        if (_3cdfd1e1b2a2.altKey && !_3cdfd1e1b2a2.ctrlKey && !_3cdfd1e1b2a2.metaKey && 2 !== _3cdfd1e1b2a2.location && _0x87f761_0(_3cdfd1e1b2a2.target) && /^[acxvzy]$/.test(_8b5ecde52089)) {
          if (_3cdfd1e1b2a2.preventDefault(), _3cdfd1e1b2a2.stopPropagation(), "\x61" === _8b5ecde52089) return void (_3cdfd1e1b2a2.target?.select ? _3cdfd1e1b2a2.target.select() : document.execCommand?.("\x73\x65\x6c\x65\x63\x74\x41\x6c\x6c"));
          if ("\x63" === _8b5ecde52089) return void _0x87f761_3(_0x87f761_1(_3cdfd1e1b2a2.target));
          if ("\x78" === _8b5ecde52089) {
            const _8b5ecde52089 = _0x87f761_1(_3cdfd1e1b2a2.target);
            return _0x87f761_3(_8b5ecde52089), void _0x87f761_2(_3cdfd1e1b2a2.target, "");
          }
          if ("\x76" === _8b5ecde52089) return void navigator.clipboard?.readText?.().then(_8b5ecde52089 => _0x87f761_2(_3cdfd1e1b2a2.target, _8b5ecde52089)).catch(() => {
            try {
              document.execCommand?.("\x70\x61\x73\x74\x65");
            } catch {}
          });
          if ("\x7a" === _8b5ecde52089) return void document.execCommand?.("\x75\x6e\x64\x6f");
          if ("\x79" === _8b5ecde52089) return void document.execCommand?.("\x72\x65\x64\x6f");
        }
        return !_3cdfd1e1b2a2.altKey || _3cdfd1e1b2a2.ctrlKey || _3cdfd1e1b2a2.metaKey || 2 === _3cdfd1e1b2a2.location || !/^[1-9]$/.test(_8b5ecde52089) && ![ "\x6c", "\x64", "\x74", "\x77", "\x72", "\x61\x72\x72\x6f\x77\x6c\x65\x66\x74", "\x61\x72\x72\x6f\x77\x72\x69\x67\x68\x74", "\x74\x61\x62" ].includes(_8b5ecde52089) ? void 0 : (_3cdfd1e1b2a2.preventDefault(), 
        _3cdfd1e1b2a2.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x73\x68\x6f\x72\x74\x63\x75\x74",
          key: _8b5ecde52089,
          code: _3cdfd1e1b2a2.code || "",
          location: _3cdfd1e1b2a2.location || 0,
          shiftKey: !!_3cdfd1e1b2a2.shiftKey
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
  }, _0x87f761_2 = _3cdfd1e1b2a2 => {
    if (!_3cdfd1e1b2a2) return !1;
    try {
      return _3cdfd1e1b2a2.document.open(), _3cdfd1e1b2a2.document.write("\x3c\x21\x64\x6f\x63\x74\x79\x70\x65\x20\x68\x74\x6d\x6c\x3e\x3c\x68\x74\x6d\x6c\x3e\x3c\x68\x65\x61\x64\x3e\x3c\x6d\x65\x74\x61\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x22\x75\x74\x66\x2d\x38\x22\x3e\x3c\x6d\x65\x74\x61\x20\x6e\x61\x6d\x65\x3d\x22\x76\x69\x65\x77\x70\x6f\x72\x74\x22\x20\x63\x6f\x6e\x74\x65\x6e\x74\x3d\x22\x77\x69\x64\x74\x68\x3d\x64\x65\x76\x69\x63\x65\x2d\x77\x69\x64\x74\x68\x2c\x69\x6e\x69\x74\x69\x61\x6c\x2d\x73\x63\x61\x6c\x65\x3d\x31\x22\x3e\x3c\x74\x69\x74\x6c\x65\x3e\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61\x3c\x2f\x74\x69\x74\x6c\x65\x3e\x3c\x73\x74\x79\x6c\x65\x3e\x68\x74\x6d\x6c\x2c\x62\x6f\x64\x79\x7b\x6d\x61\x72\x67\x69\x6e\x3a\x30\x3b\x77\x69\x64\x74\x68\x3a\x31\x30\x30\x25\x3b\x68\x65\x69\x67\x68\x74\x3a\x31\x30\x30\x25\x3b\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x3a\x23\x66\x66\x66\x3b\x63\x6f\x6c\x6f\x72\x3a\x23\x31\x31\x31\x3b\x66\x6f\x6e\x74\x3a\x32\x38\x70\x78\x20\x52\x61\x6c\x65\x77\x61\x79\x2c\x41\x72\x69\x61\x6c\x2c\x73\x61\x6e\x73\x2d\x73\x65\x72\x69\x66\x7d\x62\x6f\x64\x79\x7b\x64\x69\x73\x70\x6c\x61\x79\x3a\x67\x72\x69\x64\x3b\x70\x6c\x61\x63\x65\x2d\x69\x74\x65\x6d\x73\x3a\x63\x65\x6e\x74\x65\x72\x3b\x74\x65\x78\x74\x2d\x61\x6c\x69\x67\x6e\x3a\x63\x65\x6e\x74\x65\x72\x7d\x6d\x61\x69\x6e\x7b\x70\x61\x64\x64\x69\x6e\x67\x3a\x32\x34\x70\x78\x7d\x3c\x2f\x73\x74\x79\x6c\x65\x3e\x3c\x2f\x68\x65\x61\x64\x3e\x3c\x62\x6f\x64\x79\x3e\x3c\x6d\x61\x69\x6e\x3e\x61\x72\x65\x20\x79\x6f\x75\x20\x74\x72\x79\x69\x6e\x67\x20\x74\x6f\x20\x68\x61\x63\x6b\x20\x6d\x65\x20\x73\x63\x61\x6d\x6d\x61\x3f\x3f\x3f\x3c\x2f\x6d\x61\x69\x6e\x3e\x3c\x2f\x62\x6f\x64\x79\x3e\x3c\x2f\x68\x74\x6d\x6c\x3e"), 
      _3cdfd1e1b2a2.document.close(), _3cdfd1e1b2a2.focus?.(), !0;
    } catch {
      return !1;
    }
  }, _0x87f761_3 = () => {
    const _3cdfd1e1b2a2 = null;
    return {
      closed: !1,
      focus() {
        try {
          _3cdfd1e1b2a2?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _3cdfd1e1b2a2?.blur?.();
        } catch {}
      },
      close() {
        try {
          _3cdfd1e1b2a2?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return _0x87f761_2(_3cdfd1e1b2a2), this;
        },
        write() {
          _0x87f761_2(_3cdfd1e1b2a2);
        },
        writeln() {
          _0x87f761_2(_3cdfd1e1b2a2);
        },
        close() {
          _0x87f761_2(_3cdfd1e1b2a2);
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
          _0x87f761_2(_3cdfd1e1b2a2);
        },
        toString: () => "\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61"
      }
    };
  }, _0x87f761_4 = _3cdfd1e1b2a2 => {
    const _8b5ecde52089 = String(_3cdfd1e1b2a2 || "").trim();
    if (/^(?:blob|data):/i.test(_8b5ecde52089)) return !1;
    const _3214f83e50a3 = _8b5ecde52089.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_3214f83e50a3);
  }, _0x87f761_5 = (_3cdfd1e1b2a2, _8b5ecde52089 = "") => {
    const _3214f83e50a3 = String(_3cdfd1e1b2a2 || "").trim();
    if (!_3214f83e50a3 || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "\x6e\x79\x78\x3a\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x2d\x72\x65\x71\x75\x65\x73\x74",
        url: _3214f83e50a3,
        filename: String(_8b5ecde52089 || ""),
        sourceUrl: String(location.href || "")
      }, "\x2a"), !0;
    } catch {
      return !1;
    }
  };
  let _0x87f761_6 = (..._8b5ecde52089) => _0x87f761_4(_8b5ecde52089[0]) && _0x87f761_5(_8b5ecde52089[0]) ? null : !_0x87f761_1() && _3cdfd1e1b2a2 ? _3cdfd1e1b2a2(..._8b5ecde52089) : _0x87f761_3();
  try {
    "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _3cdfd1e1b2a2 && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof \u{50}\u{72}\u{6f}\u{78}\u{79} && (_0x87f761_6 = new \u{50}\u{72}\u{6f}\u{78}\u{79}(_3cdfd1e1b2a2, {
      apply: (_3cdfd1e1b2a2, _8b5ecde52089, _3214f83e50a3) => _0x87f761_4(_3214f83e50a3[0]) && _0x87f761_5(_3214f83e50a3[0]) ? null : _0x87f761_1() ? _0x87f761_3() : Reflect.apply(_3cdfd1e1b2a2, _8b5ecde52089, _3214f83e50a3),
      construct(_3cdfd1e1b2a2, _8b5ecde52089, _3214f83e50a3) {
        if (!_0x87f761_1()) try {
          return Reflect.construct(_3cdfd1e1b2a2, _8b5ecde52089, _3214f83e50a3);
        } catch {
          return Reflect.apply(_3cdfd1e1b2a2, window, _8b5ecde52089);
        }
        return _0x87f761_3();
      },
      get: (_3cdfd1e1b2a2, _8b5ecde52089, _3214f83e50a3) => "\x5f\x5f\x6e\x79\x78\x50\x6f\x70\x75\x70\x47\x75\x61\x72\x64" === _8b5ecde52089 || ("\x74\x6f\x53\x74\x72\x69\x6e\x67" === _8b5ecde52089 ? () => "\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x6f\x70\x65\x6e\x28\x29\x20\x7b\x20\x5b\x6e\x61\x74\x69\x76\x65\x20\x63\x6f\x64\x65\x5d\x20\x7d" : Reflect.get(_3cdfd1e1b2a2, _8b5ecde52089, _3214f83e50a3))
    }));
  } catch {}
  const _0x87f761_7 = _3cdfd1e1b2a2 => {
    const _8b5ecde52089 = String(_3cdfd1e1b2a2 || "").toLowerCase();
    return _8b5ecde52089 && ![ "\x5f\x73\x65\x6c\x66", "\x5f\x70\x61\x72\x65\x6e\x74", "\x5f\x74\x6f\x70" ].includes(_8b5ecde52089);
  }, _0x87f761_8 = _3cdfd1e1b2a2 => !!_3cdfd1e1b2a2 && (!!_3cdfd1e1b2a2.hasAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || _0x87f761_4(_3cdfd1e1b2a2.href || _3cdfd1e1b2a2.getAttribute("\x68\x72\x65\x66") || ""));
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
    const _3cdfd1e1b2a2 = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!_0x87f761_8(this) || !_0x87f761_5(this.href || this.getAttribute("\x68\x72\x65\x66"), this.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "")) {
        if (!_0x87f761_1() || !_0x87f761_7(this.target)) return _3cdfd1e1b2a2.call(this);
        _0x87f761_3();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("\x63\x6c\x69\x63\x6b", _3cdfd1e1b2a2 => {
    const _8b5ecde52089 = _3cdfd1e1b2a2.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_8b5ecde52089) return _0x87f761_8(_8b5ecde52089) && _0x87f761_5(_8b5ecde52089.href || _8b5ecde52089.getAttribute("\x68\x72\x65\x66"), _8b5ecde52089.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_3cdfd1e1b2a2.preventDefault(), 
    void _3cdfd1e1b2a2.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_8b5ecde52089.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_3cdfd1e1b2a2.preventDefault(), 
    _3cdfd1e1b2a2.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x61\x75\x78\x63\x6c\x69\x63\x6b", _3cdfd1e1b2a2 => {
    const _8b5ecde52089 = _3cdfd1e1b2a2.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_8b5ecde52089) return _0x87f761_8(_8b5ecde52089) && _0x87f761_5(_8b5ecde52089.href || _8b5ecde52089.getAttribute("\x68\x72\x65\x66"), _8b5ecde52089.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_3cdfd1e1b2a2.preventDefault(), 
    void _3cdfd1e1b2a2.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_8b5ecde52089.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_3cdfd1e1b2a2.preventDefault(), 
    _3cdfd1e1b2a2.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x73\x75\x62\x6d\x69\x74", _3cdfd1e1b2a2 => {
    if (!_0x87f761_1()) return;
    const _8b5ecde52089 = _3cdfd1e1b2a2.target;
    _8b5ecde52089 && "\x46\x4f\x52\x4d" === String(_8b5ecde52089.tagName || "").toUpperCase() && _0x87f761_7(_8b5ecde52089.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_3cdfd1e1b2a2.preventDefault(), 
    _3cdfd1e1b2a2.stopImmediatePropagation(), _0x87f761_3());
  }, !0));
  const _0x87f761_9 = _3cdfd1e1b2a2 => {
    const _8b5ecde52089 = window[_3cdfd1e1b2a2];
    if ("\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _8b5ecde52089 && !_8b5ecde52089.__nyxWrapped) try {
      Object.setPrototypeOf(_0x87f761_2, _8b5ecde52089), _0x87f761_2.prototype = _8b5ecde52089.prototype, 
      Object.defineProperty(_0x87f761_2, "\x5f\x5f\x6e\x79\x78\x57\x72\x61\x70\x70\x65\x64", {
        value: !0
      }), window[_3cdfd1e1b2a2] = _0x87f761_2;
    } catch {}
    function _0x87f761_2(_3cdfd1e1b2a2, _3214f83e50a3, _b4db05b3b918) {
      let _eb1ed1396422 = Number(_3cdfd1e1b2a2), _a4e1fd40dd95 = Number(_3214f83e50a3);
      return (!Number.isFinite(_eb1ed1396422) || _eb1ed1396422 < 0) && (_eb1ed1396422 = 0), 
      (!Number.isFinite(_a4e1fd40dd95) || _a4e1fd40dd95 <= _eb1ed1396422) && (_a4e1fd40dd95 = _eb1ed1396422 + .001), 
      Reflect.construct(_8b5ecde52089, [ _eb1ed1396422, _a4e1fd40dd95, null == _b4db05b3b918 ? "" : String(_b4db05b3b918) ], new.target || _0x87f761_2);
    }
  };
  _0x87f761_9("\x56\x54\x54\x43\x75\x65"), _0x87f761_9("\x54\x65\x78\x74\x54\x72\x61\x63\x6b\x43\x75\x65");
})();
