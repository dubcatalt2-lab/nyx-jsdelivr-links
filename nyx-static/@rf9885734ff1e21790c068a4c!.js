(() => {
  if ("undefined" == typeof window || window.__nyxScramjetGuards) return;
  window.__nyxScramjetGuards = !0;
  const _e6662a16cd47 = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "trustedTypes", {
      configurable: !0,
      value: {
        createPolicy: (_e6662a16cd47, _233e3154035a = {}) => ({
          createHTML: _e6662a16cd47 => "function" == typeof _233e3154035a.createHTML ? _233e3154035a.createHTML(_e6662a16cd47) : _e6662a16cd47,
          createScript: _e6662a16cd47 => "function" == typeof _233e3154035a.createScript ? _233e3154035a.createScript(_e6662a16cd47) : _e6662a16cd47,
          createScriptURL: _e6662a16cd47 => "function" == typeof _233e3154035a.createScriptURL ? _233e3154035a.createScriptURL(_e6662a16cd47) : _e6662a16cd47
        })
      }
    });
  } catch {}
  try {
    const _e6662a16cd47 = Object.getOwnPropertyDescriptor(Document.prototype, "currentScript"), _233e3154035a = document.createElement("script");
    _233e3154035a.setAttribute("nonce", ""), Object.defineProperty(Document.prototype, "currentScript", {
      configurable: !0,
      get() {
        let _7b6b0cab4450 = null;
        try {
          _7b6b0cab4450 = _e6662a16cd47?.get?.call(this) || null;
        } catch {}
        return _7b6b0cab4450 || this.querySelector?.("script[src],script") || _233e3154035a;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const t = _e6662a16cd47 => !(!_e6662a16cd47 || !_e6662a16cd47.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_e6662a16cd47.tagName || "")), e = _e6662a16cd47 => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_e6662a16cd47?.tagName || "") ? String(_e6662a16cd47.value || "").slice(_e6662a16cd47.selectionStart || 0, _e6662a16cd47.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, r = (_e6662a16cd47, _233e3154035a) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_e6662a16cd47?.tagName || "")) {
            const _7b6b0cab4450 = _e6662a16cd47.selectionStart || 0, _beec148bfe19 = _e6662a16cd47.selectionEnd || 0, _9d6d7cceea9b = String(_e6662a16cd47.value || "");
            _e6662a16cd47.value = _9d6d7cceea9b.slice(0, _7b6b0cab4450) + _233e3154035a + _9d6d7cceea9b.slice(_beec148bfe19);
            const _5f589c720466 = _7b6b0cab4450 + String(_233e3154035a).length;
            return _e6662a16cd47.setSelectionRange(_5f589c720466, _5f589c720466), void _e6662a16cd47.dispatchEvent(new Event("input", {
              bubbles: !0
            }));
          }
          document.execCommand?.("insertText", !1, _233e3154035a);
        } catch {}
      }, n = async _e6662a16cd47 => {
        try {
          await (navigator.clipboard?.writeText(String(_e6662a16cd47 || "")));
        } catch {
          try {
            document.execCommand?.("copy");
          } catch {}
        }
      }, _e6662a16cd47 = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _233e3154035a = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), c = _7b6b0cab4450 => {
        try {
          _e6662a16cd47?.postMessage(_7b6b0cab4450, "*");
        } catch {}
        try {
          _233e3154035a && _233e3154035a !== _e6662a16cd47 && _233e3154035a.postMessage(_7b6b0cab4450, "*");
        } catch {}
        try {
          window.parent?.postMessage(_7b6b0cab4450, "*");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_7b6b0cab4450, "*");
        } catch {}
      };
      window.addEventListener("keydown", _e6662a16cd47 => {
        const _233e3154035a = String(_e6662a16cd47.key || "").toLowerCase();
        if (_e6662a16cd47.altKey && !_e6662a16cd47.ctrlKey && !_e6662a16cd47.metaKey && 2 !== _e6662a16cd47.location && "alt" === _233e3154035a) return _e6662a16cd47.preventDefault(), 
        _e6662a16cd47.stopPropagation(), void c({
          type: "nyx:alt-prime"
        });
        if (_e6662a16cd47.altKey && !_e6662a16cd47.ctrlKey && !_e6662a16cd47.metaKey && 2 !== _e6662a16cd47.location && t(_e6662a16cd47.target) && /^[acxvzy]$/.test(_233e3154035a)) {
          if (_e6662a16cd47.preventDefault(), _e6662a16cd47.stopPropagation(), "a" === _233e3154035a) return void (_e6662a16cd47.target?.select ? _e6662a16cd47.target.select() : document.execCommand?.("selectAll"));
          if ("c" === _233e3154035a) return void n(e(_e6662a16cd47.target));
          if ("x" === _233e3154035a) {
            const _233e3154035a = e(_e6662a16cd47.target);
            return n(_233e3154035a), void r(_e6662a16cd47.target, "");
          }
          if ("v" === _233e3154035a) return void navigator.clipboard?.readText?.().then(_233e3154035a => r(_e6662a16cd47.target, _233e3154035a)).catch(() => {
            try {
              document.execCommand?.("paste");
            } catch {}
          });
          if ("z" === _233e3154035a) return void document.execCommand?.("undo");
          if ("y" === _233e3154035a) return void document.execCommand?.("redo");
        }
        return !_e6662a16cd47.altKey || _e6662a16cd47.ctrlKey || _e6662a16cd47.metaKey || 2 === _e6662a16cd47.location || !/^[1-9]$/.test(_233e3154035a) && ![ "l", "d", "t", "w", "r", "arrowleft", "arrowright", "tab" ].includes(_233e3154035a) ? void 0 : (_e6662a16cd47.preventDefault(), 
        _e6662a16cd47.stopPropagation(), void c({
          type: "nyx:alt-shortcut",
          key: _233e3154035a,
          code: _e6662a16cd47.code || "",
          location: _e6662a16cd47.location || 0,
          shiftKey: !!_e6662a16cd47.shiftKey
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
  }, r = _e6662a16cd47 => {
    if (!_e6662a16cd47) return !1;
    try {
      return _e6662a16cd47.document.open(), _e6662a16cd47.document.write('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>nyx://blocked67haha</title><style>html,body{margin:0;width:100%;height:100%;background:#fff;color:#111;font:28px Raleway,Arial,sans-serif}body{display:grid;place-items:center;text-align:center}main{padding:24px}</style></head><body><main>are you trying to hack me scamma???</main></body></html>'), 
      _e6662a16cd47.document.close(), _e6662a16cd47.focus?.(), !0;
    } catch {
      return !1;
    }
  }, n = () => {
    const _e6662a16cd47 = null;
    return {
      closed: !1,
      focus() {
        try {
          _e6662a16cd47?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _e6662a16cd47?.blur?.();
        } catch {}
      },
      close() {
        try {
          _e6662a16cd47?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return r(_e6662a16cd47), this;
        },
        write() {
          r(_e6662a16cd47);
        },
        writeln() {
          r(_e6662a16cd47);
        },
        close() {
          r(_e6662a16cd47);
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
          r(_e6662a16cd47);
        },
        toString: () => "nyx://blocked67haha"
      }
    };
  }, o = _e6662a16cd47 => {
    const _233e3154035a = String(_e6662a16cd47 || "").trim();
    if (/^(?:blob|data):/i.test(_233e3154035a)) return !1;
    const _7b6b0cab4450 = _233e3154035a.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_7b6b0cab4450);
  }, i = (_e6662a16cd47, _233e3154035a = "") => {
    const _7b6b0cab4450 = String(_e6662a16cd47 || "").trim();
    if (!_7b6b0cab4450 || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "nyx:download-request",
        url: _7b6b0cab4450,
        filename: String(_233e3154035a || ""),
        sourceUrl: String(location.href || "")
      }, "*"), !0;
    } catch {
      return !1;
    }
  };
  let c = (..._233e3154035a) => o(_233e3154035a[0]) && i(_233e3154035a[0]) ? null : !e() && _e6662a16cd47 ? _e6662a16cd47(..._233e3154035a) : n();
  try {
    "function" == typeof _e6662a16cd47 && "function" == typeof Proxy && (c = new Proxy(_e6662a16cd47, {
      apply: (_e6662a16cd47, _233e3154035a, _7b6b0cab4450) => o(_7b6b0cab4450[0]) && i(_7b6b0cab4450[0]) ? null : e() ? n() : Reflect.apply(_e6662a16cd47, _233e3154035a, _7b6b0cab4450),
      construct(_e6662a16cd47, _233e3154035a, _7b6b0cab4450) {
        if (!e()) try {
          return Reflect.construct(_e6662a16cd47, _233e3154035a, _7b6b0cab4450);
        } catch {
          return Reflect.apply(_e6662a16cd47, window, _233e3154035a);
        }
        return n();
      },
      get: (_e6662a16cd47, _233e3154035a, _7b6b0cab4450) => "__nyxPopupGuard" === _233e3154035a || ("toString" === _233e3154035a ? () => "function open() { [native code] }" : Reflect.get(_e6662a16cd47, _233e3154035a, _7b6b0cab4450))
    }));
  } catch {}
  const a = _e6662a16cd47 => {
    const _233e3154035a = String(_e6662a16cd47 || "").toLowerCase();
    return _233e3154035a && ![ "_self", "_parent", "_top" ].includes(_233e3154035a);
  }, s = _e6662a16cd47 => !!_e6662a16cd47 && (!!_e6662a16cd47.hasAttribute("download") || o(_e6662a16cd47.href || _e6662a16cd47.getAttribute("href") || ""));
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
    const _e6662a16cd47 = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!s(this) || !i(this.href || this.getAttribute("href"), this.getAttribute("download") || "")) {
        if (!e() || !a(this.target)) return _e6662a16cd47.call(this);
        n();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("click", _e6662a16cd47 => {
    const _233e3154035a = _e6662a16cd47.target?.closest?.("a[href]");
    if (_233e3154035a) return s(_233e3154035a) && i(_233e3154035a.href || _233e3154035a.getAttribute("href"), _233e3154035a.getAttribute("download") || "") ? (_e6662a16cd47.preventDefault(), 
    void _e6662a16cd47.stopImmediatePropagation()) : void (e() && a(_233e3154035a.getAttribute("target")) && (_e6662a16cd47.preventDefault(), 
    _e6662a16cd47.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("auxclick", _e6662a16cd47 => {
    const _233e3154035a = _e6662a16cd47.target?.closest?.("a[href]");
    if (_233e3154035a) return s(_233e3154035a) && i(_233e3154035a.href || _233e3154035a.getAttribute("href"), _233e3154035a.getAttribute("download") || "") ? (_e6662a16cd47.preventDefault(), 
    void _e6662a16cd47.stopImmediatePropagation()) : void (e() && a(_233e3154035a.getAttribute("target")) && (_e6662a16cd47.preventDefault(), 
    _e6662a16cd47.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("submit", _e6662a16cd47 => {
    if (!e()) return;
    const _233e3154035a = _e6662a16cd47.target;
    _233e3154035a && "FORM" === String(_233e3154035a.tagName || "").toUpperCase() && a(_233e3154035a.getAttribute("target")) && (_e6662a16cd47.preventDefault(), 
    _e6662a16cd47.stopImmediatePropagation(), n());
  }, !0));
  const u = _e6662a16cd47 => {
    const _233e3154035a = window[_e6662a16cd47];
    if ("function" == typeof _233e3154035a && !_233e3154035a.__nyxWrapped) try {
      Object.setPrototypeOf(r, _233e3154035a), r.prototype = _233e3154035a.prototype, 
      Object.defineProperty(r, "__nyxWrapped", {
        value: !0
      }), window[_e6662a16cd47] = r;
    } catch {}
    function r(_e6662a16cd47, _7b6b0cab4450, _beec148bfe19) {
      let _9d6d7cceea9b = Number(_e6662a16cd47), _5f589c720466 = Number(_7b6b0cab4450);
      return (!Number.isFinite(_9d6d7cceea9b) || _9d6d7cceea9b < 0) && (_9d6d7cceea9b = 0), 
      (!Number.isFinite(_5f589c720466) || _5f589c720466 <= _9d6d7cceea9b) && (_5f589c720466 = _9d6d7cceea9b + .001), 
      Reflect.construct(_233e3154035a, [ _9d6d7cceea9b, _5f589c720466, null == _beec148bfe19 ? "" : String(_beec148bfe19) ], new.target || r);
    }
  };
  u("VTTCue"), u("TextTrackCue");
})();
