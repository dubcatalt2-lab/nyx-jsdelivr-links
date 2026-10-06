(() => {
  if ("undefined" == typeof window || window.__nyxStudyJetGuards) return;
  window.__nyxStudyJetGuards = !0;
  const _ac1f71a98031 = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "trustedTypes", {
      configurable: !0,
      value: {
        createPolicy: (_ac1f71a98031, _e2e77d4d02bf = {}) => ({
          createHTML: _ac1f71a98031 => "function" == typeof _e2e77d4d02bf.createHTML ? _e2e77d4d02bf.createHTML(_ac1f71a98031) : _ac1f71a98031,
          createScript: _ac1f71a98031 => "function" == typeof _e2e77d4d02bf.createScript ? _e2e77d4d02bf.createScript(_ac1f71a98031) : _ac1f71a98031,
          createScriptURL: _ac1f71a98031 => "function" == typeof _e2e77d4d02bf.createScriptURL ? _e2e77d4d02bf.createScriptURL(_ac1f71a98031) : _ac1f71a98031
        })
      }
    });
  } catch {}
  try {
    const _ac1f71a98031 = Object.getOwnPropertyDescriptor(Document.prototype, "currentScript"), _e2e77d4d02bf = document.createElement("script");
    _e2e77d4d02bf.setAttribute("nonce", ""), Object.defineProperty(Document.prototype, "currentScript", {
      configurable: !0,
      get() {
        let _79590e8eccf5 = null;
        try {
          _79590e8eccf5 = _ac1f71a98031?.get?.call(this) || null;
        } catch {}
        return _79590e8eccf5 || this.querySelector?.("script[src],script") || _e2e77d4d02bf;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const t = _ac1f71a98031 => !(!_ac1f71a98031 || !_ac1f71a98031.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_ac1f71a98031.tagName || "")), e = _ac1f71a98031 => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_ac1f71a98031?.tagName || "") ? String(_ac1f71a98031.value || "").slice(_ac1f71a98031.selectionStart || 0, _ac1f71a98031.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, r = (_ac1f71a98031, _e2e77d4d02bf) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_ac1f71a98031?.tagName || "")) {
            const _79590e8eccf5 = _ac1f71a98031.selectionStart || 0, _2d16ae246c3d = _ac1f71a98031.selectionEnd || 0, _639de8e64a2f = String(_ac1f71a98031.value || "");
            _ac1f71a98031.value = _639de8e64a2f.slice(0, _79590e8eccf5) + _e2e77d4d02bf + _639de8e64a2f.slice(_2d16ae246c3d);
            const _3c46986fe58e = _79590e8eccf5 + String(_e2e77d4d02bf).length;
            return _ac1f71a98031.setSelectionRange(_3c46986fe58e, _3c46986fe58e), void _ac1f71a98031.dispatchEvent(new Event("input", {
              bubbles: !0
            }));
          }
          document.execCommand?.("insertText", !1, _e2e77d4d02bf);
        } catch {}
      }, n = async _ac1f71a98031 => {
        try {
          await (navigator.clipboard?.writeText(String(_ac1f71a98031 || "")));
        } catch {
          try {
            document.execCommand?.("copy");
          } catch {}
        }
      }, _ac1f71a98031 = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _e2e77d4d02bf = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), c = _79590e8eccf5 => {
        try {
          _ac1f71a98031?.postMessage(_79590e8eccf5, "*");
        } catch {}
        try {
          _e2e77d4d02bf && _e2e77d4d02bf !== _ac1f71a98031 && _e2e77d4d02bf.postMessage(_79590e8eccf5, "*");
        } catch {}
        try {
          window.parent?.postMessage(_79590e8eccf5, "*");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_79590e8eccf5, "*");
        } catch {}
      };
      window.addEventListener("keydown", _ac1f71a98031 => {
        const _e2e77d4d02bf = String(_ac1f71a98031.key || "").toLowerCase();
        if (_ac1f71a98031.altKey && !_ac1f71a98031.ctrlKey && !_ac1f71a98031.metaKey && 2 !== _ac1f71a98031.location && "alt" === _e2e77d4d02bf) return _ac1f71a98031.preventDefault(), 
        _ac1f71a98031.stopPropagation(), void c({
          type: "nyx:alt-prime"
        });
        if (_ac1f71a98031.altKey && !_ac1f71a98031.ctrlKey && !_ac1f71a98031.metaKey && 2 !== _ac1f71a98031.location && t(_ac1f71a98031.target) && /^[acxvzy]$/.test(_e2e77d4d02bf)) {
          if (_ac1f71a98031.preventDefault(), _ac1f71a98031.stopPropagation(), "a" === _e2e77d4d02bf) return void (_ac1f71a98031.target?.select ? _ac1f71a98031.target.select() : document.execCommand?.("selectAll"));
          if ("c" === _e2e77d4d02bf) return void n(e(_ac1f71a98031.target));
          if ("x" === _e2e77d4d02bf) {
            const _e2e77d4d02bf = e(_ac1f71a98031.target);
            return n(_e2e77d4d02bf), void r(_ac1f71a98031.target, "");
          }
          if ("v" === _e2e77d4d02bf) return void navigator.clipboard?.readText?.().then(_e2e77d4d02bf => r(_ac1f71a98031.target, _e2e77d4d02bf)).catch(() => {
            try {
              document.execCommand?.("paste");
            } catch {}
          });
          if ("z" === _e2e77d4d02bf) return void document.execCommand?.("undo");
          if ("y" === _e2e77d4d02bf) return void document.execCommand?.("redo");
        }
        return !_ac1f71a98031.altKey || _ac1f71a98031.ctrlKey || _ac1f71a98031.metaKey || 2 === _ac1f71a98031.location || !/^[1-9]$/.test(_e2e77d4d02bf) && ![ "l", "d", "t", "w", "r", "arrowleft", "arrowright", "tab" ].includes(_e2e77d4d02bf) ? void 0 : (_ac1f71a98031.preventDefault(), 
        _ac1f71a98031.stopPropagation(), void c({
          type: "nyx:alt-shortcut",
          key: _e2e77d4d02bf,
          code: _ac1f71a98031.code || "",
          location: _ac1f71a98031.location || 0,
          shiftKey: !!_ac1f71a98031.shiftKey
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
  }, r = _ac1f71a98031 => {
    if (!_ac1f71a98031) return !1;
    try {
      return _ac1f71a98031.document.open(), _ac1f71a98031.document.write('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>nyx://blocked67haha</title><style>html,body{margin:0;width:100%;height:100%;background:#fff;color:#111;font:28px Raleway,Arial,sans-serif}body{display:grid;place-items:center;text-align:center}main{padding:24px}</style></head><body><main>are you trying to hack me scamma???</main></body></html>'), 
      _ac1f71a98031.document.close(), _ac1f71a98031.focus?.(), !0;
    } catch {
      return !1;
    }
  }, n = () => {
    const _ac1f71a98031 = null;
    return {
      closed: !1,
      focus() {
        try {
          _ac1f71a98031?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _ac1f71a98031?.blur?.();
        } catch {}
      },
      close() {
        try {
          _ac1f71a98031?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return r(_ac1f71a98031), this;
        },
        write() {
          r(_ac1f71a98031);
        },
        writeln() {
          r(_ac1f71a98031);
        },
        close() {
          r(_ac1f71a98031);
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
          r(_ac1f71a98031);
        },
        toString: () => "nyx://blocked67haha"
      }
    };
  }, o = _ac1f71a98031 => {
    const _e2e77d4d02bf = String(_ac1f71a98031 || "").trim();
    if (/^(?:blob|data):/i.test(_e2e77d4d02bf)) return !1;
    const _79590e8eccf5 = _e2e77d4d02bf.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_79590e8eccf5);
  }, i = (_ac1f71a98031, _e2e77d4d02bf = "") => {
    const _79590e8eccf5 = String(_ac1f71a98031 || "").trim();
    if (!_79590e8eccf5 || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "nyx:download-request",
        url: _79590e8eccf5,
        filename: String(_e2e77d4d02bf || ""),
        sourceUrl: String(location.href || "")
      }, "*"), !0;
    } catch {
      return !1;
    }
  };
  let c = (..._e2e77d4d02bf) => o(_e2e77d4d02bf[0]) && i(_e2e77d4d02bf[0]) ? null : !e() && _ac1f71a98031 ? _ac1f71a98031(..._e2e77d4d02bf) : n();
  try {
    "function" == typeof _ac1f71a98031 && "function" == typeof Proxy && (c = new Proxy(_ac1f71a98031, {
      apply: (_ac1f71a98031, _e2e77d4d02bf, _79590e8eccf5) => o(_79590e8eccf5[0]) && i(_79590e8eccf5[0]) ? null : e() ? n() : Reflect.apply(_ac1f71a98031, _e2e77d4d02bf, _79590e8eccf5),
      construct(_ac1f71a98031, _e2e77d4d02bf, _79590e8eccf5) {
        if (!e()) try {
          return Reflect.construct(_ac1f71a98031, _e2e77d4d02bf, _79590e8eccf5);
        } catch {
          return Reflect.apply(_ac1f71a98031, window, _e2e77d4d02bf);
        }
        return n();
      },
      get: (_ac1f71a98031, _e2e77d4d02bf, _79590e8eccf5) => "__nyxPopupGuard" === _e2e77d4d02bf || ("toString" === _e2e77d4d02bf ? () => "function open() { [native code] }" : Reflect.get(_ac1f71a98031, _e2e77d4d02bf, _79590e8eccf5))
    }));
  } catch {}
  const a = _ac1f71a98031 => {
    const _e2e77d4d02bf = String(_ac1f71a98031 || "").toLowerCase();
    return _e2e77d4d02bf && ![ "_self", "_parent", "_top" ].includes(_e2e77d4d02bf);
  }, s = _ac1f71a98031 => !!_ac1f71a98031 && (!!_ac1f71a98031.hasAttribute("download") || o(_ac1f71a98031.href || _ac1f71a98031.getAttribute("href") || ""));
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
    const _ac1f71a98031 = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!s(this) || !i(this.href || this.getAttribute("href"), this.getAttribute("download") || "")) {
        if (!e() || !a(this.target)) return _ac1f71a98031.call(this);
        n();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("click", _ac1f71a98031 => {
    const _e2e77d4d02bf = _ac1f71a98031.target?.closest?.("a[href]");
    if (_e2e77d4d02bf) return s(_e2e77d4d02bf) && i(_e2e77d4d02bf.href || _e2e77d4d02bf.getAttribute("href"), _e2e77d4d02bf.getAttribute("download") || "") ? (_ac1f71a98031.preventDefault(), 
    void _ac1f71a98031.stopImmediatePropagation()) : void (e() && a(_e2e77d4d02bf.getAttribute("target")) && (_ac1f71a98031.preventDefault(), 
    _ac1f71a98031.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("auxclick", _ac1f71a98031 => {
    const _e2e77d4d02bf = _ac1f71a98031.target?.closest?.("a[href]");
    if (_e2e77d4d02bf) return s(_e2e77d4d02bf) && i(_e2e77d4d02bf.href || _e2e77d4d02bf.getAttribute("href"), _e2e77d4d02bf.getAttribute("download") || "") ? (_ac1f71a98031.preventDefault(), 
    void _ac1f71a98031.stopImmediatePropagation()) : void (e() && a(_e2e77d4d02bf.getAttribute("target")) && (_ac1f71a98031.preventDefault(), 
    _ac1f71a98031.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("submit", _ac1f71a98031 => {
    if (!e()) return;
    const _e2e77d4d02bf = _ac1f71a98031.target;
    _e2e77d4d02bf && "FORM" === String(_e2e77d4d02bf.tagName || "").toUpperCase() && a(_e2e77d4d02bf.getAttribute("target")) && (_ac1f71a98031.preventDefault(), 
    _ac1f71a98031.stopImmediatePropagation(), n());
  }, !0));
  const u = _ac1f71a98031 => {
    const _e2e77d4d02bf = window[_ac1f71a98031];
    if ("function" == typeof _e2e77d4d02bf && !_e2e77d4d02bf.__nyxWrapped) try {
      Object.setPrototypeOf(r, _e2e77d4d02bf), r.prototype = _e2e77d4d02bf.prototype, 
      Object.defineProperty(r, "__nyxWrapped", {
        value: !0
      }), window[_ac1f71a98031] = r;
    } catch {}
    function r(_ac1f71a98031, _79590e8eccf5, _2d16ae246c3d) {
      let _639de8e64a2f = Number(_ac1f71a98031), _3c46986fe58e = Number(_79590e8eccf5);
      return (!Number.isFinite(_639de8e64a2f) || _639de8e64a2f < 0) && (_639de8e64a2f = 0), 
      (!Number.isFinite(_3c46986fe58e) || _3c46986fe58e <= _639de8e64a2f) && (_3c46986fe58e = _639de8e64a2f + .001), 
      Reflect.construct(_e2e77d4d02bf, [ _639de8e64a2f, _3c46986fe58e, null == _2d16ae246c3d ? "" : String(_2d16ae246c3d) ], new.target || r);
    }
  };
  u("VTTCue"), u("TextTrackCue");
})();
