(() => {
  "use strict";
  const _0xefd14c_0 = document.body.classList.contains("\x64\x72\x6f\x70\x2d\x74\x75\x62\x65"), _0xefd14c_1 = _0xefd14c_1 => !_0xefd14c_0 || !_0xefd14c_1?.isShort && !/\/shorts\//i.test(_0xefd14c_1?.sourceUrl || ""), _0xefd14c_2 = _0xefd14c_0 => (Array.isArray(_0xefd14c_0) ? _0xefd14c_0 : []).filter(_0xefd14c_1), _0xefd14c_3 = _0xefd14c_0 => document.querySelector(_0xefd14c_0), _0xefd14c_4 = _0xefd14c_0 => [ ...document.querySelectorAll(_0xefd14c_0) ], _0xefd14c_5 = Object.fromEntries(_0xefd14c_4("\x5b\x64\x61\x74\x61\x2d\x76\x69\x65\x77\x5d").map(_0xefd14c_0 => [ _0xefd14c_0.dataset.view, _0xefd14c_0 ])), _0xefd14c_6 = {
    nativeAvailable: !1,
    invidiousEmbedOrigin: "",
    watchGeneration: 0,
    preferredPlayer: "\x6e\x61\x74\x69\x76\x65",
    view: "\x68\x6f\x6d\x65",
    videos: [],
    catalog: [],
    shorts: [],
    shortIndex: 0,
    watchPlayer: null,
    shortPlayer: null,
    watchTimer: 0,
    shortTimer: 0,
    watchVideo: null,
    watchCaptions: !1,
    shortCaptions: !1,
    shortMuted: !0,
    channel: null,
    watchTrail: [],
    failedVideoIds: new Set,
    failedShortIds: new Set,
    watchRecoveryTimer: 0,
    watchSpaceTimer: 0,
    watchSpacePressed: !1,
    watchSpaceHeld: !1,
    watchSpaceWasPlaying: !1,
    watchSpacePreviousRate: 1,
    watchSpaceRateChanged: !1,
    watchCommunityRequestId: 0,
    profile: {
      uid: "",
      signedIn: !1,
      displayName: "\x50\x72\x6f\x66\x69\x6c\x65",
      avatarUrl: ""
    },
    profileRequestId: "",
    profileRetryTimer: 0,
    profileRetryCount: 0,
    profileResolved: !1
  }, _0xefd14c_7 = Object.fromEntries([ "\x6e\x6f\x74\x69\x63\x65", "\x73\x65\x61\x72\x63\x68\x2d\x66\x6f\x72\x6d", "\x73\x65\x61\x72\x63\x68\x2d\x69\x6e\x70\x75\x74", "\x66\x65\x65\x64\x2d\x74\x69\x74\x6c\x65", "\x72\x65\x73\x75\x6c\x74\x2d\x63\x6f\x75\x6e\x74", "\x76\x69\x64\x65\x6f\x2d\x67\x72\x69\x64", "\x77\x61\x74\x63\x68\x2d\x73\x74\x61\x67\x65", "\x77\x61\x74\x63\x68\x2d\x70\x6c\x61\x79\x65\x72", "\x77\x61\x74\x63\x68\x2d\x6c\x6f\x61\x64\x69\x6e\x67", "\x77\x61\x74\x63\x68\x2d\x63\x65\x6e\x74\x65\x72\x2d\x70\x6c\x61\x79", "\x77\x61\x74\x63\x68\x2d\x74\x6f\x67\x67\x6c\x65", "\x77\x61\x74\x63\x68\x2d\x74\x69\x6d\x65", "\x77\x61\x74\x63\x68\x2d\x6d\x75\x74\x65", "\x77\x61\x74\x63\x68\x2d\x63\x61\x70\x74\x69\x6f\x6e\x73", "\x77\x61\x74\x63\x68\x2d\x63\x61\x70\x74\x69\x6f\x6e\x2d\x6f\x70\x74\x69\x6f\x6e", "\x77\x61\x74\x63\x68\x2d\x66\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e", "\x77\x61\x74\x63\x68\x2d\x70\x72\x6f\x67\x72\x65\x73\x73", "\x77\x61\x74\x63\x68\x2d\x74\x69\x74\x6c\x65", "\x77\x61\x74\x63\x68\x2d\x63\x72\x65\x61\x74\x6f\x72", "\x77\x61\x74\x63\x68\x2d\x76\x69\x64\x65\x6f\x2d\x6d\x65\x74\x61", "\x77\x61\x74\x63\x68\x2d\x63\x68\x61\x6e\x6e\x65\x6c\x2d\x6d\x61\x72\x6b", "\x77\x61\x74\x63\x68\x2d\x73\x6f\x75\x72\x63\x65", "\x77\x61\x74\x63\x68\x2d\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6f\x6e", "\x77\x61\x74\x63\x68\x2d\x72\x65\x6c\x61\x74\x65\x64", "\x73\x68\x6f\x72\x74\x2d\x73\x74\x61\x67\x65", "\x73\x68\x6f\x72\x74\x2d\x70\x6c\x61\x79\x65\x72", "\x73\x68\x6f\x72\x74\x2d\x6c\x6f\x61\x64\x69\x6e\x67", "\x73\x68\x6f\x72\x74\x2d\x63\x65\x6e\x74\x65\x72\x2d\x70\x6c\x61\x79", "\x73\x68\x6f\x72\x74\x2d\x6d\x75\x74\x65", "\x73\x68\x6f\x72\x74\x2d\x63\x61\x70\x74\x69\x6f\x6e\x73", "\x73\x68\x6f\x72\x74\x2d\x66\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e", "\x73\x68\x6f\x72\x74\x2d\x70\x72\x6f\x67\x72\x65\x73\x73", "\x73\x68\x6f\x72\x74\x2d\x74\x69\x74\x6c\x65", "\x73\x68\x6f\x72\x74\x2d\x63\x72\x65\x61\x74\x6f\x72", "\x70\x72\x6f\x66\x69\x6c\x65\x2d\x62\x75\x74\x74\x6f\x6e", "\x70\x72\x6f\x66\x69\x6c\x65\x2d\x61\x76\x61\x74\x61\x72", "\x73\x68\x6f\x72\x74\x2d\x73\x65\x61\x72\x63\x68\x2d\x66\x6f\x72\x6d", "\x73\x68\x6f\x72\x74\x2d\x73\x65\x61\x72\x63\x68\x2d\x69\x6e\x70\x75\x74", "\x73\x68\x6f\x72\x74\x2d\x66\x65\x65\x64\x2d\x6c\x61\x62\x65\x6c", "\x73\x68\x6f\x72\x74\x2d\x70\x72\x65\x66\x65\x72\x65\x6e\x63\x65\x73\x2d\x73\x74\x61\x74\x75\x73", "\x73\x68\x6f\x72\x74\x2d\x68\x69\x64\x65\x2d\x63\x68\x61\x6e\x6e\x65\x6c", "\x73\x68\x6f\x72\x74\x2d\x64\x69\x73\x6c\x69\x6b\x65", "\x73\x68\x6f\x72\x74\x2d\x72\x65\x73\x65\x74", "\x73\x68\x6f\x72\x74\x2d\x68\x65\x61\x72\x74", "\x73\x68\x6f\x72\x74\x2d\x6d\x65\x6e\x75", "\x73\x68\x6f\x72\x74\x2d\x65\x6d\x70\x74\x79", "\x73\x68\x6f\x72\x74\x2d\x65\x6d\x70\x74\x79\x2d\x74\x69\x74\x6c\x65", "\x73\x68\x6f\x72\x74\x2d\x72\x65\x74\x72\x79", "\x77\x61\x74\x63\x68\x2d\x71\x75\x61\x6c\x69\x74\x79", "\x77\x61\x74\x63\x68\x2d\x65\x6e\x67\x69\x6e\x65", "\x77\x61\x74\x63\x68\x2d\x73\x65\x74\x74\x69\x6e\x67\x73", "\x77\x61\x74\x63\x68\x2d\x73\x65\x74\x74\x69\x6e\x67\x73\x2d\x6d\x65\x6e\x75", "\x77\x61\x74\x63\x68\x2d\x73\x70\x65\x65\x64", "\x77\x61\x74\x63\x68\x2d\x76\x6f\x6c\x75\x6d\x65", "\x77\x61\x74\x63\x68\x2d\x73\x65\x74\x74\x69\x6e\x67\x73\x2d\x63\x61\x70\x74\x69\x6f\x6e\x73", "\x77\x61\x74\x63\x68\x2d\x72\x65\x77\x69\x6e\x64", "\x77\x61\x74\x63\x68\x2d\x66\x6f\x72\x77\x61\x72\x64", "\x77\x61\x74\x63\x68\x2d\x73\x70\x65\x65\x64\x2d\x69\x6e\x64\x69\x63\x61\x74\x6f\x72", "\x77\x61\x74\x63\x68\x2d\x76\x69\x65\x77\x73", "\x77\x61\x74\x63\x68\x2d\x6c\x69\x6b\x65\x73", "\x77\x61\x74\x63\x68\x2d\x63\x6f\x6d\x6d\x65\x6e\x74\x73\x2d\x63\x6f\x75\x6e\x74", "\x77\x61\x74\x63\x68\x2d\x74\x61\x62\x2d\x63\x6f\x6d\x6d\x65\x6e\x74\x73\x2d\x63\x6f\x75\x6e\x74", "\x77\x61\x74\x63\x68\x2d\x63\x6f\x6d\x6d\x65\x6e\x74\x73\x2d\x73\x74\x61\x74\x75\x73", "\x77\x61\x74\x63\x68\x2d\x63\x6f\x6d\x6d\x65\x6e\x74\x73", "\x77\x61\x74\x63\x68\x2d\x74\x72\x61\x6e\x73\x63\x72\x69\x70\x74\x2d\x73\x74\x61\x74\x75\x73", "\x77\x61\x74\x63\x68\x2d\x74\x72\x61\x6e\x73\x63\x72\x69\x70\x74", "\x63\x68\x61\x6e\x6e\x65\x6c\x2d\x62\x61\x63\x6b", "\x63\x68\x61\x6e\x6e\x65\x6c\x2d\x70\x72\x6f\x66\x69\x6c\x65", "\x63\x68\x61\x6e\x6e\x65\x6c\x2d\x61\x76\x61\x74\x61\x72", "\x63\x68\x61\x6e\x6e\x65\x6c\x2d\x74\x69\x74\x6c\x65", "\x63\x68\x61\x6e\x6e\x65\x6c\x2d\x68\x61\x6e\x64\x6c\x65", "\x63\x68\x61\x6e\x6e\x65\x6c\x2d\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6f\x6e", "\x63\x68\x61\x6e\x6e\x65\x6c\x2d\x73\x75\x62\x73\x63\x72\x69\x62\x65\x72\x73", "\x63\x68\x61\x6e\x6e\x65\x6c\x2d\x76\x69\x64\x65\x6f\x73", "\x63\x68\x61\x6e\x6e\x65\x6c\x2d\x73\x74\x61\x74\x75\x73" ].map(_0xefd14c_0 => [ _0xefd14c_0.replace(/-([a-z])/g, (_0xefd14c_0, _0xefd14c_1) => _0xefd14c_1.toUpperCase()), _0xefd14c_3(`\x5b\x64\x61\x74\x61\x2d${_0xefd14c_0}\x5d`) ]));
  function _0xefd14c_8() {
    if ("\x74\x75\x74\x73\x69" === document.documentElement.dataset.appShell) return;
    if (_0xefd14c_0) return;
    const _0xefd14c_1 = document.documentElement, _0xefd14c_2 = [ "\x64\x65\x66\x61\x75\x6c\x74", "\x6d\x69\x64\x6e\x69\x67\x68\x74", "\x72\x75\x62\x79", "\x65\x6d\x65\x72\x61\x6c\x64", "\x73\x61\x6b\x75\x72\x61", "\x66\x72\x65\x73\x68", "\x68\x61\x6c\x6c\x6f\x77\x65\x65\x6e", "\x63\x75\x73\x74\x6f\x6d" ];
    try {
      const _0xefd14c_0 = localStorage.getItem("\x6e\x79\x78\x2e\x74\x68\x65\x6d\x65") || "\x64\x65\x66\x61\x75\x6c\x74", _0xefd14c_3 = _0xefd14c_2.includes(_0xefd14c_0) ? _0xefd14c_0 : "\x64\x65\x66\x61\x75\x6c\x74";
      _0xefd14c_1.dataset.nyxTheme = _0xefd14c_3, _0xefd14c_1.dataset.nyxAppearance = "\x6c\x69\x67\x68\x74" === localStorage.getItem("\x6e\x79\x78\x2e\x61\x70\x70\x65\x61\x72\x61\x6e\x63\x65") ? "\x6c\x69\x67\x68\x74" : "\x64\x61\x72\x6b", 
      document.body.classList.remove(..._0xefd14c_2.map(_0xefd14c_0 => `\x74\x68\x65\x6d\x65\x2d${_0xefd14c_0}`)), 
      document.body.classList.add(`\x74\x68\x65\x6d\x65\x2d${_0xefd14c_3}`);
      const _0xefd14c_4 = localStorage.getItem("\x6e\x79\x78\x2e\x63\x75\x73\x74\x6f\x6d\x54\x68\x65\x6d\x65\x43\x6f\x6c\x6f\x72");
      "\x63\x75\x73\x74\x6f\x6d" === _0xefd14c_3 && /^#[a-f0-9]{6}$/i.test(_0xefd14c_4 || "") ? _0xefd14c_1.style.setProperty("\x2d\x2d\x6e\x79\x78\x2d\x63\x75\x73\x74\x6f\x6d\x2d\x62\x61\x73\x65", _0xefd14c_4) : _0xefd14c_1.style.removeProperty("\x2d\x2d\x6e\x79\x78\x2d\x63\x75\x73\x74\x6f\x6d\x2d\x62\x61\x73\x65");
    } catch {}
  }
  _0xefd14c_7.watchBackup = document.createElement("\x62\x75\x74\x74\x6f\x6e"), _0xefd14c_7.watchBackup.type = "\x62\x75\x74\x74\x6f\x6e", 
  _0xefd14c_7.watchBackup.textContent = "\x49\x6e\x76\x69\x64\x69\x6f\x75\x73", _0xefd14c_7.watchBackup.dataset.watchBackup = "", 
  _0xefd14c_7.watchBackup.hidden = !0, _0xefd14c_7.watchBackup.title = "\x55\x73\x65\x20\x74\x68\x65\x20\x49\x6e\x76\x69\x64\x69\x6f\x75\x73\x20\x70\x6c\x61\x79\x65\x72", 
  _0xefd14c_7.watchEngine.after(_0xefd14c_7.watchBackup), addEventListener("\x73\x74\x6f\x72\x61\x67\x65", _0xefd14c_0 => {
    [ "\x6e\x79\x78\x2e\x74\x68\x65\x6d\x65", "\x6e\x79\x78\x2e\x61\x70\x70\x65\x61\x72\x61\x6e\x63\x65", "\x6e\x79\x78\x2e\x63\x75\x73\x74\x6f\x6d\x54\x68\x65\x6d\x65\x43\x6f\x6c\x6f\x72" ].includes(_0xefd14c_0.key) && _0xefd14c_8();
  }), addEventListener("\x6d\x65\x73\x73\x61\x67\x65", _0xefd14c_0 => {
    _0xefd14c_0.source === parent && _0xefd14c_0.origin === location.origin && "\x6e\x79\x78\x3a\x74\x68\x65\x6d\x65\x2d\x73\x79\x6e\x63" === _0xefd14c_0.data?.type && _0xefd14c_8();
  });
  const _0xefd14c_9 = _0xefd14c_0 => `\x3c\x73\x76\x67\x20\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e\x3d\x22\x74\x72\x75\x65\x22\x3e\x3c\x75\x73\x65\x20\x68\x72\x65\x66\x3d\x22\x23${_0xefd14c_0}\x22\x3e\x3c\x2f\x75\x73\x65\x3e\x3c\x2f\x73\x76\x67\x3e`;
  function _0xefd14c_a(_0xefd14c_1 = "") {
    _0xefd14c_7.notice.textContent = _0xefd14c_0 ? String(_0xefd14c_1).replace(/NyxTube/g, "\x44\x72\x6f\x70\x54\x75\x62\x65") : _0xefd14c_1, 
    _0xefd14c_7.notice.hidden = !_0xefd14c_1;
  }
  async function _0xefd14c_b(_0xefd14c_0, _0xefd14c_1) {
    const _0xefd14c_2 = await fetch(_0xefd14c_0, {
      credentials: "\x73\x61\x6d\x65\x2d\x6f\x72\x69\x67\x69\x6e",
      headers: {
        Accept: "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e"
      },
      signal: _0xefd14c_1
    });
    let _0xefd14c_3 = null;
    try {
      _0xefd14c_3 = await _0xefd14c_2.json();
    } catch {}
    if (!_0xefd14c_2.ok) throw Object.assign(new Error(_0xefd14c_3?.error || `\x52\x65\x71\x75\x65\x73\x74\x20\x66\x61\x69\x6c\x65\x64\x20\x28${_0xefd14c_2.status}\x29`), {
      status: _0xefd14c_2.status
    });
    return _0xefd14c_3;
  }
  function _0xefd14c_c(_0xefd14c_0) {
    const _0xefd14c_1 = Math.max(0, Math.floor(Number(_0xefd14c_0) || 0)), _0xefd14c_2 = Math.floor(_0xefd14c_1 / 3600), _0xefd14c_3 = Math.floor(_0xefd14c_1 % 3600 / 60), _0xefd14c_4 = _0xefd14c_1 % 60;
    return _0xefd14c_2 ? `${_0xefd14c_2}\x3a${String(_0xefd14c_3).padStart(2, "\x30")}\x3a${String(_0xefd14c_4).padStart(2, "\x30")}` : `${_0xefd14c_3}\x3a${String(_0xefd14c_4).padStart(2, "\x30")}`;
  }
  function _0xefd14c_d(_0xefd14c_0) {
    const _0xefd14c_1 = Number(_0xefd14c_0) || 0;
    return _0xefd14c_1 >= 1e9 ? `${(_0xefd14c_1 / 1e9).toFixed(_0xefd14c_1 >= 1e10 ? 0 : 1)}\x42\x20\x76\x69\x65\x77\x73` : _0xefd14c_1 >= 1e6 ? `${(_0xefd14c_1 / 1e6).toFixed(_0xefd14c_1 >= 1e7 ? 0 : 1)}\x4d\x20\x76\x69\x65\x77\x73` : _0xefd14c_1 >= 1e3 ? `${(_0xefd14c_1 / 1e3).toFixed(_0xefd14c_1 >= 1e4 ? 0 : 1)}\x4b\x20\x76\x69\x65\x77\x73` : _0xefd14c_1 ? `${_0xefd14c_1.toLocaleString()}\x20\x76\x69\x65\x77\x73` : "\x59\x6f\x75\x54\x75\x62\x65";
  }
  function _0xefd14c_e(_0xefd14c_0) {
    const _0xefd14c_1 = new Date(_0xefd14c_0 || "");
    return Number.isNaN(_0xefd14c_1.getTime()) ? "" : _0xefd14c_1.toLocaleDateString(void 0, {
      year: "\x6e\x75\x6d\x65\x72\x69\x63",
      month: "\x73\x68\x6f\x72\x74",
      day: "\x6e\x75\x6d\x65\x72\x69\x63"
    });
  }
  const _0xefd14c_f = _0xefd14c_0 => null == _0xefd14c_0 ? "\x55\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65" : Math.max(0, Number(_0xefd14c_0) || 0).toLocaleString();
  function _0xefd14c_10() {
    clearTimeout(_0xefd14c_6.profileRetryTimer), _0xefd14c_6.profileResolved = !1, _0xefd14c_6.profileRequestId = `\x6e\x79\x78\x74\x75\x62\x65\x2d\x70\x72\x6f\x66\x69\x6c\x65\x2d${Date.now()}\x2d${Math.random().toString(16).slice(2)}`, 
    parent.postMessage({
      type: "\x6e\x79\x78\x3a\x6e\x79\x78\x74\x75\x62\x65\x2d\x70\x72\x6f\x66\x69\x6c\x65\x2d\x72\x65\x71\x75\x65\x73\x74",
      requestId: _0xefd14c_6.profileRequestId
    }, location.origin), _0xefd14c_6.profileRetryTimer = setTimeout(() => {
      _0xefd14c_6.profileResolved || 0 !== _0xefd14c_6.profileRetryCount++ || _0xefd14c_10();
    }, 700);
  }
  function _0xefd14c_11() {
    _0xefd14c_7.videoGrid.replaceChildren(...Array.from({
      length: 8
    }, () => {
      const _0xefd14c_0 = document.createElement("\x61\x72\x74\x69\x63\x6c\x65");
      return _0xefd14c_0.className = "\x76\x69\x64\x65\x6f\x2d\x63\x61\x72\x64\x20\x73\x6b\x65\x6c\x65\x74\x6f\x6e", _0xefd14c_0.innerHTML = "\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x76\x69\x64\x65\x6f\x2d\x63\x6f\x76\x65\x72\x22\x3e\x3c\x2f\x64\x69\x76\x3e\x3c\x62\x3e\x3c\x2f\x62\x3e\x3c\x69\x3e\x3c\x2f\x69\x3e", 
      _0xefd14c_0;
    }));
  }
  function _0xefd14c_12(_0xefd14c_0) {
    _0xefd14c_6.videos = _0xefd14c_2(_0xefd14c_0);
    const _0xefd14c_1 = new Map(_0xefd14c_6.catalog.map(_0xefd14c_0 => [ _0xefd14c_0.id, _0xefd14c_0 ]));
    if (_0xefd14c_6.videos.forEach(_0xefd14c_0 => {
      _0xefd14c_0?.id && _0xefd14c_1.set(_0xefd14c_0.id, _0xefd14c_0);
    }), _0xefd14c_6.catalog = [ ..._0xefd14c_1.values() ].slice(-60), _0xefd14c_7.resultCount.textContent = `${_0xefd14c_6.videos.length}\x20\x76\x69\x64\x65\x6f${1 === _0xefd14c_6.videos.length ? "" : "\x73"}`, 
    !_0xefd14c_6.videos.length) {
      const _0xefd14c_0 = document.createElement("\x70");
      return _0xefd14c_0.className = "\x65\x6d\x70\x74\x79\x2d\x67\x72\x69\x64", _0xefd14c_0.textContent = "\x4e\x6f\x20\x70\x6c\x61\x79\x61\x62\x6c\x65\x20\x76\x69\x64\x65\x6f\x73\x20\x77\x65\x72\x65\x20\x66\x6f\x75\x6e\x64\x2e", 
      void _0xefd14c_7.videoGrid.replaceChildren(_0xefd14c_0);
    }
    _0xefd14c_7.videoGrid.replaceChildren(..._0xefd14c_6.videos.map(_0xefd14c_0 => {
      const _0xefd14c_1 = document.createElement("\x61\x72\x74\x69\x63\x6c\x65");
      _0xefd14c_1.className = "\x76\x69\x64\x65\x6f\x2d\x63\x61\x72\x64";
      const _0xefd14c_2 = document.createElement("\x62\x75\x74\x74\x6f\x6e");
      _0xefd14c_2.className = "\x76\x69\x64\x65\x6f\x2d\x63\x6f\x76\x65\x72", _0xefd14c_2.type = "\x62\x75\x74\x74\x6f\x6e", _0xefd14c_2.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", `\x50\x6c\x61\x79\x20${_0xefd14c_0.title || "\x76\x69\x64\x65\x6f"}`);
      const _0xefd14c_3 = document.createElement("\x69\x6d\x67");
      _0xefd14c_3.alt = "", _0xefd14c_3.loading = "\x6c\x61\x7a\x79", _0xefd14c_3.referrerPolicy = "\x6e\x6f\x2d\x72\x65\x66\x65\x72\x72\x65\x72", 
      _0xefd14c_3.src = _0xefd14c_0.thumbnail || "", _0xefd14c_3.addEventListener("\x65\x72\x72\x6f\x72", () => _0xefd14c_3.remove());
      const _0xefd14c_4 = document.createElement("\x73\x70\x61\x6e");
      _0xefd14c_4.className = "\x66\x61\x6c\x6c\x62\x61\x63\x6b", _0xefd14c_4.innerHTML = _0xefd14c_9("\x69\x63\x6f\x6e\x2d\x70\x6c\x61\x79");
      const _0xefd14c_5 = document.createElement("\x73\x70\x61\x6e");
      _0xefd14c_5.className = "\x64\x75\x72\x61\x74\x69\x6f\x6e", _0xefd14c_5.textContent = _0xefd14c_c(_0xefd14c_0.durationSeconds), 
      _0xefd14c_2.append(_0xefd14c_3, _0xefd14c_4, _0xefd14c_5), _0xefd14c_2.addEventListener("\x63\x6c\x69\x63\x6b", () => _0xefd14c_1e(_0xefd14c_0));
      const _0xefd14c_6 = document.createElement("\x64\x69\x76");
      _0xefd14c_6.className = "\x63\x61\x72\x64\x2d\x63\x6f\x70\x79";
      const _0xefd14c_7 = document.createElement("\x73\x74\x72\x6f\x6e\x67");
      _0xefd14c_7.textContent = _0xefd14c_0.title || "\x55\x6e\x74\x69\x74\x6c\x65\x64\x20\x76\x69\x64\x65\x6f";
      const _0xefd14c_8 = document.createElement("\x73\x70\x61\x6e");
      return _0xefd14c_8.textContent = `${_0xefd14c_0.creator || "\x59\x6f\x75\x54\x75\x62\x65"}\x20\xb7\x20${_0xefd14c_d(_0xefd14c_0.viewCount)}`, 
      _0xefd14c_6.append(_0xefd14c_7, _0xefd14c_8), _0xefd14c_1.append(_0xefd14c_2, _0xefd14c_6), 
      _0xefd14c_1;
    }));
  }
  let _0xefd14c_13 = 0, _0xefd14c_14 = null;
  async function _0xefd14c_15(_0xefd14c_0 = "") {
    const _0xefd14c_1 = ++_0xefd14c_13;
    _0xefd14c_14?.abort(), _0xefd14c_14 = new AbortController;
    const {signal: _0xefd14c_2} = _0xefd14c_14;
    _0xefd14c_a(), _0xefd14c_11(), _0xefd14c_7.resultCount.textContent = "\x4c\x6f\x61\x64\x69\x6e\x67\x2e\x2e\x2e", 
    _0xefd14c_7.feedTitle.textContent = _0xefd14c_0 ? `\x52\x65\x73\x75\x6c\x74\x73\x20\x66\x6f\x72\x20\u201c${_0xefd14c_0}\u201d` : "\x44\x69\x73\x63\x6f\x76\x65\x72\x20\x76\x69\x64\x65\x6f\x73", 
    _0xefd14c_7.videoGrid.setAttribute("\x61\x72\x69\x61\x2d\x62\x75\x73\x79", "\x74\x72\x75\x65");
    try {
      const _0xefd14c_3 = _0xefd14c_0 ? `/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6e\x79\x78\x74\x75\x62\x65\x2f\x73\x65\x61\x72\x63\x68\x3f\x71\x3d${encodeURIComponent(_0xefd14c_0)}\x26\x6c\x69\x6d\x69\x74\x3d\x32\x30` : "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6e\x79\x78\x74\x75\x62\x65\x2f\x66\x65\x65\x64\x3f\x6c\x69\x6d\x69\x74\x3d\x32\x30", _0xefd14c_4 = await _0xefd14c_b(_0xefd14c_3, _0xefd14c_2);
      _0xefd14c_1 === _0xefd14c_13 && _0xefd14c_12(_0xefd14c_4?.videos);
    } catch (_0xefd14c_3) {
      if (_0xefd14c_2.aborted || _0xefd14c_1 !== _0xefd14c_13) return;
      _0xefd14c_12([]), _0xefd14c_a(_0xefd14c_3.message || "\x56\x69\x64\x65\x6f\x73\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x62\x65\x20\x6c\x6f\x61\x64\x65\x64\x2e");
    } finally {
      _0xefd14c_1 === _0xefd14c_13 && _0xefd14c_7.videoGrid.setAttribute("\x61\x72\x69\x61\x2d\x62\x75\x73\x79", "\x66\x61\x6c\x73\x65");
    }
  }
  function _0xefd14c_16(_0xefd14c_1) {
    _0xefd14c_0 && "\x73\x68\x6f\x72\x74\x73" === _0xefd14c_1 && (_0xefd14c_1 = "\x68\x6f\x6d\x65"), _0xefd14c_6.view = _0xefd14c_1, 
    document.body.dataset.tubeView = _0xefd14c_1, _0xefd14c_7.shortMenu && (_0xefd14c_7.shortMenu.open = !1), 
    Object.entries(_0xefd14c_5).forEach(([_0xefd14c_0, _0xefd14c_2]) => {
      _0xefd14c_2.hidden = _0xefd14c_0 !== _0xefd14c_1;
    }), _0xefd14c_4("\x5b\x64\x61\x74\x61\x2d\x76\x69\x65\x77\x2d\x62\x75\x74\x74\x6f\x6e\x5d").forEach(_0xefd14c_0 => _0xefd14c_0.classList.toggle("\x61\x63\x74\x69\x76\x65", _0xefd14c_0.dataset.viewButton === ("\x77\x61\x74\x63\x68" === _0xefd14c_1 ? "\x68\x6f\x6d\x65" : _0xefd14c_1))), 
    "\x77\x61\x74\x63\x68" !== _0xefd14c_1 && _0xefd14c_28(), "\x73\x68\x6f\x72\x74\x73" !== _0xefd14c_1 && _0xefd14c_57(), 
    scrollTo({
      top: 0,
      behavior: "\x73\x68\x6f\x72\x74\x73" === _0xefd14c_1 ? "\x69\x6e\x73\x74\x61\x6e\x74" : "\x73\x6d\x6f\x6f\x74\x68"
    });
  }
  const _0xefd14c_17 = window.NyxTubePlayerCore.createDirectYoutubeApi({
    optimisticState: !0
  });
  let _0xefd14c_18;
  function _0xefd14c_19() {
    return window.YT?.Player ? Promise.resolve(window.YT) : _0xefd14c_18 || (_0xefd14c_18 = new Promise(_0xefd14c_0 => {
      const _0xefd14c_1 = window.onYouTubeIframeAPIReady;
      let _0xefd14c_2, _0xefd14c_3 = !1;
      const _0xefd14c_4 = _0xefd14c_1 => {
        _0xefd14c_3 || (_0xefd14c_3 = !0, clearTimeout(_0xefd14c_6), _0xefd14c_0(_0xefd14c_1));
      }, _0xefd14c_5 = () => {
        _0xefd14c_2?.remove(), _0xefd14c_4(_0xefd14c_17);
      }, _0xefd14c_6 = setTimeout(_0xefd14c_5, 5e3);
      window.onYouTubeIframeAPIReady = () => {
        _0xefd14c_1?.(), _0xefd14c_4(window.YT?.Player ? window.YT : _0xefd14c_17);
      }, _0xefd14c_2 = document.createElement("\x73\x63\x72\x69\x70\x74"), _0xefd14c_2.src = "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x79\x6f\x75\x74\x75\x62\x65\x2e\x63\x6f\x6d\x2f\x69\x66\x72\x61\x6d\x65\x5f\x61\x70\x69", 
      _0xefd14c_2.async = !0, _0xefd14c_2.addEventListener("\x65\x72\x72\x6f\x72", _0xefd14c_5, {
        once: !0
      }), document.head.append(_0xefd14c_2);
    }), _0xefd14c_18);
  }
  function _0xefd14c_1a(_0xefd14c_0, _0xefd14c_1 = !1) {
    return {
      width: "\x31\x30\x30\x25",
      height: "\x31\x30\x30\x25",
      videoId: _0xefd14c_0,
      host: "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x79\x6f\x75\x74\x75\x62\x65\x2d\x6e\x6f\x63\x6f\x6f\x6b\x69\x65\x2e\x63\x6f\x6d",
      playerVars: {
        autoplay: 1,
        controls: 0,
        disablekb: 1,
        enablejsapi: 1,
        fs: 0,
        modestbranding: 1,
        playsinline: 1,
        rel: 0,
        origin: location.origin,
        ..._0xefd14c_1 ? {
          mute: 1
        } : {}
      }
    };
  }
  const _0xefd14c_1b = _0xefd14c_0 => _0xefd14c_0 && "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _0xefd14c_0.getPlayerState;
  function _0xefd14c_1c() {
    _0xefd14c_7.watchSettingsMenu.hidden = !0, _0xefd14c_7.watchSettings.setAttribute("\x61\x72\x69\x61\x2d\x65\x78\x70\x61\x6e\x64\x65\x64", "\x66\x61\x6c\x73\x65");
  }
  async function _0xefd14c_1d() {
    const _0xefd14c_0 = String(_0xefd14c_6.watchVideo?.channelId || "").trim();
    if (/^UC[A-Za-z0-9_-]{22}$/.test(_0xefd14c_0)) {
      _0xefd14c_16("\x63\x68\x61\x6e\x6e\x65\x6c"), _0xefd14c_7.channelStatus.textContent = "\x4c\x6f\x61\x64\x69\x6e\x67\x20\x70\x72\x6f\x66\x69\x6c\x65\x2e\x2e\x2e", 
      _0xefd14c_7.channelVideos.replaceChildren();
      try {
        const _0xefd14c_1 = await _0xefd14c_b(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6e\x79\x78\x74\x75\x62\x65\x2f\x63\x68\x61\x6e\x6e\x65\x6c\x3f\x69\x64\x3d${encodeURIComponent(_0xefd14c_0)}`);
        if ("\x63\x68\x61\x6e\x6e\x65\x6c" !== _0xefd14c_6.view || String(_0xefd14c_6.watchVideo?.channelId || "") !== _0xefd14c_0) return;
        const _0xefd14c_3 = _0xefd14c_1?.channel || {};
        _0xefd14c_7.channelTitle.textContent = _0xefd14c_3.title || _0xefd14c_6.watchVideo?.creator || "\x59\x6f\x75\x54\x75\x62\x65\x20\x63\x68\x61\x6e\x6e\x65\x6c", 
        _0xefd14c_7.channelHandle.textContent = _0xefd14c_3.handle || "\x59\x6f\x75\x54\x75\x62\x65", _0xefd14c_7.channelDescription.textContent = _0xefd14c_3.description || "\x54\x68\x69\x73\x20\x63\x72\x65\x61\x74\x6f\x72\x20\x68\x61\x73\x20\x6e\x6f\x74\x20\x73\x68\x61\x72\x65\x64\x20\x61\x20\x63\x68\x61\x6e\x6e\x65\x6c\x20\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6f\x6e\x2e", 
        _0xefd14c_7.channelSubscribers.textContent = _0xefd14c_f(_0xefd14c_3.subscriberCount), 
        _0xefd14c_7.channelVideos.textContent = _0xefd14c_f(_0xefd14c_3.videoCount);
        const _0xefd14c_4 = String(_0xefd14c_3.avatarUrl || _0xefd14c_6.watchVideo?.channelAvatar || "").trim();
        if (_0xefd14c_7.channelAvatar.replaceChildren(), _0xefd14c_4) {
          const _0xefd14c_0 = document.createElement("\x69\x6d\x67");
          _0xefd14c_0.alt = "", _0xefd14c_0.src = _0xefd14c_4, _0xefd14c_0.referrerPolicy = "\x6e\x6f\x2d\x72\x65\x66\x65\x72\x72\x65\x72", 
          _0xefd14c_0.addEventListener("\x65\x72\x72\x6f\x72", () => {
            _0xefd14c_7.channelAvatar.textContent = _0xefd14c_7.channelTitle.textContent.slice(0, 1).toUpperCase();
          }, {
            once: !0
          }), _0xefd14c_7.channelAvatar.append(_0xefd14c_0);
        } else _0xefd14c_7.channelAvatar.textContent = _0xefd14c_7.channelTitle.textContent.slice(0, 1).toUpperCase();
        const _0xefd14c_5 = _0xefd14c_2(_0xefd14c_1?.videos);
        _0xefd14c_7.channelStatus.textContent = _0xefd14c_5.length ? `${_0xefd14c_5.length}\x20\x72\x65\x63\x65\x6e\x74\x20\x76\x69\x64\x65\x6f\x73` : "\x4e\x6f\x20\x70\x75\x62\x6c\x69\x63\x20\x76\x69\x64\x65\x6f\x73\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65", 
        function(_0xefd14c_0) {
          _0xefd14c_0 = _0xefd14c_2(_0xefd14c_0), _0xefd14c_7.channelVideos.replaceChildren(..._0xefd14c_0.map(_0xefd14c_0 => {
            const _0xefd14c_1 = document.createElement("\x61\x72\x74\x69\x63\x6c\x65");
            _0xefd14c_1.className = "\x76\x69\x64\x65\x6f\x2d\x63\x61\x72\x64";
            const _0xefd14c_2 = document.createElement("\x62\x75\x74\x74\x6f\x6e");
            _0xefd14c_2.className = "\x76\x69\x64\x65\x6f\x2d\x63\x6f\x76\x65\x72", _0xefd14c_2.type = "\x62\x75\x74\x74\x6f\x6e", _0xefd14c_2.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", `\x50\x6c\x61\x79\x20${_0xefd14c_0.title || "\x76\x69\x64\x65\x6f"}`);
            const _0xefd14c_3 = document.createElement("\x69\x6d\x67");
            _0xefd14c_3.alt = "", _0xefd14c_3.loading = "\x6c\x61\x7a\x79", _0xefd14c_3.referrerPolicy = "\x6e\x6f\x2d\x72\x65\x66\x65\x72\x72\x65\x72", 
            _0xefd14c_3.src = _0xefd14c_0.thumbnail || "", _0xefd14c_3.addEventListener("\x65\x72\x72\x6f\x72", () => _0xefd14c_3.remove());
            const _0xefd14c_4 = document.createElement("\x73\x70\x61\x6e");
            _0xefd14c_4.className = "\x66\x61\x6c\x6c\x62\x61\x63\x6b", _0xefd14c_4.innerHTML = _0xefd14c_9("\x69\x63\x6f\x6e\x2d\x70\x6c\x61\x79");
            const _0xefd14c_5 = document.createElement("\x73\x70\x61\x6e");
            _0xefd14c_5.className = "\x64\x75\x72\x61\x74\x69\x6f\x6e", _0xefd14c_5.textContent = _0xefd14c_c(_0xefd14c_0.durationSeconds), 
            _0xefd14c_2.append(_0xefd14c_3, _0xefd14c_4, _0xefd14c_5), _0xefd14c_2.addEventListener("\x63\x6c\x69\x63\x6b", () => _0xefd14c_1e(_0xefd14c_0));
            const _0xefd14c_6 = document.createElement("\x64\x69\x76");
            _0xefd14c_6.className = "\x63\x61\x72\x64\x2d\x63\x6f\x70\x79";
            const _0xefd14c_7 = document.createElement("\x73\x74\x72\x6f\x6e\x67");
            _0xefd14c_7.textContent = _0xefd14c_0.title || "\x55\x6e\x74\x69\x74\x6c\x65\x64\x20\x76\x69\x64\x65\x6f";
            const _0xefd14c_8 = document.createElement("\x73\x70\x61\x6e");
            return _0xefd14c_8.textContent = `${_0xefd14c_0.creator || "\x59\x6f\x75\x54\x75\x62\x65"}\x20\xb7\x20${_0xefd14c_d(_0xefd14c_0.viewCount)}`, 
            _0xefd14c_6.append(_0xefd14c_7, _0xefd14c_8), _0xefd14c_1.append(_0xefd14c_2, _0xefd14c_6), 
            _0xefd14c_1;
          }));
        }(_0xefd14c_5);
      } catch (_0xefd14c_1) {
        _0xefd14c_7.channelStatus.textContent = _0xefd14c_1.message || "\x54\x68\x69\x73\x20\x63\x68\x61\x6e\x6e\x65\x6c\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x62\x65\x20\x6c\x6f\x61\x64\x65\x64\x20\x72\x69\x67\x68\x74\x20\x6e\x6f\x77\x2e";
      }
    }
  }
  async function _0xefd14c_1e(_0xefd14c_0, {recoveryMessage: _0xefd14c_2 = ""} = {}) {
    if (!_0xefd14c_0?.id) return;
    if (!_0xefd14c_1(_0xefd14c_0)) return _0xefd14c_16("\x68\x6f\x6d\x65"), void _0xefd14c_a("\x54\x68\x69\x73\x20\x76\x69\x64\x65\x6f\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x20\x69\x6e\x20\x44\x72\x6f\x70\x54\x75\x62\x65\x2e");
    _0xefd14c_6.watchVideo && _0xefd14c_6.watchVideo.id !== _0xefd14c_0.id && _0xefd14c_6.watchTrail.push(_0xefd14c_6.watchVideo), 
    _0xefd14c_6.watchTrail.length > 50 && _0xefd14c_6.watchTrail.shift(), _0xefd14c_28();
    const _0xefd14c_3 = _0xefd14c_6.watchGeneration;
    let _0xefd14c_4 = !1;
    if (_0xefd14c_6.watchVideo = _0xefd14c_0, _0xefd14c_16("\x77\x61\x74\x63\x68"), _0xefd14c_a(_0xefd14c_2), 
    _0xefd14c_0.detailsPending) {
      _0xefd14c_7.watchTitle.textContent = _0xefd14c_0.title || "\x4c\x6f\x61\x64\x69\x6e\x67\x20\x76\x69\x64\x65\x6f", _0xefd14c_7.watchDescription.textContent = "\x4c\x6f\x61\x64\x69\x6e\x67\x20\x76\x69\x64\x65\x6f\x20\x64\x65\x74\x61\x69\x6c\x73\x2e\x2e\x2e", 
      _0xefd14c_7.watchLoading.hidden = !1, _0xefd14c_7.watchLoading.querySelector("\x73\x74\x72\x6f\x6e\x67").textContent = "\x4c\x6f\x61\x64\x69\x6e\x67\x20\x76\x69\x64\x65\x6f\x20\x64\x65\x74\x61\x69\x6c\x73\x2e\x2e\x2e", 
      _0xefd14c_7.watchViews.textContent = _0xefd14c_7.watchLikes.textContent = _0xefd14c_7.watchCommentsCount.textContent = "\x4c\x6f\x61\x64\x69\x6e\x67\x2e\x2e\x2e", 
      _0xefd14c_7.watchComments.replaceChildren(), _0xefd14c_7.watchTranscript.replaceChildren(), 
      _0xefd14c_7.watchRelated.replaceChildren();
      try {
        const _0xefd14c_2 = await _0xefd14c_b(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6e\x79\x78\x74\x75\x62\x65\x2f\x76\x69\x64\x65\x6f\x3f\x69\x64\x3d${encodeURIComponent(_0xefd14c_0.id)}`);
        if ("\x77\x61\x74\x63\x68" !== _0xefd14c_6.view || _0xefd14c_6.watchGeneration !== _0xefd14c_3) return;
        const _0xefd14c_4 = _0xefd14c_2?.videos?.[0];
        if (!_0xefd14c_4 || _0xefd14c_4.id !== _0xefd14c_0.id) throw new Error("\x54\x68\x61\x74\x20\x76\x69\x64\x65\x6f\x20\x69\x73\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x20\x6f\x72\x20\x72\x65\x73\x74\x72\x69\x63\x74\x65\x64\x2e");
        if (!_0xefd14c_1(_0xefd14c_4)) return _0xefd14c_16("\x68\x6f\x6d\x65"), void _0xefd14c_a("\x54\x68\x69\x73\x20\x76\x69\x64\x65\x6f\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x20\x69\x6e\x20\x44\x72\x6f\x70\x54\x75\x62\x65\x2e");
        _0xefd14c_0 = _0xefd14c_4, _0xefd14c_6.catalog = _0xefd14c_6.catalog.map(_0xefd14c_0 => _0xefd14c_0.id === _0xefd14c_4.id ? _0xefd14c_4 : _0xefd14c_0);
      } catch (_0xefd14c_5) {
        if ("\x77\x61\x74\x63\x68" !== _0xefd14c_6.view || _0xefd14c_6.watchGeneration !== _0xefd14c_3) return;
        if (!_0xefd14c_6.invidiousEmbedOrigin || !(_0xefd14c_5.status >= 500 || _0xefd14c_5 instanceof TypeError)) return _0xefd14c_7.watchLoading.hidden = !0, 
        void _0xefd14c_a(_0xefd14c_5.message || "\x56\x69\x64\x65\x6f\x20\x64\x65\x74\x61\x69\x6c\x73\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x62\x65\x20\x6c\x6f\x61\x64\x65\x64\x2e");
        _0xefd14c_4 = !0, _0xefd14c_2 = "\x56\x69\x64\x65\x6f\x20\x64\x65\x74\x61\x69\x6c\x73\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x6c\x6f\x61\x64\x2e\x20\x4f\x70\x65\x6e\x69\x6e\x67\x20\x74\x68\x65\x20\x49\x6e\x76\x69\x64\x69\x6f\x75\x73\x20\x70\x6c\x61\x79\x65\x72\x2e";
      }
    }
    _0xefd14c_2d({
      cancel: !0
    }), clearTimeout(_0xefd14c_6.watchRecoveryTimer), _0xefd14c_6.watchRecoveryTimer = 0, 
    _0xefd14c_6.watchVideo = _0xefd14c_0, _0xefd14c_16("\x77\x61\x74\x63\x68"), _0xefd14c_a(_0xefd14c_2), 
    _0xefd14c_1c(), _0xefd14c_7.watchTitle.textContent = _0xefd14c_0.title || "\x55\x6e\x74\x69\x74\x6c\x65\x64\x20\x76\x69\x64\x65\x6f", 
    function(_0xefd14c_0) {
      const _0xefd14c_1 = String(_0xefd14c_0?.creator || "\x59\x6f\x75\x54\x75\x62\x65").trim() || "\x59\x6f\x75\x54\x75\x62\x65", _0xefd14c_2 = function(_0xefd14c_0 = _0xefd14c_6.watchVideo) {
        const _0xefd14c_1 = String(_0xefd14c_0?.channelId || "").trim();
        return /^UC[A-Za-z0-9_-]{22}$/.test(_0xefd14c_1) ? `\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x79\x6f\x75\x74\x75\x62\x65\x2e\x63\x6f\x6d\x2f\x63\x68\x61\x6e\x6e\x65\x6c\x2f${_0xefd14c_1}` : "";
      }(_0xefd14c_0);
      _0xefd14c_7.watchCreator.textContent = _0xefd14c_1, _0xefd14c_7.watchVideoMeta.textContent = [ _0xefd14c_d(_0xefd14c_0?.viewCount), _0xefd14c_e(_0xefd14c_0?.publishedAt) ].filter(Boolean).join("\x20\xb7\x20"), 
      _0xefd14c_7.watchCreator.disabled = !_0xefd14c_2, _0xefd14c_7.watchChannelMark.disabled = !_0xefd14c_2, 
      _0xefd14c_7.watchCreator.title = _0xefd14c_2 ? `\x4f\x70\x65\x6e\x20${_0xefd14c_1}\x27\x73\x20\x63\x68\x61\x6e\x6e\x65\x6c` : "\x43\x68\x61\x6e\x6e\x65\x6c\x20\x70\x61\x67\x65\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65", 
      _0xefd14c_7.watchChannelMark.title = _0xefd14c_7.watchCreator.title, _0xefd14c_7.watchCreator.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", _0xefd14c_7.watchCreator.title), 
      _0xefd14c_7.watchChannelMark.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", _0xefd14c_7.watchCreator.title);
      const _0xefd14c_3 = () => {
        _0xefd14c_7.watchChannelMark.replaceChildren(), _0xefd14c_7.watchChannelMark.textContent = _0xefd14c_1.slice(0, 1).toUpperCase() || "\x59";
      }, _0xefd14c_4 = String(_0xefd14c_0?.channelAvatar || "").trim();
      if (!_0xefd14c_4) return void _0xefd14c_3();
      const _0xefd14c_5 = document.createElement("\x69\x6d\x67");
      _0xefd14c_5.alt = "", _0xefd14c_5.loading = "\x65\x61\x67\x65\x72", _0xefd14c_5.referrerPolicy = "\x6e\x6f\x2d\x72\x65\x66\x65\x72\x72\x65\x72", 
      _0xefd14c_5.src = _0xefd14c_4, _0xefd14c_5.addEventListener("\x65\x72\x72\x6f\x72", _0xefd14c_3, {
        once: !0
      }), _0xefd14c_7.watchChannelMark.replaceChildren(_0xefd14c_5);
    }(_0xefd14c_0), _0xefd14c_7.watchDescription.textContent = String(_0xefd14c_0.description || "\x4e\x6f\x20\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6f\x6e\x20\x77\x61\x73\x20\x70\x72\x6f\x76\x69\x64\x65\x64\x20\x66\x6f\x72\x20\x74\x68\x69\x73\x20\x76\x69\x64\x65\x6f\x2e"), 
    _0xefd14c_7.watchViews.textContent = _0xefd14c_f(_0xefd14c_0.viewCount), _0xefd14c_7.watchLikes.textContent = _0xefd14c_f(_0xefd14c_0.likeCount), 
    _0xefd14c_7.watchCommentsCount.textContent = _0xefd14c_f(_0xefd14c_0.commentCount), 
    _0xefd14c_7.watchTabCommentsCount.textContent = _0xefd14c_0.commentCount ? `\x28${_0xefd14c_f(_0xefd14c_0.commentCount)}\x29` : "", 
    _0xefd14c_22("\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6f\x6e"), _0xefd14c_7.watchComments.replaceChildren(), _0xefd14c_7.watchCommentsStatus.hidden = !1, 
    _0xefd14c_7.watchCommentsStatus.textContent = "\x4c\x6f\x61\x64\x69\x6e\x67\x20\x63\x6f\x6d\x6d\x65\x6e\x74\x73\x2e\x2e\x2e", _0xefd14c_7.watchTranscript.replaceChildren(), 
    _0xefd14c_7.watchTranscriptStatus.hidden = !1, _0xefd14c_7.watchTranscriptStatus.textContent = "\x4c\x6f\x61\x64\x69\x6e\x67\x20\x74\x72\x61\x6e\x73\x63\x72\x69\x70\x74\x2e\x2e\x2e", 
    async function(_0xefd14c_0) {
      const _0xefd14c_1 = ++_0xefd14c_6.watchCommunityRequestId;
      try {
        const _0xefd14c_2 = await _0xefd14c_b(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6e\x79\x78\x74\x75\x62\x65\x2f\x63\x6f\x6d\x6d\x75\x6e\x69\x74\x79\x3f\x69\x64\x3d${encodeURIComponent(_0xefd14c_0.id)}`);
        if (_0xefd14c_1 !== _0xefd14c_6.watchCommunityRequestId || "\x77\x61\x74\x63\x68" !== _0xefd14c_6.view || _0xefd14c_6.watchVideo?.id !== _0xefd14c_0.id) return;
        _0xefd14c_23(_0xefd14c_2.comments), _0xefd14c_24(_0xefd14c_2.transcript);
      } catch (_0xefd14c_5) {
        if (_0xefd14c_1 !== _0xefd14c_6.watchCommunityRequestId || "\x77\x61\x74\x63\x68" !== _0xefd14c_6.view || _0xefd14c_6.watchVideo?.id !== _0xefd14c_0.id) return;
        _0xefd14c_23({
          available: !1,
          message: _0xefd14c_5.message || "\x43\x6f\x6d\x6d\x65\x6e\x74\x73\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x62\x65\x20\x6c\x6f\x61\x64\x65\x64\x20\x72\x69\x67\x68\x74\x20\x6e\x6f\x77\x2e"
        }), _0xefd14c_24({
          available: !1,
          message: "\x54\x68\x65\x20\x70\x75\x62\x6c\x69\x63\x20\x74\x72\x61\x6e\x73\x63\x72\x69\x70\x74\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x62\x65\x20\x6c\x6f\x61\x64\x65\x64\x20\x72\x69\x67\x68\x74\x20\x6e\x6f\x77\x2e"
        });
      }
    }(_0xefd14c_0), function(_0xefd14c_0) {
      const _0xefd14c_1 = _0xefd14c_21(_0xefd14c_0);
      if (!_0xefd14c_1.length) {
        const _0xefd14c_0 = document.createElement("\x70");
        return _0xefd14c_0.className = "\x72\x65\x6c\x61\x74\x65\x64\x2d\x65\x6d\x70\x74\x79", _0xefd14c_0.textContent = "\x4d\x6f\x72\x65\x20\x76\x69\x64\x65\x6f\x73\x20\x77\x69\x6c\x6c\x20\x61\x70\x70\x65\x61\x72\x20\x68\x65\x72\x65\x20\x61\x73\x20\x79\x6f\x75\x20\x62\x72\x6f\x77\x73\x65\x2e", 
        void _0xefd14c_7.watchRelated.replaceChildren(_0xefd14c_0);
      }
      _0xefd14c_7.watchRelated.replaceChildren(..._0xefd14c_1.map(_0xefd14c_0 => {
        const _0xefd14c_1 = document.createElement("\x62\x75\x74\x74\x6f\x6e");
        _0xefd14c_1.type = "\x62\x75\x74\x74\x6f\x6e", _0xefd14c_1.className = "\x72\x65\x6c\x61\x74\x65\x64\x2d\x63\x61\x72\x64";
        const _0xefd14c_2 = document.createElement("\x69\x6d\x67");
        _0xefd14c_2.alt = "", _0xefd14c_2.loading = "\x6c\x61\x7a\x79", _0xefd14c_2.referrerPolicy = "\x6e\x6f\x2d\x72\x65\x66\x65\x72\x72\x65\x72", 
        _0xefd14c_2.src = _0xefd14c_0.thumbnail || "", _0xefd14c_2.addEventListener("\x65\x72\x72\x6f\x72", () => _0xefd14c_2.remove());
        const _0xefd14c_3 = document.createElement("\x73\x70\x61\x6e");
        _0xefd14c_3.className = "\x72\x65\x6c\x61\x74\x65\x64\x2d\x64\x75\x72\x61\x74\x69\x6f\x6e", _0xefd14c_3.textContent = _0xefd14c_c(_0xefd14c_0.durationSeconds);
        const _0xefd14c_4 = document.createElement("\x73\x70\x61\x6e");
        _0xefd14c_4.className = "\x72\x65\x6c\x61\x74\x65\x64\x2d\x74\x68\x75\x6d\x62", _0xefd14c_4.append(_0xefd14c_2, _0xefd14c_3);
        const _0xefd14c_5 = document.createElement("\x73\x70\x61\x6e");
        _0xefd14c_5.className = "\x72\x65\x6c\x61\x74\x65\x64\x2d\x63\x6f\x70\x79";
        const _0xefd14c_6 = document.createElement("\x73\x74\x72\x6f\x6e\x67");
        _0xefd14c_6.textContent = _0xefd14c_0.title || "\x55\x6e\x74\x69\x74\x6c\x65\x64\x20\x76\x69\x64\x65\x6f";
        const _0xefd14c_7 = document.createElement("\x73\x6d\x61\x6c\x6c");
        return _0xefd14c_7.textContent = `${_0xefd14c_0.creator || "\x59\x6f\x75\x54\x75\x62\x65"}\x20\xb7\x20${_0xefd14c_d(_0xefd14c_0.viewCount)}`, 
        _0xefd14c_5.append(_0xefd14c_6, _0xefd14c_7), _0xefd14c_1.append(_0xefd14c_4, _0xefd14c_5), 
        _0xefd14c_1.addEventListener("\x63\x6c\x69\x63\x6b", () => _0xefd14c_1e(_0xefd14c_0)), _0xefd14c_1;
      }));
    }(_0xefd14c_0), _0xefd14c_7.watchSource.href = _0xefd14c_0.sourceUrl || `\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x79\x6f\x75\x74\x75\x62\x65\x2e\x63\x6f\x6d\x2f\x77\x61\x74\x63\x68\x3f\x76\x3d${encodeURIComponent(_0xefd14c_0.id)}`, 
    _0xefd14c_6.watchCaptions = !1, _0xefd14c_7.watchCaptions.setAttribute("\x61\x72\x69\x61\x2d\x70\x72\x65\x73\x73\x65\x64", "\x66\x61\x6c\x73\x65"), 
    _0xefd14c_7.watchCaptionOption.querySelector("\x73\x70\x61\x6e").textContent = "\x4f\x66\x66", _0xefd14c_7.watchLoading.hidden = !1, 
    _0xefd14c_7.watchCenterPlay.hidden = !0, _0xefd14c_7.watchProgress.value = "\x30", 
    _0xefd14c_7.watchTime.textContent = `\x30\x3a\x30\x30\x20\x2f\x20${_0xefd14c_c(_0xefd14c_0.durationSeconds)}`, 
    _0xefd14c_20(_0xefd14c_0, !1, !1, null, _0xefd14c_4 ? "\x69\x6e\x76\x69\x64\x69\x6f\x75\x73" : "").catch(_0xefd14c_0 => {
      _0xefd14c_7.watchLoading.hidden = !0, _0xefd14c_a(_0xefd14c_0.message || "\x54\x68\x65\x20\x76\x69\x64\x65\x6f\x20\x70\x6c\x61\x79\x65\x72\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x62\x65\x20\x73\x74\x61\x72\x74\x65\x64\x2e");
    });
  }
  function _0xefd14c_1f(_0xefd14c_1, _0xefd14c_2 = !1) {
    _0xefd14c_7.watchEngine.value = _0xefd14c_2 ? "\x69\x6e\x76\x69\x64\x69\x6f\x75\x73" : _0xefd14c_1 ? "\x6e\x61\x74\x69\x76\x65" : "\x79\x6f\x75\x74\x75\x62\x65", 
    _0xefd14c_7.watchEngine.hidden = !_0xefd14c_6.nativeAvailable && !_0xefd14c_2, _0xefd14c_7.watchBackup.setAttribute("\x61\x72\x69\x61\x2d\x70\x72\x65\x73\x73\x65\x64", String(_0xefd14c_2)), 
    _0xefd14c_7.watchEngine.textContent = _0xefd14c_1 ? "\x53\x77\x69\x74\x63\x68\x20\x74\x6f\x20\x65\x6d\x62\x65\x64\x64\x65\x64" : _0xefd14c_6.nativeAvailable ? _0xefd14c_0 ? "\x53\x77\x69\x74\x63\x68\x20\x74\x6f\x20\x44\x72\x6f\x70\x54\x75\x62\x65" : "\x53\x77\x69\x74\x63\x68\x20\x74\x6f\x20\x4e\x79\x78\x54\x75\x62\x65" : "\x53\x77\x69\x74\x63\x68\x20\x74\x6f\x20\x59\x6f\x75\x54\x75\x62\x65";
  }
  async function _0xefd14c_20(_0xefd14c_0, _0xefd14c_1 = !1, _0xefd14c_2 = !1, _0xefd14c_4 = null, _0xefd14c_5 = "", _0xefd14c_8 = !1) {
    _0xefd14c_2d({
      cancel: !0
    });
    const _0xefd14c_b = ++_0xefd14c_6.watchGeneration, _0xefd14c_d = Boolean(_0xefd14c_6.invidiousEmbedOrigin && !_0xefd14c_1 && ("\x69\x6e\x76\x69\x64\x69\x6f\x75\x73" === _0xefd14c_5 || !_0xefd14c_2 && "\x69\x6e\x76\x69\x64\x69\x6f\x75\x73" === _0xefd14c_6.preferredPlayer)), _0xefd14c_e = !_0xefd14c_d && _0xefd14c_6.nativeAvailable && "\x6e\x61\x74\x69\x76\x65" === _0xefd14c_6.preferredPlayer && !_0xefd14c_1 && !_0xefd14c_2;
    if (_0xefd14c_1f(_0xefd14c_e, _0xefd14c_d), clearInterval(_0xefd14c_6.watchTimer), 
    _0xefd14c_6.watchTimer = 0, _0xefd14c_7.watchStage.classList.toggle("\x69\x6e\x76\x69\x64\x69\x6f\x75\x73\x2d\x70\x6c\x61\x79\x65\x72", _0xefd14c_d), 
    _0xefd14c_7.watchQuality.closest("\x6c\x61\x62\x65\x6c").hidden = _0xefd14c_d, _0xefd14c_7.watchCaptionOption.hidden = _0xefd14c_d, 
    _0xefd14c_3("\x5b\x64\x61\x74\x61\x2d\x73\x68\x6f\x72\x74\x63\x75\x74\x2d\x68\x65\x6c\x70\x2d\x6f\x70\x65\x6e\x5d").hidden = _0xefd14c_d, _0xefd14c_6.watchPlayer?.destroy?.(), 
    _0xefd14c_6.watchPlayer = null, _0xefd14c_7.watchLoading.hidden = !1, _0xefd14c_7.watchLoading.querySelector("\x73\x74\x72\x6f\x6e\x67").textContent = _0xefd14c_e ? "\x50\x72\x65\x70\x61\x72\x69\x6e\x67\x20\x76\x69\x64\x65\x6f\x2e\x2e\x2e" : "\x4c\x6f\x61\x64\x69\x6e\x67\x20\x76\x69\x64\x65\x6f", 
    _0xefd14c_7.watchQuality.disabled = !0, _0xefd14c_d) {
      if (!/^[A-Za-z0-9_-]{11}$/.test(_0xefd14c_0.id)) throw new Error("\x43\x68\x6f\x6f\x73\x65\x20\x61\x20\x76\x61\x6c\x69\x64\x20\x76\x69\x64\x65\x6f\x2e");
      if (window.NyxInvidiousPlayer && !_0xefd14c_8) return _0xefd14c_6.watchPlayer = window.NyxInvidiousPlayer(_0xefd14c_7.watchPlayer, {
        id: _0xefd14c_0.id,
        restore: _0xefd14c_4 || {},
        onLoading: _0xefd14c_0 => {
          _0xefd14c_b === _0xefd14c_6.watchGeneration && (_0xefd14c_7.watchLoading.hidden = !_0xefd14c_0);
        },
        onFailure: _0xefd14c_1 => {
          _0xefd14c_b === _0xefd14c_6.watchGeneration && "\x77\x61\x74\x63\x68" === _0xefd14c_6.view && _0xefd14c_20(_0xefd14c_0, !1, !0, _0xefd14c_1, "\x69\x6e\x76\x69\x64\x69\x6f\x75\x73", !0);
        }
      }), void (_0xefd14c_7.watchCenterPlay.hidden = !0);
      const _0xefd14c_1 = new URL("\x2f\x65\x6d\x62\x65\x64\x2f" + _0xefd14c_0.id, _0xefd14c_6.invidiousEmbedOrigin), _0xefd14c_2 = {
        local: "\x74\x72\x75\x65",
        autoplay: _0xefd14c_4?.paused ? "\x30" : "\x31",
        quality: "\x64\x61\x73\x68",
        controls: "\x31",
        continue: "\x30",
        hl: "\x65\x6e\x2d\x55\x53",
        start: String(Math.max(0, Number(_0xefd14c_4?.time) || 0)),
        volume: String(_0xefd14c_4?.muted ? 0 : Math.max(0, Math.min(100, Number(_0xefd14c_4?.volume ?? 100)))),
        speed: String(Math.max(.25, Math.min(2, Number(_0xefd14c_4?.rate) || 1)))
      };
      for (const [_0xefd14c_0, _0xefd14c_4] of Object.entries(_0xefd14c_2)) _0xefd14c_1.searchParams.set(_0xefd14c_0, _0xefd14c_4);
      const _0xefd14c_3 = document.createElement("\x69\x66\x72\x61\x6d\x65");
      return _0xefd14c_3.title = "\x49\x6e\x76\x69\x64\x69\x6f\x75\x73\x20\x76\x69\x64\x65\x6f\x20\x70\x6c\x61\x79\x65\x72", _0xefd14c_3.src = _0xefd14c_1.href, 
      _0xefd14c_3.allow = "\x61\x75\x74\x6f\x70\x6c\x61\x79\x3b\x20\x66\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e\x3b\x20\x70\x69\x63\x74\x75\x72\x65\x2d\x69\x6e\x2d\x70\x69\x63\x74\x75\x72\x65", _0xefd14c_3.allowFullscreen = !0, 
      _0xefd14c_3.referrerPolicy = "\x73\x74\x72\x69\x63\x74\x2d\x6f\x72\x69\x67\x69\x6e\x2d\x77\x68\x65\x6e\x2d\x63\x72\x6f\x73\x73\x2d\x6f\x72\x69\x67\x69\x6e", _0xefd14c_3.addEventListener("\x6c\x6f\x61\x64", () => {
        _0xefd14c_b === _0xefd14c_6.watchGeneration && (_0xefd14c_7.watchLoading.hidden = !0);
      }, {
        once: !0
      }), _0xefd14c_6.watchPlayer = {
        isInvidious: !0,
        destroy: () => _0xefd14c_3.remove()
      }, _0xefd14c_7.watchPlayer.replaceChildren(_0xefd14c_3), void (_0xefd14c_7.watchCenterPlay.hidden = !0);
    }
    const _0xefd14c_f = _0xefd14c_e ? window.NyxNativePlayer : _0xefd14c_1 ? _0xefd14c_17 : await _0xefd14c_19();
    if (_0xefd14c_b !== _0xefd14c_6.watchGeneration) return;
    if ("\x77\x61\x74\x63\x68" !== _0xefd14c_6.view || _0xefd14c_6.watchVideo?.id !== _0xefd14c_0.id) return;
    _0xefd14c_6.watchPlayer?.destroy?.();
    const _0xefd14c_10 = _0xefd14c_1a(_0xefd14c_0.id);
    _0xefd14c_10.expectedDuration = _0xefd14c_0.durationSeconds, _0xefd14c_10.quality = _0xefd14c_4?.quality, 
    _0xefd14c_10.startTime = _0xefd14c_4?.time, _0xefd14c_10.events = {
      onCaptionError: _0xefd14c_0 => {
        _0xefd14c_b === _0xefd14c_6.watchGeneration && (_0xefd14c_6.watchCaptions = !1, 
        _0xefd14c_2e(_0xefd14c_0.target, !1, _0xefd14c_7.watchCaptions, _0xefd14c_7.watchCaptionOption), 
        _0xefd14c_7.watchSettingsCaptions.value = "\x6f\x66\x66", _0xefd14c_a(_0xefd14c_0.message));
      },
      onBuffering: _0xefd14c_0 => {
        _0xefd14c_b === _0xefd14c_6.watchGeneration && (_0xefd14c_7.watchLoading.hidden = !_0xefd14c_0.data, 
        _0xefd14c_0.data ? (_0xefd14c_7.watchLoading.querySelector("\x73\x74\x72\x6f\x6e\x67").textContent = "\x4c\x6f\x61\x64\x69\x6e\x67\x20\x76\x69\x64\x65\x6f\x20\x63\x68\x75\x6e\x6b\x73\x2e\x2e\x2e", 
        _0xefd14c_7.watchCenterPlay.hidden = !0) : _0xefd14c_7.watchCenterPlay.hidden = 2 !== _0xefd14c_0.target.getPlayerState());
      },
      onReady: _0xefd14c_1 => {
        _0xefd14c_b === _0xefd14c_6.watchGeneration && (_0xefd14c_7.watchLoading.hidden = !_0xefd14c_1.target.isNative || _0xefd14c_1.target.video.readyState >= 3, 
        _0xefd14c_4 && (_0xefd14c_1.target.seekTo(_0xefd14c_4.time), _0xefd14c_1.target.setVolume?.(_0xefd14c_4.volume), 
        _0xefd14c_1.target.setPlaybackRate?.(_0xefd14c_4.rate), _0xefd14c_4.muted && _0xefd14c_1.target.mute()), 
        function(_0xefd14c_0, _0xefd14c_1) {
          let _0xefd14c_2 = [];
          try {
            _0xefd14c_2 = _0xefd14c_0.getAvailablePlaybackRates?.() || [];
          } catch {
            _0xefd14c_2 = [];
          }
          _0xefd14c_2 = [ ...new Set(_0xefd14c_2.map(Number).filter(_0xefd14c_0 => Number.isFinite(_0xefd14c_0) && _0xefd14c_0 > 0)) ].sort((_0xefd14c_0, _0xefd14c_1) => _0xefd14c_0 - _0xefd14c_1), 
          _0xefd14c_2.length || (_0xefd14c_2 = [ 1 ]), _0xefd14c_7.watchSpeed.replaceChildren(..._0xefd14c_2.map(_0xefd14c_0 => {
            const _0xefd14c_1 = document.createElement("\x6f\x70\x74\x69\x6f\x6e");
            return _0xefd14c_1.value = String(_0xefd14c_0), _0xefd14c_1.textContent = 1 === _0xefd14c_0 ? "\x4e\x6f\x72\x6d\x61\x6c" : `${_0xefd14c_0}\x78`, 
            _0xefd14c_1;
          }));
          let _0xefd14c_4 = 1;
          try {
            _0xefd14c_4 = Number(_0xefd14c_0.getPlaybackRate?.()) || 1;
          } catch {
            _0xefd14c_4 = 1;
          }
          _0xefd14c_7.watchSpeed.value = _0xefd14c_2.includes(_0xefd14c_4) ? String(_0xefd14c_4) : String(_0xefd14c_2.includes(1) ? 1 : _0xefd14c_2[0]);
          try {
            _0xefd14c_7.watchVolume.value = String(Math.max(0, Math.min(100, Number(_0xefd14c_0.getVolume?.() ?? 100))));
          } catch {
            _0xefd14c_7.watchVolume.value = "\x31\x30\x30";
          }
          _0xefd14c_7.watchSettingsCaptions.disabled = !_0xefd14c_1?.captions, _0xefd14c_7.watchCaptions.disabled = !_0xefd14c_1?.captions, 
          _0xefd14c_7.watchCaptionOption.disabled = !_0xefd14c_1?.captions, _0xefd14c_7.watchQuality.replaceChildren(...(_0xefd14c_0.isNative ? _0xefd14c_0.qualities : [ "\x61\x75\x74\x6f" ]).map(_0xefd14c_0 => {
            const _0xefd14c_1 = document.createElement("\x6f\x70\x74\x69\x6f\x6e");
            return _0xefd14c_1.value = _0xefd14c_0, _0xefd14c_1.textContent = "\x61\x75\x74\x6f" === _0xefd14c_0 ? "\x41\x75\x74\x6f" : `${_0xefd14c_0}\x70`, 
            _0xefd14c_1;
          })), _0xefd14c_7.watchQuality.disabled = !_0xefd14c_0.isNative, _0xefd14c_7.watchQuality.value = _0xefd14c_0.isNative ? String(_0xefd14c_0.quality) : "\x61\x75\x74\x6f", 
          _0xefd14c_7.watchQuality.title = _0xefd14c_0.isNative ? "\x50\x6c\x61\x79\x62\x61\x63\x6b\x20\x71\x75\x61\x6c\x69\x74\x79" : "\x59\x6f\x75\x54\x75\x62\x65\x20\x73\x65\x6c\x65\x63\x74\x73\x20\x70\x6c\x61\x79\x62\x61\x63\x6b\x20\x71\x75\x61\x6c\x69\x74\x79\x20\x61\x75\x74\x6f\x6d\x61\x74\x69\x63\x61\x6c\x6c\x79", 
          _0xefd14c_1f(_0xefd14c_0.isNative), _0xefd14c_3("\x5b\x64\x61\x74\x61\x2d\x77\x61\x74\x63\x68\x2d\x73\x65\x74\x74\x69\x6e\x67\x73\x2d\x71\x75\x61\x6c\x69\x74\x79\x5d").textContent = _0xefd14c_0.isNative ? `${_0xefd14c_0.quality}\x70` : "\x41\x75\x74\x6f", 
          _0xefd14c_7.watchSettingsCaptions.title = _0xefd14c_1?.captions ? "" : "\x43\x61\x70\x74\x69\x6f\x6e\x73\x20\x61\x72\x65\x20\x6e\x6f\x74\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x20\x66\x6f\x72\x20\x74\x68\x69\x73\x20\x76\x69\x64\x65\x6f", 
          _0xefd14c_7.watchSettingsCaptions.value = _0xefd14c_6.watchCaptions && _0xefd14c_1?.captions ? "\x6f\x6e" : "\x6f\x66\x66";
        }(_0xefd14c_1.target, _0xefd14c_0), _0xefd14c_6.watchCaptions && _0xefd14c_0.captions && _0xefd14c_2e(_0xefd14c_1.target, !0, _0xefd14c_7.watchCaptions, _0xefd14c_7.watchCaptionOption), 
        _0xefd14c_4?.paused ? (_0xefd14c_1.target.pauseVideo(), _0xefd14c_7.watchCenterPlay.hidden = !1) : _0xefd14c_1.target.playVideo(), 
        _0xefd14c_27(), clearInterval(_0xefd14c_6.watchTimer), _0xefd14c_6.watchTimer = setInterval(() => {
          if (!_0xefd14c_1b(_0xefd14c_6.watchPlayer)) return;
          const _0xefd14c_0 = _0xefd14c_7.watchStage.contains(document.activeElement) && document.activeElement !== _0xefd14c_7.watchStage && document.activeElement?.matches("\x3a\x66\x6f\x63\x75\x73\x2d\x76\x69\x73\x69\x62\x6c\x65");
          1 !== _0xefd14c_6.watchPlayer.getPlayerState() || _0xefd14c_6.watchPlayer.buffering || !_0xefd14c_7.watchLoading.hidden || !_0xefd14c_7.watchSettingsMenu.hidden || _0xefd14c_0 || _0xefd14c_7.watchStage.querySelector("\x2e\x77\x61\x74\x63\x68\x2d\x63\x6f\x6e\x74\x72\x6f\x6c\x73\x20\x3a\x61\x63\x74\x69\x76\x65") || _0xefd14c_6.watchSpacePressed ? _0xefd14c_27() : _0xefd14c_7.watchStage.classList.toggle("\x63\x6f\x6e\x74\x72\x6f\x6c\x73\x2d\x69\x64\x6c\x65", Date.now() - _0xefd14c_26 >= 3e3);
          const _0xefd14c_1 = Number(_0xefd14c_6.watchPlayer.getCurrentTime?.()) || 0, _0xefd14c_2 = Number(_0xefd14c_6.watchPlayer.getDuration?.()) || Number(_0xefd14c_6.watchVideo?.durationSeconds) || 0;
          _0xefd14c_7.watchTime.textContent = `${_0xefd14c_c(_0xefd14c_1)}\x20\x2f\x20${_0xefd14c_c(_0xefd14c_2)}`, 
          _0xefd14c_7.watchProgress.value = _0xefd14c_2 ? String(Math.round(_0xefd14c_1 / _0xefd14c_2 * 1e3)) : "\x30";
        }, 250));
      },
      onStateChange: _0xefd14c_0 => {
        if (_0xefd14c_b !== _0xefd14c_6.watchGeneration) return;
        const _0xefd14c_1 = _0xefd14c_0.data === _0xefd14c_f.PlayerState.PLAYING, _0xefd14c_2 = _0xefd14c_0.data === _0xefd14c_f.PlayerState.PAUSED;
        _0xefd14c_1 && (_0xefd14c_7.watchLoading.hidden = !0), function(_0xefd14c_0, _0xefd14c_1) {
          _0xefd14c_0.innerHTML = _0xefd14c_9(_0xefd14c_1 ? "\x69\x63\x6f\x6e\x2d\x70\x61\x75\x73\x65" : "\x69\x63\x6f\x6e\x2d\x70\x6c\x61\x79"), _0xefd14c_0.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", _0xefd14c_1 ? "\x50\x61\x75\x73\x65" : "\x50\x6c\x61\x79");
        }(_0xefd14c_7.watchToggle, _0xefd14c_1), _0xefd14c_7.watchCenterPlay.hidden = !_0xefd14c_2 || Boolean(_0xefd14c_0.target.buffering);
      },
      onError: _0xefd14c_1 => {
        _0xefd14c_b === _0xefd14c_6.watchGeneration && "\x77\x61\x74\x63\x68" === _0xefd14c_6.view && (_0xefd14c_e ? (_0xefd14c_a(_0xefd14c_6.invidiousEmbedOrigin ? "\x4f\x70\x65\x6e\x69\x6e\x67\x20\x74\x68\x65\x20\x49\x6e\x76\x69\x64\x69\x6f\x75\x73\x20\x70\x6c\x61\x79\x65\x72\x2e\x20\x55\x73\x65\x20\x74\x68\x65\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x73\x20\x69\x6e\x73\x69\x64\x65\x20\x74\x68\x65\x20\x76\x69\x64\x65\x6f\x2e" : "\x4e\x61\x74\x69\x76\x65\x20\x70\x6c\x61\x79\x62\x61\x63\x6b\x20\x69\x73\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x2e\x20\x4f\x70\x65\x6e\x69\x6e\x67\x20\x74\x68\x65\x20\x59\x6f\x75\x54\x75\x62\x65\x20\x70\x6c\x61\x79\x65\x72\x2e"), 
        _0xefd14c_20(_0xefd14c_0, !1, !0, {
          time: _0xefd14c_1.target.getCurrentTime() || _0xefd14c_4?.time || 0,
          volume: _0xefd14c_1.target.getVolume(),
          rate: _0xefd14c_1.target.getPlaybackRate(),
          muted: _0xefd14c_1.target.isMuted(),
          paused: _0xefd14c_1.target.getCurrentTime() > 0 ? _0xefd14c_1.target.video.paused : _0xefd14c_4?.paused ?? !1
        }, _0xefd14c_6.invidiousEmbedOrigin ? "\x69\x6e\x76\x69\x64\x69\x6f\x75\x73" : "").catch(() => _0xefd14c_a("\x54\x68\x65\x20\x76\x69\x64\x65\x6f\x20\x70\x6c\x61\x79\x65\x72\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x73\x74\x61\x72\x74\x2e"))) : function(_0xefd14c_0, _0xefd14c_1, _0xefd14c_2) {
          if ("\x77\x61\x74\x63\x68" !== _0xefd14c_6.view || _0xefd14c_6.watchVideo?.id !== _0xefd14c_0.id) return;
          if (_0xefd14c_2d({
            cancel: !0
          }), _0xefd14c_7.watchLoading.hidden = !0, _0xefd14c_6.invidiousEmbedOrigin && (5 === _0xefd14c_1 || 153 === _0xefd14c_1)) return _0xefd14c_a("\x4f\x70\x65\x6e\x69\x6e\x67\x20\x74\x68\x65\x20\x49\x6e\x76\x69\x64\x69\x6f\x75\x73\x20\x70\x6c\x61\x79\x65\x72\x2e\x20\x55\x73\x65\x20\x74\x68\x65\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x73\x20\x69\x6e\x73\x69\x64\x65\x20\x74\x68\x65\x20\x76\x69\x64\x65\x6f\x2e"), 
          void _0xefd14c_20(_0xefd14c_0, !1, !0, null, "\x69\x6e\x76\x69\x64\x69\x6f\x75\x73").catch(_0xefd14c_0 => _0xefd14c_a(_0xefd14c_0.message));
          if (!_0xefd14c_2 && (5 === _0xefd14c_1 || 153 === _0xefd14c_1)) return _0xefd14c_a("\x52\x65\x74\x72\x79\x69\x6e\x67\x20\x74\x68\x69\x73\x20\x76\x69\x64\x65\x6f\x20\x77\x69\x74\x68\x20\x74\x68\x65\x20\x43\x68\x72\x6f\x6d\x65\x62\x6f\x6f\x6b\x2d\x63\x6f\x6d\x70\x61\x74\x69\x62\x6c\x65\x20\x70\x6c\x61\x79\x65\x72\x2e\x2e\x2e"), 
          void _0xefd14c_20(_0xefd14c_0, !0).catch(_0xefd14c_0 => _0xefd14c_a(_0xefd14c_0.message || "\x54\x68\x65\x20\x76\x69\x64\x65\x6f\x20\x70\x6c\x61\x79\x65\x72\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x62\x65\x20\x72\x65\x73\x74\x61\x72\x74\x65\x64\x2e"));
          _0xefd14c_6.failedVideoIds.add(_0xefd14c_0.id);
          const _0xefd14c_3 = _0xefd14c_21(_0xefd14c_0, 1)[0];
          if (!_0xefd14c_3) return void _0xefd14c_a("\x59\x6f\x75\x54\x75\x62\x65\x20\x73\x61\x79\x73\x20\x74\x68\x69\x73\x20\x76\x69\x64\x65\x6f\x20\x69\x73\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x20\x6f\x72\x20\x72\x65\x73\x74\x72\x69\x63\x74\x65\x64\x20\x6f\x6e\x20\x74\x68\x69\x73\x20\x43\x68\x72\x6f\x6d\x65\x62\x6f\x6f\x6b\x2e\x20\x43\x68\x6f\x6f\x73\x65\x20\x61\x6e\x6f\x74\x68\x65\x72\x20\x76\x69\x64\x65\x6f\x2e");
          const _0xefd14c_4 = "\x54\x68\x61\x74\x20\x76\x69\x64\x65\x6f\x20\x69\x73\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x20\x6f\x72\x20\x72\x65\x73\x74\x72\x69\x63\x74\x65\x64\x20\x6f\x6e\x20\x74\x68\x69\x73\x20\x43\x68\x72\x6f\x6d\x65\x62\x6f\x6f\x6b\x2e\x20\x4c\x6f\x61\x64\x69\x6e\x67\x20\x61\x6e\x6f\x74\x68\x65\x72\x20\x70\x6c\x61\x79\x61\x62\x6c\x65\x20\x76\x69\x64\x65\x6f\x2e\x2e\x2e";
          _0xefd14c_a(_0xefd14c_4), _0xefd14c_6.watchPlayer?.destroy?.(), _0xefd14c_6.watchPlayer = null, 
          _0xefd14c_7.watchPlayer.replaceChildren(), _0xefd14c_6.watchRecoveryTimer = setTimeout(() => _0xefd14c_1e(_0xefd14c_3, {
            recoveryMessage: _0xefd14c_4
          }), 500);
        }(_0xefd14c_0, Number(_0xefd14c_1?.data), _0xefd14c_f === _0xefd14c_17));
      }
    }, _0xefd14c_6.watchPlayer = new _0xefd14c_f.Player(function(_0xefd14c_0) {
      _0xefd14c_0.replaceChildren();
      const _0xefd14c_1 = document.createElement("\x64\x69\x76");
      return _0xefd14c_1.id = `\x6e\x79\x78\x74\x75\x62\x65\x2d\x77\x61\x74\x63\x68\x2d${Date.now()}`, _0xefd14c_0.append(_0xefd14c_1), 
      _0xefd14c_1.id;
    }(_0xefd14c_7.watchPlayer), _0xefd14c_10);
  }
  function _0xefd14c_21(_0xefd14c_0, _0xefd14c_2 = 10) {
    const _0xefd14c_3 = new Set;
    return [ ..._0xefd14c_6.catalog, ..._0xefd14c_6.shorts ].filter(_0xefd14c_2 => _0xefd14c_1(_0xefd14c_2) && _0xefd14c_2?.id && _0xefd14c_2.id !== _0xefd14c_0.id && !_0xefd14c_6.failedVideoIds.has(_0xefd14c_2.id) && !_0xefd14c_3.has(_0xefd14c_2.id) && _0xefd14c_3.add(_0xefd14c_2.id)).sort((_0xefd14c_1, _0xefd14c_2) => _0xefd14c_25(_0xefd14c_2, _0xefd14c_0) - _0xefd14c_25(_0xefd14c_1, _0xefd14c_0)).slice(0, _0xefd14c_2);
  }
  function _0xefd14c_22(_0xefd14c_0) {
    _0xefd14c_4("\x5b\x64\x61\x74\x61\x2d\x77\x61\x74\x63\x68\x2d\x69\x6e\x66\x6f\x2d\x74\x61\x62\x5d").forEach(_0xefd14c_1 => {
      const _0xefd14c_2 = _0xefd14c_1.dataset.watchInfoTab === _0xefd14c_0;
      _0xefd14c_1.classList.toggle("\x61\x63\x74\x69\x76\x65", _0xefd14c_2), _0xefd14c_1.setAttribute("\x61\x72\x69\x61\x2d\x73\x65\x6c\x65\x63\x74\x65\x64", String(_0xefd14c_2));
    }), _0xefd14c_4("\x5b\x64\x61\x74\x61\x2d\x77\x61\x74\x63\x68\x2d\x69\x6e\x66\x6f\x2d\x70\x61\x6e\x65\x6c\x5d").forEach(_0xefd14c_1 => {
      _0xefd14c_1.hidden = _0xefd14c_1.dataset.watchInfoPanel !== _0xefd14c_0;
    });
  }
  function _0xefd14c_23(_0xefd14c_0 = {}) {
    const _0xefd14c_1 = Array.isArray(_0xefd14c_0.comments) ? _0xefd14c_0.comments : [];
    _0xefd14c_7.watchComments.replaceChildren(..._0xefd14c_1.map(_0xefd14c_0 => {
      const _0xefd14c_1 = document.createElement("\x61\x72\x74\x69\x63\x6c\x65");
      _0xefd14c_1.className = "\x77\x61\x74\x63\x68\x2d\x63\x6f\x6d\x6d\x65\x6e\x74";
      const _0xefd14c_2 = document.createElement("\x73\x70\x61\x6e");
      _0xefd14c_2.className = "\x63\x6f\x6d\x6d\x65\x6e\x74\x2d\x61\x76\x61\x74\x61\x72";
      const _0xefd14c_3 = () => {
        _0xefd14c_2.replaceChildren(), _0xefd14c_2.textContent = String(_0xefd14c_0.author || "\x59").trim().slice(0, 1).toUpperCase() || "\x59";
      };
      if (_0xefd14c_0.avatarUrl) {
        const _0xefd14c_1 = document.createElement("\x69\x6d\x67");
        _0xefd14c_1.alt = "", _0xefd14c_1.loading = "\x6c\x61\x7a\x79", _0xefd14c_1.referrerPolicy = "\x6e\x6f\x2d\x72\x65\x66\x65\x72\x72\x65\x72", 
        _0xefd14c_1.src = _0xefd14c_0.avatarUrl, _0xefd14c_1.addEventListener("\x65\x72\x72\x6f\x72", _0xefd14c_3, {
          once: !0
        }), _0xefd14c_2.append(_0xefd14c_1);
      } else _0xefd14c_3();
      const _0xefd14c_4 = document.createElement("\x64\x69\x76");
      _0xefd14c_4.className = "\x63\x6f\x6d\x6d\x65\x6e\x74\x2d\x63\x6f\x6e\x74\x65\x6e\x74";
      const _0xefd14c_5 = document.createElement("\x64\x69\x76");
      _0xefd14c_5.className = "\x63\x6f\x6d\x6d\x65\x6e\x74\x2d\x68\x65\x61\x64\x65\x72";
      const _0xefd14c_6 = document.createElement("\x73\x74\x72\x6f\x6e\x67");
      _0xefd14c_6.textContent = _0xefd14c_0.author || "\x59\x6f\x75\x54\x75\x62\x65\x20\x76\x69\x65\x77\x65\x72";
      const _0xefd14c_7 = document.createElement("\x74\x69\x6d\x65");
      _0xefd14c_7.textContent = _0xefd14c_e(_0xefd14c_0.publishedAt), _0xefd14c_5.append(_0xefd14c_6, _0xefd14c_7);
      const _0xefd14c_8 = document.createElement("\x70");
      _0xefd14c_8.textContent = String(_0xefd14c_0.text || "");
      const _0xefd14c_9 = document.createElement("\x73\x6d\x61\x6c\x6c"), _0xefd14c_a = [];
      return Number(_0xefd14c_0.likeCount) > 0 && _0xefd14c_a.push(`${_0xefd14c_f(_0xefd14c_0.likeCount)}\x20\x6c\x69\x6b\x65${1 === Number(_0xefd14c_0.likeCount) ? "" : "\x73"}`), 
      Number(_0xefd14c_0.replyCount) > 0 && _0xefd14c_a.push(`${_0xefd14c_f(_0xefd14c_0.replyCount)}\x20\x72\x65\x70\x6c${1 === Number(_0xefd14c_0.replyCount) ? "\x79" : "\x69\x65\x73"}`), 
      _0xefd14c_9.textContent = _0xefd14c_a.join("\x20\xb7\x20"), _0xefd14c_9.hidden = !_0xefd14c_a.length, 
      _0xefd14c_4.append(_0xefd14c_5, _0xefd14c_8, _0xefd14c_9), _0xefd14c_1.append(_0xefd14c_2, _0xefd14c_4), 
      _0xefd14c_1;
    })), _0xefd14c_7.watchCommentsStatus.hidden = Boolean(_0xefd14c_0.available && _0xefd14c_1.length), 
    _0xefd14c_7.watchCommentsStatus.textContent = _0xefd14c_0.available ? "\x4e\x6f\x20\x63\x6f\x6d\x6d\x65\x6e\x74\x73\x20\x79\x65\x74\x2e" : String(_0xefd14c_0.message || "\x43\x6f\x6d\x6d\x65\x6e\x74\x73\x20\x61\x72\x65\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x20\x66\x6f\x72\x20\x74\x68\x69\x73\x20\x76\x69\x64\x65\x6f\x2e");
  }
  function _0xefd14c_24(_0xefd14c_0 = {}) {
    const _0xefd14c_1 = Array.isArray(_0xefd14c_0.segments) ? _0xefd14c_0.segments : [];
    _0xefd14c_7.watchTranscript.replaceChildren(..._0xefd14c_1.map(_0xefd14c_0 => {
      const _0xefd14c_1 = document.createElement("\x62\x75\x74\x74\x6f\x6e");
      _0xefd14c_1.type = "\x62\x75\x74\x74\x6f\x6e", _0xefd14c_1.className = "\x74\x72\x61\x6e\x73\x63\x72\x69\x70\x74\x2d\x6c\x69\x6e\x65";
      const _0xefd14c_2 = document.createElement("\x74\x69\x6d\x65");
      _0xefd14c_2.textContent = _0xefd14c_c(_0xefd14c_0.startSeconds);
      const _0xefd14c_3 = document.createElement("\x73\x70\x61\x6e");
      return _0xefd14c_3.textContent = String(_0xefd14c_0.text || ""), _0xefd14c_1.append(_0xefd14c_2, _0xefd14c_3), 
      _0xefd14c_1.addEventListener("\x63\x6c\x69\x63\x6b", () => {
        _0xefd14c_1b(_0xefd14c_6.watchPlayer) && _0xefd14c_6.watchPlayer.seekTo(Math.max(0, Number(_0xefd14c_0.startSeconds) || 0), !0);
      }), _0xefd14c_1;
    })), _0xefd14c_7.watchTranscriptStatus.hidden = !1, _0xefd14c_7.watchTranscriptStatus.textContent = _0xefd14c_0.available ? `${String(_0xefd14c_0.language || "\x54\x72\x61\x6e\x73\x63\x72\x69\x70\x74")}\x20\xb7\x20${_0xefd14c_f(_0xefd14c_1.length)}\x20\x6c\x69\x6e\x65\x73` : String(_0xefd14c_0.message || "\x41\x20\x70\x75\x62\x6c\x69\x63\x20\x74\x72\x61\x6e\x73\x63\x72\x69\x70\x74\x20\x69\x73\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x20\x66\x6f\x72\x20\x74\x68\x69\x73\x20\x76\x69\x64\x65\x6f\x2e");
  }
  function _0xefd14c_25(_0xefd14c_0, _0xefd14c_1) {
    const _0xefd14c_2 = String(_0xefd14c_0.creator || "").toLowerCase() === String(_0xefd14c_1.creator || "").toLowerCase() ? 20 : 0, _0xefd14c_3 = new Set(String(_0xefd14c_1.title || "").toLowerCase().match(/[a-z0-9]{4,}/g) || []);
    return _0xefd14c_2 + (String(_0xefd14c_0.title || "").toLowerCase().match(/[a-z0-9]{4,}/g) || []).filter(_0xefd14c_0 => _0xefd14c_3.has(_0xefd14c_0)).length;
  }
  let _0xefd14c_26 = Date.now();
  function _0xefd14c_27() {
    _0xefd14c_26 = Date.now(), _0xefd14c_7.watchStage.classList.remove("\x63\x6f\x6e\x74\x72\x6f\x6c\x73\x2d\x69\x64\x6c\x65");
  }
  for (const _0xefd14c_63 of [ "\x70\x6f\x69\x6e\x74\x65\x72\x6d\x6f\x76\x65", "\x70\x6f\x69\x6e\x74\x65\x72\x64\x6f\x77\x6e", "\x6b\x65\x79\x64\x6f\x77\x6e", "\x66\x6f\x63\x75\x73\x69\x6e" ]) _0xefd14c_7.watchStage.addEventListener(_0xefd14c_63, _0xefd14c_27);
  function _0xefd14c_28() {
    _0xefd14c_7.watchStage.classList.remove("\x6d\x69\x6e\x69\x2d\x70\x6c\x61\x79\x65\x72", "\x69\x6e\x76\x69\x64\x69\x6f\x75\x73\x2d\x70\x6c\x61\x79\x65\x72"), _0xefd14c_27(), 
    ++_0xefd14c_6.watchGeneration, clearInterval(_0xefd14c_6.watchTimer), _0xefd14c_6.watchTimer = 0, 
    clearTimeout(_0xefd14c_6.watchRecoveryTimer), _0xefd14c_6.watchRecoveryTimer = 0, 
    _0xefd14c_6.watchCommunityRequestId += 1, _0xefd14c_2d({
      cancel: !0
    }), _0xefd14c_1c(), _0xefd14c_6.watchPlayer?.destroy?.(), _0xefd14c_6.watchPlayer = null, 
    _0xefd14c_7.watchPlayer.replaceChildren();
  }
  function _0xefd14c_29() {
    _0xefd14c_1b(_0xefd14c_6.watchPlayer) && (1 === _0xefd14c_6.watchPlayer.getPlayerState() ? _0xefd14c_6.watchPlayer.pauseVideo() : _0xefd14c_6.watchPlayer.playVideo());
  }
  function _0xefd14c_2a() {
    if (!_0xefd14c_1b(_0xefd14c_6.watchPlayer)) return;
    const _0xefd14c_0 = Boolean(_0xefd14c_6.watchPlayer.isMuted?.());
    _0xefd14c_0 ? _0xefd14c_6.watchPlayer.unMute() : _0xefd14c_6.watchPlayer.mute(), 
    _0xefd14c_7.watchMute.innerHTML = _0xefd14c_9(_0xefd14c_0 ? "\x69\x63\x6f\x6e\x2d\x76\x6f\x6c\x75\x6d\x65" : "\x69\x63\x6f\x6e\x2d\x6d\x75\x74\x65\x64"), 
    _0xefd14c_7.watchMute.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", _0xefd14c_0 ? "\x4d\x75\x74\x65" : "\x55\x6e\x6d\x75\x74\x65");
  }
  function _0xefd14c_2b(_0xefd14c_0) {
    if (!_0xefd14c_1b(_0xefd14c_6.watchPlayer)) return;
    const _0xefd14c_1 = Number(_0xefd14c_6.watchPlayer.getCurrentTime?.()) || 0, _0xefd14c_2 = Number(_0xefd14c_6.watchPlayer.getDuration?.()) || Number(_0xefd14c_6.watchVideo?.durationSeconds) || 0;
    _0xefd14c_6.watchPlayer.seekTo(Math.max(0, _0xefd14c_2 ? Math.min(_0xefd14c_2, _0xefd14c_1 + _0xefd14c_0) : _0xefd14c_1 + _0xefd14c_0), !0);
  }
  function _0xefd14c_2c(_0xefd14c_0 = "\x6b\x65\x79\x62\x6f\x61\x72\x64") {
    !_0xefd14c_6.watchSpacePressed && _0xefd14c_1b(_0xefd14c_6.watchPlayer) && (_0xefd14c_6.watchHoldSource = _0xefd14c_0, 
    _0xefd14c_6.watchSpacePressed = !0, _0xefd14c_6.watchSpaceHeld = !1, _0xefd14c_6.watchSpaceWasPlaying = 1 === _0xefd14c_6.watchPlayer.getPlayerState(), 
    _0xefd14c_6.watchSpaceRateChanged = !1, _0xefd14c_6.watchSpaceTimer = setTimeout(() => {
      if (_0xefd14c_6.watchSpaceTimer = 0, _0xefd14c_6.watchSpacePressed && "\x77\x61\x74\x63\x68" === _0xefd14c_6.view && _0xefd14c_1b(_0xefd14c_6.watchPlayer)) {
        _0xefd14c_6.watchSpaceHeld = !0;
        try {
          _0xefd14c_6.watchSpacePreviousRate = Number(_0xefd14c_6.watchPlayer.getPlaybackRate?.()) || 1;
        } catch {
          _0xefd14c_6.watchSpacePreviousRate = 1;
        }
        _0xefd14c_6.watchSpaceWasPlaying || _0xefd14c_6.watchPlayer.playVideo();
        try {
          "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _0xefd14c_6.watchPlayer.setPlaybackRate && (_0xefd14c_6.watchPlayer.setPlaybackRate(2), 
          _0xefd14c_6.watchSpaceRateChanged = !0, _0xefd14c_7.watchSpeedIndicator.hidden = !1);
        } catch {
          _0xefd14c_6.watchSpaceRateChanged = !1;
        }
      }
    }, 350));
  }
  function _0xefd14c_2d({cancel: _0xefd14c_0 = !1} = {}) {
    if (!_0xefd14c_6.watchSpacePressed && !_0xefd14c_6.watchSpaceTimer) return;
    clearTimeout(_0xefd14c_6.watchSpaceTimer), _0xefd14c_6.watchSpaceTimer = 0;
    const _0xefd14c_1 = _0xefd14c_6.watchSpaceHeld;
    if (_0xefd14c_6.watchSpacePressed = !1, _0xefd14c_6.watchSpaceHeld = !1, _0xefd14c_7.watchSpeedIndicator.hidden = !0, 
    _0xefd14c_1) {
      if (_0xefd14c_6.watchSpaceRateChanged && _0xefd14c_1b(_0xefd14c_6.watchPlayer)) try {
        _0xefd14c_6.watchPlayer.setPlaybackRate?.(_0xefd14c_6.watchSpacePreviousRate);
      } catch {}
      !_0xefd14c_6.watchSpaceWasPlaying && _0xefd14c_1b(_0xefd14c_6.watchPlayer) && _0xefd14c_6.watchPlayer.pauseVideo();
    } else _0xefd14c_0 || "\x77\x61\x74\x63\x68" !== _0xefd14c_6.view || _0xefd14c_29();
    _0xefd14c_6.watchSpaceRateChanged = !1;
  }
  function _0xefd14c_2e(_0xefd14c_0, _0xefd14c_1, _0xefd14c_2, _0xefd14c_3) {
    if (!_0xefd14c_1b(_0xefd14c_0)) return !1;
    if (_0xefd14c_0.isNative) return _0xefd14c_0.setCaptions(_0xefd14c_1), _0xefd14c_2.setAttribute("\x61\x72\x69\x61\x2d\x70\x72\x65\x73\x73\x65\x64", String(_0xefd14c_1)), 
    _0xefd14c_3 && (_0xefd14c_3.querySelector("\x73\x70\x61\x6e").textContent = _0xefd14c_1 ? "\x4f\x6e" : "\x4f\x66\x66"), 
    !0;
    try {
      _0xefd14c_1 ? _0xefd14c_0.loadModule?.("\x63\x61\x70\x74\x69\x6f\x6e\x73") : _0xefd14c_0.unloadModule?.("\x63\x61\x70\x74\x69\x6f\x6e\x73");
    } catch {
      return !1;
    }
    return _0xefd14c_2.setAttribute("\x61\x72\x69\x61\x2d\x70\x72\x65\x73\x73\x65\x64", String(_0xefd14c_1)), _0xefd14c_3 && (_0xefd14c_3.querySelector("\x73\x70\x61\x6e").textContent = _0xefd14c_1 ? "\x4f\x6e" : "\x4f\x66\x66"), 
    !0;
  }
  function _0xefd14c_2f(_0xefd14c_0) {
    const _0xefd14c_1 = _0xefd14c_6.watchCaptions;
    _0xefd14c_6.watchCaptions = Boolean(_0xefd14c_0), _0xefd14c_2e(_0xefd14c_6.watchPlayer, _0xefd14c_6.watchCaptions, _0xefd14c_7.watchCaptions, _0xefd14c_7.watchCaptionOption) || (_0xefd14c_6.watchCaptions = _0xefd14c_1), 
    _0xefd14c_7.watchSettingsCaptions.value = _0xefd14c_6.watchCaptions ? "\x6f\x6e" : "\x6f\x66\x66";
  }
  function _0xefd14c_30(_0xefd14c_0) {
    const _0xefd14c_1 = _0xefd14c_0.requestFullscreen || _0xefd14c_0.webkitRequestFullscreen;
    _0xefd14c_1 && _0xefd14c_1.call(_0xefd14c_0).catch?.(() => {});
  }
  let _0xefd14c_31 = 1, _0xefd14c_32 = !0, _0xefd14c_33 = null, _0xefd14c_34 = 0, _0xefd14c_35 = "", _0xefd14c_36 = 0, _0xefd14c_37 = "", _0xefd14c_38 = "", _0xefd14c_39 = "\x64\x69\x73\x63\x6f\x76\x65\x72", _0xefd14c_3a = 0, _0xefd14c_3b = null, _0xefd14c_3c = null;
  const _0xefd14c_3d = ("\x74\x75\x74\x73\x69" === document.documentElement.dataset.appShell ? "\x74\x75\x74\x73\x69" : "\x6e\x79\x78") + "\x2e\x73\x68\x6f\x72\x74\x73\x2d\x70\x72\x65\x66\x65\x72\x65\x6e\x63\x65\x73\x2e\x76\x31";
  let _0xefd14c_3e = new Set, _0xefd14c_3f = new Set, _0xefd14c_40 = new Map;
  try {
    const _0xefd14c_0 = JSON.parse(localStorage.getItem(_0xefd14c_3d) || "\x7b\x7d");
    _0xefd14c_3e = new Set((Array.isArray(_0xefd14c_0.videos) ? _0xefd14c_0.videos : []).filter(_0xefd14c_0 => /^[A-Za-z0-9_-]{11}$/.test(_0xefd14c_0)).slice(-500)), 
    _0xefd14c_3f = new Set((Array.isArray(_0xefd14c_0.channels) ? _0xefd14c_0.channels : []).filter(_0xefd14c_0 => /^UC[A-Za-z0-9_-]{22}$/.test(_0xefd14c_0)).slice(-100)), 
    _0xefd14c_40 = new Map((Array.isArray(_0xefd14c_0.likes) ? _0xefd14c_0.likes : []).filter(_0xefd14c_0 => _0xefd14c_0 && /^[A-Za-z0-9_-]{11}$/.test(_0xefd14c_0.id) && /^UC[A-Za-z0-9_-]{22}$/.test(_0xefd14c_0.channelId)).slice(-500).map(_0xefd14c_0 => [ _0xefd14c_0.id, {
      id: _0xefd14c_0.id,
      channelId: _0xefd14c_0.channelId
    } ]));
  } catch {}
  const _0xefd14c_41 = _0xefd14c_0 => !_0xefd14c_3e.has(_0xefd14c_0.id) && !_0xefd14c_3f.has(_0xefd14c_0.channelId);
  function _0xefd14c_42() {
    const _0xefd14c_0 = new Map;
    let _0xefd14c_1 = 0;
    for (const _0xefd14c_2 of _0xefd14c_40.values()) {
      if (!_0xefd14c_41(_0xefd14c_2)) continue;
      const _0xefd14c_3 = _0xefd14c_0.get(_0xefd14c_2.channelId) || {
        count: 0,
        order: 0
      };
      _0xefd14c_3.count++, _0xefd14c_3.order = ++_0xefd14c_1, _0xefd14c_0.set(_0xefd14c_2.channelId, _0xefd14c_3);
    }
    return [ ..._0xefd14c_0 ].sort((_0xefd14c_0, _0xefd14c_1) => _0xefd14c_1[1].count - _0xefd14c_0[1].count || _0xefd14c_1[1].order - _0xefd14c_0[1].order).slice(0, 2).map(([_0xefd14c_0]) => _0xefd14c_0);
  }
  function _0xefd14c_43(_0xefd14c_0 = _0xefd14c_6.shorts[_0xefd14c_6.shortIndex]) {
    if (!_0xefd14c_7.shortHeart) return;
    const _0xefd14c_1 = Boolean(_0xefd14c_0 && _0xefd14c_40.has(_0xefd14c_0.id));
    _0xefd14c_7.shortHeart.disabled = !_0xefd14c_0?.channelId, _0xefd14c_7.shortHeart.setAttribute("\x61\x72\x69\x61\x2d\x70\x72\x65\x73\x73\x65\x64", String(_0xefd14c_1)), 
    _0xefd14c_7.shortHeart.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", _0xefd14c_1 ? "\x55\x6e\x6c\x69\x6b\x65\x20\x74\x68\x69\x73\x20\x53\x68\x6f\x72\x74" : "\x4c\x69\x6b\x65\x20\x74\x68\x69\x73\x20\x53\x68\x6f\x72\x74"), 
    _0xefd14c_7.shortHeart.querySelector("\x73\x70\x61\x6e").textContent = _0xefd14c_1 ? "\x4c\x69\x6b\x65\x64" : "\x4c\x69\x6b\x65";
  }
  function _0xefd14c_44() {
    if (!_0xefd14c_38 && "\x64\x69\x73\x63\x6f\x76\x65\x72" === _0xefd14c_39) {
      _0xefd14c_36++, _0xefd14c_3a++, _0xefd14c_3b?.abort(), _0xefd14c_33 = null, _0xefd14c_6.shorts.splice(_0xefd14c_6.shortIndex + 1), 
      _0xefd14c_48.clear();
      for (const _0xefd14c_0 of _0xefd14c_6.shorts) _0xefd14c_48.add(_0xefd14c_0.id);
      _0xefd14c_31 = 1, _0xefd14c_37 = "", _0xefd14c_32 = !0, _0xefd14c_34 = 0, _0xefd14c_35 = "", 
      _0xefd14c_49();
    }
  }
  function _0xefd14c_45(_0xefd14c_0) {
    _0xefd14c_3e = new Set([ ..._0xefd14c_3e ].slice(-500)), _0xefd14c_3f = new Set([ ..._0xefd14c_3f ].slice(-100)), 
    _0xefd14c_40 = new Map([ ..._0xefd14c_40 ].slice(-500));
    try {
      localStorage.setItem(_0xefd14c_3d, JSON.stringify({
        videos: [ ..._0xefd14c_3e ],
        channels: [ ..._0xefd14c_3f ],
        likes: [ ..._0xefd14c_40.values() ]
      })), _0xefd14c_7.shortPreferencesStatus.textContent = _0xefd14c_0 + "\x20\x53\x61\x76\x65\x64\x20\x69\x6e\x20\x74\x68\x69\x73\x20\x77\x6f\x72\x6b\x73\x70\x61\x63\x65\x2e";
    } catch {
      _0xefd14c_7.shortPreferencesStatus.textContent = _0xefd14c_0 + "\x20\x53\x61\x76\x65\x64\x20\x66\x6f\x72\x20\x74\x68\x69\x73\x20\x73\x65\x73\x73\x69\x6f\x6e\x20\x6f\x6e\x6c\x79\x2e";
    }
  }
  function _0xefd14c_46(_0xefd14c_0 = "", _0xefd14c_1 = "\x64\x69\x73\x63\x6f\x76\x65\x72") {
    _0xefd14c_3a++, _0xefd14c_3b?.abort(), _0xefd14c_33 = null, !_0xefd14c_3c && _0xefd14c_6.shortPlayer && _0xefd14c_6.shorts[_0xefd14c_6.shortIndex] && (_0xefd14c_3c = {
      videos: _0xefd14c_6.shorts,
      index: _0xefd14c_6.shortIndex,
      query: _0xefd14c_38,
      topic: _0xefd14c_39,
      page: _0xefd14c_31,
      cursor: _0xefd14c_37,
      hasMore: _0xefd14c_32,
      seen: [ ..._0xefd14c_48 ]
    }), _0xefd14c_3c || _0xefd14c_57(), _0xefd14c_6.shorts = [], _0xefd14c_6.shortIndex = 0, 
    _0xefd14c_48.clear(), _0xefd14c_31 = 1, _0xefd14c_37 = "", _0xefd14c_32 = !0, _0xefd14c_34 = 0, 
    _0xefd14c_35 = "", _0xefd14c_38 = _0xefd14c_0, _0xefd14c_39 = _0xefd14c_1, _0xefd14c_7.shortSearchInput.value = _0xefd14c_0, 
    _0xefd14c_3c || (_0xefd14c_7.shortTitle.textContent = "", _0xefd14c_7.shortCreator.textContent = ""), 
    _0xefd14c_7.shortDislike.disabled = !0, _0xefd14c_7.shortHideChannel.disabled = !0, 
    _0xefd14c_43(), _0xefd14c_7.shortFeedLabel.textContent = _0xefd14c_0 ? `\x52\x65\x73\x75\x6c\x74\x73\x20\x66\x6f\x72\x20\u201c${_0xefd14c_0}\u201d` : {
      discover: "\x46\x6f\x72\x20\x79\x6f\x75",
      science: "\x53\x63\x69\x65\x6e\x63\x65",
      nature: "\x4e\x61\x74\x75\x72\x65",
      gaming: "\x47\x61\x6d\x69\x6e\x67",
      sports: "\x53\x70\x6f\x72\x74\x73"
    }[_0xefd14c_1], _0xefd14c_4("\x5b\x64\x61\x74\x61\x2d\x73\x68\x6f\x72\x74\x2d\x74\x6f\x70\x69\x63\x5d").forEach(_0xefd14c_2 => _0xefd14c_2.setAttribute("\x61\x72\x69\x61\x2d\x70\x72\x65\x73\x73\x65\x64", String(!_0xefd14c_0 && _0xefd14c_2.dataset.shortTopic === _0xefd14c_1))), 
    _0xefd14c_4a();
  }
  async function _0xefd14c_47(_0xefd14c_0 = !1) {
    const _0xefd14c_1 = _0xefd14c_6.shorts[_0xefd14c_6.shortIndex];
    if (!_0xefd14c_1 || _0xefd14c_0 && !_0xefd14c_1.channelId) return;
    if (_0xefd14c_0 ? _0xefd14c_3f.add(_0xefd14c_1.channelId) : _0xefd14c_3e.add(_0xefd14c_1.id), 
    _0xefd14c_0) for (const [_0xefd14c_3, _0xefd14c_4] of _0xefd14c_40) _0xefd14c_4.channelId === _0xefd14c_1.channelId && _0xefd14c_40.delete(_0xefd14c_3); else _0xefd14c_40.delete(_0xefd14c_1.id);
    _0xefd14c_45(_0xefd14c_0 ? `\x48\x69\x64\x64\x65\x6e\x20${_0xefd14c_1.creator || "\x74\x68\x69\x73\x20\x63\x68\x61\x6e\x6e\x65\x6c"}\x2e` : "\x54\x68\x69\x73\x20\x76\x69\x64\x65\x6f\x20\x69\x73\x20\x68\x69\x64\x64\x65\x6e\x2e"), 
    _0xefd14c_57();
    const _0xefd14c_2 = _0xefd14c_6.shorts.slice(0, _0xefd14c_6.shortIndex).filter(_0xefd14c_41).length;
    _0xefd14c_6.shorts = _0xefd14c_6.shorts.filter(_0xefd14c_41), _0xefd14c_6.shortIndex = Math.min(_0xefd14c_2, Math.max(0, _0xefd14c_6.shorts.length - 1)), 
    _0xefd14c_44(), await _0xefd14c_4a();
  }
  const _0xefd14c_48 = new Set;
  function _0xefd14c_49(_0xefd14c_1 = 6) {
    if (_0xefd14c_33) return _0xefd14c_33;
    if (_0xefd14c_0 || !_0xefd14c_32 || Date.now() < _0xefd14c_34) return Promise.resolve();
    const _0xefd14c_2 = _0xefd14c_3a, _0xefd14c_3 = new AbortController;
    _0xefd14c_3b = _0xefd14c_3;
    const _0xefd14c_4 = (async () => {
      for (let _0xefd14c_0 = 0; _0xefd14c_0 < 3 && _0xefd14c_32 && "\x73\x68\x6f\x72\x74\x73" === _0xefd14c_6.view && _0xefd14c_6.shorts.length - _0xefd14c_6.shortIndex - 1 < _0xefd14c_1; _0xefd14c_0++) {
        const _0xefd14c_0 = new URLSearchParams({
          limit: "\x32\x34",
          page: String(_0xefd14c_31),
          topic: _0xefd14c_39
        });
        if (_0xefd14c_38) _0xefd14c_0.set("\x71", _0xefd14c_38); else if ("\x64\x69\x73\x63\x6f\x76\x65\x72" === _0xefd14c_39) {
          const _0xefd14c_1 = _0xefd14c_42();
          _0xefd14c_1.length && _0xefd14c_0.set("\x63\x72\x65\x61\x74\x6f\x72\x73", _0xefd14c_1.join("\x2c"));
        }
        _0xefd14c_37 && _0xefd14c_0.set("\x63\x75\x72\x73\x6f\x72", _0xefd14c_37);
        const _0xefd14c_1 = await _0xefd14c_b(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6e\x79\x78\x74\x75\x62\x65\x2f\x73\x68\x6f\x72\x74\x73\x3f${_0xefd14c_0}`, _0xefd14c_3.signal);
        if (_0xefd14c_2 !== _0xefd14c_3a) return;
        for (const _0xefd14c_2 of _0xefd14c_1?.videos || []) /^[A-Za-z0-9_-]{11}$/.test(_0xefd14c_2?.id || "") && _0xefd14c_2.isShort && !_0xefd14c_48.has(_0xefd14c_2.id) && (_0xefd14c_48.add(_0xefd14c_2.id), 
        _0xefd14c_41(_0xefd14c_2) && _0xefd14c_6.shorts.push(_0xefd14c_2));
        const _0xefd14c_4 = _0xefd14c_1?.nextPage, _0xefd14c_5 = "\x73\x74\x72\x69\x6e\x67" == typeof _0xefd14c_1?.nextCursor ? _0xefd14c_1.nextCursor : "";
        _0xefd14c_32 = Boolean(_0xefd14c_5 && _0xefd14c_5 !== _0xefd14c_37) || Number.isInteger(_0xefd14c_4) && _0xefd14c_4 > _0xefd14c_31 && _0xefd14c_4 <= 100, 
        _0xefd14c_37 = _0xefd14c_5, Number.isInteger(_0xefd14c_4) && (_0xefd14c_31 = _0xefd14c_4), 
        _0xefd14c_35 = "";
        const _0xefd14c_7 = Math.min(Math.max(0, _0xefd14c_6.shorts.length - 240), Math.max(0, _0xefd14c_6.shortIndex - 50));
        _0xefd14c_7 && (_0xefd14c_6.shorts.splice(0, _0xefd14c_7), _0xefd14c_6.shortIndex -= _0xefd14c_7);
      }
    })().catch(_0xefd14c_0 => {
      _0xefd14c_2 === _0xefd14c_3a && "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72" !== _0xefd14c_0.name && (_0xefd14c_34 = Date.now() + 15e3, 
      _0xefd14c_35 = _0xefd14c_0.message || "\x4d\x6f\x72\x65\x20\x53\x68\x6f\x72\x74\x73\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x6c\x6f\x61\x64\x2e");
    }).finally(() => {
      _0xefd14c_33 === _0xefd14c_4 && (_0xefd14c_33 = null);
    });
    return _0xefd14c_33 = _0xefd14c_4, _0xefd14c_4;
  }
  async function _0xefd14c_4a() {
    if (_0xefd14c_0) return;
    const _0xefd14c_1 = _0xefd14c_3a;
    _0xefd14c_7.shortMenu && (_0xefd14c_7.shortMenu.open = !1), _0xefd14c_7.shortEmpty && (_0xefd14c_7.shortEmpty.hidden = !0), 
    _0xefd14c_5.shorts.dataset.feedLoading = "\x74\x72\x75\x65", _0xefd14c_a(), _0xefd14c_7.shortLoading.hidden = Boolean(_0xefd14c_3c);
    try {
      if (_0xefd14c_6.shorts.length || await _0xefd14c_49(1), "\x73\x68\x6f\x72\x74\x73" !== _0xefd14c_6.view || _0xefd14c_1 !== _0xefd14c_3a) return;
      if (!_0xefd14c_6.shorts.length) throw _0xefd14c_7.shortDislike?.setAttribute("\x64\x69\x73\x61\x62\x6c\x65\x64", ""), 
      _0xefd14c_7.shortHideChannel?.setAttribute("\x64\x69\x73\x61\x62\x6c\x65\x64", ""), _0xefd14c_43(), new Error(_0xefd14c_35 || "\x4e\x6f\x20\x6d\x61\x74\x63\x68\x69\x6e\x67\x20\x53\x68\x6f\x72\x74\x73\x2e\x20\x54\x72\x79\x20\x61\x6e\x6f\x74\x68\x65\x72\x20\x73\x65\x61\x72\x63\x68\x20\x6f\x72\x20\x74\x6f\x70\x69\x63\x2c\x20\x6f\x72\x20\x72\x65\x73\x65\x74\x20\x79\x6f\x75\x72\x20\x70\x72\x65\x66\x65\x72\x65\x6e\x63\x65\x73\x2e");
      _0xefd14c_3c && (_0xefd14c_57(), _0xefd14c_3c = null), _0xefd14c_6.failedShortIds.clear(), 
      _0xefd14c_4d.clear(), await _0xefd14c_54(_0xefd14c_6.shortIndex);
    } catch (_0xefd14c_2) {
      if (_0xefd14c_1 !== _0xefd14c_3a || "\x73\x68\x6f\x72\x74\x73" !== _0xefd14c_6.view) return;
      if (_0xefd14c_7.shortLoading.hidden = !0, _0xefd14c_3c) {
        const _0xefd14c_0 = _0xefd14c_3c;
        _0xefd14c_3c = null, _0xefd14c_6.shorts = _0xefd14c_0.videos, _0xefd14c_6.shortIndex = _0xefd14c_0.index, 
        _0xefd14c_38 = _0xefd14c_0.query, _0xefd14c_39 = _0xefd14c_0.topic, _0xefd14c_31 = _0xefd14c_0.page, 
        _0xefd14c_37 = _0xefd14c_0.cursor, _0xefd14c_32 = _0xefd14c_0.hasMore, _0xefd14c_34 = 0, 
        _0xefd14c_48.clear();
        for (const _0xefd14c_1 of _0xefd14c_0.seen) _0xefd14c_48.add(_0xefd14c_1);
        _0xefd14c_43(), _0xefd14c_7.shortDislike.disabled = !1, _0xefd14c_7.shortHideChannel.disabled = !_0xefd14c_6.shorts[_0xefd14c_6.shortIndex]?.channelId, 
        _0xefd14c_a(_0xefd14c_35 ? "\x53\x65\x61\x72\x63\x68\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x2e\x20\x59\x6f\x75\x72\x20\x63\x75\x72\x72\x65\x6e\x74\x20\x76\x69\x64\x65\x6f\x20\x69\x73\x20\x73\x74\x69\x6c\x6c\x20\x70\x6c\x61\x79\x69\x6e\x67\x2e" : "\x4e\x6f\x20\x6d\x61\x74\x63\x68\x69\x6e\x67\x20\x53\x68\x6f\x72\x74\x73\x2e");
      } else _0xefd14c_7.shortEmpty && (_0xefd14c_7.shortEmpty.hidden = !1, _0xefd14c_7.shortEmptyTitle.textContent = _0xefd14c_35 ? "\x53\x68\x6f\x72\x74\x73\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x6c\x6f\x61\x64" : "\x4e\x6f\x20\x53\x68\x6f\x72\x74\x73\x20\x66\x6f\x75\x6e\x64"), 
      _0xefd14c_a(_0xefd14c_2.message || "\x53\x68\x6f\x72\x74\x73\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x62\x65\x20\x6c\x6f\x61\x64\x65\x64\x2e");
    } finally {
      _0xefd14c_1 === _0xefd14c_3a && delete _0xefd14c_5.shorts.dataset.feedLoading;
    }
  }
  let _0xefd14c_4b = 0, _0xefd14c_4c = 0;
  const _0xefd14c_4d = new Set;
  function _0xefd14c_4e() {
    clearTimeout(_0xefd14c_4c), _0xefd14c_4c = 0;
  }
  const _0xefd14c_4f = new Map, _0xefd14c_50 = new Map;
  let _0xefd14c_51 = 0;
  function _0xefd14c_52(_0xefd14c_0) {
    if (_0xefd14c_50.has(_0xefd14c_0.id)) return _0xefd14c_50.get(_0xefd14c_0.id);
    const _0xefd14c_1 = {
      id: _0xefd14c_0.id,
      player: null,
      node: null,
      ready: !1,
      removed: !1,
      failed: !1
    };
    return _0xefd14c_50.set(_0xefd14c_0.id, _0xefd14c_1), _0xefd14c_1.promise = (async () => {
      const _0xefd14c_2 = await function(_0xefd14c_0) {
        if (!_0xefd14c_0.detailsPending) return Promise.resolve(_0xefd14c_0);
        if (!_0xefd14c_4f.has(_0xefd14c_0.id)) {
          _0xefd14c_4f.size >= 32 && _0xefd14c_4f.delete(_0xefd14c_4f.keys().next().value);
          const _0xefd14c_1 = _0xefd14c_b(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6e\x79\x78\x74\x75\x62\x65\x2f\x76\x69\x64\x65\x6f\x3f\x69\x64\x3d${encodeURIComponent(_0xefd14c_0.id)}`).then(_0xefd14c_1 => {
            const _0xefd14c_2 = _0xefd14c_1?.videos?.[0];
            if (!_0xefd14c_2 || _0xefd14c_2.id !== _0xefd14c_0.id || !_0xefd14c_2.isShort) throw Error("\x53\x68\x6f\x72\x74\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65");
            return _0xefd14c_2;
          }).catch(_0xefd14c_1 => {
            throw _0xefd14c_4f.delete(_0xefd14c_0.id), _0xefd14c_1;
          });
          _0xefd14c_4f.set(_0xefd14c_0.id, _0xefd14c_1);
        }
        return _0xefd14c_4f.get(_0xefd14c_0.id);
      }(_0xefd14c_0), _0xefd14c_3 = await _0xefd14c_19();
      if (_0xefd14c_1.removed || "\x73\x68\x6f\x72\x74\x73" !== _0xefd14c_6.view) return;
      _0xefd14c_1.detail = _0xefd14c_2;
      const _0xefd14c_4 = _0xefd14c_1.node = document.createElement("\x64\x69\x76");
      _0xefd14c_4.id = "\x6e\x79\x78\x74\x75\x62\x65\x2d\x70\x72\x65\x70\x61\x72\x65\x64\x2d\x73\x68\x6f\x72\x74\x2d" + ++_0xefd14c_51;
      const _0xefd14c_5 = document.createElement("\x64\x69\x76");
      _0xefd14c_5.id = _0xefd14c_4.id + "\x2d\x70\x6c\x61\x79\x65\x72", _0xefd14c_5.style.cssText = "\x77\x69\x64\x74\x68\x3a\x31\x30\x30\x25\x3b\x68\x65\x69\x67\x68\x74\x3a\x31\x30\x30\x25", 
      _0xefd14c_4.append(_0xefd14c_5), _0xefd14c_4.style.cssText = "\x70\x6f\x73\x69\x74\x69\x6f\x6e\x3a\x61\x62\x73\x6f\x6c\x75\x74\x65\x3b\x69\x6e\x73\x65\x74\x3a\x30\x3b\x76\x69\x73\x69\x62\x69\x6c\x69\x74\x79\x3a\x68\x69\x64\x64\x65\x6e\x3b\x70\x6f\x69\x6e\x74\x65\x72\x2d\x65\x76\x65\x6e\x74\x73\x3a\x6e\x6f\x6e\x65", 
      _0xefd14c_4.setAttribute("\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e", "\x74\x72\x75\x65"), _0xefd14c_7.shortPlayer.append(_0xefd14c_4);
      const _0xefd14c_8 = _0xefd14c_1a(_0xefd14c_0.id, !0);
      return _0xefd14c_8.playerVars.autoplay = 0, _0xefd14c_8.expectedDuration = _0xefd14c_2.durationSeconds, 
      _0xefd14c_8.events = {
        onReady: _0xefd14c_0 => {
          _0xefd14c_1.removed || (_0xefd14c_1.ready = !0, _0xefd14c_0.target.mute(), _0xefd14c_6.shortPlayer === _0xefd14c_0.target && (_0xefd14c_0.target.playVideo(), 
          _0xefd14c_56()));
        },
        onStateChange: _0xefd14c_0 => {
          _0xefd14c_1.removed || _0xefd14c_6.shortPlayer !== _0xefd14c_0.target || (_0xefd14c_0.data !== _0xefd14c_3.PlayerState.PLAYING && _0xefd14c_0.data !== _0xefd14c_3.PlayerState.PAUSED || (_0xefd14c_4e(), 
          _0xefd14c_7.shortLoading.hidden = !0, _0xefd14c_0.data === _0xefd14c_3.PlayerState.PLAYING && _0xefd14c_a()), 
          _0xefd14c_7.shortCenterPlay.hidden = _0xefd14c_0.data !== _0xefd14c_3.PlayerState.PAUSED, 
          _0xefd14c_0.data === _0xefd14c_3.PlayerState.ENDED && _0xefd14c_54(_0xefd14c_6.shortIndex + 1));
        },
        onAutoplayBlocked: () => {
          _0xefd14c_1.removed || _0xefd14c_6.shortPlayer !== _0xefd14c_1.player || (_0xefd14c_4e(), 
          _0xefd14c_7.shortLoading.hidden = !0, _0xefd14c_7.shortCenterPlay.hidden = !1);
        },
        onError: () => {
          _0xefd14c_1.failed = !0, _0xefd14c_6.shortPlayer === _0xefd14c_1.player && _0xefd14c_55(_0xefd14c_2);
        }
      }, _0xefd14c_1.player = new _0xefd14c_3.Player(_0xefd14c_5.id, _0xefd14c_8), _0xefd14c_1;
    })().catch(() => {
      _0xefd14c_1.failed = !0, _0xefd14c_6.shorts[_0xefd14c_6.shortIndex]?.id === _0xefd14c_1.id && "\x73\x68\x6f\x72\x74\x73" === _0xefd14c_6.view && _0xefd14c_55(_0xefd14c_0);
    }), _0xefd14c_1;
  }
  function _0xefd14c_53(_0xefd14c_0, _0xefd14c_1, _0xefd14c_2 = !1, _0xefd14c_3 = null) {
    _0xefd14c_4e(), clearInterval(_0xefd14c_6.shortTimer), _0xefd14c_6.shortTimer = 0;
    for (const _0xefd14c_6 of _0xefd14c_50.values()) _0xefd14c_6.removed = !0, _0xefd14c_6.player?.destroy?.(), 
    _0xefd14c_6.node?.remove();
    if (_0xefd14c_50.clear(), _0xefd14c_6.shortPlayer?.destroy?.(), _0xefd14c_7.shortStage.classList.add("\x69\x6e\x76\x69\x64\x69\x6f\x75\x73\x2d\x70\x6c\x61\x79\x65\x72"), 
    !/^[A-Za-z0-9_-]{11}$/.test(_0xefd14c_0.id)) throw new Error("\x43\x68\x6f\x6f\x73\x65\x20\x61\x20\x76\x61\x6c\x69\x64\x20\x53\x68\x6f\x72\x74\x2e");
    if (window.NyxInvidiousPlayer && !_0xefd14c_2) return _0xefd14c_6.shortPlayer = window.NyxInvidiousPlayer(_0xefd14c_7.shortPlayer, {
      id: _0xefd14c_0.id,
      loop: !0,
      onLoading: _0xefd14c_0 => {
        _0xefd14c_1 === _0xefd14c_4b && "\x73\x68\x6f\x72\x74\x73" === _0xefd14c_6.view && (_0xefd14c_7.shortLoading.hidden = !_0xefd14c_0);
      },
      onFailure: _0xefd14c_2 => {
        _0xefd14c_1 === _0xefd14c_4b && "\x73\x68\x6f\x72\x74\x73" === _0xefd14c_6.view && _0xefd14c_53(_0xefd14c_0, _0xefd14c_1, !0, _0xefd14c_2);
      }
    }), void _0xefd14c_a();
    const _0xefd14c_4 = new URL("\x2f\x65\x6d\x62\x65\x64\x2f" + _0xefd14c_0.id, _0xefd14c_6.invidiousEmbedOrigin);
    _0xefd14c_4.search = new URLSearchParams({
      local: "\x74\x72\x75\x65",
      autoplay: _0xefd14c_3?.paused ? "\x30" : "\x31",
      quality: "\x64\x61\x73\x68",
      controls: "\x31",
      volume: String(!1 === _0xefd14c_3?.muted ? _0xefd14c_3.volume : 0),
      start: String(_0xefd14c_3?.time || 0),
      speed: String(_0xefd14c_3?.rate || 1),
      loop: "\x31",
      continue: "\x30",
      hl: "\x65\x6e\x2d\x55\x53"
    }).toString();
    const _0xefd14c_5 = document.createElement("\x69\x66\x72\x61\x6d\x65");
    _0xefd14c_5.title = "\x49\x6e\x76\x69\x64\x69\x6f\x75\x73\x20\x53\x68\x6f\x72\x74\x20\x70\x6c\x61\x79\x65\x72", _0xefd14c_5.src = _0xefd14c_4.href, 
    _0xefd14c_5.allow = "\x61\x75\x74\x6f\x70\x6c\x61\x79\x3b\x20\x66\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e\x3b\x20\x70\x69\x63\x74\x75\x72\x65\x2d\x69\x6e\x2d\x70\x69\x63\x74\x75\x72\x65", _0xefd14c_5.allowFullscreen = !0, 
    _0xefd14c_5.referrerPolicy = "\x73\x74\x72\x69\x63\x74\x2d\x6f\x72\x69\x67\x69\x6e\x2d\x77\x68\x65\x6e\x2d\x63\x72\x6f\x73\x73\x2d\x6f\x72\x69\x67\x69\x6e", _0xefd14c_5.addEventListener("\x6c\x6f\x61\x64", () => {
      _0xefd14c_1 === _0xefd14c_4b && "\x73\x68\x6f\x72\x74\x73" === _0xefd14c_6.view && (_0xefd14c_7.shortLoading.hidden = !0);
    }, {
      once: !0
    }), _0xefd14c_6.shortPlayer = {
      isInvidious: !0,
      destroy: () => _0xefd14c_5.remove()
    }, _0xefd14c_7.shortPlayer.replaceChildren(_0xefd14c_5), _0xefd14c_a();
  }
  async function _0xefd14c_54(_0xefd14c_0) {
    if (!_0xefd14c_6.shorts.length) return;
    const _0xefd14c_1 = ++_0xefd14c_36;
    if (_0xefd14c_0 >= _0xefd14c_6.shorts.length) {
      const _0xefd14c_2 = _0xefd14c_0 - _0xefd14c_6.shortIndex;
      if (_0xefd14c_a("\x4c\x6f\x61\x64\x69\x6e\x67\x20\x6d\x6f\x72\x65\x20\x53\x68\x6f\x72\x74\x73\x2e\x2e\x2e"), await _0xefd14c_49(1), _0xefd14c_1 !== _0xefd14c_36 || "\x73\x68\x6f\x72\x74\x73" !== _0xefd14c_6.view) return;
      if ((_0xefd14c_0 = _0xefd14c_6.shortIndex + _0xefd14c_2) >= _0xefd14c_6.shorts.length) return void _0xefd14c_a(_0xefd14c_35 || "\x4e\x6f\x20\x6d\x6f\x72\x65\x20\x53\x68\x6f\x72\x74\x73\x20\x61\x72\x65\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x20\x72\x69\x67\x68\x74\x20\x6e\x6f\x77\x2e");
    }
    if ((_0xefd14c_0 = Math.max(0, _0xefd14c_0)) === _0xefd14c_6.shortIndex && _0xefd14c_6.shortPlayer) return;
    const _0xefd14c_2 = ++_0xefd14c_4b;
    _0xefd14c_6.shortIndex = _0xefd14c_0;
    const _0xefd14c_3 = _0xefd14c_6.shorts[_0xefd14c_6.shortIndex];
    if (_0xefd14c_7.shortEmpty && (_0xefd14c_7.shortEmpty.hidden = !0), _0xefd14c_7.shortMenu && (_0xefd14c_7.shortMenu.open = !1), 
    _0xefd14c_43(_0xefd14c_3), _0xefd14c_7.shortDislike && (_0xefd14c_7.shortDislike.disabled = !1), 
    _0xefd14c_7.shortHideChannel && (_0xefd14c_7.shortHideChannel.disabled = !_0xefd14c_3.channelId, 
    _0xefd14c_7.shortHideChannel.title = _0xefd14c_3.creator ? `\x48\x69\x64\x65\x20${_0xefd14c_3.creator}` : "\x48\x69\x64\x65\x20\x63\x68\x61\x6e\x6e\x65\x6c"), 
    _0xefd14c_6.shortPlayer?.pauseVideo?.(), _0xefd14c_6.shortPlayer?.isInvidious && _0xefd14c_6.shortPlayer.destroy(), 
    _0xefd14c_6.shortPlayer = null, function(_0xefd14c_0, _0xefd14c_1) {
      _0xefd14c_4e(), _0xefd14c_4c = setTimeout(() => {
        if (_0xefd14c_1 !== _0xefd14c_4b || "\x73\x68\x6f\x72\x74\x73" !== _0xefd14c_6.view) return;
        const _0xefd14c_2 = _0xefd14c_50.get(_0xefd14c_0.id);
        _0xefd14c_4d.has(_0xefd14c_0.id) ? _0xefd14c_55(_0xefd14c_0) : (_0xefd14c_4d.add(_0xefd14c_0.id), 
        _0xefd14c_2 && (_0xefd14c_2.removed = !0, _0xefd14c_2.player?.destroy?.(), _0xefd14c_2.node?.remove(), 
        _0xefd14c_50.delete(_0xefd14c_0.id)), _0xefd14c_6.shortPlayer = null, _0xefd14c_a("\x54\x68\x69\x73\x20\x53\x68\x6f\x72\x74\x20\x69\x73\x20\x74\x61\x6b\x69\x6e\x67\x20\x6c\x6f\x6e\x67\x65\x72\x20\x74\x6f\x20\x6c\x6f\x61\x64\x2e\x20\x52\x65\x74\x72\x79\x69\x6e\x67\x2e\x2e\x2e"), 
        _0xefd14c_54(_0xefd14c_6.shortIndex));
      }, 12e3);
    }(_0xefd14c_3, _0xefd14c_2), _0xefd14c_7.shortTitle.textContent = _0xefd14c_3.title || "\x55\x6e\x74\x69\x74\x6c\x65\x64\x20\x53\x68\x6f\x72\x74", 
    _0xefd14c_7.shortCreator.textContent = _0xefd14c_3.creator || "\x59\x6f\x75\x54\x75\x62\x65", _0xefd14c_7.shortLoading.hidden = !1, 
    _0xefd14c_7.shortCenterPlay.hidden = !0, _0xefd14c_7.shortProgress.style.width = "\x30", 
    _0xefd14c_49(), _0xefd14c_6.invidiousEmbedOrigin) return void _0xefd14c_53(_0xefd14c_3, _0xefd14c_2);
    _0xefd14c_7.shortStage.classList.remove("\x69\x6e\x76\x69\x64\x69\x6f\x75\x73\x2d\x70\x6c\x61\x79\x65\x72");
    for (const _0xefd14c_6 of _0xefd14c_50.values()) _0xefd14c_6.node && (_0xefd14c_6.node.style.visibility = "\x68\x69\x64\x64\x65\x6e", 
    _0xefd14c_6.node.style.pointerEvents = "\x6e\x6f\x6e\x65", _0xefd14c_6.node.setAttribute("\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e", "\x74\x72\x75\x65"));
    const _0xefd14c_4 = new Set(_0xefd14c_6.shorts.slice(_0xefd14c_6.shortIndex, _0xefd14c_6.shortIndex + 4).map(_0xefd14c_0 => _0xefd14c_0.id));
    for (const [_0xefd14c_6, _0xefd14c_7] of _0xefd14c_50) _0xefd14c_4.has(_0xefd14c_6) || (_0xefd14c_7.removed = !0, 
    _0xefd14c_7.player?.destroy?.(), _0xefd14c_7.node?.remove(), _0xefd14c_50.delete(_0xefd14c_6));
    const _0xefd14c_5 = _0xefd14c_52(_0xefd14c_3);
    if (await _0xefd14c_5.promise, _0xefd14c_2 === _0xefd14c_4b && "\x73\x68\x6f\x72\x74\x73" === _0xefd14c_6.view) {
      if (_0xefd14c_5.failed || !_0xefd14c_5.player) return _0xefd14c_55(_0xefd14c_3);
      _0xefd14c_6.shortPlayer = _0xefd14c_5.player, _0xefd14c_5.node.style.visibility = "\x76\x69\x73\x69\x62\x6c\x65", 
      _0xefd14c_5.node.style.pointerEvents = "\x61\x75\x74\x6f", _0xefd14c_5.node.setAttribute("\x61\x72\x69\x61\x2d\x68\x69\x64\x64\x65\x6e", "\x66\x61\x6c\x73\x65"), 
      _0xefd14c_6.shortMuted = !0, _0xefd14c_7.shortMute.innerHTML = _0xefd14c_9("\x69\x63\x6f\x6e\x2d\x6d\x75\x74\x65\x64"), 
      _0xefd14c_5.ready && (_0xefd14c_5.player.mute(), _0xefd14c_5.player.playVideo(), 
      _0xefd14c_56());
      for (const _0xefd14c_0 of _0xefd14c_6.shorts.slice(_0xefd14c_6.shortIndex + 1, _0xefd14c_6.shortIndex + 4)) _0xefd14c_52(_0xefd14c_0);
    }
  }
  function _0xefd14c_55(_0xefd14c_0) {
    if ("\x73\x68\x6f\x72\x74\x73" !== _0xefd14c_6.view || _0xefd14c_6.shorts[_0xefd14c_6.shortIndex]?.id !== _0xefd14c_0.id) return;
    _0xefd14c_4e(), _0xefd14c_6.failedShortIds.add(_0xefd14c_0.id);
    const _0xefd14c_1 = _0xefd14c_6.shorts.findIndex((_0xefd14c_0, _0xefd14c_1) => _0xefd14c_1 !== _0xefd14c_6.shortIndex && _0xefd14c_0?.id && !_0xefd14c_6.failedShortIds.has(_0xefd14c_0.id));
    if (_0xefd14c_1 < 0) return _0xefd14c_7.shortLoading.hidden = !0, _0xefd14c_57(), 
    void _0xefd14c_a("\x54\x68\x65\x73\x65\x20\x53\x68\x6f\x72\x74\x73\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x73\x74\x61\x72\x74\x2e\x20\x54\x72\x79\x20\x61\x67\x61\x69\x6e\x20\x6c\x61\x74\x65\x72\x20\x6f\x72\x20\x63\x68\x65\x63\x6b\x20\x79\x6f\x75\x72\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x2e");
    _0xefd14c_a("\x54\x68\x69\x73\x20\x53\x68\x6f\x72\x74\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x73\x74\x61\x72\x74\x2e\x20\x54\x72\x79\x69\x6e\x67\x20\x61\x6e\x6f\x74\x68\x65\x72\x2e\x2e\x2e"), _0xefd14c_54(_0xefd14c_1);
  }
  function _0xefd14c_56() {
    clearInterval(_0xefd14c_6.shortTimer), _0xefd14c_6.shortTimer = setInterval(() => {
      if (!_0xefd14c_1b(_0xefd14c_6.shortPlayer)) return;
      const _0xefd14c_0 = Number(_0xefd14c_6.shortPlayer.getCurrentTime?.()) || 0, _0xefd14c_1 = Number(_0xefd14c_6.shortPlayer.getDuration?.()) || 0;
      _0xefd14c_7.shortProgress.style.width = _0xefd14c_1 ? `${Math.min(100, _0xefd14c_0 / _0xefd14c_1 * 100)}\x25` : "\x30";
    }, 250);
  }
  function _0xefd14c_57() {
    if (!_0xefd14c_0) {
      _0xefd14c_3c = null, _0xefd14c_36++, _0xefd14c_5e(!0), _0xefd14c_4b++, _0xefd14c_4e(), 
      clearInterval(_0xefd14c_6.shortTimer), _0xefd14c_6.shortTimer = 0;
      for (const _0xefd14c_0 of _0xefd14c_50.values()) _0xefd14c_0.removed = !0, _0xefd14c_0.player?.destroy?.(), 
      _0xefd14c_0.node?.remove();
      _0xefd14c_50.clear(), _0xefd14c_6.shortPlayer?.destroy?.(), _0xefd14c_6.shortPlayer = null, 
      _0xefd14c_7.shortPlayer.replaceChildren(), _0xefd14c_7.shortStage.classList.remove("\x69\x6e\x76\x69\x64\x69\x6f\x75\x73\x2d\x70\x6c\x61\x79\x65\x72");
    }
  }
  function _0xefd14c_58() {
    _0xefd14c_1b(_0xefd14c_6.shortPlayer) && (1 === _0xefd14c_6.shortPlayer.getPlayerState() ? _0xefd14c_6.shortPlayer.pauseVideo() : _0xefd14c_6.shortPlayer.playVideo());
  }
  function _0xefd14c_59() {
    _0xefd14c_1b(_0xefd14c_6.shortPlayer) && (_0xefd14c_6.shortMuted = !_0xefd14c_6.shortMuted, 
    _0xefd14c_6.shortMuted ? _0xefd14c_6.shortPlayer.mute() : _0xefd14c_6.shortPlayer.unMute(), 
    _0xefd14c_7.shortMute.innerHTML = _0xefd14c_9(_0xefd14c_6.shortMuted ? "\x69\x63\x6f\x6e\x2d\x6d\x75\x74\x65\x64" : "\x69\x63\x6f\x6e\x2d\x76\x6f\x6c\x75\x6d\x65"));
  }
  const _0xefd14c_5a = _0xefd14c_0 => (_0xefd14c_5e(!0), _0xefd14c_6.shorts.length && _0xefd14c_54(_0xefd14c_6.shortIndex + _0xefd14c_0));
  let _0xefd14c_5b = null, _0xefd14c_5c = 0;
  function _0xefd14c_5d(_0xefd14c_0) {
    if (_0xefd14c_5b || !_0xefd14c_1b(_0xefd14c_6.shortPlayer)) return;
    const _0xefd14c_1 = _0xefd14c_6.shortPlayer;
    _0xefd14c_5b = {
      source: _0xefd14c_0,
      player: _0xefd14c_1,
      rate: _0xefd14c_1.getPlaybackRate?.() || 1,
      paused: 1 !== _0xefd14c_1.getPlayerState(),
      held: !1
    };
    const _0xefd14c_2 = _0xefd14c_5b;
    _0xefd14c_2.timer = setTimeout(() => {
      _0xefd14c_5b === _0xefd14c_2 && (_0xefd14c_2.held = !0, _0xefd14c_1.setPlaybackRate?.(2), 
      _0xefd14c_1.playVideo?.(), _0xefd14c_7.shortStage.dataset.speedHold = "\x74\x72\x75\x65");
    }, 350);
  }
  function _0xefd14c_5e(_0xefd14c_0 = !1) {
    const _0xefd14c_1 = _0xefd14c_5b;
    _0xefd14c_1 && (_0xefd14c_5b = null, clearTimeout(_0xefd14c_1.timer), delete _0xefd14c_7.shortStage.dataset.speedHold, 
    _0xefd14c_1.held ? (_0xefd14c_1.player.setPlaybackRate?.(_0xefd14c_1.rate), _0xefd14c_1.paused && _0xefd14c_1.player.pauseVideo?.(), 
    _0xefd14c_5c = performance.now() + 500) : _0xefd14c_0 || "\x6b\x65\x79\x62\x6f\x61\x72\x64" !== _0xefd14c_1.source || _0xefd14c_58());
  }
  function _0xefd14c_5f(_0xefd14c_0) {
    if (!_0xefd14c_1b(_0xefd14c_6.watchPlayer)) return;
    const _0xefd14c_1 = Number(_0xefd14c_6.watchPlayer.getDuration?.()) || 0;
    _0xefd14c_6.watchPlayer.seekTo(Math.max(0, Math.min(_0xefd14c_1, _0xefd14c_0)), !0);
  }
  function _0xefd14c_60(_0xefd14c_0 = !1) {
    if (_0xefd14c_0) {
      const _0xefd14c_0 = _0xefd14c_6.watchTrail.pop();
      _0xefd14c_0 && (_0xefd14c_6.watchVideo = null, _0xefd14c_1e(_0xefd14c_0));
    } else {
      const _0xefd14c_0 = _0xefd14c_21(_0xefd14c_6.watchVideo || {}, 1)[0];
      _0xefd14c_0 && _0xefd14c_1e(_0xefd14c_0);
    }
  }
  function _0xefd14c_61() {
    _0xefd14c_5e(!0), _0xefd14c_2d({
      cancel: !0
    });
    const _0xefd14c_0 = _0xefd14c_3("\x5b\x64\x61\x74\x61\x2d\x73\x68\x6f\x72\x74\x63\x75\x74\x2d\x68\x65\x6c\x70\x5d");
    _0xefd14c_0.open || _0xefd14c_0.showModal();
  }
  const _0xefd14c_62 = _0xefd14c_0 => _0xefd14c_0 instanceof Element && Boolean(_0xefd14c_0.closest("\x69\x6e\x70\x75\x74\x2c\x74\x65\x78\x74\x61\x72\x65\x61\x2c\x73\x65\x6c\x65\x63\x74\x2c\x62\x75\x74\x74\x6f\x6e\x2c\x61\x2c\x73\x75\x6d\x6d\x61\x72\x79\x2c\x5b\x63\x6f\x6e\x74\x65\x6e\x74\x65\x64\x69\x74\x61\x62\x6c\x65\x5d"));
  _0xefd14c_0 && addEventListener("\x6d\x65\x73\x73\x61\x67\x65", _0xefd14c_0 => {
    _0xefd14c_0.origin === location.origin && _0xefd14c_0.source === parent && "\x64\x72\x6f\x70\x3a\x74\x75\x62\x65\x2d\x70\x61\x75\x73\x65" === _0xefd14c_0.data?.type && (_0xefd14c_6.watchPlayer?.isInvidious ? (_0xefd14c_28(), 
    _0xefd14c_a("\x50\x72\x65\x73\x73\x20\x49\x6e\x76\x69\x64\x69\x6f\x75\x73\x20\x74\x6f\x20\x72\x65\x6f\x70\x65\x6e\x20\x74\x68\x65\x20\x76\x69\x64\x65\x6f\x2e")) : _0xefd14c_6.watchPlayer?.pauseVideo?.());
  }), _0xefd14c_8(), function() {
    addEventListener("\x6d\x65\x73\x73\x61\x67\x65", _0xefd14c_0 => {
      _0xefd14c_0.origin === location.origin && _0xefd14c_0.source === parent && "\x6e\x79\x78\x3a\x6e\x79\x78\x74\x75\x62\x65\x2d\x70\x72\x6f\x66\x69\x6c\x65" === _0xefd14c_0.data?.type && _0xefd14c_0.data.requestId === _0xefd14c_6.profileRequestId && function(_0xefd14c_0 = {}) {
        clearTimeout(_0xefd14c_6.profileRetryTimer), _0xefd14c_6.profileRetryTimer = 0, 
        _0xefd14c_6.profileResolved = !0;
        const _0xefd14c_1 = String(_0xefd14c_0.displayName || "\x50\x72\x6f\x66\x69\x6c\x65").trim() || "\x50\x72\x6f\x66\x69\x6c\x65";
        _0xefd14c_6.profile = {
          uid: String(_0xefd14c_0.uid || ""),
          signedIn: Boolean(_0xefd14c_0.signedIn),
          displayName: _0xefd14c_1,
          avatarUrl: String(_0xefd14c_0.avatarUrl || "")
        }, _0xefd14c_7.profileButton.title = _0xefd14c_6.profile.signedIn ? `\x4f\x70\x65\x6e\x20${_0xefd14c_1}\x27\x73\x20\x70\x72\x6f\x66\x69\x6c\x65` : "\x53\x69\x67\x6e\x20\x69\x6e\x20\x6f\x72\x20\x63\x72\x65\x61\x74\x65\x20\x61\x20\x70\x72\x6f\x66\x69\x6c\x65", 
        _0xefd14c_7.profileButton.setAttribute("\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c", _0xefd14c_7.profileButton.title);
        const _0xefd14c_2 = () => {
          if (_0xefd14c_7.profileAvatar.replaceChildren(), _0xefd14c_6.profile.signedIn) {
            const _0xefd14c_0 = document.createElement("\x73\x70\x61\x6e");
            _0xefd14c_0.textContent = _0xefd14c_1.slice(0, 1).toUpperCase() || "\x4e", _0xefd14c_7.profileAvatar.append(_0xefd14c_0);
          } else _0xefd14c_7.profileAvatar.innerHTML = _0xefd14c_9("\x69\x63\x6f\x6e\x2d\x75\x73\x65\x72");
        };
        if (!_0xefd14c_6.profile.avatarUrl) return void _0xefd14c_2();
        const _0xefd14c_3 = document.createElement("\x69\x6d\x67");
        _0xefd14c_3.alt = "", _0xefd14c_3.loading = "\x65\x61\x67\x65\x72", _0xefd14c_3.src = _0xefd14c_6.profile.avatarUrl, 
        _0xefd14c_3.addEventListener("\x65\x72\x72\x6f\x72", _0xefd14c_2, {
          once: !0
        }), _0xefd14c_7.profileAvatar.replaceChildren(_0xefd14c_3);
      }(_0xefd14c_0.data.profile);
    }), _0xefd14c_7.profileButton.addEventListener("\x63\x6c\x69\x63\x6b", () => parent.postMessage({
      type: "\x6e\x79\x78\x3a\x6e\x79\x78\x74\x75\x62\x65\x2d\x6f\x70\x65\x6e\x2d\x70\x72\x6f\x66\x69\x6c\x65",
      uid: _0xefd14c_6.profile.uid
    }, location.origin)), _0xefd14c_7.watchChannelMark.addEventListener("\x63\x6c\x69\x63\x6b", _0xefd14c_1d), 
    _0xefd14c_7.watchCreator.addEventListener("\x63\x6c\x69\x63\x6b", _0xefd14c_1d), _0xefd14c_7.channelBack.addEventListener("\x63\x6c\x69\x63\x6b", () => _0xefd14c_6.watchVideo && _0xefd14c_1e(_0xefd14c_6.watchVideo)), 
    document.addEventListener("\x76\x69\x73\x69\x62\x69\x6c\x69\x74\x79\x63\x68\x61\x6e\x67\x65", () => {
      document.hidden ? (_0xefd14c_2d({
        cancel: !0
      }), _0xefd14c_5e(!0)) : _0xefd14c_10();
    }), addEventListener("\x62\x6c\x75\x72", () => {
      _0xefd14c_2d({
        cancel: !0
      }), _0xefd14c_5e(!0);
    }), _0xefd14c_7.searchForm.addEventListener("\x73\x75\x62\x6d\x69\x74", _0xefd14c_0 => {
      _0xefd14c_0.preventDefault();
      const _0xefd14c_1 = _0xefd14c_7.searchInput.value.trim();
      _0xefd14c_1 && _0xefd14c_15(_0xefd14c_1);
    }), _0xefd14c_7.shortSearchForm?.addEventListener("\x73\x75\x62\x6d\x69\x74", _0xefd14c_0 => {
      _0xefd14c_0.preventDefault();
      const _0xefd14c_1 = _0xefd14c_7.shortSearchInput.value.trim();
      _0xefd14c_1.length >= 2 && _0xefd14c_46(_0xefd14c_1);
    }), _0xefd14c_7.shortRetry?.addEventListener("\x63\x6c\x69\x63\x6b", () => _0xefd14c_46(_0xefd14c_38, _0xefd14c_39)), 
    document.addEventListener("\x70\x6f\x69\x6e\x74\x65\x72\x64\x6f\x77\x6e", _0xefd14c_0 => {
      _0xefd14c_7.shortMenu?.open && !_0xefd14c_7.shortMenu.contains(_0xefd14c_0.target) && (_0xefd14c_7.shortMenu.open = !1);
    }), _0xefd14c_4("\x5b\x64\x61\x74\x61\x2d\x73\x68\x6f\x72\x74\x2d\x74\x6f\x70\x69\x63\x5d").forEach(_0xefd14c_0 => _0xefd14c_0.addEventListener("\x63\x6c\x69\x63\x6b", () => _0xefd14c_46("", _0xefd14c_0.dataset.shortTopic))), 
    _0xefd14c_7.shortDislike?.addEventListener("\x63\x6c\x69\x63\x6b", () => {
      _0xefd14c_47();
    }), _0xefd14c_7.shortHideChannel?.addEventListener("\x63\x6c\x69\x63\x6b", () => {
      _0xefd14c_47(!0);
    }), _0xefd14c_7.shortHeart?.addEventListener("\x63\x6c\x69\x63\x6b", () => {
      const _0xefd14c_0 = _0xefd14c_6.shorts[_0xefd14c_6.shortIndex];
      _0xefd14c_0?.channelId && (_0xefd14c_40.has(_0xefd14c_0.id) ? (_0xefd14c_40.delete(_0xefd14c_0.id), 
      _0xefd14c_45("\x4c\x69\x6b\x65\x20\x72\x65\x6d\x6f\x76\x65\x64\x2e\x20\x59\x6f\x75\x72\x20\x46\x6f\x72\x20\x79\x6f\x75\x20\x66\x65\x65\x64\x20\x68\x61\x73\x20\x62\x65\x65\x6e\x20\x61\x64\x6a\x75\x73\x74\x65\x64\x2e")) : (_0xefd14c_40.set(_0xefd14c_0.id, {
        id: _0xefd14c_0.id,
        channelId: _0xefd14c_0.channelId
      }), _0xefd14c_45(`\x4c\x69\x6b\x65\x64\x2e\x20\x46\x6f\x72\x20\x79\x6f\x75\x20\x77\x69\x6c\x6c\x20\x73\x68\x6f\x77\x20\x6d\x6f\x72\x65\x20\x66\x72\x6f\x6d\x20${_0xefd14c_0.creator || "\x74\x68\x69\x73\x20\x63\x72\x65\x61\x74\x6f\x72"}\x2e`)), 
      _0xefd14c_43(_0xefd14c_0), _0xefd14c_44());
    }), _0xefd14c_7.shortReset?.addEventListener("\x63\x6c\x69\x63\x6b", () => {
      _0xefd14c_3e.clear(), _0xefd14c_3f.clear(), _0xefd14c_40.clear(), _0xefd14c_45("\x4c\x69\x6b\x65\x73\x20\x61\x6e\x64\x20\x68\x69\x64\x64\x65\x6e\x20\x76\x69\x64\x65\x6f\x73\x2f\x63\x68\x61\x6e\x6e\x65\x6c\x73\x20\x63\x6c\x65\x61\x72\x65\x64\x2e"), 
      _0xefd14c_46();
    }), _0xefd14c_4("\x5b\x64\x61\x74\x61\x2d\x74\x6f\x70\x69\x63\x5d").forEach(_0xefd14c_0 => _0xefd14c_0.addEventListener("\x63\x6c\x69\x63\x6b", () => {
      _0xefd14c_7.searchInput.value = _0xefd14c_0.dataset.topic, _0xefd14c_15(_0xefd14c_0.dataset.topic);
    })), _0xefd14c_4("\x5b\x64\x61\x74\x61\x2d\x76\x69\x65\x77\x2d\x62\x75\x74\x74\x6f\x6e\x5d").forEach(_0xefd14c_0 => _0xefd14c_0.addEventListener("\x63\x6c\x69\x63\x6b", () => {
      _0xefd14c_16(_0xefd14c_0.dataset.viewButton), "\x73\x68\x6f\x72\x74\x73" === _0xefd14c_6.view && _0xefd14c_4a();
    })), _0xefd14c_3("\x5b\x64\x61\x74\x61\x2d\x62\x61\x63\x6b\x5d").addEventListener("\x63\x6c\x69\x63\x6b", () => {
      "\x77\x61\x74\x63\x68" === _0xefd14c_6.view ? _0xefd14c_16("\x68\x6f\x6d\x65") : _0x714b6c_20.length > 1 ? _0x714b6c_20.back() : location.href = "\x2f";
    }), _0xefd14c_7.watchToggle.addEventListener("\x63\x6c\x69\x63\x6b", _0xefd14c_29), _0xefd14c_7.watchCenterPlay.addEventListener("\x63\x6c\x69\x63\x6b", _0xefd14c_29), 
    _0xefd14c_7.watchMute.addEventListener("\x63\x6c\x69\x63\x6b", _0xefd14c_2a);
    const _0xefd14c_1 = _0xefd14c_0 => {
      if (!_0xefd14c_6.watchVideo) return;
      _0xefd14c_2d({
        cancel: !0
      });
      const _0xefd14c_1 = _0xefd14c_6.watchPlayer, _0xefd14c_2 = {
        quality: _0xefd14c_0,
        time: _0xefd14c_1?.getCurrentTime?.() || 0,
        paused: 2 === _0xefd14c_1?.getPlayerState?.(),
        volume: _0xefd14c_1?.getVolume?.() ?? 100,
        rate: _0xefd14c_1?.getPlaybackRate?.() || 1,
        muted: _0xefd14c_1?.isMuted?.() || !1
      };
      _0xefd14c_20(_0xefd14c_6.watchVideo, !1, !1, _0xefd14c_2).catch(() => _0xefd14c_a("\x54\x68\x65\x20\x76\x69\x64\x65\x6f\x20\x70\x6c\x61\x79\x65\x72\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x73\x74\x61\x72\x74\x2e"));
    };
    _0xefd14c_7.watchStage.addEventListener("\x70\x6f\x69\x6e\x74\x65\x72\x64\x6f\x77\x6e", _0xefd14c_0 => {
      0 === _0xefd14c_0.button && _0xefd14c_0.isPrimary && "\x77\x61\x74\x63\x68" === _0xefd14c_6.view && !_0xefd14c_62(_0xefd14c_0.target) && _0xefd14c_0.target.closest("\x5b\x64\x61\x74\x61\x2d\x77\x61\x74\x63\x68\x2d\x70\x6c\x61\x79\x65\x72\x5d\x2c\x5b\x64\x61\x74\x61\x2d\x77\x61\x74\x63\x68\x2d\x67\x65\x73\x74\x75\x72\x65\x5d") && (_0xefd14c_6.watchSpacePressed || (_0xefd14c_0.preventDefault(), 
      _0xefd14c_7.watchStage.focus({
        preventScroll: !0
      }), _0xefd14c_6.watchPointerId = _0xefd14c_0.pointerId, _0xefd14c_7.watchStage.setPointerCapture(_0xefd14c_0.pointerId), 
      _0xefd14c_2c("\x70\x6f\x69\x6e\x74\x65\x72")));
    });
    const _0xefd14c_2 = (_0xefd14c_0, _0xefd14c_1 = !1) => {
      _0xefd14c_0.pointerId === _0xefd14c_6.watchPointerId && (_0xefd14c_6.watchPointerId = null, 
      "\x70\x6f\x69\x6e\x74\x65\x72" === _0xefd14c_6.watchHoldSource && _0xefd14c_2d({
        cancel: _0xefd14c_1
      }), _0xefd14c_7.watchStage.hasPointerCapture(_0xefd14c_0.pointerId) && _0xefd14c_7.watchStage.releasePointerCapture(_0xefd14c_0.pointerId));
    };
    _0xefd14c_7.watchStage.addEventListener("\x70\x6f\x69\x6e\x74\x65\x72\x75\x70", _0xefd14c_0 => _0xefd14c_2(_0xefd14c_0)), 
    _0xefd14c_7.watchStage.addEventListener("\x70\x6f\x69\x6e\x74\x65\x72\x63\x61\x6e\x63\x65\x6c", _0xefd14c_0 => _0xefd14c_2(_0xefd14c_0, !0)), 
    _0xefd14c_7.watchStage.addEventListener("\x6c\x6f\x73\x74\x70\x6f\x69\x6e\x74\x65\x72\x63\x61\x70\x74\x75\x72\x65", _0xefd14c_0 => _0xefd14c_2(_0xefd14c_0, !0)), 
    _0xefd14c_7.watchQuality.addEventListener("\x63\x68\x61\x6e\x67\x65", () => _0xefd14c_1(Number(_0xefd14c_7.watchQuality.value))), 
    _0xefd14c_7.watchEngine.addEventListener("\x63\x6c\x69\x63\x6b", () => {
      _0xefd14c_6.preferredPlayer = "\x6e\x61\x74\x69\x76\x65" !== _0xefd14c_7.watchEngine.value && _0xefd14c_6.nativeAvailable ? "\x6e\x61\x74\x69\x76\x65" : "\x79\x6f\x75\x74\x75\x62\x65", 
      _0xefd14c_1();
    }), _0xefd14c_7.watchBackup.addEventListener("\x63\x6c\x69\x63\x6b", () => {
      _0xefd14c_6.preferredPlayer = "\x69\x6e\x76\x69\x64\x69\x6f\x75\x73", _0xefd14c_a("\x55\x73\x65\x20\x74\x68\x65\x20\x63\x6f\x6e\x74\x72\x6f\x6c\x73\x20\x69\x6e\x73\x69\x64\x65\x20\x74\x68\x65\x20\x76\x69\x64\x65\x6f\x20\x66\x6f\x72\x20\x70\x6c\x61\x79\x62\x61\x63\x6b\x2c\x20\x71\x75\x61\x6c\x69\x74\x79\x20\x61\x6e\x64\x20\x66\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e\x2e"), 
      _0xefd14c_1();
    }), _0xefd14c_7.watchProgress.addEventListener("\x69\x6e\x70\x75\x74", () => {
      _0xefd14c_1b(_0xefd14c_6.watchPlayer) && _0xefd14c_6.watchPlayer.seekTo((_0xefd14c_6.watchPlayer.getDuration?.() || 0) * Number(_0xefd14c_7.watchProgress.value) / 1e3, !0);
    });
    const _0xefd14c_8 = () => _0xefd14c_2f(!_0xefd14c_6.watchCaptions);
    _0xefd14c_7.watchCaptions.addEventListener("\x63\x6c\x69\x63\x6b", _0xefd14c_8), _0xefd14c_7.watchCaptionOption.addEventListener("\x63\x6c\x69\x63\x6b", _0xefd14c_8), 
    _0xefd14c_7.watchFullscreen.addEventListener("\x63\x6c\x69\x63\x6b", () => _0xefd14c_30(_0xefd14c_7.watchStage)), 
    _0xefd14c_7.watchSettings.addEventListener("\x63\x6c\x69\x63\x6b", _0xefd14c_0 => {
      _0xefd14c_0.stopPropagation();
      const _0xefd14c_1 = _0xefd14c_7.watchSettingsMenu.hidden;
      _0xefd14c_1c(), _0xefd14c_1 && (_0xefd14c_7.watchSettingsMenu.hidden = !1, _0xefd14c_7.watchSettings.setAttribute("\x61\x72\x69\x61\x2d\x65\x78\x70\x61\x6e\x64\x65\x64", "\x74\x72\x75\x65"), 
      _0xefd14c_7.watchSpeed.focus({
        preventScroll: !0
      }));
    }), _0xefd14c_7.watchSettingsMenu.addEventListener("\x63\x6c\x69\x63\x6b", _0xefd14c_0 => _0xefd14c_0.stopPropagation()), 
    _0xefd14c_7.watchSpeed.addEventListener("\x63\x68\x61\x6e\x67\x65", () => {
      try {
        _0xefd14c_6.watchPlayer?.setPlaybackRate?.(Number(_0xefd14c_7.watchSpeed.value) || 1);
      } catch {}
    }), _0xefd14c_7.watchVolume.addEventListener("\x69\x6e\x70\x75\x74", () => {
      try {
        _0xefd14c_6.watchPlayer?.setVolume?.(Number(_0xefd14c_7.watchVolume.value) || 0);
      } catch {}
    }), _0xefd14c_7.watchSettingsCaptions.addEventListener("\x63\x68\x61\x6e\x67\x65", () => _0xefd14c_2f("\x6f\x6e" === _0xefd14c_7.watchSettingsCaptions.value)), 
    _0xefd14c_7.watchRewind.addEventListener("\x63\x6c\x69\x63\x6b", () => _0xefd14c_2b(-10)), _0xefd14c_7.watchForward.addEventListener("\x63\x6c\x69\x63\x6b", () => _0xefd14c_2b(10)), 
    _0xefd14c_4("\x5b\x64\x61\x74\x61\x2d\x77\x61\x74\x63\x68\x2d\x69\x6e\x66\x6f\x2d\x74\x61\x62\x5d").forEach(_0xefd14c_0 => _0xefd14c_0.addEventListener("\x63\x6c\x69\x63\x6b", () => _0xefd14c_22(_0xefd14c_0.dataset.watchInfoTab))), 
    document.addEventListener("\x63\x6c\x69\x63\x6b", _0xefd14c_1c);
    let _0xefd14c_b = 0, _0xefd14c_c = 0, _0xefd14c_d = -1 / 0, _0xefd14c_e = null, _0xefd14c_f = 0;
    const _0xefd14c_11 = _0xefd14c_0 => {
      _0xefd14c_5e(!0);
      const _0xefd14c_1 = performance.now();
      _0xefd14c_1 - _0xefd14c_d < 450 || (_0xefd14c_d = _0xefd14c_1, _0xefd14c_5a(_0xefd14c_0));
    };
    document.addEventListener("\x77\x68\x65\x65\x6c", _0xefd14c_0 => {
      if ("\x73\x68\x6f\x72\x74\x73" !== _0xefd14c_6.view || _0xefd14c_0.ctrlKey || _0xefd14c_0.target.closest?.("\x69\x6e\x70\x75\x74\x2c\x74\x65\x78\x74\x61\x72\x65\x61\x2c\x73\x65\x6c\x65\x63\x74\x2c\x5b\x63\x6f\x6e\x74\x65\x6e\x74\x65\x64\x69\x74\x61\x62\x6c\x65\x5d") || Math.abs(_0xefd14c_0.deltaX) > Math.abs(_0xefd14c_0.deltaY)) return;
      _0xefd14c_0.preventDefault();
      const _0xefd14c_1 = performance.now();
      (_0xefd14c_1 - _0xefd14c_c > 180 || Math.sign(_0xefd14c_b) !== Math.sign(_0xefd14c_0.deltaY)) && (_0xefd14c_b = 0), 
      _0xefd14c_c = _0xefd14c_1, _0xefd14c_b += _0xefd14c_0.deltaY * (1 === _0xefd14c_0.deltaMode ? 16 : 2 === _0xefd14c_0.deltaMode ? innerHeight : 1), 
      Math.abs(_0xefd14c_b) >= 40 && (_0xefd14c_11(Math.sign(_0xefd14c_b)), _0xefd14c_b = 0);
    }, {
      passive: !1
    }), _0xefd14c_0 || (_0xefd14c_7.shortStage.addEventListener("\x70\x6f\x69\x6e\x74\x65\x72\x64\x6f\x77\x6e", _0xefd14c_0 => {
      _0xefd14c_0.isPrimary && 0 === _0xefd14c_0.button && !_0xefd14c_0.target.closest("\x62\x75\x74\x74\x6f\x6e\x2c\x61\x2c\x69\x6e\x70\x75\x74") && (_0xefd14c_5d("\x70\x6f\x69\x6e\x74\x65\x72"), 
      _0xefd14c_7.shortStage.setPointerCapture(_0xefd14c_0.pointerId)), "\x74\x6f\x75\x63\x68" !== _0xefd14c_0.pointerType || _0xefd14c_0.target.closest("\x62\x75\x74\x74\x6f\x6e\x2c\x61\x2c\x69\x6e\x70\x75\x74") || (_0xefd14c_e = {
        id: _0xefd14c_0.pointerId,
        x: _0xefd14c_0.clientX,
        y: _0xefd14c_0.clientY
      }, _0xefd14c_7.shortStage.setPointerCapture(_0xefd14c_0.pointerId));
    }), _0xefd14c_7.shortStage.addEventListener("\x70\x6f\x69\x6e\x74\x65\x72\x75\x70", _0xefd14c_0 => {
      if (_0xefd14c_5e(), !_0xefd14c_e || _0xefd14c_e.id !== _0xefd14c_0.pointerId) return;
      const _0xefd14c_1 = _0xefd14c_0.clientX - _0xefd14c_e.x, _0xefd14c_2 = _0xefd14c_0.clientY - _0xefd14c_e.y;
      _0xefd14c_e = null, Math.abs(_0xefd14c_2) >= 50 && Math.abs(_0xefd14c_2) > Math.abs(_0xefd14c_1) && (_0xefd14c_f = performance.now() + 350, 
      _0xefd14c_11(_0xefd14c_2 < 0 ? 1 : -1));
    }), _0xefd14c_7.shortStage.addEventListener("\x70\x6f\x69\x6e\x74\x65\x72\x63\x61\x6e\x63\x65\x6c", () => {
      _0xefd14c_e = null, _0xefd14c_5e(!0);
    }), _0xefd14c_7.shortStage.addEventListener("\x6c\x6f\x73\x74\x70\x6f\x69\x6e\x74\x65\x72\x63\x61\x70\x74\x75\x72\x65", () => _0xefd14c_5e(!0)), 
    _0xefd14c_7.shortStage.addEventListener("\x70\x6f\x69\x6e\x74\x65\x72\x6d\x6f\x76\x65", _0xefd14c_0 => {
      _0xefd14c_e && Math.abs(_0xefd14c_0.clientY - _0xefd14c_e.y) > 15 && _0xefd14c_5e(!0);
    }), _0xefd14c_7.shortCenterPlay.addEventListener("\x63\x6c\x69\x63\x6b", _0xefd14c_58), _0xefd14c_7.shortStage.addEventListener("\x63\x6c\x69\x63\x6b", _0xefd14c_0 => {
      performance.now() >= Math.max(_0xefd14c_f, _0xefd14c_5c) && !_0xefd14c_0.target.closest("\x62\x75\x74\x74\x6f\x6e\x2c\x61") && _0xefd14c_58();
    }), _0xefd14c_7.shortMute.addEventListener("\x63\x6c\x69\x63\x6b", _0xefd14c_59), _0xefd14c_7.shortCaptions.addEventListener("\x63\x6c\x69\x63\x6b", () => {
      _0xefd14c_6.shortCaptions = !_0xefd14c_6.shortCaptions, _0xefd14c_2e(_0xefd14c_6.shortPlayer, _0xefd14c_6.shortCaptions, _0xefd14c_7.shortCaptions) || (_0xefd14c_6.shortCaptions = !_0xefd14c_6.shortCaptions);
    }), _0xefd14c_7.shortFullscreen.addEventListener("\x63\x6c\x69\x63\x6b", () => _0xefd14c_30(_0xefd14c_7.shortStage)), 
    _0xefd14c_3("\x5b\x64\x61\x74\x61\x2d\x73\x68\x6f\x72\x74\x2d\x70\x72\x65\x76\x69\x6f\x75\x73\x5d").addEventListener("\x63\x6c\x69\x63\x6b", () => _0xefd14c_5a(-1)), 
    _0xefd14c_3("\x5b\x64\x61\x74\x61\x2d\x73\x68\x6f\x72\x74\x2d\x6e\x65\x78\x74\x5d").addEventListener("\x63\x6c\x69\x63\x6b", () => _0xefd14c_5a(1))), 
    _0xefd14c_3("\x5b\x64\x61\x74\x61\x2d\x73\x68\x6f\x72\x74\x63\x75\x74\x2d\x68\x65\x6c\x70\x2d\x63\x6c\x6f\x73\x65\x5d").addEventListener("\x63\x6c\x69\x63\x6b", () => {
      _0xefd14c_3("\x5b\x64\x61\x74\x61\x2d\x73\x68\x6f\x72\x74\x63\x75\x74\x2d\x68\x65\x6c\x70\x5d").close(), _0xefd14c_7.watchStage.focus();
    }), _0xefd14c_3("\x5b\x64\x61\x74\x61\x2d\x73\x68\x6f\x72\x74\x63\x75\x74\x2d\x68\x65\x6c\x70\x2d\x6f\x70\x65\x6e\x5d").addEventListener("\x63\x6c\x69\x63\x6b", _0xefd14c_61), 
    _0xefd14c_7.watchStage.addEventListener("\x64\x62\x6c\x63\x6c\x69\x63\x6b", _0xefd14c_0 => {
      _0xefd14c_0.target.closest("\x5b\x64\x61\x74\x61\x2d\x77\x61\x74\x63\x68\x2d\x67\x65\x73\x74\x75\x72\x65\x5d") && (_0xefd14c_2d({
        cancel: !0
      }), _0xefd14c_30(_0xefd14c_7.watchStage));
    }), document.addEventListener("\x6b\x65\x79\x64\x6f\x77\x6e", _0xefd14c_0 => {
      if ("\x45\x73\x63\x61\x70\x65" === _0xefd14c_0.key && _0xefd14c_7.shortMenu?.open) return _0xefd14c_7.shortMenu.open = !1, 
      void _0xefd14c_7.shortMenu.querySelector("\x73\x75\x6d\x6d\x61\x72\x79").focus();
      if (!_0xefd14c_3("\x5b\x64\x61\x74\x61\x2d\x73\x68\x6f\x72\x74\x63\x75\x74\x2d\x68\x65\x6c\x70\x5d").open) {
        if ("\x3f" === _0xefd14c_0.key && !_0xefd14c_0.target.closest?.("\x69\x6e\x70\x75\x74\x2c\x74\x65\x78\x74\x61\x72\x65\x61\x2c\x73\x65\x6c\x65\x63\x74\x2c\x5b\x63\x6f\x6e\x74\x65\x6e\x74\x65\x64\x69\x74\x61\x62\x6c\x65\x5d")) return _0xefd14c_0.preventDefault(), 
        void _0xefd14c_61();
        if ("\x2f" === _0xefd14c_0.key && !_0xefd14c_62(_0xefd14c_0.target)) return _0xefd14c_0.preventDefault(), 
        void ("\x73\x68\x6f\x72\x74\x73" === _0xefd14c_6.view && _0xefd14c_7.shortSearchInput ? _0xefd14c_7.shortSearchInput.focus() : ("\x68\x6f\x6d\x65" !== _0xefd14c_6.view && _0xefd14c_16("\x68\x6f\x6d\x65"), 
        _0xefd14c_7.searchInput.focus()));
        if ("\x45\x73\x63\x61\x70\x65" === _0xefd14c_0.key && _0xefd14c_7.watchStage.classList.contains("\x6d\x69\x6e\x69\x2d\x70\x6c\x61\x79\x65\x72")) _0xefd14c_7.watchStage.classList.remove("\x6d\x69\x6e\x69\x2d\x70\x6c\x61\x79\x65\x72"); else {
          if ("\x77\x61\x74\x63\x68" === _0xefd14c_6.view && !_0xefd14c_62(_0xefd14c_0.target) && (_0xefd14c_0.ctrlKey || _0xefd14c_0.altKey) && [ "\x41\x72\x72\x6f\x77\x4c\x65\x66\x74", "\x41\x72\x72\x6f\x77\x52\x69\x67\x68\x74" ].includes(_0xefd14c_0.code)) return _0xefd14c_0.preventDefault(), 
          void function(_0xefd14c_0) {
            const _0xefd14c_1 = [ ...String(_0xefd14c_6.watchVideo?.description || "").matchAll(/(?:^|\n)\s*((?:\d+:)?\d{1,2}:\d{2})\s+/g) ].map(_0xefd14c_0 => _0xefd14c_0[1].split("\x3a").reduce((_0xefd14c_0, _0xefd14c_1) => 60 * _0xefd14c_0 + Number(_0xefd14c_1), 0)).sort((_0xefd14c_0, _0xefd14c_1) => _0xefd14c_0 - _0xefd14c_1), _0xefd14c_2 = _0xefd14c_6.watchPlayer?.getCurrentTime?.() || 0, _0xefd14c_3 = _0xefd14c_0 > 0 ? _0xefd14c_1.find(_0xefd14c_0 => _0xefd14c_0 > _0xefd14c_2 + 1) : _0xefd14c_1.filter(_0xefd14c_0 => _0xefd14c_0 < _0xefd14c_2 - 2).at(-1);
            void 0 !== _0xefd14c_3 && _0xefd14c_5f(_0xefd14c_3);
          }("\x41\x72\x72\x6f\x77\x52\x69\x67\x68\x74" === _0xefd14c_0.code ? 1 : -1);
          if ("\x45\x73\x63\x61\x70\x65" === _0xefd14c_0.key && !_0xefd14c_7.watchSettingsMenu.hidden) return _0xefd14c_0.preventDefault(), 
          _0xefd14c_1c(), void _0xefd14c_7.watchSettings.focus();
          if (!(_0xefd14c_62(_0xefd14c_0.target) || _0xefd14c_0.ctrlKey || _0xefd14c_0.metaKey || _0xefd14c_0.altKey)) if ("\x77\x61\x74\x63\x68" === _0xefd14c_6.view) {
            if (_0xefd14c_6.watchPlayer?.isInvidious) return;
            if ([ "\x53\x70\x61\x63\x65", "\x4b\x65\x79\x4b", "\x4b\x65\x79\x4a", "\x4b\x65\x79\x4c", "\x41\x72\x72\x6f\x77\x4c\x65\x66\x74", "\x41\x72\x72\x6f\x77\x52\x69\x67\x68\x74", "\x4b\x65\x79\x4d", "\x4b\x65\x79\x43", "\x4b\x65\x79\x46", "\x41\x72\x72\x6f\x77\x55\x70", "\x41\x72\x72\x6f\x77\x44\x6f\x77\x6e", "\x48\x6f\x6d\x65", "\x45\x6e\x64", "\x43\x6f\x6d\x6d\x61", "\x50\x65\x72\x69\x6f\x64", "\x4b\x65\x79\x49", "\x4b\x65\x79\x54", "\x4d\x65\x64\x69\x61\x50\x6c\x61\x79\x50\x61\x75\x73\x65", "\x4d\x65\x64\x69\x61\x53\x74\x6f\x70", "\x4d\x65\x64\x69\x61\x54\x72\x61\x63\x6b\x4e\x65\x78\x74", "\x4d\x65\x64\x69\x61\x54\x72\x61\x63\x6b\x50\x72\x65\x76\x69\x6f\x75\x73", ...Array.from({
              length: 10
            }, (_0xefd14c_0, _0xefd14c_1) => "\x44\x69\x67\x69\x74" + _0xefd14c_1) ].includes(_0xefd14c_0.code) && _0xefd14c_0.preventDefault(), 
            "\x53\x70\x61\x63\x65" === _0xefd14c_0.code) return void _0xefd14c_2c();
            if (_0xefd14c_0.repeat && ![ "\x41\x72\x72\x6f\x77\x4c\x65\x66\x74", "\x41\x72\x72\x6f\x77\x52\x69\x67\x68\x74", "\x41\x72\x72\x6f\x77\x55\x70", "\x41\x72\x72\x6f\x77\x44\x6f\x77\x6e", "\x4b\x65\x79\x4a", "\x4b\x65\x79\x4c" ].includes(_0xefd14c_0.code)) return;
            if (_0xefd14c_0.shiftKey && [ "\x4b\x65\x79\x4e", "\x4b\x65\x79\x50" ].includes(_0xefd14c_0.code)) return _0xefd14c_0.preventDefault(), 
            void _0xefd14c_60("\x4b\x65\x79\x50" === _0xefd14c_0.code);
            if ("\x4d\x65\x64\x69\x61\x54\x72\x61\x63\x6b\x4e\x65\x78\x74" === _0xefd14c_0.code && _0xefd14c_60(), "\x4d\x65\x64\x69\x61\x54\x72\x61\x63\x6b\x50\x72\x65\x76\x69\x6f\x75\x73" === _0xefd14c_0.code && _0xefd14c_60(!0), 
            "\x4d\x65\x64\x69\x61\x53\x74\x6f\x70" === _0xefd14c_0.code && _0xefd14c_6.watchPlayer?.pauseVideo?.(), "\x4d\x65\x64\x69\x61\x50\x6c\x61\x79\x50\x61\x75\x73\x65" === _0xefd14c_0.code && _0xefd14c_29(), 
            "\x4b\x65\x79\x49" === _0xefd14c_0.code && _0xefd14c_7.watchStage.classList.toggle("\x6d\x69\x6e\x69\x2d\x70\x6c\x61\x79\x65\x72"), 
            "\x4b\x65\x79\x54" === _0xefd14c_0.code && _0xefd14c_5.watch.classList.toggle("\x74\x68\x65\x61\x74\x65\x72\x2d\x6d\x6f\x64\x65"), 
            "\x48\x6f\x6d\x65" !== _0xefd14c_0.code && "\x44\x69\x67\x69\x74\x30" !== _0xefd14c_0.code || _0xefd14c_5f(0), 
            "\x45\x6e\x64" === _0xefd14c_0.code && _0xefd14c_5f((_0xefd14c_6.watchPlayer?.getDuration?.() || 0) - .1), 
            /^Digit[1-9]$/.test(_0xefd14c_0.code) && _0xefd14c_5f((_0xefd14c_6.watchPlayer?.getDuration?.() || 0) * Number(_0xefd14c_0.code.slice(-1)) / 10), 
            [ "\x41\x72\x72\x6f\x77\x55\x70", "\x41\x72\x72\x6f\x77\x44\x6f\x77\x6e" ].includes(_0xefd14c_0.code) && _0xefd14c_1b(_0xefd14c_6.watchPlayer)) {
              const _0xefd14c_1 = Math.max(0, Math.min(100, (_0xefd14c_6.watchPlayer.getVolume?.() ?? 100) + ("\x41\x72\x72\x6f\x77\x55\x70" === _0xefd14c_0.code ? 5 : -5)));
              _0xefd14c_6.watchPlayer.setVolume?.(_0xefd14c_1), _0xefd14c_7.watchVolume.value = String(_0xefd14c_1);
            }
            "\x3e" === _0xefd14c_0.key || "\x3c" === _0xefd14c_0.key ? function(_0xefd14c_0) {
              const _0xefd14c_1 = _0xefd14c_6.watchPlayer;
              if (!_0xefd14c_1b(_0xefd14c_1)) return;
              _0xefd14c_2d({
                cancel: !0
              });
              const _0xefd14c_2 = (_0xefd14c_1.getAvailablePlaybackRates?.() || [ .25, .5, .75, 1, 1.25, 1.5, 1.75, 2 ]).map(Number).sort((_0xefd14c_0, _0xefd14c_1) => _0xefd14c_0 - _0xefd14c_1), _0xefd14c_3 = Number(_0xefd14c_1.getPlaybackRate?.()) || 1, _0xefd14c_4 = _0xefd14c_0 > 0 ? _0xefd14c_2.find(_0xefd14c_0 => _0xefd14c_0 > _0xefd14c_3 + .01) : _0xefd14c_2.filter(_0xefd14c_0 => _0xefd14c_0 < _0xefd14c_3 - .01).at(-1);
              _0xefd14c_4 && (_0xefd14c_1.setPlaybackRate?.(_0xefd14c_4), _0xefd14c_7.watchSpeed.value = String(_0xefd14c_4));
            }("\x3e" === _0xefd14c_0.key ? 1 : -1) : [ "\x50\x65\x72\x69\x6f\x64", "\x43\x6f\x6d\x6d\x61" ].includes(_0xefd14c_0.code) && 2 === _0xefd14c_6.watchPlayer?.getPlayerState?.() && _0xefd14c_2b(("\x50\x65\x72\x69\x6f\x64" === _0xefd14c_0.code ? 1 : -1) / (Number(_0xefd14c_6.watchVideo?.fps) || 30)), 
            "\x4b\x65\x79\x4b" === _0xefd14c_0.code && _0xefd14c_29(), "\x4b\x65\x79\x4a" === _0xefd14c_0.code && _0xefd14c_2b(-10), 
            "\x4b\x65\x79\x4c" === _0xefd14c_0.code && _0xefd14c_2b(10), "\x41\x72\x72\x6f\x77\x4c\x65\x66\x74" === _0xefd14c_0.code && _0xefd14c_2b(-5), 
            "\x41\x72\x72\x6f\x77\x52\x69\x67\x68\x74" === _0xefd14c_0.code && _0xefd14c_2b(5), "\x4b\x65\x79\x4d" === _0xefd14c_0.code && _0xefd14c_2a(), 
            "\x4b\x65\x79\x43" !== _0xefd14c_0.code || _0xefd14c_7.watchSettingsCaptions.disabled || _0xefd14c_2f(!_0xefd14c_6.watchCaptions), 
            "\x4b\x65\x79\x46" === _0xefd14c_0.code && _0xefd14c_30(_0xefd14c_7.watchStage);
          } else if ("\x73\x68\x6f\x72\x74\x73" === _0xefd14c_6.view) {
            if ([ "\x53\x70\x61\x63\x65", "\x4b\x65\x79\x4b", "\x4b\x65\x79\x43", "\x41\x72\x72\x6f\x77\x55\x70", "\x41\x72\x72\x6f\x77\x44\x6f\x77\x6e", "\x4b\x65\x79\x4d", "\x4b\x65\x79\x46" ].includes(_0xefd14c_0.code) && _0xefd14c_0.preventDefault(), 
            "\x53\x70\x61\x63\x65" === _0xefd14c_0.code) return void _0xefd14c_5d("\x6b\x65\x79\x62\x6f\x61\x72\x64");
            if (_0xefd14c_0.repeat) return;
            "\x4b\x65\x79\x43" === _0xefd14c_0.code && _0xefd14c_7.shortCaptions.click(), "\x4b\x65\x79\x4b" === _0xefd14c_0.code && _0xefd14c_58(), 
            "\x41\x72\x72\x6f\x77\x55\x70" === _0xefd14c_0.code && _0xefd14c_5a(-1), "\x41\x72\x72\x6f\x77\x44\x6f\x77\x6e" === _0xefd14c_0.code && _0xefd14c_5a(1), 
            "\x4b\x65\x79\x4d" === _0xefd14c_0.code && _0xefd14c_59(), "\x4b\x65\x79\x46" === _0xefd14c_0.code && _0xefd14c_30(_0xefd14c_7.shortStage);
          }
        }
      }
    }), document.addEventListener("\x6b\x65\x79\x75\x70", _0xefd14c_0 => {
      if ("\x53\x70\x61\x63\x65" === _0xefd14c_0.code && "\x6b\x65\x79\x62\x6f\x61\x72\x64" === _0xefd14c_5b?.source) return _0xefd14c_0.preventDefault(), 
      void _0xefd14c_5e();
      "\x53\x70\x61\x63\x65" === _0xefd14c_0.code && _0xefd14c_6.watchSpacePressed && "\x6b\x65\x79\x62\x6f\x61\x72\x64" === _0xefd14c_6.watchHoldSource && (_0xefd14c_0.preventDefault(), 
      _0xefd14c_2d());
    });
  }(), _0xefd14c_11(), _0xefd14c_10(), _0xefd14c_b("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6e\x79\x78\x74\x75\x62\x65\x2f\x73\x74\x61\x74\x75\x73").then(_0xefd14c_0 => {
    if (!_0xefd14c_0?.configured) throw new Error("\x4e\x79\x78\x54\x75\x62\x65\x20\x69\x73\x20\x6e\x6f\x74\x20\x63\x6f\x6e\x66\x69\x67\x75\x72\x65\x64\x20\x79\x65\x74\x2e");
    try {
      const _0xefd14c_1 = new URL(_0xefd14c_0.invidiousEmbedOrigin);
      "\x68\x74\x74\x70\x73\x3a" !== _0xefd14c_1.protocol || _0xefd14c_1.username || _0xefd14c_1.password || _0xefd14c_1.port || _0xefd14c_1.href !== _0xefd14c_1.origin + "\x2f" || (_0xefd14c_6.invidiousEmbedOrigin = _0xefd14c_1.origin);
    } catch {}
    return _0xefd14c_7.watchBackup.hidden = !_0xefd14c_6.invidiousEmbedOrigin, _0xefd14c_6.nativeAvailable = !0 === _0xefd14c_0.nativeAvailable, 
    _0xefd14c_7.watchEngine.hidden = !_0xefd14c_6.nativeAvailable, async function() {
      const _0xefd14c_0 = String(new URLSearchParams(location.search).get("\x76\x69\x64\x65\x6f") || "").trim();
      if (!/^[A-Za-z0-9_-]{11}$/.test(_0xefd14c_0)) return _0xefd14c_15();
      const _0xefd14c_2 = await _0xefd14c_b(`/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x6e\x79\x78\x74\x75\x62\x65\x2f\x76\x69\x64\x65\x6f\x3f\x69\x64\x3d${encodeURIComponent(_0xefd14c_0)}`), _0xefd14c_3 = Array.isArray(_0xefd14c_2?.videos) ? _0xefd14c_2.videos[0] : null;
      if (!_0xefd14c_3?.id) throw new Error("\x54\x68\x61\x74\x20\x76\x69\x64\x65\x6f\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x62\x65\x20\x6c\x6f\x61\x64\x65\x64\x20\x69\x6e\x20\x4e\x79\x78\x54\x75\x62\x65\x2e");
      if (!_0xefd14c_1(_0xefd14c_3)) return await _0xefd14c_15(), void _0xefd14c_a("\x54\x68\x69\x73\x20\x76\x69\x64\x65\x6f\x20\x69\x73\x20\x6e\x6f\x74\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x20\x69\x6e\x20\x44\x72\x6f\x70\x54\x75\x62\x65\x2e");
      _0xefd14c_6.catalog = [ _0xefd14c_3 ], _0xefd14c_1e(_0xefd14c_3);
    }();
  }).catch(_0xefd14c_0 => {
    _0xefd14c_12([]), _0xefd14c_a(_0xefd14c_0.message || "\x4e\x79\x78\x54\x75\x62\x65\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x62\x65\x20\x73\x74\x61\x72\x74\x65\x64\x2e");
  });
})();
