(() => {
  if ("undefined" == typeof window || window.__nyxStudyJetGuards) return;
  window.__nyxStudyJetGuards = !0;
  const _5a69ef545914 = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "trustedTypes", {
      configurable: !0,
      value: {
        createPolicy: (_5a69ef545914, _a28ef236e3b5 = {}) => ({
          createHTML: _5a69ef545914 => "function" == typeof _a28ef236e3b5.createHTML ? _a28ef236e3b5.createHTML(_5a69ef545914) : _5a69ef545914,
          createScript: _5a69ef545914 => "function" == typeof _a28ef236e3b5.createScript ? _a28ef236e3b5.createScript(_5a69ef545914) : _5a69ef545914,
          createScriptURL: _5a69ef545914 => "function" == typeof _a28ef236e3b5.createScriptURL ? _a28ef236e3b5.createScriptURL(_5a69ef545914) : _5a69ef545914
        })
      }
    });
  } catch {}
  try {
    const _5a69ef545914 = Object.getOwnPropertyDescriptor(Document.prototype, "currentScript"), _a28ef236e3b5 = document.createElement("script");
    _a28ef236e3b5.setAttribute("nonce", ""), Object.defineProperty(Document.prototype, "currentScript", {
      configurable: !0,
      get() {
        let _97d67085ca44 = null;
        try {
          _97d67085ca44 = _5a69ef545914?.get?.call(this) || null;
        } catch {}
        return _97d67085ca44 || this.querySelector?.("script[src],script") || _a28ef236e3b5;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const t = _5a69ef545914 => !(!_5a69ef545914 || !_5a69ef545914.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_5a69ef545914.tagName || "")), e = _5a69ef545914 => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_5a69ef545914?.tagName || "") ? String(_5a69ef545914.value || "").slice(_5a69ef545914.selectionStart || 0, _5a69ef545914.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, r = (_5a69ef545914, _a28ef236e3b5) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_5a69ef545914?.tagName || "")) {
            const _97d67085ca44 = _5a69ef545914.selectionStart || 0, _6d0638331a1f = _5a69ef545914.selectionEnd || 0, _315ed443bc5a = String(_5a69ef545914.value || "");
            _5a69ef545914.value = _315ed443bc5a.slice(0, _97d67085ca44) + _a28ef236e3b5 + _315ed443bc5a.slice(_6d0638331a1f);
            const _747972bcc951 = _97d67085ca44 + String(_a28ef236e3b5).length;
            return _5a69ef545914.setSelectionRange(_747972bcc951, _747972bcc951), void _5a69ef545914.dispatchEvent(new Event("input", {
              bubbles: !0
            }));
          }
          document.execCommand?.("insertText", !1, _a28ef236e3b5);
        } catch {}
      }, n = async _5a69ef545914 => {
        try {
          await (navigator.clipboard?.writeText(String(_5a69ef545914 || "")));
        } catch {
          try {
            document.execCommand?.("copy");
          } catch {}
        }
      }, _5a69ef545914 = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _a28ef236e3b5 = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), c = _97d67085ca44 => {
        try {
          _5a69ef545914?.postMessage(_97d67085ca44, "*");
        } catch {}
        try {
          _a28ef236e3b5 && _a28ef236e3b5 !== _5a69ef545914 && _a28ef236e3b5.postMessage(_97d67085ca44, "*");
        } catch {}
        try {
          window.parent?.postMessage(_97d67085ca44, "*");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_97d67085ca44, "*");
        } catch {}
      };
      window.addEventListener("keydown", _5a69ef545914 => {
        const _a28ef236e3b5 = String(_5a69ef545914.key || "").toLowerCase();
        if (_5a69ef545914.altKey && !_5a69ef545914.ctrlKey && !_5a69ef545914.metaKey && 2 !== _5a69ef545914.location && "alt" === _a28ef236e3b5) return _5a69ef545914.preventDefault(), 
        _5a69ef545914.stopPropagation(), void c({
          type: "nyx:alt-prime"
        });
        if (_5a69ef545914.altKey && !_5a69ef545914.ctrlKey && !_5a69ef545914.metaKey && 2 !== _5a69ef545914.location && t(_5a69ef545914.target) && /^[acxvzy]$/.test(_a28ef236e3b5)) {
          if (_5a69ef545914.preventDefault(), _5a69ef545914.stopPropagation(), "a" === _a28ef236e3b5) return void (_5a69ef545914.target?.select ? _5a69ef545914.target.select() : document.execCommand?.("selectAll"));
          if ("c" === _a28ef236e3b5) return void n(e(_5a69ef545914.target));
          if ("x" === _a28ef236e3b5) {
            const _a28ef236e3b5 = e(_5a69ef545914.target);
            return n(_a28ef236e3b5), void r(_5a69ef545914.target, "");
          }
          if ("v" === _a28ef236e3b5) return void navigator.clipboard?.readText?.().then(_a28ef236e3b5 => r(_5a69ef545914.target, _a28ef236e3b5)).catch(() => {
            try {
              document.execCommand?.("paste");
            } catch {}
          });
          if ("z" === _a28ef236e3b5) return void document.execCommand?.("undo");
          if ("y" === _a28ef236e3b5) return void document.execCommand?.("redo");
        }
        return !_5a69ef545914.altKey || _5a69ef545914.ctrlKey || _5a69ef545914.metaKey || 2 === _5a69ef545914.location || !/^[1-9]$/.test(_a28ef236e3b5) && ![ "l", "d", "t", "w", "r", "arrowleft", "arrowright", "tab" ].includes(_a28ef236e3b5) ? void 0 : (_5a69ef545914.preventDefault(), 
        _5a69ef545914.stopPropagation(), void c({
          type: "nyx:alt-shortcut",
          key: _a28ef236e3b5,
          code: _5a69ef545914.code || "",
          location: _5a69ef545914.location || 0,
          shiftKey: !!_5a69ef545914.shiftKey
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
  }, r = _5a69ef545914 => {
    if (!_5a69ef545914) return !1;
    try {
      return _5a69ef545914.document.open(), _5a69ef545914.document.write('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>nyx://blocked67haha</title><style>html,body{margin:0;width:100%;height:100%;background:#fff;color:#111;font:28px Raleway,Arial,sans-serif}body{display:grid;place-items:center;text-align:center}main{padding:24px}</style></head><body><main>are you trying to hack me scamma???</main></body></html>'), 
      _5a69ef545914.document.close(), _5a69ef545914.focus?.(), !0;
    } catch {
      return !1;
    }
  }, n = () => {
    const _5a69ef545914 = null;
    return {
      closed: !1,
      focus() {
        try {
          _5a69ef545914?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _5a69ef545914?.blur?.();
        } catch {}
      },
      close() {
        try {
          _5a69ef545914?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return r(_5a69ef545914), this;
        },
        write() {
          r(_5a69ef545914);
        },
        writeln() {
          r(_5a69ef545914);
        },
        close() {
          r(_5a69ef545914);
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
          r(_5a69ef545914);
        },
        toString: () => "nyx://blocked67haha"
      }
    };
  }, o = _5a69ef545914 => {
    const _a28ef236e3b5 = String(_5a69ef545914 || "").trim();
    if (/^(?:blob|data):/i.test(_a28ef236e3b5)) return !1;
    const _97d67085ca44 = _a28ef236e3b5.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_97d67085ca44);
  }, i = (_5a69ef545914, _a28ef236e3b5 = "") => {
    const _97d67085ca44 = String(_5a69ef545914 || "").trim();
    if (!_97d67085ca44 || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "nyx:download-request",
        url: _97d67085ca44,
        filename: String(_a28ef236e3b5 || ""),
        sourceUrl: String(location.href || "")
      }, "*"), !0;
    } catch {
      return !1;
    }
  };
  let c = (..._a28ef236e3b5) => o(_a28ef236e3b5[0]) && i(_a28ef236e3b5[0]) ? null : !e() && _5a69ef545914 ? _5a69ef545914(..._a28ef236e3b5) : n();
  try {
    "function" == typeof _5a69ef545914 && "function" == typeof Proxy && (c = new Proxy(_5a69ef545914, {
      apply: (_5a69ef545914, _a28ef236e3b5, _97d67085ca44) => o(_97d67085ca44[0]) && i(_97d67085ca44[0]) ? null : e() ? n() : Reflect.apply(_5a69ef545914, _a28ef236e3b5, _97d67085ca44),
      construct(_5a69ef545914, _a28ef236e3b5, _97d67085ca44) {
        if (!e()) try {
          return Reflect.construct(_5a69ef545914, _a28ef236e3b5, _97d67085ca44);
        } catch {
          return Reflect.apply(_5a69ef545914, window, _a28ef236e3b5);
        }
        return n();
      },
      get: (_5a69ef545914, _a28ef236e3b5, _97d67085ca44) => "__nyxPopupGuard" === _a28ef236e3b5 || ("toString" === _a28ef236e3b5 ? () => "function open() { [native code] }" : Reflect.get(_5a69ef545914, _a28ef236e3b5, _97d67085ca44))
    }));
  } catch {}
  const a = _5a69ef545914 => {
    const _a28ef236e3b5 = String(_5a69ef545914 || "").toLowerCase();
    return _a28ef236e3b5 && ![ "_self", "_parent", "_top" ].includes(_a28ef236e3b5);
  }, s = _5a69ef545914 => !!_5a69ef545914 && (!!_5a69ef545914.hasAttribute("download") || o(_5a69ef545914.href || _5a69ef545914.getAttribute("href") || ""));
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
    const _5a69ef545914 = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!s(this) || !i(this.href || this.getAttribute("href"), this.getAttribute("download") || "")) {
        if (!e() || !a(this.target)) return _5a69ef545914.call(this);
        n();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("click", _5a69ef545914 => {
    const _a28ef236e3b5 = _5a69ef545914.target?.closest?.("a[href]");
    if (_a28ef236e3b5) return s(_a28ef236e3b5) && i(_a28ef236e3b5.href || _a28ef236e3b5.getAttribute("href"), _a28ef236e3b5.getAttribute("download") || "") ? (_5a69ef545914.preventDefault(), 
    void _5a69ef545914.stopImmediatePropagation()) : void (e() && a(_a28ef236e3b5.getAttribute("target")) && (_5a69ef545914.preventDefault(), 
    _5a69ef545914.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("auxclick", _5a69ef545914 => {
    const _a28ef236e3b5 = _5a69ef545914.target?.closest?.("a[href]");
    if (_a28ef236e3b5) return s(_a28ef236e3b5) && i(_a28ef236e3b5.href || _a28ef236e3b5.getAttribute("href"), _a28ef236e3b5.getAttribute("download") || "") ? (_5a69ef545914.preventDefault(), 
    void _5a69ef545914.stopImmediatePropagation()) : void (e() && a(_a28ef236e3b5.getAttribute("target")) && (_5a69ef545914.preventDefault(), 
    _5a69ef545914.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("submit", _5a69ef545914 => {
    if (!e()) return;
    const _a28ef236e3b5 = _5a69ef545914.target;
    _a28ef236e3b5 && "FORM" === String(_a28ef236e3b5.tagName || "").toUpperCase() && a(_a28ef236e3b5.getAttribute("target")) && (_5a69ef545914.preventDefault(), 
    _5a69ef545914.stopImmediatePropagation(), n());
  }, !0));
  const u = _5a69ef545914 => {
    const _a28ef236e3b5 = window[_5a69ef545914];
    if ("function" == typeof _a28ef236e3b5 && !_a28ef236e3b5.__nyxWrapped) try {
      Object.setPrototypeOf(r, _a28ef236e3b5), r.prototype = _a28ef236e3b5.prototype, 
      Object.defineProperty(r, "__nyxWrapped", {
        value: !0
      }), window[_5a69ef545914] = r;
    } catch {}
    function r(_5a69ef545914, _97d67085ca44, _6d0638331a1f) {
      let _315ed443bc5a = Number(_5a69ef545914), _747972bcc951 = Number(_97d67085ca44);
      return (!Number.isFinite(_315ed443bc5a) || _315ed443bc5a < 0) && (_315ed443bc5a = 0), 
      (!Number.isFinite(_747972bcc951) || _747972bcc951 <= _315ed443bc5a) && (_747972bcc951 = _315ed443bc5a + .001), 
      Reflect.construct(_a28ef236e3b5, [ _315ed443bc5a, _747972bcc951, null == _6d0638331a1f ? "" : String(_6d0638331a1f) ], new.target || r);
    }
  };
  u("VTTCue"), u("TextTrackCue");
})();
