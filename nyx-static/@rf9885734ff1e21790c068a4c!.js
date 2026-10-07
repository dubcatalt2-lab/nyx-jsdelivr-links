(() => {
  if ("\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" == typeof window || window.\u{5f}\u{5f}\u{6e}\u{79}\u{78}\u{53}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74}\u{47}\u{75}\u{61}\u{72}\u{64}\u{73}) return;
  window.\u{5f}\u{5f}\u{6e}\u{79}\u{78}\u{53}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74}\u{47}\u{75}\u{61}\u{72}\u{64}\u{73} = !0;
  const _b913a726623d = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "\x74\x72\x75\x73\x74\x65\x64\x54\x79\x70\x65\x73", {
      configurable: !0,
      value: {
        createPolicy: (_b913a726623d, _1a0ee2cc8153 = {}) => ({
          createHTML: _b913a726623d => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _1a0ee2cc8153.createHTML ? _1a0ee2cc8153.createHTML(_b913a726623d) : _b913a726623d,
          createScript: _b913a726623d => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _1a0ee2cc8153.createScript ? _1a0ee2cc8153.createScript(_b913a726623d) : _b913a726623d,
          createScriptURL: _b913a726623d => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _1a0ee2cc8153.createScriptURL ? _1a0ee2cc8153.createScriptURL(_b913a726623d) : _b913a726623d
        })
      }
    });
  } catch {}
  try {
    const _b913a726623d = Object.getOwnPropertyDescriptor(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74"), _1a0ee2cc8153 = document.createElement("\x73\x63\x72\x69\x70\x74");
    _1a0ee2cc8153.setAttribute("\x6e\x6f\x6e\x63\x65", ""), Object.defineProperty(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74", {
      configurable: !0,
      get() {
        let _790e83598d62 = null;
        try {
          _790e83598d62 = _b913a726623d?.get?.call(this) || null;
        } catch {}
        return _790e83598d62 || this.querySelector?.("\x73\x63\x72\x69\x70\x74\x5b\x73\x72\x63\x5d\x2c\x73\x63\x72\x69\x70\x74") || _1a0ee2cc8153;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const _0x87f761_0 = _b913a726623d => !(!_b913a726623d || !_b913a726623d.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_b913a726623d.tagName || "")), _0x87f761_1 = _b913a726623d => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_b913a726623d?.tagName || "") ? String(_b913a726623d.value || "").slice(_b913a726623d.selectionStart || 0, _b913a726623d.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, _0x87f761_2 = (_b913a726623d, _1a0ee2cc8153) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_b913a726623d?.tagName || "")) {
            const _790e83598d62 = _b913a726623d.selectionStart || 0, _fc7bf9e912eb = _b913a726623d.selectionEnd || 0, _586b87378da9 = String(_b913a726623d.value || "");
            _b913a726623d.value = _586b87378da9.slice(0, _790e83598d62) + _1a0ee2cc8153 + _586b87378da9.slice(_fc7bf9e912eb);
            const _f73f3f943b75 = _790e83598d62 + String(_1a0ee2cc8153).length;
            return _b913a726623d.setSelectionRange(_f73f3f943b75, _f73f3f943b75), void _b913a726623d.dispatchEvent(new Event("\x69\x6e\x70\x75\x74", {
              bubbles: !0
            }));
          }
          document.execCommand?.("\x69\x6e\x73\x65\x72\x74\x54\x65\x78\x74", !1, _1a0ee2cc8153);
        } catch {}
      }, _0x87f761_3 = async _b913a726623d => {
        try {
          await (navigator.clipboard?.writeText(String(_b913a726623d || "")));
        } catch {
          try {
            document.execCommand?.("\x63\x6f\x70\x79");
          } catch {}
        }
      }, _b913a726623d = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _1a0ee2cc8153 = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), _0x87f761_6 = _790e83598d62 => {
        try {
          _b913a726623d?.postMessage(_790e83598d62, "\x2a");
        } catch {}
        try {
          _1a0ee2cc8153 && _1a0ee2cc8153 !== _b913a726623d && _1a0ee2cc8153.postMessage(_790e83598d62, "\x2a");
        } catch {}
        try {
          window.parent?.postMessage(_790e83598d62, "\x2a");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_790e83598d62, "\x2a");
        } catch {}
      };
      window.addEventListener("\x6b\x65\x79\x64\x6f\x77\x6e", _b913a726623d => {
        const _1a0ee2cc8153 = String(_b913a726623d.key || "").toLowerCase();
        if (_b913a726623d.altKey && !_b913a726623d.ctrlKey && !_b913a726623d.metaKey && 2 !== _b913a726623d.location && "\x61\x6c\x74" === _1a0ee2cc8153) return _b913a726623d.preventDefault(), 
        _b913a726623d.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x70\x72\x69\x6d\x65"
        });
        if (_b913a726623d.altKey && !_b913a726623d.ctrlKey && !_b913a726623d.metaKey && 2 !== _b913a726623d.location && _0x87f761_0(_b913a726623d.target) && /^[acxvzy]$/.test(_1a0ee2cc8153)) {
          if (_b913a726623d.preventDefault(), _b913a726623d.stopPropagation(), "\x61" === _1a0ee2cc8153) return void (_b913a726623d.target?.select ? _b913a726623d.target.select() : document.execCommand?.("\x73\x65\x6c\x65\x63\x74\x41\x6c\x6c"));
          if ("\x63" === _1a0ee2cc8153) return void _0x87f761_3(_0x87f761_1(_b913a726623d.target));
          if ("\x78" === _1a0ee2cc8153) {
            const _1a0ee2cc8153 = _0x87f761_1(_b913a726623d.target);
            return _0x87f761_3(_1a0ee2cc8153), void _0x87f761_2(_b913a726623d.target, "");
          }
          if ("\x76" === _1a0ee2cc8153) return void navigator.clipboard?.readText?.().then(_1a0ee2cc8153 => _0x87f761_2(_b913a726623d.target, _1a0ee2cc8153)).catch(() => {
            try {
              document.execCommand?.("\x70\x61\x73\x74\x65");
            } catch {}
          });
          if ("\x7a" === _1a0ee2cc8153) return void document.execCommand?.("\x75\x6e\x64\x6f");
          if ("\x79" === _1a0ee2cc8153) return void document.execCommand?.("\x72\x65\x64\x6f");
        }
        return !_b913a726623d.altKey || _b913a726623d.ctrlKey || _b913a726623d.metaKey || 2 === _b913a726623d.location || !/^[1-9]$/.test(_1a0ee2cc8153) && ![ "\x6c", "\x64", "\x74", "\x77", "\x72", "\x61\x72\x72\x6f\x77\x6c\x65\x66\x74", "\x61\x72\x72\x6f\x77\x72\x69\x67\x68\x74", "\x74\x61\x62" ].includes(_1a0ee2cc8153) ? void 0 : (_b913a726623d.preventDefault(), 
        _b913a726623d.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x73\x68\x6f\x72\x74\x63\x75\x74",
          key: _1a0ee2cc8153,
          code: _b913a726623d.code || "",
          location: _b913a726623d.location || 0,
          shiftKey: !!_b913a726623d.shiftKey
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
  }, _0x87f761_2 = _b913a726623d => {
    if (!_b913a726623d) return !1;
    try {
      return _b913a726623d.document.open(), _b913a726623d.document.write("\x3c\x21\x64\x6f\x63\x74\x79\x70\x65\x20\x68\x74\x6d\x6c\x3e\x3c\x68\x74\x6d\x6c\x3e\x3c\x68\x65\x61\x64\x3e\x3c\x6d\x65\x74\x61\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x22\x75\x74\x66\x2d\x38\x22\x3e\x3c\x6d\x65\x74\x61\x20\x6e\x61\x6d\x65\x3d\x22\x76\x69\x65\x77\x70\x6f\x72\x74\x22\x20\x63\x6f\x6e\x74\x65\x6e\x74\x3d\x22\x77\x69\x64\x74\x68\x3d\x64\x65\x76\x69\x63\x65\x2d\x77\x69\x64\x74\x68\x2c\x69\x6e\x69\x74\x69\x61\x6c\x2d\x73\x63\x61\x6c\x65\x3d\x31\x22\x3e\x3c\x74\x69\x74\x6c\x65\x3e\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61\x3c\x2f\x74\x69\x74\x6c\x65\x3e\x3c\x73\x74\x79\x6c\x65\x3e\x68\x74\x6d\x6c\x2c\x62\x6f\x64\x79\x7b\x6d\x61\x72\x67\x69\x6e\x3a\x30\x3b\x77\x69\x64\x74\x68\x3a\x31\x30\x30\x25\x3b\x68\x65\x69\x67\x68\x74\x3a\x31\x30\x30\x25\x3b\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x3a\x23\x66\x66\x66\x3b\x63\x6f\x6c\x6f\x72\x3a\x23\x31\x31\x31\x3b\x66\x6f\x6e\x74\x3a\x32\x38\x70\x78\x20\x52\x61\x6c\x65\x77\x61\x79\x2c\x41\x72\x69\x61\x6c\x2c\x73\x61\x6e\x73\x2d\x73\x65\x72\x69\x66\x7d\x62\x6f\x64\x79\x7b\x64\x69\x73\x70\x6c\x61\x79\x3a\x67\x72\x69\x64\x3b\x70\x6c\x61\x63\x65\x2d\x69\x74\x65\x6d\x73\x3a\x63\x65\x6e\x74\x65\x72\x3b\x74\x65\x78\x74\x2d\x61\x6c\x69\x67\x6e\x3a\x63\x65\x6e\x74\x65\x72\x7d\x6d\x61\x69\x6e\x7b\x70\x61\x64\x64\x69\x6e\x67\x3a\x32\x34\x70\x78\x7d\x3c\x2f\x73\x74\x79\x6c\x65\x3e\x3c\x2f\x68\x65\x61\x64\x3e\x3c\x62\x6f\x64\x79\x3e\x3c\x6d\x61\x69\x6e\x3e\x61\x72\x65\x20\x79\x6f\x75\x20\x74\x72\x79\x69\x6e\x67\x20\x74\x6f\x20\x68\x61\x63\x6b\x20\x6d\x65\x20\x73\x63\x61\x6d\x6d\x61\x3f\x3f\x3f\x3c\x2f\x6d\x61\x69\x6e\x3e\x3c\x2f\x62\x6f\x64\x79\x3e\x3c\x2f\x68\x74\x6d\x6c\x3e"), 
      _b913a726623d.document.close(), _b913a726623d.focus?.(), !0;
    } catch {
      return !1;
    }
  }, _0x87f761_3 = () => {
    const _b913a726623d = null;
    return {
      closed: !1,
      focus() {
        try {
          _b913a726623d?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _b913a726623d?.blur?.();
        } catch {}
      },
      close() {
        try {
          _b913a726623d?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return _0x87f761_2(_b913a726623d), this;
        },
        write() {
          _0x87f761_2(_b913a726623d);
        },
        writeln() {
          _0x87f761_2(_b913a726623d);
        },
        close() {
          _0x87f761_2(_b913a726623d);
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
          _0x87f761_2(_b913a726623d);
        },
        toString: () => "\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61"
      }
    };
  }, _0x87f761_4 = _b913a726623d => {
    const _1a0ee2cc8153 = String(_b913a726623d || "").trim();
    if (/^(?:blob|data):/i.test(_1a0ee2cc8153)) return !1;
    const _790e83598d62 = _1a0ee2cc8153.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_790e83598d62);
  }, _0x87f761_5 = (_b913a726623d, _1a0ee2cc8153 = "") => {
    const _790e83598d62 = String(_b913a726623d || "").trim();
    if (!_790e83598d62 || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "\x6e\x79\x78\x3a\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x2d\x72\x65\x71\x75\x65\x73\x74",
        url: _790e83598d62,
        filename: String(_1a0ee2cc8153 || ""),
        sourceUrl: String(location.href || "")
      }, "\x2a"), !0;
    } catch {
      return !1;
    }
  };
  let _0x87f761_6 = (..._1a0ee2cc8153) => _0x87f761_4(_1a0ee2cc8153[0]) && _0x87f761_5(_1a0ee2cc8153[0]) ? null : !_0x87f761_1() && _b913a726623d ? _b913a726623d(..._1a0ee2cc8153) : _0x87f761_3();
  try {
    "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _b913a726623d && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof \u{50}\u{72}\u{6f}\u{78}\u{79} && (_0x87f761_6 = new \u{50}\u{72}\u{6f}\u{78}\u{79}(_b913a726623d, {
      apply: (_b913a726623d, _1a0ee2cc8153, _790e83598d62) => _0x87f761_4(_790e83598d62[0]) && _0x87f761_5(_790e83598d62[0]) ? null : _0x87f761_1() ? _0x87f761_3() : Reflect.apply(_b913a726623d, _1a0ee2cc8153, _790e83598d62),
      construct(_b913a726623d, _1a0ee2cc8153, _790e83598d62) {
        if (!_0x87f761_1()) try {
          return Reflect.construct(_b913a726623d, _1a0ee2cc8153, _790e83598d62);
        } catch {
          return Reflect.apply(_b913a726623d, window, _1a0ee2cc8153);
        }
        return _0x87f761_3();
      },
      get: (_b913a726623d, _1a0ee2cc8153, _790e83598d62) => "\x5f\x5f\x6e\x79\x78\x50\x6f\x70\x75\x70\x47\x75\x61\x72\x64" === _1a0ee2cc8153 || ("\x74\x6f\x53\x74\x72\x69\x6e\x67" === _1a0ee2cc8153 ? () => "\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x6f\x70\x65\x6e\x28\x29\x20\x7b\x20\x5b\x6e\x61\x74\x69\x76\x65\x20\x63\x6f\x64\x65\x5d\x20\x7d" : Reflect.get(_b913a726623d, _1a0ee2cc8153, _790e83598d62))
    }));
  } catch {}
  const _0x87f761_7 = _b913a726623d => {
    const _1a0ee2cc8153 = String(_b913a726623d || "").toLowerCase();
    return _1a0ee2cc8153 && ![ "\x5f\x73\x65\x6c\x66", "\x5f\x70\x61\x72\x65\x6e\x74", "\x5f\x74\x6f\x70" ].includes(_1a0ee2cc8153);
  }, _0x87f761_8 = _b913a726623d => !!_b913a726623d && (!!_b913a726623d.hasAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || _0x87f761_4(_b913a726623d.href || _b913a726623d.getAttribute("\x68\x72\x65\x66") || ""));
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
    const _b913a726623d = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!_0x87f761_8(this) || !_0x87f761_5(this.href || this.getAttribute("\x68\x72\x65\x66"), this.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "")) {
        if (!_0x87f761_1() || !_0x87f761_7(this.target)) return _b913a726623d.call(this);
        _0x87f761_3();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("\x63\x6c\x69\x63\x6b", _b913a726623d => {
    const _1a0ee2cc8153 = _b913a726623d.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_1a0ee2cc8153) return _0x87f761_8(_1a0ee2cc8153) && _0x87f761_5(_1a0ee2cc8153.href || _1a0ee2cc8153.getAttribute("\x68\x72\x65\x66"), _1a0ee2cc8153.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_b913a726623d.preventDefault(), 
    void _b913a726623d.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_1a0ee2cc8153.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_b913a726623d.preventDefault(), 
    _b913a726623d.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x61\x75\x78\x63\x6c\x69\x63\x6b", _b913a726623d => {
    const _1a0ee2cc8153 = _b913a726623d.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_1a0ee2cc8153) return _0x87f761_8(_1a0ee2cc8153) && _0x87f761_5(_1a0ee2cc8153.href || _1a0ee2cc8153.getAttribute("\x68\x72\x65\x66"), _1a0ee2cc8153.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_b913a726623d.preventDefault(), 
    void _b913a726623d.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_1a0ee2cc8153.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_b913a726623d.preventDefault(), 
    _b913a726623d.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x73\x75\x62\x6d\x69\x74", _b913a726623d => {
    if (!_0x87f761_1()) return;
    const _1a0ee2cc8153 = _b913a726623d.target;
    _1a0ee2cc8153 && "\x46\x4f\x52\x4d" === String(_1a0ee2cc8153.tagName || "").toUpperCase() && _0x87f761_7(_1a0ee2cc8153.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_b913a726623d.preventDefault(), 
    _b913a726623d.stopImmediatePropagation(), _0x87f761_3());
  }, !0));
  const _0x87f761_9 = _b913a726623d => {
    const _1a0ee2cc8153 = window[_b913a726623d];
    if ("\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _1a0ee2cc8153 && !_1a0ee2cc8153.__nyxWrapped) try {
      Object.setPrototypeOf(_0x87f761_2, _1a0ee2cc8153), _0x87f761_2.prototype = _1a0ee2cc8153.prototype, 
      Object.defineProperty(_0x87f761_2, "\x5f\x5f\x6e\x79\x78\x57\x72\x61\x70\x70\x65\x64", {
        value: !0
      }), window[_b913a726623d] = _0x87f761_2;
    } catch {}
    function _0x87f761_2(_b913a726623d, _790e83598d62, _fc7bf9e912eb) {
      let _586b87378da9 = Number(_b913a726623d), _f73f3f943b75 = Number(_790e83598d62);
      return (!Number.isFinite(_586b87378da9) || _586b87378da9 < 0) && (_586b87378da9 = 0), 
      (!Number.isFinite(_f73f3f943b75) || _f73f3f943b75 <= _586b87378da9) && (_f73f3f943b75 = _586b87378da9 + .001), 
      Reflect.construct(_1a0ee2cc8153, [ _586b87378da9, _f73f3f943b75, null == _fc7bf9e912eb ? "" : String(_fc7bf9e912eb) ], new.target || _0x87f761_2);
    }
  };
  _0x87f761_9("\x56\x54\x54\x43\x75\x65"), _0x87f761_9("\x54\x65\x78\x74\x54\x72\x61\x63\x6b\x43\x75\x65");
})();
