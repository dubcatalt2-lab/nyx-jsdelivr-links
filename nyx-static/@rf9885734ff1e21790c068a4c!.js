(() => {
  if ("undefined" == typeof window || window.__nyxScramjetGuards) return;
  window.__nyxScramjetGuards = !0;
  const _87b442830574 = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "trustedTypes", {
      configurable: !0,
      value: {
        createPolicy: (_87b442830574, _61a34be8504a = {}) => ({
          createHTML: _87b442830574 => "function" == typeof _61a34be8504a.createHTML ? _61a34be8504a.createHTML(_87b442830574) : _87b442830574,
          createScript: _87b442830574 => "function" == typeof _61a34be8504a.createScript ? _61a34be8504a.createScript(_87b442830574) : _87b442830574,
          createScriptURL: _87b442830574 => "function" == typeof _61a34be8504a.createScriptURL ? _61a34be8504a.createScriptURL(_87b442830574) : _87b442830574
        })
      }
    });
  } catch {}
  try {
    const _87b442830574 = Object.getOwnPropertyDescriptor(Document.prototype, "currentScript"), _61a34be8504a = document.createElement("script");
    _61a34be8504a.setAttribute("nonce", ""), Object.defineProperty(Document.prototype, "currentScript", {
      configurable: !0,
      get() {
        let _e71cd74f102f = null;
        try {
          _e71cd74f102f = _87b442830574?.get?.call(this) || null;
        } catch {}
        return _e71cd74f102f || this.querySelector?.("script[src],script") || _61a34be8504a;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const t = _87b442830574 => !(!_87b442830574 || !_87b442830574.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_87b442830574.tagName || "")), e = _87b442830574 => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_87b442830574?.tagName || "") ? String(_87b442830574.value || "").slice(_87b442830574.selectionStart || 0, _87b442830574.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, r = (_87b442830574, _61a34be8504a) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_87b442830574?.tagName || "")) {
            const _e71cd74f102f = _87b442830574.selectionStart || 0, _2233f45defbe = _87b442830574.selectionEnd || 0, _9b2fb69366d9 = String(_87b442830574.value || "");
            _87b442830574.value = _9b2fb69366d9.slice(0, _e71cd74f102f) + _61a34be8504a + _9b2fb69366d9.slice(_2233f45defbe);
            const _620b3b68ce07 = _e71cd74f102f + String(_61a34be8504a).length;
            return _87b442830574.setSelectionRange(_620b3b68ce07, _620b3b68ce07), void _87b442830574.dispatchEvent(new Event("input", {
              bubbles: !0
            }));
          }
          document.execCommand?.("insertText", !1, _61a34be8504a);
        } catch {}
      }, n = async _87b442830574 => {
        try {
          await (navigator.clipboard?.writeText(String(_87b442830574 || "")));
        } catch {
          try {
            document.execCommand?.("copy");
          } catch {}
        }
      }, _87b442830574 = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _61a34be8504a = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), c = _e71cd74f102f => {
        try {
          _87b442830574?.postMessage(_e71cd74f102f, "*");
        } catch {}
        try {
          _61a34be8504a && _61a34be8504a !== _87b442830574 && _61a34be8504a.postMessage(_e71cd74f102f, "*");
        } catch {}
        try {
          window.parent?.postMessage(_e71cd74f102f, "*");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_e71cd74f102f, "*");
        } catch {}
      };
      window.addEventListener("keydown", _87b442830574 => {
        const _61a34be8504a = String(_87b442830574.key || "").toLowerCase();
        if (_87b442830574.altKey && !_87b442830574.ctrlKey && !_87b442830574.metaKey && 2 !== _87b442830574.location && "alt" === _61a34be8504a) return _87b442830574.preventDefault(), 
        _87b442830574.stopPropagation(), void c({
          type: "nyx:alt-prime"
        });
        if (_87b442830574.altKey && !_87b442830574.ctrlKey && !_87b442830574.metaKey && 2 !== _87b442830574.location && t(_87b442830574.target) && /^[acxvzy]$/.test(_61a34be8504a)) {
          if (_87b442830574.preventDefault(), _87b442830574.stopPropagation(), "a" === _61a34be8504a) return void (_87b442830574.target?.select ? _87b442830574.target.select() : document.execCommand?.("selectAll"));
          if ("c" === _61a34be8504a) return void n(e(_87b442830574.target));
          if ("x" === _61a34be8504a) {
            const _61a34be8504a = e(_87b442830574.target);
            return n(_61a34be8504a), void r(_87b442830574.target, "");
          }
          if ("v" === _61a34be8504a) return void navigator.clipboard?.readText?.().then(_61a34be8504a => r(_87b442830574.target, _61a34be8504a)).catch(() => {
            try {
              document.execCommand?.("paste");
            } catch {}
          });
          if ("z" === _61a34be8504a) return void document.execCommand?.("undo");
          if ("y" === _61a34be8504a) return void document.execCommand?.("redo");
        }
        return !_87b442830574.altKey || _87b442830574.ctrlKey || _87b442830574.metaKey || 2 === _87b442830574.location || !/^[1-9]$/.test(_61a34be8504a) && ![ "l", "d", "t", "w", "r", "arrowleft", "arrowright", "tab" ].includes(_61a34be8504a) ? void 0 : (_87b442830574.preventDefault(), 
        _87b442830574.stopPropagation(), void c({
          type: "nyx:alt-shortcut",
          key: _61a34be8504a,
          code: _87b442830574.code || "",
          location: _87b442830574.location || 0,
          shiftKey: !!_87b442830574.shiftKey
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
  }, r = _87b442830574 => {
    if (!_87b442830574) return !1;
    try {
      return _87b442830574.document.open(), _87b442830574.document.write('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>nyx://blocked67haha</title><style>html,body{margin:0;width:100%;height:100%;background:#fff;color:#111;font:28px Raleway,Arial,sans-serif}body{display:grid;place-items:center;text-align:center}main{padding:24px}</style></head><body><main>are you trying to hack me scamma???</main></body></html>'), 
      _87b442830574.document.close(), _87b442830574.focus?.(), !0;
    } catch {
      return !1;
    }
  }, n = () => {
    const _87b442830574 = null;
    return {
      closed: !1,
      focus() {
        try {
          _87b442830574?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _87b442830574?.blur?.();
        } catch {}
      },
      close() {
        try {
          _87b442830574?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return r(_87b442830574), this;
        },
        write() {
          r(_87b442830574);
        },
        writeln() {
          r(_87b442830574);
        },
        close() {
          r(_87b442830574);
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
          r(_87b442830574);
        },
        toString: () => "nyx://blocked67haha"
      }
    };
  }, o = _87b442830574 => {
    const _61a34be8504a = String(_87b442830574 || "").trim();
    if (/^(?:blob|data):/i.test(_61a34be8504a)) return !1;
    const _e71cd74f102f = _61a34be8504a.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_e71cd74f102f);
  }, i = (_87b442830574, _61a34be8504a = "") => {
    const _e71cd74f102f = String(_87b442830574 || "").trim();
    if (!_e71cd74f102f || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "nyx:download-request",
        url: _e71cd74f102f,
        filename: String(_61a34be8504a || ""),
        sourceUrl: String(location.href || "")
      }, "*"), !0;
    } catch {
      return !1;
    }
  };
  let c = (..._61a34be8504a) => o(_61a34be8504a[0]) && i(_61a34be8504a[0]) ? null : !e() && _87b442830574 ? _87b442830574(..._61a34be8504a) : n();
  try {
    "function" == typeof _87b442830574 && "function" == typeof Proxy && (c = new Proxy(_87b442830574, {
      apply: (_87b442830574, _61a34be8504a, _e71cd74f102f) => o(_e71cd74f102f[0]) && i(_e71cd74f102f[0]) ? null : e() ? n() : Reflect.apply(_87b442830574, _61a34be8504a, _e71cd74f102f),
      construct(_87b442830574, _61a34be8504a, _e71cd74f102f) {
        if (!e()) try {
          return Reflect.construct(_87b442830574, _61a34be8504a, _e71cd74f102f);
        } catch {
          return Reflect.apply(_87b442830574, window, _61a34be8504a);
        }
        return n();
      },
      get: (_87b442830574, _61a34be8504a, _e71cd74f102f) => "__nyxPopupGuard" === _61a34be8504a || ("toString" === _61a34be8504a ? () => "function open() { [native code] }" : Reflect.get(_87b442830574, _61a34be8504a, _e71cd74f102f))
    }));
  } catch {}
  const a = _87b442830574 => {
    const _61a34be8504a = String(_87b442830574 || "").toLowerCase();
    return _61a34be8504a && ![ "_self", "_parent", "_top" ].includes(_61a34be8504a);
  }, s = _87b442830574 => !!_87b442830574 && (!!_87b442830574.hasAttribute("download") || o(_87b442830574.href || _87b442830574.getAttribute("href") || ""));
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
    const _87b442830574 = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!s(this) || !i(this.href || this.getAttribute("href"), this.getAttribute("download") || "")) {
        if (!e() || !a(this.target)) return _87b442830574.call(this);
        n();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("click", _87b442830574 => {
    const _61a34be8504a = _87b442830574.target?.closest?.("a[href]");
    if (_61a34be8504a) return s(_61a34be8504a) && i(_61a34be8504a.href || _61a34be8504a.getAttribute("href"), _61a34be8504a.getAttribute("download") || "") ? (_87b442830574.preventDefault(), 
    void _87b442830574.stopImmediatePropagation()) : void (e() && a(_61a34be8504a.getAttribute("target")) && (_87b442830574.preventDefault(), 
    _87b442830574.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("auxclick", _87b442830574 => {
    const _61a34be8504a = _87b442830574.target?.closest?.("a[href]");
    if (_61a34be8504a) return s(_61a34be8504a) && i(_61a34be8504a.href || _61a34be8504a.getAttribute("href"), _61a34be8504a.getAttribute("download") || "") ? (_87b442830574.preventDefault(), 
    void _87b442830574.stopImmediatePropagation()) : void (e() && a(_61a34be8504a.getAttribute("target")) && (_87b442830574.preventDefault(), 
    _87b442830574.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("submit", _87b442830574 => {
    if (!e()) return;
    const _61a34be8504a = _87b442830574.target;
    _61a34be8504a && "FORM" === String(_61a34be8504a.tagName || "").toUpperCase() && a(_61a34be8504a.getAttribute("target")) && (_87b442830574.preventDefault(), 
    _87b442830574.stopImmediatePropagation(), n());
  }, !0));
  const u = _87b442830574 => {
    const _61a34be8504a = window[_87b442830574];
    if ("function" == typeof _61a34be8504a && !_61a34be8504a.__nyxWrapped) try {
      Object.setPrototypeOf(r, _61a34be8504a), r.prototype = _61a34be8504a.prototype, 
      Object.defineProperty(r, "__nyxWrapped", {
        value: !0
      }), window[_87b442830574] = r;
    } catch {}
    function r(_87b442830574, _e71cd74f102f, _2233f45defbe) {
      let _9b2fb69366d9 = Number(_87b442830574), _620b3b68ce07 = Number(_e71cd74f102f);
      return (!Number.isFinite(_9b2fb69366d9) || _9b2fb69366d9 < 0) && (_9b2fb69366d9 = 0), 
      (!Number.isFinite(_620b3b68ce07) || _620b3b68ce07 <= _9b2fb69366d9) && (_620b3b68ce07 = _9b2fb69366d9 + .001), 
      Reflect.construct(_61a34be8504a, [ _9b2fb69366d9, _620b3b68ce07, null == _2233f45defbe ? "" : String(_2233f45defbe) ], new.target || r);
    }
  };
  u("VTTCue"), u("TextTrackCue");
})();
