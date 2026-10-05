(() => {
  if ("undefined" == typeof window || window.__nyxScramjetGuards) return;
  window.__nyxScramjetGuards = !0;
  const _5a8e265dd564 = window.open?.bind(window);
  if (!window.trustedTypes) try {
    Object.defineProperty(window, "trustedTypes", {
      configurable: !0,
      value: {
        createPolicy: (_5a8e265dd564, _3efdf49897eb = {}) => ({
          createHTML: _5a8e265dd564 => "function" == typeof _3efdf49897eb.createHTML ? _3efdf49897eb.createHTML(_5a8e265dd564) : _5a8e265dd564,
          createScript: _5a8e265dd564 => "function" == typeof _3efdf49897eb.createScript ? _3efdf49897eb.createScript(_5a8e265dd564) : _5a8e265dd564,
          createScriptURL: _5a8e265dd564 => "function" == typeof _3efdf49897eb.createScriptURL ? _3efdf49897eb.createScriptURL(_5a8e265dd564) : _5a8e265dd564
        })
      }
    });
  } catch {}
  try {
    const _5a8e265dd564 = Object.getOwnPropertyDescriptor(Document.prototype, "currentScript"), _3efdf49897eb = document.createElement("script");
    _3efdf49897eb.setAttribute("nonce", ""), Object.defineProperty(Document.prototype, "currentScript", {
      configurable: !0,
      get() {
        let _93bcde199b59 = null;
        try {
          _93bcde199b59 = _5a8e265dd564?.get?.call(this) || null;
        } catch {}
        return _93bcde199b59 || this.querySelector?.("script[src],script") || _3efdf49897eb;
      }
    });
  } catch {}
  try {
    if (!window.__nyxRuntimeShortcuts) {
      window.__nyxRuntimeShortcuts = !0;
      const t = _5a8e265dd564 => !(!_5a8e265dd564 || !_5a8e265dd564.isContentEditable && !/^(INPUT|TEXTAREA|SELECT)$/i.test(_5a8e265dd564.tagName || "")), e = _5a8e265dd564 => {
        try {
          return /^(INPUT|TEXTAREA)$/i.test(_5a8e265dd564?.tagName || "") ? String(_5a8e265dd564.value || "").slice(_5a8e265dd564.selectionStart || 0, _5a8e265dd564.selectionEnd || 0) : String(getSelection?.() || "");
        } catch {
          return "";
        }
      }, r = (_5a8e265dd564, _3efdf49897eb) => {
        try {
          if (/^(INPUT|TEXTAREA)$/i.test(_5a8e265dd564?.tagName || "")) {
            const _93bcde199b59 = _5a8e265dd564.selectionStart || 0, _c7fe96279731 = _5a8e265dd564.selectionEnd || 0, _1d6ec4c1d3df = String(_5a8e265dd564.value || "");
            _5a8e265dd564.value = _1d6ec4c1d3df.slice(0, _93bcde199b59) + _3efdf49897eb + _1d6ec4c1d3df.slice(_c7fe96279731);
            const _f26c89d76eaf = _93bcde199b59 + String(_3efdf49897eb).length;
            return _5a8e265dd564.setSelectionRange(_f26c89d76eaf, _f26c89d76eaf), void _5a8e265dd564.dispatchEvent(new Event("input", {
              bubbles: !0
            }));
          }
          document.execCommand?.("insertText", !1, _3efdf49897eb);
        } catch {}
      }, n = async _5a8e265dd564 => {
        try {
          await (navigator.clipboard?.writeText(String(_5a8e265dd564 || "")));
        } catch {
          try {
            document.execCommand?.("copy");
          } catch {}
        }
      }, _5a8e265dd564 = (() => {
        try {
          return window.parent;
        } catch {
          return null;
        }
      })(), _3efdf49897eb = (() => {
        try {
          return window.top;
        } catch {
          return null;
        }
      })(), c = _93bcde199b59 => {
        try {
          _5a8e265dd564?.postMessage(_93bcde199b59, "*");
        } catch {}
        try {
          _3efdf49897eb && _3efdf49897eb !== _5a8e265dd564 && _3efdf49897eb.postMessage(_93bcde199b59, "*");
        } catch {}
        try {
          window.parent?.postMessage(_93bcde199b59, "*");
        } catch {}
        try {
          window.top && window.top !== window.parent && window.top.postMessage(_93bcde199b59, "*");
        } catch {}
      };
      window.addEventListener("keydown", _5a8e265dd564 => {
        const _3efdf49897eb = String(_5a8e265dd564.key || "").toLowerCase();
        if (_5a8e265dd564.altKey && !_5a8e265dd564.ctrlKey && !_5a8e265dd564.metaKey && 2 !== _5a8e265dd564.location && "alt" === _3efdf49897eb) return _5a8e265dd564.preventDefault(), 
        _5a8e265dd564.stopPropagation(), void c({
          type: "nyx:alt-prime"
        });
        if (_5a8e265dd564.altKey && !_5a8e265dd564.ctrlKey && !_5a8e265dd564.metaKey && 2 !== _5a8e265dd564.location && t(_5a8e265dd564.target) && /^[acxvzy]$/.test(_3efdf49897eb)) {
          if (_5a8e265dd564.preventDefault(), _5a8e265dd564.stopPropagation(), "a" === _3efdf49897eb) return void (_5a8e265dd564.target?.select ? _5a8e265dd564.target.select() : document.execCommand?.("selectAll"));
          if ("c" === _3efdf49897eb) return void n(e(_5a8e265dd564.target));
          if ("x" === _3efdf49897eb) {
            const _3efdf49897eb = e(_5a8e265dd564.target);
            return n(_3efdf49897eb), void r(_5a8e265dd564.target, "");
          }
          if ("v" === _3efdf49897eb) return void navigator.clipboard?.readText?.().then(_3efdf49897eb => r(_5a8e265dd564.target, _3efdf49897eb)).catch(() => {
            try {
              document.execCommand?.("paste");
            } catch {}
          });
          if ("z" === _3efdf49897eb) return void document.execCommand?.("undo");
          if ("y" === _3efdf49897eb) return void document.execCommand?.("redo");
        }
        return !_5a8e265dd564.altKey || _5a8e265dd564.ctrlKey || _5a8e265dd564.metaKey || 2 === _5a8e265dd564.location || !/^[1-9]$/.test(_3efdf49897eb) && ![ "l", "d", "t", "w", "r", "arrowleft", "arrowright", "tab" ].includes(_3efdf49897eb) ? void 0 : (_5a8e265dd564.preventDefault(), 
        _5a8e265dd564.stopPropagation(), void c({
          type: "nyx:alt-shortcut",
          key: _3efdf49897eb,
          code: _5a8e265dd564.code || "",
          location: _5a8e265dd564.location || 0,
          shiftKey: !!_5a8e265dd564.shiftKey
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
  }, r = _5a8e265dd564 => {
    if (!_5a8e265dd564) return !1;
    try {
      return _5a8e265dd564.document.open(), _5a8e265dd564.document.write('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>nyx://blocked67haha</title><style>html,body{margin:0;width:100%;height:100%;background:#fff;color:#111;font:28px Raleway,Arial,sans-serif}body{display:grid;place-items:center;text-align:center}main{padding:24px}</style></head><body><main>are you trying to hack me scamma???</main></body></html>'), 
      _5a8e265dd564.document.close(), _5a8e265dd564.focus?.(), !0;
    } catch {
      return !1;
    }
  }, n = () => {
    const _5a8e265dd564 = null;
    return {
      closed: !1,
      focus() {
        try {
          _5a8e265dd564?.focus?.();
        } catch {}
      },
      blur() {
        try {
          _5a8e265dd564?.blur?.();
        } catch {}
      },
      close() {
        try {
          _5a8e265dd564?.close?.();
        } catch {}
        this.closed = !0;
      },
      postMessage() {},
      document: {
        open() {
          return r(_5a8e265dd564), this;
        },
        write() {
          r(_5a8e265dd564);
        },
        writeln() {
          r(_5a8e265dd564);
        },
        close() {
          r(_5a8e265dd564);
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
          r(_5a8e265dd564);
        },
        toString: () => "nyx://blocked67haha"
      }
    };
  }, o = _5a8e265dd564 => {
    const _3efdf49897eb = String(_5a8e265dd564 || "").trim();
    if (/^(?:blob|data):/i.test(_3efdf49897eb)) return !1;
    const _93bcde199b59 = _3efdf49897eb.split(/[?#]/)[0].toLowerCase();
    return /.(?:apk|appx|bat|bin|cmd|com|crx|deb|dmg|exe|iso|jar|msi|pkg|scr|wsf|zip|7z|rar)$/i.test(_93bcde199b59);
  }, i = (_5a8e265dd564, _3efdf49897eb = "") => {
    const _93bcde199b59 = String(_5a8e265dd564 || "").trim();
    if (!_93bcde199b59 || !window.parent || window.parent === window) return !1;
    try {
      return window.parent.postMessage({
        type: "nyx:download-request",
        url: _93bcde199b59,
        filename: String(_3efdf49897eb || ""),
        sourceUrl: String(location.href || "")
      }, "*"), !0;
    } catch {
      return !1;
    }
  };
  let c = (..._3efdf49897eb) => o(_3efdf49897eb[0]) && i(_3efdf49897eb[0]) ? null : !e() && _5a8e265dd564 ? _5a8e265dd564(..._3efdf49897eb) : n();
  try {
    "function" == typeof _5a8e265dd564 && "function" == typeof Proxy && (c = new Proxy(_5a8e265dd564, {
      apply: (_5a8e265dd564, _3efdf49897eb, _93bcde199b59) => o(_93bcde199b59[0]) && i(_93bcde199b59[0]) ? null : e() ? n() : Reflect.apply(_5a8e265dd564, _3efdf49897eb, _93bcde199b59),
      construct(_5a8e265dd564, _3efdf49897eb, _93bcde199b59) {
        if (!e()) try {
          return Reflect.construct(_5a8e265dd564, _3efdf49897eb, _93bcde199b59);
        } catch {
          return Reflect.apply(_5a8e265dd564, window, _3efdf49897eb);
        }
        return n();
      },
      get: (_5a8e265dd564, _3efdf49897eb, _93bcde199b59) => "__nyxPopupGuard" === _3efdf49897eb || ("toString" === _3efdf49897eb ? () => "function open() { [native code] }" : Reflect.get(_5a8e265dd564, _3efdf49897eb, _93bcde199b59))
    }));
  } catch {}
  const a = _5a8e265dd564 => {
    const _3efdf49897eb = String(_5a8e265dd564 || "").toLowerCase();
    return _3efdf49897eb && ![ "_self", "_parent", "_top" ].includes(_3efdf49897eb);
  }, s = _5a8e265dd564 => !!_5a8e265dd564 && (!!_5a8e265dd564.hasAttribute("download") || o(_5a8e265dd564.href || _5a8e265dd564.getAttribute("href") || ""));
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
    const _5a8e265dd564 = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function() {
      if (!s(this) || !i(this.href || this.getAttribute("href"), this.getAttribute("download") || "")) {
        if (!e() || !a(this.target)) return _5a8e265dd564.call(this);
        n();
      }
    };
  } catch {}
  document && !window.__nyxPopupWarningListeners && (window.__nyxPopupWarningListeners = !0, 
  document.addEventListener("click", _5a8e265dd564 => {
    const _3efdf49897eb = _5a8e265dd564.target?.closest?.("a[href]");
    if (_3efdf49897eb) return s(_3efdf49897eb) && i(_3efdf49897eb.href || _3efdf49897eb.getAttribute("href"), _3efdf49897eb.getAttribute("download") || "") ? (_5a8e265dd564.preventDefault(), 
    void _5a8e265dd564.stopImmediatePropagation()) : void (e() && a(_3efdf49897eb.getAttribute("target")) && (_5a8e265dd564.preventDefault(), 
    _5a8e265dd564.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("auxclick", _5a8e265dd564 => {
    const _3efdf49897eb = _5a8e265dd564.target?.closest?.("a[href]");
    if (_3efdf49897eb) return s(_3efdf49897eb) && i(_3efdf49897eb.href || _3efdf49897eb.getAttribute("href"), _3efdf49897eb.getAttribute("download") || "") ? (_5a8e265dd564.preventDefault(), 
    void _5a8e265dd564.stopImmediatePropagation()) : void (e() && a(_3efdf49897eb.getAttribute("target")) && (_5a8e265dd564.preventDefault(), 
    _5a8e265dd564.stopImmediatePropagation(), n()));
  }, !0), document.addEventListener("submit", _5a8e265dd564 => {
    if (!e()) return;
    const _3efdf49897eb = _5a8e265dd564.target;
    _3efdf49897eb && "FORM" === String(_3efdf49897eb.tagName || "").toUpperCase() && a(_3efdf49897eb.getAttribute("target")) && (_5a8e265dd564.preventDefault(), 
    _5a8e265dd564.stopImmediatePropagation(), n());
  }, !0));
  const u = _5a8e265dd564 => {
    const _3efdf49897eb = window[_5a8e265dd564];
    if ("function" == typeof _3efdf49897eb && !_3efdf49897eb.__nyxWrapped) try {
      Object.setPrototypeOf(r, _3efdf49897eb), r.prototype = _3efdf49897eb.prototype, 
      Object.defineProperty(r, "__nyxWrapped", {
        value: !0
      }), window[_5a8e265dd564] = r;
    } catch {}
    function r(_5a8e265dd564, _93bcde199b59, _c7fe96279731) {
      let _1d6ec4c1d3df = Number(_5a8e265dd564), _f26c89d76eaf = Number(_93bcde199b59);
      return (!Number.isFinite(_1d6ec4c1d3df) || _1d6ec4c1d3df < 0) && (_1d6ec4c1d3df = 0), 
      (!Number.isFinite(_f26c89d76eaf) || _f26c89d76eaf <= _1d6ec4c1d3df) && (_f26c89d76eaf = _1d6ec4c1d3df + .001), 
      Reflect.construct(_3efdf49897eb, [ _1d6ec4c1d3df, _f26c89d76eaf, null == _c7fe96279731 ? "" : String(_c7fe96279731) ], new.target || r);
    }
  };
  u("VTTCue"), u("TextTrackCue");
})();
