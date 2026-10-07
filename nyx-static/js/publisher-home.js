import { startHomeSponsors as _0xe3575c_0 } from "\x2e\x2f\x40\x72\x66\x61\x63\x62\x31\x33\x64\x31\x64\x39\x34\x30\x37\x62\x65\x61\x35\x63\x66\x66\x63\x64\x65\x66\x21\x2e\x6a\x73";

import { startSocialSponsor as _0xe3575c_1 } from "\x2e\x2f\x40\x72\x36\x31\x65\x38\x61\x65\x64\x33\x30\x36\x34\x39\x64\x32\x62\x61\x36\x66\x63\x37\x37\x30\x64\x31\x21\x2e\x6a\x73";

import { startAdcoins as _0xe3575c_2 } from "\x2e\x2f\x40\x72\x64\x32\x38\x35\x34\x35\x31\x61\x30\x63\x63\x39\x35\x37\x34\x35\x63\x35\x61\x32\x62\x34\x36\x39\x21\x2e\x6a\x73";

import { publisherConfig as _0xe3575c_3, publisherHostAllowed as _0x2d90e6_1, publisherMode as _0xe3575c_4, popupPolicy as _0xe3575c_5 } from "\x2e\x2f\x40\x72\x33\x65\x35\x64\x65\x32\x30\x61\x34\x30\x64\x33\x35\x32\x32\x39\x33\x62\x31\x39\x38\x62\x38\x37\x21\x2e\x6a\x73";

const _0xe3575c_6 = "\x6e\x79\x78\x2e\x70\x75\x62\x6c\x69\x73\x68\x65\x72\x2e\x68\x6f\x6d\x65\x2e\x76\x31", _0xe3575c_7 = "\x6e\x79\x78\x2e\x70\x75\x62\x6c\x69\x73\x68\x65\x72\x2e\x68\x6f\x6d\x65";

function _0xe3575c_8(_0xe3575c_0) {
  if (document.hidden || !document.body.classList.contains("\x77\x6f\x72\x6b\x73\x70\x61\x63\x65\x2d\x73\x68\x65\x6c\x6c") || document.body.classList.contains("\x6e\x79\x78\x2d\x6c\x6f\x61\x64\x69\x6e\x67\x2d\x61\x63\x74\x69\x76\x65")) return null;
  const _0xe3575c_1 = _0xe3575c_0?.closest?.("\x2e\x77\x6f\x72\x6b\x73\x70\x61\x63\x65\x2d\x68\x6f\x6d\x65\x2e\x6e\x79\x78\x2d\x6d\x69\x6e\x69\x6d\x61\x6c\x2d\x68\x6f\x6d\x65\x3a\x6e\x6f\x74\x28\x2e\x68\x69\x64\x64\x65\x6e\x29");
  return _0xe3575c_1?.isConnected && _0xe3575c_1.getClientRects().length && _0xe3575c_1.closest("\x2e\x77\x6f\x72\x6b\x73\x70\x61\x63\x65\x2d\x77\x69\x6e\x64\x6f\x77\x2e\x77\x6f\x72\x6b\x73\x70\x61\x63\x65\x2d\x62\x6c\x61\x6e\x6b") ? "\x76\x69\x73\x69\x62\x6c\x65" !== getComputedStyle(_0xe3575c_1).visibility ? null : _0xe3575c_1 : null;
}

function _0xe3575c_9(_0xe3575c_0, _0xe3575c_1) {
  if ("\x61\x64\x6b\x69\x64" !== _0xe3575c_4()) return _0xe3575c_1 ? null : _0xe3575c_8(_0xe3575c_0);
  if (document.hidden || !document.body.classList.contains("\x77\x6f\x72\x6b\x73\x70\x61\x63\x65\x2d\x73\x68\x65\x6c\x6c") || document.body.classList.contains("\x6e\x79\x78\x2d\x6c\x6f\x61\x64\x69\x6e\x67\x2d\x61\x63\x74\x69\x76\x65")) return null;
  const _0xe3575c_2 = _0xe3575c_1 || _0xe3575c_0;
  return _0xe3575c_2?.isConnected && _0xe3575c_2.getClientRects().length && "\x76\x69\x73\x69\x62\x6c\x65" === getComputedStyle(_0xe3575c_2).visibility ? _0xe3575c_1 && !_0xe3575c_a(_0xe3575c_1) ? null : _0xe3575c_2 : null;
}

function _0xe3575c_a(_0xe3575c_0) {
  try {
    const _0xe3575c_1 = new URL(_0xe3575c_0.contentWindow.location.href);
    return _0xe3575c_0.matches("\x69\x66\x72\x61\x6d\x65\x2e\x76\x69\x65\x77") && _0xe3575c_1.origin === location.origin && (/^\/apps\/(?!sponsor\/)/.test(_0xe3575c_1.pathname) || /^\/assets\/games\/(?:index\.html)?$/.test(_0xe3575c_1.pathname));
  } catch {
    return !1;
  }
}

if (_0xe3575c_3.homeLink && _0x2d90e6_1() && navigator.locks) {
  function _0xe3575c_b(_0xe3575c_0, _0xe3575c_1) {
    if (!_0xe3575c_0.isTrusted || 0 !== _0xe3575c_0.button || _0xe3575c_0.ctrlKey || _0xe3575c_0.metaKey || _0xe3575c_0.shiftKey || _0xe3575c_0.altKey) return;
    if (_0xe3575c_0.target?.closest?.("\x61\x2c\x62\x75\x74\x74\x6f\x6e\x2c\x74\x65\x78\x74\x61\x72\x65\x61\x2c\x73\x65\x6c\x65\x63\x74\x2c\x5b\x63\x6f\x6e\x74\x65\x6e\x74\x65\x64\x69\x74\x61\x62\x6c\x65\x3d\x22\x74\x72\x75\x65\x22\x5d\x2c\x2e\x6e\x79\x78\x2d\x68\x6f\x6d\x65\x2d\x73\x70\x6f\x6e\x73\x6f\x72\x2c\x2e\x6e\x79\x78\x2d\x73\x6f\x63\x69\x61\x6c\x2d\x73\x70\x6f\x6e\x73\x6f\x72")) return;
    const _0xe3575c_2 = _0xe3575c_9(_0xe3575c_0.target, _0xe3575c_1);
    _0xe3575c_2 && navigator.locks.request(_0xe3575c_7, {
      ifAvailable: !0
    }, _0xe3575c_4 => {
      if (_0xe3575c_4 && _0xe3575c_9(_0xe3575c_0.target, _0xe3575c_1) === _0xe3575c_2 && navigator.userActivation?.isActive) try {
        const _0xe3575c_0 = _0xe3575c_5();
        if (!_0xe3575c_0) return;
        const _0xe3575c_1 = Date.now(), _0xe3575c_2 = localStorage.getItem(_0xe3575c_6), _0xe3575c_4 = null === _0xe3575c_2 ? [] : JSON.parse(_0xe3575c_2);
        if (!Array.isArray(_0xe3575c_4) || _0xe3575c_4.some(_0xe3575c_0 => !Number.isFinite(_0xe3575c_0) || _0xe3575c_0 < 0)) return;
        const _0xe3575c_7 = _0xe3575c_4.filter(_0xe3575c_2 => _0xe3575c_1 - _0xe3575c_2 < _0xe3575c_0.period);
        if (_0xe3575c_7.length >= _0xe3575c_0.limit || _0xe3575c_7.some(_0xe3575c_2 => _0xe3575c_1 - _0xe3575c_2 < _0xe3575c_0.spacing)) return;
        const _0xe3575c_8 = window.__nyxNativeOpen;
        if ("\x66\x75\x6e\x63\x74\x69\x6f\x6e" != typeof _0xe3575c_8) return;
        const _0xe3575c_9 = _0xe3575c_4.filter(_0xe3575c_0 => _0xe3575c_1 - _0xe3575c_0 < _0xe3575c_3.homePeriodMs);
        localStorage.setItem(_0xe3575c_6, JSON.stringify([ ..._0xe3575c_9, _0xe3575c_1 ]));
        const _0xe3575c_a = _0xe3575c_8("\x61\x62\x6f\x75\x74\x3a\x62\x6c\x61\x6e\x6b", "\x5f\x62\x6c\x61\x6e\x6b");
        if (!_0xe3575c_a) return void (null === _0xe3575c_2 ? localStorage.removeItem(_0xe3575c_6) : localStorage.setItem(_0xe3575c_6, _0xe3575c_2));
        try {
          _0xe3575c_a.opener = null;
          const _0xe3575c_0 = _0xe3575c_a.document.createElement("\x6d\x65\x74\x61");
          _0xe3575c_0.name = "\x72\x65\x66\x65\x72\x72\x65\x72", _0xe3575c_0.content = "\x6e\x6f\x2d\x72\x65\x66\x65\x72\x72\x65\x72", _0xe3575c_a.document.head.append(_0xe3575c_0), 
          _0xe3575c_a.location.replace(_0xe3575c_3.homeLink);
        } catch {
          _0xe3575c_a.close();
        }
      } catch {}
    }).catch(() => {});
  }
  document.addEventListener("\x63\x6c\x69\x63\x6b", _0xe3575c_0 => _0xe3575c_b(_0xe3575c_0), {
    capture: !0
  });
  const _0xe3575c_d = new WeakSet;
  function _0xe3575c_c(_0xe3575c_0) {
    if (!_0xe3575c_a(_0xe3575c_0)) return;
    const _0xe3575c_1 = _0xe3575c_0.contentDocument;
    _0xe3575c_1 && !_0xe3575c_d.has(_0xe3575c_1) && (_0xe3575c_d.add(_0xe3575c_1), _0xe3575c_1.addEventListener("\x63\x6c\x69\x63\x6b", _0xe3575c_1 => _0xe3575c_b(_0xe3575c_1, _0xe3575c_0), {
      capture: !0
    }));
  }
  document.addEventListener("\x6c\x6f\x61\x64", _0xe3575c_0 => {
    _0xe3575c_0.target?.matches?.("\x69\x66\x72\x61\x6d\x65\x2e\x76\x69\x65\x77") && _0xe3575c_c(_0xe3575c_0.target);
  }, {
    capture: !0
  }), document.querySelectorAll("\x69\x66\x72\x61\x6d\x65\x2e\x76\x69\x65\x77").forEach(_0xe3575c_c);
}

_0xe3575c_2(), _0xe3575c_0(), _0xe3575c_1();
