(() => {
  if ("undefined" == typeof window || window.__nyxStudyJetGuards) return;
  window.__nyxStudyJetGuards = !0;
  const _c28461a3399f = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "trustedTypes", {
      configurable: !0,
      value: {
        createPolicy: (_c28461a3399f, _b57b2e0e41c8 = {}) => ({
          createHTML: _c28461a3399f => "function" == typeof _b57b2e0e41c8.createHTML ? _b57b2e0e41c8.createHTML(_c28461a3399f) : _c28461a3399f,
          createScript: _c28461a3399f => "function" == typeof _b57b2e0e41c8.createScript ? _b57b2e0e41c8.createScript(_c28461a3399f) : _c28461a3399f,
          createScriptURL: _c28461a3399f => "function" == typeof _b57b2e0e41c8.createScriptURL ? _b57b2e0e41c8.createScriptURL(_c28461a3399f) : _c28461a3399f
        })
      }
    });
  } catch {}
  try {
    const _c28461a3399f = Object.getOwnPropertyDescriptor(Document.prototype, "currentScript"), _b57b2e0e41c8 = document.createElement("script");
    _b57b2e0e41c8.setAttribute("nonce", ""), Object.defineProperty(Document.prototype, "currentScript", {
      configurable: !0,
      get() {
        let _316fef109f19 = null;
        try {
          _316fef109f19 = _c28461a3399f?.get?.call(this) || null;
        } catch {}
        return _316fef109f19 || this.querySelector?.("script[src],script") || _b57b2e0e41c8;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const t = _c28461a3399f => !(!_c28461a3399f || !_c28461a3399f.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_c28461a3399f.tagName || "")), e = _c28461a3399f => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_c28461a3399f?.tagName || "") ? String(_c28461a3399f.value || "").slice(_c28461a3399f.selectionStart || 0, _c28461a3399f.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, r = (_c28461a3399f, _b57b2e0e41c8) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_c28461a3399f?.tagName || "")) {
            const _316fef109f19 = _c28461a3399f.selectionStart || 0, _d8b8b32bd67c = _c28461a3399f.selectionEnd || 0, _68e59df2a637 = String(_c28461a3399f.value || "");
            _c28461a3399f.value = _68e59df2a637.slice(0, _316fef109f19) + _b57b2e0e41c8 + _68e59df2a637.slice(_d8b8b32bd67c);
            const _b2ad5f613124 = _316fef109f19 + String(_b57b2e0e41c8).length;
            return _c28461a3399f.setSelectionRange(_b2ad5f613124, _b2ad5f613124), void _c28461a3399f.dispatchEvent(new Event("input", {
              bubbles: !0
            }));
          }
          document.execCommand?.("insertText", !1, _b57b2e0e41c8);
        } catch {}
      }, n = async _c28461a3399f => {
        try {
          await (navigator.clipboard?.writeText(String(_c28461a3399f || "")));
        } catch {
          try {
            document.execCommand?.("copy");
          } catch {}
        }
      }, _c28461a3399f = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _b57b2e0e41c8 = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), c = _316fef109f19 => {
        try {
          _c28461a3399f?.postMessage(_316fef109f19, "*");
        } catch {}
        try {
          _b57b2e0e41c8 && _b57b2e0e41c8 !== _c28461a3399f && _b57b2e0e41c8.postMessage(_316fef109f19, "*");
        } catch {}
        try {
          window.parent?.postMessage(_316fef109f19, "*");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_316fef109f19, "*");
        } catch {}
      };
      window.addEventListener("keydown", _c28461a3399f => {
        const _b57b2e0e41c8 = String(_c28461a3399f.key || "").toLowerCase();
        if (_c28461a3399f.altKey && !_c28461a3399f.ctrlKey && !_c28461a3399f.metaKey && 2 !== _c28461a3399f.location && "alt" === _b57b2e0e41c8) return _c28461a3399f.preventDefault(), 
        _c28461a3399f.stopPropagation(), void c({
          type: "nyx:alt-prime"
        });
        if (_c28461a3399f.altKey && !_c28461a3399f.ctrlKey && !_c28461a3399f.metaKey && 2 !== _c28461a3399f.location && t(_c28461a3399f.target) && /^[acxvzy]$/.test(_b57b2e0e41c8)) {
          if (_c28461a3399f.preventDefault(), _c28461a3399f.stopPropagation(), "a" === _b57b2e0e41c8) return void (_c28461a3399f.target?.select ? _c28461a3399f.target.select() : document.execCommand?.("selectAll"));
          if ("c" === _b57b2e0e41c8) return void n(e(_c28461a3399f.target));
          if ("x" === _b57b2e0e41c8) {
            const _b57b2e0e41c8 = e(_c28461a3399f.target);
            return n(_b57b2e0e41c8), void r(_c28461a3399f.target, "");
          }
          if ("v" === _b57b2e0e41c8) return void navigator.clipboard?.readText?.().then(_b57b2e0e41c8 => r(_c28461a3399f.target, _b57b2e0e41c8)).catch(() => {
            try {
              document.execCommand?.("paste");
            } catch {}
          });
          if ("z" === _b57b2e0e41c8) return void document.execCommand?.("undo");
          if ("y" === _b57b2e0e41c8) return void document.execCommand?.("redo");
        }
        return !_c28461a3399f.altKey || _c28461a3399f.ctrlKey || _c28461a3399f.metaKey || 2 === _c28461a3399f.location || !/^[1-9]$/.test(_b57b2e0e41c8) && ![ "l", "d", "t", "w", "r", "arrowleft", "arrowright", "tab" ].includes(_b57b2e0e41c8) ? void 0 : (_c28461a3399f.preventDefault(), 
        _c28461a3399f.stopPropagation(), void c({
          type: "nyx:alt-shortcut",
          key: _b57b2e0e41c8,
          code: _c28461a3399f.code || "",
          location: _c28461a3399f.location || 0,
          shiftKey: !!_c28461a3399f.shiftKey
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
  }, r = _c28461a3399f => {
    if (!_c28461a3399f) return !1;
    try {
      return _c28461a3399f.document.open(), _c28461a3399f.document.write('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>nyx://blocked67haha</title><style>html,body{margin:0;width:100%;height:100%;background:#fff;color:#111;font:28px Raleway,Arial,sans-serif}body{display:grid;place-items:center;text-align:center}main{padding:24px}</style></head><body><main>are you trying to hack me scamma???</main></body></html>'), 
      _c28461a3399f.document.close(), _c28461a3399f.focus?.(), !0;
    } catch {
      return !1;
    }
  }, n = () => {
    const _c28461a3399f = null;
    return {
      closed: !1,
      focus() {
        try {
          _c28461a3399f?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _c28461a3399f?.blur?.();
        } catch {}
      },
      close() {
        try {
          _c28461a3399f?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return r(_c28461a3399f), this;
        },
        write() {
          r(_c28461a3399f);
        },
        writeln() {
          r(_c28461a3399f);
        },
        close() {
          r(_c28461a3399f);
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
          r(_c28461a3399f);
        },
        toString: () => "nyx://blocked67haha"
      }
    };
  }, o = _c28461a3399f => {
    const _b57b2e0e41c8 = String(_c28461a3399f || "").trim();
    if (/^(?:blob|data):/i.test(_b57b2e0e41c8)) return !1;
    const _316fef109f19 = _b57b2e0e41c8.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_316fef109f19);
  }, i = (_c28461a3399f, _b57b2e0e41c8 = "") => {
    const _316fef109f19 = String(_c28461a3399f || "").trim();
    if (!_316fef109f19 || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "nyx:download-request",
        url: _316fef109f19,
        filename: String(_b57b2e0e41c8 || ""),
        sourceUrl: String(location.href || "")
      }, "*"), !0;
    } catch {
      return !1;
    }
  };
  let c = (..._b57b2e0e41c8) => o(_b57b2e0e41c8[0]) && i(_b57b2e0e41c8[0]) ? null : !e() && _c28461a3399f ? _c28461a3399f(..._b57b2e0e41c8) : n();
  try {
    "function" == typeof _c28461a3399f && "function" == typeof Proxy && (c = new Proxy(_c28461a3399f, {
      apply: (_c28461a3399f, _b57b2e0e41c8, _316fef109f19) => o(_316fef109f19[0]) && i(_316fef109f19[0]) ? null : e() ? n() : Reflect.apply(_c28461a3399f, _b57b2e0e41c8, _316fef109f19),
      construct(_c28461a3399f, _b57b2e0e41c8, _316fef109f19) {
        if (!e()) try {
          return Reflect.construct(_c28461a3399f, _b57b2e0e41c8, _316fef109f19);
        } catch {
          return Reflect.apply(_c28461a3399f, window, _b57b2e0e41c8);
        }
        return n();
      },
      get: (_c28461a3399f, _b57b2e0e41c8, _316fef109f19) => "__nyxPopupGuard" === _b57b2e0e41c8 || ("toString" === _b57b2e0e41c8 ? () => "function open() { [native code] }" : Reflect.get(_c28461a3399f, _b57b2e0e41c8, _316fef109f19))
    }));
  } catch {}
  const a = _c28461a3399f => {
    const _b57b2e0e41c8 = String(_c28461a3399f || "").toLowerCase();
    return _b57b2e0e41c8 && ![ "_self", "_parent", "_top" ].includes(_b57b2e0e41c8);
  }, s = _c28461a3399f => !!_c28461a3399f && (!!_c28461a3399f.hasAttribute("download") || o(_c28461a3399f.href || _c28461a3399f.getAttribute("href") || ""));
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
    const _c28461a3399f = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!s(this) || !i(this.href || this.getAttribute("href"), this.getAttribute("download") || "")) {
        if (!e() || !a(this.target)) return _c28461a3399f.call(this);
        n();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("click", _c28461a3399f => {
    const _b57b2e0e41c8 = _c28461a3399f.target?.closest?.("a[href]");
    if (_b57b2e0e41c8) return s(_b57b2e0e41c8) && i(_b57b2e0e41c8.href || _b57b2e0e41c8.getAttribute("href"), _b57b2e0e41c8.getAttribute("download") || "") ? (_c28461a3399f.preventDefault(), 
    void _c28461a3399f.stopImmediatePropagation()) : void (e() && a(_b57b2e0e41c8.getAttribute("target")) && (_c28461a3399f.preventDefault(), 
    _c28461a3399f.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("auxclick", _c28461a3399f => {
    const _b57b2e0e41c8 = _c28461a3399f.target?.closest?.("a[href]");
    if (_b57b2e0e41c8) return s(_b57b2e0e41c8) && i(_b57b2e0e41c8.href || _b57b2e0e41c8.getAttribute("href"), _b57b2e0e41c8.getAttribute("download") || "") ? (_c28461a3399f.preventDefault(), 
    void _c28461a3399f.stopImmediatePropagation()) : void (e() && a(_b57b2e0e41c8.getAttribute("target")) && (_c28461a3399f.preventDefault(), 
    _c28461a3399f.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("submit", _c28461a3399f => {
    if (!e()) return;
    const _b57b2e0e41c8 = _c28461a3399f.target;
    _b57b2e0e41c8 && "FORM" === String(_b57b2e0e41c8.tagName || "").toUpperCase() && a(_b57b2e0e41c8.getAttribute("target")) && (_c28461a3399f.preventDefault(), 
    _c28461a3399f.stopImmediatePropagation(), n());
  }, !0));
  const u = _c28461a3399f => {
    const _b57b2e0e41c8 = window[_c28461a3399f];
    if ("function" == typeof _b57b2e0e41c8 && !_b57b2e0e41c8.__nyxWrapped) try {
      Object.setPrototypeOf(r, _b57b2e0e41c8), r.prototype = _b57b2e0e41c8.prototype, 
      Object.defineProperty(r, "__nyxWrapped", {
        value: !0
      }), window[_c28461a3399f] = r;
    } catch {}
    function r(_c28461a3399f, _316fef109f19, _d8b8b32bd67c) {
      let _68e59df2a637 = Number(_c28461a3399f), _b2ad5f613124 = Number(_316fef109f19);
      return (!Number.isFinite(_68e59df2a637) || _68e59df2a637 < 0) && (_68e59df2a637 = 0), 
      (!Number.isFinite(_b2ad5f613124) || _b2ad5f613124 <= _68e59df2a637) && (_b2ad5f613124 = _68e59df2a637 + .001), 
      Reflect.construct(_b57b2e0e41c8, [ _68e59df2a637, _b2ad5f613124, null == _d8b8b32bd67c ? "" : String(_d8b8b32bd67c) ], new.target || r);
    }
  };
  u("VTTCue"), u("TextTrackCue");
})();
