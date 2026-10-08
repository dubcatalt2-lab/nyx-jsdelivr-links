(() => {
  if ("\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" == typeof window || window.\u{5f}\u{5f}\u{6e}\u{79}\u{78}\u{53}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74}\u{47}\u{75}\u{61}\u{72}\u{64}\u{73}) return;
  window.\u{5f}\u{5f}\u{6e}\u{79}\u{78}\u{53}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74}\u{47}\u{75}\u{61}\u{72}\u{64}\u{73} = !0;
  const _74b366445f8f = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "\x74\x72\x75\x73\x74\x65\x64\x54\x79\x70\x65\x73", {
      configurable: !0,
      value: {
        createPolicy: (_74b366445f8f, _f205cf09814e = {}) => ({
          createHTML: _74b366445f8f => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _f205cf09814e.createHTML ? _f205cf09814e.createHTML(_74b366445f8f) : _74b366445f8f,
          createScript: _74b366445f8f => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _f205cf09814e.createScript ? _f205cf09814e.createScript(_74b366445f8f) : _74b366445f8f,
          createScriptURL: _74b366445f8f => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _f205cf09814e.createScriptURL ? _f205cf09814e.createScriptURL(_74b366445f8f) : _74b366445f8f
        })
      }
    });
  } catch {}
  try {
    const _74b366445f8f = Object.getOwnPropertyDescriptor(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74"), _f205cf09814e = document.createElement("\x73\x63\x72\x69\x70\x74");
    _f205cf09814e.setAttribute("\x6e\x6f\x6e\x63\x65", ""), Object.defineProperty(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74", {
      configurable: !0,
      get() {
        let _abe6c536ba9a = null;
        try {
          _abe6c536ba9a = _74b366445f8f?.get?.call(this) || null;
        } catch {}
        return _abe6c536ba9a || this.querySelector?.("\x73\x63\x72\x69\x70\x74\x5b\x73\x72\x63\x5d\x2c\x73\x63\x72\x69\x70\x74") || _f205cf09814e;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const _0x87f761_0 = _74b366445f8f => !(!_74b366445f8f || !_74b366445f8f.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_74b366445f8f.tagName || "")), _0x87f761_1 = _74b366445f8f => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_74b366445f8f?.tagName || "") ? String(_74b366445f8f.value || "").slice(_74b366445f8f.selectionStart || 0, _74b366445f8f.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, _0x87f761_2 = (_74b366445f8f, _f205cf09814e) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_74b366445f8f?.tagName || "")) {
            const _abe6c536ba9a = _74b366445f8f.selectionStart || 0, _45845ca16c6e = _74b366445f8f.selectionEnd || 0, _5fc0c4d32aaa = String(_74b366445f8f.value || "");
            _74b366445f8f.value = _5fc0c4d32aaa.slice(0, _abe6c536ba9a) + _f205cf09814e + _5fc0c4d32aaa.slice(_45845ca16c6e);
            const _9eef4ba996be = _abe6c536ba9a + String(_f205cf09814e).length;
            return _74b366445f8f.setSelectionRange(_9eef4ba996be, _9eef4ba996be), void _74b366445f8f.dispatchEvent(new Event("\x69\x6e\x70\x75\x74", {
              bubbles: !0
            }));
          }
          document.execCommand?.("\x69\x6e\x73\x65\x72\x74\x54\x65\x78\x74", !1, _f205cf09814e);
        } catch {}
      }, _0x87f761_3 = async _74b366445f8f => {
        try {
          await (navigator.clipboard?.writeText(String(_74b366445f8f || "")));
        } catch {
          try {
            document.execCommand?.("\x63\x6f\x70\x79");
          } catch {}
        }
      }, _74b366445f8f = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _f205cf09814e = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), _0x87f761_6 = _abe6c536ba9a => {
        try {
          _74b366445f8f?.postMessage(_abe6c536ba9a, "\x2a");
        } catch {}
        try {
          _f205cf09814e && _f205cf09814e !== _74b366445f8f && _f205cf09814e.postMessage(_abe6c536ba9a, "\x2a");
        } catch {}
        try {
          window.parent?.postMessage(_abe6c536ba9a, "\x2a");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_abe6c536ba9a, "\x2a");
        } catch {}
      };
      window.addEventListener("\x6b\x65\x79\x64\x6f\x77\x6e", _74b366445f8f => {
        const _f205cf09814e = String(_74b366445f8f.key || "").toLowerCase();
        if (_74b366445f8f.altKey && !_74b366445f8f.ctrlKey && !_74b366445f8f.metaKey && 2 !== _74b366445f8f.location && "\x61\x6c\x74" === _f205cf09814e) return _74b366445f8f.preventDefault(), 
        _74b366445f8f.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x70\x72\x69\x6d\x65"
        });
        if (_74b366445f8f.altKey && !_74b366445f8f.ctrlKey && !_74b366445f8f.metaKey && 2 !== _74b366445f8f.location && _0x87f761_0(_74b366445f8f.target) && /^[acxvzy]$/.test(_f205cf09814e)) {
          if (_74b366445f8f.preventDefault(), _74b366445f8f.stopPropagation(), "\x61" === _f205cf09814e) return void (_74b366445f8f.target?.select ? _74b366445f8f.target.select() : document.execCommand?.("\x73\x65\x6c\x65\x63\x74\x41\x6c\x6c"));
          if ("\x63" === _f205cf09814e) return void _0x87f761_3(_0x87f761_1(_74b366445f8f.target));
          if ("\x78" === _f205cf09814e) {
            const _f205cf09814e = _0x87f761_1(_74b366445f8f.target);
            return _0x87f761_3(_f205cf09814e), void _0x87f761_2(_74b366445f8f.target, "");
          }
          if ("\x76" === _f205cf09814e) return void navigator.clipboard?.readText?.().then(_f205cf09814e => _0x87f761_2(_74b366445f8f.target, _f205cf09814e)).catch(() => {
            try {
              document.execCommand?.("\x70\x61\x73\x74\x65");
            } catch {}
          });
          if ("\x7a" === _f205cf09814e) return void document.execCommand?.("\x75\x6e\x64\x6f");
          if ("\x79" === _f205cf09814e) return void document.execCommand?.("\x72\x65\x64\x6f");
        }
        return !_74b366445f8f.altKey || _74b366445f8f.ctrlKey || _74b366445f8f.metaKey || 2 === _74b366445f8f.location || !/^[1-9]$/.test(_f205cf09814e) && ![ "\x6c", "\x64", "\x74", "\x77", "\x72", "\x61\x72\x72\x6f\x77\x6c\x65\x66\x74", "\x61\x72\x72\x6f\x77\x72\x69\x67\x68\x74", "\x74\x61\x62" ].includes(_f205cf09814e) ? void 0 : (_74b366445f8f.preventDefault(), 
        _74b366445f8f.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x73\x68\x6f\x72\x74\x63\x75\x74",
          key: _f205cf09814e,
          code: _74b366445f8f.code || "",
          location: _74b366445f8f.location || 0,
          shiftKey: !!_74b366445f8f.shiftKey
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
  }, _0x87f761_2 = _74b366445f8f => {
    if (!_74b366445f8f) return !1;
    try {
      return _74b366445f8f.document.open(), _74b366445f8f.document.write("\x3c\x21\x64\x6f\x63\x74\x79\x70\x65\x20\x68\x74\x6d\x6c\x3e\x3c\x68\x74\x6d\x6c\x3e\x3c\x68\x65\x61\x64\x3e\x3c\x6d\x65\x74\x61\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x22\x75\x74\x66\x2d\x38\x22\x3e\x3c\x6d\x65\x74\x61\x20\x6e\x61\x6d\x65\x3d\x22\x76\x69\x65\x77\x70\x6f\x72\x74\x22\x20\x63\x6f\x6e\x74\x65\x6e\x74\x3d\x22\x77\x69\x64\x74\x68\x3d\x64\x65\x76\x69\x63\x65\x2d\x77\x69\x64\x74\x68\x2c\x69\x6e\x69\x74\x69\x61\x6c\x2d\x73\x63\x61\x6c\x65\x3d\x31\x22\x3e\x3c\x74\x69\x74\x6c\x65\x3e\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61\x3c\x2f\x74\x69\x74\x6c\x65\x3e\x3c\x73\x74\x79\x6c\x65\x3e\x68\x74\x6d\x6c\x2c\x62\x6f\x64\x79\x7b\x6d\x61\x72\x67\x69\x6e\x3a\x30\x3b\x77\x69\x64\x74\x68\x3a\x31\x30\x30\x25\x3b\x68\x65\x69\x67\x68\x74\x3a\x31\x30\x30\x25\x3b\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x3a\x23\x66\x66\x66\x3b\x63\x6f\x6c\x6f\x72\x3a\x23\x31\x31\x31\x3b\x66\x6f\x6e\x74\x3a\x32\x38\x70\x78\x20\x52\x61\x6c\x65\x77\x61\x79\x2c\x41\x72\x69\x61\x6c\x2c\x73\x61\x6e\x73\x2d\x73\x65\x72\x69\x66\x7d\x62\x6f\x64\x79\x7b\x64\x69\x73\x70\x6c\x61\x79\x3a\x67\x72\x69\x64\x3b\x70\x6c\x61\x63\x65\x2d\x69\x74\x65\x6d\x73\x3a\x63\x65\x6e\x74\x65\x72\x3b\x74\x65\x78\x74\x2d\x61\x6c\x69\x67\x6e\x3a\x63\x65\x6e\x74\x65\x72\x7d\x6d\x61\x69\x6e\x7b\x70\x61\x64\x64\x69\x6e\x67\x3a\x32\x34\x70\x78\x7d\x3c\x2f\x73\x74\x79\x6c\x65\x3e\x3c\x2f\x68\x65\x61\x64\x3e\x3c\x62\x6f\x64\x79\x3e\x3c\x6d\x61\x69\x6e\x3e\x61\x72\x65\x20\x79\x6f\x75\x20\x74\x72\x79\x69\x6e\x67\x20\x74\x6f\x20\x68\x61\x63\x6b\x20\x6d\x65\x20\x73\x63\x61\x6d\x6d\x61\x3f\x3f\x3f\x3c\x2f\x6d\x61\x69\x6e\x3e\x3c\x2f\x62\x6f\x64\x79\x3e\x3c\x2f\x68\x74\x6d\x6c\x3e"), 
      _74b366445f8f.document.close(), _74b366445f8f.focus?.(), !0;
    } catch {
      return !1;
    }
  }, _0x87f761_3 = () => {
    const _74b366445f8f = null;
    return {
      closed: !1,
      focus() {
        try {
          _74b366445f8f?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _74b366445f8f?.blur?.();
        } catch {}
      },
      close() {
        try {
          _74b366445f8f?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return _0x87f761_2(_74b366445f8f), this;
        },
        write() {
          _0x87f761_2(_74b366445f8f);
        },
        writeln() {
          _0x87f761_2(_74b366445f8f);
        },
        close() {
          _0x87f761_2(_74b366445f8f);
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
          _0x87f761_2(_74b366445f8f);
        },
        toString: () => "\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61"
      }
    };
  }, _0x87f761_4 = _74b366445f8f => {
    const _f205cf09814e = String(_74b366445f8f || "").trim();
    if (/^(?:blob|data):/i.test(_f205cf09814e)) return !1;
    const _abe6c536ba9a = _f205cf09814e.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_abe6c536ba9a);
  }, _0x87f761_5 = (_74b366445f8f, _f205cf09814e = "") => {
    const _abe6c536ba9a = String(_74b366445f8f || "").trim();
    if (!_abe6c536ba9a || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "\x6e\x79\x78\x3a\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x2d\x72\x65\x71\x75\x65\x73\x74",
        url: _abe6c536ba9a,
        filename: String(_f205cf09814e || ""),
        sourceUrl: String(location.href || "")
      }, "\x2a"), !0;
    } catch {
      return !1;
    }
  };
  let _0x87f761_6 = (..._f205cf09814e) => _0x87f761_4(_f205cf09814e[0]) && _0x87f761_5(_f205cf09814e[0]) ? null : !_0x87f761_1() && _74b366445f8f ? _74b366445f8f(..._f205cf09814e) : _0x87f761_3();
  try {
    "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _74b366445f8f && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof \u{50}\u{72}\u{6f}\u{78}\u{79} && (_0x87f761_6 = new \u{50}\u{72}\u{6f}\u{78}\u{79}(_74b366445f8f, {
      apply: (_74b366445f8f, _f205cf09814e, _abe6c536ba9a) => _0x87f761_4(_abe6c536ba9a[0]) && _0x87f761_5(_abe6c536ba9a[0]) ? null : _0x87f761_1() ? _0x87f761_3() : Reflect.apply(_74b366445f8f, _f205cf09814e, _abe6c536ba9a),
      construct(_74b366445f8f, _f205cf09814e, _abe6c536ba9a) {
        if (!_0x87f761_1()) try {
          return Reflect.construct(_74b366445f8f, _f205cf09814e, _abe6c536ba9a);
        } catch {
          return Reflect.apply(_74b366445f8f, window, _f205cf09814e);
        }
        return _0x87f761_3();
      },
      get: (_74b366445f8f, _f205cf09814e, _abe6c536ba9a) => "\x5f\x5f\x6e\x79\x78\x50\x6f\x70\x75\x70\x47\x75\x61\x72\x64" === _f205cf09814e || ("\x74\x6f\x53\x74\x72\x69\x6e\x67" === _f205cf09814e ? () => "\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x6f\x70\x65\x6e\x28\x29\x20\x7b\x20\x5b\x6e\x61\x74\x69\x76\x65\x20\x63\x6f\x64\x65\x5d\x20\x7d" : Reflect.get(_74b366445f8f, _f205cf09814e, _abe6c536ba9a))
    }));
  } catch {}
  const _0x87f761_7 = _74b366445f8f => {
    const _f205cf09814e = String(_74b366445f8f || "").toLowerCase();
    return _f205cf09814e && ![ "\x5f\x73\x65\x6c\x66", "\x5f\x70\x61\x72\x65\x6e\x74", "\x5f\x74\x6f\x70" ].includes(_f205cf09814e);
  }, _0x87f761_8 = _74b366445f8f => !!_74b366445f8f && (!!_74b366445f8f.hasAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || _0x87f761_4(_74b366445f8f.href || _74b366445f8f.getAttribute("\x68\x72\x65\x66") || ""));
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
    const _74b366445f8f = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!_0x87f761_8(this) || !_0x87f761_5(this.href || this.getAttribute("\x68\x72\x65\x66"), this.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "")) {
        if (!_0x87f761_1() || !_0x87f761_7(this.target)) return _74b366445f8f.call(this);
        _0x87f761_3();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("\x63\x6c\x69\x63\x6b", _74b366445f8f => {
    const _f205cf09814e = _74b366445f8f.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_f205cf09814e) return _0x87f761_8(_f205cf09814e) && _0x87f761_5(_f205cf09814e.href || _f205cf09814e.getAttribute("\x68\x72\x65\x66"), _f205cf09814e.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_74b366445f8f.preventDefault(), 
    void _74b366445f8f.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_f205cf09814e.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_74b366445f8f.preventDefault(), 
    _74b366445f8f.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x61\x75\x78\x63\x6c\x69\x63\x6b", _74b366445f8f => {
    const _f205cf09814e = _74b366445f8f.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_f205cf09814e) return _0x87f761_8(_f205cf09814e) && _0x87f761_5(_f205cf09814e.href || _f205cf09814e.getAttribute("\x68\x72\x65\x66"), _f205cf09814e.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_74b366445f8f.preventDefault(), 
    void _74b366445f8f.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_f205cf09814e.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_74b366445f8f.preventDefault(), 
    _74b366445f8f.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x73\x75\x62\x6d\x69\x74", _74b366445f8f => {
    if (!_0x87f761_1()) return;
    const _f205cf09814e = _74b366445f8f.target;
    _f205cf09814e && "\x46\x4f\x52\x4d" === String(_f205cf09814e.tagName || "").toUpperCase() && _0x87f761_7(_f205cf09814e.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_74b366445f8f.preventDefault(), 
    _74b366445f8f.stopImmediatePropagation(), _0x87f761_3());
  }, !0));
  const _0x87f761_9 = _74b366445f8f => {
    const _f205cf09814e = window[_74b366445f8f];
    if ("\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _f205cf09814e && !_f205cf09814e.__nyxWrapped) try {
      Object.setPrototypeOf(_0x87f761_2, _f205cf09814e), _0x87f761_2.prototype = _f205cf09814e.prototype, 
      Object.defineProperty(_0x87f761_2, "\x5f\x5f\x6e\x79\x78\x57\x72\x61\x70\x70\x65\x64", {
        value: !0
      }), window[_74b366445f8f] = _0x87f761_2;
    } catch {}
    function _0x87f761_2(_74b366445f8f, _abe6c536ba9a, _45845ca16c6e) {
      let _5fc0c4d32aaa = Number(_74b366445f8f), _9eef4ba996be = Number(_abe6c536ba9a);
      return (!Number.isFinite(_5fc0c4d32aaa) || _5fc0c4d32aaa < 0) && (_5fc0c4d32aaa = 0), 
      (!Number.isFinite(_9eef4ba996be) || _9eef4ba996be <= _5fc0c4d32aaa) && (_9eef4ba996be = _5fc0c4d32aaa + .001), 
      Reflect.construct(_f205cf09814e, [ _5fc0c4d32aaa, _9eef4ba996be, null == _45845ca16c6e ? "" : String(_45845ca16c6e) ], new.target || _0x87f761_2);
    }
  };
  _0x87f761_9("\x56\x54\x54\x43\x75\x65"), _0x87f761_9("\x54\x65\x78\x74\x54\x72\x61\x63\x6b\x43\x75\x65");
})();
