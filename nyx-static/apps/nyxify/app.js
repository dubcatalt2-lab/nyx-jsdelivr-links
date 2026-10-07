const _0x84b660_0 = new Map, _0x84b660_1 = {
  getItem(_0x84b660_1) {
    if (_0x84b660_0.has(_0x84b660_1)) return _0x84b660_0.get(_0x84b660_1);
    try {
      return localStorage.getItem(_0x84b660_1);
    } catch {
      return null;
    }
  },
  setItem(_0x84b660_1, _0x84b660_2) {
    try {
      localStorage.setItem(_0x84b660_1, _0x84b660_2), _0x84b660_0.delete(_0x84b660_1);
    } catch {
      _0x84b660_0.set(_0x84b660_1, String(_0x84b660_2));
    }
  }
}, _0x84b660_2 = document.getElementById("\x61\x75\x64\x69\x6f"), _0x84b660_3 = document.getElementById("\x70\x6c\x61\x79\x65\x72"), _0x84b660_4 = document.getElementById("\x74\x72\x61\x63\x6b\x4c\x69\x73\x74"), _0x84b660_5 = document.getElementById("\x63\x61\x72\x64\x47\x72\x69\x64"), _0x84b660_6 = document.getElementById("\x64\x65\x74\x61\x69\x6c\x56\x69\x65\x77"), _0x84b660_7 = document.getElementById("\x65\x6d\x70\x74\x79\x53\x74\x61\x74\x65"), _0x84b660_8 = document.getElementById("\x65\x6d\x70\x74\x79\x54\x69\x74\x6c\x65"), _0x84b660_9 = document.getElementById("\x65\x6d\x70\x74\x79\x53\x75\x62"), _0x84b660_a = document.getElementById("\x63\x72\x75\x6d\x62"), _0x84b660_b = document.getElementById("\x63\x72\x75\x6d\x62\x54\x65\x78\x74"), _0x84b660_c = document.getElementById("\x73\x65\x65\x6b\x42\x61\x72"), _0x84b660_d = document.getElementById("\x70\x6c\x61\x79\x42\x74\x6e"), _0x84b660_e = document.getElementById("\x70\x6c\x61\x79\x49\x63\x6f\x6e"), _0x84b660_f = document.getElementById("\x73\x65\x61\x72\x63\x68\x49\x6e\x70\x75\x74"), _0x84b660_10 = document.getElementById("\x70\x6c\x61\x79\x6c\x69\x73\x74\x4c\x69\x73\x74"), _0x84b660_11 = document.getElementById("\x73\x69\x64\x65\x62\x61\x72\x50\x6c\x61\x79\x6c\x69\x73\x74\x4c\x69\x73\x74"), _0x84b660_12 = document.getElementById("\x70\x6c\x61\x79\x6c\x69\x73\x74\x53\x79\x6e\x63"), _0x84b660_13 = document.getElementById("\x70\x6c\x61\x79\x6c\x69\x73\x74\x44\x69\x61\x6c\x6f\x67"), _0x84b660_14 = document.getElementById("\x70\x6c\x61\x79\x6c\x69\x73\x74\x43\x68\x6f\x69\x63\x65\x73"), _0x84b660_15 = document.getElementById("\x70\x6c\x61\x79\x6c\x69\x73\x74\x4e\x61\x6d\x65"), _0x84b660_16 = document.getElementById("\x70\x6c\x61\x79\x6c\x69\x73\x74\x4d\x65\x73\x73\x61\x67\x65"), _0x84b660_17 = document.getElementById("\x70\x50\x6c\x61\x79\x6c\x69\x73\x74"), _0x84b660_18 = document.getElementById("\x6e\x6f\x77\x50\x6c\x61\x79\x69\x6e\x67\x4d\x6f\x64\x75\x6c\x65"), _0x84b660_19 = document.getElementById("\x6e\x6f\x77\x50\x6c\x61\x79\x69\x6e\x67\x4d\x65\x64\x69\x61"), _0x84b660_1a = document.getElementById("\x6e\x6f\x77\x50\x6c\x61\x79\x69\x6e\x67\x41\x72\x74"), _0x84b660_1b = document.getElementById("\x6e\x6f\x77\x50\x6c\x61\x79\x69\x6e\x67\x43\x6f\x6e\x74\x65\x78\x74"), _0x84b660_1c = document.getElementById("\x6e\x6f\x77\x50\x6c\x61\x79\x69\x6e\x67\x54\x69\x74\x6c\x65"), _0x84b660_1d = document.getElementById("\x6e\x6f\x77\x50\x6c\x61\x79\x69\x6e\x67\x41\x72\x74\x69\x73\x74"), _0x84b660_1e = document.getElementById("\x6e\x6f\x77\x50\x6c\x61\x79\x69\x6e\x67\x41\x6c\x62\x75\x6d"), _0x84b660_1f = document.getElementById("\x6e\x6f\x77\x50\x6c\x61\x79\x69\x6e\x67\x50\x6c\x61\x79\x6c\x69\x73\x74\x73"), _0x84b660_20 = document.getElementById("\x6e\x6f\x77\x50\x6c\x61\x79\x69\x6e\x67\x4e\x65\x78\x74"), _0x84b660_21 = document.getElementById("\x66\x75\x6c\x6c\x54\x72\x61\x63\x6b\x53\x74\x61\x67\x65"), _0x84b660_22 = document.getElementById("\x66\x75\x6c\x6c\x54\x72\x61\x63\x6b\x54\x69\x74\x6c\x65"), _0x84b660_23 = document.getElementById("\x66\x75\x6c\x6c\x54\x72\x61\x63\x6b\x53\x74\x61\x74\x75\x73"), _0x84b660_24 = document.getElementById("\x66\x75\x6c\x6c\x54\x72\x61\x63\x6b\x56\x69\x64\x65\x6f"), _0x84b660_25 = document.getElementById("\x66\x75\x6c\x6c\x54\x72\x61\x63\x6b\x56\x69\x64\x65\x6f\x4c\x61\x62\x65\x6c"), _0x84b660_26 = document.getElementById("\x66\x75\x6c\x6c\x54\x72\x61\x63\x6b\x46\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e");

let _0x84b660_27 = null, _0xf24d16_18 = [], _0x84b660_28 = "", _0x84b660_29 = "\x68\x6f\x6d\x65", _0x84b660_2a = {
  tracks: [],
  artists: [],
  albums: []
}, _0x84b660_2b = !0, _0x84b660_2c = "", _0x84b660_2d = "\x4e\x79\x78\x69\x66\x79", _0x84b660_2e = null, _0x84b660_2f = 0, _0x84b660_30 = !1, _0x84b660_31 = "", _0x84b660_32 = "", _0x84b660_33 = null, _0x84b660_34 = [], _0x84b660_35 = "", _0x84b660_36 = 0, _0x84b660_37 = null, _0x84b660_38 = Promise.resolve(), _0x84b660_39 = 0;

const _0x84b660_3a = 18e3, _0x84b660_3b = 8388608, _0x84b660_3c = new Map;

let _0x84b660_3d = [], _0x84b660_3e = -1, _0x84b660_3f = "\x69\x64\x6c\x65", _0x84b660_40 = null, _0x84b660_41 = !1, _0x84b660_42 = 0, _0x84b660_43 = null, _0x84b660_44 = null, _0x84b660_45 = !1, _0x84b660_46 = null, _0x84b660_47 = "\x31" === _0x84b660_1.getItem("\x6e\x79\x78\x5f\x6e\x79\x78\x69\x66\x79\x5f\x76\x69\x64\x65\x6f\x5f\x69\x6e\x5f\x63\x6f\x76\x65\x72");

const _0x84b660_48 = window.NyxTubePlayerCore.createDirectYoutubeApi({
  optimisticState: !1
}), _0x84b660_49 = new Map, _0x84b660_4a = new Map, _0x84b660_4b = "\x6e\x79\x78\x5f\x6e\x79\x78\x69\x66\x79\x5f\x66\x75\x6c\x6c\x5f\x74\x72\x61\x63\x6b\x5f\x6d\x61\x74\x63\x68\x65\x73\x5f\x76\x31", _0x84b660_4c = 3e5, _0x84b660_4d = 24;

let _0x84b660_4e = 0, _0x84b660_4f = "\x31" === _0x84b660_1.getItem("\x6e\x79\x78\x5f\x6e\x79\x78\x69\x66\x79\x5f\x73\x68\x75\x66\x66\x6c\x65"), _0x84b660_50 = _0x84b660_1.getItem("\x6e\x79\x78\x5f\x6e\x79\x78\x69\x66\x79\x5f\x72\x65\x70\x65\x61\x74") || "\x6f\x66\x66";

[ "\x6f\x66\x66", "\x6f\x6e\x65", "\x61\x6c\x6c" ].includes(_0x84b660_50) || (_0x84b660_50 = "\x6f\x66\x66");

let _0x84b660_51 = !1, _0x84b660_52 = !1;

const _0x84b660_53 = "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x73\x73\x65\x74\x73\x2f\x69\x63\x6f\x6e\x73\x2f\x73\x68\x6f\x72\x74\x63\x75\x74\x2d\x6e\x79\x78\x69\x66\x79\x2e\x73\x76\x67\x3f\x76\x3d\x33";

function _0x84b660_54(_0x84b660_0, _0x84b660_1, _0x84b660_2 = "") {
  if (!_0x84b660_0) return;
  const _0x84b660_3 = Boolean(String(_0x84b660_1 || "").trim());
  _0x84b660_3 ? (delete _0x84b660_0.dataset.coverFallback, _0x84b660_0.classList.remove("\x63\x6f\x76\x65\x72\x2d\x66\x61\x6c\x6c\x62\x61\x63\x6b")) : (_0x84b660_0.dataset.coverFallback = "\x31", 
  _0x84b660_0.classList.add("\x63\x6f\x76\x65\x72\x2d\x66\x61\x6c\x6c\x62\x61\x63\x6b")), _0x84b660_0.alt = _0x84b660_2, _0x84b660_0.src = _0x84b660_3 ? _0x84b660_1 : _0x84b660_53;
}

function _0x84b660_55(_0x84b660_0) {
  _0x84b660_0 = Math.max(0, Math.floor(_0x84b660_0 || 0));
  const _0x84b660_1 = Math.floor(_0x84b660_0 / 3600), _0x84b660_2 = Math.floor(_0x84b660_0 % 3600 / 60), _0x84b660_3 = _0x84b660_0 % 60;
  return _0x84b660_1 ? `${_0x84b660_1}\x3a${String(_0x84b660_2).padStart(2, "\x30")}\x3a${String(_0x84b660_3).padStart(2, "\x30")}` : `${_0x84b660_2}\x3a${String(_0x84b660_3).padStart(2, "\x30")}`;
}

function _0x84b660_56(_0x84b660_0) {
  const _0x84b660_1 = document.createElement("\x64\x69\x76");
  return _0x84b660_1.textContent = _0x84b660_0 ?? "", _0x84b660_1.innerHTML;
}

async function _0x84b660_57(_0x84b660_0, _0x84b660_1 = {}) {
  const _0x84b660_2 = new AbortController, _0x84b660_3 = _0x84b660_1.signal ? null : setTimeout(() => _0x84b660_2.abort(), 25e3);
  try {
    const _0x84b660_3 = await fetch(_0x84b660_0, {
      cache: "\x6e\x6f\x2d\x73\x74\x6f\x72\x65",
      ..._0x84b660_1,
      signal: _0x84b660_1.signal || _0x84b660_2.signal
    }), _0x84b660_5 = String(_0x84b660_3.headers.get("\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65") || "").toLowerCase(), _0x84b660_6 = await _0x84b660_3.text();
    let _0x84b660_7 = null;
    if (_0x84b660_6 && (_0x84b660_5.includes("\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e") || /^[\s\r\n]*[\[{]/.test(_0x84b660_6))) try {
      _0x84b660_7 = JSON.parse(_0x84b660_6);
    } catch (_0x84b660_4) {}
    if (!_0x84b660_3.ok) throw Object.assign(new Error(_0x84b660_7?.error || `\x4e\x79\x78\x69\x66\x79\x20\x69\x73\x20\x74\x65\x6d\x70\x6f\x72\x61\x72\x69\x6c\x79\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x20\x28${_0x84b660_3.status}\x29\x2e`), {
      status: _0x84b660_3.status,
      retryAfter: Math.min(5, Math.max(1, Number(_0x84b660_3.headers.get("\x72\x65\x74\x72\x79\x2d\x61\x66\x74\x65\x72")) || 1))
    });
    if (!_0x84b660_7 || "\x6f\x62\x6a\x65\x63\x74" != typeof _0x84b660_7) throw new Error("\x4e\x79\x78\x69\x66\x79\x20\x72\x65\x63\x65\x69\x76\x65\x64\x20\x61\x20\x77\x65\x62\x20\x70\x61\x67\x65\x20\x69\x6e\x73\x74\x65\x61\x64\x20\x6f\x66\x20\x6d\x75\x73\x69\x63\x20\x64\x61\x74\x61\x2e\x20\x52\x65\x6c\x6f\x61\x64\x20\x4e\x79\x78\x20\x61\x6e\x64\x20\x74\x72\x79\x20\x61\x67\x61\x69\x6e\x2e");
    return _0x84b660_7;
  } finally {
    clearTimeout(_0x84b660_3);
  }
}

function _0x84b660_58(_0x84b660_0) {
  return JSON.stringify([ String(_0x84b660_0?.catalog || "").toLowerCase(), String(_0x84b660_0?.id || ""), String(_0x84b660_0?.title || "").trim().toLowerCase(), String(_0x84b660_0?.artist || "").trim().toLowerCase(), Math.max(0, Number(_0x84b660_0?.duration) || 0) ]);
}

function _0x84b660_59(_0x84b660_0) {
  return "\x6d\x65\x74\x69\x6e\x67" === _0x84b660_0?.mode && /^\/api\/nyxify\/audio\/\d{1,16}$/.test(String(_0x84b660_0.streamUrl || ""));
}

function _0x84b660_5a() {
  try {
    const _0x84b660_0 = Date.now(), _0x84b660_1 = [ ..._0x84b660_49.entries() ].filter(([, _0x84b660_1]) => _0x84b660_1?.expiresAt > _0x84b660_0 && _0x84b660_59(_0x84b660_1.match)).slice(-24).map(([_0x84b660_0, _0x84b660_1]) => ({
      key: _0x84b660_0,
      expiresAt: _0x84b660_1.expiresAt,
      match: _0x84b660_1.match
    }));
    sessionStorage.setItem(_0x84b660_4b, JSON.stringify(_0x84b660_1));
  } catch (_0x84b660_0) {}
}

function _0x84b660_5b() {
  try {
    const _0x84b660_0 = Date.now(), _0x84b660_1 = JSON.parse(sessionStorage.getItem(_0x84b660_4b) || "\x5b\x5d");
    if (!Array.isArray(_0x84b660_1)) return;
    _0x84b660_1.slice(-24).forEach(_0x84b660_1 => {
      "\x73\x74\x72\x69\x6e\x67" == typeof _0x84b660_1?.key && _0x84b660_1.expiresAt > _0x84b660_0 && _0x84b660_59(_0x84b660_1.match) && _0x84b660_49.set(_0x84b660_1.key, {
        expiresAt: _0x84b660_1.expiresAt,
        match: _0x84b660_1.match
      });
    });
  } catch (_0x84b660_0) {}
}

function _0x84b660_5c(_0x84b660_0, _0x84b660_1) {
  if (!_0x84b660_59(_0x84b660_1)) return _0x84b660_1;
  const _0x84b660_2 = _0x84b660_58(_0x84b660_0);
  for (_0x84b660_49.delete(_0x84b660_2), _0x84b660_49.set(_0x84b660_2, {
    expiresAt: Date.now() + _0x84b660_4c,
    match: _0x84b660_1
  }); _0x84b660_49.size > _0x84b660_4d; ) _0x84b660_49.delete(_0x84b660_49.keys().next().value);
  return _0x84b660_5a(), _0x84b660_1;
}

function _0x84b660_5d(_0x84b660_0) {
  _0x84b660_0 && (_0x84b660_49.delete(_0x84b660_58(_0x84b660_0)), _0x84b660_5a());
}

function _0x84b660_5e(_0x84b660_0) {
  const _0x84b660_1 = new URLSearchParams({
    title: String(_0x84b660_0?.title || ""),
    artist: String(_0x84b660_0?.artist || ""),
    duration: String(Math.max(0, Number(_0x84b660_0?.duration) || 0)),
    catalog: String(_0x84b660_0?.catalog || "")
  });
  return `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6e\x79\x78\x69\x66\x79\x2f\x70\x6c\x61\x79\x62\x61\x63\x6b\x2f${encodeURIComponent(_0x84b660_0?.id || "")}\x3f${_0x84b660_1.toString()}`;
}

function _0x84b660_5f(_0x84b660_0, _0x84b660_1 = !1) {
  const _0x84b660_2 = _0x84b660_58(_0x84b660_0), _0x84b660_3 = _0x84b660_49.get(_0x84b660_2);
  if (_0x84b660_3?.expiresAt > Date.now() && _0x84b660_59(_0x84b660_3.match)) return _0x84b660_49.delete(_0x84b660_2), 
  _0x84b660_49.set(_0x84b660_2, _0x84b660_3), Promise.resolve(_0x84b660_3.match);
  _0x84b660_3 && _0x84b660_49.delete(_0x84b660_2), _0x84b660_4a.get(_0x84b660_2)?.controller.signal.aborted && _0x84b660_4a.delete(_0x84b660_2);
  const _0x84b660_4 = _0x84b660_4a.get(_0x84b660_2);
  if (_0x84b660_4) return !_0x84b660_1 && _0x84b660_4.background ? _0x84b660_4.promise.catch(_0x84b660_1 => {
    if (_0x84b660_27 && _0x84b660_58(_0x84b660_27) !== _0x84b660_2) throw _0x84b660_1;
    return _0x84b660_5f(_0x84b660_0);
  }) : _0x84b660_4.promise;
  if (_0x84b660_1 && ([ ..._0x84b660_4a.values() ].some(_0x84b660_0 => _0x84b660_0.background) || !navigator.onLine || navigator.connection?.saveData)) return Promise.resolve(null);
  const _0x84b660_5 = new AbortController, _0x84b660_6 = (async () => {
    for (let _0x84b660_3 = 0; _0x84b660_3 < (_0x84b660_1 ? 1 : 2); _0x84b660_3++) {
      const _0x84b660_4 = setTimeout(() => _0x84b660_5.abort(), _0x84b660_1 ? 8e3 : 25e3);
      try {
        return await _0x84b660_57(_0x84b660_5e(_0x84b660_0) + (_0x84b660_1 ? "\x26\x70\x72\x65\x66\x65\x74\x63\x68\x3d\x31" : ""), {
          signal: _0x84b660_5.signal
        });
      } catch (_0x84b660_2) {
        if (_0x84b660_5.signal.aborted) throw new Error("\x4d\x75\x73\x69\x63\x20\x6c\x6f\x6f\x6b\x75\x70\x20\x74\x6f\x6f\x6b\x20\x74\x6f\x6f\x20\x6c\x6f\x6e\x67\x20\x6f\x72\x20\x77\x61\x73\x20\x63\x61\x6e\x63\x65\x6c\x6c\x65\x64\x2e\x20\x53\x65\x6c\x65\x63\x74\x20\x74\x68\x65\x20\x73\x6f\x6e\x67\x20\x74\x6f\x20\x74\x72\x79\x20\x61\x67\x61\x69\x6e\x2e");
        if (_0x84b660_1 || _0x84b660_3 || !navigator.onLine || ![ 429, 502, 503, 504 ].includes(_0x84b660_2.status) && "\x54\x79\x70\x65\x45\x72\x72\x6f\x72" !== _0x84b660_2.name) throw _0x84b660_2;
        if (await new Promise(_0x84b660_0 => setTimeout(_0x84b660_0, 1e3 * (_0x84b660_2.retryAfter || 1))), 
        _0x84b660_5.signal.aborted) throw _0x84b660_2;
      } finally {
        clearTimeout(_0x84b660_4);
      }
    }
  })().then(_0x84b660_1 => _0x84b660_5c(_0x84b660_0, _0x84b660_1)).finally(() => {
    _0x84b660_4a.get(_0x84b660_2)?.controller === _0x84b660_5 && _0x84b660_4a.delete(_0x84b660_2);
  });
  return _0x84b660_4a.set(_0x84b660_2, {
    promise: _0x84b660_6,
    controller: _0x84b660_5,
    background: _0x84b660_1
  }), _0x84b660_6;
}

function _0x84b660_60() {
  const _0x84b660_0 = ++_0x84b660_4e, _0x84b660_1 = _0x84b660_3d[_0x84b660_3e + 1] || ("\x61\x6c\x6c" === _0x84b660_50 ? _0x84b660_3d[0] : null);
  if (!_0x84b660_1 || _0x84b660_1.id === _0x84b660_27?.id) return;
  const _0x84b660_2 = () => {
    _0x84b660_0 === _0x84b660_4e && _0x84b660_5f(_0x84b660_1, !0).catch(() => {});
  };
  "\x72\x65\x71\x75\x65\x73\x74\x49\x64\x6c\x65\x43\x61\x6c\x6c\x62\x61\x63\x6b" in window ? requestIdleCallback(_0x84b660_2, {
    timeout: 1e3
  }) : setTimeout(_0x84b660_2, 150);
}

document.addEventListener("\x65\x72\x72\x6f\x72", _0x84b660_0 => {
  const _0x84b660_1 = _0x84b660_0.target;
  _0x84b660_1 instanceof HTMLImageElement && "\x31" !== _0x84b660_1.dataset.coverFallback && (_0x84b660_1.dataset.coverFallback = "\x31", 
  _0x84b660_1.classList.add("\x63\x6f\x76\x65\x72\x2d\x66\x61\x6c\x6c\x62\x61\x63\x6b"), _0x84b660_1.src = _0x84b660_53);
}, !0);

let _0x84b660_61 = 0;

function _0x84b660_62(_0x84b660_0, _0x84b660_1) {
  let _0x84b660_2;
  const _0x84b660_3 = () => clearTimeout(_0x84b660_2), _0x84b660_4 = () => {
    _0x84b660_3(), _0x84b660_2 = setTimeout(() => {
      !_0x84b660_0.isConnected || document.hidden || Date.now() < _0x84b660_61 || (_0x84b660_61 = Date.now() + 1e4, 
      _0x84b660_5f(_0x84b660_1, !0).catch(() => {}));
    }, 300);
  };
  _0x84b660_0.addEventListener("\x70\x6f\x69\x6e\x74\x65\x72\x65\x6e\x74\x65\x72", _0x84b660_0 => {
    "\x6d\x6f\x75\x73\x65" === _0x84b660_0.pointerType && _0x84b660_4();
  }), _0x84b660_0.addEventListener("\x70\x6f\x69\x6e\x74\x65\x72\x6c\x65\x61\x76\x65", _0x84b660_3), _0x84b660_0.addEventListener("\x66\x6f\x63\x75\x73", _0x84b660_4), 
  _0x84b660_0.addEventListener("\x62\x6c\x75\x72", _0x84b660_3);
}

function _0x84b660_63(_0x84b660_0) {
  return {
    id: String(_0x84b660_0?.id || ""),
    title: String(_0x84b660_0?.title || "").slice(0, 180),
    artist: String(_0x84b660_0?.artist || "").slice(0, 120),
    artistId: String(_0x84b660_0?.artistId || ""),
    album: String(_0x84b660_0?.album || "").slice(0, 160),
    albumId: String(_0x84b660_0?.albumId || ""),
    cover: String(_0x84b660_0?.cover || "").slice(0, 500),
    catalog: [ "\x64\x65\x65\x7a\x65\x72", "\x74\x69\x64\x61\x6c", "\x6e\x65\x74\x65\x61\x73\x65" ].includes(String(_0x84b660_0?.catalog || "").toLowerCase()) ? String(_0x84b660_0.catalog).toLowerCase() : "",
    duration: Math.max(0, Math.min(14400, Math.round(Number(_0x84b660_0?.duration) || 0)))
  };
}

function _0x84b660_64(_0x84b660_0) {
  const _0x84b660_1 = String(_0x84b660_0 || "").replace(/\s/g, "");
  return /^data:image\/(?:jpeg|png|webp);base64,[a-z0-9+/=]+$/i.test(_0x84b660_1) && _0x84b660_1.length <= _0x84b660_3a ? _0x84b660_1 : "";
}

function _0x84b660_65(_0x84b660_0) {
  const _0x84b660_1 = String(_0x84b660_0 || "").trim();
  return _0x84b660_ee(_0x84b660_1) ? _0x84b660_1.toLowerCase() : "";
}

function _0x84b660_66() {
  try {
    const _0x84b660_0 = JSON.parse(_0x84b660_1.getItem("\x6e\x79\x78\x5f\x6e\x79\x78\x69\x66\x79\x5f\x70\x6c\x61\x79\x6c\x69\x73\x74\x73") || "\x5b\x5d");
    return Array.isArray(_0x84b660_0) ? _0x84b660_0.slice(0, 16).map(_0x84b660_0 => ({
      id: /^[A-Za-z0-9_-]{8,64}$/.test(String(_0x84b660_0?.id || "")) ? String(_0x84b660_0.id) : `\x70\x6c\x61\x79\x6c\x69\x73\x74\x5f${crypto.randomUUID().replace(/-/g, "")}`,
      name: String(_0x84b660_0?.name || "\x50\x6c\x61\x79\x6c\x69\x73\x74").trim().slice(0, 48) || "\x50\x6c\x61\x79\x6c\x69\x73\x74",
      cover: _0x84b660_64(_0x84b660_0?.cover),
      accent: _0x84b660_65(_0x84b660_0?.accent),
      tracks: (Array.isArray(_0x84b660_0?.tracks) ? _0x84b660_0.tracks : []).slice(0, 150).map(_0x84b660_63).filter(_0x84b660_0 => _0x84b660_0.id && _0x84b660_0.title)
    })) : [];
  } catch (_0x84b660_0) {
    return [];
  }
}

function _0x84b660_67() {
  _0x84b660_1.setItem("\x6e\x79\x78\x5f\x6e\x79\x78\x69\x66\x79\x5f\x70\x6c\x61\x79\x6c\x69\x73\x74\x73", JSON.stringify(_0x84b660_34));
}

async function _0x84b660_68() {
  if (window.parent === window) return null;
  const _0x84b660_0 = `\x6e\x79\x78\x69\x66\x79\x2d${Date.now()}\x2d${Math.random().toString(36).slice(2)}`;
  return new Promise(_0x84b660_1 => {
    let _0x84b660_2 = !1;
    const _0x84b660_3 = _0x84b660_0 => {
      _0x84b660_2 || (_0x84b660_2 = !0, clearTimeout(_0x84b660_5), window.removeEventListener("\x6d\x65\x73\x73\x61\x67\x65", _0x84b660_4), 
      _0x84b660_1(_0x84b660_0));
    }, _0x84b660_4 = _0x84b660_1 => {
      _0x84b660_1.source === window.parent && _0x84b660_1.origin === location.origin && "\x6e\x79\x78\x3a\x61\x63\x63\x6f\x75\x6e\x74\x2d\x74\x6f\x6b\x65\x6e\x2d\x72\x65\x73\x70\x6f\x6e\x73\x65" === _0x84b660_1.data?.type && _0x84b660_1.data?.requestId === _0x84b660_0 && _0x84b660_3({
        available: !0,
        token: String(_0x84b660_1.data.token || "")
      });
    }, _0x84b660_5 = setTimeout(() => _0x84b660_3(null), 2500);
    window.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", _0x84b660_4), window.parent.postMessage({
      type: "\x6e\x79\x78\x3a\x61\x63\x63\x6f\x75\x6e\x74\x2d\x74\x6f\x6b\x65\x6e\x2d\x72\x65\x71\x75\x65\x73\x74",
      requestId: _0x84b660_0
    }, location.origin);
  });
}

async function _0x84b660_69() {
  if (_0x84b660_37) return _0x84b660_37;
  _0x84b660_37 = (async () => {
    const _0x84b660_0 = await _0x84b660_57("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x66\x6f\x75\x6e\x64\x65\x72\x2d\x70\x72\x6f\x66\x69\x6c\x65\x2f\x61\x75\x74\x68\x2d\x63\x6f\x6e\x66\x69\x67");
    if (!_0x84b660_0?.enabled) return null;
    const [{initializeApp: _0x84b660_1, getApps: _0x84b660_2}, {getAuth: _0x84b660_3, setPersistence: _0x84b660_4, browserLocalPersistence: _0x84b660_5}] = await Promise.all([ import("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x67\x73\x74\x61\x74\x69\x63\x2e\x63\x6f\x6d\x2f\x66\x69\x72\x65\x62\x61\x73\x65\x6a\x73\x2f\x31\x31\x2e\x31\x30\x2e\x30\x2f\x66\x69\x72\x65\x62\x61\x73\x65\x2d\x61\x70\x70\x2e\x6a\x73"), import("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x67\x73\x74\x61\x74\x69\x63\x2e\x63\x6f\x6d\x2f\x66\x69\x72\x65\x62\x61\x73\x65\x6a\x73\x2f\x31\x31\x2e\x31\x30\x2e\x30\x2f\x66\x69\x72\x65\x62\x61\x73\x65\x2d\x61\x75\x74\x68\x2e\x6a\x73") ]), _0x84b660_6 = _0x84b660_3(_0x84b660_2().find(_0x84b660_0 => "\x6e\x79\x78\x2d\x66\x6f\x75\x6e\x64\x65\x72\x2d\x6f\x77\x6e\x65\x72" === _0x84b660_0.name) || _0x84b660_1({
      apiKey: _0x84b660_0.apiKey,
      authDomain: `${_0x84b660_0.projectId}\x2e\x66\x69\x72\x65\x62\x61\x73\x65\x61\x70\x70\x2e\x63\x6f\x6d`,
      projectId: _0x84b660_0.projectId
    }, "\x6e\x79\x78\x2d\x66\x6f\x75\x6e\x64\x65\x72\x2d\x6f\x77\x6e\x65\x72"));
    try {
      await _0x84b660_4(_0x84b660_6, _0x84b660_5);
    } catch (_0x84b660_7) {}
    return "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _0x84b660_6.authStateReady && await _0x84b660_6.authStateReady(), 
    _0x84b660_6;
  })();
  try {
    return await _0x84b660_37;
  } catch (_0x84b660_0) {
    throw _0x84b660_37 = null, _0x84b660_0;
  }
}

async function _0x84b660_6a(_0x84b660_0 = !1) {
  if (!_0x84b660_0 && _0x84b660_35 && _0x84b660_36 > Date.now() + 3e4) return _0x84b660_35;
  const _0x84b660_1 = await _0x84b660_68();
  if (_0x84b660_1?.available) return _0x84b660_35 = _0x84b660_1.token, _0x84b660_36 = _0x84b660_35 ? Date.now() + 27e5 : 0, 
  _0x84b660_35;
  const _0x84b660_2 = await _0x84b660_69();
  return _0x84b660_35 = _0x84b660_2?.currentUser ? await _0x84b660_2.currentUser.getIdToken(_0x84b660_0) : "", 
  _0x84b660_36 = _0x84b660_35 ? Date.now() + 27e5 : 0, _0x84b660_35;
}

async function _0x84b660_6b(_0x84b660_0, _0x84b660_1 = {}, _0x84b660_2 = !0) {
  const _0x84b660_3 = await _0x84b660_6a(!_0x84b660_2);
  if (!_0x84b660_3) return null;
  const _0x84b660_4 = new Headers(_0x84b660_1.headers || {});
  _0x84b660_4.set("\x41\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e", `\x42\x65\x61\x72\x65\x72\x20${_0x84b660_3}`);
  const _0x84b660_5 = await fetch(_0x84b660_0, {
    ..._0x84b660_1,
    headers: _0x84b660_4,
    cache: "\x6e\x6f\x2d\x73\x74\x6f\x72\x65"
  });
  if (401 === _0x84b660_5.status && _0x84b660_2) return _0x84b660_6b(_0x84b660_0, _0x84b660_1, !1);
  const _0x84b660_6 = await _0x84b660_5.json().catch(() => ({}));
  if (!_0x84b660_5.ok) throw new Error(_0x84b660_6.error || `\x50\x6c\x61\x79\x6c\x69\x73\x74\x20\x72\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64\x20\x28${_0x84b660_5.status}\x29\x2e`);
  return _0x84b660_6;
}

function _0x84b660_6c() {
  return `\x70\x6c\x61\x79\x6c\x69\x73\x74\x5f${crypto.randomUUID().replace(/-/g, "")}`;
}

function _0x84b660_6d() {
  try {
    const _0x84b660_0 = JSON.parse(_0x84b660_1.getItem("\x6e\x79\x78\x5f\x6e\x79\x78\x69\x66\x79\x5f\x6c\x69\x6b\x65\x73"));
    return Array.isArray(_0x84b660_0) ? _0x84b660_0.filter(_0x84b660_0 => _0x84b660_0 && "\x73\x74\x72\x69\x6e\x67" == typeof _0x84b660_0.id) : [];
  } catch (_0x84b660_0) {
    return [];
  }
}

function _0x84b660_6e(_0x84b660_0) {
  return _0x84b660_6d().some(_0x84b660_1 => _0x84b660_1.id === _0x84b660_0);
}

function _0x84b660_6f(_0x84b660_0) {
  let _0x84b660_2 = _0x84b660_6d();
  return _0x84b660_2.some(_0x84b660_1 => _0x84b660_1.id === _0x84b660_0.id) ? _0x84b660_2 = _0x84b660_2.filter(_0x84b660_1 => _0x84b660_1.id !== _0x84b660_0.id) : _0x84b660_2.push(_0x84b660_0), 
  _0x84b660_1.setItem("\x6e\x79\x78\x5f\x6e\x79\x78\x69\x66\x79\x5f\x6c\x69\x6b\x65\x73", JSON.stringify(_0x84b660_2)), _0x84b660_6e(_0x84b660_0.id);
}

function _0x84b660_70() {
  try {
    const _0x84b660_0 = JSON.parse(_0x84b660_1.getItem("\x6e\x79\x78\x5f\x6e\x79\x78\x69\x66\x79\x5f\x68\x69\x73\x74\x6f\x72\x79"));
    return Array.isArray(_0x84b660_0) ? _0x84b660_0.filter(_0x84b660_0 => _0x84b660_0 && "\x73\x74\x72\x69\x6e\x67" == typeof _0x84b660_0.id) : [];
  } catch (_0x84b660_0) {
    return [];
  }
}

function _0x84b660_71(_0x84b660_0) {
  let _0x84b660_2 = _0x84b660_70().filter(_0x84b660_1 => _0x84b660_1.id !== _0x84b660_0.id);
  _0x84b660_2.unshift({
    ..._0x84b660_0
  }), _0x84b660_1.setItem("\x6e\x79\x78\x5f\x6e\x79\x78\x69\x66\x79\x5f\x68\x69\x73\x74\x6f\x72\x79", JSON.stringify(_0x84b660_2.slice(0, 25)));
}

function _0x84b660_72(_0x84b660_0, _0x84b660_1, _0x84b660_2) {
  _0x84b660_0.setAttribute("\x72\x6f\x6c\x65", "\x62\x75\x74\x74\x6f\x6e"), _0x84b660_0.tabIndex = 0, _0x84b660_1 && _0x84b660_0.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", _0x84b660_1), 
  _0x84b660_0.addEventListener("\x6b\x65\x79\x64\x6f\x77\x6e", _0x84b660_1 => {
    _0x84b660_1.target === _0x84b660_0 && ("\x45\x6e\x74\x65\x72" !== _0x84b660_1.key && "\x20" !== _0x84b660_1.key || (_0x84b660_1.preventDefault(), 
    _0x84b660_1.stopPropagation(), _0x84b660_2(_0x84b660_1)));
  });
}

function _0x84b660_73(_0x84b660_0, _0x84b660_1) {
  _0x84b660_0.classList.toggle("\x6c\x69\x6b\x65\x64", _0x84b660_1), _0x84b660_0.setAttribute("\x61\x72\x69\x61\x2d\x70\x72\x65\x73\x73\x65\x64", String(_0x84b660_1)), 
  _0x84b660_0.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", _0x84b660_1 ? "\x75\x6e\x6c\x69\x6b\x65" : "\x6c\x69\x6b\x65"), _0x84b660_0.firstElementChild.className = _0x84b660_1 ? "\x6d\x69\x6e\x67\x63\x75\x74\x65\x2d\x2d\x68\x65\x61\x72\x74\x2d\x66\x69\x6c\x6c" : "\x69\x63\x2d\x68\x65\x61\x72\x74";
}

function _0x84b660_74(_0x84b660_0) {
  _0x84b660_0.classList.remove("\x70\x6f\x70"), _0x84b660_0.offsetWidth, _0x84b660_0.classList.add("\x70\x6f\x70");
}

function _0x84b660_75(_0x84b660_0, _0x84b660_1) {
  _0x84b660_0.addEventListener("\x63\x6c\x69\x63\x6b", _0x84b660_2 => {
    _0x84b660_2.stopPropagation();
    const _0x84b660_3 = _0x84b660_6f(_0x84b660_1);
    _0x84b660_73(_0x84b660_0, _0x84b660_3), _0x84b660_74(_0x84b660_0), _0x84b660_a1();
  });
}

function _0x84b660_76(_0x84b660_0, _0x84b660_1 = _0xf24d16_18) {
  const _0x84b660_2 = new Map;
  for (const _0x84b660_3 of _0x84b660_1) {
    const _0x84b660_1 = "\x61\x72\x74\x69\x73\x74" === _0x84b660_0 ? _0x84b660_3.artist : _0x84b660_3.album, _0x84b660_4 = "\x61\x72\x74\x69\x73\x74" === _0x84b660_0 ? _0x84b660_3.artistId : _0x84b660_3.albumId;
    _0x84b660_1 && _0x84b660_4 && (_0x84b660_2.has(_0x84b660_1) || _0x84b660_2.set(_0x84b660_1, {
      key: _0x84b660_1,
      id: _0x84b660_4,
      count: 0,
      cover: _0x84b660_3.cover
    }), _0x84b660_2.get(_0x84b660_1).count++);
  }
  return [ ..._0x84b660_2.values() ];
}

function _0x84b660_77(_0x84b660_0) {
  document.querySelectorAll("\x5b\x64\x61\x74\x61\x2d\x69\x64\x5d").forEach(_0x84b660_1 => _0x84b660_1.classList.toggle("\x70\x6c\x61\x79\x69\x6e\x67", _0x84b660_1.dataset.id === _0x84b660_0)), 
  _0x84b660_d2();
}

function _0x84b660_78(_0x84b660_0) {
  _0x84b660_29 = _0x84b660_0, document.querySelectorAll("\x2e\x66\x69\x6c\x74\x65\x72").forEach(_0x84b660_1 => _0x84b660_1.classList.toggle("\x61\x63\x74\x69\x76\x65", _0x84b660_1.dataset.filter === _0x84b660_0));
}

function _0x84b660_79() {
  _0x84b660_7.style.display = "\x6e\x6f\x6e\x65", _0x84b660_4.style.display = "\x6e\x6f\x6e\x65", _0x84b660_5.style.display = "\x6e\x6f\x6e\x65", 
  _0x84b660_6.style.display = "\x6e\x6f\x6e\x65";
}

function _0x84b660_7a(_0x84b660_0, _0x84b660_1, _0x84b660_2) {
  _0x84b660_79(), _0x84b660_7.style.display = "", _0x84b660_8.textContent = _0x84b660_0, 
  _0x84b660_9.textContent = _0x84b660_1 || "", _0x84b660_7.classList.toggle("\x65\x72\x72\x6f\x72", !!_0x84b660_2), 
  _0x84b660_a.style.display = "\x6e\x6f\x6e\x65";
}

function _0x84b660_7b(_0x84b660_0) {
  _0x84b660_79(), _0x84b660_0 ? (_0x84b660_a.style.display = "", _0x84b660_b.textContent = _0x84b660_0) : _0x84b660_a.style.display = "\x6e\x6f\x6e\x65", 
  _0x84b660_4.innerHTML = "";
  for (let _0x84b660_1 = 0; _0x84b660_1 < 7; _0x84b660_1++) {
    const _0x84b660_0 = document.createElement("\x64\x69\x76");
    _0x84b660_0.className = "\x73\x6b\x65\x6c", _0x84b660_0.innerHTML = "\x0a\x20\x20\x20\x20\x20\x20\x3c\x73\x70\x61\x6e\x20\x63\x6c\x61\x73\x73\x3d\x22\x73\x6b\x20\x73\x6b\x2d\x61\x72\x74\x22\x3e\x3c\x2f\x73\x70\x61\x6e\x3e\x0a\x20\x20\x20\x20\x20\x20\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x73\x6b\x2d\x6c\x69\x6e\x65\x73\x22\x3e\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x3c\x73\x70\x61\x6e\x20\x63\x6c\x61\x73\x73\x3d\x22\x73\x6b\x20\x73\x6b\x2d\x6c\x20\x77\x2d\x37\x30\x22\x3e\x3c\x2f\x73\x70\x61\x6e\x3e\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x3c\x73\x70\x61\x6e\x20\x63\x6c\x61\x73\x73\x3d\x22\x73\x6b\x20\x73\x6b\x2d\x6c\x20\x77\x2d\x34\x35\x22\x3e\x3c\x2f\x73\x70\x61\x6e\x3e\x0a\x20\x20\x20\x20\x20\x20\x3c\x2f\x64\x69\x76\x3e", 
    _0x84b660_4.appendChild(_0x84b660_0);
  }
  _0x84b660_4.style.display = "";
}

function _0x84b660_7c(_0x84b660_0, _0x84b660_1, _0x84b660_2 = {}) {
  const _0x84b660_3 = document.createElement("\x64\x69\x76");
  _0x84b660_3.className = "\x72\x6f\x77" + (_0x84b660_27 && _0x84b660_27.id === _0x84b660_0.id ? "\x20\x70\x6c\x61\x79\x69\x6e\x67" : ""), 
  _0x84b660_3.dataset.id = _0x84b660_0.id;
  const _0x84b660_4 = _0x84b660_6e(_0x84b660_0.id), _0x84b660_5 = _0x84b660_32 ? _0x84b660_34.find(_0x84b660_0 => _0x84b660_0.id === _0x84b660_32) : null, _0x84b660_6 = !!_0x84b660_5?.tracks.some(_0x84b660_1 => _0x84b660_1.id === _0x84b660_0.id), _0x84b660_7 = _0x84b660_2.playlistId ? `\x3c\x73\x70\x61\x6e\x20\x63\x6c\x61\x73\x73\x3d\x22\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x74\x72\x61\x63\x6b\x2d\x61\x63\x74\x69\x6f\x6e\x73\x22\x3e\x3c\x62\x75\x74\x74\x6f\x6e\x20\x74\x79\x70\x65\x3d\x22\x62\x75\x74\x74\x6f\x6e\x22\x20\x63\x6c\x61\x73\x73\x3d\x22\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x74\x72\x61\x63\x6b\x2d\x61\x63\x74\x69\x6f\x6e\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x74\x72\x61\x63\x6b\x2d\x73\x65\x65\x64\x22\x20\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c\x3d\x22\x43\x72\x65\x61\x74\x65\x20\x61\x20\x6e\x65\x77\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x66\x72\x6f\x6d\x20${_0x84b660_56(_0x84b660_0.title)}\x22\x20\x74\x69\x74\x6c\x65\x3d\x22\x43\x72\x65\x61\x74\x65\x20\x61\x20\x6e\x65\x77\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x66\x72\x6f\x6d\x20\x74\x68\x69\x73\x20\x73\x6f\x6e\x67\x22\x3e\x3c\x73\x76\x67\x20\x76\x69\x65\x77\x42\x6f\x78\x3d\x22\x30\x20\x30\x20\x32\x34\x20\x32\x34\x22\x20\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e\x3d\x22\x74\x72\x75\x65\x22\x3e\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x6d\x31\x32\x20\x33\x20\x2e\x39\x20\x33\x2e\x31\x4c\x31\x36\x20\x37\x6c\x2d\x33\x2e\x31\x2e\x39\x4c\x31\x32\x20\x31\x31\x6c\x2d\x2e\x39\x2d\x33\x2e\x31\x4c\x38\x20\x37\x6c\x33\x2e\x31\x2d\x2e\x39\x4c\x31\x32\x20\x33\x5a\x6d\x36\x20\x38\x20\x2e\x37\x20\x32\x2e\x33\x4c\x32\x31\x20\x31\x34\x6c\x2d\x32\x2e\x33\x2e\x37\x4c\x31\x38\x20\x31\x37\x6c\x2d\x2e\x37\x2d\x32\x2e\x33\x4c\x31\x35\x20\x31\x34\x6c\x32\x2e\x33\x2d\x2e\x37\x4c\x31\x38\x20\x31\x31\x5a\x4d\x38\x20\x31\x31\x6c\x31\x2e\x34\x20\x34\x2e\x36\x4c\x31\x34\x20\x31\x37\x6c\x2d\x34\x2e\x36\x20\x31\x2e\x34\x4c\x38\x20\x32\x33\x6c\x2d\x31\x2e\x34\x2d\x34\x2e\x36\x4c\x32\x20\x31\x37\x6c\x34\x2e\x36\x2d\x31\x2e\x34\x4c\x38\x20\x31\x31\x5a\x22\x3e\x3c\x2f\x70\x61\x74\x68\x3e\x3c\x2f\x73\x76\x67\x3e\x3c\x2f\x62\x75\x74\x74\x6f\x6e\x3e\x3c\x62\x75\x74\x74\x6f\x6e\x20\x74\x79\x70\x65\x3d\x22\x62\x75\x74\x74\x6f\x6e\x22\x20\x63\x6c\x61\x73\x73\x3d\x22\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x74\x72\x61\x63\x6b\x2d\x61\x63\x74\x69\x6f\x6e\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x74\x72\x61\x63\x6b\x2d\x73\x68\x75\x66\x66\x6c\x65\x22\x20\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c\x3d\x22\x53\x68\x75\x66\x66\x6c\x65\x20${_0x84b660_56(_0x84b660_2.playlistName || "\x74\x68\x69\x73\x20\x70\x6c\x61\x79\x6c\x69\x73\x74")}\x22\x20\x74\x69\x74\x6c\x65\x3d\x22\x53\x68\x75\x66\x66\x6c\x65\x20\x74\x68\x69\x73\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x22\x3e\x3c\x73\x76\x67\x20\x76\x69\x65\x77\x42\x6f\x78\x3d\x22\x30\x20\x30\x20\x32\x34\x20\x32\x34\x22\x20\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e\x3d\x22\x74\x72\x75\x65\x22\x3e\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x4d\x34\x20\x37\x68\x32\x2e\x32\x63\x34\x2e\x38\x20\x30\x20\x36\x2e\x37\x20\x31\x30\x20\x31\x31\x2e\x36\x20\x31\x30\x48\x32\x30\x4d\x31\x37\x20\x31\x34\x6c\x33\x20\x33\x2d\x33\x20\x33\x4d\x34\x20\x31\x37\x68\x32\x2e\x32\x63\x31\x2e\x38\x20\x30\x20\x33\x2e\x32\x2d\x31\x2e\x34\x20\x34\x2e\x35\x2d\x33\x2e\x32\x4d\x31\x34\x2e\x32\x20\x39\x2e\x34\x63\x31\x2d\x31\x2e\x34\x20\x32\x2e\x31\x2d\x32\x2e\x34\x20\x33\x2e\x36\x2d\x32\x2e\x34\x48\x32\x30\x4d\x31\x37\x20\x34\x6c\x33\x20\x33\x2d\x33\x20\x33\x22\x3e\x3c\x2f\x70\x61\x74\x68\x3e\x3c\x2f\x73\x76\x67\x3e\x3c\x2f\x62\x75\x74\x74\x6f\x6e\x3e\x3c\x62\x75\x74\x74\x6f\x6e\x20\x74\x79\x70\x65\x3d\x22\x62\x75\x74\x74\x6f\x6e\x22\x20\x63\x6c\x61\x73\x73\x3d\x22\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x74\x72\x61\x63\x6b\x2d\x61\x63\x74\x69\x6f\x6e\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x74\x72\x61\x63\x6b\x2d\x72\x65\x6d\x6f\x76\x65\x22\x20\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c\x3d\x22\x52\x65\x6d\x6f\x76\x65\x20${_0x84b660_56(_0x84b660_0.title)}\x20\x66\x72\x6f\x6d\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x22\x3e\x26\x74\x69\x6d\x65\x73\x3b\x3c\x2f\x62\x75\x74\x74\x6f\x6e\x3e\x3c\x2f\x73\x70\x61\x6e\x3e` : _0x84b660_5 ? `\x3c\x62\x75\x74\x74\x6f\x6e\x20\x74\x79\x70\x65\x3d\x22\x62\x75\x74\x74\x6f\x6e\x22\x20\x63\x6c\x61\x73\x73\x3d\x22\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x74\x72\x61\x63\x6b\x2d\x61\x63\x74\x69\x6f\x6e\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x74\x72\x61\x63\x6b\x2d\x61\x64\x64${_0x84b660_6 ? "\x20\x61\x64\x64\x65\x64" : ""}\x22\x20\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c\x3d\x22${_0x84b660_6 ? "\x41\x6c\x72\x65\x61\x64\x79\x20\x69\x6e\x20\x70\x6c\x61\x79\x6c\x69\x73\x74" : `\x41\x64\x64\x20${_0x84b660_56(_0x84b660_0.title)}\x20\x74\x6f\x20\x70\x6c\x61\x79\x6c\x69\x73\x74`}\x22\x20${_0x84b660_6 ? "\x64\x69\x73\x61\x62\x6c\x65\x64" : ""}\x3e${_0x84b660_6 ? "\x3c\x73\x76\x67\x20\x76\x69\x65\x77\x42\x6f\x78\x3d\x22\x30\x20\x30\x20\x32\x34\x20\x32\x34\x22\x20\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e\x3d\x22\x74\x72\x75\x65\x22\x3e\x3c\x63\x69\x72\x63\x6c\x65\x20\x63\x78\x3d\x22\x31\x32\x22\x20\x63\x79\x3d\x22\x31\x32\x22\x20\x72\x3d\x22\x39\x22\x3e\x3c\x2f\x63\x69\x72\x63\x6c\x65\x3e\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x6d\x38\x2e\x35\x20\x31\x32\x2e\x35\x20\x32\x2e\x32\x20\x32\x2e\x32\x20\x34\x2e\x38\x2d\x35\x2e\x32\x22\x3e\x3c\x2f\x70\x61\x74\x68\x3e\x3c\x2f\x73\x76\x67\x3e" : "\x3c\x73\x76\x67\x20\x76\x69\x65\x77\x42\x6f\x78\x3d\x22\x30\x20\x30\x20\x32\x34\x20\x32\x34\x22\x20\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e\x3d\x22\x74\x72\x75\x65\x22\x3e\x3c\x63\x69\x72\x63\x6c\x65\x20\x63\x78\x3d\x22\x31\x32\x22\x20\x63\x79\x3d\x22\x31\x32\x22\x20\x72\x3d\x22\x39\x22\x3e\x3c\x2f\x63\x69\x72\x63\x6c\x65\x3e\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x4d\x31\x32\x20\x38\x76\x38\x4d\x38\x20\x31\x32\x68\x38\x22\x3e\x3c\x2f\x70\x61\x74\x68\x3e\x3c\x2f\x73\x76\x67\x3e"}\x3c\x2f\x62\x75\x74\x74\x6f\x6e\x3e` : "", _0x84b660_8 = `\x3c\x73\x70\x61\x6e\x20\x63\x6c\x61\x73\x73\x3d\x22\x61\x6c\x69\x6e\x6b\x22\x3e${_0x84b660_56(_0x84b660_0.artist)}\x3c\x2f\x73\x70\x61\x6e\x3e`, _0x84b660_9 = _0x84b660_0.album ? `${_0x84b660_8}\x20\xb7\x20${_0x84b660_56(_0x84b660_0.album)}` : _0x84b660_8;
  return _0x84b660_3.innerHTML = `\x0a\x20\x20\x20\x20\x3c\x69\x6d\x67\x20\x73\x72\x63\x3d\x22${_0x84b660_56(_0x84b660_0.cover)}\x22\x20\x61\x6c\x74\x3d\x22\x22\x20\x6c\x6f\x61\x64\x69\x6e\x67\x3d\x22\x6c\x61\x7a\x79\x22\x3e\x0a\x20\x20\x20\x20\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x74\x2d\x6d\x65\x74\x61\x22\x3e\x0a\x20\x20\x20\x20\x20\x20\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x74\x2d\x74\x6f\x70\x22\x3e\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x3c\x73\x70\x61\x6e\x20\x63\x6c\x61\x73\x73\x3d\x22\x65\x71\x22\x20\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e\x3d\x22\x74\x72\x75\x65\x22\x3e\x3c\x69\x3e\x3c\x2f\x69\x3e\x3c\x69\x3e\x3c\x2f\x69\x3e\x3c\x69\x3e\x3c\x2f\x69\x3e\x3c\x2f\x73\x70\x61\x6e\x3e\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x3c\x73\x70\x61\x6e\x20\x63\x6c\x61\x73\x73\x3d\x22\x74\x2d\x74\x69\x74\x6c\x65\x22\x3e${_0x84b660_56(_0x84b660_0.title)}\x3c\x2f\x73\x70\x61\x6e\x3e${_0x84b660_0.audioAvailable ? "\x3c\x73\x6d\x61\x6c\x6c\x20\x63\x6c\x61\x73\x73\x3d\x22\x61\x75\x64\x69\x6f\x2d\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x22\x3e\x41\x75\x64\x69\x6f\x20\x66\x6f\x75\x6e\x64\x3c\x2f\x73\x6d\x61\x6c\x6c\x3e" : ""}\x0a\x20\x20\x20\x20\x20\x20\x3c\x2f\x64\x69\x76\x3e\x0a\x20\x20\x20\x20\x20\x20\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x74\x2d\x73\x75\x62\x22\x3e${_0x84b660_9}\x3c\x2f\x64\x69\x76\x3e\x0a\x20\x20\x20\x20\x3c\x2f\x64\x69\x76\x3e\x0a\x20\x20\x20\x20\x3c\x73\x70\x61\x6e\x20\x63\x6c\x61\x73\x73\x3d\x22\x74\x2d\x64\x75\x72\x61\x74\x69\x6f\x6e\x22\x3e${_0x84b660_55(_0x84b660_0.duration)}\x3c\x2f\x73\x70\x61\x6e\x3e\x0a\x20\x20\x20\x20${_0x84b660_7}\x0a\x20\x20\x20\x20\x3c\x62\x75\x74\x74\x6f\x6e\x20\x74\x79\x70\x65\x3d\x22\x62\x75\x74\x74\x6f\x6e\x22\x20\x63\x6c\x61\x73\x73\x3d\x22\x6c\x69\x6b\x65\x2d\x62\x74\x6e${_0x84b660_4 ? "\x20\x6c\x69\x6b\x65\x64" : ""}\x22\x20\x61\x72\x69\x61\x2d\x70\x72\x65\x73\x73\x65\x64\x3d\x22${_0x84b660_4}\x22\x20\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c\x3d\x22${_0x84b660_4 ? "\x75\x6e\x6c\x69\x6b\x65" : "\x6c\x69\x6b\x65"}\x22\x3e\x0a\x20\x20\x20\x20\x20\x20\x3c\x69\x20\x63\x6c\x61\x73\x73\x3d\x22${_0x84b660_4 ? "\x6d\x69\x6e\x67\x63\x75\x74\x65\x2d\x2d\x68\x65\x61\x72\x74\x2d\x66\x69\x6c\x6c" : "\x69\x63\x2d\x68\x65\x61\x72\x74"}\x22\x3e\x3c\x2f\x69\x3e\x0a\x20\x20\x20\x20\x3c\x2f\x62\x75\x74\x74\x6f\x6e\x3e`, 
  _0x84b660_54(_0x84b660_3.querySelector("\x3a\x73\x63\x6f\x70\x65\x20\x3e\x20\x69\x6d\x67"), _0x84b660_0.cover), _0x84b660_62(_0x84b660_3, _0x84b660_0), 
  _0x84b660_72(_0x84b660_3, `\x70\x6c\x61\x79\x20${_0x84b660_0.title}\x20\x62\x79\x20${_0x84b660_0.artist}`, () => _0x84b660_c3(_0x84b660_0, _0x84b660_1)), 
  _0x84b660_3.addEventListener("\x63\x6c\x69\x63\x6b", _0x84b660_2 => {
    if (!_0x84b660_2.target.closest("\x2e\x6c\x69\x6b\x65\x2d\x62\x74\x6e\x2c\x20\x2e\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x74\x72\x61\x63\x6b\x2d\x61\x63\x74\x69\x6f\x6e")) return _0x84b660_2.target.closest("\x2e\x61\x6c\x69\x6e\x6b") && !_0x84b660_32 ? (_0x84b660_2.stopPropagation(), 
    void (_0x84b660_0.artistId && _0x84b660_85("\x61\x72\x74\x69\x73\x74", _0x84b660_0.artistId, _0x84b660_0.artist))) : void _0x84b660_c3(_0x84b660_0, _0x84b660_1);
  }), _0x84b660_3.querySelector("\x2e\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x74\x72\x61\x63\x6b\x2d\x61\x64\x64")?.addEventListener("\x63\x6c\x69\x63\x6b", _0x84b660_1 => {
    _0x84b660_1.stopPropagation(), _0x84b660_32 && _0x84b660_9b(_0x84b660_32, _0x84b660_0) && (_0x84b660_1.currentTarget.classList.add("\x61\x64\x64\x65\x64"), 
    _0x84b660_1.currentTarget.disabled = !0, _0x84b660_1.currentTarget.innerHTML = "\x3c\x73\x76\x67\x20\x76\x69\x65\x77\x42\x6f\x78\x3d\x22\x30\x20\x30\x20\x32\x34\x20\x32\x34\x22\x20\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e\x3d\x22\x74\x72\x75\x65\x22\x3e\x3c\x63\x69\x72\x63\x6c\x65\x20\x63\x78\x3d\x22\x31\x32\x22\x20\x63\x79\x3d\x22\x31\x32\x22\x20\x72\x3d\x22\x39\x22\x3e\x3c\x2f\x63\x69\x72\x63\x6c\x65\x3e\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x6d\x38\x2e\x35\x20\x31\x32\x2e\x35\x20\x32\x2e\x32\x20\x32\x2e\x32\x20\x34\x2e\x38\x2d\x35\x2e\x32\x22\x3e\x3c\x2f\x70\x61\x74\x68\x3e\x3c\x2f\x73\x76\x67\x3e", 
    _0x84b660_1.currentTarget.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", "\x41\x6c\x72\x65\x61\x64\x79\x20\x69\x6e\x20\x70\x6c\x61\x79\x6c\x69\x73\x74"));
  }), _0x84b660_3.querySelector("\x2e\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x74\x72\x61\x63\x6b\x2d\x72\x65\x6d\x6f\x76\x65")?.addEventListener("\x63\x6c\x69\x63\x6b", _0x84b660_1 => {
    _0x84b660_1.stopPropagation(), _0x84b660_9c(_0x84b660_2.playlistId, _0x84b660_0.id);
  }), _0x84b660_3.querySelector("\x2e\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x74\x72\x61\x63\x6b\x2d\x73\x65\x65\x64")?.addEventListener("\x63\x6c\x69\x63\x6b", _0x84b660_1 => {
    _0x84b660_1.stopPropagation(), _0x84b660_9f(_0x84b660_0, _0x84b660_1.currentTarget);
  }), _0x84b660_3.querySelector("\x2e\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x74\x72\x61\x63\x6b\x2d\x73\x68\x75\x66\x66\x6c\x65")?.addEventListener("\x63\x6c\x69\x63\x6b", _0x84b660_0 => {
    _0x84b660_0.stopPropagation(), _0x84b660_9e(_0x84b660_2.playlistId);
  }), _0x84b660_75(_0x84b660_3.querySelector("\x2e\x6c\x69\x6b\x65\x2d\x62\x74\x6e"), _0x84b660_0), _0x84b660_3;
}

function _0x84b660_7d(_0x84b660_0, _0x84b660_1) {
  const _0x84b660_2 = document.createElement("\x64\x69\x76");
  _0x84b660_2.className = "\x63\x61\x72\x64";
  const _0x84b660_3 = _0x84b660_0.artist ? _0x84b660_0.artist : Number(_0x84b660_0.count) > 0 ? `${_0x84b660_0.count}\x20${1 === _0x84b660_0.count ? "\x74\x72\x61\x63\x6b" : "\x74\x72\x61\x63\x6b\x73"}` : Number(_0x84b660_0.position) > 0 ? `\x23${_0x84b660_0.position}\x20\x74\x68\x69\x73\x20\x77\x65\x65\x6b` : "\x61\x72\x74\x69\x73\x74" === _0x84b660_1 ? "\x50\x6f\x70\x75\x6c\x61\x72\x20\x61\x72\x74\x69\x73\x74" : "\x50\x6f\x70\x75\x6c\x61\x72\x20\x61\x6c\x62\x75\x6d";
  return _0x84b660_2.innerHTML = `\x0a\x20\x20\x20\x20\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x63\x61\x72\x64\x2d\x61\x72\x74\x22\x3e\x0a\x20\x20\x20\x20\x20\x20\x3c\x69\x6d\x67\x20\x73\x72\x63\x3d\x22${_0x84b660_56(_0x84b660_0.cover)}\x22\x20\x61\x6c\x74\x3d\x22\x22\x20\x6c\x6f\x61\x64\x69\x6e\x67\x3d\x22\x6c\x61\x7a\x79\x22\x3e\x0a\x20\x20\x20\x20\x20\x20\x3c\x62\x75\x74\x74\x6f\x6e\x20\x74\x79\x70\x65\x3d\x22\x62\x75\x74\x74\x6f\x6e\x22\x20\x63\x6c\x61\x73\x73\x3d\x22\x63\x61\x72\x64\x2d\x70\x6c\x61\x79\x22\x20\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c\x3d\x22\x70\x6c\x61\x79\x20${_0x84b660_56(_0x84b660_0.key)}\x22\x3e\x3c\x69\x20\x63\x6c\x61\x73\x73\x3d\x22\x6c\x69\x6e\x65\x2d\x6d\x64\x2d\x2d\x70\x6c\x61\x79\x2d\x66\x69\x6c\x6c\x65\x64\x22\x3e\x3c\x2f\x69\x3e\x3c\x2f\x62\x75\x74\x74\x6f\x6e\x3e\x0a\x20\x20\x20\x20\x3c\x2f\x64\x69\x76\x3e\x0a\x20\x20\x20\x20\x3c\x73\x70\x61\x6e\x20\x63\x6c\x61\x73\x73\x3d\x22\x63\x2d\x6e\x61\x6d\x65\x22\x3e${_0x84b660_56(_0x84b660_0.key)}\x3c\x2f\x73\x70\x61\x6e\x3e\x0a\x20\x20\x20\x20\x3c\x73\x70\x61\x6e\x20\x63\x6c\x61\x73\x73\x3d\x22\x63\x2d\x63\x6f\x75\x6e\x74\x22\x3e${_0x84b660_56(_0x84b660_3)}\x3c\x2f\x73\x70\x61\x6e\x3e`, 
  _0x84b660_54(_0x84b660_2.querySelector("\x2e\x63\x61\x72\x64\x2d\x61\x72\x74\x20\x69\x6d\x67"), _0x84b660_0.cover), _0x84b660_72(_0x84b660_2, `\x6f\x70\x65\x6e\x20${_0x84b660_0.key}`, () => _0x84b660_85(_0x84b660_1, _0x84b660_0.id, _0x84b660_0.key)), 
  _0x84b660_2.addEventListener("\x63\x6c\x69\x63\x6b", _0x84b660_2 => {
    _0x84b660_2.target.closest("\x2e\x63\x61\x72\x64\x2d\x70\x6c\x61\x79") || _0x84b660_85(_0x84b660_1, _0x84b660_0.id, _0x84b660_0.key);
  }), _0x84b660_2.querySelector("\x2e\x63\x61\x72\x64\x2d\x70\x6c\x61\x79").addEventListener("\x63\x6c\x69\x63\x6b", _0x84b660_2 => {
    _0x84b660_2.stopPropagation(), _0x84b660_85(_0x84b660_1, _0x84b660_0.id, _0x84b660_0.key, !0);
  }), _0x84b660_2;
}

function _0x84b660_7e(_0x84b660_0, _0x84b660_1, _0x84b660_2 = {}) {
  _0x84b660_0.innerHTML = "", _0x84b660_0.style.display = _0x84b660_1.length ? "" : "\x6e\x6f\x6e\x65", 
  _0x84b660_1.forEach(_0x84b660_3 => _0x84b660_0.appendChild(_0x84b660_7c(_0x84b660_3, _0x84b660_1, _0x84b660_2)));
}

function _0x84b660_7f(_0x84b660_0) {
  _0x84b660_79(), _0x84b660_a.style.display = "\x6e\x6f\x6e\x65", _0x84b660_7e(_0x84b660_4, _0x84b660_0);
}

function _0x84b660_80(_0x84b660_0, _0x84b660_1 = _0x84b660_76(_0x84b660_0)) {
  _0x84b660_79(), _0x84b660_a.style.display = "\x6e\x6f\x6e\x65";
  const _0x84b660_2 = _0x84b660_1;
  _0x84b660_5.innerHTML = "", _0x84b660_5.style.display = _0x84b660_2.length ? "" : "\x6e\x6f\x6e\x65", 
  _0x84b660_2.forEach(_0x84b660_1 => _0x84b660_5.appendChild(_0x84b660_7d(_0x84b660_1, _0x84b660_0))), 
  _0x84b660_2.length || _0x84b660_7a(`\x4e\x6f\x20${_0x84b660_0}\x73\x20\x79\x65\x74`, "\x52\x65\x73\x75\x6c\x74\x73\x20\x77\x69\x6c\x6c\x20\x61\x70\x70\x65\x61\x72\x20\x68\x65\x72\x65\x20\x61\x66\x74\x65\x72\x20\x79\x6f\x75\x20\x73\x65\x61\x72\x63\x68\x2e");
}

function _0x84b660_81(_0x84b660_0, _0x84b660_1, _0x84b660_2, _0x84b660_3 = "") {
  const _0x84b660_4 = document.createElement("\x73\x65\x63\x74\x69\x6f\x6e");
  _0x84b660_4.className = `\x68\x6f\x6d\x65\x2d\x73\x65\x63\x74\x69\x6f\x6e\x20${_0x84b660_3}`.trim();
  const _0x84b660_5 = document.createElement("\x64\x69\x76");
  _0x84b660_5.className = "\x68\x6f\x6d\x65\x2d\x73\x65\x63\x74\x69\x6f\x6e\x2d\x68\x65\x61\x64";
  const _0x84b660_6 = document.createElement("\x64\x69\x76"), _0x84b660_7 = document.createElement("\x68\x32");
  _0x84b660_7.textContent = _0x84b660_0;
  const _0x84b660_8 = document.createElement("\x70");
  return _0x84b660_8.textContent = _0x84b660_1, _0x84b660_6.append(_0x84b660_7, _0x84b660_8), 
  _0x84b660_5.appendChild(_0x84b660_6), _0x84b660_4.append(_0x84b660_5, _0x84b660_2), 
  _0x84b660_4;
}

function _0x84b660_82() {
  _0x84b660_79(), _0x84b660_a.style.display = "\x6e\x6f\x6e\x65", _0x84b660_6.innerHTML = "";
  const _0x84b660_0 = document.createElement("\x64\x69\x76");
  _0x84b660_0.className = "\x68\x6f\x6d\x65\x2d\x74\x72\x61\x63\x6b\x2d\x6c\x69\x73\x74", _0x84b660_7e(_0x84b660_0, _0x84b660_2a.tracks.slice(0, 12)), 
  _0x84b660_6.appendChild(_0x84b660_81("\x50\x6f\x70\x75\x6c\x61\x72\x20\x74\x72\x61\x63\x6b\x73\x20\x74\x68\x69\x73\x20\x77\x65\x65\x6b", "\x57\x68\x61\x74\x20\x70\x65\x6f\x70\x6c\x65\x20\x61\x72\x65\x20\x70\x6c\x61\x79\x69\x6e\x67\x20\x72\x69\x67\x68\x74\x20\x6e\x6f\x77\x2e", _0x84b660_0, "\x68\x6f\x6d\x65\x2d\x74\x72\x61\x63\x6b\x73"));
  const _0x84b660_1 = document.createElement("\x64\x69\x76");
  _0x84b660_1.className = "\x63\x61\x72\x64\x73\x20\x68\x6f\x6d\x65\x2d\x63\x61\x72\x64\x73", _0x84b660_2a.artists.slice(0, 8).forEach(_0x84b660_0 => _0x84b660_1.appendChild(_0x84b660_7d(_0x84b660_0, "\x61\x72\x74\x69\x73\x74"))), 
  _0x84b660_6.appendChild(_0x84b660_81("\x50\x6f\x70\x75\x6c\x61\x72\x20\x61\x72\x74\x69\x73\x74\x73", "\x41\x72\x74\x69\x73\x74\x73\x20\x74\x72\x65\x6e\x64\x69\x6e\x67\x20\x61\x63\x72\x6f\x73\x73\x20\x74\x68\x65\x20\x63\x75\x72\x72\x65\x6e\x74\x20\x63\x68\x61\x72\x74\x2e", _0x84b660_1));
  const _0x84b660_2 = document.createElement("\x64\x69\x76");
  _0x84b660_2.className = "\x63\x61\x72\x64\x73\x20\x68\x6f\x6d\x65\x2d\x63\x61\x72\x64\x73", _0x84b660_2a.albums.slice(0, 8).forEach(_0x84b660_0 => _0x84b660_2.appendChild(_0x84b660_7d(_0x84b660_0, "\x61\x6c\x62\x75\x6d"))), 
  _0x84b660_6.appendChild(_0x84b660_81("\x50\x6f\x70\x75\x6c\x61\x72\x20\x61\x6c\x62\x75\x6d\x73", "\x41\x6c\x62\x75\x6d\x73\x20\x6c\x69\x73\x74\x65\x6e\x65\x72\x73\x20\x61\x72\x65\x20\x63\x6f\x6d\x69\x6e\x67\x20\x62\x61\x63\x6b\x20\x74\x6f\x20\x74\x68\x69\x73\x20\x77\x65\x65\x6b\x2e", _0x84b660_2)), 
  _0x84b660_6.style.display = "";
}

function _0x84b660_83() {
  _0x84b660_79(), _0x84b660_a.style.display = "\x6e\x6f\x6e\x65";
  const _0x84b660_0 = _0x84b660_76("\x61\x72\x74\x69\x73\x74"), _0x84b660_1 = _0x84b660_76("\x61\x6c\x62\x75\x6d");
  _0x84b660_6.innerHTML = "";
  const _0x84b660_2 = document.createElement("\x64\x69\x76");
  if (_0x84b660_7e(_0x84b660_2, _0xf24d16_18), _0x84b660_6.appendChild(_0x84b660_2), 
  _0x84b660_0.length) {
    const _0x84b660_1 = document.createElement("\x64\x69\x76");
    _0x84b660_1.className = "\x63\x61\x72\x64\x73", _0x84b660_0.forEach(_0x84b660_0 => _0x84b660_1.appendChild(_0x84b660_7d(_0x84b660_0, "\x61\x72\x74\x69\x73\x74"))), 
    _0x84b660_6.appendChild(_0x84b660_1);
  }
  if (_0x84b660_1.length > 1) {
    const _0x84b660_0 = document.createElement("\x64\x69\x76");
    _0x84b660_0.className = "\x63\x61\x72\x64\x73", _0x84b660_1.forEach(_0x84b660_1 => _0x84b660_0.appendChild(_0x84b660_7d(_0x84b660_1, "\x61\x6c\x62\x75\x6d"))), 
    _0x84b660_6.appendChild(_0x84b660_0);
  }
  _0x84b660_6.style.display = "";
}

function _0x84b660_84(_0x84b660_0, _0x84b660_1, _0x84b660_2, _0x84b660_3) {
  const _0x84b660_4 = document.createElement("\x64\x69\x76");
  return _0x84b660_4.className = "\x67\x72\x6f\x75\x70\x2d\x68\x65\x61\x64", _0x84b660_4.innerHTML = `\x0a\x20\x20\x20\x20\x3c\x69\x6d\x67\x20\x73\x72\x63\x3d\x22${_0x84b660_56(_0x84b660_0)}\x22\x20\x61\x6c\x74\x3d\x22\x22\x3e\x0a\x20\x20\x20\x20\x3c\x64\x69\x76\x3e\x0a\x20\x20\x20\x20\x20\x20\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x67\x2d\x6e\x61\x6d\x65\x22\x3e${_0x84b660_56(_0x84b660_1)}\x3c\x2f\x64\x69\x76\x3e\x0a\x20\x20\x20\x20\x20\x20\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x67\x2d\x73\x75\x62\x22\x3e${_0x84b660_56(_0x84b660_2)}\x3c\x2f\x64\x69\x76\x3e\x0a\x20\x20\x20\x20\x3c\x2f\x64\x69\x76\x3e\x0a\x20\x20\x20\x20\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x67\x2d\x61\x63\x74\x69\x6f\x6e\x73\x22\x3e\x0a\x20\x20\x20\x20\x20\x20\x3c\x62\x75\x74\x74\x6f\x6e\x20\x74\x79\x70\x65\x3d\x22\x62\x75\x74\x74\x6f\x6e\x22\x20\x63\x6c\x61\x73\x73\x3d\x22\x67\x2d\x70\x6c\x61\x79\x22\x20\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c\x3d\x22\x70\x6c\x61\x79\x20\x61\x6c\x6c\x22\x3e\x3c\x69\x20\x63\x6c\x61\x73\x73\x3d\x22\x6c\x69\x6e\x65\x2d\x6d\x64\x2d\x2d\x70\x6c\x61\x79\x2d\x66\x69\x6c\x6c\x65\x64\x22\x3e\x3c\x2f\x69\x3e\x50\x6c\x61\x79\x3c\x2f\x62\x75\x74\x74\x6f\x6e\x3e\x0a\x20\x20\x20\x20\x3c\x2f\x64\x69\x76\x3e`, 
  _0x84b660_4.querySelector("\x2e\x67\x2d\x70\x6c\x61\x79").addEventListener("\x63\x6c\x69\x63\x6b", () => {
    _0x84b660_3.length && _0x84b660_c3(_0x84b660_3[0], _0x84b660_3);
  }), _0x84b660_4;
}

async function _0x84b660_85(_0x84b660_0, _0x84b660_1, _0x84b660_2, _0x84b660_3) {
  const _0x84b660_4 = ++_0x84b660_2f;
  _0x84b660_2e = {
    type: _0x84b660_0,
    id: _0x84b660_1,
    name: _0x84b660_2,
    data: null
  }, _0x84b660_7b(_0x84b660_2);
  try {
    const _0x84b660_2 = await _0x84b660_57(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6e\x79\x78\x69\x66\x79\x2f${_0x84b660_0}\x2f${_0x84b660_1}`);
    if (_0x84b660_4 !== _0x84b660_2f) return;
    _0x84b660_2e.data = _0x84b660_2, _0x84b660_86(), _0x84b660_3 && _0x84b660_2.tracks.length && _0x84b660_c3(_0x84b660_2.tracks[0], _0x84b660_2.tracks);
  } catch (_0x84b660_5) {
    if (_0x84b660_4 !== _0x84b660_2f) return;
    _0x84b660_2e = null, _0x84b660_7a("\x43\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x6c\x6f\x61\x64\x20" + _0x84b660_0, _0x84b660_5.message, !0);
  }
}

function _0x84b660_86() {
  const _0x84b660_0 = _0x84b660_2e.data, _0x84b660_1 = "\x61\x72\x74\x69\x73\x74" === _0x84b660_2e.type && _0x84b660_0.total ? _0x84b660_0.total : _0x84b660_0.tracks.length;
  if (_0x84b660_79(), _0x84b660_a.style.display = "", _0x84b660_b.textContent = `${_0x84b660_2e.name}\x20\xb7\x20${_0x84b660_1}\x20\x74\x72\x61\x63\x6b\x73`, 
  _0x84b660_6.innerHTML = "", _0x84b660_6.appendChild(_0x84b660_84(_0x84b660_0.cover, _0x84b660_0.name, _0x84b660_0.artist ? `${_0x84b660_0.artist}\x20\xb7\x20${_0x84b660_1}\x20\x74\x72\x61\x63\x6b\x73` : `${_0x84b660_1}\x20\x74\x72\x61\x63\x6b\x73`, _0x84b660_0.tracks)), 
  "\x61\x72\x74\x69\x73\x74" === _0x84b660_2e.type && _0x84b660_0.albums.length) {
    const _0x84b660_1 = document.createElement("\x64\x69\x76");
    _0x84b660_1.className = "\x63\x61\x72\x64\x73", _0x84b660_0.albums.forEach(_0x84b660_0 => {
      const _0x84b660_2 = document.createElement("\x64\x69\x76");
      _0x84b660_2.className = "\x63\x61\x72\x64", _0x84b660_2.innerHTML = `\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x63\x61\x72\x64\x2d\x61\x72\x74\x22\x3e\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x3c\x69\x6d\x67\x20\x73\x72\x63\x3d\x22${_0x84b660_56(_0x84b660_0.cover)}\x22\x20\x61\x6c\x74\x3d\x22\x22\x20\x6c\x6f\x61\x64\x69\x6e\x67\x3d\x22\x6c\x61\x7a\x79\x22\x3e\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x3c\x62\x75\x74\x74\x6f\x6e\x20\x74\x79\x70\x65\x3d\x22\x62\x75\x74\x74\x6f\x6e\x22\x20\x63\x6c\x61\x73\x73\x3d\x22\x63\x61\x72\x64\x2d\x70\x6c\x61\x79\x22\x20\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c\x3d\x22\x70\x6c\x61\x79\x20${_0x84b660_56(_0x84b660_0.title)}\x22\x3e\x3c\x69\x20\x63\x6c\x61\x73\x73\x3d\x22\x6c\x69\x6e\x65\x2d\x6d\x64\x2d\x2d\x70\x6c\x61\x79\x2d\x66\x69\x6c\x6c\x65\x64\x22\x3e\x3c\x2f\x69\x3e\x3c\x2f\x62\x75\x74\x74\x6f\x6e\x3e\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x3c\x2f\x64\x69\x76\x3e\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x3c\x73\x70\x61\x6e\x20\x63\x6c\x61\x73\x73\x3d\x22\x63\x2d\x6e\x61\x6d\x65\x22\x3e${_0x84b660_56(_0x84b660_0.title)}\x3c\x2f\x73\x70\x61\x6e\x3e`, 
      _0x84b660_72(_0x84b660_2, `\x6f\x70\x65\x6e\x20${_0x84b660_0.title}`, () => _0x84b660_85("\x61\x6c\x62\x75\x6d", _0x84b660_0.id, _0x84b660_0.title)), 
      _0x84b660_2.addEventListener("\x63\x6c\x69\x63\x6b", _0x84b660_1 => {
        _0x84b660_1.target.closest("\x2e\x63\x61\x72\x64\x2d\x70\x6c\x61\x79") || _0x84b660_85("\x61\x6c\x62\x75\x6d", _0x84b660_0.id, _0x84b660_0.title);
      }), _0x84b660_2.querySelector("\x2e\x63\x61\x72\x64\x2d\x70\x6c\x61\x79").addEventListener("\x63\x6c\x69\x63\x6b", _0x84b660_1 => {
        _0x84b660_1.stopPropagation(), _0x84b660_85("\x61\x6c\x62\x75\x6d", _0x84b660_0.id, _0x84b660_0.title, !0);
      }), _0x84b660_1.appendChild(_0x84b660_2);
    }), _0x84b660_6.appendChild(_0x84b660_1);
  }
  const _0x84b660_2 = document.createElement("\x64\x69\x76");
  _0x84b660_7e(_0x84b660_2, _0x84b660_0.tracks), _0x84b660_6.appendChild(_0x84b660_2), 
  _0x84b660_6.style.display = "";
}

function _0x84b660_87() {
  return _0x84b660_92(), _0x84b660_31 ? _0x84b660_97() : _0x84b660_32 ? _0x84b660_99() : _0x84b660_2e ? _0x84b660_2e.data ? _0x84b660_86() : _0x84b660_7b(_0x84b660_2e.name) : _0x84b660_28 ? _0xf24d16_18.length ? "\x68\x6f\x6d\x65" === _0x84b660_29 ? _0x84b660_83() : "\x61\x72\x74\x69\x73\x74\x73" === _0x84b660_29 ? _0x84b660_80("\x61\x72\x74\x69\x73\x74") : "\x61\x6c\x62\x75\x6d\x73" === _0x84b660_29 ? _0x84b660_80("\x61\x6c\x62\x75\x6d") : _0x84b660_7f(_0xf24d16_18) : _0x84b660_7a("\x4e\x6f\x20\x72\x65\x73\x75\x6c\x74\x73", `\x4e\x6f\x74\x68\x69\x6e\x67\x20\x6d\x61\x74\x63\x68\x65\x64\x20\x22${_0x84b660_28}\x22\x2e`) : _0x84b660_2b ? _0x84b660_7b() : _0x84b660_2c && !_0x84b660_2a.tracks.length ? _0x84b660_7a("\x48\x6f\x6d\x65\x20\x69\x73\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65", _0x84b660_2c, !0) : "\x68\x6f\x6d\x65" === _0x84b660_29 ? _0x84b660_82() : "\x61\x72\x74\x69\x73\x74\x73" === _0x84b660_29 ? _0x84b660_80("\x61\x72\x74\x69\x73\x74", _0x84b660_2a.artists) : "\x61\x6c\x62\x75\x6d\x73" === _0x84b660_29 ? _0x84b660_80("\x61\x6c\x62\x75\x6d", _0x84b660_2a.albums) : _0x84b660_2a.tracks.length ? _0x84b660_7f(_0x84b660_2a.tracks) : void _0x84b660_7a("\x4e\x6f\x74\x68\x69\x6e\x67\x20\x69\x73\x20\x63\x68\x61\x72\x74\x69\x6e\x67\x20\x79\x65\x74", "\x54\x72\x79\x20\x73\x65\x61\x72\x63\x68\x69\x6e\x67\x20\x66\x6f\x72\x20\x61\x20\x73\x6f\x6e\x67\x2c\x20\x61\x72\x74\x69\x73\x74\x2c\x20\x6f\x72\x20\x61\x6c\x62\x75\x6d\x2e");
}

async function _0x84b660_88() {
  _0x84b660_2b = !0, _0x84b660_2c = "", _0x84b660_28 || _0x84b660_31 || _0x84b660_2e || _0x84b660_87();
  try {
    const _0x84b660_0 = await _0x84b660_57("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6e\x79\x78\x69\x66\x79\x2f\x68\x6f\x6d\x65");
    _0x84b660_2a = {
      tracks: Array.isArray(_0x84b660_0.tracks) ? _0x84b660_0.tracks : [],
      artists: Array.isArray(_0x84b660_0.artists) ? _0x84b660_0.artists : [],
      albums: Array.isArray(_0x84b660_0.albums) ? _0x84b660_0.albums : []
    };
  } catch (_0x84b660_0) {
    _0x84b660_2c = _0x84b660_0.message || "\x54\x68\x65\x20\x77\x65\x65\x6b\x6c\x79\x20\x63\x68\x61\x72\x74\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x6c\x6f\x61\x64\x2e";
  } finally {
    _0x84b660_2b = !1, _0x84b660_28 || _0x84b660_31 || _0x84b660_2e || _0x84b660_32 || _0x84b660_87();
  }
}

function _0x84b660_89(_0x84b660_0, _0x84b660_1, _0x84b660_2) {
  if (_0x84b660_0.innerHTML = "", !_0x84b660_1.length) {
    const _0x84b660_1 = document.createElement("\x64\x69\x76");
    return _0x84b660_1.className = "\x6d\x6f\x64\x2d\x65\x6d\x70\x74\x79", _0x84b660_1.textContent = _0x84b660_2, 
    void _0x84b660_0.appendChild(_0x84b660_1);
  }
  _0x84b660_1.forEach(_0x84b660_2 => {
    const _0x84b660_3 = document.createElement("\x64\x69\x76");
    _0x84b660_3.className = "\x6d\x69\x6e\x69" + (_0x84b660_27 && _0x84b660_27.id === _0x84b660_2.id ? "\x20\x70\x6c\x61\x79\x69\x6e\x67" : ""), 
    _0x84b660_3.dataset.id = _0x84b660_2.id;
    const _0x84b660_4 = _0x84b660_6e(_0x84b660_2.id);
    _0x84b660_3.innerHTML = `\x0a\x20\x20\x20\x20\x20\x20\x3c\x69\x6d\x67\x20\x73\x72\x63\x3d\x22${_0x84b660_56(_0x84b660_2.cover)}\x22\x20\x61\x6c\x74\x3d\x22\x22\x20\x6c\x6f\x61\x64\x69\x6e\x67\x3d\x22\x6c\x61\x7a\x79\x22\x3e\x0a\x20\x20\x20\x20\x20\x20\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x6d\x69\x6e\x69\x2d\x6d\x22\x3e\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x6d\x69\x6e\x69\x2d\x74\x22\x3e${_0x84b660_56(_0x84b660_2.title)}\x3c\x2f\x64\x69\x76\x3e\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x6d\x69\x6e\x69\x2d\x61\x22\x3e${_0x84b660_56(_0x84b660_2.artist)}\x3c\x2f\x64\x69\x76\x3e\x0a\x20\x20\x20\x20\x20\x20\x3c\x2f\x64\x69\x76\x3e\x0a\x20\x20\x20\x20\x20\x20\x3c\x62\x75\x74\x74\x6f\x6e\x20\x74\x79\x70\x65\x3d\x22\x62\x75\x74\x74\x6f\x6e\x22\x20\x63\x6c\x61\x73\x73\x3d\x22\x6c\x69\x6b\x65\x2d\x62\x74\x6e${_0x84b660_4 ? "\x20\x6c\x69\x6b\x65\x64" : ""}\x22\x20\x61\x72\x69\x61\x2d\x70\x72\x65\x73\x73\x65\x64\x3d\x22${_0x84b660_4}\x22\x20\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c\x3d\x22${_0x84b660_4 ? "\x75\x6e\x6c\x69\x6b\x65" : "\x6c\x69\x6b\x65"}\x22\x3e\x3c\x69\x20\x63\x6c\x61\x73\x73\x3d\x22${_0x84b660_4 ? "\x6d\x69\x6e\x67\x63\x75\x74\x65\x2d\x2d\x68\x65\x61\x72\x74\x2d\x66\x69\x6c\x6c" : "\x69\x63\x2d\x68\x65\x61\x72\x74"}\x22\x3e\x3c\x2f\x69\x3e\x3c\x2f\x62\x75\x74\x74\x6f\x6e\x3e`, 
    _0x84b660_62(_0x84b660_3, _0x84b660_2), _0x84b660_72(_0x84b660_3, `\x70\x6c\x61\x79\x20${_0x84b660_2.title}\x20\x62\x79\x20${_0x84b660_2.artist}`, () => _0x84b660_c3(_0x84b660_2, _0x84b660_1)), 
    _0x84b660_3.addEventListener("\x63\x6c\x69\x63\x6b", _0x84b660_0 => {
      _0x84b660_0.target.closest("\x2e\x6c\x69\x6b\x65\x2d\x62\x74\x6e") || _0x84b660_c3(_0x84b660_2, _0x84b660_1);
    }), _0x84b660_75(_0x84b660_3.querySelector("\x2e\x6c\x69\x6b\x65\x2d\x62\x74\x6e"), _0x84b660_2), _0x84b660_0.appendChild(_0x84b660_3);
  });
}

function _0x84b660_8a(_0x84b660_0, _0x84b660_1 = !1) {
  const _0x84b660_2 = document.createElement("\x73\x70\x61\x6e");
  _0x84b660_2.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x63\x6f\x76\x65\x72" + (_0x84b660_1 ? "\x20\x63\x6f\x6d\x70\x61\x63\x74" : "");
  const _0x84b660_3 = _0x84b660_0?.cover ? [ _0x84b660_0.cover ] : [];
  if (!_0x84b660_3.length) for (const _0x84b660_4 of _0x84b660_0?.tracks || []) if (_0x84b660_4.cover && !_0x84b660_3.includes(_0x84b660_4.cover) && (_0x84b660_3.push(_0x84b660_4.cover), 
  4 === _0x84b660_3.length)) break;
  if (_0x84b660_2.dataset.count = String(_0x84b660_3.length), !_0x84b660_3.length) {
    const _0x84b660_0 = document.createElement("\x69");
    return _0x84b660_0.className = "\x6d\x69\x6e\x67\x63\x75\x74\x65\x2d\x2d\x6d\x75\x73\x69\x63\x2d\x6c\x69\x6e\x65", _0x84b660_2.appendChild(_0x84b660_0), 
    _0x84b660_2;
  }
  return _0x84b660_3.forEach(_0x84b660_0 => {
    const _0x84b660_1 = document.createElement("\x69\x6d\x67");
    _0x84b660_1.src = _0x84b660_0, _0x84b660_1.alt = "", _0x84b660_1.loading = "\x6c\x61\x7a\x79", 
    _0x84b660_2.appendChild(_0x84b660_1);
  }), _0x84b660_2;
}

function _0x84b660_8b(_0x84b660_0, _0x84b660_1) {
  if (!_0x84b660_0 || !_0x84b660_ee(_0x84b660_1)) return;
  const _0x84b660_2 = _0x84b660_ef(_0x84b660_1), _0x84b660_3 = .299 * _0x84b660_2[0] + .587 * _0x84b660_2[1] + .114 * _0x84b660_2[2];
  _0x84b660_0.style.setProperty("\x2d\x2d\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x63\x6f\x76\x65\x72\x2d\x72\x67\x62", _0x84b660_2.join("\x2c\x20")), _0x84b660_0.style.setProperty("\x2d\x2d\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x63\x6f\x76\x65\x72\x2d\x69\x6e\x6b", _0x84b660_3 > 158 ? "\x23\x30\x36\x30\x37\x30\x61" : "\x23\x66\x37\x66\x38\x66\x62");
}

function _0x84b660_8c(_0x84b660_0) {
  const _0x84b660_1 = _0x84b660_0.getContext("\x32\x64", {
    willReadFrequently: !0
  }), {width: _0x84b660_2, height: _0x84b660_3} = _0x84b660_0, _0x84b660_4 = _0x84b660_1.getImageData(0, 0, _0x84b660_2, _0x84b660_3).data, _0x84b660_5 = Math.max(1, Math.round(.16 * _0x84b660_2)), _0x84b660_6 = Math.max(1, Math.round(.16 * _0x84b660_3)), _0x84b660_7 = new Map;
  for (let _0x84b660_b = 0; _0x84b660_b < _0x84b660_3; _0x84b660_b += 2) for (let _0x84b660_0 = 0; _0x84b660_0 < _0x84b660_2; _0x84b660_0 += 2) {
    if (_0x84b660_0 >= _0x84b660_5 && _0x84b660_0 < _0x84b660_2 - _0x84b660_5 && _0x84b660_b >= _0x84b660_6 && _0x84b660_b < _0x84b660_3 - _0x84b660_6) continue;
    const _0x84b660_1 = 4 * (_0x84b660_b * _0x84b660_2 + _0x84b660_0);
    if (_0x84b660_4[_0x84b660_1 + 3] < 180) continue;
    const _0x84b660_8 = _0x84b660_4[_0x84b660_1], _0x84b660_9 = _0x84b660_4[_0x84b660_1 + 1], _0x84b660_a = _0x84b660_4[_0x84b660_1 + 2], _0x84b660_c = Math.max(_0x84b660_8, _0x84b660_9, _0x84b660_a), _0x84b660_d = Math.min(_0x84b660_8, _0x84b660_9, _0x84b660_a), _0x84b660_e = _0x84b660_c ? (_0x84b660_c - _0x84b660_d) / _0x84b660_c : 0, _0x84b660_f = `${_0x84b660_8 >> 5}\x2d${_0x84b660_9 >> 5}\x2d${_0x84b660_a >> 5}`, _0x84b660_10 = _0x84b660_7.get(_0x84b660_f) || {
      count: 0,
      score: 0,
      r: 0,
      g: 0,
      b: 0
    };
    _0x84b660_10.count += 1, _0x84b660_10.score += .7 + .7 * _0x84b660_e, _0x84b660_10.r += _0x84b660_8, 
    _0x84b660_10.g += _0x84b660_9, _0x84b660_10.b += _0x84b660_a, _0x84b660_7.set(_0x84b660_f, _0x84b660_10);
  }
  const _0x84b660_8 = [ ..._0x84b660_7.values() ].sort((_0x84b660_0, _0x84b660_1) => _0x84b660_1.score - _0x84b660_0.score)[0];
  if (!_0x84b660_8) return "\x23\x37\x37\x37\x62\x38\x36";
  let _0x84b660_9 = [ _0x84b660_8.r, _0x84b660_8.g, _0x84b660_8.b ].map(_0x84b660_0 => Math.round(_0x84b660_0 / _0x84b660_8.count));
  const _0x84b660_a = .299 * _0x84b660_9[0] + .587 * _0x84b660_9[1] + .114 * _0x84b660_9[2];
  return _0x84b660_a < 42 && (_0x84b660_9 = _0x84b660_9.map(_0x84b660_0 => Math.round(_0x84b660_0 + .22 * (255 - _0x84b660_0)))), 
  _0x84b660_a > 225 && (_0x84b660_9 = _0x84b660_9.map(_0x84b660_0 => Math.round(.82 * _0x84b660_0))), 
  `\x23${_0x84b660_9.map(_0x84b660_0 => _0x84b660_0.toString(16).padStart(2, "\x30")).join("")}`;
}

function _0x84b660_8d(_0x84b660_0) {
  return new Promise((_0x84b660_1, _0x84b660_2) => {
    const _0x84b660_3 = new Image;
    _0x84b660_3.decoding = "\x61\x73\x79\x6e\x63", _0x84b660_3.onload = () => _0x84b660_1(_0x84b660_3), 
    _0x84b660_3.onerror = () => _0x84b660_2(new Error("\x54\x68\x61\x74\x20\x69\x6d\x61\x67\x65\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x62\x65\x20\x6f\x70\x65\x6e\x65\x64\x2e")), 
    _0x84b660_3.src = _0x84b660_0;
  });
}

function _0x84b660_8e(_0x84b660_0) {
  return new Promise((_0x84b660_1, _0x84b660_2) => {
    const _0x84b660_3 = new FileReader;
    _0x84b660_3.onerror = () => _0x84b660_2(new Error("\x54\x68\x61\x74\x20\x69\x6d\x61\x67\x65\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x62\x65\x20\x72\x65\x61\x64\x2e")), 
    _0x84b660_3.onload = () => _0x84b660_1(String(_0x84b660_3.result || "")), _0x84b660_3.readAsDataURL(_0x84b660_0);
  });
}

async function _0x84b660_8f(_0x84b660_0) {
  if (!_0x84b660_0 || !new Set([ "\x69\x6d\x61\x67\x65\x2f\x6a\x70\x65\x67", "\x69\x6d\x61\x67\x65\x2f\x70\x6e\x67", "\x69\x6d\x61\x67\x65\x2f\x77\x65\x62\x70" ]).has(_0x84b660_0.type)) throw new Error("\x43\x68\x6f\x6f\x73\x65\x20\x61\x20\x50\x4e\x47\x2c\x20\x4a\x50\x47\x2c\x20\x6f\x72\x20\x57\x65\x62\x50\x20\x69\x6d\x61\x67\x65\x2e");
  if (_0x84b660_0.size > _0x84b660_3b) throw new Error("\x50\x6c\x61\x79\x6c\x69\x73\x74\x20\x63\x6f\x76\x65\x72\x73\x20\x6d\x75\x73\x74\x20\x62\x65\x20\x38\x20\x4d\x42\x20\x6f\x72\x20\x73\x6d\x61\x6c\x6c\x65\x72\x2e");
  const _0x84b660_1 = await _0x84b660_8e(_0x84b660_0), _0x84b660_2 = await _0x84b660_8d(_0x84b660_1), _0x84b660_3 = Math.min(_0x84b660_2.naturalWidth, _0x84b660_2.naturalHeight);
  if (!_0x84b660_3) throw new Error("\x54\x68\x61\x74\x20\x69\x6d\x61\x67\x65\x20\x68\x61\x73\x20\x6e\x6f\x20\x75\x73\x61\x62\x6c\x65\x20\x70\x69\x78\x65\x6c\x73\x2e");
  const _0x84b660_4 = (_0x84b660_2.naturalWidth - _0x84b660_3) / 2, _0x84b660_5 = (_0x84b660_2.naturalHeight - _0x84b660_3) / 2, _0x84b660_6 = document.createElement("\x63\x61\x6e\x76\x61\x73");
  _0x84b660_6.width = 128, _0x84b660_6.height = 128, _0x84b660_6.getContext("\x32\x64", {
    alpha: !1
  }).drawImage(_0x84b660_2, _0x84b660_4, _0x84b660_5, _0x84b660_3, _0x84b660_3, 0, 0, 128, 128);
  const _0x84b660_7 = _0x84b660_8c(_0x84b660_6), _0x84b660_8 = [ [ 320, .82 ], [ 288, .74 ], [ 256, .66 ], [ 224, .58 ], [ 192, .52 ], [ 160, .46 ], [ 128, .42 ] ];
  for (const [_0x84b660_9, _0x84b660_a] of _0x84b660_8) {
    const _0x84b660_0 = document.createElement("\x63\x61\x6e\x76\x61\x73");
    _0x84b660_0.width = _0x84b660_9, _0x84b660_0.height = _0x84b660_9, _0x84b660_0.getContext("\x32\x64", {
      alpha: !1
    }).drawImage(_0x84b660_2, _0x84b660_4, _0x84b660_5, _0x84b660_3, _0x84b660_3, 0, 0, _0x84b660_9, _0x84b660_9);
    const _0x84b660_1 = _0x84b660_0.toDataURL("\x69\x6d\x61\x67\x65\x2f\x77\x65\x62\x70", _0x84b660_a);
    if (_0x84b660_1.length <= _0x84b660_3a) return {
      cover: _0x84b660_1,
      accent: _0x84b660_7
    };
  }
  throw new Error("\x54\x68\x61\x74\x20\x69\x6d\x61\x67\x65\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x62\x65\x20\x63\x6f\x6d\x70\x72\x65\x73\x73\x65\x64\x20\x65\x6e\x6f\x75\x67\x68\x2e\x20\x54\x72\x79\x20\x61\x20\x73\x69\x6d\x70\x6c\x65\x72\x20\x69\x6d\x61\x67\x65\x2e");
}

async function _0x84b660_90(_0x84b660_0) {
  return _0x84b660_0 ? (_0x84b660_3c.has(_0x84b660_0) || _0x84b660_3c.set(_0x84b660_0, (async () => {
    try {
      const _0x84b660_1 = await _0x84b660_8d(_0x84b660_0), _0x84b660_2 = Math.min(_0x84b660_1.naturalWidth, _0x84b660_1.naturalHeight), _0x84b660_3 = document.createElement("\x63\x61\x6e\x76\x61\x73");
      return _0x84b660_3.width = 64, _0x84b660_3.height = 64, _0x84b660_3.getContext("\x32\x64", {
        alpha: !1
      }).drawImage(_0x84b660_1, (_0x84b660_1.naturalWidth - _0x84b660_2) / 2, (_0x84b660_1.naturalHeight - _0x84b660_2) / 2, _0x84b660_2, _0x84b660_2, 0, 0, 64, 64), 
      _0x84b660_8c(_0x84b660_3);
    } catch (_0x84b660_1) {
      return "";
    }
  })()), _0x84b660_3c.get(_0x84b660_0)) : "";
}

function _0x84b660_91(_0x84b660_0) {
  const _0x84b660_1 = document.createElement("\x64\x69\x76");
  _0x84b660_1.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x63\x6f\x76\x65\x72\x2d\x65\x64\x69\x74\x6f\x72";
  const _0x84b660_2 = document.createElement("\x62\x75\x74\x74\x6f\x6e");
  _0x84b660_2.type = "\x62\x75\x74\x74\x6f\x6e", _0x84b660_2.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x63\x6f\x76\x65\x72\x2d\x63\x68\x61\x6e\x67\x65", _0x84b660_2.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", `\x43\x68\x61\x6e\x67\x65\x20\x63\x6f\x76\x65\x72\x20\x66\x6f\x72\x20${_0x84b660_0.name}`), 
  _0x84b660_2.appendChild(_0x84b660_8a(_0x84b660_0));
  const _0x84b660_3 = document.createElement("\x73\x70\x61\x6e");
  _0x84b660_3.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x63\x6f\x76\x65\x72\x2d\x70\x72\x6f\x6d\x70\x74", _0x84b660_3.innerHTML = "\x3c\x73\x76\x67\x20\x76\x69\x65\x77\x42\x6f\x78\x3d\x22\x30\x20\x30\x20\x32\x34\x20\x32\x34\x22\x20\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e\x3d\x22\x74\x72\x75\x65\x22\x3e\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x4d\x38\x2e\x32\x20\x36\x2e\x35\x20\x39\x2e\x35\x20\x34\x68\x35\x6c\x31\x2e\x33\x20\x32\x2e\x35\x48\x31\x39\x61\x32\x20\x32\x20\x30\x20\x30\x20\x31\x20\x32\x20\x32\x76\x39\x61\x32\x20\x32\x20\x30\x20\x30\x20\x31\x2d\x32\x20\x32\x48\x35\x61\x32\x20\x32\x20\x30\x20\x30\x20\x31\x2d\x32\x2d\x32\x76\x2d\x39\x61\x32\x20\x32\x20\x30\x20\x30\x20\x31\x20\x32\x2d\x32\x68\x33\x2e\x32\x5a\x22\x3e\x3c\x2f\x70\x61\x74\x68\x3e\x3c\x63\x69\x72\x63\x6c\x65\x20\x63\x78\x3d\x22\x31\x32\x22\x20\x63\x79\x3d\x22\x31\x33\x22\x20\x72\x3d\x22\x33\x2e\x35\x22\x3e\x3c\x2f\x63\x69\x72\x63\x6c\x65\x3e\x3c\x2f\x73\x76\x67\x3e\x3c\x73\x70\x61\x6e\x3e\x43\x68\x61\x6e\x67\x65\x20\x63\x6f\x76\x65\x72\x3c\x2f\x73\x70\x61\x6e\x3e", 
  _0x84b660_2.appendChild(_0x84b660_3);
  const _0x84b660_4 = document.createElement("\x69\x6e\x70\x75\x74");
  return _0x84b660_4.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x63\x6f\x76\x65\x72\x2d\x69\x6e\x70\x75\x74", _0x84b660_4.type = "\x66\x69\x6c\x65", 
  _0x84b660_4.accept = "\x69\x6d\x61\x67\x65\x2f\x70\x6e\x67\x2c\x69\x6d\x61\x67\x65\x2f\x6a\x70\x65\x67\x2c\x69\x6d\x61\x67\x65\x2f\x77\x65\x62\x70", _0x84b660_4.hidden = !0, 
  _0x84b660_2.addEventListener("\x63\x6c\x69\x63\x6b", () => _0x84b660_4.click()), _0x84b660_4.addEventListener("\x63\x68\x61\x6e\x67\x65", async () => {
    const _0x84b660_1 = _0x84b660_4.files?.[0];
    if (!_0x84b660_1) return;
    const _0x84b660_3 = _0x84b660_6.querySelector("\x2e\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x63\x6f\x76\x65\x72\x2d\x73\x74\x61\x74\x75\x73");
    _0x84b660_2.disabled = !0, _0x84b660_3 && (_0x84b660_3.textContent = "\x50\x72\x65\x70\x61\x72\x69\x6e\x67\x20\x63\x6f\x76\x65\x72\u2026");
    try {
      const _0x84b660_2 = await _0x84b660_8f(_0x84b660_1);
      _0x84b660_0.cover = _0x84b660_2.cover, _0x84b660_0.accent = _0x84b660_2.accent;
      const _0x84b660_3 = await _0x84b660_9a({
        verifyCover: {
          id: _0x84b660_0.id,
          cover: _0x84b660_2.cover
        }
      });
      _0x84b660_97();
      const _0x84b660_4 = _0x84b660_6.querySelector("\x2e\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x63\x6f\x76\x65\x72\x2d\x73\x74\x61\x74\x75\x73");
      _0x84b660_4 && (_0x84b660_3.synced ? _0x84b660_4.textContent = "\x43\x6f\x76\x65\x72\x20\x73\x79\x6e\x63\x65\x64\x20\x74\x6f\x20\x79\x6f\x75\x72\x20\x61\x63\x63\x6f\x75\x6e\x74\x2e" : _0x84b660_3.error ? _0x84b660_4.textContent = `\x43\x6f\x76\x65\x72\x20\x73\x61\x76\x65\x64\x20\x6f\x6e\x20\x74\x68\x69\x73\x20\x64\x65\x76\x69\x63\x65\x2e\x20${_0x84b660_3.error.message}` : _0x84b660_4.textContent = "\x43\x6f\x76\x65\x72\x20\x73\x61\x76\x65\x64\x20\x6f\x6e\x20\x74\x68\x69\x73\x20\x64\x65\x76\x69\x63\x65\x2e\x20\x53\x69\x67\x6e\x20\x69\x6e\x20\x74\x6f\x20\x73\x79\x6e\x63\x20\x69\x74\x2e");
    } catch (_0x84b660_5) {
      _0x84b660_2.disabled = !1, _0x84b660_3 && (_0x84b660_3.textContent = _0x84b660_5.message);
    } finally {
      _0x84b660_4.value = "";
    }
  }), _0x84b660_1.append(_0x84b660_2, _0x84b660_4), _0x84b660_ee(_0x84b660_0.accent) && _0x84b660_8b(_0x84b660_1, _0x84b660_0.accent), 
  _0x84b660_1;
}

function _0x84b660_92() {
  if (_0x84b660_11.innerHTML = "", !_0x84b660_34.length) {
    const _0x84b660_0 = document.createElement("\x73\x70\x61\x6e");
    return _0x84b660_0.className = "\x73\x69\x64\x65\x62\x61\x72\x2d\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x65\x6d\x70\x74\x79", _0x84b660_0.textContent = "\x4e\x6f\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x73\x20\x79\x65\x74", 
    void _0x84b660_11.appendChild(_0x84b660_0);
  }
  _0x84b660_34.forEach(_0x84b660_0 => {
    const _0x84b660_1 = document.createElement("\x62\x75\x74\x74\x6f\x6e");
    _0x84b660_1.type = "\x62\x75\x74\x74\x6f\x6e", _0x84b660_1.className = "\x73\x69\x64\x65\x62\x61\x72\x2d\x70\x6c\x61\x79\x6c\x69\x73\x74", _0x84b660_1.classList.toggle("\x61\x63\x74\x69\x76\x65", _0x84b660_31 === _0x84b660_0.id);
    const _0x84b660_2 = document.createElement("\x73\x70\x61\x6e"), _0x84b660_3 = document.createElement("\x73\x74\x72\x6f\x6e\x67");
    _0x84b660_3.textContent = _0x84b660_0.name;
    const _0x84b660_4 = document.createElement("\x73\x6d\x61\x6c\x6c");
    _0x84b660_4.textContent = `${_0x84b660_0.tracks.length}\x20\x73\x6f\x6e\x67\x73`, _0x84b660_2.append(_0x84b660_3, _0x84b660_4), 
    _0x84b660_1.append(_0x84b660_8a(_0x84b660_0, !0), _0x84b660_2), _0x84b660_1.addEventListener("\x63\x6c\x69\x63\x6b", () => _0x84b660_96(_0x84b660_0.id)), 
    _0x84b660_11.appendChild(_0x84b660_1);
  });
}

function _0x84b660_93() {
  if (_0x84b660_10.innerHTML = "", _0x84b660_92(), _0x84b660_a6(), !_0x84b660_34.length) {
    const _0x84b660_0 = document.createElement("\x64\x69\x76");
    return _0x84b660_0.className = "\x6d\x6f\x64\x2d\x65\x6d\x70\x74\x79", _0x84b660_0.textContent = "\x43\x72\x65\x61\x74\x65\x20\x61\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x74\x6f\x20\x73\x61\x76\x65\x20\x73\x6f\x6e\x67\x73\x20\x74\x6f\x67\x65\x74\x68\x65\x72\x2e", 
    void _0x84b660_10.appendChild(_0x84b660_0);
  }
  _0x84b660_34.forEach(_0x84b660_0 => {
    const _0x84b660_1 = document.createElement("\x64\x69\x76");
    _0x84b660_1.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x65\x6e\x74\x72\x79", _0x84b660_ee(_0x84b660_0.accent) && _0x84b660_8b(_0x84b660_1, _0x84b660_0.accent);
    const _0x84b660_2 = document.createElement("\x62\x75\x74\x74\x6f\x6e");
    _0x84b660_2.type = "\x62\x75\x74\x74\x6f\x6e", _0x84b660_2.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x6f\x70\x65\x6e";
    const _0x84b660_3 = document.createElement("\x73\x70\x61\x6e");
    _0x84b660_3.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x6f\x70\x65\x6e\x2d\x6d\x65\x74\x61";
    const _0x84b660_4 = document.createElement("\x73\x74\x72\x6f\x6e\x67");
    _0x84b660_4.textContent = _0x84b660_0.name;
    const _0x84b660_5 = document.createElement("\x73\x6d\x61\x6c\x6c");
    _0x84b660_5.textContent = `${_0x84b660_0.tracks.length}\x20${1 === _0x84b660_0.tracks.length ? "\x74\x72\x61\x63\x6b" : "\x74\x72\x61\x63\x6b\x73"}`, 
    _0x84b660_3.append(_0x84b660_4, _0x84b660_5), _0x84b660_2.append(_0x84b660_8a(_0x84b660_0, !0), _0x84b660_3), 
    _0x84b660_2.addEventListener("\x63\x6c\x69\x63\x6b", () => _0x84b660_96(_0x84b660_0.id));
    const _0x84b660_6 = document.createElement("\x62\x75\x74\x74\x6f\x6e");
    _0x84b660_6.type = "\x62\x75\x74\x74\x6f\x6e", _0x84b660_6.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x64\x65\x6c\x65\x74\x65", _0x84b660_6.textContent = "\xd7", 
    _0x84b660_6.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", `\x44\x65\x6c\x65\x74\x65\x20${_0x84b660_0.name}`), _0x84b660_6.addEventListener("\x63\x6c\x69\x63\x6b", () => {
      confirm(`\x44\x65\x6c\x65\x74\x65\x20\x22${_0x84b660_0.name}\x22\x3f`) && (_0x84b660_34 = _0x84b660_34.filter(_0x84b660_1 => _0x84b660_1.id !== _0x84b660_0.id), 
      _0x84b660_31 === _0x84b660_0.id && (_0x84b660_31 = ""), _0x84b660_32 === _0x84b660_0.id && (_0x84b660_32 = ""), 
      _0x84b660_9a(), _0x84b660_87());
    }), _0x84b660_1.append(_0x84b660_2, _0x84b660_6), _0x84b660_10.appendChild(_0x84b660_1);
  });
}

function _0x84b660_94() {
  if (_0x84b660_14.innerHTML = "", !_0x84b660_34.length) {
    const _0x84b660_0 = document.createElement("\x64\x69\x76");
    return _0x84b660_0.className = "\x6d\x6f\x64\x2d\x65\x6d\x70\x74\x79", _0x84b660_0.textContent = "\x4e\x6f\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x73\x20\x79\x65\x74\x2e", 
    void _0x84b660_14.appendChild(_0x84b660_0);
  }
  _0x84b660_34.forEach(_0x84b660_0 => {
    const _0x84b660_1 = document.createElement("\x62\x75\x74\x74\x6f\x6e");
    _0x84b660_1.type = "\x62\x75\x74\x74\x6f\x6e", _0x84b660_1.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x63\x68\x6f\x69\x63\x65";
    const _0x84b660_2 = document.createElement("\x73\x70\x61\x6e");
    _0x84b660_2.textContent = _0x84b660_0.name;
    const _0x84b660_3 = document.createElement("\x73\x6d\x61\x6c\x6c");
    _0x84b660_3.textContent = `${_0x84b660_0.tracks.length}\x20\x74\x72\x61\x63\x6b\x73`, _0x84b660_1.append(_0x84b660_2, _0x84b660_3), 
    _0x84b660_1.addEventListener("\x63\x6c\x69\x63\x6b", () => {
      _0x84b660_33 ? _0x84b660_9b(_0x84b660_0.id, _0x84b660_33) : (_0x84b660_13.close(), 
      _0x84b660_96(_0x84b660_0.id));
    }), _0x84b660_14.appendChild(_0x84b660_1);
  });
}

function _0x84b660_95(_0x84b660_0 = null) {
  _0x84b660_33 = _0x84b660_0 ? _0x84b660_63(_0x84b660_0) : null, _0x84b660_16.textContent = "", 
  document.getElementById("\x70\x6c\x61\x79\x6c\x69\x73\x74\x44\x69\x61\x6c\x6f\x67\x48\x69\x6e\x74").textContent = _0x84b660_33 ? `\x41\x64\x64\x20\u201c${_0x84b660_33.title}\u201d\x20\x74\x6f\x20\x61\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x2e` : "\x43\x72\x65\x61\x74\x65\x20\x61\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x6f\x72\x20\x63\x68\x6f\x6f\x73\x65\x20\x6f\x6e\x65\x20\x62\x65\x6c\x6f\x77\x2e", 
  _0x84b660_94(), _0x84b660_13.showModal(), _0x84b660_15.focus();
}

function _0x84b660_96(_0x84b660_0) {
  _0x84b660_34.find(_0x84b660_1 => _0x84b660_1.id === _0x84b660_0) && (++_0x84b660_2f, 
  _0x84b660_31 = _0x84b660_0, _0x84b660_32 = "", _0x84b660_2e = null, _0x84b660_92(), 
  _0x84b660_97());
}

function _0x84b660_97() {
  const _0x84b660_0 = _0x84b660_34.find(_0x84b660_0 => _0x84b660_0.id === _0x84b660_31);
  if (!_0x84b660_0) return _0x84b660_31 = "", _0x84b660_87();
  _0x84b660_79(), _0x84b660_a.style.display = "", _0x84b660_b.textContent = "\x50\x6c\x61\x79\x6c\x69\x73\x74\x73", 
  _0x84b660_6.innerHTML = "";
  const _0x84b660_1 = document.createElement("\x73\x65\x63\x74\x69\x6f\x6e");
  _0x84b660_1.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x68\x65\x72\x6f";
  const _0x84b660_2 = _0x84b660_65(_0x84b660_0.accent);
  _0x84b660_2 ? _0x84b660_8b(_0x84b660_1, _0x84b660_2) : _0x84b660_90(_0x84b660_0.cover || _0x84b660_0.tracks.find(_0x84b660_0 => _0x84b660_0.cover)?.cover || "").then(_0x84b660_0 => {
    _0x84b660_1.isConnected && _0x84b660_0 && _0x84b660_8b(_0x84b660_1, _0x84b660_0);
  });
  const _0x84b660_3 = document.createElement("\x64\x69\x76");
  _0x84b660_3.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x68\x65\x72\x6f\x2d\x69\x6e\x66\x6f";
  const _0x84b660_4 = document.createElement("\x73\x70\x61\x6e");
  _0x84b660_4.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x65\x79\x65\x62\x72\x6f\x77", _0x84b660_4.textContent = "\x50\x6c\x61\x79\x6c\x69\x73\x74";
  const _0x84b660_5 = document.createElement("\x68\x32");
  _0x84b660_5.textContent = _0x84b660_0.name;
  const _0x84b660_7 = document.createElement("\x70");
  _0x84b660_7.textContent = `${_0x84b660_0.tracks.length}\x20${1 === _0x84b660_0.tracks.length ? "\x73\x6f\x6e\x67" : "\x73\x6f\x6e\x67\x73"}\x20\xb7\x20\x4e\x79\x78\x69\x66\x79\x2f\x62\x75\x69\x6c\x74\x20\x69\x6e\x20\x6d\x75\x73\x69\x63`;
  const _0x84b660_8 = document.createElement("\x64\x69\x76");
  _0x84b660_8.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x68\x65\x72\x6f\x2d\x61\x63\x74\x69\x6f\x6e\x73";
  const _0x84b660_9 = document.createElement("\x62\x75\x74\x74\x6f\x6e");
  _0x84b660_9.type = "\x62\x75\x74\x74\x6f\x6e", _0x84b660_9.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x70\x6c\x61\x79\x2d\x61\x6c\x6c", _0x84b660_9.disabled = !_0x84b660_0.tracks.length, 
  _0x84b660_9.innerHTML = "\x3c\x73\x76\x67\x20\x76\x69\x65\x77\x42\x6f\x78\x3d\x22\x30\x20\x30\x20\x32\x34\x20\x32\x34\x22\x20\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e\x3d\x22\x74\x72\x75\x65\x22\x3e\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x4d\x38\x20\x35\x2e\x38\x76\x31\x32\x2e\x34\x4c\x31\x38\x20\x31\x32\x5a\x22\x3e\x3c\x2f\x70\x61\x74\x68\x3e\x3c\x2f\x73\x76\x67\x3e\x3c\x73\x70\x61\x6e\x3e\x50\x6c\x61\x79\x3c\x2f\x73\x70\x61\x6e\x3e", 
  _0x84b660_9.addEventListener("\x63\x6c\x69\x63\x6b", () => {
    _0x84b660_0.tracks.length && _0x84b660_c3(_0x84b660_0.tracks[0], _0x84b660_0.tracks);
  });
  const _0x84b660_c = document.createElement("\x62\x75\x74\x74\x6f\x6e");
  if (_0x84b660_c.type = "\x62\x75\x74\x74\x6f\x6e", _0x84b660_c.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x61\x64\x64\x2d\x73\x6f\x6e\x67\x73", _0x84b660_c.innerHTML = "\x3c\x73\x76\x67\x20\x76\x69\x65\x77\x42\x6f\x78\x3d\x22\x30\x20\x30\x20\x32\x34\x20\x32\x34\x22\x20\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e\x3d\x22\x74\x72\x75\x65\x22\x3e\x3c\x63\x69\x72\x63\x6c\x65\x20\x63\x78\x3d\x22\x31\x32\x22\x20\x63\x79\x3d\x22\x31\x32\x22\x20\x72\x3d\x22\x39\x22\x3e\x3c\x2f\x63\x69\x72\x63\x6c\x65\x3e\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x4d\x31\x32\x20\x38\x76\x38\x4d\x38\x20\x31\x32\x68\x38\x22\x3e\x3c\x2f\x70\x61\x74\x68\x3e\x3c\x2f\x73\x76\x67\x3e\x3c\x73\x70\x61\x6e\x3e\x41\x64\x64\x20\x73\x6f\x6e\x67\x73\x3c\x2f\x73\x70\x61\x6e\x3e", 
  _0x84b660_c.addEventListener("\x63\x6c\x69\x63\x6b", () => _0x84b660_98(_0x84b660_0.id)), _0x84b660_8.append(_0x84b660_9, _0x84b660_c), 
  _0x84b660_0.cover) {
    const _0x84b660_1 = document.createElement("\x62\x75\x74\x74\x6f\x6e");
    _0x84b660_1.type = "\x62\x75\x74\x74\x6f\x6e", _0x84b660_1.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x72\x65\x73\x65\x74\x2d\x63\x6f\x76\x65\x72", _0x84b660_1.textContent = "\x55\x73\x65\x20\x73\x6f\x6e\x67\x20\x63\x6f\x76\x65\x72\x73", 
    _0x84b660_1.addEventListener("\x63\x6c\x69\x63\x6b", async () => {
      _0x84b660_0.cover = "", _0x84b660_0.accent = "", await _0x84b660_9a(), _0x84b660_97();
    }), _0x84b660_8.appendChild(_0x84b660_1);
  }
  const _0x84b660_d = document.createElement("\x73\x70\x61\x6e");
  if (_0x84b660_d.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x63\x6f\x76\x65\x72\x2d\x73\x74\x61\x74\x75\x73", _0x84b660_d.setAttribute("\x72\x6f\x6c\x65", "\x73\x74\x61\x74\x75\x73"), 
  _0x84b660_3.append(_0x84b660_4, _0x84b660_5, _0x84b660_7, _0x84b660_8, _0x84b660_d), 
  _0x84b660_1.append(_0x84b660_91(_0x84b660_0), _0x84b660_3), _0x84b660_6.appendChild(_0x84b660_1), 
  _0x84b660_0.tracks.length) {
    const _0x84b660_1 = document.createElement("\x64\x69\x76");
    _0x84b660_1.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x73\x65\x65\x64\x2d\x68\x69\x6e\x74", _0x84b660_1.innerHTML = "\x3c\x73\x76\x67\x20\x76\x69\x65\x77\x42\x6f\x78\x3d\x22\x30\x20\x30\x20\x32\x34\x20\x32\x34\x22\x20\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e\x3d\x22\x74\x72\x75\x65\x22\x3e\x3c\x70\x61\x74\x68\x20\x64\x3d\x22\x6d\x31\x32\x20\x33\x20\x2e\x39\x20\x33\x2e\x31\x4c\x31\x36\x20\x37\x6c\x2d\x33\x2e\x31\x2e\x39\x4c\x31\x32\x20\x31\x31\x6c\x2d\x2e\x39\x2d\x33\x2e\x31\x4c\x38\x20\x37\x6c\x33\x2e\x31\x2d\x2e\x39\x4c\x31\x32\x20\x33\x5a\x6d\x36\x20\x38\x20\x2e\x37\x20\x32\x2e\x33\x4c\x32\x31\x20\x31\x34\x6c\x2d\x32\x2e\x33\x2e\x37\x4c\x31\x38\x20\x31\x37\x6c\x2d\x2e\x37\x2d\x32\x2e\x33\x4c\x31\x35\x20\x31\x34\x6c\x32\x2e\x33\x2d\x2e\x37\x4c\x31\x38\x20\x31\x31\x5a\x4d\x38\x20\x31\x31\x6c\x31\x2e\x34\x20\x34\x2e\x36\x4c\x31\x34\x20\x31\x37\x6c\x2d\x34\x2e\x36\x20\x31\x2e\x34\x4c\x38\x20\x32\x33\x6c\x2d\x31\x2e\x34\x2d\x34\x2e\x36\x4c\x32\x20\x31\x37\x6c\x34\x2e\x36\x2d\x31\x2e\x34\x4c\x38\x20\x31\x31\x5a\x22\x3e\x3c\x2f\x70\x61\x74\x68\x3e\x3c\x2f\x73\x76\x67\x3e\x3c\x73\x70\x61\x6e\x3e\x53\x70\x61\x72\x6b\x6c\x65\x20\x63\x72\x65\x61\x74\x65\x73\x20\x61\x20\x73\x65\x70\x61\x72\x61\x74\x65\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x66\x72\x6f\x6d\x20\x61\x20\x73\x6f\x6e\x67\x2e\x20\x53\x68\x75\x66\x66\x6c\x65\x20\x72\x61\x6e\x64\x6f\x6d\x69\x7a\x65\x73\x20\x74\x68\x69\x73\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x66\x6f\x72\x20\x70\x6c\x61\x79\x62\x61\x63\x6b\x2e\x3c\x2f\x73\x70\x61\x6e\x3e", 
    _0x84b660_6.appendChild(_0x84b660_1);
    const _0x84b660_2 = document.createElement("\x64\x69\x76");
    _0x84b660_2.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x74\x72\x61\x63\x6b\x2d\x6c\x69\x73\x74", _0x84b660_7e(_0x84b660_2, _0x84b660_0.tracks, {
      playlistId: _0x84b660_0.id,
      playlistName: _0x84b660_0.name
    }), _0x84b660_6.appendChild(_0x84b660_2);
  } else {
    const _0x84b660_0 = document.createElement("\x73\x65\x63\x74\x69\x6f\x6e");
    _0x84b660_0.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x65\x6d\x70\x74\x79", _0x84b660_0.innerHTML = "\x3c\x73\x74\x72\x6f\x6e\x67\x3e\x59\x6f\x75\x72\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x69\x73\x20\x65\x6d\x70\x74\x79\x3c\x2f\x73\x74\x72\x6f\x6e\x67\x3e\x3c\x73\x70\x61\x6e\x3e\x55\x73\x65\x20\x41\x64\x64\x20\x73\x6f\x6e\x67\x73\x20\x74\x6f\x20\x66\x69\x6e\x64\x20\x6d\x75\x73\x69\x63\x20\x66\x6f\x72\x20\x69\x74\x2e\x3c\x2f\x73\x70\x61\x6e\x3e", 
    _0x84b660_6.appendChild(_0x84b660_0);
  }
  _0x84b660_6.style.display = "";
}

function _0x84b660_98(_0x84b660_0) {
  _0x84b660_34.find(_0x84b660_1 => _0x84b660_1.id === _0x84b660_0) && (++_0x84b660_2f, 
  _0x84b660_32 = _0x84b660_0, _0x84b660_31 = "", _0x84b660_2e = null, _0x84b660_28 = "", 
  _0xf24d16_18 = [], _0x84b660_f.value = "", _0x84b660_99(), _0x84b660_f.focus());
}

function _0x84b660_99() {
  const _0x84b660_0 = _0x84b660_34.find(_0x84b660_0 => _0x84b660_0.id === _0x84b660_32);
  if (!_0x84b660_0) return _0x84b660_32 = "", _0x84b660_87();
  _0x84b660_79(), _0x84b660_a.style.display = "", _0x84b660_b.textContent = `\x42\x61\x63\x6b\x20\x74\x6f\x20${_0x84b660_0.name}`, 
  _0x84b660_6.innerHTML = "";
  const _0x84b660_1 = document.createElement("\x73\x65\x63\x74\x69\x6f\x6e");
  _0x84b660_1.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x61\x64\x64\x2d\x68\x65\x61\x64\x69\x6e\x67";
  const _0x84b660_2 = document.createElement("\x64\x69\x76");
  if (_0x84b660_2.innerHTML = `\x3c\x73\x70\x61\x6e\x3e\x41\x64\x64\x20\x74\x6f\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x3c\x2f\x73\x70\x61\x6e\x3e\x3c\x73\x74\x72\x6f\x6e\x67\x3e${_0x84b660_56(_0x84b660_0.name)}\x3c\x2f\x73\x74\x72\x6f\x6e\x67\x3e\x3c\x73\x6d\x61\x6c\x6c\x3e\x53\x65\x61\x72\x63\x68\x20\x61\x62\x6f\x76\x65\x2c\x20\x74\x68\x65\x6e\x20\x75\x73\x65\x20\x2b\x20\x62\x65\x73\x69\x64\x65\x20\x61\x6e\x79\x20\x73\x6f\x6e\x67\x2e\x3c\x2f\x73\x6d\x61\x6c\x6c\x3e`, 
  _0x84b660_1.append(_0x84b660_8a(_0x84b660_0, !0), _0x84b660_2), _0x84b660_6.appendChild(_0x84b660_1), 
  _0xf24d16_18.length) {
    const _0x84b660_0 = document.createElement("\x64\x69\x76");
    _0x84b660_0.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x74\x72\x61\x63\x6b\x2d\x6c\x69\x73\x74\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x61\x64\x64\x2d\x72\x65\x73\x75\x6c\x74\x73", _0x84b660_7e(_0x84b660_0, _0xf24d16_18), 
    _0x84b660_6.appendChild(_0x84b660_0);
  } else {
    const _0x84b660_0 = document.createElement("\x73\x65\x63\x74\x69\x6f\x6e");
    _0x84b660_0.className = "\x70\x6c\x61\x79\x6c\x69\x73\x74\x2d\x65\x6d\x70\x74\x79\x20\x63\x6f\x6d\x70\x61\x63\x74", _0x84b660_0.innerHTML = `\x3c\x73\x74\x72\x6f\x6e\x67\x3e${_0x84b660_28 ? "\x4e\x6f\x20\x73\x6f\x6e\x67\x73\x20\x66\x6f\x75\x6e\x64" : "\x46\x69\x6e\x64\x20\x73\x6f\x6e\x67\x73\x20\x66\x6f\x72\x20\x74\x68\x69\x73\x20\x70\x6c\x61\x79\x6c\x69\x73\x74"}\x3c\x2f\x73\x74\x72\x6f\x6e\x67\x3e\x3c\x73\x70\x61\x6e\x3e${_0x84b660_28 ? `\x4e\x6f\x74\x68\x69\x6e\x67\x20\x6d\x61\x74\x63\x68\x65\x64\x20\u201c${_0x84b660_56(_0x84b660_28)}\u201d\x2e` : "\x54\x79\x70\x65\x20\x61\x20\x73\x6f\x6e\x67\x20\x6f\x72\x20\x61\x72\x74\x69\x73\x74\x20\x69\x6e\x74\x6f\x20\x74\x68\x65\x20\x73\x65\x61\x72\x63\x68\x20\x62\x61\x72\x2e"}\x3c\x2f\x73\x70\x61\x6e\x3e`, 
    _0x84b660_6.appendChild(_0x84b660_0);
  }
  _0x84b660_6.style.display = "";
}

async function _0x84b660_9a(_0x84b660_0 = {}) {
  const _0x84b660_1 = ++_0x84b660_39, _0x84b660_2 = JSON.parse(JSON.stringify(_0x84b660_34));
  _0x84b660_67(), _0x84b660_93(), _0x84b660_94();
  const _0x84b660_3 = async () => {
    const _0x84b660_1 = await _0x84b660_6b("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6e\x79\x78\x69\x66\x79\x2f\x70\x6c\x61\x79\x6c\x69\x73\x74\x73", {
      method: "\x50\x55\x54",
      headers: {
        "\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65": "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e"
      },
      body: JSON.stringify({
        playlists: _0x84b660_2
      })
    });
    if (!_0x84b660_1) return {
      synced: !1,
      reason: "\x73\x69\x67\x6e\x65\x64\x2d\x6f\x75\x74"
    };
    if (_0x84b660_0.verifyCover) {
      const _0x84b660_2 = _0x84b660_64(_0x84b660_0.verifyCover.cover), _0x84b660_3 = (Array.isArray(_0x84b660_1.playlists) ? _0x84b660_1.playlists : []).find(_0x84b660_1 => _0x84b660_1?.id === _0x84b660_0.verifyCover.id);
      if (!_0x84b660_2 || _0x84b660_64(_0x84b660_3?.cover) !== _0x84b660_2) throw new Error("\x41\x63\x63\x6f\x75\x6e\x74\x20\x73\x79\x6e\x63\x20\x64\x69\x64\x20\x6e\x6f\x74\x20\x72\x65\x74\x61\x69\x6e\x20\x74\x68\x65\x20\x63\x75\x73\x74\x6f\x6d\x20\x63\x6f\x76\x65\x72\x2e\x20\x54\x72\x79\x20\x69\x74\x20\x61\x67\x61\x69\x6e\x2e");
    }
    return {
      synced: !0,
      payload: _0x84b660_1
    };
  }, _0x84b660_4 = _0x84b660_38.then(_0x84b660_3, _0x84b660_3);
  _0x84b660_38 = _0x84b660_4.catch(() => {});
  try {
    const _0x84b660_0 = await _0x84b660_4;
    return _0x84b660_1 === _0x84b660_39 && (_0x84b660_12.textContent = _0x84b660_0.synced ? "\x53\x79\x6e\x63\x65\x64\x20\x74\x6f\x20\x79\x6f\x75\x72\x20\x61\x63\x63\x6f\x75\x6e\x74" : "\x53\x61\x76\x65\x64\x20\x6f\x6e\x20\x74\x68\x69\x73\x20\x64\x65\x76\x69\x63\x65"), 
    _0x84b660_0;
  } catch (_0x84b660_5) {
    return _0x84b660_1 === _0x84b660_39 && (_0x84b660_12.textContent = "\x53\x61\x76\x65\x64\x20\x6c\x6f\x63\x61\x6c\x6c\x79\x20\xb7\x20\x61\x63\x63\x6f\x75\x6e\x74\x20\x73\x79\x6e\x63\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65"), 
    _0x84b660_16.textContent = _0x84b660_5.message || "\x41\x63\x63\x6f\x75\x6e\x74\x20\x73\x79\x6e\x63\x20\x69\x73\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x2e", 
    {
      synced: !1,
      reason: "\x65\x72\x72\x6f\x72",
      error: _0x84b660_5
    };
  }
}

function _0x84b660_9b(_0x84b660_0, _0x84b660_1) {
  const _0x84b660_2 = _0x84b660_34.find(_0x84b660_1 => _0x84b660_1.id === _0x84b660_0);
  return !(!_0x84b660_2 || !_0x84b660_1 || (_0x84b660_2.tracks.some(_0x84b660_0 => _0x84b660_0.id === _0x84b660_1.id) ? (_0x84b660_16.textContent = `\x41\x6c\x72\x65\x61\x64\x79\x20\x69\x6e\x20${_0x84b660_2.name}\x2e`, 
  1) : _0x84b660_2.tracks.length >= 150 ? (_0x84b660_16.textContent = "\x54\x68\x69\x73\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x68\x61\x73\x20\x72\x65\x61\x63\x68\x65\x64\x20\x31\x35\x30\x20\x74\x72\x61\x63\x6b\x73\x2e", 
  1) : (_0x84b660_2.tracks.push(_0x84b660_63(_0x84b660_1)), _0x84b660_16.textContent = `\x41\x64\x64\x65\x64\x20\x74\x6f\x20${_0x84b660_2.name}\x2e`, 
  _0x84b660_9a(), 0)));
}

function _0x84b660_9c(_0x84b660_0, _0x84b660_1) {
  const _0x84b660_2 = _0x84b660_34.find(_0x84b660_1 => _0x84b660_1.id === _0x84b660_0);
  if (!_0x84b660_2) return;
  const _0x84b660_3 = _0x84b660_2.tracks.filter(_0x84b660_0 => _0x84b660_0.id !== _0x84b660_1);
  _0x84b660_3.length !== _0x84b660_2.tracks.length && (_0x84b660_2.tracks = _0x84b660_3, 
  _0x84b660_16.textContent = `\x52\x65\x6d\x6f\x76\x65\x64\x20\x66\x72\x6f\x6d\x20${_0x84b660_2.name}\x2e`, _0x84b660_9a(), 
  _0x84b660_97());
}

function _0x84b660_9d(_0x84b660_0) {
  const _0x84b660_1 = `${String(_0x84b660_0?.title || "\x53\x6f\x6e\x67").trim() || "\x53\x6f\x6e\x67"}\x20\x4d\x69\x78`, _0x84b660_2 = new Set(_0x84b660_34.map(_0x84b660_0 => _0x84b660_0.name.toLowerCase()));
  for (let _0x84b660_3 = 1; _0x84b660_3 <= _0x84b660_34.length + 2; _0x84b660_3++) {
    const _0x84b660_0 = 1 === _0x84b660_3 ? "" : `\x20${_0x84b660_3}`, _0x84b660_4 = `${_0x84b660_1.slice(0, 48 - _0x84b660_0.length).trim()}${_0x84b660_0}`;
    if (!_0x84b660_2.has(_0x84b660_4.toLowerCase())) return _0x84b660_4;
  }
  return `\x4e\x65\x77\x20\x4d\x69\x78\x20${Date.now().toString(36).slice(-5)}`;
}

function _0x84b660_9e(_0x84b660_0) {
  const _0x84b660_1 = _0x84b660_34.find(_0x84b660_1 => _0x84b660_1.id === _0x84b660_0);
  if (!_0x84b660_1?.tracks.length) return;
  const _0x84b660_2 = _0x84b660_1.tracks.map(_0x84b660_63);
  for (let _0x84b660_3 = _0x84b660_2.length - 1; _0x84b660_3 > 0; _0x84b660_3--) {
    const _0x84b660_0 = Math.floor(Math.random() * (_0x84b660_3 + 1));
    [_0x84b660_2[_0x84b660_3], _0x84b660_2[_0x84b660_0]] = [ _0x84b660_2[_0x84b660_0], _0x84b660_2[_0x84b660_3] ];
  }
  _0x84b660_c3(_0x84b660_2[0], _0x84b660_2), _0x84b660_16.textContent = `\x53\x68\x75\x66\x66\x6c\x69\x6e\x67\x20${_0x84b660_1.name}\x2e`;
}

async function _0x84b660_9f(_0x84b660_0, _0x84b660_1) {
  if (!_0x84b660_0 || _0x84b660_1?.disabled) return;
  if (_0x84b660_34.length >= 16) return void (_0x84b660_16.textContent = "\x59\x6f\x75\x20\x63\x61\x6e\x20\x68\x61\x76\x65\x20\x75\x70\x20\x74\x6f\x20\x31\x36\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x73\x2e");
  const _0x84b660_2 = _0x84b660_34.reduce((_0x84b660_0, _0x84b660_1) => _0x84b660_0 + _0x84b660_1.tracks.length, 0), _0x84b660_3 = Math.max(0, 1200 - _0x84b660_2);
  if (!_0x84b660_3) return void (_0x84b660_16.textContent = "\x59\x6f\x75\x72\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x6c\x69\x62\x72\x61\x72\x79\x20\x68\x61\x73\x20\x72\x65\x61\x63\x68\x65\x64\x20\x69\x74\x73\x20\x74\x72\x61\x63\x6b\x20\x6c\x69\x6d\x69\x74\x2e");
  _0x84b660_1 && (_0x84b660_1.disabled = !0), _0x84b660_16.textContent = `\x43\x72\x65\x61\x74\x69\x6e\x67\x20\x61\x20\x6e\x65\x77\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x66\x72\x6f\x6d\x20${_0x84b660_0.title}\u2026`;
  let _0x84b660_4 = [], _0x84b660_5 = !1;
  try {
    const _0x84b660_1 = String(_0x84b660_0.artist || _0x84b660_0.title || "").trim();
    if (!_0x84b660_1) throw new Error("\x54\x68\x69\x73\x20\x73\x6f\x6e\x67\x20\x64\x6f\x65\x73\x20\x6e\x6f\x74\x20\x68\x61\x76\x65\x20\x65\x6e\x6f\x75\x67\x68\x20\x63\x61\x74\x61\x6c\x6f\x67\x20\x69\x6e\x66\x6f\x72\x6d\x61\x74\x69\x6f\x6e\x2e");
    const _0x84b660_2 = await _0x84b660_57(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6e\x79\x78\x69\x66\x79\x2f\x73\x65\x61\x72\x63\x68\x3f\x71\x3d${encodeURIComponent(_0x84b660_1)}`);
    _0x84b660_4 = Array.isArray(_0x84b660_2.data) ? _0x84b660_2.data : [];
  } catch (_0x84b660_6) {
    _0x84b660_5 = !0;
  }
  try {
    const _0x84b660_1 = new Set([ String(_0x84b660_0.id) ]), _0x84b660_2 = Math.max(0, Math.min(17, _0x84b660_3 - 1)), _0x84b660_6 = _0x84b660_4.filter(_0x84b660_0 => {
      const _0x84b660_2 = String(_0x84b660_0?.id || "");
      return !(!_0x84b660_2 || _0x84b660_1.has(_0x84b660_2) || (_0x84b660_1.add(_0x84b660_2), 
      0));
    }).slice(0, _0x84b660_2).map(_0x84b660_63), _0x84b660_7 = {
      id: _0x84b660_6c(),
      name: _0x84b660_9d(_0x84b660_0),
      cover: "",
      accent: await _0x84b660_90(_0x84b660_0.cover),
      tracks: [ _0x84b660_63(_0x84b660_0), ..._0x84b660_6 ]
    };
    _0x84b660_34.push(_0x84b660_7), await _0x84b660_9a(), _0x84b660_96(_0x84b660_7.id), 
    _0x84b660_16.textContent = _0x84b660_5 ? `\x43\x72\x65\x61\x74\x65\x64\x20${_0x84b660_7.name}\x20\x77\x69\x74\x68\x20${_0x84b660_0.title}\x3b\x20\x6d\x6f\x72\x65\x20\x6d\x61\x74\x63\x68\x65\x73\x20\x77\x65\x72\x65\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x2e` : `\x43\x72\x65\x61\x74\x65\x64\x20${_0x84b660_7.name}\x20\x77\x69\x74\x68\x20${_0x84b660_7.tracks.length}\x20${1 === _0x84b660_7.tracks.length ? "\x73\x6f\x6e\x67" : "\x73\x6f\x6e\x67\x73"}\x2e`;
  } catch (_0x84b660_7) {
    _0x84b660_16.textContent = `\x43\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x63\x72\x65\x61\x74\x65\x20\x74\x68\x65\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x3a\x20${_0x84b660_7.message}`, 
    _0x84b660_1?.isConnected && (_0x84b660_1.disabled = !1);
  }
}

async function _0x84b660_a0() {
  _0x84b660_34 = _0x84b660_66(), _0x84b660_93();
  const _0x84b660_0 = _0x84b660_39;
  try {
    const _0x84b660_1 = await _0x84b660_6b("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6e\x79\x78\x69\x66\x79\x2f\x70\x6c\x61\x79\x6c\x69\x73\x74\x73");
    if (!_0x84b660_1) return void (_0x84b660_12.textContent = "\x53\x61\x76\x65\x64\x20\x6f\x6e\x20\x74\x68\x69\x73\x20\x64\x65\x76\x69\x63\x65");
    if (_0x84b660_39 !== _0x84b660_0) return void await _0x84b660_38;
    const _0x84b660_2 = Array.isArray(_0x84b660_1.playlists) ? _0x84b660_1.playlists : [];
    if (!_0x84b660_2.length && _0x84b660_34.length) return void await _0x84b660_9a();
    _0x84b660_34 = _0x84b660_2, _0x84b660_67(), _0x84b660_93(), _0x84b660_12.textContent = "\x53\x79\x6e\x63\x65\x64\x20\x74\x6f\x20\x79\x6f\x75\x72\x20\x61\x63\x63\x6f\x75\x6e\x74";
  } catch (_0x84b660_1) {
    _0x84b660_12.textContent = "\x53\x61\x76\x65\x64\x20\x6c\x6f\x63\x61\x6c\x6c\x79\x20\xb7\x20\x61\x63\x63\x6f\x75\x6e\x74\x20\x73\x79\x6e\x63\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65";
  }
}

function _0x84b660_a1() {
  const _0x84b660_0 = _0x84b660_6d();
  document.getElementById("\x6c\x69\x6b\x65\x64\x43\x6f\x75\x6e\x74").textContent = _0x84b660_0.length, _0x84b660_89(document.getElementById("\x6c\x69\x6b\x65\x64\x4c\x69\x73\x74"), _0x84b660_0, "\x53\x6f\x6e\x67\x73\x20\x79\x6f\x75\x20\x6c\x69\x6b\x65\x20\x77\x69\x6c\x6c\x20\x61\x70\x70\x65\x61\x72\x20\x68\x65\x72\x65\x2e"), 
  _0x84b660_89(document.getElementById("\x68\x69\x73\x74\x6f\x72\x79\x4c\x69\x73\x74"), _0x84b660_70(), "\x53\x6f\x6e\x67\x73\x20\x79\x6f\x75\x20\x70\x6c\x61\x79\x20\x77\x69\x6c\x6c\x20\x61\x70\x70\x65\x61\x72\x20\x68\x65\x72\x65\x2e"), 
  _0x84b660_27 && _0x84b660_73(document.getElementById("\x70\x4c\x69\x6b\x65"), _0x84b660_6e(_0x84b660_27.id)), 
  document.querySelectorAll("\x23\x74\x72\x61\x63\x6b\x4c\x69\x73\x74\x20\x2e\x72\x6f\x77\x2c\x20\x23\x64\x65\x74\x61\x69\x6c\x56\x69\x65\x77\x20\x2e\x72\x6f\x77").forEach(_0x84b660_0 => {
    const _0x84b660_1 = _0x84b660_0.querySelector("\x2e\x6c\x69\x6b\x65\x2d\x62\x74\x6e");
    _0x84b660_1 && _0x84b660_73(_0x84b660_1, _0x84b660_6e(_0x84b660_0.dataset.id));
  });
}

_0x84b660_5b(), _0x84b660_a.addEventListener("\x63\x6c\x69\x63\x6b", () => {
  if (++_0x84b660_2f, _0x84b660_32) {
    const _0x84b660_0 = _0x84b660_32;
    return _0x84b660_32 = "", _0x84b660_96(_0x84b660_0);
  }
  _0x84b660_2e = null, _0x84b660_31 = "", _0x84b660_87();
}), document.querySelectorAll("\x2e\x66\x69\x6c\x74\x65\x72").forEach(_0x84b660_0 => {
  _0x84b660_0.addEventListener("\x63\x6c\x69\x63\x6b", () => {
    ++_0x84b660_2f, _0x84b660_32 = "", _0x84b660_2e = null, _0x84b660_31 = "", _0x84b660_78(_0x84b660_0.dataset.filter), 
    "\x68\x6f\x6d\x65" === _0x84b660_0.dataset.filter && (_0x84b660_28 = "", _0xf24d16_18 = [], 
    _0x84b660_f.value = ""), _0x84b660_87();
  });
}), document.getElementById("\x6e\x65\x77\x50\x6c\x61\x79\x6c\x69\x73\x74\x42\x74\x6e").addEventListener("\x63\x6c\x69\x63\x6b", () => _0x84b660_95()), 
document.getElementById("\x73\x69\x64\x65\x62\x61\x72\x4e\x65\x77\x50\x6c\x61\x79\x6c\x69\x73\x74").addEventListener("\x63\x6c\x69\x63\x6b", () => _0x84b660_95()), 
document.getElementById("\x70\x6c\x61\x79\x6c\x69\x73\x74\x44\x69\x61\x6c\x6f\x67\x43\x6c\x6f\x73\x65").addEventListener("\x63\x6c\x69\x63\x6b", () => _0x84b660_13.close()), 
document.getElementById("\x70\x6c\x61\x79\x6c\x69\x73\x74\x43\x72\x65\x61\x74\x65\x46\x6f\x72\x6d").addEventListener("\x73\x75\x62\x6d\x69\x74", _0x84b660_0 => {
  _0x84b660_0.preventDefault();
  const _0x84b660_1 = _0x84b660_15.value.trim().slice(0, 48);
  if (!_0x84b660_1) return _0x84b660_16.textContent = "\x45\x6e\x74\x65\x72\x20\x61\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x6e\x61\x6d\x65\x2e", void _0x84b660_15.focus();
  if (_0x84b660_34.length >= 16) return void (_0x84b660_16.textContent = "\x59\x6f\x75\x20\x63\x61\x6e\x20\x68\x61\x76\x65\x20\x75\x70\x20\x74\x6f\x20\x31\x36\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x73\x2e");
  if (_0x84b660_34.some(_0x84b660_0 => _0x84b660_0.name.toLowerCase() === _0x84b660_1.toLowerCase())) return void (_0x84b660_16.textContent = "\x41\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x77\x69\x74\x68\x20\x74\x68\x61\x74\x20\x6e\x61\x6d\x65\x20\x61\x6c\x72\x65\x61\x64\x79\x20\x65\x78\x69\x73\x74\x73\x2e");
  const _0x84b660_2 = {
    id: _0x84b660_6c(),
    name: _0x84b660_1,
    cover: "",
    accent: "",
    tracks: _0x84b660_33 ? [ _0x84b660_63(_0x84b660_33) ] : []
  };
  _0x84b660_34.push(_0x84b660_2), _0x84b660_15.value = "", _0x84b660_16.textContent = _0x84b660_33 ? `\x43\x72\x65\x61\x74\x65\x64\x20${_0x84b660_1}\x20\x61\x6e\x64\x20\x61\x64\x64\x65\x64\x20\x74\x68\x65\x20\x73\x6f\x6e\x67\x2e` : `\x43\x72\x65\x61\x74\x65\x64\x20${_0x84b660_1}\x2e`, 
  _0x84b660_9a(), _0x84b660_33 || (_0x84b660_13.close(), _0x84b660_96(_0x84b660_2.id));
}), _0x84b660_17.disabled = !0, _0x84b660_17.addEventListener("\x63\x6c\x69\x63\x6b", () => {
  _0x84b660_27 && _0x84b660_95(_0x84b660_27);
}), document.getElementById("\x73\x65\x61\x72\x63\x68\x46\x6f\x72\x6d").addEventListener("\x73\x75\x62\x6d\x69\x74", async _0x84b660_0 => {
  _0x84b660_0.preventDefault();
  const _0x84b660_1 = _0x84b660_f.value.trim();
  if (!_0x84b660_1) return;
  const _0x84b660_2 = ++_0x84b660_2f;
  _0x84b660_28 = _0x84b660_1, _0xf24d16_18 = [], _0x84b660_2e = null, _0x84b660_31 = "", 
  _0x84b660_7b();
  try {
    const _0x84b660_0 = await _0x84b660_57(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6e\x79\x78\x69\x66\x79\x2f\x73\x65\x61\x72\x63\x68\x3f\x71\x3d${encodeURIComponent(_0x84b660_1)}`);
    if (_0x84b660_2 !== _0x84b660_2f) return;
    _0xf24d16_18 = Array.isArray(_0x84b660_0.data) ? _0x84b660_0.data : [], _0x84b660_78("\x68\x6f\x6d\x65"), 
    _0x84b660_87();
  } catch (_0x84b660_3) {
    if (_0x84b660_2 !== _0x84b660_2f) return;
    _0x84b660_32 ? (_0x84b660_28 = _0x84b660_1, _0xf24d16_18 = [], _0x84b660_99(), _0x84b660_16.textContent = `\x53\x65\x61\x72\x63\x68\x20\x66\x61\x69\x6c\x65\x64\x3a\x20${_0x84b660_3.message}`) : _0x84b660_7a("\x53\x65\x61\x72\x63\x68\x20\x66\x61\x69\x6c\x65\x64", _0x84b660_3.message, !0);
  }
});

const _0x84b660_a2 = document.getElementById("\x64\x6c\x42\x74\x6e");

function _0x84b660_a3() {
  if (!_0x84b660_51) return void (document.body.style.paddingBottom = "");
  const _0x84b660_0 = _0x84b660_3.getBoundingClientRect().height;
  document.body.style.paddingBottom = Math.ceil(_0x84b660_0 + 14 + 26) + "\x70\x78";
}

function _0x84b660_a4(_0x84b660_0) {
  _0x84b660_51 !== _0x84b660_0 && (_0x84b660_51 = _0x84b660_0, _0x84b660_3.classList.toggle("\x76\x69\x73\x69\x62\x6c\x65", _0x84b660_0), 
  _0x84b660_3.toggleAttribute("\x69\x6e\x65\x72\x74", !_0x84b660_0), _0x84b660_0 || _0x84b660_d1(!1), 
  requestAnimationFrame(_0x84b660_a3));
}

function _0x84b660_a5(_0x84b660_0) {
  const _0x84b660_1 = _0x84b660_34.find(_0x84b660_0 => _0x84b660_0.id === _0x84b660_31) || _0x84b660_34.find(_0x84b660_1 => _0x84b660_1.tracks === _0x84b660_0);
  return _0x84b660_1 ? `\x50\x6c\x61\x79\x6c\x69\x73\x74\x20\xb7\x20${_0x84b660_1.name}` : _0x84b660_2e?.name ? `${"\x61\x72\x74\x69\x73\x74" === _0x84b660_2e.type ? "\x41\x72\x74\x69\x73\x74" : "\x41\x6c\x62\x75\x6d"}\x20\xb7\x20${_0x84b660_2e.name}` : _0x84b660_28 ? `\x53\x65\x61\x72\x63\x68\x20\xb7\x20${_0x84b660_28}` : _0x84b660_0 === _0x84b660_2a.tracks || Array.isArray(_0x84b660_0) && _0x84b660_0.length && _0x84b660_0.every(_0x84b660_0 => _0x84b660_2a.tracks.some(_0x84b660_1 => _0x84b660_1.id === _0x84b660_0.id)) ? "\x50\x6f\x70\x75\x6c\x61\x72\x20\x74\x68\x69\x73\x20\x77\x65\x65\x6b" : "\x4e\x79\x78\x69\x66\x79";
}

function _0x84b660_a6() {
  if (_0x84b660_18.hidden = !_0x84b660_27, !_0x84b660_27) return;
  _0x84b660_54(_0x84b660_1a, _0x84b660_27.cover, `${_0x84b660_27.title}\x20\x63\x6f\x76\x65\x72`), _0x84b660_1b.textContent = _0x84b660_2d || "\x4e\x79\x78\x69\x66\x79", 
  _0x84b660_1c.textContent = _0x84b660_27.title, _0x84b660_1d.textContent = _0x84b660_27.artist || "\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x61\x72\x74\x69\x73\x74", 
  _0x84b660_1d.disabled = !_0x84b660_27.artistId, _0x84b660_1d.onclick = () => {
    _0x84b660_27?.artistId && _0x84b660_85("\x61\x72\x74\x69\x73\x74", _0x84b660_27.artistId, _0x84b660_27.artist);
  }, _0x84b660_1e.hidden = !_0x84b660_27.album, _0x84b660_1e.textContent = _0x84b660_27.album || "", 
  _0x84b660_1e.disabled = !_0x84b660_27.albumId, _0x84b660_1e.onclick = () => {
    _0x84b660_27?.albumId && _0x84b660_85("\x61\x6c\x62\x75\x6d", _0x84b660_27.albumId, _0x84b660_27.album);
  };
  const _0x84b660_0 = _0x84b660_34.filter(_0x84b660_0 => _0x84b660_0.tracks.some(_0x84b660_0 => _0x84b660_0.id === _0x84b660_27.id));
  if (_0x84b660_1f.innerHTML = "", _0x84b660_0.length) {
    const _0x84b660_1 = document.createElement("\x73\x70\x61\x6e");
    _0x84b660_1.textContent = "\x49\x6e\x20\x79\x6f\x75\x72\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x73", _0x84b660_1f.appendChild(_0x84b660_1), 
    _0x84b660_0.forEach(_0x84b660_0 => {
      const _0x84b660_1 = document.createElement("\x62\x75\x74\x74\x6f\x6e");
      _0x84b660_1.type = "\x62\x75\x74\x74\x6f\x6e", _0x84b660_1.textContent = _0x84b660_0.name, _0x84b660_1.addEventListener("\x63\x6c\x69\x63\x6b", () => _0x84b660_96(_0x84b660_0.id)), 
      _0x84b660_1f.appendChild(_0x84b660_1);
    });
  }
  const _0x84b660_1 = _0x84b660_3d[_0x84b660_3e + 1];
  if (_0x84b660_20.innerHTML = "", _0x84b660_1) {
    const _0x84b660_0 = document.createElement("\x73\x70\x61\x6e");
    _0x84b660_0.textContent = "\x4e\x65\x78\x74\x20\x69\x6e\x20\x71\x75\x65\x75\x65";
    const _0x84b660_2 = document.createElement("\x62\x75\x74\x74\x6f\x6e");
    _0x84b660_2.type = "\x62\x75\x74\x74\x6f\x6e", _0x84b660_2.textContent = `${_0x84b660_1.title}\x20\xb7\x20${_0x84b660_1.artist}`, 
    _0x84b660_2.addEventListener("\x63\x6c\x69\x63\x6b", () => _0x84b660_c4(_0x84b660_3e + 1)), _0x84b660_20.append(_0x84b660_0, _0x84b660_2);
  }
}

function _0x84b660_a7() {
  let _0x84b660_0 = document.getElementById("\x66\x75\x6c\x6c\x54\x72\x61\x63\x6b\x46\x72\x61\x6d\x65");
  if (!_0x84b660_0 || "\x49\x46\x52\x41\x4d\x45" === _0x84b660_0.tagName) {
    const _0x84b660_1 = document.createElement("\x64\x69\x76");
    _0x84b660_1.id = "\x66\x75\x6c\x6c\x54\x72\x61\x63\x6b\x46\x72\x61\x6d\x65", _0x84b660_0 ? _0x84b660_0.replaceWith(_0x84b660_1) : _0x84b660_19.appendChild(_0x84b660_1), 
    _0x84b660_0 = _0x84b660_1;
  }
  return _0x84b660_0;
}

function _0x84b660_a8() {
  return /\bCrOS\b/i.test(navigator.userAgent) ? Promise.resolve(_0x84b660_48) : window.YT?.Player ? Promise.resolve(window.YT) : _0x84b660_44 || (_0x84b660_44 = new Promise(_0x84b660_0 => {
    const _0x84b660_1 = window.onYouTubeIframeAPIReady;
    let _0x84b660_2 = !1;
    const _0x84b660_3 = _0x84b660_1 => {
      _0x84b660_2 || (_0x84b660_2 = !0, clearTimeout(_0x84b660_4), _0x84b660_0(_0x84b660_1));
    }, _0x84b660_4 = setTimeout(() => _0x84b660_3(_0x84b660_48), 5e3);
    window.onYouTubeIframeAPIReady = () => {
      try {
        _0x84b660_1?.();
      } catch (_0x84b660_0) {}
      _0x84b660_3(window.YT?.Player ? window.YT : _0x84b660_48);
    };
    let _0x84b660_5 = document.querySelector("\x73\x63\x72\x69\x70\x74\x5b\x64\x61\x74\x61\x2d\x6e\x79\x78\x2d\x6f\x63\x74\x61\x76\x65\x2d\x70\x6c\x61\x79\x65\x72\x5d");
    _0x84b660_5 || (_0x84b660_5 = document.createElement("\x73\x63\x72\x69\x70\x74"), _0x84b660_5.src = "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x79\x6f\x75\x74\x75\x62\x65\x2e\x63\x6f\x6d\x2f\x69\x66\x72\x61\x6d\x65\x5f\x61\x70\x69", 
    _0x84b660_5.async = !0, _0x84b660_5.dataset.nyxOctavePlayer = "\x31", _0x84b660_5.addEventListener("\x65\x72\x72\x6f\x72", () => _0x84b660_3(_0x84b660_48), {
      once: !0
    }), document.head.appendChild(_0x84b660_5));
  }), _0x84b660_44);
}

function _0x84b660_a9() {
  null != _0x84b660_43 && clearInterval(_0x84b660_43), _0x84b660_43 = null;
}

function _0x84b660_aa() {
  _0x84b660_a9(), _0x84b660_43 = setInterval(() => {
    if ("\x6f\x63\x74\x61\x76\x65" !== _0x84b660_3f || _0x84b660_30 || !_0x84b660_40) return;
    const _0x84b660_0 = Number(_0x84b660_40.getCurrentTime?.()) || 0, _0x84b660_1 = Number(_0x84b660_40.getDuration?.()) || Number(_0x84b660_27?.duration) || 0;
    _0x84b660_1 && (document.getElementById("\x74\x69\x6d\x65\x54\x6f\x74\x61\x6c").textContent = _0x84b660_55(_0x84b660_1)), 
    _0x84b660_d9(_0x84b660_0), _0x84b660_f4();
  }, 500);
}

function _0x84b660_ab() {
  _0x84b660_a9();
  try {
    _0x84b660_40?.stopVideo?.();
  } catch (_0x84b660_0) {}
  try {
    _0x84b660_40?.destroy?.();
  } catch (_0x84b660_0) {}
  _0x84b660_40 = null, _0x84b660_41 = !1, _0x84b660_45 = !1, _0x84b660_a7(), _0x84b660_21.hidden = !0, 
  _0x84b660_21.dataset.playbackState = "\x69\x64\x6c\x65";
}

function _0x84b660_ac(_0x84b660_0, _0x84b660_2 = !1) {
  _0x84b660_2 && (_0x84b660_47 = Boolean(_0x84b660_0), _0x84b660_1.setItem("\x6e\x79\x78\x5f\x6e\x79\x78\x69\x66\x79\x5f\x76\x69\x64\x65\x6f\x5f\x69\x6e\x5f\x63\x6f\x76\x65\x72", _0x84b660_47 ? "\x31" : "\x30"));
  const _0x84b660_3 = Boolean(_0x84b660_0 && _0x84b660_46);
  if (_0x84b660_19.classList.toggle("\x69\x73\x2d\x76\x69\x64\x65\x6f", _0x84b660_3), _0x84b660_24.setAttribute("\x61\x72\x69\x61\x2d\x70\x72\x65\x73\x73\x65\x64", String(_0x84b660_3)), 
  _0x84b660_24.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", _0x84b660_3 ? "\x53\x77\x69\x74\x63\x68\x20\x74\x6f\x20\x61\x6c\x62\x75\x6d\x20\x63\x6f\x76\x65\x72" : _0x84b660_46 ? "\x53\x77\x69\x74\x63\x68\x20\x74\x6f\x20\x6d\x75\x73\x69\x63\x20\x76\x69\x64\x65\x6f" : "\x4d\x75\x73\x69\x63\x20\x76\x69\x64\x65\x6f\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65"), 
  _0x84b660_25.textContent = _0x84b660_3 ? "\x53\x77\x69\x74\x63\x68\x20\x74\x6f\x20\x63\x6f\x76\x65\x72" : "\x53\x77\x69\x74\x63\x68\x20\x74\x6f\x20\x76\x69\x64\x65\x6f", 
  _0x84b660_26.hidden = !_0x84b660_3, _0x84b660_26.disabled = !_0x84b660_3, !_0x84b660_3 && (document.fullscreenElement === _0x84b660_19 || document.webkitFullscreenElement === _0x84b660_19)) {
    const _0x84b660_0 = document.exitFullscreen || document.webkitExitFullscreen;
    _0x84b660_0 && Promise.resolve(_0x84b660_0.call(document)).catch(() => {});
  }
}

function _0x84b660_ad() {
  const _0x84b660_0 = document.fullscreenElement === _0x84b660_19 || document.webkitFullscreenElement === _0x84b660_19;
  _0x84b660_26.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", _0x84b660_0 ? "\x45\x78\x69\x74\x20\x66\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e" : "\x45\x6e\x74\x65\x72\x20\x66\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e"), 
  _0x84b660_26.title = _0x84b660_0 ? "\x45\x78\x69\x74\x20\x66\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e" : "\x45\x6e\x74\x65\x72\x20\x66\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e";
}

async function _0x84b660_ae() {
  if (!_0x84b660_19.classList.contains("\x69\x73\x2d\x76\x69\x64\x65\x6f")) return;
  const _0x84b660_0 = document.fullscreenElement === _0x84b660_19 || document.webkitFullscreenElement === _0x84b660_19, _0x84b660_1 = _0x84b660_0 ? document.exitFullscreen || document.webkitExitFullscreen : _0x84b660_19.requestFullscreen || _0x84b660_19.webkitRequestFullscreen;
  if (_0x84b660_1) {
    try {
      await Promise.resolve(_0x84b660_1.call(_0x84b660_0 ? document : _0x84b660_19));
    } catch {
      const _0x84b660_0 = document.querySelector("\x23\x66\x75\x6c\x6c\x54\x72\x61\x63\x6b\x46\x72\x61\x6d\x65\x20\x69\x66\x72\x61\x6d\x65"), _0x84b660_1 = _0x84b660_0?.requestFullscreen || _0x84b660_0?.webkitRequestFullscreen;
      _0x84b660_1 && await Promise.resolve(_0x84b660_1.call(_0x84b660_0)).catch(() => {});
    }
    _0x84b660_ad();
  }
}

function _0x84b660_af(_0x84b660_0 = null) {
  _0x84b660_46 = _0x84b660_0 && /^[A-Za-z0-9_-]{11}$/.test(String(_0x84b660_0.videoId || "")) ? _0x84b660_0 : null, 
  _0x84b660_24.disabled = !_0x84b660_46, _0x84b660_24.hidden = !_0x84b660_46, _0x84b660_ac(Boolean(_0x84b660_46 && _0x84b660_47));
}

function _0x84b660_b0() {
  _0x84b660_42 += 1, _0x84b660_ab(), _0x84b660_af(), _0x84b660_3f = "\x69\x64\x6c\x65", _0x84b660_b2 = !1, 
  document.getElementById("\x70\x6c\x61\x79\x42\x74\x6e").classList.remove("\x69\x73\x2d\x6c\x6f\x61\x64\x69\x6e\x67"), _0x84b660_2.pause(), 
  _0x84b660_2.removeAttribute("\x73\x72\x63"), _0x84b660_2.load(), _0x84b660_a2.hidden = !0, 
  _0x84b660_e.className = "\x6c\x69\x6e\x65\x2d\x6d\x64\x2d\x2d\x70\x6c\x61\x79\x2d\x66\x69\x6c\x6c\x65\x64";
}

function _0x84b660_b1(_0x84b660_0) {
  _0x84b660_bb(_0x84b660_0);
}

let _0x84b660_b2 = !1, _0x84b660_b3 = !0, _0x84b660_b4 = 0, _0x84b660_b5 = performance.now(), _0x84b660_b6 = 0;

const _0x84b660_b7 = document.getElementById("\x6d\x75\x73\x69\x63\x50\x6c\x61\x79\x62\x61\x63\x6b\x53\x74\x61\x74\x75\x73");

function _0x84b660_b8(_0x84b660_0, _0x84b660_1 = !1) {
  _0x84b660_b7.textContent = _0x84b660_0, document.getElementById("\x70\x6c\x61\x79\x65\x72\x50\x6c\x61\x79\x62\x61\x63\x6b\x53\x74\x61\x74\x75\x73").textContent = _0x84b660_0, 
  _0x84b660_23.textContent = _0x84b660_0, document.getElementById("\x70\x6c\x61\x79\x42\x74\x6e").classList.toggle("\x69\x73\x2d\x6c\x6f\x61\x64\x69\x6e\x67", _0x84b660_1), 
  requestAnimationFrame(_0x84b660_a3);
}

function _0x84b660_b9(_0x84b660_0, _0x84b660_1) {
  return new Promise((_0x84b660_3, _0x84b660_4) => {
    const _0x84b660_5 = _0x84b660_0 => {
      clearTimeout(_0x84b660_8), _0x84b660_2.removeEventListener("\x6c\x6f\x61\x64\x65\x64\x6d\x65\x74\x61\x64\x61\x74\x61", _0x84b660_6), 
      _0x84b660_2.removeEventListener("\x65\x72\x72\x6f\x72", _0x84b660_7), _0x84b660_0 ? _0x84b660_4(_0x84b660_0) : _0x84b660_3();
    }, _0x84b660_6 = () => {
      if (!_0x84b660_1()) return _0x84b660_5(new DOMException("\x53\x75\x70\x65\x72\x73\x65\x64\x65\x64\x20\x70\x6c\x61\x79\x62\x61\x63\x6b", "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72"));
      const _0x84b660_3 = Number(_0x84b660_2.duration), _0x84b660_4 = Number(_0x84b660_0);
      if (!(Number.isFinite(_0x84b660_3) && _0x84b660_3 > 0 && _0x84b660_4 > 0) || Math.abs(_0x84b660_3 - _0x84b660_4) > Math.max(4, .03 * _0x84b660_4)) return _0x84b660_5(new Error("\x54\x68\x65\x20\x70\x72\x6f\x76\x69\x64\x65\x72\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x20\x64\x69\x66\x66\x65\x72\x65\x6e\x74\x20\x6f\x72\x20\x69\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x72\x65\x63\x6f\x72\x64\x69\x6e\x67\x2e"));
      _0x84b660_5();
    }, _0x84b660_7 = () => _0x84b660_5(new Error("\x46\x75\x6c\x6c\x20\x61\x75\x64\x69\x6f\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x6c\x6f\x61\x64\x2e")), _0x84b660_8 = setTimeout(() => _0x84b660_5(new Error("\x46\x75\x6c\x6c\x20\x61\x75\x64\x69\x6f\x20\x74\x6f\x6f\x6b\x20\x74\x6f\x6f\x20\x6c\x6f\x6e\x67\x20\x74\x6f\x20\x6c\x6f\x61\x64\x2e")), 2e4);
    _0x84b660_2.addEventListener("\x6c\x6f\x61\x64\x65\x64\x6d\x65\x74\x61\x64\x61\x74\x61", _0x84b660_6), _0x84b660_2.addEventListener("\x65\x72\x72\x6f\x72", _0x84b660_7), 
    _0x84b660_2.load();
  });
}

async function _0x84b660_ba(_0x84b660_0, _0x84b660_1, _0x84b660_3 = 0) {
  _0x84b660_b2 = !0, _0x84b660_b5 = performance.now(), _0x84b660_b6 = _0x84b660_3, 
  _0x84b660_3f = "\x6d\x65\x74\x69\x6e\x67", _0x84b660_af(), _0x84b660_2.pause(), _0x84b660_2.removeAttribute("\x73\x72\x63"), 
  _0x84b660_2.load(), _0x84b660_22.textContent = _0x84b660_0.title || "\x46\x75\x6c\x6c\x20\x74\x72\x61\x63\x6b", 
  _0x84b660_b8("\x46\x69\x6e\x64\x69\x6e\x67\x20\x74\x68\x65\x20\x66\x75\x6c\x6c\x20\x73\x6f\x6e\x67\u2026", !0), _0x84b660_e.className = _0x84b660_b3 ? "\x6d\x61\x74\x65\x72\x69\x61\x6c\x2d\x73\x79\x6d\x62\x6f\x6c\x73\x2d\x2d\x70\x61\x75\x73\x65\x2d\x72\x6f\x75\x6e\x64\x65\x64" : "\x6c\x69\x6e\x65\x2d\x6d\x64\x2d\x2d\x70\x6c\x61\x79\x2d\x66\x69\x6c\x6c\x65\x64";
  try {
    const _0x84b660_5 = await _0x84b660_5f(_0x84b660_0);
    if (_0x84b660_1 !== _0x84b660_42 || _0x84b660_27 !== _0x84b660_0) return;
    if (!_0x84b660_59(_0x84b660_5)) throw new Error("\x4e\x6f\x20\x6d\x61\x74\x63\x68\x69\x6e\x67\x20\x66\x75\x6c\x6c\x20\x72\x65\x63\x6f\x72\x64\x69\x6e\x67\x20\x69\x73\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x2e");
    if (_0x84b660_d4 = _0x84b660_3 > 0 ? _0x84b660_3 : null, _0x84b660_2.src = _0x84b660_5.streamUrl, 
    await _0x84b660_b9(_0x84b660_5.durationSeconds, () => _0x84b660_1 === _0x84b660_42 && _0x84b660_27 === _0x84b660_0), 
    _0x84b660_1 !== _0x84b660_42 || _0x84b660_27 !== _0x84b660_0) return;
    if (_0x84b660_b2 = !1, _0x84b660_b5 = performance.now(), _0x84b660_b8("\x4c\x6f\x61\x64\x69\x6e\x67\x20\x66\x75\x6c\x6c\x20\x73\x6f\x6e\x67\u2026", !0), 
    _0x84b660_a2.hidden = !0, _0x84b660_60(), _0x84b660_b3) try {
      await _0x84b660_2.play();
    } catch (_0x84b660_4) {
      if (_0x84b660_1 !== _0x84b660_42 || _0x84b660_27 !== _0x84b660_0) return;
      "\x4e\x6f\x74\x41\x6c\x6c\x6f\x77\x65\x64\x45\x72\x72\x6f\x72" === _0x84b660_4.name ? (_0x84b660_b3 = !1, _0x84b660_b8("\x46\x75\x6c\x6c\x20\x73\x6f\x6e\x67\x20\x72\x65\x61\x64\x79\x20\u2014\x20\x70\x72\x65\x73\x73\x20\x70\x6c\x61\x79\x2e")) : "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72" === _0x84b660_4.name || _0x84b660_2.error || _0x84b660_b8("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x73\x74\x61\x72\x74\x20\x61\x75\x64\x69\x6f\x2e\x20\x50\x72\x65\x73\x73\x20\x70\x6c\x61\x79\x20\x74\x6f\x20\x72\x65\x74\x72\x79\x2e");
    } else _0x84b660_b8("\x46\x75\x6c\x6c\x20\x73\x6f\x6e\x67\x20\x72\x65\x61\x64\x79\x20\u2014\x20\x70\x72\x65\x73\x73\x20\x70\x6c\x61\x79\x2e");
  } catch (_0x84b660_4) {
    if (_0x84b660_1 !== _0x84b660_42 || _0x84b660_27 !== _0x84b660_0) return;
    if (!navigator.onLine) return _0x84b660_b2 = !1, void _0x84b660_b8("\x59\x6f\x75\u2019\x72\x65\x20\x6f\x66\x66\x6c\x69\x6e\x65\x2e\x20\x50\x6c\x61\x79\x62\x61\x63\x6b\x20\x77\x69\x6c\x6c\x20\x72\x65\x74\x72\x79\x20\x77\x68\x65\x6e\x20\x63\x6f\x6e\x6e\x65\x63\x74\x65\x64\x2e");
    if ("\x46\x75\x6c\x6c\x20\x61\x75\x64\x69\x6f\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x6c\x6f\x61\x64\x2e" === _0x84b660_4.message && _0x84b660_b4 < 1) return _0x84b660_b2 = !1, 
    void _0x84b660_bc(_0x84b660_4.message);
    _0x84b660_bb(_0x84b660_4.message);
  }
}

function _0x84b660_bb(_0x84b660_0) {
  _0x84b660_5d(_0x84b660_27), _0x84b660_b0(), _0x84b660_b8(_0x84b660_0 + "\x20\x46\x75\x6c\x6c\x2d\x73\x6f\x6e\x67\x20\x70\x6c\x61\x79\x62\x61\x63\x6b\x20\x69\x73\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x2e\x20\x50\x72\x65\x73\x73\x20\x70\x6c\x61\x79\x20\x74\x6f\x20\x72\x65\x74\x72\x79\x2e");
}

function _0x84b660_bc(_0x84b660_0) {
  if ("\x6d\x65\x74\x69\x6e\x67" === _0x84b660_3f && !_0x84b660_b2 && _0x84b660_27) if (0 === _0x84b660_b4++) {
    const _0x84b660_0 = _0x84b660_2.currentTime || 0;
    _0x84b660_5d(_0x84b660_27), _0x84b660_ba(_0x84b660_27, _0x84b660_42, _0x84b660_0);
  } else _0x84b660_bb(_0x84b660_0);
}

function _0x84b660_bd() {
  return _0x84b660_b2 ? !_0x84b660_b3 : "\x6f\x63\x74\x61\x76\x65" === _0x84b660_3f ? !_0x84b660_41 : _0x84b660_2.paused;
}

function _0x84b660_be() {
  if (_0x84b660_b3 = !0, _0x84b660_b5 = performance.now(), !_0x84b660_b2) return "\x69\x64\x6c\x65" === _0x84b660_3f && _0x84b660_27 ? (_0x84b660_b4 = 0, 
  void _0x84b660_ba(_0x84b660_27, _0x84b660_42)) : void ("\x6f\x63\x74\x61\x76\x65" === _0x84b660_3f || _0x84b660_45 ? _0x84b660_40?.playVideo?.() : _0x84b660_2.play().catch(() => _0x84b660_b8("\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x70\x6c\x61\x79\x2e\x20\x53\x65\x6c\x65\x63\x74\x20\x74\x68\x65\x20\x73\x6f\x6e\x67\x20\x61\x67\x61\x69\x6e\x20\x74\x6f\x20\x72\x65\x74\x72\x79\x2e")));
  _0x84b660_e.className = "\x6d\x61\x74\x65\x72\x69\x61\x6c\x2d\x73\x79\x6d\x62\x6f\x6c\x73\x2d\x2d\x70\x61\x75\x73\x65\x2d\x72\x6f\x75\x6e\x64\x65\x64";
}

function _0x84b660_bf() {
  _0x84b660_b3 = !1, _0x84b660_b2 ? (_0x84b660_e.className = "\x6c\x69\x6e\x65\x2d\x6d\x64\x2d\x2d\x70\x6c\x61\x79\x2d\x66\x69\x6c\x6c\x65\x64", 
  _0x84b660_b8("\x53\x6f\x6e\x67\x20\x69\x73\x20\x6c\x6f\x61\x64\x69\x6e\x67\x20\u2014\x20\x70\x6c\x61\x79\x62\x61\x63\x6b\x20\x70\x61\x75\x73\x65\x64\x2e")) : "\x6d\x65\x74\x69\x6e\x67" === _0x84b660_3f && _0x84b660_b8("\x46\x75\x6c\x6c\x20\x73\x6f\x6e\x67\x20\x70\x61\x75\x73\x65\x64"), 
  "\x6f\x63\x74\x61\x76\x65" === _0x84b660_3f ? _0x84b660_40?.pauseVideo?.() : _0x84b660_2.pause();
}

function _0x84b660_c0() {
  return "\x6f\x63\x74\x61\x76\x65" === _0x84b660_3f ? Number(_0x84b660_40?.getCurrentTime?.()) || 0 : Number(_0x84b660_2.currentTime) || 0;
}

function _0x84b660_c1() {
  return "\x6f\x63\x74\x61\x76\x65" === _0x84b660_3f ? Number(_0x84b660_40?.getDuration?.()) || Number(_0x84b660_27?.duration) || 0 : isFinite(_0x84b660_2.duration) && _0x84b660_2.duration ? _0x84b660_2.duration : Number(_0x84b660_27?.duration) || 0;
}

function _0x84b660_c2(_0x84b660_0) {
  "\x6f\x63\x74\x61\x76\x65" === _0x84b660_3f ? _0x84b660_40?.seekTo?.(_0x84b660_0, !0) : _0x84b660_2.currentTime = _0x84b660_0;
}

function _0x84b660_c3(_0x84b660_0, _0x84b660_1, _0x84b660_2 = "") {
  ++_0x84b660_4e;
  for (const [_0x84b660_4, _0x84b660_5] of _0x84b660_4a) _0x84b660_4 !== _0x84b660_58(_0x84b660_0) && _0x84b660_5.controller.abort();
  _0x84b660_de();
  const _0x84b660_3 = _0x84b660_2 || _0x84b660_a5(_0x84b660_1);
  _0x84b660_27 = _0x84b660_0, _0x84b660_3d = (_0x84b660_1 || _0xf24d16_18).slice(), 
  _0x84b660_3e = _0x84b660_3d.findIndex(_0x84b660_1 => _0x84b660_1.id === _0x84b660_0.id), 
  -1 === _0x84b660_3e && (_0x84b660_3d.unshift(_0x84b660_0), _0x84b660_3e = 0), _0x84b660_2d = _0x84b660_3, 
  _0x84b660_71(_0x84b660_0), _0x84b660_b0(), _0x84b660_b4 = 0, _0x84b660_b3 = !0, 
  _0x84b660_ba(_0x84b660_0, _0x84b660_42), _0x84b660_54(document.getElementById("\x70\x41\x72\x74"), _0x84b660_0.cover, `${_0x84b660_0.title}\x20\x63\x6f\x76\x65\x72`), 
  document.getElementById("\x70\x54\x69\x74\x6c\x65").textContent = _0x84b660_0.title, document.getElementById("\x70\x54\x69\x74\x6c\x65").title = _0x84b660_0.title, 
  document.getElementById("\x70\x41\x72\x74\x69\x73\x74").textContent = _0x84b660_0.artist, document.getElementById("\x70\x41\x72\x74\x69\x73\x74").title = _0x84b660_0.artist, 
  document.getElementById("\x74\x69\x6d\x65\x54\x6f\x74\x61\x6c").textContent = _0x84b660_55(_0x84b660_0.duration), 
  _0x84b660_a2.removeAttribute("\x68\x72\x65\x66"), _0x84b660_a2.hidden = !0, _0x84b660_a2.setAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64", `${_0x84b660_0.artist || "\x75\x6e\x6b\x6e\x6f\x77\x6e"}\x20\x2d\x20${_0x84b660_0.title || "\x73\x6f\x6e\x67"}\x2e\x6d\x70\x33`.replace(/["\\]/g, "")), 
  _0x84b660_a2.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", `\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x20${_0x84b660_0.title}`), _0x84b660_17.disabled = !1, 
  _0x84b660_f3(_0x84b660_0), _0x84b660_c.value = 0, _0x84b660_c.style.setProperty("\x2d\x2d\x66\x69\x6c\x6c", "\x30\x25"), 
  document.getElementById("\x74\x69\x6d\x65\x43\x75\x72").textContent = "\x30\x3a\x30\x30", _0x84b660_77(_0x84b660_0.id), 
  _0x84b660_a1(), _0x84b660_d2(), _0x84b660_a6(), _0x84b660_a4(!0);
}

function _0x84b660_c4(_0x84b660_0) {
  _0x84b660_0 >= 0 && _0x84b660_0 < _0x84b660_3d.length && _0x84b660_c3(_0x84b660_3d[_0x84b660_0], _0x84b660_3d, _0x84b660_2d);
}

function _0x84b660_c5() {
  _0x84b660_e.className = "\x6c\x69\x6e\x65\x2d\x6d\x64\x2d\x2d\x70\x6c\x61\x79\x2d\x66\x69\x6c\x6c\x65\x64", _0x84b660_c.value = 0, _0x84b660_c.style.setProperty("\x2d\x2d\x66\x69\x6c\x6c", "\x30\x25"), 
  document.getElementById("\x74\x69\x6d\x65\x43\x75\x72").textContent = "\x30\x3a\x30\x30";
}

function _0x84b660_c6(_0x84b660_0) {
  if (!_0x84b660_3d.length) return;
  if (_0x84b660_4f && _0x84b660_3d.length > 1) {
    let _0x84b660_0;
    do {
      _0x84b660_0 = Math.floor(Math.random() * _0x84b660_3d.length);
    } while (_0x84b660_0 === _0x84b660_3e);
    return _0x84b660_c4(_0x84b660_0);
  }
  let _0x84b660_1 = _0x84b660_3e + 1;
  if (_0x84b660_1 >= _0x84b660_3d.length) {
    if ("\x61\x6c\x6c" !== _0x84b660_50 && !_0x84b660_0) return _0x84b660_c5();
    _0x84b660_1 = 0;
  }
  _0x84b660_c4(_0x84b660_1);
}

function _0x84b660_c7() {
  _0x84b660_c0() > 3 ? _0x84b660_c2(0) : _0x84b660_3e > 0 ? _0x84b660_c4(_0x84b660_3e - 1) : _0x84b660_c2(0);
}

_0x84b660_2.addEventListener("\x70\x6c\x61\x79\x69\x6e\x67", () => {
  "\x6d\x65\x74\x69\x6e\x67" === _0x84b660_3f && _0x84b660_b8("\x50\x6c\x61\x79\x69\x6e\x67\x20\x66\x75\x6c\x6c\x20\x73\x6f\x6e\x67");
}), _0x84b660_2.addEventListener("\x77\x61\x69\x74\x69\x6e\x67", () => {
  "\x6d\x65\x74\x69\x6e\x67" === _0x84b660_3f && _0x84b660_b3 && _0x84b660_b8("\x42\x75\x66\x66\x65\x72\x69\x6e\x67\x20\x66\x75\x6c\x6c\x20\x73\x6f\x6e\x67\u2026", !0);
}), _0x84b660_2.addEventListener("\x63\x61\x6e\x70\x6c\x61\x79", () => {
  "\x6d\x65\x74\x69\x6e\x67" === _0x84b660_3f && _0x84b660_2.paused && _0x84b660_b8("\x46\x75\x6c\x6c\x20\x73\x6f\x6e\x67\x20\x72\x65\x61\x64\x79\x20\u2014\x20\x70\x72\x65\x73\x73\x20\x70\x6c\x61\x79\x2e");
}), _0x84b660_2.addEventListener("\x65\x72\x72\x6f\x72", () => {
  "\x6d\x65\x74\x69\x6e\x67" === _0x84b660_3f && !_0x84b660_b2 && _0x84b660_27 && _0x84b660_2.error && (navigator.onLine ? _0x84b660_bc("\x46\x75\x6c\x6c\x20\x61\x75\x64\x69\x6f\x20\x69\x73\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x20\x72\x69\x67\x68\x74\x20\x6e\x6f\x77\x2e") : _0x84b660_b8("\x59\x6f\x75\u2019\x72\x65\x20\x6f\x66\x66\x6c\x69\x6e\x65\x2e\x20\x50\x6c\x61\x79\x62\x61\x63\x6b\x20\x77\x69\x6c\x6c\x20\x72\x65\x74\x72\x79\x20\x77\x68\x65\x6e\x20\x63\x6f\x6e\x6e\x65\x63\x74\x65\x64\x2e"));
}), _0x84b660_2.addEventListener("\x74\x69\x6d\x65\x75\x70\x64\x61\x74\x65", () => {
  _0x84b660_2.currentTime !== _0x84b660_b6 && (_0x84b660_b6 = _0x84b660_2.currentTime, 
  _0x84b660_b5 = performance.now());
}), setInterval(() => {
  "\x6d\x65\x74\x69\x6e\x67" === _0x84b660_3f && !_0x84b660_b2 && _0x84b660_b3 && !_0x84b660_2.ended && navigator.onLine && performance.now() - _0x84b660_b5 > 45e3 && _0x84b660_bc("\x46\x75\x6c\x6c\x20\x61\x75\x64\x69\x6f\x20\x73\x74\x6f\x70\x70\x65\x64\x20\x72\x65\x73\x70\x6f\x6e\x64\x69\x6e\x67\x2e");
}, 5e3), window.addEventListener("\x6f\x66\x66\x6c\x69\x6e\x65", () => {
  "\x6d\x65\x74\x69\x6e\x67" === _0x84b660_3f && _0x84b660_b8("\x59\x6f\x75\u2019\x72\x65\x20\x6f\x66\x66\x6c\x69\x6e\x65\x2e\x20\x42\x75\x66\x66\x65\x72\x65\x64\x20\x61\x75\x64\x69\x6f\x20\x6d\x61\x79\x20\x63\x6f\x6e\x74\x69\x6e\x75\x65\x20\x70\x6c\x61\x79\x69\x6e\x67\x2e");
}), window.addEventListener("\x6f\x6e\x6c\x69\x6e\x65", () => {
  "\x6d\x65\x74\x69\x6e\x67" === _0x84b660_3f && _0x84b660_b3 && (_0x84b660_2.error || _0x84b660_2.readyState < 3) && _0x84b660_bc("\x46\x75\x6c\x6c\x20\x61\x75\x64\x69\x6f\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x72\x65\x63\x6f\x6e\x6e\x65\x63\x74\x2e");
}), _0x84b660_24.addEventListener("\x63\x6c\x69\x63\x6b", () => {
  _0x84b660_46 && _0x84b660_ac(!_0x84b660_19.classList.contains("\x69\x73\x2d\x76\x69\x64\x65\x6f"), !0);
}), _0x84b660_26.addEventListener("\x63\x6c\x69\x63\x6b", _0x84b660_ae), document.addEventListener("\x66\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e\x63\x68\x61\x6e\x67\x65", _0x84b660_ad), 
document.addEventListener("\x77\x65\x62\x6b\x69\x74\x66\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e\x63\x68\x61\x6e\x67\x65", _0x84b660_ad), _0x84b660_af(), 
document.getElementById("\x6e\x65\x78\x74\x42\x74\x6e").addEventListener("\x63\x6c\x69\x63\x6b", () => _0x84b660_c6(!0)), 
document.getElementById("\x70\x72\x65\x76\x42\x74\x6e").addEventListener("\x63\x6c\x69\x63\x6b", _0x84b660_c7), _0x84b660_2.addEventListener("\x65\x6e\x64\x65\x64", () => {
  if ("\x6f\x63\x74\x61\x76\x65" !== _0x84b660_3f) return _0x84b660_45 && _0x84b660_40 ? (_0x84b660_e.className = "\x6c\x69\x6e\x65\x2d\x6d\x64\x2d\x2d\x70\x6c\x61\x79\x2d\x66\x69\x6c\x6c\x65\x64", 
  _0x84b660_21.dataset.playbackState = "\x72\x65\x61\x64\x79", void (_0x84b660_23.textContent = "\x46\x75\x6c\x6c\x20\x73\x6f\x6e\x67\x20\x72\x65\x61\x64\x79\x20\x2d\x20\x70\x72\x65\x73\x73\x20\x70\x6c\x61\x79")) : "\x6f\x6e\x65" === _0x84b660_50 ? (_0x84b660_2.currentTime = 0, 
  void _0x84b660_be()) : void _0x84b660_c6(!1);
});

const _0x84b660_c8 = document.getElementById("\x73\x68\x75\x66\x66\x6c\x65\x42\x74\x6e");

_0x84b660_c8.classList.toggle("\x6f\x6e", _0x84b660_4f), _0x84b660_c8.setAttribute("\x61\x72\x69\x61\x2d\x70\x72\x65\x73\x73\x65\x64", String(_0x84b660_4f)), 
_0x84b660_c8.title = "\x73\x68\x75\x66\x66\x6c\x65\x3a\x20" + (_0x84b660_4f ? "\x6f\x6e" : "\x6f\x66\x66"), _0x84b660_c8.addEventListener("\x63\x6c\x69\x63\x6b", () => {
  _0x84b660_4f = !_0x84b660_4f, _0x84b660_1.setItem("\x6e\x79\x78\x5f\x6e\x79\x78\x69\x66\x79\x5f\x73\x68\x75\x66\x66\x6c\x65", _0x84b660_4f ? "\x31" : "\x30"), 
  _0x84b660_c8.classList.toggle("\x6f\x6e", _0x84b660_4f), _0x84b660_c8.setAttribute("\x61\x72\x69\x61\x2d\x70\x72\x65\x73\x73\x65\x64", String(_0x84b660_4f)), 
  _0x84b660_c8.title = "\x73\x68\x75\x66\x66\x6c\x65\x3a\x20" + (_0x84b660_4f ? "\x6f\x6e" : "\x6f\x66\x66");
});

const _0x84b660_c9 = document.getElementById("\x72\x65\x70\x65\x61\x74\x42\x74\x6e"), _0x84b660_ca = document.getElementById("\x72\x65\x70\x65\x61\x74\x49\x63\x6f\x6e"), _0x84b660_cb = {
  off: "\x61\x6c\x6c",
  all: "\x6f\x6e\x65",
  one: "\x6f\x66\x66"
};

function _0x84b660_cc() {
  const _0x84b660_0 = "\x61\x6c\x6c" === _0x84b660_50 ? "\x51\x75\x65\x75\x65" : "\x6f\x6e\x65" === _0x84b660_50 ? "\x53\x6f\x6e\x67" : "\x4f\x66\x66", _0x84b660_1 = "\x6f\x66\x66" === _0x84b660_50 ? "\x72\x65\x70\x65\x61\x74\x20\x74\x68\x65\x20\x71\x75\x65\x75\x65" : "\x61\x6c\x6c" === _0x84b660_50 ? "\x72\x65\x70\x65\x61\x74\x20\x74\x68\x69\x73\x20\x73\x6f\x6e\x67" : "\x74\x75\x72\x6e\x20\x72\x65\x70\x65\x61\x74\x20\x6f\x66\x66";
  _0x84b660_ca.className = "\x6f\x6e\x65" === _0x84b660_50 ? "\x69\x63\x2d\x72\x65\x70\x65\x61\x74\x2d\x6f\x6e\x65" : "\x69\x63\x2d\x72\x65\x70\x65\x61\x74", 
  _0x84b660_c9.classList.toggle("\x6f\x6e", "\x6f\x66\x66" !== _0x84b660_50), _0x84b660_c9.setAttribute("\x61\x72\x69\x61\x2d\x70\x72\x65\x73\x73\x65\x64", String("\x6f\x66\x66" !== _0x84b660_50)), 
  _0x84b660_c9.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", "\x52\x65\x70\x65\x61\x74\x3a\x20" + _0x84b660_0 + "\x2e\x20\x43\x6c\x69\x63\x6b\x20\x74\x6f\x20" + _0x84b660_1 + "\x2e"), 
  _0x84b660_c9.title = "\x52\x65\x70\x65\x61\x74\x3a\x20" + _0x84b660_0 + "\x2e\x20\x43\x6c\x69\x63\x6b\x20\x74\x6f\x20" + _0x84b660_1 + "\x2e";
}

_0x84b660_cc(), _0x84b660_c9.addEventListener("\x63\x6c\x69\x63\x6b", () => {
  _0x84b660_50 = _0x84b660_cb[_0x84b660_50], _0x84b660_1.setItem("\x6e\x79\x78\x5f\x6e\x79\x78\x69\x66\x79\x5f\x72\x65\x70\x65\x61\x74", _0x84b660_50), 
  _0x84b660_cc(), _0x84b660_60();
}), _0x84b660_d.addEventListener("\x63\x6c\x69\x63\x6b", () => {
  _0x84b660_27 ? _0x84b660_45 || _0x84b660_bd() ? _0x84b660_be() : _0x84b660_bf() : _0xf24d16_18.length ? _0x84b660_c3(_0xf24d16_18[0]) : _0x84b660_2a.tracks.length ? _0x84b660_c3(_0x84b660_2a.tracks[0], _0x84b660_2a.tracks, "\x50\x6f\x70\x75\x6c\x61\x72\x20\x74\x68\x69\x73\x20\x77\x65\x65\x6b") : _0x84b660_6d().length && _0x84b660_c3(_0x84b660_6d()[0]);
}), _0x84b660_2.addEventListener("\x70\x6c\x61\x79", () => {
  "\x6f\x63\x74\x61\x76\x65" !== _0x84b660_3f && (_0x84b660_e.className = "\x6d\x61\x74\x65\x72\x69\x61\x6c\x2d\x73\x79\x6d\x62\x6f\x6c\x73\x2d\x2d\x70\x61\x75\x73\x65\x2d\x72\x6f\x75\x6e\x64\x65\x64");
}), _0x84b660_2.addEventListener("\x70\x61\x75\x73\x65", () => {
  "\x6f\x63\x74\x61\x76\x65" !== _0x84b660_3f && (_0x84b660_e.className = "\x6c\x69\x6e\x65\x2d\x6d\x64\x2d\x2d\x70\x6c\x61\x79\x2d\x66\x69\x6c\x6c\x65\x64");
});

const _0x84b660_cd = document.getElementById("\x70\x4c\x69\x6b\x65");

_0x84b660_cd.addEventListener("\x63\x6c\x69\x63\x6b", _0x84b660_0 => {
  if (_0x84b660_0.stopPropagation(), !_0x84b660_27) return;
  const _0x84b660_1 = _0x84b660_6f(_0x84b660_27);
  _0x84b660_73(_0x84b660_cd, _0x84b660_1), _0x84b660_74(_0x84b660_cd), _0x84b660_a1();
});

const _0x84b660_ce = document.getElementById("\x71\x75\x65\x75\x65\x54\x6f\x67\x67\x6c\x65"), _0x84b660_cf = document.getElementById("\x71\x75\x65\x75\x65\x50\x61\x6e\x65\x6c"), _0x84b660_d0 = document.getElementById("\x71\x42\x61\x64\x67\x65");

function _0x84b660_d1(_0x84b660_0) {
  _0x84b660_52 = _0x84b660_0, _0x84b660_cf.classList.toggle("\x6f\x70\x65\x6e", _0x84b660_0), 
  _0x84b660_ce.classList.toggle("\x6f\x6e", _0x84b660_0), _0x84b660_ce.setAttribute("\x61\x72\x69\x61\x2d\x65\x78\x70\x61\x6e\x64\x65\x64", String(_0x84b660_0)), 
  _0x84b660_cf.setAttribute("\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e", String(!_0x84b660_0));
}

function _0x84b660_d2() {
  const _0x84b660_0 = document.getElementById("\x71\x4c\x69\x73\x74"), _0x84b660_1 = _0x84b660_3d.slice(_0x84b660_3e + 1);
  if (_0x84b660_0.innerHTML = "", _0x84b660_d0.textContent = _0x84b660_1.length, _0x84b660_d0.hidden = 0 === _0x84b660_1.length, 
  !_0x84b660_1.length) {
    const _0x84b660_1 = document.createElement("\x64\x69\x76");
    return _0x84b660_1.className = "\x71\x2d\x65\x6d\x70\x74\x79", _0x84b660_1.textContent = _0x84b660_27 ? "\x45\x6e\x64\x20\x6f\x66\x20\x71\x75\x65\x75\x65\x2e\x20\x54\x75\x72\x6e\x20\x6f\x6e\x20\x72\x65\x70\x65\x61\x74\x20\x74\x6f\x20\x6b\x65\x65\x70\x20\x6c\x69\x73\x74\x65\x6e\x69\x6e\x67\x2e" : "\x50\x6c\x61\x79\x20\x61\x20\x73\x6f\x6e\x67\x20\x74\x6f\x20\x73\x74\x61\x72\x74\x20\x61\x20\x71\x75\x65\x75\x65\x2e", 
    void _0x84b660_0.appendChild(_0x84b660_1);
  }
  _0x84b660_1.forEach((_0x84b660_1, _0x84b660_2) => {
    const _0x84b660_3 = _0x84b660_3e + 1 + _0x84b660_2, _0x84b660_4 = document.createElement("\x64\x69\x76");
    _0x84b660_4.className = "\x6d\x69\x6e\x69", _0x84b660_4.innerHTML = `\x0a\x20\x20\x20\x20\x20\x20\x3c\x69\x6d\x67\x20\x73\x72\x63\x3d\x22${_0x84b660_56(_0x84b660_1.cover)}\x22\x20\x61\x6c\x74\x3d\x22\x22\x3e\x0a\x20\x20\x20\x20\x20\x20\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x6d\x69\x6e\x69\x2d\x6d\x22\x3e\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x6d\x69\x6e\x69\x2d\x74\x22\x3e${_0x84b660_56(_0x84b660_1.title)}\x3c\x2f\x64\x69\x76\x3e\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x6d\x69\x6e\x69\x2d\x61\x22\x3e${_0x84b660_56(_0x84b660_1.artist)}\x3c\x2f\x64\x69\x76\x3e\x0a\x20\x20\x20\x20\x20\x20\x3c\x2f\x64\x69\x76\x3e`, 
    _0x84b660_72(_0x84b660_4, `\x70\x6c\x61\x79\x20${_0x84b660_1.title}`, () => _0x84b660_c4(_0x84b660_3)), 
    _0x84b660_4.addEventListener("\x63\x6c\x69\x63\x6b", () => _0x84b660_c4(_0x84b660_3)), _0x84b660_0.appendChild(_0x84b660_4);
  });
}

_0x84b660_ce.addEventListener("\x63\x6c\x69\x63\x6b", () => _0x84b660_d1(!_0x84b660_52)), document.getElementById("\x71\x48\x69\x64\x65").addEventListener("\x63\x6c\x69\x63\x6b", () => _0x84b660_d1(!1)), 
document.getElementById("\x71\x43\x6c\x65\x61\x72").addEventListener("\x63\x6c\x69\x63\x6b", () => {
  _0x84b660_3d = _0x84b660_3d.slice(0, _0x84b660_3e + 1), _0x84b660_d2(), _0x84b660_a6();
});

const _0x84b660_d3 = document.getElementById("\x74\x69\x6d\x65\x43\x75\x72");

let _0x84b660_d4 = null, _0x84b660_d5 = null, _0x84b660_d6 = null;

function _0x84b660_d7() {
  return _0x84b660_c1();
}

function _0x84b660_d8() {
  let _0x84b660_0 = 0;
  const _0x84b660_1 = Number(_0x84b660_2.duration);
  if (Number.isFinite(_0x84b660_1) && _0x84b660_1 > 0) for (let _0x84b660_3 = 0; _0x84b660_3 < _0x84b660_2.buffered.length; _0x84b660_3++) _0x84b660_2.buffered.start(_0x84b660_3) <= _0x84b660_2.currentTime && _0x84b660_2.buffered.end(_0x84b660_3) >= _0x84b660_2.currentTime && (_0x84b660_0 = _0x84b660_2.buffered.end(_0x84b660_3));
  _0x84b660_c.style.setProperty("\x2d\x2d\x62\x75\x66\x66\x65\x72\x65\x64", _0x84b660_1 > 0 ? Math.min(100, _0x84b660_0 / _0x84b660_1 * 100) + "\x25" : "\x30\x25");
}

function _0x84b660_d9(_0x84b660_0) {
  _0x84b660_d8();
  const _0x84b660_1 = _0x84b660_d7();
  if (!_0x84b660_1) return;
  const _0x84b660_2 = Math.min(100, Math.max(0, _0x84b660_0 / _0x84b660_1 * 100));
  _0x84b660_c.value = _0x84b660_2, _0x84b660_c.style.setProperty("\x2d\x2d\x66\x69\x6c\x6c", _0x84b660_2 + "\x25"), 
  _0x84b660_d3.textContent = _0x84b660_55(_0x84b660_0);
}

function _0x84b660_da() {
  let _0x84b660_0 = Math.min(100, Math.max(0, Number.parseFloat(_0x84b660_c.value) || 0)) / 100 * _0x84b660_d7();
  _0x84b660_0 = Math.max(_0x84b660_0, 0);
  const _0x84b660_1 = _0x84b660_c1();
  return _0x84b660_1 && (_0x84b660_0 = Math.min(_0x84b660_0, Math.max(_0x84b660_1 - .25, 0))), 
  _0x84b660_0;
}

function _0x84b660_db(_0x84b660_0) {
  if (_0x84b660_27) {
    if ("\x6f\x63\x74\x61\x76\x65" === _0x84b660_3f) return _0x84b660_c2(_0x84b660_0), void (_0x84b660_d4 = null);
    if (_0x84b660_2.readyState >= HTMLMediaElement.HAVE_METADATA && isFinite(_0x84b660_2.duration) && _0x84b660_2.duration) try {
      return _0x84b660_2.currentTime = _0x84b660_0, void (_0x84b660_d4 = null);
    } catch (_0x84b660_1) {}
    _0x84b660_d4 = _0x84b660_0;
  }
}

function _0x84b660_dc(_0x84b660_0) {
  _0x84b660_d5 = _0x84b660_0, null == _0x84b660_d6 && (_0x84b660_d6 = setTimeout(() => {
    _0x84b660_d6 = null;
    const _0x84b660_0 = _0x84b660_d5;
    _0x84b660_d5 = null, _0x84b660_db(_0x84b660_0);
  }, 75));
}

function _0x84b660_dd(_0x84b660_0) {
  null != _0x84b660_d6 && clearTimeout(_0x84b660_d6), _0x84b660_d6 = null, _0x84b660_d5 = null, 
  _0x84b660_db(_0x84b660_0);
}

function _0x84b660_de() {
  null != _0x84b660_d6 && clearTimeout(_0x84b660_d6), _0x84b660_d6 = null, _0x84b660_d5 = null, 
  _0x84b660_d4 = null, _0x84b660_30 = !1, _0x84b660_c.classList.remove("\x64\x72\x61\x67\x67\x69\x6e\x67");
}

function _0x84b660_df() {
  _0x84b660_30 = !0, _0x84b660_c.classList.add("\x64\x72\x61\x67\x67\x69\x6e\x67");
}

function _0x84b660_e0() {
  if (_0x84b660_c.classList.remove("\x64\x72\x61\x67\x67\x69\x6e\x67"), _0x84b660_30 = !1, !_0x84b660_27) return;
  const _0x84b660_0 = _0x84b660_da();
  _0x84b660_dd(_0x84b660_0), _0x84b660_d9(_0x84b660_0);
}

function _0x84b660_e1(_0x84b660_0) {
  if (!_0x84b660_27) return;
  const _0x84b660_1 = _0x84b660_d7(), _0x84b660_2 = _0x84b660_c0(), _0x84b660_3 = Math.min(Math.max(_0x84b660_2 + _0x84b660_0, 0), Math.max(_0x84b660_1 - .25, 0));
  try {
    _0x84b660_c2(_0x84b660_3);
  } catch (_0x84b660_4) {}
  _0x84b660_d9(_0x84b660_3);
}

_0x84b660_2.addEventListener("\x70\x72\x6f\x67\x72\x65\x73\x73", _0x84b660_d8), _0x84b660_2.addEventListener("\x65\x6d\x70\x74\x69\x65\x64", _0x84b660_d8), 
_0x84b660_2.addEventListener("\x6c\x6f\x61\x64\x65\x64\x6d\x65\x74\x61\x64\x61\x74\x61", () => {
  if ("\x6d\x65\x74\x69\x6e\x67" === _0x84b660_3f && !_0x84b660_b2 && Number(_0x84b660_27?.duration) > 0 && Number.isFinite(_0x84b660_2.duration) && Math.abs(_0x84b660_2.duration - Number(_0x84b660_27.duration)) > Math.max(4, .03 * Number(_0x84b660_27.duration))) _0x84b660_bb("\x54\x68\x65\x20\x70\x72\x6f\x76\x69\x64\x65\x72\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x20\x64\x69\x66\x66\x65\x72\x65\x6e\x74\x20\x6f\x72\x20\x69\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x72\x65\x63\x6f\x72\x64\x69\x6e\x67\x2e"); else if (document.getElementById("\x74\x69\x6d\x65\x54\x6f\x74\x61\x6c").textContent = _0x84b660_55(_0x84b660_2.duration), 
  null != _0x84b660_d4) {
    try {
      _0x84b660_2.currentTime = _0x84b660_d4;
    } catch (_0x84b660_0) {}
    _0x84b660_d4 = null;
  }
}), _0x84b660_2.addEventListener("\x73\x65\x65\x6b\x65\x64", () => {
  _0x84b660_30 || _0x84b660_d9(_0x84b660_2.currentTime);
}), _0x84b660_2.addEventListener("\x74\x69\x6d\x65\x75\x70\x64\x61\x74\x65", () => {
  _0x84b660_30 || _0x84b660_2.seeking || _0x84b660_d9(_0x84b660_2.currentTime);
}), _0x84b660_c.addEventListener("\x70\x6f\x69\x6e\x74\x65\x72\x64\x6f\x77\x6e", _0x84b660_df), _0x84b660_c.addEventListener("\x69\x6e\x70\x75\x74", () => {
  _0x84b660_df();
  const _0x84b660_0 = _0x84b660_da();
  _0x84b660_c.style.setProperty("\x2d\x2d\x66\x69\x6c\x6c", _0x84b660_c.value + "\x25"), _0x84b660_d3.textContent = _0x84b660_55(_0x84b660_0), 
  _0x84b660_dc(_0x84b660_0);
}), _0x84b660_c.addEventListener("\x63\x68\x61\x6e\x67\x65", _0x84b660_e0), _0x84b660_c.addEventListener("\x70\x6f\x69\x6e\x74\x65\x72\x75\x70", _0x84b660_e0), 
_0x84b660_c.addEventListener("\x70\x6f\x69\x6e\x74\x65\x72\x63\x61\x6e\x63\x65\x6c", _0x84b660_e0), _0x84b660_c.addEventListener("\x62\x6c\x75\x72", _0x84b660_e0);

const _0x84b660_e2 = document.getElementById("\x76\x6f\x6c\x42\x61\x72"), _0x84b660_e3 = document.getElementById("\x76\x6f\x6c\x42\x74\x6e"), _0x84b660_e4 = document.getElementById("\x76\x6f\x6c\x49\x63\x6f\x6e"), _0x84b660_e5 = document.getElementById("\x76\x6f\x6c\x57\x72\x61\x70"), _0x84b660_e6 = document.getElementById("\x76\x6f\x6c\x50\x6f\x70\x75\x70");

let _0x84b660_e7 = !1;

function _0x84b660_e8(_0x84b660_0) {
  _0x84b660_0 = Math.min(100, Math.max(0, _0x84b660_0)), _0x84b660_2.volume = _0x84b660_0 / 100, 
  _0x84b660_2.muted = !1, "\x6f\x63\x74\x61\x76\x65" === _0x84b660_3f && (_0x84b660_40?.unMute?.(), 
  _0x84b660_40?.setVolume?.(_0x84b660_0)), _0x84b660_e2.value = _0x84b660_0, _0x84b660_e2.style.setProperty("\x2d\x2d\x66\x69\x6c\x6c", _0x84b660_0 + "\x25"), 
  _0x84b660_1.setItem("\x6e\x79\x78\x5f\x6e\x79\x78\x69\x66\x79\x5f\x76\x6f\x6c\x75\x6d\x65", _0x84b660_0), _0x84b660_e9();
}

function _0x84b660_e9() {
  const _0x84b660_0 = "\x6f\x63\x74\x61\x76\x65" === _0x84b660_3f ? (Number(_0x84b660_40?.getVolume?.()) || 0) / 100 : _0x84b660_2.volume, _0x84b660_1 = "\x6f\x63\x74\x61\x76\x65" === _0x84b660_3f ? Boolean(_0x84b660_40?.isMuted?.()) || 0 === _0x84b660_0 : _0x84b660_2.muted || 0 === _0x84b660_0;
  _0x84b660_e4.className = _0x84b660_1 ? "\x6c\x75\x63\x69\x64\x65\x2d\x2d\x76\x6f\x6c\x75\x6d\x65\x2d\x78" : _0x84b660_0 < .5 ? "\x6c\x75\x63\x69\x64\x65\x2d\x2d\x76\x6f\x6c\x75\x6d\x65\x2d\x31" : "\x6c\x75\x63\x69\x64\x65\x2d\x2d\x76\x6f\x6c\x75\x6d\x65\x2d\x32";
}

function _0x84b660_ea(_0x84b660_0) {
  _0x84b660_e7 = _0x84b660_0, _0x84b660_e6.classList.toggle("\x6f\x70\x65\x6e", _0x84b660_0), 
  _0x84b660_e3.setAttribute("\x61\x72\x69\x61\x2d\x65\x78\x70\x61\x6e\x64\x65\x64", String(_0x84b660_0));
}

_0x84b660_e3.addEventListener("\x63\x6c\x69\x63\x6b", _0x84b660_0 => {
  _0x84b660_0.stopPropagation(), _0x84b660_ea(!_0x84b660_e7);
}), document.addEventListener("\x63\x6c\x69\x63\x6b", _0x84b660_0 => {
  _0x84b660_e7 && !_0x84b660_e5.contains(_0x84b660_0.target) && _0x84b660_ea(!1);
}), _0x84b660_e2.addEventListener("\x69\x6e\x70\x75\x74", () => {
  _0x84b660_e8(parseFloat(_0x84b660_e2.value));
});

const _0x84b660_eb = _0x84b660_1.getItem("\x6e\x79\x78\x5f\x6e\x79\x78\x69\x66\x79\x5f\x76\x6f\x6c\x75\x6d\x65"), _0x84b660_ec = null !== _0x84b660_eb && "" !== _0x84b660_eb && Number.isFinite(Number(_0x84b660_eb)) ? Math.min(100, Math.max(0, Number(_0x84b660_eb))) : 80;

_0x84b660_e2.value = _0x84b660_ec, _0x84b660_2.volume = _0x84b660_ec / 100, _0x84b660_e2.style.setProperty("\x2d\x2d\x66\x69\x6c\x6c", _0x84b660_ec + "\x25"), 
_0x84b660_e9(), document.addEventListener("\x6b\x65\x79\x64\x6f\x77\x6e", _0x84b660_0 => {
  const _0x84b660_1 = (_0x84b660_0.target.tagName || "").toLowerCase(), _0x84b660_3 = "\x69\x6e\x70\x75\x74" === _0x84b660_1 || "\x74\x65\x78\x74\x61\x72\x65\x61" === _0x84b660_1 || _0x84b660_0.target.isContentEditable;
  if ("\x45\x73\x63\x61\x70\x65" === _0x84b660_0.key) return _0x84b660_52 && _0x84b660_d1(!1), void (_0x84b660_e7 && _0x84b660_ea(!1));
  "\x2f" !== _0x84b660_0.key ? _0x84b660_3 || ("\x41\x72\x72\x6f\x77\x52\x69\x67\x68\x74" !== _0x84b660_0.key || _0x84b660_0.target.matches("\x69\x6e\x70\x75\x74\x5b\x74\x79\x70\x65\x3d\x22\x72\x61\x6e\x67\x65\x22\x5d") ? "\x41\x72\x72\x6f\x77\x4c\x65\x66\x74" !== _0x84b660_0.key || _0x84b660_0.target.matches("\x69\x6e\x70\x75\x74\x5b\x74\x79\x70\x65\x3d\x22\x72\x61\x6e\x67\x65\x22\x5d") ? "\x41\x72\x72\x6f\x77\x55\x70" !== _0x84b660_0.key || _0x84b660_0.target.matches("\x69\x6e\x70\x75\x74\x5b\x74\x79\x70\x65\x3d\x22\x72\x61\x6e\x67\x65\x22\x5d") ? "\x41\x72\x72\x6f\x77\x44\x6f\x77\x6e" !== _0x84b660_0.key || _0x84b660_0.target.matches("\x69\x6e\x70\x75\x74\x5b\x74\x79\x70\x65\x3d\x22\x72\x61\x6e\x67\x65\x22\x5d") ? "\x53\x70\x61\x63\x65" !== _0x84b660_0.code || "\x62\x75\x74\x74\x6f\x6e" === _0x84b660_1 || _0x84b660_0.target.closest("\x5b\x72\x6f\x6c\x65\x3d\x22\x62\x75\x74\x74\x6f\x6e\x22\x5d") || (_0x84b660_0.preventDefault(), 
  _0x84b660_d.click()) : (_0x84b660_0.preventDefault(), _0x84b660_e8(("\x6f\x63\x74\x61\x76\x65" === _0x84b660_3f ? Number(_0x84b660_40?.getVolume?.()) || 0 : _0x84b660_2.muted ? 0 : 100 * _0x84b660_2.volume) - 5)) : (_0x84b660_0.preventDefault(), 
  _0x84b660_e8(("\x6f\x63\x74\x61\x76\x65" === _0x84b660_3f ? Number(_0x84b660_40?.getVolume?.()) || 0 : _0x84b660_2.muted ? 0 : 100 * _0x84b660_2.volume) + 5)) : (_0x84b660_0.preventDefault(), 
  _0x84b660_e1(-10)) : (_0x84b660_0.preventDefault(), _0x84b660_e1(10))) : _0x84b660_3 || (_0x84b660_0.preventDefault(), 
  _0x84b660_f.focus());
}), window.addEventListener("\x72\x65\x73\x69\x7a\x65", _0x84b660_a3);

const _0x84b660_ed = Object.freeze({
  default: "\x23\x39\x62\x38\x63\x66\x35",
  midnight: "\x23\x39\x65\x62\x37\x64\x39",
  ruby: "\x23\x64\x35\x38\x62\x39\x61",
  emerald: "\x23\x38\x32\x63\x34\x61\x65",
  sakura: "\x23\x64\x35\x61\x32\x63\x36",
  fresh: "\x23\x61\x36\x63\x39\x39\x63"
});

function _0x84b660_ee(_0x84b660_0) {
  return /^#[0-9a-f]{6}$/i.test(String(_0x84b660_0 || "").trim());
}

function _0x84b660_ef(_0x84b660_0) {
  const _0x84b660_1 = _0x84b660_ee(_0x84b660_0) ? _0x84b660_0.slice(1) : _0x84b660_ed.default.slice(1);
  return [ 0, 2, 4 ].map(_0x84b660_0 => parseInt(_0x84b660_1.slice(_0x84b660_0, _0x84b660_0 + 2), 16));
}

let _0x84b660_f0 = null;

function _0x84b660_f1() {
  if ("\x74\x75\x74\x73\x69" === document.documentElement.dataset.appShell) return;
  const _0x84b660_0 = _0x84b660_1.getItem("\x6e\x79\x78\x2e\x74\x68\x65\x6d\x65") || "\x64\x65\x66\x61\x75\x6c\x74";
  let _0x84b660_2 = "\x63\x75\x73\x74\x6f\x6d" === _0x84b660_0 ? _0x84b660_1.getItem("\x6e\x79\x78\x2e\x63\x75\x73\x74\x6f\x6d\x54\x68\x65\x6d\x65\x43\x6f\x6c\x6f\x72") : _0x84b660_ed[_0x84b660_0];
  _0x84b660_ee(_0x84b660_2) || (_0x84b660_2 = _0x84b660_ed.default);
  const _0x84b660_3 = _0x84b660_ef(_0x84b660_2);
  Math.max(..._0x84b660_3) < 72 && (_0x84b660_2 = "\x23\x66\x31\x66\x33\x66\x37"), document.documentElement.dataset.nyxifyTheme = _0x84b660_0, 
  document.documentElement.style.setProperty("\x2d\x2d\x61\x63\x63\x65\x6e\x74", _0x84b660_2), document.documentElement.style.setProperty("\x2d\x2d\x61\x63\x63\x65\x6e\x74\x2d\x72\x67\x62", _0x84b660_ef(_0x84b660_2).join("\x2c\x20")), 
  _0x84b660_f0?.refreshColor();
}

function _0x84b660_f2(_0x84b660_0) {
  if (!_0x84b660_0) return null;
  const _0x84b660_1 = _0x84b660_0.getContext("\x32\x64"), _0x84b660_2 = window.matchMedia("\x28\x70\x72\x65\x66\x65\x72\x73\x2d\x72\x65\x64\x75\x63\x65\x64\x2d\x6d\x6f\x74\x69\x6f\x6e\x3a\x20\x72\x65\x64\x75\x63\x65\x29").matches, _0x84b660_3 = Array.from({
    length: 54
  }, (_0x84b660_0, _0x84b660_1) => ({
    x: 47 * _0x84b660_1 % 101 / 100,
    y: (71 * _0x84b660_1 + 13) % 103 / 102,
    r: .45 + _0x84b660_1 % 4 * .18,
    o: .12 + _0x84b660_1 % 5 * .035
  })), _0x84b660_4 = [ {
    x: .13,
    y: .24,
    s: 74,
    points: [ [ -.8, .1 ], [ -.28, -.2 ], [ .18, .05 ], [ .63, -.58 ], [ .9, .25 ], [ .24, .52 ] ],
    lines: [ [ 0, 1 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ], [ 2, 5 ], [ 4, 5 ] ]
  }, {
    x: .47,
    y: .16,
    s: 58,
    points: [ [ -.75, .45 ], [ -.42, -.32 ], [ .1, -.08 ], [ .54, -.52 ], [ .77, .23 ], [ .15, .62 ] ],
    lines: [ [ 0, 1 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ], [ 2, 5 ] ]
  }, {
    x: .82,
    y: .28,
    s: 70,
    points: [ [ -.82, .12 ], [ -.38, -.4 ], [ .05, -.08 ], [ .58, -.55 ], [ .83, .08 ], [ .42, .55 ], [ -.18, .42 ] ],
    lines: [ [ 0, 1 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ], [ 4, 5 ], [ 5, 6 ], [ 6, 2 ] ]
  }, {
    x: .24,
    y: .72,
    s: 62,
    points: [ [ -.7, -.3 ], [ -.26, .12 ], [ .08, -.48 ], [ .5, -.08 ], [ .78, .46 ], [ .06, .58 ] ],
    lines: [ [ 0, 1 ], [ 1, 2 ], [ 1, 3 ], [ 3, 4 ], [ 3, 5 ] ]
  }, {
    x: .62,
    y: .66,
    s: 82,
    points: [ [ -.84, .2 ], [ -.45, -.42 ], [ -.04, -.08 ], [ .38, -.52 ], [ .75, -.08 ], [ .48, .5 ], [ -.18, .58 ] ],
    lines: [ [ 0, 1 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ], [ 4, 5 ], [ 5, 6 ], [ 6, 2 ] ]
  }, {
    x: .88,
    y: .82,
    s: 52,
    points: [ [ -.76, .32 ], [ -.38, -.28 ], [ .12, -.5 ], [ .6, -.12 ], [ .76, .48 ], [ .04, .58 ] ],
    lines: [ [ 0, 1 ], [ 1, 2 ], [ 2, 3 ], [ 3, 4 ], [ 4, 5 ], [ 5, 1 ] ]
  } ];
  let _0x84b660_5 = 0, _0x84b660_6 = 0, _0x84b660_7 = _0x84b660_ef(getComputedStyle(document.documentElement).getPropertyValue("\x2d\x2d\x61\x63\x63\x65\x6e\x74").trim()), _0x84b660_8 = 0;
  function _0x84b660_9() {
    const _0x84b660_2 = Math.min(2, window.devicePixelRatio || 1);
    _0x84b660_5 = window.innerWidth, _0x84b660_6 = window.innerHeight, _0x84b660_0.width = Math.round(_0x84b660_5 * _0x84b660_2), 
    _0x84b660_0.height = Math.round(_0x84b660_6 * _0x84b660_2), _0x84b660_0.style.width = `${_0x84b660_5}\x70\x78`, 
    _0x84b660_0.style.height = `${_0x84b660_6}\x70\x78`, _0x84b660_1.setTransform(_0x84b660_2, 0, 0, _0x84b660_2, 0, 0);
  }
  function _0x84b660_a() {
    _0x84b660_7 = _0x84b660_ef(getComputedStyle(document.documentElement).getPropertyValue("\x2d\x2d\x61\x63\x63\x65\x6e\x74").trim());
  }
  return window.addEventListener("\x72\x65\x73\x69\x7a\x65", _0x84b660_9, {
    passive: !0
  }), _0x84b660_9(), _0x84b660_a(), function _0x84b660_0(_0x84b660_9 = 0) {
    if (!_0x84b660_2 && _0x84b660_9 - _0x84b660_8 < 42) return void requestAnimationFrame(_0x84b660_0);
    _0x84b660_8 = _0x84b660_9, _0x84b660_1.clearRect(0, 0, _0x84b660_5, _0x84b660_6);
    const _0x84b660_a = _0x84b660_2 ? 0 : .035 * Math.sin(_0x84b660_9 / 1700);
    for (const _0x84b660_2 of _0x84b660_3) _0x84b660_1.beginPath(), _0x84b660_1.arc(_0x84b660_2.x * _0x84b660_5, _0x84b660_2.y * _0x84b660_6, _0x84b660_2.r, 0, 2 * Math.PI), 
    _0x84b660_1.fillStyle = `\x72\x67\x62\x61\x28${_0x84b660_7.join("\x2c")}\x2c${_0x84b660_2.o + _0x84b660_a}\x29`, 
    _0x84b660_1.fill();
    for (let _0x84b660_3 = 0; _0x84b660_3 < _0x84b660_4.length; _0x84b660_3 += 1) {
      const _0x84b660_0 = _0x84b660_4[_0x84b660_3], _0x84b660_8 = _0x84b660_2 ? 0 : 2 * Math.sin(_0x84b660_9 / 2600 + _0x84b660_3), _0x84b660_a = _0x84b660_0.points.map(([_0x84b660_1, _0x84b660_2]) => [ _0x84b660_0.x * _0x84b660_5 + _0x84b660_1 * _0x84b660_0.s, _0x84b660_0.y * _0x84b660_6 + _0x84b660_2 * _0x84b660_0.s + _0x84b660_8 ]);
      _0x84b660_1.lineWidth = 1, _0x84b660_1.strokeStyle = `\x72\x67\x62\x61\x28${_0x84b660_7.join("\x2c")}\x2c\x2e\x31\x36\x29`;
      for (const [_0x84b660_2, _0x84b660_3] of _0x84b660_0.lines) _0x84b660_1.beginPath(), 
      _0x84b660_1.moveTo(..._0x84b660_a[_0x84b660_2]), _0x84b660_1.lineTo(..._0x84b660_a[_0x84b660_3]), 
      _0x84b660_1.stroke();
      for (const [_0x84b660_2, _0x84b660_3] of _0x84b660_a) _0x84b660_1.beginPath(), _0x84b660_1.arc(_0x84b660_2, _0x84b660_3, 1.45, 0, 2 * Math.PI), 
      _0x84b660_1.fillStyle = `\x72\x67\x62\x61\x28${_0x84b660_7.join("\x2c")}\x2c\x2e\x37\x32\x29`, _0x84b660_1.fill();
    }
    _0x84b660_2 || requestAnimationFrame(_0x84b660_0);
  }(), {
    refreshColor: _0x84b660_a
  };
}

function _0x84b660_f3(_0x84b660_0) {
  "\x6d\x65\x64\x69\x61\x53\x65\x73\x73\x69\x6f\x6e" in navigator && (navigator.mediaSession.metadata = new MediaMetadata({
    title: _0x84b660_0.title,
    artist: _0x84b660_0.artist,
    album: _0x84b660_0.album || "\x6d\x69\x7a\x75",
    artwork: _0x84b660_0.cover ? [ {
      src: _0x84b660_0.cover,
      sizes: "\x32\x35\x30\x78\x32\x35\x30",
      type: "\x69\x6d\x61\x67\x65\x2f\x6a\x70\x65\x67"
    } ] : []
  }));
}

function _0x84b660_f4() {
  if (!("\x6d\x65\x64\x69\x61\x53\x65\x73\x73\x69\x6f\x6e" in navigator) || !navigator.mediaSession.setPositionState) return;
  const _0x84b660_0 = _0x84b660_c1(), _0x84b660_1 = Math.min(_0x84b660_c0(), Math.max(_0x84b660_0 - .01, 0));
  if (isFinite(_0x84b660_0) && _0x84b660_0) try {
    navigator.mediaSession.setPositionState({
      duration: _0x84b660_0,
      position: _0x84b660_1,
      playbackRate: "\x6f\x63\x74\x61\x76\x65" === _0x84b660_3f ? Number(_0x84b660_40?.getPlaybackRate?.()) || 1 : _0x84b660_2.playbackRate
    });
  } catch (_0x84b660_3) {}
}

_0x84b660_f1(), _0x84b660_f0 = _0x84b660_f2(document.getElementById("\x73\x74\x61\x72\x73")), window.addEventListener("\x73\x74\x6f\x72\x61\x67\x65", _0x84b660_0 => {
  "\x6e\x79\x78\x2e\x74\x68\x65\x6d\x65" !== _0x84b660_0.key && "\x6e\x79\x78\x2e\x63\x75\x73\x74\x6f\x6d\x54\x68\x65\x6d\x65\x43\x6f\x6c\x6f\x72" !== _0x84b660_0.key || _0x84b660_f1();
}), _0x84b660_a4(!1), _0x84b660_a1(), _0x84b660_d2(), _0x84b660_a0(), _0x84b660_88(), 
"\x6d\x65\x64\x69\x61\x53\x65\x73\x73\x69\x6f\x6e" in navigator && (navigator.mediaSession.setActionHandler("\x70\x6c\x61\x79", _0x84b660_be), 
navigator.mediaSession.setActionHandler("\x70\x61\x75\x73\x65", _0x84b660_bf), navigator.mediaSession.setActionHandler("\x70\x72\x65\x76\x69\x6f\x75\x73\x74\x72\x61\x63\x6b", _0x84b660_c7), 
navigator.mediaSession.setActionHandler("\x6e\x65\x78\x74\x74\x72\x61\x63\x6b", () => _0x84b660_c6(!0))), _0x84b660_2.addEventListener("\x6c\x6f\x61\x64\x65\x64\x6d\x65\x74\x61\x64\x61\x74\x61", _0x84b660_f4), 
_0x84b660_2.addEventListener("\x73\x65\x65\x6b\x65\x64", _0x84b660_f4);
