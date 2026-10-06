(() => {
  if ("undefined" == typeof window || window.__nyxScramjetGuards) return;
  window.__nyxScramjetGuards = !0;
  const _d4cdd06c49e2 = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "trustedTypes", {
      configurable: !0,
      value: {
        createPolicy: (_d4cdd06c49e2, _580d81146b11 = {}) => ({
          createHTML: _d4cdd06c49e2 => "function" == typeof _580d81146b11.createHTML ? _580d81146b11.createHTML(_d4cdd06c49e2) : _d4cdd06c49e2,
          createScript: _d4cdd06c49e2 => "function" == typeof _580d81146b11.createScript ? _580d81146b11.createScript(_d4cdd06c49e2) : _d4cdd06c49e2,
          createScriptURL: _d4cdd06c49e2 => "function" == typeof _580d81146b11.createScriptURL ? _580d81146b11.createScriptURL(_d4cdd06c49e2) : _d4cdd06c49e2
        })
      }
    });
  } catch {}
  try {
    const _d4cdd06c49e2 = Object.getOwnPropertyDescriptor(Document.prototype, "currentScript"), _580d81146b11 = document.createElement("script");
    _580d81146b11.setAttribute("nonce", ""), Object.defineProperty(Document.prototype, "currentScript", {
      configurable: !0,
      get() {
        let _804e9ea707d1 = null;
        try {
          _804e9ea707d1 = _d4cdd06c49e2?.get?.call(this) || null;
        } catch {}
        return _804e9ea707d1 || this.querySelector?.("script[src],script") || _580d81146b11;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const t = _d4cdd06c49e2 => !(!_d4cdd06c49e2 || !_d4cdd06c49e2.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_d4cdd06c49e2.tagName || "")), e = _d4cdd06c49e2 => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_d4cdd06c49e2?.tagName || "") ? String(_d4cdd06c49e2.value || "").slice(_d4cdd06c49e2.selectionStart || 0, _d4cdd06c49e2.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, r = (_d4cdd06c49e2, _580d81146b11) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_d4cdd06c49e2?.tagName || "")) {
            const _804e9ea707d1 = _d4cdd06c49e2.selectionStart || 0, _8f85b73b0244 = _d4cdd06c49e2.selectionEnd || 0, _2726b92f4548 = String(_d4cdd06c49e2.value || "");
            _d4cdd06c49e2.value = _2726b92f4548.slice(0, _804e9ea707d1) + _580d81146b11 + _2726b92f4548.slice(_8f85b73b0244);
            const _5c33566a9ae5 = _804e9ea707d1 + String(_580d81146b11).length;
            return _d4cdd06c49e2.setSelectionRange(_5c33566a9ae5, _5c33566a9ae5), void _d4cdd06c49e2.dispatchEvent(new Event("input", {
              bubbles: !0
            }));
          }
          document.execCommand?.("insertText", !1, _580d81146b11);
        } catch {}
      }, n = async _d4cdd06c49e2 => {
        try {
          await (navigator.clipboard?.writeText(String(_d4cdd06c49e2 || "")));
        } catch {
          try {
            document.execCommand?.("copy");
          } catch {}
        }
      }, _d4cdd06c49e2 = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _580d81146b11 = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), c = _804e9ea707d1 => {
        try {
          _d4cdd06c49e2?.postMessage(_804e9ea707d1, "*");
        } catch {}
        try {
          _580d81146b11 && _580d81146b11 !== _d4cdd06c49e2 && _580d81146b11.postMessage(_804e9ea707d1, "*");
        } catch {}
        try {
          window.parent?.postMessage(_804e9ea707d1, "*");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_804e9ea707d1, "*");
        } catch {}
      };
      window.addEventListener("keydown", _d4cdd06c49e2 => {
        const _580d81146b11 = String(_d4cdd06c49e2.key || "").toLowerCase();
        if (_d4cdd06c49e2.altKey && !_d4cdd06c49e2.ctrlKey && !_d4cdd06c49e2.metaKey && 2 !== _d4cdd06c49e2.location && "alt" === _580d81146b11) return _d4cdd06c49e2.preventDefault(), 
        _d4cdd06c49e2.stopPropagation(), void c({
          type: "nyx:alt-prime"
        });
        if (_d4cdd06c49e2.altKey && !_d4cdd06c49e2.ctrlKey && !_d4cdd06c49e2.metaKey && 2 !== _d4cdd06c49e2.location && t(_d4cdd06c49e2.target) && /^[acxvzy]$/.test(_580d81146b11)) {
          if (_d4cdd06c49e2.preventDefault(), _d4cdd06c49e2.stopPropagation(), "a" === _580d81146b11) return void (_d4cdd06c49e2.target?.select ? _d4cdd06c49e2.target.select() : document.execCommand?.("selectAll"));
          if ("c" === _580d81146b11) return void n(e(_d4cdd06c49e2.target));
          if ("x" === _580d81146b11) {
            const _580d81146b11 = e(_d4cdd06c49e2.target);
            return n(_580d81146b11), void r(_d4cdd06c49e2.target, "");
          }
          if ("v" === _580d81146b11) return void navigator.clipboard?.readText?.().then(_580d81146b11 => r(_d4cdd06c49e2.target, _580d81146b11)).catch(() => {
            try {
              document.execCommand?.("paste");
            } catch {}
          });
          if ("z" === _580d81146b11) return void document.execCommand?.("undo");
          if ("y" === _580d81146b11) return void document.execCommand?.("redo");
        }
        return !_d4cdd06c49e2.altKey || _d4cdd06c49e2.ctrlKey || _d4cdd06c49e2.metaKey || 2 === _d4cdd06c49e2.location || !/^[1-9]$/.test(_580d81146b11) && ![ "l", "d", "t", "w", "r", "arrowleft", "arrowright", "tab" ].includes(_580d81146b11) ? void 0 : (_d4cdd06c49e2.preventDefault(), 
        _d4cdd06c49e2.stopPropagation(), void c({
          type: "nyx:alt-shortcut",
          key: _580d81146b11,
          code: _d4cdd06c49e2.code || "",
          location: _d4cdd06c49e2.location || 0,
          shiftKey: !!_d4cdd06c49e2.shiftKey
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
  }, r = _d4cdd06c49e2 => {
    if (!_d4cdd06c49e2) return !1;
    try {
      return _d4cdd06c49e2.document.open(), _d4cdd06c49e2.document.write('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>nyx://blocked67haha</title><style>html,body{margin:0;width:100%;height:100%;background:#fff;color:#111;font:28px Raleway,Arial,sans-serif}body{display:grid;place-items:center;text-align:center}main{padding:24px}</style></head><body><main>are you trying to hack me scamma???</main></body></html>'), 
      _d4cdd06c49e2.document.close(), _d4cdd06c49e2.focus?.(), !0;
    } catch {
      return !1;
    }
  }, n = () => {
    const _d4cdd06c49e2 = null;
    return {
      closed: !1,
      focus() {
        try {
          _d4cdd06c49e2?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _d4cdd06c49e2?.blur?.();
        } catch {}
      },
      close() {
        try {
          _d4cdd06c49e2?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return r(_d4cdd06c49e2), this;
        },
        write() {
          r(_d4cdd06c49e2);
        },
        writeln() {
          r(_d4cdd06c49e2);
        },
        close() {
          r(_d4cdd06c49e2);
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
          r(_d4cdd06c49e2);
        },
        toString: () => "nyx://blocked67haha"
      }
    };
  }, o = _d4cdd06c49e2 => {
    const _580d81146b11 = String(_d4cdd06c49e2 || "").trim();
    if (/^(?:blob|data):/i.test(_580d81146b11)) return !1;
    const _804e9ea707d1 = _580d81146b11.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_804e9ea707d1);
  }, i = (_d4cdd06c49e2, _580d81146b11 = "") => {
    const _804e9ea707d1 = String(_d4cdd06c49e2 || "").trim();
    if (!_804e9ea707d1 || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "nyx:download-request",
        url: _804e9ea707d1,
        filename: String(_580d81146b11 || ""),
        sourceUrl: String(location.href || "")
      }, "*"), !0;
    } catch {
      return !1;
    }
  };
  let c = (..._580d81146b11) => o(_580d81146b11[0]) && i(_580d81146b11[0]) ? null : !e() && _d4cdd06c49e2 ? _d4cdd06c49e2(..._580d81146b11) : n();
  try {
    "function" == typeof _d4cdd06c49e2 && "function" == typeof Proxy && (c = new Proxy(_d4cdd06c49e2, {
      apply: (_d4cdd06c49e2, _580d81146b11, _804e9ea707d1) => o(_804e9ea707d1[0]) && i(_804e9ea707d1[0]) ? null : e() ? n() : Reflect.apply(_d4cdd06c49e2, _580d81146b11, _804e9ea707d1),
      construct(_d4cdd06c49e2, _580d81146b11, _804e9ea707d1) {
        if (!e()) try {
          return Reflect.construct(_d4cdd06c49e2, _580d81146b11, _804e9ea707d1);
        } catch {
          return Reflect.apply(_d4cdd06c49e2, window, _580d81146b11);
        }
        return n();
      },
      get: (_d4cdd06c49e2, _580d81146b11, _804e9ea707d1) => "__nyxPopupGuard" === _580d81146b11 || ("toString" === _580d81146b11 ? () => "function open() { [native code] }" : Reflect.get(_d4cdd06c49e2, _580d81146b11, _804e9ea707d1))
    }));
  } catch {}
  const a = _d4cdd06c49e2 => {
    const _580d81146b11 = String(_d4cdd06c49e2 || "").toLowerCase();
    return _580d81146b11 && ![ "_self", "_parent", "_top" ].includes(_580d81146b11);
  }, s = _d4cdd06c49e2 => !!_d4cdd06c49e2 && (!!_d4cdd06c49e2.hasAttribute("download") || o(_d4cdd06c49e2.href || _d4cdd06c49e2.getAttribute("href") || ""));
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
    const _d4cdd06c49e2 = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!s(this) || !i(this.href || this.getAttribute("href"), this.getAttribute("download") || "")) {
        if (!e() || !a(this.target)) return _d4cdd06c49e2.call(this);
        n();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("click", _d4cdd06c49e2 => {
    const _580d81146b11 = _d4cdd06c49e2.target?.closest?.("a[href]");
    if (_580d81146b11) return s(_580d81146b11) && i(_580d81146b11.href || _580d81146b11.getAttribute("href"), _580d81146b11.getAttribute("download") || "") ? (_d4cdd06c49e2.preventDefault(), 
    void _d4cdd06c49e2.stopImmediatePropagation()) : void (e() && a(_580d81146b11.getAttribute("target")) && (_d4cdd06c49e2.preventDefault(), 
    _d4cdd06c49e2.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("auxclick", _d4cdd06c49e2 => {
    const _580d81146b11 = _d4cdd06c49e2.target?.closest?.("a[href]");
    if (_580d81146b11) return s(_580d81146b11) && i(_580d81146b11.href || _580d81146b11.getAttribute("href"), _580d81146b11.getAttribute("download") || "") ? (_d4cdd06c49e2.preventDefault(), 
    void _d4cdd06c49e2.stopImmediatePropagation()) : void (e() && a(_580d81146b11.getAttribute("target")) && (_d4cdd06c49e2.preventDefault(), 
    _d4cdd06c49e2.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("submit", _d4cdd06c49e2 => {
    if (!e()) return;
    const _580d81146b11 = _d4cdd06c49e2.target;
    _580d81146b11 && "FORM" === String(_580d81146b11.tagName || "").toUpperCase() && a(_580d81146b11.getAttribute("target")) && (_d4cdd06c49e2.preventDefault(), 
    _d4cdd06c49e2.stopImmediatePropagation(), n());
  }, !0));
  const u = _d4cdd06c49e2 => {
    const _580d81146b11 = window[_d4cdd06c49e2];
    if ("function" == typeof _580d81146b11 && !_580d81146b11.__nyxWrapped) try {
      Object.setPrototypeOf(r, _580d81146b11), r.prototype = _580d81146b11.prototype, 
      Object.defineProperty(r, "__nyxWrapped", {
        value: !0
      }), window[_d4cdd06c49e2] = r;
    } catch {}
    function r(_d4cdd06c49e2, _804e9ea707d1, _8f85b73b0244) {
      let _2726b92f4548 = Number(_d4cdd06c49e2), _5c33566a9ae5 = Number(_804e9ea707d1);
      return (!Number.isFinite(_2726b92f4548) || _2726b92f4548 < 0) && (_2726b92f4548 = 0), 
      (!Number.isFinite(_5c33566a9ae5) || _5c33566a9ae5 <= _2726b92f4548) && (_5c33566a9ae5 = _2726b92f4548 + .001), 
      Reflect.construct(_580d81146b11, [ _2726b92f4548, _5c33566a9ae5, null == _8f85b73b0244 ? "" : String(_8f85b73b0244) ], new.target || r);
    }
  };
  u("VTTCue"), u("TextTrackCue");
})();
