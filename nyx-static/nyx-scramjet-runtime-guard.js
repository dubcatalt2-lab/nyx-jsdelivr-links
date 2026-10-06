(() => {
  if ("undefined" == typeof window || window.__nyxScramjetGuards) return;
  window.__nyxScramjetGuards = !0;
  const _9de8ac10f08c = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "trustedTypes", {
      configurable: !0,
      value: {
        createPolicy: (_9de8ac10f08c, _c41c9b1d6120 = {}) => ({
          createHTML: _9de8ac10f08c => "function" == typeof _c41c9b1d6120.createHTML ? _c41c9b1d6120.createHTML(_9de8ac10f08c) : _9de8ac10f08c,
          createScript: _9de8ac10f08c => "function" == typeof _c41c9b1d6120.createScript ? _c41c9b1d6120.createScript(_9de8ac10f08c) : _9de8ac10f08c,
          createScriptURL: _9de8ac10f08c => "function" == typeof _c41c9b1d6120.createScriptURL ? _c41c9b1d6120.createScriptURL(_9de8ac10f08c) : _9de8ac10f08c
        })
      }
    });
  } catch {}
  try {
    const _9de8ac10f08c = Object.getOwnPropertyDescriptor(Document.prototype, "currentScript"), _c41c9b1d6120 = document.createElement("script");
    _c41c9b1d6120.setAttribute("nonce", ""), Object.defineProperty(Document.prototype, "currentScript", {
      configurable: !0,
      get() {
        let _68babceedcc7 = null;
        try {
          _68babceedcc7 = _9de8ac10f08c?.get?.call(this) || null;
        } catch {}
        return _68babceedcc7 || this.querySelector?.("script[src],script") || _c41c9b1d6120;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const t = _9de8ac10f08c => !(!_9de8ac10f08c || !_9de8ac10f08c.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_9de8ac10f08c.tagName || "")), e = _9de8ac10f08c => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_9de8ac10f08c?.tagName || "") ? String(_9de8ac10f08c.value || "").slice(_9de8ac10f08c.selectionStart || 0, _9de8ac10f08c.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, r = (_9de8ac10f08c, _c41c9b1d6120) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_9de8ac10f08c?.tagName || "")) {
            const _68babceedcc7 = _9de8ac10f08c.selectionStart || 0, _11c00421abdc = _9de8ac10f08c.selectionEnd || 0, _8b658ab3d979 = String(_9de8ac10f08c.value || "");
            _9de8ac10f08c.value = _8b658ab3d979.slice(0, _68babceedcc7) + _c41c9b1d6120 + _8b658ab3d979.slice(_11c00421abdc);
            const _8d29628b445d = _68babceedcc7 + String(_c41c9b1d6120).length;
            return _9de8ac10f08c.setSelectionRange(_8d29628b445d, _8d29628b445d), void _9de8ac10f08c.dispatchEvent(new Event("input", {
              bubbles: !0
            }));
          }
          document.execCommand?.("insertText", !1, _c41c9b1d6120);
        } catch {}
      }, n = async _9de8ac10f08c => {
        try {
          await (navigator.clipboard?.writeText(String(_9de8ac10f08c || "")));
        } catch {
          try {
            document.execCommand?.("copy");
          } catch {}
        }
      }, _9de8ac10f08c = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _c41c9b1d6120 = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), c = _68babceedcc7 => {
        try {
          _9de8ac10f08c?.postMessage(_68babceedcc7, "*");
        } catch {}
        try {
          _c41c9b1d6120 && _c41c9b1d6120 !== _9de8ac10f08c && _c41c9b1d6120.postMessage(_68babceedcc7, "*");
        } catch {}
        try {
          window.parent?.postMessage(_68babceedcc7, "*");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_68babceedcc7, "*");
        } catch {}
      };
      window.addEventListener("keydown", _9de8ac10f08c => {
        const _c41c9b1d6120 = String(_9de8ac10f08c.key || "").toLowerCase();
        if (_9de8ac10f08c.altKey && !_9de8ac10f08c.ctrlKey && !_9de8ac10f08c.metaKey && 2 !== _9de8ac10f08c.location && "alt" === _c41c9b1d6120) return _9de8ac10f08c.preventDefault(), 
        _9de8ac10f08c.stopPropagation(), void c({
          type: "nyx:alt-prime"
        });
        if (_9de8ac10f08c.altKey && !_9de8ac10f08c.ctrlKey && !_9de8ac10f08c.metaKey && 2 !== _9de8ac10f08c.location && t(_9de8ac10f08c.target) && /^[acxvzy]$/.test(_c41c9b1d6120)) {
          if (_9de8ac10f08c.preventDefault(), _9de8ac10f08c.stopPropagation(), "a" === _c41c9b1d6120) return void (_9de8ac10f08c.target?.select ? _9de8ac10f08c.target.select() : document.execCommand?.("selectAll"));
          if ("c" === _c41c9b1d6120) return void n(e(_9de8ac10f08c.target));
          if ("x" === _c41c9b1d6120) {
            const _c41c9b1d6120 = e(_9de8ac10f08c.target);
            return n(_c41c9b1d6120), void r(_9de8ac10f08c.target, "");
          }
          if ("v" === _c41c9b1d6120) return void navigator.clipboard?.readText?.().then(_c41c9b1d6120 => r(_9de8ac10f08c.target, _c41c9b1d6120)).catch(() => {
            try {
              document.execCommand?.("paste");
            } catch {}
          });
          if ("z" === _c41c9b1d6120) return void document.execCommand?.("undo");
          if ("y" === _c41c9b1d6120) return void document.execCommand?.("redo");
        }
        return !_9de8ac10f08c.altKey || _9de8ac10f08c.ctrlKey || _9de8ac10f08c.metaKey || 2 === _9de8ac10f08c.location || !/^[1-9]$/.test(_c41c9b1d6120) && ![ "l", "d", "t", "w", "r", "arrowleft", "arrowright", "tab" ].includes(_c41c9b1d6120) ? void 0 : (_9de8ac10f08c.preventDefault(), 
        _9de8ac10f08c.stopPropagation(), void c({
          type: "nyx:alt-shortcut",
          key: _c41c9b1d6120,
          code: _9de8ac10f08c.code || "",
          location: _9de8ac10f08c.location || 0,
          shiftKey: !!_9de8ac10f08c.shiftKey
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
  }, r = _9de8ac10f08c => {
    if (!_9de8ac10f08c) return !1;
    try {
      return _9de8ac10f08c.document.open(), _9de8ac10f08c.document.write('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>nyx://blocked67haha</title><style>html,body{margin:0;width:100%;height:100%;background:#fff;color:#111;font:28px Raleway,Arial,sans-serif}body{display:grid;place-items:center;text-align:center}main{padding:24px}</style></head><body><main>are you trying to hack me scamma???</main></body></html>'), 
      _9de8ac10f08c.document.close(), _9de8ac10f08c.focus?.(), !0;
    } catch {
      return !1;
    }
  }, n = () => {
    const _9de8ac10f08c = null;
    return {
      closed: !1,
      focus() {
        try {
          _9de8ac10f08c?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _9de8ac10f08c?.blur?.();
        } catch {}
      },
      close() {
        try {
          _9de8ac10f08c?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return r(_9de8ac10f08c), this;
        },
        write() {
          r(_9de8ac10f08c);
        },
        writeln() {
          r(_9de8ac10f08c);
        },
        close() {
          r(_9de8ac10f08c);
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
          r(_9de8ac10f08c);
        },
        toString: () => "nyx://blocked67haha"
      }
    };
  }, o = _9de8ac10f08c => {
    const _c41c9b1d6120 = String(_9de8ac10f08c || "").trim();
    if (/^(?:blob|data):/i.test(_c41c9b1d6120)) return !1;
    const _68babceedcc7 = _c41c9b1d6120.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_68babceedcc7);
  }, i = (_9de8ac10f08c, _c41c9b1d6120 = "") => {
    const _68babceedcc7 = String(_9de8ac10f08c || "").trim();
    if (!_68babceedcc7 || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "nyx:download-request",
        url: _68babceedcc7,
        filename: String(_c41c9b1d6120 || ""),
        sourceUrl: String(location.href || "")
      }, "*"), !0;
    } catch {
      return !1;
    }
  };
  let c = (..._c41c9b1d6120) => o(_c41c9b1d6120[0]) && i(_c41c9b1d6120[0]) ? null : !e() && _9de8ac10f08c ? _9de8ac10f08c(..._c41c9b1d6120) : n();
  try {
    "function" == typeof _9de8ac10f08c && "function" == typeof Proxy && (c = new Proxy(_9de8ac10f08c, {
      apply: (_9de8ac10f08c, _c41c9b1d6120, _68babceedcc7) => o(_68babceedcc7[0]) && i(_68babceedcc7[0]) ? null : e() ? n() : Reflect.apply(_9de8ac10f08c, _c41c9b1d6120, _68babceedcc7),
      construct(_9de8ac10f08c, _c41c9b1d6120, _68babceedcc7) {
        if (!e()) try {
          return Reflect.construct(_9de8ac10f08c, _c41c9b1d6120, _68babceedcc7);
        } catch {
          return Reflect.apply(_9de8ac10f08c, window, _c41c9b1d6120);
        }
        return n();
      },
      get: (_9de8ac10f08c, _c41c9b1d6120, _68babceedcc7) => "__nyxPopupGuard" === _c41c9b1d6120 || ("toString" === _c41c9b1d6120 ? () => "function open() { [native code] }" : Reflect.get(_9de8ac10f08c, _c41c9b1d6120, _68babceedcc7))
    }));
  } catch {}
  const a = _9de8ac10f08c => {
    const _c41c9b1d6120 = String(_9de8ac10f08c || "").toLowerCase();
    return _c41c9b1d6120 && ![ "_self", "_parent", "_top" ].includes(_c41c9b1d6120);
  }, s = _9de8ac10f08c => !!_9de8ac10f08c && (!!_9de8ac10f08c.hasAttribute("download") || o(_9de8ac10f08c.href || _9de8ac10f08c.getAttribute("href") || ""));
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
    const _9de8ac10f08c = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!s(this) || !i(this.href || this.getAttribute("href"), this.getAttribute("download") || "")) {
        if (!e() || !a(this.target)) return _9de8ac10f08c.call(this);
        n();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("click", _9de8ac10f08c => {
    const _c41c9b1d6120 = _9de8ac10f08c.target?.closest?.("a[href]");
    if (_c41c9b1d6120) return s(_c41c9b1d6120) && i(_c41c9b1d6120.href || _c41c9b1d6120.getAttribute("href"), _c41c9b1d6120.getAttribute("download") || "") ? (_9de8ac10f08c.preventDefault(), 
    void _9de8ac10f08c.stopImmediatePropagation()) : void (e() && a(_c41c9b1d6120.getAttribute("target")) && (_9de8ac10f08c.preventDefault(), 
    _9de8ac10f08c.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("auxclick", _9de8ac10f08c => {
    const _c41c9b1d6120 = _9de8ac10f08c.target?.closest?.("a[href]");
    if (_c41c9b1d6120) return s(_c41c9b1d6120) && i(_c41c9b1d6120.href || _c41c9b1d6120.getAttribute("href"), _c41c9b1d6120.getAttribute("download") || "") ? (_9de8ac10f08c.preventDefault(), 
    void _9de8ac10f08c.stopImmediatePropagation()) : void (e() && a(_c41c9b1d6120.getAttribute("target")) && (_9de8ac10f08c.preventDefault(), 
    _9de8ac10f08c.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("submit", _9de8ac10f08c => {
    if (!e()) return;
    const _c41c9b1d6120 = _9de8ac10f08c.target;
    _c41c9b1d6120 && "FORM" === String(_c41c9b1d6120.tagName || "").toUpperCase() && a(_c41c9b1d6120.getAttribute("target")) && (_9de8ac10f08c.preventDefault(), 
    _9de8ac10f08c.stopImmediatePropagation(), n());
  }, !0));
  const u = _9de8ac10f08c => {
    const _c41c9b1d6120 = window[_9de8ac10f08c];
    if ("function" == typeof _c41c9b1d6120 && !_c41c9b1d6120.__nyxWrapped) try {
      Object.setPrototypeOf(r, _c41c9b1d6120), r.prototype = _c41c9b1d6120.prototype, 
      Object.defineProperty(r, "__nyxWrapped", {
        value: !0
      }), window[_9de8ac10f08c] = r;
    } catch {}
    function r(_9de8ac10f08c, _68babceedcc7, _11c00421abdc) {
      let _8b658ab3d979 = Number(_9de8ac10f08c), _8d29628b445d = Number(_68babceedcc7);
      return (!Number.isFinite(_8b658ab3d979) || _8b658ab3d979 < 0) && (_8b658ab3d979 = 0), 
      (!Number.isFinite(_8d29628b445d) || _8d29628b445d <= _8b658ab3d979) && (_8d29628b445d = _8b658ab3d979 + .001), 
      Reflect.construct(_c41c9b1d6120, [ _8b658ab3d979, _8d29628b445d, null == _11c00421abdc ? "" : String(_11c00421abdc) ], new.target || r);
    }
  };
  u("VTTCue"), u("TextTrackCue");
})();
