(() => {
  if ("undefined" == typeof window || window.__nyxScramjetGuards) return;
  window.__nyxScramjetGuards = !0;
  const _842e0ef02db8 = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "trustedTypes", {
      configurable: !0,
      value: {
        createPolicy: (_842e0ef02db8, _a82600b164d7 = {}) => ({
          createHTML: _842e0ef02db8 => "function" == typeof _a82600b164d7.createHTML ? _a82600b164d7.createHTML(_842e0ef02db8) : _842e0ef02db8,
          createScript: _842e0ef02db8 => "function" == typeof _a82600b164d7.createScript ? _a82600b164d7.createScript(_842e0ef02db8) : _842e0ef02db8,
          createScriptURL: _842e0ef02db8 => "function" == typeof _a82600b164d7.createScriptURL ? _a82600b164d7.createScriptURL(_842e0ef02db8) : _842e0ef02db8
        })
      }
    });
  } catch {}
  try {
    const _842e0ef02db8 = Object.getOwnPropertyDescriptor(Document.prototype, "currentScript"), _a82600b164d7 = document.createElement("script");
    _a82600b164d7.setAttribute("nonce", ""), Object.defineProperty(Document.prototype, "currentScript", {
      configurable: !0,
      get() {
        let _6647926912df = null;
        try {
          _6647926912df = _842e0ef02db8?.get?.call(this) || null;
        } catch {}
        return _6647926912df || this.querySelector?.("script[src],script") || _a82600b164d7;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const t = _842e0ef02db8 => !(!_842e0ef02db8 || !_842e0ef02db8.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_842e0ef02db8.tagName || "")), e = _842e0ef02db8 => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_842e0ef02db8?.tagName || "") ? String(_842e0ef02db8.value || "").slice(_842e0ef02db8.selectionStart || 0, _842e0ef02db8.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, r = (_842e0ef02db8, _a82600b164d7) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_842e0ef02db8?.tagName || "")) {
            const _6647926912df = _842e0ef02db8.selectionStart || 0, _01d77adb5981 = _842e0ef02db8.selectionEnd || 0, _59a6b6cb8352 = String(_842e0ef02db8.value || "");
            _842e0ef02db8.value = _59a6b6cb8352.slice(0, _6647926912df) + _a82600b164d7 + _59a6b6cb8352.slice(_01d77adb5981);
            const _04587bc5e154 = _6647926912df + String(_a82600b164d7).length;
            return _842e0ef02db8.setSelectionRange(_04587bc5e154, _04587bc5e154), void _842e0ef02db8.dispatchEvent(new Event("input", {
              bubbles: !0
            }));
          }
          document.execCommand?.("insertText", !1, _a82600b164d7);
        } catch {}
      }, n = async _842e0ef02db8 => {
        try {
          await (navigator.clipboard?.writeText(String(_842e0ef02db8 || "")));
        } catch {
          try {
            document.execCommand?.("copy");
          } catch {}
        }
      }, _842e0ef02db8 = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _a82600b164d7 = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), c = _6647926912df => {
        try {
          _842e0ef02db8?.postMessage(_6647926912df, "*");
        } catch {}
        try {
          _a82600b164d7 && _a82600b164d7 !== _842e0ef02db8 && _a82600b164d7.postMessage(_6647926912df, "*");
        } catch {}
        try {
          window.parent?.postMessage(_6647926912df, "*");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_6647926912df, "*");
        } catch {}
      };
      window.addEventListener("keydown", _842e0ef02db8 => {
        const _a82600b164d7 = String(_842e0ef02db8.key || "").toLowerCase();
        if (_842e0ef02db8.altKey && !_842e0ef02db8.ctrlKey && !_842e0ef02db8.metaKey && 2 !== _842e0ef02db8.location && "alt" === _a82600b164d7) return _842e0ef02db8.preventDefault(), 
        _842e0ef02db8.stopPropagation(), void c({
          type: "nyx:alt-prime"
        });
        if (_842e0ef02db8.altKey && !_842e0ef02db8.ctrlKey && !_842e0ef02db8.metaKey && 2 !== _842e0ef02db8.location && t(_842e0ef02db8.target) && /^[acxvzy]$/.test(_a82600b164d7)) {
          if (_842e0ef02db8.preventDefault(), _842e0ef02db8.stopPropagation(), "a" === _a82600b164d7) return void (_842e0ef02db8.target?.select ? _842e0ef02db8.target.select() : document.execCommand?.("selectAll"));
          if ("c" === _a82600b164d7) return void n(e(_842e0ef02db8.target));
          if ("x" === _a82600b164d7) {
            const _a82600b164d7 = e(_842e0ef02db8.target);
            return n(_a82600b164d7), void r(_842e0ef02db8.target, "");
          }
          if ("v" === _a82600b164d7) return void navigator.clipboard?.readText?.().then(_a82600b164d7 => r(_842e0ef02db8.target, _a82600b164d7)).catch(() => {
            try {
              document.execCommand?.("paste");
            } catch {}
          });
          if ("z" === _a82600b164d7) return void document.execCommand?.("undo");
          if ("y" === _a82600b164d7) return void document.execCommand?.("redo");
        }
        return !_842e0ef02db8.altKey || _842e0ef02db8.ctrlKey || _842e0ef02db8.metaKey || 2 === _842e0ef02db8.location || !/^[1-9]$/.test(_a82600b164d7) && ![ "l", "d", "t", "w", "r", "arrowleft", "arrowright", "tab" ].includes(_a82600b164d7) ? void 0 : (_842e0ef02db8.preventDefault(), 
        _842e0ef02db8.stopPropagation(), void c({
          type: "nyx:alt-shortcut",
          key: _a82600b164d7,
          code: _842e0ef02db8.code || "",
          location: _842e0ef02db8.location || 0,
          shiftKey: !!_842e0ef02db8.shiftKey
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
  }, r = _842e0ef02db8 => {
    if (!_842e0ef02db8) return !1;
    try {
      return _842e0ef02db8.document.open(), _842e0ef02db8.document.write('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>nyx://blocked67haha</title><style>html,body{margin:0;width:100%;height:100%;background:#fff;color:#111;font:28px Raleway,Arial,sans-serif}body{display:grid;place-items:center;text-align:center}main{padding:24px}</style></head><body><main>are you trying to hack me scamma???</main></body></html>'), 
      _842e0ef02db8.document.close(), _842e0ef02db8.focus?.(), !0;
    } catch {
      return !1;
    }
  }, n = () => {
    const _842e0ef02db8 = null;
    return {
      closed: !1,
      focus() {
        try {
          _842e0ef02db8?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _842e0ef02db8?.blur?.();
        } catch {}
      },
      close() {
        try {
          _842e0ef02db8?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return r(_842e0ef02db8), this;
        },
        write() {
          r(_842e0ef02db8);
        },
        writeln() {
          r(_842e0ef02db8);
        },
        close() {
          r(_842e0ef02db8);
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
          r(_842e0ef02db8);
        },
        toString: () => "nyx://blocked67haha"
      }
    };
  }, o = _842e0ef02db8 => {
    const _a82600b164d7 = String(_842e0ef02db8 || "").trim();
    if (/^(?:blob|data):/i.test(_a82600b164d7)) return !1;
    const _6647926912df = _a82600b164d7.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_6647926912df);
  }, i = (_842e0ef02db8, _a82600b164d7 = "") => {
    const _6647926912df = String(_842e0ef02db8 || "").trim();
    if (!_6647926912df || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "nyx:download-request",
        url: _6647926912df,
        filename: String(_a82600b164d7 || ""),
        sourceUrl: String(location.href || "")
      }, "*"), !0;
    } catch {
      return !1;
    }
  };
  let c = (..._a82600b164d7) => o(_a82600b164d7[0]) && i(_a82600b164d7[0]) ? null : !e() && _842e0ef02db8 ? _842e0ef02db8(..._a82600b164d7) : n();
  try {
    "function" == typeof _842e0ef02db8 && "function" == typeof Proxy && (c = new Proxy(_842e0ef02db8, {
      apply: (_842e0ef02db8, _a82600b164d7, _6647926912df) => o(_6647926912df[0]) && i(_6647926912df[0]) ? null : e() ? n() : Reflect.apply(_842e0ef02db8, _a82600b164d7, _6647926912df),
      construct(_842e0ef02db8, _a82600b164d7, _6647926912df) {
        if (!e()) try {
          return Reflect.construct(_842e0ef02db8, _a82600b164d7, _6647926912df);
        } catch {
          return Reflect.apply(_842e0ef02db8, window, _a82600b164d7);
        }
        return n();
      },
      get: (_842e0ef02db8, _a82600b164d7, _6647926912df) => "__nyxPopupGuard" === _a82600b164d7 || ("toString" === _a82600b164d7 ? () => "function open() { [native code] }" : Reflect.get(_842e0ef02db8, _a82600b164d7, _6647926912df))
    }));
  } catch {}
  const a = _842e0ef02db8 => {
    const _a82600b164d7 = String(_842e0ef02db8 || "").toLowerCase();
    return _a82600b164d7 && ![ "_self", "_parent", "_top" ].includes(_a82600b164d7);
  }, s = _842e0ef02db8 => !!_842e0ef02db8 && (!!_842e0ef02db8.hasAttribute("download") || o(_842e0ef02db8.href || _842e0ef02db8.getAttribute("href") || ""));
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
    const _842e0ef02db8 = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!s(this) || !i(this.href || this.getAttribute("href"), this.getAttribute("download") || "")) {
        if (!e() || !a(this.target)) return _842e0ef02db8.call(this);
        n();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("click", _842e0ef02db8 => {
    const _a82600b164d7 = _842e0ef02db8.target?.closest?.("a[href]");
    if (_a82600b164d7) return s(_a82600b164d7) && i(_a82600b164d7.href || _a82600b164d7.getAttribute("href"), _a82600b164d7.getAttribute("download") || "") ? (_842e0ef02db8.preventDefault(), 
    void _842e0ef02db8.stopImmediatePropagation()) : void (e() && a(_a82600b164d7.getAttribute("target")) && (_842e0ef02db8.preventDefault(), 
    _842e0ef02db8.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("auxclick", _842e0ef02db8 => {
    const _a82600b164d7 = _842e0ef02db8.target?.closest?.("a[href]");
    if (_a82600b164d7) return s(_a82600b164d7) && i(_a82600b164d7.href || _a82600b164d7.getAttribute("href"), _a82600b164d7.getAttribute("download") || "") ? (_842e0ef02db8.preventDefault(), 
    void _842e0ef02db8.stopImmediatePropagation()) : void (e() && a(_a82600b164d7.getAttribute("target")) && (_842e0ef02db8.preventDefault(), 
    _842e0ef02db8.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("submit", _842e0ef02db8 => {
    if (!e()) return;
    const _a82600b164d7 = _842e0ef02db8.target;
    _a82600b164d7 && "FORM" === String(_a82600b164d7.tagName || "").toUpperCase() && a(_a82600b164d7.getAttribute("target")) && (_842e0ef02db8.preventDefault(), 
    _842e0ef02db8.stopImmediatePropagation(), n());
  }, !0));
  const u = _842e0ef02db8 => {
    const _a82600b164d7 = window[_842e0ef02db8];
    if ("function" == typeof _a82600b164d7 && !_a82600b164d7.__nyxWrapped) try {
      Object.setPrototypeOf(r, _a82600b164d7), r.prototype = _a82600b164d7.prototype, 
      Object.defineProperty(r, "__nyxWrapped", {
        value: !0
      }), window[_842e0ef02db8] = r;
    } catch {}
    function r(_842e0ef02db8, _6647926912df, _01d77adb5981) {
      let _59a6b6cb8352 = Number(_842e0ef02db8), _04587bc5e154 = Number(_6647926912df);
      return (!Number.isFinite(_59a6b6cb8352) || _59a6b6cb8352 < 0) && (_59a6b6cb8352 = 0), 
      (!Number.isFinite(_04587bc5e154) || _04587bc5e154 <= _59a6b6cb8352) && (_04587bc5e154 = _59a6b6cb8352 + .001), 
      Reflect.construct(_a82600b164d7, [ _59a6b6cb8352, _04587bc5e154, null == _01d77adb5981 ? "" : String(_01d77adb5981) ], new.target || r);
    }
  };
  u("VTTCue"), u("TextTrackCue");
})();
