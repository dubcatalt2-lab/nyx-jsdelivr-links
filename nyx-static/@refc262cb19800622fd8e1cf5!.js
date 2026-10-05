(() => {
  if ("undefined" == typeof window || window.__nyxStudyJetGuards) return;
  window.__nyxStudyJetGuards = !0;
  const _f3717e0e6ae5 = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "trustedTypes", {
      configurable: !0,
      value: {
        createPolicy: (_f3717e0e6ae5, _fdcb13ec3925 = {}) => ({
          createHTML: _f3717e0e6ae5 => "function" == typeof _fdcb13ec3925.createHTML ? _fdcb13ec3925.createHTML(_f3717e0e6ae5) : _f3717e0e6ae5,
          createScript: _f3717e0e6ae5 => "function" == typeof _fdcb13ec3925.createScript ? _fdcb13ec3925.createScript(_f3717e0e6ae5) : _f3717e0e6ae5,
          createScriptURL: _f3717e0e6ae5 => "function" == typeof _fdcb13ec3925.createScriptURL ? _fdcb13ec3925.createScriptURL(_f3717e0e6ae5) : _f3717e0e6ae5
        })
      }
    });
  } catch {}
  try {
    const _f3717e0e6ae5 = Object.getOwnPropertyDescriptor(Document.prototype, "currentScript"), _fdcb13ec3925 = document.createElement("script");
    _fdcb13ec3925.setAttribute("nonce", ""), Object.defineProperty(Document.prototype, "currentScript", {
      configurable: !0,
      get() {
        let _976776f1e0ad = null;
        try {
          _976776f1e0ad = _f3717e0e6ae5?.get?.call(this) || null;
        } catch {}
        return _976776f1e0ad || this.querySelector?.("script[src],script") || _fdcb13ec3925;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const t = _f3717e0e6ae5 => !(!_f3717e0e6ae5 || !_f3717e0e6ae5.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_f3717e0e6ae5.tagName || "")), e = _f3717e0e6ae5 => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_f3717e0e6ae5?.tagName || "") ? String(_f3717e0e6ae5.value || "").slice(_f3717e0e6ae5.selectionStart || 0, _f3717e0e6ae5.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, r = (_f3717e0e6ae5, _fdcb13ec3925) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_f3717e0e6ae5?.tagName || "")) {
            const _976776f1e0ad = _f3717e0e6ae5.selectionStart || 0, _2403f206f4bb = _f3717e0e6ae5.selectionEnd || 0, _bc9a2ac2911a = String(_f3717e0e6ae5.value || "");
            _f3717e0e6ae5.value = _bc9a2ac2911a.slice(0, _976776f1e0ad) + _fdcb13ec3925 + _bc9a2ac2911a.slice(_2403f206f4bb);
            const _a6113f06edd3 = _976776f1e0ad + String(_fdcb13ec3925).length;
            return _f3717e0e6ae5.setSelectionRange(_a6113f06edd3, _a6113f06edd3), void _f3717e0e6ae5.dispatchEvent(new Event("input", {
              bubbles: !0
            }));
          }
          document.execCommand?.("insertText", !1, _fdcb13ec3925);
        } catch {}
      }, n = async _f3717e0e6ae5 => {
        try {
          await (navigator.clipboard?.writeText(String(_f3717e0e6ae5 || "")));
        } catch {
          try {
            document.execCommand?.("copy");
          } catch {}
        }
      }, _f3717e0e6ae5 = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _fdcb13ec3925 = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), c = _976776f1e0ad => {
        try {
          _f3717e0e6ae5?.postMessage(_976776f1e0ad, "*");
        } catch {}
        try {
          _fdcb13ec3925 && _fdcb13ec3925 !== _f3717e0e6ae5 && _fdcb13ec3925.postMessage(_976776f1e0ad, "*");
        } catch {}
        try {
          window.parent?.postMessage(_976776f1e0ad, "*");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_976776f1e0ad, "*");
        } catch {}
      };
      window.addEventListener("keydown", _f3717e0e6ae5 => {
        const _fdcb13ec3925 = String(_f3717e0e6ae5.key || "").toLowerCase();
        if (_f3717e0e6ae5.altKey && !_f3717e0e6ae5.ctrlKey && !_f3717e0e6ae5.metaKey && 2 !== _f3717e0e6ae5.location && "alt" === _fdcb13ec3925) return _f3717e0e6ae5.preventDefault(), 
        _f3717e0e6ae5.stopPropagation(), void c({
          type: "nyx:alt-prime"
        });
        if (_f3717e0e6ae5.altKey && !_f3717e0e6ae5.ctrlKey && !_f3717e0e6ae5.metaKey && 2 !== _f3717e0e6ae5.location && t(_f3717e0e6ae5.target) && /^[acxvzy]$/.test(_fdcb13ec3925)) {
          if (_f3717e0e6ae5.preventDefault(), _f3717e0e6ae5.stopPropagation(), "a" === _fdcb13ec3925) return void (_f3717e0e6ae5.target?.select ? _f3717e0e6ae5.target.select() : document.execCommand?.("selectAll"));
          if ("c" === _fdcb13ec3925) return void n(e(_f3717e0e6ae5.target));
          if ("x" === _fdcb13ec3925) {
            const _fdcb13ec3925 = e(_f3717e0e6ae5.target);
            return n(_fdcb13ec3925), void r(_f3717e0e6ae5.target, "");
          }
          if ("v" === _fdcb13ec3925) return void navigator.clipboard?.readText?.().then(_fdcb13ec3925 => r(_f3717e0e6ae5.target, _fdcb13ec3925)).catch(() => {
            try {
              document.execCommand?.("paste");
            } catch {}
          });
          if ("z" === _fdcb13ec3925) return void document.execCommand?.("undo");
          if ("y" === _fdcb13ec3925) return void document.execCommand?.("redo");
        }
        return !_f3717e0e6ae5.altKey || _f3717e0e6ae5.ctrlKey || _f3717e0e6ae5.metaKey || 2 === _f3717e0e6ae5.location || !/^[1-9]$/.test(_fdcb13ec3925) && ![ "l", "d", "t", "w", "r", "arrowleft", "arrowright", "tab" ].includes(_fdcb13ec3925) ? void 0 : (_f3717e0e6ae5.preventDefault(), 
        _f3717e0e6ae5.stopPropagation(), void c({
          type: "nyx:alt-shortcut",
          key: _fdcb13ec3925,
          code: _f3717e0e6ae5.code || "",
          location: _f3717e0e6ae5.location || 0,
          shiftKey: !!_f3717e0e6ae5.shiftKey
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
  }, r = _f3717e0e6ae5 => {
    if (!_f3717e0e6ae5) return !1;
    try {
      return _f3717e0e6ae5.document.open(), _f3717e0e6ae5.document.write('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>nyx://blocked67haha</title><style>html,body{margin:0;width:100%;height:100%;background:#fff;color:#111;font:28px Raleway,Arial,sans-serif}body{display:grid;place-items:center;text-align:center}main{padding:24px}</style></head><body><main>are you trying to hack me scamma???</main></body></html>'), 
      _f3717e0e6ae5.document.close(), _f3717e0e6ae5.focus?.(), !0;
    } catch {
      return !1;
    }
  }, n = () => {
    const _f3717e0e6ae5 = null;
    return {
      closed: !1,
      focus() {
        try {
          _f3717e0e6ae5?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _f3717e0e6ae5?.blur?.();
        } catch {}
      },
      close() {
        try {
          _f3717e0e6ae5?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return r(_f3717e0e6ae5), this;
        },
        write() {
          r(_f3717e0e6ae5);
        },
        writeln() {
          r(_f3717e0e6ae5);
        },
        close() {
          r(_f3717e0e6ae5);
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
          r(_f3717e0e6ae5);
        },
        toString: () => "nyx://blocked67haha"
      }
    };
  }, o = _f3717e0e6ae5 => {
    const _fdcb13ec3925 = String(_f3717e0e6ae5 || "").trim();
    if (/^(?:blob|data):/i.test(_fdcb13ec3925)) return !1;
    const _976776f1e0ad = _fdcb13ec3925.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_976776f1e0ad);
  }, i = (_f3717e0e6ae5, _fdcb13ec3925 = "") => {
    const _976776f1e0ad = String(_f3717e0e6ae5 || "").trim();
    if (!_976776f1e0ad || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "nyx:download-request",
        url: _976776f1e0ad,
        filename: String(_fdcb13ec3925 || ""),
        sourceUrl: String(location.href || "")
      }, "*"), !0;
    } catch {
      return !1;
    }
  };
  let c = (..._fdcb13ec3925) => o(_fdcb13ec3925[0]) && i(_fdcb13ec3925[0]) ? null : !e() && _f3717e0e6ae5 ? _f3717e0e6ae5(..._fdcb13ec3925) : n();
  try {
    "function" == typeof _f3717e0e6ae5 && "function" == typeof Proxy && (c = new Proxy(_f3717e0e6ae5, {
      apply: (_f3717e0e6ae5, _fdcb13ec3925, _976776f1e0ad) => o(_976776f1e0ad[0]) && i(_976776f1e0ad[0]) ? null : e() ? n() : Reflect.apply(_f3717e0e6ae5, _fdcb13ec3925, _976776f1e0ad),
      construct(_f3717e0e6ae5, _fdcb13ec3925, _976776f1e0ad) {
        if (!e()) try {
          return Reflect.construct(_f3717e0e6ae5, _fdcb13ec3925, _976776f1e0ad);
        } catch {
          return Reflect.apply(_f3717e0e6ae5, window, _fdcb13ec3925);
        }
        return n();
      },
      get: (_f3717e0e6ae5, _fdcb13ec3925, _976776f1e0ad) => "__nyxPopupGuard" === _fdcb13ec3925 || ("toString" === _fdcb13ec3925 ? () => "function open() { [native code] }" : Reflect.get(_f3717e0e6ae5, _fdcb13ec3925, _976776f1e0ad))
    }));
  } catch {}
  const a = _f3717e0e6ae5 => {
    const _fdcb13ec3925 = String(_f3717e0e6ae5 || "").toLowerCase();
    return _fdcb13ec3925 && ![ "_self", "_parent", "_top" ].includes(_fdcb13ec3925);
  }, s = _f3717e0e6ae5 => !!_f3717e0e6ae5 && (!!_f3717e0e6ae5.hasAttribute("download") || o(_f3717e0e6ae5.href || _f3717e0e6ae5.getAttribute("href") || ""));
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
    const _f3717e0e6ae5 = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!s(this) || !i(this.href || this.getAttribute("href"), this.getAttribute("download") || "")) {
        if (!e() || !a(this.target)) return _f3717e0e6ae5.call(this);
        n();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("click", _f3717e0e6ae5 => {
    const _fdcb13ec3925 = _f3717e0e6ae5.target?.closest?.("a[href]");
    if (_fdcb13ec3925) return s(_fdcb13ec3925) && i(_fdcb13ec3925.href || _fdcb13ec3925.getAttribute("href"), _fdcb13ec3925.getAttribute("download") || "") ? (_f3717e0e6ae5.preventDefault(), 
    void _f3717e0e6ae5.stopImmediatePropagation()) : void (e() && a(_fdcb13ec3925.getAttribute("target")) && (_f3717e0e6ae5.preventDefault(), 
    _f3717e0e6ae5.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("auxclick", _f3717e0e6ae5 => {
    const _fdcb13ec3925 = _f3717e0e6ae5.target?.closest?.("a[href]");
    if (_fdcb13ec3925) return s(_fdcb13ec3925) && i(_fdcb13ec3925.href || _fdcb13ec3925.getAttribute("href"), _fdcb13ec3925.getAttribute("download") || "") ? (_f3717e0e6ae5.preventDefault(), 
    void _f3717e0e6ae5.stopImmediatePropagation()) : void (e() && a(_fdcb13ec3925.getAttribute("target")) && (_f3717e0e6ae5.preventDefault(), 
    _f3717e0e6ae5.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("submit", _f3717e0e6ae5 => {
    if (!e()) return;
    const _fdcb13ec3925 = _f3717e0e6ae5.target;
    _fdcb13ec3925 && "FORM" === String(_fdcb13ec3925.tagName || "").toUpperCase() && a(_fdcb13ec3925.getAttribute("target")) && (_f3717e0e6ae5.preventDefault(), 
    _f3717e0e6ae5.stopImmediatePropagation(), n());
  }, !0));
  const u = _f3717e0e6ae5 => {
    const _fdcb13ec3925 = window[_f3717e0e6ae5];
    if ("function" == typeof _fdcb13ec3925 && !_fdcb13ec3925.__nyxWrapped) try {
      Object.setPrototypeOf(r, _fdcb13ec3925), r.prototype = _fdcb13ec3925.prototype, 
      Object.defineProperty(r, "__nyxWrapped", {
        value: !0
      }), window[_f3717e0e6ae5] = r;
    } catch {}
    function r(_f3717e0e6ae5, _976776f1e0ad, _2403f206f4bb) {
      let _bc9a2ac2911a = Number(_f3717e0e6ae5), _a6113f06edd3 = Number(_976776f1e0ad);
      return (!Number.isFinite(_bc9a2ac2911a) || _bc9a2ac2911a < 0) && (_bc9a2ac2911a = 0), 
      (!Number.isFinite(_a6113f06edd3) || _a6113f06edd3 <= _bc9a2ac2911a) && (_a6113f06edd3 = _bc9a2ac2911a + .001), 
      Reflect.construct(_fdcb13ec3925, [ _bc9a2ac2911a, _a6113f06edd3, null == _2403f206f4bb ? "" : String(_2403f206f4bb) ], new.target || r);
    }
  };
  u("VTTCue"), u("TextTrackCue");
})();
