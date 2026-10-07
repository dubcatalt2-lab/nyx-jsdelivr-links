window.dropStartupReady = new Promise(_0x06050a_0 => {
  const _0x06050a_1 = document.getElementById("\x73\x74\x75\x64\x79\x72\x65\x61\x64\x79\x2d\x73\x74\x61\x72\x74\x75\x70");
  let _0x06050a_2, _0x06050a_3 = !1, _0x06050a_4 = !1;
  const _0x06050a_5 = new AbortController, _0x06050a_6 = new WeakSet, _0x06050a_7 = () => {
    _0x06050a_3 || _0x06050a_4 || (_0x06050a_3 = !0, clearTimeout(_0x06050a_2), clearTimeout(_0x06050a_c), 
    _0x06050a_5.abort(), clearInterval(_0x06050a_b), _0x06050a_1?.remove(), document.title = "\x44\x72\x6f\x70", 
    document.documentElement.classList.remove("\x73\x74\x61\x72\x74\x75\x70\x2d\x63\x6f\x76\x65\x72\x65\x64"), _0x06050a_0());
  }, _0x06050a_8 = _0x06050a_0 => {
    !_0x06050a_0.isTrusted || _0x06050a_3 || _0x06050a_4 || (_0x06050a_4 = !0, clearTimeout(_0x06050a_2), 
    clearTimeout(_0x06050a_c), _0x06050a_5.abort(), clearInterval(_0x06050a_b), _0x06050a_1.dataset.staying = "\x74\x72\x75\x65");
  }, _0x06050a_9 = () => {
    if (!_0x06050a_3 && !_0x06050a_4) try {
      const _0x06050a_0 = _0x06050a_1.contentDocument;
      if (!_0x06050a_0 || _0x06050a_6.has(_0x06050a_0)) return;
      _0x06050a_6.add(_0x06050a_0);
      for (const _0x06050a_1 of [ "\x70\x6f\x69\x6e\x74\x65\x72\x64\x6f\x77\x6e", "\x6b\x65\x79\x64\x6f\x77\x6e", "\x77\x68\x65\x65\x6c", "\x74\x6f\x75\x63\x68\x73\x74\x61\x72\x74" ]) _0x06050a_0.addEventListener(_0x06050a_1, _0x06050a_8, {
        capture: !0,
        passive: !0,
        signal: _0x06050a_5.signal
      });
    } catch {}
  }, _0x06050a_a = () => {
    _0x06050a_3 || _0x06050a_4 || (_0x06050a_9(), _0x06050a_2 || (_0x06050a_2 = setTimeout(_0x06050a_7, 3e3)));
  }, _0x06050a_b = setInterval(_0x06050a_9, 25);
  _0x06050a_9();
  const _0x06050a_c = setTimeout(_0x06050a_7, 8e3);
  _0x06050a_1?.addEventListener("\x6c\x6f\x61\x64", _0x06050a_a, {
    once: !0
  }), _0x06050a_1?.addEventListener("\x65\x72\x72\x6f\x72", _0x06050a_a, {
    once: !0
  });
  try {
    (!_0x06050a_1 || "\x63\x6f\x6d\x70\x6c\x65\x74\x65" === _0x06050a_1.contentDocument?.readyState && _0x06050a_1.contentWindow.location.pathname.endsWith("\x2f\x73\x74\x75\x64\x79\x72\x65\x61\x64\x79\x2f\x69\x6e\x64\x65\x78\x2e\x68\x74\x6d\x6c")) && _0x06050a_a();
  } catch {
    _0x06050a_a();
  }
});
