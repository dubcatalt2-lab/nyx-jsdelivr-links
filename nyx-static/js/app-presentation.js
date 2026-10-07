(() => {
  const _0x590aae_0 = document.documentElement;
  try {
    if (window.parent !== window && parent.location.origin === location.origin && ("\x74\x75\x74\x73\x69" === window.frameElement?.dataset.appShell || "\x74\x75\x74\x73\x69" === parent.document.documentElement.dataset.appShell)) {
      _0x590aae_0.dataset.appShell = "\x74\x75\x74\x73\x69";
      const _0x590aae_1 = () => document.querySelectorAll("\x6c\x69\x6e\x6b\x5b\x72\x65\x6c\x3d\x22\x73\x74\x79\x6c\x65\x73\x68\x65\x65\x74\x22\x5d").forEach(_0x590aae_0 => {
        "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x70\x73\x2f\x6f\x62\x73\x69\x64\x69\x61\x6e\x2e\x63\x73\x73" === new URL(_0x590aae_0.href, location.href).pathname && _0x590aae_0.remove();
      });
      _0x590aae_1(), new MutationObserver(_0x590aae_1).observe(document.head, {
        childList: !0
      });
    }
  } catch {}
  const _0x590aae_1 = document.createElement("\x73\x74\x79\x6c\x65");
  let _0x590aae_2;
  _0x590aae_1.textContent = "\x68\x74\x6d\x6c\x5b\x64\x61\x74\x61\x2d\x61\x70\x70\x2d\x70\x72\x65\x73\x65\x6e\x74\x61\x74\x69\x6f\x6e\x3d\x22\x70\x65\x6e\x64\x69\x6e\x67\x22\x5d\x20\x62\x6f\x64\x79\x7b\x76\x69\x73\x69\x62\x69\x6c\x69\x74\x79\x3a\x68\x69\x64\x64\x65\x6e\x21\x69\x6d\x70\x6f\x72\x74\x61\x6e\x74\x7d", 
  document.head.append(_0x590aae_1), _0x590aae_0.dataset.appPresentation = "\x70\x65\x6e\x64\x69\x6e\x67";
  const _0x590aae_3 = () => {
    clearTimeout(_0x590aae_2), delete _0x590aae_0.dataset.appPresentation, _0x590aae_1.remove();
  };
  _0x590aae_2 = setTimeout(_0x590aae_3, 8e3);
  const _0x590aae_4 = () => {
    try {
      window.frameElement?.dispatchEvent(new Event("\x6e\x79\x78\x3a\x61\x70\x70\x2d\x64\x6f\x6d\x2d\x72\x65\x61\x64\x79"));
    } catch {}
    const _0x590aae_0 = [ ...document.querySelectorAll("\x23\x74\x75\x74\x73\x69\x2d\x65\x6d\x62\x65\x64\x64\x65\x64\x2d\x73\x74\x79\x6c\x65") ].filter(_0x590aae_0 => !_0x590aae_0.disabled && !_0x590aae_0.sheet);
    _0x590aae_0.length ? Promise.all(_0x590aae_0.map(_0x590aae_0 => new Promise(_0x590aae_1 => {
      const _0x590aae_2 = () => {
        _0x590aae_0.removeEventListener("\x6c\x6f\x61\x64", _0x590aae_2), _0x590aae_0.removeEventListener("\x65\x72\x72\x6f\x72", _0x590aae_2), 
        _0x590aae_1();
      };
      _0x590aae_0.addEventListener("\x6c\x6f\x61\x64", _0x590aae_2, {
        once: !0
      }), _0x590aae_0.addEventListener("\x65\x72\x72\x6f\x72", _0x590aae_2, {
        once: !0
      }), _0x590aae_0.sheet && _0x590aae_2();
    }))).then(_0x590aae_3) : _0x590aae_3();
  };
  "\x6c\x6f\x61\x64\x69\x6e\x67" === document.readyState ? document.addEventListener("\x44\x4f\x4d\x43\x6f\x6e\x74\x65\x6e\x74\x4c\x6f\x61\x64\x65\x64", _0x590aae_4, {
    once: !0
  }) : _0x590aae_4();
})();
