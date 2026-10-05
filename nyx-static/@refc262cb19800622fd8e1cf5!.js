(() => {
  if ("undefined" == typeof window || window.__nyxStudyJetGuards) return;
  window.__nyxStudyJetGuards = !0;
  const _64cb3b2eb721 = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "trustedTypes", {
      configurable: !0,
      value: {
        createPolicy: (_64cb3b2eb721, _d9c87827e65c = {}) => ({
          createHTML: _64cb3b2eb721 => "function" == typeof _d9c87827e65c.createHTML ? _d9c87827e65c.createHTML(_64cb3b2eb721) : _64cb3b2eb721,
          createScript: _64cb3b2eb721 => "function" == typeof _d9c87827e65c.createScript ? _d9c87827e65c.createScript(_64cb3b2eb721) : _64cb3b2eb721,
          createScriptURL: _64cb3b2eb721 => "function" == typeof _d9c87827e65c.createScriptURL ? _d9c87827e65c.createScriptURL(_64cb3b2eb721) : _64cb3b2eb721
        })
      }
    });
  } catch {}
  try {
    const _64cb3b2eb721 = Object.getOwnPropertyDescriptor(Document.prototype, "currentScript"), _d9c87827e65c = document.createElement("script");
    _d9c87827e65c.setAttribute("nonce", ""), Object.defineProperty(Document.prototype, "currentScript", {
      configurable: !0,
      get() {
        let _5ce122f95e05 = null;
        try {
          _5ce122f95e05 = _64cb3b2eb721?.get?.call(this) || null;
        } catch {}
        return _5ce122f95e05 || this.querySelector?.("script[src],script") || _d9c87827e65c;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const t = _64cb3b2eb721 => !(!_64cb3b2eb721 || !_64cb3b2eb721.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_64cb3b2eb721.tagName || "")), e = _64cb3b2eb721 => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_64cb3b2eb721?.tagName || "") ? String(_64cb3b2eb721.value || "").slice(_64cb3b2eb721.selectionStart || 0, _64cb3b2eb721.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, r = (_64cb3b2eb721, _d9c87827e65c) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_64cb3b2eb721?.tagName || "")) {
            const _5ce122f95e05 = _64cb3b2eb721.selectionStart || 0, _126ac622a6e6 = _64cb3b2eb721.selectionEnd || 0, _d9f777f14f5c = String(_64cb3b2eb721.value || "");
            _64cb3b2eb721.value = _d9f777f14f5c.slice(0, _5ce122f95e05) + _d9c87827e65c + _d9f777f14f5c.slice(_126ac622a6e6);
            const _ac530a7d89c8 = _5ce122f95e05 + String(_d9c87827e65c).length;
            return _64cb3b2eb721.setSelectionRange(_ac530a7d89c8, _ac530a7d89c8), void _64cb3b2eb721.dispatchEvent(new Event("input", {
              bubbles: !0
            }));
          }
          document.execCommand?.("insertText", !1, _d9c87827e65c);
        } catch {}
      }, n = async _64cb3b2eb721 => {
        try {
          await (navigator.clipboard?.writeText(String(_64cb3b2eb721 || "")));
        } catch {
          try {
            document.execCommand?.("copy");
          } catch {}
        }
      }, _64cb3b2eb721 = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _d9c87827e65c = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), c = _5ce122f95e05 => {
        try {
          _64cb3b2eb721?.postMessage(_5ce122f95e05, "*");
        } catch {}
        try {
          _d9c87827e65c && _d9c87827e65c !== _64cb3b2eb721 && _d9c87827e65c.postMessage(_5ce122f95e05, "*");
        } catch {}
        try {
          window.parent?.postMessage(_5ce122f95e05, "*");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_5ce122f95e05, "*");
        } catch {}
      };
      window.addEventListener("keydown", _64cb3b2eb721 => {
        const _d9c87827e65c = String(_64cb3b2eb721.key || "").toLowerCase();
        if (_64cb3b2eb721.altKey && !_64cb3b2eb721.ctrlKey && !_64cb3b2eb721.metaKey && 2 !== _64cb3b2eb721.location && "alt" === _d9c87827e65c) return _64cb3b2eb721.preventDefault(), 
        _64cb3b2eb721.stopPropagation(), void c({
          type: "nyx:alt-prime"
        });
        if (_64cb3b2eb721.altKey && !_64cb3b2eb721.ctrlKey && !_64cb3b2eb721.metaKey && 2 !== _64cb3b2eb721.location && t(_64cb3b2eb721.target) && /^[acxvzy]$/.test(_d9c87827e65c)) {
          if (_64cb3b2eb721.preventDefault(), _64cb3b2eb721.stopPropagation(), "a" === _d9c87827e65c) return void (_64cb3b2eb721.target?.select ? _64cb3b2eb721.target.select() : document.execCommand?.("selectAll"));
          if ("c" === _d9c87827e65c) return void n(e(_64cb3b2eb721.target));
          if ("x" === _d9c87827e65c) {
            const _d9c87827e65c = e(_64cb3b2eb721.target);
            return n(_d9c87827e65c), void r(_64cb3b2eb721.target, "");
          }
          if ("v" === _d9c87827e65c) return void navigator.clipboard?.readText?.().then(_d9c87827e65c => r(_64cb3b2eb721.target, _d9c87827e65c)).catch(() => {
            try {
              document.execCommand?.("paste");
            } catch {}
          });
          if ("z" === _d9c87827e65c) return void document.execCommand?.("undo");
          if ("y" === _d9c87827e65c) return void document.execCommand?.("redo");
        }
        return !_64cb3b2eb721.altKey || _64cb3b2eb721.ctrlKey || _64cb3b2eb721.metaKey || 2 === _64cb3b2eb721.location || !/^[1-9]$/.test(_d9c87827e65c) && ![ "l", "d", "t", "w", "r", "arrowleft", "arrowright", "tab" ].includes(_d9c87827e65c) ? void 0 : (_64cb3b2eb721.preventDefault(), 
        _64cb3b2eb721.stopPropagation(), void c({
          type: "nyx:alt-shortcut",
          key: _d9c87827e65c,
          code: _64cb3b2eb721.code || "",
          location: _64cb3b2eb721.location || 0,
          shiftKey: !!_64cb3b2eb721.shiftKey
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
  }, r = _64cb3b2eb721 => {
    if (!_64cb3b2eb721) return !1;
    try {
      return _64cb3b2eb721.document.open(), _64cb3b2eb721.document.write('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>nyx://blocked67haha</title><style>html,body{margin:0;width:100%;height:100%;background:#fff;color:#111;font:28px Raleway,Arial,sans-serif}body{display:grid;place-items:center;text-align:center}main{padding:24px}</style></head><body><main>are you trying to hack me scamma???</main></body></html>'), 
      _64cb3b2eb721.document.close(), _64cb3b2eb721.focus?.(), !0;
    } catch {
      return !1;
    }
  }, n = () => {
    const _64cb3b2eb721 = null;
    return {
      closed: !1,
      focus() {
        try {
          _64cb3b2eb721?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _64cb3b2eb721?.blur?.();
        } catch {}
      },
      close() {
        try {
          _64cb3b2eb721?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return r(_64cb3b2eb721), this;
        },
        write() {
          r(_64cb3b2eb721);
        },
        writeln() {
          r(_64cb3b2eb721);
        },
        close() {
          r(_64cb3b2eb721);
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
          r(_64cb3b2eb721);
        },
        toString: () => "nyx://blocked67haha"
      }
    };
  }, o = _64cb3b2eb721 => {
    const _d9c87827e65c = String(_64cb3b2eb721 || "").trim();
    if (/^(?:blob|data):/i.test(_d9c87827e65c)) return !1;
    const _5ce122f95e05 = _d9c87827e65c.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_5ce122f95e05);
  }, i = (_64cb3b2eb721, _d9c87827e65c = "") => {
    const _5ce122f95e05 = String(_64cb3b2eb721 || "").trim();
    if (!_5ce122f95e05 || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "nyx:download-request",
        url: _5ce122f95e05,
        filename: String(_d9c87827e65c || ""),
        sourceUrl: String(location.href || "")
      }, "*"), !0;
    } catch {
      return !1;
    }
  };
  let c = (..._d9c87827e65c) => o(_d9c87827e65c[0]) && i(_d9c87827e65c[0]) ? null : !e() && _64cb3b2eb721 ? _64cb3b2eb721(..._d9c87827e65c) : n();
  try {
    "function" == typeof _64cb3b2eb721 && "function" == typeof Proxy && (c = new Proxy(_64cb3b2eb721, {
      apply: (_64cb3b2eb721, _d9c87827e65c, _5ce122f95e05) => o(_5ce122f95e05[0]) && i(_5ce122f95e05[0]) ? null : e() ? n() : Reflect.apply(_64cb3b2eb721, _d9c87827e65c, _5ce122f95e05),
      construct(_64cb3b2eb721, _d9c87827e65c, _5ce122f95e05) {
        if (!e()) try {
          return Reflect.construct(_64cb3b2eb721, _d9c87827e65c, _5ce122f95e05);
        } catch {
          return Reflect.apply(_64cb3b2eb721, window, _d9c87827e65c);
        }
        return n();
      },
      get: (_64cb3b2eb721, _d9c87827e65c, _5ce122f95e05) => "__nyxPopupGuard" === _d9c87827e65c || ("toString" === _d9c87827e65c ? () => "function open() { [native code] }" : Reflect.get(_64cb3b2eb721, _d9c87827e65c, _5ce122f95e05))
    }));
  } catch {}
  const a = _64cb3b2eb721 => {
    const _d9c87827e65c = String(_64cb3b2eb721 || "").toLowerCase();
    return _d9c87827e65c && ![ "_self", "_parent", "_top" ].includes(_d9c87827e65c);
  }, s = _64cb3b2eb721 => !!_64cb3b2eb721 && (!!_64cb3b2eb721.hasAttribute("download") || o(_64cb3b2eb721.href || _64cb3b2eb721.getAttribute("href") || ""));
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
    const _64cb3b2eb721 = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!s(this) || !i(this.href || this.getAttribute("href"), this.getAttribute("download") || "")) {
        if (!e() || !a(this.target)) return _64cb3b2eb721.call(this);
        n();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("click", _64cb3b2eb721 => {
    const _d9c87827e65c = _64cb3b2eb721.target?.closest?.("a[href]");
    if (_d9c87827e65c) return s(_d9c87827e65c) && i(_d9c87827e65c.href || _d9c87827e65c.getAttribute("href"), _d9c87827e65c.getAttribute("download") || "") ? (_64cb3b2eb721.preventDefault(), 
    void _64cb3b2eb721.stopImmediatePropagation()) : void (e() && a(_d9c87827e65c.getAttribute("target")) && (_64cb3b2eb721.preventDefault(), 
    _64cb3b2eb721.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("auxclick", _64cb3b2eb721 => {
    const _d9c87827e65c = _64cb3b2eb721.target?.closest?.("a[href]");
    if (_d9c87827e65c) return s(_d9c87827e65c) && i(_d9c87827e65c.href || _d9c87827e65c.getAttribute("href"), _d9c87827e65c.getAttribute("download") || "") ? (_64cb3b2eb721.preventDefault(), 
    void _64cb3b2eb721.stopImmediatePropagation()) : void (e() && a(_d9c87827e65c.getAttribute("target")) && (_64cb3b2eb721.preventDefault(), 
    _64cb3b2eb721.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("submit", _64cb3b2eb721 => {
    if (!e()) return;
    const _d9c87827e65c = _64cb3b2eb721.target;
    _d9c87827e65c && "FORM" === String(_d9c87827e65c.tagName || "").toUpperCase() && a(_d9c87827e65c.getAttribute("target")) && (_64cb3b2eb721.preventDefault(), 
    _64cb3b2eb721.stopImmediatePropagation(), n());
  }, !0));
  const u = _64cb3b2eb721 => {
    const _d9c87827e65c = window[_64cb3b2eb721];
    if ("function" == typeof _d9c87827e65c && !_d9c87827e65c.__nyxWrapped) try {
      Object.setPrototypeOf(r, _d9c87827e65c), r.prototype = _d9c87827e65c.prototype, 
      Object.defineProperty(r, "__nyxWrapped", {
        value: !0
      }), window[_64cb3b2eb721] = r;
    } catch {}
    function r(_64cb3b2eb721, _5ce122f95e05, _126ac622a6e6) {
      let _d9f777f14f5c = Number(_64cb3b2eb721), _ac530a7d89c8 = Number(_5ce122f95e05);
      return (!Number.isFinite(_d9f777f14f5c) || _d9f777f14f5c < 0) && (_d9f777f14f5c = 0), 
      (!Number.isFinite(_ac530a7d89c8) || _ac530a7d89c8 <= _d9f777f14f5c) && (_ac530a7d89c8 = _d9f777f14f5c + .001), 
      Reflect.construct(_d9c87827e65c, [ _d9f777f14f5c, _ac530a7d89c8, null == _126ac622a6e6 ? "" : String(_126ac622a6e6) ], new.target || r);
    }
  };
  u("VTTCue"), u("TextTrackCue");
})();
