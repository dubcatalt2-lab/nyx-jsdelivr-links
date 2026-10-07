import "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x6a\x73\x2f\x40\x72\x63\x62\x33\x64\x61\x35\x34\x34\x36\x66\x38\x66\x31\x63\x64\x33\x37\x35\x33\x36\x36\x63\x63\x38\x21\x2e\x6a\x73";

export function setupDropPresence({frame: _0x3eb33c_0, ensureAccount: _0x3eb33c_1, notice: _0x3eb33c_2}) {
  const _0x3eb33c_3 = document.getElementById("\x6f\x6e\x6c\x69\x6e\x65\x43\x6f\x75\x6e\x74\x65\x72"), _0x3eb33c_4 = document.getElementById("\x6f\x6e\x6c\x69\x6e\x65\x43\x6f\x75\x6e\x74"), _0x3eb33c_5 = new Map;
  let _0x3eb33c_6 = !1, _0x3eb33c_7 = !1, _0x3eb33c_8 = 0, _0x3eb33c_9 = !1, _0x3eb33c_a = "";
  try {
    _0x3eb33c_a = localStorage.getItem("\x6e\x79\x78\x2e\x70\x72\x65\x73\x65\x6e\x63\x65\x53\x65\x73\x73\x69\x6f\x6e") || "", /^[a-zA-Z0-9_-]{16,128}$/.test(_0x3eb33c_a) || (_0x3eb33c_a = crypto.randomUUID(), 
    localStorage.setItem("\x6e\x79\x78\x2e\x70\x72\x65\x73\x65\x6e\x63\x65\x53\x65\x73\x73\x69\x6f\x6e", _0x3eb33c_a));
  } catch {
    _0x3eb33c_a = crypto.randomUUID();
  }
  function _0x3eb33c_b(_0x3eb33c_0) {
    _0x3eb33c_7 = _0x3eb33c_0;
    const _0x3eb33c_1 = document.getElementById("\x61\x63\x63\x6f\x75\x6e\x74\x52\x6f\x6c\x65");
    _0x3eb33c_1.textContent = _0x3eb33c_7 ? "\x4f\x77\x6e\x65\x72\x20\x3f\x20\x46\x75\x6c\x6c\x20\x61\x63\x63\x65\x73\x73" : _0x3eb33c_6 ? "\x4d\x65\x6d\x62\x65\x72\x20\x3f\x20\x53\x74\x61\x6e\x64\x61\x72\x64\x20\x61\x63\x63\x65\x73\x73" : "\x47\x75\x65\x73\x74", 
    _0x3eb33c_1.dataset.role = _0x3eb33c_7 ? "\x6f\x77\x6e\x65\x72" : _0x3eb33c_6 ? "\x6d\x65\x6d\x62\x65\x72" : "\x67\x75\x65\x73\x74", 
    _0x3eb33c_3.disabled = !_0x3eb33c_7, _0x3eb33c_3.title = _0x3eb33c_7 ? "\x4f\x70\x65\x6e\x20\x4f\x77\x6e\x65\x72\x20\x44\x61\x73\x68\x62\x6f\x61\x72\x64" : "\x43\x75\x72\x72\x65\x6e\x74\x20\x75\x73\x65\x72\x73\x20\x6f\x6e\x6c\x69\x6e\x65", 
    _0x3eb33c_3.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", _0x3eb33c_7 ? "\x4f\x70\x65\x6e\x20\x4f\x77\x6e\x65\x72\x20\x44\x61\x73\x68\x62\x6f\x61\x72\x64" : "\x43\x75\x72\x72\x65\x6e\x74\x20\x75\x73\x65\x72\x73\x20\x6f\x6e\x6c\x69\x6e\x65");
  }
  function _0x3eb33c_c() {
    _0x3eb33c_1();
    const _0x3eb33c_2 = crypto.randomUUID();
    return new Promise(_0x3eb33c_1 => {
      const _0x3eb33c_3 = setTimeout(() => {
        _0x3eb33c_5.delete(_0x3eb33c_2), _0x3eb33c_1("");
      }, 4e3);
      _0x3eb33c_5.set(_0x3eb33c_2, _0x3eb33c_0 => {
        clearTimeout(_0x3eb33c_3), _0x3eb33c_1(_0x3eb33c_0);
      }), _0x3eb33c_0.contentWindow?.postMessage({
        type: "\x64\x72\x6f\x70\x3a\x73\x65\x73\x73\x69\x6f\x6e\x2d\x74\x6f\x6b\x65\x6e",
        requestId: _0x3eb33c_2
      }, location.origin);
    });
  }
  async function _0x3eb33c_d() {
    const _0x3eb33c_0 = ++_0x3eb33c_8;
    _0x3eb33c_b(!1);
    try {
      const _0x3eb33c_1 = await _0x3eb33c_c();
      if (!_0x3eb33c_1) return;
      const _0x3eb33c_2 = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x66\x6f\x75\x6e\x64\x65\x72\x2d\x70\x72\x6f\x66\x69\x6c\x65\x2f\x6f\x77\x6e\x65\x72", {
        headers: {
          Authorization: "\x42\x65\x61\x72\x65\x72\x20" + _0x3eb33c_1
        },
        cache: "\x6e\x6f\x2d\x73\x74\x6f\x72\x65",
        signal: AbortSignal.timeout(8e3)
      }), _0x3eb33c_3 = _0x3eb33c_2.ok ? await _0x3eb33c_2.json() : {};
      _0x3eb33c_0 === _0x3eb33c_8 && _0x3eb33c_b(!0 === _0x3eb33c_3.founder && !0 === _0x3eb33c_3.dashboard);
    } catch {
      _0x3eb33c_0 === _0x3eb33c_8 && _0x3eb33c_b(!1);
    }
  }
  async function _0x3eb33c_e() {
    if (!_0x3eb33c_9 && !document.hidden) {
      _0x3eb33c_9 = !0;
      try {
        const _0x3eb33c_0 = await _0x3eb33c_c(), _0x3eb33c_1 = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x70\x72\x65\x73\x65\x6e\x63\x65", {
          method: "\x50\x4f\x53\x54",
          headers: {
            "\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65": "\x74\x65\x78\x74\x2f\x70\x6c\x61\x69\x6e\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x55\x54\x46\x2d\x38",
            ..._0x3eb33c_0 ? {
              Authorization: "\x42\x65\x61\x72\x65\x72\x20" + _0x3eb33c_0
            } : {}
          },
          body: JSON.stringify({
            sessionId: _0x3eb33c_a
          }),
          cache: "\x6e\x6f\x2d\x73\x74\x6f\x72\x65",
          signal: AbortSignal.timeout(8e3)
        });
        if (!_0x3eb33c_1.ok) throw Error();
        const _0x3eb33c_2 = await _0x3eb33c_1.json();
        if (!Number.isFinite(_0x3eb33c_2.online) || _0x3eb33c_2.online < 0) throw Error();
        _0x3eb33c_4.textContent = Math.floor(_0x3eb33c_2.online) + "\x20\x6f\x6e\x6c\x69\x6e\x65", _0x3eb33c_3.classList.remove("\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65");
      } catch {
        _0x3eb33c_4.textContent = "\x4f\x6e\x6c\x69\x6e\x65\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65", _0x3eb33c_3.classList.add("\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65");
      } finally {
        _0x3eb33c_9 = !1;
      }
    }
  }
  addEventListener("\x6d\x65\x73\x73\x61\x67\x65", _0x3eb33c_1 => {
    if (_0x3eb33c_1.origin !== location.origin || _0x3eb33c_1.source !== _0x3eb33c_0.contentWindow) return;
    const _0x3eb33c_2 = _0x3eb33c_1.data;
    if ("\x64\x72\x6f\x70\x3a\x73\x65\x73\x73\x69\x6f\x6e\x2d\x74\x6f\x6b\x65\x6e\x2d\x72\x65\x73\x75\x6c\x74" === _0x3eb33c_2?.type) {
      const _0x3eb33c_0 = _0x3eb33c_5.get(_0x3eb33c_2.requestId);
      _0x3eb33c_5.delete(_0x3eb33c_2.requestId), _0x3eb33c_0?.("\x73\x74\x72\x69\x6e\x67" == typeof _0x3eb33c_2.token ? _0x3eb33c_2.token : "");
    }
    "\x64\x72\x6f\x70\x3a\x61\x63\x63\x6f\x75\x6e\x74" === _0x3eb33c_2?.type && (_0x3eb33c_6 = !0 === _0x3eb33c_2.signedIn, 
    _0x3eb33c_8++, _0x3eb33c_b(!1), globalThis.NyxOwnerDashboard?.close(), _0x3eb33c_2.signedIn && _0x3eb33c_d(), 
    _0x3eb33c_e()), "\x64\x72\x6f\x70\x3a\x72\x65\x61\x64\x79" === _0x3eb33c_2?.type && (_0x3eb33c_d(), _0x3eb33c_e());
  }), _0x3eb33c_3.onclick = async () => {
    _0x3eb33c_7 && (await _0x3eb33c_d(), _0x3eb33c_7 ? globalThis.NyxOwnerDashboard.open({
      getToken: _0x3eb33c_c,
      toast: _0x3eb33c_2
    }) : _0x3eb33c_2("\x4f\x77\x6e\x65\x72\x20\x61\x63\x63\x65\x73\x73\x20\x69\x73\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x2e"));
  }, document.addEventListener("\x76\x69\x73\x69\x62\x69\x6c\x69\x74\x79\x63\x68\x61\x6e\x67\x65", () => {
    document.hidden || (_0x3eb33c_e(), _0x3eb33c_d());
  }), addEventListener("\x6f\x6e\x6c\x69\x6e\x65", _0x3eb33c_e), _0x3eb33c_b(!1), _0x3eb33c_1(), _0x3eb33c_e(), 
  setInterval(_0x3eb33c_e, 15e3);
}
