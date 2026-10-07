(() => {
  if ("\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" == typeof window || window.\u{5f}\u{5f}\u{6e}\u{79}\u{78}\u{53}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74}\u{47}\u{75}\u{61}\u{72}\u{64}\u{73}) return;
  window.\u{5f}\u{5f}\u{6e}\u{79}\u{78}\u{53}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74}\u{47}\u{75}\u{61}\u{72}\u{64}\u{73} = !0;
  const _e09eddacd27a = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "\x74\x72\x75\x73\x74\x65\x64\x54\x79\x70\x65\x73", {
      configurable: !0,
      value: {
        createPolicy: (_e09eddacd27a, _a9f2cb8f2600 = {}) => ({
          createHTML: _e09eddacd27a => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _a9f2cb8f2600.createHTML ? _a9f2cb8f2600.createHTML(_e09eddacd27a) : _e09eddacd27a,
          createScript: _e09eddacd27a => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _a9f2cb8f2600.createScript ? _a9f2cb8f2600.createScript(_e09eddacd27a) : _e09eddacd27a,
          createScriptURL: _e09eddacd27a => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _a9f2cb8f2600.createScriptURL ? _a9f2cb8f2600.createScriptURL(_e09eddacd27a) : _e09eddacd27a
        })
      }
    });
  } catch {}
  try {
    const _e09eddacd27a = Object.getOwnPropertyDescriptor(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74"), _a9f2cb8f2600 = document.createElement("\x73\x63\x72\x69\x70\x74");
    _a9f2cb8f2600.setAttribute("\x6e\x6f\x6e\x63\x65", ""), Object.defineProperty(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74", {
      configurable: !0,
      get() {
        let _79c59da0733c = null;
        try {
          _79c59da0733c = _e09eddacd27a?.get?.call(this) || null;
        } catch {}
        return _79c59da0733c || this.querySelector?.("\x73\x63\x72\x69\x70\x74\x5b\x73\x72\x63\x5d\x2c\x73\x63\x72\x69\x70\x74") || _a9f2cb8f2600;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const _0x87f761_0 = _e09eddacd27a => !(!_e09eddacd27a || !_e09eddacd27a.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_e09eddacd27a.tagName || "")), _0x87f761_1 = _e09eddacd27a => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_e09eddacd27a?.tagName || "") ? String(_e09eddacd27a.value || "").slice(_e09eddacd27a.selectionStart || 0, _e09eddacd27a.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, _0x87f761_2 = (_e09eddacd27a, _a9f2cb8f2600) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_e09eddacd27a?.tagName || "")) {
            const _79c59da0733c = _e09eddacd27a.selectionStart || 0, _a7b5d6556e98 = _e09eddacd27a.selectionEnd || 0, _141655aa0ff7 = String(_e09eddacd27a.value || "");
            _e09eddacd27a.value = _141655aa0ff7.slice(0, _79c59da0733c) + _a9f2cb8f2600 + _141655aa0ff7.slice(_a7b5d6556e98);
            const _895af8cdaf7e = _79c59da0733c + String(_a9f2cb8f2600).length;
            return _e09eddacd27a.setSelectionRange(_895af8cdaf7e, _895af8cdaf7e), void _e09eddacd27a.dispatchEvent(new Event("\x69\x6e\x70\x75\x74", {
              bubbles: !0
            }));
          }
          document.execCommand?.("\x69\x6e\x73\x65\x72\x74\x54\x65\x78\x74", !1, _a9f2cb8f2600);
        } catch {}
      }, _0x87f761_3 = async _e09eddacd27a => {
        try {
          await (navigator.clipboard?.writeText(String(_e09eddacd27a || "")));
        } catch {
          try {
            document.execCommand?.("\x63\x6f\x70\x79");
          } catch {}
        }
      }, _e09eddacd27a = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _a9f2cb8f2600 = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), _0x87f761_6 = _79c59da0733c => {
        try {
          _e09eddacd27a?.postMessage(_79c59da0733c, "\x2a");
        } catch {}
        try {
          _a9f2cb8f2600 && _a9f2cb8f2600 !== _e09eddacd27a && _a9f2cb8f2600.postMessage(_79c59da0733c, "\x2a");
        } catch {}
        try {
          window.parent?.postMessage(_79c59da0733c, "\x2a");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_79c59da0733c, "\x2a");
        } catch {}
      };
      window.addEventListener("\x6b\x65\x79\x64\x6f\x77\x6e", _e09eddacd27a => {
        const _a9f2cb8f2600 = String(_e09eddacd27a.key || "").toLowerCase();
        if (_e09eddacd27a.altKey && !_e09eddacd27a.ctrlKey && !_e09eddacd27a.metaKey && 2 !== _e09eddacd27a.location && "\x61\x6c\x74" === _a9f2cb8f2600) return _e09eddacd27a.preventDefault(), 
        _e09eddacd27a.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x70\x72\x69\x6d\x65"
        });
        if (_e09eddacd27a.altKey && !_e09eddacd27a.ctrlKey && !_e09eddacd27a.metaKey && 2 !== _e09eddacd27a.location && _0x87f761_0(_e09eddacd27a.target) && /^[acxvzy]$/.test(_a9f2cb8f2600)) {
          if (_e09eddacd27a.preventDefault(), _e09eddacd27a.stopPropagation(), "\x61" === _a9f2cb8f2600) return void (_e09eddacd27a.target?.select ? _e09eddacd27a.target.select() : document.execCommand?.("\x73\x65\x6c\x65\x63\x74\x41\x6c\x6c"));
          if ("\x63" === _a9f2cb8f2600) return void _0x87f761_3(_0x87f761_1(_e09eddacd27a.target));
          if ("\x78" === _a9f2cb8f2600) {
            const _a9f2cb8f2600 = _0x87f761_1(_e09eddacd27a.target);
            return _0x87f761_3(_a9f2cb8f2600), void _0x87f761_2(_e09eddacd27a.target, "");
          }
          if ("\x76" === _a9f2cb8f2600) return void navigator.clipboard?.readText?.().then(_a9f2cb8f2600 => _0x87f761_2(_e09eddacd27a.target, _a9f2cb8f2600)).catch(() => {
            try {
              document.execCommand?.("\x70\x61\x73\x74\x65");
            } catch {}
          });
          if ("\x7a" === _a9f2cb8f2600) return void document.execCommand?.("\x75\x6e\x64\x6f");
          if ("\x79" === _a9f2cb8f2600) return void document.execCommand?.("\x72\x65\x64\x6f");
        }
        return !_e09eddacd27a.altKey || _e09eddacd27a.ctrlKey || _e09eddacd27a.metaKey || 2 === _e09eddacd27a.location || !/^[1-9]$/.test(_a9f2cb8f2600) && ![ "\x6c", "\x64", "\x74", "\x77", "\x72", "\x61\x72\x72\x6f\x77\x6c\x65\x66\x74", "\x61\x72\x72\x6f\x77\x72\x69\x67\x68\x74", "\x74\x61\x62" ].includes(_a9f2cb8f2600) ? void 0 : (_e09eddacd27a.preventDefault(), 
        _e09eddacd27a.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x73\x68\x6f\x72\x74\x63\x75\x74",
          key: _a9f2cb8f2600,
          code: _e09eddacd27a.code || "",
          location: _e09eddacd27a.location || 0,
          shiftKey: !!_e09eddacd27a.shiftKey
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
  }, _0x87f761_2 = _e09eddacd27a => {
    if (!_e09eddacd27a) return !1;
    try {
      return _e09eddacd27a.document.open(), _e09eddacd27a.document.write("\x3c\x21\x64\x6f\x63\x74\x79\x70\x65\x20\x68\x74\x6d\x6c\x3e\x3c\x68\x74\x6d\x6c\x3e\x3c\x68\x65\x61\x64\x3e\x3c\x6d\x65\x74\x61\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x22\x75\x74\x66\x2d\x38\x22\x3e\x3c\x6d\x65\x74\x61\x20\x6e\x61\x6d\x65\x3d\x22\x76\x69\x65\x77\x70\x6f\x72\x74\x22\x20\x63\x6f\x6e\x74\x65\x6e\x74\x3d\x22\x77\x69\x64\x74\x68\x3d\x64\x65\x76\x69\x63\x65\x2d\x77\x69\x64\x74\x68\x2c\x69\x6e\x69\x74\x69\x61\x6c\x2d\x73\x63\x61\x6c\x65\x3d\x31\x22\x3e\x3c\x74\x69\x74\x6c\x65\x3e\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61\x3c\x2f\x74\x69\x74\x6c\x65\x3e\x3c\x73\x74\x79\x6c\x65\x3e\x68\x74\x6d\x6c\x2c\x62\x6f\x64\x79\x7b\x6d\x61\x72\x67\x69\x6e\x3a\x30\x3b\x77\x69\x64\x74\x68\x3a\x31\x30\x30\x25\x3b\x68\x65\x69\x67\x68\x74\x3a\x31\x30\x30\x25\x3b\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x3a\x23\x66\x66\x66\x3b\x63\x6f\x6c\x6f\x72\x3a\x23\x31\x31\x31\x3b\x66\x6f\x6e\x74\x3a\x32\x38\x70\x78\x20\x52\x61\x6c\x65\x77\x61\x79\x2c\x41\x72\x69\x61\x6c\x2c\x73\x61\x6e\x73\x2d\x73\x65\x72\x69\x66\x7d\x62\x6f\x64\x79\x7b\x64\x69\x73\x70\x6c\x61\x79\x3a\x67\x72\x69\x64\x3b\x70\x6c\x61\x63\x65\x2d\x69\x74\x65\x6d\x73\x3a\x63\x65\x6e\x74\x65\x72\x3b\x74\x65\x78\x74\x2d\x61\x6c\x69\x67\x6e\x3a\x63\x65\x6e\x74\x65\x72\x7d\x6d\x61\x69\x6e\x7b\x70\x61\x64\x64\x69\x6e\x67\x3a\x32\x34\x70\x78\x7d\x3c\x2f\x73\x74\x79\x6c\x65\x3e\x3c\x2f\x68\x65\x61\x64\x3e\x3c\x62\x6f\x64\x79\x3e\x3c\x6d\x61\x69\x6e\x3e\x61\x72\x65\x20\x79\x6f\x75\x20\x74\x72\x79\x69\x6e\x67\x20\x74\x6f\x20\x68\x61\x63\x6b\x20\x6d\x65\x20\x73\x63\x61\x6d\x6d\x61\x3f\x3f\x3f\x3c\x2f\x6d\x61\x69\x6e\x3e\x3c\x2f\x62\x6f\x64\x79\x3e\x3c\x2f\x68\x74\x6d\x6c\x3e"), 
      _e09eddacd27a.document.close(), _e09eddacd27a.focus?.(), !0;
    } catch {
      return !1;
    }
  }, _0x87f761_3 = () => {
    const _e09eddacd27a = null;
    return {
      closed: !1,
      focus() {
        try {
          _e09eddacd27a?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _e09eddacd27a?.blur?.();
        } catch {}
      },
      close() {
        try {
          _e09eddacd27a?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return _0x87f761_2(_e09eddacd27a), this;
        },
        write() {
          _0x87f761_2(_e09eddacd27a);
        },
        writeln() {
          _0x87f761_2(_e09eddacd27a);
        },
        close() {
          _0x87f761_2(_e09eddacd27a);
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
          _0x87f761_2(_e09eddacd27a);
        },
        toString: () => "\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61"
      }
    };
  }, _0x87f761_4 = _e09eddacd27a => {
    const _a9f2cb8f2600 = String(_e09eddacd27a || "").trim();
    if (/^(?:blob|data):/i.test(_a9f2cb8f2600)) return !1;
    const _79c59da0733c = _a9f2cb8f2600.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_79c59da0733c);
  }, _0x87f761_5 = (_e09eddacd27a, _a9f2cb8f2600 = "") => {
    const _79c59da0733c = String(_e09eddacd27a || "").trim();
    if (!_79c59da0733c || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "\x6e\x79\x78\x3a\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x2d\x72\x65\x71\x75\x65\x73\x74",
        url: _79c59da0733c,
        filename: String(_a9f2cb8f2600 || ""),
        sourceUrl: String(location.href || "")
      }, "\x2a"), !0;
    } catch {
      return !1;
    }
  };
  let _0x87f761_6 = (..._a9f2cb8f2600) => _0x87f761_4(_a9f2cb8f2600[0]) && _0x87f761_5(_a9f2cb8f2600[0]) ? null : !_0x87f761_1() && _e09eddacd27a ? _e09eddacd27a(..._a9f2cb8f2600) : _0x87f761_3();
  try {
    "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _e09eddacd27a && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof \u{50}\u{72}\u{6f}\u{78}\u{79} && (_0x87f761_6 = new \u{50}\u{72}\u{6f}\u{78}\u{79}(_e09eddacd27a, {
      apply: (_e09eddacd27a, _a9f2cb8f2600, _79c59da0733c) => _0x87f761_4(_79c59da0733c[0]) && _0x87f761_5(_79c59da0733c[0]) ? null : _0x87f761_1() ? _0x87f761_3() : Reflect.apply(_e09eddacd27a, _a9f2cb8f2600, _79c59da0733c),
      construct(_e09eddacd27a, _a9f2cb8f2600, _79c59da0733c) {
        if (!_0x87f761_1()) try {
          return Reflect.construct(_e09eddacd27a, _a9f2cb8f2600, _79c59da0733c);
        } catch {
          return Reflect.apply(_e09eddacd27a, window, _a9f2cb8f2600);
        }
        return _0x87f761_3();
      },
      get: (_e09eddacd27a, _a9f2cb8f2600, _79c59da0733c) => "\x5f\x5f\x6e\x79\x78\x50\x6f\x70\x75\x70\x47\x75\x61\x72\x64" === _a9f2cb8f2600 || ("\x74\x6f\x53\x74\x72\x69\x6e\x67" === _a9f2cb8f2600 ? () => "\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x6f\x70\x65\x6e\x28\x29\x20\x7b\x20\x5b\x6e\x61\x74\x69\x76\x65\x20\x63\x6f\x64\x65\x5d\x20\x7d" : Reflect.get(_e09eddacd27a, _a9f2cb8f2600, _79c59da0733c))
    }));
  } catch {}
  const _0x87f761_7 = _e09eddacd27a => {
    const _a9f2cb8f2600 = String(_e09eddacd27a || "").toLowerCase();
    return _a9f2cb8f2600 && ![ "\x5f\x73\x65\x6c\x66", "\x5f\x70\x61\x72\x65\x6e\x74", "\x5f\x74\x6f\x70" ].includes(_a9f2cb8f2600);
  }, _0x87f761_8 = _e09eddacd27a => !!_e09eddacd27a && (!!_e09eddacd27a.hasAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || _0x87f761_4(_e09eddacd27a.href || _e09eddacd27a.getAttribute("\x68\x72\x65\x66") || ""));
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
    const _e09eddacd27a = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!_0x87f761_8(this) || !_0x87f761_5(this.href || this.getAttribute("\x68\x72\x65\x66"), this.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "")) {
        if (!_0x87f761_1() || !_0x87f761_7(this.target)) return _e09eddacd27a.call(this);
        _0x87f761_3();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("\x63\x6c\x69\x63\x6b", _e09eddacd27a => {
    const _a9f2cb8f2600 = _e09eddacd27a.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_a9f2cb8f2600) return _0x87f761_8(_a9f2cb8f2600) && _0x87f761_5(_a9f2cb8f2600.href || _a9f2cb8f2600.getAttribute("\x68\x72\x65\x66"), _a9f2cb8f2600.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_e09eddacd27a.preventDefault(), 
    void _e09eddacd27a.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_a9f2cb8f2600.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_e09eddacd27a.preventDefault(), 
    _e09eddacd27a.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x61\x75\x78\x63\x6c\x69\x63\x6b", _e09eddacd27a => {
    const _a9f2cb8f2600 = _e09eddacd27a.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_a9f2cb8f2600) return _0x87f761_8(_a9f2cb8f2600) && _0x87f761_5(_a9f2cb8f2600.href || _a9f2cb8f2600.getAttribute("\x68\x72\x65\x66"), _a9f2cb8f2600.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_e09eddacd27a.preventDefault(), 
    void _e09eddacd27a.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_a9f2cb8f2600.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_e09eddacd27a.preventDefault(), 
    _e09eddacd27a.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x73\x75\x62\x6d\x69\x74", _e09eddacd27a => {
    if (!_0x87f761_1()) return;
    const _a9f2cb8f2600 = _e09eddacd27a.target;
    _a9f2cb8f2600 && "\x46\x4f\x52\x4d" === String(_a9f2cb8f2600.tagName || "").toUpperCase() && _0x87f761_7(_a9f2cb8f2600.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_e09eddacd27a.preventDefault(), 
    _e09eddacd27a.stopImmediatePropagation(), _0x87f761_3());
  }, !0));
  const _0x87f761_9 = _e09eddacd27a => {
    const _a9f2cb8f2600 = window[_e09eddacd27a];
    if ("\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _a9f2cb8f2600 && !_a9f2cb8f2600.__nyxWrapped) try {
      Object.setPrototypeOf(_0x87f761_2, _a9f2cb8f2600), _0x87f761_2.prototype = _a9f2cb8f2600.prototype, 
      Object.defineProperty(_0x87f761_2, "\x5f\x5f\x6e\x79\x78\x57\x72\x61\x70\x70\x65\x64", {
        value: !0
      }), window[_e09eddacd27a] = _0x87f761_2;
    } catch {}
    function _0x87f761_2(_e09eddacd27a, _79c59da0733c, _a7b5d6556e98) {
      let _141655aa0ff7 = Number(_e09eddacd27a), _895af8cdaf7e = Number(_79c59da0733c);
      return (!Number.isFinite(_141655aa0ff7) || _141655aa0ff7 < 0) && (_141655aa0ff7 = 0), 
      (!Number.isFinite(_895af8cdaf7e) || _895af8cdaf7e <= _141655aa0ff7) && (_895af8cdaf7e = _141655aa0ff7 + .001), 
      Reflect.construct(_a9f2cb8f2600, [ _141655aa0ff7, _895af8cdaf7e, null == _a7b5d6556e98 ? "" : String(_a7b5d6556e98) ], new.target || _0x87f761_2);
    }
  };
  _0x87f761_9("\x56\x54\x54\x43\x75\x65"), _0x87f761_9("\x54\x65\x78\x74\x54\x72\x61\x63\x6b\x43\x75\x65");
})();
