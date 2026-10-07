const _0x85e15d_0 = 5e6, _0x85e15d_1 = 1e5, _0x85e15d_2 = 1e4;

export function prepareAliasBase(_0x85e15d_0, _0x85e15d_1) {
  let _0x85e15d_2;
  try {
    _0x85e15d_2 = new URL(String(_0x85e15d_0 || "").trim());
  } catch {
    throw new Error("\x4e\x79\x78\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x64\x65\x74\x65\x72\x6d\x69\x6e\x65\x20\x74\x68\x65\x20\x61\x64\x64\x72\x65\x73\x73\x20\x66\x6f\x72\x20\x74\x68\x65\x73\x65\x20\x6c\x69\x6e\x6b\x73\x2e");
  }
  if (![ "\x68\x74\x74\x70\x3a", "\x68\x74\x74\x70\x73\x3a" ].includes(_0x85e15d_2.protocol) || _0x85e15d_2.username || _0x85e15d_2.password) throw new Error("\x4e\x79\x78\x20\x6c\x69\x6e\x6b\x73\x20\x72\x65\x71\x75\x69\x72\x65\x20\x61\x20\x70\x75\x62\x6c\x69\x63\x20\x68\x74\x74\x70\x3a\x2f\x2f\x20\x6f\x72\x20\x68\x74\x74\x70\x73\x3a\x2f\x2f\x20\x61\x64\x64\x72\x65\x73\x73\x2e");
  const _0x85e15d_3 = String(_0x85e15d_1 || "").trim();
  if (!/^[A-Za-z0-9_-]{8,24}$/.test(_0x85e15d_3)) throw new Error("\x4e\x79\x78\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x63\x72\x65\x61\x74\x65\x20\x61\x20\x73\x61\x66\x65\x20\x6c\x69\x6e\x6b\x20\x67\x72\x6f\x75\x70\x2e");
  return _0x85e15d_2.pathname = "\x2f\x6c\x2f", _0x85e15d_2.search = "", _0x85e15d_2.hash = "", 
  Object.freeze({
    prefix: `${_0x85e15d_2.href}${_0x85e15d_3}\x2d`,
    suffix: ""
  });
}

export function buildAliasUrl(_0x85e15d_0, _0x85e15d_1) {
  return `${_0x85e15d_0.prefix}${encodeURIComponent(String(_0x85e15d_1))}${_0x85e15d_0.suffix}`;
}

function _0x85e15d_3(_0x85e15d_0) {
  let _0x85e15d_1 = 0;
  for (let _0x85e15d_2 = 1; _0x85e15d_2 <= _0x85e15d_0; _0x85e15d_2 *= 10) _0x85e15d_1 += (Math.min(_0x85e15d_0, 10 * _0x85e15d_2 - 1) - _0x85e15d_2 + 1) * String(_0x85e15d_2).length;
  return _0x85e15d_1;
}

export function estimatedLinkBytes(_0x85e15d_1, _0x85e15d_2, _0x85e15d_4 = "\x73\x65\x71\x75\x65\x6e\x74\x69\x61\x6c") {
  const _0x85e15d_5 = Number(_0x85e15d_2);
  if (!Number.isSafeInteger(_0x85e15d_5) || _0x85e15d_5 < 1 || _0x85e15d_5 > _0x85e15d_0) throw new Error(`\x43\x68\x6f\x6f\x73\x65\x20\x62\x65\x74\x77\x65\x65\x6e\x20\x31\x20\x61\x6e\x64\x20${_0x85e15d_0.toLocaleString()}\x20\x6c\x69\x6e\x6b\x73\x2e`);
  return (new TextEncoder).encode(`${_0x85e15d_1.prefix}${_0x85e15d_1.suffix}\x0a`).length * _0x85e15d_5 + ("\x75\x75\x69\x64" === _0x85e15d_4 ? 36 * _0x85e15d_5 : "\x72\x61\x6e\x64\x6f\x6d" === _0x85e15d_4 ? 16 * _0x85e15d_5 : _0x85e15d_3(_0x85e15d_5));
}

function _0x85e15d_4(_0x85e15d_0 = 16) {
  const _0x85e15d_1 = new Uint8Array(_0x85e15d_0);
  crypto.getRandomValues(_0x85e15d_1);
  let _0x85e15d_2 = "";
  for (const _0x85e15d_3 of _0x85e15d_1) _0x85e15d_2 += "\x41\x42\x43\x44\x45\x46\x47\x48\x4a\x4b\x4c\x4d\x4e\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x32\x33\x34\x35\x36\x37\x38\x39\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a"[_0x85e15d_3 % 57];
  return _0x85e15d_2;
}

function _0x85e15d_5(_0x85e15d_0, _0x85e15d_1) {
  return "\x75\x75\x69\x64" === _0x85e15d_0 ? "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof crypto.randomUUID ? crypto.randomUUID() : `${_0x85e15d_4(16)}\x2d${_0x85e15d_4(16)}` : "\x72\x61\x6e\x64\x6f\x6d" === _0x85e15d_0 ? _0x85e15d_4() : String(_0x85e15d_1);
}

function _0x85e15d_6(_0x85e15d_0) {
  const _0x85e15d_1 = [ "\x42", "\x4b\x42", "\x4d\x42", "\x47\x42" ];
  let _0x85e15d_2 = Math.max(0, Number(_0x85e15d_0) || 0), _0x85e15d_3 = 0;
  for (;_0x85e15d_2 >= 1024 && _0x85e15d_3 < _0x85e15d_1.length - 1; ) _0x85e15d_2 /= 1024, 
  _0x85e15d_3 += 1;
  return `${_0x85e15d_2 >= 100 || 0 === _0x85e15d_3 ? Math.round(_0x85e15d_2) : _0x85e15d_2.toFixed(1)}\x20${_0x85e15d_1[_0x85e15d_3]}`;
}

function _0x85e15d_7(_0x85e15d_0, _0x85e15d_1) {
  const _0x85e15d_2 = URL.createObjectURL(new Blob(_0x85e15d_0, {
    type: "\x74\x65\x78\x74\x2f\x70\x6c\x61\x69\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x75\x74\x66\x2d\x38"
  })), _0x85e15d_3 = document.createElement("\x61");
  _0x85e15d_3.href = _0x85e15d_2, _0x85e15d_3.download = _0x85e15d_1, _0x85e15d_3.rel = "\x6e\x6f\x6f\x70\x65\x6e\x65\x72", 
  _0x85e15d_3.hidden = !0, document.body.append(_0x85e15d_3), _0x85e15d_3.click(), 
  setTimeout(() => {
    URL.revokeObjectURL(_0x85e15d_2), _0x85e15d_3.remove();
  }, 6e4);
}

function _0x85e15d_8() {
  const _0x85e15d_0 = document.querySelector("\x5b\x64\x61\x74\x61\x2d\x62\x75\x6c\x6b\x2d\x76\x61\x72\x69\x61\x6e\x74\x73\x5d");
  if (!_0x85e15d_0) return;
  const _0x85e15d_3 = _0x85e15d_0.querySelector("\x5b\x64\x61\x74\x61\x2d\x62\x75\x6c\x6b\x2d\x76\x61\x72\x69\x61\x6e\x74\x73\x2d\x66\x6f\x72\x6d\x5d"), _0x85e15d_8 = _0x85e15d_0.querySelector("\x5b\x64\x61\x74\x61\x2d\x62\x75\x6c\x6b\x2d\x63\x6f\x75\x6e\x74\x5d"), _0x85e15d_9 = _0x85e15d_0.querySelector("\x5b\x64\x61\x74\x61\x2d\x62\x75\x6c\x6b\x2d\x6d\x6f\x64\x65\x5d"), _0x85e15d_a = _0x85e15d_0.querySelector("\x5b\x64\x61\x74\x61\x2d\x62\x75\x6c\x6b\x2d\x61\x6c\x69\x61\x73\x2d\x65\x78\x61\x6d\x70\x6c\x65\x5d"), _0x85e15d_b = _0x85e15d_0.querySelector("\x5b\x64\x61\x74\x61\x2d\x62\x75\x6c\x6b\x2d\x67\x65\x6e\x65\x72\x61\x74\x65\x5d"), _0x85e15d_c = _0x85e15d_0.querySelector("\x5b\x64\x61\x74\x61\x2d\x62\x75\x6c\x6b\x2d\x63\x61\x6e\x63\x65\x6c\x5d"), _0x85e15d_d = _0x85e15d_0.querySelector("\x5b\x64\x61\x74\x61\x2d\x62\x75\x6c\x6b\x2d\x65\x73\x74\x69\x6d\x61\x74\x65\x5d"), _0x85e15d_e = _0x85e15d_0.querySelector("\x5b\x64\x61\x74\x61\x2d\x62\x75\x6c\x6b\x2d\x70\x72\x6f\x67\x72\x65\x73\x73\x5d"), _0x85e15d_f = _0x85e15d_0.querySelector("\x5b\x64\x61\x74\x61\x2d\x62\x75\x6c\x6b\x2d\x70\x72\x6f\x67\x72\x65\x73\x73\x2d\x62\x61\x72\x5d"), _0x85e15d_10 = _0x85e15d_0.querySelector("\x5b\x64\x61\x74\x61\x2d\x62\x75\x6c\x6b\x2d\x70\x72\x6f\x67\x72\x65\x73\x73\x2d\x74\x65\x78\x74\x5d"), _0x85e15d_11 = _0x85e15d_0.querySelector("\x5b\x64\x61\x74\x61\x2d\x62\x75\x6c\x6b\x2d\x70\x72\x65\x76\x69\x65\x77\x5d"), _0x85e15d_12 = _0x85e15d_0.querySelector("\x5b\x64\x61\x74\x61\x2d\x62\x75\x6c\x6b\x2d\x70\x72\x65\x76\x69\x65\x77\x2d\x63\x6f\x75\x6e\x74\x5d"), _0x85e15d_13 = _0x85e15d_0.querySelector("\x5b\x64\x61\x74\x61\x2d\x62\x75\x6c\x6b\x2d\x70\x72\x65\x76\x69\x65\x77\x2d\x6c\x69\x6e\x65\x73\x5d");
  let _0x85e15d_14 = null;
  const _0x85e15d_15 = (_0x85e15d_0, _0x85e15d_1 = 0, _0x85e15d_2 = "") => {
    _0x85e15d_e.hidden = !1, _0x85e15d_e.className = "\x62\x75\x6c\x6b\x2d\x76\x61\x72\x69\x61\x6e\x74\x73\x2d\x70\x72\x6f\x67\x72\x65\x73\x73" + (_0x85e15d_2 ? `\x20${_0x85e15d_2}` : ""), 
    _0x85e15d_f.style.width = `${Math.max(0, Math.min(100, 100 * _0x85e15d_1))}\x25`, _0x85e15d_10.textContent = _0x85e15d_0;
  }, _0x85e15d_16 = () => {
    _0x85e15d_a.textContent = `${location.origin}\x2f\x6c\x2f\x4e\x79\x78\x4c\x69\x6e\x6b\x47\x72\x6f\x75\x70\x2d\x2e\x2e\x2e`;
    try {
      _0x85e15d_d.textContent = `\x45\x73\x74\x69\x6d\x61\x74\x65\x64\x20\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x3a\x20${_0x85e15d_6(estimatedLinkBytes(prepareAliasBase(location.origin, "\x4e\x79\x78\x4c\x69\x6e\x6b\x47\x72\x6f\x75\x70"), Number(_0x85e15d_8.value), _0x85e15d_9.value))}`;
    } catch (_0x85e15d_0) {
      _0x85e15d_d.textContent = _0x85e15d_0.message;
    }
  };
  [ _0x85e15d_8, _0x85e15d_9 ].forEach(_0x85e15d_0 => _0x85e15d_0.addEventListener("\x69\x6e\x70\x75\x74", _0x85e15d_16)), 
  _0x85e15d_9.addEventListener("\x63\x68\x61\x6e\x67\x65", _0x85e15d_16), _0x85e15d_c.addEventListener("\x63\x6c\x69\x63\x6b", () => {
    _0x85e15d_14 && (_0x85e15d_14.cancelled = !0);
  }), _0x85e15d_3.addEventListener("\x73\x75\x62\x6d\x69\x74", async _0x85e15d_0 => {
    if (_0x85e15d_0.preventDefault(), _0x85e15d_14) return;
    let _0x85e15d_3, _0x85e15d_6;
    try {
      if (_0x85e15d_3 = prepareAliasBase(location.origin, _0x85e15d_4(12)), _0x85e15d_6 = Number(_0x85e15d_8.value), 
      estimatedLinkBytes(_0x85e15d_3, _0x85e15d_6, _0x85e15d_9.value), _0x85e15d_6 > _0x85e15d_1 && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" != typeof window.showSaveFilePicker) throw new Error(`\x54\x68\x69\x73\x20\x77\x6f\x72\x6b\x73\x70\x61\x63\x65\x20\x63\x61\x6e\x20\x73\x61\x66\x65\x6c\x79\x20\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x20\x75\x70\x20\x74\x6f\x20${_0x85e15d_1.toLocaleString()}\x20\x6c\x69\x6e\x6b\x73\x20\x61\x74\x20\x6f\x6e\x63\x65\x2e\x20\x55\x73\x65\x20\x43\x68\x72\x6f\x6d\x65\x20\x6f\x72\x20\x45\x64\x67\x65\x20\x66\x6f\x72\x20\x6c\x61\x72\x67\x65\x72\x20\x73\x74\x72\x65\x61\x6d\x65\x64\x20\x66\x69\x6c\x65\x73\x2e`);
    } catch (_0x85e15d_19) {
      return void _0x85e15d_15(_0x85e15d_19.message, 0, "\x65\x72\x72\x6f\x72");
    }
    const _0x85e15d_a = {
      cancelled: !1
    };
    _0x85e15d_14 = _0x85e15d_a, _0x85e15d_b.disabled = !0, _0x85e15d_c.hidden = !1, 
    _0x85e15d_11.hidden = !0, _0x85e15d_15("\x43\x68\x6f\x6f\x73\x65\x20\x77\x68\x65\x72\x65\x20\x74\x6f\x20\x73\x61\x76\x65\x20\x74\x68\x65\x20\x6c\x69\x73\x74\u2026", 0);
    let _0x85e15d_d = null;
    const _0x85e15d_e = [], _0x85e15d_f = [], _0x85e15d_10 = [];
    let _0x85e15d_16 = 0;
    const _0x85e15d_17 = performance.now(), _0x85e15d_18 = `\x6e\x79\x78\x2d\x70\x61\x74\x68\x2d\x6c\x69\x6e\x6b\x73\x2d${_0x85e15d_6}\x2e\x74\x78\x74`;
    try {
      if (_0x85e15d_6 > _0x85e15d_1) {
        const _0x85e15d_0 = await window.showSaveFilePicker({
          suggestedName: _0x85e15d_18,
          types: [ {
            description: "\x54\x65\x78\x74\x20\x66\x69\x6c\x65",
            accept: {
              "\x74\x65\x78\x74\x2f\x70\x6c\x61\x69\x6e": [ "\x2e\x74\x78\x74" ]
            }
          } ]
        });
        _0x85e15d_d = await _0x85e15d_0.createWritable();
      }
      for (let _0x85e15d_1 = 1; _0x85e15d_1 <= _0x85e15d_6 && !_0x85e15d_a.cancelled; _0x85e15d_1 += _0x85e15d_2) {
        const _0x85e15d_0 = Math.min(_0x85e15d_6, _0x85e15d_1 + _0x85e15d_2 - 1), _0x85e15d_4 = [];
        for (let _0x85e15d_2 = _0x85e15d_1; _0x85e15d_2 <= _0x85e15d_0; _0x85e15d_2 += 1) {
          const _0x85e15d_0 = buildAliasUrl(_0x85e15d_3, _0x85e15d_5(_0x85e15d_9.value, _0x85e15d_2));
          _0x85e15d_4.push(_0x85e15d_0), _0x85e15d_f.length < 5 && _0x85e15d_f.push(_0x85e15d_0), 
          _0x85e15d_10.push(_0x85e15d_0), _0x85e15d_10.length > 5 && _0x85e15d_10.shift();
        }
        const _0x85e15d_7 = `${_0x85e15d_4.join("\x0a")}\x0a`;
        _0x85e15d_d ? await _0x85e15d_d.write(_0x85e15d_7) : _0x85e15d_e.push(_0x85e15d_7), 
        _0x85e15d_16 = _0x85e15d_0;
        const _0x85e15d_8 = Math.max(.01, (performance.now() - _0x85e15d_17) / 1e3);
        _0x85e15d_15(`\x47\x65\x6e\x65\x72\x61\x74\x65\x64\x20${_0x85e15d_16.toLocaleString()}\x20\x6f\x66\x20${_0x85e15d_6.toLocaleString()}\x20\xb7\x20${Math.round(_0x85e15d_16 / _0x85e15d_8).toLocaleString()}\x20\x6c\x69\x6e\x6b\x73\x2f\x73\x65\x63`, _0x85e15d_16 / _0x85e15d_6), 
        await new Promise(_0x85e15d_0 => setTimeout(_0x85e15d_0, 0));
      }
      if (_0x85e15d_a.cancelled) return _0x85e15d_d && await _0x85e15d_d.abort(), void _0x85e15d_15("\x47\x65\x6e\x65\x72\x61\x74\x69\x6f\x6e\x20\x63\x61\x6e\x63\x65\x6c\x6c\x65\x64\x2e\x20\x4e\x6f\x20\x63\x6f\x6d\x70\x6c\x65\x74\x65\x64\x20\x66\x69\x6c\x65\x20\x77\x61\x73\x20\x73\x61\x76\x65\x64\x2e", _0x85e15d_16 / _0x85e15d_6, "\x65\x72\x72\x6f\x72");
      _0x85e15d_d ? await _0x85e15d_d.close() : _0x85e15d_7(_0x85e15d_e, _0x85e15d_18);
      const _0x85e15d_0 = _0x85e15d_16 > 10 ? [ ..._0x85e15d_f, "\u2026", ..._0x85e15d_10 ] : [ ..._0x85e15d_f, ..._0x85e15d_10.slice(Math.max(0, _0x85e15d_f.length - 5)) ];
      _0x85e15d_13.textContent = [ ...new Set(_0x85e15d_0) ].join("\x0a"), _0x85e15d_12.textContent = `${_0x85e15d_16.toLocaleString()}\x20\x6c\x69\x6e\x6b\x73`, 
      _0x85e15d_11.hidden = !1, _0x85e15d_15(`${_0x85e15d_16.toLocaleString()}\x20\x64\x69\x66\x66\x65\x72\x65\x6e\x74\x20\x4e\x79\x78\x20\x6c\x69\x6e\x6b\x73\x20\x73\x61\x76\x65\x64\x20\x74\x6f\x20${_0x85e15d_18}\x2e`, 1, "\x63\x6f\x6d\x70\x6c\x65\x74\x65");
    } catch (_0x85e15d_19) {
      _0x85e15d_d && await _0x85e15d_d.abort().catch(() => {}), _0x85e15d_15("\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72" === _0x85e15d_19?.name ? "\x53\x61\x76\x65\x20\x63\x61\x6e\x63\x65\x6c\x6c\x65\x64\x2e" : _0x85e15d_19?.message || "\x54\x68\x65\x20\x6c\x69\x6e\x6b\x20\x6c\x69\x73\x74\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x62\x65\x20\x63\x72\x65\x61\x74\x65\x64\x2e", _0x85e15d_16 / _0x85e15d_6, "\x65\x72\x72\x6f\x72");
    } finally {
      _0x85e15d_14 = null, _0x85e15d_b.disabled = !1, _0x85e15d_c.hidden = !0;
    }
  }), _0x85e15d_16();
}

"\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof document && _0x85e15d_8();

export { _0x85e15d_0 as MAX_LINKS };
