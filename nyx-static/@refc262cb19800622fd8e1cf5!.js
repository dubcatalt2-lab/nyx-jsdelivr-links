(() => {
  if ("undefined" == typeof window || window.__nyxStudyJetGuards) return;
  window.__nyxStudyJetGuards = !0;
  const _055f55d9a3b8 = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "trustedTypes", {
      configurable: !0,
      value: {
        createPolicy: (_055f55d9a3b8, _8a33af4be581 = {}) => ({
          createHTML: _055f55d9a3b8 => "function" == typeof _8a33af4be581.createHTML ? _8a33af4be581.createHTML(_055f55d9a3b8) : _055f55d9a3b8,
          createScript: _055f55d9a3b8 => "function" == typeof _8a33af4be581.createScript ? _8a33af4be581.createScript(_055f55d9a3b8) : _055f55d9a3b8,
          createScriptURL: _055f55d9a3b8 => "function" == typeof _8a33af4be581.createScriptURL ? _8a33af4be581.createScriptURL(_055f55d9a3b8) : _055f55d9a3b8
        })
      }
    });
  } catch {}
  try {
    const _055f55d9a3b8 = Object.getOwnPropertyDescriptor(Document.prototype, "currentScript"), _8a33af4be581 = document.createElement("script");
    _8a33af4be581.setAttribute("nonce", ""), Object.defineProperty(Document.prototype, "currentScript", {
      configurable: !0,
      get() {
        let _cd6195aba351 = null;
        try {
          _cd6195aba351 = _055f55d9a3b8?.get?.call(this) || null;
        } catch {}
        return _cd6195aba351 || this.querySelector?.("script[src],script") || _8a33af4be581;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const t = _055f55d9a3b8 => !(!_055f55d9a3b8 || !_055f55d9a3b8.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_055f55d9a3b8.tagName || "")), e = _055f55d9a3b8 => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_055f55d9a3b8?.tagName || "") ? String(_055f55d9a3b8.value || "").slice(_055f55d9a3b8.selectionStart || 0, _055f55d9a3b8.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, r = (_055f55d9a3b8, _8a33af4be581) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_055f55d9a3b8?.tagName || "")) {
            const _cd6195aba351 = _055f55d9a3b8.selectionStart || 0, _445efbb701cd = _055f55d9a3b8.selectionEnd || 0, _fb8175139d55 = String(_055f55d9a3b8.value || "");
            _055f55d9a3b8.value = _fb8175139d55.slice(0, _cd6195aba351) + _8a33af4be581 + _fb8175139d55.slice(_445efbb701cd);
            const _00c2dc56719f = _cd6195aba351 + String(_8a33af4be581).length;
            return _055f55d9a3b8.setSelectionRange(_00c2dc56719f, _00c2dc56719f), void _055f55d9a3b8.dispatchEvent(new Event("input", {
              bubbles: !0
            }));
          }
          document.execCommand?.("insertText", !1, _8a33af4be581);
        } catch {}
      }, n = async _055f55d9a3b8 => {
        try {
          await (navigator.clipboard?.writeText(String(_055f55d9a3b8 || "")));
        } catch {
          try {
            document.execCommand?.("copy");
          } catch {}
        }
      }, _055f55d9a3b8 = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _8a33af4be581 = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), c = _cd6195aba351 => {
        try {
          _055f55d9a3b8?.postMessage(_cd6195aba351, "*");
        } catch {}
        try {
          _8a33af4be581 && _8a33af4be581 !== _055f55d9a3b8 && _8a33af4be581.postMessage(_cd6195aba351, "*");
        } catch {}
        try {
          window.parent?.postMessage(_cd6195aba351, "*");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_cd6195aba351, "*");
        } catch {}
      };
      window.addEventListener("keydown", _055f55d9a3b8 => {
        const _8a33af4be581 = String(_055f55d9a3b8.key || "").toLowerCase();
        if (_055f55d9a3b8.altKey && !_055f55d9a3b8.ctrlKey && !_055f55d9a3b8.metaKey && 2 !== _055f55d9a3b8.location && "alt" === _8a33af4be581) return _055f55d9a3b8.preventDefault(), 
        _055f55d9a3b8.stopPropagation(), void c({
          type: "nyx:alt-prime"
        });
        if (_055f55d9a3b8.altKey && !_055f55d9a3b8.ctrlKey && !_055f55d9a3b8.metaKey && 2 !== _055f55d9a3b8.location && t(_055f55d9a3b8.target) && /^[acxvzy]$/.test(_8a33af4be581)) {
          if (_055f55d9a3b8.preventDefault(), _055f55d9a3b8.stopPropagation(), "a" === _8a33af4be581) return void (_055f55d9a3b8.target?.select ? _055f55d9a3b8.target.select() : document.execCommand?.("selectAll"));
          if ("c" === _8a33af4be581) return void n(e(_055f55d9a3b8.target));
          if ("x" === _8a33af4be581) {
            const _8a33af4be581 = e(_055f55d9a3b8.target);
            return n(_8a33af4be581), void r(_055f55d9a3b8.target, "");
          }
          if ("v" === _8a33af4be581) return void navigator.clipboard?.readText?.().then(_8a33af4be581 => r(_055f55d9a3b8.target, _8a33af4be581)).catch(() => {
            try {
              document.execCommand?.("paste");
            } catch {}
          });
          if ("z" === _8a33af4be581) return void document.execCommand?.("undo");
          if ("y" === _8a33af4be581) return void document.execCommand?.("redo");
        }
        return !_055f55d9a3b8.altKey || _055f55d9a3b8.ctrlKey || _055f55d9a3b8.metaKey || 2 === _055f55d9a3b8.location || !/^[1-9]$/.test(_8a33af4be581) && ![ "l", "d", "t", "w", "r", "arrowleft", "arrowright", "tab" ].includes(_8a33af4be581) ? void 0 : (_055f55d9a3b8.preventDefault(), 
        _055f55d9a3b8.stopPropagation(), void c({
          type: "nyx:alt-shortcut",
          key: _8a33af4be581,
          code: _055f55d9a3b8.code || "",
          location: _055f55d9a3b8.location || 0,
          shiftKey: !!_055f55d9a3b8.shiftKey
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
  }, r = _055f55d9a3b8 => {
    if (!_055f55d9a3b8) return !1;
    try {
      return _055f55d9a3b8.document.open(), _055f55d9a3b8.document.write('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>nyx://blocked67haha</title><style>html,body{margin:0;width:100%;height:100%;background:#fff;color:#111;font:28px Raleway,Arial,sans-serif}body{display:grid;place-items:center;text-align:center}main{padding:24px}</style></head><body><main>are you trying to hack me scamma???</main></body></html>'), 
      _055f55d9a3b8.document.close(), _055f55d9a3b8.focus?.(), !0;
    } catch {
      return !1;
    }
  }, n = () => {
    const _055f55d9a3b8 = null;
    return {
      closed: !1,
      focus() {
        try {
          _055f55d9a3b8?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _055f55d9a3b8?.blur?.();
        } catch {}
      },
      close() {
        try {
          _055f55d9a3b8?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return r(_055f55d9a3b8), this;
        },
        write() {
          r(_055f55d9a3b8);
        },
        writeln() {
          r(_055f55d9a3b8);
        },
        close() {
          r(_055f55d9a3b8);
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
          r(_055f55d9a3b8);
        },
        toString: () => "nyx://blocked67haha"
      }
    };
  }, o = _055f55d9a3b8 => {
    const _8a33af4be581 = String(_055f55d9a3b8 || "").trim();
    if (/^(?:blob|data):/i.test(_8a33af4be581)) return !1;
    const _cd6195aba351 = _8a33af4be581.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_cd6195aba351);
  }, i = (_055f55d9a3b8, _8a33af4be581 = "") => {
    const _cd6195aba351 = String(_055f55d9a3b8 || "").trim();
    if (!_cd6195aba351 || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "nyx:download-request",
        url: _cd6195aba351,
        filename: String(_8a33af4be581 || ""),
        sourceUrl: String(location.href || "")
      }, "*"), !0;
    } catch {
      return !1;
    }
  };
  let c = (..._8a33af4be581) => o(_8a33af4be581[0]) && i(_8a33af4be581[0]) ? null : !e() && _055f55d9a3b8 ? _055f55d9a3b8(..._8a33af4be581) : n();
  try {
    "function" == typeof _055f55d9a3b8 && "function" == typeof Proxy && (c = new Proxy(_055f55d9a3b8, {
      apply: (_055f55d9a3b8, _8a33af4be581, _cd6195aba351) => o(_cd6195aba351[0]) && i(_cd6195aba351[0]) ? null : e() ? n() : Reflect.apply(_055f55d9a3b8, _8a33af4be581, _cd6195aba351),
      construct(_055f55d9a3b8, _8a33af4be581, _cd6195aba351) {
        if (!e()) try {
          return Reflect.construct(_055f55d9a3b8, _8a33af4be581, _cd6195aba351);
        } catch {
          return Reflect.apply(_055f55d9a3b8, window, _8a33af4be581);
        }
        return n();
      },
      get: (_055f55d9a3b8, _8a33af4be581, _cd6195aba351) => "__nyxPopupGuard" === _8a33af4be581 || ("toString" === _8a33af4be581 ? () => "function open() { [native code] }" : Reflect.get(_055f55d9a3b8, _8a33af4be581, _cd6195aba351))
    }));
  } catch {}
  const a = _055f55d9a3b8 => {
    const _8a33af4be581 = String(_055f55d9a3b8 || "").toLowerCase();
    return _8a33af4be581 && ![ "_self", "_parent", "_top" ].includes(_8a33af4be581);
  }, s = _055f55d9a3b8 => !!_055f55d9a3b8 && (!!_055f55d9a3b8.hasAttribute("download") || o(_055f55d9a3b8.href || _055f55d9a3b8.getAttribute("href") || ""));
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
    const _055f55d9a3b8 = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!s(this) || !i(this.href || this.getAttribute("href"), this.getAttribute("download") || "")) {
        if (!e() || !a(this.target)) return _055f55d9a3b8.call(this);
        n();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("click", _055f55d9a3b8 => {
    const _8a33af4be581 = _055f55d9a3b8.target?.closest?.("a[href]");
    if (_8a33af4be581) return s(_8a33af4be581) && i(_8a33af4be581.href || _8a33af4be581.getAttribute("href"), _8a33af4be581.getAttribute("download") || "") ? (_055f55d9a3b8.preventDefault(), 
    void _055f55d9a3b8.stopImmediatePropagation()) : void (e() && a(_8a33af4be581.getAttribute("target")) && (_055f55d9a3b8.preventDefault(), 
    _055f55d9a3b8.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("auxclick", _055f55d9a3b8 => {
    const _8a33af4be581 = _055f55d9a3b8.target?.closest?.("a[href]");
    if (_8a33af4be581) return s(_8a33af4be581) && i(_8a33af4be581.href || _8a33af4be581.getAttribute("href"), _8a33af4be581.getAttribute("download") || "") ? (_055f55d9a3b8.preventDefault(), 
    void _055f55d9a3b8.stopImmediatePropagation()) : void (e() && a(_8a33af4be581.getAttribute("target")) && (_055f55d9a3b8.preventDefault(), 
    _055f55d9a3b8.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("submit", _055f55d9a3b8 => {
    if (!e()) return;
    const _8a33af4be581 = _055f55d9a3b8.target;
    _8a33af4be581 && "FORM" === String(_8a33af4be581.tagName || "").toUpperCase() && a(_8a33af4be581.getAttribute("target")) && (_055f55d9a3b8.preventDefault(), 
    _055f55d9a3b8.stopImmediatePropagation(), n());
  }, !0));
  const u = _055f55d9a3b8 => {
    const _8a33af4be581 = window[_055f55d9a3b8];
    if ("function" == typeof _8a33af4be581 && !_8a33af4be581.__nyxWrapped) try {
      Object.setPrototypeOf(r, _8a33af4be581), r.prototype = _8a33af4be581.prototype, 
      Object.defineProperty(r, "__nyxWrapped", {
        value: !0
      }), window[_055f55d9a3b8] = r;
    } catch {}
    function r(_055f55d9a3b8, _cd6195aba351, _445efbb701cd) {
      let _fb8175139d55 = Number(_055f55d9a3b8), _00c2dc56719f = Number(_cd6195aba351);
      return (!Number.isFinite(_fb8175139d55) || _fb8175139d55 < 0) && (_fb8175139d55 = 0), 
      (!Number.isFinite(_00c2dc56719f) || _00c2dc56719f <= _fb8175139d55) && (_00c2dc56719f = _fb8175139d55 + .001), 
      Reflect.construct(_8a33af4be581, [ _fb8175139d55, _00c2dc56719f, null == _445efbb701cd ? "" : String(_445efbb701cd) ], new.target || r);
    }
  };
  u("VTTCue"), u("TextTrackCue");
})();
