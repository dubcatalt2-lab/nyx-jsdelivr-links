export const gameCdnHosts = new Set([ "\x63\x64\x6e\x2e\x6a\x73\x64\x65\x6c\x69\x76\x72\x2e\x6e\x65\x74", "\x72\x61\x77\x2e\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6f\x6e\x74\x65\x6e\x74\x2e\x63\x6f\x6d", "\x72\x61\x77\x63\x64\x6e\x2e\x67\x69\x74\x68\x61\x63\x6b\x2e\x63\x6f\x6d", "\x72\x61\x77\x2e\x67\x69\x74\x68\x61\x63\x6b\x2e\x63\x6f\x6d" ]);

export function repairGameResourcePath(_0x54624b_0) {
  return (_0x54624b_0 = _0x54624b_0.replace(/\/genizy\/google-class(?=@|\/)/g, "\x2f\x74\x61\x73\x6b\x6d\x61\x73\x74\x65\x72\x37\x37\x33\x2f\x67\x6f\x6f\x67\x6c\x65\x2d\x63\x6c\x61\x73\x73").replace(/\/gh\/genizy\/ovo-3-dimension@[^/]+\//g, "\x2f\x67\x68\x2f\x62\x75\x62\x62\x6c\x66\x61\x6e\x2f\x6f\x76\x6f\x2d\x33\x2d\x64\x69\x6d\x65\x6e\x73\x69\x6f\x6e\x40\x31\x30\x32\x31\x37\x39\x62\x66\x34\x32\x34\x32\x66\x64\x32\x33\x37\x63\x34\x36\x63\x35\x35\x35\x62\x61\x31\x35\x34\x63\x32\x66\x33\x32\x35\x64\x33\x35\x31\x63\x2f")).replace(/(\/web-ports\/fear-and-hunger-2@[^/]+\/(?:js\/plugins|data)\/)([^/]+\.(?:js|json))$/i, (_0x54624b_0, _0x54624b_1, _0x54624b_2) => _0x54624b_1 + _0x54624b_2.toLowerCase());
}

export function normalizeGameCdnUrl(_0x54624b_0, _0x54624b_1) {
  try {
    const _0x54624b_2 = new URL(String(_0x54624b_0), _0x54624b_1);
    return ![ "\x68\x74\x74\x70\x3a", "\x68\x74\x74\x70\x73\x3a" ].includes(_0x54624b_2.protocol) || !gameCdnHosts.has(_0x54624b_2.hostname) || _0x54624b_2.username || _0x54624b_2.password || _0x54624b_2.port ? null : ("\x63\x64\x6e\x2e\x6a\x73\x64\x65\x6c\x69\x76\x72\x2e\x6e\x65\x74" === _0x54624b_2.hostname && /^\/(?!gh\/|npm\/|combine\/)[\w.-]+\/[\w.-]+@[^/]+\//.test(_0x54624b_2.pathname) && (_0x54624b_2.pathname = "\x2f\x67\x68" + _0x54624b_2.pathname), 
    _0x54624b_2.pathname = repairGameResourcePath(_0x54624b_2.pathname), _0x54624b_2);
  } catch {
    return null;
  }
}

export function gameResourceUrl(_0x54624b_0, _0x54624b_1, _0x54624b_2) {
  const _0x54624b_3 = normalizeGameCdnUrl(_0x54624b_0, _0x54624b_1);
  return _0x54624b_3 ? `${_0x54624b_2}\x2f\x67\x6e\x2d\x6d\x61\x74\x68\x2d\x72\x65\x73\x6f\x75\x72\x63\x65\x2f${_0x54624b_3.protocol.slice(0, -1)}\x2f${_0x54624b_3.host}${_0x54624b_3.pathname}${_0x54624b_3.search}${_0x54624b_3.hash}` : String(_0x54624b_0);
}

export function gameResourceTarget(_0x54624b_0) {
  try {
    const _0x54624b_1 = new URL(_0x54624b_0, "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6e\x79\x78\x2e\x69\x6e\x76\x61\x6c\x69\x64"), _0x54624b_2 = _0x54624b_1.pathname.match(/^\/gn-math-resource\/(https?)\/([^/]+)(\/.*)$/);
    return _0x54624b_2 ? normalizeGameCdnUrl(`${_0x54624b_2[1]}\x3a\x2f\x2f${_0x54624b_2[2]}${_0x54624b_2[3]}${_0x54624b_1.search}`) : null;
  } catch {
    return null;
  }
}
