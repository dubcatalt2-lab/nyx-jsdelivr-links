(() => {
  if ("undefined" == typeof window || window.__nyxScramjetGuards) return;
  window.__nyxScramjetGuards = !0;
  const _b5e1b35bc49b = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "trustedTypes", {
      configurable: !0,
      value: {
        createPolicy: (_b5e1b35bc49b, _642349e981fc = {}) => ({
          createHTML: _b5e1b35bc49b => "function" == typeof _642349e981fc.createHTML ? _642349e981fc.createHTML(_b5e1b35bc49b) : _b5e1b35bc49b,
          createScript: _b5e1b35bc49b => "function" == typeof _642349e981fc.createScript ? _642349e981fc.createScript(_b5e1b35bc49b) : _b5e1b35bc49b,
          createScriptURL: _b5e1b35bc49b => "function" == typeof _642349e981fc.createScriptURL ? _642349e981fc.createScriptURL(_b5e1b35bc49b) : _b5e1b35bc49b
        })
      }
    });
  } catch {}
  try {
    const _b5e1b35bc49b = Object.getOwnPropertyDescriptor(Document.prototype, "currentScript"), _642349e981fc = document.createElement("script");
    _642349e981fc.setAttribute("nonce", ""), Object.defineProperty(Document.prototype, "currentScript", {
      configurable: !0,
      get() {
        let _1062e70f5837 = null;
        try {
          _1062e70f5837 = _b5e1b35bc49b?.get?.call(this) || null;
        } catch {}
        return _1062e70f5837 || this.querySelector?.("script[src],script") || _642349e981fc;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const t = _b5e1b35bc49b => !(!_b5e1b35bc49b || !_b5e1b35bc49b.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_b5e1b35bc49b.tagName || "")), e = _b5e1b35bc49b => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_b5e1b35bc49b?.tagName || "") ? String(_b5e1b35bc49b.value || "").slice(_b5e1b35bc49b.selectionStart || 0, _b5e1b35bc49b.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, r = (_b5e1b35bc49b, _642349e981fc) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_b5e1b35bc49b?.tagName || "")) {
            const _1062e70f5837 = _b5e1b35bc49b.selectionStart || 0, _383d3d487a2b = _b5e1b35bc49b.selectionEnd || 0, _7c2f582bad56 = String(_b5e1b35bc49b.value || "");
            _b5e1b35bc49b.value = _7c2f582bad56.slice(0, _1062e70f5837) + _642349e981fc + _7c2f582bad56.slice(_383d3d487a2b);
            const _817af1b1480a = _1062e70f5837 + String(_642349e981fc).length;
            return _b5e1b35bc49b.setSelectionRange(_817af1b1480a, _817af1b1480a), void _b5e1b35bc49b.dispatchEvent(new Event("input", {
              bubbles: !0
            }));
          }
          document.execCommand?.("insertText", !1, _642349e981fc);
        } catch {}
      }, n = async _b5e1b35bc49b => {
        try {
          await (navigator.clipboard?.writeText(String(_b5e1b35bc49b || "")));
        } catch {
          try {
            document.execCommand?.("copy");
          } catch {}
        }
      }, _b5e1b35bc49b = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _642349e981fc = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), c = _1062e70f5837 => {
        try {
          _b5e1b35bc49b?.postMessage(_1062e70f5837, "*");
        } catch {}
        try {
          _642349e981fc && _642349e981fc !== _b5e1b35bc49b && _642349e981fc.postMessage(_1062e70f5837, "*");
        } catch {}
        try {
          window.parent?.postMessage(_1062e70f5837, "*");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_1062e70f5837, "*");
        } catch {}
      };
      window.addEventListener("keydown", _b5e1b35bc49b => {
        const _642349e981fc = String(_b5e1b35bc49b.key || "").toLowerCase();
        if (_b5e1b35bc49b.altKey && !_b5e1b35bc49b.ctrlKey && !_b5e1b35bc49b.metaKey && 2 !== _b5e1b35bc49b.location && "alt" === _642349e981fc) return _b5e1b35bc49b.preventDefault(), 
        _b5e1b35bc49b.stopPropagation(), void c({
          type: "nyx:alt-prime"
        });
        if (_b5e1b35bc49b.altKey && !_b5e1b35bc49b.ctrlKey && !_b5e1b35bc49b.metaKey && 2 !== _b5e1b35bc49b.location && t(_b5e1b35bc49b.target) && /^[acxvzy]$/.test(_642349e981fc)) {
          if (_b5e1b35bc49b.preventDefault(), _b5e1b35bc49b.stopPropagation(), "a" === _642349e981fc) return void (_b5e1b35bc49b.target?.select ? _b5e1b35bc49b.target.select() : document.execCommand?.("selectAll"));
          if ("c" === _642349e981fc) return void n(e(_b5e1b35bc49b.target));
          if ("x" === _642349e981fc) {
            const _642349e981fc = e(_b5e1b35bc49b.target);
            return n(_642349e981fc), void r(_b5e1b35bc49b.target, "");
          }
          if ("v" === _642349e981fc) return void navigator.clipboard?.readText?.().then(_642349e981fc => r(_b5e1b35bc49b.target, _642349e981fc)).catch(() => {
            try {
              document.execCommand?.("paste");
            } catch {}
          });
          if ("z" === _642349e981fc) return void document.execCommand?.("undo");
          if ("y" === _642349e981fc) return void document.execCommand?.("redo");
        }
        return !_b5e1b35bc49b.altKey || _b5e1b35bc49b.ctrlKey || _b5e1b35bc49b.metaKey || 2 === _b5e1b35bc49b.location || !/^[1-9]$/.test(_642349e981fc) && ![ "l", "d", "t", "w", "r", "arrowleft", "arrowright", "tab" ].includes(_642349e981fc) ? void 0 : (_b5e1b35bc49b.preventDefault(), 
        _b5e1b35bc49b.stopPropagation(), void c({
          type: "nyx:alt-shortcut",
          key: _642349e981fc,
          code: _b5e1b35bc49b.code || "",
          location: _b5e1b35bc49b.location || 0,
          shiftKey: !!_b5e1b35bc49b.shiftKey
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
  }, r = _b5e1b35bc49b => {
    if (!_b5e1b35bc49b) return !1;
    try {
      return _b5e1b35bc49b.document.open(), _b5e1b35bc49b.document.write('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>nyx://blocked67haha</title><style>html,body{margin:0;width:100%;height:100%;background:#fff;color:#111;font:28px Raleway,Arial,sans-serif}body{display:grid;place-items:center;text-align:center}main{padding:24px}</style></head><body><main>are you trying to hack me scamma???</main></body></html>'), 
      _b5e1b35bc49b.document.close(), _b5e1b35bc49b.focus?.(), !0;
    } catch {
      return !1;
    }
  }, n = () => {
    const _b5e1b35bc49b = null;
    return {
      closed: !1,
      focus() {
        try {
          _b5e1b35bc49b?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _b5e1b35bc49b?.blur?.();
        } catch {}
      },
      close() {
        try {
          _b5e1b35bc49b?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return r(_b5e1b35bc49b), this;
        },
        write() {
          r(_b5e1b35bc49b);
        },
        writeln() {
          r(_b5e1b35bc49b);
        },
        close() {
          r(_b5e1b35bc49b);
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
          r(_b5e1b35bc49b);
        },
        toString: () => "nyx://blocked67haha"
      }
    };
  }, o = _b5e1b35bc49b => {
    const _642349e981fc = String(_b5e1b35bc49b || "").trim();
    if (/^(?:blob|data):/i.test(_642349e981fc)) return !1;
    const _1062e70f5837 = _642349e981fc.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_1062e70f5837);
  }, i = (_b5e1b35bc49b, _642349e981fc = "") => {
    const _1062e70f5837 = String(_b5e1b35bc49b || "").trim();
    if (!_1062e70f5837 || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "nyx:download-request",
        url: _1062e70f5837,
        filename: String(_642349e981fc || ""),
        sourceUrl: String(location.href || "")
      }, "*"), !0;
    } catch {
      return !1;
    }
  };
  let c = (..._642349e981fc) => o(_642349e981fc[0]) && i(_642349e981fc[0]) ? null : !e() && _b5e1b35bc49b ? _b5e1b35bc49b(..._642349e981fc) : n();
  try {
    "function" == typeof _b5e1b35bc49b && "function" == typeof Proxy && (c = new Proxy(_b5e1b35bc49b, {
      apply: (_b5e1b35bc49b, _642349e981fc, _1062e70f5837) => o(_1062e70f5837[0]) && i(_1062e70f5837[0]) ? null : e() ? n() : Reflect.apply(_b5e1b35bc49b, _642349e981fc, _1062e70f5837),
      construct(_b5e1b35bc49b, _642349e981fc, _1062e70f5837) {
        if (!e()) try {
          return Reflect.construct(_b5e1b35bc49b, _642349e981fc, _1062e70f5837);
        } catch {
          return Reflect.apply(_b5e1b35bc49b, window, _642349e981fc);
        }
        return n();
      },
      get: (_b5e1b35bc49b, _642349e981fc, _1062e70f5837) => "__nyxPopupGuard" === _642349e981fc || ("toString" === _642349e981fc ? () => "function open() { [native code] }" : Reflect.get(_b5e1b35bc49b, _642349e981fc, _1062e70f5837))
    }));
  } catch {}
  const a = _b5e1b35bc49b => {
    const _642349e981fc = String(_b5e1b35bc49b || "").toLowerCase();
    return _642349e981fc && ![ "_self", "_parent", "_top" ].includes(_642349e981fc);
  }, s = _b5e1b35bc49b => !!_b5e1b35bc49b && (!!_b5e1b35bc49b.hasAttribute("download") || o(_b5e1b35bc49b.href || _b5e1b35bc49b.getAttribute("href") || ""));
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
    const _b5e1b35bc49b = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!s(this) || !i(this.href || this.getAttribute("href"), this.getAttribute("download") || "")) {
        if (!e() || !a(this.target)) return _b5e1b35bc49b.call(this);
        n();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("click", _b5e1b35bc49b => {
    const _642349e981fc = _b5e1b35bc49b.target?.closest?.("a[href]");
    if (_642349e981fc) return s(_642349e981fc) && i(_642349e981fc.href || _642349e981fc.getAttribute("href"), _642349e981fc.getAttribute("download") || "") ? (_b5e1b35bc49b.preventDefault(), 
    void _b5e1b35bc49b.stopImmediatePropagation()) : void (e() && a(_642349e981fc.getAttribute("target")) && (_b5e1b35bc49b.preventDefault(), 
    _b5e1b35bc49b.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("auxclick", _b5e1b35bc49b => {
    const _642349e981fc = _b5e1b35bc49b.target?.closest?.("a[href]");
    if (_642349e981fc) return s(_642349e981fc) && i(_642349e981fc.href || _642349e981fc.getAttribute("href"), _642349e981fc.getAttribute("download") || "") ? (_b5e1b35bc49b.preventDefault(), 
    void _b5e1b35bc49b.stopImmediatePropagation()) : void (e() && a(_642349e981fc.getAttribute("target")) && (_b5e1b35bc49b.preventDefault(), 
    _b5e1b35bc49b.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("submit", _b5e1b35bc49b => {
    if (!e()) return;
    const _642349e981fc = _b5e1b35bc49b.target;
    _642349e981fc && "FORM" === String(_642349e981fc.tagName || "").toUpperCase() && a(_642349e981fc.getAttribute("target")) && (_b5e1b35bc49b.preventDefault(), 
    _b5e1b35bc49b.stopImmediatePropagation(), n());
  }, !0));
  const u = _b5e1b35bc49b => {
    const _642349e981fc = window[_b5e1b35bc49b];
    if ("function" == typeof _642349e981fc && !_642349e981fc.__nyxWrapped) try {
      Object.setPrototypeOf(r, _642349e981fc), r.prototype = _642349e981fc.prototype, 
      Object.defineProperty(r, "__nyxWrapped", {
        value: !0
      }), window[_b5e1b35bc49b] = r;
    } catch {}
    function r(_b5e1b35bc49b, _1062e70f5837, _383d3d487a2b) {
      let _7c2f582bad56 = Number(_b5e1b35bc49b), _817af1b1480a = Number(_1062e70f5837);
      return (!Number.isFinite(_7c2f582bad56) || _7c2f582bad56 < 0) && (_7c2f582bad56 = 0), 
      (!Number.isFinite(_817af1b1480a) || _817af1b1480a <= _7c2f582bad56) && (_817af1b1480a = _7c2f582bad56 + .001), 
      Reflect.construct(_642349e981fc, [ _7c2f582bad56, _817af1b1480a, null == _383d3d487a2b ? "" : String(_383d3d487a2b) ], new.target || r);
    }
  };
  u("VTTCue"), u("TextTrackCue");
})();
