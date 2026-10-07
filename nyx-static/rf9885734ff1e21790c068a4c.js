(() => {
  if ("\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" == typeof window || window.__nyxScramjetGuards) return;
  window.__nyxScramjetGuards = !0;
  const _85d20fc20536 = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "\x74\x72\x75\x73\x74\x65\x64\x54\x79\x70\x65\x73", {
      configurable: !0,
      value: {
        createPolicy: (_85d20fc20536, _1018dc41b753 = {}) => ({
          createHTML: _85d20fc20536 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _1018dc41b753.createHTML ? _1018dc41b753.createHTML(_85d20fc20536) : _85d20fc20536,
          createScript: _85d20fc20536 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _1018dc41b753.createScript ? _1018dc41b753.createScript(_85d20fc20536) : _85d20fc20536,
          createScriptURL: _85d20fc20536 => "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _1018dc41b753.createScriptURL ? _1018dc41b753.createScriptURL(_85d20fc20536) : _85d20fc20536
        })
      }
    });
  } catch {}
  try {
    const _85d20fc20536 = Object.getOwnPropertyDescriptor(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74"), _1018dc41b753 = document.createElement("\x73\x63\x72\x69\x70\x74");
    _1018dc41b753.setAttribute("\x6e\x6f\x6e\x63\x65", ""), Object.defineProperty(Document.prototype, "\x63\x75\x72\x72\x65\x6e\x74\x53\x63\x72\x69\x70\x74", {
      configurable: !0,
      get() {
        let _5abb6c981ac1 = null;
        try {
          _5abb6c981ac1 = _85d20fc20536?.get?.call(this) || null;
        } catch {}
        return _5abb6c981ac1 || this.querySelector?.("\x73\x63\x72\x69\x70\x74\x5b\x73\x72\x63\x5d\x2c\x73\x63\x72\x69\x70\x74") || _1018dc41b753;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const _0x87f761_0 = _85d20fc20536 => !(!_85d20fc20536 || !_85d20fc20536.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_85d20fc20536.tagName || "")), _0x87f761_1 = _85d20fc20536 => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_85d20fc20536?.tagName || "") ? String(_85d20fc20536.value || "").slice(_85d20fc20536.selectionStart || 0, _85d20fc20536.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, _0x87f761_2 = (_85d20fc20536, _1018dc41b753) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_85d20fc20536?.tagName || "")) {
            const _5abb6c981ac1 = _85d20fc20536.selectionStart || 0, _750522d7ce7f = _85d20fc20536.selectionEnd || 0, _2503da79d84e = String(_85d20fc20536.value || "");
            _85d20fc20536.value = _2503da79d84e.slice(0, _5abb6c981ac1) + _1018dc41b753 + _2503da79d84e.slice(_750522d7ce7f);
            const _97e3e6b94c30 = _5abb6c981ac1 + String(_1018dc41b753).length;
            return _85d20fc20536.setSelectionRange(_97e3e6b94c30, _97e3e6b94c30), void _85d20fc20536.dispatchEvent(new Event("\x69\x6e\x70\x75\x74", {
              bubbles: !0
            }));
          }
          document.execCommand?.("\x69\x6e\x73\x65\x72\x74\x54\x65\x78\x74", !1, _1018dc41b753);
        } catch {}
      }, _0x87f761_3 = async _85d20fc20536 => {
        try {
          await (navigator.clipboard?.writeText(String(_85d20fc20536 || "")));
        } catch {
          try {
            document.execCommand?.("\x63\x6f\x70\x79");
          } catch {}
        }
      }, _85d20fc20536 = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _1018dc41b753 = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), _0x87f761_6 = _5abb6c981ac1 => {
        try {
          _85d20fc20536?.postMessage(_5abb6c981ac1, "\x2a");
        } catch {}
        try {
          _1018dc41b753 && _1018dc41b753 !== _85d20fc20536 && _1018dc41b753.postMessage(_5abb6c981ac1, "\x2a");
        } catch {}
        try {
          window.parent?.postMessage(_5abb6c981ac1, "\x2a");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_5abb6c981ac1, "\x2a");
        } catch {}
      };
      window.addEventListener("\x6b\x65\x79\x64\x6f\x77\x6e", _85d20fc20536 => {
        const _1018dc41b753 = String(_85d20fc20536.key || "").toLowerCase();
        if (_85d20fc20536.altKey && !_85d20fc20536.ctrlKey && !_85d20fc20536.metaKey && 2 !== _85d20fc20536.location && "\x61\x6c\x74" === _1018dc41b753) return _85d20fc20536.preventDefault(), 
        _85d20fc20536.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x70\x72\x69\x6d\x65"
        });
        if (_85d20fc20536.altKey && !_85d20fc20536.ctrlKey && !_85d20fc20536.metaKey && 2 !== _85d20fc20536.location && _0x87f761_0(_85d20fc20536.target) && /^[acxvzy]$/.test(_1018dc41b753)) {
          if (_85d20fc20536.preventDefault(), _85d20fc20536.stopPropagation(), "\x61" === _1018dc41b753) return void (_85d20fc20536.target?.select ? _85d20fc20536.target.select() : document.execCommand?.("\x73\x65\x6c\x65\x63\x74\x41\x6c\x6c"));
          if ("\x63" === _1018dc41b753) return void _0x87f761_3(_0x87f761_1(_85d20fc20536.target));
          if ("\x78" === _1018dc41b753) {
            const _1018dc41b753 = _0x87f761_1(_85d20fc20536.target);
            return _0x87f761_3(_1018dc41b753), void _0x87f761_2(_85d20fc20536.target, "");
          }
          if ("\x76" === _1018dc41b753) return void navigator.clipboard?.readText?.().then(_1018dc41b753 => _0x87f761_2(_85d20fc20536.target, _1018dc41b753)).catch(() => {
            try {
              document.execCommand?.("\x70\x61\x73\x74\x65");
            } catch {}
          });
          if ("\x7a" === _1018dc41b753) return void document.execCommand?.("\x75\x6e\x64\x6f");
          if ("\x79" === _1018dc41b753) return void document.execCommand?.("\x72\x65\x64\x6f");
        }
        return !_85d20fc20536.altKey || _85d20fc20536.ctrlKey || _85d20fc20536.metaKey || 2 === _85d20fc20536.location || !/^[1-9]$/.test(_1018dc41b753) && ![ "\x6c", "\x64", "\x74", "\x77", "\x72", "\x61\x72\x72\x6f\x77\x6c\x65\x66\x74", "\x61\x72\x72\x6f\x77\x72\x69\x67\x68\x74", "\x74\x61\x62" ].includes(_1018dc41b753) ? void 0 : (_85d20fc20536.preventDefault(), 
        _85d20fc20536.stopPropagation(), void _0x87f761_6({
          type: "\x6e\x79\x78\x3a\x61\x6c\x74\x2d\x73\x68\x6f\x72\x74\x63\x75\x74",
          key: _1018dc41b753,
          code: _85d20fc20536.code || "",
          location: _85d20fc20536.location || 0,
          shiftKey: !!_85d20fc20536.shiftKey
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
  }, _0x87f761_2 = _85d20fc20536 => {
    if (!_85d20fc20536) return !1;
    try {
      return _85d20fc20536.document.open(), _85d20fc20536.document.write("\x3c\x21\x64\x6f\x63\x74\x79\x70\x65\x20\x68\x74\x6d\x6c\x3e\x3c\x68\x74\x6d\x6c\x3e\x3c\x68\x65\x61\x64\x3e\x3c\x6d\x65\x74\x61\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x22\x75\x74\x66\x2d\x38\x22\x3e\x3c\x6d\x65\x74\x61\x20\x6e\x61\x6d\x65\x3d\x22\x76\x69\x65\x77\x70\x6f\x72\x74\x22\x20\x63\x6f\x6e\x74\x65\x6e\x74\x3d\x22\x77\x69\x64\x74\x68\x3d\x64\x65\x76\x69\x63\x65\x2d\x77\x69\x64\x74\x68\x2c\x69\x6e\x69\x74\x69\x61\x6c\x2d\x73\x63\x61\x6c\x65\x3d\x31\x22\x3e\x3c\x74\x69\x74\x6c\x65\x3e\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61\x3c\x2f\x74\x69\x74\x6c\x65\x3e\x3c\x73\x74\x79\x6c\x65\x3e\x68\x74\x6d\x6c\x2c\x62\x6f\x64\x79\x7b\x6d\x61\x72\x67\x69\x6e\x3a\x30\x3b\x77\x69\x64\x74\x68\x3a\x31\x30\x30\x25\x3b\x68\x65\x69\x67\x68\x74\x3a\x31\x30\x30\x25\x3b\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x3a\x23\x66\x66\x66\x3b\x63\x6f\x6c\x6f\x72\x3a\x23\x31\x31\x31\x3b\x66\x6f\x6e\x74\x3a\x32\x38\x70\x78\x20\x52\x61\x6c\x65\x77\x61\x79\x2c\x41\x72\x69\x61\x6c\x2c\x73\x61\x6e\x73\x2d\x73\x65\x72\x69\x66\x7d\x62\x6f\x64\x79\x7b\x64\x69\x73\x70\x6c\x61\x79\x3a\x67\x72\x69\x64\x3b\x70\x6c\x61\x63\x65\x2d\x69\x74\x65\x6d\x73\x3a\x63\x65\x6e\x74\x65\x72\x3b\x74\x65\x78\x74\x2d\x61\x6c\x69\x67\x6e\x3a\x63\x65\x6e\x74\x65\x72\x7d\x6d\x61\x69\x6e\x7b\x70\x61\x64\x64\x69\x6e\x67\x3a\x32\x34\x70\x78\x7d\x3c\x2f\x73\x74\x79\x6c\x65\x3e\x3c\x2f\x68\x65\x61\x64\x3e\x3c\x62\x6f\x64\x79\x3e\x3c\x6d\x61\x69\x6e\x3e\x61\x72\x65\x20\x79\x6f\x75\x20\x74\x72\x79\x69\x6e\x67\x20\x74\x6f\x20\x68\x61\x63\x6b\x20\x6d\x65\x20\x73\x63\x61\x6d\x6d\x61\x3f\x3f\x3f\x3c\x2f\x6d\x61\x69\x6e\x3e\x3c\x2f\x62\x6f\x64\x79\x3e\x3c\x2f\x68\x74\x6d\x6c\x3e"), 
      _85d20fc20536.document.close(), _85d20fc20536.focus?.(), !0;
    } catch {
      return !1;
    }
  }, _0x87f761_3 = () => {
    const _85d20fc20536 = null;
    return {
      closed: !1,
      focus() {
        try {
          _85d20fc20536?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _85d20fc20536?.blur?.();
        } catch {}
      },
      close() {
        try {
          _85d20fc20536?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return _0x87f761_2(_85d20fc20536), this;
        },
        write() {
          _0x87f761_2(_85d20fc20536);
        },
        writeln() {
          _0x87f761_2(_85d20fc20536);
        },
        close() {
          _0x87f761_2(_85d20fc20536);
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
          _0x87f761_2(_85d20fc20536);
        },
        toString: () => "\x6e\x79\x78\x3a\x2f\x2f\x62\x6c\x6f\x63\x6b\x65\x64\x36\x37\x68\x61\x68\x61"
      }
    };
  }, _0x87f761_4 = _85d20fc20536 => {
    const _1018dc41b753 = String(_85d20fc20536 || "").trim();
    if (/^(?:blob|data):/i.test(_1018dc41b753)) return !1;
    const _5abb6c981ac1 = _1018dc41b753.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_5abb6c981ac1);
  }, _0x87f761_5 = (_85d20fc20536, _1018dc41b753 = "") => {
    const _5abb6c981ac1 = String(_85d20fc20536 || "").trim();
    if (!_5abb6c981ac1 || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "\x6e\x79\x78\x3a\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x2d\x72\x65\x71\x75\x65\x73\x74",
        url: _5abb6c981ac1,
        filename: String(_1018dc41b753 || ""),
        sourceUrl: String(location.href || "")
      }, "\x2a"), !0;
    } catch {
      return !1;
    }
  };
  let _0x87f761_6 = (..._1018dc41b753) => _0x87f761_4(_1018dc41b753[0]) && _0x87f761_5(_1018dc41b753[0]) ? null : !_0x87f761_1() && _85d20fc20536 ? _85d20fc20536(..._1018dc41b753) : _0x87f761_3();
  try {
    "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _85d20fc20536 && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof Proxy && (_0x87f761_6 = new Proxy(_85d20fc20536, {
      apply: (_85d20fc20536, _1018dc41b753, _5abb6c981ac1) => _0x87f761_4(_5abb6c981ac1[0]) && _0x87f761_5(_5abb6c981ac1[0]) ? null : _0x87f761_1() ? _0x87f761_3() : Reflect.apply(_85d20fc20536, _1018dc41b753, _5abb6c981ac1),
      construct(_85d20fc20536, _1018dc41b753, _5abb6c981ac1) {
        if (!_0x87f761_1()) try {
          return Reflect.construct(_85d20fc20536, _1018dc41b753, _5abb6c981ac1);
        } catch {
          return Reflect.apply(_85d20fc20536, window, _1018dc41b753);
        }
        return _0x87f761_3();
      },
      get: (_85d20fc20536, _1018dc41b753, _5abb6c981ac1) => "\x5f\x5f\x6e\x79\x78\x50\x6f\x70\x75\x70\x47\x75\x61\x72\x64" === _1018dc41b753 || ("\x74\x6f\x53\x74\x72\x69\x6e\x67" === _1018dc41b753 ? () => "\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x6f\x70\x65\x6e\x28\x29\x20\x7b\x20\x5b\x6e\x61\x74\x69\x76\x65\x20\x63\x6f\x64\x65\x5d\x20\x7d" : Reflect.get(_85d20fc20536, _1018dc41b753, _5abb6c981ac1))
    }));
  } catch {}
  const _0x87f761_7 = _85d20fc20536 => {
    const _1018dc41b753 = String(_85d20fc20536 || "").toLowerCase();
    return _1018dc41b753 && ![ "\x5f\x73\x65\x6c\x66", "\x5f\x70\x61\x72\x65\x6e\x74", "\x5f\x74\x6f\x70" ].includes(_1018dc41b753);
  }, _0x87f761_8 = _85d20fc20536 => !!_85d20fc20536 && (!!_85d20fc20536.hasAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || _0x87f761_4(_85d20fc20536.href || _85d20fc20536.getAttribute("\x68\x72\x65\x66") || ""));
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
    const _85d20fc20536 = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!_0x87f761_8(this) || !_0x87f761_5(this.href || this.getAttribute("\x68\x72\x65\x66"), this.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "")) {
        if (!_0x87f761_1() || !_0x87f761_7(this.target)) return _85d20fc20536.call(this);
        _0x87f761_3();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("\x63\x6c\x69\x63\x6b", _85d20fc20536 => {
    const _1018dc41b753 = _85d20fc20536.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_1018dc41b753) return _0x87f761_8(_1018dc41b753) && _0x87f761_5(_1018dc41b753.href || _1018dc41b753.getAttribute("\x68\x72\x65\x66"), _1018dc41b753.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_85d20fc20536.preventDefault(), 
    void _85d20fc20536.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_1018dc41b753.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_85d20fc20536.preventDefault(), 
    _85d20fc20536.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x61\x75\x78\x63\x6c\x69\x63\x6b", _85d20fc20536 => {
    const _1018dc41b753 = _85d20fc20536.target?.closest?.("\x61\x5b\x68\x72\x65\x66\x5d");
    if (_1018dc41b753) return _0x87f761_8(_1018dc41b753) && _0x87f761_5(_1018dc41b753.href || _1018dc41b753.getAttribute("\x68\x72\x65\x66"), _1018dc41b753.getAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64") || "") ? (_85d20fc20536.preventDefault(), 
    void _85d20fc20536.stopImmediatePropagation()) : void (_0x87f761_1() && _0x87f761_7(_1018dc41b753.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_85d20fc20536.preventDefault(), 
    _85d20fc20536.stopImmediatePropagation(), _0x87f761_3()));
  }, !0), document.addEventListener("\x73\x75\x62\x6d\x69\x74", _85d20fc20536 => {
    if (!_0x87f761_1()) return;
    const _1018dc41b753 = _85d20fc20536.target;
    _1018dc41b753 && "\x46\x4f\x52\x4d" === String(_1018dc41b753.tagName || "").toUpperCase() && _0x87f761_7(_1018dc41b753.getAttribute("\x74\x61\x72\x67\x65\x74")) && (_85d20fc20536.preventDefault(), 
    _85d20fc20536.stopImmediatePropagation(), _0x87f761_3());
  }, !0));
  const _0x87f761_9 = _85d20fc20536 => {
    const _1018dc41b753 = window[_85d20fc20536];
    if ("\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _1018dc41b753 && !_1018dc41b753.__nyxWrapped) try {
      Object.setPrototypeOf(_0x87f761_2, _1018dc41b753), _0x87f761_2.prototype = _1018dc41b753.prototype, 
      Object.defineProperty(_0x87f761_2, "\x5f\x5f\x6e\x79\x78\x57\x72\x61\x70\x70\x65\x64", {
        value: !0
      }), window[_85d20fc20536] = _0x87f761_2;
    } catch {}
    function _0x87f761_2(_85d20fc20536, _5abb6c981ac1, _750522d7ce7f) {
      let _2503da79d84e = Number(_85d20fc20536), _97e3e6b94c30 = Number(_5abb6c981ac1);
      return (!Number.isFinite(_2503da79d84e) || _2503da79d84e < 0) && (_2503da79d84e = 0), 
      (!Number.isFinite(_97e3e6b94c30) || _97e3e6b94c30 <= _2503da79d84e) && (_97e3e6b94c30 = _2503da79d84e + .001), 
      Reflect.construct(_1018dc41b753, [ _2503da79d84e, _97e3e6b94c30, null == _750522d7ce7f ? "" : String(_750522d7ce7f) ], new.target || _0x87f761_2);
    }
  };
  _0x87f761_9("\x56\x54\x54\x43\x75\x65"), _0x87f761_9("\x54\x65\x78\x74\x54\x72\x61\x63\x6b\x43\x75\x65");
})();
