(() => {
  "use strict";
  window.NyxInvidiousPlayer = function(_0x27d48c_0, {id: _0x27d48c_1, loop: _0x27d48c_2 = !1, restore: _0x27d48c_3 = {}, onLoading: _0x27d48c_4 = () => {}, onFailure: _0x27d48c_5 = () => {}}) {
    const _0x27d48c_6 = document.createElement("\x76\x69\x64\x65\x6f");
    _0x27d48c_6.controls = !0, _0x27d48c_6.playsInline = !0, _0x27d48c_6.loop = _0x27d48c_2, 
    _0x27d48c_6.preload = "\x61\x75\x74\x6f", _0x27d48c_6.style.cssText = "\x77\x69\x64\x74\x68\x3a\x31\x30\x30\x25\x3b\x68\x65\x69\x67\x68\x74\x3a\x31\x30\x30\x25\x3b\x6f\x62\x6a\x65\x63\x74\x2d\x66\x69\x74\x3a\x63\x6f\x6e\x74\x61\x69\x6e\x3b\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x3a\x23\x30\x62\x30\x63\x30\x66", 
    _0x27d48c_6.muted = _0x27d48c_3.muted ?? _0x27d48c_2, _0x27d48c_6.volume = Math.max(0, Math.min(1, (_0x27d48c_3.volume ?? 100) / 100));
    let _0x27d48c_7 = _0x27d48c_3.rate || 1;
    _0x27d48c_6.defaultPlaybackRate = _0x27d48c_7, _0x27d48c_6.playbackRate = _0x27d48c_7, 
    _0x27d48c_0.replaceChildren(_0x27d48c_6);
    let _0x27d48c_8 = !1, _0x27d48c_9 = 0, _0x27d48c_a = null, _0x27d48c_b = 0, _0x27d48c_c = 0, _0x27d48c_d = _0x27d48c_3.time || 0, _0x27d48c_e = !0 === _0x27d48c_3.paused, _0x27d48c_f = !1, _0x27d48c_10 = !1;
    function _0x27d48c_11() {
      clearTimeout(_0x27d48c_c), _0x27d48c_c = 0;
    }
    function _0x27d48c_12() {
      _0x27d48c_11(), _0x27d48c_8 || _0x27d48c_e || (_0x27d48c_c = setTimeout(() => _0x27d48c_13(), 15e3));
    }
    function _0x27d48c_13() {
      if (!_0x27d48c_8 && !_0x27d48c_f) {
        if (_0x27d48c_11(), _0x27d48c_d = Math.max(_0x27d48c_d, _0x27d48c_6.currentTime || 0), 
        _0x27d48c_7 = _0x27d48c_6.playbackRate, _0x27d48c_9 >= 2) {
          const _0x27d48c_0 = {
            time: _0x27d48c_d,
            paused: _0x27d48c_e,
            muted: _0x27d48c_6.muted,
            volume: 100 * _0x27d48c_6.volume,
            rate: _0x27d48c_7
          };
          return _0x27d48c_15(), void _0x27d48c_5(_0x27d48c_0);
        }
        _0x27d48c_f = !0, _0x27d48c_a?.abort(), _0x27d48c_4(_0x27d48c_d <= 0), _0x27d48c_b = setTimeout(() => {
          _0x27d48c_f = !1, _0x27d48c_9++, _0x27d48c_14();
        }, _0x27d48c_9 ? 3e3 : 1e3);
      }
    }
    async function _0x27d48c_14() {
      if (_0x27d48c_8) return;
      _0x27d48c_10 = !1, _0x27d48c_a?.abort();
      const _0x27d48c_0 = _0x27d48c_a = new AbortController, _0x27d48c_2 = setTimeout(() => _0x27d48c_0.abort(), 12e3);
      _0x27d48c_4(_0x27d48c_d <= 0);
      try {
        const _0x27d48c_2 = await fetch(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6e\x79\x78\x74\x75\x62\x65\x2f\x69\x6e\x76\x69\x64\x69\x6f\x75\x73\x2d\x70\x6c\x61\x79\x62\x61\x63\x6b\x3f\x69\x64\x3d${encodeURIComponent(_0x27d48c_1)}${_0x27d48c_9 ? "\x26\x72\x65\x66\x72\x65\x73\x68\x3d\x31" : ""}`, {
          cache: "\x6e\x6f\x2d\x73\x74\x6f\x72\x65",
          signal: _0x27d48c_0.signal
        }), _0x27d48c_3 = await _0x27d48c_2.json();
        if (!_0x27d48c_2.ok) throw Error("\x56\x69\x64\x65\x6f\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65");
        const _0x27d48c_4 = new URL(_0x27d48c_3.url);
        if (_0x27d48c_3.id !== _0x27d48c_1 || "\x76\x69\x64\x65\x6f\x2f\x6d\x70\x34" !== _0x27d48c_3.type || "\x68\x74\x74\x70\x73\x3a" !== _0x27d48c_4.protocol) throw Error("\x49\x6e\x76\x61\x6c\x69\x64\x20\x76\x69\x64\x65\x6f\x20\x72\x65\x73\x70\x6f\x6e\x73\x65");
        if (_0x27d48c_8 || _0x27d48c_0 !== _0x27d48c_a) return;
        _0x27d48c_10 = !0, _0x27d48c_6.src = _0x27d48c_4.href, _0x27d48c_6.load(), _0x27d48c_12();
      } catch {
        _0x27d48c_8 || _0x27d48c_0 !== _0x27d48c_a || _0x27d48c_13();
      } finally {
        clearTimeout(_0x27d48c_2);
      }
    }
    function _0x27d48c_15() {
      _0x27d48c_8 || (_0x27d48c_8 = !0, _0x27d48c_a?.abort(), clearTimeout(_0x27d48c_b), 
      _0x27d48c_11(), _0x27d48c_6.pause(), _0x27d48c_6.removeAttribute("\x73\x72\x63"), _0x27d48c_6.load(), 
      _0x27d48c_6.remove());
    }
    return _0x27d48c_6.addEventListener("\x6c\x6f\x61\x64\x65\x64\x6d\x65\x74\x61\x64\x61\x74\x61", () => {
      _0x27d48c_6.defaultPlaybackRate = _0x27d48c_7, _0x27d48c_6.playbackRate = _0x27d48c_7, 
      _0x27d48c_d > 0 && (_0x27d48c_6.currentTime = Math.min(_0x27d48c_d, Math.max(0, _0x27d48c_6.duration - .1))), 
      _0x27d48c_e ? (_0x27d48c_11(), _0x27d48c_4(!1)) : _0x27d48c_6.play().catch(_0x27d48c_0 => {
        "\x4e\x6f\x74\x41\x6c\x6c\x6f\x77\x65\x64\x45\x72\x72\x6f\x72" === _0x27d48c_0.name && (_0x27d48c_e = !0, _0x27d48c_11(), _0x27d48c_4(!1));
      });
    }), _0x27d48c_6.addEventListener("\x70\x6c\x61\x79\x69\x6e\x67", () => {
      _0x27d48c_e = !1, _0x27d48c_11(), _0x27d48c_4(!1);
    }), _0x27d48c_6.addEventListener("\x74\x69\x6d\x65\x75\x70\x64\x61\x74\x65", () => {
      _0x27d48c_6.readyState >= 2 && !_0x27d48c_6.paused && _0x27d48c_6.currentTime !== _0x27d48c_d && (_0x27d48c_d = _0x27d48c_6.currentTime, 
      _0x27d48c_11(), _0x27d48c_4(!1));
    }), _0x27d48c_6.addEventListener("\x77\x61\x69\x74\x69\x6e\x67", () => {
      _0x27d48c_10 && !_0x27d48c_f && (_0x27d48c_4(_0x27d48c_d <= 0), _0x27d48c_12());
    }), _0x27d48c_6.addEventListener("\x73\x74\x61\x6c\x6c\x65\x64", () => {
      _0x27d48c_10 && !_0x27d48c_f && _0x27d48c_12();
    }), _0x27d48c_6.addEventListener("\x70\x61\x75\x73\x65", () => {
      !_0x27d48c_f && !_0x27d48c_6.error && _0x27d48c_6.readyState >= 2 && (_0x27d48c_e = !0, 
      _0x27d48c_11(), _0x27d48c_4(!1));
    }), _0x27d48c_6.addEventListener("\x70\x6c\x61\x79", () => {
      _0x27d48c_e = !1, _0x27d48c_12();
    }), _0x27d48c_6.addEventListener("\x65\x72\x72\x6f\x72", _0x27d48c_13), _0x27d48c_14(), {
      isInvidious: !0,
      video: _0x27d48c_6,
      destroy: _0x27d48c_15,
      pauseVideo() {
        _0x27d48c_e = !0, _0x27d48c_11(), _0x27d48c_6.pause();
      },
      getCurrentTime: () => _0x27d48c_6.currentTime,
      getVolume: () => 100 * _0x27d48c_6.volume,
      getPlaybackRate: () => _0x27d48c_6.playbackRate,
      isMuted: () => _0x27d48c_6.muted
    };
  };
})();
