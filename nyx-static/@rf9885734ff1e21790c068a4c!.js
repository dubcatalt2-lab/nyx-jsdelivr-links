(() => {
  if ("undefined" == typeof window || window.__nyxScramjetGuards) return;
  window.__nyxScramjetGuards = !0;
  const _372455ff6d4b = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "trustedTypes", {
      configurable: !0,
      value: {
        createPolicy: (_372455ff6d4b, _d0ed0ccaca01 = {}) => ({
          createHTML: _372455ff6d4b => "function" == typeof _d0ed0ccaca01.createHTML ? _d0ed0ccaca01.createHTML(_372455ff6d4b) : _372455ff6d4b,
          createScript: _372455ff6d4b => "function" == typeof _d0ed0ccaca01.createScript ? _d0ed0ccaca01.createScript(_372455ff6d4b) : _372455ff6d4b,
          createScriptURL: _372455ff6d4b => "function" == typeof _d0ed0ccaca01.createScriptURL ? _d0ed0ccaca01.createScriptURL(_372455ff6d4b) : _372455ff6d4b
        })
      }
    });
  } catch {}
  try {
    const _372455ff6d4b = Object.getOwnPropertyDescriptor(Document.prototype, "currentScript"), _d0ed0ccaca01 = document.createElement("script");
    _d0ed0ccaca01.setAttribute("nonce", ""), Object.defineProperty(Document.prototype, "currentScript", {
      configurable: !0,
      get() {
        let _1759fb1a9af6 = null;
        try {
          _1759fb1a9af6 = _372455ff6d4b?.get?.call(this) || null;
        } catch {}
        return _1759fb1a9af6 || this.querySelector?.("script[src],script") || _d0ed0ccaca01;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const t = _372455ff6d4b => !(!_372455ff6d4b || !_372455ff6d4b.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_372455ff6d4b.tagName || "")), e = _372455ff6d4b => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_372455ff6d4b?.tagName || "") ? String(_372455ff6d4b.value || "").slice(_372455ff6d4b.selectionStart || 0, _372455ff6d4b.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, r = (_372455ff6d4b, _d0ed0ccaca01) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_372455ff6d4b?.tagName || "")) {
            const _1759fb1a9af6 = _372455ff6d4b.selectionStart || 0, _5ec9d0a8186c = _372455ff6d4b.selectionEnd || 0, _181ea0f3e574 = String(_372455ff6d4b.value || "");
            _372455ff6d4b.value = _181ea0f3e574.slice(0, _1759fb1a9af6) + _d0ed0ccaca01 + _181ea0f3e574.slice(_5ec9d0a8186c);
            const _f2b04b2bc342 = _1759fb1a9af6 + String(_d0ed0ccaca01).length;
            return _372455ff6d4b.setSelectionRange(_f2b04b2bc342, _f2b04b2bc342), void _372455ff6d4b.dispatchEvent(new Event("input", {
              bubbles: !0
            }));
          }
          document.execCommand?.("insertText", !1, _d0ed0ccaca01);
        } catch {}
      }, n = async _372455ff6d4b => {
        try {
          await (navigator.clipboard?.writeText(String(_372455ff6d4b || "")));
        } catch {
          try {
            document.execCommand?.("copy");
          } catch {}
        }
      }, _372455ff6d4b = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _d0ed0ccaca01 = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), c = _1759fb1a9af6 => {
        try {
          _372455ff6d4b?.postMessage(_1759fb1a9af6, "*");
        } catch {}
        try {
          _d0ed0ccaca01 && _d0ed0ccaca01 !== _372455ff6d4b && _d0ed0ccaca01.postMessage(_1759fb1a9af6, "*");
        } catch {}
        try {
          window.parent?.postMessage(_1759fb1a9af6, "*");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_1759fb1a9af6, "*");
        } catch {}
      };
      window.addEventListener("keydown", _372455ff6d4b => {
        const _d0ed0ccaca01 = String(_372455ff6d4b.key || "").toLowerCase();
        if (_372455ff6d4b.altKey && !_372455ff6d4b.ctrlKey && !_372455ff6d4b.metaKey && 2 !== _372455ff6d4b.location && "alt" === _d0ed0ccaca01) return _372455ff6d4b.preventDefault(), 
        _372455ff6d4b.stopPropagation(), void c({
          type: "nyx:alt-prime"
        });
        if (_372455ff6d4b.altKey && !_372455ff6d4b.ctrlKey && !_372455ff6d4b.metaKey && 2 !== _372455ff6d4b.location && t(_372455ff6d4b.target) && /^[acxvzy]$/.test(_d0ed0ccaca01)) {
          if (_372455ff6d4b.preventDefault(), _372455ff6d4b.stopPropagation(), "a" === _d0ed0ccaca01) return void (_372455ff6d4b.target?.select ? _372455ff6d4b.target.select() : document.execCommand?.("selectAll"));
          if ("c" === _d0ed0ccaca01) return void n(e(_372455ff6d4b.target));
          if ("x" === _d0ed0ccaca01) {
            const _d0ed0ccaca01 = e(_372455ff6d4b.target);
            return n(_d0ed0ccaca01), void r(_372455ff6d4b.target, "");
          }
          if ("v" === _d0ed0ccaca01) return void navigator.clipboard?.readText?.().then(_d0ed0ccaca01 => r(_372455ff6d4b.target, _d0ed0ccaca01)).catch(() => {
            try {
              document.execCommand?.("paste");
            } catch {}
          });
          if ("z" === _d0ed0ccaca01) return void document.execCommand?.("undo");
          if ("y" === _d0ed0ccaca01) return void document.execCommand?.("redo");
        }
        return !_372455ff6d4b.altKey || _372455ff6d4b.ctrlKey || _372455ff6d4b.metaKey || 2 === _372455ff6d4b.location || !/^[1-9]$/.test(_d0ed0ccaca01) && ![ "l", "d", "t", "w", "r", "arrowleft", "arrowright", "tab" ].includes(_d0ed0ccaca01) ? void 0 : (_372455ff6d4b.preventDefault(), 
        _372455ff6d4b.stopPropagation(), void c({
          type: "nyx:alt-shortcut",
          key: _d0ed0ccaca01,
          code: _372455ff6d4b.code || "",
          location: _372455ff6d4b.location || 0,
          shiftKey: !!_372455ff6d4b.shiftKey
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
  }, r = _372455ff6d4b => {
    if (!_372455ff6d4b) return !1;
    try {
      return _372455ff6d4b.document.open(), _372455ff6d4b.document.write('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>nyx://blocked67haha</title><style>html,body{margin:0;width:100%;height:100%;background:#fff;color:#111;font:28px Raleway,Arial,sans-serif}body{display:grid;place-items:center;text-align:center}main{padding:24px}</style></head><body><main>are you trying to hack me scamma???</main></body></html>'), 
      _372455ff6d4b.document.close(), _372455ff6d4b.focus?.(), !0;
    } catch {
      return !1;
    }
  }, n = () => {
    const _372455ff6d4b = null;
    return {
      closed: !1,
      focus() {
        try {
          _372455ff6d4b?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _372455ff6d4b?.blur?.();
        } catch {}
      },
      close() {
        try {
          _372455ff6d4b?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return r(_372455ff6d4b), this;
        },
        write() {
          r(_372455ff6d4b);
        },
        writeln() {
          r(_372455ff6d4b);
        },
        close() {
          r(_372455ff6d4b);
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
          r(_372455ff6d4b);
        },
        toString: () => "nyx://blocked67haha"
      }
    };
  }, o = _372455ff6d4b => {
    const _d0ed0ccaca01 = String(_372455ff6d4b || "").trim();
    if (/^(?:blob|data):/i.test(_d0ed0ccaca01)) return !1;
    const _1759fb1a9af6 = _d0ed0ccaca01.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_1759fb1a9af6);
  }, i = (_372455ff6d4b, _d0ed0ccaca01 = "") => {
    const _1759fb1a9af6 = String(_372455ff6d4b || "").trim();
    if (!_1759fb1a9af6 || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "nyx:download-request",
        url: _1759fb1a9af6,
        filename: String(_d0ed0ccaca01 || ""),
        sourceUrl: String(location.href || "")
      }, "*"), !0;
    } catch {
      return !1;
    }
  };
  let c = (..._d0ed0ccaca01) => o(_d0ed0ccaca01[0]) && i(_d0ed0ccaca01[0]) ? null : !e() && _372455ff6d4b ? _372455ff6d4b(..._d0ed0ccaca01) : n();
  try {
    "function" == typeof _372455ff6d4b && "function" == typeof Proxy && (c = new Proxy(_372455ff6d4b, {
      apply: (_372455ff6d4b, _d0ed0ccaca01, _1759fb1a9af6) => o(_1759fb1a9af6[0]) && i(_1759fb1a9af6[0]) ? null : e() ? n() : Reflect.apply(_372455ff6d4b, _d0ed0ccaca01, _1759fb1a9af6),
      construct(_372455ff6d4b, _d0ed0ccaca01, _1759fb1a9af6) {
        if (!e()) try {
          return Reflect.construct(_372455ff6d4b, _d0ed0ccaca01, _1759fb1a9af6);
        } catch {
          return Reflect.apply(_372455ff6d4b, window, _d0ed0ccaca01);
        }
        return n();
      },
      get: (_372455ff6d4b, _d0ed0ccaca01, _1759fb1a9af6) => "__nyxPopupGuard" === _d0ed0ccaca01 || ("toString" === _d0ed0ccaca01 ? () => "function open() { [native code] }" : Reflect.get(_372455ff6d4b, _d0ed0ccaca01, _1759fb1a9af6))
    }));
  } catch {}
  const a = _372455ff6d4b => {
    const _d0ed0ccaca01 = String(_372455ff6d4b || "").toLowerCase();
    return _d0ed0ccaca01 && ![ "_self", "_parent", "_top" ].includes(_d0ed0ccaca01);
  }, s = _372455ff6d4b => !!_372455ff6d4b && (!!_372455ff6d4b.hasAttribute("download") || o(_372455ff6d4b.href || _372455ff6d4b.getAttribute("href") || ""));
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
    const _372455ff6d4b = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!s(this) || !i(this.href || this.getAttribute("href"), this.getAttribute("download") || "")) {
        if (!e() || !a(this.target)) return _372455ff6d4b.call(this);
        n();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("click", _372455ff6d4b => {
    const _d0ed0ccaca01 = _372455ff6d4b.target?.closest?.("a[href]");
    if (_d0ed0ccaca01) return s(_d0ed0ccaca01) && i(_d0ed0ccaca01.href || _d0ed0ccaca01.getAttribute("href"), _d0ed0ccaca01.getAttribute("download") || "") ? (_372455ff6d4b.preventDefault(), 
    void _372455ff6d4b.stopImmediatePropagation()) : void (e() && a(_d0ed0ccaca01.getAttribute("target")) && (_372455ff6d4b.preventDefault(), 
    _372455ff6d4b.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("auxclick", _372455ff6d4b => {
    const _d0ed0ccaca01 = _372455ff6d4b.target?.closest?.("a[href]");
    if (_d0ed0ccaca01) return s(_d0ed0ccaca01) && i(_d0ed0ccaca01.href || _d0ed0ccaca01.getAttribute("href"), _d0ed0ccaca01.getAttribute("download") || "") ? (_372455ff6d4b.preventDefault(), 
    void _372455ff6d4b.stopImmediatePropagation()) : void (e() && a(_d0ed0ccaca01.getAttribute("target")) && (_372455ff6d4b.preventDefault(), 
    _372455ff6d4b.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("submit", _372455ff6d4b => {
    if (!e()) return;
    const _d0ed0ccaca01 = _372455ff6d4b.target;
    _d0ed0ccaca01 && "FORM" === String(_d0ed0ccaca01.tagName || "").toUpperCase() && a(_d0ed0ccaca01.getAttribute("target")) && (_372455ff6d4b.preventDefault(), 
    _372455ff6d4b.stopImmediatePropagation(), n());
  }, !0));
  const u = _372455ff6d4b => {
    const _d0ed0ccaca01 = window[_372455ff6d4b];
    if ("function" == typeof _d0ed0ccaca01 && !_d0ed0ccaca01.__nyxWrapped) try {
      Object.setPrototypeOf(r, _d0ed0ccaca01), r.prototype = _d0ed0ccaca01.prototype, 
      Object.defineProperty(r, "__nyxWrapped", {
        value: !0
      }), window[_372455ff6d4b] = r;
    } catch {}
    function r(_372455ff6d4b, _1759fb1a9af6, _5ec9d0a8186c) {
      let _181ea0f3e574 = Number(_372455ff6d4b), _f2b04b2bc342 = Number(_1759fb1a9af6);
      return (!Number.isFinite(_181ea0f3e574) || _181ea0f3e574 < 0) && (_181ea0f3e574 = 0), 
      (!Number.isFinite(_f2b04b2bc342) || _f2b04b2bc342 <= _181ea0f3e574) && (_f2b04b2bc342 = _181ea0f3e574 + .001), 
      Reflect.construct(_d0ed0ccaca01, [ _181ea0f3e574, _f2b04b2bc342, null == _5ec9d0a8186c ? "" : String(_5ec9d0a8186c) ], new.target || r);
    }
  };
  u("VTTCue"), u("TextTrackCue");
})();
