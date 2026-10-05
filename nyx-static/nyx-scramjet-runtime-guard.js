(() => {
  if ("undefined" == typeof window || window.__nyxScramjetGuards) return;
  window.__nyxScramjetGuards = !0;
  const _59b4ea9ef4cd = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "trustedTypes", {
      configurable: !0,
      value: {
        createPolicy: (_59b4ea9ef4cd, _d823eb338276 = {}) => ({
          createHTML: _59b4ea9ef4cd => "function" == typeof _d823eb338276.createHTML ? _d823eb338276.createHTML(_59b4ea9ef4cd) : _59b4ea9ef4cd,
          createScript: _59b4ea9ef4cd => "function" == typeof _d823eb338276.createScript ? _d823eb338276.createScript(_59b4ea9ef4cd) : _59b4ea9ef4cd,
          createScriptURL: _59b4ea9ef4cd => "function" == typeof _d823eb338276.createScriptURL ? _d823eb338276.createScriptURL(_59b4ea9ef4cd) : _59b4ea9ef4cd
        })
      }
    });
  } catch {}
  try {
    const _59b4ea9ef4cd = Object.getOwnPropertyDescriptor(Document.prototype, "currentScript"), _d823eb338276 = document.createElement("script");
    _d823eb338276.setAttribute("nonce", ""), Object.defineProperty(Document.prototype, "currentScript", {
      configurable: !0,
      get() {
        let _f6c80621f6ce = null;
        try {
          _f6c80621f6ce = _59b4ea9ef4cd?.get?.call(this) || null;
        } catch {}
        return _f6c80621f6ce || this.querySelector?.("script[src],script") || _d823eb338276;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const t = _59b4ea9ef4cd => !(!_59b4ea9ef4cd || !_59b4ea9ef4cd.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_59b4ea9ef4cd.tagName || "")), e = _59b4ea9ef4cd => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_59b4ea9ef4cd?.tagName || "") ? String(_59b4ea9ef4cd.value || "").slice(_59b4ea9ef4cd.selectionStart || 0, _59b4ea9ef4cd.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, r = (_59b4ea9ef4cd, _d823eb338276) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_59b4ea9ef4cd?.tagName || "")) {
            const _f6c80621f6ce = _59b4ea9ef4cd.selectionStart || 0, _ea1f3903c1bf = _59b4ea9ef4cd.selectionEnd || 0, _f4979a292da5 = String(_59b4ea9ef4cd.value || "");
            _59b4ea9ef4cd.value = _f4979a292da5.slice(0, _f6c80621f6ce) + _d823eb338276 + _f4979a292da5.slice(_ea1f3903c1bf);
            const _cd2301448e3d = _f6c80621f6ce + String(_d823eb338276).length;
            return _59b4ea9ef4cd.setSelectionRange(_cd2301448e3d, _cd2301448e3d), void _59b4ea9ef4cd.dispatchEvent(new Event("input", {
              bubbles: !0
            }));
          }
          document.execCommand?.("insertText", !1, _d823eb338276);
        } catch {}
      }, n = async _59b4ea9ef4cd => {
        try {
          await (navigator.clipboard?.writeText(String(_59b4ea9ef4cd || "")));
        } catch {
          try {
            document.execCommand?.("copy");
          } catch {}
        }
      }, _59b4ea9ef4cd = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _d823eb338276 = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), c = _f6c80621f6ce => {
        try {
          _59b4ea9ef4cd?.postMessage(_f6c80621f6ce, "*");
        } catch {}
        try {
          _d823eb338276 && _d823eb338276 !== _59b4ea9ef4cd && _d823eb338276.postMessage(_f6c80621f6ce, "*");
        } catch {}
        try {
          window.parent?.postMessage(_f6c80621f6ce, "*");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_f6c80621f6ce, "*");
        } catch {}
      };
      window.addEventListener("keydown", _59b4ea9ef4cd => {
        const _d823eb338276 = String(_59b4ea9ef4cd.key || "").toLowerCase();
        if (_59b4ea9ef4cd.altKey && !_59b4ea9ef4cd.ctrlKey && !_59b4ea9ef4cd.metaKey && 2 !== _59b4ea9ef4cd.location && "alt" === _d823eb338276) return _59b4ea9ef4cd.preventDefault(), 
        _59b4ea9ef4cd.stopPropagation(), void c({
          type: "nyx:alt-prime"
        });
        if (_59b4ea9ef4cd.altKey && !_59b4ea9ef4cd.ctrlKey && !_59b4ea9ef4cd.metaKey && 2 !== _59b4ea9ef4cd.location && t(_59b4ea9ef4cd.target) && /^[acxvzy]$/.test(_d823eb338276)) {
          if (_59b4ea9ef4cd.preventDefault(), _59b4ea9ef4cd.stopPropagation(), "a" === _d823eb338276) return void (_59b4ea9ef4cd.target?.select ? _59b4ea9ef4cd.target.select() : document.execCommand?.("selectAll"));
          if ("c" === _d823eb338276) return void n(e(_59b4ea9ef4cd.target));
          if ("x" === _d823eb338276) {
            const _d823eb338276 = e(_59b4ea9ef4cd.target);
            return n(_d823eb338276), void r(_59b4ea9ef4cd.target, "");
          }
          if ("v" === _d823eb338276) return void navigator.clipboard?.readText?.().then(_d823eb338276 => r(_59b4ea9ef4cd.target, _d823eb338276)).catch(() => {
            try {
              document.execCommand?.("paste");
            } catch {}
          });
          if ("z" === _d823eb338276) return void document.execCommand?.("undo");
          if ("y" === _d823eb338276) return void document.execCommand?.("redo");
        }
        return !_59b4ea9ef4cd.altKey || _59b4ea9ef4cd.ctrlKey || _59b4ea9ef4cd.metaKey || 2 === _59b4ea9ef4cd.location || !/^[1-9]$/.test(_d823eb338276) && ![ "l", "d", "t", "w", "r", "arrowleft", "arrowright", "tab" ].includes(_d823eb338276) ? void 0 : (_59b4ea9ef4cd.preventDefault(), 
        _59b4ea9ef4cd.stopPropagation(), void c({
          type: "nyx:alt-shortcut",
          key: _d823eb338276,
          code: _59b4ea9ef4cd.code || "",
          location: _59b4ea9ef4cd.location || 0,
          shiftKey: !!_59b4ea9ef4cd.shiftKey
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
  }, r = _59b4ea9ef4cd => {
    if (!_59b4ea9ef4cd) return !1;
    try {
      return _59b4ea9ef4cd.document.open(), _59b4ea9ef4cd.document.write('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>nyx://blocked67haha</title><style>html,body{margin:0;width:100%;height:100%;background:#fff;color:#111;font:28px Raleway,Arial,sans-serif}body{display:grid;place-items:center;text-align:center}main{padding:24px}</style></head><body><main>are you trying to hack me scamma???</main></body></html>'), 
      _59b4ea9ef4cd.document.close(), _59b4ea9ef4cd.focus?.(), !0;
    } catch {
      return !1;
    }
  }, n = () => {
    const _59b4ea9ef4cd = null;
    return {
      closed: !1,
      focus() {
        try {
          _59b4ea9ef4cd?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _59b4ea9ef4cd?.blur?.();
        } catch {}
      },
      close() {
        try {
          _59b4ea9ef4cd?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return r(_59b4ea9ef4cd), this;
        },
        write() {
          r(_59b4ea9ef4cd);
        },
        writeln() {
          r(_59b4ea9ef4cd);
        },
        close() {
          r(_59b4ea9ef4cd);
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
          r(_59b4ea9ef4cd);
        },
        toString: () => "nyx://blocked67haha"
      }
    };
  }, o = _59b4ea9ef4cd => {
    const _d823eb338276 = String(_59b4ea9ef4cd || "").trim();
    if (/^(?:blob|data):/i.test(_d823eb338276)) return !1;
    const _f6c80621f6ce = _d823eb338276.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_f6c80621f6ce);
  }, i = (_59b4ea9ef4cd, _d823eb338276 = "") => {
    const _f6c80621f6ce = String(_59b4ea9ef4cd || "").trim();
    if (!_f6c80621f6ce || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "nyx:download-request",
        url: _f6c80621f6ce,
        filename: String(_d823eb338276 || ""),
        sourceUrl: String(location.href || "")
      }, "*"), !0;
    } catch {
      return !1;
    }
  };
  let c = (..._d823eb338276) => o(_d823eb338276[0]) && i(_d823eb338276[0]) ? null : !e() && _59b4ea9ef4cd ? _59b4ea9ef4cd(..._d823eb338276) : n();
  try {
    "function" == typeof _59b4ea9ef4cd && "function" == typeof Proxy && (c = new Proxy(_59b4ea9ef4cd, {
      apply: (_59b4ea9ef4cd, _d823eb338276, _f6c80621f6ce) => o(_f6c80621f6ce[0]) && i(_f6c80621f6ce[0]) ? null : e() ? n() : Reflect.apply(_59b4ea9ef4cd, _d823eb338276, _f6c80621f6ce),
      construct(_59b4ea9ef4cd, _d823eb338276, _f6c80621f6ce) {
        if (!e()) try {
          return Reflect.construct(_59b4ea9ef4cd, _d823eb338276, _f6c80621f6ce);
        } catch {
          return Reflect.apply(_59b4ea9ef4cd, window, _d823eb338276);
        }
        return n();
      },
      get: (_59b4ea9ef4cd, _d823eb338276, _f6c80621f6ce) => "__nyxPopupGuard" === _d823eb338276 || ("toString" === _d823eb338276 ? () => "function open() { [native code] }" : Reflect.get(_59b4ea9ef4cd, _d823eb338276, _f6c80621f6ce))
    }));
  } catch {}
  const a = _59b4ea9ef4cd => {
    const _d823eb338276 = String(_59b4ea9ef4cd || "").toLowerCase();
    return _d823eb338276 && ![ "_self", "_parent", "_top" ].includes(_d823eb338276);
  }, s = _59b4ea9ef4cd => !!_59b4ea9ef4cd && (!!_59b4ea9ef4cd.hasAttribute("download") || o(_59b4ea9ef4cd.href || _59b4ea9ef4cd.getAttribute("href") || ""));
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
    const _59b4ea9ef4cd = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!s(this) || !i(this.href || this.getAttribute("href"), this.getAttribute("download") || "")) {
        if (!e() || !a(this.target)) return _59b4ea9ef4cd.call(this);
        n();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("click", _59b4ea9ef4cd => {
    const _d823eb338276 = _59b4ea9ef4cd.target?.closest?.("a[href]");
    if (_d823eb338276) return s(_d823eb338276) && i(_d823eb338276.href || _d823eb338276.getAttribute("href"), _d823eb338276.getAttribute("download") || "") ? (_59b4ea9ef4cd.preventDefault(), 
    void _59b4ea9ef4cd.stopImmediatePropagation()) : void (e() && a(_d823eb338276.getAttribute("target")) && (_59b4ea9ef4cd.preventDefault(), 
    _59b4ea9ef4cd.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("auxclick", _59b4ea9ef4cd => {
    const _d823eb338276 = _59b4ea9ef4cd.target?.closest?.("a[href]");
    if (_d823eb338276) return s(_d823eb338276) && i(_d823eb338276.href || _d823eb338276.getAttribute("href"), _d823eb338276.getAttribute("download") || "") ? (_59b4ea9ef4cd.preventDefault(), 
    void _59b4ea9ef4cd.stopImmediatePropagation()) : void (e() && a(_d823eb338276.getAttribute("target")) && (_59b4ea9ef4cd.preventDefault(), 
    _59b4ea9ef4cd.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("submit", _59b4ea9ef4cd => {
    if (!e()) return;
    const _d823eb338276 = _59b4ea9ef4cd.target;
    _d823eb338276 && "FORM" === String(_d823eb338276.tagName || "").toUpperCase() && a(_d823eb338276.getAttribute("target")) && (_59b4ea9ef4cd.preventDefault(), 
    _59b4ea9ef4cd.stopImmediatePropagation(), n());
  }, !0));
  const u = _59b4ea9ef4cd => {
    const _d823eb338276 = window[_59b4ea9ef4cd];
    if ("function" == typeof _d823eb338276 && !_d823eb338276.__nyxWrapped) try {
      Object.setPrototypeOf(r, _d823eb338276), r.prototype = _d823eb338276.prototype, 
      Object.defineProperty(r, "__nyxWrapped", {
        value: !0
      }), window[_59b4ea9ef4cd] = r;
    } catch {}
    function r(_59b4ea9ef4cd, _f6c80621f6ce, _ea1f3903c1bf) {
      let _f4979a292da5 = Number(_59b4ea9ef4cd), _cd2301448e3d = Number(_f6c80621f6ce);
      return (!Number.isFinite(_f4979a292da5) || _f4979a292da5 < 0) && (_f4979a292da5 = 0), 
      (!Number.isFinite(_cd2301448e3d) || _cd2301448e3d <= _f4979a292da5) && (_cd2301448e3d = _f4979a292da5 + .001), 
      Reflect.construct(_d823eb338276, [ _f4979a292da5, _cd2301448e3d, null == _ea1f3903c1bf ? "" : String(_ea1f3903c1bf) ], new.target || r);
    }
  };
  u("VTTCue"), u("TextTrackCue");
})();
