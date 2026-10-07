export function enhanceDesktop(_0x573d8e_0, _0x573d8e_1, _0x573d8e_2) {
  const _0x573d8e_3 = _0x573d8e_0._canvas, _0x573d8e_4 = _0x573d8e_0._display, _0x573d8e_5 = _0x573d8e_4.absX.bind(_0x573d8e_4), _0x573d8e_6 = _0x573d8e_4.absY.bind(_0x573d8e_4), _0x573d8e_7 = (_0x573d8e_0, _0x573d8e_1) => Math.max(0, Math.min(_0x573d8e_1 - 1, _0x573d8e_0));
  _0x573d8e_4.absX = _0x573d8e_0 => document.fullscreenElement === _0x573d8e_1 ? Math.floor(_0x573d8e_7(_0x573d8e_0 / _0x573d8e_3.getBoundingClientRect().width * _0x573d8e_3.width, _0x573d8e_3.width)) : _0x573d8e_5(_0x573d8e_0), 
  _0x573d8e_4.absY = _0x573d8e_0 => document.fullscreenElement === _0x573d8e_1 ? Math.floor(_0x573d8e_7(_0x573d8e_0 / _0x573d8e_3.getBoundingClientRect().height * _0x573d8e_3.height, _0x573d8e_3.height)) : _0x573d8e_6(_0x573d8e_0);
  let _0x573d8e_8 = 0, _0x573d8e_9 = 0, _0x573d8e_a = 0;
  const _0x573d8e_b = document.createElement("\x73\x70\x61\x6e");
  _0x573d8e_b.className = "\x6c\x6f\x63\x6b\x65\x64\x2d\x70\x6f\x69\x6e\x74\x65\x72", _0x573d8e_b.hidden = !0, _0x573d8e_1.append(_0x573d8e_b);
  const _0x573d8e_c = () => document.pointerLockElement === _0x573d8e_3, _0x573d8e_d = () => {
    _0x573d8e_0._handleMouseButton(_0x573d8e_8, _0x573d8e_9, 0), _0x573d8e_0._keyboard._allKeysUp(), 
    _0x573d8e_a = 0, _0x573d8e_b.hidden = !0;
  }, _0x573d8e_e = () => {
    const _0x573d8e_0 = _0x573d8e_3.getBoundingClientRect(), _0x573d8e_2 = _0x573d8e_1.getBoundingClientRect();
    _0x573d8e_b.style.left = _0x573d8e_0.left - _0x573d8e_2.left + _0x573d8e_8 + "\x70\x78", 
    _0x573d8e_b.style.top = _0x573d8e_0.top - _0x573d8e_2.top + _0x573d8e_9 + "\x70\x78";
  }, _0x573d8e_f = () => {
    if (_0x573d8e_c()) {
      const _0x573d8e_1 = _0x573d8e_3.getBoundingClientRect();
      _0x573d8e_8 = _0x573d8e_1.width / 2, _0x573d8e_9 = _0x573d8e_1.height / 2, _0x573d8e_b.hidden = !1, 
      _0x573d8e_e(), _0x573d8e_0.focus();
    } else _0x573d8e_d();
  }, _0x573d8e_10 = _0x573d8e_1 => {
    if (!_0x573d8e_c()) return;
    _0x573d8e_1.preventDefault(), _0x573d8e_1.stopImmediatePropagation();
    const _0x573d8e_2 = _0x573d8e_3.getBoundingClientRect();
    if ("\x6d\x6f\x75\x73\x65\x6d\x6f\x76\x65" === _0x573d8e_1.type) _0x573d8e_8 = _0x573d8e_7(_0x573d8e_8 + _0x573d8e_1.movementX, _0x573d8e_2.width), 
    _0x573d8e_9 = _0x573d8e_7(_0x573d8e_9 + _0x573d8e_1.movementY, _0x573d8e_2.height), 
    _0x573d8e_0._handleMouseMove(_0x573d8e_8, _0x573d8e_9), _0x573d8e_e(); else if ("\x6d\x6f\x75\x73\x65\x64\x6f\x77\x6e" === _0x573d8e_1.type || "\x6d\x6f\x75\x73\x65\x75\x70" === _0x573d8e_1.type) _0x573d8e_a = 1 & _0x573d8e_1.buttons | (2 & _0x573d8e_1.buttons) << 1 | (4 & _0x573d8e_1.buttons) >> 1, 
    _0x573d8e_0._handleMouseButton(_0x573d8e_8, _0x573d8e_9, _0x573d8e_a); else if ("\x77\x68\x65\x65\x6c" === _0x573d8e_1.type) {
      const _0x573d8e_2 = _0x573d8e_1.deltaY < 0 ? 8 : 16;
      _0x573d8e_0._handleMouseButton(_0x573d8e_8, _0x573d8e_9, _0x573d8e_a | _0x573d8e_2), 
      _0x573d8e_0._handleMouseButton(_0x573d8e_8, _0x573d8e_9, _0x573d8e_a);
    }
  }, _0x573d8e_11 = () => queueMicrotask(_0x573d8e_2);
  _0x573d8e_1.addEventListener("\x6d\x6f\x75\x73\x65\x75\x70", _0x573d8e_11, !0);
  const _0x573d8e_12 = () => {
    _0x573d8e_2(), !document.fullscreenElement && _0x573d8e_c() && document.exitPointerLock();
  };
  document.addEventListener("\x66\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e\x63\x68\x61\x6e\x67\x65", _0x573d8e_12);
  const _0x573d8e_13 = [ "\x6d\x6f\x75\x73\x65\x6d\x6f\x76\x65", "\x6d\x6f\x75\x73\x65\x64\x6f\x77\x6e", "\x6d\x6f\x75\x73\x65\x75\x70", "\x63\x6c\x69\x63\x6b", "\x63\x6f\x6e\x74\x65\x78\x74\x6d\x65\x6e\x75", "\x77\x68\x65\x65\x6c" ];
  for (const _0x573d8e_15 of _0x573d8e_13) _0x573d8e_1.addEventListener(_0x573d8e_15, _0x573d8e_10, {
    capture: !0,
    passive: !1
  });
  document.addEventListener("\x70\x6f\x69\x6e\x74\x65\x72\x6c\x6f\x63\x6b\x63\x68\x61\x6e\x67\x65", _0x573d8e_f);
  const _0x573d8e_14 = () => {
    _0x573d8e_c() && document.exitPointerLock();
  };
  return window.addEventListener("\x62\x6c\x75\x72", _0x573d8e_14), {
    async lock() {
      if (!_0x573d8e_3.requestPointerLock) throw Error("\x4d\x6f\x75\x73\x65\x20\x6c\x6f\x63\x6b\x20\x69\x73\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x20\x69\x6e\x20\x74\x68\x69\x73\x20\x77\x6f\x72\x6b\x73\x70\x61\x63\x65\x2e");
      await _0x573d8e_3.requestPointerLock();
    },
    destroy() {
      _0x573d8e_d(), _0x573d8e_2(), _0x573d8e_1.removeEventListener("\x6d\x6f\x75\x73\x65\x75\x70", _0x573d8e_11, !0), 
      document.removeEventListener("\x66\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e\x63\x68\x61\x6e\x67\x65", _0x573d8e_12), _0x573d8e_c() && document.exitPointerLock();
      for (const _0x573d8e_0 of _0x573d8e_13) _0x573d8e_1.removeEventListener(_0x573d8e_0, _0x573d8e_10, !0);
      document.removeEventListener("\x70\x6f\x69\x6e\x74\x65\x72\x6c\x6f\x63\x6b\x63\x68\x61\x6e\x67\x65", _0x573d8e_f), window.removeEventListener("\x62\x6c\x75\x72", _0x573d8e_14), 
      _0x573d8e_b.remove(), _0x573d8e_4.absX = _0x573d8e_5, _0x573d8e_4.absY = _0x573d8e_6;
    }
  };
}
