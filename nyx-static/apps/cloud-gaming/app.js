(() => {
  "use strict";
  const _0x1b90bf_0 = "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x63\x6c\x6f\x75\x64\x2d\x67\x61\x6d\x69\x6e\x67", _0x1b90bf_1 = {
    games: [],
    filtered: [],
    configured: !1,
    token: "",
    tokenExpiresAt: 0,
    directAuthPromise: null,
    parentAuth: !1,
    session: null,
    launching: !1,
    cancelled: !1,
    launchController: null,
    launchDeadlineTimer: null,
    launchTimedOut: !1,
    retryUntil: 0,
    retryTimer: null,
    pingTimer: null,
    elapsedTimer: null,
    pingFailures: 0
  }, _0x1b90bf_2 = {
    network: document.querySelector("\x5b\x64\x61\x74\x61\x2d\x6e\x65\x74\x77\x6f\x72\x6b\x2d\x6d\x6f\x64\x65\x5d"),
    provider: document.querySelector("\x5b\x64\x61\x74\x61\x2d\x70\x72\x6f\x76\x69\x64\x65\x72\x2d\x73\x74\x61\x74\x65\x5d"),
    notice: document.querySelector("\x5b\x64\x61\x74\x61\x2d\x6e\x6f\x74\x69\x63\x65\x5d"),
    grid: document.querySelector("\x5b\x64\x61\x74\x61\x2d\x67\x72\x69\x64\x5d"),
    empty: document.querySelector("\x5b\x64\x61\x74\x61\x2d\x65\x6d\x70\x74\x79\x5d"),
    search: document.querySelector("\x5b\x64\x61\x74\x61\x2d\x73\x65\x61\x72\x63\x68\x5d"),
    tag: document.querySelector("\x5b\x64\x61\x74\x61\x2d\x74\x61\x67\x5d"),
    launchLayer: document.querySelector("\x5b\x64\x61\x74\x61\x2d\x6c\x61\x75\x6e\x63\x68\x2d\x6c\x61\x79\x65\x72\x5d"),
    launchTitle: document.querySelector("\x5b\x64\x61\x74\x61\x2d\x6c\x61\x75\x6e\x63\x68\x2d\x74\x69\x74\x6c\x65\x5d"),
    launchStatus: document.querySelector("\x5b\x64\x61\x74\x61\x2d\x6c\x61\x75\x6e\x63\x68\x2d\x73\x74\x61\x74\x75\x73\x5d"),
    launchProgress: document.querySelector("\x5b\x64\x61\x74\x61\x2d\x6c\x61\x75\x6e\x63\x68\x2d\x70\x72\x6f\x67\x72\x65\x73\x73\x5d"),
    cancel: document.querySelector("\x5b\x64\x61\x74\x61\x2d\x63\x61\x6e\x63\x65\x6c\x5d"),
    playerLayer: document.querySelector("\x5b\x64\x61\x74\x61\x2d\x70\x6c\x61\x79\x65\x72\x2d\x6c\x61\x79\x65\x72\x5d"),
    player: document.querySelector("\x5b\x64\x61\x74\x61\x2d\x70\x6c\x61\x79\x65\x72\x5d"),
    playerTitle: document.querySelector("\x5b\x64\x61\x74\x61\x2d\x70\x6c\x61\x79\x65\x72\x2d\x74\x69\x74\x6c\x65\x5d"),
    playerTime: document.querySelector("\x5b\x64\x61\x74\x61\x2d\x70\x6c\x61\x79\x65\x72\x2d\x74\x69\x6d\x65\x5d"),
    fullscreen: document.querySelector("\x5b\x64\x61\x74\x61\x2d\x66\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e\x5d"),
    close: document.querySelector("\x5b\x64\x61\x74\x61\x2d\x63\x6c\x6f\x73\x65\x5d")
  }, _0x1b90bf_3 = _0x1b90bf_0 => new Promise(_0x1b90bf_1 => setTimeout(_0x1b90bf_1, _0x1b90bf_0));
  function _0x1b90bf_4(_0x1b90bf_0, _0x1b90bf_1 = "") {
    _0x1b90bf_2.notice.textContent = _0x1b90bf_0, _0x1b90bf_2.notice.className = "\x6e\x6f\x74\x69\x63\x65" + (_0x1b90bf_1 ? `\x20${_0x1b90bf_1}` : "");
  }
  function _0x1b90bf_5(_0x1b90bf_0, _0x1b90bf_1 = "") {
    _0x1b90bf_2.provider.querySelector("\x62").textContent = _0x1b90bf_0, _0x1b90bf_2.provider.className = "\x70\x72\x6f\x76\x69\x64\x65\x72\x2d\x73\x74\x61\x74\x65" + (_0x1b90bf_1 ? `\x20${_0x1b90bf_1}` : "");
  }
  async function _0x1b90bf_6(_0x1b90bf_0 = !1) {
    if (!_0x1b90bf_0 && _0x1b90bf_1.token && _0x1b90bf_1.tokenExpiresAt > Date.now() + 3e4) return _0x1b90bf_1.token;
    const _0x1b90bf_2 = await async function() {
      if (window.parent === window) return null;
      const _0x1b90bf_0 = `\x63\x6c\x6f\x75\x64\x2d${Date.now()}\x2d${Math.random().toString(36).slice(2)}`;
      return new Promise(_0x1b90bf_1 => {
        let _0x1b90bf_2 = !1;
        const _0x1b90bf_3 = _0x1b90bf_0 => {
          _0x1b90bf_2 || (_0x1b90bf_2 = !0, clearTimeout(_0x1b90bf_5), window.removeEventListener("\x6d\x65\x73\x73\x61\x67\x65", _0x1b90bf_4), 
          _0x1b90bf_1(_0x1b90bf_0));
        }, _0x1b90bf_4 = _0x1b90bf_1 => {
          _0x1b90bf_1.source === window.parent && _0x1b90bf_1.origin === location.origin && "\x6e\x79\x78\x3a\x61\x63\x63\x6f\x75\x6e\x74\x2d\x74\x6f\x6b\x65\x6e\x2d\x72\x65\x73\x70\x6f\x6e\x73\x65" === _0x1b90bf_1.data?.type && _0x1b90bf_1.data?.requestId === _0x1b90bf_0 && _0x1b90bf_3({
            available: !0,
            token: String(_0x1b90bf_1.data.token || "")
          });
        }, _0x1b90bf_5 = setTimeout(() => _0x1b90bf_3(null), 2500);
        window.addEventListener("\x6d\x65\x73\x73\x61\x67\x65", _0x1b90bf_4), window.parent.postMessage({
          type: "\x6e\x79\x78\x3a\x61\x63\x63\x6f\x75\x6e\x74\x2d\x74\x6f\x6b\x65\x6e\x2d\x72\x65\x71\x75\x65\x73\x74",
          requestId: _0x1b90bf_0
        }, location.origin);
      });
    }();
    if (_0x1b90bf_2?.available) return _0x1b90bf_1.parentAuth = !0, _0x1b90bf_1.token = _0x1b90bf_2.token, 
    _0x1b90bf_1.tokenExpiresAt = _0x1b90bf_1.token ? Date.now() + 27e5 : 0, _0x1b90bf_1.token;
    _0x1b90bf_1.parentAuth = !1;
    const _0x1b90bf_3 = await async function() {
      if (_0x1b90bf_1.directAuthPromise) return _0x1b90bf_1.directAuthPromise;
      _0x1b90bf_1.directAuthPromise = (async () => {
        const _0x1b90bf_0 = await _0x1b90bf_8("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/\x61\x70\x69\x2f\x66\x6f\x75\x6e\x64\x65\x72\x2d\x70\x72\x6f\x66\x69\x6c\x65\x2f\x61\x75\x74\x68\x2d\x63\x6f\x6e\x66\x69\x67", {
          cache: "\x6e\x6f\x2d\x73\x74\x6f\x72\x65"
        }, !1);
        if (!_0x1b90bf_0?.enabled) return null;
        const [{initializeApp: _0x1b90bf_1, getApps: _0x1b90bf_2}, {getAuth: _0x1b90bf_3, setPersistence: _0x1b90bf_4, \u{62}\u{72}\u{6f}\u{77}\u{73}\u{65}\u{72}\u{4c}\u{6f}\u{63}\u{61}\u{6c}\u{50}\u{65}\u{72}\u{73}\u{69}\u{73}\u{74}\u{65}\u{6e}\u{63}\u{65}: _0x1b90bf_5}] = await Promise.all([ import("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x67\x73\x74\x61\x74\x69\x63\x2e\x63\x6f\x6d\x2f\x66\x69\x72\x65\x62\x61\x73\x65\x6a\x73\x2f\x31\x31\x2e\x31\x30\x2e\x30\x2f\x66\x69\x72\x65\x62\x61\x73\x65\x2d\x61\x70\x70\x2e\x6a\x73"), import("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x67\x73\x74\x61\x74\x69\x63\x2e\x63\x6f\x6d\x2f\x66\x69\x72\x65\x62\x61\x73\x65\x6a\x73\x2f\x31\x31\x2e\x31\x30\x2e\x30\x2f\x66\x69\x72\x65\x62\x61\x73\x65\x2d\x61\x75\x74\x68\x2e\x6a\x73") ]), _0x1b90bf_6 = _0x1b90bf_3(_0x1b90bf_2().find(_0x1b90bf_0 => "\x6e\x79\x78\x2d\x66\x6f\x75\x6e\x64\x65\x72\x2d\x6f\x77\x6e\x65\x72" === _0x1b90bf_0.name) || _0x1b90bf_1({
          apiKey: _0x1b90bf_0.apiKey,
          authDomain: `${_0x1b90bf_0.projectId}\x2e\x66\x69\x72\x65\x62\x61\x73\x65\x61\x70\x70\x2e\x63\x6f\x6d`,
          projectId: _0x1b90bf_0.projectId
        }, "\x6e\x79\x78\x2d\x66\x6f\x75\x6e\x64\x65\x72\x2d\x6f\x77\x6e\x65\x72"));
        try {
          await _0x1b90bf_4(_0x1b90bf_6, _0x1b90bf_5);
        } catch {}
        return "\x66\x75\x6e\x63\x74\x69\x6f\x6e" == typeof _0x1b90bf_6.authStateReady && await _0x1b90bf_6.authStateReady(), 
        _0x1b90bf_6;
      })();
      try {
        return await _0x1b90bf_1.directAuthPromise;
      } catch (_0x1b90bf_0) {
        throw _0x1b90bf_1.directAuthPromise = null, _0x1b90bf_0;
      }
    }();
    return _0x1b90bf_1.token = _0x1b90bf_3?.currentUser ? await _0x1b90bf_3.currentUser.getIdToken(_0x1b90bf_0) : "", 
    _0x1b90bf_1.tokenExpiresAt = _0x1b90bf_1.token ? Date.now() + 27e5 : 0, _0x1b90bf_1.token;
  }
  function _0x1b90bf_7(_0x1b90bf_0, _0x1b90bf_1 = "\x43\x6c\x6f\x75\x64\x20\x47\x61\x6d\x69\x6e\x67\x20\x72\x65\x63\x65\x69\x76\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x70\x72\x6f\x76\x69\x64\x65\x72\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x2e\x20\x54\x72\x79\x20\x61\x67\x61\x69\x6e\x20\x69\x6e\x20\x61\x20\x6d\x6f\x6d\x65\x6e\x74\x2e") {
    const _0x1b90bf_2 = String(_0x1b90bf_0 || "").trim();
    return !_0x1b90bf_2 || /<!doctype\s+html|<html\b|<body\b|cloudflare|unexpected token.+json|not valid json/i.test(_0x1b90bf_2) || /<[a-z][\s\S]*>/i.test(_0x1b90bf_2) ? _0x1b90bf_1 : _0x1b90bf_2.replace(/\s+/g, "\x20").slice(0, 240);
  }
  async function _0x1b90bf_8(_0x1b90bf_0, _0x1b90bf_1 = {}, _0x1b90bf_2 = !0, _0x1b90bf_3 = !0) {
    const _0x1b90bf_4 = new Headers(_0x1b90bf_1.headers || {});
    if (_0x1b90bf_2) {
      const _0x1b90bf_0 = await _0x1b90bf_6(!_0x1b90bf_3);
      if (!_0x1b90bf_0) {
        const _0x1b90bf_0 = new Error("\x53\x69\x67\x6e\x20\x69\x6e\x20\x74\x6f\x20\x75\x73\x65\x20\x43\x6c\x6f\x75\x64\x20\x47\x61\x6d\x69\x6e\x67\x2e");
        throw _0x1b90bf_0.status = 401, _0x1b90bf_0;
      }
      _0x1b90bf_4.set("\x41\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e", `\x42\x65\x61\x72\x65\x72\x20${_0x1b90bf_0}`);
    }
    const _0x1b90bf_5 = await fetch(_0x1b90bf_0, {
      ..._0x1b90bf_1,
      headers: _0x1b90bf_4
    });
    let _0x1b90bf_9 = null;
    if ((_0x1b90bf_5.headers.get("\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65") || "").includes("\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e")) try {
      _0x1b90bf_9 = await _0x1b90bf_5.json();
    } catch {
      _0x1b90bf_9 = {
        error: _0x1b90bf_7("", `\x43\x6c\x6f\x75\x64\x20\x47\x61\x6d\x69\x6e\x67\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x75\x6e\x72\x65\x61\x64\x61\x62\x6c\x65\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x28${_0x1b90bf_5.status}\x29\x2e\x20\x54\x72\x79\x20\x61\x67\x61\x69\x6e\x20\x69\x6e\x20\x61\x20\x6d\x6f\x6d\x65\x6e\x74\x2e`)
      };
    } else _0x1b90bf_9 = {
      error: _0x1b90bf_7(await _0x1b90bf_5.text(), `\x43\x6c\x6f\x75\x64\x20\x47\x61\x6d\x69\x6e\x67\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x61\x6e\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x72\x65\x73\x70\x6f\x6e\x73\x65\x20\x28${_0x1b90bf_5.status}\x29\x2e\x20\x54\x72\x79\x20\x61\x67\x61\x69\x6e\x20\x69\x6e\x20\x61\x20\x6d\x6f\x6d\x65\x6e\x74\x2e`)
    };
    if (!_0x1b90bf_5.ok) {
      if (401 === _0x1b90bf_5.status && _0x1b90bf_2 && _0x1b90bf_3) return _0x1b90bf_8(_0x1b90bf_0, _0x1b90bf_1, !0, !1);
      const _0x1b90bf_4 = new Error(_0x1b90bf_7(_0x1b90bf_9?.error, `\x43\x6c\x6f\x75\x64\x20\x47\x61\x6d\x69\x6e\x67\x20\x69\x73\x20\x74\x65\x6d\x70\x6f\x72\x61\x72\x69\x6c\x79\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x20\x28${_0x1b90bf_5.status}\x29\x2e\x20\x54\x72\x79\x20\x61\x67\x61\x69\x6e\x20\x69\x6e\x20\x61\x20\x6d\x6f\x6d\x65\x6e\x74\x2e`));
      throw _0x1b90bf_4.status = _0x1b90bf_5.status, _0x1b90bf_4;
    }
    return _0x1b90bf_9;
  }
  function _0x1b90bf_9(_0x1b90bf_0, _0x1b90bf_3) {
    const _0x1b90bf_5 = document.createElement("\x61\x72\x74\x69\x63\x6c\x65");
    _0x1b90bf_5.className = "\x67\x61\x6d\x65\x2d\x63\x61\x72\x64";
    const _0x1b90bf_6 = document.createElement("\x64\x69\x76");
    _0x1b90bf_6.className = "\x67\x61\x6d\x65\x2d\x61\x72\x74";
    const _0x1b90bf_7 = function(_0x1b90bf_0) {
      try {
        const _0x1b90bf_1 = new URL(String(_0x1b90bf_0 || ""), location.href);
        return "\x68\x74\x74\x70\x73\x3a" === _0x1b90bf_1.protocol ? _0x1b90bf_1.href : "";
      } catch {
        return "";
      }
    }(_0x1b90bf_0.image || _0x1b90bf_0.cover);
    if (_0x1b90bf_7) {
      const _0x1b90bf_0 = document.createElement("\x69\x6d\x67");
      _0x1b90bf_0.src = _0x1b90bf_7, _0x1b90bf_0.alt = "", _0x1b90bf_0.loading = _0x1b90bf_3 < 18 ? "\x65\x61\x67\x65\x72" : "\x6c\x61\x7a\x79", 
      _0x1b90bf_0.decoding = "\x61\x73\x79\x6e\x63", _0x1b90bf_3 < 8 && (_0x1b90bf_0.fetchPriority = "\x68\x69\x67\x68"), 
      _0x1b90bf_0.referrerPolicy = "\x73\x61\x6d\x65\x2d\x6f\x72\x69\x67\x69\x6e", _0x1b90bf_0.addEventListener("\x65\x72\x72\x6f\x72", () => _0x1b90bf_0.remove(), {
        once: !0
      }), _0x1b90bf_6.append(_0x1b90bf_0);
    }
    const _0x1b90bf_8 = document.createElement("\x64\x69\x76");
    _0x1b90bf_8.className = "\x67\x61\x6d\x65\x2d\x63\x6f\x70\x79";
    const _0x1b90bf_9 = document.createElement("\x68\x33");
    _0x1b90bf_9.textContent = _0x1b90bf_0.name, _0x1b90bf_9.title = _0x1b90bf_0.name;
    const _0x1b90bf_11 = document.createElement("\x64\x69\x76");
    _0x1b90bf_11.className = "\x74\x61\x67\x73", (_0x1b90bf_0.tags || []).slice(0, 3).forEach(_0x1b90bf_0 => {
      const _0x1b90bf_1 = document.createElement("\x73\x70\x61\x6e");
      _0x1b90bf_1.textContent = _0x1b90bf_0, _0x1b90bf_11.append(_0x1b90bf_1);
    });
    const _0x1b90bf_12 = document.createElement("\x62\x75\x74\x74\x6f\x6e");
    return _0x1b90bf_12.type = "\x62\x75\x74\x74\x6f\x6e", _0x1b90bf_12.className = "\x70\x6c\x61\x79", _0x1b90bf_12.textContent = "\x50\x6c\x61\x79", 
    _0x1b90bf_12.disabled = !_0x1b90bf_1.configured || _0x1b90bf_1.launching || Date.now() < _0x1b90bf_1.retryUntil, 
    _0x1b90bf_12.addEventListener("\x63\x6c\x69\x63\x6b", () => {
      !async function(_0x1b90bf_0) {
        if (!(_0x1b90bf_1.launching || Date.now() < _0x1b90bf_1.retryUntil) && _0x1b90bf_10()) {
          _0x1b90bf_1.launching = !0, _0x1b90bf_1.cancelled = !1, _0x1b90bf_1.launchTimedOut = !1, 
          _0x1b90bf_1.launchController = new AbortController, clearTimeout(_0x1b90bf_1.launchDeadlineTimer), 
          _0x1b90bf_1.launchDeadlineTimer = setTimeout(() => {
            _0x1b90bf_1.launchTimedOut = !0, _0x1b90bf_1.launchController?.abort();
          }, 15e4), _0x1b90bf_a(), _0x1b90bf_2.launchLayer.hidden = !1, _0x1b90bf_c(!0), _0x1b90bf_2.launchTitle.textContent = _0x1b90bf_0.name, 
          _0x1b90bf_b("\x73\x74\x61\x72\x74\x69\x6e\x67");
          try {
            const _0x1b90bf_2 = await _0x1b90bf_d(_0x1b90bf_0);
            if (_0x1b90bf_1.cancelled) return;
            if ("\x71\x75\x65\x75\x65" === _0x1b90bf_2?.status && await _0x1b90bf_e(), _0x1b90bf_1.cancelled) return;
            if (!_0x1b90bf_1.session?.id) throw new Error("\x43\x6c\x6f\x75\x64\x20\x47\x61\x6d\x69\x6e\x67\x20\x64\x69\x64\x20\x6e\x6f\x74\x20\x63\x72\x65\x61\x74\x65\x20\x61\x20\x73\x65\x73\x73\x69\x6f\x6e\x2e");
            await _0x1b90bf_f();
          } catch (_0x1b90bf_3) {
            _0x1b90bf_1.cancelled || (_0x1b90bf_4(_0x1b90bf_1.launchTimedOut ? "\x54\x68\x65\x20\x70\x72\x6f\x76\x69\x64\x65\x72\x20\x74\x6f\x6f\x6b\x20\x74\x6f\x6f\x20\x6c\x6f\x6e\x67\x20\x74\x6f\x20\x70\x72\x65\x70\x61\x72\x65\x20\x74\x68\x69\x73\x20\x67\x61\x6d\x65\x2e\x20\x54\x72\x79\x20\x61\x67\x61\x69\x6e\x20\x69\x6e\x20\x61\x20\x6d\x6f\x6d\x65\x6e\x74\x2e" : "\x41\x62\x6f\x72\x74\x45\x72\x72\x6f\x72" === _0x1b90bf_3?.name ? "\x43\x6c\x6f\x75\x64\x20\x47\x61\x6d\x69\x6e\x67\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x66\x69\x6e\x69\x73\x68\x20\x70\x72\x65\x70\x61\x72\x69\x6e\x67\x20\x74\x68\x69\x73\x20\x67\x61\x6d\x65\x2e" : _0x1b90bf_3.message || "\x43\x6c\x6f\x75\x64\x20\x47\x61\x6d\x69\x6e\x67\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x6c\x61\x75\x6e\x63\x68\x20\x74\x68\x69\x73\x20\x67\x61\x6d\x65\x2e", "\x65\x72\x72\x6f\x72"), 
            _0x1b90bf_3.retryUntil && function(_0x1b90bf_0) {
              _0x1b90bf_1.retryUntil = _0x1b90bf_0, clearInterval(_0x1b90bf_1.retryTimer);
              const _0x1b90bf_2 = () => {
                const _0x1b90bf_0 = Math.max(0, Math.ceil((_0x1b90bf_1.retryUntil - Date.now()) / 1e3));
                if (!_0x1b90bf_0) return clearInterval(_0x1b90bf_1.retryTimer), _0x1b90bf_1.retryTimer = null, 
                _0x1b90bf_1.retryUntil = 0, _0x1b90bf_4("\x59\x6f\x75\x20\x63\x61\x6e\x20\x74\x72\x79\x20\x6c\x61\x75\x6e\x63\x68\x69\x6e\x67\x20\x61\x20\x67\x61\x6d\x65\x20\x61\x67\x61\x69\x6e\x2e", "\x72\x65\x61\x64\x79"), 
                void _0x1b90bf_a();
                _0x1b90bf_4(`\x50\x6c\x65\x61\x73\x65\x20\x77\x61\x69\x74\x20${_0x1b90bf_0}\x20\x73\x65\x63\x6f\x6e\x64\x73\x20\x62\x65\x66\x6f\x72\x65\x20\x74\x72\x79\x69\x6e\x67\x20\x61\x67\x61\x69\x6e\x2e`, "\x65\x72\x72\x6f\x72");
              };
              _0x1b90bf_2(), _0x1b90bf_1.retryTimer = setInterval(_0x1b90bf_2, 1e3), _0x1b90bf_a();
            }(_0x1b90bf_3.retryUntil)), await _0x1b90bf_14(!1);
          } finally {
            clearTimeout(_0x1b90bf_1.launchDeadlineTimer), _0x1b90bf_1.launchDeadlineTimer = null, 
            _0x1b90bf_1.launchController = null, _0x1b90bf_1.launching = !1, _0x1b90bf_2.launchLayer.hidden = !0, 
            _0x1b90bf_a();
          }
        }
      }(_0x1b90bf_0);
    }), _0x1b90bf_8.append(_0x1b90bf_9, _0x1b90bf_11, _0x1b90bf_12), _0x1b90bf_5.append(_0x1b90bf_6, _0x1b90bf_8), 
    _0x1b90bf_5;
  }
  function _0x1b90bf_a() {
    _0x1b90bf_2.network.disabled = _0x1b90bf_1.launching;
    const _0x1b90bf_0 = _0x1b90bf_2.search.value.trim().toLowerCase(), _0x1b90bf_3 = _0x1b90bf_2.tag.value.toLowerCase();
    _0x1b90bf_1.filtered = _0x1b90bf_1.games.filter(_0x1b90bf_1 => (!_0x1b90bf_0 || `${_0x1b90bf_1.name}\x20${_0x1b90bf_1.description}\x20${(_0x1b90bf_1.tags || []).join("\x20")}`.toLowerCase().includes(_0x1b90bf_0)) && (!_0x1b90bf_3 || (_0x1b90bf_1.tags || []).some(_0x1b90bf_0 => _0x1b90bf_0.toLowerCase() === _0x1b90bf_3))), 
    _0x1b90bf_2.grid.replaceChildren(..._0x1b90bf_1.filtered.map(_0x1b90bf_9)), _0x1b90bf_2.empty.hidden = _0x1b90bf_1.filtered.length > 0;
  }
  function _0x1b90bf_b(_0x1b90bf_0, _0x1b90bf_1) {
    _0x1b90bf_2.launchProgress.style.width = `${{
      creating_account: 18,
      account_ready: 40,
      requesting_game: 58,
      queue: 70,
      finished_queue: 88
    }[_0x1b90bf_0] || 12}\x25`;
    const _0x1b90bf_3 = {
      creating_account: "\x50\x72\x65\x70\x61\x72\x69\x6e\x67\x20\x61\x20\x70\x72\x6f\x76\x69\x64\x65\x72\x20\x73\x65\x73\x73\x69\x6f\x6e\u2026",
      account_ready: "\x50\x72\x6f\x76\x69\x64\x65\x72\x20\x73\x65\x73\x73\x69\x6f\x6e\x20\x72\x65\x61\x64\x79\x2e",
      requesting_game: "\x52\x65\x71\x75\x65\x73\x74\x69\x6e\x67\x20\x61\x20\x67\x61\x6d\x65\x20\x73\x65\x72\x76\x65\x72\u2026",
      queue: `\x57\x61\x69\x74\x69\x6e\x67\x20\x66\x6f\x72\x20\x61\x20\x67\x61\x6d\x65\x20\x73\x65\x72\x76\x65\x72${Number.isFinite(_0x1b90bf_1) ? `\x20\xb7\x20\x70\x6f\x73\x69\x74\x69\x6f\x6e\x20${_0x1b90bf_1}` : ""}\x2e`,
      finished_queue: "\x47\x61\x6d\x65\x20\x73\x65\x72\x76\x65\x72\x20\x61\x63\x71\x75\x69\x72\x65\x64\x2e\x20\x53\x74\x61\x72\x74\x69\x6e\x67\x20\x73\x74\x72\x65\x61\x6d\u2026"
    };
    _0x1b90bf_2.launchStatus.textContent = _0x1b90bf_3[_0x1b90bf_0] || "\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6e\x67\x20\x74\x6f\x20\x74\x68\x65\x20\x63\x6c\x6f\x75\x64\x20\x70\x72\x6f\x76\x69\x64\x65\x72\u2026";
  }
  function _0x1b90bf_c(_0x1b90bf_0) {
    document.documentElement.classList.toggle("\x63\x6c\x6f\x75\x64\x2d\x73\x65\x73\x73\x69\x6f\x6e\x2d\x61\x63\x74\x69\x76\x65", Boolean(_0x1b90bf_0)), 
    window.parent !== window && window.parent.postMessage({
      type: "\x6e\x79\x78\x3a\x63\x6c\x6f\x75\x64\x2d\x70\x6c\x61\x79\x65\x72",
      active: Boolean(_0x1b90bf_0)
    }, location.origin);
  }
  async function _0x1b90bf_d(_0x1b90bf_2, _0x1b90bf_3 = !0) {
    const _0x1b90bf_4 = new Headers({
      "\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65": "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e"
    }), _0x1b90bf_5 = await _0x1b90bf_6(!_0x1b90bf_3);
    if (!_0x1b90bf_5) throw new Error("\x53\x69\x67\x6e\x20\x69\x6e\x20\x74\x6f\x20\x75\x73\x65\x20\x43\x6c\x6f\x75\x64\x20\x47\x61\x6d\x69\x6e\x67\x2e");
    _0x1b90bf_4.set("\x41\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e", `\x42\x65\x61\x72\x65\x72\x20${_0x1b90bf_5}`);
    const _0x1b90bf_8 = await fetch(`${_0x1b90bf_0}\x2f\x73\x65\x73\x73\x69\x6f\x6e\x73`, {
      method: "\x50\x4f\x53\x54",
      headers: _0x1b90bf_4,
      body: JSON.stringify({
        gameKey: _0x1b90bf_2.key
      }),
      signal: _0x1b90bf_1.launchController?.signal
    });
    if (401 === _0x1b90bf_8.status && _0x1b90bf_3) return _0x1b90bf_d(_0x1b90bf_2, !1);
    if (!_0x1b90bf_8.ok) {
      let _0x1b90bf_0 = {};
      try {
        _0x1b90bf_0 = await _0x1b90bf_8.json();
      } catch {}
      const _0x1b90bf_1 = new Error(_0x1b90bf_7(_0x1b90bf_0.error, `\x43\x6c\x6f\x75\x64\x20\x47\x61\x6d\x69\x6e\x67\x20\x69\x73\x20\x74\x65\x6d\x70\x6f\x72\x61\x72\x69\x6c\x79\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x20\x28${_0x1b90bf_8.status}\x29\x2e\x20\x54\x72\x79\x20\x61\x67\x61\x69\x6e\x20\x69\x6e\x20\x61\x20\x6d\x6f\x6d\x65\x6e\x74\x2e`));
      if (429 === _0x1b90bf_8.status) {
        const _0x1b90bf_0 = _0x1b90bf_8.headers.get("\x52\x65\x74\x72\x79\x2d\x41\x66\x74\x65\x72"), _0x1b90bf_2 = Number(_0x1b90bf_0), _0x1b90bf_3 = _0x1b90bf_0 && Number.isFinite(_0x1b90bf_2) ? Date.now() + 1e3 * Math.max(0, _0x1b90bf_2) : Date.parse(_0x1b90bf_0 || "");
        Number.isFinite(_0x1b90bf_3) && _0x1b90bf_3 > Date.now() && (_0x1b90bf_1.retryUntil = _0x1b90bf_3);
      }
      throw _0x1b90bf_1;
    }
    if (!_0x1b90bf_8.body) throw new Error("\x43\x6c\x6f\x75\x64\x20\x47\x61\x6d\x69\x6e\x67\x20\x64\x69\x64\x20\x6e\x6f\x74\x20\x72\x65\x74\x75\x72\x6e\x20\x73\x65\x73\x73\x69\x6f\x6e\x20\x70\x72\x6f\x67\x72\x65\x73\x73\x2e");
    const _0x1b90bf_9 = _0x1b90bf_8.body.getReader(), _0x1b90bf_a = new TextDecoder;
    let _0x1b90bf_c = "", _0x1b90bf_e = null;
    for (;;) {
      const {done: _0x1b90bf_0, value: _0x1b90bf_3} = await _0x1b90bf_9.read();
      _0x1b90bf_c += _0x1b90bf_a.decode(_0x1b90bf_3 || new Uint8Array, {
        stream: !_0x1b90bf_0
      });
      const _0x1b90bf_4 = _0x1b90bf_c.split(/\r?\n/);
      _0x1b90bf_c = _0x1b90bf_0 ? "" : _0x1b90bf_4.pop() || "";
      for (const _0x1b90bf_5 of _0x1b90bf_4) {
        if (!_0x1b90bf_5.trim()) continue;
        let _0x1b90bf_0;
        try {
          _0x1b90bf_0 = JSON.parse(_0x1b90bf_5);
        } catch {
          continue;
        }
        if (_0x1b90bf_0.id && (_0x1b90bf_1.session = {
          id: _0x1b90bf_0.id,
          gameKey: _0x1b90bf_2.key,
          gameName: _0x1b90bf_2.name,
          state: "\x71\x75\x65\x75\x65" === _0x1b90bf_0.status ? "\x71\x75\x65\x75\x65\x64" : "\x72\x65\x61\x64\x79"
        }), _0x1b90bf_b(_0x1b90bf_0.status, _0x1b90bf_0.queuePosition), _0x1b90bf_e = _0x1b90bf_0, 
        "\x65\x72\x72\x6f\x72" === _0x1b90bf_0.status) throw new Error(_0x1b90bf_7(_0x1b90bf_0.error, "\x54\x68\x65\x20\x63\x6c\x6f\x75\x64\x20\x70\x72\x6f\x76\x69\x64\x65\x72\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x70\x72\x65\x70\x61\x72\x65\x20\x74\x68\x69\x73\x20\x67\x61\x6d\x65\x2e\x20\x54\x72\x79\x20\x61\x67\x61\x69\x6e\x20\x69\x6e\x20\x61\x20\x6d\x6f\x6d\x65\x6e\x74\x2e"));
      }
      if (_0x1b90bf_0) break;
    }
    return _0x1b90bf_e;
  }
  async function _0x1b90bf_e() {
    for (;!_0x1b90bf_1.cancelled && "\x71\x75\x65\x75\x65\x64" === _0x1b90bf_1.session?.state; ) {
      if (await _0x1b90bf_3(4e3), _0x1b90bf_1.cancelled) return;
      const _0x1b90bf_2 = await _0x1b90bf_8(`${_0x1b90bf_0}\x2f\x73\x65\x73\x73\x69\x6f\x6e\x73\x2f${encodeURIComponent(_0x1b90bf_1.session.id)}\x2f\x71\x75\x65\x75\x65`);
      if (_0x1b90bf_1.session = _0x1b90bf_2.session || _0x1b90bf_1.session, _0x1b90bf_b(_0x1b90bf_2.status, _0x1b90bf_2.queuePosition), 
      "\x66\x69\x6e\x69\x73\x68\x65\x64\x5f\x71\x75\x65\x75\x65" === _0x1b90bf_2.status || "\x72\x65\x61\x64\x79" === _0x1b90bf_1.session.state) return;
    }
    if (_0x1b90bf_1.cancelled) throw new Error("\x4c\x61\x75\x6e\x63\x68\x20\x63\x61\x6e\x63\x65\x6c\x6c\x65\x64\x2e");
  }
  async function _0x1b90bf_f() {
    const _0x1b90bf_2 = await _0x1b90bf_8(`${_0x1b90bf_0}\x2f\x73\x65\x73\x73\x69\x6f\x6e\x73\x2f${encodeURIComponent(_0x1b90bf_1.session.id)}\x2f\x73\x74\x61\x72\x74`, {
      method: "\x50\x4f\x53\x54"
    });
    if (_0x1b90bf_1.session = _0x1b90bf_2.session, !_0x1b90bf_1.session?.embedUrl) throw new Error("\x43\x6c\x6f\x75\x64\x20\x47\x61\x6d\x69\x6e\x67\x20\x64\x69\x64\x20\x6e\x6f\x74\x20\x72\x65\x74\x75\x72\x6e\x20\x61\x20\x70\x6c\x61\x79\x65\x72\x20\x61\x64\x64\x72\x65\x73\x73\x2e");
    _0x1b90bf_11();
  }
  function _0x1b90bf_10() {
    let _0x1b90bf_0;
    try {
      if ("\x66\x75\x6e\x63\x74\x69\x6f\x6e" != typeof RTCPeerConnection) throw new Error;
      return _0x1b90bf_0 = new RTCPeerConnection({
        iceServers: []
      }), _0x1b90bf_0.createDataChannel("\x73\x75\x70\x70\x6f\x72\x74\x2d\x63\x68\x65\x63\x6b"), !0;
    } catch {
      return _0x1b90bf_4("\x57\x65\x62\x52\x54\x43\x20\x69\x73\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x20\x69\x6e\x20\x74\x68\x69\x73\x20\x77\x6f\x72\x6b\x73\x70\x61\x63\x65\x2e\x20\x43\x6c\x6f\x75\x64\x20\x73\x74\x72\x65\x61\x6d\x69\x6e\x67\x20\x6e\x65\x65\x64\x73\x20\x69\x74\x2e\x20\x54\x72\x79\x20\x57\x6f\x72\x6b\x73\x70\x61\x63\x65\x20\x67\x61\x6d\x65\x73\x2c\x20\x61\x6e\x6f\x74\x68\x65\x72\x20\x77\x6f\x72\x6b\x73\x70\x61\x63\x65\x2c\x20\x6f\x72\x20\x61\x73\x6b\x20\x79\x6f\x75\x72\x20\x64\x65\x76\x69\x63\x65\x20\x61\x64\x6d\x69\x6e\x69\x73\x74\x72\x61\x74\x6f\x72\x20\x74\x6f\x20\x65\x6e\x61\x62\x6c\x65\x20\x69\x74\x2e", "\x65\x72\x72\x6f\x72"), 
      !1;
    } finally {
      _0x1b90bf_0?.close();
    }
  }
  function _0x1b90bf_11() {
    _0x1b90bf_2.playerTitle.textContent = _0x1b90bf_1.session.gameName || "\x43\x6c\x6f\x75\x64\x20\x47\x61\x6d\x69\x6e\x67";
    const _0x1b90bf_0 = new URL(_0x1b90bf_1.session.embedUrl, location.href);
    "\x72\x65\x73\x74\x72\x69\x63\x74\x65\x64" === _0x1b90bf_2.network.value ? _0x1b90bf_0.searchParams.set("\x6e\x65\x74\x77\x6f\x72\x6b", "\x72\x65\x73\x74\x72\x69\x63\x74\x65\x64") : _0x1b90bf_0.searchParams.delete("\x6e\x65\x74\x77\x6f\x72\x6b"), 
    _0x1b90bf_2.player.src = _0x1b90bf_0.href, _0x1b90bf_2.playerLayer.hidden = !1, 
    _0x1b90bf_2.launchLayer.hidden = !0, _0x1b90bf_c(!0), _0x1b90bf_1.pingFailures = 0, 
    clearInterval(_0x1b90bf_1.pingTimer), _0x1b90bf_1.pingTimer = setInterval(() => {
      _0x1b90bf_13();
    }, 15e3), clearInterval(_0x1b90bf_1.elapsedTimer), _0x1b90bf_1.elapsedTimer = setInterval(_0x1b90bf_12, 1e3), 
    _0x1b90bf_12(), _0x1b90bf_13();
  }
  function _0x1b90bf_12() {
    if (!_0x1b90bf_1.session?.startedAtMs) return void (_0x1b90bf_2.playerTime.textContent = "\x43\x6f\x6e\x6e\x65\x63\x74\x65\x64");
    const _0x1b90bf_0 = Math.max(0, Math.floor((Date.now() - _0x1b90bf_1.session.startedAtMs) / 1e3)), _0x1b90bf_3 = Math.max(0, Number(_0x1b90bf_1.session.maxSeconds || 0));
    _0x1b90bf_2.playerTime.textContent = _0x1b90bf_3 ? `${Math.floor(_0x1b90bf_0 / 60)}\x3a${String(_0x1b90bf_0 % 60).padStart(2, "\x30")}\x20\x2f\x20${Math.floor(_0x1b90bf_3 / 60)}\x3a${String(_0x1b90bf_3 % 60).padStart(2, "\x30")}` : `${Math.floor(_0x1b90bf_0 / 60)}\x3a${String(_0x1b90bf_0 % 60).padStart(2, "\x30")}`;
  }
  async function _0x1b90bf_13() {
    if (_0x1b90bf_1.session?.id && "\x61\x63\x74\x69\x76\x65" === _0x1b90bf_1.session.state) try {
      const _0x1b90bf_2 = await _0x1b90bf_8(`${_0x1b90bf_0}\x2f\x73\x65\x73\x73\x69\x6f\x6e\x73\x2f${encodeURIComponent(_0x1b90bf_1.session.id)}\x2f\x70\x69\x6e\x67`, {
        method: "\x50\x4f\x53\x54"
      });
      _0x1b90bf_1.pingFailures = 0, _0x1b90bf_2.sessionTimeLimitSeconds && (_0x1b90bf_1.session.maxSeconds = _0x1b90bf_2.sessionTimeLimitSeconds, 
      _0x1b90bf_1.session.startedAtMs = Date.now() - 1e3 * _0x1b90bf_2.sessionTimeUsedSeconds, 
      _0x1b90bf_12());
    } catch (_0x1b90bf_2) {
      _0x1b90bf_1.pingFailures += 1, _0x1b90bf_1.pingFailures >= 2 && _0x1b90bf_4(_0x1b90bf_2.message || "\x54\x68\x65\x20\x43\x6c\x6f\x75\x64\x20\x47\x61\x6d\x69\x6e\x67\x20\x73\x65\x73\x73\x69\x6f\x6e\x20\x6c\x6f\x73\x74\x20\x69\x74\x73\x20\x6b\x65\x65\x70\x61\x6c\x69\x76\x65\x2e", "\x65\x72\x72\x6f\x72");
    }
  }
  async function _0x1b90bf_14(_0x1b90bf_3 = !0) {
    const _0x1b90bf_5 = _0x1b90bf_1.session;
    if (_0x1b90bf_1.cancelled = !0, clearTimeout(_0x1b90bf_1.launchDeadlineTimer), _0x1b90bf_1.launchDeadlineTimer = null, 
    _0x1b90bf_1.launchController?.abort(), _0x1b90bf_1.session = null, clearInterval(_0x1b90bf_1.pingTimer), 
    clearInterval(_0x1b90bf_1.elapsedTimer), _0x1b90bf_1.pingTimer = null, _0x1b90bf_1.elapsedTimer = null, 
    _0x1b90bf_2.player.removeAttribute("\x73\x72\x63"), _0x1b90bf_2.playerLayer.hidden = !0, 
    _0x1b90bf_c(!1), _0x1b90bf_5?.id) try {
      await _0x1b90bf_8(`${_0x1b90bf_0}\x2f\x73\x65\x73\x73\x69\x6f\x6e\x73\x2f${encodeURIComponent(_0x1b90bf_5.id)}`, {
        method: "\x44\x45\x4c\x45\x54\x45"
      });
    } catch {}
    _0x1b90bf_3 && _0x1b90bf_4("\x43\x6c\x6f\x75\x64\x20\x47\x61\x6d\x69\x6e\x67\x20\x73\x65\x73\x73\x69\x6f\x6e\x20\x65\x6e\x64\x65\x64\x2e", "\x72\x65\x61\x64\x79");
  }
  async function _0x1b90bf_15() {
    try {
      _0x1b90bf_2.network.value = "\x72\x65\x73\x74\x72\x69\x63\x74\x65\x64" === localStorage.getItem("\x6e\x79\x78\x2d\x63\x6c\x6f\x75\x64\x2d\x6e\x65\x74\x77\x6f\x72\x6b") ? "\x72\x65\x73\x74\x72\x69\x63\x74\x65\x64" : "\x61\x75\x74\x6f";
    } catch {}
    _0x1b90bf_2.network.addEventListener("\x63\x68\x61\x6e\x67\x65", () => {
      try {
        localStorage.setItem("\x6e\x79\x78\x2d\x63\x6c\x6f\x75\x64\x2d\x6e\x65\x74\x77\x6f\x72\x6b", _0x1b90bf_2.network.value);
      } catch {}
    }), _0x1b90bf_2.search.addEventListener("\x69\x6e\x70\x75\x74", _0x1b90bf_a), _0x1b90bf_2.tag.addEventListener("\x63\x68\x61\x6e\x67\x65", _0x1b90bf_a), 
    _0x1b90bf_2.cancel.addEventListener("\x63\x6c\x69\x63\x6b", () => {
      _0x1b90bf_14(!1);
    }), _0x1b90bf_2.close.addEventListener("\x63\x6c\x69\x63\x6b", () => {
      _0x1b90bf_14();
    }), _0x1b90bf_2.fullscreen.addEventListener("\x63\x6c\x69\x63\x6b", () => _0x1b90bf_2.playerLayer.requestFullscreen?.()), 
    document.addEventListener("\x76\x69\x73\x69\x62\x69\x6c\x69\x74\x79\x63\x68\x61\x6e\x67\x65", () => {
      document.hidden || _0x1b90bf_13();
    }), addEventListener("\x6f\x6e\x6c\x69\x6e\x65", () => {
      _0x1b90bf_13();
    }), addEventListener("\x6d\x65\x73\x73\x61\x67\x65", _0x1b90bf_0 => {
      _0x1b90bf_0.origin === location.origin && _0x1b90bf_0.source === _0x1b90bf_2.player.contentWindow && "\x6e\x79\x78\x3a\x63\x6c\x6f\x75\x64\x2d\x70\x6c\x61\x79\x65\x72\x2d\x65\x72\x72\x6f\x72" === _0x1b90bf_0.data?.type && (_0x1b90bf_4(_0x1b90bf_7(_0x1b90bf_0.data.message, "\x54\x68\x65\x20\x63\x6c\x6f\x75\x64\x20\x73\x74\x72\x65\x61\x6d\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x70\x6c\x61\x79\x20\x6f\x6e\x20\x74\x68\x69\x73\x20\x64\x65\x76\x69\x63\x65\x2e"), "\x65\x72\x72\x6f\x72"), 
      _0x1b90bf_14(!1));
    }), document.querySelector("\x5b\x64\x61\x74\x61\x2d\x68\x6f\x6d\x65\x5d").addEventListener("\x63\x6c\x69\x63\x6b", _0x1b90bf_0 => {
      window.parent !== window && (_0x1b90bf_0.preventDefault(), window.parent.postMessage({
        type: "\x6e\x79\x78\x3a\x67\x6f\x2d\x68\x6f\x6d\x65"
      }, location.origin));
    });
    try {
      const _0x1b90bf_3 = await _0x1b90bf_8(`${_0x1b90bf_0}\x2f\x73\x74\x61\x74\x75\x73`, {}, !1);
      if (!0 === _0x1b90bf_3.maintenance) return _0x1b90bf_1.configured = !1, _0x1b90bf_5("\x53\x74\x72\x61\x74\x75\x73\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65", "\x65\x72\x72\x6f\x72"), 
      _0x1b90bf_4("\x53\x74\x72\x61\x74\x75\x73\x20\x69\x73\x20\x63\x75\x72\x72\x65\x6e\x74\x6c\x79\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x2e\x20\x4c\x75\x6e\x61\x20\x69\x73\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x20\x61\x62\x6f\x76\x65\x2e", "\x65\x72\x72\x6f\x72"), 
      _0x1b90bf_2.network.disabled = !0, _0x1b90bf_2.search.disabled = !0, void (_0x1b90bf_2.tag.disabled = !0);
      if (!_0x1b90bf_10()) return void _0x1b90bf_5("\x53\x74\x72\x65\x61\x6d\x69\x6e\x67\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65", "\x65\x72\x72\x6f\x72");
      if (_0x1b90bf_1.configured = !0 === _0x1b90bf_3.configured, _0x1b90bf_5(_0x1b90bf_1.configured ? "\x53\x74\x72\x61\x74\x75\x73\x20\x72\x65\x61\x64\x79" : "\x53\x65\x74\x75\x70\x20\x72\x65\x71\x75\x69\x72\x65\x64", _0x1b90bf_1.configured ? "\x72\x65\x61\x64\x79" : "\x65\x72\x72\x6f\x72"), 
      _0x1b90bf_1.configured || _0x1b90bf_4(_0x1b90bf_3.setupMessage || "\x43\x6c\x6f\x75\x64\x20\x47\x61\x6d\x69\x6e\x67\x20\x6e\x65\x65\x64\x73\x20\x61\x20\x63\x6f\x6e\x66\x69\x67\x75\x72\x65\x64\x20\x70\x72\x6f\x76\x69\x64\x65\x72\x20\x61\x63\x63\x6f\x75\x6e\x74\x2e\x20\x41\x73\x6b\x20\x74\x68\x65\x20\x6f\x77\x6e\x65\x72\x20\x74\x6f\x20\x66\x69\x6e\x69\x73\x68\x20\x73\x65\x74\x75\x70\x2e", "\x65\x72\x72\x6f\x72"), 
      !await _0x1b90bf_6()) throw new Error("\x53\x69\x67\x6e\x20\x69\x6e\x20\x74\x6f\x20\x76\x69\x65\x77\x20\x61\x6e\x64\x20\x6c\x61\x75\x6e\x63\x68\x20\x43\x6c\x6f\x75\x64\x20\x47\x61\x6d\x69\x6e\x67\x20\x74\x69\x74\x6c\x65\x73\x2e");
      const _0x1b90bf_7 = await _0x1b90bf_8(`${_0x1b90bf_0}\x2f\x63\x61\x74\x61\x6c\x6f\x67`);
      _0x1b90bf_1.games = Array.isArray(_0x1b90bf_7.games) ? _0x1b90bf_7.games : [], function() {
        const _0x1b90bf_0 = [ ...new Set(_0x1b90bf_1.games.flatMap(_0x1b90bf_0 => _0x1b90bf_0.tags || [])) ].sort((_0x1b90bf_0, _0x1b90bf_1) => _0x1b90bf_0.localeCompare(_0x1b90bf_1));
        _0x1b90bf_2.tag.replaceChildren(new Option("\x41\x6c\x6c\x20\x63\x61\x74\x65\x67\x6f\x72\x69\x65\x73", ""), ..._0x1b90bf_0.map(_0x1b90bf_0 => new Option(_0x1b90bf_0, _0x1b90bf_0)));
      }(), _0x1b90bf_a(), _0x1b90bf_1.configured && _0x1b90bf_4(`${_0x1b90bf_1.games.length}\x20\x67\x61\x6d\x65\x73\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x2e`, "\x72\x65\x61\x64\x79"), 
      await async function() {
        const _0x1b90bf_3 = await _0x1b90bf_8(`${_0x1b90bf_0}\x2f\x73\x65\x73\x73\x69\x6f\x6e`);
        if (_0x1b90bf_3.session) if (_0x1b90bf_1.session = _0x1b90bf_3.session, "\x61\x63\x74\x69\x76\x65" === _0x1b90bf_1.session.state && _0x1b90bf_1.session.embedUrl) _0x1b90bf_11(); else if ("\x71\x75\x65\x75\x65\x64" === _0x1b90bf_1.session.state) {
          _0x1b90bf_1.launching = !0, _0x1b90bf_2.launchLayer.hidden = !1, _0x1b90bf_c(!0), 
          _0x1b90bf_2.launchTitle.textContent = _0x1b90bf_1.session.gameName || "\x43\x6c\x6f\x75\x64\x20\x67\x61\x6d\x65";
          try {
            await _0x1b90bf_e(), _0x1b90bf_1.cancelled || await _0x1b90bf_f();
          } finally {
            _0x1b90bf_1.launching = !1, _0x1b90bf_2.launchLayer.hidden = !0, _0x1b90bf_a();
          }
        } else if ("\x72\x65\x61\x64\x79" === _0x1b90bf_1.session.state) {
          _0x1b90bf_1.launching = !0;
          try {
            await _0x1b90bf_f();
          } finally {
            _0x1b90bf_1.launching = !1, _0x1b90bf_a();
          }
        }
      }();
    } catch (_0x1b90bf_3) {
      _0x1b90bf_4(_0x1b90bf_3.message || "\x43\x6c\x6f\x75\x64\x20\x47\x61\x6d\x69\x6e\x67\x20\x69\x73\x20\x75\x6e\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x2e", "\x65\x72\x72\x6f\x72"), _0x1b90bf_1.games.length || (_0x1b90bf_2.empty.hidden = !1);
    }
  }
  const _0x1b90bf_16 = document.querySelector("\x5b\x64\x61\x74\x61\x2d\x6c\x75\x6e\x61\x2d\x64\x69\x61\x6c\x6f\x67\x5d");
  _0x1b90bf_16?.open ? _0x1b90bf_16.addEventListener("\x63\x6c\x6f\x73\x65", () => {
    _0x1b90bf_15();
  }, {
    once: !0
  }) : _0x1b90bf_15();
})();
