(() => {
  if ("undefined" == typeof window || window.__nyxScramjetGuards) return;
  window.__nyxScramjetGuards = !0;
  const _26ef0c34f043 = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "trustedTypes", {
      configurable: !0,
      value: {
        createPolicy: (_26ef0c34f043, _1f136c9f7f5d = {}) => ({
          createHTML: _26ef0c34f043 => "function" == typeof _1f136c9f7f5d.createHTML ? _1f136c9f7f5d.createHTML(_26ef0c34f043) : _26ef0c34f043,
          createScript: _26ef0c34f043 => "function" == typeof _1f136c9f7f5d.createScript ? _1f136c9f7f5d.createScript(_26ef0c34f043) : _26ef0c34f043,
          createScriptURL: _26ef0c34f043 => "function" == typeof _1f136c9f7f5d.createScriptURL ? _1f136c9f7f5d.createScriptURL(_26ef0c34f043) : _26ef0c34f043
        })
      }
    });
  } catch {}
  try {
    const _26ef0c34f043 = Object.getOwnPropertyDescriptor(Document.prototype, "currentScript"), _1f136c9f7f5d = document.createElement("script");
    _1f136c9f7f5d.setAttribute("nonce", ""), Object.defineProperty(Document.prototype, "currentScript", {
      configurable: !0,
      get() {
        let _10d56407e13e = null;
        try {
          _10d56407e13e = _26ef0c34f043?.get?.call(this) || null;
        } catch {}
        return _10d56407e13e || this.querySelector?.("script[src],script") || _1f136c9f7f5d;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const t = _26ef0c34f043 => !(!_26ef0c34f043 || !_26ef0c34f043.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_26ef0c34f043.tagName || "")), e = _26ef0c34f043 => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_26ef0c34f043?.tagName || "") ? String(_26ef0c34f043.value || "").slice(_26ef0c34f043.selectionStart || 0, _26ef0c34f043.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, r = (_26ef0c34f043, _1f136c9f7f5d) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_26ef0c34f043?.tagName || "")) {
            const _10d56407e13e = _26ef0c34f043.selectionStart || 0, _c60d73ef30da = _26ef0c34f043.selectionEnd || 0, _1e18f8c56e4c = String(_26ef0c34f043.value || "");
            _26ef0c34f043.value = _1e18f8c56e4c.slice(0, _10d56407e13e) + _1f136c9f7f5d + _1e18f8c56e4c.slice(_c60d73ef30da);
            const _0f0ed69f4d9b = _10d56407e13e + String(_1f136c9f7f5d).length;
            return _26ef0c34f043.setSelectionRange(_0f0ed69f4d9b, _0f0ed69f4d9b), void _26ef0c34f043.dispatchEvent(new Event("input", {
              bubbles: !0
            }));
          }
          document.execCommand?.("insertText", !1, _1f136c9f7f5d);
        } catch {}
      }, n = async _26ef0c34f043 => {
        try {
          await (navigator.clipboard?.writeText(String(_26ef0c34f043 || "")));
        } catch {
          try {
            document.execCommand?.("copy");
          } catch {}
        }
      }, _26ef0c34f043 = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _1f136c9f7f5d = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), c = _10d56407e13e => {
        try {
          _26ef0c34f043?.postMessage(_10d56407e13e, "*");
        } catch {}
        try {
          _1f136c9f7f5d && _1f136c9f7f5d !== _26ef0c34f043 && _1f136c9f7f5d.postMessage(_10d56407e13e, "*");
        } catch {}
        try {
          window.parent?.postMessage(_10d56407e13e, "*");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_10d56407e13e, "*");
        } catch {}
      };
      window.addEventListener("keydown", _26ef0c34f043 => {
        const _1f136c9f7f5d = String(_26ef0c34f043.key || "").toLowerCase();
        if (_26ef0c34f043.altKey && !_26ef0c34f043.ctrlKey && !_26ef0c34f043.metaKey && 2 !== _26ef0c34f043.location && "alt" === _1f136c9f7f5d) return _26ef0c34f043.preventDefault(), 
        _26ef0c34f043.stopPropagation(), void c({
          type: "nyx:alt-prime"
        });
        if (_26ef0c34f043.altKey && !_26ef0c34f043.ctrlKey && !_26ef0c34f043.metaKey && 2 !== _26ef0c34f043.location && t(_26ef0c34f043.target) && /^[acxvzy]$/.test(_1f136c9f7f5d)) {
          if (_26ef0c34f043.preventDefault(), _26ef0c34f043.stopPropagation(), "a" === _1f136c9f7f5d) return void (_26ef0c34f043.target?.select ? _26ef0c34f043.target.select() : document.execCommand?.("selectAll"));
          if ("c" === _1f136c9f7f5d) return void n(e(_26ef0c34f043.target));
          if ("x" === _1f136c9f7f5d) {
            const _1f136c9f7f5d = e(_26ef0c34f043.target);
            return n(_1f136c9f7f5d), void r(_26ef0c34f043.target, "");
          }
          if ("v" === _1f136c9f7f5d) return void navigator.clipboard?.readText?.().then(_1f136c9f7f5d => r(_26ef0c34f043.target, _1f136c9f7f5d)).catch(() => {
            try {
              document.execCommand?.("paste");
            } catch {}
          });
          if ("z" === _1f136c9f7f5d) return void document.execCommand?.("undo");
          if ("y" === _1f136c9f7f5d) return void document.execCommand?.("redo");
        }
        return !_26ef0c34f043.altKey || _26ef0c34f043.ctrlKey || _26ef0c34f043.metaKey || 2 === _26ef0c34f043.location || !/^[1-9]$/.test(_1f136c9f7f5d) && ![ "l", "d", "t", "w", "r", "arrowleft", "arrowright", "tab" ].includes(_1f136c9f7f5d) ? void 0 : (_26ef0c34f043.preventDefault(), 
        _26ef0c34f043.stopPropagation(), void c({
          type: "nyx:alt-shortcut",
          key: _1f136c9f7f5d,
          code: _26ef0c34f043.code || "",
          location: _26ef0c34f043.location || 0,
          shiftKey: !!_26ef0c34f043.shiftKey
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
  }, r = _26ef0c34f043 => {
    if (!_26ef0c34f043) return !1;
    try {
      return _26ef0c34f043.document.open(), _26ef0c34f043.document.write('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>nyx://blocked67haha</title><style>html,body{margin:0;width:100%;height:100%;background:#fff;color:#111;font:28px Raleway,Arial,sans-serif}body{display:grid;place-items:center;text-align:center}main{padding:24px}</style></head><body><main>are you trying to hack me scamma???</main></body></html>'), 
      _26ef0c34f043.document.close(), _26ef0c34f043.focus?.(), !0;
    } catch {
      return !1;
    }
  }, n = () => {
    const _26ef0c34f043 = null;
    return {
      closed: !1,
      focus() {
        try {
          _26ef0c34f043?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _26ef0c34f043?.blur?.();
        } catch {}
      },
      close() {
        try {
          _26ef0c34f043?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return r(_26ef0c34f043), this;
        },
        write() {
          r(_26ef0c34f043);
        },
        writeln() {
          r(_26ef0c34f043);
        },
        close() {
          r(_26ef0c34f043);
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
          r(_26ef0c34f043);
        },
        toString: () => "nyx://blocked67haha"
      }
    };
  }, o = _26ef0c34f043 => {
    const _1f136c9f7f5d = String(_26ef0c34f043 || "").trim();
    if (/^(?:blob|data):/i.test(_1f136c9f7f5d)) return !1;
    const _10d56407e13e = _1f136c9f7f5d.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_10d56407e13e);
  }, i = (_26ef0c34f043, _1f136c9f7f5d = "") => {
    const _10d56407e13e = String(_26ef0c34f043 || "").trim();
    if (!_10d56407e13e || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "nyx:download-request",
        url: _10d56407e13e,
        filename: String(_1f136c9f7f5d || ""),
        sourceUrl: String(location.href || "")
      }, "*"), !0;
    } catch {
      return !1;
    }
  };
  let c = (..._1f136c9f7f5d) => o(_1f136c9f7f5d[0]) && i(_1f136c9f7f5d[0]) ? null : !e() && _26ef0c34f043 ? _26ef0c34f043(..._1f136c9f7f5d) : n();
  try {
    "function" == typeof _26ef0c34f043 && "function" == typeof Proxy && (c = new Proxy(_26ef0c34f043, {
      apply: (_26ef0c34f043, _1f136c9f7f5d, _10d56407e13e) => o(_10d56407e13e[0]) && i(_10d56407e13e[0]) ? null : e() ? n() : Reflect.apply(_26ef0c34f043, _1f136c9f7f5d, _10d56407e13e),
      construct(_26ef0c34f043, _1f136c9f7f5d, _10d56407e13e) {
        if (!e()) try {
          return Reflect.construct(_26ef0c34f043, _1f136c9f7f5d, _10d56407e13e);
        } catch {
          return Reflect.apply(_26ef0c34f043, window, _1f136c9f7f5d);
        }
        return n();
      },
      get: (_26ef0c34f043, _1f136c9f7f5d, _10d56407e13e) => "__nyxPopupGuard" === _1f136c9f7f5d || ("toString" === _1f136c9f7f5d ? () => "function open() { [native code] }" : Reflect.get(_26ef0c34f043, _1f136c9f7f5d, _10d56407e13e))
    }));
  } catch {}
  const a = _26ef0c34f043 => {
    const _1f136c9f7f5d = String(_26ef0c34f043 || "").toLowerCase();
    return _1f136c9f7f5d && ![ "_self", "_parent", "_top" ].includes(_1f136c9f7f5d);
  }, s = _26ef0c34f043 => !!_26ef0c34f043 && (!!_26ef0c34f043.hasAttribute("download") || o(_26ef0c34f043.href || _26ef0c34f043.getAttribute("href") || ""));
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
    const _26ef0c34f043 = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!s(this) || !i(this.href || this.getAttribute("href"), this.getAttribute("download") || "")) {
        if (!e() || !a(this.target)) return _26ef0c34f043.call(this);
        n();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("click", _26ef0c34f043 => {
    const _1f136c9f7f5d = _26ef0c34f043.target?.closest?.("a[href]");
    if (_1f136c9f7f5d) return s(_1f136c9f7f5d) && i(_1f136c9f7f5d.href || _1f136c9f7f5d.getAttribute("href"), _1f136c9f7f5d.getAttribute("download") || "") ? (_26ef0c34f043.preventDefault(), 
    void _26ef0c34f043.stopImmediatePropagation()) : void (e() && a(_1f136c9f7f5d.getAttribute("target")) && (_26ef0c34f043.preventDefault(), 
    _26ef0c34f043.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("auxclick", _26ef0c34f043 => {
    const _1f136c9f7f5d = _26ef0c34f043.target?.closest?.("a[href]");
    if (_1f136c9f7f5d) return s(_1f136c9f7f5d) && i(_1f136c9f7f5d.href || _1f136c9f7f5d.getAttribute("href"), _1f136c9f7f5d.getAttribute("download") || "") ? (_26ef0c34f043.preventDefault(), 
    void _26ef0c34f043.stopImmediatePropagation()) : void (e() && a(_1f136c9f7f5d.getAttribute("target")) && (_26ef0c34f043.preventDefault(), 
    _26ef0c34f043.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("submit", _26ef0c34f043 => {
    if (!e()) return;
    const _1f136c9f7f5d = _26ef0c34f043.target;
    _1f136c9f7f5d && "FORM" === String(_1f136c9f7f5d.tagName || "").toUpperCase() && a(_1f136c9f7f5d.getAttribute("target")) && (_26ef0c34f043.preventDefault(), 
    _26ef0c34f043.stopImmediatePropagation(), n());
  }, !0));
  const u = _26ef0c34f043 => {
    const _1f136c9f7f5d = window[_26ef0c34f043];
    if ("function" == typeof _1f136c9f7f5d && !_1f136c9f7f5d.__nyxWrapped) try {
      Object.setPrototypeOf(r, _1f136c9f7f5d), r.prototype = _1f136c9f7f5d.prototype, 
      Object.defineProperty(r, "__nyxWrapped", {
        value: !0
      }), window[_26ef0c34f043] = r;
    } catch {}
    function r(_26ef0c34f043, _10d56407e13e, _c60d73ef30da) {
      let _1e18f8c56e4c = Number(_26ef0c34f043), _0f0ed69f4d9b = Number(_10d56407e13e);
      return (!Number.isFinite(_1e18f8c56e4c) || _1e18f8c56e4c < 0) && (_1e18f8c56e4c = 0), 
      (!Number.isFinite(_0f0ed69f4d9b) || _0f0ed69f4d9b <= _1e18f8c56e4c) && (_0f0ed69f4d9b = _1e18f8c56e4c + .001), 
      Reflect.construct(_1f136c9f7f5d, [ _1e18f8c56e4c, _0f0ed69f4d9b, null == _c60d73ef30da ? "" : String(_c60d73ef30da) ], new.target || r);
    }
  };
  u("VTTCue"), u("TextTrackCue");
})();
