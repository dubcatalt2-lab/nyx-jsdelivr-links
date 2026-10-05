(() => {
  if ("undefined" == typeof window || window.__nyxScramjetGuards) return;
  window.__nyxScramjetGuards = !0;
  const _9c5aa110bc1e = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "trustedTypes", {
      configurable: !0,
      value: {
        createPolicy: (_9c5aa110bc1e, _ea18185431cd = {}) => ({
          createHTML: _9c5aa110bc1e => "function" == typeof _ea18185431cd.createHTML ? _ea18185431cd.createHTML(_9c5aa110bc1e) : _9c5aa110bc1e,
          createScript: _9c5aa110bc1e => "function" == typeof _ea18185431cd.createScript ? _ea18185431cd.createScript(_9c5aa110bc1e) : _9c5aa110bc1e,
          createScriptURL: _9c5aa110bc1e => "function" == typeof _ea18185431cd.createScriptURL ? _ea18185431cd.createScriptURL(_9c5aa110bc1e) : _9c5aa110bc1e
        })
      }
    });
  } catch {}
  try {
    const _9c5aa110bc1e = Object.getOwnPropertyDescriptor(Document.prototype, "currentScript"), _ea18185431cd = document.createElement("script");
    _ea18185431cd.setAttribute("nonce", ""), Object.defineProperty(Document.prototype, "currentScript", {
      configurable: !0,
      get() {
        let _7f2e07067b7e = null;
        try {
          _7f2e07067b7e = _9c5aa110bc1e?.get?.call(this) || null;
        } catch {}
        return _7f2e07067b7e || this.querySelector?.("script[src],script") || _ea18185431cd;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const t = _9c5aa110bc1e => !(!_9c5aa110bc1e || !_9c5aa110bc1e.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_9c5aa110bc1e.tagName || "")), e = _9c5aa110bc1e => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_9c5aa110bc1e?.tagName || "") ? String(_9c5aa110bc1e.value || "").slice(_9c5aa110bc1e.selectionStart || 0, _9c5aa110bc1e.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, r = (_9c5aa110bc1e, _ea18185431cd) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_9c5aa110bc1e?.tagName || "")) {
            const _7f2e07067b7e = _9c5aa110bc1e.selectionStart || 0, _a7e3bf0c0b6c = _9c5aa110bc1e.selectionEnd || 0, _f56c39f46fe3 = String(_9c5aa110bc1e.value || "");
            _9c5aa110bc1e.value = _f56c39f46fe3.slice(0, _7f2e07067b7e) + _ea18185431cd + _f56c39f46fe3.slice(_a7e3bf0c0b6c);
            const _296d05efcc8e = _7f2e07067b7e + String(_ea18185431cd).length;
            return _9c5aa110bc1e.setSelectionRange(_296d05efcc8e, _296d05efcc8e), void _9c5aa110bc1e.dispatchEvent(new Event("input", {
              bubbles: !0
            }));
          }
          document.execCommand?.("insertText", !1, _ea18185431cd);
        } catch {}
      }, n = async _9c5aa110bc1e => {
        try {
          await (navigator.clipboard?.writeText(String(_9c5aa110bc1e || "")));
        } catch {
          try {
            document.execCommand?.("copy");
          } catch {}
        }
      }, _9c5aa110bc1e = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _ea18185431cd = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), c = _7f2e07067b7e => {
        try {
          _9c5aa110bc1e?.postMessage(_7f2e07067b7e, "*");
        } catch {}
        try {
          _ea18185431cd && _ea18185431cd !== _9c5aa110bc1e && _ea18185431cd.postMessage(_7f2e07067b7e, "*");
        } catch {}
        try {
          window.parent?.postMessage(_7f2e07067b7e, "*");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_7f2e07067b7e, "*");
        } catch {}
      };
      window.addEventListener("keydown", _9c5aa110bc1e => {
        const _ea18185431cd = String(_9c5aa110bc1e.key || "").toLowerCase();
        if (_9c5aa110bc1e.altKey && !_9c5aa110bc1e.ctrlKey && !_9c5aa110bc1e.metaKey && 2 !== _9c5aa110bc1e.location && "alt" === _ea18185431cd) return _9c5aa110bc1e.preventDefault(), 
        _9c5aa110bc1e.stopPropagation(), void c({
          type: "nyx:alt-prime"
        });
        if (_9c5aa110bc1e.altKey && !_9c5aa110bc1e.ctrlKey && !_9c5aa110bc1e.metaKey && 2 !== _9c5aa110bc1e.location && t(_9c5aa110bc1e.target) && /^[acxvzy]$/.test(_ea18185431cd)) {
          if (_9c5aa110bc1e.preventDefault(), _9c5aa110bc1e.stopPropagation(), "a" === _ea18185431cd) return void (_9c5aa110bc1e.target?.select ? _9c5aa110bc1e.target.select() : document.execCommand?.("selectAll"));
          if ("c" === _ea18185431cd) return void n(e(_9c5aa110bc1e.target));
          if ("x" === _ea18185431cd) {
            const _ea18185431cd = e(_9c5aa110bc1e.target);
            return n(_ea18185431cd), void r(_9c5aa110bc1e.target, "");
          }
          if ("v" === _ea18185431cd) return void navigator.clipboard?.readText?.().then(_ea18185431cd => r(_9c5aa110bc1e.target, _ea18185431cd)).catch(() => {
            try {
              document.execCommand?.("paste");
            } catch {}
          });
          if ("z" === _ea18185431cd) return void document.execCommand?.("undo");
          if ("y" === _ea18185431cd) return void document.execCommand?.("redo");
        }
        return !_9c5aa110bc1e.altKey || _9c5aa110bc1e.ctrlKey || _9c5aa110bc1e.metaKey || 2 === _9c5aa110bc1e.location || !/^[1-9]$/.test(_ea18185431cd) && ![ "l", "d", "t", "w", "r", "arrowleft", "arrowright", "tab" ].includes(_ea18185431cd) ? void 0 : (_9c5aa110bc1e.preventDefault(), 
        _9c5aa110bc1e.stopPropagation(), void c({
          type: "nyx:alt-shortcut",
          key: _ea18185431cd,
          code: _9c5aa110bc1e.code || "",
          location: _9c5aa110bc1e.location || 0,
          shiftKey: !!_9c5aa110bc1e.shiftKey
        }));
      }, !0);
    }
  } catch {}
  const e = () => {
    try {
      return !1 !== JSON.parse(localStorage.getItem("nyx.popupProtection") ?? "true");
    } catch {
      return !0;
    }
  }, r = _9c5aa110bc1e => {
    if (!_9c5aa110bc1e) return !1;
    try {
      return _9c5aa110bc1e.document.open(), _9c5aa110bc1e.document.write('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>nyx://blocked67haha</title><style>html,body{margin:0;width:100%;height:100%;background:#fff;color:#111;font:28px Raleway,Arial,sans-serif}body{display:grid;place-items:center;text-align:center}main{padding:24px}</style></head><body><main>are you trying to hack me scamma???</main></body></html>'), 
      _9c5aa110bc1e.document.close(), _9c5aa110bc1e.focus?.(), !0;
    } catch {
      return !1;
    }
  }, n = () => {
    const _9c5aa110bc1e = null;
    return {
      closed: !1,
      focus() {
        try {
          _9c5aa110bc1e?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _9c5aa110bc1e?.blur?.();
        } catch {}
      },
      close() {
        try {
          _9c5aa110bc1e?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return r(_9c5aa110bc1e), this;
        },
        write() {
          r(_9c5aa110bc1e);
        },
        writeln() {
          r(_9c5aa110bc1e);
        },
        close() {
          r(_9c5aa110bc1e);
        }
      },
      location: {
        href: "nyx://blocked67haha",
        assign() {
          n();
        },
        replace() {
          n();
        },
        reload() {
          r(_9c5aa110bc1e);
        },
        toString: () => "nyx://blocked67haha"
      }
    };
  }, o = _9c5aa110bc1e => {
    const _ea18185431cd = String(_9c5aa110bc1e || "").trim();
    if (/^(?:blob|data):/i.test(_ea18185431cd)) return !1;
    const _7f2e07067b7e = _ea18185431cd.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_7f2e07067b7e);
  }, i = (_9c5aa110bc1e, _ea18185431cd = "") => {
    const _7f2e07067b7e = String(_9c5aa110bc1e || "").trim();
    if (!_7f2e07067b7e || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "nyx:download-request",
        url: _7f2e07067b7e,
        filename: String(_ea18185431cd || ""),
        sourceUrl: String(location.href || "")
      }, "*"), !0;
    } catch {
      return !1;
    }
  };
  let c = (..._ea18185431cd) => o(_ea18185431cd[0]) && i(_ea18185431cd[0]) ? null : !e() && _9c5aa110bc1e ? _9c5aa110bc1e(..._ea18185431cd) : n();
  try {
    "function" == typeof _9c5aa110bc1e && "function" == typeof Proxy && (c = new Proxy(_9c5aa110bc1e, {
      apply: (_9c5aa110bc1e, _ea18185431cd, _7f2e07067b7e) => o(_7f2e07067b7e[0]) && i(_7f2e07067b7e[0]) ? null : e() ? n() : Reflect.apply(_9c5aa110bc1e, _ea18185431cd, _7f2e07067b7e),
      construct(_9c5aa110bc1e, _ea18185431cd, _7f2e07067b7e) {
        if (!e()) try {
          return Reflect.construct(_9c5aa110bc1e, _ea18185431cd, _7f2e07067b7e);
        } catch {
          return Reflect.apply(_9c5aa110bc1e, window, _ea18185431cd);
        }
        return n();
      },
      get: (_9c5aa110bc1e, _ea18185431cd, _7f2e07067b7e) => "__nyxPopupGuard" === _ea18185431cd || ("toString" === _ea18185431cd ? () => "function open() { [native code] }" : Reflect.get(_9c5aa110bc1e, _ea18185431cd, _7f2e07067b7e))
    }));
  } catch {}
  const a = _9c5aa110bc1e => {
    const _ea18185431cd = String(_9c5aa110bc1e || "").toLowerCase();
    return _ea18185431cd && ![ "_self", "_parent", "_top" ].includes(_ea18185431cd);
  }, s = _9c5aa110bc1e => !!_9c5aa110bc1e && (!!_9c5aa110bc1e.hasAttribute("download") || o(_9c5aa110bc1e.href || _9c5aa110bc1e.getAttribute("href") || ""));
  try {
    Object.defineProperty(window, "open", {
      value: c,
      writable: !0,
      configurable: !0
    });
  } catch {
    window.open = c;
  }
  try {
    const _9c5aa110bc1e = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!s(this) || !i(this.href || this.getAttribute("href"), this.getAttribute("download") || "")) {
        if (!e() || !a(this.target)) return _9c5aa110bc1e.call(this);
        n();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("click", _9c5aa110bc1e => {
    const _ea18185431cd = _9c5aa110bc1e.target?.closest?.("a[href]");
    if (_ea18185431cd) return s(_ea18185431cd) && i(_ea18185431cd.href || _ea18185431cd.getAttribute("href"), _ea18185431cd.getAttribute("download") || "") ? (_9c5aa110bc1e.preventDefault(), 
    void _9c5aa110bc1e.stopImmediatePropagation()) : void (e() && a(_ea18185431cd.getAttribute("target")) && (_9c5aa110bc1e.preventDefault(), 
    _9c5aa110bc1e.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("auxclick", _9c5aa110bc1e => {
    const _ea18185431cd = _9c5aa110bc1e.target?.closest?.("a[href]");
    if (_ea18185431cd) return s(_ea18185431cd) && i(_ea18185431cd.href || _ea18185431cd.getAttribute("href"), _ea18185431cd.getAttribute("download") || "") ? (_9c5aa110bc1e.preventDefault(), 
    void _9c5aa110bc1e.stopImmediatePropagation()) : void (e() && a(_ea18185431cd.getAttribute("target")) && (_9c5aa110bc1e.preventDefault(), 
    _9c5aa110bc1e.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("submit", _9c5aa110bc1e => {
    if (!e()) return;
    const _ea18185431cd = _9c5aa110bc1e.target;
    _ea18185431cd && "FORM" === String(_ea18185431cd.tagName || "").toUpperCase() && a(_ea18185431cd.getAttribute("target")) && (_9c5aa110bc1e.preventDefault(), 
    _9c5aa110bc1e.stopImmediatePropagation(), n());
  }, !0));
  const u = _9c5aa110bc1e => {
    const _ea18185431cd = window[_9c5aa110bc1e];
    if ("function" == typeof _ea18185431cd && !_ea18185431cd.__nyxWrapped) try {
      Object.setPrototypeOf(r, _ea18185431cd), r.prototype = _ea18185431cd.prototype, 
      Object.defineProperty(r, "__nyxWrapped", {
        value: !0
      }), window[_9c5aa110bc1e] = r;
    } catch {}
    function r(_9c5aa110bc1e, _7f2e07067b7e, _a7e3bf0c0b6c) {
      let _f56c39f46fe3 = Number(_9c5aa110bc1e), _296d05efcc8e = Number(_7f2e07067b7e);
      return (!Number.isFinite(_f56c39f46fe3) || _f56c39f46fe3 < 0) && (_f56c39f46fe3 = 0), 
      (!Number.isFinite(_296d05efcc8e) || _296d05efcc8e <= _f56c39f46fe3) && (_296d05efcc8e = _f56c39f46fe3 + .001), 
      Reflect.construct(_ea18185431cd, [ _f56c39f46fe3, _296d05efcc8e, null == _a7e3bf0c0b6c ? "" : String(_a7e3bf0c0b6c) ], new.target || r);
    }
  };
  u("VTTCue"), u("TextTrackCue");
})();
