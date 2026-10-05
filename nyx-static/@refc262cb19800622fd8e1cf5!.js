(() => {
  if ("undefined" == typeof window || window.__nyxStudyJetGuards) return;
  window.__nyxStudyJetGuards = !0;
  const _838c09a44874 = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "trustedTypes", {
      configurable: !0,
      value: {
        createPolicy: (_838c09a44874, _067904ea2d96 = {}) => ({
          createHTML: _838c09a44874 => "function" == typeof _067904ea2d96.createHTML ? _067904ea2d96.createHTML(_838c09a44874) : _838c09a44874,
          createScript: _838c09a44874 => "function" == typeof _067904ea2d96.createScript ? _067904ea2d96.createScript(_838c09a44874) : _838c09a44874,
          createScriptURL: _838c09a44874 => "function" == typeof _067904ea2d96.createScriptURL ? _067904ea2d96.createScriptURL(_838c09a44874) : _838c09a44874
        })
      }
    });
  } catch {}
  try {
    const _838c09a44874 = Object.getOwnPropertyDescriptor(Document.prototype, "currentScript"), _067904ea2d96 = document.createElement("script");
    _067904ea2d96.setAttribute("nonce", ""), Object.defineProperty(Document.prototype, "currentScript", {
      configurable: !0,
      get() {
        let _74d3a0f273a6 = null;
        try {
          _74d3a0f273a6 = _838c09a44874?.get?.call(this) || null;
        } catch {}
        return _74d3a0f273a6 || this.querySelector?.("script[src],script") || _067904ea2d96;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const t = _838c09a44874 => !(!_838c09a44874 || !_838c09a44874.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_838c09a44874.tagName || "")), e = _838c09a44874 => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_838c09a44874?.tagName || "") ? String(_838c09a44874.value || "").slice(_838c09a44874.selectionStart || 0, _838c09a44874.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, r = (_838c09a44874, _067904ea2d96) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_838c09a44874?.tagName || "")) {
            const _74d3a0f273a6 = _838c09a44874.selectionStart || 0, _1025c9ec44bf = _838c09a44874.selectionEnd || 0, _67f1e96961c1 = String(_838c09a44874.value || "");
            _838c09a44874.value = _67f1e96961c1.slice(0, _74d3a0f273a6) + _067904ea2d96 + _67f1e96961c1.slice(_1025c9ec44bf);
            const _9e2f6a32e714 = _74d3a0f273a6 + String(_067904ea2d96).length;
            return _838c09a44874.setSelectionRange(_9e2f6a32e714, _9e2f6a32e714), void _838c09a44874.dispatchEvent(new Event("input", {
              bubbles: !0
            }));
          }
          document.execCommand?.("insertText", !1, _067904ea2d96);
        } catch {}
      }, n = async _838c09a44874 => {
        try {
          await (navigator.clipboard?.writeText(String(_838c09a44874 || "")));
        } catch {
          try {
            document.execCommand?.("copy");
          } catch {}
        }
      }, _838c09a44874 = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _067904ea2d96 = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), c = _74d3a0f273a6 => {
        try {
          _838c09a44874?.postMessage(_74d3a0f273a6, "*");
        } catch {}
        try {
          _067904ea2d96 && _067904ea2d96 !== _838c09a44874 && _067904ea2d96.postMessage(_74d3a0f273a6, "*");
        } catch {}
        try {
          window.parent?.postMessage(_74d3a0f273a6, "*");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_74d3a0f273a6, "*");
        } catch {}
      };
      window.addEventListener("keydown", _838c09a44874 => {
        const _067904ea2d96 = String(_838c09a44874.key || "").toLowerCase();
        if (_838c09a44874.altKey && !_838c09a44874.ctrlKey && !_838c09a44874.metaKey && 2 !== _838c09a44874.location && "alt" === _067904ea2d96) return _838c09a44874.preventDefault(), 
        _838c09a44874.stopPropagation(), void c({
          type: "nyx:alt-prime"
        });
        if (_838c09a44874.altKey && !_838c09a44874.ctrlKey && !_838c09a44874.metaKey && 2 !== _838c09a44874.location && t(_838c09a44874.target) && /^[acxvzy]$/.test(_067904ea2d96)) {
          if (_838c09a44874.preventDefault(), _838c09a44874.stopPropagation(), "a" === _067904ea2d96) return void (_838c09a44874.target?.select ? _838c09a44874.target.select() : document.execCommand?.("selectAll"));
          if ("c" === _067904ea2d96) return void n(e(_838c09a44874.target));
          if ("x" === _067904ea2d96) {
            const _067904ea2d96 = e(_838c09a44874.target);
            return n(_067904ea2d96), void r(_838c09a44874.target, "");
          }
          if ("v" === _067904ea2d96) return void navigator.clipboard?.readText?.().then(_067904ea2d96 => r(_838c09a44874.target, _067904ea2d96)).catch(() => {
            try {
              document.execCommand?.("paste");
            } catch {}
          });
          if ("z" === _067904ea2d96) return void document.execCommand?.("undo");
          if ("y" === _067904ea2d96) return void document.execCommand?.("redo");
        }
        return !_838c09a44874.altKey || _838c09a44874.ctrlKey || _838c09a44874.metaKey || 2 === _838c09a44874.location || !/^[1-9]$/.test(_067904ea2d96) && ![ "l", "d", "t", "w", "r", "arrowleft", "arrowright", "tab" ].includes(_067904ea2d96) ? void 0 : (_838c09a44874.preventDefault(), 
        _838c09a44874.stopPropagation(), void c({
          type: "nyx:alt-shortcut",
          key: _067904ea2d96,
          code: _838c09a44874.code || "",
          location: _838c09a44874.location || 0,
          shiftKey: !!_838c09a44874.shiftKey
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
  }, r = _838c09a44874 => {
    if (!_838c09a44874) return !1;
    try {
      return _838c09a44874.document.open(), _838c09a44874.document.write('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>nyx://blocked67haha</title><style>html,body{margin:0;width:100%;height:100%;background:#fff;color:#111;font:28px Raleway,Arial,sans-serif}body{display:grid;place-items:center;text-align:center}main{padding:24px}</style></head><body><main>are you trying to hack me scamma???</main></body></html>'), 
      _838c09a44874.document.close(), _838c09a44874.focus?.(), !0;
    } catch {
      return !1;
    }
  }, n = () => {
    const _838c09a44874 = null;
    return {
      closed: !1,
      focus() {
        try {
          _838c09a44874?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _838c09a44874?.blur?.();
        } catch {}
      },
      close() {
        try {
          _838c09a44874?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return r(_838c09a44874), this;
        },
        write() {
          r(_838c09a44874);
        },
        writeln() {
          r(_838c09a44874);
        },
        close() {
          r(_838c09a44874);
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
          r(_838c09a44874);
        },
        toString: () => "nyx://blocked67haha"
      }
    };
  }, o = _838c09a44874 => {
    const _067904ea2d96 = String(_838c09a44874 || "").trim();
    if (/^(?:blob|data):/i.test(_067904ea2d96)) return !1;
    const _74d3a0f273a6 = _067904ea2d96.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_74d3a0f273a6);
  }, i = (_838c09a44874, _067904ea2d96 = "") => {
    const _74d3a0f273a6 = String(_838c09a44874 || "").trim();
    if (!_74d3a0f273a6 || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "nyx:download-request",
        url: _74d3a0f273a6,
        filename: String(_067904ea2d96 || ""),
        sourceUrl: String(location.href || "")
      }, "*"), !0;
    } catch {
      return !1;
    }
  };
  let c = (..._067904ea2d96) => o(_067904ea2d96[0]) && i(_067904ea2d96[0]) ? null : !e() && _838c09a44874 ? _838c09a44874(..._067904ea2d96) : n();
  try {
    "function" == typeof _838c09a44874 && "function" == typeof Proxy && (c = new Proxy(_838c09a44874, {
      apply: (_838c09a44874, _067904ea2d96, _74d3a0f273a6) => o(_74d3a0f273a6[0]) && i(_74d3a0f273a6[0]) ? null : e() ? n() : Reflect.apply(_838c09a44874, _067904ea2d96, _74d3a0f273a6),
      construct(_838c09a44874, _067904ea2d96, _74d3a0f273a6) {
        if (!e()) try {
          return Reflect.construct(_838c09a44874, _067904ea2d96, _74d3a0f273a6);
        } catch {
          return Reflect.apply(_838c09a44874, window, _067904ea2d96);
        }
        return n();
      },
      get: (_838c09a44874, _067904ea2d96, _74d3a0f273a6) => "__nyxPopupGuard" === _067904ea2d96 || ("toString" === _067904ea2d96 ? () => "function open() { [native code] }" : Reflect.get(_838c09a44874, _067904ea2d96, _74d3a0f273a6))
    }));
  } catch {}
  const a = _838c09a44874 => {
    const _067904ea2d96 = String(_838c09a44874 || "").toLowerCase();
    return _067904ea2d96 && ![ "_self", "_parent", "_top" ].includes(_067904ea2d96);
  }, s = _838c09a44874 => !!_838c09a44874 && (!!_838c09a44874.hasAttribute("download") || o(_838c09a44874.href || _838c09a44874.getAttribute("href") || ""));
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
    const _838c09a44874 = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!s(this) || !i(this.href || this.getAttribute("href"), this.getAttribute("download") || "")) {
        if (!e() || !a(this.target)) return _838c09a44874.call(this);
        n();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("click", _838c09a44874 => {
    const _067904ea2d96 = _838c09a44874.target?.closest?.("a[href]");
    if (_067904ea2d96) return s(_067904ea2d96) && i(_067904ea2d96.href || _067904ea2d96.getAttribute("href"), _067904ea2d96.getAttribute("download") || "") ? (_838c09a44874.preventDefault(), 
    void _838c09a44874.stopImmediatePropagation()) : void (e() && a(_067904ea2d96.getAttribute("target")) && (_838c09a44874.preventDefault(), 
    _838c09a44874.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("auxclick", _838c09a44874 => {
    const _067904ea2d96 = _838c09a44874.target?.closest?.("a[href]");
    if (_067904ea2d96) return s(_067904ea2d96) && i(_067904ea2d96.href || _067904ea2d96.getAttribute("href"), _067904ea2d96.getAttribute("download") || "") ? (_838c09a44874.preventDefault(), 
    void _838c09a44874.stopImmediatePropagation()) : void (e() && a(_067904ea2d96.getAttribute("target")) && (_838c09a44874.preventDefault(), 
    _838c09a44874.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("submit", _838c09a44874 => {
    if (!e()) return;
    const _067904ea2d96 = _838c09a44874.target;
    _067904ea2d96 && "FORM" === String(_067904ea2d96.tagName || "").toUpperCase() && a(_067904ea2d96.getAttribute("target")) && (_838c09a44874.preventDefault(), 
    _838c09a44874.stopImmediatePropagation(), n());
  }, !0));
  const u = _838c09a44874 => {
    const _067904ea2d96 = window[_838c09a44874];
    if ("function" == typeof _067904ea2d96 && !_067904ea2d96.__nyxWrapped) try {
      Object.setPrototypeOf(r, _067904ea2d96), r.prototype = _067904ea2d96.prototype, 
      Object.defineProperty(r, "__nyxWrapped", {
        value: !0
      }), window[_838c09a44874] = r;
    } catch {}
    function r(_838c09a44874, _74d3a0f273a6, _1025c9ec44bf) {
      let _67f1e96961c1 = Number(_838c09a44874), _9e2f6a32e714 = Number(_74d3a0f273a6);
      return (!Number.isFinite(_67f1e96961c1) || _67f1e96961c1 < 0) && (_67f1e96961c1 = 0), 
      (!Number.isFinite(_9e2f6a32e714) || _9e2f6a32e714 <= _67f1e96961c1) && (_9e2f6a32e714 = _67f1e96961c1 + .001), 
      Reflect.construct(_067904ea2d96, [ _67f1e96961c1, _9e2f6a32e714, null == _1025c9ec44bf ? "" : String(_1025c9ec44bf) ], new.target || r);
    }
  };
  u("VTTCue"), u("TextTrackCue");
})();
