(() => {
  if ("undefined" == typeof window || window.__nyxStudyJetGuards) return;
  window.__nyxStudyJetGuards = !0;
  const _9ba96cc6d54f = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "trustedTypes", {
      configurable: !0,
      value: {
        createPolicy: (_9ba96cc6d54f, _826d3286cae0 = {}) => ({
          createHTML: _9ba96cc6d54f => "function" == typeof _826d3286cae0.createHTML ? _826d3286cae0.createHTML(_9ba96cc6d54f) : _9ba96cc6d54f,
          createScript: _9ba96cc6d54f => "function" == typeof _826d3286cae0.createScript ? _826d3286cae0.createScript(_9ba96cc6d54f) : _9ba96cc6d54f,
          createScriptURL: _9ba96cc6d54f => "function" == typeof _826d3286cae0.createScriptURL ? _826d3286cae0.createScriptURL(_9ba96cc6d54f) : _9ba96cc6d54f
        })
      }
    });
  } catch {}
  try {
    const _9ba96cc6d54f = Object.getOwnPropertyDescriptor(Document.prototype, "currentScript"), _826d3286cae0 = document.createElement("script");
    _826d3286cae0.setAttribute("nonce", ""), Object.defineProperty(Document.prototype, "currentScript", {
      configurable: !0,
      get() {
        let _1e27653261f1 = null;
        try {
          _1e27653261f1 = _9ba96cc6d54f?.get?.call(this) || null;
        } catch {}
        return _1e27653261f1 || this.querySelector?.("script[src],script") || _826d3286cae0;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const t = _9ba96cc6d54f => !(!_9ba96cc6d54f || !_9ba96cc6d54f.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_9ba96cc6d54f.tagName || "")), e = _9ba96cc6d54f => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_9ba96cc6d54f?.tagName || "") ? String(_9ba96cc6d54f.value || "").slice(_9ba96cc6d54f.selectionStart || 0, _9ba96cc6d54f.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, r = (_9ba96cc6d54f, _826d3286cae0) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_9ba96cc6d54f?.tagName || "")) {
            const _1e27653261f1 = _9ba96cc6d54f.selectionStart || 0, _11a6e14cd8cb = _9ba96cc6d54f.selectionEnd || 0, _9d31ad399139 = String(_9ba96cc6d54f.value || "");
            _9ba96cc6d54f.value = _9d31ad399139.slice(0, _1e27653261f1) + _826d3286cae0 + _9d31ad399139.slice(_11a6e14cd8cb);
            const _ee9c5213dc17 = _1e27653261f1 + String(_826d3286cae0).length;
            return _9ba96cc6d54f.setSelectionRange(_ee9c5213dc17, _ee9c5213dc17), void _9ba96cc6d54f.dispatchEvent(new Event("input", {
              bubbles: !0
            }));
          }
          document.execCommand?.("insertText", !1, _826d3286cae0);
        } catch {}
      }, n = async _9ba96cc6d54f => {
        try {
          await (navigator.clipboard?.writeText(String(_9ba96cc6d54f || "")));
        } catch {
          try {
            document.execCommand?.("copy");
          } catch {}
        }
      }, _9ba96cc6d54f = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _826d3286cae0 = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), c = _1e27653261f1 => {
        try {
          _9ba96cc6d54f?.postMessage(_1e27653261f1, "*");
        } catch {}
        try {
          _826d3286cae0 && _826d3286cae0 !== _9ba96cc6d54f && _826d3286cae0.postMessage(_1e27653261f1, "*");
        } catch {}
        try {
          window.parent?.postMessage(_1e27653261f1, "*");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_1e27653261f1, "*");
        } catch {}
      };
      window.addEventListener("keydown", _9ba96cc6d54f => {
        const _826d3286cae0 = String(_9ba96cc6d54f.key || "").toLowerCase();
        if (_9ba96cc6d54f.altKey && !_9ba96cc6d54f.ctrlKey && !_9ba96cc6d54f.metaKey && 2 !== _9ba96cc6d54f.location && "alt" === _826d3286cae0) return _9ba96cc6d54f.preventDefault(), 
        _9ba96cc6d54f.stopPropagation(), void c({
          type: "nyx:alt-prime"
        });
        if (_9ba96cc6d54f.altKey && !_9ba96cc6d54f.ctrlKey && !_9ba96cc6d54f.metaKey && 2 !== _9ba96cc6d54f.location && t(_9ba96cc6d54f.target) && /^[acxvzy]$/.test(_826d3286cae0)) {
          if (_9ba96cc6d54f.preventDefault(), _9ba96cc6d54f.stopPropagation(), "a" === _826d3286cae0) return void (_9ba96cc6d54f.target?.select ? _9ba96cc6d54f.target.select() : document.execCommand?.("selectAll"));
          if ("c" === _826d3286cae0) return void n(e(_9ba96cc6d54f.target));
          if ("x" === _826d3286cae0) {
            const _826d3286cae0 = e(_9ba96cc6d54f.target);
            return n(_826d3286cae0), void r(_9ba96cc6d54f.target, "");
          }
          if ("v" === _826d3286cae0) return void navigator.clipboard?.readText?.().then(_826d3286cae0 => r(_9ba96cc6d54f.target, _826d3286cae0)).catch(() => {
            try {
              document.execCommand?.("paste");
            } catch {}
          });
          if ("z" === _826d3286cae0) return void document.execCommand?.("undo");
          if ("y" === _826d3286cae0) return void document.execCommand?.("redo");
        }
        return !_9ba96cc6d54f.altKey || _9ba96cc6d54f.ctrlKey || _9ba96cc6d54f.metaKey || 2 === _9ba96cc6d54f.location || !/^[1-9]$/.test(_826d3286cae0) && ![ "l", "d", "t", "w", "r", "arrowleft", "arrowright", "tab" ].includes(_826d3286cae0) ? void 0 : (_9ba96cc6d54f.preventDefault(), 
        _9ba96cc6d54f.stopPropagation(), void c({
          type: "nyx:alt-shortcut",
          key: _826d3286cae0,
          code: _9ba96cc6d54f.code || "",
          location: _9ba96cc6d54f.location || 0,
          shiftKey: !!_9ba96cc6d54f.shiftKey
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
  }, r = _9ba96cc6d54f => {
    if (!_9ba96cc6d54f) return !1;
    try {
      return _9ba96cc6d54f.document.open(), _9ba96cc6d54f.document.write('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>nyx://blocked67haha</title><style>html,body{margin:0;width:100%;height:100%;background:#fff;color:#111;font:28px Raleway,Arial,sans-serif}body{display:grid;place-items:center;text-align:center}main{padding:24px}</style></head><body><main>are you trying to hack me scamma???</main></body></html>'), 
      _9ba96cc6d54f.document.close(), _9ba96cc6d54f.focus?.(), !0;
    } catch {
      return !1;
    }
  }, n = () => {
    const _9ba96cc6d54f = null;
    return {
      closed: !1,
      focus() {
        try {
          _9ba96cc6d54f?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _9ba96cc6d54f?.blur?.();
        } catch {}
      },
      close() {
        try {
          _9ba96cc6d54f?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return r(_9ba96cc6d54f), this;
        },
        write() {
          r(_9ba96cc6d54f);
        },
        writeln() {
          r(_9ba96cc6d54f);
        },
        close() {
          r(_9ba96cc6d54f);
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
          r(_9ba96cc6d54f);
        },
        toString: () => "nyx://blocked67haha"
      }
    };
  }, o = _9ba96cc6d54f => {
    const _826d3286cae0 = String(_9ba96cc6d54f || "").trim();
    if (/^(?:blob|data):/i.test(_826d3286cae0)) return !1;
    const _1e27653261f1 = _826d3286cae0.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_1e27653261f1);
  }, i = (_9ba96cc6d54f, _826d3286cae0 = "") => {
    const _1e27653261f1 = String(_9ba96cc6d54f || "").trim();
    if (!_1e27653261f1 || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "nyx:download-request",
        url: _1e27653261f1,
        filename: String(_826d3286cae0 || ""),
        sourceUrl: String(location.href || "")
      }, "*"), !0;
    } catch {
      return !1;
    }
  };
  let c = (..._826d3286cae0) => o(_826d3286cae0[0]) && i(_826d3286cae0[0]) ? null : !e() && _9ba96cc6d54f ? _9ba96cc6d54f(..._826d3286cae0) : n();
  try {
    "function" == typeof _9ba96cc6d54f && "function" == typeof Proxy && (c = new Proxy(_9ba96cc6d54f, {
      apply: (_9ba96cc6d54f, _826d3286cae0, _1e27653261f1) => o(_1e27653261f1[0]) && i(_1e27653261f1[0]) ? null : e() ? n() : Reflect.apply(_9ba96cc6d54f, _826d3286cae0, _1e27653261f1),
      construct(_9ba96cc6d54f, _826d3286cae0, _1e27653261f1) {
        if (!e()) try {
          return Reflect.construct(_9ba96cc6d54f, _826d3286cae0, _1e27653261f1);
        } catch {
          return Reflect.apply(_9ba96cc6d54f, window, _826d3286cae0);
        }
        return n();
      },
      get: (_9ba96cc6d54f, _826d3286cae0, _1e27653261f1) => "__nyxPopupGuard" === _826d3286cae0 || ("toString" === _826d3286cae0 ? () => "function open() { [native code] }" : Reflect.get(_9ba96cc6d54f, _826d3286cae0, _1e27653261f1))
    }));
  } catch {}
  const a = _9ba96cc6d54f => {
    const _826d3286cae0 = String(_9ba96cc6d54f || "").toLowerCase();
    return _826d3286cae0 && ![ "_self", "_parent", "_top" ].includes(_826d3286cae0);
  }, s = _9ba96cc6d54f => !!_9ba96cc6d54f && (!!_9ba96cc6d54f.hasAttribute("download") || o(_9ba96cc6d54f.href || _9ba96cc6d54f.getAttribute("href") || ""));
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
    const _9ba96cc6d54f = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!s(this) || !i(this.href || this.getAttribute("href"), this.getAttribute("download") || "")) {
        if (!e() || !a(this.target)) return _9ba96cc6d54f.call(this);
        n();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("click", _9ba96cc6d54f => {
    const _826d3286cae0 = _9ba96cc6d54f.target?.closest?.("a[href]");
    if (_826d3286cae0) return s(_826d3286cae0) && i(_826d3286cae0.href || _826d3286cae0.getAttribute("href"), _826d3286cae0.getAttribute("download") || "") ? (_9ba96cc6d54f.preventDefault(), 
    void _9ba96cc6d54f.stopImmediatePropagation()) : void (e() && a(_826d3286cae0.getAttribute("target")) && (_9ba96cc6d54f.preventDefault(), 
    _9ba96cc6d54f.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("auxclick", _9ba96cc6d54f => {
    const _826d3286cae0 = _9ba96cc6d54f.target?.closest?.("a[href]");
    if (_826d3286cae0) return s(_826d3286cae0) && i(_826d3286cae0.href || _826d3286cae0.getAttribute("href"), _826d3286cae0.getAttribute("download") || "") ? (_9ba96cc6d54f.preventDefault(), 
    void _9ba96cc6d54f.stopImmediatePropagation()) : void (e() && a(_826d3286cae0.getAttribute("target")) && (_9ba96cc6d54f.preventDefault(), 
    _9ba96cc6d54f.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("submit", _9ba96cc6d54f => {
    if (!e()) return;
    const _826d3286cae0 = _9ba96cc6d54f.target;
    _826d3286cae0 && "FORM" === String(_826d3286cae0.tagName || "").toUpperCase() && a(_826d3286cae0.getAttribute("target")) && (_9ba96cc6d54f.preventDefault(), 
    _9ba96cc6d54f.stopImmediatePropagation(), n());
  }, !0));
  const u = _9ba96cc6d54f => {
    const _826d3286cae0 = window[_9ba96cc6d54f];
    if ("function" == typeof _826d3286cae0 && !_826d3286cae0.__nyxWrapped) try {
      Object.setPrototypeOf(r, _826d3286cae0), r.prototype = _826d3286cae0.prototype, 
      Object.defineProperty(r, "__nyxWrapped", {
        value: !0
      }), window[_9ba96cc6d54f] = r;
    } catch {}
    function r(_9ba96cc6d54f, _1e27653261f1, _11a6e14cd8cb) {
      let _9d31ad399139 = Number(_9ba96cc6d54f), _ee9c5213dc17 = Number(_1e27653261f1);
      return (!Number.isFinite(_9d31ad399139) || _9d31ad399139 < 0) && (_9d31ad399139 = 0), 
      (!Number.isFinite(_ee9c5213dc17) || _ee9c5213dc17 <= _9d31ad399139) && (_ee9c5213dc17 = _9d31ad399139 + .001), 
      Reflect.construct(_826d3286cae0, [ _9d31ad399139, _ee9c5213dc17, null == _11a6e14cd8cb ? "" : String(_11a6e14cd8cb) ], new.target || r);
    }
  };
  u("VTTCue"), u("TextTrackCue");
})();
