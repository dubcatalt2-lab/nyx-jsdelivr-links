(() => {
  if ("undefined" == typeof window || window.__nyxScramjetGuards) return;
  window.__nyxScramjetGuards = !0;
  const _b38d264a22cd = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "trustedTypes", {
      configurable: !0,
      value: {
        createPolicy: (_b38d264a22cd, _0c24519c9653 = {}) => ({
          createHTML: _b38d264a22cd => "function" == typeof _0c24519c9653.createHTML ? _0c24519c9653.createHTML(_b38d264a22cd) : _b38d264a22cd,
          createScript: _b38d264a22cd => "function" == typeof _0c24519c9653.createScript ? _0c24519c9653.createScript(_b38d264a22cd) : _b38d264a22cd,
          createScriptURL: _b38d264a22cd => "function" == typeof _0c24519c9653.createScriptURL ? _0c24519c9653.createScriptURL(_b38d264a22cd) : _b38d264a22cd
        })
      }
    });
  } catch {}
  try {
    const _b38d264a22cd = Object.getOwnPropertyDescriptor(Document.prototype, "currentScript"), _0c24519c9653 = document.createElement("script");
    _0c24519c9653.setAttribute("nonce", ""), Object.defineProperty(Document.prototype, "currentScript", {
      configurable: !0,
      get() {
        let _457cc5040ffc = null;
        try {
          _457cc5040ffc = _b38d264a22cd?.get?.call(this) || null;
        } catch {}
        return _457cc5040ffc || this.querySelector?.("script[src],script") || _0c24519c9653;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const t = _b38d264a22cd => !(!_b38d264a22cd || !_b38d264a22cd.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_b38d264a22cd.tagName || "")), e = _b38d264a22cd => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_b38d264a22cd?.tagName || "") ? String(_b38d264a22cd.value || "").slice(_b38d264a22cd.selectionStart || 0, _b38d264a22cd.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, r = (_b38d264a22cd, _0c24519c9653) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_b38d264a22cd?.tagName || "")) {
            const _457cc5040ffc = _b38d264a22cd.selectionStart || 0, _ca4cb6788041 = _b38d264a22cd.selectionEnd || 0, _b6ffbf5f697c = String(_b38d264a22cd.value || "");
            _b38d264a22cd.value = _b6ffbf5f697c.slice(0, _457cc5040ffc) + _0c24519c9653 + _b6ffbf5f697c.slice(_ca4cb6788041);
            const _be750a773c41 = _457cc5040ffc + String(_0c24519c9653).length;
            return _b38d264a22cd.setSelectionRange(_be750a773c41, _be750a773c41), void _b38d264a22cd.dispatchEvent(new Event("input", {
              bubbles: !0
            }));
          }
          document.execCommand?.("insertText", !1, _0c24519c9653);
        } catch {}
      }, n = async _b38d264a22cd => {
        try {
          await (navigator.clipboard?.writeText(String(_b38d264a22cd || "")));
        } catch {
          try {
            document.execCommand?.("copy");
          } catch {}
        }
      }, _b38d264a22cd = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _0c24519c9653 = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), c = _457cc5040ffc => {
        try {
          _b38d264a22cd?.postMessage(_457cc5040ffc, "*");
        } catch {}
        try {
          _0c24519c9653 && _0c24519c9653 !== _b38d264a22cd && _0c24519c9653.postMessage(_457cc5040ffc, "*");
        } catch {}
        try {
          window.parent?.postMessage(_457cc5040ffc, "*");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_457cc5040ffc, "*");
        } catch {}
      };
      window.addEventListener("keydown", _b38d264a22cd => {
        const _0c24519c9653 = String(_b38d264a22cd.key || "").toLowerCase();
        if (_b38d264a22cd.altKey && !_b38d264a22cd.ctrlKey && !_b38d264a22cd.metaKey && 2 !== _b38d264a22cd.location && "alt" === _0c24519c9653) return _b38d264a22cd.preventDefault(), 
        _b38d264a22cd.stopPropagation(), void c({
          type: "nyx:alt-prime"
        });
        if (_b38d264a22cd.altKey && !_b38d264a22cd.ctrlKey && !_b38d264a22cd.metaKey && 2 !== _b38d264a22cd.location && t(_b38d264a22cd.target) && /^[acxvzy]$/.test(_0c24519c9653)) {
          if (_b38d264a22cd.preventDefault(), _b38d264a22cd.stopPropagation(), "a" === _0c24519c9653) return void (_b38d264a22cd.target?.select ? _b38d264a22cd.target.select() : document.execCommand?.("selectAll"));
          if ("c" === _0c24519c9653) return void n(e(_b38d264a22cd.target));
          if ("x" === _0c24519c9653) {
            const _0c24519c9653 = e(_b38d264a22cd.target);
            return n(_0c24519c9653), void r(_b38d264a22cd.target, "");
          }
          if ("v" === _0c24519c9653) return void navigator.clipboard?.readText?.().then(_0c24519c9653 => r(_b38d264a22cd.target, _0c24519c9653)).catch(() => {
            try {
              document.execCommand?.("paste");
            } catch {}
          });
          if ("z" === _0c24519c9653) return void document.execCommand?.("undo");
          if ("y" === _0c24519c9653) return void document.execCommand?.("redo");
        }
        return !_b38d264a22cd.altKey || _b38d264a22cd.ctrlKey || _b38d264a22cd.metaKey || 2 === _b38d264a22cd.location || !/^[1-9]$/.test(_0c24519c9653) && ![ "l", "d", "t", "w", "r", "arrowleft", "arrowright", "tab" ].includes(_0c24519c9653) ? void 0 : (_b38d264a22cd.preventDefault(), 
        _b38d264a22cd.stopPropagation(), void c({
          type: "nyx:alt-shortcut",
          key: _0c24519c9653,
          code: _b38d264a22cd.code || "",
          location: _b38d264a22cd.location || 0,
          shiftKey: !!_b38d264a22cd.shiftKey
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
  }, r = _b38d264a22cd => {
    if (!_b38d264a22cd) return !1;
    try {
      return _b38d264a22cd.document.open(), _b38d264a22cd.document.write('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>nyx://blocked67haha</title><style>html,body{margin:0;width:100%;height:100%;background:#fff;color:#111;font:28px Raleway,Arial,sans-serif}body{display:grid;place-items:center;text-align:center}main{padding:24px}</style></head><body><main>are you trying to hack me scamma???</main></body></html>'), 
      _b38d264a22cd.document.close(), _b38d264a22cd.focus?.(), !0;
    } catch {
      return !1;
    }
  }, n = () => {
    const _b38d264a22cd = null;
    return {
      closed: !1,
      focus() {
        try {
          _b38d264a22cd?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _b38d264a22cd?.blur?.();
        } catch {}
      },
      close() {
        try {
          _b38d264a22cd?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return r(_b38d264a22cd), this;
        },
        write() {
          r(_b38d264a22cd);
        },
        writeln() {
          r(_b38d264a22cd);
        },
        close() {
          r(_b38d264a22cd);
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
          r(_b38d264a22cd);
        },
        toString: () => "nyx://blocked67haha"
      }
    };
  }, o = _b38d264a22cd => {
    const _0c24519c9653 = String(_b38d264a22cd || "").trim();
    if (/^(?:blob|data):/i.test(_0c24519c9653)) return !1;
    const _457cc5040ffc = _0c24519c9653.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_457cc5040ffc);
  }, i = (_b38d264a22cd, _0c24519c9653 = "") => {
    const _457cc5040ffc = String(_b38d264a22cd || "").trim();
    if (!_457cc5040ffc || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "nyx:download-request",
        url: _457cc5040ffc,
        filename: String(_0c24519c9653 || ""),
        sourceUrl: String(location.href || "")
      }, "*"), !0;
    } catch {
      return !1;
    }
  };
  let c = (..._0c24519c9653) => o(_0c24519c9653[0]) && i(_0c24519c9653[0]) ? null : !e() && _b38d264a22cd ? _b38d264a22cd(..._0c24519c9653) : n();
  try {
    "function" == typeof _b38d264a22cd && "function" == typeof Proxy && (c = new Proxy(_b38d264a22cd, {
      apply: (_b38d264a22cd, _0c24519c9653, _457cc5040ffc) => o(_457cc5040ffc[0]) && i(_457cc5040ffc[0]) ? null : e() ? n() : Reflect.apply(_b38d264a22cd, _0c24519c9653, _457cc5040ffc),
      construct(_b38d264a22cd, _0c24519c9653, _457cc5040ffc) {
        if (!e()) try {
          return Reflect.construct(_b38d264a22cd, _0c24519c9653, _457cc5040ffc);
        } catch {
          return Reflect.apply(_b38d264a22cd, window, _0c24519c9653);
        }
        return n();
      },
      get: (_b38d264a22cd, _0c24519c9653, _457cc5040ffc) => "__nyxPopupGuard" === _0c24519c9653 || ("toString" === _0c24519c9653 ? () => "function open() { [native code] }" : Reflect.get(_b38d264a22cd, _0c24519c9653, _457cc5040ffc))
    }));
  } catch {}
  const a = _b38d264a22cd => {
    const _0c24519c9653 = String(_b38d264a22cd || "").toLowerCase();
    return _0c24519c9653 && ![ "_self", "_parent", "_top" ].includes(_0c24519c9653);
  }, s = _b38d264a22cd => !!_b38d264a22cd && (!!_b38d264a22cd.hasAttribute("download") || o(_b38d264a22cd.href || _b38d264a22cd.getAttribute("href") || ""));
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
    const _b38d264a22cd = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!s(this) || !i(this.href || this.getAttribute("href"), this.getAttribute("download") || "")) {
        if (!e() || !a(this.target)) return _b38d264a22cd.call(this);
        n();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("click", _b38d264a22cd => {
    const _0c24519c9653 = _b38d264a22cd.target?.closest?.("a[href]");
    if (_0c24519c9653) return s(_0c24519c9653) && i(_0c24519c9653.href || _0c24519c9653.getAttribute("href"), _0c24519c9653.getAttribute("download") || "") ? (_b38d264a22cd.preventDefault(), 
    void _b38d264a22cd.stopImmediatePropagation()) : void (e() && a(_0c24519c9653.getAttribute("target")) && (_b38d264a22cd.preventDefault(), 
    _b38d264a22cd.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("auxclick", _b38d264a22cd => {
    const _0c24519c9653 = _b38d264a22cd.target?.closest?.("a[href]");
    if (_0c24519c9653) return s(_0c24519c9653) && i(_0c24519c9653.href || _0c24519c9653.getAttribute("href"), _0c24519c9653.getAttribute("download") || "") ? (_b38d264a22cd.preventDefault(), 
    void _b38d264a22cd.stopImmediatePropagation()) : void (e() && a(_0c24519c9653.getAttribute("target")) && (_b38d264a22cd.preventDefault(), 
    _b38d264a22cd.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("submit", _b38d264a22cd => {
    if (!e()) return;
    const _0c24519c9653 = _b38d264a22cd.target;
    _0c24519c9653 && "FORM" === String(_0c24519c9653.tagName || "").toUpperCase() && a(_0c24519c9653.getAttribute("target")) && (_b38d264a22cd.preventDefault(), 
    _b38d264a22cd.stopImmediatePropagation(), n());
  }, !0));
  const u = _b38d264a22cd => {
    const _0c24519c9653 = window[_b38d264a22cd];
    if ("function" == typeof _0c24519c9653 && !_0c24519c9653.__nyxWrapped) try {
      Object.setPrototypeOf(r, _0c24519c9653), r.prototype = _0c24519c9653.prototype, 
      Object.defineProperty(r, "__nyxWrapped", {
        value: !0
      }), window[_b38d264a22cd] = r;
    } catch {}
    function r(_b38d264a22cd, _457cc5040ffc, _ca4cb6788041) {
      let _b6ffbf5f697c = Number(_b38d264a22cd), _be750a773c41 = Number(_457cc5040ffc);
      return (!Number.isFinite(_b6ffbf5f697c) || _b6ffbf5f697c < 0) && (_b6ffbf5f697c = 0), 
      (!Number.isFinite(_be750a773c41) || _be750a773c41 <= _b6ffbf5f697c) && (_be750a773c41 = _b6ffbf5f697c + .001), 
      Reflect.construct(_0c24519c9653, [ _b6ffbf5f697c, _be750a773c41, null == _ca4cb6788041 ? "" : String(_ca4cb6788041) ], new.target || r);
    }
  };
  u("VTTCue"), u("TextTrackCue");
})();
