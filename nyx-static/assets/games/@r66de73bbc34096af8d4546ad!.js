const _0x0f9ec6_0 = "\x5f\x5f\x6e\x79\x78\x5f\x67\x61\x6d\x65\x5f\x66\x69\x6c\x65\x73\x5f\x76\x31\x5f", _0x0f9ec6_1 = _0x0f9ec6_0 => /^\/(?:userfs|idbfs|home\/web_user\/love)(?:\/|$)/.test(_0x0f9ec6_0), _0x0f9ec6_2 = _0x0f9ec6_0 => (new TextEncoder).encode(_0x0f9ec6_0).length;

function _0x0f9ec6_3(_0x0f9ec6_0) {
  if (_0x0f9ec6_0 instanceof Date) return {
    type: "\x64\x61\x74\x65",
    value: _0x0f9ec6_0.toISOString()
  };
  if (_0x0f9ec6_0 instanceof ArrayBuffer || ArrayBuffer.isView(_0x0f9ec6_0)) {
    const _0x0f9ec6_1 = _0x0f9ec6_0 instanceof ArrayBuffer ? new Uint8Array(_0x0f9ec6_0) : new Uint8Array(_0x0f9ec6_0.buffer, _0x0f9ec6_0.byteOffset, _0x0f9ec6_0.byteLength);
    if (_0x0f9ec6_1.length > 19e4) throw Error("\x54\x68\x69\x73\x20\x67\x61\x6d\x65\x20\x73\x61\x76\x65\x20\x65\x78\x63\x65\x65\x64\x73\x20\x74\x68\x65\x20\x63\x6c\x6f\x75\x64\x20\x73\x69\x7a\x65\x20\x6c\x69\x6d\x69\x74\x2e");
    let _0x0f9ec6_2 = "";
    for (let _0x0f9ec6_0 = 0; _0x0f9ec6_0 < _0x0f9ec6_1.length; _0x0f9ec6_0 += 8192) _0x0f9ec6_2 += String.fromCharCode(..._0x0f9ec6_1.subarray(_0x0f9ec6_0, _0x0f9ec6_0 + 8192));
    return {
      type: _0x0f9ec6_0 instanceof ArrayBuffer ? "\x62\x75\x66\x66\x65\x72" : "\x62\x79\x74\x65\x73",
      value: btoa(_0x0f9ec6_2)
    };
  }
  return Array.isArray(_0x0f9ec6_0) ? {
    type: "\x61\x72\x72\x61\x79",
    value: _0x0f9ec6_0.map(_0x0f9ec6_3)
  } : _0x0f9ec6_0 && "\x6f\x62\x6a\x65\x63\x74" == typeof _0x0f9ec6_0 ? {
    type: "\x6f\x62\x6a\x65\x63\x74",
    value: Object.entries(_0x0f9ec6_0).map(([_0x0f9ec6_0, _0x0f9ec6_1]) => [ _0x0f9ec6_0, _0x0f9ec6_3(_0x0f9ec6_1) ])
  } : {
    type: "\x73\x63\x61\x6c\x61\x72",
    value: _0x0f9ec6_0
  };
}

function _0x0f9ec6_4(_0x0f9ec6_0) {
  if ("\x64\x61\x74\x65" === _0x0f9ec6_0.type) return new Date(_0x0f9ec6_0.value);
  if ("\x62\x75\x66\x66\x65\x72" === _0x0f9ec6_0.type || "\x62\x79\x74\x65\x73" === _0x0f9ec6_0.type) {
    const _0x0f9ec6_1 = Uint8Array.from(atob(_0x0f9ec6_0.value), _0x0f9ec6_0 => _0x0f9ec6_0.charCodeAt(0));
    return "\x62\x75\x66\x66\x65\x72" === _0x0f9ec6_0.type ? _0x0f9ec6_1.buffer : _0x0f9ec6_1;
  }
  if ("\x61\x72\x72\x61\x79" === _0x0f9ec6_0.type) return _0x0f9ec6_0.value.map(_0x0f9ec6_4);
  if ("\x6f\x62\x6a\x65\x63\x74" === _0x0f9ec6_0.type) return Object.fromEntries(_0x0f9ec6_0.value.map(([_0x0f9ec6_0, _0x0f9ec6_1]) => [ _0x0f9ec6_0, _0x0f9ec6_4(_0x0f9ec6_1) ]));
  if ("\x73\x63\x61\x6c\x61\x72" === _0x0f9ec6_0.type) return _0x0f9ec6_0.value;
  throw Error("\x49\x6e\x76\x61\x6c\x69\x64\x20\x67\x61\x6d\x65\x20\x73\x61\x76\x65\x20\x64\x61\x74\x61\x2e");
}

function _0x0f9ec6_5(_0x0f9ec6_0, _0x0f9ec6_1, _0x0f9ec6_2) {
  return new Promise((_0x0f9ec6_3, _0x0f9ec6_4) => {
    const _0x0f9ec6_5 = _0x0f9ec6_1 ? indexedDB.open(_0x0f9ec6_0, _0x0f9ec6_1) : indexedDB.open(_0x0f9ec6_0);
    let _0x0f9ec6_6 = !1;
    const _0x0f9ec6_7 = _0x0f9ec6_0 => {
      _0x0f9ec6_6 || (_0x0f9ec6_6 = !0, clearTimeout(_0x0f9ec6_8), _0x0f9ec6_4(_0x0f9ec6_0));
    }, _0x0f9ec6_8 = setTimeout(() => _0x0f9ec6_7(Error("\x47\x61\x6d\x65\x20\x73\x74\x6f\x72\x61\x67\x65\x20\x69\x73\x20\x62\x75\x73\x79\x2e\x20\x43\x6c\x6f\x73\x65\x20\x6f\x74\x68\x65\x72\x20\x67\x61\x6d\x65\x20\x74\x61\x62\x73\x20\x61\x6e\x64\x20\x72\x65\x74\x72\x79\x2e")), 4e3);
    _0x0f9ec6_5.onupgradeneeded = () => {
      if (_0x0f9ec6_6) _0x0f9ec6_5.transaction.abort(); else try {
        _0x0f9ec6_2?.(_0x0f9ec6_5.result);
      } catch (_0x0f9ec6_0) {
        _0x0f9ec6_5.transaction.abort(), _0x0f9ec6_7(_0x0f9ec6_0);
      }
    }, _0x0f9ec6_5.onerror = () => _0x0f9ec6_7(_0x0f9ec6_5.error), _0x0f9ec6_5.onsuccess = () => {
      _0x0f9ec6_6 ? _0x0f9ec6_5.result.close() : (_0x0f9ec6_6 = !0, clearTimeout(_0x0f9ec6_8), 
      _0x0f9ec6_3(_0x0f9ec6_5.result));
    }, _0x0f9ec6_5.onblocked = () => _0x0f9ec6_7(Error("\x47\x61\x6d\x65\x20\x73\x74\x6f\x72\x61\x67\x65\x20\x69\x73\x20\x62\x75\x73\x79\x2e\x20\x43\x6c\x6f\x73\x65\x20\x6f\x74\x68\x65\x72\x20\x67\x61\x6d\x65\x20\x74\x61\x62\x73\x20\x61\x6e\x64\x20\x72\x65\x74\x72\x79\x2e"));
  });
}

export async function readGameFiles() {
  const _0x0f9ec6_0 = {};
  if (!indexedDB.databases) return _0x0f9ec6_0;
  for (const {name: _0x0f9ec6_2} of await indexedDB.databases()) {
    if (!_0x0f9ec6_1(_0x0f9ec6_2 || "")) continue;
    const _0x0f9ec6_4 = await _0x0f9ec6_5(_0x0f9ec6_2);
    try {
      if (!_0x0f9ec6_4.objectStoreNames.contains("\x46\x49\x4c\x45\x5f\x44\x41\x54\x41")) continue;
      const _0x0f9ec6_1 = await new Promise((_0x0f9ec6_0, _0x0f9ec6_1) => {
        const _0x0f9ec6_2 = _0x0f9ec6_4.transaction("\x46\x49\x4c\x45\x5f\x44\x41\x54\x41"), _0x0f9ec6_5 = _0x0f9ec6_2.objectStore("\x46\x49\x4c\x45\x5f\x44\x41\x54\x41"), _0x0f9ec6_6 = [], _0x0f9ec6_7 = _0x0f9ec6_5.openCursor();
        _0x0f9ec6_7.onsuccess = () => {
          const _0x0f9ec6_0 = _0x0f9ec6_7.result;
          if (_0x0f9ec6_0) {
            try {
              _0x0f9ec6_6.push({
                key: _0x0f9ec6_3(_0x0f9ec6_0.key),
                value: _0x0f9ec6_3(_0x0f9ec6_0.value),
                keyPath: _0x0f9ec6_5.keyPath
              });
            } catch (_0x0f9ec6_4) {
              return _0x0f9ec6_1(_0x0f9ec6_4), void _0x0f9ec6_2.abort();
            }
            _0x0f9ec6_0.continue();
          }
        }, _0x0f9ec6_2.oncomplete = () => _0x0f9ec6_0(_0x0f9ec6_6), _0x0f9ec6_2.onabort = () => _0x0f9ec6_1(_0x0f9ec6_2.error || Error("\x47\x61\x6d\x65\x20\x73\x61\x76\x65\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x62\x65\x20\x72\x65\x61\x64\x2e")), 
        _0x0f9ec6_2.onerror = () => _0x0f9ec6_1(_0x0f9ec6_2.error);
      });
      for (const _0x0f9ec6_3 of _0x0f9ec6_1) _0x0f9ec6_0[JSON.stringify([ _0x0f9ec6_2, _0x0f9ec6_3.key ])] = {
        database: _0x0f9ec6_2,
        version: _0x0f9ec6_4.version,
        ..._0x0f9ec6_3
      };
    } finally {
      _0x0f9ec6_4.close();
    }
  }
  return _0x0f9ec6_0;
}

export function splitGameFiles(_0x0f9ec6_1) {
  if (!Object.keys(_0x0f9ec6_1).length) return {};
  const _0x0f9ec6_3 = JSON.stringify(_0x0f9ec6_1);
  if (_0x0f9ec6_2(_0x0f9ec6_3) > 25e4) throw Error("\x54\x68\x69\x73\x20\x67\x61\x6d\x65\x20\x73\x61\x76\x65\x20\x65\x78\x63\x65\x65\x64\x73\x20\x74\x68\x65\x20\x63\x6c\x6f\x75\x64\x20\x73\x69\x7a\x65\x20\x6c\x69\x6d\x69\x74\x2e\x20\x59\x6f\x75\x72\x20\x6c\x6f\x63\x61\x6c\x20\x70\x72\x6f\x67\x72\x65\x73\x73\x20\x69\x73\x20\x72\x65\x74\x61\x69\x6e\x65\x64\x2e");
  const _0x0f9ec6_4 = {};
  let _0x0f9ec6_5 = "", _0x0f9ec6_6 = 0, _0x0f9ec6_7 = 0;
  for (const _0x0f9ec6_8 of _0x0f9ec6_3) {
    const _0x0f9ec6_1 = _0x0f9ec6_2(_0x0f9ec6_8);
    _0x0f9ec6_7 + _0x0f9ec6_1 > 23e3 && (_0x0f9ec6_4[_0x0f9ec6_0 + _0x0f9ec6_6++] = _0x0f9ec6_5, 
    _0x0f9ec6_5 = "", _0x0f9ec6_7 = 0), _0x0f9ec6_5 += _0x0f9ec6_8, _0x0f9ec6_7 += _0x0f9ec6_1;
  }
  return _0x0f9ec6_4[_0x0f9ec6_0 + _0x0f9ec6_6] = _0x0f9ec6_5, _0x0f9ec6_4;
}

export function joinGameFiles(_0x0f9ec6_1) {
  const _0x0f9ec6_2 = Object.keys(_0x0f9ec6_1).filter(_0x0f9ec6_1 => _0x0f9ec6_1.startsWith(_0x0f9ec6_0)).sort((_0x0f9ec6_0, _0x0f9ec6_1) => Number(_0x0f9ec6_0.slice(20)) - Number(_0x0f9ec6_1.slice(20)));
  return _0x0f9ec6_2.length ? JSON.parse(_0x0f9ec6_2.map(_0x0f9ec6_0 => _0x0f9ec6_1[_0x0f9ec6_0]).join("")) : {};
}

export const isGameFileKey = _0x0f9ec6_1 => _0x0f9ec6_1.startsWith(_0x0f9ec6_0);

export function gameFileTime(_0x0f9ec6_0) {
  const _0x0f9ec6_1 = "\x6f\x62\x6a\x65\x63\x74" === _0x0f9ec6_0?.value?.type ? _0x0f9ec6_0.value.value.find(([_0x0f9ec6_0]) => "\x74\x69\x6d\x65\x73\x74\x61\x6d\x70" === _0x0f9ec6_0)?.[1] : null;
  return "\x64\x61\x74\x65" === _0x0f9ec6_1?.type ? Date.parse(_0x0f9ec6_1.value) : 0;
}

export async function restoreGameFiles(_0x0f9ec6_0, _0x0f9ec6_2 = () => !0) {
  const _0x0f9ec6_3 = new Map;
  for (const _0x0f9ec6_4 of Object.values(_0x0f9ec6_0)) {
    if (!_0x0f9ec6_1(_0x0f9ec6_4.database || "") || !Number.isSafeInteger(_0x0f9ec6_4.version) || _0x0f9ec6_4.version < 1 || _0x0f9ec6_4.version > 1e3) throw Error("\x49\x6e\x76\x61\x6c\x69\x64\x20\x67\x61\x6d\x65\x20\x64\x61\x74\x61\x62\x61\x73\x65\x20\x69\x6e\x20\x63\x6c\x6f\x75\x64\x20\x73\x61\x76\x65\x2e");
    const _0x0f9ec6_0 = _0x0f9ec6_3.get(_0x0f9ec6_4.database) || [];
    _0x0f9ec6_0.push(_0x0f9ec6_4), _0x0f9ec6_3.set(_0x0f9ec6_4.database, _0x0f9ec6_0);
  }
  for (const [_0x0f9ec6_1, _0x0f9ec6_6] of _0x0f9ec6_3) {
    if (!indexedDB.databases) throw Error("\x54\x68\x69\x73\x20\x62\x72\x6f\x77\x73\x65\x72\x20\x63\x61\x6e\x6e\x6f\x74\x20\x72\x65\x73\x74\x6f\x72\x65\x20\x66\x69\x6c\x65\x2d\x62\x61\x73\x65\x64\x20\x63\x6c\x6f\x75\x64\x20\x73\x61\x76\x65\x73\x2e");
    const _0x0f9ec6_0 = _0x0f9ec6_6.map(_0x0f9ec6_0 => ({
      key: _0x0f9ec6_4(_0x0f9ec6_0.key),
      value: _0x0f9ec6_0.deleted ? void 0 : _0x0f9ec6_4(_0x0f9ec6_0.value),
      deleted: _0x0f9ec6_0.deleted
    })), _0x0f9ec6_3 = (await indexedDB.databases()).find(_0x0f9ec6_0 => _0x0f9ec6_0.name === _0x0f9ec6_1), _0x0f9ec6_7 = await _0x0f9ec6_5(_0x0f9ec6_1, Math.max(_0x0f9ec6_3?.version || 0, _0x0f9ec6_6[0].version), _0x0f9ec6_0 => {
      _0x0f9ec6_0.objectStoreNames.contains("\x46\x49\x4c\x45\x5f\x44\x41\x54\x41") || _0x0f9ec6_0.createObjectStore("\x46\x49\x4c\x45\x5f\x44\x41\x54\x41", {
        keyPath: _0x0f9ec6_6[0].keyPath
      });
    });
    try {
      if (!_0x0f9ec6_2()) return;
      await new Promise((_0x0f9ec6_1, _0x0f9ec6_2) => {
        const _0x0f9ec6_3 = _0x0f9ec6_7.transaction("\x46\x49\x4c\x45\x5f\x44\x41\x54\x41", "\x72\x65\x61\x64\x77\x72\x69\x74\x65"), _0x0f9ec6_4 = _0x0f9ec6_3.objectStore("\x46\x49\x4c\x45\x5f\x44\x41\x54\x41");
        try {
          for (const _0x0f9ec6_1 of _0x0f9ec6_0) {
            const _0x0f9ec6_0 = _0x0f9ec6_1.key;
            if (_0x0f9ec6_1.deleted) {
              _0x0f9ec6_4.delete(_0x0f9ec6_0);
              continue;
            }
            const _0x0f9ec6_2 = _0x0f9ec6_1.value;
            null === _0x0f9ec6_4.keyPath ? _0x0f9ec6_4.put(_0x0f9ec6_2, _0x0f9ec6_0) : _0x0f9ec6_4.put(_0x0f9ec6_2);
          }
        } catch (_0x0f9ec6_5) {
          return _0x0f9ec6_3.abort(), void _0x0f9ec6_2(_0x0f9ec6_5);
        }
        _0x0f9ec6_3.oncomplete = _0x0f9ec6_1, _0x0f9ec6_3.onabort = () => _0x0f9ec6_2(_0x0f9ec6_3.error || Error("\x47\x61\x6d\x65\x20\x73\x61\x76\x65\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x62\x65\x20\x72\x65\x73\x74\x6f\x72\x65\x64\x2e")), 
        _0x0f9ec6_3.onerror = () => _0x0f9ec6_2(_0x0f9ec6_3.error);
      });
    } finally {
      _0x0f9ec6_7.close();
    }
  }
}
