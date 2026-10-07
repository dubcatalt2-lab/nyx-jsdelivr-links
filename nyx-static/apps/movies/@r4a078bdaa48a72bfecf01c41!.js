import { additionalSources as _0x984456_0, movieSourceUrl as _0x984456_1 } from "\x2e\x2f\x40\x72\x66\x61\x64\x64\x34\x66\x39\x35\x39\x35\x62\x34\x31\x33\x62\x64\x35\x35\x65\x32\x30\x61\x33\x33\x21\x2e\x6a\x73\x3f\x76\x3d\x32\x30\x32\x36\x30\x39\x31\x35\x2d\x61\x6e\x69\x65\x6d\x62\x65\x64\x2d\x76\x31";

import { launchMovieConnection as _0x984456_2, inspectMovieConnection as _0x984456_3, styleMovieVideo as _0x984456_4, startMovieConnection as _0x984456_5, canStartMovieConnection as _0x984456_6 } from "\x2e\x2f\x40\x72\x65\x38\x37\x34\x62\x38\x34\x37\x35\x36\x38\x61\x31\x33\x39\x65\x36\x39\x31\x31\x39\x66\x66\x61\x21\x2e\x6a\x73\x3f\x76\x3d\x32\x30\x32\x36\x30\x39\x32\x38\x2d\x70\x6c\x61\x79\x62\x61\x63\x6b\x2d\x72\x65\x63\x6f\x76\x65\x72\x79\x2d\x76\x34";

(() => {
  const _0x984456_7 = _0x984456_0 => document.getElementById(_0x984456_0), _0x984456_8 = window.parent !== window;
  document.querySelector("\x2e\x68\x6f\x6d\x65\x2d\x6c\x69\x6e\x6b").addEventListener("\x63\x6c\x69\x63\x6b", _0x984456_0 => {
    _0x984456_8 && (_0x984456_0.preventDefault(), parent.postMessage({
      type: "\x6e\x79\x78\x3a\x63\x6c\x6f\x73\x65\x2d\x74\x61\x62"
    }, location.origin));
  });
  const _0x984456_9 = (_0x984456_0, _0x984456_1) => {
    try {
      return localStorage.getItem(_0x984456_0) || _0x984456_1;
    } catch {
      return _0x984456_1;
    }
  };
  function _0x984456_a() {
    if (_0x984456_8) {
      try {
        document.documentElement.style.setProperty("\x2d\x2d\x6e\x79\x78\x2d\x66\x6f\x6e\x74", getComputedStyle(parent.document.body).fontFamily);
      } catch {}
      return;
    }
    const _0x984456_0 = {
      outfit: "\x4f\x75\x74\x66\x69\x74",
      raleway: "\x52\x61\x6c\x65\x77\x61\x79",
      nunito: "\x4e\x75\x6e\x69\x74\x6f",
      inter: "\x49\x6e\x74\x65\x72",
      poppins: "\x50\x6f\x70\x70\x69\x6e\x73",
      quicksand: "\x51\x75\x69\x63\x6b\x73\x61\x6e\x64",
      lexend: "\x4c\x65\x78\x65\x6e\x64",
      montserrat: "\x4d\x6f\x6e\x74\x73\x65\x72\x72\x61\x74",
      atkinson: "\x41\x74\x6b\x69\x6e\x73\x6f\x6e\x20\x48\x79\x70\x65\x72\x6c\x65\x67\x69\x62\x6c\x65"
    }[_0x984456_9("\x6e\x79\x78\x2e\x66\x6f\x6e\x74", "\x6f\x75\x74\x66\x69\x74")] || "\x4f\x75\x74\x66\x69\x74";
    document.documentElement.style.setProperty("\x2d\x2d\x6e\x79\x78\x2d\x66\x6f\x6e\x74", `\x22${_0x984456_0}\x22\x2c\x41\x72\x69\x61\x6c\x2c\x73\x61\x6e\x73\x2d\x73\x65\x72\x69\x66`);
    let _0x984456_1 = document.getElementById("\x6e\x79\x78\x2d\x6d\x6f\x76\x69\x65\x73\x2d\x66\x6f\x6e\x74");
    _0x984456_1 || (_0x984456_1 = document.createElement("\x6c\x69\x6e\x6b"), _0x984456_1.id = "\x6e\x79\x78\x2d\x6d\x6f\x76\x69\x65\x73\x2d\x66\x6f\x6e\x74", 
    _0x984456_1.rel = "\x73\x74\x79\x6c\x65\x73\x68\x65\x65\x74", document.head.append(_0x984456_1));
    const _0x984456_2 = `\x68\x74\x74\x70\x73\x3a\x2f\x2f\x66\x6f\x6e\x74\x73\x2e\x67\x6f\x6f\x67\x6c\x65\x61\x70\x69\x73\x2e\x63\x6f\x6d\x2f\x63\x73\x73\x32\x3f\x66\x61\x6d\x69\x6c\x79\x3d${encodeURIComponent(_0x984456_0).replaceAll("\x25\x32\x30", "\x2b")}\x3a\x77\x67\x68\x74\x40\x34\x30\x30\x3b\x35\x30\x30\x3b\x36\x30\x30\x3b\x37\x30\x30\x26\x64\x69\x73\x70\x6c\x61\x79\x3d\x73\x77\x61\x70`;
    _0x984456_1.href !== _0x984456_2 && (_0x984456_1.href = _0x984456_2);
    const _0x984456_3 = _0x984456_9("\x6e\x79\x78\x2e\x62\x65\x61\x6d\x57\x61\x6c\x6c\x70\x61\x70\x65\x72", "\x66\x72\x6f\x73\x74");
    document.documentElement.dataset.nyxBeamWallpaper = _0x984456_3;
    const _0x984456_4 = _0x984456_9("\x6e\x79\x78\x2e\x63\x75\x73\x74\x6f\x6d\x54\x68\x65\x6d\x65\x43\x6f\x6c\x6f\x72", ""), _0x984456_5 = "\x63\x75\x73\x74\x6f\x6d" === _0x984456_9("\x6e\x79\x78\x2e\x74\x68\x65\x6d\x65", "\x64\x65\x66\x61\x75\x6c\x74") && /^#[a-f0-9]{6}$/i.test(_0x984456_4) ? {
      lightColor: _0x984456_4
    } : {};
    window.NyxBeamsWallpaper?.apply(_0x984456_3, _0x984456_5), window.NyxLineWavesWallpaper?.apply(_0x984456_3, {
      colorVariant: _0x984456_9("\x6e\x79\x78\x2e\x6c\x69\x6e\x65\x57\x61\x76\x65\x73\x2e\x63\x6f\x6c\x6f\x72\x56\x61\x72\x69\x61\x6e\x74", "\x66\x72\x6f\x73\x74")
    });
  }
  if (!_0x984456_8) {
    document.documentElement.classList.add("\x6e\x79\x78\x2d\x6d\x6f\x76\x69\x65\x73\x2d\x73\x74\x61\x6e\x64\x61\x6c\x6f\x6e\x65");
    for (const _0x984456_0 of [ "\x6e\x79\x78\x42\x65\x61\x6d\x73\x42\x67", "\x6e\x79\x78\x4c\x69\x6e\x65\x57\x61\x76\x65\x73\x42\x67" ]) {
      const _0x984456_1 = document.createElement("\x63\x61\x6e\x76\x61\x73");
      _0x984456_1.id = _0x984456_0, _0x984456_1.setAttribute("\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e", "\x74\x72\x75\x65"), document.body.prepend(_0x984456_1);
    }
    (async () => {
      for (const _0x984456_0 of [ "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x73\x73\x65\x74\x73\x2f\x76\x65\x6e\x64\x6f\x72\x2f\x74\x68\x72\x65\x65\x2e\x72\x31\x33\x34\x2e\x6d\x69\x6e\x2e\x6a\x73", "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x6a\x73\x2f\x40\x72\x62\x36\x38\x37\x35\x30\x63\x30\x31\x63\x38\x36\x34\x61\x39\x65\x66\x39\x66\x38\x65\x61\x65\x31\x21\x2e\x6a\x73", "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x6a\x73\x2f\x40\x72\x64\x35\x33\x65\x64\x66\x38\x61\x66\x64\x39\x65\x33\x33\x31\x35\x66\x65\x33\x63\x35\x35\x32\x31\x21\x2e\x6a\x73" ]) await new Promise((_0x984456_1, _0x984456_2) => {
        const _0x984456_3 = document.createElement("\x73\x63\x72\x69\x70\x74");
        _0x984456_3.src = _0x984456_0, _0x984456_3.onload = _0x984456_1, _0x984456_3.onerror = _0x984456_2, 
        document.head.append(_0x984456_3);
      });
      _0x984456_a();
    })().catch(() => {});
  }
  _0x984456_a(), addEventListener("\x73\x74\x6f\x72\x61\x67\x65", _0x984456_a), addEventListener("\x6d\x65\x73\x73\x61\x67\x65", _0x984456_0 => {
    _0x984456_0.source === parent && _0x984456_0.origin === location.origin && "\x6e\x79\x78\x3a\x74\x68\x65\x6d\x65\x2d\x73\x79\x6e\x63" === _0x984456_0.data?.type && _0x984456_a();
  });
  let _0x984456_b, _0x984456_c, _0x984456_d, _0x984456_e = "", _0x984456_f = 1, _0x984456_10 = 1, _0x984456_11 = null;
  async function _0x984456_12(_0x984456_0, _0x984456_1, _0x984456_2 = 0) {
    for (let _0x984456_4 = 0; ;_0x984456_4++) try {
      const _0x984456_2 = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6d\x6f\x76\x69\x65\x73\x2f" + _0x984456_0, {
        signal: _0x984456_1,
        cache: "\x6e\x6f\x2d\x73\x74\x6f\x72\x65"
      }), _0x984456_3 = JSON.parse(await _0x984456_2.text(), (_0x984456_0, _0x984456_1) => "\x73\x74\x72\x69\x6e\x67" == typeof _0x984456_1 ? _0x984456_1.replace(/^https:\/\/image\.tmdb\.org\/t\/p\/(w185|w342|w500|w780|w1280|original)\/([a-zA-Z0-9_-]+\.(?:jpg|png|webp))$/, "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6d\x6f\x76\x69\x65\x73\x2f\x69\x6d\x61\x67\x65\x2f\x24\x31\x2f\x24\x32") : _0x984456_1);
      if (!_0x984456_2.ok) throw Object.assign(Error(_0x984456_3.error || "\x4d\x6f\x76\x69\x65\x73\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x62\x65\x20\x6c\x6f\x61\x64\x65\x64\x2e"), {
        retryable: [ 502, 503, 504 ].includes(_0x984456_2.status)
      });
      return _0x984456_3;
    } catch (_0x984456_3) {
      if (_0x984456_1?.aborted || _0x984456_4 >= _0x984456_2 || !(_0x984456_3.retryable || _0x984456_3 instanceof TypeError)) throw _0x984456_3;
      await new Promise((_0x984456_0, _0x984456_2) => {
        const _0x984456_3 = () => {
          clearTimeout(_0x984456_5), _0x984456_2(_0x984456_1.reason);
        }, _0x984456_5 = setTimeout(() => {
          _0x984456_1?.removeEventListener("\x61\x62\x6f\x72\x74", _0x984456_3), _0x984456_0();
        }, 400 * (_0x984456_4 + 1));
        _0x984456_1?.addEventListener("\x61\x62\x6f\x72\x74", _0x984456_3, {
          once: !0
        }), _0x984456_1?.aborted && _0x984456_3();
      });
    }
  }
  function _0x984456_13(_0x984456_0, _0x984456_1 = "") {
    const _0x984456_2 = document.createElement("\x69\x6d\x67");
    _0x984456_2.alt = _0x984456_1, _0x984456_2.loading = "\x6c\x61\x7a\x79";
    let _0x984456_3 = !1;
    const _0x984456_4 = () => {
      _0x984456_2.onerror = null, _0x984456_2.classList.add("\x70\x6f\x73\x74\x65\x72\x2d\x66\x61\x6c\x6c\x62\x61\x63\x6b"), _0x984456_2.src = "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x73\x73\x65\x74\x73\x2f\x69\x63\x6f\x6e\x73\x2f\x6e\x79\x78\x2d\x63\x61\x74\x2d\x6d\x6f\x6f\x6e\x2e\x73\x76\x67\x3f\x76\x3d\x33";
    };
    return _0x984456_2.onerror = () => {
      _0x984456_3 || !_0x984456_0?.startsWith("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x69\x6d\x61\x67\x65\x2e\x74\x6d\x64\x62\x2e\x6f\x72\x67\x2f\x74\x2f\x70\x2f") && !_0x984456_0?.startsWith("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6d\x6f\x76\x69\x65\x73\x2f\x69\x6d\x61\x67\x65\x2f") ? _0x984456_4() : (_0x984456_3 = !0, 
      _0x984456_2.src = _0x984456_0.replace(/\/w\d+\//, "\x2f\x77\x31\x38\x35\x2f"));
    }, _0x984456_0 ? _0x984456_2.src = _0x984456_0 : _0x984456_4(), _0x984456_2;
  }
  const _0x984456_14 = matchMedia("\x28\x70\x72\x65\x66\x65\x72\x73\x2d\x72\x65\x64\x75\x63\x65\x64\x2d\x6d\x6f\x74\x69\x6f\x6e\x3a\x20\x72\x65\x64\x75\x63\x65\x29"), _0x984456_15 = document.createElement("\x64\x69\x76");
  _0x984456_15.id = "\x6d\x6f\x76\x69\x65\x2d\x62\x61\x63\x6b\x64\x72\x6f\x70", _0x984456_15.setAttribute("\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e", "\x74\x72\x75\x65"), 
  document.body.prepend(_0x984456_15);
  let _0x984456_16 = 0, _0x984456_17 = "";
  function _0x984456_18(_0x984456_0) {
    const _0x984456_1 = _0x984456_0?.backdrop;
    if (!_0x984456_1 || _0x984456_7("\x66\x65\x61\x74\x75\x72\x65\x64").hidden) return _0x984456_15.hidden = !0, 
    void document.body.classList.remove("\x6d\x6f\x76\x69\x65\x2d\x62\x61\x63\x6b\x64\x72\x6f\x70\x2d\x61\x63\x74\x69\x76\x65");
    if (_0x984456_15.hidden = !1, document.body.classList.add("\x6d\x6f\x76\x69\x65\x2d\x62\x61\x63\x6b\x64\x72\x6f\x70\x2d\x61\x63\x74\x69\x76\x65"), 
    _0x984456_1 === _0x984456_17) return;
    const _0x984456_2 = ++_0x984456_16;
    _0x984456_17 = _0x984456_1;
    const _0x984456_3 = new Image;
    _0x984456_3.alt = "", _0x984456_3.onload = () => {
      if (_0x984456_2 !== _0x984456_16) return;
      const _0x984456_0 = [ ..._0x984456_15.children ];
      _0x984456_15.append(_0x984456_3), _0x984456_3.animate([ {
        opacity: 0
      }, {
        opacity: 1
      } ], {
        duration: _0x984456_14.matches ? 0 : 650
      }).finished.then(() => _0x984456_0.forEach(_0x984456_0 => _0x984456_0.remove())).catch(() => {});
    }, _0x984456_3.onerror = () => {
      _0x984456_2 === _0x984456_16 && (_0x984456_17 = "");
    }, _0x984456_3.src = _0x984456_1;
  }
  let _0x984456_19, _0x984456_1a = [], _0x984456_1b = 0, _0x984456_1c = _0x984456_14.matches, _0x984456_1d = !1, _0x984456_1e = !0, _0x984456_1f = !1;
  function _0x984456_20() {
    clearTimeout(_0x984456_19), _0x984456_1a.length < 2 || _0x984456_1c || _0x984456_14.matches || _0x984456_1d || !_0x984456_1e || document.hidden || _0x984456_7("\x66\x65\x61\x74\x75\x72\x65\x64").hidden || _0x984456_7("\x64\x65\x74\x61\x69\x6c").open || !_0x984456_7("\x77\x61\x74\x63\x68\x2d\x61\x72\x65\x61").hidden || (_0x984456_19 = setTimeout(() => _0x984456_21(_0x984456_1b + 1), 4e3));
  }
  function _0x984456_21(_0x984456_0, {recenter: _0x984456_1 = !0} = {}) {
    if (!_0x984456_1a.length) return;
    const _0x984456_2 = (_0x984456_0 + _0x984456_1a.length) % _0x984456_1a.length, _0x984456_3 = _0x984456_1f && _0x984456_2 !== _0x984456_1b, _0x984456_4 = _0x984456_0 >= _0x984456_1b ? 1 : -1, _0x984456_5 = new Map([ ..._0x984456_7("\x61\x63\x63\x6f\x72\x64\x69\x6f\x6e\x2d\x67\x61\x6c\x6c\x65\x72\x79").children ].map(_0x984456_0 => [ _0x984456_0, _0x984456_0.getBoundingClientRect() ]));
    for (const _0x984456_7 of _0x984456_5.keys()) _0x984456_7.getAnimations().forEach(_0x984456_0 => _0x984456_0.cancel());
    _0x984456_1b = (_0x984456_0 + _0x984456_1a.length) % _0x984456_1a.length;
    const _0x984456_6 = _0x984456_1a[_0x984456_1b];
    _0x984456_18(_0x984456_6), _0x984456_7("\x66\x65\x61\x74\x75\x72\x65\x64\x2d\x74\x69\x74\x6c\x65").textContent = _0x984456_6.title, 
    _0x984456_7("\x66\x65\x61\x74\x75\x72\x65\x64\x2d\x6f\x76\x65\x72\x76\x69\x65\x77").textContent = _0x984456_6.overview || "", _0x984456_7("\x66\x65\x61\x74\x75\x72\x65\x64\x2d\x6d\x65\x74\x61").textContent = [ _0x984456_6.releaseDate?.slice(0, 4), _0x984456_6.rating > 0 ? _0x984456_6.rating.toFixed(1) + "\x20\x2f\x20\x31\x30" : "" ].filter(Boolean).join("\x20\xb7\x20");
    const _0x984456_8 = [ ..._0x984456_7("\x61\x63\x63\x6f\x72\x64\x69\x6f\x6e\x2d\x67\x61\x6c\x6c\x65\x72\x79").children ].sort((_0x984456_0, _0x984456_1) => Number(_0x984456_0.dataset.index) - Number(_0x984456_1.dataset.index));
    _0x984456_8.forEach((_0x984456_0, _0x984456_1) => {
      const _0x984456_2 = _0x984456_1 === _0x984456_1b;
      _0x984456_0.classList.toggle("\x61\x67\x2d\x70\x61\x6e\x65\x6c\x2d\x2d\x61\x63\x74\x69\x76\x65", _0x984456_2), _0x984456_0.style.setProperty("\x2d\x2d\x61\x67\x2d\x67\x72\x6f\x77", _0x984456_2 ? String(.6 * (_0x984456_8.length - 1) / .4 || 1) : "\x31"), 
      _0x984456_0.style.setProperty("\x2d\x2d\x61\x67\x2d\x74\x69\x6c\x74", _0x984456_2 ? "\x30\x64\x65\x67" : _0x984456_1 < _0x984456_1b ? "\x35\x64\x65\x67" : "\x2d\x35\x64\x65\x67"), 
      _0x984456_0.style.setProperty("\x2d\x2d\x61\x67\x2d\x73\x68\x69\x66\x74", _0x984456_2 ? "\x30\x70\x78" : 10 * Math.max(-1.5, Math.min(1.5, _0x984456_1b - _0x984456_1)) + "\x70\x78"), 
      _0x984456_0.querySelector("\x2e\x61\x67\x2d\x70\x61\x6e\x65\x6c\x2d\x74\x72\x69\x67\x67\x65\x72").setAttribute("\x61\x72\x69\x61\x2d\x65\x78\x70\x61\x6e\x64\x65\x64", String(_0x984456_2));
    }), _0x984456_8[_0x984456_1b] && _0x984456_8[_0x984456_1b].append(document.querySelector("\x2e\x66\x65\x61\x74\x75\x72\x65\x64\x2d\x63\x6f\x70\x79"));
    const _0x984456_9 = Math.floor(_0x984456_8.length / 2);
    for (let _0x984456_a = 0; _0x984456_1 && _0x984456_a < _0x984456_8.length; _0x984456_a++) {
      const _0x984456_0 = (_0x984456_1b + _0x984456_9 - _0x984456_a + _0x984456_8.length) % _0x984456_8.length, _0x984456_1 = _0x984456_8[_0x984456_0];
      _0x984456_1.style.setProperty("\x2d\x2d\x61\x67\x2d\x74\x69\x6c\x74", _0x984456_a < _0x984456_9 ? "\x35\x64\x65\x67" : _0x984456_a > _0x984456_9 ? "\x2d\x35\x64\x65\x67" : "\x30\x64\x65\x67"), 
      _0x984456_7("\x61\x63\x63\x6f\x72\x64\x69\x6f\x6e\x2d\x67\x61\x6c\x6c\x65\x72\x79").append(_0x984456_1);
    }
    if (_0x984456_3 && !_0x984456_14.matches) {
      const _0x984456_0 = _0x984456_7("\x61\x63\x63\x6f\x72\x64\x69\x6f\x6e\x2d\x67\x61\x6c\x6c\x65\x72\x79").getBoundingClientRect(), _0x984456_2 = matchMedia("\x28\x6d\x61\x78\x2d\x77\x69\x64\x74\x68\x3a\x36\x30\x30\x70\x78\x29").matches;
      for (const _0x984456_6 of _0x984456_8) {
        const _0x984456_3 = _0x984456_5.get(_0x984456_6), _0x984456_7 = _0x984456_6.getBoundingClientRect();
        if (!_0x984456_3 || !_0x984456_7.width || !_0x984456_7.height) continue;
        let _0x984456_8 = _0x984456_3.left - _0x984456_7.left, _0x984456_9 = _0x984456_3.top - _0x984456_7.top;
        !_0x984456_2 && Math.abs(_0x984456_8) > .65 * _0x984456_0.width && (_0x984456_8 = -_0x984456_4 * (_0x984456_7.width + 12)), 
        _0x984456_2 && Math.abs(_0x984456_9) > .65 * _0x984456_0.height && (_0x984456_9 = -_0x984456_4 * (_0x984456_7.height + 7)), 
        _0x984456_6.animate([ {
          transform: `\x74\x72\x61\x6e\x73\x6c\x61\x74\x65\x28${_0x984456_8}\x70\x78\x2c${_0x984456_9}\x70\x78\x29\x20\x73\x63\x61\x6c\x65\x28${_0x984456_3.width / _0x984456_7.width}\x2c${_0x984456_3.height / _0x984456_7.height}\x29`
        }, {
          transform: "\x6e\x6f\x6e\x65"
        } ], {
          duration: _0x984456_1 ? 500 : 450,
          easing: "\x63\x75\x62\x69\x63\x2d\x62\x65\x7a\x69\x65\x72\x28\x2e\x32\x32\x2c\x31\x2c\x2e\x33\x36\x2c\x31\x29"
        });
      }
      const _0x984456_3 = document.querySelector("\x2e\x66\x65\x61\x74\x75\x72\x65\x64\x2d\x63\x6f\x70\x79");
      _0x984456_3.getAnimations().forEach(_0x984456_0 => _0x984456_0.cancel()), _0x984456_3.animate([ {
        opacity: 0
      }, {
        opacity: 1
      } ], {
        duration: _0x984456_1 ? 350 : 280
      });
    }
    _0x984456_1f = !0, _0x984456_7("\x66\x65\x61\x74\x75\x72\x65\x64\x2d\x6f\x70\x65\x6e").onclick = () => location.hash = "\x6d\x6f\x76\x69\x65\x3d" + _0x984456_6.id, 
    _0x984456_7("\x73\x6c\x69\x64\x65\x2d\x63\x6f\x75\x6e\x74").textContent = `${_0x984456_1b + 1}\x20\x2f\x20${_0x984456_1a.length}`, 
    [ ..._0x984456_7("\x73\x6c\x69\x64\x65\x2d\x64\x6f\x74\x73").children ].forEach((_0x984456_0, _0x984456_1) => _0x984456_0.setAttribute("\x61\x72\x69\x61\x2d\x63\x75\x72\x72\x65\x6e\x74", String(_0x984456_1 === _0x984456_1b))), 
    _0x984456_20();
  }
  _0x984456_7("\x73\x6c\x69\x64\x65\x2d\x70\x72\x65\x76\x69\x6f\x75\x73").onclick = () => _0x984456_21(_0x984456_1b - 1), _0x984456_7("\x73\x6c\x69\x64\x65\x2d\x6e\x65\x78\x74").onclick = () => _0x984456_21(_0x984456_1b + 1);
  let _0x984456_22, _0x984456_23 = "";
  async function _0x984456_24() {
    clearTimeout(_0x984456_19), _0x984456_b?.abort();
    const _0x984456_0 = _0x984456_b = new AbortController;
    _0x984456_7("\x6e\x6f\x74\x69\x63\x65").textContent = "\x4c\x6f\x61\x64\x69\x6e\x67\x20\x6d\x6f\x76\x69\x65\x73\x2e\x2e\x2e", _0x984456_7("\x72\x65\x74\x72\x79\x2d\x73\x65\x61\x72\x63\x68").hidden = !0, 
    _0x984456_7("\x63\x6c\x65\x61\x72\x2d\x73\x65\x61\x72\x63\x68").hidden = !_0x984456_e, _0x984456_7("\x66\x65\x61\x74\x75\x72\x65\x64").hidden = !0, 
    _0x984456_18(null), _0x984456_7("\x67\x72\x69\x64").setAttribute("\x61\x72\x69\x61\x2d\x62\x75\x73\x79", "\x74\x72\x75\x65"), _0x984456_7("\x72\x65\x73\x75\x6c\x74\x2d\x70\x61\x67\x65").textContent = "", 
    _0x984456_7("\x67\x72\x69\x64").replaceChildren(), _0x984456_7("\x70\x72\x65\x76\x69\x6f\x75\x73").disabled = _0x984456_7("\x6e\x65\x78\x74").disabled = !0;
    try {
      const _0x984456_1 = await _0x984456_12("\x73\x65\x61\x72\x63\x68\x3f" + new URLSearchParams({
        q: _0x984456_e,
        page: _0x984456_f
      }), _0x984456_0.signal, 2);
      if (_0x984456_0 !== _0x984456_b) return;
      _0x984456_10 = _0x984456_1.totalPages, function(_0x984456_0) {
        if (clearTimeout(_0x984456_19), _0x984456_1f = !1, _0x984456_1a = [ ...new Map(_0x984456_0.filter(_0x984456_0 => _0x984456_0.backdrop && !/^coyote\s+vs\.?\s+acme$/i.test(_0x984456_0.title)).map(_0x984456_0 => [ _0x984456_0.id, _0x984456_0 ])).values() ].slice(0, 5), 
        _0x984456_1a.length > 1 && _0x984456_1a.length % 2 == 0 && _0x984456_1a.pop(), !_0x984456_1a.length) {
          const _0x984456_1 = _0x984456_0.find(_0x984456_0 => !/^coyote\s+vs\.?\s+acme$/i.test(_0x984456_0.title));
          _0x984456_1 && (_0x984456_1a = [ _0x984456_1 ]);
        }
        _0x984456_7("\x66\x65\x61\x74\x75\x72\x65\x64").hidden = !_0x984456_1a.length || !!_0x984456_e || 1 !== _0x984456_f, 
        _0x984456_7("\x67\x61\x6c\x6c\x65\x72\x79\x2d\x63\x6f\x6e\x74\x72\x6f\x6c\x73").hidden = _0x984456_1a.length < 2;
        const _0x984456_1 = document.querySelector("\x2e\x66\x65\x61\x74\x75\x72\x65\x64\x2d\x63\x6f\x70\x79");
        _0x984456_7("\x66\x65\x61\x74\x75\x72\x65\x64").append(_0x984456_1), _0x984456_7("\x61\x63\x63\x6f\x72\x64\x69\x6f\x6e\x2d\x67\x61\x6c\x6c\x65\x72\x79").replaceChildren(..._0x984456_1a.map((_0x984456_0, _0x984456_1) => {
          const _0x984456_2 = document.createElement("\x61\x72\x74\x69\x63\x6c\x65");
          _0x984456_2.className = "\x61\x67\x2d\x70\x61\x6e\x65\x6c", _0x984456_2.dataset.index = String(_0x984456_1);
          const _0x984456_3 = document.createElement("\x64\x69\x76");
          _0x984456_3.className = "\x61\x67\x2d\x70\x61\x6e\x65\x6c\x5f\x5f\x6d\x65\x64\x69\x61";
          const _0x984456_4 = document.createElement("\x69\x6d\x67");
          _0x984456_4.alt = "", _0x984456_4.draggable = !1, _0x984456_4.src = _0x984456_0.backdrop || _0x984456_0.poster || "", 
          _0x984456_4.onerror = () => _0x984456_4.hidden = !0, _0x984456_3.append(_0x984456_4);
          const _0x984456_5 = document.createElement("\x73\x70\x61\x6e");
          _0x984456_5.className = "\x61\x67\x2d\x70\x61\x6e\x65\x6c\x5f\x5f\x6f\x76\x65\x72\x6c\x61\x79", _0x984456_5.setAttribute("\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e", "\x74\x72\x75\x65");
          const _0x984456_6 = document.createElement("\x62\x75\x74\x74\x6f\x6e");
          _0x984456_6.type = "\x62\x75\x74\x74\x6f\x6e", _0x984456_6.className = "\x61\x67\x2d\x70\x61\x6e\x65\x6c\x2d\x74\x72\x69\x67\x67\x65\x72", _0x984456_6.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", "\x46\x65\x61\x74\x75\x72\x65\x20" + _0x984456_0.title), 
          _0x984456_6.title = "\x46\x65\x61\x74\x75\x72\x65\x20" + _0x984456_0.title, _0x984456_6.setAttribute("\x61\x72\x69\x61\x2d\x65\x78\x70\x61\x6e\x64\x65\x64", "\x66\x61\x6c\x73\x65"), 
          _0x984456_6.onclick = () => {
            _0x984456_21(_0x984456_1);
          };
          const _0x984456_7 = document.createElement("\x73\x70\x61\x6e");
          return _0x984456_7.className = "\x61\x67\x2d\x70\x61\x6e\x65\x6c\x5f\x5f\x6c\x61\x62\x65\x6c", _0x984456_7.textContent = _0x984456_0.title, 
          _0x984456_7.setAttribute("\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e", "\x74\x72\x75\x65"), _0x984456_2.append(_0x984456_3, _0x984456_5, _0x984456_6, _0x984456_7), 
          _0x984456_2;
        })), _0x984456_7("\x73\x6c\x69\x64\x65\x2d\x64\x6f\x74\x73").replaceChildren(), _0x984456_1a.forEach((_0x984456_0, _0x984456_1) => {
          const _0x984456_2 = document.createElement("\x62\x75\x74\x74\x6f\x6e");
          _0x984456_2.type = "\x62\x75\x74\x74\x6f\x6e", _0x984456_2.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", `\x53\x68\x6f\x77\x20${_0x984456_0.title}`), 
          _0x984456_2.title = `\x53\x68\x6f\x77\x20${_0x984456_0.title}`, _0x984456_2.onclick = () => _0x984456_21(_0x984456_1), 
          _0x984456_7("\x73\x6c\x69\x64\x65\x2d\x64\x6f\x74\x73").append(_0x984456_2);
        }), _0x984456_1a.length ? _0x984456_21(0) : _0x984456_18(null);
      }(_0x984456_1.featured || _0x984456_1.results), _0x984456_7("\x72\x65\x73\x75\x6c\x74\x73\x2d\x74\x69\x74\x6c\x65").textContent = _0x984456_e ? "\x52\x65\x73\x75\x6c\x74\x73\x20\x66\x6f\x72\x20" + _0x984456_e : "\x50\x6f\x70\x75\x6c\x61\x72\x20\x6d\x6f\x76\x69\x65\x73", 
      _0x984456_7("\x72\x65\x73\x75\x6c\x74\x2d\x70\x61\x67\x65").textContent = `\x50\x61\x67\x65\x20${_0x984456_f}\x20\x6f\x66\x20${_0x984456_10}`;
      for (const _0x984456_0 of _0x984456_1.results) {
        const _0x984456_1 = document.createElement("\x62\x75\x74\x74\x6f\x6e");
        _0x984456_1.type = "\x62\x75\x74\x74\x6f\x6e", _0x984456_1.className = "\x6d\x6f\x76\x69\x65\x2d\x63\x61\x72\x64";
        const _0x984456_2 = document.createElement("\x64\x69\x76");
        _0x984456_2.className = "\x70\x6f\x73\x74\x65\x72", _0x984456_2.append(_0x984456_13(_0x984456_0.poster, _0x984456_0.title + "\x20\x70\x6f\x73\x74\x65\x72"));
        const _0x984456_3 = document.createElement("\x64\x69\x76");
        _0x984456_3.className = "\x63\x61\x72\x64\x2d\x63\x6f\x70\x79";
        const _0x984456_4 = document.createElement("\x73\x74\x72\x6f\x6e\x67");
        _0x984456_4.textContent = _0x984456_0.title;
        const _0x984456_5 = document.createElement("\x73\x70\x61\x6e");
        _0x984456_5.textContent = [ "\x74\x76" === _0x984456_0.kind ? "\x53\x65\x72\x69\x65\x73" : "\x4d\x6f\x76\x69\x65", _0x984456_0.releaseDate?.slice(0, 4) || "\x44\x61\x74\x65\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65", _0x984456_0.rating > 0 ? "\u2605\x20" + _0x984456_0.rating.toFixed(1) : "" ].filter(Boolean).join("\x20\xb7\x20"), 
        _0x984456_3.append(_0x984456_4, _0x984456_5), _0x984456_1.append(_0x984456_2, _0x984456_3), 
        _0x984456_1.onclick = () => location.hash = ("\x74\x76" === _0x984456_0.kind ? "\x74\x76\x3d" : "\x6d\x6f\x76\x69\x65\x3d") + _0x984456_0.id, 
        _0x984456_7("\x67\x72\x69\x64").append(_0x984456_1);
      }
      _0x984456_7("\x6e\x6f\x74\x69\x63\x65").textContent = _0x984456_1.results.length ? "" : "\x4e\x6f\x20\x6d\x6f\x76\x69\x65\x73\x20\x6f\x72\x20\x73\x65\x72\x69\x65\x73\x20\x66\x6f\x75\x6e\x64\x2e\x20\x54\x72\x79\x20\x61\x6e\x6f\x74\x68\x65\x72\x20\x74\x69\x74\x6c\x65\x2e", 
      _0x984456_7("\x70\x72\x65\x76\x69\x6f\x75\x73").disabled = _0x984456_f <= 1, _0x984456_7("\x6e\x65\x78\x74").disabled = _0x984456_f >= _0x984456_10;
    } catch (_0x984456_1) {
      _0x984456_0 !== _0x984456_b || _0x984456_0.signal.aborted || (_0x984456_7("\x6e\x6f\x74\x69\x63\x65").textContent = _0x984456_1.message, 
      _0x984456_7("\x72\x65\x74\x72\x79\x2d\x73\x65\x61\x72\x63\x68").hidden = !1);
    } finally {
      _0x984456_0 === _0x984456_b && _0x984456_7("\x67\x72\x69\x64").setAttribute("\x61\x72\x69\x61\x2d\x62\x75\x73\x79", "\x66\x61\x6c\x73\x65");
    }
  }
  _0x984456_7("\x61\x63\x63\x6f\x72\x64\x69\x6f\x6e\x2d\x67\x61\x6c\x6c\x65\x72\x79").addEventListener("\x70\x6f\x69\x6e\x74\x65\x72\x6d\x6f\x76\x65", _0x984456_0 => {
    if ("\x6d\x6f\x75\x73\x65" !== _0x984456_0.pointerType) return;
    const _0x984456_1 = _0x984456_0.clientX + "\x2c" + _0x984456_0.clientY;
    if (_0x984456_1 === _0x984456_23) return;
    _0x984456_23 = _0x984456_1;
    const _0x984456_2 = _0x984456_0.target.closest("\x2e\x61\x67\x2d\x70\x61\x6e\x65\x6c");
    if (_0x984456_2) {
      const _0x984456_0 = Number(_0x984456_2.dataset.index);
      _0x984456_0 !== _0x984456_1b && _0x984456_21(_0x984456_0, {
        recenter: !1
      });
    }
  }), _0x984456_7("\x61\x63\x63\x6f\x72\x64\x69\x6f\x6e\x2d\x67\x61\x6c\x6c\x65\x72\x79").addEventListener("\x70\x6f\x69\x6e\x74\x65\x72\x6c\x65\x61\x76\x65", () => {
    _0x984456_23 = "";
  }), _0x984456_7("\x66\x65\x61\x74\x75\x72\x65\x64").addEventListener("\x66\x6f\x63\x75\x73\x69\x6e", () => {
    _0x984456_1d = document.activeElement.matches("\x3a\x66\x6f\x63\x75\x73\x2d\x76\x69\x73\x69\x62\x6c\x65"), _0x984456_20();
  }), _0x984456_7("\x66\x65\x61\x74\x75\x72\x65\x64").addEventListener("\x66\x6f\x63\x75\x73\x6f\x75\x74", () => {
    queueMicrotask(() => {
      _0x984456_1d = _0x984456_7("\x66\x65\x61\x74\x75\x72\x65\x64").contains(document.activeElement) && document.activeElement.matches("\x3a\x66\x6f\x63\x75\x73\x2d\x76\x69\x73\x69\x62\x6c\x65"), 
      _0x984456_20();
    });
  }), _0x984456_7("\x66\x65\x61\x74\x75\x72\x65\x64").addEventListener("\x6b\x65\x79\x64\x6f\x77\x6e", _0x984456_0 => {
    _0x984456_0.altKey || _0x984456_0.ctrlKey || _0x984456_0.metaKey || _0x984456_0.shiftKey || "\x41\x72\x72\x6f\x77\x4c\x65\x66\x74" !== _0x984456_0.key && "\x41\x72\x72\x6f\x77\x52\x69\x67\x68\x74" !== _0x984456_0.key || (_0x984456_0.preventDefault(), 
    _0x984456_21(_0x984456_1b + ("\x41\x72\x72\x6f\x77\x52\x69\x67\x68\x74" === _0x984456_0.key ? 1 : -1)));
  }), _0x984456_7("\x66\x65\x61\x74\x75\x72\x65\x64").addEventListener("\x70\x6f\x69\x6e\x74\x65\x72\x64\x6f\x77\x6e", _0x984456_0 => {
    "\x74\x6f\x75\x63\x68" !== _0x984456_0.pointerType || _0x984456_0.target.closest("\x62\x75\x74\x74\x6f\x6e\x2c\x61") || (_0x984456_22 = {
      x: _0x984456_0.clientX,
      y: _0x984456_0.clientY
    });
  }), _0x984456_7("\x66\x65\x61\x74\x75\x72\x65\x64").addEventListener("\x70\x6f\x69\x6e\x74\x65\x72\x75\x70", _0x984456_0 => {
    if (!_0x984456_22) return;
    const _0x984456_1 = _0x984456_0.clientX - _0x984456_22.x, _0x984456_2 = _0x984456_0.clientY - _0x984456_22.y;
    _0x984456_22 = null, Math.abs(_0x984456_1) > 60 && Math.abs(_0x984456_1) > 1.5 * Math.abs(_0x984456_2) && _0x984456_21(_0x984456_1b + (_0x984456_1 < 0 ? 1 : -1));
  }), _0x984456_7("\x66\x65\x61\x74\x75\x72\x65\x64").addEventListener("\x70\x6f\x69\x6e\x74\x65\x72\x63\x61\x6e\x63\x65\x6c", () => {
    _0x984456_22 = null;
  }), addEventListener("\x76\x69\x73\x69\x62\x69\x6c\x69\x74\x79\x63\x68\x61\x6e\x67\x65", _0x984456_20), addEventListener("\x70\x61\x67\x65\x73\x68\x6f\x77", _0x984456_20), 
  _0x984456_14.addEventListener("\x63\x68\x61\x6e\x67\x65", () => {
    _0x984456_1c = _0x984456_14.matches, _0x984456_20();
  }), "\x49\x6e\x74\x65\x72\x73\x65\x63\x74\x69\x6f\x6e\x4f\x62\x73\x65\x72\x76\x65\x72" in window && new IntersectionObserver(_0x984456_0 => {
    _0x984456_1e = _0x984456_0[0].isIntersecting, _0x984456_20();
  }, {
    threshold: .1
  }).observe(_0x984456_7("\x66\x65\x61\x74\x75\x72\x65\x64"));
  let _0x984456_25 = [ {
    id: "\x76\x69\x78\x73\x72\x63",
    name: "\x56\x69\x78\x53\x72\x63"
  } ], _0x984456_26 = [];
  const _0x984456_27 = _0x984456_1;
  let _0x984456_28 = {}, _0x984456_29 = "", _0x984456_2a = 0;
  const _0x984456_2b = new Map, _0x984456_2c = _0x984456_0 => (_0x984456_0.kind || "\x6d\x6f\x76\x69\x65") + "\x3a" + _0x984456_0.id;
  function _0x984456_2d(_0x984456_0, _0x984456_1) {
    const _0x984456_2 = _0x984456_2b.get(_0x984456_2c(_0x984456_0))?.[_0x984456_1];
    return _0x984456_2 && Date.now() - _0x984456_2.updated < 18e5 ? _0x984456_2 : {};
  }
  function _0x984456_2e(_0x984456_0, _0x984456_1, _0x984456_2) {
    const _0x984456_3 = _0x984456_2c(_0x984456_0);
    !_0x984456_2b.has(_0x984456_3) && _0x984456_2b.size >= 100 && _0x984456_2b.delete(_0x984456_2b.keys().next().value);
    const _0x984456_4 = _0x984456_2b.get(_0x984456_3) || {};
    _0x984456_4[_0x984456_1] = {
      ..._0x984456_2d(_0x984456_0, _0x984456_1),
      ..._0x984456_2,
      updated: Date.now()
    }, _0x984456_2b.set(_0x984456_3, _0x984456_4);
  }
  function _0x984456_2f(_0x984456_0) {
    _0x984456_7("\x73\x6f\x75\x72\x63\x65\x73\x2d\x70\x61\x6e\x65\x6c").hidden = !_0x984456_0, _0x984456_7("\x63\x68\x6f\x6f\x73\x65\x2d\x73\x6f\x75\x72\x63\x65").setAttribute("\x61\x72\x69\x61\x2d\x65\x78\x70\x61\x6e\x64\x65\x64", String(_0x984456_0)), 
    _0x984456_0 && (_0x984456_7("\x65\x70\x69\x73\x6f\x64\x65\x2d\x70\x69\x63\x6b\x65\x72").hidden = !0, _0x984456_7("\x63\x68\x6f\x6f\x73\x65\x2d\x65\x70\x69\x73\x6f\x64\x65\x73").setAttribute("\x61\x72\x69\x61\x2d\x65\x78\x70\x61\x6e\x64\x65\x64", "\x66\x61\x6c\x73\x65"));
  }
  function _0x984456_30() {
    _0x984456_7("\x73\x6f\x75\x72\x63\x65\x2d\x6c\x69\x73\x74").replaceChildren(..._0x984456_25.map(_0x984456_0 => {
      const _0x984456_1 = document.createElement("\x6c\x69"), _0x984456_2 = document.createElement("\x62\x75\x74\x74\x6f\x6e"), _0x984456_3 = document.createElement("\x73\x70\x61\x6e"), _0x984456_4 = document.createElement("\x73\x70\x61\x6e"), _0x984456_5 = document.createElement("\x73\x74\x72\x6f\x6e\x67"), _0x984456_6 = document.createElement("\x73\x6d\x61\x6c\x6c"), _0x984456_7 = _0x984456_2d(_0x984456_11, _0x984456_0.id), _0x984456_8 = _0x984456_28[_0x984456_0.id] || (_0x984456_7.failed ? "\x52\x65\x63\x65\x6e\x74\x6c\x79\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65" : _0x984456_7.played ? "\x50\x72\x65\x76\x69\x6f\x75\x73\x6c\x79\x20\x70\x6c\x61\x79\x65\x64" : "\x57\x61\x69\x74\x69\x6e\x67");
      return _0x984456_1.dataset.state = _0x984456_8, _0x984456_2.type = "\x62\x75\x74\x74\x6f\x6e", _0x984456_2.dataset.provider = _0x984456_0.id, 
      _0x984456_2.setAttribute("\x61\x72\x69\x61\x2d\x63\x75\x72\x72\x65\x6e\x74", String(_0x984456_0.id === _0x984456_29)), 
      _0x984456_3.className = "\x73\x6f\x75\x72\x63\x65\x2d\x6d\x61\x72\x6b", _0x984456_3.setAttribute("\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e", "\x74\x72\x75\x65"), 
      _0x984456_5.textContent = _0x984456_0.name, _0x984456_6.textContent = _0x984456_8 + "\x20\xb7\x20" + (_0x984456_7.width && _0x984456_7.height ? _0x984456_7.width + "\x20\xd7\x20" + _0x984456_7.height : "\x51\x75\x61\x6c\x69\x74\x79\x20\x75\x6e\x6b\x6e\x6f\x77\x6e"), 
      _0x984456_4.append(_0x984456_5, _0x984456_6), _0x984456_2.append(_0x984456_3, _0x984456_4), 
      _0x984456_2.onclick = () => {
        try {
          localStorage.setItem("\x6e\x79\x78\x2e\x6d\x6f\x76\x69\x65\x73\x2e\x70\x72\x65\x66\x65\x72\x72\x65\x64\x53\x6f\x75\x72\x63\x65", _0x984456_0.id);
        } catch {}
        _0x984456_3f(_0x984456_0.id);
      }, _0x984456_1.append(_0x984456_2), _0x984456_1;
    }));
  }
  let _0x984456_31 = null, _0x984456_32 = null, _0x984456_33 = "", _0x984456_34 = null, _0x984456_35 = null, _0x984456_36 = null, _0x984456_37 = null;
  function _0x984456_38() {
    clearTimeout(_0x984456_46), _0x984456_7("\x77\x61\x74\x63\x68\x2d\x61\x72\x65\x61").classList.remove("\x63\x6f\x6e\x74\x72\x6f\x6c\x73\x2d\x69\x64\x6c\x65"), 
    _0x984456_35?.(), _0x984456_35 = null, _0x984456_36?.(), _0x984456_36 = null, _0x984456_37 = null, 
    _0x984456_7("\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x2d\x6c\x6f\x61\x64\x69\x6e\x67").hidden = !0, _0x984456_7("\x73\x74\x61\x72\x74\x2d\x70\x6c\x61\x79\x62\x61\x63\x6b").hidden = !0, 
    _0x984456_7("\x77\x61\x74\x63\x68\x2d\x61\x72\x65\x61").classList.remove("\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x2d\x70\x6c\x61\x79\x62\x61\x63\x6b", "\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x2d\x72\x65\x61\x64\x79");
  }
  function _0x984456_39(_0x984456_0) {
    for (const _0x984456_1 of [ "\x73\x6b\x69\x70\x2d\x62\x61\x63\x6b", "\x73\x6b\x69\x70\x2d\x66\x6f\x72\x77\x61\x72\x64", "\x6d\x75\x74\x65", "\x76\x6f\x6c\x75\x6d\x65", "\x70\x6c\x61\x79\x65\x72\x2d\x73\x65\x74\x74\x69\x6e\x67\x73" ]) _0x984456_7(_0x984456_1).disabled = !_0x984456_0;
  }
  function _0x984456_3a() {
    _0x984456_2a++, _0x984456_38(), _0x984456_2f(!1), _0x984456_7("\x65\x70\x69\x73\x6f\x64\x65\x2d\x70\x69\x63\x6b\x65\x72").hidden = !0, 
    _0x984456_7("\x63\x68\x6f\x6f\x73\x65\x2d\x65\x70\x69\x73\x6f\x64\x65\x73").setAttribute("\x61\x72\x69\x61\x2d\x65\x78\x70\x61\x6e\x64\x65\x64", "\x66\x61\x6c\x73\x65"), document.getElementById("\x77\x61\x74\x63\x68\x2d\x61\x72\x65\x61").classList.remove("\x65\x78\x74\x65\x72\x6e\x61\x6c\x2d\x70\x6c\x61\x79\x62\x61\x63\x6b"), 
    _0x984456_7("\x77\x61\x74\x63\x68\x2d\x61\x72\x65\x61").insertBefore(document.querySelector("\x2e\x70\x6c\x61\x79\x62\x61\x63\x6b\x2d\x63\x6f\x6e\x74\x72\x6f\x6c\x73"), _0x984456_7("\x65\x70\x69\x73\x6f\x64\x65\x2d\x70\x69\x63\x6b\x65\x72")), 
    clearTimeout(_0x984456_d), _0x984456_32?.abort(), _0x984456_32 = null, _0x984456_31?.destroy(), 
    _0x984456_31 = null, _0x984456_34 && (_0x984456_34.pause(), _0x984456_34.removeAttribute("\x73\x72\x63"), 
    _0x984456_34.load(), _0x984456_34 = null), _0x984456_33 && (fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6d\x6f\x76\x69\x65\x73\x2f\x70\x6c\x61\x79\x62\x61\x63\x6b\x2f" + encodeURIComponent(_0x984456_33), {
      method: "\x44\x45\x4c\x45\x54\x45",
      keepalive: !0
    }).catch(() => {}), _0x984456_33 = ""), _0x984456_7("\x70\x6c\x61\x79\x65\x72").replaceChildren(), 
    _0x984456_7("\x77\x61\x74\x63\x68\x2d\x61\x72\x65\x61").hidden = !0, _0x984456_7("\x73\x65\x74\x74\x69\x6e\x67\x73\x2d\x70\x61\x6e\x65\x6c").hidden = !0, 
    _0x984456_7("\x70\x6c\x61\x79\x65\x72\x2d\x73\x65\x74\x74\x69\x6e\x67\x73").setAttribute("\x61\x72\x69\x61\x2d\x65\x78\x70\x61\x6e\x64\x65\x64", "\x66\x61\x6c\x73\x65"), document.body.classList.remove("\x6d\x6f\x76\x69\x65\x2d\x70\x6c\x61\x79\x69\x6e\x67"), 
    document.querySelectorAll("\x6d\x61\x69\x6e\x3e\x68\x65\x61\x64\x65\x72\x2c\x6d\x61\x69\x6e\x3e\x23\x62\x72\x6f\x77\x73\x65\x2c\x6d\x61\x69\x6e\x3e\x66\x6f\x6f\x74\x65\x72").forEach(_0x984456_0 => _0x984456_0.inert = !1), 
    document.fullscreenElement === _0x984456_7("\x77\x61\x74\x63\x68\x2d\x61\x72\x65\x61") && document.exitFullscreen().catch(() => {});
  }
  let _0x984456_3b = null;
  function _0x984456_3c() {
    _0x984456_7("\x64\x65\x74\x61\x69\x6c").open || (document.body.classList.contains("\x6d\x6f\x76\x69\x65\x2d\x6f\x76\x65\x72\x6c\x61\x79") || (_0x984456_3b = document.activeElement), 
    _0x984456_7("\x64\x65\x74\x61\x69\x6c").showModal()), document.body.classList.add("\x6d\x6f\x76\x69\x65\x2d\x6f\x76\x65\x72\x6c\x61\x79"), 
    _0x984456_20();
  }
  function _0x984456_3d() {
    _0x984456_7("\x64\x65\x74\x61\x69\x6c").open && _0x984456_7("\x64\x65\x74\x61\x69\x6c").close(), document.body.classList.remove("\x6d\x6f\x76\x69\x65\x2d\x6f\x76\x65\x72\x6c\x61\x79"), 
    _0x984456_3b?.focus(), _0x984456_20();
  }
  async function _0x984456_3e() {
    _0x984456_3a(), _0x984456_c?.abort(), _0x984456_7("\x72\x65\x74\x72\x79\x2d\x64\x65\x74\x61\x69\x6c").hidden = !0, _0x984456_11 = null, 
    _0x984456_7("\x77\x61\x74\x63\x68").hidden = !1, _0x984456_7("\x73\x65\x72\x69\x65\x73\x2d\x65\x70\x69\x73\x6f\x64\x65\x73").replaceChildren(), 
    _0x984456_7("\x73\x65\x72\x69\x65\x73\x2d\x6e\x6f\x74\x65").textContent = "";
    const _0x984456_0 = location.hash, _0x984456_1 = location.hash.match(/^#watch=([1-9]\d{0,9})\/(\d{1,3})\/([1-9]\d{0,3})$/);
    if (_0x984456_1) {
      _0x984456_3c(), _0x984456_7("\x64\x65\x74\x61\x69\x6c\x2d\x63\x6f\x6e\x74\x65\x6e\x74").hidden = !0, _0x984456_7("\x64\x65\x74\x61\x69\x6c\x2d\x6e\x6f\x74\x69\x63\x65").textContent = "\x4c\x6f\x61\x64\x69\x6e\x67\x20\x65\x70\x69\x73\x6f\x64\x65\u2026";
      try {
        const _0x984456_2 = await _0x984456_12(`\x74\x76\x2f${_0x984456_1[1]}\x2f\x73\x65\x61\x73\x6f\x6e\x2f${_0x984456_1[2]}\x2f\x65\x70\x69\x73\x6f\x64\x65\x2f${_0x984456_1[3]}`);
        if (location.hash !== _0x984456_0) return;
        _0x984456_11 = _0x984456_2, await _0x984456_3f();
      } catch (_0x984456_6) {
        location.hash === _0x984456_0 && (_0x984456_7("\x64\x65\x74\x61\x69\x6c\x2d\x6e\x6f\x74\x69\x63\x65").textContent = _0x984456_6.message);
      }
      return;
    }
    const _0x984456_2 = location.hash.match(/^#episode=([a-z0-9-]+)$/)?.[1];
    if (_0x984456_2) {
      if (!_0x984456_26.length) try {
        _0x984456_26 = (await _0x984456_12("\x65\x70\x69\x73\x6f\x64\x65\x73")).results || [];
      } catch {}
      if (location.hash !== _0x984456_0) return;
      const _0x984456_1 = _0x984456_26.find(_0x984456_0 => _0x984456_0.id === _0x984456_2);
      if (_0x984456_1) {
        let _0x984456_2;
        try {
          _0x984456_2 = [ ...(await _0x984456_12("\x74\x76\x2f" + _0x984456_1.tmdbSeriesId + "\x2f\x73\x65\x61\x73\x6f\x6e\x2f" + _0x984456_1.season + "\x2f\x65\x70\x69\x73\x6f\x64\x65\x2f" + _0x984456_1.episode)).sources, {
            id: _0x984456_1.provider,
            name: _0x984456_1.providerName,
            url: _0x984456_1.embedUrl
          } ];
        } catch {}
        if (location.hash !== _0x984456_0) return;
        return _0x984456_11 = {
          ..._0x984456_1,
          kind: "\x65\x70\x69\x73\x6f\x64\x65",
          sources: _0x984456_2,
          genres: [],
          cast: []
        }, _0x984456_7("\x6d\x6f\x76\x69\x65\x2d\x74\x69\x74\x6c\x65").textContent = _0x984456_1.title, _0x984456_7("\x6d\x6f\x76\x69\x65\x2d\x6d\x65\x74\x61").textContent = _0x984456_1.episodeLabel, 
        _0x984456_7("\x6d\x6f\x76\x69\x65\x2d\x6f\x76\x65\x72\x76\x69\x65\x77").textContent = "", _0x984456_7("\x6d\x6f\x76\x69\x65\x2d\x66\x61\x63\x74\x73").replaceChildren(), 
        _0x984456_7("\x6d\x6f\x76\x69\x65\x2d\x67\x65\x6e\x72\x65\x73").replaceChildren(), _0x984456_7("\x63\x61\x73\x74\x2d\x73\x65\x63\x74\x69\x6f\x6e").hidden = !0, 
        _0x984456_7("\x64\x65\x74\x61\x69\x6c\x2d\x62\x61\x63\x6b\x64\x72\x6f\x70").hidden = !0, _0x984456_7("\x64\x65\x74\x61\x69\x6c\x2d\x63\x6f\x6e\x74\x65\x6e\x74").hidden = !1, 
        _0x984456_7("\x64\x65\x74\x61\x69\x6c\x2d\x6e\x6f\x74\x69\x63\x65").textContent = "", void _0x984456_3c();
      }
      return void _0x984456_3d();
    }
    const _0x984456_3 = location.hash.startsWith("\x23\x74\x76\x3d"), _0x984456_4 = location.hash.match(/^#(?:movie|tv)=([1-9]\d{0,9})$/)?.[1];
    if (!_0x984456_4) return void _0x984456_3d();
    _0x984456_3c();
    const _0x984456_5 = _0x984456_c = new AbortController;
    _0x984456_7("\x64\x65\x74\x61\x69\x6c\x2d\x63\x6f\x6e\x74\x65\x6e\x74").hidden = !0, _0x984456_7("\x64\x65\x74\x61\x69\x6c\x2d\x6e\x6f\x74\x69\x63\x65").textContent = "\x4c\x6f\x61\x64\x69\x6e\x67\x20\x6d\x6f\x76\x69\x65\x20\x64\x65\x74\x61\x69\x6c\x73\x2e\x2e\x2e";
    try {
      const _0x984456_0 = await _0x984456_12((_0x984456_3 ? "\x74\x76\x2f" : "") + _0x984456_4, _0x984456_5.signal);
      if (_0x984456_5 !== _0x984456_c) return;
      _0x984456_11 = _0x984456_0;
      const _0x984456_1 = _0x984456_7("\x64\x65\x74\x61\x69\x6c\x2d\x62\x61\x63\x6b\x64\x72\x6f\x70");
      _0x984456_1.hidden = !_0x984456_0.backdrop, _0x984456_1.onerror = () => _0x984456_1.hidden = !0, 
      _0x984456_0.backdrop && (_0x984456_1.src = _0x984456_0.backdrop), _0x984456_7("\x6d\x6f\x76\x69\x65\x2d\x74\x69\x74\x6c\x65").textContent = _0x984456_0.title, 
      _0x984456_7("\x6d\x6f\x76\x69\x65\x2d\x6d\x65\x74\x61").textContent = [ _0x984456_0.rating > 0 ? "\x54\x4d\x44\x42\x20" + _0x984456_0.rating.toFixed(1) + "\x20\x2f\x20\x31\x30" + (_0x984456_0.votes ? "\x20\x28" + _0x984456_0.votes.toLocaleString() + "\x29" : "") : "", _0x984456_0.releaseDate?.slice(0, 4) ].filter(Boolean).join("\x20\xb7\x20"), 
      _0x984456_7("\x6d\x6f\x76\x69\x65\x2d\x6f\x76\x65\x72\x76\x69\x65\x77").textContent = _0x984456_0.overview || "\x4e\x6f\x20\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6f\x6e\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x2e", 
      _0x984456_7("\x6d\x6f\x76\x69\x65\x2d\x67\x65\x6e\x72\x65\x73").replaceChildren();
      for (const _0x984456_2 of _0x984456_0.genres) {
        const _0x984456_0 = document.createElement("\x73\x70\x61\x6e");
        _0x984456_0.textContent = _0x984456_2, _0x984456_7("\x6d\x6f\x76\x69\x65\x2d\x67\x65\x6e\x72\x65\x73").append(_0x984456_0);
      }
      _0x984456_7("\x6d\x6f\x76\x69\x65\x2d\x66\x61\x63\x74\x73").replaceChildren();
      for (const [_0x984456_2, _0x984456_3] of [ [ "\x52\x75\x6e\x74\x69\x6d\x65", _0x984456_0.runtime ? Math.floor(_0x984456_0.runtime / 60) + "\x68\x20" + _0x984456_0.runtime % 60 + "\x6d" : null ], [ "\x4c\x61\x6e\x67\x75\x61\x67\x65", _0x984456_0.language?.toUpperCase() ], [ "\x52\x65\x6c\x65\x61\x73\x65\x20\x64\x61\x74\x65", _0x984456_0.releaseDate ] ]) {
        if (!_0x984456_3) continue;
        const _0x984456_0 = document.createElement("\x64\x74"), _0x984456_1 = document.createElement("\x64\x64");
        _0x984456_0.textContent = _0x984456_2, _0x984456_1.textContent = _0x984456_3, _0x984456_7("\x6d\x6f\x76\x69\x65\x2d\x66\x61\x63\x74\x73").append(_0x984456_0, _0x984456_1);
      }
      _0x984456_7("\x6d\x6f\x76\x69\x65\x2d\x63\x61\x73\x74").replaceChildren(), _0x984456_7("\x63\x61\x73\x74\x2d\x73\x65\x63\x74\x69\x6f\x6e").hidden = !_0x984456_0.cast?.length;
      for (const _0x984456_2 of _0x984456_0.cast || []) {
        const _0x984456_0 = document.createElement("\x64\x69\x76");
        _0x984456_0.className = "\x63\x61\x73\x74\x2d\x70\x65\x72\x73\x6f\x6e";
        const _0x984456_1 = document.createElement("\x64\x69\x76");
        _0x984456_1.className = "\x63\x61\x73\x74\x2d\x70\x68\x6f\x74\x6f", _0x984456_2.photo ? _0x984456_1.append(_0x984456_13(_0x984456_2.photo, _0x984456_2.name)) : _0x984456_1.textContent = _0x984456_2.name.split("\x20").map(_0x984456_0 => _0x984456_0[0]).slice(0, 2).join("");
        const _0x984456_3 = document.createElement("\x73\x74\x72\x6f\x6e\x67"), _0x984456_4 = document.createElement("\x73\x70\x61\x6e");
        _0x984456_3.textContent = _0x984456_2.name, _0x984456_4.textContent = _0x984456_2.role, 
        _0x984456_0.append(_0x984456_1, _0x984456_3, _0x984456_4), _0x984456_7("\x6d\x6f\x76\x69\x65\x2d\x63\x61\x73\x74").append(_0x984456_0);
      }
      "\x74\x76" === _0x984456_0.kind && (_0x984456_7("\x77\x61\x74\x63\x68").hidden = !0, _0x984456_7("\x73\x65\x72\x69\x65\x73\x2d\x6e\x6f\x74\x65").textContent = "\x53\x65\x61\x73\x6f\x6e\x73\x20\x26\x20\x65\x70\x69\x73\x6f\x64\x65\x73", 
      _0x984456_40(_0x984456_7("\x73\x65\x72\x69\x65\x73\x2d\x65\x70\x69\x73\x6f\x64\x65\x73"), _0x984456_0)), _0x984456_7("\x64\x65\x74\x61\x69\x6c\x2d\x6e\x6f\x74\x69\x63\x65").textContent = "", 
      _0x984456_7("\x64\x65\x74\x61\x69\x6c\x2d\x63\x6f\x6e\x74\x65\x6e\x74").hidden = !1, _0x984456_7("\x6d\x6f\x76\x69\x65\x2d\x74\x69\x74\x6c\x65").focus();
    } catch (_0x984456_8) {
      _0x984456_5.signal.aborted || (_0x984456_7("\x64\x65\x74\x61\x69\x6c\x2d\x6e\x6f\x74\x69\x63\x65").textContent = _0x984456_8.message, 
      _0x984456_7("\x72\x65\x74\x72\x79\x2d\x64\x65\x74\x61\x69\x6c").hidden = !1);
    }
  }
  async function _0x984456_3f(_0x984456_1) {
    if (!_0x984456_11) return;
    const _0x984456_8 = _0x984456_11;
    _0x984456_7("\x63\x68\x6f\x6f\x73\x65\x2d\x65\x70\x69\x73\x6f\x64\x65\x73").hidden = !_0x984456_8.tmdbSeriesId, _0x984456_25 = function(_0x984456_0, _0x984456_1) {
      if (("\x65\x70\x69\x73\x6f\x64\x65" === _0x984456_0.kind || "\x74\x76" === _0x984456_0.kind) && !_0x984456_1.some(_0x984456_0 => _0x984456_0.\u{70}\u{72}\u{6f}\u{78}\u{79})) {
        const _0x984456_0 = _0x984456_0 => "\x72\x69\x76\x65" === _0x984456_0.id ? -1 : "\x66\x72\x61\x6d\x65\x78\x74\x76" === _0x984456_0.id ? 1 : 0;
        return [ ..._0x984456_1 ].sort((_0x984456_1, _0x984456_2) => _0x984456_0(_0x984456_1) - _0x984456_0(_0x984456_2));
      }
      const _0x984456_2 = _0x984456_0 => _0x984456_0.failed ? 3 : _0x984456_0.played ? _0x984456_0.stalls >= 3 ? 1 : 0 : 2;
      return [ ..._0x984456_1 ].sort((_0x984456_1, _0x984456_3) => {
        const _0x984456_4 = _0x984456_2d(_0x984456_0, _0x984456_1.id), _0x984456_5 = _0x984456_2d(_0x984456_0, _0x984456_3.id);
        return _0x984456_2(_0x984456_4) - _0x984456_2(_0x984456_5) || (_0x984456_4.played && _0x984456_5.played ? (_0x984456_5.width || 0) * (_0x984456_5.height || 0) - (_0x984456_4.width || 0) * (_0x984456_4.height || 0) : 0);
      });
    }(_0x984456_8, function(_0x984456_1) {
      const _0x984456_2 = function(_0x984456_0) {
        if ("\x74\x76" === _0x984456_0.kind) return [];
        if (_0x984456_0.sources) return _0x984456_0.sources.map(_0x984456_0 => ({
          ..._0x984456_0,
          url: _0x984456_27(_0x984456_0.url)
        })).filter(_0x984456_0 => _0x984456_0.url);
        if ("\x65\x70\x69\x73\x6f\x64\x65" === _0x984456_0.kind) {
          const _0x984456_1 = _0x984456_27(_0x984456_0.embedUrl);
          return _0x984456_1 ? [ {
            id: _0x984456_0.provider,
            name: _0x984456_0.providerName,
            url: _0x984456_1
          } ] : [];
        }
        const _0x984456_1 = (_0x984456_0.providerMappings || []).filter(_0x984456_0 => "\x73\x75\x70\x61\x70\x6c\x61\x79" === _0x984456_0.provider).map(_0x984456_0 => _0x984456_27("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x75\x70\x61\x70\x6c\x61\x79\x2e\x66\x75\x6e\x2f\x6d\x77\x2f" + _0x984456_0.detailPath)).filter(Boolean);
        return [ {
          id: "\x76\x69\x78\x73\x72\x63",
          name: "\x56\x69\x78\x53\x72\x63"
        }, ..._0x984456_1.length ? [ {
          id: "\x73\x75\x70\x61\x70\x6c\x61\x79",
          name: "\x53\x75\x70\x61\x50\x6c\x61\x79\x20\xb7\x20\x4d\x6f\x76\x69\x65\x42\x6f\x78",
          url: _0x984456_1[0]
        } ] : [], {
          id: "\x6e\x68\x64",
          name: "\x4e\x48\x44",
          url: "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6e\x68\x64\x61\x70\x69\x2e\x63\x6f\x6d\x2f\x6d\x6f\x76\x69\x65\x2f" + _0x984456_0.id
        }, {
          id: "\x72\x69\x76\x65",
          name: "\x52\x69\x76\x65",
          url: "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x61\x74\x63\x68\x2e\x72\x69\x76\x65\x73\x74\x72\x65\x61\x6d\x2e\x61\x70\x70\x2f\x65\x6d\x62\x65\x64\x3f\x74\x79\x70\x65\x3d\x6d\x6f\x76\x69\x65\x26\x69\x64\x3d" + _0x984456_0.id
        }, {
          id: "\x66\x72\x61\x6d\x65\x78\x74\x76",
          name: "\x46\x72\x61\x6d\x65\x58\x54\x56",
          url: "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x66\x72\x61\x6d\x65\x78\x74\x76\x2e\x74\x65\x63\x68\x2f\x65\x6d\x62\x65\x64\x2f" + _0x984456_0.id
        } ];
      }(_0x984456_1), _0x984456_3 = "\x65\x70\x69\x73\x6f\x64\x65" === _0x984456_1.kind ? "\x74\x76" : "\x6d\x6f\x76\x69\x65";
      return [ ..."\x74\x76" === _0x984456_1.kind ? [] : "\x65\x70\x69\x73\x6f\x64\x65" === _0x984456_1.kind ? _0x984456_0(_0x984456_3, _0x984456_1.tmdbSeriesId, _0x984456_1.sourceSeason, _0x984456_1.sourceEpisode) : _0x984456_0(_0x984456_3, _0x984456_1.id), ..._0x984456_2 ].map(_0x984456_0 => _0x984456_0.url ? {
        ..._0x984456_0,
        \u{70}\u{72}\u{6f}\u{78}\u{79}: !0
      } : _0x984456_0);
    }(_0x984456_8));
    let _0x984456_a = _0x984456_34 ? {
      time: _0x984456_34.currentTime,
      volume: _0x984456_34.volume,
      muted: _0x984456_34.muted
    } : null;
    _0x984456_3a();
    const _0x984456_b = _0x984456_2a;
    _0x984456_28 = {}, _0x984456_29 = "", _0x984456_30(), _0x984456_2f(!0), _0x984456_7("\x64\x65\x74\x61\x69\x6c").close(), 
    _0x984456_7("\x77\x61\x74\x63\x68\x2d\x61\x72\x65\x61").hidden = !1, document.body.classList.add("\x6d\x6f\x76\x69\x65\x2d\x70\x6c\x61\x79\x69\x6e\x67"), 
    document.querySelectorAll("\x6d\x61\x69\x6e\x3e\x68\x65\x61\x64\x65\x72\x2c\x6d\x61\x69\x6e\x3e\x23\x62\x72\x6f\x77\x73\x65\x2c\x6d\x61\x69\x6e\x3e\x66\x6f\x6f\x74\x65\x72").forEach(_0x984456_0 => _0x984456_0.inert = !0), 
    _0x984456_7("\x77\x61\x74\x63\x68\x2d\x74\x69\x74\x6c\x65").textContent = _0x984456_8.title, _0x984456_7("\x77\x61\x74\x63\x68\x2d\x61\x72\x65\x61").focus(), 
    _0x984456_20(), _0x984456_1 = _0x984456_1 || _0x984456_9("\x6e\x79\x78\x2e\x6d\x6f\x76\x69\x65\x73\x2e\x70\x72\x65\x66\x65\x72\x72\x65\x64\x53\x6f\x75\x72\x63\x65", "");
    const _0x984456_c = _0x984456_25.some(_0x984456_0 => _0x984456_0.id === _0x984456_1) ? _0x984456_25.filter(_0x984456_0 => _0x984456_0.id === _0x984456_1).concat(_0x984456_25.filter(_0x984456_0 => _0x984456_0.id !== _0x984456_1)) : _0x984456_25;
    let _0x984456_e = !1, _0x984456_f = !1;
    await async function _0x984456_0(_0x984456_1) {
      if (_0x984456_b !== _0x984456_2a) return;
      if (_0x984456_38(), clearTimeout(_0x984456_d), _0x984456_32?.abort(), _0x984456_31?.destroy(), 
      _0x984456_31 = null, _0x984456_34 && (_0x984456_34.pause(), _0x984456_34.removeAttribute("\x73\x72\x63"), 
      _0x984456_34.load()), _0x984456_33 && (fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6d\x6f\x76\x69\x65\x73\x2f\x70\x6c\x61\x79\x62\x61\x63\x6b\x2f" + encodeURIComponent(_0x984456_33), {
        method: "\x44\x45\x4c\x45\x54\x45",
        keepalive: !0
      }).catch(() => {}), _0x984456_33 = ""), _0x984456_7("\x70\x6c\x61\x79\x65\x72").replaceChildren(), 
      _0x984456_34 = null, _0x984456_7("\x77\x61\x74\x63\x68\x2d\x61\x72\x65\x61").classList.remove("\x65\x78\x74\x65\x72\x6e\x61\x6c\x2d\x70\x6c\x61\x79\x62\x61\x63\x6b"), 
      _0x984456_7("\x77\x61\x74\x63\x68\x2d\x61\x72\x65\x61").insertBefore(document.querySelector("\x2e\x70\x6c\x61\x79\x62\x61\x63\x6b\x2d\x63\x6f\x6e\x74\x72\x6f\x6c\x73"), _0x984456_7("\x65\x70\x69\x73\x6f\x64\x65\x2d\x70\x69\x63\x6b\x65\x72")), 
      _0x984456_1 >= _0x984456_c.length && !_0x984456_e && _0x984456_c.some(_0x984456_0 => _0x984456_0.\u{70}\u{72}\u{6f}\u{78}\u{79})) return _0x984456_e = !0, 
      _0x984456_f = !0, _0x984456_28 = {}, _0x984456_30(), _0x984456_2f(!0), _0x984456_7("\x70\x6c\x61\x79\x65\x72\x2d\x73\x74\x61\x74\x75\x73").textContent = "\x52\x65\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6e\x67\x20\x74\x6f\x20\x4e\x79\x78\x3f", 
      _0x984456_0(0);
      if (_0x984456_1 >= _0x984456_c.length) return _0x984456_34 = null, _0x984456_29 = "", 
      _0x984456_30(), _0x984456_2f(!0), _0x984456_7("\x70\x6c\x61\x79\x65\x72\x2d\x73\x74\x61\x74\x75\x73").textContent = "\x4e\x6f\x20\x73\x6f\x75\x72\x63\x65\x20\x63\x6f\x75\x6c\x64\x20\x73\x74\x61\x72\x74\x20\x74\x68\x69\x73\x20\x6d\x6f\x76\x69\x65\x2e\x20\x54\x72\x79\x20\x61\x67\x61\x69\x6e\x20\x73\x68\x6f\x72\x74\x6c\x79\x2e", 
      void (_0x984456_7("\x72\x65\x74\x72\x79\x2d\x70\x6c\x61\x79\x65\x72").hidden = !1);
      const _0x984456_9 = _0x984456_c[_0x984456_1];
      _0x984456_29 = _0x984456_9.id, _0x984456_28[_0x984456_9.id] = "\x43\x68\x65\x63\x6b\x69\x6e\x67", _0x984456_30(), 
      _0x984456_2f(!0);
      const _0x984456_10 = _0x984456_32 = new AbortController;
      let _0x984456_11 = !1, _0x984456_12 = !1, _0x984456_13 = !1;
      const _0x984456_14 = () => _0x984456_b === _0x984456_2a && _0x984456_32 === _0x984456_10 && !_0x984456_10.signal.aborted;
      if (_0x984456_9.url) {
        const _0x984456_b = document.createElement("\x69\x66\x72\x61\x6d\x65");
        _0x984456_b.title = _0x984456_8.title + "\x20\u2014\x20" + _0x984456_9.name, _0x984456_b.sandbox = "\x61\x6c\x6c\x6f\x77\x2d\x73\x63\x72\x69\x70\x74\x73\x20\x61\x6c\x6c\x6f\x77\x2d\x73\x61\x6d\x65\x2d\x6f\x72\x69\x67\x69\x6e\x20\x61\x6c\x6c\x6f\x77\x2d\x66\x6f\x72\x6d\x73\x20\x61\x6c\x6c\x6f\x77\x2d\x70\x72\x65\x73\x65\x6e\x74\x61\x74\x69\x6f\x6e", 
        _0x984456_b.allow = "\x61\x75\x74\x6f\x70\x6c\x61\x79\x3b\x20\x66\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e\x3b\x20\x70\x69\x63\x74\x75\x72\x65\x2d\x69\x6e\x2d\x70\x69\x63\x74\x75\x72\x65", _0x984456_b.referrerPolicy = "\x73\x74\x72\x69\x63\x74\x2d\x6f\x72\x69\x67\x69\x6e\x2d\x77\x68\x65\x6e\x2d\x63\x72\x6f\x73\x73\x2d\x6f\x72\x69\x67\x69\x6e", 
        _0x984456_b.allowFullscreen = !0, _0x984456_9.\u{70}\u{72}\u{6f}\u{78}\u{79} ? (_0x984456_7("\x77\x61\x74\x63\x68\x2d\x61\x72\x65\x61").classList.add("\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x2d\x70\x6c\x61\x79\x62\x61\x63\x6b"), 
        _0x984456_39(!1), _0x984456_7("\x73\x65\x65\x6b").disabled = !0, _0x984456_7("\x73\x65\x65\x6b").value = 0, 
        _0x984456_7("\x73\x65\x65\x6b").style.setProperty("\x2d\x2d\x70\x6c\x61\x79\x65\x64", "\x30\x25"), _0x984456_7("\x73\x65\x65\x6b").style.setProperty("\x2d\x2d\x62\x75\x66\x66\x65\x72\x65\x64", "\x30\x25"), 
        _0x984456_7("\x70\x6c\x61\x79\x62\x61\x63\x6b\x2d\x74\x69\x6d\x65").textContent = "\x30\x3a\x30\x30\x20\x2f\x20\x30\x3a\x30\x30", _0x984456_42(_0x984456_7("\x74\x6f\x67\x67\x6c\x65\x2d\x70\x6c\x61\x79"), "\x70\x6c\x61\x79"), 
        _0x984456_7("\x74\x6f\x67\x67\x6c\x65\x2d\x70\x6c\x61\x79").setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", "\x50\x6c\x61\x79"), _0x984456_7("\x70\x69\x63\x74\x75\x72\x65\x2d\x69\x6e\x2d\x70\x69\x63\x74\x75\x72\x65").hidden = !0, 
        _0x984456_7("\x73\x74\x61\x72\x74\x2d\x70\x6c\x61\x79\x62\x61\x63\x6b").hidden = !0, _0x984456_7("\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x2d\x6c\x6f\x61\x64\x69\x6e\x67").hidden = !1, 
        _0x984456_37 = async () => {
          if (_0x984456_14() && !_0x984456_13) {
            _0x984456_13 = !0, clearTimeout(_0x984456_d), _0x984456_d = setTimeout(_0x984456_e, 3e4);
            try {
              _0x984456_7("\x73\x74\x61\x72\x74\x2d\x70\x6c\x61\x79\x62\x61\x63\x6b").hidden = !0, _0x984456_7("\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x2d\x6c\x6f\x61\x64\x69\x6e\x67").hidden = !1, 
              _0x984456_2f(!0), _0x984456_7("\x70\x6c\x61\x79\x65\x72\x2d\x73\x74\x61\x74\x75\x73").textContent = "\x53\x74\x61\x72\x74\x69\x6e\x67\x20\x76\x69\x64\x65\x6f\x2e\x2e\x2e", 
              await _0x984456_5(_0x984456_b);
            } catch {
              _0x984456_14() && _0x984456_e();
            }
          }
        }) : (_0x984456_7("\x77\x61\x74\x63\x68\x2d\x61\x72\x65\x61").classList.add("\x65\x78\x74\x65\x72\x6e\x61\x6c\x2d\x70\x6c\x61\x79\x62\x61\x63\x6b"), document.querySelector("\x2e\x77\x61\x74\x63\x68\x2d\x68\x65\x61\x64\x65\x72").insertBefore(document.querySelector("\x2e\x70\x6c\x61\x79\x62\x61\x63\x6b\x2d\x63\x6f\x6e\x74\x72\x6f\x6c\x73"), document.querySelector("\x2e\x77\x61\x74\x63\x68\x2d\x62\x72\x61\x6e\x64"))), 
        _0x984456_7("\x70\x6c\x61\x79\x65\x72").append(_0x984456_b), _0x984456_7("\x70\x6c\x61\x79\x65\x72\x2d\x73\x74\x61\x74\x75\x73").textContent = "\x4c\x6f\x61\x64\x69\x6e\x67\x20\x70\x6c\x61\x79\x65\x72\u2026", 
        _0x984456_7("\x72\x65\x74\x72\x79\x2d\x70\x6c\x61\x79\x65\x72").hidden = !0;
        let _0x984456_c = null;
        const _0x984456_e = () => {
          _0x984456_14() && !_0x984456_11 && (_0x984456_11 = !0, _0x984456_2e(_0x984456_8, _0x984456_9.id, {
            failed: !0
          }), _0x984456_28[_0x984456_9.id] = "\x55\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65", _0x984456_30(), _0x984456_0(_0x984456_1 + 1));
        }, _0x984456_15 = _0x984456_0 => {
          if (Number.isFinite(_0x984456_0) && !(_0x984456_0 < 0)) {
            if (null !== _0x984456_c && _0x984456_0 > _0x984456_c + .1) {
              const _0x984456_0 = "\x50\x6c\x61\x79\x69\x6e\x67" !== _0x984456_28[_0x984456_9.id];
              _0x984456_12 || _0x984456_2f(!1), _0x984456_12 = !0, _0x984456_7("\x72\x65\x74\x72\x79\x2d\x70\x6c\x61\x79\x65\x72").hidden = !0, 
              _0x984456_2e(_0x984456_8, _0x984456_9.id, {
                played: !0,
                failed: !1
              }), clearTimeout(_0x984456_d), _0x984456_28[_0x984456_9.id] = "\x50\x6c\x61\x79\x69\x6e\x67", _0x984456_7("\x70\x6c\x61\x79\x65\x72\x2d\x73\x74\x61\x74\x75\x73").textContent = "", 
              _0x984456_0 && _0x984456_30();
            }
            _0x984456_c = _0x984456_0;
          }
        }, _0x984456_16 = _0x984456_0 => {
          if (!_0x984456_14() || _0x984456_0.source !== _0x984456_b.contentWindow || _0x984456_0.origin !== new URL(_0x984456_9.url).origin) return;
          let _0x984456_1 = _0x984456_0.data;
          if ("\x73\x74\x72\x69\x6e\x67" == typeof _0x984456_1) {
            if (_0x984456_1.length > 1e4) return;
            try {
              _0x984456_1 = JSON.parse(_0x984456_1);
            } catch {
              return;
            }
          }
          _0x984456_1 && "\x6f\x62\x6a\x65\x63\x74" == typeof _0x984456_1 && ("\x74\x69\x6d\x65\x55\x70\x64\x61\x74\x65" !== _0x984456_1.type && "\x77\x61\x74\x63\x68\x69\x6e\x67\x2d\x6c\x6f\x67" !== _0x984456_1.type || _0x984456_15(_0x984456_1.currentTime), 
          "\x66\x72\x61\x6d\x65\x78\x74\x76" === _0x984456_9.id && "\x66\x72\x61\x6d\x65\x58\x54\x56\x3a\x74\x69\x6d\x65\x75\x70\x64\x61\x74\x65" === _0x984456_1.event && _0x984456_15(_0x984456_1.currentTime), 
          [ "\x61\x6e\x69\x6d\x65\x78", "\x61\x6e\x69\x65\x6d\x62\x65\x64" ].includes(_0x984456_9.id) && "\x61\x6e\x69\x65\x6d\x62\x65\x64" === _0x984456_1.source && 1 === _0x984456_1.version && "\x65\x76\x65\x6e\x74" === _0x984456_1.type && "\x70\x72\x6f\x67\x72\x65\x73\x73" === _0x984456_1.name && _0x984456_15(_0x984456_1.data?.currentTime), 
          "\x61\x6e\x69\x65\x6d\x62\x65\x64" === _0x984456_9.id && "\x61\x6e\x69\x65\x6d\x62\x65\x64" === _0x984456_1.source && 1 === _0x984456_1.version && "\x65\x76\x65\x6e\x74" === _0x984456_1.type && "\x65\x72\x72\x6f\x72" === _0x984456_1.name && _0x984456_e(), 
          [ "\x6b\x69\x73\x73\x6b\x68", "\x6d\x65\x67\x61\x63\x6c\x6f\x75\x64" ].includes(_0x984456_1.channel) && "\x74\x69\x6d\x65" === _0x984456_1.event && _0x984456_15(_0x984456_1.currentTime ?? _0x984456_1.time), 
          "\x70\x61\x75\x73\x65" === _0x984456_1.type && _0x984456_12 && (_0x984456_28[_0x984456_9.id] = "\x50\x61\x75\x73\x65\x64", 
          _0x984456_30()), ("\x65\x72\x72\x6f\x72" === _0x984456_1.type || [ "\x6b\x69\x73\x73\x6b\x68", "\x6d\x65\x67\x61\x63\x6c\x6f\x75\x64" ].includes(_0x984456_1.channel) && "\x65\x72\x72\x6f\x72" === _0x984456_1.event) && _0x984456_e());
        };
        if (addEventListener("\x6d\x65\x73\x73\x61\x67\x65", _0x984456_16), _0x984456_10.signal.addEventListener("\x61\x62\x6f\x72\x74", () => removeEventListener("\x6d\x65\x73\x73\x61\x67\x65", _0x984456_16), {
          once: !0
        }), _0x984456_b.addEventListener("\x6c\x6f\x61\x64", () => {
          _0x984456_14() && !_0x984456_12 && (_0x984456_28[_0x984456_9.id] = _0x984456_9.\u{70}\u{72}\u{6f}\u{78}\u{79} ? "\x4c\x6f\x61\x64\x69\x6e\x67\x20\x76\x69\x64\x65\x6f" : "\x50\x6c\x61\x79\x65\x72\x20\x6c\x6f\x61\x64\x65\x64", 
          _0x984456_30(), _0x984456_7("\x70\x6c\x61\x79\x65\x72\x2d\x73\x74\x61\x74\x75\x73").textContent = "");
        }), _0x984456_b.addEventListener("\x65\x72\x72\x6f\x72", _0x984456_e), _0x984456_9.\u{70}\u{72}\u{6f}\u{78}\u{79}) {
          _0x984456_d = setTimeout(_0x984456_e, 3e4);
          try {
            const _0x984456_0 = _0x984456_f;
            if (_0x984456_f = !1, await _0x984456_2(_0x984456_b, _0x984456_9.url, _0x984456_10.signal, {
              recover: _0x984456_0
            }), !_0x984456_14()) return void _0x984456_b.remove();
          } catch {
            return void (_0x984456_14() && _0x984456_e());
          }
          const _0x984456_0 = setInterval(() => {
            if (!_0x984456_14()) return;
            const _0x984456_0 = _0x984456_3(_0x984456_b);
            if (!_0x984456_0.video) {
              const _0x984456_1 = !_0x984456_13 && !_0x984456_0.failed && _0x984456_6(_0x984456_b), _0x984456_2 = _0x984456_1 && _0x984456_7("\x73\x74\x61\x72\x74\x2d\x70\x6c\x61\x79\x62\x61\x63\x6b").hidden;
              _0x984456_7("\x73\x74\x61\x72\x74\x2d\x70\x6c\x61\x79\x62\x61\x63\x6b").hidden = !_0x984456_1, _0x984456_7("\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x2d\x6c\x6f\x61\x64\x69\x6e\x67").hidden = _0x984456_1, 
              _0x984456_1 && (clearTimeout(_0x984456_d), _0x984456_7("\x70\x6c\x61\x79\x65\x72\x2d\x73\x74\x61\x74\x75\x73").textContent = "\x50\x72\x65\x73\x73\x20\x50\x6c\x61\x79\x20\x74\x6f\x20\x73\x74\x61\x72\x74\x20\x74\x68\x65\x20\x6d\x6f\x76\x69\x65\x2e"), 
              _0x984456_2 && _0x984456_2f(!1);
            }
            if (_0x984456_0.video && _0x984456_0.video !== _0x984456_34) try {
              _0x984456_35?.(), _0x984456_36?.(), _0x984456_35 = _0x984456_4(_0x984456_0.video, _0x984456_0.frames), 
              _0x984456_34 = _0x984456_0.video, _0x984456_36 = _0x984456_48(_0x984456_34), _0x984456_7("\x77\x61\x74\x63\x68\x2d\x61\x72\x65\x61").classList.add("\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x2d\x72\x65\x61\x64\x79"), 
              _0x984456_7("\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x2d\x6c\x6f\x61\x64\x69\x6e\x67").hidden = !0, _0x984456_7("\x73\x74\x61\x72\x74\x2d\x70\x6c\x61\x79\x62\x61\x63\x6b").hidden = !0, 
              _0x984456_7("\x70\x6c\x61\x79\x65\x72\x2d\x73\x74\x61\x74\x75\x73").textContent = "", _0x984456_a && (_0x984456_34.volume = _0x984456_a.volume, 
              _0x984456_34.muted = _0x984456_a.muted, Number.isFinite(_0x984456_34.duration) && (_0x984456_34.currentTime = Math.min(_0x984456_a.time, _0x984456_34.duration)), 
              _0x984456_a = null);
            } catch {
              return void _0x984456_e();
            }
            Number.isFinite(_0x984456_0.time) ? (_0x984456_0.paused || _0x984456_15(_0x984456_0.time), 
            _0x984456_2e(_0x984456_8, _0x984456_9.id, {
              width: _0x984456_0.width,
              height: _0x984456_0.height
            })) : _0x984456_34 && !_0x984456_34.isConnected && (_0x984456_35?.(), _0x984456_36?.(), 
            _0x984456_35 = null, _0x984456_36 = null, _0x984456_34 = null, _0x984456_39(!1), 
            _0x984456_7("\x77\x61\x74\x63\x68\x2d\x61\x72\x65\x61").classList.remove("\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x2d\x72\x65\x61\x64\x79"), _0x984456_7("\x73\x74\x61\x72\x74\x2d\x70\x6c\x61\x79\x62\x61\x63\x6b").hidden = !1), 
            _0x984456_0.failed && _0x984456_e();
          }, 1e3);
          _0x984456_10.signal.addEventListener("\x61\x62\x6f\x72\x74", () => clearInterval(_0x984456_0), {
            once: !0
          });
        } else _0x984456_b.src = _0x984456_9.url;
        return void (_0x984456_9.\u{70}\u{72}\u{6f}\u{78}\u{79} || (_0x984456_d = setTimeout(() => {
          if (_0x984456_14() && !_0x984456_12) {
            if ("\x61\x6e\x69\x65\x6d\x62\x65\x64" === _0x984456_9.id || _0x984456_9.\u{70}\u{72}\u{6f}\u{78}\u{79} && !_0x984456_34) return void _0x984456_e();
            _0x984456_7("\x70\x6c\x61\x79\x65\x72\x2d\x73\x74\x61\x74\x75\x73").textContent = "\x55\x73\x65\x20\x74\x68\x65\x20\x70\x6c\x61\x79\x65\x72\u2019\x73\x20\x50\x6c\x61\x79\x20\x62\x75\x74\x74\x6f\x6e\x2e\x20\x49\x66\x20\x69\x74\x20\x63\x61\x6e\x6e\x6f\x74\x20\x73\x74\x61\x72\x74\x2c\x20\x63\x68\x6f\x6f\x73\x65\x20\x61\x6e\x6f\x74\x68\x65\x72\x20\x73\x6f\x75\x72\x63\x65\x20\x6f\x72\x20\x72\x65\x6c\x6f\x61\x64\x2e", 
            _0x984456_7("\x72\x65\x74\x72\x79\x2d\x70\x6c\x61\x79\x65\x72").hidden = !1;
          }
        }, 45e3)));
      }
      const _0x984456_15 = _0x984456_34 = document.createElement("\x76\x69\x64\x65\x6f");
      _0x984456_15.controls = !1, _0x984456_15.playsInline = !0, _0x984456_15.preload = "\x6d\x65\x74\x61\x64\x61\x74\x61", 
      _0x984456_15.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", _0x984456_8.title + "\x20\x76\x69\x64\x65\x6f\x20\x70\x6c\x61\x79\x65\x72");
      const _0x984456_16 = document.createElement("\x64\x69\x76");
      _0x984456_16.className = "\x70\x6c\x61\x79\x65\x72\x2d\x6c\x6f\x61\x64\x69\x6e\x67", _0x984456_16.setAttribute("\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e", "\x74\x72\x75\x65");
      const _0x984456_17 = document.createElement("\x73\x70\x61\x6e");
      _0x984456_17.className = "\x73\x70\x69\x6e\x6e\x65\x72", _0x984456_16.append(_0x984456_17), _0x984456_7("\x70\x6c\x61\x79\x65\x72").append(_0x984456_15, _0x984456_16), 
      _0x984456_7("\x70\x6c\x61\x79\x65\x72\x2d\x73\x74\x61\x74\x75\x73").textContent = "", _0x984456_7("\x72\x65\x74\x72\x79\x2d\x70\x6c\x61\x79\x65\x72").hidden = !0, 
      _0x984456_48(_0x984456_15);
      const _0x984456_18 = () => {
        _0x984456_14() && !_0x984456_11 && (_0x984456_11 = !0, _0x984456_2e(_0x984456_8, _0x984456_9.id, {
          failed: !0
        }), _0x984456_12 && (_0x984456_a = {
          time: _0x984456_15.currentTime,
          volume: _0x984456_15.volume,
          muted: _0x984456_15.muted
        }), clearTimeout(_0x984456_d), _0x984456_28[_0x984456_9.id] = "\x55\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65", _0x984456_30(), 
        _0x984456_2f(!0), _0x984456_0(_0x984456_1 + 1));
      };
      let _0x984456_19 = 0;
      const _0x984456_1a = () => {
        _0x984456_14() && !_0x984456_15.paused && (!_0x984456_12 || _0x984456_15.seeking || _0x984456_19 || (_0x984456_19 = performance.now()), 
        _0x984456_16.hidden = !1, _0x984456_7("\x70\x6c\x61\x79\x65\x72\x2d\x73\x74\x61\x74\x75\x73").textContent = "\x42\x75\x66\x66\x65\x72\x69\x6e\x67\x2e\x2e\x2e");
      };
      _0x984456_15.addEventListener("\x77\x61\x69\x74\x69\x6e\x67", _0x984456_1a), _0x984456_15.addEventListener("\x73\x74\x61\x6c\x6c\x65\x64", _0x984456_1a), 
      _0x984456_15.addEventListener("\x70\x6c\x61\x79\x69\x6e\x67", () => {
        _0x984456_14() && (_0x984456_19 && performance.now() - _0x984456_19 > 1500 && _0x984456_2e(_0x984456_8, _0x984456_9.id, {
          stalls: (_0x984456_2d(_0x984456_8, _0x984456_9.id).stalls || 0) + 1
        }), _0x984456_19 = 0, clearTimeout(_0x984456_d), _0x984456_7("\x72\x65\x74\x72\x79\x2d\x70\x6c\x61\x79\x65\x72").hidden = !0, 
        _0x984456_16.hidden = !0, _0x984456_7("\x70\x6c\x61\x79\x65\x72\x2d\x73\x74\x61\x74\x75\x73").textContent = "");
      });
      let _0x984456_1b = _0x984456_a?.time || 0;
      _0x984456_15.addEventListener("\x74\x69\x6d\x65\x75\x70\x64\x61\x74\x65", () => {
        if (_0x984456_14() && !_0x984456_15.paused && !_0x984456_15.seeking && _0x984456_15.videoWidth > 0 && _0x984456_15.currentTime > _0x984456_1b + .2) {
          const _0x984456_0 = _0x984456_2d(_0x984456_8, _0x984456_9.id);
          _0x984456_2e(_0x984456_8, _0x984456_9.id, {
            played: !0,
            failed: !1,
            width: _0x984456_15.videoWidth,
            height: _0x984456_15.videoHeight
          });
          const _0x984456_1 = _0x984456_0.width !== _0x984456_15.videoWidth || _0x984456_0.height !== _0x984456_15.videoHeight;
          _0x984456_12 ? _0x984456_1 && _0x984456_30() : (_0x984456_12 = !0, _0x984456_28[_0x984456_9.id] = "\x50\x6c\x61\x79\x69\x6e\x67", 
          _0x984456_30(), _0x984456_2f(!1)), _0x984456_1b = _0x984456_15.currentTime;
        }
      }), _0x984456_15.addEventListener("\x70\x61\x75\x73\x65", () => {
        _0x984456_14() && (_0x984456_16.hidden = !0, _0x984456_12 && (_0x984456_28[_0x984456_9.id] = "\x50\x61\x75\x73\x65\x64", 
        _0x984456_30()));
      }), _0x984456_15.addEventListener("\x70\x6c\x61\x79", () => {
        _0x984456_14() && _0x984456_12 && (_0x984456_28[_0x984456_9.id] = "\x50\x6c\x61\x79\x69\x6e\x67", _0x984456_30());
      }), _0x984456_15.addEventListener("\x65\x72\x72\x6f\x72", _0x984456_18);
      try {
        const _0x984456_0 = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6d\x6f\x76\x69\x65\x73\x2f" + _0x984456_8.id + "\x2f\x70\x6c\x61\x79\x62\x61\x63\x6b\x3f\x70\x72\x6f\x76\x69\x64\x65\x72\x3d" + _0x984456_9.id, {
          method: "\x50\x4f\x53\x54",
          signal: _0x984456_10.signal
        }), _0x984456_1 = await _0x984456_0.json();
        if (!_0x984456_0.ok) throw Error("\x53\x6f\x75\x72\x63\x65\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65");
        if (!/^\/api\/movies\/media\/[A-Za-z0-9_-]+\/\d+$/.test(_0x984456_1.url)) throw Error("\x49\x6e\x76\x61\x6c\x69\x64\x20\x73\x6f\x75\x72\x63\x65");
        if (!_0x984456_14()) return void fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6d\x6f\x76\x69\x65\x73\x2f\x70\x6c\x61\x79\x62\x61\x63\x6b\x2f" + _0x984456_1.url.split("\x2f")[4], {
          method: "\x44\x45\x4c\x45\x54\x45",
          keepalive: !0
        }).catch(() => {});
        _0x984456_33 = _0x984456_1.url.split("\x2f")[4], _0x984456_28[_0x984456_9.id] = "\x4c\x6f\x61\x64\x69\x6e\x67\x20\x76\x69\x64\x65\x6f", 
        _0x984456_30();
        const _0x984456_2 = () => {
          _0x984456_14() && (_0x984456_a && (_0x984456_15.currentTime = _0x984456_a.time || 0, 
          _0x984456_15.volume = _0x984456_a.volume, _0x984456_15.muted = _0x984456_a.muted), 
          _0x984456_15.play().catch(() => {
            _0x984456_14() && (clearTimeout(_0x984456_d), _0x984456_16.hidden = !0, _0x984456_28[_0x984456_9.id] = "\x52\x65\x61\x64\x79\x20\u2014\x20\x70\x72\x65\x73\x73\x20\x50\x6c\x61\x79", 
            _0x984456_30(), _0x984456_2f(!1), _0x984456_7("\x70\x6c\x61\x79\x65\x72\x2d\x73\x74\x61\x74\x75\x73").textContent = "\x50\x72\x65\x73\x73\x20\x50\x6c\x61\x79\x20\x74\x6f\x20\x73\x74\x61\x72\x74\x20\x74\x68\x65\x20\x6d\x6f\x76\x69\x65\x2e");
          }));
        };
        if (_0x984456_d = setTimeout(_0x984456_18, 3e4), window.Hls?.isSupported()) {
          const _0x984456_0 = _0x984456_31 = new Hls({
            maxBufferLength: 12,
            maxMaxBufferLength: 24,
            backBufferLength: 12,
            maxBufferSize: 25165824,
            capLevelToPlayerSize: !0,
            startLevel: -1
          });
          _0x984456_0.on(Hls.Events.MANIFEST_PARSED, () => {
            _0x984456_14() && (_0x984456_4a(), _0x984456_2());
          }), _0x984456_0.on(Hls.Events.AUDIO_TRACKS_UPDATED, () => {
            if (!_0x984456_14()) return;
            const _0x984456_1 = _0x984456_0.audioTracks.findIndex(_0x984456_0 => /^(en|eng)$/i.test(_0x984456_0.lang || "") || /english/i.test(_0x984456_0.name || ""));
            _0x984456_1 >= 0 && (_0x984456_0.audioTrack = _0x984456_1), _0x984456_4a();
          }), _0x984456_0.on(Hls.Events.SUBTITLE_TRACKS_UPDATED, () => {
            _0x984456_14() && _0x984456_4a();
          }), _0x984456_0.on(Hls.Events.ERROR, (_0x984456_0, _0x984456_1) => {
            _0x984456_1.fatal && _0x984456_18();
          }), _0x984456_0.loadSource(_0x984456_1.url), _0x984456_0.attachMedia(_0x984456_15);
        } else _0x984456_15.canPlayType("\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x76\x6e\x64\x2e\x61\x70\x70\x6c\x65\x2e\x6d\x70\x65\x67\x75\x72\x6c") ? (_0x984456_15.src = _0x984456_1.url, 
        _0x984456_15.addEventListener("\x6c\x6f\x61\x64\x65\x64\x6d\x65\x74\x61\x64\x61\x74\x61", _0x984456_2, {
          once: !0
        })) : (clearTimeout(_0x984456_d), _0x984456_16.hidden = !0, _0x984456_2f(!1), _0x984456_7("\x70\x6c\x61\x79\x65\x72\x2d\x73\x74\x61\x74\x75\x73").textContent = "\x54\x68\x69\x73\x20\x77\x6f\x72\x6b\x73\x70\x61\x63\x65\x20\x64\x6f\x65\x73\x20\x6e\x6f\x74\x20\x73\x75\x70\x70\x6f\x72\x74\x20\x74\x68\x69\x73\x20\x76\x69\x64\x65\x6f\x20\x70\x6c\x61\x79\x65\x72\x2e");
      } catch {
        _0x984456_14() && _0x984456_18();
      }
    }(0);
  }
  async function _0x984456_40(_0x984456_0, _0x984456_1, _0x984456_2, _0x984456_3) {
    const _0x984456_4 = document.createElement("\x66\x6f\x72\x6d");
    _0x984456_4.className = "\x65\x70\x69\x73\x6f\x64\x65\x2d\x66\x6f\x72\x6d";
    let _0x984456_5 = 0;
    const _0x984456_6 = document.createElement("\x73\x65\x6c\x65\x63\x74"), _0x984456_8 = document.createElement("\x73\x65\x6c\x65\x63\x74"), _0x984456_9 = document.createElement("\x62\x75\x74\x74\x6f\x6e"), _0x984456_a = document.createElement("\x70");
    _0x984456_a.setAttribute("\x72\x6f\x6c\x65", "\x73\x74\x61\x74\x75\x73"), _0x984456_9.type = "\x73\x75\x62\x6d\x69\x74", _0x984456_9.className = "\x69\x63\x6f\x6e\x2d\x63\x6f\x6e\x74\x72\x6f\x6c", 
    _0x984456_9.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", "\x50\x6c\x61\x79\x20\x73\x65\x6c\x65\x63\x74\x65\x64\x20\x65\x70\x69\x73\x6f\x64\x65"), _0x984456_9.title = "\x50\x6c\x61\x79\x20\x73\x65\x6c\x65\x63\x74\x65\x64\x20\x65\x70\x69\x73\x6f\x64\x65", 
    _0x984456_42(_0x984456_9, "\x70\x6c\x61\x79");
    for (const [_0x984456_7, _0x984456_d] of [ [ "\x53\x65\x61\x73\x6f\x6e", _0x984456_6 ], [ "\x45\x70\x69\x73\x6f\x64\x65", _0x984456_8 ] ]) {
      const _0x984456_0 = document.createElement("\x6c\x61\x62\x65\x6c");
      _0x984456_0.textContent = _0x984456_7, _0x984456_0.append(_0x984456_d), _0x984456_4.append(_0x984456_0);
    }
    _0x984456_4.append(_0x984456_9, _0x984456_a), _0x984456_0.replaceChildren(_0x984456_4);
    for (const _0x984456_7 of _0x984456_1.seasons || []) {
      const _0x984456_0 = document.createElement("\x6f\x70\x74\x69\x6f\x6e");
      _0x984456_0.value = _0x984456_7.number, _0x984456_0.textContent = _0x984456_7.name || "\x53\x65\x61\x73\x6f\x6e\x20" + _0x984456_7.number, 
      _0x984456_6.append(_0x984456_0);
    }
    const _0x984456_b = (_0x984456_1.seasons || []).some(_0x984456_0 => _0x984456_0.number === Number(_0x984456_2)) ? Number(_0x984456_2) : (_0x984456_1.seasons || []).find(_0x984456_0 => _0x984456_0.number > 0)?.number ?? _0x984456_1.seasons?.[0]?.number;
    if (void 0 === _0x984456_b) return _0x984456_a.textContent = "\x4e\x6f\x20\x65\x70\x69\x73\x6f\x64\x65\x73\x20\x61\x72\x65\x20\x6c\x69\x73\x74\x65\x64\x20\x79\x65\x74\x2e", 
    void (_0x984456_9.disabled = _0x984456_6.disabled = _0x984456_8.disabled = !0);
    async function _0x984456_c() {
      const _0x984456_2 = ++_0x984456_5;
      _0x984456_8.replaceChildren(), _0x984456_8.disabled = _0x984456_9.disabled = !0, 
      _0x984456_a.textContent = "\x4c\x6f\x61\x64\x69\x6e\x67\x20\x65\x70\x69\x73\x6f\x64\x65\x73\u2026";
      try {
        const _0x984456_7 = await _0x984456_12("\x74\x76\x2f" + _0x984456_1.id + "\x2f\x73\x65\x61\x73\x6f\x6e\x2f" + _0x984456_6.value);
        if (_0x984456_2 !== _0x984456_5 || !_0x984456_0.contains(_0x984456_4)) return;
        for (const _0x984456_0 of _0x984456_7.episodes) {
          const _0x984456_1 = document.createElement("\x6f\x70\x74\x69\x6f\x6e");
          _0x984456_1.value = _0x984456_0.number, _0x984456_1.textContent = _0x984456_0.number + "\x2e\x20" + _0x984456_0.name, 
          _0x984456_8.append(_0x984456_1);
        }
        [ ..._0x984456_8.options ].some(_0x984456_0 => _0x984456_0.value === String(_0x984456_3)) && (_0x984456_8.value = String(_0x984456_3)), 
        _0x984456_3 = null, _0x984456_a.textContent = _0x984456_7.episodes.length ? "" : "\x4e\x6f\x20\x65\x70\x69\x73\x6f\x64\x65\x73\x20\x61\x72\x65\x20\x6c\x69\x73\x74\x65\x64\x20\x79\x65\x74\x2e", 
        _0x984456_9.disabled = _0x984456_8.disabled = !_0x984456_7.episodes.length, _0x984456_42(_0x984456_9, "\x70\x6c\x61\x79");
      } catch (_0x984456_7) {
        if (_0x984456_2 !== _0x984456_5) return;
        _0x984456_a.textContent = _0x984456_7.message, _0x984456_9.disabled = !1, _0x984456_42(_0x984456_9, "\x72\x65\x6c\x6f\x61\x64");
      }
    }
    _0x984456_6.value = String(_0x984456_b), _0x984456_6.onchange = _0x984456_c, _0x984456_4.onsubmit = _0x984456_0 => {
      if (_0x984456_0.preventDefault(), !_0x984456_8.value) return void _0x984456_c();
      _0x984456_7("\x65\x70\x69\x73\x6f\x64\x65\x2d\x70\x69\x63\x6b\x65\x72").hidden = !0, _0x984456_7("\x63\x68\x6f\x6f\x73\x65\x2d\x65\x70\x69\x73\x6f\x64\x65\x73").setAttribute("\x61\x72\x69\x61\x2d\x65\x78\x70\x61\x6e\x64\x65\x64", "\x66\x61\x6c\x73\x65");
      const _0x984456_2 = "\x23\x77\x61\x74\x63\x68\x3d" + _0x984456_1.id + "\x2f" + _0x984456_6.value + "\x2f" + _0x984456_8.value;
      location.hash === _0x984456_2 ? _0x984456_3f() : location.hash = _0x984456_2;
    }, await _0x984456_c();
  }
  _0x984456_7("\x64\x65\x74\x61\x69\x6c").addEventListener("\x63\x61\x6e\x63\x65\x6c", _0x984456_0 => {
    _0x984456_0.preventDefault(), location.hash = "";
  }), _0x984456_7("\x64\x65\x74\x61\x69\x6c").addEventListener("\x63\x6c\x69\x63\x6b", _0x984456_0 => {
    if (_0x984456_0.target === _0x984456_7("\x64\x65\x74\x61\x69\x6c")) {
      const _0x984456_1 = _0x984456_7("\x64\x65\x74\x61\x69\x6c").getBoundingClientRect();
      (_0x984456_0.clientX < _0x984456_1.left || _0x984456_0.clientX > _0x984456_1.right || _0x984456_0.clientY < _0x984456_1.top || _0x984456_0.clientY > _0x984456_1.bottom) && (location.hash = "");
    }
  }), _0x984456_7("\x63\x68\x6f\x6f\x73\x65\x2d\x73\x6f\x75\x72\x63\x65").onclick = () => _0x984456_2f(_0x984456_7("\x73\x6f\x75\x72\x63\x65\x73\x2d\x70\x61\x6e\x65\x6c").hidden), 
  _0x984456_7("\x61\x75\x74\x6f\x2d\x73\x6f\x75\x72\x63\x65").onclick = () => {
    try {
      localStorage.removeItem("\x6e\x79\x78\x2e\x6d\x6f\x76\x69\x65\x73\x2e\x70\x72\x65\x66\x65\x72\x72\x65\x64\x53\x6f\x75\x72\x63\x65");
    } catch {}
    _0x984456_3f();
  }, _0x984456_7("\x63\x6c\x6f\x73\x65\x2d\x73\x6f\x75\x72\x63\x65\x73").onclick = () => {
    _0x984456_2f(!1), _0x984456_7("\x63\x68\x6f\x6f\x73\x65\x2d\x73\x6f\x75\x72\x63\x65").focus();
  }, _0x984456_7("\x63\x68\x6f\x6f\x73\x65\x2d\x65\x70\x69\x73\x6f\x64\x65\x73").onclick = async () => {
    const _0x984456_0 = _0x984456_7("\x65\x70\x69\x73\x6f\x64\x65\x2d\x70\x69\x63\x6b\x65\x72").hidden;
    if (_0x984456_7("\x65\x70\x69\x73\x6f\x64\x65\x2d\x70\x69\x63\x6b\x65\x72").hidden = !_0x984456_0, _0x984456_7("\x63\x68\x6f\x6f\x73\x65\x2d\x65\x70\x69\x73\x6f\x64\x65\x73").setAttribute("\x61\x72\x69\x61\x2d\x65\x78\x70\x61\x6e\x64\x65\x64", String(_0x984456_0)), 
    !_0x984456_0) return;
    _0x984456_2f(!1), _0x984456_7("\x73\x65\x74\x74\x69\x6e\x67\x73\x2d\x70\x61\x6e\x65\x6c").hidden = !0;
    const _0x984456_1 = _0x984456_11;
    _0x984456_7("\x77\x61\x74\x63\x68\x2d\x65\x70\x69\x73\x6f\x64\x65\x2d\x66\x69\x65\x6c\x64\x73").textContent = "\x4c\x6f\x61\x64\x69\x6e\x67\x20\x73\x65\x61\x73\x6f\x6e\x73\u2026";
    try {
      const _0x984456_0 = await _0x984456_12("\x74\x76\x2f" + _0x984456_1.tmdbSeriesId);
      if (_0x984456_11 !== _0x984456_1 || _0x984456_7("\x65\x70\x69\x73\x6f\x64\x65\x2d\x70\x69\x63\x6b\x65\x72").hidden) return;
      await _0x984456_40(_0x984456_7("\x77\x61\x74\x63\x68\x2d\x65\x70\x69\x73\x6f\x64\x65\x2d\x66\x69\x65\x6c\x64\x73"), _0x984456_0, _0x984456_1.season, _0x984456_1.episode);
    } catch (_0x984456_2) {
      _0x984456_7("\x77\x61\x74\x63\x68\x2d\x65\x70\x69\x73\x6f\x64\x65\x2d\x66\x69\x65\x6c\x64\x73").textContent = _0x984456_2.message;
    }
  }, _0x984456_7("\x63\x6c\x6f\x73\x65\x2d\x65\x70\x69\x73\x6f\x64\x65\x73").onclick = () => {
    _0x984456_7("\x65\x70\x69\x73\x6f\x64\x65\x2d\x70\x69\x63\x6b\x65\x72").hidden = !0, _0x984456_7("\x63\x68\x6f\x6f\x73\x65\x2d\x65\x70\x69\x73\x6f\x64\x65\x73").setAttribute("\x61\x72\x69\x61\x2d\x65\x78\x70\x61\x6e\x64\x65\x64", "\x66\x61\x6c\x73\x65"), 
    _0x984456_7("\x63\x68\x6f\x6f\x73\x65\x2d\x65\x70\x69\x73\x6f\x64\x65\x73").focus();
  };
  const _0x984456_41 = {
    episodes: "\x3c\x72\x65\x63\x74\x20\x78\x3d\x22\x33\x22\x20\x79\x3d\x22\x34\x22\x20\x77\x69\x64\x74\x68\x3d\x22\x31\x38\x22\x20\x68\x65\x69\x67\x68\x74\x3d\x22\x31\x36\x22\x20\x72\x78\x3d\x22\x32\x22\x2f\x3e\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x4d\x38\x20\x34\x76\x31\x36\x4d\x33\x20\x39\x68\x35\x4d\x33\x20\x31\x35\x68\x35\x6d\x34\x2d\x36\x68\x35\x6d\x2d\x35\x20\x36\x68\x35\x22\x2f\x3e",
    search: "\x3c\x63\x69\x72\x63\x6c\x65\x20\x63\x78\x3d\x22\x31\x30\x2e\x35\x22\x20\x63\x79\x3d\x22\x31\x30\x2e\x35\x22\x20\x72\x3d\x22\x36\x2e\x35\x22\x2f\x3e\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x6d\x31\x36\x20\x31\x36\x20\x35\x20\x35\x22\x2f\x3e",
    next: "\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x6d\x39\x20\x35\x20\x37\x20\x37\x2d\x37\x20\x37\x22\x2f\x3e",
    previous: "\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x6d\x31\x35\x20\x35\x2d\x37\x20\x37\x20\x37\x20\x37\x22\x2f\x3e",
    reload: "\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x4d\x32\x30\x20\x37\x76\x35\x68\x2d\x35\x4d\x32\x30\x20\x31\x32\x61\x38\x20\x38\x20\x30\x20\x31\x20\x30\x2d\x32\x20\x35\x22\x2f\x3e",
    sources: "\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x6d\x31\x32\x20\x33\x20\x39\x20\x35\x2d\x39\x20\x35\x2d\x39\x2d\x35\x5a\x6d\x2d\x39\x20\x39\x20\x39\x20\x35\x20\x39\x2d\x35\x4d\x33\x20\x31\x36\x6c\x39\x20\x35\x20\x39\x2d\x35\x22\x2f\x3e",
    info: "\x3c\x63\x69\x72\x63\x6c\x65\x20\x63\x78\x3d\x22\x31\x32\x22\x20\x63\x79\x3d\x22\x31\x32\x22\x20\x72\x3d\x22\x39\x22\x2f\x3e\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x4d\x31\x32\x20\x31\x31\x76\x36\x6d\x30\x2d\x31\x30\x76\x2e\x35\x22\x2f\x3e",
    home: "\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x6d\x33\x20\x31\x30\x20\x39\x2d\x37\x20\x39\x20\x37\x76\x31\x31\x68\x2d\x37\x76\x2d\x37\x68\x2d\x34\x76\x37\x48\x33\x5a\x22\x2f\x3e",
    play: "\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x6d\x38\x20\x35\x20\x31\x31\x20\x37\x2d\x31\x31\x20\x37\x5a\x22\x2f\x3e",
    pause: "\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x4d\x38\x20\x35\x76\x31\x34\x4d\x31\x36\x20\x35\x76\x31\x34\x22\x2f\x3e",
    close: "\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x6d\x36\x20\x36\x20\x31\x32\x20\x31\x32\x4d\x31\x38\x20\x36\x20\x36\x20\x31\x38\x22\x2f\x3e",
    back: "\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x4d\x32\x30\x20\x31\x32\x48\x34\x6d\x37\x2d\x37\x2d\x37\x20\x37\x20\x37\x20\x37\x22\x2f\x3e",
    rewind: "\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x4d\x36\x2e\x33\x35\x20\x37\x2e\x33\x35\x41\x38\x20\x38\x20\x30\x20\x31\x20\x31\x20\x34\x20\x31\x33\x4d\x36\x2e\x33\x35\x20\x33\x2e\x35\x76\x33\x2e\x38\x35\x68\x33\x2e\x38\x35\x22\x2f\x3e\x3c\x74\x65\x78\x74\x20\x78\x3d\x22\x31\x32\x22\x20\x79\x3d\x22\x31\x33\x2e\x35\x22\x20\x74\x65\x78\x74\x2d\x61\x6e\x63\x68\x6f\x72\x3d\x22\x6d\x69\x64\x64\x6c\x65\x22\x20\x64\x6f\x6d\x69\x6e\x61\x6e\x74\x2d\x62\x61\x73\x65\x6c\x69\x6e\x65\x3d\x22\x63\x65\x6e\x74\x72\x61\x6c\x22\x20\x73\x74\x72\x6f\x6b\x65\x3d\x22\x6e\x6f\x6e\x65\x22\x20\x66\x69\x6c\x6c\x3d\x22\x63\x75\x72\x72\x65\x6e\x74\x43\x6f\x6c\x6f\x72\x22\x20\x66\x6f\x6e\x74\x2d\x66\x61\x6d\x69\x6c\x79\x3d\x22\x41\x72\x69\x61\x6c\x2c\x20\x73\x61\x6e\x73\x2d\x73\x65\x72\x69\x66\x22\x20\x66\x6f\x6e\x74\x2d\x77\x65\x69\x67\x68\x74\x3d\x22\x36\x30\x30\x22\x20\x66\x6f\x6e\x74\x2d\x73\x69\x7a\x65\x3d\x22\x38\x22\x3e\x31\x30\x3c\x2f\x74\x65\x78\x74\x3e",
    forward: "\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x4d\x31\x37\x2e\x36\x35\x20\x37\x2e\x33\x35\x41\x38\x20\x38\x20\x30\x20\x31\x20\x30\x20\x32\x30\x20\x31\x33\x4d\x31\x37\x2e\x36\x35\x20\x33\x2e\x35\x76\x33\x2e\x38\x35\x48\x31\x33\x2e\x38\x22\x2f\x3e\x3c\x74\x65\x78\x74\x20\x78\x3d\x22\x31\x32\x22\x20\x79\x3d\x22\x31\x33\x2e\x35\x22\x20\x74\x65\x78\x74\x2d\x61\x6e\x63\x68\x6f\x72\x3d\x22\x6d\x69\x64\x64\x6c\x65\x22\x20\x64\x6f\x6d\x69\x6e\x61\x6e\x74\x2d\x62\x61\x73\x65\x6c\x69\x6e\x65\x3d\x22\x63\x65\x6e\x74\x72\x61\x6c\x22\x20\x73\x74\x72\x6f\x6b\x65\x3d\x22\x6e\x6f\x6e\x65\x22\x20\x66\x69\x6c\x6c\x3d\x22\x63\x75\x72\x72\x65\x6e\x74\x43\x6f\x6c\x6f\x72\x22\x20\x66\x6f\x6e\x74\x2d\x66\x61\x6d\x69\x6c\x79\x3d\x22\x41\x72\x69\x61\x6c\x2c\x20\x73\x61\x6e\x73\x2d\x73\x65\x72\x69\x66\x22\x20\x66\x6f\x6e\x74\x2d\x77\x65\x69\x67\x68\x74\x3d\x22\x36\x30\x30\x22\x20\x66\x6f\x6e\x74\x2d\x73\x69\x7a\x65\x3d\x22\x38\x22\x3e\x31\x30\x3c\x2f\x74\x65\x78\x74\x3e",
    volume: "\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x4d\x31\x31\x20\x35\x20\x36\x20\x39\x48\x33\x76\x36\x68\x33\x6c\x35\x20\x34\x5a\x4d\x31\x35\x20\x38\x61\x36\x20\x36\x20\x30\x20\x30\x20\x31\x20\x30\x20\x38\x6d\x33\x2d\x31\x31\x61\x31\x30\x20\x31\x30\x20\x30\x20\x30\x20\x31\x20\x30\x20\x31\x34\x22\x2f\x3e",
    muted: "\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x4d\x31\x31\x20\x35\x20\x36\x20\x39\x48\x33\x76\x36\x68\x33\x6c\x35\x20\x34\x5a\x6d\x35\x20\x34\x20\x35\x20\x36\x6d\x30\x2d\x36\x2d\x35\x20\x36\x22\x2f\x3e",
    pip: "\x3c\x72\x65\x63\x74\x20\x78\x3d\x22\x33\x22\x20\x79\x3d\x22\x35\x22\x20\x77\x69\x64\x74\x68\x3d\x22\x31\x38\x22\x20\x68\x65\x69\x67\x68\x74\x3d\x22\x31\x34\x22\x20\x72\x78\x3d\x22\x32\x22\x2f\x3e\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x4d\x31\x32\x20\x31\x32\x68\x36\x76\x34\x68\x2d\x36\x5a\x22\x2f\x3e",
    fullscreen: "\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x4d\x38\x20\x33\x48\x33\x76\x35\x6d\x31\x33\x2d\x35\x68\x35\x76\x35\x4d\x33\x20\x31\x36\x76\x35\x68\x35\x6d\x31\x33\x2d\x35\x76\x35\x68\x2d\x35\x22\x2f\x3e",
    settings: "\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x6d\x39\x20\x33\x2d\x2e\x36\x20\x33\x2d\x32\x2e\x36\x20\x31\x2e\x35\x4c\x33\x20\x37\x6c\x2d\x31\x20\x33\x20\x32\x2e\x32\x20\x32\x4c\x34\x20\x31\x35\x6c\x2d\x31\x20\x32\x20\x32\x2e\x35\x20\x32\x20\x32\x2e\x35\x2d\x31\x20\x33\x20\x31\x20\x31\x20\x32\x20\x33\x2d\x2e\x35\x2e\x35\x2d\x32\x2e\x35\x20\x32\x2e\x35\x2d\x32\x20\x33\x20\x2e\x32\x2e\x38\x2d\x33\x2d\x32\x2d\x32\x20\x2e\x32\x2d\x33\x20\x31\x2d\x32\x4c\x31\x38\x20\x34\x6c\x2d\x32\x2e\x35\x20\x31\x2d\x33\x2d\x31\x2d\x31\x2d\x32\x5a\x22\x2f\x3e\x3c\x63\x69\x72\x63\x6c\x65\x20\x63\x78\x3d\x22\x31\x32\x22\x20\x63\x79\x3d\x22\x31\x32\x22\x20\x72\x3d\x22\x33\x22\x2f\x3e"
  };
  function _0x984456_42(_0x984456_0, _0x984456_1) {
    _0x984456_0.innerHTML = "\x3c\x73\x76\x67\x20\x76\x69\x65\x77\x42\x6f\x78\x3d\x22\x30\x20\x30\x20\x32\x34\x20\x32\x34\x22\x20\x66\x69\x6c\x6c\x3d\x22\x6e\x6f\x6e\x65\x22\x20\x73\x74\x72\x6f\x6b\x65\x3d\x22\x63\x75\x72\x72\x65\x6e\x74\x43\x6f\x6c\x6f\x72\x22\x20\x73\x74\x72\x6f\x6b\x65\x2d\x77\x69\x64\x74\x68\x3d\x22\x31\x2e\x37\x22\x20\x73\x74\x72\x6f\x6b\x65\x2d\x6c\x69\x6e\x65\x63\x61\x70\x3d\x22\x72\x6f\x75\x6e\x64\x22\x20\x73\x74\x72\x6f\x6b\x65\x2d\x6c\x69\x6e\x65\x6a\x6f\x69\x6e\x3d\x22\x72\x6f\x75\x6e\x64\x22\x20\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e\x3d\x22\x74\x72\x75\x65\x22\x3e" + _0x984456_41[_0x984456_1] + "\x3c\x2f\x73\x76\x67\x3e";
  }
  document.querySelectorAll("\x5b\x64\x61\x74\x61\x2d\x69\x63\x6f\x6e\x5d").forEach(_0x984456_0 => _0x984456_42(_0x984456_0, _0x984456_0.dataset.icon));
  for (const [_0x984456_0, _0x984456_1, _0x984456_2] of [ [ "\x23\x66\x65\x61\x74\x75\x72\x65\x64\x2d\x6f\x70\x65\x6e", "\x69\x6e\x66\x6f", "\x56\x69\x65\x77\x20\x6d\x6f\x76\x69\x65\x20\x64\x65\x74\x61\x69\x6c\x73" ], [ "\x23\x77\x61\x74\x63\x68", "\x70\x6c\x61\x79", "\x50\x6c\x61\x79\x20\x6d\x6f\x76\x69\x65" ], [ "\x23\x73\x65\x61\x72\x63\x68\x20\x62\x75\x74\x74\x6f\x6e", "\x73\x65\x61\x72\x63\x68", "\x53\x65\x61\x72\x63\x68\x20\x6d\x6f\x76\x69\x65\x73" ], [ "\x23\x63\x6c\x65\x61\x72\x2d\x73\x65\x61\x72\x63\x68", "\x63\x6c\x6f\x73\x65", "\x43\x6c\x65\x61\x72\x20\x73\x65\x61\x72\x63\x68" ], [ "\x23\x72\x65\x74\x72\x79\x2d\x73\x65\x61\x72\x63\x68", "\x72\x65\x6c\x6f\x61\x64", "\x52\x65\x74\x72\x79\x20\x6d\x6f\x76\x69\x65\x20\x73\x65\x61\x72\x63\x68" ], [ "\x23\x72\x65\x74\x72\x79\x2d\x64\x65\x74\x61\x69\x6c", "\x72\x65\x6c\x6f\x61\x64", "\x52\x65\x74\x72\x79\x20\x6d\x6f\x76\x69\x65\x20\x64\x65\x74\x61\x69\x6c\x73" ], [ "\x23\x72\x65\x74\x72\x79\x2d\x70\x6c\x61\x79\x65\x72", "\x72\x65\x6c\x6f\x61\x64", "\x52\x65\x6c\x6f\x61\x64\x20\x70\x6c\x61\x79\x65\x72" ], [ "\x23\x70\x72\x65\x76\x69\x6f\x75\x73", "\x70\x72\x65\x76\x69\x6f\x75\x73", "\x50\x72\x65\x76\x69\x6f\x75\x73\x20\x70\x61\x67\x65" ], [ "\x23\x6e\x65\x78\x74", "\x6e\x65\x78\x74", "\x4e\x65\x78\x74\x20\x70\x61\x67\x65" ], [ "\x23\x63\x68\x6f\x6f\x73\x65\x2d\x73\x6f\x75\x72\x63\x65", "\x73\x6f\x75\x72\x63\x65\x73", "\x56\x69\x64\x65\x6f\x20\x73\x6f\x75\x72\x63\x65\x73" ], [ "\x2e\x68\x6f\x6d\x65\x2d\x6c\x69\x6e\x6b", "\x68\x6f\x6d\x65", "\x42\x61\x63\x6b\x20\x74\x6f\x20\x4e\x79\x78" ] ]) {
    const _0x984456_3 = document.querySelector(_0x984456_0);
    _0x984456_3.classList.add("\x69\x63\x6f\x6e\x2d\x63\x6f\x6e\x74\x72\x6f\x6c"), _0x984456_3.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", _0x984456_2), 
    _0x984456_3.title = _0x984456_2, _0x984456_42(_0x984456_3, _0x984456_1);
  }
  document.querySelectorAll("\x62\x75\x74\x74\x6f\x6e\x5b\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c\x5d").forEach(_0x984456_0 => _0x984456_0.title = _0x984456_0.getAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c"));
  const _0x984456_43 = _0x984456_0 => {
    const _0x984456_1 = Math.max(0, Math.floor(Number.isFinite(_0x984456_0) ? _0x984456_0 : 0));
    return (_0x984456_1 >= 3600 ? Math.floor(_0x984456_1 / 3600) + "\x3a" : "") + String(Math.floor(_0x984456_1 / 60) % 60).padStart(_0x984456_1 >= 3600 ? 2 : 1, "\x30") + "\x3a" + String(_0x984456_1 % 60).padStart(2, "\x30");
  };
  function _0x984456_44() {
    const _0x984456_0 = _0x984456_34;
    _0x984456_0 ? _0x984456_0.paused ? _0x984456_0.play().catch(() => {
      _0x984456_7("\x70\x6c\x61\x79\x65\x72\x2d\x73\x74\x61\x74\x75\x73").textContent = "\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x73\x74\x61\x72\x74\x20\x70\x6c\x61\x79\x62\x61\x63\x6b\x2e\x20\x54\x72\x79\x20\x72\x65\x6c\x6f\x61\x64\x69\x6e\x67\x20\x74\x68\x65\x20\x70\x6c\x61\x79\x65\x72\x2e", 
      _0x984456_7("\x72\x65\x74\x72\x79\x2d\x70\x6c\x61\x79\x65\x72").hidden = !1;
    }) : _0x984456_0.pause() : _0x984456_37?.();
  }
  function _0x984456_45(_0x984456_0) {
    const _0x984456_1 = _0x984456_34;
    _0x984456_1 && Number.isFinite(_0x984456_1.duration) && (_0x984456_1.currentTime = Math.max(0, Math.min(_0x984456_1.duration, _0x984456_1.currentTime + _0x984456_0)));
  }
  let _0x984456_46 = 0;
  function _0x984456_47() {
    clearTimeout(_0x984456_46);
    const _0x984456_0 = _0x984456_7("\x77\x61\x74\x63\x68\x2d\x61\x72\x65\x61");
    _0x984456_0.classList.remove("\x63\x6f\x6e\x74\x72\x6f\x6c\x73\x2d\x69\x64\x6c\x65"), _0x984456_0.hidden || (_0x984456_46 = setTimeout(() => {
      const _0x984456_1 = [ "\x73\x65\x74\x74\x69\x6e\x67\x73\x2d\x70\x61\x6e\x65\x6c", "\x73\x6f\x75\x72\x63\x65\x73\x2d\x70\x61\x6e\x65\x6c", "\x65\x70\x69\x73\x6f\x64\x65\x2d\x70\x69\x63\x6b\x65\x72" ].some(_0x984456_0 => !_0x984456_7(_0x984456_0).hidden), _0x984456_2 = _0x984456_0.querySelector("\x3a\x66\x6f\x63\x75\x73\x2d\x76\x69\x73\x69\x62\x6c\x65");
      _0x984456_0.hidden || !_0x984456_34 || _0x984456_34.paused || _0x984456_34.ended || _0x984456_1 || _0x984456_2 || _0x984456_0.classList.add("\x63\x6f\x6e\x74\x72\x6f\x6c\x73\x2d\x69\x64\x6c\x65");
    }, 1e3));
  }
  for (const _0x984456_0 of [ "\x70\x6f\x69\x6e\x74\x65\x72\x6d\x6f\x76\x65", "\x70\x6f\x69\x6e\x74\x65\x72\x64\x6f\x77\x6e", "\x6b\x65\x79\x64\x6f\x77\x6e", "\x66\x6f\x63\x75\x73\x69\x6e" ]) _0x984456_7("\x77\x61\x74\x63\x68\x2d\x61\x72\x65\x61").addEventListener(_0x984456_0, _0x984456_47);
  function _0x984456_48(_0x984456_0) {
    _0x984456_39(!0);
    const _0x984456_1 = () => {
      if (_0x984456_0 !== _0x984456_34) return;
      const _0x984456_1 = Number.isFinite(_0x984456_0.duration) ? _0x984456_0.duration : 0;
      _0x984456_7("\x73\x65\x65\x6b").disabled = !_0x984456_1, _0x984456_7("\x73\x65\x65\x6b").max = _0x984456_1 || 100, 
      _0x984456_7("\x73\x65\x65\x6b").value = _0x984456_0.currentTime || 0, _0x984456_7("\x73\x65\x65\x6b").setAttribute("\x61\x72\x69\x61\x2d\x76\x61\x6c\x75\x65\x74\x65\x78\x74", _0x984456_43(_0x984456_0.currentTime) + "\x20\x6f\x66\x20" + _0x984456_43(_0x984456_1));
      let _0x984456_2 = 0;
      for (let _0x984456_3 = 0; _0x984456_3 < _0x984456_0.buffered.length; _0x984456_3++) _0x984456_0.buffered.start(_0x984456_3) <= _0x984456_0.currentTime + .5 && (_0x984456_2 = Math.max(_0x984456_2, _0x984456_0.buffered.end(_0x984456_3)));
      _0x984456_7("\x73\x65\x65\x6b").style.setProperty("\x2d\x2d\x70\x6c\x61\x79\x65\x64", _0x984456_1 ? _0x984456_0.currentTime / _0x984456_1 * 100 + "\x25" : "\x30\x25"), 
      _0x984456_7("\x73\x65\x65\x6b").style.setProperty("\x2d\x2d\x62\x75\x66\x66\x65\x72\x65\x64", _0x984456_1 ? _0x984456_2 / _0x984456_1 * 100 + "\x25" : "\x30\x25"), 
      _0x984456_7("\x70\x6c\x61\x79\x62\x61\x63\x6b\x2d\x74\x69\x6d\x65").textContent = _0x984456_43(_0x984456_0.currentTime) + "\x20\x2f\x20" + _0x984456_43(_0x984456_1), 
      _0x984456_42(_0x984456_7("\x74\x6f\x67\x67\x6c\x65\x2d\x70\x6c\x61\x79"), _0x984456_0.paused ? "\x70\x6c\x61\x79" : "\x70\x61\x75\x73\x65"), 
      _0x984456_7("\x74\x6f\x67\x67\x6c\x65\x2d\x70\x6c\x61\x79").setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", _0x984456_0.paused ? "\x50\x6c\x61\x79" : "\x50\x61\x75\x73\x65"), 
      _0x984456_42(_0x984456_7("\x6d\x75\x74\x65"), _0x984456_0.muted || !_0x984456_0.volume ? "\x6d\x75\x74\x65\x64" : "\x76\x6f\x6c\x75\x6d\x65"), 
      _0x984456_7("\x6d\x75\x74\x65").setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", _0x984456_0.muted ? "\x55\x6e\x6d\x75\x74\x65" : "\x4d\x75\x74\x65"), 
      _0x984456_7("\x76\x6f\x6c\x75\x6d\x65").value = _0x984456_0.muted ? 0 : _0x984456_0.volume;
    }, _0x984456_2 = [ "\x6c\x6f\x61\x64\x65\x64\x6d\x65\x74\x61\x64\x61\x74\x61", "\x64\x75\x72\x61\x74\x69\x6f\x6e\x63\x68\x61\x6e\x67\x65", "\x73\x65\x65\x6b\x69\x6e\x67", "\x73\x65\x65\x6b\x65\x64", "\x74\x69\x6d\x65\x75\x70\x64\x61\x74\x65", "\x70\x72\x6f\x67\x72\x65\x73\x73", "\x70\x6c\x61\x79", "\x70\x61\x75\x73\x65", "\x65\x6e\x64\x65\x64", "\x76\x6f\x6c\x75\x6d\x65\x63\x68\x61\x6e\x67\x65" ];
    for (const _0x984456_6 of _0x984456_2) _0x984456_0.addEventListener(_0x984456_6, _0x984456_1);
    const _0x984456_3 = [ "\x70\x6c\x61\x79", "\x70\x61\x75\x73\x65", "\x65\x6e\x64\x65\x64" ];
    for (const _0x984456_6 of _0x984456_3) _0x984456_0.addEventListener(_0x984456_6, _0x984456_47);
    _0x984456_47();
    const _0x984456_4 = _0x984456_0.onclick, _0x984456_5 = _0x984456_0.ondblclick;
    return _0x984456_0.onclick = _0x984456_44, _0x984456_0.ondblclick = _0x984456_4b, 
    _0x984456_7("\x70\x6c\x61\x79\x62\x61\x63\x6b\x2d\x73\x70\x65\x65\x64").value = "\x31", _0x984456_4a(), _0x984456_1(), _0x984456_7("\x70\x69\x63\x74\x75\x72\x65\x2d\x69\x6e\x2d\x70\x69\x63\x74\x75\x72\x65").hidden = !document.pictureInPictureEnabled || !_0x984456_0.requestPictureInPicture, 
    _0x984456_7("\x66\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e").hidden = !document.fullscreenEnabled, () => {
      clearTimeout(_0x984456_46);
      for (const _0x984456_1 of _0x984456_3) _0x984456_0.removeEventListener(_0x984456_1, _0x984456_47);
      for (const _0x984456_3 of _0x984456_2) _0x984456_0.removeEventListener(_0x984456_3, _0x984456_1);
      _0x984456_0.onclick = _0x984456_4, _0x984456_0.ondblclick = _0x984456_5;
    };
  }
  function _0x984456_49(_0x984456_0, _0x984456_1, _0x984456_2) {
    const _0x984456_3 = _0x984456_7(_0x984456_0);
    _0x984456_3.replaceChildren(..._0x984456_1.map(([_0x984456_0, _0x984456_1]) => {
      const _0x984456_2 = document.createElement("\x6f\x70\x74\x69\x6f\x6e");
      return _0x984456_2.value = _0x984456_0, _0x984456_2.textContent = _0x984456_1, _0x984456_2;
    })), _0x984456_3.value = String(_0x984456_2), _0x984456_3.disabled = _0x984456_1.length < 2;
  }
  function _0x984456_4a() {
    const _0x984456_0 = _0x984456_31?.levels || [], _0x984456_1 = _0x984456_31?.audioTracks || [], _0x984456_2 = _0x984456_31?.subtitleTracks || [];
    _0x984456_49("\x70\x6c\x61\x79\x62\x61\x63\x6b\x2d\x71\x75\x61\x6c\x69\x74\x79", _0x984456_31 ? [ [ -1, "\x41\x75\x74\x6f" ], ..._0x984456_0.map((_0x984456_0, _0x984456_1) => [ _0x984456_1, _0x984456_0.height ? _0x984456_0.height + "\x70" : Math.round(_0x984456_0.bitrate / 1e3) + "\x20\x6b\x62\x70\x73" ]) ] : [ [ -1, _0x984456_34?.videoHeight ? _0x984456_34.videoHeight + "\x70" : "\x53\x6f\x75\x72\x63\x65\x20\x64\x65\x66\x61\x75\x6c\x74" ] ], _0x984456_31?.currentLevel ?? -1), 
    _0x984456_49("\x70\x6c\x61\x79\x62\x61\x63\x6b\x2d\x61\x75\x64\x69\x6f", _0x984456_1.length ? _0x984456_1.map((_0x984456_0, _0x984456_1) => [ _0x984456_1, _0x984456_0.name || _0x984456_0.lang || "\x54\x72\x61\x63\x6b\x20" + (_0x984456_1 + 1) ]) : [ [ -1, "\x44\x65\x66\x61\x75\x6c\x74" ] ], _0x984456_31?.audioTrack ?? -1);
    const _0x984456_3 = _0x984456_31 ? _0x984456_2 : [ ..._0x984456_34?.textTracks || [] ];
    _0x984456_49("\x70\x6c\x61\x79\x62\x61\x63\x6b\x2d\x73\x75\x62\x74\x69\x74\x6c\x65\x73", [ [ -1, "\x4f\x66\x66" ], ..._0x984456_3.map((_0x984456_0, _0x984456_1) => [ _0x984456_1, _0x984456_0.name || _0x984456_0.label || _0x984456_0.lang || _0x984456_0.language || "\x54\x72\x61\x63\x6b\x20" + (_0x984456_1 + 1) ]) ], _0x984456_31 ? _0x984456_31.subtitleTrack : _0x984456_3.findIndex(_0x984456_0 => "\x73\x68\x6f\x77\x69\x6e\x67" === _0x984456_0.mode));
  }
  async function _0x984456_4b() {
    try {
      document.fullscreenElement ? await document.exitFullscreen() : await _0x984456_7("\x77\x61\x74\x63\x68\x2d\x61\x72\x65\x61").requestFullscreen();
    } catch {
      _0x984456_7("\x70\x6c\x61\x79\x65\x72\x2d\x73\x74\x61\x74\x75\x73").textContent = "\x46\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e\x20\x69\x73\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x20\x69\x6e\x20\x74\x68\x69\x73\x20\x77\x6f\x72\x6b\x73\x70\x61\x63\x65\x2e";
    }
  }
  _0x984456_7("\x73\x74\x61\x72\x74\x2d\x70\x6c\x61\x79\x62\x61\x63\x6b").onclick = () => {
    _0x984456_37?.();
  }, _0x984456_7("\x70\x6c\x61\x79\x65\x72").onclick = () => {
    _0x984456_7("\x77\x61\x74\x63\x68\x2d\x61\x72\x65\x61").classList.contains("\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x2d\x72\x65\x61\x64\x79") && _0x984456_44();
  }, _0x984456_7("\x74\x6f\x67\x67\x6c\x65\x2d\x70\x6c\x61\x79").onclick = _0x984456_44, _0x984456_7("\x73\x6b\x69\x70\x2d\x62\x61\x63\x6b").onclick = () => _0x984456_45(-10), 
  _0x984456_7("\x73\x6b\x69\x70\x2d\x66\x6f\x72\x77\x61\x72\x64").onclick = () => _0x984456_45(10), _0x984456_7("\x73\x65\x65\x6b").oninput = () => {
    _0x984456_34 && Number.isFinite(_0x984456_34.duration) && (_0x984456_34.currentTime = Number(_0x984456_7("\x73\x65\x65\x6b").value));
  }, _0x984456_7("\x6d\x75\x74\x65").onclick = () => {
    _0x984456_34 && (_0x984456_34.muted = !_0x984456_34.muted);
  }, _0x984456_7("\x76\x6f\x6c\x75\x6d\x65").oninput = () => {
    _0x984456_34 && (_0x984456_34.volume = Number(_0x984456_7("\x76\x6f\x6c\x75\x6d\x65").value), _0x984456_34.muted = !1);
  }, _0x984456_7("\x70\x6c\x61\x79\x65\x72\x2d\x73\x65\x74\x74\x69\x6e\x67\x73").onclick = () => {
    _0x984456_7("\x73\x65\x74\x74\x69\x6e\x67\x73\x2d\x70\x61\x6e\x65\x6c").hidden = !_0x984456_7("\x73\x65\x74\x74\x69\x6e\x67\x73\x2d\x70\x61\x6e\x65\x6c").hidden, _0x984456_7("\x70\x6c\x61\x79\x65\x72\x2d\x73\x65\x74\x74\x69\x6e\x67\x73").setAttribute("\x61\x72\x69\x61\x2d\x65\x78\x70\x61\x6e\x64\x65\x64", String(!_0x984456_7("\x73\x65\x74\x74\x69\x6e\x67\x73\x2d\x70\x61\x6e\x65\x6c").hidden));
  }, _0x984456_7("\x70\x6c\x61\x79\x62\x61\x63\x6b\x2d\x73\x70\x65\x65\x64").onchange = () => {
    _0x984456_34 && (_0x984456_34.playbackRate = Number(_0x984456_7("\x70\x6c\x61\x79\x62\x61\x63\x6b\x2d\x73\x70\x65\x65\x64").value));
  }, _0x984456_7("\x70\x6c\x61\x79\x62\x61\x63\x6b\x2d\x71\x75\x61\x6c\x69\x74\x79").onchange = () => {
    _0x984456_31 && (_0x984456_31.currentLevel = Number(_0x984456_7("\x70\x6c\x61\x79\x62\x61\x63\x6b\x2d\x71\x75\x61\x6c\x69\x74\x79").value));
  }, _0x984456_7("\x70\x6c\x61\x79\x62\x61\x63\x6b\x2d\x61\x75\x64\x69\x6f").onchange = () => {
    _0x984456_31 && (_0x984456_31.audioTrack = Number(_0x984456_7("\x70\x6c\x61\x79\x62\x61\x63\x6b\x2d\x61\x75\x64\x69\x6f").value));
  }, _0x984456_7("\x70\x6c\x61\x79\x62\x61\x63\x6b\x2d\x73\x75\x62\x74\x69\x74\x6c\x65\x73").onchange = () => {
    _0x984456_31 ? (_0x984456_31.subtitleTrack = Number(_0x984456_7("\x70\x6c\x61\x79\x62\x61\x63\x6b\x2d\x73\x75\x62\x74\x69\x74\x6c\x65\x73").value), 
    _0x984456_31.subtitleDisplay = _0x984456_31.subtitleTrack >= 0) : _0x984456_34 && [ ..._0x984456_34.textTracks ].forEach((_0x984456_0, _0x984456_1) => _0x984456_0.mode = _0x984456_1 === Number(_0x984456_7("\x70\x6c\x61\x79\x62\x61\x63\x6b\x2d\x73\x75\x62\x74\x69\x74\x6c\x65\x73").value) ? "\x73\x68\x6f\x77\x69\x6e\x67" : "\x64\x69\x73\x61\x62\x6c\x65\x64");
  }, _0x984456_7("\x66\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e").onclick = _0x984456_4b, _0x984456_7("\x70\x69\x63\x74\x75\x72\x65\x2d\x69\x6e\x2d\x70\x69\x63\x74\x75\x72\x65").onclick = async () => {
    try {
      document.pictureInPictureElement ? await document.exitPictureInPicture() : await (_0x984456_34?.requestPictureInPicture());
    } catch {
      _0x984456_7("\x70\x6c\x61\x79\x65\x72\x2d\x73\x74\x61\x74\x75\x73").textContent = "\x50\x69\x63\x74\x75\x72\x65\x20\x69\x6e\x20\x70\x69\x63\x74\x75\x72\x65\x20\x69\x73\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x20\x66\x6f\x72\x20\x74\x68\x69\x73\x20\x76\x69\x64\x65\x6f\x2e";
    }
  }, _0x984456_7("\x77\x61\x74\x63\x68\x2d\x61\x72\x65\x61").addEventListener("\x6b\x65\x79\x64\x6f\x77\x6e", _0x984456_0 => {
    if (_0x984456_0.target.closest("\x69\x6e\x70\x75\x74\x2c\x73\x65\x6c\x65\x63\x74") || _0x984456_0.ctrlKey || _0x984456_0.altKey || _0x984456_0.metaKey) return;
    if ("\x45\x73\x63\x61\x70\x65" === _0x984456_0.key) return void (_0x984456_7("\x65\x70\x69\x73\x6f\x64\x65\x2d\x70\x69\x63\x6b\x65\x72").hidden ? _0x984456_7("\x73\x6f\x75\x72\x63\x65\x73\x2d\x70\x61\x6e\x65\x6c").hidden ? _0x984456_7("\x73\x65\x74\x74\x69\x6e\x67\x73\x2d\x70\x61\x6e\x65\x6c").hidden ? document.fullscreenElement || _0x984456_7("\x63\x6c\x6f\x73\x65\x2d\x70\x6c\x61\x79\x65\x72").click() : (_0x984456_7("\x73\x65\x74\x74\x69\x6e\x67\x73\x2d\x70\x61\x6e\x65\x6c").hidden = !0, 
    _0x984456_7("\x70\x6c\x61\x79\x65\x72\x2d\x73\x65\x74\x74\x69\x6e\x67\x73").setAttribute("\x61\x72\x69\x61\x2d\x65\x78\x70\x61\x6e\x64\x65\x64", "\x66\x61\x6c\x73\x65"), _0x984456_7("\x70\x6c\x61\x79\x65\x72\x2d\x73\x65\x74\x74\x69\x6e\x67\x73").focus()) : (_0x984456_2f(!1), 
    _0x984456_7("\x63\x68\x6f\x6f\x73\x65\x2d\x73\x6f\x75\x72\x63\x65").focus()) : _0x984456_7("\x63\x6c\x6f\x73\x65\x2d\x65\x70\x69\x73\x6f\x64\x65\x73").click());
    if (_0x984456_0.target.closest("\x62\x75\x74\x74\x6f\x6e\x2c\x61") && "\x20" === _0x984456_0.key) return;
    const _0x984456_1 = {
      "\x20": _0x984456_44,
      k: _0x984456_44,
      ArrowLeft: () => _0x984456_45(-10),
      ArrowRight: () => _0x984456_45(10),
      m: () => _0x984456_7("\x6d\x75\x74\x65").click(),
      f: _0x984456_4b
    }[_0x984456_0.key];
    _0x984456_1 && (_0x984456_0.preventDefault(), _0x984456_1());
  }), addEventListener("\x66\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e\x63\x68\x61\x6e\x67\x65", () => {
    _0x984456_7("\x66\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e").setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", document.fullscreenElement ? "\x45\x78\x69\x74\x20\x66\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e" : "\x45\x6e\x74\x65\x72\x20\x66\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e");
  }), _0x984456_7("\x72\x65\x74\x72\x79\x2d\x64\x65\x74\x61\x69\x6c").onclick = _0x984456_3e, _0x984456_7("\x72\x65\x74\x72\x79\x2d\x73\x65\x61\x72\x63\x68").onclick = _0x984456_24, 
  _0x984456_7("\x63\x6c\x65\x61\x72\x2d\x73\x65\x61\x72\x63\x68").onclick = () => {
    _0x984456_e = "", _0x984456_7("\x71\x75\x65\x72\x79").value = "", _0x984456_f = 1, _0x984456_24();
  }, _0x984456_7("\x73\x65\x61\x72\x63\x68").onsubmit = _0x984456_0 => {
    _0x984456_0.preventDefault(), _0x984456_e = _0x984456_7("\x71\x75\x65\x72\x79").value.trim(), _0x984456_f = 1, 
    _0x984456_24();
  }, _0x984456_7("\x70\x72\x65\x76\x69\x6f\x75\x73").onclick = () => {
    _0x984456_f--, _0x984456_24();
  }, _0x984456_7("\x6e\x65\x78\x74").onclick = () => {
    _0x984456_f++, _0x984456_24();
  }, _0x984456_7("\x62\x61\x63\x6b").onclick = () => location.hash = "", _0x984456_7("\x77\x61\x74\x63\x68").onclick = () => _0x984456_3f(), 
  _0x984456_7("\x72\x65\x74\x72\x79\x2d\x70\x6c\x61\x79\x65\x72").onclick = () => _0x984456_3f(), _0x984456_7("\x63\x6c\x6f\x73\x65\x2d\x70\x6c\x61\x79\x65\x72").onclick = () => {
    const _0x984456_0 = _0x984456_11?.tmdbSeriesId;
    _0x984456_3a(), _0x984456_0 ? location.hash = "\x74\x76\x3d" + _0x984456_0 : (_0x984456_3c(), 
    _0x984456_7("\x77\x61\x74\x63\x68").focus());
  }, addEventListener("\x68\x61\x73\x68\x63\x68\x61\x6e\x67\x65", _0x984456_3e), addEventListener("\x70\x61\x67\x65\x68\x69\x64\x65", () => {
    clearTimeout(_0x984456_19), _0x984456_3a(), _0x984456_b?.abort(), _0x984456_c?.abort();
  }), _0x984456_24(), _0x984456_3e();
})();
