(() => {
  if ("\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" == typeof window || window.__nyxScramjetGuards) return;
  window.__nyxScramjetGuards = !0;
  const _65b0e0ff7c09 = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "\x74\x72\x75\x73\x74\x65\x64\x54\x79\x70\x65\x73", {
      configurable: !0,
      value: {
        createPolicy: (_65b0e0ff7c09, _13c9007ed5d4 = {}) => ({
          createHTML: _65b0e0ff7c09 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _13c9007ed5d4.createHTML ? _13c9007ed5d4.createHTML(_65b0e0ff7c09) : _65b0e0ff7c09,
          createScript: _65b0e0ff7c09 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _13c9007ed5d4.createScript ? _13c9007ed5d4.createScript(_65b0e0ff7c09) : _65b0e0ff7c09,
          createScriptURL: _65b0e0ff7c09 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _13c9007ed5d4.createScriptURL ? _13c9007ed5d4.createScriptURL(_65b0e0ff7c09) : _65b0e0ff7c09
        })
      }
    });
  } catch {}
  try {
    const _65b0e0ff7c09 = Object.getOwnPropertyDescriptor(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74"), _13c9007ed5d4 = document.createElement("\x73\x63\x72\x69\x70\x74");
    _13c9007ed5d4.setAttribute("\x6e\x6f\x6e\x63\x65", ""), Object.defineProperty(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74", {
      configurable: !0,
      get() {
        let _045dc8869bf3 = null;
        try {
          _045dc8869bf3 = _65b0e0ff7c09?.get?.call(this) || null;
        } catch {}
        return _045dc8869bf3 || this.querySelector?.("\x73\x63\x72\x69\x70\x74\x5b\x73\x72\x63\x5d\x2c\x73\x63\x72\x69\x70\x74") || _13c9007ed5d4;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const _0x87f761_0 = _65b0e0ff7c09 => !(!_65b0e0ff7c09 || !_65b0e0ff7c09.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_65b0e0ff7c09.tagName || "")), _0x87f761_1 = _65b0e0ff7c09 => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_65b0e0ff7c09?.tagName || "") ? String(_65b0e0ff7c09.value || "").slice(_65b0e0ff7c09.selectionStart || 0, _65b0e0ff7c09.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, _0x87f761_2 = (_65b0e0ff7c09, _13c9007ed5d4) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_65b0e0ff7c09?.tagName || "")) {
            const _045dc8869bf3 = _65b0e0ff7c09.selectionStart || 0, _a3dbf0f42d5b = _65b0e0ff7c09.selectionEnd || 0, _36cfb0def593 = String(_65b0e0ff7c09.value || "");
            _65b0e0ff7c09.value = _36cfb0def593.slice(0, _045dc8869bf3) + _13c9007ed5d4 + _36cfb0def593.slice(_a3dbf0f42d5b);
            const _5833a5c35b96 = _045dc8869bf3 + String(_13c9007ed5d4).length;
            return _65b0e0ff7c09.setSelectionRange(_5833a5c35b96, _5833a5c35b96), void _65b0e0ff7c09.dispatchEvent(new Event("\x69\x6e\x70\x75\x74", {
              bubbles: !0
            }));
          }
          document.execCommand?.("\x69\x6e\x73\x65\x72\x74\x54\x65\x78\x74", !1, _13c9007ed5d4);
        } catch {}
      }, _0x87f761_3 = async _65b0e0ff7c09 => {
        try {
          await (navigator.clipboard?.writeText(String(_65b0e0ff7c09 || "")));
        } catch {
          try {
            document.execCommand?.("\x63\x6f\x70\x79");
          } catch {}
        }
      }, _65b0e0ff7c09 = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _13c9007ed5d4 = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), _0x87f761_6 = _045dc8869bf3 => {
        try {
          _65b0e0ff7c09?.postMessage(_045dc8869bf3, "\x2a");
        } catch {}
        try {
          _13c9007ed5d4 && _13c9007ed5d4 !== _65b0e0ff7c09 && _13c9007ed5d4.postMessage(_045dc8869bf3, "\x2a");
        } catch {}
        try {
          window.parent?.postMessage(_045dc8869bf3, "\x2a");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_045dc8869bf3, "\x2a");
        } catch {}
      };
      window.addEventListener("\x6b\x65\x79\x64\x6f\x77\x6e", _65b0e0ff7c09 => {
        const _13c9007ed5d4 = String(_65b0e0ff7c09.key || "").toLowerCase();
        if (_65b0e0ff7c09.altKey && !_65b0e0ff7c09.ctrlKey && !_65b0e0ff7c09.metaKey && 2 !== _65b0e0ff7c09.location && "\x61\x6c\x74" === _13c9007ed5d4) return _65b0e0ff7c09.preventDefault(), 
        _65b0e0ff7c09.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x70\x72\x69\x6d\x65"
        });
        if (_65b0e0ff7c09.altKey && !_65b0e0ff7c09.ctrlKey && !_65b0e0ff7c09.metaKey && 2 !== _65b0e0ff7c09.location && _0x87f761_0(_65b0e0ff7c09.target) && /^[acxvzy]$/.test(_13c9007ed5d4)) {
          if (_65b0e0ff7c09.preventDefault(), _65b0e0ff7c09.stopPropagation(), "\x61" === _13c9007ed5d4) return void (_65b0e0ff7c09.target?.select ? _65b0e0ff7c09.target.select() : document.execCommand?.("\x73\x65\x6c\x65\x63\x74\x41\x6c\x6c"));
          if ("\x63" === _13c9007ed5d4) return void _0x87f761_3(_0x87f761_1(_65b0e0ff7c09.target));
          if ("\x78" === _13c9007ed5d4) {
            const _13c9007ed5d4 = _0x87f761_1(_65b0e0ff7c09.target);
            return _0x87f761_3(_13c9007ed5d4), void _0x87f761_2(_65b0e0ff7c09.target, "");
          }
          if ("\x76" === _13c9007ed5d4) return void navigator.clipboard?.readText?.().then(_13c9007ed5d4 => _0x87f761_2(_65b0e0ff7c09.target, _13c9007ed5d4)).catch(() => {
            try {
              document.execCommand?.("\x70\x61\x73\x74\x65");
            } catch {}
          });
          if ("\x7a" === _13c9007ed5d4) return void document.execCommand?.("\x75\x6e\x64\x6f");
          if ("\x79" === _13c9007ed5d4) return void document.execCommand?.("\x72\x65\x64\x6f");
        }
        return !_65b0e0ff7c09.altKey || _65b0e0ff7c09.ctrlKey || _65b0e0ff7c09.metaKey || 2 === _65b0e0ff7c09.location || !/^[1-9]$/.test(_13c9007ed5d4) && ![ "\x6c", "\x64", "\x74", "\x77", "\x72", "\x61\x72\x72\x6f\x77\x6c\x65\x66\x74", "\x61\x72\x72\x6f\x77\x72\x69\x67\x68\x74", "\x74\x61\x62" ].includes(_13c9007ed5d4) ? void 0 : (_65b0e0ff7c09.preventDefault(), 
        _65b0e0ff7c09.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x73\x68\x6f\x72\x74\x63\x75\x74",
          key: _13c9007ed5d4,
          code: _65b0e0ff7c09.code || "",
          location: _65b0e0ff7c09.location || 0,
          shiftKey: !!_65b0e0ff7c09.shiftKey
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
  }, _0x87f761_2 = _65b0e0ff7c09 => {
    if (!_65b0e0ff7c09) return !1;
    try {
      return _65b0e0ff7c09.document.open(), _65b0e0ff7c09.document.write("\x3c\x21\x64\x6f\x63\x74\x79\x70\x65\x20\x68\x74\x6d\x6c\x3e\x3c\x68\x74\x6d\x6c\x3e\x3c\x68\x65\x61\x64\x3e\x3c\x6d\x65\x74\x61\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x22\x75\x74\x66\x2d\x38\x22\x3e\x3c\x6d\x65\x74\x61\x20\x6e\x61\x6d\x65\x3d\x22\x76\x69\x65\x77\x70\x6f\x72\x74\x22\x20\x63\x6f\x6e\x74\x65\x6e\x74\x3d\x22\x77\x69\x64\x74\x68\x3d\x64\x65\x76\x69\x63\x65\x2d\x77\x69\x64\x74\x68\x2c\x69\x6e\x69\x74\x69\x61\x6c\x2d\x73\x63\x61\x6c\x65\x3d\x31\x22\x3e\x3c\x74\x69\x74\x6c\x65\x3e\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61\x3c\x2f\x74\x69\x74\x6c\x65\x3e\x3c\x73\x74\x79\x6c\x65\x3e\x68\x74\x6d\x6c\x2c\x62\x6f\x64\x79\x7b\x6d\x61\x72\x67\x69\x6e\x3a\x30\x3b\x77\x69\x64\x74\x68\x3a\x31\x30\x30\x25\x3b\x68\x65\x69\x67\x68\x74\x3a\x31\x30\x30\x25\x3b\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x3a\x23\x66\x66\x66\x3b\x63\x6f\x6c\x6f\x72\x3a\x23\x31\x31\x31\x3b\x66\x6f\x6e\x74\x3a\x32\x38\x70\x78\x20\x52\x61\x6c\x65\x77\x61\x79\x2c\x41\x72\x69\x61\x6c\x2c\x73\x61\x6e\x73\x2d\x73\x65\x72\x69\x66\x7d\x62\x6f\x64\x79\x7b\x64\x69\x73\x70\x6c\x61\x79\x3a\x67\x72\x69\x64\x3b\x70\x6c\x61\x63\x65\x2d\x69\x74\x65\x6d\x73\x3a\x63\x65\x6e\x74\x65\x72\x3b\x74\x65\x78\x74\x2d\x61\x6c\x69\x67\x6e\x3a\x63\x65\x6e\x74\x65\x72\x7d\x6d\x61\x69\x6e\x7b\x70\x61\x64\x64\x69\x6e\x67\x3a\x32\x34\x70\x78\x7d\x3c\x2f\x73\x74\x79\x6c\x65\x3e\x3c\x2f\x68\x65\x61\x64\x3e\x3c\x62\x6f\x64\x79\x3e\x3c\x6d\x61\x69\x6e\x3e\x61\x72\x65\x20\x79\x6f\x75\x20\x74\x72\x79\x69\x6e\x67\x20\x74\x6f\x20\x68\x61\x63\x6b\x20\x6d\x65\x20\x73\x63\x61\x6d\x6d\x61\x3f\x3f\x3f\x3c\x2f\x6d\x61\x69\x6e\x3e\x3c\x2f\x62\x6f\x64\x79\x3e\x3c\x2f\x68\x74\x6d\x6c\x3e"), 
      _65b0e0ff7c09.document.close(), _65b0e0ff7c09.focus?.(), !0;
    } catch {
      return !1;
    }
  }, _0x87f761_3 = () => {
    const _65b0e0ff7c09 = null;
    return {
      closed: !1,
      focus() {
        try {
          _65b0e0ff7c09?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _65b0e0ff7c09?.blur?.();
        } catch {}
      },
      close() {
        try {
          _65b0e0ff7c09?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return _0x87f761_2(_65b0e0ff7c09), this;
        },
        write() {
          _0x87f761_2(_65b0e0ff7c09);
        },
        writeln() {
          _0x87f761_2(_65b0e0ff7c09);
        },
        close() {
          _0x87f761_2(_65b0e0ff7c09);
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
          _0x87f761_2(_65b0e0ff7c09);
        },
        toString: () => "\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61"
      }
    };
  }, _0x87f761_4 = _65b0e0ff7c09 => {
    const _13c9007ed5d4 = String(_65b0e0ff7c09 || "").trim();
    if (/^(?:blob|data):/i.test(_13c9007ed5d4)) return !1;
    const _045dc8869bf3 = _13c9007ed5d4.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_045dc8869bf3);
  }, _0x87f761_5 = (_65b0e0ff7c09, _13c9007ed5d4 = "") => {
    const _045dc8869bf3 = String(_65b0e0ff7c09 || "").trim();
    if (!_045dc8869bf3 || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "\x6e\x79\x78\x3a\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x2d\x72\x65\x71\x75\x65\x73\x74",
        url: _045dc8869bf3,
        filename: String(_13c9007ed5d4 || ""),
        sourceUrl: String(location.href || "")
      }, "\x2a"), !0;
    } catch {
      return !1;
    }
  };
  let _0x87f761_6 = (..._13c9007ed5d4) => _0x87f761_4(_13c9007ed5d4[0]) && _0x87f761_5(_13c9007ed5d4[0]) ? null : !_0x87f761_1() && _65b0e0ff7c09 ? _65b0e0ff7c09(..._13c9007ed5d4) : _0x87f761_3();
  try {
    "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _65b0e0ff7c09 && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof Proxy && (_0x87f761_6 = new Proxy(_65b0e0ff7c09, {
      apply: (_65b0e0ff7c09, _13c9007ed5d4, _045dc8869bf3) => _0x87f761_4(_045dc8869bf3[0]) && _0x87f761_5(_045dc8869bf3[0]) ? null : _0x87f761_1() ? _0x87f761_3() : Reflect.apply(_65b0e0ff7c09, _13c9007ed5d4, _045dc8869bf3),
      construct(_65b0e0ff7c09, _13c9007ed5d4, _045dc8869bf3) {
        if (!_0x87f761_1()) try {
          return Reflect.construct(_65b0e0ff7c09, _13c9007ed5d4, _045dc8869bf3);
        } catch {
          return Reflect.apply(_65b0e0ff7c09, window, _13c9007ed5d4);
        }
        return _0x87f761_3();
      },
      get: (_65b0e0ff7c09, _13c9007ed5d4, _045dc8869bf3) => "\x5f\x5f\x6e\x79\x78\x50\x6f\x70\x75\x70\x47\x75\x61\x72\x64" === _13c9007ed5d4 || ("\x74\x6f\x53\x74\x72\x69\x6e\x67" === _13c9007ed5d4 ? () => "\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x6f\x70\x65\x6e\x28\x29\x20\x7b\x20\x5b\x6e\x61\x74\x69\x76\x65\x20\x63\x6f\x64\x65\x5d\x20\x7d" : Reflect.get(_65b0e0ff7c09, _13c9007ed5d4, _045dc8869bf3))
    }));
  } catch {}
  const _0x87f761_7 = _65b0e0ff7c09 => {
    const _13c9007ed5d4 = String(_65b0e0ff7c09 || "").toLowerCase();
    return _13c9007ed5d4 && ![ "\x5f\x73\x65\x6c\x66", "\x5f\x70\x61\x72\x65\x6e\x74", "\x5f\x74\x6f\x70" ].includes(_13c9007ed5d4);
  }, _0x87f761_8 = _65b0e0ff7c09 => !!_65b0e0ff7c09 && (!!_65b0e0ff7c09.hasAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || _0x87f761_4(_65b0e0ff7c09.href || _65b0e0ff7c09.getAttribute("\x68\x72\x65\x66") || ""));
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
    const _65b0e0ff7c09 = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!_0x87f761_8(this) || !_0x87f761_5(this.href || this.getAttribute("\x68\x72\x65\x66"), this.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "")) {
        if (!_0x87f761_1() || !_0x87f761_7(this.target)) return _65b0e0ff7c09.call(this);
        _0x87f761_3();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("\x63\x6c\x69\x63\x6b", _65b0e0ff7c09 => {
    const _13c9007ed5d4 = _65b0e0ff7c09.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_13c9007ed5d4) return _0x87f761_8(_13c9007ed5d4) && _0x87f761_5(_13c9007ed5d4.href || _13c9007ed5d4.getAttribute("\x68\x72\x65\x66"), _13c9007ed5d4.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_65b0e0ff7c09.preventDefault(), 
    void _65b0e0ff7c09.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_13c9007ed5d4.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_65b0e0ff7c09.preventDefault(), 
    _65b0e0ff7c09.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x61\x75\x78\x63\x6c\x69\x63\x6b", _65b0e0ff7c09 => {
    const _13c9007ed5d4 = _65b0e0ff7c09.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_13c9007ed5d4) return _0x87f761_8(_13c9007ed5d4) && _0x87f761_5(_13c9007ed5d4.href || _13c9007ed5d4.getAttribute("\x68\x72\x65\x66"), _13c9007ed5d4.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_65b0e0ff7c09.preventDefault(), 
    void _65b0e0ff7c09.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_13c9007ed5d4.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_65b0e0ff7c09.preventDefault(), 
    _65b0e0ff7c09.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x73\x75\x62\x6d\x69\x74", _65b0e0ff7c09 => {
    if (!_0x87f761_1()) return;
    const _13c9007ed5d4 = _65b0e0ff7c09.target;
    _13c9007ed5d4 && "\x46\x4f\x52\x4d" === String(_13c9007ed5d4.tagName || "").toUpperCase() && _0x87f761_7(_13c9007ed5d4.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_65b0e0ff7c09.preventDefault(), 
    _65b0e0ff7c09.stopImmediatePropagation(), _0x87f761_3());
  }, !0));
  const _0x87f761_9 = _65b0e0ff7c09 => {
    const _13c9007ed5d4 = window[_65b0e0ff7c09];
    if ("\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _13c9007ed5d4 && !_13c9007ed5d4.__nyxWrapped) try {
      Object.setPrototypeOf(_0x87f761_2, _13c9007ed5d4), _0x87f761_2.prototype = _13c9007ed5d4.prototype, 
      Object.defineProperty(_0x87f761_2, "\x5f\x5f\x6e\x79\x78\x57\x72\x61\x70\x70\x65\x64", {
        value: !0
      }), window[_65b0e0ff7c09] = _0x87f761_2;
    } catch {}
    function _0x87f761_2(_65b0e0ff7c09, _045dc8869bf3, _a3dbf0f42d5b) {
      let _36cfb0def593 = Number(_65b0e0ff7c09), _5833a5c35b96 = Number(_045dc8869bf3);
      return (!Number.isFinite(_36cfb0def593) || _36cfb0def593 < 0) && (_36cfb0def593 = 0), 
      (!Number.isFinite(_5833a5c35b96) || _5833a5c35b96 <= _36cfb0def593) && (_5833a5c35b96 = _36cfb0def593 + .001), 
      Reflect.construct(_13c9007ed5d4, [ _36cfb0def593, _5833a5c35b96, null == _a3dbf0f42d5b ? "" : String(_a3dbf0f42d5b) ], new.target || _0x87f761_2);
    }
  };
  _0x87f761_9("\x56\x54\x54\x43\x75\x65"), _0x87f761_9("\x54\x65\x78\x74\x54\x72\x61\x63\x6b\x43\x75\x65");
})();
