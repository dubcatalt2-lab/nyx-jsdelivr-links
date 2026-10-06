(() => {
  if ("undefined" == typeof window || window.__nyxStudyJetGuards) return;
  window.__nyxStudyJetGuards = !0;
  const _dfb6bddeb42b = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "trustedTypes", {
      configurable: !0,
      value: {
        createPolicy: (_dfb6bddeb42b, _6b2b07c03271 = {}) => ({
          createHTML: _dfb6bddeb42b => "function" == typeof _6b2b07c03271.createHTML ? _6b2b07c03271.createHTML(_dfb6bddeb42b) : _dfb6bddeb42b,
          createScript: _dfb6bddeb42b => "function" == typeof _6b2b07c03271.createScript ? _6b2b07c03271.createScript(_dfb6bddeb42b) : _dfb6bddeb42b,
          createScriptURL: _dfb6bddeb42b => "function" == typeof _6b2b07c03271.createScriptURL ? _6b2b07c03271.createScriptURL(_dfb6bddeb42b) : _dfb6bddeb42b
        })
      }
    });
  } catch {}
  try {
    const _dfb6bddeb42b = Object.getOwnPropertyDescriptor(Document.prototype, "currentScript"), _6b2b07c03271 = document.createElement("script");
    _6b2b07c03271.setAttribute("nonce", ""), Object.defineProperty(Document.prototype, "currentScript", {
      configurable: !0,
      get() {
        let _69ae3afb4841 = null;
        try {
          _69ae3afb4841 = _dfb6bddeb42b?.get?.call(this) || null;
        } catch {}
        return _69ae3afb4841 || this.querySelector?.("script[src],script") || _6b2b07c03271;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const t = _dfb6bddeb42b => !(!_dfb6bddeb42b || !_dfb6bddeb42b.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_dfb6bddeb42b.tagName || "")), e = _dfb6bddeb42b => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_dfb6bddeb42b?.tagName || "") ? String(_dfb6bddeb42b.value || "").slice(_dfb6bddeb42b.selectionStart || 0, _dfb6bddeb42b.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, r = (_dfb6bddeb42b, _6b2b07c03271) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_dfb6bddeb42b?.tagName || "")) {
            const _69ae3afb4841 = _dfb6bddeb42b.selectionStart || 0, _7f761d958066 = _dfb6bddeb42b.selectionEnd || 0, _538e586df86a = String(_dfb6bddeb42b.value || "");
            _dfb6bddeb42b.value = _538e586df86a.slice(0, _69ae3afb4841) + _6b2b07c03271 + _538e586df86a.slice(_7f761d958066);
            const _0d0a95aaf801 = _69ae3afb4841 + String(_6b2b07c03271).length;
            return _dfb6bddeb42b.setSelectionRange(_0d0a95aaf801, _0d0a95aaf801), void _dfb6bddeb42b.dispatchEvent(new Event("input", {
              bubbles: !0
            }));
          }
          document.execCommand?.("insertText", !1, _6b2b07c03271);
        } catch {}
      }, n = async _dfb6bddeb42b => {
        try {
          await (navigator.clipboard?.writeText(String(_dfb6bddeb42b || "")));
        } catch {
          try {
            document.execCommand?.("copy");
          } catch {}
        }
      }, _dfb6bddeb42b = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _6b2b07c03271 = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), c = _69ae3afb4841 => {
        try {
          _dfb6bddeb42b?.postMessage(_69ae3afb4841, "*");
        } catch {}
        try {
          _6b2b07c03271 && _6b2b07c03271 !== _dfb6bddeb42b && _6b2b07c03271.postMessage(_69ae3afb4841, "*");
        } catch {}
        try {
          window.parent?.postMessage(_69ae3afb4841, "*");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_69ae3afb4841, "*");
        } catch {}
      };
      window.addEventListener("keydown", _dfb6bddeb42b => {
        const _6b2b07c03271 = String(_dfb6bddeb42b.key || "").toLowerCase();
        if (_dfb6bddeb42b.altKey && !_dfb6bddeb42b.ctrlKey && !_dfb6bddeb42b.metaKey && 2 !== _dfb6bddeb42b.location && "alt" === _6b2b07c03271) return _dfb6bddeb42b.preventDefault(), 
        _dfb6bddeb42b.stopPropagation(), void c({
          type: "nyx:alt-prime"
        });
        if (_dfb6bddeb42b.altKey && !_dfb6bddeb42b.ctrlKey && !_dfb6bddeb42b.metaKey && 2 !== _dfb6bddeb42b.location && t(_dfb6bddeb42b.target) && /^[acxvzy]$/.test(_6b2b07c03271)) {
          if (_dfb6bddeb42b.preventDefault(), _dfb6bddeb42b.stopPropagation(), "a" === _6b2b07c03271) return void (_dfb6bddeb42b.target?.select ? _dfb6bddeb42b.target.select() : document.execCommand?.("selectAll"));
          if ("c" === _6b2b07c03271) return void n(e(_dfb6bddeb42b.target));
          if ("x" === _6b2b07c03271) {
            const _6b2b07c03271 = e(_dfb6bddeb42b.target);
            return n(_6b2b07c03271), void r(_dfb6bddeb42b.target, "");
          }
          if ("v" === _6b2b07c03271) return void navigator.clipboard?.readText?.().then(_6b2b07c03271 => r(_dfb6bddeb42b.target, _6b2b07c03271)).catch(() => {
            try {
              document.execCommand?.("paste");
            } catch {}
          });
          if ("z" === _6b2b07c03271) return void document.execCommand?.("undo");
          if ("y" === _6b2b07c03271) return void document.execCommand?.("redo");
        }
        return !_dfb6bddeb42b.altKey || _dfb6bddeb42b.ctrlKey || _dfb6bddeb42b.metaKey || 2 === _dfb6bddeb42b.location || !/^[1-9]$/.test(_6b2b07c03271) && ![ "l", "d", "t", "w", "r", "arrowleft", "arrowright", "tab" ].includes(_6b2b07c03271) ? void 0 : (_dfb6bddeb42b.preventDefault(), 
        _dfb6bddeb42b.stopPropagation(), void c({
          type: "nyx:alt-shortcut",
          key: _6b2b07c03271,
          code: _dfb6bddeb42b.code || "",
          location: _dfb6bddeb42b.location || 0,
          shiftKey: !!_dfb6bddeb42b.shiftKey
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
  }, r = _dfb6bddeb42b => {
    if (!_dfb6bddeb42b) return !1;
    try {
      return _dfb6bddeb42b.document.open(), _dfb6bddeb42b.document.write('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>nyx://blocked67haha</title><style>html,body{margin:0;width:100%;height:100%;background:#fff;color:#111;font:28px Raleway,Arial,sans-serif}body{display:grid;place-items:center;text-align:center}main{padding:24px}</style></head><body><main>are you trying to hack me scamma???</main></body></html>'), 
      _dfb6bddeb42b.document.close(), _dfb6bddeb42b.focus?.(), !0;
    } catch {
      return !1;
    }
  }, n = () => {
    const _dfb6bddeb42b = null;
    return {
      closed: !1,
      focus() {
        try {
          _dfb6bddeb42b?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _dfb6bddeb42b?.blur?.();
        } catch {}
      },
      close() {
        try {
          _dfb6bddeb42b?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return r(_dfb6bddeb42b), this;
        },
        write() {
          r(_dfb6bddeb42b);
        },
        writeln() {
          r(_dfb6bddeb42b);
        },
        close() {
          r(_dfb6bddeb42b);
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
          r(_dfb6bddeb42b);
        },
        toString: () => "nyx://blocked67haha"
      }
    };
  }, o = _dfb6bddeb42b => {
    const _6b2b07c03271 = String(_dfb6bddeb42b || "").trim();
    if (/^(?:blob|data):/i.test(_6b2b07c03271)) return !1;
    const _69ae3afb4841 = _6b2b07c03271.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_69ae3afb4841);
  }, i = (_dfb6bddeb42b, _6b2b07c03271 = "") => {
    const _69ae3afb4841 = String(_dfb6bddeb42b || "").trim();
    if (!_69ae3afb4841 || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "nyx:download-request",
        url: _69ae3afb4841,
        filename: String(_6b2b07c03271 || ""),
        sourceUrl: String(location.href || "")
      }, "*"), !0;
    } catch {
      return !1;
    }
  };
  let c = (..._6b2b07c03271) => o(_6b2b07c03271[0]) && i(_6b2b07c03271[0]) ? null : !e() && _dfb6bddeb42b ? _dfb6bddeb42b(..._6b2b07c03271) : n();
  try {
    "function" == typeof _dfb6bddeb42b && "function" == typeof Proxy && (c = new Proxy(_dfb6bddeb42b, {
      apply: (_dfb6bddeb42b, _6b2b07c03271, _69ae3afb4841) => o(_69ae3afb4841[0]) && i(_69ae3afb4841[0]) ? null : e() ? n() : Reflect.apply(_dfb6bddeb42b, _6b2b07c03271, _69ae3afb4841),
      construct(_dfb6bddeb42b, _6b2b07c03271, _69ae3afb4841) {
        if (!e()) try {
          return Reflect.construct(_dfb6bddeb42b, _6b2b07c03271, _69ae3afb4841);
        } catch {
          return Reflect.apply(_dfb6bddeb42b, window, _6b2b07c03271);
        }
        return n();
      },
      get: (_dfb6bddeb42b, _6b2b07c03271, _69ae3afb4841) => "__nyxPopupGuard" === _6b2b07c03271 || ("toString" === _6b2b07c03271 ? () => "function open() { [native code] }" : Reflect.get(_dfb6bddeb42b, _6b2b07c03271, _69ae3afb4841))
    }));
  } catch {}
  const a = _dfb6bddeb42b => {
    const _6b2b07c03271 = String(_dfb6bddeb42b || "").toLowerCase();
    return _6b2b07c03271 && ![ "_self", "_parent", "_top" ].includes(_6b2b07c03271);
  }, s = _dfb6bddeb42b => !!_dfb6bddeb42b && (!!_dfb6bddeb42b.hasAttribute("download") || o(_dfb6bddeb42b.href || _dfb6bddeb42b.getAttribute("href") || ""));
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
    const _dfb6bddeb42b = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!s(this) || !i(this.href || this.getAttribute("href"), this.getAttribute("download") || "")) {
        if (!e() || !a(this.target)) return _dfb6bddeb42b.call(this);
        n();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("click", _dfb6bddeb42b => {
    const _6b2b07c03271 = _dfb6bddeb42b.target?.closest?.("a[href]");
    if (_6b2b07c03271) return s(_6b2b07c03271) && i(_6b2b07c03271.href || _6b2b07c03271.getAttribute("href"), _6b2b07c03271.getAttribute("download") || "") ? (_dfb6bddeb42b.preventDefault(), 
    void _dfb6bddeb42b.stopImmediatePropagation()) : void (e() && a(_6b2b07c03271.getAttribute("target")) && (_dfb6bddeb42b.preventDefault(), 
    _dfb6bddeb42b.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("auxclick", _dfb6bddeb42b => {
    const _6b2b07c03271 = _dfb6bddeb42b.target?.closest?.("a[href]");
    if (_6b2b07c03271) return s(_6b2b07c03271) && i(_6b2b07c03271.href || _6b2b07c03271.getAttribute("href"), _6b2b07c03271.getAttribute("download") || "") ? (_dfb6bddeb42b.preventDefault(), 
    void _dfb6bddeb42b.stopImmediatePropagation()) : void (e() && a(_6b2b07c03271.getAttribute("target")) && (_dfb6bddeb42b.preventDefault(), 
    _dfb6bddeb42b.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("submit", _dfb6bddeb42b => {
    if (!e()) return;
    const _6b2b07c03271 = _dfb6bddeb42b.target;
    _6b2b07c03271 && "FORM" === String(_6b2b07c03271.tagName || "").toUpperCase() && a(_6b2b07c03271.getAttribute("target")) && (_dfb6bddeb42b.preventDefault(), 
    _dfb6bddeb42b.stopImmediatePropagation(), n());
  }, !0));
  const u = _dfb6bddeb42b => {
    const _6b2b07c03271 = window[_dfb6bddeb42b];
    if ("function" == typeof _6b2b07c03271 && !_6b2b07c03271.__nyxWrapped) try {
      Object.setPrototypeOf(r, _6b2b07c03271), r.prototype = _6b2b07c03271.prototype, 
      Object.defineProperty(r, "__nyxWrapped", {
        value: !0
      }), window[_dfb6bddeb42b] = r;
    } catch {}
    function r(_dfb6bddeb42b, _69ae3afb4841, _7f761d958066) {
      let _538e586df86a = Number(_dfb6bddeb42b), _0d0a95aaf801 = Number(_69ae3afb4841);
      return (!Number.isFinite(_538e586df86a) || _538e586df86a < 0) && (_538e586df86a = 0), 
      (!Number.isFinite(_0d0a95aaf801) || _0d0a95aaf801 <= _538e586df86a) && (_0d0a95aaf801 = _538e586df86a + .001), 
      Reflect.construct(_6b2b07c03271, [ _538e586df86a, _0d0a95aaf801, null == _7f761d958066 ? "" : String(_7f761d958066) ], new.target || r);
    }
  };
  u("VTTCue"), u("TextTrackCue");
})();
