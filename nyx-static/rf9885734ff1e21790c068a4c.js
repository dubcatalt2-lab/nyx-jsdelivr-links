(() => {
  if ("undefined" == typeof window || window.__nyxScramjetGuards) return;
  window.__nyxScramjetGuards = !0;
  const _2832f6366429 = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "trustedTypes", {
      configurable: !0,
      value: {
        createPolicy: (_2832f6366429, _6da50a7d4e62 = {}) => ({
          createHTML: _2832f6366429 => "function" == typeof _6da50a7d4e62.createHTML ? _6da50a7d4e62.createHTML(_2832f6366429) : _2832f6366429,
          createScript: _2832f6366429 => "function" == typeof _6da50a7d4e62.createScript ? _6da50a7d4e62.createScript(_2832f6366429) : _2832f6366429,
          createScriptURL: _2832f6366429 => "function" == typeof _6da50a7d4e62.createScriptURL ? _6da50a7d4e62.createScriptURL(_2832f6366429) : _2832f6366429
        })
      }
    });
  } catch {}
  try {
    const _2832f6366429 = Object.getOwnPropertyDescriptor(Document.prototype, "currentScript"), _6da50a7d4e62 = document.createElement("script");
    _6da50a7d4e62.setAttribute("nonce", ""), Object.defineProperty(Document.prototype, "currentScript", {
      configurable: !0,
      get() {
        let _dc69abff6c5e = null;
        try {
          _dc69abff6c5e = _2832f6366429?.get?.call(this) || null;
        } catch {}
        return _dc69abff6c5e || this.querySelector?.("script[src],script") || _6da50a7d4e62;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const t = _2832f6366429 => !(!_2832f6366429 || !_2832f6366429.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_2832f6366429.tagName || "")), e = _2832f6366429 => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_2832f6366429?.tagName || "") ? String(_2832f6366429.value || "").slice(_2832f6366429.selectionStart || 0, _2832f6366429.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, r = (_2832f6366429, _6da50a7d4e62) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_2832f6366429?.tagName || "")) {
            const _dc69abff6c5e = _2832f6366429.selectionStart || 0, _733361bcfc2a = _2832f6366429.selectionEnd || 0, _41b754ed74fa = String(_2832f6366429.value || "");
            _2832f6366429.value = _41b754ed74fa.slice(0, _dc69abff6c5e) + _6da50a7d4e62 + _41b754ed74fa.slice(_733361bcfc2a);
            const _063e44e79a92 = _dc69abff6c5e + String(_6da50a7d4e62).length;
            return _2832f6366429.setSelectionRange(_063e44e79a92, _063e44e79a92), void _2832f6366429.dispatchEvent(new Event("input", {
              bubbles: !0
            }));
          }
          document.execCommand?.("insertText", !1, _6da50a7d4e62);
        } catch {}
      }, n = async _2832f6366429 => {
        try {
          await (navigator.clipboard?.writeText(String(_2832f6366429 || "")));
        } catch {
          try {
            document.execCommand?.("copy");
          } catch {}
        }
      }, _2832f6366429 = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _6da50a7d4e62 = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), c = _dc69abff6c5e => {
        try {
          _2832f6366429?.postMessage(_dc69abff6c5e, "*");
        } catch {}
        try {
          _6da50a7d4e62 && _6da50a7d4e62 !== _2832f6366429 && _6da50a7d4e62.postMessage(_dc69abff6c5e, "*");
        } catch {}
        try {
          window.parent?.postMessage(_dc69abff6c5e, "*");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_dc69abff6c5e, "*");
        } catch {}
      };
      window.addEventListener("keydown", _2832f6366429 => {
        const _6da50a7d4e62 = String(_2832f6366429.key || "").toLowerCase();
        if (_2832f6366429.altKey && !_2832f6366429.ctrlKey && !_2832f6366429.metaKey && 2 !== _2832f6366429.location && "alt" === _6da50a7d4e62) return _2832f6366429.preventDefault(), 
        _2832f6366429.stopPropagation(), void c({
          type: "nyx:alt-prime"
        });
        if (_2832f6366429.altKey && !_2832f6366429.ctrlKey && !_2832f6366429.metaKey && 2 !== _2832f6366429.location && t(_2832f6366429.target) && /^[acxvzy]$/.test(_6da50a7d4e62)) {
          if (_2832f6366429.preventDefault(), _2832f6366429.stopPropagation(), "a" === _6da50a7d4e62) return void (_2832f6366429.target?.select ? _2832f6366429.target.select() : document.execCommand?.("selectAll"));
          if ("c" === _6da50a7d4e62) return void n(e(_2832f6366429.target));
          if ("x" === _6da50a7d4e62) {
            const _6da50a7d4e62 = e(_2832f6366429.target);
            return n(_6da50a7d4e62), void r(_2832f6366429.target, "");
          }
          if ("v" === _6da50a7d4e62) return void navigator.clipboard?.readText?.().then(_6da50a7d4e62 => r(_2832f6366429.target, _6da50a7d4e62)).catch(() => {
            try {
              document.execCommand?.("paste");
            } catch {}
          });
          if ("z" === _6da50a7d4e62) return void document.execCommand?.("undo");
          if ("y" === _6da50a7d4e62) return void document.execCommand?.("redo");
        }
        return !_2832f6366429.altKey || _2832f6366429.ctrlKey || _2832f6366429.metaKey || 2 === _2832f6366429.location || !/^[1-9]$/.test(_6da50a7d4e62) && ![ "l", "d", "t", "w", "r", "arrowleft", "arrowright", "tab" ].includes(_6da50a7d4e62) ? void 0 : (_2832f6366429.preventDefault(), 
        _2832f6366429.stopPropagation(), void c({
          type: "nyx:alt-shortcut",
          key: _6da50a7d4e62,
          code: _2832f6366429.code || "",
          location: _2832f6366429.location || 0,
          shiftKey: !!_2832f6366429.shiftKey
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
  }, r = _2832f6366429 => {
    if (!_2832f6366429) return !1;
    try {
      return _2832f6366429.document.open(), _2832f6366429.document.write('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>nyx://blocked67haha</title><style>html,body{margin:0;width:100%;height:100%;background:#fff;color:#111;font:28px Raleway,Arial,sans-serif}body{display:grid;place-items:center;text-align:center}main{padding:24px}</style></head><body><main>are you trying to hack me scamma???</main></body></html>'), 
      _2832f6366429.document.close(), _2832f6366429.focus?.(), !0;
    } catch {
      return !1;
    }
  }, n = () => {
    const _2832f6366429 = null;
    return {
      closed: !1,
      focus() {
        try {
          _2832f6366429?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _2832f6366429?.blur?.();
        } catch {}
      },
      close() {
        try {
          _2832f6366429?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return r(_2832f6366429), this;
        },
        write() {
          r(_2832f6366429);
        },
        writeln() {
          r(_2832f6366429);
        },
        close() {
          r(_2832f6366429);
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
          r(_2832f6366429);
        },
        toString: () => "nyx://blocked67haha"
      }
    };
  }, o = _2832f6366429 => {
    const _6da50a7d4e62 = String(_2832f6366429 || "").trim();
    if (/^(?:blob|data):/i.test(_6da50a7d4e62)) return !1;
    const _dc69abff6c5e = _6da50a7d4e62.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_dc69abff6c5e);
  }, i = (_2832f6366429, _6da50a7d4e62 = "") => {
    const _dc69abff6c5e = String(_2832f6366429 || "").trim();
    if (!_dc69abff6c5e || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "nyx:download-request",
        url: _dc69abff6c5e,
        filename: String(_6da50a7d4e62 || ""),
        sourceUrl: String(location.href || "")
      }, "*"), !0;
    } catch {
      return !1;
    }
  };
  let c = (..._6da50a7d4e62) => o(_6da50a7d4e62[0]) && i(_6da50a7d4e62[0]) ? null : !e() && _2832f6366429 ? _2832f6366429(..._6da50a7d4e62) : n();
  try {
    "function" == typeof _2832f6366429 && "function" == typeof Proxy && (c = new Proxy(_2832f6366429, {
      apply: (_2832f6366429, _6da50a7d4e62, _dc69abff6c5e) => o(_dc69abff6c5e[0]) && i(_dc69abff6c5e[0]) ? null : e() ? n() : Reflect.apply(_2832f6366429, _6da50a7d4e62, _dc69abff6c5e),
      construct(_2832f6366429, _6da50a7d4e62, _dc69abff6c5e) {
        if (!e()) try {
          return Reflect.construct(_2832f6366429, _6da50a7d4e62, _dc69abff6c5e);
        } catch {
          return Reflect.apply(_2832f6366429, window, _6da50a7d4e62);
        }
        return n();
      },
      get: (_2832f6366429, _6da50a7d4e62, _dc69abff6c5e) => "__nyxPopupGuard" === _6da50a7d4e62 || ("toString" === _6da50a7d4e62 ? () => "function open() { [native code] }" : Reflect.get(_2832f6366429, _6da50a7d4e62, _dc69abff6c5e))
    }));
  } catch {}
  const a = _2832f6366429 => {
    const _6da50a7d4e62 = String(_2832f6366429 || "").toLowerCase();
    return _6da50a7d4e62 && ![ "_self", "_parent", "_top" ].includes(_6da50a7d4e62);
  }, s = _2832f6366429 => !!_2832f6366429 && (!!_2832f6366429.hasAttribute("download") || o(_2832f6366429.href || _2832f6366429.getAttribute("href") || ""));
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
    const _2832f6366429 = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!s(this) || !i(this.href || this.getAttribute("href"), this.getAttribute("download") || "")) {
        if (!e() || !a(this.target)) return _2832f6366429.call(this);
        n();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("click", _2832f6366429 => {
    const _6da50a7d4e62 = _2832f6366429.target?.closest?.("a[href]");
    if (_6da50a7d4e62) return s(_6da50a7d4e62) && i(_6da50a7d4e62.href || _6da50a7d4e62.getAttribute("href"), _6da50a7d4e62.getAttribute("download") || "") ? (_2832f6366429.preventDefault(), 
    void _2832f6366429.stopImmediatePropagation()) : void (e() && a(_6da50a7d4e62.getAttribute("target")) && (_2832f6366429.preventDefault(), 
    _2832f6366429.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("auxclick", _2832f6366429 => {
    const _6da50a7d4e62 = _2832f6366429.target?.closest?.("a[href]");
    if (_6da50a7d4e62) return s(_6da50a7d4e62) && i(_6da50a7d4e62.href || _6da50a7d4e62.getAttribute("href"), _6da50a7d4e62.getAttribute("download") || "") ? (_2832f6366429.preventDefault(), 
    void _2832f6366429.stopImmediatePropagation()) : void (e() && a(_6da50a7d4e62.getAttribute("target")) && (_2832f6366429.preventDefault(), 
    _2832f6366429.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("submit", _2832f6366429 => {
    if (!e()) return;
    const _6da50a7d4e62 = _2832f6366429.target;
    _6da50a7d4e62 && "FORM" === String(_6da50a7d4e62.tagName || "").toUpperCase() && a(_6da50a7d4e62.getAttribute("target")) && (_2832f6366429.preventDefault(), 
    _2832f6366429.stopImmediatePropagation(), n());
  }, !0));
  const u = _2832f6366429 => {
    const _6da50a7d4e62 = window[_2832f6366429];
    if ("function" == typeof _6da50a7d4e62 && !_6da50a7d4e62.__nyxWrapped) try {
      Object.setPrototypeOf(r, _6da50a7d4e62), r.prototype = _6da50a7d4e62.prototype, 
      Object.defineProperty(r, "__nyxWrapped", {
        value: !0
      }), window[_2832f6366429] = r;
    } catch {}
    function r(_2832f6366429, _dc69abff6c5e, _733361bcfc2a) {
      let _41b754ed74fa = Number(_2832f6366429), _063e44e79a92 = Number(_dc69abff6c5e);
      return (!Number.isFinite(_41b754ed74fa) || _41b754ed74fa < 0) && (_41b754ed74fa = 0), 
      (!Number.isFinite(_063e44e79a92) || _063e44e79a92 <= _41b754ed74fa) && (_063e44e79a92 = _41b754ed74fa + .001), 
      Reflect.construct(_6da50a7d4e62, [ _41b754ed74fa, _063e44e79a92, null == _733361bcfc2a ? "" : String(_733361bcfc2a) ], new.target || r);
    }
  };
  u("VTTCue"), u("TextTrackCue");
})();
