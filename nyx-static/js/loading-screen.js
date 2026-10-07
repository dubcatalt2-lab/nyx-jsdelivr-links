(() => {
  let _0xd20168_0 = 0, _0xd20168_1 = 0, _0xd20168_2 = [];
  function _0xd20168_3(_0xd20168_0) {
    _0xd20168_2.forEach(({element: _0xd20168_0, hadInert: _0xd20168_1}) => {
      _0xd20168_0?.isConnected && !_0xd20168_1 && _0xd20168_0.removeAttribute("\x69\x6e\x65\x72\x74");
    }), _0xd20168_2 = [], document.body?.classList.remove("\x6e\x79\x78\x2d\x6c\x6f\x61\x64\x69\x6e\x67\x2d\x61\x63\x74\x69\x76\x65"), _0xd20168_0?.blur?.();
  }
  function _0xd20168_4(_0xd20168_2, _0xd20168_3) {
    return _0xd20168_3 !== _0xd20168_0 || document.hidden || _0xd20168_1 === _0xd20168_3 ? Promise.resolve() : new Promise(_0xd20168_1 => {
      let _0xd20168_4 = 0;
      const _0xd20168_5 = () => {
        clearTimeout(_0xd20168_4), document.removeEventListener("\x76\x69\x73\x69\x62\x69\x6c\x69\x74\x79\x63\x68\x61\x6e\x67\x65", _0xd20168_6), 
        _0xd20168_1();
      }, _0xd20168_6 = () => {
        (document.hidden || _0xd20168_3 !== _0xd20168_0) && _0xd20168_5();
      };
      document.addEventListener("\x76\x69\x73\x69\x62\x69\x6c\x69\x74\x79\x63\x68\x61\x6e\x67\x65", _0xd20168_6), _0xd20168_4 = setTimeout(_0xd20168_5, Math.max(0, Number(_0xd20168_2) || 0));
    });
  }
  function _0xd20168_5(_0xd20168_0, _0xd20168_1, _0xd20168_2, _0xd20168_3 = !0, _0xd20168_4 = !0) {
    const _0xd20168_5 = _0xd20168_0.querySelector("\x2e\x6e\x79\x78\x2d\x6c\x6f\x61\x64\x69\x6e\x67\x2d\x70\x72\x6f\x67\x72\x65\x73\x73"), _0xd20168_6 = _0xd20168_5?.querySelector("\x73\x70\x61\x6e"), _0xd20168_7 = _0xd20168_0.querySelector("\x5b\x64\x61\x74\x61\x2d\x6e\x79\x78\x2d\x6c\x6f\x61\x64\x69\x6e\x67\x2d\x70\x65\x72\x63\x65\x6e\x74\x5d"), _0xd20168_8 = _0xd20168_0.querySelector("\x5b\x64\x61\x74\x61\x2d\x6e\x79\x78\x2d\x6c\x6f\x61\x64\x69\x6e\x67\x2d\x73\x74\x61\x67\x65\x5d"), _0xd20168_9 = Math.max(0, Math.min(100, Number(_0xd20168_1) || 0)), _0xd20168_a = Math.round(_0xd20168_9);
    _0xd20168_6 && _0xd20168_4 && (_0xd20168_6.style.transform = `\x73\x63\x61\x6c\x65\x58\x28${_0xd20168_9 / 100}\x29`), 
    _0xd20168_7 && (_0xd20168_7.textContent = `${_0xd20168_a}\x25`), _0xd20168_8 && _0xd20168_2 && (_0xd20168_8.textContent = _0xd20168_2), 
    _0xd20168_5?.setAttribute("\x61\x72\x69\x61\x2d\x76\x61\x6c\x75\x65\x6e\x6f\x77", String(_0xd20168_a)), _0xd20168_2 && _0xd20168_5?.setAttribute("\x61\x72\x69\x61\x2d\x76\x61\x6c\x75\x65\x74\x65\x78\x74", _0xd20168_2), 
    _0xd20168_3 && window.dispatchEvent(new CustomEvent("\x6e\x79\x78\x3a\x6c\x6f\x61\x64\x69\x6e\x67\x2d\x70\x72\x6f\x67\x72\x65\x73\x73", {
      detail: {
        value: _0xd20168_a,
        label: _0xd20168_2 || ""
      }
    }));
  }
  function _0xd20168_6(_0xd20168_0) {
    return Number(_0xd20168_0.querySelector("\x2e\x6e\x79\x78\x2d\x6c\x6f\x61\x64\x69\x6e\x67\x2d\x70\x72\x6f\x67\x72\x65\x73\x73")?.getAttribute("\x61\x72\x69\x61\x2d\x76\x61\x6c\x75\x65\x6e\x6f\x77")) || 0;
  }
  function _0xd20168_7(_0xd20168_2, _0xd20168_3, _0xd20168_4, _0xd20168_7, _0xd20168_8) {
    const _0xd20168_9 = _0xd20168_6(_0xd20168_2), _0xd20168_a = Math.max(_0xd20168_9, Math.min(100, Number(_0xd20168_3) || 0)), _0xd20168_b = _0xd20168_2.querySelector("\x2e\x6e\x79\x78\x2d\x6c\x6f\x61\x64\x69\x6e\x67\x2d\x70\x72\x6f\x67\x72\x65\x73\x73\x20\x73\x70\x61\x6e");
    return _0xd20168_a === _0xd20168_9 || document.hidden || _0xd20168_1 === _0xd20168_8 ? (_0xd20168_5(_0xd20168_2, _0xd20168_a, _0xd20168_4), 
    Promise.resolve()) : new Promise(_0xd20168_3 => {
      const _0xd20168_6 = Date.now(), _0xd20168_c = _0xd20168_b?.animate([ {
        transform: `\x73\x63\x61\x6c\x65\x58\x28${_0xd20168_9 / 100}\x29`
      }, {
        transform: `\x73\x63\x61\x6c\x65\x58\x28${_0xd20168_a / 100}\x29`
      } ], {
        duration: Math.max(1, _0xd20168_7),
        easing: "\x6c\x69\x6e\x65\x61\x72",
        fill: "\x66\x6f\x72\x77\x61\x72\x64\x73"
      });
      let _0xd20168_d = 0, _0xd20168_e = !1;
      const _0xd20168_f = (_0xd20168_0 = !0) => {
        _0xd20168_e || (_0xd20168_e = !0, clearTimeout(_0xd20168_d), document.removeEventListener("\x76\x69\x73\x69\x62\x69\x6c\x69\x74\x79\x63\x68\x61\x6e\x67\x65", _0xd20168_10), 
        _0xd20168_c?.cancel(), _0xd20168_0 && (_0xd20168_b && (_0xd20168_b.style.transform = `\x73\x63\x61\x6c\x65\x58\x28${_0xd20168_a / 100}\x29`), 
        _0xd20168_5(_0xd20168_2, _0xd20168_a, _0xd20168_4, !0)), _0xd20168_3());
      }, _0xd20168_10 = () => {
        _0xd20168_8 !== _0xd20168_0 ? _0xd20168_f(!1) : document.hidden || _0xd20168_1 === _0xd20168_8 ? _0xd20168_f() : _0xd20168_11();
      }, _0xd20168_11 = () => {
        if (_0xd20168_8 !== _0xd20168_0) return void _0xd20168_f(!1);
        if (document.hidden || _0xd20168_1 === _0xd20168_8) return void _0xd20168_f();
        const _0xd20168_3 = Math.min(1, (Date.now() - _0xd20168_6) / Math.max(1, _0xd20168_7));
        _0xd20168_5(_0xd20168_2, _0xd20168_9 + (_0xd20168_a - _0xd20168_9) * _0xd20168_3, _0xd20168_4, !1, !1), 
        _0xd20168_3 < 1 ? _0xd20168_d = setTimeout(_0xd20168_11, 32) : _0xd20168_f();
      };
      document.addEventListener("\x76\x69\x73\x69\x62\x69\x6c\x69\x74\x79\x63\x68\x61\x6e\x67\x65", _0xd20168_10), _0xd20168_d = setTimeout(_0xd20168_11, 0);
    });
  }
  document.addEventListener("\x76\x69\x73\x69\x62\x69\x6c\x69\x74\x79\x63\x68\x61\x6e\x67\x65", () => {
    document.hidden && _0xd20168_0 && (_0xd20168_1 = _0xd20168_0);
  }), [ "\x70\x6f\x69\x6e\x74\x65\x72\x64\x6f\x77\x6e", "\x70\x6f\x69\x6e\x74\x65\x72\x75\x70", "\x63\x6c\x69\x63\x6b", "\x64\x62\x6c\x63\x6c\x69\x63\x6b", "\x63\x6f\x6e\x74\x65\x78\x74\x6d\x65\x6e\x75", "\x77\x68\x65\x65\x6c", "\x74\x6f\x75\x63\x68\x73\x74\x61\x72\x74", "\x74\x6f\x75\x63\x68\x6d\x6f\x76\x65", "\x6b\x65\x79\x64\x6f\x77\x6e", "\x6b\x65\x79\x75\x70" ].forEach(_0xd20168_0 => {
    window.addEventListener(_0xd20168_0, _0xd20168_0 => {
      document.body?.classList.contains("\x6e\x79\x78\x2d\x6c\x6f\x61\x64\x69\x6e\x67\x2d\x61\x63\x74\x69\x76\x65") && (_0xd20168_0.preventDefault(), 
      _0xd20168_0.stopImmediatePropagation());
    }, {
      capture: !0,
      passive: !1
    });
  }), window.nyxLoadingScreen = {
    show() {
      const _0xd20168_8 = document.getElementById("\x73\x65\x74\x75\x70\x4c\x61\x75\x6e\x63\x68\x53\x63\x72\x65\x65\x6e"), _0xd20168_9 = _0xd20168_8?.querySelector("\x2e\x6e\x79\x78\x2d\x6c\x6f\x61\x64\x69\x6e\x67\x2d\x70\x72\x6f\x67\x72\x65\x73\x73\x20\x73\x70\x61\x6e");
      if (!_0xd20168_8 || !_0xd20168_9) return null;
      const _0xd20168_a = ++_0xd20168_0;
      return document.hidden && (_0xd20168_1 = _0xd20168_a), _0xd20168_8.classList.remove("\x73\x68\x6f\x77", "\x6c\x65\x61\x76\x69\x6e\x67"), 
      _0xd20168_9.getAnimations().forEach(_0xd20168_0 => _0xd20168_0.cancel()), _0xd20168_5(_0xd20168_8, 0, "\x50\x72\x65\x70\x61\x72\x69\x6e\x67\x20\x4e\x79\x78"), 
      _0xd20168_8.offsetWidth, _0xd20168_8.classList.add("\x73\x68\x6f\x77"), _0xd20168_8.setAttribute("\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e", "\x66\x61\x6c\x73\x65"), 
      function(_0xd20168_0) {
        _0xd20168_3(_0xd20168_0), _0xd20168_2 = Array.from(document.body?.children || []).filter(_0xd20168_1 => _0xd20168_1 !== _0xd20168_0 && "\x6e\x79\x78\x53\x74\x75\x64\x79\x48\x75\x62\x53\x74\x61\x72\x74\x75\x70" !== _0xd20168_1.id && ![ "\x53\x43\x52\x49\x50\x54", "\x53\x54\x59\x4c\x45", "\x4c\x49\x4e\x4b" ].includes(_0xd20168_1.tagName)).map(_0xd20168_0 => {
          const _0xd20168_1 = _0xd20168_0.hasAttribute("\x69\x6e\x65\x72\x74");
          return _0xd20168_1 || _0xd20168_0.setAttribute("\x69\x6e\x65\x72\x74", ""), {
            element: _0xd20168_0,
            hadInert: _0xd20168_1
          };
        }), document.body?.classList.add("\x6e\x79\x78\x2d\x6c\x6f\x61\x64\x69\x6e\x67\x2d\x61\x63\x74\x69\x76\x65"), _0xd20168_0.setAttribute("\x72\x6f\x6c\x65", "\x64\x69\x61\x6c\x6f\x67"), 
        _0xd20168_0.setAttribute("\x61\x72\x69\x61\x2d\x6d\x6f\x64\x61\x6c", "\x74\x72\x75\x65"), _0xd20168_0.tabIndex = -1, _0xd20168_0.focus({
          preventScroll: !0
        });
      }(_0xd20168_8), {
        async step(_0xd20168_1, _0xd20168_2, _0xd20168_3, _0xd20168_4 = 360) {
          if (_0xd20168_a !== _0xd20168_0) return {
            ok: !1,
            cancelled: !0
          };
          _0xd20168_5(_0xd20168_8, _0xd20168_6(_0xd20168_8), _0xd20168_2);
          const _0xd20168_9 = performance.now();
          let _0xd20168_b, _0xd20168_c = null;
          try {
            _0xd20168_b = await Promise.resolve().then(_0xd20168_3);
          } catch (_0xd20168_e) {
            _0xd20168_c = _0xd20168_e, console.warn(`\x53\x74\x61\x72\x74\x75\x70\x20\x74\x61\x73\x6b\x20\x66\x61\x69\x6c\x65\x64\x3a\x20${_0xd20168_2}`, _0xd20168_e);
          }
          const _0xd20168_d = Math.max(480, Number(_0xd20168_4) - (performance.now() - _0xd20168_9));
          return await _0xd20168_7(_0xd20168_8, _0xd20168_1, _0xd20168_c ? `${_0xd20168_2}\x20\x28\x77\x61\x72\x6e\x69\x6e\x67\x29` : _0xd20168_2, _0xd20168_d, _0xd20168_a), 
          _0xd20168_a !== _0xd20168_0 ? {
            ok: !1,
            cancelled: !0
          } : {
            ok: !_0xd20168_c,
            result: _0xd20168_b,
            error: _0xd20168_c
          };
        },
        async complete(_0xd20168_1 = "\x4e\x79\x78\x20\x69\x73\x20\x72\x65\x61\x64\x79") {
          _0xd20168_a === _0xd20168_0 && (await _0xd20168_7(_0xd20168_8, 100, _0xd20168_1, 300, _0xd20168_a), 
          await _0xd20168_4(620, _0xd20168_a), _0xd20168_a === _0xd20168_0 && (_0xd20168_8.classList.add("\x6c\x65\x61\x76\x69\x6e\x67"), 
          await _0xd20168_4(780, _0xd20168_a), _0xd20168_a === _0xd20168_0 && (_0xd20168_8.classList.remove("\x73\x68\x6f\x77", "\x6c\x65\x61\x76\x69\x6e\x67"), 
          _0xd20168_8.setAttribute("\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e", "\x74\x72\x75\x65"), _0xd20168_5(_0xd20168_8, 0, "\x50\x72\x65\x70\x61\x72\x69\x6e\x67\x20\x4e\x79\x78"), 
          _0xd20168_3(_0xd20168_8))));
        }
      };
    }
  };
})();
