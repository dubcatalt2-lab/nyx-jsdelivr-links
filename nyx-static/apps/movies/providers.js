export const providerDefinitions = Object.freeze([ [ "\x76\x69\x64\x79", "\x56\x69\x64\x79", "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x76\x69\x64\x79\x2e\x73\x74", "" ], [ "\x76\x69\x64\x65\x61\x73\x79", "\x56\x69\x64\x65\x61\x73\x79", "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x70\x6c\x61\x79\x65\x72\x2e\x76\x69\x64\x65\x61\x73\x79\x2e\x6e\x65\x74", "" ], [ "\x76\x69\x64\x66\x61\x73\x74", "\x56\x69\x64\x46\x61\x73\x74", "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x76\x69\x64\x66\x61\x73\x74\x2e\x70\x72\x6f", "" ], [ "\x76\x69\x64\x6c\x69\x6e\x6b", "\x56\x69\x64\x4c\x69\x6e\x6b", "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x76\x69\x64\x6c\x69\x6e\x6b\x2e\x70\x72\x6f", "" ], [ "\x73\x70\x65\x6e\x63\x65\x72\x64\x65\x76\x73", "\x53\x70\x65\x6e\x63\x65\x72\x44\x65\x76\x73", "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x70\x65\x6e\x63\x65\x72\x64\x65\x76\x73\x2e\x78\x79\x7a", "" ], [ "\x76\x69\x64\x6b\x69\x6e\x67", "\x56\x69\x64\x4b\x69\x6e\x67", "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x76\x69\x64\x6b\x69\x6e\x67\x2e\x6e\x65\x74", "\x2f\x65\x6d\x62\x65\x64" ], [ "\x76\x69\x64\x73\x72\x63\x2d\x73\x75", "\x56\x69\x64\x53\x72\x63\x2e\x73\x75", "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x76\x69\x64\x73\x72\x63\x2e\x73\x75", "\x2f\x65\x6d\x62\x65\x64" ], [ "\x76\x69\x64\x72\x6f\x63\x6b", "\x56\x69\x64\x52\x6f\x63\x6b", "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x76\x69\x64\x72\x6f\x63\x6b\x2e\x6e\x65\x74", "" ], [ "\x76\x69\x64\x73\x72\x63\x2d\x63\x63", "\x56\x69\x64\x53\x72\x63\x2e\x63\x63", "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x76\x69\x64\x73\x72\x63\x2e\x63\x63", "\x2f\x76\x32\x2f\x65\x6d\x62\x65\x64" ], [ "\x65\x6d\x62\x65\x64\x2d\x73\x75", "\x45\x6d\x62\x65\x64\x2e\x73\x75", "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x65\x6d\x62\x65\x64\x2e\x73\x75", "\x2f\x65\x6d\x62\x65\x64" ] ].map(Object.freeze));

export function additionalSources(_0x0722d8_0, _0x0722d8_1, _0x0722d8_2, _0x0722d8_3) {
  if (![ "\x6d\x6f\x76\x69\x65", "\x74\x76" ].includes(_0x0722d8_0) || !/^[1-9]\d{0,9}$/.test(String(_0x0722d8_1))) return [];
  if (!("\x74\x76" !== _0x0722d8_0 || /^\d{1,3}$/.test(String(_0x0722d8_2)) && /^[1-9]\d{0,3}$/.test(String(_0x0722d8_3)))) return [];
  const _0x0722d8_4 = "\x6d\x6f\x76\x69\x65" === _0x0722d8_0 ? `\x2f\x6d\x6f\x76\x69\x65\x2f${_0x0722d8_1}` : `\x2f\x74\x76\x2f${_0x0722d8_1}\x2f${_0x0722d8_2}\x2f${_0x0722d8_3}`;
  return providerDefinitions.map(([_0x0722d8_0, _0x0722d8_1, _0x0722d8_2, _0x0722d8_3]) => ({
    id: _0x0722d8_0,
    name: _0x0722d8_1,
    url: _0x0722d8_2 + _0x0722d8_3 + _0x0722d8_4,
    \u{70}\u{72}\u{6f}\u{78}\u{79}: !0
  }));
}

export function additionalSourceUrl(_0x0722d8_0) {
  try {
    const _0x0722d8_1 = new URL(_0x0722d8_0);
    if (_0x0722d8_1.username || _0x0722d8_1.password || _0x0722d8_1.search || _0x0722d8_1.hash) return null;
    for (const [, , _0x0722d8_0, _0x0722d8_2] of providerDefinitions) if (_0x0722d8_1.origin === _0x0722d8_0 && _0x0722d8_1.pathname.startsWith(_0x0722d8_2 + "\x2f") && /^\/(movie\/[1-9]\d{0,9}|tv\/[1-9]\d{0,9}\/\d{1,3}\/[1-9]\d{0,3})$/.test(_0x0722d8_1.pathname.slice(_0x0722d8_2.length))) return _0x0722d8_1.href;
  } catch {}
  return null;
}

export function movieSourceUrl(_0x0722d8_0) {
  const _0x0722d8_1 = additionalSourceUrl(_0x0722d8_0);
  if (_0x0722d8_1) return _0x0722d8_1;
  try {
    const _0x0722d8_1 = new URL(_0x0722d8_0);
    if ("\x68\x74\x74\x70\x73\x3a" !== _0x0722d8_1.protocol || _0x0722d8_1.port || _0x0722d8_1.username || _0x0722d8_1.password || _0x0722d8_1.hash) return null;
    if ("\x77\x61\x74\x63\x68\x2e\x72\x69\x76\x65\x73\x74\x72\x65\x61\x6d\x2e\x61\x70\x70" === _0x0722d8_1.hostname && "\x2f\x65\x6d\x62\x65\x64" === _0x0722d8_1.pathname) {
      const _0x0722d8_0 = _0x0722d8_1.searchParams, _0x0722d8_2 = _0x0722d8_0.get("\x74\x79\x70\x65"), _0x0722d8_3 = _0x0722d8_0.get("\x69\x64"), _0x0722d8_4 = [ ..._0x0722d8_0.keys() ];
      return /^[1-9]\d{0,9}$/.test(_0x0722d8_3 || "") && new Set(_0x0722d8_4).size === _0x0722d8_4.length && ("\x6d\x6f\x76\x69\x65" === _0x0722d8_2 && 2 === _0x0722d8_4.length && _0x0722d8_4.every(_0x0722d8_0 => [ "\x74\x79\x70\x65", "\x69\x64" ].includes(_0x0722d8_0)) || "\x74\x76" === _0x0722d8_2 && 4 === _0x0722d8_4.length && _0x0722d8_4.every(_0x0722d8_0 => [ "\x74\x79\x70\x65", "\x69\x64", "\x73\x65\x61\x73\x6f\x6e", "\x65\x70\x69\x73\x6f\x64\x65" ].includes(_0x0722d8_0)) && /^\d{1,3}$/.test(_0x0722d8_0.get("\x73\x65\x61\x73\x6f\x6e") || "") && /^[1-9]\d{0,3}$/.test(_0x0722d8_0.get("\x65\x70\x69\x73\x6f\x64\x65") || "")) ? _0x0722d8_1.href : null;
    }
    if ("\x61\x6e\x69\x65\x6d\x62\x65\x64\x2e\x73\x65" === _0x0722d8_1.hostname) {
      const _0x0722d8_0 = _0x0722d8_1.searchParams, _0x0722d8_2 = [ ..._0x0722d8_0.keys() ];
      return /^\/e\/[1-9]\d{0,9}\/[1-9]\d{0,3}$/.test(_0x0722d8_1.pathname) && 3 === _0x0722d8_2.length && 3 === new Set(_0x0722d8_2).size && _0x0722d8_2.every(_0x0722d8_0 => [ "\x6c\x61\x6e\x67", "\x61\x75\x74\x6f\x70\x6c\x61\x79", "\x74" ].includes(_0x0722d8_0)) && "\x73\x75\x62" === _0x0722d8_0.get("\x6c\x61\x6e\x67") && "\x31" === _0x0722d8_0.get("\x61\x75\x74\x6f\x70\x6c\x61\x79") && "\x30" === _0x0722d8_0.get("\x74") ? _0x0722d8_1.href : null;
    }
    if ("\x70\x6c\x79\x72\x2e\x61\x6e\x69\x6d\x65\x78\x2e\x6f\x6e\x65" === _0x0722d8_1.hostname) {
      const _0x0722d8_0 = _0x0722d8_1.searchParams, _0x0722d8_2 = [ ..._0x0722d8_0.keys() ];
      return /^\/e\/[a-z0-9]+(?:-[a-z0-9]+)*\/[1-9]\d{0,3}$/.test(_0x0722d8_1.pathname) && 5 === _0x0722d8_2.length && 5 === new Set(_0x0722d8_2).size && _0x0722d8_2.every(_0x0722d8_0 => [ "\x6c\x61\x6e\x67", "\x61\x75\x74\x6f\x70\x6c\x61\x79", "\x74", "\x68\x61\x73\x50\x72\x65\x76", "\x68\x61\x73\x4e\x65\x78\x74" ].includes(_0x0722d8_0)) && "\x73\x75\x62" === _0x0722d8_0.get("\x6c\x61\x6e\x67") && "\x31" === _0x0722d8_0.get("\x61\x75\x74\x6f\x70\x6c\x61\x79") && "\x30" === _0x0722d8_0.get("\x74") && /^[01]$/.test(_0x0722d8_0.get("\x68\x61\x73\x50\x72\x65\x76") || "") && /^[01]$/.test(_0x0722d8_0.get("\x68\x61\x73\x4e\x65\x78\x74") || "") ? _0x0722d8_1.href : null;
    }
    if (_0x0722d8_1.search) return null;
    if ("\x66\x72\x61\x6d\x65\x78\x74\x76\x2e\x74\x65\x63\x68" === _0x0722d8_1.hostname && /^\/embed\/[1-9]\d{0,9}(\/\d{1,3}\/[1-9]\d{0,3})?$/.test(_0x0722d8_1.pathname)) return _0x0722d8_1.href;
    if ("\x6e\x68\x64\x61\x70\x69\x2e\x63\x6f\x6d" === _0x0722d8_1.hostname && /^\/(movie\/\d{1,10}|tv\/\d{1,10}\/\d{1,3}\/\d{1,4}|anime\/\d{1,10}\/\d{1,4})$/.test(_0x0722d8_1.pathname)) return _0x0722d8_1.href;
    if ("\x73\x75\x70\x61\x70\x6c\x61\x79\x2e\x66\x75\x6e" === _0x0722d8_1.hostname && (/^\/mw\/([a-zA-Z0-9]+-)+[a-zA-Z0-9]{5,30}(\/\d{1,3}\/\d{1,4})?$/.test(_0x0722d8_1.pathname) || /^\/stream\/ani\/\d{1,8}\/\d{1,4}\/(sub|dub)$/.test(_0x0722d8_1.pathname))) return _0x0722d8_1.href;
    if ("\x61\x6e\x69\x2e\x6d\x65\x67\x61\x70\x6c\x61\x79\x2e\x73\x75" === _0x0722d8_1.hostname && /^\/kisskh\/\d{1,10}$/.test(_0x0722d8_1.pathname)) return _0x0722d8_1.href;
  } catch {}
  return null;
}
