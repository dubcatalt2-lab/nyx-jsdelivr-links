(() => {
  if ("undefined" == typeof window || window.__nyxScramjetGuards) return;
  window.__nyxScramjetGuards = !0;
  const _d19dbb1ee25d = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "trustedTypes", {
      configurable: !0,
      value: {
        createPolicy: (_d19dbb1ee25d, _578119018a02 = {}) => ({
          createHTML: _d19dbb1ee25d => "function" == typeof _578119018a02.createHTML ? _578119018a02.createHTML(_d19dbb1ee25d) : _d19dbb1ee25d,
          createScript: _d19dbb1ee25d => "function" == typeof _578119018a02.createScript ? _578119018a02.createScript(_d19dbb1ee25d) : _d19dbb1ee25d,
          createScriptURL: _d19dbb1ee25d => "function" == typeof _578119018a02.createScriptURL ? _578119018a02.createScriptURL(_d19dbb1ee25d) : _d19dbb1ee25d
        })
      }
    });
  } catch {}
  try {
    const _d19dbb1ee25d = Object.getOwnPropertyDescriptor(Document.prototype, "currentScript"), _578119018a02 = document.createElement("script");
    _578119018a02.setAttribute("nonce", ""), Object.defineProperty(Document.prototype, "currentScript", {
      configurable: !0,
      get() {
        let _4699cd65bad7 = null;
        try {
          _4699cd65bad7 = _d19dbb1ee25d?.get?.call(this) || null;
        } catch {}
        return _4699cd65bad7 || this.querySelector?.("script[src],script") || _578119018a02;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const t = _d19dbb1ee25d => !(!_d19dbb1ee25d || !_d19dbb1ee25d.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_d19dbb1ee25d.tagName || "")), e = _d19dbb1ee25d => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_d19dbb1ee25d?.tagName || "") ? String(_d19dbb1ee25d.value || "").slice(_d19dbb1ee25d.selectionStart || 0, _d19dbb1ee25d.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, r = (_d19dbb1ee25d, _578119018a02) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_d19dbb1ee25d?.tagName || "")) {
            const _4699cd65bad7 = _d19dbb1ee25d.selectionStart || 0, _42157a1ff429 = _d19dbb1ee25d.selectionEnd || 0, _c491deb3cfd5 = String(_d19dbb1ee25d.value || "");
            _d19dbb1ee25d.value = _c491deb3cfd5.slice(0, _4699cd65bad7) + _578119018a02 + _c491deb3cfd5.slice(_42157a1ff429);
            const _973efabf136d = _4699cd65bad7 + String(_578119018a02).length;
            return _d19dbb1ee25d.setSelectionRange(_973efabf136d, _973efabf136d), void _d19dbb1ee25d.dispatchEvent(new Event("input", {
              bubbles: !0
            }));
          }
          document.execCommand?.("insertText", !1, _578119018a02);
        } catch {}
      }, n = async _d19dbb1ee25d => {
        try {
          await (navigator.clipboard?.writeText(String(_d19dbb1ee25d || "")));
        } catch {
          try {
            document.execCommand?.("copy");
          } catch {}
        }
      }, _d19dbb1ee25d = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _578119018a02 = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), c = _4699cd65bad7 => {
        try {
          _d19dbb1ee25d?.postMessage(_4699cd65bad7, "*");
        } catch {}
        try {
          _578119018a02 && _578119018a02 !== _d19dbb1ee25d && _578119018a02.postMessage(_4699cd65bad7, "*");
        } catch {}
        try {
          window.parent?.postMessage(_4699cd65bad7, "*");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_4699cd65bad7, "*");
        } catch {}
      };
      window.addEventListener("keydown", _d19dbb1ee25d => {
        const _578119018a02 = String(_d19dbb1ee25d.key || "").toLowerCase();
        if (_d19dbb1ee25d.altKey && !_d19dbb1ee25d.ctrlKey && !_d19dbb1ee25d.metaKey && 2 !== _d19dbb1ee25d.location && "alt" === _578119018a02) return _d19dbb1ee25d.preventDefault(), 
        _d19dbb1ee25d.stopPropagation(), void c({
          type: "nyx:alt-prime"
        });
        if (_d19dbb1ee25d.altKey && !_d19dbb1ee25d.ctrlKey && !_d19dbb1ee25d.metaKey && 2 !== _d19dbb1ee25d.location && t(_d19dbb1ee25d.target) && /^[acxvzy]$/.test(_578119018a02)) {
          if (_d19dbb1ee25d.preventDefault(), _d19dbb1ee25d.stopPropagation(), "a" === _578119018a02) return void (_d19dbb1ee25d.target?.select ? _d19dbb1ee25d.target.select() : document.execCommand?.("selectAll"));
          if ("c" === _578119018a02) return void n(e(_d19dbb1ee25d.target));
          if ("x" === _578119018a02) {
            const _578119018a02 = e(_d19dbb1ee25d.target);
            return n(_578119018a02), void r(_d19dbb1ee25d.target, "");
          }
          if ("v" === _578119018a02) return void navigator.clipboard?.readText?.().then(_578119018a02 => r(_d19dbb1ee25d.target, _578119018a02)).catch(() => {
            try {
              document.execCommand?.("paste");
            } catch {}
          });
          if ("z" === _578119018a02) return void document.execCommand?.("undo");
          if ("y" === _578119018a02) return void document.execCommand?.("redo");
        }
        return !_d19dbb1ee25d.altKey || _d19dbb1ee25d.ctrlKey || _d19dbb1ee25d.metaKey || 2 === _d19dbb1ee25d.location || !/^[1-9]$/.test(_578119018a02) && ![ "l", "d", "t", "w", "r", "arrowleft", "arrowright", "tab" ].includes(_578119018a02) ? void 0 : (_d19dbb1ee25d.preventDefault(), 
        _d19dbb1ee25d.stopPropagation(), void c({
          type: "nyx:alt-shortcut",
          key: _578119018a02,
          code: _d19dbb1ee25d.code || "",
          location: _d19dbb1ee25d.location || 0,
          shiftKey: !!_d19dbb1ee25d.shiftKey
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
  }, r = _d19dbb1ee25d => {
    if (!_d19dbb1ee25d) return !1;
    try {
      return _d19dbb1ee25d.document.open(), _d19dbb1ee25d.document.write('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>nyx://blocked67haha</title><style>html,body{margin:0;width:100%;height:100%;background:#fff;color:#111;font:28px Raleway,Arial,sans-serif}body{display:grid;place-items:center;text-align:center}main{padding:24px}</style></head><body><main>are you trying to hack me scamma???</main></body></html>'), 
      _d19dbb1ee25d.document.close(), _d19dbb1ee25d.focus?.(), !0;
    } catch {
      return !1;
    }
  }, n = () => {
    const _d19dbb1ee25d = null;
    return {
      closed: !1,
      focus() {
        try {
          _d19dbb1ee25d?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _d19dbb1ee25d?.blur?.();
        } catch {}
      },
      close() {
        try {
          _d19dbb1ee25d?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return r(_d19dbb1ee25d), this;
        },
        write() {
          r(_d19dbb1ee25d);
        },
        writeln() {
          r(_d19dbb1ee25d);
        },
        close() {
          r(_d19dbb1ee25d);
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
          r(_d19dbb1ee25d);
        },
        toString: () => "nyx://blocked67haha"
      }
    };
  }, o = _d19dbb1ee25d => {
    const _578119018a02 = String(_d19dbb1ee25d || "").trim();
    if (/^(?:blob|data):/i.test(_578119018a02)) return !1;
    const _4699cd65bad7 = _578119018a02.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_4699cd65bad7);
  }, i = (_d19dbb1ee25d, _578119018a02 = "") => {
    const _4699cd65bad7 = String(_d19dbb1ee25d || "").trim();
    if (!_4699cd65bad7 || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "nyx:download-request",
        url: _4699cd65bad7,
        filename: String(_578119018a02 || ""),
        sourceUrl: String(location.href || "")
      }, "*"), !0;
    } catch {
      return !1;
    }
  };
  let c = (..._578119018a02) => o(_578119018a02[0]) && i(_578119018a02[0]) ? null : !e() && _d19dbb1ee25d ? _d19dbb1ee25d(..._578119018a02) : n();
  try {
    "function" == typeof _d19dbb1ee25d && "function" == typeof Proxy && (c = new Proxy(_d19dbb1ee25d, {
      apply: (_d19dbb1ee25d, _578119018a02, _4699cd65bad7) => o(_4699cd65bad7[0]) && i(_4699cd65bad7[0]) ? null : e() ? n() : Reflect.apply(_d19dbb1ee25d, _578119018a02, _4699cd65bad7),
      construct(_d19dbb1ee25d, _578119018a02, _4699cd65bad7) {
        if (!e()) try {
          return Reflect.construct(_d19dbb1ee25d, _578119018a02, _4699cd65bad7);
        } catch {
          return Reflect.apply(_d19dbb1ee25d, window, _578119018a02);
        }
        return n();
      },
      get: (_d19dbb1ee25d, _578119018a02, _4699cd65bad7) => "__nyxPopupGuard" === _578119018a02 || ("toString" === _578119018a02 ? () => "function open() { [native code] }" : Reflect.get(_d19dbb1ee25d, _578119018a02, _4699cd65bad7))
    }));
  } catch {}
  const a = _d19dbb1ee25d => {
    const _578119018a02 = String(_d19dbb1ee25d || "").toLowerCase();
    return _578119018a02 && ![ "_self", "_parent", "_top" ].includes(_578119018a02);
  }, s = _d19dbb1ee25d => !!_d19dbb1ee25d && (!!_d19dbb1ee25d.hasAttribute("download") || o(_d19dbb1ee25d.href || _d19dbb1ee25d.getAttribute("href") || ""));
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
    const _d19dbb1ee25d = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!s(this) || !i(this.href || this.getAttribute("href"), this.getAttribute("download") || "")) {
        if (!e() || !a(this.target)) return _d19dbb1ee25d.call(this);
        n();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("click", _d19dbb1ee25d => {
    const _578119018a02 = _d19dbb1ee25d.target?.closest?.("a[href]");
    if (_578119018a02) return s(_578119018a02) && i(_578119018a02.href || _578119018a02.getAttribute("href"), _578119018a02.getAttribute("download") || "") ? (_d19dbb1ee25d.preventDefault(), 
    void _d19dbb1ee25d.stopImmediatePropagation()) : void (e() && a(_578119018a02.getAttribute("target")) && (_d19dbb1ee25d.preventDefault(), 
    _d19dbb1ee25d.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("auxclick", _d19dbb1ee25d => {
    const _578119018a02 = _d19dbb1ee25d.target?.closest?.("a[href]");
    if (_578119018a02) return s(_578119018a02) && i(_578119018a02.href || _578119018a02.getAttribute("href"), _578119018a02.getAttribute("download") || "") ? (_d19dbb1ee25d.preventDefault(), 
    void _d19dbb1ee25d.stopImmediatePropagation()) : void (e() && a(_578119018a02.getAttribute("target")) && (_d19dbb1ee25d.preventDefault(), 
    _d19dbb1ee25d.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("submit", _d19dbb1ee25d => {
    if (!e()) return;
    const _578119018a02 = _d19dbb1ee25d.target;
    _578119018a02 && "FORM" === String(_578119018a02.tagName || "").toUpperCase() && a(_578119018a02.getAttribute("target")) && (_d19dbb1ee25d.preventDefault(), 
    _d19dbb1ee25d.stopImmediatePropagation(), n());
  }, !0));
  const u = _d19dbb1ee25d => {
    const _578119018a02 = window[_d19dbb1ee25d];
    if ("function" == typeof _578119018a02 && !_578119018a02.__nyxWrapped) try {
      Object.setPrototypeOf(r, _578119018a02), r.prototype = _578119018a02.prototype, 
      Object.defineProperty(r, "__nyxWrapped", {
        value: !0
      }), window[_d19dbb1ee25d] = r;
    } catch {}
    function r(_d19dbb1ee25d, _4699cd65bad7, _42157a1ff429) {
      let _c491deb3cfd5 = Number(_d19dbb1ee25d), _973efabf136d = Number(_4699cd65bad7);
      return (!Number.isFinite(_c491deb3cfd5) || _c491deb3cfd5 < 0) && (_c491deb3cfd5 = 0), 
      (!Number.isFinite(_973efabf136d) || _973efabf136d <= _c491deb3cfd5) && (_973efabf136d = _c491deb3cfd5 + .001), 
      Reflect.construct(_578119018a02, [ _c491deb3cfd5, _973efabf136d, null == _42157a1ff429 ? "" : String(_42157a1ff429) ], new.target || r);
    }
  };
  u("VTTCue"), u("TextTrackCue");
})();
