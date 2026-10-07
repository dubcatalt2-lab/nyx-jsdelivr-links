export function createPublisherFrame({path: _0x74c815_0, width: _0x74c815_1, height: _0x74c815_2, onReady: _0x74c815_3, onUnavailable: _0x74c815_4, dynamicHeight: _0x74c815_5 = !1}) {
  const _0x74c815_6 = document.createElement("\x69\x66\x72\x61\x6d\x65");
  _0x74c815_6.title = "\x41\x64\x76\x65\x72\x74\x69\x73\x65\x6d\x65\x6e\x74", _0x74c815_6.width = _0x74c815_1, _0x74c815_6.height = _0x74c815_2, 
  _0x74c815_6.setAttribute("\x73\x61\x6e\x64\x62\x6f\x78", "\x61\x6c\x6c\x6f\x77\x2d\x73\x63\x72\x69\x70\x74\x73\x20\x61\x6c\x6c\x6f\x77\x2d\x73\x61\x6d\x65\x2d\x6f\x72\x69\x67\x69\x6e\x20\x61\x6c\x6c\x6f\x77\x2d\x70\x6f\x70\x75\x70\x73\x20\x61\x6c\x6c\x6f\x77\x2d\x70\x6f\x70\x75\x70\x73\x2d\x74\x6f\x2d\x65\x73\x63\x61\x70\x65\x2d\x73\x61\x6e\x64\x62\x6f\x78"), 
  _0x74c815_6.dataset.nyxSponsorPath = _0x74c815_0, _0x74c815_6.referrerPolicy = "\x73\x74\x72\x69\x63\x74\x2d\x6f\x72\x69\x67\x69\x6e\x2d\x77\x68\x65\x6e\x2d\x63\x72\x6f\x73\x73\x2d\x6f\x72\x69\x67\x69\x6e", 
  _0x74c815_6.style.visibility = "\x68\x69\x64\x64\x65\x6e", _0x74c815_6.src = "data:text/html;charset=utf-8,";
  const _0x74c815_7 = new AbortController;
  let _0x74c815_8 = !1;
  const _0x74c815_9 = setTimeout(_0x74c815_b, 18e3);
  function _0x74c815_a(_0x74c815_0 = !1) {
    clearTimeout(_0x74c815_9), _0x74c815_7.abort(), _0x74c815_0 || window.removeEventListener("\x6d\x65\x73\x73\x61\x67\x65", _0x74c815_c), 
    _0x74c815_6.removeEventListener("\x65\x72\x72\x6f\x72", _0x74c815_b);
  }
  function _0x74c815_b() {
    _0x74c815_8 || (_0x74c815_8 = !0, _0x74c815_a(), _0x74c815_6.remove(), _0x74c815_4?.());
  }
  function _0x74c815_c(_0x74c815_0) {
    if (_0x74c815_0.source === _0x74c815_6.contentWindow) if (_0x74c815_5 && "\x6e\x79\x78\x3a\x73\x70\x6f\x6e\x73\x6f\x72\x2d\x73\x69\x7a\x65" === _0x74c815_0.data?.type && Number.isFinite(_0x74c815_0.data.height)) _0x74c815_6.style.height = Math.max(120, Math.min(1200, Math.ceil(_0x74c815_0.data.height))) + "\x70\x78"; else if (!_0x74c815_8) return "\x6e\x79\x78\x3a\x73\x70\x6f\x6e\x73\x6f\x72\x2d\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65" === _0x74c815_0.data?.type ? _0x74c815_b() : void ("\x6e\x79\x78\x3a\x73\x70\x6f\x6e\x73\x6f\x72\x2d\x72\x65\x61\x64\x79" === _0x74c815_0.data?.type && (_0x74c815_8 = !0, 
    _0x74c815_a(_0x74c815_5), _0x74c815_6.style.visibility = "\x76\x69\x73\x69\x62\x6c\x65", _0x74c815_3?.()));
  }
  return (async () => {
    try {
      const _0x74c815_1 = new URL(_0x74c815_0, location.href);
      if (_0x74c815_1.origin !== location.origin || ![ "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x70\x73\x2f\x73\x70\x6f\x6e\x73\x6f\x72\x2f\x62\x61\x6e\x6e\x65\x72\x2e\x68\x74\x6d\x6c", "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x70\x73\x2f\x73\x70\x6f\x6e\x73\x6f\x72\x2f\x73\x69\x64\x65\x2e\x68\x74\x6d\x6c", "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x70\x73\x2f\x73\x70\x6f\x6e\x73\x6f\x72\x2f\x6e\x61\x74\x69\x76\x65\x2e\x68\x74\x6d\x6c", "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x70\x73\x2f\x73\x70\x6f\x6e\x73\x6f\x72\x2f\x73\x6f\x63\x69\x61\x6c\x2e\x68\x74\x6d\x6c" ].includes(_0x74c815_1.pathname)) throw new Error("\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x70\x6c\x61\x63\x65\x6d\x65\x6e\x74");
      const _0x74c815_2 = await fetch(_0x74c815_1, {
        signal: _0x74c815_7.signal
      });
      if (!_0x74c815_2.ok) throw new Error("\x50\x6c\x61\x63\x65\x6d\x65\x6e\x74\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65");
      const _0x74c815_3 = await _0x74c815_2.text();
      if (_0x74c815_8) return;
      const _0x74c815_4 = new URL("\x2e", _0x74c815_1).href.replaceAll("\x26", "\x26\x61\x6d\x70\x3b").replaceAll("\x22", "\x26\x71\x75\x6f\x74\x3b"), _0x74c815_5 = _0x74c815_3.replace(/<head(?:\s[^>]*)?>/i, _0x74c815_0 => _0x74c815_0 + "\x3c\x62\x61\x73\x65\x20\x68\x72\x65\x66\x3d\x22" + _0x74c815_4 + "\x22\x3e");
      _0x74c815_6.src = "data:text/html;charset=utf-8," + encodeURIComponent(_0x74c815_5);
    } catch {
      _0x74c815_8 || _0x74c815_b();
    }
  })(), window.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", _0x74c815_c), _0x74c815_6.addEventListener("\x65\x72\x72\x6f\x72", _0x74c815_b), 
  {
    element: _0x74c815_6,
    destroy() {
      _0x74c815_8 = !0, _0x74c815_a(), _0x74c815_6.remove();
    }
  };
}
