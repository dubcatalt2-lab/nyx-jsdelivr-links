(() => {
  let _0xe31899_0 = "", _0xe31899_1 = "", _0xe31899_2 = null, _0xe31899_3 = 0;
  const _0xe31899_4 = "\x6e\x79\x78\x2e\x6c\x61\x73\x74\x57\x6f\x72\x6b\x69\x6e\x67\x52\x65\x6c\x61\x79";
  function _0xe31899_5(_0xe31899_0) {
    return new Promise(_0xe31899_1 => {
      let _0xe31899_2, _0xe31899_3, _0xe31899_4 = !1;
      const _0xe31899_5 = _0xe31899_0 => {
        if (!_0xe31899_4) {
          if (_0xe31899_4 = !0, clearTimeout(_0xe31899_3), _0xe31899_2) {
            _0xe31899_2.onmessage = _0xe31899_2.onerror = _0xe31899_2.onclose = null;
            try {
              _0xe31899_2.close();
            } catch {}
          }
          _0xe31899_1(_0xe31899_0);
        }
      };
      _0xe31899_3 = setTimeout(() => _0xe31899_5(!1), 1e4);
      try {
        _0xe31899_2 = new WebSocket(_0xe31899_0), _0xe31899_2.binaryType = "\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72", 
        _0xe31899_2.onmessage = _0xe31899_0 => {
          if (!(_0xe31899_0.data instanceof ArrayBuffer)) return;
          const _0xe31899_1 = new Uint8Array(_0xe31899_0.data);
          _0xe31899_1.length >= 9 && 3 === _0xe31899_1[0] && 0 === new DataView(_0xe31899_0.data).getUint32(1, !0) && _0xe31899_5(!0);
        }, _0xe31899_2.onerror = _0xe31899_2.onclose = () => _0xe31899_5(!1);
      } catch {
        _0xe31899_5(!1);
      }
    });
  }
  function _0xe31899_6(_0xe31899_4) {
    const _0xe31899_5 = JSON.stringify(_0xe31899_4);
    _0xe31899_5 !== _0xe31899_0 && (_0xe31899_0 = _0xe31899_5, _0xe31899_1 = "", _0xe31899_2 = null, 
    _0xe31899_3++);
  }
  window.NyxRelaySelection = {
    current: function(_0xe31899_0) {
      return _0xe31899_6(_0xe31899_0), _0xe31899_1 || _0xe31899_0[0] || "";
    },
    choose: async function(_0xe31899_0, _0xe31899_7 = "") {
      if (_0xe31899_6(_0xe31899_0), _0xe31899_2) return _0xe31899_2;
      if (_0xe31899_1 && !_0xe31899_7) return _0xe31899_1;
      const _0xe31899_8 = _0xe31899_3;
      let _0xe31899_9 = "";
      try {
        _0xe31899_9 = localStorage.getItem(_0xe31899_4) || "";
      } catch {}
      const _0xe31899_a = [ ...new Set([ _0xe31899_1, _0xe31899_9, ..._0xe31899_0 ]) ].filter(_0xe31899_1 => _0xe31899_0.includes(_0xe31899_1) && _0xe31899_1 !== _0xe31899_7);
      _0xe31899_0.includes(_0xe31899_7) && _0xe31899_a.push(_0xe31899_7), _0xe31899_2 = (async () => {
        for (const _0xe31899_0 of _0xe31899_a) {
          const _0xe31899_2 = await _0xe31899_5(_0xe31899_0);
          if (_0xe31899_8 !== _0xe31899_3) return "";
          if (_0xe31899_2) {
            _0xe31899_1 = _0xe31899_0;
            try {
              localStorage.setItem(_0xe31899_4, _0xe31899_0);
            } catch {}
            return _0xe31899_0;
          }
        }
        _0xe31899_1 = "";
        try {
          localStorage.removeItem(_0xe31899_4);
        } catch {}
        return "";
      })();
      try {
        return await _0xe31899_2;
      } finally {
        _0xe31899_8 === _0xe31899_3 && (_0xe31899_2 = null);
      }
    },
    probe: _0xe31899_5
  };
})();
