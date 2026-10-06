(() => {
  if ("undefined" == typeof window || window.__nyxScramjetGuards) return;
  window.__nyxScramjetGuards = !0;
  const _db791a3994ab = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "trustedTypes", {
      configurable: !0,
      value: {
        createPolicy: (_db791a3994ab, _1cc9f73b8568 = {}) => ({
          createHTML: _db791a3994ab => "function" == typeof _1cc9f73b8568.createHTML ? _1cc9f73b8568.createHTML(_db791a3994ab) : _db791a3994ab,
          createScript: _db791a3994ab => "function" == typeof _1cc9f73b8568.createScript ? _1cc9f73b8568.createScript(_db791a3994ab) : _db791a3994ab,
          createScriptURL: _db791a3994ab => "function" == typeof _1cc9f73b8568.createScriptURL ? _1cc9f73b8568.createScriptURL(_db791a3994ab) : _db791a3994ab
        })
      }
    });
  } catch {}
  try {
    const _db791a3994ab = Object.getOwnPropertyDescriptor(Document.prototype, "currentScript"), _1cc9f73b8568 = document.createElement("script");
    _1cc9f73b8568.setAttribute("nonce", ""), Object.defineProperty(Document.prototype, "currentScript", {
      configurable: !0,
      get() {
        let _a71fb169f845 = null;
        try {
          _a71fb169f845 = _db791a3994ab?.get?.call(this) || null;
        } catch {}
        return _a71fb169f845 || this.querySelector?.("script[src],script") || _1cc9f73b8568;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const t = _db791a3994ab => !(!_db791a3994ab || !_db791a3994ab.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_db791a3994ab.tagName || "")), e = _db791a3994ab => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_db791a3994ab?.tagName || "") ? String(_db791a3994ab.value || "").slice(_db791a3994ab.selectionStart || 0, _db791a3994ab.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, r = (_db791a3994ab, _1cc9f73b8568) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_db791a3994ab?.tagName || "")) {
            const _a71fb169f845 = _db791a3994ab.selectionStart || 0, _a71bc22e4be3 = _db791a3994ab.selectionEnd || 0, _6f4f8193e87c = String(_db791a3994ab.value || "");
            _db791a3994ab.value = _6f4f8193e87c.slice(0, _a71fb169f845) + _1cc9f73b8568 + _6f4f8193e87c.slice(_a71bc22e4be3);
            const _2154a0ec4e7d = _a71fb169f845 + String(_1cc9f73b8568).length;
            return _db791a3994ab.setSelectionRange(_2154a0ec4e7d, _2154a0ec4e7d), void _db791a3994ab.dispatchEvent(new Event("input", {
              bubbles: !0
            }));
          }
          document.execCommand?.("insertText", !1, _1cc9f73b8568);
        } catch {}
      }, n = async _db791a3994ab => {
        try {
          await (navigator.clipboard?.writeText(String(_db791a3994ab || "")));
        } catch {
          try {
            document.execCommand?.("copy");
          } catch {}
        }
      }, _db791a3994ab = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _1cc9f73b8568 = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), c = _a71fb169f845 => {
        try {
          _db791a3994ab?.postMessage(_a71fb169f845, "*");
        } catch {}
        try {
          _1cc9f73b8568 && _1cc9f73b8568 !== _db791a3994ab && _1cc9f73b8568.postMessage(_a71fb169f845, "*");
        } catch {}
        try {
          window.parent?.postMessage(_a71fb169f845, "*");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_a71fb169f845, "*");
        } catch {}
      };
      window.addEventListener("keydown", _db791a3994ab => {
        const _1cc9f73b8568 = String(_db791a3994ab.key || "").toLowerCase();
        if (_db791a3994ab.altKey && !_db791a3994ab.ctrlKey && !_db791a3994ab.metaKey && 2 !== _db791a3994ab.location && "alt" === _1cc9f73b8568) return _db791a3994ab.preventDefault(), 
        _db791a3994ab.stopPropagation(), void c({
          type: "nyx:alt-prime"
        });
        if (_db791a3994ab.altKey && !_db791a3994ab.ctrlKey && !_db791a3994ab.metaKey && 2 !== _db791a3994ab.location && t(_db791a3994ab.target) && /^[acxvzy]$/.test(_1cc9f73b8568)) {
          if (_db791a3994ab.preventDefault(), _db791a3994ab.stopPropagation(), "a" === _1cc9f73b8568) return void (_db791a3994ab.target?.select ? _db791a3994ab.target.select() : document.execCommand?.("selectAll"));
          if ("c" === _1cc9f73b8568) return void n(e(_db791a3994ab.target));
          if ("x" === _1cc9f73b8568) {
            const _1cc9f73b8568 = e(_db791a3994ab.target);
            return n(_1cc9f73b8568), void r(_db791a3994ab.target, "");
          }
          if ("v" === _1cc9f73b8568) return void navigator.clipboard?.readText?.().then(_1cc9f73b8568 => r(_db791a3994ab.target, _1cc9f73b8568)).catch(() => {
            try {
              document.execCommand?.("paste");
            } catch {}
          });
          if ("z" === _1cc9f73b8568) return void document.execCommand?.("undo");
          if ("y" === _1cc9f73b8568) return void document.execCommand?.("redo");
        }
        return !_db791a3994ab.altKey || _db791a3994ab.ctrlKey || _db791a3994ab.metaKey || 2 === _db791a3994ab.location || !/^[1-9]$/.test(_1cc9f73b8568) && ![ "l", "d", "t", "w", "r", "arrowleft", "arrowright", "tab" ].includes(_1cc9f73b8568) ? void 0 : (_db791a3994ab.preventDefault(), 
        _db791a3994ab.stopPropagation(), void c({
          type: "nyx:alt-shortcut",
          key: _1cc9f73b8568,
          code: _db791a3994ab.code || "",
          location: _db791a3994ab.location || 0,
          shiftKey: !!_db791a3994ab.shiftKey
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
  }, r = _db791a3994ab => {
    if (!_db791a3994ab) return !1;
    try {
      return _db791a3994ab.document.open(), _db791a3994ab.document.write('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>nyx://blocked67haha</title><style>html,body{margin:0;width:100%;height:100%;background:#fff;color:#111;font:28px Raleway,Arial,sans-serif}body{display:grid;place-items:center;text-align:center}main{padding:24px}</style></head><body><main>are you trying to hack me scamma???</main></body></html>'), 
      _db791a3994ab.document.close(), _db791a3994ab.focus?.(), !0;
    } catch {
      return !1;
    }
  }, n = () => {
    const _db791a3994ab = null;
    return {
      closed: !1,
      focus() {
        try {
          _db791a3994ab?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _db791a3994ab?.blur?.();
        } catch {}
      },
      close() {
        try {
          _db791a3994ab?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return r(_db791a3994ab), this;
        },
        write() {
          r(_db791a3994ab);
        },
        writeln() {
          r(_db791a3994ab);
        },
        close() {
          r(_db791a3994ab);
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
          r(_db791a3994ab);
        },
        toString: () => "nyx://blocked67haha"
      }
    };
  }, o = _db791a3994ab => {
    const _1cc9f73b8568 = String(_db791a3994ab || "").trim();
    if (/^(?:blob|data):/i.test(_1cc9f73b8568)) return !1;
    const _a71fb169f845 = _1cc9f73b8568.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_a71fb169f845);
  }, i = (_db791a3994ab, _1cc9f73b8568 = "") => {
    const _a71fb169f845 = String(_db791a3994ab || "").trim();
    if (!_a71fb169f845 || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "nyx:download-request",
        url: _a71fb169f845,
        filename: String(_1cc9f73b8568 || ""),
        sourceUrl: String(location.href || "")
      }, "*"), !0;
    } catch {
      return !1;
    }
  };
  let c = (..._1cc9f73b8568) => o(_1cc9f73b8568[0]) && i(_1cc9f73b8568[0]) ? null : !e() && _db791a3994ab ? _db791a3994ab(..._1cc9f73b8568) : n();
  try {
    "function" == typeof _db791a3994ab && "function" == typeof Proxy && (c = new Proxy(_db791a3994ab, {
      apply: (_db791a3994ab, _1cc9f73b8568, _a71fb169f845) => o(_a71fb169f845[0]) && i(_a71fb169f845[0]) ? null : e() ? n() : Reflect.apply(_db791a3994ab, _1cc9f73b8568, _a71fb169f845),
      construct(_db791a3994ab, _1cc9f73b8568, _a71fb169f845) {
        if (!e()) try {
          return Reflect.construct(_db791a3994ab, _1cc9f73b8568, _a71fb169f845);
        } catch {
          return Reflect.apply(_db791a3994ab, window, _1cc9f73b8568);
        }
        return n();
      },
      get: (_db791a3994ab, _1cc9f73b8568, _a71fb169f845) => "__nyxPopupGuard" === _1cc9f73b8568 || ("toString" === _1cc9f73b8568 ? () => "function open() { [native code] }" : Reflect.get(_db791a3994ab, _1cc9f73b8568, _a71fb169f845))
    }));
  } catch {}
  const a = _db791a3994ab => {
    const _1cc9f73b8568 = String(_db791a3994ab || "").toLowerCase();
    return _1cc9f73b8568 && ![ "_self", "_parent", "_top" ].includes(_1cc9f73b8568);
  }, s = _db791a3994ab => !!_db791a3994ab && (!!_db791a3994ab.hasAttribute("download") || o(_db791a3994ab.href || _db791a3994ab.getAttribute("href") || ""));
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
    const _db791a3994ab = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!s(this) || !i(this.href || this.getAttribute("href"), this.getAttribute("download") || "")) {
        if (!e() || !a(this.target)) return _db791a3994ab.call(this);
        n();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("click", _db791a3994ab => {
    const _1cc9f73b8568 = _db791a3994ab.target?.closest?.("a[href]");
    if (_1cc9f73b8568) return s(_1cc9f73b8568) && i(_1cc9f73b8568.href || _1cc9f73b8568.getAttribute("href"), _1cc9f73b8568.getAttribute("download") || "") ? (_db791a3994ab.preventDefault(), 
    void _db791a3994ab.stopImmediatePropagation()) : void (e() && a(_1cc9f73b8568.getAttribute("target")) && (_db791a3994ab.preventDefault(), 
    _db791a3994ab.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("auxclick", _db791a3994ab => {
    const _1cc9f73b8568 = _db791a3994ab.target?.closest?.("a[href]");
    if (_1cc9f73b8568) return s(_1cc9f73b8568) && i(_1cc9f73b8568.href || _1cc9f73b8568.getAttribute("href"), _1cc9f73b8568.getAttribute("download") || "") ? (_db791a3994ab.preventDefault(), 
    void _db791a3994ab.stopImmediatePropagation()) : void (e() && a(_1cc9f73b8568.getAttribute("target")) && (_db791a3994ab.preventDefault(), 
    _db791a3994ab.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("submit", _db791a3994ab => {
    if (!e()) return;
    const _1cc9f73b8568 = _db791a3994ab.target;
    _1cc9f73b8568 && "FORM" === String(_1cc9f73b8568.tagName || "").toUpperCase() && a(_1cc9f73b8568.getAttribute("target")) && (_db791a3994ab.preventDefault(), 
    _db791a3994ab.stopImmediatePropagation(), n());
  }, !0));
  const u = _db791a3994ab => {
    const _1cc9f73b8568 = window[_db791a3994ab];
    if ("function" == typeof _1cc9f73b8568 && !_1cc9f73b8568.__nyxWrapped) try {
      Object.setPrototypeOf(r, _1cc9f73b8568), r.prototype = _1cc9f73b8568.prototype, 
      Object.defineProperty(r, "__nyxWrapped", {
        value: !0
      }), window[_db791a3994ab] = r;
    } catch {}
    function r(_db791a3994ab, _a71fb169f845, _a71bc22e4be3) {
      let _6f4f8193e87c = Number(_db791a3994ab), _2154a0ec4e7d = Number(_a71fb169f845);
      return (!Number.isFinite(_6f4f8193e87c) || _6f4f8193e87c < 0) && (_6f4f8193e87c = 0), 
      (!Number.isFinite(_2154a0ec4e7d) || _2154a0ec4e7d <= _6f4f8193e87c) && (_2154a0ec4e7d = _6f4f8193e87c + .001), 
      Reflect.construct(_1cc9f73b8568, [ _6f4f8193e87c, _2154a0ec4e7d, null == _a71bc22e4be3 ? "" : String(_a71bc22e4be3) ], new.target || r);
    }
  };
  u("VTTCue"), u("TextTrackCue");
})();
