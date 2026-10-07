(() => {
  let _0xf7a1f1_0 = !1;
  const _0xf7a1f1_1 = new WeakSet, _0xf7a1f1_2 = new WeakSet, _0xf7a1f1_3 = [], _0xf7a1f1_4 = () => {
    _0xf7a1f1_0 || (_0xf7a1f1_0 = !0, _0xf7a1f1_3.forEach(_0xf7a1f1_0 => _0xf7a1f1_0.disconnect()), 
    clearTimeout(_0xf7a1f1_7), parent.postMessage({
      type: "\x6e\x79\x78\x3a\x73\x70\x6f\x6e\x73\x6f\x72\x2d\x72\x65\x61\x64\x79"
    }, "\x2a"));
  }, _0xf7a1f1_5 = _0xf7a1f1_2 => {
    if (!_0xf7a1f1_0) {
      for (const _0xf7a1f1_0 of _0xf7a1f1_2.querySelectorAll("\x69\x66\x72\x61\x6d\x65\x2c\x69\x6d\x67\x2c\x76\x69\x64\x65\x6f")) if (!_0xf7a1f1_1.has(_0xf7a1f1_0)) if (_0xf7a1f1_1.add(_0xf7a1f1_0), 
      "\x49\x4d\x47" === _0xf7a1f1_0.tagName) {
        const _0xf7a1f1_1 = () => {
          _0xf7a1f1_0.naturalWidth > 1 && _0xf7a1f1_0.naturalHeight > 1 && _0xf7a1f1_4();
        };
        _0xf7a1f1_0.addEventListener("\x6c\x6f\x61\x64", _0xf7a1f1_1, {
          once: !0
        }), _0xf7a1f1_0.complete && _0xf7a1f1_1();
      } else if ("\x56\x49\x44\x45\x4f" === _0xf7a1f1_0.tagName) _0xf7a1f1_0.addEventListener("\x6c\x6f\x61\x64\x65\x64\x64\x61\x74\x61", _0xf7a1f1_4, {
        once: !0
      }); else {
        const _0xf7a1f1_1 = () => {
          try {
            const _0xf7a1f1_1 = _0xf7a1f1_0.contentDocument;
            if (_0xf7a1f1_1) return void _0xf7a1f1_6(_0xf7a1f1_1);
          } catch {}
          Number(_0xf7a1f1_0.width) > 20 && Number(_0xf7a1f1_0.height) > 20 && _0xf7a1f1_4();
        };
        _0xf7a1f1_0.addEventListener("\x6c\x6f\x61\x64", _0xf7a1f1_1);
        try {
          "\x63\x6f\x6d\x70\x6c\x65\x74\x65" === _0xf7a1f1_0.contentDocument?.readyState && _0xf7a1f1_1();
        } catch {}
      }
      _0xf7a1f1_2 !== document && [ ..._0xf7a1f1_2.querySelectorAll("\x61\x5b\x68\x72\x65\x66\x5d") ].some(_0xf7a1f1_0 => _0xf7a1f1_0.textContent.trim()) && _0xf7a1f1_4();
    }
  };
  function _0xf7a1f1_6(_0xf7a1f1_0) {
    if (!_0xf7a1f1_0.body || _0xf7a1f1_2.has(_0xf7a1f1_0)) return;
    _0xf7a1f1_2.add(_0xf7a1f1_0);
    const _0xf7a1f1_1 = new MutationObserver(() => _0xf7a1f1_5(_0xf7a1f1_0));
    _0xf7a1f1_1.observe(_0xf7a1f1_0.body, {
      childList: !0,
      subtree: !0
    }), _0xf7a1f1_3.push(_0xf7a1f1_1), _0xf7a1f1_5(_0xf7a1f1_0);
  }
  const _0xf7a1f1_7 = setTimeout(() => {
    _0xf7a1f1_0 || (_0xf7a1f1_3.forEach(_0xf7a1f1_0 => _0xf7a1f1_0.disconnect()), parent.postMessage({
      type: "\x6e\x79\x78\x3a\x73\x70\x6f\x6e\x73\x6f\x72\x2d\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65"
    }, "\x2a"));
  }, 12e3);
  _0xf7a1f1_6(document), document.body.hasAttribute("\x64\x61\x74\x61\x2d\x72\x65\x73\x69\x7a\x65\x2d\x61\x64") && new ResizeObserver(() => parent.postMessage({
    type: "\x6e\x79\x78\x3a\x73\x70\x6f\x6e\x73\x6f\x72\x2d\x73\x69\x7a\x65",
    height: document.body.scrollHeight
  }, "\x2a")).observe(document.body);
})();
