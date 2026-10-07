import { enhanceDesktop as _0xeb3350_0 } from "\x2e\x2f\x40\x72\x62\x35\x34\x36\x38\x36\x64\x30\x37\x31\x35\x39\x38\x33\x65\x64\x33\x64\x38\x64\x65\x36\x61\x66\x21\x2e\x6a\x73";

const _0xeb3350_1 = _0xeb3350_0 => document.getElementById(_0xeb3350_0);

let _0xeb3350_2, _0xeb3350_3, _0xeb3350_4, _0xeb3350_5, _0xeb3350_6, _0xeb3350_7, _0xeb3350_8, _0xeb3350_9, _0xeb3350_a = 0, _0xeb3350_b = 0, _0xeb3350_c = 0;

const _0xeb3350_d = _0xeb3350_0 => {
  _0xeb3350_1("\x6e\x6f\x74\x69\x63\x65").textContent = _0xeb3350_0;
}, _0xeb3350_e = _0xeb3350_0 => ![ 401, 403, 404 ].includes(_0xeb3350_0.status) && ![ "\x61\x75\x74\x68\x2f\x75\x73\x65\x72\x2d\x64\x69\x73\x61\x62\x6c\x65\x64", "\x61\x75\x74\x68\x2f\x75\x73\x65\x72\x2d\x74\x6f\x6b\x65\x6e\x2d\x65\x78\x70\x69\x72\x65\x64", "\x61\x75\x74\x68\x2f\x69\x6e\x76\x61\x6c\x69\x64\x2d\x75\x73\x65\x72\x2d\x74\x6f\x6b\x65\x6e" ].includes(_0xeb3350_0.code), _0xeb3350_f = _0xeb3350_0 => _0xeb3350_0 instanceof TypeError || [ "\x54\x69\x6d\x65\x6f\x75\x74\x45\x72\x72\x6f\x72", "\x61\x75\x74\x68\x2f\x6e\x65\x74\x77\x6f\x72\x6b\x2d\x72\x65\x71\x75\x65\x73\x74\x2d\x66\x61\x69\x6c\x65\x64" ].includes(_0xeb3350_0.name) || "\x61\x75\x74\x68\x2f\x6e\x65\x74\x77\x6f\x72\x6b\x2d\x72\x65\x71\x75\x65\x73\x74\x2d\x66\x61\x69\x6c\x65\x64" === _0xeb3350_0.code ? "\x54\x68\x65\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x72\x65\x71\x75\x65\x73\x74\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x72\x65\x61\x63\x68\x20\x74\x68\x65\x20\x73\x65\x72\x76\x65\x72\x2e" : _0xeb3350_0.message;

let _0xeb3350_10, _0xeb3350_11, _0xeb3350_12 = 0;

async function _0xeb3350_13(_0xeb3350_0, _0xeb3350_1, _0xeb3350_3, _0xeb3350_4 = !1) {
  const _0xeb3350_5 = await (_0xeb3350_2?.currentUser?.getIdToken(_0xeb3350_4));
  if (!_0xeb3350_5) throw Object.assign(Error("\x53\x69\x67\x6e\x20\x69\x6e\x20\x74\x6f\x20\x4e\x79\x78\x20\x77\x69\x74\x68\x20\x79\x6f\x75\x72\x20\x6f\x77\x6e\x65\x72\x20\x61\x63\x63\x6f\x75\x6e\x74\x2e"), {
    status: 401
  });
  const _0xeb3350_6 = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x70\x72\x69\x76\x61\x74\x65\x2d\x72\x65\x6d\x6f\x74\x65" + _0xeb3350_0, {
    method: _0xeb3350_3 || (_0xeb3350_1 ? "\x50\x4f\x53\x54" : "\x47\x45\x54"),
    headers: {
      Authorization: "\x42\x65\x61\x72\x65\x72\x20" + _0xeb3350_5,
      ..._0xeb3350_1 ? {
        "\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65": "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e"
      } : {}
    },
    ..._0xeb3350_1 ? {
      body: JSON.stringify(_0xeb3350_1)
    } : {},
    cache: "\x6e\x6f\x2d\x73\x74\x6f\x72\x65",
    signal: AbortSignal.timeout(15e3)
  });
  if (401 === _0xeb3350_6.status && !_0xeb3350_4) return _0xeb3350_13(_0xeb3350_0, _0xeb3350_1, _0xeb3350_3, !0);
  if (!_0xeb3350_6.ok) {
    const _0xeb3350_0 = await _0xeb3350_6.json().catch(() => ({}));
    throw Object.assign(Error(_0xeb3350_0.error || "\x4e\x6f\x74\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x2e"), {
      status: _0xeb3350_6.status
    });
  }
  return _0xeb3350_6;
}

function _0xeb3350_14(_0xeb3350_0, _0xeb3350_1, _0xeb3350_2, _0xeb3350_3 = 6e4) {
  _0xeb3350_9 = setTimeout(async () => {
    if (_0xeb3350_2 === _0xeb3350_b) {
      try {
        await _0xeb3350_13("\x2f\x72\x65\x6e\x65\x77", {
          session: _0xeb3350_0
        });
      } catch (_0xeb3350_3) {
        return void (_0xeb3350_2 === _0xeb3350_b && (409 !== _0xeb3350_3.status && _0xeb3350_e(_0xeb3350_3) ? _0xeb3350_14(_0xeb3350_0, _0xeb3350_1, _0xeb3350_2, 5e3) : _0xeb3350_19(_0xeb3350_1, _0xeb3350_f(_0xeb3350_3), _0xeb3350_e(_0xeb3350_3))));
      }
      _0xeb3350_2 === _0xeb3350_b && _0xeb3350_14(_0xeb3350_0, _0xeb3350_1, _0xeb3350_2);
    }
  }, _0xeb3350_3);
}

const _0xeb3350_15 = _0xeb3350_0 => async _0xeb3350_1 => {
  _0xeb3350_1?.preventDefault();
  try {
    await _0xeb3350_0(_0xeb3350_1);
  } catch (_0xeb3350_2) {
    _0xeb3350_d(_0xeb3350_2.message);
  }
};

function _0xeb3350_16(_0xeb3350_0) {
  1 === _0xeb3350_3?.readyState && _0xeb3350_3.send(JSON.stringify(_0xeb3350_0));
}

function _0xeb3350_17() {
  clearTimeout(_0xeb3350_7), clearTimeout(_0xeb3350_8), clearTimeout(_0xeb3350_9), 
  _0xeb3350_1("\x63\x61\x6e\x63\x65\x6c\x52\x65\x63\x6f\x6e\x6e\x65\x63\x74").hidden = !0, _0xeb3350_b++, _0xeb3350_6?.destroy(), 
  _0xeb3350_6 = null, _0xeb3350_4?.disconnect(), _0xeb3350_4 = null, _0xeb3350_16({
    type: "\x72\x65\x6c\x65\x61\x73\x65"
  }), _0xeb3350_3?.close(), _0xeb3350_3 = null, _0xeb3350_5 && URL.revokeObjectURL(_0xeb3350_5), 
  _0xeb3350_5 = null, _0xeb3350_1("\x66\x72\x61\x6d\x65").removeAttribute("\x73\x72\x63"), _0xeb3350_1("\x66\x72\x61\x6d\x65").hidden = !1, 
  _0xeb3350_1("\x73\x63\x72\x65\x65\x6e").replaceChildren(_0xeb3350_1("\x66\x72\x61\x6d\x65")), _0xeb3350_1("\x73\x63\x72\x65\x65\x6e").classList.remove("\x76\x6e\x63\x2d\x73\x63\x72\x65\x65\x6e"), 
  _0xeb3350_1("\x73\x65\x63\x75\x72\x65\x41\x74\x74\x65\x6e\x74\x69\x6f\x6e").hidden = !0, _0xeb3350_1("\x73\x65\x73\x73\x69\x6f\x6e").hidden = !0, 
  _0xeb3350_1("\x73\x65\x74\x75\x70").hidden = !1;
}

async function _0xeb3350_18() {
  const _0xeb3350_0 = await (await _0xeb3350_13("\x2f\x64\x65\x76\x69\x63\x65\x73")).json();
  if (_0xeb3350_1("\x64\x65\x76\x69\x63\x65\x73").replaceChildren(), !_0xeb3350_0.devices.length) {
    const _0xeb3350_0 = document.createElement("\x70");
    _0xeb3350_0.textContent = "\x4e\x6f\x20\x70\x61\x69\x72\x65\x64\x20\x63\x6f\x6d\x70\x75\x74\x65\x72\x73\x2e", _0xeb3350_1("\x64\x65\x76\x69\x63\x65\x73").append(_0xeb3350_0);
  }
  for (const _0xeb3350_2 of _0xeb3350_0.devices) {
    const _0xeb3350_0 = document.createElement("\x64\x69\x76");
    _0xeb3350_0.className = "\x64\x65\x76\x69\x63\x65";
    const _0xeb3350_3 = document.createElement("\x73\x70\x61\x6e");
    _0xeb3350_3.textContent = _0xeb3350_2.name;
    const _0xeb3350_4 = document.createElement("\x73\x6d\x61\x6c\x6c");
    _0xeb3350_4.textContent = _0xeb3350_2.connected ? "\x49\x6e\x20\x75\x73\x65" : _0xeb3350_2.online ? "\x4f\x6e\x6c\x69\x6e\x65" : "\x4f\x66\x66\x6c\x69\x6e\x65", 
    _0xeb3350_3.append(_0xeb3350_4);
    const _0xeb3350_5 = document.createElement("\x62\x75\x74\x74\x6f\x6e");
    _0xeb3350_5.textContent = "\x43\x6f\x6e\x6e\x65\x63\x74", _0xeb3350_5.disabled = !_0xeb3350_2.online || _0xeb3350_2.connected, 
    _0xeb3350_5.onclick = _0xeb3350_15(() => _0xeb3350_1a(_0xeb3350_2));
    const _0xeb3350_6 = document.createElement("\x62\x75\x74\x74\x6f\x6e");
    _0xeb3350_6.textContent = "\x52\x65\x6d\x6f\x76\x65", _0xeb3350_6.onclick = _0xeb3350_15(async () => {
      confirm("\x52\x65\x6d\x6f\x76\x65\x20" + _0xeb3350_2.name + "\x20\x61\x6e\x64\x20\x72\x65\x76\x6f\x6b\x65\x20\x69\x74\x73\x20\x72\x65\x6d\x6f\x74\x65\x20\x61\x63\x63\x65\x73\x73\x3f") && (await _0xeb3350_13("\x2f\x64\x65\x76\x69\x63\x65\x73\x2f" + _0xeb3350_2.id, null, "\x44\x45\x4c\x45\x54\x45"), 
      await _0xeb3350_18());
    });
    const _0xeb3350_7 = document.createElement("\x62\x75\x74\x74\x6f\x6e");
    _0xeb3350_7.textContent = "\x47\x65\x6e\x65\x72\x61\x74\x65\x20\x6e\x65\x77\x20\x63\x6f\x64\x65", _0xeb3350_7.onclick = _0xeb3350_15(async () => {
      const _0xeb3350_0 = await (await _0xeb3350_13("\x2f\x64\x65\x76\x69\x63\x65\x73\x2f" + _0xeb3350_2.id + "\x2f\x63\x6f\x64\x65", {})).json();
      _0xeb3350_d("\x43\x6f\x64\x65\x3a\x20" + _0xeb3350_0.code.match(/.{1,4}/g).join("\x2d") + "\x20\x3f\x20\x76\x61\x6c\x69\x64\x20\x66\x6f\x72\x20\x35\x20\x6d\x69\x6e\x75\x74\x65\x73\x2c\x20\x66\x6f\x72\x20\x79\x6f\x75\x72\x20\x6f\x77\x6e\x65\x72\x20\x61\x63\x63\x6f\x75\x6e\x74\x20\x6f\x6e\x6c\x79\x2e");
    }), _0xeb3350_0.append(_0xeb3350_3, _0xeb3350_5), document.documentElement.hasAttribute("\x64\x61\x74\x61\x2d\x64\x69\x72\x65\x63\x74\x2d\x64\x65\x73\x6b\x74\x6f\x70") || _0xeb3350_0.append(_0xeb3350_7, _0xeb3350_6), 
    _0xeb3350_1("\x64\x65\x76\x69\x63\x65\x73").append(_0xeb3350_0);
  }
}

function _0xeb3350_19(_0xeb3350_0, _0xeb3350_2, _0xeb3350_3 = !0) {
  if (_0xeb3350_17(), _0xeb3350_18().catch(() => {}), !_0xeb3350_3) return void _0xeb3350_d(_0xeb3350_2);
  const _0xeb3350_4 = ++_0xeb3350_c, _0xeb3350_5 = _0xeb3350_b, _0xeb3350_6 = Math.min(3e4, 3e3 * 2 ** Math.min(_0xeb3350_4 - 1, 4));
  _0xeb3350_d(_0xeb3350_2 + "\x20\x52\x65\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6e\x67\x20\x69\x6e\x20" + _0xeb3350_6 / 1e3 + "\x20\x73\x65\x63\x6f\x6e\x64\x73\x2e\x2e\x2e"), 
  _0xeb3350_1("\x63\x61\x6e\x63\x65\x6c\x52\x65\x63\x6f\x6e\x6e\x65\x63\x74").hidden = !1, _0xeb3350_7 = setTimeout(() => {
    _0xeb3350_b === _0xeb3350_5 && _0xeb3350_1a(_0xeb3350_0, !0).catch(_0xeb3350_1 => {
      _0xeb3350_b === _0xeb3350_5 + 2 && _0xeb3350_19(_0xeb3350_0, _0xeb3350_1.message, ![ 401, 403, 404 ].includes(_0xeb3350_1.status) && ![ "\x61\x75\x74\x68\x2f\x75\x73\x65\x72\x2d\x64\x69\x73\x61\x62\x6c\x65\x64", "\x61\x75\x74\x68\x2f\x75\x73\x65\x72\x2d\x74\x6f\x6b\x65\x6e\x2d\x65\x78\x70\x69\x72\x65\x64", "\x61\x75\x74\x68\x2f\x69\x6e\x76\x61\x6c\x69\x64\x2d\x75\x73\x65\x72\x2d\x74\x6f\x6b\x65\x6e" ].includes(_0xeb3350_1.code));
    });
  }, _0xeb3350_6);
}

async function _0xeb3350_1a(_0xeb3350_2, _0xeb3350_7 = !1) {
  _0xeb3350_7 || (_0xeb3350_c = 0), _0xeb3350_17();
  const _0xeb3350_9 = ++_0xeb3350_b;
  _0xeb3350_1("\x63\x61\x6e\x63\x65\x6c\x52\x65\x63\x6f\x6e\x6e\x65\x63\x74").hidden = !1;
  try {
    const _0xeb3350_7 = "\x76\x6e\x63" === _0xeb3350_2.mode ? (await (import("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x73\x73\x65\x74\x73\x2f\x76\x65\x6e\x64\x6f\x72\x2f\x6e\x6f\x76\x6e\x63\x2f\x63\x6f\x72\x65\x2f\x72\x66\x62\x2e\x6a\x73"))).default : null, _0xeb3350_a = "\x76\x6e\x63" === _0xeb3350_2.mode ? (await (import("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x73\x73\x65\x74\x73\x2f\x76\x65\x6e\x64\x6f\x72\x2f\x6e\x6f\x76\x6e\x63\x2f\x63\x6f\x72\x65\x2f\x75\x74\x69\x6c\x2f\x65\x76\x65\x6e\x74\x73\x2e\x6a\x73"))).releaseCapture : null;
    if (_0xeb3350_9 !== _0xeb3350_b) return;
    const {ticket: _0xeb3350_e} = await (await _0xeb3350_13("\x2f\x63\x6f\x6e\x6e\x65\x63\x74", {
      id: _0xeb3350_2.id
    })).json();
    if (_0xeb3350_9 !== _0xeb3350_b) return;
    _0xeb3350_1("\x73\x65\x73\x73\x69\x6f\x6e").hidden = !1, _0xeb3350_1("\x73\x65\x74\x75\x70").hidden = !0, _0xeb3350_1("\x63\x6f\x6d\x70\x75\x74\x65\x72\x4e\x61\x6d\x65").textContent = _0xeb3350_2.name, 
    _0xeb3350_1("\x73\x65\x73\x73\x69\x6f\x6e\x53\x74\x61\x74\x65").textContent = "\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6e\x67\u2026", _0xeb3350_d(""), _0xeb3350_3 = new WebSocket(location.origin.replace(/^http/, "\x77\x73") + "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x70\x72\x69\x76\x61\x74\x65\x2d\x72\x65\x6d\x6f\x74\x65\x2f\x73\x6f\x63\x6b\x65\x74"), 
    _0xeb3350_3.binaryType = "\x62\x6c\x6f\x62";
    const _0xeb3350_f = _0xeb3350_3;
    let _0xeb3350_10 = 1006, _0xeb3350_11 = !1;
    _0xeb3350_f.addEventListener("\x63\x6c\x6f\x73\x65", _0xeb3350_0 => {
      _0xeb3350_10 = _0xeb3350_0.code;
    }, {
      capture: !0
    });
    const _0xeb3350_12 = () => {
      _0xeb3350_9 === _0xeb3350_b && _0xeb3350_19(_0xeb3350_2, _0xeb3350_11 ? "\x57\x69\x6e\x64\x6f\x77\x73\x20\x64\x65\x73\x6b\x74\x6f\x70\x20\x61\x75\x74\x68\x65\x6e\x74\x69\x63\x61\x74\x69\x6f\x6e\x20\x66\x61\x69\x6c\x65\x64\x2e" : {
        4001: "\x53\x65\x73\x73\x69\x6f\x6e\x20\x61\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e\x20\x6e\x65\x65\x64\x73\x20\x72\x65\x66\x72\x65\x73\x68\x69\x6e\x67\x2e",
        4003: "\x52\x65\x6d\x6f\x74\x65\x20\x61\x63\x63\x65\x73\x73\x20\x77\x61\x73\x20\x72\x65\x66\x75\x73\x65\x64\x2e",
        4008: "\x52\x65\x6d\x6f\x74\x65\x20\x74\x72\x61\x66\x66\x69\x63\x20\x6c\x69\x6d\x69\x74\x20\x72\x65\x61\x63\x68\x65\x64\x2e",
        4009: "\x43\x6f\x6d\x70\x75\x74\x65\x72\x20\x69\x73\x20\x61\x6c\x72\x65\x61\x64\x79\x20\x69\x6e\x20\x75\x73\x65\x2e",
        4010: "\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x6b\x65\x65\x70\x20\x75\x70\x20\x77\x69\x74\x68\x20\x74\x68\x65\x20\x64\x65\x73\x6b\x74\x6f\x70\x20\x73\x74\x72\x65\x61\x6d\x2e",
        4011: "\x54\x68\x65\x20\x57\x69\x6e\x64\x6f\x77\x73\x20\x64\x65\x73\x6b\x74\x6f\x70\x20\x73\x74\x72\x65\x61\x6d\x20\x65\x6e\x64\x65\x64\x2e",
        4012: "\x54\x68\x65\x20\x57\x69\x6e\x64\x6f\x77\x73\x20\x62\x72\x69\x64\x67\x65\x20\x64\x69\x73\x63\x6f\x6e\x6e\x65\x63\x74\x65\x64\x2e"
      }[_0xeb3350_10] || "\x44\x65\x73\x6b\x74\x6f\x70\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x69\x6e\x74\x65\x72\x72\x75\x70\x74\x65\x64\x20\x28\x63\x6f\x64\x65\x20" + _0xeb3350_10 + "\x29\x2e", !_0xeb3350_11 && ![ 4003, 4009 ].includes(_0xeb3350_10));
    }, _0xeb3350_15 = () => {
      clearTimeout(_0xeb3350_8), _0xeb3350_c = 0, _0xeb3350_1("\x63\x61\x6e\x63\x65\x6c\x52\x65\x63\x6f\x6e\x6e\x65\x63\x74").hidden = !0;
    };
    _0xeb3350_8 = setTimeout(() => {
      _0xeb3350_9 === _0xeb3350_b && _0xeb3350_19(_0xeb3350_2, "\x54\x68\x65\x20\x64\x65\x73\x6b\x74\x6f\x70\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x74\x69\x6d\x65\x64\x20\x6f\x75\x74\x2e");
    }, 15e3), _0xeb3350_3.onopen = () => _0xeb3350_f.send(JSON.stringify({
      type: "\x76\x69\x65\x77\x65\x72",
      ticket: _0xeb3350_e
    })), _0xeb3350_3.onmessage = _0xeb3350_3 => {
      if (_0xeb3350_9 === _0xeb3350_b) if (_0xeb3350_3.data instanceof Blob) {
        _0xeb3350_15();
        const _0xeb3350_0 = URL.createObjectURL(_0xeb3350_3.data), _0xeb3350_2 = _0xeb3350_5;
        _0xeb3350_5 = _0xeb3350_0, _0xeb3350_1("\x66\x72\x61\x6d\x65").src = _0xeb3350_0, _0xeb3350_2 && URL.revokeObjectURL(_0xeb3350_2), 
        _0xeb3350_1("\x73\x65\x73\x73\x69\x6f\x6e\x53\x74\x61\x74\x65").textContent = "\x43\x6f\x6e\x6e\x65\x63\x74\x65\x64";
      } else {
        const _0xeb3350_5 = JSON.parse(_0xeb3350_3.data);
        "\x72\x65\x61\x64\x79" === _0xeb3350_5.type && _0xeb3350_5.session && _0xeb3350_14(_0xeb3350_5.session, _0xeb3350_2, _0xeb3350_9), 
        "\x73\x74\x61\x74\x75\x73" === _0xeb3350_5.type && (_0xeb3350_1("\x73\x65\x73\x73\x69\x6f\x6e\x53\x74\x61\x74\x65").textContent = _0xeb3350_5.message), 
        "\x76\x6e\x63" === _0xeb3350_5.type && _0xeb3350_7 && (_0xeb3350_1("\x66\x72\x61\x6d\x65").hidden = !0, 
        _0xeb3350_1c.classList.add("\x76\x6e\x63\x2d\x73\x63\x72\x65\x65\x6e"), _0xeb3350_4 = new _0xeb3350_7(_0xeb3350_1c, _0xeb3350_f, {
          credentials: {
            password: _0xeb3350_5.password
          }
        }), _0xeb3350_6 = _0xeb3350_0(_0xeb3350_4, _0xeb3350_1c, _0xeb3350_a), _0xeb3350_4.scaleViewport = !0, 
        _0xeb3350_4.qualityLevel = 6, _0xeb3350_4.compressionLevel = 2, _0xeb3350_4.addEventListener("\x63\x6f\x6e\x6e\x65\x63\x74", () => {
          _0xeb3350_9 === _0xeb3350_b && (_0xeb3350_15(), _0xeb3350_1("\x73\x65\x73\x73\x69\x6f\x6e\x53\x74\x61\x74\x65").textContent = "\x43\x6f\x6e\x6e\x65\x63\x74\x65\x64\x20\xb7\x20\x57\x69\x6e\x64\x6f\x77\x73\x20\x73\x65\x72\x76\x69\x63\x65", 
          _0xeb3350_1("\x73\x65\x63\x75\x72\x65\x41\x74\x74\x65\x6e\x74\x69\x6f\x6e").hidden = !1);
        }), _0xeb3350_4.addEventListener("\x64\x69\x73\x63\x6f\x6e\x6e\x65\x63\x74", () => setTimeout(_0xeb3350_12, 0)), 
        _0xeb3350_4.addEventListener("\x73\x65\x63\x75\x72\x69\x74\x79\x66\x61\x69\x6c\x75\x72\x65", () => {
          _0xeb3350_11 = !0, _0xeb3350_d("\x57\x69\x6e\x64\x6f\x77\x73\x20\x64\x65\x73\x6b\x74\x6f\x70\x20\x61\x75\x74\x68\x65\x6e\x74\x69\x63\x61\x74\x69\x6f\x6e\x20\x66\x61\x69\x6c\x65\x64\x2e");
        }));
      }
    }, _0xeb3350_3.onclose = _0xeb3350_12, _0xeb3350_3.onerror = () => {
      _0xeb3350_9 === _0xeb3350_b && _0xeb3350_d("\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x2e\x20\x43\x68\x65\x63\x6b\x20\x74\x68\x61\x74\x20\x79\x6f\x75\x72\x20\x50\x43\x20\x69\x73\x20\x61\x77\x61\x6b\x65\x20\x61\x6e\x64\x20\x74\x68\x65\x20\x68\x65\x6c\x70\x65\x72\x20\x69\x73\x20\x72\x75\x6e\x6e\x69\x6e\x67\x2e");
    };
  } catch (_0xeb3350_a) {
    _0xeb3350_9 === _0xeb3350_b && _0xeb3350_19(_0xeb3350_2, _0xeb3350_f(_0xeb3350_a), _0xeb3350_e(_0xeb3350_a));
  }
}

function _0xeb3350_1b(_0xeb3350_0) {
  const _0xeb3350_2 = _0xeb3350_1("\x66\x72\x61\x6d\x65").getBoundingClientRect();
  return _0xeb3350_2.width && _0xeb3350_1("\x66\x72\x61\x6d\x65").naturalWidth ? {
    x: Math.max(0, Math.min(1, (_0xeb3350_0.clientX - _0xeb3350_2.left) / _0xeb3350_2.width)),
    y: Math.max(0, Math.min(1, (_0xeb3350_0.clientY - _0xeb3350_2.top) / _0xeb3350_2.height))
  } : null;
}

const _0xeb3350_1c = _0xeb3350_1("\x73\x63\x72\x65\x65\x6e");

_0xeb3350_1c.addEventListener("\x70\x6f\x69\x6e\x74\x65\x72\x64\x6f\x77\x6e", _0xeb3350_0 => {
  if (_0xeb3350_4) return;
  const _0xeb3350_1 = _0xeb3350_1b(_0xeb3350_0);
  _0xeb3350_1 && (_0xeb3350_0.preventDefault(), _0xeb3350_1c.focus(), _0xeb3350_1c.setPointerCapture(_0xeb3350_0.pointerId), 
  _0xeb3350_16({
    type: "\x70\x6f\x69\x6e\x74\x65\x72",
    action: "\x64\x6f\x77\x6e",
    button: _0xeb3350_0.button,
    ..._0xeb3350_1
  }));
}), _0xeb3350_1c.addEventListener("\x70\x6f\x69\x6e\x74\x65\x72\x75\x70", _0xeb3350_0 => {
  if (_0xeb3350_4) return;
  const _0xeb3350_1 = _0xeb3350_1b(_0xeb3350_0);
  _0xeb3350_1 && _0xeb3350_16({
    type: "\x70\x6f\x69\x6e\x74\x65\x72",
    action: "\x75\x70",
    button: _0xeb3350_0.button,
    ..._0xeb3350_1
  });
}), _0xeb3350_1c.addEventListener("\x70\x6f\x69\x6e\x74\x65\x72\x6d\x6f\x76\x65", _0xeb3350_0 => {
  if (_0xeb3350_4 || performance.now() - _0xeb3350_a < 35) return;
  _0xeb3350_a = performance.now();
  const _0xeb3350_1 = _0xeb3350_1b(_0xeb3350_0);
  _0xeb3350_1 && _0xeb3350_16({
    type: "\x70\x6f\x69\x6e\x74\x65\x72",
    action: "\x6d\x6f\x76\x65",
    button: 0,
    ..._0xeb3350_1
  });
}), _0xeb3350_1c.addEventListener("\x70\x6f\x69\x6e\x74\x65\x72\x63\x61\x6e\x63\x65\x6c", () => _0xeb3350_16({
  type: "\x72\x65\x6c\x65\x61\x73\x65"
})), _0xeb3350_1c.addEventListener("\x63\x6f\x6e\x74\x65\x78\x74\x6d\x65\x6e\x75", _0xeb3350_0 => _0xeb3350_0.preventDefault()), 
_0xeb3350_1c.addEventListener("\x77\x68\x65\x65\x6c", _0xeb3350_0 => {
  _0xeb3350_4 || (_0xeb3350_0.preventDefault(), _0xeb3350_16({
    type: "\x77\x68\x65\x65\x6c",
    delta: Math.sign(_0xeb3350_0.deltaY)
  }));
}, {
  passive: !1
});

for (const _0xeb3350_1e of [ "\x6b\x65\x79\x64\x6f\x77\x6e", "\x6b\x65\x79\x75\x70" ]) _0xeb3350_1c.addEventListener(_0xeb3350_1e, _0xeb3350_0 => {
  if (!_0xeb3350_4) {
    if ("\x45\x73\x63\x61\x70\x65" === _0xeb3350_0.key) return _0xeb3350_16({
      type: "\x72\x65\x6c\x65\x61\x73\x65"
    }), void _0xeb3350_1c.blur();
    _0xeb3350_0.preventDefault(), _0xeb3350_16({
      type: "\x6b\x65\x79",
      action: "\x6b\x65\x79\x64\x6f\x77\x6e" === _0xeb3350_1e ? "\x64\x6f\x77\x6e" : "\x75\x70",
      key: _0xeb3350_0.keyCode
    });
  }
});

async function _0xeb3350_1d(_0xeb3350_0, _0xeb3350_3) {
  try {
    if (await _0xeb3350_13("\x2f\x61\x63\x63\x65\x73\x73"), _0xeb3350_3 !== _0xeb3350_12 || _0xeb3350_2.currentUser !== _0xeb3350_0) return;
    if (await _0xeb3350_18(), _0xeb3350_3 !== _0xeb3350_12 || _0xeb3350_2.currentUser !== _0xeb3350_0) return;
    _0xeb3350_1("\x6c\x6f\x63\x6b\x65\x64").hidden = !0, _0xeb3350_1("\x77\x6f\x72\x6b\x73\x70\x61\x63\x65").hidden = !1;
  } catch (_0xeb3350_4) {
    if (_0xeb3350_3 !== _0xeb3350_12 || _0xeb3350_2.currentUser !== _0xeb3350_0) return;
    const _0xeb3350_5 = _0xeb3350_e(_0xeb3350_4);
    _0xeb3350_1("\x61\x63\x63\x65\x73\x73\x53\x74\x61\x74\x65").textContent = _0xeb3350_5 ? "\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x2e\x20\x52\x65\x74\x72\x79\x69\x6e\x67\u2026" : "\x54\x68\x69\x73\x20\x77\x6f\x72\x6b\x73\x70\x61\x63\x65\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x20\x74\x6f\x20\x79\x6f\x75\x72\x20\x61\x63\x63\x6f\x75\x6e\x74\x2e", 
    _0xeb3350_5 && (_0xeb3350_10 = setTimeout(() => _0xeb3350_1d(_0xeb3350_0, _0xeb3350_3), 5e3));
  }
}

_0xeb3350_1c.addEventListener("\x62\x6c\x75\x72", () => _0xeb3350_16({
  type: "\x72\x65\x6c\x65\x61\x73\x65"
})), window.addEventListener("\x62\x6c\x75\x72", () => _0xeb3350_16({
  type: "\x72\x65\x6c\x65\x61\x73\x65"
})), window.addEventListener("\x70\x61\x67\x65\x68\x69\x64\x65", _0xeb3350_17), _0xeb3350_1("\x72\x65\x66\x72\x65\x73\x68").onclick = _0xeb3350_15(_0xeb3350_18), 
_0xeb3350_1("\x64\x69\x73\x63\x6f\x6e\x6e\x65\x63\x74").onclick = _0xeb3350_1("\x63\x61\x6e\x63\x65\x6c\x52\x65\x63\x6f\x6e\x6e\x65\x63\x74").onclick = () => {
  _0xeb3350_17(), _0xeb3350_d("\x44\x69\x73\x63\x6f\x6e\x6e\x65\x63\x74\x65\x64\x2e"), _0xeb3350_18().catch(() => {});
}, _0xeb3350_1("\x66\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e").onclick = _0xeb3350_15(async () => {
  if (document.fullscreenElement) return document.exitPointerLock(), void await document.exitFullscreen();
  const _0xeb3350_0 = _0xeb3350_6?.lock(), _0xeb3350_1 = _0xeb3350_1c.requestFullscreen();
  await Promise.all([ _0xeb3350_0, _0xeb3350_1 ]);
}), _0xeb3350_1("\x6c\x6f\x63\x6b\x4d\x6f\x75\x73\x65").onclick = _0xeb3350_15(() => _0xeb3350_6?.lock()), 
_0xeb3350_1("\x73\x65\x63\x75\x72\x65\x41\x74\x74\x65\x6e\x74\x69\x6f\x6e").onclick = () => _0xeb3350_4?.sendCtrlAltDel(), _0xeb3350_1("\x70\x61\x69\x72").onsubmit = _0xeb3350_15(async () => {
  await _0xeb3350_13("\x2f\x70\x61\x69\x72\x2f\x61\x70\x70\x72\x6f\x76\x65", {
    code: _0xeb3350_1("\x63\x6f\x64\x65").value
  }), _0xeb3350_1("\x63\x6f\x64\x65").value = "", _0xeb3350_d("\x43\x6f\x6d\x70\x75\x74\x65\x72\x20\x70\x61\x69\x72\x65\x64\x2e\x20\x49\x74\x20\x73\x68\x6f\x75\x6c\x64\x20\x61\x70\x70\x65\x61\x72\x20\x6f\x6e\x6c\x69\x6e\x65\x20\x73\x68\x6f\x72\x74\x6c\x79\x2e"), 
  await _0xeb3350_18();
}), _0xeb3350_1("\x64\x6f\x77\x6e\x6c\x6f\x61\x64").onclick = _0xeb3350_15(async () => {
  const _0xeb3350_0 = await (await _0xeb3350_13("\x2f\x68\x6f\x73\x74\x2e\x7a\x69\x70")).blob(), _0xeb3350_1 = URL.createObjectURL(_0xeb3350_0), _0xeb3350_2 = document.createElement("\x61");
  _0xeb3350_2.href = _0xeb3350_1, _0xeb3350_2.download = "\x4e\x79\x78\x2d\x52\x65\x6d\x6f\x74\x65\x2e\x7a\x69\x70", _0xeb3350_2.click(), 
  setTimeout(() => URL.revokeObjectURL(_0xeb3350_1), 1e3);
}), window.addEventListener("\x70\x61\x67\x65\x68\x69\x64\x65", () => {
  _0xeb3350_12++, clearTimeout(_0xeb3350_10), clearTimeout(_0xeb3350_11);
}), async function _0xeb3350_0() {
  try {
    const _0xeb3350_0 = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x66\x6f\x75\x6e\x64\x65\x72\x2d\x70\x72\x6f\x66\x69\x6c\x65\x2f\x61\x75\x74\x68\x2d\x63\x6f\x6e\x66\x69\x67", {
      cache: "\x6e\x6f\x2d\x73\x74\x6f\x72\x65",
      signal: AbortSignal.timeout(15e3)
    });
    if (!_0xeb3350_0.ok) throw Error("\x41\x63\x63\x6f\x75\x6e\x74\x20\x73\x65\x72\x76\x69\x63\x65\x20\x69\x73\x20\x74\x65\x6d\x70\x6f\x72\x61\x72\x69\x6c\x79\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x2e");
    const _0xeb3350_3 = await _0xeb3350_0.json();
    if (!_0xeb3350_3.enabled) throw Error("\x41\x63\x63\x6f\x75\x6e\x74\x20\x73\x69\x67\x6e\x2d\x69\x6e\x20\x69\x73\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x2e");
    const [_0xeb3350_4, _0xeb3350_5] = await Promise.all([ import("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x67\x73\x74\x61\x74\x69\x63\x2e\x63\x6f\x6d\x2f\x66\x69\x72\x65\x62\x61\x73\x65\x6a\x73\x2f\x31\x31\x2e\x31\x30\x2e\x30\x2f\x66\x69\x72\x65\x62\x61\x73\x65\x2d\x61\x70\x70\x2e\x6a\x73"), import("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x67\x73\x74\x61\x74\x69\x63\x2e\x63\x6f\x6d\x2f\x66\x69\x72\x65\x62\x61\x73\x65\x6a\x73\x2f\x31\x31\x2e\x31\x30\x2e\x30\x2f\x66\x69\x72\x65\x62\x61\x73\x65\x2d\x61\x75\x74\x68\x2e\x6a\x73") ]), _0xeb3350_6 = _0xeb3350_4.getApps().find(_0xeb3350_0 => "\x6e\x79\x78\x2d\x66\x6f\x75\x6e\x64\x65\x72\x2d\x6f\x77\x6e\x65\x72" === _0xeb3350_0.name) || _0xeb3350_4.initializeApp({
      apiKey: _0xeb3350_3.apiKey,
      authDomain: _0xeb3350_3.projectId + "\x2e\x66\x69\x72\x65\x62\x61\x73\x65\x61\x70\x70\x2e\x63\x6f\x6d",
      projectId: _0xeb3350_3.projectId
    }, "\x6e\x79\x78\x2d\x66\x6f\x75\x6e\x64\x65\x72\x2d\x6f\x77\x6e\x65\x72");
    _0xeb3350_2 = _0xeb3350_5.getAuth(_0xeb3350_6), await _0xeb3350_5.setPersistence(_0xeb3350_2, _0xeb3350_5.\u{62}\u{72}\u{6f}\u{77}\u{73}\u{65}\u{72}\u{4c}\u{6f}\u{63}\u{61}\u{6c}\u{50}\u{65}\u{72}\u{73}\u{69}\u{73}\u{74}\u{65}\u{6e}\u{63}\u{65}), 
    _0xeb3350_5.onAuthStateChanged(_0xeb3350_2, _0xeb3350_0 => {
      _0xeb3350_17(), clearTimeout(_0xeb3350_10);
      const _0xeb3350_2 = ++_0xeb3350_12;
      _0xeb3350_1("\x77\x6f\x72\x6b\x73\x70\x61\x63\x65").hidden = !0, _0xeb3350_1("\x6c\x6f\x63\x6b\x65\x64").hidden = !1, _0xeb3350_0 ? _0xeb3350_1d(_0xeb3350_0, _0xeb3350_2) : _0xeb3350_1("\x61\x63\x63\x65\x73\x73\x53\x74\x61\x74\x65").textContent = "\x53\x69\x67\x6e\x20\x69\x6e\x20\x74\x6f\x20\x4e\x79\x78\x2c\x20\x74\x68\x65\x6e\x20\x72\x65\x74\x75\x72\x6e\x20\x68\x65\x72\x65\x2e";
    });
  } catch (_0xeb3350_3) {
    _0xeb3350_1("\x61\x63\x63\x65\x73\x73\x53\x74\x61\x74\x65").textContent = _0xeb3350_f(_0xeb3350_3) + "\x20\x52\x65\x74\x72\x79\x69\x6e\x67\u2026", 
    _0xeb3350_11 = setTimeout(_0xeb3350_0, 5e3);
  }
}();
