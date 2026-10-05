(() => {
  if ("undefined" == typeof window || window.__nyxScramjetGuards) return;
  window.__nyxScramjetGuards = !0;
  const _d1f36883ae81 = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "trustedTypes", {
      configurable: !0,
      value: {
        createPolicy: (_d1f36883ae81, _81966b0aff26 = {}) => ({
          createHTML: _d1f36883ae81 => "function" == typeof _81966b0aff26.createHTML ? _81966b0aff26.createHTML(_d1f36883ae81) : _d1f36883ae81,
          createScript: _d1f36883ae81 => "function" == typeof _81966b0aff26.createScript ? _81966b0aff26.createScript(_d1f36883ae81) : _d1f36883ae81,
          createScriptURL: _d1f36883ae81 => "function" == typeof _81966b0aff26.createScriptURL ? _81966b0aff26.createScriptURL(_d1f36883ae81) : _d1f36883ae81
        })
      }
    });
  } catch {}
  try {
    const _d1f36883ae81 = Object.getOwnPropertyDescriptor(Document.prototype, "currentScript"), _81966b0aff26 = document.createElement("script");
    _81966b0aff26.setAttribute("nonce", ""), Object.defineProperty(Document.prototype, "currentScript", {
      configurable: !0,
      get() {
        let _016e0eebd98a = null;
        try {
          _016e0eebd98a = _d1f36883ae81?.get?.call(this) || null;
        } catch {}
        return _016e0eebd98a || this.querySelector?.("script[src],script") || _81966b0aff26;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const t = _d1f36883ae81 => !(!_d1f36883ae81 || !_d1f36883ae81.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_d1f36883ae81.tagName || "")), e = _d1f36883ae81 => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_d1f36883ae81?.tagName || "") ? String(_d1f36883ae81.value || "").slice(_d1f36883ae81.selectionStart || 0, _d1f36883ae81.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, r = (_d1f36883ae81, _81966b0aff26) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_d1f36883ae81?.tagName || "")) {
            const _016e0eebd98a = _d1f36883ae81.selectionStart || 0, _0d0953dbff2b = _d1f36883ae81.selectionEnd || 0, _8c1390cb49e4 = String(_d1f36883ae81.value || "");
            _d1f36883ae81.value = _8c1390cb49e4.slice(0, _016e0eebd98a) + _81966b0aff26 + _8c1390cb49e4.slice(_0d0953dbff2b);
            const _8034c78cac20 = _016e0eebd98a + String(_81966b0aff26).length;
            return _d1f36883ae81.setSelectionRange(_8034c78cac20, _8034c78cac20), void _d1f36883ae81.dispatchEvent(new Event("input", {
              bubbles: !0
            }));
          }
          document.execCommand?.("insertText", !1, _81966b0aff26);
        } catch {}
      }, n = async _d1f36883ae81 => {
        try {
          await (navigator.clipboard?.writeText(String(_d1f36883ae81 || "")));
        } catch {
          try {
            document.execCommand?.("copy");
          } catch {}
        }
      }, _d1f36883ae81 = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _81966b0aff26 = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), c = _016e0eebd98a => {
        try {
          _d1f36883ae81?.postMessage(_016e0eebd98a, "*");
        } catch {}
        try {
          _81966b0aff26 && _81966b0aff26 !== _d1f36883ae81 && _81966b0aff26.postMessage(_016e0eebd98a, "*");
        } catch {}
        try {
          window.parent?.postMessage(_016e0eebd98a, "*");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_016e0eebd98a, "*");
        } catch {}
      };
      window.addEventListener("keydown", _d1f36883ae81 => {
        const _81966b0aff26 = String(_d1f36883ae81.key || "").toLowerCase();
        if (_d1f36883ae81.altKey && !_d1f36883ae81.ctrlKey && !_d1f36883ae81.metaKey && 2 !== _d1f36883ae81.location && "alt" === _81966b0aff26) return _d1f36883ae81.preventDefault(), 
        _d1f36883ae81.stopPropagation(), void c({
          type: "nyx:alt-prime"
        });
        if (_d1f36883ae81.altKey && !_d1f36883ae81.ctrlKey && !_d1f36883ae81.metaKey && 2 !== _d1f36883ae81.location && t(_d1f36883ae81.target) && /^[acxvzy]$/.test(_81966b0aff26)) {
          if (_d1f36883ae81.preventDefault(), _d1f36883ae81.stopPropagation(), "a" === _81966b0aff26) return void (_d1f36883ae81.target?.select ? _d1f36883ae81.target.select() : document.execCommand?.("selectAll"));
          if ("c" === _81966b0aff26) return void n(e(_d1f36883ae81.target));
          if ("x" === _81966b0aff26) {
            const _81966b0aff26 = e(_d1f36883ae81.target);
            return n(_81966b0aff26), void r(_d1f36883ae81.target, "");
          }
          if ("v" === _81966b0aff26) return void navigator.clipboard?.readText?.().then(_81966b0aff26 => r(_d1f36883ae81.target, _81966b0aff26)).catch(() => {
            try {
              document.execCommand?.("paste");
            } catch {}
          });
          if ("z" === _81966b0aff26) return void document.execCommand?.("undo");
          if ("y" === _81966b0aff26) return void document.execCommand?.("redo");
        }
        return !_d1f36883ae81.altKey || _d1f36883ae81.ctrlKey || _d1f36883ae81.metaKey || 2 === _d1f36883ae81.location || !/^[1-9]$/.test(_81966b0aff26) && ![ "l", "d", "t", "w", "r", "arrowleft", "arrowright", "tab" ].includes(_81966b0aff26) ? void 0 : (_d1f36883ae81.preventDefault(), 
        _d1f36883ae81.stopPropagation(), void c({
          type: "nyx:alt-shortcut",
          key: _81966b0aff26,
          code: _d1f36883ae81.code || "",
          location: _d1f36883ae81.location || 0,
          shiftKey: !!_d1f36883ae81.shiftKey
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
  }, r = _d1f36883ae81 => {
    if (!_d1f36883ae81) return !1;
    try {
      return _d1f36883ae81.document.open(), _d1f36883ae81.document.write('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>nyx://blocked67haha</title><style>html,body{margin:0;width:100%;height:100%;background:#fff;color:#111;font:28px Raleway,Arial,sans-serif}body{display:grid;place-items:center;text-align:center}main{padding:24px}</style></head><body><main>are you trying to hack me scamma???</main></body></html>'), 
      _d1f36883ae81.document.close(), _d1f36883ae81.focus?.(), !0;
    } catch {
      return !1;
    }
  }, n = () => {
    const _d1f36883ae81 = null;
    return {
      closed: !1,
      focus() {
        try {
          _d1f36883ae81?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _d1f36883ae81?.blur?.();
        } catch {}
      },
      close() {
        try {
          _d1f36883ae81?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return r(_d1f36883ae81), this;
        },
        write() {
          r(_d1f36883ae81);
        },
        writeln() {
          r(_d1f36883ae81);
        },
        close() {
          r(_d1f36883ae81);
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
          r(_d1f36883ae81);
        },
        toString: () => "nyx://blocked67haha"
      }
    };
  }, o = _d1f36883ae81 => {
    const _81966b0aff26 = String(_d1f36883ae81 || "").trim();
    if (/^(?:blob|data):/i.test(_81966b0aff26)) return !1;
    const _016e0eebd98a = _81966b0aff26.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_016e0eebd98a);
  }, i = (_d1f36883ae81, _81966b0aff26 = "") => {
    const _016e0eebd98a = String(_d1f36883ae81 || "").trim();
    if (!_016e0eebd98a || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "nyx:download-request",
        url: _016e0eebd98a,
        filename: String(_81966b0aff26 || ""),
        sourceUrl: String(location.href || "")
      }, "*"), !0;
    } catch {
      return !1;
    }
  };
  let c = (..._81966b0aff26) => o(_81966b0aff26[0]) && i(_81966b0aff26[0]) ? null : !e() && _d1f36883ae81 ? _d1f36883ae81(..._81966b0aff26) : n();
  try {
    "function" == typeof _d1f36883ae81 && "function" == typeof Proxy && (c = new Proxy(_d1f36883ae81, {
      apply: (_d1f36883ae81, _81966b0aff26, _016e0eebd98a) => o(_016e0eebd98a[0]) && i(_016e0eebd98a[0]) ? null : e() ? n() : Reflect.apply(_d1f36883ae81, _81966b0aff26, _016e0eebd98a),
      construct(_d1f36883ae81, _81966b0aff26, _016e0eebd98a) {
        if (!e()) try {
          return Reflect.construct(_d1f36883ae81, _81966b0aff26, _016e0eebd98a);
        } catch {
          return Reflect.apply(_d1f36883ae81, window, _81966b0aff26);
        }
        return n();
      },
      get: (_d1f36883ae81, _81966b0aff26, _016e0eebd98a) => "__nyxPopupGuard" === _81966b0aff26 || ("toString" === _81966b0aff26 ? () => "function open() { [native code] }" : Reflect.get(_d1f36883ae81, _81966b0aff26, _016e0eebd98a))
    }));
  } catch {}
  const a = _d1f36883ae81 => {
    const _81966b0aff26 = String(_d1f36883ae81 || "").toLowerCase();
    return _81966b0aff26 && ![ "_self", "_parent", "_top" ].includes(_81966b0aff26);
  }, s = _d1f36883ae81 => !!_d1f36883ae81 && (!!_d1f36883ae81.hasAttribute("download") || o(_d1f36883ae81.href || _d1f36883ae81.getAttribute("href") || ""));
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
    const _d1f36883ae81 = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!s(this) || !i(this.href || this.getAttribute("href"), this.getAttribute("download") || "")) {
        if (!e() || !a(this.target)) return _d1f36883ae81.call(this);
        n();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("click", _d1f36883ae81 => {
    const _81966b0aff26 = _d1f36883ae81.target?.closest?.("a[href]");
    if (_81966b0aff26) return s(_81966b0aff26) && i(_81966b0aff26.href || _81966b0aff26.getAttribute("href"), _81966b0aff26.getAttribute("download") || "") ? (_d1f36883ae81.preventDefault(), 
    void _d1f36883ae81.stopImmediatePropagation()) : void (e() && a(_81966b0aff26.getAttribute("target")) && (_d1f36883ae81.preventDefault(), 
    _d1f36883ae81.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("auxclick", _d1f36883ae81 => {
    const _81966b0aff26 = _d1f36883ae81.target?.closest?.("a[href]");
    if (_81966b0aff26) return s(_81966b0aff26) && i(_81966b0aff26.href || _81966b0aff26.getAttribute("href"), _81966b0aff26.getAttribute("download") || "") ? (_d1f36883ae81.preventDefault(), 
    void _d1f36883ae81.stopImmediatePropagation()) : void (e() && a(_81966b0aff26.getAttribute("target")) && (_d1f36883ae81.preventDefault(), 
    _d1f36883ae81.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("submit", _d1f36883ae81 => {
    if (!e()) return;
    const _81966b0aff26 = _d1f36883ae81.target;
    _81966b0aff26 && "FORM" === String(_81966b0aff26.tagName || "").toUpperCase() && a(_81966b0aff26.getAttribute("target")) && (_d1f36883ae81.preventDefault(), 
    _d1f36883ae81.stopImmediatePropagation(), n());
  }, !0));
  const u = _d1f36883ae81 => {
    const _81966b0aff26 = window[_d1f36883ae81];
    if ("function" == typeof _81966b0aff26 && !_81966b0aff26.__nyxWrapped) try {
      Object.setPrototypeOf(r, _81966b0aff26), r.prototype = _81966b0aff26.prototype, 
      Object.defineProperty(r, "__nyxWrapped", {
        value: !0
      }), window[_d1f36883ae81] = r;
    } catch {}
    function r(_d1f36883ae81, _016e0eebd98a, _0d0953dbff2b) {
      let _8c1390cb49e4 = Number(_d1f36883ae81), _8034c78cac20 = Number(_016e0eebd98a);
      return (!Number.isFinite(_8c1390cb49e4) || _8c1390cb49e4 < 0) && (_8c1390cb49e4 = 0), 
      (!Number.isFinite(_8034c78cac20) || _8034c78cac20 <= _8c1390cb49e4) && (_8034c78cac20 = _8c1390cb49e4 + .001), 
      Reflect.construct(_81966b0aff26, [ _8c1390cb49e4, _8034c78cac20, null == _0d0953dbff2b ? "" : String(_0d0953dbff2b) ], new.target || r);
    }
  };
  u("VTTCue"), u("TextTrackCue");
})();
