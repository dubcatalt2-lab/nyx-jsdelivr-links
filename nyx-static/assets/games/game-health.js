(() => {
  const _0x57c10e_0 = document.currentScript, _0x57c10e_1 = _0x57c10e_0?.dataset.provider;
  if (_0x57c10e_1) {
    const _0x57c10e_0 = new URLSearchParams(location.search).get("\x67\x61\x6d\x65"), _0x57c10e_2 = new Set, _0x57c10e_3 = _0x57c10e_3 => {
      !_0x57c10e_0 || _0x57c10e_2.has(_0x57c10e_3) || _0x57c10e_2.size >= 2 || (_0x57c10e_2.add(_0x57c10e_3), 
      fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x67\x61\x6d\x65\x73\x2f\x72\x65\x70\x6f\x72\x74\x73", {
        method: "\x50\x4f\x53\x54",
        headers: {
          "\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65": "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e"
        },
        body: JSON.stringify({
          provider: _0x57c10e_1,
          game: _0x57c10e_0,
          reason: _0x57c10e_3
        }),
        keepalive: !0
      }).catch(() => {}));
    };
    return window.nyxReportGameFailure = _0x57c10e_3, void addEventListener("\x6d\x65\x73\x73\x61\x67\x65", _0x57c10e_0 => {
      const _0x57c10e_1 = document.querySelector("\x23\x67\x61\x6d\x65\x46\x72\x61\x6d\x65\x2c\x23\x67\x61\x6d\x65");
      _0x57c10e_0.source === _0x57c10e_1?.contentWindow && "\x6e\x79\x78\x3a\x67\x61\x6d\x65\x2d\x68\x65\x61\x6c\x74\x68" === _0x57c10e_0.data?.type && [ "\x6e\x6f\x2d\x72\x65\x6e\x64\x65\x72", "\x72\x65\x73\x6f\x75\x72\x63\x65\x2d\x65\x72\x72\x6f\x72" ].includes(_0x57c10e_0.data.reason) && _0x57c10e_3(_0x57c10e_0.data.reason);
    });
  }
  let _0x57c10e_2 = !1, _0x57c10e_3 = !1, _0x57c10e_4 = 0, _0x57c10e_5 = performance.now();
  const _0x57c10e_6 = [], _0x57c10e_7 = () => {
    _0x57c10e_2 = !0;
    for (const _0x57c10e_0 of _0x57c10e_6) _0x57c10e_0();
    _0x57c10e_6.length = 0;
  };
  for (const [_0x57c10e_9, _0x57c10e_a] of [ [ "\x43\x61\x6e\x76\x61\x73\x52\x65\x6e\x64\x65\x72\x69\x6e\x67\x43\x6f\x6e\x74\x65\x78\x74\x32\x44", [ "\x64\x72\x61\x77\x49\x6d\x61\x67\x65", "\x66\x69\x6c\x6c\x54\x65\x78\x74", "\x73\x74\x72\x6f\x6b\x65", "\x70\x75\x74\x49\x6d\x61\x67\x65\x44\x61\x74\x61" ] ], [ "\x57\x65\x62\x47\x4c\x52\x65\x6e\x64\x65\x72\x69\x6e\x67\x43\x6f\x6e\x74\x65\x78\x74", [ "\x64\x72\x61\x77\x41\x72\x72\x61\x79\x73", "\x64\x72\x61\x77\x45\x6c\x65\x6d\x65\x6e\x74\x73" ] ], [ "\x57\x65\x62\x47\x4c\x32\x52\x65\x6e\x64\x65\x72\x69\x6e\x67\x43\x6f\x6e\x74\x65\x78\x74", [ "\x64\x72\x61\x77\x41\x72\x72\x61\x79\x73", "\x64\x72\x61\x77\x45\x6c\x65\x6d\x65\x6e\x74\x73", "\x64\x72\x61\x77\x41\x72\x72\x61\x79\x73\x49\x6e\x73\x74\x61\x6e\x63\x65\x64", "\x64\x72\x61\x77\x45\x6c\x65\x6d\x65\x6e\x74\x73\x49\x6e\x73\x74\x61\x6e\x63\x65\x64" ] ] ]) {
    const _0x57c10e_0 = globalThis[_0x57c10e_9]?.prototype;
    if (_0x57c10e_0) for (const _0x57c10e_1 of _0x57c10e_a) {
      const _0x57c10e_2 = _0x57c10e_0[_0x57c10e_1];
      if ("\x66\x75\x6e\x63\x74\x69\x6f\x6e" != typeof _0x57c10e_2) continue;
      const _0x57c10e_3 = function(..._0x57c10e_0) {
        const _0x57c10e_1 = Reflect.apply(_0x57c10e_2, this, _0x57c10e_0);
        return _0x57c10e_7(), _0x57c10e_1;
      };
      try {
        _0x57c10e_0[_0x57c10e_1] = _0x57c10e_3, _0x57c10e_6.push(() => {
          _0x57c10e_0[_0x57c10e_1] === _0x57c10e_3 && (_0x57c10e_0[_0x57c10e_1] = _0x57c10e_2);
        });
      } catch {}
    }
  }
  addEventListener("\x65\x72\x72\x6f\x72", _0x57c10e_0 => {
    "\x53\x43\x52\x49\x50\x54" !== _0x57c10e_0.target?.tagName && "\x4c\x49\x4e\x4b" !== _0x57c10e_0.target?.tagName || (_0x57c10e_3 = !0);
  }, !0), addEventListener("\x75\x6e\x68\x61\x6e\x64\x6c\x65\x64\x72\x65\x6a\x65\x63\x74\x69\x6f\x6e", () => {
    _0x57c10e_3 = !0;
  });
  const _0x57c10e_8 = setInterval(() => {
    const _0x57c10e_0 = performance.now();
    if (document.hidden || (_0x57c10e_4 += Math.min(5e3, _0x57c10e_0 - _0x57c10e_5)), 
    _0x57c10e_5 = _0x57c10e_0, _0x57c10e_2) return void clearInterval(_0x57c10e_8);
    if (_0x57c10e_4 < 6e4) return;
    clearInterval(_0x57c10e_8);
    for (const _0x57c10e_2 of _0x57c10e_6) _0x57c10e_2();
    const _0x57c10e_1 = [ ...document.querySelectorAll("\x63\x61\x6e\x76\x61\x73") ].some(_0x57c10e_0 => _0x57c10e_0.width > 40 && _0x57c10e_0.height > 40), _0x57c10e_7 = (document.body?.innerText || "").trim();
    (_0x57c10e_1 || !_0x57c10e_7 && !document.querySelector("\x69\x66\x72\x61\x6d\x65\x2c\x6f\x62\x6a\x65\x63\x74\x2c\x65\x6d\x62\x65\x64\x2c\x72\x75\x66\x66\x6c\x65\x2d\x70\x6c\x61\x79\x65\x72")) && parent.postMessage({
      type: "\x6e\x79\x78\x3a\x67\x61\x6d\x65\x2d\x68\x65\x61\x6c\x74\x68",
      reason: _0x57c10e_3 ? "\x72\x65\x73\x6f\x75\x72\x63\x65\x2d\x65\x72\x72\x6f\x72" : "\x6e\x6f\x2d\x72\x65\x6e\x64\x65\x72"
    }, "\x2a");
  }, 5e3);
  addEventListener("\x70\x61\x67\x65\x68\x69\x64\x65", () => {
    clearInterval(_0x57c10e_8);
    for (const _0x57c10e_0 of _0x57c10e_6) _0x57c10e_0();
  }, {
    once: !0
  });
})();
