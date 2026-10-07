import { readGameFiles as _0x4adac5_0, restoreGameFiles as _0x4adac5_1, splitGameFiles as _0x4adac5_2, joinGameFiles as _0x4adac5_3, isGameFileKey as _0x4adac5_4, gameFileTime as _0x4adac5_5 } from "\x2e\x2f\x40\x72\x36\x36\x64\x65\x37\x33\x62\x62\x63\x33\x34\x30\x39\x36\x61\x66\x38\x64\x34\x35\x34\x36\x61\x64\x21\x2e\x6a\x73";

const _0x4adac5_6 = /^(?:nyx\.|drop\.|nook\.|tutsi\.|firebase:|__nyx_game_files_v1_)/, _0x4adac5_7 = _0x4adac5_0 => (new TextEncoder).encode(_0x4adac5_0).length, _0x4adac5_8 = (_0x4adac5_0, _0x4adac5_1) => JSON.stringify(_0x4adac5_0) === JSON.stringify(_0x4adac5_1), _0x4adac5_9 = () => Object.fromEntries(Object.keys(localStorage).filter(_0x4adac5_0 => !_0x4adac5_6.test(_0x4adac5_0)).map(_0x4adac5_0 => [ _0x4adac5_0, localStorage.getItem(_0x4adac5_0) ]));

function _0x4adac5_a(_0x4adac5_0) {
  const _0x4adac5_1 = Object.entries(_0x4adac5_0);
  if (_0x4adac5_1.length > 64 || _0x4adac5_7(JSON.stringify(_0x4adac5_0)) > 275e3 || _0x4adac5_1.some(([_0x4adac5_0, _0x4adac5_1]) => _0x4adac5_0.length > 160 || _0x4adac5_7(_0x4adac5_1) > 24e3)) throw Error("\x54\x68\x69\x73\x20\x73\x61\x76\x65\x20\x69\x73\x20\x74\x6f\x6f\x20\x6c\x61\x72\x67\x65\x20\x66\x6f\x72\x20\x63\x6c\x6f\x75\x64\x20\x73\x79\x6e\x63\x2e\x20\x59\x6f\x75\x72\x20\x6c\x6f\x63\x61\x6c\x20\x70\x72\x6f\x67\x72\x65\x73\x73\x20\x69\x73\x20\x72\x65\x74\x61\x69\x6e\x65\x64\x2e");
}

export function createGameCloudSave({gameKey: _0x4adac5_7, request: _0x4adac5_b, current: _0x4adac5_c, status: _0x4adac5_d, frame: _0x4adac5_e}) {
  let _0x4adac5_f = !1, _0x4adac5_10 = !1, _0x4adac5_11 = 0, _0x4adac5_12 = null, _0x4adac5_13 = "", _0x4adac5_14 = "", _0x4adac5_15 = {}, _0x4adac5_16 = {}, _0x4adac5_17 = {}, _0x4adac5_18 = {}, _0x4adac5_19 = {};
  const _0x4adac5_1a = () => !_0x4adac5_f && _0x4adac5_c(), _0x4adac5_1b = _0x4adac5_0 => {
    _0x4adac5_1a() && _0x4adac5_d(_0x4adac5_0);
  };
  function _0x4adac5_1c(_0x4adac5_0) {
    _0x4adac5_14 && localStorage.setItem(_0x4adac5_14, JSON.stringify({
      storage: _0x4adac5_18,
      removed: Object.keys(_0x4adac5_19).filter(_0x4adac5_0 => !(_0x4adac5_0 in _0x4adac5_18)),
      pending: _0x4adac5_0
    }));
  }
  function _0x4adac5_1d() {
    return !_0x4adac5_10 || _0x4adac5_f ? Promise.resolve() : (_0x4adac5_12 || (_0x4adac5_12 = async function() {
      try {
        await async function() {
          const _0x4adac5_1 = _0x4adac5_9();
          for (const [_0x4adac5_0, _0x4adac5_2] of Object.entries(_0x4adac5_1)) _0x4adac5_15[_0x4adac5_0] !== _0x4adac5_2 && (_0x4adac5_18[_0x4adac5_0] = _0x4adac5_2);
          for (const _0x4adac5_0 of Object.keys(_0x4adac5_15)) _0x4adac5_0 in _0x4adac5_1 || delete _0x4adac5_18[_0x4adac5_0];
          _0x4adac5_15 = _0x4adac5_1, _0x4adac5_e?.contentWindow && await async function _0x4adac5_0(_0x4adac5_1, _0x4adac5_2 = 0) {
            if (!(_0x4adac5_2 > 4)) try {
              _0x4adac5_1.Module?.nyxPersistSaves && await _0x4adac5_1.Module.nyxPersistSaves();
              for (let _0x4adac5_3 = 0; _0x4adac5_3 < _0x4adac5_1.frames.length; _0x4adac5_3++) await _0x4adac5_0(_0x4adac5_1.frames[_0x4adac5_3], _0x4adac5_2 + 1);
            } catch {}
          }(_0x4adac5_e.contentWindow);
          const _0x4adac5_3 = await _0x4adac5_0();
          for (const [_0x4adac5_0, _0x4adac5_2] of Object.entries(_0x4adac5_3)) _0x4adac5_8(_0x4adac5_2, _0x4adac5_16[_0x4adac5_0]) || (_0x4adac5_17[_0x4adac5_0] = _0x4adac5_2);
          for (const _0x4adac5_0 of Object.keys(_0x4adac5_16)) !(_0x4adac5_0 in _0x4adac5_3) && _0x4adac5_17[_0x4adac5_0] && (_0x4adac5_17[_0x4adac5_0] = {
            ..._0x4adac5_17[_0x4adac5_0],
            deleted: !0
          });
          _0x4adac5_16 = _0x4adac5_3;
          for (const _0x4adac5_0 of Object.keys(_0x4adac5_18)) _0x4adac5_4(_0x4adac5_0) && delete _0x4adac5_18[_0x4adac5_0];
          Object.assign(_0x4adac5_18, _0x4adac5_2(_0x4adac5_17)), _0x4adac5_a(_0x4adac5_18), 
          _0x4adac5_1c(!0);
        }();
        const _0x4adac5_1 = Object.fromEntries(Object.entries(_0x4adac5_18).filter(([_0x4adac5_0, _0x4adac5_1]) => _0x4adac5_19[_0x4adac5_0] !== _0x4adac5_1)), _0x4adac5_3 = Object.keys(_0x4adac5_19).filter(_0x4adac5_0 => !(_0x4adac5_0 in _0x4adac5_18));
        if (!Object.keys(_0x4adac5_1).length && !_0x4adac5_3.length) return void _0x4adac5_1c(!1);
        const _0x4adac5_5 = {
          ..._0x4adac5_18
        };
        if (_0x4adac5_1b("\x53\x61\x76\x69\x6e\x67\x20\x70\x72\x6f\x67\x72\x65\x73\x73\u2026"), !(await _0x4adac5_b("\x6e\x79\x78\x3a\x63\x6c\x6f\x75\x64\x2d\x67\x61\x6d\x65\x2d\x73\x61\x76\x65", {
          gameKey: _0x4adac5_7,
          accountUid: _0x4adac5_13,
          storage: _0x4adac5_1,
          removed: _0x4adac5_3
        })).saved) throw Error("\x43\x6c\x6f\x75\x64\x20\x73\x61\x76\x65\x20\x77\x61\x73\x20\x6e\x6f\x74\x20\x63\x6f\x6e\x66\x69\x72\x6d\x65\x64\x2e\x20\x50\x72\x6f\x67\x72\x65\x73\x73\x20\x69\x73\x20\x6b\x65\x70\x74\x20\x6f\x6e\x20\x74\x68\x69\x73\x20\x64\x65\x76\x69\x63\x65\x2e");
        _0x4adac5_19 = _0x4adac5_5, _0x4adac5_1c(!1), _0x4adac5_1b("\x50\x72\x6f\x67\x72\x65\x73\x73\x20\x73\x61\x76\x65\x64\x20\x74\x6f\x20\x79\x6f\x75\x72\x20\x61\x63\x63\x6f\x75\x6e\x74");
      } catch (_0x4adac5_1) {
        _0x4adac5_1b("\x43\x6c\x6f\x75\x64\x20\x73\x61\x76\x65\x20\x70\x65\x6e\x64\x69\x6e\x67\x3a\x20" + _0x4adac5_1.message);
      }
    }().finally(() => {
      _0x4adac5_12 = null;
    })), _0x4adac5_12);
  }
  const _0x4adac5_1e = () => {
    "\x68\x69\x64\x64\x65\x6e" === document.visibilityState && _0x4adac5_1d();
  }, _0x4adac5_1f = _0x4adac5_0 => {
    _0x4adac5_0.key && !_0x4adac5_6.test(_0x4adac5_0.key) && _0x4adac5_1d();
  }, _0x4adac5_20 = () => {
    _0x4adac5_1d();
  };
  return document.addEventListener("\x76\x69\x73\x69\x62\x69\x6c\x69\x74\x79\x63\x68\x61\x6e\x67\x65", _0x4adac5_1e), window.addEventListener("\x73\x74\x6f\x72\x61\x67\x65", _0x4adac5_1f), 
  window.addEventListener("\x6f\x6e\x6c\x69\x6e\x65", _0x4adac5_20), {
    start: async function() {
      let _0x4adac5_2, _0x4adac5_4;
      _0x4adac5_15 = _0x4adac5_9(), _0x4adac5_16 = await _0x4adac5_0();
      try {
        _0x4adac5_2 = await _0x4adac5_b("\x6e\x79\x78\x3a\x63\x6c\x6f\x75\x64\x2d\x67\x61\x6d\x65\x2d\x6c\x6f\x61\x64", {
          gameKey: _0x4adac5_7
        });
      } catch (_0x4adac5_8) {
        return void _0x4adac5_1b(_0x4adac5_8.message);
      }
      if (_0x4adac5_1a()) if (_0x4adac5_13 = String(_0x4adac5_2.accountUid || ""), _0x4adac5_13) {
        _0x4adac5_14 = "\x6e\x79\x78\x2e\x67\x61\x6d\x65\x43\x6c\x6f\x75\x64\x2e\x70\x65\x6e\x64\x69\x6e\x67\x2e" + encodeURIComponent(_0x4adac5_13) + "\x2e" + encodeURIComponent(_0x4adac5_7), 
        _0x4adac5_19 = _0x4adac5_2.storage || {};
        try {
          _0x4adac5_4 = JSON.parse(localStorage.getItem(_0x4adac5_14) || "\x6e\x75\x6c\x6c");
        } catch {}
        if (_0x4adac5_18 = {
          ..._0x4adac5_19
        }, _0x4adac5_4?.pending) {
          Object.assign(_0x4adac5_18, _0x4adac5_4.storage);
          for (const _0x4adac5_0 of _0x4adac5_4.removed || []) delete _0x4adac5_18[_0x4adac5_0];
        }
        for (const [_0x4adac5_0, _0x4adac5_1] of Object.entries(_0x4adac5_4?.storage || {})) _0x4adac5_6.test(_0x4adac5_0) || (_0x4adac5_0 in _0x4adac5_15 && _0x4adac5_15[_0x4adac5_0] !== _0x4adac5_1 ? _0x4adac5_18[_0x4adac5_0] = _0x4adac5_15[_0x4adac5_0] : _0x4adac5_0 in _0x4adac5_15 || delete _0x4adac5_18[_0x4adac5_0]);
        if (_0x4adac5_a(_0x4adac5_18), _0x4adac5_17 = _0x4adac5_3(_0x4adac5_18), _0x4adac5_4) for (const [_0x4adac5_0, _0x4adac5_1] of Object.entries(_0x4adac5_17)) _0x4adac5_16[_0x4adac5_0] && _0x4adac5_5(_0x4adac5_16[_0x4adac5_0]) > _0x4adac5_5(_0x4adac5_1) && (_0x4adac5_17[_0x4adac5_0] = _0x4adac5_16[_0x4adac5_0]);
        if (_0x4adac5_1a()) {
          for (const [_0x4adac5_0, _0x4adac5_1] of Object.entries(_0x4adac5_18)) _0x4adac5_6.test(_0x4adac5_0) || localStorage.setItem(_0x4adac5_0, _0x4adac5_1);
          for (const _0x4adac5_0 of _0x4adac5_4?.pending && _0x4adac5_4.removed || []) _0x4adac5_6.test(_0x4adac5_0) || localStorage.removeItem(_0x4adac5_0);
          await _0x4adac5_1(_0x4adac5_17, _0x4adac5_1a), _0x4adac5_1a() && (_0x4adac5_15 = _0x4adac5_9(), 
          _0x4adac5_16 = await _0x4adac5_0(), _0x4adac5_10 = !0, _0x4adac5_1b(_0x4adac5_4?.pending ? "\x43\x6c\x6f\x75\x64\x20\x73\x61\x76\x65\x20\x70\x65\x6e\x64\x69\x6e\x67\x20\u2014\x20\x72\x65\x74\x72\x79\x69\x6e\x67\u2026" : "\x43\x6c\x6f\x75\x64\x20\x73\x61\x76\x65\x73\x20\x72\x65\x61\x64\x79"), 
          _0x4adac5_11 = setInterval(() => {
            _0x4adac5_1d();
          }, 5e3), _0x4adac5_4?.pending && await _0x4adac5_1d());
        }
      } else _0x4adac5_1b("\x53\x69\x67\x6e\x20\x69\x6e\x20\x74\x6f\x20\x73\x79\x6e\x63\x20\x67\x61\x6d\x65\x20\x70\x72\x6f\x67\x72\x65\x73\x73\x2e\x20\x4c\x6f\x63\x61\x6c\x20\x73\x61\x76\x65\x73\x20\x72\x65\x6d\x61\x69\x6e\x20\x6f\x6e\x20\x74\x68\x69\x73\x20\x64\x65\x76\x69\x63\x65\x2e");
    },
    flush: _0x4adac5_1d,
    stop() {
      clearInterval(_0x4adac5_11), document.removeEventListener("\x76\x69\x73\x69\x62\x69\x6c\x69\x74\x79\x63\x68\x61\x6e\x67\x65", _0x4adac5_1e), 
      window.removeEventListener("\x73\x74\x6f\x72\x61\x67\x65", _0x4adac5_1f), window.removeEventListener("\x6f\x6e\x6c\x69\x6e\x65", _0x4adac5_20);
      const _0x4adac5_0 = _0x4adac5_1d();
      return _0x4adac5_f = !0, _0x4adac5_0;
    }
  };
}
