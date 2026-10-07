(() => {
  if ("\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" == typeof window || window.\u{5f}\u{5f}\u{6e}\u{79}\u{78}\u{53}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74}\u{47}\u{75}\u{61}\u{72}\u{64}\u{73}) return;
  window.\u{5f}\u{5f}\u{6e}\u{79}\u{78}\u{53}\u{63}\u{72}\u{61}\u{6d}\u{6a}\u{65}\u{74}\u{47}\u{75}\u{61}\u{72}\u{64}\u{73} = !0;
  const _4fe6c60a132e = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "\x74\x72\x75\x73\x74\x65\x64\x54\x79\x70\x65\x73", {
      configurable: !0,
      value: {
        createPolicy: (_4fe6c60a132e, _dc7a6c287ffe = {}) => ({
          createHTML: _4fe6c60a132e => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _dc7a6c287ffe.createHTML ? _dc7a6c287ffe.createHTML(_4fe6c60a132e) : _4fe6c60a132e,
          createScript: _4fe6c60a132e => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _dc7a6c287ffe.createScript ? _dc7a6c287ffe.createScript(_4fe6c60a132e) : _4fe6c60a132e,
          createScriptURL: _4fe6c60a132e => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _dc7a6c287ffe.createScriptURL ? _dc7a6c287ffe.createScriptURL(_4fe6c60a132e) : _4fe6c60a132e
        })
      }
    });
  } catch {}
  try {
    const _4fe6c60a132e = Object.getOwnPropertyDescriptor(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74"), _dc7a6c287ffe = document.createElement("\x73\x63\x72\x69\x70\x74");
    _dc7a6c287ffe.setAttribute("\x6e\x6f\x6e\x63\x65", ""), Object.defineProperty(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74", {
      configurable: !0,
      get() {
        let _55d6b546005d = null;
        try {
          _55d6b546005d = _4fe6c60a132e?.get?.call(this) || null;
        } catch {}
        return _55d6b546005d || this.querySelector?.("\x73\x63\x72\x69\x70\x74\x5b\x73\x72\x63\x5d\x2c\x73\x63\x72\x69\x70\x74") || _dc7a6c287ffe;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const _0x87f761_0 = _4fe6c60a132e => !(!_4fe6c60a132e || !_4fe6c60a132e.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_4fe6c60a132e.tagName || "")), _0x87f761_1 = _4fe6c60a132e => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_4fe6c60a132e?.tagName || "") ? String(_4fe6c60a132e.value || "").slice(_4fe6c60a132e.selectionStart || 0, _4fe6c60a132e.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, _0x87f761_2 = (_4fe6c60a132e, _dc7a6c287ffe) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_4fe6c60a132e?.tagName || "")) {
            const _55d6b546005d = _4fe6c60a132e.selectionStart || 0, _bc7a740f473b = _4fe6c60a132e.selectionEnd || 0, _459e95173984 = String(_4fe6c60a132e.value || "");
            _4fe6c60a132e.value = _459e95173984.slice(0, _55d6b546005d) + _dc7a6c287ffe + _459e95173984.slice(_bc7a740f473b);
            const _ab6ff45d6cf1 = _55d6b546005d + String(_dc7a6c287ffe).length;
            return _4fe6c60a132e.setSelectionRange(_ab6ff45d6cf1, _ab6ff45d6cf1), void _4fe6c60a132e.dispatchEvent(new Event("\x69\x6e\x70\x75\x74", {
              bubbles: !0
            }));
          }
          document.execCommand?.("\x69\x6e\x73\x65\x72\x74\x54\x65\x78\x74", !1, _dc7a6c287ffe);
        } catch {}
      }, _0x87f761_3 = async _4fe6c60a132e => {
        try {
          await (navigator.clipboard?.writeText(String(_4fe6c60a132e || "")));
        } catch {
          try {
            document.execCommand?.("\x63\x6f\x70\x79");
          } catch {}
        }
      }, _4fe6c60a132e = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _dc7a6c287ffe = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), _0x87f761_6 = _55d6b546005d => {
        try {
          _4fe6c60a132e?.postMessage(_55d6b546005d, "\x2a");
        } catch {}
        try {
          _dc7a6c287ffe && _dc7a6c287ffe !== _4fe6c60a132e && _dc7a6c287ffe.postMessage(_55d6b546005d, "\x2a");
        } catch {}
        try {
          window.parent?.postMessage(_55d6b546005d, "\x2a");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_55d6b546005d, "\x2a");
        } catch {}
      };
      window.addEventListener("\x6b\x65\x79\x64\x6f\x77\x6e", _4fe6c60a132e => {
        const _dc7a6c287ffe = String(_4fe6c60a132e.key || "").toLowerCase();
        if (_4fe6c60a132e.altKey && !_4fe6c60a132e.ctrlKey && !_4fe6c60a132e.metaKey && 2 !== _4fe6c60a132e.location && "\x61\x6c\x74" === _dc7a6c287ffe) return _4fe6c60a132e.preventDefault(), 
        _4fe6c60a132e.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x70\x72\x69\x6d\x65"
        });
        if (_4fe6c60a132e.altKey && !_4fe6c60a132e.ctrlKey && !_4fe6c60a132e.metaKey && 2 !== _4fe6c60a132e.location && _0x87f761_0(_4fe6c60a132e.target) && /^[acxvzy]$/.test(_dc7a6c287ffe)) {
          if (_4fe6c60a132e.preventDefault(), _4fe6c60a132e.stopPropagation(), "\x61" === _dc7a6c287ffe) return void (_4fe6c60a132e.target?.select ? _4fe6c60a132e.target.select() : document.execCommand?.("\x73\x65\x6c\x65\x63\x74\x41\x6c\x6c"));
          if ("\x63" === _dc7a6c287ffe) return void _0x87f761_3(_0x87f761_1(_4fe6c60a132e.target));
          if ("\x78" === _dc7a6c287ffe) {
            const _dc7a6c287ffe = _0x87f761_1(_4fe6c60a132e.target);
            return _0x87f761_3(_dc7a6c287ffe), void _0x87f761_2(_4fe6c60a132e.target, "");
          }
          if ("\x76" === _dc7a6c287ffe) return void navigator.clipboard?.readText?.().then(_dc7a6c287ffe => _0x87f761_2(_4fe6c60a132e.target, _dc7a6c287ffe)).catch(() => {
            try {
              document.execCommand?.("\x70\x61\x73\x74\x65");
            } catch {}
          });
          if ("\x7a" === _dc7a6c287ffe) return void document.execCommand?.("\x75\x6e\x64\x6f");
          if ("\x79" === _dc7a6c287ffe) return void document.execCommand?.("\x72\x65\x64\x6f");
        }
        return !_4fe6c60a132e.altKey || _4fe6c60a132e.ctrlKey || _4fe6c60a132e.metaKey || 2 === _4fe6c60a132e.location || !/^[1-9]$/.test(_dc7a6c287ffe) && ![ "\x6c", "\x64", "\x74", "\x77", "\x72", "\x61\x72\x72\x6f\x77\x6c\x65\x66\x74", "\x61\x72\x72\x6f\x77\x72\x69\x67\x68\x74", "\x74\x61\x62" ].includes(_dc7a6c287ffe) ? void 0 : (_4fe6c60a132e.preventDefault(), 
        _4fe6c60a132e.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x73\x68\x6f\x72\x74\x63\x75\x74",
          key: _dc7a6c287ffe,
          code: _4fe6c60a132e.code || "",
          location: _4fe6c60a132e.location || 0,
          shiftKey: !!_4fe6c60a132e.shiftKey
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
  }, _0x87f761_2 = _4fe6c60a132e => {
    if (!_4fe6c60a132e) return !1;
    try {
      return _4fe6c60a132e.document.open(), _4fe6c60a132e.document.write("\x3c\x21\x64\x6f\x63\x74\x79\x70\x65\x20\x68\x74\x6d\x6c\x3e\x3c\x68\x74\x6d\x6c\x3e\x3c\x68\x65\x61\x64\x3e\x3c\x6d\x65\x74\x61\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x22\x75\x74\x66\x2d\x38\x22\x3e\x3c\x6d\x65\x74\x61\x20\x6e\x61\x6d\x65\x3d\x22\x76\x69\x65\x77\x70\x6f\x72\x74\x22\x20\x63\x6f\x6e\x74\x65\x6e\x74\x3d\x22\x77\x69\x64\x74\x68\x3d\x64\x65\x76\x69\x63\x65\x2d\x77\x69\x64\x74\x68\x2c\x69\x6e\x69\x74\x69\x61\x6c\x2d\x73\x63\x61\x6c\x65\x3d\x31\x22\x3e\x3c\x74\x69\x74\x6c\x65\x3e\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61\x3c\x2f\x74\x69\x74\x6c\x65\x3e\x3c\x73\x74\x79\x6c\x65\x3e\x68\x74\x6d\x6c\x2c\x62\x6f\x64\x79\x7b\x6d\x61\x72\x67\x69\x6e\x3a\x30\x3b\x77\x69\x64\x74\x68\x3a\x31\x30\x30\x25\x3b\x68\x65\x69\x67\x68\x74\x3a\x31\x30\x30\x25\x3b\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x3a\x23\x66\x66\x66\x3b\x63\x6f\x6c\x6f\x72\x3a\x23\x31\x31\x31\x3b\x66\x6f\x6e\x74\x3a\x32\x38\x70\x78\x20\x52\x61\x6c\x65\x77\x61\x79\x2c\x41\x72\x69\x61\x6c\x2c\x73\x61\x6e\x73\x2d\x73\x65\x72\x69\x66\x7d\x62\x6f\x64\x79\x7b\x64\x69\x73\x70\x6c\x61\x79\x3a\x67\x72\x69\x64\x3b\x70\x6c\x61\x63\x65\x2d\x69\x74\x65\x6d\x73\x3a\x63\x65\x6e\x74\x65\x72\x3b\x74\x65\x78\x74\x2d\x61\x6c\x69\x67\x6e\x3a\x63\x65\x6e\x74\x65\x72\x7d\x6d\x61\x69\x6e\x7b\x70\x61\x64\x64\x69\x6e\x67\x3a\x32\x34\x70\x78\x7d\x3c\x2f\x73\x74\x79\x6c\x65\x3e\x3c\x2f\x68\x65\x61\x64\x3e\x3c\x62\x6f\x64\x79\x3e\x3c\x6d\x61\x69\x6e\x3e\x61\x72\x65\x20\x79\x6f\x75\x20\x74\x72\x79\x69\x6e\x67\x20\x74\x6f\x20\x68\x61\x63\x6b\x20\x6d\x65\x20\x73\x63\x61\x6d\x6d\x61\x3f\x3f\x3f\x3c\x2f\x6d\x61\x69\x6e\x3e\x3c\x2f\x62\x6f\x64\x79\x3e\x3c\x2f\x68\x74\x6d\x6c\x3e"), 
      _4fe6c60a132e.document.close(), _4fe6c60a132e.focus?.(), !0;
    } catch {
      return !1;
    }
  }, _0x87f761_3 = () => {
    const _4fe6c60a132e = null;
    return {
      closed: !1,
      focus() {
        try {
          _4fe6c60a132e?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _4fe6c60a132e?.blur?.();
        } catch {}
      },
      close() {
        try {
          _4fe6c60a132e?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return _0x87f761_2(_4fe6c60a132e), this;
        },
        write() {
          _0x87f761_2(_4fe6c60a132e);
        },
        writeln() {
          _0x87f761_2(_4fe6c60a132e);
        },
        close() {
          _0x87f761_2(_4fe6c60a132e);
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
          _0x87f761_2(_4fe6c60a132e);
        },
        toString: () => "\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61"
      }
    };
  }, _0x87f761_4 = _4fe6c60a132e => {
    const _dc7a6c287ffe = String(_4fe6c60a132e || "").trim();
    if (/^(?:blob|data):/i.test(_dc7a6c287ffe)) return !1;
    const _55d6b546005d = _dc7a6c287ffe.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_55d6b546005d);
  }, _0x87f761_5 = (_4fe6c60a132e, _dc7a6c287ffe = "") => {
    const _55d6b546005d = String(_4fe6c60a132e || "").trim();
    if (!_55d6b546005d || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "\x6e\x79\x78\x3a\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x2d\x72\x65\x71\x75\x65\x73\x74",
        url: _55d6b546005d,
        filename: String(_dc7a6c287ffe || ""),
        sourceUrl: String(location.href || "")
      }, "\x2a"), !0;
    } catch {
      return !1;
    }
  };
  let _0x87f761_6 = (..._dc7a6c287ffe) => _0x87f761_4(_dc7a6c287ffe[0]) && _0x87f761_5(_dc7a6c287ffe[0]) ? null : !_0x87f761_1() && _4fe6c60a132e ? _4fe6c60a132e(..._dc7a6c287ffe) : _0x87f761_3();
  try {
    "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _4fe6c60a132e && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof \u{50}\u{72}\u{6f}\u{78}\u{79} && (_0x87f761_6 = new \u{50}\u{72}\u{6f}\u{78}\u{79}(_4fe6c60a132e, {
      apply: (_4fe6c60a132e, _dc7a6c287ffe, _55d6b546005d) => _0x87f761_4(_55d6b546005d[0]) && _0x87f761_5(_55d6b546005d[0]) ? null : _0x87f761_1() ? _0x87f761_3() : Reflect.apply(_4fe6c60a132e, _dc7a6c287ffe, _55d6b546005d),
      construct(_4fe6c60a132e, _dc7a6c287ffe, _55d6b546005d) {
        if (!_0x87f761_1()) try {
          return Reflect.construct(_4fe6c60a132e, _dc7a6c287ffe, _55d6b546005d);
        } catch {
          return Reflect.apply(_4fe6c60a132e, window, _dc7a6c287ffe);
        }
        return _0x87f761_3();
      },
      get: (_4fe6c60a132e, _dc7a6c287ffe, _55d6b546005d) => "\x5f\x5f\x6e\x79\x78\x50\x6f\x70\x75\x70\x47\x75\x61\x72\x64" === _dc7a6c287ffe || ("\x74\x6f\x53\x74\x72\x69\x6e\x67" === _dc7a6c287ffe ? () => "\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x6f\x70\x65\x6e\x28\x29\x20\x7b\x20\x5b\x6e\x61\x74\x69\x76\x65\x20\x63\x6f\x64\x65\x5d\x20\x7d" : Reflect.get(_4fe6c60a132e, _dc7a6c287ffe, _55d6b546005d))
    }));
  } catch {}
  const _0x87f761_7 = _4fe6c60a132e => {
    const _dc7a6c287ffe = String(_4fe6c60a132e || "").toLowerCase();
    return _dc7a6c287ffe && ![ "\x5f\x73\x65\x6c\x66", "\x5f\x70\x61\x72\x65\x6e\x74", "\x5f\x74\x6f\x70" ].includes(_dc7a6c287ffe);
  }, _0x87f761_8 = _4fe6c60a132e => !!_4fe6c60a132e && (!!_4fe6c60a132e.hasAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || _0x87f761_4(_4fe6c60a132e.href || _4fe6c60a132e.getAttribute("\x68\x72\x65\x66") || ""));
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
    const _4fe6c60a132e = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!_0x87f761_8(this) || !_0x87f761_5(this.href || this.getAttribute("\x68\x72\x65\x66"), this.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "")) {
        if (!_0x87f761_1() || !_0x87f761_7(this.target)) return _4fe6c60a132e.call(this);
        _0x87f761_3();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("\x63\x6c\x69\x63\x6b", _4fe6c60a132e => {
    const _dc7a6c287ffe = _4fe6c60a132e.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_dc7a6c287ffe) return _0x87f761_8(_dc7a6c287ffe) && _0x87f761_5(_dc7a6c287ffe.href || _dc7a6c287ffe.getAttribute("\x68\x72\x65\x66"), _dc7a6c287ffe.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_4fe6c60a132e.preventDefault(), 
    void _4fe6c60a132e.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_dc7a6c287ffe.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_4fe6c60a132e.preventDefault(), 
    _4fe6c60a132e.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x61\x75\x78\x63\x6c\x69\x63\x6b", _4fe6c60a132e => {
    const _dc7a6c287ffe = _4fe6c60a132e.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_dc7a6c287ffe) return _0x87f761_8(_dc7a6c287ffe) && _0x87f761_5(_dc7a6c287ffe.href || _dc7a6c287ffe.getAttribute("\x68\x72\x65\x66"), _dc7a6c287ffe.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_4fe6c60a132e.preventDefault(), 
    void _4fe6c60a132e.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_dc7a6c287ffe.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_4fe6c60a132e.preventDefault(), 
    _4fe6c60a132e.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x73\x75\x62\x6d\x69\x74", _4fe6c60a132e => {
    if (!_0x87f761_1()) return;
    const _dc7a6c287ffe = _4fe6c60a132e.target;
    _dc7a6c287ffe && "\x46\x4f\x52\x4d" === String(_dc7a6c287ffe.tagName || "").toUpperCase() && _0x87f761_7(_dc7a6c287ffe.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_4fe6c60a132e.preventDefault(), 
    _4fe6c60a132e.stopImmediatePropagation(), _0x87f761_3());
  }, !0));
  const _0x87f761_9 = _4fe6c60a132e => {
    const _dc7a6c287ffe = window[_4fe6c60a132e];
    if ("\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _dc7a6c287ffe && !_dc7a6c287ffe.__nyxWrapped) try {
      Object.setPrototypeOf(_0x87f761_2, _dc7a6c287ffe), _0x87f761_2.prototype = _dc7a6c287ffe.prototype, 
      Object.defineProperty(_0x87f761_2, "\x5f\x5f\x6e\x79\x78\x57\x72\x61\x70\x70\x65\x64", {
        value: !0
      }), window[_4fe6c60a132e] = _0x87f761_2;
    } catch {}
    function _0x87f761_2(_4fe6c60a132e, _55d6b546005d, _bc7a740f473b) {
      let _459e95173984 = Number(_4fe6c60a132e), _ab6ff45d6cf1 = Number(_55d6b546005d);
      return (!Number.isFinite(_459e95173984) || _459e95173984 < 0) && (_459e95173984 = 0), 
      (!Number.isFinite(_ab6ff45d6cf1) || _ab6ff45d6cf1 <= _459e95173984) && (_ab6ff45d6cf1 = _459e95173984 + .001), 
      Reflect.construct(_dc7a6c287ffe, [ _459e95173984, _ab6ff45d6cf1, null == _bc7a740f473b ? "" : String(_bc7a740f473b) ], new.target || _0x87f761_2);
    }
  };
  _0x87f761_9("\x56\x54\x54\x43\x75\x65"), _0x87f761_9("\x54\x65\x78\x74\x54\x72\x61\x63\x6b\x43\x75\x65");
})();
