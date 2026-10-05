(() => {
  if ("undefined" == typeof window || window.__nyxScramjetGuards) return;
  window.__nyxScramjetGuards = !0;
  const _f8716325ff08 = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "trustedTypes", {
      configurable: !0,
      value: {
        createPolicy: (_f8716325ff08, _8cce565faedd = {}) => ({
          createHTML: _f8716325ff08 => "function" == typeof _8cce565faedd.createHTML ? _8cce565faedd.createHTML(_f8716325ff08) : _f8716325ff08,
          createScript: _f8716325ff08 => "function" == typeof _8cce565faedd.createScript ? _8cce565faedd.createScript(_f8716325ff08) : _f8716325ff08,
          createScriptURL: _f8716325ff08 => "function" == typeof _8cce565faedd.createScriptURL ? _8cce565faedd.createScriptURL(_f8716325ff08) : _f8716325ff08
        })
      }
    });
  } catch {}
  try {
    const _f8716325ff08 = Object.getOwnPropertyDescriptor(Document.prototype, "currentScript"), _8cce565faedd = document.createElement("script");
    _8cce565faedd.setAttribute("nonce", ""), Object.defineProperty(Document.prototype, "currentScript", {
      configurable: !0,
      get() {
        let _984750613393 = null;
        try {
          _984750613393 = _f8716325ff08?.get?.call(this) || null;
        } catch {}
        return _984750613393 || this.querySelector?.("script[src],script") || _8cce565faedd;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const t = _f8716325ff08 => !(!_f8716325ff08 || !_f8716325ff08.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_f8716325ff08.tagName || "")), e = _f8716325ff08 => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_f8716325ff08?.tagName || "") ? String(_f8716325ff08.value || "").slice(_f8716325ff08.selectionStart || 0, _f8716325ff08.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, r = (_f8716325ff08, _8cce565faedd) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_f8716325ff08?.tagName || "")) {
            const _984750613393 = _f8716325ff08.selectionStart || 0, _410a9a204ad2 = _f8716325ff08.selectionEnd || 0, _04a277025804 = String(_f8716325ff08.value || "");
            _f8716325ff08.value = _04a277025804.slice(0, _984750613393) + _8cce565faedd + _04a277025804.slice(_410a9a204ad2);
            const _ee48527fadde = _984750613393 + String(_8cce565faedd).length;
            return _f8716325ff08.setSelectionRange(_ee48527fadde, _ee48527fadde), void _f8716325ff08.dispatchEvent(new Event("input", {
              bubbles: !0
            }));
          }
          document.execCommand?.("insertText", !1, _8cce565faedd);
        } catch {}
      }, n = async _f8716325ff08 => {
        try {
          await (navigator.clipboard?.writeText(String(_f8716325ff08 || "")));
        } catch {
          try {
            document.execCommand?.("copy");
          } catch {}
        }
      }, _f8716325ff08 = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _8cce565faedd = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), c = _984750613393 => {
        try {
          _f8716325ff08?.postMessage(_984750613393, "*");
        } catch {}
        try {
          _8cce565faedd && _8cce565faedd !== _f8716325ff08 && _8cce565faedd.postMessage(_984750613393, "*");
        } catch {}
        try {
          window.parent?.postMessage(_984750613393, "*");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_984750613393, "*");
        } catch {}
      };
      window.addEventListener("keydown", _f8716325ff08 => {
        const _8cce565faedd = String(_f8716325ff08.key || "").toLowerCase();
        if (_f8716325ff08.altKey && !_f8716325ff08.ctrlKey && !_f8716325ff08.metaKey && 2 !== _f8716325ff08.location && "alt" === _8cce565faedd) return _f8716325ff08.preventDefault(), 
        _f8716325ff08.stopPropagation(), void c({
          type: "nyx:alt-prime"
        });
        if (_f8716325ff08.altKey && !_f8716325ff08.ctrlKey && !_f8716325ff08.metaKey && 2 !== _f8716325ff08.location && t(_f8716325ff08.target) && /^[acxvzy]$/.test(_8cce565faedd)) {
          if (_f8716325ff08.preventDefault(), _f8716325ff08.stopPropagation(), "a" === _8cce565faedd) return void (_f8716325ff08.target?.select ? _f8716325ff08.target.select() : document.execCommand?.("selectAll"));
          if ("c" === _8cce565faedd) return void n(e(_f8716325ff08.target));
          if ("x" === _8cce565faedd) {
            const _8cce565faedd = e(_f8716325ff08.target);
            return n(_8cce565faedd), void r(_f8716325ff08.target, "");
          }
          if ("v" === _8cce565faedd) return void navigator.clipboard?.readText?.().then(_8cce565faedd => r(_f8716325ff08.target, _8cce565faedd)).catch(() => {
            try {
              document.execCommand?.("paste");
            } catch {}
          });
          if ("z" === _8cce565faedd) return void document.execCommand?.("undo");
          if ("y" === _8cce565faedd) return void document.execCommand?.("redo");
        }
        return !_f8716325ff08.altKey || _f8716325ff08.ctrlKey || _f8716325ff08.metaKey || 2 === _f8716325ff08.location || !/^[1-9]$/.test(_8cce565faedd) && ![ "l", "d", "t", "w", "r", "arrowleft", "arrowright", "tab" ].includes(_8cce565faedd) ? void 0 : (_f8716325ff08.preventDefault(), 
        _f8716325ff08.stopPropagation(), void c({
          type: "nyx:alt-shortcut",
          key: _8cce565faedd,
          code: _f8716325ff08.code || "",
          location: _f8716325ff08.location || 0,
          shiftKey: !!_f8716325ff08.shiftKey
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
  }, r = _f8716325ff08 => {
    if (!_f8716325ff08) return !1;
    try {
      return _f8716325ff08.document.open(), _f8716325ff08.document.write('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>nyx://blocked67haha</title><style>html,body{margin:0;width:100%;height:100%;background:#fff;color:#111;font:28px Raleway,Arial,sans-serif}body{display:grid;place-items:center;text-align:center}main{padding:24px}</style></head><body><main>are you trying to hack me scamma???</main></body></html>'), 
      _f8716325ff08.document.close(), _f8716325ff08.focus?.(), !0;
    } catch {
      return !1;
    }
  }, n = () => {
    const _f8716325ff08 = null;
    return {
      closed: !1,
      focus() {
        try {
          _f8716325ff08?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _f8716325ff08?.blur?.();
        } catch {}
      },
      close() {
        try {
          _f8716325ff08?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return r(_f8716325ff08), this;
        },
        write() {
          r(_f8716325ff08);
        },
        writeln() {
          r(_f8716325ff08);
        },
        close() {
          r(_f8716325ff08);
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
          r(_f8716325ff08);
        },
        toString: () => "nyx://blocked67haha"
      }
    };
  }, o = _f8716325ff08 => {
    const _8cce565faedd = String(_f8716325ff08 || "").trim();
    if (/^(?:blob|data):/i.test(_8cce565faedd)) return !1;
    const _984750613393 = _8cce565faedd.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_984750613393);
  }, i = (_f8716325ff08, _8cce565faedd = "") => {
    const _984750613393 = String(_f8716325ff08 || "").trim();
    if (!_984750613393 || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "nyx:download-request",
        url: _984750613393,
        filename: String(_8cce565faedd || ""),
        sourceUrl: String(location.href || "")
      }, "*"), !0;
    } catch {
      return !1;
    }
  };
  let c = (..._8cce565faedd) => o(_8cce565faedd[0]) && i(_8cce565faedd[0]) ? null : !e() && _f8716325ff08 ? _f8716325ff08(..._8cce565faedd) : n();
  try {
    "function" == typeof _f8716325ff08 && "function" == typeof Proxy && (c = new Proxy(_f8716325ff08, {
      apply: (_f8716325ff08, _8cce565faedd, _984750613393) => o(_984750613393[0]) && i(_984750613393[0]) ? null : e() ? n() : Reflect.apply(_f8716325ff08, _8cce565faedd, _984750613393),
      construct(_f8716325ff08, _8cce565faedd, _984750613393) {
        if (!e()) try {
          return Reflect.construct(_f8716325ff08, _8cce565faedd, _984750613393);
        } catch {
          return Reflect.apply(_f8716325ff08, window, _8cce565faedd);
        }
        return n();
      },
      get: (_f8716325ff08, _8cce565faedd, _984750613393) => "__nyxPopupGuard" === _8cce565faedd || ("toString" === _8cce565faedd ? () => "function open() { [native code] }" : Reflect.get(_f8716325ff08, _8cce565faedd, _984750613393))
    }));
  } catch {}
  const a = _f8716325ff08 => {
    const _8cce565faedd = String(_f8716325ff08 || "").toLowerCase();
    return _8cce565faedd && ![ "_self", "_parent", "_top" ].includes(_8cce565faedd);
  }, s = _f8716325ff08 => !!_f8716325ff08 && (!!_f8716325ff08.hasAttribute("download") || o(_f8716325ff08.href || _f8716325ff08.getAttribute("href") || ""));
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
    const _f8716325ff08 = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!s(this) || !i(this.href || this.getAttribute("href"), this.getAttribute("download") || "")) {
        if (!e() || !a(this.target)) return _f8716325ff08.call(this);
        n();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("click", _f8716325ff08 => {
    const _8cce565faedd = _f8716325ff08.target?.closest?.("a[href]");
    if (_8cce565faedd) return s(_8cce565faedd) && i(_8cce565faedd.href || _8cce565faedd.getAttribute("href"), _8cce565faedd.getAttribute("download") || "") ? (_f8716325ff08.preventDefault(), 
    void _f8716325ff08.stopImmediatePropagation()) : void (e() && a(_8cce565faedd.getAttribute("target")) && (_f8716325ff08.preventDefault(), 
    _f8716325ff08.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("auxclick", _f8716325ff08 => {
    const _8cce565faedd = _f8716325ff08.target?.closest?.("a[href]");
    if (_8cce565faedd) return s(_8cce565faedd) && i(_8cce565faedd.href || _8cce565faedd.getAttribute("href"), _8cce565faedd.getAttribute("download") || "") ? (_f8716325ff08.preventDefault(), 
    void _f8716325ff08.stopImmediatePropagation()) : void (e() && a(_8cce565faedd.getAttribute("target")) && (_f8716325ff08.preventDefault(), 
    _f8716325ff08.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("submit", _f8716325ff08 => {
    if (!e()) return;
    const _8cce565faedd = _f8716325ff08.target;
    _8cce565faedd && "FORM" === String(_8cce565faedd.tagName || "").toUpperCase() && a(_8cce565faedd.getAttribute("target")) && (_f8716325ff08.preventDefault(), 
    _f8716325ff08.stopImmediatePropagation(), n());
  }, !0));
  const u = _f8716325ff08 => {
    const _8cce565faedd = window[_f8716325ff08];
    if ("function" == typeof _8cce565faedd && !_8cce565faedd.__nyxWrapped) try {
      Object.setPrototypeOf(r, _8cce565faedd), r.prototype = _8cce565faedd.prototype, 
      Object.defineProperty(r, "__nyxWrapped", {
        value: !0
      }), window[_f8716325ff08] = r;
    } catch {}
    function r(_f8716325ff08, _984750613393, _410a9a204ad2) {
      let _04a277025804 = Number(_f8716325ff08), _ee48527fadde = Number(_984750613393);
      return (!Number.isFinite(_04a277025804) || _04a277025804 < 0) && (_04a277025804 = 0), 
      (!Number.isFinite(_ee48527fadde) || _ee48527fadde <= _04a277025804) && (_ee48527fadde = _04a277025804 + .001), 
      Reflect.construct(_8cce565faedd, [ _04a277025804, _ee48527fadde, null == _410a9a204ad2 ? "" : String(_410a9a204ad2) ], new.target || r);
    }
  };
  u("VTTCue"), u("TextTrackCue");
})();
