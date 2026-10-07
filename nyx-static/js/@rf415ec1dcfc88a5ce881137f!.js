(() => {
  let _0xaa455f_0 = !1, _0xaa455f_1 = null, _0xaa455f_2 = null;
  const _0xaa455f_3 = () => {
    _0xaa455f_1?.remove(), _0xaa455f_1 = null;
  }, _0xaa455f_4 = document.createElement("\x64\x69\x76");
  _0xaa455f_4.id = "\x6e\x79\x78\x41\x77\x61\x79\x43\x6f\x76\x65\x72", _0xaa455f_4.dataset.nyxOwnedOverlay = "", _0xaa455f_4.hidden = !0, 
  _0xaa455f_4.inert = !0, _0xaa455f_4.setAttribute("\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e", "\x74\x72\x75\x65"), _0xaa455f_4.setAttribute("\x70\x6f\x70\x6f\x76\x65\x72", "\x6d\x61\x6e\x75\x61\x6c");
  const _0xaa455f_5 = document.createElement("\x69\x6d\x67");
  _0xaa455f_5.src = "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x73\x73\x65\x74\x73\x2f\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x73\x2f\x73\x74\x75\x64\x79\x2d\x61\x77\x61\x79\x2d\x63\x6f\x76\x65\x72\x2e\x70\x6e\x67", _0xaa455f_5.alt = "", 
  _0xaa455f_5.draggable = !1, _0xaa455f_4.append(_0xaa455f_5), document.body.append(_0xaa455f_4);
  let _0xaa455f_6, _0xaa455f_7, _0xaa455f_8 = !1;
  function _0xaa455f_9() {
    if (!_0xaa455f_0) if (clearInterval(_0xaa455f_7), document.hidden || _0xaa455f_8) {
      _0xaa455f_3(), _0xaa455f_4.hidden = !1;
      try {
        _0xaa455f_4.showPopover?.();
      } catch {}
      _0xaa455f_8 && !document.hidden && (_0xaa455f_7 = setInterval(() => {
        document.hasFocus() && (_0xaa455f_8 = !1, _0xaa455f_9());
      }, 100));
    } else {
      try {
        _0xaa455f_4.hidePopover?.();
      } catch {}
      _0xaa455f_4.hidden = !0;
    }
  }
  document.addEventListener("\x76\x69\x73\x69\x62\x69\x6c\x69\x74\x79\x63\x68\x61\x6e\x67\x65", () => {
    _0xaa455f_8 = !document.hidden && !document.hasFocus(), _0xaa455f_9();
  }), addEventListener("\x62\x6c\x75\x72", () => {
    clearTimeout(_0xaa455f_6), _0xaa455f_6 = setTimeout(() => {
      _0xaa455f_8 = !document.hasFocus(), _0xaa455f_9();
    }, 0);
  });
  const _0xaa455f_a = () => {
    clearTimeout(_0xaa455f_6), _0xaa455f_8 = !1, _0xaa455f_9();
  };
  function _0xaa455f_b(_0xaa455f_1) {
    if (_0xaa455f_1.repeat) return;
    if (!("\x46\x31\x32" === _0xaa455f_1.key || (_0xaa455f_1.ctrlKey || _0xaa455f_1.metaKey) && _0xaa455f_1.shiftKey && [ "\x69", "\x6a", "\x63" ].includes(_0xaa455f_1.key.toLowerCase()))) return;
    if (_0xaa455f_1.preventDefault(), _0xaa455f_1.stopImmediatePropagation(), _0xaa455f_0) return;
    _0xaa455f_0 = !0, clearTimeout(_0xaa455f_6), clearInterval(_0xaa455f_7), _0xaa455f_3(), 
    window.stop(), window.dispatchEvent(new PageTransitionEvent("\x70\x61\x67\x65\x68\x69\x64\x65", {
      persisted: !1
    })), document.querySelectorAll("\x61\x75\x64\x69\x6f\x2c\x76\x69\x64\x65\x6f").forEach(_0xaa455f_0 => _0xaa455f_0.pause()), 
    document.open(), document.write("\x3c\x21\x64\x6f\x63\x74\x79\x70\x65\x20\x68\x74\x6d\x6c\x3e\x3c\x68\x74\x6d\x6c\x20\x6c\x61\x6e\x67\x3d\x22\x65\x6e\x22\x3e\x3c\x68\x65\x61\x64\x3e\x3c\x6d\x65\x74\x61\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x22\x75\x74\x66\x2d\x38\x22\x3e\x3c\x74\x69\x74\x6c\x65\x3e\x3c\x2f\x74\x69\x74\x6c\x65\x3e\x3c\x2f\x68\x65\x61\x64\x3e\x3c\x62\x6f\x64\x79\x20\x73\x74\x79\x6c\x65\x3d\x22\x6d\x61\x72\x67\x69\x6e\x3a\x30\x3b\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x3a\x23\x66\x66\x66\x22\x3e\x3c\x2f\x62\x6f\x64\x79\x3e\x3c\x2f\x68\x74\x6d\x6c\x3e"), 
    document.close();
    const _0xaa455f_2 = document.body, _0xaa455f_4 = document.head;
    new MutationObserver(() => {
      _0xaa455f_2.childNodes.length && _0xaa455f_2.replaceChildren(), _0xaa455f_4.querySelectorAll("\x73\x63\x72\x69\x70\x74\x2c\x6c\x69\x6e\x6b\x2c\x73\x74\x79\x6c\x65").forEach(_0xaa455f_0 => _0xaa455f_0.remove());
    }).observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }
  addEventListener("\x66\x6f\x63\x75\x73", _0xaa455f_a), document.addEventListener("\x66\x6f\x63\x75\x73\x69\x6e", _0xaa455f_a), 
  addEventListener("\x70\x61\x67\x65\x73\x68\x6f\x77", _0xaa455f_a), _0xaa455f_9();
  const _0xaa455f_c = new WeakSet;
  !function _0xaa455f_4(_0xaa455f_5) {
    if (_0xaa455f_c.has(_0xaa455f_5)) return;
    _0xaa455f_c.add(_0xaa455f_5), _0xaa455f_5.addEventListener("\x6b\x65\x79\x64\x6f\x77\x6e", _0xaa455f_b, !0);
    try {
      const _0xaa455f_4 = new URL(_0xaa455f_5.URL);
      (_0xaa455f_5 === document || _0xaa455f_4.origin === location.origin && /^\/(?:apps\/(?!sponsor\/)|assets\/games\/)/.test(_0xaa455f_4.pathname)) && _0xaa455f_5.addEventListener("\x63\x6f\x6e\x74\x65\x78\x74\x6d\x65\x6e\x75", _0xaa455f_4 => function(_0xaa455f_4, _0xaa455f_5 = document) {
        if (_0xaa455f_0) return;
        _0xaa455f_4.preventDefault(), _0xaa455f_3(), _0xaa455f_2 = document.activeElement;
        const _0xaa455f_6 = _0xaa455f_4.target?.closest?.("\x69\x6e\x70\x75\x74\x2c\x74\x65\x78\x74\x61\x72\x65\x61\x2c\x5b\x63\x6f\x6e\x74\x65\x6e\x74\x65\x64\x69\x74\x61\x62\x6c\x65\x3d\x22\x74\x72\x75\x65\x22\x5d"), _0xaa455f_7 = _0xaa455f_6 && "\x6e\x75\x6d\x62\x65\x72" == typeof _0xaa455f_6.selectionStart ? _0xaa455f_6.value.slice(_0xaa455f_6.selectionStart, _0xaa455f_6.selectionEnd) : String(_0xaa455f_5.getSelection() || ""), _0xaa455f_8 = [ [ "\x42\x61\x63\x6b", "\x62\x61\x63\x6b", "\x5b\x64\x61\x74\x61\x2d\x77\x6f\x72\x6b\x73\x70\x61\x63\x65\x2d\x73\x68\x65\x6c\x6c\x2d\x62\x61\x63\x6b\x5d" ], [ "\x46\x6f\x72\x77\x61\x72\x64", "\x66\x6f\x72\x77\x61\x72\x64", "\x5b\x64\x61\x74\x61\x2d\x77\x6f\x72\x6b\x73\x70\x61\x63\x65\x2d\x73\x68\x65\x6c\x6c\x2d\x66\x6f\x72\x77\x61\x72\x64\x5d" ], [ "\x52\x65\x6c\x6f\x61\x64\x20\x74\x61\x62", "\x72\x65\x6c\x6f\x61\x64", "\x5b\x64\x61\x74\x61\x2d\x77\x6f\x72\x6b\x73\x70\x61\x63\x65\x2d\x73\x68\x65\x6c\x6c\x2d\x72\x65\x6c\x6f\x61\x64\x5d" ], [ "\x4e\x65\x77\x20\x74\x61\x62", "\x70\x6c\x75\x73", "\x5b\x64\x61\x74\x61\x2d\x77\x6f\x72\x6b\x73\x70\x61\x63\x65\x2d\x73\x68\x65\x6c\x6c\x2d\x6e\x65\x77\x2d\x74\x61\x62\x5d" ], [ "\x53\x65\x74\x74\x69\x6e\x67\x73", "\x73\x65\x74\x74\x69\x6e\x67\x73", "\x5b\x64\x61\x74\x61\x2d\x6e\x79\x78\x2d\x64\x6f\x63\x6b\x2d\x69\x74\x65\x6d\x3d\x22\x73\x65\x74\x74\x69\x6e\x67\x73\x22\x5d" ] ].map(([_0xaa455f_0, _0xaa455f_1, _0xaa455f_2]) => ({
          label: _0xaa455f_0,
          icon: _0xaa455f_1,
          disabled: !document.querySelector(_0xaa455f_2) || document.querySelector(_0xaa455f_2).disabled,
          run: () => document.querySelector(_0xaa455f_2)?.click()
        }));
        _0xaa455f_7 && _0xaa455f_8.unshift({
          label: "\x43\x6f\x70\x79",
          icon: "\x63\x6f\x70\x79",
          run: () => navigator.clipboard.writeText(_0xaa455f_7).catch(() => {})
        }), _0xaa455f_6 && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _0xaa455f_6.select && _0xaa455f_8.unshift({
          label: "\x53\x65\x6c\x65\x63\x74\x20\x61\x6c\x6c",
          icon: "\x63\x6f\x70\x79",
          run: () => {
            _0xaa455f_6.focus(), _0xaa455f_6.select();
          }
        }), _0xaa455f_1 = document.createElement("\x64\x69\x76"), _0xaa455f_1.className = "\x6e\x79\x78\x2d\x63\x6f\x6e\x74\x65\x78\x74\x2d\x6d\x65\x6e\x75", 
        _0xaa455f_1.dataset.nyxOwnedOverlay = "", _0xaa455f_1.setAttribute("\x72\x6f\x6c\x65", "\x6d\x65\x6e\x75"), 
        _0xaa455f_1.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", "\x4e\x79\x78");
        for (const _0xaa455f_0 of _0xaa455f_8) {
          const _0xaa455f_4 = document.createElement("\x62\x75\x74\x74\x6f\x6e");
          _0xaa455f_4.type = "\x62\x75\x74\x74\x6f\x6e", _0xaa455f_4.setAttribute("\x72\x6f\x6c\x65", "\x6d\x65\x6e\x75\x69\x74\x65\x6d"), _0xaa455f_4.disabled = !!_0xaa455f_0.disabled, 
          _0xaa455f_4.innerHTML = `\x3c\x73\x76\x67\x20\x76\x69\x65\x77\x42\x6f\x78\x3d\x22\x30\x20\x30\x20\x32\x34\x20\x32\x34\x22\x20\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e\x3d\x22\x74\x72\x75\x65\x22\x3e\x3c\x70\x61\x74\x68\x20\x64\x3d\x22${_0xaa455f_d[_0xaa455f_0.icon]}\x22\x3e\x3c\x2f\x70\x61\x74\x68\x3e\x3c\x2f\x73\x76\x67\x3e\x3c\x73\x70\x61\x6e\x3e\x3c\x2f\x73\x70\x61\x6e\x3e`, 
          _0xaa455f_4.querySelector("\x73\x70\x61\x6e").textContent = _0xaa455f_0.label, _0xaa455f_4.addEventListener("\x63\x6c\x69\x63\x6b", () => {
            _0xaa455f_3(), _0xaa455f_2?.focus?.(), _0xaa455f_0.run();
          }), _0xaa455f_1.append(_0xaa455f_4);
        }
        document.body.append(_0xaa455f_1);
        const _0xaa455f_9 = _0xaa455f_1.getBoundingClientRect();
        let _0xaa455f_a = _0xaa455f_4.clientX, _0xaa455f_b = _0xaa455f_4.clientY, _0xaa455f_c = _0xaa455f_5.defaultView;
        try {
          for (;_0xaa455f_c && _0xaa455f_c !== window; ) {
            const _0xaa455f_0 = _0xaa455f_c.frameElement;
            if (!_0xaa455f_0) break;
            const _0xaa455f_1 = _0xaa455f_0.getBoundingClientRect();
            _0xaa455f_a += _0xaa455f_1.left, _0xaa455f_b += _0xaa455f_1.top, _0xaa455f_c = _0xaa455f_c.parent;
          }
        } catch {}
        _0xaa455f_1.style.left = Math.max(8, Math.min(_0xaa455f_a, innerWidth - _0xaa455f_9.width - 8)) + "\x70\x78", 
        _0xaa455f_1.style.top = Math.max(8, Math.min(_0xaa455f_b, innerHeight - _0xaa455f_9.height - 8)) + "\x70\x78", 
        _0xaa455f_1.querySelector("\x62\x75\x74\x74\x6f\x6e\x3a\x6e\x6f\x74\x28\x3a\x64\x69\x73\x61\x62\x6c\x65\x64\x29")?.focus();
      }(_0xaa455f_4, _0xaa455f_5));
    } catch {}
    const _0xaa455f_6 = _0xaa455f_0 => {
      try {
        _0xaa455f_0.contentDocument && _0xaa455f_4(_0xaa455f_0.contentDocument);
      } catch {}
    };
    _0xaa455f_5.addEventListener("\x6c\x6f\x61\x64", _0xaa455f_0 => {
      "\x49\x46\x52\x41\x4d\x45" === _0xaa455f_0.target?.tagName && _0xaa455f_6(_0xaa455f_0.target);
    }, !0), _0xaa455f_5.querySelectorAll("\x69\x66\x72\x61\x6d\x65").forEach(_0xaa455f_6);
  }(document);
  const _0xaa455f_d = {
    back: "\x6d\x31\x35\x20\x31\x38\x2d\x36\x2d\x36\x20\x36\x2d\x36",
    forward: "\x6d\x39\x20\x31\x38\x20\x36\x2d\x36\x2d\x36\x2d\x36",
    reload: "\x4d\x32\x30\x20\x31\x31\x61\x38\x20\x38\x20\x30\x20\x31\x20\x30\x2d\x32\x2e\x33\x35\x20\x35\x2e\x36\x35\x4d\x32\x30\x20\x34\x76\x37\x68\x2d\x37",
    plus: "\x4d\x31\x32\x20\x35\x76\x31\x34\x4d\x35\x20\x31\x32\x68\x31\x34",
    settings: "\x4d\x34\x20\x36\x68\x31\x36\x4d\x34\x20\x31\x32\x68\x31\x36\x4d\x34\x20\x31\x38\x68\x31\x36\x4d\x38\x20\x33\x76\x36\x4d\x31\x36\x20\x39\x76\x36\x4d\x31\x30\x20\x31\x35\x76\x36",
    copy: "\x4d\x39\x20\x39\x68\x31\x31\x76\x31\x31\x48\x39\x7a\x4d\x35\x20\x31\x35\x48\x33\x56\x33\x68\x31\x32\x76\x32"
  };
  document.addEventListener("\x70\x6f\x69\x6e\x74\x65\x72\x64\x6f\x77\x6e", _0xaa455f_0 => {
    _0xaa455f_1 && !_0xaa455f_1.contains(_0xaa455f_0.target) && _0xaa455f_3();
  }, !0), document.addEventListener("\x6b\x65\x79\x64\x6f\x77\x6e", _0xaa455f_0 => {
    if (_0xaa455f_1) if ("\x45\x73\x63\x61\x70\x65" === _0xaa455f_0.key) _0xaa455f_0.preventDefault(), 
    _0xaa455f_3(), _0xaa455f_2?.focus?.(); else if ([ "\x41\x72\x72\x6f\x77\x44\x6f\x77\x6e", "\x41\x72\x72\x6f\x77\x55\x70", "\x48\x6f\x6d\x65", "\x45\x6e\x64" ].includes(_0xaa455f_0.key)) {
      _0xaa455f_0.preventDefault();
      const _0xaa455f_2 = [ ..._0xaa455f_1.querySelectorAll("\x62\x75\x74\x74\x6f\x6e\x3a\x6e\x6f\x74\x28\x3a\x64\x69\x73\x61\x62\x6c\x65\x64\x29") ], _0xaa455f_3 = _0xaa455f_2.indexOf(document.activeElement), _0xaa455f_4 = "\x48\x6f\x6d\x65" === _0xaa455f_0.key ? 0 : "\x45\x6e\x64" === _0xaa455f_0.key ? _0xaa455f_2.length - 1 : (_0xaa455f_3 + ("\x41\x72\x72\x6f\x77\x44\x6f\x77\x6e" === _0xaa455f_0.key ? 1 : -1) + _0xaa455f_2.length) % _0xaa455f_2.length;
      _0xaa455f_2[_0xaa455f_4]?.focus();
    }
  }), addEventListener("\x72\x65\x73\x69\x7a\x65", _0xaa455f_3), addEventListener("\x62\x6c\x75\x72", _0xaa455f_3);
})();
