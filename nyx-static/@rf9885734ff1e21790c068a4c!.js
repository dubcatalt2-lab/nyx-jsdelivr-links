(() => {
  if ("undefined" == typeof window || window.__nyxScramjetGuards) return;
  window.__nyxScramjetGuards = !0;
  const _7806c5d2f5a8 = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "trustedTypes", {
      configurable: !0,
      value: {
        createPolicy: (_7806c5d2f5a8, _587ff71eb2a2 = {}) => ({
          createHTML: _7806c5d2f5a8 => "function" == typeof _587ff71eb2a2.createHTML ? _587ff71eb2a2.createHTML(_7806c5d2f5a8) : _7806c5d2f5a8,
          createScript: _7806c5d2f5a8 => "function" == typeof _587ff71eb2a2.createScript ? _587ff71eb2a2.createScript(_7806c5d2f5a8) : _7806c5d2f5a8,
          createScriptURL: _7806c5d2f5a8 => "function" == typeof _587ff71eb2a2.createScriptURL ? _587ff71eb2a2.createScriptURL(_7806c5d2f5a8) : _7806c5d2f5a8
        })
      }
    });
  } catch {}
  try {
    const _7806c5d2f5a8 = Object.getOwnPropertyDescriptor(Document.prototype, "currentScript"), _587ff71eb2a2 = document.createElement("script");
    _587ff71eb2a2.setAttribute("nonce", ""), Object.defineProperty(Document.prototype, "currentScript", {
      configurable: !0,
      get() {
        let _ec24f3f49517 = null;
        try {
          _ec24f3f49517 = _7806c5d2f5a8?.get?.call(this) || null;
        } catch {}
        return _ec24f3f49517 || this.querySelector?.("script[src],script") || _587ff71eb2a2;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const t = _7806c5d2f5a8 => !(!_7806c5d2f5a8 || !_7806c5d2f5a8.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_7806c5d2f5a8.tagName || "")), e = _7806c5d2f5a8 => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_7806c5d2f5a8?.tagName || "") ? String(_7806c5d2f5a8.value || "").slice(_7806c5d2f5a8.selectionStart || 0, _7806c5d2f5a8.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, r = (_7806c5d2f5a8, _587ff71eb2a2) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_7806c5d2f5a8?.tagName || "")) {
            const _ec24f3f49517 = _7806c5d2f5a8.selectionStart || 0, _3c8c09be574e = _7806c5d2f5a8.selectionEnd || 0, _1ae1b6156087 = String(_7806c5d2f5a8.value || "");
            _7806c5d2f5a8.value = _1ae1b6156087.slice(0, _ec24f3f49517) + _587ff71eb2a2 + _1ae1b6156087.slice(_3c8c09be574e);
            const _b2f7edbc9682 = _ec24f3f49517 + String(_587ff71eb2a2).length;
            return _7806c5d2f5a8.setSelectionRange(_b2f7edbc9682, _b2f7edbc9682), void _7806c5d2f5a8.dispatchEvent(new Event("input", {
              bubbles: !0
            }));
          }
          document.execCommand?.("insertText", !1, _587ff71eb2a2);
        } catch {}
      }, n = async _7806c5d2f5a8 => {
        try {
          await (navigator.clipboard?.writeText(String(_7806c5d2f5a8 || "")));
        } catch {
          try {
            document.execCommand?.("copy");
          } catch {}
        }
      }, _7806c5d2f5a8 = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _587ff71eb2a2 = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), c = _ec24f3f49517 => {
        try {
          _7806c5d2f5a8?.postMessage(_ec24f3f49517, "*");
        } catch {}
        try {
          _587ff71eb2a2 && _587ff71eb2a2 !== _7806c5d2f5a8 && _587ff71eb2a2.postMessage(_ec24f3f49517, "*");
        } catch {}
        try {
          window.parent?.postMessage(_ec24f3f49517, "*");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_ec24f3f49517, "*");
        } catch {}
      };
      window.addEventListener("keydown", _7806c5d2f5a8 => {
        const _587ff71eb2a2 = String(_7806c5d2f5a8.key || "").toLowerCase();
        if (_7806c5d2f5a8.altKey && !_7806c5d2f5a8.ctrlKey && !_7806c5d2f5a8.metaKey && 2 !== _7806c5d2f5a8.location && "alt" === _587ff71eb2a2) return _7806c5d2f5a8.preventDefault(), 
        _7806c5d2f5a8.stopPropagation(), void c({
          type: "nyx:alt-prime"
        });
        if (_7806c5d2f5a8.altKey && !_7806c5d2f5a8.ctrlKey && !_7806c5d2f5a8.metaKey && 2 !== _7806c5d2f5a8.location && t(_7806c5d2f5a8.target) && /^[acxvzy]$/.test(_587ff71eb2a2)) {
          if (_7806c5d2f5a8.preventDefault(), _7806c5d2f5a8.stopPropagation(), "a" === _587ff71eb2a2) return void (_7806c5d2f5a8.target?.select ? _7806c5d2f5a8.target.select() : document.execCommand?.("selectAll"));
          if ("c" === _587ff71eb2a2) return void n(e(_7806c5d2f5a8.target));
          if ("x" === _587ff71eb2a2) {
            const _587ff71eb2a2 = e(_7806c5d2f5a8.target);
            return n(_587ff71eb2a2), void r(_7806c5d2f5a8.target, "");
          }
          if ("v" === _587ff71eb2a2) return void navigator.clipboard?.readText?.().then(_587ff71eb2a2 => r(_7806c5d2f5a8.target, _587ff71eb2a2)).catch(() => {
            try {
              document.execCommand?.("paste");
            } catch {}
          });
          if ("z" === _587ff71eb2a2) return void document.execCommand?.("undo");
          if ("y" === _587ff71eb2a2) return void document.execCommand?.("redo");
        }
        return !_7806c5d2f5a8.altKey || _7806c5d2f5a8.ctrlKey || _7806c5d2f5a8.metaKey || 2 === _7806c5d2f5a8.location || !/^[1-9]$/.test(_587ff71eb2a2) && ![ "l", "d", "t", "w", "r", "arrowleft", "arrowright", "tab" ].includes(_587ff71eb2a2) ? void 0 : (_7806c5d2f5a8.preventDefault(), 
        _7806c5d2f5a8.stopPropagation(), void c({
          type: "nyx:alt-shortcut",
          key: _587ff71eb2a2,
          code: _7806c5d2f5a8.code || "",
          location: _7806c5d2f5a8.location || 0,
          shiftKey: !!_7806c5d2f5a8.shiftKey
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
  }, r = _7806c5d2f5a8 => {
    if (!_7806c5d2f5a8) return !1;
    try {
      return _7806c5d2f5a8.document.open(), _7806c5d2f5a8.document.write('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>nyx://blocked67haha</title><style>html,body{margin:0;width:100%;height:100%;background:#fff;color:#111;font:28px Raleway,Arial,sans-serif}body{display:grid;place-items:center;text-align:center}main{padding:24px}</style></head><body><main>are you trying to hack me scamma???</main></body></html>'), 
      _7806c5d2f5a8.document.close(), _7806c5d2f5a8.focus?.(), !0;
    } catch {
      return !1;
    }
  }, n = () => {
    const _7806c5d2f5a8 = null;
    return {
      closed: !1,
      focus() {
        try {
          _7806c5d2f5a8?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _7806c5d2f5a8?.blur?.();
        } catch {}
      },
      close() {
        try {
          _7806c5d2f5a8?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return r(_7806c5d2f5a8), this;
        },
        write() {
          r(_7806c5d2f5a8);
        },
        writeln() {
          r(_7806c5d2f5a8);
        },
        close() {
          r(_7806c5d2f5a8);
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
          r(_7806c5d2f5a8);
        },
        toString: () => "nyx://blocked67haha"
      }
    };
  }, o = _7806c5d2f5a8 => {
    const _587ff71eb2a2 = String(_7806c5d2f5a8 || "").trim();
    if (/^(?:blob|data):/i.test(_587ff71eb2a2)) return !1;
    const _ec24f3f49517 = _587ff71eb2a2.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_ec24f3f49517);
  }, i = (_7806c5d2f5a8, _587ff71eb2a2 = "") => {
    const _ec24f3f49517 = String(_7806c5d2f5a8 || "").trim();
    if (!_ec24f3f49517 || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "nyx:download-request",
        url: _ec24f3f49517,
        filename: String(_587ff71eb2a2 || ""),
        sourceUrl: String(location.href || "")
      }, "*"), !0;
    } catch {
      return !1;
    }
  };
  let c = (..._587ff71eb2a2) => o(_587ff71eb2a2[0]) && i(_587ff71eb2a2[0]) ? null : !e() && _7806c5d2f5a8 ? _7806c5d2f5a8(..._587ff71eb2a2) : n();
  try {
    "function" == typeof _7806c5d2f5a8 && "function" == typeof Proxy && (c = new Proxy(_7806c5d2f5a8, {
      apply: (_7806c5d2f5a8, _587ff71eb2a2, _ec24f3f49517) => o(_ec24f3f49517[0]) && i(_ec24f3f49517[0]) ? null : e() ? n() : Reflect.apply(_7806c5d2f5a8, _587ff71eb2a2, _ec24f3f49517),
      construct(_7806c5d2f5a8, _587ff71eb2a2, _ec24f3f49517) {
        if (!e()) try {
          return Reflect.construct(_7806c5d2f5a8, _587ff71eb2a2, _ec24f3f49517);
        } catch {
          return Reflect.apply(_7806c5d2f5a8, window, _587ff71eb2a2);
        }
        return n();
      },
      get: (_7806c5d2f5a8, _587ff71eb2a2, _ec24f3f49517) => "__nyxPopupGuard" === _587ff71eb2a2 || ("toString" === _587ff71eb2a2 ? () => "function open() { [native code] }" : Reflect.get(_7806c5d2f5a8, _587ff71eb2a2, _ec24f3f49517))
    }));
  } catch {}
  const a = _7806c5d2f5a8 => {
    const _587ff71eb2a2 = String(_7806c5d2f5a8 || "").toLowerCase();
    return _587ff71eb2a2 && ![ "_self", "_parent", "_top" ].includes(_587ff71eb2a2);
  }, s = _7806c5d2f5a8 => !!_7806c5d2f5a8 && (!!_7806c5d2f5a8.hasAttribute("download") || o(_7806c5d2f5a8.href || _7806c5d2f5a8.getAttribute("href") || ""));
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
    const _7806c5d2f5a8 = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!s(this) || !i(this.href || this.getAttribute("href"), this.getAttribute("download") || "")) {
        if (!e() || !a(this.target)) return _7806c5d2f5a8.call(this);
        n();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("click", _7806c5d2f5a8 => {
    const _587ff71eb2a2 = _7806c5d2f5a8.target?.closest?.("a[href]");
    if (_587ff71eb2a2) return s(_587ff71eb2a2) && i(_587ff71eb2a2.href || _587ff71eb2a2.getAttribute("href"), _587ff71eb2a2.getAttribute("download") || "") ? (_7806c5d2f5a8.preventDefault(), 
    void _7806c5d2f5a8.stopImmediatePropagation()) : void (e() && a(_587ff71eb2a2.getAttribute("target")) && (_7806c5d2f5a8.preventDefault(), 
    _7806c5d2f5a8.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("auxclick", _7806c5d2f5a8 => {
    const _587ff71eb2a2 = _7806c5d2f5a8.target?.closest?.("a[href]");
    if (_587ff71eb2a2) return s(_587ff71eb2a2) && i(_587ff71eb2a2.href || _587ff71eb2a2.getAttribute("href"), _587ff71eb2a2.getAttribute("download") || "") ? (_7806c5d2f5a8.preventDefault(), 
    void _7806c5d2f5a8.stopImmediatePropagation()) : void (e() && a(_587ff71eb2a2.getAttribute("target")) && (_7806c5d2f5a8.preventDefault(), 
    _7806c5d2f5a8.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("submit", _7806c5d2f5a8 => {
    if (!e()) return;
    const _587ff71eb2a2 = _7806c5d2f5a8.target;
    _587ff71eb2a2 && "FORM" === String(_587ff71eb2a2.tagName || "").toUpperCase() && a(_587ff71eb2a2.getAttribute("target")) && (_7806c5d2f5a8.preventDefault(), 
    _7806c5d2f5a8.stopImmediatePropagation(), n());
  }, !0));
  const u = _7806c5d2f5a8 => {
    const _587ff71eb2a2 = window[_7806c5d2f5a8];
    if ("function" == typeof _587ff71eb2a2 && !_587ff71eb2a2.__nyxWrapped) try {
      Object.setPrototypeOf(r, _587ff71eb2a2), r.prototype = _587ff71eb2a2.prototype, 
      Object.defineProperty(r, "__nyxWrapped", {
        value: !0
      }), window[_7806c5d2f5a8] = r;
    } catch {}
    function r(_7806c5d2f5a8, _ec24f3f49517, _3c8c09be574e) {
      let _1ae1b6156087 = Number(_7806c5d2f5a8), _b2f7edbc9682 = Number(_ec24f3f49517);
      return (!Number.isFinite(_1ae1b6156087) || _1ae1b6156087 < 0) && (_1ae1b6156087 = 0), 
      (!Number.isFinite(_b2f7edbc9682) || _b2f7edbc9682 <= _1ae1b6156087) && (_b2f7edbc9682 = _1ae1b6156087 + .001), 
      Reflect.construct(_587ff71eb2a2, [ _1ae1b6156087, _b2f7edbc9682, null == _3c8c09be574e ? "" : String(_3c8c09be574e) ], new.target || r);
    }
  };
  u("VTTCue"), u("TextTrackCue");
})();
