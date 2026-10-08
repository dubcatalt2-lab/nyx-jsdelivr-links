(() => {
  if ("\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" == typeof window || window.\u{5f}\u{5f}\u{6e}\u{79}\u{78}\u{53}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74}\u{47}\u{75}\u{61}\u{72}\u{64}\u{73}) return;
  window.\u{5f}\u{5f}\u{6e}\u{79}\u{78}\u{53}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74}\u{47}\u{75}\u{61}\u{72}\u{64}\u{73} = !0;
  const _b396ec9f522c = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "\x74\x72\x75\x73\x74\x65\x64\x54\x79\x70\x65\x73", {
      configurable: !0,
      value: {
        createPolicy: (_b396ec9f522c, _7cfe3149450a = {}) => ({
          createHTML: _b396ec9f522c => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _7cfe3149450a.createHTML ? _7cfe3149450a.createHTML(_b396ec9f522c) : _b396ec9f522c,
          createScript: _b396ec9f522c => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _7cfe3149450a.createScript ? _7cfe3149450a.createScript(_b396ec9f522c) : _b396ec9f522c,
          createScriptURL: _b396ec9f522c => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _7cfe3149450a.createScriptURL ? _7cfe3149450a.createScriptURL(_b396ec9f522c) : _b396ec9f522c
        })
      }
    });
  } catch {}
  try {
    const _b396ec9f522c = Object.getOwnPropertyDescriptor(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74"), _7cfe3149450a = document.createElement("\x73\x63\x72\x69\x70\x74");
    _7cfe3149450a.setAttribute("\x6e\x6f\x6e\x63\x65", ""), Object.defineProperty(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74", {
      configurable: !0,
      get() {
        let _1fd14bc9f6db = null;
        try {
          _1fd14bc9f6db = _b396ec9f522c?.get?.call(this) || null;
        } catch {}
        return _1fd14bc9f6db || this.querySelector?.("\x73\x63\x72\x69\x70\x74\x5b\x73\x72\x63\x5d\x2c\x73\x63\x72\x69\x70\x74") || _7cfe3149450a;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const _0x87f761_0 = _b396ec9f522c => !(!_b396ec9f522c || !_b396ec9f522c.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_b396ec9f522c.tagName || "")), _0x87f761_1 = _b396ec9f522c => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_b396ec9f522c?.tagName || "") ? String(_b396ec9f522c.value || "").slice(_b396ec9f522c.selectionStart || 0, _b396ec9f522c.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, _0x87f761_2 = (_b396ec9f522c, _7cfe3149450a) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_b396ec9f522c?.tagName || "")) {
            const _1fd14bc9f6db = _b396ec9f522c.selectionStart || 0, _bf3d7bffeff8 = _b396ec9f522c.selectionEnd || 0, _6af80ea97fb0 = String(_b396ec9f522c.value || "");
            _b396ec9f522c.value = _6af80ea97fb0.slice(0, _1fd14bc9f6db) + _7cfe3149450a + _6af80ea97fb0.slice(_bf3d7bffeff8);
            const _2f1227eb8c3e = _1fd14bc9f6db + String(_7cfe3149450a).length;
            return _b396ec9f522c.setSelectionRange(_2f1227eb8c3e, _2f1227eb8c3e), void _b396ec9f522c.dispatchEvent(new Event("\x69\x6e\x70\x75\x74", {
              bubbles: !0
            }));
          }
          document.execCommand?.("\x69\x6e\x73\x65\x72\x74\x54\x65\x78\x74", !1, _7cfe3149450a);
        } catch {}
      }, _0x87f761_3 = async _b396ec9f522c => {
        try {
          await (navigator.clipboard?.writeText(String(_b396ec9f522c || "")));
        } catch {
          try {
            document.execCommand?.("\x63\x6f\x70\x79");
          } catch {}
        }
      }, _b396ec9f522c = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _7cfe3149450a = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), _0x87f761_6 = _1fd14bc9f6db => {
        try {
          _b396ec9f522c?.postMessage(_1fd14bc9f6db, "\x2a");
        } catch {}
        try {
          _7cfe3149450a && _7cfe3149450a !== _b396ec9f522c && _7cfe3149450a.postMessage(_1fd14bc9f6db, "\x2a");
        } catch {}
        try {
          window.parent?.postMessage(_1fd14bc9f6db, "\x2a");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_1fd14bc9f6db, "\x2a");
        } catch {}
      };
      window.addEventListener("\x6b\x65\x79\x64\x6f\x77\x6e", _b396ec9f522c => {
        const _7cfe3149450a = String(_b396ec9f522c.key || "").toLowerCase();
        if (_b396ec9f522c.altKey && !_b396ec9f522c.ctrlKey && !_b396ec9f522c.metaKey && 2 !== _b396ec9f522c.location && "\x61\x6c\x74" === _7cfe3149450a) return _b396ec9f522c.preventDefault(), 
        _b396ec9f522c.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x70\x72\x69\x6d\x65"
        });
        if (_b396ec9f522c.altKey && !_b396ec9f522c.ctrlKey && !_b396ec9f522c.metaKey && 2 !== _b396ec9f522c.location && _0x87f761_0(_b396ec9f522c.target) && /^[acxvzy]$/.test(_7cfe3149450a)) {
          if (_b396ec9f522c.preventDefault(), _b396ec9f522c.stopPropagation(), "\x61" === _7cfe3149450a) return void (_b396ec9f522c.target?.select ? _b396ec9f522c.target.select() : document.execCommand?.("\x73\x65\x6c\x65\x63\x74\x41\x6c\x6c"));
          if ("\x63" === _7cfe3149450a) return void _0x87f761_3(_0x87f761_1(_b396ec9f522c.target));
          if ("\x78" === _7cfe3149450a) {
            const _7cfe3149450a = _0x87f761_1(_b396ec9f522c.target);
            return _0x87f761_3(_7cfe3149450a), void _0x87f761_2(_b396ec9f522c.target, "");
          }
          if ("\x76" === _7cfe3149450a) return void navigator.clipboard?.readText?.().then(_7cfe3149450a => _0x87f761_2(_b396ec9f522c.target, _7cfe3149450a)).catch(() => {
            try {
              document.execCommand?.("\x70\x61\x73\x74\x65");
            } catch {}
          });
          if ("\x7a" === _7cfe3149450a) return void document.execCommand?.("\x75\x6e\x64\x6f");
          if ("\x79" === _7cfe3149450a) return void document.execCommand?.("\x72\x65\x64\x6f");
        }
        return !_b396ec9f522c.altKey || _b396ec9f522c.ctrlKey || _b396ec9f522c.metaKey || 2 === _b396ec9f522c.location || !/^[1-9]$/.test(_7cfe3149450a) && ![ "\x6c", "\x64", "\x74", "\x77", "\x72", "\x61\x72\x72\x6f\x77\x6c\x65\x66\x74", "\x61\x72\x72\x6f\x77\x72\x69\x67\x68\x74", "\x74\x61\x62" ].includes(_7cfe3149450a) ? void 0 : (_b396ec9f522c.preventDefault(), 
        _b396ec9f522c.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x73\x68\x6f\x72\x74\x63\x75\x74",
          key: _7cfe3149450a,
          code: _b396ec9f522c.code || "",
          location: _b396ec9f522c.location || 0,
          shiftKey: !!_b396ec9f522c.shiftKey
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
  }, _0x87f761_2 = _b396ec9f522c => {
    if (!_b396ec9f522c) return !1;
    try {
      return _b396ec9f522c.document.open(), _b396ec9f522c.document.write("\x3c\x21\x64\x6f\x63\x74\x79\x70\x65\x20\x68\x74\x6d\x6c\x3e\x3c\x68\x74\x6d\x6c\x3e\x3c\x68\x65\x61\x64\x3e\x3c\x6d\x65\x74\x61\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x22\x75\x74\x66\x2d\x38\x22\x3e\x3c\x6d\x65\x74\x61\x20\x6e\x61\x6d\x65\x3d\x22\x76\x69\x65\x77\x70\x6f\x72\x74\x22\x20\x63\x6f\x6e\x74\x65\x6e\x74\x3d\x22\x77\x69\x64\x74\x68\x3d\x64\x65\x76\x69\x63\x65\x2d\x77\x69\x64\x74\x68\x2c\x69\x6e\x69\x74\x69\x61\x6c\x2d\x73\x63\x61\x6c\x65\x3d\x31\x22\x3e\x3c\x74\x69\x74\x6c\x65\x3e\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61\x3c\x2f\x74\x69\x74\x6c\x65\x3e\x3c\x73\x74\x79\x6c\x65\x3e\x68\x74\x6d\x6c\x2c\x62\x6f\x64\x79\x7b\x6d\x61\x72\x67\x69\x6e\x3a\x30\x3b\x77\x69\x64\x74\x68\x3a\x31\x30\x30\x25\x3b\x68\x65\x69\x67\x68\x74\x3a\x31\x30\x30\x25\x3b\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x3a\x23\x66\x66\x66\x3b\x63\x6f\x6c\x6f\x72\x3a\x23\x31\x31\x31\x3b\x66\x6f\x6e\x74\x3a\x32\x38\x70\x78\x20\x52\x61\x6c\x65\x77\x61\x79\x2c\x41\x72\x69\x61\x6c\x2c\x73\x61\x6e\x73\x2d\x73\x65\x72\x69\x66\x7d\x62\x6f\x64\x79\x7b\x64\x69\x73\x70\x6c\x61\x79\x3a\x67\x72\x69\x64\x3b\x70\x6c\x61\x63\x65\x2d\x69\x74\x65\x6d\x73\x3a\x63\x65\x6e\x74\x65\x72\x3b\x74\x65\x78\x74\x2d\x61\x6c\x69\x67\x6e\x3a\x63\x65\x6e\x74\x65\x72\x7d\x6d\x61\x69\x6e\x7b\x70\x61\x64\x64\x69\x6e\x67\x3a\x32\x34\x70\x78\x7d\x3c\x2f\x73\x74\x79\x6c\x65\x3e\x3c\x2f\x68\x65\x61\x64\x3e\x3c\x62\x6f\x64\x79\x3e\x3c\x6d\x61\x69\x6e\x3e\x61\x72\x65\x20\x79\x6f\x75\x20\x74\x72\x79\x69\x6e\x67\x20\x74\x6f\x20\x68\x61\x63\x6b\x20\x6d\x65\x20\x73\x63\x61\x6d\x6d\x61\x3f\x3f\x3f\x3c\x2f\x6d\x61\x69\x6e\x3e\x3c\x2f\x62\x6f\x64\x79\x3e\x3c\x2f\x68\x74\x6d\x6c\x3e"), 
      _b396ec9f522c.document.close(), _b396ec9f522c.focus?.(), !0;
    } catch {
      return !1;
    }
  }, _0x87f761_3 = () => {
    const _b396ec9f522c = null;
    return {
      closed: !1,
      focus() {
        try {
          _b396ec9f522c?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _b396ec9f522c?.blur?.();
        } catch {}
      },
      close() {
        try {
          _b396ec9f522c?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return _0x87f761_2(_b396ec9f522c), this;
        },
        write() {
          _0x87f761_2(_b396ec9f522c);
        },
        writeln() {
          _0x87f761_2(_b396ec9f522c);
        },
        close() {
          _0x87f761_2(_b396ec9f522c);
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
          _0x87f761_2(_b396ec9f522c);
        },
        toString: () => "\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61"
      }
    };
  }, _0x87f761_4 = _b396ec9f522c => {
    const _7cfe3149450a = String(_b396ec9f522c || "").trim();
    if (/^(?:blob|data):/i.test(_7cfe3149450a)) return !1;
    const _1fd14bc9f6db = _7cfe3149450a.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_1fd14bc9f6db);
  }, _0x87f761_5 = (_b396ec9f522c, _7cfe3149450a = "") => {
    const _1fd14bc9f6db = String(_b396ec9f522c || "").trim();
    if (!_1fd14bc9f6db || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "\x6e\x79\x78\x3a\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x2d\x72\x65\x71\x75\x65\x73\x74",
        url: _1fd14bc9f6db,
        filename: String(_7cfe3149450a || ""),
        sourceUrl: String(location.href || "")
      }, "\x2a"), !0;
    } catch {
      return !1;
    }
  };
  let _0x87f761_6 = (..._7cfe3149450a) => _0x87f761_4(_7cfe3149450a[0]) && _0x87f761_5(_7cfe3149450a[0]) ? null : !_0x87f761_1() && _b396ec9f522c ? _b396ec9f522c(..._7cfe3149450a) : _0x87f761_3();
  try {
    "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _b396ec9f522c && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof \u{50}\u{72}\u{6f}\u{78}\u{79} && (_0x87f761_6 = new \u{50}\u{72}\u{6f}\u{78}\u{79}(_b396ec9f522c, {
      apply: (_b396ec9f522c, _7cfe3149450a, _1fd14bc9f6db) => _0x87f761_4(_1fd14bc9f6db[0]) && _0x87f761_5(_1fd14bc9f6db[0]) ? null : _0x87f761_1() ? _0x87f761_3() : Reflect.apply(_b396ec9f522c, _7cfe3149450a, _1fd14bc9f6db),
      construct(_b396ec9f522c, _7cfe3149450a, _1fd14bc9f6db) {
        if (!_0x87f761_1()) try {
          return Reflect.construct(_b396ec9f522c, _7cfe3149450a, _1fd14bc9f6db);
        } catch {
          return Reflect.apply(_b396ec9f522c, window, _7cfe3149450a);
        }
        return _0x87f761_3();
      },
      get: (_b396ec9f522c, _7cfe3149450a, _1fd14bc9f6db) => "\x5f\x5f\x6e\x79\x78\x50\x6f\x70\x75\x70\x47\x75\x61\x72\x64" === _7cfe3149450a || ("\x74\x6f\x53\x74\x72\x69\x6e\x67" === _7cfe3149450a ? () => "\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x6f\x70\x65\x6e\x28\x29\x20\x7b\x20\x5b\x6e\x61\x74\x69\x76\x65\x20\x63\x6f\x64\x65\x5d\x20\x7d" : Reflect.get(_b396ec9f522c, _7cfe3149450a, _1fd14bc9f6db))
    }));
  } catch {}
  const _0x87f761_7 = _b396ec9f522c => {
    const _7cfe3149450a = String(_b396ec9f522c || "").toLowerCase();
    return _7cfe3149450a && ![ "\x5f\x73\x65\x6c\x66", "\x5f\x70\x61\x72\x65\x6e\x74", "\x5f\x74\x6f\x70" ].includes(_7cfe3149450a);
  }, _0x87f761_8 = _b396ec9f522c => !!_b396ec9f522c && (!!_b396ec9f522c.hasAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || _0x87f761_4(_b396ec9f522c.href || _b396ec9f522c.getAttribute("\x68\x72\x65\x66") || ""));
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
    const _b396ec9f522c = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!_0x87f761_8(this) || !_0x87f761_5(this.href || this.getAttribute("\x68\x72\x65\x66"), this.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "")) {
        if (!_0x87f761_1() || !_0x87f761_7(this.target)) return _b396ec9f522c.call(this);
        _0x87f761_3();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("\x63\x6c\x69\x63\x6b", _b396ec9f522c => {
    const _7cfe3149450a = _b396ec9f522c.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_7cfe3149450a) return _0x87f761_8(_7cfe3149450a) && _0x87f761_5(_7cfe3149450a.href || _7cfe3149450a.getAttribute("\x68\x72\x65\x66"), _7cfe3149450a.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_b396ec9f522c.preventDefault(), 
    void _b396ec9f522c.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_7cfe3149450a.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_b396ec9f522c.preventDefault(), 
    _b396ec9f522c.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x61\x75\x78\x63\x6c\x69\x63\x6b", _b396ec9f522c => {
    const _7cfe3149450a = _b396ec9f522c.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_7cfe3149450a) return _0x87f761_8(_7cfe3149450a) && _0x87f761_5(_7cfe3149450a.href || _7cfe3149450a.getAttribute("\x68\x72\x65\x66"), _7cfe3149450a.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_b396ec9f522c.preventDefault(), 
    void _b396ec9f522c.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_7cfe3149450a.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_b396ec9f522c.preventDefault(), 
    _b396ec9f522c.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x73\x75\x62\x6d\x69\x74", _b396ec9f522c => {
    if (!_0x87f761_1()) return;
    const _7cfe3149450a = _b396ec9f522c.target;
    _7cfe3149450a && "\x46\x4f\x52\x4d" === String(_7cfe3149450a.tagName || "").toUpperCase() && _0x87f761_7(_7cfe3149450a.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_b396ec9f522c.preventDefault(), 
    _b396ec9f522c.stopImmediatePropagation(), _0x87f761_3());
  }, !0));
  const _0x87f761_9 = _b396ec9f522c => {
    const _7cfe3149450a = window[_b396ec9f522c];
    if ("\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _7cfe3149450a && !_7cfe3149450a.__nyxWrapped) try {
      Object.setPrototypeOf(_0x87f761_2, _7cfe3149450a), _0x87f761_2.prototype = _7cfe3149450a.prototype, 
      Object.defineProperty(_0x87f761_2, "\x5f\x5f\x6e\x79\x78\x57\x72\x61\x70\x70\x65\x64", {
        value: !0
      }), window[_b396ec9f522c] = _0x87f761_2;
    } catch {}
    function _0x87f761_2(_b396ec9f522c, _1fd14bc9f6db, _bf3d7bffeff8) {
      let _6af80ea97fb0 = Number(_b396ec9f522c), _2f1227eb8c3e = Number(_1fd14bc9f6db);
      return (!Number.isFinite(_6af80ea97fb0) || _6af80ea97fb0 < 0) && (_6af80ea97fb0 = 0), 
      (!Number.isFinite(_2f1227eb8c3e) || _2f1227eb8c3e <= _6af80ea97fb0) && (_2f1227eb8c3e = _6af80ea97fb0 + .001), 
      Reflect.construct(_7cfe3149450a, [ _6af80ea97fb0, _2f1227eb8c3e, null == _bf3d7bffeff8 ? "" : String(_bf3d7bffeff8) ], new.target || _0x87f761_2);
    }
  };
  _0x87f761_9("\x56\x54\x54\x43\x75\x65"), _0x87f761_9("\x54\x65\x78\x74\x54\x72\x61\x63\x6b\x43\x75\x65");
})();
