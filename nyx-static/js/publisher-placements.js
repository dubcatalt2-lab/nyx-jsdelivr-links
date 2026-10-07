import { createPublisherFrame as _0x9c76e7_0 } from "\x2e\x2f\x40\x72\x33\x37\x36\x66\x63\x62\x30\x33\x65\x65\x36\x34\x61\x61\x34\x39\x37\x38\x63\x30\x61\x33\x65\x30\x21\x2e\x6a\x73";

import { publisherConfig as _0xe3575c_3, publisherHostAllowed as _0x2d90e6_1, publisherMode as _0xe3575c_4 } from "\x2e\x2f\x40\x72\x33\x65\x35\x64\x65\x32\x30\x61\x34\x30\x64\x33\x35\x32\x32\x39\x33\x62\x31\x39\x38\x62\x38\x37\x21\x2e\x6a\x73";

export function createGameSponsors(_0x9c76e7_1) {
  if (!_0x2d90e6_1() || !_0x9c76e7_1 || !globalThis.IntersectionObserver) return null;
  const _0x9c76e7_2 = [], _0x9c76e7_3 = new WeakMap, _0x9c76e7_4 = new WeakMap, _0x9c76e7_5 = new IntersectionObserver(_0x9c76e7_0 => {
    for (const _0x9c76e7_1 of _0x9c76e7_0) _0x9c76e7_3.set(_0x9c76e7_1.target, _0x9c76e7_1.isIntersecting), 
    _0x9c76e7_6(_0x9c76e7_1.target);
  }, {
    threshold: .1
  });
  function _0x9c76e7_6(_0x9c76e7_1) {
    if ([ "\x6f\x66\x66", "\x70\x65\x6e\x64\x69\x6e\x67" ].includes(_0xe3575c_4()) || _0x9c76e7_1.hidden || _0x9c76e7_1.dataset.dismissed || !_0x9c76e7_3.get(_0x9c76e7_1) || _0x9c76e7_1.dataset.loaded || document.hidden) return;
    _0x9c76e7_1.dataset.loaded = "\x74\x72\x75\x65";
    const _0x9c76e7_2 = _0x9c76e7_0({
      path: _0x9c76e7_1.dataset.native ? "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x70\x73\x2f\x73\x70\x6f\x6e\x73\x6f\x72\x2f\x6e\x61\x74\x69\x76\x65\x2e\x68\x74\x6d\x6c" : _0xe3575c_3.bannerPath,
      width: _0x9c76e7_1.dataset.native ? 720 : _0xe3575c_3.bannerWidth,
      height: _0x9c76e7_1.dataset.native ? 320 : _0xe3575c_3.bannerHeight,
      dynamicHeight: !!_0x9c76e7_1.dataset.native,
      onReady: () => {
        _0x9c76e7_1.dataset.ready = "\x74\x72\x75\x65";
      },
      onUnavailable: () => {
        _0x9c76e7_1.dataset.failed = "\x74\x72\x75\x65", _0x9c76e7_1.hidden = !0;
      }
    });
    _0x9c76e7_4.set(_0x9c76e7_1, _0x9c76e7_2), _0x9c76e7_1.append(_0x9c76e7_2.element);
  }
  for (let _0x9c76e7_0 = 0; _0x9c76e7_0 < 3; _0x9c76e7_0++) {
    const _0x9c76e7_3 = document.createElement("\x61\x73\x69\x64\x65");
    _0x9c76e7_3.className = "\x6e\x79\x78\x2d\x73\x70\x6f\x6e\x73\x6f\x72\x2d\x73\x6c\x6f\x74", 2 === _0x9c76e7_0 && (_0x9c76e7_3.classList.add("\x6e\x79\x78\x2d\x73\x70\x6f\x6e\x73\x6f\x72\x2d\x6e\x61\x74\x69\x76\x65"), 
    _0x9c76e7_3.dataset.native = "\x74\x72\x75\x65"), _0x9c76e7_3.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", "\x53\x70\x6f\x6e\x73\x6f\x72\x65\x64\x20\x70\x6c\x61\x63\x65\x6d\x65\x6e\x74"), 
    _0x9c76e7_3.hidden = !0;
    const _0x9c76e7_6 = document.createElement("\x73\x70\x61\x6e");
    _0x9c76e7_6.textContent = "\x41\x64\x76\x65\x72\x74\x69\x73\x65\x6d\x65\x6e\x74";
    const _0x9c76e7_7 = document.createElement("\x68\x65\x61\x64\x65\x72"), _0x9c76e7_8 = document.createElement("\x62\x75\x74\x74\x6f\x6e");
    _0x9c76e7_8.type = "\x62\x75\x74\x74\x6f\x6e", _0x9c76e7_8.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", 2 === _0x9c76e7_0 ? "\x43\x6c\x6f\x73\x65\x20\x6e\x61\x74\x69\x76\x65\x20\x61\x64\x76\x65\x72\x74\x69\x73\x65\x6d\x65\x6e\x74" : `\x43\x6c\x6f\x73\x65\x20\x62\x61\x6e\x6e\x65\x72\x20\x61\x64\x76\x65\x72\x74\x69\x73\x65\x6d\x65\x6e\x74\x20${_0x9c76e7_0 + 1}`), 
    _0x9c76e7_8.innerHTML = "\x3c\x73\x76\x67\x20\x76\x69\x65\x77\x42\x6f\x78\x3d\x22\x30\x20\x30\x20\x32\x34\x20\x32\x34\x22\x20\x66\x69\x6c\x6c\x3d\x22\x6e\x6f\x6e\x65\x22\x20\x73\x74\x72\x6f\x6b\x65\x3d\x22\x63\x75\x72\x72\x65\x6e\x74\x43\x6f\x6c\x6f\x72\x22\x20\x73\x74\x72\x6f\x6b\x65\x2d\x77\x69\x64\x74\x68\x3d\x22\x32\x22\x3e\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x6d\x36\x20\x36\x20\x31\x32\x20\x31\x32\x4d\x36\x20\x31\x38\x20\x31\x38\x20\x36\x22\x2f\x3e\x3c\x2f\x73\x76\x67\x3e", 
    _0x9c76e7_8.addEventListener("\x63\x6c\x69\x63\x6b", () => {
      _0x9c76e7_3.dataset.dismissed = "\x74\x72\x75\x65", _0x9c76e7_3.hidden = !0, _0x9c76e7_4.get(_0x9c76e7_3)?.destroy(), 
      _0x9c76e7_4.delete(_0x9c76e7_3);
    }), _0x9c76e7_7.append(_0x9c76e7_6, _0x9c76e7_8), _0x9c76e7_3.append(_0x9c76e7_7), 
    _0x9c76e7_2.push(_0x9c76e7_3), _0x9c76e7_1.append(_0x9c76e7_3), _0x9c76e7_5.observe(_0x9c76e7_3);
  }
  let _0x9c76e7_7 = 0;
  function _0x9c76e7_8() {
    for (let _0x9c76e7_0 = 0; _0x9c76e7_0 < _0x9c76e7_2.length; _0x9c76e7_0++) {
      const _0x9c76e7_3 = _0x9c76e7_2[_0x9c76e7_0];
      _0x9c76e7_3.hidden = !!_0x9c76e7_3.dataset.dismissed || _0x9c76e7_7 < 2 || [ "\x6f\x66\x66", "\x70\x65\x6e\x64\x69\x6e\x67" ].includes(_0xe3575c_4()) || _0x9c76e7_1.clientWidth < (_0x9c76e7_3.dataset.native ? 280 : _0xe3575c_3.bannerWidth) || "\x74\x72\x75\x65" === _0x9c76e7_3.dataset.failed, 
      [ "\x6f\x66\x66", "\x70\x65\x6e\x64\x69\x6e\x67" ].includes(_0xe3575c_4()) && (_0x9c76e7_4.get(_0x9c76e7_3)?.destroy(), 
      delete _0x9c76e7_3.dataset.loaded, delete _0x9c76e7_3.dataset.ready), _0x9c76e7_6(_0x9c76e7_3);
    }
  }
  return new ResizeObserver(_0x9c76e7_8).observe(_0x9c76e7_1), document.addEventListener("\x76\x69\x73\x69\x62\x69\x6c\x69\x74\x79\x63\x68\x61\x6e\x67\x65", _0x9c76e7_8), 
  window.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", _0x9c76e7_0 => {
    "\x6e\x79\x78\x3a\x70\x75\x62\x6c\x69\x73\x68\x65\x72\x2d\x63\x68\x61\x6e\x67\x65" !== _0x9c76e7_0.data?.type || _0x9c76e7_0.source !== parent || _0x9c76e7_0.origin !== location.origin || _0x9c76e7_8();
  }), {
    render(_0x9c76e7_0, _0x9c76e7_3) {
      _0x9c76e7_7 = _0x9c76e7_0.length;
      for (const _0x9c76e7_2 of _0x9c76e7_1.querySelectorAll("\x3a\x73\x63\x6f\x70\x65\x20\x3e\x20\x2e\x67\x61\x6d\x65\x2d\x63\x61\x72\x64")) _0x9c76e7_2.remove();
      const _0x9c76e7_4 = Math.max(1, Math.ceil(_0x9c76e7_0.length / 3));
      for (let _0x9c76e7_5 = 0; _0x9c76e7_5 < _0x9c76e7_0.length; _0x9c76e7_5 += _0x9c76e7_4) {
        const _0x9c76e7_6 = document.createDocumentFragment();
        for (const _0x9c76e7_1 of _0x9c76e7_0.slice(_0x9c76e7_5, _0x9c76e7_5 + _0x9c76e7_4)) _0x9c76e7_6.append(_0x9c76e7_3(_0x9c76e7_1));
        _0x9c76e7_1.insertBefore(_0x9c76e7_6, _0x9c76e7_2[_0x9c76e7_5 / _0x9c76e7_4] || null);
      }
      _0x9c76e7_8();
    }
  };
}
