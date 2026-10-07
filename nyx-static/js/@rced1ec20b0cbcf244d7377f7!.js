const _0xc0ba45_0 = new Map, _0xa15090_0 = new Set;

"\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof navigator && navigator.serviceWorker && navigator.serviceWorker.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", _0xa15090_1 => {
  if (!_0xa15090_1.data?.$controller$swrevive || !_0xa15090_1.source?.scriptURL) return;
  const _0xa15090_2 = _0xa15090_1.source;
  if ("\x75\x6e\x64\x65\x66\x69\x6e\x65\x64" != typeof ServiceWorker && _0xa15090_2 instanceof ServiceWorker && [ "\x61\x63\x74\x69\x76\x61\x74\x69\x6e\x67", "\x61\x63\x74\x69\x76\x61\x74\x65\x64" ].includes(_0xa15090_2.state)) for (const _0xa15090_3 of _0xa15090_0) {
    const _0xa15090_0 = _0xa15090_3.serviceWorkerController;
    if (_0xa15090_0 && _0xa15090_0 !== _0xa15090_2) try {
      const _0xa15090_1 = new URL(_0xa15090_0.scriptURL), _0xa15090_4 = new URL(_0xa15090_2.scriptURL);
      if (_0xa15090_1.origin !== _0xa15090_4.origin || _0xa15090_1.pathname !== _0xa15090_4.pathname) continue;
      _0xa15090_3.serviceWorkerController = _0xa15090_2, _0xa15090_3.guardServiceWorkerRevive = !1;
    } catch {}
  }
});

export function trackProxyController(_0xa15090_1) {
  return _0xa15090_0.add(_0xa15090_1), () => _0xa15090_0.delete(_0xa15090_1);
}

export function loadProxyScript(_0xa15090_0, _0xa15090_1, {timeoutMs: _0xa15090_2 = 2e4} = {}) {
  if (_0xa15090_1()) return Promise.resolve();
  const _0xa15090_3 = new URL(_0xa15090_0, location.href).href;
  if (_0xc0ba45_0.has(_0xa15090_3)) return _0xc0ba45_0.get(_0xa15090_3);
  const _0xa15090_4 = () => new Promise((_0xa15090_3, _0xa15090_4) => {
    if (_0xa15090_1()) return _0xa15090_3();
    const _0xa15090_5 = document.createElement("\x73\x63\x72\x69\x70\x74");
    _0xa15090_5.src = _0xa15090_0, _0xa15090_5.async = !1;
    const _0xa15090_6 = _0xa15090_0 => {
      clearTimeout(_0xa15090_7), _0xa15090_5.onload = null, _0xa15090_5.onerror = null, 
      _0xa15090_0 ? (_0xa15090_5.remove(), _0xa15090_4(_0xa15090_0)) : _0xa15090_3();
    }, _0xa15090_7 = setTimeout(() => _0xa15090_6(new Error("\x54\x68\x65\x20\x62\x72\x6f\x77\x73\x65\x72\x20\x65\x6e\x67\x69\x6e\x65\x20\x74\x6f\x6f\x6b\x20\x74\x6f\x6f\x20\x6c\x6f\x6e\x67\x20\x74\x6f\x20\x6c\x6f\x61\x64\x2e\x20\x50\x6c\x65\x61\x73\x65\x20\x72\x65\x74\x72\x79\x2e")), _0xa15090_2);
    _0xa15090_5.onload = () => _0xa15090_6(_0xa15090_1() ? null : new Error("\x54\x68\x65\x20\x62\x72\x6f\x77\x73\x65\x72\x20\x65\x6e\x67\x69\x6e\x65\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x63\x6f\x6d\x70\x6c\x65\x74\x65\x20\x73\x63\x72\x69\x70\x74\x2e")), 
    _0xa15090_5.onerror = () => _0xa15090_6(Object.assign(new Error("\x54\x68\x65\x20\x62\x72\x6f\x77\x73\x65\x72\x20\x65\x6e\x67\x69\x6e\x65\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x6c\x6f\x61\x64\x2e\x20\x50\x6c\x65\x61\x73\x65\x20\x72\x65\x74\x72\x79\x2e"), {
      retryable: !0
    })), document.head.append(_0xa15090_5);
  }), _0xa15090_5 = _0xa15090_4().catch(_0xa15090_0 => {
    if (!_0xa15090_0.retryable) throw _0xa15090_0;
    return _0xa15090_4();
  }).finally(() => {
    _0xc0ba45_0.get(_0xa15090_3) === _0xa15090_5 && _0xc0ba45_0.delete(_0xa15090_3);
  });
  return _0xc0ba45_0.set(_0xa15090_3, _0xa15090_5), _0xa15090_5;
}

export function waitForProxyController(_0xa15090_0, _0xa15090_1 = 2e4) {
  let _0xa15090_2;
  return Promise.race([ _0xa15090_0.wait(), new Promise((_0xa15090_0, _0xa15090_3) => {
    _0xa15090_2 = setTimeout(() => _0xa15090_3(new Error("\x54\x68\x65\x20\x62\x72\x6f\x77\x73\x65\x72\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x20\x74\x6f\x6f\x6b\x20\x74\x6f\x6f\x20\x6c\x6f\x6e\x67\x20\x74\x6f\x20\x73\x74\x61\x72\x74\x2e\x20\x50\x6c\x65\x61\x73\x65\x20\x72\x65\x74\x72\x79\x2e")), _0xa15090_1);
  }) ]).finally(() => clearTimeout(_0xa15090_2));
}
