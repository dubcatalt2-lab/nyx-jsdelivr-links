export async function readResponse(_0x4dd75a_0, _0x4dd75a_1, _0x4dd75a_2) {
  if (!_0x4dd75a_0.ok || !_0x4dd75a_0.headers.get("\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65")?.includes("\x74\x65\x78\x74\x2f\x65\x76\x65\x6e\x74\x2d\x73\x74\x72\x65\x61\x6d")) {
    const _0x4dd75a_1 = await _0x4dd75a_0.text();
    let _0x4dd75a_2;
    try {
      _0x4dd75a_2 = JSON.parse(_0x4dd75a_1);
    } catch {
      throw Error(_0x4dd75a_0.status >= 500 ? "\x54\x68\x65\x20\x41\x49\x20\x73\x65\x72\x76\x69\x63\x65\x20\x69\x73\x20\x74\x65\x6d\x70\x6f\x72\x61\x72\x69\x6c\x79\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x20\x28" + _0x4dd75a_0.status + "\x29\x2e\x20\x50\x6c\x65\x61\x73\x65\x20\x72\x65\x74\x72\x79\x20\x69\x6e\x20\x61\x20\x6d\x6f\x6d\x65\x6e\x74\x2e" : "\x54\x68\x65\x20\x41\x49\x20\x73\x65\x72\x76\x69\x63\x65\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x75\x6e\x65\x78\x70\x65\x63\x74\x65\x64\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x2e\x20\x52\x65\x6c\x6f\x61\x64\x20\x74\x68\x65\x20\x70\x61\x67\x65\x20\x61\x6e\x64\x20\x74\x72\x79\x20\x61\x67\x61\x69\x6e\x2e");
    }
    if (!_0x4dd75a_0.ok) throw Object.assign(new Error("\x73\x74\x72\x69\x6e\x67" == typeof _0x4dd75a_2.error ? _0x4dd75a_2.error : _0x4dd75a_2.error?.message || "\x41\x49\x20\x72\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64\x20\x28" + _0x4dd75a_0.status + "\x29\x2e"), {
      status: _0x4dd75a_0.status,
      code: _0x4dd75a_2.code
    });
    return _0x4dd75a_2;
  }
  const _0x4dd75a_3 = _0x4dd75a_0.body.getReader(), _0x4dd75a_4 = new TextDecoder, _0x4dd75a_5 = {
    text: "",
    model: "",
    metadata: {
      summary: ""
    }
  };
  let _0x4dd75a_6 = "", _0x4dd75a_7 = !1, _0x4dd75a_8 = 0, _0x4dd75a_9 = "";
  const _0x4dd75a_a = [];
  function _0x4dd75a_b(_0x4dd75a_0) {
    if (!_0x4dd75a_0.startsWith("data:")) return;
    const _0x4dd75a_3 = _0x4dd75a_0.slice(5).trim();
    if (!_0x4dd75a_3) return;
    if ("\x5b\x44\x4f\x4e\x45\x5d" === _0x4dd75a_3) return void (_0x4dd75a_7 = !0);
    let _0x4dd75a_4;
    try {
      _0x4dd75a_4 = JSON.parse(_0x4dd75a_3);
    } catch {
      throw Error("\x54\x68\x65\x20\x41\x49\x20\x73\x65\x72\x76\x69\x63\x65\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x75\x6e\x72\x65\x61\x64\x61\x62\x6c\x65\x20\x72\x65\x70\x6c\x79\x2e\x20\x50\x6c\x65\x61\x73\x65\x20\x72\x65\x74\x72\x79\x2e");
    }
    if (_0x4dd75a_4.error) throw Error("\x73\x74\x72\x69\x6e\x67" == typeof _0x4dd75a_4.error ? _0x4dd75a_4.error : _0x4dd75a_4.error.message || "\x54\x68\x65\x20\x6d\x6f\x64\x65\x6c\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x66\x69\x6e\x69\x73\x68\x20\x69\x74\x73\x20\x72\x65\x70\x6c\x79\x2e");
    _0x4dd75a_4.model && (_0x4dd75a_5.model = _0x4dd75a_4.model);
    const _0x4dd75a_6 = _0x4dd75a_4.choices?.[0]?.delta || {}, _0x4dd75a_b = _0x4dd75a_6.content;
    if (_0x4dd75a_2 && _0x4dd75a_6.audio?.data) {
      const _0x4dd75a_0 = Uint8Array.from(atob(_0x4dd75a_6.audio.data), _0x4dd75a_0 => _0x4dd75a_0.charCodeAt(0));
      if (_0x4dd75a_8 += _0x4dd75a_0.length, _0x4dd75a_8 > 8388608) throw Error("\x56\x6f\x69\x63\x65\x20\x72\x65\x70\x6c\x79\x20\x69\x73\x20\x74\x6f\x6f\x20\x6c\x61\x72\x67\x65\x2e");
      _0x4dd75a_a.push(_0x4dd75a_0);
    }
    if (_0x4dd75a_2 && "\x73\x74\x72\x69\x6e\x67" == typeof _0x4dd75a_6.audio?.transcript && (_0x4dd75a_9 += _0x4dd75a_6.audio.transcript), 
    _0x4dd75a_9.length > 6e4) throw Error("\x56\x6f\x69\x63\x65\x20\x74\x72\x61\x6e\x73\x63\x72\x69\x70\x74\x20\x69\x73\x20\x74\x6f\x6f\x20\x6c\x6f\x6e\x67\x2e");
    if (_0x4dd75a_4.choices?.[0]?.finish_reason && (_0x4dd75a_5.finishReason = _0x4dd75a_4.choices[0].finish_reason), 
    "\x73\x74\x72\x69\x6e\x67" == typeof _0x4dd75a_b && (_0x4dd75a_5.text = _0x4dd75a_4.nyx_replace ? _0x4dd75a_b : _0x4dd75a_5.text + _0x4dd75a_b), 
    _0x4dd75a_4.nyx_metadata?.summary && (_0x4dd75a_5.metadata.summary = (_0x4dd75a_5.metadata.summary + _0x4dd75a_4.nyx_metadata.summary).slice(0, 2400)), 
    _0x4dd75a_5.text.length > 2e5) throw Error("\x54\x68\x69\x73\x20\x72\x65\x70\x6c\x79\x20\x69\x73\x20\x74\x6f\x6f\x20\x6c\x6f\x6e\x67\x2e\x20\x41\x73\x6b\x20\x66\x6f\x72\x20\x61\x20\x73\x68\x6f\x72\x74\x65\x72\x20\x61\x6e\x73\x77\x65\x72\x2e");
    ("\x73\x74\x72\x69\x6e\x67" == typeof _0x4dd75a_b || _0x4dd75a_4.nyx_metadata?.summary) && _0x4dd75a_1?.(_0x4dd75a_5);
  }
  try {
    for (;!_0x4dd75a_7; ) {
      const {value: _0x4dd75a_0, done: _0x4dd75a_1} = await _0x4dd75a_3.read();
      if (_0x4dd75a_1) break;
      if (_0x4dd75a_6 += _0x4dd75a_4.decode(_0x4dd75a_0, {
        stream: !0
      }), _0x4dd75a_6.length > 1e6) throw Error("\x54\x68\x65\x20\x41\x49\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x65\x78\x63\x65\x65\x64\x65\x64\x20\x69\x74\x73\x20\x73\x69\x7a\x65\x20\x6c\x69\x6d\x69\x74\x2e");
      let _0x4dd75a_2;
      for (;(_0x4dd75a_2 = _0x4dd75a_6.indexOf("\x0a")) >= 0 && (_0x4dd75a_b(_0x4dd75a_6.slice(0, _0x4dd75a_2).trimEnd()), 
      _0x4dd75a_6 = _0x4dd75a_6.slice(_0x4dd75a_2 + 1), !_0x4dd75a_7); ) ;
    }
    if (_0x4dd75a_6 += _0x4dd75a_4.decode(), !_0x4dd75a_7 && _0x4dd75a_6.trim() && _0x4dd75a_b(_0x4dd75a_6.trim()), 
    !_0x4dd75a_7) throw Error("\x54\x68\x65\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x65\x6e\x64\x65\x64\x20\x62\x65\x66\x6f\x72\x65\x20\x74\x68\x65\x20\x72\x65\x70\x6c\x79\x20\x66\x69\x6e\x69\x73\x68\x65\x64\x2e\x20\x50\x6c\x65\x61\x73\x65\x20\x72\x65\x74\x72\x79\x2e");
    if (_0x4dd75a_2) {
      if (!_0x4dd75a_8) throw Error("\x54\x68\x69\x73\x20\x6d\x6f\x64\x65\x6c\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x6e\x6f\x20\x61\x75\x64\x69\x6f\x2e");
      const _0x4dd75a_0 = "\x70\x63\x6d\x31\x36" === _0x4dd75a_2;
      if (_0x4dd75a_0 && _0x4dd75a_8 % 2) throw Error("\x54\x68\x65\x20\x76\x6f\x69\x63\x65\x20\x61\x75\x64\x69\x6f\x20\x77\x61\x73\x20\x69\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x2e");
      const _0x4dd75a_1 = new Uint8Array(_0x4dd75a_8 + (_0x4dd75a_0 ? 44 : 0));
      if (_0x4dd75a_0) {
        const _0x4dd75a_0 = new DataView(_0x4dd75a_1.buffer), _0x4dd75a_2 = (_0x4dd75a_0, _0x4dd75a_2) => [ ..._0x4dd75a_2 ].forEach((_0x4dd75a_2, _0x4dd75a_3) => _0x4dd75a_1[_0x4dd75a_0 + _0x4dd75a_3] = _0x4dd75a_2.charCodeAt(0));
        _0x4dd75a_2(0, "\x52\x49\x46\x46"), _0x4dd75a_0.setUint32(4, _0x4dd75a_8 + 36, !0), _0x4dd75a_2(8, "\x57\x41\x56\x45\x66\x6d\x74\x20"), 
        _0x4dd75a_0.setUint32(16, 16, !0), _0x4dd75a_0.setUint16(20, 1, !0), _0x4dd75a_0.setUint16(22, 1, !0), 
        _0x4dd75a_0.setUint32(24, 24e3, !0), _0x4dd75a_0.setUint32(28, 48e3, !0), _0x4dd75a_0.setUint16(32, 2, !0), 
        _0x4dd75a_0.setUint16(34, 16, !0), _0x4dd75a_2(36, "\x64\x61\x74\x61"), _0x4dd75a_0.setUint32(40, _0x4dd75a_8, !0);
      }
      let _0x4dd75a_3 = _0x4dd75a_0 ? 44 : 0;
      for (const _0x4dd75a_2 of _0x4dd75a_a) _0x4dd75a_1.set(_0x4dd75a_2, _0x4dd75a_3), 
      _0x4dd75a_3 += _0x4dd75a_2.length;
      let _0x4dd75a_4 = "";
      for (let _0x4dd75a_2 = 0; _0x4dd75a_2 < _0x4dd75a_1.length; _0x4dd75a_2 += 8192) _0x4dd75a_4 += String.fromCharCode(..._0x4dd75a_1.subarray(_0x4dd75a_2, _0x4dd75a_2 + 8192));
      _0x4dd75a_5.audio = {
        mime: _0x4dd75a_0 ? "\x61\x75\x64\x69\x6f\x2f\x77\x61\x76" : "\x61\x75\x64\x69\x6f\x2f\x6d\x70\x65\x67",
        data: btoa(_0x4dd75a_4)
      }, _0x4dd75a_5.text = _0x4dd75a_9 || _0x4dd75a_5.text;
    }
    return _0x4dd75a_5;
  } finally {
    await _0x4dd75a_3.cancel().catch(() => {}), _0x4dd75a_3.releaseLock();
  }
}
