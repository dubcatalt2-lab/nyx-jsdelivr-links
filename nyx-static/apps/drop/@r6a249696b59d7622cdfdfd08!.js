export function measureTransport(_0x1557fb_0, _0x1557fb_1) {
  const _0x1557fb_2 = (_0x1557fb_0, _0x1557fb_2 = 0) => {
    try {
      _0x1557fb_1(_0x1557fb_0, _0x1557fb_2);
    } catch {}
  }, _0x1557fb_3 = (_0x1557fb_0, _0x1557fb_1) => {
    const _0x1557fb_3 = (_0x1557fb_0 => "\x73\x74\x72\x69\x6e\x67" == typeof _0x1557fb_0 ? (new TextEncoder).encode(_0x1557fb_0).byteLength : _0x1557fb_0?.byteLength ?? _0x1557fb_0?.size ?? 0)(_0x1557fb_1);
    _0x1557fb_3 && _0x1557fb_2(_0x1557fb_0, _0x1557fb_3);
  }, _0x1557fb_4 = _0x1557fb_0.request.bind(_0x1557fb_0);
  _0x1557fb_0.request = async (_0x1557fb_0, _0x1557fb_1, _0x1557fb_5, ..._0x1557fb_6) => {
    _0x1557fb_2("\x73\x74\x61\x72\x74");
    let _0x1557fb_7 = !1;
    const _0x1557fb_8 = () => {
      _0x1557fb_7 || (_0x1557fb_7 = !0, _0x1557fb_2("\x65\x6e\x64"));
    };
    try {
      let _0x1557fb_2 = _0x1557fb_5;
      _0x1557fb_5 instanceof ReadableStream ? _0x1557fb_2 = _0x1557fb_5.pipeThrough(new TransformStream({
        transform(_0x1557fb_0, _0x1557fb_1) {
          _0x1557fb_3("\x75\x70", _0x1557fb_0), _0x1557fb_1.enqueue(_0x1557fb_0);
        }
      })) : _0x1557fb_3("\x75\x70", _0x1557fb_5);
      const _0x1557fb_7 = await _0x1557fb_4(_0x1557fb_0, _0x1557fb_1, _0x1557fb_2, ..._0x1557fb_6);
      if (_0x1557fb_7.body instanceof ReadableStream) {
        const _0x1557fb_0 = _0x1557fb_7.body.getReader();
        return {
          ..._0x1557fb_7,
          body: new ReadableStream({
            async pull(_0x1557fb_1) {
              try {
                const {value: _0x1557fb_2, done: _0x1557fb_4} = await _0x1557fb_0.read();
                _0x1557fb_4 ? (_0x1557fb_8(), _0x1557fb_0.releaseLock(), _0x1557fb_1.close()) : (_0x1557fb_3("\x64\x6f\x77\x6e", _0x1557fb_2), 
                _0x1557fb_1.enqueue(_0x1557fb_2));
              } catch (_0x1557fb_2) {
                _0x1557fb_8(), _0x1557fb_1.error(_0x1557fb_2);
              }
            },
            async cancel(_0x1557fb_1) {
              try {
                await _0x1557fb_0.cancel(_0x1557fb_1);
              } finally {
                _0x1557fb_8(), _0x1557fb_0.releaseLock();
              }
            }
          })
        };
      }
      return _0x1557fb_3("\x64\x6f\x77\x6e", _0x1557fb_7.body), _0x1557fb_8(), _0x1557fb_7;
    } catch (_0x1557fb_9) {
      throw _0x1557fb_8(), _0x1557fb_9;
    }
  };
  const _0x1557fb_5 = _0x1557fb_0.connect?.bind(_0x1557fb_0);
  return _0x1557fb_5 && (_0x1557fb_0.connect = (_0x1557fb_0, _0x1557fb_1, _0x1557fb_2, _0x1557fb_4, _0x1557fb_6, ..._0x1557fb_7) => {
    const _0x1557fb_8 = _0x1557fb_5(_0x1557fb_0, _0x1557fb_1, _0x1557fb_2, _0x1557fb_4, (..._0x1557fb_0) => {
      _0x1557fb_3("\x64\x6f\x77\x6e", _0x1557fb_0[0]), _0x1557fb_6?.(..._0x1557fb_0);
    }, ..._0x1557fb_7);
    if (Array.isArray(_0x1557fb_8) && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _0x1557fb_8[0]) {
      const _0x1557fb_0 = _0x1557fb_8[0];
      _0x1557fb_8[0] = (..._0x1557fb_1) => (_0x1557fb_3("\x75\x70", _0x1557fb_1[0]), _0x1557fb_0(..._0x1557fb_1));
    }
    return _0x1557fb_8;
  }), _0x1557fb_0;
}

export function measureFetch(_0x1557fb_0, _0x1557fb_1) {
  const _0x1557fb_2 = measureTransport({
    async request(_0x1557fb_1, _0x1557fb_2, _0x1557fb_3, _0x1557fb_4) {
      const _0x1557fb_5 = await _0x1557fb_0(_0x1557fb_1, _0x1557fb_4);
      return {
        response: _0x1557fb_5,
        body: _0x1557fb_5.body
      };
    }
  }, _0x1557fb_1);
  return async (_0x1557fb_0, _0x1557fb_1) => {
    const {response: _0x1557fb_3, body: _0x1557fb_4} = await _0x1557fb_2.request(_0x1557fb_0, _0x1557fb_1?.method, _0x1557fb_1?.body, _0x1557fb_1);
    return _0x1557fb_3.body ? new Response(_0x1557fb_4, {
      status: _0x1557fb_3.status,
      statusText: _0x1557fb_3.statusText,
      headers: _0x1557fb_3.headers
    }) : _0x1557fb_3;
  };
}

export function trafficMeter({now: _0x1557fb_0 = () => performance.now()} = {}) {
  let _0x1557fb_1 = 0, _0x1557fb_2 = 0, _0x1557fb_3 = 0, _0x1557fb_4 = 0, _0x1557fb_5 = 0, _0x1557fb_6 = 0, _0x1557fb_7 = 0, _0x1557fb_8 = _0x1557fb_0(), _0x1557fb_9 = _0x1557fb_8;
  const _0x1557fb_a = Object.fromEntries([ "\x74\x72\x61\x66\x66\x69\x63", "\x72\x65\x71\x75\x65\x73\x74\x73", "\x64\x61\x74\x61", "\x70\x72\x6f\x63\x65\x73\x73\x69\x6e\x67" ].map(_0x1557fb_0 => [ _0x1557fb_0, Array(45).fill(0) ])), _0x1557fb_b = _0x1557fb_0 => {
    _0x1557fb_6 && (_0x1557fb_7 += Math.max(0, _0x1557fb_0 - _0x1557fb_9)), _0x1557fb_9 = _0x1557fb_0;
  };
  return {
    add(_0x1557fb_7, _0x1557fb_8 = 0) {
      if (_0x1557fb_b(_0x1557fb_0()), "\x73\x74\x61\x72\x74" === _0x1557fb_7) return _0x1557fb_6++, _0x1557fb_5++, 
      void _0x1557fb_4++;
      "\x65\x6e\x64" !== _0x1557fb_7 ? ![ "\x75\x70", "\x64\x6f\x77\x6e" ].includes(_0x1557fb_7) || !Number.isFinite(_0x1557fb_8) || _0x1557fb_8 < 0 || ("\x75\x70" === _0x1557fb_7 ? _0x1557fb_2 += _0x1557fb_8 : _0x1557fb_1 += _0x1557fb_8, 
      _0x1557fb_3 += _0x1557fb_8) : _0x1557fb_6 = Math.max(0, _0x1557fb_6 - 1);
    },
    sample() {
      const _0x1557fb_9 = _0x1557fb_0();
      _0x1557fb_b(_0x1557fb_9);
      const _0x1557fb_c = Math.max(1, _0x1557fb_9 - _0x1557fb_8), _0x1557fb_d = _0x1557fb_c / 1e3, _0x1557fb_e = 8 * _0x1557fb_1 / _0x1557fb_d / 1e6, _0x1557fb_f = 8 * _0x1557fb_2 / _0x1557fb_d / 1e6, _0x1557fb_10 = _0x1557fb_e + _0x1557fb_f, _0x1557fb_11 = Math.min(100, _0x1557fb_7 / _0x1557fb_c * 100), _0x1557fb_12 = _0x1557fb_5 / _0x1557fb_d;
      for (const [_0x1557fb_0, _0x1557fb_1] of Object.entries({
        traffic: _0x1557fb_10,
        requests: _0x1557fb_12,
        data: _0x1557fb_3,
        processing: _0x1557fb_11
      })) _0x1557fb_a[_0x1557fb_0].push(_0x1557fb_1), _0x1557fb_a[_0x1557fb_0].shift();
      return _0x1557fb_8 = _0x1557fb_9, _0x1557fb_1 = _0x1557fb_2 = _0x1557fb_5 = _0x1557fb_7 = 0, 
      {
        mbps: _0x1557fb_10,
        download: _0x1557fb_e,
        upload: _0x1557fb_f,
        processing: _0x1557fb_11,
        rps: _0x1557fb_12,
        active: _0x1557fb_6,
        totalBytes: _0x1557fb_3,
        totalRequests: _0x1557fb_4,
        samples: [ ..._0x1557fb_a.traffic ],
        history: Object.fromEntries(Object.entries(_0x1557fb_a).map(([_0x1557fb_0, _0x1557fb_1]) => [ _0x1557fb_0, [ ..._0x1557fb_1 ] ]))
      };
    }
  };
}
